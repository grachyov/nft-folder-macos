// nft-folder-macos 2023 ethistanbul

import Cocoa
import FinderSync

class FinderSync: FIFinderSync {
    
    override init() {
        super.init()
        NSLog("FinderSync() launched from %@", Bundle.main.bundlePath as NSString)
        FIFinderSyncController.default().directoryURLs = [URL.nftDirectory!]
        
        // Set up images for our badge identifiers. For demonstration purposes, this uses off-the-shelf images.
        FIFinderSyncController.default().setBadgeImage(NSImage(named: NSImage.colorPanelName)!, label: "Status One" , forBadgeIdentifier: "One")
        FIFinderSyncController.default().setBadgeImage(NSImage(named: NSImage.cautionName)!, label: "Status Two", forBadgeIdentifier: "Two")
    }
    
    // MARK: - Primary Finder Sync protocol methods
    
    override func beginObservingDirectory(at url: URL) {
        if url.lastPathComponent == URL.nftDirectory?.lastPathComponent, let deeplink = URL(string: URL.deeplinkScheme + "?monitor") {
            DispatchQueue.main.async { NSWorkspace.shared.open(deeplink) }
        }
    }
    
    override func endObservingDirectory(at url: URL) {
        if url.lastPathComponent == URL.nftDirectory?.lastPathComponent, let deeplink = URL(string: URL.deeplinkScheme + "?stop-monitoring") {
            DispatchQueue.main.async { NSWorkspace.shared.open(deeplink) }
        }
    }
    
    override func requestBadgeIdentifier(for url: URL) {
        NSLog("requestBadgeIdentifierForURL: %@", url.path as NSString)
        
        // For demonstration purposes, this picks one of our two badges, or no badge at all, based on the filename.
        let whichBadge = abs(url.path.hash) % 3
        let badgeIdentifier = ["", "One", "Two"][whichBadge]
        FIFinderSyncController.default().setBadgeIdentifier(badgeIdentifier, for: url)
    }
    
    // MARK: - Menu and toolbar item support
    
    override var toolbarItemName: String {
        return "nft"
    }
    
    override var toolbarItemToolTip: String {
        return "click for a menu"
    }
    
    override var toolbarItemImage: NSImage {
        return NSImage(named: "icon")!
    }
    
    override func menu(for menuKind: FIMenuKind) -> NSMenu {
        let menu = NSMenu(title: "")
        switch menuKind {
        case .contextualMenuForItems:
            menu.addItem(withTitle: "💎 view nft", action: #selector(nftView(_:)), keyEquivalent: "")
        case .toolbarItemMenu:
            menu.addItem(withTitle: "📂 open nft folder", action: #selector(openNFTDirectory(_:)), keyEquivalent: "")
            menu.addItem(withTitle: "🆕 add a wallet", action: #selector(addWallet(_:)), keyEquivalent: "")
        case .contextualMenuForContainer, .contextualMenuForSidebar:
            break
        @unknown default:
            break
        }
        return menu
    }
    
    @IBAction private func addWallet(_ sender: AnyObject?) {
        if let url = URL(string: URL.deeplinkScheme + "?add") {
            DispatchQueue.main.async { NSWorkspace.shared.open(url) }
        }
    }
    
    @IBAction private func openNFTDirectory(_ sender: AnyObject?) {
        if let url = URL.nftDirectory {
            DispatchQueue.main.async { NSWorkspace.shared.open(url) }
        }
    }
    
    @IBAction private func nftView(_ sender: AnyObject?) {
        // TODO: implement
        let target = FIFinderSyncController.default().targetedURL()
        let items = FIFinderSyncController.default().selectedItemURLs()
        
        let item = sender as! NSMenuItem
        NSLog("sampleAction: menu item: %@, target = %@, items = ", item.title as NSString, target!.path as NSString)
        for obj in items! {
            NSLog("    %@", obj.path as NSString)
        }
    }

}
