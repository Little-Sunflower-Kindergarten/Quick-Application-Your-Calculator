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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ({

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(59)
var $app_style$ = __webpack_require__(60)
var $app_script$ = __webpack_require__(61)

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

/***/ 59:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "id": "desc"
      },
      "id": "desc",
      "children": [
        {
          "type": "span",
          "attr": {
            "id": "cl",
            "value": "e,E"
          },
          "id": "cl"
        },
        {
          "type": "span",
          "attr": {
            "value": "：欧拉数，自然对数的基数。值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lc",
            "value": "2.718281828459045"
          },
          "id": "lc"
        },
        {
          "type": "span",
          "attr": {
            "value": "。 "
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "id": "desc"
      },
      "id": "desc",
      "children": [
        {
          "type": "span",
          "attr": {
            "id": "cl",
            "value": "i"
          },
          "id": "cl"
        },
        {
          "type": "span",
          "attr": {
            "value": ": 虚构单位，定义为i i = -1。复数被描述为a + b i，其中a是实部，b是虚部。值为sqrt(-1)。\\n\\nLN2 2的自然对数。值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lc",
            "value": "0.6931471805599453"
          },
          "id": "lc"
        },
        {
          "type": "span",
          "attr": {
            "value": "。 "
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "id": "desc"
      },
      "id": "desc",
      "children": [
        {
          "type": "span",
          "attr": {
            "id": "cl",
            "value": "LN2"
          },
          "id": "cl"
        },
        {
          "type": "span",
          "attr": {
            "value": ":2的自然对数。值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lc",
            "value": "0.6931471805599453"
          },
          "id": "lc"
        },
        {
          "type": "span",
          "attr": {
            "value": "。 "
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "id": "desc"
      },
      "id": "desc",
      "children": [
        {
          "type": "span",
          "attr": {
            "id": "cl",
            "value": "LN10"
          },
          "id": "cl"
        },
        {
          "type": "span",
          "attr": {
            "value": ":10的自然对数。值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lc",
            "value": "2.302585092994046"
          },
          "id": "lc"
        },
        {
          "type": "span",
          "attr": {
            "value": "。 "
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "id": "desc"
      },
      "id": "desc",
      "children": [
        {
          "type": "span",
          "attr": {
            "id": "cl",
            "value": "LOG2E"
          },
          "id": "cl"
        },
        {
          "type": "span",
          "attr": {
            "value": ":E的base-2对数。值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lc",
            "value": "1.4426950408889634"
          },
          "id": "lc"
        },
        {
          "type": "span",
          "attr": {
            "value": "。 "
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "id": "desc"
      },
      "id": "desc",
      "children": [
        {
          "type": "span",
          "attr": {
            "id": "cl",
            "value": "LOG10E"
          },
          "id": "cl"
        },
        {
          "type": "span",
          "attr": {
            "value": ":E的以10为底的对数。值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lc",
            "value": "0.4342944819032518"
          },
          "id": "lc"
        },
        {
          "type": "span",
          "attr": {
            "value": "。 "
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "id": "desc"
      },
      "id": "desc",
      "children": [
        {
          "type": "span",
          "attr": {
            "id": "cl",
            "value": "phi"
          },
          "id": "cl"
        },
        {
          "type": "span",
          "attr": {
            "value": ":phi是黄金比例。如果它们的比率与它们的总和与两个量中较大的一个的比率相同，则两个量是黄金比例。Phi被定义为(1 + sqrt(5)) / 2。值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lc",
            "value": "1.618033988749895"
          },
          "id": "lc"
        },
        {
          "type": "span",
          "attr": {
            "value": "。 "
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "id": "desc"
      },
      "id": "desc",
      "children": [
        {
          "type": "span",
          "attr": {
            "id": "cl",
            "value": "pi,PI"
          },
          "id": "cl"
        },
        {
          "type": "span",
          "attr": {
            "value": ":数字pi是一个数学常数，它是圆周长与直径的比值。值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lc",
            "value": "3.141592653589793"
          },
          "id": "lc"
        },
        {
          "type": "span",
          "attr": {
            "value": "。 "
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "id": "desc"
      },
      "id": "desc",
      "children": [
        {
          "type": "span",
          "attr": {
            "id": "cl",
            "value": "SQRT1_2"
          },
          "id": "cl"
        },
        {
          "type": "span",
          "attr": {
            "value": ":1/2的平方根。值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lc",
            "value": "0.7071067811865476"
          },
          "id": "lc"
        },
        {
          "type": "span",
          "attr": {
            "value": "。 "
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "id": "desc"
      },
      "id": "desc",
      "children": [
        {
          "type": "span",
          "attr": {
            "id": "cl",
            "value": "SQRT2"
          },
          "id": "cl"
        },
        {
          "type": "span",
          "attr": {
            "value": ":2的平方根。值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lc",
            "value": "1.4142135623730951"
          },
          "id": "lc"
        },
        {
          "type": "span",
          "attr": {
            "value": "。 "
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "id": "desc"
      },
      "id": "desc",
      "children": [
        {
          "type": "span",
          "attr": {
            "id": "cl",
            "value": "tau"
          },
          "id": "cl"
        },
        {
          "type": "span",
          "attr": {
            "value": ":tau是圆周长与半径的比值常数，等于2 * pi。值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lc",
            "value": "6.283185307179586"
          },
          "id": "lc"
        },
        {
          "type": "span",
          "attr": {
            "value": "。 "
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  "#desc": {
    "width": "650px",
    "marginTop": "40px",
    "lineHeight": "35px",
    "fontSize": "25px",
    "color": "#8d8d8d"
  },
  "#cl": {
    "color": "#6da7ff"
  },
  "#lc": {
    "color": "#ff6daa"
  }
}

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  onInit: function onInit() {
    this.$page.setTitleBar({ text: this.name });
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