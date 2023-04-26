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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/trash.svg */ "./src/assets/trash.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@keyframes slidein {\n  from {\n    width: 300%;\n  }\n  to {\n    width: 100%;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nbutton:not(.submit-form-button):hover {\n  cursor: pointer;\n  width: 1.1rem;\n  filter: brightness(1.05);\n}\nbutton:not(.submit-form-button):active {\n  transform: scale(1.01);\n}\n\n.hidden {\n  display: none !important;\n}\n\n.complete {\n  text-decoration: line-through !important;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #f9f7f3;\n  background-image: url(\"https://www.transparenttextures.com/patterns/beige-paper.png\");\n  height: auto;\n}\n\n.main-button:hover {\n  scale: 1.05;\n}\n\n#header {\n  animation: slidein 0.5s;\n  display: flex;\n  flex-wrap: nowrap;\n  top: 0px;\n  border: none;\n  width: 100vw;\n  z-index: 9000;\n  grid-area: header;\n  height: calc(15vh + 1vw);\n  position: fixed;\n  background-color: #0fa3b1;\n  background-image: url(\"https://www.transparenttextures.com/patterns/beige-paper.png\");\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n  align-items: center;\n  justify-content: center;\n}\n#header h1 {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  font-family: \"Calligraffitti\", cursive;\n  color: #f9f7f3;\n  font-size: calc(1.6rem + 3vw);\n  text-align: center;\n  padding: 1rem 0rem 1rem 1.5rem;\n}\n#header img {\n  transform: scale(0.8);\n  filter: invert(0.93);\n}\n\n#add-item-form, #edit-item-form {\n  animation: fadeIn 0.2s;\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  border: solid #0fa3b1 3px;\n  position: fixed;\n  top: 20%;\n  right: 5%;\n  z-index: 99999;\n  background-color: #bbedf3;\n  width: 90vw;\n  height: fit-content;\n}\n#add-item-form .close-form, #edit-item-form .close-form {\n  position: absolute;\n  right: 1rem;\n  align-self: flex-end;\n  text-align: center;\n  background-color: transparent;\n  color: slategray;\n  border: none;\n  height: fit-content;\n  font-size: 2.5rem;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#add-item-form .close-form:hover, #edit-item-form .close-form:hover {\n  color: black;\n}\n#add-item-form ul, #edit-item-form ul {\n  padding: 1rem;\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n#add-item-form ul .form-row:first-child, #edit-item-form ul .form-row:first-child {\n  background-color: #bbedf3;\n  border-bottom: #0fa3b1 solid 2px;\n  justify-self: stretch;\n  align-self: stretch;\n}\n#add-item-form ul .form-row:first-child p, #edit-item-form ul .form-row:first-child p {\n  text-align: center;\n  font-weight: bold;\n  font-size: calc(20px + 1vw);\n  margin: 1rem 0rem 1rem 0rem;\n}\n#add-item-form ul .form-row:last-child, #edit-item-form ul .form-row:last-child {\n  align-self: center;\n  width: fit-content;\n  margin: 1rem;\n}\n#add-item-form ul .form-row, #edit-item-form ul .form-row {\n  width: 100%;\n  height: 25%;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: flex-start;\n  margin-bottom: 1rem;\n}\n#add-item-form ul .form-row label, #edit-item-form ul .form-row label {\n  margin-bottom: 5px;\n  display: block;\n  font-size: 1rem;\n  padding: 0 20px 0 10px;\n}\n#add-item-form ul .form-row input, #edit-item-form ul .form-row input {\n  background-color: #FFFFFF;\n  border: 1px solid #D6D9DC;\n  border-radius: 3px;\n  width: 100%;\n  padding: 7px;\n  font-size: 1rem;\n}\n#add-item-form ul .form-row button, #edit-item-form ul .form-row button {\n  display: flex;\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #FFFFFF;\n  background-color: #0fa3b1;\n  border: none;\n  border-radius: 3px;\n  padding: 1rem;\n  margin-top: 2rem 0rem 2rem 0rem;\n  cursor: pointer;\n}\n\n#content-area {\n  position: absolute;\n  top: calc(18vh + 1vw);\n  height: fit-content;\n  margin: 0.5rem 1.5rem 0.5rem 0.5rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 4fr 1fr;\n  grid-template-areas: \"content controls\";\n}\n#content-area #list-controls {\n  grid-area: controls;\n  display: flex;\n}\n#content-area #list-controls #sort-button {\n  align-self: flex-start;\n  text-align: center;\n  background-color: #bbedf3;\n  color: #333333;\n  border: none;\n  border-radius: 10px;\n  font-size: calc(0.6rem + 1vw);\n  height: fit-content;\n  padding: 0.8rem;\n  width: 20vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#content-area #list-controls #sort-button::after {\n  content: \"Date Ascending\\a↑\";\n  display: block;\n  color: gray;\n  font-size: calc(0.4rem + 1vw);\n  padding-top: 0.5rem;\n}\n#content-area #list-controls #sort-button.descending::after {\n  content: \"Date Descending\\a↓\";\n  text-align: center;\n  display: block;\n  color: gray;\n  font-size: calc(0.4rem + 1vw);\n  padding-top: 0.5rem;\n}\n#content-area #footer {\n  z-index: 100;\n  height: 30vh;\n  width: 100vw;\n  position: fixed;\n  bottom: 0%;\n}\n#content-area #footer::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 50vh;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 100%);\n  z-index: -1;\n}\n\n#modal-popup-button {\n  color: #eddea4;\n  z-index: 1000;\n  background-color: #0fa3b1;\n  border: none;\n  border-radius: 100px;\n  font-size: calc(10vh + 20px);\n  position: fixed;\n  bottom: 5%;\n  transform: translateX(-50%);\n  left: 75%;\n  width: calc(30vw - 40px);\n  height: calc(30vw - 40px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#delete-buttons {\n  z-index: 9000;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n#delete-buttons #delete-options-button {\n  border: none;\n  background-color: #f7a072;\n  border-radius: 100px;\n  position: fixed;\n  width: calc(30vw - 40px);\n  height: calc(30vw - 40px);\n  bottom: 5%;\n  transform: translateX(-50%);\n  left: 25%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#delete-buttons #delete-options-button #delete-options-icon {\n  height: calc(18vw - 20px);\n}\n#delete-buttons #delete-options-container {\n  position: fixed;\n  width: fit-content;\n  bottom: 5%;\n  transform: translateX(-50%);\n  left: 25%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n#delete-buttons #delete-options-container button {\n  text-align: center;\n  background-color: #f7a072;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  height: fit-content;\n  padding: 1rem;\n  width: 40vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#delete-buttons #delete-options-container button ::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#item-list {\n  height: fit-content;\n  z-index: 0;\n  animation: fadeIn 0.5s ease-in-out forwards;\n  grid-area: content;\n  display: flex;\n  flex-flow: column nowrap;\n}\n#item-list #item-box {\n  padding: 1rem;\n  border-radius: 20px;\n  background-color: #bbedf3;\n  margin: 1rem;\n  gap: 0.5rem;\n  display: grid;\n  grid-template: 2fr 1fr/1fr 1fr;\n  grid-template-areas: \"main buttons\" \". date\";\n}\n#item-list #item-box:hover {\n  background-color: #bbe8f3;\n}\n#item-list #item-box p:first-child {\n  display: flex;\n  font-family: \"Calligraffitti\", cursive;\n  padding-left: 0.5rem;\n  font-size: calc(1vw + 10px);\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n#item-list #item-box p:first-child:hover {\n  cursor: pointer;\n}\n#item-list #item-box p:nth-child(2) {\n  grid-area: date;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-style: italic;\n}\n#item-list #item-box #button-box {\n  grid-area: buttons;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3px;\n  background-color: transparent;\n}\n#item-list #item-box #button-box button {\n  text-align: center;\n  background-color: #333333;\n  color: #f8f9fa;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  height: fit-content;\n  padding: 0.8rem;\n  width: fit-content;\n}\n#item-list div:nth-child(odd) {\n  background-color: #a8d4d9;\n}\n\n*.deleted {\n  animation: fadeOut 0.5s ease-in-out forwards;\n}\n\n@media screen and (min-width: 500px) {\n  #delete-buttons #delete-options-button {\n    position: fixed;\n    left: 90%;\n    height: fit-content;\n    padding: 1rem;\n    height: 13.8vh;\n    width: 13.8vh;\n  }\n  #delete-buttons #delete-options-button #delete-options-icon {\n    height: 8vh;\n  }\n  #delete-buttons #delete-options-container {\n    position: fixed;\n    left: 90%;\n    bottom: 2%;\n    align-items: center;\n  }\n  #delete-buttons #delete-options-container button {\n    width: fit-content;\n  }\n  #add-item-form, #edit-item-form {\n    border-radius: 10px;\n    border: solid #0fa3b1 3px;\n    position: fixed;\n    top: 12%;\n    right: 1%;\n    z-index: 99999;\n    background-color: #bbedf3;\n    width: fit-content;\n    height: fit-content;\n  }\n  #add-item-form ul, #edit-item-form ul {\n    height: 60vh;\n    width: 30vw;\n  }\n  #add-item-form .submit-form-button:hover, #edit-item-form .submit-form-button:hover {\n    filter: brightness(1.05);\n  }\n  #add-item-form .submit-form-button:active, #edit-item-form .submit-form-button:active {\n    scale: 1.05;\n  }\n  #modal-popup-button {\n    position: fixed;\n    bottom: 28%;\n    transform: translateX(-50%);\n    left: 90%;\n    display: flex;\n    font-size: 15vh;\n    height: 13.8vh;\n    width: 13.8vh;\n  }\n  #modal-popup-button p {\n    justify-self: center;\n    align-self: center;\n  }\n  #footer {\n    display: none;\n  }\n  #button-box button {\n    opacity: 50%;\n  }\n  #item-list div:hover #button-box button {\n    opacity: 70%;\n  }\n  #item-list div:hover #button-box button:hover {\n    opacity: 100%;\n  }\n}\n/* Laptops and larger */\n@media screen and (min-width: 1024px) {\n  /* Your CSS rules here */\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["// Light Mode Colors\r\n$primary-color: #0fa3b1;\r\n$secondary-color: #bbedf3;\r\n$tertiary-color: #f7a072;\r\n$text-color: #333333;\r\n$background-color: #f9f7f3;\r\n\r\n// Dark Mode Colors\r\n$text-color-dark: #f8f9fa;\r\n$background-color-dark: #212529;\r\n\r\n// Default Variables\r\n$primary: $primary-color;\r\n$secondary: $secondary-color;\r\n$text: $text-color;\r\n$background: $background-color;\r\n\r\n@keyframes slidein {\r\n    from {\r\n    //   padding-right: -100%;\r\n      width: 300%;\r\n    }\r\n    to {\r\n    //   padding-right: 0%;\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n@keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\nbutton:not(.submit-form-button) {\r\n  &:hover {\r\n    cursor: pointer;\r\n    width: 1.1rem;\r\n    filter: brightness(1.05);\r\n  }\r\n  &:active {\r\n    transform: scale(1.01);\r\n  }\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.complete {\r\n    text-decoration: line-through !important;\r\n    color: fade-out($color: #000000, $amount: 0.5);\r\n}\r\n\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n:root {\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: $background;\r\n  background-image: url(\"https://www.transparenttextures.com/patterns/beige-paper.png\");\r\n  height: auto;\r\n}\r\n\r\n.main-button:hover {\r\n    scale: 1.05;\r\n}\r\n\r\n#header {\r\n  animation: slidein 0.5s;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  top: 0px;\r\n  border: none;\r\n  width: 100vw;\r\n  z-index: 9000;\r\n  grid-area: header;\r\n  height: calc(15vh + 1vw);\r\n  position: fixed;\r\n  background-color: $primary;\r\n  background-image: url(\"https://www.transparenttextures.com/patterns/beige-paper.png\");\r\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\r\n  align-items: center;\r\n  justify-content: center;\r\n  h1 {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    font-family: \"Calligraffitti\", cursive;\r\n    color: #f9f7f3;\r\n    font-size: calc(1.6rem + 3vw);\r\n    text-align: center;\r\n    padding: 1rem 0rem 1rem 1.5rem;\r\n  }\r\n  img {\r\n    transform: scale(0.8);\r\n    filter: invert(0.93);\r\n  }\r\n}\r\n\r\n#add-item-form, #edit-item-form {\r\n    animation: fadeIn 0.2s;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 10px;\r\n    border: solid $primary 3px;\r\n    position: fixed;\r\n    top: 20%;\r\n    right: 5%;\r\n    z-index: 99999;\r\n    background-color: $secondary;\r\n    width: 90vw;\r\n    height: fit-content;\r\n    .close-form {\r\n        position: absolute;\r\n        right: 1rem;\r\n        align-self: flex-end;\r\n        text-align: center;\r\n        background-color: transparent;\r\n        color: slategray;\r\n        border: none;\r\n        height: fit-content;\r\n        font-size: 2.5rem;\r\n        width: fit-content;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        &:hover {\r\n            color: black;\r\n        }\r\n    }\r\n    ul {\r\n        padding: 1rem;\r\n        list-style-type: none;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    .form-row:first-child {\r\n        background-color: $secondary;\r\n        border-bottom: $primary solid 2px;\r\n        justify-self: stretch;\r\n        align-self: stretch;\r\n        p {\r\n          text-align: center;\r\n          font-weight: bold;\r\n          font-size: calc(20px + 1vw);\r\n          margin: 1rem 0rem 1rem 0rem;\r\n        }\r\n    }\r\n    .form-row:last-child {\r\n        align-self: center;\r\n        width: fit-content;\r\n        margin: 1rem;\r\n    }\r\n    .form-row {\r\n        width: 100%;\r\n        height: 25%;\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        justify-content: flex-start;\r\n        margin-bottom: 1rem;\r\n        label {\r\n            margin-bottom: 5px;\r\n            display: block;\r\n            font-size: 1rem;\r\n            padding: 0 20px 0 10px;\r\n        }\r\n        input {\r\n            background-color: #FFFFFF;\r\n            border: 1px solid #D6D9DC;\r\n            border-radius: 3px;\r\n            width: 100%;\r\n            padding: 7px;\r\n            font-size: 1rem;\r\n        }\r\n        button {\r\n            display: flex;\r\n            font-size: 1.1rem;\r\n            font-weight: bold;\r\n            \r\n            color: #FFFFFF;\r\n            background-color: $primary;\r\n            \r\n            border: none;\r\n            border-radius: 3px;\r\n            \r\n            padding: 1rem;\r\n            margin-top: 2rem 0rem 2rem 0rem;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n    }\r\n}\r\n\r\n\r\n\r\n#content-area {\r\n  position: absolute;\r\n  top: calc(18vh + 1vw);\r\n  height: fit-content;\r\n  margin: 0.5rem 1.5rem 0.5rem 0.5rem;\r\n  display: grid;\r\n  grid-template-rows: 1fr;\r\n  grid-template-columns: 4fr 1fr;\r\n  grid-template-areas:\r\n    \"content controls\";\r\n  #list-controls {\r\n    grid-area: controls;\r\n    display: flex;\r\n    #sort-button {\r\n      align-self: flex-start;\r\n      text-align: center;\r\n      background-color: $secondary;\r\n      color: $text;\r\n      border: none;\r\n      border-radius: 10px;\r\n      font-size: calc(0.6rem + 1vw);\r\n      height: fit-content;\r\n      padding: 0.8rem;\r\n      width: 20vw;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    #sort-button::after {\r\n      content: \"Date Ascending\\a↑\";\r\n      display: block;\r\n      color: gray;\r\n      font-size: calc(0.4rem + 1vw);\r\n      padding-top: 0.5rem;\r\n    }\r\n    #sort-button.descending::after {\r\n      content: \"Date Descending\\a↓\";\r\n      text-align: center;\r\n      display: block;\r\n      color: gray;\r\n      font-size: calc(0.4rem + 1vw);\r\n      padding-top: 0.5rem;\r\n    }\r\n  }\r\n  #footer {\r\n    z-index: 100;\r\n    height: 30vh;\r\n    width: 100vw;\r\n    position: fixed;\r\n    bottom: 0%;\r\n    //opacity: 10%;\r\n    &::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      bottom: 0;\r\n      left: 0;\r\n      right: 0;\r\n      height: 50vh; // Change this to adjust the height of the fade-out effect.\r\n      background: linear-gradient(\r\n        to bottom,\r\n        rgba(255, 255, 255, 0) 0%,\r\n        white 100%\r\n      );\r\n      z-index: -1;\r\n    }\r\n  }\r\n}\r\n\r\n#modal-popup-button {\r\n  color: #eddea4;\r\n  z-index: 1000;\r\n  background-color: $primary;\r\n  border: none;\r\n  border-radius: 100px;\r\n  font-size: calc(10vh + 20px);\r\n  position: fixed;\r\n  bottom: 5%;\r\n  transform: translateX(-50%);\r\n  left: 75%;\r\n\r\n  width: calc(30vw - 40px);\r\n  height: calc(30vw - 40px);\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#delete-buttons {\r\n  z-index: 9000;\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  #delete-options-button {\r\n    border: none;\r\n    background-color: $tertiary-color;\r\n    border-radius: 100px;\r\n    //padding: 1.6rem;\r\n    position: fixed;\r\n    width: calc(30vw - 40px);\r\n    height: calc(30vw - 40px);\r\n    bottom: 5%;\r\n    transform: translateX(-50%);\r\n    left: 25%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    #delete-options-icon {\r\n      height: calc(18vw - 20px);\r\n    }\r\n  }\r\n  #delete-options-container {\r\n    position: fixed;\r\n    width: fit-content;\r\n    bottom: 5%;\r\n    transform: translateX(-50%);\r\n    left: 25%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    button {\r\n      text-align: center;\r\n      background-color: $tertiary-color;\r\n      border: none;\r\n      border-radius: 10px;\r\n      font-size: 1rem;\r\n      height: fit-content;\r\n      padding: 1rem;\r\n      width: 40vw;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      ::after {\r\n        content: url(\"./assets/trash.svg\");\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n\r\n#item-list {\r\n  height: fit-content;\r\n  z-index: 0;\r\n  animation: fadeIn 0.5s ease-in-out forwards;\r\n  grid-area: content;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  #item-box {\r\n    padding: 1rem;\r\n    border-radius: 20px;\r\n    background-color: $secondary;\r\n    margin: 1rem;\r\n    gap: 0.5rem;\r\n    display: grid;\r\n    grid-template: 2fr 1fr / 1fr 1fr;\r\n    grid-template-areas:\r\n      \"main buttons\"\r\n      \". date\";\r\n    &:hover {\r\n        background-color: adjust-hue($color: $secondary, $degrees: 5);\r\n    }\r\n    p:first-child {\r\n      display: flex;\r\n      font-family: \"Calligraffitti\", cursive;\r\n      padding-left: 0.5rem;\r\n      font-size: calc(1vw + 10px);\r\n      font-weight: bold;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: flex-end;\r\n      &:hover {\r\n        cursor: pointer;\r\n      }\r\n    }\r\n    p:nth-child(2) {\r\n      grid-area: date;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      font-style: italic;\r\n    }\r\n    #button-box {\r\n      grid-area: buttons;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      gap: 3px;\r\n      background-color: transparent;\r\n      button {\r\n        text-align: center;\r\n        background-color: $text;\r\n        color: $text-color-dark;\r\n        border: none;\r\n        border-radius: 10px;\r\n        font-size: 0.7rem;\r\n        height: fit-content;\r\n        padding: 0.8rem;\r\n        width: fit-content;\r\n      }\r\n    }\r\n  }\r\n  div:nth-child(odd) {\r\n    background-color: #a8d4d9;\r\n  }\r\n}\r\n\r\n*.deleted {\r\n  animation: fadeOut 0.5s ease-in-out forwards;\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  #delete-buttons {\r\n    #delete-options-button {\r\n      position: fixed;\r\n      left: 90%;\r\n      height: fit-content;\r\n      padding: 1rem;\r\n      height: 13.8vh;\r\n      width: 13.8vh;\r\n      #delete-options-icon {\r\n        height: 8vh;\r\n      }\r\n    }\r\n    #delete-options-container {\r\n        position: fixed;\r\n        left: 90%;\r\n        bottom: 2%;\r\n        align-items: center;\r\n      button {\r\n        width: fit-content;\r\n        ::after {\r\n        }\r\n      }\r\n    }\r\n  }\r\n  #add-item-form, #edit-item-form {\r\n    border-radius: 10px;\r\n    border: solid $primary 3px;\r\n    position: fixed;\r\n    top: 12%;\r\n    right: 1%;\r\n    z-index: 99999;\r\n    background-color: $secondary;\r\n    width: fit-content;\r\n    height: fit-content;\r\n    ul {\r\n        height: 60vh;\r\n        width: 30vw;\r\n\r\n    }\r\n    .submit-form-button {\r\n        &:hover {\r\n            filter: brightness(1.05);\r\n        }\r\n        &:active {\r\n            scale: 1.05;\r\n        }\r\n    }\r\n  }\r\n  #modal-popup-button {\r\n    position: fixed;\r\n    bottom: 28%;\r\n    transform: translateX(-50%);\r\n    left: 90%;\r\n    display: flex;\r\n    font-size: 15vh;\r\n\r\n    height: 13.8vh;\r\n    width: 13.8vh;\r\n\r\n    p {\r\n      justify-self: center;\r\n      align-self: center;\r\n    }\r\n  }\r\n\r\n  #footer {\r\n    display: none;\r\n  }\r\n  \r\n  #button-box button {\r\n    opacity: 50%;\r\n  }\r\n\r\n  #item-list div:hover #button-box button {\r\n    opacity: 70%;\r\n    &:hover {\r\n        opacity: 100%;\r\n    }\r\n  }\r\n}\r\n\r\n/* Laptops and larger */\r\n@media screen and (min-width: 1024px) {\r\n  /* Your CSS rules here */\r\n}\r\n\r\n\r\n\r\n// styling pertaining to list UI effects:\r\n\r\n\r\n// #item-box-outer{\r\n//     text-align: center;\r\n//     list-style: none !important;\r\n//     font-size: 3.5rem;\r\n//     width: 300px;\r\n//     height: 0;\r\n//     position: relative;\r\n//     cursor: pointer;\r\n// }\r\n\r\n// #item-box-outer.show:not(:first-child){\r\n//     margin-top: 10px !important;\r\n// }\r\n\r\n// #item-box-outer #item-box {\r\n//     padding: 2rem 0;\r\n//     width: 100%;\r\n//     background-color: lightgray;\r\n//     position: absolute;\r\n//     opacity: 0;\r\n//     top: 0;\r\n//     left: 0;\r\n//     transform: translateY(-300px);\r\n//     transition: all 0.6s ease-out;\r\n// }\r\n\r\n// #item-box-outer #item-box.show{\r\n//     opacity: 1 !important;\r\n//     transform: translateY(0) !important;\r\n// }\r\n\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/delete/clearComplete.js":
/*!*************************************!*\
  !*** ./src/delete/clearComplete.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearComplete": () => (/* binding */ clearComplete)
/* harmony export */ });
/* harmony import */ var _manageCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manageCollection */ "./src/manageCollection.js");



// with current set up, each time deleteObject is called a re-render takes place.
// Could set up a new method that involves simply passing a new array to the item collection to replace the current one?
// Could improve the 'Always re-render everything' solution to updating the page.

const clearComplete = () => {
    console.log('clear complete called');
    let completedItems = _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].collection.filter(item => item.complete === true);
    console.log(completedItems);
    completedItems.forEach(item => _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].deleteObject(item));

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
//  --Given, for eg. the 'clear all' function has no intermediary module - it's called in the same place the listener is added to the button. 

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
/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateForm */ "./src/edit/validateForm.js");
/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_validateForm__WEBPACK_IMPORTED_MODULE_1__);



const editItemMsgInput = document.querySelector('#edit-message');
const editItemDateInput = document.querySelector('#edit-date');
const editItemForm = document.querySelector('#edit-item-form');
const addItemForm = document.querySelector('#add-item-form');


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
    addItemForm.style.display = 'none';
    editItemMsgInput.select();
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
    if ((0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.validateForm)(editItemForm)) {
        _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].modifyObject(selectedItem, messageInput, dateInput);
    }
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

/***/ "./src/edit/validateForm.js":
/*!**********************************!*\
  !*** ./src/edit/validateForm.js ***!
  \**********************************/
/***/ (() => {

// Validation module.

// May need to modify app structure/flow.

// 'userInteraction' module is responsbible for submitting and toggling form visibility.
// 'edit form' logic exists in 'editItem' module and is again called from userInteraction. 

// intended behaviour:
    // user opens 'edit item' form with inputs appropriately pre-filled
    // form will display warning if user attempts to submit form with empty inputs
    // warning message will be cleared when user inputs data/closes form.
    // if inputs are valid form will then toggle to invisible and array will be updated.

//  possible implementation:
    // userInteraction: open 'edit form'.
    // call edit-item pre-fill form function.
    // call validateForm function and pass back to (userInteraction? editItem?) to submit data and toggle form visibility if/when successful.




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
/* harmony import */ var _render_deletionOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render/deletionOptions */ "./src/render/deletionOptions.js");
/* harmony import */ var _read_sortButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./read/sortButton */ "./src/read/sortButton.js");










// example items
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)('feed the ducks', '2023-04-09'));
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)('start a scheme', '2023-04-11'));
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)("climb a tree", '2023-04-09'));
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)('dentist', '2022-04-09'));
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)('sail the seven seas', '2023-04-12'));


// call these here? 
// set up an onload event listener in each module?
// renderItems needs to go first.
(0,_render_renderCollection__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_render_userInteraction__WEBPACK_IMPORTED_MODULE_4__.setupInteraction)();
(0,_edit_selectItem__WEBPACK_IMPORTED_MODULE_5__.elementSelection)();
(0,_render_deletionOptions__WEBPACK_IMPORTED_MODULE_6__["default"])();
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

/***/ "./src/render/deletionOptions.js":
/*!***************************************!*\
  !*** ./src/render/deletionOptions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_trash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/trash.svg */ "./src/assets/trash.svg");


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
  deleteOptionsButtonIcon.src = _assets_trash_svg__WEBPACK_IMPORTED_MODULE_0__;
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

/***/ "./src/render/handleItemEffects.js":
/*!*****************************************!*\
  !*** ./src/render/handleItemEffects.js ***!
  \*****************************************/
/***/ (() => {

// Attempt at improving UI.


const calculateHeightOfListContainer = () => {
    const listItems = document.querySelectorAll('#item-box-outer');

    console.log(listItems);

    const firstListItem = Array.from(listItems)[0];
    console.log(firstListItem);
    let heightofListItem = firstListItem.clientHeight;
    const styleTag = document.createElement('style');
    document.body.prepend(styleTag);
    styleTag.innerHTML = `.list-container{
        height: ${heightofListItem}px;
    }`;

    setTimeout(function() {
        styleTag.innerHTML += `#item-box-outer {
          transition: all 0.6s ease-out;
        }`;
      }, 0);
};

// export { calculateHeightOfListContainer };

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
/* harmony import */ var _delete_clearItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delete/clearItem */ "./src/delete/clearItem.js");
/* harmony import */ var _edit_editItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit/editItem */ "./src/edit/editItem.js");
/* harmony import */ var _getTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTime */ "./src/render/getTime.js");
/* harmony import */ var _read_sortButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../read/sortButton */ "./src/read/sortButton.js");
/* harmony import */ var _handleItemEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleItemEffects */ "./src/render/handleItemEffects.js");
/* harmony import */ var _handleItemEffects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_handleItemEffects__WEBPACK_IMPORTED_MODULE_4__);






const renderItems = () => {

    //currently doing a full re-render on change:
    //Ways of making more efficient?
    //Will require modifying existing structure?

    const existingItemList = document.querySelector('#item-list');
    const contentArea = document.querySelector('#content-area');


    //try/catch here is a cosmetic fix only - will add infinite item-list divs if you spam the sort button.
    // easiest solution - disable action buttons for 500ms?
    // If itemList exists, adds a 'deleted' class then deletes the element after 500ms.
    
        // if (existingItemList) {
        //     existingItemList.classList.add('deleted');
        //     setTimeout(function() {
        //         try {
        //             contentArea.removeChild(existingItemList);
        //         } catch {
        //             //
        //         }
        //       }, 500);

        // };

    // Everything functions as it should this way, but doesn't look as good - visible refresh. 

        if (existingItemList) {
            contentArea.removeChild(existingItemList);
        };

    // creates an 'item-list' element
    const itemList = document.createElement('div');
    itemList.id = 'item-list';
    contentArea.appendChild(itemList);


    // get collection to render ordered by date either descending or ascending. 
    let renderList = (0,_read_sortButton__WEBPACK_IMPORTED_MODULE_3__.getRenderList)();

    // for each item object, create an 'item box' and append it
    renderList.forEach(item => {
        itemList.append(renderItemBox(item));
    })

    // calculateHeightOfListContainer();


}

// create individual 'item-boxes' based on item objects. 
// clickable elements are given data-ids that facilitate selection and modification of the objects.
// event listeners are added to clickable objects here - seemed convenient - should this be done elsewhere?
const renderItemBox = (item) => {
    // const itemBoxOuter = document.createElement('div');
    // itemBoxOuter.setAttribute('id', 'item-box-outer');
    // itemBoxOuter.classList.add('show');
    const itemBox = document.createElement('div');
    itemBox.setAttribute('id', 'item-box');
    itemBox.classList.add('show');

    const itemMessage = document.createElement('p');
    itemMessage.textContent = item.msg;
    itemMessage.setAttribute('data-id', item.id);
    if (item.complete) {
        itemMessage.classList.add('complete');
        itemBox.classList.add('complete');
    };
    itemMessage.addEventListener('click', function() {
        let id = itemMessage.getAttribute('data-id');
        (0,_edit_editItem__WEBPACK_IMPORTED_MODULE_1__.toggleComplete)(id);
    })

    const itemDate = document.createElement('p');
    itemDate.textContent = (0,_getTime__WEBPACK_IMPORTED_MODULE_2__["default"])(item.date);

    const buttonBox = document.createElement('div');
    buttonBox.setAttribute('id', 'button-box');

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'open-edit-button');
    editButton.setAttribute('data-id', item.id);
    editButton.addEventListener('click', function() {
        let id = editButton.getAttribute('data-id');
        (0,_edit_editItem__WEBPACK_IMPORTED_MODULE_1__.editItem)(id);
    })
    editButton.textContent = 'EDIT';

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-id', item.id);
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', function() {
        let id = deleteButton.getAttribute('data-id');
        (0,_delete_clearItem__WEBPACK_IMPORTED_MODULE_0__.clearItem)(id);
    });
    
    // itemBoxOuter.append(itemBox);
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
/* harmony import */ var _delete_clearComplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delete/clearComplete */ "./src/delete/clearComplete.js");





// Display and submit 'Add Item' Form.

const setupInteraction = () => {
    const addItemButton = document.querySelector('#modal-popup-button');
    const addItemForm = document.querySelector('#add-item-form');
    const closeAddItemFormButton = document.querySelector('#close-add-form');
    const submitAddItemFormButton = document.querySelector('#submit-item-button');
    const msgInputField = document.querySelector('#message');

    const editItemForm = document.querySelector('#edit-item-form');
    const closeEditItemFormButton = document.querySelector('#close-edit-form');
    const submitEditItemFormbutton = document.querySelector('#edit-item-button');
  
    const clearAllButton = document.querySelector('#clear-all-button');
    const clearCompleteButton = document.querySelector('#clear-complete-button');


    // display 'add item' form:
    // generic open/close modal function? Takes target and open/close params?
    const displayAddItem = () => {
        addItemForm.style.display = 'block';
        editItemForm.style.display = 'none';
        msgInputField.focus();
    }

    addItemButton.addEventListener('click', displayAddItem);

    
    // submit 'add item' form:
    const submitAddItemForm = () => {
        // add coercion and error handling here
        let messageInput = document.querySelector('#message').value;;
        let dateInput = document.querySelector('#date').value;
        _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].addObject(messageInput, dateInput);
        addItemForm.style.display = 'none';
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
    // presents complications for adding validation.
    submitEditItemFormbutton.addEventListener('click', function() {
        ;(0,_edit_editItem__WEBPACK_IMPORTED_MODULE_1__.confirmEditItem)();
        editItemForm.style.display = 'none';
    });


    // clear all button calls item collection's 'deleteAllObjects' method:
    clearAllButton.addEventListener('click', function() {
        _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].deleteAllObjects();
    });

    clearCompleteButton.addEventListener('click', function() {
        (0,_delete_clearComplete__WEBPACK_IMPORTED_MODULE_2__.clearComplete)();
    });

    closeAddItemFormButton.addEventListener('click', function() {
        addItemForm.style.display = 'none';
    })

    closeEditItemFormButton.addEventListener('click', function() {
        editItemForm.style.display = 'none';
    })

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
/* harmony import */ var _render_renderCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render/renderCollection */ "./src/render/renderCollection.js");



// simply calls a re-render at this stage.
const observeCollection = {
    update: function(selection) {
        console.log('calling a re-render...');

        (0,_render_renderCollection__WEBPACK_IMPORTED_MODULE_0__["default"])();
        //setupInteraction();
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observeCollection);

/***/ }),

/***/ "./src/assets/trash.svg":
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFV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Q3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRUFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi90aW1lem9uZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3VwZGF0ZUxvY2FsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3V0Yy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NyZWF0ZS9hZGRJdGVtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9kZWxldGUvY2xlYXJDb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZGVsZXRlL2NsZWFySXRlbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZWRpdC9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZWRpdC9zZWxlY3RJdGVtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9lZGl0L3ZhbGlkYXRlRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21hbmFnZUNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3JlYWQvc29ydEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcmVuZGVyL2RlbGV0aW9uT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcmVuZGVyL2dldFRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3JlbmRlci9oYW5kbGVJdGVtRWZmZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcmVuZGVyL3JlbmRlckNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3JlbmRlci91c2VySW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3Rlc3RPYnNlcnZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvdHJhc2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5Aa2V5ZnJhbWVzIHNsaWRlaW4ge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAzMDAlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuYnV0dG9uOm5vdCguc3VibWl0LWZvcm0tYnV0dG9uKTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMS4xcmVtO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDUpO1xcbn1cXG5idXR0b246bm90KC5zdWJtaXQtZm9ybS1idXR0b24pOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY3ZjM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LnRyYW5zcGFyZW50dGV4dHVyZXMuY29tL3BhdHRlcm5zL2JlaWdlLXBhcGVyLnBuZ1xcXCIpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubWFpbi1idXR0b246aG92ZXIge1xcbiAgc2NhbGU6IDEuMDU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgYW5pbWF0aW9uOiBzbGlkZWluIDAuNXM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICB0b3A6IDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHotaW5kZXg6IDkwMDA7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGhlaWdodDogY2FsYygxNXZoICsgMXZ3KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZmEzYjE7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LnRyYW5zcGFyZW50dGV4dHVyZXMuY29tL3BhdHRlcm5zL2JlaWdlLXBhcGVyLnBuZ1xcXCIpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jaGVhZGVyIGgxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkNhbGxpZ3JhZmZpdHRpXFxcIiwgY3Vyc2l2ZTtcXG4gIGNvbG9yOiAjZjlmN2YzO1xcbiAgZm9udC1zaXplOiBjYWxjKDEuNnJlbSArIDN2dyk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDByZW0gMXJlbSAxLjVyZW07XFxufVxcbiNoZWFkZXIgaW1nIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gIGZpbHRlcjogaW52ZXJ0KDAuOTMpO1xcbn1cXG5cXG4jYWRkLWl0ZW0tZm9ybSwgI2VkaXQtaXRlbS1mb3JtIHtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMnM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IHNvbGlkICMwZmEzYjEgM3B4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyMCU7XFxuICByaWdodDogNSU7XFxuICB6LWluZGV4OiA5OTk5OTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmVkZjM7XFxuICB3aWR0aDogOTB2dztcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcbiNhZGQtaXRlbS1mb3JtIC5jbG9zZS1mb3JtLCAjZWRpdC1pdGVtLWZvcm0gLmNsb3NlLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHNsYXRlZ3JheTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2FkZC1pdGVtLWZvcm0gLmNsb3NlLWZvcm06aG92ZXIsICNlZGl0LWl0ZW0tZm9ybSAuY2xvc2UtZm9ybTpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbiNhZGQtaXRlbS1mb3JtIHVsLCAjZWRpdC1pdGVtLWZvcm0gdWwge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbiNhZGQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdzpmaXJzdC1jaGlsZCwgI2VkaXQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdzpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJlZGYzO1xcbiAgYm9yZGVyLWJvdHRvbTogIzBmYTNiMSBzb2xpZCAycHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cXG4jYWRkLWl0ZW0tZm9ybSB1bCAuZm9ybS1yb3c6Zmlyc3QtY2hpbGQgcCwgI2VkaXQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdzpmaXJzdC1jaGlsZCBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpO1xcbiAgbWFyZ2luOiAxcmVtIDByZW0gMXJlbSAwcmVtO1xcbn1cXG4jYWRkLWl0ZW0tZm9ybSB1bCAuZm9ybS1yb3c6bGFzdC1jaGlsZCwgI2VkaXQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdzpsYXN0LWNoaWxkIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuI2FkZC1pdGVtLWZvcm0gdWwgLmZvcm0tcm93LCAjZWRpdC1pdGVtLWZvcm0gdWwgLmZvcm0tcm93IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbiNhZGQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdyBsYWJlbCwgI2VkaXQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdyBsYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDAgMjBweCAwIDEwcHg7XFxufVxcbiNhZGQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdyBpbnB1dCwgI2VkaXQtaXRlbS1mb3JtIHVsIC5mb3JtLXJvdyBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jYWRkLWl0ZW0tZm9ybSB1bCAuZm9ybS1yb3cgYnV0dG9uLCAjZWRpdC1pdGVtLWZvcm0gdWwgLmZvcm0tcm93IGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmYTNiMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtIDByZW0gMnJlbSAwcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudC1hcmVhIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYygxOHZoICsgMXZ3KTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW46IDAuNXJlbSAxLjVyZW0gMC41cmVtIDAuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjb250ZW50IGNvbnRyb2xzXFxcIjtcXG59XFxuI2NvbnRlbnQtYXJlYSAjbGlzdC1jb250cm9scyB7XFxuICBncmlkLWFyZWE6IGNvbnRyb2xzO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI2NvbnRlbnQtYXJlYSAjbGlzdC1jb250cm9scyAjc29ydC1idXR0b24ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmVkZjM7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IGNhbGMoMC42cmVtICsgMXZ3KTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICB3aWR0aDogMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2NvbnRlbnQtYXJlYSAjbGlzdC1jb250cm9scyAjc29ydC1idXR0b246OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJEYXRlIEFzY2VuZGluZ1xcXFxh4oaRXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LXNpemU6IGNhbGMoMC40cmVtICsgMXZ3KTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcbiNjb250ZW50LWFyZWEgI2xpc3QtY29udHJvbHMgI3NvcnQtYnV0dG9uLmRlc2NlbmRpbmc6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJEYXRlIERlc2NlbmRpbmdcXFxcYeKGk1xcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1zaXplOiBjYWxjKDAuNHJlbSArIDF2dyk7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG4jY29udGVudC1hcmVhICNmb290ZXIge1xcbiAgei1pbmRleDogMTAwO1xcbiAgaGVpZ2h0OiAzMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwJTtcXG59XFxuI2NvbnRlbnQtYXJlYSAjZm9vdGVyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHdoaXRlIDEwMCUpO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbiNtb2RhbC1wb3B1cC1idXR0b24ge1xcbiAgY29sb3I6ICNlZGRlYTQ7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmYTNiMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgZm9udC1zaXplOiBjYWxjKDEwdmggKyAyMHB4KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogNSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBsZWZ0OiA3NSU7XFxuICB3aWR0aDogY2FsYygzMHZ3IC0gNDBweCk7XFxuICBoZWlnaHQ6IGNhbGMoMzB2dyAtIDQwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2RlbGV0ZS1idXR0b25zIHtcXG4gIHotaW5kZXg6IDkwMDA7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcbiNkZWxldGUtYnV0dG9ucyAjZGVsZXRlLW9wdGlvbnMtYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2EwNzI7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiBjYWxjKDMwdncgLSA0MHB4KTtcXG4gIGhlaWdodDogY2FsYygzMHZ3IC0gNDBweCk7XFxuICBib3R0b206IDUlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgbGVmdDogMjUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2RlbGV0ZS1idXR0b25zICNkZWxldGUtb3B0aW9ucy1idXR0b24gI2RlbGV0ZS1vcHRpb25zLWljb24ge1xcbiAgaGVpZ2h0OiBjYWxjKDE4dncgLSAyMHB4KTtcXG59XFxuI2RlbGV0ZS1idXR0b25zICNkZWxldGUtb3B0aW9ucy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm90dG9tOiA1JTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGxlZnQ6IDI1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbiNkZWxldGUtYnV0dG9ucyAjZGVsZXRlLW9wdGlvbnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdhMDcyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDQwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jZGVsZXRlLWJ1dHRvbnMgI2RlbGV0ZS1vcHRpb25zLWNvbnRhaW5lciBidXR0b24gOjphZnRlciB7XFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4jaXRlbS1saXN0IHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB6LWluZGV4OiAwO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxufVxcbiNpdGVtLWxpc3QgI2l0ZW0tYm94IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZWRmMztcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGdhcDogMC41cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDJmciAxZnIvMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJtYWluIGJ1dHRvbnNcXFwiIFxcXCIuIGRhdGVcXFwiO1xcbn1cXG4jaXRlbS1saXN0ICNpdGVtLWJveDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJlOGYzO1xcbn1cXG4jaXRlbS1saXN0ICNpdGVtLWJveCBwOmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogXFxcIkNhbGxpZ3JhZmZpdHRpXFxcIiwgY3Vyc2l2ZTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgZm9udC1zaXplOiBjYWxjKDF2dyArIDEwcHgpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbiNpdGVtLWxpc3QgI2l0ZW0tYm94IHA6Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jaXRlbS1saXN0ICNpdGVtLWJveCBwOm50aC1jaGlsZCgyKSB7XFxuICBncmlkLWFyZWE6IGRhdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4jaXRlbS1saXN0ICNpdGVtLWJveCAjYnV0dG9uLWJveCB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbnM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuI2l0ZW0tbGlzdCAjaXRlbS1ib3ggI2J1dHRvbi1ib3ggYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbiNpdGVtLWxpc3QgZGl2Om50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGQ0ZDk7XFxufVxcblxcbiouZGVsZXRlZCB7XFxuICBhbmltYXRpb246IGZhZGVPdXQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcXG4gICNkZWxldGUtYnV0dG9ucyAjZGVsZXRlLW9wdGlvbnMtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA5MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGhlaWdodDogMTMuOHZoO1xcbiAgICB3aWR0aDogMTMuOHZoO1xcbiAgfVxcbiAgI2RlbGV0ZS1idXR0b25zICNkZWxldGUtb3B0aW9ucy1idXR0b24gI2RlbGV0ZS1vcHRpb25zLWljb24ge1xcbiAgICBoZWlnaHQ6IDh2aDtcXG4gIH1cXG4gICNkZWxldGUtYnV0dG9ucyAjZGVsZXRlLW9wdGlvbnMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA5MCU7XFxuICAgIGJvdHRvbTogMiU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAjZGVsZXRlLWJ1dHRvbnMgI2RlbGV0ZS1vcHRpb25zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICAjYWRkLWl0ZW0tZm9ybSwgI2VkaXQtaXRlbS1mb3JtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAjMGZhM2IxIDNweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDEyJTtcXG4gICAgcmlnaHQ6IDElO1xcbiAgICB6LWluZGV4OiA5OTk5OTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiZWRmMztcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgfVxcbiAgI2FkZC1pdGVtLWZvcm0gdWwsICNlZGl0LWl0ZW0tZm9ybSB1bCB7XFxuICAgIGhlaWdodDogNjB2aDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICB9XFxuICAjYWRkLWl0ZW0tZm9ybSAuc3VibWl0LWZvcm0tYnV0dG9uOmhvdmVyLCAjZWRpdC1pdGVtLWZvcm0gLnN1Ym1pdC1mb3JtLWJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA1KTtcXG4gIH1cXG4gICNhZGQtaXRlbS1mb3JtIC5zdWJtaXQtZm9ybS1idXR0b246YWN0aXZlLCAjZWRpdC1pdGVtLWZvcm0gLnN1Ym1pdC1mb3JtLWJ1dHRvbjphY3RpdmUge1xcbiAgICBzY2FsZTogMS4wNTtcXG4gIH1cXG4gICNtb2RhbC1wb3B1cC1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMjglO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIGxlZnQ6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxNXZoO1xcbiAgICBoZWlnaHQ6IDEzLjh2aDtcXG4gICAgd2lkdGg6IDEzLjh2aDtcXG4gIH1cXG4gICNtb2RhbC1wb3B1cC1idXR0b24gcCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuICAjZm9vdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICNidXR0b24tYm94IGJ1dHRvbiB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG4gIH1cXG4gICNpdGVtLWxpc3QgZGl2OmhvdmVyICNidXR0b24tYm94IGJ1dHRvbiB7XFxuICAgIG9wYWNpdHk6IDcwJTtcXG4gIH1cXG4gICNpdGVtLWxpc3QgZGl2OmhvdmVyICNidXR0b24tYm94IGJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcbi8qIExhcHRvcHMgYW5kIGxhcmdlciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgLyogWW91ciBDU1MgcnVsZXMgaGVyZSAqL1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFpQmhCO0VBQ0k7SUFFRSxXQUFBO0VBaEJKO0VBa0JFO0lBRUUsV0FBQTtFQWpCSjtBQUNGO0FBb0JBO0VBQ0U7SUFDRSxVQUFBO0VBbEJGO0VBb0JBO0lBQ0UsVUFBQTtFQWxCRjtBQUNGO0FBcUJBO0VBQ0U7SUFDRSxVQUFBO0VBbkJGO0VBcUJBO0lBQ0UsVUFBQTtFQW5CRjtBQUNGO0FBdUJFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQXJCSjtBQXVCRTtFQUNFLHNCQUFBO0FBckJKOztBQXlCQTtFQUNFLHdCQUFBO0FBdEJGOztBQXlCQTtFQUNJLHdDQUFBO0VBQ0EseUJBQUE7QUF0Qko7O0FBMEJBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQXZCRjs7QUEwQkE7RUFDRSxzQkFBQTtFQUNBLHlDQUFBO0FBdkJGOztBQTBCQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBNUVpQjtFQTZFakIscUZBQUE7RUFDQSxZQUFBO0FBdkJGOztBQTBCQTtFQUNJLFdBQUE7QUF2Qko7O0FBMEJBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFwR2M7RUFxR2QscUZBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF2QkY7QUF3QkU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VB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Q0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXJDUjtBQXlDRTtFQUNFLHlCQUFBO0FBdkNKOztBQTJDQTtFQUNFLDRDQUFBO0FBeENGOztBQTJDQTtFQUVJO0lBQ0UsZUFBQTtJQUNBLFNBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtFQXpDSjtFQTBDSTtJQUNFLFdBQUE7RUF4Q047RUEyQ0U7SUFDSSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQXpDTjtFQTBDSTtJQUNFLGtCQUFBO0VBeENOO0VBOENBO0lBQ0UsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGNBQUE7SUFDQSx5QkEzY2M7SUE0Y2Qsa0JBQUE7SUFDQSxtQkFBQTtFQTVDRjtFQTZDRTtJQUNJLFlBQUE7SUFDQSxXQUFBO0VBM0NOO0VBK0NNO0lBQ0ksd0JBQUE7RUE3Q1Y7RUErQ007SUFDSSxXQUFBO0VBN0NWO0VBaURBO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUVBLGNBQUE7SUFDQSxhQUFBO0VBaERGO0VBa0RFO0lBQ0Usb0JBQUE7SUFDQSxrQkFBQTtFQWhESjtFQW9EQTtJQUNFLGFBQUE7RUFsREY7RUFxREE7SUFDRSxZQUFBO0VBbkRGO0VBc0RBO0lBQ0UsWUFBQTtFQXBERjtFQXFERTtJQUNJLGFBQUE7RUFuRE47QUFDRjtBQXVEQSx1QkFBQTtBQUNBO0VBQ0Usd0JBQUE7QUFyREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gTGlnaHQgTW9kZSBDb2xvcnNcXHJcXG4kcHJpbWFyeS1jb2xvcjogIzBmYTNiMTtcXHJcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjYmJlZGYzO1xcclxcbiR0ZXJ0aWFyeS1jb2xvcjogI2Y3YTA3MjtcXHJcXG4kdGV4dC1jb2xvcjogIzMzMzMzMztcXHJcXG4kYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjdmMztcXHJcXG5cXHJcXG4vLyBEYXJrIE1vZGUgQ29sb3JzXFxyXFxuJHRleHQtY29sb3ItZGFyazogI2Y4ZjlmYTtcXHJcXG4kYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjMjEyNTI5O1xcclxcblxcclxcbi8vIERlZmF1bHQgVmFyaWFibGVzXFxyXFxuJHByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiRzZWNvbmRhcnk6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuJHRleHQ6ICR0ZXh0LWNvbG9yO1xcclxcbiRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcjtcXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlaW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgLy8gICBwYWRkaW5nLXJpZ2h0OiAtMTAwJTtcXHJcXG4gICAgICB3aWR0aDogMzAwJTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgIC8vICAgcGFkZGluZy1yaWdodDogMCU7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5idXR0b246bm90KC5zdWJtaXQtZm9ybS1idXR0b24pIHtcXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxLjFyZW07XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA1KTtcXHJcXG4gIH1cXHJcXG4gICY6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7XFxyXFxuICAgIGNvbG9yOiBmYWRlLW91dCgkY29sb3I6ICMwMDAwMDAsICRhbW91bnQ6IDAuNSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LnRyYW5zcGFyZW50dGV4dHVyZXMuY29tL3BhdHRlcm5zL2JlaWdlLXBhcGVyLnBuZ1xcXCIpO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1idXR0b246aG92ZXIge1xcclxcbiAgICBzY2FsZTogMS4wNTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICBhbmltYXRpb246IHNsaWRlaW4gMC41cztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIHRvcDogMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgei1pbmRleDogOTAwMDtcXHJcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDE1dmggKyAxdncpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LnRyYW5zcGFyZW50dGV4dHVyZXMuY29tL3BhdHRlcm5zL2JlaWdlLXBhcGVyLnBuZ1xcXCIpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaDEge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDYWxsaWdyYWZmaXR0aVxcXCIsIGN1cnNpdmU7XFxyXFxuICAgIGNvbG9yOiAjZjlmN2YzO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMS42cmVtICsgM3Z3KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDByZW0gMXJlbSAxLjVyZW07XFxyXFxuICB9XFxyXFxuICBpbWcge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDAuOTMpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWl0ZW0tZm9ybSwgI2VkaXQtaXRlbS1mb3JtIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAkcHJpbWFyeSAzcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAyMCU7XFxyXFxuICAgIHJpZ2h0OiA1JTtcXHJcXG4gICAgei1pbmRleDogOTk5OTk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XFxyXFxuICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAuY2xvc2UtZm9ybSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICByaWdodDogMXJlbTtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBjb2xvcjogc2xhdGVncmF5O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIHVsIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAuZm9ybS1yb3c6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206ICRwcmltYXJ5IHNvbGlkIDJweDtcXHJcXG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpO1xcclxcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMHJlbSAxcmVtIDByZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvcm0tcm93Omxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5mb3JtLXJvdyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMjUlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICAgICAgbGFiZWwge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4IDAgMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNENkQ5REM7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW0gMHJlbSAycmVtIDByZW07XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRlbnQtYXJlYSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IGNhbGMoMTh2aCArIDF2dyk7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMS41cmVtIDAuNXJlbSAwLjVyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiY29udGVudCBjb250cm9sc1xcXCI7XFxyXFxuICAjbGlzdC1jb250cm9scyB7XFxyXFxuICAgIGdyaWQtYXJlYTogY29udHJvbHM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICNzb3J0LWJ1dHRvbiB7XFxyXFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeTtcXHJcXG4gICAgICBjb2xvcjogJHRleHQ7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNnJlbSArIDF2dyk7XFxyXFxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjhyZW07XFxyXFxuICAgICAgd2lkdGg6IDIwdnc7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NvcnQtYnV0dG9uOjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogXFxcIkRhdGUgQXNjZW5kaW5nXFxcXGHihpFcXFwiO1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIGNvbG9yOiBncmF5O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjRyZW0gKyAxdncpO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgI3NvcnQtYnV0dG9uLmRlc2NlbmRpbmc6OmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwiRGF0ZSBEZXNjZW5kaW5nXFxcXGHihpNcXFwiO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICBjb2xvcjogZ3JheTtcXHJcXG4gICAgICBmb250LXNpemU6IGNhbGMoMC40cmVtICsgMXZ3KTtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAjZm9vdGVyIHtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBoZWlnaHQ6IDMwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDAlO1xcclxcbiAgICAvL29wYWNpdHk6IDEwJTtcXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBib3R0b206IDA7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICByaWdodDogMDtcXHJcXG4gICAgICBoZWlnaHQ6IDUwdmg7IC8vIENoYW5nZSB0aGlzIHRvIGFkanVzdCB0aGUgaGVpZ2h0IG9mIHRoZSBmYWRlLW91dCBlZmZlY3QuXFxyXFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgICAgdG8gYm90dG9tLFxcclxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSxcXHJcXG4gICAgICAgIHdoaXRlIDEwMCVcXHJcXG4gICAgICApO1xcclxcbiAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNtb2RhbC1wb3B1cC1idXR0b24ge1xcclxcbiAgY29sb3I6ICNlZGRlYTQ7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygxMHZoICsgMjBweCk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDUlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgbGVmdDogNzUlO1xcclxcblxcclxcbiAgd2lkdGg6IGNhbGMoMzB2dyAtIDQwcHgpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDMwdncgLSA0MHB4KTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNkZWxldGUtYnV0dG9ucyB7XFxyXFxuICB6LWluZGV4OiA5MDAwO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgI2RlbGV0ZS1vcHRpb25zLWJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgLy9wYWRkaW5nOiAxLjZyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMzB2dyAtIDQwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMzB2dyAtIDQwcHgpO1xcclxcbiAgICBib3R0b206IDUlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIGxlZnQ6IDI1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICNkZWxldGUtb3B0aW9ucy1pY29uIHtcXHJcXG4gICAgICBoZWlnaHQ6IGNhbGMoMTh2dyAtIDIwcHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAjZGVsZXRlLW9wdGlvbnMtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJvdHRvbTogNSU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgbGVmdDogMjUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgd2lkdGg6IDQwdnc7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIDo6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogdXJsKFxcXCIuL2Fzc2V0cy90cmFzaC5zdmdcXFwiKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2l0ZW0tbGlzdCB7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxyXFxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgI2l0ZW0tYm94IHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMmZyIDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgXFxcIm1haW4gYnV0dG9uc1xcXCJcXHJcXG4gICAgICBcXFwiLiBkYXRlXFxcIjtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhZGp1c3QtaHVlKCRjb2xvcjogJHNlY29uZGFyeSwgJGRlZ3JlZXM6IDUpO1xcclxcbiAgICB9XFxyXFxuICAgIHA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJDYWxsaWdyYWZmaXR0aVxcXCIsIGN1cnNpdmU7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICAgICAgZm9udC1zaXplOiBjYWxjKDF2dyArIDEwcHgpO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBwOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgZ3JpZC1hcmVhOiBkYXRlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIH1cXHJcXG4gICAgI2J1dHRvbi1ib3gge1xcclxcbiAgICAgIGdyaWQtYXJlYTogYnV0dG9ucztcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiAzcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0O1xcclxcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yLWRhcms7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgcGFkZGluZzogMC44cmVtO1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgZGl2Om50aC1jaGlsZChvZGQpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E4ZDRkOTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuKi5kZWxldGVkIHtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZU91dCAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcclxcbiAgI2RlbGV0ZS1idXR0b25zIHtcXHJcXG4gICAgI2RlbGV0ZS1vcHRpb25zLWJ1dHRvbiB7XFxyXFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgIGxlZnQ6IDkwJTtcXHJcXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgaGVpZ2h0OiAxMy44dmg7XFxyXFxuICAgICAgd2lkdGg6IDEzLjh2aDtcXHJcXG4gICAgICAjZGVsZXRlLW9wdGlvbnMtaWNvbiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDh2aDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgI2RlbGV0ZS1vcHRpb25zLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICBsZWZ0OiA5MCU7XFxyXFxuICAgICAgICBib3R0b206IDIlO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBidXR0b24ge1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgOjphZnRlciB7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAjYWRkLWl0ZW0tZm9ybSwgI2VkaXQtaXRlbS1mb3JtIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAkcHJpbWFyeSAzcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAxMiU7XFxyXFxuICAgIHJpZ2h0OiAxJTtcXHJcXG4gICAgei1pbmRleDogOTk5OTk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgdWwge1xcclxcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgICAgICAgd2lkdGg6IDMwdnc7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gICAgLnN1Ym1pdC1mb3JtLWJ1dHRvbiB7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgc2NhbGU6IDEuMDU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICNtb2RhbC1wb3B1cC1idXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMjglO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIGxlZnQ6IDkwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXZoO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IDEzLjh2aDtcXHJcXG4gICAgd2lkdGg6IDEzLjh2aDtcXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI2J1dHRvbi1ib3ggYnV0dG9uIHtcXHJcXG4gICAgb3BhY2l0eTogNTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2l0ZW0tbGlzdCBkaXY6aG92ZXIgI2J1dHRvbi1ib3ggYnV0dG9uIHtcXHJcXG4gICAgb3BhY2l0eTogNzAlO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTGFwdG9wcyBhbmQgbGFyZ2VyICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAvKiBZb3VyIENTUyBydWxlcyBoZXJlICovXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8vIHN0eWxpbmcgcGVydGFpbmluZyB0byBsaXN0IFVJIGVmZmVjdHM6XFxyXFxuXFxyXFxuXFxyXFxuLy8gI2l0ZW0tYm94LW91dGVye1xcclxcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuLy8gICAgIGxpc3Qtc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4vLyAgICAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuLy8gICAgIHdpZHRoOiAzMDBweDtcXHJcXG4vLyAgICAgaGVpZ2h0OiAwO1xcclxcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4vLyB9XFxyXFxuXFxyXFxuLy8gI2l0ZW0tYm94LW91dGVyLnNob3c6bm90KDpmaXJzdC1jaGlsZCl7XFxyXFxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcXHJcXG4vLyB9XFxyXFxuXFxyXFxuLy8gI2l0ZW0tYm94LW91dGVyICNpdGVtLWJveCB7XFxyXFxuLy8gICAgIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4vLyAgICAgd2lkdGg6IDEwMCU7XFxyXFxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbi8vICAgICBvcGFjaXR5OiAwO1xcclxcbi8vICAgICB0b3A6IDA7XFxyXFxuLy8gICAgIGxlZnQ6IDA7XFxyXFxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpO1xcclxcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLW91dDtcXHJcXG4vLyB9XFxyXFxuXFxyXFxuLy8gI2l0ZW0tYm94LW91dGVyICNpdGVtLWJveC5zaG93e1xcclxcbi8vICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxyXFxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSAhaW1wb3J0YW50O1xcclxcbi8vIH1cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixmPVwibW9udGhcIixoPVwicXVhcnRlclwiLGM9XCJ5ZWFyXCIsZD1cImRhdGVcIixsPVwiSW52YWxpZCBEYXRlXCIsJD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKSxvcmRpbmFsOmZ1bmN0aW9uKHQpe3ZhciBlPVtcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdLG49dCUxMDA7cmV0dXJuXCJbXCIrdCsoZVsobi0yMCklMTBdfHxlW25dfHxlWzBdKStcIl1cIn19LG09ZnVuY3Rpb24odCxlLG4pe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PWU/dDpcIlwiK0FycmF5KGUrMS1yLmxlbmd0aCkuam9pbihuKSt0fSx2PXtzOm0sejpmdW5jdGlvbih0KXt2YXIgZT0tdC51dGNPZmZzZXQoKSxuPU1hdGguYWJzKGUpLHI9TWF0aC5mbG9vcihuLzYwKSxpPW4lNjA7cmV0dXJuKGU8PTA/XCIrXCI6XCItXCIpK20ociwyLFwiMFwiKStcIjpcIittKGksMixcIjBcIil9LG06ZnVuY3Rpb24gdChlLG4pe2lmKGUuZGF0ZSgpPG4uZGF0ZSgpKXJldHVybi10KG4sZSk7dmFyIHI9MTIqKG4ueWVhcigpLWUueWVhcigpKSsobi5tb250aCgpLWUubW9udGgoKSksaT1lLmNsb25lKCkuYWRkKHIsZikscz1uLWk8MCx1PWUuY2xvbmUoKS5hZGQocisocz8tMToxKSxmKTtyZXR1cm4rKC0ocisobi1pKS8ocz9pLXU6dS1pKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24odCl7cmV0dXJue006Zix5OmMsdzpvLGQ6YSxEOmQsaDp1LG06cyxzOmksbXM6cixROmh9W3RdfHxTdHJpbmcodHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSxnPVwiZW5cIixEPXt9O0RbZ109TTt2YXIgcD1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIF99LFM9ZnVuY3Rpb24gdChlLG4scil7dmFyIGk7aWYoIWUpcmV0dXJuIGc7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBzPWUudG9Mb3dlckNhc2UoKTtEW3NdJiYoaT1zKSxuJiYoRFtzXT1uLGk9cyk7dmFyIHU9ZS5zcGxpdChcIi1cIik7aWYoIWkmJnUubGVuZ3RoPjEpcmV0dXJuIHQodVswXSl9ZWxzZXt2YXIgYT1lLm5hbWU7RFthXT1lLGk9YX1yZXR1cm4hciYmaSYmKGc9aSksaXx8IXImJmd9LHc9ZnVuY3Rpb24odCxlKXtpZihwKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgXyhuKX0sTz12O08ubD1TLE8uaT1wLE8udz1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIE0odCl7dGhpcy4kTD1TKHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCl9dmFyIG09TS5wcm90b3R5cGU7cmV0dXJuIG0ucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihPLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2goJCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy4keD10Lnh8fHt9LHRoaXMuaW5pdCgpfSxtLmluaXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRNb250aCgpLHRoaXMuJEQ9dC5nZXREYXRlKCksdGhpcy4kVz10LmdldERheSgpLHRoaXMuJEg9dC5nZXRIb3VycygpLHRoaXMuJG09dC5nZXRNaW51dGVzKCksdGhpcy4kcz10LmdldFNlY29uZHMoKSx0aGlzLiRtcz10LmdldE1pbGxpc2Vjb25kcygpfSxtLiR1dGlscz1mdW5jdGlvbigpe3JldHVybiBPfSxtLmlzVmFsaWQ9ZnVuY3Rpb24oKXtyZXR1cm4hKHRoaXMuJGQudG9TdHJpbmcoKT09PWwpfSxtLmlzU2FtZT1mdW5jdGlvbih0LGUpe3ZhciBuPXcodCk7cmV0dXJuIHRoaXMuc3RhcnRPZihlKTw9biYmbjw9dGhpcy5lbmRPZihlKX0sbS5pc0FmdGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHcodCk8dGhpcy5zdGFydE9mKGUpfSxtLmlzQmVmb3JlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZW5kT2YoZSk8dyh0KX0sbS4kZz1mdW5jdGlvbih0LGUsbil7cmV0dXJuIE8udSh0KT90aGlzW2VdOnRoaXMuc2V0KG4sdCl9LG0udW5peD1mdW5jdGlvbigpe3JldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpLzFlMyl9LG0udmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLmdldFRpbWUoKX0sbS5zdGFydE9mPWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcyxyPSEhTy51KGUpfHxlLGg9Ty5wKHQpLGw9ZnVuY3Rpb24odCxlKXt2YXIgaT1PLncobi4kdT9EYXRlLlVUQyhuLiR5LGUsdCk6bmV3IERhdGUobi4keSxlLHQpLG4pO3JldHVybiByP2k6aS5lbmRPZihhKX0sJD1mdW5jdGlvbih0LGUpe3JldHVybiBPLncobi50b0RhdGUoKVt0XS5hcHBseShuLnRvRGF0ZShcInNcIiksKHI/WzAsMCwwLDBdOlsyMyw1OSw1OSw5OTldKS5zbGljZShlKSksbil9LHk9dGhpcy4kVyxNPXRoaXMuJE0sbT10aGlzLiRELHY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpO3N3aXRjaChoKXtjYXNlIGM6cmV0dXJuIHI/bCgxLDApOmwoMzEsMTEpO2Nhc2UgZjpyZXR1cm4gcj9sKDEsTSk6bCgwLE0rMSk7Y2FzZSBvOnZhciBnPXRoaXMuJGxvY2FsZSgpLndlZWtTdGFydHx8MCxEPSh5PGc/eSs3OnkpLWc7cmV0dXJuIGwocj9tLUQ6bSsoNi1EKSxNKTtjYXNlIGE6Y2FzZSBkOnJldHVybiAkKHYrXCJIb3Vyc1wiLDApO2Nhc2UgdTpyZXR1cm4gJCh2K1wiTWludXRlc1wiLDEpO2Nhc2UgczpyZXR1cm4gJCh2K1wiU2Vjb25kc1wiLDIpO2Nhc2UgaTpyZXR1cm4gJCh2K1wiTWlsbGlzZWNvbmRzXCIsMyk7ZGVmYXVsdDpyZXR1cm4gdGhpcy5jbG9uZSgpfX0sbS5lbmRPZj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zdGFydE9mKHQsITEpfSxtLiRzZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbixvPU8ucCh0KSxoPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKSxsPShuPXt9LG5bYV09aCtcIkRhdGVcIixuW2RdPWgrXCJEYXRlXCIsbltmXT1oK1wiTW9udGhcIixuW2NdPWgrXCJGdWxsWWVhclwiLG5bdV09aCtcIkhvdXJzXCIsbltzXT1oK1wiTWludXRlc1wiLG5baV09aCtcIlNlY29uZHNcIixuW3JdPWgrXCJNaWxsaXNlY29uZHNcIixuKVtvXSwkPW89PT1hP3RoaXMuJEQrKGUtdGhpcy4kVyk6ZTtpZihvPT09Znx8bz09PWMpe3ZhciB5PXRoaXMuY2xvbmUoKS5zZXQoZCwxKTt5LiRkW2xdKCQpLHkuaW5pdCgpLHRoaXMuJGQ9eS5zZXQoZCxNYXRoLm1pbih0aGlzLiRELHkuZGF5c0luTW9udGgoKSkpLiRkfWVsc2UgbCYmdGhpcy4kZFtsXSgkKTtyZXR1cm4gdGhpcy5pbml0KCksdGhpc30sbS5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5jbG9uZSgpLiRzZXQodCxlKX0sbS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXNbTy5wKHQpXSgpfSxtLmFkZD1mdW5jdGlvbihyLGgpe3ZhciBkLGw9dGhpcztyPU51bWJlcihyKTt2YXIgJD1PLnAoaCkseT1mdW5jdGlvbih0KXt2YXIgZT13KGwpO3JldHVybiBPLncoZS5kYXRlKGUuZGF0ZSgpK01hdGgucm91bmQodCpyKSksbCl9O2lmKCQ9PT1mKXJldHVybiB0aGlzLnNldChmLHRoaXMuJE0rcik7aWYoJD09PWMpcmV0dXJuIHRoaXMuc2V0KGMsdGhpcy4keStyKTtpZigkPT09YSlyZXR1cm4geSgxKTtpZigkPT09bylyZXR1cm4geSg3KTt2YXIgTT0oZD17fSxkW3NdPWUsZFt1XT1uLGRbaV09dCxkKVskXXx8MSxtPXRoaXMuJGQuZ2V0VGltZSgpK3IqTTtyZXR1cm4gTy53KG0sdGhpcyl9LG0uc3VidHJhY3Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGQoLTEqdCxlKX0sbS5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPXRoaXMuJGxvY2FsZSgpO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm4gbi5pbnZhbGlkRGF0ZXx8bDt2YXIgcj10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIsaT1PLnoodGhpcykscz10aGlzLiRILHU9dGhpcy4kbSxhPXRoaXMuJE0sbz1uLndlZWtkYXlzLGY9bi5tb250aHMsaD1mdW5jdGlvbih0LG4saSxzKXtyZXR1cm4gdCYmKHRbbl18fHQoZSxyKSl8fGlbbl0uc2xpY2UoMCxzKX0sYz1mdW5jdGlvbih0KXtyZXR1cm4gTy5zKHMlMTJ8fDEyLHQsXCIwXCIpfSxkPW4ubWVyaWRpZW18fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9LCQ9e1lZOlN0cmluZyh0aGlzLiR5KS5zbGljZSgtMiksWVlZWTp0aGlzLiR5LE06YSsxLE1NOk8ucyhhKzEsMixcIjBcIiksTU1NOmgobi5tb250aHNTaG9ydCxhLGYsMyksTU1NTTpoKGYsYSksRDp0aGlzLiRELEREOk8ucyh0aGlzLiRELDIsXCIwXCIpLGQ6U3RyaW5nKHRoaXMuJFcpLGRkOmgobi53ZWVrZGF5c01pbix0aGlzLiRXLG8sMiksZGRkOmgobi53ZWVrZGF5c1Nob3J0LHRoaXMuJFcsbywzKSxkZGRkOm9bdGhpcy4kV10sSDpTdHJpbmcocyksSEg6Ty5zKHMsMixcIjBcIiksaDpjKDEpLGhoOmMoMiksYTpkKHMsdSwhMCksQTpkKHMsdSwhMSksbTpTdHJpbmcodSksbW06Ty5zKHUsMixcIjBcIiksczpTdHJpbmcodGhpcy4kcyksc3M6Ty5zKHRoaXMuJHMsMixcIjBcIiksU1NTOk8ucyh0aGlzLiRtcywzLFwiMFwiKSxaOml9O3JldHVybiByLnJlcGxhY2UoeSwoZnVuY3Rpb24odCxlKXtyZXR1cm4gZXx8JFt0XXx8aS5yZXBsYWNlKFwiOlwiLFwiXCIpfSkpfSxtLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxtLmRpZmY9ZnVuY3Rpb24ocixkLGwpe3ZhciAkLHk9Ty5wKGQpLE09dyhyKSxtPShNLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpKmUsdj10aGlzLU0sZz1PLm0odGhpcyxNKTtyZXR1cm4gZz0oJD17fSwkW2NdPWcvMTIsJFtmXT1nLCRbaF09Zy8zLCRbb109KHYtbSkvNjA0OGU1LCRbYV09KHYtbSkvODY0ZTUsJFt1XT12L24sJFtzXT12L2UsJFtpXT12L3QsJClbeV18fHYsbD9nOk8uYShnKX0sbS5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKGYpLiREfSxtLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gRFt0aGlzLiRMXX0sbS5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj1TKHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LG0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gTy53KHRoaXMuJGQsdGhpcyl9LG0udG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sbS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LG0udG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxtLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sTX0oKSxUPV8ucHJvdG90eXBlO3JldHVybiB3LnByb3RvdHlwZT1ULFtbXCIkbXNcIixyXSxbXCIkc1wiLGldLFtcIiRtXCIsc10sW1wiJEhcIix1XSxbXCIkV1wiLGFdLFtcIiRNXCIsZl0sW1wiJHlcIixjXSxbXCIkRFwiLGRdXS5mb3JFYWNoKChmdW5jdGlvbih0KXtUW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSksdy5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxfLHcpLHQuJGk9ITApLHd9LHcubG9jYWxlPVMsdy5pc0RheWpzPXAsdy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiB3KDFlMyp0KX0sdy5lbj1EW2ddLHcuTHM9RCx3LnA9e30sd30pKTsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLmRheWpzX3BsdWdpbl9jYWxlbmRhcj10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKGUsdCxhKXt2YXIgbj1cImg6bW0gQVwiLGQ9e2xhc3REYXk6XCJbWWVzdGVyZGF5IGF0XSBcIituLHNhbWVEYXk6XCJbVG9kYXkgYXRdIFwiK24sbmV4dERheTpcIltUb21vcnJvdyBhdF0gXCIrbixuZXh0V2VlazpcImRkZGQgW2F0XSBcIituLGxhc3RXZWVrOlwiW0xhc3RdIGRkZGQgW2F0XSBcIituLHNhbWVFbHNlOlwiTU0vREQvWVlZWVwifTt0LnByb3RvdHlwZS5jYWxlbmRhcj1mdW5jdGlvbihlLHQpe3ZhciBuPXR8fHRoaXMuJGxvY2FsZSgpLmNhbGVuZGFyfHxkLG89YShlfHx2b2lkIDApLnN0YXJ0T2YoXCJkXCIpLHM9dGhpcy5kaWZmKG8sXCJkXCIsITApLGk9XCJzYW1lRWxzZVwiLGY9czwtNj9pOnM8LTE/XCJsYXN0V2Vla1wiOnM8MD9cImxhc3REYXlcIjpzPDE/XCJzYW1lRGF5XCI6czwyP1wibmV4dERheVwiOnM8Nz9cIm5leHRXZWVrXCI6aSxsPW5bZl18fGRbZl07cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgbD9sLmNhbGwodGhpcyxhKCkpOnRoaXMuZm9ybWF0KGwpfX19KSk7IiwiIWZ1bmN0aW9uKHIsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczpyfHxzZWxmKS5kYXlqc19wbHVnaW5fcmVsYXRpdmVUaW1lPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24ocixlLHQpe3I9cnx8e307dmFyIG49ZS5wcm90b3R5cGUsbz17ZnV0dXJlOlwiaW4gJXNcIixwYXN0OlwiJXMgYWdvXCIsczpcImEgZmV3IHNlY29uZHNcIixtOlwiYSBtaW51dGVcIixtbTpcIiVkIG1pbnV0ZXNcIixoOlwiYW4gaG91clwiLGhoOlwiJWQgaG91cnNcIixkOlwiYSBkYXlcIixkZDpcIiVkIGRheXNcIixNOlwiYSBtb250aFwiLE1NOlwiJWQgbW9udGhzXCIseTpcImEgeWVhclwiLHl5OlwiJWQgeWVhcnNcIn07ZnVuY3Rpb24gaShyLGUsdCxvKXtyZXR1cm4gbi5mcm9tVG9CYXNlKHIsZSx0LG8pfXQuZW4ucmVsYXRpdmVUaW1lPW8sbi5mcm9tVG9CYXNlPWZ1bmN0aW9uKGUsbixpLGQsdSl7Zm9yKHZhciBmLGEscyxsPWkuJGxvY2FsZSgpLnJlbGF0aXZlVGltZXx8byxoPXIudGhyZXNob2xkc3x8W3tsOlwic1wiLHI6NDQsZDpcInNlY29uZFwifSx7bDpcIm1cIixyOjg5fSx7bDpcIm1tXCIscjo0NCxkOlwibWludXRlXCJ9LHtsOlwiaFwiLHI6ODl9LHtsOlwiaGhcIixyOjIxLGQ6XCJob3VyXCJ9LHtsOlwiZFwiLHI6MzV9LHtsOlwiZGRcIixyOjI1LGQ6XCJkYXlcIn0se2w6XCJNXCIscjo0NX0se2w6XCJNTVwiLHI6MTAsZDpcIm1vbnRoXCJ9LHtsOlwieVwiLHI6MTd9LHtsOlwieXlcIixkOlwieWVhclwifV0sbT1oLmxlbmd0aCxjPTA7YzxtO2MrPTEpe3ZhciB5PWhbY107eS5kJiYoZj1kP3QoZSkuZGlmZihpLHkuZCwhMCk6aS5kaWZmKGUseS5kLCEwKSk7dmFyIHA9KHIucm91bmRpbmd8fE1hdGgucm91bmQpKE1hdGguYWJzKGYpKTtpZihzPWY+MCxwPD15LnJ8fCF5LnIpe3A8PTEmJmM+MCYmKHk9aFtjLTFdKTt2YXIgdj1sW3kubF07dSYmKHA9dShcIlwiK3ApKSxhPVwic3RyaW5nXCI9PXR5cGVvZiB2P3YucmVwbGFjZShcIiVkXCIscCk6dihwLG4seS5sLHMpO2JyZWFrfX1pZihuKXJldHVybiBhO3ZhciBNPXM/bC5mdXR1cmU6bC5wYXN0O3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIE0/TShhKTpNLnJlcGxhY2UoXCIlc1wiLGEpfSxuLnRvPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIGkocixlLHRoaXMsITApfSxuLmZyb209ZnVuY3Rpb24ocixlKXtyZXR1cm4gaShyLGUsdGhpcyl9O3ZhciBkPWZ1bmN0aW9uKHIpe3JldHVybiByLiR1P3QudXRjKCk6dCgpfTtuLnRvTm93PWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLnRvKGQodGhpcykscil9LG4uZnJvbU5vdz1mdW5jdGlvbihyKXtyZXR1cm4gdGhpcy5mcm9tKGQodGhpcykscil9fX0pKTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzX3BsdWdpbl90aW1lem9uZT1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9e3llYXI6MCxtb250aDoxLGRheToyLGhvdXI6MyxtaW51dGU6NCxzZWNvbmQ6NX0sZT17fTtyZXR1cm4gZnVuY3Rpb24obixpLG8pe3ZhciByLGE9ZnVuY3Rpb24odCxuLGkpe3ZvaWQgMD09PWkmJihpPXt9KTt2YXIgbz1uZXcgRGF0ZSh0KSxyPWZ1bmN0aW9uKHQsbil7dm9pZCAwPT09biYmKG49e30pO3ZhciBpPW4udGltZVpvbmVOYW1lfHxcInNob3J0XCIsbz10K1wifFwiK2kscj1lW29dO3JldHVybiByfHwocj1uZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIse2hvdXIxMjohMSx0aW1lWm9uZTp0LHllYXI6XCJudW1lcmljXCIsbW9udGg6XCIyLWRpZ2l0XCIsZGF5OlwiMi1kaWdpdFwiLGhvdXI6XCIyLWRpZ2l0XCIsbWludXRlOlwiMi1kaWdpdFwiLHNlY29uZDpcIjItZGlnaXRcIix0aW1lWm9uZU5hbWU6aX0pLGVbb109cikscn0obixpKTtyZXR1cm4gci5mb3JtYXRUb1BhcnRzKG8pfSx1PWZ1bmN0aW9uKGUsbil7Zm9yKHZhciBpPWEoZSxuKSxyPVtdLHU9MDt1PGkubGVuZ3RoO3UrPTEpe3ZhciBmPWlbdV0scz1mLnR5cGUsbT1mLnZhbHVlLGM9dFtzXTtjPj0wJiYocltjXT1wYXJzZUludChtLDEwKSl9dmFyIGQ9clszXSxsPTI0PT09ZD8wOmQsdj1yWzBdK1wiLVwiK3JbMV0rXCItXCIrclsyXStcIiBcIitsK1wiOlwiK3JbNF0rXCI6XCIrcls1XStcIjowMDBcIixoPStlO3JldHVybihvLnV0Yyh2KS52YWx1ZU9mKCktKGgtPWglMWUzKSkvNmU0fSxmPWkucHJvdG90eXBlO2YudHo9ZnVuY3Rpb24odCxlKXt2b2lkIDA9PT10JiYodD1yKTt2YXIgbj10aGlzLnV0Y09mZnNldCgpLGk9dGhpcy50b0RhdGUoKSxhPWkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLHt0aW1lWm9uZTp0fSksdT1NYXRoLnJvdW5kKChpLW5ldyBEYXRlKGEpKS8xZTMvNjApLGY9byhhKS4kc2V0KFwibWlsbGlzZWNvbmRcIix0aGlzLiRtcykudXRjT2Zmc2V0KDE1Ki1NYXRoLnJvdW5kKGkuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSktdSwhMCk7aWYoZSl7dmFyIHM9Zi51dGNPZmZzZXQoKTtmPWYuYWRkKG4tcyxcIm1pbnV0ZVwiKX1yZXR1cm4gZi4keC4kdGltZXpvbmU9dCxmfSxmLm9mZnNldE5hbWU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy4keC4kdGltZXpvbmV8fG8udHouZ3Vlc3MoKSxuPWEodGhpcy52YWx1ZU9mKCksZSx7dGltZVpvbmVOYW1lOnR9KS5maW5kKChmdW5jdGlvbih0KXtyZXR1cm5cInRpbWV6b25lbmFtZVwiPT09dC50eXBlLnRvTG93ZXJDYXNlKCl9KSk7cmV0dXJuIG4mJm4udmFsdWV9O3ZhciBzPWYuc3RhcnRPZjtmLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXtpZighdGhpcy4keHx8IXRoaXMuJHguJHRpbWV6b25lKXJldHVybiBzLmNhbGwodGhpcyx0LGUpO3ZhciBuPW8odGhpcy5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzOlNTU1wiKSk7cmV0dXJuIHMuY2FsbChuLHQsZSkudHoodGhpcy4keC4kdGltZXpvbmUsITApfSxvLnR6PWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT1uJiZlLGE9bnx8ZXx8cixmPXUoK28oKSxhKTtpZihcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gbyh0KS50eihhKTt2YXIgcz1mdW5jdGlvbih0LGUsbil7dmFyIGk9dC02MCplKjFlMyxvPXUoaSxuKTtpZihlPT09bylyZXR1cm5baSxlXTt2YXIgcj11KGktPTYwKihvLWUpKjFlMyxuKTtyZXR1cm4gbz09PXI/W2ksb106W3QtNjAqTWF0aC5taW4obyxyKSoxZTMsTWF0aC5tYXgobyxyKV19KG8udXRjKHQsaSkudmFsdWVPZigpLGYsYSksbT1zWzBdLGM9c1sxXSxkPW8obSkudXRjT2Zmc2V0KGMpO3JldHVybiBkLiR4LiR0aW1lem9uZT1hLGR9LG8udHouZ3Vlc3M9ZnVuY3Rpb24oKXtyZXR1cm4gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lfSxvLnR6LnNldERlZmF1bHQ9ZnVuY3Rpb24odCl7cj10fX19KSk7IiwiIWZ1bmN0aW9uKGUsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5kYXlqc19wbHVnaW5fdXBkYXRlTG9jYWxlPW4oKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24oZSxuLHQpe3QudXBkYXRlTG9jYWxlPWZ1bmN0aW9uKGUsbil7dmFyIG89dC5Mc1tlXTtpZihvKXJldHVybihuP09iamVjdC5rZXlzKG4pOltdKS5mb3JFYWNoKChmdW5jdGlvbihlKXtvW2VdPW5bZV19KSksb319fSkpOyIsIiFmdW5jdGlvbih0LGkpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWkoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGkpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anNfcGx1Z2luX3V0Yz1pKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtaW51dGVcIixpPS9bKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9nLGU9LyhbKy1dfFxcZFxcZCkvZztyZXR1cm4gZnVuY3Rpb24ocyxmLG4pe3ZhciB1PWYucHJvdG90eXBlO24udXRjPWZ1bmN0aW9uKHQpe3ZhciBpPXtkYXRlOnQsdXRjOiEwLGFyZ3M6YXJndW1lbnRzfTtyZXR1cm4gbmV3IGYoaSl9LHUudXRjPWZ1bmN0aW9uKGkpe3ZhciBlPW4odGhpcy50b0RhdGUoKSx7bG9jYWxlOnRoaXMuJEwsdXRjOiEwfSk7cmV0dXJuIGk/ZS5hZGQodGhpcy51dGNPZmZzZXQoKSx0KTplfSx1LmxvY2FsPWZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcy50b0RhdGUoKSx7bG9jYWxlOnRoaXMuJEwsdXRjOiExfSl9O3ZhciBvPXUucGFyc2U7dS5wYXJzZT1mdW5jdGlvbih0KXt0LnV0YyYmKHRoaXMuJHU9ITApLHRoaXMuJHV0aWxzKCkudSh0LiRvZmZzZXQpfHwodGhpcy4kb2Zmc2V0PXQuJG9mZnNldCksby5jYWxsKHRoaXMsdCl9O3ZhciByPXUuaW5pdDt1LmluaXQ9ZnVuY3Rpb24oKXtpZih0aGlzLiR1KXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRVVENGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRVVENNb250aCgpLHRoaXMuJEQ9dC5nZXRVVENEYXRlKCksdGhpcy4kVz10LmdldFVUQ0RheSgpLHRoaXMuJEg9dC5nZXRVVENIb3VycygpLHRoaXMuJG09dC5nZXRVVENNaW51dGVzKCksdGhpcy4kcz10LmdldFVUQ1NlY29uZHMoKSx0aGlzLiRtcz10LmdldFVUQ01pbGxpc2Vjb25kcygpfWVsc2Ugci5jYWxsKHRoaXMpfTt2YXIgYT11LnV0Y09mZnNldDt1LnV0Y09mZnNldD1mdW5jdGlvbihzLGYpe3ZhciBuPXRoaXMuJHV0aWxzKCkudTtpZihuKHMpKXJldHVybiB0aGlzLiR1PzA6bih0aGlzLiRvZmZzZXQpP2EuY2FsbCh0aGlzKTp0aGlzLiRvZmZzZXQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHMmJihzPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PVwiXCIpO3ZhciBzPXQubWF0Y2goaSk7aWYoIXMpcmV0dXJuIG51bGw7dmFyIGY9KFwiXCIrc1swXSkubWF0Y2goZSl8fFtcIi1cIiwwLDBdLG49ZlswXSx1PTYwKitmWzFdKyArZlsyXTtyZXR1cm4gMD09PXU/MDpcIitcIj09PW4/dTotdX0ocyksbnVsbD09PXMpKXJldHVybiB0aGlzO3ZhciB1PU1hdGguYWJzKHMpPD0xNj82MCpzOnMsbz10aGlzO2lmKGYpcmV0dXJuIG8uJG9mZnNldD11LG8uJHU9MD09PXMsbztpZigwIT09cyl7dmFyIHI9dGhpcy4kdT90aGlzLnRvRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk6LTEqdGhpcy51dGNPZmZzZXQoKTsobz10aGlzLmxvY2FsKCkuYWRkKHUrcix0KSkuJG9mZnNldD11LG8uJHguJGxvY2FsT2Zmc2V0PXJ9ZWxzZSBvPXRoaXMudXRjKCk7cmV0dXJuIG99O3ZhciBoPXUuZm9ybWF0O3UuZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBpPXR8fCh0aGlzLiR1P1wiWVlZWS1NTS1ERFRISDptbTpzc1taXVwiOlwiXCIpO3JldHVybiBoLmNhbGwodGhpcyxpKX0sdS52YWx1ZU9mPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kdXRpbHMoKS51KHRoaXMuJG9mZnNldCk/MDp0aGlzLiRvZmZzZXQrKHRoaXMuJHguJGxvY2FsT2Zmc2V0fHx0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkpO3JldHVybiB0aGlzLiRkLnZhbHVlT2YoKS02ZTQqdH0sdS5pc1VUQz1mdW5jdGlvbigpe3JldHVybiEhdGhpcy4kdX0sdS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCl9LHUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b0RhdGUoKS50b1VUQ1N0cmluZygpfTt2YXIgbD11LnRvRGF0ZTt1LnRvRGF0ZT1mdW5jdGlvbih0KXtyZXR1cm5cInNcIj09PXQmJnRoaXMuJG9mZnNldD9uKHRoaXMuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzczpTU1NcIikpLnRvRGF0ZSgpOmwuY2FsbCh0aGlzKX07dmFyIGM9dS5kaWZmO3UuZGlmZj1mdW5jdGlvbih0LGksZSl7aWYodCYmdGhpcy4kdT09PXQuJHUpcmV0dXJuIGMuY2FsbCh0aGlzLHQsaSxlKTt2YXIgcz10aGlzLmxvY2FsKCksZj1uKHQpLmxvY2FsKCk7cmV0dXJuIGMuY2FsbChzLGYsaSxlKX19fSkpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxyXG4vLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBvYmplY3QgaW5zdGFuY2VzLiBcclxuLy8gJ2NvbXBsZXRlJyBhbHdheXMgZmFsc2Ugb24gb2JqZWN0IGNyZWF0aW9uLlxyXG4vLyBjb3VudGVyIHNpbXBseSByZWZsZWN0cyB0aGUgbnVtYmVyIG9mIHRpbWVzIGl0ZW1GYWN0b3J5IGlzIGNhbGxlZC4gQmV0dGVyIHdheXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgb2JqZWN0cz9cclxuXHJcbmxldCBjb3VudGVyID0gMDsgXHJcblxyXG5jb25zdCBpdGVtRmFjdG9yeSA9IChtc2csIGRhdGUsIGNvbXBsZXRlPWZhbHNlKSA9PiB7XHJcbiAgICBjb25zdCBwcm90byA9IHtcclxuICAgIG1zZyxcclxuICAgIGRhdGUsXHJcbiAgICBjb21wbGV0ZSxcclxuICB9XHJcbiAgICBjb25zdCBpdGVtID0ge21zZywgZGF0ZSwgY29tcGxldGUsIGlkOiBjb3VudGVyKyt9O1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG8sIGl0ZW0pO1xyXG59XHJcblxyXG5leHBvcnQge2NvdW50ZXIsIGl0ZW1GYWN0b3J5fTtcclxuIiwiaW1wb3J0IGl0ZW1Db2xsZWN0aW9uIGZyb20gXCIuLi9tYW5hZ2VDb2xsZWN0aW9uXCI7XHJcblxyXG5cclxuLy8gd2l0aCBjdXJyZW50IHNldCB1cCwgZWFjaCB0aW1lIGRlbGV0ZU9iamVjdCBpcyBjYWxsZWQgYSByZS1yZW5kZXIgdGFrZXMgcGxhY2UuXHJcbi8vIENvdWxkIHNldCB1cCBhIG5ldyBtZXRob2QgdGhhdCBpbnZvbHZlcyBzaW1wbHkgcGFzc2luZyBhIG5ldyBhcnJheSB0byB0aGUgaXRlbSBjb2xsZWN0aW9uIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgb25lP1xyXG4vLyBDb3VsZCBpbXByb3ZlIHRoZSAnQWx3YXlzIHJlLXJlbmRlciBldmVyeXRoaW5nJyBzb2x1dGlvbiB0byB1cGRhdGluZyB0aGUgcGFnZS5cclxuXHJcbmNvbnN0IGNsZWFyQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xlYXIgY29tcGxldGUgY2FsbGVkJyk7XHJcbiAgICBsZXQgY29tcGxldGVkSXRlbXMgPSBpdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uY29tcGxldGUgPT09IHRydWUpO1xyXG4gICAgY29uc29sZS5sb2coY29tcGxldGVkSXRlbXMpO1xyXG4gICAgY29tcGxldGVkSXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW1Db2xsZWN0aW9uLmRlbGV0ZU9iamVjdChpdGVtKSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBjbGVhckNvbXBsZXRlIH07IiwiaW1wb3J0IGl0ZW1Db2xsZWN0aW9uIGZyb20gXCIuLi9tYW5hZ2VDb2xsZWN0aW9uXCI7XHJcblxyXG5cclxuLy8gc2ltcGx5IGNhbGxzIHRoZSBpdGVtQ29sbGVjdGlvbidzIGRlbGV0ZU9iamVjdCBtZXRob2QuIFxyXG4vLyBJZiBJIHdhbnRlZCB0byBhZGQgYW4gJ0FyZSB5b3Ugc3VyZT8nIHN0ZXAgZm9yIHRoZSB1c2VyLCB3b3VsZCB0aGlzIGJlIGEgZ29vZCBwbGFjZSB0byBkbyBzbz9cclxuLy8gSW4gaXRzIGN1cnJlbnQgZm9ybSwgaXMgdGhpcyBtb2R1bGUgc3VwZXJmbHVvdXMsIG9yIGEgdmFsaWQgY2FzZSBvZiBjb2RlLXNwbGl0dGluZz9cclxuLy8gIC0tR2l2ZW4sIGZvciBlZy4gdGhlICdjbGVhciBhbGwnIGZ1bmN0aW9uIGhhcyBubyBpbnRlcm1lZGlhcnkgbW9kdWxlIC0gaXQncyBjYWxsZWQgaW4gdGhlIHNhbWUgcGxhY2UgdGhlIGxpc3RlbmVyIGlzIGFkZGVkIHRvIHRoZSBidXR0b24uIFxyXG5cclxuY29uc3QgY2xlYXJJdGVtID0gKGlkKSA9PiB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gaXRlbUNvbGxlY3Rpb24uY29sbGVjdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PSBpZCk7XHJcbiAgICBpdGVtQ29sbGVjdGlvbi5kZWxldGVPYmplY3Qoc2VsZWN0aW9uKTtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGlvbiwgaXRlbUNvbGxlY3Rpb24uY29sbGVjdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNsZWFySXRlbSB9OyIsImltcG9ydCBpdGVtQ29sbGVjdGlvbiBmcm9tIFwiLi4vbWFuYWdlQ29sbGVjdGlvblwiO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUZvcm0gfSBmcm9tIFwiLi92YWxpZGF0ZUZvcm1cIjtcclxuXHJcbmNvbnN0IGVkaXRJdGVtTXNnSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1tZXNzYWdlJyk7XHJcbmNvbnN0IGVkaXRJdGVtRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZScpO1xyXG5jb25zdCBlZGl0SXRlbUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1pdGVtLWZvcm0nKTtcclxuY29uc3QgYWRkSXRlbUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW0tZm9ybScpO1xyXG5cclxuXHJcbi8vIHNlbGVjdGVkSXRlbSBtYXRjaGVzIERPTSBlbGVtZW50IHRvIG9iamVjdCBpbnN0YW5jZSB2aWEgYSBkYXRhLWlkIHByb3BlcnR5IGFzc2lnbmVkIGF0IGVsZW1lbnQgY3JlYXRpb24uXHJcbmxldCBzZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG5cclxuXHJcbi8vIGxldCBzZWxlY3RlZCBpdGVtIHByb3BlcnRpZXMgcHJlLWZpbGwgZm9ybSBpbnB1dHMuXHJcbmNvbnN0IGVkaXRJdGVtID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIHNlbGVjdGVkSXRlbSA9IGl0ZW1Db2xsZWN0aW9uLmNvbGxlY3Rpb24uZmluZChpdGVtID0+IGl0ZW0uaWQgPT0gaWQpO1xyXG4gICAgY29uc29sZS5sb2coJ2l0ZW0gc2VsZWN0ZWQ6ICcgKyBzZWxlY3RlZEl0ZW0pO1xyXG4gICAgZWRpdEl0ZW1Nc2dJbnB1dC52YWx1ZSA9IHNlbGVjdGVkSXRlbS5tc2c7XHJcbiAgICBlZGl0SXRlbURhdGVJbnB1dC52YWx1ZSA9IHNlbGVjdGVkSXRlbS5kYXRlO1xyXG4gICAgY29uc29sZS5sb2coJ3RoZSBzZWxlY3RlZCBpdGVtIGlzOiAnICsgc2VsZWN0ZWRJdGVtICsgaWQpO1xyXG4gICAgZWRpdEl0ZW1Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgYWRkSXRlbUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGVkaXRJdGVtTXNnSW5wdXQuc2VsZWN0KCk7XHJcbn07XHJcblxyXG4vL3RvZ2dsZXMgYXQgaXRlbSdzICdjb21wbGV0ZScgYXR0cmlidXRlLlxyXG5jb25zdCB0b2dnbGVDb21wbGV0ZSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09IGlkKTtcclxuICAgIGNvbnNvbGUubG9nKCd0b2dnbGUgY29tcGxldGUnKTtcclxuICAgIGl0ZW1Db2xsZWN0aW9uLm1vZGlmeU9iamVjdChzZWxlY3RlZEl0ZW0sIHNlbGVjdGVkSXRlbS5tc2csIHNlbGVjdGVkSXRlbS5kYXRlLCB0cnVlKTtcclxufVxyXG5cclxuXHJcbi8vIGhhbmRsZSBzdWJtaXNzaW9uIG9mIGVkaXQgZm9ybSAtIGdldCBsYXRlc3QgaW5wdXQgdmFsdWVzIGFuZCBwYXNzIHRoZW0gaW50byB0aGUgbW9kaWZ5T2JqZWN0IG1ldGhvZC5cclxuY29uc3QgY29uZmlybUVkaXRJdGVtID0gKCkgPT4ge1xyXG4gICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGVkaXRJdGVtTXNnSW5wdXQudmFsdWU7XHJcbiAgICBsZXQgZGF0ZUlucHV0ID0gZWRpdEl0ZW1EYXRlSW5wdXQudmFsdWU7XHJcbiAgICBpZiAodmFsaWRhdGVGb3JtKGVkaXRJdGVtRm9ybSkpIHtcclxuICAgICAgICBpdGVtQ29sbGVjdGlvbi5tb2RpZnlPYmplY3Qoc2VsZWN0ZWRJdGVtLCBtZXNzYWdlSW5wdXQsIGRhdGVJbnB1dCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBlZGl0SXRlbSwgY29uZmlybUVkaXRJdGVtLCB0b2dnbGVDb21wbGV0ZSB9OyIsIlxyXG4vLyB1bnVzZWQvdW5maW5pc2hlZCBtb2R1bGUuIFdhcyBvcmlnaW5hbGx5IHBsYW5uaW5nIHRvIGhhdmUgYSBnbG9iYWxseSAnYWN0aXZlJyBpdGVtIHRvIGZhY2lsaXRhdGUgdXNlciBpbnRlcmFjdGlvbi5cclxuLy8gbm93IHVzaW5nIGRhdGEtaWRzIGF0dGFjaGVkIHRvIGludGVyYWN0aXZlIGVsZW1lbnRzIGluc3RlYWRcclxuXHJcbmNvbnN0IGVsZW1lbnRTZWxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tbGlzdCcpLmNoaWxkTm9kZXMpO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgLy90YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoaXRlbUxpc3QpIHtcclxuICAgICAgICBpdGVtTGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZWxlY3RJdGVtKGl0ZW0pXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge2VsZW1lbnRTZWxlY3Rpb259OyIsIi8vIFZhbGlkYXRpb24gbW9kdWxlLlxyXG5cclxuLy8gTWF5IG5lZWQgdG8gbW9kaWZ5IGFwcCBzdHJ1Y3R1cmUvZmxvdy5cclxuXHJcbi8vICd1c2VySW50ZXJhY3Rpb24nIG1vZHVsZSBpcyByZXNwb25zYmlibGUgZm9yIHN1Ym1pdHRpbmcgYW5kIHRvZ2dsaW5nIGZvcm0gdmlzaWJpbGl0eS5cclxuLy8gJ2VkaXQgZm9ybScgbG9naWMgZXhpc3RzIGluICdlZGl0SXRlbScgbW9kdWxlIGFuZCBpcyBhZ2FpbiBjYWxsZWQgZnJvbSB1c2VySW50ZXJhY3Rpb24uIFxyXG5cclxuLy8gaW50ZW5kZWQgYmVoYXZpb3VyOlxyXG4gICAgLy8gdXNlciBvcGVucyAnZWRpdCBpdGVtJyBmb3JtIHdpdGggaW5wdXRzIGFwcHJvcHJpYXRlbHkgcHJlLWZpbGxlZFxyXG4gICAgLy8gZm9ybSB3aWxsIGRpc3BsYXkgd2FybmluZyBpZiB1c2VyIGF0dGVtcHRzIHRvIHN1Ym1pdCBmb3JtIHdpdGggZW1wdHkgaW5wdXRzXHJcbiAgICAvLyB3YXJuaW5nIG1lc3NhZ2Ugd2lsbCBiZSBjbGVhcmVkIHdoZW4gdXNlciBpbnB1dHMgZGF0YS9jbG9zZXMgZm9ybS5cclxuICAgIC8vIGlmIGlucHV0cyBhcmUgdmFsaWQgZm9ybSB3aWxsIHRoZW4gdG9nZ2xlIHRvIGludmlzaWJsZSBhbmQgYXJyYXkgd2lsbCBiZSB1cGRhdGVkLlxyXG5cclxuLy8gIHBvc3NpYmxlIGltcGxlbWVudGF0aW9uOlxyXG4gICAgLy8gdXNlckludGVyYWN0aW9uOiBvcGVuICdlZGl0IGZvcm0nLlxyXG4gICAgLy8gY2FsbCBlZGl0LWl0ZW0gcHJlLWZpbGwgZm9ybSBmdW5jdGlvbi5cclxuICAgIC8vIGNhbGwgdmFsaWRhdGVGb3JtIGZ1bmN0aW9uIGFuZCBwYXNzIGJhY2sgdG8gKHVzZXJJbnRlcmFjdGlvbj8gZWRpdEl0ZW0/KSB0byBzdWJtaXQgZGF0YSBhbmQgdG9nZ2xlIGZvcm0gdmlzaWJpbGl0eSBpZi93aGVuIHN1Y2Nlc3NmdWwuXHJcblxyXG5cclxuIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7aXRlbUZhY3Rvcnl9IGZyb20gJy4vY3JlYXRlL2FkZEl0ZW0nO1xyXG5pbXBvcnQgcmVuZGVySXRlbXMgZnJvbSAnLi9yZW5kZXIvcmVuZGVyQ29sbGVjdGlvbic7XHJcbmltcG9ydCBpdGVtQ29sbGVjdGlvbiBmcm9tICcuL21hbmFnZUNvbGxlY3Rpb24nO1xyXG5pbXBvcnQgeyBzZXR1cEludGVyYWN0aW9uIH0gZnJvbSAnLi9yZW5kZXIvdXNlckludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgZWxlbWVudFNlbGVjdGlvbiB9IGZyb20gJy4vZWRpdC9zZWxlY3RJdGVtJztcclxuaW1wb3J0IHNldHVwRGVsZXRlQnV0dG9uIGZyb20gXCIuL3JlbmRlci9kZWxldGlvbk9wdGlvbnNcIjtcclxuaW1wb3J0IHtzZXR1cFNvcnRCdXR0b259IGZyb20gXCIuL3JlYWQvc29ydEJ1dHRvblwiO1xyXG5cclxuXHJcbi8vIGV4YW1wbGUgaXRlbXNcclxuaXRlbUNvbGxlY3Rpb24uY29sbGVjdGlvbi5wdXNoKGl0ZW1GYWN0b3J5KCdmZWVkIHRoZSBkdWNrcycsICcyMDIzLTA0LTA5JykpO1xyXG5pdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uLnB1c2goaXRlbUZhY3RvcnkoJ3N0YXJ0IGEgc2NoZW1lJywgJzIwMjMtMDQtMTEnKSk7XHJcbml0ZW1Db2xsZWN0aW9uLmNvbGxlY3Rpb24ucHVzaChpdGVtRmFjdG9yeShcImNsaW1iIGEgdHJlZVwiLCAnMjAyMy0wNC0wOScpKTtcclxuaXRlbUNvbGxlY3Rpb24uY29sbGVjdGlvbi5wdXNoKGl0ZW1GYWN0b3J5KCdkZW50aXN0JywgJzIwMjItMDQtMDknKSk7XHJcbml0ZW1Db2xsZWN0aW9uLmNvbGxlY3Rpb24ucHVzaChpdGVtRmFjdG9yeSgnc2FpbCB0aGUgc2V2ZW4gc2VhcycsICcyMDIzLTA0LTEyJykpO1xyXG5cclxuXHJcbi8vIGNhbGwgdGhlc2UgaGVyZT8gXHJcbi8vIHNldCB1cCBhbiBvbmxvYWQgZXZlbnQgbGlzdGVuZXIgaW4gZWFjaCBtb2R1bGU/XHJcbi8vIHJlbmRlckl0ZW1zIG5lZWRzIHRvIGdvIGZpcnN0LlxyXG5yZW5kZXJJdGVtcygpO1xyXG5zZXR1cEludGVyYWN0aW9uKCk7XHJcbmVsZW1lbnRTZWxlY3Rpb24oKTtcclxuc2V0dXBEZWxldGVCdXR0b24oKTtcclxuc2V0dXBTb3J0QnV0dG9uKCk7XHJcbiIsImltcG9ydCBvYnNlcnZlQ29sbGVjdGlvbiBmcm9tIFwiLi90ZXN0T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHsgaXRlbUZhY3RvcnkgfSBmcm9tIFwiLi9jcmVhdGUvYWRkSXRlbVwiO1xyXG5cclxuLy8gdG8tZG86IGlucHV0IHZhbGlkYXRpb24uIFJpZ2h0IHBsYWNlIHRvIGRvIGl0PyBcInNlcnZlciBzaWRlXCJcclxuXHJcblxyXG5cclxuLy8gaXRlbUNvbGxlY3Rpb24gT2JqZWN0OlxyXG4vLyBjb2xsZWN0aW9uIGFycmF5IGNvbnRhaW5zICdpdGVtcycuXHJcbi8vIG9ic2VydmVyIGNhbGxzIHJlLXJlbmRlcnMgd2hlbiBub3RpZmllZC4gKFN1cGVyZmx1b3VzPyBDYWxsIHJlLXJlbmRlciBkaXJlY3RseT8gT3JpZ2luYWwgcGxhbiB3YXMgdG8gaGF2ZSBpdCB3b3JrIG91dC4uLlxyXG4vLyAuLi4gd2hpY2ggb2JqZWN0cyByZXF1aXJlZCByZS1yZW5kZXJpbmcsIGJ1dCBpdCBjdXJyZW50bHkganVzdCBjYWxscyBhIGNvbXBsZXRlIHJlLXJlbmRlci4pXHJcbmNvbnN0IGl0ZW1Db2xsZWN0aW9uID0ge1xyXG4gICAgY29sbGVjdGlvbjogW10sXHJcbiAgICBvYnNlcnZlcnM6IFtvYnNlcnZlQ29sbGVjdGlvbl0sXHJcblxyXG4gICAgLy8gQWRkIGFuIG9ic2VydmVyIHRvIG9ic2VydmVyIGFycmF5LiBVbnVzZWQuXHJcbiAgICBhZGRPYnNlcnZlcjogZnVuY3Rpb24ob2JzZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gbm90aWZ5IG9ic2VydmVycyBvZiBzb21lIGNoYW5nZS5cclxuICAgIG5vdGlmeU9ic2VydmVyczogZnVuY3Rpb24oc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiBvYnNlcnZlci51cGRhdGUoc2VsZWN0aW9uKSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgLy8gY29uc3RydWN0IG5ldyBpdGVtLCBhZGQgaXQgdG8gY29sbGVjdGlvbi4gXHJcbiAgICBhZGRPYmplY3Q6IGZ1bmN0aW9uKG1zZywgZGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBpdGVtRmFjdG9yeShtc2csIGRhdGUpO1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKG5ld0l0ZW0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBtb2RpZnkgYW4gb2JqZWN0IGluIHRoZSBjb2xsZWN0aW9uLiBcclxuICAgIC8vIHdoZW4gJ2NvbXBsZXRlJyBwYXNzZWQgaW4ganVzdCB0b2dnbGVzIHRoZSBjb21wbGV0ZSBwcm9wZXJ0eS4gXHJcbiAgICAvLyBvdGhlcndpc2UsIHVwZGF0ZXMgdGhlIG1lc3NhZ2UgYW5kIGRhdGUgcHJvcGVydGllcy5cclxuICAgIG1vZGlmeU9iamVjdDogZnVuY3Rpb24oc2VsZWN0aW9uLCBuZXdNc2csIG5ld0RhdGUsIGNvbXBsZXRlPW51bGwpIHtcclxuICAgICAgICAvL2NoZWNrIGlmIHZhbGlkIGFyZ3VtZW50XHJcbiAgICAgICAgaWYgKGNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5jb21wbGV0ZSA9ICFzZWxlY3Rpb24uY29tcGxldGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGlvbi5jb21wbGV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNT0RJRlk6ICcgKyBzZWxlY3Rpb24pO1xyXG4gICAgICAgIHNlbGVjdGlvbi5tc2cgPSBuZXdNc2c7XHJcbiAgICAgICAgc2VsZWN0aW9uLmRhdGUgPSBuZXdEYXRlO1xyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKHNlbGVjdGlvbik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNsZWFycyB0aGUgY29sbGVjdGlvbiBhcnJheS5cclxuICAgIGRlbGV0ZUFsbE9iamVjdHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vYXJlIHlvdSBzdXJlP1xyXG4gICAgICAgIGNvbnN0IG5ld0NvbGxlY3Rpb24gPSBbXTtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBuZXdDb2xsZWN0aW9uO1xyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKG5ld0NvbGxlY3Rpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL2ZpbHRlcnMgb3V0IGFuIG9iamVjdCBmcm9tIGNvbGxlY3Rpb24sIHJlLWFzc2lnbnMgY29sbGVjdGlvbiB0byBmaWx0ZXJlZCBhcnJheS4gR29vZCBwcmFjdGljZT9cclxuICAgIGRlbGV0ZU9iamVjdDogZnVuY3Rpb24oc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgLy9jaGVjayBpZiB2YWxpZCBhcmd1bWVudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdERUxFVEUgT0JKRUNUOiAnICsgc2VsZWN0aW9uKTtcclxuICAgICAgICBjb25zdCBuZXdDb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHNlbGVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gbmV3Q29sbGVjdGlvbjtcclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyhzZWxlY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXRlbUNvbGxlY3Rpb247IiwiaW1wb3J0IHJlbmRlckl0ZW1zIGZyb20gXCIuLi9yZW5kZXIvcmVuZGVyQ29sbGVjdGlvblwiO1xyXG5pbXBvcnQgaXRlbUNvbGxlY3Rpb24gZnJvbSBcIi4uL21hbmFnZUNvbGxlY3Rpb25cIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5cclxuXHJcbi8vVGhpcyBtb2R1bGUgc2V0cyB1cCBhIHNvcnQgYnV0dG9uIHRoZSB1c2VyIGNhbiBzZXQgdG8gZGF0ZSBhc2NlbmRpbmcgb3IgZGVzY2VuZGluZy5cclxuLy9UaGUgc2V0dGluZyBhdCAncmVuZGVyJyB0aW1lIHdpbGwgZGV0ZXJtaW5lIHRoZSBvcmRlciBpbiB3aGljaCBjb2xsZWN0aW9uIGl0ZW1zIGFyZSByZW5kZXJlZCBpbiB0aGUgcmVuZGVyIG1vZHVsZS5cclxuXHJcblxyXG5cclxubGV0IG9yZGVyRGVzY2VuZGluZyA9IHRydWU7XHJcbmNvbnN0IHNvcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1idXR0b24nKTtcclxuXHJcbmNvbnN0IHRvZ2dsZVJlbmRlckxpc3RPcmRlciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCd0b2dnbGVyZW5kZXJsaXN0b3JkZXInICsgb3JkZXJEZXNjZW5kaW5nKVxyXG4gICAgb3JkZXJEZXNjZW5kaW5nID0gIW9yZGVyRGVzY2VuZGluZztcclxuICAgIHNvcnRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGVzY2VuZGluZycpO1xyXG4gICAgcmVuZGVySXRlbXMoKTtcclxufTtcclxuXHJcbmNvbnN0IHNldHVwU29ydEJ1dHRvbiA9ICgpID0+IHtcclxuICAgIHNvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVSZW5kZXJMaXN0T3JkZXIpO1xyXG59XHJcblxyXG5jb25zdCBnZXRSZW5kZXJMaXN0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHJlbmRlckxpc3QgPSBpdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uO1xyXG4gICAgb3JkZXJEZXNjZW5kaW5nID8gXHJcbiAgICByZW5kZXJMaXN0ID0gcmVuZGVyTGlzdC5zb3J0KChhLCBiKSA9PiBkYXlqcyhiLmRhdGUpIC0gZGF5anMoYS5kYXRlKSkgOlxyXG4gICAgcmVuZGVyTGlzdCA9IHJlbmRlckxpc3Quc29ydCgoYSwgYikgPT4gZGF5anMoYS5kYXRlKSAtIGRheWpzKGIuZGF0ZSkpXHJcbiAgICBcclxuICAgIHJldHVybiByZW5kZXJMaXN0O1xyXG59O1xyXG5cclxuZXhwb3J0IHtnZXRSZW5kZXJMaXN0LCBzZXR1cFNvcnRCdXR0b259O1xyXG4iLCJpbXBvcnQgdHJhc2hJY29uIGZyb20gXCIuLi9hc3NldHMvdHJhc2guc3ZnXCI7XHJcblxyXG4vLyBkZWxldGUgYnV0dG9uIG9wdGlvbnMgcG9wdXAuIFxyXG5cclxuLy9FeHBhbmQgdG8gaGF2ZSBhIGRlZGljYXRlZCAnbW9kYWwgY29udHJvbGxlcicgbW9kdWxlP1xyXG4vL1NldmVyYWwgJ3BvcHVwJyBlbGVtZW50cyB0byBtYW5hZ2UgLSBlZGl0IGZvcm0sIGFkZCBmb3JtLCBkZWxldGUgYnV0dG9uIG9wdGlvbnMsIGV0Yy4gQmVzdCB3YXkgdG8gbWFuYWdlP1xyXG5cclxuXHJcbmNvbnN0IHNldHVwRGVsZXRlQnV0dG9uID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBkZWxldGVPcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiI2RlbGV0ZS1vcHRpb25zLWNvbnRhaW5lclwiXHJcbiAgKTtcclxuICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtYnV0dG9uXCIpO1xyXG4gIGNvbnN0IGRlbGV0ZU9wdGlvbnNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbGV0ZS1vcHRpb25zLWJ1dHRvblwiKTtcclxuICBjb25zdCBkZWxldGVPcHRpb25zQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgZGVsZXRlT3B0aW9uc0J1dHRvbkljb24uc3JjID0gdHJhc2hJY29uO1xyXG4gIGRlbGV0ZU9wdGlvbnNCdXR0b25JY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLW9wdGlvbnMtaWNvblwiKTtcclxuICBkZWxldGVPcHRpb25zQnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZU9wdGlvbnNCdXR0b25JY29uKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRGVsZXRlT3B0aW9ucyA9ICgoZSkgPT4ge1xyXG4gICAgbGV0IGluaXRpYWxTdGF0ZSA9IHRydWU7XHJcblxyXG4gICAgLy8gcHJldmVudCBidWJibGluZy4gQmVzdCBwcmFjdGljZT9cclxuICAgIGlmIChlKSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICh3aGVyZSA9IG51bGwsIGUpID0+IHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVG9nZ2xlIVwiKTtcclxuXHJcbiAgICAgIC8vIGRvIG5vdGhpbmcgd2hlbiBib2R5IGlzIGNsaWNrZWQgYW5kIGRlbGV0ZSBvcHRpb25zIGFyZW4ndCB2aXNpYmxlLlxyXG4gICAgICBpZiAod2hlcmUgPT0gXCJib2R5XCIgJiYgaW5pdGlhbFN0YXRlID09IHRydWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZ1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbFwiICsgaW5pdGlhbFN0YXRlKTtcclxuICAgICAgaW5pdGlhbFN0YXRlID0gIWluaXRpYWxTdGF0ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJmaW5hbFwiICsgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAgIGRlbGV0ZU9wdGlvbnNCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICAgICAgZGVsZXRlT3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgICBkZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIikpO1xyXG4gICAgfTtcclxuICB9KSgpO1xyXG5cclxuXHJcbiAgLy9ldmVudCBsaXN0ZW5lcnMgZm9yIGRlbGV0ZSBidXR0b25zLlxyXG5cclxuICBkZWxldGVPcHRpb25zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHRvZ2dsZURlbGV0ZU9wdGlvbnMobnVsbCwgZXZlbnQpO1xyXG4gIH0pO1xyXG5cclxuICBkZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIHRvZ2dsZURlbGV0ZU9wdGlvbnMobnVsbCwgZXZlbnQpO1xyXG4gICAgfSlcclxuICApO1xyXG5cclxuICAvLyBkb2N1bWVudCBib2R5LiBcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB0b2dnbGVEZWxldGVPcHRpb25zKFwiYm9keVwiLCBldmVudCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXR1cERlbGV0ZUJ1dHRvbjtcclxuIiwiaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xyXG5pbXBvcnQgdXRjIGZyb20gJ2RheWpzL3BsdWdpbi91dGMnXHJcbmltcG9ydCB0eiBmcm9tICdkYXlqcy9wbHVnaW4vdGltZXpvbmUnXHJcbmltcG9ydCByZWxhdGl2ZVRpbWUgZnJvbSAnZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZSdcclxuaW1wb3J0IGNhbGVuZGFyIGZyb20gJ2RheWpzL3BsdWdpbi9jYWxlbmRhcidcclxuaW1wb3J0IHVwZGF0ZUxvY2FsZSBmcm9tICdkYXlqcy9wbHVnaW4vdXBkYXRlTG9jYWxlJ1xyXG5cclxuXHJcblxyXG5kYXlqcy5leHRlbmQodXRjKVxyXG5kYXlqcy5leHRlbmQodHopXHJcbmRheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWUpXHJcbmRheWpzLmV4dGVuZChjYWxlbmRhcilcclxuZGF5anMuZXh0ZW5kKHVwZGF0ZUxvY2FsZSlcclxuXHJcbi8vIGRheWpzIGRhdGUgY29lcmNpb24uIFxyXG4vLyB0YWtlcyBpbiBvYmplY3QgZGF0ZSBzdHJpbmcsIHJldHVybnMgY3VzdG9tIG91cHV0cyBsaWtlICd0b21vcnJvdycuIFxyXG5cclxuY29uc3QgdGltZVpvbmUgPSBkYXlqcy50ei5ndWVzcygpXHJcblxyXG5kYXlqcy51cGRhdGVMb2NhbGUoJ2VuJywge1xyXG4gICAgY2FsZW5kYXI6IHtcclxuICAgICAgbGFzdERheTogJ1tZZXN0ZXJkYXldJyxcclxuICAgICAgc2FtZURheTogJ1tUb2RheV0nLFxyXG4gICAgICBuZXh0RGF5OiAnW1RvbW9ycm93XScsXHJcbiAgICAgIGxhc3RXZWVrOiAnW2xhc3RdIGRkZGQnLFxyXG4gICAgICBuZXh0V2VlazogJ2RkZGQnLFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG5cclxuY29uc3QgZ2V0VGltZSA9IChkYXRlc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRhdGVzdHJpbmc7XHJcbiAgICBjb25zdCBtb2RpZmllZCA9IGRheWpzKGlucHV0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG1vZGlmaWVkLmNhbGVuZGFyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFRpbWU7IiwiLy8gQXR0ZW1wdCBhdCBpbXByb3ZpbmcgVUkuXHJcblxyXG5cclxuY29uc3QgY2FsY3VsYXRlSGVpZ2h0T2ZMaXN0Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2l0ZW0tYm94LW91dGVyJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2cobGlzdEl0ZW1zKTtcclxuXHJcbiAgICBjb25zdCBmaXJzdExpc3RJdGVtID0gQXJyYXkuZnJvbShsaXN0SXRlbXMpWzBdO1xyXG4gICAgY29uc29sZS5sb2coZmlyc3RMaXN0SXRlbSk7XHJcbiAgICBsZXQgaGVpZ2h0b2ZMaXN0SXRlbSA9IGZpcnN0TGlzdEl0ZW0uY2xpZW50SGVpZ2h0O1xyXG4gICAgY29uc3Qgc3R5bGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKHN0eWxlVGFnKTtcclxuICAgIHN0eWxlVGFnLmlubmVySFRNTCA9IGAubGlzdC1jb250YWluZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAke2hlaWdodG9mTGlzdEl0ZW19cHg7XHJcbiAgICB9YDtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHN0eWxlVGFnLmlubmVySFRNTCArPSBgI2l0ZW0tYm94LW91dGVyIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2Utb3V0O1xyXG4gICAgICAgIH1gO1xyXG4gICAgICB9LCAwKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCB7IGNhbGN1bGF0ZUhlaWdodE9mTGlzdENvbnRhaW5lciB9OyIsImltcG9ydCB7IGNsZWFySXRlbSB9IGZyb20gJy4uL2RlbGV0ZS9jbGVhckl0ZW0nO1xyXG5pbXBvcnQge2VkaXRJdGVtLCB0b2dnbGVDb21wbGV0ZX0gZnJvbSAnLi4vZWRpdC9lZGl0SXRlbSc7XHJcbmltcG9ydCBnZXRUaW1lIGZyb20gJy4vZ2V0VGltZSc7XHJcbmltcG9ydCB7IGdldFJlbmRlckxpc3QgfSBmcm9tICcuLi9yZWFkL3NvcnRCdXR0b24nO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVIZWlnaHRPZkxpc3RDb250YWluZXIgfSBmcm9tICcuL2hhbmRsZUl0ZW1FZmZlY3RzJztcclxuXHJcbmNvbnN0IHJlbmRlckl0ZW1zID0gKCkgPT4ge1xyXG5cclxuICAgIC8vY3VycmVudGx5IGRvaW5nIGEgZnVsbCByZS1yZW5kZXIgb24gY2hhbmdlOlxyXG4gICAgLy9XYXlzIG9mIG1ha2luZyBtb3JlIGVmZmljaWVudD9cclxuICAgIC8vV2lsbCByZXF1aXJlIG1vZGlmeWluZyBleGlzdGluZyBzdHJ1Y3R1cmU/XHJcblxyXG4gICAgY29uc3QgZXhpc3RpbmdJdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWxpc3QnKTtcclxuICAgIGNvbnN0IGNvbnRlbnRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtYXJlYScpO1xyXG5cclxuXHJcbiAgICAvL3RyeS9jYXRjaCBoZXJlIGlzIGEgY29zbWV0aWMgZml4IG9ubHkgLSB3aWxsIGFkZCBpbmZpbml0ZSBpdGVtLWxpc3QgZGl2cyBpZiB5b3Ugc3BhbSB0aGUgc29ydCBidXR0b24uXHJcbiAgICAvLyBlYXNpZXN0IHNvbHV0aW9uIC0gZGlzYWJsZSBhY3Rpb24gYnV0dG9ucyBmb3IgNTAwbXM/XHJcbiAgICAvLyBJZiBpdGVtTGlzdCBleGlzdHMsIGFkZHMgYSAnZGVsZXRlZCcgY2xhc3MgdGhlbiBkZWxldGVzIHRoZSBlbGVtZW50IGFmdGVyIDUwMG1zLlxyXG4gICAgXHJcbiAgICAgICAgLy8gaWYgKGV4aXN0aW5nSXRlbUxpc3QpIHtcclxuICAgICAgICAvLyAgICAgZXhpc3RpbmdJdGVtTGlzdC5jbGFzc0xpc3QuYWRkKCdkZWxldGVkJyk7XHJcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0cnkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnRlbnRBcmVhLnJlbW92ZUNoaWxkKGV4aXN0aW5nSXRlbUxpc3QpO1xyXG4gICAgICAgIC8vICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICB9LCA1MDApO1xyXG5cclxuICAgICAgICAvLyB9O1xyXG5cclxuICAgIC8vIEV2ZXJ5dGhpbmcgZnVuY3Rpb25zIGFzIGl0IHNob3VsZCB0aGlzIHdheSwgYnV0IGRvZXNuJ3QgbG9vayBhcyBnb29kIC0gdmlzaWJsZSByZWZyZXNoLiBcclxuXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nSXRlbUxpc3QpIHtcclxuICAgICAgICAgICAgY29udGVudEFyZWEucmVtb3ZlQ2hpbGQoZXhpc3RpbmdJdGVtTGlzdCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAvLyBjcmVhdGVzIGFuICdpdGVtLWxpc3QnIGVsZW1lbnRcclxuICAgIGNvbnN0IGl0ZW1MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtTGlzdC5pZCA9ICdpdGVtLWxpc3QnO1xyXG4gICAgY29udGVudEFyZWEuYXBwZW5kQ2hpbGQoaXRlbUxpc3QpO1xyXG5cclxuXHJcbiAgICAvLyBnZXQgY29sbGVjdGlvbiB0byByZW5kZXIgb3JkZXJlZCBieSBkYXRlIGVpdGhlciBkZXNjZW5kaW5nIG9yIGFzY2VuZGluZy4gXHJcbiAgICBsZXQgcmVuZGVyTGlzdCA9IGdldFJlbmRlckxpc3QoKTtcclxuXHJcbiAgICAvLyBmb3IgZWFjaCBpdGVtIG9iamVjdCwgY3JlYXRlIGFuICdpdGVtIGJveCcgYW5kIGFwcGVuZCBpdFxyXG4gICAgcmVuZGVyTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW1MaXN0LmFwcGVuZChyZW5kZXJJdGVtQm94KGl0ZW0pKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gY2FsY3VsYXRlSGVpZ2h0T2ZMaXN0Q29udGFpbmVyKCk7XHJcblxyXG5cclxufVxyXG5cclxuLy8gY3JlYXRlIGluZGl2aWR1YWwgJ2l0ZW0tYm94ZXMnIGJhc2VkIG9uIGl0ZW0gb2JqZWN0cy4gXHJcbi8vIGNsaWNrYWJsZSBlbGVtZW50cyBhcmUgZ2l2ZW4gZGF0YS1pZHMgdGhhdCBmYWNpbGl0YXRlIHNlbGVjdGlvbiBhbmQgbW9kaWZpY2F0aW9uIG9mIHRoZSBvYmplY3RzLlxyXG4vLyBldmVudCBsaXN0ZW5lcnMgYXJlIGFkZGVkIHRvIGNsaWNrYWJsZSBvYmplY3RzIGhlcmUgLSBzZWVtZWQgY29udmVuaWVudCAtIHNob3VsZCB0aGlzIGJlIGRvbmUgZWxzZXdoZXJlP1xyXG5jb25zdCByZW5kZXJJdGVtQm94ID0gKGl0ZW0pID0+IHtcclxuICAgIC8vIGNvbnN0IGl0ZW1Cb3hPdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gaXRlbUJveE91dGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbS1ib3gtb3V0ZXInKTtcclxuICAgIC8vIGl0ZW1Cb3hPdXRlci5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICBjb25zdCBpdGVtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtQm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbS1ib3gnKTtcclxuICAgIGl0ZW1Cb3guY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1NZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbU1lc3NhZ2UudGV4dENvbnRlbnQgPSBpdGVtLm1zZztcclxuICAgIGl0ZW1NZXNzYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGl0ZW0uaWQpO1xyXG4gICAgaWYgKGl0ZW0uY29tcGxldGUpIHtcclxuICAgICAgICBpdGVtTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xyXG4gICAgICAgIGl0ZW1Cb3guY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcclxuICAgIH07XHJcbiAgICBpdGVtTWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBpZCA9IGl0ZW1NZXNzYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgIHRvZ2dsZUNvbXBsZXRlKGlkKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgaXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtRGF0ZS50ZXh0Q29udGVudCA9IGdldFRpbWUoaXRlbS5kYXRlKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbkJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1dHRvbi1ib3gnKTtcclxuXHJcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb3Blbi1lZGl0LWJ1dHRvbicpO1xyXG4gICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpdGVtLmlkKTtcclxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgaWQgPSBlZGl0QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgIGVkaXRJdGVtKGlkKTtcclxuICAgIH0pXHJcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VESVQnO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGl0ZW0uaWQpO1xyXG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RFTEVURSc7XHJcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgaWQgPSBkZWxldGVCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgY2xlYXJJdGVtKGlkKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyBpdGVtQm94T3V0ZXIuYXBwZW5kKGl0ZW1Cb3gpO1xyXG4gICAgaXRlbUJveC5hcHBlbmQoaXRlbU1lc3NhZ2UsIGl0ZW1EYXRlLCBidXR0b25Cb3gpO1xyXG4gICAgYnV0dG9uQm94LmFwcGVuZChlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pXHJcbiAgICBcclxuICAgIHJldHVybiBpdGVtQm94O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySXRlbXM7IiwiaW1wb3J0IGl0ZW1Db2xsZWN0aW9uIGZyb20gXCIuLi9tYW5hZ2VDb2xsZWN0aW9uXCI7XHJcbmltcG9ydCB7IGNvbmZpcm1FZGl0SXRlbSB9IGZyb20gXCIuLi9lZGl0L2VkaXRJdGVtXCI7XHJcbmltcG9ydCB7IGNsZWFyQ29tcGxldGUgfSBmcm9tIFwiLi4vZGVsZXRlL2NsZWFyQ29tcGxldGVcIjtcclxuXHJcblxyXG4vLyBEaXNwbGF5IGFuZCBzdWJtaXQgJ0FkZCBJdGVtJyBGb3JtLlxyXG5cclxuY29uc3Qgc2V0dXBJbnRlcmFjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtcG9wdXAtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBhZGRJdGVtRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1mb3JtJyk7XHJcbiAgICBjb25zdCBjbG9zZUFkZEl0ZW1Gb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWFkZC1mb3JtJyk7XHJcbiAgICBjb25zdCBzdWJtaXRBZGRJdGVtRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtaXRlbS1idXR0b24nKTtcclxuICAgIGNvbnN0IG1zZ0lucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpO1xyXG5cclxuICAgIGNvbnN0IGVkaXRJdGVtRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWl0ZW0tZm9ybScpO1xyXG4gICAgY29uc3QgY2xvc2VFZGl0SXRlbUZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZWRpdC1mb3JtJyk7XHJcbiAgICBjb25zdCBzdWJtaXRFZGl0SXRlbUZvcm1idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1pdGVtLWJ1dHRvbicpO1xyXG4gIFxyXG4gICAgY29uc3QgY2xlYXJBbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXItYWxsLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgY2xlYXJDb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhci1jb21wbGV0ZS1idXR0b24nKTtcclxuXHJcblxyXG4gICAgLy8gZGlzcGxheSAnYWRkIGl0ZW0nIGZvcm06XHJcbiAgICAvLyBnZW5lcmljIG9wZW4vY2xvc2UgbW9kYWwgZnVuY3Rpb24/IFRha2VzIHRhcmdldCBhbmQgb3Blbi9jbG9zZSBwYXJhbXM/XHJcbiAgICBjb25zdCBkaXNwbGF5QWRkSXRlbSA9ICgpID0+IHtcclxuICAgICAgICBhZGRJdGVtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBlZGl0SXRlbUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBtc2dJbnB1dEZpZWxkLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBZGRJdGVtKTtcclxuXHJcbiAgICBcclxuICAgIC8vIHN1Ym1pdCAnYWRkIGl0ZW0nIGZvcm06XHJcbiAgICBjb25zdCBzdWJtaXRBZGRJdGVtRm9ybSA9ICgpID0+IHtcclxuICAgICAgICAvLyBhZGQgY29lcmNpb24gYW5kIGVycm9yIGhhbmRsaW5nIGhlcmVcclxuICAgICAgICBsZXQgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKS52YWx1ZTs7XHJcbiAgICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWU7XHJcbiAgICAgICAgaXRlbUNvbGxlY3Rpb24uYWRkT2JqZWN0KG1lc3NhZ2VJbnB1dCwgZGF0ZUlucHV0KTtcclxuICAgICAgICBhZGRJdGVtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdEFkZEl0ZW1Gb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0QWRkSXRlbUZvcm0pO1xyXG5cclxuXHJcbiAgICAvL3ByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3VyXHJcbiAgICBcclxuICAgIGFkZEl0ZW1Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICBlZGl0SXRlbUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vc3VibWl0IGVkaXQgaXRlbSBmb3JtIC0gY2FsbCBleHRlcm5hbCAnY29uZmlybWF0aW9uJyBmdW5jdGlvbjpcclxuICAgIC8vIHByZXNlbnRzIGNvbXBsaWNhdGlvbnMgZm9yIGFkZGluZyB2YWxpZGF0aW9uLlxyXG4gICAgc3VibWl0RWRpdEl0ZW1Gb3JtYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uZmlybUVkaXRJdGVtKCk7XHJcbiAgICAgICAgZWRpdEl0ZW1Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gY2xlYXIgYWxsIGJ1dHRvbiBjYWxscyBpdGVtIGNvbGxlY3Rpb24ncyAnZGVsZXRlQWxsT2JqZWN0cycgbWV0aG9kOlxyXG4gICAgY2xlYXJBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpdGVtQ29sbGVjdGlvbi5kZWxldGVBbGxPYmplY3RzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGVhckNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2xlYXJDb21wbGV0ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2VBZGRJdGVtRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGFkZEl0ZW1Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KVxyXG5cclxuICAgIGNsb3NlRWRpdEl0ZW1Gb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZWRpdEl0ZW1Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7c2V0dXBJbnRlcmFjdGlvbn07IiwiaW1wb3J0IHJlbmRlckl0ZW1zIGZyb20gXCIuL3JlbmRlci9yZW5kZXJDb2xsZWN0aW9uXCI7XHJcblxyXG5cclxuLy8gc2ltcGx5IGNhbGxzIGEgcmUtcmVuZGVyIGF0IHRoaXMgc3RhZ2UuXHJcbmNvbnN0IG9ic2VydmVDb2xsZWN0aW9uID0ge1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbihzZWxlY3Rpb24pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2FsbGluZyBhIHJlLXJlbmRlci4uLicpO1xyXG5cclxuICAgICAgICByZW5kZXJJdGVtcygpO1xyXG4gICAgICAgIC8vc2V0dXBJbnRlcmFjdGlvbigpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZUNvbGxlY3Rpb247Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9