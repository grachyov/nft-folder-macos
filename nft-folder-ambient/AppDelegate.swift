// ∅ 2025 lil org

import Cocoa

var sharedSourceWindow: SourceWindow? // TODO: refactor
var currentGeneratedToken: GeneratedToken?

@main
class AppDelegate: NSObject, NSApplicationDelegate {
    
    var window: NSWindow?
    private weak var pipPlaceholderViewController: PipPlaceholderViewController?
    
    func applicationDidFinishLaunching(_ aNotification: Notification) {
        DistributedNotificationCenter.default().addObserver(
            self,
            selector: #selector(receiveTokenNotification(_:)),
            name: Notification.Name("MyTokenNotification"), // TODO: refactor
            object: nil, suspensionBehavior: .deliverImmediately
        )

        createMainWindow()
        
        sharedSourceWindow = SourceWindow() // TODO: tmp, will only go in agent
    }

    @objc func receiveTokenNotification(_ notification: Notification) {
        NSLog("Agent: receiveTokenNotification.")
        
        guard let jsonString = notification.object as? String,
              let data = jsonString.data(using: .utf8) else {
            NSLog("Agent: No valid JSON received in notification.")
            return
        }

        do {
            let token = try JSONDecoder().decode(GeneratedToken.self, from: data)
            currentGeneratedToken = token
            NSLog("Agent: Decoded token: \(token)")
            sharedSourceWindow?.reloadDisplayedToken()
            pipPlaceholderViewController?.didReceivePipNotificationWithToken(token)
        } catch {
            NSLog("Agent: Error decoding token: \(error.localizedDescription)")
        }
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
        
        self.pipPlaceholderViewController = viewController
    }
    
    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        return false
    }
    
}
