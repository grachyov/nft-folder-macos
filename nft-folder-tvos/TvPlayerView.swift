// ∅ nft-folder 2024

import SwiftUI

struct TvPlayerView: View {
    
    @ObservedObject private var playerModel: PlayerModel
    
    init(initialItemId: String?) {
        self.playerModel = PlayerModel(specificCollectionId: initialItemId, notTokenId: nil)
    }
    
    var body: some View {
        GeneratedTokenView(contentString: playerModel.currentToken.html).edgesIgnoringSafeArea(.all)
            .onAppear() {
                if !playerModel.history.isEmpty {
                    playerModel.goForward()
                }
            }
    }
    
    private func infoPopoverView() -> some View {
        VStack(alignment: .leading, spacing: 10) {
            Text(playerModel.currentToken.displayName)
            Divider()
            if let instructions = playerModel.currentToken.instructions {
                Divider()
                Text(instructions).font(.body)
            }
        }
        .padding().frame(width: 230)
    }
    
}
