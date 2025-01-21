// ∅ 2025 lil org

import Cocoa

var sharedSourceWindow: RenderingSourceWindow? // TODO: refactor
var currentGeneratedToken: GeneratedToken?

@main
class AppDelegate: NSObject, NSApplicationDelegate {
    
    var window: NSWindow?
    private weak var pipVideoSourceViewController: PipVideoSourceViewController?
    
    func applicationDidFinishLaunching(_ aNotification: Notification) {
        DistributedNotificationCenter.default().addObserver(
            self,
            selector: #selector(receiveTokenNotification(_:)),
            name: Notification.Name("MyTokenNotification"), // TODO: refactor
            object: nil, suspensionBehavior: .deliverImmediately
        )

        createPipVideoSourceWindow()
        
        sharedSourceWindow = RenderingSourceWindow() // TODO: tmp, will only go in agent
    }

    @objc func receiveTokenNotification(_ notification: Notification) {
        guard let jsonString = notification.object as? String,
              let data = jsonString.data(using: .utf8),
              let token = try? JSONDecoder().decode(GeneratedToken.self, from: data) else { return }
        currentGeneratedToken = token
        sharedSourceWindow?.reloadDisplayedToken()
        pipVideoSourceViewController?.didReceivePipNotificationWithToken(token)
    }
    
    private func createPipVideoSourceWindow() {
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
        
        let viewController = PipVideoSourceViewController()
        window?.contentViewController = viewController
        window?.makeKeyAndOrderFront(nil) // TODO: not sure it's needed
        window?.contentView?.isHidden = true
        
        self.pipVideoSourceViewController = viewController
    }
    
    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        return false
    }
    
}
