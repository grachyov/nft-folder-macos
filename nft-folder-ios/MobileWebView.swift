// ∅ 2025 lil org

import SwiftUI
import WebKit

struct MobileWebView: UIViewRepresentable {
    let htmlString: String
    
    func makeUIView(context: Context) -> WKWebView {
        return MobileWebView.makeNewWebView()
    }
    
    func updateUIView(_ uiView: WKWebView, context: Context) {
        uiView.loadHTMLString(htmlString, baseURL: nil)
    }
    
    static func makeNewWebView() -> WKWebView {
        let webConfiguration = WKWebViewConfiguration()
        webConfiguration.suppressesIncrementalRendering = true
        let wkWebView = AutoReloadingWebView(frame: .zero, configuration: webConfiguration)
        wkWebView.isOpaque = false
        wkWebView.backgroundColor = .black
        wkWebView.scrollView.backgroundColor = .black
        wkWebView.scrollView.contentInsetAdjustmentBehavior = .never
        wkWebView.configuration.userContentController.addUserScript(WKUserScript(source: "document.addEventListener('contextmenu', function(e) { e.preventDefault(); }, false);", injectionTime: .atDocumentEnd, forMainFrameOnly: true))
        return wkWebView
    }
}

class AutoReloadingWebView: WKWebView {
    
    private var lastLoadedHtmlString: String?
    private var loadedForBounds: CGRect?
    
    override var bounds: CGRect {
        didSet {
            if bounds != oldValue, let html = lastLoadedHtmlString {
                _ = loadHTMLString(html, baseURL: nil)
            }
        }
    }
    
    override var frame: CGRect {
        didSet {
            if frame != oldValue, let html = lastLoadedHtmlString {
                _ = loadHTMLString(html, baseURL: nil)
            }
        }
    }
    
    override func loadHTMLString(_ string: String, baseURL: URL?) -> WKNavigation? {
        let newHtmlContent = lastLoadedHtmlString != string
        let newBounds = bounds != loadedForBounds
        
        if newHtmlContent {
            lastLoadedHtmlString = string
        }
        
        loadedForBounds = bounds
        
        guard hasVisibleSize, newBounds || newHtmlContent else { return nil }
        return super.loadHTMLString(string, baseURL: baseURL)
    }
    
    private var hasVisibleSize: Bool {
        return bounds.size.width > 5 && bounds.size.height > 5
    }
    
}
