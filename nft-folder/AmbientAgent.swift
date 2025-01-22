// ∅ 2025 lil org

import Cocoa

struct AmbientAgent {
    
    static let helperAppUrl: URL = {
        return URL(fileURLWithPath: helperAppPath)
    }()
    
    static let helperAppPath: String = {
        let helperName = "nft-folder-ambient.app"
        let helperPath = Bundle.main.bundlePath.appending("/Contents/Helpers/\(helperName)")
        return helperPath
    }()
    
    private init() {}
    
    static func start(collectionId: String?) {
        if let token = TokenGenerator.generateRandomToken(specificCollectionId: collectionId, notTokenId: nil) {
            start(generatedToken: token)
        }
    }
    
    static func start(generatedToken: GeneratedToken) {
        if NSWorkspace.shared.runningApplications.contains(where: { $0.bundleIdentifier == "org.lil.nft-folder.ambient" }) {
            sendTokenNotification(generatedToken: generatedToken)
        } else {
            NSWorkspace.shared.openApplication(at: helperAppUrl, configuration: .init()) { _, _ in
                DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(230)) {
                    sendTokenNotification(generatedToken: generatedToken)
                }
            }
        }
    }
    
    private static func sendTokenNotification(generatedToken: GeneratedToken) {
        guard let data = try? JSONEncoder().encode(generatedToken), let jsonString = String(data: data, encoding: .utf8) else { return }
        DistributedNotificationCenter.default().post(name: .togglePip, object: jsonString)
    }
    
}
