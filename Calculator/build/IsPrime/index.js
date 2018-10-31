(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 98);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports) {

module.exports = {
  ".flex-column": {
    "flexDirection": "column"
  },
  ".xui-input-group-col": {
    "marginTop": "30px",
    "paddingTop": "10px",
    "paddingRight": "30px",
    "paddingBottom": "10px",
    "paddingLeft": "30px",
    "flexDirection": "column"
  },
  ".xui-input-group-col-title": {
    "marginBottom": "10px"
  },
  ".xui-input-round": {
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#cccccc",
    "borderRightColor": "#cccccc",
    "borderBottomColor": "#cccccc",
    "borderLeftColor": "#cccccc",
    "borderRadius": "10px",
    "paddingTop": "20px",
    "paddingRight": "30px",
    "paddingBottom": "20px",
    "paddingLeft": "30px",
    "backgroundColor": "rgba(0,0,0,0)",
    "height": "80px",
    "fontSize": "30px"
  },
  ".menu": {
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  ".btn": {
    "width": "400px",
    "height": "80px",
    "marginTop": "50px",
    "marginLeft": "20px",
    "marginRight": "20px",
    "borderStyle": "solid",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderTopColor": "#b7b7b7",
    "borderRightColor": "#b7b7b7",
    "borderBottomColor": "#b7b7b7",
    "borderLeftColor": "#b7b7b7",
    "borderRadius": "10px",
    "backgroundColor": "#ffffff",
    "fontSize": "30px",
    "color": "#444444"
  },
  ".item-content": {
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
    "marginBottom": "50px",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".txt": {
    "paddingTop": "15px",
    "paddingBottom": "15px"
  },
  ".txt-left": {
    "alignItems": "flex-start"
  }
}

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.clipboard');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a1;

exports.default = {
  private: {
    text: 'default',
    componentName: 'clipboard',
    show: true,
    clipboard: '暂无内容',
    showSet: '',
    showGet: '暂无内容'
  },
  bindPhoneChange1: function bindPhoneChange1(e) {
    a1 = e.value;
  },
  changeText: function changeText(e) {
    this.text = e.newValue;
  },
  getProgressValue: function getProgressValue(e) {
    this.progressValue = e.progress;
  },
  changeSwitchStatus: function changeSwitchStatus(e) {
    this.switchStatus = e.checked ? 'on' : 'off';
  },
  set: function set() {
    this.showSet = this.clipboard;
    _system2.default.set({
      text: this.$app.$def.isPrime(a1)
    });
  },
  get: function get() {
    var self = this;
    _system2.default.get({
      success: function success(obj) {
        self.showGet = obj.text;
      }
    });
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(99)
var $app_style$ = __webpack_require__(100)
var $app_script$ = __webpack_require__(101)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 99:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "flex-column"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "xui-input-group-col"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "需要判断的数字"
          },
          "classList": [
            "xui-input-group-col-title"
          ]
        },
        {
          "type": "input",
          "attr": {
            "name": "a1",
            "type": "text",
            "placeholder": "请输入数字"
          },
          "classList": [
            "xui-input-round"
          ],
          "events": {
            "change": "bindPhoneChange1"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "memu"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "判断并输出至剪贴板"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "set"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "输出剪贴板的内容"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "get"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-content",
        "txt-left"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "结果如下："
          },
          "classList": [
            "txt"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.showGet}
          },
          "classList": [
            "txt"
          ]
        }
      ]
    }
  ]
}

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map