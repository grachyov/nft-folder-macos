// ∅ nft-folder 2024

import SwiftUI
import Combine

struct CollectionsView: View {
    
    @State private var suggestedItems = TokenGenerator.allGenerativeSuggestedItems
    @State private var selectedItemId: String?
    @State private var isNavigatingToPlayer = false
    
    var body: some View {
        NavigationView {
            ScrollView {
                createGrid()
            }.navigationTitle(Consts.noggles)
            .background(
                NavigationLink(destination: TvPlayerView(initialItemId: selectedItemId).edgesIgnoringSafeArea(.all), isActive: $isNavigatingToPlayer) {
                    EmptyView().hidden()
                }.hidden()
            )
        }
    }
    
    private func createGrid() -> some View {
        let gridLayout = [GridItem(.adaptive(minimum: 230), spacing: 69)]
        let grid = LazyVGrid(columns: gridLayout, alignment: .leading, spacing: 42) {
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
                        VStack(alignment: .leading, content: {
                            Spacer()
                            gridItemText(item.name)
                        })
                    }
                }.aspectRatio(1, contentMode: .fit).contextMenu { suggestedItemContextMenu(item: item) }
            }
        }
        return grid
    }
    
    private func gridItemText(_ text: String) -> some View {
        HStack {
            Text(text).font(.system(size: 15, weight: .regular)).lineLimit(2)
                .foregroundColor(.white)
                .padding(.horizontal, 1)
                .background(Color.black.opacity(0.7)).cornerRadius(3)
                .padding(.leading, 4).padding(.bottom, 3)
            Spacer()
        }
    }
    
    private func suggestedItemContextMenu(item: SuggestedItem) -> some View {
        Group {
            Text(item.name)
            Divider()
            Button(Strings.play, action: {
                didSelectSuggestedItem(item)
            })
        }
    }
    
    private func didSelectSuggestedItem(_ item: SuggestedItem) {
        selectedItemId = item.id
        isNavigatingToPlayer = true
    }
    
    private func showRandomPlayer() {
        selectedItemId = nil
        isNavigatingToPlayer = true
    }
    
}
