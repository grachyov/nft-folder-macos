// ∅ nft-folder-macos 2024

import Foundation

struct MetadataStorage {
    
    static func detailedMetadata(nftFilePath: String) -> DetailedTokenMetadata? {
        if let fileId = fileId(path: nftFilePath), var url = URL.minimalMetadataDirectory(filePath: nftFilePath) {
            url.append(path: fileId)
            if let data = try? Data(contentsOf: url), let minimal = try? JSONDecoder().decode(MinimalTokenMetadata.self, from: data),
               var url = URL.detailedMetadataDirectory(filePath: nftFilePath) {
                url.append(path: fileNameCorrespondingTo(minimalMetadata: minimal))
                if let data = try? Data(contentsOf: url),
                   let metadata = try? JSONDecoder().decode(DetailedTokenMetadata.self, from: data) {
                    return metadata
                }
            }
        }
        return nil
    }
    
    static func store(detailedMetadata: DetailedTokenMetadata, correspondingTo minimal: MinimalTokenMetadata, filePath: String) {
        if let data = try? JSONEncoder().encode(detailedMetadata), var url = URL.detailedMetadataDirectory(filePath: filePath) {
            url.append(path: fileNameCorrespondingTo(minimalMetadata: minimal))
            try? data.write(to: url)
        }
    }
    
    static func store(minimalMetadata: MinimalTokenMetadata, filePath: String) {
        if let fileId = fileId(path: filePath),
           let data = try? JSONEncoder().encode(minimalMetadata),
           var url = URL.minimalMetadataDirectory(filePath: filePath) {
            url.append(path: fileId)
            try? data.write(to: url)
        }
    }
    
    static func nftURL(filePath: String, gallery: NftGallery) -> URL? {
        if let fileId = fileId(path: filePath), var url = URL.minimalMetadataDirectory(filePath: filePath) {
            url.append(path: fileId)
            if let data = try? Data(contentsOf: url),
               let metadata = try? JSONDecoder().decode(MinimalTokenMetadata.self, from: data) {
                return nftURL(metadata: metadata, gallery: gallery)
            }
        }
        return nil
    }
    
    private static func nftURL(metadata: MinimalTokenMetadata, gallery: NftGallery) -> URL? {
        switch gallery {
        case .local:
            return nil
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
    
    private static func fileNameCorrespondingTo(minimalMetadata: MinimalTokenMetadata) -> String {
        return "\(minimalMetadata.network.rawValue)\(minimalMetadata.collectionAddress)\(minimalMetadata.tokenId)"
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
