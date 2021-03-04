webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./components/navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/home/howard/Documents/twpride.github.io/components/layout.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      TTvis = _useState[0],\n      setTTvis = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function copyTextToClipboard(text) {\n      var textArea = document.createElement(\"textarea\");\n      textArea.value = text;\n      document.body.appendChild(textArea); // textArea.focus();\n\n      textArea.select();\n\n      try {\n        var successful = document.execCommand('copy');\n        var msg = successful ? 'successful' : 'unsuccessful';\n        console.log('Copying text command was ' + msg);\n      } catch (err) {\n        console.log('Oops, unable to copy');\n      }\n\n      document.body.removeChild(textArea);\n      setTTvis(false);\n    }\n\n    document.getElementById(\"email\").addEventListener(\"click\", function () {\n      return copyTextToClipboard('twpride@gmail44.com');\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"theme-color\",\n        content: \"#90cdf4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"apple-mobile-web-app-status-bar\",\n        content: \"#90cdf4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"manifest\",\n        href: \"/manifest.json\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-icon\",\n        href: \"/apple-touch-icon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Lora&family=Roboto:wght@400;500&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }, this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: \"footer\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        id: \"email\",\n        className: \"tooltip\",\n        onMouseEnter: function onMouseEnter() {\n          return setTTvis(true);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return setTTvis(false);\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"tooltiptext\".concat(TTvis ? ' tooltip-visible' : ''),\n          children: \"copy to clipboard\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          viewBox: \"0 0 24 24\",\n          width: \"24px\",\n          height: \"24px\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M0 0h24v24H0z\",\n            fill: \"none\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 96\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 134\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://github.com/twpride/tangram\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          id: \"github\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          height: \"24\",\n          viewBox: \"0 0 24 24\",\n          width: \"24\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M 12.039683,-1.9101289e-4 C 5.3777255,-1.9101289e-4 0,5.3774113 0,12.039218 c 0,5.297339 3.451376,9.792052 8.267249,11.397306 0.642117,0.08027 0.802646,-0.240787 0.802646,-0.561839 v -2.08683 C 5.698783,21.510219 4.9764025,19.1826 4.9764025,19.1826 4.4145508,17.818134 3.6119047,17.41682 3.6119047,17.41682 c -1.1237034,-0.722365 0.080268,-0.722365 0.080268,-0.722365 1.2039691,0.08027 1.8460852,1.203942 1.8460852,1.203942 C 6.581697,19.74444 8.347518,19.1826 9.069898,18.86155 9.150168,18.058922 9.471221,17.577345 9.872544,17.256295 7.2238131,16.935244 4.4145544,15.891828 4.4145544,11.316853 c 0,-1.284203 0.4815874,-2.4078819 1.2039678,-3.2105099 C 5.4579935,7.7852929 5.0566705,6.581352 5.6987902,4.8958348 c 0,0 1.0434391,-0.3210508 3.2908468,1.2039409 0.963175,-0.2407882 2.006614,-0.4013137 3.050053,-0.4013137 1.04344,0 2.086879,0.1605255 3.050053,0.4013137 2.327673,-1.5249917 3.290848,-1.2039409 3.290848,-1.2039409 0.642116,1.6855172 0.240793,2.8894581 0.08027,3.2105083 0.802645,0.802628 1.203968,1.9263069 1.203968,3.2105099 0,4.655239 -2.809259,5.618391 -5.45799,5.939442 0.401323,0.401313 0.802646,1.123678 0.802646,2.247357 v 3.29077 c 0,0.321051 0.240793,0.722365 0.802646,0.56184 4.815872,-1.605255 8.186984,-6.099967 8.186984,-11.397307 C 24.079385,5.3774113 18.701654,-1.9101289e-4 12.039696,-1.9101289e-4 Z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://www.linkedin.com/in/howard-hwang-b3000335\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          id: \"linkedin\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          height: \"24\",\n          viewBox: \"0 0 24 24\",\n          width: \"24\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M 20.449136,20.449793 H 16.893088 V 14.88096 c 0,-1.32794 -0.02371,-3.037409 -1.849517,-3.037409 -1.852109,0 -2.135482,1.446844 -2.135482,2.940731 v 5.665141 H 9.35204 V 8.9976456 h 3.413807 v 1.5650064 h 0.04778 c 0.696095,-1.1901624 1.990397,-1.9010004 3.368247,-1.8498564 3.604203,0 4.26874,2.3706614 4.26874,5.4547444 z M 5.3396305,7.4322684 C 3.5010137,7.4325984 2.5801652,5.2099932 3.8798725,3.9098412 5.1795802,2.6096868 7.40255,3.5297232 7.40288,5.3683104 7.4030845,6.5079984 6.4793362,7.4320632 5.3396305,7.4322684 M 7.1176553,20.449793 H 3.5579016 V 8.9976456 H 7.1176553 Z M 22.221976,0.0028368 H 1.7709868 C 0.8044308,-0.0080724 0.0117962,0.7661496 0,1.7326788 V 22.268164 c 0.011388,0.966996 0.803963,1.741982 1.7709868,1.731695 H 22.221976 C 23.190912,24.012003 23.986586,23.237069 24,22.268164 V 1.7311968 C 23.986188,0.7627584 23.190444,-0.011418 22.221976,0.0013548\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Layout, \"e6TXoFP3qiTfzNv9fFl2h226HoQ=\");\n\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanM/MDlhNyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiVFR2aXMiLCJzZXRUVHZpcyIsInVzZUVmZmVjdCIsImNvcHlUZXh0VG9DbGlwYm9hcmQiLCJ0ZXh0IiwidGV4dEFyZWEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJyZW1vdmVDaGlsZCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFFakJDLHNEQUFRLENBQUMsS0FBRCxDQUZTO0FBQUEsTUFFcENDLEtBRm9DO0FBQUEsTUFFN0JDLFFBRjZCOztBQUkzQ0MseURBQVMsQ0FBQyxZQUFNO0FBRWQsYUFBU0MsbUJBQVQsQ0FBNkJDLElBQTdCLEVBQW1DO0FBQ2pDLFVBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWY7QUFDQUYsY0FBUSxDQUFDRyxLQUFULEdBQWlCSixJQUFqQjtBQUNBRSxjQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsUUFBMUIsRUFIaUMsQ0FJakM7O0FBQ0FBLGNBQVEsQ0FBQ00sTUFBVDs7QUFDQSxVQUFJO0FBQ0YsWUFBSUMsVUFBVSxHQUFHTixRQUFRLENBQUNPLFdBQVQsQ0FBcUIsTUFBckIsQ0FBakI7QUFDQSxZQUFJQyxHQUFHLEdBQUdGLFVBQVUsR0FBRyxZQUFILEdBQWtCLGNBQXRDO0FBQ0FHLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUE4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K0JBQ0U7QUFBSyxZQUFFLEVBQUMsVUFBUjtBQUFtQixlQUFLLEVBQUMsNEJBQXpCO0FBQXNELGdCQUFNLEVBQUMsSUFBN0Q7QUFBa0UsaUJBQU8sRUFBQyxXQUExRTtBQUNFLGVBQUssRUFBQyxJQURSO0FBQUEsaUNBRUU7QUFDRSxhQUFDLEVBQUM7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSztBQUFBLGtCQUFQO0FBa0NEOztHQWhFdUJILE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL25hdmJhcidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBcbiAgY29uc3QgW1RUdmlzLCBzZXRUVHZpc10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gY29weVRleHRUb0NsaXBib2FyZCh0ZXh0KSB7XG4gICAgICB2YXIgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICB0ZXh0QXJlYS52YWx1ZSA9IHRleHQ7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgICAgIC8vIHRleHRBcmVhLmZvY3VzKCk7XG4gICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgdmFyIG1zZyA9IHN1Y2Nlc3NmdWwgPyAnc3VjY2Vzc2Z1bCcgOiAndW5zdWNjZXNzZnVsJztcbiAgICAgICAgY29uc29sZS5sb2coJ0NvcHlpbmcgdGV4dCBjb21tYW5kIHdhcyAnICsgbXNnKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnT29wcywgdW5hYmxlIHRvIGNvcHknKTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xuICAgICAgc2V0VFR2aXMoZmFsc2UpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29weVRleHRUb0NsaXBib2FyZCgndHdwcmlkZUBnbWFpbDQ0LmNvbScpKTtcbiAgfSwgW10pXG5cblxuXG5cblxuICByZXR1cm4gPD5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjOTBjZGY0XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyXCIgY29udGVudD1cIiM5MGNkZjRcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmEmZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cbiAgICA8L0hlYWQ+XG4gICAgPE5hdmJhciAvPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+XG4gICAgICA8ZGl2IGlkPVwiZW1haWxcIiBjbGFzc05hbWU9XCJ0b29sdGlwXCIgb25Nb3VzZUVudGVyPXsoKT0+c2V0VFR2aXModHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCk9PnNldFRUdmlzKGZhbHNlKX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvb2x0aXB0ZXh0JHtUVHZpcyA/ICcgdG9vbHRpcC12aXNpYmxlJyA6ICcnfWB9PmNvcHkgdG8gY2xpcGJvYXJkPC9zcGFuPlxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPjxwYXRoIGQ9XCJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDRsLTggNS04LTVWNmw4IDUgOC01djJ6XCIgLz48L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3R3cHJpZGUvdGFuZ3JhbSc+XG4gICAgICAgIDxzdmcgaWQ9J2dpdGh1YicgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgd2lkdGg9XCIyNFwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAxMi4wMzk2ODMsLTEuOTEwMTI4OWUtNCBDIDUuMzc3NzI1NSwtMS45MTAxMjg5ZS00IDAsNS4zNzc0MTEzIDAsMTIuMDM5MjE4IGMgMCw1LjI5NzMzOSAzLjQ1MTM3Niw5Ljc5MjA1MiA4LjI2NzI0OSwxMS4zOTczMDYgMC42NDIxMTcsMC4wODAyNyAwLjgwMjY0NiwtMC4yNDA3ODcgMC44MDI2NDYsLTAuNTYxODM5IHYgLTIuMDg2ODMgQyA1LjY5ODc4MywyMS41MTAyMTkgNC45NzY0MDI1LDE5LjE4MjYgNC45NzY0MDI1LDE5LjE4MjYgNC40MTQ1NTA4LDE3LjgxODEzNCAzLjYxMTkwNDcsMTcuNDE2ODIgMy42MTE5MDQ3LDE3LjQxNjgyIGMgLTEuMTIzNzAzNCwtMC43MjIzNjUgMC4wODAyNjgsLTAuNzIyMzY1IDAuMDgwMjY4LC0wLjcyMjM2NSAxLjIwMzk2OTEsMC4wODAyNyAxLjg0NjA4NTIsMS4yMDM5NDIgMS44NDYwODUyLDEuMjAzOTQyIEMgNi41ODE2OTcsMTkuNzQ0NDQgOC4zNDc1MTgsMTkuMTgyNiA5LjA2OTg5OCwxOC44NjE1NSA5LjE1MDE2OCwxOC4wNTg5MjIgOS40NzEyMjEsMTcuNTc3MzQ1IDkuODcyNTQ0LDE3LjI1NjI5NSA3LjIyMzgxMzEsMTYuOTM1MjQ0IDQuNDE0NTU0NCwxNS44OTE4MjggNC40MTQ1NTQ0LDExLjMxNjg1MyBjIDAsLTEuMjg0MjAzIDAuNDgxNTg3NCwtMi40MDc4ODE5IDEuMjAzOTY3OCwtMy4yMTA1MDk5IEMgNS40NTc5OTM1LDcuNzg1MjkyOSA1LjA1NjY3MDUsNi41ODEzNTIgNS42OTg3OTAyLDQuODk1ODM0OCBjIDAsMCAxLjA0MzQzOTEsLTAuMzIxMDUwOCAzLjI5MDg0NjgsMS4yMDM5NDA5IDAuOTYzMTc1LC0wLjI0MDc4ODIgMi4wMDY2MTQsLTAuNDAxMzEzNyAzLjA1MDA1MywtMC40MDEzMTM3IDEuMDQzNDQsMCAyLjA4Njg3OSwwLjE2MDUyNTUgMy4wNTAwNTMsMC40MDEzMTM3IDIuMzI3NjczLC0xLjUyNDk5MTcgMy4yOTA4NDgsLTEuMjAzOTQwOSAzLjI5MDg0OCwtMS4yMDM5NDA5IDAuNjQyMTE2LDEuNjg1NTE3MiAwLjI0MDc5MywyLjg4OTQ1ODEgMC4wODAyNywzLjIxMDUwODMgMC44MDI2NDUsMC44MDI2MjggMS4yMDM5NjgsMS45MjYzMDY5IDEuMjAzOTY4LDMuMjEwNTA5OSAwLDQuNjU1MjM5IC0yLjgwOTI1OSw1LjYxODM5MSAtNS40NTc5OSw1LjkzOTQ0MiAwLjQwMTMyMywwLjQwMTMxMyAwLjgwMjY0NiwxLjEyMzY3OCAwLjgwMjY0NiwyLjI0NzM1NyB2IDMuMjkwNzcgYyAwLDAuMzIxMDUxIDAuMjQwNzkzLDAuNzIyMzY1IDAuODAyNjQ2LDAuNTYxODQgNC44MTU4NzIsLTEuNjA1MjU1IDguMTg2OTg0LC02LjA5OTk2NyA4LjE4Njk4NCwtMTEuMzk3MzA3IEMgMjQuMDc5Mzg1LDUuMzc3NDExMyAxOC43MDE2NTQsLTEuOTEwMTI4OWUtNCAxMi4wMzk2OTYsLTEuOTEwMTI4OWUtNCBaXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2E+XG4gICAgICA8YSBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaG93YXJkLWh3YW5nLWIzMDAwMzM1Jz5cbiAgICAgICAgPHN2ZyBpZD0nbGlua2VkaW4nIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIHdpZHRoPVwiMjRcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk0gMjAuNDQ5MTM2LDIwLjQ0OTc5MyBIIDE2Ljg5MzA4OCBWIDE0Ljg4MDk2IGMgMCwtMS4zMjc5NCAtMC4wMjM3MSwtMy4wMzc0MDkgLTEuODQ5NTE3LC0zLjAzNzQwOSAtMS44NTIxMDksMCAtMi4xMzU0ODIsMS40NDY4NDQgLTIuMTM1NDgyLDIuOTQwNzMxIHYgNS42NjUxNDEgSCA5LjM1MjA0IFYgOC45OTc2NDU2IGggMy40MTM4MDcgdiAxLjU2NTAwNjQgaCAwLjA0Nzc4IGMgMC42OTYwOTUsLTEuMTkwMTYyNCAxLjk5MDM5NywtMS45MDEwMDA0IDMuMzY4MjQ3LC0xLjg0OTg1NjQgMy42MDQyMDMsMCA0LjI2ODc0LDIuMzcwNjYxNCA0LjI2ODc0LDUuNDU0NzQ0NCB6IE0gNS4zMzk2MzA1LDcuNDMyMjY4NCBDIDMuNTAxMDEzNyw3LjQzMjU5ODQgMi41ODAxNjUyLDUuMjA5OTkzMiAzLjg3OTg3MjUsMy45MDk4NDEyIDUuMTc5NTgwMiwyLjYwOTY4NjggNy40MDI1NSwzLjUyOTcyMzIgNy40MDI4OCw1LjM2ODMxMDQgNy40MDMwODQ1LDYuNTA3OTk4NCA2LjQ3OTMzNjIsNy40MzIwNjMyIDUuMzM5NjMwNSw3LjQzMjI2ODQgTSA3LjExNzY1NTMsMjAuNDQ5NzkzIEggMy41NTc5MDE2IFYgOC45OTc2NDU2IEggNy4xMTc2NTUzIFogTSAyMi4yMjE5NzYsMC4wMDI4MzY4IEggMS43NzA5ODY4IEMgMC44MDQ0MzA4LC0wLjAwODA3MjQgMC4wMTE3OTYyLDAuNzY2MTQ5NiAwLDEuNzMyNjc4OCBWIDIyLjI2ODE2NCBjIDAuMDExMzg4LDAuOTY2OTk2IDAuODAzOTYzLDEuNzQxOTgyIDEuNzcwOTg2OCwxLjczMTY5NSBIIDIyLjIyMTk3NiBDIDIzLjE5MDkxMiwyNC4wMTIwMDMgMjMuOTg2NTg2LDIzLjIzNzA2OSAyNCwyMi4yNjgxNjQgViAxLjczMTE5NjggQyAyMy45ODYxODgsMC43NjI3NTg0IDIzLjE5MDQ0NCwtMC4wMTE0MTggMjIuMjIxOTc2LDAuMDAxMzU0OFwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8Lz5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ })

})