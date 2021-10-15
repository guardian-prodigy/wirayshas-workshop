// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../js/globalJs/sidebar-subpage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sidebartoggle = sidebartoggle;
exports.ListItemsSidebar = ListItemsSidebar;
var btns = document.querySelectorAll(".btn-js");
var sidebar = document.querySelector(".sidebar-subpage");
var btnSidebar = document.querySelectorAll(".btn-sidebar-subpage");
var priceCenter = document.querySelector(".prices-center");

function sidebartoggle() {
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (e.currentTarget.classList.contains("fa-bars")) {
        sidebar.classList.toggle("show-sidebar");
      } else if (e.currentTarget.classList.contains("fa-times")) {
        sidebar.classList.remove("show-sidebar");
      }
    });
  });
}

sidebartoggle();

function ListItemsSidebar() {
  btnSidebar.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (e.target) {
        sidebar.classList.remove("show-sidebar");
      }

      if (e.target.classList.contains("prices-js")) {
        sidebar.classList.remove("show-sidebar");
        console.log("hi");
        priceCenter.classList.toggle("price-center-toggled");
      }
    });
  });
}

ListItemsSidebar();
},{}],"../js/headbands/headbands-prices.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayLetterPrices = DisplayLetterPrices;
var LettersCenter = document.querySelector(".prices-headbands");
var Lettersprices = ["40.00", "50.00", "5.00"];
var LetterSocialIcons = "<ul class=\"prices-social-icons-zodiac\">\n<li><i class=\"fas hand-pointing-right fa-hand-point-right\"></i></li>\n<li>\n  <a href=\"https://wa.me/+5978979639\">\n      <i class=\"fab fa-whatsapp price-icons-zodiac\"></i>\n  </a>\n  <a href=\"https://instagram.com/wiraysha_workshop?igshid=4byv5ud4kl4f\">\n      <i class=\"fab fa-instagram price-icons-zodiac\"></i>\n  </a>\n  </li>\n</ul>";
var LetterspriceText = ["one-colored headbands prices: <span>srd ".concat(Lettersprices[0], "</span>"), "two-colored headbands prices: <span>srd ".concat(Lettersprices[1], "</span>"), "more than two colors are possible for: <span><br>srd ".concat(Lettersprices[2], "</span><br>").concat(LetterSocialIcons)];
var LetterspriceArr = [{
  text: LetterspriceText[0]
}, {
  text: LetterspriceText[1]
}, {
  text: LetterspriceText[2]
}];

function DisplayLetterPrices() {
  var Prices = LetterspriceArr.map(function (price) {
    return "<li class=\"price-letters\">".concat(price.text, "</li>");
  }).join("");
  LettersCenter.innerHTML = Prices;
}

;
DisplayLetterPrices();
},{}],"../../img/headbands/1colored-1.jpg":[function(require,module,exports) {
module.exports = "/1colored-1.622fc5e5.jpg";
},{}],"../../img/headbands/1colored-2.jpg":[function(require,module,exports) {
module.exports = "/1colored-2.3fa7236d.jpg";
},{}],"../../img/headbands/1colored-3.jpg":[function(require,module,exports) {
module.exports = "/1colored-3.ae4a7186.jpg";
},{}],"../../img/headbands/2colored-1.jpg":[function(require,module,exports) {
module.exports = "/2colored-1.f752aec0.jpg";
},{}],"../../img/headbands/2colored-2.jpg":[function(require,module,exports) {
module.exports = "/2colored-2.90b13556.jpg";
},{}],"../../img/headbands/2colored-3.jpg":[function(require,module,exports) {
module.exports = "/2colored-3.9afb751f.jpg";
},{}],"../js/headbands/products.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headbandsDisplay1 = headbandsDisplay1;
exports.headbandsDisplay2 = headbandsDisplay2;
exports.Btns = Btns;

var _colored = _interopRequireDefault(require("../../../img/headbands/1colored-1.jpg"));

var _colored2 = _interopRequireDefault(require("../../../img/headbands/1colored-2.jpg"));

var _colored3 = _interopRequireDefault(require("../../../img/headbands/1colored-3.jpg"));

var _colored4 = _interopRequireDefault(require("../../../img/headbands/2colored-1.jpg"));

var _colored5 = _interopRequireDefault(require("../../../img/headbands/2colored-2.jpg"));

var _colored6 = _interopRequireDefault(require("../../../img/headbands/2colored-3.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var headbandsCenterProducts = document.querySelector(".headbands-center");
var OneColoredBtn = document.querySelector(".one-colored");
var TwoColoredBtn = document.querySelector(".two-colored");
var HeadbandsImages1 = [_colored.default, _colored2.default, _colored3.default];
var HeadbandsImages2 = [_colored4.default, _colored5.default, _colored6.default];
var HeadbandsTexts1 = ["40 srd"];
var HeadbandsTexts2 = ["50 srd"];
var purchaseBtns = ["Buy Now"];
var HeadbandsArr1 = [_defineProperty({
  img: HeadbandsImages1[0],
  text: HeadbandsTexts1[0],
  btn: purchaseBtns[0]
}, "btn", purchaseBtns[0]), _defineProperty({
  img: HeadbandsImages1[1],
  text: HeadbandsTexts1[0],
  btn: purchaseBtns[0]
}, "btn", purchaseBtns[0]), _defineProperty({
  img: HeadbandsImages1[2],
  text: HeadbandsTexts1[0],
  btn: purchaseBtns[0]
}, "btn", purchaseBtns[0])];
var HeadbandsArr2 = [_defineProperty({
  img: HeadbandsImages2[0],
  text: HeadbandsTexts2[0],
  btn: purchaseBtns[0]
}, "btn", purchaseBtns[0]), _defineProperty({
  img: HeadbandsImages2[1],
  text: HeadbandsTexts2[0],
  btn: purchaseBtns[0]
}, "btn", purchaseBtns[0]), _defineProperty({
  img: HeadbandsImages2[2],
  text: HeadbandsTexts2[0],
  btn: purchaseBtns[0]
}, "btn", purchaseBtns[0])];
window.addEventListener("DOMContentLoaded", function () {
  headbandsDisplay1(), Btns();
});

function headbandsDisplay1() {
  var items = HeadbandsArr1.map(function (item) {
    return "<div class=\"headbands-img-text\">\n    <div class=\"img-container img-container-headbands\">\n      <img src=".concat(item.img, " alt=\"\" />\n    </div>\n    <div>\n    <div class=\"purchase-price-btn\">\n    <p class=\"about-text text\">\n      ").concat(item.text, "\n    </p>\n    <a href=\"https://wa.me/+5978979639\" class=\"purchase-btn-for-products\">").concat(item.btn, "</a>\n    </div>\n    </div>\n  </div>");
  }).join("");
  headbandsCenterProducts.innerHTML = items;
}

function headbandsDisplay2() {
  var items = HeadbandsArr2.map(function (item) {
    return "<div class=\"headbands-img-text\">\n    <div class=\"img-container img-container-headbands\">\n      <img src=".concat(item.img, " alt=\"\" />\n    </div>\n    <div class=\"purchase-price-btn\">\n    <p class=\"about-text text\">\n      ").concat(item.text, "\n    </p>\n    <a href=\"https://wa.me/+5978979639\" class=\"purchase-btn-for-products\">").concat(item.btn, "</a>\n    </div>\n  </div>");
  }).join("");
  headbandsCenterProducts.innerHTML = items;
}

function Btns() {
  OneColoredBtn.addEventListener("click", function (e) {
    return headbandsDisplay1();
  });
  TwoColoredBtn.addEventListener("click", function (e) {
    return headbandsDisplay2();
  });
}
},{"../../../img/headbands/1colored-1.jpg":"../../img/headbands/1colored-1.jpg","../../../img/headbands/1colored-2.jpg":"../../img/headbands/1colored-2.jpg","../../../img/headbands/1colored-3.jpg":"../../img/headbands/1colored-3.jpg","../../../img/headbands/2colored-1.jpg":"../../img/headbands/2colored-1.jpg","../../../img/headbands/2colored-2.jpg":"../../img/headbands/2colored-2.jpg","../../../img/headbands/2colored-3.jpg":"../../img/headbands/2colored-3.jpg"}],"../js/headbands/headbands.js":[function(require,module,exports) {
"use strict";

require("../globalJs/sidebar-subpage");

require("./headbands-prices");

require("./products");
},{"../globalJs/sidebar-subpage":"../js/globalJs/sidebar-subpage.js","./headbands-prices":"../js/headbands/headbands-prices.js","./products":"../js/headbands/products.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62641" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/headbands/headbands.js"], null)
//# sourceMappingURL=/headbands.47aa36a3.js.map