"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2373:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _faustwp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3895);
/* harmony import */ var _faustwp_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_faustwp_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wp_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3291);
/* harmony import */ var _possibleTypes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(211);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wp_templates__WEBPACK_IMPORTED_MODULE_1__]);
_wp_templates__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/**
 * @type {import('@faustwp/core').FaustConfig}
 **/

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_faustwp_core__WEBPACK_IMPORTED_MODULE_0__.setConfig)({
  templates: _wp_templates__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  experimentalPlugins: [],
  experimentalToolbar: true,
  possibleTypes: _possibleTypes_json__WEBPACK_IMPORTED_MODULE_2__,
  usePersistedQueries: true
}));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var _faust_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2373);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _faustwp_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3895);
/* harmony import */ var _faustwp_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_faustwp_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faust_config__WEBPACK_IMPORTED_MODULE_0__]);
_faust_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_faustwp_core__WEBPACK_IMPORTED_MODULE_3__.FaustProvider, {
    pageProps: pageProps,
    children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      key: router.asPath
    }))
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6779:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2560);
/* harmony import */ var _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6509);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1938);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function Component(props) {
  var _props$data$generalSe, _props$data, _props$data$headerMen, _props$data2, _props$data$footerMen, _props$data3;

  var _ref = (_props$data$generalSe = props === null || props === void 0 || (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.generalSettings) !== null && _props$data$generalSe !== void 0 ? _props$data$generalSe : {},
      siteTitle = _ref.title,
      siteDescription = _ref.description;

  var primaryMenu = (_props$data$headerMen = props === null || props === void 0 || (_props$data2 = props.data) === null || _props$data2 === void 0 || (_props$data2 = _props$data2.headerMenuItems) === null || _props$data2 === void 0 ? void 0 : _props$data2.nodes) !== null && _props$data$headerMen !== void 0 ? _props$data$headerMen : [];
  var footerMenu = (_props$data$footerMen = props === null || props === void 0 || (_props$data3 = props.data) === null || _props$data3 === void 0 || (_props$data3 = _props$data3.footerMenuItems) === null || _props$data3 === void 0 ? void 0 : _props$data3.nodes) !== null && _props$data$footerMen !== void 0 ? _props$data$footerMen : [];
  var _props$data$nodeByUri = props.data.nodeByUri,
      name = _props$data$nodeByUri.name,
      posts = _props$data$nodeByUri.posts;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .SEO */ .HJ, {
      title: siteTitle,
      description: siteDescription
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {
      title: siteTitle,
      description: siteDescription,
      menuItems: primaryMenu
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Main */ .or, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .EntryHeader */ .wq, {
          title: "Category: ".concat(name)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
          children: posts.edges.map(function (post) {
            var _post$node$author, _post$node$featuredIm;

            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Post */ .SO, {
              title: post.node.title,
              content: post.node.content,
              date: post.node.date,
              author: (_post$node$author = post.node.author) === null || _post$node$author === void 0 ? void 0 : _post$node$author.node.name,
              uri: post.node.uri,
              featuredImage: (_post$node$featuredIm = post.node.featuredImage) === null || _post$node$featuredIm === void 0 ? void 0 : _post$node$featuredIm.node
            }, post.node.id);
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$_, {
      title: siteTitle,
      menuItems: footerMenu
    })]
  });
}
Component.query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  query GetCategoryPage(\n    $uri: String!\n    $headerLocation: MenuLocationEnum\n    $footerLocation: MenuLocationEnum\n  ) {\n    nodeByUri(uri: $uri) {\n      ... on Category {\n        name\n        posts {\n          edges {\n            node {\n              id\n              title\n              content\n              date\n              uri\n              ...FeaturedImageFragment\n              author {\n                node {\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    generalSettings {\n      ...BlogInfoFragment\n    }\n    headerMenuItems: menuItems(where: { location: $headerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n    footerMenuItems: menuItems(where: { location: $footerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n  }\n"])), _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_1__/* .BlogInfoFragment */ .D, _components__WEBPACK_IMPORTED_MODULE_2__/* .NavigationMenu.fragments.entry */ .i9.fragments.entry, _components__WEBPACK_IMPORTED_MODULE_2__/* .FeaturedImage.fragments.entry */ .Q_.fragments.entry);

Component.variables = function (_ref2) {
  var uri = _ref2.uri;
  return {
    uri: uri,
    headerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_4__/* .PRIMARY_LOCATION */ .q,
    footerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_4__/* .FOOTER_LOCATION */ .N
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1938);
/* harmony import */ var _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6509);
/* harmony import */ var _constants_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2560);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function Component(props) {
  var _props$data$generalSe, _props$data, _props$data$headerMen, _props$data2, _props$data$footerMen, _props$data3, _props$data$page, _props$data4, _props$products, _props$products2;

  var _ref = (_props$data$generalSe = props === null || props === void 0 || (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.generalSettings) !== null && _props$data$generalSe !== void 0 ? _props$data$generalSe : {},
      siteTitle = _ref.title,
      siteDescription = _ref.description;

  var primaryMenu = (_props$data$headerMen = props === null || props === void 0 || (_props$data2 = props.data) === null || _props$data2 === void 0 || (_props$data2 = _props$data2.headerMenuItems) === null || _props$data2 === void 0 ? void 0 : _props$data2.nodes) !== null && _props$data$headerMen !== void 0 ? _props$data$headerMen : [];
  var footerMenu = (_props$data$footerMen = props === null || props === void 0 || (_props$data3 = props.data) === null || _props$data3 === void 0 || (_props$data3 = _props$data3.footerMenuItems) === null || _props$data3 === void 0 ? void 0 : _props$data3.nodes) !== null && _props$data$footerMen !== void 0 ? _props$data$footerMen : [];

  var _ref2 = (_props$data$page = props === null || props === void 0 || (_props$data4 = props.data) === null || _props$data4 === void 0 ? void 0 : _props$data4.page) !== null && _props$data$page !== void 0 ? _props$data$page : {
    title: ''
  },
      content = _ref2.content;

  var latestProducts = props === null || props === void 0 || (_props$products = props.products) === null || _props$products === void 0 ? void 0 : _props$products.slice(0, 4);
  var saleProducts = props === null || props === void 0 || (_props$products2 = props.products) === null || _props$products2 === void 0 ? void 0 : _props$products2.filter(function (product) {
    return product.variants.nodes[0].compareAtPrice !== null;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .SEO */ .HJ, {
      title: siteTitle,
      description: siteDescription
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h4, {
      title: siteTitle,
      description: siteDescription,
      menuItems: primaryMenu
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__/* .Main */ .or, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .ContentWrapper */ .vs, {
        content: content
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .ProductSection */ .lC, {
        heading: "New Arrivals",
        products: latestProducts
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .TestimonialsSection */ .JE, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .ProductSection */ .lC, {
        heading: "On Sale",
        products: saleProducts
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .PromoSection */ .wR, {
        showCta: true,
        ctaLink: "/about",
        ctaLabel: "About",
        title: "Promo Banners",
        description: "You can use this component to promote articles or specific products. And optionally add a CTA below."
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .$_, {
      title: siteTitle,
      menuItems: footerMenu
    })]
  });
}

Component.variables = function (_ref3, ctx) {
  var databaseId = _ref3.databaseId;
  return {
    databaseId: databaseId,
    headerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_4__/* .PRIMARY_LOCATION */ .q,
    footerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_4__/* .FOOTER_LOCATION */ .N,
    asPreview: ctx === null || ctx === void 0 ? void 0 : ctx.asPreview
  };
};

Component.query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  query GetPageData(\n    $databaseId: ID!\n    $headerLocation: MenuLocationEnum\n    $footerLocation: MenuLocationEnum\n    $asPreview: Boolean = false\n  ) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n    }\n    generalSettings {\n      ...BlogInfoFragment\n    }\n    headerMenuItems: menuItems(where: { location: $headerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n    footerMenuItems: menuItems(where: { location: $footerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n  }\n"])), _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_2__/* .BlogInfoFragment */ .D, _components__WEBPACK_IMPORTED_MODULE_1__/* .NavigationMenu.fragments.entry */ .i9.fragments.entry);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3291:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6779);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4055);
/* harmony import */ var _front_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7957);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(566);
/* harmony import */ var _single__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_category__WEBPACK_IMPORTED_MODULE_0__, _tag__WEBPACK_IMPORTED_MODULE_1__, _front_page__WEBPACK_IMPORTED_MODULE_2__, _page__WEBPACK_IMPORTED_MODULE_3__, _single__WEBPACK_IMPORTED_MODULE_4__]);
([_category__WEBPACK_IMPORTED_MODULE_0__, _tag__WEBPACK_IMPORTED_MODULE_1__, _front_page__WEBPACK_IMPORTED_MODULE_2__, _page__WEBPACK_IMPORTED_MODULE_3__, _single__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  category: _category__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  tag: _tag__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  'front-page': _front_page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  page: _page__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  single: _single__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2560);
/* harmony import */ var _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6509);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1938);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function Component(props) {
  var _props$data$generalSe, _props$data, _props$data$headerMen, _props$data2, _props$data$footerMen, _props$data3, _props$data$page, _props$data4, _featuredImage$node;

  // Loading state for previews
  if (props.loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: "Loading..."
    });
  }

  var _ref = (_props$data$generalSe = props === null || props === void 0 || (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.generalSettings) !== null && _props$data$generalSe !== void 0 ? _props$data$generalSe : {},
      siteTitle = _ref.title,
      siteDescription = _ref.description;

  var primaryMenu = (_props$data$headerMen = props === null || props === void 0 || (_props$data2 = props.data) === null || _props$data2 === void 0 || (_props$data2 = _props$data2.headerMenuItems) === null || _props$data2 === void 0 ? void 0 : _props$data2.nodes) !== null && _props$data$headerMen !== void 0 ? _props$data$headerMen : [];
  var footerMenu = (_props$data$footerMen = props === null || props === void 0 || (_props$data3 = props.data) === null || _props$data3 === void 0 || (_props$data3 = _props$data3.footerMenuItems) === null || _props$data3 === void 0 ? void 0 : _props$data3.nodes) !== null && _props$data$footerMen !== void 0 ? _props$data$footerMen : [];

  var _ref2 = (_props$data$page = props === null || props === void 0 || (_props$data4 = props.data) === null || _props$data4 === void 0 ? void 0 : _props$data4.page) !== null && _props$data$page !== void 0 ? _props$data$page : {
    title: ''
  },
      content = _ref2.content,
      featuredImage = _ref2.featuredImage;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .SEO */ .HJ, {
      title: siteTitle,
      description: siteDescription,
      imageUrl: featuredImage === null || featuredImage === void 0 || (_featuredImage$node = featuredImage.node) === null || _featuredImage$node === void 0 ? void 0 : _featuredImage$node.sourceUrl
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {
      title: siteTitle,
      description: siteDescription,
      menuItems: primaryMenu
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Main */ .or, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .ContentWrapper */ .vs, {
        content: content
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$_, {
      title: siteTitle,
      menuItems: footerMenu
    })]
  });
}

Component.variables = function (_ref3, ctx) {
  var databaseId = _ref3.databaseId;
  return {
    databaseId: databaseId,
    headerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_4__/* .PRIMARY_LOCATION */ .q,
    footerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_4__/* .FOOTER_LOCATION */ .N,
    asPreview: ctx === null || ctx === void 0 ? void 0 : ctx.asPreview
  };
};

Component.query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  query GetPageData(\n    $databaseId: ID!\n    $headerLocation: MenuLocationEnum\n    $footerLocation: MenuLocationEnum\n    $asPreview: Boolean = false\n  ) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      ...FeaturedImageFragment\n    }\n    generalSettings {\n      ...BlogInfoFragment\n    }\n    footerMenuItems: menuItems(where: { location: $footerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n    headerMenuItems: menuItems(where: { location: $headerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n  }\n"])), _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_1__/* .BlogInfoFragment */ .D, _components__WEBPACK_IMPORTED_MODULE_2__/* .NavigationMenu.fragments.entry */ .i9.fragments.entry, _components__WEBPACK_IMPORTED_MODULE_2__/* .FeaturedImage.fragments.entry */ .Q_.fragments.entry);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2560);
/* harmony import */ var _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6509);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1938);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function Component(props) {
  var _props$data$generalSe, _props$data, _props$data$headerMen, _props$data2, _props$data$footerMen, _props$data3, _featuredImage$node, _author$node;

  // Loading state for previews
  if (props.loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: "Loading..."
    });
  }

  var _ref = (_props$data$generalSe = props === null || props === void 0 || (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.generalSettings) !== null && _props$data$generalSe !== void 0 ? _props$data$generalSe : {},
      siteTitle = _ref.title,
      siteDescription = _ref.description;

  var primaryMenu = (_props$data$headerMen = props === null || props === void 0 || (_props$data2 = props.data) === null || _props$data2 === void 0 || (_props$data2 = _props$data2.headerMenuItems) === null || _props$data2 === void 0 ? void 0 : _props$data2.nodes) !== null && _props$data$headerMen !== void 0 ? _props$data$headerMen : [];
  var footerMenu = (_props$data$footerMen = props === null || props === void 0 || (_props$data3 = props.data) === null || _props$data3 === void 0 || (_props$data3 = _props$data3.footerMenuItems) === null || _props$data3 === void 0 ? void 0 : _props$data3.nodes) !== null && _props$data$footerMen !== void 0 ? _props$data$footerMen : [];
  var _props$data$post = props.data.post,
      title = _props$data$post.title,
      content = _props$data$post.content,
      featuredImage = _props$data$post.featuredImage,
      date = _props$data$post.date,
      author = _props$data$post.author;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .SEO */ .HJ, {
      title: siteTitle,
      description: siteDescription,
      imageUrl: featuredImage === null || featuredImage === void 0 || (_featuredImage$node = featuredImage.node) === null || _featuredImage$node === void 0 ? void 0 : _featuredImage$node.sourceUrl
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {
      title: siteTitle,
      description: siteDescription,
      menuItems: primaryMenu
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Main */ .or, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .EntryHeader */ .wq, {
          title: title,
          image: featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node,
          date: date,
          author: author === null || author === void 0 || (_author$node = author.node) === null || _author$node === void 0 ? void 0 : _author$node.name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .ContentWrapper */ .vs, {
            content: content
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$_, {
      title: siteTitle,
      menuItems: footerMenu
    })]
  });
}
Component.query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  query GetPost(\n    $databaseId: ID!\n    $headerLocation: MenuLocationEnum\n    $footerLocation: MenuLocationEnum\n    $asPreview: Boolean = false\n  ) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      author {\n        node {\n          name\n        }\n      }\n      ...FeaturedImageFragment\n    }\n    generalSettings {\n      ...BlogInfoFragment\n    }\n    headerMenuItems: menuItems(where: { location: $headerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n    footerMenuItems: menuItems(where: { location: $footerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n  }\n"])), _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_1__/* .BlogInfoFragment */ .D, _components__WEBPACK_IMPORTED_MODULE_2__/* .NavigationMenu.fragments.entry */ .i9.fragments.entry, _components__WEBPACK_IMPORTED_MODULE_2__/* .FeaturedImage.fragments.entry */ .Q_.fragments.entry);

Component.variables = function (_ref2, ctx) {
  var databaseId = _ref2.databaseId;
  return {
    databaseId: databaseId,
    headerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_4__/* .PRIMARY_LOCATION */ .q,
    footerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_4__/* .FOOTER_LOCATION */ .N,
    asPreview: ctx === null || ctx === void 0 ? void 0 : ctx.asPreview
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4055:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2560);
/* harmony import */ var _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6509);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1938);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function Component(props) {
  var _props$data$generalSe, _props$data, _props$data$headerMen, _props$data2, _props$data$footerMen, _props$data3;

  var _ref = (_props$data$generalSe = props === null || props === void 0 || (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.generalSettings) !== null && _props$data$generalSe !== void 0 ? _props$data$generalSe : {},
      siteTitle = _ref.title,
      siteDescription = _ref.description;

  var primaryMenu = (_props$data$headerMen = props === null || props === void 0 || (_props$data2 = props.data) === null || _props$data2 === void 0 || (_props$data2 = _props$data2.headerMenuItems) === null || _props$data2 === void 0 ? void 0 : _props$data2.nodes) !== null && _props$data$headerMen !== void 0 ? _props$data$headerMen : [];
  var footerMenu = (_props$data$footerMen = props === null || props === void 0 || (_props$data3 = props.data) === null || _props$data3 === void 0 || (_props$data3 = _props$data3.footerMenuItems) === null || _props$data3 === void 0 ? void 0 : _props$data3.nodes) !== null && _props$data$footerMen !== void 0 ? _props$data$footerMen : [];
  var _props$data$nodeByUri = props.data.nodeByUri,
      name = _props$data$nodeByUri.name,
      posts = _props$data$nodeByUri.posts;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .SEO */ .HJ, {
      title: siteTitle,
      description: siteDescription
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {
      title: siteTitle,
      description: siteDescription,
      menuItems: primaryMenu
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Main */ .or, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .EntryHeader */ .wq, {
          title: "Tag: ".concat(name)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
          children: posts.edges.map(function (post) {
            var _post$node$author, _post$node$featuredIm;

            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Post */ .SO, {
              title: post.node.title,
              content: post.node.content,
              date: post.node.date,
              author: (_post$node$author = post.node.author) === null || _post$node$author === void 0 ? void 0 : _post$node$author.node.name,
              uri: post.node.uri,
              featuredImage: (_post$node$featuredIm = post.node.featuredImage) === null || _post$node$featuredIm === void 0 ? void 0 : _post$node$featuredIm.node
            }, post.node.id);
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$_, {
      title: siteTitle,
      menuItems: footerMenu
    })]
  });
}
Component.query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  query GetTagPage(\n    $uri: String!\n    $headerLocation: MenuLocationEnum\n    $footerLocation: MenuLocationEnum\n  ) {\n    nodeByUri(uri: $uri) {\n      ... on Tag {\n        name\n        posts {\n          edges {\n            node {\n              id\n              title\n              content\n              date\n              uri\n              ...FeaturedImageFragment\n              author {\n                node {\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    generalSettings {\n      ...BlogInfoFragment\n    }\n    headerMenuItems: menuItems(where: { location: $headerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n    footerMenuItems: menuItems(where: { location: $footerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n  }\n"])), _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_1__/* .BlogInfoFragment */ .D, _components__WEBPACK_IMPORTED_MODULE_2__/* .NavigationMenu.fragments.entry */ .i9.fragments.entry, _components__WEBPACK_IMPORTED_MODULE_2__/* .FeaturedImage.fragments.entry */ .Q_.fragments.entry);

Component.variables = function (_ref2) {
  var uri = _ref2.uri;
  return {
    uri: uri,
    headerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_4__/* .PRIMARY_LOCATION */ .q,
    footerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_4__/* .FOOTER_LOCATION */ .N
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 3895:
/***/ ((module) => {

module.exports = require("@faustwp/core");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3284:
/***/ ((module) => {

module.exports = require("classnames/bind");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6153:
/***/ ((module) => {

module.exports = require("universal-cookie");

/***/ }),

/***/ 7105:
/***/ ((module) => {

module.exports = import("use-debounce");;

/***/ }),

/***/ 211:
/***/ ((module) => {

module.exports = JSON.parse('{"Node":["Category","EnqueuedScript","EnqueuedStylesheet","ContentType","Taxonomy","User","Comment","MediaItem","Page","Post","PostFormat","Tag","Project","UserRole","Testimonial","Menu","MenuItem","Plugin","Theme","CommentAuthor"],"TermNode":["Category","PostFormat","Tag"],"UniformResourceIdentifiable":["Category","ContentType","User","MediaItem","Page","Post","PostFormat","Tag","Project","Testimonial"],"EnqueuedAsset":["EnqueuedScript","EnqueuedStylesheet"],"DatabaseIdentifier":["Category","User","Comment","MediaItem","Page","Post","PostFormat","Tag","Project","Testimonial","Menu","MenuItem"],"HierarchicalTermNode":["Category"],"MenuItemLinkable":["Category","Page","Post","Tag"],"ContentNode":["MediaItem","Page","Post","Project","Testimonial"],"Commenter":["User","CommentAuthor"],"NodeWithTemplate":["MediaItem","Page","Post","Project","Testimonial"],"ContentTemplate":["DefaultTemplate","Template_FullWidth"],"NodeWithTitle":["MediaItem","Page","Post","Project","Testimonial"],"NodeWithAuthor":["MediaItem","Page","Post","Project","Testimonial"],"NodeWithComments":["MediaItem","Page","Post"],"HierarchicalContentNode":["MediaItem","Page"],"NodeWithContentEditor":["Page","Post"],"NodeWithFeaturedImage":["Page","Post","Project"],"NodeWithExcerpt":["Page","Post"],"NodeWithRevisions":["Page","Post"],"NodeWithPageAttributes":["Page"],"NodeWithTrackbacks":["Post"],"ContentRevisionUnion":["Post","Page"],"MenuItemObjectUnion":["Post","Page","Category","Tag"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,157,710,747,446], () => (__webpack_exec__(2551)));
module.exports = __webpack_exports__;

})();