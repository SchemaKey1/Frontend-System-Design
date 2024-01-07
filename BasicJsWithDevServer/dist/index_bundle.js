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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_fillHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/fillHtml */ \"./src/fillHtml.js\");\n/* harmony import */ var _src_components_TimerHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/TimerHtml */ \"./src/components/TimerHtml.js\");\n\n\n\n(0,_src_fillHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_src_components_TimerHtml__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n\n//# sourceURL=webpack://basicjswithdevserver/./index.js?");

/***/ }),

/***/ "./src/components/Timer.js":
/*!*********************************!*\
  !*** ./src/components/Timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Timer of 10 sec diff\n\nconst Timer = (callback, time) => {\n  let counter = 1;\n  setInterval(() => {\n    callback(counter++);\n  }, time);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);\n\n\n//# sourceURL=webpack://basicjswithdevserver/./src/components/Timer.js?");

/***/ }),

/***/ "./src/components/TimerHtml.js":
/*!*************************************!*\
  !*** ./src/components/TimerHtml.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timer */ \"./src/components/Timer.js\");\n\n\nconst TimerCallback = (element) => (time) => {\n  element.innerHTML = time;\n};\n\nconst TimerHtml = () => {\n  const divEl = document.createElement(\"div\");\n  const timerEl1 = document.createElement(\"span\");\n  const timerEl2 = document.createElement(\"span\");\n  divEl.appendChild(timerEl1);\n  divEl.appendChild(timerEl2);\n  (0,_Timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(TimerCallback(timerEl1), 1000);\n  (0,_Timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(TimerCallback(timerEl2), 2000);\n  return divEl;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimerHtml);\n\n\n//# sourceURL=webpack://basicjswithdevserver/./src/components/TimerHtml.js?");

/***/ }),

/***/ "./src/fillHtml.js":
/*!*************************!*\
  !*** ./src/fillHtml.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fillHtml = (html) => {\n  document.getElementById(\"root\").appendChild(html);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillHtml);\n\n\n//# sourceURL=webpack://basicjswithdevserver/./src/fillHtml.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;