webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navbar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/howard/Documents/twpride.github.io/components/navbar.js\",\n    _s = $RefreshSig$();\n\n\nfunction Navbar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      scroll = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var handleScroll = function handleScroll(e) {\n      console.log(e);\n      setScroll(function (state) {\n        return {\n          navHide: window.pageYOffset - state.prevScroll > 0,\n          prevScroll: window.pageYOffset\n        };\n      });\n    };\n\n    setScroll({\n      navHide: false,\n      prevScroll: window.pageYOffset\n    });\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: \"nav\".concat(scroll && scroll.navHide ? ' nav-hide' : ''),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"#\",\n        children: \"Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 10\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"#\",\n        children: \"About\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 10\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"#\",\n        children: \"Hom\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 10\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Navbar, \"SM++xAkQ2jIAscDEfP1FQQAP/0I=\");\n\n_c = Navbar;\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/ODQxYiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImUiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJuYXZIaWRlIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJwcmV2U2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFDZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUMsSUFBRCxDQUZMO0FBQUEsTUFFeEJDLE1BRndCO0FBQUEsTUFFaEJDLFNBRmdCOztBQU0vQkMseURBQVMsQ0FBQyxZQUFNO0FBRWQsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBSCxlQUFTLENBQUMsVUFBQU0sS0FBSztBQUFBLGVBQ2I7QUFDRUMsaUJBQU8sRUFBRUMsTUFBTSxDQUFDQyxXQUFQLEdBQXFCSCxLQUFLLENBQUNJLFVBQTNCLEdBQXdDLENBRG5EO0FBRUVBLG9CQUFVLEVBQUVGLE1BQU0sQ0FBQ0M7QUFGckIsU0FEYTtBQUFBLE9BQU4sQ0FBVDtBQU1ELEtBUkQ7O0FBWUFULGFBQVMsQ0FDUDtBQUNFTyxhQUFPLEVBQUUsS0FEWDtBQUVFRyxnQkFBVSxFQUFFRixNQUFNLENBQUNDO0FBRnJCLEtBRE8sQ0FBVDtBQU1BRCxVQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDVCxZQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNYTSxZQUFNLENBQUNJLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDVixZQUFyQztBQUNELEtBRkQ7QUFHRCxHQXhCUSxFQXdCTixFQXhCTSxDQUFUO0FBMEJBLHNCQUFPO0FBQUssYUFBUyxlQUFRSCxNQUFNLElBQUlBLE1BQU0sQ0FBQ1EsT0FBakIsR0FBMkIsV0FBM0IsR0FBeUMsRUFBakQsQ0FBZDtBQUFBLDRCQUNMO0FBQUEsNkJBQUs7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxlQUVMO0FBQUEsNkJBQUs7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSyxlQUdMO0FBQUEsNkJBQUs7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUtEOztHQXJDdUJWLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuXG4gIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZShudWxsKTtcblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgc2V0U2Nyb2xsKHN0YXRlID0+IChcbiAgICAgICAge1xuICAgICAgICAgIG5hdkhpZGU6IHdpbmRvdy5wYWdlWU9mZnNldCAtIHN0YXRlLnByZXZTY3JvbGwgPiAwLFxuICAgICAgICAgIHByZXZTY3JvbGw6IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICB9XG4gICAgICApKVxuICAgIH1cblxuXG5cbiAgICBzZXRTY3JvbGwoXG4gICAgICB7XG4gICAgICAgIG5hdkhpZGU6IGZhbHNlLFxuICAgICAgICBwcmV2U2Nyb2xsOiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgIH1cbiAgICApXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gPG5hdiBjbGFzc05hbWU9e2BuYXYke3Njcm9sbCAmJiBzY3JvbGwubmF2SGlkZSA/ICcgbmF2LWhpZGUnIDogJyd9YH0+XG4gICAgPGRpdj48YSBocmVmPVwiI1wiPkhvbWU8L2E+PC9kaXY+XG4gICAgPGRpdj48YSBocmVmPVwiI1wiPkFib3V0PC9hPjwvZGl2PlxuICAgIDxkaXY+PGEgaHJlZj1cIiNcIj5Ib208L2E+PC9kaXY+XG4gIDwvbmF2PlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

})