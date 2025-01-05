// ∅ 2025 lil org

import SwiftUI
import WebKit

struct VisionWebView: UIViewRepresentable {
    let htmlString: String
    
    func makeUIView(context: Context) -> WKWebView {
        let webConfiguration = WKWebViewConfiguration()
        webConfiguration.suppressesIncrementalRendering = true
        let wkWebView = WKWebView(frame: .zero, configuration: webConfiguration)
        wkWebView.isOpaque = false
        wkWebView.backgroundColor = .black
        wkWebView.scrollView.backgroundColor = .black
        #if os(iOS)
        wkWebView.scrollView.contentInsetAdjustmentBehavior = .never
        #endif
        wkWebView.configuration.userContentController.addUserScript(WKUserScript(source: "document.addEventListener('contextmenu', function(e) { e.preventDefault(); }, false);", injectionTime: .atDocumentEnd, forMainFrameOnly: true))
        return wkWebView
    }
    
    func updateUIView(_ uiView: WKWebView, context: Context) {
        uiView.loadHTMLString(htmlString, baseURL: nil)
    }
}
