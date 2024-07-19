// ∅ nft-folder 2024

import SwiftUI
import AppKit

struct LocalHtmlView: View {
    
    private var windowNumber = 0
    private weak var playerMenuDelegate: PlayerMenuDelegate?
    
    @ObservedObject var playerModel: PlayerModel
    @State private var isFullscreen = false
    
    init(playerModel: PlayerModel, windowNumber: Int, playerMenuDelegate: PlayerMenuDelegate) {
        self.playerModel = playerModel
        self.windowNumber = windowNumber
        self.playerMenuDelegate = playerMenuDelegate
    }
    
    var body: some View {
        ZStack(alignment: .topTrailing, content: {
            Rectangle().frame(width: 62, height: isFullscreen ? 32 : 0).background(.clear).popover(isPresented: Binding(
                get: { playerModel.showingInfoPopover },
                set: { newValue in
                    DispatchQueue.main.async {
                        playerModel.showingInfoPopover = newValue
                    }
                }
            ), attachmentAnchor: .point(.bottomLeading), arrowEdge: .bottom, content: {
                infoPopoverView()
            })
            
            Rectangle().frame(width: isFullscreen ? 2 : 39, height: isFullscreen ? 32 : 0).background(.clear).popover(isPresented: Binding(
                get: { playerModel.showingListPopover },
                set: { newValue in
                    DispatchQueue.main.async {
                        playerModel.showingListPopover = newValue
                    }
                }
            ), attachmentAnchor: .point(.bottomLeading), arrowEdge: .bottom, content: {
                listPopoverView()
            })
            
            DesktopWebView(htmlContent: playerModel.currentToken.html, playerMenuDelegate: playerMenuDelegate)
                .onAppear {
                    updateFullscreenStatus()
                }
                .frame(minWidth: 200, maxWidth: .infinity, minHeight: 200, maxHeight: .infinity).background(.black)
                .onReceive(NotificationCenter.default.publisher(for: NSWindow.didEnterFullScreenNotification)) { notification in
                    if (notification.object as? NSWindow)?.windowNumber == windowNumber {
                        NSCursor.setHiddenUntilMouseMoves(true)
                        isFullscreen = true
                    }
                }
                .onReceive(NotificationCenter.default.publisher(for: NSWindow.didExitFullScreenNotification)) { notification in
                    if (notification.object as? NSWindow)?.windowNumber == windowNumber {
                        isFullscreen = false
                    }
                }
            
            if (playerModel.showingInfoPopover || playerModel.showingListPopover) && isFullscreen {
                Text(playerModel.currentToken.displayName).padding(EdgeInsets(top: 6, leading: 10, bottom: 6, trailing: 10)).font(.callout).foregroundColor(.primary).background(.thickMaterial)
            }
        })
    }
    
    private func updateFullscreenStatus() {
        if let window = NSApplication.shared.windows.first(where: { $0.windowNumber == windowNumber }) {
            isFullscreen = window.styleMask.contains(.fullScreen)
            if isFullscreen {
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
    
    private func listPopoverView() -> some View {
        // TODO: add playlist configuration
        VStack(alignment: .leading, spacing: 10) {
            Text(Strings.experimetalOfflineGeneration).font(.headline)
            Text(Strings.letUsKnowOfIssues).font(.footnote)
        }
        .padding().frame(width: 230)
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
        }
        .padding().frame(width: 230)
    }
    
}
