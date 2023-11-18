// nft-folder-macos 2023 ethistanbul

import Foundation

struct WatchOnlyWallet: Codable, Hashable {
    
    let address: String
    let name: String?
    let avatar: String?
    let markedAsMy: Bool
    
    var displayName: String {
        if let name = name {
            return name
        } else {
            let clean = address.dropFirst(2)
            let cropped = clean.prefix(4) + "..." + clean.suffix(4)
            return String(cropped)
        }
    }
    
}
