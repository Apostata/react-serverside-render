!function(e){function r(r){for(var t,o,s=r[0],c=r[1],l=r[2],p=0,d=[];p<s.length;p++)o=s[p],a[o]&&d.push(a[o][0]),a[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(u&&u(r);d.length;)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,r=0;r<i.length;r++){for(var n,o=i[r],s=!0,c=1;c<o.length;c++)n=o[c],0!==a[n]&&(s=!1);s&&(i.splice(r--,1),e=t(t.s=o[0]))}return e}function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={},a={1:0},i=[];t.m=e,t.c=o,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=r,s=s.slice();for(var l=0;l<s.length;l++)r(s[l]);var u=c;i.push([111,0]),n()}({103:function(e,r,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function t(e){a.default.render(o.default.createElement(s.AppContainer,null,o.default.createElement(e,{heading:c.default.heading,content:c.default.bioText})),document.getElementById("react-root"))}var o=r(n(15)),a=r(n(101)),i=r(n(93)),s=n(2),c=r(n(47));(function(){var r=n(2).enterModule;r&&r(e)})(),t(i.default),function(){var r=n(2).default,o=n(2).leaveModule;r&&(r.register(t,"render","C:/Dev/Rene/webpack4-course/serverside-rendering/src/app.js"),o(e))}()}).call(this,n(46)(e))},104:function(e,r,n){e.exports=n.p+"images/link.jpg"},108:function(e,r,n){(e.exports=n(107)(!0)).push([e.i,"body {\n  margin: 0;\n  background: #444; }\n\n.profile {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  flex-flow: column; }\n  .profile img {\n    border-radius: 100%;\n    width: 300px;\n    box-shadow: 0 0 20px black; }\n  .profile > h1 {\n    color: white;\n    font-family: sans-serif;\n    text-shadow: 0 0 20px black; }\n  .profile a {\n    color: white;\n    padding: 10px 20px;\n    cursor: pointer; }\n\n.content {\n  background-color: #ffffe0;\n  box-shadow: 0 0 20px black;\n  font-family: sans-serif;\n  line-height: 1.5em;\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 20px;\n  border-radius: 10px; }\n\na {\n  color: white;\n  padding: 10px 20px;\n  cursor: pointer;\n  margin-top: 1px; }\n","",{version:3,sources:["C:/Dev/Rene/webpack4-course/serverside-rendering/src/src/main.scss","C:/Dev/Rene/webpack4-course/serverside-rendering/src/src/profile.scss","C:/Dev/Rene/webpack4-course/serverside-rendering/src/src/content.scss","C:/Dev/Rene/webpack4-course/serverside-rendering/src/src/nav.scss"],names:[],mappings:"AAAA;EACI,UAAS;EACT,iBAAgB,EACnB;;ACHD;EACI,cAAa;EACb,oBAAmB;EACnB,wBAAuB;EACvB,cAAa;EACb,kBAAiB,EAmBpB;EAxBD;IAQQ,oBAAmB;IACnB,aAAY;IACZ,2BAA0B,EAC7B;EAXL;IAcQ,aAAY;IACZ,wBAAuB;IACvB,4BAA2B,EAC9B;EAjBL;IAoBQ,aAAY;IACZ,mBAAkB;IAClB,gBAAe,EAClB;;ACvBL;EACE,0BAAyB;EACzB,2BAA0B;EAC1B,wBAAuB;EACvB,mBAAkB;EAClB,iBAAgB;EAChB,eAAc;EACd,cAAa;EACb,oBAAmB,EACpB;;ACTD;EACI,aAAY;EACZ,mBAAkB;EAClB,gBAAe;EACf,gBAAe,EAClB",file:"main.scss",sourcesContent:["body{\r\n    margin: 0;\r\n    background: #444;\r\n}\r\n\r\n@import 'profile.scss';\r\n@import 'content.scss';\r\n@import 'nav.scss';",".profile{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100vh;\r\n    flex-flow: column;\r\n\r\n    img{\r\n        border-radius: 100%;\r\n        width: 300px;\r\n        box-shadow: 0 0 20px black;\r\n    }\r\n    \r\n    & > h1{\r\n        color: white;\r\n        font-family: sans-serif;\r\n        text-shadow: 0 0 20px black;\r\n    }\r\n    \r\n    a{\r\n        color: white;\r\n        padding: 10px 20px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n",".content {\r\n  background-color: #ffffe0;\r\n  box-shadow: 0 0 20px black;\r\n  font-family: sans-serif;\r\n  line-height: 1.5em;\r\n  max-width: 720px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}","a{\r\n    color: white;\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n    margin-top: 1px;\r\n}"],sourceRoot:""}])},109:function(e,r,n){var t=n(108);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(106)(t,o),t.locals&&(e.exports=t.locals)},110:function(e,r,n){"use strict";n(109),n(104),n(103),console.log("Ambiente de production")},111:function(e,r,n){e.exports=n(110)},47:function(e){"use strict";e.exports={heading:"Link's New Journal",bioText:"Hello, welcome to my journal"}},93:function(module,exports,__webpack_require__){"use strict";(function(module){function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _getPrototypeOf=__webpack_require__(92),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(87),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(86),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(82),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(56),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__(15),_react2=_interopRequireDefault(_react),a;a=__webpack_require__(2).enterModule,a&&a(module);var AppRoot=function(_React$Component){function AppRoot(e){(0,_classCallCheck3.default)(this,AppRoot);var r=(0,_possibleConstructorReturn3.default)(this,(AppRoot.__proto__||(0,_getPrototypeOf2.default)(AppRoot)).call(this,e));return r.state={},r}return(0,_inherits3.default)(AppRoot,_React$Component),(0,_createClass3.default)(AppRoot,[{key:"render",value:function(){return _react2.default.createElement("div",{className:"profile"},_react2.default.createElement("img",{src:""}),_react2.default.createElement("h1",null,"Title"),_react2.default.createElement("h2",null,"autor"),_react2.default.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:"<h1>Heading</h1>"}}))}},{key:"__reactstandin__regenerateByEval",value:function(key,code){this[key]=eval(code)}}]),AppRoot}(_react2.default.Component),_default=AppRoot;exports.default=_default,function(){var e=__webpack_require__(2).default,r=__webpack_require__(2).leaveModule;e&&(e.register(AppRoot,"AppRoot","C:/Dev/Rene/webpack4-course/serverside-rendering/src/components/AppRoot.js"),e.register(_default,"default","C:/Dev/Rene/webpack4-course/serverside-rendering/src/components/AppRoot.js"),r(module))}()}).call(this,__webpack_require__(46)(module))}});