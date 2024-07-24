// ∅ nft-folder 2024

import SwiftUI

struct PlayerWindowConfig: Hashable, Codable, Identifiable {
    var id = UUID()
    var initialItemId: String?
}

struct PlayerView: View {
    
    @ObservedObject private var playerModel: PlayerModel
    private var config: PlayerWindowConfig
    
    init(config: PlayerWindowConfig) {
        self.config = config
        self.playerModel = PlayerModel(specificCollectionId: config.initialItemId, notTokenId: nil)
    }
    
    var body: some View {
        VStack {
            MobileWebView(htmlString: playerModel.currentToken.html)
            HStack {
                Button(action: {
                    DispatchQueue.main.async { playerModel.goBack() }
                }) {
                    Images.back
                }
                Button(action: {
                    DispatchQueue.main.async { playerModel.goForward() }
                }) {
                    Images.forward
                }
                Button(action: {
                    DispatchQueue.main.async { playerModel.changeCollection() }
                }) {
                    Images.changeCollection
                }
                Button(action: {
                    DispatchQueue.main.async { playerModel.showingInfoPopover.toggle() }
                }) {
                    Images.info
                }.popover(isPresented: Binding(
                    get: { playerModel.showingInfoPopover },
                    set: { newValue in
                        DispatchQueue.main.async {
                            playerModel.showingInfoPopover = newValue
                        }
                    }
                ), attachmentAnchor: .point(.top), arrowEdge: .top, content: {
                    infoPopoverView()
                })
            }
            .padding()
        }
    }
    
    
    private func viewOnWeb() {
        if let url = playerModel.currentToken.url {
            UIApplication.shared.open(url)
        }
    }
    
    private func infoPopoverView() -> some View {
        VStack(alignment: .leading, spacing: 10) {
            Text(playerModel.currentToken.displayName)
            Divider()
            Button(Strings.viewOnOpensea, action: viewOnWeb)
            if let instructions = playerModel.currentToken.instructions {
                Divider()
                Text(instructions).font(.body)
            }
        }
        .padding().frame(width: 230)
    }
    
}
