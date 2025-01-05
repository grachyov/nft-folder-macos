// ∅ 2025 lil org

import SwiftUI
import TVUIKit
import CoreImage.CIFilterBuiltins

struct Images {
    static let preferences = Image(systemName: "gearshape")
    
    static func generateQRCode(_ string: String) -> UIImage {
        let context = CIContext()
        let filter = CIFilter.qrCodeGenerator()
        filter.message = Data(string.utf8)

        if let outputImage = filter.outputImage, let cgimg = context.createCGImage(outputImage, from: outputImage.extent) {
            return UIImage(cgImage: cgimg)
        } else {
            return UIImage()
        }
    }
}

struct HelperStrings {
    
    static let i = "i"
    static let u = "u"
    static let b = "b"
    static let view = "view"
    static let html = "html"
    static let url = "url"
    
}
