webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/howard/Documents/twpride.github.io/components/footer.js\",\n    _s = $RefreshSig$();\n\n\nfunction Footer() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      TTvis = _useState[0],\n      setTTvis = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      copied = _useState2[0],\n      setCopied = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    function copyTextToClipboard(text) {\n      var textArea = document.createElement(\"textarea\");\n      textArea.value = text;\n      document.body.appendChild(textArea);\n      textArea.select();\n\n      try {\n        var successful = document.execCommand('copy');\n        var msg = successful ? 'successful' : 'unsuccessful';\n        console.log('Copying text command was ' + msg);\n      } catch (err) {\n        console.log('Oops, unable to copy');\n      }\n\n      document.body.removeChild(textArea);\n      setTTvis(false);\n      setCopied(true);\n      setInterval(function () {\n        setCopied(false);\n      }, 2000);\n    }\n\n    document.getElementById(\"email\").addEventListener(\"click\", function () {\n      return copyTextToClipboard('howard.L.hwang@gmail.com');\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"footer\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        id: \"email\",\n        className: \"tooltip\",\n        onMouseEnter: function onMouseEnter() {\n          return setTTvis(true);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return setTTvis(false);\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"tooltiptext\".concat(copied ? ' tooltip-visible' : ''),\n          children: \"email copied to clipboard\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"tooltiptext\".concat(TTvis ? ' tooltip-visible' : ''),\n          children: \"copy email to clipboard\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          viewBox: \"0 0 24 24\",\n          width: \"24px\",\n          height: \"24px\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M0 0h24v24H0z\",\n            fill: \"none\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://github.com/twpride\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          id: \"github\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          height: \"24\",\n          viewBox: \"0 0 24 24\",\n          width: \"24\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M0 0h24v24H0z\",\n            fill: \"none\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M 12.039683,-1.9101289e-4 C 5.3777255,-1.9101289e-4 0,5.3774113 0,12.039218 c 0,5.297339 3.451376,9.792052 8.267249,11.397306 0.642117,0.08027 0.802646,-0.240787 0.802646,-0.561839 v -2.08683 C 5.698783,21.510219 4.9764025,19.1826 4.9764025,19.1826 4.4145508,17.818134 3.6119047,17.41682 3.6119047,17.41682 c -1.1237034,-0.722365 0.080268,-0.722365 0.080268,-0.722365 1.2039691,0.08027 1.8460852,1.203942 1.8460852,1.203942 C 6.581697,19.74444 8.347518,19.1826 9.069898,18.86155 9.150168,18.058922 9.471221,17.577345 9.872544,17.256295 7.2238131,16.935244 4.4145544,15.891828 4.4145544,11.316853 c 0,-1.284203 0.4815874,-2.4078819 1.2039678,-3.2105099 C 5.4579935,7.7852929 5.0566705,6.581352 5.6987902,4.8958348 c 0,0 1.0434391,-0.3210508 3.2908468,1.2039409 0.963175,-0.2407882 2.006614,-0.4013137 3.050053,-0.4013137 1.04344,0 2.086879,0.1605255 3.050053,0.4013137 2.327673,-1.5249917 3.290848,-1.2039409 3.290848,-1.2039409 0.642116,1.6855172 0.240793,2.8894581 0.08027,3.2105083 0.802645,0.802628 1.203968,1.9263069 1.203968,3.2105099 0,4.655239 -2.809259,5.618391 -5.45799,5.939442 0.401323,0.401313 0.802646,1.123678 0.802646,2.247357 v 3.29077 c 0,0.321051 0.240793,0.722365 0.802646,0.56184 4.815872,-1.605255 8.186984,-6.099967 8.186984,-11.397307 C 24.079385,5.3774113 18.701654,-1.9101289e-4 12.039696,-1.9101289e-4 Z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://www.linkedin.com/in/howard-hwang-b3000335\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          id: \"linkedin\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          height: \"24\",\n          viewBox: \"0 0 24 24\",\n          width: \"24\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M0 0h24v24H0z\",\n            fill: \"none\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M 20.449136,20.449793 H 16.893088 V 14.88096 c 0,-1.32794 -0.02371,-3.037409 -1.849517,-3.037409 -1.852109,0 -2.135482,1.446844 -2.135482,2.940731 v 5.665141 H 9.35204 V 8.9976456 h 3.413807 v 1.5650064 h 0.04778 c 0.696095,-1.1901624 1.990397,-1.9010004 3.368247,-1.8498564 3.604203,0 4.26874,2.3706614 4.26874,5.4547444 z M 5.3396305,7.4322684 C 3.5010137,7.4325984 2.5801652,5.2099932 3.8798725,3.9098412 5.1795802,2.6096868 7.40255,3.5297232 7.40288,5.3683104 7.4030845,6.5079984 6.4793362,7.4320632 5.3396305,7.4322684 M 7.1176553,20.449793 H 3.5579016 V 8.9976456 H 7.1176553 Z M 22.221976,0.0028368 H 1.7709868 C 0.8044308,-0.0080724 0.0117962,0.7661496 0,1.7326788 V 22.268164 c 0.011388,0.966996 0.803963,1.741982 1.7709868,1.731695 H 22.221976 C 23.190912,24.012003 23.986586,23.237069 24,22.268164 V 1.7311968 C 23.986188,0.7627584 23.190444,-0.011418 22.221976,0.0013548\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [\"statically generated with Next.js \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://github.com/twpride/twpride.github.io\",\n        children: \"source\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 44\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Footer, \"a8EhwEuc+5kdQU8yJcR36eLKPC4=\");\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIuanM/Njg4MyJdLCJuYW1lcyI6WyJGb290ZXIiLCJ1c2VTdGF0ZSIsIlRUdmlzIiwic2V0VFR2aXMiLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJ1c2VFZmZlY3QiLCJjb3B5VGV4dFRvQ2xpcGJvYXJkIiwidGV4dCIsInRleHRBcmVhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJzdWNjZXNzZnVsIiwiZXhlY0NvbW1hbmQiLCJtc2ciLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicmVtb3ZlQ2hpbGQiLCJzZXRJbnRlcnZhbCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUNlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUV4QkMsS0FGd0I7QUFBQSxNQUVqQkMsUUFGaUI7O0FBQUEsbUJBR0hGLHNEQUFRLENBQUMsS0FBRCxDQUhMO0FBQUEsTUFHeEJHLE1BSHdCO0FBQUEsTUFHaEJDLFNBSGdCOztBQUsvQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBU0MsbUJBQVQsQ0FBNkJDLElBQTdCLEVBQW1DO0FBQ2pDLFVBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWY7QUFDQUYsY0FBUSxDQUFDRyxLQUFULEdBQWlCSixJQUFqQjtBQUNBRSxjQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsUUFBMUI7QUFDQUEsY0FBUSxDQUFDTSxNQUFUOztBQUNBLFVBQUk7QUFDRixZQUFJQyxVQUFVLEdBQUdOLFFBQVEsQ0FBQ08sV0FBVCxDQUFxQixNQUFyQixDQUFqQjtBQUNBLFlBQUlDLEdBQUcsR0FBR0YsVUFBVSxHQUFHLFlBQUgsR0FBa0Is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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZUEwQkw7QUFBQSxvRUFBdUM7QUFBRyxZQUFJLEVBQUMsOENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBNEJEOztHQXpEdUJGLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuXG4gIGNvbnN0IFtUVHZpcywgc2V0VFR2aXNdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNvcHlUZXh0VG9DbGlwYm9hcmQodGV4dCkge1xuICAgICAgdmFyIHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgdGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgdmFyIG1zZyA9IHN1Y2Nlc3NmdWwgPyAnc3VjY2Vzc2Z1bCcgOiAndW5zdWNjZXNzZnVsJztcbiAgICAgICAgY29uc29sZS5sb2coJ0NvcHlpbmcgdGV4dCBjb21tYW5kIHdhcyAnICsgbXNnKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnT29wcywgdW5hYmxlIHRvIGNvcHknKTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xuICAgICAgc2V0VFR2aXMoZmFsc2UpXG4gICAgICBzZXRDb3BpZWQodHJ1ZSlcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0Q29waWVkKGZhbHNlKVxuICAgICAgfSwgMjAwMCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29weVRleHRUb0NsaXBib2FyZCgnaG93YXJkLkwuaHdhbmdAZ21haWwuY29tJykpO1xuICB9LCBbXSlcblxuICByZXR1cm4gPGRpdiBpZD1cImZvb3RlclwiPlxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGlkPVwiZW1haWxcIiBjbGFzc05hbWU9XCJ0b29sdGlwXCIgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRUVHZpcyh0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRUVHZpcyhmYWxzZSl9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sdGlwdGV4dCR7Y29waWVkID8gJyB0b29sdGlwLXZpc2libGUnIDogJyd9YH0+ZW1haWwgY29waWVkIHRvIGNsaXBib2FyZDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbHRpcHRleHQke1RUdmlzID8gJyB0b29sdGlwLXZpc2libGUnIDogJyd9YH0+Y29weSBlbWFpbCB0byBjbGlwYm9hcmQ8L3NwYW4+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0yMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgNGwtOCA1LTgtNVY2bDggNSA4LTV2MnpcIiAvPjwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vdHdwcmlkZSc+XG4gICAgICAgIDxzdmcgaWQ9J2dpdGh1YicgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgd2lkdGg9XCIyNFwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAxMi4wMzk2ODMsLTEuOTEwMTI4OWUtNCBDIDUuMzc3NzI1NSwtMS45MTAxMjg5ZS00IDAsNS4zNzc0MTEzIDAsMTIuMDM5MjE4IGMgMCw1LjI5NzMzOSAzLjQ1MTM3Niw5Ljc5MjA1MiA4LjI2NzI0OSwxMS4zOTczMDYgMC42NDIxMTcsMC4wODAyNyAwLjgwMjY0NiwtMC4yNDA3ODcgMC44MDI2NDYsLTAuNTYxODM5IHYgLTIuMDg2ODMgQyA1LjY5ODc4MywyMS41MTAyMTkgNC45NzY0MDI1LDE5LjE4MjYgNC45NzY0MDI1LDE5LjE4MjYgNC40MTQ1NTA4LDE3LjgxODEzNCAzLjYxMTkwNDcsMTcuNDE2ODIgMy42MTE5MDQ3LDE3LjQxNjgyIGMgLTEuMTIzNzAzNCwtMC43MjIzNjUgMC4wODAyNjgsLTAuNzIyMzY1IDAuMDgwMjY4LC0wLjcyMjM2NSAxLjIwMzk2OTEsMC4wODAyNyAxLjg0NjA4NTIsMS4yMDM5NDIgMS44NDYwODUyLDEuMjAzOTQyIEMgNi41ODE2OTcsMTkuNzQ0NDQgOC4zNDc1MTgsMTkuMTgyNiA5LjA2OTg5OCwxOC44NjE1NSA5LjE1MDE2OCwxOC4wNTg5MjIgOS40NzEyMjEsMTcuNTc3MzQ1IDkuODcyNTQ0LDE3LjI1NjI5NSA3LjIyMzgxMzEsMTYuOTM1MjQ0IDQuNDE0NTU0NCwxNS44OTE4MjggNC40MTQ1NTQ0LDExLjMxNjg1MyBjIDAsLTEuMjg0MjAzIDAuNDgxNTg3NCwtMi40MDc4ODE5IDEuMjAzOTY3OCwtMy4yMTA1MDk5IEMgNS40NTc5OTM1LDcuNzg1MjkyOSA1LjA1NjY3MDUsNi41ODEzNTIgNS42OTg3OTAyLDQuODk1ODM0OCBjIDAsMCAxLjA0MzQzOTEsLTAuMzIxMDUwOCAzLjI5MDg0NjgsMS4yMDM5NDA5IDAuOTYzMTc1LC0wLjI0MDc4ODIgMi4wMDY2MTQsLTAuNDAxMzEzNyAzLjA1MDA1MywtMC40MDEzMTM3IDEuMDQzNDQsMCAyLjA4Njg3OSwwLjE2MDUyNTUgMy4wNTAwNTMsMC40MDEzMTM3IDIuMzI3NjczLC0xLjUyNDk5MTcgMy4yOTA4NDgsLTEuMjAzOTQwOSAzLjI5MDg0OCwtMS4yMDM5NDA5IDAuNjQyMTE2LDEuNjg1NTE3MiAwLjI0MDc5MywyLjg4OTQ1ODEgMC4wODAyNywzLjIxMDUwODMgMC44MDI2NDUsMC44MDI2MjggMS4yMDM5NjgsMS45MjYzMDY5IDEuMjAzOTY4LDMuMjEwNTA5OSAwLDQuNjU1MjM5IC0yLjgwOTI1OSw1LjYxODM5MSAtNS40NTc5OSw1LjkzOTQ0MiAwLjQwMTMyMywwLjQwMTMxMyAwLjgwMjY0NiwxLjEyMzY3OCAwLjgwMjY0NiwyLjI0NzM1NyB2IDMuMjkwNzcgYyAwLDAuMzIxMDUxIDAuMjQwNzkzLDAuNzIyMzY1IDAuODAyNjQ2LDAuNTYxODQgNC44MTU4NzIsLTEuNjA1MjU1IDguMTg2OTg0LC02LjA5OTk2NyA4LjE4Njk4NCwtMTEuMzk3MzA3IEMgMjQuMDc5Mzg1LDUuMzc3NDExMyAxOC43MDE2NTQsLTEuOTEwMTI4OWUtNCAxMi4wMzk2OTYsLTEuOTEwMTI4OWUtNCBaXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2E+XG4gICAgICA8YSBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaG93YXJkLWh3YW5nLWIzMDAwMzM1Jz5cbiAgICAgICAgPHN2ZyBpZD0nbGlua2VkaW4nIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIHdpZHRoPVwiMjRcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk0gMjAuNDQ5MTM2LDIwLjQ0OTc5MyBIIDE2Ljg5MzA4OCBWIDE0Ljg4MDk2IGMgMCwtMS4zMjc5NCAtMC4wMjM3MSwtMy4wMzc0MDkgLTEuODQ5NTE3LC0zLjAzNzQwOSAtMS44NTIxMDksMCAtMi4xMzU0ODIsMS40NDY4NDQgLTIuMTM1NDgyLDIuOTQwNzMxIHYgNS42NjUxNDEgSCA5LjM1MjA0IFYgOC45OTc2NDU2IGggMy40MTM4MDcgdiAxLjU2NTAwNjQgaCAwLjA0Nzc4IGMgMC42OTYwOTUsLTEuMTkwMTYyNCAxLjk5MDM5NywtMS45MDEwMDA0IDMuMzY4MjQ3LC0xLjg0OTg1NjQgMy42MDQyMDMsMCA0LjI2ODc0LDIuMzcwNjYxNCA0LjI2ODc0LDUuNDU0NzQ0NCB6IE0gNS4zMzk2MzA1LDcuNDMyMjY4NCBDIDMuNTAxMDEzNyw3LjQzMjU5ODQgMi41ODAxNjUyLDUuMjA5OTkzMiAzLjg3OTg3MjUsMy45MDk4NDEyIDUuMTc5NTgwMiwyLjYwOTY4NjggNy40MDI1NSwzLjUyOTcyMzIgNy40MDI4OCw1LjM2ODMxMDQgNy40MDMwODQ1LDYuNTA3OTk4NCA2LjQ3OTMzNjIsNy40MzIwNjMyIDUuMzM5NjMwNSw3LjQzMjI2ODQgTSA3LjExNzY1NTMsMjAuNDQ5NzkzIEggMy41NTc5MDE2IFYgOC45OTc2NDU2IEggNy4xMTc2NTUzIFogTSAyMi4yMjE5NzYsMC4wMDI4MzY4IEggMS43NzA5ODY4IEMgMC44MDQ0MzA4LC0wLjAwODA3MjQgMC4wMTE3OTYyLDAuNzY2MTQ5NiAwLDEuNzMyNjc4OCBWIDIyLjI2ODE2NCBjIDAuMDExMzg4LDAuOTY2OTk2IDAuODAzOTYzLDEuNzQxOTgyIDEuNzcwOTg2OCwxLjczMTY5NSBIIDIyLjIyMTk3NiBDIDIzLjE5MDkxMiwyNC4wMTIwMDMgMjMuOTg2NTg2LDIzLjIzNzA2OSAyNCwyMi4yNjgxNjQgViAxLjczMTE5NjggQyAyMy45ODYxODgsMC43NjI3NTg0IDIzLjE5MDQ0NCwtMC4wMTE0MTggMjIuMjIxOTc2LDAuMDAxMzU0OFwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+c3RhdGljYWxseSBnZW5lcmF0ZWQgd2l0aCBOZXh0LmpzIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS90d3ByaWRlL3R3cHJpZGUuZ2l0aHViLmlvJz5zb3VyY2U8L2E+PC9kaXY+XG4gIDwvZGl2PlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/footer.js\n");

/***/ })

})