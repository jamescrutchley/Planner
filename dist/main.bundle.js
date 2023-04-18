(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! trash.svg */ "./src/trash.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nbutton:hover {\n  cursor: pointer;\n  width: 1.1rem;\n  filter: brightness(1.05);\n}\nbutton:active {\n  transform: scale(1.01);\n}\n\n.hidden {\n  display: none !important;\n}\n\n.complete {\n  text-decoration: line-through !important;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #f9f7f3;\n  background-image: url(\"https://www.transparenttextures.com/patterns/beige-paper.png\");\n  height: auto;\n}\n\n#header {\n  display: flex;\n  flex-wrap: nowrap;\n  top: 0px;\n  border: none;\n  width: 100vw;\n  z-index: 9000;\n  grid-area: header;\n  height: calc(15vh + 1vw);\n  position: fixed;\n  background-color: #0fa3b1;\n  background-image: url(\"https://www.transparenttextures.com/patterns/beige-paper.png\");\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n  align-items: center;\n  justify-content: center;\n}\n#header h1 {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  font-family: \"Calligraffitti\", cursive;\n  color: #f9f7f3;\n  font-size: calc(1.6rem + 3vw);\n  text-align: center;\n  padding: 1rem 0rem 1rem 1.5rem;\n}\n#header img {\n  transform: scale(0.8);\n  filter: invert(0.93);\n}\n\n#add-item-form, #edit-item-form {\n  border-radius: 10px;\n  border: solid #0fa3b1 3px;\n  position: fixed;\n  top: 20%;\n  right: 5%;\n  z-index: 99999;\n  background-color: #bbedf3;\n  width: 90vw;\n  height: fit-content;\n}\n#add-item-form #close-form, #edit-item-form #close-form {\n  position: absolute;\n  right: 1rem;\n  align-self: flex-end;\n  text-align: center;\n  background-color: transparent;\n  color: #f9f7f3;\n  border: none;\n  height: fit-content;\n  font-size: 3rem;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#add-item-form ul, #edit-item-form ul {\n  padding: 1rem;\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n#add-item-form ul .form-row:first-child, #edit-item-form ul .form-row:first-child {\n  background-color: #bbedf3;\n  border-bottom: #0fa3b1 solid 2px;\n  justify-self: stretch;\n  align-self: stretch;\n}\n#add-item-form ul .form-row:first-child p, #edit-item-form ul .form-row:first-child p {\n  text-align: center;\n  font-weight: bold;\n  font-size: calc(20px + 1vw);\n  margin: 1rem 0rem 1rem 0rem;\n}\n#add-item-form ul .form-row:last-child, #edit-item-form ul .form-row:last-child {\n  align-self: center;\n  width: fit-content;\n  margin: 1rem;\n}\n#add-item-form ul .form-row, #edit-item-form ul .form-row {\n  width: 100%;\n  height: 25%;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: flex-start;\n  margin-bottom: 1rem;\n}\n#add-item-form ul .form-row label, #edit-item-form ul .form-row label {\n  margin-bottom: 5px;\n  display: block;\n  font-size: 1rem;\n  padding: 0 20px 0 10px;\n}\n#add-item-form ul .form-row input, #edit-item-form ul .form-row input {\n  background-color: #FFFFFF;\n  border: 1px solid #D6D9DC;\n  border-radius: 3px;\n  width: 100%;\n  padding: 7px;\n  font-size: 1rem;\n}\n#add-item-form ul .form-row button, #edit-item-form ul .form-row button {\n  display: flex;\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #FFFFFF;\n  background-color: #0fa3b1;\n  border: none;\n  border-radius: 3px;\n  padding: 1rem;\n  margin-top: 2rem 0rem 2rem 0rem;\n  cursor: pointer;\n}\n\n#content-area {\n  position: absolute;\n  top: calc(18vh + 1vw);\n  height: fit-content;\n  margin: 0.5rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 4fr 1fr;\n  grid-template-areas: \"content controls\";\n}\n#content-area #list-controls {\n  grid-area: controls;\n  display: flex;\n}\n#content-area #list-controls #sort-button {\n  align-self: flex-start;\n  text-align: center;\n  background-color: #bbedf3;\n  color: #333333;\n  border: none;\n  border-radius: 10px;\n  font-size: calc(0.6rem + 1vw);\n  height: fit-content;\n  padding: 0.8rem;\n  width: 20vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#content-area #list-controls #sort-button::after {\n  content: \"Date Ascending\\a↑\";\n  display: block;\n  color: gray;\n  font-size: calc(0.4rem + 1vw);\n  padding-top: 0.5rem;\n}\n#content-area #list-controls #sort-button.descending::after {\n  content: \"Date Descending\\a↓\";\n  text-align: center;\n  display: block;\n  color: gray;\n  font-size: calc(0.4rem + 1vw);\n  padding-top: 0.5rem;\n}\n#content-area #footer {\n  z-index: 100;\n  height: 30vh;\n  width: 100vw;\n  position: fixed;\n  bottom: 0%;\n}\n#content-area #footer::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 50vh;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 100%);\n  z-index: -1;\n}\n\n#modal-popup-button {\n  color: #eddea4;\n  z-index: 1000;\n  background-color: #0fa3b1;\n  border: none;\n  border-radius: 100px;\n  font-size: calc(10vh + 20px);\n  position: fixed;\n  bottom: 5%;\n  transform: translateX(-50%);\n  left: 75%;\n  width: calc(30vw - 40px);\n  height: calc(30vw - 40px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#delete-buttons {\n  z-index: 9000;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n#delete-buttons #delete-options-button {\n  border: none;\n  background-color: #f7a072;\n  border-radius: 100px;\n  position: fixed;\n  width: calc(30vw - 40px);\n  height: calc(30vw - 40px);\n  bottom: 5%;\n  transform: translateX(-50%);\n  left: 25%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#delete-buttons #delete-options-button #delete-options-icon {\n  height: calc(18vw - 20px);\n}\n#delete-buttons #delete-options-container {\n  position: fixed;\n  width: fit-content;\n  bottom: 5%;\n  transform: translateX(-50%);\n  left: 25%;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n#delete-buttons #delete-options-container button {\n  text-align: center;\n  background-color: #f7a072;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  height: fit-content;\n  padding: 1rem;\n  width: 40vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#delete-buttons #delete-options-container button ::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#item-list {\n  height: fit-content;\n  z-index: 0;\n  animation: fadeIn 0.5s ease-in-out forwards;\n  grid-area: content;\n  display: flex;\n  flex-flow: column nowrap;\n}\n#item-list div {\n  border-radius: 20px;\n  background-color: #bbedf3;\n  margin: 1rem;\n  display: grid;\n  grid-template: 2fr 1fr/1fr 1fr;\n  grid-template-areas: \"main buttons\" \". date\";\n}\n#item-list div:hover {\n  background-color: #bbe8f3;\n}\n#item-list div p:first-child {\n  display: flex;\n  font-family: \"Calligraffitti\", cursive;\n  padding-left: 0.5rem;\n  font-size: calc(1vw + 10px);\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n#item-list div p:first-child:hover {\n  cursor: pointer;\n}\n#item-list div p:nth-child(2) {\n  grid-area: date;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-style: italic;\n}\n#item-list div #button-box {\n  grid-area: buttons;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3px;\n  background-color: transparent;\n}\n#item-list div #button-box button {\n  text-align: center;\n  background-color: #333333;\n  color: #f8f9fa;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  height: fit-content;\n  padding: 0.8rem;\n  width: fit-content;\n}\n#item-list div:nth-child(odd) {\n  background-color: #a8d4d9;\n}\n\n*.deleted {\n  animation: fadeOut 0.5s ease-in-out forwards;\n}\n\n@media screen and (min-width: 500px) {\n  #delete-buttons #delete-options-button {\n    position: fixed;\n    left: 90%;\n    height: fit-content;\n    padding: 1rem;\n    height: 13.8vh;\n    width: 13.8vh;\n  }\n  #delete-buttons #delete-options-button #delete-options-icon {\n    height: 8vh;\n  }\n  #delete-buttons #delete-options-container {\n    position: fixed;\n    left: 90%;\n    bottom: 0%;\n    align-items: center;\n  }\n  #delete-buttons #delete-options-container button {\n    width: fit-content;\n  }\n  #add-item-form, #edit-item-form {\n    height: fit-content;\n    border-radius: 10px;\n    border: solid #0fa3b1 3px;\n    position: fixed;\n    top: 18%;\n    right: 3%;\n    z-index: 99999;\n    background-color: #bbedf3;\n    width: fit-content;\n    height: fit-content;\n  }\n  #add-item-form ul, #edit-item-form ul {\n    height: 60vh;\n  }\n  #modal-popup-button {\n    position: fixed;\n    bottom: 22%;\n    transform: translateX(-50%);\n    left: 90%;\n    display: flex;\n    font-size: 15vh;\n    height: 13.8vh;\n    width: 13.8vh;\n  }\n  #modal-popup-button p {\n    justify-self: center;\n    align-self: center;\n  }\n  #footer {\n    display: none;\n  }\n  #button-box button {\n    opacity: 50%;\n  }\n  #item-list div:hover #button-box button {\n    opacity: 70%;\n  }\n  #item-list div:hover #button-box button:hover {\n    opacity: 100%;\n  }\n}\n/* Laptops and larger */\n@media screen and (min-width: 1024px) {\n  /* Your CSS rules here */\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["// Light Mode Colors\r\n$primary-color: #0fa3b1;\r\n$secondary-color: #bbedf3;\r\n$tertiary-color: #f7a072;\r\n$text-color: #333333;\r\n$background-color: #f9f7f3;\r\n\r\n// Dark Mode Colors\r\n$text-color-dark: #f8f9fa;\r\n$background-color-dark: #212529;\r\n\r\n// Default Variables\r\n$primary: $primary-color;\r\n$secondary: $secondary-color;\r\n$text: $text-color;\r\n$background: $background-color;\r\n\r\n@keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\nbutton {\r\n  &:hover {\r\n    cursor: pointer;\r\n    width: 1.1rem;\r\n    filter: brightness(1.05);\r\n  }\r\n  &:active {\r\n    transform: scale(1.01);\r\n  }\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.complete {\r\n    text-decoration: line-through !important;\r\n    color: fade-out($color: #000000, $amount: 0.5);\r\n}\r\n\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n:root {\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: $background;\r\n  background-image: url(\"https://www.transparenttextures.com/patterns/beige-paper.png\");\r\n  height: auto;\r\n}\r\n\r\n#header {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  top: 0px;\r\n  border: none;\r\n  width: 100vw;\r\n  z-index: 9000;\r\n  grid-area: header;\r\n  height: calc(15vh + 1vw);\r\n  position: fixed;\r\n  background-color: $primary;\r\n  background-image: url(\"https://www.transparenttextures.com/patterns/beige-paper.png\");\r\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\r\n  align-items: center;\r\n  justify-content: center;\r\n  h1 {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    font-family: \"Calligraffitti\", cursive;\r\n    color: #f9f7f3;\r\n    font-size: calc(1.6rem + 3vw);\r\n    text-align: center;\r\n    padding: 1rem 0rem 1rem 1.5rem;\r\n  }\r\n  img {\r\n    transform: scale(0.8);\r\n    filter: invert(0.93);\r\n  }\r\n}\r\n\r\n#add-item-form, #edit-item-form {\r\n    border-radius: 10px;\r\n    border: solid $primary 3px;\r\n    position: fixed;\r\n    top: 20%;\r\n    right: 5%;\r\n    z-index: 99999;\r\n    background-color: $secondary;\r\n    width: 90vw;\r\n    height: fit-content;\r\n    #close-form {\r\n        position: absolute;\r\n        right: 1rem;\r\n        align-self: flex-end;\r\n        text-align: center;\r\n        background-color: transparent;\r\n        color: $background-color;\r\n        border: none;\r\n        height: fit-content;\r\n        font-size: 3rem;\r\n        width: fit-content;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    ul {\r\n        padding: 1rem;\r\n        list-style-type: none;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    .form-row:first-child {\r\n        background-color: $secondary;\r\n        border-bottom: $primary solid 2px;\r\n        justify-self: stretch;\r\n        align-self: stretch;\r\n        p {\r\n          text-align: center;\r\n          font-weight: bold;\r\n          font-size: calc(20px + 1vw);\r\n          margin: 1rem 0rem 1rem 0rem;\r\n        }\r\n    }\r\n    .form-row:last-child {\r\n        align-self: center;\r\n        width: fit-content;\r\n        margin: 1rem;\r\n    }\r\n    .form-row {\r\n        width: 100%;\r\n        height: 25%;\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        justify-content: flex-start;\r\n        margin-bottom: 1rem;\r\n        label {\r\n            margin-bottom: 5px;\r\n            display: block;\r\n            font-size: 1rem;\r\n            padding: 0 20px 0 10px;\r\n        }\r\n        input {\r\n            background-color: #FFFFFF;\r\n            border: 1px solid #D6D9DC;\r\n            border-radius: 3px;\r\n            width: 100%;\r\n            padding: 7px;\r\n            font-size: 1rem;\r\n        }\r\n        button {\r\n            display: flex;\r\n            font-size: 1.1rem;\r\n            font-weight: bold;\r\n            \r\n            color: #FFFFFF;\r\n            background-color: $primary;\r\n            \r\n            border: none;\r\n            border-radius: 3px;\r\n            \r\n            padding: 1rem;\r\n            margin-top: 2rem 0rem 2rem 0rem;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n    }\r\n}\r\n\r\n\r\n\r\n#content-area {\r\n  position: absolute;\r\n  top: calc(18vh + 1vw);\r\n  height: fit-content;\r\n  margin: 0.5rem;\r\n  display: grid;\r\n  grid-template-rows: 1fr;\r\n  grid-template-columns: 4fr 1fr;\r\n  grid-template-areas:\r\n    \"content controls\";\r\n  #list-controls {\r\n    grid-area: controls;\r\n    display: flex;\r\n    #sort-button {\r\n      align-self: flex-start;\r\n      text-align: center;\r\n      background-color: $secondary;\r\n      color: $text;\r\n      border: none;\r\n      border-radius: 10px;\r\n      font-size: calc(0.6rem + 1vw);\r\n      height: fit-content;\r\n      padding: 0.8rem;\r\n      width: 20vw;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    #sort-button::after {\r\n      content: \"Date Ascending\\a↑\";\r\n      display: block;\r\n      color: gray;\r\n      font-size: calc(0.4rem + 1vw);\r\n      padding-top: 0.5rem;\r\n    }\r\n    #sort-button.descending::after {\r\n      content: \"Date Descending\\a↓\";\r\n      text-align: center;\r\n      display: block;\r\n      color: gray;\r\n      font-size: calc(0.4rem + 1vw);\r\n      padding-top: 0.5rem;\r\n    }\r\n  }\r\n  #footer {\r\n    z-index: 100;\r\n    height: 30vh;\r\n    width: 100vw;\r\n    position: fixed;\r\n    bottom: 0%;\r\n    //opacity: 10%;\r\n    &::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      bottom: 0;\r\n      left: 0;\r\n      right: 0;\r\n      height: 50vh; // Change this to adjust the height of the fade-out effect.\r\n      background: linear-gradient(\r\n        to bottom,\r\n        rgba(255, 255, 255, 0) 0%,\r\n        white 100%\r\n      );\r\n      z-index: -1;\r\n    }\r\n  }\r\n}\r\n\r\n#modal-popup-button {\r\n  color: #eddea4;\r\n  z-index: 1000;\r\n  background-color: $primary;\r\n  border: none;\r\n  border-radius: 100px;\r\n  font-size: calc(10vh + 20px);\r\n  position: fixed;\r\n  bottom: 5%;\r\n  transform: translateX(-50%);\r\n  left: 75%;\r\n\r\n  width: calc(30vw - 40px);\r\n  height: calc(30vw - 40px);\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#delete-buttons {\r\n  z-index: 9000;\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  #delete-options-button {\r\n    border: none;\r\n    background-color: $tertiary-color;\r\n    border-radius: 100px;\r\n    //padding: 1.6rem;\r\n    position: fixed;\r\n    width: calc(30vw - 40px);\r\n    height: calc(30vw - 40px);\r\n    bottom: 5%;\r\n    transform: translateX(-50%);\r\n    left: 25%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    #delete-options-icon {\r\n      height: calc(18vw - 20px);\r\n    }\r\n  }\r\n  #delete-options-container {\r\n    position: fixed;\r\n    width: fit-content;\r\n    bottom: 5%;\r\n    transform: translateX(-50%);\r\n    left: 25%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    button {\r\n      text-align: center;\r\n      background-color: $tertiary-color;\r\n      border: none;\r\n      border-radius: 10px;\r\n      font-size: 1rem;\r\n      height: fit-content;\r\n      padding: 1rem;\r\n      width: 40vw;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      ::after {\r\n        content: url(\"trash.svg\");\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n#item-list {\r\n  height: fit-content;\r\n  z-index: 0;\r\n  animation: fadeIn 0.5s ease-in-out forwards;\r\n  grid-area: content;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  div {\r\n    border-radius: 20px;\r\n    background-color: $secondary;\r\n    margin: 1rem;\r\n    display: grid;\r\n    grid-template: 2fr 1fr / 1fr 1fr;\r\n    grid-template-areas:\r\n      \"main buttons\"\r\n      \". date\";\r\n    &:hover {\r\n        background-color: adjust-hue($color: $secondary, $degrees: 5);\r\n    }\r\n    p:first-child {\r\n      display: flex;\r\n      font-family: \"Calligraffitti\", cursive;\r\n      padding-left: 0.5rem;\r\n      font-size: calc(1vw + 10px);\r\n      font-weight: bold;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: flex-end;\r\n      &:hover {\r\n        cursor: pointer;\r\n      }\r\n    }\r\n    p:nth-child(2) {\r\n      grid-area: date;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      font-style: italic;\r\n    }\r\n    #button-box {\r\n      grid-area: buttons;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      gap: 3px;\r\n      background-color: transparent;\r\n      button {\r\n        text-align: center;\r\n        background-color: $text;\r\n        color: $text-color-dark;\r\n        border: none;\r\n        border-radius: 10px;\r\n        font-size: 0.7rem;\r\n        height: fit-content;\r\n        padding: 0.8rem;\r\n        width: fit-content;\r\n      }\r\n    }\r\n  }\r\n  div:nth-child(odd) {\r\n    background-color: #a8d4d9;\r\n  }\r\n}\r\n\r\n*.deleted {\r\n  animation: fadeOut 0.5s ease-in-out forwards;\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  #delete-buttons {\r\n    #delete-options-button {\r\n      position: fixed;\r\n      left: 90%;\r\n      height: fit-content;\r\n      padding: 1rem;\r\n      height: 13.8vh;\r\n      width: 13.8vh;\r\n      #delete-options-icon {\r\n        height: 8vh;\r\n      }\r\n    }\r\n    #delete-options-container {\r\n        position: fixed;\r\n        left: 90%;\r\n        bottom: 0%;\r\n        align-items: center;\r\n      button {\r\n        width: fit-content;\r\n        ::after {\r\n        }\r\n      }\r\n    }\r\n  }\r\n  #add-item-form, #edit-item-form {\r\n    height: fit-content;\r\n    border-radius: 10px;\r\n    border: solid $primary 3px;\r\n    position: fixed;\r\n    top: 18%;\r\n    right: 3%;\r\n    z-index: 99999;\r\n    background-color: $secondary;\r\n    width: fit-content;\r\n    height: fit-content;\r\n    ul {\r\n        height: 60vh;\r\n\r\n    }\r\n  }\r\n  #modal-popup-button {\r\n    position: fixed;\r\n    bottom: 22%;\r\n    transform: translateX(-50%);\r\n    left: 90%;\r\n    display: flex;\r\n    font-size: 15vh;\r\n\r\n    height: 13.8vh;\r\n    width: 13.8vh;\r\n\r\n    p {\r\n      justify-self: center;\r\n      align-self: center;\r\n    }\r\n  }\r\n\r\n  #footer {\r\n    display: none;\r\n  }\r\n  \r\n  #button-box button {\r\n    opacity: 50%;\r\n  }\r\n\r\n  #item-list div:hover #button-box button {\r\n    opacity: 70%;\r\n    &:hover {\r\n        opacity: 100%;\r\n    }\r\n  }\r\n}\r\n\r\n/* Laptops and larger */\r\n@media screen and (min-width: 1024px) {\r\n  /* Your CSS rules here */\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/calendar.js":
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/calendar.js ***!
  \***********************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";return function(e,t,a){var n="h:mm A",d={lastDay:"[Yesterday at] "+n,sameDay:"[Today at] "+n,nextDay:"[Tomorrow at] "+n,nextWeek:"dddd [at] "+n,lastWeek:"[Last] dddd [at] "+n,sameElse:"MM/DD/YYYY"};t.prototype.calendar=function(e,t){var n=t||this.$locale().calendar||d,o=a(e||void 0).startOf("d"),s=this.diff(o,"d",!0),i="sameElse",f=s<-6?i:s<-1?"lastWeek":s<0?"lastDay":s<1?"sameDay":s<2?"nextDay":s<7?"nextWeek":i,l=n[f]||d[f];return"function"==typeof l?l.call(this,a()):this.format(l)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/***/ (function(module) {

!function(r,e){ true?module.exports=e():0}(this,(function(){"use strict";return function(r,e,t){r=r||{};var n=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(r,e,t,o){return n.fromToBase(r,e,t,o)}t.en.relativeTime=o,n.fromToBase=function(e,n,i,d,u){for(var f,a,s,l=i.$locale().relativeTime||o,h=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=h.length,c=0;c<m;c+=1){var y=h[c];y.d&&(f=d?t(e).diff(i,y.d,!0):i.diff(e,y.d,!0));var p=(r.rounding||Math.round)(Math.abs(f));if(s=f>0,p<=y.r||!y.r){p<=1&&c>0&&(y=h[c-1]);var v=l[y.l];u&&(p=u(""+p)),a="string"==typeof v?v.replace("%d",p):v(p,n,y.l,s);break}}if(n)return a;var M=s?l.future:l.past;return"function"==typeof M?M(a):M.replace("%s",a)},n.to=function(r,e){return i(r,e,this,!0)},n.from=function(r,e){return i(r,e,this)};var d=function(r){return r.$u?t.utc():t()};n.toNow=function(r){return this.to(d(this),r)},n.fromNow=function(r){return this.from(d(this),r)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/timezone.js":
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/timezone.js ***!
  \***********************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,i,o){var r,a=function(t,n,i){void 0===i&&(i={});var o=new Date(t),r=function(t,n){void 0===n&&(n={});var i=n.timeZoneName||"short",o=t+"|"+i,r=e[o];return r||(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),e[o]=r),r}(n,i);return r.formatToParts(o)},u=function(e,n){for(var i=a(e,n),r=[],u=0;u<i.length;u+=1){var f=i[u],s=f.type,m=f.value,c=t[s];c>=0&&(r[c]=parseInt(m,10))}var d=r[3],l=24===d?0:d,v=r[0]+"-"+r[1]+"-"+r[2]+" "+l+":"+r[4]+":"+r[5]+":000",h=+e;return(o.utc(v).valueOf()-(h-=h%1e3))/6e4},f=i.prototype;f.tz=function(t,e){void 0===t&&(t=r);var n=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:t}),u=Math.round((i-new Date(a))/1e3/60),f=o(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-u,!0);if(e){var s=f.utcOffset();f=f.add(n-s,"minute")}return f.$x.$timezone=t,f},f.offsetName=function(t){var e=this.$x.$timezone||o.tz.guess(),n=a(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var s=f.startOf;f.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var n=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,t,e).tz(this.$x.$timezone,!0)},o.tz=function(t,e,n){var i=n&&e,a=n||e||r,f=u(+o(),a);if("string"!=typeof t)return o(t).tz(a);var s=function(t,e,n){var i=t-60*e*1e3,o=u(i,n);if(e===o)return[i,e];var r=u(i-=60*(o-e)*1e3,n);return o===r?[i,o]:[t-60*Math.min(o,r)*1e3,Math.max(o,r)]}(o.utc(t,i).valueOf(),f,a),m=s[0],c=s[1],d=o(m).utcOffset(c);return d.$x.$timezone=a,d},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(t){r=t}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/updateLocale.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/updateLocale.js ***!
  \***************************************************/
/***/ (function(module) {

!function(e,n){ true?module.exports=n():0}(this,(function(){"use strict";return function(e,n,t){t.updateLocale=function(e,n){var o=t.Ls[e];if(o)return(n?Object.keys(n):[]).forEach((function(e){o[e]=n[e]})),o}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/utc.js":
/*!******************************************!*\
  !*** ./node_modules/dayjs/plugin/utc.js ***!
  \******************************************/
/***/ (function(module) {

!function(t,i){ true?module.exports=i():0}(this,(function(){"use strict";var t="minute",i=/[+-]\d\d(?::?\d\d)?/g,e=/([+-]|\d\d)/g;return function(s,f,n){var u=f.prototype;n.utc=function(t){var i={date:t,utc:!0,args:arguments};return new f(i)},u.utc=function(i){var e=n(this.toDate(),{locale:this.$L,utc:!0});return i?e.add(this.utcOffset(),t):e},u.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var o=u.parse;u.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var r=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else r.call(this)};var a=u.utcOffset;u.utcOffset=function(s,f){var n=this.$utils().u;if(n(s))return this.$u?0:n(this.$offset)?a.call(this):this.$offset;if("string"==typeof s&&(s=function(t){void 0===t&&(t="");var s=t.match(i);if(!s)return null;var f=(""+s[0]).match(e)||["-",0,0],n=f[0],u=60*+f[1]+ +f[2];return 0===u?0:"+"===n?u:-u}(s),null===s))return this;var u=Math.abs(s)<=16?60*s:s,o=this;if(f)return o.$offset=u,o.$u=0===s,o;if(0!==s){var r=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(u+r,t)).$offset=u,o.$x.$localOffset=r}else o=this.utc();return o};var h=u.format;u.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,i)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var l=u.toDate;u.toDate=function(t){return"s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var c=u.diff;u.diff=function(t,i,e){if(t&&this.$u===t.$u)return c.call(this,t,i,e);var s=this.local(),f=n(t).local();return c.call(s,f,i,e)}}}));

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/create/addItem.js":
/*!*******************************!*\
  !*** ./src/create/addItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counter": () => (/* binding */ counter),
/* harmony export */   "itemFactory": () => (/* binding */ itemFactory)
/* harmony export */ });

// factory function to create object instances. 
// 'complete' always false on object creation.
// counter simply reflects the number of times itemFactory is called. Better ways to uniquely identify objects?

let counter = 0; 

const itemFactory = (msg, date, complete=false) => {
    const proto = {
    msg,
    date,
    complete,
  }
    const item = {msg, date, complete, id: counter++};
    return Object.assign(proto, item);
}




/***/ }),

/***/ "./src/delete/clearItem.js":
/*!*********************************!*\
  !*** ./src/delete/clearItem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearItem": () => (/* binding */ clearItem)
/* harmony export */ });
/* harmony import */ var _manageCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manageCollection */ "./src/manageCollection.js");



// simply calls the itemCollection's deleteObject method. 
// If I wanted to add an 'Are you sure?' step for the user, would this be a good place to do so?
// In its current form, is this module superfluous, or a valid case of code-splitting?

const clearItem = (id) => {
    let selection = _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].collection.find(item => item.id == id);
    _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].deleteObject(selection);
    console.log(selection, _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].collection);
}



/***/ }),

/***/ "./src/edit/editItem.js":
/*!******************************!*\
  !*** ./src/edit/editItem.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "confirmEditItem": () => (/* binding */ confirmEditItem),
/* harmony export */   "editItem": () => (/* binding */ editItem),
/* harmony export */   "toggleComplete": () => (/* binding */ toggleComplete)
/* harmony export */ });
/* harmony import */ var _manageCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manageCollection */ "./src/manageCollection.js");


const editItemMsgInput = document.querySelector('#edit-message');
const editItemDateInput = document.querySelector('#edit-date');
const editItemForm = document.querySelector('#edit-item-form');

// selectedItem matches DOM element to object instance via a data-id property assigned at element creation.
let selectedItem = null;


// let selected item properties pre-fill form inputs.
const editItem = function(id) {
    selectedItem = _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].collection.find(item => item.id == id);
    console.log('item selected: ' + selectedItem);
    editItemMsgInput.value = selectedItem.msg;
    editItemDateInput.value = selectedItem.date;
    console.log('the selected item is: ' + selectedItem + id);
    editItemForm.style.display = 'block';
};

//toggles at item's 'complete' attribute.
const toggleComplete = function(id) {
    selectedItem = _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].collection.find(item => item.id == id);
    console.log('toggle complete');
    _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].modifyObject(selectedItem, selectedItem.msg, selectedItem.date, true);
}


// handle submission of edit form - get latest input values and pass them into the modifyObject method.
const confirmEditItem = () => {
    let messageInput = editItemMsgInput.value;
    let dateInput = editItemDateInput.value;
    _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].modifyObject(selectedItem, messageInput, dateInput);
};



/***/ }),

/***/ "./src/edit/selectItem.js":
/*!********************************!*\
  !*** ./src/edit/selectItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementSelection": () => (/* binding */ elementSelection)
/* harmony export */ });

// unused/unfinished module. Was originally planning to have a globally 'active' item to facilitate user interaction.
// now using data-ids attached to interactive elements instead

const elementSelection = () => {
    const itemList = Array.from(document.querySelector('#item-list').childNodes);

    const selectItem = (target) => {
        target.classList.toggle('selected');
        //target.style.backgroundColor = 'grey';
    }
    
    if (itemList) {
        itemList.forEach(item => item.addEventListener('click', function() {
            selectItem(item)
        }));
    }
}






/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _create_addItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/addItem */ "./src/create/addItem.js");
/* harmony import */ var _render_renderCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/renderCollection */ "./src/render/renderCollection.js");
/* harmony import */ var _manageCollection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manageCollection */ "./src/manageCollection.js");
/* harmony import */ var _render_userInteraction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render/userInteraction */ "./src/render/userInteraction.js");
/* harmony import */ var _edit_selectItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/selectItem */ "./src/edit/selectItem.js");
/* harmony import */ var _render_deleteButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render/deleteButton */ "./src/render/deleteButton.js");
/* harmony import */ var _read_sortButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./read/sortButton */ "./src/read/sortButton.js");
/* harmony import */ var _render_miscIcons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./render/miscIcons */ "./src/render/miscIcons.js");











// example items
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)('feed the ducks', '2023-04-09'));
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)('start a scheme', '2023-04-11'));
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)("rock climbing", '2023-04-09'));
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)('forest clearing', '2022-04-09'));
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)('Discover a new animal', '2023-04-12'));


// call these here? 
// set up an onload event listener in each module?
// renderItems needs to go first.
(0,_render_renderCollection__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_render_userInteraction__WEBPACK_IMPORTED_MODULE_4__.setupInteraction)();
(0,_edit_selectItem__WEBPACK_IMPORTED_MODULE_5__.elementSelection)();
(0,_render_deleteButton__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_read_sortButton__WEBPACK_IMPORTED_MODULE_7__.setupSortButton)();


/***/ }),

/***/ "./src/manageCollection.js":
/*!*********************************!*\
  !*** ./src/manageCollection.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _testObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testObserver */ "./src/testObserver.js");
/* harmony import */ var _create_addItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/addItem */ "./src/create/addItem.js");



// to-do: input validation. Right place to do it? "server side"



// itemCollection Object:
// collection array contains 'items'.
// observer calls re-renders when notified. (Superfluous? Call re-render directly? Original plan was to have it work out...
// ... which objects required re-rendering, but it currently just calls a complete re-render.)
const itemCollection = {
    collection: [],
    observers: [_testObserver__WEBPACK_IMPORTED_MODULE_0__["default"]],

    // Add an observer to observer array. Unused.
    addObserver: function(observer) {
        this.observers.push(observer);
    },

    // notify observers of some change.
    notifyObservers: function(selection) {
        this.observers.forEach(observer => observer.update(selection));
      },

    // construct new item, add it to collection. 
    addObject: function(msg, date) {
        const newItem = (0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)(msg, date);
        this.collection.push(newItem);
        this.notifyObservers(newItem);
    },

    // modify an object in the collection. 
    // when 'complete' passed in just toggles the complete property. 
    // otherwise, updates the message and date properties.
    modifyObject: function(selection, newMsg, newDate, complete=null) {
        //check if valid argument
        if (complete) {
            selection.complete = !selection.complete;
            console.log(selection.complete);
        }
        console.log('MODIFY: ' + selection);
        selection.msg = newMsg;
        selection.date = newDate;
        this.notifyObservers(selection);
    },

    // clears the collection array.
    deleteAllObjects: function() {
        //are you sure?
        const newCollection = [];
        this.collection = newCollection;
        this.notifyObservers(newCollection);
    },

    //filters out an object from collection, re-assigns collection to filtered array. Good practice?
    deleteObject: function(selection) {
        //check if valid argument
        console.log('DELETE OBJECT: ' + selection);
        const newCollection = this.collection.filter(item => item !== selection);
        this.collection = newCollection;
        this.notifyObservers(selection);
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCollection);

/***/ }),

/***/ "./src/read/sortButton.js":
/*!********************************!*\
  !*** ./src/read/sortButton.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRenderList": () => (/* binding */ getRenderList),
/* harmony export */   "setupSortButton": () => (/* binding */ setupSortButton)
/* harmony export */ });
/* harmony import */ var _render_renderCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/renderCollection */ "./src/render/renderCollection.js");
/* harmony import */ var _manageCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manageCollection */ "./src/manageCollection.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);





//This module sets up a sort button the user can set to date ascending or descending.
//The setting at 'render' time will determine the order in which collection items are rendered in the render module.



let orderDescending = true;
const sortButton = document.querySelector('#sort-button');

const toggleRenderListOrder = () => {
    console.log('togglerenderlistorder' + orderDescending)
    orderDescending = !orderDescending;
    sortButton.classList.toggle('descending');
    (0,_render_renderCollection__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

const setupSortButton = () => {
    sortButton.addEventListener('click', toggleRenderListOrder);
}

const getRenderList = () => {
    let renderList = _manageCollection__WEBPACK_IMPORTED_MODULE_1__["default"].collection;
    orderDescending ? 
    renderList = renderList.sort((a, b) => dayjs__WEBPACK_IMPORTED_MODULE_2___default()(b.date) - dayjs__WEBPACK_IMPORTED_MODULE_2___default()(a.date)) :
    renderList = renderList.sort((a, b) => dayjs__WEBPACK_IMPORTED_MODULE_2___default()(a.date) - dayjs__WEBPACK_IMPORTED_MODULE_2___default()(b.date))
    
    return renderList;
};




/***/ }),

/***/ "./src/render/deleteButton.js":
/*!************************************!*\
  !*** ./src/render/deleteButton.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trash.svg */ "./src/trash.svg");


// delete button options popup. 

//Expand to have a dedicated 'modal controller' module?
//Several 'popup' elements to manage - edit form, add form, delete button options, etc. Best way to manage?


const setupDeleteButton = () => {

  const deleteOptionsContainer = document.querySelector(
    "#delete-options-container"
  );
  const deleteButtons = document.querySelectorAll(".delete-button");
  const deleteOptionsButton = document.querySelector("#delete-options-button");
  const deleteOptionsButtonIcon = document.createElement("img");
  deleteOptionsButtonIcon.src = _trash_svg__WEBPACK_IMPORTED_MODULE_0__;
  deleteOptionsButtonIcon.setAttribute("id", "delete-options-icon");
  deleteOptionsButton.appendChild(deleteOptionsButtonIcon);

  const toggleDeleteOptions = ((e) => {
    let initialState = true;

    // prevent bubbling. Best practice?
    if (e) {
      e.stopPropagation();
    }

    return (where = null, e) => {
      e.stopPropagation();

      console.log("Toggle!");

      // do nothing when body is clicked and delete options aren't visible.
      if (where == "body" && initialState == true) {
        console.log("returning");
        return;
      }

      console.log("initial" + initialState);
      initialState = !initialState;
      console.log("final" + initialState);

      deleteOptionsButton.classList.toggle("hidden");
      deleteOptionsContainer.classList.toggle("hidden");
      deleteButtons.forEach((button) => button.classList.toggle("hidden"));
    };
  })();


  //event listeners for delete buttons.

  deleteOptionsButton.addEventListener("click", function (event) {
    toggleDeleteOptions(null, event);
  });

  deleteButtons.forEach((button) =>
    button.addEventListener("click", function (event) {
      toggleDeleteOptions(null, event);
    })
  );

  // document body. 

  document.body.addEventListener("click", function (event) {
    toggleDeleteOptions("body", event);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupDeleteButton);


/***/ }),

/***/ "./src/render/getTime.js":
/*!*******************************!*\
  !*** ./src/render/getTime.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/timezone */ "./node_modules/dayjs/plugin/timezone.js");
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs_plugin_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs/plugin/calendar */ "./node_modules/dayjs/plugin/calendar.js");
/* harmony import */ var dayjs_plugin_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs/plugin/updateLocale */ "./node_modules/dayjs/plugin/updateLocale.js");
/* harmony import */ var dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_5__);









dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default()))
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default()))
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default()))
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_calendar__WEBPACK_IMPORTED_MODULE_4___default()))
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_5___default()))

// dayjs date coercion. 
// takes in object date string, returns custom ouputs like 'tomorrow'. 

const timeZone = dayjs__WEBPACK_IMPORTED_MODULE_0___default().tz.guess()

dayjs__WEBPACK_IMPORTED_MODULE_0___default().updateLocale('en', {
    calendar: {
      lastDay: '[Yesterday]',
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      lastWeek: '[last] dddd',
      nextWeek: 'dddd',
    }
  })


const getTime = (datestring) => {
    const input = datestring;
    const modified = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(input);
    
    return modified.calendar();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTime);

/***/ }),

/***/ "./src/render/miscIcons.js":
/*!*********************************!*\
  !*** ./src/render/miscIcons.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _diary_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../diary.svg */ "./src/diary.svg");


//import image sources, create images.

const header = document.querySelector('#header');
const headerIcon = document.createElement('img');
headerIcon.src = _diary_svg__WEBPACK_IMPORTED_MODULE_0__;
header.appendChild(headerIcon);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/render/renderCollection.js":
/*!****************************************!*\
  !*** ./src/render/renderCollection.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manageCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manageCollection */ "./src/manageCollection.js");
/* harmony import */ var _delete_clearItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delete/clearItem */ "./src/delete/clearItem.js");
/* harmony import */ var _edit_editItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit/editItem */ "./src/edit/editItem.js");
/* harmony import */ var _getTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTime */ "./src/render/getTime.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _read_sortButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../read/sortButton */ "./src/read/sortButton.js");







const renderItems = () => {

    //currently doing a full re-render on change:
    //Ways of making more efficient?
    //Will require modifying existing structure?

    const existingItemList = document.querySelector('#item-list');
    const contentArea = document.querySelector('#content-area');


    //try/catch here is a cosmetic fix only - will add infinite item-list divs if you spam the sort button.
    // easiest solution - disable action buttons for 500ms?
    // If itemList exists, adds a 'deleted' class then deletes the element after 500ms.
    if (existingItemList) {
        existingItemList.classList.add('deleted');
        setTimeout(function() {
            try {
                contentArea.removeChild(existingItemList);
            } catch {
                //
            }
          }, 500);

    };

    // creates an 'item-list' element
    const itemList = document.createElement('div');
    itemList.id = 'item-list';
    contentArea.appendChild(itemList);


    // get collection to render ordered by date either descending or ascending. 
    let renderList = (0,_read_sortButton__WEBPACK_IMPORTED_MODULE_5__.getRenderList)();

    // for each item object, create an 'item box' and append it
    renderList.forEach(item => {
        itemList.append(renderItemBox(item));
    })
}

// create individual 'item-boxes' based on item objects. 
// clickable elements are given data-ids that facilitate selection and modification of the objects.
// event listeners are added to clickable objects here - seemed convenient - should this be done elsewhere?
const renderItemBox = (item) => {
    const itemBox = document.createElement('div');

    const itemMessage = document.createElement('p');
    itemMessage.textContent = item.msg;
    itemMessage.setAttribute('data-id', item.id);
    if (item.complete) {
        itemMessage.classList.add('complete');
        itemBox.classList.add('complete');
    };
    itemMessage.addEventListener('click', function() {
        let id = itemMessage.getAttribute('data-id');
        (0,_edit_editItem__WEBPACK_IMPORTED_MODULE_2__.toggleComplete)(id);
    })

    const itemDate = document.createElement('p');
    itemDate.textContent = (0,_getTime__WEBPACK_IMPORTED_MODULE_3__["default"])(item.date);

    const buttonBox = document.createElement('div');
    buttonBox.setAttribute('id', 'button-box');

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'open-edit-button');
    editButton.setAttribute('data-id', item.id);
    editButton.addEventListener('click', function() {
        let id = editButton.getAttribute('data-id');
        (0,_edit_editItem__WEBPACK_IMPORTED_MODULE_2__.editItem)(id);
    })
    editButton.textContent = 'EDIT';

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-id', item.id);
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', function() {
        let id = deleteButton.getAttribute('data-id');
        (0,_delete_clearItem__WEBPACK_IMPORTED_MODULE_1__.clearItem)(id);
    });
    

    itemBox.append(itemMessage, itemDate, buttonBox);
    buttonBox.append(editButton, deleteButton)
    
    return itemBox;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderItems);

/***/ }),

/***/ "./src/render/userInteraction.js":
/*!***************************************!*\
  !*** ./src/render/userInteraction.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupInteraction": () => (/* binding */ setupInteraction)
/* harmony export */ });
/* harmony import */ var _manageCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manageCollection */ "./src/manageCollection.js");
/* harmony import */ var _edit_editItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit/editItem */ "./src/edit/editItem.js");




// Display and submit 'Add Item' Form.

const setupInteraction = () => {
    const addItemButton = document.querySelector('#modal-popup-button');
    const addItemForm = document.querySelector('#add-item-form');
    const editItemForm = document.querySelector('#edit-item-form');
    const submitAddItemFormButton = document.querySelector('#submit-item-button');
    const submitEditItemFormbutton = document.querySelector('#edit-item-button');
    const editItemButtons = Array.from(document.querySelectorAll('.open-edit-button'));
    const clearAllButton = document.querySelector('#clear-all-button');


    // display 'add item' form:
    const displayAddItem = () => {
        addItemForm.style.display = 'block';
        editItemForm.style.display = 'none';
    }

    addItemButton.addEventListener('click', displayAddItem);

    
    // submit 'add item' form:
    const submitAddItemForm = () => {
        // add coercion and error handling here
        let messageInput = document.querySelector('#message').value;;
        let dateInput = document.querySelector('#date').value;
        _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].addObject(messageInput, dateInput);
    }

    submitAddItemFormButton.addEventListener('click', submitAddItemForm);


    //prevent default form submission behaviour
    
    addItemForm.addEventListener('submit', event => {
        event.preventDefault();
    });
    editItemForm.addEventListener('submit', event => {
        event.preventDefault();
    })

    //submit edit item form - call external 'confirmation' function:
    submitEditItemFormbutton.addEventListener('click', function() {
        editItemForm.style.display = 'none';
        (0,_edit_editItem__WEBPACK_IMPORTED_MODULE_1__.confirmEditItem)();
    });


    // clear all button calls item collection's 'deleteAllObjects' method:
    clearAllButton.addEventListener('click', function() {
        _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].deleteAllObjects();
    });

}




/***/ }),

/***/ "./src/testObserver.js":
/*!*****************************!*\
  !*** ./src/testObserver.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manageCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageCollection */ "./src/manageCollection.js");
/* harmony import */ var _render_renderCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/renderCollection */ "./src/render/renderCollection.js");
/* harmony import */ var _render_userInteraction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/userInteraction */ "./src/render/userInteraction.js");





// simply calls a re-render at this stage.
const observeCollection = {
    update: function(selection) {
        console.log('calling a re-render...');

        (0,_render_renderCollection__WEBPACK_IMPORTED_MODULE_1__["default"])();
        //setupInteraction();
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observeCollection);

/***/ }),

/***/ "./src/diary.svg":
/*!***********************!*\
  !*** ./src/diary.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a413f4610e9820288e14.svg";

/***/ }),

/***/ "./src/trash.svg":
/*!***********************!*\
  !*** ./src/trash.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b715794063a56b6a23cb.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcs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QUNBO0FBQ0EsUUFBUSx3REFBUTtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFTO0FBQ2pCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHdUI7QUFDWTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQXdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUErQjtBQUN2QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRGdEO0FBQ0k7QUFDUTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0VBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL2NhbGVuZGFyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vdGltZXpvbmUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi91cGRhdGVMb2NhbGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi91dGMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jcmVhdGUvYWRkSXRlbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZGVsZXRlL2NsZWFySXRlbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZWRpdC9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZWRpdC9zZWxlY3RJdGVtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbWFuYWdlQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcmVhZC9zb3J0QnV0dG9uLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9yZW5kZXIvZGVsZXRlQnV0dG9uLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9yZW5kZXIvZ2V0VGltZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcmVuZGVyL21pc2NJY29ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcmVuZGVyL3JlbmRlckNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3JlbmRlci91c2VySW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3Rlc3RPYnNlcnZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwidHJhc2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEuMXJlbTtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA1KTtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY3ZjM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LnRyYW5zcGFyZW50dGV4dHVyZXMuY29tL3BhdHRlcm5zL2JlaWdlLXBhcGVyLnBuZ1xcXCIpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIHRvcDogMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgei1pbmRleDogOTAwMDtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgaGVpZ2h0OiBjYWxjKDE1dmggKyAxdncpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmYTNiMTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93d3cudHJhbnNwYXJlbnR0ZXh0dXJlcy5jb20vcGF0dGVybnMvYmVpZ2UtcGFwZXIucG5nXFxcIik7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNoZWFkZXIgaDEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2FsbGlncmFmZml0dGlcXFwiLCBjdXJzaXZlO1xcbiAgY29sb3I6ICNmOWY3ZjM7XFxuICBmb250LXNpemU6IGNhbGMoMS42cmVtICsgM3Z3KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW0gMHJlbSAxcmVtIDEuNXJlbTtcXG59XFxuI2hlYWRlciBpbWcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMC45Myk7XFxufVxcblxcbiNhZGQtaXRlbS1mb3JtLCAjZWRpdC1pdGVtLWZvcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogc29saWQgIzBmYTNiMSAzcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDIwJTtcXG4gIHJpZ2h0OiA1JTtcXG4gIHotaW5kZXg6IDk5OTk5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZWRmMztcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuI2FkZC1pdGVtLWZvcm0gI2Nsb3NlLWZvcm0sICNlZGl0LWl0ZW0tZm9ybSAjY2xvc2UtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2Y5ZjdmMztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNhZGQtaXRlbS1mb3JtIHVsLCAjZWRpdC1pdGVtLWZvcm0gdWwge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbiNhZGQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdzpmaXJzdC1jaGlsZCwgI2VkaXQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdzpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJlZGYzO1xcbiAgYm9yZGVyLWJvdHRvbTogIzBmYTNiMSBzb2xpZCAycHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cXG4jYWRkLWl0ZW0tZm9ybSB1bCAuZm9ybS1yb3c6Zmlyc3QtY2hpbGQgcCwgI2VkaXQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdzpmaXJzdC1jaGlsZCBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpO1xcbiAgbWFyZ2luOiAxcmVtIDByZW0gMXJlbSAwcmVtO1xcbn1cXG4jYWRkLWl0ZW0tZm9ybSB1bCAuZm9ybS1yb3c6bGFzdC1jaGlsZCwgI2VkaXQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdzpsYXN0LWNoaWxkIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuI2FkZC1pdGVtLWZvcm0gdWwgLmZvcm0tcm93LCAjZWRpdC1pdGVtLWZvcm0gdWwgLmZvcm0tcm93IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbiNhZGQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdyBsYWJlbCwgI2VkaXQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdyBsYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDAgMjBweCAwIDEwcHg7XFxufVxcbiNhZGQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdyBpbnB1dCwgI2VkaXQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdyBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jYWRkLWl0ZW0tZm9ybSB1bCAuZm9ybS1yb3cgYnV0dG9uLCAjZWRpdC1pdGVtLWZvcm0gdWwgLmZvcm0tcm93IGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmYTNiMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtIDByZW0gMnJlbSAwcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudC1hcmVhIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYygxOHZoICsgMXZ3KTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjb250ZW50IGNvbnRyb2xzXFxcIjtcXG59XFxuI2NvbnRlbnQtYXJlYSAjbGlzdC1jb250cm9scyB7XFxuICBncmlkLWFyZWE6IGNvbnRyb2xzO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI2NvbnRlbnQtYXJlYSAjbGlzdC1jb250cm9scyAjc29ydC1idXR0b24ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmVkZjM7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IGNhbGMoMC42cmVtICsgMXZ3KTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICB3aWR0aDogMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2NvbnRlbnQtYXJlYSAjbGlzdC1jb250cm9scyAjc29ydC1idXR0b246OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJEYXRlIEFzY2VuZGluZ1xcXFxh4oaRXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LXNpemU6IGNhbGMoMC40cmVtICsgMXZ3KTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcbiNjb250ZW50LWFyZWEgI2xpc3QtY29udHJvbHMgI3NvcnQtYnV0dG9uLmRlc2NlbmRpbmc6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJEYXRlIERlc2NlbmRpbmdcXFxcYeKGk1xcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1zaXplOiBjYWxjKDAuNHJlbSArIDF2dyk7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG4jY29udGVudC1hcmVhICNmb290ZXIge1xcbiAgei1pbmRleDogMTAwO1xcbiAgaGVpZ2h0OiAzMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwJTtcXG59XFxuI2NvbnRlbnQtYXJlYSAjZm9vdGVyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHdoaXRlIDEwMCUpO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbiNtb2RhbC1wb3B1cC1idXR0b24ge1xcbiAgY29sb3I6ICNlZGRlYTQ7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmYTNiMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgZm9udC1zaXplOiBjYWxjKDEwdmggKyAyMHB4KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogNSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBsZWZ0OiA3NSU7XFxuICB3aWR0aDogY2FsYygzMHZ3IC0gNDBweCk7XFxuICBoZWlnaHQ6IGNhbGMoMzB2dyAtIDQwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2RlbGV0ZS1idXR0b25zIHtcXG4gIHotaW5kZXg6IDkwMDA7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcbiNkZWxldGUtYnV0dG9ucyAjZGVsZXRlLW9wdGlvbnMtYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2EwNzI7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiBjYWxjKDMwdncgLSA0MHB4KTtcXG4gIGhlaWdodDogY2FsYygzMHZ3IC0gNDBweCk7XFxuICBib3R0b206IDUlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgbGVmdDogMjUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2RlbGV0ZS1idXR0b25zICNkZWxldGUtb3B0aW9ucy1idXR0b24gI2RlbGV0ZS1vcHRpb25zLWljb24ge1xcbiAgaGVpZ2h0OiBjYWxjKDE4dncgLSAyMHB4KTtcXG59XFxuI2RlbGV0ZS1idXR0b25zICNkZWxldGUtb3B0aW9ucy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm90dG9tOiA1JTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGxlZnQ6IDI1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4jZGVsZXRlLWJ1dHRvbnMgI2RlbGV0ZS1vcHRpb25zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3YTA3MjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiA0MHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2RlbGV0ZS1idXR0b25zICNkZWxldGUtb3B0aW9ucy1jb250YWluZXIgYnV0dG9uIDo6YWZ0ZXIge1xcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuI2l0ZW0tbGlzdCB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgei1pbmRleDogMDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbn1cXG4jaXRlbS1saXN0IGRpdiB7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZWRmMztcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAyZnIgMWZyLzFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibWFpbiBidXR0b25zXFxcIiBcXFwiLiBkYXRlXFxcIjtcXG59XFxuI2l0ZW0tbGlzdCBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZThmMztcXG59XFxuI2l0ZW0tbGlzdCBkaXYgcDpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDYWxsaWdyYWZmaXR0aVxcXCIsIGN1cnNpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogY2FsYygxdncgKyAxMHB4KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4jaXRlbS1saXN0IGRpdiBwOmZpcnN0LWNoaWxkOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2l0ZW0tbGlzdCBkaXYgcDpudGgtY2hpbGQoMikge1xcbiAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuI2l0ZW0tbGlzdCBkaXYgI2J1dHRvbi1ib3gge1xcbiAgZ3JpZC1hcmVhOiBidXR0b25zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbiNpdGVtLWxpc3QgZGl2ICNidXR0b24tYm94IGJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY29sb3I6ICNmOGY5ZmE7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMC44cmVtO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG4jaXRlbS1saXN0IGRpdjpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThkNGQ5O1xcbn1cXG5cXG4qLmRlbGV0ZWQge1xcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XFxuICAjZGVsZXRlLWJ1dHRvbnMgI2RlbGV0ZS1vcHRpb25zLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogOTAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDEzLjh2aDtcXG4gICAgd2lkdGg6IDEzLjh2aDtcXG4gIH1cXG4gICNkZWxldGUtYnV0dG9ucyAjZGVsZXRlLW9wdGlvbnMtYnV0dG9uICNkZWxldGUtb3B0aW9ucy1pY29uIHtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICB9XFxuICAjZGVsZXRlLWJ1dHRvbnMgI2RlbGV0ZS1vcHRpb25zLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogOTAlO1xcbiAgICBib3R0b206IDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgI2RlbGV0ZS1idXR0b25zICNkZWxldGUtb3B0aW9ucy1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgfVxcbiAgI2FkZC1pdGVtLWZvcm0sICNlZGl0LWl0ZW0tZm9ybSB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgIzBmYTNiMSAzcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxOCU7XFxuICAgIHJpZ2h0OiAzJTtcXG4gICAgei1pbmRleDogOTk5OTk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmVkZjM7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG4gICNhZGQtaXRlbS1mb3JtIHVsLCAjZWRpdC1pdGVtLWZvcm0gdWwge1xcbiAgICBoZWlnaHQ6IDYwdmg7XFxuICB9XFxuICAjbW9kYWwtcG9wdXAtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDIyJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICBsZWZ0OiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMTV2aDtcXG4gICAgaGVpZ2h0OiAxMy44dmg7XFxuICAgIHdpZHRoOiAxMy44dmg7XFxuICB9XFxuICAjbW9kYWwtcG9wdXAtYnV0dG9uIHAge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcbiAgI2Zvb3RlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAjYnV0dG9uLWJveCBidXR0b24ge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICB9XFxuICAjaXRlbS1saXN0IGRpdjpob3ZlciAjYnV0dG9uLWJveCBidXR0b24ge1xcbiAgICBvcGFjaXR5OiA3MCU7XFxuICB9XFxuICAjaXRlbS1saXN0IGRpdjpob3ZlciAjYnV0dG9uLWJveCBidXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbn1cXG4vKiBMYXB0b3BzIGFuZCBsYXJnZXIgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gIC8qIFlvdXIgQ1NTIHJ1bGVzIGhlcmUgKi9cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBaUJoQjtFQUNFO0lBQ0UsVUFBQTtFQWZGO0VBaUJBO0lBQ0UsVUFBQTtFQWZGO0FBQ0Y7QUFrQkE7RUFDRTtJQUNFLFVBQUE7RUFoQkY7RUFrQkE7SUFDRSxVQUFBO0VBaEJGO0FBQ0Y7QUFvQkU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FBbEJKO0FBb0JFO0VBQ0Usc0JBQUE7QUFsQko7O0FBc0JBO0VBQ0Usd0JBQUE7QUFuQkY7O0FBc0JBO0VBQ0ksd0NBQUE7RUFDQSx5QkFBQTtBQW5CSjs7QUF1QkE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBcEJGOztBQXVCQTtFQUNFLHNCQUFBO0VBQ0EseUNBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFqRWlCO0VBa0VqQixxRkFBQTtFQUNBLFlBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBcEZjO0VBcUZkLHFGQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBcEJGO0FBcUJFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFuQko7QUFxQkU7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0FBbkJKOztBQXVCQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBL0djO0VBZ0hkLFdBQUE7RUFDQSxtQkFBQTtBQXBCSjtBQXFCSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBckhXO0VBc0hYLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBbkJSO0FBcUJJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFuQlI7QUFvQkk7RUFDSSx5QkF4SVU7RUF5SVYsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBbEJSO0FBbUJRO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUFqQlY7QUFvQkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWxCUjtBQW9CSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQWxCUjtBQW1CUTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQWpCWjtBQW1CUTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWpCWjtBQW1CUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLHlCQXBMSTtFQXNMSixZQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBcEJaOztBQTRCQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUNFO0FBMUJKO0FBMkJFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBekJKO0FBMEJJO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQWxOWTtFQW1OWixjQWpOTztFQWtOUCxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQXhCTjtBQTBCSTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBeEJOO0FBMEJJO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQXhCTjtBQTJCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBekJKO0FBMkJJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDZFQUFBO0VBS0EsV0FBQTtBQTdCTjs7QUFrQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQTFRYztFQTJRZCxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBRUEsd0JBQUE7RUFDQSx5QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBakNGOztBQW9DQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFqQ0Y7QUFrQ0U7RUFDRSxZQUFBO0VBQ0EseUJBalNhO0VBa1NiLG9CQUFBO0VBRUEsZUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFqQ0o7QUFrQ0k7RUFDRSx5QkFBQTtBQWhDTjtBQW1DRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBakNKO0FBa0NJO0VBQ0Usa0JBQUE7RUFDQSx5QkE1VFc7RUE2VFgsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWhDTjtBQWlDTTtFQUNFLGdEQUFBO0FBL0JSOztBQXFDQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUFsQ0Y7QUFtQ0U7RUFDRSxtQkFBQTtFQUNBLHlCQXZWYztFQXdWZCxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQ0U7QUFsQ047QUFvQ0k7RUFDSSx5QkFBQTtBQWxDUjtBQW9DSTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBbENOO0FBbUNNO0VBQ0UsZUFBQTtBQWpDUjtBQW9DSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBbENOO0FBb0NJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtBQWxDTjtBQW1DTTtFQUNFLGtCQUFBO0VBQ0EseUJBNVhLO0VBNlhMLGNBelhVO0VBMFhWLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFqQ1I7QUFxQ0U7RUFDRSx5QkFBQTtBQW5DSjs7QUF1Q0E7RUFDRSw0Q0FBQTtBQXBDRjs7QUF1Q0E7RUFFSTtJQUNFLGVBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7RUFyQ0o7RUFzQ0k7SUFDRSxXQUFBO0VBcENOO0VBdUNFO0lBQ0ksZUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7RUFyQ047RUFzQ0k7SUFDRSxrQkFBQTtFQXBDTjtFQTBDQTtJQUNFLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGNBQUE7SUFDQSx5QkFuYmM7SUFvYmQsa0JBQUE7SUFDQSxtQkFBQTtFQXhDRjtFQXlDRTtJQUNJLFlBQUE7RUF2Q047RUEyQ0E7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLDJCQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBRUEsY0FBQTtJQUNBLGFBQUE7RUExQ0Y7RUE0Q0U7SUFDRSxvQkFBQTtJQUNBLGtCQUFBO0VBMUNKO0VBOENBO0lBQ0UsYUFBQTtFQTVDRjtFQStDQTtJQUNFLFlBQUE7RUE3Q0Y7RUFnREE7SUFDRSxZQUFBO0VBOUNGO0VBK0NFO0lBQ0ksYUFBQTtFQTdDTjtBQUNGO0FBaURBLHVCQUFBO0FBQ0E7RUFDRSx3QkFBQTtBQS9DRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBMaWdodCBNb2RlIENvbG9yc1xcclxcbiRwcmltYXJ5LWNvbG9yOiAjMGZhM2IxO1xcclxcbiRzZWNvbmRhcnktY29sb3I6ICNiYmVkZjM7XFxyXFxuJHRlcnRpYXJ5LWNvbG9yOiAjZjdhMDcyO1xcclxcbiR0ZXh0LWNvbG9yOiAjMzMzMzMzO1xcclxcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmN2YzO1xcclxcblxcclxcbi8vIERhcmsgTW9kZSBDb2xvcnNcXHJcXG4kdGV4dC1jb2xvci1kYXJrOiAjZjhmOWZhO1xcclxcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICMyMTI1Mjk7XFxyXFxuXFxyXFxuLy8gRGVmYXVsdCBWYXJpYWJsZXNcXHJcXG4kcHJpbWFyeTogJHByaW1hcnktY29sb3I7XFxyXFxuJHNlY29uZGFyeTogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4kdGV4dDogJHRleHQtY29sb3I7XFxyXFxuJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yO1xcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMS4xcmVtO1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNSk7XFxyXFxuICB9XFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50O1xcclxcbiAgICBjb2xvcjogZmFkZS1vdXQoJGNvbG9yOiAjMDAwMDAwLCAkYW1vdW50OiAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3d3dy50cmFuc3BhcmVudHRleHR1cmVzLmNvbS9wYXR0ZXJucy9iZWlnZS1wYXBlci5wbmdcXFwiKTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICB0b3A6IDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHotaW5kZXg6IDkwMDA7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gIGhlaWdodDogY2FsYygxNXZoICsgMXZ3KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3d3dy50cmFuc3BhcmVudHRleHR1cmVzLmNvbS9wYXR0ZXJucy9iZWlnZS1wYXBlci5wbmdcXFwiKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGgxIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ2FsbGlncmFmZml0dGlcXFwiLCBjdXJzaXZlO1xcclxcbiAgICBjb2xvcjogI2Y5ZjdmMztcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDEuNnJlbSArIDN2dyk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwcmVtIDFyZW0gMS41cmVtO1xcclxcbiAgfVxcclxcbiAgaW1nIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgwLjkzKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1pdGVtLWZvcm0sICNlZGl0LWl0ZW0tZm9ybSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogc29saWQgJHByaW1hcnkgM3B4O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMjAlO1xcclxcbiAgICByaWdodDogNSU7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk5O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgI2Nsb3NlLWZvcm0ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgcmlnaHQ6IDFyZW07XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICB1bCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgLmZvcm0tcm93OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAkcHJpbWFyeSBzb2xpZCAycHg7XFxyXFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbiAgICAgICAgcCB7XFxyXFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAxcmVtIDByZW0gMXJlbSAwcmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5mb3JtLXJvdzpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9ybS1yb3cge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI1JTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweCAwIDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZEOURDO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtIDByZW0gMnJlbSAwcmVtO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNjb250ZW50LWFyZWEge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiBjYWxjKDE4dmggKyAxdncpO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIG1hcmdpbjogMC41cmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImNvbnRlbnQgY29udHJvbHNcXFwiO1xcclxcbiAgI2xpc3QtY29udHJvbHMge1xcclxcbiAgICBncmlkLWFyZWE6IGNvbnRyb2xzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAjc29ydC1idXR0b24ge1xcclxcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XFxyXFxuICAgICAgY29sb3I6ICR0ZXh0O1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjZyZW0gKyAxdncpO1xcclxcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgcGFkZGluZzogMC44cmVtO1xcclxcbiAgICAgIHdpZHRoOiAyMHZ3O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgICNzb3J0LWJ1dHRvbjo6YWZ0ZXIge1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCJEYXRlIEFzY2VuZGluZ1xcXFxh4oaRXFxcIjtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICBjb2xvcjogZ3JheTtcXHJcXG4gICAgICBmb250LXNpemU6IGNhbGMoMC40cmVtICsgMXZ3KTtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgICNzb3J0LWJ1dHRvbi5kZXNjZW5kaW5nOjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogXFxcIkRhdGUgRGVzY2VuZGluZ1xcXFxh4oaTXFxcIjtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgY29sb3I6IGdyYXk7XFxyXFxuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNHJlbSArIDF2dyk7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgI2Zvb3RlciB7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgaGVpZ2h0OiAzMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwJTtcXHJcXG4gICAgLy9vcGFjaXR5OiAxMCU7XFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgaGVpZ2h0OiA1MHZoOyAvLyBDaGFuZ2UgdGhpcyB0byBhZGp1c3QgdGhlIGhlaWdodCBvZiB0aGUgZmFkZS1vdXQgZWZmZWN0LlxcclxcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsXFxyXFxuICAgICAgICB3aGl0ZSAxMDAlXFxyXFxuICAgICAgKTtcXHJcXG4gICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwtcG9wdXAtYnV0dG9uIHtcXHJcXG4gIGNvbG9yOiAjZWRkZWE0O1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMTB2aCArIDIwcHgpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiA1JTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gIGxlZnQ6IDc1JTtcXHJcXG5cXHJcXG4gIHdpZHRoOiBjYWxjKDMwdncgLSA0MHB4KTtcXHJcXG4gIGhlaWdodDogY2FsYygzMHZ3IC0gNDBweCk7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlLWJ1dHRvbnMge1xcclxcbiAgei1pbmRleDogOTAwMDtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gICNkZWxldGUtb3B0aW9ucy1idXR0b24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxyXFxuICAgIC8vcGFkZGluZzogMS42cmVtO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDMwdncgLSA0MHB4KTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDMwdncgLSA0MHB4KTtcXHJcXG4gICAgYm90dG9tOiA1JTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICBsZWZ0OiAyNSU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAjZGVsZXRlLW9wdGlvbnMtaWNvbiB7XFxyXFxuICAgICAgaGVpZ2h0OiBjYWxjKDE4dncgLSAyMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgI2RlbGV0ZS1vcHRpb25zLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBib3R0b206IDUlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIGxlZnQ6IDI1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBidXR0b24ge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICB3aWR0aDogNDB2dztcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgOjphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiB1cmwoXFxcInRyYXNoLnN2Z1xcXCIpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jaXRlbS1saXN0IHtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICBkaXYge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDJmciAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAgIFxcXCJtYWluIGJ1dHRvbnNcXFwiXFxyXFxuICAgICAgXFxcIi4gZGF0ZVxcXCI7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWRqdXN0LWh1ZSgkY29sb3I6ICRzZWNvbmRhcnksICRkZWdyZWVzOiA1KTtcXHJcXG4gICAgfVxcclxcbiAgICBwOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiQ2FsbGlncmFmZml0dGlcXFwiLCBjdXJzaXZlO1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxdncgKyAxMHB4KTtcXHJcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgcDpudGgtY2hpbGQoMikge1xcclxcbiAgICAgIGdyaWQtYXJlYTogZGF0ZTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICB9XFxyXFxuICAgICNidXR0b24tYm94IHtcXHJcXG4gICAgICBncmlkLWFyZWE6IGJ1dHRvbnM7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGdhcDogM3B4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dDtcXHJcXG4gICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvci1kYXJrO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIGRpdjpudGgtY2hpbGQob2RkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOGQ0ZDk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiouZGVsZXRlZCB7XFxyXFxuICBhbmltYXRpb246IGZhZGVPdXQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcXHJcXG4gICNkZWxldGUtYnV0dG9ucyB7XFxyXFxuICAgICNkZWxldGUtb3B0aW9ucy1idXR0b24ge1xcclxcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICBsZWZ0OiA5MCU7XFxyXFxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAgIGhlaWdodDogMTMuOHZoO1xcclxcbiAgICAgIHdpZHRoOiAxMy44dmg7XFxyXFxuICAgICAgI2RlbGV0ZS1vcHRpb25zLWljb24ge1xcclxcbiAgICAgICAgaGVpZ2h0OiA4dmg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICNkZWxldGUtb3B0aW9ucy1jb250YWluZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgbGVmdDogOTAlO1xcclxcbiAgICAgICAgYm90dG9tOiAwJTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIDo6YWZ0ZXIge1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgI2FkZC1pdGVtLWZvcm0sICNlZGl0LWl0ZW0tZm9ybSB7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogc29saWQgJHByaW1hcnkgM3B4O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMTglO1xcclxcbiAgICByaWdodDogMyU7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk5O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHVsIHtcXHJcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgI21vZGFsLXBvcHVwLWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAyMiU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgbGVmdDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmb250LXNpemU6IDE1dmg7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMTMuOHZoO1xcclxcbiAgICB3aWR0aDogMTMuOHZoO1xcclxcblxcclxcbiAgICBwIHtcXHJcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNmb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjYnV0dG9uLWJveCBidXR0b24ge1xcclxcbiAgICBvcGFjaXR5OiA1MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaXRlbS1saXN0IGRpdjpob3ZlciAjYnV0dG9uLWJveCBidXR0b24ge1xcclxcbiAgICBvcGFjaXR5OiA3MCU7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBMYXB0b3BzIGFuZCBsYXJnZXIgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIC8qIFlvdXIgQ1NTIHJ1bGVzIGhlcmUgKi9cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqcz1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9MWUzLGU9NmU0LG49MzZlNSxyPVwibWlsbGlzZWNvbmRcIixpPVwic2Vjb25kXCIscz1cIm1pbnV0ZVwiLHU9XCJob3VyXCIsYT1cImRheVwiLG89XCJ3ZWVrXCIsZj1cIm1vbnRoXCIsaD1cInF1YXJ0ZXJcIixjPVwieWVhclwiLGQ9XCJkYXRlXCIsbD1cIkludmFsaWQgRGF0ZVwiLCQ9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbVHRcXHNdKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyx5PS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxNPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIiksb3JkaW5hbDpmdW5jdGlvbih0KXt2YXIgZT1bXCJ0aFwiLFwic3RcIixcIm5kXCIsXCJyZFwiXSxuPXQlMTAwO3JldHVyblwiW1wiK3QrKGVbKG4tMjApJTEwXXx8ZVtuXXx8ZVswXSkrXCJdXCJ9fSxtPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sdj17czptLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSttKHIsMixcIjBcIikrXCI6XCIrbShpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLGYpLHM9bi1pPDAsdT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksZik7cmV0dXJuKygtKHIrKG4taSkvKHM/aS11OnUtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKHQpe3JldHVybntNOmYseTpjLHc6byxkOmEsRDpkLGg6dSxtOnMsczppLG1zOnIsUTpofVt0XXx8U3RyaW5nKHR8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sZz1cImVuXCIsRD17fTtEW2ddPU07dmFyIHA9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffSxTPWZ1bmN0aW9uIHQoZSxuLHIpe3ZhciBpO2lmKCFlKXJldHVybiBnO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXt2YXIgcz1lLnRvTG93ZXJDYXNlKCk7RFtzXSYmKGk9cyksbiYmKERbc109bixpPXMpO3ZhciB1PWUuc3BsaXQoXCItXCIpO2lmKCFpJiZ1Lmxlbmd0aD4xKXJldHVybiB0KHVbMF0pfWVsc2V7dmFyIGE9ZS5uYW1lO0RbYV09ZSxpPWF9cmV0dXJuIXImJmkmJihnPWkpLGl8fCFyJiZnfSx3PWZ1bmN0aW9uKHQsZSl7aWYocCh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LE89djtPLmw9UyxPLmk9cCxPLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9Uyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoTy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKCQpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gT30sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT1sKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj13KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHcodCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBPLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIU8udShlKXx8ZSxoPU8ucCh0KSxsPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Ty53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LCQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTy53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCx2PVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goaCl7Y2FzZSBjOnJldHVybiByP2woMSwwKTpsKDMxLDExKTtjYXNlIGY6cmV0dXJuIHI/bCgxLE0pOmwoMCxNKzEpO2Nhc2Ugbzp2YXIgZz10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsRD0oeTxnP3krNzp5KS1nO3JldHVybiBsKHI/bS1EOm0rKDYtRCksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gJCh2K1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuICQoditcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuICQoditcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuICQoditcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1PLnAodCksaD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksbD0obj17fSxuW2FdPWgrXCJEYXRlXCIsbltkXT1oK1wiRGF0ZVwiLG5bZl09aCtcIk1vbnRoXCIsbltjXT1oK1wiRnVsbFllYXJcIixuW3VdPWgrXCJIb3Vyc1wiLG5bc109aCtcIk1pbnV0ZXNcIixuW2ldPWgrXCJTZWNvbmRzXCIsbltyXT1oK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sJD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWZ8fG89PT1jKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFtsXSgkKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlIGwmJnRoaXMuJGRbbF0oJCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW08ucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixoKXt2YXIgZCxsPXRoaXM7cj1OdW1iZXIocik7dmFyICQ9Ty5wKGgpLHk9ZnVuY3Rpb24odCl7dmFyIGU9dyhsKTtyZXR1cm4gTy53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLGwpfTtpZigkPT09ZilyZXR1cm4gdGhpcy5zZXQoZix0aGlzLiRNK3IpO2lmKCQ9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJHkrcik7aWYoJD09PWEpcmV0dXJuIHkoMSk7aWYoJD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbJF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIE8udyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fGw7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Ty56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxmPW4ubW9udGhzLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnNsaWNlKDAscyl9LGM9ZnVuY3Rpb24odCl7cmV0dXJuIE8ucyhzJTEyfHwxMix0LFwiMFwiKX0sZD1uLm1lcmlkaWVtfHxmdW5jdGlvbih0LGUsbil7dmFyIHI9dDwxMj9cIkFNXCI6XCJQTVwiO3JldHVybiBuP3IudG9Mb3dlckNhc2UoKTpyfSwkPXtZWTpTdHJpbmcodGhpcy4keSkuc2xpY2UoLTIpLFlZWVk6dGhpcy4keSxNOmErMSxNTTpPLnMoYSsxLDIsXCIwXCIpLE1NTTpoKG4ubW9udGhzU2hvcnQsYSxmLDMpLE1NTU06aChmLGEpLEQ6dGhpcy4kRCxERDpPLnModGhpcy4kRCwyLFwiMFwiKSxkOlN0cmluZyh0aGlzLiRXKSxkZDpoKG4ud2Vla2RheXNNaW4sdGhpcy4kVyxvLDIpLGRkZDpoKG4ud2Vla2RheXNTaG9ydCx0aGlzLiRXLG8sMyksZGRkZDpvW3RoaXMuJFddLEg6U3RyaW5nKHMpLEhIOk8ucyhzLDIsXCIwXCIpLGg6YygxKSxoaDpjKDIpLGE6ZChzLHUsITApLEE6ZChzLHUsITEpLG06U3RyaW5nKHUpLG1tOk8ucyh1LDIsXCIwXCIpLHM6U3RyaW5nKHRoaXMuJHMpLHNzOk8ucyh0aGlzLiRzLDIsXCIwXCIpLFNTUzpPLnModGhpcy4kbXMsMyxcIjBcIiksWjppfTtyZXR1cm4gci5yZXBsYWNlKHksKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV8fCRbdF18fGkucmVwbGFjZShcIjpcIixcIlwiKX0pKX0sbS51dGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gMTUqLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX0sbS5kaWZmPWZ1bmN0aW9uKHIsZCxsKXt2YXIgJCx5PU8ucChkKSxNPXcociksbT0oTS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLHY9dGhpcy1NLGc9Ty5tKHRoaXMsTSk7cmV0dXJuIGc9KCQ9e30sJFtjXT1nLzEyLCRbZl09ZywkW2hdPWcvMywkW29dPSh2LW0pLzYwNDhlNSwkW2FdPSh2LW0pLzg2NGU1LCRbdV09di9uLCRbc109di9lLCRbaV09di90LCQpW3ldfHx2LGw/ZzpPLmEoZyl9LG0uZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZihmKS4kRH0sbS4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIERbdGhpcy4kTF19LG0ubG9jYWxlPWZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuIHRoaXMuJEw7dmFyIG49dGhpcy5jbG9uZSgpLHI9Uyh0LGUsITApO3JldHVybiByJiYobi4kTD1yKSxufSxtLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIE8udyh0aGlzLiRkLHRoaXMpfSxtLnRvRGF0ZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSl9LG0udG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNWYWxpZCgpP3RoaXMudG9JU09TdHJpbmcoKTpudWxsfSxtLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKX0sbS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvVVRDU3RyaW5nKCl9LE19KCksVD1fLnByb3RvdHlwZTtyZXR1cm4gdy5wcm90b3R5cGU9VCxbW1wiJG1zXCIscl0sW1wiJHNcIixpXSxbXCIkbVwiLHNdLFtcIiRIXCIsdV0sW1wiJFdcIixhXSxbXCIkTVwiLGZdLFtcIiR5XCIsY10sW1wiJERcIixkXV0uZm9yRWFjaCgoZnVuY3Rpb24odCl7VFt0WzFdXT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy4kZyhlLHRbMF0sdFsxXSl9fSkpLHcuZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuJGl8fCh0KGUsXyx3KSx0LiRpPSEwKSx3fSx3LmxvY2FsZT1TLHcuaXNEYXlqcz1wLHcudW5peD1mdW5jdGlvbih0KXtyZXR1cm4gdygxZTMqdCl9LHcuZW49RFtnXSx3LkxzPUQsdy5wPXt9LHd9KSk7IiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5kYXlqc19wbHVnaW5fY2FsZW5kYXI9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbihlLHQsYSl7dmFyIG49XCJoOm1tIEFcIixkPXtsYXN0RGF5OlwiW1llc3RlcmRheSBhdF0gXCIrbixzYW1lRGF5OlwiW1RvZGF5IGF0XSBcIituLG5leHREYXk6XCJbVG9tb3Jyb3cgYXRdIFwiK24sbmV4dFdlZWs6XCJkZGRkIFthdF0gXCIrbixsYXN0V2VlazpcIltMYXN0XSBkZGRkIFthdF0gXCIrbixzYW1lRWxzZTpcIk1NL0REL1lZWVlcIn07dC5wcm90b3R5cGUuY2FsZW5kYXI9ZnVuY3Rpb24oZSx0KXt2YXIgbj10fHx0aGlzLiRsb2NhbGUoKS5jYWxlbmRhcnx8ZCxvPWEoZXx8dm9pZCAwKS5zdGFydE9mKFwiZFwiKSxzPXRoaXMuZGlmZihvLFwiZFwiLCEwKSxpPVwic2FtZUVsc2VcIixmPXM8LTY/aTpzPC0xP1wibGFzdFdlZWtcIjpzPDA/XCJsYXN0RGF5XCI6czwxP1wic2FtZURheVwiOnM8Mj9cIm5leHREYXlcIjpzPDc/XCJuZXh0V2Vla1wiOmksbD1uW2ZdfHxkW2ZdO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGw/bC5jYWxsKHRoaXMsYSgpKTp0aGlzLmZvcm1hdChsKX19fSkpOyIsIiFmdW5jdGlvbihyLGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOihyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6cnx8c2VsZikuZGF5anNfcGx1Z2luX3JlbGF0aXZlVGltZT1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKHIsZSx0KXtyPXJ8fHt9O3ZhciBuPWUucHJvdG90eXBlLG89e2Z1dHVyZTpcImluICVzXCIscGFzdDpcIiVzIGFnb1wiLHM6XCJhIGZldyBzZWNvbmRzXCIsbTpcImEgbWludXRlXCIsbW06XCIlZCBtaW51dGVzXCIsaDpcImFuIGhvdXJcIixoaDpcIiVkIGhvdXJzXCIsZDpcImEgZGF5XCIsZGQ6XCIlZCBkYXlzXCIsTTpcImEgbW9udGhcIixNTTpcIiVkIG1vbnRoc1wiLHk6XCJhIHllYXJcIix5eTpcIiVkIHllYXJzXCJ9O2Z1bmN0aW9uIGkocixlLHQsbyl7cmV0dXJuIG4uZnJvbVRvQmFzZShyLGUsdCxvKX10LmVuLnJlbGF0aXZlVGltZT1vLG4uZnJvbVRvQmFzZT1mdW5jdGlvbihlLG4saSxkLHUpe2Zvcih2YXIgZixhLHMsbD1pLiRsb2NhbGUoKS5yZWxhdGl2ZVRpbWV8fG8saD1yLnRocmVzaG9sZHN8fFt7bDpcInNcIixyOjQ0LGQ6XCJzZWNvbmRcIn0se2w6XCJtXCIscjo4OX0se2w6XCJtbVwiLHI6NDQsZDpcIm1pbnV0ZVwifSx7bDpcImhcIixyOjg5fSx7bDpcImhoXCIscjoyMSxkOlwiaG91clwifSx7bDpcImRcIixyOjM1fSx7bDpcImRkXCIscjoyNSxkOlwiZGF5XCJ9LHtsOlwiTVwiLHI6NDV9LHtsOlwiTU1cIixyOjEwLGQ6XCJtb250aFwifSx7bDpcInlcIixyOjE3fSx7bDpcInl5XCIsZDpcInllYXJcIn1dLG09aC5sZW5ndGgsYz0wO2M8bTtjKz0xKXt2YXIgeT1oW2NdO3kuZCYmKGY9ZD90KGUpLmRpZmYoaSx5LmQsITApOmkuZGlmZihlLHkuZCwhMCkpO3ZhciBwPShyLnJvdW5kaW5nfHxNYXRoLnJvdW5kKShNYXRoLmFicyhmKSk7aWYocz1mPjAscDw9eS5yfHwheS5yKXtwPD0xJiZjPjAmJih5PWhbYy0xXSk7dmFyIHY9bFt5LmxdO3UmJihwPXUoXCJcIitwKSksYT1cInN0cmluZ1wiPT10eXBlb2Ygdj92LnJlcGxhY2UoXCIlZFwiLHApOnYocCxuLHkubCxzKTticmVha319aWYobilyZXR1cm4gYTt2YXIgTT1zP2wuZnV0dXJlOmwucGFzdDtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBNP00oYSk6TS5yZXBsYWNlKFwiJXNcIixhKX0sbi50bz1mdW5jdGlvbihyLGUpe3JldHVybiBpKHIsZSx0aGlzLCEwKX0sbi5mcm9tPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIGkocixlLHRoaXMpfTt2YXIgZD1mdW5jdGlvbihyKXtyZXR1cm4gci4kdT90LnV0YygpOnQoKX07bi50b05vdz1mdW5jdGlvbihyKXtyZXR1cm4gdGhpcy50byhkKHRoaXMpLHIpfSxuLmZyb21Ob3c9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMuZnJvbShkKHRoaXMpLHIpfX19KSk7IiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqc19wbHVnaW5fdGltZXpvbmU9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PXt5ZWFyOjAsbW9udGg6MSxkYXk6Mixob3VyOjMsbWludXRlOjQsc2Vjb25kOjV9LGU9e307cmV0dXJuIGZ1bmN0aW9uKG4saSxvKXt2YXIgcixhPWZ1bmN0aW9uKHQsbixpKXt2b2lkIDA9PT1pJiYoaT17fSk7dmFyIG89bmV3IERhdGUodCkscj1mdW5jdGlvbih0LG4pe3ZvaWQgMD09PW4mJihuPXt9KTt2YXIgaT1uLnRpbWVab25lTmFtZXx8XCJzaG9ydFwiLG89dCtcInxcIitpLHI9ZVtvXTtyZXR1cm4gcnx8KHI9bmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiLHtob3VyMTI6ITEsdGltZVpvbmU6dCx5ZWFyOlwibnVtZXJpY1wiLG1vbnRoOlwiMi1kaWdpdFwiLGRheTpcIjItZGlnaXRcIixob3VyOlwiMi1kaWdpdFwiLG1pbnV0ZTpcIjItZGlnaXRcIixzZWNvbmQ6XCIyLWRpZ2l0XCIsdGltZVpvbmVOYW1lOml9KSxlW29dPXIpLHJ9KG4saSk7cmV0dXJuIHIuZm9ybWF0VG9QYXJ0cyhvKX0sdT1mdW5jdGlvbihlLG4pe2Zvcih2YXIgaT1hKGUsbikscj1bXSx1PTA7dTxpLmxlbmd0aDt1Kz0xKXt2YXIgZj1pW3VdLHM9Zi50eXBlLG09Zi52YWx1ZSxjPXRbc107Yz49MCYmKHJbY109cGFyc2VJbnQobSwxMCkpfXZhciBkPXJbM10sbD0yND09PWQ/MDpkLHY9clswXStcIi1cIityWzFdK1wiLVwiK3JbMl0rXCIgXCIrbCtcIjpcIityWzRdK1wiOlwiK3JbNV0rXCI6MDAwXCIsaD0rZTtyZXR1cm4oby51dGModikudmFsdWVPZigpLShoLT1oJTFlMykpLzZlNH0sZj1pLnByb3RvdHlwZTtmLnR6PWZ1bmN0aW9uKHQsZSl7dm9pZCAwPT09dCYmKHQ9cik7dmFyIG49dGhpcy51dGNPZmZzZXQoKSxpPXRoaXMudG9EYXRlKCksYT1pLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIix7dGltZVpvbmU6dH0pLHU9TWF0aC5yb3VuZCgoaS1uZXcgRGF0ZShhKSkvMWUzLzYwKSxmPW8oYSkuJHNldChcIm1pbGxpc2Vjb25kXCIsdGhpcy4kbXMpLnV0Y09mZnNldCgxNSotTWF0aC5yb3VuZChpLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpLXUsITApO2lmKGUpe3ZhciBzPWYudXRjT2Zmc2V0KCk7Zj1mLmFkZChuLXMsXCJtaW51dGVcIil9cmV0dXJuIGYuJHguJHRpbWV6b25lPXQsZn0sZi5vZmZzZXROYW1lPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuJHguJHRpbWV6b25lfHxvLnR6Lmd1ZXNzKCksbj1hKHRoaXMudmFsdWVPZigpLGUse3RpbWVab25lTmFtZTp0fSkuZmluZCgoZnVuY3Rpb24odCl7cmV0dXJuXCJ0aW1lem9uZW5hbWVcIj09PXQudHlwZS50b0xvd2VyQ2FzZSgpfSkpO3JldHVybiBuJiZuLnZhbHVlfTt2YXIgcz1mLnN0YXJ0T2Y7Zi5zdGFydE9mPWZ1bmN0aW9uKHQsZSl7aWYoIXRoaXMuJHh8fCF0aGlzLiR4LiR0aW1lem9uZSlyZXR1cm4gcy5jYWxsKHRoaXMsdCxlKTt2YXIgbj1vKHRoaXMuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzczpTU1NcIikpO3JldHVybiBzLmNhbGwobix0LGUpLnR6KHRoaXMuJHguJHRpbWV6b25lLCEwKX0sby50ej1mdW5jdGlvbih0LGUsbil7dmFyIGk9biYmZSxhPW58fGV8fHIsZj11KCtvKCksYSk7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIG8odCkudHooYSk7dmFyIHM9ZnVuY3Rpb24odCxlLG4pe3ZhciBpPXQtNjAqZSoxZTMsbz11KGksbik7aWYoZT09PW8pcmV0dXJuW2ksZV07dmFyIHI9dShpLT02MCooby1lKSoxZTMsbik7cmV0dXJuIG89PT1yP1tpLG9dOlt0LTYwKk1hdGgubWluKG8scikqMWUzLE1hdGgubWF4KG8scildfShvLnV0Yyh0LGkpLnZhbHVlT2YoKSxmLGEpLG09c1swXSxjPXNbMV0sZD1vKG0pLnV0Y09mZnNldChjKTtyZXR1cm4gZC4keC4kdGltZXpvbmU9YSxkfSxvLnR6Lmd1ZXNzPWZ1bmN0aW9uKCl7cmV0dXJuIEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZX0sby50ei5zZXREZWZhdWx0PWZ1bmN0aW9uKHQpe3I9dH19fSkpOyIsIiFmdW5jdGlvbihlLG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOihlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6ZXx8c2VsZikuZGF5anNfcGx1Z2luX3VwZGF0ZUxvY2FsZT1uKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKGUsbix0KXt0LnVwZGF0ZUxvY2FsZT1mdW5jdGlvbihlLG4pe3ZhciBvPXQuTHNbZV07aWYobylyZXR1cm4obj9PYmplY3Qua2V5cyhuKTpbXSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7b1tlXT1uW2VdfSkpLG99fX0pKTsiLCIhZnVuY3Rpb24odCxpKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1pKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShpKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzX3BsdWdpbl91dGM9aSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PVwibWludXRlXCIsaT0vWystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vZyxlPS8oWystXXxcXGRcXGQpL2c7cmV0dXJuIGZ1bmN0aW9uKHMsZixuKXt2YXIgdT1mLnByb3RvdHlwZTtuLnV0Yz1mdW5jdGlvbih0KXt2YXIgaT17ZGF0ZTp0LHV0YzohMCxhcmdzOmFyZ3VtZW50c307cmV0dXJuIG5ldyBmKGkpfSx1LnV0Yz1mdW5jdGlvbihpKXt2YXIgZT1uKHRoaXMudG9EYXRlKCkse2xvY2FsZTp0aGlzLiRMLHV0YzohMH0pO3JldHVybiBpP2UuYWRkKHRoaXMudXRjT2Zmc2V0KCksdCk6ZX0sdS5sb2NhbD1mdW5jdGlvbigpe3JldHVybiBuKHRoaXMudG9EYXRlKCkse2xvY2FsZTp0aGlzLiRMLHV0YzohMX0pfTt2YXIgbz11LnBhcnNlO3UucGFyc2U9ZnVuY3Rpb24odCl7dC51dGMmJih0aGlzLiR1PSEwKSx0aGlzLiR1dGlscygpLnUodC4kb2Zmc2V0KXx8KHRoaXMuJG9mZnNldD10LiRvZmZzZXQpLG8uY2FsbCh0aGlzLHQpfTt2YXIgcj11LmluaXQ7dS5pbml0PWZ1bmN0aW9uKCl7aWYodGhpcy4kdSl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0VVRDRnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0VVRDTW9udGgoKSx0aGlzLiREPXQuZ2V0VVRDRGF0ZSgpLHRoaXMuJFc9dC5nZXRVVENEYXkoKSx0aGlzLiRIPXQuZ2V0VVRDSG91cnMoKSx0aGlzLiRtPXQuZ2V0VVRDTWludXRlcygpLHRoaXMuJHM9dC5nZXRVVENTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRVVENNaWxsaXNlY29uZHMoKX1lbHNlIHIuY2FsbCh0aGlzKX07dmFyIGE9dS51dGNPZmZzZXQ7dS51dGNPZmZzZXQ9ZnVuY3Rpb24ocyxmKXt2YXIgbj10aGlzLiR1dGlscygpLnU7aWYobihzKSlyZXR1cm4gdGhpcy4kdT8wOm4odGhpcy4kb2Zmc2V0KT9hLmNhbGwodGhpcyk6dGhpcy4kb2Zmc2V0O2lmKFwic3RyaW5nXCI9PXR5cGVvZiBzJiYocz1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1cIlwiKTt2YXIgcz10Lm1hdGNoKGkpO2lmKCFzKXJldHVybiBudWxsO3ZhciBmPShcIlwiK3NbMF0pLm1hdGNoKGUpfHxbXCItXCIsMCwwXSxuPWZbMF0sdT02MCorZlsxXSsgK2ZbMl07cmV0dXJuIDA9PT11PzA6XCIrXCI9PT1uP3U6LXV9KHMpLG51bGw9PT1zKSlyZXR1cm4gdGhpczt2YXIgdT1NYXRoLmFicyhzKTw9MTY/NjAqczpzLG89dGhpcztpZihmKXJldHVybiBvLiRvZmZzZXQ9dSxvLiR1PTA9PT1zLG87aWYoMCE9PXMpe3ZhciByPXRoaXMuJHU/dGhpcy50b0RhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpOi0xKnRoaXMudXRjT2Zmc2V0KCk7KG89dGhpcy5sb2NhbCgpLmFkZCh1K3IsdCkpLiRvZmZzZXQ9dSxvLiR4LiRsb2NhbE9mZnNldD1yfWVsc2Ugbz10aGlzLnV0YygpO3JldHVybiBvfTt2YXIgaD11LmZvcm1hdDt1LmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgaT10fHwodGhpcy4kdT9cIllZWVktTU0tRERUSEg6bW06c3NbWl1cIjpcIlwiKTtyZXR1cm4gaC5jYWxsKHRoaXMsaSl9LHUudmFsdWVPZj1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJHV0aWxzKCkudSh0aGlzLiRvZmZzZXQpPzA6dGhpcy4kb2Zmc2V0Kyh0aGlzLiR4LiRsb2NhbE9mZnNldHx8dGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpKTtyZXR1cm4gdGhpcy4kZC52YWx1ZU9mKCktNmU0KnR9LHUuaXNVVEM9ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMuJHV9LHUudG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpfSx1LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9EYXRlKCkudG9VVENTdHJpbmcoKX07dmFyIGw9dS50b0RhdGU7dS50b0RhdGU9ZnVuY3Rpb24odCl7cmV0dXJuXCJzXCI9PT10JiZ0aGlzLiRvZmZzZXQ/bih0aGlzLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3M6U1NTXCIpKS50b0RhdGUoKTpsLmNhbGwodGhpcyl9O3ZhciBjPXUuZGlmZjt1LmRpZmY9ZnVuY3Rpb24odCxpLGUpe2lmKHQmJnRoaXMuJHU9PT10LiR1KXJldHVybiBjLmNhbGwodGhpcyx0LGksZSk7dmFyIHM9dGhpcy5sb2NhbCgpLGY9bih0KS5sb2NhbCgpO3JldHVybiBjLmNhbGwocyxmLGksZSl9fX0pKTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcclxuLy8gZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgb2JqZWN0IGluc3RhbmNlcy4gXHJcbi8vICdjb21wbGV0ZScgYWx3YXlzIGZhbHNlIG9uIG9iamVjdCBjcmVhdGlvbi5cclxuLy8gY291bnRlciBzaW1wbHkgcmVmbGVjdHMgdGhlIG51bWJlciBvZiB0aW1lcyBpdGVtRmFjdG9yeSBpcyBjYWxsZWQuIEJldHRlciB3YXlzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IG9iamVjdHM/XHJcblxyXG5sZXQgY291bnRlciA9IDA7IFxyXG5cclxuY29uc3QgaXRlbUZhY3RvcnkgPSAobXNnLCBkYXRlLCBjb21wbGV0ZT1mYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgcHJvdG8gPSB7XHJcbiAgICBtc2csXHJcbiAgICBkYXRlLFxyXG4gICAgY29tcGxldGUsXHJcbiAgfVxyXG4gICAgY29uc3QgaXRlbSA9IHttc2csIGRhdGUsIGNvbXBsZXRlLCBpZDogY291bnRlcisrfTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvLCBpdGVtKTtcclxufVxyXG5cclxuZXhwb3J0IHtjb3VudGVyLCBpdGVtRmFjdG9yeX07XHJcbiIsImltcG9ydCBpdGVtQ29sbGVjdGlvbiBmcm9tIFwiLi4vbWFuYWdlQ29sbGVjdGlvblwiO1xyXG5cclxuXHJcbi8vIHNpbXBseSBjYWxscyB0aGUgaXRlbUNvbGxlY3Rpb24ncyBkZWxldGVPYmplY3QgbWV0aG9kLiBcclxuLy8gSWYgSSB3YW50ZWQgdG8gYWRkIGFuICdBcmUgeW91IHN1cmU/JyBzdGVwIGZvciB0aGUgdXNlciwgd291bGQgdGhpcyBiZSBhIGdvb2QgcGxhY2UgdG8gZG8gc28/XHJcbi8vIEluIGl0cyBjdXJyZW50IGZvcm0sIGlzIHRoaXMgbW9kdWxlIHN1cGVyZmx1b3VzLCBvciBhIHZhbGlkIGNhc2Ugb2YgY29kZS1zcGxpdHRpbmc/XHJcblxyXG5jb25zdCBjbGVhckl0ZW0gPSAoaWQpID0+IHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSBpdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09IGlkKTtcclxuICAgIGl0ZW1Db2xsZWN0aW9uLmRlbGV0ZU9iamVjdChzZWxlY3Rpb24pO1xyXG4gICAgY29uc29sZS5sb2coc2VsZWN0aW9uLCBpdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY2xlYXJJdGVtIH07IiwiaW1wb3J0IGl0ZW1Db2xsZWN0aW9uIGZyb20gXCIuLi9tYW5hZ2VDb2xsZWN0aW9uXCI7XHJcblxyXG5jb25zdCBlZGl0SXRlbU1zZ0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtbWVzc2FnZScpO1xyXG5jb25zdCBlZGl0SXRlbURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRhdGUnKTtcclxuY29uc3QgZWRpdEl0ZW1Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtaXRlbS1mb3JtJyk7XHJcblxyXG4vLyBzZWxlY3RlZEl0ZW0gbWF0Y2hlcyBET00gZWxlbWVudCB0byBvYmplY3QgaW5zdGFuY2UgdmlhIGEgZGF0YS1pZCBwcm9wZXJ0eSBhc3NpZ25lZCBhdCBlbGVtZW50IGNyZWF0aW9uLlxyXG5sZXQgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuXHJcblxyXG4vLyBsZXQgc2VsZWN0ZWQgaXRlbSBwcm9wZXJ0aWVzIHByZS1maWxsIGZvcm0gaW5wdXRzLlxyXG5jb25zdCBlZGl0SXRlbSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09IGlkKTtcclxuICAgIGNvbnNvbGUubG9nKCdpdGVtIHNlbGVjdGVkOiAnICsgc2VsZWN0ZWRJdGVtKTtcclxuICAgIGVkaXRJdGVtTXNnSW5wdXQudmFsdWUgPSBzZWxlY3RlZEl0ZW0ubXNnO1xyXG4gICAgZWRpdEl0ZW1EYXRlSW5wdXQudmFsdWUgPSBzZWxlY3RlZEl0ZW0uZGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKCd0aGUgc2VsZWN0ZWQgaXRlbSBpczogJyArIHNlbGVjdGVkSXRlbSArIGlkKTtcclxuICAgIGVkaXRJdGVtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufTtcclxuXHJcbi8vdG9nZ2xlcyBhdCBpdGVtJ3MgJ2NvbXBsZXRlJyBhdHRyaWJ1dGUuXHJcbmNvbnN0IHRvZ2dsZUNvbXBsZXRlID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIHNlbGVjdGVkSXRlbSA9IGl0ZW1Db2xsZWN0aW9uLmNvbGxlY3Rpb24uZmluZChpdGVtID0+IGl0ZW0uaWQgPT0gaWQpO1xyXG4gICAgY29uc29sZS5sb2coJ3RvZ2dsZSBjb21wbGV0ZScpO1xyXG4gICAgaXRlbUNvbGxlY3Rpb24ubW9kaWZ5T2JqZWN0KHNlbGVjdGVkSXRlbSwgc2VsZWN0ZWRJdGVtLm1zZywgc2VsZWN0ZWRJdGVtLmRhdGUsIHRydWUpO1xyXG59XHJcblxyXG5cclxuLy8gaGFuZGxlIHN1Ym1pc3Npb24gb2YgZWRpdCBmb3JtIC0gZ2V0IGxhdGVzdCBpbnB1dCB2YWx1ZXMgYW5kIHBhc3MgdGhlbSBpbnRvIHRoZSBtb2RpZnlPYmplY3QgbWV0aG9kLlxyXG5jb25zdCBjb25maXJtRWRpdEl0ZW0gPSAoKSA9PiB7XHJcbiAgICBsZXQgbWVzc2FnZUlucHV0ID0gZWRpdEl0ZW1Nc2dJbnB1dC52YWx1ZTtcclxuICAgIGxldCBkYXRlSW5wdXQgPSBlZGl0SXRlbURhdGVJbnB1dC52YWx1ZTtcclxuICAgIGl0ZW1Db2xsZWN0aW9uLm1vZGlmeU9iamVjdChzZWxlY3RlZEl0ZW0sIG1lc3NhZ2VJbnB1dCwgZGF0ZUlucHV0KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGVkaXRJdGVtLCBjb25maXJtRWRpdEl0ZW0sIHRvZ2dsZUNvbXBsZXRlIH07IiwiXHJcbi8vIHVudXNlZC91bmZpbmlzaGVkIG1vZHVsZS4gV2FzIG9yaWdpbmFsbHkgcGxhbm5pbmcgdG8gaGF2ZSBhIGdsb2JhbGx5ICdhY3RpdmUnIGl0ZW0gdG8gZmFjaWxpdGF0ZSB1c2VyIGludGVyYWN0aW9uLlxyXG4vLyBub3cgdXNpbmcgZGF0YS1pZHMgYXR0YWNoZWQgdG8gaW50ZXJhY3RpdmUgZWxlbWVudHMgaW5zdGVhZFxyXG5cclxuY29uc3QgZWxlbWVudFNlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1MaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1saXN0JykuY2hpbGROb2Rlcyk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0SXRlbSA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAvL3RhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChpdGVtTGlzdCkge1xyXG4gICAgICAgIGl0ZW1MaXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdEl0ZW0oaXRlbSlcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7ZWxlbWVudFNlbGVjdGlvbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7aXRlbUZhY3Rvcnl9IGZyb20gJy4vY3JlYXRlL2FkZEl0ZW0nO1xyXG5pbXBvcnQgcmVuZGVySXRlbXMgZnJvbSAnLi9yZW5kZXIvcmVuZGVyQ29sbGVjdGlvbic7XHJcbmltcG9ydCBpdGVtQ29sbGVjdGlvbiBmcm9tICcuL21hbmFnZUNvbGxlY3Rpb24nO1xyXG5pbXBvcnQgeyBzZXR1cEludGVyYWN0aW9uIH0gZnJvbSAnLi9yZW5kZXIvdXNlckludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgZWxlbWVudFNlbGVjdGlvbiB9IGZyb20gJy4vZWRpdC9zZWxlY3RJdGVtJztcclxuaW1wb3J0IHNldHVwRGVsZXRlQnV0dG9uIGZyb20gXCIuL3JlbmRlci9kZWxldGVCdXR0b25cIjtcclxuaW1wb3J0IHtzZXR1cFNvcnRCdXR0b259IGZyb20gXCIuL3JlYWQvc29ydEJ1dHRvblwiO1xyXG5pbXBvcnQgcmVuZGVyTWlzY0ljb25zIGZyb20gXCIuL3JlbmRlci9taXNjSWNvbnNcIjtcclxuXHJcblxyXG4vLyBleGFtcGxlIGl0ZW1zXHJcbml0ZW1Db2xsZWN0aW9uLmNvbGxlY3Rpb24ucHVzaChpdGVtRmFjdG9yeSgnZmVlZCB0aGUgZHVja3MnLCAnMjAyMy0wNC0wOScpKTtcclxuaXRlbUNvbGxlY3Rpb24uY29sbGVjdGlvbi5wdXNoKGl0ZW1GYWN0b3J5KCdzdGFydCBhIHNjaGVtZScsICcyMDIzLTA0LTExJykpO1xyXG5pdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uLnB1c2goaXRlbUZhY3RvcnkoXCJyb2NrIGNsaW1iaW5nXCIsICcyMDIzLTA0LTA5JykpO1xyXG5pdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uLnB1c2goaXRlbUZhY3RvcnkoJ2ZvcmVzdCBjbGVhcmluZycsICcyMDIyLTA0LTA5JykpO1xyXG5pdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uLnB1c2goaXRlbUZhY3RvcnkoJ0Rpc2NvdmVyIGEgbmV3IGFuaW1hbCcsICcyMDIzLTA0LTEyJykpO1xyXG5cclxuXHJcbi8vIGNhbGwgdGhlc2UgaGVyZT8gXHJcbi8vIHNldCB1cCBhbiBvbmxvYWQgZXZlbnQgbGlzdGVuZXIgaW4gZWFjaCBtb2R1bGU/XHJcbi8vIHJlbmRlckl0ZW1zIG5lZWRzIHRvIGdvIGZpcnN0LlxyXG5yZW5kZXJJdGVtcygpO1xyXG5zZXR1cEludGVyYWN0aW9uKCk7XHJcbmVsZW1lbnRTZWxlY3Rpb24oKTtcclxuc2V0dXBEZWxldGVCdXR0b24oKTtcclxuc2V0dXBTb3J0QnV0dG9uKCk7XHJcbiIsImltcG9ydCBvYnNlcnZlQ29sbGVjdGlvbiBmcm9tIFwiLi90ZXN0T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHsgaXRlbUZhY3RvcnkgfSBmcm9tIFwiLi9jcmVhdGUvYWRkSXRlbVwiO1xyXG5cclxuLy8gdG8tZG86IGlucHV0IHZhbGlkYXRpb24uIFJpZ2h0IHBsYWNlIHRvIGRvIGl0PyBcInNlcnZlciBzaWRlXCJcclxuXHJcblxyXG5cclxuLy8gaXRlbUNvbGxlY3Rpb24gT2JqZWN0OlxyXG4vLyBjb2xsZWN0aW9uIGFycmF5IGNvbnRhaW5zICdpdGVtcycuXHJcbi8vIG9ic2VydmVyIGNhbGxzIHJlLXJlbmRlcnMgd2hlbiBub3RpZmllZC4gKFN1cGVyZmx1b3VzPyBDYWxsIHJlLXJlbmRlciBkaXJlY3RseT8gT3JpZ2luYWwgcGxhbiB3YXMgdG8gaGF2ZSBpdCB3b3JrIG91dC4uLlxyXG4vLyAuLi4gd2hpY2ggb2JqZWN0cyByZXF1aXJlZCByZS1yZW5kZXJpbmcsIGJ1dCBpdCBjdXJyZW50bHkganVzdCBjYWxscyBhIGNvbXBsZXRlIHJlLXJlbmRlci4pXHJcbmNvbnN0IGl0ZW1Db2xsZWN0aW9uID0ge1xyXG4gICAgY29sbGVjdGlvbjogW10sXHJcbiAgICBvYnNlcnZlcnM6IFtvYnNlcnZlQ29sbGVjdGlvbl0sXHJcblxyXG4gICAgLy8gQWRkIGFuIG9ic2VydmVyIHRvIG9ic2VydmVyIGFycmF5LiBVbnVzZWQuXHJcbiAgICBhZGRPYnNlcnZlcjogZnVuY3Rpb24ob2JzZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gbm90aWZ5IG9ic2VydmVycyBvZiBzb21lIGNoYW5nZS5cclxuICAgIG5vdGlmeU9ic2VydmVyczogZnVuY3Rpb24oc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiBvYnNlcnZlci51cGRhdGUoc2VsZWN0aW9uKSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgLy8gY29uc3RydWN0IG5ldyBpdGVtLCBhZGQgaXQgdG8gY29sbGVjdGlvbi4gXHJcbiAgICBhZGRPYmplY3Q6IGZ1bmN0aW9uKG1zZywgZGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBpdGVtRmFjdG9yeShtc2csIGRhdGUpO1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKG5ld0l0ZW0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBtb2RpZnkgYW4gb2JqZWN0IGluIHRoZSBjb2xsZWN0aW9uLiBcclxuICAgIC8vIHdoZW4gJ2NvbXBsZXRlJyBwYXNzZWQgaW4ganVzdCB0b2dnbGVzIHRoZSBjb21wbGV0ZSBwcm9wZXJ0eS4gXHJcbiAgICAvLyBvdGhlcndpc2UsIHVwZGF0ZXMgdGhlIG1lc3NhZ2UgYW5kIGRhdGUgcHJvcGVydGllcy5cclxuICAgIG1vZGlmeU9iamVjdDogZnVuY3Rpb24oc2VsZWN0aW9uLCBuZXdNc2csIG5ld0RhdGUsIGNvbXBsZXRlPW51bGwpIHtcclxuICAgICAgICAvL2NoZWNrIGlmIHZhbGlkIGFyZ3VtZW50XHJcbiAgICAgICAgaWYgKGNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5jb21wbGV0ZSA9ICFzZWxlY3Rpb24uY29tcGxldGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGlvbi5jb21wbGV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNT0RJRlk6ICcgKyBzZWxlY3Rpb24pO1xyXG4gICAgICAgIHNlbGVjdGlvbi5tc2cgPSBuZXdNc2c7XHJcbiAgICAgICAgc2VsZWN0aW9uLmRhdGUgPSBuZXdEYXRlO1xyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKHNlbGVjdGlvbik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNsZWFycyB0aGUgY29sbGVjdGlvbiBhcnJheS5cclxuICAgIGRlbGV0ZUFsbE9iamVjdHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vYXJlIHlvdSBzdXJlP1xyXG4gICAgICAgIGNvbnN0IG5ld0NvbGxlY3Rpb24gPSBbXTtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBuZXdDb2xsZWN0aW9uO1xyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKG5ld0NvbGxlY3Rpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL2ZpbHRlcnMgb3V0IGFuIG9iamVjdCBmcm9tIGNvbGxlY3Rpb24sIHJlLWFzc2lnbnMgY29sbGVjdGlvbiB0byBmaWx0ZXJlZCBhcnJheS4gR29vZCBwcmFjdGljZT9cclxuICAgIGRlbGV0ZU9iamVjdDogZnVuY3Rpb24oc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgLy9jaGVjayBpZiB2YWxpZCBhcmd1bWVudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdERUxFVEUgT0JKRUNUOiAnICsgc2VsZWN0aW9uKTtcclxuICAgICAgICBjb25zdCBuZXdDb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHNlbGVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gbmV3Q29sbGVjdGlvbjtcclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyhzZWxlY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXRlbUNvbGxlY3Rpb247IiwiaW1wb3J0IHJlbmRlckl0ZW1zIGZyb20gXCIuLi9yZW5kZXIvcmVuZGVyQ29sbGVjdGlvblwiO1xyXG5pbXBvcnQgaXRlbUNvbGxlY3Rpb24gZnJvbSBcIi4uL21hbmFnZUNvbGxlY3Rpb25cIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5cclxuXHJcbi8vVGhpcyBtb2R1bGUgc2V0cyB1cCBhIHNvcnQgYnV0dG9uIHRoZSB1c2VyIGNhbiBzZXQgdG8gZGF0ZSBhc2NlbmRpbmcgb3IgZGVzY2VuZGluZy5cclxuLy9UaGUgc2V0dGluZyBhdCAncmVuZGVyJyB0aW1lIHdpbGwgZGV0ZXJtaW5lIHRoZSBvcmRlciBpbiB3aGljaCBjb2xsZWN0aW9uIGl0ZW1zIGFyZSByZW5kZXJlZCBpbiB0aGUgcmVuZGVyIG1vZHVsZS5cclxuXHJcblxyXG5cclxubGV0IG9yZGVyRGVzY2VuZGluZyA9IHRydWU7XHJcbmNvbnN0IHNvcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1idXR0b24nKTtcclxuXHJcbmNvbnN0IHRvZ2dsZVJlbmRlckxpc3RPcmRlciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCd0b2dnbGVyZW5kZXJsaXN0b3JkZXInICsgb3JkZXJEZXNjZW5kaW5nKVxyXG4gICAgb3JkZXJEZXNjZW5kaW5nID0gIW9yZGVyRGVzY2VuZGluZztcclxuICAgIHNvcnRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGVzY2VuZGluZycpO1xyXG4gICAgcmVuZGVySXRlbXMoKTtcclxufTtcclxuXHJcbmNvbnN0IHNldHVwU29ydEJ1dHRvbiA9ICgpID0+IHtcclxuICAgIHNvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVSZW5kZXJMaXN0T3JkZXIpO1xyXG59XHJcblxyXG5jb25zdCBnZXRSZW5kZXJMaXN0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHJlbmRlckxpc3QgPSBpdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uO1xyXG4gICAgb3JkZXJEZXNjZW5kaW5nID8gXHJcbiAgICByZW5kZXJMaXN0ID0gcmVuZGVyTGlzdC5zb3J0KChhLCBiKSA9PiBkYXlqcyhiLmRhdGUpIC0gZGF5anMoYS5kYXRlKSkgOlxyXG4gICAgcmVuZGVyTGlzdCA9IHJlbmRlckxpc3Quc29ydCgoYSwgYikgPT4gZGF5anMoYS5kYXRlKSAtIGRheWpzKGIuZGF0ZSkpXHJcbiAgICBcclxuICAgIHJldHVybiByZW5kZXJMaXN0O1xyXG59O1xyXG5cclxuZXhwb3J0IHtnZXRSZW5kZXJMaXN0LCBzZXR1cFNvcnRCdXR0b259O1xyXG4iLCJpbXBvcnQgdHJhc2hJY29uIGZyb20gXCIuLi90cmFzaC5zdmdcIjtcclxuXHJcbi8vIGRlbGV0ZSBidXR0b24gb3B0aW9ucyBwb3B1cC4gXHJcblxyXG4vL0V4cGFuZCB0byBoYXZlIGEgZGVkaWNhdGVkICdtb2RhbCBjb250cm9sbGVyJyBtb2R1bGU/XHJcbi8vU2V2ZXJhbCAncG9wdXAnIGVsZW1lbnRzIHRvIG1hbmFnZSAtIGVkaXQgZm9ybSwgYWRkIGZvcm0sIGRlbGV0ZSBidXR0b24gb3B0aW9ucywgZXRjLiBCZXN0IHdheSB0byBtYW5hZ2U/XHJcblxyXG5cclxuY29uc3Qgc2V0dXBEZWxldGVCdXR0b24gPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZU9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIjZGVsZXRlLW9wdGlvbnMtY29udGFpbmVyXCJcclxuICApO1xyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS1idXR0b25cIik7XHJcbiAgY29uc3QgZGVsZXRlT3B0aW9uc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsZXRlLW9wdGlvbnMtYnV0dG9uXCIpO1xyXG4gIGNvbnN0IGRlbGV0ZU9wdGlvbnNCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBkZWxldGVPcHRpb25zQnV0dG9uSWNvbi5zcmMgPSB0cmFzaEljb247XHJcbiAgZGVsZXRlT3B0aW9uc0J1dHRvbkljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGUtb3B0aW9ucy1pY29uXCIpO1xyXG4gIGRlbGV0ZU9wdGlvbnNCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlT3B0aW9uc0J1dHRvbkljb24pO1xyXG5cclxuICBjb25zdCB0b2dnbGVEZWxldGVPcHRpb25zID0gKChlKSA9PiB7XHJcbiAgICBsZXQgaW5pdGlhbFN0YXRlID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBwcmV2ZW50IGJ1YmJsaW5nLiBCZXN0IHByYWN0aWNlP1xyXG4gICAgaWYgKGUpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKHdoZXJlID0gbnVsbCwgZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJUb2dnbGUhXCIpO1xyXG5cclxuICAgICAgLy8gZG8gbm90aGluZyB3aGVuIGJvZHkgaXMgY2xpY2tlZCBhbmQgZGVsZXRlIG9wdGlvbnMgYXJlbid0IHZpc2libGUuXHJcbiAgICAgIGlmICh3aGVyZSA9PSBcImJvZHlcIiAmJiBpbml0aWFsU3RhdGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJpbml0aWFsXCIgKyBpbml0aWFsU3RhdGUpO1xyXG4gICAgICBpbml0aWFsU3RhdGUgPSAhaW5pdGlhbFN0YXRlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZpbmFsXCIgKyBpbml0aWFsU3RhdGUpO1xyXG5cclxuICAgICAgZGVsZXRlT3B0aW9uc0J1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgICBkZWxldGVPcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKSk7XHJcbiAgICB9O1xyXG4gIH0pKCk7XHJcblxyXG5cclxuICAvL2V2ZW50IGxpc3RlbmVycyBmb3IgZGVsZXRlIGJ1dHRvbnMuXHJcblxyXG4gIGRlbGV0ZU9wdGlvbnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdG9nZ2xlRGVsZXRlT3B0aW9ucyhudWxsLCBldmVudCk7XHJcbiAgfSk7XHJcblxyXG4gIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PlxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgdG9nZ2xlRGVsZXRlT3B0aW9ucyhudWxsLCBldmVudCk7XHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIC8vIGRvY3VtZW50IGJvZHkuIFxyXG5cclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHRvZ2dsZURlbGV0ZU9wdGlvbnMoXCJib2R5XCIsIGV2ZW50KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldHVwRGVsZXRlQnV0dG9uO1xyXG4iLCJpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXHJcbmltcG9ydCB1dGMgZnJvbSAnZGF5anMvcGx1Z2luL3V0YydcclxuaW1wb3J0IHR6IGZyb20gJ2RheWpzL3BsdWdpbi90aW1lem9uZSdcclxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tICdkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lJ1xyXG5pbXBvcnQgY2FsZW5kYXIgZnJvbSAnZGF5anMvcGx1Z2luL2NhbGVuZGFyJ1xyXG5pbXBvcnQgdXBkYXRlTG9jYWxlIGZyb20gJ2RheWpzL3BsdWdpbi91cGRhdGVMb2NhbGUnXHJcblxyXG5cclxuXHJcbmRheWpzLmV4dGVuZCh1dGMpXHJcbmRheWpzLmV4dGVuZCh0eilcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSlcclxuZGF5anMuZXh0ZW5kKGNhbGVuZGFyKVxyXG5kYXlqcy5leHRlbmQodXBkYXRlTG9jYWxlKVxyXG5cclxuLy8gZGF5anMgZGF0ZSBjb2VyY2lvbi4gXHJcbi8vIHRha2VzIGluIG9iamVjdCBkYXRlIHN0cmluZywgcmV0dXJucyBjdXN0b20gb3VwdXRzIGxpa2UgJ3RvbW9ycm93Jy4gXHJcblxyXG5jb25zdCB0aW1lWm9uZSA9IGRheWpzLnR6Lmd1ZXNzKClcclxuXHJcbmRheWpzLnVwZGF0ZUxvY2FsZSgnZW4nLCB7XHJcbiAgICBjYWxlbmRhcjoge1xyXG4gICAgICBsYXN0RGF5OiAnW1llc3RlcmRheV0nLFxyXG4gICAgICBzYW1lRGF5OiAnW1RvZGF5XScsXHJcbiAgICAgIG5leHREYXk6ICdbVG9tb3Jyb3ddJyxcclxuICAgICAgbGFzdFdlZWs6ICdbbGFzdF0gZGRkZCcsXHJcbiAgICAgIG5leHRXZWVrOiAnZGRkZCcsXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcblxyXG5jb25zdCBnZXRUaW1lID0gKGRhdGVzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gZGF0ZXN0cmluZztcclxuICAgIGNvbnN0IG1vZGlmaWVkID0gZGF5anMoaW5wdXQpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbW9kaWZpZWQuY2FsZW5kYXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0VGltZTsiLCJpbXBvcnQgaGVhZGVySWNvblNWRyBmcm9tICcuLi9kaWFyeS5zdmcnXHJcblxyXG4vL2ltcG9ydCBpbWFnZSBzb3VyY2VzLCBjcmVhdGUgaW1hZ2VzLlxyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xyXG5jb25zdCBoZWFkZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmhlYWRlckljb24uc3JjID0gaGVhZGVySWNvblNWRztcclxuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckljb24pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyOyIsImltcG9ydCBpdGVtQ29sbGVjdGlvbiBmcm9tICcuLi9tYW5hZ2VDb2xsZWN0aW9uJztcclxuaW1wb3J0IHsgY2xlYXJJdGVtIH0gZnJvbSAnLi4vZGVsZXRlL2NsZWFySXRlbSc7XHJcbmltcG9ydCB7ZWRpdEl0ZW0sIHRvZ2dsZUNvbXBsZXRlfSBmcm9tICcuLi9lZGl0L2VkaXRJdGVtJztcclxuaW1wb3J0IGdldFRpbWUgZnJvbSAnLi9nZXRUaW1lJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IHsgZ2V0UmVuZGVyTGlzdCB9IGZyb20gJy4uL3JlYWQvc29ydEJ1dHRvbic7XHJcblxyXG5jb25zdCByZW5kZXJJdGVtcyA9ICgpID0+IHtcclxuXHJcbiAgICAvL2N1cnJlbnRseSBkb2luZyBhIGZ1bGwgcmUtcmVuZGVyIG9uIGNoYW5nZTpcclxuICAgIC8vV2F5cyBvZiBtYWtpbmcgbW9yZSBlZmZpY2llbnQ/XHJcbiAgICAvL1dpbGwgcmVxdWlyZSBtb2RpZnlpbmcgZXhpc3Rpbmcgc3RydWN0dXJlP1xyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nSXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1saXN0Jyk7XHJcbiAgICBjb25zdCBjb250ZW50QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LWFyZWEnKTtcclxuXHJcblxyXG4gICAgLy90cnkvY2F0Y2ggaGVyZSBpcyBhIGNvc21ldGljIGZpeCBvbmx5IC0gd2lsbCBhZGQgaW5maW5pdGUgaXRlbS1saXN0IGRpdnMgaWYgeW91IHNwYW0gdGhlIHNvcnQgYnV0dG9uLlxyXG4gICAgLy8gZWFzaWVzdCBzb2x1dGlvbiAtIGRpc2FibGUgYWN0aW9uIGJ1dHRvbnMgZm9yIDUwMG1zP1xyXG4gICAgLy8gSWYgaXRlbUxpc3QgZXhpc3RzLCBhZGRzIGEgJ2RlbGV0ZWQnIGNsYXNzIHRoZW4gZGVsZXRlcyB0aGUgZWxlbWVudCBhZnRlciA1MDBtcy5cclxuICAgIGlmIChleGlzdGluZ0l0ZW1MaXN0KSB7XHJcbiAgICAgICAgZXhpc3RpbmdJdGVtTGlzdC5jbGFzc0xpc3QuYWRkKCdkZWxldGVkJyk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRBcmVhLnJlbW92ZUNoaWxkKGV4aXN0aW5nSXRlbUxpc3QpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjcmVhdGVzIGFuICdpdGVtLWxpc3QnIGVsZW1lbnRcclxuICAgIGNvbnN0IGl0ZW1MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtTGlzdC5pZCA9ICdpdGVtLWxpc3QnO1xyXG4gICAgY29udGVudEFyZWEuYXBwZW5kQ2hpbGQoaXRlbUxpc3QpO1xyXG5cclxuXHJcbiAgICAvLyBnZXQgY29sbGVjdGlvbiB0byByZW5kZXIgb3JkZXJlZCBieSBkYXRlIGVpdGhlciBkZXNjZW5kaW5nIG9yIGFzY2VuZGluZy4gXHJcbiAgICBsZXQgcmVuZGVyTGlzdCA9IGdldFJlbmRlckxpc3QoKTtcclxuXHJcbiAgICAvLyBmb3IgZWFjaCBpdGVtIG9iamVjdCwgY3JlYXRlIGFuICdpdGVtIGJveCcgYW5kIGFwcGVuZCBpdFxyXG4gICAgcmVuZGVyTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW1MaXN0LmFwcGVuZChyZW5kZXJJdGVtQm94KGl0ZW0pKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIGNyZWF0ZSBpbmRpdmlkdWFsICdpdGVtLWJveGVzJyBiYXNlZCBvbiBpdGVtIG9iamVjdHMuIFxyXG4vLyBjbGlja2FibGUgZWxlbWVudHMgYXJlIGdpdmVuIGRhdGEtaWRzIHRoYXQgZmFjaWxpdGF0ZSBzZWxlY3Rpb24gYW5kIG1vZGlmaWNhdGlvbiBvZiB0aGUgb2JqZWN0cy5cclxuLy8gZXZlbnQgbGlzdGVuZXJzIGFyZSBhZGRlZCB0byBjbGlja2FibGUgb2JqZWN0cyBoZXJlIC0gc2VlbWVkIGNvbnZlbmllbnQgLSBzaG91bGQgdGhpcyBiZSBkb25lIGVsc2V3aGVyZT9cclxuY29uc3QgcmVuZGVySXRlbUJveCA9IChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgaXRlbU1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtTWVzc2FnZS50ZXh0Q29udGVudCA9IGl0ZW0ubXNnO1xyXG4gICAgaXRlbU1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaXRlbS5pZCk7XHJcbiAgICBpZiAoaXRlbS5jb21wbGV0ZSkge1xyXG4gICAgICAgIGl0ZW1NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgaXRlbUJveC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xyXG4gICAgfTtcclxuICAgIGl0ZW1NZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGlkID0gaXRlbU1lc3NhZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgdG9nZ2xlQ29tcGxldGUoaWQpO1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBpdGVtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1EYXRlLnRleHRDb250ZW50ID0gZ2V0VGltZShpdGVtLmRhdGUpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uQm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnYnV0dG9uLWJveCcpO1xyXG5cclxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdvcGVuLWVkaXQtYnV0dG9uJyk7XHJcbiAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGl0ZW0uaWQpO1xyXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBpZCA9IGVkaXRCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgZWRpdEl0ZW0oaWQpO1xyXG4gICAgfSlcclxuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRURJVCc7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaXRlbS5pZCk7XHJcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnREVMRVRFJztcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBpZCA9IGRlbGV0ZUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICBjbGVhckl0ZW0oaWQpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICBpdGVtQm94LmFwcGVuZChpdGVtTWVzc2FnZSwgaXRlbURhdGUsIGJ1dHRvbkJveCk7XHJcbiAgICBidXR0b25Cb3guYXBwZW5kKGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbilcclxuICAgIFxyXG4gICAgcmV0dXJuIGl0ZW1Cb3g7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJJdGVtczsiLCJpbXBvcnQgaXRlbUNvbGxlY3Rpb24gZnJvbSBcIi4uL21hbmFnZUNvbGxlY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlybUVkaXRJdGVtLCBlZGl0SXRlbSB9IGZyb20gXCIuLi9lZGl0L2VkaXRJdGVtXCI7XHJcblxyXG5cclxuLy8gRGlzcGxheSBhbmQgc3VibWl0ICdBZGQgSXRlbScgRm9ybS5cclxuXHJcbmNvbnN0IHNldHVwSW50ZXJhY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhZGRJdGVtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXBvcHVwLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgYWRkSXRlbUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW0tZm9ybScpO1xyXG4gICAgY29uc3QgZWRpdEl0ZW1Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtaXRlbS1mb3JtJyk7XHJcbiAgICBjb25zdCBzdWJtaXRBZGRJdGVtRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtaXRlbS1idXR0b24nKTtcclxuICAgIGNvbnN0IHN1Ym1pdEVkaXRJdGVtRm9ybWJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWl0ZW0tYnV0dG9uJyk7XHJcbiAgICBjb25zdCBlZGl0SXRlbUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuLWVkaXQtYnV0dG9uJykpO1xyXG4gICAgY29uc3QgY2xlYXJBbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXItYWxsLWJ1dHRvbicpO1xyXG5cclxuXHJcbiAgICAvLyBkaXNwbGF5ICdhZGQgaXRlbScgZm9ybTpcclxuICAgIGNvbnN0IGRpc3BsYXlBZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZEl0ZW1Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGVkaXRJdGVtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWRkSXRlbSk7XHJcblxyXG4gICAgXHJcbiAgICAvLyBzdWJtaXQgJ2FkZCBpdGVtJyBmb3JtOlxyXG4gICAgY29uc3Qgc3VibWl0QWRkSXRlbUZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gYWRkIGNvZXJjaW9uIGFuZCBlcnJvciBoYW5kbGluZyBoZXJlXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJykudmFsdWU7O1xyXG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlO1xyXG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmFkZE9iamVjdChtZXNzYWdlSW5wdXQsIGRhdGVJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0QWRkSXRlbUZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRBZGRJdGVtRm9ybSk7XHJcblxyXG5cclxuICAgIC8vcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvdXJcclxuICAgIFxyXG4gICAgYWRkSXRlbUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIGVkaXRJdGVtRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy9zdWJtaXQgZWRpdCBpdGVtIGZvcm0gLSBjYWxsIGV4dGVybmFsICdjb25maXJtYXRpb24nIGZ1bmN0aW9uOlxyXG4gICAgc3VibWl0RWRpdEl0ZW1Gb3JtYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZWRpdEl0ZW1Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgY29uZmlybUVkaXRJdGVtKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gY2xlYXIgYWxsIGJ1dHRvbiBjYWxscyBpdGVtIGNvbGxlY3Rpb24ncyAnZGVsZXRlQWxsT2JqZWN0cycgbWV0aG9kOlxyXG4gICAgY2xlYXJBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpdGVtQ29sbGVjdGlvbi5kZWxldGVBbGxPYmplY3RzKCk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQge3NldHVwSW50ZXJhY3Rpb259OyIsImltcG9ydCBpdGVtQ29sbGVjdGlvbiBmcm9tIFwiLi9tYW5hZ2VDb2xsZWN0aW9uXCI7XHJcbmltcG9ydCByZW5kZXJJdGVtcyBmcm9tIFwiLi9yZW5kZXIvcmVuZGVyQ29sbGVjdGlvblwiO1xyXG5pbXBvcnQgeyBzZXR1cEludGVyYWN0aW9uIH0gZnJvbSBcIi4vcmVuZGVyL3VzZXJJbnRlcmFjdGlvblwiO1xyXG5cclxuXHJcbi8vIHNpbXBseSBjYWxscyBhIHJlLXJlbmRlciBhdCB0aGlzIHN0YWdlLlxyXG5jb25zdCBvYnNlcnZlQ29sbGVjdGlvbiA9IHtcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24oc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhbGxpbmcgYSByZS1yZW5kZXIuLi4nKTtcclxuXHJcbiAgICAgICAgcmVuZGVySXRlbXMoKTtcclxuICAgICAgICAvL3NldHVwSW50ZXJhY3Rpb24oKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVDb2xsZWN0aW9uOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==