webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./style.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n  color: #514045;\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\n\\nh2 {\\n  font-weight: 500;\\n}\\n\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n}\\na:hover {\\n  text-decoration: underline;\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n  line-height: 1.5;\\n  --gutter: 20px;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n    --gutter: 10px;\\n  }\\n}\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n  }\\n  .nav.nav-hide {\\n    top: -60px;\\n  }\\n}\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n}\\n.nav > div {\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: var(--card-width);\\n  margin-left: 10px;\\n  margin-right: 10px;\\n}\\n.nav #home-link {\\n  display: flex;\\n  align-items: center;\\n  font-size: 1.5em;\\n}\\n.nav #home-link img {\\n  height: 30px;\\n  margin-right: 10px;\\n}\\n\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.post a {\\n  border-bottom: 1px dashed var(--accent-color);\\n}\\n.post a:hover {\\n  text-decoration: none;\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - var(--gutter)) * 3 / 8);\\n  margin-top: 20px;\\n  margin-bottom: 40px;\\n}\\n.preview img {\\n  width: 50%;\\n  background-color: lightcyan;\\n  height: 100%;\\n  object-fit: scale-down;\\n  cursor: pointer;\\n}\\n.preview > div {\\n  margin-left: var(--gutter);\\n  width: 50%;\\n  border-bottom: 1px dashed var(--accent-color);\\n}\\n.preview div.title {\\n  font-size: 1.5em;\\n  font-weight: 500;\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 120px;\\n  width: 100%;\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n}\\n#footer > div:first-of-type {\\n  position: absolute;\\n  top: 40px;\\n  width: 150px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n#footer > div:first-of-type > * {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#footer svg {\\n  fill: var(--accent-color);\\n}\\n#footer > div:last-of-type {\\n  position: absolute;\\n  font-size: 0.7rem;\\n  bottom: 30px;\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n}\\n.tooltip .tooltiptext {\\n  display: none;\\n  font-size: 12px;\\n  width: 80px;\\n  background-color: black;\\n  color: #fff;\\n  text-align: center;\\n  border-radius: 6px;\\n  padding: 5px 0;\\n  position: absolute;\\n  z-index: 1;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-left: -40px;\\n}\\n.tooltip .tooltiptext::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: black transparent transparent transparent;\\n}\\n.tooltip .tooltip-visible {\\n  display: block;\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.double img:first-of-type {\\n  width: 100%;\\n  margin-right: 10px;\\n}\\n.double figure {\\n  margin: 10px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://style.scss\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAA;EACA,SAAA;EACA,iCAAA;EACA,YAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;AACF;;AAEA;EACE,sBAAA;EACA,uBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AACA;EACE,gBAAA;AAEF;;AAAA;EACE,gBAAA;AAGF;;AAAA;EACE,0BAAA;EACA,qBAAA;EACA,0BAAA;AAGF;AAFE;EACE,0BAAA;AAIJ;;AAAA;EACE,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AAGF;;AAAA;EACE;IACE,8BAAA;IACA,eAAA;EAGF;AACF;AAAA;EACE;IACE,iBAAA;IACA,cAAA;EAEF;AACF;AACA;EACE;IACE,iBAAA;EACF;;EACA;IACE,eAAA;IACA,QAAA;IACA,oBAAA;EAEF;EADE;IACE,UAAA;EAGJ;AACF;AACA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,uBAAA;EAEA,kCAAA;EACA,WAAA;EACA,YAAA;EACA,0BAAA;AAAF;AACE;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,wBAAA;EACA,iBAAA;EACA,kBAAA;AACJ;AAEE;EAKE,aAAA;EACA,mBAAA;EACA,gBAAA;AAJJ;AAFI;EACE,YAAA;EACA,kBAAA;AAIN;;AAIA;EACE,wBAAA;EACA,iBAAA;EACA,kBAAA;AADF;;AAKE;EACE,6CAAA;AAFJ;AAGI;EACE,qBAAA;AADN;;AAMA;EACE,aAAA;EACA,yDAAA;EASA,gBAAA;EACA,mBAAA;AAXF;AAGE;EACE,UAAA;EACA,2BAAA;EACA,YAAA;EACA,sBAAA;EACA,eAAA;AADJ;AAME;EACE,0BAAA;EACA,UAAA;EACA,6CAAA;AAJJ;AASE;EACE,gBAAA;EACA,gBAAA;AAPJ;;AAWA;EACE,gBAAA;EACA,aAAA;EACA,WAAA;EACA,+BAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;AARF;AAUE;EACE,kBAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;AARJ;AASI;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AAPN;AAUE;EACE,yBAAA;AARJ;AAWE;EACE,kBAAA;EACA,iBAAA;EACA,YAAA;AATJ;;AAaA;EACE,kBAAA;EACA,qBAAA;EACA,eAAA;AAVF;AAWE;EACE,aAAA;EACA,eAAA;EACA,WAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;AATJ;AAWE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uDAAA;AATJ;AAWE;EACE,cAAA;AATJ;;AAaA;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;AAVF;AAWE;EACE,WAAA;EACA,kBAAA;AATJ;AAYE;EACE,YAAA;AAVJ\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  height: 100%;\\n  color:#514045\\n}\\n\\ndiv#__next {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  --accent-color: #7e0000;\\n}\\n\\nh1 {\\n  font-weight: 500;\\n}\\nh2 {\\n  font-weight: 500;\\n}\\nh3 {\\n  font-weight: 500;\\n}\\n\\na {\\n  color: var(--accent-color);\\n  text-decoration: none;\\n  font-family: \\\"Lora\\\", serif;\\n  &:hover {\\n    text-decoration: underline;\\n  }\\n}\\n\\n:root {\\n  --card-width: 800px;\\n  font-size: 1.1rem;\\n  line-height: 1.5;\\n  --gutter: 20px;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --card-width: min(100%, 600px);\\n    font-size: 1rem;\\n  }\\n}\\n\\n@media (max-width: 500px) {\\n  :root {\\n    font-size: 0.9rem;\\n    --gutter: 10px;\\n  }\\n}\\n\\n@media (hover: hover) {\\n  div#__next {\\n    padding-top: 60px;\\n  }\\n  .nav {\\n    position: fixed;\\n    top: 0px;\\n    transition: top 0.3s;\\n    &.nav-hide {\\n      top: -60px;\\n    }\\n  }\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  background-color: white;\\n  // box-shadow: 0 1px 6px 0 rgba(32, 3, 36, 0.28);\\n  border-bottom: lightgrey 1px solid;\\n  width: 100%;\\n  height: 60px;\\n  font-family: \\\"Lora\\\", serif;\\n  > div {\\n    height: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: var(--card-width);\\n    margin-left: 10px;\\n    margin-right: 10px;\\n  }\\n\\n  #home-link {\\n    img {\\n      height: 30px;\\n      margin-right: 10px;\\n    }\\n    display: flex;\\n    align-items: center;\\n    font-size: 1.5em;\\n  }\\n}\\n\\n.center-card {\\n  width: var(--card-width);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.post {\\n  a {\\n    border-bottom: 1px dashed var(--accent-color);\\n    &:hover {\\n      text-decoration: none;\\n    }\\n  }\\n}\\n\\n.preview {\\n  display: flex;\\n  height: calc((var(--card-width) - var(--gutter)) * 3 / 8);\\n\\n  img {\\n    width: 50%;\\n    background-color: lightcyan;\\n    height: 100%;\\n    object-fit: scale-down;\\n    cursor: pointer;\\n  }\\n  margin-top: 20px;\\n  margin-bottom: 40px;\\n\\n  > div {\\n    margin-left: var(--gutter);\\n    width: 50%;\\n    border-bottom: 1px dashed var(--accent-color);\\n    // border-bottom: 1px dashed grey;\\n  }\\n\\n\\n  div.title {\\n    font-size: 1.5em;\\n    font-weight: 500;\\n  }\\n}\\n\\n#footer {\\n  margin-top: auto;\\n  height: 120px;\\n  width: 100%;\\n  border-top: 1px lightgrey solid;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n\\n  > div:first-of-type {\\n    position: absolute;\\n    top: 40px;\\n    width: 150px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n    > * {\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n    }\\n  }\\n  svg {\\n    fill: var(--accent-color);\\n  }\\n\\n  > div:last-of-type {\\n    position: absolute;\\n    font-size: 0.7rem;\\n    bottom: 30px;\\n  }\\n}\\n\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n  cursor: pointer;\\n  .tooltiptext {\\n    display: none;\\n    font-size: 12px;\\n    width: 80px;\\n    background-color: black;\\n    color: #fff;\\n    text-align: center;\\n    border-radius: 6px;\\n    padding: 5px 0;\\n    position: absolute;\\n    z-index: 1;\\n    bottom: 120%;\\n    left: 50%;\\n    margin-left: -40px;\\n  }\\n  .tooltiptext::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 100%;\\n    left: 50%;\\n    margin-left: -5px;\\n    border-width: 5px;\\n    border-style: solid;\\n    border-color: black transparent transparent transparent;\\n  }\\n  .tooltip-visible {\\n    display: block;\\n  }\\n}\\n\\n.double {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  img:first-of-type {\\n    width: 100%;\\n    margin-right: 10px;\\n  }\\n\\n  figure {\\n    margin: 10px;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUuc2Nzcz85MDEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhGO0FBQzlGLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxnQkFBZ0IsZUFBZSxjQUFjLHdDQUF3QyxpQkFBaUIsbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLEdBQUcsT0FBTywyQkFBMkIsNEJBQTRCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFFBQVEscUJBQXFCLEdBQUcsT0FBTywrQkFBK0IsMEJBQTBCLGlDQUFpQyxHQUFHLFdBQVcsK0JBQStCLEdBQUcsV0FBVyx3QkFBd0Isc0JBQXNCLHFCQUFxQixtQkFBbUIsR0FBRywrQkFBK0IsV0FBVyxxQ0FBcUMsc0JBQXNCLEtBQUssR0FBRyw2QkFBNkIsV0FBVyx3QkFBd0IscUJBQXFCLEtBQUssR0FBRyx5QkFBeUIsZ0JBQWdCLHdCQUF3QixLQUFLLFlBQVksc0JBQXNCLGVBQWUsMkJBQTJCLEtBQUssbUJBQW1CLGlCQUFpQixLQUFLLEdBQUcsUUFBUSxrQkFBa0Isd0JBQXdCLGtDQUFrQyw0QkFBNEIsdUNBQXVDLGdCQUFnQixpQkFBaUIsaUNBQWlDLEdBQUcsY0FBYyxpQkFBaUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsNkJBQTZCLHNCQUFzQix1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3QixxQkFBcUIsR0FBRyx1QkFBdUIsaUJBQWlCLHVCQUF1QixHQUFHLGtCQUFrQiw2QkFBNkIsc0JBQXNCLHVCQUF1QixHQUFHLGFBQWEsa0RBQWtELEdBQUcsaUJBQWlCLDBCQUEwQixHQUFHLGNBQWMsa0JBQWtCLDhEQUE4RCxxQkFBcUIsd0JBQXdCLEdBQUcsZ0JBQWdCLGVBQWUsZ0NBQWdDLGlCQUFpQiwyQkFBMkIsb0JBQW9CLEdBQUcsa0JBQWtCLCtCQUErQixlQUFlLGtEQUFr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QkFBeUIsb0JBQW9CLHlCQUF5QixnQkFBZ0IsZ0JBQWdCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLDhEQUE4RCxLQUFLLHNCQUFzQixxQkFBcUIsS0FBSyxHQUFHLGFBQWEsZ0JBQWdCLHNCQUFzQix1QkFBdUIsa0JBQWtCLG1DQUFtQyx1QkFBdUIsa0JBQWtCLHlCQUF5QixLQUFLLGNBQWMsbUJBQW1CLEtBQUssR0FBRyxxQkFBcUI7QUFDOTNTO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICM1MTQwNDU7XFxufVxcblxcbmRpdiNfX25leHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtLWFjY2VudC1jb2xvcjogIzdlMDAwMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbn1cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtd2lkdGg6IDgwMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLS1ndXR0ZXI6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtd2lkdGg6IG1pbigxMDAlLCA2MDBweCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAtLWd1dHRlcjogMTBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gIGRpdiNfX25leHQge1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcXG4gIH1cXG4gIC5uYXYubmF2LWhpZGUge1xcbiAgICB0b3A6IC02MHB4O1xcbiAgfVxcbn1cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IGxpZ2h0Z3JleSAxcHggc29saWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbn1cXG4ubmF2ID4gZGl2IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5uYXYgI2hvbWUtbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbi5uYXYgI2hvbWUtbGluayBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uY2VudGVyLWNhcmQge1xcbiAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5wb3N0IGEge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG4ucG9zdCBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnByZXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygodmFyKC0tY2FyZC13aWR0aCkgLSB2YXIoLS1ndXR0ZXIpKSAqIDMgLyA4KTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG4ucHJldmlldyBpbWcge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcmV2aWV3ID4gZGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1ndXR0ZXIpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuLnByZXZpZXcgZGl2LnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wOiAxcHggbGlnaHRncmV5IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNmb290ZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4jZm9vdGVyID4gZGl2OmZpcnN0LW9mLXR5cGUgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNmb290ZXIgc3ZnIHtcXG4gIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcbiNmb290ZXIgPiBkaXY6bGFzdC1vZi10eXBlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm90dG9tOiAxMjAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xcbn1cXG4udG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG4udG9vbHRpcCAudG9vbHRpcC12aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZG91YmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZG91YmxlIGltZzpmaXJzdC1vZi10eXBlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uZG91YmxlIGZpZ3VyZSB7XFxuICBtYXJnaW46IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQUdGO0FBRkU7RUFDRSwwQkFBQTtBQUlKOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQUFBO0VBQ0U7SUFDRSw4QkFBQTtJQUNBLGVBQUE7RUFHRjtBQUNGO0FBQUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtFQUVGO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUFDRjs7RUFDQTtJQUNFLGVBQUE7SUFDQSxRQUFBO0lBQ0Esb0JBQUE7RUFFRjtFQURFO0lBQ0UsVUFBQTtFQUdKO0FBQ0Y7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFFQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFBRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFRTtFQUtFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSko7QUFGSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUlOOztBQUlBO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBS0U7RUFDRSw2Q0FBQTtBQUZKO0FBR0k7RUFDRSxxQkFBQTtBQUROOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHlEQUFBO0VBU0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVhGO0FBR0U7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBREo7QUFNRTtFQUNFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLDZDQUFBO0FBSko7QUFTRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFXQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVJGO0FBVUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFSSjtBQVNJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFQTjtBQVVFO0VBQ0UseUJBQUE7QUFSSjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFUSjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBVkY7QUFXRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQVRKO0FBV0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0FBVEo7QUFXRTtFQUNFLGNBQUE7QUFUSjs7QUFhQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBVkY7QUFXRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQVRKO0FBWUU7RUFDRSxZQUFBO0FBVkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjojNTE0MDQ1XFxufVxcblxcbmRpdiNfX25leHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtLWFjY2VudC1jb2xvcjogIzdlMDAwMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbiAgJjpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhcmQtd2lkdGg6IDgwMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLS1ndXR0ZXI6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWNhcmQtd2lkdGg6IG1pbigxMDAlLCA2MDBweCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAtLWd1dHRlcjogMTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gIGRpdiNfX25leHQge1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIH1cXG4gIC5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcXG4gICAgJi5uYXYtaGlkZSB7XFxuICAgICAgdG9wOiAtNjBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8vIGJveC1zaGFkb3c6IDAgMXB4IDZweCAwIHJnYmEoMzIsIDMsIDM2LCAwLjI4KTtcXG4gIGJvcmRlci1ib3R0b206IGxpZ2h0Z3JleSAxcHggc29saWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbiAgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgI2hvbWUtbGluayB7XFxuICAgIGltZyB7XFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgfVxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcbn1cXG5cXG4uY2VudGVyLWNhcmQge1xcbiAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5wb3N0IHtcXG4gIGEge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucHJldmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBjYWxjKCh2YXIoLS1jYXJkLXdpZHRoKSAtIHZhcigtLWd1dHRlcikpICogMyAvIDgpO1xcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcblxcbiAgPiBkaXYge1xcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tZ3V0dGVyKTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGdyZXk7XFxuICB9XFxuXFxuXFxuICBkaXYudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgfVxcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wOiAxcHggbGlnaHRncmV5IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgID4gKiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICB9XFxuICBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgfVxcblxcbiAgPiBkaXY6bGFzdC1vZi10eXBlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgfVxcbn1cXG5cXG4udG9vbHRpcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAudG9vbHRpcHRleHQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3R0b206IDEyMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xcbiAgfVxcbiAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICB9XFxuICAudG9vbHRpcC12aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi5kb3VibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBpbWc6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuXFxuICBmaWd1cmUge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./style.scss\n");

/***/ })

})