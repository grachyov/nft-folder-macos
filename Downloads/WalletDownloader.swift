// ∅ nft-folder 2024

import Foundation

class WalletDownloader {
    
    private var networks = Network.allCases
    private var didStudy = false
    private var completion: () -> Void
    
    private lazy var fileDownloader = FileDownloader { [weak self] in
        if self?.didStudy == true {
            self?.completion()
        }
    }
    
    init(completion: @escaping () -> Void) {
        self.completion = completion
    }
    
    func study(wallet: WatchOnlyWallet) {
        let shouldGoThroughZora = processBundledTokensAndSeeIfShouldGoThroughZora(wallet: wallet)
        
        if shouldGoThroughZora {
            goThroughZora(wallet: wallet)
        }
        
        if !wallet.isCollection {
            getFolders(wallet: wallet)
        }
    }
    
    private func processBundledTokensAndSeeIfShouldGoThroughZora(wallet: WatchOnlyWallet) -> Bool {
        guard let collection = wallet.collections?.first else { return true }
        
        // TODO: check if there are bundled tokens for the collection
        // TODO: if there are bundled tokens, create and process [DownloadFileTask]
        // TODO: only create DownloadFileTask-s for tokens that are not downloaded yet — check existing metadata
        return true
    }
    
    private func getFolders(wallet: WatchOnlyWallet) {
        FolderSyncService.getOnchainSyncedFolder(wallet: wallet) { [weak self] snapshot in
            guard let snapshot = snapshot else { return }
            self?.applyFolderSnapshotIfNeeded(snapshot, for: wallet)
        }
        
        if let foldersFileURL = URL.foldersForUpcomingTokens(wallet: wallet),
           FileManager.default.fileExists(atPath: foldersFileURL.path),
           let data = try? Data(contentsOf: foldersFileURL),
           let model = try? JSONDecoder().decode(RemainingFoldersForTokens.self, from: data) {
            fileDownloader.useFoldersForTokens(model.dict, wallet: wallet)
        }
    }
    
    private func goThroughZora(wallet: WatchOnlyWallet) {
        goThroughZora(wallet: wallet, networkIndex: 0, endCursor: nil)
    }
    
    private func nextStepForZora(wallet: WatchOnlyWallet, networkIndex: Int, endCursor: String?, hasNextPage: Bool) {
        if hasNextPage {
            goThroughZora(wallet: wallet, networkIndex: networkIndex, endCursor: endCursor)
        } else if networkIndex + 1 < networks.count && !wallet.isCollection {
            goThroughZora(wallet: wallet, networkIndex: networkIndex + 1, endCursor: nil)
        } else {
            didStudy = true
            if !fileDownloader.hasPendingTasks {
                completion()
            }
        }
    }
    
    private func goThroughZora(wallet: WatchOnlyWallet, networkIndex: Int, endCursor: String?) {
        let network = wallet.collections?.first?.network ?? networks[networkIndex]
        let completion: (ZoraResponseData?) -> Void = { [weak self] result in
            guard let result = result?.tokens, !result.nodes.isEmpty else {
                self?.nextStepForZora(wallet: wallet, networkIndex: networkIndex, endCursor: nil, hasNextPage: false)
                return
            }
            
            self?.processResultTokensNodes(result.nodes, wallet: wallet, network: network)
            
            if let endCursor = result.pageInfo.endCursor {
                self?.nextStepForZora(wallet: wallet, networkIndex: networkIndex, endCursor: endCursor, hasNextPage: result.pageInfo.hasNextPage)
            }
        }
        if wallet.isCollection {
            ZoraApi.get(collection: wallet.address, networks: [network], endCursor: endCursor, completion: completion)
        } else {
            ZoraApi.get(owner: wallet.address, networks: [network], endCursor: endCursor, completion: completion)
        }
    }
    
    private func processResultTokensNodes(_ nodes: [Node], wallet: WatchOnlyWallet, network: Network) {
        guard let destination = URL.nftDirectory(wallet: wallet, createIfDoesNotExist: false) else { return }
        
        let tasks = nodes.map { node -> DownloadFileTask in
            let token = node.token
            let minimal = MinimalTokenMetadata(tokenId: token.tokenId, collectionAddress: token.collectionAddress, network: network)
            let detailed = token.detailedMetadata(network: network)
            return DownloadFileTask(walletRootDirectory: destination, minimalMetadata: minimal, detailedMetadata: detailed)
        }
        
        fileDownloader.addTasks(tasks, wallet: wallet)
    }
    
    private func applyFolderSnapshotIfNeeded(_ snapshot: Snapshot, for wallet: WatchOnlyWallet) {
        var allTokensToOrganize = [Token: [String]]()
        
        for folder in snapshot.folders where !folder.name.isEmpty {
            for token in folder.tokens {
                if let otherFolders = allTokensToOrganize[token] {
                    allTokensToOrganize[token] = otherFolders + [folder.name]
                } else {
                    allTokensToOrganize[token] = [folder.name]
                }
            }
        }
        
        FileDownloader.queue.async { [weak self] in
            guard let foldersForUpcomingTokensFileURL = URL.foldersForUpcomingTokens(wallet: wallet) else { return }
            try? FileManager.default.removeItem(at: foldersForUpcomingTokensFileURL)
            
            if let remaining = self?.organizeAlreadyDownloadedFiles(tokens: allTokensToOrganize, wallet: wallet) {
                if let cid = snapshot.cid {
                    Defaults.addKnownFolderCid(cid, isCidAttested: true, for: wallet)
                }
                
                if !remaining.isEmpty {
                    self?.fileDownloader.useFoldersForTokens(remaining, wallet: wallet)
                    let model = RemainingFoldersForTokens(dict: remaining)
                    let data = try? JSONEncoder().encode(model)
                    try? data?.write(to: foldersForUpcomingTokensFileURL, options: .atomic)
                }
            }
        }
    }
    
    private func organizeAlreadyDownloadedFiles(tokens: [Token: [String]], wallet: WatchOnlyWallet) -> [Token: [String]] {
        var wipTokens = tokens
        guard let baseURL = URL.nftDirectory(wallet: wallet, createIfDoesNotExist: false) else { return [:] }
        
        let fileManager = FileManager.default
        
        func goThroughFolder(url: URL) {
            guard let folderContents = try? fileManager.contentsOfDirectory(at: url, includingPropertiesForKeys: nil, options: .skipsHiddenFiles) else { return }
            for content in folderContents {
                if content.hasDirectoryPath {
                    goThroughFolder(url: content)
                } else if let metadata = MetadataStorage.minimalMetadata(filePath: content.path) {
                    let token = Token(id: metadata.tokenId, address: metadata.collectionAddress, chainId: String(metadata.network.rawValue), comment: nil)
                    if let folders = wipTokens[token], !folders.isEmpty {
                        for (index, folder) in folders.enumerated() {
                            let shouldCopyInsteadOfMoving = index < folders.count - 1
                            let destinationFolderURL = baseURL.appendingPathComponent(folder)
                            if !fileManager.fileExists(atPath: destinationFolderURL.path) {
                                try? fileManager.createDirectory(at: destinationFolderURL, withIntermediateDirectories: false, attributes: nil)
                            }
                            
                            let destinationTokenURL = destinationFolderURL.appending(component: content.lastPathComponent)
                            if content != destinationTokenURL {
                                if shouldCopyInsteadOfMoving {
                                    try? fileManager.copyItem(at: content, to: destinationTokenURL)
                                    MetadataStorage.store(minimalMetadata: metadata, filePath: destinationTokenURL.path)
                                } else {
                                    try? fileManager.moveItem(at: content, to: destinationTokenURL)
                                }
                            }
                        }
                        wipTokens.removeValue(forKey: token)
                        if wipTokens.isEmpty {
                            return
                        }
                    }
                }
            }
        }
        
        goThroughFolder(url: baseURL)
        return wipTokens
    }
    
    deinit {
        fileDownloader.invalidateAndCancel()
    }
    
}
