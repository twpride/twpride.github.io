webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./components/navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/home/howard/Documents/twpride.github.io/components/layout.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      TTvis = _useState[0],\n      setTTvis = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function copyTextToClipboard(text) {\n      var textArea = document.createElement(\"textarea\");\n      textArea.value = text;\n      document.body.appendChild(textArea); // textArea.focus();\n\n      textArea.select();\n\n      try {\n        var successful = document.execCommand('copy');\n        var msg = successful ? 'successful' : 'unsuccessful';\n        console.log('Copying text command was ' + msg);\n      } catch (err) {\n        console.log('Oops, unable to copy');\n      }\n\n      document.body.removeChild(textArea);\n      setTTvis(false);\n    }\n\n    document.getElementById(\"email\").addEventListener(\"click\", function () {\n      return copyTextToClipboard('twpride@gmail3.com');\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"theme-color\",\n        content: \"#90cdf4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"apple-mobile-web-app-status-bar\",\n        content: \"#90cdf4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"manifest\",\n        href: \"/manifest.json\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-icon\",\n        href: \"/apple-touch-icon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Lora&family=Roboto:wght@400;500&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }, this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: \"footer\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        id: \"email\",\n        className: \"tooltip\",\n        onMouseEnter: function onMouseEnter() {\n          return setTTvis(true);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return setTTvis(false);\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"tooltiptext\".concat(TTvis ? ' tooltip-visible' : ''),\n          children: \"copy to clipboard\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          viewBox: \"0 0 24 24\",\n          width: \"24px\",\n          height: \"24px\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M0 0h24v24H0z\",\n            fill: \"none\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 96\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 134\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://github.com/twpride/tangram\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          id: \"github\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          height: \"24\",\n          viewBox: \"0 0 24 24\",\n          width: \"24\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M 12.039683,-1.9101289e-4 C 5.3777255,-1.9101289e-4 0,5.3774113 0,12.039218 c 0,5.297339 3.451376,9.792052 8.267249,11.397306 0.642117,0.08027 0.802646,-0.240787 0.802646,-0.561839 v -2.08683 C 5.698783,21.510219 4.9764025,19.1826 4.9764025,19.1826 4.4145508,17.818134 3.6119047,17.41682 3.6119047,17.41682 c -1.1237034,-0.722365 0.080268,-0.722365 0.080268,-0.722365 1.2039691,0.08027 1.8460852,1.203942 1.8460852,1.203942 C 6.581697,19.74444 8.347518,19.1826 9.069898,18.86155 9.150168,18.058922 9.471221,17.577345 9.872544,17.256295 7.2238131,16.935244 4.4145544,15.891828 4.4145544,11.316853 c 0,-1.284203 0.4815874,-2.4078819 1.2039678,-3.2105099 C 5.4579935,7.7852929 5.0566705,6.581352 5.6987902,4.8958348 c 0,0 1.0434391,-0.3210508 3.2908468,1.2039409 0.963175,-0.2407882 2.006614,-0.4013137 3.050053,-0.4013137 1.04344,0 2.086879,0.1605255 3.050053,0.4013137 2.327673,-1.5249917 3.290848,-1.2039409 3.290848,-1.2039409 0.642116,1.6855172 0.240793,2.8894581 0.08027,3.2105083 0.802645,0.802628 1.203968,1.9263069 1.203968,3.2105099 0,4.655239 -2.809259,5.618391 -5.45799,5.939442 0.401323,0.401313 0.802646,1.123678 0.802646,2.247357 v 3.29077 c 0,0.321051 0.240793,0.722365 0.802646,0.56184 4.815872,-1.605255 8.186984,-6.099967 8.186984,-11.397307 C 24.079385,5.3774113 18.701654,-1.9101289e-4 12.039696,-1.9101289e-4 Z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://www.linkedin.com/in/howard-hwang-b3000335\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          id: \"linkedin\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          height: \"24\",\n          viewBox: \"0 0 24 24\",\n          width: \"24\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M 20.449136,20.449793 H 16.893088 V 14.88096 c 0,-1.32794 -0.02371,-3.037409 -1.849517,-3.037409 -1.852109,0 -2.135482,1.446844 -2.135482,2.940731 v 5.665141 H 9.35204 V 8.9976456 h 3.413807 v 1.5650064 h 0.04778 c 0.696095,-1.1901624 1.990397,-1.9010004 3.368247,-1.8498564 3.604203,0 4.26874,2.3706614 4.26874,5.4547444 z M 5.3396305,7.4322684 C 3.5010137,7.4325984 2.5801652,5.2099932 3.8798725,3.9098412 5.1795802,2.6096868 7.40255,3.5297232 7.40288,5.3683104 7.4030845,6.5079984 6.4793362,7.4320632 5.3396305,7.4322684 M 7.1176553,20.449793 H 3.5579016 V 8.9976456 H 7.1176553 Z M 22.221976,0.0028368 H 1.7709868 C 0.8044308,-0.0080724 0.0117962,0.7661496 0,1.7326788 V 22.268164 c 0.011388,0.966996 0.803963,1.741982 1.7709868,1.731695 H 22.221976 C 23.190912,24.012003 23.986586,23.237069 24,22.268164 V 1.7311968 C 23.986188,0.7627584 23.190444,-0.011418 22.221976,0.0013548\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Layout, \"e6TXoFP3qiTfzNv9fFl2h226HoQ=\");\n\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanM/MDlhNyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiVFR2aXMiLCJzZXRUVHZpcyIsInVzZUVmZmVjdCIsImNvcHlUZXh0VG9DbGlwYm9hcmQiLCJ0ZXh0IiwidGV4dEFyZWEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJyZW1vdmVDaGlsZCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFFakJDLHNEQUFRLENBQUMsS0FBRCxDQUZTO0FBQUEsTUFFcENDLEtBRm9DO0FBQUEsTUFFN0JDLFFBRjZCOztBQUkzQ0MseURBQVMsQ0FBQyxZQUFNO0FBRWQsYUFBU0MsbUJBQVQsQ0FBNkJDLElBQTdCLEVBQW1DO0FBQ2pDLFVBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWY7QUFDQUYsY0FBUSxDQUFDRyxLQUFULEdBQWlCSixJQUFqQjtBQUNBRSxjQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsUUFBMUIsRUFIaUMsQ0FJakM7O0FBQ0FBLGNBQVEsQ0FBQ00sTUFBVDs7QUFDQSxVQUFJO0FBQ0YsWUFBSUMsVUFBVSxHQUFHTixRQUFRLENBQUNPLFdBQVQsQ0FBcUIsTUFBckIsQ0FBakI7QUFDQSxZQUFJQyxHQUFHLEdBQUdGLFVBQVUsR0FBRyxZQUFILEdBQWtCLGNBQXRDO0FBQ0FHLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUE4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K0JBQ0U7QUFBSyxZQUFFLEVBQUMsVUFBUjtBQUFtQixlQUFLLEVBQUMsNEJBQXpCO0FBQXNELGdCQUFNLEVBQUMsSUFBN0Q7QUFBa0UsaUJBQU8sRUFBQyxXQUExRTtBQUNFLGVBQUssRUFBQyxJQURSO0FBQUEsaUNBRUU7QUFDRSxhQUFDLEVBQUM7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSztBQUFBLGtCQUFQO0FBa0NEOztHQWhFdUJILE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL25hdmJhcidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBcbiAgY29uc3QgW1RUdmlzLCBzZXRUVHZpc10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gY29weVRleHRUb0NsaXBib2FyZCh0ZXh0KSB7XG4gICAgICB2YXIgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICB0ZXh0QXJlYS52YWx1ZSA9IHRleHQ7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgICAgIC8vIHRleHRBcmVhLmZvY3VzKCk7XG4gICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgdmFyIG1zZyA9IHN1Y2Nlc3NmdWwgPyAnc3VjY2Vzc2Z1bCcgOiAndW5zdWNjZXNzZnVsJztcbiAgICAgICAgY29uc29sZS5sb2coJ0NvcHlpbmcgdGV4dCBjb21tYW5kIHdhcyAnICsgbXNnKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnT29wcywgdW5hYmxlIHRvIGNvcHknKTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xuICAgICAgc2V0VFR2aXMoZmFsc2UpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29weVRleHRUb0NsaXBib2FyZCgndHdwcmlkZUBnbWFpbDMuY29tJykpO1xuICB9LCBbXSlcblxuXG5cblxuXG4gIHJldHVybiA8PlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM5MGNkZjRcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXJcIiBjb250ZW50PVwiIzkwY2RmNFwiIC8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIC8+XG4gICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9yYSZmYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cblxuICAgIDwvSGVhZD5cbiAgICA8TmF2YmFyIC8+XG4gICAge2NoaWxkcmVufVxuICAgIDxkaXYgaWQ9XCJmb290ZXJcIj5cbiAgICAgIDxkaXYgaWQ9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInRvb2x0aXBcIiBvbk1vdXNlRW50ZXI9eygpPT5zZXRUVHZpcyh0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKT0+c2V0VFR2aXMoZmFsc2UpfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbHRpcHRleHQke1RUdmlzID8gJyB0b29sdGlwLXZpc2libGUnIDogJyd9YH0+Y29weSB0byBjbGlwYm9hcmQ8L3NwYW4+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCI+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+PHBhdGggZD1cIk0yMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgNGwtOCA1LTgtNVY2bDggNSA4LTV2MnpcIiAvPjwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vdHdwcmlkZS90YW5ncmFtJz5cbiAgICAgICAgPHN2ZyBpZD0nZ2l0aHViJyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICB3aWR0aD1cIjI0XCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNIDEyLjAzOTY4MywtMS45MTAxMjg5ZS00IEMgNS4zNzc3MjU1LC0xLjkxMDEyODllLTQgMCw1LjM3NzQxMTMgMCwxMi4wMzkyMTggYyAwLDUuMjk3MzM5IDMuNDUxMzc2LDkuNzkyMDUyIDguMjY3MjQ5LDExLjM5NzMwNiAwLjY0MjExNywwLjA4MDI3IDAuODAyNjQ2LC0wLjI0MDc4NyAwLjgwMjY0NiwtMC41NjE4MzkgdiAtMi4wODY4MyBDIDUuNjk4NzgzLDIxLjUxMDIxOSA0Ljk3NjQwMjUsMTkuMTgyNiA0Ljk3NjQwMjUsMTkuMTgyNiA0LjQxNDU1MDgsMTcuODE4MTM0IDMuNjExOTA0NywxNy40MTY4MiAzLjYxMTkwNDcsMTcuNDE2ODIgYyAtMS4xMjM3MDM0LC0wLjcyMjM2NSAwLjA4MDI2OCwtMC43MjIzNjUgMC4wODAyNjgsLTAuNzIyMzY1IDEuMjAzOTY5MSwwLjA4MDI3IDEuODQ2MDg1MiwxLjIwMzk0MiAxLjg0NjA4NTIsMS4yMDM5NDIgQyA2LjU4MTY5NywxOS43NDQ0NCA4LjM0NzUxOCwxOS4xODI2IDkuMDY5ODk4LDE4Ljg2MTU1IDkuMTUwMTY4LDE4LjA1ODkyMiA5LjQ3MTIyMSwxNy41NzczNDUgOS44NzI1NDQsMTcuMjU2Mjk1IDcuMjIzODEzMSwxNi45MzUyNDQgNC40MTQ1NTQ0LDE1Ljg5MTgyOCA0LjQxNDU1NDQsMTEuMzE2ODUzIGMgMCwtMS4yODQyMDMgMC40ODE1ODc0LC0yLjQwNzg4MTkgMS4yMDM5Njc4LC0zLjIxMDUwOTkgQyA1LjQ1Nzk5MzUsNy43ODUyOTI5IDUuMDU2NjcwNSw2LjU4MTM1MiA1LjY5ODc5MDIsNC44OTU4MzQ4IGMgMCwwIDEuMDQzNDM5MSwtMC4zMjEwNTA4IDMuMjkwODQ2OCwxLjIwMzk0MDkgMC45NjMxNzUsLTAuMjQwNzg4MiAyLjAwNjYxNCwtMC40MDEzMTM3IDMuMDUwMDUzLC0wLjQwMTMxMzcgMS4wNDM0NCwwIDIuMDg2ODc5LDAuMTYwNTI1NSAzLjA1MDA1MywwLjQwMTMxMzcgMi4zMjc2NzMsLTEuNTI0OTkxNyAzLjI5MDg0OCwtMS4yMDM5NDA5IDMuMjkwODQ4LC0xLjIwMzk0MDkgMC42NDIxMTYsMS42ODU1MTcyIDAuMjQwNzkzLDIuODg5NDU4MSAwLjA4MDI3LDMuMjEwNTA4MyAwLjgwMjY0NSwwLjgwMjYyOCAxLjIwMzk2OCwxLjkyNjMwNjkgMS4yMDM5NjgsMy4yMTA1MDk5IDAsNC42NTUyMzkgLTIuODA5MjU5LDUuNjE4MzkxIC01LjQ1Nzk5LDUuOTM5NDQyIDAuNDAxMzIzLDAuNDAxMzEzIDAuODAyNjQ2LDEuMTIzNjc4IDAuODAyNjQ2LDIuMjQ3MzU3IHYgMy4yOTA3NyBjIDAsMC4zMjEwNTEgMC4yNDA3OTMsMC43MjIzNjUgMC44MDI2NDYsMC41NjE4NCA0LjgxNTg3MiwtMS42MDUyNTUgOC4xODY5ODQsLTYuMDk5OTY3IDguMTg2OTg0LC0xMS4zOTczMDcgQyAyNC4wNzkzODUsNS4zNzc0MTEzIDE4LjcwMTY1NCwtMS45MTAxMjg5ZS00IDEyLjAzOTY5NiwtMS45MTAxMjg5ZS00IFpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYT5cbiAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ob3dhcmQtaHdhbmctYjMwMDAzMzUnPlxuICAgICAgICA8c3ZnIGlkPSdsaW5rZWRpbicgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgd2lkdGg9XCIyNFwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAyMC40NDkxMzYsMjAuNDQ5NzkzIEggMTYuODkzMDg4IFYgMTQuODgwOTYgYyAwLC0xLjMyNzk0IC0wLjAyMzcxLC0zLjAzNzQwOSAtMS44NDk1MTcsLTMuMDM3NDA5IC0xLjg1MjEwOSwwIC0yLjEzNTQ4MiwxLjQ0Njg0NCAtMi4xMzU0ODIsMi45NDA3MzEgdiA1LjY2NTE0MSBIIDkuMzUyMDQgViA4Ljk5NzY0NTYgaCAzLjQxMzgwNyB2IDEuNTY1MDA2NCBoIDAuMDQ3NzggYyAwLjY5NjA5NSwtMS4xOTAxNjI0IDEuOTkwMzk3LC0xLjkwMTAwMDQgMy4zNjgyNDcsLTEuODQ5ODU2NCAzLjYwNDIwMywwIDQuMjY4NzQsMi4zNzA2NjE0IDQuMjY4NzQsNS40NTQ3NDQ0IHogTSA1LjMzOTYzMDUsNy40MzIyNjg0IEMgMy41MDEwMTM3LDcuNDMyNTk4NCAyLjU4MDE2NTIsNS4yMDk5OTMyIDMuODc5ODcyNSwzLjkwOTg0MTIgNS4xNzk1ODAyLDIuNjA5Njg2OCA3LjQwMjU1LDMuNTI5NzIzMiA3LjQwMjg4LDUuMzY4MzEwNCA3LjQwMzA4NDUsNi41MDc5OTg0IDYuNDc5MzM2Miw3LjQzMjA2MzIgNS4zMzk2MzA1LDcuNDMyMjY4NCBNIDcuMTE3NjU1MywyMC40NDk3OTMgSCAzLjU1NzkwMTYgViA4Ljk5NzY0NTYgSCA3LjExNzY1NTMgWiBNIDIyLjIyMTk3NiwwLjAwMjgzNjggSCAxLjc3MDk4NjggQyAwLjgwNDQzMDgsLTAuMDA4MDcyNCAwLjAxMTc5NjIsMC43NjYxNDk2IDAsMS43MzI2Nzg4IFYgMjIuMjY4MTY0IGMgMC4wMTEzODgsMC45NjY5OTYgMC44MDM5NjMsMS43NDE5ODIgMS43NzA5ODY4LDEuNzMxNjk1IEggMjIuMjIxOTc2IEMgMjMuMTkwOTEyLDI0LjAxMjAwMyAyMy45ODY1ODYsMjMuMjM3MDY5IDI0LDIyLjI2ODE2NCBWIDEuNzMxMTk2OCBDIDIzLjk4NjE4OCwwLjc2Mjc1ODQgMjMuMTkwNDQ0LC0wLjAxMTQxOCAyMi4yMjE5NzYsMC4wMDEzNTQ4XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvPlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ })

})