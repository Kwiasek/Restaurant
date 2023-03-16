/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function createNav () {\n    const nav = document.createElement('nav');\n    nav.classList.add('nav');\n    nav.setAttribute('id', 'nav');\n\n    const homeButton = document.createElement('button');\n    homeButton.classList.add('button-nav');\n    homeButton.textContent = 'Home';\n    homeButton.addEventListener('click', (e) => {\n        if(e.target.classList.contains('active')) return;\n        setActiveButton(homeButton);\n    })\n\n    const menuButton = document.createElement('button');\n    menuButton.classList.add('button-nav');\n    menuButton.textContent = 'Menu';\n    menuButton.addEventListener('click', (e) => {\n        if(e.target.classList.contains('active')) return;\n        setActiveButton(menuButton);\n    })\n\n    const contactButton = document.createElement('button');\n    contactButton.classList.add('button-nav');\n    contactButton.textContent = 'Contact';\n    contactButton.addEventListener('click', (e) => {\n        if(e.target.classList.contains('active')) return;\n        setActiveButton(contactButton);\n    })\n    \n    nav.appendChild(homeButton);\n    nav.appendChild(menuButton);\n    nav.appendChild(contactButton);\n\n    return nav;\n}\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll(\".button-nav\");\n  \n    buttons.forEach((button) => {\n      if (button !== this) {\n        button.classList.remove(\"active\");\n      }\n    });\n  \n    button.classList.add(\"active\");\n  }\n\nconst content = document.querySelector('#content');\n\n\ncontent.appendChild(createNav());\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;