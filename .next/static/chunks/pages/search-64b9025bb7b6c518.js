(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{7950:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return h},default:function(){return m}});var o,i=t(7887),r=t(3768),a=t(8806),s=t(2560),u=t(6509),c=t(7938),l=t(6907),d=t(2966),f=t(5893);var _,v,h=!0;function m(e){var n,t,o,a,s,u=(0,i.a)(m.query,{variables:m.variables()}).data,_=null!==(n=null===u||void 0===u?void 0:u.generalSettings)&&void 0!==n?n:{},v=_.title,h=_.description,I=null!==(t=null===u||void 0===u||null===(o=u.headerMenuItems)||void 0===o?void 0:o.nodes)&&void 0!==t?t:[],L=null!==(a=null===u||void 0===u||null===(s=u.footerMenuItems)||void 0===s?void 0:s.nodes)&&void 0!==a?a:[];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.HJ,{title:v,description:h}),(0,f.jsx)(r.e,{client:c.Z,children:(0,f.jsxs)(l.J,{children:[(0,f.jsx)(d.h4,{title:v,description:h,menuItems:I}),(0,f.jsx)(d.or,{children:(0,f.jsx)(d.W2,{children:(0,f.jsx)(d.yd,{collections:e.collections})})})]})}),(0,f.jsx)(d.$_,{title:v,menuItems:L})]})}m.query=(0,a.Ps)(o||(_=["\n  ","\n  ","\n  query GetMenuItems(\n    $headerLocation: MenuLocationEnum\n    $footerLocation: MenuLocationEnum\n  ) {\n    generalSettings {\n      ...BlogInfoFragment\n    }\n    headerMenuItems: menuItems(where: { location: $headerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n    footerMenuItems: menuItems(where: { location: $footerLocation }) {\n      nodes {\n        ...NavigationMenuItemFragment\n      }\n    }\n  }\n"],v||(v=_.slice(0)),o=Object.freeze(Object.defineProperties(_,{raw:{value:Object.freeze(v)}}))),u.D,d.i9.fragments.entry),m.variables=function(){return{headerLocation:s.q,footerLocation:s.N}}},7938:function(e,n,t){"use strict";var o=t(1954),i=t(5465),r=t(6118),a=t(3454),s=new o.f({link:new i.L({uri:a.env.NEXT_PUBLIC_SHOPIFY_GRAPHQL_URL,headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":a.env.NEXT_PUBLIC_SHOPIFY_HEADLESS_PUBLIC_ACCESS_TOKEN}}),cache:new r.h,defaultOptions:{query:{fetchPolicy:"no-cache"}}});n.Z=s},2774:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return t(7950)}])}},function(e){e.O(0,[774,888,179],(function(){return n=2774,e(e.s=n);var n}));var n=e.O();_N_E=n}]);