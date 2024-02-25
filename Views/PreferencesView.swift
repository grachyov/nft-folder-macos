// ∅ nft-folder-macos 2024

import SwiftUI

struct PreferencesView: View {
    
    @State private var maxFileSizeLimitPreference = !Defaults.unlimitedFileSize
    @State private var glbPreference = Defaults.downloadGlb
    @State private var showInMenuBar = !Defaults.hideFromMenuBar
    
    var body: some View {
        VStack(alignment: .center, spacing: 0) {
            HStack {
                Images.logo
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(width: 20, height: 20)
                Text(Strings.nftFolder)
                    .font(.system(size: 20))
            }.padding(.top, 4)
            
            
            VStack {
                RoundedRectangle(cornerRadius: 10)
                    .fill(Color(NSColor.windowBackgroundColor))
                    .frame(height: 110)
                    .overlay(
                        VStack(alignment: .leading) {
                            Toggle(isOn: $maxFileSizeLimitPreference) {
                                Text(Strings.maxFileSize50mb)
                            }.onChange(of: maxFileSizeLimitPreference) { newValue in
                                Defaults.unlimitedFileSize = !newValue
                            }
                            Toggle(isOn: $glbPreference) {
                                Text(Strings.downloadGlb)
                            }.onChange(of: glbPreference) { newValue in
                                Defaults.downloadGlb = newValue
                            }
                            Toggle(isOn: $showInMenuBar) {
                                Text(Strings.showInMenuBar)
                            }.onChange(of: showInMenuBar) { newValue in
                                Defaults.hideFromMenuBar = !newValue
                                if newValue {
                                    StatusBarItem.shared.showIfNeeded()
                                } else {
                                    StatusBarItem.shared.hideFromMenuBar()
                                }
                            }
                        }
                        .padding()
                    )
                    .padding(.horizontal).padding(.top)
            }
            
            
            VStack {
                VStack(alignment: .center, spacing: 16) {
                    Link(Strings.poweredByZoraApi, destination: FooterLink.zoraURL).foregroundColor(.secondary).italic()
                }
                .padding(.top).padding(.bottom, 4)
                
                HStack(spacing: 20) {
                    ForEach(FooterLink.all, id: \.self) { link in
                        Link(destination: link.url) {
                            link.image
                                .resizable()
                                .aspectRatio(contentMode: .fit)
                                .frame(width: 20, height: 20)
                                .foregroundColor(.secondary)
                        }
                    }
                }
                .padding(.bottom)
            }
        }
    }
    
}
