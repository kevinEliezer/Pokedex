parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"msgL":[function(require,module,exports) {
var t=document.querySelector(".minutos"),e=document.querySelector(".segundos");function n(t){var e=window.getComputedStyle(t,null).getPropertyValue("transform").split("(")[1],n=(e=(e=e.split(")")[0]).split(","))[0],r=e[1];return Math.round(Math.atan2(r,n)*(180/Math.PI))}function r(){var r=n(e)+6,o=n(t)+6;-90==r&&(t.style.transform="rotate(".concat(o,"deg)")),e.style.transform="rotate(".concat(r,"deg)")}setInterval(function(){r()},1e3);
},{}]},{},["msgL"], null)
//# sourceMappingURL=/dsi-p4-pokedex-b3cl0s3r/reto2.44e3f868.js.map