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
/******/ 	return __webpack_require__(__webpack_require__.s = 86);
/******/ })
/************************************************************************/
/******/ ({

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(87)
var $app_style$ = __webpack_require__(88)
var $app_script$ = __webpack_require__(89)

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

/***/ 87:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "menu"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "功能介绍（未实装）"
          },
          "classList": [
            "bn"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "textme"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "实用功能"
          },
          "classList": [
            "xui-input-group-col-title"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "menu"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "最大公约数"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "gcd"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "最小公倍数"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "lcm"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "menu"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "素数判断"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "isPrimeRouteDetail"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "X的Y次幂"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "pow"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "menu"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "三角函数"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "trigonometricFunction"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "笛卡儿积"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "theCartesianProductRouteDetail"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "textme"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "概率"
          },
          "classList": [
            "xui-input-group-col-title"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "menu"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "阶乘"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "factorialRouteDetail"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "相对熵（Beta）"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "relativeEntropy"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "menu"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "伽玛函数"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "gamma"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "textme"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "矩阵"
          },
          "classList": [
            "xui-input-group-col-title"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "menu"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "向量叉积"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "cross"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "向量点积"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "dot"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "textme"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "代数"
          },
          "classList": [
            "xui-input-group-col-title"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "menu"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "方程求解"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "routeDetail"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "极限计算"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "routeDetail"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "menu"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "函数求导"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "derivative"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "积分计算（Beta）"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "integralRouteDetail"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  ".xui-input-group-col-title": {
    "textAlign": "center",
    "marginBottom": "10px"
  },
  ".textme": {
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginTop": "100px"
  },
  ".menu": {
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  ".bn": {
    "width": "350px",
    "height": "100px",
    "marginTop": "70px",
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
  ".btn": {
    "width": "250px",
    "height": "100px",
    "marginTop": "70px",
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
  }
}

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu();
  },
  routeDetail: function routeDetail() {
    _system2.default.push({
      uri: '/DemoDetail'
    });
  },
  integralRouteDetail: function integralRouteDetail() {
    _system2.default.push({
      uri: '/Integral'
    });
  },
  isPrimeRouteDetail: function isPrimeRouteDetail() {
    _system2.default.push({
      uri: '/IsPrime'
    });
  },
  theCartesianProductRouteDetail: function theCartesianProductRouteDetail() {
    _system2.default.push({
      uri: '/TheCartesianProduct'
    });
  },
  factorialRouteDetail: function factorialRouteDetail() {
    _system2.default.push({
      uri: '/Factorial'
    });
  },
  relativeEntropy: function relativeEntropy() {
    _system2.default.push({
      uri: '/RelativeEntropy'
    });
  },
  trigonometricFunction: function trigonometricFunction() {
    _system2.default.push({
      uri: '/TrigonometricFunction'
    });
  },
  gamma: function gamma() {
    _system2.default.push({
      uri: '/Gamma'
    });
  },
  cross: function cross() {
    _system2.default.push({
      uri: '/Cross'
    });
  },
  dot: function dot() {
    _system2.default.push({
      uri: '/Dot'
    });
  },
  gcd: function gcd() {
    _system2.default.push({
      uri: '/Gcd'
    });
  },
  lcm: function lcm() {
    _system2.default.push({
      uri: '/Lcm'
    });
  },
  pow: function pow() {
    _system2.default.push({
      uri: '/Pow'
    });
  },
  derivative: function derivative() {
    _system2.default.push({
      uri: '/Derivative'
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