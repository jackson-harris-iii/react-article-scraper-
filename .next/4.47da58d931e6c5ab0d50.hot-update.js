webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__ = __webpack_require__("./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__ = __webpack_require__("./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__ = __webpack_require__("./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_IconButton__ = __webpack_require__("./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Menu__ = __webpack_require__("./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_isomorphic_unfetch__);
var _jsxFileName = "/Users/Home/Bootcamp_Stuff/HomeWork/react-article-scraper-/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();












var styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_IconButton___default.a, {
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "Menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_Menu___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default.a, {
    variant: "title",
    color: "inherit",
    className: classes.flex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "NY TIMES ARTICLE SCRAPER"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "HOME"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_next_link___default.a, {
    href: {
      pathname: "/scrape"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "SCRAPE ARTCILES")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_next_link___default.a, {
    href: "/articles",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "SAVED ARTCILES")))));
}

var _default = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(ButtonAppBar);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/Home/Bootcamp_Stuff/HomeWork/react-article-scraper-/pages/index.js");
  reactHotLoader.register(ButtonAppBar, "ButtonAppBar", "/Users/Home/Bootcamp_Stuff/HomeWork/react-article-scraper-/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/Home/Bootcamp_Stuff/HomeWork/react-article-scraper-/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.47da58d931e6c5ab0d50.hot-update.js.map