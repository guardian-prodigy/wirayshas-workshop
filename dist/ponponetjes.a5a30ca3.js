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
})({"../js/ponponetjes/price.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayPonponetjesPrices = DisplayPonponetjesPrices;
var PonPonetjesCenter = document.querySelector(".prices-Ponponetjes");
var PonPonetjesprices = ['10.00, 12.50, 15.00', '12.50, 15.00, 17.50', '2.50'];
var PonPonetjesocialIcons = "<ul class=\"prices-social-icons-zodiac\">\n<li><i class=\"fas hand-pointing-right fa-hand-point-right\"></i></li>\n<li>\n  <a href=\"https://wa.me/+5978979639\">\n      <i class=\"fab fa-whatsapp price-icons-zodiac\"></i>\n  </a>\n  <a href=\"https://instagram.com/wiraysha_workshop?igshid=4byv5ud4kl4f\">\n      <i class=\"fab fa-instagram price-icons-zodiac\"></i>\n  </a>\n  </li>\n</ul>";
var PonPonetjespriceText = ["one colored ponpon:<br><span>srd: ".concat(PonPonetjesprices[0]), "two colored ponpon:<br><span>srd: ".concat(PonPonetjesprices[1]), "per extra color: <span>srd ".concat(PonPonetjesprices[2], "</span>"), "<strong>the prijzen zijn gelijst in volg orde van small, medium, en large!</strong><br>".concat(PonPonetjesocialIcons)];
var PonPonetjespriceArr = [{
  text: PonPonetjespriceText[0]
}, {
  text: PonPonetjespriceText[1]
}, {
  text: PonPonetjespriceText[2]
}, {
  text: PonPonetjespriceText[3]
}];

function DisplayPonponetjesPrices() {
  var Prices = PonPonetjespriceArr.map(function (price) {
    return "<li class=\"price-PonPonetjes\">".concat(price.text, "</li>");
  }).join("");
  PonPonetjesCenter.innerHTML = Prices;
}

DisplayPonponetjesPrices();
},{}],"../../img/pon-balls/Small1.jpg":[function(require,module,exports) {
module.exports = "/Small1.c365f19f.jpg";
},{}],"../../img/pon-balls/Medium1.jpg":[function(require,module,exports) {
module.exports = "/Medium1.f1ee3429.jpg";
},{}],"../../img/pon-balls/Large1.jpg":[function(require,module,exports) {
module.exports = "/Large1.066dcfab.jpg";
},{}],"../../img/pon-balls/Small2.jpg":[function(require,module,exports) {
module.exports = "/Small2.c7b3dbbb.jpg";
},{}],"../../img/pon-balls/Medium2.jpg":[function(require,module,exports) {
module.exports = "/Medium2.4417cec9.jpg";
},{}],"../../img/pon-balls/Large2.jpg":[function(require,module,exports) {
module.exports = "/Large2.14ca04ea.jpg";
},{}],"../js/ponponetjes/products.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PonponetjesDisplay1 = PonponetjesDisplay1;
exports.PonponetjesDisplay2 = PonponetjesDisplay2;
exports.Btns = Btns;

var _Small = _interopRequireDefault(require("../../../img/pon-balls/Small1.jpg"));

var _Medium = _interopRequireDefault(require("../../../img/pon-balls/Medium1.jpg"));

var _Large = _interopRequireDefault(require("../../../img/pon-balls/Large1.jpg"));

var _Small2 = _interopRequireDefault(require("../../../img/pon-balls/Small2.jpg"));

var _Medium2 = _interopRequireDefault(require("../../../img/pon-balls/Medium2.jpg"));

var _Large2 = _interopRequireDefault(require("../../../img/pon-balls/Large2.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// imports 
// end of imports
var PonponetjesCenterProducts = document.querySelector(".Ponponetje-center");
var OneColoredBtn = document.querySelector(".one-colored");
var TwoColoredBtn = document.querySelector(".two-colored");
var PonponetjesImages1 = [_Small.default, _Medium.default, _Large.default];
var PonponetjesImages2 = [_Small2.default, _Medium2.default, _Large2.default];
var PonponetjesTexts1 = ["small: srd 10", "medium: srd 12.50", "large: srd 15.00"];
var PonponetjesTexts2 = ["small: srd 12.50", "medium: srd 15.00", "large: srd 20.00"];
var PonponetjesArr1 = [{
  img: PonponetjesImages1[0],
  text: PonponetjesTexts1[0]
}, {
  img: PonponetjesImages1[1],
  text: PonponetjesTexts1[1]
}, {
  img: PonponetjesImages1[2],
  text: PonponetjesTexts1[2]
}];
var PonponetjesArr2 = [{
  img: PonponetjesImages2[0],
  text: PonponetjesTexts2[0]
}, {
  img: PonponetjesImages2[1],
  text: PonponetjesTexts2[1]
}, {
  img: PonponetjesImages2[2],
  text: PonponetjesTexts2[2]
}];
window.addEventListener("DOMContentLoaded", function () {
  PonponetjesDisplay1(), Btns();
});

function PonponetjesDisplay1() {
  var items = PonponetjesArr1.map(function (item) {
    return "<div class=\"Ponponetjes-img-text\">\n    <div class=\"img-container img-container-Ponponetjes\">\n      <img src=".concat(item.img, " alt=\"\" />\n    </div>\n    <p class=\"about-text text\">\n      ").concat(item.text, "\n    </p>\n  </div>");
  }).join("");
  PonponetjesCenterProducts.innerHTML = items;
}

function PonponetjesDisplay2() {
  var items = PonponetjesArr2.map(function (item) {
    return "<div class=\"Ponponetjes-img-text\">\n    <div class=\"img-container img-container-Ponponetjes\">\n      <img src=".concat(item.img, " alt=\"\" />\n    </div>\n    <p class=\"about-text text\">\n      ").concat(item.text, "\n    </p>\n  </div>");
  }).join("");
  PonponetjesCenterProducts.innerHTML = items;
}

function Btns() {
  OneColoredBtn.addEventListener("click", function (e) {
    return PonponetjesDisplay1();
  });
  TwoColoredBtn.addEventListener("click", function (e) {
    return PonponetjesDisplay2();
  });
}
},{"../../../img/pon-balls/Small1.jpg":"../../img/pon-balls/Small1.jpg","../../../img/pon-balls/Medium1.jpg":"../../img/pon-balls/Medium1.jpg","../../../img/pon-balls/Large1.jpg":"../../img/pon-balls/Large1.jpg","../../../img/pon-balls/Small2.jpg":"../../img/pon-balls/Small2.jpg","../../../img/pon-balls/Medium2.jpg":"../../img/pon-balls/Medium2.jpg","../../../img/pon-balls/Large2.jpg":"../../img/pon-balls/Large2.jpg"}],"../js/globalJs/sidebar-subpage.js":[function(require,module,exports) {
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
},{}],"../js/ponponetjes/ponponetjes.js":[function(require,module,exports) {
"use strict";

require("./price");

require("./products");

require("../globalJs/sidebar-subpage");
},{"./price":"../js/ponponetjes/price.js","./products":"../js/ponponetjes/products.js","../globalJs/sidebar-subpage":"../js/globalJs/sidebar-subpage.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61636" + '/');

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
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/ponponetjes/ponponetjes.js"], null)
//# sourceMappingURL=/ponponetjes.a5a30ca3.js.map