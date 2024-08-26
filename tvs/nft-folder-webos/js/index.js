var currentCollectionIndex = 0;

var eventRegister = (function () {
  var lastClickedId = null;
  var itemArray = document.getElementsByClassName("item");
  var updateText = function (query, value) {
    var element = document.querySelectorAll(query);
    if (element && element.length > 0) {
      element[0].innerText = value;
    }
  };
  var showXYCoordinates = function (details) {
    updateText("span.x_coor", details.pageX);
    updateText("span.y_coor", details.pageY);
  };
  var _onClickEvent = function (e) {
    if (lastClickedId) {
      document.getElementById(lastClickedId).classList.remove("clicked");
    }
    document.getElementById(e.target.id).classList.add("clicked");
    lastClickedId = e.target.id;
    updateText("p.ok_select", lastClickedId);

    showPlayer(lastClickedId);
  };

  var _onMouseOverEvent = function (e) {
    for (var i = 0; i < itemArray.length; i++) {
      _removeFocus(itemArray[i]);
    }
    document.getElementById(e.target.id).focus();
  };
  var _removeFocus = function (item) {
  };
  var _itemKeyDownHandler = function (e) {
    if (e.keyCode === 13) {
      document.getElementById(e.target.id).classList.add("active");
    }
  };
  var _itemKeyUpHandler = function (e) {
    if (e.keyCode === 13) {
      document.getElementById(e.target.id).classList.remove("active");
      _onClickEvent(e);
    }
  };
  var _itemMouseOutHandler = function (e) {
    _removeFocus(document.getElementById(e.target.id));
  };
  var addEventListeners = function () {
    window.addEventListener("mouseover", showXYCoordinates);
    for (var i = 0; i < itemArray.length; i++) {
      itemArray[i].addEventListener("mouseover", _onMouseOverEvent);
      itemArray[i].addEventListener("mouseout", _itemMouseOutHandler);
      itemArray[i].addEventListener("click", _onClickEvent);
      itemArray[i].addEventListener("keyup", _itemKeyUpHandler);
      itemArray[i].addEventListener("keydown", _itemKeyDownHandler);
    }
  };
  var cursorVisibilityChange = function (event) {
    var visibility = event.detail.visibility;
    if (visibility) {
      console.log("Cursor appeared");
    } else {
      console.log("Cursor disappeared");
      updateText("span.x_coor", "-");
      updateText("span.y_coor", "-");
    }
  };
  var keyEventHandler = function (event) {
    var keyCode = event.keyCode;
    var type = event.type;
    var key = event.key || event.keyIdentifier;

    if (key) {
      updateText("span.key_name", key);
      updateText("span.key_code", keyCode);
      updateText("span.key_status", type);
    }
    if (type === "keydown" && keyCode === 1537) {
      console.log(type + "  " + keyCode + "  " + key);
      updateText("span.x_coor", "-");
      updateText("span.y_coor", "-");
    }
  };
  return {
    addEventListeners,
    cursorVisibilityChange,
    keyEventHandler,
  };
})();

window.addEventListener("load", function () {
  const grid = document.querySelector(".grid");
  getItems()
    .then((items) => {
      items.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.className = "item";
        itemElement.tabIndex = 0;
        itemElement.id = `item${index}`;

        const coverContainer = document.createElement("div");
        coverContainer.className = "item-cover-container";
        coverContainer.style.width = "100%";
        coverContainer.style.paddingBottom = "100%";
        coverContainer.style.position = "relative";
        coverContainer.style.overflow = "hidden";
        coverContainer.style.backgroundColor = "#404040";

        const coverImage = document.createElement("img");
        coverImage.src = `assets/covers/${item.address}${item.abId}.webp`;
        coverImage.alt = item.name;
        coverImage.className = "item-cover";
        coverImage.style.position = "absolute";
        coverImage.style.top = "0";
        coverImage.style.left = "0";
        coverImage.style.width = "100%";
        coverImage.style.height = "100%";
        coverImage.style.objectFit = "cover";
        coverImage.style.pointerEvents = "none";
        coverContainer.appendChild(coverImage);

        const itemName = document.createElement("div");
        itemName.textContent = item.name;
        itemName.className = "item-name";
        itemName.style.width = "100%";
        itemName.style.padding = "0.5rem 0";
        itemName.style.textAlign = "center";
        itemName.style.overflow = "hidden";
        itemName.style.textOverflow = "ellipsis";
        itemName.style.whiteSpace = "nowrap";
        itemName.style.pointerEvents = "none";

        const itemWrapper = document.createElement("div");
        itemWrapper.className = "item-wrapper";
        itemWrapper.style.width = "100%";
        itemWrapper.style.height = "100%";
        itemWrapper.style.display = "flex";
        itemWrapper.style.flexDirection = "column";
        itemWrapper.style.pointerEvents = "none";
        itemWrapper.appendChild(coverContainer);
        itemWrapper.appendChild(itemName);

        itemElement.appendChild(itemWrapper);
        itemElement.style.position = "relative";

        grid.appendChild(itemElement);

        if (index == 0) {
          itemElement.focus();
        }
      });
      setupNavigation();
    })
    .catch(() => {});
});

function setupNavigation() {
  SpatialNavigation.init();
  SpatialNavigation.add({
    selector: ".item",
  });
  SpatialNavigation.makeFocusable();
  eventRegister.addEventListeners();
  document.addEventListener(
    "cursorStateChange",
    eventRegister.cursorVisibilityChange,
    false
  );
  document.addEventListener(
    "keydown",
    eventRegister.keyEventHandler,
    false
  );
  document.addEventListener("keyup", eventRegister.keyEventHandler, false);
}

document.addEventListener(
  "webOSLaunch",
  function (inData) {
    console.log("webOSLaunch");
  },
  true
);

document.addEventListener(
  "webOSRelaunch",
  function (inData) {
    console.log("webOSRelaunch");
  },
  true
);

var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

document.addEventListener(
  visibilityChange,
  function () {
    if (document[hidden]) {
      removePlayer();
    }
  },
  true
);

function updateIframeContent() {
  var iframe = document.getElementById("generativePlayerFrame");
  if (iframe) {
    fetchHtml(currentCollectionIndex)
      .then((content) => {
        if (content) {
          iframe.srcdoc = content;
        }
      });
  }
}

function removePlayer() {
  var iframe = document.getElementById("generativePlayerFrame");
  isShowingPlayer = false;
  if (iframe) {
    SpatialNavigation.resume();
    iframe.remove();
  }
}

var isShowingPlayer = false;

function showPlayer(itemId) {
  currentCollectionIndex = parseInt(itemId.replace("item", ""));
  if (isShowingPlayer) {
    return;
  }
  if (document[hidden]) {
    return;
  }
  var iframe = document.createElement("iframe");
  isShowingPlayer = true;
  iframe.id = "generativePlayerFrame";
  document.body.appendChild(iframe);
  updateIframeContent();
  SpatialNavigation.pause();
}
document.addEventListener(
  "keydown",
  function (event) {
    const keyCode = event.keyCode;
    if (keyCode === 461) {
      if (isShowingPlayer) {
        removePlayer();
      } else {
        webOS.platformBack();
      }
    } else if (keyCode !== "undefined") {
      if (isShowingPlayer) {
        if (keyCode == 37 || keyCode == 39) {
          updateIframeContent();
          // 37 left
          // 39 right
        } else if (keyCode == 38 || keyCode == 417) {
          let newIndex = currentCollectionIndex;
          do {
            newIndex = (newIndex + 1) % allItems.length;
            if (newIndex === currentCollectionIndex) break;
          } while (allItems.length > 0 && !allItems[newIndex].worksOnOldTv);
          currentCollectionIndex = newIndex;
          updateIframeContent();
          // 38 top
          // 417 forward
        } else if (keyCode == 40 || keyCode == 412) {
          let newIndex = currentCollectionIndex;
          do {
            newIndex = (newIndex - 1 + allItems.length) % allItems.length;
            if (newIndex === currentCollectionIndex) break;
          } while (allItems.length > 0 && !allItems[newIndex].worksOnOldTv);
          currentCollectionIndex = newIndex;
          updateIframeContent();
          // 40 bottom
          // 412 back
        } else if (keyCode == 13) {
          var iframe = document.getElementById("generativePlayerFrame");
          if (iframe && iframe.contentDocument) {
            var existingQR = iframe.contentDocument.getElementById('qrCodeContainer');
            if (existingQR) {
              existingQR.remove();
            } else {
              function createQRCode(text) {
                var qrContainer = document.createElement("div");
                qrContainer.id = 'qrCodeContainer';
                qrContainer.style.position = "absolute";
                qrContainer.style.top = "10px";
                qrContainer.style.right = "10px";
                qrContainer.style.zIndex = "9999";
                qrContainer.style.width = "128px";
                qrContainer.style.height = "128px";
                qrContainer.style.visibility = "hidden";
                var qr = new QRCode(qrContainer, {
                  text: text,
                  width: 128,
                  height: 128,
                  colorDark : "#000000",
                  colorLight : "#ffffff",
                  correctLevel : QRCode.CorrectLevel.H
                });
                return qrContainer;
              }
              var qrCode = createQRCode("https://etherscan.io/nft/" + allItems[currentCollectionIndex].address + "/" + lastTokenId);
              iframe.contentDocument.body.appendChild(qrCode);
              qrCode.offsetHeight;
              qrCode.style.visibility = "visible";
            }
          }
          // 13 center
        }
        // 413 stop
        // 415 play
        // 19 pause
      }
    }
  },
  false
);