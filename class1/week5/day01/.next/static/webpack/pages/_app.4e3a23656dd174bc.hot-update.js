"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n  1. Use a more-intuitive box-sizing model.\\n*/\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n/*\\n  2. Remove default margin\\n*/\\n* {\\n  margin: 0;\\n}\\n/*\\n  Typographic tweaks!\\n  3. Add accessible line-height\\n  4. Improve text rendering\\n*/\\nbody {\\n  line-height: 1.5;\\n  -webkit-font-smoothing: antialiased;\\n}\\n/*\\n  5. Improve media defaults\\n*/\\nimg,\\npicture,\\nvideo,\\ncanvas,\\nsvg {\\n  display: block;\\n  max-width: 100%;\\n}\\n/*\\n  6. Remove built-in form typography styles\\n*/\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n/*\\n  7. Avoid text overflows\\n*/\\np,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  overflow-wrap: break-word;\\n}\\n/*\\n  8. Create a root stacking context\\n*/\\n#root,\\n#__next {\\n  isolation: isolate;\\n}\\n\\nhtml {\\n  font-size: 16px;\\n}\\n\\nmain {\\n  height: 100vh;\\n}\\n\\n.square {\\n  background-color: red;\\n  padding: 1rem;\\n  border: 5px solid blue;\\n  font-size: 2rem;\\n  /* font-size 32px */\\n  font-weight: bold;\\n  font-style: italic;\\n  color: #00ff0046;\\n  /* It is span -> display: inline */\\n  display: inline-block;\\n}\\n\\n.nav-list {\\n  display: flex;\\n  flex-direction: column;\\n  list-style: none;\\n  padding: 0px;\\n  justify-content: center;\\n  padding-top: 10px;\\n  padding-bottom: 10px;\\n  gap: 30px;\\n  height: 50vh;\\n}\\n\\n.nav-list li {\\n  background-color: red;\\n}\\n\\n.individual {\\n  align-self: center;\\n}\\n\\n/* .message-incoming {\\n  align-self: start;\\n} */\\n\\n/* .message-outcoming {\\n  align-self: end;\\n} */\\n\\n/* header {\\n  min-height: 50vh;\\n} */\\n\\nli:nth-child(odd) {\\n  align-self: start;\\n}\\n\\nli:nth-child(even) {\\n  align-self: end;\\n}\\n\\n/* CSS GRID */\\n\\n.grid {\\n  display: grid;\\n  grid-gap: 15px;\\n  gap: 15px;\\n  grid-template-columns: repeat(7, 1fr);\\n  grid-template-rows: repeat(5, 1fr);\\n  height: 500px;\\n}\\n\\n.grid-child {\\n  background-color: red;\\n  border: 2px solid blue;\\n  /* height: 100px; */\\n}\\n\\n.child-one {\\n  grid-row: 4;\\n  grid-column: 6;\\n}\\n\\n.child-two {\\n  grid-column: span 7;\\n  grid-row: span 2;\\n}\\n\\n/* Grid-2 page */\\n.grid-2 {\\n  height: 100vh;\\n  background-color: blue;\\n  display: grid;\\n  grid-template-columns: 2fr 5fr;\\n  grid-template-rows: 50px 1fr;\\n}\\n\\n.sidebar {\\n  grid-column: 1;\\n  grid-row: 1 / 3;\\n}\\nheader {\\n  grid-column: 2;\\n  grid-row: 1;\\n  background-color: red;\\n}\\nmain {\\n  grid-column: 2;\\n  grid-row: 2;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;CAEC;AACD;;;EAGE,sBAAsB;AACxB;AACA;;CAEC;AACD;EACE,SAAS;AACX;AACA;;;;CAIC;AACD;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;CAEC;AACD;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;CAEC;AACD;;;;EAIE,aAAa;AACf;AACA;;CAEC;AACD;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;CAEC;AACD;;EAEE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,kCAAkC;EAClC,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;EACjB,oBAAoB;EACpB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;GAEG;;AAEH;;GAEG;;AAEH;;GAEG;;AAEH;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA,aAAa;;AAEb;EACE,aAAa;EACb,cAAS;EAAT,SAAS;EACT,qCAAqC;EACrC,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;AACA;EACE,cAAc;EACd,WAAW;EACX,qBAAqB;AACvB;AACA;EACE,cAAc;EACd,WAAW;AACb\",\"sourcesContent\":[\"/*\\n  1. Use a more-intuitive box-sizing model.\\n*/\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n/*\\n  2. Remove default margin\\n*/\\n* {\\n  margin: 0;\\n}\\n/*\\n  Typographic tweaks!\\n  3. Add accessible line-height\\n  4. Improve text rendering\\n*/\\nbody {\\n  line-height: 1.5;\\n  -webkit-font-smoothing: antialiased;\\n}\\n/*\\n  5. Improve media defaults\\n*/\\nimg,\\npicture,\\nvideo,\\ncanvas,\\nsvg {\\n  display: block;\\n  max-width: 100%;\\n}\\n/*\\n  6. Remove built-in form typography styles\\n*/\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n/*\\n  7. Avoid text overflows\\n*/\\np,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  overflow-wrap: break-word;\\n}\\n/*\\n  8. Create a root stacking context\\n*/\\n#root,\\n#__next {\\n  isolation: isolate;\\n}\\n\\nhtml {\\n  font-size: 16px;\\n}\\n\\nmain {\\n  height: 100vh;\\n}\\n\\n.square {\\n  background-color: red;\\n  padding: 1rem;\\n  border: 5px solid blue;\\n  font-size: 2rem;\\n  /* font-size 32px */\\n  font-weight: bold;\\n  font-style: italic;\\n  color: #00ff0046;\\n  /* It is span -> display: inline */\\n  display: inline-block;\\n}\\n\\n.nav-list {\\n  display: flex;\\n  flex-direction: column;\\n  list-style: none;\\n  padding: 0px;\\n  justify-content: center;\\n  padding-top: 10px;\\n  padding-bottom: 10px;\\n  gap: 30px;\\n  height: 50vh;\\n}\\n\\n.nav-list li {\\n  background-color: red;\\n}\\n\\n.individual {\\n  align-self: center;\\n}\\n\\n/* .message-incoming {\\n  align-self: start;\\n} */\\n\\n/* .message-outcoming {\\n  align-self: end;\\n} */\\n\\n/* header {\\n  min-height: 50vh;\\n} */\\n\\nli:nth-child(odd) {\\n  align-self: start;\\n}\\n\\nli:nth-child(even) {\\n  align-self: end;\\n}\\n\\n/* CSS GRID */\\n\\n.grid {\\n  display: grid;\\n  gap: 15px;\\n  grid-template-columns: repeat(7, 1fr);\\n  grid-template-rows: repeat(5, 1fr);\\n  height: 500px;\\n}\\n\\n.grid-child {\\n  background-color: red;\\n  border: 2px solid blue;\\n  /* height: 100px; */\\n}\\n\\n.child-one {\\n  grid-row: 4;\\n  grid-column: 6;\\n}\\n\\n.child-two {\\n  grid-column: span 7;\\n  grid-row: span 2;\\n}\\n\\n/* Grid-2 page */\\n.grid-2 {\\n  height: 100vh;\\n  background-color: blue;\\n  display: grid;\\n  grid-template-columns: 2fr 5fr;\\n  grid-template-rows: 50px 1fr;\\n}\\n\\n.sidebar {\\n  grid-column: 1;\\n  grid-row: 1 / 3;\\n}\\nheader {\\n  grid-column: 2;\\n  grid-row: 1;\\n  background-color: red;\\n}\\nmain {\\n  grid-column: 2;\\n  grid-row: 2;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSx5SEFBeUgsMkJBQTJCLEdBQUcseUNBQXlDLGNBQWMsR0FBRyxxR0FBcUcscUJBQXFCLHdDQUF3QyxHQUFHLDZFQUE2RSxtQkFBbUIsb0JBQW9CLEdBQUcsMkZBQTJGLGtCQUFrQixHQUFHLHNFQUFzRSw4QkFBOEIsR0FBRyxnRUFBZ0UsdUJBQXVCLEdBQUcsVUFBVSxvQkFBb0IsR0FBRyxVQUFVLGtCQUFrQixHQUFHLGFBQWEsMEJBQTBCLGtCQUFrQiwyQkFBMkIsb0JBQW9CLDhDQUE4Qyx1QkFBdUIscUJBQXFCLGlFQUFpRSxHQUFHLGVBQWUsa0JBQWtCLDJCQUEyQixxQkFBcUIsaUJBQWlCLDRCQUE0QixzQkFBc0IseUJBQXlCLGNBQWMsaUJBQWlCLEdBQUcsa0JBQWtCLDBCQUEwQixHQUFHLGlCQUFpQix1QkFBdUIsR0FBRywwQkFBMEIsc0JBQXNCLElBQUksNkJBQTZCLG9CQUFvQixJQUFJLGlCQUFpQixxQkFBcUIsSUFBSSx5QkFBeUIsc0JBQXNCLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLDZCQUE2QixrQkFBa0IsbUJBQW1CLGNBQWMsMENBQTBDLHVDQUF1QyxrQkFBa0IsR0FBRyxpQkFBaUIsMEJBQTBCLDJCQUEyQixzQkFBc0IsS0FBSyxnQkFBZ0IsZ0JBQWdCLG1CQUFtQixHQUFHLGdCQUFnQix3QkFBd0IscUJBQXFCLEdBQUcsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsa0JBQWtCLG1DQUFtQyxpQ0FBaUMsR0FBRyxjQUFjLG1CQUFtQixvQkFBb0IsR0FBRyxVQUFVLG1CQUFtQixnQkFBZ0IsMEJBQTBCLEdBQUcsUUFBUSxtQkFBbUIsZ0JBQWdCLEdBQUcsU0FBUyx3RkFBd0YsS0FBSyxPQUFPLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssUUFBUSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFNBQVMsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFFBQVEsVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLHdHQUF3RywyQkFBMkIsR0FBRyx5Q0FBeUMsY0FBYyxHQUFHLHFHQUFxRyxxQkFBcUIsd0NBQXdDLEdBQUcsNkVBQTZFLG1CQUFtQixvQkFBb0IsR0FBRywyRkFBMkYsa0JBQWtCLEdBQUcsc0VBQXNFLDhCQUE4QixHQUFHLGdFQUFnRSx1QkFBdUIsR0FBRyxVQUFVLG9CQUFvQixHQUFHLFVBQVUsa0JBQWtCLEdBQUcsYUFBYSwwQkFBMEIsa0JBQWtCLDJCQUEyQixvQkFBb0IsOENBQThDLHVCQUF1QixxQkFBcUIsaUVBQWlFLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLHFCQUFxQixpQkFBaUIsNEJBQTRCLHNCQUFzQix5QkFBeUIsY0FBYyxpQkFBaUIsR0FBRyxrQkFBa0IsMEJBQTBCLEdBQUcsaUJBQWlCLHVCQUF1QixHQUFHLDBCQUEwQixzQkFBc0IsSUFBSSw2QkFBNkIsb0JBQW9CLElBQUksaUJBQWlCLHFCQUFxQixJQUFJLHlCQUF5QixzQkFBc0IsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsNkJBQTZCLGtCQUFrQixjQUFjLDBDQUEwQyx1Q0FBdUMsa0JBQWtCLEdBQUcsaUJBQWlCLDBCQUEwQiwyQkFBMkIsc0JBQXNCLEtBQUssZ0JBQWdCLGdCQUFnQixtQkFBbUIsR0FBRyxnQkFBZ0Isd0JBQXdCLHFCQUFxQixHQUFHLGdDQUFnQyxrQkFBa0IsMkJBQTJCLGtCQUFrQixtQ0FBbUMsaUNBQWlDLEdBQUcsY0FBYyxtQkFBbUIsb0JBQW9CLEdBQUcsVUFBVSxtQkFBbUIsZ0JBQWdCLDBCQUEwQixHQUFHLFFBQVEsbUJBQW1CLGdCQUFnQixHQUFHLHFCQUFxQjtBQUNqMUw7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzPzA2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcbiovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLypcXG4gIDIuIFJlbW92ZSBkZWZhdWx0IG1hcmdpblxcbiovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbi8qXFxuICBUeXBvZ3JhcGhpYyB0d2Vha3MhXFxuICAzLiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcbiAgNC4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcbiovXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbi8qXFxuICA1LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzXFxuKi9cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4vKlxcbiAgNi4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcXG4qL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuLypcXG4gIDcuIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxuKi9cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi8qXFxuICA4LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcXG4qL1xcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxubWFpbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDVweCBzb2xpZCBibHVlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgLyogZm9udC1zaXplIDMycHggKi9cXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6ICMwMGZmMDA0NjtcXG4gIC8qIEl0IGlzIHNwYW4gLT4gZGlzcGxheTogaW5saW5lICovXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBnYXA6IDMwcHg7XFxuICBoZWlnaHQ6IDUwdmg7XFxufVxcblxcbi5uYXYtbGlzdCBsaSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5pbmRpdmlkdWFsIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogLm1lc3NhZ2UtaW5jb21pbmcge1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufSAqL1xcblxcbi8qIC5tZXNzYWdlLW91dGNvbWluZyB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxufSAqL1xcblxcbi8qIGhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiA1MHZoO1xcbn0gKi9cXG5cXG5saTpudGgtY2hpbGQob2RkKSB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxubGk6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLyogQ1NTIEdSSUQgKi9cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDE1cHg7XFxuICBnYXA6IDE1cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gIGhlaWdodDogNTAwcHg7XFxufVxcblxcbi5ncmlkLWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICAvKiBoZWlnaHQ6IDEwMHB4OyAqL1xcbn1cXG5cXG4uY2hpbGQtb25lIHtcXG4gIGdyaWQtcm93OiA0O1xcbiAgZ3JpZC1jb2x1bW46IDY7XFxufVxcblxcbi5jaGlsZC10d28ge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNztcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxufVxcblxcbi8qIEdyaWQtMiBwYWdlICovXFxuLmdyaWQtMiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxIC8gMztcXG59XFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbm1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBRUM7QUFDRDs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7O0NBRUM7QUFDRDtFQUNFLFNBQVM7QUFDWDtBQUNBOzs7O0NBSUM7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7QUFDQTs7Q0FFQztBQUNEOzs7OztFQUtFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7O0NBRUM7QUFDRDs7OztFQUlFLGFBQWE7QUFDZjtBQUNBOztDQUVDO0FBQ0Q7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7QUFDQTs7Q0FFQztBQUNEOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7R0FFRzs7QUFFSDs7R0FFRzs7QUFFSDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsYUFBYTs7QUFFYjtFQUNFLGFBQWE7RUFDYixjQUFTO0VBQVQsU0FBUztFQUNULHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cXG4qL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi8qXFxuICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cXG4qL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4vKlxcbiAgVHlwb2dyYXBoaWMgdHdlYWtzIVxcbiAgMy4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcXG4gIDQuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcXG4qL1xcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG4vKlxcbiAgNS4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcbiovXFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuLypcXG4gIDYuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXFxuKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbi8qXFxuICA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xcbiovXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4vKlxcbiAgOC4gQ3JlYXRlIGEgcm9vdCBzdGFja2luZyBjb250ZXh0XFxuKi9cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmx1ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIC8qIGZvbnQtc2l6ZSAzMnB4ICovXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiAjMDBmZjAwNDY7XFxuICAvKiBJdCBpcyBzcGFuIC0+IGRpc3BsYXk6IGlubGluZSAqL1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgaGVpZ2h0OiA1MHZoO1xcbn1cXG5cXG4ubmF2LWxpc3QgbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaW5kaXZpZHVhbCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIC5tZXNzYWdlLWluY29taW5nIHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn0gKi9cXG5cXG4vKiAubWVzc2FnZS1vdXRjb21pbmcge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbn0gKi9cXG5cXG4vKiBoZWFkZXIge1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG59ICovXFxuXFxubGk6bnRoLWNoaWxkKG9kZCkge1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbmxpOm50aC1jaGlsZChldmVuKSB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi8qIENTUyBHUklEICovXFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTVweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLmdyaWQtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIC8qIGhlaWdodDogMTAwcHg7ICovXFxufVxcblxcbi5jaGlsZC1vbmUge1xcbiAgZ3JpZC1yb3c6IDQ7XFxuICBncmlkLWNvbHVtbjogNjtcXG59XFxuXFxuLmNoaWxkLXR3byB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA3O1xcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcXG59XFxuXFxuLyogR3JpZC0yIHBhZ2UgKi9cXG4uZ3JpZC0yIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbn1cXG5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css\n"));

/***/ })

});