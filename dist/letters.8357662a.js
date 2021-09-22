parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"DSTr":[function(require,module,exports) {
module.exports="/E.f23b684d.jpg";
},{}],"e5Vj":[function(require,module,exports) {
module.exports="/F.7803ed2c.jpg";
},{}],"bCHz":[function(require,module,exports) {
module.exports="/G.6b75b78e.jpg";
},{}],"Gnkj":[function(require,module,exports) {
module.exports="/H.d01c8128.jpg";
},{}],"Rlgf":[function(require,module,exports) {
module.exports="/I.69b26dfa.jpg";
},{}],"XXyy":[function(require,module,exports) {
module.exports="/J.413f79d1.jpg";
},{}],"ukO9":[function(require,module,exports) {
module.exports="/K.6d97d01f.jpg";
},{}],"IU2j":[function(require,module,exports) {
module.exports="/L.97406e23.jpg";
},{}],"PwSL":[function(require,module,exports) {
module.exports="/M.de8a7847.jpg";
},{}],"ZZHs":[function(require,module,exports) {
module.exports="/N.c7847d7f.jpg";
},{}],"FeDK":[function(require,module,exports) {
module.exports="/O.996db948.jpg";
},{}],"GqmZ":[function(require,module,exports) {
module.exports="/P.7910403c.jpg";
},{}],"aQGu":[function(require,module,exports) {
module.exports="/Q.354df96a.jpg";
},{}],"i6Sz":[function(require,module,exports) {
module.exports="/R.78700af6.jpg";
},{}],"W9Zb":[function(require,module,exports) {
module.exports="/S.2cddbd2f.jpg";
},{}],"Cg0i":[function(require,module,exports) {
module.exports="/T.e14a5dbd.jpg";
},{}],"gyIH":[function(require,module,exports) {
module.exports="/U.a3295ada.jpg";
},{}],"a1BV":[function(require,module,exports) {
module.exports="/V.afa82efb.jpg";
},{}],"K2k5":[function(require,module,exports) {
module.exports="/W.af1e7233.jpg";
},{}],"a7SC":[function(require,module,exports) {
module.exports="/X.53dfa3af.jpg";
},{}],"UyQj":[function(require,module,exports) {
module.exports="/Y.bbb556dd.jpg";
},{}],"DoPh":[function(require,module,exports) {
module.exports="/Z.d917d676.jpg";
},{}],"dsQc":[function(require,module,exports) {
module.exports="/1st-name-letter.538397a0.jpeg";
},{}],"Yfhv":[function(require,module,exports) {
module.exports="/2nd-name-letter.27684f3f.jpeg";
},{}],"wKVE":[function(require,module,exports) {
module.exports="/3rd-name-letter.a233bc9b.jpg";
},{}],"AcMw":[function(require,module,exports) {
module.exports="/4th-name-letter.5ea5fec8.jpg";
},{}],"m26x":[function(require,module,exports) {
module.exports="/5th-name-letter.e7223922.jpg";
},{}],"F5Ew":[function(require,module,exports) {
module.exports="/6th-name-letter.0f6108df.jpg";
},{}],"cXcm":[function(require,module,exports) {
module.exports="/7th-name-letter.c61f75f5.jpg";
},{}],"PyKL":[function(require,module,exports) {
module.exports="/8th-name-letter.127bd4af.jpg";
},{}],"ShSP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sidebartoggle=c,exports.ListItemsSidebar=o;var e=document.querySelectorAll(".btn-js"),s=document.querySelector(".sidebar-subpage"),t=document.querySelectorAll(".btn-sidebar-subpage"),r=document.querySelector(".prices-center");function c(){e.forEach(function(e){e.addEventListener("click",function(e){e.currentTarget.classList.contains("fa-bars")?s.classList.toggle("show-sidebar"):e.currentTarget.classList.contains("fa-times")&&s.classList.remove("show-sidebar")})})}function o(){t.forEach(function(e){e.addEventListener("click",function(e){e.target&&s.classList.remove("show-sidebar"),e.target.classList.contains("prices-js")&&(s.classList.remove("show-sidebar"),console.log("hi"),r.classList.toggle("price-center-toggled"))})})}c(),o();
},{}],"SwuX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DisplayLetterPrices=s;var t=document.querySelector(".prices-letters"),e=["35.00","37.50","40.00","45.00","50.00","5.00"],a='<ul class="prices-social-icons-zodiac">\n<li><i class="fas hand-pointing-right fa-hand-point-right"></i></li>\n<li>\n  <a href="https://wa.me/+5978979639">\n      <i class="fab fa-whatsapp price-icons-zodiac"></i>\n  </a>\n  <a href="https://instagram.com/wiraysha_workshop?igshid=4byv5ud4kl4f">\n      <i class="fab fa-instagram price-icons-zodiac"></i>\n  </a>\n  </li>\n</ul>',n=["letter met glitter:<br><span>Srd ".concat(e[0],"</span>"),"letter met bloemen:<br><span>Srd ".concat(e[1],"</span>"),"letter met schelpen:<br><span>Srd ".concat(e[2],"</span>"),"letter met steentjes:<br><span>Srd ".concat(e[3],"</span>"),"letter met zilvere of goudkleurige foil:<br><span>Srd ".concat(e[4],"</span>"),"per extra accessory: <span>srd ".concat(e[5],"</span><br>").concat(a)],r=[{text:n[0]},{text:n[1]},{text:n[2]},{text:n[3]},{text:n[4]},{text:n[5]}];function s(){var e=r.map(function(t){return'<li class="price-letters">'.concat(t.text,"</li>")}).join("");t.innerHTML=e}s();
},{}],"iYdM":[function(require,module,exports) {
module.exports="/A.4af95d6a.jpg";
},{}],"f5yo":[function(require,module,exports) {
module.exports="/B.45be3f97.jpeg";
},{}],"aifu":[function(require,module,exports) {
module.exports="/C.61136131.jpeg";
},{}],"ZWm9":[function(require,module,exports) {
module.exports="/D.085b57f3.jpeg";
},{}],"Wzj4":[function(require,module,exports) {
"use strict";var e=a(require("../../../img/letters/A.jpg")),r=a(require("../../../img/letters/B.jpeg")),i=a(require("../../../img/letters/C.jpeg")),t=a(require("../../../img/letters/D.jpeg"));function a(e){return e&&e.__esModule?e:{default:e}}var s=["fade-down-right","fade-down-left","fade-right","fade-left"],n=document.querySelector(".letters-A-D"),c=[e.default,r.default,i.default,t.default],l=["50.00"],f=["https://instagram.com/wiraysha_workshop?igshid=4byv5ud4kl4f"],d=[{img:c[0],price:l[0],href:f[0],class:s[0]},{img:c[1],price:l[0],href:f[0],class:s[1]},{img:c[2],price:l[0],href:f[0],class:s[2]},{img:c[3],price:l[0],href:f[0],class:s[3]}];function o(){var e=d.map(function(e){return'<li class="static-letters" data-aos='.concat(e.class,'>\n    <div class="img-container-letter">\n      <img src=').concat(e.img,' />\n    </div>\n    <div class="price-info">\n      <p style="border: none" class="price-letters header-price">\n        <span>').concat(e.price,'</span>\n      </p>\n      <a\n        href="').concat(e.href,'"\n        ><i class="fab fa-instagram"></i\n      ></a>\n    </div>\n  </li>')}).join("");n.innerHTML=e}o();
},{"../../../img/letters/A.jpg":"iYdM","../../../img/letters/B.jpeg":"f5yo","../../../img/letters/C.jpeg":"aifu","../../../img/letters/D.jpeg":"ZWm9"}],"AF1k":[function(require,module,exports) {
"use strict";var e=P(require("../../img/letters/E.jpg")),t=P(require("../../img/letters/F.jpg")),r=P(require("../../img/letters/G.jpg")),u=P(require("../../img/letters/H.jpg")),l=P(require("../../img/letters/I.jpg")),i=P(require("../../img/letters/J.jpg")),g=P(require("../../img/letters/K.jpg")),s=P(require("../../img/letters/L.jpg")),a=P(require("../../img/letters/M.jpg")),n=P(require("../../img/letters/N.jpg")),m=P(require("../../img/letters/O.jpg")),d=P(require("../../img/letters/P.jpg")),f=P(require("../../img/letters/Q.jpg")),c=P(require("../../img/letters/R.jpg")),q=P(require("../../img/letters/S.jpg")),o=P(require("../../img/letters/T.jpg")),p=P(require("../../img/letters/U.jpg")),j=P(require("../../img/letters/V.jpg")),b=P(require("../../img/letters/W.jpg")),h=P(require("../../img/letters/X.jpg")),A=P(require("../../img/letters/Y.jpg")),v=P(require("../../img/letters/Z.jpg")),S=P(require("../../img/letters/1st-name-letter.jpeg")),y=P(require("../../img/letters/2nd-name-letter.jpeg")),E=P(require("../../img/letters/3rd-name-letter.jpg")),L=P(require("../../img/letters/4th-name-letter.jpg")),k=P(require("../../img/letters/5th-name-letter.jpg")),D=P(require("../../img/letters/6th-name-letter.jpg")),J=P(require("../../img/letters/7th-name-letter.jpg")),M=P(require("../../img/letters/8th-name-letter.jpg"));function P(e){return e&&e.__esModule?e:{default:e}}require("../globalJs/sidebar-subpage"),require("./letterPrice"),require("./img-A-D");var _=[e.default,t.default,r.default,u.default,l.default,i.default,g.default,s.default,a.default,n.default,m.default,d.default,f.default,c.default,q.default,o.default,p.default,j.default,h.default,A.default,b.default,v.default],F=[S.default,y.default,E.default,L.default,k.default,D.default,J.default,M.default],G=document.querySelector(".fa-angle-left"),H=document.querySelector(".fa-angle-right"),I=document.querySelector(".name-right"),K=document.querySelector(".name-left"),N=document.querySelector(".img-for-names"),O=document.querySelector(".img-for-E-D");function Q(){var e=0;H.addEventListener("click",function(t){return e++,O.setAttribute("src",_[e]),console.log(e),e>_.length-1&&(e=0,O.setAttribute("src",_[e])),e}),G.addEventListener("click",function(t){return--e<0&&(e=_.length-1,O.setAttribute("src",_[e])),O.setAttribute("src",_[e]),console.log(e),e})}function R(){var e=0;N.setAttribute("src",F[e]),I.addEventListener("click",function(t){return e++,N.setAttribute("src",F[e]),console.log(e),e>F.length-1&&(e=0,N.setAttribute("src",F[e])),e}),K.addEventListener("click",function(t){return e--,N.setAttribute("src",F[e]),console.log(e),e<0&&(e=F.length-1,N.setAttribute("src",F[e])),e})}Q(),R();
},{"../../img/letters/E.jpg":"DSTr","../../img/letters/F.jpg":"e5Vj","../../img/letters/G.jpg":"bCHz","../../img/letters/H.jpg":"Gnkj","../../img/letters/I.jpg":"Rlgf","../../img/letters/J.jpg":"XXyy","../../img/letters/K.jpg":"ukO9","../../img/letters/L.jpg":"IU2j","../../img/letters/M.jpg":"PwSL","../../img/letters/N.jpg":"ZZHs","../../img/letters/O.jpg":"FeDK","../../img/letters/P.jpg":"GqmZ","../../img/letters/Q.jpg":"aQGu","../../img/letters/R.jpg":"i6Sz","../../img/letters/S.jpg":"W9Zb","../../img/letters/T.jpg":"Cg0i","../../img/letters/U.jpg":"gyIH","../../img/letters/V.jpg":"a1BV","../../img/letters/W.jpg":"K2k5","../../img/letters/X.jpg":"a7SC","../../img/letters/Y.jpg":"UyQj","../../img/letters/Z.jpg":"DoPh","../../img/letters/1st-name-letter.jpeg":"dsQc","../../img/letters/2nd-name-letter.jpeg":"Yfhv","../../img/letters/3rd-name-letter.jpg":"wKVE","../../img/letters/4th-name-letter.jpg":"AcMw","../../img/letters/5th-name-letter.jpg":"m26x","../../img/letters/6th-name-letter.jpg":"F5Ew","../../img/letters/7th-name-letter.jpg":"cXcm","../../img/letters/8th-name-letter.jpg":"PyKL","../globalJs/sidebar-subpage":"ShSP","./letterPrice":"SwuX","./img-A-D":"Wzj4"}]},{},["AF1k"], null)
//# sourceMappingURL=/letters.8357662a.js.map