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

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = () => {\n    const main = document.createElement('main');\n    main.setAttribute('id', 'main');\n    \n    const div = document.createElement('div');\n    div.textContent = 'Hello im contact'\n    main.appendChild(div);\n\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = () => {\n    const main = document.createElement('main');\n    main.setAttribute('id', 'main');\n\n    const div = document.createElement('div');\n    div.textContent = 'Hello im home'\n    main.appendChild(div);\n\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant/./src/components/home.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const main = document.createElement('main');\n    main.setAttribute('id', 'main');\n    \n    const div = document.createElement('div');\n    div.textContent = 'Hello im menu'\n    main.appendChild(div);\n\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant/./src/components/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n\n\n\n\nfunction createNav() {\n  const nav = document.createElement('nav');\n\n  const logo = document.createElement('a');\n  logo.classList.add('nav-logo');\n  logo.textContent = 'Restaurant';\n  nav.appendChild(logo);\n\n  const div = document.createElement('div');\n  \n  const homeButton = document.createElement('button');\n  homeButton.textContent = 'Home';\n  homeButton.addEventListener('click', () => {\n    const main = document.querySelector('#main');\n    if (main) {\n      content.removeChild(content.childNodes[2])\n      content.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    }\n    else {\n      content.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    }\n  })\n\n  const menuButton = document.createElement('button');\n  menuButton.textContent = 'Menu';\n  menuButton.addEventListener('click', () => {\n    const main = document.querySelector('#main');\n    if (main) {\n      content.removeChild(content.childNodes[2])\n      content.appendChild((0,_components_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    }\n    else {\n      content.appendChild((0,_components_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    }\n  })\n\n  const contactButton = document.createElement('button');\n  contactButton.textContent = 'Contact';\n  contactButton.addEventListener('click', () => {\n    const main = document.querySelector('#main');\n    if (main) {\n      content.removeChild(content.childNodes[2])\n      content.appendChild((0,_components_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    }\n    else {\n      content.appendChild((0,_components_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    }\n  })\n\n\n  div.appendChild(homeButton);\n  div.appendChild(menuButton);\n  div.appendChild(contactButton);\n\n  nav.appendChild(div);\n\n  return nav;\n}\n\nconst content = document.querySelector('#content');\n\ncontent.appendChild(createNav());\ncontent.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;