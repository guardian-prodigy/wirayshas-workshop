parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"XWYV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sidebartoggle=i,exports.btnsList=n;var e=document.querySelectorAll(".fas-js"),t=document.querySelector(".sidebar"),s=document.querySelector(".sec-center"),c=window.matchMedia("(max-width: 700px)"),r=document.querySelectorAll(".btn-sidebar"),a=gsap.timeline({defaults:{duration:.3,ease:"circ.in"}});function i(){e.forEach(function(e){e.addEventListener("click",function(e){e.currentTarget.classList.contains("fa-bars")?c.matches?(s.classList.toggle("sec-center-hidden"),a.play()):t.classList.toggle("show-sidebar"):e.currentTarget.classList.contains("fa-times")&&(c.matches?(a.timeScale(3),a.reverse(),s.classList.remove("sec-center-hidden")):t.classList.remove("show-sidebar"))})})}function n(){r.forEach(function(e){e.addEventListener("click",function(t){t.currentTarget==e&&(a.timeScale(3),a.reverse())})})}a.paused(!0),a.to(t,{clipPath:" circle(100% at 0% 0%)",opacity:1}).to(r,{y:0,opacity:1,stagger:.3}),i(),n();
},{}]},{},["XWYV"], null)
//# sourceMappingURL=/sidebar-main.1c74226f.js.map