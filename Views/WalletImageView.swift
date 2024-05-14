// ∅ nft-folder 2024

import SwiftUI
import Combine

struct WalletImageView: View {
    
    @StateObject private var avatarLoader = AvatarLoader()
    let wallet: WatchOnlyWallet
    
    init(wallet: WatchOnlyWallet) {
        self.wallet = wallet
        _avatarLoader = StateObject(wrappedValue: AvatarLoader())
    }
    
    var body: some View {
        Group {
            if let nsImage = avatarLoader.avatar {
                Image(nsImage: nsImage)
                    .resizable()
                    .background(Color.white)
                    .scaleEffect(1.042)
                    .scaledToFill()
                    .clipShape(Circle())
            }
        }.scaleEffect(1.023)
        .onAppear {
            avatarLoader.loadAvatar(wallet: wallet)
        }
    }
    
}

private class AvatarLoader: ObservableObject {
    @Published var avatar: NSImage?
    
    func loadAvatar(wallet: WatchOnlyWallet) {
        AvatarService.getAvatar(wallet: wallet) { image in
            DispatchQueue.main.async {
                self.avatar = image
            }
        }
    }
    
}
