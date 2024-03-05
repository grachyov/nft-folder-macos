// ∅ nft-folder-macos 2024

import Foundation

class AllDownloadsManager {
 
    enum Status {
        case downloading, notDownloading
    }
    
    private(set) var statuses = [WatchOnlyWallet: Status]()
    
    static let shared = AllDownloadsManager()
    private init() {}
    
    private let walletsService = WalletsService.shared
    private var walletDownloaders = [WatchOnlyWallet: WalletDownloader]()
    
    func start() {
        SharedDefaults.downloadsInProgress = false
    }
    
    func stopAllDownloads() {
        for wallet in walletDownloaders.keys {
            stopDownloads(wallet: wallet)
        }
    }
    
    func startDownloads(wallet: WatchOnlyWallet) {
        SharedDefaults.downloadsInProgress = true
        statuses[wallet] = .downloading
        let walletDownloader = WalletDownloader { [weak self] in
            DispatchQueue.main.async {
                self?.stopDownloads(wallet: wallet)
            }
        }
        walletDownloader.study(wallet: wallet)
        postStatusUpdateNotification()
        walletDownloaders[wallet] = walletDownloader
    }
    
    func stopDownloads(wallet: WatchOnlyWallet) {
        statuses.removeValue(forKey: wallet)
        walletDownloaders.removeValue(forKey: wallet)
        postStatusUpdateNotification()
        
        if walletDownloaders.isEmpty {
            SharedDefaults.downloadsInProgress = false
        }
    }
    
    func prioritizeDownloads(mbAddressFolderName: String?) {}
    
    func prioritizeDownloads(wallet: WatchOnlyWallet) {}
    
    func syncOnUserRequestIfNeeded(mbAddressFolderName: String?) {
        if let folderName = mbAddressFolderName,
           let wallet = walletsService.wallet(folderName: folderName), statuses[wallet] != .downloading {
            startDownloads(wallet: wallet)
        } else {
            // TODO: mass sync
        }
    }
    
    func checkFolders() {
        let removedWallets = walletsService.checkFoldersForNewWalletsAndRemovedWallets { newWallet in
            self.startDownloads(wallet: newWallet)
        }
        for removedWallet in removedWallets {
            stopDownloads(wallet: removedWallet)
        }
    }
    
    private func postStatusUpdateNotification() {
        NotificationCenter.default.post(name: .downloadsStatusUpdate, object: nil)
    }
    
}
