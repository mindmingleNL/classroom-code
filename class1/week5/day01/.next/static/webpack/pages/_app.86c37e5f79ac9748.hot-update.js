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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n  1. Use a more-intuitive box-sizing model.\\n*/\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n/*\\n  2. Remove default margin\\n*/\\n* {\\n  margin: 0;\\n}\\n/*\\n  Typographic tweaks!\\n  3. Add accessible line-height\\n  4. Improve text rendering\\n*/\\nbody {\\n  line-height: 1.5;\\n  -webkit-font-smoothing: antialiased;\\n}\\n/*\\n  5. Improve media defaults\\n*/\\nimg,\\npicture,\\nvideo,\\ncanvas,\\nsvg {\\n  display: block;\\n  max-width: 100%;\\n}\\n/*\\n  6. Remove built-in form typography styles\\n*/\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n/*\\n  7. Avoid text overflows\\n*/\\np,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  overflow-wrap: break-word;\\n}\\n/*\\n  8. Create a root stacking context\\n*/\\n#root,\\n#__next {\\n  isolation: isolate;\\n}\\n\\nhtml {\\n  font-size: 16px;\\n}\\n\\nmain {\\n  height: 100vh;\\n}\\n\\n.square {\\n  background-color: red;\\n  padding: 1rem;\\n  border: 5px solid blue;\\n  font-size: 2rem;\\n  /* font-size 32px */\\n  font-weight: bold;\\n  font-style: italic;\\n  color: #00ff0046;\\n  /* It is span -> display: inline */\\n  display: inline-block;\\n}\\n\\n.nav-list {\\n  display: flex;\\n  flex-direction: column;\\n  list-style: none;\\n  padding: 0px;\\n  justify-content: center;\\n  padding-top: 10px;\\n  padding-bottom: 10px;\\n  gap: 30px;\\n  height: 50vh;\\n}\\n\\n.nav-list li {\\n  background-color: red;\\n}\\n\\n.individual {\\n  align-self: center;\\n}\\n\\n/* .message-incoming {\\n  align-self: start;\\n} */\\n\\n/* .message-outcoming {\\n  align-self: end;\\n} */\\n\\n/* header {\\n  min-height: 50vh;\\n} */\\n\\nli:nth-child(odd) {\\n  align-self: start;\\n}\\n\\nli:nth-child(even) {\\n  align-self: end;\\n}\\n\\n/* CSS GRID */\\n\\n.grid {\\n  display: grid;\\n  grid-gap: 15px;\\n  gap: 15px;\\n  grid-template-columns: repeat(7, 1fr);\\n  grid-template-rows: repeat(5, 1fr);\\n  height: 500px;\\n}\\n\\n.grid-child {\\n  background-color: red;\\n  border: 2px solid blue;\\n  /* height: 100px; */\\n}\\n\\n.child-one {\\n  grid-row: 4;\\n  grid-column: 6;\\n}\\n\\n.child-two {\\n  grid-column: span 7;\\n  grid-row: span 2;\\n}\\n\\n/* Grid-2 page */\\n.grid-2 {\\n  height: 100vh;\\n  background-color: blue;\\n  display: grid;\\n  grid-template-columns: 2fr 5fr;\\n  grid-template-rows: 50px 1fr;\\n  grid-template-areas:\\n    \\\"header header\\\"\\n    \\\"sidebar main\\\";\\n}\\n\\n.sidebar {\\n  grid-area: sidebar;\\n  background-color: green;\\n}\\nheader {\\n  grid-area: header;\\n  background-color: red;\\n}\\nmain {\\n  grid-area: main;\\n  background-color: hotpink;\\n}\\n\\n/* Grid-3 Page */\\n.grid-3 {\\n  height: 500px;\\n  display: grid;\\n  grid-template-columns: repeat(6, 1fr);\\n  grid-template-rows: 2fr 1fr;\\n  grid-gap: 10px;\\n  gap: 10px;\\n  padding: 10px;\\n  /* grid-template-areas:\\n    \\\"header header\\\"\\n    \\\"sidebar main\\\"; */\\n}\\n\\n.grid-3 div {\\n  background-color: red;\\n  border: 1px solid blue;\\n  /* height: 10px; */\\n}\\n\\n.grid-3-child-1,\\n.grid-3-child-2 {\\n  grid-column: span 3;\\n}\\n\\n.grid-3-child-3,\\n.grid-3-child-4,\\n.grid-3-child-5 {\\n  grid-column: span 2;\\n}\\n\\n@media screen and (max-width: 480px) {\\n  .grid-3-child-1,\\n  .grid-3-child-2 {\\n    grid-column: span 6;\\n  }\\n\\n  .grid-3-child-3,\\n  .grid-3-child-4,\\n  .grid-3-child-5 {\\n    grid-column: span 2;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;CAEC;AACD;;;EAGE,sBAAsB;AACxB;AACA;;CAEC;AACD;EACE,SAAS;AACX;AACA;;;;CAIC;AACD;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;CAEC;AACD;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;CAEC;AACD;;;;EAIE,aAAa;AACf;AACA;;CAEC;AACD;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;CAEC;AACD;;EAEE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,kCAAkC;EAClC,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;EACjB,oBAAoB;EACpB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;GAEG;;AAEH;;GAEG;;AAEH;;GAEG;;AAEH;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA,aAAa;;AAEb;EACE,aAAa;EACb,cAAS;EAAT,SAAS;EACT,qCAAqC;EACrC,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;EAC5B;;kBAEgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,aAAa;EACb,qCAAqC;EACrC,2BAA2B;EAC3B,cAAS;EAAT,SAAS;EACT,aAAa;EACb;;qBAEmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;EACE;;IAEE,mBAAmB;EACrB;;EAEA;;;IAGE,mBAAmB;EACrB;AACF\",\"sourcesContent\":[\"/*\\n  1. Use a more-intuitive box-sizing model.\\n*/\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n/*\\n  2. Remove default margin\\n*/\\n* {\\n  margin: 0;\\n}\\n/*\\n  Typographic tweaks!\\n  3. Add accessible line-height\\n  4. Improve text rendering\\n*/\\nbody {\\n  line-height: 1.5;\\n  -webkit-font-smoothing: antialiased;\\n}\\n/*\\n  5. Improve media defaults\\n*/\\nimg,\\npicture,\\nvideo,\\ncanvas,\\nsvg {\\n  display: block;\\n  max-width: 100%;\\n}\\n/*\\n  6. Remove built-in form typography styles\\n*/\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n/*\\n  7. Avoid text overflows\\n*/\\np,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  overflow-wrap: break-word;\\n}\\n/*\\n  8. Create a root stacking context\\n*/\\n#root,\\n#__next {\\n  isolation: isolate;\\n}\\n\\nhtml {\\n  font-size: 16px;\\n}\\n\\nmain {\\n  height: 100vh;\\n}\\n\\n.square {\\n  background-color: red;\\n  padding: 1rem;\\n  border: 5px solid blue;\\n  font-size: 2rem;\\n  /* font-size 32px */\\n  font-weight: bold;\\n  font-style: italic;\\n  color: #00ff0046;\\n  /* It is span -> display: inline */\\n  display: inline-block;\\n}\\n\\n.nav-list {\\n  display: flex;\\n  flex-direction: column;\\n  list-style: none;\\n  padding: 0px;\\n  justify-content: center;\\n  padding-top: 10px;\\n  padding-bottom: 10px;\\n  gap: 30px;\\n  height: 50vh;\\n}\\n\\n.nav-list li {\\n  background-color: red;\\n}\\n\\n.individual {\\n  align-self: center;\\n}\\n\\n/* .message-incoming {\\n  align-self: start;\\n} */\\n\\n/* .message-outcoming {\\n  align-self: end;\\n} */\\n\\n/* header {\\n  min-height: 50vh;\\n} */\\n\\nli:nth-child(odd) {\\n  align-self: start;\\n}\\n\\nli:nth-child(even) {\\n  align-self: end;\\n}\\n\\n/* CSS GRID */\\n\\n.grid {\\n  display: grid;\\n  gap: 15px;\\n  grid-template-columns: repeat(7, 1fr);\\n  grid-template-rows: repeat(5, 1fr);\\n  height: 500px;\\n}\\n\\n.grid-child {\\n  background-color: red;\\n  border: 2px solid blue;\\n  /* height: 100px; */\\n}\\n\\n.child-one {\\n  grid-row: 4;\\n  grid-column: 6;\\n}\\n\\n.child-two {\\n  grid-column: span 7;\\n  grid-row: span 2;\\n}\\n\\n/* Grid-2 page */\\n.grid-2 {\\n  height: 100vh;\\n  background-color: blue;\\n  display: grid;\\n  grid-template-columns: 2fr 5fr;\\n  grid-template-rows: 50px 1fr;\\n  grid-template-areas:\\n    \\\"header header\\\"\\n    \\\"sidebar main\\\";\\n}\\n\\n.sidebar {\\n  grid-area: sidebar;\\n  background-color: green;\\n}\\nheader {\\n  grid-area: header;\\n  background-color: red;\\n}\\nmain {\\n  grid-area: main;\\n  background-color: hotpink;\\n}\\n\\n/* Grid-3 Page */\\n.grid-3 {\\n  height: 500px;\\n  display: grid;\\n  grid-template-columns: repeat(6, 1fr);\\n  grid-template-rows: 2fr 1fr;\\n  gap: 10px;\\n  padding: 10px;\\n  /* grid-template-areas:\\n    \\\"header header\\\"\\n    \\\"sidebar main\\\"; */\\n}\\n\\n.grid-3 div {\\n  background-color: red;\\n  border: 1px solid blue;\\n  /* height: 10px; */\\n}\\n\\n.grid-3-child-1,\\n.grid-3-child-2 {\\n  grid-column: span 3;\\n}\\n\\n.grid-3-child-3,\\n.grid-3-child-4,\\n.grid-3-child-5 {\\n  grid-column: span 2;\\n}\\n\\n@media screen and (max-width: 480px) {\\n  .grid-3-child-1,\\n  .grid-3-child-2 {\\n    grid-column: span 6;\\n  }\\n\\n  .grid-3-child-3,\\n  .grid-3-child-4,\\n  .grid-3-child-5 {\\n    grid-column: span 2;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSx5SEFBeUgsMkJBQTJCLEdBQUcseUNBQXlDLGNBQWMsR0FBRyxxR0FBcUcscUJBQXFCLHdDQUF3QyxHQUFHLDZFQUE2RSxtQkFBbUIsb0JBQW9CLEdBQUcsMkZBQTJGLGtCQUFrQixHQUFHLHNFQUFzRSw4QkFBOEIsR0FBRyxnRUFBZ0UsdUJBQXVCLEdBQUcsVUFBVSxvQkFBb0IsR0FBRyxVQUFVLGtCQUFrQixHQUFHLGFBQWEsMEJBQTBCLGtCQUFrQiwyQkFBMkIsb0JBQW9CLDhDQUE4Qyx1QkFBdUIscUJBQXFCLGlFQUFpRSxHQUFHLGVBQWUsa0JBQWtCLDJCQUEyQixxQkFBcUIsaUJBQWlCLDRCQUE0QixzQkFBc0IseUJBQXlCLGNBQWMsaUJBQWlCLEdBQUcsa0JBQWtCLDBCQUEwQixHQUFHLGlCQUFpQix1QkFBdUIsR0FBRywwQkFBMEIsc0JBQXNCLElBQUksNkJBQTZCLG9CQUFvQixJQUFJLGlCQUFpQixxQkFBcUIsSUFBSSx5QkFBeUIsc0JBQXNCLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLDZCQUE2QixrQkFBa0IsbUJBQW1CLGNBQWMsMENBQTBDLHVDQUF1QyxrQkFBa0IsR0FBRyxpQkFBaUIsMEJBQTBCLDJCQUEyQixzQkFBc0IsS0FBSyxnQkFBZ0IsZ0JBQWdCLG1CQUFtQixHQUFHLGdCQUFnQix3QkFBd0Is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QUcsUUFBUSxvQkFBb0IsOEJBQThCLEdBQUcsZ0NBQWdDLGtCQUFrQixrQkFBa0IsMENBQTBDLGdDQUFnQyxjQUFjLGtCQUFrQiwwRUFBMEUsS0FBSyxpQkFBaUIsMEJBQTBCLDJCQUEyQixxQkFBcUIsS0FBSyx1Q0FBdUMsd0JBQXdCLEdBQUcseURBQXlELHdCQUF3QixHQUFHLDBDQUEwQyx5Q0FBeUMsMEJBQTBCLEtBQUssK0RBQStELDBCQUEwQixLQUFLLEdBQUcscUJBQXFCO0FBQzNyUDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/MDZhYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4gIDEuIFVzZSBhIG1vcmUtaW50dWl0aXZlIGJveC1zaXppbmcgbW9kZWwuXFxuKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4vKlxcbiAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXFxuKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLypcXG4gIFR5cG9ncmFwaGljIHR3ZWFrcyFcXG4gIDMuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XFxuICA0LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxuKi9cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuLypcXG4gIDUuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcXG4qL1xcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi8qXFxuICA2LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcbiovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG4vKlxcbiAgNy4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXG4qL1xcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuLypcXG4gIDguIENyZWF0ZSBhIHJvb3Qgc3RhY2tpbmcgY29udGV4dFxcbiovXFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsdWU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICAvKiBmb250LXNpemUgMzJweCAqL1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogIzAwZmYwMDQ2O1xcbiAgLyogSXQgaXMgc3BhbiAtPiBkaXNwbGF5OiBpbmxpbmUgKi9cXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGdhcDogMzBweDtcXG4gIGhlaWdodDogNTB2aDtcXG59XFxuXFxuLm5hdi1saXN0IGxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmluZGl2aWR1YWwge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiAubWVzc2FnZS1pbmNvbWluZyB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59ICovXFxuXFxuLyogLm1lc3NhZ2Utb3V0Y29taW5nIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59ICovXFxuXFxuLyogaGVhZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxufSAqL1xcblxcbmxpOm50aC1jaGlsZChvZGQpIHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG5saTpudGgtY2hpbGQoZXZlbikge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4vKiBDU1MgR1JJRCAqL1xcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMTVweDtcXG4gIGdhcDogMTVweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLmdyaWQtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIC8qIGhlaWdodDogMTAwcHg7ICovXFxufVxcblxcbi5jaGlsZC1vbmUge1xcbiAgZ3JpZC1yb3c6IDQ7XFxuICBncmlkLWNvbHVtbjogNjtcXG59XFxuXFxuLmNoaWxkLXR3byB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA3O1xcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcXG59XFxuXFxuLyogR3JpZC0yIHBhZ2UgKi9cXG4uZ3JpZC0yIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcInNpZGViYXIgbWFpblxcXCI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcXG59XFxuXFxuLyogR3JpZC0zIFBhZ2UgKi9cXG4uZ3JpZC0zIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG4gIGdyaWQtZ2FwOiAxMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwic2lkZWJhciBtYWluXFxcIjsgKi9cXG59XFxuXFxuLmdyaWQtMyBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gIC8qIGhlaWdodDogMTBweDsgKi9cXG59XFxuXFxuLmdyaWQtMy1jaGlsZC0xLFxcbi5ncmlkLTMtY2hpbGQtMiB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAzO1xcbn1cXG5cXG4uZ3JpZC0zLWNoaWxkLTMsXFxuLmdyaWQtMy1jaGlsZC00LFxcbi5ncmlkLTMtY2hpbGQtNSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLmdyaWQtMy1jaGlsZC0xLFxcbiAgLmdyaWQtMy1jaGlsZC0yIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gNjtcXG4gIH1cXG5cXG4gIC5ncmlkLTMtY2hpbGQtMyxcXG4gIC5ncmlkLTMtY2hpbGQtNCxcXG4gIC5ncmlkLTMtY2hpbGQtNSB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDO0FBQ0Q7OztFQUdFLHNCQUFzQjtBQUN4QjtBQUNBOztDQUVDO0FBQ0Q7RUFDRSxTQUFTO0FBQ1g7QUFDQTs7OztDQUlDO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDO0FBQ0E7O0NBRUM7QUFDRDs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOztDQUVDO0FBQ0Q7Ozs7RUFJRSxhQUFhO0FBQ2Y7QUFDQTs7Q0FFQztBQUNEOzs7Ozs7O0VBT0UseUJBQXlCO0FBQzNCO0FBQ0E7O0NBRUM7QUFDRDs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0dBRUc7O0FBRUg7O0dBRUc7O0FBRUg7O0dBRUc7O0FBRUg7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGFBQWE7O0FBRWI7RUFDRSxhQUFhO0VBQ2IsY0FBUztFQUFULFNBQVM7RUFDVCxxQ0FBcUM7RUFDckMsa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUI7O2tCQUVnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLGNBQVM7RUFBVCxTQUFTO0VBQ1QsYUFBYTtFQUNiOztxQkFFbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOztJQUVFLG1CQUFtQjtFQUNyQjs7RUFFQTs7O0lBR0UsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG4gIDEuIFVzZSBhIG1vcmUtaW50dWl0aXZlIGJveC1zaXppbmcgbW9kZWwuXFxuKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4vKlxcbiAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXFxuKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLypcXG4gIFR5cG9ncmFwaGljIHR3ZWFrcyFcXG4gIDMuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XFxuICA0LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxuKi9cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuLypcXG4gIDUuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcXG4qL1xcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi8qXFxuICA2LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcbiovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG4vKlxcbiAgNy4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXG4qL1xcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuLypcXG4gIDguIENyZWF0ZSBhIHJvb3Qgc3RhY2tpbmcgY29udGV4dFxcbiovXFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsdWU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICAvKiBmb250LXNpemUgMzJweCAqL1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogIzAwZmYwMDQ2O1xcbiAgLyogSXQgaXMgc3BhbiAtPiBkaXNwbGF5OiBpbmxpbmUgKi9cXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGdhcDogMzBweDtcXG4gIGhlaWdodDogNTB2aDtcXG59XFxuXFxuLm5hdi1saXN0IGxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmluZGl2aWR1YWwge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiAubWVzc2FnZS1pbmNvbWluZyB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59ICovXFxuXFxuLyogLm1lc3NhZ2Utb3V0Y29taW5nIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59ICovXFxuXFxuLyogaGVhZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxufSAqL1xcblxcbmxpOm50aC1jaGlsZChvZGQpIHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG5saTpudGgtY2hpbGQoZXZlbikge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4vKiBDU1MgR1JJRCAqL1xcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDE1cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gIGhlaWdodDogNTAwcHg7XFxufVxcblxcbi5ncmlkLWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICAvKiBoZWlnaHQ6IDEwMHB4OyAqL1xcbn1cXG5cXG4uY2hpbGQtb25lIHtcXG4gIGdyaWQtcm93OiA0O1xcbiAgZ3JpZC1jb2x1bW46IDY7XFxufVxcblxcbi5jaGlsZC10d28ge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNztcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxufVxcblxcbi8qIEdyaWQtMiBwYWdlICovXFxuLmdyaWQtMiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJzaWRlYmFyIG1haW5cXFwiO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XFxufVxcblxcbi8qIEdyaWQtMyBQYWdlICovXFxuLmdyaWQtMyB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJzaWRlYmFyIG1haW5cXFwiOyAqL1xcbn1cXG5cXG4uZ3JpZC0zIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgLyogaGVpZ2h0OiAxMHB4OyAqL1xcbn1cXG5cXG4uZ3JpZC0zLWNoaWxkLTEsXFxuLmdyaWQtMy1jaGlsZC0yIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxufVxcblxcbi5ncmlkLTMtY2hpbGQtMyxcXG4uZ3JpZC0zLWNoaWxkLTQsXFxuLmdyaWQtMy1jaGlsZC01IHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuZ3JpZC0zLWNoaWxkLTEsXFxuICAuZ3JpZC0zLWNoaWxkLTIge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiA2O1xcbiAgfVxcblxcbiAgLmdyaWQtMy1jaGlsZC0zLFxcbiAgLmdyaWQtMy1jaGlsZC00LFxcbiAgLmdyaWQtMy1jaGlsZC01IHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css\n"));

/***/ })

});