// ∅ nft-folder-macos 2024

import Cocoa

class DownloadsService {
    
    private enum DownloadFileResult {
        case success, cancel, failure
    }
    
    static let shared = DownloadsService()
    
    private init() {}
    private let urlSession = URLSession.shared
    
    private var downloadsDict = [URL: (URL, String, URL)]() // TODO: dev tmp
    private var downloadsInProgress = 0
    
    func downloadFiles(wallet: WatchOnlyWallet, downloadables: [DownloadableNFT], network: Network) {
        guard let destination = URL.nftDirectory(wallet: wallet, createIfDoesNotExist: false) else { return }
        for downloadable in downloadables {
            guard let dataOrURL = downloadable.probableDataOrURL, let nftURL = downloadable.nftURL(network: network) else { continue }
            switch dataOrURL {
            case .data(let data, let fileExtension):
                save(name: downloadable.fileDisplayName, nftURL: nftURL, data: data, fileExtension: fileExtension, destinationURL: destination, downloadedFromURL: nil)
            case .url(let url):
                downloadsDict[url] = (destination, downloadable.fileDisplayName, nftURL)
            }
        }
        downloadNextIfNeeded()
    }
    
    func showNFT(filePath: String) {
        if let fileId = fileId(path: filePath), let nftURL = Storage.nftURL(fileId: fileId) {
            DispatchQueue.main.async {
                NSWorkspace.shared.open(nftURL)
            }
        }
    }
    
    private func downloadNextIfNeeded() {
        guard downloadsInProgress < 15 else { return }
        guard let (url, (destination, name, nftURL)) = downloadsDict.first else { return }
        downloadsDict.removeValue(forKey: url)
        downloadsInProgress += 1
        downloadFile(name: name, nftURL: nftURL, from: url, to: destination) { [weak self] result in
            self?.downloadsInProgress -= 1
            switch result {
            case .success, .failure:
                self?.downloadNextIfNeeded()
            case .cancel:
                self?.downloadNextIfNeeded() // TODO: clean up for a removed filder
            }
        }
        downloadNextIfNeeded()
    }
    
    private func downloadFile(name: String, nftURL: URL, from url: URL, to destinationURL: URL, completion: @escaping (DownloadFileResult) -> Void) {
        print("yo will download \(url)")
        let task = urlSession.downloadTask(with: url) { location, response, error in
            let statusCode = (response as? HTTPURLResponse)?.statusCode ?? 0
            print("download completion \(url)")
            guard let location = location, error == nil, (200...299).contains(statusCode) else {
                print("Status code \(statusCode). Error downloading file: \(String(describing: error))")
                completion(.failure)
                return
            }
            guard FileManager.default.fileExists(atPath: destinationURL.path) else {
                // if there is no folder anymore
                print("cancel download")
                completion(.cancel) // TODO: review cancel logic
                return
            }
            var fileExtension = url.pathExtension
            if fileExtension.isEmpty {
                if let httpResponse = response as? HTTPURLResponse, let mimeType = httpResponse.mimeType {
                    fileExtension = FileExtension.forMimeType(mimeType)
                } else {
                    fileExtension = FileExtension.placeholder
                }
            }
            print("will save \(url)")
            self.save(name: name, nftURL: nftURL, tmpLocation: location, fileExtension: fileExtension, destinationURL: destinationURL, downloadedFromURL: url)
            completion(.success)
            print("did save \(url)")
        }
        task.resume()
    }
    
    private func extractValueFromJson(jsonData: Data) -> DataOrURL? {
        if let inlineContentJSON = try? JSONDecoder().decode(InlineContentJSON.self, from: jsonData),
           let inlineDataString = inlineContentJSON.dataString,
           let dataOrURL = DataOrURL(urlString: inlineDataString) {
            return dataOrURL
        }
        
        guard let jsonStringRaw = String(data: jsonData, encoding: .utf8), !jsonStringRaw.isEmpty else { return nil }
        
        let jsonString = jsonStringRaw.removingPercentEncoding ?? jsonStringRaw
        for key in ["animation_url", "image", "svg_image_data", "image_data"] {
            if let rangeOfKey = jsonString.range(of: "\"\(key)\"") {
                var start = jsonString.index(rangeOfKey.upperBound, offsetBy: 1)
                while start < jsonString.endIndex, jsonString[start] != "\"" {
                    start = jsonString.index(after: start)
                }
                if start < jsonString.endIndex, jsonString[start] == "\"" {
                    var end = jsonString.index(after: start)
                    while end < jsonString.endIndex, jsonString[end] != "\"" {
                        end = jsonString.index(after: end)
                    }
                    if end < jsonString.endIndex {
                        let valueStart = jsonString.index(after: start)
                        let result = String(jsonString[valueStart..<end])
                        if let dataOrURL = DataOrURL(urlString: result) {
                            return dataOrURL
                        }
                    }
                }
            }
        }
        return nil
    }
    
    private func save(name: String, nftURL: URL, tmpLocation: URL? = nil, data: Data? = nil, fileExtension: String, destinationURL: URL, downloadedFromURL: URL?) {
        if fileExtension.lowercased() == "html", let downloadedFromURL = downloadedFromURL {
            let linkString = downloadedFromURL.absoluteString
                .replacingOccurrences(of: "&", with: "&amp;")
                .replacingOccurrences(of: "\"", with: "&quot;")
                .replacingOccurrences(of: "'", with: "&apos;")
                .replacingOccurrences(of: "<", with: "&lt;")
                .replacingOccurrences(of: ">", with: "&gt;")
            let weblocContent = """
                <?xml version="1.0" encoding="UTF-8"?>
                <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
                <plist version="1.0">
                <dict>
                    <key>URL</key>
                    <string>\(linkString)</string>
                </dict>
                </plist>
                """
            let webloc = weblocContent.data(using: .utf8)
            save(name: name, nftURL: nftURL, data: webloc, fileExtension: "webloc", destinationURL: destinationURL, downloadedFromURL: nil)
            if let tmpLocation = tmpLocation {
                try? FileManager.default.removeItem(at: tmpLocation)
            }
            return
        } else if fileExtension.lowercased() == "json" || fileExtension.lowercased() == "txt" {
            let mbJsonData: Data?
            if let tmpLocation = tmpLocation, let tmpData = try? Data(contentsOf: tmpLocation) {
                mbJsonData = tmpData
            } else if let data = data {
                mbJsonData = data
            } else {
                mbJsonData = nil
            }
            if let mbJsonData = mbJsonData, let dataOrURL = extractValueFromJson(jsonData: mbJsonData) {
                switch dataOrURL {
                case .data(let data, let fileExtension):
                    save(name: name, nftURL: nftURL, data: data, fileExtension: fileExtension, destinationURL: destinationURL, downloadedFromURL: downloadedFromURL)
                case .url(let url):
                    downloadsDict[url] = (destinationURL, name, nftURL)
                }
                if let tmpLocation = tmpLocation {
                    try? FileManager.default.removeItem(at: tmpLocation)
                }
                return
            }
        }
        let pathExtension = "." + fileExtension
        var finalName = name.hasSuffix(pathExtension) ? name : (name.trimmingCharacters(in: .whitespacesAndNewlines) + pathExtension)
        finalName = finalName.replacingOccurrences(of: "/", with: "-")
        let destinationURL = destinationURL.appendingPathComponent(finalName)
        saveAvoidingCollisions(tmpLocation: tmpLocation, data: data, destinationURL: destinationURL, nftURL: nftURL)
    }
    
    private func saveAvoidingCollisions(tmpLocation: URL?, data: Data?, destinationURL: URL, nftURL: URL) {
        let fileManager = FileManager.default

        func uniqueURL(for url: URL) -> URL {
            var newURL = url
            var count = 1
            while fileManager.fileExists(atPath: newURL.path) {
                let fileName = url.deletingPathExtension().lastPathComponent
                let fileExtension = url.pathExtension
                newURL = url.deletingLastPathComponent().appendingPathComponent("\(fileName)_\(count)").appendingPathExtension(fileExtension)
                count += 1
            }
            return newURL
        }

        func areFilesDifferent(url1: URL, url2: URL?, data: Data?) -> Bool {
            guard let fileAttributes = try? fileManager.attributesOfItem(atPath: url1.path),
                  let fileSize = fileAttributes[.size] as? NSNumber else { return true }
            
            if let data = data {
                if fileSize.intValue != data.count { return true }
                guard let fileData = try? Data(contentsOf: url1) else { return true }
                return fileData != data
            } else if let url2 = url2 {
                guard let file2Attributes = try? fileManager.attributesOfItem(atPath: url2.path),
                      let file2Size = file2Attributes[.size] as? NSNumber else { return true }
                if fileSize.intValue != file2Size.intValue { return true }
                guard let fileData = try? Data(contentsOf: url1) else { return true }
                guard let file2Data = try? Data(contentsOf: url2) else { return true }
                return fileData != file2Data
            } else {
                return true
            }
        }

        do {
            if let tmpLocation = tmpLocation {
                if fileManager.fileExists(atPath: destinationURL.path), areFilesDifferent(url1: destinationURL, url2: tmpLocation, data: nil) {
                    let uniqueURL = uniqueURL(for: destinationURL)
                    try fileManager.moveItem(at: tmpLocation, to: uniqueURL)
                } else {
                    try fileManager.moveItem(at: tmpLocation, to: destinationURL)
                }
            } else if let data = data {
                if fileManager.fileExists(atPath: destinationURL.path) && areFilesDifferent(url1: destinationURL, url2: nil, data: data) {
                    let uniqueURL = uniqueURL(for: destinationURL)
                    try data.write(to: uniqueURL)
                } else {
                    try data.write(to: destinationURL)
                }
            } else {
                return
            }
        } catch {
            print("error saving file: \(error)")
        }
        
        // TODO: implement
//        if let fileId = fileId(path: finalDestinationURL.path) {
//            Storage.store(fileId: fileId, url: nftURL)
//        }
    }
    
    private func fileId(path: String) -> String? {
        if let attributes = try? FileManager.default.attributesOfItem(atPath: path),
           let number = attributes[.systemFileNumber] as? UInt {
            return String(number)
        } else {
            return nil
        }
    }
    
}
