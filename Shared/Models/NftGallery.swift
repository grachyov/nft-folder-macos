// ∅ nft-folder-macos 2024

import Cocoa

enum NftGallery: Int, CaseIterable, Codable {
    
    static let referrer = "0xE26067c76fdbe877F48b0a8400cf5Db8B47aF0fE"
    
    case zora, mintfun, opensea, local
    
    var image: NSImage {
        switch self {
        case .local:
            return Images.folder
        case .zora:
            return Images.zora
        case .mintfun:
            return Images.mintfun
        case .opensea:
            return Images.opensea
        }
    }
    
    var title: String {
        switch self {
        case .local:
            Strings.nftInfo
        case .zora:
            Strings.zora
        case .mintfun:
            Strings.mintfun
        case .opensea:
            Strings.opensea
        }
    }
    
    func url(wallet: WatchOnlyWallet) -> URL? {
        if let collectionNetwork = wallet.collections?.first?.network {
            return url(network: collectionNetwork, collectionAddress: wallet.address, tokenId: nil)
        } else {
            return url(walletAddress: wallet.address)
        }
    }
    
    private func url(walletAddress: String) -> URL? {
        switch self {
        case .local:
            return nil
        case .zora:
            return URL(string: "https://zora.co/\(walletAddress)?referrer=\(NftGallery.referrer)")
        case .mintfun:
            return URL(string: "https://mint.fun/profile/\(walletAddress)?ref=\(NftGallery.referrer)")
        case .opensea:
            return URL(string: "https://opensea.io/\(walletAddress)")
        }
    }
    
    func url(network: Network, collectionAddress: String, tokenId: String?) -> URL? {
        switch self {
        case .local:
            return nil
        case .zora:
            let prefix: String
            switch network {
            case .ethereum:
                prefix = "eth"
            case .optimism:
                prefix = "optimism"
            case .zora:
                prefix = "zora"
            case .base:
                prefix = "base"
            case .arbitrum:
                prefix = "arbitrum"
            case .blast:
                prefix = "blast"
            }
            return URL(string: "https://zora.co/collect/\(prefix):\(collectionAddress)/\(tokenId ?? "")?referrer=\(NftGallery.referrer)")
        case .mintfun:
            let prefix: String
            switch network {
            case .ethereum:
                prefix = "ethereum"
            case .optimism:
                prefix = "op"
            case .zora:
                prefix = "zora"
            case .base:
                prefix = "base"
            case .arbitrum:
                prefix = "arbitrum"
            case .blast:
                prefix = "blast"
            }
            return URL(string: "https://mint.fun/\(prefix)/\(collectionAddress)?ref=\(NftGallery.referrer)")
        case .opensea:
            let prefix: String
            switch network {
            case .ethereum:
                prefix = "ethereum"
            case .optimism:
                prefix = "optimism"
            case .zora:
                prefix = "zora"
            case .base:
                prefix = "base"
            case .arbitrum:
                prefix = "arbitrum"
            case .blast:
                prefix = "blast"
            }
            return URL(string: "https://opensea.io/assets/\(prefix)/\(collectionAddress)/\(tokenId ?? "")")
        }
    }
    
}
