webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./style.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n  color: #514045;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n  --gutter: 20px;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\n\\nh2 {\\n  font-weight: 500;\\n}\\n\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n}\\na:hover {\\n  text-decoration: underline;\\n}\\n\\np > code,\\nli > code {\\n  padding: 0.2em 0.4em;\\n  font-size: 85%;\\n  color: #c7254e;\\n  background-color: #ffeef3;\\n  border-radius: 6px;\\n}\\n\\nul {\\n  padding-left: 1rem;\\n}\\nul ul {\\n  margin-left: 0rem;\\n}\\n\\n::marker {\\n  margin-right: 0px;\\n}\\n\\np,\\nul,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  margin-left: 0.7rem;\\n  margin-right: 0.7rem;\\n}\\n\\n.remark-highlight {\\n  font-size: 0.85em;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: 700px;\\n    font-size: 1rem;\\n  }\\n}\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n    --gutter: 10px;\\n  }\\n}\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n  }\\n  .nav.nav-hide {\\n    top: -60px;\\n  }\\n}\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n}\\n.nav > div {\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: min(100%, var(--card-width));\\n  margin-left: 0.7rem;\\n  margin-right: 0.7rem;\\n}\\n.nav #home-link {\\n  display: flex;\\n  align-items: center;\\n  font-size: 1.5em;\\n}\\n.nav #home-link img {\\n  height: 30px;\\n  margin-right: 10px;\\n}\\n.nav .right-nav-holder {\\n  display: flex;\\n}\\n\\n.center-card {\\n  width: min(100%, var(--card-width));\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.post {\\n  line-height: 1.5;\\n}\\n.post a {\\n  border-bottom: 1px dashed var(--accent-color);\\n}\\n.post a:hover {\\n  text-decoration: none;\\n  border-bottom: 1.5px solid var(--accent-color);\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((min(100%,var(--card-width)) - var(--gutter)) * 3 / 8);\\n  margin-top: 20px;\\n  margin-bottom: 40px;\\n}\\n.preview img {\\n  width: 50%;\\n  background-color: lightcyan;\\n  height: 100%;\\n  object-fit: scale-down;\\n  cursor: pointer;\\n}\\n.preview > div {\\n  margin-left: var(--gutter);\\n  width: 50%;\\n  border-bottom: 1px solid lightgrey;\\n}\\n.preview div.title {\\n  font-size: 1.5em;\\n  font-weight: 500;\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 120px;\\n  width: 100%;\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n}\\n#footer > div:first-of-type {\\n  position: absolute;\\n  top: 40px;\\n  width: 150px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n#footer > div:first-of-type > * {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#footer svg {\\n  fill: var(--accent-color);\\n}\\n#footer > div:last-of-type {\\n  position: absolute;\\n  font-size: 0.7rem;\\n  bottom: 30px;\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n}\\n.tooltip .tooltiptext {\\n  display: none;\\n  font-size: 12px;\\n  width: 80px;\\n  background-color: black;\\n  color: #fff;\\n  text-align: center;\\n  border-radius: 6px;\\n  padding: 5px 0;\\n  position: absolute;\\n  z-index: 1;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-left: -40px;\\n}\\n.tooltip .tooltiptext::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: black transparent transparent transparent;\\n}\\n.tooltip .tooltip-visible {\\n  display: block;\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.double img:first-of-type {\\n  width: 100%;\\n  margin-right: 10px;\\n}\\n.double figure {\\n  margin: 10px;\\n}\\n\\niframe {\\n  width: min(100%, var(--card-width));\\n  height: calc(var(--card-width)/2);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://style.scss\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n  color: #514045;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n  --gutter: 20px;\\n}\\n\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\nh2 {\\n  font-weight: 500;\\n}\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n  &:hover {\\n    text-decoration: underline;\\n  }\\n}\\n\\np,\\nli {\\n  > code {\\n    padding: 0.2em 0.4em;\\n    font-size: 85%;\\n    color: #c7254e;\\n    background-color: #ffeef3;\\n    border-radius: 6px;\\n  }\\n}\\n\\nul {\\n  padding-left: 1rem;\\n  ul {\\n    margin-left: 0rem;\\n  }\\n}\\n\\n::marker {\\n  margin-right: 0px;\\n}\\n\\np,\\nul,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  margin-left: 0.7rem;\\n  margin-right: 0.7rem;\\n}\\n\\n.remark-highlight {\\n  font-size: 0.85em;\\n}\\n\\n\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: 700px;\\n    font-size: 1rem;\\n  }\\n}\\n\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n    --gutter: 10px;\\n  }\\n}\\n\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n    &.nav-hide {\\n      top: -60px;\\n    }\\n  }\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  // box-shadow: 0 1px 6px 0 rgba(32, 3, 36, 0.28);\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n  > div {\\n    height: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: min(100%,var(--card-width));\\n    margin-left: 0.7rem;\\n    margin-right: 0.7rem;\\n  }\\n\\n  #home-link {\\n    img {\\n      height: 30px;\\n      margin-right: 10px;\\n    }\\n    display: flex;\\n    align-items: center;\\n    font-size: 1.5em;\\n  }\\n\\n  .right-nav-holder {\\n    display: flex;\\n  }\\n}\\n\\n.center-card {\\n  width: min(100%,var(--card-width));\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.post {\\n  line-height: 1.5;\\n  a {\\n    border-bottom: 1px dashed var(--accent-color);\\n    &:hover {\\n      text-decoration: none;\\n      border-bottom: 1.5px solid var(--accent-color);\\n    }\\n  }\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((min(100%,var(--card-width)) - var(--gutter)) * 3 / 8);\\n\\n  img {\\n    width: 50%;\\n    background-color: lightcyan;\\n    height: 100%;\\n    object-fit: scale-down;\\n    cursor: pointer;\\n  }\\n  margin-top: 20px;\\n  margin-bottom: 40px;\\n\\n  > div {\\n    margin-left: var(--gutter);\\n    width: 50%;\\n    // border-bottom: 1px dashed var(--accent-color);\\n    border-bottom: 1px solid lightgrey;\\n  }\\n\\n  div.title {\\n    font-size: 1.5em;\\n    font-weight: 500;\\n  }\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 120px;\\n  width: 100%;\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n\\n  > div:first-of-type {\\n    position: absolute;\\n    top: 40px;\\n    width: 150px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n    > * {\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n    }\\n  }\\n  svg {\\n    fill: var(--accent-color);\\n  }\\n\\n  > div:last-of-type {\\n    position: absolute;\\n    font-size: 0.7rem;\\n    bottom: 30px;\\n  }\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n  .tooltiptext {\\n    display: none;\\n    font-size: 12px;\\n    width: 80px;\\n    background-color: black;\\n    color: #fff;\\n    text-align: center;\\n    border-radius: 6px;\\n    padding: 5px 0;\\n    position: absolute;\\n    z-index: 1;\\n    bottom: 120%;\\n    left: 50%;\\n    margin-left: -40px;\\n  }\\n  .tooltiptext::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 100%;\\n    left: 50%;\\n    margin-left: -5px;\\n    border-width: 5px;\\n    border-style: solid;\\n    border-color: black transparent transparent transparent;\\n  }\\n  .tooltip-visible {\\n    display: block;\\n  }\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  img:first-of-type {\\n    width: 100%;\\n    margin-right: 10px;\\n  }\\n\\n  figure {\\n    margin: 10px;\\n  }\\n}\\n\\niframe {\\n  width: min(100%,var(--card-width));\\n  height: calc(var(--card-width)/2);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUuc2Nzcz85MDEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhGO0FBQzlGLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxnQkFBZ0IsZUFBZSxjQUFjLHdDQUF3QyxpQkFBaUIsbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLEdBQUcsV0FBVyx3QkFBd0Isc0JBQXNCLG1CQUFtQixHQUFHLE9BQU8sMkJBQTJCLDRCQUE0QixHQUFHLFFBQVEscUJBQXFCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLE9BQU8sK0JBQStCLDBCQUEwQixpQ0FBaUMsR0FBRyxXQUFXLCtCQUErQixHQUFHLDBCQUEwQix5QkFBeUIsbUJBQW1CLG1CQUFtQiw4QkFBOEIsdUJBQXVCLEdBQUcsUUFBUSx1QkFBdUIsR0FBRyxTQUFTLHNCQUFzQixHQUFHLGNBQWMsc0JBQXNCLEdBQUcsMENBQTBDLHdCQUF3Qix5QkFBeUIsR0FBRyx1QkFBdUIsc0JBQXNCLEdBQUcsK0JBQStCLFdBQVcsMEJBQTBCLHNCQUFzQixLQUFLLEdBQUcsNkJBQTZCLFdBQVcsd0JBQXdCLHFCQUFxQixLQUFLLEdBQUcseUJBQXlCLGdCQUFnQix3QkFBd0IsS0FBSyxZQUFZLHNCQUFzQixlQUFlLDJCQUEyQixLQUFLLG1CQUFtQixpQkFBaUIsS0FBSyxHQUFHLFFBQVEsa0JBQWtCLHdCQUF3QixrQ0FBa0MsNEJBQTRCLHVDQUF1QyxnQkFBZ0IsaUJBQWlCLGlDQUFpQyxHQUFHLGNBQWMsaUJBQWlCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLHdDQUF3Qyx3QkFBd0IseUJBQXlCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IscUJBQXFCLEdBQUcsdUJBQXVCLGlCQUFpQix1QkFBdUIsR0FBRywwQkFBMEIsa0JBQWtCLEdBQUcsa0JBQWtCLHdDQUF3QyxzQkFBc0IsdUJBQXVCLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxXQUFXLGtEQUFrRCxHQUFHLGlCQUFpQiwwQkFBMEIsbURBQW1ELEdBQUcsY0FBYyxrQkFBa0Isd0VBQXdFLHFCQUFxQix3QkFBd0IsR0FBRyxnQkFBZ0IsZUFBZSxnQ0FBZ0MsaUJBQWlCLDJCQUEyQixvQkFBb0IsR0FBRyxrQkFBa0IsK0JBQStCLGVBQWUsdUNBQXVDLEdBQUcsc0JBQXNCLHFCQUFxQixxQkFBcUIsR0FBRyxhQUFhLHFCQUFxQixrQkFBa0IsZ0JBQWdCLG9DQUFvQyxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLEdBQUcsK0JBQStCLHVCQUF1QixjQUFjLGlCQUFpQixrQkFBa0Isd0JBQXdCLGtDQUFrQyxHQUFHLG1DQUFtQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGVBQWUsOEJBQThCLEdBQUcsOEJBQThCLHVCQUF1QixzQkFBc0IsaUJBQWlCLEdBQUcsY0FBYyx1QkFBdUIsMEJBQTBCLG9CQUFvQixHQUFHLHlCQUF5QixrQkFBa0Isb0JBQW9CLGdCQUFnQiw0QkFBNEIsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsbUJBQW1CLHVCQUF1QixlQUFlLGlCQUFpQixjQUFjLHVCQUF1QixHQUFHLGdDQUFnQyxrQkFBa0IsdUJBQXVCLGNBQWMsY0FBYyxzQkFBc0Isc0JBQXNCLHdCQUF3Qiw0REFBNEQsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsYUFBYSxnQkFBZ0Isc0JBQXNCLHVCQUF1QixrQkFBa0IsbUNBQW1DLEdBQUcsNkJBQTZCLGdCQUFnQix1QkFBdUIsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcsWUFBWSx3Q0FBd0Msc0NBQXNDLEdBQUcsT0FBTyw0RUFBNEUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxzQ0FBc0MsZUFBZSxjQUFjLHdDQUF3QyxpQkFBaUIsbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLEdBQUcsV0FBVyx3QkFBd0Isc0JBQXNCLG1CQUFtQixHQUFHLFNBQVMsMkJBQTJCLDRCQUE0QixHQUFHLFFBQVEscUJBQXFCLEdBQUcsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLHFCQUFxQixHQUFHLE9BQU8sK0JBQStCLDBCQUEwQixpQ0FBaUMsYUFBYSxpQ0FBaUMsS0FBSyxHQUFHLFlBQVksWUFBWSwyQkFBMkIscUJBQXFCLHFCQUFxQixnQ0FBZ0MseUJBQXlCLEtBQUssR0FBRyxRQUFRLHVCQUF1QixRQUFRLHdCQUF3QixLQUFLLEdBQUcsY0FBYyxzQkFBc0IsR0FBRywwQ0FBMEMsd0JBQXdCLHlCQUF5QixHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyxtQ0FBbUMsV0FBVywwQkFBMEIsc0JBQXNCLEtBQUssR0FBRywrQkFBK0IsV0FBVyx3QkFBd0IscUJBQXFCLEtBQUssR0FBRywyQkFBMkIsZ0JBQWdCLHdCQUF3QixLQUFLLFVBQVUsc0JBQXNCLGVBQWUsMkJBQTJCLGtCQUFrQixtQkFBbUIsT0FBTyxLQUFLLEdBQUcsVUFBVSxrQkFBa0Isd0JBQXdCLGtDQUFrQyw0QkFBNEIscURBQXFELHVDQUF1QyxnQkFBZ0IsaUJBQWlCLGlDQUFpQyxXQUFXLG1CQUFtQixvQkFBb0IscUNBQXFDLDBCQUEwQix5Q0FBeUMsMEJBQTBCLDJCQUEyQixLQUFLLGtCQUFrQixXQUFXLHFCQUFxQiwyQkFBMkIsT0FBTyxvQkFBb0IsMEJBQTBCLHVCQUF1QixLQUFLLHlCQUF5QixvQkFBb0IsS0FBSyxHQUFHLGtCQUFrQix1Q0FBdUMsc0JBQXNCLHVCQUF1QixHQUFHLFdBQVcscUJBQXFCLE9BQU8sb0RBQW9ELGVBQWUsOEJBQThCLHVEQUF1RCxPQUFPLEtBQUssR0FBRyxjQUFjLGtCQUFrQix3RUFBd0UsV0FBVyxpQkFBaUIsa0NBQWtDLG1CQUFtQiw2QkFBNkIsc0JBQXNCLEtBQUsscUJBQXFCLHdCQUF3QixhQUFhLGlDQUFpQyxpQkFBaUIsdURBQXVELHlDQUF5QyxLQUFLLGlCQUFpQix1QkFBdUIsdUJBQXVCLEtBQUssR0FBRyxhQUFhLHFCQUFxQixrQkFBa0IsZ0JBQWdCLG9DQUFvQyxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLDJCQUEyQix5QkFBeUIsZ0JBQWdCLG1CQUFtQixvQkFBb0IsMEJBQTBCLG9DQUFvQyxXQUFXLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLE9BQU8sS0FBSyxTQUFTLGdDQUFnQyxLQUFLLDBCQUEwQix5QkFBeUIsd0JBQXdCLG1CQUFtQixLQUFLLEdBQUcsY0FBYyx1QkFBdUIsMEJBQTBCLG9CQUFvQixrQkFBa0Isb0JBQW9CLHNCQUFzQixrQkFBa0IsOEJBQThCLGtCQUFrQix5QkFBeUIseUJBQXlCLHFCQUFxQix5QkFBeUIsaUJBQWlCLG1CQUFtQixnQkFBZ0IseUJBQXlCLEtBQUsseUJBQXlCLG9CQUFvQix5QkFBeUIsZ0JBQWdCLGdCQUFnQix3QkFBd0Isd0JBQXdCLDBCQUEwQiw4REFBOEQsS0FBSyxzQkFBc0IscUJBQXFCLEtBQUssR0FBRyxhQUFhLGdCQUFnQixzQkFBc0IsdUJBQXVCLGtCQUFrQixtQ0FBbUMsdUJBQXVCLGtCQUFrQix5QkFBeUIsS0FBSyxjQUFjLG1CQUFtQixLQUFLLEdBQUcsWUFBWSx1Q0FBdUMsc0NBQXNDLEdBQUcscUJBQXFCO0FBQzkyVjtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiAjNTE0MDQ1O1xcbn1cXG5cXG5kaXYjX19uZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jYXJkLXdpZHRoOiA4MDBweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgLS1ndXR0ZXI6IDIwcHg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC0tYWNjZW50LWNvbG9yOiAjN2UwMDAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxufVxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbnAgPiBjb2RlLFxcbmxpID4gY29kZSB7XFxuICBwYWRkaW5nOiAwLjJlbSAwLjRlbTtcXG4gIGZvbnQtc2l6ZTogODUlO1xcbiAgY29sb3I6ICNjNzI1NGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZWYzO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG51bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcbnVsIHVsIHtcXG4gIG1hcmdpbi1sZWZ0OiAwcmVtO1xcbn1cXG5cXG46Om1hcmtlciB7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuXFxucCxcXG51bCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBtYXJnaW4tbGVmdDogMC43cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XFxufVxcblxcbi5yZW1hcmstaGlnaGxpZ2h0IHtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgLS1jYXJkLXdpZHRoOiA3MDBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIC0tZ3V0dGVyOiAxMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgZGl2I19fbmV4dCB7XFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgfVxcblxcbiAgLm5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xcbiAgfVxcbiAgLm5hdi5uYXYtaGlkZSB7XFxuICAgIHRvcDogLTYwcHg7XFxuICB9XFxufVxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogbGlnaHRncmV5IDFweCBzb2xpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxufVxcbi5uYXYgPiBkaXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogbWluKDEwMCUsIHZhcigtLWNhcmQtd2lkdGgpKTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjdyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcXG59XFxuLm5hdiAjaG9tZS1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLm5hdiAjaG9tZS1saW5rIGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5uYXYgLnJpZ2h0LW5hdi1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNlbnRlci1jYXJkIHtcXG4gIHdpZHRoOiBtaW4oMTAwJSwgdmFyKC0tY2FyZC13aWR0aCkpO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5wb3N0IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi5wb3N0IGEge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG4ucG9zdCBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGNhbGMoKG1pbigxMDAlLHZhcigtLWNhcmQtd2lkdGgpKSAtIHZhcigtLWd1dHRlcikpICogMyAvIDgpO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi5wcmV2aWV3IGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByZXZpZXcgPiBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWd1dHRlcik7XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuLnByZXZpZXcgZGl2LnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wOiAxcHggbGlnaHRncmV5IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNmb290ZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4jZm9vdGVyID4gZGl2OmZpcnN0LW9mLXR5cGUgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNmb290ZXIgc3ZnIHtcXG4gIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcbiNmb290ZXIgPiBkaXY6bGFzdC1vZi10eXBlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm90dG9tOiAxMjAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xcbn1cXG4udG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG4udG9vbHRpcCAudG9vbHRpcC12aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZG91YmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZG91YmxlIGltZzpmaXJzdC1vZi10eXBlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uZG91YmxlIGZpZ3VyZSB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmlmcmFtZSB7XFxuICB3aWR0aDogbWluKDEwMCUsIHZhcigtLWNhcmQtd2lkdGgpKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXdpZHRoKS8yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLDBCQUFBO0VBQ0Es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O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICM1MTQwNDU7XFxufVxcblxcbmRpdiNfX25leHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtd2lkdGg6IDgwMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICAtLWd1dHRlcjogMjBweDtcXG59XFxuXFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLS1hY2NlbnQtY29sb3I6ICM3ZTAwMDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG4gICY6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG59XFxuXFxucCxcXG5saSB7XFxuICA+IGNvZGUge1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjRlbTtcXG4gICAgZm9udC1zaXplOiA4NSU7XFxuICAgIGNvbG9yOiAjYzcyNTRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZWYzO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB9XFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XFxuICB9XFxufVxcblxcbjo6bWFya2VyIHtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG5cXG5wLFxcbnVsLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjdyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcXG59XFxuXFxuLnJlbWFyay1oaWdobGlnaHQge1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxufVxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtd2lkdGg6IDcwMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgLS1ndXR0ZXI6IDEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICBkaXYjX19uZXh0IHtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICB9XFxuICAubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XFxuICAgICYubmF2LWhpZGUge1xcbiAgICAgIHRvcDogLTYwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAvLyBib3gtc2hhZG93OiAwIDFweCA2cHggMCByZ2JhKDMyLCAzLCAzNiwgMC4yOCk7XFxuICBib3JkZXItYm90dG9tOiBsaWdodGdyZXkgMXB4IHNvbGlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG4gID4gZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBtaW4oMTAwJSx2YXIoLS1jYXJkLXdpZHRoKSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjdyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xcbiAgfVxcblxcbiAgI2hvbWUtbGluayB7XFxuICAgIGltZyB7XFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgfVxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcblxcbiAgLnJpZ2h0LW5hdi1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbn1cXG5cXG4uY2VudGVyLWNhcmQge1xcbiAgd2lkdGg6IG1pbigxMDAlLHZhcigtLWNhcmQtd2lkdGgpKTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucG9zdCB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgYSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnByZXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygobWluKDEwMCUsdmFyKC0tY2FyZC13aWR0aCkpIC0gdmFyKC0tZ3V0dGVyKSkgKiAzIC8gOCk7XFxuXFxuICBpbWcge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuXFxuICA+IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1ndXR0ZXIpO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICB9XFxuXFxuICBkaXYudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgfVxcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wOiAxcHggbGlnaHRncmV5IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgID4gKiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICB9XFxuICBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgfVxcblxcbiAgPiBkaXY6bGFzdC1vZi10eXBlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgfVxcbn1cXG5cXG4udG9vbHRpcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAudG9vbHRpcHRleHQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3R0b206IDEyMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xcbiAgfVxcbiAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICB9XFxuICAudG9vbHRpcC12aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi5kb3VibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBpbWc6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuXFxuICBmaWd1cmUge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICB9XFxufVxcblxcbmlmcmFtZSB7XFxuICB3aWR0aDogbWluKDEwMCUsdmFyKC0tY2FyZC13aWR0aCkpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNhcmQtd2lkdGgpLzIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss\n");

/***/ })

})