webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navbar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/howard/Documents/twpride.github.io/components/navbar.js\",\n    _s = $RefreshSig$();\n\n\nfunction Navbar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      scroll = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var handleScroll = function handleScroll() {\n      return setScroll(function (state) {\n        return {\n          navHide: window.pageYOffset - state.prevScroll > 0,\n          prevScroll: window.pageYOffset\n        };\n      });\n    };\n\n    setScroll({\n      navHide: false,\n      prevScroll: window.pageYOffset\n    });\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: \"nav\".concat(scroll && scroll.navHide ? ' nav-hide' : ''),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          id: \"home-link\",\n          children: [\"Howard Hwang\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/apple-touch-icon.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"/about\",\n          children: \"About\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 12\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Navbar, \"SM++xAkQ2jIAscDEfP1FQQAP/0I=\");\n\n_c = Navbar;\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/ODQxYiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInN0YXRlIiwibmF2SGlkZSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwicHJldlNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBQ2UsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUVIQyxzREFBUSxDQUFDLElBQUQsQ0FGTDtBQUFBLE1BRXhCQyxNQUZ3QjtBQUFBLE1BRWhCQyxTQUZnQjs7QUFNL0JDLHlEQUFTLENBQUMsWUFBTTtBQUVkLFFBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsYUFBTUYsU0FBUyxDQUFDLFVBQUFHLEtBQUs7QUFBQSxlQUN4QztBQUNFQyxpQkFBTyxFQUFFQyxNQUFNLENBQUNDLFdBQVAsR0FBcUJILEtBQUssQ0FBQ0ksVUFBM0IsR0FBd0MsQ0FEbkQ7QUFFRUEsb0JBQVUsRUFBRUYsTUFBTSxDQUFDQztBQUZyQixTQUR3QztBQUFBLE9BQU4sQ0FBZjtBQUFBLEtBQXJCOztBQVFBTixhQUFTLENBQ1A7QUFDRUksYUFBTyxFQUFFLEtBRFg7QUFFRUcsZ0JBQVUsRUFBRUYsTUFBTSxDQUFDQztBQUZyQixLQURPLENBQVQ7QUFNQUQsVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ04sWUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWEcsWUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1AsWUFBckM7QUFDRCxLQUZEO0FBR0QsR0FwQlEsRUFvQk4sRUFwQk0sQ0FBVDtBQXNCQSxzQkFBTztBQUFLLGFBQVMsZUFBUUgsTUFBTSxJQUFJQSxNQUFNLENBQUNLLE9BQWpCLEdBQTJCLFdBQTNCLEdBQXlDLEVBQWpELENBQWQ7QUFBQSwyQkFDTDtBQUFBLDhCQUNFO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQSwrQkFDRTtBQUFLLFlBQUUsRUFBQyxXQUFSO0FBQUEsa0RBRUU7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVFFO0FBQUEsK0JBQUs7QUFBRyxjQUFJLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFZRDs7R0F4Q3VCUCxNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcblxuICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUobnVsbCk7XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiBzZXRTY3JvbGwoc3RhdGUgPT4gKFxuICAgICAge1xuICAgICAgICBuYXZIaWRlOiB3aW5kb3cucGFnZVlPZmZzZXQgLSBzdGF0ZS5wcmV2U2Nyb2xsID4gMCxcbiAgICAgICAgcHJldlNjcm9sbDogd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICB9XG4gICAgKSlcblxuXG4gICAgc2V0U2Nyb2xsKFxuICAgICAge1xuICAgICAgICBuYXZIaWRlOiBmYWxzZSxcbiAgICAgICAgcHJldlNjcm9sbDogd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICB9XG4gICAgKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPXtgbmF2JHtzY3JvbGwgJiYgc2Nyb2xsLm5hdkhpZGUgPyAnIG5hdi1oaWRlJyA6ICcnfWB9PlxuICAgIDxkaXY+XG4gICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICA8ZGl2IGlkPVwiaG9tZS1saW5rXCI+XG4gICAgICAgICAgSG93YXJkIEh3YW5nXG4gICAgICAgICAgPGltZyBzcmM9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIj5cbiAgICAgICAgICA8L2ltZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgICA8ZGl2PjxhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

})