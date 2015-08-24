(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-bootstrap"), require("es6-react-mixins"), require("alt-connect"), require("alt"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-bootstrap", "es6-react-mixins", "alt-connect", "alt"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapAlert"] = factory(require("react"), require("react-bootstrap"), require("es6-react-mixins"), require("alt-connect"), require("alt"));
	else
		root["ReactBootstrapAlert"] = factory(root["react"], root["react-bootstrap"], root["es6-react-mixins"], root["alt-connect"], root["alt"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(2);

	var _es6ReactMixins = __webpack_require__(3);

	var _es6ReactMixins2 = _interopRequireDefault(_es6ReactMixins);

	var _altConnect = __webpack_require__(4);

	var _altConnect2 = _interopRequireDefault(_altConnect);

	var _actions = __webpack_require__(5);

	var _actions2 = _interopRequireDefault(_actions);

	var _store = __webpack_require__(8);

	var _store2 = _interopRequireDefault(_store);

	var Alert = (function (_mixin) {
	    _inherits(Alert, _mixin);

	    function Alert() {
	        _classCallCheck(this, Alert);

	        _get(Object.getPrototypeOf(Alert.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Alert, [{
	        key: 'hide',
	        value: function hide() {
	            _actions2['default'].hide();
	        }
	    }, {
	        key: 'show',
	        value: function show(message) {
	            return _actions2['default'].show(message);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                _reactBootstrap.Modal,
	                { 'aria-labelledby': 'contained-modal-title', bsSize: 'small', container: this, onHide: this.hide.bind(this), show: !!this.state.message },
	                _react2['default'].createElement(
	                    _reactBootstrap.Modal.Header,
	                    { closeButton: true },
	                    _react2['default'].createElement(
	                        _reactBootstrap.Modal.Title,
	                        null,
	                        this.props.title
	                    )
	                ),
	                _react2['default'].createElement(
	                    _reactBootstrap.Modal.Body,
	                    null,
	                    this.state.message
	                ),
	                _react2['default'].createElement(
	                    _reactBootstrap.Modal.Footer,
	                    null,
	                    _react2['default'].createElement(
	                        _reactBootstrap.Button,
	                        { autoFocus: true, bsStyle: 'info', onClick: this.hide.bind(this) },
	                        this.props.ok
	                    )
	                )
	            );
	        }
	    }]);

	    return Alert;
	})((0, _es6ReactMixins2['default'])((0, _altConnect2['default'])(_store2['default'])));

	Alert.Actions = _actions2['default'];

	exports['default'] = Alert;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _alt = __webpack_require__(6);

	var _alt2 = _interopRequireDefault(_alt);

	var Actions = (function () {
	    function Actions() {
	        _classCallCheck(this, Actions);
	    }

	    _createClass(Actions, [{
	        key: 'show',
	        value: function show(message) {
	            var _this = this;

	            return new Promise(function (resolve, reject) {
	                _this.dispatch({ message: message, resolve: resolve, reject: reject });
	            });
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            this.dispatch();
	        }
	    }]);

	    return Actions;
	})();

	exports['default'] = _alt2['default'].createActions(Actions);
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _alt = __webpack_require__(7);

	var _alt2 = _interopRequireDefault(_alt);

	var alt = new _alt2['default']();

	exports['default'] = alt;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _alt = __webpack_require__(6);

	var _alt2 = _interopRequireDefault(_alt);

	var _actions = __webpack_require__(5);

	var _actions2 = _interopRequireDefault(_actions);

	var Alert = (function () {
	    function Alert() {
	        _classCallCheck(this, Alert);

	        this.message = null;
	        this.resolve = null;
	        this.reject = null;
	        this.bindActions(_actions2['default']);
	    }

	    _createClass(Alert, [{
	        key: 'onShow',
	        value: function onShow(data) {
	            this.message = data.message;
	            this.resolve = data.resolve;
	            this.reject = data.reject;
	        }
	    }, {
	        key: 'onHide',
	        value: function onHide() {
	            this.message = null;
	            this.resolve = null;
	            this.reject = null;
	        }
	    }]);

	    return Alert;
	})();

	exports['default'] = _alt2['default'].createStore(Alert);
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;