(self.AMP=self.AMP||[]).push({n:"amp-autocomplete",v:"1910071803120",f:(function(AMP,_){
var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ba={a:!0},p={};try{p.__proto__=ba;n=p.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=m;function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function da(a){var b=ea,c;for(c in b)if(b[c]===a)return!0;return!1};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var u=self.__AMP_LOG;function v(){if(!u.user)throw Error("failed to call initLogConstructor");return u.user}function w(){if(u.dev)return u.dev;throw Error("failed to call initLogConstructor");}function x(a,b,c,d,f){return v().assert(a,b,c,d,f,void 0,void 0,void 0,void 0,void 0,void 0)};var y=Object.prototype.hasOwnProperty;function fa(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}function z(a,b){if(y.call(a,b))return a[b]};function A(a,b){var c;"number"!==typeof c&&(c=0);return c+b.length>a.length?!1:-1!==a.indexOf(b,c)};function B(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function C(){var a=100;this.T=a;this.I=this.L=0;this.D=Object.create(null)}C.prototype.has=function(a){return!!this.D[a]};C.prototype.get=function(a){var b=this.D[a];if(b)return b.access=++this.I,b.payload};C.prototype.put=function(a,b){this.has(a)||this.L++;this.D[a]={payload:b,access:this.I};if(!(this.L<=this.T)){w().warn("lru-cache","Trimming LRU cache");a=this.D;var c=this.I+1,d;for(d in a){var f=a[d].access;if(f<c){c=f;var e=d}}void 0!==e&&(delete a[e],this.L--)}};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});var D,E;
function ha(a,b){var c=void 0===c?"source":c;x(null!=a,"%s %s must be available",b,c);var d=a;a=d;if("string"==typeof a){D||(D=self.document.createElement("a"),E=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new C));var f=E,e=D;if(f&&f.has(a))a=f.get(a);else{e.href=a;e.protocol||(e.href=e.href);var g={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:null};"/"!==g.pathname[0]&&(g.pathname="/"+g.pathname);
if("http:"==g.protocol&&80==g.port||"https:"==g.protocol&&443==g.port)g.port="",g.host=g.hostname;g.origin=e.origin&&"null"!=e.origin?e.origin:"data:"!=g.protocol&&g.host?g.protocol+"//"+g.host:g.href;f&&f.put(a,g);a=g}}(f="https:"==a.protocol||"localhost"==a.hostname||"127.0.0.1"==a.hostname)||(a=a.hostname,f=a.length-10,f=0<=f&&a.indexOf(".localhost",f)==f);x(f||/^(\/\/)/.test(d),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
b,c,d)};function ia(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(f){w().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function F(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),f=c!=d;var e=d;if(e.__AMP__EXPERIMENT_TOGGLES)var g=e.__AMP__EXPERIMENT_TOGGLES;else{e.__AMP__EXPERIMENT_TOGGLES=Object.create(null);g=e.__AMP__EXPERIMENT_TOGGLES;if(e.AMP_CONFIG)for(var k in e.AMP_CONFIG){var h=e.AMP_CONFIG[k];"number"===typeof h&&0<=h&&1>=h&&(g[k]=Math.random()<h)}if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-doc-opt-in"])&&0<e.AMP_CONFIG["allow-doc-opt-in"].length&&(k=e.AMP_CONFIG["allow-doc-opt-in"],
h=e.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){h=h.getAttribute("content").split(",");for(var l=0;l<h.length;l++)-1!=k.indexOf(h[l])&&(g[h[l]]=!0)}Object.assign(g,ia(e));if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-url-opt-in"])&&0<e.AMP_CONFIG["allow-url-opt-in"].length){k=e.AMP_CONFIG["allow-url-opt-in"];h=e.location.originalHash||e.location.hash;e=Object.create(null);if(h)for(var q;q=ca.exec(h);)l=t(q[1],q[1]),q=q[2]?t(q[2],q[2]):"",e[l]=q;for(h=0;h<k.length;h++)l=
e["e-"+k[h]],"1"==l&&(g[k[h]]=!0),"0"==l&&(g[k[h]]=!1)}}var ta=!!g["ampdoc-fie"];f&&!ta?b=G(c,b)?H(c,b):null:(a=I(a),a=J(a),b=G(a,b)?H(a,b):null);return b}function K(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return H(a,b)}function ja(a){var b=I(a);b=J(b);return H(b,"viewport")}function I(a){return a.nodeType?K((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function J(a){a=I(a);return a.isSingleDoc()?a.win:a}
function H(a,b){G(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function G(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var L;function M(a){for(;a.firstChild;)a.removeChild(a.firstChild)}
function la(a){/^[\w-]+$/.test("INPUT");if(void 0!==L)var b=L;else{try{var c=a.ownerDocument,d=c.createElement("div"),f=c.createElement("div");d.appendChild(f);b=d.querySelector(":scope div")===f}catch(e){b=!1}b=L=b}b?a=a.querySelectorAll("> INPUT".replace(/^|,/g,"$&:scope ")):(a.classList.add("i-amphtml-scoped"),b="> INPUT".replace(/^|,/g,"$&.i-amphtml-scoped "),b=a.querySelectorAll(b),a.classList.remove("i-amphtml-scoped"),a=b);return a};function N(a,b){if("."==b)return a;b=b.split(".");for(var c=0;c<b.length;c++){var d=b[c];if(d&&a&&void 0!==a[d]&&(null==a||"object"!=typeof a?0:Object.prototype.hasOwnProperty.call(a,d)))a=a[d];else{a=void 0;break}}return a}function ma(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}};function na(a,b,c){var d=2,f;c=void 0===c?".":c;d=void 0===d?0:d;var e=void 0===e?!1:e;ha(b.getAttribute("src"),b);var g=K(a.win,"batched-xhr");return oa(b,d,e).then(function(a){void 0!==f&&(a.fetchOpt.method="POST",a.fetchOpt.headers={"Content-Type":"application/x-www-form-urlencoded"},a.fetchOpt.body={ampViewerAuthToken:f});return g.fetchJson(a.xhrUrl,a.fetchOpt)}).then(function(a){return a.json()}).then(function(a){if(null==a)throw Error("Response is undefined.");return N(a,c||".")})}
function oa(a,b,c){var d=a.getAttribute("src"),f=F(a,"url-replace");return(1<=b?f.expandUrlAsync(d):Promise.resolve(d)).then(function(d){if(1==b){var e=f.collectUnwhitelistedVarsSync(a);if(0<e.length)throw v().createError('URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. Please add data-amp-replace="'+(e.join(" ")+'" to the <')+(a.tagName+"> element. See https://bit.ly/amp-var-subs."));}var k={};a.hasAttribute("credentials")&&(k.credentials=a.getAttribute("credentials"));
c&&(k.cache="reload");return{xhrUrl:d,fetchOpt:k}})};function pa(a,b){return 0<a&&0<b?a%b:(a%b+b)%b};function qa(a,b){var c=b.length,d=a.length;if(d>c)return!1;if(d===c&&a===b)return!0;var f=0,e=0;a:for(;f<d;f++){for(var g=a.charCodeAt(f);e<c;)if(b.charCodeAt(e++)===g)continue a;return!1}return!0};var ea={SUBSTRING:"substring",PREFIX:"prefix",TOKEN_PREFIX:"token-prefix",FUZZY:"fuzzy",CUSTOM:"custom",NONE:"none"};function O(a){var b=AMP.BaseElement.call(this,a)||this;b.m=null;b.h=null;b.j="";b.w="";b.P=1;b.F=null;b.R=!1;b.C=!1;b.J=!1;b.N=!1;b.B=-1;b.o=null;b.U=a.id?a.id:Math.floor(100*Math.random());b.l=null;b.A=!1;b.K=null;b.H=K(b.win,"templates");b.G=null;b.M=null;b.S=null;b.O=!1;return b}var P=AMP.BaseElement;O.prototype=aa(P.prototype);O.prototype.constructor=O;
if(r)r(O,P);else for(var Q in P)if("prototype"!=Q)if(Object.defineProperties){var R=Object.getOwnPropertyDescriptor(P,Q);R&&Object.defineProperty(O,Q,R)}else O[Q]=P[Q];O.V=P.prototype;
O.prototype.buildCallback=function(){this.M=F(this.element,"action");this.S=ja(this.element);var a=this.element.querySelector('script[type="application/json"]');a?this.m=ra(this,a):this.element.hasAttribute("src")||v().warn("amp-autocomplete",'Expected a <script type="application/json"> child or a URL specified in "src".');var b=la(this.element);x(1===b.length,"amp-autocomplete should contain exactly one <input> child");this.h=b[0];if(this.h.hasAttribute("type")){var c=this.h.getAttribute("type");
x("text"===c||"search"===c,'amp-autocomplete requires the "type" attribute to be "text" or "search" if present on <input>')}this.h.setAttribute("dir","auto");this.h.setAttribute("aria-autocomplete","both");this.h.setAttribute("role","combobox");x(this.h.form,"amp-autocomplete should be inside a <form> tag");this.h.form.hasAttribute("autocomplete")&&(this.K=this.h.form.getAttribute("autocomplete"));this.H.hasTemplate(this.element,"template, script[template]")&&(this.G=this.H.findTemplate(this.element,
"template, script[template]"),this.H.renderTemplate(this.G,{}).then(function(a){x(a.hasAttribute("data-value")||a.hasAttribute("data-disabled"),'amp-autocomplete requires a "data-value" or "data-disabled" attribute.')}));this.w=x(this.element.getAttribute("filter"),'amp-autocomplete requires "filter" attribute.');x(da(this.w),"Unexpected filter: "+this.w);this.P=this.element.hasAttribute("min-characters")?parseInt(this.element.getAttribute("min-characters"),10):1;this.F=this.element.hasAttribute("max-entries")?
parseInt(this.element.getAttribute("max-entries"),10):null;this.R=this.element.hasAttribute("submit-on-enter");this.element.hasAttribute("suggest-first")&&("prefix"===this.w?this.C=!0:v().error("amp-autocomplete",'"suggest-first" requires "filter" to be prefix. Unexpected "filter" type: '+this.w));this.C=this.element.hasAttribute("suggest-first")&&"prefix"===this.w;this.N=this.element.hasAttribute("highlight-user-entry");this.element.setAttribute("aria-haspopup","listbox");this.l=sa(this);this.element.appendChild(this.l)};
function ra(a,b){b=ma(b.textContent,function(a){throw a;});var c=a.element.getAttribute("items")||"items",d=N(b,c);return d?v().assertArray(d):(v().warn("amp-autocomplete",'Expected key "%s" in data but found nothing. Rendering empty results.',c),[])}
function S(a){var b=a.getAmpDoc(),c=a.element.getAttribute("items")||"items";return na(b,a.element,c).catch(function(a){if("Response is undefined."===a.message)return v().warn("amp-autocomplete",'Expected key "%s" in data but found nothing. Rendering empty results.',c),[]})}function sa(a){var b=a.element.ownerDocument.createElement("div");b.classList.add("i-amphtml-autocomplete-results");T(a)&&b.classList.add("i-amphtml-autocomplete-results-up");b.setAttribute("role","listbox");B(b,!1);return b}
O.prototype.layoutCallback=function(){var a=this;this.h.setAttribute("autocomplete","off");this.h.addEventListener("touchstart",function(){ua(a)},{passive:!0});this.h.addEventListener("input",function(){va(a)});this.h.addEventListener("keydown",function(b){wa(a,b)});this.h.addEventListener("focus",function(){ua(a).then(function(){xa(a,!0)})});this.h.addEventListener("blur",function(){xa(a,!1)});this.l.addEventListener("mousedown",function(b){ya(a,b)});return U(this,this.m,this.j)};
O.prototype.mutatedAttributesCallback=function(a){var b=this,c=a.src;if(void 0===c||null===c)return Promise.resolve();if("string"===typeof c)return S(this).then(function(a){b.m=a||[];U(b,b.m,b.j)},function(a){za(b,a)});if("object"===typeof c)return this.m=c.items||[],U(this,this.m,this.j);v().error("amp-autocomplete",'Unexpected "src" type: '+c)};
function Aa(a,b,c){c=void 0===c?"":c;var d=a.element.ownerDocument.createElement("div");d.classList.add("i-amphtml-autocomplete-item");d.setAttribute("role","option");d.setAttribute("data-value",b);d.setAttribute("dir","auto");d.textContent=b;var f=d.childNodes[0],e=b.toLocaleLowerCase(),g=c.toLocaleLowerCase();if(a.N&&c&&c.length<=b.length&&A(e,g)){var k=e.indexOf(g),h=a.element.ownerDocument.createElement("span");h.classList.add("autocomplete-partial");h.appendChild(a.element.ownerDocument.createTextNode(b.slice(k,
k+c.length)));var l=f.splitText(k);l.splitText(c.length);d.replaceChild(h,l)}return d}function va(a){var b=0===a.j.length&&1===a.h.value.length;a.j=a.h.value;a.mutateElement(function(){U(a,a.m,a.j);V(a,!0);a.C&&(a.J&&!b||W(a,1),a.J=!1)})}function ya(a,b){a.mutateElement(function(){Ba(a,Ca(a,b.target))})}function U(a,b,c){c=void 0===c?"":c;a.A=!1;M(a.l);if(c.length<a.P||!b||!b.length)return Promise.resolve();var d=Da(a,b,c);return Ea(a,d,a.l,c)}
function Ea(a,b,c,d){var f=Promise.resolve();X(a);a.G?f=a.H.renderTemplateArray(a.G,b).then(function(a){a.map(function(a){a.hasAttribute("data-disabled")&&a.setAttribute("aria-disabled","true");a.classList.add("i-amphtml-autocomplete-item");a.setAttribute("role","option");c.appendChild(a)})}):b.forEach(function(b){x("string"===typeof b,"amp-autocomplete data must provide template for non-string items.");c.appendChild(Aa(a,b,d))});return f}
function Da(a,b,c){if("none"===a.w)return Fa(a,b);c=c.toLocaleLowerCase();var d=a.element.getAttribute("filter-value")||"value";b=b.filter(function(b){"object"===typeof b&&(b=N(b,d));x("string"===typeof b,'amp-autocomplete data property "'+d+'" must map to string type.');b=b.toLocaleLowerCase();switch(a.w){case "substring":return A(b,c);case "prefix":return c.length>b.length?!1:0==b.lastIndexOf(c,0);case "token-prefix":return Ga(b,c);case "fuzzy":return qa(c,b);case "custom":throw Error("Filter not yet supported: "+
a.w);default:throw Error("Unexpected filter: "+a.w);}});return Fa(a,b)}function Ga(a,b){if(""===b)return!0;var c=Ha(a),d=Ha(b),f=Ia(c),e=d[d.length-1];d.splice(d.length-1,1);a=!0;for(b=0;b<d.length;b++){var g=d[b];if(""!==g){if(!y.call(f,g)){a=!1;break}var k=Number(z(f,g));1<k?f[g]=k-1:delete f[g]}}var h=Object.keys(f);return a&&(""===e||h.some(function(a){var b=a,c=e;return c.length>b.length?!1:0==b.lastIndexOf(c,0)}))}
function Ha(a){a=a.replace(/[\.]+/g,"");return a.split(/[`~(){}_|+\-;:'",\[\]\\\/ ]+/g)}function Ia(a){var b=fa();a.forEach(function(a){var c=y.call(b,a)?z(b,a)+1:1;b[a]=c});return b}function Fa(a,b){a.F&&a.F<b.length&&(b=b.slice(0,a.F));return b}function V(a,b){a.h.setAttribute("aria-expanded",b);B(a.l,b)}
function xa(a,b){b?a.h.form.setAttribute("autocomplete","off"):a.K?a.h.form.setAttribute("autocomplete",a.K):a.h.form.removeAttribute("autocomplete");var c=!1;a.measureMutateElement(function(){c=T(a)},function(){b||(a.j=a.h.value,U(a,a.m,a.j),X(a));a.l.classList.toggle("i-amphtml-autocomplete-results-up",c);V(a,b)})}function ua(a){if(a.O||!a.element.hasAttribute("src"))return Promise.resolve();a.O=!0;return S(a).then(function(b){a.m=b;U(a,a.m)},function(b){za(a,b)})}
function T(a){var b=a.S.getHeight()||0;return a.h.getBoundingClientRect().top>b/2}function Y(a){return!a.l.hasAttribute("hidden")&&0<a.l.children.length}function Ca(a,b){return null===b?null:b.classList.contains("i-amphtml-autocomplete-item")?b:Ca(a,b.parentElement)}function Ba(a,b){null===b||b.hasAttribute("data-disabled")||(a.h.value=a.j=b.getAttribute("data-value"),Ja(a,a.j),a.A=!1,M(a.l))}
function Ja(a,b){var c=a.win;b={value:b};var d={detail:b};Object.assign(d,void 0);"function"==typeof c.CustomEvent?c=new c.CustomEvent("amp-autocomplete.select",d):(c=c.document.createEvent("CustomEvent"),c.initCustomEvent("amp-autocomplete.select",!!d.bubbles,!!d.cancelable,b));var f=c;a.M.trigger(a.element,"select",f,100)}
function W(a,b){if(0===b||!Y(a)||a.A)Promise.resolve();else{var c=-1===a.B&&0>b,d=c?b:a.B+b,f=Ka(a);if(0===f.length)Promise.resolve();else{var e=pa(d,f.length),g=f[e];a.h.value=g.getAttribute("data-value");a.C&&a.h.setSelectionRange(a.j.length,a.h.value.length);var k,h;a.measureMutateElement(function(){var c=g,d=c.offsetTop,e=c.offsetHeight;c=a.l;var f=c.scrollTop,ka=c.offsetHeight;k=f>d||f+ka<d+e;h=0<b?d+e-ka:d},function(){k&&(a.l.scrollTop=h);X(a);g.classList.add("i-amphtml-autocomplete-item-active");
g.setAttribute("aria-selected","true");var b=g.getAttribute("id");b||(b=a.U+"_AMP_content_"+e,g.setAttribute("id",b));a.h.setAttribute("aria-activedescendant",b);a.B=e;a.o=g})}}}function Ka(a){return a.l.querySelectorAll(".i-amphtml-autocomplete-item:not([data-disabled])")}function Z(a){a.h.value=a.j;X(a)}
function X(a){a.o&&(a.o.classList.toggle("i-amphtml-autocomplete-item-active",!1),a.o.removeAttribute("aria-selected"),"autocomplete-selected"===a.o.getAttribute("id")&&a.o.removeAttribute("id"),a.h.removeAttribute("aria-activedescendent"),a.o=null,a.B=-1)}
function wa(a,b){switch(b.key){case "ArrowDown":b.preventDefault();if(Y(a)){if(a.B===Ka(a).length-1){Z(a);Promise.resolve();break}W(a,1);break}a.mutateElement(function(){U(a,a.m,a.j);V(a,!0)});break;case "ArrowUp":b.preventDefault();if(0===a.B){Z(a);Promise.resolve();break}W(a,-1);break;case "Enter":Y(a)&&!a.R&&b.preventDefault();if(a.C){var c=a.h.value.length;a.h.setSelectionRange(c,c)}a.mutateElement(function(){a.o?(Ba(a,a.o),X(a)):V(a,!1)});break;case "Escape":a.mutateElement(function(){a.A||(Z(a),
V(a,!1))});break;case "Tab":a.o&&(a.j=a.h.value,Ja(a,a.j));Promise.resolve();break;case "Backspace":a.C&&(a.J=!0);Promise.resolve();break;default:Promise.resolve()}}function za(a,b){if(!a.A)if(a.A=!1,M(a.l),a.getFallback())a.A=!0,a.toggleFallback(!0);else throw b;}O.prototype.isLayoutSupported=function(a){return"container"==a};(function(a){a.registerElement("amp-autocomplete",O,"amp-autocomplete,amp-autocomplete>input{font-family:sans-serif}amp-autocomplete>input{border-radius:4px;box-sizing:border-box}.i-amphtml-autocomplete-results{position:absolute;top:100%;width:calc(100% + 1rem);min-width:calc(2em + 2rem);max-height:40vh;margin-top:.5rem;margin-left:-.5rem;border-radius:4px;overflow-y:auto;overflow-x:hidden;background-color:#fff;box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);z-index:10}.i-amphtml-autocomplete-results-up{top:auto;bottom:100%;margin-bottom:.5rem}.i-amphtml-autocomplete-item{position:relative;padding:.5rem 1rem;cursor:pointer}.i-amphtml-autocomplete-item:first-child{border-radius:4px 4px 0px 0px}.i-amphtml-autocomplete-item:nth-last-child(2){border-radius:0px 0px 4px 4px}.i-amphtml-autocomplete-item-active:not([data-disabled]),.i-amphtml-autocomplete-item:hover:not([data-disabled]){background-color:rgba(0,0,0,0.15)}.i-amphtml-autocomplete-item[data-disabled]{color:rgba(0,0,0,0.33)}\n/*# sourceURL=/extensions/amp-autocomplete/0.1/amp-autocomplete.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-autocomplete-0.1.js.map
