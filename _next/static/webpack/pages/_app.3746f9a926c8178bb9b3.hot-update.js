webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./style.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n  color: #514045;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\n\\nh2 {\\n  font-weight: 500;\\n}\\n\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n}\\na:hover {\\n  text-decoration: underline;\\n}\\n\\np > code,\\nli > code {\\n  padding: 0.2em 0.4em;\\n  font-size: 85%;\\n  color: #c7254e;\\n  background-color: #ffeef3;\\n  border-radius: 6px;\\n}\\n\\nul {\\n  padding-left: 1rem;\\n}\\nul ul {\\n  margin-left: 0rem;\\n}\\n\\n::marker {\\n  margin-right: 0px;\\n}\\n\\np,\\nul,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  margin-left: 1rem;\\n  margin-right: 1rem;\\n}\\n\\n.remark-highlight {\\n  font-size: 0.85em;\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n  line-height: 1.5;\\n  --gutter: 20px;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n    --gutter: 10px;\\n  }\\n}\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n  }\\n  .nav.nav-hide {\\n    top: -60px;\\n  }\\n}\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n}\\n.nav > div {\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: var(--card-width);\\n  margin-left: 1rem;\\n  margin-right: 1rem;\\n}\\n.nav #home-link {\\n  display: flex;\\n  align-items: center;\\n  font-size: 1.5em;\\n}\\n.nav #home-link img {\\n  height: 30px;\\n  margin-right: 10px;\\n}\\n\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.post a {\\n  border-bottom: 1px dashed var(--accent-color);\\n}\\n.post a:hover {\\n  text-decoration: none;\\n  border-bottom: 1.5px solid var(--accent-color);\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - var(--gutter)) * 3 / 8);\\n  margin-top: 20px;\\n  margin-bottom: 40px;\\n}\\n.preview img {\\n  width: 50%;\\n  background-color: lightcyan;\\n  height: 100%;\\n  object-fit: scale-down;\\n  cursor: pointer;\\n}\\n.preview > div {\\n  margin-left: var(--gutter);\\n  width: 50%;\\n  border-bottom: 1px dashed var(--accent-color);\\n}\\n.preview div.title {\\n  font-size: 1.5em;\\n  font-weight: 500;\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 120px;\\n  width: 100%;\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n}\\n#footer > div:first-of-type {\\n  position: absolute;\\n  top: 40px;\\n  width: 150px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n#footer > div:first-of-type > * {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#footer svg {\\n  fill: var(--accent-color);\\n}\\n#footer > div:last-of-type {\\n  position: absolute;\\n  font-size: 0.7rem;\\n  bottom: 30px;\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n}\\n.tooltip .tooltiptext {\\n  display: none;\\n  font-size: 12px;\\n  width: 80px;\\n  background-color: black;\\n  color: #fff;\\n  text-align: center;\\n  border-radius: 6px;\\n  padding: 5px 0;\\n  position: absolute;\\n  z-index: 1;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-left: -40px;\\n}\\n.tooltip .tooltiptext::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: black transparent transparent transparent;\\n}\\n.tooltip .tooltip-visible {\\n  display: block;\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.double img:first-of-type {\\n  width: 100%;\\n  margin-right: 10px;\\n}\\n.double figure {\\n  margin: 10px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://style.scss\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAA;EACA,SAAA;EACA,iCAAA;EACA,YAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;AACF;;AAEA;EACE,sBAAA;EACA,uBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AACA;EACE,gBAAA;AAEF;;AAAA;EACE,gBAAA;AAGF;;AAAA;EACE,0BAAA;EACA,qBAAA;EACA,0BAAA;AAGF;AAFE;EACE,0BAAA;AAIJ;;AAEE;;EACE,oBAAA;EACA,cAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;AAEJ;;AAEA;EACE,kBAAA;AACF;AAAE;EACE,iBAAA;AAEJ;;AAEA;EACE,iBAAA;AACF;;AAEA;;;;;;;;EAQE,iBAAA;EACA,kBAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;EACE,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AACF;;AAEA;EACE;IACE,8BAAA;IACA,eAAA;EACF;AACF;AAEA;EACE;IACE,iBAAA;IACA,cAAA;EAAF;AACF;AAGA;EACE;IACE,iBAAA;EADF;;EAGA;IACE,eAAA;IACA,QAAA;IACA,oBAAA;EAAF;EACE;IACE,UAAA;EACJ;AACF;AAGA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,uBAAA;EAEA,kCAAA;EACA,WAAA;EACA,YAAA;EACA,0BAAA;AAFF;AAGE;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,wBAAA;EACA,iBAAA;EACA,kBAAA;AADJ;AAIE;EAKE,aAAA;EACA,mBAAA;EACA,gBAAA;AANJ;AAAI;EACE,YAAA;EACA,kBAAA;AAEN;;AAMA;EACE,wBAAA;EACA,iBAAA;EACA,kBAAA;AAHF;;AAOE;EACE,6CAAA;AAJJ;AAKI;EACE,qBAAA;EACA,8CAAA;AAHN;;AAQA;EACE,aAAA;EACA,yDAAA;EASA,gBAAA;EACA,mBAAA;AAbF;AAKE;EACE,UAAA;EACA,2BAAA;EACA,YAAA;EACA,sBAAA;EACA,eAAA;AAHJ;AAQE;EACE,0BAAA;EACA,UAAA;EACA,6CAAA;AANJ;AAUE;EACE,gBAAA;EACA,gBAAA;AARJ;;AAYA;EACE,gBAAA;EACA,aAAA;EACA,WAAA;EACA,+BAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;AATF;AAWE;EACE,kBAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;AATJ;AAUI;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AARN;AAWE;EACE,yBAAA;AATJ;AAYE;EACE,kBAAA;EACA,iBAAA;EACA,YAAA;AAVJ;;AAcA;EACE,kBAAA;EACA,qBAAA;EACA,eAAA;AAXF;AAYE;EACE,aAAA;EACA,eAAA;EACA,WAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;AAVJ;AAYE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uDAAA;AAVJ;AAYE;EACE,cAAA;AAVJ;;AAcA;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;AAXF;AAYE;EACE,WAAA;EACA,kBAAA;AAVJ;AAaE;EACE,YAAA;AAXJ\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n  color: #514045;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\nh2 {\\n  font-weight: 500;\\n}\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n  &:hover {\\n    text-decoration: underline;\\n  }\\n}\\n\\np,\\nli {\\n  > code {\\n    padding: 0.2em 0.4em;\\n    font-size: 85%;\\n    color: #c7254e;\\n    background-color: #ffeef3;\\n    border-radius: 6px;\\n  }\\n}\\n\\nul {\\n  padding-left: 1rem;\\n  ul {\\n    margin-left: 0rem;\\n  }\\n}\\n\\n::marker {\\n  margin-right: 0px;\\n}\\n\\np,\\nul,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  margin-left: 1rem;\\n  margin-right: 1rem;\\n}\\n\\n.remark-highlight {\\n  font-size: 0.85em;\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n  line-height: 1.5;\\n  --gutter: 20px;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n    --gutter: 10px;\\n  }\\n}\\n\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n    &.nav-hide {\\n      top: -60px;\\n    }\\n  }\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  // box-shadow: 0 1px 6px 0 rgba(32, 3, 36, 0.28);\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n  > div {\\n    height: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: var(--card-width);\\n    margin-left: 1rem;\\n    margin-right: 1rem;\\n  }\\n\\n  #home-link {\\n    img {\\n      height: 30px;\\n      margin-right: 10px;\\n    }\\n    display: flex;\\n    align-items: center;\\n    font-size: 1.5em;\\n  }\\n}\\n\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.post {\\n  a {\\n    border-bottom: 1px dashed var(--accent-color);\\n    &:hover {\\n      text-decoration: none;\\n      border-bottom: 1.5px solid var(--accent-color);\\n    }\\n  }\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - var(--gutter)) * 3 / 8);\\n\\n  img {\\n    width: 50%;\\n    background-color: lightcyan;\\n    height: 100%;\\n    object-fit: scale-down;\\n    cursor: pointer;\\n  }\\n  margin-top: 20px;\\n  margin-bottom: 40px;\\n\\n  > div {\\n    margin-left: var(--gutter);\\n    width: 50%;\\n    border-bottom: 1px dashed var(--accent-color);\\n    // border-bottom: 1px dashed grey;\\n  }\\n\\n  div.title {\\n    font-size: 1.5em;\\n    font-weight: 500;\\n  }\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 120px;\\n  width: 100%;\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n\\n  > div:first-of-type {\\n    position: absolute;\\n    top: 40px;\\n    width: 150px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n    > * {\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n    }\\n  }\\n  svg {\\n    fill: var(--accent-color);\\n  }\\n\\n  > div:last-of-type {\\n    position: absolute;\\n    font-size: 0.7rem;\\n    bottom: 30px;\\n  }\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n  .tooltiptext {\\n    display: none;\\n    font-size: 12px;\\n    width: 80px;\\n    background-color: black;\\n    color: #fff;\\n    text-align: center;\\n    border-radius: 6px;\\n    padding: 5px 0;\\n    position: absolute;\\n    z-index: 1;\\n    bottom: 120%;\\n    left: 50%;\\n    margin-left: -40px;\\n  }\\n  .tooltiptext::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 100%;\\n    left: 50%;\\n    margin-left: -5px;\\n    border-width: 5px;\\n    border-style: solid;\\n    border-color: black transparent transparent transparent;\\n  }\\n  .tooltip-visible {\\n    display: block;\\n  }\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  img:first-of-type {\\n    width: 100%;\\n    margin-right: 10px;\\n  }\\n\\n  figure {\\n    margin: 10px;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUuc2Nzcz85MDEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhGO0FBQzlGLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxnQkFBZ0IsZUFBZSxjQUFjLHdDQUF3QyxpQkFBaUIsbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLEdBQUcsT0FBTywyQkFBMkIsNEJBQTRCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFFBQVEscUJBQXFCLEdBQUcsT0FBTywrQkFBK0IsMEJBQTBCLGlDQUFpQyxHQUFHLFdBQVcsK0JBQStCLEdBQUcsMEJBQTBCLHlCQUF5QixtQkFBbUIsbUJBQW1CLDhCQUE4Qix1QkFBdUIsR0FBRyxRQUFRLHVCQUF1QixHQUFHLFNBQVMsc0JBQXNCLEdBQUcsY0FBYyxzQkFBc0IsR0FBRywwQ0FBMEMsc0JBQXNCLHVCQUF1QixHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyxXQUFXLHdCQUF3QixzQkFBc0IscUJBQXFCLG1CQUFtQixHQUFHLCtCQUErQixXQUFXLHFDQUFxQyxzQkFBc0IsS0FBSyxHQUFHLDZCQUE2QixXQUFXLHdCQUF3QixxQkFBcUIsS0FBSyxHQUFHLHlCQUF5QixnQkFBZ0Isd0JBQXdCLEtBQUssWUFBWSxzQkFBc0IsZUFBZSwyQkFBMkIsS0FBSyxtQkFBbUIsaUJBQWlCLEtBQUssR0FBRyxRQUFRLGtCQUFrQix3QkFBd0Isa0NBQWtDLDRCQUE0Qix1Q0FBdUMsZ0JBQWdCLGlCQUFpQixpQ0FBaUMsR0FBRyxjQUFjLGlCQUFpQixrQkFBa0IsbUNBQW1DLHdCQUF3Qiw2QkFBNkIsc0JBQXNCLHVCQUF1QixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLHFCQUFxQixHQUFHLHVCQUF1QixpQkFBaUIsdUJBQXVCLEdBQUcsa0JBQWtCLDZCQUE2QixzQkFBc0IsdUJBQXVCLEdBQUcsYUFBYSxrREFBa0QsR0FBRyxpQkFBaUIsMEJBQTBCLG1EQUFtRCxHQUFHLGNBQWMsa0JBQWtCLDhEQUE4RCxxQkFBcUIsd0JBQXdCLEdBQUcsZ0JBQWdCLGVBQWUsZ0NBQWdDLGlCQUFpQiwyQkFBMkIsb0JBQW9CLEdBQUcsa0JBQWtCLCtCQUErQixlQUFlLGtEQUFrRCxHQUFHLHNCQUFzQixxQkFBcUIscUJBQXFCLEdBQUcsYUFBYSxxQkFBcUIsa0JBQWtCLGdCQUFnQixvQ0FBb0Msa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLHVCQUF1QixHQUFHLCtCQUErQix1QkFBdUIsY0FBYyxpQkFBaUIsa0JBQWtCLHdCQUF3QixrQ0FBa0MsR0FBRyxtQ0FBbUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxlQUFlLDhCQUE4QixHQUFHLDhCQUE4Qix1QkFBdUIsc0JBQXNCLGlCQUFpQixHQUFHLGNBQWMsdUJBQXVCLDBCQUEwQixvQkFBb0IsR0FBRyx5QkFBeUIsa0JBQWtCLG9CQUFvQixnQkFBZ0IsNEJBQTRCLGdCQUFnQix1QkFBdUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsZUFBZSxpQkFBaUIsY0FBYyx1QkFBdUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLHVCQUF1QixjQUFjLGNBQWMsc0JBQXNCLHNCQUFzQix3QkFBd0IsNERBQTRELEdBQUcsNkJBQTZCLG1CQUFtQixHQUFHLGFBQWEsZ0JBQWdCLHNCQUFzQix1QkFBdUIsa0JBQWtCLG1DQUFtQyxHQUFHLDZCQUE2QixnQkFBZ0IsdUJBQXVCLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLE9BQU8sNEVBQTRFLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsc0NBQXNDLGVBQWUsY0FBYyx3Q0FBd0MsaUJBQWlCLG1CQUFtQixHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLHFCQUFxQixHQUFHLE9BQU8sMkJBQTJCLDRCQUE0QixHQUFHLFFBQVEscUJBQXFCLEdBQUcsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLHFCQUFxQixHQUFHLE9BQU8sK0JBQStCLDBCQUEwQixpQ0FBaUMsYUFBYSxpQ0FBaUMsS0FBSyxHQUFHLFlBQVksWUFBWSwyQkFBMkIscUJBQXFCLHFCQUFxQixnQ0FBZ0MseUJBQXlCLEtBQUssR0FBRyxRQUFRLHVCQUF1QixRQUFRLHdCQUF3QixLQUFLLEdBQUcsY0FBYyxzQkFBc0IsR0FBRywwQ0FBMEMsc0JBQXNCLHVCQUF1QixHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyxXQUFXLHdCQUF3QixzQkFBc0IscUJBQXFCLG1CQUFtQixHQUFHLCtCQUErQixXQUFXLHFDQUFxQyxzQkFBc0IsS0FBSyxHQUFHLCtCQUErQixXQUFXLHdCQUF3QixxQkFBcUIsS0FBSyxHQUFHLDJCQUEyQixnQkFBZ0Isd0JBQXdCLEtBQUssVUFBVSxzQkFBc0IsZUFBZSwyQkFBMkIsa0JBQWtCLG1CQUFtQixPQUFPLEtBQUssR0FBRyxVQUFVLGtCQUFrQix3QkFBd0Isa0NBQWtDLDRCQUE0QixxREFBcUQsdUNBQXVDLGdCQUFnQixpQkFBaUIsaUNBQWlDLFdBQVcsbUJBQW1CLG9CQUFvQixxQ0FBcUMsMEJBQTBCLCtCQUErQix3QkFBd0IseUJBQXlCLEtBQUssa0JBQWtCLFdBQVcscUJBQXFCLDJCQUEyQixPQUFPLG9CQUFvQiwwQkFBMEIsdUJBQXVCLEtBQUssR0FBRyxrQkFBa0IsNkJBQTZCLHNCQUFzQix1QkFBdUIsR0FBRyxXQUFXLE9BQU8sb0RBQW9ELGVBQWUsOEJBQThCLHVEQUF1RCxPQUFPLEtBQUssR0FBRyxjQUFjLGtCQUFrQiw4REFBOEQsV0FBVyxpQkFBaUIsa0NBQWtDLG1CQUFtQiw2QkFBNkIsc0JBQXNCLEtBQUsscUJBQXFCLHdCQUF3QixhQUFhLGlDQUFpQyxpQkFBaUIsb0RBQW9ELHdDQUF3QyxLQUFLLGlCQUFpQix1QkFBdUIsdUJBQXVCLEtBQUssR0FBRyxhQUFhLHFCQUFxQixrQkFBa0IsZ0JBQWdCLG9DQUFvQyxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLDJCQUEyQix5QkFBeUIsZ0JBQWdCLG1CQUFtQixvQkFBb0IsMEJBQTBCLG9DQUFvQyxXQUFXLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLE9BQU8sS0FBSyxTQUFTLGdDQUFnQyxLQUFLLDBCQUEwQix5QkFBeUIsd0JBQXdCLG1CQUFtQixLQUFLLEdBQUcsY0FBYyx1QkFBdUIsMEJBQTBCLG9CQUFvQixrQkFBa0Isb0JBQW9CLHNCQUFzQixrQkFBa0IsOEJBQThCLGtCQUFrQix5QkFBeUIseUJBQXlCLHFCQUFxQix5QkFBeUIsaUJBQWlCLG1CQUFtQixnQkFBZ0IseUJBQXlCLEtBQUsseUJBQXlCLG9CQUFvQix5QkFBeUIsZ0JBQWdCLGdCQUFnQix3QkFBd0Isd0JBQXdCLDBCQUEwQiw4REFBOEQsS0FBSyxzQkFBc0IscUJBQXFCLEtBQUssR0FBRyxhQUFhLGdCQUFnQixzQkFBc0IsdUJBQXVCLGtCQUFrQixtQ0FBbUMsdUJBQXVCLGtCQUFrQix5QkFBeUIsS0FBSyxjQUFjLG1CQUFtQixLQUFLLEdBQUcscUJBQXFCO0FBQy84VTtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiAjNTE0MDQ1O1xcbn1cXG5cXG5kaXYjX19uZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLS1hY2NlbnQtY29sb3I6ICM3ZTAwMDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG59XFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxucCA+IGNvZGUsXFxubGkgPiBjb2RlIHtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuNGVtO1xcbiAgZm9udC1zaXplOiA4NSU7XFxuICBjb2xvcjogI2M3MjU0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVlZjM7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxudWwgdWwge1xcbiAgbWFyZ2luLWxlZnQ6IDByZW07XFxufVxcblxcbjo6bWFya2VyIHtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG5cXG5wLFxcbnVsLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ucmVtYXJrLWhpZ2hsaWdodCB7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jYXJkLXdpZHRoOiA4MDBweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC0tZ3V0dGVyOiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgLS1jYXJkLXdpZHRoOiBtaW4oMTAwJSwgNjAwcHgpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgLS1ndXR0ZXI6IDEwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICBkaXYjX19uZXh0IHtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XFxuICB9XFxuICAubmF2Lm5hdi1oaWRlIHtcXG4gICAgdG9wOiAtNjBweDtcXG4gIH1cXG59XFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiBsaWdodGdyZXkgMXB4IHNvbGlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG59XFxuLm5hdiA+IGRpdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4ubmF2ICNob21lLWxpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG4ubmF2ICNob21lLWxpbmsgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmNlbnRlci1jYXJkIHtcXG4gIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucG9zdCBhIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuLnBvc3QgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ucHJldmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBjYWxjKCh2YXIoLS1jYXJkLXdpZHRoKSAtIHZhcigtLWd1dHRlcikpICogMyAvIDgpO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi5wcmV2aWV3IGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByZXZpZXcgPiBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWd1dHRlcik7XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG4ucHJldmlldyBkaXYudGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNmb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGhlaWdodDogMTIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDFweCBsaWdodGdyZXkgc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuI2Zvb3RlciA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbiNmb290ZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZSA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Zvb3RlciBzdmcge1xcbiAgZmlsbDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuI2Zvb3RlciA+IGRpdjpsYXN0LW9mLXR5cGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBib3R0b206IDMwcHg7XFxufVxcblxcbi50b29sdGlwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3R0b206IDEyMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTQwcHg7XFxufVxcbi50b29sdGlwIC50b29sdGlwdGV4dDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcbi50b29sdGlwIC50b29sdGlwLXZpc2libGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kb3VibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kb3VibGUgaW1nOmZpcnN0LW9mLXR5cGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5kb3VibGUgZmlndXJlIHtcXG4gIG1hcmdpbjogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FBR0Y7QUFGRTtFQUNFLDBCQUFBO0FBSUo7O0FBRUU7O0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0FBRUo7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBOzs7Ozs7OztFQVFFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDhCQUFBO0lBQ0EsZUFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0U7SUFDRSxpQkFBQTtFQURGOztFQUdBO0lBQ0UsZUFBQTtJQUNBLFFBQUE7SUFDQSxvQkFBQTtFQUFGO0VBQ0U7SUFDRSxVQUFBO0VBQ0o7QUFDRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUVBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUZGO0FBR0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlFO0VBS0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQUFJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBRU47O0FBTUE7RUFDRSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFPRTtFQUNFLDZDQUFBO0FBSko7QUFLSTtFQUNFLHFCQUFBO0VBQ0EsOENBQUE7QUFITjs7QUFRQTtFQUNFLGFBQUE7RUFDQSx5REFBQTtFQVNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFiRjtBQUtFO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUhKO0FBUUU7RUFDRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSw2Q0FBQTtBQU5KO0FBVUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBUko7O0FBWUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFURjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBVEo7QUFVSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUk47QUFXRTtFQUNFLHlCQUFBO0FBVEo7QUFZRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBVko7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQVhGO0FBWUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFWSjtBQVlFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1REFBQTtBQVZKO0FBWUU7RUFDRSxjQUFBO0FBVko7O0FBY0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVhGO0FBWUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFWSjtBQWFFO0VBQ0UsWUFBQTtBQVhKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICM1MTQwNDU7XFxufVxcblxcbmRpdiNfX25leHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtLWFjY2VudC1jb2xvcjogIzdlMDAwMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbiAgJjpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcbn1cXG5cXG5wLFxcbmxpIHtcXG4gID4gY29kZSB7XFxuICAgIHBhZGRpbmc6IDAuMmVtIDAuNGVtO1xcbiAgICBmb250LXNpemU6IDg1JTtcXG4gICAgY29sb3I6ICNjNzI1NGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVlZjM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIH1cXG59XFxuXFxudWwge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgdWwge1xcbiAgICBtYXJnaW4tbGVmdDogMHJlbTtcXG4gIH1cXG59XFxuXFxuOjptYXJrZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcblxcbnAsXFxudWwsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5yZW1hcmstaGlnaGxpZ2h0IHtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtd2lkdGg6IDgwMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLS1ndXR0ZXI6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtd2lkdGg6IG1pbigxMDAlLCA2MDBweCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAtLWd1dHRlcjogMTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gIGRpdiNfX25leHQge1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIH1cXG4gIC5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcXG4gICAgJi5uYXYtaGlkZSB7XFxuICAgICAgdG9wOiAtNjBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8vIGJveC1zaGFkb3c6IDAgMXB4IDZweCAwIHJnYmEoMzIsIDMsIDM2LCAwLjI4KTtcXG4gIGJvcmRlci1ib3R0b206IGxpZ2h0Z3JleSAxcHggc29saWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbiAgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgfVxcblxcbiAgI2hvbWUtbGluayB7XFxuICAgIGltZyB7XFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgfVxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcbn1cXG5cXG4uY2VudGVyLWNhcmQge1xcbiAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5wb3N0IHtcXG4gIGEge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGNhbGMoKHZhcigtLWNhcmQtd2lkdGgpIC0gdmFyKC0tZ3V0dGVyKSkgKiAzIC8gOCk7XFxuXFxuICBpbWcge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuXFxuICA+IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1ndXR0ZXIpO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgZ3JleTtcXG4gIH1cXG5cXG4gIGRpdi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB9XFxufVxcblxcbiNmb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGhlaWdodDogMTIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDFweCBsaWdodGdyZXkgc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgPiAqIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gIH1cXG4gIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB9XFxuXFxuICA+IGRpdjpsYXN0LW9mLXR5cGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICBib3R0b206IDMwcHg7XFxuICB9XFxufVxcblxcbi50b29sdGlwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC50b29sdGlwdGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvdHRvbTogMTIwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTQwcHg7XFxuICB9XFxuICAudG9vbHRpcHRleHQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIC50b29sdGlwLXZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLmRvdWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGltZzpmaXJzdC1vZi10eXBlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIH1cXG5cXG4gIGZpZ3VyZSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss\n");

/***/ })

})