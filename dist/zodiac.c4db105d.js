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
})({"../img/zodiac-pics/images.jpg":[function(require,module,exports) {
module.exports = "/images.0a2663eb.jpg";
},{}],"../js/globalJs/sidebar-subpage.js":[function(require,module,exports) {
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
},{}],"../js/zodiac/zodiacPrice.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZodiacDisplayPrices = ZodiacDisplayPrices;
// zodiac prices
var ZodiacCenter = document.querySelector(".prices-zodiac");
var ZodiacPriceSocial = " <ul class=\"prices-social-icons-zodiac\">\n<li><i class=\"fas hand-pointing-right fa-hand-point-right\"></i></li>\n<li>\n  <a href=\"https://wa.me/+5978979639\">\n      <i class=\"fab fa-whatsapp price-icons-zodiac\"></i>\n  </a>\n  <a href=\"https://instagram.com/wiraysha_workshop?igshid=4byv5ud4kl4f\">\n      <i class=\"fab fa-instagram price-icons-zodiac\"></i>\n  </a>\n  </li>\n</ul>";
var ZodiacPrices = ["50.00", "52.50", "60.00", "70.00"];
var ZodiacTexts = ["doorzichtige zodiac sign:<br><span>srd ".concat(ZodiacPrices[0], "</span>"), "zodiac sign met glitter:<br><span>srd ".concat(ZodiacPrices[1], "</span>"), "zodiac sign met steentjes:<br><span>srd ".concat(ZodiacPrices[2], "</span>"), "zodiac sign met foil:<br><span>srd ".concat(ZodiacPrices[3], "</span>"), "combinations of more than one accesory is possible<br>".concat(ZodiacPriceSocial)];
var ZodiacArr = [{
  text: ZodiacTexts[0]
}, {
  text: ZodiacTexts[1]
}, {
  text: ZodiacTexts[2]
}, {
  text: ZodiacTexts[3]
}, {
  text: ZodiacTexts[4]
}];

function ZodiacDisplayPrices() {
  var PriceItems = ZodiacArr.map(function (item) {
    return "<li class=\"price-zodiac\">".concat(item.text, "</li>");
  }).join("");
  ZodiacCenter.innerHTML = PriceItems;
}

ZodiacDisplayPrices(); // end of zodiac prices
},{}],"../js/zodiac/zodiac.js":[function(require,module,exports) {
"use strict";

var _images = _interopRequireDefault(require("../../img/zodiac-pics/images.jpg"));

require("../globalJs/sidebar-subpage");

require("./zodiacPrice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var faders = ['fade-left', 'fade-right'];
var zodiacNames = ["aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "scorpio", "virgo", "libra", "sagittarius ", "capricorn"];
var prices = [50];
var ZodiacImages = [_images.default];
var ZodiacText = ["Aquarius energy helps us innovate and unite for social justice"];
var zodiacs = [{
  title: zodiacNames[0],
  category: zodiacNames[0],
  img: ZodiacImages[0],
  price: prices[0],
  text: ZodiacText[0],
  class: faders[0]
}, {
  title: zodiacNames[1],
  category: zodiacNames[1],
  img: ZodiacImages[0],
  price: prices[0],
  text: ZodiacText[0],
  class: faders[1]
}, {
  title: zodiacNames[2],
  category: zodiacNames[2],
  img: ZodiacImages[0],
  price: prices[0],
  text: ZodiacText[0],
  class: faders[0]
}, {
  title: zodiacNames[3],
  category: zodiacNames[3],
  img: ZodiacImages[0],
  price: prices[0],
  text: ZodiacText[0],
  class: faders[1]
}, {
  title: zodiacNames[4],
  category: zodiacNames[4],
  img: ZodiacImages[0],
  price: prices[0],
  text: ZodiacText[0],
  class: faders[0]
}, {
  title: zodiacNames[5],
  category: zodiacNames[5],
  img: ZodiacImages[0],
  price: prices[0],
  text: ZodiacText[0],
  class: faders[1]
}, {
  title: zodiacNames[6],
  category: zodiacNames[6],
  img: ZodiacImages[0],
  price: prices[0],
  text: ZodiacText[0],
  class: faders[0]
}, {
  title: zodiacNames[7],
  category: zodiacNames[7],
  img: ZodiacImages[0],
  price: prices[0],
  text: ZodiacText[0],
  class: faders[1]
}, {
  title: zodiacNames[8],
  category: zodiacNames[8],
  img: ZodiacImages[0],
  price: prices[0],
  text: ZodiacText[0],
  class: faders[0]
}, {
  title: zodiacNames[9],
  category: zodiacNames[9],
  img: ZodiacImages[0],
  price: prices[0],
  text: ZodiacText[0],
  class: faders[1]
}, {
  title: zodiacNames[10],
  category: zodiacNames[10],
  img: ZodiacImages[0],
  price: prices[0],
  text: ZodiacText[0],
  class: faders[0]
}, {
  title: zodiacNames[11],
  category: zodiacNames[11],
  img: ZodiacImages[0],
  price: prices[0],
  text: ZodiacText[0],
  class: faders[1]
}];
var mainSection = document.querySelector(".main-center-subpage"); // event listeners

window.addEventListener("DOMContentLoaded", function () {
  return zodiacDisplay(zodiacs);
}); // functions

function zodiacDisplay(par) {
  var items = par.map(function (item) {
    return "<article class=\"article\" data-aos=".concat(item.class, ">\n        <div class=\"header\">\n          <h4 class=\"logo\">").concat(item.title, "</h4>\n          <div class=\"underline\"></div>\n        </div>\n        <div class=\"img-container\">\n          <img src=").concat(item.img, " alt=\"\" />\n        </div>\n        <div class=\"price\">\n          <div>\n            <p>").concat(item.price, "Srd</p>\n            <a href=\"aquarius.html\"><i class=\"fas fa-info\"></i></a>\n          </div>\n          <div class=\"underline\"></div>\n        </div>\n        <p class=\"text\">\n          ").concat(item.text, "\n        </p>\n      </article>");
  }).join("");
  mainSection.innerHTML = items;
}
},{"../../img/zodiac-pics/images.jpg":"../img/zodiac-pics/images.jpg","../globalJs/sidebar-subpage":"../js/globalJs/sidebar-subpage.js","./zodiacPrice":"../js/zodiac/zodiacPrice.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54879" + '/');

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
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/zodiac/zodiac.js"], null)
//# sourceMappingURL=/zodiac.c4db105d.js.map