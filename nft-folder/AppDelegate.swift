// ∅ 2025 lil org

import Cocoa

var pipPlaceholderViewController: PipPlaceholderViewController?

@main
class AppDelegate: NSObject, NSApplicationDelegate {
    
    var window: NSWindow?
    
    private var didFinishLaunching = false
    private var initialMessage: ExtensionMessage?
    
    private let currentInstanceId = UUID().uuidString
    
    private let allDownloadsManager = AllDownloadsManager.shared
    
    override init() {
        super.init()
        let manager = NSAppleEventManager.shared()
        manager.setEventHandler(self, andSelector: #selector(self.getUrl(_:withReplyEvent:)),
                                forEventClass: AEEventClass(kInternetEventClass),
                                andEventID: AEEventID(kAEGetURL))
    }
    
    private func createMainWindow() {
        let windowRect = NSRect(x: 0, y: 0, width: 100, height: 100) // TODO: try 0, 0 too
        
        window = NSWindow(
            contentRect: windowRect,
            styleMask: [.borderless],
            backing: .buffered,
            defer: false
        )
        
        window?.isReleasedWhenClosed = false
        window?.center()
        window?.level = .floating
        window?.isMovable = false
        window?.ignoresMouseEvents = true
        window?.backgroundColor = .clear
        
        let viewController = PipPlaceholderViewController()
        window?.contentViewController = viewController
        window?.makeKeyAndOrderFront(nil) // TODO: not sure it's needed
        window?.contentView?.isHidden = true
        NSLog("did create main window")
        
        pipPlaceholderViewController = viewController
    }
    
    func applicationDidFinishLaunching(_ aNotification: Notification) {
        setupWindows()
        return // TODO: tmp
        
        cleanupDefaultsIfNeeded()
        createDirectoryIfNeeded()
        didFinishLaunching = true
        
        NSApplication.shared.servicesProvider = RightClickServiceProvider()
        NSUpdateDynamicServices()
        
        if let initialMessage = initialMessage {
            processMessage(initialMessage)
            self.initialMessage = nil
        } else {
            Navigator.shared.showControlCenter(addWallet: false)
        }
        
        let notificationCenter = DistributedNotificationCenter.default()
        notificationCenter.post(name: .mustTerminate, object: currentInstanceId)
        notificationCenter.addObserver(self, selector: #selector(terminateInstance(_:)), name: .mustTerminate, object: nil, suspensionBehavior: .deliverImmediately)
        notificationCenter.addObserver(self, selector: #selector(processFinderMessage(_:)), name: .fromFinder, object: nil, suspensionBehavior: .deliverImmediately)
        
        allDownloadsManager.start()
        StatusBarItem.shared.showIfNeeded()
        AvatarService.setup()
        
        createMainWindow()
    }
    
    private func cleanupDefaultsIfNeeded() {
        let currentVersion = Defaults.cleanupVersion
        if currentVersion == 0 {
            Defaults.performCleanup(version: currentVersion)
            SharedDefaults.performCleanup(version: currentVersion)
            Defaults.cleanupVersion = 1
        }
    }
    
    func applicationWillTerminate(_ aNotification: Notification) {
        DistributedNotificationCenter.default().removeObserver(self)
    }
    
    @objc private func processFinderMessage(_ notification: Notification) {
        guard let messageString = notification.object as? String,
              let message = ExtensionMessage.decodedFrom(string: messageString) else { return }
        DispatchQueue.main.async { [weak self] in
            self?.processMessage(message)
        }
    }
    
    private func processMessage(_ message: ExtensionMessage) {
        guard didFinishLaunching else {
            initialMessage = message
            return
        }
        
        switch message {
        case .didSelectSyncMenuItem(let mbAddressFolderName):
            allDownloadsManager.syncOnUserRequestIfNeeded(mbAddressFolderName: mbAddressFolderName)
        case .didSelectControlCenterMenuItem:
            Navigator.shared.showControlCenter(addWallet: false)
        case .didSelectViewOnMenuItem(let paths, let gallery):
            for path in paths {
                if let filePath = path.removingPercentEncoding {
                    Navigator.shared.show(filePath: filePath, on: gallery)
                }
            }
        case .didBeginObservingDirectory(let mbAddressName):
            allDownloadsManager.prioritizeDownloads(mbAddressFolderName: mbAddressName)
        case .didEndObservingDirectory:
            break
        case .somethingChangedInHomeDirectory:
            allDownloadsManager.checkFolders()
        case .didSelectStopAllDownloadsMenuItem:
            allDownloadsManager.stopAllDownloads()
        case .didSelectNewFolderMenuItem:
            Navigator.shared.showNewFolderInput()
        }
    }
    
    @objc private func terminateInstance(_ notification: Notification) {
        guard let senderId = notification.object as? String else { return }
        if senderId != currentInstanceId {
            NSApplication.shared.terminate(nil)
        }
    }
    
    func application(_ application: NSApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([NSUserActivityRestoring]) -> Void) -> Bool {
        processInput(urlString: userActivity.webpageURL?.absoluteString)
        return true
    }
    
    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        return false
    }
    
    private func createDirectoryIfNeeded() {
        _ = URL.nftDirectory
    }
    
    @objc private func getUrl(_ event: NSAppleEventDescriptor, withReplyEvent replyEvent: NSAppleEventDescriptor) {
        processInput(urlString: event.paramDescriptor(forKeyword: keyDirectObject)?.stringValue)
    }
    
    private func processInput(urlString: String?) {
        if let urlString = urlString, urlString.hasPrefix(URL.deeplinkScheme),
           let message = ExtensionMessage.decodedFrom(string: String(urlString.dropFirst(URL.deeplinkScheme.count))) {
            DispatchQueue.main.async { [weak self] in
                self?.processMessage(message)
            }
        }
    }
    
    func applicationShouldHandleReopen(_ sender: NSApplication, hasVisibleWindows flag: Bool) -> Bool {
        Navigator.shared.showControlCenter(addWallet: false)
        return true
    }
    
}
