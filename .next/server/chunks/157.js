exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 932:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _asyncToGenerator;
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}


/***/ }),

/***/ 6495:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _extends;
function _extends() {
    return extends_.apply(this, arguments);
}
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 2648:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 1598:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireWildcard;
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}


/***/ }),

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 227:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addBasePath = addBasePath;

var _addPathPrefix = __webpack_require__(1751);

var _normalizeTrailingSlash = __webpack_require__(4969);

var basePath =  false || '';

function addBasePath(path, required) {
  if (false) {}

  return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 7995:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addLocale = void 0;

var _normalizeTrailingSlash = __webpack_require__(4969);

var addLocale = function addLocale(path) {
  if (true) {
    var _require;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((_require = __webpack_require__(3431)).addLocale.apply(_require, [path].concat(args)));
  }

  return path;
};

exports.addLocale = addLocale;

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 7565:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.detectDomainLocale = void 0;

var detectDomainLocale = function detectDomainLocale() {
  if (true) {
    var _require;

    return (_require = __webpack_require__(3539)).detectDomainLocale.apply(_require, arguments);
  }
};

exports.detectDomainLocale = detectDomainLocale;

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 4019:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
var basePath =  false || '';

function getDomainLocale(path, locale, locales, domainLocales) {
  if (true) {
    var normalizeLocalePath = (__webpack_require__(6340).normalizeLocalePath);

    var detectDomainLocale = (__webpack_require__(7565).detectDomainLocale);

    var target = locale || normalizeLocalePath(path, locales).detectedLocale;
    var domain = detectDomainLocale(domainLocales, undefined, target);

    if (domain) {
      var proto = "http".concat(domain.http ? '' : 's', "://");
      var finalLocale = target === domain.defaultLocale ? '' : "/".concat(target);
      return "".concat(proto).concat(domain.domain).concat(basePath).concat(finalLocale).concat(path);
    }

    return false;
  } else {}
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 8771:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hasBasePath = hasBasePath;

var _pathHasPrefix = __webpack_require__(4567);

var basePath =  false || '';

function hasBasePath(path) {
  return (0, _pathHasPrefix).pathHasPrefix(path, basePath);
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 877:
/***/ ((module, exports) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = initHeadManager;
exports.isEqualNode = isEqualNode;
exports.DOMAttributeNames = void 0;

function initHeadManager() {
  return {
    mountedInstances: new Set(),
    updateHead: function updateHead(head) {
      var tags = {};
      head.forEach(function (h) {
        if ( // If the font tag is loaded only on client navigation
        // it won't be inlined. In this case revert to the original behavior
        h.type === 'link' && h.props['data-optimized-fonts']) {
          if (document.querySelector("style[data-href=\"".concat(h.props['data-href'], "\"]"))) {
            return;
          } else {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }
        }

        var components = tags[h.type] || [];
        components.push(h);
        tags[h.type] = components;
      });
      var titleComponent = tags.title ? tags.title[0] : null;
      var title = '';

      if (titleComponent) {
        var children = titleComponent.props.children;
        title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
      }

      if (title !== document.title) document.title = title;
      ['meta', 'base', 'link', 'style', 'script'].forEach(function (type) {
        updateElements(type, tags[type] || []);
      });
    }
  };
}

var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    var nonce = newTag.getAttribute('nonce'); // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
    // be stripped if there is no content security policy response header that includes a nonce.

    if (nonce && !oldTag.getAttribute('nonce')) {
      var cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute('nonce', '');
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }

  return oldTag.isEqualNode(newTag);
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (false) {}

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
    var ref;

    if ((j == null ? void 0 : (ref = j.tagName) == null ? void 0 : ref.toLowerCase()) === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(function (newTag) {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (isEqualNode(oldTag, newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(function (t) {
    var ref;
    return (ref = t.parentNode) == null ? void 0 : ref.removeChild(t);
  });
  newTags.forEach(function (t) {
    return headEl.insertBefore(t, headCountEl);
  });
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 8566:
/***/ ((module, exports, __webpack_require__) => {

"client";
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Image;

var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);

var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);

var _react = _interop_require_wildcard(__webpack_require__(6689));

var _head = _interop_require_default(__webpack_require__(4957));

var _imageConfig = __webpack_require__(5843);

var _useIntersection = __webpack_require__(639);

var _imageConfigContext = __webpack_require__(744);

var _utils = __webpack_require__(9232);

var _normalizeTrailingSlash = __webpack_require__(4969);

function Image(_param) {
  var _linkProps;

  var src = _param.src,
      sizes = _param.sizes,
      _param$unoptimized = _param.unoptimized,
      unoptimized = _param$unoptimized === void 0 ? false : _param$unoptimized,
      _param$priority = _param.priority,
      priority = _param$priority === void 0 ? false : _param$priority,
      loading = _param.loading,
      _param$lazyRoot = _param.lazyRoot,
      lazyRoot = _param$lazyRoot === void 0 ? null : _param$lazyRoot,
      lazyBoundary = _param.lazyBoundary,
      className = _param.className,
      quality = _param.quality,
      width = _param.width,
      height = _param.height,
      style = _param.style,
      objectFit = _param.objectFit,
      objectPosition = _param.objectPosition,
      onLoadingComplete = _param.onLoadingComplete,
      _param$placeholder = _param.placeholder,
      placeholder = _param$placeholder === void 0 ? 'empty' : _param$placeholder,
      blurDataURL = _param.blurDataURL,
      all = _object_without_properties_loose(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "style", "objectFit", "objectPosition", "onLoadingComplete", "placeholder", "blurDataURL"]);

  var configContext = (0, _react).useContext(_imageConfigContext.ImageConfigContext);
  var config = (0, _react).useMemo(function () {
    var c = configEnv || configContext || _imageConfig.imageConfigDefault;
    var allSizes = [].concat(_toConsumableArray(c.deviceSizes), _toConsumableArray(c.imageSizes)).sort(function (a, b) {
      return a - b;
    });
    var deviceSizes = c.deviceSizes.sort(function (a, b) {
      return a - b;
    });
    return _extends({}, c, {
      allSizes: allSizes,
      deviceSizes: deviceSizes
    });
  }, [configContext]);
  var rest = all;
  var layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread on <img>:

    delete rest.layout;
  }

  var loader = defaultImageLoader;

  if ('loader' in rest) {
    if (rest.loader) {
      var customImageLoader = rest.loader;

      var _tmp;

      _tmp = function _tmp(obj) {
        var _ = obj.config,
            opts = _object_without_properties_loose(obj, ["config"]); // The config object is internal only so we must
        // not pass it to the user-defined loader()


        return customImageLoader(opts);
      }, loader = _tmp, _tmp;
    } // Remove property so it's not spread on <img>


    delete rest.loader;
  }

  var staticSrc = '';

  if (isStaticImport(src)) {
    var staticImageData = isStaticRequire(src) ? src["default"] : src;

    if (!staticImageData.src) {
      throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(staticImageData)));
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(staticImageData)));
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  var isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (config.unoptimized) {
    unoptimized = true;
  }

  var _useState = (0, _react).useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      blurComplete = _useState2[0],
      setBlurComplete = _useState2[1];

  var _useIntersection2 = (0, _useIntersection).useIntersection({
    rootRef: lazyRoot,
    rootMargin: lazyBoundary || '200px',
    disabled: !isLazy
  }),
      _useIntersection3 = _slicedToArray(_useIntersection2, 3),
      setIntersection = _useIntersection3[0],
      isIntersected = _useIntersection3[1],
      resetIntersected = _useIntersection3[2];

  var isVisible = !isLazy || isIntersected;
  var wrapperStyle = {
    boxSizing: 'border-box',
    display: 'block',
    overflow: 'hidden',
    width: 'initial',
    height: 'initial',
    background: 'none',
    opacity: 1,
    border: 0,
    margin: 0,
    padding: 0
  };
  var sizerStyle = {
    boxSizing: 'border-box',
    display: 'block',
    width: 'initial',
    height: 'initial',
    background: 'none',
    opacity: 1,
    border: 0,
    margin: 0,
    padding: 0
  };
  var hasSizer = false;
  var sizerSvgUrl;
  var layoutStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit: objectFit,
    objectPosition: objectPosition
  };
  var widthInt = getInt(width);
  var heightInt = getInt(height);
  var qualityInt = getInt(quality);

  if (false) { var overwrittenStyles, url, urlStr, VALID_BLUR_EXT; }

  var imgStyle = Object.assign({}, style, layoutStyle);
  var blurStyle = placeholder === 'blur' && !blurComplete ? {
    backgroundSize: objectFit || 'cover',
    backgroundPosition: objectPosition || '0% 0%',
    filter: 'blur(20px)',
    backgroundImage: "url(\"".concat(blurDataURL, "\")")
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle.display = 'block';
    wrapperStyle.position = 'absolute';
    wrapperStyle.top = 0;
    wrapperStyle.left = 0;
    wrapperStyle.bottom = 0;
    wrapperStyle.right = 0;
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    var quotient = heightInt / widthInt;
    var paddingTop = isNaN(quotient) ? '100%' : "".concat(quotient * 100, "%");

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle.display = 'block';
      wrapperStyle.position = 'relative';
      hasSizer = true;
      sizerStyle.paddingTop = paddingTop;
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle.display = 'inline-block';
      wrapperStyle.position = 'relative';
      wrapperStyle.maxWidth = '100%';
      hasSizer = true;
      sizerStyle.maxWidth = '100%';
      sizerSvgUrl = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(widthInt, "%27%20height=%27").concat(heightInt, "%27/%3e");
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle.display = 'inline-block';
      wrapperStyle.position = 'relative';
      wrapperStyle.width = widthInt;
      wrapperStyle.height = heightInt;
    }
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  var imgAttributes = {
    src: emptyDataURL,
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      config: config,
      src: src,
      unoptimized: unoptimized,
      layout: layout,
      width: widthInt,
      quality: qualityInt,
      sizes: sizes,
      loader: loader
    });
  }

  var srcString = src;

  if (false) { var fullUrl; }

  var imageSrcSetPropName = 'imagesrcset';
  var imageSizesPropName = 'imagesizes';

  if (false) {}

  var linkProps = (_linkProps = {}, _defineProperty(_linkProps, imageSrcSetPropName, imgAttributes.srcSet), _defineProperty(_linkProps, imageSizesPropName, imgAttributes.sizes), _defineProperty(_linkProps, "crossOrigin", rest.crossOrigin), _linkProps);
  var useLayoutEffect =  true ? _react["default"].useEffect : 0;
  var onLoadingCompleteRef = (0, _react).useRef(onLoadingComplete);
  var previousImageSrc = (0, _react).useRef(src);
  (0, _react).useEffect(function () {
    onLoadingCompleteRef.current = onLoadingComplete;
  }, [onLoadingComplete]);
  useLayoutEffect(function () {
    if (previousImageSrc.current !== src) {
      resetIntersected();
      previousImageSrc.current = src;
    }
  }, [resetIntersected, src]);

  var imgElementArgs = _extends({
    isLazy: isLazy,
    imgAttributes: imgAttributes,
    heightInt: heightInt,
    widthInt: widthInt,
    qualityInt: qualityInt,
    layout: layout,
    className: className,
    imgStyle: imgStyle,
    blurStyle: blurStyle,
    loading: loading,
    config: config,
    unoptimized: unoptimized,
    placeholder: placeholder,
    loader: loader,
    srcString: srcString,
    onLoadingCompleteRef: onLoadingCompleteRef,
    setBlurComplete: setBlurComplete,
    setIntersection: setIntersection,
    isVisible: isVisible,
    noscriptSizes: sizes
  }, rest);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    style: wrapperStyle
  }, hasSizer ? /*#__PURE__*/_react["default"].createElement("span", {
    style: sizerStyle
  }, sizerSvgUrl ? /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      display: 'block',
      maxWidth: '100%',
      width: 'initial',
      height: 'initial',
      background: 'none',
      opacity: 1,
      border: 0,
      margin: 0,
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: sizerSvgUrl
  }) : null) : null, /*#__PURE__*/_react["default"].createElement(ImageElement, Object.assign({}, imgElementArgs))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("link", Object.assign({
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src
  }, linkProps))) : null);
}

'client';

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

var configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
var loadedImageURLs = new Set();
var allImgs = new Map();
var perfObserver;
var emptyDataURL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

var VALID_LOADING_VALUES = (/* unused pure expression or super */ null && (['lazy', 'eager', undefined]));

function imgixLoader(_ref) {
  var config = _ref.config,
      src = _ref.src,
      width = _ref.width,
      quality = _ref.quality;
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  var url = new URL("".concat(config.path).concat(normalizeSrc(src)));
  var params = url.searchParams; // auto params can be combined with comma separation, or reiteration

  params.set('auto', params.getAll('auto').join(',') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader(_ref2) {
  var config = _ref2.config,
      src = _ref2.src,
      width = _ref2.width;
  return "".concat(config.path).concat(normalizeSrc(src), "?imwidth=").concat(width);
}

function cloudinaryLoader(_ref3) {
  var config = _ref3.config,
      src = _ref3.src,
      width = _ref3.width,
      quality = _ref3.quality;
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  var params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  var paramsString = params.join(',') + '/';
  return "".concat(config.path).concat(paramsString).concat(normalizeSrc(src));
}

function customLoader(_ref4) {
  var src = _ref4.src;
  throw new Error("Image with src \"".concat(src, "\" is missing \"loader\" prop.") + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
}

function defaultLoader(_ref5) {
  var config = _ref5.config,
      src = _ref5.src,
      width = _ref5.width,
      quality = _ref5.quality;

  if (false) { var _require2, hasMatch, parsedSrc, missingValues; }

  if (src.endsWith('.svg') && !config.dangerouslyAllowSVG) {
    // Special case to make svg serve as-is to avoid proxying
    // through the built-in Image Optimization API.
    return src;
  }

  return "".concat((0, _normalizeTrailingSlash).normalizePathTrailingSlash(config.path), "?url=").concat(encodeURIComponent(src), "&w=").concat(width, "&q=").concat(quality || 75);
}

var loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
var VALID_LAYOUT_VALUES = (/* unused pure expression or super */ null && (['fill', 'fixed', 'intrinsic', 'responsive', undefined]));

function isStaticRequire(src) {
  return src["default"] !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return _typeof(src) === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

function getWidths(_ref6, width, layout, sizes) {
  var deviceSizes = _ref6.deviceSizes,
      allSizes = _ref6.allSizes;

  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    var viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    var percentSizes = [];

    for (var match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      var smallestRatio = Math.min.apply(Math, percentSizes) * 0.01;
      return {
        widths: allSizes.filter(function (s) {
          return s >= deviceSizes[0] * smallestRatio;
        }),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: deviceSizes,
      kind: 'w'
    };
  }

  var widths = _toConsumableArray(new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(function (w) {
    return allSizes.find(function (p) {
      return p >= w;
    }) || allSizes[allSizes.length - 1];
  })));

  return {
    widths: widths,
    kind: 'x'
  };
}

function generateImgAttrs(_ref7) {
  var config = _ref7.config,
      src = _ref7.src,
      unoptimized = _ref7.unoptimized,
      layout = _ref7.layout,
      width = _ref7.width,
      quality = _ref7.quality,
      sizes = _ref7.sizes,
      loader = _ref7.loader;

  if (unoptimized) {
    return {
      src: src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  var _getWidths = getWidths(config, width, layout, sizes),
      widths = _getWidths.widths,
      kind = _getWidths.kind;

  var last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map(function (w, i) {
      return "".concat(loader({
        config: config,
        src: src,
        quality: quality,
        width: w
      }), " ").concat(kind === 'w' ? w : i + 1).concat(kind);
    }).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      config: config,
      src: src,
      quality: quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  var ref;
  var loaderKey = ((ref = loaderProps.config) == null ? void 0 : ref.loader) || 'default';
  var load = loaders.get(loaderKey);

  if (load) {
    return load(loaderProps);
  }

  throw new Error("Unknown \"loader\" found in \"next.config.js\". Expected: ".concat(_imageConfig.VALID_LOADERS.join(', '), ". Received: ").concat(loaderKey));
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingCompleteRef, setBlurComplete) {
  if (!img || img.src === emptyDataURL || img['data-loaded-src'] === src) {
    return;
  }

  img['data-loaded-src'] = src;
  var p = 'decode' in img ? img.decode() : Promise.resolve();
  p["catch"](function () {}).then(function () {
    if (!img.parentNode) {
      // Exit early in case of race condition:
      // - onload() is called
      // - decode() is called but incomplete
      // - unmount is called
      // - decode() completes
      return;
    }

    loadedImageURLs.add(src);

    if (placeholder === 'blur') {
      setBlurComplete(true);
    }

    if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
      var naturalWidth = img.naturalWidth,
          naturalHeight = img.naturalHeight; // Pass back read-only primitive values but not the
      // underlying DOM element because it could be misused.

      onLoadingCompleteRef.current({
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight
      });
    }

    if (false) { var parent, ref; }
  });
}

var ImageElement = function ImageElement(_param) {
  var imgAttributes = _param.imgAttributes,
      heightInt = _param.heightInt,
      widthInt = _param.widthInt,
      qualityInt = _param.qualityInt,
      layout = _param.layout,
      className = _param.className,
      imgStyle = _param.imgStyle,
      blurStyle = _param.blurStyle,
      isLazy = _param.isLazy,
      placeholder = _param.placeholder,
      loading = _param.loading,
      srcString = _param.srcString,
      config = _param.config,
      unoptimized = _param.unoptimized,
      loader = _param.loader,
      onLoadingCompleteRef = _param.onLoadingCompleteRef,
      setBlurComplete = _param.setBlurComplete,
      setIntersection = _param.setIntersection,
      _onLoad = _param.onLoad,
      _onError = _param.onError,
      isVisible = _param.isVisible,
      noscriptSizes = _param.noscriptSizes,
      rest = _object_without_properties_loose(_param, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "layout", "className", "imgStyle", "blurStyle", "isLazy", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadingCompleteRef", "setBlurComplete", "setIntersection", "onLoad", "onError", "isVisible", "noscriptSizes"]);

  loading = isLazy ? 'lazy' : loading;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    style: _extends({}, imgStyle, blurStyle),
    ref: (0, _react).useCallback(function (img) {
      if (false) {}

      setIntersection(img);

      if (img == null ? void 0 : img.complete) {
        handleLoading(img, srcString, layout, placeholder, onLoadingCompleteRef, setBlurComplete);
      }
    }, [setIntersection, srcString, layout, placeholder, onLoadingCompleteRef, setBlurComplete]),
    onLoad: function onLoad(event) {
      var img = event.currentTarget;
      handleLoading(img, srcString, layout, placeholder, onLoadingCompleteRef, setBlurComplete);

      if (_onLoad) {
        _onLoad(event);
      }
    },
    onError: function onError(event) {
      if (placeholder === 'blur') {
        // If the real image fails to load, this will still remove the placeholder.
        setBlurComplete(true);
      }

      if (_onError) {
        _onError(event);
      }
    }
  })), (isLazy || placeholder === 'blur') && /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, generateImgAttrs({
    config: config,
    src: srcString,
    unoptimized: unoptimized,
    layout: layout,
    width: widthInt,
    quality: qualityInt,
    sizes: noscriptSizes,
    loader: loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    // @ts-ignore - TODO: upgrade to `@types/react@17`
    loading: loading
  }))));
};

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 7942:
/***/ ((module, exports, __webpack_require__) => {

"client";
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);

var _react = _interop_require_default(__webpack_require__(6689));

var _router = __webpack_require__(5781);

var _addLocale = __webpack_require__(7995);

var _routerContext = __webpack_require__(4964);

var _appRouterContext = __webpack_require__(3280);

var _useIntersection = __webpack_require__(639);

var _getDomainLocale = __webpack_require__(4019);

var _addBasePath = __webpack_require__(227);

'client';
var prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  Promise.resolve(router.prefetch(href, as, options))["catch"](function (err) {
    if (false) {}
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
  var nodeName = e.currentTarget.nodeName; // anchors inside an svg have a lowercase nodeName

  var isAnchorNodeName = nodeName.toUpperCase() === 'A';

  if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault();

  var navigate = function navigate() {
    // If the router is an NextRouter instance it will have `beforePopState`
    if ('beforePopState' in router) {
      router[replace ? 'replace' : 'push'](href, as, {
        shallow: shallow,
        locale: locale,
        scroll: scroll
      });
    } else {
      // If `beforePopState` doesn't exist on the router it's the AppRouter.
      var method = replace ? 'replace' : 'push';
      router[method](href, {
        forceOptimisticNavigation: !prefetchEnabled
      });
    }
  };

  if (isAppRouter) {
    // @ts-expect-error startTransition exists.
    _react["default"].startTransition(navigate);
  } else {
    navigate();
  }
}

var Link = /*#__PURE__*/_react["default"].forwardRef(function LinkComponent(props, forwardedRef) {
  if (false) { var hasWarned, optionalProps, optionalPropsGuard, requiredProps, requiredPropsGuard, createPropError; }

  var children;

  var hrefProp = props.href,
      asProp = props.as,
      childrenProp = props.children,
      prefetchProp = props.prefetch,
      passHref = props.passHref,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale,
      _onClick = props.onClick,
      _onMouseEnter = props.onMouseEnter,
      _onTouchStart = props.onTouchStart,
      _props$legacyBehavior = props.legacyBehavior,
      legacyBehavior = _props$legacyBehavior === void 0 ? Boolean(false) !== true : _props$legacyBehavior,
      restProps = _object_without_properties_loose(props, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);

  children = childrenProp;

  if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  }

  var p = prefetchProp !== false;

  var router = _react["default"].useContext(_routerContext.RouterContext); // TODO-APP: type error. Remove `as any`


  var appRouter = _react["default"].useContext(_appRouterContext.AppRouterContext);

  if (appRouter) {
    router = appRouter;
  }

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _resolveHref = (0, _router).resolveHref(router, hrefProp, true),
        _resolveHref2 = _slicedToArray(_resolveHref, 2),
        resolvedHref = _resolveHref2[0],
        resolvedAs = _resolveHref2[1];

    return {
      href: resolvedHref,
      as: asProp ? (0, _router).resolveHref(router, asProp) : resolvedAs || resolvedHref
    };
  }, [router, hrefProp, asProp]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var previousHref = _react["default"].useRef(href);

  var previousAs = _react["default"].useRef(as); // This will return the first child, if multiple are provided it will throw an error


  var child;

  if (legacyBehavior) {
    if (false) {} else {
      child = _react["default"].Children.only(children);
    }
  }

  var childRef = legacyBehavior ? child && _typeof(child) === 'object' && child.ref : forwardedRef;

  var _useIntersection2 = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  }),
      _useIntersection3 = _slicedToArray(_useIntersection2, 3),
      setIntersectionRef = _useIntersection3[0],
      isVisible = _useIntersection3[1],
      resetVisible = _useIntersection3[2];

  var setRef = _react["default"].useCallback(function (el) {
    // Before the link getting observed, check if visible state need to be reset
    if (previousAs.current !== as || previousHref.current !== href) {
      resetVisible();
      previousAs.current = as;
      previousHref.current = href;
    }

    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (_typeof(childRef) === 'object') {
        childRef.current = el;
      }
    }
  }, [as, childRef, href, resetVisible, setIntersectionRef]);

  _react["default"].useEffect(function () {
    var shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (false) {}

      if (!legacyBehavior && typeof _onClick === 'function') {
        _onClick(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale, Boolean(appRouter), p);
      }
    },
    onMouseEnter: function onMouseEnter(e) {
      if (!legacyBehavior && typeof _onMouseEnter === 'function') {
        _onMouseEnter(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      } // Check for not prefetch disabled in page using appRouter


      if (!(!p && appRouter)) {
        if ((0, _router).isLocalURL(href)) {
          prefetch(router, href, as, {
            priority: true
          });
        }
      }
    },
    onTouchStart: function onTouchStart(e) {
      if (!legacyBehavior && typeof _onTouchStart === 'function') {
        _onTouchStart(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
        child.props.onTouchStart(e);
      } // Check for not prefetch disabled in page using appRouter


      if (!(!p && appRouter)) {
        if ((0, _router).isLocalURL(href)) {
          prefetch(router, href, as, {
            priority: true
          });
        }
      }
    }
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user

  if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _getDomainLocale).getDomainLocale(as, curLocale, router.locales, router.domainLocales);
    childProps.href = localeDomain || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return legacyBehavior ? /*#__PURE__*/_react["default"].cloneElement(child, childProps) : /*#__PURE__*/_react["default"].createElement("a", Object.assign({}, restProps, childProps), children);
});

var _default = Link;
exports["default"] = _default;

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 6340:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizeLocalePath = void 0;

var normalizeLocalePath = function normalizeLocalePath(pathname, locales) {
  if (true) {
    return (__webpack_require__(4014).normalizeLocalePath)(pathname, locales);
  }

  return {
    pathname: pathname,
    detectedLocale: undefined
  };
};

exports.normalizeLocalePath = normalizeLocalePath;

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 4969:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizePathTrailingSlash = void 0;

var _removeTrailingSlash = __webpack_require__(3297);

var _parsePath = __webpack_require__(8854);

var normalizePathTrailingSlash = function normalizePathTrailingSlash(path) {
  if (!path.startsWith('/') || undefined) {
    return path;
  }

  var _parsePath2 = (0, _parsePath).parsePath(path),
      pathname = _parsePath2.pathname,
      query = _parsePath2.query,
      hash = _parsePath2.hash;

  if (false) {}

  return "".concat((0, _removeTrailingSlash).removeTrailingSlash(pathname)).concat(query).concat(hash);
};

exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 5678:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeBasePath = removeBasePath;

var _hasBasePath = __webpack_require__(8771);

var basePath =  false || '';

function removeBasePath(path) {
  if (false) {}

  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = "/".concat(path);
  return path;
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 9781:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeLocale = removeLocale;

var _parsePath = __webpack_require__(8854);

function removeLocale(path, locale) {
  if (true) {
    var _parsePath3 = (0, _parsePath).parsePath(path),
        pathname = _parsePath3.pathname;

    var pathLower = pathname.toLowerCase();
    var localeLower = locale == null ? void 0 : locale.toLowerCase();
    return locale && (pathLower.startsWith("/".concat(localeLower, "/")) || pathLower === "/".concat(localeLower)) ? "".concat(pathname.length === locale.length + 1 ? "/" : "").concat(path.slice(locale.length + 1)) : path;
  }

  return path;
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 6286:
/***/ ((module, exports) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 4989:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _getAssetPathFromRoute = _interop_require_default(__webpack_require__(9565));

var _trustedTypes = __webpack_require__(5740);

var _requestIdleCallback = __webpack_require__(6286); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator() // eslint-disable-next-line no-sequences
  .then(function (value) {
    return resolver(value), value;
  })["catch"](function (err) {
    map["delete"](key);
    throw err;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    var selector = "\n      link[rel=\"prefetch\"][href^=\"".concat(href, "\"],\n      link[rel=\"preload\"][href^=\"").concat(href, "\"],\n      script[src^=\"").concat(href, "\"]");

    if (document.querySelector(selector)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


var devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise(function (resolve, reject) {
    var cancelled = false;
    p.then(function (r) {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    })["catch"](reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (false) {}

    if (true) {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return setTimeout(function () {
          if (!cancelled) {
            reject(err);
          }
        }, ms);
      });
    }
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) { var scriptUrl; }

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }).map(function (v) {
        return (0, _trustedTypes).__unsafeCreateTrustedScriptURL(v);
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    // With HMR we might need to "reload" scripts when they are
    // disposed and readded. Executing scripts twice has no functional
    // differences
    if (true) {
      var prom = loadedScripts.get(src.toString());

      if (prom) {
        return prom;
      } // Skip executing script if it's already in the DOM:


      if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
        return Promise.resolve();
      }

      loadedScripts.set(src.toString(), prom = appendScript(src));
      return prom;
    } else {}
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    })["catch"](function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      (execute ? Promise.resolve().then(function () {
        return execute();
      }).then(function (exports) {
        return {
          component: exports && exports["default"] || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }) : Promise.resolve(undefined)).then(function (input) {
        var old = entrypoints.get(route);

        if (old && 'resolve' in old) {
          if (input) {
            entrypoints.set(route, input);
            old.resolve(input);
          }
        } else {
          if (input) {
            entrypoints.set(route, input);
          } else {
            entrypoints["delete"](route);
          } // when this entrypoint has been resolved before
          // the route is outdated and we want to invalidate
          // this cache entry


          routes["delete"](route);
        }
      });
    },
    loadRoute: function loadRoute(route, prefetch) {
      var _this = this;

      return withFuture(route, routes, function () {
        var devBuildPromiseResolve;

        if (false) {}

        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(function (_ref) {
          var scripts = _ref.scripts,
              css = _ref.css;
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(function (res) {
          return _this.whenEntrypoint(route).then(function (entrypoint) {
            return {
              entrypoint: entrypoint,
              styles: res[1]
            };
          });
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route)))).then(function (_ref2) {
          var entrypoint = _ref2.entrypoint,
              styles = _ref2.styles;
          var res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        })["catch"](function (err) {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        })["finally"](function () {
          return devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve();
        });
      });
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script.toString(), 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback).requestIdleCallback(function () {
          return _this2.loadRoute(route, true)["catch"](function () {});
        });
      })["catch"]( // swallow prefetch errors
      function () {});
    }
  };
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 2189:
/***/ ((module, exports, __webpack_require__) => {

"client";
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.handleClientScriptLoad = handleClientScriptLoad;
exports.initScriptLoader = initScriptLoader;
exports["default"] = void 0;

var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);

var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);

var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);

var _react = _interop_require_wildcard(__webpack_require__(6689));

var _headManagerContext = __webpack_require__(2796);

var _headManager = __webpack_require__(877);

var _requestIdleCallback = __webpack_require__(6286);

'client';
var ScriptCache = new Map();
var LoadCache = new Set();
var ignoreProps = ['onLoad', 'onReady', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

var loadScript = function loadScript(props) {
  var src = props.src,
      id = props.id,
      _props$onLoad = props.onLoad,
      onLoad = _props$onLoad === void 0 ? function () {} : _props$onLoad,
      _props$onReady = props.onReady,
      onReady = _props$onReady === void 0 ? null : _props$onReady,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
      _props$children = props.children,
      children = _props$children === void 0 ? '' : _props$children,
      _props$strategy = props.strategy,
      strategy = _props$strategy === void 0 ? 'afterInteractive' : _props$strategy,
      onError = props.onError;
  var cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
    // This is to make sure the same remote script will only load once, but "onLoad" are executed in order

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }
  /** Execute after the script first loaded */


  var afterLoad = function afterLoad() {
    // Run onReady for the first time after load event
    if (onReady) {
      onReady();
    } // add cacheKey to LoadCache when load successfully


    LoadCache.add(cacheKey);
  };

  var el = document.createElement('script');
  var loadPromise = new Promise(function (resolve, reject) {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }

      afterLoad();
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  })["catch"](function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
    afterLoad();
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
    afterLoad();
  } else if (src) {
    el.src = src; // do not add cacheKey into LoadCache for remote script here
    // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)

    ScriptCache.set(src, loadPromise);
  }

  for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i2 = _slicedToArray(_Object$entries[_i], 2),
        k = _Object$entries$_i2[0],
        value = _Object$entries$_i2[1];

    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    var attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  if (strategy === 'worker') {
    el.setAttribute('type', 'text/partytown');
  }

  el.setAttribute('data-nscript', strategy);
  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  var _props$strategy2 = props.strategy,
      strategy = _props$strategy2 === void 0 ? 'afterInteractive' : _props$strategy2;

  if (strategy === 'lazyOnload') {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return loadScript(props);
      });
    });
  } else {
    loadScript(props);
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(function () {
      return loadScript(props);
    });
  } else {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return loadScript(props);
      });
    });
  }
}

function addBeforeInteractiveToCache() {
  var scripts = [].concat(_toConsumableArray(document.querySelectorAll('[data-nscript="beforeInteractive"]')), _toConsumableArray(document.querySelectorAll('[data-nscript="beforePageRender"]')));
  scripts.forEach(function (script) {
    var cacheKey = script.id || script.getAttribute('src');
    LoadCache.add(cacheKey);
  });
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
  addBeforeInteractiveToCache();
}

function Script(props) {
  var id = props.id,
      _props$src = props.src,
      src = _props$src === void 0 ? '' : _props$src,
      _props$onLoad2 = props.onLoad,
      onLoad = _props$onLoad2 === void 0 ? function () {} : _props$onLoad2,
      _props$onReady2 = props.onReady,
      onReady = _props$onReady2 === void 0 ? null : _props$onReady2,
      _props$strategy3 = props.strategy,
      strategy = _props$strategy3 === void 0 ? 'afterInteractive' : _props$strategy3,
      onError = props.onError,
      restProps = _object_without_properties_loose(props, ["id", "src", "onLoad", "onReady", "strategy", "onError"]); // Context is available only during SSR


  var _useContext = (0, _react).useContext(_headManagerContext.HeadManagerContext),
      updateScripts = _useContext.updateScripts,
      scripts = _useContext.scripts,
      getIsSsr = _useContext.getIsSsr;
  /**
  * - First mount:
  *   1. The useEffect for onReady executes
  *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
  *      onReady is skipped, set hasOnReadyEffectCalled.current to true
  *   3. The useEffect for loadScript executes
  *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
  *      Once the script is loaded, the onLoad and onReady will be called by then
  *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
  *   5. The useEffect for onReady executes again
  *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
  *   7. The useEffect for loadScript executes again
  *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
  *
  * - Second mount:
  *   1. The useEffect for onReady executes
  *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
  *      onReady is called, set hasOnReadyEffectCalled.current to true
  *   3. The useEffect for loadScript executes
  *   4. The script is already loaded, loadScript bails out
  *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
  *   5. The useEffect for onReady executes again
  *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
  *   7. The useEffect for loadScript executes again
  *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
  */


  var hasOnReadyEffectCalled = (0, _react).useRef(false);
  (0, _react).useEffect(function () {
    var cacheKey = id || src;

    if (!hasOnReadyEffectCalled.current) {
      // Run onReady if script has loaded before but component is re-mounted
      if (onReady && cacheKey && LoadCache.has(cacheKey)) {
        onReady();
      }

      hasOnReadyEffectCalled.current = true;
    }
  }, [onReady, id, src]);
  var hasLoadScriptEffectCalled = (0, _react).useRef(false);
  (0, _react).useEffect(function () {
    if (!hasLoadScriptEffectCalled.current) {
      if (strategy === 'afterInteractive') {
        loadScript(props);
      } else if (strategy === 'lazyOnload') {
        loadLazyScript(props);
      }

      hasLoadScriptEffectCalled.current = true;
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive' || strategy === 'worker') {
    if (updateScripts) {
      scripts[strategy] = (scripts[strategy] || []).concat([_extends({
        id: id,
        src: src,
        onLoad: onLoad,
        onReady: onReady,
        onError: onError
      }, restProps)]);
      updateScripts(scripts);
    } else if (getIsSsr && getIsSsr()) {
      // Script has already loaded during SSR
      LoadCache.add(id || src);
    } else if (getIsSsr && !getIsSsr()) {
      loadScript(props);
    }
  }

  return null;
}

Object.defineProperty(Script, '__nextScript', {
  value: true
});
var _default = Script;
exports["default"] = _default;

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 5740:
/***/ ((module, exports) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.__unsafeCreateTrustedScriptURL = __unsafeCreateTrustedScriptURL;
/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */

var policy;
/**
 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
 * here or set to null if Trusted Types is not supported in the browser.
 */

function getPolicy() {
  if (typeof policy === 'undefined' && false) { var ref; }

  return policy;
}

function __unsafeCreateTrustedScriptURL(url) {
  var ref;
  return ((ref = getPolicy()) == null ? void 0 : ref.createScriptURL(url)) || url;
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 639:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(6689);

var _requestIdleCallback = __webpack_require__(6286);

var hasIntersectionObserver = typeof IntersectionObserver === 'function';
var observers = new Map();
var idList = [];

function createObserver(options) {
  var id = {
    root: options.root || null,
    margin: options.rootMargin || ''
  };
  var existing = idList.find(function (obj) {
    return obj.root === id.root && obj.margin === id.margin;
  });
  var instance;

  if (existing) {
    instance = observers.get(existing);

    if (instance) {
      return instance;
    }
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  instance = {
    id: id,
    observer: observer,
    elements: elements
  };
  idList.push(id);
  observers.set(id, instance);
  return instance;
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
      var index = idList.findIndex(function (obj) {
        return obj.root === id.root && obj.margin === id.margin;
      });

      if (index > -1) {
        idList.splice(index, 1);
      }
    }
  };
}

function useIntersection(_ref) {
  var rootRef = _ref.rootRef,
      rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;

  var _useState = (0, _react).useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react).useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      element = _useState4[0],
      setElement = _useState4[1];

  (0, _react).useEffect(function () {
    if (hasIntersectionObserver) {
      if (isDisabled || visible) return;

      if (element && element.tagName) {
        var unobserve = observe(element, function (isVisible) {
          return isVisible && setVisible(isVisible);
        }, {
          root: rootRef == null ? void 0 : rootRef.current,
          rootMargin: rootMargin
        });
        return unobserve;
      }
    } else {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback).requestIdleCallback(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
        };
      }
    }
  }, [element, isDisabled, rootMargin, rootRef, visible]);
  var resetVisible = (0, _react).useCallback(function () {
    setVisible(false);
  }, []);
  return [setElement, visible, resetVisible];
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 3579:
/***/ ((module, exports, __webpack_require__) => {

"client";
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = dynamic;
exports.noSSR = noSSR;

var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _react = _interop_require_default(__webpack_require__(6689));

var _loadable = _interop_require_default(__webpack_require__(5832));

function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = (options == null ? void 0 : options.suspense) ? {} : {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (false) {}

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (_typeof(dynamicOptions) === 'object') {
    loadableOptions = _extends({}, loadableOptions, dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _extends({}, loadableOptions, options); // Error if Fizz rendering is not enabled and `suspense` option is set to true

  if ( true && loadableOptions.suspense) {
    throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");
  }

  if (loadableOptions.suspense) {
    if (false) {}

    delete loadableOptions.ssr;
    delete loadableOptions.loading;
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _extends({}, loadableOptions, loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false}).
  // skip `ssr` for suspense mode and opt-in React.lazy directly


  if (typeof loadableOptions.ssr === 'boolean' && !loadableOptions.suspense) {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

'client';
var isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 5781:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.matchesMiddleware = matchesMiddleware;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.createKey = createKey;
exports["default"] = void 0;

var _async_to_generator = (__webpack_require__(932)/* ["default"] */ .Z);

var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);

var _normalizeTrailingSlash = __webpack_require__(4969);

var _removeTrailingSlash = __webpack_require__(3297);

var _routeLoader = __webpack_require__(4989);

var _script = __webpack_require__(2189);

var _isError = _interop_require_wildcard(__webpack_require__(676));

var _denormalizePagePath = __webpack_require__(4406);

var _normalizeLocalePath = __webpack_require__(4014);

var _mitt = _interop_require_default(__webpack_require__(8020));

var _utils = __webpack_require__(9232);

var _isDynamic = __webpack_require__(1428);

var _parseRelativeUrl = __webpack_require__(1292);

var _querystring = __webpack_require__(979);

var _resolveRewrites = _interop_require_default(__webpack_require__(6052));

var _routeMatcher = __webpack_require__(4226);

var _routeRegex = __webpack_require__(5052);

var _formatUrl = __webpack_require__(3938);

var _detectDomainLocale = __webpack_require__(7565);

var _parsePath = __webpack_require__(8854);

var _addLocale = __webpack_require__(7995);

var _removeLocale = __webpack_require__(9781);

var _removeBasePath = __webpack_require__(5678);

var _addBasePath = __webpack_require__(227);

var _hasBasePath = __webpack_require__(8771);

var _getNextPathnameInfo = __webpack_require__(5789);

var _formatNextPathnameInfo = __webpack_require__(299);

var _compareStates = __webpack_require__(6220);

var _isBot = __webpack_require__(1897);

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function matchesMiddleware(options) {
  return _matchesMiddleware.apply(this, arguments);
}

function _matchesMiddleware() {
  _matchesMiddleware = _async_to_generator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(options) {
    var matchers, _parsePath2, asPathname, cleanedAs, asWithBasePathAndLocale;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Promise.resolve(options.router.pageLoader.getMiddleware());

        case 2:
          matchers = _context.sent;

          if (matchers) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", false);

        case 5:
          _parsePath2 = (0, _parsePath).parsePath(options.asPath), asPathname = _parsePath2.pathname; // remove basePath first since path prefix has to be in the order of `/${basePath}/${locale}`

          cleanedAs = (0, _hasBasePath).hasBasePath(asPathname) ? (0, _removeBasePath).removeBasePath(asPathname) : asPathname;
          asWithBasePathAndLocale = (0, _addBasePath).addBasePath((0, _addLocale).addLocale(cleanedAs, options.locale)); // Check only path match on client. Matching "has" should be done on server
          // where we can access more info such as headers, HttpOnly cookie, etc.

          return _context.abrupt("return", matchers.some(function (m) {
            return new RegExp(m.regexp).test(asWithBasePathAndLocale);
          }));

        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _matchesMiddleware.apply(this, arguments);
}

function stripOrigin(url) {
  var origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function omit(object, keys) {
  var omitted = {};
  Object.keys(object).forEach(function (key) {
    if (!keys.includes(key)) {
      omitted[key] = object[key];
    }
  });
  return omitted;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (!(0, _utils).isAbsoluteUrl(url)) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils).getLocationOrigin();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && (0, _hasBasePath).hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    function (segment) {
      return encodeURIComponent(segment);
    }).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base;
  var urlAsString = typeof href === 'string' ? href : (0, _formatUrl).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  var urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  var urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
  var urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error("Invalid href passed to next/router: ".concat(urlAsString, ", repeated forward-slashes (//) or backslashes \\ are not valid in the href"));
    var normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);

      var _interpolateAs2 = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs2.result,
          params = _interpolateAs2.params;

      if (result) {
        interpolatedAs = (0, _formatUrl).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omit(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_1) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  var _resolveHref = resolveHref(router, url, true),
      _resolveHref2 = _slicedToArray(_resolveHref, 2),
      resolvedHref = _resolveHref2[0],
      resolvedAs = _resolveHref2[1];

  var origin = (0, _utils).getLocationOrigin();
  var hrefHadOrigin = resolvedHref.startsWith(origin);
  var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  var preparedUrl = hrefHadOrigin ? resolvedHref : (0, _addBasePath).addBasePath(resolvedHref);
  var preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : (0, _addBasePath).addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  var cleanPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(function (page) {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _removeTrailingSlash).removeTrailingSlash(pathname);
}

function getMiddlewareData(source, response, options) {
  var nextConfig = {
    basePath: options.router.basePath,
    i18n: {
      locales: options.router.locales
    },
    trailingSlash: Boolean(false)
  };
  var rewriteHeader = response.headers.get('x-nextjs-rewrite');
  var rewriteTarget = rewriteHeader || response.headers.get('x-nextjs-matched-path');
  var matchedPath = response.headers.get('x-matched-path');

  if (matchedPath && !rewriteTarget && !matchedPath.includes('__next_data_catchall') && !matchedPath.includes('/_error') && !matchedPath.includes('/404')) {
    // leverage x-matched-path to detect next.config.js rewrites
    rewriteTarget = matchedPath;
  }

  if (rewriteTarget) {
    if (rewriteTarget.startsWith('/')) {
      var parsedRewriteTarget = (0, _parseRelativeUrl).parseRelativeUrl(rewriteTarget);
      var pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(parsedRewriteTarget.pathname, {
        nextConfig: nextConfig,
        parseData: true
      });
      var fsPathname = (0, _removeTrailingSlash).removeTrailingSlash(pathnameInfo.pathname);
      return Promise.all([options.router.pageLoader.getPageList(), (0, _routeLoader).getClientBuildManifest()]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            pages = _ref2[0],
            rewrites = _ref2[1].__rewrites;

        var as = (0, _addLocale).addLocale(pathnameInfo.pathname, pathnameInfo.locale);

        if ((0, _isDynamic).isDynamicRoute(as) || !rewriteHeader && pages.includes((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(as), options.router.locales).pathname)) {
          var parsedSource = (0, _getNextPathnameInfo).getNextPathnameInfo((0, _parseRelativeUrl).parseRelativeUrl(source).pathname, {
            parseData: true
          });
          as = (0, _addBasePath).addBasePath(parsedSource.pathname);
          parsedRewriteTarget.pathname = as;
        }

        if (false) { var result; } else if (!pages.includes(fsPathname)) {
          var resolvedPathname = resolveDynamicRoute(fsPathname, pages);

          if (resolvedPathname !== fsPathname) {
            fsPathname = resolvedPathname;
          }
        }

        var resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;

        if ((0, _isDynamic).isDynamicRoute(resolvedHref)) {
          var matches = (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(resolvedHref))(as);
          Object.assign(parsedRewriteTarget.query, matches || {});
        }

        return {
          type: 'rewrite',
          parsedAs: parsedRewriteTarget,
          resolvedHref: resolvedHref
        };
      });
    }

    var src = (0, _parsePath).parsePath(source);
    var pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
      nextConfig: nextConfig,
      parseData: true
    }), {
      defaultLocale: options.router.defaultLocale,
      buildId: ''
    }));
    return Promise.resolve({
      type: 'redirect-external',
      destination: "".concat(pathname).concat(src.query).concat(src.hash)
    });
  }

  var redirectTarget = response.headers.get('x-nextjs-redirect');

  if (redirectTarget) {
    if (redirectTarget.startsWith('/')) {
      var _src = (0, _parsePath).parsePath(redirectTarget);

      var _pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(_src.pathname, {
        nextConfig: nextConfig,
        parseData: true
      }), {
        defaultLocale: options.router.defaultLocale,
        buildId: ''
      }));

      return Promise.resolve({
        type: 'redirect-internal',
        newAs: "".concat(_pathname).concat(_src.query).concat(_src.hash),
        newUrl: "".concat(_pathname).concat(_src.query).concat(_src.hash)
      });
    }

    return Promise.resolve({
      type: 'redirect-external',
      destination: redirectTarget
    });
  }

  return Promise.resolve({
    type: 'next'
  });
}

function withMiddlewareEffects(options) {
  return matchesMiddleware(options).then(function (matches) {
    if (matches && options.fetchData) {
      return options.fetchData().then(function (data) {
        return getMiddlewareData(data.dataHref, data.response, options).then(function (effect) {
          return {
            dataHref: data.dataHref,
            cacheKey: data.cacheKey,
            json: data.json,
            response: data.response,
            text: data.text,
            effect: effect
          };
        });
      })["catch"](function (_err) {
        /**
        * TODO: Revisit this in the future.
        * For now we will not consider middleware data errors to be fatal.
        * maybe we should revisit in the future.
        */
        return null;
      });
    }

    return null;
  });
}

var manualScrollRestoration = (/* unused pure expression or super */ null && ( false && 0));
var SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts, options) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin',
    method: options.method || 'GET',
    headers: Object.assign({}, options.headers, {
      'x-nextjs-data': '1'
    })
  }).then(function (response) {
    return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
  });
}

var backgroundCache = {};

function handleSmoothScroll(fn) {
  var htmlElement = document.documentElement;
  var existing = htmlElement.style.scrollBehavior;
  htmlElement.style.scrollBehavior = 'auto';
  fn();
  htmlElement.style.scrollBehavior = existing;
}

function tryToParseAsJSON(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return null;
  }
}

function fetchNextData(_ref3) {
  var dataHref = _ref3.dataHref,
      inflightCache = _ref3.inflightCache,
      isPrefetch = _ref3.isPrefetch,
      hasMiddleware = _ref3.hasMiddleware,
      isServerRender = _ref3.isServerRender,
      parseJSON = _ref3.parseJSON,
      persistCache = _ref3.persistCache,
      isBackground = _ref3.isBackground,
      unstable_skipClientCache = _ref3.unstable_skipClientCache;

  var _URL = new URL(dataHref, window.location.href),
      cacheKey = _URL.href;

  var ref1;

  var getData = function getData(params) {
    return fetchRetry(dataHref, isServerRender ? 3 : 1, {
      headers: isPrefetch ? {
        purpose: 'prefetch'
      } : {},
      method: (ref1 = params == null ? void 0 : params.method) != null ? ref1 : 'GET'
    }).then(function (response) {
      if (response.ok && (params == null ? void 0 : params.method) === 'HEAD') {
        return {
          dataHref: dataHref,
          response: response,
          text: '',
          json: {},
          cacheKey: cacheKey
        };
      }

      return response.text().then(function (text) {
        if (!response.ok) {
          /**
          * When the data response is a redirect because of a middleware
          * we do not consider it an error. The headers must bring the
          * mapped location.
          * TODO: Change the status code in the handler.
          */
          if (hasMiddleware && [301, 302, 307, 308].includes(response.status)) {
            return {
              dataHref: dataHref,
              response: response,
              text: text,
              json: {},
              cacheKey: cacheKey
            };
          }

          if (!hasMiddleware && response.status === 404) {
            var ref;

            if ((ref = tryToParseAsJSON(text)) == null ? void 0 : ref.notFound) {
              return {
                dataHref: dataHref,
                json: {
                  notFound: SSG_DATA_NOT_FOUND
                },
                response: response,
                text: text,
                cacheKey: cacheKey
              };
            }
          }

          var error = new Error("Failed to load static props");
          /**
          * We should only trigger a server-side transition if this was
          * caused on a client-side transition. Otherwise, we'd get into
          * an infinite loop.
          */

          if (!isServerRender) {
            (0, _routeLoader).markAssetError(error);
          }

          throw error;
        }

        return {
          dataHref: dataHref,
          json: parseJSON ? tryToParseAsJSON(text) : null,
          response: response,
          text: text,
          cacheKey: cacheKey
        };
      });
    }).then(function (data) {
      if (!persistCache || false || data.response.headers.get('x-middleware-cache') === 'no-cache') {
        delete inflightCache[cacheKey];
      }

      return data;
    })["catch"](function (err) {
      delete inflightCache[cacheKey];
      throw err;
    });
  }; // when skipping client cache we wait to update
  // inflight cache until successful data response
  // this allows racing click event with fetching newer data
  // without blocking navigation when stale data is available


  if (unstable_skipClientCache && persistCache) {
    return getData({}).then(function (data) {
      inflightCache[cacheKey] = Promise.resolve(data);
      return data;
    });
  }

  if (inflightCache[cacheKey] !== undefined) {
    return inflightCache[cacheKey];
  }

  return inflightCache[cacheKey] = getData(isBackground ? {
    method: 'HEAD'
  } : {});
}

function createKey() {
  return Math.random().toString(36).slice(2, 10);
}

function handleHardNavigation(_ref4) {
  var url = _ref4.url,
      router = _ref4.router;

  // ensure we don't trigger a hard navigation to the same
  // URL as this can end up with an infinite refresh
  if (url === (0, _addBasePath).addBasePath((0, _addLocale).addLocale(router.asPath, router.locale))) {
    throw new Error("Invariant: attempted to hard navigate to the same URL ".concat(url, " ").concat(location.href));
  }

  window.location.href = url;
}

var getCancelledHandler = function getCancelledHandler(_ref5) {
  var route = _ref5.route,
      router = _ref5.router;
  var cancelled = false;

  var cancel = router.clc = function () {
    cancelled = true;
  };

  var handleCancelled = function handleCancelled() {
    if (cancelled) {
      var error = new Error("Abort fetching component for route: \"".concat(route, "\""));
      error.cancelled = true;
      throw error;
    }

    if (cancel === router.clc) {
      router.clc = null;
    }
  };

  return handleCancelled;
};

var Router = /*#__PURE__*/function () {
  function Router(pathname1, query1, as1, _ref6) {
    var _this2 = this;

    var initialProps = _ref6.initialProps,
        pageLoader = _ref6.pageLoader,
        App = _ref6.App,
        wrapApp = _ref6.wrapApp,
        Component = _ref6.Component,
        err = _ref6.err,
        subscription = _ref6.subscription,
        isFallback = _ref6.isFallback,
        locale = _ref6.locale,
        locales = _ref6.locales,
        defaultLocale = _ref6.defaultLocale,
        domainLocales = _ref6.domainLocales,
        isPreview = _ref6.isPreview;

    _classCallCheck(this, Router);

    // Server Data Cache
    this.sdc = {};
    this.isFirstPopStateEvent = true;
    this._key = createKey();

    this.onPopState = function (e) {
      var isFirstPopStateEvent = _this2.isFirstPopStateEvent;
      _this2.isFirstPopStateEvent = false;
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname2 = _this2.pathname,
            query = _this2.query;

        _this2.changeState('replaceState', (0, _formatUrl).formatWithValidation({
          pathname: (0, _addBasePath).addBasePath(_pathname2),
          query: query
        }), (0, _utils).getURL());

        return;
      } // __NA is used to identify if the history entry can be handled by the app-router.


      if (state.__NA) {
        window.location.reload();
        return;
      }

      if (!state.__N) {
        return;
      } // Safari fires popstateevent when reopening the browser.


      if (isFirstPopStateEvent && _this2.locale === state.options.locale && state.as === _this2.asPath) {
        return;
      }

      var forcedScroll;
      var url = state.url,
          as = state.as,
          options = state.options,
          key = state.key;

      if (false) { var v; }

      _this2._key = key;

      var _parseRelativeUrl2 = (0, _parseRelativeUrl).parseRelativeUrl(url),
          pathname = _parseRelativeUrl2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this2.isSsr && as === (0, _addBasePath).addBasePath(_this2.asPath) && pathname === (0, _addBasePath).addBasePath(_this2.pathname)) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this2._bps && !_this2._bps(state)) {
        return;
      }

      _this2.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && _this2._shallow,
        locale: options.locale || _this2.defaultLocale,
        // @ts-ignore internal value not exposed on types
        _h: 0
      }), forcedScroll);
    }; // represents the current component key


    var route = (0, _removeTrailingSlash).removeTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[route] = {
        Component: Component,
        initial: true,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    var autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.basePath =  false || '';
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isLocaleDomain = false;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);

    if (true) {
      this.locales = locales;
      this.defaultLocale = defaultLocale;
      this.domainLocales = domainLocales;
      this.isLocaleDomain = !!(0, _detectDomainLocale).detectDomainLocale(domainLocales, self.location.hostname);
    }

    this.state = {
      route: route,
      pathname: pathname1,
      query: query1,
      asPath: autoExportDynamic ? pathname1 : as1,
      isPreview: !!isPreview,
      locale:  true ? locale : 0,
      isFallback: isFallback
    };
    this._initialMatchesMiddlewarePromise = Promise.resolve(false);

    if (false) { var asPath, options; }
  }

  _createClass(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (false) {}

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, url, as, options, forcedScroll) {
      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var isQueryUpdating, shouldResolveHref, nextState, readyStateChange, isSsr, prevLocale, parsedAs, localePathResult, didNavigate, ref, detectedDomain, asNoBasePath, _options$shallow, shallow, _options$scroll, scroll, routeProps, cleanedAs, localeChange, parsed, pathname, query, pages, rewrites, _yield$Promise$all, _yield$Promise$all2, resolvedAs, isMiddlewareMatch, rewritesResult, route, routeMatch, _parsedAs, asPathname, routeRegex, shouldInterpolate, interpolatedAs, missingParams, ref2, ref3, routeInfo, cleanedParsedPathname, prefixedAs, rewriteAs, localeResult, _routeRegex2, curRouteMatch, _routeInfo2, error, props, __N_SSG, __N_SSP, component, scripts, destination, parsedHref, _prepareUrlAs4, newUrl, newAs, notFoundRoute, _route, isValidShallowRoute, _scroll, shouldScroll, resetScroll, upcomingRouterState, upcomingScrollState, canSkipUpdating, hashRegex;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (isLocalURL(url)) {
                _context2.next = 3;
                break;
              }

              handleHardNavigation({
                url: url,
                router: _this
              });
              return _context2.abrupt("return", false);

            case 3:
              // WARNING: `_h` is an internal option for handing Next.js client-side
              // hydration. Your app should _never_ use this property. It may change at
              // any time without notice.
              isQueryUpdating = options._h;
              shouldResolveHref = isQueryUpdating || options._shouldResolveHref || (0, _parsePath).parsePath(url).pathname === (0, _parsePath).parsePath(as).pathname;
              nextState = _extends({}, _this.state); // for static pages with query params in the URL we delay
              // marking the router ready until after the query is updated
              // or a navigation has occurred

              readyStateChange = _this.isReady !== true;
              _this.isReady = true;
              isSsr = _this.isSsr;

              if (!isQueryUpdating) {
                _this.isSsr = false;
              } // if a route transition is already in progress before
              // the query updating is triggered ignore query updating


              if (!(isQueryUpdating && _this.clc)) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("return", false);

            case 12:
              prevLocale = nextState.locale;

              if (false) {}

              nextState.locale = options.locale === false ? _this.defaultLocale : options.locale || nextState.locale;

              if (typeof options.locale === 'undefined') {
                options.locale = nextState.locale;
              }

              parsedAs = (0, _parseRelativeUrl).parseRelativeUrl((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as);
              localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, _this.locales);

              if (localePathResult.detectedLocale) {
                nextState.locale = localePathResult.detectedLocale;
                parsedAs.pathname = (0, _addBasePath).addBasePath(parsedAs.pathname);
                as = (0, _formatUrl).formatWithValidation(parsedAs);
                url = (0, _addBasePath).addBasePath((0, _normalizeLocalePath).normalizeLocalePath((0, _hasBasePath).hasBasePath(url) ? (0, _removeBasePath).removeBasePath(url) : url, _this.locales).pathname);
              }

              didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
              // moves this on its own due to the return

              if (true) {
                // if the locale isn't configured hard navigate to show 404 page
                if (!((ref = _this.locales) == null ? void 0 : ref.includes(nextState.locale))) {
                  parsedAs.pathname = (0, _addLocale).addLocale(parsedAs.pathname, nextState.locale);
                  handleHardNavigation({
                    url: (0, _formatUrl).formatWithValidation(parsedAs),
                    router: _this
                  }); // this was previously a return but was removed in favor
                  // of better dead code elimination with regenerator runtime

                  didNavigate = true;
                }
              }

              detectedDomain = (0, _detectDomainLocale).detectDomainLocale(_this.domainLocales, undefined, nextState.locale); // we need to wrap this in the env check again since regenerator runtime
              // moves this on its own due to the return

              if (true) {
                // if we are navigating to a domain locale ensure we redirect to the
                // correct domain
                if (!didNavigate && detectedDomain && _this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
                  asNoBasePath = (0, _removeBasePath).removeBasePath(as);
                  handleHardNavigation({
                    url: "http".concat(detectedDomain.http ? '' : 's', "://").concat(detectedDomain.domain).concat((0, _addBasePath).addBasePath("".concat(nextState.locale === detectedDomain.defaultLocale ? '' : "/".concat(nextState.locale)).concat(asNoBasePath === '/' ? '' : asNoBasePath) || '/')),
                    router: _this
                  }); // this was previously a return but was removed in favor
                  // of better dead code elimination with regenerator runtime

                  didNavigate = true;
                }
              }

              if (!didNavigate) {
                _context2.next = 25;
                break;
              }

              return _context2.abrupt("return", new Promise(function () {}));

            case 25:
              // marking route changes as a navigation start entry
              if (_utils.ST) {
                performance.mark('routeChange');
              }

              _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow, _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll;
              routeProps = {
                shallow: shallow
              };

              if (_this._inFlightRoute && _this.clc) {
                if (!isSsr) {
                  Router.events.emit('routeChangeError', buildCancellationError(), _this._inFlightRoute, routeProps);
                }

                _this.clc();

                _this.clc = null;
              }

              as = (0, _addBasePath).addBasePath((0, _addLocale).addLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, options.locale, _this.defaultLocale));
              cleanedAs = (0, _removeLocale).removeLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, nextState.locale);
              _this._inFlightRoute = as;
              localeChange = prevLocale !== nextState.locale; // If the url change is only related to a hash change
              // We should not proceed. We should only change the state.

              if (!(!isQueryUpdating && _this.onlyAHashChange(cleanedAs) && !localeChange)) {
                _context2.next = 49;
                break;
              }

              nextState.asPath = cleanedAs;
              Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

              _this.changeState(method, url, as, _extends({}, options, {
                scroll: false
              }));

              if (scroll) {
                _this.scrollToHash(cleanedAs);
              }

              _context2.prev = 38;
              _context2.next = 41;
              return _this.set(nextState, _this.components[nextState.route], null);

            case 41:
              _context2.next = 47;
              break;

            case 43:
              _context2.prev = 43;
              _context2.t0 = _context2["catch"](38);

              if ((0, _isError)["default"](_context2.t0) && _context2.t0.cancelled) {
                Router.events.emit('routeChangeError', _context2.t0, cleanedAs, routeProps);
              }

              throw _context2.t0;

            case 47:
              Router.events.emit('hashChangeComplete', as, routeProps);
              return _context2.abrupt("return", true);

            case 49:
              parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
              pathname = parsed.pathname, query = parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
              // get their query parameters to allow ensuring they can be parsed properly
              // when rewritten to

              _context2.prev = 51;
              _context2.next = 54;
              return Promise.all([_this.pageLoader.getPageList(), (0, _routeLoader).getClientBuildManifest(), _this.pageLoader.getMiddleware()]);

            case 54:
              _yield$Promise$all = _context2.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              pages = _yield$Promise$all2[0];
              rewrites = _yield$Promise$all2[1].__rewrites;
              _context2.next = 64;
              break;

            case 60:
              _context2.prev = 60;
              _context2.t1 = _context2["catch"](51);
              // If we fail to resolve the page list or client-build manifest, we must
              // do a server-side transition:
              handleHardNavigation({
                url: as,
                router: _this
              });
              return _context2.abrupt("return", false);

            case 64:
              // If asked to change the current URL we should reload the current page
              // (not location.reload() but reload getInitialProps and other Next.js stuffs)
              // We also need to set the method = replaceState always
              // as this should not go into the history (That's how browsers work)
              // We should compare the new asPath to the current asPath, not the url
              if (!_this.urlIsNew(cleanedAs) && !localeChange) {
                method = 'replaceState';
              } // we need to resolve the as value using rewrites for dynamic SSG
              // pages to allow building the data URL correctly


              resolvedAs = as; // url and as should always be prefixed with basePath by this
              // point by either next/link or router.push/replace so strip the
              // basePath from the pathname to match the pages dir 1-to-1

              pathname = pathname ? (0, _removeTrailingSlash).removeTrailingSlash((0, _removeBasePath).removeBasePath(pathname)) : pathname; // we don't attempt resolve asPath when we need to execute
              // middleware as the resolving will occur server-side

              _context2.next = 69;
              return matchesMiddleware({
                asPath: as,
                locale: nextState.locale,
                router: _this
              });

            case 69:
              isMiddlewareMatch = _context2.sent;

              if (options.shallow && isMiddlewareMatch) {
                pathname = _this.pathname;
              }

              if (!(shouldResolveHref && pathname !== '/_error')) {
                _context2.next = 84;
                break;
              }

              options._shouldResolveHref = true;

              if (true) {
                _context2.next = 82;
                break;
              }

              rewritesResult = (0, _resolveRewrites)["default"]((0, _addBasePath).addBasePath((0, _addLocale).addLocale(cleanedAs, nextState.locale), true), pages, rewrites, query, function (p) {
                return resolveDynamicRoute(p, pages);
              }, _this.locales);

              if (!rewritesResult.externalDest) {
                _context2.next = 78;
                break;
              }

              handleHardNavigation({
                url: as,
                router: _this
              });
              return _context2.abrupt("return", true);

            case 78:
              if (!isMiddlewareMatch) {
                resolvedAs = rewritesResult.asPath;
              }

              if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                // if this directly matches a page we need to update the href to
                // allow the correct page chunk to be loaded
                pathname = rewritesResult.resolvedHref;
                parsed.pathname = (0, _addBasePath).addBasePath(pathname);

                if (!isMiddlewareMatch) {
                  url = (0, _formatUrl).formatWithValidation(parsed);
                }
              }

              _context2.next = 84;
              break;

            case 82:
              parsed.pathname = resolveDynamicRoute(pathname, pages);

              if (parsed.pathname !== pathname) {
                pathname = parsed.pathname;
                parsed.pathname = (0, _addBasePath).addBasePath(pathname);

                if (!isMiddlewareMatch) {
                  url = (0, _formatUrl).formatWithValidation(parsed);
                }
              }

            case 84:
              if (isLocalURL(as)) {
                _context2.next = 89;
                break;
              }

              if (true) {
                _context2.next = 87;
                break;
              }

              throw new Error("Invalid href: \"".concat(url, "\" and as: \"").concat(as, "\", received relative href and external as") + "\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as");

            case 87:
              handleHardNavigation({
                url: as,
                router: _this
              });
              return _context2.abrupt("return", false);

            case 89:
              resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(resolvedAs), nextState.locale);
              route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
              routeMatch = false;

              if (!(0, _isDynamic).isDynamicRoute(route)) {
                _context2.next = 107;
                break;
              }

              _parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
              asPathname = _parsedAs.pathname;
              routeRegex = (0, _routeRegex).getRouteRegex(route);
              routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
              shouldInterpolate = route === asPathname;
              interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

              if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                _context2.next = 106;
                break;
              }

              missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                return !query[param];
              });

              if (!(missingParams.length > 0 && !isMiddlewareMatch)) {
                _context2.next = 104;
                break;
              }

              if (false) {}

              throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://nextjs.org/docs/messages/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

            case 104:
              _context2.next = 107;
              break;

            case 106:
              if (shouldInterpolate) {
                as = (0, _formatUrl).formatWithValidation(Object.assign({}, _parsedAs, {
                  pathname: interpolatedAs.result,
                  query: omit(query, interpolatedAs.params)
                }));
              } else {
                // Merge params into `query`, overwriting any specified in search
                Object.assign(query, routeMatch);
              }

            case 107:
              if (!isQueryUpdating) {
                Router.events.emit('routeChangeStart', as, routeProps);
              }

              _context2.prev = 108;
              _context2.next = 111;
              return _this.getRouteInfo({
                route: route,
                pathname: pathname,
                query: query,
                as: as,
                resolvedAs: resolvedAs,
                routeProps: routeProps,
                locale: nextState.locale,
                isPreview: nextState.isPreview,
                hasMiddleware: isMiddlewareMatch
              });

            case 111:
              routeInfo = _context2.sent;

              if ('route' in routeInfo && isMiddlewareMatch) {
                pathname = routeInfo.route || route;
                route = pathname;

                if (!routeProps.shallow) {
                  query = Object.assign({}, routeInfo.query || {}, query);
                }

                cleanedParsedPathname = (0, _hasBasePath).hasBasePath(parsed.pathname) ? (0, _removeBasePath).removeBasePath(parsed.pathname) : parsed.pathname;

                if (routeMatch && pathname !== cleanedParsedPathname) {
                  Object.keys(routeMatch).forEach(function (key) {
                    if (routeMatch && query[key] === routeMatch[key]) {
                      delete query[key];
                    }
                  });
                }

                if ((0, _isDynamic).isDynamicRoute(pathname)) {
                  prefixedAs = !routeProps.shallow && routeInfo.resolvedAs ? routeInfo.resolvedAs : (0, _addBasePath).addBasePath((0, _addLocale).addLocale(new URL(as, location.href).pathname, nextState.locale), true);
                  rewriteAs = prefixedAs;

                  if ((0, _hasBasePath).hasBasePath(rewriteAs)) {
                    rewriteAs = (0, _removeBasePath).removeBasePath(rewriteAs);
                  }

                  if (true) {
                    localeResult = (0, _normalizeLocalePath).normalizeLocalePath(rewriteAs, _this.locales);
                    nextState.locale = localeResult.detectedLocale || nextState.locale;
                    rewriteAs = localeResult.pathname;
                  }

                  _routeRegex2 = (0, _routeRegex).getRouteRegex(pathname);
                  curRouteMatch = (0, _routeMatcher).getRouteMatcher(_routeRegex2)(rewriteAs);

                  if (curRouteMatch) {
                    Object.assign(query, curRouteMatch);
                  }
                }
              } // If the routeInfo brings a redirect we simply apply it.


              if (!('type' in routeInfo)) {
                _context2.next = 120;
                break;
              }

              if (!(routeInfo.type === 'redirect-internal')) {
                _context2.next = 118;
                break;
              }

              return _context2.abrupt("return", _this.change(method, routeInfo.newUrl, routeInfo.newAs, options));

            case 118:
              handleHardNavigation({
                url: routeInfo.destination,
                router: _this
              });
              return _context2.abrupt("return", new Promise(function () {}));

            case 120:
              _routeInfo2 = routeInfo, error = _routeInfo2.error, props = _routeInfo2.props, __N_SSG = _routeInfo2.__N_SSG, __N_SSP = _routeInfo2.__N_SSP;
              component = routeInfo.Component;

              if (component && component.unstable_scriptLoader) {
                scripts = [].concat(component.unstable_scriptLoader());
                scripts.forEach(function (script) {
                  (0, _script).handleClientScriptLoad(script.props);
                });
              } // handle redirect on client-transition


              if (!((__N_SSG || __N_SSP) && props)) {
                _context2.next = 150;
                break;
              }

              if (!(props.pageProps && props.pageProps.__N_REDIRECT)) {
                _context2.next = 134;
                break;
              }

              // Use the destination from redirect without adding locale
              options.locale = false;
              destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
              // client-navigation if it is falling back to hard navigation if
              // it's not

              if (!(destination.startsWith('/') && props.pageProps.__N_REDIRECT_BASE_PATH !== false)) {
                _context2.next = 132;
                break;
              }

              parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
              parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
              _prepareUrlAs4 = prepareUrlAs(_this, destination, destination), newUrl = _prepareUrlAs4.url, newAs = _prepareUrlAs4.as;
              return _context2.abrupt("return", _this.change(method, newUrl, newAs, options));

            case 132:
              handleHardNavigation({
                url: destination,
                router: _this
              });
              return _context2.abrupt("return", new Promise(function () {}));

            case 134:
              nextState.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

              if (!(props.notFound === SSG_DATA_NOT_FOUND)) {
                _context2.next = 150;
                break;
              }

              _context2.prev = 136;
              _context2.next = 139;
              return _this.fetchComponent('/404');

            case 139:
              notFoundRoute = '/404';
              _context2.next = 145;
              break;

            case 142:
              _context2.prev = 142;
              _context2.t2 = _context2["catch"](136);
              notFoundRoute = '/_error';

            case 145:
              _context2.next = 147;
              return _this.getRouteInfo({
                route: notFoundRoute,
                pathname: notFoundRoute,
                query: query,
                as: as,
                resolvedAs: resolvedAs,
                routeProps: {
                  shallow: false
                },
                locale: nextState.locale,
                isPreview: nextState.isPreview
              });

            case 147:
              routeInfo = _context2.sent;

              if (!('type' in routeInfo)) {
                _context2.next = 150;
                break;
              }

              throw new Error("Unexpected middleware effect on /404");

            case 150:
              Router.events.emit('beforeHistoryChange', as, routeProps);

              _this.changeState(method, url, as, options);

              if (isQueryUpdating && pathname === '/_error' && ((ref2 = self.__NEXT_DATA__.props) == null ? void 0 : (ref3 = ref2.pageProps) == null ? void 0 : ref3.statusCode) === 500 && (props == null ? void 0 : props.pageProps)) {
                // ensure statusCode is still correct for static 500 page
                // when updating query information
                props.pageProps.statusCode = 500;
              }

              // shallow routing is only allowed for same page URL changes.
              isValidShallowRoute = options.shallow && nextState.route === ((_route = routeInfo.route) != null ? _route : route);
              shouldScroll = (_scroll = options.scroll) != null ? _scroll : !options._h && !isValidShallowRoute;
              resetScroll = shouldScroll ? {
                x: 0,
                y: 0
              } : null; // the new state that the router gonna set

              upcomingRouterState = _extends({}, nextState, {
                route: route,
                pathname: pathname,
                query: query,
                asPath: cleanedAs,
                isFallback: false
              });
              upcomingScrollState = forcedScroll != null ? forcedScroll : resetScroll; // for query updates we can skip it if the state is unchanged and we don't
              // need to scroll
              // https://github.com/vercel/next.js/issues/37139

              canSkipUpdating = options._h && !upcomingScrollState && !readyStateChange && !localeChange && (0, _compareStates).compareRouterStates(upcomingRouterState, _this.state);

              if (canSkipUpdating) {
                _context2.next = 169;
                break;
              }

              _context2.next = 162;
              return _this.set(upcomingRouterState, routeInfo, upcomingScrollState)["catch"](function (e) {
                if (e.cancelled) error = error || e;else throw e;
              });

            case 162:
              if (!error) {
                _context2.next = 165;
                break;
              }

              if (!isQueryUpdating) {
                Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
              }

              throw error;

            case 165:
              if (true) {
                if (nextState.locale) {
                  document.documentElement.lang = nextState.locale;
                }
              }

              if (!isQueryUpdating) {
                Router.events.emit('routeChangeComplete', as, routeProps);
              } // A hash mark # is the optional last part of a URL


              hashRegex = /#.+$/;

              if (shouldScroll && hashRegex.test(as)) {
                _this.scrollToHash(as);
              }

            case 169:
              return _context2.abrupt("return", true);

            case 172:
              _context2.prev = 172;
              _context2.t3 = _context2["catch"](108);

              if (!((0, _isError)["default"](_context2.t3) && _context2.t3.cancelled)) {
                _context2.next = 176;
                break;
              }

              return _context2.abrupt("return", false);

            case 176:
              throw _context2.t3;

            case 177:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[38, 43], [51, 60], [108, 172], [136, 142]]);
      }))();
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (false) {}

      if (method !== 'pushState' || (0, _utils).getURL() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true,
          key: this._key = method !== 'pushState' ? this._key : createKey()
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var props, _yield$_this$fetchCom2, Component, styleSheets, routeInfo;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              console.error(err);

              if (!err.cancelled) {
                _context3.next = 3;
                break;
              }

              throw err;

            case 3:
              if (!((0, _routeLoader).isAssetError(err) || loadErrorFail)) {
                _context3.next = 7;
                break;
              }

              Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
              //  1. Page doesn't exists
              //  2. Page does exist in a different zone
              //  3. Internal error while loading the page
              // So, doing a hard reload is the proper way to deal with this.

              handleHardNavigation({
                url: as,
                router: _this
              }); // Changing the URL doesn't block executing the current code path.
              // So let's throw a cancellation error stop the routing logic.

              throw buildCancellationError();

            case 7:
              _context3.prev = 7;
              _context3.next = 10;
              return _this.fetchComponent('/_error');

            case 10:
              _yield$_this$fetchCom2 = _context3.sent;
              Component = _yield$_this$fetchCom2.page;
              styleSheets = _yield$_this$fetchCom2.styleSheets;
              routeInfo = {
                props: props,
                Component: Component,
                styleSheets: styleSheets,
                err: err,
                error: err
              };

              if (routeInfo.props) {
                _context3.next = 25;
                break;
              }

              _context3.prev = 15;
              _context3.next = 18;
              return _this.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              });

            case 18:
              routeInfo.props = _context3.sent;
              _context3.next = 25;
              break;

            case 21:
              _context3.prev = 21;
              _context3.t0 = _context3["catch"](15);
              console.error('Error in error page `getInitialProps`: ', _context3.t0);
              routeInfo.props = {};

            case 25:
              return _context3.abrupt("return", routeInfo);

            case 28:
              _context3.prev = 28;
              _context3.t1 = _context3["catch"](7);
              return _context3.abrupt("return", _this.handleRouteInfoError((0, _isError)["default"](_context3.t1) ? _context3.t1 : new Error(_context3.t1 + ''), pathname, query, as, routeProps, true));

            case 31:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[7, 28], [15, 21]]);
      }))();
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(_ref7) {
      var requestedRoute = _ref7.route,
          pathname = _ref7.pathname,
          query = _ref7.query,
          as = _ref7.as,
          resolvedAs = _ref7.resolvedAs,
          routeProps = _ref7.routeProps,
          locale = _ref7.locale,
          hasMiddleware = _ref7.hasMiddleware,
          isPreview = _ref7.isPreview,
          unstable_skipClientCache = _ref7.unstable_skipClientCache;

      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var route, ref, ref4, ref5, handleCancelled, existingInfo, cachedRouteInfo, fetchNextDataParams, data, routeInfo, _require2, isValidElementType, shouldFetchData, _yield$_this$_getData2, props, cacheKey;

        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              /**
              * This `route` binding can change if there's a rewrite
              * so we keep a reference to the original requested route
              * so we can store the cache for it and avoid re-requesting every time
              * for shallow routing purposes.
              */
              route = requestedRoute;
              _context5.prev = 1;
              handleCancelled = getCancelledHandler({
                route: route,
                router: _this
              });
              existingInfo = _this.components[route];

              if (!(routeProps.shallow && existingInfo && _this.route === route)) {
                _context5.next = 6;
                break;
              }

              return _context5.abrupt("return", existingInfo);

            case 6:
              if (hasMiddleware) {
                existingInfo = undefined;
              }

              cachedRouteInfo = existingInfo && !('initial' in existingInfo) && true ? existingInfo : undefined;
              fetchNextDataParams = {
                dataHref: _this.pageLoader.getDataHref({
                  href: (0, _formatUrl).formatWithValidation({
                    pathname: pathname,
                    query: query
                  }),
                  skipInterpolation: true,
                  asPath: resolvedAs,
                  locale: locale
                }),
                hasMiddleware: true,
                isServerRender: _this.isSsr,
                parseJSON: true,
                inflightCache: _this.sdc,
                persistCache: !isPreview,
                isPrefetch: false,
                unstable_skipClientCache: unstable_skipClientCache
              };
              _context5.next = 11;
              return withMiddlewareEffects({
                fetchData: function fetchData() {
                  return fetchNextData(fetchNextDataParams);
                },
                asPath: resolvedAs,
                locale: locale,
                router: _this
              });

            case 11:
              data = _context5.sent;
              handleCancelled();

              if (!((data == null ? void 0 : (ref = data.effect) == null ? void 0 : ref.type) === 'redirect-internal' || (data == null ? void 0 : (ref4 = data.effect) == null ? void 0 : ref4.type) === 'redirect-external')) {
                _context5.next = 15;
                break;
              }

              return _context5.abrupt("return", data.effect);

            case 15:
              if (!((data == null ? void 0 : (ref5 = data.effect) == null ? void 0 : ref5.type) === 'rewrite')) {
                _context5.next = 23;
                break;
              }

              route = (0, _removeTrailingSlash).removeTrailingSlash(data.effect.resolvedHref);
              pathname = data.effect.resolvedHref;
              query = _extends({}, query, data.effect.parsedAs.query);
              resolvedAs = (0, _removeBasePath).removeBasePath((0, _normalizeLocalePath).normalizeLocalePath(data.effect.parsedAs.pathname, _this.locales).pathname); // Check again the cache with the new destination.

              existingInfo = _this.components[route];

              if (!(routeProps.shallow && existingInfo && _this.route === route && !hasMiddleware)) {
                _context5.next = 23;
                break;
              }

              return _context5.abrupt("return", _extends({}, existingInfo, {
                route: route
              }));

            case 23:
              if (!(route === '/api' || route.startsWith('/api/'))) {
                _context5.next = 26;
                break;
              }

              handleHardNavigation({
                url: as,
                router: _this
              });
              return _context5.abrupt("return", new Promise(function () {}));

            case 26:
              _context5.t0 = cachedRouteInfo;

              if (_context5.t0) {
                _context5.next = 31;
                break;
              }

              _context5.next = 30;
              return _this.fetchComponent(route).then(function (res) {
                return {
                  Component: res.page,
                  styleSheets: res.styleSheets,
                  __N_SSG: res.mod.__N_SSG,
                  __N_SSP: res.mod.__N_SSP
                };
              });

            case 30:
              _context5.t0 = _context5.sent;

            case 31:
              routeInfo = _context5.t0;

              if (true) {
                _context5.next = 36;
                break;
              }

              _require2 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/dist/compiled/react-is'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), isValidElementType = _require2.isValidElementType;

              if (isValidElementType(routeInfo.Component)) {
                _context5.next = 36;
                break;
              }

              throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

            case 36:
              shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP;
              _context5.next = 39;
              return _this._getData(_async_to_generator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                var _ref9, json, _cacheKey;

                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!shouldFetchData) {
                        _context4.next = 12;
                        break;
                      }

                      if (!(data == null ? void 0 : data.json)) {
                        _context4.next = 5;
                        break;
                      }

                      _context4.t0 = data;
                      _context4.next = 8;
                      break;

                    case 5:
                      _context4.next = 7;
                      return fetchNextData({
                        dataHref: _this.pageLoader.getDataHref({
                          href: (0, _formatUrl).formatWithValidation({
                            pathname: pathname,
                            query: query
                          }),
                          asPath: resolvedAs,
                          locale: locale
                        }),
                        isServerRender: _this.isSsr,
                        parseJSON: true,
                        inflightCache: _this.sdc,
                        persistCache: !isPreview,
                        isPrefetch: false,
                        unstable_skipClientCache: unstable_skipClientCache
                      });

                    case 7:
                      _context4.t0 = _context4.sent;

                    case 8:
                      _ref9 = _context4.t0;
                      json = _ref9.json;
                      _cacheKey = _ref9.cacheKey;
                      return _context4.abrupt("return", {
                        cacheKey: _cacheKey,
                        props: json || {}
                      });

                    case 12:
                      _context4.t1 = {};
                      _context4.next = 15;
                      return _this.getInitialProps(routeInfo.Component, // we provide AppTree later so this needs to be `any`
                      {
                        pathname: pathname,
                        query: query,
                        asPath: as,
                        locale: locale,
                        locales: _this.locales,
                        defaultLocale: _this.defaultLocale
                      });

                    case 15:
                      _context4.t2 = _context4.sent;
                      return _context4.abrupt("return", {
                        headers: _context4.t1,
                        cacheKey: '',
                        props: _context4.t2
                      });

                    case 17:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              })));

            case 39:
              _yield$_this$_getData2 = _context5.sent;
              props = _yield$_this$_getData2.props;
              cacheKey = _yield$_this$_getData2.cacheKey;

              // Only bust the data cache for SSP routes although
              // middleware can skip cache per request with
              // x-middleware-cache: no-cache as well
              if (routeInfo.__N_SSP && fetchNextDataParams.dataHref) {
                delete _this.sdc[cacheKey];
              } // we kick off a HEAD request in the background
              // when a non-prefetch request is made to signal revalidation


              if (!_this.isPreview && routeInfo.__N_SSG && true) {
                fetchNextData(Object.assign({}, fetchNextDataParams, {
                  isBackground: true,
                  persistCache: false,
                  inflightCache: backgroundCache
                }))["catch"](function () {});
              }

              props.pageProps = Object.assign({}, props.pageProps);
              routeInfo.props = props;
              routeInfo.route = route;
              routeInfo.query = query;
              routeInfo.resolvedAs = resolvedAs;
              _this.components[route] = routeInfo;
              return _context5.abrupt("return", routeInfo);

            case 53:
              _context5.prev = 53;
              _context5.t1 = _context5["catch"](1);
              return _context5.abrupt("return", _this.handleRouteInfoError((0, _isError).getProperError(_context5.t1), pathname, query, as, routeProps));

            case 56:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 53]]);
      }))();
    }
  }, {
    key: "set",
    value: function set(state, data, resetScroll) {
      this.state = state;
      return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          _as$split4$ = _as$split4[1],
          hash = _as$split4$ === void 0 ? '' : _as$split4$; // Scroll to top if the hash is just `#` with no value or `#top`
      // To mirror browsers


      if (hash === '' || hash === 'top') {
        handleSmoothScroll(function () {
          return window.scrollTo(0, 0);
        });
        return;
      } // Decode hash to make non-latin anchor works.


      var rawHash = decodeURIComponent(hash); // First we check if the element by id is found

      var idEl = document.getElementById(rawHash);

      if (idEl) {
        handleSmoothScroll(function () {
          return idEl.scrollIntoView();
        });
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(rawHash)[0];

      if (nameEl) {
        handleSmoothScroll(function () {
          return nameEl.scrollIntoView();
        });
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var parsed, pathname, query, parsedAs, localePathResult, pages, resolvedAs, locale, rewrites, _yield$getClientBuild, rewritesResult, route;

        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (true) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt("return");

            case 2:
              parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
              pathname = parsed.pathname, query = parsed.query;

              if (true) {
                if (options.locale === false) {
                  pathname = (0, _normalizeLocalePath).normalizeLocalePath(pathname, _this.locales).pathname;
                  parsed.pathname = pathname;
                  url = (0, _formatUrl).formatWithValidation(parsed);
                  parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(asPath);
                  localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, _this.locales);
                  parsedAs.pathname = localePathResult.pathname;
                  options.locale = localePathResult.detectedLocale || _this.defaultLocale;
                  asPath = (0, _formatUrl).formatWithValidation(parsedAs);
                }
              }

              _context6.next = 7;
              return _this.pageLoader.getPageList();

            case 7:
              pages = _context6.sent;
              resolvedAs = asPath;
              locale = typeof options.locale !== 'undefined' ? options.locale || undefined : _this.locale;

              if (true) {
                _context6.next = 20;
                break;
              }

              _context6.next = 13;
              return (0, _routeLoader).getClientBuildManifest();

            case 13:
              _yield$getClientBuild = _context6.sent;
              rewrites = _yield$getClientBuild.__rewrites;
              rewritesResult = (0, _resolveRewrites)["default"]((0, _addBasePath).addBasePath((0, _addLocale).addLocale(asPath, _this.locale), true), pages, rewrites, parsed.query, function (p) {
                return resolveDynamicRoute(p, pages);
              }, _this.locales);

              if (!rewritesResult.externalDest) {
                _context6.next = 18;
                break;
              }

              return _context6.abrupt("return");

            case 18:
              resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(rewritesResult.asPath), _this.locale);

              if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                // if this directly matches a page we need to update the href to
                // allow the correct page chunk to be loaded
                pathname = rewritesResult.resolvedHref;
                parsed.pathname = pathname;
                url = (0, _formatUrl).formatWithValidation(parsed);
              }

            case 20:
              parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

              if ((0, _isDynamic).isDynamicRoute(parsed.pathname)) {
                pathname = parsed.pathname;
                parsed.pathname = pathname;
                Object.assign(query, (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(parsed.pathname))((0, _parsePath).parsePath(asPath).pathname) || {});
                url = (0, _formatUrl).formatWithValidation(parsed);
              } // Prefetch is not supported in development mode because it would trigger on-demand-entries


              if (true) {
                _context6.next = 24;
                break;
              }

              return _context6.abrupt("return");

            case 24:
              route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
              _context6.next = 27;
              return Promise.all([_this.pageLoader._isSsg(route).then(function (isSsg) {
                return isSsg ? fetchNextData({
                  dataHref: _this.pageLoader.getDataHref({
                    href: url,
                    asPath: resolvedAs,
                    locale: locale
                  }),
                  isServerRender: false,
                  parseJSON: true,
                  inflightCache: _this.sdc,
                  persistCache: !_this.isPreview,
                  isPrefetch: true,
                  unstable_skipClientCache: options.unstable_skipClientCache || options.priority && !!true
                }).then(function () {
                  return false;
                }) : false;
              }), _this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

            case 27:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var handleCancelled, componentResult;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              handleCancelled = getCancelledHandler({
                route: route,
                router: _this
              });
              _context7.prev = 1;
              _context7.next = 4;
              return _this.pageLoader.loadPage(route);

            case 4:
              componentResult = _context7.sent;
              handleCancelled();
              return _context7.abrupt("return", componentResult);

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](1);
              handleCancelled();
              throw _context7.t0;

            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[1, 9]]);
      }))();
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this3 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this3.clc) {
          _this3.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "_getFlightData",
    value: function _getFlightData(dataHref) {
      // Do not cache RSC flight response since it's not a static resource
      return fetchNextData({
        dataHref: dataHref,
        isServerRender: true,
        parseJSON: false,
        inflightCache: this.sdc,
        persistCache: false,
        isPrefetch: false
      }).then(function (_ref10) {
        var text = _ref10.text;
        return {
          data: text
        };
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils).loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "route",
    get: function get() {
      return this.state.route;
    }
  }, {
    key: "pathname",
    get: function get() {
      return this.state.pathname;
    }
  }, {
    key: "query",
    get: function get() {
      return this.state.query;
    }
  }, {
    key: "asPath",
    get: function get() {
      return this.state.asPath;
    }
  }, {
    key: "locale",
    get: function get() {
      return this.state.locale;
    }
  }, {
    key: "isFallback",
    get: function get() {
      return this.state.isFallback;
    }
  }, {
    key: "isPreview",
    get: function get() {
      return this.state.isPreview;
    }
  }]);

  return Router;
}();

Router.events = (0, _mitt)["default"]();
exports["default"] = Router;

/***/ }),

/***/ 5152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3579)


/***/ }),

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8566)


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(7942)


/***/ })

};
;