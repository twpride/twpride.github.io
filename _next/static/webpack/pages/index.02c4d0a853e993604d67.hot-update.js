webpackHotUpdate_N_E("pages/index",{

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/howard/Documents/twpride.github.io/components/footer.js\",\n    _s = $RefreshSig$();\n\n\nfunction Footer() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      TTvis = _useState[0],\n      setTTvis = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      copied = _useState2[0],\n      setCopied = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    function copyTextToClipboard(text) {\n      var textArea = document.createElement(\"textarea\");\n      textArea.value = text;\n      document.body.appendChild(textArea);\n      textArea.select();\n\n      try {\n        var successful = document.execCommand('copy');\n        var msg = successful ? 'successful' : 'unsuccessful';\n        console.log('Copying text command was ' + msg);\n      } catch (err) {\n        console.log('Oops, unable to copy');\n      }\n\n      document.body.removeChild(textArea);\n      setTTvis(false);\n      setCopied(true);\n      setInterval(function () {\n        setCopied(false);\n      }, 2000);\n    }\n\n    document.getElementById(\"email\").addEventListener(\"click\", function () {\n      return copyTextToClipboard('howard.L.hwang@gmail.com');\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"footer\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        id: \"email\",\n        className: \"tooltip\",\n        onMouseEnter: function onMouseEnter() {\n          return setTTvis(true);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return setTTvis(false);\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"tooltiptext\".concat(copied ? ' tooltip-visible' : ''),\n          children: \"email copied to clipboard\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"tooltiptext\".concat(TTvis ? ' tooltip-visible' : ''),\n          children: \"copy email to clipboard\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          viewBox: \"0 0 24 24\",\n          width: \"24px\",\n          height: \"24px\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M0 0h24v24H0z\",\n            fill: \"none\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://github.com/twpride/twpride.github.io\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          id: \"github\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          height: \"24\",\n          viewBox: \"0 0 24 24\",\n          width: \"24\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M0 0h24v24H0z\",\n            fill: \"none\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M 12.039683,-1.9101289e-4 C 5.3777255,-1.9101289e-4 0,5.3774113 0,12.039218 c 0,5.297339 3.451376,9.792052 8.267249,11.397306 0.642117,0.08027 0.802646,-0.240787 0.802646,-0.561839 v -2.08683 C 5.698783,21.510219 4.9764025,19.1826 4.9764025,19.1826 4.4145508,17.818134 3.6119047,17.41682 3.6119047,17.41682 c -1.1237034,-0.722365 0.080268,-0.722365 0.080268,-0.722365 1.2039691,0.08027 1.8460852,1.203942 1.8460852,1.203942 C 6.581697,19.74444 8.347518,19.1826 9.069898,18.86155 9.150168,18.058922 9.471221,17.577345 9.872544,17.256295 7.2238131,16.935244 4.4145544,15.891828 4.4145544,11.316853 c 0,-1.284203 0.4815874,-2.4078819 1.2039678,-3.2105099 C 5.4579935,7.7852929 5.0566705,6.581352 5.6987902,4.8958348 c 0,0 1.0434391,-0.3210508 3.2908468,1.2039409 0.963175,-0.2407882 2.006614,-0.4013137 3.050053,-0.4013137 1.04344,0 2.086879,0.1605255 3.050053,0.4013137 2.327673,-1.5249917 3.290848,-1.2039409 3.290848,-1.2039409 0.642116,1.6855172 0.240793,2.8894581 0.08027,3.2105083 0.802645,0.802628 1.203968,1.9263069 1.203968,3.2105099 0,4.655239 -2.809259,5.618391 -5.45799,5.939442 0.401323,0.401313 0.802646,1.123678 0.802646,2.247357 v 3.29077 c 0,0.321051 0.240793,0.722365 0.802646,0.56184 4.815872,-1.605255 8.186984,-6.099967 8.186984,-11.397307 C 24.079385,5.3774113 18.701654,-1.9101289e-4 12.039696,-1.9101289e-4 Z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://www.linkedin.com/in/howard-hwang-b3000335\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          id: \"linkedin\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          height: \"24\",\n          viewBox: \"0 0 24 24\",\n          width: \"24\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M0 0h24v24H0z\",\n            fill: \"none\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M 20.449136,20.449793 H 16.893088 V 14.88096 c 0,-1.32794 -0.02371,-3.037409 -1.849517,-3.037409 -1.852109,0 -2.135482,1.446844 -2.135482,2.940731 v 5.665141 H 9.35204 V 8.9976456 h 3.413807 v 1.5650064 h 0.04778 c 0.696095,-1.1901624 1.990397,-1.9010004 3.368247,-1.8498564 3.604203,0 4.26874,2.3706614 4.26874,5.4547444 z M 5.3396305,7.4322684 C 3.5010137,7.4325984 2.5801652,5.2099932 3.8798725,3.9098412 5.1795802,2.6096868 7.40255,3.5297232 7.40288,5.3683104 7.4030845,6.5079984 6.4793362,7.4320632 5.3396305,7.4322684 M 7.1176553,20.449793 H 3.5579016 V 8.9976456 H 7.1176553 Z M 22.221976,0.0028368 H 1.7709868 C 0.8044308,-0.0080724 0.0117962,0.7661496 0,1.7326788 V 22.268164 c 0.011388,0.966996 0.803963,1.741982 1.7709868,1.731695 H 22.221976 C 23.190912,24.012003 23.986586,23.237069 24,22.268164 V 1.7311968 C 23.986188,0.7627584 23.190444,-0.011418 22.221976,0.0013548\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Built using React and Next.JS source\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Footer, \"a8EhwEuc+5kdQU8yJcR36eLKPC4=\");\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIuanM/Njg4MyJdLCJuYW1lcyI6WyJGb290ZXIiLCJ1c2VTdGF0ZSIsIlRUdmlzIiwic2V0VFR2aXMiLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJ1c2VFZmZlY3QiLCJjb3B5VGV4dFRvQ2xpcGJvYXJkIiwidGV4dCIsInRleHRBcmVhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJzdWNjZXNzZnVsIiwiZXhlY0NvbW1hbmQiLCJtc2ciLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicmVtb3ZlQ2hpbGQiLCJzZXRJbnRlcnZhbCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUNlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUV4QkMsS0FGd0I7QUFBQSxNQUVqQkMsUUFGaUI7O0FBQUEsbUJBR0hGLHNEQUFRLENBQUMsS0FBRCxDQUhMO0FBQUEsTUFHeEJHLE1BSHdCO0FBQUEsTUFHaEJDLFNBSGdCOztBQUsvQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBU0MsbUJBQVQsQ0FBNkJDLElBQTdCLEVBQW1DO0FBQ2pDLFVBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWY7QUFDQUYsY0FBUSxDQUFDRyxLQUFULEdBQWlCSixJQUFqQjtBQUNBRSxjQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsUUFBMUI7QUFDQUEsY0FBUSxDQUFDTSxNQUFUOztBQUNBLFVBQUk7QUFDRixZQUFJQyxVQUFVLEdBQUdOLFFBQVEsQ0FBQ08sV0FBVCxDQUFxQixNQUFyQixDQUFqQjtBQUNBLFlBQUlDLEdBQUcsR0FBR0YsVUFBVSxHQUFHLFlBQUgsR0FBa0Is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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZUEwQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUE0QkQ7O0dBekR1QkYsTTs7S0FBQUEsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG5cbiAgY29uc3QgW1RUdmlzLCBzZXRUVHZpc10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY29weVRleHRUb0NsaXBib2FyZCh0ZXh0KSB7XG4gICAgICB2YXIgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICB0ZXh0QXJlYS52YWx1ZSA9IHRleHQ7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgICAgIHRleHRBcmVhLnNlbGVjdCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICB2YXIgbXNnID0gc3VjY2Vzc2Z1bCA/ICdzdWNjZXNzZnVsJyA6ICd1bnN1Y2Nlc3NmdWwnO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29weWluZyB0ZXh0IGNvbW1hbmQgd2FzICcgKyBtc2cpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPb3BzLCB1bmFibGUgdG8gY29weScpO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0QXJlYSk7XG4gICAgICBzZXRUVHZpcyhmYWxzZSlcbiAgICAgIHNldENvcGllZCh0cnVlKVxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRDb3BpZWQoZmFsc2UpXG4gICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb3B5VGV4dFRvQ2xpcGJvYXJkKCdob3dhcmQuTC5od2FuZ0BnbWFpbC5jb20nKSk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiA8ZGl2IGlkPVwiZm9vdGVyXCI+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInRvb2x0aXBcIiBvbk1vdXNlRW50ZXI9eygpID0+IHNldFRUdmlzKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldFRUdmlzKGZhbHNlKX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvb2x0aXB0ZXh0JHtjb3BpZWQgPyAnIHRvb2x0aXAtdmlzaWJsZScgOiAnJ31gfT5lbWFpbCBjb3BpZWQgdG8gY2xpcGJvYXJkPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sdGlwdGV4dCR7VFR2aXMgPyAnIHRvb2x0aXAtdmlzaWJsZScgOiAnJ31gfT5jb3B5IGVtYWlsIHRvIGNsaXBib2FyZDwvc3Bhbj5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTIwIDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCA0bC04IDUtOC01VjZsOCA1IDgtNXYyelwiIC8+PC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS90d3ByaWRlL3R3cHJpZGUuZ2l0aHViLmlvJz5cbiAgICAgICAgPHN2ZyBpZD0nZ2l0aHViJyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICB3aWR0aD1cIjI0XCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNIDEyLjAzOTY4MywtMS45MTAxMjg5ZS00IEMgNS4zNzc3MjU1LC0xLjkxMDEyODllLTQgMCw1LjM3NzQxMTMgMCwxMi4wMzkyMTggYyAwLDUuMjk3MzM5IDMuNDUxMzc2LDkuNzkyMDUyIDguMjY3MjQ5LDExLjM5NzMwNiAwLjY0MjExNywwLjA4MDI3IDAuODAyNjQ2LC0wLjI0MDc4NyAwLjgwMjY0NiwtMC41NjE4MzkgdiAtMi4wODY4MyBDIDUuNjk4NzgzLDIxLjUxMDIxOSA0Ljk3NjQwMjUsMTkuMTgyNiA0Ljk3NjQwMjUsMTkuMTgyNiA0LjQxNDU1MDgsMTcuODE4MTM0IDMuNjExOTA0NywxNy40MTY4MiAzLjYxMTkwNDcsMTcuNDE2ODIgYyAtMS4xMjM3MDM0LC0wLjcyMjM2NSAwLjA4MDI2OCwtMC43MjIzNjUgMC4wODAyNjgsLTAuNzIyMzY1IDEuMjAzOTY5MSwwLjA4MDI3IDEuODQ2MDg1MiwxLjIwMzk0MiAxLjg0NjA4NTIsMS4yMDM5NDIgQyA2LjU4MTY5NywxOS43NDQ0NCA4LjM0NzUxOCwxOS4xODI2IDkuMDY5ODk4LDE4Ljg2MTU1IDkuMTUwMTY4LDE4LjA1ODkyMiA5LjQ3MTIyMSwxNy41NzczNDUgOS44NzI1NDQsMTcuMjU2Mjk1IDcuMjIzODEzMSwxNi45MzUyNDQgNC40MTQ1NTQ0LDE1Ljg5MTgyOCA0LjQxNDU1NDQsMTEuMzE2ODUzIGMgMCwtMS4yODQyMDMgMC40ODE1ODc0LC0yLjQwNzg4MTkgMS4yMDM5Njc4LC0zLjIxMDUwOTkgQyA1LjQ1Nzk5MzUsNy43ODUyOTI5IDUuMDU2NjcwNSw2LjU4MTM1MiA1LjY5ODc5MDIsNC44OTU4MzQ4IGMgMCwwIDEuMDQzNDM5MSwtMC4zMjEwNTA4IDMuMjkwODQ2OCwxLjIwMzk0MDkgMC45NjMxNzUsLTAuMjQwNzg4MiAyLjAwNjYxNCwtMC40MDEzMTM3IDMuMDUwMDUzLC0wLjQwMTMxMzcgMS4wNDM0NCwwIDIuMDg2ODc5LDAuMTYwNTI1NSAzLjA1MDA1MywwLjQwMTMxMzcgMi4zMjc2NzMsLTEuNTI0OTkxNyAzLjI5MDg0OCwtMS4yMDM5NDA5IDMuMjkwODQ4LC0xLjIwMzk0MDkgMC42NDIxMTYsMS42ODU1MTcyIDAuMjQwNzkzLDIuODg5NDU4MSAwLjA4MDI3LDMuMjEwNTA4MyAwLjgwMjY0NSwwLjgwMjYyOCAxLjIwMzk2OCwxLjkyNjMwNjkgMS4yMDM5NjgsMy4yMTA1MDk5IDAsNC42NTUyMzkgLTIuODA5MjU5LDUuNjE4MzkxIC01LjQ1Nzk5LDUuOTM5NDQyIDAuNDAxMzIzLDAuNDAxMzEzIDAuODAyNjQ2LDEuMTIzNjc4IDAuODAyNjQ2LDIuMjQ3MzU3IHYgMy4yOTA3NyBjIDAsMC4zMjEwNTEgMC4yNDA3OTMsMC43MjIzNjUgMC44MDI2NDYsMC41NjE4NCA0LjgxNTg3MiwtMS42MDUyNTUgOC4xODY5ODQsLTYuMDk5OTY3IDguMTg2OTg0LC0xMS4zOTczMDcgQyAyNC4wNzkzODUsNS4zNzc0MTEzIDE4LjcwMTY1NCwtMS45MTAxMjg5ZS00IDEyLjAzOTY5NiwtMS45MTAxMjg5ZS00IFpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYT5cbiAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ob3dhcmQtaHdhbmctYjMwMDAzMzUnPlxuICAgICAgICA8c3ZnIGlkPSdsaW5rZWRpbicgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgd2lkdGg9XCIyNFwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAyMC40NDkxMzYsMjAuNDQ5NzkzIEggMTYuODkzMDg4IFYgMTQuODgwOTYgYyAwLC0xLjMyNzk0IC0wLjAyMzcxLC0zLjAzNzQwOSAtMS44NDk1MTcsLTMuMDM3NDA5IC0xLjg1MjEwOSwwIC0yLjEzNTQ4MiwxLjQ0Njg0NCAtMi4xMzU0ODIsMi45NDA3MzEgdiA1LjY2NTE0MSBIIDkuMzUyMDQgViA4Ljk5NzY0NTYgaCAzLjQxMzgwNyB2IDEuNTY1MDA2NCBoIDAuMDQ3NzggYyAwLjY5NjA5NSwtMS4xOTAxNjI0IDEuOTkwMzk3LC0xLjkwMTAwMDQgMy4zNjgyNDcsLTEuODQ5ODU2NCAzLjYwNDIwMywwIDQuMjY4NzQsMi4zNzA2NjE0IDQuMjY4NzQsNS40NTQ3NDQ0IHogTSA1LjMzOTYzMDUsNy40MzIyNjg0IEMgMy41MDEwMTM3LDcuNDMyNTk4NCAyLjU4MDE2NTIsNS4yMDk5OTMyIDMuODc5ODcyNSwzLjkwOTg0MTIgNS4xNzk1ODAyLDIuNjA5Njg2OCA3LjQwMjU1LDMuNTI5NzIzMiA3LjQwMjg4LDUuMzY4MzEwNCA3LjQwMzA4NDUsNi41MDc5OTg0IDYuNDc5MzM2Miw3LjQzMjA2MzIgNS4zMzk2MzA1LDcuNDMyMjY4NCBNIDcuMTE3NjU1MywyMC40NDk3OTMgSCAzLjU1NzkwMTYgViA4Ljk5NzY0NTYgSCA3LjExNzY1NTMgWiBNIDIyLjIyMTk3NiwwLjAwMjgzNjggSCAxLjc3MDk4NjggQyAwLjgwNDQzMDgsLTAuMDA4MDcyNCAwLjAxMTc5NjIsMC43NjYxNDk2IDAsMS43MzI2Nzg4IFYgMjIuMjY4MTY0IGMgMC4wMTEzODgsMC45NjY5OTYgMC44MDM5NjMsMS43NDE5ODIgMS43NzA5ODY4LDEuNzMxNjk1IEggMjIuMjIxOTc2IEMgMjMuMTkwOTEyLDI0LjAxMjAwMyAyMy45ODY1ODYsMjMuMjM3MDY5IDI0LDIyLjI2ODE2NCBWIDEuNzMxMTk2OCBDIDIzLjk4NjE4OCwwLjc2Mjc1ODQgMjMuMTkwNDQ0LC0wLjAxMTQxOCAyMi4yMjE5NzYsMC4wMDEzNTQ4XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5CdWlsdCB1c2luZyBSZWFjdCBhbmQgTmV4dC5KUyBzb3VyY2U8L2Rpdj5cbiAgPC9kaXY+XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/footer.js\n");

/***/ })

})