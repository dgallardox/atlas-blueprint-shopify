exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 2023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Cart_Cart)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/useShopifyCart.js + 7 modules
var useShopifyCart = __webpack_require__(3710);
// EXTERNAL MODULE: ./components/Loader/index.js + 1 modules
var Loader = __webpack_require__(694);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: ./components/Cart/CartTable.module.scss
var CartTable_module = __webpack_require__(3399);
var CartTable_module_default = /*#__PURE__*/__webpack_require__.n(CartTable_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./utilities/priceFormatter.js
var priceFormatter = __webpack_require__(3491);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cart/CartTable.js





/**
 * Render the CartTable component.
 *
 * @typedef {Object} Query
 * @property {string} cartId - The cart token.
 *
 * @typedef {Object} Mutation
 * @property {string} cartId - The cart token.
 * @property {Array<string>} - The line items of the cart.
 *
 * @param {Props} props The props object.
 * @param {Array<string>} props.cartItems The cart items list. All items that are in the cart.
 * @param {(Object<string, string>) => void} props.setProductNotification The function that displays the product
 * notification component when the user performs cart operations.
 * @param {Mutation} props.removeFromCart The mutation to remove item from cart.
 * @param {Mutation} props.updateCartQuantity The mutation to update cart quantity.
 * @param {string} props.cartId The cart token.
 * @param {string} props.setCartData The state of cart data. Used to set cart data after adding, changing quantity, removing from cart.
 * @param {Query} props.retrieveCart The query to retrieve Cart.
 *
 * @returns {React.ReactElement} The CartTable component.
 */




var CartTable = function CartTable(_ref) {
  var _cartItems$map;

  var cartItems = _ref.cartItems,
      setProductNotification = _ref.setProductNotification,
      removeFromCart = _ref.removeFromCart,
      updateCartQuantity = _ref.updateCartQuantity,
      cartId = _ref.cartId,
      setCartData = _ref.setCartData,
      retrieveCart = _ref.retrieveCart;

  var handleDelete = function handleDelete(cartId, lineId, product) {
    removeFromCart({
      variables: {
        cartId: cartId,
        lineIds: [lineId]
      }
    }).then(function () {
      return setProductNotification({
        message: "".concat(product, " has been removed from your cart."),
        className: 'success'
      });
    })["catch"](function (err) {
      console.error(err);
      setProductNotification({
        message: "There was an issue removing this item from the cart.",
        className: 'error'
      });
    })["finally"](function () {
      return retrieveCart().then(function (response) {
        setCartData(response.data.cart);
      });
    });
  };

  var handleUpdateQuantity = function handleUpdateQuantity(product, id, quantityToUpdate) {
    updateCartQuantity({
      variables: {
        cartId: cartId,
        lines: {
          id: id,
          quantity: quantityToUpdate
        }
      }
    }).then(function (res) {
      var _res$data$cartLinesUp;

      var quantityAfterUpdate = (_res$data$cartLinesUp = res.data.cartLinesUpdate.cart.lines.nodes.find(function (line) {
        return line.id === id;
      })) === null || _res$data$cartLinesUp === void 0 ? void 0 : _res$data$cartLinesUp.quantity;

      if (!quantityAfterUpdate) {
        setProductNotification({
          message: "".concat(product, " has been removed from your cart."),
          className: 'success'
        });
        return;
      }

      if (quantityAfterUpdate < quantityToUpdate) {
        setProductNotification({
          message: 'The maximum amount available for this product has been added to the cart.',
          className: 'error'
        });
      } else if (quantityAfterUpdate === quantityToUpdate) {
        setProductNotification({
          close: close
        });
      }
    })["catch"](function (err) {
      console.error(err);
      setProductNotification({
        message: "There was an issue changing this item's quantity.",
        className: 'error'
      });
    })["finally"](function () {
      return retrieveCart().then(function (response) {
        setCartData(response.data.cart);
      });
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (CartTable_module_default()).cartTable,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            className: (CartTable_module_default()).hideOnMobile
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            className: (CartTable_module_default()).hideOnMobile
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "Product"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "Price"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "Quantity"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            className: (CartTable_module_default()).hideOnMobile,
            children: "Subtotal"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
        children: cartItems === null || cartItems === void 0 || (_cartItems$map = cartItems.map) === null || _cartItems$map === void 0 ? void 0 : _cartItems$map.call(cartItems, function (item) {
          var product = item.merchandise.product;
          var image = item.merchandise.image;
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              className: (CartTable_module_default()).hideOnMobile,
              children: /*#__PURE__*/jsx_runtime_.jsx(ai_.AiOutlineCloseCircle, {
                "data-testid": "remove-button-".concat(item.id),
                size: 24,
                className: (CartTable_module_default()).clickableIcon,
                onClick: function onClick() {
                  return handleDelete(cartId, item.id, product.title);
                }
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              className: (CartTable_module_default()).hideOnMobile,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: image.url,
                alt: product.title,
                className: (CartTable_module_default()).cartImage
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: "/product/".concat(product.handle),
                children: product.title
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: (0,priceFormatter/* default */.Z)(item.cost.amountPerQuantity.amount)
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              "aria-label": "quantity-section",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (CartTable_module_default()).quantity,
                children: [/*#__PURE__*/jsx_runtime_.jsx(ai_.AiOutlineMinusCircle, {
                  size: 24,
                  "data-testid": "decrease-button",
                  className: (CartTable_module_default()).clickableIcon,
                  onClick: function onClick() {
                    return handleUpdateQuantity(product.title, item.id, item.quantity - 1);
                  }
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  "aria-label": "item-quantity-".concat(item.quantity, "-").concat(item.id),
                  children: item.quantity
                }), /*#__PURE__*/jsx_runtime_.jsx(ai_.AiOutlinePlusCircle, {
                  size: 24,
                  "data-testid": "increase-button",
                  className: (CartTable_module_default()).clickableIcon,
                  onClick: function onClick() {
                    return handleUpdateQuantity(product.title, item.id, item.quantity + 1);
                  }
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              className: (CartTable_module_default()).hideOnMobile,
              children: (0,priceFormatter/* default */.Z)(item.cost.totalAmount.amount)
            })]
          }, "cart-item-".concat(item.id));
        })
      })]
    })
  });
};

/* harmony default export */ const Cart_CartTable = (CartTable);
// EXTERNAL MODULE: ./components/Cart/CartTotals.module.scss
var CartTotals_module = __webpack_require__(2721);
var CartTotals_module_default = /*#__PURE__*/__webpack_require__.n(CartTotals_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Cart/CartTotals.js




/**
 * Render the CartTotals component.
 *
 * @param {Props} props The props object.
 * @param {string} props.cartSubTotal The sub total price of items in the cart.
 * @param {string} props.cartTotal The total price of items in the cart.
 * @param {string} props.checkoutUrl The link to the Shopify checkout page.
 *
 * @returns {React.ReactElement} The CartTotals component.
 */



var cx = external_classnames_default().bind((CartTotals_module_default()));

var CartTotals = function CartTotals(_ref) {
  var cartSubTotal = _ref.cartSubTotal,
      cartTotal = _ref.cartTotal,
      checkoutUrl = _ref.checkoutUrl;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (CartTotals_module_default()).cartTotals,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Summary"
    }), /*#__PURE__*/jsx_runtime_.jsx("table", {
      "data-testid": "summary",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "Subtotal"
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: (0,priceFormatter/* default */.Z)(cartSubTotal)
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "Total"
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: (0,priceFormatter/* default */.Z)(cartTotal)
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: checkoutUrl,
      className: cx((CartTotals_module_default()).button, (CartTotals_module_default()).checkoutButton),
      "data-testid": "checkout-btn",
      children: "Checkout"
    })]
  });
};

/* harmony default export */ const Cart_CartTotals = (CartTotals);
// EXTERNAL MODULE: ./components/ProductNotification/index.js + 1 modules
var ProductNotification = __webpack_require__(7937);
// EXTERNAL MODULE: ./utilities/ConnectionUnavailable.js
var ConnectionUnavailable = __webpack_require__(8932);
// EXTERNAL MODULE: ./utilities/shopifyConfiguration.js
var shopifyConfiguration = __webpack_require__(1168);
;// CONCATENATED MODULE: ./components/Cart/Cart.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









/**
 * Render the Cart component.
 *
 * @param {Props} props The props object.
 * @param {(Object<string, string>) => void} props.setProductNotification The function that displays the
 * product notification component when the user performs cart operations.
 *
 * @returns {React.ReactElement} The Cart component.
 */





var Cart = function Cart() {
  var _useState = (0,external_react_.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      productNotification = _useState2[0],
      setProductNotification = _useState2[1];

  var _useShopifyCart = (0,useShopifyCart/* default */.Z)(),
      cartItems = _useShopifyCart.cartItems,
      isCartLoading = _useShopifyCart.isCartLoading,
      isCartEmpty = _useShopifyCart.isCartEmpty,
      cartTotal = _useShopifyCart.cartTotal,
      cartSubTotal = _useShopifyCart.cartSubTotal,
      checkoutUrl = _useShopifyCart.checkoutUrl,
      removeFromCart = _useShopifyCart.removeFromCart,
      updateCartQuantity = _useShopifyCart.updateCartQuantity,
      cartId = _useShopifyCart.cartId,
      setCartData = _useShopifyCart.setCartData,
      retrieveCart = _useShopifyCart.retrieveCart;

  if (!shopifyConfiguration/* default.available */.Z.available()) {
    return /*#__PURE__*/jsx_runtime_.jsx(ConnectionUnavailable/* default */.Z, {});
  }

  if (isCartLoading) {
    return /*#__PURE__*/jsx_runtime_.jsx(Loader/* Loader */.a, {});
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "text-center spacing-top",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Cart"
    }), productNotification && /*#__PURE__*/jsx_runtime_.jsx(ProductNotification/* ProductNotification */.q, {
      productNotification: productNotification,
      cartPage: true
    }), isCartEmpty ? /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "You have no items in cart"
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Cart_CartTable, {
        cartItems: cartItems,
        removeFromCart: removeFromCart,
        updateCartQuantity: updateCartQuantity,
        cartId: cartId,
        setCartData: setCartData,
        retrieveCart: retrieveCart,
        setProductNotification: setProductNotification
      }), /*#__PURE__*/jsx_runtime_.jsx(Cart_CartTotals, {
        cartSubTotal: cartSubTotal,
        cartTotal: cartTotal,
        checkoutUrl: checkoutUrl
      })]
    })]
  });
};

/* harmony default export */ const Cart_Cart = (Cart);
;// CONCATENATED MODULE: ./components/Cart/index.js


/***/ }),

/***/ 3399:
/***/ ((module) => {

// Exports
module.exports = {
	"cartTable": "CartTable_cartTable__gYWiW",
	"cartImage": "CartTable_cartImage__A42vr",
	"quantity": "CartTable_quantity__UAmJb",
	"clickableIcon": "CartTable_clickableIcon__sfuHA",
	"hideOnMobile": "CartTable_hideOnMobile__uOOBP"
};


/***/ }),

/***/ 2721:
/***/ ((module) => {

// Exports
module.exports = {
	"cartTotals": "CartTotals_cartTotals__nuxs7",
	"checkoutButton": "CartTotals_checkoutButton__x_bIE",
	"button": "CartTotals_button__7QxOb"
};


/***/ })

};
;