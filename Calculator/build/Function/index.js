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
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ({

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(83)
var $app_style$ = __webpack_require__(84)
var $app_script$ = __webpack_require__(85)

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

/***/ 83:
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
            "value": "实用功能"
          },
          "id": "cl"
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
            "id": "lc",
            "value": "最大公约数"
          },
          "id": "lc"
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
            "value": " 求解两个数的最大公约数。例如要计算的第一个数为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "12"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，第二个数为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "4"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，结果为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "4"
          },
          "id": "lcc"
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
            "id": "lc",
            "value": "最小公倍数"
          },
          "id": "lc"
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
            "value": " 求解两个数的最小公倍数。例如要计算的第一个数为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "14"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，第二个数为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "7"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，结果为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "14"
          },
          "id": "lcc"
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
            "id": "lc",
            "value": "素数判断"
          },
          "id": "lc"
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
            "value": " 判断素数。例如要判断的数为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "14"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，结果为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "flase"
          },
          "id": "lcc"
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
            "id": "lc",
            "value": "X的Y次幂"
          },
          "id": "lc"
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
            "value": " 计算X的Y次幂。例如X为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "2"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，Y为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "4"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，结果为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "16"
          },
          "id": "lcc"
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
            "id": "lc",
            "value": "三角函数"
          },
          "id": "lc"
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
            "value": " 计算三角函数。例如要计算的sin值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "1"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，结果为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "0.8414709848078965"
          },
          "id": "lcc"
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
            "id": "lc",
            "value": "笛卡儿积"
          },
          "id": "lc"
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
            "value": " 计算笛卡儿积。例如要计算的第一个集合为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "1,2"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，第二个集合为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "3,1"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，结果为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "[[\"1\",\"1\"],[\"1\",\"3\"],[\"2\",\"1\"],[\"2\",\"3\"]]"
          },
          "id": "lcc"
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
            "value": "概率"
          },
          "id": "cl"
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
            "id": "lc",
            "value": "阶乘"
          },
          "id": "lc"
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
            "value": " 计算阶乘。例如要计算的值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "5"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，结果为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "120"
          },
          "id": "lcc"
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
            "id": "lc",
            "value": "相对熵"
          },
          "id": "lc"
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
            "value": " 计算相对熵。例如要计算的第一个集合为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "1,1"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，第二个集合为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "2,1"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，结果为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "0.05889151782819174"
          },
          "id": "lcc"
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
            "id": "lc",
            "value": "伽玛函数"
          },
          "id": "lc"
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
            "value": " 计算伽玛函数。例如要计算的值为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "5"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，结果为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "24"
          },
          "id": "lcc"
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
            "value": "矩阵"
          },
          "id": "cl"
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
            "id": "lc",
            "value": "向量叉积"
          },
          "id": "lc"
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
            "value": " 计算向量叉积。例如要计算的第一个集合为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "1,1,1"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，第二个集合为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "3,1,2"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，结果为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "[1,1,-2]"
          },
          "id": "lcc"
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
            "id": "lc",
            "value": "向量点积"
          },
          "id": "lc"
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
            "value": " 计算向量点积。例如要计算的第一个集合为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "1,1"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，第二个集合为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "2,1"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，结果为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "3"
          },
          "id": "lcc"
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
            "value": "代数"
          },
          "id": "cl"
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
            "id": "lc",
            "value": "方程求解"
          },
          "id": "lc"
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
            "id": "lc",
            "value": "极限计算"
          },
          "id": "lc"
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
            "id": "lc",
            "value": "函数求导"
          },
          "id": "lc"
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
            "value": " 对表达式求导。表达式为字符串。例如要求导的函数为 "
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "sin(2x)*2x"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，未知数为 "
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "x"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，结果为 "
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "4*cos(2x)*x+2*sin(2x)"
          },
          "id": "lcc"
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
            "id": "lc",
            "value": "积分计算"
          },
          "id": "lc"
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "id": "descc"
      },
      "id": "descc",
      "children": [
        {
          "type": "span",
          "attr": {
            "value": " 对表达式求积分。表达式为字符串。例如要求积分的函数为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "sin(x)"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，未知数为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "x"
          },
          "id": "lcc"
        },
        {
          "type": "span",
          "attr": {
            "value": "，结果为"
          }
        },
        {
          "type": "span",
          "attr": {
            "id": "lcc",
            "value": "-cos(X)"
          },
          "id": "lcc"
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

/***/ 84:
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
  "#descc": {
    "width": "650px",
    "marginTop": "40px",
    "marginBottom": "40px",
    "lineHeight": "35px",
    "fontSize": "25px",
    "color": "#8d8d8d"
  },
  "#cl": {
    "color": "#6da7ff"
  },
  "#lc": {
    "color": "#ff6daa"
  },
  "#lcc": {
    "color": "#ff5a31"
  }
}

/***/ }),

/***/ 85:
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