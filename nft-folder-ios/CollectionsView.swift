// ∅ 2025 lil org

import SwiftUI
import Combine

struct CollectionsView: View {
    
    @State private var showSettingsPopup = false
    @State private var suggestedItems = TokenGenerator.allGenerativeSuggestedItems
    @State private var didAppear = false
    @State private var showMorePreferences = false
    @State private var selectedConfig: PlayerWindowConfig?
    
    var body: some View {
        NavigationStack {
            VStack {
                ScrollView {
                    createGrid().frame(maxWidth: .infinity)
                }
            }
            .navigationBarTitleDisplayMode(.inline)
            .navigationTitle(Consts.noggles)
            .toolbar {
                Menu {
                    Button("Warpcast", action: { UIApplication.shared.open(URL.warpcast) })
                    Button("GitHub", action: { UIApplication.shared.open(URL.github) })
                    Button("Zora", action: { UIApplication.shared.open(URL.zora) })
                    Button("Mail", action: { UIApplication.shared.open(URL.mail) })
                    Button("𝕏", action: { UIApplication.shared.open(URL.x) })
                } label: {
                    Image(systemName: "gearshape")
                }
                
                Button(action: {
                    showRandomPlayer()
                }) {
                    Images.shuffle
                }
            }
        }
        .fullScreenCover(item: $selectedConfig) { config in
            PlayerView(config: config)
        }
        .transaction { transaction in
            transaction.disablesAnimations = true
        }
    }
    
    private func createGrid() -> some View {
        let gridLayout = [GridItem(.adaptive(minimum: 100), spacing: 0)]
        let grid = LazyVGrid(columns: gridLayout, alignment: .leading, spacing: 0) {
            ForEach(suggestedItems) { item in
                Button(action: {
                    didSelectSuggestedItem(item)
                }) {
                    ZStack {
                        Image(item.id)
                            .resizable()
                            .scaledToFill()
                            .clipped()
                            .aspectRatio(1, contentMode: .fill)
                            .contentShape(Rectangle())
                        VStack {
                            Spacer()
                            gridItemText(item.name) {
                                didSelectSuggestedItem(item)
                            }
                        }
                    }
                }.aspectRatio(1, contentMode: .fit).contextMenu { suggestedItemContextMenu(item: item) }
            }
        }
        return grid
    }
    
    private func gridItemText(_ text: String, onTap: @escaping () -> Void) -> some View {
        HStack {
            Text(text).font(.system(size: 10, weight: .regular)).lineLimit(2)
                .foregroundColor(.white)
                .padding(.horizontal, 1)
                .background(Color.black.opacity(0.7)).cornerRadius(3)
                .padding(.leading, 4).padding(.bottom, 3).onTapGesture {
                    onTap()
                }
            Spacer()
        }
    }
    
    private func suggestedItemContextMenu(item: SuggestedItem) -> some View {
        Group {
            Text(item.name)
            Button(Strings.play, action: {
                didSelectSuggestedItem(item)
            })
        }
    }
    
    private func didSelectSuggestedItem(_ item: SuggestedItem) {
        selectedConfig = PlayerWindowConfig(initialItemId: item.id)
    }
    
    private func showRandomPlayer() {
        selectedConfig = PlayerWindowConfig(initialItemId: nil)
    }
    
}
