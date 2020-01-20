/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var bootstrap = __webpack_require__(142);
	var init = __webpack_require__(149);
	var config = __webpack_require__(150);
	var adverts = __webpack_require__(266);
	var analytics = __webpack_require__(210);
	var analyticsHelper = __webpack_require__(171);
	var Utils = __webpack_require__(143);
	var sections = __webpack_require__(152);
	var locale = __webpack_require__(153);
	var currencyProviders = __webpack_require__(280);
	var addLoadEvent = __webpack_require__(264);
	var api = __webpack_require__(281);
	var objects = __webpack_require__(172);
	var classes = __webpack_require__(155);
	var pubsub = __webpack_require__(205);
	var lotame = __webpack_require__(156);
	var Predicate = __webpack_require__(197);
	var Stats = __webpack_require__(263);
	var Survey = __webpack_require__(154);
	var logger = __webpack_require__(144);
	var stickyAdvert = __webpack_require__(284);
	var idcta = __webpack_require__(265);
	
	// grr webpack and comscore.streaming.min module implmentation don't work together
	var comscoreStreaming = __webpack_require__(285);
	
	var log = logger('index');
	log.info('Using Webpack');
	
	Object.assign(window.bbcdotcom, {
	    objects: objects,
	    domLoaded: false,
	    addLoadEvent: addLoadEvent,
	    classes: classes,
	    config: config,
	    currencyProviders: currencyProviders,
	    utils: Utils,
	    adverts: adverts,
	    analytics: analytics,
	    analyticsHelper: analyticsHelper,
	    sections: sections,
	    locale: locale,
	    lotame: lotame,
	    pubsub: pubsub,
	    Predicate: Predicate,
	    stats: Stats,
	    survey: Survey,
	    Logger: logger,
	    stickyAdvert: stickyAdvert,
	    idcta: idcta
	});
	
	bootstrap();
	
	window.bbcdotcom.init = init.bind(window.bbcdotcom);
	
	Object.assign(window.bbcdotcom, api);
	
	module.exports = window.bbcdotcom;
	window.ns_ = comscoreStreaming;
	window.google_ad_request_done = window.bbcdotcom.adverts.adsenseRenderer.google_ad_request_done;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(101);
	__webpack_require__(53);
	__webpack_require__(104);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(129);
	__webpack_require__(131);
	__webpack_require__(137);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(46);
	__webpack_require__(49);
	__webpack_require__(50);
	__webpack_require__(53);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(63);
	__webpack_require__(65);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	module.exports = __webpack_require__(6);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(25) });


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5);
	var core = __webpack_require__(6);
	var hide = __webpack_require__(7);
	var redefine = __webpack_require__(17);
	var ctx = __webpack_require__(23);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.6.11' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(8);
	var createDesc = __webpack_require__(16);
	module.exports = __webpack_require__(12) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(9);
	var IE8_DOM_DEFINE = __webpack_require__(11);
	var toPrimitive = __webpack_require__(15);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(12) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(10);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(12) && !__webpack_require__(13)(function () {
	  return Object.defineProperty(__webpack_require__(14)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(13)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(10);
	var document = __webpack_require__(5).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(10);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5);
	var hide = __webpack_require__(7);
	var has = __webpack_require__(18);
	var SRC = __webpack_require__(19)('src');
	var $toString = __webpack_require__(20);
	var TO_STRING = 'toString';
	var TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(6).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21)('native-function-to-string', Function.toString);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(6);
	var global = __webpack_require__(5);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	
	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(22) ? 'pure' : 'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = false;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(24);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(9);
	var dPs = __webpack_require__(26);
	var enumBugKeys = __webpack_require__(38);
	var IE_PROTO = __webpack_require__(37)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(14)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(39).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(8);
	var anObject = __webpack_require__(9);
	var getKeys = __webpack_require__(27);
	
	module.exports = __webpack_require__(12) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(28);
	var enumBugKeys = __webpack_require__(38);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(18);
	var toIObject = __webpack_require__(29);
	var arrayIndexOf = __webpack_require__(33)(false);
	var IE_PROTO = __webpack_require__(37)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(30);
	var defined = __webpack_require__(32);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(31);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(29);
	var toLength = __webpack_require__(34);
	var toAbsoluteIndex = __webpack_require__(36);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(35);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(35);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(21)('keys');
	var uid = __webpack_require__(19);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(5).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(12), 'Object', { defineProperty: __webpack_require__(8).f });


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(12), 'Object', { defineProperties: __webpack_require__(26) });


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(29);
	var $getOwnPropertyDescriptor = __webpack_require__(43).f;
	
	__webpack_require__(45)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(44);
	var createDesc = __webpack_require__(16);
	var toIObject = __webpack_require__(29);
	var toPrimitive = __webpack_require__(15);
	var has = __webpack_require__(18);
	var IE8_DOM_DEFINE = __webpack_require__(11);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(12) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(4);
	var core = __webpack_require__(6);
	var fails = __webpack_require__(13);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(47);
	var $getPrototypeOf = __webpack_require__(48);
	
	__webpack_require__(45)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(32);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(18);
	var toObject = __webpack_require__(47);
	var IE_PROTO = __webpack_require__(37)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(47);
	var $keys = __webpack_require__(27);
	
	__webpack_require__(45)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(45)('getOwnPropertyNames', function () {
	  return __webpack_require__(51).f;
	});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(29);
	var gOPN = __webpack_require__(52).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(28);
	var hiddenKeys = __webpack_require__(38).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(10);
	var meta = __webpack_require__(54).onFreeze;
	
	__webpack_require__(45)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(19)('meta');
	var isObject = __webpack_require__(10);
	var has = __webpack_require__(18);
	var setDesc = __webpack_require__(8).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(13)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(10);
	var meta = __webpack_require__(54).onFreeze;
	
	__webpack_require__(45)('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(10);
	var meta = __webpack_require__(54).onFreeze;
	
	__webpack_require__(45)('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(10);
	
	__webpack_require__(45)('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(10);
	
	__webpack_require__(45)('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(10);
	
	__webpack_require__(45)('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(4);
	
	$export($export.P, 'Function', { bind: __webpack_require__(61) });


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction = __webpack_require__(24);
	var isObject = __webpack_require__(10);
	var invoke = __webpack_require__(62);
	var arraySlice = [].slice;
	var factories = {};
	
	var construct = function (F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /* , ...args */) {
	  var fn = aFunction(this);
	  var partArgs = arraySlice.call(arguments, 1);
	  var bound = function (/* args... */) {
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(4);
	
	$export($export.S, 'Array', { isArray: __webpack_require__(64) });


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(31);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export = __webpack_require__(4);
	var toIObject = __webpack_require__(29);
	var arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(30) != Object || !__webpack_require__(66)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var fails = __webpack_require__(13);
	
	module.exports = function (method, arg) {
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
	  });
	};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var html = __webpack_require__(39);
	var cof = __webpack_require__(31);
	var toAbsoluteIndex = __webpack_require__(36);
	var toLength = __webpack_require__(34);
	var arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(13)(function () {
	  if (html) arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = toLength(this.length);
	    var klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    var start = toAbsoluteIndex(begin, len);
	    var upTo = toAbsoluteIndex(end, len);
	    var size = toLength(upTo - start);
	    var cloned = new Array(size);
	    var i = 0;
	    for (; i < size; i++) cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var aFunction = __webpack_require__(24);
	var toObject = __webpack_require__(47);
	var fails = __webpack_require__(13);
	var $sort = [].sort;
	var test = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function () {
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function () {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(66)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var $forEach = __webpack_require__(70)(0);
	var STRICT = __webpack_require__(66)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(23);
	var IObject = __webpack_require__(30);
	var toObject = __webpack_require__(47);
	var toLength = __webpack_require__(34);
	var asc = __webpack_require__(71);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this);
	    var self = IObject(O);
	    var f = ctx(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(72);
	
	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(10);
	var isArray = __webpack_require__(64);
	var SPECIES = __webpack_require__(73)('species');
	
	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(21)('wks');
	var uid = __webpack_require__(19);
	var Symbol = __webpack_require__(5).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var $map = __webpack_require__(70)(1);
	
	$export($export.P + $export.F * !__webpack_require__(66)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var $filter = __webpack_require__(70)(2);
	
	$export($export.P + $export.F * !__webpack_require__(66)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var $some = __webpack_require__(70)(3);
	
	$export($export.P + $export.F * !__webpack_require__(66)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var $every = __webpack_require__(70)(4);
	
	$export($export.P + $export.F * !__webpack_require__(66)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var $reduce = __webpack_require__(79);
	
	$export($export.P + $export.F * !__webpack_require__(66)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(24);
	var toObject = __webpack_require__(47);
	var IObject = __webpack_require__(30);
	var toLength = __webpack_require__(34);
	
	module.exports = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  var O = toObject(that);
	  var self = IObject(O);
	  var length = toLength(O.length);
	  var index = isRight ? length - 1 : 0;
	  var i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var $reduce = __webpack_require__(79);
	
	$export($export.P + $export.F * !__webpack_require__(66)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var $indexOf = __webpack_require__(33)(false);
	var $native = [].indexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(66)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var toIObject = __webpack_require__(29);
	var toInteger = __webpack_require__(35);
	var toLength = __webpack_require__(34);
	var $native = [].lastIndexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(66)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    var O = toIObject(this);
	    var length = toLength(O.length);
	    var index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
	    return -1;
	  }
	});


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var toInteger = __webpack_require__(35);
	var aNumberValue = __webpack_require__(84);
	var repeat = __webpack_require__(85);
	var $toFixed = 1.0.toFixed;
	var floor = Math.floor;
	var data = [0, 0, 0, 0, 0, 0];
	var ERROR = 'Number.toFixed: incorrect invocation!';
	var ZERO = '0';
	
	var multiply = function (n, c) {
	  var i = -1;
	  var c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function (n) {
	  var i = 6;
	  var c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function () {
	  var i = 6;
	  var s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function (x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function (x) {
	  var n = 0;
	  var x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(13)(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = aNumberValue(this, ERROR);
	    var f = toInteger(fractionDigits);
	    var s = '';
	    var m = ZERO;
	    var e, z, j, k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    // eslint-disable-next-line no-self-compare
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(31);
	module.exports = function (it, msg) {
	  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(35);
	var defined = __webpack_require__(32);
	
	module.exports = function repeat(count) {
	  var str = String(defined(this));
	  var res = '';
	  var n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	  return res;
	};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var $fails = __webpack_require__(13);
	var aNumberValue = __webpack_require__(84);
	var $toPrecision = 1.0.toPrecision;
	
	$export($export.P + $export.F * ($fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(4);
	
	$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(4);
	var toISOString = __webpack_require__(89);
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
	  toISOString: toISOString
	});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var fails = __webpack_require__(13);
	var getTime = Date.prototype.getTime;
	var $toISOString = Date.prototype.toISOString;
	
	var lz = function (num) {
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	module.exports = (fails(function () {
	  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
	}) || !fails(function () {
	  $toISOString.call(new Date(NaN));
	})) ? function toISOString() {
	  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	  var d = this;
	  var y = d.getUTCFullYear();
	  var m = d.getUTCMilliseconds();
	  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
	  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	} : $toISOString;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4);
	var toObject = __webpack_require__(47);
	var toPrimitive = __webpack_require__(15);
	
	$export($export.P + $export.F * __webpack_require__(13)(function () {
	  return new Date(NaN).toJSON() !== null
	    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
	}), 'Date', {
	  // eslint-disable-next-line no-unused-vars
	  toJSON: function toJSON(key) {
	    var O = toObject(this);
	    var pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	var $parseInt = __webpack_require__(92);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(5).parseInt;
	var $trim = __webpack_require__(93).trim;
	var ws = __webpack_require__(94);
	var hex = /^[-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	var defined = __webpack_require__(32);
	var fails = __webpack_require__(13);
	var spaces = __webpack_require__(94);
	var space = '[' + spaces + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');
	
	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = fails(function () {
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	var $parseFloat = __webpack_require__(96);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(5).parseFloat;
	var $trim = __webpack_require__(93).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(94) + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim(String(str), 3);
	  var result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(93)('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(99);
	var anObject = __webpack_require__(9);
	var $flags = __webpack_require__(100);
	var DESCRIPTORS = __webpack_require__(12);
	var TO_STRING = 'toString';
	var $toString = /./[TO_STRING];
	
	var define = function (fn) {
	  __webpack_require__(17)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if (__webpack_require__(13)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
	  define(function toString() {
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if (__webpack_require__(12) && /./g.flags != 'g') __webpack_require__(8).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(100)
	});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(9);
	module.exports = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(4);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(102) });


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var DESCRIPTORS = __webpack_require__(12);
	var getKeys = __webpack_require__(27);
	var gOPS = __webpack_require__(103);
	var pIE = __webpack_require__(44);
	var toObject = __webpack_require__(47);
	var IObject = __webpack_require__(30);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(13)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export = __webpack_require__(4);
	var toLength = __webpack_require__(34);
	var context = __webpack_require__(105);
	var ENDS_WITH = 'endsWith';
	var $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(107)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = context(this, searchString, ENDS_WITH);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = toLength(that.length);
	    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
	    var search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(106);
	var defined = __webpack_require__(32);
	
	module.exports = function (that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(10);
	var cof = __webpack_require__(31);
	var MATCH = __webpack_require__(73)('match');
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(73)('match');
	module.exports = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) { /* empty */ }
	  } return true;
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export = __webpack_require__(4);
	var context = __webpack_require__(105);
	var INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(107)(INCLUDES), 'String', {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(110);
	var validate = __webpack_require__(124);
	var MAP = 'Map';
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(125)(MAP, function (get) {
	  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(validate(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
	  }
	}, strong, true);


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var dP = __webpack_require__(8).f;
	var create = __webpack_require__(25);
	var redefineAll = __webpack_require__(111);
	var ctx = __webpack_require__(23);
	var anInstance = __webpack_require__(112);
	var forOf = __webpack_require__(113);
	var $iterDefine = __webpack_require__(119);
	var step = __webpack_require__(122);
	var setSpecies = __webpack_require__(123);
	var DESCRIPTORS = __webpack_require__(12);
	var fastKey = __webpack_require__(54).fastKey;
	var validate = __webpack_require__(124);
	var SIZE = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = validate(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        validate(this, NAME);
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(validate(this, NAME), key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function () {
	        return validate(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = validate(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(17);
	module.exports = function (target, src, safe) {
	  for (var key in src) redefine(target, key, src[key], safe);
	  return target;
	};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(23);
	var call = __webpack_require__(114);
	var isArrayIter = __webpack_require__(115);
	var anObject = __webpack_require__(9);
	var toLength = __webpack_require__(34);
	var getIterFn = __webpack_require__(117);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(9);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(116);
	var ITERATOR = __webpack_require__(73)('iterator');
	var ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(118);
	var ITERATOR = __webpack_require__(73)('iterator');
	var Iterators = __webpack_require__(116);
	module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(31);
	var TAG = __webpack_require__(73)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(22);
	var $export = __webpack_require__(4);
	var redefine = __webpack_require__(17);
	var hide = __webpack_require__(7);
	var Iterators = __webpack_require__(116);
	var $iterCreate = __webpack_require__(120);
	var setToStringTag = __webpack_require__(121);
	var getPrototypeOf = __webpack_require__(48);
	var ITERATOR = __webpack_require__(73)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(25);
	var descriptor = __webpack_require__(16);
	var setToStringTag = __webpack_require__(121);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(7)(IteratorPrototype, __webpack_require__(73)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(8).f;
	var has = __webpack_require__(18);
	var TAG = __webpack_require__(73)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 122 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(5);
	var dP = __webpack_require__(8);
	var DESCRIPTORS = __webpack_require__(12);
	var SPECIES = __webpack_require__(73)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(10);
	module.exports = function (it, TYPE) {
	  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(5);
	var $export = __webpack_require__(4);
	var redefine = __webpack_require__(17);
	var redefineAll = __webpack_require__(111);
	var meta = __webpack_require__(54);
	var forOf = __webpack_require__(113);
	var anInstance = __webpack_require__(112);
	var isObject = __webpack_require__(10);
	var fails = __webpack_require__(13);
	var $iterDetect = __webpack_require__(126);
	var setToStringTag = __webpack_require__(121);
	var inheritIfRequired = __webpack_require__(127);
	
	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME];
	  var C = Base;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var proto = C && C.prototype;
	  var O = {};
	  var fixMethod = function (KEY) {
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function (a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a) {
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance = new C();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(73)('iterator');
	var SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(10);
	var setPrototypeOf = __webpack_require__(128).set;
	module.exports = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
	};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(10);
	var anObject = __webpack_require__(9);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(23)(Function.call, __webpack_require__(43).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export = __webpack_require__(4);
	var $includes = __webpack_require__(33)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(130)('includes');


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(73)('unscopables');
	var ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(7)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(132);
	__webpack_require__(136);
	module.exports = __webpack_require__(6).Symbol;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(5);
	var has = __webpack_require__(18);
	var DESCRIPTORS = __webpack_require__(12);
	var $export = __webpack_require__(4);
	var redefine = __webpack_require__(17);
	var META = __webpack_require__(54).KEY;
	var $fails = __webpack_require__(13);
	var shared = __webpack_require__(21);
	var setToStringTag = __webpack_require__(121);
	var uid = __webpack_require__(19);
	var wks = __webpack_require__(73);
	var wksExt = __webpack_require__(133);
	var wksDefine = __webpack_require__(134);
	var enumKeys = __webpack_require__(135);
	var isArray = __webpack_require__(64);
	var anObject = __webpack_require__(9);
	var isObject = __webpack_require__(10);
	var toObject = __webpack_require__(47);
	var toIObject = __webpack_require__(29);
	var toPrimitive = __webpack_require__(15);
	var createDesc = __webpack_require__(16);
	var _create = __webpack_require__(25);
	var gOPNExt = __webpack_require__(51);
	var $GOPD = __webpack_require__(43);
	var $GOPS = __webpack_require__(103);
	var $DP = __webpack_require__(8);
	var $keys = __webpack_require__(27);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(52).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f = $propertyIsEnumerable;
	  $GOPS.f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(22)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });
	
	$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return $GOPS.f(toObject(it));
	  }
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(73);


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5);
	var core = __webpack_require__(6);
	var LIBRARY = __webpack_require__(22);
	var wksExt = __webpack_require__(133);
	var defineProperty = __webpack_require__(8).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(27);
	var gOPS = __webpack_require__(103);
	var pIE = __webpack_require__(44);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(118);
	var test = {};
	test[__webpack_require__(73)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(17)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(138);
	__webpack_require__(140);
	module.exports = __webpack_require__(133).f('iterator');


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(139)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(119)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(35);
	var defined = __webpack_require__(32);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var $iterators = __webpack_require__(141);
	var getKeys = __webpack_require__(27);
	var redefine = __webpack_require__(17);
	var global = __webpack_require__(5);
	var hide = __webpack_require__(7);
	var Iterators = __webpack_require__(116);
	var wks = __webpack_require__(73);
	var ITERATOR = wks('iterator');
	var TO_STRING_TAG = wks('toStringTag');
	var ArrayValues = Iterators.Array;
	
	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};
	
	for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME = collections[i];
	  var explicit = DOMIterables[NAME];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
	  }
	}


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(130);
	var step = __webpack_require__(122);
	var Iterators = __webpack_require__(116);
	var toIObject = __webpack_require__(29);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(119)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(143);
	
	var Bootstrap = function Bootstrap() {
	    Utils.addHtmlTagClass('bbcdotcom');
	};
	
	module.exports = Bootstrap;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/*jslint bitwise: true */
	/*
	 * ALWAYS REQUIRED INTERNATIONAL for analytics.js, irrespective of ads being enabled
	 */
	
	var _log = __webpack_require__(144)('utils');
	
	var trackCookie = []; // hack to make unit testing easier as no easy way to DI in other objects yet :(
	
	
	/**
	 * Standard methods to check the classes on an element
	 * @param DOMElement element
	 * @param string className
	 * @return bool;
	 */
	var hasAtrribute = function hasAtrribute(element, attributeKey, attributeValue) {
	    if (typeof element !== 'undefined' && element !== '' && element !== null) {
	        var regex = new RegExp('(\\s|^)' + attributeValue + '(\\s|$)');
	        return element[attributeKey].match(regex);
	    }
	};
	
	var hasTagId = function hasTagId(tagName, idName) {
	    var attributeMatch,
	        tag = document.getElementsByTagName(tagName)[0];
	    if (typeof tag !== 'undefined' && tag !== '' && tag !== null && typeof idName === 'string') {
	        attributeMatch = hasAtrribute(tag, 'id', idName);
	        return attributeMatch !== null;
	    }
	    return false;
	};
	
	/**
	 * Given a DOM node, search up the tree and find the nearest ancestor
	 * node which passes the matcher function. The matcher function should
	 * return zero, a negative value or a positive value.
	 *  - zero: match failed, keep searching
	 *  - negative: match failed, stop searching
	 *  - positive: match succeeded, return current node
	 *
	 * @param node The starting DOM node
	 * @param matcher The matcher function, see above for return values
	 * @param [includeSelf] Whether or not to include current node in search
	 * @param [limit] The search limit (defaults to 10)
	 * @returns {boolean}
	 */
	var searchTreeUpwards = function searchTreeUpwards(node, matcher, includeSelf, limit) {
	    var current,
	        result = false,
	        iteration = 0;
	
	    if (!node) {
	        return false;
	    }
	
	    limit = typeof limit === 'number' ? limit : 10;
	    includeSelf = includeSelf === true ? true : false;
	    current = includeSelf ? node : node.parentNode;
	
	    while (current && iteration < limit) {
	        var matcherResult = matcher(current);
	        if (matcherResult > 0) {
	            result = current;
	            break;
	        } else if (matcherResult < 0) {
	            break;
	        }
	        current = current.parentNode;
	        iteration++;
	    }
	    return result;
	};
	
	var getCookieDomain = function getCookieDomain() {
	    return window.location.hostname.indexOf('.bbc.com') !== -1 ? 'bbc.com' : window.location.hostname.indexOf('.bbc.co.uk') !== -1 ? 'bbc.co.uk' : window.location.hostname;
	};
	
	module.exports = {
	    debounce: function debounce(func, wait, immediate) {
	        var timeout;
	        return function () {
	            var context = this,
	                args = arguments;
	            var later = function later() {
	                timeout = null;
	                if (!immediate) {
	                    func.apply(context, args);
	                }
	            };
	            var callNow = immediate && !timeout;
	            clearTimeout(timeout);
	            timeout = setTimeout(later, wait);
	            if (callNow) {
	                func.apply(context, args);
	            }
	        };
	    },
	    appendLinkToHead: function appendLinkToHead(url) {
	        var head = document.head || document.getElementsByTagName('head')[0],
	            link = document.createElement('link');
	
	        link.type = 'text/css';
	        link.rel = 'stylesheet';
	        link.href = url;
	
	        head.appendChild(link);
	    },
	    capitalize: function capitalize(string) {
	        if (typeof string !== 'undefined') {
	            var i,
	                n,
	                pieces = string.split(" ");
	            for (i = 0; i < pieces.length; i++) {
	                if (pieces[i].length > 2) {
	                    n = pieces[i].charAt(0).toUpperCase();
	                    pieces[i] = n + pieces[i].substr(1);
	                }
	            }
	            return pieces.join(" ");
	        }
	    },
	    /**
	     * @deprecated Please use require('logger')
	     */
	    log: function log() {
	        _log.warn('utils.log is deprecated', arguments);
	    },
	    addTagClass: function addTagClass(tag, className) {
	        if (typeof tag !== 'undefined' && tag !== '' && tag !== null && typeof className === 'string' && className !== '') {
	            if (!hasAtrribute(tag, 'className', className)) {
	                tag.className = tag.className + ' ' + className;
	            }
	            return tag.className;
	        }
	    },
	    removeTagClass: function removeTagClass(tag, className) {
	        var regx;
	        if (typeof tag !== 'undefined' && tag !== '' && tag !== null && typeof className === 'string' && className !== '') {
	            if (hasAtrribute(tag, 'className', className)) {
	                regx = RegExp(className + '\\b');
	                tag.className = tag.className.replace(regx, '').replace('  ', ' ');
	            }
	            return tag.className;
	        }
	    },
	    addBodyTagClass: function addBodyTagClass(className) {
	        var tag = document.getElementsByTagName('body')[0];
	        return this.addTagClass(tag, className);
	    },
	    removeBodyTagClass: function removeBodyTagClass(className) {
	        var tag = document.getElementsByTagName('body')[0];
	        return this.removeTagClass(tag, className);
	    },
	    addHtmlTagClass: function addHtmlTagClass(className) {
	        var tag = document.getElementsByTagName('html')[0];
	        return this.addTagClass(tag, className);
	    },
	    removeHtmlTagClass: function removeHtmlTagClass(className) {
	        var tag = document.getElementsByTagName('html')[0];
	        return this.removeTagClass(tag, className);
	    },
	    hasBodyTagId: function hasBodyTagId(idName) {
	        return hasTagId('body', idName);
	    },
	
	    getUriParamByName: function getUriParamByName(name, sanitizeResult) {
	        sanitizeResult = sanitizeResult !== false;
	
	        if (typeof name === 'undefined') {
	            return '';
	        }
	
	        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	            results = regex.exec(bbcdotcom.config.getWindowLocation().search);
	
	        if (results === null) {
	            return '';
	        }
	
	        return decodeURIComponent(sanitizeResult ? results[1].replace(/[^a-zA-Z0-9\-_]/g, '') : results[1]);
	    },
	    isDebug: function isDebug() {
	        return (/[?|&]ads-debug/.test(window.location.href) || document.cookie.indexOf('ads-debug=') !== -1
	        );
	    },
	    isDebugTrace: function isDebugTrace() {
	        return (/[?|&]ads-debug-trace/.test(window.location.href) || document.cookie.indexOf('ads-debug-trace=') !== -1
	        );
	    },
	    getEnv: function getEnv() {
	        var location = bbcdotcom.config.getWindowLocation();
	        if (/[a-z]+\-test[0-9]+\.bbc.*\.com/.test(location.href)) {
	            return 'test';
	        }
	        var matches = location.href.match(/(sandbox|int|test|stage)(.dev)*.bbc.co*/);
	        return matches === null ? 'live' : matches[1];
	    },
	    isLiveEnv: function isLiveEnv() {
	        return this.getEnv() === 'live';
	    },
	    isTestEnv: function isTestEnv() {
	        return this.getEnv() !== 'live' && this.getEnv() !== 'stage';
	    },
	    stackTrace: function stackTrace() {
	        var err = new Error();
	        window.console.log(err.stack);
	    },
	    /**
	     * eg getParentElementByClass(document.getElementById('foo'), 'navigation');
	     * eg getParentElementByClass(document.getElementById('foo'), 'navigation', 10);
	     * eg getParentElementByClass(document.getElementById('foo'), 'navigation', 10, true);
	     *
	     * @param object node Element object
	     * @param string className Class name looking for in parent elements
	     * @param integer depth How far up the DOM tree should we search.  Smaller number is more performant.
	     * @param boolean ignoreBody Whether this utility should crawl up to <body> and <html> or stop below <body>
	     * @return boolean Returns element
	     */
	    getParentElementByClass: function getParentElementByClass(node, className, depth, ignoreBody) {
	        ignoreBody = typeof ignoreBody !== 'undefined' && ignoreBody === true ? true : false;
	
	        var limit = typeof depth === 'undefined' || depth === 0 ? 5 : depth,
	            matcher = function matcher(node) {
	            if (!node || typeof node.className === 'undefined' || typeof node.tagName === 'undefined' || ignoreBody && node.tagName.toLowerCase() === 'body') {
	                return -1;
	            } else if (node.className.indexOf(className) !== -1) {
	                return 1;
	            }
	        };
	
	        return searchTreeUpwards(node, matcher, false, limit);
	    },
	
	    /**
	     * Given an element and a tag name, traverses up the DOM tree looking
	     * for the nearest ancestor element with that tag name
	     *
	     * @param node The starting node
	     * @param tagName The tag name to search for
	     * @param [includeSelf] Include self in search
	     * @param [limit] How far up the tree to search
	     * @returns {}
	     */
	    getClosestElementByTagName: function getClosestElementByTagName(node, tagName, includeSelf, limit) {
	        return searchTreeUpwards(node, function (node) {
	            return node && node.tagName && node.tagName.toLowerCase() === tagName ? 1 : 0;
	        }, includeSelf, limit);
	    },
	
	    /**
	     * @param object node Element object
	     * @param string attributeName Name of the attribute we're looking for in parent elements
	     * @param integer depth How far up the DOM tree should we search.
	     * @return boolean Returns element
	     */
	    getParentElementByAttribute: function getParentElementByAttribute(node, attributeName, depth) {
	        return searchTreeUpwards(node, function (node) {
	            return node && node.getAttribute(attributeName) !== null ? 1 : 0;
	        }, depth);
	    },
	
	    /**
	     * eg parentHasClass(document.getElementById('foo'), 'navigation');
	     * eg parentHasClass(document.getElementById('foo'), 'navigation', 10);
	     * eg parentHasClass(document.getElementById('foo'), 'navigation', 10, true);
	     *
	     * @param object node Element object
	     * @param string className Class name looking for in parent elements
	     * @param integer depth How far up the DOM tree should we search.  Smaller number is more performant.
	     * @param boolean ignoreBody Whether this utility should crawl up to <body> and <html> or stop below <body>
	     * @return boolean Returns true if class was found in the nested parent tags
	     */
	    parentHasClass: function parentHasClass(node, className, depth, ignoreBody) {
	        return this.getParentElementByClass(node, className, depth, ignoreBody) === false ? false : true;
	    },
	
	    /**
	     * Used to work out where a link is within a module so editorial know whether the link was the first link,
	     * second link etc
	     * eg getAnchorPositionWithinElement(document.getElementById('business-module'), '/news/business-12345678');
	     *
	     * @param object parent Element object
	     * @param string href eg /news/business-1234567
	     * @returns number 0-20
	     */
	    getAnchorPositionWithinElement: function getAnchorPositionWithinElement(parent, href) {
	        var i, tags, hrefRegex;
	        if (parent && href) {
	            tags = parent.getElementsByTagName('a');
	            hrefRegex = new RegExp(href + '$');
	            for (i = 0; i < tags.length; i++) {
	                if (typeof tags[i].href !== 'undefined' && href !== '' && tags[i].href.match(hrefRegex) !== null) {
	                    return i + 1;
	                }
	            }
	        }
	        return 0;
	    },
	
	    /**
	     * Used to work out where a link is within a module so editorial know whether the link was the first link,
	     * second link etc
	     * eg getAnchorPositionWithinElement(document.getElementById('business-module'), '/news/business-12345678');
	     *
	     * @param object parent Element object
	     * @param string href eg /news/business-1234567
	     * @returns number 0-20
	     */
	    getClosestElementWithAttribute: function getClosestElementWithAttribute(parent, attribute) {
	        var i, tags, hrefRegex;
	        if (parent && href) {
	            tags = parent.getElementsByTagName('a');
	            hrefRegex = new RegExp(href + '$');
	            for (i = 0; i < tags.length; i++) {
	                if (typeof tags[i].href !== 'undefined' && href !== '' && tags[i].href.match(hrefRegex) !== null) {
	                    return i + 1;
	                }
	            }
	        }
	        return 0;
	    },
	
	    /**
	     * eg addEvent(document.getElementById('foo'), 'click', function(){});
	     * source: http://ejohn.org/projects/flexible-javascript-events
	     */
	    addEvent: function addEvent(obj, type, fn) {
	        if (obj.attachEvent) {
	            obj['e' + type + fn] = fn;
	            obj[type + fn] = function () {
	                obj['e' + type + fn](window.event);
	            };
	            obj.attachEvent('on' + type, obj[type + fn]);
	        } else {
	            obj.addEventListener(type, fn, false);
	        }
	    },
	    /**
	     * eg removeEvent(document.getElementById('foo'), 'click', function(){});
	     * source: http://ejohn.org/projects/flexible-javascript-events
	     */
	    removeEvent: function removeEvent(obj, type, fn) {
	        if (typeof obj === 'undefined' || obj === null) {
	            return;
	        }
	        if (obj.detachEvent) {
	            obj.detachEvent('on' + type, obj[type + fn]);
	            obj[type + fn] = null;
	        } else {
	            obj.removeEventListener(type, fn, false);
	        }
	    },
	    /**
	     * Trigger event listener
	     * eg triggerEvent(document.getElementById('foo'), 'click');
	     * source: https://developer.mozilla.org/samples/domref/dispatchEvent.html
	     */
	    triggerEvent: function triggerEvent(obj, type, preventDefault) {
	        preventDefault = preventDefault === undefined ? true : preventDefault;
	        var event = document.createEvent("MouseEvents");
	        event.initMouseEvent(type, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	        if (preventDefault) {
	            event.preventDefault();
	        }
	        obj.dispatchEvent(event);
	        return event;
	    },
	
	    cancelEvent: function cancelEvent(event) {
	        if (!event) {
	            return false;
	        }
	
	        if (typeof event.preventDefault === 'function') {
	            event.preventDefault();
	        } else {
	            event.returnValue = false;
	        }
	    },
	
	    isEventDefaultPrevented: function isEventDefaultPrevented(event) {
	        if (!event) {
	            return false;
	        }
	
	        return event.defaultPrevented || event.returnValue === false;
	    },
	
	    trim: function trim(str) {
	        if (typeof str === 'string') {
	            return str.replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, '');
	        }
	        return str;
	    },
	
	    navigateTo: function navigateTo(uri) {
	        window.location.href = uri;
	    },
	
	    /**
	     * Get <meta> tag name value, for example:
	     * Html:   <meta name="DCTERMS.created" content="2015-01-06T12:00:00" />
	     * Method: bbcdotcom.utils.getMetaNameContent('DCTERMS.created');
	     */
	    getMetaNameContent: function getMetaNameContent(name) {
	        var metas = document.getElementsByTagName('meta'),
	            i;
	        for (i = 0; i < metas.length; i++) {
	            if (metas[i].getAttribute("name") === name) {
	                return metas[i].getAttribute("content");
	            }
	        }
	        return '';
	    },
	    /**
	     * Get <meta> tag property value, for example:
	     * Html:   <meta property="wwhp-edition" content="international" />
	     * Method: bbcdotcom.utils.getMetaPropertyContent('wwhp-edition');
	     */
	    getMetaPropertyContent: function getMetaPropertyContent(property) {
	        var metas = document.getElementsByTagName('meta'),
	            i;
	        for (i = 0; i < metas.length; i++) {
	            if (metas[i].getAttribute("property") === property) {
	                return metas[i].getAttribute("content");
	            }
	        }
	        return '';
	    },
	    setCookie: function setCookie(name, value, seconds) {
	        var date;
	        if (typeof name !== 'undefined' && name !== '' && typeof value !== 'undefined' && value !== '') {
	            if (typeof seconds === 'undefined' || seconds === null || seconds === 0) {
	                // Default to 365 days (60 * 60 * 24 = 1 day)
	                seconds = 60 * 60 * 24 * 365;
	            }
	            date = new Date();
	            date.setTime(date.getTime() + seconds * 1000); // eg 120s * 1000 = 120,000ms
	            document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; expires=' + date.toGMTString() + '; domain=.' + getCookieDomain() + '; path=/';
	            trackCookie.push(['set', name, value, seconds]);
	        }
	    },
	    getCookie: function getCookie(name) {
	        var cookie = '; ' + document.cookie,
	            parts = cookie.split('; ' + encodeURIComponent(name) + '='),
	            value;
	        if (parts.length === 2) {
	            value = decodeURIComponent(parts.pop().split(';').shift());
	        }
	        trackCookie.push(['get', name, value]);
	        return value;
	    },
	    deleteCookie: function deleteCookie(name) {
	        document.cookie = encodeURIComponent(name) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.' + getCookieDomain() + '; path=/';
	        trackCookie.push(['delete', name]);
	    },
	    generateUuidV4: function generateUuidV4() {
	        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	            var r = Math.floor(Math.random() * 16),
	                v = c === 'x' ? r : r & 0x3 | 0x8;
	            return v.toString(16);
	        });
	    },
	    /**
	     * @param string Uri eg http://www.test.bbc.com/news/world?hello=world#help
	     */
	    createWindowLocation: function createWindowLocation(uri) {
	        var windowLocation,
	            withoutProtocol,
	            withoutQueryParam = uri;
	        if (typeof uri === 'undefined' || uri === null || uri === '') {
	            windowLocation = {
	                href: '',
	                protocol: '',
	                host: '',
	                hostname: '',
	                port: '',
	                pathname: '',
	                search: '',
	                hash: ''
	            };
	        } else {
	            if (uri.indexOf('?') !== -1) {
	                withoutQueryParam = uri.substr(0, uri.indexOf('?'));
	            }
	            withoutProtocol = withoutQueryParam.substr(withoutQueryParam.indexOf(':') + 3);
	            windowLocation = {
	                href: uri, // http://www.test.bbc.com/news/world?hello=world#help
	                protocol: uri.substr(0, uri.indexOf(':') + 1), // http:
	                host: withoutProtocol.substr(0, withoutProtocol.indexOf('/')), // www.test.bbc.com:8888
	                hostname: withoutProtocol.substr(0, withoutProtocol.indexOf('/')), // www.test.bbc.com
	                port: '',
	                pathname: withoutProtocol.substr(withoutProtocol.indexOf('/')),
	                search: uri.substr(uri.indexOf('?')),
	                hash: ''
	            };
	        }
	        return windowLocation;
	    },
	    secondsToMilliSeconds: function secondsToMilliSeconds(seconds) {
	        return Math.floor(parseFloat(seconds, 10) * 1000);
	    },
	    /**
	     * For testing only
	     */
	    r: function r() {
	        trackCookie = [];
	    },
	    getTrackCookieValues: function getTrackCookieValues(cookiesArr) {
	        if (typeof cookiesArr === 'undefined') {
	            return trackCookie;
	        }
	        var out = [],
	            t;
	        for (t = 0; t < trackCookie.length; t++) {
	            if (cookiesArr.indexOf(trackCookie[t][1]) !== -1) {
	                out.push(trackCookie[t]);
	            }
	        }
	        return out;
	    },
	
	    isString: function isString(val) {
	        return typeof val === 'string' || val instanceof String;
	    },
	
	    cleanArray: function cleanArray(actual) {
	        var newArray = [];
	        var i;
	        for (i = 0; i < actual.length; i++) {
	            if (actual[i] || actual[i] === 0) {
	                newArray.push(actual[i]);
	            }
	        }
	        return newArray;
	    },
	
	    outerHTML: function outerHTML(node) {
	        if (node === undefined) {
	            return;
	        }
	        // if IE, Chrome take the internal method otherwise build one
	        return node.outerHTML || function (n) {
	            var div = document.createElement('div'),
	                h;
	            div.appendChild(n.cloneNode(true));
	            h = div.innerHTML;
	            div = null;
	            return h;
	        }(node);
	    }
	};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * @module LogFactory
	 *
	 * Use:
	 *
	 * var log = bbcdotcom.Logger('my:namespace');
	 *
	 * log('same as log.log')
	 * log.log('same as log()');
	 * log.info('info')
	 * log.debug('debug', object);
	 * log.warn('warning');
	 * log.error('error', Error);
	 *
	 * Enabling:
	 *
	 * window.bbcdotcom.Logger.enable('*'); // First argument is the namespace to enable
	 *
	 * Disabling:
	 *
	 * window.bbcdotcom.Logger.disable(); // Disables all namespaces
	 */
	
	var debug = __webpack_require__(145);
	
	function LogFactory(namespace) {
	
	    var prefixedNamespace = 'bbcdotcom:' + namespace;
	
	    var logLevels = ['log', 'info', 'warn', 'error', 'debug'];
	
	    var defaultLogger = debug(prefixedNamespace);
	
	    function Logger() {
	        return defaultLogger.apply(undefined, arguments);
	    }
	
	    function createLogLevel(level) {
	        Logger[level] = debug(prefixedNamespace);
	        Logger[level].log = function log() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }
	
	            return _typeof(window.console) === 'object' && window.console[level] && Function.prototype.apply.call(window.console[level], window.console, args);
	        };
	    }
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = logLevels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var logLevel = _step.value;
	
	            createLogLevel(logLevel);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator['return']) {
	                _iterator['return']();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return Logger;
	}
	
	LogFactory.enable = function enable() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	    }
	
	    debug.enable.apply(debug, args);
	    debug('bbcdotcom')('Debugging enabled', args);
	};
	LogFactory.disable = function disable() {
	    debug('bbcdotcom')('Debugging disabled');
	    debug.disable.apply(debug, arguments);
	};
	
	if (/[?|&]ads-debug/.test(window.location.href) || document.cookie.indexOf('ads-debug=') !== -1) {
	    LogFactory.enable('bbcdotcom*');
	} else if (debug.enabled('bbcdotcom*')) {
	    debug('bbcdotcom')('To disable debugging: `bbcdotcom.Logger.disable()`');
	}
	
	module.exports = LogFactory;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(147);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
	    return true;
	  }
	
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs(args) {
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return;
	
	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit')
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	
	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = process.env.DEBUG;
	  }
	
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(146)))

/***/ }),
/* 146 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(148);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor(namespace) {
	  var hash = 0, i;
	
	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }
	
	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function createDebug(namespace) {
	
	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;
	
	    var self = debug;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);
	
	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	
	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);
	
	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }
	
	  return debug;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  exports.names = [];
	  exports.skips = [];
	
	  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ }),
/* 148 */
/***/ (function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var config = __webpack_require__(150);
	var utils = __webpack_require__(143);
	var sections = __webpack_require__(152);
	var locale = __webpack_require__(153);
	var survey = __webpack_require__(154);
	var classes = __webpack_require__(155);
	var lotame = __webpack_require__(156);
	
	var Predicate = __webpack_require__(197);
	
	var analytics = __webpack_require__(210);
	
	var layout = __webpack_require__(199);
	var breakpoints = __webpack_require__(204);
	var adRegister = __webpack_require__(200);
	var adUnit = __webpack_require__(206);
	var adFilter = __webpack_require__(209);
	var keyValues = __webpack_require__(176);
	var adSuites = __webpack_require__(262);
	var dfppRequest = __webpack_require__(198);
	var pubsub = __webpack_require__(205);
	var Stats = __webpack_require__(263);
	var AnalyticsHelper = __webpack_require__(171);
	
	var addLoadEvent = __webpack_require__(264);
	var log = __webpack_require__(144)('init');
	
	var idcta = __webpack_require__(265);
	
	/**
	 * Initialise bbcdotcom. Called in the scope of the main bbcdotcom object
	 *
	 * @param params
	 */
	module.exports = function init(params) {
	    'use strict';
	
	    try {
	        var x,
	            i,
	            len,
	            windowLocation = config.getWindowLocation(),
	            windowDocument = config.getWindowDocument(),
	            adsToDisplay;
	
	        log.info('bbcdotcom.init() with params: ', params);
	
	        utils.addHtmlTagClass(classes.classNames('init', 'responsive'));
	        Stats.init();
	
	        if (config.isActive('ads') && (!config.isSportApp() || config.isSportApp() && config.isAdsportappEnabled())) {
	
	            if (bbcdotcom.initCalled) {
	                if (params.adsToDisplay) {
	                    adsToDisplay = adFilter.build(params.adsToDisplay);
	                    if (adsToDisplay) {
	                        window.bbcdotcom.adsToDisplay = adsToDisplay;
	                        for (i = 0, len = adsToDisplay.length; i < len; i++) {
	                            adRegister.registerAd(adsToDisplay[i]);
	                        }
	                    }
	                }
	                return;
	            }
	            config.init(params);
	
	            utils.addHtmlTagClass(classes.fromConfig(config, window));
	
	            /**
	             * Load stylesheets
	             */
	            if (config.isAsync()) {
	                if (/(sandbox|int)(.dev)*.bbc.co*/.test(window.location.href) || /[?|&]ads-debug/.test(window.location.href) || document.cookie.indexOf('ads-debug=') !== -1) {
	                    utils.appendLinkToHead(config.getAssetPrefix() + 'style/dist/bbcdotcom-async.dev.css');
	                } else {
	                    utils.appendLinkToHead(config.getAssetPrefix() + 'style/dist/bbcdotcom-async.css');
	                }
	            }
	            if (!config.isAsync() && config.isIE7()) {
	                if (/(sandbox|int)(.dev)*.bbc.co*/.test(window.location.href) || /[?|&]ads-debug/.test(window.location.href) || document.cookie.indexOf('ads-debug=') !== -1) {
	                    utils.appendLinkToHead(config.getAssetPrefix() + 'style/dist/bbcdotcom.dev.css');
	                } else {
	                    utils.appendLinkToHead(config.getAssetPrefix() + 'style/dist/bbcdotcom.css');
	                }
	                layout.disableReset();
	            }
	
	            /**
	             * Disable resize in older IE browsers
	             */
	            if (config.isIE8()) {
	                layout.disableReset();
	            }
	
	            /**
	             * Sections
	             */
	            sections.build(true);
	            if (sections.getSection(0) === 'sport') {
	                breakpoints.setGroupStart(4, 900);
	            }
	
	            if (params.layout === 'group5') {
	                var copy = Object.assign({}, breakpoints.getGroup(4));
	                breakpoints.setGroup(5, copy);
	                breakpoints.setGroupFinish(4, 1279);
	            }
	
	            /**
	             * Layout
	             */
	            layout.init(breakpoints.getGroups());
	            if (params.clientWidth) {
	                // A hack to allow us to specify the clientWidth in unit testing
	                layout.setClientWidth(params.clientWidth);
	            }
	
	            /**
	             * Breakpoint overrides
	             */
	            if (params.customBreakpoints) {
	                breakpoints.setGroups(params.customBreakpoints);
	            }
	
	            lotame.init();
	
	            if (params.adsToDisplay) {
	                adsToDisplay = adFilter.build(params.adsToDisplay);
	            }
	
	            /**
	             * DFPP Register ads
	             */
	            if (adsToDisplay) {
	                window.bbcdotcom.adsToDisplay = adsToDisplay;
	                for (i = 0, len = adsToDisplay.length; i < len; i++) {
	                    adRegister.registerAd(adsToDisplay[i]);
	                }
	            }
	
	            /**
	             * Locale
	             */
	            if (params.localeData) {
	                for (x in params.localeData) {
	                    if (params.localeData.hasOwnProperty(x)) {
	                        locale.set(x, params.localeData[x]);
	                    }
	                }
	            } else {
	                locale.setLocale(document.documentElement.lang);
	            }
	
	            /**
	             * Ad Exclusions
	             */
	            new Predicate().set(windowDocument.title + ' ' + utils.getMetaNameContent('description'));
	
	            /**
	             * Ad Unit
	             */
	            adUnit.init(layout.getClientWidth(), this.serversideAdUnits2to9, sections.getSections('advert'), sections.getSections());
	
	            /**
	             * Key Values
	             */
	            keyValues.init(windowLocation, windowDocument, config.getType());
	            if (typeof params.keyValues !== 'undefined') {
	                for (x in params.keyValues) {
	                    if (params.keyValues.hasOwnProperty(x)) {
	                        keyValues.set(x, params.keyValues[x]);
	                    }
	                }
	            }
	
	            /**
	             * Ad Suites - used to display a certain set of ads all the time using ?ads=big
	             */
	            adSuites.init(windowLocation.href);
	
	            /**
	             * DFPP Requests
	             */
	            bbcdotcom.onLocationKnown(dfppRequest.init, dfppRequest);
	
	            if (config.isLotameEnabled() && config.isLotameActive()) {
	                bbcdotcom.onLocationKnown(lotame.consentCallback, lotame);
	            }
	
	            /**+
	             * Survey
	             */
	            survey.init();
	
	            if (config.isLotameEnabled() && config.isLotameActive()) {
	                ['userPlay', 'startProgramme', 'endProgramme'].forEach(function (event) {
	                    bbcdotcom.pubsub.on(event, function (data) {
	                        data.event = event;
	                        lotame.sendData(data);
	                    });
	                });
	            }
	
	            if (window.addEventListener) {
	                window.addEventListener("message", this.receiveMessage, false);
	            } else {
	                // IE8 or earlier
	                window.attachEvent('onmessage', this.receiveMessage);
	            }
	        }
	
	        analytics.init();
	
	        // Piano tags
	        if (config.isSherlockActive() && config.isSherlockEnabled() && window.tp) {
	            if (window._comscoreKeyValues && _comscoreKeyValues.b_page_type) {
	                tp.push(["setTags", [_comscoreKeyValues.b_page_type]]);
	            } else {
	                tp.push(["setTags", [AnalyticsHelper.getPageType()]]);
	            }
	        }
	
	        // Trigger an init event with useful information
	        pubsub.trigger('bbcdotcom:init:complete', {
	            params: params,
	            // Stats is used to update bbcdotcom.stats.data for JS variable collection by mPulse
	            stats: {
	                pageType: AnalyticsHelper.getPageType(),
	                primaryAdUnit: adUnit.getAdUnit1(),
	                secondaryAdUnit: adUnit.getAdUnits2to9(),
	                adsEnabled: config.isAdsEnabled(),
	                isAsync: config.isAsync()
	            }
	        });
	
	        idcta.init();
	    } catch (e) {
	        if (log && log.error) {
	            log.error(e);
	        } else {
	            window.console.log(e);
	        }
	    }
	
	    addLoadEvent(function () {
	        try {
	            var x,
	                ads = adRegister.getAds();
	            this.domLoaded = true;
	            if (!config.isAsync()) {
	                for (x in ads) {
	                    if (ads.hasOwnProperty(x)) {
	                        ads[x].disableScreenReaderForAdContent();
	                    }
	                }
	            } else {
	                this.reset();
	            }
	        } catch (e) {
	            utils.log(e);
	        }
	    }.bind(this));
	
	    bbcdotcom.initCalled = true;
	};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ALWAYS REQUIRED INTERNATIONAL for analytics.js, irrespective of ads being enabled
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _consts = __webpack_require__(151);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var log = __webpack_require__(144)('config');
	
	var ADS_ENABLED_HTML_CLASS = 'ads-enabled';
	var ANALYTICS = {
	    COMSCORE: {
	        HTTPS: 'https://sb.scorecardresearch.com/b',
	        WEBSITE_SUITE_LIVE: 'bbc',
	        WEBSITE_SUITE_TEST: 'bbc-global-test',
	        APP_SUITE_LIVE: 'bbc',
	        APP_SUITE_TEST: 'bbc-global-test',
	        CUSTOMER_ID_LIVE: 19293874,
	        CUSTOMER_ID_TEST: 18897612
	    },
	    SSC: {
	        HTTPS: 'https://ssc.api.bbc.com'
	    }
	};
	var WSSITES = new RegExp('^\/(afaanoromoo|afrique|amharic|arabic|azeri|bengali|burmese|gahuza|gujarati' + '|hausa|hindi|igbo|indonesia|korean|kyrgyz|japanese|marathi|mundo|naidheachdan|nepali|pashto|persian' + '|pidgin|portuguese|punjabi|russian|serbian|sinhala|somali|swahili|tajik|tamil|telugu|thai|tigrinya' + '|turkce|ukchina|ukrainian|urdu|uzbek|vietnamese|yoruba|zhongwen)');
	var SHERLOCKSITES = new RegExp('^\/($|wwhp|news|sport|weather' + '|reel|culture|capital|future|travel|autos|earth)');
	var LOTAMEWSSITES = new RegExp('^\/(afrique|arabic|azeri|bengali|burmese|gahuza|hausa|hindi|indonesia|kyrgyz' + '|mundo|nepali|pashto|persian|portuguese|russian|sinhala|somali|swahili|tamil|turkce|ukchina|ukrainian' + '|urdu|uzbek|vietnamese)');
	
	/**
	 * Initial Default Config
	 * @private
	 */
	var _config = {
	    referrer: '',
	    windowLocation: getWinLoc(),
	    windowDocument: getWinDoc(),
	    settings: {
	        ads: true,
	        analytics: true, // Global Currency Providers
	        comScore: true // ComScore only
	    },
	    sections: [],
	    pageType: '',
	    headline: '',
	    async: false,
	    disableAdsInitialLoad: false,
	    daxEnvironments: ['bbc-global'],
	    outbrainEnabled: true,
	    lotameEnabled: true,
	    lotameActive: false,
	    grapeshotEnabled: true,
	    adsenseEnabled: true,
	    adsportappEnabled: false,
	    percentActive: 0,
	    platinumEnabled: false,
	    tlSportIndexEnabled: false,
	    tlSportStoryEnabled: false,
	    tlSportFpEnabled: false,
	    optimizelyEnabled: false,
	    sherlockEnabled: false,
	    sherlockActive: false,
	    continuousPlayPage: false,
	    stickyPlayerPage: false,
	    isWorldService: false,
	    isEU: undefined,
	    isNPA: false,
	    ieVersion: {
	        ie7: false,
	        ie8: false,
	        ie9: false
	    },
	    version: '',
	    prefixes: {
	        assetPrefix: '',
	        jsPrefix: '',
	        swfPrefix: '',
	        cssPrefix: ''
	    },
	    features: {},
	    palEnv: _consts.PAL_ENV_LIVE,
	    appName: null
	};
	
	var Config = function () {
	    function Config() {
	        _classCallCheck(this, Config);
	    }
	
	    _createClass(Config, [{
	        key: 'init',
	        value: function init(serverConf, data, location, document) {
	
	            if (/^\/news\/election\/us2016/.test(_config.windowLocation.pathname)) {
	                bbcdotcom.utils.addHtmlTagClass(bbcdotcom.classes.classNames('news-election-us2016'));
	            }
	            if (typeof serverConf !== 'undefined') {
	                this.rehydrate(serverConf);
	            }
	
	            this.setData(data);
	
	            /* No ads/analytics in amp embed iframe (GNLADAPPS-1493) */
	            if (window.self !== window.top && new RegExp('\/embed\/.*\?.*amp=1').test(_config.windowLocation.href)) {
	                this.setAdsEnabled(false);
	                this.setAnalyticsEnabled(false);
	                log("disabling ads/analytics, amp-iframe ", window.self.location.href);
	            }
	
	            if (typeof location !== 'undefined') {
	                this.setWindowLocation(location);
	            }
	            if (typeof document !== 'undefined') {
	                this.setWindowDocument(document);
	            }
	            if (this.isAdsEnabled()) {
	                bbcdotcom.utils.addHtmlTagClass(ADS_ENABLED_HTML_CLASS);
	            }
	            if (/tlsportstory/i.test(_config.windowLocation.href)) {
	                this.setTlSportStoryEnabled(true);
	            }
	            if (/tlsportindex/i.test(_config.windowLocation.href)) {
	                this.setTlSportIndexEnabled(true);
	            }
	            if (/tlsportfp/i.test(_config.windowLocation.href)) {
	                this.setTlSportFpEnabled(true);
	            }
	
	            if (WSSITES.test(_config.windowLocation.pathname) || window.SEARCHBOX && window.SEARCHBOX.variant && window.SEARCHBOX.variant === 'worldservice') {
	                this.setIsWorldService(true);
	            }
	
	            // GNLADAPPS-1087
	            if (SHERLOCKSITES.test(_config.windowLocation.pathname) && data && data.ads === 1) {
	                this.setSherlockActive(true);
	            }
	
	            if (LOTAMEWSSITES.test(_config.windowLocation.pathname) || data && data.stats === 1) {
	                this.setLotameActive(true);
	            }
	
	            var referrer = typeof window.orb !== 'undefined' && typeof window.orb.referrer !== 'undefined' ? window.orb.referrer : _config.windowDocument.referrer;
	            this.setReferrer(referrer);
	        }
	
	        /**
	         * Populates the client-side config with config provided by the server.
	         * Called from bbcdotcom.api.setConfig
	         *
	         * @param {Object} conf - Server-side provided config
	         */
	
	    }, {
	        key: 'rehydrate',
	        value: function rehydrate(conf) {
	            if (typeof conf === 'undefined') {
	                return;
	            }
	            // Sections
	            if (typeof conf.sections !== 'undefined') {
	                this.setSections(conf.sections);
	            }
	            // Page Type
	            if (typeof conf.type !== 'undefined') {
	                this.setType(conf.type);
	            }
	            // Story Headline
	            if (typeof conf.headline !== 'undefined') {
	                this.setHeadline(conf.headline);
	            }
	            // Ads Enabled
	            if (typeof conf.adsEnabled !== 'undefined') {
	                this.setAdsEnabled(conf.adsEnabled);
	            }
	            // Allow Advertising - variable name used in Candy is allowAdvertising
	            if (typeof conf.allowAdvertising !== 'undefined') {
	                this.setAdsEnabled(conf.allowAdvertising);
	            }
	            // Analytics Enabled
	            if (typeof conf.analyticsEnabled !== 'undefined') {
	                this.setAnalyticsEnabled(conf.analyticsEnabled);
	            }
	            // comScore Enabled
	            if (typeof conf.comScoreEnabled !== 'undefined') {
	                this.setComScoreEnabled(conf.comScoreEnabled);
	            }
	            // Async Enabled
	            if (typeof conf.asyncEnabled !== 'undefined') {
	                this.setAsync(conf.asyncEnabled);
	            }
	            // Optimizely Enabled
	            if (typeof conf.optimizelyEnabled !== 'undefined') {
	                this.setOptimizelyEnabled(conf.optimizelyEnabled);
	            }
	            // Sherlock Enabled
	            if (typeof conf.sherlockEnabled !== 'undefined') {
	                this.setSherlockEnabled(conf.sherlockEnabled);
	            }
	            // Load ads initially disabled, used only in async mode
	            if (typeof conf.disableInitialLoad !== 'undefined') {
	                this.setDisableInitialLoad(conf.disableInitialLoad);
	            }
	            // Ad Keyword - variable name used in Candy is adCampaignKeyword
	            var keyword = typeof conf.adKeyword !== 'undefined' ? conf.adKeyword : conf.adCampaignKeyword;
	            if (typeof keyword !== 'undefined') {
	                bbcdotcom.adverts.keyValues.set('keyword', keyword);
	            }
	            // Window Location
	            if (typeof conf.url !== 'undefined') {
	                this.setWindowLocation(bbcdotcom.utils.createWindowLocation(conf.url));
	            }
	            // Features
	            if (typeof conf.features !== 'undefined') {
	                this.setFeatures(conf.features);
	            }
	            // PAL ENV
	            if (typeof conf.palEnv !== 'undefined') {
	                this.setPalEnv(conf.palEnv);
	            }
	            // Locale
	            if (bbcdotcom.locale) {
	                if (typeof conf.advertisementText !== 'undefined') {
	                    bbcdotcom.locale.set('advertisementText', conf.advertisementText);
	                }
	                if (typeof conf.advertInfoPageUrl !== 'undefined') {
	                    bbcdotcom.locale.set('advertInfoPageUrl', conf.advertInfoPageUrl);
	                }
	                if (typeof conf.inAssociationWithText !== 'undefined') {
	                    bbcdotcom.locale.set('inAssociationWithText', conf.inAssociationWithText);
	                }
	                if (typeof conf.sponsoredByText !== 'undefined') {
	                    bbcdotcom.locale.set('sponsoredByText', conf.sponsoredByText);
	                }
	                if (typeof conf.adsByGoogleText !== 'undefined') {
	                    bbcdotcom.locale.set('adsByGoogleText', conf.adsByGoogleText);
	                }
	            }
	            // Is Continuous Play Page (webapp/product provides)
	            if (typeof conf.isContinuousPlayPage !== 'undefined') {
	                this.setContinuousPlayPage(conf.isContinuousPlayPage);
	            }
	            // Is Sticky Player Page (webapp/product provides)
	            if (typeof conf.isStickyPlayerPage !== 'undefined') {
	                this.setStickyPlayerPage(conf.isStickyPlayerPage);
	            }
	        }
	    }, {
	        key: 'getConfig',
	        value: function getConfig() {
	            return _config;
	        }
	    }, {
	        key: 'setData',
	        value: function setData(data) {
	            if (typeof data !== 'undefined' && typeof data.ads !== 'undefined' && typeof data.stats !== 'undefined' && typeof data.statsProvider !== 'undefined') {
	                var numProviders = 5,
	                    providers = parseInt(data.statsProvider, 10).toString(2);
	                if (providers.length !== numProviders) {
	                    // Pad binary list of providers
	                    // eg decimal = 3, therefore in binary = 11, not 00011 which we need below for substring
	                    while (providers.length < numProviders) {
	                        providers = '0' + providers;
	                    }
	                }
	
	                /**
	                 * Stats Provider Values:
	                 * - 1  AGOF
	                 * - 2  Sitestat    Removed (BBCCOM-5674)
	                 * - 4  Nielsen US
	                 * - 8  Nielsen NZ
	                 * - 16 Nielsen AU
	                 */
	                _config.settings = {
	                    'ads': data.ads === 1 && _config.settings.ads !== false,
	                    'analytics': data.stats === 1 && _config.settings.analytics !== false,
	                    // Instructions: when adding new, increase numProviders above, update the "var settings" defaults at top of page and add to wwscripts.ini in the same order
	                    'nielsen-au': data.stats === 1 && parseInt(providers.substr(0, 1), 10),
	                    'nielsen-nz': data.stats === 1 && parseInt(providers.substr(1, 1), 10),
	                    'nielsen-us': data.stats === 1 && parseInt(providers.substr(2, 1), 10),
	                    'sitestat': 0, // removed (BBCCOM-5674)
	                    'agof': 0, // remove (BBCCOM-7046)
	                    // Instructions: when adding new, increase numProviders above, update the "var settings" defaults at top of page and add to wwscripts.ini in the same order
	                    'comScore': _config.settings.comScore
	                };
	            }
	        }
	    }, {
	        key: 'setFlagpoles',
	        value: function setFlagpoles(flag) {
	            // Outbrain
	            if (typeof flag.o !== 'undefined') {
	                this.setOutbrainEnabled(flag.o);
	            }
	            // Adsense Enabled
	            if (typeof flag.d !== 'undefined') {
	                this.setAdsenseEnabled(flag.d);
	            }
	            // Adsportapp Enabled
	            if (typeof flag.asa !== 'undefined') {
	                this.setAdsportappEnabled(flag.asa);
	            }
	            // Lotame Enabled
	            if (typeof flag.l !== 'undefined') {
	                this.setLotameEnabled(flag.l);
	            }
	            // Platinum Enabled
	            if (typeof flag.p !== 'undefined') {
	                this.setPlatinumEnabled(flag.p);
	            }
	            // Optimizely Enabled
	            if (typeof flag.z !== 'undefined') {
	                this.setOptimizelyEnabled(flag.z);
	            }
	            // Grapeshot Enabled
	            if (typeof flag.g !== 'undefined') {
	                this.setGrapeshotEnabled(flag.g);
	            }
	            // Sherlock Enabled
	            if (typeof flag.sh !== 'undefined') {
	                this.setSherlockEnabled(flag.sh);
	            }
	        }
	
	        /**
	         * Offers the ability for a product to specify what sections should be and for us not
	         * to derive the sections from the page Uri.  This information is used within bbcdotcom.sections object
	         */
	
	    }, {
	        key: 'setSections',
	        value: function setSections(sects) {
	            if (typeof sects !== 'undefined') {
	                if (sects instanceof Array) {
	                    _config.sections = sects;
	                } else {
	                    _config.sections = sects.split('/');
	                }
	            } else {
	                _config.sections = [];
	            }
	        }
	    }, {
	        key: 'getSections',
	        value: function getSections() {
	            return _config.sections;
	        }
	
	        /**
	         * Page Type eg STORY, INDEX, VIDEO
	         */
	
	    }, {
	        key: 'setType',
	        value: function setType(type) {
	            _config.pageType = type.toUpperCase();
	        }
	    }, {
	        key: 'getType',
	        value: function getType() {
	            return _config.pageType;
	        }
	
	        /**
	         * Feature Switch
	         */
	
	    }, {
	        key: 'setFeatures',
	        value: function setFeatures(features) {
	            _config.features = features;
	            return this;
	        }
	    }, {
	        key: 'getFeatures',
	        value: function getFeatures() {
	            return _config.features;
	        }
	
	        /**
	         * PAL ENV
	         */
	
	    }, {
	        key: 'setPalEnv',
	        value: function setPalEnv(palEnv) {
	            _config.palEnv = palEnv;
	            return this;
	        }
	    }, {
	        key: 'getPalEnv',
	        value: function getPalEnv() {
	            return _config.palEnv;
	        }
	
	        /**
	         * Story Headline
	         */
	
	    }, {
	        key: 'setHeadline',
	        value: function setHeadline(str) {
	            _config.headline = str;
	        }
	    }, {
	        key: 'getHeadline',
	        value: function getHeadline() {
	            return _config.headline;
	        }
	
	        /**
	         * Used to set the loading of ads in DFP to be done Asynchronously
	         * @param isAsync
	         */
	
	    }, {
	        key: 'setAsync',
	        value: function setAsync(isAsync) {
	            _config.async = isAsync;
	        }
	    }, {
	        key: 'isAsync',
	        value: function isAsync() {
	            return _config.async;
	        }
	
	        /**
	         * Used to disable ads loading initially in DFP until the refresh method is called (Only available in Async Mode)
	         * @param isDisableAdsInitialLoad
	         */
	
	    }, {
	        key: 'setDisableInitialLoad',
	        value: function setDisableInitialLoad(isDisableAdsInitialLoad) {
	            _config.disableAdsInitialLoad = isDisableAdsInitialLoad;
	        }
	    }, {
	        key: 'isDisableInitialLoad',
	        value: function isDisableInitialLoad() {
	            return _config.disableAdsInitialLoad;
	        }
	    }, {
	        key: 'isTopLevelSite',
	        value: function isTopLevelSite(site) {
	            var pathname = _config.windowLocation.pathname;
	            return typeof pathname !== 'undefined' && pathname.indexOf('/' + site) === 0;
	        }
	    }, {
	        key: 'isSportApp',
	        value: function isSportApp() {
	            var pathname = _config.windowLocation.pathname,
	                href = _config.windowLocation.href;
	            return typeof pathname !== 'undefined' && (pathname.indexOf('.app') !== -1 || typeof href !== 'undefined' && href.indexOf('.app') !== -1) && (pathname.indexOf('/sport') === 0 || typeof href !== 'undefined' && href.indexOf('analytics-debug') !== -1);
	        }
	    }, {
	        key: 'isReel',
	        value: function isReel() {
	            var pathname = _config.windowLocation.pathname;
	            return typeof pathname !== 'undefined' && pathname.indexOf('/reel') === 0;
	        }
	    }, {
	        key: 'isActive',
	        value: function isActive(key) {
	            return typeof _config.settings[key] !== 'undefined' ? _config.settings[key] : false;
	        }
	    }, {
	        key: 'isAdsEnabled',
	        value: function isAdsEnabled() {
	            return this.isActive('ads');
	        }
	    }, {
	        key: 'setAdsEnabled',
	        value: function setAdsEnabled(enabled) {
	            _config.settings.ads = enabled;
	        }
	    }, {
	        key: 'setAnalyticsEnabled',
	        value: function setAnalyticsEnabled(enabled) {
	            /* Once it has been disable to not allow it to be enabled */
	            _config.settings.analytics = _config.settings.analytics !== 0 && _config.settings.analytics !== false ? enabled : 0;
	        }
	    }, {
	        key: 'isAnalyticsEnabled',
	        value: function isAnalyticsEnabled() {
	            return this.isActive('analytics');
	        }
	    }, {
	        key: 'setComScoreEnabled',
	        value: function setComScoreEnabled(enabled) {
	            /* Once it has been disable to not allow it to be enabled */
	            _config.settings.comScore = _config.settings.comScore !== 0 && _config.settings.comScore !== false ? enabled : 0;
	        }
	    }, {
	        key: 'isComScoreEnabled',
	        value: function isComScoreEnabled() {
	            return this.isActive('comScore') && this.isActive('analytics');
	        }
	    }, {
	        key: 'setOutbrainEnabled',
	        value: function setOutbrainEnabled(enabled) {
	            _config.outbrainEnabled = enabled !== 0 && enabled !== false ? true : false;
	        }
	    }, {
	        key: 'isOutbrainEnabled',
	        value: function isOutbrainEnabled() {
	            return _config.outbrainEnabled;
	        }
	    }, {
	        key: 'setAdsenseEnabled',
	        value: function setAdsenseEnabled(enabled) {
	            _config.adsenseEnabled = enabled !== 0 && enabled !== false ? true : false;
	        }
	    }, {
	        key: 'isAdsenseEnabled',
	        value: function isAdsenseEnabled() {
	            return _config.adsenseEnabled;
	        }
	    }, {
	        key: 'setAdsportappEnabled',
	        value: function setAdsportappEnabled(enabled) {
	            _config.adsportappEnabled = enabled !== 0 && enabled !== false ? true : false;
	        }
	    }, {
	        key: 'isAdsportappEnabled',
	        value: function isAdsportappEnabled() {
	            return _config.adsportappEnabled;
	        }
	    }, {
	        key: 'setLotameEnabled',
	        value: function setLotameEnabled(enabled) {
	            _config.lotameEnabled = enabled !== 0 && enabled !== false ? true : false;
	        }
	    }, {
	        key: 'isLotameEnabled',
	        value: function isLotameEnabled() {
	            return _config.lotameEnabled;
	        }
	    }, {
	        key: 'setLotameActive',
	        value: function setLotameActive(bool) {
	            _config.lotameActive = bool !== 0 && bool !== false ? true : false;
	        }
	    }, {
	        key: 'isLotameActive',
	        value: function isLotameActive() {
	            return _config.lotameActive;
	        }
	    }, {
	        key: 'setContinuousPlayPage',
	        value: function setContinuousPlayPage(value) {
	            _config.continuousPlayPage = value === true;
	        }
	    }, {
	        key: 'isContinuousPlayPage',
	        value: function isContinuousPlayPage() {
	            return _config.continuousPlayPage;
	        }
	    }, {
	        key: 'setPlatinumEnabled',
	        value: function setPlatinumEnabled(enabled) {
	            _config.platinumEnabled = enabled !== 0 && enabled !== false ? true : false;
	        }
	    }, {
	        key: 'isPlatinumEnabled',
	        value: function isPlatinumEnabled() {
	            return _config.platinumEnabled;
	        }
	    }, {
	        key: 'setTlSportIndexEnabled',
	        value: function setTlSportIndexEnabled(enabled) {
	            _config.tlSportIndexEnabled = enabled;
	        }
	    }, {
	        key: 'isTlSportIndexEnabled',
	        value: function isTlSportIndexEnabled() {
	            return _config.tlSportIndexEnabled;
	        }
	    }, {
	        key: 'setTlSportStoryEnabled',
	        value: function setTlSportStoryEnabled(enabled) {
	            _config.tlSportStoryEnabled = enabled;
	        }
	    }, {
	        key: 'isTlSportStoryEnabled',
	        value: function isTlSportStoryEnabled() {
	            return _config.tlSportStoryEnabled;
	        }
	    }, {
	        key: 'setTlSportFpEnabled',
	        value: function setTlSportFpEnabled(enabled) {
	            _config.tlSportFpEnabled = enabled;
	        }
	    }, {
	        key: 'isTlSportFpEnabled',
	        value: function isTlSportFpEnabled() {
	            return _config.tlSportFpEnabled;
	        }
	    }, {
	        key: 'setOptimizelyEnabled',
	        value: function setOptimizelyEnabled(enabled) {
	            _config.optimizelyEnabled = enabled !== 0 && enabled !== false ? true : false;
	        }
	    }, {
	        key: 'isOptimizelyEnabled',
	        value: function isOptimizelyEnabled() {
	            return _config.optimizelyEnabled;
	        }
	    }, {
	        key: 'setGrapeshotEnabled',
	        value: function setGrapeshotEnabled(enabled) {
	            _config.grapeshotEnabled = enabled !== 0 && enabled !== false ? true : false;
	        }
	    }, {
	        key: 'isGrapeshotEnabled',
	        value: function isGrapeshotEnabled() {
	            return _config.grapeshotEnabled;
	        }
	    }, {
	        key: 'setSherlockEnabled',
	        value: function setSherlockEnabled(enabled) {
	            _config.sherlockEnabled = enabled !== 0 && enabled !== false ? true : false;
	        }
	    }, {
	        key: 'isSherlockEnabled',
	        value: function isSherlockEnabled() {
	            return _config.sherlockEnabled;
	        }
	    }, {
	        key: 'setSherlockActive',
	        value: function setSherlockActive(bool) {
	            _config.sherlockActive = bool !== 0 && bool !== false ? true : false;
	        }
	    }, {
	        key: 'isSherlockActive',
	        value: function isSherlockActive() {
	            return _config.sherlockActive;
	        }
	    }, {
	        key: 'setIsWorldService',
	        value: function setIsWorldService(bool) {
	            _config.isWorldService = bool;
	        }
	    }, {
	        key: 'isWorldService',
	        value: function isWorldService() {
	            return _config.isWorldService;
	        }
	    }, {
	        key: 'setStickyPlayerPage',
	        value: function setStickyPlayerPage(value) {
	            _config.stickyPlayerPage = value === true;
	        }
	    }, {
	        key: 'isStickyPlayerPage',
	        value: function isStickyPlayerPage() {
	            return _config.stickyPlayerPage;
	        }
	    }, {
	        key: 'setIE7',
	        value: function setIE7(value) {
	            _config.ieVersion.ie7 = value;
	        }
	    }, {
	        key: 'isIE7',
	        value: function isIE7() {
	            return _config.ieVersion.ie7;
	        }
	    }, {
	        key: 'setIE8',
	        value: function setIE8(value) {
	            _config.ieVersion.ie8 = value;
	        }
	    }, {
	        key: 'isIE8',
	        value: function isIE8() {
	            return _config.ieVersion.ie8;
	        }
	    }, {
	        key: 'setIE9',
	        value: function setIE9(value) {
	            _config.ieVersion.ie9 = value;
	        }
	    }, {
	        key: 'isIE9',
	        value: function isIE9() {
	            return _config.ieVersion.ie9;
	        }
	    }, {
	        key: 'setEU',
	        value: function setEU(bool) {
	            _config.isEU = bool !== 0 && bool !== false ? true : false;
	            this.updateNPA();
	        }
	    }, {
	        key: 'isEU',
	        value: function isEU() {
	            return _config.isEU;
	        }
	    }, {
	        key: 'updateNPA',
	        value: function updateNPA() {
	            if (_config.isEU) {
	                _config.isNPA = window.bbccookies && (bbccookies.cookiesEnabled() && !bbccookies.readPolicy('performance') || !bbccookies.cookiesEnabled());
	            }
	        }
	    }, {
	        key: 'isNPA',
	        value: function isNPA() {
	            return _config.isNPA;
	        }
	
	        // TODO - KB 140225 Investigate where these prefix are set and remove when appropriate.
	
	    }, {
	        key: 'setAssetPrefix',
	        value: function setAssetPrefix(prefix) {
	            _config.prefixes.assetPrefix = prefix;
	        }
	    }, {
	        key: 'getAssetPrefix',
	        value: function getAssetPrefix() {
	            return _config.prefixes.assetPrefix;
	        }
	    }, {
	        key: 'setAppName',
	        value: function setAppName(appName) {
	            _config.appName = appName;
	            return this;
	        }
	    }, {
	        key: 'getAppName',
	        value: function getAppName() {
	            return _config.appName;
	        }
	
	        /**
	         * TODO - KB 150629 Deprecate the following and just use get/setAssetPrefix(), having one for each folder is redundant
	         * N&K uses these as files are uploaded to different directories
	         */
	
	    }, {
	        key: 'setJsPrefix',
	        value: function setJsPrefix(prefix) {
	            _config.prefixes.jsPrefix = prefix;
	        }
	    }, {
	        key: 'getJsPrefix',
	        value: function getJsPrefix() {
	            return _config.prefixes.jsPrefix !== '' ? _config.prefixes.jsPrefix : this.getAssetPrefix() + 'script';
	        }
	    }, {
	        key: 'setSwfPrefix',
	        value: function setSwfPrefix(prefix) {
	            _config.prefixes.swfPrefix = prefix;
	        }
	    }, {
	        key: 'getSwfPrefix',
	        value: function getSwfPrefix() {
	            return _config.prefixes.swfPrefix !== '' ? _config.prefixes.swfPrefix : this.getAssetPrefix() + 'swf';
	        }
	    }, {
	        key: 'setCssPrefix',
	        value: function setCssPrefix(prefix) {
	            _config.prefixes.cssPrefix = prefix;
	        }
	    }, {
	        key: 'getCssPrefix',
	        value: function getCssPrefix() {
	            return _config.prefixes.cssPrefix !== '' ? _config.prefixes.cssPrefix : this.getAssetPrefix() + 'style';
	        }
	
	        /**
	         * TODO END - Deprecate the following and just use get/setAssetPrefix(), having one for each folder is redundant
	         */
	
	    }, {
	        key: 'setVersion',
	        value: function setVersion(v) {
	            _config.version = v;
	            return this;
	        }
	    }, {
	        key: 'getVersion',
	        value: function getVersion() {
	            return _config.version;
	        }
	    }, {
	        key: 'setWindowLocation',
	        value: function setWindowLocation(location) {
	            _config.windowLocation = location;
	            return this;
	        }
	    }, {
	        key: 'getWindowLocation',
	        value: function getWindowLocation() {
	            return _config.windowLocation;
	        }
	    }, {
	        key: 'setWindowDocument',
	        value: function setWindowDocument(document) {
	            _config.windowDocument = document;
	            return this;
	        }
	    }, {
	        key: 'getWindowDocument',
	        value: function getWindowDocument() {
	            return _config.windowDocument;
	        }
	    }, {
	        key: 'setReferrer',
	        value: function setReferrer(ref) {
	            _config.referrer = ref;
	            return this;
	        }
	    }, {
	        key: 'getReferrer',
	        value: function getReferrer() {
	            return _config.referrer;
	        }
	    }, {
	        key: 'getAnalyticsConfig',
	        value: function getAnalyticsConfig() {
	            return ANALYTICS;
	        }
	    }, {
	        key: 'getAnalyticsUri',
	        value: function getAnalyticsUri(vendor) {
	            return bbcdotcom.analytics.comScore.sscHelper.getAnalyticsLocation();
	        }
	    }, {
	        key: 'setDaxEnvironments',
	        value: function setDaxEnvironments() {
	            var daxEnvironments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	            _config.daxEnvironments = daxEnvironments;
	            return this;
	        }
	    }, {
	        key: 'getDaxEnvironments',
	        value: function getDaxEnvironments() {
	            return _config.daxEnvironments;
	        }
	    }, {
	        key: 'getAnalyticsSuite',
	        value: function getAnalyticsSuite(vendor) {
	            var testEnv = isTestEnv(_config.windowLocation.href);
	            if (this.isSportApp()) {
	                return testEnv ? ANALYTICS.COMSCORE.APP_SUITE_TEST : ANALYTICS.COMSCORE.APP_SUITE_LIVE;
	            }
	            return testEnv ? ANALYTICS.COMSCORE.WEBSITE_SUITE_TEST : ANALYTICS.COMSCORE.WEBSITE_SUITE_LIVE;
	        }
	    }, {
	        key: 'getAnalyticsAcctId',
	        value: function getAnalyticsAcctId() {
	            return isTestEnv(_config.windowLocation.href) ? ANALYTICS.COMSCORE.CUSTOMER_ID_TEST : ANALYTICS.COMSCORE.CUSTOMER_ID_LIVE;
	        }
	
	        /**
	         * Testing only
	         */
	
	    }, {
	        key: 'r',
	        value: function r() {
	            this.setWindowLocation(getWinLoc());
	            this.setWindowDocument(getWinDoc());
	            this.setReferrer('');
	            this.setSections([]);
	            _config.settings = {
	                ads: true,
	                analytics: true,
	                comScore: true
	            };
	            this.setIE7(false);
	            this.setIE8(false);
	            this.setAssetPrefix('');
	            this.setOutbrainEnabled(true);
	            this.setAdsenseEnabled(true);
	            this.setAdsportappEnabled(false);
	            this.setStickyPlayerPage(false);
	            this.setContinuousPlayPage(false);
	            this.setLotameActive(false);
	            this.setHeadline('');
	            this.setType('');
	        }
	    }]);
	
	    return Config;
	}();
	
	exports['default'] = new Config();
	
	
	function getWinLoc() {
	    return window.location;
	}
	
	function getWinDoc() {
	    return window.document;
	}
	
	function isTestEnv(href) {
	    return (/(sandbox|int|test|stage)(.dev)*.bbc.co*/.test(href)
	    );
	}
	module.exports = exports['default'];

/***/ }),
/* 151 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PAL_ENV_LIVE = exports.PAL_ENV_LIVE = 'live';
	var PAL_ENV_STAGE = exports.PAL_ENV_STAGE = 'stage';
	var PAL_ENV_TEST = exports.PAL_ENV_TEST = 'test';
	var PAL_ENV_INT = exports.PAL_ENV_INT = 'int';
	var PAL_ENV_SANDBOX = exports.PAL_ENV_SANDBOX = 'sandbox';

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	 * ALWAYS REQUIRED INTERNATIONAL for analytics.js, irrespective of ads being enabled
	 */
	
	/**
	 * There are subtle differences of section/subsection classifications between advertising and analytics
	 * based on Doubleclick targetting and Analytics tracking requirements.
	 */
	
	var config = __webpack_require__(150);
	var sections = [];
	var advertSections = [];
	var analyticsSections = [];
	
	/**
	 * Standardise Uri inconsistencies
	 */
	var cleanupPath = function cleanupPath(path) {
	    var wsLang = new RegExp('^(afaanoromoo|afrique|amharic|arabic|azeri|bengali|burmese|gahuza|gujarati' + '|hausa|hindi|igbo|indonesia|korean|kyrgyz|japanese|marathi|mundo|naidheachdan|nepali|newyddion|pashto' + '|persian|pidgin|portuguese|punjabi|russian|serbian|sinhala|somali|swahili|tajik|tamil|telugu|thai' + '|tigrinya|turkce|ukchina|ukrainian|urdu|uzbek|vietnamese|yoruba|zhongwen)');
	
	    return path.replace(/\?.*$/, '') // remove everything after ? in url
	    .replace(/\#.*$/, '') // remove everything after # in url
	    .replace(/^news\/0/, 'news') // remove /0/
	    .replace(/^weather\/0/, 'weather') // remove /0/
	    .replace(/^news\/(uk|world|us|asia)\/(health)(?!-)/, "news/$2") // convert /news/uk/health to /news/health (rem edition, only on index, not on story)
	    .replace(/^(news\/av\/)(.*)\/[^\/]+$/, '$1$2') // convert /news/av/*/title to /news/av/* (rem story title after last slash)
	    .replace(/^news\/av\//, "news/") // convert /news/av/* to /news/* (rem 'av')
	    .replace(/(_|\-|\/)?[A-Z0-9]{7,8}$/, '') // remove story Id /12345678, _12345678 or -12345678
	    .replace(/\/[a-z0-9]+\.stm/, '') // remove from old CPS pages eg /default.stm
	    .replace(/_and_/, '-') // convert entertainment_and_arts to entertainment-arts
	    .replace(/_/g, '-') // want consistency between desktop and responsive
	    .replace(/^news\/(england|northern-ireland|scotland|wales)($|-|\/)/, "news/uk/$1$2") // add '/uk/'
	    .replace(/^news\/uk-([a-z]+)(-([a-z]+))?/, "news/uk/$1/$3") // convert /news/uk-wales-south-east-wales to /news/uk/wales/south-east-wales
	    .replace(/^news\/(world)-(africa|asia|europe)(-([a-z]+))?/, "news/$1/$2/$4") // convert /news/world-asia to /news/world/asia  (no hyphen in name)
	    .replace(/^news\/(world)-([a-z\-]+)/, "news/$1/$2/") // convert /news/world-latin-america to /news/world/latin-america (hyphen in name)
	    .replace(/^(newsbeat)($|-|\/)/, "news/$1$2") // convert /newsbeat/12345 to /news/newsbeat/12345
	    .replace(/^sport\/0/, 'sport') // remove /0/
	    .replace(/^sport\/beta/, 'sport') // remove /beta/
	    .replace(/^sport\/av\//, "sport/") // convert /sport/av/* to /sport/* (rem 'av')
	    .replace(/^sport\/(world|uk)/, 'sport') // GNLADAPPS-755 -- remove /world/ and /uk/ from sport paths
	    .replace(/^sport\/(.*)\/sports($|\/)/, "sport/$1$2") // replace /sport/___/sports/ with /sport/___/
	    .replace(/market-data\/overview/, 'market-data') // market data front-page is '/overview'
	    .replace(/^(programmes)/, "news/$1") // convert /programmes/click to /news/programmes/click
	    .replace(wsLang, "worldservice/$1") // convert /arabic to /worldservice/arabic
	    .replace(/^wwhp/, '') // convert /wwhp to /
	    .replace(/\.app$/, '') // remove '.app' eg /sport/football.app for PhoneGap
	    .replace(/:\d+(?=\/)/, '') // remove any port numbers
	    .replace(/\/+$/, ''); // remove trailing slash
	};
	
	/**
	 * Section exceptions for advert
	 */
	var buildAdvertSections = function buildAdvertSections(path) {
	    path = path.replace(/^news\/world\/([a-z]+)(-([a-z]+))?/, "news/world$1$3") // /news/world/us-canada/ -> /news/worlduscanada/
	    .replace(/programmes\/asiabusinessreport/, 'asiabusiness') // /programmes/asiabusinessreport -> /asiabusiness
	    .replace(/programmes\/click$/, "clickonline") // /programmes/click -> /clickonline
	    .replace(/worldservice\//, ""); // /worldservice/arabic -> /arabic
	    return path.split('/');
	};
	
	/**
	 * Section exceptions for analytics
	 */
	var buildAnalyticsSections = function buildAnalyticsSections(path) {
	    path = path.replace(/^specialfeatures/, "news/specialfeatures") // /specialfeatures/ -> /news/specialfeatures/
	    .replace(/^sport\/(.*)\/(20[0-9]{2})($|\/)/, "sport/$1-$2$3"); // replace /sport/blah/2014/ with /sport/blah-2014/
	    return path.split('/');
	};
	
	/**
	 * Build up an array of sections
	 */
	var build = function build(isCurrentUri, href) {
	    var path = '',
	        _sections = [],
	        _advertSections = [],
	        _analyticsSections = [],
	        UNKNOWN = 'unknown',
	        result;
	    if (typeof href !== 'undefined') {
	        result = href.match(/http(|s):\/\/[a-z0-9\-.]+(.com|.co.uk|.net)(\/)?(.*)?/);
	        if (result) {
	            // eg http://www.bbc.com/hello/world => hello/world
	            path = result[result.length - 1];
	        } else {
	            result = href.match(/^\/(.*)?/);
	            if (result) {
	                // eg / => ''
	                // eg /hello/world => hello/world
	                path = result[result.length - 1];
	            } else {
	                path = UNKNOWN;
	            }
	        }
	    } else if (config.getSections().length === 0) {
	        // Determine sections from Uri
	        var uri = bbcdotcom.analyticsHelper.getUriForSections();
	        if (typeof uri === 'undefined' || uri === '' || uri === null || uri.indexOf('http') !== 0) {
	            // Unknown window.location
	            path = UNKNOWN;
	        } else {
	            result = uri.match(/http(|s):\/\/[a-z0-9\-.]+(.com|.co.uk|.net)(\/)?(.*)?/);
	            if (result) {
	                path = result[result.length - 1];
	            } else {
	                path = UNKNOWN;
	            }
	        }
	    } else {
	        // Use sections defined in the Html page (likely injected with server-side values)
	        // Convert array eg ["news", "world", "asia", "india"] to uri path eg "/news/world/asia/india"
	        path = config.getSections().join('/');
	    }
	    path = path || '';
	    path = cleanupPath(path);
	    if (path === '') {
	        // Homepage
	        _sections = _advertSections = _analyticsSections = ['homepage'];
	    } else {
	        _sections = path.split('/');
	        _advertSections = buildAdvertSections(path);
	        _analyticsSections = buildAnalyticsSections(path);
	    }
	    if (isCurrentUri) {
	        // Persist current page's sections as globals
	        sections = _sections;
	        advertSections = _advertSections;
	        analyticsSections = _analyticsSections;
	    }
	    return [_sections, _advertSections, _analyticsSections];
	};
	
	/**
	 * Load correct array eg 'sections', 'advertSections', 'analyticsSections'
	 */
	var getArray = function getArray(type) {
	    type = typeof type === 'undefined' ? '' : type;
	    return type === 'advert' ? advertSections : type === 'analytics' ? analyticsSections : sections;
	};
	
	module.exports = {
	    build: build,
	    /**
	     * Returns a section of the hierarchy
	     *
	     * With a heirarchy of "news>world>asia":
	     * eg getSection(0)                  => 'news'
	     * eg getSection(1, 'analytics');    => 'worldasia'
	     * eg getSection(1, 'advert', true); => 'world'
	     *
	     * @param integer offset Which section
	     * @param string type (optional) Whether to grab section for 'advert' or 'analytics'
	     * @param boolean reloadData (optional) Rebuild sections data based on new/current window.location
	     * @return mixed string|boolean Returns false if offset does not exist
	     */
	    getSection: function getSection(offset, type, reloadData) {
	        if (typeof offset !== 'undefined') {
	            if (typeof reloadData !== 'undefined' && reloadData === true) {
	                build(true);
	            }
	            offset = parseInt(offset, 10);
	            if (typeof getArray(type) !== 'undefined' && typeof getArray(type)[offset] !== 'undefined' && getArray(type)[offset] !== '') {
	                return getArray(type)[offset];
	            }
	        }
	        return false;
	    },
	    /**
	     * Returns the hierarchy in a sections array
	     *
	     * With a hierarchy of "news>world>asia":
	     * eg getSections()                  => array('news', 'world', 'asia')
	     * eg getSections('analytics');      => array('news', 'worldasia')
	     * eg getSections('advert', true);   => array('news', 'world', 'asia')
	     * eg getSections()[2]               => 'asia'
	     *
	     * @param string type (optional) Whether to grab section for 'advert' or 'analytics'
	     * @param boolean reloadData (optional) Rebuild sections data based on new/current window.location
	     * @return array Section(s) for given link
	     */
	    getSections: function getSections(type, reloadData) {
	        if (typeof reloadData !== 'undefined' && reloadData === true) {
	            build(true);
	        }
	        return getArray(type);
	    },
	    /**
	     * Return the hierarchy in a sections array for a given Uri.  Sometimes used for translating a link's href
	     * into sections.
	     *
	     * @param string uri eg http://www.bbc.com/hello/world or /hello/world
	     * @param string type (optional) Whether to grab section for 'advert' or 'analytics'
	     * @return array Section(s) for given link
	     */
	    getSectionsForUri: function getSectionsForUri(uri, type) {
	        uri = typeof uri === 'undefined' || uri === null ? '' : uri;
	        type = typeof type === 'undefined' ? '' : type;
	        var data = build(false, uri);
	        return type === 'advert' ? data[1] : type === 'analytics' ? data[2] : data[0];
	    },
	    /**
	     * For testing only.
	     */
	    r: function r() {
	        sections = [];
	        advertSections = [];
	        analyticsSections = [];
	    }
	};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var log = __webpack_require__(144)('locale');
	var data = {
	    advertisementText: "Advertisement",
	    inAssociationWithText: "in association with",
	    sponsoredByText: "is sponsored by",
	    advertisingPartnersText: "Advertising Partners",
	    adsByGoogleText: "Ads by Google",
	    advertInfoPageUrl: "https://www.bbc.com/privacy/cookies/international/",
	    associationInfoPageUrl: "https://advertising.bbcworldwide.com/bbc-storyworks-content-definitions/",
	    googleAdsPageUrl: "https://www.bbc.co.uk/bbc.com/faq/ads_by_google.shtml"
	};
	
	var localeData = {
	    "am": {
	        "advertisementText": "ማስታወቂያ",
	        "advertInfoPageUrl": "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
	        "inAssociationWithText": "ጋር በመተባበር",
	        "sponsoredByText": "ሰፖንሰር ያደረገዉ/ችዉ/ጉት",
	        "advertisingPartnersText": "አጋሮች",
	        "adsByGoogleText": "የጉግል ማስታወቂያዎች"
	    },
	    "ar": {
	        "advertisementText": "إعلان",
	        "advertInfoPageUrl": "/arabic/institutional/2012/06/120410_faq_help_bbc_arabic",
	        "inAssociationWithText": "بالتعاون مع",
	        "sponsoredByText": "برعاية",
	        "advertisingPartnersText": "شركاء الإعلان",
	        "adsByGoogleText": "إعلانات من غوغل"
	    },
	    "az": {
	        "advertisementText": "Reklam",
	        "advertInfoPageUrl": "/azeri/institutional/2015/10/000000_advertising_faq.shtml",
	        "inAssociationWithText": "ilə birgə",
	        "sponsoredByText": "Sponsor: ",
	        "advertisingPartnersText": "Reklam partnyorları",
	        "adsByGoogleText": "Google reklamı"
	    },
	    "bn": {
	        "advertisementText": "বিজ্ঞাপন",
	        "advertInfoPageUrl": "/bengali/institutional/2015/10/000000_advertising_faq.shtml",
	        "inAssociationWithText": "এর সহযোগিতায়",
	        "sponsoredByText": "এর সৌজন্যে",
	        "advertisingPartnersText": "বিজ্ঞাপন সহযোগী",
	        "adsByGoogleText": "গুগল-এর বিজ্ঞাপন"
	    },
	    "es": {
	        "advertisementText": "Publicidad",
	        "advertInfoPageUrl": "/mundo/institucional/2012/06/000000_ayuda_sobre_publicidad",
	        "inAssociationWithText": "En asociación con",
	        "sponsoredByText": "Patrocinado por",
	        "advertisingPartnersText": "Anunciantes",
	        "adsByGoogleText": "Avisos de Google"
	    },
	    "fa": {
	        "advertisementText": "آگهی",
	        "advertInfoPageUrl": "http://www.bbc.com/persian/institutional/2015/08/000000_advertising_faq",
	        "inAssociationWithText": "inAssociationWith",
	        "sponsoredByText": "sponsoredBy",
	        "advertisingPartnersText": "advertisingPartners",
	        "adsByGoogleText": "adsByGoogle"
	    },
	    "fr": {
	        "advertisementText": "Publicités",
	        "advertInfoPageUrl": "/afrique/institutionelles/2015/08/000000_advertising_faq.shtml",
	        "inAssociationWithText": "inAssociationWith",
	        "sponsoredByText": "sponsoredBy",
	        "advertisingPartnersText": "advertisingPartners",
	        "adsByGoogleText": "adsByGoogle"
	    },
	    "gu": {
	        "advertisementText": "જાહેરાત",
	        "advertInfoPageUrl": "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
	        "inAssociationWithText": "ના સહયોગથી",
	        "sponsoredByText": "પ્રાયોજક",
	        "advertisingPartnersText": "પાર્ટનર્સ",
	        "adsByGoogleText": "Google દ્વારાજાહેરાતો"
	    },
	    "ha": {
	        "advertisementText": "Talla",
	        "advertInfoPageUrl": "http://www.bbc.co.uk/hausa/institutional/2015/01/000000_advertising_faqs",
	        "inAssociationWithText": "Da hadin gwiwar",
	        "sponsoredByText": "Wanda ya dauki nauyi",
	        "advertisingPartnersText": "Abokan hulda",
	        "adsByGoogleText": "Tallace-tallace daga Google"
	    },
	    "hi": {
	        "advertisementText": "विज्ञापन",
	        "advertInfoPageUrl": "http://www.bbc.co.uk/hindi/institutional/2015/01/000000_advertising_faqs",
	        "inAssociationWithText": "के साथ",
	        "sponsoredByText": "प्रायोजक",
	        "advertisingPartnersText": "पार्टनर",
	        "adsByGoogleText": "गूगल के विज्ञापन"
	    },
	    "id": {
	        "advertisementText": "Iklan",
	        "advertInfoPageUrl": "http://www.bbc.com/indonesia/institutional/2015/08/000000_advertising_faq",
	        "adsByGoogleText": "adsByGoogle"
	    },
	    "ig": {
	        "advertisementText": "Mgbasa ozi",
	        "advertInfoPageUrl": "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
	        "inAssociationWithText": "Na njikọta nke",
	        "sponsoredByText": "Akwadoro site n'aka",
	        "advertisingPartnersText": "Ndị mmekọ",
	        "adsByGoogleText": "Mgbasa ozi nke Google"
	    },
	    "ja": {
	        "advertisementText": "広告",
	        "advertInfoPageUrl": "/japanese/help-34287354",
	        "inAssociationWithText": "提携:",
	        "sponsoredByText": "提供:",
	        "advertisingPartnersText": "パートナー:",
	        "adsByGoogleText": "Ads by Google"
	    },
	    "ko": {
	        "advertisementText": "광고",
	        "advertInfoPageUrl": "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
	        "inAssociationWithText": "관련 내용",
	        "sponsoredByText": "후원사",
	        "advertisingPartnersText": "협력사",
	        "adsByGoogleText": "Google 광고"
	    },
	    "ky": {
	        "advertisementText": "Жарнама",
	        "advertInfoPageUrl": "/kyrgyz/institutional/2015/10/000000_advertising_faq.shtml",
	        "inAssociationWithText": "менен кызматташтыкта ",
	        "sponsoredByText": "Спонсор",
	        "advertisingPartnersText": "Жарнама партнёрлору",
	        "adsByGoogleText": "Google жарнамасы"
	    },
	    "mr": {
	        "advertisementText": "जाहिरात",
	        "advertInfoPageUrl": "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
	        "inAssociationWithText": "च्या संयुक्त विद्यमाने",
	        "sponsoredByText": "च्या सौजन्याने",
	        "advertisingPartnersText": "भागीदार",
	        "adsByGoogleText": "Google द्वारे जाहिराती"
	    },
	    "my": {
	        "advertisementText": "ကြော်ငြာ",
	        "advertInfoPageUrl": "/burmese/institutional/2015/10/000000_advertising_faq.shtml",
	        "inAssociationWithText": "နှင့် ပူးတွဲဝန်ဆောင်၍",
	        "sponsoredByText": "ကမကထပြုသူ",
	        "advertisingPartnersText": "ပူးတွဲဝန်ဆောင်သူများ",
	        "adsByGoogleText": "ဂူဂဲလ် ကြော်ငြာ"
	    },
	    "ne": {
	        "advertisementText": "विज्ञापन",
	        "advertInfoPageUrl": "/nepali/institutional/2015/10/000000_advertising_faq.shtml",
	        "inAssociationWithText": "साथमा",
	        "sponsoredByText": "प्रायोजक",
	        "advertisingPartnersText": "प्रायोजक",
	        "adsByGoogleText": "गुगलको विज्ञापन"
	    },
	    "om": {
	        "advertisementText": "Beeksiisa",
	        "advertInfoPageUrl": "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
	        "inAssociationWithText": "...Waliin ta'uun.",
	        "sponsoredByText": "Ispoonsara kan godhe...",
	        "advertisingPartnersText": "Waahillan",
	        "adsByGoogleText": "Beeksia Google'n"
	    },
	    "pa": {
	        "advertisementText": "ਇਸ਼ਤਿਹਾਰ",
	        "advertInfoPageUrl": "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
	        "inAssociationWithText": "ਇਸ ਦੇ ਸਹਿਯੋਗ ਨਾਲ",
	        "sponsoredByText": "ਇਸ ਦੁਆਰਾ ਪ੍ਰਾਯੋਜਿਤ",
	        "advertisingPartnersText": "ਭਾਈਵਾਲ",
	        "adsByGoogleText": "Google ਦੁਆਰਾ ਇਸ਼ਤਿਹਾਰ"
	    },
	    "pcm": {
	        "advertisementText": "Tori we dem pay for",
	        "advertInfoPageUrl": "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
	        "inAssociationWithText": "E join hand with",
	        "sponsoredByText": "De person we sponsor am",
	        "advertisingPartnersText": "Partner dem",
	        "adsByGoogleText": "Ads we Google do"
	    },
	    "ps": {
	        "advertisementText": "اعلان",
	        "advertInfoPageUrl": "/pashto/institutional/2015/10/000000_advertising_faq.shtml",
	        "inAssociationWithText": "په ګډه",
	        "sponsoredByText": "په ملاتړ",
	        "advertisingPartnersText": "ملګري",
	        "adsByGoogleText": "د ګوګل اعلانونه"
	    },
	    "pt": {
	        "advertisementText": "Publicidade",
	        "advertInfoPageUrl": "http://www.bbc.co.uk/portuguese/institutional/2015/01/000000_advertising_faqs",
	        "inAssociationWithText": "Em parceria com",
	        "sponsoredByText": "Com patrocínio de",
	        "advertisingPartnersText": "Parceiros",
	        "adsByGoogleText": "Anúncios do Google"
	    },
	    "ru": {
	        "advertisementText": "Реклама",
	        "advertInfoPageUrl": "/russian/institutional/2012/12/000000_advert_uk_faq",
	        "inAssociationWithText": "В сотрудничестве с",
	        "sponsoredByText": "Спонсор:",
	        "advertisingPartnersText": "Рекламные партнеры",
	        "adsByGoogleText": "Реклама Google"
	    },
	    "ru-UK": {
	        "advertisementText": "Реклама",
	        "advertInfoPageUrl": "",
	        "inAssociationWithText": "В сотрудничестве с",
	        "sponsoredByText": "Спонсор:",
	        "advertisingPartnersText": "Рекламные партнеры",
	        "adsByGoogleText": "Реклама Google"
	    },
	    "rw": {
	        "advertisementText": "Kwamamaza",
	        "advertInfoPageUrl": "/gahuza/ibindi_wifashisha/2015/08/000000_advertising_faq.shtml"
	    },
	    "si": {
	        "advertisementText": "වෙළෙඳ දැන්වීමක් ",
	        "advertInfoPageUrl": "/sinhala/institutional/2015/10/000000_advertising_faq.shtml",
	        "inAssociationWithText": "සහභාගිත්වය ඇතිව ",
	        "sponsoredByText": "අනුග්‍රාහකත්වය ",
	        "advertisingPartnersText": "දැන්වීම් අනුග්‍රාහකයෝ",
	        "adsByGoogleText": "ගූගල් වෙළෙඳ දැන්වීම්"
	    },
	    "so": {
	        "advertisementText": "Xayeysiin",
	        "advertInfoPageUrl": "/somali/hayadeed/2015/08/000000_advertising_faq.shtml"
	    },
	    "sw": {
	        "advertisementText": "Matangazo",
	        "advertInfoPageUrl": "http://www.bbc.co.uk/swahili/taasisi/2015/01/000000_advertising_faqs",
	        "inAssociationWithText": "Kwa ushirikiano na",
	        "sponsoredByText": "Imedhaminiwa na",
	        "advertisingPartnersText": "Washirika",
	        "adsByGoogleText": "Matangazo ya biashara ya Google"
	    },
	    "ta": {
	        "advertisementText": "விளம்பரம்",
	        "advertInfoPageUrl": "/tamil/institutional/2015/10/000000_advertising_faq.shtml",
	        "inAssociationWithText": "உடன் இணைந்து",
	        "sponsoredByText": "உதவியுடன்",
	        "advertisingPartnersText": "கூட்டாளிகள்",
	        "adsByGoogleText": "கூகிள் விளம்பரங்கள்"
	    },
	    "te": {
	        "advertisementText": "వ్యాపార ప్రకటన",
	        "advertInfoPageUrl": "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
	        "inAssociationWithText": "వీరి సహకారంతో",
	        "sponsoredByText": "ప్రాయోజితులు",
	        "advertisingPartnersText": "భాగస్వాములు",
	        "adsByGoogleText": "గూగుల్ సమర్పిత ప్రకటనలు"
	    },
	    "th": {
	        "advertisementText": "โฆษณา",
	        "advertInfoPageUrl": "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
	        "inAssociationWithText": "ด้วยความร่วมมือกับ",
	        "sponsoredByText": "สนับสนุนโดย",
	        "advertisingPartnersText": "ภาคีของเรา",
	        "adsByGoogleText": "โฆษณาโดยกูเกิล"
	    },
	    "ti": {
	        "advertisementText": "መላለዪ",
	        "advertInfoPageUrl": "http://faq.external.bbc.co.uk/questions/bbc_online/adverts_general",
	        "inAssociationWithText": "ብምትሕግጋዝ",
	        "sponsoredByText": "መዋሊ",
	        "advertisingPartnersText": "መላፍንትና",
	        "adsByGoogleText": "ኣብ ጎግል ዝወፀ መቓልሕ"
	    },
	    "tr": {
	        "advertisementText": "Reklam",
	        "advertInfoPageUrl": "http://www.bbc.co.uk/turkce/kurumsal/2015/01/000000_advertising_faqs",
	        "inAssociationWithText": "In association with",
	        "sponsoredByText": "Sponsor",
	        "advertisingPartnersText": "Ortakla",
	        "adsByGoogleText": "Google reklamlar"
	    },
	    "uk": {
	        "advertisementText": "Реклама",
	        "advertInfoPageUrl": "/ukrainian/institutional/2015/10/000000_advertising_faq.shtml",
	        "inAssociationWithText": "У партнерстві з",
	        "sponsoredByText": "Спонсор: ",
	        "advertisingPartnersText": "Партнери",
	        "adsByGoogleText": "Реклама Google"
	    },
	    "ur": {
	        "advertisementText": "اشتہار",
	        "advertInfoPageUrl": "http://www.bbc.com/urdu/institutional/2015/08/000000_advertising_faq"
	    },
	    "uz": {
	        "advertisementText": "Реклама",
	        "advertInfoPageUrl": "/uzbek/institutional/2015/10/000000_advertising_faq.shtml",
	        "inAssociationWithText": "билан ҳамкорликда",
	        "sponsoredByText": "Ҳомий",
	        "advertisingPartnersText": "Реклама бўйича шериклар",
	        "adsByGoogleText": "Google рекламаси"
	    },
	    "uz-latin": {
	        "advertisementText": "Reklama",
	        "advertInfoPageUrl": "/uzbek/institutional/2015/10/000000_advertising_faq.shtml",
	        "inAssociationWithText": "bilan hamkorlikda",
	        "sponsoredByText": "Homiy",
	        "advertisingPartnersText": "Reklama bo'yicha sheriklar",
	        "adsByGoogleText": "Google reklamasi"
	    },
	    "vi": {
	        "advertisementText": "Quảng cáo",
	        "advertInfoPageUrl": "http://www.bbc.com/vietnamese/institutional/2015/08/000000_advertising_faq"
	    },
	    "zh-Hans": {
	        "advertisementText": "广告",
	        "advertInfoPageUrl": "http://www.bbc.com/zhongwen/simp/institutional/2015/08/000000_advertising_faq"
	    },
	    "zh-Hans-UKCN": {
	        "advertisementText": "广告",
	        "advertInfoPageUrl": "http://www.bbc.com/ukchina/simp/institutional/2015/08/000000_advertising_faq"
	    },
	    "zh-Hant": {
	        "advertisementText": "廣告",
	        "advertInfoPageUrl": "http://www.bbc.com/zhongwen/trad/institutional/2015/08/000000_advertising_faq"
	    },
	    "zh-Hant-UKCN": {
	        "advertisementText": "廣告",
	        "advertInfoPageUrl": "http://www.bbc.com/ukchina/trad/institutional/2015/08/000000_advertising_faq"
	    }
	};
	
	module.exports = {
	    get: function get(field) {
	        return data[field];
	    },
	    set: function set(field, text) {
	        data[field] = text;
	    },
	    getData: function getData() {
	        return data;
	    },
	    setLocale: function setLocale(lang) {
	        var locale = lang && localeData[lang],
	            x;
	        if (locale) {
	            log.info('setting ad text to locale : ', lang);
	            for (x in locale) {
	                if (locale.hasOwnProperty(x)) {
	                    this.set(x, locale[x]);
	                }
	            }
	        }
	    }
	};

/***/ }),
/* 154 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = {
	    providers: {
	        eDigitalResearch: {
	            key: 'INS-vt29-666188954',
	            url: bbcdotcom.assetPrefix + 'script/vendor/edr/edr.min.js'
	        }
	    },
	    adsEnabled: function adsEnabled() {
	        return bbcdotcom.data !== undefined && (bbcdotcom.data.a !== undefined && bbcdotcom.data.a === 1 || bbcdotcom.data.ads !== undefined && bbcdotcom.data.ads === 1);
	    },
	    surveyEnabled: function surveyEnabled() {
	        return bbcdotcom.flag !== undefined && bbcdotcom.flag.s === 1;
	    },
	    init: function init() {
	        if (bbcdotcom.survey.adsEnabled() && bbcdotcom.survey.surveyEnabled()) {
	            if (typeof window.EDRSurvey === 'undefined') {
	                bbcdotcom.survey.loadScript(document, bbcdotcom.survey.providers.eDigitalResearch.url);
	            }
	        }
	    },
	    loadScript: function loadScript(doc, path, callback) {
	        var s = doc.createElement('script'),
	            a = 'async',
	            b = 'defer';
	        s.setAttribute(a, a);
	        s.setAttribute(b, b);
	        s.type = 'text/javascript';
	        s.src = path;
	        if (typeof callback === 'function') {
	            s.onload = callback;
	        }
	        doc.getElementsByTagName('head')[0].appendChild(s);
	    }
	};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @module Classes
	 *
	 */
	
	var CLASS_BASE = 'bbcdotcom';
	var CLASS_SEP = '-';
	
	var utils = __webpack_require__(143);
	
	/**
	 * Given an arbitrary number of string arguments, return a class name containing all of the arguments
	 * prefixed with CLASS_BASE and concatenated using CLASS_SEP
	 *
	 * @returns {string}
	 */
	function className() {
	    return [CLASS_BASE].concat(Array.prototype.slice.call(arguments)).join(CLASS_SEP);
	}
	
	/**
	 * Given an arbitrary number of string or array arguments, return a space-concatenated list of classes
	 * created by passing each argument through className()
	 *
	 * @returns {string}
	 */
	function classNames() {
	    var i,
	        classes = [],
	        arr = Array.prototype.slice.call(arguments);
	    for (i = 0; i < arr.length; i++) {
	        classes.push(className.apply(null, utils.isString(arr[i]) ? [arr[i]] : arr[i]));
	    }
	    return classes.join(' ');
	}
	
	module.exports = {
	    className: className,
	
	    classNames: classNames,
	
	    /**
	     * Given the bbcdotcom.config object and optionally the current root context (window)
	     * return a space-concatenated list of classes which should be added to some top level DOM element
	     *
	     * @param config
	     * @param rootOverride
	     * @returns {string}
	     */
	    fromConfig: function fromConfig(config, rootOverride) {
	        var finalRoot = rootOverride || window;
	        var classes = [];
	
	        if (config.isAsync()) {
	            classes.push('async');
	        }
	
	        if (config.isAdsEnabled()) {
	            classes.push('ads-enabled');
	        }
	
	        if (finalRoot.config && finalRoot.config.service) {
	            classes.push(['service', finalRoot.config.service]);
	        }
	
	        return classNames.apply(null, classes);
	    }
	};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var config = __webpack_require__(150);
	var sections = __webpack_require__(152);
	var comScoreHelpers = __webpack_require__(157);
	var log = __webpack_require__(144)('lotame');
	
	var Lotame = function Lotame() {
	    this.clientId = '10816';
	    this.consentClientId = '10815';
	    this.consentObject = 'LOTCC';
	    this.lotameObject = 'LOTCC_' + this.clientId;
	    this.noConsent = { analytics: false, crossdevice: false, datasharing: false, targeting: false };
	    this.allConsent = { analytics: true, crossdevice: true, datasharing: true, targeting: true };
	};
	
	Lotame.prototype.init = function () {
	    if (config.isWorldService() || sections.getSection(0) === 'worldservice') {
	        this.clientId = '10826';
	        this.lotameObject = 'LOTCC_' + this.clientId;
	    }
	};
	
	Lotame.prototype.callback = function () {
	    // deprecated
	};
	
	Lotame.prototype.consentCallback = function () {
	    if (config.isSportApp() || !config.isLotameEnabled() || !config.isLotameActive()) {
	        return;
	    }
	
	    function consentCallback() {
	        if (typeof window[this.consentObject] !== 'undefined' && window[this.consentObject].setConsent && document.body.appendChild) {
	            if (config.isNPA()) {
	                window[this.consentObject].setConsent(this.sendDefaultData.bind(this), this.consentClientId, this.noConsent);
	            } else {
	                window[this.consentObject].setConsent(this.sendDefaultData.bind(this), this.consentClientId, this.allConsent);
	            }
	            clearInterval(window.isLotameLoadedInterval);
	        }
	    }
	
	    window.isLotameLoadedInterval = setInterval(consentCallback.bind(this), 500);
	};
	
	Lotame.prototype.sendDefaultData = function (data) {
	    if (config.isSportApp() || !config.isLotameEnabled() || !config.isLotameActive()) {
	        return;
	    }
	    log("Lotame Consent Callback: ", data);
	    var analyticsKeyValues = comScoreHelpers.appendPageCoreKeyValues(comScoreHelpers.getCoreKeyValues()); //dax key values
	    var advertsKeyValues = bbcdotcom.adverts.keyValues.getAll();
	
	    advertsKeyValues['slot'] = bbcdotcom.adsToDisplay;
	    advertsKeyValues['ad-unit-1'] = bbcdotcom.adverts.adUnit.getAdUnit1();
	    advertsKeyValues['ad-unit-2'] = bbcdotcom.adverts.adUnit.getAdUnits2to9();
	
	    this.sendData(analyticsKeyValues);
	    this.sendData(advertsKeyValues);
	};
	
	Lotame.prototype.loadExtra = function (data, key) {
	    this.sendData(data, key);
	};
	
	Lotame.prototype.sendData = function (data, key) {
	    if (config.isSportApp() || !config.isLotameEnabled() || !config.isLotameActive()) {
	        return;
	    }
	    var genProp = data || []; //extra data
	
	    if (window[this.lotameObject]) {
	        window[this.lotameObject].bcp();
	        if (typeof genProp === "string") {
	            window[this.lotameObject].add("genp", (typeof key !== "undefined" ? key : "") + ':' + encodeURIComponent(genProp));
	        } else {
	            for (var e in genProp) {
	                window[this.lotameObject].add("genp", (typeof key !== "undefined" ? key : e) + ':' + encodeURIComponent(genProp[e]));
	            }
	        }
	        return true;
	    }
	    return false;
	};
	
	module.exports = new Lotame();

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getCoreKeyValues = getCoreKeyValues;
	exports.appendPageCoreKeyValues = appendPageCoreKeyValues;
	exports.appendNonPageCoreKeyValues = appendNonPageCoreKeyValues;
	
	var _metricsBuilder = __webpack_require__(158);
	
	var _metricsBuilder2 = _interopRequireDefault(_metricsBuilder);
	
	var _getUserTrackingCookie = __webpack_require__(196);
	
	var _getUserTrackingCookie2 = _interopRequireDefault(_getUserTrackingCookie);
	
	var _getSectionStrings = __webpack_require__(184);
	
	var _getSectionStrings2 = _interopRequireDefault(_getSectionStrings);
	
	var _getPageType = __webpack_require__(182);
	
	var _getPageType2 = _interopRequireDefault(_getPageType);
	
	var _getSyndicatedVideoSource = __webpack_require__(190);
	
	var _getSyndicatedVideoSource2 = _interopRequireDefault(_getSyndicatedVideoSource);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getCoreKeyValues() {
	    var keyValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var metricsBuilder = new _metricsBuilder2['default']();
	
	    // Statics (set values)
	    metricsBuilder['with']('b_imp_src', { value: 'gnl' })['with']('b_vs_un', { value: 'bc' })['with']('ns_c', { value: 'UTF-8' });
	
	    // Use Helpers
	    metricsBuilder['with']('daxCorp', { mapName: 'b_daxcorp' })['with']('adsEnabled', { mapName: 'b_ad_enabled' })['with']('appType', { mapName: ['b_app_type', 'app_type'] })['with']('isApp', { mapName: 'b_is_app' })['with']('referrer', { mapName: 'b_c9' })['with']('collection', { mapName: 'b_collection' })['with']('edition', { mapName: 'b_edition' })['with']('version', { mapName: 'b_imp_ver' })['with']('siteCatalystCookieValue', { mapName: 'b_s_vi' })['with']('pageName', { mapName: ['name', 'b_article_title'] })['with']('analyticsAccountID', { mapName: 'c2' })['with']('analyticsSuite', { mapName: ['ns_site'] })['with']('appName', { mapName: ['ns_ap_an', 'app_name'] })['with']('partner', { mapName: 'b_article_partner' })['with']('license', { mapName: 'b_article_license' });
	
	    // Use Helpers & pass args
	    var sectionStrings = (0, _getSectionStrings2['default'])();
	    metricsBuilder['with']('b_app_name', { value: sectionStrings[0] + '|web' })['with']('siteChannel', { mapName: ['b_site_channel', 'bbc_site', 'prod_name'], args: [sectionStrings] })['with']('siteSection', { mapName: 'b_site_section', args: [sectionStrings] })['with']('siteSubsection1', { mapName: 'b_site_subsec1', args: [sectionStrings] })['with']('siteSubsection2', { mapName: 'b_site_subsec2', args: [sectionStrings] });
	
	    // Conditional metrics
	    var userTrackingCookie = (0, _getUserTrackingCookie2['default'])();
	    metricsBuilder['with']('ns_alias', {
	        preRequisite: function preRequisite() {
	            return userTrackingCookie !== false && cookiesEnabledIEFix();
	        },
	        value: userTrackingCookie
	    });
	
	    var syndicatedVideoSource = (0, _getSyndicatedVideoSource2['default'])();
	    metricsBuilder['with']('v37', {
	        preRequisite: function preRequisite() {
	            return syndicatedVideoSource;
	        },
	        value: syndicatedVideoSource
	    });
	
	    return Object.assign({}, keyValues, metricsBuilder.build());
	}
	
	function appendPageCoreKeyValues() {
	    var keyValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var metricsBuilder = new _metricsBuilder2['default']();
	    var pageType = (0, _getPageType2['default'])();
	    var isIndex = pageType.includes('idx');
	    var isLive = pageType.includes('liv');
	
	    metricsBuilder['with']('pageType', { mapName: 'b_page_type', value: pageType });
	
	    // Conditional
	    metricsBuilder['with']('articleID', { mapName: 'b_article_id', preRequisite: function preRequisite() {
	            return !isIndex;
	        } })['with']('articleTitle', { mapName: 'b_article_title', preRequisite: function preRequisite() {
	            return !isIndex && !isLive;
	        } })['with']('articleUpdatedDate', { mapName: 'b_article_update', preRequisite: function preRequisite() {
	            return !isIndex;
	        }, args: [true] })['with']('articlePublishedDate', { mapName: 'b_article_date', preRequisite: function preRequisite() {
	            return !isIndex;
	        }, args: [true] })['with']('articleLength', { mapName: 'b_article_length', preRequisite: function preRequisite() {
	            return !isIndex;
	        } })['with']('topicNames', { mapName: 'b_topic_names', preRequisite: function preRequisite() {
	            return !isIndex && !isLive;
	        } });
	
	    return Object.assign({}, keyValues, metricsBuilder.build());
	}
	
	function appendNonPageCoreKeyValues() {
	    var keyValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var metricsBuilder = new _metricsBuilder2['default']();
	
	    metricsBuilder['with']('timestamp', { mapName: 'ns__t' })['with']('ns_type', { value: 'hidden' });
	
	    return Object.assign({}, keyValues, metricsBuilder.build());
	};
	
	/**
	 * =================================================================================================================
	 * PRIVATE METHODS
	 * =================================================================================================================
	 */
	
	function cookiesEnabledIEFix() {
	    var nCE = navigator.cookieEnabled,
	        testCookie;
	    if (nCE === false) {
	        return nCE;
	    }
	
	    // stolen from modernizr
	    document.cookie = "cookietest=1"; // set experimental cookie
	    testCookie = document.cookie.indexOf("cookietest=") !== -1;
	    document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT"; // ...and delete it again
	    return testCookie;
	};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isArray2 = __webpack_require__(159);
	
	var _isArray3 = _interopRequireDefault(_isArray2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _index = __webpack_require__(160);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _logger = __webpack_require__(144);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var log = (0, _logger2['default'])('analytics:metrics:metricsBuilder');
	
	var MetricsBuilder = function () {
	    function MetricsBuilder() {
	        _classCallCheck(this, MetricsBuilder);
	
	        this.metrics = new Map();
	    }
	
	    _createClass(MetricsBuilder, [{
	        key: 'with',
	        value: function _with() {
	            var metric = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
	            var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	                _ref$mapName = _ref.mapName,
	                mapName = _ref$mapName === undefined ? null : _ref$mapName,
	                _ref$postProcess = _ref.postProcess,
	                postProcess = _ref$postProcess === undefined ? null : _ref$postProcess,
	                _ref$preRequisite = _ref.preRequisite,
	                preRequisite = _ref$preRequisite === undefined ? null : _ref$preRequisite,
	                _ref$args = _ref.args,
	                args = _ref$args === undefined ? [] : _ref$args,
	                _ref$value = _ref.value,
	                value = _ref$value === undefined ? undefined : _ref$value;
	
	            if (metric) {
	                this.metrics.set(metric, { mapName: mapName, postProcess: postProcess, args: args, preRequisite: preRequisite, value: value });
	            }
	            return this;
	        }
	    }, {
	        key: 'getMetric',
	        value: function getMetric(metric) {
	            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	            var getMetricHelper = 'get' + (metric.charAt(0).toUpperCase() + metric.slice(1));
	            if (_index2['default'].hasOwnProperty(getMetricHelper)) {
	                return _index2['default'][getMetricHelper].apply(_index2['default'], _toConsumableArray(args));
	            }
	            throw new Error('No metric helper for ' + metric + ' (' + getMetricHelper + ')');
	        }
	    }, {
	        key: 'build',
	        value: function build() {
	            var output = {};
	
	            this.metrics.forEach(function (options, metric) {
	                try {
	                    if (options.preRequisite) {
	                        if (!options.preRequisite()) {
	                            return;
	                        }
	                    }
	
	                    var result = void 0;
	                    if (typeof options.value !== 'undefined') {
	                        result = options.value;
	                    } else {
	                        result = this.getMetric(metric, options.args);
	                    }
	
	                    if (options.postProcess) {
	                        result = options.postProcess(result);
	                    }
	
	                    if (options.mapName) {
	                        var mapNames = options.mapName;
	                        if (!(0, _isArray3['default'])(mapNames)) {
	                            mapNames = [mapNames];
	                        }
	
	                        mapNames.forEach(function (mapName) {
	                            output[mapName] = result;
	                        });
	                    } else {
	                        output[metric] = result;
	                    }
	                } catch (err) {
	                    log.warn('Unable to build metric ' + metric, err);
	                }
	            }.bind(this));
	
	            return output;
	        }
	    }]);
	
	    return MetricsBuilder;
	}();
	
	exports['default'] = MetricsBuilder;
	module.exports = exports['default'];

/***/ }),
/* 159 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(161);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var getAdsEnabled = _utils2['default'].getAdsEnabled,
	    getAnalyticsAccountID = _utils2['default'].getAnalyticsAccountID,
	    getAnalyticsSuite = _utils2['default'].getAnalyticsSuite,
	    getAppName = _utils2['default'].getAppName,
	    getAppType = _utils2['default'].getAppType,
	    getArticleID = _utils2['default'].getArticleID,
	    getArticleLength = _utils2['default'].getArticleLength,
	    getArticlePublishedDate = _utils2['default'].getArticlePublishedDate,
	    getArticleTitle = _utils2['default'].getArticleTitle,
	    getArticleUpdatedDate = _utils2['default'].getArticleUpdatedDate,
	    getCollection = _utils2['default'].getCollection,
	    getDaxCorp = _utils2['default'].getDaxCorp,
	    getDomainFromUrl = _utils2['default'].getDomainFromUrl,
	    getEdition = _utils2['default'].getEdition,
	    getIsApp = _utils2['default'].getIsApp,
	    getPageName = _utils2['default'].getPageName,
	    getPageType = _utils2['default'].getPageType,
	    getReferrer = _utils2['default'].getReferrer,
	    getSiteCatalystCookieValue = _utils2['default'].getSiteCatalystCookieValue,
	    getSiteChannel = _utils2['default'].getSiteChannel,
	    getSiteSection = _utils2['default'].getSiteSection,
	    getSiteSubsection1 = _utils2['default'].getSiteSubsection1,
	    getSiteSubsection2 = _utils2['default'].getSiteSubsection2,
	    getTimestamp = _utils2['default'].getTimestamp,
	    getTopicNames = _utils2['default'].getTopicNames,
	    getVersion = _utils2['default'].getVersion,
	    getPartner = _utils2['default'].getPartner,
	    getLicense = _utils2['default'].getLicense;
	exports['default'] = {
	    getAdsEnabled: getAdsEnabled,
	    getAnalyticsAccountID: getAnalyticsAccountID,
	    getAnalyticsSuite: getAnalyticsSuite,
	    getAppName: getAppName,
	    getAppType: getAppType,
	    getArticleID: getArticleID,
	    getArticleLength: getArticleLength,
	    getArticlePublishedDate: getArticlePublishedDate,
	    getArticleTitle: getArticleTitle,
	    getArticleUpdatedDate: getArticleUpdatedDate,
	    getCollection: getCollection,
	    getDaxCorp: getDaxCorp,
	    getDomainFromUrl: getDomainFromUrl,
	    getEdition: getEdition,
	    getIsApp: getIsApp,
	    getPageName: getPageName,
	    getPageType: getPageType,
	    getReferrer: getReferrer,
	    getSiteCatalystCookieValue: getSiteCatalystCookieValue,
	    getSiteChannel: getSiteChannel,
	    getSiteSection: getSiteSection,
	    getSiteSubsection1: getSiteSubsection1,
	    getSiteSubsection2: getSiteSubsection2,
	    getTimestamp: getTimestamp,
	    getTopicNames: getTopicNames,
	    getVersion: getVersion,
	    getPartner: getPartner,
	    getLicense: getLicense
	};
	module.exports = exports['default'];

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getAdsEnabled = __webpack_require__(162);
	
	var _getAdsEnabled2 = _interopRequireDefault(_getAdsEnabled);
	
	var _getAnalyticsAccountID = __webpack_require__(163);
	
	var _getAnalyticsAccountID2 = _interopRequireDefault(_getAnalyticsAccountID);
	
	var _getAnalyticsSuite = __webpack_require__(164);
	
	var _getAnalyticsSuite2 = _interopRequireDefault(_getAnalyticsSuite);
	
	var _getAppName = __webpack_require__(165);
	
	var _getAppName2 = _interopRequireDefault(_getAppName);
	
	var _getAppType = __webpack_require__(166);
	
	var _getAppType2 = _interopRequireDefault(_getAppType);
	
	var _getArticleID = __webpack_require__(167);
	
	var _getArticleID2 = _interopRequireDefault(_getArticleID);
	
	var _getArticleLength = __webpack_require__(168);
	
	var _getArticleLength2 = _interopRequireDefault(_getArticleLength);
	
	var _getArticlePublishedDate = __webpack_require__(169);
	
	var _getArticlePublishedDate2 = _interopRequireDefault(_getArticlePublishedDate);
	
	var _getArticleTitle = __webpack_require__(170);
	
	var _getArticleTitle2 = _interopRequireDefault(_getArticleTitle);
	
	var _getArticleUpdatedDate = __webpack_require__(174);
	
	var _getArticleUpdatedDate2 = _interopRequireDefault(_getArticleUpdatedDate);
	
	var _getCollection = __webpack_require__(175);
	
	var _getCollection2 = _interopRequireDefault(_getCollection);
	
	var _getDaxCorp = __webpack_require__(177);
	
	var _getDaxCorp2 = _interopRequireDefault(_getDaxCorp);
	
	var _getDomainFromUrl = __webpack_require__(178);
	
	var _getDomainFromUrl2 = _interopRequireDefault(_getDomainFromUrl);
	
	var _getEdition = __webpack_require__(179);
	
	var _getEdition2 = _interopRequireDefault(_getEdition);
	
	var _getIsApp = __webpack_require__(180);
	
	var _getIsApp2 = _interopRequireDefault(_getIsApp);
	
	var _getPageName = __webpack_require__(181);
	
	var _getPageName2 = _interopRequireDefault(_getPageName);
	
	var _getPageType = __webpack_require__(182);
	
	var _getPageType2 = _interopRequireDefault(_getPageType);
	
	var _getReferrer = __webpack_require__(183);
	
	var _getReferrer2 = _interopRequireDefault(_getReferrer);
	
	var _getSectionStrings = __webpack_require__(184);
	
	var _getSectionStrings2 = _interopRequireDefault(_getSectionStrings);
	
	var _getSiteCatalystCookieValue = __webpack_require__(185);
	
	var _getSiteCatalystCookieValue2 = _interopRequireDefault(_getSiteCatalystCookieValue);
	
	var _getSiteChannel = __webpack_require__(186);
	
	var _getSiteChannel2 = _interopRequireDefault(_getSiteChannel);
	
	var _getSiteSection = __webpack_require__(187);
	
	var _getSiteSection2 = _interopRequireDefault(_getSiteSection);
	
	var _getSiteSubsection = __webpack_require__(188);
	
	var _getSiteSubsection2 = _interopRequireDefault(_getSiteSubsection);
	
	var _getSiteSubsection3 = __webpack_require__(189);
	
	var _getSiteSubsection4 = _interopRequireDefault(_getSiteSubsection3);
	
	var _getSyndicatedVideoSource = __webpack_require__(190);
	
	var _getSyndicatedVideoSource2 = _interopRequireDefault(_getSyndicatedVideoSource);
	
	var _getTimestamp = __webpack_require__(191);
	
	var _getTimestamp2 = _interopRequireDefault(_getTimestamp);
	
	var _getTopicNames = __webpack_require__(192);
	
	var _getTopicNames2 = _interopRequireDefault(_getTopicNames);
	
	var _getVersion = __webpack_require__(193);
	
	var _getVersion2 = _interopRequireDefault(_getVersion);
	
	var _getPartner = __webpack_require__(194);
	
	var _getPartner2 = _interopRequireDefault(_getPartner);
	
	var _getLicense = __webpack_require__(195);
	
	var _getLicense2 = _interopRequireDefault(_getLicense);
	
	var _sanitiseValues = __webpack_require__(173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = {
	    getAdsEnabled: _getAdsEnabled2['default'],
	    getAnalyticsAccountID: _getAnalyticsAccountID2['default'],
	    getAnalyticsSuite: _getAnalyticsSuite2['default'],
	    getAppName: _getAppName2['default'],
	    getAppType: _getAppType2['default'],
	    getArticleID: _getArticleID2['default'],
	    getArticleLength: _getArticleLength2['default'],
	    getArticlePublishedDate: _getArticlePublishedDate2['default'],
	    getArticleTitle: _getArticleTitle2['default'],
	    getArticleUpdatedDate: _getArticleUpdatedDate2['default'],
	    getCollection: _getCollection2['default'],
	    getDaxCorp: _getDaxCorp2['default'],
	    getDomainFromUrl: _getDomainFromUrl2['default'],
	    getEdition: _getEdition2['default'],
	    getIsApp: _getIsApp2['default'],
	    getPageName: _getPageName2['default'],
	    getPageType: _getPageType2['default'],
	    getReferrer: _getReferrer2['default'],
	    getSectionStrings: _getSectionStrings2['default'],
	    getSiteCatalystCookieValue: _getSiteCatalystCookieValue2['default'],
	    getSiteChannel: _getSiteChannel2['default'],
	    getSiteSection: _getSiteSection2['default'],
	    getSiteSubsection1: _getSiteSubsection2['default'],
	    getSiteSubsection2: _getSiteSubsection4['default'],
	    getSyndicatedVideoSource: _getSyndicatedVideoSource2['default'],
	    getTimestamp: _getTimestamp2['default'],
	    getTopicNames: _getTopicNames2['default'],
	    getVersion: _getVersion2['default'],
	    sanitiseKeyValues: _sanitiseValues.sanitiseKeyValues,
	    sanitiseLabelValue: _sanitiseValues.sanitiseLabelValue,
	    sanitisePageName: _sanitiseValues.sanitisePageName,
	    getPartner: _getPartner2['default'],
	    getLicense: _getLicense2['default']
	};
	module.exports = exports['default'];

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getAdsEnabled;
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getAdsEnabled() {
	    return _config2['default'].isAdsEnabled() ? 1 : 0;
	}
	module.exports = exports['default'];

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getAnalyticsAccountID;
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getAnalyticsAccountID() {
	    return _config2['default'].getAnalyticsAcctId();
	}
	module.exports = exports['default'];

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getAnalyticsSuite;
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getAnalyticsSuite() {
	    return _config2['default'].getAnalyticsSuite();
	}
	module.exports = exports['default'];

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getAppName;
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getAppName() {
	    return _config2['default'].getAppName();
	}
	module.exports = exports['default'];

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getAppType;
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getAppType() {
	    if (_config2['default'].isSportApp() || bbcdotcom.analytics.isScwHandlerUsed) {
	        return 'mobile-app';
	    } else if (typeof orb !== 'undefined' && typeof orb.fig === 'function' && orb.fig('mb') === 1 || _config2['default'].getWindowLocation().hostname.search(/m.*.bbc.co/) === 0) {
	        return 'mobile-web';
	    } else {
	        return 'web';
	    }
	}
	module.exports = exports['default'];

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getArticleID;
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var NUL = 'na';
	
	function getArticleID(href) {
	    if (typeof href === 'undefined' || href === '') {
	        href = _config2['default'].getWindowLocation().href;
	    }
	    if (/.*[\-\/](\d{7,9})($|(\/[a-z]*))/.test(href)) {
	        return RegExp.$1;
	    }
	    return NUL;
	}
	module.exports = exports['default'];

/***/ }),
/* 168 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getArticleLength;
	function getArticleLength() {
	
	    /** Responsive News */
	    if (typeof window.config !== 'undefined' && typeof window.config.asset !== 'undefined' && typeof window.config.asset.length !== 'undefined' && window.config.asset.length !== null) {
	        // Responsive News
	        return window.config.asset.length;
	    }
	
	    /** OneSport */
	    var storyBody = document.getElementById('story-body');
	    if (typeof storyBody !== 'undefined' && storyBody !== null) {
	        return getElementTextLength(storyBody);
	    }
	
	    /** Old Sport */
	    var article = document.getElementsByClassName('article');
	    if (typeof article !== 'undefined' && article !== null && article.length === 1) {
	        var articleElement = article[0];
	        return getElementTextLength(articleElement);
	    }
	
	    /** Old Sport Map */
	    var empContent = document.getElementById('emp-content');
	    if (typeof empContent !== 'undefined' && empContent !== null) {
	        return getElementTextLength(empContent);
	    }
	
	    /** Old Weather */
	    var layoutA = document.getElementsByClassName('layout-block-a');
	    if (typeof layoutA !== 'undefined' && layoutA !== null && layoutA.length === 1) {
	        var layoutAElement = layoutA[0];
	        return getElementTextLength(layoutAElement);
	    }
	
	    return null;
	};
	
	function getElementTextLength(element) {
	
	    // Check the element
	    if (typeof element === 'undefined' || element === null) {
	        return null;
	    }
	
	    try {
	
	        if (typeof element.innerText !== 'undefined' && element.innerText !== null && typeof element.innerText.length !== 'undefined' && element.innerText.length !== null) {
	            // Use innerText as we need to take into consideration layout, discounting hidden elements etc
	            return element.innerText.length;
	        }
	
	        if (typeof element.textContent !== 'undefined' && element.textContent !== null && typeof element.textContent.length !== 'undefined' && element.textContent.length !== null) {
	            // innerText is not supported in Firefox, so use textContent
	            return element.textContent.length;
	        }
	    } catch (e) {
	        return null;
	    }
	
	    return null;
	};
	module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getArticlePublishedDate;
	
	var _utils = __webpack_require__(143);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * @returns {*} Human-readable (eg "2011/12/12 11:56:10") OR second timestamp
	 */
	function getArticlePublishedDate(asTimestamp) {
	    var date = null,
	        sportDesktopDate = _utils2['default'].getMetaNameContent('DCTERMS.created'),
	        sportResponsiveDate = _utils2['default'].getMetaPropertyContent('rnews:datePublished');
	
	    if (window.config && window.config.asset && window.config.asset.first_created && window.config.asset.first_created.date) {
	        // Responsive News
	        // eg 2015-01-08 03:44:31
	        date = window.config.asset.first_created.date;
	    } else if (sportDesktopDate !== '') {
	        // Sport Desktop
	        // eg 2011/12/12T11:56:10+00:00
	        date = sportDesktopDate.replace('T', ' ').replace('+00:00', '');
	    } else if (sportResponsiveDate !== '') {
	        // Sport Responsive
	        // eg 2015/09/23 9:45:36
	        date = sportResponsiveDate;
	    }
	
	    if (date === null || date.length === 0) {
	        return null;
	    }
	
	    date = date.replace(/-/g, '/');
	
	    if (typeof asTimestamp !== 'undefined' && asTimestamp === true) {
	        try {
	            return Date.parse(date) / 1000;
	        } catch (e) {
	            return null;
	        }
	    }
	    return date;
	};
	module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getArticleTitle;
	
	var _helper = __webpack_require__(171);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	var _sanitiseValues = __webpack_require__(173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getArticleTitle() {
	    return (0, _sanitiseValues.sanitiseLabelValue)(_helper2['default'].getPageName()).replace(/[\s]/g, '_').replace(/_{2,}/g, '_');
	}
	module.exports = exports['default'];

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/* global window, document, bbcdotcom, orb, screen */
	var utils = __webpack_require__(143);
	var config = __webpack_require__(150);
	var sections = __webpack_require__(152);
	var log = __webpack_require__(144)('analytics:helper');
	var objects = __webpack_require__(172);
	var getArticleID = __webpack_require__(167);
	
	var sectionStrings = ['', '', '', ''],
	    alreadyLinked = false,
	    clickListener,
	    // remove me, I dare you :-o
	verticalsRegexp = /^(autos|capital|culture|earth|future|travel)$/,
	    LINK_TRACKING_SECTIONS = ['homepage', 'news', 'sport', 'wwscripts', 'reel'],
	    // TLDs on website permitted to have link-tracking
	TRACKING_TIMEOUT = 500,
	    NUL = 'na';
	
	var isBBCUri = function isBBCUri(uri) {
	    return (/^http(|s):\/\/[a-z0-9\-.]+.bbc.co(m|.uk)(\/)?(.*)?/.test(uri)
	    );
	};
	
	var isLiveEvent = function isLiveEvent() {
	    // This is bad, we should be getting the sites to report this instead of inspecting the URI.
	    var re = /(news|sport)\/live\//;
	    return re.exec(sections.getSections().join("/")) !== null;
	};
	
	/**
	 * Outbrain links to traffic.outbrain.com but comes back to the bbc.com (therefore use the link tracking "cookie drop"
	 * method of tracking)
	 * eg <a href="http://traffic.outbrain.com/redirect?=http://www.bbc.com/news/story-12345">
	 */
	var isExternalRedirectToBBCUri = function isExternalRedirectToBBCUri(uri) {
	    return (/^http(|s):\/\/traffic\.outbrain\.com/.test(uri)
	    );
	};
	
	/**
	 * Uses window.location or config.setSections([]) to derive v6, v7 and v8 section values
	 */
	var determineSections = function determineSections(separator) {
	    if (typeof separator === 'undefined') {
	        separator = '>';
	    }
	    var sects = sections.getSections('analytics', true);
	    sectionStrings = ['', '', '', ''];
	    // eg v6=news for http://www.bbc.com/news
	    sectionStrings[0] = sects[0];
	    if (typeof sects[1] !== 'undefined' && sects[1]) {
	        if (sects[0] === 'news' && (sects[1].indexOf('world') === 0 || sects[1] === 'specialfeatures')) {
	            // Goes up to 4 deep eg /news/world/asia/india
	            // Only /news/world/* & /news/specialfeatures/*
	            if (typeof sects[3] !== 'undefined' && sects[3] && sects[2]) {
	                // eg v7=news>world>asia       for http://www.bbc.com/news/world/asia/india
	                // eg v8=news>world>asia>india for http://www.bbc.com/news/world/asia/india
	                sectionStrings[1] = sects[0] + separator + sects[1] + separator + sects[2];
	                sectionStrings[2] = sectionStrings[1] + separator + sects[3];
	            } else if (typeof sects[2] !== 'undefined' && sects[2]) {
	                // eg v7=news>world>asia for http://www.bbc.com/news/world/asia
	                // eg v8=news>world>asia for http://www.bbc.com/news/world/asia
	                sectionStrings[1] = sects[0] + separator + sects[1] + separator + sects[2];
	            } else {
	                // eg v7=news>world for http://www.bbc.com/news/world
	                // eg v8=news>world for http://www.bbc.com/news/world
	                sectionStrings[1] = sects[0] + separator + sects[1];
	            }
	        } else if (sects[0] === 'sport') {
	            // Goes up to 5 deep - TRY TO KEEP THIS GENERIC PLEASE - NO EVENT SPECIFIC RULES!!
	            // eg /sport/commonwealth-games/2014/results/sports/boxing/mens-heavy-91kg
	
	            // eg v7=sport>football for http://www.bbc.com/sport/football/teams/XYZ
	            // eg v7=sport>commonwealth-games-2014
	            sectionStrings[1] = sects[0] + separator + sects[1];
	            if (typeof sects[2] !== 'undefined' && sects[2]) {
	                // eg v8=sport>football>teams for http://www.bbc.com/sport/football/teams/XYZ
	                // eg v8=sport>commonwealth-games-2014>results
	                sectionStrings[2] = sectionStrings[1] + separator + sects[2];
	                if (typeof sects[4] !== 'undefined' && sects[4] && sects[3] && sects[2]) {
	                    // eg v9=sport>commonwealth-games-2014>results>boxing>mens-heavy-91kg
	                    sectionStrings[3] = sectionStrings[2] + separator + sects[3] + separator + sects[4];
	                } else if (typeof sects[3] !== 'undefined' && sects[3] && sects[2]) {
	                    // eg v9=sport>football>teams>XYZ
	                    // eg v9=sport>commonwealth-games-2014>results>boxing>mens-heavy-91kg
	                    sectionStrings[3] = sectionStrings[2] + separator + sects[3];
	                }
	            }
	        } else {
	            // Standard, don't go as deep - only 3 deep
	            if (typeof sects[2] !== 'undefined' && sects[2]) {
	                // eg v7=news>business             for http://www.bbc.com/news/business/market_data/overview/
	                // eg v8=news>business>market_data for http://www.bbc.com/news/business/market_data/overview/
	                sectionStrings[1] = sects[0] + separator + sects[1];
	                sectionStrings[2] = sectionStrings[1] + separator + sects[2];
	            } else {
	                // eg v7=news>business for http://www.bbc.com/news/business/
	                // eg v8=news>business for http://www.bbc.com/news/business/
	                sectionStrings[1] = sects[0] + separator + sects[1];
	            }
	        }
	    }
	    if (sectionStrings[1] === '') {
	        sectionStrings[1] = sectionStrings[0];
	    }
	    if (sectionStrings[2] === '') {
	        sectionStrings[2] = sectionStrings[1];
	    }
	    return sectionStrings;
	};
	
	var getStoryHeadline = function getStoryHeadline() {
	    var cpsHeadline,
	        headline = config.getHeadline();
	    if (headline !== '') {
	        // Populated by webservice or via "config.setHeadline('The story headline')"
	        return headline;
	    }
	    if (typeof window.config !== 'undefined' && typeof window.config.asset !== 'undefined' && typeof window.config.asset.headline !== 'undefined' && window.config.asset.headline !== '') {
	        // Responsive News
	        return window.config.asset.headline;
	    }
	    cpsHeadline = utils.getMetaNameContent('Headline');
	    if (cpsHeadline !== '') {
	        // Desktop News & Sport (CPS stack)
	        return cpsHeadline;
	    }
	    return 'na';
	};
	
	var getPageEdition = function getPageEdition() {
	    var edition = void 0;
	
	    // Do not return edition for japanese [BBCCOM-7842]
	    if (getVertical() === 'japanese') {
	        return NUL;
	    }
	
	    if (typeof window.config !== 'undefined' && typeof window.config.asset !== 'undefined' && typeof window.config.asset.edition !== 'undefined' && window.config.asset.edition !== '') {
	        // Responsive News
	        return window.config.asset.edition;
	    }
	    edition = utils.getMetaNameContent('CPS_AUDIENCE');
	    if (edition !== '') {
	        // Desktop News & Desktop Sport (CPS stack)  ALSO Responsive News
	        return edition;
	    }
	    edition = utils.getMetaPropertyContent('wwhp-edition');
	    if (edition !== '') {
	        // International homepage edition
	        return edition;
	    }
	    return NUL;
	};
	
	/**
	 * Returns the page type
	 * @returns {String} eg story, index, video, story-video
	 */
	var getPageType = function getPageType(href) {
	    href = href || config.getWindowLocation().href;
	    var s = sections.getSectionsForUri(href, 'analytics');
	    var type = config.getType();
	
	    if (s[0] === 'homepage') {
	        type = 'INDEX';
	    } else if (s[0] === 'reel' && s.length > 1) {
	        type = 'MAP';
	    } else if (isLiveEvent()) {
	        type = 'LIVE-EVENT';
	    } else if (config.isStickyPlayerPage()) {
	        type = 'VIDEO-STICKY';
	    } else if (type === '') {
	        if (window.config && window.config.asset && window.config.asset.type) {
	            // Responsive News
	            type = window.config.asset.type;
	        } else if (window.onesport && window.onesport.config && window.onesport.config.omnitureAssetType) {
	            // Responsive Sport (onesport)
	            type = window.onesport.config.omnitureAssetType; // eg STORY, INDEX, MAP
	        } else if (window.bbc && bbc.fmtj && bbc.fmtj.page && bbc.fmtj.page.assetType) {
	            // Old N&K/CPS News & Sport desktop
	            type = bbc.fmtj.page.assetType;
	        } else if (s[0] === 'sport' && s[1] === 'av' || s[0] === 'sport' && href.indexOf('/sport/av') > 0) {
	            // Sport pages missing onesport var
	            type = 'AV';
	        }
	    }
	
	    // If type is not a string at this point, make sure it is and convert it to upper case
	    type = utils.isString(type) ? type.toUpperCase() : '';
	
	    switch (type) {
	        case 'AV':
	        case 'MAP':
	        case 'MEDIA_ASSET':
	            type = 'VIDEO';
	            break;
	        case 'STY':
	            type = 'STORY';
	            break;
	        case 'IDX':
	            type = 'INDEX';
	            break;
	        case 'LEP':
	            type = 'LIVE-EVENT';
	            break;
	        case 'LIVE_EVENT':
	            type = 'LIVE-EVENT';
	            break;
	        default:
	            break;
	    }
	
	    if (type === 'STORY' && config.isContinuousPlayPage()) {
	        type = 'STORY-VIDEO';
	    }
	
	    return type || (/.*(-|\/)(\d{7,9})$/.test(href) ? 'STORY' : 'INDEX');
	};
	
	/**
	 * Returns the page type
	 * @returns {String} eg story, index, video, story-video
	 */
	var getEmbedPageName = function getEmbedPageName(href) {
	    href = href || config.getWindowLocation().href;
	    href = href.split(/[?#]/)[0];
	    var s = sections.getSectionsForUri(href, 'analytics'),
	        pageType = getPageType().toLowerCase(),
	        articleId = getArticleID(href),
	        embedPageName = s.join("."),
	        ind,
	        overrides = {
	        ".live": "",
	        "world-africa": "world.africa",
	        "entertainment-arts": "entertainment_and_arts",
	        "us-canada": "us_and_canada",
	        "video-audio": "video_and_audio",
	        "world.radio-tv": "world_radio_and_tv",
	        "blogs-the-papers": "blogs.the-papers",
	        "worldservice.": ""
	    };
	
	    switch (pageType) {
	        case 'corr_story':
	            pageType = ".correspondent_story";
	            break;
	        case 'index':
	            pageType = "";
	            break;
	        case 'live-event':
	            pageType = ".live_coverage";
	            break;
	        default:
	            pageType = "." + pageType;
	            break;
	    }
	    for (ind in overrides) {
	        embedPageName = embedPageName.replace(ind, overrides[ind]);
	    }
	    return embedPageName.replace(/-/g, '_') + pageType + (articleId !== NUL ? "." + articleId : '') + "." + "page";
	};
	
	var sanitisePageName = function sanitisePageName(pageName) {
	    pageName = pageName.replace(/"/g, "'"); // remove double quotes
	    pageName = pageName.replace(/(^bbc (news|sport) \- )/i, ''); // Remove 'bbc news - title' etc
	    pageName = pageName.replace(/( \- bbc (news|sport)$)/i, ''); // Remove 'title - bbc news' etc
	    pageName = pageName.replace(/( \- BBCニュース$)/i, ''); // Remove Japanese title
	    // pageName = pageName.replace(/^weather\/0/, 'weather'); // Treat /0 pages like normal pages
	    return pageName.toLowerCase();
	};
	
	/**
	 * Use document.title to get title of page
	 */
	var getPageName = function getPageName() {
	    if (typeof config.getWindowDocument().title === 'undefined') {
	        return '';
	    } else {
	        return sanitisePageName(config.getWindowDocument().title);
	    }
	};
	
	/**
	 * Use url to get page parameter used by comScore
	 */
	var getPageNameComScore = function getPageNameComScore() {
	    var path = config.getWindowLocation().pathname.replace(/\.app$/, '').replace(/news\/av\//, "news/").replace(/^\/weather\/0/, '/weather').replace(/^\/sport\/(uk|world)/, '/sport'),
	        // window.location.pathname
	    pathSlashes = path.toLowerCase().slice(1); // trim leading slash
	
	    if (pathSlashes.slice(-1) === '/') {
	        // trim trailing slash
	        pathSlashes = pathSlashes.slice(0, -1);
	    }
	
	    var pathBits = pathSlashes.split('/');
	    var response = void 0;
	
	    var vertical = getVertical();
	    if (pathBits.length === 1) {
	        if (vertical === '' || vertical === 'wwhp') {
	            // homepage
	            response = 'homepage.home';
	        } else if (vertical === 'news' || vertical === 'weather' || vertical === 'sport' || vertical === 'japanese' || vertical === 'reel') {
	            response = vertical + '.home';
	        } else {
	            response = getPageName();
	        }
	    } else {
	        if (vertical === 'sport' && pathBits.length > 1 && pathBits[1] === '0') {
	            // trim /0
	            if (pathBits.length === 2) {
	                response = pathBits[0] + '.home';
	            } else {
	                response = pathBits[0] + '.' + pathBits.slice(2).join('.');
	            }
	        } else if (vertical === 'weather' || vertical === 'sport') {
	            response = pathBits.join('.').replace(/^news\.(uk|world|us|asia)\.(health)(?!-)/, "news.$2");
	        } else if (vertical === 'news' || vertical === 'japanese') {
	            response = getEmbedPageName();
	        } else if (vertical === 'reel') {
	            response = pathBits.join('.');
	        } else {
	            // not GNL, use old value based on title
	            response = getPageName();
	        }
	    }
	
	    return response;
	};
	
	var getVertical = function getVertical() {
	    var path = config.getWindowLocation().pathname.replace(/\.app$/, ''); // window.location.pathname
	    var pathSlashes = path.toLowerCase().slice(1); // trim leading slash
	
	    if (pathSlashes.slice(-1) === '/') {
	        // trim trailing slash
	        pathSlashes = pathSlashes.slice(0, -1);
	    }
	
	    var pathBits = pathSlashes.split('/');
	    return pathBits.length > 0 ? pathBits[0] : '';
	};
	
	/**
	 * Uri encode values - All values are encoded except those which are replaceable eg "{events}"
	 */
	var encodeValue = function encodeValue(str) {
	    if (/^\{[a-zA-Z0-9\-_]+\}$/.test(str)) {
	        return str;
	    }
	    return encodeURIComponent(str);
	};
	
	/**
	 * Determining what type of link was clicked and what event and linkTrackingName should be used
	 *
	 * @param object linkObj The element clicked
	 */
	var getLinkTrackingProperties = function getLinkTrackingProperties(linkObj) {
	    var text = '',
	        linkSections = sections.getSectionsForUri(linkObj.href, 'analytics');
	    if (typeof linkObj.text !== 'undefined') {
	        text = linkObj.text;
	    } else if (typeof linkObj.innerText !== 'undefined') {
	        text = linkObj.innerText;
	    }
	    var promoted = linkSections[0]; // eg /sport/blah => 'sport'
	    promoted = promoted === 'unknown' ? 'external' : promoted;
	    // Ensures that if the name contains 4x hyphens, trim the rest of the title
	    var sanitiseLinkName = function sanitiseLinkName(str) {
	        str = utils.trim(str).toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
	        return str.indexOf('----') === -1 ? str : str.substr(0, str.indexOf('----'));
	    };
	    var getLinkNameFromUrlForVerticals = function getLinkNameFromUrlForVerticals(href) {
	        var matched = href.match(/.*\/[0-9]+\-([^\/]+)/);
	        return matched !== null ? matched[1] : linkSections.join('>');
	    };
	    // rev or data-track
	    var linkObjTrack = '';
	    if (typeof linkObj.dataset !== 'undefined' && typeof linkObj.dataset.track !== 'undefined' && linkObj.dataset.track !== '' // NOTE: Unit tests are mocking linkObj therefore linkObj.dataset['track'] not work
	    ) {
	            // Use data-track attribute
	            linkObjTrack = linkObj.dataset.track;
	        } else if (linkObj.getAttribute('data-track')) {
	        // IE10 and lower don't support dataset
	        linkObjTrack = linkObj.getAttribute('data-track');
	    } else if (typeof linkObj.rev !== 'undefined' && linkObj.rev !== '') {
	        // Use rev attribute
	        linkObjTrack = linkObj.rev;
	    }
	    // Conditionals to determine what information to collect
	    if (linkObj.className.indexOf('external-link') !== -1) {
	
	        // External link
	        // eg <a class="external-link" rev="">
	        // eg <a class="external-link">
	        return {
	            'events': false,
	            'promoted': 'external',
	            'linkName': sanitiseLinkName(text),
	            'moduleName': false
	        };
	    } else if ((sectionStrings[0] === 'homepage' || sectionStrings[0] === 'wwscripts') && linkObjTrack.indexOf('|') !== -1) {
	        // Homepage Link Tracking
	        // eg <a rev="spotlight|video">
	        // eg <a data-track="spotlight|video">
	        // <moduleName>|<linkAssetType>
	        var htmlRevArr = linkObjTrack.split('|');
	        var linkName = linkSections[0].match(verticalsRegexp) ? getLinkNameFromUrlForVerticals(linkObj.href) : sanitiseLinkName(text);
	        var parent = utils.getParentElementByClass(linkObj, 'module2'); // desktop <div class="module2">
	        if (parent === false) {
	            parent = utils.getClosestElementByTagName(linkObj, 'section'); // responsive <section>
	        }
	        var linkPosition = utils.getAnchorPositionWithinElement(parent, linkObj.href);
	        if (htmlRevArr.length > 0) {
	            return {
	                'events': false,
	                'promoted': promoted.toLowerCase(),
	                'linkName': linkName,
	                'moduleName': htmlRevArr[0].toLowerCase(),
	                'linkType': typeof htmlRevArr[1] === 'string' ? htmlRevArr[1].toLowerCase() : NUL,
	                'linkPosition': linkPosition !== false && linkPosition !== 0 ? linkPosition : NUL
	            };
	        }
	    } else if (utils.parentHasClass(linkObj, 'bbccom_adsense', undefined, true)) {
	        // Google Adsense
	        return {
	            'events': false,
	            'promoted': 'ads',
	            'linkName': 'adsense',
	            'moduleName': 'google-adsense'
	        };
	    } else if (utils.parentHasClass(linkObj, 'bbccom_advert', undefined, true)) {
	        // BBCCOM-6147: Don't interfere with advert links (Doubleclick display ads)
	        return false;
	    } else if (utils.parentHasClass(linkObj, 'bbc-st-buttons') || utils.parentHasClass(linkObj, 'share__tool')) {
	        // Share Tools
	        // .bbc-st-buttons - News & Sport Desktop Share top and bottom
	        // .share__tool - News Responsive Share bottom
	        return {
	            'events': 'event23',
	            'promoted': 'share-tools',
	            'linkName': sanitiseLinkName(text), // eg Facebook, Twitter
	            'moduleName': 'share-tools',
	            'v': {
	                '35': sanitiseLinkName(text) + '-share', // v35
	                '39': sectionStrings[1] + '-' + getPageName() // v39
	            }
	        };
	    } else if (sectionStrings[0] === 'news' && (sectionStrings[1] === 'news' || sectionStrings[1] === 'news.0')) {
	
	        // News Front Page
	        parent = utils.getParentElementByAttribute(linkObj, 'data-entityid', 10);
	        var attrName = parent ? parent.getAttribute('data-entityid') : ""; // most-popular-watched-1 or us-stories#1
	        var moduleName = attrName.match(/(.+?)(-|#)(\d)/)[1]; // most-popular-watched or us-stories
	        linkPosition = attrName.match(/(\d{1,}$)/)[0]; // 1
	        return {
	            'promoted': promoted,
	            'moduleName': moduleName ? moduleName : NUL,
	            'linkName': sanitiseLinkName(text),
	            'linkPosition': linkPosition ? linkPosition : NUL,
	            'linkSection': linkSections.join(".")
	        };
	    } else if ((sectionStrings[0] === 'news' || sectionStrings[0] === 'wwscripts') && utils.parentHasClass(linkObj, 'hyper-promotional-content', 5)) {
	
	        // Elsewhere on the BBC module (News desktop)
	        return {
	            'events': false,
	            'promoted': 'elsewhere',
	            'linkName': sanitiseLinkName(text), // Story link
	            'moduleName': 'elsewhere'
	        };
	    } else if (linkObj.href.indexOf('outbrain.com') !== -1) {
	
	        // Outbrain tracking BBCCOM-5543, BBCCOM-6133
	        promoted = 'outbrain-module';
	        var parentEl = utils.getParentElementByClass(linkObj, 'OUTBRAIN', 5);
	        if (typeof parentEl.dataset.widgetId !== 'undefined') {
	            var widgetId = parseInt(parentEl.dataset.widgetId.substr(3, 1), 10);
	            var mapping = {
	                'videos-on-news': [1, 5, 6], // AR_1, AR_5, AR_6
	                'elsewhere-on-news': [2, 3, 7], // AR_2, AR_3, AR_7
	                'others-sites': [4, 9], // AR_4, AR_9
	                'elsewhere-on-features': [8] // AR_8
	            };
	            var m;
	            for (m in mapping) {
	                if (mapping[m].indexOf(widgetId) !== -1) {
	                    promoted = m;
	                    break;
	                }
	            }
	        }
	        return {
	            'events': false,
	            'promoted': promoted,
	            'linkName': sanitiseLinkName(text), // Story link
	            'moduleName': 'outbrain-recommends'
	        };
	    } else if (sectionStrings[0] === 'reel') {
	        var linkDetails = linkObjTrack.split('|');
	
	        var section = 'reel.home';
	        if (linkSections.length === 2) {
	            section = 'reel.playlists';
	        }
	        if (linkSections.length > 2) {
	            if (linkSections[2] === 'playlist') {
	                section = 'reel.playlist';
	            }
	            if (linkSections[2] === 'video') {
	                section = 'reel.video';
	            }
	        }
	
	        var title = sanitiseLinkName(text);
	        if (linkObj.getAttribute) {
	            if (linkObj.getAttribute('aria-label')) {
	                title = sanitiseLinkName(linkObj.getAttribute('aria-label'));
	            }
	        }
	
	        var position = '';
	        var total = '';
	        if (linkDetails.length > 1) {
	            position = linkDetails[1];
	        }
	        if (linkDetails.length > 2) {
	            total = linkDetails[2];
	        }
	
	        return {
	            'events': false,
	            'promoted': 'reel',
	            'moduleName': linkDetails[0],
	            'linkName': title,
	            'linkPosition': position,
	            'totalLinks': total,
	            'section': section
	        };
	    }
	    return false; // not a link to be tracked
	};
	
	var getAnalyticsUri = function getAnalyticsUri() {
	    return bbcdotcom.analytics.sscHelper.getAnalyticsLocation();
	};
	
	/**
	 * Load an image element to track the event
	 *
	 * @param string url
	 * @param function callback Used to delay page until image written into page (blocking)
	 */
	var loadTrackingImage = function loadTrackingImage(url, callback) {
	    url = getAnalyticsUri() + url;
	    log('Tracking URL: ', url);
	    var img = document.createElement('img');
	    if (typeof callback === 'function') {
	        img.onload = callback;
	    }
	    if (typeof window.IS_GNL_JS_UNIT_TEST === 'undefined') {
	        // Do not make comScore request when running unit tests
	        img.src = url;
	    }
	};
	
	var processDelayTrackingCookie = function processDelayTrackingCookie(delayTrackingCookieName, trackingRequests) {
	
	    var cookieValue = utils.getCookie(delayTrackingCookieName);
	    if (typeof cookieValue !== 'undefined' && cookieValue.length > 0) {
	        log('Delayed link tracking get ' + delayTrackingCookieName + ' cookie:' + cookieValue);
	        // eg /b/ss/bbcwglobaldev/1/H.22.1/s4757043230347?AQB=1&bw=1920&bh=705&c=24&cc=USD&cdp=2&ce=UTF-8&ndh=1...
	        loadTrackingImage(cookieValue);
	        trackingRequests['http'].push(cookieValue);
	        utils.deleteCookie(delayTrackingCookieName);
	    }
	};
	
	var trackLinkByDroppingCookie = function trackLinkByDroppingCookie(doTrackCallback, delayTrackingCookieName, customTrackingKeyValues) {
	    // doTrack() does not make request. Instead, the request is piped into a cookie
	    var cookieVal = doTrackCallback(customTrackingKeyValues, 'link', undefined, false);
	    utils.setCookie(delayTrackingCookieName, cookieVal, 60);
	    log('link tracking set ' + delayTrackingCookieName + ' cookie:' + cookieVal);
	};
	
	/**
	 * Problem with this approach: cannot CTRL-click to open link in new window
	 */
	var trackLinkAndResumeNavigation = function trackLinkAndResumeNavigation(doTrackCallback, uri, event, customTrackingKeyValues) {
	    var eventHandled = false,
	        timeoutId = null,
	        resume = !utils.isEventDefaultPrevented(event),
	        resumeNavigation = function resumeNavigation(uri, event, timeout, resume) {
	        clearTimeout(timeout);
	        if (event && !eventHandled && resume && uri) {
	            utils.navigateTo(uri);
	        }
	        eventHandled = true;
	    };
	    utils.cancelEvent(event);
	    doTrackCallback(customTrackingKeyValues, 'link', function (tracked) {
	        resumeNavigation(uri, event, timeoutId, resume);
	    });
	    timeoutId = setTimeout(function () {
	        resumeNavigation(uri, event, timeoutId, resume);
	    }, TRACKING_TIMEOUT);
	};
	
	var trackLink = function trackLink(doTrackCallback, delayTrackingCookieName, uri, event, keyValues) {
	    if (isBBCUri(uri) || isExternalRedirectToBBCUri(uri)) {
	        // Drop cookie and collect on other BBC page
	        trackLinkByDroppingCookie(doTrackCallback, delayTrackingCookieName, keyValues);
	    } else {
	        // Standard
	        trackLinkAndResumeNavigation(doTrackCallback, uri, event, keyValues);
	    }
	};
	
	/**
	 * Used to attach events to page.
	 * This must be called from within <body>, not <head>
	 */
	var applyLinkTrackingToPageElements = function applyLinkTrackingToPageElements(processLinkCallback) {
	    var rootSection = sections.getSection(0, 'analytics', true);
	    if (rootSection && LINK_TRACKING_SECTIONS.indexOf(rootSection) === -1) {
	        // Link tracking is not required on this page
	        return;
	    }
	    if (alreadyLinked === true) {
	        return;
	    }
	    clickListener = function clickListener(event) {
	        // Whatever you're thinking, don't do it.  Do not put "var clickListener"...
	        var linkObj = utils.getClosestElementByTagName(event.target || event.srcElement, 'a', true);
	        if (linkObj !== false) {
	            processLinkCallback(linkObj, event);
	        }
	    };
	    // Event for body click.  Using JavaScript Event Bubbling to identify what was clicked on
	    // within the page (besides <body>).
	    utils.addEvent(document.getElementsByTagName('body')[0], 'click', clickListener);
	    alreadyLinked = true;
	};
	
	/**
	 * Return the URI used to build the sections array
	 *
	 * @returns {string}
	 */
	var getUriForSections = function getUriForSections() {
	    var location = config.getWindowLocation(),
	        uri = location.href,
	        assetUri = objects('config.asset.asset_uri');
	
	    if (config.getType() === 'VIDEO-EMBED' && assetUri) {
	        uri = location.protocol + '//' + location.hostname + assetUri;
	    }
	
	    return uri;
	};
	
	/**
	 * Determine the av format (audio|video) for a given playlist item. For now we assume everything that isn't a
	 * radioProgramme is video. List of available kinds can be found below.
	 *
	 * @see https://confluence.dev.bbc.co.uk/display/mp/Loading+a+Playlist+with+an+object#LoadingaPlaylistwithanobject-kinds
	 * @param {string} kind
	 * @returns {string}
	 */
	var getAvFormatFromKind = function getAvFormatFromKind(kind) {
	    return kind === 'radioProgramme' ? 'audio' : 'video';
	};
	
	module.exports = {
	    isBBCUri: isBBCUri,
	    determineSections: determineSections,
	    getStoryHeadline: getStoryHeadline,
	    getPageEdition: getPageEdition,
	    getVertical: getVertical,
	    getPageType: getPageType,
	    sanitisePageName: sanitisePageName,
	    getAnalyticsUri: getAnalyticsUri,
	    getPageName: getPageName,
	    getPageNameComScore: getPageNameComScore,
	    getEmbedPageName: getEmbedPageName,
	    encodeValue: encodeValue,
	    getLinkTrackingProperties: getLinkTrackingProperties,
	    loadTrackingImage: loadTrackingImage,
	    processDelayTrackingCookie: processDelayTrackingCookie,
	    trackLink: trackLink,
	    applyLinkTrackingToPageElements: applyLinkTrackingToPageElements,
	    getUriForSections: getUriForSections,
	    getAvFormatFromKind: getAvFormatFromKind,
	    r: function r() {
	        utils.removeEvent(document.getElementsByTagName('body')[0], 'click', clickListener);
	        alreadyLinked = false;
	    }
	};

/***/ }),
/* 172 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*
	 * ALWAYS REQUIRED INTERNATIONAL for analytics.js, irrespective of ads being enabled
	 *
	 * USAGE
	 *
	 * Creates namespace/objects:
	 *   bbcdotcom.objects('bbcdotcom.data.stats', 'create')
	 *   => var window.bbcdotcom.data = {};  var window.bbcdotcom.data.stats = {};
	 *
	 * Returns object, method result or property result depending on whether it's an object, method or property.
	 *   bbcdotcom.objects('bbcdotcom.data.stats')
	 *   => var isExists = bbcdotcom.data.stats;
	 *
	 * Return the value of a function with passed in a param:
	 *   bbcdotcom.objects('bbcdotcom.config.isActive', 'analytics')
	 *   => var isAnalyticsActive = bbcdotcom.config.isActive('analytics');
	 *
	 * Returns true if method/object exists:
	 *   bbcdotcom.objects('slot', bbcdotcom.adverts)
	 *   => var methodExists = (typeof bbcdotcom.adverts.slot !== 'undefined' ? true : false);
	 *
	 */
	module.exports = function (strName) {
	    var i,
	        len,
	        args = arguments,
	        nameParts = strName.split("."),
	        obj = args[1] !== null && _typeof(args[1]) === 'object' ? args[1] : window;
	    for (i = 0, len = nameParts.length; i < len; i++) {
	        if (obj[nameParts[i]] === undefined) {
	            if (typeof args[1] === 'string' && args[1] === 'create') {
	                obj[nameParts[i]] = {};
	            } else {
	                return false; // Checking for an objects existence
	            }
	        } else if (typeof obj[nameParts[i]] === 'function') {
	            if (typeof args[1] !== 'undefined' && args[1] !== null && obj[nameParts[i]](args[1]) !== undefined) {
	                return obj[nameParts[i]](args[1]);
	            } else if (obj[nameParts[i]]() !== undefined) {
	                return obj[nameParts[i]]();
	            }
	        }
	        obj = obj[nameParts[i]];
	    }
	    return obj;
	};

/***/ }),
/* 173 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.sanitiseLabelValue = sanitiseLabelValue;
	exports.sanitiseKeyValues = sanitiseKeyValues;
	exports.sanitisePageName = sanitisePageName;
	function sanitiseLabelValue(value) {
	    if (typeof value !== 'string') {
	        return value;
	    }
	    return value.toLowerCase().replace(/[&=\/<>]/g, '');
	}
	
	function sanitiseKeyValues(keyValues) {
	    var cleanKvs = {};
	    for (var key in keyValues) {
	        if (keyValues.hasOwnProperty(key)) {
	            if (keyValues[key] !== '' && keyValues[key] !== null && keyValues[key] !== 'na') {
	                // Do not include label (key-value) if empty.
	                // Ensure we do not send integers/numbers/floats but strings BBCCOM-6288
	                cleanKvs[key] = isNaN(keyValues[key]) ? keyValues[key] : String(keyValues[key]);
	            }
	        }
	    }
	    return cleanKvs;
	}
	
	function sanitisePageName(name) {
	    if (typeof name !== 'string') {
	        return name;
	    }
	    return name.toLowerCase().replace(/[\s]/g, '_').replace(/[&=\/<>+?]/g, '').replace(/_{2,}/g, '_');
	}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getArticleUpdatedDate;
	
	var _utils = __webpack_require__(143);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var getSportResponsiveUpdatedTimestamp = function getSportResponsiveUpdatedTimestamp() {
	    var timeElement = document.querySelector('time[data-timestamp]');
	
	    if (typeof timeElement === 'undefined' || !timeElement || timeElement === null) {
	        return null;
	    }
	
	    var timestamp = timeElement.getAttribute('data-timestamp');
	
	    if (typeof timestamp === 'undefined' || !timestamp || timestamp === "") {
	        return null;
	    }
	
	    return timestamp;
	};
	
	function getArticleUpdatedDate() {
	    var asTimestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	    var date = null,
	        sportDesktopDate = _utils2['default'].getMetaNameContent('DCTERMS.modified'),
	        sportResponsiveDate = getSportResponsiveUpdatedTimestamp();
	
	    if (typeof window.config !== 'undefined' && typeof window.config.asset !== 'undefined' && typeof window.config.asset.last_updated !== null && typeof window.config.asset.last_updated !== 'undefined' && typeof window.config.asset.last_updated.date !== 'undefined') {
	        // Responsive News
	        // eg 2015-01-08 03:44:31
	        date = window.config.asset.last_updated.date;
	    } else if (sportDesktopDate !== '') {
	        // Sport Desktop
	        // eg 2011/12/12T11:56:10+00:00
	        date = sportDesktopDate.replace('T', ' ').replace('+00:00', '');
	    } else if (sportResponsiveDate) {
	        return sportResponsiveDate; // Already a timestamp
	    }
	
	    if (date === null || date.length === 0) {
	        return null;
	    }
	
	    if (typeof asTimestamp !== 'undefined' && asTimestamp === true) {
	        return new Date(date.replace(/\//g, '-').replace(' ', 'T')).getTime() / 1000;
	    }
	    return date.replace(/-/g, '/');
	}
	module.exports = exports['default'];

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getCollection;
	
	var _keyValues = __webpack_require__(176);
	
	var _keyValues2 = _interopRequireDefault(_keyValues);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getCollection() {
	    return _keyValues2['default'].get('keyword') !== false ? _keyValues2['default'].get('keyword').toLowerCase() : '';
	}
	module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var sections = __webpack_require__(152);
	var utils = __webpack_require__(143);
	
	var keyValues = {},
	    keywordObj = false,
	    assetTypeMap = {
	    'AV': 'media_asset',
	    'INDEX': 'index'
	};
	
	var setStoryId = function setStoryId(windowLocationHref) {
	    if (/([0-9]{7,8})$/.test(windowLocationHref.split("?")[0].split("#")[0])) {
	        keyValues['story_id'] = RegExp.$1;
	    }
	};
	
	var setCType = function setCType(windowLocationHref) {
	    windowLocationHref = windowLocationHref.split("?")[0].split("#")[0];
	    keyValues['ctype'] = /[0-9]{7,8}$/.test(windowLocationHref) ? 'content' : 'index';
	};
	
	var setAssetType = function setAssetType(windowLocationHref, assetType) {
	    if (typeof keyValues['asset_type'] === 'undefined') {
	        // Asset type INDEX will be set for Index and Feature Indexes and should override the use of the url
	        if (assetType && typeof assetType === 'string' && assetTypeMap[assetType]) {
	            keyValues['asset_type'] = assetTypeMap[assetType];
	        } else {
	            // If an asset type of AV or INDEX has not been defined use the url to work out the type
	            windowLocationHref = windowLocationHref.split("?")[0].split("#")[0];
	            keyValues['asset_type'] = /[0-9]{7,8}$/.test(windowLocationHref) ? 'story' : 'index';
	        }
	        // All live experience pages should override the asset type
	        if (/\/(sport|news)\/live\//.test(windowLocationHref)) {
	            keyValues['asset_type'] = 'live_event';
	        }
	    }
	};
	
	var setReferrer = function setReferrer(referrer) {
	    // Referrer KeyValue
	    var matchArr = referrer.match(/^(http[s]?:\/\/[a-z0-9\.]*bbc\.(co\.uk|com))(.*)$/);
	    if (matchArr) {
	        // Within bbc website
	        var refString;
	        refString = matchArr[3].replace(/default.stm$|\-|\/|_/g, "");
	        if (refString.length > 0 && refString.length <= 64) {
	            keyValues['referrer'] = escape(refString);
	        } else {
	            keyValues['referrer'] = "";
	        }
	    } else {
	        // Catch exceptions
	        keyValues['referrer'] = "nonbbc";
	    }
	};
	
	var setReferrerDomain = function setReferrerDomain(referrer) {
	    var refDomain = referrer.match(/^(http[s]?:\/\/)([a-z0-9\.]*)((?:\/(?:\w|-|\+|\.)+)*)(\/.*)$/);
	    if (refDomain) {
	        keyValues['referrer_domain'] = refDomain[2];
	    } else {
	        keyValues['referrer_domain'] = "";
	    }
	};
	
	// Behavioral targeting adserver integration
	var setRsi = function setRsi(windowDocument) {
	    var i,
	        rsi_segs = [],
	        segs_end,
	        segs_beg;
	    if (typeof windowDocument.cookie !== 'undefined') {
	        segs_beg = windowDocument.cookie.indexOf('rsi_segs=');
	        keyValues['rsi'] = [];
	        if (segs_beg >= 0) {
	            segs_beg = windowDocument.cookie.indexOf('=', segs_beg) + 1;
	            if (segs_beg > 0) {
	                segs_end = windowDocument.cookie.indexOf(';', segs_beg);
	                if (segs_end === -1) {
	                    segs_end = windowDocument.cookie.length;
	                }
	                rsi_segs = windowDocument.cookie.substring(segs_beg, segs_end).split('|');
	            }
	        }
	        for (i = 0; i < rsi_segs.length && i < 20; i++) {
	            keyValues['rsi'].push(rsi_segs[i]);
	        }
	    }
	};
	
	var setWorldServiceTitle = function setWorldServiceTitle(windowLocationPathname) {
	    var title;
	    if (sections.getSection(0) === 'worldservice') {
	        title = windowLocationPathname.split('/').pop().split('_');
	        if (typeof title[1] !== 'undefined') {
	            keyValues['keyword'] = title[1] + (typeof title[2] !== 'undefined' ? '_' + title[2] : '');
	        }
	        title.shift();
	        keyValues['title'] = title.join('_');
	    }
	};
	
	var setKeywordParts = function setKeywordParts(keyword) {
	    var keywordParts = keyword.match(/(((?!(sponsor:)).)*)(sponsor:([^,]+),?(.*))?/);
	    if (keywordParts !== null && typeof keywordParts[5] !== 'undefined' && keywordParts[5] !== '' && typeof keywordParts[6] !== 'undefined' && keywordParts[6] !== '') {
	        keywordObj = {
	            href: keywordParts[6],
	            title: utils.capitalize(keywordParts[5])
	        };
	        keyValues['keyword'] = keywordParts[5].replace(/ /g, '');
	    } else {
	        keyValues['keyword'] = keyword;
	    }
	};
	
	module.exports = {
	    init: function init(windowLocation, windowDocument, assetType) {
	        keyValues['domain'] = windowLocation.hostname;
	        setStoryId(windowLocation.href);
	        setCType(windowLocation.href);
	        setAssetType(windowLocation.href, assetType);
	        setReferrer(windowDocument.referrer);
	        setReferrerDomain(windowDocument.referrer);
	        setRsi(windowDocument);
	        setWorldServiceTitle(windowLocation.pathname);
	    },
	    getAll: function getAll() {
	        return keyValues;
	    },
	    get: function get(key) {
	        return typeof keyValues[key] !== 'undefined' ? keyValues[key] : false;
	    },
	    set: function set(key, value) {
	        if (typeof key === 'string') {
	            if (typeof key !== 'undefined' && typeof value !== 'undefined' && value !== '') {
	                if (key === 'keyword') {
	                    setKeywordParts(value);
	                } else {
	                    keyValues[key] = value;
	                }
	            }
	        }
	    },
	    unset: function unset(key) {
	        if (typeof key === 'string' && typeof key !== 'undefined' && typeof keyValues[key] !== 'undefined') {
	            delete keyValues[key];
	        }
	    },
	    setArray: function setArray(key, value) {
	        if (typeof key === 'string') {
	            if (typeof keyValues[key] === 'undefined') {
	                keyValues[key] = [];
	            }
	            if (typeof key !== 'undefined' && typeof value !== 'undefined' && value !== '') {
	                keyValues[key].push(value);
	            }
	        }
	    },
	    getKeywordParts: function getKeywordParts() {
	        return keywordObj;
	    },
	    r: function r() {
	        keyValues = {};
	        keywordObj = false;
	    }
	};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getDaxCorp;
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getDaxCorp() {
	    return _config2['default'].getDaxEnvironments().join('_');
	}
	module.exports = exports['default'];

/***/ }),
/* 178 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getDomain;
	function getDomain(uri) {
	    var re = /http(|s):\/\/([^\/]+)(.*)?/;
	    var match = re.exec(uri);
	    return "http" + match[1] + "://" + match[2];
	}
	module.exports = exports["default"];

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getEdition;
	
	var _helper = __webpack_require__(171);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getEdition() {
	    return _helper2['default'].getPageEdition().toLowerCase();
	}
	module.exports = exports['default'];

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getIsApp;
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getIsApp() {
	    return _config2['default'].isSportApp() || bbcdotcom.analytics.isScwHandlerUsed ? 1 : 0;
	}
	module.exports = exports['default'];

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getPageName;
	
	var _helper = __webpack_require__(171);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	var _sanitiseValues = __webpack_require__(173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getPageName() {
	    return (0, _sanitiseValues.sanitisePageName)(_helper2['default'].getPageNameComScore());
	}
	module.exports = exports['default'];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getPageType;
	
	var _helper = __webpack_require__(171);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getPageType(uri) {
	    var siteCatalystPageType = _helper2['default'].getPageType(uri).toLowerCase();
	    var mappingTable = {
	        'index': 'idx|na',
	        'story': 'sty|na',
	        'story-video': 'sty|vid',
	        'live-event': 'liv|na',
	        'video': 'map|mps',
	        'video-sticky': 'vid|sti',
	        'video-embed': 'vid|emb'
	    };
	    return typeof mappingTable[siteCatalystPageType] !== 'undefined' ? mappingTable[siteCatalystPageType] : 'na|na';
	}
	module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getReferrer;
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getReferrer() {
	    return document.referrer !== _config2['default'].getReferrer() ? _config2['default'].getReferrer().substr(0, 255) : '';
	}
	module.exports = exports['default'];

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getSectionStrings;
	
	var _helper = __webpack_require__(171);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getSectionStrings() {
	    return _helper2['default'].determineSections('.');
	}
	module.exports = exports['default'];

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getSiteCatalystCookieValue;
	
	var _utils = __webpack_require__(143);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getSiteCatalystCookieValue() {
	    var siteCatalystCookieValue = _utils2['default'].getCookie('s_vi'); // Will be "undefined" when on "www.bbc.co.uk" because it's a ".com" cookie
	    return typeof siteCatalystCookieValue !== 'undefined' ? siteCatalystCookieValue : '';
	}
	module.exports = exports['default'];

/***/ }),
/* 186 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getSiteChannel;
	function getSiteChannel(sections) {
	    return sections[0];
	}
	module.exports = exports["default"];

/***/ }),
/* 187 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getSiteSection;
	function getSiteSection(sections) {
	    return sections[1] === sections[0] ? '' : sections[1]; // BBCCOM-6431
	}
	module.exports = exports['default'];

/***/ }),
/* 188 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getSiteSubsection1;
	function getSiteSubsection1(sections) {
	    return sections[2] === sections[1] ? '' : sections[2]; // BBCCOM-6431
	}
	module.exports = exports['default'];

/***/ }),
/* 189 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getSiteSubsection2;
	function getSiteSubsection2(sections) {
	    return sections[3] === sections[2] ? '' : sections[3]; // BBCCOM-6431
	}
	module.exports = exports['default'];

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = getSyndicatedVideoSource;
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Currently we only syndicate video to twitter so if the page is of type VIDEO-EMBED then we can assume
	 * we are embedded in twitter. We can look into changing this down the line as and when required.
	 *
	 * @returns {string}
	 */
	function getSyndicatedVideoSource() {
	  return _config2['default'].getType() === 'VIDEO-EMBED' ? 'twitter' : null;
	};
	module.exports = exports['default'];

/***/ }),
/* 191 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getTimestamp;
	/**
	 * Create Timestamp - JavaScript timestamp in milliseconds
	 * eg 1424452599000
	 */
	function getTimestamp() {
	    if (!Date.now) {
	        // IE8 & below
	        return new Date().getTime();
	    }
	
	    return Date.now();
	}
	module.exports = exports["default"];

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getTopicNames;
	
	var _utils = __webpack_require__(143);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getTopicNames() {
	    var topicNames = [],
	        topicMap = {},
	        topic = '',
	        topicElements = document.querySelectorAll(".tags-list__tags a"),
	        i;
	    for (i = 0; i < topicElements.length; i++) {
	        topic = topicElements[i].innerText.replace(/\s/g, '_').toLowerCase();
	        if (topicMap[topic] === undefined) {
	            topicNames.push(topic);
	            topicMap[topic] = 'Topic seen';
	        }
	    }
	    return topicNames.join('|');
	}
	module.exports = exports['default'];

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getVersion;
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getVersion() {
	    return _config2['default'].getVersion();
	}
	module.exports = exports['default'];

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = getPartner;
	
	var _keyValues = __webpack_require__(176);
	
	var _keyValues2 = _interopRequireDefault(_keyValues);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getPartner() {
	  return _keyValues2['default'].get('partner') !== false ? _keyValues2['default'].get('partner').toLowerCase() : '';
	}
	module.exports = exports['default'];

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = getLicense;
	
	var _keyValues = __webpack_require__(176);
	
	var _keyValues2 = _interopRequireDefault(_keyValues);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getLicense() {
	  return _keyValues2['default'].get('license') !== false ? _keyValues2['default'].get('license').toLowerCase() : '';
	}
	module.exports = exports['default'];

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports['default'] = getUserTrackingCookie;
	
	var _utils = __webpack_require__(143);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var OLD_USER_TRACKING_COOKIE = 'ckpf_uid';
	var USER_TRACKING_COOKIE = 'ckpf_sscid';
	var NEW_USER_TRACKING_COOKIE = 'ckns_sscid';
	
	function getUserTrackingCookie() {
	    var oldValue = _utils2['default'].getCookie(OLD_USER_TRACKING_COOKIE);
	    var currentValue = _utils2['default'].getCookie(USER_TRACKING_COOKIE);
	    var newValue = _utils2['default'].getCookie(NEW_USER_TRACKING_COOKIE);
	
	    if (typeof newValue !== 'undefined' && newValue !== 0) {
	        return newValue;
	    } else if (typeof currentValue !== 'undefined' && currentValue.length !== 0) {
	        return currentValue;
	    } else if (typeof oldValue !== 'undefined' && oldValue.length !== 0) {
	        return oldValue;
	    }
	
	    return false;
	}
	module.exports = exports['default'];

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var keyValues = __webpack_require__(176);
	var dfppRequest = __webpack_require__(198);
	
	var Predicate = function Predicate() {
	
	    'use strict';
	
	    this.exclusions = [];
	    this.inclusions = [];
	    this.predicates = {
	        airline: {
	            rules: {
	                1: { // each rule is an OR
	                    match: {
	                        1: ['air', 'plane', 'flight', 'jet', 'aviation'], // each line is an AND
	                        2: ['ash', 'bomb', 'crash', 'dead', 'detonat', 'disaster', 'disrupt', 'emergenc', 'fire', 'incident', 'injur', 'kill', 'missing', 'package', 'passenger', 'crew', 'search', 'score', 'strand', 'strike', 'volcan', 'wreck'] //each line is an AND
	                    },
	                    value: "!c"
	                },
	                2: {
	                    match: {
	                        1: ['osama', 'bin laden', 'twin towers', '9\/11,september 11', '11 september', 'al-qaeda', 'al qaeda']
	                    },
	                    value: "!c"
	                }
	            }
	        },
	        violence: {
	            rules: {
	                1: {
	                    match: {
	                        1: ['riot', 'violen', 'loot', 'unrest', 'unruly', 'attack', 'disturbance', 'shot', 'disorder', 'anarch', 'chaotic', 'chaos', 'unruliness', 'mindless', 'stealing', 'stolen', 'thiev', 'theft', 'arson', 'crisis', 'disarray', 'discord', 'lawlessness', 'criminal', 'vandal', 'thug', 'engulf', 'flame', 'burn', 'blast', 'blood', 'dead', 'death', 'die', 'explode', 'explosion', 'fatal', 'funeral', 'gun', 'injur', 'kill', 'knife', 'mourn', 'murder', 'stab', 'terror', 'traged', 'tragic', 'victim']
	                    },
	                    value: "!c"
	                }
	            }
	        },
	        sensitive: {
	            rules: {
	                1: {
	                    match: {
	                        1: ['violence', 'firearms', 'arms', 'tobacco', 'hygiene', 'religio', 'crim', 'illegal', 'politic', 'porno', 'paedophile', 'google', 'internet']
	                    },
	                    value: "!c"
	                }
	            }
	        }
	    };
	
	    /**
	     * @param exclusions Exclusions can either be an array "['airline','violence']" or a string "airline,violence"
	     */
	    this.setAdExclusion = function (exclusions) {
	        if (typeof exclusions === 'undefined' || exclusions === '') {
	            return;
	        }
	        var e;
	        for (e in exclusions) {
	            if (exclusions.hasOwnProperty(e)) {
	                dfppRequest.setExclusion(exclusions[e]);
	                // Adding the NEW GPT way this way so that when getPrerollAdTag is called it is populated.
	                keyValues.set('excl_cat', exclusions.join(','));
	            }
	        }
	        keyValues.set('!c', exclusions.join(','));
	    };
	};
	
	Predicate.prototype.getExclusions = function () {
	    return this.exclusions;
	};
	
	Predicate.prototype.getInclusions = function () {
	    return this.inclusions;
	};
	
	Predicate.prototype.set = function (contentMetaData) {
	    var x, n, key, numberToMatch, numberMatched;
	    contentMetaData = contentMetaData.toLowerCase();
	    for (key in this.predicates) {
	        for (x in this.predicates[key].rules) {
	            numberToMatch = 0;
	            numberMatched = 0;
	            for (n in this.predicates[key].rules[x].match) {
	                numberToMatch++;
	                var exp = new RegExp(this.predicates[key].rules[x].match[n].join('|'));
	                if (exp.test(contentMetaData)) {
	                    numberMatched++;
	                } else {
	                    // Must match each list as it's an AND operator
	                    continue;
	                }
	            }
	            if (0 !== numberMatched && numberToMatch === numberMatched) {
	                if ('!c' === this.predicates[key].rules[x].value) {
	                    // Exclusions
	                    this.exclusions.push(key);
	                } else {
	                    // Inclusions
	                    this.inclusions.push(key);
	                }
	            }
	        }
	    }
	    this.setAdExclusion(this.exclusions);
	    return this;
	};
	
	module.exports = Predicate;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var Log = __webpack_require__(144)('adverts:dfppRequest');
	var Layout = __webpack_require__(199);
	var Objects = __webpack_require__(172);
	var KeyValues = __webpack_require__(176);
	var AdRegister = __webpack_require__(200);
	var cmd = __webpack_require__(201);
	var AdsenseRenderer = __webpack_require__(202);
	var PubSub = __webpack_require__(205);
	var AdUnit = __webpack_require__(206);
	var Config = __webpack_require__(150);
	var Sections = __webpack_require__(152);
	var Utils = __webpack_require__(143);
	var SlotDeferred = __webpack_require__(208);
	var AdFilter = __webpack_require__(209);
	var Breakpoints = __webpack_require__(204);
	
	var AD_ID_PREFIX = 'bbccom_';
	
	var getAdData = function getAdData(adName) {
	    var ad = {
	        adSizes: Layout.getAdCurrentGroupSizes(adName)
	    };
	    // Reset ad slot name back to async one if required
	    ad.domId = Objects('bbcdotcom.config.isAsync') ? AD_ID_PREFIX + adName : adName;
	    return ad;
	};
	
	var setupRenderEndedCallback = function setupRenderEndedCallback() {
	    googletag.cmd.push(function () {
	        googletag.pubads().addEventListener('slotRenderEnded', function (event) {
	            if (!bbcdotcom.adverts.dfppRequest.getInitComplete()) {
	                bbcdotcom.adverts.dfppRequest.setInitComplete(true);
	            }
	            var adId = event.slot.getTargeting("slot");
	            adId = adId[0].replace('bbccom_', '');
	            var ad = AdRegister.getAd(adId);
	            var slotElementId = event.slot.getSlotElementId();
	
	            Log(adId, slotElementId, 'isEmpty', event.isEmpty);
	            if (ad && ad.isRendered()) {
	                return;
	            }
	            ad.injectAdvertisementText();
	            ad.setRendered(true);
	            ad.setEventSize(event.size);
	            ad.renderIfReady();
	            PubSub.trigger('ad:render:complete', slotElementId, event.isEmpty);
	            bbcdotcom.adverts.dfppRequest.requestDeferredAds();
	        });
	    });
	};
	
	var DFPPRequest = function DFPPRequest() {
	    this.slots = {};
	    this.deferredSlots = [];
	    this.initComplete = false;
	};
	
	DFPPRequest.prototype.reset = function () {
	
	    try {
	        if (Config.isAdsEnabled() && typeof googletag !== 'undefined') {
	            googletag.pubads().clearTargeting();
	            googletag.pubads().updateCorrelator();
	            this.init(true);
	        }
	    } catch (e) {
	        Log.error('Unable to reset ads targeting', e);
	    }
	};
	
	DFPPRequest.prototype.init = function (reset) {
	    try {
	        if (Config.isAdsEnabled() && typeof googletag !== 'undefined') {
	            googletag.cmd.push(function () {
	                var keyValues = KeyValues.getAll();
	                var key;
	
	                googletag.pubads().setTargeting("frd", '1');
	
	                if (AdUnit.getPreviewUid()) {
	                    googletag.pubads().setTargeting("uid", AdUnit.getPreviewUid());
	                }
	                for (key in keyValues) {
	                    if (keyValues.hasOwnProperty(key) && keyValues[key] !== '') {
	                        googletag.pubads().setTargeting(key, keyValues[key]);
	                    }
	                }
	
	                /**
	                 * Lotame
	                 */
	                this.setLotameData();
	
	                /**
	                 * Grapeshot
	                 */
	                this.setGrapeshotData();
	
	                /**
	                 * Programmes extra info
	                 */
	                this.setProgrammesData();
	
	                googletag.pubads().setTargeting('esi', '0');
	
	                // BBCCOM-7631
	                if (Sections.getSection(0) === 'weather') {
	                    googletag.pubads().addEventListener('impressionViewable', function (event) {
	                        var children, el;
	                        if (event.slot.getSlotElementId() === 'mpu') {
	                            children = document.getElementById('bbccom_mpu').children;
	                            if (children[children.length - 1].tagName === "SCRIPT") {
	                                el = children[children.length - 2];
	                            } else {
	                                el = children[children.length - 1];
	                            }
	                            Utils.addBodyTagClass('bbccom_slot_mpu' + Math.floor(el.clientHeight / 100) * 100);
	                        }
	                    });
	                }
	
	                /**
	                 *  SINGLE REQUEST MODE Ad Setup
	                 */
	                googletag.pubads().enableSingleRequest();
	
	                if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
	                    var ppid = Utils.getCookie('ckpf_ppid') || Utils.generateUuidV4().split("-").join("");
	                    if (window.bbccookies && bbccookies.readPolicy('performance')) {
	                        Log('Calling SetCookie with value : ' + ppid);
	                        Utils.setCookie('ckpf_ppid', ppid);
	                    }
	                    googletag.pubads().setPublisherProvidedId(ppid);
	                }
	
	                /**
	                 *  SYNC/ASYNC Differences
	                 */
	                if (!Objects('bbcdotcom.config.isAsync')) {
	                    googletag.pubads().enableSyncRendering();
	                } else {
	                    if (Objects('bbcdotcom.config.isDisableInitialLoad')) {
	                        googletag.pubads().disableInitialLoad();
	                    }
	                    setupRenderEndedCallback();
	                }
	
	                /*
	                 * GDPR : check ckns_policy cookie to allow personalised ads or not
	                 *  xx1 : allowed, nothing to do, xx0 : disable personalised ads
	                 */
	                if (Config.isNPA()) {
	                    googletag.pubads().setRequestNonPersonalizedAds(1);
	                }
	
	                if (typeof reset === "undefined" || reset !== true) {
	                    this.requestAds();
	                }
	
	                PubSub.trigger('ads:initialised');
	            }.bind(this));
	        }
	    } catch (e) {
	        Log.error('Unable to setup ads', e);
	    }
	};
	
	DFPPRequest.prototype.requestAds = function () {
	    var interstitialFlag = AdFilter.isSlotEnabled('interstitial');
	    try {
	        if (Config.isAdsEnabled() && typeof googletag !== 'undefined') {
	
	            var i,
	                adData,
	                adSize,
	                adUnit = AdUnit.get(),
	                ads = AdRegister.getAds(),
	                keySlots = Object.keys(this.slots);
	
	            if (AdRegister.getAdCount() === 0) {
	                // No ads in register
	                // We still want to request 'interstitial' and enable services for after-initial-load ads
	                googletag.cmd.push(function () {
	                    if (interstitialFlag) {
	                        AdRegister.registerAd('interstitial');
	                        googletag.defineOutOfPageSlot(adUnit, 'bbccom_interstitial').addService(googletag.pubads()).setTargeting('slot', 'interstitial');
	
	                        keySlots.push('bbccom_interstitial');
	                    }
	                    googletag.enableServices();
	                });
	                this.setInitComplete(true);
	                return;
	            }
	
	            googletag.cmd.push(function () {
	
	                for (i in ads) {
	                    if (ads.hasOwnProperty(i) && AdFilter.isSlotEnabled(ads[i].getAdId().replace(AD_ID_PREFIX, ''))) {
	                        adData = getAdData(ads[i].getAdId().replace(AD_ID_PREFIX, ''));
	                        adSize = adData.adSizes;
	                        if (ads[i].isFluid) adSize.push('fluid');
	                        if (adData && adData.domId.indexOf('adsense') === -1 && (adData.adSizes.length > 0 || ads[i].isFluid)) {
	                            this.slots[adData.domId] = googletag.defineSlot(adUnit, adSize, adData.domId).addService(googletag.pubads());
	                            this.slots[adData.domId].setTargeting('slot', adData.domId.replace(AD_ID_PREFIX, ''));
	                        }
	                    }
	                }
	
	                /**
	                 *  INTERSTITIAL Ad Setup
	                 */
	                if (interstitialFlag) {
	                    AdRegister.registerAd('interstitial');
	                    googletag.defineOutOfPageSlot(adUnit, 'bbccom_interstitial').addService(googletag.pubads()).setTargeting('slot', 'interstitial');
	
	                    keySlots.push('bbccom_interstitial');
	                }
	
	                googletag.enableServices();
	
	                PubSub.trigger('ads:requested', keySlots);
	            }.bind(this));
	        }
	    } catch (e) {
	        Log.error('Unable to request ads', e);
	    }
	};
	
	/**
	 * Refresh ads in asynchronous loaded pages
	 * There is an sync version of refreshing ads in api.js for verticals as an interim
	 */
	DFPPRequest.prototype.refreshAd = function (domId) {
	    var ad = AdRegister.getAd(domId.replace('bbccom_', ''));
	    if (ad) {
	        googletag.pubads().refresh([this.slots[domId]]);
	        ad.injectAdvertisementText();
	    } else {
	        Log.warn('No ' + domId.replace('bbccom_', '') + ' ad found to refresh');
	    }
	};
	
	/**
	 * Deferred slots can only be registered after first ad request sent,
	 * we're waiting for initComplete to send the new ad request
	 */
	DFPPRequest.prototype.requestDeferredAds = function (mode) {
	    if (this.deferredSlots.length > 0) {
	        var slot,
	            domId,
	            groups,
	            advertText,
	            bool,
	            keyValues,
	            ad,
	            slotsArr = [],
	            boolCorrelator = mode ? mode : false,
	            currentGroupId = Layout.getCurrentGroupId();
	
	        for (var i = 0; i < this.deferredSlots.length; i++) {
	            slot = this.deferredSlots[i];
	            domId = slot.domId;
	            groups = slot.groups;
	            keyValues = slot.keyValues;
	            advertText = slot.advertText;
	            bool = slot.booleanCorrelator || false;
	            ad = AdRegister.registerAd(domId);
	
	            if (ad.getAdId().indexOf('adsense') === 0) {
	                // Google Adsense advert (eg adsense, adsense_mpu)
	                if (!Config.isAdsenseEnabled()) {
	                    return;
	                }
	                AdsenseRenderer.loadGoogleAdsense();
	                AdsenseRenderer.renderAd(ad.getAdId(), groups);
	                this.deferredSlots[i] = "";
	            } else if (ad && !ad.hasAnyGroupAlreadyBeenRegistered([groups]) && groups.indexOf(currentGroupId) >= 0) {
	                Log('Registering ad: ' + domId + ' for groups ' + groups);
	                googletag.cmd.push(function () {
	                    var _this = this;
	
	                    var adUnit = AdUnit.get(),
	                        adData = getAdData(ad.getAdId().replace(AD_ID_PREFIX, '')),
	                        adSize = adData.adSizes;
	                    if (ad.isFluid) adSize.push('fluid');
	                    this.slots[adData.domId] = googletag.defineSlot(adUnit, adSize, adData.domId).addService(googletag.pubads());
	                    this.slots[adData.domId].setTargeting('slot', adData.domId.replace(AD_ID_PREFIX, ''));
	                    if (keyValues) {
	                        Object.keys(keyValues).forEach(function (key) {
	                            if (key && keyValues[key]) {
	                                _this.slots[adData.domId].setTargeting(key, keyValues[key]);
	                            };
	                        });
	                    }
	                    slotsArr.push(this.slots[adData.domId]);
	                    SlotDeferred(domId, groups);
	                    if (advertText) {
	                        ad.setAdText(advertText);
	                    }
	                    ad.injectAdvertisementText();
	                    this.deferredSlots[i] = "";
	                    PubSub.trigger('ads:requested', domId);
	                }.bind(this));
	            } else {
	                Log.warn('No ' + domId.replace('bbccom_', '') + ' ad found to register (for groups ' + groups + ' )');
	            }
	        }
	        this.deferredSlots = [];
	        googletag.pubads().refresh(slotsArr, { changeCorrelator: boolCorrelator });
	    }
	};
	
	/**
	 * Register a new ad in AJAX or infinite loaded pages
	 * Upgraded support, can accept pair (domId, groups) or object with more than one ad
	 * First signature matches postpone ad request on Live pages
	 * Second signature matches reload on new slots for Features
	 */
	DFPPRequest.prototype.registerAd = function (domId, groups, keyValues) {
	    var mode = false,
	        advertText,
	        _groups,
	        exception = domId === 'mpu_middle' && groups.length === 4 && Utils.parentHasClass(document.getElementById('bbccom_mpu_middle_1_2_3_4'), 'lx-stream') && Breakpoints.getGroup(5) !== 'undefined';
	    if (typeof groups !== 'undefined') {
	        if (exception) {
	            document.getElementById('bbccom_mpu_middle_1_2_3_4').id = "bbccom_mpu_middle_1_2_3_4_5";
	            groups = [1, 2, 3, 4, 5];
	        }
	        if (AdFilter.isSlotEnabled(domId) || AdFilter.isLazyLoadedSlot(domId)) {
	            this.deferredSlots.push({ 'domId': domId, 'groups': groups.map(Number), keyValues: keyValues });
	        } else {
	            Log.warn('Slot ' + domId + ' not enabled');
	        }
	    } else {
	        mode = typeof (keyValues || {}).mode !== 'undefined' ? keyValues.mode : true;
	        for (var ad in domId) {
	            if (AdFilter.isSlotEnabled(ad)) {
	                if (_typeof(domId[ad]) === 'object' && !(domId[ad] instanceof Array)) {
	                    advertText = domId[ad]['advertText'];
	                    _groups = domId[ad]['groups'];
	                    this.deferredSlots.push({ 'domId': ad, 'groups': _groups.map(Number), 'advertText': advertText, keyValues: keyValues });
	                } else {
	                    this.deferredSlots.push({ 'domId': ad, 'groups': domId[ad].map(Number), keyValues: keyValues });
	                }
	            } else {
	                Log.warn('Slot ' + ad + ' not enabled');
	            }
	        }
	    }
	    if (this.initComplete) {
	        this.requestDeferredAds(mode);
	    }
	};
	
	/**
	 * Postpones the request for a slot until it is about to come into view
	 * Parameters expected are slot name and groups
	 */
	DFPPRequest.prototype.lazyLoadAd = function (domId, groups) {
	    var selector = bbcdotcom.adverts.adFilter.isLazyLoadedSlot(domId),
	        nodeElement = document.getElementById('bbccom_' + domId + '_' + groups.join('_'));
	
	    function lazyScrollHandler() {
	        var selectorElement = Utils.getParentElementByClass(nodeElement, selector);
	        if (selectorElement.getBoundingClientRect().top < document.documentElement.clientHeight) {
	            if (AdFilter.isSlotEnabled(domId)) {
	                bbcdotcom.registerAd(domId, groups);
	            } else {
	                Log.warn('Slot ' + domId + ' not enabled');
	            }
	            Utils.removeEvent(window, 'scroll', lazyScrollHandler);
	        }
	    }
	    Utils.addEvent(window, 'scroll', lazyScrollHandler);
	};
	
	DFPPRequest.prototype.registerAdSlots = function (querySelector) {
	    var slots, slot;
	
	    function validateGroups(groups) {
	        return groups.map(function (group) {
	            return parseInt(group, 10);
	        }).filter(function (group) {
	            return !isNaN(group);
	        });
	    }
	
	    function extractAdProperties(slotId) {
	        var matches = slotId.match(/bbccom_(.+?)_([\d_]+)/),
	            type,
	            groups;
	
	        if (!matches) {
	            return ['', []];
	        }
	
	        type = matches[1];
	        groups = matches[2].split('_');
	
	        return {
	            slotType: type,
	            slotGroups: validateGroups(groups)
	        };
	    }
	
	    if (document.querySelectorAll) {
	        slots = document.querySelectorAll(querySelector);
	
	        for (var i = 0; i < slots.length; i++) {
	            slot = extractAdProperties(slots[i].id);
	
	            if (slot.slotType && slot.slotGroups.length) {
	                this.registerAd(slot.slotType, slot.slotGroups);
	            }
	        }
	    }
	    return false;
	};
	
	DFPPRequest.prototype.setLotameData = function () {
	    var dartCCKey = "ccaud",
	        dartCC = "";
	
	    if (typeof ccauds != 'undefined') {
	        for (var cci = 0; cci < ccauds.Profile.Audiences.Audience.length; cci++) {
	            if (cci > 0) dartCC += ",";
	            dartCC += ccauds.Profile.Audiences.Audience[cci].abbr;
	        }
	        googletag.cmd.push(function () {
	            googletag.pubads().setTargeting(dartCCKey, [dartCC]);
	        });
	    }
	};
	
	DFPPRequest.prototype.setGrapeshotData = function () {
	    var gsKey = "gs_cat";
	
	    if (typeof window.gs_channels !== 'undefined' && window.gs_channels !== 'DEFAULT') {
	        googletag.cmd.push(function () {
	            googletag.pubads().setTargeting(gsKey, window.gs_channels);
	        });
	        bbcdotcom.lotame.sendData(window.gs_channels.indexOf("+") > 0 ? window.gs_channels.split("+") : window.gs_channels, "grapeshot");
	    }
	};
	
	DFPPRequest.prototype.setProgrammesData = function () {
	    var id, name, el;
	    if (Sections.getSection(1) === 'programmes') {
	        try {
	            el = document.getElementsByClassName('br-masthead__title')[0].children[0];
	            id = el.href.split('/').pop();
	            name = el.innerText;
	            googletag.cmd.push(function () {
	                googletag.pubads().setTargeting('programme', id);
	                googletag.pubads().setTargeting('name', name);
	            });
	        } catch (err) {}
	    }
	};
	
	DFPPRequest.prototype.setKeyValues = function () {
	    var keyValues = KeyValues.getAll(),
	        key;
	    if (keyValues) {
	        for (key in keyValues) {
	            if (keyValues.hasOwnProperty(key) && keyValues[key] !== '') {
	                googletag.pubads().setTargeting(key, keyValues[key]);
	            }
	        }
	    }
	};
	
	DFPPRequest.prototype.setInitComplete = function (initComplete) {
	    this.initComplete = initComplete;
	    /***
	     * Call the async command queue
	     */
	    if (initComplete) {
	        cmd();
	        this.requestDeferredAds(false);
	    }
	};
	
	DFPPRequest.prototype.getInitComplete = function () {
	    return this.initComplete;
	};
	
	DFPPRequest.prototype.setExclusion = function (key) {
	    googletag.cmd.push(function () {
	        googletag.pubads().setCategoryExclusion(key);
	    });
	};
	
	module.exports = new DFPPRequest();

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var clientWidth,
	    adSizeLeewayAgainstSlotSize = 20,
	    adSizeLeewayAgainstSlotSizeWithNoBorder = 30,
	    initialGroup = false,
	    initialGroupId = false,
	    currentGroup,
	    currentGroupId,
	    currentGroupSizes = {},
	    layoutDisableReset = false;
	
	var log = __webpack_require__(144)('adverts:layout');
	var classes = __webpack_require__(155);
	var utils = __webpack_require__(143);
	
	/**
	 * Use page width to determine GroupID and GroupSizes
	 */
	function determineCurrentGroupAndSizes(groups) {
	    var x, slot, slotSizes;
	    for (x in groups) {
	        utils.removeHtmlTagClass(classes.className('group', x));
	        if ((typeof groups[x].f === 'undefined' || clientWidth <= groups[x].f) && clientWidth >= groups[x].s) {
	            currentGroupId = +x;
	            currentGroup = groups[x];
	
	            if (!initialGroup && !initialGroupId) {
	                initialGroup = currentGroup;
	                initialGroupId = currentGroupId;
	            }
	
	            utils.addHtmlTagClass(classes.className('group', currentGroupId));
	
	            // Strip out sizes not compatible with page width
	            for (slot in currentGroup.slots) {
	                currentGroupSizes[slot] = [];
	                for (slotSizes in currentGroup.slots[slot]) {
	                    if (clientWidth >= currentGroup.slots[slot][slotSizes][0]) {
	                        currentGroupSizes[slot].push(currentGroup.slots[slot][slotSizes]);
	                    }
	                }
	            }
	        }
	    }
	}
	
	function isAdSizeSuitableForCurrentGroup(ad) {
	    var slotIndex,
	        slotSizes = bbcdotcom.adverts.layout.getAdCurrentGroupSizes(ad.getAdName()),
	        leeway = typeof ad.adType !== 'undefined' && (ad.adType === 'promo' || ad.adType === 'feature') ? adSizeLeewayAgainstSlotSizeWithNoBorder : adSizeLeewayAgainstSlotSize;
	
	    for (slotIndex = 0; slotIndex < slotSizes.length; slotIndex++) {
	        /*
	         * THE FOLLOWING DETECTS HEIGHT INCLUDING THE ADVERTISING TEXT AS TRYING TO DETECT HEIGHT ON THE
	         * AD_CONTAINER DOES NOT WORK IN IE8. THE AD IS INJECTED OUTSIDE OF THIS AD_CONTAINER
	         */
	
	        if (Math.abs(slotSizes[slotIndex][0] - ad.getWidth()) <= leeway && Math.abs(slotSizes[slotIndex][1] - ad.getCreativeHeight()) <= leeway) {
	            return true;
	        }
	    }
	}
	
	function shouldShowAd(ad) {
	    return ad.currentSlotHasGroup(currentGroupId) && isAdSizeSuitableForCurrentGroup(ad);
	}
	
	var showOrHideAdForCurrentGroup = function showOrHideAdForCurrentGroup(ad) {
	    if (bbcdotcom.domLoaded && !ad.isResponsive && !ad.isFluid) {
	        if (shouldShowAd(ad)) {
	            log.debug('=== Opening ' + ad.getAdId() + ' for current slot ===');
	            ad.open();
	        } else {
	            log.debug('=== Shutting ' + ad.getAdId() + ' for current slot ===');
	            ad.shut();
	        }
	    }
	};
	
	function reset() {
	    if (layoutDisableReset) {
	        log.debug('layoutDisableReset is set to', true);
	        return;
	    }
	
	    try {
	        var ad,
	            ads = bbcdotcom.adverts.adRegister.getAds();
	
	        bbcdotcom.adverts.layout.init(bbcdotcom.adverts.breakpoints.getGroups());
	
	        for (ad in ads) {
	            if (ads.hasOwnProperty(ad)) {
	                if (ad.indexOf('adsense') > -1) {
	                    bbcdotcom.adverts.adsenseRenderer.reset();
	                } else {
	                    // Now lets check if the ad is still suitable for displaying in its current group
	                    showOrHideAdForCurrentGroup(ads[ad]);
	                }
	            }
	        }
	    } catch (e) {
	        log.error(e);
	    }
	}
	
	module.exports = {
	    init: function init(groups) {
	        clientWidth = document.documentElement.clientWidth; // TODO - A better way to detect width inline with media selectors
	        determineCurrentGroupAndSizes(groups);
	        if (!layoutDisableReset) {
	            // Reset layout to show/hide ads
	            bbcdotcom.addLoadEvent(function () {
	                window.addEventListener('resize', utils.debounce(reset, 500));
	            });
	        }
	    },
	    /**
	     * Deprecated
	     */
	    moveAd: function moveAd(from, to) {
	        //var iFrame,
	        //    iFrameDocument,
	        //    iFrameBody,
	        //    iFrameInnerHTML,
	        //    domFrom = document.getElementById(from),
	        //    domTo = document.getElementById(to);
	        //if (from !== to && domFrom !== null && domTo !== null) {
	        //    iFrame = domFrom.getElementsByTagName('iframe')[0];
	        //    if (typeof iFrame !== 'undefined') {
	        //        iFrameDocument = iFrame.contentDocument || iFrame.contentWindow.document;
	        //        if (iFrameDocument) {
	        //            iFrameBody = iFrameDocument.getElementsByTagName('body')[0];
	        //            iFrameInnerHTML = domFrom.innerHTML.replace(/<iframe.*>.*<\/iframe>/, iFrameBody.innerHTML);
	        //        }
	        //    }
	        //    domTo.innerHTML = iFrameInnerHTML || domFrom.innerHTML;
	        //    domFrom.innerHTML = '';
	        //}
	        //domFrom = domTo = null;
	    },
	    setClientWidth: function setClientWidth(width) {
	        clientWidth = width;
	    },
	    getClientWidth: function getClientWidth() {
	        return clientWidth;
	    },
	    getCurrentGroup: function getCurrentGroup() {
	        return currentGroup;
	    },
	    getCurrentGroupId: function getCurrentGroupId() {
	        return currentGroupId;
	    },
	    /**
	     * For testing
	     */
	    setCurrentGroupId: function setCurrentGroupId(groupId) {
	        currentGroupId = groupId;
	    },
	    /**
	     * TODO - Deprecate in favour of using the method below
	     * @returns array of all current group ad slot sizes
	     */
	    getCurrentGroupSizes: function getCurrentGroupSizes() {
	        return currentGroupSizes;
	    },
	    /**
	     * Should use this as opposed to the method above
	     * @param adId
	     * @returns array of current slot sizes for an ad
	     */
	    getAdCurrentGroupSizes: function getAdCurrentGroupSizes(adId) {
	        if (typeof currentGroupSizes[adId] !== 'undefined') {
	            return currentGroupSizes[adId];
	        } else if (typeof currentGroupSizes[adId.slice(0, adId.indexOf('_'))] !== 'undefined') {
	            return currentGroupSizes[adId.slice(0, adId.indexOf('_'))];
	        }
	        return [];
	    },
	    overrideGroupSizes: function overrideGroupSizes(slots) {
	        var slot;
	        currentGroupSizes = [];
	        for (slot in slots) {
	            currentGroupSizes[slot] = slots[slot];
	        }
	    },
	    disableReset: function disableReset() {
	        layoutDisableReset = true;
	    },
	    reset: reset,
	    /**
	     * For testing.
	     */
	    r: function r() {
	        layoutDisableReset = false;
	        currentGroup = {};
	        currentGroupId = 0;
	        currentGroupSizes = {};
	    }
	};

/***/ }),
/* 200 */
/***/ (function(module, exports) {

	"use strict";
	
	var register = {},
	    factory,
	    currentAdId,
	
	/**
	 *
	 * TODO - Think about moving this logic into separate ad types that extend the standard ad type
	 *
	 * OPTIONS
	 * - isResponsive (Ad does not check to see if it is still suitable for the current slot as the ad will work in a responsive environment and does not shut)
	 * - allowScreenReader (Allows for tabbing through elements within an ad)
	 * - hasAdText (Displays associated ad text such as IS SPONSORED BY)
	 * - adType (Allows different slot renderers and classes to be used)
	 * - isDfppRequest (Will not be added to the dfp request as it is a different ad type)
	 * - istFluid (will enable the fluid format for the slot to enable rendering of GoogleNative ads)
	 *
	 */
	adConfig = {
	    "wallpaper": {
	        "isResponsive": true
	    },
	    "interstitial": {
	        "isResponsive": true
	    },
	    "native": {
	        "allowScreenReader": true,
	        "isResponsive": true,
	        "hasAdText": false
	    },
	    "native_slice_l": {
	        "allowScreenReader": true,
	        "isResponsive": true,
	        "hasAdText": true
	    },
	    "native_slice_r": {
	        "allowScreenReader": true,
	        "isResponsive": true,
	        "hasAdText": true
	    },
	    "infeed": {
	        "allowScreenReader": true,
	        "isResponsive": true,
	        "hasAdText": false
	    },
	    "infeed_news_home": {
	        "allowScreenReader": true,
	        "isResponsive": true,
	        "hasAdText": true
	    },
	    "infeed_news_index": {
	        "allowScreenReader": true,
	        "isResponsive": true,
	        "hasAdText": true,
	        "isFluid": true
	    },
	    "infeed_news_story": {
	        "allowScreenReader": true,
	        "isResponsive": true,
	        "hasAdText": true,
	        "isFluid": true
	    },
	    "adsense": {
	        "adType": "adsense",
	        "isResponsive": true,
	        "isDfppRequest": false,
	        "template": 'adsense'
	    },
	    "outbrain": {
	        "adType": "outbrain",
	        "isResponsive": true,
	        "isDfppRequest": false
	    },
	    "promo": {
	        /* catch all */
	        "adType": "promo",
	        "hasAdText": false
	    },
	    "sponsor": {
	        "adType": "sponsor",
	        "isResponsive": true,
	        "size": [88, 31]
	    },
	    "sponsorbig": {
	        "adType": "sponsorbig",
	        "isResponsive": true,
	        "size": [132, 64]
	    },
	    "module": {
	        "adType": "module",
	        "isResponsive": true,
	        "size": [88, 31]
	    },
	    "module_worldinpictures": {
	        "adType": "module_worldinpictures",
	        "isResponsive": false
	    },
	    "sponsor_section": {
	        "adType": "sponsor_section",
	        "isResponsive": false,
	        "size": [88, 31]
	    },
	    "ad_feature_rc": {
	        "adType": "feature",
	        "hasAdText": false
	    },
	    "sponsor_banner": {
	        "adType": "sponsor_banner",
	        "isResponsive": false,
	        "size": [88, 31]
	    },
	    "googlenative": {
	        "isFluid": true
	    }
	};
	
	module.exports = {
	    setAdFactory: function setAdFactory(adFactory) {
	        factory = adFactory;
	    },
	    /**
	     * @param adId eg mpu, leaderboard
	     */
	    registerAd: function registerAd(adId) {
	        if (adId !== '' && typeof register[adId] === 'undefined') {
	            register[adId] = new bbcdotcom.adverts.ad(adId);
	            if (typeof adConfig[adId] !== 'undefined') {
	                register[adId].setConfig(adConfig[adId]);
	            } else if (typeof adConfig[adId.slice(0, adId.indexOf('_'))] !== 'undefined') {
	                register[adId].setConfig(adConfig[adId.slice(0, adId.indexOf('_'))]);
	            }
	        }
	        return register[adId];
	    },
	    setCurrentAdId: function setCurrentAdId(adId) {
	        currentAdId = adId;
	    },
	    getCurrentAdId: function getCurrentAdId() {
	        return currentAdId;
	    },
	    getCurrentAd: function getCurrentAd() {
	        // TODO - Remove if and else and return register[currentAdId] once apps use the correct API bbcdotcom.show()
	        if (bbcdotcom.config.isActive('ads')) {
	            if (typeof currentAdId !== 'undefined' && register[currentAdId]) {
	                return register[currentAdId];
	            }
	            return {
	                setBaseContent: function setBaseContent() {},
	                show: function show() {},
	                close: function close() {}
	            };
	        } else {
	            return {
	                show: function show() {},
	                close: function close() {}
	            };
	        }
	    },
	    getAd: function getAd(adId) {
	        if (typeof register[adId] !== 'undefined') {
	            return register[adId];
	        }
	    },
	    getAds: function getAds() {
	        return register;
	    },
	    getAdCount: function getAdCount() {
	        var k;
	        var count = 0;
	        for (k in register) {
	            if (register.hasOwnProperty(k)) {
	                count++;
	            }
	        }
	        return count;
	    },
	    // TODO - For tests only, fix later.
	    r: function r() {
	        register = {};
	        currentAdId = undefined;
	    }
	};

/***/ }),
/* 201 */
/***/ (function(module, exports) {

	"use strict";
	
	/* bbcdotcom Command Queue
	 * =======================
	 * 
	 * The purpose of this module is to pick up requests that are made to bbcdotcom before
	 * it has finished initialising. This module will fetch and execute any function in 
	 * bbcdotcom.cmd array in the order it was populated. 
	 * 
	 * After all the commands are executed and initialisation is complete the array will 
	 * automatically execute all functions sent to it.
	 * 
	 * Use example
	 * bbcdotcom.cmd = bbcdotcom.cmd || [];
	 * bbcdotcom.cmd.push( () => { bbcdotcom.registerAd( ... ) } );
	 */
	
	var cmd = function cmd() {
	  window.bbcdotcom.cmd = window.bbcdotcom.cmd || [];
	
	  if (window.bbcdotcom.cmd) {
	    setTimeout(function () {
	
	      while (window.bbcdotcom.cmd.length > 0) {
	        var func = window.bbcdotcom.cmd.shift();
	        func();
	      }
	
	      Object.defineProperty(window.bbcdotcom.cmd, "push", {
	        value: function value(_value) {
	          if (typeof _value === 'function') {
	            _value();
	          }
	        }
	      });
	    }, 500);
	  }
	};
	
	module.exports = cmd;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var sections = __webpack_require__(152);
	var adText = __webpack_require__(203);
	var breakpoints = __webpack_require__(204);
	var layout = __webpack_require__(199);
	var utils = __webpack_require__(143);
	var config = __webpack_require__(150);
	var log = __webpack_require__(144)('adverts:adsenseRenderer');
	
	var productSettings = {
	    "news": {
	        //"false": { //news front page
	        //    "dataAdSlot": "1519812776"
	        //},
	        "dataAdSlot": "6031494774"
	    },
	    "weather": {
	        "dataAdSlot": "7287144776"
	    },
	    "weather/0": {
	        "dataAdSlot": "7949963556"
	    },
	    "sport": {
	        "dataAdSlot": "4333678371"
	    },
	    "worldservice": {
	        "arabic": {
	            "dataAdSlot": "5810411579"
	        },
	        "hindi": {
	            "dataAdSlot": "5131780375"
	        },
	        "mundo": {
	            "dataAdSlot": "2597116378"
	        },
	        "portuguese": {
	            "dataAdSlot": "1027494774"
	        },
	        "turkce": {
	            "dataAdSlot": "1120383176"
	        }
	    },
	    "default": {
	        "dataAdSlot": "2504227975"
	    }
	};
	
	var getSettings = function getSettings() {
	    var section = sections.getSection(0),
	        sub_section = sections.getSection(1).toString(),
	        windowLocation = config.getWindowLocation();
	
	    if (/(adsense=)(\d{10})$/.test(window.location.href)) {
	        return { "dataAdSlot": RegExp.$2 };
	    }
	
	    if (productSettings[section]) {
	        if (windowLocation.pathname.indexOf('/weather/0') === 0) {
	            log('Adsense for ', section, "/0 = ", productSettings['weather/0']);
	            return productSettings['weather/0'];
	        }
	        if (productSettings[section][sub_section]) {
	            log('Adsense for ', section, "/", sub_section, " = ", productSettings[section][sub_section].dataAdSlot);
	            return productSettings[section][sub_section];
	        } else {
	            log('Adsense for ', section, " = ", productSettings[section].dataAdSlot);
	            return productSettings[section];
	        }
	    } else {
	        log('No adsense data found for this page (', section, "/", sub_section, "), using default ", productSettings['default'].dataAdSlot);
	        return productSettings['default'];
	    }
	};
	
	var loadGoogleAdsense = function loadGoogleAdsense() {
	    var adSenseScript;
	    function initAdsense() {
	        setTimeout(function () {
	            if (bbcdotcom.config.isNPA() && adsbygoogle) {
	                adsbygoogle.requestNonPersonalizedAds = 1;
	            }
	        }, 600);
	    }
	    if (typeof window.adsbygoogle === 'undefined') {
	        adSenseScript = document.createElement("script");
	        adSenseScript.setAttribute("async", "async");
	        adSenseScript.setAttribute("src", '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
	        adSenseScript.setAttribute("onload", initAdsense());
	        document.body.appendChild(adSenseScript);
	        return true;
	    }
	    return false;
	};
	
	var reset = function reset() {
	    var fixedWidth,
	        currentGroupId = layout.getCurrentGroupId(),
	        adsenseGroups = [],
	        maxGroup;
	    if (!document.getElementById('bbccom_adsense') || document.getElementById('bbccom_adsense') && document.getElementById('bbccom_adsense').getElementsByTagName('iframe').length < 1) {
	        return;
	    }
	    fixedWidth = document.getElementById('bbccom_adsense').getElementsByTagName('iframe')[0].width;
	    adsenseGroups = document.getElementById('bbccom_adsense').parentElement.id.replace('bbccom_adsense_', '').split('_');
	    maxGroup = adsenseGroups[adsenseGroups.length - 1];
	    if (maxGroup == 5 && fixedWidth < breakpoints.getGroup(currentGroupId).f || fixedWidth < breakpoints.getGroup(currentGroupId).f && currentGroupId < 4 || currentGroupId > 3 && fixedWidth < 301) {
	        log.debug('=== Opening adsense for current layout ===');
	        utils.removeTagClass(document.getElementById('bbccom_adsense'), 'bbccom_shut');
	        utils.addTagClass(document.getElementById('bbccom_adsense'), 'bbccom_visible');
	    } else {
	        log.debug('=== Shutting adsense for current layout ===');
	        utils.removeTagClass(document.getElementById('bbccom_adsense'), 'bbccom_visible');
	        utils.addTagClass(document.getElementById('bbccom_adsense'), 'bbccom_shut');
	    }
	    document.getElementById('bbccom_adsense').getElementsByTagName('iframe')[0].tabIndex = "-1";
	};
	
	module.exports = {
	    loadGoogleAdsense: loadGoogleAdsense,
	    getSettings: getSettings,
	    renderAd: function renderAd(adId, groups) {
	        var adSenseElement,
	            adSenseRunScript,
	            productSettings = getSettings(),
	            adTextKey = 'adsByGoogleText',
	            adTextValue = adText.getText(adTextKey),
	            adInfoUrl = adText.getInfoUrl(adTextKey),
	            isFullWidth = window.document.documentElement.offsetWidth < breakpoints.getGroup(4).s,
	            offsetWidth = layout.getCurrentGroupId() < 2 ? 16 : 32,
	            slotId = 'bbccom_' + adId + '_' + groups.join('_'),
	            slotWidth = isFullWidth ? window.document.documentElement.offsetWidth - offsetWidth + 'px' : Math.min(document.getElementById(slotId).parentElement.offsetWidth, 300) + 'px',
	            slotHeight = layout.getCurrentGroupId() === 3 ? '350px' : '430px';
	
	        if (typeof window.adsbygoogle === 'undefined') {
	            loadGoogleAdsense();
	        }
	        if (groups[groups.length - 1] == 5) {
	            slotWidth = document.getElementById(slotId).parentElement.offsetWidth - offsetWidth + 'px';
	            slotHeight = '150px';
	        }
	        adSenseElement = '<h3><a href="' + adInfoUrl + '" tabindex="-1">' + adTextValue + '</a></h3>' + '<ins class="adsbygoogle" ' + 'style="display:inline-block;width:' + slotWidth + ';height:' + slotHeight + ';max-width:' + slotWidth + ';" ' + 'data-ad-client="ca-pub-5087960732420604" ' + 'data-ad-slot=' + productSettings.dataAdSlot + '></ins>';
	        try {
	            document.getElementById(slotId).className += ' bbccom_adsense_slot';
	            document.getElementById(slotId).getElementsByClassName('bbccom_advert')[0].id = 'bbccom_adsense';
	            document.getElementById(slotId).getElementsByClassName('bbccom_advert')[0].innerHTML = adSenseElement;
	            adSenseRunScript = document.createElement("script");
	            adSenseRunScript.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});';
	            document.body.appendChild(adSenseRunScript);
	            return true;
	        } catch (e) {
	            return false;
	        }
	    },
	    reset: reset
	};

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * This module is responsible for resolving the advert text and corresponding info URL for each text value.
	 * The actual strings are retrieved from the locale which is configured on a page by page
	 * basis by consumers of bbcdotcom.
	 *
	 * If we are adding a new text string or info URL in the future, we should add an entry to the
	 * AD_TEXT_KEY_TO_URL_LOCALE_KEY_MAP to map the ad text and URL correctly
	 *
	 * We can add overrides to the ad text based on the page sections - see SECTION_OVERRIDES below
	 *
	 */
	
	var utils = __webpack_require__(143);
	var sections = __webpack_require__(152);
	var locale = __webpack_require__(153);
	
	/**
	 * Overrides for the advert text based on sections & ad text key.
	 *
	 * Eg on bbc.com/sport/ultimate-performers/23003279?ads-debug
	 * sections.getSections() = ['sport', 'ulitamate-performers'];
	 *
	 * overrides = {
	     *   'sport': {
	     *     'ultimate-performers': {
	     *       inAssociationWithText: 'foo'
	     *     }
	     *   }
	     * }
	 *
	 * Wildcards (*) can be used to mean this section or any children thereof. Using the
	 * example data below, that would also match http://www.bbc.com/sport/ultimate-performers/rugbyfacts
	 * where sections.getSections() = ['sport', 'ulitamate-performers', 'rugbyfacts'];
	 *
	 * overridesWithWildcard = {
	     *   'sport': {
	     *     'ultimate-performers': {
	     *       '*': {
	     *         inAssociationWithText: 'foo'
	     *       }
	     *     }
	     *   }
	     * }
	 *
	 */
	var SECTION_OVERRIDES = {
	    'sport': {
	        'ultimate-performers': {
	            '*': {
	                inAssociationWithText: 'Partnered Content Presented by'
	            }
	        },
	        'move-like-never-before': {
	            '*': {
	                inAssociationWithText: 'Partnered Content Presented by'
	            }
	        },
	        'home-of-the-english-premier-league': {
	            '*': {
	                inAssociationWithText: 'Partnered Content Presented by'
	            }
	        }
	    }
	};
	
	/**
	 * Map of adTextKeys to info URL locale keys. This allows us to have different
	 * info URLs for different ad texts.
	 *
	 * @type {Object}
	 */
	var AD_TEXT_KEY_TO_URL_LOCALE_KEY_MAP = {
	    advertisementText: 'advertInfoPageUrl',
	    inAssociationWithText: 'associationInfoPageUrl',
	    sponsoredByText: 'associationInfoPageUrl',
	    advertisingPartnersText: 'associationInfoPageUrl',
	    adsByGoogleText: 'googleAdsPageUrl'
	};
	
	/**
	 * When there is no match in the map above for a given ad text key, use the below
	 * key when looking up the ad info URL in the locale.
	 *
	 * @type {string}
	 */
	var DEFAULT_INFO_URL_LOCALE_KEY = 'advertInfoPageUrl';
	
	module.exports = {
	
	    /**
	     * Get the ad text for the given adTextKey. If the adTextKey is invalid it will return undefined.
	     *
	     * @param adTextKey
	     * @returns {String|undefined}
	     */
	    getText: function getText(adTextKey) {
	        var s = utils.cleanArray(sections.getSections());
	        var overrides = SECTION_OVERRIDES;
	        var override;
	
	        // Return the matching object from the data config above.
	        var i, n;
	        for (i = 0, n = s.length; i < n; ++i) {
	            var k = s[i];
	            if (overrides.hasOwnProperty(k)) {
	                overrides = overrides[k];
	            } else if (!overrides.hasOwnProperty('*')) {
	                overrides = false;
	                break;
	            }
	        }
	
	        // If we found a matching object, extract the override if present
	        if (overrides && overrides.hasOwnProperty(adTextKey)) {
	            override = overrides[adTextKey];
	        } else if (overrides && overrides.hasOwnProperty('*') && overrides['*'].hasOwnProperty(adTextKey)) {
	            override = overrides['*'][adTextKey];
	        }
	
	        return override || locale.get(adTextKey);
	    },
	
	    /**
	     * Return the info info URL for the given adTextKey. If the adTextKey is invalid it will return undefined
	     *
	     * @param adTextKey
	     * @returns {String|undefined}
	     */
	    getInfoUrl: function getInfoUrl(adTextKey) {
	        var localeKey = AD_TEXT_KEY_TO_URL_LOCALE_KEY_MAP[adTextKey] || DEFAULT_INFO_URL_LOCALE_KEY;
	        return locale.get(localeKey);
	    },
	
	    /**
	     * Set the section overrides, used for unit testing
	     * @param overrides
	     */
	    setSectionOverrides: function setSectionOverrides(overrides) {
	        SECTION_OVERRIDES = overrides;
	    }
	};

/***/ }),
/* 204 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * 1. The first leaderboard slot size is directly aligned to style/orb/css/bbccom-async.css
	 * If you are changing the first size in an ads breakpoint please check it is aligned with the styles for the group
	 */
	var groups = {
	    0: {
	        s: 0,
	        f: 319,
	        slots: {
	            wallpaper: [],
	            leaderboard: [],
	            mpu: [],
	            mpu_middle: [],
	            mpu_bottom: [],
	            sponsor: [],
	            module: [],
	            module_worldinpictures: [],
	            promo: [],
	            ad_feature_rc: [],
	            "native": [[10, 10]],
	            "native_slice_l": [[5, 5]],
	            "native_slice_r": [[5, 5]],
	            "native_side_2": [],
	            "native_main_small": [],
	            "native_main_medium": [],
	            "native_main_large": [],
	            adsense: [],
	            adsense_mpu: [],
	            parallax: [],
	            promo_feature_responsive: [[472, 791]],
	            "responsive_box_1": [[8, 1]],
	            "responsive_box_2": [[8, 1]],
	            "verticalnavbar": [[20, 20]],
	            "infeed": [[12, 12]],
	            "platinum": [[88, 31]]
	        }
	    },
	    1: {
	        s: 320,
	        f: 399,
	        slots: {
	            wallpaper: [],
	            leaderboard: [[320, 50], [300, 50]],
	            mpu: [[300, 50], [320, 50], [300, 250]],
	            mpu_middle: [[300, 251]],
	            mpu_bottom: [[300, 251]],
	            sponsor: [[88, 31]],
	            sponsorbig: [[132, 64]],
	            module: [[88, 31]],
	            module_worldinpictures: [[320, 50], [300, 50]],
	            promo: [],
	            ad_feature_rc: [],
	            "native": [[10, 10]],
	            "native_slice_l": [[5, 5]],
	            "native_slice_r": [[5, 5]],
	            "native_side_2": [],
	            "native_main_small": [],
	            "native_main_medium": [],
	            "native_main_large": [],
	            adsense: [[3, 3]],
	            adsense_mpu: [],
	            parallax: [],
	            promo_feature_responsive: [[472, 791]],
	            "responsive_box_1": [[8, 1]],
	            "responsive_box_2": [[8, 1]],
	            "verticalnavbar": [[20, 20]],
	            "infeed": [[12, 12]],
	            "platinum": [[88, 31]]
	        }
	    },
	    2: {
	        s: 400,
	        f: 599,
	        slots: {
	            wallpaper: [],
	            /** NOTE - Please read point 1 above before changing */
	            leaderboard: [[516, 60], [320, 50], [300, 50]],
	            mpu: [[516, 60], [300, 50], [320, 50], [300, 250]],
	            mpu_middle: [[300, 251]],
	            mpu_bottom: [[300, 251]],
	            sponsor: [[88, 31]],
	            sponsorbig: [[132, 64]],
	            module: [[88, 31]],
	            module_worldinpictures: [[320, 50], [300, 50]],
	            promo: [],
	            ad_feature_rc: [],
	            "native": [[10, 10]],
	            "native_slice_l": [[5, 5]],
	            "native_slice_r": [[5, 5]],
	            "native_side_2": [],
	            "native_main_small": [],
	            "native_main_medium": [],
	            "native_main_large": [],
	            adsense: [[3, 3]],
	            adsense_mpu: [],
	            parallax: [],
	            promo_feature_responsive: [[472, 791]],
	            "responsive_box_1": [[8, 1]],
	            "responsive_box_2": [[8, 1]],
	            "verticalnavbar": [[20, 20]],
	            "infeed": [[12, 12]],
	            "platinum": [[88, 31]]
	        }
	    },
	    3: {
	        s: 600,
	        f: 1007,
	        slots: {
	            wallpaper: [],
	            /** NOTE - Please read point 1 above before changing */
	            leaderboard: [[516, 60], [728, 90], [970, 300], [970, 250], [970, 90], [970, 66]],
	            mpu: [[300, 250], [300, 600]],
	            mpu_middle: [[300, 251]],
	            mpu_bottom: [[300, 251]],
	            sponsor: [[88, 31]],
	            sponsorbig: [[132, 64]],
	            module: [[88, 31]],
	            module_worldinpictures: [[320, 50], [300, 50]],
	            promo: [[336, 224]],
	            ad_feature_rc: [[336, 136]],
	            "native": [[10, 10]],
	            "native_slice_l": [[5, 5]],
	            "native_slice_r": [[5, 5]],
	            "native_side_2": [[336, 209]],
	            "native_main_small": [[384, 258]],
	            "native_main_medium": [[464, 258]],
	            "native_main_large": [[624, 258]],
	            adsense: [[3, 3]],
	            adsense_mpu: [[3, 3]],
	            parallax: [],
	            promo_feature_responsive: [[472, 791]],
	            "responsive_box_1": [[8, 1]],
	            "responsive_box_2": [[8, 1]],
	            "verticalnavbar": [[20, 20]],
	            "infeed": [[12, 12]],
	            "platinum": [[88, 31]]
	        }
	    },
	    4: {
	        s: 1008,
	        f: 10000,
	        slots: {
	            wallpaper: [[1, 1]],
	            /** NOTE - Please read point 1 above before changing */
	            leaderboard: [[728, 90], [970, 300], [970, 250], [970, 90], [970, 66], [940, 230]],
	            mpu: [[300, 250], [300, 600]],
	            mpu_middle: [[300, 251]],
	            mpu_bottom: [[300, 251]],
	            sponsor: [[88, 31]], /* catch all */
	            sponsorbig: [[132, 64]],
	            module: [[88, 31]], /* catch all */
	            module_worldinpictures: [[320, 50], [300, 50]],
	            promo: [[336, 224]],
	            ad_feature_rc: [[336, 136]],
	            "native": [[10, 10]],
	            "native_slice_l": [[5, 5]],
	            "native_slice_r": [[5, 5]],
	            "native_side_2": [[336, 209]],
	            "native_main_small": [[384, 258]],
	            "native_main_medium": [[464, 258]],
	            "native_main_large": [[624, 258]],
	            adsense: [[3, 3]],
	            adsense_mpu: [[3, 3]],
	            parallax: [[976, 400]],
	            promo_feature_responsive: [[472, 791]],
	            "responsive_box_1": [[8, 1]],
	            "responsive_box_2": [[8, 1]],
	            "verticalnavbar": [[20, 20]],
	            "infeed": [[12, 12]],
	            "platinum": [[88, 31]]
	        }
	    }
	};
	
	module.exports = {
	    /**
	     * @param {JSON} customGroups The new groups to replace the current groups object.
	     **/
	    setGroups: function setGroups(customGroups) {
	        groups = customGroups;
	    },
	    /**
	     * @param {Number} group The group id to replace.
	     * @param {JSON} customGroup The new group data.
	     **/
	    setGroup: function setGroup(group, customGroup) {
	        if (customGroup.s && customGroup.f && customGroup.slots) {
	            groups[group] = customGroup;
	            this.setGroupStart(group, customGroup.s);
	            this.setGroupFinish(group, customGroup.f);
	        }
	    },
	    /**
	     * @param {Number} group The group id to replace.
	     * @param {Number} width The new start width of the group.
	     **/
	    setGroupStart: function setGroupStart(group, width) {
	        if (typeof groups[group] !== 'undefined' && typeof groups[group].s !== 'undefined') {
	            groups[group].s = width;
	        }
	        if (typeof groups[group - 1] !== 'undefined' && typeof groups[group - 1].f !== 'undefined') {
	            groups[group - 1].f = width - 1;
	        }
	    },
	    /**
	     * @param {Number} group The group id to replace.
	     * @param {Number} width The new finish width of the group.
	     **/
	    setGroupFinish: function setGroupFinish(group, width) {
	        if (typeof groups[group] !== 'undefined' && typeof groups[group].f !== 'undefined') {
	            groups[group].f = width;
	        }
	        if (typeof groups[group + 1] !== 'undefined' && typeof groups[group + 1].f !== 'undefined') {
	            groups[group + 1].s = width + 1;
	        }
	    },
	    getGroups: function getGroups() {
	        return groups;
	    },
	    getGroup: function getGroup(group) {
	        return groups[group];
	    }
	};

/***/ }),
/* 205 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Internal map of event listener functions. Each property is an event with the corresponding
	 * value being an array of the listeners which are bound to that event.
	 *
	 * @type {{}}
	 */
	var listeners = {};
	
	module.exports = {
	
	    /**
	     * Bind a listener function to a particular event or list of space separated events.
	     *
	     * @param {string} event The event to which we want to listen
	     * @param {function} listener The function to call when the event is triggered
	     */
	    on: function on(event, listener) {
	        var i;
	
	        if (typeof listener !== 'function') {
	            throw new TypeError('Event handler must be a function');
	        }
	
	        var events = event.split(' ');
	        for (i = 0; i < events.length; i++) {
	            listeners[events[i]] = listeners[events[i]] || [];
	            listeners[events[i]].push(listener);
	        }
	
	        return this;
	    },
	
	    /**
	     * Trigger an event calling any listeners which are bound with the arguments given.
	     *
	     * @param {string} event The name of the event to trigger
	     * @param {...*} arguments Any arguments which should be passed to the listener functions
	     */
	    trigger: function trigger(event) {
	        var i;
	
	        if (!listeners.hasOwnProperty(event)) {
	            return this;
	        }
	
	        for (i = 0; i < listeners[event].length; i++) {
	            listeners[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
	        }
	
	        return this;
	    },
	
	    /**
	     * Unbind listener(s) from a particular event. If a listener function is given, only this listener
	     * is unbound. If no listener is given, all listeners for a particular event are unbound.
	     *
	     * @param {string} event The event whose listener(s) we want to unbind
	     * @param {function=} listener Optional listener function to unbind
	     */
	    off: function off(event, listener) {
	        if (!listeners.hasOwnProperty(event)) {
	            return this;
	        }
	
	        if (typeof listener === 'undefined') {
	            delete listeners[event];
	            return this;
	        }
	
	        while (listeners[event].indexOf(listener) >= 0) {
	            listeners[event].splice(listeners[event].indexOf(listener), 1);
	        }
	
	        if (listeners[event].length === 0) {
	            delete listeners[event];
	        }
	
	        return this;
	    },
	
	    /**
	     * Remove all event listeners for all events.
	     */
	    clear: function clear() {
	        listeners = {};
	        return this;
	    }
	};

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * bbcdotcom.adverts.adUnit is responsible for providing the correct adUnits (used to be called 'zone') to DFP.
	 *
	 * adUnits is a forward-slash delimited string for targetting the best adverts to a page.
	 *
	 * eg /4817/bbccom.qa.site.mobile.news/sport_homepage_int
	 *          [      ad unit 1         ] [    ad unit 2   ]
	 */
	var keyValues = __webpack_require__(176);
	var utils = __webpack_require__(143);
	var config = __webpack_require__(150);
	var adUnitWebService = __webpack_require__(207);
	
	var zoneData = {},
	    DFP_ID = '/4817/',
	    DFP_SUITE_DEFAULT = 'desktop',
	    DFP_SUITE_DEVICE_WIDTH_SWITCH = 900,
	    AD_UNIT_DEFAULT = 'bbccom.live.site.news/',
	    AD_UNIT_2_DEFAULT = '_default',
	    UNKNOWN = 'unknown',
	    CHANNEL_KEY = 'channel',
	    SECTION_KEY = 'sectn',
	    SUB_SECTION_KEY = 'subsect',
	    adUnit = AD_UNIT_DEFAULT,
	    customAdUnit = false,
	    dfpSuite = DFP_SUITE_DEFAULT,
	    adUnits2to9 = '',
	    previewUid = false,
	    queryStringOverride = false,
	    allowedSites = {
	    /* Desktop adUnits */
	    live: 'bbccom.live.site.news/',
	    www: 'bbccom.live.site.www/',
	    specials: 'bbccom.live.site.specialfeatures/',
	    preview: 'bbccom.preview.site.test/',
	    test: 'bbccom.test.site.flash/',
	    /* Mobile adUnits */
	    live_mobile: 'bbccom.live.site.mobile.news/',
	    www_mobile: 'bbccom.live.site.mobile.www/',
	    specials_mobile: 'bbccom.live.site.specialfeatures/',
	    preview_mobile: 'bbccom.preview.site.mobile.news/',
	    test_mobile: 'bbccom.qa.site.mobile.news/',
	    /* WorldService adUnits - used for testing only */
	    test_arabic: 'bbcws.test.site.mobile.arabic/',
	    test_russian: 'bbcws.test.site.mobile.russian/',
	    /* BBC Earth */
	    live_earth: 'bbcearth.com/',
	    test_earth: 'bbcearth.test.com/',
	    /* AMP Ad Units */
	    test_amp_news: 'bbccom.test.amp.news/',
	    live_amp_news: 'bbccom.live.amp.news/',
	    /* Sport App */
	    live_sport_app: 'BBCSportAppIOS/',
	    /* EMBED Ad Units */
	    live_embed: 'bbccom.embedplayer/',
	    test_embed: 'bbccom.test.embedplayer/',
	    /* BBC Reel */
	    live_reel: 'bbccom.live.site.reel/',
	    test_reel: 'bbccom.test.site.reel/'
	},
	    WORLD_SERVICE_AD_UNIT_PREFIX = {
	    live_desktop: 'bbcworldservice.live.site.',
	    test_desktop: 'bbcworldservice.test.site.',
	    live_mobile: 'bbcws.live.site.mobile.',
	    test_mobile: 'bbcws.test.site.mobile.'
	},
	    WORLD_SERVICE_AD_UNIT_SUFFIX_MAP = {
	    japanese: 'japan'
	},
	    VERTICALS_AD_UNITS_PREFIX = {
	    live: 'bbccom.live.site.',
	    test: 'bbccom.test.site.'
	},
	    AD_UNIT2_EXCEPTIONS = {
	    '^\/sport\/football\/teams\/(liverpool|manchester-city)': 'sport_football$1_content',
	    '^\/news\/election\/us2016': 'news_uscanada_content'
	},
	    sections,
	    adSections,
	    windowLocation = '';
	
	/**
	 * Based on visitor's browser width, determine whehter to return mobile or desktop suite.
	 */
	var assignDfpSuite = function assignDfpSuite(clientWidth) {
	    if (clientWidth < DFP_SUITE_DEVICE_WIDTH_SWITCH) {
	        dfpSuite = 'mobile';
	    } else {
	        dfpSuite = 'desktop';
	    }
	};
	
	/**
	 * Get the world service suffix to add to the primary adUnit. Basically adSections[0] run through
	 * WORLD_SERVICE_AD_UNIT_SUFFIX_MAP to see if there is an override and some special rules for China
	 *
	 * eg bbcworldservice.live.site.<suffix>/
	 *
	 * @returns {string}
	 */
	var getWorldServiceAdUnitSuffix = function getWorldServiceAdUnitSuffix() {
	    var adUnitSuffix = WORLD_SERVICE_AD_UNIT_SUFFIX_MAP[adSections[0]] || adSections[0];
	    if (adSections[0] === 'zhongwen' || adSections[0] === 'ukchina') {
	        adUnitSuffix += adSections[1];
	    }
	
	    if (dfpSuite === 'desktop' && adUnitSuffix === 'russian') {
	        //BBCCOM-7713
	        adUnitSuffix = "russia";
	    }
	
	    return adUnitSuffix;
	};
	
	/**
	 * Determine AdUnit 1
	 * eg /4817/bbccom.qa.site.mobile.news/sport_homepage_int
	 *          [      ad unit 1         ] [    ad unit 2   ]
	 */
	var deriveAdUnit1 = function deriveAdUnit1() {
	    var mDotRegExp = new RegExp('(m.stage.|m.)bbc.co(m|m\/|.uk|.uk\/)'),
	        isTestEnv = utils.isTestEnv(),
	        adUnitOverride = utils.getUriParamByName('ad-unit', false),
	        siteOverride = utils.getUriParamByName('site', false),
	        uidOverride = utils.getUriParamByName('uid', false);
	
	    // User override for previewing an advert creative
	    if (uidOverride) {
	        previewUid = uidOverride;
	    }
	    if (!utils.isLiveEnv() && adUnitOverride) {
	        // Allow ad unit to be overridden un the URI
	        adUnit = adUnitOverride + '/';
	        queryStringOverride = true;
	    } else if (siteOverride === 'preview') {
	        adUnit = allowedSites.preview;
	        queryStringOverride = true;
	    } else if (siteOverride && typeof allowedSites[siteOverride] !== 'undefined') {
	        // User override of site
	        adUnit = allowedSites[siteOverride];
	        queryStringOverride = true;
	    } else if (sections[0] === 'worldservice' && typeof adSections[0] !== 'undefined') {
	        // World Service
	        // bbcworldservice.live.site.<adSections[0]>/ eg bbcworldservice.live.site.arabic/
	        adUnit = WORLD_SERVICE_AD_UNIT_PREFIX[(isTestEnv ? 'test' : 'live') + '_' + dfpSuite] + getWorldServiceAdUnitSuffix() + '/';
	    } else if (/^(earth)$/.test(adSections[0])) {
	        // Earth
	        adUnit = isTestEnv ? allowedSites.test_earth : allowedSites.live_earth;
	    } else if (isTestEnv && utils.getCookie('ad-unit') !== 'live') {
	        // Visitor is on sandbox/int/test, therefore show test adverts from test site
	        adUnit = dfpSuite === 'desktop' ? allowedSites.test : allowedSites.test_mobile;
	    } else if (config.isSportApp()) {
	        // Sport Mobile App
	        adUnit = allowedSites.live_sport_app;
	    } else if (sections[0] === 'homepage') {
	        // Homepage
	        adUnit = dfpSuite === 'desktop' ? allowedSites.www : allowedSites.www_mobile;
	    } else if (/^(autos|capital|culture|future|travel|worklife)$/.test(adSections[0])) {
	        // Verticals
	        var site = adSections[0].replace(/autos/, 'auto');
	        adUnit = VERTICALS_AD_UNITS_PREFIX[isTestEnv ? 'test' : 'live'] + site + '/';
	    } else if (mDotRegExp.test(windowLocation.href)) {
	        // Mobile vs Desktop
	        adUnit = dfpSuite === 'desktop' ? allowedSites.live : allowedSites.live_mobile;
	    } else if (/(.com|.co.uk|.net)\/specialfeatures\//.test(windowLocation.href)) {
	        // Special Features
	        adUnit = dfpSuite === 'desktop' ? allowedSites.specials : allowedSites.specials_mobile;
	    } else if (/\/embed$/.test(windowLocation.pathname)) {
	        // Embed video
	        adUnit = isTestEnv ? allowedSites.test_embed : allowedSites.live_embed;
	    } else if (/(.com|.co.uk)\/reel/.test(windowLocation.href)) {
	        // Reel
	        adUnit = isTestEnv ? allowedSites.test_reel : allowedSites.live_reel;
	    } else {
	        // Default site (needs to be the right default for mobile/desktop based on width)
	        adUnit = dfpSuite === 'mobile' ? allowedSites.live_mobile : AD_UNIT_DEFAULT;
	    }
	};
	
	/**
	 * Using the current page, determine what the zone should be.  Uses sections to break
	 * down the path of the Uri into logical sections.
	 */
	var deriveAdUnit2to9FromUri = function deriveAdUnit2to9FromUri() {
	    var i,
	        pattern,
	        re,
	        out = AD_UNIT_2_DEFAULT,
	        urlPath = '/' + adSections.join('/');
	
	    if (typeof adSections !== 'undefined' && adSections.length !== 0 && adSections[0] !== UNKNOWN) {
	
	        // Make sure all section parts are defined (make empty if not)
	        for (i = 0; i < 5; i++) {
	            adSections[i] = typeof adSections[i] === 'undefined' ? '' : adSections[i];
	            sections[i] = typeof sections[i] === 'undefined' ? '' : sections[i];
	        }
	        // Very Specific Exceptions
	        for (pattern in AD_UNIT2_EXCEPTIONS) {
	            re = new RegExp(pattern);
	            if (re.test(urlPath)) {
	                // Found pattern match
	                // eg {"\/sport\/football\/(hello|world)": "sport_football$1_content"} => "sport_footballhello_content"
	                out = AD_UNIT2_EXCEPTIONS[pattern].replace('$1', RegExp.$1).replace('$2', RegExp.$2);
	                break;
	            }
	        }
	        // Broad Exceptions
	        if (out === AD_UNIT_2_DEFAULT) {
	            if (adSections[0] === 'homepage') {
	                // BBC Homepage eg www.bbc.com/
	                out = 'bbc_homepage_int';
	            } else if (adSections[0] === 'reel') {
	                out = adSections[1] === '' ? 'reel_homepage' : 'reel_other';
	            } else if (adSections[1] === '') {
	                // Frontpage - News/Sport/Weather/blah eg news_homepage_int
	                out = adSections[0] + '_homepage_int';
	                adSections[1] = 'homepage';
	            } else if (adSections[0] === 'news' && sections[1] === 'world' && sections[2] !== '') {
	                // /news/world complications - NOTE adSections vs sections
	                // eg sections=/news/world/asia/india and adSections=/news/worldasia/india => news_asia_content with sectn=india
	                out = adSections[0] + '_' + sections[2] + '_content';
	            } else if (adSections[0] === 'specialfeatures') {
	                // Specials eg horizonsbusiness_home, horizonsbusiness_episodes
	                // eg /specialfeatures/horizonsbusiness/
	                out = adSections[1] + '_' + (adSections[2] === '' ? 'home' : adSections[2]);
	            } else if (adSections[0] === 'zhongwen' || adSections[0] === 'ukchina') {
	                // e.g. http://www.bbc.com/zhongwen/trad/world > zhongwentrad_world_content
	                out = adSections[0] + adSections[1] + '_' + (adSections[2] === '' ? 'home' : adSections[2]) + '_content';
	            } else {
	                // Standard
	                // eg /news/business
	                out = adSections[0] + '_' + adSections[1] + '_content';
	            }
	        }
	        keyValues.set(CHANNEL_KEY, adSections[0]);
	        keyValues.set(SECTION_KEY, adSections[1]);
	        keyValues.set(SUB_SECTION_KEY, adSections[2]);
	    }
	    return out.replace(/-/, '');
	};
	
	/**
	 * Determine AdUnit 2 to 9
	 * eg /4817/bbccom.qa.site.mobile.news/sport_homepage_int
	 *          [      ad unit 1         ] [    ad unit 2   ]
	 */
	var deriveAdUnit2to9 = function deriveAdUnit2to9(serversideAdUnits2to9) {
	    if (typeof serversideAdUnits2to9 !== "undefined" && serversideAdUnits2to9 === 'frameworks_barlesque') {
	        var data = this.processZoneData(windowLocation.pathname, adUnitWebService.zones);
	        adUnits2to9 = data.zone;
	    } else if (typeof serversideAdUnits2to9 !== 'undefined') {
	        adUnits2to9 = serversideAdUnits2to9;
	    } else {
	        adUnits2to9 = deriveAdUnit2to9FromUri();
	    }
	};
	
	module.exports = {
	    init: function init(clientWidth, serversideAdUnits2to9, adSectionsArray, sectionsArray) {
	        windowLocation = config.getWindowLocation();
	        sections = sectionsArray;
	        adSections = adSectionsArray;
	        if (typeof clientWidth === "number") {
	            assignDfpSuite(clientWidth);
	        }
	        deriveAdUnit1();
	        deriveAdUnit2to9(serversideAdUnits2to9);
	    },
	    get: function get() {
	        if (customAdUnit === false) {
	            return DFP_ID + adUnit + adUnits2to9;
	        } else if (queryStringOverride === true) {
	            return DFP_ID + adUnit + (customAdUnit.indexOf('/') !== -1 ? customAdUnit.split('/')[1] : '/' + AD_UNIT_2_DEFAULT);
	        } else {
	            return DFP_ID + customAdUnit + (customAdUnit.indexOf('/') !== -1 ? '' : '/' + AD_UNIT_2_DEFAULT);
	        }
	    },
	    setUid: function setUid(overrideUid) {
	        previewUid = overrideUid;
	    },
	    setAdUnit: function setAdUnit(overrideAdUnit) {
	        if (typeof overrideAdUnit !== 'undefined') {
	            if ('undefined' !== typeof allowedSites[overrideAdUnit]) {
	                adUnit = allowedSites[overrideAdUnit];
	            }
	            if (/(bbccom\.(test|live)\.site|bbcearth\.com|bbcearth\.test\.com)/.test(overrideAdUnit)) {
	                customAdUnit = overrideAdUnit;
	            }
	        }
	    },
	    getPreviewUid: function getPreviewUid() {
	        return previewUid;
	    },
	    getAdUnit1: function getAdUnit1() {
	        return adUnit.endsWith('/') ? adUnit.substr(0, adUnit.length - 1) : adUnit;
	    },
	    getAdUnits2to9: function getAdUnits2to9() {
	        return adUnits2to9;
	    },
	    /*
	     * NOTE - This logic is only here for sites that are served of CDN
	     * TODO - Rename vars from zone to adUnit (New terminology)
	     */
	    processZoneData: function processZoneData(href, zone) {
	        var x, z;
	        if (('undefined' === typeof zone.uri || -1 !== href.indexOf(zone.uri)) && 'undefined' !== typeof zone.data) {
	            for (x in zone.data) {
	                zoneData[x] = zone.data[x];
	                if ('undefined' !== typeof zone.zones) {
	                    for (z in zone.zones) {
	                        if ('undefined' !== typeof zone.zones[z].uri) {
	                            href = href.replace(zone.uri, '');
	                        }
	                        this.processZoneData(href, zone.zones[z]);
	                    }
	                }
	            }
	        }
	        return zoneData;
	    },
	    /*
	     * For testing only, may look at newing up a new object each time.
	     */
	    r: function r() {
	        windowLocation = '';
	        adUnit = AD_UNIT_DEFAULT;
	        adUnits2to9 = AD_UNIT_2_DEFAULT;
	        dfpSuite = DFP_SUITE_DEFAULT;
	        customAdUnit = false;
	        previewUid = false;
	        queryStringOverride = false;
	    }
	};

/***/ }),
/* 207 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {
	    zones: {
	        data: {
	            uri: "/",
	            site: "bbccom.live.site.mobile.news",
	            zone: ""
	        },
	        zones: [{
	            uri: "specialfeatures/",
	            data: {
	                zone: "news_specialfeatures_content"
	            },
	            zones: [{
	                uri: "horizonsbusiness",
	                data: {
	                    zone: "horizonsbusiness_home"
	                },
	                zones: [{
	                    uri: "/megatrend",
	                    data: {
	                        zone: "horizonsbusiness_other"
	                    }
	                }, {
	                    uri: "/clips-library",
	                    data: {
	                        zone: "horizonsbusiness_clips"
	                    }
	                }, {
	                    uri: "/episodes",
	                    data: {
	                        zone: "horizonsbusiness_episodes"
	                    }
	                }, {
	                    uri: "/episode",
	                    data: {
	                        zone: "horizonsbusiness_episode"
	                    }
	                }]
	            }]
	        }, {
	            uri: "wwscripts/",
	            data: {
	                zone: "wwscripts_content"
	            },
	            zones: [{
	                uri: "test/",
	                data: {
	                    zone: "wwscripts_test_content"
	                },
	                zones: [{
	                    uri: "orb-web-service",
	                    data: {
	                        zone: "wwscripts_test_orbwebservice"
	                    }
	                }]
	            }]
	        }]
	    }
	};

/***/ }),
/* 208 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (adID, groups) {
	
	    var ad, slot, slotDomChildElement;
	
	    var currentGroupId = bbcdotcom.adverts.layout.getCurrentGroupId();
	
	    if (window.bbcdotcom && bbcdotcom.ad && bbcdotcom.isActive && bbcdotcom.isActive('ads')) {
	        ad = bbcdotcom.ad(adID);
	        if (typeof ad !== 'undefined' && !ad.hasAnyGroupAlreadyBeenRegistered([groups])) {
	            ad.registerSlotGroups(groups);
	            if (groups.indexOf(currentGroupId) >= 0) {
	
	                ad.setCurrentSlotGroups(groups);
	
	                slot = document.getElementById('bbccom_' + ad.getAdId() + '_' + groups.join('_'));
	                slotDomChildElement = slot.firstElementChild || slot.firstChild;
	                if (slotDomChildElement) {
	                    slotDomChildElement.id = 'bbccom_' + ad.getAdId();
	                }
	                bbcdotcom.utils.addTagClass(slot, 'bbccom_' + ad.adType + '_slot');
	            }
	        }
	    }
	};

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var config = __webpack_require__(150);
	var sections = __webpack_require__(152);
	var utils = __webpack_require__(143);
	var AnalyticsHelper = __webpack_require__(171);
	
	function getDeprecatedSlotList() {
	    var windowLocation = config.getWindowLocation(),
	        section = sections.getSection(0),
	        index = sections.getSection(1),
	        sub_index = sections.getSection(2),
	        sub_section = section + '|' + index,
	        out = ['inread', 'infeed_sport_story', 'infeed_sport_index', 'infeed_sport_fp', 'infeed_ctp', 'native_ctp'],
	
	    /**
	     * BBCCOM-7985, GNLADAPPS-106
	     */
	    outBySection = {
	        'worldservice': ['sponsor_section', 'mpu_bottom'],
	        'homepage': ['module_feature-2', 'parallax'],
	        'travel': ['responsive_box_1', 'promo_feature_responsive', 'promo_feature_1', 'promo_feature_2', 'promo_feature_3', 'ad_feature_rc', 'native_responsive'],
	        'future': ['responsive_box_1', 'promo_feature_responsive', 'promo_feature_1', 'promo_feature_2', 'promo_feature_3', 'ad_feature_rc'],
	        'worklife': ['responsive_box_1', 'promo_feature_responsive', 'promo_feature_1', 'promo_feature_2', 'promo_feature_3', 'ad_feature_rc'],
	        'earth': ['parallax', 'verticalnavbar', 'sponsor_section', 'responsive_box_1', 'promo_feature_1', 'promo_feature_2', 'promo_feature_3', 'ad_feature_rc', 'native_side'],
	        'culture': ['promo_feature_responsive', 'promo_feature_1', 'promo_feature_2', 'promo_feature_3', 'ad_feature_rc'],
	        'capital': ['responsive_box_1', 'promo_feature_responsive', 'promo_feature_1', 'promo_feature_2', 'promo_feature_3', 'ad_feature_rc'],
	        'autos': ['parallax', 'verticalnavbar', 'sponsor_section', 'responsive_box_1', 'promo_feature_responsive', 'promo_feature_1', 'promo_feature_2', 'promo_feature_3', 'ad_feature_rc'],
	        'news': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module', 'native_slice_r'],
	        'sport': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module'],
	        'worldservice|persian': ['adsense'],
	        'worldservice|swahili': ['adsense'],
	        'news|entertainment-arts': ['adsense', 'outbrain', 'outbrain_tr_1', 'outbrain_ar_5', 'outbrain_ar_7', 'outbrain_ar_8', 'outbrain_ar_9']
	    },
	        exceptionsBySection = {
	        'news|business': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module'],
	        'news|technology': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module'],
	        'news|resources': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module'],
	        'sport|golf': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module'],
	        'sport|tennis': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module'],
	        'sport|football': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module'],
	        'sport|formula1': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module'],
	        'sport|equestrian': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module'],
	        'sport|horse-racing': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module'],
	        'sport|olympics': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module'],
	        'sport|move-like-never-before': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module'],
	        'sport|home-of-the-english-premier-league': ['sponsor', 'sponsor_section', 'sponsor_banner', 'module']
	    };
	
	    if (config.isTlSportStoryEnabled()) {
	        out = out.filter(function (element) {
	            return element !== 'infeed_sport_story';
	        });
	    }
	    if (config.isTlSportIndexEnabled()) {
	        out = out.filter(function (element) {
	            return element !== 'infeed_sport_index';
	        });
	    }
	    if (config.isTlSportFpEnabled()) {
	        out = out.filter(function (element) {
	            return element !== 'infeed_sport_fp';
	        });
	    }
	    if (/testctp/i.test(window.location.href)) {
	        out = out.filter(function (element) {
	            return element !== 'infeed_ctp';
	        });
	        out = out.filter(function (element) {
	            return element !== 'native_ctp';
	        });
	    }
	
	    /**
	     * BBCCOM-8012: This page uses live stream, shouldn't include 'mpu' in adsToDisplay
	     */
	    if (/^\/news\/world\/us_and_canada\/states/.test(windowLocation.pathname)) {
	        out.push('mpu');
	    }
	    /**
	     * BBCCOM-8287: Put Adsense behind flagpole
	     */
	    if (!config.isAdsenseEnabled() || windowLocation.pathname.indexOf('/weather/0') === 0) {
	        out.push('adsense');
	        out.push('adsense_mpu');
	    }
	    if (outBySection[section]) {
	        out = out.concat(outBySection[section]);
	    }
	    if (outBySection[sub_section]) {
	        out = out.concat(outBySection[sub_section]);
	    }
	    if (exceptionsBySection[sub_section]) {
	        out = out.filter(function (element) {
	            return !exceptionsBySection[sub_section].includes(element);
	        });
	    }
	    /*
	     * GNLADAPPS-183
	     */
	    if ('future/earth/culture/capital/autos/worklife'.indexOf(section) !== -1) {
	        if (/(\/story\/)(\d{8})(-)/.test(windowLocation.pathname)) {
	            out.push('native_responsive');
	        } else {
	            out.push('native_side');
	        }
	    }
	    if (!(section === 'news' && AnalyticsHelper.getPageType() === 'STORY') && section !== 'homepage') {
	        out.push('native');
	    }
	    if (!config.isPlatinumEnabled()) {
	        out.push('platinum');
	    }
	
	    /*
	     * GNLADAPPS-219, GNLADAPPS-220
	     */
	    if (sub_section === 'news|the-reporters' || sub_section === 'news|special-reports' || sub_section === 'news|world' && sub_index === 'radio-tv') {
	        out.push('infeed_news_index');
	        out.push('native_slice_l');
	    }
	    /*
	     * No interstitial on Sport App, Autos, Worldservice except Story pages on Arabic|Japan|Mundo|Brasil
	     */
	    if (config.isSportApp() || section === 'autos' || section === 'japan' && AnalyticsHelper.getPageType() !== 'STORY' || section === 'worldservice' && (AnalyticsHelper.getPageType() !== 'STORY' || AnalyticsHelper.getPageType() === 'STORY' && "arabic|mundo|portuguese|japanese".indexOf(index) === -1)) {
	        out.push('interstitial');
	    }
	
	    if (AnalyticsHelper.getPageType() === 'VIDEO' && section === 'sport') {
	        out.push('leaderboard');
	    }
	
	    // Google native test
	    if (utils.isTestEnv() && /[?|&]googlenative/.test(window.location.href) && section === 'news' && AnalyticsHelper.getPageType() === 'STORY') {
	        out.push('mpu');
	        out.push('leaderboard');
	    }
	
	    // Google native test
	    if (utils.isTestEnv() && /[?|&]googlenative/.test(window.location.href) && section === 'news' && AnalyticsHelper.getPageType() === 'INDEX') {
	        out.push('mpu');
	        out.push('leaderboard');
	    }
	
	    if (section === 'news' && document.getElementsByClassName('column--single-column-layout').length > 0 && AnalyticsHelper.getPageType() === 'STORY') {
	        out.push('mpu');
	        out.push('mpu_bottom');
	    }
	
	    return out.join('|');
	}
	
	function isLazyLoadedSlot(adId) {
	    var section = sections.getSection(0),
	        lazyLoadBySection = {
	        /* Section, slot, element to look out for on scroll event to trigger the ad request*/
	        'homepage|mpu_bottom': 'module--secondary-special-features'
	    };
	    return lazyLoadBySection[section + '|' + adId];
	}
	
	module.exports = {
	    build: function build(adsToDisplay) {
	        var deprecatedSlot = getDeprecatedSlotList();
	
	        if (config.isSportApp()) {
	            return adsToDisplay.filter(function (element) {
	                return element.includes('mpu') && !element.includes('mpu_') && !element.includes('_mpu');
	            });
	        } else {
	            return adsToDisplay.filter(function (element) {
	                return !deprecatedSlot.match(new RegExp("(^|\\|)(" + element + ")($|\\|)", "g")) && !isLazyLoadedSlot(element);
	            });
	        }
	    },
	    isSlotEnabled: function isSlotEnabled(adId) {
	        var deprecatedSlot = getDeprecatedSlotList();
	        return !deprecatedSlot.match(new RegExp("(^|\\|)(" + adId + ")($|\\|)", "g"));
	    },
	    isLazyLoadedSlot: isLazyLoadedSlot
	};

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _comScore = __webpack_require__(211);
	
	var _comScore2 = _interopRequireDefault(_comScore);
	
	var _comScoreStreaming = __webpack_require__(259);
	
	var _comScoreStreaming2 = _interopRequireDefault(_comScoreStreaming);
	
	var _sscHelper = __webpack_require__(261);
	
	var _sscHelper2 = _interopRequireDefault(_sscHelper);
	
	var _overrides = __webpack_require__(260);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = Object.assign(_comScore2['default'], {
	    streamSense: _comScoreStreaming2['default'],
	    sscHelper: _sscHelper2['default'],
	    setMetricOverride: _overrides.setOverride
	});
	module.exports = exports['default'];

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _get2 = __webpack_require__(212);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _utils = __webpack_require__(143);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _helper = __webpack_require__(171);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	var _logger = __webpack_require__(144);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	var _comScoreHelpers = __webpack_require__(157);
	
	var _comScoreStreaming = __webpack_require__(259);
	
	var _comScoreStreaming2 = _interopRequireDefault(_comScoreStreaming);
	
	var _sections = __webpack_require__(152);
	
	var _sections2 = _interopRequireDefault(_sections);
	
	var _getUserTrackingCookie = __webpack_require__(196);
	
	var _getUserTrackingCookie2 = _interopRequireDefault(_getUserTrackingCookie);
	
	var _getSectionStrings = __webpack_require__(184);
	
	var _getSectionStrings2 = _interopRequireDefault(_getSectionStrings);
	
	var _getPageType = __webpack_require__(182);
	
	var _getPageType2 = _interopRequireDefault(_getPageType);
	
	var _sanitiseValues = __webpack_require__(173);
	
	var _metricsBuilder = __webpack_require__(158);
	
	var _metricsBuilder2 = _interopRequireDefault(_metricsBuilder);
	
	var _overrides = __webpack_require__(260);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var log = (0, _logger2['default'])('analytics:comScore');
	var DELAY_TRACKING_COOKIE = 'ckpf_gnlcs'; // ComScore specific
	
	var ComScore = function () {
	    function ComScore() {
	        _classCallCheck(this, ComScore);
	
	        this.playlistCount = 0;
	        this.videoEventCounter = 0;
	        this.allowLinkTracking = true;
	        this.isPlaylistStarted = false;
	        this.userTrackingCookieValue = false;
	        this.trackingRequests = { 'http': [], 'cookie': [] };
	        this.keyValues = {};
	        this.isScwHandlerUsed = false;
	    }
	
	    /**
	     * Executed in bbcdotcom.init
	     * Note: some pages such as /blogs do not run bbcdotcom.init() grrrr
	     */
	
	
	    _createClass(ComScore, [{
	        key: 'init',
	        value: function init() {
	            this.userTrackingCookieValue = (0, _getUserTrackingCookie2['default'])();
	            _helper2['default'].processDelayTrackingCookie(DELAY_TRACKING_COOKIE, this.trackingRequests);
	
	            setupStreamSense.call(this);
	            return this;
	        }
	    }, {
	        key: 'getScwForApp',
	        value: function getScwForApp() {
	            var _this = this;
	
	            log('getScwForApp() called to get "scw"');
	            this.isScwHandlerUsed = true;
	            return {
	                initAppPageTracking: function initAppPageTracking(pageName, uri, pageType) {
	                    _this.setApp({ pageName: pageName });
	                },
	                setAppName: function setAppName(appName) {
	                    _this.setApp({ appName: appName });
	                },
	                setAppVersionNumber: function setAppVersionNumber(appVersion) {
	                    _this.setApp({ appVersion: appVersion });
	                },
	                setAppOs: function setAppOs(appOs) {
	                    _this.setApp({ appOs: appOs });
	                },
	                appTrackPage: function appTrackPage() {
	                    _this.page();
	                }
	            };
	        }
	    }, {
	        key: 'setApp',
	        value: function setApp(keyValue) {
	            var conf;
	            for (conf in keyValue) {
	                switch (conf) {
	                    case 'appName':
	                        this.keyValues.b_app_name = keyValue[conf] + "|app";
	                        if (keyValue[conf] === "horizons") {
	                            this.keyValues.b_site_channel = 'news';
	                        }
	                        break;
	                    case 'appVersion':
	                        this.keyValues.b_app_imp_ver = keyValue[conf];
	                        break;
	                    case 'appOs':
	                        this.keyValues.b_app_os = keyValue[conf];
	                        break;
	                    case 'pageName':
	                        this.keyValues.name = keyValue[conf];
	                    default:
	                        break;
	                }
	            }
	        }
	    }, {
	        key: 'setAllowLinkTracking',
	        value: function setAllowLinkTracking(enabled) {
	            this.allowLinkTracking = enabled ? true : false;
	        }
	    }, {
	        key: 'getTrackingRequests',
	        value: function getTrackingRequests(type) {
	            if (typeof type === 'undefined' || type !== 'http' && type !== 'cookie') {
	                throw new Error('Invalid type provided to getTrackingRequests() "' + type + '"');
	            }
	            return this.trackingRequests[type];
	        }
	    }, {
	        key: 'getTrackingValue',
	        value: function getTrackingValue() {
	            return '';
	        }
	    }, {
	        key: 'setUserTrackingCookie',
	        value: function setUserTrackingCookie(val) {
	            this.userTrackingCookieValue = val;
	        }
	    }, {
	        key: 'getUserTrackingCookie',
	        value: function getUserTrackingCookie() {
	            return this.userTrackingCookieValue;
	        }
	
	        /**
	         * For testing.
	         */
	
	    }, {
	        key: 'r',
	        value: function r() {
	            this.userTrackingCookieValue = false;
	            this.allowLinkTracking = true;
	            this.trackingRequests = { 'http': [], 'cookie': [] };
	            _comScoreStreaming2['default'].videoEvents = [];
	            this.isPlaylistStarted = false;
	            _utils2['default'].deleteCookie(DELAY_TRACKING_COOKIE);
	            this.videoEventCounter = 0;
	        }
	
	        /**
	         * =================================================================================================================
	         * Page Tracking
	         * =================================================================================================================
	         */
	
	        /**
	         * Website Page Tracking
	         */
	
	    }, {
	        key: 'page',
	        value: function page(referrer) {
	            if (!_config2['default'].isComScoreEnabled()) {
	                log('did not do tracking because isComScoreEnabled=false');
	                return false;
	            }
	            try {
	                var keyValues = (0, _comScoreHelpers.getCoreKeyValues)();
	                keyValues = (0, _comScoreHelpers.appendPageCoreKeyValues)(keyValues);
	
	                // single page apps need to pass referrer in
	                if (typeof referrer !== 'undefined') {
	                    keyValues.c9 = referrer;
	                }
	
	                Object.assign(keyValues, this.keyValues);
	                doTrack.call(this, keyValues, 'page');
	                if (this.allowLinkTracking) {
	                    _helper2['default'].applyLinkTrackingToPageElements(this.link.bind(this)); // NOTE: processLink() method is callback
	                }
	            } catch (exception) {
	                log.error('bbcdotcom.analytics.page() exception "' + exception.message + '"');
	            }
	        }
	
	        /**
	         * =================================================================================================================
	         * Link Tracking
	         * =================================================================================================================
	         */
	
	        /**
	         * Method used to report on the link which has been clicked
	         *
	         *No longer tracking advertising because of issues not opening in new window (cannot reliably open in new window with JS)
	         *External links will fire request to analytics immediately, then open link (not in new tab/window because not possible in JS)
	         *Internal links will drop a cookie and pick up the click tracking on the subsequent page
	         *
	         * @param object linkObj is the <a> clicked, for example:
	         *      { href:'http://www.bbc.com/travel', title:'Travel website',
	         *        rev:'hello|world', data-track:'hello|world'}
	         * @param object event Event object
	         */
	
	    }, {
	        key: 'link',
	        value: function link(linkObj, event) {
	            // Title of the page at the other end of the link (generally data is stored within 'title' attribute
	            // of anchor <a href="" title="">.
	            if (!_config2['default'].isComScoreEnabled()) {
	                return false;
	            }
	            if (typeof linkObj === 'undefined' || typeof linkObj.href === 'undefined') {
	                return false;
	            }
	            // Key-Values to send
	            var keyValues = (0, _comScoreHelpers.getCoreKeyValues)(),
	                vars = _helper2['default'].getLinkTrackingProperties(linkObj),
	                uri = linkObj.href; //helper.normalizeUri(linkObj.href);
	
	            if (!vars) {
	                return '';
	            }
	
	            var metricsBuilder = new _metricsBuilder2['default']();
	
	            var isBBCUri = _helper2['default'].isBBCUri(uri);
	            metricsBuilder['with']('pev1', { value: uri.substr(0, 255), preRequisite: function preRequisite() {
	                    return isBBCUri;
	                } });
	            metricsBuilder['with']('domainFromUrl', { mapName: 'pev1', args: [uri], preRequisite: function preRequisite() {
	                    return !isBBCUri;
	                } });
	
	            // pageType is 'index', 'story', 'map'.
	            vars.pageType = (0, _getPageType2['default'])(linkObj.href).substring(0, 3).replace('|', '');
	            keyValues = (0, _comScoreHelpers.appendNonPageCoreKeyValues)(keyValues);
	            keyValues.b_link = buildPipeDelimitedKey.call(this, vars);
	
	            keyValues = Object.assign(keyValues, metricsBuilder.build());
	
	            _helper2['default'].trackLink(doTrack.bind(this), DELAY_TRACKING_COOKIE, uri, event, keyValues); // NOTE: doTrack() method is callback
	        }
	    }]);
	
	    return ComScore;
	}();
	
	exports['default'] = new ComScore();
	
	/**
	 * =================================================================================================================
	 * PRIVATE METHODS
	 * =================================================================================================================
	 */
	
	function setupStreamSense() {
	    // Proxy methods
	    var i, l;
	    var methods = ['startPlaylist', 'adRequest', 'adManagerLoaded', 'startAdvert', 'endAdvert', 'startProgramme', 'startPause', 'endPause', 'startSeek', 'endSeek', 'endProgramme',
	    //'endPlaylist',
	    //'isPlaylistStarted',
	    'duration', 'uiinfo', 'volumeChange', 'startPreview', 'stopPreview'];
	    for (i = 0, l = methods.length; i < l; i++) {
	        ComScore.prototype[methods[i]] = _comScoreStreaming2['default'][methods[i]].bind(_comScoreStreaming2['default']);
	    }
	
	    _comScoreStreaming2['default'].init();
	};
	
	/**
	 * Make request to ComScore endpoint
	 *
	 * @param object customTrackingKeyValues eg {}
	 * @param string trackType eg page, link, video
	 * @param function callback will be called when the tracking request is complete
	 * @param boolean makeImageRequest whether to make request or not
	 * @return mixed boolean|string false=ComScore disabled
	 */
	function doTrack(keyValues, type, callback, makeImageRequest) {
	    var key;
	    if (!_config2['default'].isAnalyticsEnabled()) {
	        log('did not do tracking because isAnalyticsEnabled=false');
	        if (typeof callback === 'function') {
	            callback(false);
	        }
	        return false;
	    }
	
	    if (this.userTrackingCookieValue === false) {
	        // Just in case page doesn't run bbcdotcom.init();
	        this.userTrackingCookieValue = (0, _getUserTrackingCookie2['default'])();
	    }
	
	    var overrides = (0, _overrides.getOverrides)();
	    var defaultC2 = typeof keyValues.c2 !== 'undefined' ? keyValues.c2 : '';
	
	    var url = '?' + 'c1=' + (type === 'page' ? 2 : 22) + '&c2=' + (0, _get3['default'])(overrides, 'c2', defaultC2);
	
	    if (overrides.b_app_type === 'fia') {
	        overrides.app_name = keyValues.prod_name;
	        overrides.name = _helper2['default'].getEmbedPageName();
	        overrides.section = _sections2['default'].getSectionsForUri(_config2['default'].getWindowLocation().href, 'analytics').join("%2F");
	        overrides.page_type = _helper2['default'].getPageType().toLowerCase();
	        overrides.cps_asset_id = keyValues.b_article_id;
	    }
	    if (type === 'video') {
	        this.videoEventCounter++;
	        keyValues.ns_st_ec = this.videoEventCounter;
	    }
	    // Apply Overrides
	    keyValues = Object.assign(keyValues, overrides);
	
	    // Append to end of request (do not put at front!)
	    keyValues.c7 = _config2['default'].getWindowLocation().href.replace(/\.app$/, '');
	    keyValues.c8 = _config2['default'].getWindowDocument().title;
	
	    // single page apps need to pass referrer in
	    if (typeof keyValues.c9 === 'undefined') {
	        keyValues.c9 = document.referrer;
	    }
	
	    keyValues = (0, _sanitiseValues.sanitiseKeyValues)(keyValues);
	    for (key in keyValues) {
	        if (key !== 'c2') {
	            // Do not include label (key-value) if empty.  Don't include 'c2' here as included above (for easily reading http requests).
	            url += '&' + key + '=' + _helper2['default'].encodeValue(keyValues[key]);
	        }
	    }
	    if (typeof makeImageRequest === 'undefined' || makeImageRequest === true) {
	        this.trackingRequests['http'].push(url);
	        _helper2['default'].loadTrackingImage(url, callback);
	    } else {
	        this.trackingRequests['cookie'].push(url);
	        if (typeof callback === 'function') {
	            callback();
	        }
	    }
	    log('comScore doTrack url:' + url);
	    return url;
	};
	
	/**
	 * Construct pipe delimited value
	 *
	 * Pipe delimited order:
	 * - 1.  name or channel of content being promoted  eg /news/story-1234 => 'news'
	 * - 2.  channel eg news
	 * - 3.  module name eg carousel
	 * - 4.  link type eg 'text', 'image', 'icon', 'video'
	 * - 5.  link name eg royal-babyis-born
	 * - 6.  link position eg 1
	 * - 7.  total number of links in module eg 10
	 * - 8.  extra link info eg facebook
	 * - 9.  section eg news>world
	 * - 10. page type eg idx|na, sty|na
	 * - 11. module placement (not link placement) eg topcentre
	 *
	 * @param object data Override params
	 */
	function buildPipeDelimitedKey(data) {
	    if (typeof data === 'undefined') {
	        return false;
	    }
	    var sectionStrings = (0, _getSectionStrings2['default'])();
	    var keys = {
	        // NOTE: ORDER IS IMPORTANT
	        'promoted': '',
	        'channel': sectionStrings[0],
	        'moduleName': '',
	        'linkType': 'text',
	        'linkName': '',
	        'linkPosition': '',
	        'totalLinks': '',
	        'extraLinkInfo': '',
	        'section': sectionStrings[1],
	        'pageType': '',
	        'placement': ''
	        // NOTE: ORDER IS IMPORTANT
	    };
	    var d,
	        k,
	        parts = [];
	    for (d in data) {
	        if (typeof keys[d] !== 'undefined') {
	            // Update key within keys, do not add any new keys just the values
	            keys[d] = typeof data[d] === 'undefined' || data[d] === '' || data[d] === false ? '' : _utils2['default'].trim(data[d]);
	        }
	    }
	    for (k in keys) {
	        parts.push(keys[k]);
	    }
	    return parts.join('|');
	};
	module.exports = exports['default'];

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(213);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(214),
	    isKey = __webpack_require__(257),
	    toKey = __webpack_require__(258);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(159),
	    stringToPath = __webpack_require__(215);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	module.exports = castPath;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(216),
	    toString = __webpack_require__(252);
	
	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);
	
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(217);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(218),
	    mapCacheDelete = __webpack_require__(246),
	    mapCacheGet = __webpack_require__(249),
	    mapCacheHas = __webpack_require__(250),
	    mapCacheSet = __webpack_require__(251);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(219),
	    ListCache = __webpack_require__(237),
	    Map = __webpack_require__(245);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(220),
	    hashDelete = __webpack_require__(233),
	    hashGet = __webpack_require__(234),
	    hashHas = __webpack_require__(235),
	    hashSet = __webpack_require__(236);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(221);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	module.exports = hashClear;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(222);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(223),
	    getValue = __webpack_require__(232);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(224),
	    isHostObject = __webpack_require__(226),
	    isMasked = __webpack_require__(227),
	    isObject = __webpack_require__(225),
	    toSource = __webpack_require__(231);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(225);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ }),
/* 225 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),
/* 226 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(228);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(229);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(230);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 230 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 231 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ }),
/* 232 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ }),
/* 233 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	module.exports = hashDelete;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(221);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(221);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(221);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(238),
	    listCacheDelete = __webpack_require__(239),
	    listCacheGet = __webpack_require__(242),
	    listCacheHas = __webpack_require__(243),
	    listCacheSet = __webpack_require__(244);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ }),
/* 238 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	module.exports = listCacheClear;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(240);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(241);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ }),
/* 241 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(240);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(240);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(240);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(222),
	    root = __webpack_require__(229);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(247);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	module.exports = mapCacheDelete;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(248);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ }),
/* 248 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(247);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(247);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(247);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(253);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(254),
	    isSymbol = __webpack_require__(255);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(229);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(256);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ }),
/* 256 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(159),
	    isSymbol = __webpack_require__(255);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(255);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _logger = __webpack_require__(144);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	var _sanitiseValues = __webpack_require__(173);
	
	var _comScoreHelpers = __webpack_require__(157);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var config = __webpack_require__(150);
	var utils = __webpack_require__(143);
	var analyticsHelper = __webpack_require__(171);
	var log = (0, _logger2['default'])('analytics:comScoreStreaming');
	
	var AD = 'AD';
	var CONTENT = 'CONTENT';
	
	var NULL = '*null';
	
	var StreamSenseV6 = function () {
	    function StreamSenseV6() {
	        _classCallCheck(this, StreamSenseV6);
	
	        this.sa = null;
	        this.playlistCount = 0;
	        this.contentDuration = '0';
	        this.currentlyPlaying = '';
	        this.isPreview = false;
	        this.uiInfoLabels = {
	            ns_st_ws: 'norm',
	            ns_st_cs: ''
	        };
	        this.volumeLabel = {
	            ns_st_vo: ''
	        };
	        this.volume = '';
	        this.adPlayed = false;
	    }
	
	    _createClass(StreamSenseV6, [{
	        key: 'init',
	        value: function init() {
	            // Construct streamSense (/script/vendor/comscore/comscore.streaming.6.0.0.161201.min.js)
	            this.sa = new ns_.StreamingAnalytics({ liveEndpointURL: analyticsHelper.getAnalyticsUri() });
	            log('init()');
	        }
	    }, {
	        key: 'notify',
	        value: function notify(method, data) {
	            log('notify() ' + method);
	            if (!config.isComScoreEnabled()) {
	                log('bbcdotcom.analytics did not do tracking because isComScoreEnabled=false');
	                return;
	            }
	
	            if (method !== 'notifyCustomEvent') {
	                log('playbackSession labels:');
	                log(this.sa.getPlaybackSession().getLabels());
	                log('asset labels:');
	                log(this.sa.getPlaybackSession().getAsset().getLabels());
	            }
	
	            if (typeof data !== 'undefined') {
	                if (method === 'notifyCustomEvent') {
	
	                    log('custom labels:');
	                    log(data);
	
	                    this.sa[method](0, data);
	                } else {
	                    this.sa[method](data);
	                }
	            } else {
	                this.sa[method]();
	            }
	        }
	
	        // this fires either on
	        // - 1st content 'playing' event
	        // - 1st adRequest event
	        // - 1st adStarted event
	        // why is it not using playlistLoaded event?
	
	    }, {
	        key: 'startPlaylist',
	        value: function startPlaylist(data) {
	            // if something is already playing then send the 'end' stats calls
	            if (this.currentlyPlaying === AD) {
	                this.notify('notifyEnd');
	            }
	            if (this.currentlyPlaying === CONTENT) {
	                this.notify('notifyEnd', utils.secondsToMilliSeconds(data.mediaOffset));
	            }
	            // No content is loaded in to the player while previewing at the moment
	            /*
	            if(this.currentlyPlaying === PREVIEW) {
	                this.notify('notifyEnd', utils.secondsToMilliSeconds(data.mediaOffset));
	            }
	            */
	
	            this.currentlyPlaying = '';
	            this.playlistCount++;
	            this.adPlayed = false;
	
	            var c1 = bbcdotcom.utils.isString(data.mediaPlayerName) && data.mediaPlayerName.includes('flash') ? '19' : '2';
	            var keyValues = (0, _comScoreHelpers.getCoreKeyValues)({
	                c1: c1,
	                c2: config.getAnalyticsAcctId(),
	                c3: NULL, // No logical value but still needs to be set @BBCCOM-7746
	                c4: NULL, // No logical value but still needs to be set @BBCCOM-7746
	                b_av_action: this._getAVAction(data.videoPlaysAutomatically),
	                ns_st_it: 'c', // comScore identification. always 'c'
	                ns_st_mp: data.mediaPlayerName, // Media Player Name
	                ns_st_mv: data.bumpVersion, // Media Player Version
	                ns_st_cp: '1',
	                b_av_ad: config.isAdsEnabled() ? '1' : '0',
	                b_av_format: analyticsHelper.getAvFormatFromKind(data.kind),
	                b_av_plist: 'multi',
	                b_av_method: 'stream',
	                b_av_source: 'bbc',
	                ns_st_ws: this.uiInfoLabels.ns_st_ws,
	                ns_st_cs: this.uiInfoLabels.ns_st_cs,
	                ns_st_vo: this.volumeLabel.ns_st_vo,
	                b_preview_flag: this.isPreview ? '1' : '0'
	            });
	            keyValues = (0, _comScoreHelpers.appendPageCoreKeyValues)(keyValues);
	
	            this.sa.createPlaybackSession(keyValues);
	        }
	
	        // ============================================================================================================= //
	        // ADVERTISMENT REPORTING
	        // ============================================================================================================= //
	
	    }, {
	        key: 'adRequest',
	        value: function adRequest(data) {
	            this.notify('notifyCustomEvent', { ns_st_ev: 'ad_request' });
	        }
	    }, {
	        key: 'adManagerLoaded',
	        value: function adManagerLoaded(data) {
	            this.notify('notifyCustomEvent', { ns_st_ev: 'ad_loaded' });
	        }
	    }, {
	        key: 'startAdvert',
	        value: function startAdvert(data) {
	            var mediaName = (0, _sanitiseValues.sanitisePageName)(data.mediaName);
	            this.currentlyPlaying = AD;
	            this.adPlayed = true;
	            this.sa.getPlaybackSession().setAsset({
	                ns_st_br: NULL, // Playback Bit Rate @todo require additional info from player
	                ns_st_ci: 'pre-roll', // Unique Content ID
	                ns_st_cl: data.adLength || '0', // asset length (duration is only being pulled through from ads html plugin, NOT flash)
	                ns_st_pu: NULL, // publisher brand name
	                ns_st_pr: mediaName, // program title (to make it the same as content play)
	                ns_st_ep: NULL, // episode title
	                ns_st_sn: NULL, // episode saeson number
	                ns_st_en: NULL, // episode number
	                ns_st_ge: NULL, //genre
	                ns_st_ct: 'va11', // classification type
	                ns_st_ti: NULL, // tms id
	                ns_st_ia: NULL, // ad load tag
	                ns_st_ddt: NULL, // Digital Airdate
	                ns_st_tdt: NULL, // TV Airdate
	                ns_st_st: NULL, // Station Title
	                ns_st_cp: '2',
	                c3: NULL,
	                c4: NULL,
	                c6: NULL,
	                ns_st_ad: 'pre-roll'
	            });
	            this.notify('notifyPlay', 0);
	        }
	    }, {
	        key: 'endAdvert',
	        value: function endAdvert(data) {
	            // Will assume the position is equal to the length of the advertisement.
	            this.notify('notifyEnd');
	        }
	
	        // ============================================================================================================= //
	        // MAIN CONTENT REPORTING
	        // ============================================================================================================= //
	
	    }, {
	        key: 'startProgramme',
	        value: function startProgramme(data) {
	            this.currentlyPlaying = CONTENT;
	            var mediaName = (0, _sanitiseValues.sanitisePageName)(data.mediaName);
	            this.sa.getPlaybackSession().setAsset({
	                ns_st_br: NULL, // Playback Bit Rate @todo require additional info from player
	                ns_st_ci: mediaName, // Unique Content ID
	                ns_st_cl: this.contentDuration, // asset length
	                ns_st_pu: 'bbc', // publisher brand name
	                ns_st_pr: mediaName, // program title
	                ns_st_ep: NULL, // episode title
	                ns_st_sn: NULL, // episode season number
	                ns_st_en: NULL, // episode number
	                ns_st_ge: NULL, //genre
	                ns_st_ct: data.isLive ? 'vc13' : 'vc11', // classification type
	                ns_st_ti: NULL, // tms id
	                ns_st_ia: NULL, // ad load tag
	                ns_st_ddt: NULL, // Digital Airdate
	                ns_st_tdt: NULL, // TV Airdate
	                ns_st_st: NULL, // Station Title
	                c3: NULL,
	                c4: NULL,
	                c6: NULL,
	                ns_st_pn: '1', // segment number
	                ns_st_ce: NULL, // Complete Episode Flag
	                ns_st_li: data.isLive ? '1' : NULL, // Live Stream Flag
	                ns_st_cp: this.adPlayed ? '2' : '1'
	            });
	            this.notify('notifyPlay', 0);
	        }
	    }, {
	        key: 'endProgramme',
	        value: function endProgramme(data) {
	            // Will assume the position is equal to the length of the programme.
	            this.notify('notifyEnd');
	        }
	    }, {
	        key: 'startPause',
	        value: function startPause(data) {
	            this.notify('notifyPause', utils.secondsToMilliSeconds(data.mediaOffset));
	        }
	    }, {
	        key: 'endPause',
	        value: function endPause(data) {
	            this.notify('notifyPlay', utils.secondsToMilliSeconds(data.mediaOffset));
	        }
	    }, {
	        key: 'startSeek',
	        value: function startSeek(data) {
	            this.notify('notifySeekStart', utils.secondsToMilliSeconds(data.mediaOffset));
	        }
	    }, {
	        key: 'endSeek',
	        value: function endSeek() {
	            this.notify('notifyPlay', utils.secondsToMilliSeconds(data.mediaOffset));
	        }
	    }, {
	        key: 'duration',
	        value: function duration(data) {
	            // HTML player will get this from bump 'loadedmetadata' event before ANY other events have fired
	            // and before the pre-roll (if there is one) starts playing
	
	            // Flash player will get this from bump 'timeupdate' event when the actual content is playing
	            // after pre-roll (if there is one) has finished
	
	            // this gets passed correctly in to startProgramme() for html player
	            this.contentDuration = utils.secondsToMilliSeconds(data.mediaLength).toString();
	
	            // for flash player we need to add manuallu
	            if (this.currentlyPlaying == CONTENT) {
	                this.sa.getPlaybackSession().getAsset().setLabel('ns_st_cl', this.contentDuration);
	            }
	        }
	
	        // ============================================================================================================= //
	        // PLAYER REPORTING
	        // ============================================================================================================= //
	
	        // this comes through 1st time before startPlaylist() has fired
	
	    }, {
	        key: 'uiinfo',
	        value: function uiinfo(data) {
	            this.uiInfoLabels.ns_st_ws = data.uiinfo.isFullscreen === true ? 'full' : 'norm';
	            this.uiInfoLabels.ns_st_cs = data.uiinfo.videoWidth.toString() + 'x' + data.uiinfo.videoHeight.toString();
	            if (this.currentlyPlaying !== '') {
	                this.sa.getPlaybackSession().setLabels(this.uiInfoLabels);
	            }
	        }
	
	        // this comes through 1st time before startPlaylist() has fired
	
	    }, {
	        key: 'volumeChange',
	        value: function volumeChange(data) {
	            this.volumeLabel.ns_st_vo = (data.volume * 100).toString();
	            if (this.currentlyPlaying !== '') {
	                this.sa.getPlaybackSession().setLabels(this.volumeLabel);
	            }
	        }
	
	        // presumption here that once the preview plugin has loaded
	        // all subsequent playlists loaded into the player will run preview
	
	    }, {
	        key: 'startPreview',
	        value: function startPreview(data) {
	            this.isPreview = true;
	        }
	    }, {
	        key: 'stopPreview',
	        value: function stopPreview(data) {
	            this.isPreview = false;
	            this.notify('notifyCustomEvent', { ns_st_ev: data.previewStoppedReason });
	            this.sa.getPlaybackSession().setLabel('b_preview_flag', '0');
	        }
	
	        // ============================================================================================================= //
	        // UTILS
	        // ============================================================================================================= //
	
	        /**
	         * Return the actions that initiated video play:
	         * cpfm : Continuous Play, first video, user initiated
	         * cpf  : Continuous Play, first video, auto started
	         * cp   : Continuous Play, not first video
	         * ap   : Not Continuous Play, auto started
	         * mp   : Not Continuous Play, user initiated
	         */
	
	    }, {
	        key: '_getAVAction',
	        value: function _getAVAction(videoPlaysAutomatically) {
	            var av_action;
	            if (config.isContinuousPlayPage()) {
	                if (this.playlistCount === 1) {
	                    av_action = videoPlaysAutomatically ? 'cpf' : 'cpfm';
	                } else {
	                    av_action = 'cp';
	                }
	            } else {
	                av_action = videoPlaysAutomatically ? 'ap' : 'mp';
	            }
	
	            return av_action;
	        }
	    }]);
	
	    return StreamSenseV6;
	}();
	
	exports['default'] = new StreamSenseV6();
	module.exports = exports['default'];

/***/ }),
/* 260 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setOverride = setOverride;
	exports.getOverrides = getOverrides;
	var overrides = new Map();
	
	function setOverride(key, value) {
	    overrides.set(key, value);
	}
	
	function getOverrides() {
	    var output = {};
	    overrides.forEach(function (value, key) {
	        output[key] = value;
	    });
	
	    return output;
	}

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _getUserTrackingCookie = __webpack_require__(196);
	
	var _getUserTrackingCookie2 = _interopRequireDefault(_getUserTrackingCookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * @constructor
	 */
	function SSCHelper() {
	    var analyticsConfig = _config2['default'].getAnalyticsConfig();
	
	    this.sscHost = {
	        https: analyticsConfig.SSC.HTTPS
	    };
	
	    this.comScoreHost = {
	        https: analyticsConfig.COMSCORE.HTTPS
	    };
	}
	
	SSCHelper.prototype.getAnalyticsLocation = function () {
	    if (this.hasUserTrackingCookie()) {
	        return this.getComScoreBaseUrl();
	    } else {
	        return this.getSscBaseUrl();
	    }
	};
	
	SSCHelper.prototype.isSecure = function () {
	    return _config2['default'].getWindowLocation().protocol === 'https:';
	};
	
	SSCHelper.prototype.hasUserTrackingCookie = function () {
	    return (0, _getUserTrackingCookie2['default'])() !== false;
	};
	
	SSCHelper.prototype.getComScoreBaseUrl = function () {
	    return this.comScoreHost.https;
	};
	
	SSCHelper.prototype.getSscBaseUrl = function () {
	    return this.sscHost.https;
	};
	
	module.exports = new SSCHelper();

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var adUnit = __webpack_require__(206);
	var layout = __webpack_require__(199);
	
	var suites = {
	    '970x250': {
	        dfppId: 185036058,
	        adUnit: 'preview',
	        uid: '5d453f2d6551484b782064357a',
	        slots: {
	            leaderboard: [[970, 250]],
	            mpu: []
	        }
	    },
	    large: {
	        dfppId: 114180258,
	        adUnit: 'preview',
	        uid: '224f514079694b3d567a747a22',
	        slots: {
	            leaderboard: [[970, 250]]
	        }
	    },
	    big: {
	        dfppId: 185036058,
	        adUnit: 'preview',
	        uid: '5d453f2d6551484b782064357a',
	        slots: {
	            leaderboard: [[970, 250]],
	            mpu: [[300, 600]]
	        }
	    },
	    standard: {
	        dfppId: 193669458,
	        adUnit: 'preview',
	        uid: '3171676f4450464e3d5a3b4746',
	        slots: {
	            leaderboard: [[728, 90]],
	            mpu: [[300, 250]]
	        }
	    },
	    opaque: {
	        dfppId: 193669458,
	        adUnit: 'preview',
	        uid: '3171676f4450464e3d5a3b4746',
	        slots: {
	            leaderboard: [[728, 90]],
	            mpu: [[300, 250]]
	        }
	    },
	    interstitial: {
	        dfppId: 193674858,
	        adUnit: 'preview',
	        uid: '3f784566412e58404762524028',
	        slots: {
	            interstitial: [[1, 1]],
	            leaderboard: [[728, 90]],
	            mpu: [[300, 250]]
	        }
	    },
	    "int-uni-iframe": {
	        dfppId: 200145378,
	        adUnit: 'preview',
	        uid: '2b614a6426584d2e767e7a2967',
	        slots: {
	            interstitial: [[1, 1]],
	            leaderboard: [[728, 90]],
	            mpu: [[300, 250]]
	        }
	    },
	    "int-uni-image": {
	        dfppId: 200147178,
	        adUnit: 'preview',
	        uid: '2b5e292758336b7b662b346122',
	        slots: {
	            interstitial: [[1, 1]],
	            leaderboard: [[728, 90]],
	            mpu: [[300, 250]]
	        }
	    },
	    empty: {
	        dfppId: 114180258,
	        adUnit: 'preview',
	        uid: '537034287a7as704b51655e3227'
	    },
	    none: {
	        dfppId: 114180258,
	        adUnit: 'preview',
	        uid: '537034287a7as704b51655e3227'
	    },
	    noad: {
	        dfppId: 114180258,
	        adUnit: 'preview',
	        uid: '537034287a7as704b51655e3227'
	    }
	};
	
	module.exports = {
	    init: function init(windowLocationHref) {
	        var suite;
	        if (/[\\?&]ads=([^&#]*)/.test(windowLocationHref)) {
	            if ('undefined' !== typeof suites[RegExp.$1]) {
	                suite = suites[RegExp.$1];
	                if (suite.uid) {
	                    adUnit.setUid(suite.uid);
	                }
	                if (suite.adUnit) {
	                    adUnit.setAdUnit(suite.adUnit);
	                }
	                if (suite.slots) {
	                    layout.overrideGroupSizes(suite.slots);
	                }
	            }
	        }
	    }
	};

/***/ }),
/* 263 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * @module stats
	 *
	 * Listens to events raised by bbcdotcom and maintains an immutable bbcdotcom.stats.data object
	 * with useful information on for tracking.
	 */
	
	/**
	 * This is the main stats module object. This is what is returned or exported by this module.
	 * The init function and data property are both exposed publicly although the data property
	 * is frozen so cannot be directly manipulated.
	 *
	 * @type {{data: {}, init: Function}}
	 */
	var stats = {
	    data: {}
	};
	
	/**
	 * Initial values which are exposed on the bbcdotcom.stats.data property
	 *
	 * @type {{adsRequested: Array, adsRendered: Array}}
	 */
	var initialData = {
	    adsRequested: [],
	    adsRendered: [],
	    adsEmpty: [],
	    adsSlots: [],
	    adsShut: []
	};
	
	/**
	 * Map of handlers which is updated every time bind() is called. We keep a reference to these so we
	 * can clean up after ourselves and unbind all of our listeners
	 *
	 * @type {{}}
	 */
	var handlers = {};
	
	/**
	 * This function takes a map of event names to array of handlers and unbinds them all.
	 *
	 * @param eventHandlers
	 */
	function unbind(eventHandlers) {
	    Object.keys(eventHandlers).forEach(function (event) {
	        eventHandlers[event].forEach(function (handler) {
	            bbcdotcom.pubsub.off(event, handler);
	        });
	    });
	}
	
	/**
	 * This function takes an event name or array of event names and a reducer function. It sets up a binding to
	 * the event(s) given and calls the reducer function for each event passing in the current bbcdotcom.stats.data
	 * object and the arguments given then the event was triggered.
	 *
	 * Each bound event/reducer combo is stored into the handlers map and then unbound if init is called again.
	 *
	 * @param events
	 * @param reducer
	 */
	function bind(events, reducer) {
	    var normalisedEvents = Array.isArray(events) ? events : [events];
	
	    normalisedEvents.forEach(function (event) {
	        var handler = function handler() {
	            var next = Object.freeze(reducer.apply(null, [stats.data].concat(Array.prototype.slice.call(arguments))));
	            stats.data = next;
	        };
	
	        bbcdotcom.pubsub.on(event, handler);
	        handlers[event] = (handlers[event] || []).concat(handler);
	    });
	}
	
	/**
	 * Initialise the stats module and (re)bind the event listeners. When called this method will restore
	 * bbcdotcom.stats.data to it's initialData, unbind any bound event listeners and then bind all
	 * of the appropriate event listeners.
	 *
	 * The handler functions which are set up using bind() take two (or more)
	 * arguments, the current data object, and any arguments passed in by the event trigger. These functions
	 * should return a new data object based on the current data state and the event arguments. They should
	 * not modify the data object, but instead return a new modified object.
	 */
	stats.init = function init() {
	
	    stats.data = Object.freeze(initialData);
	    unbind(handlers);
	
	    bind('bbcdotcom:init:complete', function (data, init) {
	        return Object.assign({}, data, init.stats, {
	            implementation: init.stats.isAsync ? 'gpt-async' : 'gpt'
	        });
	    });
	
	    bind('ads:requested', function (data, slots) {
	        return Object.assign({}, data, {
	            adsRequested: slots
	        });
	    });
	
	    bind('ad:render:complete', function (data, adId, isEmpty) {
	        if (data.adsRendered.indexOf(adId) >= 0) {
	            return data;
	        }
	
	        return Object.assign({}, data, {
	            adsRendered: data.adsRendered.concat(adId),
	            adsEmpty: isEmpty ? data.adsEmpty.concat(adId) : data.adsEmpty
	        });
	    });
	
	    bind('ad:render', function (data, adId) {
	        return Object.assign({}, data, {
	            adsSlots: data.adsSlots.concat(adId)
	        });
	    });
	
	    bind('ad:render:close', function (data, adId) {
	        return Object.assign({}, data, {
	            adsShut: data.adsShut.concat(adId)
	        });
	    });
	};
	
	module.exports = stats;

/***/ }),
/* 264 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function addLoadEvent(func) {
	    var windowOnload = window.onload;
	    if (typeof window.onload !== 'function') {
	        window.onload = func;
	    } else {
	        window.onload = function () {
	            if (windowOnload) {
	                windowOnload();
	            }
	            func();
	        };
	    }
	};

/***/ }),
/* 265 */
/***/ (function(module, exports) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	// Presumes Orbit has polyfilled Promise
	var attemptToShowSignin = function attemptToShowSignin() {
	  isOnAppropriatePage().then(isAdsEnabled).then(isLocalStorageAvailable).then(isUserEligible).then(isIdctaFlagpoleGreen).then(isTimeToEncourage).then(getIdCtaButtons).then(function (someJson) {
	    // Presumes orbit has put the head and css link in the page
	    showPopup(someJson.html);
	  })['catch'](function (err) {
	    if (err !== 'not_signin_page') {
	      document.dispatchEvent(new CustomEvent('bbc-user-event', {
	        detail: {
	          container: 'sign-in-dismissible',
	          label: err
	        }
	      }));
	    }
	  });
	};
	
	// used in case of an emergency...
	var isAdsEnabled = function isAdsEnabled() {
	  if (window.bbcdotcom.config.isAdsEnabled() === true) {
	    return Promise.resolve(true);
	  }
	  return Promise.reject('ads_not_enabled');
	};
	
	var isOnAppropriatePage = function isOnAppropriatePage() {
	  // https://www.bbc.co.uk/news/business-49605180?ads techbiz
	  var keyword = bbcdotcom.adverts.keyValues.get('keyword');
	  if (keyword && keyword === 'signin') {
	    return Promise.resolve(true);
	  }
	  if (/[?|&]idcta-debug/.test(window.location.href)) {
	    return Promise.resolve(true);
	  }
	  return Promise.reject('not_signin_page');
	};
	
	var storageAvailable = function storageAvailable(type) {
	  var storage = void 0;
	  try {
	    storage = window[type];
	    var x = '__storage_test__';
	    storage.setItem(x, x);
	    storage.removeItem(x);
	    return true;
	  } catch (e) {
	    return e instanceof DOMException && (
	    // everything except Firefox
	    e.code === 22 ||
	    // Firefox
	    e.code === 1014 ||
	    // test name field too, because code might not be present
	    // everything except Firefox
	    e.name === 'QuotaExceededError' ||
	    // Firefox
	    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
	    // acknowledge QuotaExceededError only if there's something already stored
	    storage && storage.length !== 0;
	  }
	};
	
	var isLocalStorageAvailable = function isLocalStorageAvailable() {
	  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
	  if (storageAvailable('localStorage')) {
	    return Promise.resolve(true);
	  }
	  return Promise.reject('no_local_storage');
	};
	
	var isUserEligible = function isUserEligible() {
	  var checks = [window.bbcuser.isSignedIn(), window.bbcuser.allowsPerformanceCookies()];
	
	  // window.bbcuser.allowsFunctionalCookies()
	  // funcCookies
	
	  return Promise.all(checks).then(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        signedIn = _ref2[0],
	        perfCookies = _ref2[1];
	
	    if (signedIn) {
	      return Promise.reject('user_signed_in');
	    }
	
	    // don't worry about functoinal cookies for now
	    // (!perfCookies || !funcCookies)
	
	    if (!perfCookies) {
	      return Promise.reject('cookies_disabled');
	    }
	
	    return Promise.resolve(true);
	  });
	};
	
	var isIdctaFlagpoleGreen = function isIdctaFlagpoleGreen() {
	  return window.require(['idcta-v2/config'], function (idcta) {
	    var FLAGPOLE = idcta['id-availability'];
	    if (FLAGPOLE !== 'GREEN') {
	      return Promise.reject('idcta_flagpole');
	    }
	    return Promise.resolve(true);
	  });
	};
	
	// 7 days
	var SECS_AFTER_DISMISS_UNTIL_PROMPTABLE = 7 * 24 * 60 * 60;
	var isTimeToEncourage = function isTimeToEncourage() {
	  var timeStamp = window.localStorage.getItem(DISMISSED_TIMESTAMP_KEY);
	  var timeStampInt = timeStamp ? parseInt(timeStamp, 10) : 0;
	  if (timeStampInt === 0 || timeStampInt + SECS_AFTER_DISMISS_UNTIL_PROMPTABLE < timestampInSecNow()) {
	    return Promise.resolve(true);
	  }
	  return Promise.reject('recently_dismissed');
	};
	
	var getIdCtaButtons = function getIdCtaButtons() {
	  var size = getBreakpoint();
	  var buttonColour = 'white';
	  var buttonSize = size === 0 ? 'small' : 'medium';
	  var context = 'news';
	  var userOrigin = 'NEWS_GNL';
	  var ptrt = window.location.href.replace(/\?.*$/, '');
	  var root = 'https://idcta.test.api.bbc.com';
	  if (window.location.hostname === 'www.bbc.com') {
	    root = 'https://idcta.api.bbc.com';
	  }
	
	  var url = root + '/idcta/init?&context=' + context + '&userOrigin=' + userOrigin + '&ptrt=' + ptrt + '&buttonSize=' + buttonSize + '&buttonColour=' + buttonColour;
	  return fetch(url).then(function (response) {
	    return response.json();
	  });
	};
	
	var timestampInSecNow = function timestampInSecNow() {
	  return Math.floor(Date.now() / 1000);
	};
	
	var getBreakpoint = function getBreakpoint() {
	  // 0 mobile, 1 tablet, 2 desktop
	  var size = 0;
	  if (window.matchMedia('(min-width: 721px)').matches) {
	    size = 1;
	  } else if (window.matchMedia('(min-width: 1025px)').matches) {
	    size = 2;
	  }
	  return size;
	};
	
	var _signinBox = void 0,
	    _background = void 0,
	    _tabList = void 0,
	    _currentTab = void 0;
	var DISMISSED_TIMESTAMP_KEY = 'dotcom/news/dismiss-timestamp';
	var TITLE_TEXT = 'Sign in to get the best from the BBC';
	var WHY_TEXT = 'Why sign in to the BBC?';
	
	var showPopup = function showPopup(html) {
	  if (_signinBox) {
	    closePopup(true);
	  }
	
	  _background = document.createElement('div');
	  _background.setAttribute('id', 'sign_in-bg');
	
	  _signinBox = document.createElement('div');
	  _signinBox.setAttribute('id', 'sign_in');
	  _signinBox.setAttribute('role', 'alertdialog');
	  _signinBox.setAttribute('data-bbc-container', 'sign-in-dismissible');
	  _signinBox.setAttribute('data-bbc-title', 'sign-in-container-viewed');
	  _signinBox.setAttribute('aria-labelledby', 'sign_in-header');
	
	  var container = document.createElement('div');
	  container.className = 'sign_in-container';
	
	  var header = document.createElement('h2');
	  header.className = 'sign_in-header';
	  header.setAttribute('id', 'sign_in-header');
	  header.textContent = TITLE_TEXT;
	  container.appendChild(header);
	
	  var buttons = document.createElement('div');
	  buttons.className = 'sign_in-button-container';
	  buttons.innerHTML = html;
	
	  var signinButton = buttons.querySelector('.id4-cta-signin');
	  var registerButton = buttons.querySelector('.id4-cta-register');
	  signinButton.setAttribute('data-bbc-title', 'sign-in');
	  signinButton.setAttribute('data-bbc-container', 'sign-in-dismissible');
	  registerButton.setAttribute('data-bbc-title', 'register');
	  registerButton.setAttribute('data-bbc-container', 'sign-in-dismissible');
	
	  container.appendChild(buttons);
	  _signinBox.appendChild(container);
	
	  setTimeout(function () {
	    signinButton.focus();
	  }, 100);
	
	  var whyLink = document.createElement('a');
	  whyLink.target = '_blank';
	  whyLink.className = 'sign_in-why';
	
	  // need to find and add extras to this url. i.e. ptrt
	  whyLink.href = 'https://www.bbc.com/usingthebbc/your-bbc-account-global';
	  whyLink.setAttribute('data-bbc-title', 'why-sign-in');
	  whyLink.setAttribute('data-bbc-container', 'sign-in-dismissible');
	
	  var whyIcon = document.createElement('span');
	  whyIcon.className = 'sign_in-why-icon';
	  whyIcon.innerHTML = '<svg focusable=\'false\' viewBox=\'0 0 32 32\'><path d=\'M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm2 25h-4V13h4v12zm0-14h-4V7h4v4z\'></path></svg>';
	  whyLink.appendChild(whyIcon);
	
	  var whyTextSpan = document.createElement('span');
	  whyTextSpan.className = 'sign_in-why-text';
	  whyTextSpan.textContent = WHY_TEXT;
	  whyLink.appendChild(whyTextSpan);
	
	  container.appendChild(whyLink);
	
	  var exitButton = document.createElement('button');
	  exitButton.className = 'sign_in-exit';
	  exitButton.setAttribute('aria-label', 'close');
	  exitButton.setAttribute('data-bbc-title', 'dismiss');
	  exitButton.setAttribute('data-bbc-container', 'sign-in-dismissible');
	  exitButton.innerHTML = '<svg focusable=\'false\' viewBox=\'0 0 32 32\'><path d=\'M32 3.5L28.5 0 16 12.5 3.5 0 0 3.5 12.5 16 0 28.5 3.5 32 16 19.5 28.5 32l3.5-3.5L19.5 16\'></path></svg>';
	
	  _signinBox.appendChild(exitButton);
	
	  exitButton.addEventListener('click', function (event) {
	    event.preventDefault();
	    window.localStorage.setItem(DISMISSED_TIMESTAMP_KEY, String(timestampInSecNow()));
	
	    // have to wait to close popup here otherwise stats don't fire
	    setTimeout(function () {
	      closePopup();
	    }, 100);
	  });
	
	  _tabList = [exitButton, signinButton, registerButton, whyLink];
	  _currentTab = 1;
	
	  var keyHandler = function keyHandler(e) {
	    var keyCode = e.keyCode || e.which;
	
	    switch (keyCode) {
	      case 27:
	        e.preventDefault();
	        closePopup();
	        break;
	      case 9:
	        //Override tab controls to tab loop inside popup and prevent focus from moving to the page underneath
	        e.preventDefault();
	
	        var tl1 = _tabList.length - 1;
	
	        if (e.shiftKey) {
	          _currentTab = _currentTab === 0 ? tl1 : _currentTab - 1;
	        } else {
	          _currentTab = _currentTab === tl1 ? 0 : _currentTab + 1;
	        }
	
	        setTimeout(function () {
	          _tabList[_currentTab].focus();
	        }, 200);
	        break;
	      default:
	    }
	  };
	
	  for (var i = 0; i < _tabList.length; i++) {
	    _tabList[i].addEventListener('keydown', keyHandler);
	  }
	
	  // Has to be inside orb-modules otherwise text content from idcta changes
	  var element = document.getElementById('orb-modules');
	  element.appendChild(_background);
	  element.appendChild(_signinBox);
	};
	
	var closePopup = function closePopup() {
	  if (_background) {
	    _background.parentNode.removeChild(_background);
	    _background = undefined;
	  }
	  if (_signinBox) {
	    _signinBox.parentNode.removeChild(_signinBox);
	    _signinBox = undefined;
	  }
	};
	
	module.exports = {
	  init: function init() {
	    attemptToShowSignin();
	  }
	};

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    ad: __webpack_require__(267),
	    adAsyncRenderer: __webpack_require__(269),
	    adFactory: __webpack_require__(270),
	    adFilter: __webpack_require__(209),
	    adRegister: __webpack_require__(200),
	    adRenderer: __webpack_require__(271),
	    adsenseRenderer: __webpack_require__(202),
	    adSuites: __webpack_require__(262),
	    adText: __webpack_require__(203),
	    adUnit: __webpack_require__(206),
	    adUnitWebService: __webpack_require__(207),
	    branding: __webpack_require__(268),
	    breakpoints: __webpack_require__(204),
	    dfppRequest: __webpack_require__(198),
	    keyValues: __webpack_require__(176),
	    layout: __webpack_require__(199),
	    outbrainRenderer: __webpack_require__(272),
	    slot: __webpack_require__(273),
	    slotAsync: __webpack_require__(274),
	    slotDeferred: __webpack_require__(208),
	    slotInfinite: __webpack_require__(275)
	};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Branding = __webpack_require__(268);
	
	var utils = __webpack_require__(143);
	var pubsub = __webpack_require__(205);
	var layout = __webpack_require__(199);
	
	var log = __webpack_require__(144)('adverts:ad');
	
	var AD_HEIGHT_ADJUSTMENT = 30,
	    SLOT_PREFIX = 'bbccom_',
	    AD_IS_VISIBLE = SLOT_PREFIX + 'visible',
	    AD_IS_SHUT_CLASS = SLOT_PREFIX + 'shut',
	    DISPLAY_NONE_CLASS = SLOT_PREFIX + 'display_none',
	    adTextKey = {
	    "default": 'advertisementText',
	    "sponsor_section": 'sponsoredByText',
	    "sponsor": 'inAssociationWithText',
	    "module": 'inAssociationWithText',
	    "partner": 'advertisingPartnersText',
	    "adsense": 'adsByGoogleText'
	};
	
	var getContents = function getContents(domId) {
	    var domAd = document.getElementById(domId);
	    if (typeof domAd !== 'undefined' && domAd !== null) {
	        return domAd.innerHTML.replace(/\s+/g, '');
	    }
	    return false;
	};
	
	var Ad = function Ad(adID) {
	    this.adID = adID;
	    this.domId = SLOT_PREFIX + adID;
	    this.width = null;
	    this.height = null;
	    this.branding = false;
	    this.preloaded = false;
	    this.closed = false;
	    this.rendered = false;
	    this.eventSize = null;
	    this.contents = {
	        base: false
	    };
	    this.element = null;
	
	    this.adType = 'standard';
	    this.sizeSet = false;
	    this.isResponsive = false;
	    this.isFluid = false;
	    this.allowScreenReader = false;
	    this.currentSlotGroups = [];
	    this.registeredSlotGroups = [];
	    this.sticky = { isSticky: false };
	};
	
	Ad.prototype.setClosed = function (value) {
	    this.closed = value;
	    return this.closed;
	};
	
	Ad.prototype.close = function () {
	    log('close ' + this.adID);
	    this.setClosed(true);
	    this.shut();
	};
	
	Ad.prototype.isCloseAd = function () {
	    return this.closed;
	};
	
	Ad.prototype.setRendered = function (value) {
	    this.rendered = value;
	    return this.rendered;
	};
	
	Ad.prototype.isRendered = function () {
	    return this.rendered;
	};
	
	Ad.prototype.setConfig = function (config) {
	    var i;
	    for (i in config) {
	        if (config.hasOwnProperty(i)) {
	            this[i] = config[i];
	        }
	    }
	    return this;
	};
	
	Ad.prototype.setBaseContent = function () {
	    this.contents.base = getContents(this.domId);
	    return this.contents.base;
	};
	
	Ad.prototype.getBaseContent = function () {
	    return this.contents.base;
	};
	
	Ad.prototype.setCurrentSlotGroups = function (currentSlot) {
	    log('settings slot groups for ' + this.adID + ' to ' + currentSlot);
	    this.currentSlotGroups = currentSlot;
	    return this;
	};
	
	Ad.prototype.getCurrentSlotGroups = function () {
	    return this.currentSlotGroups;
	};
	
	Ad.prototype.registerSlotGroups = function (groups) {
	    this.registeredSlotGroups.push(groups);
	};
	
	Ad.prototype.getRegisteredSlotGroups = function () {
	    return this.registeredSlotGroups;
	};
	
	Ad.prototype.setPreloaded = function (preload) {
	    this.preloaded = preload;
	    return this;
	};
	
	Ad.prototype.isPreloaded = function () {
	    return this.preloaded;
	};
	
	/**
	 * @deprecated Use getDomElement()
	 * @returns {null|Element|*}
	 */
	Ad.prototype.domElement = function () {
	    return this.getDomElement();
	};
	
	Ad.prototype.getDomElement = function () {
	    if (!this.element) {
	        this.element = document.getElementById(this.domId);
	    }
	    if (!this.element && this.domId.indexOf('adsense') > -1) {
	        this.element = document.getElementsByClassName(this.domId)[0];
	    }
	    return this.element;
	};
	
	Ad.prototype.getAdvertDimensions = function () {
	    // Use forced set width & height if set
	    var advert = document.getElementById(this.domId);
	    return {
	        width: this.width || (advert ? advert.clientWidth : 0),
	        height: this.height || (advert ? advert.clientHeight : 0)
	    };
	};
	
	Ad.prototype.setWidth = function (clientWidth) {
	    this.width = clientWidth;
	    return this;
	};
	
	Ad.prototype.getWidth = function () {
	    return parseInt(this.getAdvertDimensions().width, 10);
	};
	
	Ad.prototype.setHeight = function (clientHeight) {
	    this.height = clientHeight;
	    return this;
	};
	
	Ad.prototype.getHeight = function () {
	    return parseInt(this.getAdvertDimensions().height, 10);
	};
	
	Ad.prototype.getCreativeHeight = function () {
	    return bbcdotcom.objects('bbcdotcom.config.isAsync') ? this.getHeight() : this.getHeight() - AD_HEIGHT_ADJUSTMENT;
	};
	
	Ad.prototype.setAdDomHeightWidth = function (height, width, isIframeSettingSize) {
	    var element = this.getDomElement();
	    if (element !== null && (!this.sizeSet || isIframeSettingSize)) {
	        var adPadHeight = 35;
	        if (typeof width !== 'undefined') {
	            element.style.width = width + 'px';
	        }
	        element.style.height = height + adPadHeight + 'px';
	        this.sizeSet = true;
	    }
	};
	
	/**
	 * A function used by third party ads to change the size of the iFrame and it's other div's
	 * @param height
	 * @param width
	 * @returns Ad
	 */
	Ad.prototype.setIframeSize = function (height, width) {
	    var element = this.getDomElement();
	    var x,
	        adIframes = element.getElementsByTagName("iframe"),
	        insElements = element.getElementsByTagName("ins");
	    this.setAdDomHeightWidth(height, width, true);
	    this.setEventSize([width, height]);
	    if (adIframes.length >= 1 && typeof adIframes[0] !== 'undefined') {
	        if (typeof width !== 'undefined') {
	            adIframes[0].width = width;
	        }
	        adIframes[0].height = height;
	    }
	    for (x in insElements) {
	        if (typeof insElements[x].style !== "undefined") {
	            if (typeof width !== 'undefined') {
	                insElements[x].style.width = width + 'px';
	            }
	            insElements[x].style.height = height + 'px';
	        }
	    }
	    this.openAsync(width, height);
	    pubsub.trigger('ad:resize', this.adID, width, height);
	    pubsub.trigger('ad:resize:' + this.adID, this.adID, width, height);
	
	    return this;
	};
	
	Ad.prototype.setResponsive = function (responsive) {
	    this.isResponsive = responsive;
	    utils.addTagClass(this.getDomElement(), 'bbccom_responsive');
	    return this;
	};
	
	Ad.prototype.getAdTextKey = function () {
	    var x;
	    for (x in adTextKey) {
	        if (this.adID !== undefined && typeof this.adID.indexOf !== 'undefined' && this.adID.indexOf(x) !== -1) {
	            return adTextKey[x];
	        }
	    }
	    return adTextKey['default'];
	};
	
	Ad.prototype.getAdText = function () {
	    return typeof this.hasAdText !== 'undefined' && this.hasAdText === false ? false : typeof this.advertText === 'undefined' ? bbcdotcom.adverts.adText.getText(this.getAdTextKey()) : this.advertText;
	};
	
	Ad.prototype.setAdText = function (advertText) {
	    if (this.adID.indexOf('sponsor') === 0 && advertText && /^[A-Za-z '\_-]+$/.test(advertText)) {
	        this.advertText = advertText;
	        this.hasAdText = true;
	    }
	};
	
	Ad.prototype.getAdInfoUrl = function () {
	    return bbcdotcom.adverts.adText.getInfoUrl(this.getAdTextKey());
	};
	
	Ad.prototype.getAdId = function () {
	    return this.adID;
	};
	
	Ad.prototype.getAdName = function () {
	    return this.getAdId();
	};
	
	/**
	 * USED in Synchronous slot requests
	 */
	Ad.prototype.show = function () {
	    var current = getContents(this.domId);
	    this.element = document.getElementById(this.domId);
	    if (current && !this.isCloseAd() && !bbcdotcom.objects('bbcdotcom.config.isAsync')) {
	        this.setClosed(this.contents.base === current && -1 === current.indexOf('iframe'));
	        this.open();
	    }
	    this.disableScreenReaderForAdContent();
	};
	
	/**
	 * We need to disable tabbing through ads as not all ads are built for screen readers
	 */
	Ad.prototype.disableScreenReaderForAdContent = function () {
	    var i, j, links, iframes, element;
	    var adSlots = document.getElementsByClassName('bbccom_advert');
	    for (j = 0; j < adSlots.length; j++) {
	        element = adSlots[j];
	        links = element.getElementsByTagName('a');
	        for (i = 0; i < links.length; i++) {
	            links[i].tabIndex = "-1";
	        }
	        iframes = element.getElementsByTagName('iframe');
	        for (i = 0; i < iframes.length; i++) {
	            iframes[i].tabIndex = "-1";
	        }
	    }
	};
	
	/**
	 * TODO - The closing of slots and resizing does not work for IE7, awaiting google to send size
	 */
	Ad.prototype.shut = function () {
	    var element = this.getDomElement();
	    if (element !== null && typeof element !== 'undefined' && element.className.indexOf(AD_IS_SHUT_CLASS) === -1 && element.className.indexOf(DISPLAY_NONE_CLASS) === -1) {
	        // TODO - As we now shut the slot as opposed to the ad, following line could be removed
	        if (element.id.indexOf('bbccom_') === 0) {
	            utils.addTagClass(element, AD_IS_SHUT_CLASS);
	        }
	        if (element.parentElement.id.indexOf('bbccom_') === 0) {
	            utils.addTagClass(element.parentElement, AD_IS_SHUT_CLASS);
	        }
	        utils.removeTagClass(element.parentElement, AD_IS_VISIBLE);
	        utils.removeBodyTagClass(SLOT_PREFIX + this.adID);
	        if (this.domId.indexOf('mpu') > 0) {
	            utils.removeBodyTagClass(this.domId + "_" + "big");
	            utils.removeBodyTagClass(this.domId + "_" + "small");
	        }
	        pubsub.trigger('ad:close', this.adID);
	        pubsub.trigger('ad:close:' + this.adID, this.adID);
	    }
	};
	
	Ad.prototype.isShut = function () {
	    var element = this.getDomElement();
	    return element.className.indexOf(AD_IS_SHUT_CLASS) !== -1;
	};
	
	/**
	 * TODO - Move this into a separate sponsor class
	 */
	Ad.prototype.setTitleForSponsorAds = function () {
	    if (!this.branding && this.adID === 'sponsor_section') {
	        this.branding = new Branding(bbcdotcom.adverts.keyValues.get('keyword'));
	    }
	};
	
	/**
	 * USED in Synchronous slot requests
	 */
	Ad.prototype.open = function () {
	    var element = this.getDomElement();
	    this.setTitleForSponsorAds();
	    if (this.isResponsive) {
	        utils.addTagClass(element, 'bbccom_responsive');
	    }
	    if (!this.isCloseAd()) {
	        utils.removeTagClass(element, DISPLAY_NONE_CLASS);
	        // TODO - As we now shut the slot as opposed to the ad, following line could be removed
	        utils.removeTagClass(element, AD_IS_SHUT_CLASS);
	        utils.removeTagClass(element.parentElement, AD_IS_SHUT_CLASS);
	        utils.addBodyTagClass(SLOT_PREFIX + this.adID);
	        utils.addTagClass(element.parentElement, AD_IS_VISIBLE);
	        if (layout.getCurrentGroupId() > 2 && this.domId.indexOf('mpu') > 0) {
	            utils.removeBodyTagClass(this.domId + "_" + "big");
	            utils.removeBodyTagClass(this.domId + "_" + "small");
	            utils.addBodyTagClass(this.domId + "_" + (this.height > 251 ? "big" : "small"));
	        }
	        this.disableScreenReaderForAdContent();
	    }
	};
	
	/**
	 * USED in Asynchronous slot requests
	 */
	Ad.prototype.openAsync = function (width, height) {
	    var element = this.getDomElement();
	    /**
	     * Setting ad size so we know if we need to close it on resize/rotation
	     */
	    this.setWidth(width);
	    this.setHeight(height);
	
	    /**
	     * Add body class for a responsive ad
	     */
	    if (this.isResponsive) {
	        utils.addTagClass(element, 'bbccom_responsive');
	    }
	    /**
	     * Add class for a fluid ad
	     */
	    if (this.isFluid) {
	        utils.addTagClass(element, 'bbccom_fluid');
	    }
	    /**
	     * Display the element
	     */
	    var self = this;
	    setTimeout(function () {
	        var isCloseAd = self.isCloseAd();
	        log('OpenAsync Timer ad:' + self.getAdId() + ', isCloseAd: ' + isCloseAd);
	        if (!isCloseAd) {
	            utils.removeTagClass(self.element, AD_IS_SHUT_CLASS);
	            utils.removeTagClass(self.element.parentElement, AD_IS_SHUT_CLASS);
	            utils.addTagClass(self.element.parentElement, AD_IS_VISIBLE);
	        }
	
	        pubsub.trigger('ad:done', self.adID, width, height);
	        pubsub.trigger('ad:done:' + self.adID, self.adID, width, height);
	        layout.reset();
	    }, 300);
	    utils.removeTagClass(document.getElementById('bbccom_' + this.adID + '_text'), DISPLAY_NONE_CLASS);
	    /**
	     * Add a body class to show that the ad is in the page.
	     */
	    utils.addBodyTagClass(this.domId);
	    if (layout.getCurrentGroupId() > 2 && this.domId.indexOf('mpu') > 0) {
	        utils.removeBodyTagClass(this.domId + "_" + "big");
	        utils.removeBodyTagClass(this.domId + "_" + "small");
	        utils.addBodyTagClass(this.domId + "_" + (this.height > 251 ? "big" : "small"));
	    }
	    pubsub.trigger('ad:open', this.adID, width, height);
	    pubsub.trigger('ad:open:' + this.adID, this.adID, width, height);
	};
	
	/**
	 * @Todo temp fix for BBCCOM-7784 - we need to make this better.
	 * @param eventSize [width, height]
	 */
	Ad.prototype.setEventSize = function (eventSize) {
	    this.eventSize = eventSize;
	};
	
	Ad.prototype.renderIfReady = function () {
	    try {
	        if (this.getDomElement() !== null && this.isRendered()) {
	            if (!this.isCloseAd() && this.eventSize !== null && typeof this.eventSize[0] !== 'undefined' && typeof this.eventSize[1] !== 'undefined') {
	                /**
	                 * BBCCOM-5589 - View notes about issues with GPT slotRenderEnded event in IE browsers
	                 * Would be lovely to use promises here
	                 */
	                setTimeout(function () {
	                    if (this.isCloseAd()) {
	                        pubsub.trigger('ad:render:close', this.domId);
	                        log('renderIfReady ', this.domId, ' isCloseAd true - about to call .close()');
	                        this.close();
	                    } else {
	                        this.openAsync(this.eventSize[0], this.eventSize[1]);
	                    }
	                }.bind(this), 200);
	            } else {
	                pubsub.trigger('ad:render:close', this.domId);
	                log('renderIfReady about to call .close()');
	                this.close();
	            }
	        }
	    } catch (e) {
	        log.error('Failed during renderEndedCallback', e);
	    }
	};
	
	/**
	 * This was a news requirement in order to be able to position other elements on a page around whether an
	 * ad is visible or not, the bbccom_visible class is used within the tabloid news application
	 */
	Ad.prototype.setCurrentSlotVisible = function () {
	    var slotElement,
	        slot,
	        slots = this.getRegisteredSlotGroups();
	    for (slot in slots) {
	        if (slots.hasOwnProperty(slot)) {
	            slotElement = document.getElementById(SLOT_PREFIX + this.adID + '_' + slots[slot].join('_'));
	            utils.removeTagClass(slotElement, AD_IS_VISIBLE);
	        }
	    }
	    if (this.currentSlotGroups && this.currentSlotGroups.length > 0 && !this.closed) {
	        slotElement = document.getElementById(SLOT_PREFIX + this.adID + '_' + this.currentSlotGroups.join('_'));
	        utils.addTagClass(slotElement, AD_IS_VISIBLE);
	    }
	    slotElement = null;
	};
	
	Ad.prototype.hasAnyGroupAlreadyBeenRegistered = function (groups) {
	    var i, len, groupsRegistered;
	    groupsRegistered = [].concat.apply([], this.registeredSlotGroups).join();
	    for (i = 0, len = groups.length; i < len; i += 1) {
	        if (groupsRegistered.indexOf(groups[i]) !== -1) {
	            log.warn(groups[i] + ' has already been registered for ' + this.adID);
	            return true;
	        }
	    }
	    return false;
	};
	
	Ad.prototype.injectAdvertisementText = function () {
	    var adTextInterval = void 0;
	    var adText = void 0;
	    var adInfoUrl = void 0;
	    var injectTry = 0;
	
	    function tryInjectAdText() {
	        injectTry++;
	        var element = this.getDomElement();
	        if (element && element.getElementsByClassName('bbccom_text').length === 0) {
	            var aTag = document.createElement('a');
	            aTag.innerHTML = adText;
	            aTag.href = adInfoUrl;
	            aTag.className = 'bbccom_text';
	
	            element.insertBefore(aTag, element.firstChild);
	            clearInterval(adTextInterval);
	        } else if (injectTry >= 10) {
	            clearInterval(adTextInterval);
	        }
	    };
	    if (this.adID.includes('interstitial') || this.adID.includes('wallpaper')) {
	        return;
	    }
	    adText = this.getAdText();
	    if (adText) {
	        adInfoUrl = this.getAdInfoUrl();
	        adTextInterval = setInterval(tryInjectAdText.bind(this), 50);
	    }
	};
	
	Ad.prototype.hideAdContainer = function () {
	    var domAd = document.getElementById(this.domId);
	
	    if (domAd) {
	        try {
	            domAd.style.display = 'block';
	            domAd.style.height = '0px';
	            domAd.style.overflow = 'hidden';
	            domAd.style.padding = '0';
	        } catch (e) {}
	    }
	};
	
	Ad.prototype.currentSlotHasGroup = function (group) {
	    return this.getCurrentSlotGroups().indexOf(group) >= 0;
	};
	
	module.exports = Ad;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var sections = __webpack_require__(152);
	var AdText = __webpack_require__(203);
	var keyValues = __webpack_require__(176);
	
	module.exports = function Branding(keyword) {
	    var href = false,
	        title = false,
	        keywordParts,
	        keywords = {
	        'firstperson': {
	            title: 'First Person',
	            url: '/news/magazine-14633099'
	        },
	        'firstpersonbigdreams': {
	            title: 'First Person Big Dreams',
	            url: '/news/magazine-14633099'
	        },
	        'picturethis': {
	            title: 'Picture This',
	            url: '/news/magazine-14760628'
	        },
	        'livingonline': {
	            title: 'Living Online',
	            url: '/news/magazine-14760626'
	        },
	        'rab': {
	            title: 'Running a Business',
	            url: '/news/business-16611973'
	        },
	        'powerofart': {
	            title: 'Power of Art',
	            url: '/news/magazine-21459225'
	        },
	        'alteredstates': {
	            title: 'Altered States',
	            url: '/news/magazine-14760627'
	        },
	        'uselection': {
	            title: 'US Election',
	            url: '/news/world-us-canada-15949569'
	        },
	        'jubilee': {
	            title: 'The Diamond Jubilee',
	            url: '/news/uk-17500000',
	            altTitle: "Back to Queen's Diamond Jubilee"
	        },
	        'entrepreneurship': {
	            title: 'Entrepreneurship',
	            url: '/news/business-22434141'
	        },
	        'energy': {
	            title: 'Energy',
	            url: '/news/business-15521824'
	        },
	        'knowledgeeconomy': {
	            title: 'Knowledge economy',
	            url: '/news/business-12686570'
	        },
	        'ceoguru': {
	            title: 'CEO Guru',
	            url: '/news/business-20071226'
	        },
	        'theboss': {
	            title: 'The Boss',
	            url: '/news/business-22449886'
	        },
	        'makingtime': {
	            title: 'Making Time',
	            url: '/news/magazine-24117219'
	        },
	        'thinkingbusiness': {
	            title: 'Thinking Business',
	            url: '/news/business-22449887'
	        },
	        'techbiz': {
	            title: 'Technology of Business',
	            url: '/news/business-11428889'
	        },
	        'meettheteam': {
	            title: 'Meet the team',
	            url: '/news/world-radio-and-tv-23426239'
	        },
	        '100women': {
	            title: '100 Women',
	            url: '/news/world-24371433'
	        },
	        'businessoftennis': {
	            title: 'Business of Tennis',
	            url: '/news/business-25319175'
	        },
	        'nextsiliconvalleys': {
	            title: 'The Next Silicon Valleys',
	            url: '/news/technology-25852150'
	        },
	        'businessofgiving': { // BBCCOM-5669
	            title: 'The Business of Giving',
	            url: '/news/business-19182463'
	        },
	        'howtosucceedin': { // BBCCOM-5730
	            title: 'How to Succeed In',
	            url: '/news/business-29617902'
	        },
	        'komladumor': { // BBCCOM-5981
	            title: 'Komla Dumor Award',
	            url: '/news/world-radio-and-tv-30725772'
	        },
	        'lifeofluxury': { //BBCCOM-6664 START
	            title: 'Life of Luxury',
	            url: '/news/business-31157861'
	        },
	        'themakingofme': {
	            title: 'The Making of Me',
	            url: '/news/business-32660236'
	        },
	        'singaporeat50': {
	            title: 'Singapore at 50',
	            url: '/news/world-asia-31522499'
	        },
	        'madeinamerica': {
	            title: 'Made in America',
	            url: '/news/business-30533292'
	        },
	        'tomorrowscities': {
	            title: 'Tomorrow\'s Cities',
	            url: '/news/technology-23517670'
	        },
	        'mybusiness': {
	            title: 'My Business',
	            url: '/news/business-15870435'
	        },
	        'newentrepreneurs': {
	            title: 'The New Entrepreneurs',
	            url: '/news/business-27614930'
	        },
	        'africabeats': {
	            title: 'Africa Beats',
	            url: '/news/entertainment-arts-17679490'
	        },
	        'asiabeats': {
	            title: 'Asia Beats',
	            url: '/news/entertainment-arts-26040146'
	        },
	        'latambeats': {
	            title: 'LatAm Beats',
	            url: '/news/world-latin-america-19523770'
	        },
	        'middleeastbeats': { //BBCCOM-6664 LAST
	            title: 'Middle East Beats',
	            url: '/news/world-middle-east-30555154'
	        },
	        'businessbrain': { //BBCCOM-6793
	            title: 'Business Brain',
	            url: '/news/business-32339576'
	        }
	    };
	
	    (function () {
	        keywordParts = keyValues.getKeywordParts();
	        if (typeof keywords[keyword] !== 'undefined') {
	            href = keywords[keyword].url;
	            title = keywords[keyword].title;
	        } else if (keywordParts) {
	            href = keywordParts.href;
	            title = keywordParts.title;
	        }
	    })();
	
	    /**
	     * Branding is only required on the News and World Service sites
	     */
	    if ((sections.getSections()[0] === 'news' || sections.getSections()[0] === 'worldservice') && "function" !== 'undefined') {
	        requirejs(['module/bootstrap', 'module/indexTitle'], function (news, indexTitle) {
	            var indexTitleString,
	                adTextKey = 'sponsoredByText',
	                adText = AdText.getText(adTextKey),
	                adInfoLink = AdText.getInfoUrl(adTextKey);
	            if (typeof indexTitle !== 'undefined') {
	                if (typeof indexTitle.setTitleHtml !== 'undefined' && indexTitle.getIndexTitle().element.length > 0) {
	                    indexTitleString = href && indexTitle.getIndexTitle().element.find('a').length >= 1 ? '<a href="' + href + '">' + title + '</a>' : indexTitle.getIndexTitle().element[0].textContent;
	
	                    indexTitle.setTitleHtml('<span class="bbccom_index_title">' + indexTitleString + '</span>' + '<a class="bbccom_text" href="' + adInfoLink + '" ' + 'tabindex="-1" aria-hidden="true">' + adText + '</a>');
	                }
	            }
	        });
	    }
	
	    return {
	        getUrl: function getUrl() {
	            return href;
	        },
	        getTitle: function getTitle() {
	            return title;
	        }
	    };
	};

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _pubsub = __webpack_require__(205);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = {
	    renderAd: function renderAd(ad, advertText) {
	        var adText, adInfo, adElement, adId, adSlotId, adNode;
	
	        if (advertText) {
	            ad.setAdText(advertText);
	        }
	        adText = ad.getAdText();
	        adId = ad.getAdId();
	        adSlotId = 'bbccom_' + adId;
	        adNode = document.getElementById(adSlotId);
	
	        _pubsub2['default'].trigger('ad:render', adId);
	        if (adText) {
	            adInfo = ad.getAdInfoUrl();
	            adElement = document.createElement("a");
	            adElement.setAttribute("class", "bbccom_text");
	            adElement.setAttribute("href", adInfo);
	            adElement.innerText = adText;
	            if (adNode && adNode.getElementsByClassName('bbccom_text').length === 0) {
	                adNode.prepend(adElement);
	            }
	        }
	        _pubsub2['default'].on('ads:initialised', function () {
	            googletag.cmd.push(function () {
	                googletag.display(adSlotId);
	                ad.disableScreenReaderForAdContent();
	                _pubsub2['default'].trigger('ad:render:complete', adId);
	            });
	        });
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 270 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {
	    /**
	     * @param adId eg mpu, leaderboard
	     */
	    createAd: function createAd(adId) {
	        return new bbcdotcom.adverts.ad(adId);
	    }
	};

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var pubsub = __webpack_require__(205);
	
	var adText = '<a class="bbccom_text" href="{adInfo}">{adText}</a>',
	    adTemplate = '<script type="text/javascript">' + 'bbcdotcom.ad("{adId}").setBaseContent();' + 'googletag.display("{adId}");' + '</script>';
	
	module.exports = {
	    renderAd: function renderAd(data) {
	        var out = '';
	
	        pubsub.trigger('ad:render', data.adId);
	
	        if (data.adText) {
	            out = this.substituteData(adText, data);
	        }
	        out += this.substituteData(adTemplate, data);
	        document.write(out);
	
	        return out;
	    },
	    substituteData: function substituteData(template, data) {
	        var adHtml = template.replace(/\{[^{}]+\}/g, function (key) {
	            return data[key.replace(/[{}]+/g, "")] || key;
	        });
	        return adHtml;
	    }
	};

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 *
	 * Note: This is called in slot.js AND currencyProviders.js
	 *
	 */
	var config = __webpack_require__(150);
	var sections = __webpack_require__(152);
	
	/**
	 * Map of templates used for rendering the outbrain widget. The key is the first section
	 * from bbcdotcom.sections. If we add outbrain to a new product, we will need to add a
	 * template to this map otherwise the News template will be used as a default.
	 */
	var productTemplates = {
	    news: 'bbc.com/News',
	    sport: 'bbc.com/Sport',
	    fallback: 'bbc.com/News'
	};
	
	function sanitiseDataSrc(href) {
	    if (href.match(/^(https|http):\/\/(pal|m|www).*.bbc.(com|co.uk)/)) {
	        return encodeURIComponent(href.replace(/(\?|#).+$/, '') // Remove everything after ? or #
	        );
	    } else {
	        return encodeURIComponent('http://www.bbc.com/news');
	    }
	}
	
	function generateHtml(id, template) {
	    var windowLocation = config.getWindowLocation();
	    var url = sanitiseDataSrc(windowLocation.href.replace(/(pal|m).sandbox.dev/, 'www'));
	
	    return '<div class="bbccom_outbrain_container bbccom_' + id + '">' + '<div class="OUTBRAIN" data-src="' + url + '" data-widget-id="' + id.replace(/outbrain_/, '').toUpperCase() + '" data-ob-template="' + template + '"></div>' + '<script type="text/javascript">' + '    document.write(decodeURI(\'%3Cscript src="//widgets.outbrain.com/outbrain.js" type="text/javascript"%3E%3C/script%3E\'));' + '</script>' + '</div>';
	}
	
	module.exports = {
	    sanitiseDataSrc: sanitiseDataSrc,
	    renderAd: function renderAd(id) {
	        var product = sections.getSection(0);
	
	        var template = productTemplates[product] || productTemplates.fallback;
	
	        if (!config.isIE7() && config.isOutbrainEnabled()) {
	            // IE7 cannot document.write() within a document.write() and place contents into the <div>
	            var html = generateHtml(id, template);
	            document.write(html);
	            return html;
	        }
	        return false;
	    }
	};

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(143);
	var config = __webpack_require__(150);
	var adRegister = __webpack_require__(200);
	var layout = __webpack_require__(199);
	var adRenderer = __webpack_require__(271);
	var outbrainRenderer = __webpack_require__(272);
	var adsenseRenderer = __webpack_require__(202);
	
	module.exports = function slot(adId, groups, preload, advertText, currentScriptTag) {
	    'use strict';
	
	    var log = __webpack_require__(144)('adverts:slot');
	
	    try {
	        if (config.isActive('ads') && typeof adId === 'string' && adId.length > 0 && typeof groups !== 'undefined') {
	            var slotConfig,
	                scriptTags,
	                ad = adRegister.getAd(adId),
	                currentGroupId = layout.getCurrentGroupId(),
	                slotDomId = preload ? 'bbccom_' + adId + '_' + groups.join('_') + '_preload' : 'bbccom_' + adId + '_' + groups.join('_'),
	                slotElement = document.getElementById(slotDomId),
	                adDomId = 'bbccom_' + adId;
	            if (typeof ad !== 'undefined' && typeof ad.getAdId() !== 'undefined') {
	                slotConfig = {
	                    adInfo: ad.getAdInfoUrl(),
	                    adText: advertText || ad.getAdText(),
	                    adDomId: adDomId,
	                    adId: adId
	                };
	                if (!ad.hasAnyGroupAlreadyBeenRegistered(groups)) {
	                    ad.registerSlotGroups(groups);
	                    /** Legacy ad slots will not have the ID defined in the markup */
	                    if (slotElement === null) {
	                        scriptTags = document.getElementsByTagName("script");
	                        currentScriptTag = typeof currentScriptTag === 'undefined' ? scriptTags[scriptTags.length - 1].innerHTML.indexOf('bbcdotcom') === -1 ? scriptTags[scriptTags.length - 2] : scriptTags[scriptTags.length - 1] : currentScriptTag;
	                        slotElement = utils.getParentElementByClass(currentScriptTag, 'bbccom_slot');
	                        if (!slotElement) {
	                            log.warn('"bbccom_slot" class not found for this slot "' + slotDomId + '"');
	                            adRegister.setCurrentAdId(undefined);
	                            return false;
	                        }
	                        slotElement.id = slotDomId;
	                    }
	                    /** END Legacy ad slots will not have the ID defined in the markup */
	
	                    slotElement.className += ' bbccom_' + ad.adType + '_slot';
	
	                    if (groups.indexOf(currentGroupId) >= 0) {
	                        // Ad can be rendered because slot matches current group id (width)
	                        ad.setCurrentSlotGroups(groups);
	
	                        if (typeof preload !== 'undefined' && preload) {
	                            ad.setPreloaded(true);
	                        }
	
	                        // Tell the register that this ad is currently being processed (for .show)
	                        adRegister.setCurrentAdId(adId);
	
	                        // Assign adDomId to enable copying ad and moving
	                        slotElement.children[0].id = adDomId;
	
	                        ad.setCurrentSlotVisible();
	
	                        // Render ad in Html
	                        if (adId.indexOf('adsense') === 0) {
	                            // Google Adsense advert (eg adsense, adsense_mpu)
	                            return adsenseRenderer.renderAd();
	                        } else if (adId.indexOf('outbrain') === 0) {
	                            // Outbrain - note, TR_1 is injected in currencyProviders.js
	                            return outbrainRenderer.renderAd(adId);
	                        } else {
	                            // Standard advert
	                            return adRenderer.renderAd(slotConfig);
	                        }
	                    } else {
	                        adRegister.setCurrentAdId(false);
	                    }
	                }
	            }
	        }
	    } catch (e) {
	        log.error(e);
	    }
	};

/***/ }),
/* 274 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (adId, groups, advertText) {
	    var ad,
	        slot,
	        slotDomChildElement,
	        currentGroupId = bbcdotcom.adverts.layout.getCurrentGroupId();
	
	    if (window.bbcdotcom && bbcdotcom.ad && bbcdotcom.isActive && bbcdotcom.isActive('ads')) {
	        if (bbcdotcom.adverts.adFilter.isLazyLoadedSlot(adId)) {
	            bbcdotcom.lazyLoadAd(adId, groups, advertText);
	            return;
	        }
	        ad = bbcdotcom.ad(adId);
	        if (typeof ad !== 'undefined' && !ad.hasAnyGroupAlreadyBeenRegistered([groups])) {
	            ad.registerSlotGroups(groups);
	            if (groups.indexOf(currentGroupId) >= 0) {
	
	                ad.setCurrentSlotGroups(groups);
	
	                slot = document.getElementById('bbccom_' + adId + '_' + groups.join('_'));
	                slotDomChildElement = slot.firstElementChild || slot.firstChild;
	                if (slotDomChildElement) {
	                    slotDomChildElement.id = 'bbccom_' + adId;
	                }
	                bbcdotcom.utils.addTagClass(slot, 'bbccom_' + ad.adType + '_slot');
	
	                ad.renderIfReady();
	
	                // Render ad in Html
	                if (adId.indexOf('adsense') === 0) {
	                    // Google Adsense advert (eg adsense, adsense_mpu)
	                    if (!bbcdotcom.config.isAdsenseEnabled()) {
	                        return;
	                    }
	                    bbcdotcom.adverts.adsenseRenderer.loadGoogleAdsense();
	                    return bbcdotcom.adverts.adsenseRenderer.renderAd(adId, groups);
	                } else if (adId.indexOf('outbrain') === 0) {
	                    // Outbrain - note, TR_1 is injected in currencyProviders.js
	                    // Not Async, we need to call open to make them visible
	                    ad.open();
	                    return bbcdotcom.adverts.outbrainRenderer.renderAd(adId);
	                } else {
	                    // Standard advert
	                    return bbcdotcom.adverts.adAsyncRenderer.renderAd(ad, advertText);
	                }
	            }
	        }
	    }
	};

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Log = __webpack_require__(144)('adverts:slotInfinite');
	var TemplateFactory = __webpack_require__(276);
	
	/**
	 * Renders an an template and optionally writes it to the dom within 'element'
	 *
	 * @param {string} adId
	 * @param {number[]} groups
	 * @param {Element} [element=]
	 * @param {bool} [register=false]
	 */
	var SlotInfinite = function SlotInfinite(adId, groups, element, register) {
	    Log('Rendering Infinite Slot: ', {
	        adId: adId,
	        groups: groups,
	        element: element,
	        register: register
	    });
	
	    // Compose the group class name
	    var groupsClass = groups.join('_'),
	        renderedTemplate;
	
	    try {
	        // Render the template
	        renderedTemplate = TemplateFactory.getTemplate('adTemplates/infinite-slot').render({
	            "adId": adId,
	            "groups": groups,
	            "groupsClass": groupsClass,
	            "register": register
	        });
	    } catch (e) {
	        Log.error('Error rendering the template!');
	        return null;
	    }
	
	    if (!element) {
	        // Return the template if not rendering into DOM
	        Log('Returned rendered template for: ' + adId);
	        return renderedTemplate;
	    }
	
	    Log('Inserting rendered template into DOM element: ', {
	        element: element,
	        renderedTemplate: renderedTemplate
	    });
	    TemplateFactory.renderIntoElement(element, renderedTemplate);
	};
	
	module.exports = SlotInfinite;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Log = __webpack_require__(144)('templates:templateFactory');
	
	/**
	 * ***************************
	 * Add you template names here
	 * @type {string[]}
	 * ***************************
	 */
	var AVAILABLE_TEMPLATES = ['adTemplates/infinite-slot'];
	
	function TemplateFactory() {
	    this.templates = AVAILABLE_TEMPLATES.reduce(function (objectMap, value) {
	        objectMap[value] = __webpack_require__(277)("./" + value + '.mustache');
	        return objectMap;
	    }, {});
	}
	
	/**
	 * Get a template
	 *
	 * @method getTemplate
	 * @param {string} templateName - The Template to retrieve
	 * @throws {Error} - When template cannot be found.
	 */
	TemplateFactory.prototype.getTemplate = function (templateName) {
	    if (!this.templates.hasOwnProperty(templateName)) {
	        Log.error('Could not find template: ' + templateName);
	        throw new Error('Could not find template: ' + templateName);
	    }
	
	    return this.templates[templateName];
	};
	
	TemplateFactory.prototype.renderIntoElement = function (element, html) {
	    if (!element || !html) {
	        Log.error('Require parameter not supplied', {
	            element: element,
	            html: html
	        });
	        throw new Error('Required param not supplied');
	    }
	
	    element.innerHTML = html;
	    try {
	        nodeScriptReplace(element);
	    } catch (e) {
	        Log.error('Error rendering template into DOM: ', e);
	    }
	};
	
	// Add script elements to DOM
	function nodeScriptReplace(node) {
	    if (nodeScriptIs(node) === true) {
	        node.parentNode.replaceChild(nodeScriptClone(node), node);
	    } else {
	        var i = 0;
	        var children = node.childNodes;
	        while (i < children.length) {
	            nodeScriptReplace(children[i++]);
	        }
	    }
	
	    return node;
	}
	
	function nodeScriptIs(node) {
	    return node.tagName === 'SCRIPT';
	}
	
	function nodeScriptClone(node) {
	    var script = document.createElement("script");
	    script.text = node.innerHTML;
	    for (var i = node.attributes.length - 1; i >= 0; i--) {
	        script.setAttribute(node.attributes[i].name, node.attributes[i].value);
	    }
	    return script;
	}
	
	module.exports = new TemplateFactory();

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./adTemplates/infinite-slot.mustache": 278
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 277;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	var H = __webpack_require__(279);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"bbccom_");t.b(t.v(t.f("adId",c,p,0)));t.b("_");t.b(t.v(t.f("groupsClass",c,p,0)));t.b("\" class=\"bbccom_slot\" aria-hidden=\"true\"><div id=\"bbccom_");t.b(t.v(t.f("adId",c,p,0)));t.b("\" class=\"bbccom_advert\">");if(t.s(t.f("register",c,p,1),c,p,0,142,353,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<script type=\"text/javascript\">/*<![CDATA[*/");t.b("\n" + i);t.b("            if (window.bbcdotcom && bbcdotcom.registerAd) {");t.b("\n" + i);t.b("                bbcdotcom.registerAd('");t.b(t.v(t.f("adId",c,p,0)));t.b("', [");t.b(t.v(t.f("groups",c,p,0)));t.b("]);");t.b("\n" + i);t.b("            }");t.b("\n" + i);t.b("            /*]]>*/</script>");});c.pop();}t.b("</div></div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"bbccom_{{adId}}_{{groupsClass}}\" class=\"bbccom_slot\" aria-hidden=\"true\"><div id=\"bbccom_{{adId}}\" class=\"bbccom_advert\">{{#register}}<script type=\"text/javascript\">/*<![CDATA[*/\n            if (window.bbcdotcom && bbcdotcom.registerAd) {\n                bbcdotcom.registerAd('{{adId}}', [{{groups}}]);\n            }\n            /*]]>*/</script>{{/register}}</div></div>", H);return T; }();

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */
	
	var Hogan = {};
	
	(function (Hogan) {
	  Hogan.Template = function (codeObj, text, compiler, options) {
	    codeObj = codeObj || {};
	    this.r = codeObj.code || this.r;
	    this.c = compiler;
	    this.options = options || {};
	    this.text = text || '';
	    this.partials = codeObj.partials || {};
	    this.subs = codeObj.subs || {};
	    this.buf = '';
	  }
	
	  Hogan.Template.prototype = {
	    // render: replaced by generated code.
	    r: function (context, partials, indent) { return ''; },
	
	    // variable escaping
	    v: hoganEscape,
	
	    // triple stache
	    t: coerceToString,
	
	    render: function render(context, partials, indent) {
	      return this.ri([context], partials || {}, indent);
	    },
	
	    // render internal -- a hook for overrides that catches partials too
	    ri: function (context, partials, indent) {
	      return this.r(context, partials, indent);
	    },
	
	    // ensurePartial
	    ep: function(symbol, partials) {
	      var partial = this.partials[symbol];
	
	      // check to see that if we've instantiated this partial before
	      var template = partials[partial.name];
	      if (partial.instance && partial.base == template) {
	        return partial.instance;
	      }
	
	      if (typeof template == 'string') {
	        if (!this.c) {
	          throw new Error("No compiler available.");
	        }
	        template = this.c.compile(template, this.options);
	      }
	
	      if (!template) {
	        return null;
	      }
	
	      // We use this to check whether the partials dictionary has changed
	      this.partials[symbol].base = template;
	
	      if (partial.subs) {
	        // Make sure we consider parent template now
	        if (!partials.stackText) partials.stackText = {};
	        for (key in partial.subs) {
	          if (!partials.stackText[key]) {
	            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
	          }
	        }
	        template = createSpecializedPartial(template, partial.subs, partial.partials,
	          this.stackSubs, this.stackPartials, partials.stackText);
	      }
	      this.partials[symbol].instance = template;
	
	      return template;
	    },
	
	    // tries to find a partial in the current scope and render it
	    rp: function(symbol, context, partials, indent) {
	      var partial = this.ep(symbol, partials);
	      if (!partial) {
	        return '';
	      }
	
	      return partial.ri(context, partials, indent);
	    },
	
	    // render a section
	    rs: function(context, partials, section) {
	      var tail = context[context.length - 1];
	
	      if (!isArray(tail)) {
	        section(context, partials, this);
	        return;
	      }
	
	      for (var i = 0; i < tail.length; i++) {
	        context.push(tail[i]);
	        section(context, partials, this);
	        context.pop();
	      }
	    },
	
	    // maybe start a section
	    s: function(val, ctx, partials, inverted, start, end, tags) {
	      var pass;
	
	      if (isArray(val) && val.length === 0) {
	        return false;
	      }
	
	      if (typeof val == 'function') {
	        val = this.ms(val, ctx, partials, inverted, start, end, tags);
	      }
	
	      pass = !!val;
	
	      if (!inverted && pass && ctx) {
	        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
	      }
	
	      return pass;
	    },
	
	    // find values with dotted names
	    d: function(key, ctx, partials, returnFound) {
	      var found,
	          names = key.split('.'),
	          val = this.f(names[0], ctx, partials, returnFound),
	          doModelGet = this.options.modelGet,
	          cx = null;
	
	      if (key === '.' && isArray(ctx[ctx.length - 2])) {
	        val = ctx[ctx.length - 1];
	      } else {
	        for (var i = 1; i < names.length; i++) {
	          found = findInScope(names[i], val, doModelGet);
	          if (found !== undefined) {
	            cx = val;
	            val = found;
	          } else {
	            val = '';
	          }
	        }
	      }
	
	      if (returnFound && !val) {
	        return false;
	      }
	
	      if (!returnFound && typeof val == 'function') {
	        ctx.push(cx);
	        val = this.mv(val, ctx, partials);
	        ctx.pop();
	      }
	
	      return val;
	    },
	
	    // find values with normal names
	    f: function(key, ctx, partials, returnFound) {
	      var val = false,
	          v = null,
	          found = false,
	          doModelGet = this.options.modelGet;
	
	      for (var i = ctx.length - 1; i >= 0; i--) {
	        v = ctx[i];
	        val = findInScope(key, v, doModelGet);
	        if (val !== undefined) {
	          found = true;
	          break;
	        }
	      }
	
	      if (!found) {
	        return (returnFound) ? false : "";
	      }
	
	      if (!returnFound && typeof val == 'function') {
	        val = this.mv(val, ctx, partials);
	      }
	
	      return val;
	    },
	
	    // higher order templates
	    ls: function(func, cx, partials, text, tags) {
	      var oldTags = this.options.delimiters;
	
	      this.options.delimiters = tags;
	      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
	      this.options.delimiters = oldTags;
	
	      return false;
	    },
	
	    // compile text
	    ct: function(text, cx, partials) {
	      if (this.options.disableLambda) {
	        throw new Error('Lambda features disabled.');
	      }
	      return this.c.compile(text, this.options).render(cx, partials);
	    },
	
	    // template result buffering
	    b: function(s) { this.buf += s; },
	
	    fl: function() { var r = this.buf; this.buf = ''; return r; },
	
	    // method replace section
	    ms: function(func, ctx, partials, inverted, start, end, tags) {
	      var textSource,
	          cx = ctx[ctx.length - 1],
	          result = func.call(cx);
	
	      if (typeof result == 'function') {
	        if (inverted) {
	          return true;
	        } else {
	          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
	          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
	        }
	      }
	
	      return result;
	    },
	
	    // method replace variable
	    mv: function(func, ctx, partials) {
	      var cx = ctx[ctx.length - 1];
	      var result = func.call(cx);
	
	      if (typeof result == 'function') {
	        return this.ct(coerceToString(result.call(cx)), cx, partials);
	      }
	
	      return result;
	    },
	
	    sub: function(name, context, partials, indent) {
	      var f = this.subs[name];
	      if (f) {
	        this.activeSub = name;
	        f(context, partials, this, indent);
	        this.activeSub = false;
	      }
	    }
	
	  };
	
	  //Find a key in an object
	  function findInScope(key, scope, doModelGet) {
	    var val;
	
	    if (scope && typeof scope == 'object') {
	
	      if (scope[key] !== undefined) {
	        val = scope[key];
	
	      // try lookup with get for backbone or similar model data
	      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
	        val = scope.get(key);
	      }
	    }
	
	    return val;
	  }
	
	  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
	    function PartialTemplate() {};
	    PartialTemplate.prototype = instance;
	    function Substitutions() {};
	    Substitutions.prototype = instance.subs;
	    var key;
	    var partial = new PartialTemplate();
	    partial.subs = new Substitutions();
	    partial.subsText = {};  //hehe. substext.
	    partial.buf = '';
	
	    stackSubs = stackSubs || {};
	    partial.stackSubs = stackSubs;
	    partial.subsText = stackText;
	    for (key in subs) {
	      if (!stackSubs[key]) stackSubs[key] = subs[key];
	    }
	    for (key in stackSubs) {
	      partial.subs[key] = stackSubs[key];
	    }
	
	    stackPartials = stackPartials || {};
	    partial.stackPartials = stackPartials;
	    for (key in partials) {
	      if (!stackPartials[key]) stackPartials[key] = partials[key];
	    }
	    for (key in stackPartials) {
	      partial.partials[key] = stackPartials[key];
	    }
	
	    return partial;
	  }
	
	  var rAmp = /&/g,
	      rLt = /</g,
	      rGt = />/g,
	      rApos = /\'/g,
	      rQuot = /\"/g,
	      hChars = /[&<>\"\']/;
	
	  function coerceToString(val) {
	    return String((val === null || val === undefined) ? '' : val);
	  }
	
	  function hoganEscape(str) {
	    str = coerceToString(str);
	    return hChars.test(str) ?
	      str
	        .replace(rAmp, '&amp;')
	        .replace(rLt, '&lt;')
	        .replace(rGt, '&gt;')
	        .replace(rApos, '&#39;')
	        .replace(rQuot, '&quot;') :
	      str;
	  }
	
	  var isArray = Array.isArray || function(a) {
	    return Object.prototype.toString.call(a) === '[object Array]';
	  };
	
	})( true ? exports : Hogan);


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var config = __webpack_require__(150);
	var adRegister = __webpack_require__(200);
	var outbrainRenderer = __webpack_require__(272);
	
	var loaded = [];
	var isNielsenLoadedInterval;
	
	var loadNielsenAu = function loadNielsenAu() {
	    if (typeof nol_t !== 'undefined') {
	        nol_t({ cid: "au-bbc", content: "0", server: "secure-au" }).record().post();
	        clearInterval(isNielsenLoadedInterval);
	    }
	};
	
	var loadNielsenNz = function loadNielsenNz() {
	    if (typeof nol_t !== 'undefined') {
	        nol_t({ cid: "nz-bbc", content: "0", server: "secure-nz" }).record().post();
	        clearInterval(isNielsenLoadedInterval);
	    }
	};
	
	var loadScript = function loadScript(src) {
	    var script, body;
	    /* Load the library, asynchronously. */
	    script = document.createElement('script');
	    script.async = true;
	    script.type = 'text/javascript';
	    script.src = src;
	    body = document.getElementsByTagName('body')[0];
	    body.appendChild(script);
	};
	
	module.exports = {
	    write: function write() {
	
	        if (config.isActive('analytics')) {
	
	            /* Nielsen (AU) SiteCensus V6.0 */
	            if (config.isActive('nielsen-au')) {
	                /* COPYRIGHT 2009 Nielsen Online */
	                loadScript('https://secure-au.imrworldwide.com/v60.js');
	                loaded.push('nielsen_au');
	            }
	
	            /* Nielsen (NZ) SiteCensus V6.0 */
	            if (config.isActive('nielsen-nz')) {
	                /* COPYRIGHT 2009 Nielsen Online */
	                loadScript('https://secure-nz.imrworldwide.com/v60.js');
	                loaded.push('nielsen_nz');
	            }
	
	            /* Nielsen (US) SiteCensus V6.0 */
	            if (config.isActive('nielsen-us')) {
	                /* COPYRIGHT 2010 Nielsen Online */
	                (function () {
	                    var d = new Image(1, 1);
	                    d.onerror = d.onload = function () {
	                        d.onerror = d.onload = null;
	                    };
	                    d.src = ["https://secure-us.imrworldwide.com/cgi-bin/m?ci=us-804789h&amp;cg=0&amp;cc=1&amp;si=", encodeURI(window.location.href), "&amp;rp=", encodeURI(document.referrer), "&amp;ts=compact&amp;rnd=", new Date().getTime()].join('');
	                })();
	                loaded.push('nielsen_us');
	            }
	
	            /* Effective Measure */
	            (function () {
	                var em = document.createElement('script');
	                em.type = 'text/javascript';
	                em.async = true;
	                em.src = 'https://me-ssl.effectivemeasure.net/em.js';
	                var s = document.getElementsByTagName('head')[0];
	                s.appendChild(em);
	            })();
	            loaded.push('effective_measure');
	
	            /* Outbrain Tracking */
	            if (typeof adRegister.getAd('outbrain_tr_1') !== 'undefined') {
	                outbrainRenderer.renderAd('outbrain_tr_1');
	                loaded.push('outbrain');
	            }
	        }
	    },
	    postWrite: function postWrite() {
	        if (config.isActive('analytics')) {
	
	            /* Nielsen (AU) SiteCensus V6.0 */
	            if (config.isActive('nielsen-au')) {
	                isNielsenLoadedInterval = setInterval(loadNielsenAu, 500);
	                loaded.push('nielsen_au-postWrite');
	            }
	
	            /* Nielsen (NZ) SiteCensus V6.0 */
	            if (config.isActive('nielsen-nz')) {
	                isNielsenLoadedInterval = setInterval(loadNielsenNz, 500);
	                loaded.push('nielsen_nz-postWrite');
	            }
	        }
	    },
	    /**
	     * For testing only.
	     */
	    getLoaded: function getLoaded() {
	        return loaded;
	    },
	    r: function r() {
	        loaded = [];
	    }
	};

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _utils = __webpack_require__(143);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _locale = __webpack_require__(153);
	
	var _locale2 = _interopRequireDefault(_locale);
	
	var _sections = __webpack_require__(152);
	
	var _sections2 = _interopRequireDefault(_sections);
	
	var _predicate = __webpack_require__(197);
	
	var _predicate2 = _interopRequireDefault(_predicate);
	
	var _slotAsync2 = __webpack_require__(274);
	
	var _slotAsync3 = _interopRequireDefault(_slotAsync2);
	
	var _slotInfinite2 = __webpack_require__(275);
	
	var _slotInfinite3 = _interopRequireDefault(_slotInfinite2);
	
	var _layout = __webpack_require__(199);
	
	var _layout2 = _interopRequireDefault(_layout);
	
	var _slot2 = __webpack_require__(273);
	
	var _slot3 = _interopRequireDefault(_slot2);
	
	var _adRegister = __webpack_require__(200);
	
	var _adRegister2 = _interopRequireDefault(_adRegister);
	
	var _adFilter = __webpack_require__(209);
	
	var _adFilter2 = _interopRequireDefault(_adFilter);
	
	var _adUnit = __webpack_require__(206);
	
	var _adUnit2 = _interopRequireDefault(_adUnit);
	
	var _adSuites = __webpack_require__(262);
	
	var _adSuites2 = _interopRequireDefault(_adSuites);
	
	var _keyValues = __webpack_require__(176);
	
	var _keyValues2 = _interopRequireDefault(_keyValues);
	
	var _breakpoints = __webpack_require__(204);
	
	var _breakpoints2 = _interopRequireDefault(_breakpoints);
	
	var _dfppRequest = __webpack_require__(198);
	
	var _dfppRequest2 = _interopRequireDefault(_dfppRequest);
	
	var _featureSwitch = __webpack_require__(282);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	 * This maps a simpler API and checks the needed objects exits
	 */
	var ad;
	
	var analytics = __webpack_require__(210);
	var log = __webpack_require__(144)('adverts:ad');
	
	var api = {
	    slot: function slot(adId, groups, preload, advertText, stubCurrentScriptTag) {
	        if (adId && groups) {
	            return (0, _slot3['default'])(adId, groups, preload, advertText, stubCurrentScriptTag);
	        }
	        return false;
	    },
	
	    /** @deprecated Use slotAsync */
	    asyncSlot: _slotAsync3['default'],
	    slotAsync: function slotAsync(adId, groups, preload, advertText) {
	        if (adId && groups) {
	            return (0, _slotAsync3['default'])(adId, groups, advertText);
	        }
	        return false;
	    },
	
	    /**
	     * Renders an an template and optionally writes it to the dom within 'element'
	     *
	     * @param {string} adId - Ad Slot eg 'mpu', 'native'
	     * @param {number[]} groups - Groups that the ad should display on
	     * @param {Element} [element=null] - DOM Element to render template inside
	     * @param {bool} [register=false] - Include JS that registers ad with bbcdotcom module (Display Ad)
	     */
	    slotInfinite: function slotInfinite(adId, groups, element, register) {
	        return (0, _slotInfinite3['default'])(adId, groups, element, register);
	    },
	
	    getCurrentGroupId: function getCurrentGroupId() {
	        return _layout2['default'].getCurrentGroupId();
	    },
	
	    receiveMessage: function receiveMessage(event) {
	        // First validate the origin
	        var re = /(www|m)\.{0,1}(test|int|stage){0,1}\.bbc\.com$/;
	        if (re.exec(event.origin) === null && event.origin !== "http://pal.sandbox.dev.bbc.com" && event.origin !== "http://m.sandbox.dev.bbc.com") {
	            // Not from a valid origin - do noting
	            return;
	        }
	
	        // Then check that the data is valid JSON
	        var data;
	        try {
	            data = JSON.parse(event.data);
	        } catch (e) {
	            // Not valid JSON - do nothing
	            return;
	        }
	
	        if (typeof data.slot !== 'undefined') {
	            // Close the slot & post back success
	            log('receiveMessage about to call .close()');
	            _adRegister2['default'].getAd(data.slot).close();
	            event.source.postMessage(JSON.stringify({ success: true }), '*');
	        }
	    },
	
	    registerSlot: function registerSlot(id, groups) {
	        // TODO - Add ability to register slot when ad has not been pre loaded
	        var groupsString = groups.join('_'),
	            ad = _adRegister2['default'].registerAd(id);
	        if (ad.isPreloaded() && id && groups) {
	            _layout2['default'].moveAd('bbccom_' + id + '_' + groupsString + '_preload', 'bbccom_' + id + '_' + groupsString);
	            _adRegister2['default'].getAd(id).show();
	        }
	    },
	
	    reset: function reset() {
	        return _layout2['default'].reset();
	    },
	
	    show: function show() {
	        ad = _adRegister2['default'].getCurrentAd();
	        if (typeof ad !== 'undefined') {
	            ad.show();
	        }
	    },
	
	    isActive: function isActive(key) {
	        return _config2['default'].isActive(key);
	    },
	
	    setAdKeyValue: function setAdKeyValue(key, value) {
	        _keyValues2['default'].set(key, value);
	    },
	
	    setAdUnit: function setAdUnit(unit) {
	        _adUnit2['default'].setAdUnit(unit);
	    },
	
	    setLocale: function setLocale(field, text) {
	        _locale2['default'].set(field, text);
	    },
	
	    ad: function ad(adId) {
	        return _adRegister2['default'].getAd(adId);
	    },
	
	    setGroupStartWidth: function setGroupStartWidth(group, width) {
	        return _breakpoints2['default'].setGroupStart(group, width);
	    },
	
	    /**
	     * Config passed from server-side then config from client-side is passed into this method.
	     *
	     * @param conf array|object Configuration items
	     */
	    setConfig: _config2['default'].rehydrate.bind(_config2['default']),
	
	    /**
	     * Register ads is used in asynchronous mode to ad additional ads after page load
	     * This differs to refreshing a slot with a new ad
	     *
	     * Params:
	     * adId <JSONObject|string>
	     *  | May be a JSON object eg `config[id].groups = [1,2,3,4]`
	     *  | May be a JSON object eg `config[id].groups = [1,2,3,4]`
	     *  | or just a slot id eg leaderboard, mpu.
	     *
	     * groups <array>
	     *  | Array of page group numbers to request ads for eg. [1, 2, 3, 4]
	     *  | If domId was passed as an object the field may be set to undefined.
	     *
	     * keyValues <JSONObject>
	     *  | List of key value pairs to be passed on for individual ad requests.
	     *
	     */
	    registerAd: function registerAd(adId, groups, keyValues) {
	        _dfppRequest2['default'].registerAd(adId, groups, keyValues);
	    },
	
	    /**
	     *
	     */
	    lazyLoadAd: function lazyLoadAd(adId, groups) {
	        _dfppRequest2['default'].lazyLoadAd(adId, groups);
	    },
	
	    getFeatures: _featureSwitch.getFeatures,
	    getFeature: _featureSwitch.getFeature,
	
	    /**
	     * Refresh ads in synchronous loaded pages
	     * There is an async version of refreshing ads in dfppRequest.js
	     * TODO - Remove once using async version of GPT
	     */
	    refreshAd: function refreshAd(adId, size, advertText) {
	
	        var i,
	            adString,
	            adIdPrefix = 'bbccom_',
	            keyValueString = '',
	            keyValues = keyValues.getAll(),
	            ad = _adRegister2['default'].getAd(adId),
	            adSlot = document.getElementById(adIdPrefix + adId),
	            aTag = document.createElement('a'),
	            iFrame = document.createElement('iframe'),
	            adInfo = ad.getAdInfoUrl(),
	            adText = ad.getAdText();
	
	        for (i in keyValues) {
	            if (keyValues.hasOwnProperty(i)) {
	                keyValueString += ';' + i + '=' + keyValues[i];
	            }
	        }
	
	        adString = 'https://ad.doubleclick.net' + _adUnit2['default'].get().replace('/4817', '/N4817/adi') + ';slot=' + adId + ';sz=' + size + keyValueString + ';ord=' + Math.random().toString().slice(2, 16) + ';tile=1' + ';iframe=yes?';
	
	        iFrame.src = adString;
	        iFrame.width = size.split('x')[0];
	        iFrame.height = size.split('x')[1];
	        iFrame.scrolling = 'no';
	        iFrame.style.border = 'none';
	        iFrame.style.overflow = 'hidden';
	
	        aTag.innerHTML = adText;
	        aTag.href = adInfo;
	        aTag.className = 'bbccom_text';
	
	        adSlot.innerHTML = '';
	        adSlot.style.width = size.split('x')[0] + 'px';
	        adSlot.className = adSlot.className.replace('bbccom_display_none', '');
	        adSlot.appendChild(aTag);
	        adSlot.appendChild(iFrame);
	
	        _adRegister2['default'].getAd(adId).open();
	    },
	
	    /**
	     * Analytics tracking by third-party apps (eg Video Experience)
	     */
	    trackEvent: function trackEvent() {
	        // NoOp
	    },
	
	    onLocationKnown: function onLocationKnown(callback, that) {
	        var boundCallback = callback.bind(that);
	        var GDPR_COUNTRIES = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'CH'];
	        if (bbcdotcom.config.isEU() !== undefined) {
	            boundCallback();
	        } else if (window.bbcuser && window.bbcuser.getCountry && typeof window.bbcuser.getCountry === 'function') {
	            window.bbcuser.getCountry().then(function (countryCode) {
	                var isEU = countryCode ? GDPR_COUNTRIES.indexOf(countryCode.toUpperCase()) !== -1 : false;
	                bbcdotcom.config.setEU(isEU);
	                boundCallback();
	            });
	        } else if (window.orb && window.orb.fig && typeof window.orb.fig === 'function') {
	            bbcdotcom.config.setEU(window.orb.fig('eu'));
	            boundCallback();
	        }
	    },
	
	    reInit: function reInit(params) {
	
	        var windowDocument = {
	            title: params.headline,
	            referrer: params.referrer || ''
	        },
	            url = params.url || '',
	            predicate = new _predicate2['default']();
	
	        // TODO - Should new these up instead of having to reset them
	        _sections2['default'].r();
	        _keyValues2['default'].r();
	
	        api.setConfig(params);
	
	        if (typeof params.headline !== 'undefined' && typeof params.summary !== 'undefined') {
	            predicate.set(params.headline + ' ' + params.summary);
	        }
	
	        _sections2['default'].build(true, url);
	
	        _adUnit2['default'].init(_layout2['default'].getClientWidth(), undefined, _sections2['default'].getSections('advert'), _sections2['default'].getSections());
	
	        _keyValues2['default'].init(_utils2['default'].createWindowLocation(url), windowDocument);
	        if (typeof params.assetType !== 'undefined') {
	            _keyValues2['default'].set('asset_type', params.assetType);
	        }
	    },
	    resetPage: function resetPage(params) {
	
	        var referrer = _config2['default'].getWindowLocation().href || "",
	            windowLocation = _utils2['default'].createWindowLocation(params.url),
	            adsToDisplay;
	
	        var disableAdUnit = params.disableAdUnit || false;
	
	        if (_config2['default'].isActive('ads') && (!_config2['default'].isSportApp() || _config2['default'].isSportApp() && _config2['default'].isAdsportappEnabled())) {
	
	            /**
	            * DFPP Requests
	            */
	            _dfppRequest2['default'].reset();
	
	            _config2['default'].init(bbcdotcomConfig, bbcdotcom.data, windowLocation, { title: params.title, description: params.description, referrer: referrer });
	
	            /**
	             * Sections
	             */
	            _sections2['default'].build(true);
	
	            if (params.adsToDisplay) {
	                adsToDisplay = _adFilter2['default'].build(params.adsToDisplay);
	            }
	
	            /**
	             * DFPP Register ads
	             */
	            if (adsToDisplay) {
	                window.bbcdotcom.adsToDisplay = adsToDisplay;
	                for (var i = 0, len = adsToDisplay.length; i < len; i++) {
	                    _adRegister2['default'].registerAd(adsToDisplay[i]);
	                }
	            }
	
	            /**
	             * Ad Exclusions
	             */
	            new _predicate2['default']().set(params.title + ' ' + params.description);
	
	            /**
	             * Ad Unit
	             */
	            // FIXME
	            if (!disableAdUnit) {
	                _adUnit2['default'].init(_layout2['default'].getClientWidth(), this.serversideAdUnits2to9, _sections2['default'].getSections('advert'), _sections2['default'].getSections());
	            }
	
	            /**
	             * Key Values
	             */
	            _keyValues2['default'].init(windowLocation, window.document, _config2['default'].getType());
	            if (typeof params.keyValues !== 'undefined') {
	                for (var x in params.keyValues) {
	                    if (params.keyValues.hasOwnProperty(x)) {
	                        _keyValues2['default'].set(x, params.keyValues[x]);
	                    }
	                }
	            }
	            _dfppRequest2['default'].setKeyValues();
	
	            /**
	             * Ad Suites - used to display a certain set of ads all the time using ?ads=big
	             */
	            _adSuites2['default'].init(windowLocation.href);
	        }
	        if (_config2['default'].isAnalyticsEnabled()) {
	            analytics.page();
	        }
	    }
	};
	
	module.exports = api;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getFeature = getFeature;
	exports.getFeatures = getFeatures;
	
	var _config = __webpack_require__(150);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _feature = __webpack_require__(283);
	
	var _feature2 = _interopRequireDefault(_feature);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getFeature() {
	    var featureName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
	
	    if (featureName === null) {
	        return new _feature2['default']({}, palEnv);
	    }
	    featureName = featureName.toLowerCase();
	
	    var featuresConfig = _config2['default'].getFeatures();
	    var palEnv = _config2['default'].getPalEnv();
	
	    var featureData = featuresConfig.hasOwnProperty(featureName) ? Object.assign({ name: featureName }, featuresConfig[featureName]) : { name: featureName };
	
	    return new _feature2['default'](featureData, palEnv);
	}
	
	function getFeatures() {
	
	    var featuresConfig = _config2['default'].getFeatures();
	    var palEnv = _config2['default'].getPalEnv();
	    var features = {};
	
	    for (var featureName in featuresConfig) {
	        /* istanbul ignore else  */
	        if (featuresConfig.hasOwnProperty(featureName)) {
	            features[featureName] = getFeature(featureName);
	        }
	    }
	
	    return features;
	}

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _consts = __webpack_require__(151);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Feature = function () {
	    function Feature() {
	        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	            _ref$name = _ref.name,
	            name = _ref$name === undefined ? 'unknown-feature' : _ref$name,
	            _ref$envs = _ref.envs,
	            envs = _ref$envs === undefined ? [] : _ref$envs,
	            _ref$on = _ref.on,
	            on = _ref$on === undefined ? false : _ref$on,
	            _ref$options = _ref.options,
	            options = _ref$options === undefined ? {} : _ref$options,
	            _ref$override = _ref.override,
	            override = _ref$override === undefined ? null : _ref$override;
	
	        var palEnv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.PAL_ENV_LIVE;
	
	        _classCallCheck(this, Feature);
	
	        this.name = name;
	        this.envs = envs;
	        this.on = on;
	        this.options = options;
	        this.override = override;
	        this.palEnv = palEnv;
	    }
	
	    _createClass(Feature, [{
	        key: 'getName',
	        value: function getName() {
	            return this.name;
	        }
	    }, {
	        key: 'isEnabled',
	        value: function isEnabled() {
	            var environment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.palEnv;
	
	            if (this.override !== null) {
	                return this.override;
	            }
	            return isEnvironmentEnabled.call(this, environment) && getOn.call(this);
	        }
	    }, {
	        key: 'getOptions',
	        value: function getOptions() {
	            return this.options;
	        }
	    }, {
	        key: 'getOption',
	        value: function getOption(option) {
	            var options = this.getOptions();
	            return options.hasOwnProperty(option) ? options[option] : null;
	        }
	    }]);
	
	    return Feature;
	}();
	
	exports['default'] = Feature;
	
	
	function isEnvironmentEnabled(environment) {
	    return this.envs.includes(environment) || this.envs.length === 0;
	}
	
	function getOn() {
	    return this.on;
	}
	module.exports = exports['default'];

/***/ }),
/* 284 */
/***/ (function(module, exports) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/*
	StickyAdvert.js
	===============
	
	Searches the dom for the given elements passed through the exposed addElement() method
	and makes them stick to the top of screen on scroll for the distance(px) defined in the
	options object.
	
	API
	===
	add(<string> key, <DOMElement> element, <JSONObject> options)
	  | Makes an element sticky with the provided options. It is added to the listener with the provided key.
	
	remove(<string> key)
	  | Remove stickiness from element.
	
	list()
	  | List all elements that are currently sticky.
	
	Options configuration
	=====================
	offset.from: [<string> CSSselector, <string> (top|bottom)]
	  | Calculates the travel distance *FROM* either the top or bottom of the selected element.
	  | Both values must always be passed.
	
	offset.to: [<string> CSSselector, <string> (top|bottom)]
	  | Calculates the travel distance *TO* either the top or bottom of the selected element.
	  | Both values must always be passed.
	
	offsetType: <string> (include|exclude)
	  | OffsetType 'include' will subtract the stickied elements height from the travel distance,
	  | exlude will not.
	
	applyTo: <string> (parent)
	  | This will apply the stickiness to the parent of the actual ad container. This might be
	  | necessary for some ads that require a full section to become sticky.
	  | eg. leaderboard on wwhp.
	
	heightLimit: <integer>
	  | Any ad that exceeds this height will not be made sticky.
	
	parallax: <boolean>
	  | Makes the effect parallax instead of sticky *NOT WORKING*
	*/
	
	var StickyStuff = function () {
	  var stickiedElements = {};
	
	  var add = function add(key, element, options) {
	    // make sure ad height meets height limit
	    if (element.clientHeight > options.heightLimit) {
	      return;
	    }
	    stickiedElements[key] = makeSticky(element, options);
	  };
	
	  var remove = function remove(key) {
	    delete stickiedElements[key];
	  };
	
	  var list = function list() {
	    return stickiedElements;
	  };
	
	  var triggerResize = function triggerResize() {
	    Object.keys(stickiedElements).forEach(function (key) {
	      stickiedElements[key].triggerResize();
	    });
	  };
	
	  var startScrollListener = function startScrollListener() {
	    var scrollTop = 0;
	    window.addEventListener('scroll', function () {
	      scrollTop = window.pageYOffset;
	      Object.keys(stickiedElements).forEach(function (key) {
	        stickiedElements[key].update(scrollTop);
	      });
	    }, false);
	  };
	
	  var startResizeListener = function startResizeListener() {
	    var resizeTimer = null;
	    var width = window.outerWidth;
	    window.addEventListener('resize', function (e) {
	      if (e.target.outerWidth === width) return;
	      width = e.target.outerWidth;
	
	      if (!resizeTimer) {
	        triggerResize();
	      };
	      clearTimeout(resizeTimer);
	      resizeTimer = setTimeout(function () {
	        resizeTimer = null;
	        triggerResize();
	      }, 100);
	    });
	  };
	
	  var startOrientationListener = function startOrientationListener() {
	    window.addEventListener("orientationchange", function () {
	      setTimeout(function () {
	        Object.keys(stickiedElements).forEach(function (key) {
	          stickiedElements[key].triggerResize();
	        });
	      }, 1000);
	    });
	  };
	
	  var init = function () {
	    startScrollListener();
	    startResizeListener();
	    startOrientationListener();
	  }();
	
	  return { add: add, remove: remove, list: list };
	}();
	
	// Wrap reference to elements in a closure to store it's current state
	var makeSticky = function makeSticky(element, options) {
	  var ABOVE = 0,
	      OVER = 1,
	      BELOW = 2;
	
	  // Apply sticky directly to ad or to its parent. This is to only be used when the ad needs to be out of the page flow eg. leaderboard
	  var target = options.applyTo === 'parent' ? element.parentElement : element;
	  var _state = ABOVE; // Current state used to know what transition coming from [0: start, 1: travel, 2: end]
	  var _initialTop = null; // Initial top of the element on page load
	  var _travel = null; // The calculated offset (travel distance) to be used in calculations
	  var _left = null; // Left position of the element relative to the document
	  var waitingForFrame = false;
	  var scrollTop = window.pageYOffset;
	
	  // States
	  var setState = function setState(state) {
	    if (state > BELOW || state < ABOVE) return;
	    _state = state;
	    switch (state) {
	      case ABOVE:
	        render(setStylesAbove);
	        break;
	      case OVER:
	        !options.parallax ? render(setStylesOver) : render(setStylesParallax);
	        break;
	      case BELOW:
	        render(setStylesBelow);
	        break;
	    }
	  };
	
	  // Styles
	  var setStylesAbove = function setStylesAbove() {
	    target.style.position = 'relative';
	    target.style.left = '0';
	    target.style.top = '0';
	    target.style.transform = "translate3d(0px, 0px, 0px)";
	  };
	
	  var setStylesOver = function setStylesOver() {
	    target.style.position = 'fixed';
	    target.style.left = _left + 'px';
	    target.style.transform = "translate3d(0px, 0px, 0px)";
	    target.style.zIndex = '100';
	    target.style.top = 0;
	  };
	
	  var setStylesBelow = function setStylesBelow() {
	    target.style.position = 'absolute';
	    target.style.top = _travel + 'px';
	    target.style.left = '50%';
	    target.style.transform = "translate3d(-50%, 0px, 0px)";
	    target.style.zIndex = '100';
	  };
	
	  var setStylesParallax = function setStylesParallax() {
	    target.style.position = 'absolute';
	    target.style.transform = 'translate3d(0px, ' + getParallax() + 'px, 0px)';
	    target.style.left = _left + 'px';
	  };
	
	  var setWrapperStyle = function setWrapperStyle(ad) {
	    target.parentElement.style.height = target.offsetHeight + 'px';
	    target.parentElement.style.position = 'relative';
	  };
	
	  var updateVariables = function updateVariables() {
	    _initialTop = getInitialTop();
	    _travel = calcTravel();
	    _left = getLeft();
	  };
	
	  var getLeft = function getLeft() {
	    return Math.round(target.getBoundingClientRect().left);
	  };
	
	  var getInitialTop = function getInitialTop() {
	    return Math.round(target.getBoundingClientRect().top + window.pageYOffset);
	  };
	
	  var calcTravel = function calcTravel() {
	    if (options.offset.from[0] && options.offset.to[0]) {
	      var fromElement = document.querySelector(options.offset.from[0]);
	      var toElement = document.querySelector(options.offset.to[0]);
	      var from = fromElement.offsetTop;
	      var to = toElement.offsetTop;
	
	      if (options.offset.from[1] === 'bottom') {
	        from += fromElement.offsetHeight;
	      }
	      if (options.offset.to[1] === 'bottom') {
	        to += toElement.offsetHeight;
	      }
	      if (options.offsetType === 'include') {
	        to -= target.offsetHeight;
	      }
	      if (options.parallax) {
	        to += target.offsetHeight;
	      }
	
	      return to - from;
	    }
	  };
	
	  var triggerResize = function triggerResize() {
	    setStylesAbove();
	    updateVariables();
	    update(window.pageYOffset);
	  };
	
	  var getParallax = function getParallax() {
	    return Math.round(scrollTop - element.clientHeight / _travel * scrollTop);
	  };
	
	  var render = function render(setPosition) {
	    if (!waitingForFrame) {
	      waitingForFrame = requestAnimationFrame(function () {
	        setPosition();
	        waitingForFrame = false;
	      });
	    }
	  };
	
	  var update = function update(_scrollTop) {
	    scrollTop = _scrollTop;
	    switch (true) {
	      case _initialTop > scrollTop:
	        setState(ABOVE);
	        break;
	      case scrollTop >= _initialTop && scrollTop <= _initialTop + _travel:
	        setState(OVER);
	        break;
	      case _initialTop + _travel < scrollTop:
	        setState(BELOW);
	        break;
	    }
	  };
	
	  var init = function () {
	    setWrapperStyle();
	    updateVariables();
	  }();
	
	  return { update: update, triggerResize: triggerResize };
	};
	
	var stickyAdvert = function stickyAdvert() {
	  return _extends({}, StickyStuff);
	};
	
	module.exports = stickyAdvert;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*** IMPORTS FROM imports-loader ***/
	var define = false;
	
	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/* Copyright (c) 2016 comScore, Inc.
	 * All rights reserved.
	 * By using this software, you are agreeing to be bound by the
	 * terms of these policies: http://www.comscore.com/About_comScore/Privacy_Policy
	 */
	!function (a, b) {
	  "use strict";
	  "function" == typeof define && define.amd ? (b(a.ns_ = a.ns_ || {}), define([], function () {
	    return a.ns_;
	  })) : "object" == ( false ? "undefined" : _typeof(module)) && module.exports ? module.exports = b({}) : b(a.ns_ = a.ns_ || {});
	}(undefined, function (a) {
	  "use strict";
	  a.ns_ = a;var b = b || {};b.indexOf = function (a, b) {
	    var c = -1;return this.forEach(b, function (b, d) {
	      b == a && (c = d);
	    }), c;
	  }, b.forEach = function (a, b, c) {
	    try {
	      if ("function" == typeof b) if (c = "undefined" != typeof c ? c : null, "number" != typeof a.length || "undefined" == typeof a[0]) {
	        var d = "undefined" != typeof a.__proto__;for (var e in a) {
	          a.hasOwnProperty(e) && (!d || d && "undefined" == typeof a.__proto__[e]) && "function" != typeof a[e] && b.call(c, a[e], e);
	        }
	      } else for (var f = 0, g = a.length; f < g; f++) {
	        b.call(c, a[f], f);
	      }
	    } catch (h) {}
	  };var b = b || {};b.parseBoolean = function (a, b) {
	    return b = b || !1, a ? "0" != a : b;
	  }, b.parseInteger = function (a, b) {
	    return null == a || isNaN(a) ? b || 0 : parseInt(a);
	  }, b.parseLong = function (a, b) {
	    var c = Number(a);return null == a || isNaN(c) ? b || 0 : c;
	  }, b.toString = function (a) {
	    if ("undefined" == typeof a) return "undefined";if ("string" == typeof a) return a;if (a instanceof Array) return a.join(",");var b = "";for (var c in a) {
	      a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
	    }return b || a.toString();
	  };var b = b || {};b.filter = function (a, b) {
	    var c = {};for (var d in b) {
	      b.hasOwnProperty(d) && a(b[d]) && (c[d] = b[d]);
	    }return c;
	  }, b.extend = function (a) {
	    var b,
	        c = arguments.length;a = a || {};for (var d = 1; d < c; d++) {
	      if (b = arguments[d]) for (var e in b) {
	        b.hasOwnProperty(e) && (a[e] = b[e]);
	      }
	    }return a;
	  };var b = b || {};b.cloneObject = function (a) {
	    if (null == a || "object" != (typeof a === "undefined" ? "undefined" : _typeof(a))) return a;var b = function () {
	      function a() {}function b(b) {
	        return "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) ? (a.prototype = b, new a()) : b;
	      }function c(a) {
	        for (var b in a) {
	          a.hasOwnProperty(b) && (this[b] = a[b]);
	        }
	      }function d() {
	        this.copiedObjects = [];var a = this;this.recursiveDeepCopy = function (b) {
	          return a.deepCopy(b);
	        }, this.depth = 0;
	      }function e(a, b) {
	        var c = new d();return b && (c.maxDepth = b), c.deepCopy(a);
	      }function f(a) {
	        return "undefined" != typeof window && window && window.Node ? a instanceof Node : "undefined" != typeof document && a === document || "number" == typeof a.nodeType && a.attributes && a.childNodes && a.cloneNode;
	      }var g = [];return c.prototype = { constructor: c, canCopy: function canCopy() {
	          return !1;
	        }, create: function create(a) {}, populate: function populate(a, b, c) {} }, d.prototype = { constructor: d, maxDepth: 256, cacheResult: function cacheResult(a, b) {
	          this.copiedObjects.push([a, b]);
	        }, getCachedResult: function getCachedResult(a) {
	          for (var b = this.copiedObjects, c = b.length, d = 0; d < c; d++) {
	            if (b[d][0] === a) return b[d][1];
	          }
	        }, deepCopy: function deepCopy(a) {
	          if (null === a) return null;if ("object" != (typeof a === "undefined" ? "undefined" : _typeof(a))) return a;var b = this.getCachedResult(a);if (b) return b;for (var c = 0; c < g.length; c++) {
	            var d = g[c];if (d.canCopy(a)) return this.applyDeepCopier(d, a);
	          }throw new Error("Unable to clone the following object " + a);
	        }, applyDeepCopier: function applyDeepCopier(a, b) {
	          var c = a.create(b);if (this.cacheResult(b, c), this.depth++, this.depth > this.maxDepth) throw new Error("Maximum recursion depth exceeded.");return a.populate(this.recursiveDeepCopy, b, c), this.depth--, c;
	        } }, e.DeepCopier = c, e.deepCopiers = g, e.register = function (a) {
	        a instanceof c || (a = new c(a)), g.unshift(a);
	      }, e.register({ canCopy: function canCopy() {
	          return !0;
	        }, create: function create(a) {
	          return a instanceof a.constructor ? b(a.constructor.prototype) : {};
	        }, populate: function populate(a, b, c) {
	          for (var d in b) {
	            b.hasOwnProperty(d) && (c[d] = a(b[d]));
	          }return c;
	        } }), e.register({ canCopy: function canCopy(a) {
	          return a instanceof Array;
	        }, create: function create(a) {
	          return new a.constructor();
	        }, populate: function populate(a, b, c) {
	          for (var d = 0; d < b.length; d++) {
	            c.push(a(b[d]));
	          }return c;
	        } }), e.register({ canCopy: function canCopy(a) {
	          return a instanceof Date;
	        }, create: function create(a) {
	          return new Date(a);
	        } }), e.register({ canCopy: function canCopy(a) {
	          return f(a);
	        }, create: function create(a) {
	          return "undefined" != typeof document && a === document ? document : a.cloneNode(!1);
	        }, populate: function populate(a, b, c) {
	          if ("undefined" != typeof document && b === document) return document;if (b.childNodes && b.childNodes.length) for (var d = 0; d < b.childNodes.length; d++) {
	            var e = a(b.childNodes[d]);c.appendChild(e);
	          }
	        } }), { deepCopy: e };
	    }();return b.deepCopy(a);
	  };var b = b || {};b.getNamespace = function () {
	    return a.ns_ || a;
	  }, b.uid = function () {
	    var a = 1;return function () {
	      return +new Date() + "_" + a++;
	    };
	  }(), b.isEmpty = function (a) {
	    return void 0 === a || null === a || "" === a || a instanceof Array && 0 === a.length;
	  }, b.isNotEmpty = function (a) {
	    return !this.isEmpty(a);
	  }, b.safeGet = function (a, b) {
	    return b = this.exists(b) ? b : "", this.exists(a) ? a : b;
	  }, b.isTrue = function (a) {
	    return "undefined" != typeof a && ("string" == typeof a ? (a = a.toLowerCase(), "true" === a || "1" === a || "on" === a) : !!a);
	  }, b.regionMatches = function (a, b, c, d, e) {
	    if (b < 0 || d < 0 || b + e > a.length || d + e > c.length) return !1;for (; --e >= 0;) {
	      var f = a.charAt(b++),
	          g = c.charAt(d++);if (f != g) return !1;
	    }return !0;
	  }, b.exists = function (a) {
	    return "undefined" != typeof a && null != a;
	  }, !function () {
	    var a = [],
	        c = !1,
	        d = !0,
	        e = 1e3;b.onSystemClockJump = function (b, f) {
	      a.push(b), c || (c = !0, e = f || e, d = +new Date(), setInterval(function () {
	        var b = d + e,
	            c = +new Date();d = c;var f = c - b;if (Math.abs(f) > e) for (var g = 0; g < a.length; ++g) {
	          a[g](f > 0);
	        }
	      }, e));
	    };
	  }();var b = b || {};b.hasPageVisibilityAPISupport = function () {
	    if ("undefined" == typeof document) return !1;var a = !1;return "undefined" != typeof document.hidden ? a = !0 : "undefined" != typeof document.mozHidden ? a = !0 : "undefined" != typeof document.msHidden ? a = !0 : "undefined" != typeof document.webkitHidden && (a = !0), function () {
	      return a;
	    };
	  }(), b.getPageVisibilityAPI = function () {
	    if ("undefined" == typeof document) return null;var a, b, c;"undefined" != typeof document.hidden ? (a = "hidden", b = "visibilitychange", c = "visibilityState") : "undefined" != typeof document.mozHidden ? (a = "mozHidden", b = "mozvisibilitychange", c = "mozVisibilityState") : "undefined" != typeof document.msHidden ? (a = "msHidden", b = "msvisibilitychange", c = "msVisibilityState") : "undefined" != typeof document.webkitHidden && (a = "webkitHidden", b = "webkitvisibilitychange", c = "webkitVisibilityState");var d = { hidden: a, visibilityChange: b, state: c };return function () {
	      return d;
	    };
	  }(), b.isTabInBackground = function () {
	    if ("undefined" == typeof document) return null;var a = b.getPageVisibilityAPI();return function () {
	      return document[a.hidden];
	    };
	  }(), b.getBrowserName = function () {
	    if (!navigator) return "";var a,
	        b,
	        c = navigator.userAgent || "",
	        d = navigator.appName || "";return (b = c.indexOf("Opera")) != -1 || (b = c.indexOf("OPR/")) != -1 ? d = "Opera" : (b = c.indexOf("Android")) != -1 ? d = "Android" : (b = c.indexOf("Chrome")) != -1 ? d = "Chrome" : (b = c.indexOf("Safari")) != -1 ? d = "Safari" : (b = c.indexOf("Firefox")) != -1 ? d = "Firefox" : (b = c.indexOf("IEMobile")) != -1 ? d = "Internet Explorer Mobile" : "Microsoft Internet Explorer" == d || "Netscape" == d ? d = "Internet Explorer" : (a = c.lastIndexOf(" ") + 1) < (b = c.lastIndexOf("/")) ? (d = c.substring(a, b), d.toLowerCase() == d.toUpperCase() && (d = navigator.appName)) : d = "unknown", d;
	  }, b.getBrowserFullVersion = function () {
	    if (!navigator) return "";var a,
	        b,
	        c,
	        d,
	        e = navigator.userAgent || "",
	        f = navigator.appName || "",
	        g = navigator.appVersion ? "" + parseFloat(navigator.appVersion) : "";return (b = e.indexOf("Opera")) != -1 ? (g = e.substring(b + 6), (b = e.indexOf("Version")) != -1 && (g = e.substring(b + 8))) : (b = e.indexOf("OPR/")) != -1 ? g = e.substring(b + 4) : (b = e.indexOf("Android")) != -1 ? g = e.substring(b + 11) : (b = e.indexOf("Chrome")) != -1 ? g = e.substring(b + 7) : (b = e.indexOf("Safari")) != -1 ? (g = e.substring(b + 7), (b = e.indexOf("Version")) != -1 && (g = e.substring(b + 8))) : (b = e.indexOf("Firefox")) != -1 ? g = e.substring(b + 8) : "Microsoft Internet Explorer" == f ? (d = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"), null != d.exec(e) && (g = parseFloat(RegExp.$1))) : "Netscape" == f ? (d = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), null != d.exec(e) && (g = parseFloat(RegExp.$1))) : g = e.lastIndexOf(" ") + 1 < (b = e.lastIndexOf("/")) ? e.substring(b + 1) : "unknown", g = g.toString(), (c = g.indexOf(";")) != -1 && (g = g.substring(0, c)), (c = g.indexOf(" ")) != -1 && (g = g.substring(0, c)), (c = g.indexOf(")")) != -1 && (g = g.substring(0, c)), a = parseInt("" + g, 10), isNaN(a) && (g = "" + parseFloat(navigator.appVersion)), g;
	  }, b.browserAcceptsLargeURLs = function () {
	    return "undefined" == typeof window || (null !== window.ActiveXObject, !0);
	  }, b.isBrowser = function () {
	    return "undefined" != typeof window && "undefined" != typeof document;
	  }, b.isWebSecure = function () {
	    return "undefined" != typeof document && null != document && "s" === document.location.href.charAt(4);
	  };var c = function () {
	    var a = 1e4;return function (b, c) {
	      function d(a) {
	        a = a || [];var c = [h, +new Date()];return b && c.push(b), a = Array.prototype.slice.call(a), c = c.concat(a);
	      }function e(a) {
	        var b, d, e;if ("boolean" == typeof c || !c) return !!c;if (e = a.join(" "), c instanceof Array && c.length > 0) {
	          for (b = 0; b < c.length; ++b) {
	            if (d = c[b], d instanceof RegExp && d.test(e)) return !0;
	          }return !1;
	        }if ("object" == (typeof c === "undefined" ? "undefined" : _typeof(c))) {
	          var f = !1;if (c.hide instanceof Array) for (b = 0; b < c.hide.length; ++b) {
	            if (d = c.hide[b], d instanceof RegExp && d.test(e)) {
	              f = !0;break;
	            }
	          }if (c.show instanceof Array) for (b = 0; b < c.show.length; ++b) {
	            if (d = c.show[b], d instanceof RegExp && d.test(e)) return !0;
	          }return !f && !c.show;
	        }return !0;
	      }function f(b) {
	        var d = i.length;(d > a || c && c.max && d > c.max) && (i = i.slice(-Math.floor(c.max / 2)), i.push("Previous logs: " + d)), i.push(b);
	      }var g = this,
	          h = "comScore",
	          i = [];g.log = function () {
	        var a = d(arguments);f(a), "undefined" != typeof console && "function" == typeof console.log && e(a) && console.log.apply(console, a);
	      }, g.warn = function () {
	        var a = d(arguments);f(a), "undefined" != typeof console && "function" == typeof console.warn && e(a) && console.warn.apply(console, a);
	      }, g.error = function () {
	        var a = d(arguments);f(a), "undefined" != typeof console && "function" == typeof console.error && e(a) && console.error.apply(console, a);
	      }, g.apiCall = function (a) {
	        for (var b = ["API call to:", a], c = 1; c < arguments.length; ++c) {
	          b.push("arg" + c + ":", arguments[c]);
	        }this.log.apply(this, b);
	      }, g.infoLog = function () {
	        var a = ["Trace log:"];a.push.apply(a, Array.prototype.slice.call(arguments)), this.log.apply(this, a);
	      }, g.deprecation = function (a, b) {
	        var c = ["Deprecated API:", a, "is deprecated and will be eventually removed."];b && c.push("Use", b, "instead."), this.warn.apply(this, c);
	      }, g.getLogHistory = function () {
	        return i;
	      };
	    };
	  }();return a.StreamingAnalytics = a.StreamingAnalytics || function () {
	    var a = function () {
	      var a = "cs_";return function () {
	        var c = "undefined" != typeof localStorage ? localStorage : null;b.extend(this, { get: function get(b) {
	            return c && c.getItem(a + b);
	          }, set: function set(b, d) {
	            c && c.setItem(a + b, d);
	          }, has: function has(b) {
	            return c && c.getItem(a + b);
	          }, remove: function remove(b) {
	            c && c.removeItem(a + b);
	          }, clear: function clear() {
	            for (var b = 0; c && b < c.length; ++b) {
	              var d = c.key(b);d.substr(0, a.length) === a && c.removeItem(d);
	            }
	          } });
	      };
	    }(),
	        d = function d(a, b) {
	      if ("undefined" == typeof Image) return void ("function" == typeof setTimeout ? b && setTimeout(b, 0) : b && b());var c = new Image();c.onload = function () {
	        b && b(200), c = null;
	      }, c.onerror = function () {
	        b && b(), c = null;
	      }, c.src = a;
	    },
	        e = function e(a, b, c) {
	      "function" == typeof setTimeout ? c && setTimeout(function () {
	        c(200);
	      }, 0) : c && c(200);
	    },
	        f = function () {
	      return { dir: function dir() {
	          return null;
	        }, append: function append(a, b, c) {}, write: function write(a, b, c) {}, deleteFile: function deleteFile() {
	          return !1;
	        }, read: function read() {
	          return null;
	        } };
	    }(),
	        g = function () {
	      return { PLATFORM: "generic", httpGet: d, httpPost: e, Storage: a, IO: f, onDataFetch: function onDataFetch(a) {
	          a();
	        }, getCrossPublisherId: function getCrossPublisherId() {
	          return null;
	        }, getAppName: function getAppName() {
	          return h.UNKNOWN_VALUE;
	        }, getAppVersion: function getAppVersion() {
	          return h.UNKNOWN_VALUE;
	        }, getVisitorId: function getVisitorId() {
	          return +new Date() + ~~(1e3 * Math.random());
	        }, getVisitorIdSuffix: function getVisitorIdSuffix() {
	          return "72";
	        }, getDeviceModel: function getDeviceModel() {
	          return h.UNKNOWN_VALUE;
	        }, getPlatformVersion: function getPlatformVersion() {
	          return h.UNKNOWN_VALUE;
	        }, getPlatformName: function getPlatformName() {
	          return "js";
	        }, getRuntimeName: function getRuntimeName() {
	          return h.UNKNOWN_VALUE;
	        }, getRuntimeVersion: function getRuntimeVersion() {
	          return h.UNKNOWN_VALUE;
	        }, getDisplayResolution: function getDisplayResolution() {
	          return h.UNKNOWN_RESOLUTION;
	        }, getApplicationResolution: function getApplicationResolution() {
	          return h.UNKNOWN_RESOLUTION;
	        }, getLanguage: function getLanguage() {
	          return h.UNKNOWN_VALUE;
	        }, getPackageName: function getPackageName() {
	          return null;
	        }, isConnectionAvailable: function isConnectionAvailable() {
	          return !0;
	        }, isCompatible: function isCompatible() {
	          return !0;
	        }, autoSelect: function autoSelect() {}, setPlatformAPI: function setPlatformAPI() {}, isCrossPublisherIdChanged: function isCrossPublisherIdChanged() {
	          return !1;
	        }, setTimeout: function (_setTimeout) {
	          function setTimeout(_x, _x2) {
	            return _setTimeout.apply(this, arguments);
	          }
	
	          setTimeout.toString = function () {
	            return _setTimeout.toString();
	          };
	
	          return setTimeout;
	        }(function (a, b) {
	          return setTimeout(a, b);
	        }), clearTimeout: function (_clearTimeout) {
	          function clearTimeout(_x3) {
	            return _clearTimeout.apply(this, arguments);
	          }
	
	          clearTimeout.toString = function () {
	            return _clearTimeout.toString();
	          };
	
	          return clearTimeout;
	        }(function (a) {
	          return clearTimeout(a);
	        }), getDeviceArchitecture: function getDeviceArchitecture() {
	          return h.UNKNOWN_VALUE;
	        }, getConnectionType: function getConnectionType() {
	          return h.UNKNOWN_VALUE;
	        }, getDeviceJailBrokenFlag: function getDeviceJailBrokenFlag() {
	          return h.UNKNOWN_VALUE;
	        }, isConnectionSecure: function isConnectionSecure() {
	          return !1;
	        }, processMeasurementLabels: function processMeasurementLabels() {} };
	    }(),
	        h = { UNKNOWN_VALUE: "unknown", UNKNOWN_RESOLUTION: "0x0" };b.jsonObjectToStringDictionary = function (a) {
	      var b = {};for (var c in a) {
	        var d = a[c];null === d || void 0 === d ? b[c] = d : b[c] = a[c] + "";
	      }return b;
	    }, b.getKeys = function (a, b) {
	      var c,
	          d = [];for (c in a) {
	        b && !b.test(c) || !a.hasOwnProperty(c) || (d[d.length] = c);
	      }return d;
	    }, b.fixEventTime = function (a) {
	      if (a.ns_ts) return parseInt(a.ns_ts);var b = +new Date();return a.ns_ts = b + "", b;
	    }, b.isBrowser = function () {
	      return "undefined" != typeof window && "undefined" != typeof document;
	    }, b.addNewPlaybackInterval = function (a, c, d, e) {
	      var f = {};if (!(d >= c)) return b.cloneObject(a);if (f.start = c, f.end = d, 0 == a.length) return a.push(f), b.cloneObject(a);var g;for (g = 0; g < a.length; g++) {
	        if (f.start >= a[g].start && f.end <= a[g].end) return b.cloneObject(a);
	      }var h,
	          i = !1;for (h = 0; h < a.length; h++) {
	        if (h + 1 === a.length && f.start >= a[h].start || f.start >= a[h].start && f.start < a[h + 1].start) {
	          a.splice(h + 1, 0, f), i = !0;break;
	        }
	      }i || a.splice(0, 0, f);var j = [a[0]];for (g = 1; g < a.length; g++) {
	        j[j.length - 1].end + e < a[g].start ? j.push(a[g]) : j[j.length - 1].end < a[g].end && (j[j.length - 1].end = a[g].end);
	      }return b.cloneObject(j);
	    }, b.stateToString = function (a) {
	      var b = H.InternalStates;for (var c in b) {
	        if (b.hasOwnProperty(c) && b[c] == a) return c;
	      }
	    };var i = function () {
	      var a = ["play", "pause", "pause-on-buffering", "end", "buffer", "buffer-stop", "keep-alive", "hb", "custom", "load", "start", "skstart", "adskip", "cta", "error", "trans", "drmfa", "drmap", "drmde", "bitrt", "playrt", "volume", "window", "audio", "video", "subs", "cdn"];return { PLAY: 0, PAUSE: 1, PAUSE_ON_BUFFERING: 2, END: 3, BUFFER: 4, BUFFER_STOP: 5, KEEPALIVE: 6, HEARTBEAT: 7, CUSTOM: 8, LOAD: 9, ENGAGE: 10, SEEK_START: 11, AD_SKIP: 12, CTA: 13, ERROR: 14, TRANSFER: 15, DRM_FAILED: 16, DRM_APPROVED: 17, DRM_DENIED: 18, BIT_RATE: 19, PLAYBACK_RATE: 20, VOLUME: 21, WINDOW_STATE: 22, AUDIO: 23, VIDEO: 24, SUBS: 25, CDN: 26, toString: function toString(b) {
	          return a[b];
	        } };
	    }(),
	        j = function () {
	      return { IDLE: 0, PLAYBACK_NOT_STARTED: 1, PLAYING: 2, PAUSED: 3, BUFFERING_BEFORE_PLAYBACK: 4, BUFFERING_DURING_PLAYBACK: 5, BUFFERING_DURING_SEEKING: 6, BUFFERING_DURING_PAUSE: 7, SEEKING_BEFORE_PLAYBACK: 8, SEEKING_DURING_PLAYBACK: 9, SEEKING_DURING_BUFFERING: 10, SEEKING_DURING_PAUSE: 11, PAUSED_DURING_BUFFERING: 12 };
	    }(),
	        k = function () {
	      var a = ["c", "s", "r"];return { SINGLE_CLIP: 0, SEGMENTED: 1, REDUCED: 2, toString: function toString(b) {
	          return a[b];
	        } };
	    }(),
	        l = { STREAMINGANALYTICS_VERSION: "6.0.0.161201", MODEL_VERSION: "5.7", LOG_NAMESPACE: "STA", DEFAULT_PLAYERNAME: "js_api", DEFAULT_HEARTBEAT_INTERVAL: [{ playingtime: 6e4, interval: 1e4 }, { playingtime: null, interval: 6e4 }], DEFAULT_KEEP_ALIVE_INTERVAL: 12e5, DEFAULT_PAUSED_ON_BUFFERING_INTERVAL: 500, C1_VALUE: "19", C10_VALUE: "js", NS_AP_C12M_VALUE: "1", NS_NC_VALUE: "1", PAGE_NAME_LABEL: "name", RESTRICTED_URL_LENGTH_LIMIT: 2048, URL_LENGTH_LIMIT: 4096, THROTTLING_DELAY: 500, INTERVAL_MERGE_TOLERANCE: 500, SYSTEM_CLOCK_JUMP_DETECTION_DEFAULT_INTERVAL: 1e3, SYSTEM_CLOCK_JUMP_DETECTION_MINIMUM_INTERVAL: 500, STANDARD_METADATA_LABELS: ["ns_st_st", "ns_st_ci", "ns_st_pr", "ns_st_sn", "ns_st_en", "ns_st_ep", "ns_st_ty", "ns_st_ct", "ns_st_li", "ns_st_ad", "ns_st_bn", "ns_st_tb", "ns_st_an", "ns_st_ta", "ns_st_pu", "c3", "c4", "c6"], LABELS_ORDER: ["c1", "c2", "ca2", "cb2", "cc2", "cd2", "ns_site", "ca_ns_site", "cb_ns_site", "cc_ns_site", "cd_ns_site", "ns_vsite", "ca_ns_vsite", "cb_ns_vsite", "cc_ns_vsite", "cd_ns_vsite", "ns_alias", "ca_ns_alias", "cb_ns_alias", "cc_ns_alias", "cd_ns_alias", "ns_ap_an", "ca_ns_ap_an", "cb_ns_ap_an", "cc_ns_ap_an", "cd_ns_ap_an", "ns_ap_pn", "ns_ap_pv", "c12", "ca12", "cb12", "cc12", "cd12", "ns_ak", "ns_ap_hw", "name", "ns_ap_ni", "ns_ap_ec", "ns_ap_ev", "ns_ap_device", "ns_ap_id", "ns_ap_csf", "ns_ap_bi", "ns_ap_pfm", "ns_ap_pfv", "ns_ap_ver", "ca_ns_ap_ver", "cb_ns_ap_ver", "cc_ns_ap_ver", "cd_ns_ap_ver", "ns_ap_sv", "ns_ap_cv", "ns_ap_smv", "ns_type", "ca_ns_type", "cb_ns_type", "cc_ns_type", "cd_ns_type", "ns_radio", "ns_nc", "cs_partner", "cs_xcid", "cs_impid", "ns_ap_ui", "ca_ns_ap_ui", "cb_ns_ap_ui", "cc_ns_ap_ui", "cd_ns_ap_ui", "ns_ap_gs", "ns_st_sv", "ns_st_pv", "ns_st_smv", "ns_st_it", "ns_st_id", "ns_st_ec", "ns_st_sp", "ns_st_sc", "ns_st_psq", "ns_st_asq", "ns_st_sq", "ns_st_ppc", "ns_st_apc", "ns_st_spc", "ns_st_cn", "ns_st_ev", "ns_st_po", "ns_st_cl", "ns_st_el", "ns_st_sl", "ns_st_pb", "ns_st_hc", "ns_st_mp", "ca_ns_st_mp", "cb_ns_st_mp", "cc_ns_st_mp", "cd_ns_st_mp", "ns_st_mv", "ca_ns_st_mv", "cb_ns_st_mv", "cc_ns_st_mv", "cd_ns_st_mv", "ns_st_pn", "ns_st_tp", "ns_st_ad", "ns_st_li", "ns_st_ci", "ns_st_si", "ns_st_pt", "ns_st_dpt", "ns_st_ipt", "ns_st_et", "ns_st_det", "ns_st_upc", "ns_st_dupc", "ns_st_iupc", "ns_st_upa", "ns_st_dupa", "ns_st_iupa", "ns_st_lpc", "ns_st_dlpc", "ns_st_lpa", "ns_st_dlpa", "ns_st_pa", "ns_st_ie", "ns_ap_jb", "ns_ap_et", "ns_ap_res", "ns_ap_sd", "ns_ap_po", "ns_ap_ot", "ns_ap_c12m", "cs_c12u", "ca_cs_c12u", "cb_cs_c12u", "cc_cs_c12u", "cd_cs_c12u", "ns_ap_install", "ns_ap_updated", "ns_ap_lastrun", "ns_ap_cs", "ns_ap_runs", "ns_ap_usage", "ns_ap_fg", "ns_ap_ft", "ns_ap_dft", "ns_ap_bt", "ns_ap_dbt", "ns_ap_dit", "ns_ap_as", "ns_ap_das", "ns_ap_it", "ns_ap_uc", "ns_ap_aus", "ns_ap_daus", "ns_ap_us", "ns_ap_dus", "ns_ap_ut", "ns_ap_oc", "ns_ap_uxc", "ns_ap_uxs", "ns_ap_lang", "ns_ap_ar", "ns_ap_miss", "ns_ts", "ns_ap_cfg", "ns_st_ca", "ns_st_cp", "ns_st_er", "ca_ns_st_er", "cb_ns_st_er", "cc_ns_st_er", "cd_ns_st_er", "ns_st_pe", "ns_st_ui", "ca_ns_st_ui", "cb_ns_st_ui", "cc_ns_st_ui", "cd_ns_st_ui", "ns_st_bc", "ns_st_dbc", "ns_st_bt", "ns_st_dbt", "ns_st_bp", "ns_st_lt", "ns_st_skc", "ns_st_dskc", "ns_st_ska", "ns_st_dska", "ns_st_skd", "ns_st_skt", "ns_st_dskt", "ns_st_pc", "ns_st_dpc", "ns_st_pp", "ns_st_br", "ns_st_pbr", "ns_st_rt", "ns_st_prt", "ns_st_ub", "ns_st_vo", "ns_st_pvo", "ns_st_ws", "ns_st_pws", "ns_st_ki", "ns_st_rp", "ns_st_bn", "ns_st_tb", "ns_st_an", "ns_st_ta", "ns_st_pl", "ns_st_pr", "ns_st_sn", "ns_st_en", "ns_st_ep", "ns_st_sr", "ns_st_ty", "ns_st_ct", "ns_st_cs", "ns_st_ge", "ns_st_st", "ns_st_stc", "ns_st_ce", "ns_st_ia", "ns_st_dt", "ns_st_ddt", "ns_st_tdt", "ns_st_tm", "ns_st_dtm", "ns_st_ttm", "ns_st_de", "ns_st_pu", "ns_st_ti", "ns_st_cu", "ns_st_fee", "ns_st_ft", "ns_st_at", "ns_st_pat", "ns_st_vt", "ns_st_pvt", "ns_st_tt", "ns_st_ptt", "ns_st_cdn", "ns_st_pcdn", "ns_st_ami", "ns_st_amt", "ns_st_ams", "ns_ap_i1", "ns_ap_i2", "ns_ap_i3", "ns_ap_i4", "ns_ap_i5", "ns_ap_i6", "ns_ap_referrer", "ns_clid", "ns_campaign", "ns_source", "ns_mchannel", "ns_linkname", "ns_fee", "gclid", "utm_campaign", "utm_source", "utm_medium", "utm_term", "utm_content", "ns_ecommerce", "ns_ec_sv", "ns_client_id", "ns_order_id", "ns_ec_cur", "ns_orderline_id", "ns_orderlines", "ns_prod_id", "ns_qty", "ns_prod_price", "ns_prod_grp", "ns_brand", "ns_shop", "ns_category", "category", "ns_c", "ns_search_term", "ns_search_result", "ns_m_exp", "ns_m_chs", "c3", "ca3", "cb3", "cc3", "cd3", "c4", "ca4", "cb4", "cc4", "cd4", "c5", "ca5", "cb5", "cc5", "cd5", "c6", "ca6", "cb6", "cc6", "cd6", "c10", "c11", "c13", "c14", "c15", "c16", "c7", "c8", "c9", "ns_ap_er", "ns_st_amc"] },
	        m = function () {
	      function a() {
	        function a() {
	          f = {}, f.ns_st_cl = "0", f.ns_st_pn = "1", f.ns_st_tp = "0", f.ns_st_cn = "1", f.ns_st_skd = "0", f.ns_st_ci = "0", f.c3 = "*null", f.c4 = "*null", f.c6 = "*null", f.ns_st_st = "*null", f.ns_st_pu = "*null", f.ns_st_pr = "*null", f.ns_st_ep = "*null", f.ns_st_sn = "*null", f.ns_st_en = "*null", f.ns_st_ct = "*null", g = {}, e = !1, d = !1, c = h.UNKNOWN_VALUE, i = !0, j = 0, k = NaN, p = 0, n = 0, m = NaN, q = 0, r = NaN, t = 0, s = 0, o = 0, w = NaN, u = [], v = [], x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = NaN, F = 0, G = 0, H = 0, I = !1, J = NaN, N = !1, M = 0, Q = 0, K = 0, L = 0, O = 0, P = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, $ = 0, R = !1;
	        }var c,
	            d,
	            e,
	            f,
	            g,
	            i,
	            j,
	            k,
	            m,
	            n,
	            o,
	            p,
	            q,
	            r,
	            s,
	            t,
	            u,
	            v,
	            w,
	            x,
	            y,
	            z,
	            A,
	            B,
	            C,
	            D,
	            E,
	            F,
	            G,
	            H,
	            I,
	            J,
	            K,
	            L,
	            M,
	            N,
	            O,
	            P,
	            Q,
	            R,
	            S,
	            T,
	            U,
	            V,
	            W,
	            X,
	            Y,
	            Z,
	            $,
	            _ = this,
	            aa = l.INTERVAL_MERGE_TOLERANCE;b.extend(this, { getHash: function getHash() {
	            return c;
	          }, setHash: function setHash(a) {
	            c = a;
	          }, setPlaybackIntervalMergeTolerance: function setPlaybackIntervalMergeTolerance(a) {
	            aa = a;
	          }, getPlaybackIntervalMergeTolerance: function getPlaybackIntervalMergeTolerance() {
	            return aa;
	          }, setInternalLabel: function setInternalLabel(a, b) {
	            f[a] = b;
	          }, getInternalLabel: function getInternalLabel(a) {
	            return f[a];
	          }, hasInternalLabel: function hasInternalLabel(a) {
	            return null != f[a];
	          }, setLabels: function setLabels(a) {
	            a && b.extend(g, a);
	          }, getLabels: function getLabels() {
	            return g;
	          }, setLabel: function setLabel(a, b) {
	            g[a] = b;
	          }, getLabel: function getLabel(a) {
	            return g[a];
	          }, hasLabel: function hasLabel(a) {
	            return a in g;
	          }, getClipNumber: function getClipNumber() {
	            return parseInt(_.getInternalLabel("ns_st_cn"));
	          }, setClipNumber: function setClipNumber(a) {
	            _.setInternalLabel("ns_st_cn", a + "");
	          }, getPartNumber: function getPartNumber() {
	            return _.hasLabel("ns_st_pn") ? parseInt(_.getLabel("ns_st_pn")) : parseInt(_.getInternalLabel("ns_st_pn"));
	          }, createLabels: function createLabels(a, c) {
	            var d = a || {},
	                h = b.isEmpty(d.ns_st_pt) ? _.getPlaybackTime() : parseInt(d.ns_st_pt);d.ns_st_pt = h + (isNaN(k) ? 0 : c - k) + "", d.ns_st_dpt = h + (isNaN(k) ? 0 : c - k) - n + "", d.ns_st_ipt = h + (isNaN(k) ? 0 : c - k) - o + "";var i = b.isEmpty(d.ns_st_et) ? _.getElapsedTime() : parseInt(d.ns_st_et);d.ns_st_et = i + (isNaN(r) ? 0 : c - r) + "", d.ns_st_det = i + (isNaN(r) ? 0 : c - r) - s + "";var j = b.isEmpty(d.ns_st_bt) ? _.getBufferingTime() : parseInt(d.ns_st_bt);d.ns_st_bt = j + "", d.ns_st_dbt = j + (isNaN(E) ? 0 : c - E) - F + "";for (var l, m = parseInt(d.ns_st_po), p = b.addNewPlaybackInterval(b.cloneObject(_.getSegmentPlaybackIntervals()), w, m, aa), q = b.addNewPlaybackInterval(b.cloneObject(_.getAssetPlaybackIntervals()), w, m, aa), t = 0, u = 0, v = 0; v < p.length; v++) {
	              l = Math.abs(p[v].end - p[v].start), t += l, l > u && (u = l);
	            }var D = 0,
	                G = 0;for (v = 0, l; v < q.length; v++) {
	              l = Math.abs(q[v].end - q[v].start), D += l, l > G && (G = l);
	            }d.ns_st_upc = t + "", d.ns_st_dupc = t - x + "", d.ns_st_iupc = t - y + "", t > y ? d.ns_st_iupc = t - y + "" : d.ns_st_iupc = "0", d.ns_st_lpc = u + "", d.ns_st_dlpc = u - z + "", d.ns_st_upa = D + "", d.ns_st_dupa = D - A + "", D > B ? d.ns_st_iupa = D - B + "" : d.ns_st_iupa = "0", d.ns_st_lpa = G + "", d.ns_st_dlpa = G - C + "";var I = b.isEmpty(d.ns_st_pc) ? _.getPauses() : parseInt(d.ns_st_pc);d.ns_st_pc = I + "", d.ns_st_dpc = I - T + "";var J = b.isEmpty(d.ns_st_skc) ? _.getSeeks() : parseInt(d.ns_st_skc);d.ns_st_skc = J + "", d.ns_st_dskc = J - V + "";var K = b.isEmpty(d.ns_st_bc) ? _.getBuffers() : parseInt(d.ns_st_bc);d.ns_st_bc = K + "", d.ns_st_dbc = K - H + "";var M = b.isEmpty(d.ns_st_skt) ? _.getSeekingTime() : parseInt(d.ns_st_skt);d.ns_st_skt = M + "", d.ns_st_dskt = M - L + "";var N = b.isEmpty(d.ns_st_ska) ? _.getSeekingAmount() : parseInt(d.ns_st_ska);return d.ns_st_ska = N + "", d.ns_st_dska = N - P + "", e && (d.ns_st_spc = W + "", d.ns_st_apc = X + "", d.ns_st_sq = Y + "", d.ns_st_asq = Z + ""), e || 0 != $ ? d.ns_st_sc = $ + "" : d.ns_st_sc = "1", b.extend(d, f, g), d;
	          }, updateDeltaLabels: function updateDeltaLabels(a) {
	            n = parseInt(a.ns_st_pt), s = parseInt(a.ns_st_et), F = parseInt(a.ns_st_bt), x = parseInt(a.ns_st_upc), z = parseInt(a.ns_st_lpc), A = parseInt(a.ns_st_upa), C = parseInt(a.ns_st_lpa), T = parseInt(a.ns_st_pc), V = parseInt(a.ns_st_skc), H = parseInt(a.ns_st_bc), L = parseInt(a.ns_st_skt), P = parseInt(a.ns_st_ska), _.setSeekingDirection(0);
	          }, updateIndependentLabels: function updateIndependentLabels(a) {
	            o = parseInt(a.ns_st_pt), y = parseInt(a.ns_st_upc), B = parseInt(a.ns_st_upa);
	          }, getVideoTrack: function getVideoTrack() {
	            return _.getInternalLabel("ns_st_vt");
	          }, setVideoTrack: function setVideoTrack(a) {
	            _.setInternalLabel("ns_st_vt", a + "");
	          }, getAudioTrack: function getAudioTrack() {
	            return _.getInternalLabel("ns_st_at");
	          }, setAudioTrack: function setAudioTrack(a) {
	            _.setInternalLabel("ns_st_at", a + "");
	          }, getSubtitleTrack: function getSubtitleTrack() {
	            return _.getInternalLabel("ns_st_tt");
	          }, setSubtitleTrack: function setSubtitleTrack(a) {
	            _.setInternalLabel("ns_st_tt", a + "");
	          }, getCDN: function getCDN() {
	            return _.getInternalLabel("ns_st_cdn");
	          }, setCDN: function setCDN(a) {
	            _.setInternalLabel("ns_st_cdn", a + "");
	          }, getSegmentPlaybackIntervals: function getSegmentPlaybackIntervals() {
	            return u;
	          }, setAssetPlaybackIntervals: function setAssetPlaybackIntervals(a) {
	            u = a;
	          }, getAssetPlaybackIntervals: function getAssetPlaybackIntervals() {
	            return v;
	          }, incrementPauses: function incrementPauses() {
	            S++;
	          }, incrementSeeks: function incrementSeeks() {
	            U++;
	          }, incrementPlayCounter: function incrementPlayCounter() {
	            Y++;
	          }, getPlayCounter: function getPlayCounter() {
	            return Y;
	          }, getBufferingTime: function getBufferingTime() {
	            return D;
	          }, setBufferingTime: function setBufferingTime(a) {
	            D = a;
	          }, addBufferingTime: function addBufferingTime(a) {
	            if (!isNaN(E)) {
	              var b = _.getBufferingTime();b += a - E, _.setBufferingTime(b), E = NaN;
	            }
	          }, setPlaybackStartPosition: function setPlaybackStartPosition(a) {
	            w = parseInt(a);
	          }, getPlaybackStartPosition: function getPlaybackStartPosition() {
	            return w;
	          }, addInterval: function addInterval(a) {
	            isNaN(w) || isNaN(a) || (u = b.addNewPlaybackInterval(u, w, a, aa), v = b.addNewPlaybackInterval(v, w, a, aa), w = NaN);
	          }, getElapsedTime: function getElapsedTime() {
	            return q;
	          }, setElapsedTime: function setElapsedTime(a) {
	            q = a;
	          }, addElapsedTime: function addElapsedTime(a) {
	            if (!isNaN(r)) {
	              var b = _.getElapsedTime();b += a - r, _.setElapsedTime(b), r = NaN;
	            }
	          }, getElapsedTimestamp: function getElapsedTimestamp() {
	            return r;
	          }, setElapsedTimestamp: function setElapsedTimestamp(a) {
	            r = a;
	          }, addPlaybackTime: function addPlaybackTime(a) {
	            if (!isNaN(k)) {
	              var b = _.getPlaybackTime();b += a - k, _.setPlaybackTime(b), k = NaN;
	            }
	          }, getPlaybackTime: function getPlaybackTime() {
	            return j;
	          }, getExpectedPlaybackPosition: function getExpectedPlaybackPosition(a) {
	            return isNaN(k) ? p : p + (a - k);
	          }, setPlaybackTimeOffset: function setPlaybackTimeOffset(a) {
	            p = a;
	          }, getPlaybackTimeOffset: function getPlaybackTimeOffset() {
	            return p;
	          }, setPlaybackTime: function setPlaybackTime(a) {
	            j = a;
	          }, getPlaybackTimestamp: function getPlaybackTimestamp() {
	            return k;
	          }, setPlaybackTimestamp: function setPlaybackTimestamp(a) {
	            k = a;
	          }, setPreviousPlaybackTime: function setPreviousPlaybackTime(a) {
	            n = a;
	          }, setPreviousPlaybackTimestamp: function setPreviousPlaybackTimestamp(a) {
	            m = a;
	          }, getBufferingTimestamp: function getBufferingTimestamp() {
	            return E;
	          }, setBufferingTimestamp: function setBufferingTimestamp(a) {
	            E = a;
	          }, getPauses: function getPauses() {
	            return S;
	          }, setPauses: function setPauses(a) {
	            S = a;
	          }, getSeeks: function getSeeks() {
	            return U;
	          }, setSeeks: function setSeeks(a) {
	            U = a;
	          }, setSeeking: function setSeeking(a) {
	            I = a;
	          }, isSeeking: function isSeeking() {
	            return I;
	          }, setCollectingSeekingTime: function setCollectingSeekingTime(a) {
	            N = a;
	          }, isCollectingSeekingTime: function isCollectingSeekingTime() {
	            return N;
	          }, setAssetStarted: function setAssetStarted(a) {
	            d = a;
	          }, isAssetStarted: function isAssetStarted() {
	            return d;
	          }, setPlaybackStarted: function setPlaybackStarted(a) {
	            e = a;
	          }, isPlaybackStarted: function isPlaybackStarted() {
	            return e;
	          }, setSeekingTimestamp: function setSeekingTimestamp(a) {
	            J = a;
	          }, getSeekingTimestamp: function getSeekingTimestamp() {
	            return J;
	          }, addSeekingTime: function addSeekingTime(a) {
	            if (!isNaN(J)) {
	              var b = _.getSeekingTime();b += a - J, _.setSeekingTime(b), J = NaN;
	            }
	          }, getSeekingTime: function getSeekingTime() {
	            return K;
	          }, setSeekingTime: function setSeekingTime(a) {
	            K = a;
	          }, setSeekingTimeBeforeEnd: function setSeekingTimeBeforeEnd(a) {
	            Q = a;
	          }, getSeekingTimeBeforeEnd: function getSeekingTimeBeforeEnd() {
	            return Q;
	          }, setSeekStartPosition: function setSeekStartPosition(a) {
	            M = a;
	          }, getSeekStartPosition: function getSeekStartPosition() {
	            return M;
	          }, setSeekingAmount: function setSeekingAmount(a) {
	            O = a;
	          }, getSeekingAmount: function getSeekingAmount() {
	            return O;
	          }, addSeekingAmount: function addSeekingAmount(a) {
	            var b = _.getSeekingAmount();b += Math.abs(a - M), _.setSeekingAmount(b);var c;M == a ? c = 0 : M > a ? c = -1 : M < a && (c = 1), _.setSeekingDirection(c), M = 0;
	          }, getSeekingDirection: function getSeekingDirection() {
	            return parseInt(_.getInternalLabel("ns_st_skd"));
	          }, setSeekingDirection: function setSeekingDirection(a) {
	            _.setInternalLabel("ns_st_skd", a + "");
	          }, resetAssetLifecycleLabels: function resetAssetLifecycleLabels() {
	            j = 0, n = 0, o = 0, D = 0, F = 0, G = 0, H = 0, S = 0, T = 0, Y = 0, v = [], A = 0, B = 0, C = 0, q = 0, s = 0, K = 0, L = 0, O = 0, P = 0, U = 0, V = 0;
	          }, incrementSegmentPlaybackCounter: function incrementSegmentPlaybackCounter() {
	            W++;
	          }, incrementAssetLoadCounter: function incrementAssetLoadCounter() {
	            $++;
	          }, incrementAssetPlaybackCounter: function incrementAssetPlaybackCounter() {
	            X++;
	          }, getPreviousUniquePlaybackInterval: function getPreviousUniquePlaybackInterval() {
	            return x;
	          }, setPreviousUniquePlaybackInterval: function setPreviousUniquePlaybackInterval(a) {
	            x = a;
	          }, getPreviousEventIndependentUniquePlaybackInterval: function getPreviousEventIndependentUniquePlaybackInterval() {
	            return y;
	          }, setPreviousEventIndependentUniquePlaybackInterval: function setPreviousEventIndependentUniquePlaybackInterval(a) {
	            y = a;
	          }, setPreviousLongestPlaybackInterval: function setPreviousLongestPlaybackInterval(a) {
	            z = a;
	          }, getPreviousLongestPlaybackInterval: function getPreviousLongestPlaybackInterval() {
	            return z;
	          }, resetAssetPlaybackIntervals: function resetAssetPlaybackIntervals() {
	            v = [], A = 0, B = 0, C = 0;
	          }, setSegmentPlaybackCounter: function setSegmentPlaybackCounter(a) {
	            W = a;
	          }, setAssetLoadCounter: function setAssetLoadCounter(a) {
	            $ = a;
	          }, setAssetPlaybackCounter: function setAssetPlaybackCounter(a) {
	            X = a;
	          }, setLowestPartNumberPlayed: function setLowestPartNumberPlayed(a) {
	            t = a;
	          }, getSegmentPlaybackCounter: function getSegmentPlaybackCounter() {
	            return W;
	          }, getAssetLoadCounter: function getAssetLoadCounter() {
	            return $;
	          }, getAssetPlaybackCounter: function getAssetPlaybackCounter() {
	            return X;
	          }, getLowestPartNumberPlayed: function getLowestPartNumberPlayed() {
	            return t;
	          }, getBuffers: function getBuffers() {
	            return G;
	          }, incrementBufferCount: function incrementBufferCount() {
	            G++;
	          }, getPreviousBufferingTime: function getPreviousBufferingTime() {
	            return F;
	          }, setPlaySequenceCounter: function setPlaySequenceCounter(a) {
	            Z = a;
	          }, incrementPlaySequenceCounter: function incrementPlaySequenceCounter() {
	            Z++;
	          }, getPlaySequenceCounter: function getPlaySequenceCounter() {
	            return Z;
	          }, isPlaybackSessionLooping: function isPlaybackSessionLooping() {
	            return R;
	          }, setPlaybackSessionLooping: function setPlaybackSessionLooping(a) {
	            R = a;
	          }, enableAutoCalculatePositions: function enableAutoCalculatePositions(a) {
	            i = !!a;
	          }, isAutoCalculatePositionsEnabled: function isAutoCalculatePositionsEnabled() {
	            return i;
	          } }), a();
	      }return a.resetAsset = function (a, b, c) {
	        for (var d = a.getLabels(), e = {}, f = 0; c && f < c.length; ++f) {
	          d.hasOwnProperty(c[f]) && (e[c[f]] = d[c[f]]);
	        }b.setLabels(e), b.setPlaybackIntervalMergeTolerance(a.getPlaybackIntervalMergeTolerance());
	      }, a;
	    }(),
	        n = function () {
	      function a(a) {
	        function c() {
	          d = new m(), h = {}, h.ns_st_id = +new Date() + "", k = {}, e = NaN, f = 0, g = NaN, o = {}, p = 0, n = !1, q = !1, r = 0, t = 0, s = 0, u = 1, v = 0, w = [];
	        }var d,
	            e,
	            f,
	            g,
	            h,
	            k,
	            n,
	            o,
	            p,
	            q,
	            r,
	            s,
	            t,
	            u,
	            v,
	            w,
	            x = this;b.extend(this, { resetAsset: function resetAsset() {
	            var a = d;d = new m(), m.resetAsset(a, d);
	          }, hashExists: function hashExists(a) {
	            return null != o[a];
	          }, storeHash: function storeHash(a) {
	            o[a] = {};
	          }, removeHash: function removeHash(a) {
	            delete o[a];
	          }, storeAssetPlaybackCounters: function storeAssetPlaybackCounters() {
	            for (var a in o) {
	              if (o.hasOwnProperty(a) && o[a].clipNumber === d.getClipNumber()) {
	                b.extend(o[a], { segmentPlaybackCounter: d.getSegmentPlaybackCounter(), assetLoadCounter: d.getAssetLoadCounter(), assetPlaybackCounter: d.getAssetPlaybackCounter(), lowestPartNumberPlayed: d.getLowestPartNumberPlayed(), seeking: d.isSeeking(), seekingTimeBeforeEnd: d.getSeekingTimeBeforeEnd(), seekingStartPosition: d.getSeekStartPosition(), segmentPlaybackIntervals: d.getSegmentPlaybackIntervals(), videoTrack: d.getVideoTrack(), audioTrack: d.getAudioTrack(), subtitleTrack: d.getSubtitleTrack(), cdn: d.getCDN(), playSequenceCounter: d.getPlaySequenceCounter(), previousUniquePlaybackInterval: d.getPreviousUniquePlaybackInterval(), previousEventIndependentUniquePlaybackInterval: d.getPreviousEventIndependentUniquePlaybackInterval(), previousLongestPlaybackInterval: d.getPreviousLongestPlaybackInterval() });break;
	              }
	            }
	          }, getStoredAssetRegisters: function getStoredAssetRegisters(a) {
	            return o[a];
	          }, getClipNumber: function getClipNumber(a) {
	            return o[a].clipNumber;
	          }, getMaxClipNumber: function getMaxClipNumber() {
	            return p;
	          }, storeClipNumber: function storeClipNumber(a, b) {
	            o[a].clipNumber = b, b > p && (p = b);
	          }, setLabels: function setLabels(a) {
	            null != a && b.extend(k, a);
	          }, getLabels: function getLabels() {
	            return k;
	          }, setLabel: function setLabel(a, b) {
	            var c = {};c[a] = b, x.setLabels(c);
	          }, getLabel: function getLabel(a) {
	            return k[a];
	          }, getAsset: function getAsset() {
	            return d;
	          }, addInternalErrorFlag: function addInternalErrorFlag(a) {
	            for (var b = 0; b < w.length; ++b) {
	              if (w[b] == a) return;
	            }w.push(a);
	          }, createLabels: function createLabels(c, e) {
	            var f = c || {},
	                i = b.isEmpty(f.ns_st_pa) ? x.getPlaybackTime() : parseInt(f.ns_st_pa);return f.ns_st_pa = i + (isNaN(g) ? 0 : e - g) + "", f.ns_st_pp = t + "", f.ns_st_sp = u + "", f.ns_st_bp = v + "", q || (f.ns_st_pb = null != f.ns_st_pb ? f.ns_st_pb : "1"), d.isPlaybackStarted() && (f.ns_st_ppc = r + "", f.ns_st_psq = s + ""), w.length > 0 && (f.ns_st_ie = (f.ns_st_ie ? f.ns_st_ie + ";" : "") + w.join(";")), b.extend(f, h, k), a.getPlaybackSession().getAsset().createLabels(f, e), f;
	          }, incrementPlayCounter: function incrementPlayCounter() {
	            u++;
	          }, incrementPauses: function incrementPauses() {
	            t++;
	          }, addPlaybackTime: function addPlaybackTime(a) {
	            if (!isNaN(g)) {
	              var b = x.getPlaybackTime();b += a - g, x.setPlaybackTime(b), g = NaN;
	            }
	          }, addBufferingTime: function addBufferingTime(a) {
	            if (!isNaN(e)) {
	              var b = x.getBufferingTime();b += a - e, x.setBufferingTime(b), e = NaN;
	            }
	          }, getBufferingTime: function getBufferingTime() {
	            return v;
	          }, setBufferingTime: function setBufferingTime(a) {
	            v = a;
	          }, getPlaybackTime: function getPlaybackTime() {
	            return f;
	          }, setBufferingTimestamp: function setBufferingTimestamp(a) {
	            e = a;
	          }, getBufferingTimestamp: function getBufferingTimestamp() {
	            return e;
	          }, setPlaybackTime: function setPlaybackTime(a) {
	            f = a;
	          }, setPlaybackTimestamp: function setPlaybackTimestamp(a) {
	            g = a;
	          }, getPlaybackTimestamp: function getPlaybackTimestamp() {
	            return g;
	          }, getPauses: function getPauses() {
	            return t;
	          }, setPauses: function setPauses(a) {
	            t = a;
	          }, isPlaybackSessionStarted: function isPlaybackSessionStarted() {
	            return n;
	          }, setPlaybackSessionStarted: function setPlaybackSessionStarted(a) {
	            n = a;
	          }, getPlaybackCounter: function getPlaybackCounter() {
	            return r;
	          }, incrementPlaybackCounter: function incrementPlaybackCounter() {
	            r++;
	          }, setFirstEventSent: function setFirstEventSent(a) {
	            q = a;
	          }, setPlaySequenceCounter: function setPlaySequenceCounter(a) {
	            s = a;
	          }, incrementPlaySequenceCounter: function incrementPlaySequenceCounter() {
	            s++;
	          }, getPlaybackSessionID: function getPlaybackSessionID() {
	            return h.ns_st_id;
	          }, setAsset: function setAsset(c, d) {
	            a.getLogging().apiCall("setAsset", c, d), c = b.jsonObjectToStringDictionary(c);var e = a.getStateMachine().getCurrentState();if (e != j.IDLE) {
	              a.getLogging().infoLog("Ending the current Clip. It was in state:", b.stateToString(e));var f = {};a.getStaCore().newEvent(i.END, b.fixEventTime(f), f);
	            }var g = "",
	                h = 0;if (null != c.ns_st_cn) g = c.ns_st_cn;else for (var k = 0; k < l.STANDARD_METADATA_LABELS.length; k++) {
	              c[l.STANDARD_METADATA_LABELS[k]] && (g += l.STANDARD_METADATA_LABELS[k] + ":" + c[l.STANDARD_METADATA_LABELS[k]] + ";");
	            }var m = x,
	                n = m.getAsset();n.isAssetStarted() ? (m.hashExists(n.getHash()) || (m.storeHash(n.getHash()), m.storeClipNumber(n.getHash(), n.getClipNumber())), m.storeAssetPlaybackCounters(), h = m.hashExists(g) ? m.getClipNumber(g) : b.exists(c.ns_st_cn) ? parseInt(c.ns_st_cn) : m.getMaxClipNumber() + 1) : h = m.hashExists(g) ? m.getClipNumber(g) : n.getClipNumber(), m.resetAsset(), n = m.getAsset(), n.setHash(g), n.setClipNumber(h), n.setLabels(c);var o = m.getStoredAssetRegisters(g);o && (n.setAssetStarted(!0), n.setSegmentPlaybackCounter(o.segmentPlaybackCounter), n.setAssetLoadCounter(o.assetLoadCounter), n.setAssetPlaybackCounter(o.assetPlaybackCounter), n.setLowestPartNumberPlayed(o.lowestPartNumberPlayed), n.setSeeking(o.seeking), n.setSeekingTimeBeforeEnd(o.seekingTimeBeforeEnd), n.setSeekStartPosition(o.seekingStartPosition), n.setAssetPlaybackIntervals(o.segmentPlaybackIntervals), o.videoTrack && n.setVideoTrack(o.videoTrack), o.audioTrack && n.setAudioTrack(o.audioTrack), o.subtitleTrack && n.setSubtitleTrack(o.subtitleTrack), o.cdn && n.setCDN(o.cdn), n.setPlaySequenceCounter(o.playSequenceCounter), n.setPreviousUniquePlaybackInterval(o.previousUniquePlaybackInterval), n.setPreviousEventIndependentUniquePlaybackInterval(o.previousEventIndependentUniquePlaybackInterval), n.setPreviousLongestPlaybackInterval(o.previousLongestPlaybackInterval)), n.incrementAssetLoadCounter(), n.isAssetStarted() && d && m.incrementPlayCounter(), d && (m.setPlaySequenceCounter(0), n.setPlaybackSessionLooping(!0)), !b.exists(c.ns_st_tp) && b.exists(c.ns_st_ad) && b.isNotEmpty(c.ns_st_ad) && "0" !== c.ns_st_ad && n.setInternalLabel("ns_st_tp", "1");
	          } }), c();
	      }return a.resetPlaybackSession = function (a, b, c) {
	        for (var d = b.getAsset(), e = b.getLabels(), f = {}, g = 0; c && g < c.length; g++) {
	          e.hasOwnProperty(c[g]) && (f[c[g]] = e[c[g]]);
	        }a.getPlaybackSession().setLabels(f), m.resetAsset(d, a.getPlaybackSession().getAsset(), c);
	      }, a;
	    }(),
	        o = function () {
	      return function (a) {
	        function c() {
	          e = 1;
	        }function d(c) {
	          f = b.extend({}, c);var d = a.getStaCore().getLiveEndpointURL();if (a.getAppCore()) {
	            if (a.getStaCore().isProperlyInitialized()) {
	              var e = a.getStaCore().getExports().et;if ("function" == typeof a.getAppCore().getMeasurementDispatcher) {
	                var g = a.getAppCore().getMeasurementDispatcher();g.send(e.HIDDEN, c, d);
	              } else {
	                var h = a.getStaCore().getExports().am,
	                    i = h.newApplicationMeasurement(a.getAppCore(), e.HIDDEN, c, d);a.getAppCore().getQueue().offer(i);
	              }
	            }
	          } else d && a.getStaCore().getPlatformAPI().httpGet(a.getStaCore().prepareUrl(d, c));
	        }var e,
	            f,
	            g = this,
	            h = [];b.extend(this, { newEvent: function newEvent(a) {
	            for (var b = 0; b < h.length; ++b) {
	              h[b](a.eventLabels);
	            }d(a.eventLabels), a.eventType != i.HEARTBEAT && g.incrementEventCounter();
	          }, addMeasurementListener: function addMeasurementListener(a) {
	            "function" == typeof a && h.push(a);
	          }, removeMeasurementListener: function removeMeasurementListener(a) {
	            for (var b = NaN, c = 0; c < h.length; ++c) {
	              if (h[c] == a) {
	                b = c;break;
	              }
	            }isNaN(b) || h.splice(b, 1);
	          }, getEventCounter: function getEventCounter() {
	            return e;
	          }, incrementEventCounter: function incrementEventCounter() {
	            e++;
	          }, setEventCounter: function setEventCounter(a) {
	            e = a;
	          }, getMeasurementSnapshot: function getMeasurementSnapshot() {
	            return f;
	          } }), c();
	      };
	    }(),
	        p = function () {
	      return function (a) {
	        function c() {
	          g = 0, h = 0;
	        }function d() {
	          h++;var c = {},
	              d = b.fixEventTime(c);c.ns_st_hc = a.getHeartbeat().getCount() + "";var e = a.getStaCore().createLabels(i.HEARTBEAT, c, d);a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), g = 0, j.resume();
	        }function e() {
	          null != f && (a.getStaCore().getPlatformAPI().clearTimeout(f), f = null);
	        }var f,
	            g,
	            h,
	            j = this,
	            k = l.DEFAULT_HEARTBEAT_INTERVAL;b.extend(this, { getCount: function getCount() {
	            return h;
	          }, setIntervals: function setIntervals(a) {
	            k = a;
	          }, getInterval: function getInterval(a) {
	            var b = 0;if (null != k) for (var c = 0; c < k.length; c++) {
	              var d = k[c],
	                  e = d.playingtime;if (!e || a < e) {
	                b = d.interval;break;
	              }
	            }return b;
	          }, getIntervals: function getIntervals() {
	            return k;
	          }, resume: function resume() {
	            e();var b = j.getInterval(a.getPlaybackSession().getAsset().getPlaybackTime() + (+new Date() - a.getPlaybackSession().getAsset().getPlaybackTimestamp()));if (b > 0) {
	              var c = g > 0 ? g : b;f = a.getStaCore().getPlatformAPI().setTimeout(d, c);
	            }g = 0;
	          }, pause: function pause() {
	            e();var b = j.getInterval(a.getPlaybackSession().getAsset().getPlaybackTime() + (+new Date() - a.getPlaybackSession().getAsset().getPlaybackTimestamp()));g = b - (a.getPlaybackSession().getAsset().getPlaybackTime() + (+new Date() - a.getPlaybackSession().getAsset().getPlaybackTimestamp())) % b;
	          } }), c();
	      };
	    }(),
	        q = function () {
	      return function (a) {
	        function c() {}function d() {
	          var c = {},
	              d = b.fixEventTime(c);a.getStaCore().newPseudoEvent(i.KEEPALIVE, d, c), g.start();
	        }function e() {
	          null != f && (a.getStaCore().getPlatformAPI().clearTimeout(f), f = null);
	        }var f,
	            g = this,
	            h = l.DEFAULT_KEEP_ALIVE_INTERVAL;b.extend(g, { start: function start() {
	            e(), f = a.getStaCore().getPlatformAPI().setTimeout(d, h);
	          }, stop: e, setInterval: function setInterval(a) {
	            h = a;
	          }, getInterval: function getInterval() {
	            return h;
	          } }), c();
	      };
	    }(),
	        r = function () {
	      return function (a) {
	        function c() {
	          f = j.IDLE, e = null, d = NaN;
	        }var d,
	            e,
	            f,
	            g = this;b.extend(g, { eventTypeToState: function eventTypeToState(a) {
	            if (f == j.IDLE) {
	              if (a == i.PLAY) return j.PLAYING;if (a == i.SEEK_START) return j.SEEKING_BEFORE_PLAYBACK;if (a == i.BUFFER) return j.BUFFERING_BEFORE_PLAYBACK;
	            } else if (f == j.PLAYBACK_NOT_STARTED) {
	              if (a == i.PLAY) return j.PLAYING;if (a == i.SEEK_START) return j.SEEKING_BEFORE_PLAYBACK;if (a == i.BUFFER) return j.BUFFERING_BEFORE_PLAYBACK;if (a == i.END || a == i.AD_SKIP) return j.IDLE;
	            } else if (f == j.PLAYING) {
	              if (a == i.END || a == i.AD_SKIP) return j.IDLE;if (a == i.BUFFER) return j.BUFFERING_DURING_PLAYBACK;if (a == i.PAUSE) return j.PAUSED;if (a == i.SEEK_START) return j.SEEKING_DURING_PLAYBACK;
	            } else if (f == j.PAUSED) {
	              if (a == i.END || a == i.AD_SKIP) return j.IDLE;if (a == i.BUFFER) return j.BUFFERING_DURING_PAUSE;if (a == i.PLAY) return j.PLAYING;if (a == i.SEEK_START) return j.SEEKING_DURING_PAUSE;
	            } else if (f == j.BUFFERING_BEFORE_PLAYBACK) {
	              if (a == i.END || a == i.AD_SKIP) return j.IDLE;if (a == i.PAUSE || a == i.BUFFER_STOP) return j.PLAYBACK_NOT_STARTED;if (a == i.PLAY) return j.PLAYING;if (a == i.SEEK_START) return j.SEEKING_BEFORE_PLAYBACK;
	            } else if (f == j.BUFFERING_DURING_PLAYBACK) {
	              if (a == i.END || a == i.AD_SKIP) return j.IDLE;if (a == i.PLAY || a == i.BUFFER_STOP) return j.PLAYING;if (a == i.PAUSE_ON_BUFFERING) return j.PAUSED_DURING_BUFFERING;if (a == i.SEEK_START) return j.SEEKING_DURING_BUFFERING;if (a == i.PAUSE) return j.PAUSED;
	            } else if (f == j.BUFFERING_DURING_SEEKING) {
	              if (a == i.END || a == i.AD_SKIP) return j.IDLE;if (a == i.PLAY) return j.PLAYING;if (a == i.BUFFER_STOP) return j.SEEKING_DURING_PLAYBACK;if (a == i.PAUSE) return j.PAUSED;
	            } else if (f == j.BUFFERING_DURING_PAUSE) {
	              if (a == i.END || a == i.AD_SKIP) return j.IDLE;if (a == i.PLAY) return j.PLAYING;if (a == i.SEEK_START) return j.SEEKING_DURING_PAUSE;if (a == i.BUFFER_STOP || a == i.PAUSE) return j.PAUSED;
	            } else if (f == j.SEEKING_BEFORE_PLAYBACK) {
	              if (a == i.END || a == i.AD_SKIP) return j.IDLE;if (a == i.PAUSE) return j.PLAYBACK_NOT_STARTED;if (a == i.PLAY) return j.PLAYING;if (a == i.BUFFER) return j.BUFFERING_BEFORE_PLAYBACK;
	            } else if (f == j.SEEKING_DURING_PLAYBACK) {
	              if (a == i.END || a == i.AD_SKIP) return j.IDLE;if (a == i.PLAY) return j.PLAYING;if (a == i.PAUSE) return j.PAUSED;if (a == i.BUFFER) return j.BUFFERING_DURING_SEEKING;
	            } else if (f == j.SEEKING_DURING_BUFFERING) {
	              if (a == i.END || a == i.AD_SKIP) return j.IDLE;if (a == i.PLAY) return j.PLAYING;if (a == i.PAUSE || a == i.BUFFER_STOP) return j.PAUSED;if (a == i.BUFFER) return j.BUFFERING_DURING_SEEKING;
	            } else if (f == j.SEEKING_DURING_PAUSE) {
	              if (a == i.END || a == i.AD_SKIP) return j.IDLE;if (a == i.PLAY) return j.PLAYING;if (a == i.PAUSE || a == i.BUFFER_STOP) return j.PAUSED;if (a == i.BUFFER) return j.BUFFERING_DURING_PAUSE;
	            } else if (f == j.PAUSED_DURING_BUFFERING) {
	              if (a == i.END || a == i.AD_SKIP) return j.IDLE;if (a == i.SEEK_START) return j.SEEKING_DURING_BUFFERING;if (a == i.PAUSE) return j.PAUSED;if (a == i.PLAY || a == i.BUFFER_STOP) return j.PLAYING;
	            }return null;
	          }, getCurrentState: function getCurrentState() {
	            return f;
	          }, newEvent: function newEvent(a, b) {
	            var c = g.eventTypeToState(a);f != c && (e = f, f = c, d = b);
	          }, getPreviousState: function getPreviousState() {
	            return e;
	          }, getLastStateChangeTimestamp: function getLastStateChangeTimestamp() {
	            return d;
	          } }), c();
	      };
	    }(),
	        s = function () {
	      return function (a) {
	        var c = this;b.extend(c, { onSeekStartWhenPausedOrBufferingDuringPause: function onSeekStartWhenPausedOrBufferingDuringPause(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().getAsset().isSeeking() ? a.getPlaybackSession().getAsset().isCollectingSeekingTime() || (a.getPlaybackSession().getAsset().setSeekingTimestamp(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0)) : a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().isSeeking() || (a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b);
	          }, onBufferWhenSeekingOrPaused: function onBufferWhenSeekingOrPaused(b, c) {
	            a.getPlaybackSession().setBufferingTimestamp(b), a.getPlaybackSession().getAsset().setBufferingTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b);
	          }, onPlayWhenSeekingDuringBufferingOrSeekingDuringPause: function onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().start();var e = a.getStaCore().createLabels(i.PLAY, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          }, onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause: function onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b, c) {
	            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b);
	          }, onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause: function onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b, c) {
	            a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b);
	          }, onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause: function onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(c, d) {
	            a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().getAsset().addElapsedTime(c);var e = a.getStaCore().createLabels(i.END, d, c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession();
	          }, onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause: function onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b, c) {
	            a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b);
	          }, onBufferStopOrOnPlayWhenBufferingDuringPlayback: function onBufferStopOrOnPlayWhenBufferingDuringPlayback(b, c) {
	            var d = parseInt(c.ns_st_po);a.getStaCore().stopPausedOnBufferingTimer(), a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getHeartbeat().resume(), a.getKeepAlive().start();
	          } });
	      };
	    }(),
	        t = function () {
	      return function (a) {
	        var c = this;b.extend(c, { onEndOrAdSkip: function onEndOrAdSkip(c, d) {
	            a.getPlaybackSession().addBufferingTime(c), a.getPlaybackSession().getAsset().addBufferingTime(c), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession();
	          }, onBufferStop: function onBufferStop(b, c) {
	            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1));
	          }, onSeekStart: function onSeekStart(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() ? a.getPlaybackSession().getAsset().isCollectingSeekingTime() || (a.getPlaybackSession().getAsset().setSeekingTimestamp(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0)) : a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().isSeeking() || (a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b));
	          }, onPause: function onPause(b, c) {
	            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1));
	          }, onPlay: function onPlay(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().getAsset().setPlaybackStarted(!0), (a.getPlaybackSession().getAsset().isPlaybackSessionLooping() || 0 == a.getPlaybackSession().getPlaybackCounter()) && (a.getPlaybackSession().incrementPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)), a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().setPlaybackStarted(!0), a.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), (0 == a.getPlaybackSession().getAsset().getLowestPartNumberPlayed() || a.getPlaybackSession().getAsset().getPartNumber() <= a.getPlaybackSession().getAsset().getLowestPartNumberPlayed()) && (a.getPlaybackSession().getAsset().setLowestPartNumberPlayed(a.getPlaybackSession().getAsset().getPartNumber()), a.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaySequenceCounter(0), a.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getStaCore().isLoadingTimeSent() || (c.ns_st_lt = a.getStaCore().getLoadTimeOffset() + b - a.getStaCore().getInitTimestamp() + "", a.getStaCore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().start();var e = a.getStaCore().createLabels(i.PLAY, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          } });
	      };
	    }(),
	        u = function () {
	      return function (a) {
	        var c = this;b.extend(c, { onEndAndSkip: function onEndAndSkip(c, d) {
	            a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().addBufferingTime(c), a.getPlaybackSession().getAsset().addBufferingTime(c), a.getPlaybackSession().getAsset().addElapsedTime(c);var e = a.getStaCore().createLabels(i.END, d, c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession();
	          }, onPause: function onPause(b, c) {
	            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b);
	          }, onPlay: function onPlay(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().start();var e = a.getStaCore().createLabels(i.PLAY, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          } });
	      };
	    }(),
	        v = function () {
	      return function (a) {
	        var c = this;b.extend(c, { onPauseOnBuffering: function onPauseOnBuffering(b, c) {
	            parseInt(c.ns_st_po);a.getStaCore().stopPausedOnBufferingTimer(), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses();var d = a.getStaCore().createLabels(i.PAUSE, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(d.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(d.eventLabels), a.getEventManager().newEvent(d), a.getPlaybackSession().setBufferingTimestamp(b), a.getPlaybackSession().getAsset().setBufferingTimestamp(b);
	          }, onEndOrAdSkip: function onEndOrAdSkip(c, d) {
	            parseInt(d.ns_st_po);a.getStaCore().stopPausedOnBufferingTimer(), a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().addBufferingTime(c), a.getPlaybackSession().getAsset().addBufferingTime(c), a.getPlaybackSession().getAsset().addElapsedTime(c);var e = a.getStaCore().createLabels(i.END, d, c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession();
	          }, onSeekStart: function onSeekStart(b, c) {
	            var d = parseInt(c.ns_st_po);a.getStaCore().stopPausedOnBufferingTimer(), a.getHeartbeat().pause(), a.getKeepAlive().stop(), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b), a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses();var e = a.getStaCore().createLabels(i.PAUSE, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          }, onPause: function onPause(b, c) {
	            parseInt(c.ns_st_po);a.getStaCore().stopPausedOnBufferingTimer(), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses();var d = a.getStaCore().createLabels(i.PAUSE, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(d.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(d.eventLabels), a.getEventManager().newEvent(d);
	          } });
	      };
	    }(),
	        w = function () {
	      return function (a) {
	        var c = this;b.extend(c, { onEndOrAdSkip: function onEndOrAdSkip(c, d) {
	            a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getStaCore().stopPausedOnBufferingTimer(), a.getPlaybackSession().addBufferingTime(c), a.getPlaybackSession().getAsset().addBufferingTime(c), a.getPlaybackSession().getAsset().addElapsedTime(c);var e = a.getStaCore().createLabels(i.END, d, c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession();
	          }, onPause: function onPause(b, c) {
	            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses(), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b);
	          }, onPlay: function onPlay(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().start();var e = a.getStaCore().createLabels(i.PLAY, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          } });
	      };
	    }(),
	        x = function () {
	      return function (a) {
	        var c = this;b.extend(c, { onBuffer: function onBuffer(b, c) {
	            a.getPlaybackSession().setPlaybackSessionStarted(!0), a.getPlaybackSession().getAsset().setAssetStarted(!0), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().setSeekingTime(a.getPlaybackSession().getAsset().getSeekingTimeBeforeEnd()), a.getPlaybackSession().setBufferingTimestamp(b), a.getPlaybackSession().getAsset().setBufferingTimestamp(b);
	          }, onSeekStart: function onSeekStart(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().setPlaybackSessionStarted(!0), a.getPlaybackSession().getAsset().setAssetStarted(!0), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().setSeekingTime(a.getPlaybackSession().getAsset().getSeekingTimeBeforeEnd()), a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b);
	          }, onPlay: function onPlay(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().setPlaybackSessionStarted(!0), a.getPlaybackSession().getAsset().setAssetStarted(!0), (a.getPlaybackSession().getAsset().isPlaybackSessionLooping() || 0 == a.getPlaybackSession().getPlaybackCounter()) && (a.getPlaybackSession().incrementPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().setSeekingTime(a.getPlaybackSession().getAsset().getSeekingTimeBeforeEnd()), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().setPlaybackStarted(!0), a.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(), (0 == a.getPlaybackSession().getAsset().getLowestPartNumberPlayed() || a.getPlaybackSession().getAsset().getPartNumber() <= a.getPlaybackSession().getAsset().getLowestPartNumberPlayed()) && (a.getPlaybackSession().getAsset().setLowestPartNumberPlayed(a.getPlaybackSession().getAsset().getPartNumber()), a.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaySequenceCounter(0), a.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getStaCore().isLoadingTimeSent() || (c.ns_st_lt = a.getStaCore().getLoadTimeOffset() + b - a.getStaCore().getInitTimestamp() + "", a.getStaCore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().start();var e = a.getStaCore().createLabels(i.PLAY, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          } });
	      };
	    }(),
	        y = function () {
	      return function (a) {
	        var c = this;b.extend(c, { onEndOrAdSkip: function onEndOrAdSkip(c, d) {
	            a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().getAsset().addElapsedTime(c);var e = a.getStaCore().createLabels(i.END, d, c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession();
	          }, onPlay: function onPlay(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().start();var e = a.getStaCore().createLabels(i.PLAY, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          } });
	      };
	    }(),
	        z = function () {
	      return function (a) {
	        var c = this;b.extend(c, { onEndOrAdSkip: function onEndOrAdSkip(c, d) {
	            a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().addBufferingTime(c), a.getPlaybackSession().getAsset().addBufferingTime(c), a.getPlaybackSession().getAsset().addElapsedTime(c), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1));var e = a.getStaCore().createLabels(i.END, d, c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession();
	          }, onBufferStop: function onBufferStop(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().start();var e = a.getStaCore().createLabels(i.PLAY, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          }, onSeekStart: function onSeekStart(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().isSeeking() ? a.getPlaybackSession().getAsset().isCollectingSeekingTime() || (a.getPlaybackSession().getAsset().setSeekingTimestamp(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0)) : a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().isSeeking() || (a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b);
	          }, onPause: function onPause(b, c) {
	            a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b);
	          }, onPlay: function onPlay(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().addBufferingTime(b), a.getPlaybackSession().getAsset().addBufferingTime(b), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().start();var e = a.getStaCore().createLabels(i.PLAY, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          } });
	      };
	    }(),
	        A = function () {
	      return function (a) {
	        var c = this;b.extend(c, { onEndOrAdSkip: function onEndOrAdSkip(c, d) {
	            a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession();
	          }, onSeekStart: function onSeekStart(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().getAsset().isSeeking() ? a.getPlaybackSession().getAsset().setSeekingTimestamp(b) : a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().isSeeking() || (a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b));
	          }, onPlay: function onPlay(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().setPlaybackSessionStarted(!0), (a.getPlaybackSession().getAsset().isPlaybackSessionLooping() || 0 == a.getPlaybackSession().getPlaybackCounter()) && (a.getPlaybackSession().incrementPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)), a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().setPlaybackStarted(!0), a.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(), (0 == a.getPlaybackSession().getAsset().getLowestPartNumberPlayed() || a.getPlaybackSession().getAsset().getPartNumber() <= a.getPlaybackSession().getAsset().getLowestPartNumberPlayed()) && (a.getPlaybackSession().getAsset().setLowestPartNumberPlayed(a.getPlaybackSession().getAsset().getPartNumber()), a.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaySequenceCounter(0), a.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getStaCore().isLoadingTimeSent() || (c.ns_st_lt = a.getStaCore().getLoadTimeOffset() + b - a.getStaCore().getInitTimestamp() + "", a.getStaCore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().start();var e = a.getStaCore().createLabels(i.PLAY, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          }, onBuffer: function onBuffer() {
	            a.getPlaybackSession().setBufferingTimestamp(eventTimestamp), a.getPlaybackSession().getAsset().setBufferingTimestamp(eventTimestamp);
	          } });
	      };
	    }(),
	        B = function () {
	      return function (a) {
	        var c = this;b.extend(c, { onEndOrAdSkip: function onEndOrAdSkip(c, d) {
	            var e = parseInt(d.ns_st_po);a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().addPlaybackTime(c), a.getPlaybackSession().getAsset().addPlaybackTime(c), a.getPlaybackSession().getAsset().addElapsedTime(c), a.getPlaybackSession().getAsset().addInterval(e);var f = a.getStaCore().createLabels(i.END, d, c);a.getPlaybackSession().getAsset().updateDeltaLabels(f.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(f.eventLabels), a.getEventManager().newEvent(f), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession();
	          }, onBuffer: function onBuffer(b, c) {
	            var d = parseInt(c.ns_st_po);a.getHeartbeat().pause(), a.getKeepAlive().stop(), a.getPlaybackSession().addPlaybackTime(b), a.getPlaybackSession().getAsset().addPlaybackTime(b), a.getPlaybackSession().getAsset().addInterval(d), a.getStaCore().isPauseOnBufferingEnabled() && a.getStaCore().startPausedOnBufferingTimer(b, c), a.getPlaybackSession().getAsset().incrementBufferCount(), a.getPlaybackSession().setBufferingTimestamp(b), a.getPlaybackSession().getAsset().setBufferingTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b);
	          }, onSeekStart: function onSeekStart(b, c) {
	            var d = parseInt(c.ns_st_po);a.getHeartbeat().pause(), a.getKeepAlive().stop(), a.getPlaybackSession().addPlaybackTime(b), a.getPlaybackSession().getAsset().addPlaybackTime(b), a.getPlaybackSession().getAsset().addInterval(d), a.getPlaybackSession().getAsset().incrementSeeks(), a.getPlaybackSession().getAsset().setSeeking(!0), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!0), a.getPlaybackSession().getAsset().setSeekStartPosition(d), a.getPlaybackSession().getAsset().setSeekingTimestamp(b), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses();var e = a.getStaCore().createLabels(i.PAUSE, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          }, onPause: function onPause(b, c) {
	            var d = parseInt(c.ns_st_po);a.getHeartbeat().pause(), a.getKeepAlive().stop(), a.getPlaybackSession().addPlaybackTime(b), a.getPlaybackSession().getAsset().addPlaybackTime(b), a.getPlaybackSession().getAsset().addInterval(d), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses();var e = a.getStaCore().createLabels(i.PAUSE, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          } });
	      };
	    }(),
	        C = function () {
	      return function (a) {
	        var c = this;b.extend(c, { onEndOrAdSkip: function onEndOrAdSkip(c, d) {
	            a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession();
	          }, onPause: function onPause(b, c) {
	            a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1));
	          }, onPlay: function onPlay(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), (a.getPlaybackSession().getAsset().isPlaybackSessionLooping() || 0 == a.getPlaybackSession().getPlaybackCounter()) && (a.getPlaybackSession().incrementPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaybackSessionLooping(!1)), a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().getAsset().setPlaybackStarted(!0), a.getPlaybackSession().getAsset().incrementSegmentPlaybackCounter(), (0 == a.getPlaybackSession().getAsset().getLowestPartNumberPlayed() || a.getPlaybackSession().getAsset().getPartNumber() <= a.getPlaybackSession().getAsset().getLowestPartNumberPlayed()) && (a.getPlaybackSession().getAsset().setLowestPartNumberPlayed(a.getPlaybackSession().getAsset().getPartNumber()), a.getPlaybackSession().getAsset().incrementAssetPlaybackCounter(), a.getPlaybackSession().getAsset().setPlaySequenceCounter(0), a.getPlaybackSession().getAsset().resetAssetPlaybackIntervals()), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getStaCore().isLoadingTimeSent() || (c.ns_st_lt = a.getStaCore().getLoadTimeOffset() + b - a.getStaCore().getInitTimestamp() + "", a.getStaCore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().start();var e = a.getStaCore().createLabels(i.PLAY, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          } });
	      };
	    }(),
	        D = function () {
	      return function (a) {
	        var c = this;b.extend(c, { onPause: function onPause(b, c) {
	            a.getPlaybackSession().incrementPauses(), a.getPlaybackSession().getAsset().incrementPauses(), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b);
	          } });
	      };
	    }(),
	        E = function () {
	      return function (a) {
	        var c = this;b.extend(c, { onEndOrAdSkip: function onEndOrAdSkip(c, d) {
	            parseInt(d.ns_st_po);a.getStaCore().resetHeartbeat(), a.getKeepAlive().stop(), a.getPlaybackSession().getAsset().addElapsedTime(c);var e = a.getStaCore().createLabels(i.END, d, c);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e), a.getPlaybackSession().getAsset().isSeeking() && a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().setSeekingTimeBeforeEnd(c - a.getPlaybackSession().getAsset().getSeekingTimestamp()), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().storeAssetPlaybackCounters(), a.getPlaybackSession().getAsset().resetAssetLifecycleLabels(), a.getPlaybackSession().getAsset().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getStaCore().resetPlaybackSession();
	          }, onPlay: function onPlay(b, c) {
	            var d = parseInt(c.ns_st_po);a.getPlaybackSession().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlaySequenceCounter(), a.getPlaybackSession().getAsset().incrementPlayCounter(), a.getPlaybackSession().getAsset().isSeeking() && (a.getPlaybackSession().getAsset().isCollectingSeekingTime() && (a.getPlaybackSession().getAsset().addSeekingTime(b), a.getPlaybackSession().getAsset().setCollectingSeekingTime(!1)), a.getPlaybackSession().getAsset().addSeekingAmount(d), a.getPlaybackSession().getAsset().setSeeking(!1)), a.getPlaybackSession().getAsset().addElapsedTime(b), a.getPlaybackSession().getAsset().setElapsedTimestamp(b), a.getPlaybackSession().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackTimestamp(b), a.getPlaybackSession().getAsset().setPlaybackStartPosition(d), a.getStaCore().isLoadingTimeSent() || (c.ns_st_lt = a.getStaCore().getLoadTimeOffset() + b - a.getStaCore().getInitTimestamp() + "", a.getStaCore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().start();var e = a.getStaCore().createLabels(i.PLAY, c, b);a.getPlaybackSession().getAsset().updateDeltaLabels(e.eventLabels), a.getPlaybackSession().getAsset().updateIndependentLabels(e.eventLabels), a.getEventManager().newEvent(e);
	          } });
	      };
	    }(),
	        F = function () {
	      return function (a) {
	        function d() {
	          if (F = new G(ea), b.getNamespace().comScore ? (fa = b.getNamespace().comScore.exports, F.setAppCore(fa.c())) : F.setAppCore(null), a.publisherId) {
	            ea.setLabel("c2", a.publisherId);var d = a.secure;!d && F.getAppCore() ? d = F.getAppCore().isSecure() : !d && b.isBrowser() && (d = b.isWebSecure());var e = (d ? "https://sb" : "http://b") + ".scorecardresearch.com/p?c1=2";ea.setLiveEndpointURL(e);
	          }a.liveEndpointURL && ea.setLiveEndpointURL(a.liveEndpointURL), F.setKeepAlive(new q(F)), F.setHeartbeat(new p(F)), F.setEventManager(new o(F)), F.setStateMachine(new r()), F.setLogging(new c(l.LOG_NAMESPACE, a.debug)), F.setPlaybackSession(new n(F)), H = new x(F), I = new y(F), J = new A(F), K = new B(F), L = new t(F), M = new v(F), N = new w(F), O = new u(F), P = new z(F), Q = new C(F), R = new D(F), S = new E(F), T = new s(F), U = !1, V = 0, W = +new Date(), Y = !0, $ = !1, aa = [], a.systemClockJumpDetection && ea.enableSystemClockJumpsDetection(parseInt(a.systemClockJumpDetectionInterval));
	        }function e(a) {
	          var b = F.getStateMachine().getCurrentState();if (b == j.IDLE || b == j.PLAYBACK_NOT_STARTED || b == j.BUFFERING_BEFORE_PLAYBACK || b == j.SEEKING_BEFORE_PLAYBACK) {
	            if (a == i.PLAY) return !0;
	          } else if (b == j.PLAYING) {
	            if (a == i.END || a == i.AD_SKIP || a == i.SEEK_START || a == i.PAUSE) return !0;
	          } else if (b == j.PAUSED || b == j.BUFFERING_DURING_PAUSE || b == j.SEEKING_DURING_PLAYBACK || b == j.SEEKING_DURING_BUFFERING || b == j.SEEKING_DURING_PAUSE) {
	            if (a == i.END || a == i.AD_SKIP || a == i.PLAY) return !0;
	          } else if (b == j.BUFFERING_DURING_PLAYBACK) {
	            if (a == i.PAUSE_ON_BUFFERING || a == i.END || a == i.AD_SKIP || a == i.SEEK_START || a == i.PAUSE || a == i.PLAY) return !0;
	          } else if (b == j.BUFFERING_DURING_SEEKING) {
	            if (a == i.END || a == i.AD_SKIP || a == i.PAUSE || a == i.PLAY) return !0;
	          } else if (b == j.PAUSED_DURING_BUFFERING && (a == i.END || a == i.AD_SKIP || a == i.BUFFER_STOP || a == i.PLAY)) return !0;return !1;
	        }function f(a, b, c) {
	          var d = F.getStateMachine().getCurrentState();a == i.AD_SKIP && !c.hasOwnProperty("ns_st_ui") && e(a) ? c.ns_st_ui = "skip" : a == i.SEEK_START && !c.hasOwnProperty("ns_st_ui") && e(a) && (c.ns_st_ui = "seek"), d == j.IDLE ? a == i.BUFFER ? H.onBuffer(b, c) : a == i.SEEK_START ? H.onSeekStart(b, c) : a == i.PLAY && H.onPlay(b, c) : d == j.PLAYBACK_NOT_STARTED ? a == i.END || a == i.AD_SKIP ? J.onEndOrAdSkip(b, c) : a == i.SEEK_START ? J.onSeekStart(b, c) : a == i.PLAY ? J.onPlay(b, c) : a == i.BUFFER && J.onBuffer(b, c) : d == j.PLAYING ? a == i.END || a == i.AD_SKIP ? K.onEndOrAdSkip(b, c) : a == i.BUFFER ? K.onBuffer(b, c) : a == i.SEEK_START ? K.onSeekStart(b, c) : a == i.PAUSE && K.onPause(b, c) : d == j.PAUSED ? a == i.END || a == i.AD_SKIP ? I.onEndOrAdSkip(b, c) : a == i.PLAY ? I.onPlay(b, c) : a == i.BUFFER ? T.onBufferWhenSeekingOrPaused(b, c) : a == i.SEEK_START && T.onSeekStartWhenPausedOrBufferingDuringPause(b, c) : d == j.BUFFERING_BEFORE_PLAYBACK ? a == i.END || a == i.AD_SKIP ? L.onEndOrAdSkip(b, c) : a == i.BUFFER_STOP ? L.onBufferStop(b, c) : a == i.SEEK_START ? L.onSeekStart(b, c) : a == i.PAUSE ? L.onPause(b, c) : a == i.PLAY && L.onPlay(b, c) : d == j.BUFFERING_DURING_PLAYBACK ? a == i.PAUSE_ON_BUFFERING ? M.onPauseOnBuffering(b, c) : a == i.BUFFER_STOP ? T.onBufferStopOrOnPlayWhenBufferingDuringPlayback(b, c) : a == i.END || a == i.AD_SKIP ? M.onEndOrAdSkip(b, c) : a == i.SEEK_START ? M.onSeekStart(b, c) : a == i.PAUSE ? M.onPause(b, c) : a == i.PLAY && T.onBufferStopOrOnPlayWhenBufferingDuringPlayback(b, c) : d == j.BUFFERING_DURING_SEEKING ? a == i.END || a == i.AD_SKIP ? N.onEndOrAdSkip(b, c) : a == i.PAUSE ? N.onPause(b, c) : a == i.PLAY ? N.onPlay(b, c) : a == i.BUFFER_STOP && T.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b, c) : d == j.BUFFERING_DURING_PAUSE ? a == i.END || a == i.AD_SKIP ? O.onEndAndSkip(b, c) : a == i.PAUSE ? O.onPause(b, c) : a == i.PLAY ? O.onPlay(b, c) : a == i.SEEK_START ? T.onSeekStartWhenPausedOrBufferingDuringPause(b, c) : a == i.BUFFER_STOP && T.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b, c) : d == j.SEEKING_BEFORE_PLAYBACK ? a == i.END || a == i.AD_SKIP ? Q.onEndOrAdSkip(b, c) : a == i.PAUSE ? Q.onPause(b, c) : a == i.PLAY ? Q.onPlay(b, c) : a == i.BUFFER && T.onBufferWhenSeekingOrPaused(b, c) : d == j.SEEKING_DURING_PLAYBACK ? a == i.END || a == i.AD_SKIP ? S.onEndOrAdSkip(b, c) : a == i.PLAY ? S.onPlay(b, c) : a == i.BUFFER ? T.onBufferWhenSeekingOrPaused(b, c) : a == i.PAUSE && T.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b, c) : d == j.SEEKING_DURING_BUFFERING ? a == i.PAUSE ? R.onPause(b, c) : a == i.BUFFER ? T.onBufferWhenSeekingOrPaused(b, c) : a == i.PLAY ? T.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b, c) : a == i.END || a == i.AD_SKIP ? T.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b, c) : a == i.BUFFER_STOP && T.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b, c) : d == j.PAUSED_DURING_BUFFERING ? a == i.END || a == i.AD_SKIP ? P.onEndOrAdSkip(b, c) : a == i.BUFFER_STOP ? P.onBufferStop(b, c) : a == i.SEEK_START ? P.onSeekStart(b, c) : a == i.PAUSE ? P.onPause(b, c) : a == i.PLAY && P.onPlay(b, c) : d == j.SEEKING_DURING_PAUSE && (a == i.BUFFER ? T.onBufferWhenSeekingOrPaused(b, c) : a == i.PLAY ? T.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b, c) : a == i.PAUSE ? T.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b, c) : a == i.END || a == i.AD_SKIP ? T.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b, c) : a == i.BUFFER_STOP && T.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b, c)), e(a) && F.getPlaybackSession().setFirstEventSent(!0);
	        }function m(a, c) {
	          for (var d, e = ka.encodeURIComponent || escape, f = [], g = l.LABELS_ORDER, h = a.split("?"), i = h[0], j = h[1], k = j.split("&"), m = 0, n = k.length; m < n; m++) {
	            var o = k[m].split("="),
	                p = unescape(o[0]),
	                q = unescape(o[1]);p && (c[p] = q);
	          }for (var r = {}, s = 0, t = g.length; s < t; s++) {
	            var u = g[s];if (c.hasOwnProperty(u)) {
	              var v = c[u];"undefined" != typeof v && null != v && (r[u] = !0, f.push(e(u) + "=" + e(c[u])));
	            }
	          }for (var w in c) {
	            if (c.hasOwnProperty(w)) {
	              if (r[w]) continue;var x = c[w];"undefined" != typeof x && null != x && f.push(e(w) + "=" + e(c[w]));
	            }
	          }d = i + "?" + f.join("&"), d = d + (d.indexOf("&c8=") < 0 ? "&c8=" + e(la.title) : "") + (d.indexOf("&c7=") < 0 ? "&c7=" + e(la.URL) : "") + (d.indexOf("&c9=") < 0 ? "&c9=" + e(la.referrer) : "");var y = b.browserAcceptsLargeURLs() ? l.URL_LENGTH_LIMIT : l.RESTRICTED_URL_LENGTH_LIMIT;if (d.length > y && d.indexOf("&") > 0) {
	            var z = d.substr(0, y - 8).lastIndexOf("&");d = (d.substring(0, z) + "&ns_cut=" + e(d.substring(z + 1))).substr(0, y);
	          }return d;
	        }var F,
	            H,
	            I,
	            J,
	            K,
	            L,
	            M,
	            N,
	            O,
	            P,
	            Q,
	            R,
	            S,
	            T,
	            U,
	            V,
	            W,
	            X,
	            Y,
	            Z,
	            $,
	            _,
	            aa,
	            ba,
	            ca,
	            da,
	            ea = this,
	            fa = {},
	            ga = l.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,
	            ha = l.THROTTLING_DELAY,
	            ia = {},
	            ja = !1;b.extend(ea, { getConfiguration: function getConfiguration() {
	            return a || {};
	          }, enableSystemClockJumpsDetection: function enableSystemClockJumpsDetection(a) {
	            (a < l.SYSTEM_CLOCK_JUMP_DETECTION_MINIMUM_INTERVAL || !a) && (a = l.SYSTEM_CLOCK_JUMP_DETECTION_DEFAULT_INTERVAL), b.onSystemClockJump(function (a) {
	              da = a, ja = !0;
	            }, a);
	          }, createLabels: function createLabels(a, c, d) {
	            var e = !1;if (a == i.HEARTBEAT) {
	              var f = isNaN(X) ? W : X;X = d, (d < f || ja) && (e = !0, ja = !1, d < f ? (F.getPlaybackSession().addInternalErrorFlag("1"), F.getLogging().infoLog("System clock jump detected", "to the far past")) : da ? (F.getPlaybackSession().addInternalErrorFlag("3"), F.getLogging().infoLog("System clock jump detected", "to the future")) : (F.getPlaybackSession().addInternalErrorFlag("2"), F.getLogging().infoLog("System clock jump detected", "to the near past")), d = f);
	            }var g = {};if ("undefined" != typeof document) {
	              var h = document;g.c7 = h.URL, g.c8 = h.title, g.c9 = h.referrer;
	            }return g.ns_ts = +new Date() + "", g.ns_st_ev = i.toString(a), g.ns_st_mp = l.DEFAULT_PLAYERNAME, g.ns_st_mv = l.STREAMINGANALYTICS_VERSION, g.ns_st_ub = "0", g.ns_st_br = "0", g.ns_st_pn = "1", g.ns_st_tp = "0", g.ns_st_it = k.toString(k.SINGLE_CLIP), g.ns_st_sv = l.STREAMINGANALYTICS_VERSION, g.ns_st_smv = l.MODEL_VERSION, g.ns_type = "hidden", g.ns_st_ec = F.getEventManager().getEventCounter() + "", g.ns_st_ki = F.getKeepAlive().getInterval() + "", F.getPlaybackSession().getAsset().isAutoCalculatePositionsEnabled() ? g.ns_st_po = F.getPlaybackSession().getAsset().getExpectedPlaybackPosition(d) + "" : g.ns_st_po = ca + "", ca = parseInt(g.ns_st_po), b.extend(g, ea.getLabels()), F.getPlaybackSession().createLabels(g, d), b.extend(g, c), e && (F.getPlaybackSession().setPlaybackTimestamp(X - parseInt(g.ns_st_pt)), F.getPlaybackSession().getAsset().setPlaybackTimestamp(X - parseInt(g.ns_st_pt)), F.getPlaybackSession().getAsset().setElapsedTimestamp(X - parseInt(g.ns_st_et)), F.getStateMachine().getCurrentState() == j.BUFFERING_DURING_PLAYBACK && F.getPlaybackSession().getAsset().setBufferingTimestamp(X - parseInt(g.ns_st_bp))), { eventType: a, eventLabels: g };
	          }, newEvent: function newEvent(a, c, d, e) {
	            ea.stopDelayedTransitionTimer();var g = F.getStateMachine().getCurrentState(),
	                h = F.getStateMachine().eventTypeToState(a);if (null == h || h == g) return void F.getLogging().infoLog("Ignored event:", i.toString(a), "during state", b.stateToString(g), d);if (ea.isThrottlingEnabled() && (g == j.PLAYING || g == j.PAUSED) && (h == j.PLAYING || h == j.PAUSED) && !e) {
	              F.getLogging().infoLog("Throttled event:", i.toString(a), "during state", b.stateToString(g), d, ea.getThrottlingDelay(), "ms");var k = function (a, b, d) {
	                return function () {
	                  ea.newEvent(a, c, d, !0);
	                };
	              }(a, h, d);return void (_ = F.getPlatformAPI().setTimeout(k, ea.getThrottlingDelay()));
	            }var l = isNaN(X) ? W : X;X = c;var m = !1;(c < l || ja) && (m = !0, ja = !1, c < l ? (F.getPlaybackSession().addInternalErrorFlag("1"), F.getLogging().infoLog("System clock jump detected", "to the far past")) : da ? (F.getPlaybackSession().addInternalErrorFlag("3"), F.getLogging().infoLog("System clock jump detected", "to the future")) : (F.getPlaybackSession().addInternalErrorFlag("2"), F.getLogging().infoLog("System clock jump detected", "to the near past")), c = l), d.ns_st_po || (F.getPlaybackSession().getAsset().isAutoCalculatePositionsEnabled() ? F.getStateMachine().getCurrentState() == j.IDLE ? d.ns_st_po = "0" : d.ns_st_po = F.getPlaybackSession().getAsset().getExpectedPlaybackPosition(c) + "" : d.ns_st_po = ca + ""), ca = parseInt(d.ns_st_po), F.getPlaybackSession().getAsset().setPlaybackTimeOffset(parseInt(d.ns_st_po)), f(a, c, d);var n = 0;isNaN(F.getStateMachine().getLastStateChangeTimestamp()) || (n = c - F.getStateMachine().getLastStateChangeTimestamp()), F.getStateMachine().newEvent(a, c), m && (h != j.IDLE && h != j.PLAYBACK_NOT_STARTED && h != j.SEEKING_BEFORE_PLAYBACK && h != j.BUFFERING_BEFORE_PLAYBACK && F.getPlaybackSession().getAsset().setElapsedTimestamp(X), h != j.BUFFERING_BEFORE_PLAYBACK && h != j.BUFFERING_DURING_PAUSE && h != j.BUFFERING_DURING_PLAYBACK && h != j.BUFFERING_DURING_SEEKING && h != j.PAUSED_DURING_BUFFERING || (F.getPlaybackSession().setBufferingTimestamp(X), F.getPlaybackSession().getAsset().setBufferingTimestamp(X)), h != j.PLAYING && h != j.BUFFERING_DURING_PLAYBACK || (F.getPlaybackSession().setPlaybackTimestamp(X), F.getPlaybackSession().getAsset().setPlaybackTimestamp(X)), h != j.SEEKING_BEFORE_PLAYBACK && h != j.SEEKING_DURING_BUFFERING && h != j.SEEKING_DURING_PAUSE && h != j.SEEKING_DURING_PLAYBACK && h != j.BUFFERING_DURING_SEEKING || F.getPlaybackSession().getAsset().setSeekingTimestamp(X)), F.getLogging().log("Transition from", b.stateToString(g), "to", b.stateToString(h), "due to event:", i.toString(a));for (var o = 0, p = aa.length; o < p; o++) {
	              aa[o](g, h, d, n);
	            }
	          }, newPseudoEvent: function newPseudoEvent(a, c, d) {
	            if ((a == i.LOAD || a == i.ENGAGE) && F.getStateMachine().getCurrentState() != j.IDLE) return void F.getLogging().infoLog("Ignored pseudo-event:", i.toString(a), "during state", b.stateToString(F.getStateMachine().getCurrentState()), d);a == i.ERROR && null == d.ns_st_er && (d.ns_st_er = h.UNKNOWN_VALUE), a == i.TRANSFER && null == d.ns_st_rp && (d.ns_st_rp = h.UNKNOWN_VALUE);var e,
	                f,
	                g,
	                k = !0,
	                l = !1;switch (a) {case i.BIT_RATE:
	                e = "ns_st_br", f = "ns_st_pbr", l = !0;break;case i.PLAYBACK_RATE:
	                e = "ns_st_rt", f = "ns_st_prt", l = !0;break;case i.VOLUME:
	                e = "ns_st_vo", f = "ns_st_pvo", l = !0;break;case i.WINDOW_STATE:
	                e = "ns_st_ws", f = "ns_st_pws", l = !0;break;case i.AUDIO:
	                e = "ns_st_at", f = "ns_st_pat", l = !1;break;case i.VIDEO:
	                e = "ns_st_vt", f = "ns_st_pvt", l = !1;break;case i.SUBS:
	                e = "ns_st_tt", f = "ns_st_ptt", l = !1;break;case i.CDN:
	                e = "ns_st_cdn", f = "ns_st_pcdn", l = !1;break;default:
	                k = !1;}if (k && d.hasOwnProperty(e) && (l ? (ea.getLabels().hasOwnProperty(e) && (g = ea.getLabels()[e], d[f] = g), ea.setLabel(e, d[e])) : (F.getPlaybackSession().getAsset().hasInternalLabel(e) && (g = F.getPlaybackSession().getAsset().getInternalLabel(e), d[f] = g), F.getPlaybackSession().getAsset().setInternalLabel(e, d[e]))), k && F.getStateMachine().getCurrentState() != j.PLAYING && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PLAYBACK) return void F.getLogging().infoLog("No measurement send for the pseudo-event:", i.toString(a), "during state", b.stateToString(F.getStateMachine().getCurrentState()), d);var m = isNaN(X) ? W : X;X = c;var n = !1;(c < m || ja) && (n = !0, ja = !1, c < m ? (F.getPlaybackSession().addInternalErrorFlag("1"), F.getLogging().infoLog("System clock jump detected", "to the far past")) : da ? (F.getPlaybackSession().addInternalErrorFlag("3"), F.getLogging().infoLog("System clock jump detected", "to the future")) : (F.getPlaybackSession().addInternalErrorFlag("2"), F.getLogging().infoLog("System clock jump detected", "to the near past")), c = m), d.ns_st_po || (F.getPlaybackSession().getAsset().isAutoCalculatePositionsEnabled() ? d.ns_st_po = F.getPlaybackSession().getAsset().getExpectedPlaybackPosition(c) + "" : d.ns_st_po = ca + ""), ca = parseInt(d.ns_st_po), F.getPlaybackSession().getAsset().setPlaybackTimeOffset(parseInt(d.ns_st_po)), F.getStateMachine().getCurrentState() != j.IDLE && F.getStateMachine().getCurrentState() != j.PLAYBACK_NOT_STARTED && F.getStateMachine().getCurrentState() != j.SEEKING_BEFORE_PLAYBACK && F.getStateMachine().getCurrentState() != j.BUFFERING_BEFORE_PLAYBACK && (F.getPlaybackSession().getAsset().addElapsedTime(c), F.getPlaybackSession().getAsset().setElapsedTimestamp(c)), F.getStateMachine().getCurrentState() != j.PLAYING && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PLAYBACK || (F.getPlaybackSession().addPlaybackTime(c), F.getPlaybackSession().setPlaybackTimestamp(c), F.getPlaybackSession().getAsset().addPlaybackTime(c), F.getPlaybackSession().getAsset().setPlaybackTimestamp(c), F.getPlaybackSession().getAsset().addInterval(parseInt(d.ns_st_po)), F.getPlaybackSession().getAsset().setPlaybackStartPosition(parseInt(d.ns_st_po))), F.getStateMachine().getCurrentState() != j.BUFFERING_BEFORE_PLAYBACK && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PAUSE && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PLAYBACK && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_SEEKING || (F.getPlaybackSession().addBufferingTime(c), F.getPlaybackSession().setBufferingTimestamp(c), F.getPlaybackSession().getAsset().addBufferingTime(c), F.getPlaybackSession().getAsset().setBufferingTimestamp(c));var o = ea.createLabels(a, d, c);F.getPlaybackSession().getAsset().updateDeltaLabels(o.eventLabels), F.getPlaybackSession().getAsset().updateIndependentLabels(o.eventLabels), F.getEventManager().newEvent(o), n && (F.getStateMachine().getCurrentState() != j.PLAYING && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PLAYBACK || (F.getPlaybackSession().setPlaybackTimestamp(X), F.getPlaybackSession().getAsset().setPlaybackTimestamp(X)), F.getStateMachine().getCurrentState() != j.IDLE && F.getStateMachine().getCurrentState() != j.PLAYBACK_NOT_STARTED && F.getStateMachine().getCurrentState() != j.SEEKING_BEFORE_PLAYBACK && F.getStateMachine().getCurrentState() != j.BUFFERING_BEFORE_PLAYBACK && F.getPlaybackSession().getAsset().setElapsedTimestamp(X), F.getStateMachine().getCurrentState() != j.BUFFERING_BEFORE_PLAYBACK && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PAUSE && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PLAYBACK && F.getStateMachine().getCurrentState() != j.BUFFERING_DURING_SEEKING || (F.getPlaybackSession().setBufferingTimestamp(X), F.getPlaybackSession().getAsset().setBufferingTimestamp(X)), newState != j.SEEKING_BEFORE_PLAYBACK && newState != j.SEEKING_DURING_BUFFERING && newState != j.SEEKING_DURING_PAUSE && newState != j.SEEKING_DURING_PLAYBACK && newState != j.BUFFERING_DURING_SEEKING || F.getPlaybackSession().getAsset().setSeekingTimestamp(X));
	          }, getState: function getState() {
	            return F.getStateMachine().getCurrentState();
	          }, addListener: function addListener(a) {
	            aa.push(a);
	          }, removeListener: function removeListener(a) {
	            aa.splice(b.indexOf(a, aa), 1);
	          }, getLabel: function getLabel(a) {
	            return ia[a];
	          }, getLabels: function getLabels() {
	            return ia;
	          }, setLabel: function setLabel(a, b) {
	            null == b ? delete ia[a] : ia[a] = b;
	          }, setLabels: function setLabels(a) {
	            for (var b in a) {
	              a.hasOwnProperty(b) && ea.setLabel(b, a[b]);
	            }
	          }, getPlatformAPI: function getPlatformAPI() {
	            return F.getAppCore() ? F.getAppCore().getPlatformAPI() : g;
	          }, getExports: function getExports() {
	            return fa;
	          }, isProperlyInitialized: function isProperlyInitialized() {
	            var a = F.getAppCore().getAppContext(),
	                b = F.getAppCore().getSalt(),
	                c = F.getAppCore().getPixelURL();return a && c && b;
	          }, setThrottlingDelay: function setThrottlingDelay(a) {
	            ha = a;
	          }, getThrottlingDelay: function getThrottlingDelay() {
	            return ha;
	          }, isThrottlingEnabled: function isThrottlingEnabled() {
	            return $;
	          }, setThrottlingEnabled: function setThrottlingEnabled(a) {
	            $ = a;
	          }, isLoadingTimeSent: function isLoadingTimeSent() {
	            return U;
	          }, setLoadingTimeSent: function setLoadingTimeSent(a) {
	            U = a;
	          }, getLoadTimeOffset: function getLoadTimeOffset() {
	            return V;
	          }, setLoadTimeOffset: function setLoadTimeOffset(a) {
	            V = a;
	          }, getInitTimestamp: function getInitTimestamp() {
	            return W;
	          }, setPauseOnBufferingInterval: function setPauseOnBufferingInterval(a) {
	            ga = a;
	          }, getPauseOnBufferingInterval: function getPauseOnBufferingInterval() {
	            return ga;
	          }, isPauseOnBufferingEnabled: function isPauseOnBufferingEnabled() {
	            return Y;
	          }, setPauseOnBufferingEnabled: function setPauseOnBufferingEnabled(a) {
	            Y = a;
	          }, startPausedOnBufferingTimer: function startPausedOnBufferingTimer(a, c) {
	            ea.stopPausedOnBufferingTimer(), Z = ea.getPlatformAPI().setTimeout(function () {
	              var a = {},
	                  d = b.fixEventTime(a),
	                  e = parseInt(c.ns_st_po);a.ns_st_po = e + "", ea.newEvent(i.PAUSE_ON_BUFFERING, d, a);
	            }, ga);
	          }, stopPausedOnBufferingTimer: function stopPausedOnBufferingTimer() {
	            null != Z && (ea.getPlatformAPI().clearTimeout(Z), Z = null);
	          }, stopDelayedTransitionTimer: function stopDelayedTransitionTimer() {
	            _ && (ea.getPlatformAPI().clearTimeout(_), _ = null);
	          }, setLiveEndpointURL: function setLiveEndpointURL(a) {
	            if (null == a || 0 == a.length) return null;var b = decodeURIComponent || unescape,
	                c = a.indexOf("?");if (c >= 0) {
	              if (c < a.length - 1) {
	                for (var d = a.substring(c + 1).split("&"), e = 0, f = d.length; e < f; e++) {
	                  var g = d[e],
	                      h = g.split("=");2 == h.length ? ea.setLabel(h[0], b(h[1])) : 1 == h.length && ea.setLabel(l.PAGE_NAME_LABEL, b(h[0]));
	                }a = a.substring(0, c + 1);
	              }
	            } else a += "?";return ba = a;
	          }, getLiveEndpointURL: function getLiveEndpointURL() {
	            return ba ? ba : "undefined" != typeof ns_p && "string" == typeof ns_p.src ? ba = ns_p.src.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : "string" == typeof ns_pixelUrl ? ba = ns_pixelUrl.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : null;
	          }, getStaSM: function getStaSM() {
	            return F;
	          }, resetPlaybackSession: function resetPlaybackSession(a) {
	            var b = F.getPlaybackSession();F.setPlaybackSession(new n(F)), n.resetPlaybackSession(F, b, a);
	          }, resetHeartbeat: function resetHeartbeat() {
	            F.getHeartbeat().pause();var a = F.getHeartbeat().getIntervals();F.setHeartbeat(new p(F)), F.getHeartbeat().setIntervals(a);
	          } });var ka, la;b.isBrowser() ? (ka = window, la = document) : (ka = {}, la = { location: { href: "" }, title: "", URL: "", referrer: "", cookie: "" }), b.extend(ea, { prepareUrl: m }), d();
	      };
	    }(),
	        G = function () {
	      return function (a) {
	        var c,
	            d,
	            e,
	            f,
	            g,
	            h,
	            i,
	            j = this;b.extend(j, { getAppCore: function getAppCore() {
	            return c;
	          }, getStaCore: function getStaCore() {
	            return a;
	          }, getEventManager: function getEventManager() {
	            return d;
	          }, getStateMachine: function getStateMachine() {
	            return e;
	          }, getHeartbeat: function getHeartbeat() {
	            return f;
	          }, getKeepAlive: function getKeepAlive() {
	            return g;
	          }, getPlaybackSession: function getPlaybackSession() {
	            return h;
	          }, getLogging: function getLogging() {
	            return i;
	          }, setAppCore: function setAppCore(a) {
	            c = a;
	          }, setKeepAlive: function setKeepAlive(a) {
	            g = a;
	          }, setHeartbeat: function setHeartbeat(a) {
	            f = a;
	          }, setEventManager: function setEventManager(a) {
	            d = a;
	          }, setStateMachine: function setStateMachine(a) {
	            e = a;
	          }, setPlaybackSession: function setPlaybackSession(a) {
	            h = a;
	          }, setLogging: function setLogging(a) {
	            i = a;
	          } });
	      };
	    }(),
	        H = function () {
	      return function (a) {
	        function c() {
	          a = b.extend({}, a), f = new F(a), f.getStaSM().getLogging().log("New StreamingAnalytics instance with configuration", a);
	        }function d(a) {
	          var c, d;if (c = "object" == _typeof(arguments[1]) ? arguments[1] : "object" == _typeof(arguments[2]) ? arguments[2] : {}, d = "number" == typeof arguments[1] ? arguments[1] : "number" == typeof arguments[2] ? arguments[2] : NaN, i.toString(a)) {
	            c = b.jsonObjectToStringDictionary(c);var e = b.fixEventTime(c);c.ns_st_po || isNaN(d) || (c.ns_st_po = b.parseInteger(d, 0) + ""), a == i.PLAY || a == i.PAUSE || a == i.BUFFER || a == i.END || a == i.SEEK_START || a == i.AD_SKIP || a == i.BUFFER_STOP ? f.newEvent(a, e, c) : f.newPseudoEvent(a, e, c);
	          }
	        }function e() {
	          h && f.getStaSM().getStateMachine().getCurrentState() != j.IDLE && g.notifyEnd();
	        }var f,
	            g = this,
	            h = !0;b.extend(this, { isProperlyInitialized: function isProperlyInitialized() {
	            return f.isProperlyInitialized();
	          }, reset: function reset(a) {
	            d(i.END);var b = f;b.getStaSM().getKeepAlive().stop(), b.getStaSM().getHeartbeat().pause(), f = new F(b.getConfiguration()), n.resetPlaybackSession(f.getStaSM(), b.getStaSM().getPlaybackSession(), a);
	          }, setPauseOnBufferingInterval: function setPauseOnBufferingInterval(a) {
	            f.setPauseOnBufferingInterval(a);
	          }, getPauseOnBufferingInterval: function getPauseOnBufferingInterval() {
	            return f.getPauseOnBufferingInterval();
	          }, setKeepAliveInterval: function setKeepAliveInterval(a) {
	            f.getStaSM().getKeepAlive().setInterval(a);
	          }, getKeepAliveInterval: function getKeepAliveInterval() {
	            return f.getStaSM().getKeepAlive().getInterval();
	          }, setHeartbeatIntervals: function setHeartbeatIntervals(a) {
	            f.getStaSM().getHeartbeat().setIntervals(a);
	          }, notifyPlay: function notifyPlay(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyPlay", a, b), d(i.PLAY, a, b);
	          }, notifyPause: function notifyPause(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyPause", a, b), d(i.PAUSE, a, b);
	          }, notifyEnd: function notifyEnd(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyEnd", a, b), d(i.END, a, b);
	          }, notifyBufferStart: function notifyBufferStart(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyBufferStart", a, b), d(i.BUFFER, a, b);
	          }, notifyBufferStop: function notifyBufferStop(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyBufferStop", a, b), d(i.BUFFER_STOP, a, b);
	          }, notifyLoad: function notifyLoad(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyLoad", a, b), d(i.LOAD, a, b);
	          }, notifyEngage: function notifyEngage(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyEngage", a, b), d(i.ENGAGE, a, b);
	          }, notifySeekStart: function notifySeekStart(a, b) {
	            f.getStaSM().getLogging().apiCall("notifySeekStart", a, b), d(i.SEEK_START, a, b);
	          }, notifySkipAd: function notifySkipAd(a, b) {
	            f.getStaSM().getLogging().apiCall("notifySkipAd", a, b), d(i.AD_SKIP, a, b);
	          }, notifyCallToAction: function notifyCallToAction(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyCallToAction", a, b), d(i.CTA, a, b);
	          }, notifyError: function notifyError(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyError", a, b), d(i.ERROR, a, b);
	          }, notifyTransferPlayback: function notifyTransferPlayback(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyTransferPlayback", a, b), d(i.TRANSFER, a, b);
	          }, notifyDrmFail: function notifyDrmFail(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyDrmFail", a, b), d(i.DRM_FAILED, a, b);
	          }, notifyDrmApprove: function notifyDrmApprove(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyDrmApprove", a, b), d(i.DRM_APPROVED, a, b);
	          }, notifyDrmDeny: function notifyDrmDeny(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyDrmDeny", a, b), d(i.DRM_DENIED, a, b);
	          }, notifyChangeBitrate: function notifyChangeBitrate(a, b, c) {
	            if (f.getStaSM().getLogging().apiCall("notifyChangeBitrate", a, b, c), null != a) {
	              var e = c || {};e.ns_st_br = a + "", d(i.BIT_RATE, e, b);
	            }
	          }, notifyChangePlaybackRate: function notifyChangePlaybackRate(a, b, c) {
	            if (f.getStaSM().getLogging().apiCall("notifyChangePlaybackRate", a, b, c), null != a) {
	              var e = c || {};e.ns_st_rt = a + "", d(i.PLAYBACK_RATE, e, b);
	            }
	          }, notifyChangeVolume: function notifyChangeVolume(a, b, c) {
	            if (f.getStaSM().getLogging().apiCall("notifyChangeVolume", a, b, c), null != a) {
	              var e = c || {};e.ns_st_vo = a + "", d(i.VOLUME, e, b);
	            }
	          }, notifyChangeWindowState: function notifyChangeWindowState(a, b, c) {
	            if (f.getStaSM().getLogging().apiCall("notifyChangeWindowState", a, b, c), null != a) {
	              var e = c || {};e.ns_st_ws = a + "", d(i.WINDOW_STATE, e, b);
	            }
	          }, notifyChangeAudioTrack: function notifyChangeAudioTrack(a, b, c) {
	            if (f.getStaSM().getLogging().apiCall("notifyChangeAudioTrack", a, b, c), null != a) {
	              var e = c || {};e.ns_st_at = a + "", d(i.AUDIO, e, b);
	            }
	          }, notifyChangeVideoTrack: function notifyChangeVideoTrack(a, b, c) {
	            if (f.getStaSM().getLogging().apiCall("notifyChangeVideoTrack", a, b, c), null != a) {
	              var e = c || {};e.ns_st_vt = a + "", d(i.VIDEO, e, b);
	            }
	          }, notifyChangeSubtitleTrack: function notifyChangeSubtitleTrack(a, b, c) {
	            if (f.getStaSM().getLogging().apiCall("notifyChangeSubtitleTrack", a, b, c), null != a) {
	              var e = c || {};e.ns_st_tt = a + "", d(i.SUBS, e, b);
	            }
	          }, notifyChangeCdn: function notifyChangeCdn(a, b, c) {
	            if (f.getStaSM().getLogging().apiCall("notifyChangeCdn", a, b, c), null != a) {
	              var e = c || {};e.ns_st_cdn = a + "", d(i.CDN, e, b);
	            }
	          }, notifyCustomEvent: function notifyCustomEvent(a, b) {
	            f.getStaSM().getLogging().apiCall("notifyCustomEvent", a, b), d(i.CUSTOM, a, b);
	          }, getLabels: function getLabels() {
	            return f.getLabels();
	          }, getState: function getState() {
	            return f.getStaSM().getStateMachine().getCurrentState();
	          }, setLabels: function setLabels(a) {
	            f.setLabels(a);
	          }, getLabel: function getLabel(a) {
	            return f.getLabel(a);
	          }, setLabel: function setLabel(a, b) {
	            f.setLabel(a, b);
	          }, getLoadTimeOffset: function getLoadTimeOffset() {
	            return f.getLoadTimeOffset();
	          }, setLoadTimeOffset: function setLoadTimeOffset(a) {
	            f.setLoadTimeOffset(a);
	          }, setLiveEndpointURL: function setLiveEndpointURL(a) {
	            return f.setLiveEndpointURL(a);
	          }, getLiveEndpointURL: function getLiveEndpointURL() {
	            return f.getLiveEndpointURL();
	          }, isPauseOnBufferingEnabled: function isPauseOnBufferingEnabled() {
	            return f.isPauseOnBufferingEnabled();
	          }, setPauseOnBufferingEnabled: function setPauseOnBufferingEnabled(a) {
	            f.setPauseOnBufferingEnabled(a);
	          }, isThrottlingEnabled: function isThrottlingEnabled() {
	            return f.isThrottlingEnabled();
	          }, setThrottlingEnabled: function setThrottlingEnabled(a) {
	            f.setThrottlingEnabled(a);
	          }, setThrottlingDelay: function setThrottlingDelay(a) {
	            f.setThrottlingDelay(a);
	          }, getThrottlingDelay: function getThrottlingDelay() {
	            return f.getThrottlingDelay();
	          }, setPlaybackIntervalMergeTolerance: function setPlaybackIntervalMergeTolerance(a) {
	            f.getStaSM().getPlaybackSession().getAsset().setPlaybackIntervalMergeTolerance(a);
	          }, getPlaybackIntervalMergeTolerance: function getPlaybackIntervalMergeTolerance() {
	            return f.getStaSM().getPlaybackSession().getAsset().getPlaybackIntervalMergeTolerance();
	          }, createPlaybackSession: function createPlaybackSession(a) {
	            f.getStaSM().getLogging().apiCall("createPlaybackSession", a), a = b.jsonObjectToStringDictionary(a);var c = f.getStaSM().getStateMachine().getCurrentState();c != j.IDLE && (f.getStaSM().getLogging().infoLog("Ending the current Clip. It was in state:", b.stateToString(c)), g.notifyEnd()), f.getStaSM().getPlaybackSession().isPlaybackSessionStarted() && f.resetPlaybackSession(), f.getStaSM().getPlaybackSession().setLabels(a);
	          }, getVersion: function getVersion() {
	            return l.STREAMINGANALYTICS_VERSION;
	          }, addListener: function addListener(a) {
	            f.addListener(a);
	          }, removeListener: function removeListener(a) {
	            f.removeListener(a);
	          }, addMeasurementListener: function addMeasurementListener(a) {
	            f.getStaSM().getEventManager().addMeasurementListener(a);
	          }, removeMeasurementListener: function removeMeasurementListener(a) {
	            f.getStaSM().getEventManager().removeMeasurementListener(a);
	          }, getPlaybackSession: function getPlaybackSession() {
	            return f.getStaSM().getPlaybackSession();
	          }, setExitEndEventEnabled: function setExitEndEventEnabled(a) {
	            h = a;
	          }, isExitEndEventEnabled: function isExitEndEventEnabled() {
	            return h;
	          }, getPlatformAPI: function getPlatformAPI() {
	            return f.getPlatformAPI();
	          }, _getLogHistory: function _getLogHistory() {
	            return f.getStaSM().getLogging().getLogHistory();
	          } }), b.isBrowser() && (window.addEventListener ? (window.addEventListener("beforeunload", e), window.addEventListener("unload", e)) : window.attachEvent && (window.attachEvent("onbeforeunload", e), window.attachEvent("onunload", e))), c();
	      };
	    }();return H.PlayerEvents = i, H.InternalStates = j, H.ImplementationType = k, H.Constants = l, H;
	  }(), a.ReducedRequirementsStreamingAnalytics = a.ReducedRequirementsStreamingAnalytics || function () {
	    var d = { LongFormOnDemand: "12", ShortFormOnDemand: "11", Live: "13", UserGeneratedLongFormOnDemand: "22", UserGeneratedShortFormOnDemand: "21", UserGeneratedLive: "23", Bumper: "99", Other: "00" },
	        e = { LinearOnDemandPreRoll: "11", LinearOnDemandMidRoll: "12", LinearOnDemandPostRoll: "13", LinearLive: "21", BrandedOnDemandPreRoll: "31", BrandedOnDemandMidRoll: "32", BrandedOnDemandPostRoll: "33", BrandedOnDemandContent: "34", BrandedOnDemandLive: "35", Other: "00" },
	        f = a.StreamingAnalytics,
	        g = a.StreamingAnalytics.InternalStates || null,
	        h = a.StreamingAnalytics.ImplementationType || null,
	        i = null != a.StreamingAnalytics.InternalStates && null != a.StreamingAnalytics.ImplementationType,
	        j = a.StreamingAnalytics.Constants,
	        k = function k(a) {
	      function k() {
	        i && (b.exists(a) && (a.customerC2 || a.publisherId) || b.getNamespace().comScore ? t = new f(a) : w.error("Cannot instantiate StreamingAnalytics", "The property publisherId was not provided (or incorrectly provided) in the StreamingAnalytics configuration."), t && t.setLabel("ns_st_it", h.toString(h.REDUCED)));
	      }function l(a) {
	        for (var b in j.STANDARD_METADATA_LABELS) {
	          if (j.STANDARD_METADATA_LABELS.hasOwnProperty(b) && !m(j.STANDARD_METADATA_LABELS[b], q, a)) return !1;
	        }return !0;
	      }function m(a, c, d) {
	        return !!(b.exists(a) && b.exists(c) && b.exists(d) && (c.hasOwnProperty(a) && d.hasOwnProperty(a) && c[a] === d[a] || !c.hasOwnProperty(a) && !d.hasOwnProperty(a)));
	      }function n(a) {
	        t.getPlaybackSession().setAsset(a), q = a, t.notifyPlay();
	      }function o(a) {
	        var b = a || {};b.ns_st_ad = "1", b.ns_st_an = ++r + "", t.getPlaybackSession().setAsset(b), t.notifyPlay(), s = !1;
	      }function p(a, b) {
	        v == u.None && (v = b), s && v == b && l(a) ? (t.getPlaybackSession().getAsset().setLabels(a), t.getState() != g.PLAYING && t.notifyPlay()) : n(a), s = !0, v = b;
	      }var q = null,
	          r = 0,
	          s = !1,
	          t = null,
	          u = { None: 0, AudioContent: 1, VideoContent: 2 },
	          v = u.None,
	          w = new c("TTSTA", (a || {}).debug);b.extend(this, { playVideoAdvertisement: function playVideoAdvertisement(a, c) {
	          if (t) {
	            w.apiCall("playVideoAdvertisement", a, c);var d = { ns_st_ct: "va" };c ? d.ns_st_ct = "va" + c : w.warn("Calling 'playVideoAdvertisement' without specifying the media type as a second parameter."), c != e.LinearLive && c != e.BrandedOnDemandLive || (d.ns_st_li = "1"), a && b.extend(d, a), o(d);
	          }
	        }, playAudioAdvertisement: function playAudioAdvertisement(a, c) {
	          if (t) {
	            w.apiCall("playAudioAdvertisement", a, c);var d = { ns_st_ct: "aa" };c ? d.ns_st_ct = "aa" + c : w.warn("Calling 'playAudioAdvertisement' without specifying the media type as a second parameter."), c != e.LinearLive && c != e.BrandedOnDemandLive || (d.ns_st_li = "1"), a && b.extend(d, a), o(d);
	          }
	        }, playVideoContentPart: function playVideoContentPart(a, c) {
	          if (t) {
	            w.apiCall("playVideoContentPart", a, c);var e = { ns_st_ct: "vc" };c ? e.ns_st_ct = "vc" + c : w.warn("Calling 'playVideoContentPart' without specifying the media type as a second parameter."), c != d.Live && c != d.UserGeneratedLive || (e.ns_st_li = "1"), a && b.extend(e, a), p(e, u.VideoContent);
	          }
	        }, playAudioContentPart: function playAudioContentPart(a, c) {
	          if (t) {
	            w.apiCall("playAudioContentPart", a, c);var e = { ns_st_ct: "ac" };c ? e.ns_st_ct = "ac" + c : w.warn("Calling 'playAudioContentPart' without specifying the media type as a second parameter."), c != d.Live && c != d.UserGeneratedLive || (e.ns_st_li = "1"), a && b.extend(e, a), p(e, u.AudioContent);
	          }
	        }, stop: function stop() {
	          t && (w.apiCall("stop"), t.notifyPause());
	        } }), k();
	    };return k.ContentType = d, k.AdType = e, k;
	  }(), a;
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(286)(module)))

/***/ }),
/* 286 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ })
/******/ ]);