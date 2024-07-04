// ∅ nft-folder 2024

import Foundation

struct SuggestedItem: Identifiable, Hashable, Codable {
    
    var id: String { address + (projectId ?? "") }
    
    var network: Network {
        return Network(rawValue: chainId) ?? .mainnet
    }
    
    let name: String
    let address: String
    let chainId: Int
    let chain: Chain
    
    let projectId: String?
    let hasVideo: Bool?
    
}
