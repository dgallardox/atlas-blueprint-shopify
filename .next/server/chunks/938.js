"use strict";
exports.id = 938;
exports.ids = [938];
exports.modules = {

/***/ 7938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

/**
 * The Apollo Client used to make requests to Shopify Storefront API.
 *
 * @param {ApolloLink} link The http configuration for the request.
 * @property {string} uri The base URL to Shopify Storefront API configured via Atlas Environment Variables.
 * @property {string} headers The headers configuration for the request including the API token configured via Atlas Environment Variables.
 *
 * @returns {ApolloClient} The Configured Apollo Client used to perform mutations and queries to Shopify Storefront API throughout the site.
 */

var shopifyClient = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
  link: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.createHttpLink({
    uri: process.env.NEXT_PUBLIC_SHOPIFY_GRAPHQL_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_HEADLESS_PUBLIC_ACCESS_TOKEN
    }
  }),
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache'
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shopifyClient);

/***/ })

};
;