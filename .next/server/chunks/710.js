"use strict";
exports.id = 710;
exports.ids = [710];
exports.modules = {

/***/ 3710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ ShopifyCartProvider),
  "Z": () => (/* binding */ useShopifyCart)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(6153);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./mutations/CreateCart.js
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var CREATE_CART = (0,client_.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  mutation cartCreate($input: CartInput) {\n    cartCreate(input: $input) {\n      cart {\n        id\n        createdAt\n        updatedAt\n        checkoutUrl\n        totalQuantity\n        cost {\n          totalAmount {\n            amount\n            currencyCode\n          }\n          subtotalAmount {\n            amount\n            currencyCode\n          }\n        }\n        lines(first: 10) {\n          nodes {\n            id\n          }\n        }\n      }\n    }\n  }\n"])));
/* harmony default export */ const CreateCart = (CREATE_CART);
;// CONCATENATED MODULE: ./fragments/Cart.js
var Cart_templateObject;

function Cart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var CartFragment = (0,client_.gql)(Cart_templateObject || (Cart_templateObject = Cart_taggedTemplateLiteral(["\n  fragment CartFragment on Cart {\n    id\n    createdAt\n    updatedAt\n    checkoutUrl\n    totalQuantity\n    lines(first: 10) {\n      nodes {\n        id\n        quantity\n        merchandise {\n          ... on ProductVariant {\n            id\n            sku\n            title\n            image {\n              url\n              altText\n            }\n            product {\n              id\n              handle\n              title\n            }\n          }\n        }\n        cost {\n          amountPerQuantity {\n            amount\n          }\n          totalAmount {\n            amount\n          }\n        }\n        attributes {\n          key\n          value\n        }\n      }\n    }\n    attributes {\n      key\n      value\n    }\n    cost {\n      totalAmount {\n        amount\n        currencyCode\n      }\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }\n  }\n"])));
/* harmony default export */ const Cart = (CartFragment);
;// CONCATENATED MODULE: ./queries/Cart.js
var queries_Cart_templateObject;

function queries_Cart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var RETRIEVE_CART = (0,client_.gql)(queries_Cart_templateObject || (queries_Cart_templateObject = queries_Cart_taggedTemplateLiteral(["\n  ", "\n  query RetrieveCart($id: ID!) {\n    cart(id: $id) {\n      ...CartFragment\n    }\n  }\n"])), Cart);
/* harmony default export */ const queries_Cart = (RETRIEVE_CART);
;// CONCATENATED MODULE: ./mutations/AddToCart.js
var AddToCart_templateObject;

function AddToCart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ADD_TO_CART = (0,client_.gql)(AddToCart_templateObject || (AddToCart_templateObject = AddToCart_taggedTemplateLiteral(["\n  ", "\n  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        ...CartFragment\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n"])), Cart);
/* harmony default export */ const AddToCart = (ADD_TO_CART);
;// CONCATENATED MODULE: ./mutations/RemoveFromCart.js
var RemoveFromCart_templateObject;

function RemoveFromCart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var REMOVE_FROM_CART = (0,client_.gql)(RemoveFromCart_templateObject || (RemoveFromCart_templateObject = RemoveFromCart_taggedTemplateLiteral(["\n  ", "\n  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {\n    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n      cart {\n        ...CartFragment\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n"])), Cart);
/* harmony default export */ const RemoveFromCart = (REMOVE_FROM_CART);
;// CONCATENATED MODULE: ./mutations/QuantityCart.js
var QuantityCart_templateObject;

function QuantityCart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var UPDATE_CART_QUANTITY = (0,client_.gql)(QuantityCart_templateObject || (QuantityCart_templateObject = QuantityCart_taggedTemplateLiteral(["\n  ", "\n  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n    cartLinesUpdate(cartId: $cartId, lines: $lines) {\n      cart {\n        ...CartFragment\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n"])), Cart);
/* harmony default export */ const QuantityCart = (UPDATE_CART_QUANTITY);
;// CONCATENATED MODULE: ./constants/carts.js
var CART_COOKIE = 'atlas-shopify-cart';
var EIGHT_DAYS_IN_SECONDS = 60 * 60 * 24 * 8;
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./hooks/useShopifyCart.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










/**
 * Render the ShopifyCartProvider component.
 *
 * The useShopifyCart hook provides state to the child components via React context.
 * On each page render, useEffect runs to check if the cart token used to make requests to Shopify exists in the browser.
 * If it does, then it retrieves the cart using this token (cart id), otherwise it creates a cart and saves the cookie for next time.
 * The data fetched from the cart API is then saved in local state within the Provider to be used throughout the site.
 * The "add to cart", "remove from cart" and "update quantity" methods are defined inside this Provider as graphQL mutations and used
 * in various components throughout the site such as ProductDetails and Cart.
 *
 * @param {Props} props The props object.
 * @param {children: JSX.Element} props.children All components that use the data and methods from the Provider.
 *
 * @returns {React.ReactElement} The ShopifyCartProvider component.
 */


var ShopifyCartContext = /*#__PURE__*/external_react_default().createContext({});
function ShopifyCartProvider(_ref) {
  var _cookies$get, _cartData$lines$nodes, _cartData$lines, _cartData$cost$totalA, _cartData$cost, _cartData$cost$subtot, _cartData$cost2;

  var children = _ref.children;

  var _useState = (0,external_react_.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      cartData = _useState2[0],
      setCartData = _useState2[1];

  var cookies = new (external_universal_cookie_default())();
  var cartToken = (_cookies$get = cookies.get(CART_COOKIE)) !== null && _cookies$get !== void 0 ? _cookies$get : null;

  var _useMutation = (0,client_.useMutation)(CreateCart),
      _useMutation2 = _slicedToArray(_useMutation, 1),
      createCart = _useMutation2[0];

  var _useLazyQuery = (0,client_.useLazyQuery)(queries_Cart, {
    variables: {
      id: cartToken
    }
  }),
      _useLazyQuery2 = _slicedToArray(_useLazyQuery, 1),
      retrieveCart = _useLazyQuery2[0];

  (0,external_react_.useEffect)(function () {
    if (cartToken) {
      retrieveCart().then(function (response) {
        setCartData(response.data.cart);
      })["catch"](function (err) {
        return console.error(err);
      });
    } else {
      createCart({
        variables: {
          input: {}
        }
      }).then(function (response) {
        cookies.set(CART_COOKIE, response.data.cartCreate.cart.id, {
          maxAge: EIGHT_DAYS_IN_SECONDS
        });
        setCartData(response.data.cartCreate.cart);
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  }, []);

  var _useMutation3 = (0,client_.useMutation)(AddToCart),
      _useMutation4 = _slicedToArray(_useMutation3, 1),
      addToCart = _useMutation4[0];

  var _useMutation5 = (0,client_.useMutation)(RemoveFromCart),
      _useMutation6 = _slicedToArray(_useMutation5, 1),
      removeFromCart = _useMutation6[0];

  var _useMutation7 = (0,client_.useMutation)(QuantityCart),
      _useMutation8 = _slicedToArray(_useMutation7, 1),
      updateCartQuantity = _useMutation8[0];

  var cartItems = (_cartData$lines$nodes = cartData === null || cartData === void 0 || (_cartData$lines = cartData.lines) === null || _cartData$lines === void 0 ? void 0 : _cartData$lines.nodes) !== null && _cartData$lines$nodes !== void 0 ? _cartData$lines$nodes : [];
  var cartCount = cartData === null || cartData === void 0 ? void 0 : cartData.totalQuantity;
  var isCartEmpty = cartCount === 0;
  var cartTotal = (_cartData$cost$totalA = cartData === null || cartData === void 0 || (_cartData$cost = cartData.cost) === null || _cartData$cost === void 0 ? void 0 : _cartData$cost.totalAmount.amount) !== null && _cartData$cost$totalA !== void 0 ? _cartData$cost$totalA : 0;
  var cartSubTotal = (_cartData$cost$subtot = cartData === null || cartData === void 0 || (_cartData$cost2 = cartData.cost) === null || _cartData$cost2 === void 0 ? void 0 : _cartData$cost2.subtotalAmount.amount) !== null && _cartData$cost$subtot !== void 0 ? _cartData$cost$subtot : 0;
  var checkoutUrl = cartData === null || cartData === void 0 ? void 0 : cartData.checkoutUrl;
  var cartId = cartData === null || cartData === void 0 ? void 0 : cartData.id;
  var value = {
    cartItems: cartItems,
    cartCount: cartCount,
    isCartEmpty: isCartEmpty,
    cartTotal: cartTotal,
    cartSubTotal: cartSubTotal,
    checkoutUrl: checkoutUrl,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    updateCartQuantity: updateCartQuantity,
    retrieveCart: retrieveCart,
    setCartData: setCartData,
    cartId: cartId
  };
  return /*#__PURE__*/jsx_runtime_.jsx(ShopifyCartContext.Provider, {
    value: value,
    children: children
  });
}
function useShopifyCart() {
  var AtlasShopify = (0,external_react_.useContext)(ShopifyCartContext);
  return AtlasShopify;
}

/***/ })

};
;