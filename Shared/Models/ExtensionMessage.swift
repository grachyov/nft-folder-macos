// ∅ 2025 lil org

import Foundation

enum ExtensionMessage: Codable {
    
    case didSelectSyncMenuItem(mbAddressName: String?)
    case didSelectNewFolderMenuItem
    case didSelectStopAllDownloadsMenuItem
    case didSelectControlCenterMenuItem
    
    case didSelectViewOnMenuItem(paths: [String], gallery: NftGallery)
    
    case didBeginObservingDirectory(mbAddressName: String?)
    case didEndObservingDirectory(mbAddressName: String?)
    
    case somethingChangedInHomeDirectory
    
}

extension ExtensionMessage {
    
    var encodedString: String? {
        if let data = try? JSONEncoder().encode(self) {
            return String(data: data, encoding: .utf8)?.addingPercentEncoding(withAllowedCharacters: .urlHostAllowed)
        } else {
            return nil
        }
    }
    
    static func decodedFrom(string: String) -> ExtensionMessage? {
        if let data = string.removingPercentEncoding?.data(using: .utf8) {
            return try? JSONDecoder().decode(ExtensionMessage.self, from: data)
        } else {
            return nil
        }
    }
    
}
