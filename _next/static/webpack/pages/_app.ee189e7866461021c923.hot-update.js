webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./style.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n  color: #514045;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\n\\nh2 {\\n  font-weight: 500;\\n}\\n\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n}\\na:hover {\\n  text-decoration: underline;\\n}\\n\\np > code,\\nli > code {\\n  padding: 0.2em 0.4em;\\n  font-size: 85%;\\n  color: #c7254e;\\n  background-color: #ffeef3;\\n  border-radius: 6px;\\n}\\n\\nul {\\n  padding-left: 1rem;\\n}\\nul ul {\\n  margin-left: 0rem;\\n}\\n\\n::marker {\\n  margin-right: 0px;\\n}\\n\\np,\\nul,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  margin-left: 1rem;\\n  margin-right: 1rem;\\n}\\n\\n.remark-highlight {\\n  font-size: 0.85em;\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n  line-height: 1.5;\\n  --gutter: 20px;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n    --gutter: 10px;\\n  }\\n}\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n  }\\n  .nav.nav-hide {\\n    top: -60px;\\n  }\\n}\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n}\\n.nav > div {\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: var(--card-width);\\n  margin-left: 10px;\\n  margin-right: 10px;\\n}\\n.nav #home-link {\\n  display: flex;\\n  align-items: center;\\n  font-size: 1.5em;\\n}\\n.nav #home-link img {\\n  height: 30px;\\n  margin-right: 10px;\\n}\\n\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.post a {\\n  border-bottom: 1px dashed var(--accent-color);\\n}\\n.post a:hover {\\n  text-decoration: none;\\n  border-bottom: 1.5px solid var(--accent-color);\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - var(--gutter)) * 3 / 8);\\n  margin-top: 20px;\\n  margin-bottom: 40px;\\n}\\n.preview img {\\n  width: 50%;\\n  background-color: lightcyan;\\n  height: 100%;\\n  object-fit: scale-down;\\n  cursor: pointer;\\n}\\n.preview > div {\\n  margin-left: var(--gutter);\\n  width: 50%;\\n  border-bottom: 1px dashed var(--accent-color);\\n}\\n.preview div.title {\\n  font-size: 1.5em;\\n  font-weight: 500;\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 120px;\\n  width: 100%;\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n}\\n#footer > div:first-of-type {\\n  position: absolute;\\n  top: 40px;\\n  width: 150px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n#footer > div:first-of-type > * {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#footer svg {\\n  fill: var(--accent-color);\\n}\\n#footer > div:last-of-type {\\n  position: absolute;\\n  font-size: 0.7rem;\\n  bottom: 30px;\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n}\\n.tooltip .tooltiptext {\\n  display: none;\\n  font-size: 12px;\\n  width: 80px;\\n  background-color: black;\\n  color: #fff;\\n  text-align: center;\\n  border-radius: 6px;\\n  padding: 5px 0;\\n  position: absolute;\\n  z-index: 1;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-left: -40px;\\n}\\n.tooltip .tooltiptext::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: black transparent transparent transparent;\\n}\\n.tooltip .tooltip-visible {\\n  display: block;\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.double img:first-of-type {\\n  width: 100%;\\n  margin-right: 10px;\\n}\\n.double figure {\\n  margin: 10px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://style.scss\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAA;EACA,SAAA;EACA,iCAAA;EACA,YAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;AACF;;AAEA;EACE,sBAAA;EACA,uBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AACA;EACE,gBAAA;AAEF;;AAAA;EACE,gBAAA;AAGF;;AAAA;EACE,0BAAA;EACA,qBAAA;EACA,0BAAA;AAGF;AAFE;EACE,0BAAA;AAIJ;;AAEE;;EACE,oBAAA;EACA,cAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;AAEJ;;AAEA;EACE,kBAAA;AACF;AAAE;EACE,iBAAA;AAEJ;;AAEA;EACE,iBAAA;AACF;;AAEA;;;;;;;;EAUE,iBAAA;EACA,kBAAA;AADF;;AAIA;EACE,iBAAA;AADF;;AAIA;EACE,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AADF;;AAIA;EACE;IACE,8BAAA;IACA,eAAA;EADF;AACF;AAIA;EACE;IACE,iBAAA;IACA,cAAA;EAFF;AACF;AAKA;EACE;IACE,iBAAA;EAHF;;EAKA;IACE,eAAA;IACA,QAAA;IACA,oBAAA;EAFF;EAGE;IACE,UAAA;EADJ;AACF;AAKA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,uBAAA;EAEA,kCAAA;EACA,WAAA;EACA,YAAA;EACA,0BAAA;AAJF;AAKE;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,wBAAA;EACA,iBAAA;EACA,kBAAA;AAHJ;AAME;EAKE,aAAA;EACA,mBAAA;EACA,gBAAA;AARJ;AAEI;EACE,YAAA;EACA,kBAAA;AAAN;;AAQA;EACE,wBAAA;EACA,iBAAA;EACA,kBAAA;AALF;;AASE;EACE,6CAAA;AANJ;AAOI;EACE,qBAAA;EACA,8CAAA;AALN;;AAUA;EACE,aAAA;EACA,yDAAA;EASA,gBAAA;EACA,mBAAA;AAfF;AAOE;EACE,UAAA;EACA,2BAAA;EACA,YAAA;EACA,sBAAA;EACA,eAAA;AALJ;AAUE;EACE,0BAAA;EACA,UAAA;EACA,6CAAA;AARJ;AAYE;EACE,gBAAA;EACA,gBAAA;AAVJ;;AAcA;EACE,gBAAA;EACA,aAAA;EACA,WAAA;EACA,+BAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;AAXF;AAaE;EACE,kBAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;AAXJ;AAYI;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AAVN;AAaE;EACE,yBAAA;AAXJ;AAcE;EACE,kBAAA;EACA,iBAAA;EACA,YAAA;AAZJ;;AAgBA;EACE,kBAAA;EACA,qBAAA;EACA,eAAA;AAbF;AAcE;EACE,aAAA;EACA,eAAA;EACA,WAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;AAZJ;AAcE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uDAAA;AAZJ;AAcE;EACE,cAAA;AAZJ;;AAgBA;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;AAbF;AAcE;EACE,WAAA;EACA,kBAAA;AAZJ;AAeE;EACE,YAAA;AAbJ\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n  color: #514045;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\nh2 {\\n  font-weight: 500;\\n}\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n  &:hover {\\n    text-decoration: underline;\\n  }\\n}\\n\\np,\\nli {\\n  > code {\\n    padding: 0.2em 0.4em;\\n    font-size: 85%;\\n    color: #c7254e;\\n    background-color: #ffeef3;\\n    border-radius: 6px;\\n  }\\n}\\n\\nul {\\n  padding-left: 1rem;\\n  ul {\\n    margin-left: 0rem;\\n  }\\n}\\n\\n::marker {\\n  margin-right: 0px;\\n}\\n\\np,\\nul,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  // margin-left: 0.375rem;\\n  // margin-right: 0.375rem;\\n  margin-left: 1rem;\\n  margin-right: 1rem;\\n}\\n\\n.remark-highlight {\\n  font-size: 0.85em;\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n  line-height: 1.5;\\n  --gutter: 20px;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n    --gutter: 10px;\\n  }\\n}\\n\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n    &.nav-hide {\\n      top: -60px;\\n    }\\n  }\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  // box-shadow: 0 1px 6px 0 rgba(32, 3, 36, 0.28);\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n  > div {\\n    height: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: var(--card-width);\\n    margin-left: 10px;\\n    margin-right: 10px;\\n  }\\n\\n  #home-link {\\n    img {\\n      height: 30px;\\n      margin-right: 10px;\\n    }\\n    display: flex;\\n    align-items: center;\\n    font-size: 1.5em;\\n  }\\n}\\n\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.post {\\n  a {\\n    border-bottom: 1px dashed var(--accent-color);\\n    &:hover {\\n      text-decoration: none;\\n      border-bottom: 1.5px solid var(--accent-color);\\n    }\\n  }\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - var(--gutter)) * 3 / 8);\\n\\n  img {\\n    width: 50%;\\n    background-color: lightcyan;\\n    height: 100%;\\n    object-fit: scale-down;\\n    cursor: pointer;\\n  }\\n  margin-top: 20px;\\n  margin-bottom: 40px;\\n\\n  > div {\\n    margin-left: var(--gutter);\\n    width: 50%;\\n    border-bottom: 1px dashed var(--accent-color);\\n    // border-bottom: 1px dashed grey;\\n  }\\n\\n  div.title {\\n    font-size: 1.5em;\\n    font-weight: 500;\\n  }\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 120px;\\n  width: 100%;\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n\\n  > div:first-of-type {\\n    position: absolute;\\n    top: 40px;\\n    width: 150px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n    > * {\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n    }\\n  }\\n  svg {\\n    fill: var(--accent-color);\\n  }\\n\\n  > div:last-of-type {\\n    position: absolute;\\n    font-size: 0.7rem;\\n    bottom: 30px;\\n  }\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n  .tooltiptext {\\n    display: none;\\n    font-size: 12px;\\n    width: 80px;\\n    background-color: black;\\n    color: #fff;\\n    text-align: center;\\n    border-radius: 6px;\\n    padding: 5px 0;\\n    position: absolute;\\n    z-index: 1;\\n    bottom: 120%;\\n    left: 50%;\\n    margin-left: -40px;\\n  }\\n  .tooltiptext::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 100%;\\n    left: 50%;\\n    margin-left: -5px;\\n    border-width: 5px;\\n    border-style: solid;\\n    border-color: black transparent transparent transparent;\\n  }\\n  .tooltip-visible {\\n    display: block;\\n  }\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  img:first-of-type {\\n    width: 100%;\\n    margin-right: 10px;\\n  }\\n\\n  figure {\\n    margin: 10px;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUuc2Nzcz85MDEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhGO0FBQzlGLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxnQkFBZ0IsZUFBZSxjQUFjLHdDQUF3QyxpQkFBaUIsbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLEdBQUcsT0FBTywyQkFBMkIsNEJBQTRCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFFBQVEscUJBQXFCLEdBQUcsT0FBTywrQkFBK0IsMEJBQTBCLGlDQUFpQyxHQUFHLFdBQVcsK0JBQStCLEdBQUcsMEJBQTBCLHlCQUF5QixtQkFBbUIsbUJBQW1CLDhCQUE4Qix1QkFBdUIsR0FBRyxRQUFRLHVCQUF1QixHQUFHLFNBQVMsc0JBQXNCLEdBQUcsY0FBYyxzQkFBc0IsR0FBRywwQ0FBMEMsc0JBQXNCLHVCQUF1QixHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyxXQUFXLHdCQUF3QixzQkFBc0IscUJBQXFCLG1CQUFtQixHQUFHLCtCQUErQixXQUFXLHFDQUFxQyxzQkFBc0IsS0FBSyxHQUFHLDZCQUE2QixXQUFXLHdCQUF3QixxQkFBcUIsS0FBSyxHQUFHLHlCQUF5QixnQkFBZ0Isd0JBQXdCLEtBQUssWUFBWSxzQkFBc0IsZUFBZSwyQkFBMkIsS0FBSyxtQkFBbUIsaUJBQWlCLEtBQUssR0FBRyxRQUFRLGtCQUFrQix3QkFBd0Isa0NBQWtDLDRCQUE0Qix1Q0FBdUMsZ0JBQWdCLGlCQUFpQixpQ0FBaUMsR0FBRyxjQUFjLGlCQUFpQixrQkFBa0IsbUNBQW1DLHdCQUF3Qiw2QkFBNkIsc0JBQXNCLHVCQUF1QixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLHFCQUFxQixHQUFHLHVCQUF1QixpQkFBaUIsdUJBQXVCLEdBQUcsa0JBQWtCLDZCQUE2QixzQkFBc0IsdUJBQXVCLEdBQUcsYUFBYSxrREFBa0QsR0FBRyxpQkFBaUIsMEJBQTBCLG1EQUFtRCxHQUFHLGNBQWMsa0JBQWtCLDhEQUE4RCxxQkFBcUIsd0JBQXdCLEdBQUcsZ0JBQWdCLGVBQWUsZ0NBQWdDLGlCQUFpQiwyQkFBMkIsb0JBQW9CLEdBQUcsa0JBQWtCLCtCQUErQixlQUFlLGtEQUFrRCxHQUFHLHNCQUFzQixxQkFBcUIscUJBQXFCLEdBQUcsYUFBYSxxQkFBcUIsa0JBQWtCLGdCQUFnQixvQ0FBb0Msa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLHVCQUF1QixHQUFHLCtCQUErQix1QkFBdUIsY0FBYyxpQkFBaUIsa0JBQWtCLHdCQUF3QixrQ0FBa0MsR0FBRyxtQ0FBbUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxlQUFlLDhCQUE4QixHQUFHLDhCQUE4Qix1QkFBdUIsc0JBQXNCLGlCQUFpQixHQUFHLGNBQWMsdUJBQXVCLDBCQUEwQixvQkFBb0IsR0FBRyx5QkFBeUIsa0JBQWtCLG9CQUFvQixnQkFBZ0IsNEJBQTRCLGdCQUFnQix1QkFBdUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsZUFBZSxpQkFBaUIsY0FBYyx1QkFBdUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLHVCQUF1QixjQUFjLGNBQWMsc0JBQXNCLHNCQUFzQix3QkFBd0IsNERBQTRELEdBQUcsNkJBQTZCLG1CQUFtQixHQUFHLGFBQWEsZ0JBQWdCLHNCQUFzQix1QkFBdUIsa0JBQWtCLG1DQUFtQyxHQUFHLDZCQUE2QixnQkFBZ0IsdUJBQXVCLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLE9BQU8sNEVBQTRFLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsc0NBQXNDLGVBQWUsY0FBYyx3Q0FBd0MsaUJBQWlCLG1CQUFtQixHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLHFCQUFxQixHQUFHLE9BQU8sMkJBQTJCLDRCQUE0QixHQUFHLFFBQVEscUJBQXFCLEdBQUcsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLHFCQUFxQixHQUFHLE9BQU8sK0JBQStCLDBCQUEwQixpQ0FBaUMsYUFBYSxpQ0FBaUMsS0FBSyxHQUFHLFlBQVksWUFBWSwyQkFBMkIscUJBQXFCLHFCQUFxQixnQ0FBZ0MseUJBQXlCLEtBQUssR0FBRyxRQUFRLHVCQUF1QixRQUFRLHdCQUF3QixLQUFLLEdBQUcsY0FBYyxzQkFBc0IsR0FBRywwQ0FBMEMsNkJBQTZCLDhCQUE4QixzQkFBc0IsdUJBQXVCLEdBQUcsdUJBQXVCLHNCQUFzQixHQUFHLFdBQVcsd0JBQXdCLHNCQUFzQixxQkFBcUIsbUJBQW1CLEdBQUcsK0JBQStCLFdBQVcscUNBQXFDLHNCQUFzQixLQUFLLEdBQUcsK0JBQStCLFdBQVcsd0JBQXdCLHFCQUFxQixLQUFLLEdBQUcsMkJBQTJCLGdCQUFnQix3QkFBd0IsS0FBSyxVQUFVLHNCQUFzQixlQUFlLDJCQUEyQixrQkFBa0IsbUJBQW1CLE9BQU8sS0FBSyxHQUFHLFVBQVUsa0JBQWtCLHdCQUF3QixrQ0FBa0MsNEJBQTRCLHFEQUFxRCx1Q0FBdUMsZ0JBQWdCLGlCQUFpQixpQ0FBaUMsV0FBVyxtQkFBbUIsb0JBQW9CLHFDQUFxQywwQkFBMEIsK0JBQStCLHdCQUF3Qix5QkFBeUIsS0FBSyxrQkFBa0IsV0FBVyxxQkFBcUIsMkJBQTJCLE9BQU8sb0JBQW9CLDBCQUEwQix1QkFBdUIsS0FBSyxHQUFHLGtCQUFrQiw2QkFBNkIsc0JBQXNCLHVCQUF1QixHQUFHLFdBQVcsT0FBTyxvREFBb0QsZUFBZSw4QkFBOEIsdURBQXVELE9BQU8sS0FBSyxHQUFHLGNBQWMsa0JBQWtCLDhEQUE4RCxXQUFXLGlCQUFpQixrQ0FBa0MsbUJBQW1CLDZCQUE2QixzQkFBc0IsS0FBSyxxQkFBcUIsd0JBQXdCLGFBQWEsaUNBQWlDLGlCQUFpQixvREFBb0Qsd0NBQXdDLEtBQUssaUJBQWlCLHVCQUF1Qix1QkFBdUIsS0FBSyxHQUFHLGFBQWEscUJBQXFCLGtCQUFrQixnQkFBZ0Isb0NBQW9DLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0Qix1QkFBdUIsMkJBQTJCLHlCQUF5QixnQkFBZ0IsbUJBQW1CLG9CQUFvQiwwQkFBMEIsb0NBQW9DLFdBQVcsc0JBQXNCLGdDQUFnQyw0QkFBNEIsT0FBTyxLQUFLLFNBQVMsZ0NBQWdDLEtBQUssMEJBQTBCLHlCQUF5Qix3QkFBd0IsbUJBQW1CLEtBQUssR0FBRyxjQUFjLHVCQUF1QiwwQkFBMEIsb0JBQW9CLGtCQUFrQixvQkFBb0Isc0JBQXNCLGtCQUFrQiw4QkFBOEIsa0JBQWtCLHlCQUF5Qix5QkFBeUIscUJBQXFCLHlCQUF5QixpQkFBaUIsbUJBQW1CLGdCQUFnQix5QkFBeUIsS0FBSyx5QkFBeUIsb0JBQW9CLHlCQUF5QixnQkFBZ0IsZ0JBQWdCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLDhEQUE4RCxLQUFLLHNCQUFzQixxQkFBcUIsS0FBSyxHQUFHLGFBQWEsZ0JBQWdCLHNCQUFzQix1QkFBdUIsa0JBQWtCLG1DQUFtQyx1QkFBdUIsa0JBQWtCLHlCQUF5QixLQUFLLGNBQWMsbUJBQW1CLEtBQUssR0FBRyxxQkFBcUI7QUFDNWdWO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICM1MTQwNDU7XFxufVxcblxcbmRpdiNfX25leHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtLWFjY2VudC1jb2xvcjogIzdlMDAwMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbn1cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5wID4gY29kZSxcXG5saSA+IGNvZGUge1xcbiAgcGFkZGluZzogMC4yZW0gMC40ZW07XFxuICBmb250LXNpemU6IDg1JTtcXG4gIGNvbG9yOiAjYzcyNTRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWVmMztcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxudWwge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG51bCB1bCB7XFxuICBtYXJnaW4tbGVmdDogMHJlbTtcXG59XFxuXFxuOjptYXJrZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcblxcbnAsXFxudWwsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5yZW1hcmstaGlnaGxpZ2h0IHtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtd2lkdGg6IDgwMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLS1ndXR0ZXI6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtd2lkdGg6IG1pbigxMDAlLCA2MDBweCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAtLWd1dHRlcjogMTBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gIGRpdiNfX25leHQge1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcXG4gIH1cXG4gIC5uYXYubmF2LWhpZGUge1xcbiAgICB0b3A6IC02MHB4O1xcbiAgfVxcbn1cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IGxpZ2h0Z3JleSAxcHggc29saWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbn1cXG4ubmF2ID4gZGl2IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5uYXYgI2hvbWUtbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbi5uYXYgI2hvbWUtbGluayBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uY2VudGVyLWNhcmQge1xcbiAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5wb3N0IGEge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG4ucG9zdCBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGNhbGMoKHZhcigtLWNhcmQtd2lkdGgpIC0gdmFyKC0tZ3V0dGVyKSkgKiAzIC8gOCk7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuLnByZXZpZXcgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJldmlldyA+IGRpdiB7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tZ3V0dGVyKTtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcbi5wcmV2aWV3IGRpdi50aXRsZSB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMXB4IGxpZ2h0Z3JleSBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4jZm9vdGVyID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuI2Zvb3RlciA+IGRpdjpmaXJzdC1vZi10eXBlID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jZm9vdGVyIHN2ZyB7XFxuICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG4jZm9vdGVyID4gZGl2Omxhc3Qtb2YtdHlwZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGJvdHRvbTogMzBweDtcXG59XFxuXFxuLnRvb2x0aXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGJvdHRvbTogMTIwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcXG59XFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuLnRvb2x0aXAgLnRvb2x0aXAtdmlzaWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRvdWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmRvdWJsZSBpbWc6Zmlyc3Qtb2YtdHlwZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmRvdWJsZSBmaWd1cmUge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUFHRjtBQUZFO0VBQ0UsMEJBQUE7QUFJSjs7QUFFRTs7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjtBQUFFO0VBQ0UsaUJBQUE7QUFFSjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7Ozs7Ozs7O0VBVUUsaUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSxlQUFBO0VBREY7QUFDRjtBQUlBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGNBQUE7RUFGRjtBQUNGO0FBS0E7RUFDRTtJQUNFLGlCQUFBO0VBSEY7O0VBS0E7SUFDRSxlQUFBO0lBQ0EsUUFBQTtJQUNBLG9CQUFBO0VBRkY7RUFHRTtJQUNFLFVBQUE7RUFESjtBQUNGO0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBRUEsa0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBSkY7QUFLRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhKO0FBTUU7RUFLRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVJKO0FBRUk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFRQTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVNFO0VBQ0UsNkNBQUE7QUFOSjtBQU9JO0VBQ0UscUJBQUE7RUFDQSw4Q0FBQTtBQUxOOztBQVVBO0VBQ0UsYUFBQTtFQUNBLHlEQUFBO0VBU0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWZGO0FBT0U7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBTEo7QUFVRTtFQUNFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLDZDQUFBO0FBUko7QUFZRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFWSjs7QUFjQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVhGO0FBYUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFYSjtBQVlJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFWTjtBQWFFO0VBQ0UseUJBQUE7QUFYSjtBQWNFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFaSjs7QUFnQkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQWJGO0FBY0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFaSjtBQWNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1REFBQTtBQVpKO0FBY0U7RUFDRSxjQUFBO0FBWko7O0FBZ0JBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFiRjtBQWNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBWko7QUFlRTtFQUNFLFlBQUE7QUFiSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiAjNTE0MDQ1O1xcbn1cXG5cXG5kaXYjX19uZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLS1hY2NlbnQtY29sb3I6ICM3ZTAwMDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG4gICY6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG59XFxuXFxucCxcXG5saSB7XFxuICA+IGNvZGUge1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjRlbTtcXG4gICAgZm9udC1zaXplOiA4NSU7XFxuICAgIGNvbG9yOiAjYzcyNTRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZWYzO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB9XFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XFxuICB9XFxufVxcblxcbjo6bWFya2VyIHtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG5cXG5wLFxcbnVsLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIC8vIG1hcmdpbi1sZWZ0OiAwLjM3NXJlbTtcXG4gIC8vIG1hcmdpbi1yaWdodDogMC4zNzVyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnJlbWFyay1oaWdobGlnaHQge1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxufVxcblxcbjpyb290IHtcXG4gIC0tY2FyZC13aWR0aDogODAwcHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtLWd1dHRlcjogMjBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIC0tY2FyZC13aWR0aDogbWluKDEwMCUsIDYwMHB4KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIC0tZ3V0dGVyOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgZGl2I19fbmV4dCB7XFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgfVxcbiAgLm5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xcbiAgICAmLm5hdi1oaWRlIHtcXG4gICAgICB0b3A6IC02MHB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLy8gYm94LXNoYWRvdzogMCAxcHggNnB4IDAgcmdiYSgzMiwgMywgMzYsIDAuMjgpO1xcbiAgYm9yZGVyLWJvdHRvbTogbGlnaHRncmV5IDFweCBzb2xpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxuICA+IGRpdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuXFxuICAjaG9tZS1saW5rIHtcXG4gICAgaW1nIHtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICB9XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICB9XFxufVxcblxcbi5jZW50ZXItY2FyZCB7XFxuICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnBvc3Qge1xcbiAgYSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnByZXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygodmFyKC0tY2FyZC13aWR0aCkgLSB2YXIoLS1ndXR0ZXIpKSAqIDMgLyA4KTtcXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG5cXG4gID4gZGl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWd1dHRlcik7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBncmV5O1xcbiAgfVxcblxcbiAgZGl2LnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIH1cXG59XFxuXFxuI2Zvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMXB4IGxpZ2h0Z3JleSBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICA+ICoge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgfVxcbiAgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIH1cXG5cXG4gID4gZGl2Omxhc3Qtb2YtdHlwZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGJvdHRvbTogMzBweDtcXG4gIH1cXG59XFxuXFxuLnRvb2x0aXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLnRvb2x0aXB0ZXh0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm90dG9tOiAxMjAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcXG4gIH1cXG4gIC50b29sdGlwdGV4dDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgLnRvb2x0aXAtdmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4uZG91YmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaW1nOmZpcnN0LW9mLXR5cGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgZmlndXJlIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss\n");

/***/ })

})