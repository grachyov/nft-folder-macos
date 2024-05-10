// ∅ nft-folder 2024

import Foundation

enum Network: Int, CaseIterable, Codable {
    
    case zora = 7777777, base = 8453, ethereum = 1, optimism = 10, arbitrum = 42161, blast = 238
    
    var name: String {
        switch self {
        case .ethereum:
            return "ETHEREUM"
        case .optimism:
            return "OPTIMISM"
        case .zora:
            return "ZORA"
        case .base:
            return "BASE"
        case .arbitrum:
            return "ARBITRUM"
        case .blast:
            return "BLAST"
        }
    }
    
    private var chainStringValue: String {
        let mainnet = "MAINNET"
        switch self {
        case .ethereum:
            return mainnet
        default:
            return name + "_" + mainnet
        }
    }
    
    var query: String {
        return "{network: \(name), chain: \(chainStringValue)}"
    }
    
    static func withName(_ name: String) -> Network? {
        switch name {
        case "ETHEREUM":
            return .ethereum
        case "OPTIMISM":
            return .optimism
        case "ZORA":
            return .zora
        case "BASE":
            return .base
        case "ARBITRUM":
            return .arbitrum
        case "BLAST":
            return .blast
        default:
            return nil
        }
    }
    
}
