/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf */ "./src/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/treebackground.jpg */ "./src/images/treebackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "PlayfairDisplay";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___})
    format("truetype");
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  font-family: "PlayfairDisplay";
}

@media (min-width: 1301px) {
  /* Header */

  header {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    display: flex;
    justify-content: center;
    padding-bottom: 150px;
  }

  .aboutMe {
    position: relative;
    display: flex;
    font-size: 1.2rem;
    gap: 30px;
    padding-bottom: 200px;
    padding-top: 200px;
    padding-left: 50px;
  }

  .aboutMe .titleName {
    position: absolute;
    text-align: center;
    font-size: clamp(2rem, 2vw + 1rem, 4rem);
    bottom: 30px;
    color: white;
    width: 100%;
  }

  .aboutMe .imageContainer {
    position: relative;
    max-width: 1000px;
    
  }

  .aboutMe .personalImage {
    width: 100%;
    box-shadow: 10px 10px 10px 5px rgb(180, 180, 180);
  }

  .textContainer {
    display: flex;
    margin-left: 40px;
    padding-right: 50px;
    flex-direction: column;
    justify-content: center;
    min-width: 500px;
    max-width: 550px;
  }
  .textContainer h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 3rem;
  }
  .textContainer p {
    font-size: 2rem;
    color: rgb(37, 36, 36);
  }

  /* MAIN */
  .projectContainer {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  }

  .rubric {
  
    padding-bottom:40px;
    padding-top: 80px;
    font-size: 3rem;
  }
  .project {
    max-width: 600px;
    margin-bottom: 80px;
  }

  .project .image{

   max-height:400px;
   overflow: hidden;
  }
  .project img {
    max-width: 600px;
    object-fit: cover;
    margin-bottom: 100px;
  }


  .project h4 {
    font-size: 1.5rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  footer {
    background-color: rgb(224, 222, 250, 0.3);
    display: flex;
  }

  .contact {
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-right: 10%;
  }

  .contact .info {
    padding-top: 100px;
    padding-right: 20px;
    margin-left: 15%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 600px;
  }

  .contact h4 {
    font-size: 2.5rem;
  }
  .contact p {
    font-size: 1.5rem;
  }

  .contact img {
    max-width: 600px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
@media (min-width:1100px) and (max-width: 1300px) {
  header {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    padding-bottom: 200px;
  }
  .aboutMe {
    position: relative;
    width: 1000px;
    font-size: 1.2rem;
    margin: 0 auto;
    padding-top: 100px;
  }

  .aboutMe .titleName {
    font-size: 4rem;
    position: absolute;
    top: 120px;
    right: 50px;
  }

  .aboutMe .imageContainer {
    
    margin-right: 25px;
    float: left;
  }

  .personalImage {
    width: 600px;
    height: 420px;
    box-shadow: 30px 40px 50px 10px rgb(180, 180, 180);
  }

  .textContainer {
    margin-left: 250px;
    margin-top: 180px;
    padding-left: 10px;
    background-color: rgb(255, 255, 255, 0.1);
  }
  .textContainer h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 20px;
    padding-top: 20px;
    margin-bottom: 10px;
  }
  .textContainer p {
    font-size: 2rem;
    color: rgb(37, 36, 36);
  }

  /* MAIN */
  .projectContainer {
    display: grid;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(900px, 1fr));
  }
  .rubric {
    padding: 30px;
    font-size: 3rem;
    text-align: center;
  }
  .project {
   
    margin-bottom: 100px;
    max-width: 900px;
  }

  .project .image {
    overflow: hidden;
  }

  .project img {
    max-width: 900px;
    object-fit: cover;
    margin-bottom: 30px;
  }

  .project h4 {
    font-size: 1.5rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  footer {
    background-color: rgb(224, 222, 250, 0.3);
    display: flex;
  }

  .contact {
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-right: 10%;
  }

  .contact .info {
    padding-top: 100px;
    padding-right: 20px;
    margin-left: 15%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 600px;
  }

  .contact h4 {
    font-size: 2.5rem;
  }
  .contact p {
    font-size: 1.5rem;
  }

  .contact img {
    max-width: 400px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

@media (max-width: 1100px) {
  header {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    display: flex;
    justify-content: center;

  }
  .aboutMe {
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    padding-top: 100px;
    padding-right: 50px;
    padding-left: 50px;
    padding-bottom: 150px;
  }

  .aboutMe .titleName {
    font-size: clamp(1rem, 1.5rem + 3vw, 4rem);
    color: white;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }

  .aboutMe .imageContainer {
    position: relative;
   
  }

  .personalImage {
    width: 100%;
    box-shadow: 5px 5px 5px 1px rgb(180, 180, 180);
  }

  .textContainer {

    background-color: rgb(255, 255, 255, 0.1);
    padding-top: 100px;
    max-width: 600px;
  }
  .textContainer h2 {
    text-align: center;
    font-size: clamp(2rem, 2rem + 2vw, 4rem);
    margin-bottom: 20px;
    padding-top: 20px;
    margin-bottom: 10px;
  }
  .textContainer p {
    font-size: clamp(1rem, 1rem + 1.5vw, 3rem);
    color: rgb(37, 36, 36);
    
 
  }

  /* MAIN */
  .projectContainer {
    display: grid;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(350px, 90%));
  }
  .rubric {
    padding: 30px;
    font-size: 3rem;
    text-align: center;
  }
  .project {
   
    margin-bottom: 100px;
    max-width:700px;

  }
  
  .project .image {
    overflow: hidden;
    max-width:700px;
  }

  .project img {
    width: 100%;
    margin-bottom: 30px;
  }

  .project h4 {
    font-size: 1.5rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .project p {
    font-size: clamp(1rem, 1rem + 1.5vw, 3rem);
  }
  footer {
    background-color: rgb(224, 222, 250, 0.3);
    display: flex;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding-right: 100px;
    padding-left: 100px;
    box-sizing: border-box;
  
  }

  .contact .info {
    padding-top: 100px;

    display: flex;
    flex-direction: column;
    gap: 10px;
  
  }

  .contact h4 {
    font-size: 2.5rem;
  }
  .contact p {
    font-size: 1.5rem;
  }

  .contact img {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
   
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"PlayfairDisplay\";\n  src: url(\"./Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf\")\n    format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"PlayfairDisplay\";\n}\n\n@media (min-width: 1301px) {\n  /* Header */\n\n  header {\n    background-image: url(\"./images/treebackground.jpg\");\n    background-size: contain;\n    display: flex;\n    justify-content: center;\n    padding-bottom: 150px;\n  }\n\n  .aboutMe {\n    position: relative;\n    display: flex;\n    font-size: 1.2rem;\n    gap: 30px;\n    padding-bottom: 200px;\n    padding-top: 200px;\n    padding-left: 50px;\n  }\n\n  .aboutMe .titleName {\n    position: absolute;\n    text-align: center;\n    font-size: clamp(2rem, 2vw + 1rem, 4rem);\n    bottom: 30px;\n    color: white;\n    width: 100%;\n  }\n\n  .aboutMe .imageContainer {\n    position: relative;\n    max-width: 1000px;\n    \n  }\n\n  .aboutMe .personalImage {\n    width: 100%;\n    box-shadow: 10px 10px 10px 5px rgb(180, 180, 180);\n  }\n\n  .textContainer {\n    display: flex;\n    margin-left: 40px;\n    padding-right: 50px;\n    flex-direction: column;\n    justify-content: center;\n    min-width: 500px;\n    max-width: 550px;\n  }\n  .textContainer h2 {\n    text-align: center;\n    margin-bottom: 20px;\n    font-size: 3rem;\n  }\n  .textContainer p {\n    font-size: 2rem;\n    color: rgb(37, 36, 36);\n  }\n\n  /* MAIN */\n  .projectContainer {\n    display: grid;\n    justify-items: center;\n    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));\n  }\n\n  .rubric {\n  \n    padding-bottom:40px;\n    padding-top: 80px;\n    font-size: 3rem;\n  }\n  .project {\n    max-width: 600px;\n    margin-bottom: 80px;\n  }\n\n  .project .image{\n\n   max-height:400px;\n   overflow: hidden;\n  }\n  .project img {\n    max-width: 600px;\n    object-fit: cover;\n    margin-bottom: 100px;\n  }\n\n\n  .project h4 {\n    font-size: 1.5rem;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  footer {\n    background-color: rgb(224, 222, 250, 0.3);\n    display: flex;\n  }\n\n  .contact {\n    display: flex;\n    justify-content: center;\n    width: 100vw;\n    margin-right: 10%;\n  }\n\n  .contact .info {\n    padding-top: 100px;\n    padding-right: 20px;\n    margin-left: 15%;\n    min-width: 400px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    max-width: 600px;\n  }\n\n  .contact h4 {\n    font-size: 2.5rem;\n  }\n  .contact p {\n    font-size: 1.5rem;\n  }\n\n  .contact img {\n    max-width: 600px;\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n}\n@media (min-width:1100px) and (max-width: 1300px) {\n  header {\n    background-image: url(\"./images/treebackground.jpg\");\n    background-size: contain;\n    padding-bottom: 200px;\n  }\n  .aboutMe {\n    position: relative;\n    width: 1000px;\n    font-size: 1.2rem;\n    margin: 0 auto;\n    padding-top: 100px;\n  }\n\n  .aboutMe .titleName {\n    font-size: 4rem;\n    position: absolute;\n    top: 120px;\n    right: 50px;\n  }\n\n  .aboutMe .imageContainer {\n    \n    margin-right: 25px;\n    float: left;\n  }\n\n  .personalImage {\n    width: 600px;\n    height: 420px;\n    box-shadow: 30px 40px 50px 10px rgb(180, 180, 180);\n  }\n\n  .textContainer {\n    margin-left: 250px;\n    margin-top: 180px;\n    padding-left: 10px;\n    background-color: rgb(255, 255, 255, 0.1);\n  }\n  .textContainer h2 {\n    text-align: center;\n    font-size: 3rem;\n    margin-bottom: 20px;\n    padding-top: 20px;\n    margin-bottom: 10px;\n  }\n  .textContainer p {\n    font-size: 2rem;\n    color: rgb(37, 36, 36);\n  }\n\n  /* MAIN */\n  .projectContainer {\n    display: grid;\n    justify-items: center;\n    justify-content: center;\n    grid-template-columns: repeat(auto-fill, minmax(900px, 1fr));\n  }\n  .rubric {\n    padding: 30px;\n    font-size: 3rem;\n    text-align: center;\n  }\n  .project {\n   \n    margin-bottom: 100px;\n    max-width: 900px;\n  }\n\n  .project .image {\n    overflow: hidden;\n  }\n\n  .project img {\n    max-width: 900px;\n    object-fit: cover;\n    margin-bottom: 30px;\n  }\n\n  .project h4 {\n    font-size: 1.5rem;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  footer {\n    background-color: rgb(224, 222, 250, 0.3);\n    display: flex;\n  }\n\n  .contact {\n    display: flex;\n    justify-content: center;\n    width: 100vw;\n    margin-right: 10%;\n  }\n\n  .contact .info {\n    padding-top: 100px;\n    padding-right: 20px;\n    margin-left: 15%;\n    min-width: 400px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    max-width: 600px;\n  }\n\n  .contact h4 {\n    font-size: 2.5rem;\n  }\n  .contact p {\n    font-size: 1.5rem;\n  }\n\n  .contact img {\n    max-width: 400px;\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n}\n\n@media (max-width: 1100px) {\n  header {\n    background-image: url(\"./images/treebackground.jpg\");\n    background-size: contain;\n    display: flex;\n    justify-content: center;\n\n  }\n  .aboutMe {\n    position: relative;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 800px;\n    padding-top: 100px;\n    padding-right: 50px;\n    padding-left: 50px;\n    padding-bottom: 150px;\n  }\n\n  .aboutMe .titleName {\n    font-size: clamp(1rem, 1.5rem + 3vw, 4rem);\n    color: white;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n  }\n\n  .aboutMe .imageContainer {\n    position: relative;\n   \n  }\n\n  .personalImage {\n    width: 100%;\n    box-shadow: 5px 5px 5px 1px rgb(180, 180, 180);\n  }\n\n  .textContainer {\n\n    background-color: rgb(255, 255, 255, 0.1);\n    padding-top: 100px;\n    max-width: 600px;\n  }\n  .textContainer h2 {\n    text-align: center;\n    font-size: clamp(2rem, 2rem + 2vw, 4rem);\n    margin-bottom: 20px;\n    padding-top: 20px;\n    margin-bottom: 10px;\n  }\n  .textContainer p {\n    font-size: clamp(1rem, 1rem + 1.5vw, 3rem);\n    color: rgb(37, 36, 36);\n    \n \n  }\n\n  /* MAIN */\n  .projectContainer {\n    display: grid;\n    justify-items: center;\n    justify-content: center;\n    grid-template-columns: repeat(auto-fill, minmax(350px, 90%));\n  }\n  .rubric {\n    padding: 30px;\n    font-size: 3rem;\n    text-align: center;\n  }\n  .project {\n   \n    margin-bottom: 100px;\n    max-width:700px;\n\n  }\n  \n  .project .image {\n    overflow: hidden;\n    max-width:700px;\n  }\n\n  .project img {\n    width: 100%;\n    margin-bottom: 30px;\n  }\n\n  .project h4 {\n    font-size: 1.5rem;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .project p {\n    font-size: clamp(1rem, 1rem + 1.5vw, 3rem);\n  }\n  footer {\n    background-color: rgb(224, 222, 250, 0.3);\n    display: flex;\n  }\n\n  .contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100vw;\n    padding-right: 100px;\n    padding-left: 100px;\n    box-sizing: border-box;\n  \n  }\n\n  .contact .info {\n    padding-top: 100px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  \n  }\n\n  .contact h4 {\n    font-size: 2.5rem;\n  }\n  .contact p {\n    font-size: 1.5rem;\n  }\n\n  .contact img {\n    width: 100%;\n    padding-top: 100px;\n    padding-bottom: 100px;\n   \n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf":
/*!***************************************************************************!*\
  !*** ./src/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "PlayfairDisplay-Italic-VariableFont_wght.ttf";

/***/ }),

/***/ "./src/images/treebackground.jpg":
/*!***************************************!*\
  !*** ./src/images/treebackground.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "treebackground.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJNQUFrRjtBQUM5SCw0Q0FBNEMsbUlBQThDO0FBQzFGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksZUFBZSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFL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b3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9QbGF5ZmFpcl9EaXNwbGF5L1BsYXlmYWlyRGlzcGxheS1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvdHJlZWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyRGlzcGxheVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KVxuICAgIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyRGlzcGxheVwiO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTMwMXB4KSB7XG4gIC8qIEhlYWRlciAqL1xuXG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbiAgfVxuXG4gIC5hYm91dE1lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBnYXA6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIH1cblxuICAuYWJvdXRNZSAudGl0bGVOYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMnZ3ICsgMXJlbSwgNHJlbSk7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hYm91dE1lIC5pbWFnZUNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIFxuICB9XG5cbiAgLmFib3V0TWUgLnBlcnNvbmFsSW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDVweCByZ2IoMTgwLCAxODAsIDE4MCk7XG4gIH1cblxuICAudGV4dENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICB9XG4gIC50ZXh0Q29udGFpbmVyIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbiAgLnRleHRDb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiByZ2IoMzcsIDM2LCAzNik7XG4gIH1cblxuICAvKiBNQUlOICovXG4gIC5wcm9qZWN0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg2MDBweCwgMWZyKSk7XG4gIH1cblxuICAucnVicmljIHtcbiAgXG4gICAgcGFkZGluZy1ib3R0b206NDBweDtcbiAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbiAgLnByb2plY3Qge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgfVxuXG4gIC5wcm9qZWN0IC5pbWFnZXtcblxuICAgbWF4LWhlaWdodDo0MDBweDtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnByb2plY3QgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICB9XG5cblxuICAucHJvamVjdCBoNCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjIsIDI1MCwgMC4zKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICB9XG5cbiAgLmNvbnRhY3QgLmluZm8ge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cblxuICAuY29udGFjdCBoNCB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmNvbnRhY3QgcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICAuY29udGFjdCBpbWcge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6MTEwMHB4KSBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIH1cbiAgLmFib3V0TWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgfVxuXG4gIC5hYm91dE1lIC50aXRsZU5hbWUge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMjBweDtcbiAgICByaWdodDogNTBweDtcbiAgfVxuXG4gIC5hYm91dE1lIC5pbWFnZUNvbnRhaW5lciB7XG4gICAgXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLnBlcnNvbmFsSW1hZ2Uge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICAgIGJveC1zaGFkb3c6IDMwcHggNDBweCA1MHB4IDEwcHggcmdiKDE4MCwgMTgwLCAxODApO1xuICB9XG5cbiAgLnRleHRDb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxODBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgLnRleHRDb250YWluZXIgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC50ZXh0Q29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogcmdiKDM3LCAzNiwgMzYpO1xuICB9XG5cbiAgLyogTUFJTiAqL1xuICAucHJvamVjdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoOTAwcHgsIDFmcikpO1xuICB9XG4gIC5ydWJyaWMge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucHJvamVjdCB7XG4gICBcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICB9XG5cbiAgLnByb2plY3QgLmltYWdlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnByb2plY3QgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAucHJvamVjdCBoNCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjIsIDI1MCwgMC4zKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICB9XG5cbiAgLmNvbnRhY3QgLmluZm8ge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cblxuICAuY29udGFjdCBoNCB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmNvbnRhY3QgcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICAuY29udGFjdCBpbWcge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIH1cbiAgLmFib3V0TWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbiAgfVxuXG4gIC5hYm91dE1lIC50aXRsZU5hbWUge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS41cmVtICsgM3Z3LCA0cmVtKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYWJvdXRNZSAuaW1hZ2VDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIFxuICB9XG5cbiAgLnBlcnNvbmFsSW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDFweCByZ2IoMTgwLCAxODAsIDE4MCk7XG4gIH1cblxuICAudGV4dENvbnRhaW5lciB7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgfVxuICAudGV4dENvbnRhaW5lciBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMnJlbSArIDJ2dywgNHJlbSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC50ZXh0Q29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXJlbSArIDEuNXZ3LCAzcmVtKTtcbiAgICBjb2xvcjogcmdiKDM3LCAzNiwgMzYpO1xuICAgIFxuIFxuICB9XG5cbiAgLyogTUFJTiAqL1xuICAucHJvamVjdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzUwcHgsIDkwJSkpO1xuICB9XG4gIC5ydWJyaWMge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucHJvamVjdCB7XG4gICBcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICBtYXgtd2lkdGg6NzAwcHg7XG5cbiAgfVxuICBcbiAgLnByb2plY3QgLmltYWdlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC13aWR0aDo3MDBweDtcbiAgfVxuXG4gIC5wcm9qZWN0IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIC5wcm9qZWN0IGg0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAucHJvamVjdCBwIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDFyZW0gKyAxLjV2dywgM3JlbSk7XG4gIH1cbiAgZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjIsIDI1MCwgMC4zKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIFxuICB9XG5cbiAgLmNvbnRhY3QgLmluZm8ge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gIFxuICB9XG5cbiAgLmNvbnRhY3QgaDQge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIC5jb250YWN0IHAge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgLmNvbnRhY3QgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgXG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QjtzQkFDb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVzs7RUFFWDtJQUNFLHlEQUFvRDtJQUNwRCx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osWUFBWTtJQUNa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bUI7SUFDbkIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsc0JBQXNCOztFQUV4Qjs7RUFFQTtJQUNFLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTOztFQUVYOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjs7RUFFdkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXJEaXNwbGF5XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL1BsYXlmYWlyX0Rpc3BsYXkvUGxheWZhaXJEaXNwbGF5LUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKVxcbiAgICBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyRGlzcGxheVxcXCI7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMzAxcHgpIHtcXG4gIC8qIEhlYWRlciAqL1xcblxcbiAgaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy90cmVlYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xcbiAgfVxcblxcbiAgLmFib3V0TWUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICB9XFxuXFxuICAuYWJvdXRNZSAudGl0bGVOYW1lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMnZ3ICsgMXJlbSwgNHJlbSk7XFxuICAgIGJvdHRvbTogMzBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5hYm91dE1lIC5pbWFnZUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIFxcbiAgfVxcblxcbiAgLmFib3V0TWUgLnBlcnNvbmFsSW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggNXB4IHJnYigxODAsIDE4MCwgMTgwKTtcXG4gIH1cXG5cXG4gIC50ZXh0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcbiAgfVxcbiAgLnRleHRDb250YWluZXIgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG4gIC50ZXh0Q29udGFpbmVyIHAge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiByZ2IoMzcsIDM2LCAzNik7XFxuICB9XFxuXFxuICAvKiBNQUlOICovXFxuICAucHJvamVjdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNjAwcHgsIDFmcikpO1xcbiAgfVxcblxcbiAgLnJ1YnJpYyB7XFxuICBcXG4gICAgcGFkZGluZy1ib3R0b206NDBweDtcXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG4gIC5wcm9qZWN0IHtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0IC5pbWFnZXtcXG5cXG4gICBtYXgtaGVpZ2h0OjQwMHB4O1xcbiAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICAucHJvamVjdCBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICB9XFxuXFxuXFxuICAucHJvamVjdCBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjIyLCAyNTAsIDAuMyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAuY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgLmluZm8ge1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0IGg0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxuICAuY29udGFjdCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuXFxuICAuY29udGFjdCBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6MTEwMHB4KSBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3RyZWViYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMDBweDtcXG4gIH1cXG4gIC5hYm91dE1lIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5hYm91dE1lIC50aXRsZU5hbWUge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMjBweDtcXG4gICAgcmlnaHQ6IDUwcHg7XFxuICB9XFxuXFxuICAuYWJvdXRNZSAuaW1hZ2VDb250YWluZXIge1xcbiAgICBcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gIH1cXG5cXG4gIC5wZXJzb25hbEltYWdlIHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDQyMHB4O1xcbiAgICBib3gtc2hhZG93OiAzMHB4IDQwcHggNTBweCAxMHB4IHJnYigxODAsIDE4MCwgMTgwKTtcXG4gIH1cXG5cXG4gIC50ZXh0Q29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxODBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gIH1cXG4gIC50ZXh0Q29udGFpbmVyIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgLnRleHRDb250YWluZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHJnYigzNywgMzYsIDM2KTtcXG4gIH1cXG5cXG4gIC8qIE1BSU4gKi9cXG4gIC5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoOTAwcHgsIDFmcikpO1xcbiAgfVxcbiAgLnJ1YnJpYyB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLnByb2plY3Qge1xcbiAgIFxcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0IC5pbWFnZSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuXFxuICAucHJvamVjdCBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0IGg0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjIsIDI1MCwgMC4zKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICB9XFxuXFxuICAuY29udGFjdCAuaW5mbyB7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgaDQge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG4gIC5jb250YWN0IHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5jb250YWN0IGltZyB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3RyZWViYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgfVxcbiAgLmFib3V0TWUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcXG4gIH1cXG5cXG4gIC5hYm91dE1lIC50aXRsZU5hbWUge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNXJlbSArIDN2dywgNHJlbSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYWJvdXRNZSAuaW1hZ2VDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgXFxuICB9XFxuXFxuICAucGVyc29uYWxJbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAxcHggcmdiKDE4MCwgMTgwLCAxODApO1xcbiAgfVxcblxcbiAgLnRleHRDb250YWluZXIge1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgfVxcbiAgLnRleHRDb250YWluZXIgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMnJlbSArIDJ2dywgNHJlbSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgLnRleHRDb250YWluZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXJlbSArIDEuNXZ3LCAzcmVtKTtcXG4gICAgY29sb3I6IHJnYigzNywgMzYsIDM2KTtcXG4gICAgXFxuIFxcbiAgfVxcblxcbiAgLyogTUFJTiAqL1xcbiAgLnByb2plY3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwgOTAlKSk7XFxuICB9XFxuICAucnVicmljIHtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAucHJvamVjdCB7XFxuICAgXFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgICBtYXgtd2lkdGg6NzAwcHg7XFxuXFxuICB9XFxuICBcXG4gIC5wcm9qZWN0IC5pbWFnZSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1heC13aWR0aDo3MDBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QgaDQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0IHAge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDFyZW0gKyAxLjV2dywgM3JlbSk7XFxuICB9XFxuICBmb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjIsIDI1MCwgMC4zKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIFxcbiAgfVxcblxcbiAgLmNvbnRhY3QgLmluZm8ge1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gIFxcbiAgfVxcblxcbiAgLmNvbnRhY3QgaDQge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG4gIC5jb250YWN0IHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5jb250YWN0IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG4gICBcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=