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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(1);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lib = __webpack_require__(2);

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(3);

var main = {
	bindEvent: function bindEvent() {
		console.log('55555');
		document.querySelector('#btn1').addEventListener('click', function () {
			console.log('666');
			document.querySelector('.div1').innerHTML = _lib2.default.add(1, 4);
		});
		document.querySelector('#btn2').addEventListener('click', function () {
			_lib2.default.ajax({
				type: 'GET',
				url: '/register/hasUser',
				success: function success(data) {
					document.querySelector('.div1').innerHTML = JSON.parse(data).status.msg;
				}
			});
		});
	},
	init: function init() {
		console.log(123);
		this.bindEvent();
	}
};
exports.default = main;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var lib = {
	add: function add(num1, num2) {
		if (num1 === undefined) num1 = 0;
		if (num2 === undefined) num2 = 0;
		return num1 + num2;
	},
	ajax: function () {
		function createxmlHttpRequest() {
			if (window.ActiveXObject) {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} else if (window.XMLHttpRequest) {
				return new XMLHttpRequest();
			}
		};

		function convertData(data) {
			if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === 'object') {
				var convertResult = "";
				for (var c in data) {
					convertResult += c + "=" + data[c] + "&";
				}
				convertResult = convertResult.substring(0, convertResult.length - 1);
				return convertResult;
			} else {
				return data;
			}
		};
		return function () {
			var ajaxData = {
				type: arguments[0].type || "GET",
				url: arguments[0].url || "",
				async: arguments[0].async || "true",
				data: arguments[0].data || null,
				dataType: arguments[0].dataType || "text",
				contentType: arguments[0].contentType || "application/x-www-form-urlencoded",
				beforeSend: arguments[0].beforeSend || function () {},
				success: arguments[0].success || function () {},
				error: arguments[0].error || function () {}
			};
			ajaxData.beforeSend();
			var xhr = createxmlHttpRequest();
			xhr.responseType = ajaxData.dataType;
			xhr.open(ajaxData.type, ajaxData.url + '?' + convertData(ajaxData.data), ajaxData.async);
			xhr.setRequestHeader("Content-Type", ajaxData.contentType);
			xhr.send();
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						ajaxData.success(xhr.response);
					} else {
						ajaxData.error();
					}
				}
			};
		};
	}()
};
exports.default = lib;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);