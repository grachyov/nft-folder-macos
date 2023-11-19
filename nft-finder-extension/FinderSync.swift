// nft-folder-macos 2023 ethistanbul

import Cocoa
import FinderSync

class FinderSync: FIFinderSync {
    
    private let home = URL.nftDirectory!
    
    private enum Badge: String, CaseIterable {
        case base, unknown, wrong, ok
        
        var image: NSImage {
            switch self {
            case .base:
                return NSImage(named: NSImage.statusAvailableName)!
            case .unknown:
                return NSImage(named: NSImage.statusPartiallyAvailableName)!
            case .wrong:
                return NSImage(named: NSImage.statusUnavailableName)!
            case .ok:
                return NSImage(named: NSImage.statusAvailableName)!
            }
        }
    }
    
    override init() {
        super.init()
        FIFinderSyncController.default().directoryURLs = [home]
        setupBadgeImages()
    }
    
    private func setupBadgeImages() {
        for badge in Badge.allCases {
            FIFinderSyncController.default().setBadgeImage(badge.image, label: "", forBadgeIdentifier: badge.rawValue)
        }
    }
    
    private func setBadgeFor(url: URL) {
        let badge: Badge?
        var components = url.pathComponents
        guard components.count > 2 else { return }
        
        let folder = components.removeLast()
        let base = components.removeLast()
        
        if folder == "nft" {
            badge = .base
        } else if base == "nft" {
            // TODO: act depending on a folder
            badge = .unknown
        } else {
            badge = nil
        }
        
        if let id = badge?.rawValue {
            FIFinderSyncController.default().setBadgeIdentifier(id, for: url)
        }
    }
    
    // MARK: - Primary Finder Sync protocol methods
    
    override func beginObservingDirectory(at url: URL) {
        if url.path == URL.nftDirectory?.path, let deeplink = URL(string: URL.deeplinkScheme + "?monitor") {
            DispatchQueue.main.async { NSWorkspace.shared.open(deeplink) }
        }
    }
    
    override func endObservingDirectory(at url: URL) {
        if url.path == URL.nftDirectory?.path, let deeplink = URL(string: URL.deeplinkScheme + "?stop-monitoring") {
            DispatchQueue.main.async { NSWorkspace.shared.open(deeplink) }
        }
    }
    
    override func requestBadgeIdentifier(for url: URL) {
        setBadgeFor(url: url)
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
        guard let selectedItems = FIFinderSyncController.default().selectedItemURLs(),
              selectedItems.count == 1,
              let selectedPath = selectedItems.first?.path.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) else { return }
        if let url = URL(string: URL.deeplinkScheme + "?view=\(selectedPath)") {
            DispatchQueue.main.async { NSWorkspace.shared.open(url) }
        }
    }

}
