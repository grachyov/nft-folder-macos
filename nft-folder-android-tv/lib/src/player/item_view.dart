import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'item.dart';
import 'generator.dart';
import 'item_repository.dart';

class SampleItemDetailsView extends StatefulWidget {
  final Item? item;

  const SampleItemDetailsView({super.key, this.item});

  static const routeName = '/sample_item';

  @override
  State<SampleItemDetailsView> createState() => _SampleItemDetailsViewState();
}

class _SampleItemDetailsViewState extends State<SampleItemDetailsView> {
  late Item currentItem;
  late WebViewController _controller;
  final ItemRepository _itemRepository = ItemRepository();
  bool _showQrCode = false;
  String _currentTokenId = '';
  final FocusNode _focusNode = FocusNode();

  @override
  void initState() {
    super.initState();
    currentItem = widget.item ?? _itemRepository.getRandomItem();
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(const Color(0x00000000));
    _loadContent();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      FocusScope.of(context).requestFocus(_focusNode);
    });
  }

  @override
  void dispose() {
    _focusNode.dispose();
    _controller.clearCache();
    _controller.clearLocalStorage();
    super.dispose();
  }

  Future<void> _loadContent() async {
    Map<String, String> content = await generateHtmlContent(currentItem);
    if (!mounted) return;
    await _controller.loadHtmlString(content['html']!);
    setState(() {
      _currentTokenId = content['tokenId']!;
    });
  }

  void _handleKeyEvent(KeyEvent event) {
    if (event is KeyDownEvent) {
      if (event.logicalKey == LogicalKeyboardKey.arrowUp ||
          event.logicalKey == LogicalKeyboardKey.arrowDown) {
        setState(() {
          currentItem = _itemRepository.getRandomItem();
          _loadContent();
        });
      } else if (event.logicalKey == LogicalKeyboardKey.arrowLeft ||
          event.logicalKey == LogicalKeyboardKey.arrowRight) {
        _loadContent();
      } else if (event.logicalKey == LogicalKeyboardKey.select) {
        setState(() {
          _showQrCode = !_showQrCode;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Focus(
        focusNode: _focusNode,
        onKeyEvent: (FocusNode node, KeyEvent event) {
          if (event is KeyDownEvent) {
            if (event.logicalKey == LogicalKeyboardKey.arrowUp ||
                event.logicalKey == LogicalKeyboardKey.arrowDown ||
                event.logicalKey == LogicalKeyboardKey.arrowLeft ||
                event.logicalKey == LogicalKeyboardKey.arrowRight ||
                event.logicalKey == LogicalKeyboardKey.select) {
              _handleKeyEvent(event);
              return KeyEventResult.handled;
            }
          }
          return KeyEventResult.ignored;
        },
        child: Stack(
          children: [
            WebViewWidget(controller: _controller),
            if (_showQrCode)
              Positioned(
                top: 10,
                right: 10,
                child: QrImageView(
                  data:
                      'https://etherscan.io/nft/${currentItem.address}/$_currentTokenId',
                  version: QrVersions.auto,
                  size: 100.0,
                  backgroundColor: Colors.white,
                ),
              ),
          ],
        ),
      ),
    );
  }
}
