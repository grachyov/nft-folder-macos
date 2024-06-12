// ∅ nft-folder 2024

import Cocoa
import UniformTypeIdentifiers

extension URL {
    
    static let ipfsScheme = "ipfs://"
    static let arScheme = "ar://"
    static let deeplinkScheme = "nft-folder://"
    static let ipfsGateway = "https://ipfs.decentralized-content.com/ipfs/"
    
    static let easScanBase = "https://base.easscan.org"
    static let attestationSchemaId = "0xb7cc934d4a5b37542520bfc80184538e568529d5fba5b13abe89109a23620cb6"
    
    private enum MetadataKind: String {
        case address, minimal, detailed, hashed
    }
    
    var isWithinNftDirectory: Bool {
        if path.hasPrefix(URL.nftDirectoryPathResolved) {
            return true
        } else {
            return false
        }
    }
    
    static func newAttestation(recipient: String, cid: String, folderType: UInt32, formatVersion: UInt32) -> URL? {
        let arguments = String.paddedHexString(cid: cid, folderType: folderType, formatVersion: formatVersion)
        return URL(string: "\(easScanBase)/attestation/attestWithSchema/\(attestationSchemaId)#template=\(recipient)::0:false:\(arguments)")
    }
    
    static func nftDirectory(wallet: WatchOnlyWallet, createIfDoesNotExist: Bool) -> URL? {
        let fileManager = FileManager.default
        guard let addressDirectoryURL = nftDirectory?.appendingPathComponent(wallet.folderDisplayName) else { return nil }
        if !fileManager.fileExists(atPath: addressDirectoryURL.path) {
            if createIfDoesNotExist {
                try? fileManager.createDirectory(at: addressDirectoryURL, withIntermediateDirectories: true, attributes: nil)
            } else {
                return nil
            }
        }
        return addressDirectoryURL
    }
    
    static func foldersForUpcomingTokens(wallet: WatchOnlyWallet) -> URL? {
        guard let url = nftDirectory(wallet: wallet, createIfDoesNotExist: false) else { return nil }
        return metadataDirectory(walletFolderURL: url, metadataKind: .address)?.appendingPathComponent("folders-for-tokens")
    }
    
    static func avatarOnDisk(wallet: WatchOnlyWallet) -> URL? {
        guard let url = nftDirectory(wallet: wallet, createIfDoesNotExist: false) else { return nil }
        return metadataDirectory(walletFolderURL: url, metadataKind: .address)?.appendingPathComponent("avatar")
    }
    
    static func detailedMetadataDirectory(wallet: WatchOnlyWallet) -> URL? {
        guard let url = nftDirectory(wallet: wallet, createIfDoesNotExist: false) else { return nil }
        return metadataDirectory(walletFolderURL: url, metadataKind: .detailed)
    }
    
    static func detailedMetadataDirectory(addressDirectoryURL: URL) -> URL? {
        return metadataDirectory(walletFolderURL: addressDirectoryURL, metadataKind: .detailed)
    }
    
    static func hashedMetadataDirectory(addressDirectoryURL: URL) -> URL? {
        return metadataDirectory(walletFolderURL: addressDirectoryURL, metadataKind: .hashed)
    }
    
    static func detailedMetadataDirectory(filePath: String) -> URL? {
        return metadataDirectory(filePath: filePath, metadataKind: .detailed)
    }
    
    static func minimalMetadataDirectory(filePath: String) -> URL? {
        return metadataDirectory(filePath: filePath, metadataKind: .minimal)
    }
    
    private static func metadataDirectory(filePath: String, metadataKind: MetadataKind) -> URL? {
        let fileURL = URL(filePath: filePath).resolvingSymlinksInPath()
        guard fileURL.pathComponents.count > nftDirectoryPathComponentsCount && fileURL.path.hasPrefix(nftDirectoryPathResolved) else { return nil }
        let folderName = fileURL.pathComponents[nftDirectoryPathComponentsCount]
        guard let walletFolderURL = nftDirectory?.appendingPathComponent(folderName) else { return nil }
        return metadataDirectory(walletFolderURL: walletFolderURL, metadataKind: metadataKind)
    }
    
    private static func metadataDirectory(walletFolderURL: URL, metadataKind: MetadataKind) -> URL? {
        let fileManager = FileManager.default
        let metadataDirectoryURL = walletFolderURL.appendingPathComponent("/.nft/\(metadataKind.rawValue)")
        if !fileManager.fileExists(atPath: metadataDirectoryURL.path) {
            try? fileManager.createDirectory(at: metadataDirectoryURL, withIntermediateDirectories: true, attributes: nil)
        }
        return metadataDirectoryURL
    }
    
    static var nftDirectory: URL? {
        let fileManager = FileManager.default
        let musicDirectoryURL = fileManager.urls(for: .musicDirectory, in: .userDomainMask).first
        guard let nftDirectoryURL = musicDirectoryURL?.appendingPathComponent("nft folder") else { return nil }
        
        if !fileManager.fileExists(atPath: nftDirectoryURL.path) {
            try? fileManager.createDirectory(at: nftDirectoryURL, withIntermediateDirectories: true, attributes: nil)
        }
        
        return nftDirectoryURL
    }
    
    private static let nftDirectoryResolved: URL? = {
        return nftDirectory?.resolvingSymlinksInPath()
    }()
    
    static let nftDirectoryPathComponentsCount: Int = {
        return nftDirectoryResolved?.pathComponents.count ?? 0
    }()
    
    private static let nftDirectoryPathResolved: String = {
        return nftDirectoryResolved?.path ?? ""
    }()
    
    var mimeType: String {
        if let typeIdentifier = (try? resourceValues(forKeys: [.typeIdentifierKey]))?.typeIdentifier,
            let utType = UTType(typeIdentifier) {
            return utType.preferredMIMEType ?? "application/octet-stream"
        } else {
            return "application/octet-stream"
        }
    }
    
    func fnv1aHash() -> UInt64? {
        return absoluteString.data(using: .utf8)?.fnv1aHash()
    }
    
    func replacingFolder(with newFolder: String) -> URL? {
        let fileName = lastPathComponent
        let parentURL = deletingLastPathComponent().deletingLastPathComponent()
        return parentURL.appendingPathComponent(newFolder).appendingPathComponent(fileName)
    }
}
