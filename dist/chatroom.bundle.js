/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/chatroom.js":
/*!****************************!*\
  !*** ./src/js/chatroom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\n/** not using qs */\n// var qs = require(\"qs\");\n// const { username, room } = qs.parse(location.search, {\n//   ignoreQueryPrefix: true,\n// });\n// console.log(location.search);\n// console.log(window.location);\n\nvar socket = io();\nvar username = sessionStorage.getItem(\"username\");\nvar room = sessionStorage.getItem(\"room\");\nconsole.log({\n  username: username,\n  room: room\n});\nsocket.on(\"message\", function (message) {\n  return console.log(message);\n});\n/** on joining room */\n\nsocket.emit(\"join-room\", {\n  username: username,\n  room: room\n});\n/** chowing usersList */\n\nsocket.on(\"user-list\", function (message) {\n  showUserList(message);\n});\n/** DOM's */\n\nvar messageContainer = document.getElementById(\"chats\");\n/** On window load */\n\nwindow.addEventListener(\"load\", function () {\n  /** get sessionStorage */\n  var username = sessionStorage.getItem(\"username\");\n  var room = sessionStorage.getItem(\"room\");\n  /** set room name */\n\n  var room_name = document.getElementById(\"room-name\");\n  room_name.innerHTML = \"<p>\".concat(room, \"</p>\");\n});\n/** Message Submit */\n\nvar form = document.querySelector(\".chat-message\");\nform.addEventListener(\"submit\", function (e) {\n  e.preventDefault();\n  /** get message text */\n\n  var msg = e.target.elements.messageSent.value;\n  /** emit the message, along with the sender's name, to server */\n\n  socket.emit(\"chatmessage\", {\n    msg: msg,\n    user: sessionStorage.getItem(\"username\"),\n    room: sessionStorage.getItem(\"room\")\n  });\n  /** clear the input */\n\n  e.target.elements.messageSent.value = \"\";\n  e.target.elements.messageSent.focus;\n});\n/** show messages by bot on the DOM */\n\nsocket.on(\"message\", function (message) {\n  outputMessage(message);\n  /** scroll down */\n\n  messageContainer.scrollTop = messageContainer.scrollHeight;\n});\n/** show chatmessages on DOM */\n\nsocket.on(\"chatmessage\", function (message) {\n  outputMessage(message);\n  /** scroll down */\n  //scrollTop = how much scrolled.\n  // scrollHeight = how much hidden.\n\n  messageContainer.scrollTop = messageContainer.scrollHeight;\n});\n/** show users on the board ??????? */\n\nsocket.on(\"user-name\", function (name) {\n  console.log(\"user\", name);\n  var userlist = document.querySelector(\".user-list\");\n  name.map(function (item) {\n    return userlist.innerHTML += \"<li>\".concat(name, \"</li>\");\n  });\n});\n/** onCLick go to chatroom */\n\nvar leaveButton = document.querySelector(\".leave-button\");\nleaveButton.addEventListener(\"click\", function () {\n  window.location.assign(\"./\");\n  sessionStorage.setItem(\"username\", \"\");\n  sessionStorage.setItem(\"room\", \"\");\n});\n/** output message to dom */\n\nfunction outputMessage(message) {\n  var messagebox = document.getElementById(\"chats\");\n  messagebox.innerHTML += \"<div class=\\\"chat-board\\\" id=\\\"chat-board\\\">\\n    <div class=\\\"chat-board-info\\\">\\n      <p><b>\".concat(message.username, \"</b></p>\\n      <p><b>\").concat(message.time, \"</b></p>\\n    </div>\\n    <div class=\\\"chat-board-text\\\">\\n      <div id=\\\"chatmessagebox\\\"><p>\").concat(message.text, \"</p></div>\\n    </div>\\n  </div>\");\n}\n\nfunction showUserList(lists) {\n  var userList = document.querySelector(\".user-list\");\n  /** empty list before adding the list */\n\n  userList.innerHTML = \"\";\n  lists.forEach(function (list) {\n    return userList.innerHTML += \"<li>\".concat(list.username, \"</li>\");\n  });\n}\n\n//# sourceURL=webpack://chatroom/./src/js/chatroom.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --dark-color-a: #667aff;\\n  --dark-color-b: #7386ff;\\n  --dark-color-c: #717dcc;\\n  --light-color: #e6e9ff;\\n  --success-color: #5cb85c;\\n  --error-color: #d9534f;\\n}\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n.main-container {\\n  background: #7386ff;\\n  /* display: flex; */\\n  /* justify-content: center; */\\n}\\nheader {\\n  background: #667aff;\\n}\\n.loginbody {\\n  background: #e6e9ff;\\n}\\n/* chat*/\\n/* chat-header*/\\n.chat-container {\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: #7386ff;\\n}\\n.chatbod {\\n  background: #ffffffab;\\n  width: 90%;\\n  max-width: 1050px;\\n  /* height: auto; */\\n  /* height: 60%;\\n  max-height: 50vh; */\\n  /* max-height: 60%; */\\n  display: flex;\\n  flex-direction: column;\\n}\\n.chat-header {\\n  display: flex;\\n  justify-content: space-between;\\n  background-color: #667aff;\\n  /* background-color: #a7b0eb; */\\n  padding: 1rem;\\n}\\n.chat-logo {\\n  display: flex;\\n}\\n.chat-logo h3,\\nh1 {\\n  margin-left: 0.3rem;\\n  font-size: 1.7rem;\\n  color: #bec5f5;\\n}\\n.chat-logo i {\\n  font-size: 2rem;\\n  color: rgb(240, 216, 6);\\n}\\n.chat-leave-btn {\\n  font-size: 1rem;\\n  padding: 0.4rem;\\n  color: #1c2d9c;\\n}\\n/* chat-body*/\\n.chat-body {\\n  display: flex;\\n  /* min-height: 300px; */\\n  max-height: 65vh;\\n}\\n/* lists (left) */\\n.lists {\\n  /* background: var(--dark-color-c); */\\n  background: #e6e9ff8a;\\n  width: 20%;\\n}\\n.lists-header {\\n  /* height: 25%; */\\n  padding: 0.5rem;\\n}\\n.room-name {\\n  background-color: #8c90a870;\\n  margin: 0.5rem;\\n  text-align: center;\\n  max-height: 80px;\\n  /* overflow: scroll; */\\n  overflow: auto;\\n}\\n.room-name p {\\n  padding: 0.5rem;\\n  text-overflow: ellipsis;\\n  word-wrap: break-word;\\n  /* max-width: 10px; */\\n}\\n.lists-items {\\n  height: 80%;\\n  padding: 0.5rem;\\n}\\n.user-list {\\n  text-decoration: none;\\n  list-style: none;\\n  max-height: 100%;\\n  overflow: auto;\\n}\\n.user-list li {\\n  padding-top: 0.5rem;\\n}\\n/* chat (right) */\\n.chats {\\n  background-color: #bec5f5;\\n  width: 80%;\\n  max-height: 100%;\\n  overflow: auto;\\n}\\n.chat-message {\\n  display: flex;\\n  justify-content: flex-start;\\n  background-color: #e4e5ee;\\n  padding: 1rem;\\n}\\n.chat-board {\\n  background-color: ivory;\\n  margin: 1rem;\\n  border-radius: 5px;\\n  -webkit-border-radius: 5px;\\n  -moz-border-radius: 5px;\\n  -ms-border-radius: 5px;\\n  -o-border-radius: 5px;\\n}\\n.chat-board-info {\\n  display: flex;\\n  padding: 0.5rem;\\n}\\n.chat-board-info p {\\n  margin-right: 0.5rem;\\n  font-size: 0.8rem;\\n  color: #6476ee;\\n}\\n.chat-board-text {\\n  /* text-overflow: clip; */\\n  word-wrap: break-word;\\n  padding: 0 0.5rem 0.5rem 0.5rem;\\n}\\n/**form*/\\n.form-input {\\n  width: 90%;\\n  font-size: 1rem;\\n  padding: 0.3rem;\\n}\\n.form-submit {\\n  font-size: 1rem;\\n  width: 10%;\\n  transform: scale(1.05);\\n  background-color: #667aff;\\n  border: none;\\n  color: #e4e5ee;\\n  -webkit-transform: scale(1.05);\\n  -moz-transform: scale(1.05);\\n  -ms-transform: scale(1.05);\\n  -o-transform: scale(1.05);\\n}\\n/* links a*/\\na {\\n  text-decoration: none;\\n  display: block;\\n  height: 100%;\\n  width: 100%;\\n  color: #414349;\\n  z-index: -1;\\n}\\n.join-chat {\\n  border: 1px solid rgb(124, 122, 122);\\n  padding-top: 0.3rem;\\n  padding-bottom: 0.3rem;\\n  background-color: #fefeff;\\n  border-radius: 0.1rem;\\n  -webkit-border-radius: 0.1rem;\\n  -moz-border-radius: 0.1rem;\\n  -ms-border-radius: 0.1rem;\\n  -o-border-radius: 0.1rem;\\n}\\n.join-in {\\n  margin-right: 0.7rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://chatroom/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://chatroom/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://chatroom/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://chatroom/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/chatroom.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;