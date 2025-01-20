import Cocoa
import QuartzCore
import WebKit

class SourceWindow: NSWindow {
    
    private var sourceLayer: CALayer!
    private var remoteContext: AnyObject?
    private var contextId: UInt32 = 0
    
    private var webView: WKWebView!
    
    init() {
        let frame = NSMakeRect(0, 0, 800, 600)
        super.init(
            contentRect: frame,
            styleMask: [.borderless],
            backing: .buffered,
            defer: false
        )

        level = .floating
        backgroundColor = .clear
        makeKeyAndOrderFront(nil)
        
        contentView?.wantsLayer = true
        setupWebView()
        contentView?.alphaValue = 0.001
        
        DispatchQueue.main.async { [weak self] in
            self?.setupLayerSharing()
        }
    }
    
    override var canBecomeKey: Bool {
        return false
    }
    
    override var canBecomeMain: Bool {
        return false
    }
    
    private func setupWebView() {
        let webViewFrame = NSRect(x: 0, y: 0, width: 1000, height: 1000)
        webView = WKWebView(frame: webViewFrame)
        webView.wantsLayer = true
        webView.loadHTMLString(htmlString, baseURL: nil)
        self.contentView?.addSubview(webView)
    }
    
}

extension SourceWindow {
    
    func setupLayerSharing() {
        let options: NSDictionary = [:]
        
        if let contextClass = NSClassFromString("CAContext") as? NSObject.Type,
           let contextInstance = contextClass.perform(Selector(("remoteContextWithOptions:")), with: options)?.takeUnretainedValue() {
            remoteContext = contextInstance
            remoteContext?.setValue(webView.layer, forKey: "layer")
            
            if let retrievedContextId = remoteContext?.value(forKey: "contextId") as? UInt32 {
                contextId = retrievedContextId
                print("Renderer: CAContext's layer set for export with ID \(contextId).")
            } else {
                print("Failed to retrieve CAContext ID.")
            }
        } else {
            print("Failed to create CAContext.")
        }
    }
    
    func getContextID() -> UInt32 {
        return contextId
    }
    
}
