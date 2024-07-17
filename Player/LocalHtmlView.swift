// ∅ nft-folder 2024

import SwiftUI
import AppKit

struct LocalHtmlView: View {
    
    private var windowNumber = 0
    
    @ObservedObject var playerModel: PlayerModel
    
    init(playerModel: PlayerModel, windowNumber: Int) {
        self.playerModel = playerModel
        self.windowNumber = windowNumber
    }
    
    var body: some View {
        DesktopWebView(htmlContent: playerModel.currentToken.html)
            .onAppear {
                updateFullscreenStatus()
            }
            .frame(minWidth: 200, maxWidth: .infinity, minHeight: 200, maxHeight: .infinity).background(.black)
            .onReceive(NotificationCenter.default.publisher(for: NSWindow.didEnterFullScreenNotification)) { notification in
                if (notification.object as? NSWindow)?.windowNumber == windowNumber {
                    NSCursor.setHiddenUntilMouseMoves(true)
                }
            }
            .popover(isPresented: Binding(
                get: { playerModel.showingInfoPopover },
                set: { newValue in
                    DispatchQueue.main.async {
                        playerModel.showingInfoPopover = newValue
                    }
                }
            ), attachmentAnchor: .point(.top), arrowEdge: .bottom, content: {
                infoPopoverView()
            })
        
    }
    
    private func updateFullscreenStatus() {
        if let window = NSApplication.shared.windows.first(where: { $0.windowNumber == windowNumber }) {
            if window.styleMask.contains(.fullScreen) {
                NSCursor.setHiddenUntilMouseMoves(true)
            }
        }
    }
    
    private func viewOnWeb() {
        if let url = playerModel.currentToken.url {
            NSWorkspace.shared.open(url)
        }
    }
    
    private func getScreensaver() {
        if let screensaver = playerModel.currentToken.screensaver {
            NSWorkspace.shared.open(screensaver)
        }
    }
    
    private func infoPopoverView() -> some View {
        VStack(alignment: .leading, spacing: 10) {
            if playerModel.currentToken.screensaver != nil {
                Button(Strings.setScreenSaver, action: getScreensaver).buttonStyle(LinkButtonStyle()).fontWeight(Font.Weight.semibold)
                Divider()
            }
            
            Button(Strings.viewOnOpensea, action: viewOnWeb).buttonStyle(LinkButtonStyle()).fontWeight(Font.Weight.semibold)
            
            if let instructions = playerModel.currentToken.instructions {
                Divider()
                Text(instructions).font(.body)
            }
            
            Divider()
            
            Text(Strings.experimetalOfflineGeneration).font(.headline)
            Text(Strings.letUsKnowOfIssues).font(.footnote)
        }
        .padding().frame(width: 230)
    }
    
}
