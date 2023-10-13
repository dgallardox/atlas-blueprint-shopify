"use strict";
exports.id = 747;
exports.ids = [747];
exports.modules = {

/***/ 692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ ProductFragment)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ProductFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  fragment ProductFragment on Product {\n    id\n    handle\n    title\n    description\n    featuredImage {\n      url\n    }\n    images(first: 100) {\n      nodes {\n        url\n      }\n    }\n    collections(first: 100) {\n      nodes {\n        handle\n        title\n      }\n    }\n    variants(first: 100) {\n      nodes {\n        id\n        sku\n        quantityAvailable\n        image {\n          url\n        }\n        selectedOptions {\n          name\n          value\n        }\n        price {\n          amount\n          currencyCode\n        }\n        compareAtPrice {\n          amount\n          currencyCode\n        }\n      }\n    }\n  }\n"])));

/***/ }),

/***/ 1328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ SEARCH_PRODUCT),
/* harmony export */   "N4": () => (/* binding */ GET_PRODUCT),
/* harmony export */   "tT": () => (/* binding */ GET_PRODUCTS)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragments_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(692);
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var GET_PRODUCTS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  query GetProducts($reverse: Boolean, $sortKey: ProductSortKeys) {\n    products(first: 250, reverse: $reverse, sortKey: $sortKey) {\n      nodes {\n        ...ProductFragment\n      }\n    }\n  }\n"])), _fragments_Product__WEBPACK_IMPORTED_MODULE_1__/* .ProductFragment */ .K);
var GET_PRODUCT = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  query GetProduct($handle: String!) {\n    product(handle: $handle) {\n      ...ProductFragment\n    }\n  }\n"])), _fragments_Product__WEBPACK_IMPORTED_MODULE_1__/* .ProductFragment */ .K);
var SEARCH_PRODUCT = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  query SearchProduct($query: String!) {\n    products(first: 250, query: $query) {\n      nodes {\n        ...ProductFragment\n      }\n    }\n  }\n"])), _fragments_Product__WEBPACK_IMPORTED_MODULE_1__/* .ProductFragment */ .K);

/***/ }),

/***/ 1168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shopifyConfiguration = {
  available: function available() {
    try {
      new URL(process.env.NEXT_PUBLIC_SHOPIFY_GRAPHQL_URL);
      return process.env.NEXT_PUBLIC_SHOPIFY_HEADLESS_PUBLIC_ACCESS_TOKEN;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shopifyConfiguration);

/***/ })

};
;