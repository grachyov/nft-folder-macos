// ∅ nft-folder 2024

import Cocoa

struct FolderSyncService {
    
    static func pushCustomFolders(wallet: WatchOnlyWallet) {
        Alerts.showConfirmation(message: Strings.pushCustomFolders + "?", text: wallet.folderDisplayName) { confirmed in
            if confirmed {
                uploadFoldersToIpfsAndSaveOnchain(wallet: wallet)
            }
        }
    }
    
    static func getOnchainSyncedFolder(wallet: WatchOnlyWallet, completion: @escaping (Snapshot?) -> Void) {
        let url = URL(string: "\(URL.easScanBase)/graphql")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        let query: [String: Any] = [
            "query": """
                query Attestation {
                    attestations(
                        take: 1,
                        orderBy: { timeCreated: desc},
                        where: { schemaId: { equals: "\(URL.attestationSchemaId)" }, recipient: { equals: "\(wallet.address)" }, attester: { equals: "\(wallet.address)" } }
                    ) {
                        attester
                        recipient
                        decodedDataJson
                        timeCreated
                    }
                }
            """,
            "variables": [:]
        ]
        guard let data = try? JSONSerialization.data(withJSONObject: query) else { return }
        request.httpBody = data
        let task = URLSession.shared.dataTask(with: request) { data, _, _ in
            // TODO: retry when appropriate
            if let data = data, let attestationResponse = try? JSONDecoder().decode(AttestationResponse.self, from: data), let cid = attestationResponse.cid {
                getSyncedFolderFromIpfs(cid: cid, completion: completion)
            } else {
                print("hmm")
            }
        }
        
        task.resume()
    }
    
    private static func getSyncedFolderFromIpfs(cid: String, completion: @escaping (Snapshot?) -> Void) {
        guard let url = URL(string: URL.ipfsGateway + cid) else { return }
        let task = URLSession.shared.dataTask(with: url) { data, _, _ in
            // TODO: retry when appropriate
            if let data = data, let snapshot = try? JSONDecoder().decode(Snapshot.self, from: data) {
                DispatchQueue.main.async { completion(snapshot) }
            } else {
                print("hmm")
            }
        }
        
        task.resume()
    }
    
    private static func uploadFoldersToIpfsAndSaveOnchain(wallet: WatchOnlyWallet) {
        guard let snapshot = makeFoldersSnapshot(wallet: wallet), let fileData = try? JSONEncoder().encode(snapshot) else {
            Alerts.showSomethingWentWrong()
            return
        }
        
        IpfsUploader.upload(name: wallet.address, mimeType: "application/json", data: fileData) { cid in
            if let cid = cid, let url = URL.newAttestation(recipient: wallet.address, cid: cid, folderType: 0, formatVersion: 0) {
                NSWorkspace.shared.open(url)
            } else {
                Alerts.showSomethingWentWrong()
            }
        }
    }
    
    private static func makeFoldersSnapshot(wallet: WatchOnlyWallet) -> Snapshot? {
        // TODO: check if folders were changed
        guard let url = URL.nftDirectory(wallet: wallet, createIfDoesNotExist: false) else { return nil }
        let folders = foldersToSync(url: url)
        let nonce = 0 // TODO: bump previous when available
        let snapshot = Snapshot(folders: folders,
                                folderType: 0,
                                formatVersion: 0,
                                address: wallet.address,
                                uuid: UUID().uuidString,
                                nonce: nonce,
                                timestamp: Int(Date().timeIntervalSince1970),
                                metadata: nil)
        return snapshot
    }
    
    private static func foldersToSync(url: URL) -> [Folder] {
        let fileManager = FileManager.default
        var folders = [Folder]()
        if let rootContents = try? fileManager.contentsOfDirectory(at: url, includingPropertiesForKeys: nil, options: .skipsHiddenFiles) {
            for item in rootContents {
                if item.hasDirectoryPath {
                    let tokens = tokensInFolder(url: item)
                    let folder = Folder(name: item.lastPathComponent, tokens: tokens, metadata: nil)
                    folders.append(folder)
                }
            }
        }
        return folders
    }
    
    private static func tokensInFolder(url: URL) -> [Token] {
        let fileManager = FileManager.default
        var tokens = [Token]()
        if let folderContents = try? fileManager.contentsOfDirectory(at: url, includingPropertiesForKeys: nil, options: .skipsHiddenFiles) {
            for content in folderContents {
                if content.hasDirectoryPath {
                    let deepTokens = tokensInFolder(url: content)
                    tokens.append(contentsOf: deepTokens)
                } else if let metadata = MetadataStorage.minimalMetadata(filePath: content.path) {
                    let token = Token(chainId: String(metadata.network.rawValue), tokenId: metadata.tokenId, address: metadata.collectionAddress)
                    tokens.append(token)
                }
            }
        }
        return tokens
    }
    
}
