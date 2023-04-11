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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #F9F7F3;\n  height: 120vh;\n}\n\n#header {\n  height: 15vh;\n  position: sticky;\n  background-color: #0FA3B1;\n  border-radius: 10px;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n}\n#header h1 {\n  color: #EDDEA4;\n  font-size: 4rem;\n  text-align: center;\n  padding: 1rem;\n}\n\n#content-area {\n  margin: 0.5rem;\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  grid-template-areas: \"content controls\";\n}\n#content-area #footer {\n  z-index: 100;\n  height: 30vh;\n  width: 100vw;\n  position: fixed;\n  bottom: 0%;\n}\n#content-area #footer::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 50vh;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 100%);\n  z-index: -1;\n}\n\n#modal-popup-button {\n  color: #EDDEA4;\n  z-index: 1000;\n  background-color: #0FA3B1;\n  border: none;\n  border-radius: 100px;\n  font-size: 5rem;\n  position: fixed;\n  bottom: 5%;\n  transform: translateX(-50%);\n  left: 50%;\n  width: 30vw;\n  height: 30vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#list-controls {\n  grid-area: controls;\n}\n\n#delete-buttons {\n  z-index: 9000;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n#delete-buttons #delete-options-button {\n  position: fixed;\n  width: 100px;\n  height: 100px;\n  top: 100px;\n}\n#delete-buttons button {\n  text-align: center;\n  background-color: #F7A072;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  position: fixed;\n  white-space: pre-wrap;\n  height: fit-content;\n  padding: 0.8rem;\n  width: 20vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#delete-buttons button:active {\n  opacity: none;\n}\n#delete-buttons button:first-child {\n  position: fixed;\n  top: 80%;\n}\n\n#item-list {\n  z-index: 0;\n  animation: fadeIn 0.5s ease-in-out forwards;\n  grid-area: content;\n  display: flex;\n  flex-flow: column nowrap;\n}\n#item-list div {\n  border-radius: 20px;\n  background-color: #B5E2FA;\n  margin: 1rem;\n  display: grid;\n  grid-template: 2fr 1fr/1fr 1fr;\n  grid-template-areas: \"main buttons\" \". date\";\n}\n#item-list div p:first-child {\n  padding-left: 0.5rem;\n  font-size: larger;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n#item-list div p:nth-child(2) {\n  grid-area: date;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-style: italic;\n}\n#item-list div #button-box {\n  grid-area: buttons;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3px;\n}\n#item-list div #button-box button {\n  text-align: center;\n  background-color: #333333;\n  color: #f8f9fa;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  height: fit-content;\n  padding: 0.8rem;\n  width: fit-content;\n}\n\n*.deleted {\n  animation: fadeOut 0.5s ease-in-out forwards;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAiBA;EACI;IACE,UAAA;EAhBJ;EAkBE;IACE,UAAA;EAhBJ;AACF;AAmBA;EACI;IACI,UAAA;EAjBN;EAmBI;IACE,UAAA;EAjBN;AACF;AAoBA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AAlBJ;;AAqBA;EACI,sBAAA;AAlBJ;;AAqBA;EACI,SAAA;EACA,UAAA;EACA,yBA3Ce;EA4Cf,aAAA;AAlBJ;;AAqBA;EACI,YAAA;EACA,gBAAA;EACA,yBAtDY;EAuDZ,mBAAA;EACA,0CAAA;AAlBJ;AAmBI;EACI,cAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;AAjBR;;AAqBA;EACI,cAAA;EACA,aAAA;EACA,8BAAA;EACA,uCACA;AAnBJ;AAoBI;EACI,YAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,UAAA;AAlBR;AAoBQ;EACI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,6EAAA;EACA,WAAA;AAlBZ;;AAuBA;EACI,cAAA;EACA,aAAA;EACA,yBA9FY;EA+FZ,YAAA;EACA,oBAAA;EACA,eAAA;EACA,eAAA;EACA,UAAA;EACA,2BAAA;EACA,SAAA;EAEA,WAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AAtBJ;;AAyBA;EACI,mBAAA;AAtBJ;;AAyBA;EACI,aAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAtBJ;AAuBI;EAEI,eAAA;EACA,YAAA;EACA,aAAA;EACA,UAAA;AAtBR;AAwBI;EACI,kBAAA;EACA,yBAhIS;EAiIT,YAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;EACA,mBAAA;EACA,eAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAtBR;AAuBQ;EACI,aAAA;AArBZ;AAwBI;EACI,eAAA;EACA,QAAA;AAtBR;;AA2BA;EACI,UAAA;EACA,2CAAA;EACA,kBAAA;EACA,aAAA;EACA,wBAAA;AAxBJ;AAyBI;EACI,mBAAA;EACA,yBAhKU;EAiKV,YAAA;EACA,aAAA;EACA,8BAAA;EACA,4CACC;AAxBT;AA0BQ;EACI,oBAAA;EACA,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,qBAAA;AAxBZ;AA0BQ;EACI,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAxBZ;AA0BQ;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;AAxBZ;AAyBY;EACI,kBAAA;EACA,yBA5LH;EA6LG,cAzLE;EA0LF,YAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;AAvBhB;;AA+BA;EACI,4CAAA;AA5BJ","sourcesContent":["// Light Mode Colors\r\n$primary-color: #0FA3B1;\r\n$secondary-color: #B5E2FA;\r\n$tertiary-color: #F7A072;\r\n$text-color: #333333;\r\n$background-color: #F9F7F3;\r\n\r\n// Dark Mode Colors\r\n$text-color-dark: #f8f9fa;\r\n$background-color-dark: #212529;\r\n\r\n// Default Variables\r\n$primary: $primary-color;\r\n$secondary: $secondary-color;\r\n$text: $text-color;\r\n$background: $background-color;\r\n\r\n@keyframes fadeOut {\r\n    from {\r\n      opacity: 1;\r\n    }\r\n    to {\r\n      opacity: 0;\r\n    }\r\n  }\r\n\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n      }\r\n      to {\r\n        opacity: 1;\r\n      }\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n:root {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: $background;\r\n    height: 120vh;\r\n}\r\n\r\n#header {\r\n    height: 15vh;\r\n    position: sticky;\r\n    background-color: $primary;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\r\n    h1 {\r\n        color: #EDDEA4;\r\n        font-size: 4rem;\r\n        text-align: center;\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n#content-area {\r\n    margin: 0.5rem;\r\n    display: grid;\r\n    grid-template-columns: 4fr 1fr;\r\n    grid-template-areas:\r\n    \"content controls\";\r\n    #footer {\r\n        z-index: 100;\r\n        height: 30vh;\r\n        width: 100vw;\r\n        position: fixed;\r\n        bottom: 0%;\r\n        //opacity: 10%;\r\n        &::after {\r\n            content: \"\";\r\n            position: absolute;\r\n            bottom: 0;\r\n            left: 0;\r\n            right: 0;\r\n            height: 50vh; // Change this to adjust the height of the fade-out effect.\r\n            background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 100%);\r\n            z-index: -1;\r\n        }\r\n    }\r\n}\r\n\r\n#modal-popup-button {\r\n    color: #EDDEA4;\r\n    z-index: 1000;\r\n    background-color: $primary;\r\n    border: none;\r\n    border-radius: 100px;\r\n    font-size: 5rem;\r\n    position: fixed;\r\n    bottom: 5%;\r\n    transform: translateX(-50%);\r\n    left: 50%;\r\n\r\n    width: 30vw;\r\n    height: 30vw;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#list-controls {\r\n    grid-area: controls;\r\n}\r\n\r\n#delete-buttons {\r\n    z-index: 9000;\r\n    margin-top: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    #delete-options-button {\r\n        \r\n        position: fixed;\r\n        width: 100px;\r\n        height: 100px;\r\n        top: 100px;\r\n    }\r\n    button {\r\n        text-align: center;\r\n        background-color: $tertiary-color;\r\n        border: none;\r\n        border-radius: 10px;\r\n        font-size: 0.9rem;\r\n        position: fixed;\r\n        white-space: pre-wrap;\r\n        height: fit-content;\r\n        padding: 0.8rem;\r\n        width: 20vw;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        &:active {\r\n            opacity: none;\r\n        }\r\n    }\r\n    button:first-child {\r\n        position: fixed;\r\n        top: 80%;\r\n\r\n    }\r\n}\r\n\r\n#item-list {\r\n    z-index: 0;\r\n    animation: fadeIn 0.5s ease-in-out forwards;\r\n    grid-area: content;\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    div {\r\n        border-radius: 20px;\r\n        background-color: $secondary;\r\n        margin: 1rem;\r\n        display: grid;\r\n        grid-template: 2fr 1fr / 1fr 1fr;\r\n        grid-template-areas: \r\n         \"main buttons\"\r\n         \". date\";\r\n        p:first-child {\r\n            padding-left: 0.5rem;\r\n            font-size: larger;\r\n            font-weight: bold;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: flex-end;\r\n        }\r\n        p:nth-child(2) {\r\n            grid-area: date;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            font-style: italic;\r\n        }\r\n        #button-box {\r\n            grid-area: buttons;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            gap: 3px;\r\n            button {\r\n                text-align: center;\r\n                background-color: $text;\r\n                color: $text-color-dark;\r\n                border: none;\r\n                border-radius: 10px;\r\n                font-size: 0.7rem;\r\n                height: fit-content;\r\n                padding: 0.8rem;\r\n                width: fit-content;\r\n            }\r\n        }\r\n\r\n    }\r\n}\r\n\r\n\r\n*.deleted {\r\n    animation: fadeOut 0.5s ease-in-out forwards;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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

let counter = 0; 

const itemFactory = (msg, date, complete=false) => {
    const proto = {
    msg,
    date,
    complete,
    edit(input) {
        this.msg = input;
    },
    toggle: () => console.log('toggle function'),
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
/* harmony export */   "editItem": () => (/* binding */ editItem)
/* harmony export */ });
/* harmony import */ var _manageCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manageCollection */ "./src/manageCollection.js");


const editItemMsgInput = document.querySelector('#edit-message');
const editItemDateInput = document.querySelector('#edit-date');
const editItemForm = document.querySelector('#edit-item-form');


let selectedItem = null;

const editItem = function(id) {
    selectedItem = _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].collection.find(item => item.id == id);
    console.log('item selected: ' + selectedItem);
    editItemMsgInput.value = selectedItem.msg;
    editItemDateInput.value = selectedItem.date;
    console.log('the selected item is: ' + selectedItem + id);
    editItemForm.style.display = 'block';
};

const confirmEditItem = () => {
    let messageInput = editItemMsgInput.value;
    _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].modifyObject(selectedItem, messageInput);
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








_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)('feed the ducks', '2023-04-09'));
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)('start a scheme', '2023-04-11'));
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)("rock climbing", '2023-04-09'));
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)('forest clearing', '2022-04-09'));
_manageCollection__WEBPACK_IMPORTED_MODULE_3__["default"].collection.push((0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)('dentist', '2023-04-12'));



(0,_render_renderCollection__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_render_userInteraction__WEBPACK_IMPORTED_MODULE_4__.setupInteraction)();
(0,_edit_selectItem__WEBPACK_IMPORTED_MODULE_5__.elementSelection)();


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



// each method can share a 'check if valid object' function.

const itemCollection = {
    collection: [],
    observers: [_testObserver__WEBPACK_IMPORTED_MODULE_0__["default"]],

    addObserver: function(observer) {
        this.observers.push(observer);
    },

    notifyObservers: function(selection) {
        this.observers.forEach(observer => observer.update(selection));
      },

    addObject: function(msg, date) {
        const newItem = (0,_create_addItem__WEBPACK_IMPORTED_MODULE_1__.itemFactory)(msg, date);
        this.collection.push(newItem);
        console.log('ADD: ' + newItem, this.collection);
        this.notifyObservers(newItem);
    },

    modifyObject: function(selection, newMsg) {
        //check if valid argument
        console.log('MODIFY: ' + selection);
        selection.msg = newMsg;
        this.notifyObservers(selection);
    },

    deleteAllObjects: function() {
        //are you sure?
        const newCollection = [];
        this.collection = newCollection;
        this.notifyObservers(newCollection);
    },

    deleteObject: function(selection) {
        //check if valid argument
        console.log('DELETE OBJECT: ' + selection);
        const newCollection = this.collection.filter(item => item !== selection);
        this.collection = newCollection;
        this.notifyObservers(selection);
        //console.log('After collection: ' + this.collection);
    }
}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCollection);

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


console.log(_trash_svg__WEBPACK_IMPORTED_MODULE_0__);

const deleteOptionsButton = document.querySelector('#delete-options-button');
const deleteOptionsButtonIcon = document.createElement('img');
deleteOptionsButtonIcon.src = _trash_svg__WEBPACK_IMPORTED_MODULE_0__;
deleteOptionsButton.appendChild(deleteOptionsButtonIcon);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteOptionsButton);


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







const renderItems = () => {

    //currently doing a full re-render on change: update to make more efficient.

    const itemList = document.querySelector('#item-list');
    const contentArea = document.querySelector('#content-area');

    if (itemList) {
        itemList.classList.add('deleted');
        setTimeout(function() {
            contentArea.removeChild(itemList);
          }, 500);

    };

    setTimeout( function() {
        
    }, 500);

    const container = document.createElement('div');
    container.id = 'item-list';
    contentArea.appendChild(container);

    let renderList = _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].collection.sort((a, b) => dayjs__WEBPACK_IMPORTED_MODULE_4___default()(a.date) - dayjs__WEBPACK_IMPORTED_MODULE_4___default()(b.date));
    renderList.forEach(item => {
        container.append(renderItemBox(item));
    })
}

const renderItemBox = (item) => {
    const itemBox = document.createElement('div');

    const itemMessage = document.createElement('p');
    itemMessage.textContent = item.msg;

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




//separate the permanent buttons from the buttons generated on refresh.

const setupInteraction = () => {
    const addItemButton = document.querySelector('#modal-popup-button');
    const addItemForm = document.querySelector('#add-item-form');
    const editItemForm = document.querySelector('#edit-item-form');
    const submitAddItemFormButton = document.querySelector('#submit-item-button');
    const submitEditItemFormbutton = document.querySelector('#edit-item-button');
    const editItemButtons = Array.from(document.querySelectorAll('.open-edit-button'));
    const clearAllButton = document.querySelector('#clear-all-button');

    
    const displayAddItem = () => {
        addItemForm.style.display = 'block';
        editItemForm.style.display = 'none';
    }
    
    const submitAddItemForm = () => {
        // add coercion and error handling here
        let messageInput = document.querySelector('#message').value;;
        let dateInput = document.querySelector('#date').value;
        _manageCollection__WEBPACK_IMPORTED_MODULE_0__["default"].addObject(messageInput, dateInput);
    }

    // const editItem = function(id) {
    //     selectedItem = itemCollection.collection.find(item => item.id == id);
    //     console.log('item selected: ' + selectedItem);
    //     editItemMsgInput.value = selectedItem.msg;
    //     editItemDateInput.value = selectedItem.date;
    //     console.log('the selected item is: ' + selectedItem + id);
    //     editItemForm.style.display = 'block';
    // }

    // const submitEditItemForm = () => {
    //     let messageInput = document.querySelector('#edit-message').value;
    //     console.log(messageInput);
    //     itemCollection.modifyObject(selectedItem, messageInput);
    // }
    
    addItemForm.addEventListener('submit', event => {
        event.preventDefault();
    });
    editItemForm.addEventListener('submit', event => {
        event.preventDefault();
    })

    // editItemButtons.forEach(item => item.addEventListener('click', function() {
    //     console.log('editItemButton fired')
    //     let id = item.dataset.id;
    //     editItem(id);
    // }));

    

    submitEditItemFormbutton.addEventListener('click', function() {
        ;(0,_edit_editItem__WEBPACK_IMPORTED_MODULE_1__.confirmEditItem)();
    });

    submitAddItemFormButton.addEventListener('click', submitAddItemForm);

    addItemButton.addEventListener('click', displayAddItem);

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




const observeCollection = {
    update: function(selection) {
        console.log('calling a re-render...');

        (0,_render_renderCollection__WEBPACK_IMPORTED_MODULE_1__["default"])();
        //setupInteraction();
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observeCollection);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFlO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUErQjtBQUN2QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRWdEO0FBQ0k7QUFDUTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRUFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL2NhbGVuZGFyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vdGltZXpvbmUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi91cGRhdGVMb2NhbGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi91dGMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jcmVhdGUvYWRkSXRlbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZGVsZXRlL2NsZWFySXRlbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZWRpdC9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZWRpdC9zZWxlY3RJdGVtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbWFuYWdlQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcmVuZGVyL2RlbGV0ZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcmVuZGVyL2dldFRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3JlbmRlci9yZW5kZXJDb2xsZWN0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9yZW5kZXIvdXNlckludGVyYWN0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy90ZXN0T2JzZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGN0YzO1xcbiAgaGVpZ2h0OiAxMjB2aDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGQTNCMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbiNoZWFkZXIgaDEge1xcbiAgY29sb3I6ICNFRERFQTQ7XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jY29udGVudC1hcmVhIHtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjb250ZW50IGNvbnRyb2xzXFxcIjtcXG59XFxuI2NvbnRlbnQtYXJlYSAjZm9vdGVyIHtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGhlaWdodDogMzB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMCU7XFxufVxcbiNjb250ZW50LWFyZWEgI2Zvb3Rlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCB3aGl0ZSAxMDAlKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4jbW9kYWwtcG9wdXAtYnV0dG9uIHtcXG4gIGNvbG9yOiAjRURERUE0O1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRkEzQjE7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogNSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMzB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNsaXN0LWNvbnRyb2xzIHtcXG4gIGdyaWQtYXJlYTogY29udHJvbHM7XFxufVxcblxcbiNkZWxldGUtYnV0dG9ucyB7XFxuICB6LWluZGV4OiA5MDAwO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4jZGVsZXRlLWJ1dHRvbnMgI2RlbGV0ZS1vcHRpb25zLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgdG9wOiAxMDBweDtcXG59XFxuI2RlbGV0ZS1idXR0b25zIGJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdBMDcyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2RlbGV0ZS1idXR0b25zIGJ1dHRvbjphY3RpdmUge1xcbiAgb3BhY2l0eTogbm9uZTtcXG59XFxuI2RlbGV0ZS1idXR0b25zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDgwJTtcXG59XFxuXFxuI2l0ZW0tbGlzdCB7XFxuICB6LWluZGV4OiAwO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxufVxcbiNpdGVtLWxpc3QgZGl2IHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjVFMkZBO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDJmciAxZnIvMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJtYWluIGJ1dHRvbnNcXFwiIFxcXCIuIGRhdGVcXFwiO1xcbn1cXG4jaXRlbS1saXN0IGRpdiBwOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuI2l0ZW0tbGlzdCBkaXYgcDpudGgtY2hpbGQoMikge1xcbiAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuI2l0ZW0tbGlzdCBkaXYgI2J1dHRvbi1ib3gge1xcbiAgZ3JpZC1hcmVhOiBidXR0b25zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbn1cXG4jaXRlbS1saXN0IGRpdiAjYnV0dG9uLWJveCBidXR0b24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGNvbG9yOiAjZjhmOWZhO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuKi5kZWxldGVkIHtcXG4gIGFuaW1hdGlvbjogZmFkZU91dCAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFpQkE7RUFDSTtJQUNFLFVBQUE7RUFoQko7RUFrQkU7SUFDRSxVQUFBO0VBaEJKO0FBQ0Y7QUFtQkE7RUFDSTtJQUNJLFVBQUE7RUFqQk47RUFtQkk7SUFDRSxVQUFBO0VBakJOO0FBQ0Y7QUFvQkE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBbEJKOztBQXFCQTtFQUNJLHNCQUFBO0FBbEJKOztBQXFCQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBM0NlO0VBNENmLGFBQUE7QUFsQko7O0FBcUJBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBdERZO0VBdURaLG1CQUFBO0VBQ0EsMENBQUE7QUFsQko7QUFtQkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWpCUjs7QUFxQkE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQ0E7QUFuQko7QUFvQkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQWxCUjtBQW9CUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSw2RUFBQTtFQUNBLFdBQUE7QUFsQlo7O0FBdUJBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkE5Rlk7RUErRlosWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXRCSjs7QUF5QkE7RUFDSSxtQkFBQTtBQXRCSjs7QUF5QkE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBdEJKO0FBdUJJO0VBRUksZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQXRCUjtBQXdCSTtFQUNJLGtCQUFBO0VBQ0EseUJBaElTO0VBaUlULFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdEJSO0FBdUJRO0VBQ0ksYUFBQTtBQXJCWjtBQXdCSTtFQUNJLGVBQUE7RUFDQSxRQUFBO0FBdEJSOztBQTJCQTtFQUNJLFVBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FBeEJKO0FBeUJJO0VBQ0ksbUJBQUE7RUFDQSx5QkFoS1U7RUFpS1YsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUNDO0FBeEJUO0FBMEJRO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUF4Qlo7QUEwQlE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXhCWjtBQTBCUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBeEJaO0FBeUJZO0VBQ0ksa0JBQUE7RUFDQSx5QkE1TEg7RUE2TEcsY0F6TEU7RUEwTEYsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXZCaEI7O0FBK0JBO0VBQ0ksNENBQUE7QUE1QkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gTGlnaHQgTW9kZSBDb2xvcnNcXHJcXG4kcHJpbWFyeS1jb2xvcjogIzBGQTNCMTtcXHJcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjQjVFMkZBO1xcclxcbiR0ZXJ0aWFyeS1jb2xvcjogI0Y3QTA3MjtcXHJcXG4kdGV4dC1jb2xvcjogIzMzMzMzMztcXHJcXG4kYmFja2dyb3VuZC1jb2xvcjogI0Y5RjdGMztcXHJcXG5cXHJcXG4vLyBEYXJrIE1vZGUgQ29sb3JzXFxyXFxuJHRleHQtY29sb3ItZGFyazogI2Y4ZjlmYTtcXHJcXG4kYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjMjEyNTI5O1xcclxcblxcclxcbi8vIERlZmF1bHQgVmFyaWFibGVzXFxyXFxuJHByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiRzZWNvbmRhcnk6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuJHRleHQ6ICR0ZXh0LWNvbG9yO1xcclxcbiRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcjtcXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgfVxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xcclxcbiAgICBoZWlnaHQ6IDEyMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICBoMSB7XFxyXFxuICAgICAgICBjb2xvcjogI0VEREVBNDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQtYXJlYSB7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJjb250ZW50IGNvbnRyb2xzXFxcIjtcXHJcXG4gICAgI2Zvb3RlciB7XFxyXFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwdmg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICBib3R0b206IDAlO1xcclxcbiAgICAgICAgLy9vcGFjaXR5OiAxMCU7XFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNTB2aDsgLy8gQ2hhbmdlIHRoaXMgdG8gYWRqdXN0IHRoZSBoZWlnaHQgb2YgdGhlIGZhZGUtb3V0IGVmZmVjdC5cXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCB3aGl0ZSAxMDAlKTtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwtcG9wdXAtYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6ICNFRERFQTQ7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiA1JTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAzMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDMwdnc7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdC1jb250cm9scyB7XFxyXFxuICAgIGdyaWQtYXJlYTogY29udHJvbHM7XFxyXFxufVxcclxcblxcclxcbiNkZWxldGUtYnV0dG9ucyB7XFxyXFxuICAgIHotaW5kZXg6IDkwMDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgI2RlbGV0ZS1vcHRpb25zLWJ1dHRvbiB7XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgICAgICB0b3A6IDEwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgcGFkZGluZzogMC44cmVtO1xcclxcbiAgICAgICAgd2lkdGg6IDIwdnc7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIHRvcDogODAlO1xcclxcblxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiNpdGVtLWxpc3Qge1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgZGl2IHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDJmciAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgICAgICAgXFxcIm1haW4gYnV0dG9uc1xcXCJcXHJcXG4gICAgICAgICBcXFwiLiBkYXRlXFxcIjtcXHJcXG4gICAgICAgIHA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgcDpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgICAgIGdyaWQtYXJlYTogZGF0ZTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI2J1dHRvbi1ib3gge1xcclxcbiAgICAgICAgICAgIGdyaWQtYXJlYTogYnV0dG9ucztcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZ2FwOiAzcHg7XFxyXFxuICAgICAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yLWRhcms7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qLmRlbGV0ZWQge1xcclxcbiAgICBhbmltYXRpb246IGZhZGVPdXQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixmPVwibW9udGhcIixoPVwicXVhcnRlclwiLGM9XCJ5ZWFyXCIsZD1cImRhdGVcIixsPVwiSW52YWxpZCBEYXRlXCIsJD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKSxvcmRpbmFsOmZ1bmN0aW9uKHQpe3ZhciBlPVtcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdLG49dCUxMDA7cmV0dXJuXCJbXCIrdCsoZVsobi0yMCklMTBdfHxlW25dfHxlWzBdKStcIl1cIn19LG09ZnVuY3Rpb24odCxlLG4pe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PWU/dDpcIlwiK0FycmF5KGUrMS1yLmxlbmd0aCkuam9pbihuKSt0fSx2PXtzOm0sejpmdW5jdGlvbih0KXt2YXIgZT0tdC51dGNPZmZzZXQoKSxuPU1hdGguYWJzKGUpLHI9TWF0aC5mbG9vcihuLzYwKSxpPW4lNjA7cmV0dXJuKGU8PTA/XCIrXCI6XCItXCIpK20ociwyLFwiMFwiKStcIjpcIittKGksMixcIjBcIil9LG06ZnVuY3Rpb24gdChlLG4pe2lmKGUuZGF0ZSgpPG4uZGF0ZSgpKXJldHVybi10KG4sZSk7dmFyIHI9MTIqKG4ueWVhcigpLWUueWVhcigpKSsobi5tb250aCgpLWUubW9udGgoKSksaT1lLmNsb25lKCkuYWRkKHIsZikscz1uLWk8MCx1PWUuY2xvbmUoKS5hZGQocisocz8tMToxKSxmKTtyZXR1cm4rKC0ocisobi1pKS8ocz9pLXU6dS1pKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24odCl7cmV0dXJue006Zix5OmMsdzpvLGQ6YSxEOmQsaDp1LG06cyxzOmksbXM6cixROmh9W3RdfHxTdHJpbmcodHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSxnPVwiZW5cIixEPXt9O0RbZ109TTt2YXIgcD1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIF99LFM9ZnVuY3Rpb24gdChlLG4scil7dmFyIGk7aWYoIWUpcmV0dXJuIGc7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBzPWUudG9Mb3dlckNhc2UoKTtEW3NdJiYoaT1zKSxuJiYoRFtzXT1uLGk9cyk7dmFyIHU9ZS5zcGxpdChcIi1cIik7aWYoIWkmJnUubGVuZ3RoPjEpcmV0dXJuIHQodVswXSl9ZWxzZXt2YXIgYT1lLm5hbWU7RFthXT1lLGk9YX1yZXR1cm4hciYmaSYmKGc9aSksaXx8IXImJmd9LHc9ZnVuY3Rpb24odCxlKXtpZihwKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgXyhuKX0sTz12O08ubD1TLE8uaT1wLE8udz1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIE0odCl7dGhpcy4kTD1TKHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCl9dmFyIG09TS5wcm90b3R5cGU7cmV0dXJuIG0ucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihPLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2goJCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy4keD10Lnh8fHt9LHRoaXMuaW5pdCgpfSxtLmluaXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRNb250aCgpLHRoaXMuJEQ9dC5nZXREYXRlKCksdGhpcy4kVz10LmdldERheSgpLHRoaXMuJEg9dC5nZXRIb3VycygpLHRoaXMuJG09dC5nZXRNaW51dGVzKCksdGhpcy4kcz10LmdldFNlY29uZHMoKSx0aGlzLiRtcz10LmdldE1pbGxpc2Vjb25kcygpfSxtLiR1dGlscz1mdW5jdGlvbigpe3JldHVybiBPfSxtLmlzVmFsaWQ9ZnVuY3Rpb24oKXtyZXR1cm4hKHRoaXMuJGQudG9TdHJpbmcoKT09PWwpfSxtLmlzU2FtZT1mdW5jdGlvbih0LGUpe3ZhciBuPXcodCk7cmV0dXJuIHRoaXMuc3RhcnRPZihlKTw9biYmbjw9dGhpcy5lbmRPZihlKX0sbS5pc0FmdGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHcodCk8dGhpcy5zdGFydE9mKGUpfSxtLmlzQmVmb3JlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZW5kT2YoZSk8dyh0KX0sbS4kZz1mdW5jdGlvbih0LGUsbil7cmV0dXJuIE8udSh0KT90aGlzW2VdOnRoaXMuc2V0KG4sdCl9LG0udW5peD1mdW5jdGlvbigpe3JldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpLzFlMyl9LG0udmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLmdldFRpbWUoKX0sbS5zdGFydE9mPWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcyxyPSEhTy51KGUpfHxlLGg9Ty5wKHQpLGw9ZnVuY3Rpb24odCxlKXt2YXIgaT1PLncobi4kdT9EYXRlLlVUQyhuLiR5LGUsdCk6bmV3IERhdGUobi4keSxlLHQpLG4pO3JldHVybiByP2k6aS5lbmRPZihhKX0sJD1mdW5jdGlvbih0LGUpe3JldHVybiBPLncobi50b0RhdGUoKVt0XS5hcHBseShuLnRvRGF0ZShcInNcIiksKHI/WzAsMCwwLDBdOlsyMyw1OSw1OSw5OTldKS5zbGljZShlKSksbil9LHk9dGhpcy4kVyxNPXRoaXMuJE0sbT10aGlzLiRELHY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpO3N3aXRjaChoKXtjYXNlIGM6cmV0dXJuIHI/bCgxLDApOmwoMzEsMTEpO2Nhc2UgZjpyZXR1cm4gcj9sKDEsTSk6bCgwLE0rMSk7Y2FzZSBvOnZhciBnPXRoaXMuJGxvY2FsZSgpLndlZWtTdGFydHx8MCxEPSh5PGc/eSs3OnkpLWc7cmV0dXJuIGwocj9tLUQ6bSsoNi1EKSxNKTtjYXNlIGE6Y2FzZSBkOnJldHVybiAkKHYrXCJIb3Vyc1wiLDApO2Nhc2UgdTpyZXR1cm4gJCh2K1wiTWludXRlc1wiLDEpO2Nhc2UgczpyZXR1cm4gJCh2K1wiU2Vjb25kc1wiLDIpO2Nhc2UgaTpyZXR1cm4gJCh2K1wiTWlsbGlzZWNvbmRzXCIsMyk7ZGVmYXVsdDpyZXR1cm4gdGhpcy5jbG9uZSgpfX0sbS5lbmRPZj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zdGFydE9mKHQsITEpfSxtLiRzZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbixvPU8ucCh0KSxoPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKSxsPShuPXt9LG5bYV09aCtcIkRhdGVcIixuW2RdPWgrXCJEYXRlXCIsbltmXT1oK1wiTW9udGhcIixuW2NdPWgrXCJGdWxsWWVhclwiLG5bdV09aCtcIkhvdXJzXCIsbltzXT1oK1wiTWludXRlc1wiLG5baV09aCtcIlNlY29uZHNcIixuW3JdPWgrXCJNaWxsaXNlY29uZHNcIixuKVtvXSwkPW89PT1hP3RoaXMuJEQrKGUtdGhpcy4kVyk6ZTtpZihvPT09Znx8bz09PWMpe3ZhciB5PXRoaXMuY2xvbmUoKS5zZXQoZCwxKTt5LiRkW2xdKCQpLHkuaW5pdCgpLHRoaXMuJGQ9eS5zZXQoZCxNYXRoLm1pbih0aGlzLiRELHkuZGF5c0luTW9udGgoKSkpLiRkfWVsc2UgbCYmdGhpcy4kZFtsXSgkKTtyZXR1cm4gdGhpcy5pbml0KCksdGhpc30sbS5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5jbG9uZSgpLiRzZXQodCxlKX0sbS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXNbTy5wKHQpXSgpfSxtLmFkZD1mdW5jdGlvbihyLGgpe3ZhciBkLGw9dGhpcztyPU51bWJlcihyKTt2YXIgJD1PLnAoaCkseT1mdW5jdGlvbih0KXt2YXIgZT13KGwpO3JldHVybiBPLncoZS5kYXRlKGUuZGF0ZSgpK01hdGgucm91bmQodCpyKSksbCl9O2lmKCQ9PT1mKXJldHVybiB0aGlzLnNldChmLHRoaXMuJE0rcik7aWYoJD09PWMpcmV0dXJuIHRoaXMuc2V0KGMsdGhpcy4keStyKTtpZigkPT09YSlyZXR1cm4geSgxKTtpZigkPT09bylyZXR1cm4geSg3KTt2YXIgTT0oZD17fSxkW3NdPWUsZFt1XT1uLGRbaV09dCxkKVskXXx8MSxtPXRoaXMuJGQuZ2V0VGltZSgpK3IqTTtyZXR1cm4gTy53KG0sdGhpcyl9LG0uc3VidHJhY3Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGQoLTEqdCxlKX0sbS5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPXRoaXMuJGxvY2FsZSgpO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm4gbi5pbnZhbGlkRGF0ZXx8bDt2YXIgcj10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIsaT1PLnoodGhpcykscz10aGlzLiRILHU9dGhpcy4kbSxhPXRoaXMuJE0sbz1uLndlZWtkYXlzLGY9bi5tb250aHMsaD1mdW5jdGlvbih0LG4saSxzKXtyZXR1cm4gdCYmKHRbbl18fHQoZSxyKSl8fGlbbl0uc2xpY2UoMCxzKX0sYz1mdW5jdGlvbih0KXtyZXR1cm4gTy5zKHMlMTJ8fDEyLHQsXCIwXCIpfSxkPW4ubWVyaWRpZW18fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9LCQ9e1lZOlN0cmluZyh0aGlzLiR5KS5zbGljZSgtMiksWVlZWTp0aGlzLiR5LE06YSsxLE1NOk8ucyhhKzEsMixcIjBcIiksTU1NOmgobi5tb250aHNTaG9ydCxhLGYsMyksTU1NTTpoKGYsYSksRDp0aGlzLiRELEREOk8ucyh0aGlzLiRELDIsXCIwXCIpLGQ6U3RyaW5nKHRoaXMuJFcpLGRkOmgobi53ZWVrZGF5c01pbix0aGlzLiRXLG8sMiksZGRkOmgobi53ZWVrZGF5c1Nob3J0LHRoaXMuJFcsbywzKSxkZGRkOm9bdGhpcy4kV10sSDpTdHJpbmcocyksSEg6Ty5zKHMsMixcIjBcIiksaDpjKDEpLGhoOmMoMiksYTpkKHMsdSwhMCksQTpkKHMsdSwhMSksbTpTdHJpbmcodSksbW06Ty5zKHUsMixcIjBcIiksczpTdHJpbmcodGhpcy4kcyksc3M6Ty5zKHRoaXMuJHMsMixcIjBcIiksU1NTOk8ucyh0aGlzLiRtcywzLFwiMFwiKSxaOml9O3JldHVybiByLnJlcGxhY2UoeSwoZnVuY3Rpb24odCxlKXtyZXR1cm4gZXx8JFt0XXx8aS5yZXBsYWNlKFwiOlwiLFwiXCIpfSkpfSxtLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxtLmRpZmY9ZnVuY3Rpb24ocixkLGwpe3ZhciAkLHk9Ty5wKGQpLE09dyhyKSxtPShNLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpKmUsdj10aGlzLU0sZz1PLm0odGhpcyxNKTtyZXR1cm4gZz0oJD17fSwkW2NdPWcvMTIsJFtmXT1nLCRbaF09Zy8zLCRbb109KHYtbSkvNjA0OGU1LCRbYV09KHYtbSkvODY0ZTUsJFt1XT12L24sJFtzXT12L2UsJFtpXT12L3QsJClbeV18fHYsbD9nOk8uYShnKX0sbS5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKGYpLiREfSxtLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gRFt0aGlzLiRMXX0sbS5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj1TKHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LG0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gTy53KHRoaXMuJGQsdGhpcyl9LG0udG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sbS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LG0udG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxtLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sTX0oKSxUPV8ucHJvdG90eXBlO3JldHVybiB3LnByb3RvdHlwZT1ULFtbXCIkbXNcIixyXSxbXCIkc1wiLGldLFtcIiRtXCIsc10sW1wiJEhcIix1XSxbXCIkV1wiLGFdLFtcIiRNXCIsZl0sW1wiJHlcIixjXSxbXCIkRFwiLGRdXS5mb3JFYWNoKChmdW5jdGlvbih0KXtUW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSksdy5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxfLHcpLHQuJGk9ITApLHd9LHcubG9jYWxlPVMsdy5pc0RheWpzPXAsdy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiB3KDFlMyp0KX0sdy5lbj1EW2ddLHcuTHM9RCx3LnA9e30sd30pKTsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLmRheWpzX3BsdWdpbl9jYWxlbmRhcj10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKGUsdCxhKXt2YXIgbj1cImg6bW0gQVwiLGQ9e2xhc3REYXk6XCJbWWVzdGVyZGF5IGF0XSBcIituLHNhbWVEYXk6XCJbVG9kYXkgYXRdIFwiK24sbmV4dERheTpcIltUb21vcnJvdyBhdF0gXCIrbixuZXh0V2VlazpcImRkZGQgW2F0XSBcIituLGxhc3RXZWVrOlwiW0xhc3RdIGRkZGQgW2F0XSBcIituLHNhbWVFbHNlOlwiTU0vREQvWVlZWVwifTt0LnByb3RvdHlwZS5jYWxlbmRhcj1mdW5jdGlvbihlLHQpe3ZhciBuPXR8fHRoaXMuJGxvY2FsZSgpLmNhbGVuZGFyfHxkLG89YShlfHx2b2lkIDApLnN0YXJ0T2YoXCJkXCIpLHM9dGhpcy5kaWZmKG8sXCJkXCIsITApLGk9XCJzYW1lRWxzZVwiLGY9czwtNj9pOnM8LTE/XCJsYXN0V2Vla1wiOnM8MD9cImxhc3REYXlcIjpzPDE/XCJzYW1lRGF5XCI6czwyP1wibmV4dERheVwiOnM8Nz9cIm5leHRXZWVrXCI6aSxsPW5bZl18fGRbZl07cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgbD9sLmNhbGwodGhpcyxhKCkpOnRoaXMuZm9ybWF0KGwpfX19KSk7IiwiIWZ1bmN0aW9uKHIsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczpyfHxzZWxmKS5kYXlqc19wbHVnaW5fcmVsYXRpdmVUaW1lPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24ocixlLHQpe3I9cnx8e307dmFyIG49ZS5wcm90b3R5cGUsbz17ZnV0dXJlOlwiaW4gJXNcIixwYXN0OlwiJXMgYWdvXCIsczpcImEgZmV3IHNlY29uZHNcIixtOlwiYSBtaW51dGVcIixtbTpcIiVkIG1pbnV0ZXNcIixoOlwiYW4gaG91clwiLGhoOlwiJWQgaG91cnNcIixkOlwiYSBkYXlcIixkZDpcIiVkIGRheXNcIixNOlwiYSBtb250aFwiLE1NOlwiJWQgbW9udGhzXCIseTpcImEgeWVhclwiLHl5OlwiJWQgeWVhcnNcIn07ZnVuY3Rpb24gaShyLGUsdCxvKXtyZXR1cm4gbi5mcm9tVG9CYXNlKHIsZSx0LG8pfXQuZW4ucmVsYXRpdmVUaW1lPW8sbi5mcm9tVG9CYXNlPWZ1bmN0aW9uKGUsbixpLGQsdSl7Zm9yKHZhciBmLGEscyxsPWkuJGxvY2FsZSgpLnJlbGF0aXZlVGltZXx8byxoPXIudGhyZXNob2xkc3x8W3tsOlwic1wiLHI6NDQsZDpcInNlY29uZFwifSx7bDpcIm1cIixyOjg5fSx7bDpcIm1tXCIscjo0NCxkOlwibWludXRlXCJ9LHtsOlwiaFwiLHI6ODl9LHtsOlwiaGhcIixyOjIxLGQ6XCJob3VyXCJ9LHtsOlwiZFwiLHI6MzV9LHtsOlwiZGRcIixyOjI1LGQ6XCJkYXlcIn0se2w6XCJNXCIscjo0NX0se2w6XCJNTVwiLHI6MTAsZDpcIm1vbnRoXCJ9LHtsOlwieVwiLHI6MTd9LHtsOlwieXlcIixkOlwieWVhclwifV0sbT1oLmxlbmd0aCxjPTA7YzxtO2MrPTEpe3ZhciB5PWhbY107eS5kJiYoZj1kP3QoZSkuZGlmZihpLHkuZCwhMCk6aS5kaWZmKGUseS5kLCEwKSk7dmFyIHA9KHIucm91bmRpbmd8fE1hdGgucm91bmQpKE1hdGguYWJzKGYpKTtpZihzPWY+MCxwPD15LnJ8fCF5LnIpe3A8PTEmJmM+MCYmKHk9aFtjLTFdKTt2YXIgdj1sW3kubF07dSYmKHA9dShcIlwiK3ApKSxhPVwic3RyaW5nXCI9PXR5cGVvZiB2P3YucmVwbGFjZShcIiVkXCIscCk6dihwLG4seS5sLHMpO2JyZWFrfX1pZihuKXJldHVybiBhO3ZhciBNPXM/bC5mdXR1cmU6bC5wYXN0O3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIE0/TShhKTpNLnJlcGxhY2UoXCIlc1wiLGEpfSxuLnRvPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIGkocixlLHRoaXMsITApfSxuLmZyb209ZnVuY3Rpb24ocixlKXtyZXR1cm4gaShyLGUsdGhpcyl9O3ZhciBkPWZ1bmN0aW9uKHIpe3JldHVybiByLiR1P3QudXRjKCk6dCgpfTtuLnRvTm93PWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLnRvKGQodGhpcykscil9LG4uZnJvbU5vdz1mdW5jdGlvbihyKXtyZXR1cm4gdGhpcy5mcm9tKGQodGhpcykscil9fX0pKTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzX3BsdWdpbl90aW1lem9uZT1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9e3llYXI6MCxtb250aDoxLGRheToyLGhvdXI6MyxtaW51dGU6NCxzZWNvbmQ6NX0sZT17fTtyZXR1cm4gZnVuY3Rpb24obixpLG8pe3ZhciByLGE9ZnVuY3Rpb24odCxuLGkpe3ZvaWQgMD09PWkmJihpPXt9KTt2YXIgbz1uZXcgRGF0ZSh0KSxyPWZ1bmN0aW9uKHQsbil7dm9pZCAwPT09biYmKG49e30pO3ZhciBpPW4udGltZVpvbmVOYW1lfHxcInNob3J0XCIsbz10K1wifFwiK2kscj1lW29dO3JldHVybiByfHwocj1uZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIse2hvdXIxMjohMSx0aW1lWm9uZTp0LHllYXI6XCJudW1lcmljXCIsbW9udGg6XCIyLWRpZ2l0XCIsZGF5OlwiMi1kaWdpdFwiLGhvdXI6XCIyLWRpZ2l0XCIsbWludXRlOlwiMi1kaWdpdFwiLHNlY29uZDpcIjItZGlnaXRcIix0aW1lWm9uZU5hbWU6aX0pLGVbb109cikscn0obixpKTtyZXR1cm4gci5mb3JtYXRUb1BhcnRzKG8pfSx1PWZ1bmN0aW9uKGUsbil7Zm9yKHZhciBpPWEoZSxuKSxyPVtdLHU9MDt1PGkubGVuZ3RoO3UrPTEpe3ZhciBmPWlbdV0scz1mLnR5cGUsbT1mLnZhbHVlLGM9dFtzXTtjPj0wJiYocltjXT1wYXJzZUludChtLDEwKSl9dmFyIGQ9clszXSxsPTI0PT09ZD8wOmQsdj1yWzBdK1wiLVwiK3JbMV0rXCItXCIrclsyXStcIiBcIitsK1wiOlwiK3JbNF0rXCI6XCIrcls1XStcIjowMDBcIixoPStlO3JldHVybihvLnV0Yyh2KS52YWx1ZU9mKCktKGgtPWglMWUzKSkvNmU0fSxmPWkucHJvdG90eXBlO2YudHo9ZnVuY3Rpb24odCxlKXt2b2lkIDA9PT10JiYodD1yKTt2YXIgbj10aGlzLnV0Y09mZnNldCgpLGk9dGhpcy50b0RhdGUoKSxhPWkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLHt0aW1lWm9uZTp0fSksdT1NYXRoLnJvdW5kKChpLW5ldyBEYXRlKGEpKS8xZTMvNjApLGY9byhhKS4kc2V0KFwibWlsbGlzZWNvbmRcIix0aGlzLiRtcykudXRjT2Zmc2V0KDE1Ki1NYXRoLnJvdW5kKGkuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSktdSwhMCk7aWYoZSl7dmFyIHM9Zi51dGNPZmZzZXQoKTtmPWYuYWRkKG4tcyxcIm1pbnV0ZVwiKX1yZXR1cm4gZi4keC4kdGltZXpvbmU9dCxmfSxmLm9mZnNldE5hbWU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy4keC4kdGltZXpvbmV8fG8udHouZ3Vlc3MoKSxuPWEodGhpcy52YWx1ZU9mKCksZSx7dGltZVpvbmVOYW1lOnR9KS5maW5kKChmdW5jdGlvbih0KXtyZXR1cm5cInRpbWV6b25lbmFtZVwiPT09dC50eXBlLnRvTG93ZXJDYXNlKCl9KSk7cmV0dXJuIG4mJm4udmFsdWV9O3ZhciBzPWYuc3RhcnRPZjtmLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXtpZighdGhpcy4keHx8IXRoaXMuJHguJHRpbWV6b25lKXJldHVybiBzLmNhbGwodGhpcyx0LGUpO3ZhciBuPW8odGhpcy5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzOlNTU1wiKSk7cmV0dXJuIHMuY2FsbChuLHQsZSkudHoodGhpcy4keC4kdGltZXpvbmUsITApfSxvLnR6PWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT1uJiZlLGE9bnx8ZXx8cixmPXUoK28oKSxhKTtpZihcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gbyh0KS50eihhKTt2YXIgcz1mdW5jdGlvbih0LGUsbil7dmFyIGk9dC02MCplKjFlMyxvPXUoaSxuKTtpZihlPT09bylyZXR1cm5baSxlXTt2YXIgcj11KGktPTYwKihvLWUpKjFlMyxuKTtyZXR1cm4gbz09PXI/W2ksb106W3QtNjAqTWF0aC5taW4obyxyKSoxZTMsTWF0aC5tYXgobyxyKV19KG8udXRjKHQsaSkudmFsdWVPZigpLGYsYSksbT1zWzBdLGM9c1sxXSxkPW8obSkudXRjT2Zmc2V0KGMpO3JldHVybiBkLiR4LiR0aW1lem9uZT1hLGR9LG8udHouZ3Vlc3M9ZnVuY3Rpb24oKXtyZXR1cm4gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lfSxvLnR6LnNldERlZmF1bHQ9ZnVuY3Rpb24odCl7cj10fX19KSk7IiwiIWZ1bmN0aW9uKGUsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5kYXlqc19wbHVnaW5fdXBkYXRlTG9jYWxlPW4oKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24oZSxuLHQpe3QudXBkYXRlTG9jYWxlPWZ1bmN0aW9uKGUsbil7dmFyIG89dC5Mc1tlXTtpZihvKXJldHVybihuP09iamVjdC5rZXlzKG4pOltdKS5mb3JFYWNoKChmdW5jdGlvbihlKXtvW2VdPW5bZV19KSksb319fSkpOyIsIiFmdW5jdGlvbih0LGkpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWkoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGkpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anNfcGx1Z2luX3V0Yz1pKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtaW51dGVcIixpPS9bKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9nLGU9LyhbKy1dfFxcZFxcZCkvZztyZXR1cm4gZnVuY3Rpb24ocyxmLG4pe3ZhciB1PWYucHJvdG90eXBlO24udXRjPWZ1bmN0aW9uKHQpe3ZhciBpPXtkYXRlOnQsdXRjOiEwLGFyZ3M6YXJndW1lbnRzfTtyZXR1cm4gbmV3IGYoaSl9LHUudXRjPWZ1bmN0aW9uKGkpe3ZhciBlPW4odGhpcy50b0RhdGUoKSx7bG9jYWxlOnRoaXMuJEwsdXRjOiEwfSk7cmV0dXJuIGk/ZS5hZGQodGhpcy51dGNPZmZzZXQoKSx0KTplfSx1LmxvY2FsPWZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcy50b0RhdGUoKSx7bG9jYWxlOnRoaXMuJEwsdXRjOiExfSl9O3ZhciBvPXUucGFyc2U7dS5wYXJzZT1mdW5jdGlvbih0KXt0LnV0YyYmKHRoaXMuJHU9ITApLHRoaXMuJHV0aWxzKCkudSh0LiRvZmZzZXQpfHwodGhpcy4kb2Zmc2V0PXQuJG9mZnNldCksby5jYWxsKHRoaXMsdCl9O3ZhciByPXUuaW5pdDt1LmluaXQ9ZnVuY3Rpb24oKXtpZih0aGlzLiR1KXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRVVENGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRVVENNb250aCgpLHRoaXMuJEQ9dC5nZXRVVENEYXRlKCksdGhpcy4kVz10LmdldFVUQ0RheSgpLHRoaXMuJEg9dC5nZXRVVENIb3VycygpLHRoaXMuJG09dC5nZXRVVENNaW51dGVzKCksdGhpcy4kcz10LmdldFVUQ1NlY29uZHMoKSx0aGlzLiRtcz10LmdldFVUQ01pbGxpc2Vjb25kcygpfWVsc2Ugci5jYWxsKHRoaXMpfTt2YXIgYT11LnV0Y09mZnNldDt1LnV0Y09mZnNldD1mdW5jdGlvbihzLGYpe3ZhciBuPXRoaXMuJHV0aWxzKCkudTtpZihuKHMpKXJldHVybiB0aGlzLiR1PzA6bih0aGlzLiRvZmZzZXQpP2EuY2FsbCh0aGlzKTp0aGlzLiRvZmZzZXQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHMmJihzPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PVwiXCIpO3ZhciBzPXQubWF0Y2goaSk7aWYoIXMpcmV0dXJuIG51bGw7dmFyIGY9KFwiXCIrc1swXSkubWF0Y2goZSl8fFtcIi1cIiwwLDBdLG49ZlswXSx1PTYwKitmWzFdKyArZlsyXTtyZXR1cm4gMD09PXU/MDpcIitcIj09PW4/dTotdX0ocyksbnVsbD09PXMpKXJldHVybiB0aGlzO3ZhciB1PU1hdGguYWJzKHMpPD0xNj82MCpzOnMsbz10aGlzO2lmKGYpcmV0dXJuIG8uJG9mZnNldD11LG8uJHU9MD09PXMsbztpZigwIT09cyl7dmFyIHI9dGhpcy4kdT90aGlzLnRvRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk6LTEqdGhpcy51dGNPZmZzZXQoKTsobz10aGlzLmxvY2FsKCkuYWRkKHUrcix0KSkuJG9mZnNldD11LG8uJHguJGxvY2FsT2Zmc2V0PXJ9ZWxzZSBvPXRoaXMudXRjKCk7cmV0dXJuIG99O3ZhciBoPXUuZm9ybWF0O3UuZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBpPXR8fCh0aGlzLiR1P1wiWVlZWS1NTS1ERFRISDptbTpzc1taXVwiOlwiXCIpO3JldHVybiBoLmNhbGwodGhpcyxpKX0sdS52YWx1ZU9mPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kdXRpbHMoKS51KHRoaXMuJG9mZnNldCk/MDp0aGlzLiRvZmZzZXQrKHRoaXMuJHguJGxvY2FsT2Zmc2V0fHx0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkpO3JldHVybiB0aGlzLiRkLnZhbHVlT2YoKS02ZTQqdH0sdS5pc1VUQz1mdW5jdGlvbigpe3JldHVybiEhdGhpcy4kdX0sdS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCl9LHUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b0RhdGUoKS50b1VUQ1N0cmluZygpfTt2YXIgbD11LnRvRGF0ZTt1LnRvRGF0ZT1mdW5jdGlvbih0KXtyZXR1cm5cInNcIj09PXQmJnRoaXMuJG9mZnNldD9uKHRoaXMuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzczpTU1NcIikpLnRvRGF0ZSgpOmwuY2FsbCh0aGlzKX07dmFyIGM9dS5kaWZmO3UuZGlmZj1mdW5jdGlvbih0LGksZSl7aWYodCYmdGhpcy4kdT09PXQuJHUpcmV0dXJuIGMuY2FsbCh0aGlzLHQsaSxlKTt2YXIgcz10aGlzLmxvY2FsKCksZj1uKHQpLmxvY2FsKCk7cmV0dXJuIGMuY2FsbChzLGYsaSxlKX19fSkpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxyXG5sZXQgY291bnRlciA9IDA7IFxyXG5cclxuY29uc3QgaXRlbUZhY3RvcnkgPSAobXNnLCBkYXRlLCBjb21wbGV0ZT1mYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgcHJvdG8gPSB7XHJcbiAgICBtc2csXHJcbiAgICBkYXRlLFxyXG4gICAgY29tcGxldGUsXHJcbiAgICBlZGl0KGlucHV0KSB7XHJcbiAgICAgICAgdGhpcy5tc2cgPSBpbnB1dDtcclxuICAgIH0sXHJcbiAgICB0b2dnbGU6ICgpID0+IGNvbnNvbGUubG9nKCd0b2dnbGUgZnVuY3Rpb24nKSxcclxuICB9XHJcbiAgICBjb25zdCBpdGVtID0ge21zZywgZGF0ZSwgY29tcGxldGUsIGlkOiBjb3VudGVyKyt9O1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG8sIGl0ZW0pO1xyXG59XHJcblxyXG5leHBvcnQge2NvdW50ZXIsIGl0ZW1GYWN0b3J5fTtcclxuIiwiaW1wb3J0IGl0ZW1Db2xsZWN0aW9uIGZyb20gXCIuLi9tYW5hZ2VDb2xsZWN0aW9uXCI7XHJcblxyXG5jb25zdCBjbGVhckl0ZW0gPSAoaWQpID0+IHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSBpdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09IGlkKTtcclxuICAgIGl0ZW1Db2xsZWN0aW9uLmRlbGV0ZU9iamVjdChzZWxlY3Rpb24pO1xyXG4gICAgY29uc29sZS5sb2coc2VsZWN0aW9uLCBpdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY2xlYXJJdGVtIH07IiwiaW1wb3J0IGl0ZW1Db2xsZWN0aW9uIGZyb20gXCIuLi9tYW5hZ2VDb2xsZWN0aW9uXCI7XHJcblxyXG5jb25zdCBlZGl0SXRlbU1zZ0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtbWVzc2FnZScpO1xyXG5jb25zdCBlZGl0SXRlbURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRhdGUnKTtcclxuY29uc3QgZWRpdEl0ZW1Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtaXRlbS1mb3JtJyk7XHJcblxyXG5cclxubGV0IHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblxyXG5jb25zdCBlZGl0SXRlbSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09IGlkKTtcclxuICAgIGNvbnNvbGUubG9nKCdpdGVtIHNlbGVjdGVkOiAnICsgc2VsZWN0ZWRJdGVtKTtcclxuICAgIGVkaXRJdGVtTXNnSW5wdXQudmFsdWUgPSBzZWxlY3RlZEl0ZW0ubXNnO1xyXG4gICAgZWRpdEl0ZW1EYXRlSW5wdXQudmFsdWUgPSBzZWxlY3RlZEl0ZW0uZGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKCd0aGUgc2VsZWN0ZWQgaXRlbSBpczogJyArIHNlbGVjdGVkSXRlbSArIGlkKTtcclxuICAgIGVkaXRJdGVtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpcm1FZGl0SXRlbSA9ICgpID0+IHtcclxuICAgIGxldCBtZXNzYWdlSW5wdXQgPSBlZGl0SXRlbU1zZ0lucHV0LnZhbHVlO1xyXG4gICAgaXRlbUNvbGxlY3Rpb24ubW9kaWZ5T2JqZWN0KHNlbGVjdGVkSXRlbSwgbWVzc2FnZUlucHV0KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGVkaXRJdGVtLCBjb25maXJtRWRpdEl0ZW0gfTsiLCJcclxuY29uc3QgZWxlbWVudFNlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1MaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1saXN0JykuY2hpbGROb2Rlcyk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0SXRlbSA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAvL3RhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChpdGVtTGlzdCkge1xyXG4gICAgICAgIGl0ZW1MaXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdEl0ZW0oaXRlbSlcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7ZWxlbWVudFNlbGVjdGlvbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7aXRlbUZhY3Rvcnl9IGZyb20gJy4vY3JlYXRlL2FkZEl0ZW0nO1xyXG5pbXBvcnQgcmVuZGVySXRlbXMgZnJvbSAnLi9yZW5kZXIvcmVuZGVyQ29sbGVjdGlvbic7XHJcbmltcG9ydCBpdGVtQ29sbGVjdGlvbiBmcm9tICcuL21hbmFnZUNvbGxlY3Rpb24nO1xyXG5pbXBvcnQgeyBzZXR1cEludGVyYWN0aW9uIH0gZnJvbSAnLi9yZW5kZXIvdXNlckludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgZWxlbWVudFNlbGVjdGlvbiB9IGZyb20gJy4vZWRpdC9zZWxlY3RJdGVtJztcclxuaW1wb3J0IGRlbGV0ZU9wdGlvbnNCdXR0b24gZnJvbSBcIi4vcmVuZGVyL2RlbGV0ZUJ1dHRvblwiO1xyXG5cclxuaXRlbUNvbGxlY3Rpb24uY29sbGVjdGlvbi5wdXNoKGl0ZW1GYWN0b3J5KCdmZWVkIHRoZSBkdWNrcycsICcyMDIzLTA0LTA5JykpO1xyXG5pdGVtQ29sbGVjdGlvbi5jb2xsZWN0aW9uLnB1c2goaXRlbUZhY3RvcnkoJ3N0YXJ0IGEgc2NoZW1lJywgJzIwMjMtMDQtMTEnKSk7XHJcbml0ZW1Db2xsZWN0aW9uLmNvbGxlY3Rpb24ucHVzaChpdGVtRmFjdG9yeShcInJvY2sgY2xpbWJpbmdcIiwgJzIwMjMtMDQtMDknKSk7XHJcbml0ZW1Db2xsZWN0aW9uLmNvbGxlY3Rpb24ucHVzaChpdGVtRmFjdG9yeSgnZm9yZXN0IGNsZWFyaW5nJywgJzIwMjItMDQtMDknKSk7XHJcbml0ZW1Db2xsZWN0aW9uLmNvbGxlY3Rpb24ucHVzaChpdGVtRmFjdG9yeSgnZGVudGlzdCcsICcyMDIzLTA0LTEyJykpO1xyXG5cclxuXHJcblxyXG5yZW5kZXJJdGVtcygpO1xyXG5zZXR1cEludGVyYWN0aW9uKCk7XHJcbmVsZW1lbnRTZWxlY3Rpb24oKTtcclxuIiwiaW1wb3J0IG9ic2VydmVDb2xsZWN0aW9uIGZyb20gXCIuL3Rlc3RPYnNlcnZlclwiO1xyXG5pbXBvcnQgeyBpdGVtRmFjdG9yeSB9IGZyb20gXCIuL2NyZWF0ZS9hZGRJdGVtXCI7XHJcblxyXG4vLyBlYWNoIG1ldGhvZCBjYW4gc2hhcmUgYSAnY2hlY2sgaWYgdmFsaWQgb2JqZWN0JyBmdW5jdGlvbi5cclxuXHJcbmNvbnN0IGl0ZW1Db2xsZWN0aW9uID0ge1xyXG4gICAgY29sbGVjdGlvbjogW10sXHJcbiAgICBvYnNlcnZlcnM6IFtvYnNlcnZlQ29sbGVjdGlvbl0sXHJcblxyXG4gICAgYWRkT2JzZXJ2ZXI6IGZ1bmN0aW9uKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGlmeU9ic2VydmVyczogZnVuY3Rpb24oc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiBvYnNlcnZlci51cGRhdGUoc2VsZWN0aW9uKSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgYWRkT2JqZWN0OiBmdW5jdGlvbihtc2csIGRhdGUpIHtcclxuICAgICAgICBjb25zdCBuZXdJdGVtID0gaXRlbUZhY3RvcnkobXNnLCBkYXRlKTtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChuZXdJdGVtKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQUREOiAnICsgbmV3SXRlbSwgdGhpcy5jb2xsZWN0aW9uKTtcclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyhuZXdJdGVtKTtcclxuICAgIH0sXHJcblxyXG4gICAgbW9kaWZ5T2JqZWN0OiBmdW5jdGlvbihzZWxlY3Rpb24sIG5ld01zZykge1xyXG4gICAgICAgIC8vY2hlY2sgaWYgdmFsaWQgYXJndW1lbnRcclxuICAgICAgICBjb25zb2xlLmxvZygnTU9ESUZZOiAnICsgc2VsZWN0aW9uKTtcclxuICAgICAgICBzZWxlY3Rpb24ubXNnID0gbmV3TXNnO1xyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKHNlbGVjdGlvbik7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGV0ZUFsbE9iamVjdHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vYXJlIHlvdSBzdXJlP1xyXG4gICAgICAgIGNvbnN0IG5ld0NvbGxlY3Rpb24gPSBbXTtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBuZXdDb2xsZWN0aW9uO1xyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKG5ld0NvbGxlY3Rpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWxldGVPYmplY3Q6IGZ1bmN0aW9uKHNlbGVjdGlvbikge1xyXG4gICAgICAgIC8vY2hlY2sgaWYgdmFsaWQgYXJndW1lbnRcclxuICAgICAgICBjb25zb2xlLmxvZygnREVMRVRFIE9CSkVDVDogJyArIHNlbGVjdGlvbik7XHJcbiAgICAgICAgY29uc3QgbmV3Q29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBzZWxlY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IG5ld0NvbGxlY3Rpb247XHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnMoc2VsZWN0aW9uKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdBZnRlciBjb2xsZWN0aW9uOiAnICsgdGhpcy5jb2xsZWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXRlbUNvbGxlY3Rpb247IiwiaW1wb3J0IHRyYXNoSWNvbiBmcm9tICcuLi90cmFzaC5zdmcnO1xyXG5cclxuY29uc29sZS5sb2codHJhc2hJY29uKTtcclxuXHJcbmNvbnN0IGRlbGV0ZU9wdGlvbnNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLW9wdGlvbnMtYnV0dG9uJyk7XHJcbmNvbnN0IGRlbGV0ZU9wdGlvbnNCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmRlbGV0ZU9wdGlvbnNCdXR0b25JY29uLnNyYyA9IHRyYXNoSWNvbjtcclxuZGVsZXRlT3B0aW9uc0J1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVPcHRpb25zQnV0dG9uSWNvbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWxldGVPcHRpb25zQnV0dG9uO1xyXG4iLCJpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXHJcbmltcG9ydCB1dGMgZnJvbSAnZGF5anMvcGx1Z2luL3V0YydcclxuaW1wb3J0IHR6IGZyb20gJ2RheWpzL3BsdWdpbi90aW1lem9uZSdcclxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tICdkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lJ1xyXG5pbXBvcnQgY2FsZW5kYXIgZnJvbSAnZGF5anMvcGx1Z2luL2NhbGVuZGFyJ1xyXG5pbXBvcnQgdXBkYXRlTG9jYWxlIGZyb20gJ2RheWpzL3BsdWdpbi91cGRhdGVMb2NhbGUnXHJcblxyXG5cclxuXHJcbmRheWpzLmV4dGVuZCh1dGMpXHJcbmRheWpzLmV4dGVuZCh0eilcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSlcclxuZGF5anMuZXh0ZW5kKGNhbGVuZGFyKVxyXG5kYXlqcy5leHRlbmQodXBkYXRlTG9jYWxlKVxyXG5cclxuXHJcblxyXG5jb25zdCB0aW1lWm9uZSA9IGRheWpzLnR6Lmd1ZXNzKClcclxuXHJcbmRheWpzLnVwZGF0ZUxvY2FsZSgnZW4nLCB7XHJcbiAgICBjYWxlbmRhcjoge1xyXG4gICAgICBsYXN0RGF5OiAnW1llc3RlcmRheV0nLFxyXG4gICAgICBzYW1lRGF5OiAnW1RvZGF5XScsXHJcbiAgICAgIG5leHREYXk6ICdbVG9tb3Jyb3ddJyxcclxuICAgICAgbGFzdFdlZWs6ICdbbGFzdF0gZGRkZCcsXHJcbiAgICAgIG5leHRXZWVrOiAnZGRkZCcsXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcblxyXG5jb25zdCBnZXRUaW1lID0gKGRhdGVzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gZGF0ZXN0cmluZztcclxuICAgIGNvbnN0IG1vZGlmaWVkID0gZGF5anMoaW5wdXQpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbW9kaWZpZWQuY2FsZW5kYXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0VGltZTsiLCJpbXBvcnQgaXRlbUNvbGxlY3Rpb24gZnJvbSAnLi4vbWFuYWdlQ29sbGVjdGlvbic7XHJcbmltcG9ydCB7IGNsZWFySXRlbSB9IGZyb20gJy4uL2RlbGV0ZS9jbGVhckl0ZW0nO1xyXG5pbXBvcnQge2VkaXRJdGVtfSBmcm9tICcuLi9lZGl0L2VkaXRJdGVtJztcclxuaW1wb3J0IGdldFRpbWUgZnJvbSAnLi9nZXRUaW1lJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuXHJcblxyXG5jb25zdCByZW5kZXJJdGVtcyA9ICgpID0+IHtcclxuXHJcbiAgICAvL2N1cnJlbnRseSBkb2luZyBhIGZ1bGwgcmUtcmVuZGVyIG9uIGNoYW5nZTogdXBkYXRlIHRvIG1ha2UgbW9yZSBlZmZpY2llbnQuXHJcblxyXG4gICAgY29uc3QgaXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1saXN0Jyk7XHJcbiAgICBjb25zdCBjb250ZW50QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LWFyZWEnKTtcclxuXHJcbiAgICBpZiAoaXRlbUxpc3QpIHtcclxuICAgICAgICBpdGVtTGlzdC5jbGFzc0xpc3QuYWRkKCdkZWxldGVkJyk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29udGVudEFyZWEucmVtb3ZlQ2hpbGQoaXRlbUxpc3QpO1xyXG4gICAgICAgICAgfSwgNTAwKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5pZCA9ICdpdGVtLWxpc3QnO1xyXG4gICAgY29udGVudEFyZWEuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgICBsZXQgcmVuZGVyTGlzdCA9IGl0ZW1Db2xsZWN0aW9uLmNvbGxlY3Rpb24uc29ydCgoYSwgYikgPT4gZGF5anMoYS5kYXRlKSAtIGRheWpzKGIuZGF0ZSkpO1xyXG4gICAgcmVuZGVyTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocmVuZGVySXRlbUJveChpdGVtKSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCByZW5kZXJJdGVtQm94ID0gKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGl0ZW1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCBpdGVtTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1NZXNzYWdlLnRleHRDb250ZW50ID0gaXRlbS5tc2c7XHJcblxyXG4gICAgY29uc3QgaXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtRGF0ZS50ZXh0Q29udGVudCA9IGdldFRpbWUoaXRlbS5kYXRlKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbkJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1dHRvbi1ib3gnKTtcclxuXHJcblxyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29wZW4tZWRpdC1idXR0b24nKTtcclxuICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaXRlbS5pZCk7XHJcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGlkID0gZWRpdEJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICBlZGl0SXRlbShpZCk7XHJcbiAgICB9KVxyXG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFRElUJztcclxuXHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpdGVtLmlkKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdERUxFVEUnO1xyXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGlkID0gZGVsZXRlQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgIGNsZWFySXRlbShpZCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIGl0ZW1Cb3guYXBwZW5kKGl0ZW1NZXNzYWdlLCBpdGVtRGF0ZSwgYnV0dG9uQm94KTtcclxuICAgIGJ1dHRvbkJveC5hcHBlbmQoZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKVxyXG4gICAgXHJcbiAgICByZXR1cm4gaXRlbUJveDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckl0ZW1zOyIsImltcG9ydCBpdGVtQ29sbGVjdGlvbiBmcm9tIFwiLi4vbWFuYWdlQ29sbGVjdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maXJtRWRpdEl0ZW0sIGVkaXRJdGVtIH0gZnJvbSBcIi4uL2VkaXQvZWRpdEl0ZW1cIjtcclxuXHJcblxyXG4vL3NlcGFyYXRlIHRoZSBwZXJtYW5lbnQgYnV0dG9ucyBmcm9tIHRoZSBidXR0b25zIGdlbmVyYXRlZCBvbiByZWZyZXNoLlxyXG5cclxuY29uc3Qgc2V0dXBJbnRlcmFjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtcG9wdXAtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBhZGRJdGVtRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1mb3JtJyk7XHJcbiAgICBjb25zdCBlZGl0SXRlbUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1pdGVtLWZvcm0nKTtcclxuICAgIGNvbnN0IHN1Ym1pdEFkZEl0ZW1Gb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1pdGVtLWJ1dHRvbicpO1xyXG4gICAgY29uc3Qgc3VibWl0RWRpdEl0ZW1Gb3JtYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtaXRlbS1idXR0b24nKTtcclxuICAgIGNvbnN0IGVkaXRJdGVtQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW4tZWRpdC1idXR0b24nKSk7XHJcbiAgICBjb25zdCBjbGVhckFsbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhci1hbGwtYnV0dG9uJyk7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBkaXNwbGF5QWRkSXRlbSA9ICgpID0+IHtcclxuICAgICAgICBhZGRJdGVtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBlZGl0SXRlbUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgc3VibWl0QWRkSXRlbUZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gYWRkIGNvZXJjaW9uIGFuZCBlcnJvciBoYW5kbGluZyBoZXJlXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJykudmFsdWU7O1xyXG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlO1xyXG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmFkZE9iamVjdChtZXNzYWdlSW5wdXQsIGRhdGVJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgZWRpdEl0ZW0gPSBmdW5jdGlvbihpZCkge1xyXG4gICAgLy8gICAgIHNlbGVjdGVkSXRlbSA9IGl0ZW1Db2xsZWN0aW9uLmNvbGxlY3Rpb24uZmluZChpdGVtID0+IGl0ZW0uaWQgPT0gaWQpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdpdGVtIHNlbGVjdGVkOiAnICsgc2VsZWN0ZWRJdGVtKTtcclxuICAgIC8vICAgICBlZGl0SXRlbU1zZ0lucHV0LnZhbHVlID0gc2VsZWN0ZWRJdGVtLm1zZztcclxuICAgIC8vICAgICBlZGl0SXRlbURhdGVJbnB1dC52YWx1ZSA9IHNlbGVjdGVkSXRlbS5kYXRlO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd0aGUgc2VsZWN0ZWQgaXRlbSBpczogJyArIHNlbGVjdGVkSXRlbSArIGlkKTtcclxuICAgIC8vICAgICBlZGl0SXRlbUZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc3Qgc3VibWl0RWRpdEl0ZW1Gb3JtID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1tZXNzYWdlJykudmFsdWU7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cobWVzc2FnZUlucHV0KTtcclxuICAgIC8vICAgICBpdGVtQ29sbGVjdGlvbi5tb2RpZnlPYmplY3Qoc2VsZWN0ZWRJdGVtLCBtZXNzYWdlSW5wdXQpO1xyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICBhZGRJdGVtRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgZWRpdEl0ZW1Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBlZGl0SXRlbUJ1dHRvbnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnZWRpdEl0ZW1CdXR0b24gZmlyZWQnKVxyXG4gICAgLy8gICAgIGxldCBpZCA9IGl0ZW0uZGF0YXNldC5pZDtcclxuICAgIC8vICAgICBlZGl0SXRlbShpZCk7XHJcbiAgICAvLyB9KSk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgc3VibWl0RWRpdEl0ZW1Gb3JtYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uZmlybUVkaXRJdGVtKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdWJtaXRBZGRJdGVtRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEFkZEl0ZW1Gb3JtKTtcclxuXHJcbiAgICBhZGRJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUFkZEl0ZW0pO1xyXG5cclxuICAgIGNsZWFyQWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaXRlbUNvbGxlY3Rpb24uZGVsZXRlQWxsT2JqZWN0cygpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHtzZXR1cEludGVyYWN0aW9ufTsiLCJpbXBvcnQgaXRlbUNvbGxlY3Rpb24gZnJvbSBcIi4vbWFuYWdlQ29sbGVjdGlvblwiO1xyXG5pbXBvcnQgcmVuZGVySXRlbXMgZnJvbSBcIi4vcmVuZGVyL3JlbmRlckNvbGxlY3Rpb25cIjtcclxuaW1wb3J0IHsgc2V0dXBJbnRlcmFjdGlvbiB9IGZyb20gXCIuL3JlbmRlci91c2VySW50ZXJhY3Rpb25cIjtcclxuXHJcbmNvbnN0IG9ic2VydmVDb2xsZWN0aW9uID0ge1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbihzZWxlY3Rpb24pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2FsbGluZyBhIHJlLXJlbmRlci4uLicpO1xyXG5cclxuICAgICAgICByZW5kZXJJdGVtcygpO1xyXG4gICAgICAgIC8vc2V0dXBJbnRlcmFjdGlvbigpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZUNvbGxlY3Rpb247Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9