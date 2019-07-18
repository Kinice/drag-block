!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DragBlock=t():e.DragBlock=t()}(window,function(){return r={},o.m=n=[function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);n(4);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(){function r(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=a(this,u(r).call(this))).target=e,t.target?(t.options=Object.assign({useDragBar:!0},n),t.targetStyles=window.getComputedStyle(e),t.target.style.left=t.targetStyles.left||"".concat(t.target.offsetLeft,"px"),t.target.style.top=t.targetStyles.top||"".concat(t.target.offsetTop,"px"),t.target.style.right="auto",t.targetLeft=parseFloat(t.targetStyles.left),t.targetTop=parseFloat(t.targetStyles.top),t.grabbing=!1,t.mouseX=0,t.mouseY=0,t.init(),t):a(t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(r,o.a),function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(r,[{key:"init",value:function(){this.options.useDragBar?this._setBar():this._setNoBarTrigger(),this._setWrapper(),this._setTrigger()}},{key:"_setBar",value:function(){var e=this._createDom("div",{id:"drag-bar",class:"drag-bar"});e.addEventListener("mousedown",this.barMousedownHandler.bind(this)),this.target.append(e),this.bar=e}},{key:"_setWrapper",value:function(){var e=this._createDom("div",{class:"drag-wrapper"});e.addEventListener("mouseup",this.wrapperMouseupHandler.bind(this)),e.addEventListener("mousemove",this.wrapperMousemoveHandler.bind(this)),e.addEventListener("mouseover",this.targetMouseoverHandler.bind(this)),document.body.append(e),this.wrapper=e}},{key:"_setTrigger",value:function(){this.target.addEventListener("mouseover",this.targetMouseoverHandler.bind(this)),this.target.addEventListener("mouseleave",this.targetMouseleaveHandler.bind(this))}},{key:"_setNoBarTrigger",value:function(){this.target.addEventListener("mousedown",this.barMousedownHandler.bind(this)),this.target.style.cursor="move"}},{key:"grab",value:function(o){var i=this;cancelAnimationFrame(this.timer),this.timer=requestAnimationFrame(function(){var e=o.screenX-i.mouseX,t=o.screenY-i.mouseY,n=i.targetLeft+e,r=i.targetTop+t;i.target.style.left="".concat(n,"px"),i.target.style.top="".concat(r,"px"),i.mouseX=o.screenX,i.mouseY=o.screenY,i.targetLeft=n,i.targetTop=r})}},{key:"barMousedownHandler",value:function(e){this.mouseX=e.screenX,this.mouseY=e.screenY,this.grabbing=!0,this.wrapper.style.display="block",this.wrapper.style["z-index"]=9999999999,this.emit("dragStart",this.target)}},{key:"wrapperMouseupHandler",value:function(e){this.grabbing=!1,this.wrapper.style.display="none",this.wrapper.style["z-index"]=1,this.emit("dragEnd",this.target)}},{key:"wrapperMousemoveHandler",value:function(e){this.grabbing&&this.grab(e)}},{key:"targetMouseoverHandler",value:function(e){this.bar&&this.bar.classList.add("show")}},{key:"targetMouseleaveHandler",value:function(e){this.bar&&this.bar.classList.remove("show")}},{key:"_createDom",value:function(e,t,n){var r=0<arguments.length&&void 0!==e?e:"div",o=1<arguments.length&&void 0!==t?t:{},i=2<arguments.length?n:void 0,s=document.createElement(r);return o&&"[object Object]"===o.toString()&&"{}"!==JSON.stringify(o)&&Object.keys(o).forEach(function(e){s.setAttribute(e,o[e])}),i&&s.append(i),s}}]),r}();window&&(window.DragBlock=l),t.default=l},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o={emitDelay:10,strictMode:!1},i=(function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(s,[{key:"_addListenner",value:function(e,t,n){if("function"!=typeof t)throw TypeError("listener must be a function");-1===this.events.indexOf(e)?(this._listeners[e]=[{once:n,fn:t}],this.events.push(e)):this._listeners[e].push({once:n,fn:t})}},{key:"on",value:function(e,t){this._addListenner(e,t,!1)}},{key:"once",value:function(e,t){this._addListenner(e,t,!0)}},{key:"off",value:function(e,n){var r,t,o=this,i=this.events.indexOf(e);e&&-1!==i&&(n?(r=[],(t=o._listeners[e]).forEach(function(e,t){e.fn===n&&r.unshift(t)}),r.forEach(function(e){t.splice(e,1)}),t.length||(o.events.splice(i,1),delete o._listeners[e])):(delete this._listeners[e],this.events.splice(i,1)))}},{key:"_applyEvents",value:function(e,n){var t=this._listeners[e];if(t&&t.length){var r=[];t.forEach(function(e,t){e.fn.apply(null,n),e.once&&r.unshift(t)}),r.forEach(function(e){t.splice(e,1)})}else if(this._strictMode)throw"No listeners specified for event: "+e}},{key:"emit",value:function(e){for(var t=this,n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this._emitDelay?setTimeout(function(){t._applyEvents.call(t,e,r)},this._emitDelay):this._applyEvents(e,r)}},{key:"emitSync",value:function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this._applyEvents(e,n)}},{key:"destroy",value:function(){this._listeners={},this.events=[]}}]),s);function s(){var e=arguments.length<=0||void 0===arguments[0]?o:arguments[0];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var t=void 0,n=void 0;t=e.hasOwnProperty("emitDelay")?e.emitDelay:o.emitDelay,this._emitDelay=t,n=e.hasOwnProperty("strictMode")?e.strictMode:o.strictMode,this._strictMode=n,this._listeners={},this.events=[]}e.exports=i},function(e,t,n){"use strict";e.exports=function(n){var a=[];return a.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}(r),i=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},a.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(var i=0;i<e.length;i++){var s=e[i];null!=s[0]&&n[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),a.push(s))}},a}},function(e,t,r){var n,o,i,u={},c=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=(i={},function(e,t){if("function"==typeof e)return e();if(void 0===i[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}i[e]=n}return i[e]}),a=null,l=0,f=[],p=r(6);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=u[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(m(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(m(r.parts[i],t));u[r.id]={id:r.id,refs:1,parts:s}}}}function h(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function v(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);0<=t&&f.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return g(t,e.attrs),v(e,t),t}function g(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function m(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=l++;n=a||(a=b(e)),r=_.bind(null,n,s,!1),o=_.bind(null,n,s,!0)}else o=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),v(e,t),t}(e),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),function(){y(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}e.exports=function(e,s){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(s=s||{}).attrs="object"==typeof s.attrs?s.attrs:{},s.singleton||"boolean"==typeof s.singleton||(s.singleton=c()),s.insertInto||(s.insertInto="head"),s.insertAt||(s.insertAt="bottom");var a=h(e,s);return d(a,s),function(e){for(var t=[],n=0;n<a.length;n++){var r=a[n];(o=u[r.id]).refs--,t.push(o)}e&&d(h(e,s),s);for(n=0;n<t.length;n++){var o;if(0===(o=t[n]).refs){for(var i=0;i<o.parts.length;i++)o.parts[i]();delete u[o.id]}}}};var w,x=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function _(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".drag-bar {\n  width: 100%;\n  height: 28px;\n  position: absolute;\n  top: -28px;\n  left: 0;\n  line-height: 28px;\n  background-color: #fff;\n  text-align: center;\n  box-shadow: 0 -4px 10px 1px #eee;\n  cursor: move;\n  opacity: 0;\n  transition: opacity 0.3s linear;\n}\n.drag-bar:after {\n  content: '';\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border: 1px solid #666;\n  border-radius: 50%;\n}\n.drag-bar.show {\n  opacity: 1;\n}\n.drag-wrapper {\n  width: 100vw;\n  height: 100vh;\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 999999;\n  cursor: move;\n}\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,i=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(n=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}}],o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0);function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r});