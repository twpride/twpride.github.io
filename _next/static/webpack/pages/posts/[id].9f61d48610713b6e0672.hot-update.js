webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/howard/Documents/twpride.github.io/pages/posts/[id].js\";\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  var postData = _ref.postData;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: postData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preload\",\n        href: \"https://unpkg.com/prismjs@0.0.1/themes/prism.css\",\n        as: \"script\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://unpkg.com/prismjs@0.0.1/themes/prism.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }, this), postData.title, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }, this), postData.id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, this), postData.date, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: postData.contentHtml\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, this);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvLmpzP2M4NmYiXSwibmFtZXMiOlsiUG9zdCIsInBvc3REYXRhIiwidGl0bGUiLCJpZCIsImRhdGUiLCJfX2h0bWwiLCJjb250ZW50SHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRWUsU0FBU0EsSUFBVCxPQUE0QjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN6QyxzQkFBTyxxRUFBQywwREFBRDtBQUFBLDRCQUNMLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBUUEsUUFBUSxDQUFDQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLFdBQUcsRUFBQyxTQUROO0FBRUUsWUFBSSxFQUFDLGtEQUZQO0FBR0UsVUFBRSxFQUFDO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBT0U7QUFDRSxZQUFJLG9EQUROO0FBRUUsV0FBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLEVBY0pELFFBQVEsQ0FBQ0MsS0FkTCxlQWVMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSyxFQWdCSkQsUUFBUSxDQUFDRSxFQWhCTCxlQWlCTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJLLEVBa0JKRixRQUFRLENBQUNHLElBbEJMLGVBbUJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkssZUFvQkw7QUFBSyw2QkFBdUIsRUFBRTtBQUFFQyxjQUFNLEVBQUVKLFFBQVEsQ0FBQ0s7QUFBbkI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQXVCRDtLQXhCdUJOLEkiLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IGdldEFsbFBvc3RJZHMsIGdldFBvc3REYXRhIH0gZnJvbSAnLi4vLi4vbGliL3Bvc3RzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdERhdGEgfSkge1xuICByZXR1cm4gPExheW91dD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57cG9zdERhdGEudGl0bGV9PC90aXRsZT5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHJpc21qc0AwLjAuMS90aGVtZXMvcHJpc20uY3NzXCJcbiAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIGhyZWY9e2BodHRwczovL3VucGtnLmNvbS9wcmlzbWpzQDAuMC4xL3RoZW1lcy9wcmlzbS5jc3NgfVxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgIC8+XG5cbiAgICA8L0hlYWQ+XG4gICAge3Bvc3REYXRhLnRpdGxlfVxuICAgIDxiciAvPlxuICAgIHtwb3N0RGF0YS5pZH1cbiAgICA8YnIgLz5cbiAgICB7cG9zdERhdGEuZGF0ZX1cbiAgICA8YnIgLz5cbiAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cblxuICA8L0xheW91dD5cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGdldEFsbFBvc3RJZHMoKVxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIC8vIEZldGNoIG5lY2Vzc2FyeSBkYXRhIGZvciB0aGUgYmxvZyBwb3N0IHVzaW5nIHBhcmFtcy5pZFxuICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldFBvc3REYXRhKHBhcmFtcy5pZClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdERhdGFcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ })

})