parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    U31x: [
      function (require, module, exports) {
        module.exports = "/ponpons.7dfa00fe.jpg";
      },
      {},
    ],
    IKor: [
      function (require, module, exports) {
        "use strict";
        require("./imagesForProductsMain/ponpons.jpg");
        var e = [
            "/html/ponponetjes.html",
            "/html/headbands.html",
            "/html/animals.html",
            "/html/letters.html",
            "/html/zodiac.html",
          ],
          i = [
            "ponponetjes",
            "headbands",
            "animals",
            "letters",
            "zodiac signs",
          ],
          t = [
            "./imagesForProductsMain/ponpons.jpg",
            "../img/imagesForProductsMain/headbands.jpg",
            "../img/imagesForProductsMain/animals.jpg",
            "../img/imagesForProductsMain/letters.jpg",
            "../img/imagesForProductsMain/zodiac.jpg",
          ];
        console.log(t);
        var n = [{ id: 1, title: i[0], img: t[0], link: e[0] }];
        console.log(n.img);
        var r = [
            { id: 1, linkNumber: e[0], titleNumber: i[0] },
            { id: 2, linkNumber: e[1], titleNumber: i[1] },
            { id: 3, linkNumber: e[2], titleNumber: i[2] },
            { id: 4, linkNumber: e[3], titleNumber: i[3] },
            { id: 5, linkNumber: e[4], titleNumber: i[4] },
          ],
          s = document.querySelector(".section-center"),
          a = document.querySelector(".article"),
          o = document.querySelector(".sidebar"),
          c = document.querySelectorAll(".fas-js"),
          l = document.querySelector(".sidebar-btns"),
          d = document.querySelector(".section-header");
        function m() {
          c.forEach(function (e) {
            e.addEventListener("click", function (e) {
              e.currentTarget.classList.contains("fa-bars")
                ? (o.classList.toggle("show-sidebar"),
                  (d.style.display = "hidden"))
                : e.currentTarget.classList.contains("fa-times") &&
                  (o.classList.remove("show-sidebar"),
                  (d.style.display = "visible"));
            });
          });
        }
        function u() {
          var e = r
            .map(function (e) {
              return '<li class="btn-sidebar"><a href='
                .concat(e.linkNumber, ">")
                .concat(e.titleNumber, "</a></li>");
            })
            .join("");
          (l.innerHTML = e),
            document.querySelectorAll(".btn-sidebar").forEach(function (e) {
              e.addEventListener("click", function (e) {
                e.target && o.classList.remove("show-sidebar");
              });
            });
        }
        function g() {
          var e = n
            .map(function (e) {
              return '<div class="article-added">\n      <div class="article-header">\n        <h3>'
                .concat(
                  e.title,
                  '</h3>\n      </div>\n      <div class="img-container">\n        <img src='
                )
                .concat(
                  e.img,
                  ' />\n        <i class="fas fa-home fa-home-img-product"></i>\n      </div>\n      <div class="article-info">\n        <p>hi</p>\n      </div>\n    </div>'
                );
            })
            .join("");
          a.innerHTML = e;
        }
        window.addEventListener(
          "DOMContentLoaded",
          function () {
            return m();
          },
          u(),
          g()
        );
      },
      { "./imagesForProductsMain/ponpons.jpg": "U31x" },
    ],
  },
  {},
  ["IKor"],
  null
);
//# sourceMappingURL=/main.72aaf07c.js.map
