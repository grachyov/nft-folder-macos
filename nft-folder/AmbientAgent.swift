// ∅ 2025 lil org

import Cocoa

struct AmbientAgent {
    
    private init() {}
    
    static func start(generatedToken: GeneratedToken) {
        let helperName = "nft-folder-ambient.app"
        let helperPath = Bundle.main.bundlePath.appending("/Contents/Helpers/\(helperName)")
        let helperURL = URL(fileURLWithPath: helperPath)

        if NSWorkspace.shared.runningApplications.contains(where: { $0.bundleIdentifier == "org.lil.nft-folder.ambient" }) {
            sendTokenNotification(generatedToken: generatedToken)
        } else {
            NSWorkspace.shared.openApplication(at: helperURL, configuration: .init()) { _, _ in
                // TODO: reduce or remove delay
                // Give the agent time to set up its notification observer
                DispatchQueue.main.asyncAfter(deadline: .now() + .seconds(1)) {
                    sendTokenNotification(generatedToken: generatedToken)
                }
            }
        }
    }
    
    private static func sendTokenNotification(generatedToken: GeneratedToken) {
        guard let data = try? JSONEncoder().encode(generatedToken), let jsonString = String(data: data, encoding: .utf8) else { return }
        DistributedNotificationCenter.default().post(name: Notification.Name("MyTokenNotification"), object: jsonString)
    }
    
}
