// ∅ 2025 lil org

import UIKit
import SwiftUI
import WebKit

struct FourDirectionalPlayerContainerView: UIViewControllerRepresentable {
    
    private let initialConfig: MobilePlayerConfig
    
    init(initialConfig: MobilePlayerConfig) {
        self.initialConfig = initialConfig
    }
    
    func makeUIViewController(context: Context) -> FourDirectionalPlayerContainer {
        return FourDirectionalPlayerContainer(initialConfig: initialConfig)
    }
    
    func updateUIViewController(_ uiViewController: FourDirectionalPlayerContainer, context: Context) {
        
    }
}

class FourDirectionalPlayerContainer: UIViewController, FourDirectionalPlayerDataSource, MobilePlaybackControllerDisplay {
    
    private let initialConfig: MobilePlayerConfig
    
    private lazy var verticalVC = VerticalPageViewController(fourDirectionalPlayerDataSource: self)

    init(initialConfig: MobilePlayerConfig) {
        self.initialConfig = initialConfig
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("yo")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        MobilePlaybackController.shared.subscribe(config: initialConfig, display: self)
        addChild(verticalVC)
        view.addSubview(verticalVC.view)
        verticalVC.didMove(toParent: self)
        verticalVC.view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            verticalVC.view.topAnchor.constraint(equalTo: view.topAnchor),
            verticalVC.view.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            verticalVC.view.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            verticalVC.view.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
    
    func navigate(_ direction: PlaybackNavigationDirection) {
        // TODO: implement
        print("FourDirectionalPlayerContainer navigate", direction)
    }
    
    fileprivate func getHtml(x: Int, y: Int) -> String {
        return MobilePlaybackController.shared.getToken(uuid: initialConfig.id, x: x, y: y).html
    }
    
}

private protocol FourDirectionalPlayerDataSource: AnyObject {
    
    func getHtml(x: Int, y: Int) -> String
    
}


private class SpecificPageViewController: UIViewController {
    
    private weak var fourDirectionalPlayerDataSource: FourDirectionalPlayerDataSource?
    private var webView: WKWebView!
    
    private(set) var horizontalIndex: Int
    private(set) var verticalIndex: Int
    
    private var renderedCoordinate: (Int, Int)?
    private var willOrDidAppear = false

    init(horizontalIndex: Int, verticalIndex: Int, fourDirectionalPlayerDataSource: FourDirectionalPlayerDataSource?) {
        self.fourDirectionalPlayerDataSource = fourDirectionalPlayerDataSource
        self.horizontalIndex = horizontalIndex
        self.verticalIndex = verticalIndex
        super.init(nibName: nil, bundle: nil)
        renderCurrentItem()
    }

    required init?(coder: NSCoder) {
        fatalError("yo")
    }
    
    override func viewDidDisappear(_ animated: Bool) {
        super.viewDidDisappear(animated)
        cleanupDisplayedContent()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        willOrDidAppear = true
        renderCurrentItem()
    }
    
    private func cleanupDisplayedContent() {
        webView.loadHTMLString("", baseURL: nil)
        renderedCoordinate = nil
    }
    
    func update(horizontalIndex: Int) {
        self.horizontalIndex = horizontalIndex
    }
    
    func update(verticalIndex: Int) {
        self.verticalIndex = verticalIndex
    }
    
    func renderCurrentItem() {
        guard willOrDidAppear else { return }
        
        if webView == nil {
            webView = AutoReloadingWebView.new
            webView.isUserInteractionEnabled = false
            webView.translatesAutoresizingMaskIntoConstraints = false
            view.addSubview(webView)
            NSLayoutConstraint.activate([
                webView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
                webView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
                webView.topAnchor.constraint(equalTo: view.topAnchor),
                webView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
            ])
        }
        
        let newCoordinate = (horizontalIndex, verticalIndex)
        if let renderedCoordinate = renderedCoordinate, renderedCoordinate == newCoordinate {
            return
        } else {
            renderedCoordinate = newCoordinate
            if let html = fourDirectionalPlayerDataSource?.getHtml(x: horizontalIndex, y: verticalIndex) {
                webView.loadHTMLString(html, baseURL: nil)
            }
        }
    }
    
}

private class HorizontalPageViewController: UIPageViewController, UIPageViewControllerDataSource, UIPageViewControllerDelegate {
    
    let pageA: SpecificPageViewController
    let pageB: SpecificPageViewController
    let pageC: SpecificPageViewController
    
    init(verticalIndex: Int, fourDirectionalPlayerDataSource: FourDirectionalPlayerDataSource) {
        pageA = SpecificPageViewController(horizontalIndex: 0, verticalIndex: verticalIndex, fourDirectionalPlayerDataSource: fourDirectionalPlayerDataSource)
        pageB = SpecificPageViewController(horizontalIndex: 1, verticalIndex: verticalIndex, fourDirectionalPlayerDataSource: fourDirectionalPlayerDataSource)
        pageC = SpecificPageViewController(horizontalIndex: -1, verticalIndex: verticalIndex, fourDirectionalPlayerDataSource: fourDirectionalPlayerDataSource)
        super.init(transitionStyle: .scroll, navigationOrientation: .horizontal, options: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("yo")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        dataSource = self
        delegate = self
        setViewControllers([pageA], direction: .forward, animated: false, completion: nil)
    }
    
    func getVerticalIndex() -> Int {
        return pageA.verticalIndex
    }
    
    func update(currentHorizontalIndex: Int) {
        guard let currentPage = viewControllers?.first as? SpecificPageViewController else { return }
        switch currentPage {
        case pageA:
            pageA.update(horizontalIndex: currentHorizontalIndex)
            pageB.update(horizontalIndex: currentHorizontalIndex + 1)
            pageC.update(horizontalIndex: currentHorizontalIndex - 1)
        case pageB:
            pageA.update(horizontalIndex: currentHorizontalIndex - 1)
            pageB.update(horizontalIndex: currentHorizontalIndex)
            pageC.update(horizontalIndex: currentHorizontalIndex + 1)
        case pageC:
            pageA.update(horizontalIndex: currentHorizontalIndex + 1)
            pageB.update(horizontalIndex: currentHorizontalIndex - 1)
            pageC.update(horizontalIndex: currentHorizontalIndex)
        default:
            break
        }
    }
    
    func update(verticalIndex: Int) {
        pageA.update(verticalIndex: verticalIndex)
        pageB.update(verticalIndex: verticalIndex)
        pageC.update(verticalIndex: verticalIndex)
    }
    
    func pageViewController(_ pvc: UIPageViewController, viewControllerBefore vc: UIViewController) -> UIViewController? {
        switch vc {
        case pageA:
            pageC.update(horizontalIndex: pageA.horizontalIndex - 1)
            return pageC
        case pageB:
            pageA.update(horizontalIndex: pageB.horizontalIndex - 1)
            return pageA
        case pageC:
            pageB.update(horizontalIndex: pageC.horizontalIndex - 1)
            return pageB
        default:
            return pageA
        }
    }

    func pageViewController(_ pvc: UIPageViewController, viewControllerAfter vc: UIViewController) -> UIViewController? {
        switch vc {
        case pageA:
            pageB.update(horizontalIndex: pageA.horizontalIndex + 1)
            return pageB
        case pageB:
            pageC.update(horizontalIndex: pageB.horizontalIndex + 1)
            return pageC
        case pageC:
            pageA.update(horizontalIndex: pageC.horizontalIndex + 1)
            return pageA
        default:
            return pageA
        }
    }

    func pageViewController(_ pageViewController: UIPageViewController, willTransitionTo pendingViewControllers: [UIViewController]) {
        guard let destinationPage = pendingViewControllers.first as? SpecificPageViewController else { return }
        destinationPage.renderCurrentItem()
    }
    
}

private class VerticalPageViewController: UIPageViewController, UIPageViewControllerDataSource, UIPageViewControllerDelegate {
    
    let horizontal1: HorizontalPageViewController
    let horizontal2: HorizontalPageViewController
    let horizontal3: HorizontalPageViewController
    
    private var latestHorizontalIndexes = [Int: Int]()

    init(fourDirectionalPlayerDataSource: FourDirectionalPlayerDataSource) {
        horizontal1 = HorizontalPageViewController(verticalIndex: 0, fourDirectionalPlayerDataSource: fourDirectionalPlayerDataSource)
        horizontal2 = HorizontalPageViewController(verticalIndex: 1, fourDirectionalPlayerDataSource: fourDirectionalPlayerDataSource)
        horizontal3 = HorizontalPageViewController(verticalIndex: -1, fourDirectionalPlayerDataSource: fourDirectionalPlayerDataSource)
        super.init(transitionStyle: .scroll, navigationOrientation: .vertical, options: nil)
    }

    required init?(coder: NSCoder) {
        fatalError("yo")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        dataSource = self
        delegate = self
        setViewControllers([horizontal1], direction: .forward, animated: false, completion: nil)
    }

    func pageViewController(_ pvc: UIPageViewController, viewControllerBefore vc: UIViewController) -> UIViewController? {
        switch vc {
        case horizontal1:
            horizontal3.update(verticalIndex: horizontal1.getVerticalIndex() - 1)
            return horizontal3
        case horizontal2:
            horizontal1.update(verticalIndex: horizontal2.getVerticalIndex() - 1)
            return horizontal1
        case horizontal3:
            horizontal2.update(verticalIndex: horizontal3.getVerticalIndex() - 1)
            return horizontal2
        default:
            return horizontal1
        }
    }

    func pageViewController(_ pvc: UIPageViewController, viewControllerAfter vc: UIViewController) -> UIViewController? {
        switch vc {
        case horizontal1:
            horizontal2.update(verticalIndex: horizontal1.getVerticalIndex() + 1)
            return horizontal2
        case horizontal2:
            horizontal3.update(verticalIndex: horizontal2.getVerticalIndex() + 1)
            return horizontal3
        case horizontal3:
            horizontal1.update(verticalIndex: horizontal3.getVerticalIndex() + 1)
            return horizontal1
        default:
            return horizontal1
        }
    }
    
    func pageViewController(_ pageViewController: UIPageViewController, willTransitionTo pendingViewControllers: [UIViewController]) {
        guard let currentHorizontalController = viewControllers?.first as? HorizontalPageViewController,
              let currentPage = currentHorizontalController.viewControllers?.first as? SpecificPageViewController,
              let destinationHorizontalController = pendingViewControllers.first as? HorizontalPageViewController,
              let destinationPage = destinationHorizontalController.viewControllers?.first as? SpecificPageViewController else { return }
        latestHorizontalIndexes[currentPage.verticalIndex] = currentPage.horizontalIndex
        let destinationHorizontalIndex = latestHorizontalIndexes[destinationPage.verticalIndex] ?? 0
        destinationHorizontalController.update(currentHorizontalIndex: destinationHorizontalIndex)
        destinationPage.renderCurrentItem()
    }
    
}
