(window.webpackJsonpBoomer=window.webpackJsonpBoomer||[]).push([["main.npm"],{DTyOy09aeN:function(e,t,r){"use strict";e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=void 0,o=void 0,u=void 0,i=[];return function(){var c=function(e){return"function"==typeof e?e():e}(t),a=(new Date).getTime(),l=!n||a-n>c;n=a;for(var f=arguments.length,s=Array(f),p=0;p<f;p++)s[p]=arguments[p];if(l&&r.leading)return r.accumulate?Promise.resolve(e.call(this,[s])).then(function(e){return e[0]}):Promise.resolve(e.call.apply(e,[this].concat(s)));if(o?clearTimeout(u):o=function(){var e={};return e.promise=new Promise(function(t,r){e.resolve=t,e.reject=r}),e}(),i.push(s),u=setTimeout(function(){var t=o;clearTimeout(u),Promise.resolve(r.accumulate?e.call(this,i):e.apply(this,i[i.length-1])).then(t.resolve,t.reject),i=[],o=null}.bind(this),c),r.accumulate){var d=i.length-1;return o.promise.then(function(e){return e[d]})}return o.promise}}},h0uSycrfTB:function(e,t,r){var n;"undefined"!=typeof self&&self,n=function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s="./src/thunk-reducer.js")}({"./src/thunk-reducer.js":
/*!******************************!*\
  !*** ./src/thunk-reducer.js ***!
  \******************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */"react");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(a){o=!0,u=a}finally{try{n||null==c.return||c.return()}finally{if(o)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},u=o(Object(n.useState)(r(t)),2),i=u[0],c=u[1],a=Object(n.useRef)(i),l=Object(n.useCallback)(function(){return a.current},[a]),f=Object(n.useCallback)(function(e){a.current=e,c(e)},[a,c]),s=Object(n.useCallback)(function(t){return e(l(),t)},[e,l]),p=Object(n.useCallback)(function(e){return"function"==typeof e?e(p,l):f(s(e))},[l,f,s]);return[i,p]}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */function(t,r){t.exports=e}})},e.exports=n(r("LDoPTt+kJa"))}}]);