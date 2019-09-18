/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\nconst contact= ()=> {\n  document.getElementById('menu').classList.remove('selected');\n  document.getElementById('contact').classList.add('selected');\n\n  const tabContent = document.getElementById('tab-content');\n  tabContent.classList.remove('menu-continer');\n\n  tabContent.innerHTML = '';\n  const form = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form');\n  form.appendChild(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', 'Email:'));\n  form.appendChild(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input'));\n  form.appendChild(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', 'Name:'));\n  form.appendChild(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input'));\n  form.appendChild(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', 'title:'));\n  form.appendChild(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input'));\n  form.appendChild(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', 'Content:'));\n  form.appendChild(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('textarea'));\n  const submitButton = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input');\n  submitButton.setAttribute('value', 'submit');\n  submitButton.setAttribute('type', 'submit');\n  form.appendChild(submitButton);\n  tabContent.append(form);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createElement(type, value = null) {\n  const node = document.createElement(type);\n  if (value !== null) {\n    const textNode = document.createTextNode(value);\n    node.appendChild(textNode);\n  }\n  return node;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page-load */ \"./src/initial-page-load.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nObject(_initial_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\ndocument.getElementById('menu').addEventListener('click', () => Object(_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\ndocument.getElementById('contact').addEventListener('click', () => Object(_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initial-page-load.js":
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\nconst initlizePage = () => {\n  const root = document.getElementById('content');\n\n  root.innerHTML = '';\n  const h1Node = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'Welcome to the restaurant page !');\n\n  const navbarElements = ['menu', 'contact'];\n  const navbarElementsIDs = ['menu', 'contact'];\n\n  const ulNode = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul');\n\n  navbarElements.forEach((text, index) => {\n    const liNode = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', text);\n    liNode.setAttribute('id', navbarElementsIDs[index]);\n    ulNode.appendChild(liNode);\n  });\n\n  ulNode.classList.add('navbar');\n\n  const divNode = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div');\n  divNode.setAttribute('id', 'tab-content');\n\n  root.appendChild(h1Node);\n  root.appendChild(ulNode);\n  root.appendChild(divNode);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (initlizePage);\n\n//# sourceURL=webpack:///./src/initial-page-load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\nconst menuItems = {\n  'main dishes': {\n    items: {\n      'Dish name 1': 10,\n      'Dish name 2': 10,\n      'Dish name 3': 10,\n      'Dish name 4': 10,\n      'Dish name 5': 10,\n      'Dish name 6': 10,\n      'Dish name 7': 10,\n      'Dish name 8': 10,\n    },\n  },\n  Sides: {\n    items: {\n      'Dish name 1': 10,\n      'Dish name 2': 10,\n      'Dish name 3': 10,\n      'Dish name 4': 10,\n      'Dish name 5': 10,\n      'Dish name 6': 10,\n      'Dish name 7': 10,\n      'Dish name 8': 10,\n    },\n  },\n  Drinks: {\n    items: {\n      'Dish name 1': 10,\n      'Dish name 2': 10,\n      'Dish name 3': 10,\n      'Dish name 4': 10,\n      'Dish name 5': 10,\n      'Dish name 6': 10,\n      'Dish name 7': 10,\n      'Dish name 8': 10,\n    },\n  },\n  Desserts: {\n    items: {\n      'Dish name 1': 10,\n      'Dish name 2': 10,\n      'Dish name 3': 10,\n      'Dish name 4': 10,\n      'Dish name 5': 10,\n      'Dish name 6': 10,\n      'Dish name 7': 10,\n      'Dish name 8': 10,\n    },\n  },\n};\n\nconst menu=()=> {\n  document.getElementById('menu').classList.add('selected');\n  document.getElementById('contact').classList.remove('selected');\n\n  const tabContent = document.getElementById('tab-content');\n  tabContent.classList.add('menu-continer');\n\n  tabContent.innerHTML = '';\n  Object.keys(menuItems).forEach((subListe) => {\n    const ulNode = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul');\n    ulNode.setAttribute('class', 'menuList');\n    ulNode.appendChild(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', subListe));\n    Object.keys(menuItems[subListe].items).forEach(\n      (item) => {\n        ulNode.appendChild(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', `${item} : $ ${menuItems[subListe].items[item]}`));\n      },\n    );\n    tabContent.appendChild(ulNode);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });