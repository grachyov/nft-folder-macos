// ∅ nft-folder-macos 2024

import Cocoa

class RightClickServiceProvider: NSObject {
    
    @objc func rightClickMint(_ pasteboard: NSPasteboard, userData: String?, error: AutoreleasingUnsafeMutablePointer<NSString>) {
        if let urls = pasteboard.readObjects(forClasses: [NSURL.self], options: nil) as? [URL], let url = urls.first {
            sendIt(fileURL: url)
        }
    }
    
    private func sendIt(fileURL: URL) {
        let boundary = "----WebKitFormBoundaryn3JBuHDuzWcHa9BR"
        var request = URLRequest(url: URL(string: "https://ipfs-uploader.zora.co/api/v0/add?stream-channels=true&cid-version=1&progress=false")!)
        request.httpMethod = "POST"
        request.setValue("multipart/form-data; boundary=\(boundary)", forHTTPHeaderField: "Content-Type")

        var body = Data()
        body.append(Data("--\(boundary)\r\n".utf8))
        body.append(Data("Content-Disposition: form-data; name=\"file\"; filename=\"\(fileURL.lastPathComponent)\"\r\n".utf8))
        body.append(Data("Content-Type: \(fileURL.mimeType)\r\n\r\n".utf8))
        guard let fileData = try? Data(contentsOf: fileURL) else { return }
        body.append(fileData)
        body.append(Data("\r\n--\(boundary)--\r\n".utf8))
        request.httpBody = body
        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            guard let data = data,
                  error == nil,
                  let ipfsResponse = try? JSONDecoder().decode(IPFSResponse.self, from: data),
                  let url = URL(string: "https://zora.co/create?image=ipfs://\(ipfsResponse.hash)") else {
                print("ipfs upload error \(error?.localizedDescription ?? "unknown")")
                return
            }
            
            print("got ipfs response \(ipfsResponse)")
            
            DispatchQueue.main.async {
                NSWorkspace.shared.open(url)
            }
        }
        task.resume()
    }
    
}
