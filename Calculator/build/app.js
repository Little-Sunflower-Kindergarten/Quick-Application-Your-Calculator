(function(){
  
  var createAppHandler = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 609);
/******/ })
/************************************************************************/
/******/ ({

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

var $app_script$ = __webpack_require__(610)

$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
})

$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(611);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  showMenu: _util2.default.showMenu,
  createShortcut: _util2.default.createShortcut
};
(exports.default || module.exports).manifest = {"package":"com.LittleSunflowerKindergarten.QuickApplicationCalculator","name":"高等计算器","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"1010","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.clipboard"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Homepage","pages":{"Homepage":{"component":"index"},"DemoDetail":{"component":"index"},"About":{"component":"index"},"Integral":{"component":"index"},"IsPrime":{"component":"index"},"TheCartesianProduct":{"component":"index"},"Factorial":{"component":"index"},"RelativeEntropy":{"component":"index"},"TrigonometricFunction":{"component":"index"}}},"display":{"backgroundColor":"#ffffff","titleBarBackgroundColor":"#999999","titleBarTextColor":"#ffffff","menu":true,"pages":{"Homepage":{"menu":true,"titleBarText":"主页"},"DemoDetail":{"menu":false,"titleBarText":"详情页"},"About":{"menu":false},"Integral":{"menu":false,"titleBarText":"积分计算（Beta）"},"IsPrime":{"menu":false,"titleBarText":"判断素数"},"TheCartesianProduct":{"menu":false,"titleBarText":"笛卡儿积"},"Factorial":{"menu":false,"titleBarText":"阶乘"},"RelativeEntropy":{"menu":false,"titleBarText":"相对熵"},"TrigonometricFunction":{"menu":false,"titleBarText":"三角函数"}}}};
}

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 显示菜单
 */
function showMenu() {
  var prompt = $app_require$('@app-module/system.prompt');
  var router = $app_require$('@app-module/system.router');
  var appInfo = $app_require$('@app-module/system.app').getInfo();
  prompt.showContextMenu({
    itemList: ['保存桌面', '关于', '取消'],
    success: function success(ret) {
      switch (ret.index) {
        case 0:
          // 保存桌面
          createShortcut();
          break;
        case 1:
          // 关于
          router.push({
            uri: '/About',
            params: {
              name: appInfo.name,
              icon: appInfo.icon
            }
          });
          break;
        case 2:
          // 取消
          break;
        default:
          prompt.showToast({
            message: 'error'
          });
      }
    }
  });
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut() {
  var prompt = $app_require$('@app-module/system.prompt');
  var shortcut = $app_require$('@app-module/system.shortcut');
  shortcut.hasInstalled({
    success: function success(ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        });
      } else {
        shortcut.install({
          success: function success() {
            prompt.showToast({
              message: '成功创建桌面图标'
            });
          },
          fail: function fail(errmsg, errcode) {
            prompt.showToast({
              message: errcode + ': ' + errmsg
            });
          }
        });
      }
    }
  });
}

exports.default = {
  showMenu: showMenu,
  createShortcut: createShortcut
};

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.LittleSunflowerKindergarten.QuickApplicationCalculator","name":"高等计算器","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"1010","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.clipboard"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Homepage","pages":{"Homepage":{"component":"index"},"DemoDetail":{"component":"index"},"About":{"component":"index"},"Integral":{"component":"index"},"IsPrime":{"component":"index"},"TheCartesianProduct":{"component":"index"},"Factorial":{"component":"index"},"RelativeEntropy":{"component":"index"},"TrigonometricFunction":{"component":"index"}}},"display":{"backgroundColor":"#ffffff","titleBarBackgroundColor":"#999999","titleBarTextColor":"#ffffff","menu":true,"pages":{"Homepage":{"menu":true,"titleBarText":"主页"},"DemoDetail":{"menu":false,"titleBarText":"详情页"},"About":{"menu":false},"Integral":{"menu":false,"titleBarText":"积分计算（Beta）"},"IsPrime":{"menu":false,"titleBarText":"判断素数"},"TheCartesianProduct":{"menu":false,"titleBarText":"笛卡儿积"},"Factorial":{"menu":false,"titleBarText":"阶乘"},"RelativeEntropy":{"menu":false,"titleBarText":"相对熵"},"TrigonometricFunction":{"menu":false,"titleBarText":"三角函数"}}}};
  }
})();
//# sourceMappingURL=app.js.map