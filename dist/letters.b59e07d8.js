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
})({"../img/letters/E.jpg":[function(require,module,exports) {
module.exports = "/E.ff4dc9f1.jpg";
},{}],"../img/letters/F.jpg":[function(require,module,exports) {
module.exports = "/F.441c481e.jpg";
},{}],"../img/letters/G.jpg":[function(require,module,exports) {
module.exports = "/G.4dba41cb.jpg";
},{}],"../img/letters/H.jpg":[function(require,module,exports) {
module.exports = "/H.30993ea1.jpg";
},{}],"../img/letters/I.jpg":[function(require,module,exports) {
module.exports = "/I.11d844b3.jpg";
},{}],"../img/letters/J.jpg":[function(require,module,exports) {
module.exports = "/J.f34ebaf0.jpg";
},{}],"../img/letters/K.jpg":[function(require,module,exports) {
module.exports = "/K.cc5254a9.jpg";
},{}],"../img/letters/L.jpg":[function(require,module,exports) {
module.exports = "/L.05b01b0f.jpg";
},{}],"../img/letters/M.jpg":[function(require,module,exports) {
module.exports = "/M.26cd0387.jpg";
},{}],"../img/letters/N.jpg":[function(require,module,exports) {
module.exports = "/N.a1307bec.jpg";
},{}],"../img/letters/O.jpg":[function(require,module,exports) {
module.exports = "/O.e393e669.jpg";
},{}],"../img/letters/P.jpg":[function(require,module,exports) {
module.exports = "/P.3ddffecd.jpg";
},{}],"../img/letters/Q.jpg":[function(require,module,exports) {
module.exports = "/Q.a1b19013.jpg";
},{}],"../img/letters/R.jpg":[function(require,module,exports) {
module.exports = "/R.6faccd08.jpg";
},{}],"../img/letters/S.jpg":[function(require,module,exports) {
module.exports = "/S.fb69e095.jpg";
},{}],"../img/letters/T.jpg":[function(require,module,exports) {
module.exports = "/T.6da6de4f.jpg";
},{}],"../img/letters/U.jpg":[function(require,module,exports) {
module.exports = "/U.9d43b73b.jpg";
},{}],"../img/letters/V.jpg":[function(require,module,exports) {
module.exports = "/V.1356636d.jpg";
},{}],"../img/letters/W.jpg":[function(require,module,exports) {
module.exports = "/W.9797e030.jpg";
},{}],"../img/letters/X.jpg":[function(require,module,exports) {
module.exports = "/X.6dc01d91.jpg";
},{}],"../img/letters/Y.jpg":[function(require,module,exports) {
module.exports = "/Y.f5b07c97.jpg";
},{}],"../img/letters/Z.jpg":[function(require,module,exports) {
module.exports = "/Z.8c7a332d.jpg";
},{}],"../img/letters/1st-name-letter.jpeg":[function(require,module,exports) {
module.exports = "/1st-name-letter.ca04d39f.jpeg";
},{}],"../img/letters/2nd-name-letter.jpeg":[function(require,module,exports) {
module.exports = "/2nd-name-letter.6772fd70.jpeg";
},{}],"../img/letters/3rd-name-letter.jpg":[function(require,module,exports) {
module.exports = "/3rd-name-letter.847e28f7.jpg";
},{}],"../img/letters/4th-name-letter.jpg":[function(require,module,exports) {
module.exports = "/4th-name-letter.60b78918.jpg";
},{}],"../img/letters/5th-name-letter.jpg":[function(require,module,exports) {
module.exports = "/5th-name-letter.ac808964.jpg";
},{}],"../img/letters/6th-name-letter.jpg":[function(require,module,exports) {
module.exports = "/6th-name-letter.39905ac9.jpg";
},{}],"../img/letters/7th-name-letter.jpg":[function(require,module,exports) {
module.exports = "/7th-name-letter.43f2ebaf.jpg";
},{}],"../img/letters/8th-name-letter.jpg":[function(require,module,exports) {
module.exports = "/8th-name-letter.dba2f66b.jpg";
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
var priceCenter = document.querySelector('.prices-center');

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
        if (e.target.classList.contains('prices-js')) {
          sidebar.classList.remove("show-sidebar");
          priceCenter.classList.toggle('price-center-toggled');
        }

        sidebar.classList.remove("show-sidebar");
      }
    });
  });
}

ListItemsSidebar();
},{}],"../js/letters/letters.js":[function(require,module,exports) {
"use strict";

var _E = _interopRequireDefault(require("../../img/letters/E.jpg"));

var _F = _interopRequireDefault(require("../../img/letters/F.jpg"));

var _G = _interopRequireDefault(require("../../img/letters/G.jpg"));

var _H = _interopRequireDefault(require("../../img/letters/H.jpg"));

var _I = _interopRequireDefault(require("../../img/letters/I.jpg"));

var _J = _interopRequireDefault(require("../../img/letters/J.jpg"));

var _K = _interopRequireDefault(require("../../img/letters/K.jpg"));

var _L = _interopRequireDefault(require("../../img/letters/L.jpg"));

var _M = _interopRequireDefault(require("../../img/letters/M.jpg"));

var _N = _interopRequireDefault(require("../../img/letters/N.jpg"));

var _O = _interopRequireDefault(require("../../img/letters/O.jpg"));

var _P = _interopRequireDefault(require("../../img/letters/P.jpg"));

var _Q = _interopRequireDefault(require("../../img/letters/Q.jpg"));

var _R = _interopRequireDefault(require("../../img/letters/R.jpg"));

var _S = _interopRequireDefault(require("../../img/letters/S.jpg"));

var _T = _interopRequireDefault(require("../../img/letters/T.jpg"));

var _U = _interopRequireDefault(require("../../img/letters/U.jpg"));

var _V = _interopRequireDefault(require("../../img/letters/V.jpg"));

var _W = _interopRequireDefault(require("../../img/letters/W.jpg"));

var _X = _interopRequireDefault(require("../../img/letters/X.jpg"));

var _Y = _interopRequireDefault(require("../../img/letters/Y.jpg"));

var _Z = _interopRequireDefault(require("../../img/letters/Z.jpg"));

var _stNameLetter = _interopRequireDefault(require("../../img/letters/1st-name-letter.jpeg"));

var _ndNameLetter = _interopRequireDefault(require("../../img/letters/2nd-name-letter.jpeg"));

var _rdNameLetter = _interopRequireDefault(require("../../img/letters/3rd-name-letter.jpg"));

var _thNameLetter = _interopRequireDefault(require("../../img/letters/4th-name-letter.jpg"));

var _thNameLetter2 = _interopRequireDefault(require("../../img/letters/5th-name-letter.jpg"));

var _thNameLetter3 = _interopRequireDefault(require("../../img/letters/6th-name-letter.jpg"));

var _thNameLetter4 = _interopRequireDefault(require("../../img/letters/7th-name-letter.jpg"));

var _thNameLetter5 = _interopRequireDefault(require("../../img/letters/8th-name-letter.jpg"));

require("../globalJs/sidebar-subpage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prices = ['35.00', '37.50', '40.00', '45.00', '50.00'];
var priceText = ["letter met glitter:<br><span>Srd ".concat(prices[0], "</span>"), "letter met bloemen:<br><span>Srd ".concat(prices[1], "</span>"), "letter met schelpen:<br><span>Srd ".concat(prices[2], "</span>"), "letter met steentjes:<br><span>Srd ".concat(prices[3], "</span>"), "letter met zilvere of goudkleurige foil:<br><span>Srd ".concat(prices[4], "</span>")];
var priceArr = [{
  text: priceText[0]
}, {
  text: priceText[1]
}, {
  text: priceText[2]
}, {
  text: priceText[3]
}, {
  text: priceText[4]
}];
var imagesArr = [_E.default, _F.default, _G.default, _H.default, _I.default, _J.default, _K.default, _L.default, _M.default, _N.default, _O.default, _P.default, _Q.default, _R.default, _S.default, _T.default, _U.default, _V.default, _X.default, _Y.default, _W.default, _Z.default];
var nameArr = [_stNameLetter.default, _ndNameLetter.default, _rdNameLetter.default, _thNameLetter.default, _thNameLetter2.default, _thNameLetter3.default, _thNameLetter4.default, _thNameLetter5.default];
var LeftArrow = document.querySelector(".fa-angle-left");
var RightArrow = document.querySelector(".fa-angle-right");
var PriceCenter = document.querySelector(".price-center");
var NamesArrowsRight = document.querySelector(".name-right");
var NamesArrowsLeft = document.querySelector(".name-left");
var imageNames = document.querySelector(".img-for-names");
var img = document.querySelector(".img-for-E-D"); // functions

function ArrowsLetters() {
  var counter = 0;
  RightArrow.addEventListener("click", function (e) {
    counter++;
    img.setAttribute("src", imagesArr[counter]);
    console.log(counter);

    if (counter > imagesArr.length - 1) {
      counter = 0;
      img.setAttribute("src", imagesArr[counter]);
    }

    return counter;
  });
  LeftArrow.addEventListener("click", function (e) {
    counter--;

    if (counter < 0) {
      counter = imagesArr.length - 1;
      img.setAttribute("src", imagesArr[counter]);
    }

    img.setAttribute("src", imagesArr[counter]);
    console.log(counter);
    return counter;
  });
}

ArrowsLetters();

function ArrowsNames() {
  var counter = 0;
  imageNames.setAttribute("src", nameArr[counter]);
  NamesArrowsRight.addEventListener("click", function (e) {
    counter++;
    imageNames.setAttribute("src", nameArr[counter]);
    console.log(counter);

    if (counter > nameArr.length - 1) {
      counter = 0;
      imageNames.setAttribute("src", nameArr[counter]);
    }

    return counter;
  });
  NamesArrowsLeft.addEventListener("click", function (e) {
    counter--;
    imageNames.setAttribute("src", nameArr[counter]);
    console.log(counter);

    if (counter < 0) {
      counter = nameArr.length - 1;
      imageNames.setAttribute("src", nameArr[counter]);
    }

    return counter;
  });
}

ArrowsNames();

function DisplayPrices() {
  var Prices = priceArr.map(function (price) {
    return "<ul class=\"prices\">\n    <li class=\"price\">".concat(price.text, "</li>\n  </ul>");
  }).join("");
  PriceCenter.innerHTML = Prices;
}

DisplayPrices();
},{"../../img/letters/E.jpg":"../img/letters/E.jpg","../../img/letters/F.jpg":"../img/letters/F.jpg","../../img/letters/G.jpg":"../img/letters/G.jpg","../../img/letters/H.jpg":"../img/letters/H.jpg","../../img/letters/I.jpg":"../img/letters/I.jpg","../../img/letters/J.jpg":"../img/letters/J.jpg","../../img/letters/K.jpg":"../img/letters/K.jpg","../../img/letters/L.jpg":"../img/letters/L.jpg","../../img/letters/M.jpg":"../img/letters/M.jpg","../../img/letters/N.jpg":"../img/letters/N.jpg","../../img/letters/O.jpg":"../img/letters/O.jpg","../../img/letters/P.jpg":"../img/letters/P.jpg","../../img/letters/Q.jpg":"../img/letters/Q.jpg","../../img/letters/R.jpg":"../img/letters/R.jpg","../../img/letters/S.jpg":"../img/letters/S.jpg","../../img/letters/T.jpg":"../img/letters/T.jpg","../../img/letters/U.jpg":"../img/letters/U.jpg","../../img/letters/V.jpg":"../img/letters/V.jpg","../../img/letters/W.jpg":"../img/letters/W.jpg","../../img/letters/X.jpg":"../img/letters/X.jpg","../../img/letters/Y.jpg":"../img/letters/Y.jpg","../../img/letters/Z.jpg":"../img/letters/Z.jpg","../../img/letters/1st-name-letter.jpeg":"../img/letters/1st-name-letter.jpeg","../../img/letters/2nd-name-letter.jpeg":"../img/letters/2nd-name-letter.jpeg","../../img/letters/3rd-name-letter.jpg":"../img/letters/3rd-name-letter.jpg","../../img/letters/4th-name-letter.jpg":"../img/letters/4th-name-letter.jpg","../../img/letters/5th-name-letter.jpg":"../img/letters/5th-name-letter.jpg","../../img/letters/6th-name-letter.jpg":"../img/letters/6th-name-letter.jpg","../../img/letters/7th-name-letter.jpg":"../img/letters/7th-name-letter.jpg","../../img/letters/8th-name-letter.jpg":"../img/letters/8th-name-letter.jpg","../globalJs/sidebar-subpage":"../js/globalJs/sidebar-subpage.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57433" + '/');

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
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/letters/letters.js"], null)
//# sourceMappingURL=/letters.b59e07d8.js.map