webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./style.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n  color: #514045;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n  --gutter: 20px;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\n\\nh2 {\\n  font-weight: 500;\\n}\\n\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n}\\na:hover {\\n  text-decoration: underline;\\n}\\n\\np > code,\\nli > code {\\n  padding: 0.2em 0.4em;\\n  font-size: 85%;\\n  color: #c7254e;\\n  background-color: #ffeef3;\\n  border-radius: 6px;\\n}\\n\\nul {\\n  padding-left: 1rem;\\n}\\nul ul {\\n  margin-left: 0rem;\\n}\\n\\n::marker {\\n  margin-right: 0px;\\n}\\n\\np,\\nul,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  margin-left: 0.7rem;\\n  margin-right: 0.7rem;\\n}\\n\\n.remark-highlight {\\n  font-size: 0.85em;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: 700px;\\n    font-size: 1rem;\\n  }\\n}\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n    --gutter: 10px;\\n  }\\n}\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n  }\\n  .nav.nav-hide {\\n    top: -60px;\\n  }\\n}\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n}\\n.nav > div {\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: min(100%, var(--card-width));\\n  margin-left: 0.7rem;\\n  margin-right: 0.7rem;\\n}\\n.nav #home-link {\\n  display: flex;\\n  align-items: center;\\n  font-size: 1.5em;\\n}\\n.nav #home-link img {\\n  height: 30px;\\n  margin-right: 10px;\\n}\\n.nav .right-nav-holder {\\n  display: flex;\\n}\\n.nav .right-nav-holder > div:first-child {\\n  margin-right: 10px;\\n}\\n\\n.center-card {\\n  width: min(100%, var(--card-width));\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.post {\\n  line-height: 1.5;\\n}\\n.post a {\\n  border-bottom: 1px dashed var(--accent-color);\\n}\\n.post a:hover {\\n  text-decoration: none;\\n  border-bottom: 1.5px solid var(--accent-color);\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((min(100%,var(--card-width)) - var(--gutter)) * 3 / 8);\\n  margin-top: 20px;\\n  margin-bottom: 40px;\\n}\\n.preview img {\\n  width: 50%;\\n  background-color: lightcyan;\\n  height: 100%;\\n  object-fit: scale-down;\\n  cursor: pointer;\\n}\\n.preview > div {\\n  margin-left: var(--gutter);\\n  width: 50%;\\n  border-bottom: 1px solid lightgrey;\\n}\\n.preview div.title {\\n  font-size: 1.5em;\\n  font-weight: 500;\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 120px;\\n  width: 100%;\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n}\\n#footer > div:first-of-type {\\n  position: absolute;\\n  top: 40px;\\n  width: 150px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n#footer > div:first-of-type > * {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#footer svg {\\n  fill: var(--accent-color);\\n}\\n#footer > div:last-of-type {\\n  position: absolute;\\n  font-size: 0.7rem;\\n  bottom: 30px;\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n}\\n.tooltip .tooltiptext {\\n  display: none;\\n  font-size: 12px;\\n  width: 80px;\\n  background-color: black;\\n  color: #fff;\\n  text-align: center;\\n  border-radius: 6px;\\n  padding: 5px 0;\\n  position: absolute;\\n  z-index: 1;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-left: -40px;\\n}\\n.tooltip .tooltiptext::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: black transparent transparent transparent;\\n}\\n.tooltip .tooltip-visible {\\n  display: block;\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.double img:first-of-type {\\n  width: 100%;\\n  margin-right: 10px;\\n}\\n.double figure {\\n  margin: 10px;\\n}\\n\\niframe {\\n  width: min(100%, var(--card-width));\\n  height: calc(var(--card-width)/2);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://style.scss\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n  color: #514045;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n  --gutter: 20px;\\n}\\n\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\nh2 {\\n  font-weight: 500;\\n}\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n  &:hover {\\n    text-decoration: underline;\\n  }\\n}\\n\\np,\\nli {\\n  > code {\\n    padding: 0.2em 0.4em;\\n    font-size: 85%;\\n    color: #c7254e;\\n    background-color: #ffeef3;\\n    border-radius: 6px;\\n  }\\n}\\n\\nul {\\n  padding-left: 1rem;\\n  ul {\\n    margin-left: 0rem;\\n  }\\n}\\n\\n::marker {\\n  margin-right: 0px;\\n}\\n\\np,\\nul,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  margin-left: 0.7rem;\\n  margin-right: 0.7rem;\\n}\\n\\n.remark-highlight {\\n  font-size: 0.85em;\\n}\\n\\n\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: 700px;\\n    font-size: 1rem;\\n  }\\n}\\n\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n    --gutter: 10px;\\n  }\\n}\\n\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n    &.nav-hide {\\n      top: -60px;\\n    }\\n  }\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  // box-shadow: 0 1px 6px 0 rgba(32, 3, 36, 0.28);\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n  > div {\\n    height: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: min(100%,var(--card-width));\\n    margin-left: 0.7rem;\\n    margin-right: 0.7rem;\\n  }\\n\\n  #home-link {\\n    img {\\n      height: 30px;\\n      margin-right: 10px;\\n    }\\n    display: flex;\\n    align-items: center;\\n    font-size: 1.5em;\\n  }\\n\\n  .right-nav-holder {\\n    display: flex;\\n    >div:first-child {\\n      margin-right: 10px;\\n    }\\n  }\\n}\\n\\n.center-card {\\n  width: min(100%,var(--card-width));\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.post {\\n  line-height: 1.5;\\n  a {\\n    border-bottom: 1px dashed var(--accent-color);\\n    &:hover {\\n      text-decoration: none;\\n      border-bottom: 1.5px solid var(--accent-color);\\n    }\\n  }\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((min(100%,var(--card-width)) - var(--gutter)) * 3 / 8);\\n\\n  img {\\n    width: 50%;\\n    background-color: lightcyan;\\n    height: 100%;\\n    object-fit: scale-down;\\n    cursor: pointer;\\n  }\\n  margin-top: 20px;\\n  margin-bottom: 40px;\\n\\n  > div {\\n    margin-left: var(--gutter);\\n    width: 50%;\\n    // border-bottom: 1px dashed var(--accent-color);\\n    border-bottom: 1px solid lightgrey;\\n  }\\n\\n  div.title {\\n    font-size: 1.5em;\\n    font-weight: 500;\\n  }\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 120px;\\n  width: 100%;\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n\\n  > div:first-of-type {\\n    position: absolute;\\n    top: 40px;\\n    width: 150px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n    > * {\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n    }\\n  }\\n  svg {\\n    fill: var(--accent-color);\\n  }\\n\\n  > div:last-of-type {\\n    position: absolute;\\n    font-size: 0.7rem;\\n    bottom: 30px;\\n  }\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n  .tooltiptext {\\n    display: none;\\n    font-size: 12px;\\n    width: 80px;\\n    background-color: black;\\n    color: #fff;\\n    text-align: center;\\n    border-radius: 6px;\\n    padding: 5px 0;\\n    position: absolute;\\n    z-index: 1;\\n    bottom: 120%;\\n    left: 50%;\\n    margin-left: -40px;\\n  }\\n  .tooltiptext::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 100%;\\n    left: 50%;\\n    margin-left: -5px;\\n    border-width: 5px;\\n    border-style: solid;\\n    border-color: black transparent transparent transparent;\\n  }\\n  .tooltip-visible {\\n    display: block;\\n  }\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  img:first-of-type {\\n    width: 100%;\\n    margin-right: 10px;\\n  }\\n\\n  figure {\\n    margin: 10px;\\n  }\\n}\\n\\niframe {\\n  width: min(100%,var(--card-width));\\n  height: calc(var(--card-width)/2);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUuc2Nzcz85MDEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhGO0FBQzlGLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxnQkFBZ0IsZUFBZSxjQUFjLHdDQUF3QyxpQkFBaUIsbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLEdBQUcsV0FBVyx3QkFBd0Isc0JBQXNCLG1CQUFtQixHQUFHLE9BQU8sMkJBQTJCLDRCQUE0QixHQUFHLFFBQVEscUJBQXFCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLE9BQU8sK0JBQStCLDBCQUEwQixpQ0FBaUMsR0FBRyxXQUFXLCtCQUErQixHQUFHLDBCQUEwQix5QkFBeUIsbUJBQW1CLG1CQUFtQiw4QkFBOEIsdUJBQXVCLEdBQUcsUUFBUSx1QkFBdUIsR0FBRyxTQUFTLHNCQUFzQixHQUFHLGNBQWMsc0JBQXNCLEdBQUcsMENBQTBDLHdCQUF3Qix5QkFBeUIsR0FBRyx1QkFBdUIsc0JBQXNCLEdBQUcsK0JBQStCLFdBQVcsMEJBQTBCLHNCQUFzQixLQUFLLEdBQUcsNkJBQTZCLFdBQVcsd0JBQXdCLHFCQUFxQixLQUFLLEdBQUcseUJBQXlCLGdCQUFnQix3QkFBd0IsS0FBSyxZQUFZLHNCQUFzQixlQUFlLDJCQUEyQixLQUFLLG1CQUFtQixpQkFBaUIsS0FBSyxHQUFHLFFBQVEsa0JBQWtCLHdCQUF3QixrQ0FBa0MsNEJBQTRCLHVDQUF1QyxnQkFBZ0IsaUJBQWlCLGlDQUFpQyxHQUFHLGNBQWMsaUJBQWlCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLHdDQUF3Qyx3QkFBd0IseUJBQXlCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IscUJBQXFCLEdBQUcsdUJBQXVCLGlCQUFpQix1QkFBdUIsR0FBRywwQkFBMEIsa0JBQWtCLEdBQUcsNENBQTRDLHVCQUF1QixHQUFHLGtCQUFrQix3Q0FBd0Msc0JBQXNCLHVCQUF1QixHQUFHLFdBQVcscUJBQXFCLEdBQUcsV0FBVyxrREFBa0QsR0FBRyxpQkFBaUIsMEJBQTBCLG1EQUFtRCxHQUFHLGNBQWMsa0JBQWtCLHdFQUF3RSxxQkFBcUIsd0JBQXdCLEdBQUcsZ0JBQWdCLGVBQWUsZ0NBQWdDLGlCQUFpQiwyQkFBMkIsb0JBQW9CLEdBQUcsa0JBQWtCLCtCQUErQixlQUFlLHVDQUF1QyxHQUFHLHNCQUFzQixxQkFBcUIscUJBQXFCLEdBQUcsYUFBYSxxQkFBcUIsa0JBQWtCLGdCQUFnQixvQ0FBb0Msa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLHVCQUF1QixHQUFHLCtCQUErQix1QkFBdUIsY0FBYyxpQkFBaUIsa0JBQWtCLHdCQUF3QixrQ0FBa0MsR0FBRyxtQ0FBbUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxlQUFlLDhCQUE4QixHQUFHLDhCQUE4Qix1QkFBdUIsc0JBQXNCLGlCQUFpQixHQUFHLGNBQWMsdUJBQXVCLDBCQUEwQixvQkFBb0IsR0FBRyx5QkFBeUIsa0JBQWtCLG9CQUFvQixnQkFBZ0IsNEJBQTRCLGdCQUFnQix1QkFBdUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsZUFBZSxpQkFBaUIsY0FBYyx1QkFBdUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLHVCQUF1QixjQUFjLGNBQWMsc0JBQXNCLHNCQUFzQix3QkFBd0IsNERBQTRELEdBQUcsNkJBQTZCLG1CQUFtQixHQUFHLGFBQWEsZ0JBQWdCLHNCQUFzQix1QkFBdUIsa0JBQWtCLG1DQUFtQyxHQUFHLDZCQUE2QixnQkFBZ0IsdUJBQXVCLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLFlBQVksd0NBQXdDLHNDQUFzQyxHQUFHLE9BQU8sNEVBQTRFLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVB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L25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICM1MTQwNDU7XFxufVxcblxcbmRpdiNfX25leHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtd2lkdGg6IDgwMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICAtLWd1dHRlcjogMjBweDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLS1hY2NlbnQtY29sb3I6ICM3ZTAwMDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG59XFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxucCA+IGNvZGUsXFxubGkgPiBjb2RlIHtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuNGVtO1xcbiAgZm9udC1zaXplOiA4NSU7XFxuICBjb2xvcjogI2M3MjU0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVlZjM7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxudWwgdWwge1xcbiAgbWFyZ2luLWxlZnQ6IDByZW07XFxufVxcblxcbjo6bWFya2VyIHtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG5cXG5wLFxcbnVsLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjdyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcXG59XFxuXFxuLnJlbWFyay1oaWdobGlnaHQge1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtd2lkdGg6IDcwMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgLS1ndXR0ZXI6IDEwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICBkaXYjX19uZXh0IHtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XFxuICB9XFxuICAubmF2Lm5hdi1oaWRlIHtcXG4gICAgdG9wOiAtNjBweDtcXG4gIH1cXG59XFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiBsaWdodGdyZXkgMXB4IHNvbGlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG59XFxuLm5hdiA+IGRpdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBtaW4oMTAwJSwgdmFyKC0tY2FyZC13aWR0aCkpO1xcbiAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcXG4gIG1hcmdpbi1yaWdodDogMC43cmVtO1xcbn1cXG4ubmF2ICNob21lLWxpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG4ubmF2ICNob21lLWxpbmsgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLm5hdiAucmlnaHQtbmF2LWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2IC5yaWdodC1uYXYtaG9sZGVyID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmNlbnRlci1jYXJkIHtcXG4gIHdpZHRoOiBtaW4oMTAwJSwgdmFyKC0tY2FyZC13aWR0aCkpO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5wb3N0IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi5wb3N0IGEge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG4ucG9zdCBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGNhbGMoKG1pbigxMDAlLHZhcigtLWNhcmQtd2lkdGgpKSAtIHZhcigtLWd1dHRlcikpICogMyAvIDgpO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi5wcmV2aWV3IGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByZXZpZXcgPiBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWd1dHRlcik7XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuLnByZXZpZXcgZGl2LnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wOiAxcHggbGlnaHRncmV5IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNmb290ZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4jZm9vdGVyID4gZGl2OmZpcnN0LW9mLXR5cGUgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNmb290ZXIgc3ZnIHtcXG4gIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcbiNmb290ZXIgPiBkaXY6bGFzdC1vZi10eXBlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm90dG9tOiAxMjAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xcbn1cXG4udG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG4udG9vbHRpcCAudG9vbHRpcC12aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZG91YmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZG91YmxlIGltZzpmaXJzdC1vZi10eXBlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uZG91YmxlIGZpZ3VyZSB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmlmcmFtZSB7XFxuICB3aWR0aDogbWluKDEwMCUsIHZhcigtLWNhcmQtd2lkdGgpKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXdpZHRoKS8yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7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QUNFLFdBQUE7RUFDQSxrQkFBQTtBQVpKO0FBZUU7RUFDRSxZQUFBO0FBYko7O0FBaUJBO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtBQWRGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICM1MTQwNDU7XFxufVxcblxcbmRpdiNfX25leHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtd2lkdGg6IDgwMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICAtLWd1dHRlcjogMjBweDtcXG59XFxuXFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLS1hY2NlbnQtY29sb3I6ICM3ZTAwMDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG4gICY6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG59XFxuXFxucCxcXG5saSB7XFxuICA+IGNvZGUge1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjRlbTtcXG4gICAgZm9udC1zaXplOiA4NSU7XFxuICAgIGNvbG9yOiAjYzcyNTRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZWYzO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB9XFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XFxuICB9XFxufVxcblxcbjo6bWFya2VyIHtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG5cXG5wLFxcbnVsLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjdyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcXG59XFxuXFxuLnJlbWFyay1oaWdobGlnaHQge1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxufVxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtd2lkdGg6IDcwMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgLS1ndXR0ZXI6IDEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICBkaXYjX19uZXh0IHtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICB9XFxuICAubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XFxuICAgICYubmF2LWhpZGUge1xcbiAgICAgIHRvcDogLTYwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAvLyBib3gtc2hhZG93OiAwIDFweCA2cHggMCByZ2JhKDMyLCAzLCAzNiwgMC4yOCk7XFxuICBib3JkZXItYm90dG9tOiBsaWdodGdyZXkgMXB4IHNvbGlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG4gID4gZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBtaW4oMTAwJSx2YXIoLS1jYXJkLXdpZHRoKSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjdyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xcbiAgfVxcblxcbiAgI2hvbWUtbGluayB7XFxuICAgIGltZyB7XFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgfVxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcblxcbiAgLnJpZ2h0LW5hdi1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICA+ZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmNlbnRlci1jYXJkIHtcXG4gIHdpZHRoOiBtaW4oMTAwJSx2YXIoLS1jYXJkLXdpZHRoKSk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnBvc3Qge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGEge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGNhbGMoKG1pbigxMDAlLHZhcigtLWNhcmQtd2lkdGgpKSAtIHZhcigtLWd1dHRlcikpICogMyAvIDgpO1xcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcblxcbiAgPiBkaXYge1xcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tZ3V0dGVyKTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgfVxcblxcbiAgZGl2LnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIH1cXG59XFxuXFxuI2Zvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMXB4IGxpZ2h0Z3JleSBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICA+ICoge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgfVxcbiAgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIH1cXG5cXG4gID4gZGl2Omxhc3Qtb2YtdHlwZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGJvdHRvbTogMzBweDtcXG4gIH1cXG59XFxuXFxuLnRvb2x0aXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLnRvb2x0aXB0ZXh0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm90dG9tOiAxMjAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcXG4gIH1cXG4gIC50b29sdGlwdGV4dDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgLnRvb2x0aXAtdmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4uZG91YmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaW1nOmZpcnN0LW9mLXR5cGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgZmlndXJlIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG5pZnJhbWUge1xcbiAgd2lkdGg6IG1pbigxMDAlLHZhcigtLWNhcmQtd2lkdGgpKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jYXJkLXdpZHRoKS8yKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss\n");

/***/ })

})