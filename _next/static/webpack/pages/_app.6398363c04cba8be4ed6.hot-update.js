webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./style.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\n\\nh2 {\\n  font-weight: 500;\\n}\\n\\nh3 {\\n  font-weight: 500;\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n  }\\n}\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n}\\n.nav > div {\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: var(--card-width);\\n  margin-left: 10px;\\n  margin-right: 10px;\\n}\\n.nav #home-link {\\n  display: flex;\\n  align-items: center;\\n  font-size: 1.5em;\\n}\\n.nav #home-link img {\\n  height: 30px;\\n  margin-right: 10px;\\n}\\n\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n  }\\n  .nav.nav-hide {\\n    top: -60px;\\n  }\\n}\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - 20px) * 3 / 8);\\n  margin-top: 40px;\\n  margin-bottom: 40px;\\n}\\n.preview img {\\n  width: 50%;\\n  background-color: lightcyan;\\n  height: 100%;\\n  object-fit: scale-down;\\n}\\n.preview > div {\\n  margin-left: 20px;\\n  width: 50%;\\n  border-bottom: 1px dashed grey;\\n}\\n.preview div.blurb {\\n  color: grey;\\n}\\n.preview div.title {\\n  font-size: 1.5em;\\n  font-weight: 500;\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.double img {\\n  width: 100%;\\n  margin-left: 10px;\\n}\\n.double figure {\\n  margin: 10px;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n}\\na:hover {\\n  text-decoration: underline;\\n}\\n\\n#footer {\\n  width: 100%;\\n  height: 100px;\\n  fill: var(--accent-color);\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n}\\n\\n.tooltip .tooltiptext {\\n  display: none;\\n  font-size: 14px;\\n  width: 120px;\\n  background-color: black;\\n  color: #fff;\\n  text-align: center;\\n  border-radius: 6px;\\n  padding: 5px 0;\\n  position: absolute;\\n  z-index: 1;\\n  bottom: 150%;\\n  left: 50%;\\n  margin-left: -60px;\\n}\\n\\n.tooltip .tooltiptext::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: black transparent transparent transparent;\\n}\\n\\n.tooltip .tooltip-visible {\\n  display: block;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://style.scss\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAA;EACA,SAAA;EACA,8IAAA;AACF;;AAIA;EACE,sBAAA;EACA,uBAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAGA;EACE,gBAAA;AAAF;;AAEA;EACE,gBAAA;AACF;;AAIA;EACE,mBAAA;EACA,iBAAA;AADF;;AAIA;EACE;IACE,8BAAA;IACA,eAAA;EADF;AACF;AAIA;EACE;IACE,iBAAA;EAFF;AACF;AAKA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,uBAAA;EAEA,kCAAA;EACA,WAAA;EACA,YAAA;EACA,0BAAA;AAJF;AAKE;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,wBAAA;EACA,iBAAA;EACA,kBAAA;AAHJ;AAME;EAKE,aAAA;EACA,mBAAA;EACA,gBAAA;AARJ;AAEI;EACE,YAAA;EACA,kBAAA;AAAN;;AAQA;EACE;IACE,iBAAA;EALF;;EAOA;IACE,eAAA;IACA,QAAA;IACA,oBAAA;EAJF;EAKE;IACE,UAAA;EAHJ;AACF;AAOA;EACE,wBAAA;EACA,iBAAA;EACA,kBAAA;AALF;;AAQA;EACE,aAAA;EACA,gDAAA;EAQA,gBAAA;EACA,mBAAA;AAZF;AAKE;EACE,UAAA;EACA,2BAAA;EACA,YAAA;EACA,sBAAA;AAHJ;AAQE;EACE,iBAAA;EACA,UAAA;EAEA,8BAAA;AAPJ;AAUE;EACE,WAAA;AARJ;AAWE;EACE,gBAAA;EACA,gBAAA;AATJ;;AAaA;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;AAVF;AAWE;EACE,WAAA;EACA,iBAAA;AATJ;AAYE;EACE,YAAA;AAVJ;;AAcA;EACE,0BAAA;EACA,qBAAA;EACA,0BAAA;AAXF;AAYE;EACE,0BAAA;AAVJ;;AAcA;EACE,WAAA;EACA,aAAA;EACA,yBAAA;EACA,+BAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAXF;;AAeA;EACE,kBAAA;EACA,qBAAA;EACA,eAAA;AAZF;;AAeA;EAEE,aAAA;EACA,eAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;AAbF;;AAgBA;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uDAAA;AAbF;;AAgBA;EAEE,cAAA;AAdF\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,\\n    Helvetica Neue, sans-serif;\\n\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000; \\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\nh2 {\\n  font-weight: 500;\\n}\\nh3 {\\n  font-weight: 500;\\n}\\n\\n\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n  }\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  // box-shadow: 0 1px 6px 0 rgba(32, 3, 36, 0.28);\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: 'Lora', serif;\\n  > div {\\n    height: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: var(--card-width);\\n    margin-left: 10px;\\n    margin-right: 10px;\\n  }\\n\\n  #home-link {\\n    img {\\n      height: 30px;\\n      margin-right: 10px;\\n    }\\n    display: flex;\\n    align-items: center;\\n    font-size: 1.5em;\\n  }\\n}\\n\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n    &.nav-hide {\\n      top: -60px;\\n    }\\n  }\\n}\\n\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - 20px) * 3 / 8);\\n\\n  img {\\n    width: 50%;\\n    background-color: lightcyan;\\n    height: 100%;\\n    object-fit: scale-down;\\n  }\\n  margin-top: 40px;\\n  margin-bottom: 40px;\\n\\n  > div {\\n    margin-left: 20px;\\n    width: 50%;\\n    // border-bottom: 1px dotted #7e0000;\\n    border-bottom: 1px dashed grey;\\n  }\\n\\n  div.blurb {\\n    color: grey;\\n  }\\n\\n  div.title {\\n    font-size: 1.5em;\\n    font-weight: 500;\\n  }\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  img {\\n    width: 100%;\\n    margin-left: 10px;\\n  }\\n\\n  figure {\\n    margin: 10px;\\n  }\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: 'Lora', serif;\\n  &:hover {\\n    text-decoration: underline;\\n  }\\n}\\n\\n#footer {\\n  width: 100%;\\n  height: 100px;\\n  fill: var(--accent-color);\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n}\\n\\n.tooltip .tooltiptext {\\n  // visibility: hidden;\\n  display: none;\\n  font-size: 14px;\\n  width: 120px;\\n  background-color: black;\\n  color: #fff;\\n  text-align: center;\\n  border-radius: 6px;\\n  padding: 5px 0;\\n  position: absolute;\\n  z-index: 1;\\n  bottom: 150%;\\n  left: 50%;\\n  margin-left: -60px;\\n}\\n\\n.tooltip .tooltiptext::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: black transparent transparent transparent;\\n}\\n\\n.tooltip .tooltip-visible {\\n  // visibility: visible;\\n  display: block;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUuc2Nzcz85MDEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhGO0FBQzlGLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxnQkFBZ0IsZUFBZSxjQUFjLG1KQUFtSixHQUFHLE9BQU8sMkJBQTJCLDRCQUE0QixHQUFHLFFBQVEscUJBQXFCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFdBQVcsd0JBQXdCLHNCQUFzQixHQUFHLCtCQUErQixXQUFXLHFDQUFxQyxzQkFBc0IsS0FBSyxHQUFHLDZCQUE2QixXQUFXLHdCQUF3QixLQUFLLEdBQUcsUUFBUSxrQkFBa0Isd0JBQXdCLGtDQUFrQyw0QkFBNEIsdUNBQXVDLGdCQUFnQixpQkFBaUIsaUNBQWlDLEdBQUcsY0FBYyxpQkFBaUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsNkJBQTZCLHNCQUFzQix1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3QixxQkFBcUIsR0FBRyx1QkFBdUIsaUJBQWlCLHVCQUF1QixHQUFHLDJCQUEyQixnQkFBZ0Isd0JBQXdCLEtBQUssWUFBWSxzQkFBc0IsZUFBZSwyQkFBMkIsS0FBSyxtQkFBbUIsaUJBQWlCLEtBQUssR0FBRyxnQkFBZ0IsNkJBQTZCLHNCQUFzQix1QkFBdUIsR0FBRyxjQUFjLGtCQUFrQixxREFBcUQscUJBQXFCLHdCQUF3QixHQUFHLGdCQUFnQixlQUFlLGdDQUFnQyxpQkFBaUIsMkJBQTJCLEdBQUcsa0JBQWtCLHNCQUFzQixlQUFlLG1DQUFtQyxHQUFHLHNCQUFzQixnQkFBZ0IsR0FBRyxzQkFBc0IscUJBQXFCLHFCQUFxQixHQUFHLGFBQWEsZ0JBQWdCLHNCQUFzQix1QkFBdUIsa0JBQWtCLG1DQUFtQyxHQUFHLGVBQWUsZ0JBQWdCLHNCQUFzQixHQUFHLGtCQUFrQixpQkFBaUIsR0FBRyxPQUFPLCtCQUErQiwwQkFBMEIs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Z0Isc0JBQXNCLHVCQUF1QixrQkFBa0IsbUNBQW1DLFNBQVMsa0JBQWtCLHdCQUF3QixLQUFLLGNBQWMsbUJBQW1CLEtBQUssR0FBRyxPQUFPLCtCQUErQiwwQkFBMEIsK0JBQStCLGFBQWEsaUNBQWlDLEtBQUssR0FBRyxhQUFhLGdCQUFnQixrQkFBa0IsOEJBQThCLG9DQUFvQyxrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLGdCQUFnQix1QkFBdUIsMEJBQTBCLG9CQUFvQixHQUFHLDJCQUEyQiwwQkFBMEIsa0JBQWtCLG9CQUFvQixpQkFBaUIsNEJBQTRCLGdCQUFnQix1QkFBdUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsZUFBZSxpQkFBaUIsY0FBYyx1QkFBdUIsR0FBRyxrQ0FBa0Msa0JBQWtCLHVCQUF1QixjQUFjLGNBQWMsc0JBQXNCLHNCQUFzQix3QkFBd0IsNERBQTRELEdBQUcsK0JBQStCLDJCQUEyQixtQkFBbUIsR0FBRyxxQkFBcUI7QUFDMXhQO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLS1hY2NlbnQtY29sb3I6ICM3ZTAwMDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY2FyZC13aWR0aDogODAwcHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIC0tY2FyZC13aWR0aDogbWluKDEwMCUsIDYwMHB4KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICB9XFxufVxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogbGlnaHRncmV5IDFweCBzb2xpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxufVxcbi5uYXYgPiBkaXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLm5hdiAjaG9tZS1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLm5hdiAjaG9tZS1saW5rIGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICBkaXYjX19uZXh0IHtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XFxuICB9XFxuICAubmF2Lm5hdi1oaWRlIHtcXG4gICAgdG9wOiAtNjBweDtcXG4gIH1cXG59XFxuLmNlbnRlci1jYXJkIHtcXG4gIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJldmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBjYWxjKCh2YXIoLS1jYXJkLXdpZHRoKSAtIDIwcHgpICogMyAvIDgpO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi5wcmV2aWV3IGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG59XFxuLnByZXZpZXcgPiBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBncmV5O1xcbn1cXG4ucHJldmlldyBkaXYuYmx1cmIge1xcbiAgY29sb3I6IGdyZXk7XFxufVxcbi5wcmV2aWV3IGRpdi50aXRsZSB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmRvdWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmRvdWJsZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmRvdWJsZSBmaWd1cmUge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxufVxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNmb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZmlsbDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlci10b3A6IDFweCBsaWdodGdyZXkgc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGJvdHRvbTogMTUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcXG59XFxuXFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRvb2x0aXAgLnRvb2x0aXAtdmlzaWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSw4SUFBQTtBQUNGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSw4QkFBQTtJQUNBLGVBQUE7RUFERjtBQUNGO0FBSUE7RUFDRTtJQUNFLGlCQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUVBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUpGO0FBS0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1FO0VBS0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQUVJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQU47O0FBUUE7RUFDRTtJQUNFLGlCQUFBO0VBTEY7O0VBT0E7SUFDRSxlQUFBO0lBQ0EsUUFBQTtJQUNBLG9CQUFBO0VBSkY7RUFLRTtJQUNFLFVBQUE7RUFISjtBQUNGO0FBT0E7RUFDRSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQVFBLGdCQUFBO0VBQ0EsbUJBQUE7QUFaRjtBQUtFO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBSEo7QUFRRTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0FBUEo7QUFVRTtFQUNFLFdBQUE7QUFSSjtBQVdFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQVRKOztBQWFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFWRjtBQVdFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBVEo7QUFZRTtFQUNFLFlBQUE7QUFWSjs7QUFjQTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQVhGO0FBWUU7RUFDRSwwQkFBQTtBQVZKOztBQWNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFYRjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBWkY7O0FBZUE7RUFFRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFiRjs7QUFnQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0FBYkY7O0FBZ0JBO0VBRUUsY0FBQTtBQWRGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLFxcbiAgICBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG5cXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLS1hY2NlbnQtY29sb3I6ICM3ZTAwMDA7IFxcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5oMiB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5oMyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtd2lkdGg6IDgwMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtd2lkdGg6IG1pbigxMDAlLCA2MDBweCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgfVxcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8vIGJveC1zaGFkb3c6IDAgMXB4IDZweCAwIHJnYmEoMzIsIDMsIDM2LCAwLjI4KTtcXG4gIGJvcmRlci1ib3R0b206IGxpZ2h0Z3JleSAxcHggc29saWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xcbiAgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgI2hvbWUtbGluayB7XFxuICAgIGltZyB7XFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgfVxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgZGl2I19fbmV4dCB7XFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgfVxcbiAgLm5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xcbiAgICAmLm5hdi1oaWRlIHtcXG4gICAgICB0b3A6IC02MHB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5jZW50ZXItY2FyZCB7XFxuICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnByZXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygodmFyKC0tY2FyZC13aWR0aCkgLSAyMHB4KSAqIDMgLyA4KTtcXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgfVxcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuXFxuICA+IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICM3ZTAwMDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgZ3JleTtcXG4gIH1cXG5cXG4gIGRpdi5ibHVyYiB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgfVxcblxcbiAgZGl2LnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIH1cXG59XFxuXFxuLmRvdWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIH1cXG5cXG4gIGZpZ3VyZSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xcbiAgJjpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXItdG9wOiAxcHggbGlnaHRncmV5IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuLnRvb2x0aXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcbiAgLy8gdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3R0b206IDE1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTYwcHg7XFxufVxcblxcbi50b29sdGlwIC50b29sdGlwdGV4dDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50b29sdGlwIC50b29sdGlwLXZpc2libGUge1xcbiAgLy8gdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss\n");

/***/ })

})