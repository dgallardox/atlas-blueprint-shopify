"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 4365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _faustwp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3895);
/* harmony import */ var _faustwp_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_faustwp_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_menus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2560);
/* harmony import */ var _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6509);
/* harmony import */ var _hooks_useShopifyCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3710);
/* harmony import */ var _utilities_shopifyClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7938);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1938);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_6__]);
_components__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var Cart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(__webpack_require__, 2023));
}, {
  ssr: false
});
function Page() {
  var _data$generalSettings, _data$headerMenuItems, _data$headerMenuItems2, _data$footerMenuItems, _data$footerMenuItems2;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(Page.query, {
    variables: Page.variables()
  }),
      data = _useQuery.data;

  var _ref = (_data$generalSettings = data === null || data === void 0 ? void 0 : data.generalSettings) !== null && _data$generalSettings !== void 0 ? _data$generalSettings : {},
      siteTitle = _ref.title,
      siteDescription = _ref.description;

  var primaryMenu = (_data$headerMenuItems = data === null || data === void 0 || (_data$headerMenuItems2 = data.headerMenuItems) === null || _data$headerMenuItems2 === void 0 ? void 0 : _data$headerMenuItems2.nodes) !== null && _data$headerMenuItems !== void 0 ? _data$headerMenuItems : [];
  var footerMenu = (_data$footerMenuItems = data === null || data === void 0 || (_data$footerMenuItems2 = data.footerMenuItems) === null || _data$footerMenuItems2 === void 0 ? void 0 : _data$footerMenuItems2.nodes) !== null && _data$footerMenuItems !== void 0 ? _data$footerMenuItems : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .SEO */ .HJ, {
      title: siteTitle,
      description: siteDescription
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloProvider, {
      client: _utilities_shopifyClient__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_hooks_useShopifyCart__WEBPACK_IMPORTED_MODULE_4__/* .ShopifyCartProvider */ .J, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .Header */ .h4, {
          title: siteTitle,
          description: siteDescription,
          menuItems: primaryMenu
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .Main */ .or, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .Container */ .W2, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Cart, {})
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .Footer */ .$_, {
          title: siteTitle,
          menuItems: footerMenu
        })]
      })
    })]
  });
}
Page.query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  query GetMenuItems(\n    $headerLocation: MenuLocationEnum\n    $footerLocation: MenuLocationEnum\n  ) {\n    generalSettings {\n      ...BlogInfoFragment\n    }\n    headerMenuItems: menuItems(where: { location: $headerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n    footerMenuItems: menuItems(where: { location: $footerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n  }\n"])), _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_3__/* .BlogInfoFragment */ .D, _components__WEBPACK_IMPORTED_MODULE_6__/* .NavigationMenu.fragments.entry */ .i9.fragments.entry);

Page.variables = function () {
  return {
    headerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_8__/* .PRIMARY_LOCATION */ .q,
    footerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_8__/* .FOOTER_LOCATION */ .N
  };
};

function getStaticProps(ctx) {
  return (0,_faustwp_core__WEBPACK_IMPORTED_MODULE_1__.getNextStaticProps)(ctx, {
    Page: Page,
    props: {}
  });
}
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

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,157,710,747,446,938], () => (__webpack_exec__(4365)));
module.exports = __webpack_exports__;

})();