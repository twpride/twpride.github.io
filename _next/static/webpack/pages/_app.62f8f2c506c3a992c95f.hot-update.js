webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./style.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n  color: #514045;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\n\\nh2 {\\n  font-weight: 500;\\n}\\n\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n}\\na:hover {\\n  text-decoration: underline;\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n  line-height: 1.5;\\n  --gutter: 20px;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n    --gutter: 10px;\\n  }\\n}\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n  }\\n  .nav.nav-hide {\\n    top: -60px;\\n  }\\n}\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n}\\n.nav > div {\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: var(--card-width);\\n  margin-left: 10px;\\n  margin-right: 10px;\\n}\\n.nav #home-link {\\n  display: flex;\\n  align-items: center;\\n  font-size: 1.5em;\\n}\\n.nav #home-link img {\\n  height: 30px;\\n  margin-right: 10px;\\n}\\n\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.post a {\\n  border-bottom: 1px dashed var(--accent-color);\\n}\\n.post a:hover {\\n  text-decoration: none;\\n  border-bottom: 1.5px solid var(--accent-color);\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - var(--gutter)) * 3 / 8);\\n  margin-top: 20px;\\n  margin-bottom: 40px;\\n}\\n.preview img {\\n  width: 50%;\\n  background-color: lightcyan;\\n  height: 100%;\\n  object-fit: scale-down;\\n  cursor: pointer;\\n}\\n.preview > div {\\n  margin-left: var(--gutter);\\n  width: 50%;\\n  border-bottom: 1px dashed var(--accent-color);\\n}\\n.preview div.title {\\n  font-size: 1.5em;\\n  font-weight: 500;\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 120px;\\n  width: 100%;\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n}\\n#footer > div:first-of-type {\\n  position: absolute;\\n  top: 40px;\\n  width: 150px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n#footer > div:first-of-type > * {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#footer svg {\\n  fill: var(--accent-color);\\n}\\n#footer > div:last-of-type {\\n  position: absolute;\\n  font-size: 0.7rem;\\n  bottom: 30px;\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n}\\n.tooltip .tooltiptext {\\n  display: none;\\n  font-size: 12px;\\n  width: 80px;\\n  background-color: black;\\n  color: #fff;\\n  text-align: center;\\n  border-radius: 6px;\\n  padding: 5px 0;\\n  position: absolute;\\n  z-index: 1;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-left: -40px;\\n}\\n.tooltip .tooltiptext::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: black transparent transparent transparent;\\n}\\n.tooltip .tooltip-visible {\\n  display: block;\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.double img:first-of-type {\\n  width: 100%;\\n  margin-right: 10px;\\n}\\n.double figure {\\n  margin: 10px;\\n}\\n\\ncode {\\n  padding: 2px 4px;\\n  font-size: 90%;\\n  color: #c7254e;\\n  background-color: #f9f2f4;\\n  border-radius: 4px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://style.scss\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAA;EACA,SAAA;EACA,iCAAA;EACA,YAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;AACF;;AAEA;EACE,sBAAA;EACA,uBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AACA;EACE,gBAAA;AAEF;;AAAA;EACE,gBAAA;AAGF;;AAAA;EACE,0BAAA;EACA,qBAAA;EACA,0BAAA;AAGF;AAFE;EACE,0BAAA;AAIJ;;AAAA;EACE,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AAGF;;AAAA;EACE;IACE,8BAAA;IACA,eAAA;EAGF;AACF;AAAA;EACE;IACE,iBAAA;IACA,cAAA;EAEF;AACF;AACA;EACE;IACE,iBAAA;EACF;;EACA;IACE,eAAA;IACA,QAAA;IACA,oBAAA;EAEF;EADE;IACE,UAAA;EAGJ;AACF;AACA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,uBAAA;EAEA,kCAAA;EACA,WAAA;EACA,YAAA;EACA,0BAAA;AAAF;AACE;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,wBAAA;EACA,iBAAA;EACA,kBAAA;AACJ;AAEE;EAKE,aAAA;EACA,mBAAA;EACA,gBAAA;AAJJ;AAFI;EACE,YAAA;EACA,kBAAA;AAIN;;AAIA;EACE,wBAAA;EACA,iBAAA;EACA,kBAAA;AADF;;AAKE;EACE,6CAAA;AAFJ;AAGI;EACE,qBAAA;EACA,8CAAA;AADN;;AAMA;EACE,aAAA;EACA,yDAAA;EASA,gBAAA;EACA,mBAAA;AAXF;AAGE;EACE,UAAA;EACA,2BAAA;EACA,YAAA;EACA,sBAAA;EACA,eAAA;AADJ;AAME;EACE,0BAAA;EACA,UAAA;EACA,6CAAA;AAJJ;AAQE;EACE,gBAAA;EACA,gBAAA;AANJ;;AAUA;EACE,gBAAA;EACA,aAAA;EACA,WAAA;EACA,+BAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;AAPF;AASE;EACE,kBAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;AAPJ;AAQI;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AANN;AASE;EACE,yBAAA;AAPJ;AAUE;EACE,kBAAA;EACA,iBAAA;EACA,YAAA;AARJ;;AAYA;EACE,kBAAA;EACA,qBAAA;EACA,eAAA;AATF;AAUE;EACE,aAAA;EACA,eAAA;EACA,WAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;AARJ;AAUE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uDAAA;AARJ;AAUE;EACE,cAAA;AARJ;;AAYA;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;AATF;AAUE;EACE,WAAA;EACA,kBAAA;AARJ;AAWE;EACE,YAAA;AATJ;;AAaA;EACE,gBAAA;EACA,cAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;AAVF\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n  color: #514045;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\nh2 {\\n  font-weight: 500;\\n}\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n  &:hover {\\n    text-decoration: underline;\\n  }\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n  line-height: 1.5;\\n  --gutter: 20px;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n    --gutter: 10px;\\n  }\\n}\\n\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n    &.nav-hide {\\n      top: -60px;\\n    }\\n  }\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  // box-shadow: 0 1px 6px 0 rgba(32, 3, 36, 0.28);\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n  > div {\\n    height: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: var(--card-width);\\n    margin-left: 10px;\\n    margin-right: 10px;\\n  }\\n\\n  #home-link {\\n    img {\\n      height: 30px;\\n      margin-right: 10px;\\n    }\\n    display: flex;\\n    align-items: center;\\n    font-size: 1.5em;\\n  }\\n}\\n\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.post {\\n  a {\\n    border-bottom: 1px dashed var(--accent-color);\\n    &:hover {\\n      text-decoration: none;\\n      border-bottom: 1.5px solid var(--accent-color);\\n    }\\n  }\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - var(--gutter)) * 3 / 8);\\n\\n  img {\\n    width: 50%;\\n    background-color: lightcyan;\\n    height: 100%;\\n    object-fit: scale-down;\\n    cursor: pointer;\\n  }\\n  margin-top: 20px;\\n  margin-bottom: 40px;\\n\\n  > div {\\n    margin-left: var(--gutter);\\n    width: 50%;\\n    border-bottom: 1px dashed var(--accent-color);\\n    // border-bottom: 1px dashed grey;\\n  }\\n\\n  div.title {\\n    font-size: 1.5em;\\n    font-weight: 500;\\n  }\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 120px;\\n  width: 100%;\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n\\n  > div:first-of-type {\\n    position: absolute;\\n    top: 40px;\\n    width: 150px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n    > * {\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n    }\\n  }\\n  svg {\\n    fill: var(--accent-color);\\n  }\\n\\n  > div:last-of-type {\\n    position: absolute;\\n    font-size: 0.7rem;\\n    bottom: 30px;\\n  }\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n  .tooltiptext {\\n    display: none;\\n    font-size: 12px;\\n    width: 80px;\\n    background-color: black;\\n    color: #fff;\\n    text-align: center;\\n    border-radius: 6px;\\n    padding: 5px 0;\\n    position: absolute;\\n    z-index: 1;\\n    bottom: 120%;\\n    left: 50%;\\n    margin-left: -40px;\\n  }\\n  .tooltiptext::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 100%;\\n    left: 50%;\\n    margin-left: -5px;\\n    border-width: 5px;\\n    border-style: solid;\\n    border-color: black transparent transparent transparent;\\n  }\\n  .tooltip-visible {\\n    display: block;\\n  }\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  img:first-of-type {\\n    width: 100%;\\n    margin-right: 10px;\\n  }\\n\\n  figure {\\n    margin: 10px;\\n  }\\n}\\n\\ncode {\\n  padding: 2px 4px;\\n  font-size: 90%;\\n  color: #c7254e;\\n  background-color: #f9f2f4;\\n  border-radius: 4px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUuc2Nzcz85MDEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhGO0FBQzlGLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxnQkFBZ0IsZUFBZSxjQUFjLHdDQUF3QyxpQkFBaUIsbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLEdBQUcsT0FBTywyQkFBMkIsNEJBQTRCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFFBQVEscUJBQXFCLEdBQUcsT0FBTywrQkFBK0IsMEJBQTBCLGlDQUFpQyxHQUFHLFdBQVcsK0JBQStCLEdBQUcsV0FBVyx3QkFBd0Isc0JBQXNCLHFCQUFxQixtQkFBbUIsR0FBRywrQkFBK0IsV0FBVyxxQ0FBcUMsc0JBQXNCLEtBQUssR0FBRyw2QkFBNkIsV0FBVyx3QkFBd0IscUJBQXFCLEtBQUssR0FBRyx5QkFBeUIsZ0JBQWdCLHdCQUF3QixLQUFLLFlBQVksc0JBQXNCLGVBQWUsMkJBQTJCLEtBQUssbUJBQW1CLGlCQUFpQixLQUFLLEdBQUcsUUFBUSxrQkFBa0Isd0JBQXdCLGtDQUFrQyw0QkFBNEIsdUNBQXVDLGdCQUFnQixpQkFBaUIsaUNBQWlDLEdBQUcsY0FBYyxpQkFBaUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsNkJBQTZCLHNCQUFzQix1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3QixxQkFBcUIsR0FBRyx1QkFBdUIsaUJBQWlCLHVCQUF1QixHQUFHLGtCQUFrQiw2QkFBNkIsc0JBQXNCLHVCQUF1QixHQUFHLGFBQWEsa0RBQWtELEdBQUcsaUJBQWlCLDBCQUEwQixtREFBbUQsR0FBRyxjQUFjLGtCQUFrQiw4REFBOEQscUJBQXFCLHdCQUF3QixHQUFHLGdCQUFnQixlQUFlLGdDQUFnQyxpQkFBaUIsMkJBQTJCLG9CQUFvQixHQUFHLGtCQUFrQiwrQkFBK0IsZUFBZSxrREFBa0QsR0FBRyxzQkFBc0IscUJBQXFCLHFCQUFxQixHQUFHLGFBQWEscUJBQXFCLGtCQUFrQixnQkFBZ0Isb0NBQW9DLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0Qix1QkFBdUIsR0FBRywrQkFBK0IsdUJBQXVCLGNBQWMsaUJBQWlCLGtCQUFrQix3QkFBd0Isa0NBQWtDLEdBQUcsbUNBQW1DLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsZUFBZSw4QkFBOEIsR0FBRyw4QkFBOEIsdUJBQXVCLHNCQUFzQixpQkFBaUIsR0FBRyxjQUFjLHVCQUF1QiwwQkFBMEIsb0JBQW9CLEdBQUcseUJBQXlCLGtCQUFrQixvQkFBb0IsZ0JBQWdCLDRCQUE0QixnQkFBZ0IsdUJBQXVCLHVCQUF1QixtQkFBbUIsdUJBQXVCLGVBQWUsaUJBQWlCLGNBQWMsdUJBQXVCLEdBQUcsZ0NBQWdDLGtCQUFrQix1QkFBdUIsY0FBYyxjQUFjLHNCQUFzQixzQkFBc0Isd0JBQXdCLDREQUE0RCxHQUFHLDZCQUE2QixtQkFBbUIsR0FBRyxhQUFhLGdCQUFnQixzQkFBc0IsdUJBQXVCLGtCQUFrQixtQ0FBbUMsR0FBRyw2QkFBNkIsZ0JBQWdCLHVCQUF1QixHQUFHLGtCQUFrQixpQkFBaUIsR0FBRyxVQUFVLHFCQUFxQixtQkFBbUIsbUJBQW1CLDhCQUE4Qix1QkFBdUIsR0FBRyxPQUFPLDRFQUE0RSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxzQ0FBc0MsZUFBZSxjQUFjLHdDQUF3QyxpQkFBaUIsbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLEdBQUcsT0FBTywyQkFBMkIsNEJBQTRCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxNQUFNLHFCQUFxQixHQUFHLE1BQU0scUJBQXFCLEdBQUcsT0FBTywrQkFBK0IsMEJBQTBCLGlDQUFpQyxhQUFhLGlDQUFpQyxLQUFLLEdBQUcsV0FBVyx3QkFBd0Isc0JBQXNCLHFCQUFxQixtQkFBbUIsR0FBRywrQkFBK0IsV0FBVyxxQ0FBcUMsc0JBQXNCLEtBQUssR0FBRywrQkFBK0IsV0FBVyx3QkFBd0IscUJBQXFCLEtBQUssR0FBRywyQkFBMkIsZ0JBQWdCLHdCQUF3QixLQUFLLFVBQVUsc0JBQXNCLGVBQWUsMkJBQTJCLGtCQUFrQixtQkFBbUIsT0FBTyxLQUFLLEdBQUcsVUFBVSxrQkFBa0Isd0JBQXdCLGtDQUFrQyw0QkFBNEIscURBQXFELHVDQUF1QyxnQkFBZ0IsaUJBQWlCLGlDQUFpQyxXQUFXLG1CQUFtQixvQkFBb0IscUNBQXFDLDBCQUEwQiwrQkFBK0Isd0JBQXdCLHlCQUF5QixLQUFLLGtCQUFrQixXQUFXLHFCQUFxQiwyQkFBMkIsT0FBTyxvQkFBb0IsMEJBQTBCLHVCQUF1QixLQUFLLEdBQUcsa0JBQWtCLDZCQUE2QixzQkFBc0IsdUJBQXVCLEdBQUcsV0FBVyxPQUFPLG9EQUFvRCxlQUFlLDhCQUE4Qix1REFBdUQsT0FBTyxLQUFLLEdBQUcsY0FBYyxrQkFBa0IsOERBQThELFdBQVcsaUJBQWlCLGtDQUFrQyxtQkFBbUIsNkJBQTZCLHNCQUFzQixLQUFLLHFCQUFxQix3QkFBd0IsYUFBYSxpQ0FBaUMsaUJBQWlCLG9EQUFvRCx3Q0FBd0MsS0FBSyxpQkFBaUIsdUJBQXVCLHVCQUF1QixLQUFLLEdBQUcsYUFBYSxxQkFBcUIsa0JBQWtCLGdCQUFnQixvQ0FBb0Msa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLHVCQUF1QiwyQkFBMkIseUJBQXlCLGdCQUFnQixtQkFBbUIsb0JBQW9CLDBCQUEwQixvQ0FBb0MsV0FBVyxzQkFBc0IsZ0NBQWdDLDRCQUE0QixPQUFPLEtBQUssU0FBUyxnQ0FBZ0MsS0FBSywwQkFBMEIseUJBQXlCLHdCQUF3QixtQkFBbUIsS0FBSyxHQUFHLGNBQWMsdUJBQXVCLDBCQUEwQixvQkFBb0Isa0JBQWtCLG9CQUFvQixzQkFBc0Isa0JBQWtCLDhCQUE4QixrQkFBa0IseUJBQXlCLHlCQUF5QixxQkFBcUIseUJBQXlCLGlCQUFpQixtQkFBbUIsZ0JBQWdCLHlCQUF5QixLQUFLLHlCQUF5QixvQkFBb0IseUJBQXlCLGdCQUFnQixnQkFBZ0Isd0JBQXdCLHdCQUF3QiwwQkFBMEIsOERBQThELEtBQUssc0JBQXNCLHFCQUFxQixLQUFLLEdBQUcsYUFBYSxnQkFBZ0Isc0JBQXNCLHVCQUF1QixrQkFBa0IsbUNBQW1DLHVCQUF1QixrQkFBa0IseUJBQXlCLEtBQUssY0FBYyxtQkFBbUIsS0FBSyxHQUFHLFVBQVUscUJBQXFCLG1CQUFtQixtQkFBbUIsOEJBQThCLHVCQUF1QixHQUFHLHFCQUFxQjtBQUM3eVQ7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3R5bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogIzUxNDA0NTtcXG59XFxuXFxuZGl2I19fbmV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC0tYWNjZW50LWNvbG9yOiAjN2UwMDAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxufVxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY2FyZC13aWR0aDogODAwcHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtLWd1dHRlcjogMjBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIC0tY2FyZC13aWR0aDogbWluKDEwMCUsIDYwMHB4KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIC0tZ3V0dGVyOiAxMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgZGl2I19fbmV4dCB7XFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgfVxcblxcbiAgLm5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xcbiAgfVxcbiAgLm5hdi5uYXYtaGlkZSB7XFxuICAgIHRvcDogLTYwcHg7XFxuICB9XFxufVxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogbGlnaHRncmV5IDFweCBzb2xpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxufVxcbi5uYXYgPiBkaXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLm5hdiAjaG9tZS1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLm5hdiAjaG9tZS1saW5rIGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5jZW50ZXItY2FyZCB7XFxuICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnBvc3QgYSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcbi5wb3N0IGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLnByZXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygodmFyKC0tY2FyZC13aWR0aCkgLSB2YXIoLS1ndXR0ZXIpKSAqIDMgLyA4KTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG4ucHJldmlldyBpbWcge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcmV2aWV3ID4gZGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1ndXR0ZXIpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuLnByZXZpZXcgZGl2LnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wOiAxcHggbGlnaHRncmV5IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNmb290ZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4jZm9vdGVyID4gZGl2OmZpcnN0LW9mLXR5cGUgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNmb290ZXIgc3ZnIHtcXG4gIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcbiNmb290ZXIgPiBkaXY6bGFzdC1vZi10eXBlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm90dG9tOiAxMjAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xcbn1cXG4udG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG4udG9vbHRpcCAudG9vbHRpcC12aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZG91YmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZG91YmxlIGltZzpmaXJzdC1vZi10eXBlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uZG91YmxlIGZpZ3VyZSB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmNvZGUge1xcbiAgcGFkZGluZzogMnB4IDRweDtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgY29sb3I6ICNjNzI1NGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmMmY0O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUFHRjtBQUZFO0VBQ0UsMEJBQUE7QUFJSjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFBQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSxlQUFBO0VBR0Y7QUFDRjtBQUFBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGNBQUE7RUFFRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxlQUFBO0lBQ0EsUUFBQTtJQUNBLG9CQUFBO0VBRUY7RUFERTtJQUNFLFVBQUE7RUFHSjtBQUNGO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBRUEsa0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBQUY7QUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFLRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUpKO0FBRkk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFJTjs7QUFJQTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUtFO0VBQ0UsNkNBQUE7QUFGSjtBQUdJO0VBQ0UscUJBQUE7RUFDQSw4Q0FBQTtBQUROOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHlEQUFBO0VBU0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVhGO0FBR0U7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBREo7QUFNRTtFQUNFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLDZDQUFBO0FBSko7QUFRRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVBGO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFQSjtBQVFJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFOTjtBQVNFO0VBQ0UseUJBQUE7QUFQSjtBQVVFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFSSjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBVEY7QUFVRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQVJKO0FBVUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0FBUko7QUFVRTtFQUNFLGNBQUE7QUFSSjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBVEY7QUFVRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQVJKO0FBV0U7RUFDRSxZQUFBO0FBVEo7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICM1MTQwNDU7XFxufVxcblxcbmRpdiNfX25leHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtLWFjY2VudC1jb2xvcjogIzdlMDAwMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbiAgJjpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtd2lkdGg6IDgwMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLS1ndXR0ZXI6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtd2lkdGg6IG1pbigxMDAlLCA2MDBweCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAtLWd1dHRlcjogMTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gIGRpdiNfX25leHQge1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIH1cXG4gIC5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcXG4gICAgJi5uYXYtaGlkZSB7XFxuICAgICAgdG9wOiAtNjBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8vIGJveC1zaGFkb3c6IDAgMXB4IDZweCAwIHJnYmEoMzIsIDMsIDM2LCAwLjI4KTtcXG4gIGJvcmRlci1ib3R0b206IGxpZ2h0Z3JleSAxcHggc29saWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbiAgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgI2hvbWUtbGluayB7XFxuICAgIGltZyB7XFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgfVxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcbn1cXG5cXG4uY2VudGVyLWNhcmQge1xcbiAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5wb3N0IHtcXG4gIGEge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGNhbGMoKHZhcigtLWNhcmQtd2lkdGgpIC0gdmFyKC0tZ3V0dGVyKSkgKiAzIC8gOCk7XFxuXFxuICBpbWcge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuXFxuICA+IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1ndXR0ZXIpO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgZ3JleTtcXG4gIH1cXG5cXG4gIGRpdi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB9XFxufVxcblxcbiNmb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGhlaWdodDogMTIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDFweCBsaWdodGdyZXkgc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgPiAqIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gIH1cXG4gIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB9XFxuXFxuICA+IGRpdjpsYXN0LW9mLXR5cGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICBib3R0b206IDMwcHg7XFxuICB9XFxufVxcblxcbi50b29sdGlwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC50b29sdGlwdGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvdHRvbTogMTIwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTQwcHg7XFxuICB9XFxuICAudG9vbHRpcHRleHQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIC50b29sdGlwLXZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLmRvdWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGltZzpmaXJzdC1vZi10eXBlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIH1cXG5cXG4gIGZpZ3VyZSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG59XFxuXFxuY29kZSB7XFxuICBwYWRkaW5nOiAycHggNHB4O1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICBjb2xvcjogI2M3MjU0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWYyZjQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss\n");

/***/ })

})