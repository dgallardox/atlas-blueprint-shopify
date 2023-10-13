exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 7049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* reexport */ Container)
});

// EXTERNAL MODULE: ./components/Container/Container.module.scss
var Container_module = __webpack_require__(8989);
var Container_module_default = /*#__PURE__*/__webpack_require__.n(Container_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Container/Container.js


function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Container_module_default()).component,
    children: children
  });
}
;// CONCATENATED MODULE: ./components/Container/index.js


/***/ }),

/***/ 582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* reexport */ ContentWrapper)
});

// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(3284);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_);
// EXTERNAL MODULE: ./components/ContentWrapper/ContentWrapper.module.scss
var ContentWrapper_module = __webpack_require__(7913);
var ContentWrapper_module_default = /*#__PURE__*/__webpack_require__.n(ContentWrapper_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ContentWrapper/ContentWrapper.js




var cx = bind_default().bind((ContentWrapper_module_default()));
function ContentWrapper(_ref) {
  var content = _ref.content,
      children = _ref.children;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
    className: cx('component'),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      dangerouslySetInnerHTML: {
        __html: content !== null && content !== void 0 ? content : ''
      }
    }), children]
  });
}
;// CONCATENATED MODULE: ./components/ContentWrapper/index.js


/***/ }),

/***/ 1971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* reexport */ CtaButton_CtaButton)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/CtaButton/CtaButton.module.scss
var CtaButton_module = __webpack_require__(7589);
var CtaButton_module_default = /*#__PURE__*/__webpack_require__.n(CtaButton_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/CtaButton/CtaButton.js


/**
 * Render the CtaButton component.
 *
 * @param {Props} props The props object.
 * @param {string} props.ctaLink (Optional) If provided, the browser will be directed to this URL when the button is clicked.
 * @param {string} props.ctaLabel (Optional) The button's label.
 * @param {string} props.disabled Whether the button is disable or not.
 * @param {(newValue: string) => void} props.ctaClick The onClick handler. Function to attach when the button is clicked.
 *
 * @returns {React.ReactElement} The CtaButton component.
 */



var CtaButton = function CtaButton(_ref) {
  var _ref$ctaLink = _ref.ctaLink,
      ctaLink = _ref$ctaLink === void 0 ? null : _ref$ctaLink,
      _ref$ctaLabel = _ref.ctaLabel,
      ctaLabel = _ref$ctaLabel === void 0 ? null : _ref$ctaLabel,
      disabled = _ref.disabled,
      ctaClick = _ref.ctaClick,
      _ref$cartId = _ref.cartId,
      cartId = _ref$cartId === void 0 ? null : _ref$cartId;
  return ctaLink ? /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (CtaButton_module_default()).buttonContainer,
    onClick: ctaClick,
    children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: ctaLink,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: (CtaButton_module_default()).button,
        children: ctaLabel
      })
    })
  }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (CtaButton_module_default()).buttonContainer,
    children: /*#__PURE__*/jsx_runtime_.jsx("button", {
      disabled: disabled,
      className: (CtaButton_module_default()).button,
      onClick: ctaClick,
      "data-cart-id": cartId,
      children: ctaLabel
    })
  });
};

/* harmony default export */ const CtaButton_CtaButton = (CtaButton);
;// CONCATENATED MODULE: ./components/CtaButton/index.js


/***/ }),

/***/ 2928:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EntryHeader)
/* harmony export */ });
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3284);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1938);
/* harmony import */ var _EntryHeader_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4332);
/* harmony import */ var _EntryHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EntryHeader_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_0___default().bind((_EntryHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default()));
function EntryHeader(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      image = _ref.image,
      date = _ref.date,
      author = _ref.author,
      className = _ref.className;
  var hasText = title || date || author;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: cx(['component', className]),
    children: [image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .FeaturedImage */ .Q_, {
      image: image,
      className: cx('image'),
      priority: true
    }), hasText && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: cx('text', {
        'has-image': image
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W2, {
        children: [!!title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Heading */ .X6, {
          className: cx('title'),
          children: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .PostInfo */ .l0, {
          className: cx('byline'),
          author: author,
          subTitle: subTitle,
          date: date
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8626:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* reexport safe */ _EntryHeader__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _EntryHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2928);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EntryHeader__WEBPACK_IMPORTED_MODULE_0__]);
_EntryHeader__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* reexport */ FeaturedImage)
});

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/FeaturedImage/FeaturedImage.js
var _templateObject;

var _excluded = ["image", "width", "height", "className", "priority", "layout"];

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function FeaturedImage(_ref) {
  var _image$mediaDetails, _image$mediaDetails2, _layout;

  var image = _ref.image,
      width = _ref.width,
      height = _ref.height,
      className = _ref.className,
      priority = _ref.priority,
      layout = _ref.layout,
      props = _objectWithoutProperties(_ref, _excluded);

  var src = image === null || image === void 0 ? void 0 : image.sourceUrl;

  var _ref2 = image || '',
      altText = _ref2.altText;

  width = width ? width : image === null || image === void 0 || (_image$mediaDetails = image.mediaDetails) === null || _image$mediaDetails === void 0 ? void 0 : _image$mediaDetails.width;
  height = height ? height : image === null || image === void 0 || (_image$mediaDetails2 = image.mediaDetails) === null || _image$mediaDetails2 === void 0 ? void 0 : _image$mediaDetails2.height;
  layout = (_layout = layout) !== null && _layout !== void 0 ? _layout : 'fill';
  return src && width && height ? /*#__PURE__*/jsx_runtime_.jsx("figure", {
    className: className,
    children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), _objectSpread({
      src: src,
      alt: altText,
      layout: layout,
      width: width,
      height: height,
      priority: priority,
      "data-testid": "featureImage-header"
    }, props))
  }) : null;
}
FeaturedImage.fragments = {
  entry: (0,client_.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    fragment FeaturedImageFragment on NodeWithFeaturedImage {\n      featuredImage {\n        node {\n          id\n          sourceUrl\n          altText\n          mediaDetails {\n            width\n            height\n          }\n        }\n      }\n    }\n  "])))
};
;// CONCATENATED MODULE: ./components/FeaturedImage/index.js


/***/ }),

/***/ 6964:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3284);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1938);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2810);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_0___default().bind((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default()));
function Footer(_ref) {
  var title = _ref.title,
      menuItems = _ref.menuItems;
  var year = new Date().getFullYear();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("footer", {
    className: cx('component'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W2, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .NavigationMenu */ .i9, {
        menuItems: menuItems
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
        className: cx('copyright'),
        children: "".concat(title, " \xA9 ").concat(year, ". Powered by WordPress.")
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3133:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6964);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer__WEBPACK_IMPORTED_MODULE_0__]);
_Footer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* reexport */ FormatDate)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/FormatDate/FormatDate.js


function FormatDate(_ref) {
  var date = _ref.date;
  var formattedDate = new Date(date);

  if (isNaN(formattedDate.valueOf())) {
    return null;
  }

  var timeformat = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: false
  };
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: formattedDate.toLocaleDateString('en-US', timeformat)
  });
}
;// CONCATENATED MODULE: ./components/FormatDate/index.js


/***/ }),

/***/ 4826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3284);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1938);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5631);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var CartQuickView = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(function () {
  return __webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(__webpack_require__, 7071));
}, {
  ssr: false
});
var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default()));
function Header(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Headless by WP Engine' : _ref$title,
      description = _ref.description,
      menuItems = _ref.menuItems;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isNavShown = _useState2[0],
      setIsNavShown = _useState2[1];

  var navClasses = cx([(_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["primary-navigation"]), isNavShown ? (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().show) : undefined]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("header", {
    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().component),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .SkipNavigationLink */ .XO, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_4__/* .Container */ .W2, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().bar),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().logo),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
              title: "Home",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h3", {
                children: title
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                children: description
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().search),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/search",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSearch, {
                title: "Search",
                role: "img"
              })
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
          type: "button",
          className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["nav-toggle"]),
          onClick: function onClick() {
            return setIsNavShown(!isNavShown);
          },
          "aria-label": "Toggle navigation",
          "aria-controls": (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["primary-navigation"]),
          "aria-expanded": isNavShown,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaBars, {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["nav-cart-bar"]),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .NavigationMenu */ .i9, {
          id: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["primary-navigation"]),
          className: navClasses,
          menuItems: menuItems
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(CartQuickView, {
          styles: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default())
        })]
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4826);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_0__]);
_Header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* reexport */ Heading)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Heading/Heading.js
var _excluded = ["level", "children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Tag = function Tag(_ref) {
  var level = _ref.level,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/external_react_default().createElement(level, props, children);
};

function Heading(_ref2) {
  var _ref2$level = _ref2.level,
      level = _ref2$level === void 0 ? 'h1' : _ref2$level,
      children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/jsx_runtime_.jsx(Tag, {
    level: level,
    className: className,
    children: children
  });
}
;// CONCATENATED MODULE: ./components/Heading/index.js


/***/ }),

/***/ 6379:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3284);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1938);
/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7519);
/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_Hero_module_scss__WEBPACK_IMPORTED_MODULE_4___default()));
function Hero(_ref) {
  var title = _ref.title,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? 'h2' : _ref$level,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: cx(['component', className]),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X6, {
      level: level,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
        className: cx('title'),
        children: title
      })
    }), children]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* reexport safe */ _Hero__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6379);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Hero__WEBPACK_IMPORTED_MODULE_0__]);
_Hero__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ Loader_Loader)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Loader/Loader.module.scss
var Loader_module = __webpack_require__(2210);
var Loader_module_default = /*#__PURE__*/__webpack_require__.n(Loader_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Loader/Loader.js




var Loader = function Loader() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Loader_module_default()).loader,
    "data-testid": "loading"
  });
};

/* harmony default export */ const Loader_Loader = (Loader);
;// CONCATENATED MODULE: ./components/Loader/index.js


/***/ }),

/***/ 3852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* reexport */ Main)
});

// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(3284);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_);
// EXTERNAL MODULE: ./constants/selectors.js
var selectors = __webpack_require__(7281);
// EXTERNAL MODULE: ./components/Main/Main.module.scss
var Main_module = __webpack_require__(7032);
var Main_module_default = /*#__PURE__*/__webpack_require__.n(Main_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Main/Main.js
var _excluded = ["children", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var cx = bind_default().bind((Main_module_default()));
function Main(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("main", _objectSpread(_objectSpread({
    id: selectors/* MAIN_CONTENT_ID */.O,
    tabIndex: -1,
    className: cx(['component', className])
  }, props), {}, {
    children: children
  }));
}
;// CONCATENATED MODULE: ./components/Main/index.js


/***/ }),

/***/ 539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ NavigationMenu)
});

// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(3284);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./utilities/flatListToHierarchical.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function flatListToHierarchical() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$idKey = _ref.idKey,
      idKey = _ref$idKey === void 0 ? 'id' : _ref$idKey,
      _ref$parentKey = _ref.parentKey,
      parentKey = _ref$parentKey === void 0 ? 'parentId' : _ref$parentKey,
      _ref$childrenKey = _ref.childrenKey,
      childrenKey = _ref$childrenKey === void 0 ? 'children' : _ref$childrenKey;

  var tree = [];
  var childrenOf = {};
  data.forEach(function (item) {
    var newItem = _objectSpread({}, item);

    var id = newItem[idKey],
        _newItem$parentKey = newItem[parentKey],
        parentId = _newItem$parentKey === void 0 ? 0 : _newItem$parentKey;
    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    childrenOf[parentId] = childrenOf[parentId] || [];
    parentId ? childrenOf[parentId].push(newItem) : tree.push(newItem);
  });
  return tree;
}
// EXTERNAL MODULE: ./components/NavigationMenu/NavigationMenu.module.scss
var NavigationMenu_module = __webpack_require__(3152);
var NavigationMenu_module_default = /*#__PURE__*/__webpack_require__.n(NavigationMenu_module);
// EXTERNAL MODULE: ./components/NavigationMenu/NavigationMenuClassesFromWP.module.scss
var NavigationMenuClassesFromWP_module = __webpack_require__(7259);
var NavigationMenuClassesFromWP_module_default = /*#__PURE__*/__webpack_require__.n(NavigationMenuClassesFromWP_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/NavigationMenu/NavigationMenu.js
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var cx = bind_default().bind((NavigationMenu_module_default()));
var cxFromWp = bind_default().bind((NavigationMenuClassesFromWP_module_default()));
function NavigationMenu(_ref) {
  var _menuItems$;

  var menuItems = _ref.menuItems,
      className = _ref.className;

  if (!menuItems) {
    return null;
  } // Based on https://www.wpgraphql.com/docs/menus/#hierarchical-data


  var hierarchicalMenuItems = flatListToHierarchical(menuItems);

  function renderMenu(items) {
    return /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: cx('menu'),
      children: items.map(function (item) {
        var id = item.id,
            path = item.path,
            label = item.label,
            children = item.children,
            cssClasses = item.cssClasses; // eslint-disable-next-line no-prototype-builtins

        if (!item.hasOwnProperty('__typename')) {
          return null;
        }

        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          "data-testid": "nav-element",
          className: cxFromWp(cssClasses),
          children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: path !== null && path !== void 0 ? path : '',
            children: label !== null && label !== void 0 ? label : ''
          }), children.length ? renderMenu(children) : null]
        }, id);
      })
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: cx(['component', className]),
    role: "navigation",
    "aria-label": "".concat((_menuItems$ = menuItems[0]) === null || _menuItems$ === void 0 || (_menuItems$ = _menuItems$.menu) === null || _menuItems$ === void 0 || (_menuItems$ = _menuItems$.node) === null || _menuItems$ === void 0 ? void 0 : _menuItems$.name, " menu"),
    children: renderMenu(hierarchicalMenuItems)
  });
}
NavigationMenu.fragments = {
  entry: (0,client_.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    fragment NavigationMenuItemFragment on MenuItem {\n      id\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  "])))
};
;// CONCATENATED MODULE: ./components/NavigationMenu/index.js


/***/ }),

/***/ 4638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeaturedImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2274);
/* harmony import */ var _PostInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9139);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7633);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Post_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PostInfo__WEBPACK_IMPORTED_MODULE_2__]);
_PostInfo__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Post(_ref) {
  var title = _ref.title,
      content = _ref.content,
      date = _ref.date,
      author = _ref.author,
      uri = _ref.uri,
      featuredImage = _ref.featuredImage;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
    className: (_Post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().component),
    children: [featuredImage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: uri,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_FeaturedImage__WEBPACK_IMPORTED_MODULE_1__/* .FeaturedImage */ .Q, {
          image: featuredImage,
          layout: "responsive",
          className: (_Post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().featuredImage)
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: uri,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
          children: title
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_PostInfo__WEBPACK_IMPORTED_MODULE_2__/* .PostInfo */ .l, {
      date: date,
      author: author,
      className: (_Post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postInfo)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_Post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
      dangerouslySetInnerHTML: {
        __html: content
      }
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8710:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _Post__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Post__WEBPACK_IMPORTED_MODULE_0__]);
_Post__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PostInfo)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1938);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_0__]);
_components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function PostInfo(_ref) {
  var date = _ref.date,
      author = _ref.author,
      subTitle = _ref.subTitle,
      className = _ref.className;

  if (!date && !author && !subTitle) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: className,
    children: [date && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("time", {
      dateTime: date,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_components__WEBPACK_IMPORTED_MODULE_0__/* .FormatDate */ .r2, {
        date: date
      })
    }), date && author && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: "\xA0"
    }), author && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
      children: ["by ", author]
    }), subTitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
      children: subTitle
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* reexport safe */ _PostInfo__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _PostInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2142);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PostInfo__WEBPACK_IMPORTED_MODULE_0__]);
_PostInfo__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ ProductCard_ProductCard)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/CtaButton/index.js + 1 modules
var CtaButton = __webpack_require__(1971);
// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(3284);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_);
// EXTERNAL MODULE: ./components/ProductCard/ProductCard.module.scss
var ProductCard_module = __webpack_require__(6403);
var ProductCard_module_default = /*#__PURE__*/__webpack_require__.n(ProductCard_module);
// EXTERNAL MODULE: ./utilities/priceFormatter.js
var priceFormatter = __webpack_require__(3491);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ProductCard/ProductCard.js








var cx = bind_default().bind((ProductCard_module_default()));

var ProductCard = function ProductCard(_ref) {
  var _product$featuredImag, _product$variants, _product$variants2, _product$variants3, _product$variants4, _product$variants5, _product$variants6, _product$variants7, _product$variants8;

  var product = _ref.product;
  var productHref = "/product/".concat(product === null || product === void 0 ? void 0 : product.handle);
  var thumbnail = product === null || product === void 0 || (_product$featuredImag = product.featuredImage) === null || _product$featuredImag === void 0 ? void 0 : _product$featuredImag.url;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: cx([(ProductCard_module_default()).column, (ProductCard_module_default()).productWrapper]),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ProductCard_module_default()).productImageContainer,
      children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: productHref,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          children: [product !== null && product !== void 0 && (_product$variants = product.variants) !== null && _product$variants !== void 0 && (_product$variants = _product$variants.nodes[0]) !== null && _product$variants !== void 0 && _product$variants.compareAtPrice ? /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (ProductCard_module_default()).onSale,
            children: "Sale"
          }) : null, /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: (ProductCard_module_default()).productImage,
            src: thumbnail !== null && thumbnail !== void 0 ? thumbnail : '/ProductDefault.gif',
            alt: product === null || product === void 0 ? void 0 : product.title,
            loading: "lazy",
            "data-testid": "product-img",
            width: "234",
            height: "180"
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (ProductCard_module_default()).productInfoContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (ProductCard_module_default()).productTitle,
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: productHref,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: product === null || product === void 0 ? void 0 : product.title
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (ProductCard_module_default()).productPrice,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: product !== null && product !== void 0 && (_product$variants2 = product.variants) !== null && _product$variants2 !== void 0 && (_product$variants2 = _product$variants2.nodes[0]) !== null && _product$variants2 !== void 0 && _product$variants2.compareAtPrice ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("del", {
              "data-testid": "compare-price",
              children: (0,priceFormatter/* default */.Z)(product === null || product === void 0 || (_product$variants3 = product.variants) === null || _product$variants3 === void 0 || (_product$variants3 = _product$variants3.nodes[0]) === null || _product$variants3 === void 0 || (_product$variants3 = _product$variants3.compareAtPrice) === null || _product$variants3 === void 0 ? void 0 : _product$variants3.amount, product === null || product === void 0 || (_product$variants4 = product.variants) === null || _product$variants4 === void 0 || (_product$variants4 = _product$variants4.nodes[0]) === null || _product$variants4 === void 0 || (_product$variants4 = _product$variants4.compareAtPrice) === null || _product$variants4 === void 0 ? void 0 : _product$variants4.currencyCode)
            }), ' ', (0,priceFormatter/* default */.Z)(product === null || product === void 0 || (_product$variants5 = product.variants) === null || _product$variants5 === void 0 || (_product$variants5 = _product$variants5.nodes[0]) === null || _product$variants5 === void 0 || (_product$variants5 = _product$variants5.price) === null || _product$variants5 === void 0 ? void 0 : _product$variants5.amount, product === null || product === void 0 || (_product$variants6 = product.variants) === null || _product$variants6 === void 0 || (_product$variants6 = _product$variants6.nodes[0]) === null || _product$variants6 === void 0 || (_product$variants6 = _product$variants6.price) === null || _product$variants6 === void 0 ? void 0 : _product$variants6.currencyCode)]
          }) : (0,priceFormatter/* default */.Z)(product === null || product === void 0 || (_product$variants7 = product.variants) === null || _product$variants7 === void 0 || (_product$variants7 = _product$variants7.nodes[0]) === null || _product$variants7 === void 0 || (_product$variants7 = _product$variants7.price) === null || _product$variants7 === void 0 ? void 0 : _product$variants7.amount, product === null || product === void 0 || (_product$variants8 = product.variants) === null || _product$variants8 === void 0 || (_product$variants8 = _product$variants8.nodes[0]) === null || _product$variants8 === void 0 || (_product$variants8 = _product$variants8.price) === null || _product$variants8 === void 0 ? void 0 : _product$variants8.currencyCode)
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(CtaButton/* CtaButton */.d, {
        ctaLink: productHref,
        ctaLabel: "View product"
      })]
    })]
  });
};

/* harmony default export */ const ProductCard_ProductCard = (ProductCard);
;// CONCATENATED MODULE: ./components/ProductCard/index.js


/***/ }),

/***/ 8010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* reexport */ ProductDetails_ProductDetails)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/useShopifyCart.js + 7 modules
var useShopifyCart = __webpack_require__(3710);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ProductDetails/ProductDescription.js


/**
 * Render the ProductDescription component.
 *
 * @param {Props} props The props object.
 * @param {string} props.description The Product's description value.
 *
 * @returns {React.ReactElement} The ProductDescription component.
 */
var ProductDescription = function ProductDescription(_ref) {
  var description = _ref.description;
  return /*#__PURE__*/jsx_runtime_.jsx("p", {
    dangerouslySetInnerHTML: {
      __html: description
    }
  });
};

/* harmony default export */ const ProductDetails_ProductDescription = (ProductDescription);
// EXTERNAL MODULE: ./utilities/priceFormatter.js
var priceFormatter = __webpack_require__(3491);
;// CONCATENATED MODULE: ./components/ProductDetails/ProductPrice.js

/**
 * Render the ProductPrice component.
 *
 * @param {Props} props The props object.
 * @param {string | number} props.compareAtPrice The original price for this product, if on sale.
 * @param {string | number} props.price The current price for this product.
 * @param {string | number} props.currencyCode The currency code for this product's price.
 *
 * @returns {React.ReactElement} The ProductPrice component.
 */




var ProductPrice = function ProductPrice(_ref) {
  var compareAtPrice = _ref.compareAtPrice,
      price = _ref.price,
      currencyCode = _ref.currencyCode;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
    className: "price",
    children: [compareAtPrice && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      "data-testid": "compare-price",
      children: [/*#__PURE__*/jsx_runtime_.jsx("del", {
        children: (0,priceFormatter/* default */.Z)(compareAtPrice, currencyCode)
      }), ' ']
    }), (0,priceFormatter/* default */.Z)(price, currencyCode)]
  });
};

/* harmony default export */ const ProductDetails_ProductPrice = (ProductPrice);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/CtaButton/index.js + 1 modules
var CtaButton = __webpack_require__(1971);
// EXTERNAL MODULE: ./components/ProductDetails/ProductVariantOptions.module.scss
var ProductVariantOptions_module = __webpack_require__(7015);
var ProductVariantOptions_module_default = /*#__PURE__*/__webpack_require__.n(ProductVariantOptions_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./constants/variant-map.js
var VARIANT_MAP = {
  blue: 'blue',
  purple: 'purple',
  charcoal: 'black',
  red: 'red',
  gray: 'grey'
};
/* harmony default export */ const variant_map = (VARIANT_MAP);
;// CONCATENATED MODULE: ./components/ProductDetails/ProductVariantOptions.js



/**
 * Render the ProductVariantOptions component.
 *
 * @param {Props} props The props object.
 * @param {string} props.selected The selected variant/color for this product.
 * @param {string | number} props.options The variant options for this product.
 * @param {(variant: string) => void} props.handleOptionChange The product variant/color handler. Selecting a variant/color for this product.
 *
 * @returns {React.ReactElement} The ProductVariantOptions component.
 */



var cx = external_classnames_default().bind((ProductVariantOptions_module_default()));

var ProductVariantOptions = function ProductVariantOptions(_ref) {
  var _options$map;

  var selected = _ref.selected,
      options = _ref.options,
      handleOptionChange = _ref.handleOptionChange;

  var handleChange = function handleChange(e) {
    handleOptionChange(e.target.value);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (ProductVariantOptions_module_default()).formField,
    children: options === null || options === void 0 || (_options$map = options.map) === null || _options$map === void 0 ? void 0 : _options$map.call(options, function (option, index) {
      var checked = (selected === null || selected === void 0 ? void 0 : selected.toLowerCase()) === option;
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (ProductVariantOptions_module_default()).formOptionWrapper,
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "radio",
          name: option,
          value: option,
          id: "variant-option-".concat(option),
          "data-testid": "variant-option-".concat(option),
          "aria-label": option,
          defaultChecked: checked,
          onClick: handleChange
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "variant-option-".concat(option),
          className: (ProductVariantOptions_module_default()).formOption,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: cx((ProductVariantOptions_module_default()).formOptionVariant, (ProductVariantOptions_module_default()).formOptionVariantPattern, {
              formOptionChecked: checked
            }),
            style: {
              backgroundColor: variant_map[option]
            }
          })
        })]
      }, "variant-option-".concat(index));
    })
  });
};

/* harmony default export */ const ProductDetails_ProductVariantOptions = (ProductVariantOptions);
// EXTERNAL MODULE: ./components/ProductDetails/ProductMeta.module.scss
var ProductMeta_module = __webpack_require__(6170);
var ProductMeta_module_default = /*#__PURE__*/__webpack_require__.n(ProductMeta_module);
;// CONCATENATED MODULE: ./components/ProductDetails/ProductMeta.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/**
 * Render the ProductMeta component.
 *
 * @param {Props} props The props object.
 * @param {string} props.variant The selected variant value. Used when selecting a product variant image/color.
 * @param {Array<string>} props.collections The list of collections that this product belong to.
 * @param {string} props.variantOptions The available variants/colors for this product.
 * @param {(variant: string) => void} props.handleOptionChange The product variant handler. Selecting product variant/color.
 * @param {(quantity: number | string, variantId: number | string) => void} props.handleSubmit The submit handler. Adding selected product to the cart.
 *
 * @returns {React.ReactElement} The ProductMeta component.
 */





var ProductMeta = function ProductMeta(_ref) {
  var _variant$selectedOpti;

  var variant = _ref.variant,
      collections = _ref.collections,
      variantOptions = _ref.variantOptions,
      handleOptionChange = _ref.handleOptionChange,
      handleSubmit = _ref.handleSubmit;

  var _useState = (0,external_react_.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      quantity = _useState2[0],
      setQuantity = _useState2[1];

  var _useShopifyCart = (0,useShopifyCart/* default */.Z)(),
      cartItems = _useShopifyCart.cartItems,
      cartId = _useShopifyCart.cartId;

  var itemInCart = cartItems === null || cartItems === void 0 ? void 0 : cartItems.find(function (line) {
    return line.merchandise.sku === (variant === null || variant === void 0 ? void 0 : variant.sku);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (ProductMeta_module_default()).productMeta,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["SKU: ", variant === null || variant === void 0 ? void 0 : variant.sku]
    }), collections.length >= 1 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["Collections:", ' ', collections.map(function (collection, index) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [index === 0 ? '' : ', ', /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/product-collection/".concat(collection.handle),
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: collection.title
            })
          }, "product-collection-link-".concat(index))]
        }, "product-collection-".concat(index));
      })]
    }), (variantOptions === null || variantOptions === void 0 ? void 0 : variantOptions.label) !== 'Title' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: variantOptions === null || variantOptions === void 0 ? void 0 : variantOptions.label
      }), /*#__PURE__*/jsx_runtime_.jsx(ProductDetails_ProductVariantOptions, {
        selected: variant === null || variant === void 0 || (_variant$selectedOpti = variant.selectedOptions) === null || _variant$selectedOpti === void 0 || (_variant$selectedOpti = _variant$selectedOpti[0]) === null || _variant$selectedOpti === void 0 ? void 0 : _variant$selectedOpti.value,
        options: variantOptions === null || variantOptions === void 0 ? void 0 : variantOptions.options,
        handleOptionChange: handleOptionChange
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      "aria-label": "quantity-amount-section",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            style: {
              color: 'red'
            },
            children: variant === null || variant === void 0 ? void 0 : variant.quantityAvailable
          }), ' ', "left at this price"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        style: {
          display: 'block'
        },
        "for": "quantity",
        children: "Quantity:"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "number",
        min: "1",
        max: variant === null || variant === void 0 ? void 0 : variant.quantityAvailable,
        step: "1",
        id: "quantity",
        value: quantity,
        onChange: function onChange(e) {
          return setQuantity(e.target.value);
        },
        className: (ProductMeta_module_default()).quantity
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(CtaButton/* CtaButton */.d, {
      cartId: cartId,
      ctaLabel: "Add to cart",
      ctaClick: function ctaClick() {
        return handleSubmit(parseInt(quantity), variant === null || variant === void 0 ? void 0 : variant.id);
      },
      disabled: (itemInCart === null || itemInCart === void 0 ? void 0 : itemInCart.quantity) === (variant === null || variant === void 0 ? void 0 : variant.quantityAvailable)
    })]
  });
};

/* harmony default export */ const ProductDetails_ProductMeta = (ProductMeta);
// EXTERNAL MODULE: ./components/ProductDetails/ProductGallery.module.scss
var ProductGallery_module = __webpack_require__(6024);
var ProductGallery_module_default = /*#__PURE__*/__webpack_require__.n(ProductGallery_module);
;// CONCATENATED MODULE: ./components/ProductDetails/ProductGallery.js

/**
 * Render the ProductGallery component.
 * @typedef {Object} Image
 * @property {string} altText The alternate text for the image, if the image cannot be displayed.
 *
 * @param {Props} props The props object.
 * @param {string} props.selected The image of the current selected variant.
 * @param {Image} props.images The list of variant images.
 * @param {(image: Image) => void} props.handleImageChange The image change handler. Based on which variant was chosen.
 *
 * @returns {React.ReactElement} The ProductGallery component.
 */





function ProductGallery(_ref) {
  var selected = _ref.selected,
      images = _ref.images,
      handleImageChange = _ref.handleImageChange;

  var handleClick = function handleClick(selectedImage) {
    handleImageChange(selectedImage);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ProductGallery_module_default()).featured,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: selected,
        alt: "product image",
        width: "604",
        height: "464"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ProductGallery_module_default()).productGallery,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (ProductGallery_module_default()).imageGrid,
        children: images.length > 1 && images.map(function (image, index) {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (ProductGallery_module_default()).productImage,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: image,
              className: (ProductGallery_module_default()).productGalleryThumbnail,
              "data-testid": "slide-image-".concat(index),
              alt: image === null || image === void 0 ? void 0 : image.altText,
              loading: "lazy",
              onClick: function onClick() {
                return handleClick(image);
              },
              width: "604",
              height: "464"
            }, "slide-image-".concat(index))
          }, "slide-image-".concat(index));
        })
      })
    })]
  });
}

/* harmony default export */ const ProductDetails_ProductGallery = (ProductGallery);
// EXTERNAL MODULE: ./components/ProductDetails/ProductDetails.module.scss
var ProductDetails_module = __webpack_require__(9028);
var ProductDetails_module_default = /*#__PURE__*/__webpack_require__.n(ProductDetails_module);
// EXTERNAL MODULE: ./utilities/shopifyConfiguration.js
var shopifyConfiguration = __webpack_require__(1168);
// EXTERNAL MODULE: ./utilities/ConnectionUnavailable.js
var ConnectionUnavailable = __webpack_require__(8932);
// EXTERNAL MODULE: ./components/ProductNotification/index.js + 1 modules
var ProductNotification = __webpack_require__(7937);
;// CONCATENATED MODULE: ./components/ProductDetails/ProductDetails.js
function ProductDetails_slicedToArray(arr, i) { return ProductDetails_arrayWithHoles(arr) || ProductDetails_iterableToArrayLimit(arr, i) || ProductDetails_unsupportedIterableToArray(arr, i) || ProductDetails_nonIterableRest(); }

function ProductDetails_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ProductDetails_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ProductDetails_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ProductDetails_arrayLikeToArray(o, minLen); }

function ProductDetails_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function ProductDetails_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ProductDetails_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











/**
 * Render the ProductDetails component.
 *
 * @param {Props} props The props object.
 * @param {Object} props.product The Product object containing the details to render.
 * @param {(Object<string, string>) => void} props.setProductNotification The function that displays the
 * product notification component when the user performs cart operations.
 * @returns {React.ReactElement} The ProductDetails component.
 */




var ProductDetails = function ProductDetails(_ref) {
  var _product$variants, _product$collections$, _product$collections, _product$variants2, _product$variants3, _product$variants3$ma, _product$variants4, _product$variants4$ma, _selectedVariant$imag, _selectedVariant$sele, _selectedVariant$comp, _selectedVariant$pric, _selectedVariant$pric2;

  var product = _ref.product;

  var _useState = (0,external_react_.useState)(product === null || product === void 0 || (_product$variants = product.variants) === null || _product$variants === void 0 ? void 0 : _product$variants.nodes[0]),
      _useState2 = ProductDetails_slicedToArray(_useState, 2),
      selectedVariant = _useState2[0],
      setSelectedVariant = _useState2[1];

  var _useState3 = (0,external_react_.useState)(),
      _useState4 = ProductDetails_slicedToArray(_useState3, 2),
      productNotification = _useState4[0],
      setProductNotification = _useState4[1];

  var _useShopifyCart = (0,useShopifyCart/* default */.Z)(),
      addToCart = _useShopifyCart.addToCart,
      cartId = _useShopifyCart.cartId,
      retrieveCart = _useShopifyCart.retrieveCart,
      setCartData = _useShopifyCart.setCartData;

  var collections = (_product$collections$ = product === null || product === void 0 || (_product$collections = product.collections) === null || _product$collections === void 0 ? void 0 : _product$collections.nodes) !== null && _product$collections$ !== void 0 ? _product$collections$ : [];
  var variantsLabel = product === null || product === void 0 || (_product$variants2 = product.variants) === null || _product$variants2 === void 0 || (_product$variants2 = _product$variants2.nodes[0]) === null || _product$variants2 === void 0 || (_product$variants2 = _product$variants2.selectedOptions) === null || _product$variants2 === void 0 || (_product$variants2 = _product$variants2[0]) === null || _product$variants2 === void 0 ? void 0 : _product$variants2.name;
  var variantsOptions = product === null || product === void 0 || (_product$variants3 = product.variants) === null || _product$variants3 === void 0 || (_product$variants3 = _product$variants3.nodes) === null || _product$variants3 === void 0 || (_product$variants3$ma = _product$variants3.map) === null || _product$variants3$ma === void 0 ? void 0 : _product$variants3$ma.call(_product$variants3, function (variant) {
    var _variant$selectedOpti;

    return (_variant$selectedOpti = variant.selectedOptions) === null || _variant$selectedOpti === void 0 || (_variant$selectedOpti = _variant$selectedOpti[0]) === null || _variant$selectedOpti === void 0 ? void 0 : _variant$selectedOpti.value.toLowerCase();
  });
  var variantImages = product === null || product === void 0 || (_product$variants4 = product.variants) === null || _product$variants4 === void 0 || (_product$variants4 = _product$variants4.nodes) === null || _product$variants4 === void 0 || (_product$variants4$ma = _product$variants4.map) === null || _product$variants4$ma === void 0 ? void 0 : _product$variants4$ma.call(_product$variants4, function (variantImage) {
    var _variantImage$image;

    return variantImage === null || variantImage === void 0 || (_variantImage$image = variantImage.image) === null || _variantImage$image === void 0 ? void 0 : _variantImage$image.url;
  });

  var handleVariantChange = function handleVariantChange(property) {
    var variant = product.variants.nodes.find(function (variant) {
      return variant.selectedOptions[0].value.toLowerCase() === property || variant.image.url === property;
    });
    setSelectedVariant(variant);
  };

  var handleSubmit = function handleSubmit(quantity, variantId) {
    addToCart({
      variables: {
        cartId: cartId,
        lines: [{
          quantity: quantity,
          merchandiseId: variantId
        }]
      }
    }).then(function () {
      setProductNotification({
        message: "".concat(product === null || product === void 0 ? void 0 : product.title, " has been added to your cart."),
        className: 'success'
      });
    })["catch"](function (err) {
      console.error(err);
      setProductNotification({
        message: 'There was an issue adding this item to the cart',
        className: 'error'
      });
    })["finally"](function () {
      return retrieveCart().then(function (response) {
        setCartData(response.data.cart);
        window.scrollTo(0, 0);
      });
    });
  };

  if (!shopifyConfiguration/* default.available */.Z.available()) {
    return /*#__PURE__*/jsx_runtime_.jsx(ConnectionUnavailable/* default */.Z, {});
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [productNotification && /*#__PURE__*/jsx_runtime_.jsx(ProductNotification/* ProductNotification */.q, {
      productNotification: productNotification
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (ProductDetails_module_default()).component,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (ProductDetails_module_default()).detailsColumn,
        children: /*#__PURE__*/jsx_runtime_.jsx(ProductDetails_ProductGallery, {
          images: variantImages,
          selected: selectedVariant === null || selectedVariant === void 0 || (_selectedVariant$imag = selectedVariant.image) === null || _selectedVariant$imag === void 0 ? void 0 : _selectedVariant$imag.url,
          variant: selectedVariant === null || selectedVariant === void 0 || (_selectedVariant$sele = selectedVariant.selectedOptions) === null || _selectedVariant$sele === void 0 || (_selectedVariant$sele = _selectedVariant$sele[0]) === null || _selectedVariant$sele === void 0 ? void 0 : _selectedVariant$sele.value,
          handleImageChange: handleVariantChange
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (ProductDetails_module_default()).detailsColumn,
        children: [(selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.compareAtPrice) && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (ProductDetails_module_default()).onSale,
          children: "Sale"
        }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: product === null || product === void 0 ? void 0 : product.title
        }), /*#__PURE__*/jsx_runtime_.jsx(ProductDetails_ProductPrice, {
          compareAtPrice: selectedVariant === null || selectedVariant === void 0 || (_selectedVariant$comp = selectedVariant.compareAtPrice) === null || _selectedVariant$comp === void 0 ? void 0 : _selectedVariant$comp.amount,
          price: selectedVariant === null || selectedVariant === void 0 || (_selectedVariant$pric = selectedVariant.price) === null || _selectedVariant$pric === void 0 ? void 0 : _selectedVariant$pric.amount,
          currencyCode: selectedVariant === null || selectedVariant === void 0 || (_selectedVariant$pric2 = selectedVariant.price) === null || _selectedVariant$pric2 === void 0 ? void 0 : _selectedVariant$pric2.currencyCode
        }), /*#__PURE__*/jsx_runtime_.jsx(ProductDetails_ProductDescription, {
          description: product === null || product === void 0 ? void 0 : product.description
        }), /*#__PURE__*/jsx_runtime_.jsx(ProductDetails_ProductMeta, {
          variant: selectedVariant,
          collections: collections,
          variantOptions: {
            label: variantsLabel,
            options: variantsOptions
          },
          handleSubmit: handleSubmit,
          handleOptionChange: handleVariantChange
        })]
      })]
    })]
  });
};

/* harmony default export */ const ProductDetails_ProductDetails = (ProductDetails);
;// CONCATENATED MODULE: ./components/ProductDetails/index.js


/***/ }),

/***/ 6235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* reexport */ ProductList_ProductList)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./queries/Products.js
var Products = __webpack_require__(1328);
// EXTERNAL MODULE: ./queries/Collections.js
var Collections = __webpack_require__(864);
// EXTERNAL MODULE: ./components/Loader/index.js + 1 modules
var Loader = __webpack_require__(694);
// EXTERNAL MODULE: ./components/ProductCard/index.js + 1 modules
var ProductCard = __webpack_require__(3656);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ProductList/ShopFilter.js

/**
 * Render the ShopFilter component.
 *
 * @param {Props} props The props object.
 * @param {string} props.sortValue The selected option on the base of which products will be filtered.
 * @param {string} props.setSortValue The selected option's value.
 * @param {string} props.collection Whether to show latest products by collection or all products.

 * @returns {React.ReactElement} The ShopFilter component.
 */



var ShopFilter = function ShopFilter(_ref) {
  var sortValue = _ref.sortValue,
      setSortValue = _ref.setSortValue,
      collection = _ref.collection;

  var handleChange = function handleChange(event) {
    setSortValue(event.target.value);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
    role: "listbox",
    name: "shop-filter",
    onChange: handleChange,
    value: sortValue,
    "aria-label": "shop-filter",
    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
      role: "option",
      value: collection ? 'collection-latest' : 'latest',
      children: "Latest"
    }), /*#__PURE__*/jsx_runtime_.jsx("option", {
      role: "option",
      value: "best-selling",
      children: "Best selling"
    }), /*#__PURE__*/jsx_runtime_.jsx("option", {
      role: "option",
      value: "price-asc",
      children: "Price: Low to High"
    }), /*#__PURE__*/jsx_runtime_.jsx("option", {
      role: "option",
      value: "price-desc",
      children: "Price: High to Low"
    })]
  });
};
;// CONCATENATED MODULE: ./constants/filters.js
var FILTERS = {
  'best-selling': {
    sortKey: 'BEST_SELLING'
  },
  'collection-latest': {
    sortKey: 'CREATED'
  },
  latest: {
    sortKey: 'CREATED_AT'
  },
  'price-asc': {
    sortKey: 'PRICE'
  },
  'price-desc': {
    sortKey: 'PRICE',
    reverse: true
  }
};
// EXTERNAL MODULE: ./utilities/shopifyConfiguration.js
var shopifyConfiguration = __webpack_require__(1168);
// EXTERNAL MODULE: ./utilities/ConnectionUnavailable.js
var ConnectionUnavailable = __webpack_require__(8932);
;// CONCATENATED MODULE: ./components/ProductList/ProductList.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











/**
 * Render the ProductList component.
 *
 * @param {Props} props The props object.
 * @param {string} props.collection (Optional) If provided, queries products by collection, otherwise queries all products.
 *
 * @returns {React.ReactElement} The ProductList component.
 */





var ProductList = function ProductList(_ref) {
  var _FILTERS$sortValue, _FILTERS$sortValue2, _productsData$product, _productsData$collect, _products$map;

  var _ref$collection = _ref.collection,
      collection = _ref$collection === void 0 ? null : _ref$collection;

  var _useState = (0,external_react_.useState)(collection ? 'collection-latest' : 'latest'),
      _useState2 = _slicedToArray(_useState, 2),
      sortValue = _useState2[0],
      setSortValue = _useState2[1];

  var QUERY = collection ? Collections/* GET_COLLECTION */.i : Products/* GET_PRODUCTS */.tT;

  var _useQuery = (0,client_.useQuery)(QUERY, {
    variables: {
      sortKey: (_FILTERS$sortValue = FILTERS[sortValue]) === null || _FILTERS$sortValue === void 0 ? void 0 : _FILTERS$sortValue.sortKey,
      reverse: (_FILTERS$sortValue2 = FILTERS[sortValue]) === null || _FILTERS$sortValue2 === void 0 ? void 0 : _FILTERS$sortValue2.reverse,
      handle: collection
    }
  }),
      productsData = _useQuery.data,
      loading = _useQuery.loading;

  var products = (productsData === null || productsData === void 0 || (_productsData$product = productsData.products) === null || _productsData$product === void 0 ? void 0 : _productsData$product.nodes) || (productsData === null || productsData === void 0 || (_productsData$collect = productsData.collection) === null || _productsData$collect === void 0 || (_productsData$collect = _productsData$collect.products) === null || _productsData$collect === void 0 ? void 0 : _productsData$collect.nodes);

  if (!shopifyConfiguration/* default.available */.Z.available()) {
    return /*#__PURE__*/jsx_runtime_.jsx(ConnectionUnavailable/* default */.Z, {});
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ShopFilter, {
      sortValue: sortValue,
      setSortValue: setSortValue,
      collection: collection
    }), loading && /*#__PURE__*/jsx_runtime_.jsx(Loader/* Loader */.a, {}), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "shop-grid",
      children: products === null || products === void 0 || (_products$map = products.map) === null || _products$map === void 0 ? void 0 : _products$map.call(products, function (product) {
        return /*#__PURE__*/jsx_runtime_.jsx(ProductCard/* ProductCard */.I, {
          product: product
        }, product.id);
      })
    })]
  });
};

/* harmony default export */ const ProductList_ProductList = (ProductList);
;// CONCATENATED MODULE: ./components/ProductList/index.js


/***/ }),

/***/ 7937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* reexport */ ProductNotification_ProductNotification)
});

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/ProductNotification/ProductNotification.module.scss
var ProductNotification_module = __webpack_require__(6845);
var ProductNotification_module_default = /*#__PURE__*/__webpack_require__.n(ProductNotification_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ProductNotification/ProductNotification.js




var cx = external_classnames_default().bind((ProductNotification_module_default()));

var ProductNotification = function ProductNotification(_ref) {
  var productNotification = _ref.productNotification,
      cartPage = _ref.cartPage;
  return productNotification.close ? null : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: cx((ProductNotification_module_default()).notification, (ProductNotification_module_default())[productNotification.className]),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ProductNotification_module_default()).message,
      children: productNotification.message
    }), !cartPage && /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: "/cart",
      children: "View cart"
    })]
  });
};

/* harmony default export */ const ProductNotification_ProductNotification = (ProductNotification);
;// CONCATENATED MODULE: ./components/ProductNotification/index.js


/***/ }),

/***/ 5846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* reexport */ ProductSection_ProductSection)
});

// EXTERNAL MODULE: ./components/ProductSection/ProductSection.module.scss
var ProductSection_module = __webpack_require__(1410);
var ProductSection_module_default = /*#__PURE__*/__webpack_require__.n(ProductSection_module);
// EXTERNAL MODULE: ./components/ProductCard/index.js + 1 modules
var ProductCard = __webpack_require__(3656);
// EXTERNAL MODULE: ./components/Container/index.js + 1 modules
var Container = __webpack_require__(7049);
// EXTERNAL MODULE: ./utilities/ConnectionUnavailable.js
var ConnectionUnavailable = __webpack_require__(8932);
// EXTERNAL MODULE: ./utilities/shopifyConfiguration.js
var shopifyConfiguration = __webpack_require__(1168);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ProductSection/ProductSection.js








var ProductSection = function ProductSection(_ref) {
  var _products$map;

  var products = _ref.products,
      heading = _ref.heading;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "section ".concat((ProductSection_module_default()).component),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: heading
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "section",
        children: !shopifyConfiguration/* default.available */.Z.available() ? /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(ConnectionUnavailable/* default */.Z, {})
        }) : products === null || products === void 0 || (_products$map = products.map) === null || _products$map === void 0 ? void 0 : _products$map.call(products, function (product) {
          return /*#__PURE__*/jsx_runtime_.jsx(ProductCard/* ProductCard */.I, {
            product: product
          }, "".concat(heading, "-section-").concat(product.id));
        })
      })]
    })
  });
};

/* harmony default export */ const ProductSection_ProductSection = (ProductSection);
;// CONCATENATED MODULE: ./components/ProductSection/index.js


/***/ }),

/***/ 1838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* reexport */ PromoSection_PromoSection)
});

// EXTERNAL MODULE: ./components/Container/index.js + 1 modules
var Container = __webpack_require__(7049);
// EXTERNAL MODULE: ./components/CtaButton/index.js + 1 modules
var CtaButton = __webpack_require__(1971);
// EXTERNAL MODULE: ./components/PromoSection/PromoSection.module.scss
var PromoSection_module = __webpack_require__(1004);
var PromoSection_module_default = /*#__PURE__*/__webpack_require__.n(PromoSection_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/PromoSection/PromoSection.js






var PromoSection = function PromoSection(_ref) {
  var _ref$showCta = _ref.showCta,
      showCta = _ref$showCta === void 0 ? false : _ref$showCta,
      _ref$ctaLink = _ref.ctaLink,
      ctaLink = _ref$ctaLink === void 0 ? null : _ref$ctaLink,
      _ref$ctaLabel = _ref.ctaLabel,
      ctaLabel = _ref$ctaLabel === void 0 ? null : _ref$ctaLabel,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? null : _ref$title,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? null : _ref$description;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "section ".concat((PromoSection_module_default()).component),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: (PromoSection_module_default()).title,
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (PromoSection_module_default()).description,
        children: description
      }), showCta && /*#__PURE__*/jsx_runtime_.jsx(CtaButton/* CtaButton */.d, {
        ctaLink: ctaLink,
        ctaLabel: ctaLabel
      })]
    })
  });
};

/* harmony default export */ const PromoSection_PromoSection = (PromoSection);
;// CONCATENATED MODULE: ./components/PromoSection/index.js


/***/ }),

/***/ 2837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* reexport */ SEO)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/SEO/SEO.js

/**
 * Provide SEO related meta tags to a page.
 *
 * @param {Props} props The props object.
 * @param {string} props.title Used for the page title, og:title, twitter:title, etc.
 * @param {string} props.description Used for the meta description, og:description, twitter:description, etc.
 * @param {string} props.imageUrl Used for the og:image and twitter:image. NOTE: Must be an absolute url.
 * @param {string} props.url Used for the og:url and twitter:url.
 *
 * @returns {React.ReactElement} The SEO component
 */




function SEO(_ref) {
  var title = _ref.title,
      description = _ref.description,
      imageUrl = _ref.imageUrl,
      url = _ref.url;

  if (!title && !description && !imageUrl && !url) {
    return null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:card",
        content: "summary_large_image"
      }), title && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "title",
          content: title
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:title",
          content: title
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "twitter:title",
          content: title
        })]
      }), description && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "description",
          content: description
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:description",
          content: description
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "twitter:description",
          content: description
        })]
      }), imageUrl && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:image",
          content: imageUrl
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "twitter:image",
          content: imageUrl
        })]
      }), url && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:url",
          content: url
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "twitter:url",
          content: url
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/SEO/index.js


/***/ }),

/***/ 3149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchInput_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(605);
/* harmony import */ var _SearchInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SearchInput_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _excluded = ["value", "onChange"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * Render the SearchInput component.
 *
 * @param {Props} props The props object.
 * @param {string} props.value The search input value
 * @param {(newValue: string) => void} props.onChange The search input onChange handler
 * @returns {React.ReactElement} The SearchInput component.
 */



function SearchInput(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var input = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Clear and focus the input on initial render

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    input.current.value = '';
    input.current.focus();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (_SearchInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().component),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaSearch, {
      className: (_SearchInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
      className: "sr-only",
      htmlFor: "search",
      children: "Search"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", _objectSpread({
      ref: input,
      id: "search",
      name: "search",
      role: "textbox",
      className: (_SearchInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),
      value: value,
      onChange: function onChange(e) {
        if (_onChange) {
          _onChange(e.target.value);
        }
      },
      autoFocus: true,
      onFocus: function onFocus(e) {
        return e.target.select();
      },
      type: "text",
      placeholder: "Start typing..."
    }, props))]
  });
}

/***/ }),

/***/ 6891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchRecommendations)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchRecommendations_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8554);
/* harmony import */ var _SearchRecommendations_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SearchRecommendations_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Render the SearchRecommendations component.
 *
 * @returns {React.ReactElement} The SearchRecommendations component.
 */



function SearchRecommendations(_ref) {
  var _collections$map;

  var collections = _ref.collections;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (_SearchRecommendations_module_scss__WEBPACK_IMPORTED_MODULE_2___default().component),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
      children: "Browse Collections"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("ul", {
      children: collections === null || collections === void 0 || (_collections$map = collections.map) === null || _collections$map === void 0 ? void 0 : _collections$map.call(collections, function (collection, index) {
        var _ref2, _ref3;

        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: (_ref3 = '/product-collection/' + collection.handle) !== null && _ref3 !== void 0 ? _ref3 : '#',
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
              children: collection.title
            })
          })
        }, (_ref2 = collection.title + '-' + index) !== null && _ref2 !== void 0 ? _ref2 : 0);
      })
    })]
  });
}

/***/ }),

/***/ 5624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SearchResults)
});

// EXTERNAL MODULE: ./components/ProductCard/index.js + 1 modules
var ProductCard = __webpack_require__(3656);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/SearchSection/LoadingSearchResult.js



/**
 * A component that mimics a search result in a loading state for better
 * perceived performance.
 *
 * @returns {React.ReactElement} The LoadingSearchResults component.
 */
function LoadingSearchResult(_ref) {
  var styles = _ref.styles;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: styles['loading-result'],
    "data-testid": "loading-result",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: styles['loading-result-title']
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: styles['loading-result-meta']
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: styles['loading-result-excerpt']
    })]
  });
}

/* harmony default export */ const SearchSection_LoadingSearchResult = (LoadingSearchResult);
// EXTERNAL MODULE: ./components/SearchSection/SearchResults.module.scss
var SearchResults_module = __webpack_require__(8211);
var SearchResults_module_default = /*#__PURE__*/__webpack_require__.n(SearchResults_module);
;// CONCATENATED MODULE: ./components/SearchSection/SearchResults.js



/**
 * Renders the search results list.
 *
 * @param {Props} props The props object.
 * @param {object[]} props.searchResults The search results list.
 * @param {boolean} props.isLoading Whether the search results are loading.
 * @returns {React.ReactElement} The SearchResults component.
 */




function SearchResults(_ref) {
  var searchResults = _ref.searchResults,
      isLoading = _ref.isLoading;

  // If there are no results, or are loading, return null.
  if (!isLoading && searchResults === null) {
    return null;
  } // If there are no results, return a message.


  if (!isLoading && !(searchResults !== null && searchResults !== void 0 && searchResults.length)) {
    return /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "No results"
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (SearchResults_module_default()).component,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Results"
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "shop-grid",
      children: searchResults === null || searchResults === void 0 ? void 0 : searchResults.map(function (product) {
        return /*#__PURE__*/jsx_runtime_.jsx(ProductCard/* ProductCard */.I, {
          product: product
        }, product.id);
      })
    }), isLoading === true && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(SearchSection_LoadingSearchResult, {
        styles: (SearchResults_module_default())
      }), /*#__PURE__*/jsx_runtime_.jsx(SearchSection_LoadingSearchResult, {
        styles: (SearchResults_module_default())
      }), /*#__PURE__*/jsx_runtime_.jsx(SearchSection_LoadingSearchResult, {
        styles: (SearchResults_module_default())
      })]
    })]
  });
}

/***/ }),

/***/ 7764:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3149);
/* harmony import */ var _SearchRecommendations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6891);
/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5624);
/* harmony import */ var _hooks_useSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4245);
/* harmony import */ var _SearchSection_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7678);
/* harmony import */ var _SearchSection_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SearchSection_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utilities_shopifyConfiguration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1168);
/* harmony import */ var _utilities_ConnectionUnavailable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8932);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useSearch__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_useSearch__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











var SearchSection = function SearchSection(_ref) {
  var collections = _ref.collections;

  var _useSearch = (0,_hooks_useSearch__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(),
      searchQuery = _useSearch.searchQuery,
      setSearchQuery = _useSearch.setSearchQuery,
      searchResults = _useSearch.searchResults,
      isLoading = _useSearch.isLoading,
      error = _useSearch.error;

  if (!_utilities_shopifyConfiguration__WEBPACK_IMPORTED_MODULE_4__/* ["default"].available */ .Z.available()) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_utilities_ConnectionUnavailable__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_SearchSection_module_scss__WEBPACK_IMPORTED_MODULE_7___default().component),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h2", {
        className: (_SearchSection_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["search-header-text"]),
        children: searchQuery && !isLoading ? "Showing results for \"".concat(searchQuery, "\"") : "Search"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_SearchInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        value: searchQuery,
        onChange: function onChange(newValue) {
          return setSearchQuery(newValue);
        }
      })]
    }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "alert-error",
      children: "An error has occurred. Please refresh and try again."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_SearchResults__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      searchResults: searchResults,
      isLoading: isLoading
    }), !isLoading && searchResults === null && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_SearchRecommendations__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      collections: collections
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchSection);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _SearchSection__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _SearchSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7764);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchSection__WEBPACK_IMPORTED_MODULE_0__]);
_SearchSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* reexport */ SkipNavigationLink)
});

// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(3284);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_);
// EXTERNAL MODULE: ./constants/selectors.js
var selectors = __webpack_require__(7281);
// EXTERNAL MODULE: ./components/SkipNavigationLink/SkipNavigationLink.module.scss
var SkipNavigationLink_module = __webpack_require__(2944);
var SkipNavigationLink_module_default = /*#__PURE__*/__webpack_require__.n(SkipNavigationLink_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/SkipNavigationLink/SkipNavigationLink.js




var cx = bind_default().bind((SkipNavigationLink_module_default()));
function SkipNavigationLink() {
  return /*#__PURE__*/jsx_runtime_.jsx("a", {
    className: cx(['component', 'sr-only']),
    href: "#".concat(selectors/* MAIN_CONTENT_ID */.O),
    children: "Skip To Main Content"
  });
}
;// CONCATENATED MODULE: ./components/SkipNavigationLink/index.js


/***/ }),

/***/ 7436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* reexport */ TestimonialsSection_TestimonialsSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/TestimonialsSection/TestimonialCard.js



var TestimonialCard = function TestimonialCard(_ref) {
  var image = _ref.image,
      blurb = _ref.blurb,
      author = _ref.author,
      styles = _ref.styles;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: styles.testimonialCard,
    children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: image,
        alt: "Customer Testimonial",
        width: "564",
        height: "380"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      style: {
        fontStyle: 'italic'
      },
      children: blurb
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      style: {
        fontWeight: 'bold'
      },
      children: author
    })]
  });
};

/* harmony default export */ const TestimonialsSection_TestimonialCard = (TestimonialCard);
// EXTERNAL MODULE: ./components/Container/index.js + 1 modules
var Container = __webpack_require__(7049);
// EXTERNAL MODULE: ./components/TestimonialsSection/TestimonialsSection.module.scss
var TestimonialsSection_module = __webpack_require__(6550);
var TestimonialsSection_module_default = /*#__PURE__*/__webpack_require__.n(TestimonialsSection_module);
;// CONCATENATED MODULE: ./components/TestimonialsSection/TestimonialsSection.js






var TestimonialsSection = function TestimonialsSection() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "section ".concat((TestimonialsSection_module_default()).component),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "Customer Testimonials"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "section",
        children: [/*#__PURE__*/jsx_runtime_.jsx(TestimonialsSection_TestimonialCard, {
          image: "https://demo.studiopress.com/page-builder/spend/eso_spend_customer_testimonial_1.jpg",
          blurb: "I can query all my Shopify products from Faust and create content with WordPress!",
          author: "Anne Alpine / Nature First",
          styles: (TestimonialsSection_module_default())
        }), /*#__PURE__*/jsx_runtime_.jsx(TestimonialsSection_TestimonialCard, {
          image: "https://demo.studiopress.com/page-builder/spend/eso_spend_customer_testimonial_2.jpg",
          blurb: "I can use GraphQL to access my WordPress and Product data side by side in this Faust.js template with eCommerce components!",
          author: "Riley Glacier / Snap Crackle",
          styles: (TestimonialsSection_module_default())
        })]
      })]
    })
  });
};

/* harmony default export */ const TestimonialsSection_TestimonialsSection = (TestimonialsSection);
;// CONCATENATED MODULE: ./components/TestimonialsSection/index.js


/***/ }),

/***/ 1938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_4__.$),
/* harmony export */   "HJ": () => (/* reexport safe */ _SEO__WEBPACK_IMPORTED_MODULE_22__.H),
/* harmony export */   "JE": () => (/* reexport safe */ _TestimonialsSection__WEBPACK_IMPORTED_MODULE_19__.J),
/* harmony export */   "Q_": () => (/* reexport safe */ _FeaturedImage__WEBPACK_IMPORTED_MODULE_3__.Q),
/* harmony export */   "SO": () => (/* reexport safe */ _Post__WEBPACK_IMPORTED_MODULE_21__.S),
/* harmony export */   "VM": () => (/* reexport safe */ _Hero__WEBPACK_IMPORTED_MODULE_20__.V),
/* harmony export */   "W2": () => (/* reexport safe */ _Container__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   "X6": () => (/* reexport safe */ _Heading__WEBPACK_IMPORTED_MODULE_7__.X),
/* harmony export */   "XO": () => (/* reexport safe */ _SkipNavigationLink__WEBPACK_IMPORTED_MODULE_18__.X),
/* harmony export */   "cm": () => (/* reexport safe */ _ProductList__WEBPACK_IMPORTED_MODULE_15__.c),
/* harmony export */   "f4": () => (/* reexport safe */ _ProductDetails__WEBPACK_IMPORTED_MODULE_14__.f),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_6__.h),
/* harmony export */   "i9": () => (/* reexport safe */ _NavigationMenu__WEBPACK_IMPORTED_MODULE_9__.i),
/* harmony export */   "l0": () => (/* reexport safe */ _PostInfo__WEBPACK_IMPORTED_MODULE_10__.l),
/* harmony export */   "lC": () => (/* reexport safe */ _ProductSection__WEBPACK_IMPORTED_MODULE_12__.l),
/* harmony export */   "or": () => (/* reexport safe */ _Main__WEBPACK_IMPORTED_MODULE_8__.o),
/* harmony export */   "r2": () => (/* reexport safe */ _FormatDate__WEBPACK_IMPORTED_MODULE_5__.r),
/* harmony export */   "vs": () => (/* reexport safe */ _ContentWrapper__WEBPACK_IMPORTED_MODULE_1__.v),
/* harmony export */   "wR": () => (/* reexport safe */ _PromoSection__WEBPACK_IMPORTED_MODULE_17__.w),
/* harmony export */   "wq": () => (/* reexport safe */ _EntryHeader__WEBPACK_IMPORTED_MODULE_2__.w),
/* harmony export */   "yd": () => (/* reexport safe */ _SearchSection__WEBPACK_IMPORTED_MODULE_13__.y)
/* harmony export */ });
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7049);
/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(582);
/* harmony import */ var _EntryHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8626);
/* harmony import */ var _FeaturedImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2274);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3133);
/* harmony import */ var _FormatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8670);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(473);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9446);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3852);
/* harmony import */ var _NavigationMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(539);
/* harmony import */ var _PostInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9139);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3656);
/* harmony import */ var _ProductSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5846);
/* harmony import */ var _SearchSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3990);
/* harmony import */ var _ProductDetails__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8010);
/* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6235);
/* harmony import */ var _ProductNotification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7937);
/* harmony import */ var _PromoSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1838);
/* harmony import */ var _SkipNavigationLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4410);
/* harmony import */ var _TestimonialsSection__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7436);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(646);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8710);
/* harmony import */ var _SEO__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2837);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EntryHeader__WEBPACK_IMPORTED_MODULE_2__, _Footer__WEBPACK_IMPORTED_MODULE_4__, _Header__WEBPACK_IMPORTED_MODULE_6__, _PostInfo__WEBPACK_IMPORTED_MODULE_10__, _SearchSection__WEBPACK_IMPORTED_MODULE_13__, _Hero__WEBPACK_IMPORTED_MODULE_20__, _Post__WEBPACK_IMPORTED_MODULE_21__]);
([_EntryHeader__WEBPACK_IMPORTED_MODULE_2__, _Footer__WEBPACK_IMPORTED_MODULE_4__, _Header__WEBPACK_IMPORTED_MODULE_6__, _PostInfo__WEBPACK_IMPORTED_MODULE_10__, _SearchSection__WEBPACK_IMPORTED_MODULE_13__, _Hero__WEBPACK_IMPORTED_MODULE_20__, _Post__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ FOOTER_LOCATION),
/* harmony export */   "q": () => (/* binding */ PRIMARY_LOCATION)
/* harmony export */ });
var PRIMARY_LOCATION = 'PRIMARY';
var FOOTER_LOCATION = 'FOOTER';

/***/ }),

/***/ 7281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ MAIN_CONTENT_ID)
/* harmony export */ });
var MAIN_CONTENT_ID = 'main-content';

/***/ }),

/***/ 6509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ BlogInfoFragment)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var BlogInfoFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  fragment BlogInfoFragment on GeneralSettings {\n    title\n    description\n  }\n"])));

/***/ }),

/***/ 4245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7105);
/* harmony import */ var _queries_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([use_debounce__WEBPACK_IMPORTED_MODULE_2__]);
use_debounce__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var searchInputDebounceMs = 500;
/**
 * useSearch hook enables a user to perform search functionality from their Shopify site
 * with proper debouncing of the search input.
 *
 * @returns {{searchQuery: string, setSearchQuery: (newValue) => void, searchResults: object[] | null, loadMore: () => void, isLoading: boolean}} Result object
 */

function useSearch() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchQuery = _useState2[0],
      setSearchQuery = _useState2[1];

  var _useDebounce = (0,use_debounce__WEBPACK_IMPORTED_MODULE_2__.useDebounce)(searchQuery, searchInputDebounceMs),
      _useDebounce2 = _slicedToArray(_useDebounce, 1),
      debouncedSearchQuery = _useDebounce2[0];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      searchResults = _useState4[0],
      setSearchResults = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      error = _useState8[0],
      setError = _useState8[1];
  /**
   * Fetch results based on the search query and cursor if we are paginating.
   * @param {string} searchQuery The user inputted search query
   * @returns
   */


  var _useLazyQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useLazyQuery)(_queries_Products__WEBPACK_IMPORTED_MODULE_3__/* .SEARCH_PRODUCT */ .F),
      _useLazyQuery2 = _slicedToArray(_useLazyQuery, 2),
      fetchResults = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      searchData = _useLazyQuery2$.data,
      searchError = _useLazyQuery2$.error;
  /**
   * Fetch initial results. This can happen either upon first search. Or after
   * a search query has been deleted and the user types a new search query.
   */


  var fetchInitialResults = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          setIsLoading(true);
          clearResults();
          fetchResults({
            variables: {
              query: debouncedSearchQuery
            }
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), [debouncedSearchQuery, fetchResults]);

  function clearResults() {
    setSearchResults(null);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (searchData) {
      var _searchData$products;

      setSearchResults(searchData === null || searchData === void 0 || (_searchData$products = searchData.products) === null || _searchData$products === void 0 ? void 0 : _searchData$products.nodes);
      setIsLoading(false);
    }

    if (searchError) {
      setError(searchError);
    }
  }, [searchData, searchError]);
  /**
   * Upon user input, display the loading screen for perceived performance,
   * even though we will not start fetching data until the debounce timeout.
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (searchQuery !== '' && searchResults === null) {
      setIsLoading(true);
    }
  }, [searchQuery, searchResults]);
  /**
   * When the search query input has been cleared, clear the results.
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (searchQuery === '') {
      clearResults();
    }
  }, [searchQuery]);
  /**
   * Fetch the initial results once the user has entered a search query and
   * the debounce timeout has been reached.
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (debouncedSearchQuery === '') {
      clearResults();
      return;
    }

    fetchInitialResults(debouncedSearchQuery);
  }, [debouncedSearchQuery, fetchInitialResults]);
  return {
    searchQuery: searchQuery,
    setSearchQuery: setSearchQuery,
    searchResults: searchResults,
    isLoading: isLoading,
    error: error
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSearch);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ GET_COLLECTIONS),
/* harmony export */   "i": () => (/* binding */ GET_COLLECTION)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragments_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(692);
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var GET_COLLECTIONS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query GetCollections {\n    collections(first: 250) {\n      nodes {\n        title\n        handle\n      }\n    }\n  }\n"])));
var GET_COLLECTION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  query GetCollection(\n    $handle: String!\n    $reverse: Boolean\n    $sortKey: ProductCollectionSortKeys\n  ) {\n    collection(handle: $handle) {\n      products(first: 250, reverse: $reverse, sortKey: $sortKey) {\n        nodes {\n          ...ProductFragment\n        }\n      }\n    }\n  }\n"])), _fragments_Product__WEBPACK_IMPORTED_MODULE_1__/* .ProductFragment */ .K);

/***/ }),

/***/ 8932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






var ConnectionUnavailable = function ConnectionUnavailable() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      style: {
        padding: '20px'
      },
      children: ["To get started connecting your Shopify store, please make sure your Headless Public Access Token and GraphQL URL are added as Atlas environment variables. For more information, see ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "https://developers.wpengine.com/docs/atlas-shopify-blueprint/introduction",
        children: "our documentation"
      }), "."]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectionUnavailable);

/***/ }),

/***/ 3491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var priceFormatter = function priceFormatter() {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
  var currencyCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'USD';
  var locale;

  if (typeof navigator === 'undefined') {
    locale = 'en-US';
  } else {
    locale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode
  }).format(amount);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priceFormatter);

/***/ }),

/***/ 8989:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "Container_component__V9ZBu"
};


/***/ }),

/***/ 7913:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "ContentWrapper_component__hzNV5",
	"has-avatars": "ContentWrapper_has-avatars__slWPj",
	"has-dates": "ContentWrapper_has-dates__TjR94",
	"has-excerpts": "ContentWrapper_has-excerpts__SvrQS",
	"wp-block-post-featured-image": "ContentWrapper_wp-block-post-featured-image__MtPqL",
	"overlay-menu__fade-in-animation": "ContentWrapper_overlay-menu__fade-in-animation__xjpPk"
};


/***/ }),

/***/ 7589:
/***/ ((module) => {

// Exports
module.exports = {
	"buttonContainer": "CtaButton_buttonContainer__xluRf",
	"button": "CtaButton_button__jSV4t"
};


/***/ }),

/***/ 4332:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "EntryHeader_component__HteTe",
	"has-image": "EntryHeader_has-image__HlJAC",
	"text": "EntryHeader_text__H2sid",
	"image": "EntryHeader_image__Fa0J3",
	"title": "EntryHeader_title__UVT9l",
	"byline": "EntryHeader_byline__rCKAV"
};


/***/ }),

/***/ 2810:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "Footer_component__PB4Nz",
	"copyright": "Footer_copyright__lw16R"
};


/***/ }),

/***/ 5631:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "Header_component__5Vr6P",
	"bar": "Header_bar__L8CDF",
	"nav-cart-bar": "Header_nav-cart-bar__p_cYZ",
	"logo": "Header_logo__gECVj",
	"search": "Header_search__esM9R",
	"show": "Header_show___daoO",
	"nav-toggle": "Header_nav-toggle__j4Yq8",
	"primary-navigation": "Header_primary-navigation__XhPd1",
	"sign-out": "Header_sign-out__JT_0_",
	"icon-cart": "Header_icon-cart__uM3NN",
	"site-header-cart": "Header_site-header-cart__Zb13O",
	"widget_shopping_cart": "Header_widget_shopping_cart__Ovvx7",
	"cart-contents": "Header_cart-contents__HuwBH",
	"price-amount": "Header_price-amount__sKNgz",
	"count": "Header_count__wxxcj",
	"product_list_widget": "Header_product_list_widget__mq_wh",
	"mini_cart_item": "Header_mini_cart_item__UUaVv",
	"thumbnail": "Header_thumbnail__mTS4B",
	"quantity": "Header_quantity__m36i9",
	"mini-cart__total": "Header_mini-cart__total__LRZoB",
	"mini-cart__buttons": "Header_mini-cart__buttons__P01Eq",
	"button": "Header_button__fzu3_"
};


/***/ }),

/***/ 7519:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "Hero_component__Vtrn3",
	"title": "Hero_title__18TTx",
	"subtitle": "Hero_subtitle__RN6I1"
};


/***/ }),

/***/ 2210:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "Loader_loader__oPvmc",
	"spin": "Loader_spin__6Zvln"
};


/***/ }),

/***/ 7032:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "Main_component__I_485"
};


/***/ }),

/***/ 3152:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "NavigationMenu_menu__rlb1o",
	"component": "NavigationMenu_component__yO7t0"
};


/***/ }),

/***/ 7259:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "NavigationMenuClassesFromWP_button__Aqcrx"
};


/***/ }),

/***/ 7633:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "Post_component__oqZDb",
	"title": "Post_title__xIbPi",
	"postInfo": "Post_postInfo__lHITl",
	"featuredImage": "Post_featuredImage__P4UYh"
};


/***/ }),

/***/ 6403:
/***/ ((module) => {

// Exports
module.exports = {
	"column": "ProductCard_column__zNHtI",
	"productWrapper": "ProductCard_productWrapper__k48j7",
	"onSale": "ProductCard_onSale__m0cTB",
	"productImageContainer": "ProductCard_productImageContainer__uP4DP",
	"productImage": "ProductCard_productImage__Di2DJ",
	"productInfoContainer": "ProductCard_productInfoContainer__h0DGj",
	"productTitle": "ProductCard_productTitle__It80E",
	"productPrice": "ProductCard_productPrice__D7ogd"
};


/***/ }),

/***/ 9028:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "ProductDetails_component__1OFWA",
	"onSale": "ProductDetails_onSale__VLtvq",
	"detailsColumn": "ProductDetails_detailsColumn__X3QtU"
};


/***/ }),

/***/ 6024:
/***/ ((module) => {

// Exports
module.exports = {
	"productGallery": "ProductGallery_productGallery__z82R8",
	"imageGrid": "ProductGallery_imageGrid__1Lef8"
};


/***/ }),

/***/ 6170:
/***/ ((module) => {

// Exports
module.exports = {
	"productMeta": "ProductMeta_productMeta__Nwzvx",
	"quantity": "ProductMeta_quantity__DiPbZ"
};


/***/ }),

/***/ 7015:
/***/ ((module) => {

// Exports
module.exports = {
	"formField": "ProductVariantOptions_formField__WVwxY",
	"formLabel": "ProductVariantOptions_formLabel__hRK2E",
	"formOption": "ProductVariantOptions_formOption__MXBmF",
	"formOptionWrapper": "ProductVariantOptions_formOptionWrapper__9u4TJ",
	"formOptionVariant": "ProductVariantOptions_formOptionVariant__wRBq6",
	"formOptionVariantPattern": "ProductVariantOptions_formOptionVariantPattern__qAWIk",
	"formOptionVariantColor": "ProductVariantOptions_formOptionVariantColor__M5cC1",
	"radioLabel": "ProductVariantOptions_radioLabel__BBHza",
	"formOptionRectangle": "ProductVariantOptions_formOptionRectangle__1fGbz"
};


/***/ }),

/***/ 6845:
/***/ ((module) => {

// Exports
module.exports = {
	"notification": "ProductNotification_notification__zVSl5",
	"message": "ProductNotification_message__r95Id",
	"success": "ProductNotification_success__dtymi",
	"error": "ProductNotification_error__7eu40"
};


/***/ }),

/***/ 1410:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "ProductSection_component__4zfsP"
};


/***/ }),

/***/ 1004:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "PromoSection_component__uxNxY",
	"title": "PromoSection_title__RuZuy",
	"description": "PromoSection_description__Ad370"
};


/***/ }),

/***/ 605:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "SearchInput_component__XC647",
	"icon": "SearchInput_icon__Yfx6s",
	"input": "SearchInput_input__rorFC"
};


/***/ }),

/***/ 8554:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "SearchRecommendations_component__LfzjC"
};


/***/ }),

/***/ 8211:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "SearchResults_component__MduPQ",
	"result": "SearchResults_result__Wr9o3",
	"loader-bg": "SearchResults_loader-bg___ab2q",
	"loading-result-excerpt": "SearchResults_loading-result-excerpt___o63U",
	"loading-result-meta": "SearchResults_loading-result-meta__YsrNG",
	"loading-result-title": "SearchResults_loading-result-title__iZt5y",
	"SearchResultLoadingAnimation": "SearchResults_SearchResultLoadingAnimation__PZoOR",
	"loading-result": "SearchResults_loading-result__tSV6W"
};


/***/ }),

/***/ 7678:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "SearchSection_component__aV6tk",
	"search-header-text": "SearchSection_search-header-text__PTaMa",
	"load-more": "SearchSection_load-more__LsFSa"
};


/***/ }),

/***/ 2944:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "SkipNavigationLink_component__2dvdu"
};


/***/ }),

/***/ 6550:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "TestimonialsSection_component__Fikml",
	"testimonialCard": "TestimonialsSection_testimonialCard__exnAW"
};


/***/ })

};
;