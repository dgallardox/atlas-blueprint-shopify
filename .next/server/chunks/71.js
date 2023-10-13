"use strict";
exports.id = 71;
exports.ids = [71];
exports.modules = {

/***/ 7071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartQuickView": () => (/* binding */ CartQuickView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useShopifyCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3710);
/* harmony import */ var _utilities_priceFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3491);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Render the CartQuickView component.
 *
 * @param {Props} props The props object.
 * @param {string} props.styles Styles provided to the component.
 *
 * @returns {React.ReactElement} The CartQuickView component.
 */




function CartQuickView(_ref) {
  var _cartItems$map;

  var styles = _ref.styles;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();

  var _useShopifyCart = (0,_hooks_useShopifyCart__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(),
      cartItems = _useShopifyCart.cartItems,
      cartCount = _useShopifyCart.cartCount,
      isCartEmpty = _useShopifyCart.isCartEmpty,
      cartSubTotal = _useShopifyCart.cartSubTotal,
      checkoutUrl = _useShopifyCart.checkoutUrl;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
    id: "site-header-cart",
    className: styles['site-header-cart'],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: styles['cart-contents'],
        title: "View your shopping cart",
        style: {
          cursor: router.pathname === '/cart' ? 'auto' : 'pointer'
        },
        children: [!isCartEmpty && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
            className: styles['price-amount'],
            children: (0,_utilities_priceFormatter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(cartSubTotal)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
            className: styles['count'],
            children: [cartCount, " item", cartCount === 1 ? '' : 's']
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
          className: styles['icon-cart'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 576 512",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
              d: "M171.7 191.1H404.3L322.7 35.07C316.6 23.31 321.2 8.821 332.9 2.706C344.7-3.409 359.2 1.167 365.3 12.93L458.4 191.1H544C561.7 191.1 576 206.3 576 223.1C576 241.7 561.7 255.1 544 255.1L492.1 463.5C484.1 492 459.4 512 430 512H145.1C116.6 512 91 492 83.88 463.5L32 255.1C14.33 255.1 0 241.7 0 223.1C0 206.3 14.33 191.1 32 191.1H117.6L210.7 12.93C216.8 1.167 231.3-3.409 243.1 2.706C254.8 8.821 259.4 23.31 253.3 35.07L171.7 191.1zM191.1 303.1C191.1 295.1 184.8 287.1 175.1 287.1C167.2 287.1 159.1 295.1 159.1 303.1V399.1C159.1 408.8 167.2 415.1 175.1 415.1C184.8 415.1 191.1 408.8 191.1 399.1V303.1zM271.1 303.1V399.1C271.1 408.8 279.2 415.1 287.1 415.1C296.8 415.1 304 408.8 304 399.1V303.1C304 295.1 296.8 287.1 287.1 287.1C279.2 287.1 271.1 295.1 271.1 303.1zM416 303.1C416 295.1 408.8 287.1 400 287.1C391.2 287.1 384 295.1 384 303.1V399.1C384 408.8 391.2 415.1 400 415.1C408.8 415.1 416 408.8 416 399.1V303.1z"
            })
          })
        })]
      })
    }), router.pathname !== '/cart' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: styles['widget_shopping_cart'],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles['widget_shopping_cart_content'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("ul", {
            className: styles['product_list_widget'],
            children: cartItems === null || cartItems === void 0 || (_cartItems$map = cartItems.map) === null || _cartItems$map === void 0 ? void 0 : _cartItems$map.call(cartItems, function (item) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: styles['mini_cart_item'],
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                  href: "/product/".concat(item.merchandise.product.handle),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                    width: "420",
                    height: "324",
                    src: item.merchandise.image.url,
                    className: styles['thumbnail'],
                    alt: "",
                    loading: "lazy"
                  }), item.merchandise.product.title]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                  className: styles['quantity'],
                  children: [item.quantity, " \xD7", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                    className: styles['price-amount'],
                    children: (0,_utilities_priceFormatter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(item.cost.amountPerQuantity.amount)
                  })]
                })]
              }, item.merchandise.product.handle);
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
            className: styles['mini-cart__total'],
            children: isCartEmpty ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: styles['price-amount'],
              children: "You have no items in cart"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("strong", {
                children: "Subtotal: "
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                className: styles['price-amount'],
                children: (0,_utilities_priceFormatter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(cartSubTotal)
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            className: styles['mini-cart__buttons'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
              href: "/cart",
              className: styles['button'],
              children: "View cart"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
              href: checkoutUrl,
              className: styles['button'],
              children: "Checkout"
            })]
          })]
        })
      })
    }) : null]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartQuickView);

/***/ })

};
;