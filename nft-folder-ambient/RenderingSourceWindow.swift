import Cocoa
import QuartzCore
import WebKit

class RenderingSourceWindow: NSWindow {
    
    private var remoteContext: AnyObject?
    private var contextId: UInt32 = 0
    
    private var webView: WKWebView?
    
    init() {
        let frame = NSRect(x: 0, y: 0, width: Defaults.pipWidth, height: Defaults.pipWidth)
        super.init(
            contentRect: frame,
            styleMask: [.borderless],
            backing: .buffered,
            defer: false
        )
        
        collectionBehavior = [
            .canJoinAllSpaces,
            .stationary,
            .ignoresCycle,
            .fullScreenAuxiliary,
            .canJoinAllApplications,
            .fullScreenDisallowsTiling
        ]
        
        level = .statusBar
        isMovable = false
        ignoresMouseEvents = true
        backgroundColor = .clear
        center()
        orderFrontRegardless()
        
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
    
    func updateSize(size: CGSize) {
        webView?.setFrameSize(size)
        center()
        Defaults.pipWidth = size.width
    }
    
    func forceRefresh() {
        reloadDisplayedToken()
    }
    
    func reloadDisplayedToken() {
        if let html = currentGeneratedToken?.html {
            webView?.loadHTMLString(html, baseURL: nil)
        }
    }
    
    func getContextId() -> UInt32 {
        return contextId
    }
    
    private func setupWebView() {
        guard let contentView = contentView else { return }
        let webView = WKWebView.forPip(withFrame: contentView.bounds)
        contentView.addSubview(webView)
        NSLayoutConstraint.activate([
            webView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            webView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
            webView.topAnchor.constraint(equalTo: contentView.topAnchor),
            webView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor)
        ])
        self.webView = webView
        center()
        if let html = currentGeneratedToken?.html {
            webView.loadHTMLString(html, baseURL: nil)
        }
    }
    
    private func setupLayerSharing() {
        let options: NSDictionary = [:]
        let prefix = "ca".uppercased()
        let suffix = ":"
        if let contextClass = NSClassFromString("\(prefix)\(Consts.context.capitalized)") as? NSObject.Type,
           let contextInstance = contextClass.perform(Selector(("remote\(Consts.context.capitalized)With" + Consts.options.capitalized + suffix)), with: options)?.takeUnretainedValue() {
            remoteContext = contextInstance
            
            if let layer = webView?.layer {
                remoteContext?.setValue(layer, forKey: Consts.layer)
            }
            
            if let retrievedContextId = remoteContext?.value(forKey: Consts.context + "Id") as? UInt32 {
                contextId = retrievedContextId
            }
        }
    }
    
}
