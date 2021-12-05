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
})({"../img/imagesForProductsMain/ponpons.jpg":[function(require,module,exports) {
module.exports = "/ponpons.e930ba6c.jpg";
},{}],"../img/imagesForProductsMain/headbands.jpg":[function(require,module,exports) {
module.exports = "/headbands.cabd8cfa.jpg";
},{}],"../img/imagesForProductsMain/animals.jpg":[function(require,module,exports) {
module.exports = "/animals.c016e7bf.jpg";
},{}],"../img/imagesForProductsMain/letters.jpg":[function(require,module,exports) {
module.exports = "/letters.73a5ec5e.jpg";
},{}],"../img/imagesForProductsMain/zodiac.jpg":[function(require,module,exports) {
module.exports = "/zodiac.d0e8e51b.jpg";
},{}],"../js/main/main.js":[function(require,module,exports) {
"use strict";

var _ponpons = _interopRequireDefault(require("../../img/imagesForProductsMain/ponpons.jpg"));

var _headbands = _interopRequireDefault(require("../../img/imagesForProductsMain/headbands.jpg"));

var _animals = _interopRequireDefault(require("../../img/imagesForProductsMain/animals.jpg"));

var _letters = _interopRequireDefault(require("../../img/imagesForProductsMain/letters.jpg"));

var _zodiac = _interopRequireDefault(require("../../img/imagesForProductsMain/zodiac.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// arrays
var links = ["ponponetjes.html", "headbands.html", "animals.html", "letters.html", "zodiac.html"];
var titles = ["ponponnetjes", "headbands", "pon animals", "letters", "zodiac signs"];
var titlesExternalLinks = ["home", "about", "products", "contact"];
var titlesExternalLinksHref = ["index.html", "#about", "#products", "#contact"];
var faders = ["fade-left", "fade-right"];
var images = [_ponpons.default, _headbands.default, _animals.default, _letters.default, _zodiac.default];
var texts = ["ponponetjes kunt uw gebruiken als decoratie voor uw hand-tas, lamp, kast, en nog veel meer!<br>druk <span><a href=".concat(links[0], ">hier</a></span> om meer ponponetjes te bekijken :)"), "headbands kunt uw gebruiken om uw hoofd een nieuwe look te geven! P.S. ze zijn heel handig voor feestjes \n  <br>druk <span><a href=".concat(links[1], ">hier</a></span> om meer dieren te bekijken"), "animals kunt uw gebruiken als decoratie voor uw tassen, lamp, kast, en nog veel meer!<br>druk <span><a href=".concat(links[2], ">hier</a></span> om meer animals te bekijken :)"), "letters kunt uw gebruiken om uw tas, lamp, en andere dingen te verzieren! uw kunt ze ook gebruiken om aan uw partner te geven;) <br>druk <span><a href=".concat(links[3], ">hier</a></span> om meer letters te bekijken :)"), "ponponetjes kunt uw gebruiken als decoratie voor uw hand-tas, lamp, kast, en nog veel meer! druk <span><a href=".concat(links[4], ">hier</a></span> om meer ponponetjes te zien :)")];
var products = [{
  id: 1,
  title: titles[0],
  img: images[0],
  text: texts[0],
  link: links[0],
  class: faders[0]
}, {
  id: 1,
  title: titles[1],
  img: images[1],
  text: texts[1],
  link: links[1],
  class: faders[1]
}, {
  id: 1,
  title: titles[2],
  img: images[2],
  text: texts[2],
  link: links[2],
  class: faders[0]
}, {
  id: 1,
  title: titles[3],
  img: images[3],
  text: texts[3],
  link: links[3],
  class: faders[1]
} // {
//   id: 1,
//   title: titles[4],
//   img: images[4],
//   text: texts[4],
//   link: links[4],
//   class: faders[0]
// },
];
var AllExternalLinks = [{
  id: 1,
  linkNumber: titlesExternalLinksHref[0],
  titleNumber: titlesExternalLinks[0]
}, {
  id: 2,
  linkNumber: titlesExternalLinksHref[1],
  titleNumber: titlesExternalLinks[1]
}, {
  id: 3,
  linkNumber: titlesExternalLinksHref[2],
  titleNumber: titlesExternalLinks[2]
}, {
  id: 4,
  linkNumber: titlesExternalLinksHref[3],
  titleNumber: titlesExternalLinks[3]
}];
var AboutTextArr = [{
  title: titles[0],
  link: links[0],
  conj: "",
  comma: ","
}, {
  title: titles[1],
  link: links[1],
  conj: "",
  comma: ","
}, {
  title: titles[2],
  link: links[2],
  conj: "",
  comma: ","
}, {
  title: titles[3],
  link: links[3],
  conj: "",
  comma: ","
}, {
  title: titles[4],
  link: links[4],
  conj: "en",
  comma: ""
}]; // end of arrays
// variables

var productArticle = document.querySelector(".article");
var sidebarBtns = document.querySelector(".sidebar-btns");
var sidebar = document.querySelector(".sidebar");
var aboutText = document.querySelector(".about-text"); // end of variables
// addEventListers

window.addEventListener("DOMContentLoaded", function () {
  return Products();
}); // end of addEventListeners
// functions

function BtnDisplay() {
  var items = AllExternalLinks.map(function (item) {
    return "<a class=\"btn-sidebar\" href=".concat(item.linkNumber, ">").concat(item.titleNumber, "</a>");
  }).join("");
  sidebarBtns.innerHTML = items;
  var sidebarBtn = document.querySelectorAll(".btn-sidebar");
  sidebarBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      var target = e.target;

      if (target) {
        sidebar.classList.remove("show-sidebar");
      }
    });
  });
}

BtnDisplay();

function Products() {
  var product = products.map(function (item) {
    return "<div class=\"article-added\" data-aos=".concat(item.class, ">\n      <div class=\"article-header\">\n        <h3>").concat(item.title, "</h3>\n      </div>\n      <div class=\"img-container\">\n        <img src=").concat(item.img, " />\n        <i class=\"fas fa-home fa-home-img-product\"></i>\n      </div>\n      <div class=\"article-info\">\n        <p>").concat(item.text, "</p>\n      </div>\n    </div>");
  }).join("");
  productArticle.innerHTML = product;
}

function AboutText() {
  var text = "<p class=\"about-text-paragraph\">\n  ik maak hele leuke en schattige producten zoals <span>".concat(CreateAboutText(), "</span>\n  voor een paar simpele voorbeelden, druk <a href=\"#products\">hier</a>\n</p>");
  aboutText.innerHTML = text;
}

AboutText();

function CreateAboutText() {
  var span = AboutTextArr.map(function (item) {
    return "<span class=\"about-text-link\"\n    ><span class=\"about-text-paragraph\">".concat(item.conj, "</span> <a href=\"").concat(item.link, "\"> ").concat(item.title, "</a></span\n  >").concat(item.comma, " ");
  }).join('');
  return span;
} // end of functions
// <!-- , and
//   <span class="about-text-link"
//     ><a href="./zodiac.html">zodiac signs</a></span>
},{"../../img/imagesForProductsMain/ponpons.jpg":"../img/imagesForProductsMain/ponpons.jpg","../../img/imagesForProductsMain/headbands.jpg":"../img/imagesForProductsMain/headbands.jpg","../../img/imagesForProductsMain/animals.jpg":"../img/imagesForProductsMain/animals.jpg","../../img/imagesForProductsMain/letters.jpg":"../img/imagesForProductsMain/letters.jpg","../../img/imagesForProductsMain/zodiac.jpg":"../img/imagesForProductsMain/zodiac.jpg"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50806" + '/');

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
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/main/main.js"], null)
//# sourceMappingURL=/main.77bab836.js.map