webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./style.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  min-height: 100%;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\n\\nh2 {\\n  font-weight: 500;\\n}\\n\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n}\\na:hover {\\n  text-decoration: underline;\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n  }\\n}\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n  }\\n  .nav.nav-hide {\\n    top: -60px;\\n  }\\n}\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n}\\n.nav > div {\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: var(--card-width);\\n  margin-left: 10px;\\n  margin-right: 10px;\\n}\\n.nav #home-link {\\n  display: flex;\\n  align-items: center;\\n  font-size: 1.5em;\\n}\\n.nav #home-link img {\\n  height: 30px;\\n  margin-right: 10px;\\n}\\n\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - 20px) * 3 / 8);\\n  margin-top: 40px;\\n  margin-bottom: 40px;\\n}\\n.preview img {\\n  width: 50%;\\n  background-color: lightcyan;\\n  height: 100%;\\n  object-fit: scale-down;\\n}\\n.preview > div {\\n  margin-left: 20px;\\n  width: 50%;\\n  border-bottom: 1px dashed grey;\\n}\\n.preview div.blurb {\\n  color: grey;\\n}\\n.preview div.title {\\n  font-size: 1.5em;\\n  font-weight: 500;\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 100px;\\n  width: 100%;\\n  fill: var(--accent-color);\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n#footer > div {\\n  width: 150px;\\n  fill: var(--accent-color);\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n}\\n.tooltip .tooltiptext {\\n  display: none;\\n  font-size: 14px;\\n  width: 120px;\\n  background-color: black;\\n  color: #fff;\\n  text-align: center;\\n  border-radius: 6px;\\n  padding: 5px 0;\\n  position: absolute;\\n  z-index: 1;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-left: -60px;\\n}\\n.tooltip .tooltiptext::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: black transparent transparent transparent;\\n}\\n.tooltip .tooltip-visible {\\n  display: block;\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.double img {\\n  width: 100%;\\n  margin-left: 10px;\\n}\\n.double figure {\\n  margin: 10px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://style.scss\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAA;EACA,SAAA;EACA,iCAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,2BAAA;EAEA,gBAAA;AAAF;;AAGA;EACE,sBAAA;EACA,uBAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAEA;EACE,gBAAA;AACF;;AACA;EACE,gBAAA;AAEF;;AACA;EACE,0BAAA;EACA,qBAAA;EACA,0BAAA;AAEF;AADE;EACE,0BAAA;AAGJ;;AACA;EACE,mBAAA;EACA,iBAAA;AAEF;;AACA;EACE;IACE,8BAAA;IACA,eAAA;EAEF;AACF;AACA;EACE;IACE,iBAAA;EACF;AACF;AAEA;EACE;IACE,iBAAA;EAAF;;EAEA;IACE,eAAA;IACA,QAAA;IACA,oBAAA;EACF;EAAE;IACE,UAAA;EAEJ;AACF;AAEA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,uBAAA;EAEA,kCAAA;EACA,WAAA;EACA,YAAA;EACA,0BAAA;AADF;AAEE;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,wBAAA;EACA,iBAAA;EACA,kBAAA;AAAJ;AAGE;EAKE,aAAA;EACA,mBAAA;EACA,gBAAA;AALJ;AADI;EACE,YAAA;EACA,kBAAA;AAGN;;AAKA;EACE,wBAAA;EACA,iBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,aAAA;EACA,gDAAA;EAQA,gBAAA;EACA,mBAAA;AATF;AAEE;EACE,UAAA;EACA,2BAAA;EACA,YAAA;EACA,sBAAA;AAAJ;AAKE;EACE,iBAAA;EACA,UAAA;EAEA,8BAAA;AAJJ;AAOE;EACE,WAAA;AALJ;AAQE;EACE,gBAAA;EACA,gBAAA;AANJ;;AAUA;EAGE,gBAAA;EACA,aAAA;EACA,WAAA;EACA,yBAAA;EACA,+BAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;AATF;AAWE;EACE,YAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;AATJ;;AAaA;EACE,kBAAA;EACA,qBAAA;EACA,eAAA;AAVF;AAWE;EACE,aAAA;EACA,eAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;AATJ;AAWE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uDAAA;AATJ;AAWE;EACE,cAAA;AATJ;;AAaA;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;AAVF;AAWE;EACE,WAAA;EACA,iBAAA;AATJ;AAYE;EACE,YAAA;AAVJ\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  // align-items: center\\n  min-height: 100%;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\nh2 {\\n  font-weight: 500;\\n}\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n  &:hover {\\n    text-decoration: underline;\\n  }\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n  }\\n}\\n\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n    &.nav-hide {\\n      top: -60px;\\n    }\\n  }\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  // box-shadow: 0 1px 6px 0 rgba(32, 3, 36, 0.28);\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n  > div {\\n    height: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: var(--card-width);\\n    margin-left: 10px;\\n    margin-right: 10px;\\n  }\\n\\n  #home-link {\\n    img {\\n      height: 30px;\\n      margin-right: 10px;\\n    }\\n    display: flex;\\n    align-items: center;\\n    font-size: 1.5em;\\n  }\\n}\\n\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - 20px) * 3 / 8);\\n\\n  img {\\n    width: 50%;\\n    background-color: lightcyan;\\n    height: 100%;\\n    object-fit: scale-down;\\n  }\\n  margin-top: 40px;\\n  margin-bottom: 40px;\\n\\n  > div {\\n    margin-left: 20px;\\n    width: 50%;\\n    // border-bottom: 1px dotted #7e0000;\\n    border-bottom: 1px dashed grey;\\n  }\\n\\n  div.blurb {\\n    color: grey;\\n  }\\n\\n  div.title {\\n    font-size: 1.5em;\\n    font-weight: 500;\\n  }\\n}\\n\\n#footer {\\n  // position: absolute;\\n  // bottom: 0;\\n  margin-top: auto;\\n  height: 100px;\\n  width: 100%;\\n  fill: var(--accent-color);\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n\\n  > div {\\n    width: 150px;\\n    fill: var(--accent-color);\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n  }\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n  .tooltiptext {\\n    display: none;\\n    font-size: 14px;\\n    width: 120px;\\n    background-color: black;\\n    color: #fff;\\n    text-align: center;\\n    border-radius: 6px;\\n    padding: 5px 0;\\n    position: absolute;\\n    z-index: 1;\\n    bottom: 120%;\\n    left: 50%;\\n    margin-left: -60px;\\n  }\\n  .tooltiptext::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 100%;\\n    left: 50%;\\n    margin-left: -5px;\\n    border-width: 5px;\\n    border-style: solid;\\n    border-color: black transparent transparent transparent;\\n  }\\n  .tooltip-visible {\\n    display: block;\\n  }\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  img {\\n    width: 100%;\\n    margin-left: 10px;\\n  }\\n\\n  figure {\\n    margin: 10px;\\n  }\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUuc2Nzcz85MDEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhGO0FBQzlGLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxnQkFBZ0IsZUFBZSxjQUFjLHdDQUF3QyxpQkFBaUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQixnQ0FBZ0MscUJBQXFCLEdBQUcsT0FBTywyQkFBMkIsNEJBQTRCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFFBQVEscUJBQXFCLEdBQUcsT0FBTywrQkFBK0IsMEJBQTBCLGlDQUFpQyxHQUFHLFdBQVcsK0JBQStCLEdBQUcsV0FBVyx3QkFBd0Isc0JBQXNCLEdBQUcsK0JBQStCLFdBQVcscUNBQXFDLHNCQUFzQixLQUFLLEdBQUcsNkJBQTZCLFdBQVcsd0JBQXdCLEtBQUssR0FBRyx5QkFBeUIsZ0JBQWdCLHdCQUF3QixLQUFLLFlBQVksc0JBQXNCLGVBQWUsMkJBQTJCLEtBQUssbUJBQW1CLGlCQUFpQixLQUFLLEdBQUcsUUFBUSxrQkFBa0Isd0JBQXdCLGtDQUFrQyw0QkFBNEIsdUNBQXVDLGdCQUFnQixpQkFBaUIsaUNBQWlDLEdBQUcsY0FBYyxpQkFBaUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsNkJBQTZCLHNCQUFzQix1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3QixxQkFBcUIsR0FBRyx1QkFBdUIsaUJBQWlCLHVCQUF1QixHQUFHLGtCQUFrQiw2QkFBNkIsc0JBQXNCLHVCQUF1QixHQUFHLGNBQWMsa0JBQWtCLHFEQUFxRCxxQkFBcUIsd0JBQXdCLEdBQUcsZ0JBQWdCLGVBQWUsZ0NBQWdDLGlCQUFpQiwyQkFBMkIsR0FBRyxrQkFBa0Isc0JBQXNCLGVBQWUsbUNBQW1DLEdBQUcsc0JBQXNCLGdCQUFnQixHQUFHLHNCQUFzQixxQkFBcUIscUJBQXFCLEdBQUcsYUFBYSxxQkFBcUIs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eUIsS0FBSyxrQkFBa0IsV0FBVyxxQkFBcUIsMkJBQTJCLE9BQU8sb0JBQW9CLDBCQUEwQix1QkFBdUIsS0FBSyxHQUFHLGtCQUFrQiw2QkFBNkIsc0JBQXNCLHVCQUF1QixHQUFHLGNBQWMsa0JBQWtCLHFEQUFxRCxXQUFXLGlCQUFpQixrQ0FBa0MsbUJBQW1CLDZCQUE2QixLQUFLLHFCQUFxQix3QkFBd0IsYUFBYSx3QkFBd0IsaUJBQWlCLDJDQUEyQyxxQ0FBcUMsS0FBSyxpQkFBaUIsa0JBQWtCLEtBQUssaUJBQWlCLHVCQUF1Qix1QkFBdUIsS0FBSyxHQUFHLGFBQWEsMEJBQTBCLGlCQUFpQixxQkFBcUIsa0JBQWtCLGdCQUFnQiw4QkFBOEIsb0NBQW9DLGtCQUFrQix3QkFBd0Isa0NBQWtDLGFBQWEsbUJBQW1CLGdDQUFnQyxvQkFBb0IsMEJBQTBCLG9DQUFvQyxLQUFLLEdBQUcsY0FBYyx1QkFBdUIsMEJBQTBCLG9CQUFvQixrQkFBa0Isb0JBQW9CLHNCQUFzQixtQkFBbUIsOEJBQThCLGtCQUFrQix5QkFBeUIseUJBQXlCLHFCQUFxQix5QkFBeUIsaUJBQWlCLG1CQUFtQixnQkFBZ0IseUJBQXlCLEtBQUsseUJBQXlCLG9CQUFvQix5QkFBeUIsZ0JBQWdCLGdCQUFnQix3QkFBd0Isd0JBQXdCLDBCQUEwQiw4REFBOEQsS0FBSyxzQkFBc0IscUJBQXFCLEtBQUssR0FBRyxhQUFhLGdCQUFnQixzQkFBc0IsdUJBQXVCLGtCQUFrQixtQ0FBbUMsU0FBUyxrQkFBa0Isd0JBQXdCLEtBQUssY0FBYyxtQkFBbUIsS0FBSyxHQUFHLHVCQUF1QjtBQUMxMFE7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3R5bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmRpdiNfX25leHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtLWFjY2VudC1jb2xvcjogIzdlMDAwMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbn1cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtd2lkdGg6IDgwMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtd2lkdGg6IG1pbigxMDAlLCA2MDBweCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgZGl2I19fbmV4dCB7XFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgfVxcblxcbiAgLm5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xcbiAgfVxcbiAgLm5hdi5uYXYtaGlkZSB7XFxuICAgIHRvcDogLTYwcHg7XFxuICB9XFxufVxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogbGlnaHRncmV5IDFweCBzb2xpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxufVxcbi5uYXYgPiBkaXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLm5hdiAjaG9tZS1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLm5hdiAjaG9tZS1saW5rIGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5jZW50ZXItY2FyZCB7XFxuICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnByZXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygodmFyKC0tY2FyZC13aWR0aCkgLSAyMHB4KSAqIDMgLyA4KTtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG4ucHJldmlldyBpbWcge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxufVxcbi5wcmV2aWV3ID4gZGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgZ3JleTtcXG59XFxuLnByZXZpZXcgZGl2LmJsdXJiIHtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG4ucHJldmlldyBkaXYudGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNmb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXItdG9wOiAxcHggbGlnaHRncmV5IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuI2Zvb3RlciA+IGRpdiB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnRvb2x0aXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3R0b206IDEyMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTYwcHg7XFxufVxcbi50b29sdGlwIC50b29sdGlwdGV4dDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcbi50b29sdGlwIC50b29sdGlwLXZpc2libGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kb3VibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kb3VibGUgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5kb3VibGUgZmlndXJlIHtcXG4gIG1hcmdpbjogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQUVGO0FBREU7RUFDRSwwQkFBQTtBQUdKOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0U7SUFDRSw4QkFBQTtJQUNBLGVBQUE7RUFFRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0U7SUFDRSxpQkFBQTtFQUFGOztFQUVBO0lBQ0UsZUFBQTtJQUNBLFFBQUE7SUFDQSxvQkFBQTtFQUNGO0VBQUU7SUFDRSxVQUFBO0VBRUo7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUVBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQURGO0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBS0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQURJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBR047O0FBS0E7RUFDRSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQVFBLGdCQUFBO0VBQ0EsbUJBQUE7QUFURjtBQUVFO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQUo7QUFLRTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0FBSko7QUFPRTtFQUNFLFdBQUE7QUFMSjtBQVFFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQU5KOztBQVVBO0VBR0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQVRGO0FBV0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQVRKOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFWRjtBQVdFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBVEo7QUFXRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdURBQUE7QUFUSjtBQVdFO0VBQ0UsY0FBQTtBQVRKOztBQWFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFWRjtBQVdFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBVEo7QUFZRTtFQUNFLFlBQUE7QUFWSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuZGl2I19fbmV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC0tYWNjZW50LWNvbG9yOiAjN2UwMDAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5oMiB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5oMyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxuICAmOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxufVxcblxcbjpyb290IHtcXG4gIC0tY2FyZC13aWR0aDogODAwcHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIC0tY2FyZC13aWR0aDogbWluKDEwMCUsIDYwMHB4KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICBkaXYjX19uZXh0IHtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICB9XFxuICAubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XFxuICAgICYubmF2LWhpZGUge1xcbiAgICAgIHRvcDogLTYwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAvLyBib3gtc2hhZG93OiAwIDFweCA2cHggMCByZ2JhKDMyLCAzLCAzNiwgMC4yOCk7XFxuICBib3JkZXItYm90dG9tOiBsaWdodGdyZXkgMXB4IHNvbGlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG4gID4gZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIH1cXG5cXG4gICNob21lLWxpbmsge1xcbiAgICBpbWcge1xcbiAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIH1cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG59XFxuXFxuLmNlbnRlci1jYXJkIHtcXG4gIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJldmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBjYWxjKCh2YXIoLS1jYXJkLXdpZHRoKSAtIDIwcHgpICogMyAvIDgpO1xcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxuICB9XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG5cXG4gID4gZGl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzdlMDAwMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBncmV5O1xcbiAgfVxcblxcbiAgZGl2LmJsdXJiIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICB9XFxuXFxuICBkaXYudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgfVxcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8vIGJvdHRvbTogMDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyLXRvcDogMXB4IGxpZ2h0Z3JleSBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuICA+IGRpdiB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZmlsbDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxufVxcblxcbi50b29sdGlwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC50b29sdGlwdGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3R0b206IDEyMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xcbiAgfVxcbiAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICB9XFxuICAudG9vbHRpcC12aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi5kb3VibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICB9XFxuXFxuICBmaWd1cmUge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss\n");

/***/ })

})