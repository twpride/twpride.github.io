webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navbar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/howard/Documents/twpride.github.io/components/navbar.js\",\n    _s = $RefreshSig$();\n\n\nfunction Navbar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      prevScroll = _useState[0],\n      setPrevScroll = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navHide = _useState2[0],\n      setNavHide = _useState2[1]; // const handleScroll = useCallback((e) => {\n  //   console.log(e.view.pageYOffset,prevScroll,e.view.pageYOffset - prevScroll)\n  //   setNavHide(e.view.pageYOffset - prevScroll > 0)\n  //   setPrevScroll(e.view.pageYOffset)\n  // }, [])\n\n\n  var handleScroll = function handleScroll(e) {\n    console.log(e.view.pageYOffset, prevScroll);\n    setNavHide(e.view.pageYOffset - prevScroll > 0);\n    setPrevScroll(e.view.pageYOffset);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.xx = prevScroll;\n    window.setPrevScroll = setPrevScroll;\n    window.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: \"nav \".concat(navHide ? 'hidden' : ''),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"#\",\n        children: \"Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 10\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"#\",\n        children: \"About\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 10\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"#\",\n        children: \"Hom\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 10\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Navbar, \"CYRhL3KjtExLRrf9JZfKURmhWIs=\");\n\n_c = Navbar;\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/ODQxYiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VTdGF0ZSIsInByZXZTY3JvbGwiLCJzZXRQcmV2U2Nyb2xsIiwibmF2SGlkZSIsInNldE5hdkhpZGUiLCJoYW5kbGVTY3JvbGwiLCJlIiwiY29uc29sZSIsImxvZyIsInZpZXciLCJwYWdlWU9mZnNldCIsInVzZUVmZmVjdCIsIndpbmRvdyIsInh4IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFDZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBSUtDLHNEQUFRLENBQUMsQ0FBRCxDQUpiO0FBQUEsTUFJeEJDLFVBSndCO0FBQUEsTUFJWkMsYUFKWTs7QUFBQSxtQkFLREYsc0RBQVEsQ0FBQyxLQUFELENBTFA7QUFBQSxNQUt4QkcsT0FMd0I7QUFBQSxNQUtmQyxVQUxlLGtCQU8vQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLElBQUYsQ0FBT0MsV0FBbkIsRUFBZ0NULFVBQWhDO0FBQ0FHLGNBQVUsQ0FBQ0UsQ0FBQyxDQUFDRyxJQUFGLENBQU9DLFdBQVAsR0FBcUJULFVBQXJCLEdBQWtDLENBQW5DLENBQVY7QUFDQUMsaUJBQWEsQ0FBQ0ksQ0FBQyxDQUFDRyxJQUFGLENBQU9DLFdBQVIsQ0FBYjtBQUNELEdBSkQ7O0FBUUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNLENBQUNDLEVBQVAsR0FBWVosVUFBWjtBQUNBVyxVQUFNLENBQUNWLGFBQVAsR0FBdUJBLGFBQXZCO0FBQ0FVLFVBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NULFlBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hPLFlBQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNWLFlBQXJDO0FBQ0QsS0FGRDtBQUdELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxzQkFBTztBQUFLLGFBQVMsZ0JBQVNGLE9BQU8sR0FBRyxRQUFILEdBQWMsRUFBOUIsQ0FBZDtBQUFBLDRCQUNMO0FBQUEsNkJBQUs7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxlQUVMO0FBQUEsNkJBQUs7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSyxlQUdMO0FBQUEsNkJBQUs7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUtEOztHQW5DdUJKLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcblxuXG5cbiAgY29uc3QgW3ByZXZTY3JvbGwsIHNldFByZXZTY3JvbGxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtuYXZIaWRlLCBzZXROYXZIaWRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBjb25zdCBoYW5kbGVTY3JvbGwgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKGUudmlldy5wYWdlWU9mZnNldCxwcmV2U2Nyb2xsLGUudmlldy5wYWdlWU9mZnNldCAtIHByZXZTY3JvbGwpXG4gIC8vICAgc2V0TmF2SGlkZShlLnZpZXcucGFnZVlPZmZzZXQgLSBwcmV2U2Nyb2xsID4gMClcbiAgLy8gICBzZXRQcmV2U2Nyb2xsKGUudmlldy5wYWdlWU9mZnNldClcbiAgLy8gfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnZpZXcucGFnZVlPZmZzZXQsIHByZXZTY3JvbGwpXG4gICAgc2V0TmF2SGlkZShlLnZpZXcucGFnZVlPZmZzZXQgLSBwcmV2U2Nyb2xsID4gMClcbiAgICBzZXRQcmV2U2Nyb2xsKGUudmlldy5wYWdlWU9mZnNldClcbiAgfVxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy54eCA9IHByZXZTY3JvbGw7XG4gICAgd2luZG93LnNldFByZXZTY3JvbGwgPSBzZXRQcmV2U2Nyb2xsO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPXtgbmF2ICR7bmF2SGlkZSA/ICdoaWRkZW4nIDogJyd9YH0+XG4gICAgPGRpdj48YSBocmVmPVwiI1wiPkhvbWU8L2E+PC9kaXY+XG4gICAgPGRpdj48YSBocmVmPVwiI1wiPkFib3V0PC9hPjwvZGl2PlxuICAgIDxkaXY+PGEgaHJlZj1cIiNcIj5Ib208L2E+PC9kaXY+XG4gIDwvbmF2PlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

})