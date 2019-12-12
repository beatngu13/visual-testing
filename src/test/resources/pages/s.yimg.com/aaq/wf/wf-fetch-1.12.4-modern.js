!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-fetch",[],e):"object"==typeof exports?exports["wafer-fetch"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-fetch"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/entry.js":function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l=function(){function t(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=function t(e,r,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,r);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,r,n)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(n)},d=window.wafer,y=d.base,v=d.constants,p=d.utils,m=d.WaferBaseClass,g=v.ATTR_PREFIX,b=p.convertNodeListToArray,_=p.fetchWithCache,w=p.findAncestor,C=p.loadScriptAsync,A=["handleFetchClick","handleMouseenter"],T=["body","cacheKey","target","url"],k=function(t){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.errorClass,a=r.selector,s=r.successClass;n(this,e);var u=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,{errorClass:o,selector:a,successClass:s},{STATE_ATTRS:T})),f=u._util.url||t.getAttribute(g+"url"),h=t.getAttribute(g+"boundary"),d=t.getAttribute(g+"cache"),v=u._util.cacheKey||t.getAttribute(g+"cache-key"),p=t.getAttribute(g+"cache-strategy")||"networkFirst",m=t.getAttribute(g+"cache-ttl"),_=t.getAttribute(g+"delay"),C=t.getAttribute(g+"replace"),k=t.getAttribute(g+"result-selector"),O=t.getAttribute(g+"dependency"),j=O&&document.querySelector(O),S=t.getAttribute(g+"silent"),E=t.getAttribute(g+"target"),L=t.getAttribute(g+"timeout"),I=t.getAttribute(g+"type")||"default",P=(t.getAttribute(g+"trigger-offset")||"").split(" "),x=l(P,2),N=x[0],M=x[1],R=t.getAttribute(g+"trigger")||"viewport",W=u._util.body||t.getAttribute(g+"body"),F=t.getAttribute(g+"retry-count"),D=t.getAttribute(g+"session-retry-count"),q=!1,X=t.getAttribute(g+"set-focus");if(X=null===X||void 0===X?0:Number(X),F=null===F||void 0===F?null:Number(F),D=null===D||void 0===D?null:Number(D),y.isIORetrySupported?D&&(D=Math.min(D,3)):("interval"===R&&(R="delay"),D=null),!F)switch(R){case"interval":case"onLoad":case"stateChange":case"viewport":F=2}if("activate"!==R&&"eachClick"!==R&&"interval"!==R&&"stateChange"!==R&&"tabActivate"!==R||(q=!0),!W){var H=b(t.getElementsByClassName("fetch-body")),K=l(H,1),Y=K[0],B=void 0===Y?null:Y;B&&(W=B.innerHTML)}var V=E&&(h&&w(t,h)||document.body).querySelector(E)||t;return V&&X&&V.setAttribute("tabIndex","-1"),u._util=c({},u._util,{body:W,cache:null===d||void 0===d?1:Number(d),cacheKey:v,cacheStrategy:p,cacheTtl:null===m||void 0===m?60:Number(m),delay:null===_||void 0===_?1e4:Number(_),dependencyElem:j,timeout:null===L||void 0===L?6e3:Number(L),elem:t,errorClass:o,isPostWithState:t.getAttribute(g+"[body]")||t.getAttribute(g+"state-body"),offsetX:Number(M)||0,offsetY:Number(N)||0,replace:null===C||void 0===C?0:Number(C),resultSelector:k,retryCount:F,selector:a,sessionRetryCount:D,setFocus:X,shouldAlwaysTrigger:q,targetElem:V,trigger:R,type:I,url:f,silent:null===S||void 0===S?0:Number(S),successClass:s}),u._state={retries:0,status:status},A.forEach(function(t){u[t]=u[t].bind(u)}),"eachClick"===R||"click"===R?u._util.hasClick=!0:"mouseenter"===R&&(u._util.hasMouseenter=!0,u.addEventListeners()),u}return o(e,t),f(e,[{key:"fetchDependency",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=this._util.dependencyElem;return new Promise(function(n){if(!r)return void n();setTimeout(function(){var i=void 0;if(window.wafer.base._wafers.some(function(t){var e=t._options;return!(!e||"wafer-fetch"!==e.selector)&&(i=t,!0)}),!i)return n();var o=i._state.elementInstances.get(r)||{},a=o.instance;if(!a)return n();var s=a._state.status;if(s)return n();e<5&&0===s&&setTimeout(function(){t.fetchDependency(e++).then(function(){n()})},100*(e+1)),s||i.trigger(r).then(function(){t._util.dependencyElem=null,setTimeout(function(){n()},100)}).catch(function(){t._util.status=void 0})},0)})}},{key:"fetch",value:function(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.disable,i=void 0===n||n,o=r.currentSessionRetryCount,a=void 0===o?0:o,s=this._util,u=s.elem,c=s.shouldAlwaysTrigger,l=s.successClass;if(!c&&u.classList.contains(l))return Promise.resolve(!0);var f=this._util,h=f.errorClass,d=f.replace,v=f.resultSelector,p=f.selector,m=f.sessionRetryCount,g=f.setFocus,b=f.silent,w=f.targetElem,C=f.timeout,A=f.type,T=void 0;if(0!==this._state.status){var k=this._state.retries,O={};return u.classList.add("wafer-fetch-trigger-inprogress"),w.classList.add("wafer-fetch-target-inprogress"),k&&(O.retries=k),this._state.status=0,this.fetchDependency().then(function(){T=t._util.url;var e=t._util,r=e.body;if(e.isPostWithState&&!r)throw new Error("Post without body");var n=t._util,i=n.cache,o=n.cacheKey,a=n.cacheStrategy,s=n.cacheTtl;return _(T,{body:r,cache:i,cacheKey:o,cacheStrategy:a,cacheTtl:s,paramsToNotCache:O,timeout:C})}).then(function(r){var n=A.length?A[0].toUpperCase()+A.slice(1):"",o=t["handle"+n],a=r._fetchMeta||{},s=a.duration,f=a.source;if(i&&(c||u.classList.remove(p.replace(".","")),u.classList.remove(h),u.classList.remove("wafer-fetch-trigger-inprogress"),u.classList.add(l),w.classList.remove("wafer-fetch-target-inprogress")),b)t._state.status=1;else{y.destroy(w,{destroySelf:!c});var m=void 0,_=r.html,C=void 0===_?r.markup:_;if(v){var k=document.createElement("div");k.innerHTML=C;var O=k.querySelector(v);C=O&&O.innerHTML||C}if(d){var j=w.parentNode;w.insertAdjacentHTML("beforebegin",C),j.removeChild(w),m=j}else w.innerHTML=C,m=w;g&&w&&setTimeout(function(){return w.focus()},5),o&&(o.call(t,m),window.wafer.___debugContent&&window.wafer.___debugContent(r.html||r.markup))}return t._state.retries=0,y.emitLog({name:e.constructor.name,elem:u,meta:{duration:s,source:f,url:T}}),y.emitWaferEvent("fetch:success",{elem:u,meta:{duration:s,source:f,url:T}}),!0}).catch(function(r){if(T=t._util.url,++a,m&&a<m)return t._state.status=2,u.setAttribute("data-wf-session-retry-counter",a),setTimeout(function(){t.fetch({disable:i,currentSessionRetryCount:a})},C*(a+1)),!1;if("Post without body"===r.message)return u.classList.remove("wafer-fetch-trigger-inprogress"),w.classList.remove("wafer-fetch-target-inprogress"),t._state.status=void 0,!1;var n=t._util.retryCount;return y.emitError({name:e.constructor.name,elem:u,meta:{url:T},stack:r.stack}),u.classList.remove("wafer-fetch-trigger-inprogress"),u.classList.add(h),w.classList.remove("wafer-fetch-target-inprogress"),t._state.status=2,++t._state.retries===n&&(y.destroy(w),!0)})}return Promise.resolve(!1)}},{key:"handleDefault",value:function(t){this._state.status=1,y.sync(t)}},{key:"handleTdv1",value:function(t){this._util.head=this._util.head||document.getElementsByTagName("head")[0];var e=this._util.head;b(t.querySelectorAll("script")).forEach(function(t){var r=t.getAttribute("type")||"text/javascript",n=t.innerText;n&&"text/javascript"===r&&(e.appendChild(t),C({type:r,text:n},function(r){r||e.removeChild(t)}))}),this._state.status=1,y.sync(t)}},{key:"stateDidUpdate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.stateAttr,r=this._util.trigger;if("target"===e){var n=this._util,i=n.boundary,o=n.elem,a=n.target,s=n.targetElem;this._util.targetElem=a&&(i&&w(o,i)||document.body).querySelector(a)||s}if("stateChange"===r){var u=this._util.retryCount;if(this._state.retries===u)return;return void this.fetch()}}},{key:"destroy",value:function(){var t=this._util,r=t.timeoutInstance,n=t.trigger;r&&(clearTimeout(r),this._util.timeoutInstance=null),"mouseenter"===n&&this.removeEventListeners(),h(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"handleFetchClick",value:function(t){this._util.hasClick&&this.fetch()}},{key:"handleMouseenter",value:function(t){this._util.hasMouseenter&&this.fetch()}},{key:"config",get:function(){var t=this._util;return{delay:t.delay,offsetX:t.offsetX,offsetY:t.offsetY,trigger:t.trigger}}}]),e}(m);k.events={click:[["has-fetch-click","handleFetchClick"]],mouseenter:[["_self","handleMouseenter"]]};var O=k,j=function(){function t(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),S=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),E=this,L=window.wafer.utils,I=L.elementInView,P=L.throttle,x=window.wafer.base,N=window.wafer.controllers.WaferBaseController,M=function(t,e,r){var n=parseInt(e.getAttribute("data-wf-fetch-iteration-count"),10)||0;return e.setAttribute("data-wf-fetch-iteration-count",n+1),clearTimeout(t._util.timeoutInstance),t._util.timeoutInstance=null,R.call(E,t,e,r)},R=function(t,e,r){!t._util.timeoutInstance&&(t._util.timeoutInstance=setTimeout(function(){t.fetch().then(function(){return M.call(E,t,e,r)}).catch(function(){return M.call(E,t,e,r)})},r))},W=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.errorClass,n=void 0===r?"wafer-fetch-error":r,i=t.root,o=void 0===i?document:i,u=t.selector,c=t.successClass,l=void 0===c?"wafer-fetch-complete":c,f=t.validateDelay,h=void 0===f?25:f;a(this,e);var d=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:o,selector:u,props:{errorClass:n,selector:u,successClass:l},WaferClass:O}));return d._validateWithThrottle=P(function(){d.validate()},h,d),d.sync(),d}return u(e,t),S(e,[{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle()}},{key:"handleVisibilityChange",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this._state.elementInstances,r=!0,n=!1,i=void 0;try{for(var o,a=e.entries()[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=o.value,u=j(s,2),c=u[0],l=u[1],f=l.instance,h=f.config,d=h.delay;switch(h.trigger){case"interval":t?R.call(this,f,c,d):(clearTimeout(f._util.timeoutInstance),f._util.timeoutInstance=null)}}}catch(t){n=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(n)throw i}}}},{key:"didSync",value:function(){var t=this._state,e=t.elementInstances,r=t.mounted;0===e.size||r||(this._state.mounted=!0)}},{key:"trigger",value:function(t){var e=this._state.elementInstances,r=e.get(t);return new Promise(function(t){if(r){var e=r.instance;if(!e)return t();e.fetch().then(function(r){if(!r)return t();var n=e.config.trigger;return"viewport"!==n&&"onLoad"!==n||e.destroy(),t()}).catch(function(){return t()})}})}},{key:"willValidate",value:function(){var t=this,e=this._state.elementInstances,r=!0,n=!1,i=void 0;try{for(var o,a=e.entries()[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=o.value,u=j(s,2),c=u[0],l=u[1];!function(e,r){var n=r.instance,i=n.config,o=i.delay,a=i.trigger,s=i.offsetX,u=i.offsetY;switch(a){case"delay":!n._util.timeoutInstance&&(n._util.timeoutInstance=setTimeout(function(){n.fetch().then(function(t){clearTimeout(n._util.timeoutInstance),t&&n.destroy()}).catch(function(){clearTimeout(n._util.timeoutInstance)})},o));break;case"interval":R.call(t,n,e,o);break;case"viewport":I(e,{offsetX:s,offsetY:u},x.viewport)&&n.fetch().then(function(t){t&&n.destroy()});break;case"onLoad":n.fetch().then(function(t){t&&n.destroy()});break;case"click":case"eachClick":e.classList.add("has-fetch-click")}}(c,l)}}catch(t){n=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(n)throw i}}}}]),e}(N),F=W;e.default=new F({selector:"wafer-fetch"})}})});