webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./style.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  min-height: 100%;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\n\\nh2 {\\n  font-weight: 500;\\n}\\n\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n}\\na:hover {\\n  text-decoration: underline;\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n  }\\n}\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n  }\\n  .nav.nav-hide {\\n    top: -60px;\\n  }\\n}\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n}\\n.nav > div {\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: var(--card-width);\\n  margin-left: 10px;\\n  margin-right: 10px;\\n}\\n.nav #home-link {\\n  display: flex;\\n  align-items: center;\\n  font-size: 1.5em;\\n}\\n.nav #home-link img {\\n  height: 30px;\\n  margin-right: 10px;\\n}\\n\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - 20px) * 3 / 8);\\n  margin-top: 40px;\\n  margin-bottom: 40px;\\n}\\n.preview img {\\n  width: 50%;\\n  background-color: lightcyan;\\n  height: 100%;\\n  object-fit: scale-down;\\n}\\n.preview > div {\\n  margin-left: 20px;\\n  width: 50%;\\n  border-bottom: 1px dashed grey;\\n}\\n.preview div.blurb {\\n  color: grey;\\n}\\n.preview div.title {\\n  font-size: 1.5em;\\n  font-weight: 500;\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 100px;\\n  width: 100%;\\n  fill: var(--accent-color);\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n#footer > div {\\n  width: 150px;\\n  fill: var(--accent-color);\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n}\\n.tooltip .tooltiptext {\\n  display: none;\\n  font-size: 14px;\\n  width: 120px;\\n  background-color: black;\\n  color: #fff;\\n  text-align: center;\\n  border-radius: 6px;\\n  padding: 5px 0;\\n  position: absolute;\\n  z-index: 1;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-left: -60px;\\n}\\n.tooltip .tooltiptext::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: black transparent transparent transparent;\\n}\\n.tooltip .tooltip-visible {\\n  display: block;\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.double img {\\n  width: 100%;\\n  margin-left: 10px;\\n}\\n.double figure {\\n  margin: 10px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://style.scss\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAA;EACA,SAAA;EACA,iCAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;AACF;;AAEA;EACE,sBAAA;EACA,uBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AACA;EACE,gBAAA;AAEF;;AAAA;EACE,gBAAA;AAGF;;AAAA;EACE,0BAAA;EACA,qBAAA;EACA,0BAAA;AAGF;AAFE;EACE,0BAAA;AAIJ;;AAAA;EACE,mBAAA;EACA,iBAAA;AAGF;;AAAA;EACE;IACE,8BAAA;IACA,eAAA;EAGF;AACF;AAAA;EACE;IACE,iBAAA;EAEF;AACF;AACA;EACE;IACE,iBAAA;EACF;;EACA;IACE,eAAA;IACA,QAAA;IACA,oBAAA;EAEF;EADE;IACE,UAAA;EAGJ;AACF;AACA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,uBAAA;EAEA,kCAAA;EACA,WAAA;EACA,YAAA;EACA,0BAAA;AAAF;AACE;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,wBAAA;EACA,iBAAA;EACA,kBAAA;AACJ;AAEE;EAKE,aAAA;EACA,mBAAA;EACA,gBAAA;AAJJ;AAFI;EACE,YAAA;EACA,kBAAA;AAIN;;AAIA;EACE,wBAAA;EACA,iBAAA;EACA,kBAAA;AADF;;AAIA;EACE,aAAA;EACA,gDAAA;EAQA,gBAAA;EACA,mBAAA;AARF;AACE;EACE,UAAA;EACA,2BAAA;EACA,YAAA;EACA,sBAAA;AACJ;AAIE;EACE,iBAAA;EACA,UAAA;EAEA,8BAAA;AAHJ;AAME;EACE,WAAA;AAJJ;AAOE;EACE,gBAAA;EACA,gBAAA;AALJ;;AASA;EAGE,gBAAA;EACA,aAAA;EACA,WAAA;EACA,yBAAA;EACA,+BAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;AARF;AAUE;EACE,YAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;AARJ;;AAYA;EACE,kBAAA;EACA,qBAAA;EACA,eAAA;AATF;AAUE;EACE,aAAA;EACA,eAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;AARJ;AAUE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uDAAA;AARJ;AAUE;EACE,cAAA;AARJ;;AAYA;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;AATF;AAUE;EACE,WAAA;EACA,iBAAA;AARJ;AAWE;EACE,YAAA;AATJ\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  min-height: 100%;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\nh2 {\\n  font-weight: 500;\\n}\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n  &:hover {\\n    text-decoration: underline;\\n  }\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n  }\\n}\\n\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n    &.nav-hide {\\n      top: -60px;\\n    }\\n  }\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  // box-shadow: 0 1px 6px 0 rgba(32, 3, 36, 0.28);\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n  > div {\\n    height: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: var(--card-width);\\n    margin-left: 10px;\\n    margin-right: 10px;\\n  }\\n\\n  #home-link {\\n    img {\\n      height: 30px;\\n      margin-right: 10px;\\n    }\\n    display: flex;\\n    align-items: center;\\n    font-size: 1.5em;\\n  }\\n}\\n\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - 20px) * 3 / 8);\\n\\n  img {\\n    width: 50%;\\n    background-color: lightcyan;\\n    height: 100%;\\n    object-fit: scale-down;\\n  }\\n  margin-top: 40px;\\n  margin-bottom: 40px;\\n\\n  > div {\\n    margin-left: 20px;\\n    width: 50%;\\n    // border-bottom: 1px dotted #7e0000;\\n    border-bottom: 1px dashed grey;\\n  }\\n\\n  div.blurb {\\n    color: grey;\\n  }\\n\\n  div.title {\\n    font-size: 1.5em;\\n    font-weight: 500;\\n  }\\n}\\n\\n#footer {\\n  // position: absolute;\\n  // bottom: 0;\\n  margin-top: auto;\\n  height: 100px;\\n  width: 100%;\\n  fill: var(--accent-color);\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n\\n  > div {\\n    width: 150px;\\n    fill: var(--accent-color);\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n  }\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n  .tooltiptext {\\n    display: none;\\n    font-size: 14px;\\n    width: 120px;\\n    background-color: black;\\n    color: #fff;\\n    text-align: center;\\n    border-radius: 6px;\\n    padding: 5px 0;\\n    position: absolute;\\n    z-index: 1;\\n    bottom: 120%;\\n    left: 50%;\\n    margin-left: -60px;\\n  }\\n  .tooltiptext::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 100%;\\n    left: 50%;\\n    margin-left: -5px;\\n    border-width: 5px;\\n    border-style: solid;\\n    border-color: black transparent transparent transparent;\\n  }\\n  .tooltip-visible {\\n    display: block;\\n  }\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  img {\\n    width: 100%;\\n    margin-left: 10px;\\n  }\\n\\n  figure {\\n    margin: 10px;\\n  }\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUuc2Nzcz85MDEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhGO0FBQzlGLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxnQkFBZ0IsZUFBZSxjQUFjLHdDQUF3QyxpQkFBaUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQixnQ0FBZ0Msd0JBQXdCLHFCQUFxQixHQUFHLE9BQU8sMkJBQTJCLDRCQUE0QixHQUFHLFFBQVEscUJBQXFCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLE9BQU8sK0JBQStCLDBCQUEwQixpQ0FBaUMsR0FBRyxXQUFXLCtCQUErQixHQUFHLFdBQVcsd0JBQXdCLHNCQUFzQixHQUFHLCtCQUErQixXQUFXLHFDQUFxQyxzQkFBc0IsS0FBSyxHQUFHLDZCQUE2QixXQUFXLHdCQUF3QixLQUFLLEdBQUcseUJBQXlCLGdCQUFnQix3QkFBd0IsS0FBSyxZQUFZLHNCQUFzQixlQUFlLDJCQUEyQixLQUFLLG1CQUFtQixpQkFBaUIsS0FBSyxHQUFHLFFBQVEsa0JBQWtCLHdCQUF3QixrQ0FBa0MsNEJBQTRCLHVDQUF1QyxnQkFBZ0IsaUJBQWlCLGlDQUFpQyxHQUFHLGNBQWMsaUJBQWlCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLDZCQUE2QixzQkFBc0IsdUJBQXVCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IscUJBQXFCLEdBQUcsdUJBQXVCLGlCQUFpQix1QkFBdUIsR0FBRyxrQkFBa0IsNkJBQTZCLHNCQUFzQix1QkFBdUIsR0FBRyxjQUFjLGtCQUFrQixxREFBcUQscUJBQXFCLHdCQUF3QixHQUFHLGdCQUFnQixlQUFlLGdDQUFnQyxpQkFBaUIsMkJBQTJCLEdBQUcsa0JBQWtCLHNCQUFzQixlQUFlLG1DQUFtQyxHQUFHLHNCQUFzQixnQkFBZ0IsR0FBRyxzQkFBc0IscUJBQXFCLHFCQUFxQixHQUFHLGFBQWEscUJBQXFCLGtCQUFrQixnQkFBZ0IsOEJBQThCLG9DQUFvQyxrQkFBa0Isd0JBQXdCLGtDQUFrQyxHQUFHLGlCQUFpQixpQkFBaUIsOEJBQThCLGtCQUFrQix3QkFBd0Isa0NBQWtDLEdBQUcsY0FBYyx1QkFBdUIsMEJBQTBCLG9CQUFvQixHQUFHLHlCQUF5QixrQkFBa0Isb0JBQW9CLGlCQUFpQiw0QkFBNEIsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsbUJBQW1CLHVCQUF1QixlQUFlLGlCQUFpQixjQUFjLHVCQUF1QixHQUFHLGdDQUFnQyxrQkFBa0IsdUJBQXVCLGNBQWMsY0FBYyxzQkFBc0Isc0JBQXNCLHdCQUF3Qiw0REFBNEQsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsYUFBYSxnQkFBZ0Isc0JBQXNCLHVCQUF1QixrQkFBa0IsbUNBQW1DLEdBQUcsZUFBZSxnQkFBZ0Isc0JBQXNCLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLE9BQU8sNEVBQTRFLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsc0NBQXNDLGVBQWUsY0FBYyx3Q0FBd0MsaUJBQWlCLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLHdCQUF3QixxQkFBcUIsR0FBRyxPQUFPLDJCQUEyQiw0QkFBNEIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLE1BQU0scUJBQXFCLEdBQUcsTUFBTSxxQkFBcUIsR0FBRyxPQUFPLCtCQUErQiwwQkFBMEIsaUNBQWlDLGFBQWEsaUNBQWlDLEtBQUssR0FBRyxXQUFXLHdCQUF3QixzQkFBc0IsR0FBRywrQkFBK0IsV0FBVyxxQ0FBcUMsc0JBQXNCLEtBQUssR0FBRywrQkFBK0IsV0FBVyx3QkFBd0IsS0FBSyxHQUFHLDJCQUEyQixnQkFBZ0Isd0JBQXdCLEtBQUssVUFBVSxzQkFBc0IsZUFBZSwyQkFBMkIsa0JBQWtCLG1CQUFtQixPQUFPLEtBQUssR0FBRyxVQUFVLGtCQUFrQix3QkFBd0Isa0NBQWtDLDRCQUE0QixxREFBcUQsdUNBQXVDLGdCQUFnQixpQkFBaUIsaUNBQWlDLFdBQVcsbUJBQW1CLG9CQUFvQixxQ0FBcUMsMEJBQTBCLCtCQUErQix3QkFBd0IseUJBQXlCLEtBQUssa0JBQWtCLFdBQVcscUJBQXFCLDJCQUEyQixPQUFPLG9CQUFvQiwwQkFBMEIsdUJBQXVCLEtBQUssR0FBRyxrQkFBa0IsNkJBQTZCLHNCQUFzQix1QkFBdUIsR0FBRyxjQUFjLGtCQUFrQixxREFBcUQsV0FBVyxpQkFBaUIsa0NBQWtDLG1CQUFtQiw2QkFBNkIsS0FBSyxxQkFBcUIsd0JBQXdCLGFBQWEsd0JBQXdCLGlCQUFpQiwyQ0FBMkMscUNBQXFDLEtBQUssaUJBQWlCLGtCQUFrQixLQUFLLGlCQUFpQix1QkFBdUIsdUJBQXVCLEtBQUssR0FBRyxhQUFhLDBCQUEwQixpQkFBaUIscUJBQXFCLGtCQUFrQixnQkFBZ0IsOEJBQThCLG9DQUFvQyxrQkFBa0Isd0JBQXdCLGtDQUFrQyxhQUFhLG1CQUFtQixnQ0FBZ0Msb0JBQW9CLDBCQUEwQixvQ0FBb0MsS0FBSyxHQUFHLGNBQWMsdUJBQXVCLDBCQUEwQixvQkFBb0Isa0JBQWtCLG9CQUFvQixzQkFBc0IsbUJBQW1CLDhCQUE4QixrQkFBa0IseUJBQXlCLHlCQUF5QixxQkFBcUIseUJBQXlCLGlCQUFpQixtQkFBbUIsZ0JBQWdCLHlCQUF5QixLQUFLLHlCQUF5QixvQkFBb0IseUJBQXlCLGdCQUFnQixnQkFBZ0Isd0JBQXdCLHdCQUF3QiwwQkFBMEIsOERBQThELEtBQUssc0JBQXNCLHFCQUFxQixLQUFLLEdBQUcsYUFBYSxnQkFBZ0Isc0JBQXNCLHVCQUF1QixrQkFBa0IsbUNBQW1DLFNBQVMsa0JBQWtCLHdCQUF3QixLQUFLLGNBQWMsbUJBQW1CLEtBQUssR0FBRyx1QkFBdUI7QUFDMzJRO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5kaXYjX19uZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC0tYWNjZW50LWNvbG9yOiAjN2UwMDAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxufVxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY2FyZC13aWR0aDogODAwcHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIC0tY2FyZC13aWR0aDogbWluKDEwMCUsIDYwMHB4KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICB9XFxufVxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICBkaXYjX19uZXh0IHtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XFxuICB9XFxuICAubmF2Lm5hdi1oaWRlIHtcXG4gICAgdG9wOiAtNjBweDtcXG4gIH1cXG59XFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiBsaWdodGdyZXkgMXB4IHNvbGlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG59XFxuLm5hdiA+IGRpdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4ubmF2ICNob21lLWxpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG4ubmF2ICNob21lLWxpbmsgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmNlbnRlci1jYXJkIHtcXG4gIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJldmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBjYWxjKCh2YXIoLS1jYXJkLXdpZHRoKSAtIDIwcHgpICogMyAvIDgpO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi5wcmV2aWV3IGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG59XFxuLnByZXZpZXcgPiBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBncmV5O1xcbn1cXG4ucHJldmlldyBkaXYuYmx1cmIge1xcbiAgY29sb3I6IGdyZXk7XFxufVxcbi5wcmV2aWV3IGRpdi50aXRsZSB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmlsbDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlci10b3A6IDFweCBsaWdodGdyZXkgc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4jZm9vdGVyID4gZGl2IHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGJvdHRvbTogMTIwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcXG59XFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuLnRvb2x0aXAgLnRvb2x0aXAtdmlzaWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRvdWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmRvdWJsZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmRvdWJsZSBmaWd1cmUge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUFHRjtBQUZFO0VBQ0UsMEJBQUE7QUFJSjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFBQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSxlQUFBO0VBR0Y7QUFDRjtBQUFBO0VBQ0U7SUFDRSxpQkFBQTtFQUVGO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUFDRjs7RUFDQTtJQUNFLGVBQUE7SUFDQSxRQUFBO0lBQ0Esb0JBQUE7RUFFRjtFQURFO0lBQ0UsVUFBQTtFQUdKO0FBQ0Y7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFFQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFBRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFRTtFQUtFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSko7QUFGSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUlOOztBQUlBO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFRQSxnQkFBQTtFQUNBLG1CQUFBO0FBUkY7QUFDRTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUNKO0FBSUU7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtBQUhKO0FBTUU7RUFDRSxXQUFBO0FBSko7QUFPRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFTQTtFQUdFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFSRjtBQVVFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFSSjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBVEY7QUFVRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQVJKO0FBVUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0FBUko7QUFVRTtFQUNFLGNBQUE7QUFSSjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBVEY7QUFVRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQVJKO0FBV0U7RUFDRSxZQUFBO0FBVEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmRpdiNfX25leHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLS1hY2NlbnQtY29sb3I6ICM3ZTAwMDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG4gICY6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jYXJkLXdpZHRoOiA4MDBweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgLS1jYXJkLXdpZHRoOiBtaW4oMTAwJSwgNjAwcHgpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gIGRpdiNfX25leHQge1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIH1cXG4gIC5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcXG4gICAgJi5uYXYtaGlkZSB7XFxuICAgICAgdG9wOiAtNjBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8vIGJveC1zaGFkb3c6IDAgMXB4IDZweCAwIHJnYmEoMzIsIDMsIDM2LCAwLjI4KTtcXG4gIGJvcmRlci1ib3R0b206IGxpZ2h0Z3JleSAxcHggc29saWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbiAgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgI2hvbWUtbGluayB7XFxuICAgIGltZyB7XFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgfVxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcbn1cXG5cXG4uY2VudGVyLWNhcmQge1xcbiAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGNhbGMoKHZhcigtLWNhcmQtd2lkdGgpIC0gMjBweCkgKiAzIC8gOCk7XFxuXFxuICBpbWcge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gIH1cXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcblxcbiAgPiBkaXYge1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjN2UwMDAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGdyZXk7XFxuICB9XFxuXFxuICBkaXYuYmx1cmIge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gIH1cXG5cXG4gIGRpdi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB9XFxufVxcblxcbiNmb290ZXIge1xcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcbiAgLy8gYm90dG9tOiAwO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXItdG9wOiAxcHggbGlnaHRncmV5IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG4gID4gZGl2IHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG59XFxuXFxuLnRvb2x0aXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLnRvb2x0aXB0ZXh0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvdHRvbTogMTIwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XFxuICB9XFxuICAudG9vbHRpcHRleHQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIC50b29sdGlwLXZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLmRvdWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIH1cXG5cXG4gIGZpZ3VyZSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss\n");

/***/ })

})