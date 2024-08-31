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
    padding-right: 30px;
    padding-left: 30px;
  }
  .textContainer h2 {
    text-align: center;
    font-size: clamp(1.5rem, 1.5rem + 2vw, 4rem);
    margin-bottom: 20px;
    padding-top: 20px;
    margin-bottom: 10px;
  }
  .textContainer p {
    font-size: clamp(1rem, 1rem + 1.5vw, 3rem);
    color: rgb(37, 36, 36);
    margin-left: 5%;
    
 
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
    padding-right: 20px;
    padding-left: 20px;
  
  
  }

  .contact .info {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 300px;
  }

  .contact h4 {
    font-size: clamp(1.5rem, 1.5rem + 2vw, 2rem);
  }
  .contact p {
    font-size: clamp(1rem, 1rem + 2vw, 4rem);
  }

  .contact img {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
   
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"PlayfairDisplay\";\n  src: url(\"./Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf\")\n    format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"PlayfairDisplay\";\n}\n\n@media (min-width: 1301px) {\n  /* Header */\n\n  header {\n    background-image: url(\"./images/treebackground.jpg\");\n    background-size: contain;\n    display: flex;\n    justify-content: center;\n    padding-bottom: 150px;\n  }\n\n  .aboutMe {\n    position: relative;\n    display: flex;\n    font-size: 1.2rem;\n    gap: 30px;\n    padding-bottom: 200px;\n    padding-top: 200px;\n    padding-left: 50px;\n  }\n\n  .aboutMe .titleName {\n    position: absolute;\n    text-align: center;\n    font-size: clamp(2rem, 2vw + 1rem, 4rem);\n    bottom: 30px;\n    color: white;\n    width: 100%;\n  }\n\n  .aboutMe .imageContainer {\n    position: relative;\n    max-width: 1000px;\n    \n  }\n\n  .aboutMe .personalImage {\n    width: 100%;\n    box-shadow: 10px 10px 10px 5px rgb(180, 180, 180);\n  }\n\n  .textContainer {\n    display: flex;\n    margin-left: 40px;\n    padding-right: 50px;\n    flex-direction: column;\n    justify-content: center;\n    min-width: 500px;\n    max-width: 550px;\n  }\n  .textContainer h2 {\n    text-align: center;\n    margin-bottom: 20px;\n    font-size: 3rem;\n  }\n  .textContainer p {\n    font-size: 2rem;\n    color: rgb(37, 36, 36);\n  }\n\n  /* MAIN */\n  .projectContainer {\n    display: grid;\n    justify-items: center;\n    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));\n  }\n\n  .rubric {\n  \n    padding-bottom:40px;\n    padding-top: 80px;\n    font-size: 3rem;\n  }\n  .project {\n    max-width: 600px;\n    margin-bottom: 80px;\n  }\n\n  .project .image{\n\n   max-height:400px;\n   overflow: hidden;\n  }\n  .project img {\n    max-width: 600px;\n    object-fit: cover;\n    margin-bottom: 100px;\n  }\n\n\n  .project h4 {\n    font-size: 1.5rem;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  footer {\n    background-color: rgb(224, 222, 250, 0.3);\n    display: flex;\n  }\n\n  .contact {\n    display: flex;\n    justify-content: center;\n    width: 100vw;\n    margin-right: 10%;\n  }\n\n  .contact .info {\n    padding-top: 100px;\n    padding-right: 20px;\n    margin-left: 15%;\n    min-width: 400px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    max-width: 600px;\n  }\n\n  .contact h4 {\n    font-size: 2.5rem;\n  }\n  .contact p {\n    font-size: 1.5rem;\n  }\n\n  .contact img {\n    max-width: 600px;\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n}\n@media (min-width:1100px) and (max-width: 1300px) {\n  header {\n    background-image: url(\"./images/treebackground.jpg\");\n    background-size: contain;\n    padding-bottom: 200px;\n  }\n  .aboutMe {\n    position: relative;\n    width: 1000px;\n    font-size: 1.2rem;\n    margin: 0 auto;\n    padding-top: 100px;\n  }\n\n  .aboutMe .titleName {\n    font-size: 4rem;\n    position: absolute;\n    top: 120px;\n    right: 50px;\n  }\n\n  .aboutMe .imageContainer {\n    \n    margin-right: 25px;\n    float: left;\n  }\n\n  .personalImage {\n    width: 600px;\n    height: 420px;\n    box-shadow: 30px 40px 50px 10px rgb(180, 180, 180);\n  }\n\n  .textContainer {\n    margin-left: 250px;\n    margin-top: 180px;\n    padding-left: 10px;\n    background-color: rgb(255, 255, 255, 0.1);\n  }\n  .textContainer h2 {\n    text-align: center;\n    font-size: 3rem;\n    margin-bottom: 20px;\n    padding-top: 20px;\n    margin-bottom: 10px;\n  }\n  .textContainer p {\n    font-size: 2rem;\n    color: rgb(37, 36, 36);\n  }\n\n  /* MAIN */\n  .projectContainer {\n    display: grid;\n    justify-items: center;\n    justify-content: center;\n    grid-template-columns: repeat(auto-fill, minmax(900px, 1fr));\n  }\n  .rubric {\n    padding: 30px;\n    font-size: 3rem;\n    text-align: center;\n  }\n  .project {\n   \n    margin-bottom: 100px;\n    max-width: 900px;\n  }\n\n  .project .image {\n    overflow: hidden;\n  }\n\n  .project img {\n    max-width: 900px;\n    object-fit: cover;\n    margin-bottom: 30px;\n  }\n\n  .project h4 {\n    font-size: 1.5rem;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  footer {\n    background-color: rgb(224, 222, 250, 0.3);\n    display: flex;\n  }\n\n  .contact {\n    display: flex;\n    justify-content: center;\n    width: 100vw;\n    margin-right: 10%;\n  }\n\n  .contact .info {\n    padding-top: 100px;\n    padding-right: 20px;\n    margin-left: 15%;\n    min-width: 400px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    max-width: 600px;\n  }\n\n  .contact h4 {\n    font-size: 2.5rem;\n  }\n  .contact p {\n    font-size: 1.5rem;\n  }\n\n  .contact img {\n    max-width: 400px;\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n}\n\n@media (max-width: 1100px) {\n  header {\n    background-image: url(\"./images/treebackground.jpg\");\n    background-size: contain;\n    display: flex;\n    justify-content: center;\n\n  }\n  .aboutMe {\n    position: relative;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 800px;\n    padding-top: 100px;\n    padding-right: 50px;\n    padding-left: 50px;\n    padding-bottom: 150px;\n  }\n\n  .aboutMe .titleName {\n    font-size: clamp(1rem, 1.5rem + 3vw, 4rem);\n    color: white;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n  }\n\n  .aboutMe .imageContainer {\n    position: relative;\n   \n  }\n\n  .personalImage {\n    width: 100%;\n    box-shadow: 5px 5px 5px 1px rgb(180, 180, 180);\n  }\n\n  .textContainer {\n\n    background-color: rgb(255, 255, 255, 0.1);\n    padding-top: 100px;\n    max-width: 600px;\n    padding-right: 30px;\n    padding-left: 30px;\n  }\n  .textContainer h2 {\n    text-align: center;\n    font-size: clamp(1.5rem, 1.5rem + 2vw, 4rem);\n    margin-bottom: 20px;\n    padding-top: 20px;\n    margin-bottom: 10px;\n  }\n  .textContainer p {\n    font-size: clamp(1rem, 1rem + 1.5vw, 3rem);\n    color: rgb(37, 36, 36);\n    margin-left: 5%;\n    \n \n  }\n\n  /* MAIN */\n  .projectContainer {\n    display: grid;\n    justify-items: center;\n    justify-content: center;\n    grid-template-columns: repeat(auto-fill, minmax(350px, 90%));\n  }\n  .rubric {\n    padding: 30px;\n    font-size: 3rem;\n    text-align: center;\n  }\n  .project {\n   \n    margin-bottom: 100px;\n    max-width:700px;\n\n  }\n  \n  .project .image {\n    overflow: hidden;\n    max-width:700px;\n  }\n\n  .project img {\n    width: 100%;\n    margin-bottom: 30px;\n  }\n\n  .project h4 {\n    font-size: 1.5rem;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .project p {\n    font-size: clamp(1rem, 1rem + 1.5vw, 3rem);\n  }\n  footer {\n    background-color: rgb(224, 222, 250, 0.3);\n    display: flex;\n  }\n\n  .contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-right: 20px;\n    padding-left: 20px;\n  \n  \n  }\n\n  .contact .info {\n    padding-top: 100px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    min-width: 300px;\n  }\n\n  .contact h4 {\n    font-size: clamp(1.5rem, 1.5rem + 2vw, 2rem);\n  }\n  .contact p {\n    font-size: clamp(1rem, 1rem + 2vw, 4rem);\n  }\n\n  .contact img {\n    width: 100%;\n    padding-top: 100px;\n    padding-bottom: 100px;\n   \n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJNQUFrRjtBQUM5SCw0Q0FBNEMsbUlBQThDO0FBQzFGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE9BQU8s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QTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9QbGF5ZmFpcl9EaXNwbGF5L1BsYXlmYWlyRGlzcGxheS1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvdHJlZWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyRGlzcGxheVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KVxuICAgIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyRGlzcGxheVwiO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTMwMXB4KSB7XG4gIC8qIEhlYWRlciAqL1xuXG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbiAgfVxuXG4gIC5hYm91dE1lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBnYXA6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIH1cblxuICAuYWJvdXRNZSAudGl0bGVOYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMnZ3ICsgMXJlbSwgNHJlbSk7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hYm91dE1lIC5pbWFnZUNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIFxuICB9XG5cbiAgLmFib3V0TWUgLnBlcnNvbmFsSW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDVweCByZ2IoMTgwLCAxODAsIDE4MCk7XG4gIH1cblxuICAudGV4dENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICB9XG4gIC50ZXh0Q29udGFpbmVyIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbiAgLnRleHRDb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiByZ2IoMzcsIDM2LCAzNik7XG4gIH1cblxuICAvKiBNQUlOICovXG4gIC5wcm9qZWN0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg2MDBweCwgMWZyKSk7XG4gIH1cblxuICAucnVicmljIHtcbiAgXG4gICAgcGFkZGluZy1ib3R0b206NDBweDtcbiAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbiAgLnByb2plY3Qge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgfVxuXG4gIC5wcm9qZWN0IC5pbWFnZXtcblxuICAgbWF4LWhlaWdodDo0MDBweDtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnByb2plY3QgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICB9XG5cblxuICAucHJvamVjdCBoNCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjIsIDI1MCwgMC4zKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICB9XG5cbiAgLmNvbnRhY3QgLmluZm8ge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cblxuICAuY29udGFjdCBoNCB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmNvbnRhY3QgcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICAuY29udGFjdCBpbWcge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6MTEwMHB4KSBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIH1cbiAgLmFib3V0TWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgfVxuXG4gIC5hYm91dE1lIC50aXRsZU5hbWUge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMjBweDtcbiAgICByaWdodDogNTBweDtcbiAgfVxuXG4gIC5hYm91dE1lIC5pbWFnZUNvbnRhaW5lciB7XG4gICAgXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLnBlcnNvbmFsSW1hZ2Uge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICAgIGJveC1zaGFkb3c6IDMwcHggNDBweCA1MHB4IDEwcHggcmdiKDE4MCwgMTgwLCAxODApO1xuICB9XG5cbiAgLnRleHRDb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxODBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgLnRleHRDb250YWluZXIgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC50ZXh0Q29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogcmdiKDM3LCAzNiwgMzYpO1xuICB9XG5cbiAgLyogTUFJTiAqL1xuICAucHJvamVjdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoOTAwcHgsIDFmcikpO1xuICB9XG4gIC5ydWJyaWMge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucHJvamVjdCB7XG4gICBcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICB9XG5cbiAgLnByb2plY3QgLmltYWdlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnByb2plY3QgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAucHJvamVjdCBoNCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjIsIDI1MCwgMC4zKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICB9XG5cbiAgLmNvbnRhY3QgLmluZm8ge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cblxuICAuY29udGFjdCBoNCB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmNvbnRhY3QgcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICAuY29udGFjdCBpbWcge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIH1cbiAgLmFib3V0TWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbiAgfVxuXG4gIC5hYm91dE1lIC50aXRsZU5hbWUge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS41cmVtICsgM3Z3LCA0cmVtKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYWJvdXRNZSAuaW1hZ2VDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIFxuICB9XG5cbiAgLnBlcnNvbmFsSW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDFweCByZ2IoMTgwLCAxODAsIDE4MCk7XG4gIH1cblxuICAudGV4dENvbnRhaW5lciB7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgfVxuICAudGV4dENvbnRhaW5lciBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAxLjVyZW0gKyAydncsIDRyZW0pO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAudGV4dENvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDFyZW0gKyAxLjV2dywgM3JlbSk7XG4gICAgY29sb3I6IHJnYigzNywgMzYsIDM2KTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgXG4gXG4gIH1cblxuICAvKiBNQUlOICovXG4gIC5wcm9qZWN0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwgOTAlKSk7XG4gIH1cbiAgLnJ1YnJpYyB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5wcm9qZWN0IHtcbiAgIFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIG1heC13aWR0aDo3MDBweDtcblxuICB9XG4gIFxuICAucHJvamVjdCAuaW1hZ2Uge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOjcwMHB4O1xuICB9XG5cbiAgLnByb2plY3QgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLnByb2plY3QgaDQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5wcm9qZWN0IHAge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXJlbSArIDEuNXZ3LCAzcmVtKTtcbiAgfVxuICBmb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyMiwgMjUwLCAwLjMpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuY29udGFjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIFxuICBcbiAgfVxuXG4gIC5jb250YWN0IC5pbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgLmNvbnRhY3QgaDQge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAxLjVyZW0gKyAydncsIDJyZW0pO1xuICB9XG4gIC5jb250YWN0IHAge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXJlbSArIDJ2dywgNHJlbSk7XG4gIH1cblxuICAuY29udGFjdCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICBcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCO3NCQUNvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDViw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXOztFQUVYO0lBQ0UseURBQW9EO0lBQ3BELHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Is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V0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSx5Q0FBeUM7SUFDekMsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7O0VBR3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDRDQUE0QztFQUM5QztFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7O0VBRXZCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyRGlzcGxheVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9QbGF5ZmFpcl9EaXNwbGF5L1BsYXlmYWlyRGlzcGxheS1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXFxcIilcXG4gICAgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpckRpc3BsYXlcXFwiO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTMwMXB4KSB7XFxuICAvKiBIZWFkZXIgKi9cXG5cXG4gIGhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvdHJlZWJhY2tncm91bmQuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcXG4gIH1cXG5cXG4gIC5hYm91dE1lIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgfVxcblxcbiAgLmFib3V0TWUgLnRpdGxlTmFtZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDJ2dyArIDFyZW0sIDRyZW0pO1xcbiAgICBib3R0b206IDMwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuYWJvdXRNZSAuaW1hZ2VDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBcXG4gIH1cXG5cXG4gIC5hYm91dE1lIC5wZXJzb25hbEltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDVweCByZ2IoMTgwLCAxODAsIDE4MCk7XFxuICB9XFxuXFxuICAudGV4dENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXG4gIH1cXG4gIC50ZXh0Q29udGFpbmVyIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuICAudGV4dENvbnRhaW5lciBwIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogcmdiKDM3LCAzNiwgMzYpO1xcbiAgfVxcblxcbiAgLyogTUFJTiAqL1xcbiAgLnByb2plY3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDYwMHB4LCAxZnIpKTtcXG4gIH1cXG5cXG4gIC5ydWJyaWMge1xcbiAgXFxuICAgIHBhZGRpbmctYm90dG9tOjQwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuICAucHJvamVjdCB7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdCAuaW1hZ2V7XFxuXFxuICAgbWF4LWhlaWdodDo0MDBweDtcXG4gICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbiAgLnByb2plY3QgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgfVxcblxcblxcbiAgLnByb2plY3QgaDQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyMiwgMjUwLCAwLjMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gIH1cXG5cXG4gIC5jb250YWN0IC5pbmZvIHtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdCBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcbiAgLmNvbnRhY3QgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjExMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy90cmVlYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XFxuICB9XFxuICAuYWJvdXRNZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICB9XFxuXFxuICAuYWJvdXRNZSAudGl0bGVOYW1lIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTIwcHg7XFxuICAgIHJpZ2h0OiA1MHB4O1xcbiAgfVxcblxcbiAgLmFib3V0TWUgLmltYWdlQ29udGFpbmVyIHtcXG4gICAgXFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICB9XFxuXFxuICAucGVyc29uYWxJbWFnZSB7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiA0MjBweDtcXG4gICAgYm94LXNoYWRvdzogMzBweCA0MHB4IDUwcHggMTBweCByZ2IoMTgwLCAxODAsIDE4MCk7XFxuICB9XFxuXFxuICAudGV4dENvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTgwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICB9XFxuICAudGV4dENvbnRhaW5lciBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIC50ZXh0Q29udGFpbmVyIHAge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiByZ2IoMzcsIDM2LCAzNik7XFxuICB9XFxuXFxuICAvKiBNQUlOICovXFxuICAucHJvamVjdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDkwMHB4LCAxZnIpKTtcXG4gIH1cXG4gIC5ydWJyaWMge1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5wcm9qZWN0IHtcXG4gICBcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICAgIG1heC13aWR0aDogOTAwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdCAuaW1hZ2Uge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcblxcbiAgLnByb2plY3QgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdCBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjIyLCAyNTAsIDAuMyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAuY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgLmluZm8ge1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0IGg0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxuICAuY29udGFjdCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuXFxuICAuY29udGFjdCBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy90cmVlYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIH1cXG4gIC5hYm91dE1lIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XFxuICB9XFxuXFxuICAuYWJvdXRNZSAudGl0bGVOYW1lIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjVyZW0gKyAzdncsIDRyZW0pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFib3V0TWUgLmltYWdlQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgIFxcbiAgfVxcblxcbiAgLnBlcnNvbmFsSW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggMXB4IHJnYigxODAsIDE4MCwgMTgwKTtcXG4gIH1cXG5cXG4gIC50ZXh0Q29udGFpbmVyIHtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgfVxcbiAgLnRleHRDb250YWluZXIgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAxLjVyZW0gKyAydncsIDRyZW0pO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIC50ZXh0Q29udGFpbmVyIHAge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDFyZW0gKyAxLjV2dywgM3JlbSk7XFxuICAgIGNvbG9yOiByZ2IoMzcsIDM2LCAzNik7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgXFxuIFxcbiAgfVxcblxcbiAgLyogTUFJTiAqL1xcbiAgLnByb2plY3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwgOTAlKSk7XFxuICB9XFxuICAucnVicmljIHtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAucHJvamVjdCB7XFxuICAgXFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgICBtYXgtd2lkdGg6NzAwcHg7XFxuXFxuICB9XFxuICBcXG4gIC5wcm9qZWN0IC5pbWFnZSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1heC13aWR0aDo3MDBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QgaDQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0IHAge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDFyZW0gKyAxLjV2dywgM3JlbSk7XFxuICB9XFxuICBmb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjIsIDI1MCwgMC4zKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgXFxuICBcXG4gIH1cXG5cXG4gIC5jb250YWN0IC5pbmZvIHtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdCBoNCB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAxLjVyZW0gKyAydncsIDJyZW0pO1xcbiAgfVxcbiAgLmNvbnRhY3QgcCB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXJlbSArIDJ2dywgNHJlbSk7XFxuICB9XFxuXFxuICAuY29udGFjdCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxuICAgXFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9