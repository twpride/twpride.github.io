webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n\n\nvar _jsxFileName = \"/home/howard/Documents/twpride.github.io/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var allPostsData = _ref.allPostsData;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      ct = _useState[0],\n      setCt = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    window.addEventListener(\"load\", function () {\n      return navigator.serviceWorker.register(\"/sw.js\");\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Howard Hwang\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), allPostsData.map(function (_ref2) {\n      var id = _ref2.id,\n          title = _ref2.title,\n          date = _ref2.date,\n          preview = _ref2.preview,\n          blurb = _ref2.blurb,\n          tags = _ref2.tags;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"preview\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: preview\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/posts/\".concat(id),\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this), date, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this), tags && tags.toString()]\n      }, id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: function onClick() {\n        return setCt(function (state) {\n          return state + 1;\n        });\n      },\n      children: \"increment +\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: ct\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"/posts/tangram\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        children: \"tangram\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"2AHyqQofS47YmuRYGRLdBdgDtio=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYWxsUG9zdHNEYXRhIiwidXNlU3RhdGUiLCJjdCIsInNldEN0IiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsIm1hcCIsImlkIiwidGl0bGUiLCJkYXRlIiwicHJldmlldyIsImJsdXJiIiwidGFncyIsInRvU3RyaW5nIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBWWUsU0FBU0EsSUFBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQUEsa0JBQ3pCQyxzREFBUSxDQUFDLENBQUQsQ0FEaUI7QUFBQSxNQUN0Q0MsRUFEc0M7QUFBQSxNQUNsQ0MsS0FEa0M7O0FBRTdDQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQztBQUFBLGFBQU1DLFNBQVMsQ0FBQ0MsYUFBVixDQUF3QkMsUUFBeEIsQ0FBaUMsUUFBakMsQ0FBTjtBQUFBLEtBQWhDO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUtHVCxZQUFZLENBQUNVLEdBQWIsQ0FBaUI7QUFBQSxVQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxVQUFPQyxLQUFQLFNBQU9BLEtBQVA7QUFBQSxVQUFjQyxJQUFkLFNBQWNBLElBQWQ7QUFBQSxVQUFvQkMsT0FBcEIsU0FBb0JBLE9BQXBCO0FBQUEsVUFBNkJDLEtBQTdCLFNBQTZCQSxLQUE3QjtBQUFBLFVBQW9DQyxJQUFwQyxTQUFvQ0EsSUFBcEM7QUFBQSwwQkFDaEI7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBRUY7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLG1CQUFZSCxFQUFaLENBQVY7QUFBQSxvQkFDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixFQU1HRCxFQU5ILGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixFQVFHRSxJQVJILGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURixFQVVHRyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsUUFBTCxFQVZYO0FBQUEsU0FBOEJOLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEZ0I7QUFBQSxLQUFqQixDQUxILGVBb0JFO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTVIsS0FBSyxDQUFDLFVBQUFlLEtBQUs7QUFBQSxpQkFBSUEsS0FBSyxHQUFHLENBQVo7QUFBQSxTQUFOLENBQVg7QUFBQSxPQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJGLGVBd0JFO0FBQUEsZ0JBQU1oQjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkYsZUF5QkUscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsZ0JBQVg7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7O0dBdkN1QkgsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhIH0gZnJvbSAnLi4vbGliL3Bvc3RzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKVxuICAvLyBjb25zb2xlLmxvZyhhbGxQb3N0c0RhdGEpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbFBvc3RzRGF0YVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYWxsUG9zdHNEYXRhIH0pIHtcbiAgY29uc3QgW2N0LCBzZXRDdF0gPSB1c2VTdGF0ZSgwKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIvc3cuanNcIikpO1xuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib3dhcmQgSHdhbmc8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgdGl0bGUsIGRhdGUsIHByZXZpZXcsIGJsdXJiLCB0YWdzIH0pID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZXZpZXcnIGtleT17aWR9PlxuICAgICAgICAgIDxpbWcgc3JjPXtwcmV2aWV3fT48L2ltZz5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7aWR9YH0+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHtpZH1cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7ZGF0ZX1cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7dGFncyAmJiB0YWdzLnRvU3RyaW5nKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3Qoc3RhdGUgPT4gc3RhdGUgKyAxKX1cbiAgICAgID5pbmNyZW1lbnQgKzwvYnV0dG9uPlxuXG4gICAgICA8ZGl2PntjdH08L2Rpdj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHMvdGFuZ3JhbVwiPlxuICAgICAgICA8YT50YW5ncmFtPC9hPlxuICAgICAgPC9MaW5rPlxuXG5cblxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})