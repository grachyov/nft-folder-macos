// ∅ nft-folder 2024

import SwiftUI

struct LocalHtmlView: View {
    
    @State private var currentToken = TokenGenerator.generateRandomToken() ?? GeneratedToken(html: "", displayName: "", url: nil, instructions: nil)
    @State private var history = [GeneratedToken]()
    @State private var currentIndex = 0
    @State private var showingInfoAlert = false
    
    var body: some View {
        DesktopWebView(htmlContent: currentToken.html)
            .onAppear {
                history.append(currentToken)
            }
            .frame(minWidth: 200, maxWidth: .infinity, minHeight: 200, maxHeight: .infinity).background(.black)
            .toolbar {
                ToolbarItem(placement: .navigation) {
                    Button(action: goBack) {
                        Images.back
                    }
                    .disabled(currentIndex <= 0)
                    .keyboardShortcut(.leftArrow, modifiers: [])
                }
                ToolbarItem(placement: .navigation) {
                    Button(action: goForward) {
                        Images.forward
                    }
                    .keyboardShortcut(.rightArrow, modifiers: [])
                }
                ToolbarItem(placement: .principal) {
                    Text(currentToken.displayName).font(.headline)
                }
                ToolbarItemGroup() {
                    Spacer()
                    Button(action: showInfo) {
                        Images.info
                    }
                    Button(action: viewOnWeb) {
                        Images.globe
                    }
                }
            }
            .alert(Strings.experimetalOfflineGeneration, isPresented: $showingInfoAlert) {
                Button(Strings.ok) { }
            } message: {
                if let instructions = currentToken.instructions {
                    Text(Strings.letUsKnowOfIssues + "\n\n" + instructions)
                } else {
                    Text(Strings.letUsKnowOfIssues)
                }
            }
    }
    
    private func showInfo() {
        showingInfoAlert = true
    }
    
    private func viewOnWeb() {
        if let url = currentToken.url {
            NSWorkspace.shared.open(url)
        }
    }
    
    private func goBack() {
        if currentIndex > 0 {
            currentIndex -= 1
            currentToken = history[currentIndex]
        }
    }
    
    private func goForward() {
        if currentIndex < history.count - 1 {
            currentIndex += 1
            currentToken = history[currentIndex]
        } else {
            let newToken = TokenGenerator.generateRandomToken() ?? currentToken
            history.append(newToken)
            currentIndex += 1
            currentToken = newToken
        }
    }
    
}
