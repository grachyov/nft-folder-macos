// ∅ nft-folder-macos 2024

import Foundation

struct MetadataStorage {
    
    static func store(metadata: MinimalTokenMetadata, filePath: String) {
        if let fileId = fileId(path: filePath),
           let data = try? JSONEncoder().encode(metadata),
           var url = URL.metadataDirectory(filePath: filePath) {
            url.append(path: fileId)
            try? data.write(to: url)
        }
    }
    
    static func nftURL(filePath: String, gallery: WebGallery) -> URL? {
        if let fileId = fileId(path: filePath), var url = URL.metadataDirectory(filePath: filePath) {
            url.append(path: fileId)
            if let data = try? Data(contentsOf: url),
               let metadata = try? JSONDecoder().decode(MinimalTokenMetadata.self, from: data) {
                return nftURL(metadata: metadata, gallery: gallery)
            }
        }
        return nil
    }
    
    private static func nftURL(metadata: MinimalTokenMetadata, gallery: WebGallery) -> URL? {
        switch gallery {
        case .zora:
            let prefix: String
            switch metadata.network {
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
            }
            return URL(string: "https://zora.co/collect/\(prefix):\(metadata.collectionAddress)/\(metadata.tokenId)")
        case .mintfun:
            let prefix: String
            switch metadata.network {
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
            }
            return URL(string: "https://mint.fun/\(prefix)/\(metadata.collectionAddress)")
        case .opensea:
            let prefix: String
            switch metadata.network {
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
            }
            return URL(string: "https://opensea.io/assets/\(prefix)/\(metadata.collectionAddress)/\(metadata.tokenId)")
        }
    }
    
    private static func fileId(path: String) -> String? {
        if let attributes = try? FileManager.default.attributesOfItem(atPath: path),
           let number = attributes[.systemFileNumber] as? UInt {
            return String(number)
        } else {
            return nil
        }
    }
    
}
