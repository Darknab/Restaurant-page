/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/config/_reset.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/config/_reset.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  overflow-y: scroll;\n  height: 100%;\n  line-height: var(--line-height-body);\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n}\n\nh1,\nh2,\nh3 {\n  color: var(--color-text-heading);\n  line-height: var(--line-height-headers);\n}\n\nh1 {\n  font-size: var(--font-size-900);\n  font-weight: 900;\n}\n\nh2 {\n  font-size: var(--font-size-800);\n}\n\nh3 {\n  font-size: var(--font-size-700);\n}\n\np {\n  color: var(--color-text-primary)\n}\n\na {\n  color: var(--color-text-primary);\n  text-decoration: none;\n  transition: color 200ms;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: var(--color-text-secondary);\n  }\n}\n\nli {\n  list-style-type: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/stylesheets/config/_reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/config/_variables.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/config/_variables.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  /* Fonts */\n  --font-family-primary: system-ui, sans-serif;\n\n  /* Line heights */\n  --line-height-headers: 1.1;\n  --line-height-body: 1.5;\n  --line-height-cards: 0.9;\n\n  /* Font sizes */\n  --font-size-100: 0.75rem;  \n  --font-size-200: 0.875rem;  \n  --font-size-400: 1rem;      \n  --font-size-500: 1.125rem;\n  --font-size-600: 1.25rem;\n  --font-size-700: 1.5rem;\n  --font-size-800: 2rem; \n  --font-size-900: 2.5rem;\n\n  /* text colors */\n  --color-text-primary: #4A4A4A;\n  --color-text-primary-light: #90BD95;\n  --color-text-secondary: #39DB4A ;\n  --color-text-secondary-light: #5FE26C;\n  --color-text-heading: #000;\n  --color-text-red: #FF6868;\n\n    /* Spacing */\n    --space-100: 0.25rem;\n    --space-200: 0.375rem;\n    --space-300: 0.5rem;\n    --space-400: 0.75rem;\n    --space-500: 1rem;\n    --space-600: 1.5rem;\n    --space-700: 2rem;\n    --space-750:2.5rem;\n    --space-800: 3rem;\n    --space-900: 4rem;\n\n    /* colours */\n    --color-primary: #39DB4A;\n    --color-shadow: rgba(74,74,74,0.3);\n\n    /* shadow */\n    --shadow: 5px 5px 40px 5px var(--color-shadow);\n\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/stylesheets/config/_variables.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_content.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_content.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#content {\n  width: 90%;\n  margin: 3em auto;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/stylesheets/layouts/_content.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_flex_container.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_flex_container.css ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.flex-container {\n  display: flex;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/stylesheets/layouts/_flex_container.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_footer.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_footer.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#footer,\n#credentials {\n  max-width: 80%;\n  margin: 0 auto;\n  margin-top: var(--space-900);\n}\n\n#footer.flex-container {\n  justify-content: space-between;\n}\n\n.footer-text {\n  align-self: center;\n\n  & p {\n    max-width: 300px;\n  }\n}\n\n.footer-menu {\n  flex: 1 1;\n}\n\n.footer-title {\n  font-size: var(--font-size-500);\n}\n\n.footer-title, \n.footer-list li {\n  margin-bottom: var(--space-500);\n}\n\n#credentials {\n  text-align: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/stylesheets/layouts/_footer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_header.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_header.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#header {\n  padding-top: var(--space-300);\n  display: flex;\n  gap: 2em;\n  justify-content: center;\n  background-color: var(--color-primary);\n  \n}\n\nbutton {\n  color: var(--color-text-primary);\n  font-family: var(--font-family-primary) ;\n  font-size: var(--font-size-600);\n  background-color: transparent;\n  padding: var(--space-500) var(--space-700);\n  border-color: transparent;\n  position: relative;\n  border-radius: 15px 15px 0 0;\n  transition: all 200ms ease-in-out;\n  width: 130px;\n}\n\n.active {\n  background-color: white;\n}\n\n.active::before,\n.active::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 30px;\n  bottom: -1px;\n  background-color: var(--color-primary);\n}\n\n.active::before {\n  left: -13%;\n  border-bottom-right-radius: 15px;\n  box-shadow: 0 15px 0 0 white;\n}\n\n.active::after {\n  right: -13%;\n  border-bottom-left-radius: 15px;\n  box-shadow: 0 15px 0 0 white;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/stylesheets/layouts/_header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_hero.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_hero.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n#hero-description {\n  flex: 1 1 45%;\n  align-self: center;\n\n  & h1 {\n    margin-bottom: var(--space-700);\n  }\n\n  & p {\n    width: 80%;\n    font-size: var(--font-size-600);\n    font-weight: 500;\n  }\n}\n\n#hero-image-container {\n  flex: 1 1 30%;\n  position: relative;\n\n}\n\n#food {\n  color: var(--color-text-secondary);\n}\n#green-background {\n  background-color: var(--color-primary);\n  z-index: -1;\n  border-radius: 50%;\n  width: 92%;\n  aspect-ratio: 1 / 1;\n  position: absolute;\n  bottom: 0%;\n  left: 8%;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/stylesheets/layouts/_hero.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_menu.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_menu.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#menu .flex-container {\n  justify-content: space-around;\n}\n\n#menu h2 {\n  margin-bottom: var(--space-700);\n}\n\n.menu-card {\n  max-width: 250px;\n  padding: var(--space-400);\n  border-radius: 15px;\n  box-shadow: var(--shadow);\n  transition: scale 200ms;\n  text-wrap: pretty;\n\n  & h3 {\n    margin-top: var(--space-400);\n    margin-bottom: var(--space-400);\n  }\n\n  &:hover {\n    scale: 1.05;\n  }\n}\n\n.price {\n  margin-top: auto;\n  color: var(--color-text-heading);\n  font-weight: 600;\n  font-size: var(--font-size-600);\n\n  & span {\n    font-size: var(--font-size-400);\n    color: var(--color-text-red);\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/stylesheets/layouts/_menu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_services.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_services.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#services {\n  margin-top: var(--space-900);\n}\n\n.services-description {\n  flex: 1 1 45%;\n  align-self: center;\n\n  & h2 {\n    max-width: 80%;\n  }\n\n  & p {\n    margin-top: var(--space-700);\n    max-width: 80%;\n  }\n}\n\n.services-cards {\n  flex: 1 1 35%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.services-card {\n  text-align: center;\n  padding: var(--space-500);\n  line-height: var(--line-height-cards);\n  border-radius: 15px;\n  margin: var(--space-400) var(--space-700);\n  box-shadow: var(--shadow);\n  & img {\n    margin: 0 auto;\n  }\n\n  & h3 {\n    color: var(--color-text-secondary-light);\n    font-size: var(--font-size-500);\n    margin-top: var(--space-200);\n    margin-bottom: var(--space-200);\n  }\n\n  & p {\n    color: var(--color-text-primary-light);\n    font-size: var(--font-size--200);\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/stylesheets/layouts/_services.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/style.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_config_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./config/_reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/config/_reset.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_config_variables_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./config/_variables.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/config/_variables.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layouts_flex_container_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./layouts/_flex_container.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_flex_container.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layouts_content_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./layouts/_content.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_content.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layouts_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./layouts/_header.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_header.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layouts_hero_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./layouts/_hero.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_hero.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layouts_menu_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./layouts/_menu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_menu.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layouts_services_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./layouts/_services.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_services.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layouts_footer_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./layouts/_footer.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/layouts/_footer.css\");\n// Imports\n\n\n\n\n\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_config_reset_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_config_variables_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layouts_flex_container_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layouts_content_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layouts_header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layouts_hero_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layouts_menu_css__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layouts_services_css__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layouts_footer_css__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* config */\n\n/* Layouts */`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/stylesheets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/stylesheets/style.css":
/*!******************************************!*\
  !*** ./src/assets/stylesheets/style.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/stylesheets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   credentials: () => (/* binding */ credentials),\n/* harmony export */   footer: () => (/* binding */ footer)\n/* harmony export */ });\nconst footer = document.createElement('div');\nfooter.id = 'footer';\nfooter.classList.add('flex-container');\n\nconst footerText = document.createElement('div');\nfooterText.classList.add('footer-text');\n\nconst footerPara = document.createElement('p');\nfooterPara.textContent = 'Savor the artistry where ervery dish is a culinary masterpiece';\n\nfooterText.appendChild(footerPara);\n\nfooter.appendChild(footerText);\n\nclass Menu {\n  constructor(title, list) {\n    this.title = title;\n    this.list = list;\n  }\n}\n\nconst usefulLinks = new Menu;\nusefulLinks.title = 'Useful links';\nusefulLinks.list = ['About us', 'Events', 'Blogs', 'FAQ'];\n\nconst mainMenu = new Menu;\nmainMenu.title = 'Main menu';\nmainMenu.list = ['Home', 'Offers', 'Menus', 'Reservation'];\n\nconst contactUs = new Menu;\ncontactUs.title = 'Contact us';\ncontactUs.list = ['example@email.com', '+111 555 55 555', 'Social Media'];\n\nconst menus = [usefulLinks, mainMenu, contactUs];\n\nmenus.forEach(element => {\n  const footerMenu = document.createElement('div');\n  footerMenu.classList.add('footer-menu');\n\n  const footerTitle = document.createElement('h3');\n  footerTitle.classList.add('footer-title');\n  footerTitle.textContent = element.title;\n\n  const footerList = document.createElement('ul');\n  footerList.classList.add('footer-list');\n\n  footerList.appendChild(footerTitle);\n  \n  element.list.forEach(link => {\n    const li = document.createElement('li');\n\n    const a = document.createElement('a');\n    a.href = '#';\n    a.textContent = link;\n\n    li.appendChild(a);\n    footerList.appendChild(li);\n  })\n\n  footer.appendChild(footerList);\n});\n\nconst credentials = document.createElement('div');\ncredentials.id = 'credentials';\n\nconst darknab = document.createElement('p');\nconst darknabGithub = document.createElement('a');\ndarknabGithub.href = 'https://github.com/Darknab';\ndarknabGithub.textContent = 'Nabil Negadi';\ndarknabGithub.target = \"_blank\";\n\nconst theOdinProject = document.createElement('a');\ntheOdinProject.href = 'https://www.theodinproject.com/lessons/javascript-restaurant-page';\ntheOdinProject.textContent = 'The Odin Project';\ntheOdinProject.target = \"_blank\";\n\nconst span = document.createElement('span');\nspan.textContent = ' for ';\n\ndarknab.textContent = 'Made by ';\ndarknab.append(darknabGithub, span, theOdinProject);\n\ncredentials.appendChild(darknab);\n\nconst design = document.createElement('p');\nconst dsCode = document.createElement('a');\ndsCode.href = \"https://www.figma.com/community/file/1277277072882405551\";\ndsCode.textContent = \"DS code\";\ndsCode.target = \"_blank\";\n\ndesign.textContent = \"Design inspired (shamelessly copied) from \";\ndesign.appendChild(dsCode);\n\ncredentials.appendChild(design);\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   header: () => (/* binding */ header)\n/* harmony export */ });\nconst header = document.createElement('div');\nheader.id = 'header';\n\nconst homeBtn = document.createElement('button');\nhomeBtn.id = 'home-btn';\nhomeBtn.classList.add('active');\nhomeBtn.textContent = 'Home';\n\nconst menuBtn = document.createElement('button');\nmenuBtn.id = 'menu-btn';\nmenuBtn.textContent = 'Menu';\n\nconst servicesBtn = document.createElement('button');\nservicesBtn.id = 'services-btn';\nservicesBtn.textContent = 'Services';\n\nheader.append(homeBtn, menuBtn, servicesBtn);\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hero: () => (/* binding */ hero)\n/* harmony export */ });\n/* harmony import */ var _src_assets_images_Intersect_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/images/Intersect.png */ \"./src/assets/images/Intersect.png\");\n\n\n\n  const hero = document.createElement('div');\n  hero.id = 'hero';\n  hero.classList.add('flex-container');\n\n  const heroDescription = document.createElement('div');\n  heroDescription.id = 'hero-description';\n\n  const title = document.createElement('h1');\n  title.textContent = 'Dive into delights of delectable ';\n  const food = document.createElement('span');\n  food.id = 'food';\n  food.textContent = 'food';\n  title.appendChild(food);\n\n  const heroText = document.createElement('p');\n  heroText.textContent = 'Where each plate weaves a story of culinary mastery and passionate craftsmanship';\n\n  heroDescription.append(title, heroText);\n\n  const heroImageContainer = document.createElement('div');\n  heroImageContainer.id = 'hero-image-container';\n\n  const heroImage = new Image();\n  heroImage.src = _src_assets_images_Intersect_png__WEBPACK_IMPORTED_MODULE_0__;\n  heroImage.alt = \"a woman who delights in the scents of the dishes she holds in her hands\";\n\n  const heroGreenBackground = document.createElement('div');\n  heroGreenBackground.id = 'green-background';\n\n  heroImageContainer.append(heroImage, heroGreenBackground);\n\n  hero.append(heroDescription, heroImageContainer);\n\n  \n\n\n//# sourceURL=webpack://restaurant-page/./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_stylesheets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/stylesheets/style.css */ \"./src/assets/stylesheets/style.css\");\n/* harmony import */ var _src_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/header */ \"./src/header.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ \"./src/services.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\n\nconst content = document.querySelector('#content');\n\ndocument.body.prepend(_src_header__WEBPACK_IMPORTED_MODULE_1__.header);\n\ncontent.appendChild(_hero__WEBPACK_IMPORTED_MODULE_2__.hero);\n\ndocument.body.append(_footer__WEBPACK_IMPORTED_MODULE_5__.footer, _footer__WEBPACK_IMPORTED_MODULE_5__.credentials);\n\naddEventListener('click', (e) => {\n  switch (e.target.id) {\n    case 'home-btn': {\n      const homeBtn = document.querySelector('#home-btn');\n      activateTab(homeBtn);\n      clearContent();\n      content.appendChild(_hero__WEBPACK_IMPORTED_MODULE_2__.hero);\n      break;\n    }\n    case 'menu-btn': {\n      const menuBtn = document.querySelector('#menu-btn');\n      activateTab(menuBtn);\n      clearContent();\n      content.appendChild(_menu__WEBPACK_IMPORTED_MODULE_3__.menu);\n      break;\n    }\n    case 'services-btn': {\n      const servicesBtn = document.querySelector('#services-btn');\n      activateTab(servicesBtn);\n      clearContent();\n      content.appendChild(_services__WEBPACK_IMPORTED_MODULE_4__.services);\n      break;\n    }\n  }\n});\n\nfunction checkActiveTab() {\n  const active = document.querySelector('.active');\n  return active;\n}\n\nfunction activateTab(tab) {\n  const active = checkActiveTab()\n  if (active.id === tab.id) {\n    return;\n  } else {\n    active.classList.toggle('active');\n    tab.classList.toggle('active');\n  }\n}\n\nfunction clearContent() {\n  const content = document.querySelector('#content');\n  content.innerHTML = \"\";\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _src_assets_images_Fattoush_salad_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/images/Fattoush-salad.png */ \"./src/assets/images/Fattoush-salad.png\");\n/* harmony import */ var _src_assets_images_Vegetable_salad_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/images/Vegetable-salad.png */ \"./src/assets/images/Vegetable-salad.png\");\n/* harmony import */ var _src_assets_images_Egg_salad_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/assets/images/Egg-salad.png */ \"./src/assets/images/Egg-salad.png\");\n\n\n\n\nconst menu = document.createElement('div');\nmenu.id = 'menu';\n\nconst menuTitle = document.createElement('h2');\nmenuTitle.textContent = 'Standout dishes from our menu';\n\nconst flexContainer = document.createElement('div');\nflexContainer.classList.add('flex-container');\n\nclass Dish {\n  constructor(image, title, description, price){\n    this.image = image;\n    this.title = title;\n    this.description = description;\n    this.price = price;\n  }\n}\n\nconst fattoush = new Dish;\nfattoush.image = _src_assets_images_Fattoush_salad_png__WEBPACK_IMPORTED_MODULE_0__;\nfattoush.title = 'Fattoush salad';\nfattoush.description = 'Fattoush salad is a vibrant and refreshing Middle Eastern dish that features a colorful medley of crisp vegetables, Fattoush is not only visually appealing but also offers a lightand satisfying combination of textures and tastes.';\nfattoush.price = '24.00';\n\nconst vegetable = new Dish;\nvegetable.image = _src_assets_images_Vegetable_salad_png__WEBPACK_IMPORTED_MODULE_1__;\nvegetable.title = 'Vegetable salad';\nvegetable.description = 'A classic vegetable salad is a wholesome medleyof fresh, raw vegetables, offering a burst of colors, flavors, and nutrients.It includes crisp lettuce or mixed greens, juicy tomatoes, crunchy cucumbers, vibrant bell peppers, and slices of red onion.';\nvegetable.price = '26.00';\n\nconst egg = new Dish;\negg.image = _src_assets_images_Egg_salad_png__WEBPACK_IMPORTED_MODULE_2__;\negg.title = 'Egg salad';\negg.description = \"Egg salad is a delightful and creamy dish made by combining hard-boiled eggs with a savory dressing. It's a simple yet satisfying dish that showcases the natural goodness of eggs with a delicious blend of complementary flavors.\";\negg.price = '23.00';\n\nconst dishes = [fattoush, vegetable, egg];\n\ndishes.forEach(dish => {\n  const menuCard = document.createElement('div');\n  menuCard.classList.add('menu-card');\n\n  const img = new Image();\n  img.src = dish.image;\n\n  const dishTitle = document.createElement('h3');\n  dishTitle.classList = 'dish-title';\n  dishTitle.textContent = dish.title;\n\n  const dishDescription = document.createElement('p');\n  dishDescription.classList.add('dish-description');\n  dishDescription.textContent = dish.description;\n\n  const dishPrice = document.createElement('p');\n  dishPrice.classList.add('price');\n  const dollar = document.createElement('span');\n  dollar.textContent = '$';\n  dishPrice.textContent = dish.price;\n  dishPrice.prepend(dollar);\n\n  menuCard.append(img, dishTitle, dishDescription, dishPrice);\n\n  flexContainer.appendChild(menuCard);\n});\n\nmenu.append(menuTitle, flexContainer);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   services: () => (/* binding */ services)\n/* harmony export */ });\n/* harmony import */ var _src_assets_images_fi_rr_salad_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/images/fi-rr-salad.png */ \"./src/assets/images/fi-rr-salad.png\");\n/* harmony import */ var _src_assets_images_fi_rr_time_fast_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/images/fi-rr-time-fast.png */ \"./src/assets/images/fi-rr-time-fast.png\");\n/* harmony import */ var _src_assets_images_fi_rr_shopping_cart_check_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/assets/images/fi-rr-shopping-cart-check.png */ \"./src/assets/images/fi-rr-shopping-cart-check.png\");\n/* harmony import */ var _src_assets_images_fi_rr_gift_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/assets/images/fi-rr-gift.png */ \"./src/assets/images/fi-rr-gift.png\");\n\n\n\n\n\nconst services = document.createElement('div');\nservices.id = 'services';\nservices.classList.add('flex-container');\n\nconst servicesDescription = document.createElement('div');\nservicesDescription.classList = 'services-description';\n\nconst descriptionTitle = document.createElement('h2');\ndescriptionTitle.textContent = 'Our culinary journey and services';\n\nconst descriptionText = document.createElement('p');\ndescriptionText.textContent = 'Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.';\n\nservicesDescription.append(descriptionTitle, descriptionText);\n\nconst servicesCards = document.createElement('div');\nservicesCards.classList.add('services-cards');\n\nclass Card {\n  constructor(image, title, description) {\n    this.image = image;\n    this.title = title;\n    this.description = description;\n  }\n}\n\nconst catering = new Card;\ncatering.image = _src_assets_images_fi_rr_salad_png__WEBPACK_IMPORTED_MODULE_0__;\ncatering.title = 'Catering';\ncatering.description = 'Delight your guest with our flavours and presentation';\n\nconst delivery = new Card;\ndelivery.image = _src_assets_images_fi_rr_time_fast_png__WEBPACK_IMPORTED_MODULE_1__;\ndelivery.title = 'Fast delivery';\ndelivery.description = 'We deliver your order promptly to your door';\n\nconst ordering = new Card;\nordering.image = _src_assets_images_fi_rr_shopping_cart_check_png__WEBPACK_IMPORTED_MODULE_2__;\nordering.title = 'Online ordering';\nordering.description = 'Explore menu & order with ease using our online ordering';\n\nconst giftCard = new Card;\ngiftCard.image = _src_assets_images_fi_rr_gift_png__WEBPACK_IMPORTED_MODULE_3__;\ngiftCard.title = 'Gift Cards';\ngiftCard.description = 'Give the gift of exceptional dining with our gift cards';\n\nconst cards = [catering, delivery, ordering, giftCard];\n\ncards.forEach(element => {\n  const servicesCard = document.createElement('div');\n  servicesCard.classList.add('services-card');\n\n  const cardImage = new Image();\n  cardImage.src = element.image;\n\n  const cardTitle = document.createElement('h3');\n  cardTitle.classList.add('services-title');\n  cardTitle.textContent = element.title;\n\n  const cardDescription = document.createElement('p');\n  cardDescription.classList.add('services-description');\n  cardDescription.textContent = element.description;\n\n  servicesCard.append(cardImage, cardTitle, cardDescription);\n\n  servicesCards.appendChild(servicesCard);\n});\n\nservices.append(servicesDescription, servicesCards);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/services.js?");

/***/ }),

/***/ "./src/assets/images/Egg-salad.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Egg-salad.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5adac3338f04b316b9e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Egg-salad.png?");

/***/ }),

/***/ "./src/assets/images/Fattoush-salad.png":
/*!**********************************************!*\
  !*** ./src/assets/images/Fattoush-salad.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"791a07470e4153f3e439.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Fattoush-salad.png?");

/***/ }),

/***/ "./src/assets/images/Intersect.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Intersect.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b91f29a80eae3685b23d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Intersect.png?");

/***/ }),

/***/ "./src/assets/images/Vegetable-salad.png":
/*!***********************************************!*\
  !*** ./src/assets/images/Vegetable-salad.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"953d5f409bc5f975e007.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Vegetable-salad.png?");

/***/ }),

/***/ "./src/assets/images/fi-rr-gift.png":
/*!******************************************!*\
  !*** ./src/assets/images/fi-rr-gift.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2e14cc6839cb679ad5c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/fi-rr-gift.png?");

/***/ }),

/***/ "./src/assets/images/fi-rr-salad.png":
/*!*******************************************!*\
  !*** ./src/assets/images/fi-rr-salad.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1605105f34e14c2d33c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/fi-rr-salad.png?");

/***/ }),

/***/ "./src/assets/images/fi-rr-shopping-cart-check.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/fi-rr-shopping-cart-check.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"657d21b6f25aa27c0ceb.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/fi-rr-shopping-cart-check.png?");

/***/ }),

/***/ "./src/assets/images/fi-rr-time-fast.png":
/*!***********************************************!*\
  !*** ./src/assets/images/fi-rr-time-fast.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cc68b260b5952882f100.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/fi-rr-time-fast.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;