!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},r.parcelRequired7c6=a),a.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),a.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("ke5Oc",(function(e,t){"use strict";var r=a("c4C4W"),n=a("lGmLA"),i=a("9jbh3"),o=a("knWMA");var s=function e(t){var a=new i(t),s=n(i.prototype.request,a);return r.extend(s,i.prototype,a),r.extend(s,a),s.create=function(r){return e(o(t,r))},s}(a("c74ni"));s.Axios=i,s.CanceledError=a("dW1zJ"),s.CancelToken=a("77MZz"),s.isCancel=a("lXDKh"),s.VERSION=a("kLR29").version,s.toFormData=a("12Kat"),s.AxiosError=a("5TB86"),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=a("9BdDr"),s.isAxiosError=a("kv87N"),e.exports=s,e.exports.default=s})),a.register("c4C4W",(function(e,t){"use strict";var r,n=a("lGmLA"),i=Object.prototype.toString,o=(r=Object.create(null),function(e){var t=i.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return o(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var l=s("ArrayBuffer");function f(e){return null!==e&&"object"==typeof e}function h(e){if("object"!==o(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var p=s("Date"),d=s("File"),v=s("Blob"),m=s("FileList");function g(e){return"[object Function]"===i.call(e)}var y=s("URLSearchParams");function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var _,w=(_="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return _&&e instanceof _});e.exports={isArray:u,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||g(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:f,isPlainObject:h,isUndefined:c,isDate:p,isFile:d,isBlob:v,isFunction:g,isStream:function(e){return f(e)&&g(e.pipe)},isURLSearchParams:y,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:b,merge:function e(){var t={};function r(r,n){h(t[n])&&h(r)?t[n]=e(t[n],r):h(r)?t[n]=e({},r):u(r)?t[n]=r.slice():t[n]=r}for(var n=0,i=arguments.length;n<i;n++)b(arguments[n],r);return t},extend:function(e,t,r){return b(t,(function(t,i){e[i]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r){var n,i,a,o={};t=t||{};do{for(i=(n=Object.getOwnPropertyNames(e)).length;i-- >0;)o[a=n[i]]||(t[a]=e[a],o[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:o,kindOfTest:s,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},isTypedArray:w,isFileList:m}})),a.register("lGmLA",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}})),a.register("9jbh3",(function(e,t){"use strict";var r=a("c4C4W"),n=a("6d5Pb"),i=a("JRZh2"),o=a("k04r0"),s=a("knWMA"),u=a("gYMA1"),c=a("9SeBc"),l=c.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&c.assertOptions(r,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var a,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var f=[o,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(u),a=Promise.resolve(t);f.length;)a=a.then(f.shift(),f.shift());return a}for(var h=t;n.length;){var p=n.shift(),d=n.shift();try{h=p(h)}catch(e){d(e);break}}try{a=o(h)}catch(e){return Promise.reject(e)}for(;u.length;)a=a.then(u.shift(),u.shift());return a},f.prototype.getUri=function(e){e=s(this.defaults,e);var t=u(e.baseURL,e.url);return n(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t,data:(r||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,i){return this.request(s(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)})),e.exports=f})),a.register("6d5Pb",(function(e,t){"use strict";var r=a("c4C4W");function n(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var a;if(i)a=i(t);else if(r.isURLSearchParams(t))a=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(n(t)+"="+n(e))})))})),a=o.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}})),a.register("JRZh2",(function(e,t){"use strict";var r=a("c4C4W");function n(){this.handlers=[]}n.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=n})),a.register("k04r0",(function(e,t){"use strict";var r=a("c4C4W"),n=a("jrAxF"),i=a("lXDKh"),o=a("c74ni"),s=a("dW1zJ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=n.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return u(e),t.data=n.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=n.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),a.register("jrAxF",(function(e,t){"use strict";var r=a("c4C4W"),n=a("c74ni");e.exports=function(e,t,i){var a=this||n;return r.forEach(i,(function(r){e=r.call(a,e,t)})),e}})),a.register("c74ni",(function(e,t){"use strict";var r=a("6qd2L"),n=a("c4C4W"),i=a("h8JMh"),o=a("5TB86"),s=a("gWbUy"),u=a("12Kat"),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var f,h={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==r&&"[object process]"===Object.prototype.toString.call(r))&&(f=a("btSY7")),f),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e))return e;if(n.isArrayBufferView(e))return e.buffer;if(n.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r,a=n.isObject(e),o=t&&t["Content-Type"];if((r=n.isFileList(e))||a&&"multipart/form-data"===o){var s=this.env&&this.env.FormData;return u(r?{"files[]":e}:e,s&&new s)}return a||"application/json"===o?(l(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||h.transitional,r=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,a=!r&&"json"===this.responseType;if(a||i&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(a){if("SyntaxError"===e.name)throw o.from(e,o.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:a("beknR")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){h.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){h.headers[e]=n.merge(c)})),e.exports=h})),a.register("6qd2L",(function(e,t){var r,n,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var e=s(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||l||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),a.register("h8JMh",(function(e,t){"use strict";var r=a("c4C4W");e.exports=function(e,t){r.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}})),a.register("5TB86",(function(e,t){"use strict";var r=a("c4C4W");function n(e,t,r,n,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}r.inherits(n,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=n.prototype,o={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){o[e]={value:e}})),Object.defineProperties(n,o),Object.defineProperty(i,"isAxiosError",{value:!0}),n.from=function(e,t,a,o,s,u){var c=Object.create(i);return r.toFlatObject(e,c,(function(e){return e!==Error.prototype})),n.call(c,e.message,t,a,o,s),c.name=e.name,u&&Object.assign(c,u),c},e.exports=n})),a.register("gWbUy",(function(e,t){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),a.register("12Kat",(function(e,t){"use strict";var r=a("3aNd6").Buffer,n=a("c4C4W");e.exports=function(e,t){t=t||new FormData;var i=[];function a(e){return null===e?"":n.isDate(e)?e.toISOString():n.isArrayBuffer(e)||n.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):r.from(e):e}return function e(r,o){if(n.isPlainObject(r)||n.isArray(r)){if(-1!==i.indexOf(r))throw Error("Circular reference detected in "+o);i.push(r),n.forEach(r,(function(r,i){if(!n.isUndefined(r)){var s,u=o?o+"."+i:i;if(r&&!o&&"object"==typeof r)if(n.endsWith(i,"{}"))r=JSON.stringify(r);else if(n.endsWith(i,"[]")&&(s=n.toArray(r)))return void s.forEach((function(e){!n.isUndefined(e)&&t.append(u,a(e))}));e(r,u)}})),i.pop()}else t.append(o,a(r))}(e),t}})),a.register("3aNd6",(function(r,n){t(r.exports,"Buffer",(function(){return i}),(function(e){return i=e})),t(r.exports,"INSPECT_MAX_BYTES",(function(){return o}),(function(e){return o=e}));var i,o,s=a("ds8z5"),u=a("8MBJY"),c=a("a2hTj"),l=a("eYQtU"),f=a("l5bVx"),h=a("2MbLg"),p=a("5d11t"),d=a("7rddL"),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=y,o=50;var m=2147483647;function g(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,y.prototype),t}function y(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return b(e,t,r)}function b(t,r,n){if("string"==typeof t)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!y.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=0|I(e,t),n=g(r),i=n.write(e,t);i!==r&&(n=n.slice(0,i));return n}(t,r);if(ArrayBuffer.isView(t))return function(e){if(ae(e,Uint8Array)){var t=new Uint8Array(e);return x(t.buffer,t.byteOffset,t.byteLength)}return k(e)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===t?"undefined":e(f)(t)));if(ae(t,ArrayBuffer)||t&&ae(t.buffer,ArrayBuffer))return x(t,r,n);if("undefined"!=typeof SharedArrayBuffer&&(ae(t,SharedArrayBuffer)||t&&ae(t.buffer,SharedArrayBuffer)))return x(t,r,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return y.from(i,r,n);var a=function(e){if(y.isBuffer(e)){var t=0|E(e.length),r=g(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||oe(e.length)?g(0):k(e);if("Buffer"===e.type&&Array.isArray(e.data))return k(e.data)}(t);if(a)return a;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return y.from(t[Symbol.toPrimitive]("string"),r,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===t?"undefined":e(f)(t)))}function _(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function w(e){return _(e),g(e<0?0:0|E(e))}function k(e){for(var t=e.length<0?0:0|E(e.length),r=g(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function x(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,y.prototype),n}function E(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return 0|e}function I(t,r){if(y.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||ae(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===t?"undefined":e(f)(t)));var n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var a=!1;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return re(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ne(t).length;default:if(a)return i?-1:re(t).length;r=(""+r).toLowerCase(),a=!0}}function T(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return F(this,t,r);case"utf8":case"utf-8":return D(this,t,r);case"ascii":return U(this,t,r);case"latin1":case"binary":return j(this,t,r);case"base64":return M(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return H(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function S(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function O(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),oe(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=y.from(t,n)),y.isBuffer(t))return 0===t.length?-1:R(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):R(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function R(e,t,r,n,i){var a,o=1,s=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;o=2,s/=2,u/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var l=-1;for(a=r;a<s;a++)if(c(e,a)===c(t,-1===l?0:a-l)){if(-1===l&&(l=a),a-l+1===u)return l*o}else-1!==l&&(a-=a-l),l=-1}else for(r+u>s&&(r=s-u),a=r;a>=0;a--){for(var f=!0,h=0;h<u;h++)if(c(e,a+h)!==c(t,h)){f=!1;break}if(f)return a}return-1}function P(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var a,o=t.length;for(n>o/2&&(n=o/2),a=0;a<n;++a){var s=parseInt(t.substr(2*a,2),16);if(oe(s))return a;e[r+a]=s}return a}function A(e,t,r,n){return ie(re(t,e.length-r),e,r,n)}function C(e,t,r,n){return ie(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function L(e,t,r,n){return ie(ne(t),e,r,n)}function N(e,t,r,n){return ie(function(e,t){for(var r,n,i,a=[],o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,i=r%256,a.push(i),a.push(n);return a}(t,e.length-r),e,r,n)}function M(e,t,r){return 0===t&&r===e.length?p.fromByteArray(e):p.fromByteArray(e.slice(t,r))}function D(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var a=e[i],o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s<=r){var u=void 0,c=void 0,l=void 0,f=void 0;switch(s){case 1:a<128&&(o=a);break;case 2:128==(192&(u=e[i+1]))&&(f=(31&a)<<6|63&u)>127&&(o=f);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(f=(15&a)<<12|(63&u)<<6|63&c)>2047&&(f<55296||f>57343)&&(o=f);break;case 4:u=e[i+1],c=e[i+2],l=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&l)&&(f=(15&a)<<18|(63&u)<<12|(63&c)<<6|63&l)>65535&&f<1114112&&(o=f)}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(e){var t=e.length;if(t<=B)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=B));return r}(n)}y.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),y.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(y.prototype,"parent",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.buffer}}),Object.defineProperty(y.prototype,"offset",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.byteOffset}}),y.poolSize=8192,y.from=function(e,t,r){return b(e,t,r)},Object.setPrototypeOf(y.prototype,Uint8Array.prototype),Object.setPrototypeOf(y,Uint8Array),y.alloc=function(e,t,r){return function(e,t,r){return _(e),e<=0?g(e):void 0!==t?"string"==typeof r?g(e).fill(t,r):g(e).fill(t):g(e)}(e,t,r)},y.allocUnsafe=function(e){return w(e)},y.allocUnsafeSlow=function(e){return w(e)},y.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==y.prototype},y.compare=function(e,t){if(ae(e,Uint8Array)&&(e=y.from(e,e.offset,e.byteLength)),ae(t,Uint8Array)&&(t=y.from(t,t.offset,t.byteLength)),!y.isBuffer(e)||!y.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,a=Math.min(r,n);i<a;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},y.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},y.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return y.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=y.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var a=e[r];if(ae(a,Uint8Array))i+a.length>n.length?(y.isBuffer(a)||(a=y.from(a)),a.copy(n,i)):Uint8Array.prototype.set.call(n,a,i);else{if(!y.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,i)}i+=a.length}return n},y.byteLength=I,y.prototype._isBuffer=!0,y.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)S(this,t,t+1);return this},y.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)S(this,t,t+3),S(this,t+1,t+2);return this},y.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)S(this,t,t+7),S(this,t+1,t+6),S(this,t+2,t+5),S(this,t+3,t+4);return this},y.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?D(this,0,e):T.apply(this,arguments)},y.prototype.toLocaleString=y.prototype.toString,y.prototype.equals=function(e){if(!y.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===y.compare(this,e)},y.prototype.inspect=function(){var e="",t=o;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(y.prototype[v]=y.prototype.inspect),y.prototype.compare=function(t,r,n,i,a){if(ae(t,Uint8Array)&&(t=y.from(t,t.offset,t.byteLength)),!y.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===t?"undefined":e(f)(t)));if(void 0===r&&(r=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===a&&(a=this.length),r<0||n>t.length||i<0||a>this.length)throw new RangeError("out of range index");if(i>=a&&r>=n)return 0;if(i>=a)return-1;if(r>=n)return 1;if(this===t)return 0;for(var o=(a>>>=0)-(i>>>=0),s=(n>>>=0)-(r>>>=0),u=Math.min(o,s),c=this.slice(i,a),l=t.slice(r,n),h=0;h<u;++h)if(c[h]!==l[h]){o=c[h],s=l[h];break}return o<s?-1:s<o?1:0},y.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},y.prototype.indexOf=function(e,t,r){return O(this,e,t,r,!0)},y.prototype.lastIndexOf=function(e,t,r){return O(this,e,t,r,!1)},y.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return P(this,e,t,r);case"utf8":case"utf-8":return A(this,e,t,r);case"ascii":case"latin1":case"binary":return C(this,e,t,r);case"base64":return L(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,e,t,r);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}},y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var B=4096;function U(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function j(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function F(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",a=t;a<r;++a)i+=se[e[a]];return i}function H(e,t,r){for(var n=e.slice(t,r),i="",a=0;a<n.length-1;a+=2)i+=String.fromCharCode(n[a]+256*n[a+1]);return i}function q(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function V(e,t,r,n,i,a){if(!y.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<a)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function z(e,t,r,n,i){Q(t,n,i,e,r,7);var a=Number(t&BigInt(4294967295));e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a;var o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function W(e,t,r,n,i){Q(t,n,i,e,r,7);var a=Number(t&BigInt(4294967295));e[r+7]=a,a>>=8,e[r+6]=a,a>>=8,e[r+5]=a,a>>=8,e[r+4]=a;var o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function J(e,t,r,n,i,a){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function G(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,4),d.write(e,t,r,n,23,4),r+4}function K(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,8),d.write(e,t,r,n,52,8),r+8}y.prototype.slice=function(e,t){var r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,y.prototype),n},y.prototype.readUintLE=y.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||q(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return n},y.prototype.readUintBE=y.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||q(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},y.prototype.readUint8=y.prototype.readUInt8=function(e,t){return e>>>=0,t||q(e,1,this.length),this[e]},y.prototype.readUint16LE=y.prototype.readUInt16LE=function(e,t){return e>>>=0,t||q(e,2,this.length),this[e]|this[e+1]<<8},y.prototype.readUint16BE=y.prototype.readUInt16BE=function(e,t){return e>>>=0,t||q(e,2,this.length),this[e]<<8|this[e+1]},y.prototype.readUint32LE=y.prototype.readUInt32LE=function(e,t){return e>>>=0,t||q(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},y.prototype.readUint32BE=y.prototype.readUInt32BE=function(e,t){return e>>>=0,t||q(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},y.prototype.readBigUInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24),i=this[++e]+256*this[++e]+65536*this[++e]+r*Math.pow(2,24);return BigInt(n)+(BigInt(i)<<BigInt(32))})),y.prototype.readBigUInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t*Math.pow(2,24)+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),y.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||q(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},y.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||q(e,t,this.length);for(var n=t,i=1,a=this[e+--n];n>0&&(i*=256);)a+=this[e+--n]*i;return a>=(i*=128)&&(a-=Math.pow(2,8*t)),a},y.prototype.readInt8=function(e,t){return e>>>=0,t||q(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},y.prototype.readInt16LE=function(e,t){e>>>=0,t||q(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},y.prototype.readInt16BE=function(e,t){e>>>=0,t||q(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},y.prototype.readInt32LE=function(e,t){return e>>>=0,t||q(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},y.prototype.readInt32BE=function(e,t){return e>>>=0,t||q(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},y.prototype.readBigInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24))})),y.prototype.readBigInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r)})),y.prototype.readFloatLE=function(e,t){return e>>>=0,t||q(e,4,this.length),d.read(this,e,!0,23,4)},y.prototype.readFloatBE=function(e,t){return e>>>=0,t||q(e,4,this.length),d.read(this,e,!1,23,4)},y.prototype.readDoubleLE=function(e,t){return e>>>=0,t||q(e,8,this.length),d.read(this,e,!0,52,8)},y.prototype.readDoubleBE=function(e,t){return e>>>=0,t||q(e,8,this.length),d.read(this,e,!1,52,8)},y.prototype.writeUintLE=y.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||V(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},y.prototype.writeUintBE=y.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||V(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},y.prototype.writeUint8=y.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,1,255,0),this[t]=255&e,t+1},y.prototype.writeUint16LE=y.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},y.prototype.writeUint16BE=y.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},y.prototype.writeUint32LE=y.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},y.prototype.writeUint32BE=y.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},y.prototype.writeBigUInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return z(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),y.prototype.writeBigUInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return W(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),y.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);V(this,e,t,r,i-1,-i)}var a=0,o=1,s=0;for(this[t]=255&e;++a<r&&(o*=256);)e<0&&0===s&&0!==this[t+a-1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},y.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);V(this,e,t,r,i-1,-i)}var a=r-1,o=1,s=0;for(this[t+a]=255&e;--a>=0&&(o*=256);)e<0&&0===s&&0!==this[t+a+1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},y.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},y.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},y.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},y.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},y.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},y.prototype.writeBigInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return z(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),y.prototype.writeBigInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return W(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),y.prototype.writeFloatLE=function(e,t,r){return G(this,e,t,!0,r)},y.prototype.writeFloatBE=function(e,t,r){return G(this,e,t,!1,r)},y.prototype.writeDoubleLE=function(e,t,r){return K(this,e,t,!0,r)},y.prototype.writeDoubleBE=function(e,t,r){return K(this,e,t,!1,r)},y.prototype.copy=function(e,t,r,n){if(!y.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},y.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!y.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){var i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var a;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(a=t;a<r;++a)this[a]=e;else{var o=y.isBuffer(e)?e:y.from(e,n),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<r-t;++a)this[a+t]=o[a%s]}return this};var Y={};function X(t,r,n){Y[t]=function(n){e(l)(a,n);var i=e(h)(a);function a(){var n;return e(u)(this,a),n=i.call(this),Object.defineProperty(e(s)(n),"message",{value:r.apply(e(s)(n),arguments),writable:!0,configurable:!0}),n.name="".concat(n.name," [").concat(t,"]"),n.stack,delete n.name,n}return e(c)(a,[{key:"code",get:function(){return t},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(t,"]: ").concat(this.message)}}]),a}(n)}function $(e){for(var t="",r=e.length,n="-"===e[0]?1:0;r>=n+4;r-=3)t="_".concat(e.slice(r-3,r)).concat(t);return"".concat(e.slice(0,r)).concat(t)}function Q(t,r,n,i,a,o){if(t>n||t<r){var s,u="bigint"===(void 0===r?"undefined":e(f)(r))?"n":"";throw s=o>3?0===r||r===BigInt(0)?">= 0".concat(u," and < 2").concat(u," ** ").concat(8*(o+1)).concat(u):">= -(2".concat(u," ** ").concat(8*(o+1)-1).concat(u,") and < 2 ** ")+"".concat(8*(o+1)-1).concat(u):">= ".concat(r).concat(u," and <= ").concat(n).concat(u),new Y.ERR_OUT_OF_RANGE("value",s,t)}!function(e,t,r){Z(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||ee(t,e.length-(r+1))}(i,a,o)}function Z(e,t){if("number"!=typeof e)throw new Y.ERR_INVALID_ARG_TYPE(t,"number",e)}function ee(e,t,r){if(Math.floor(e)!==e)throw Z(e,r),new Y.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new Y.ERR_BUFFER_OUT_OF_BOUNDS;throw new Y.ERR_OUT_OF_RANGE(r||"offset",">= ".concat(r?1:0," and <= ").concat(t),e)}X("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),X("ERR_INVALID_ARG_TYPE",(function(t,r){return'The "'.concat(t,'" argument must be of type number. Received type ').concat(void 0===r?"undefined":e(f)(r))}),TypeError),X("ERR_OUT_OF_RANGE",(function(t,r,n){var i='The value of "'.concat(t,'" is out of range.'),a=n;return Number.isInteger(n)&&Math.abs(n)>Math.pow(2,32)?a=$(String(n)):"bigint"===(void 0===n?"undefined":e(f)(n))&&(a=String(n),(n>Math.pow(BigInt(2),BigInt(32))||n<-Math.pow(BigInt(2),BigInt(32)))&&(a=$(a)),a+="n"),i+=" It must be ".concat(r,". Received ").concat(a)}),RangeError);var te=/[^+/0-9A-Za-z-_]/g;function re(e,t){var r;t=t||1/0;for(var n=e.length,i=null,a=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&a.push(239,191,189);continue}if(o+1===n){(t-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&a.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return a}function ne(e){return p.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ie(e,t,r,n){var i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function ae(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function oe(e){return e!=e}var se=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();function ue(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n.default(e,t)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r}})),a.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=r.default();return function(){var r,a=n.default(e);if(t){var o=n.default(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return i.default(this,r)}};var r=o(a("aTHs7")),n=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=i(a("ds8z5")),n=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("5d11t",(function(e,r){var n,i;t(e.exports,"toByteArray",(function(){return n}),(function(e){return n=e})),t(e.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),n=function(e){var t,r,n=f(e),i=n[0],a=n[1],u=new s(function(e,t,r){return 3*(t+r)/4-r}(0,i,a)),c=0,l=a>0?i-4:i;for(r=0;r<l;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===a&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,u[c++]=255&t);1===a&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,r=e.length,n=r%3,i=[],o=16383,s=0,u=r-n;s<u;s+=o)i.push(h(e,s,s+o>u?u:s+o));1===n?(t=e[r-1],i.push(a[t>>2]+a[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],i.push(a[t>>10]+a[t>>4&63]+a[t<<2&63]+"="));return i.join("")};for(var a=[],o=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)a[c]=u[c],o[u.charCodeAt(c)]=c;function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function h(e,t,r){for(var n,i,o=[],s=t;s<r;s+=3)n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(a[(i=n)>>18&63]+a[i>>12&63]+a[i>>6&63]+a[63&i]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),a.register("7rddL",(function(e,r){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var n,i;t(e.exports,"read",(function(){return n}),(function(e){return n=e})),t(e.exports,"write",(function(){return i}),(function(e){return i=e})),n=function(e,t,r,n,i){var a,o,s=8*i-n-1,u=(1<<s)-1,c=u>>1,l=-7,f=r?i-1:0,h=r?-1:1,p=e[t+f];for(f+=h,a=p&(1<<-l)-1,p>>=-l,l+=s;l>0;a=256*a+e[t+f],f+=h,l-=8);for(o=a&(1<<-l)-1,a>>=-l,l+=n;l>0;o=256*o+e[t+f],f+=h,l-=8);if(0===a)a=1-c;else{if(a===u)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,n),a-=c}return(p?-1:1)*o*Math.pow(2,a-n)},i=function(e,t,r,n,i,a){var o,s,u,c=8*a-i-1,l=(1<<c)-1,f=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:a-1,d=n?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-o))<1&&(o--,u*=2),(t+=o+f>=1?h/u:h*Math.pow(2,1-f))*u>=2&&(o++,u/=2),o+f>=l?(s=0,o=l):o+f>=1?(s=(t*u-1)*Math.pow(2,i),o+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,i),o=0));i>=8;e[r+p]=255&s,p+=d,s/=256,i-=8);for(o=o<<i|s,c+=i;c>0;e[r+p]=255&o,p+=d,o/=256,c-=8);e[r+p-d]|=128*v}})),a.register("btSY7",(function(e,t){"use strict";var r=a("c4C4W"),n=a("j97bH"),i=a("jFG8L"),o=a("6d5Pb"),s=a("gYMA1"),u=a("1nUSP"),c=a("9jFfm"),l=a("gWbUy"),f=a("5TB86"),h=a("dW1zJ"),p=a("4ULKu");e.exports=function(e){return new Promise((function(t,a){var d,v=e.data,m=e.headers,g=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}r.isFormData(v)&&r.isStandardBrowserEnv()&&delete m["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var _=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(_+":"+w)}var k=s(e.baseURL,e.url);function x(){if(b){var r="getAllResponseHeaders"in b?u(b.getAllResponseHeaders()):null,i={data:g&&"text"!==g&&"json"!==g?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:r,config:e,request:b};n((function(e){t(e),y()}),(function(e){a(e),y()}),i),b=null}}if(b.open(e.method.toUpperCase(),o(k,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=x:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(x)},b.onabort=function(){b&&(a(new f("Request aborted",f.ECONNABORTED,e,b)),b=null)},b.onerror=function(){a(new f("Network Error",f.ERR_NETWORK,e,b,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),a(new f(t,r.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,e,b)),b=null},r.isStandardBrowserEnv()){var E=(e.withCredentials||c(k))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;E&&(m[e.xsrfHeaderName]=E)}"setRequestHeader"in b&&r.forEach(m,(function(e,t){void 0===v&&"content-type"===t.toLowerCase()?delete m[t]:b.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),g&&"json"!==g&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(e){b&&(a(!e||e&&e.type?new h:e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),v||(v=null);var I=p(k);I&&-1===["http","https","file"].indexOf(I)?a(new f("Unsupported protocol "+I+":",f.ERR_BAD_REQUEST,e)):b.send(v)}))}})),a.register("j97bH",(function(e,t){"use strict";var r=a("5TB86");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}})),a.register("jFG8L",(function(e,t){"use strict";var r=a("c4C4W");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,a,o){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(a)&&s.push("domain="+a),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),a.register("gYMA1",(function(e,t){"use strict";var r=a("7xjuH"),n=a("ftRZn");e.exports=function(e,t){return e&&!r(t)?n(e,t):t}})),a.register("7xjuH",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),a.register("ftRZn",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),a.register("1nUSP",(function(e,t){"use strict";var r=a("c4C4W"),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,a,o={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),i=r.trim(e.substr(a+1)),t){if(o[t]&&n.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([i]):o[t]?o[t]+", "+i:i}})),o):o}})),a.register("9jFfm",(function(e,t){"use strict";var r=a("c4C4W");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}})),a.register("dW1zJ",(function(e,t){"use strict";var r=a("5TB86");function n(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}a("c4C4W").inherits(n,r,{__CANCEL__:!0}),e.exports=n})),a.register("4ULKu",(function(e,t){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),a.register("beknR",(function(e,t){e.exports=null})),a.register("lXDKh",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),a.register("knWMA",(function(e,t){"use strict";var r=a("c4C4W");e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function o(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function u(r){return r in t?i(e[r],t[r]):r in e?i(void 0,e[r]):void 0}var c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||a,i=t(e);r.isUndefined(i)&&t!==u||(n[e]=i)})),n}})),a.register("9SeBc",(function(t,r){var n=a("l5bVx"),i=a("kLR29").version,o=a("5TB86"),s={};["object","boolean","number","function","string","symbol"].forEach((function(t,r){s[t]=function(i){return(void 0===i?"undefined":e(n)(i))===t||"a"+(r<1?"n ":" ")+t}}));var u={};s.transitional=function(e,t,r){function n(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,a){if(!1===e)throw new o(n(i," has been removed"+(t?" in "+t:"")),o.ERR_DEPRECATED);return t&&!u[i]&&(u[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,a)}},t.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),i=n.length;i-- >0;){var a=n[i],s=t[a];if(s){var u=e[a],c=void 0===u||s(u,a,e);if(!0!==c)throw new o("option "+a+" must be "+c,o.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new o("Unknown option "+a,o.ERR_BAD_OPTION)}},validators:s}})),a.register("kLR29",(function(e,t){e.exports={version:"0.27.2"}})),a.register("77MZz",(function(e,t){"use strict";var r=a("dW1zJ");function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},n.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},n.source=function(){var e;return{token:new n((function(t){e=t})),cancel:e}},e.exports=n})),a.register("9BdDr",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),a.register("kv87N",(function(e,t){"use strict";var r=a("c4C4W");e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=i()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return r&&n.default(a,r.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=a("fVNic"))&&r.__esModule?r:{default:r}}));var o={};function s(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){s(a,n,i,o,u,"next",e)}function u(e){s(a,n,i,o,u,"throw",e)}o(void 0)}))}};var u=a("8MBJY"),c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t){var r=l.default(e,t,"get");return f.default(e,r)};var l=h(a("1UHsN")),f=h(a("ffZzF"));function h(e){return e&&e.__esModule?e:{default:e}}var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,r){v.default(e,t),t.set(e,r)};var d,v=(d=a("5k7tO"))&&d.__esModule?d:{default:d};var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e,t,r){var n=g.default(e,t,"set");return y.default(e,n,r),r};var g=b(a("1UHsN")),y=b(a("jdVyQ"));function b(e){return e&&e.__esModule?e:{default:e}}var _=a("a2hTj"),w=a("hKHmD"),k={};Object.defineProperty(k,"__esModule",{value:!0}),k.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){x.default(e,t,r[t])}))}return e};var x=function(e){return e&&e.__esModule?e:{default:e}}(a("hKHmD"));var E={};Object.defineProperty(E,"__esModule",{value:!0}),E.default=function(e){return I.default(e)||T.default(e)||O.default(e)||S.default()};var I=R(a("kMC0W")),T=R(a("7AJDX")),S=R(a("8CtQK")),O=R(a("auk6i"));function R(e){return e&&e.__esModule?e:{default:e}}var P={},A=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new O(n||[]);return a._invoke=function(e,t,r){var n=f;return function(i,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw a;return P()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=I(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(e,r,o),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(R([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=m.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,n){function a(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(a,a):a()}}function I(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function R(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:t,done:!0}}return g.prototype=y,u(k,"constructor",y),u(y,"constructor",g),g.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},x(E.prototype),u(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new E(c(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(k),u(k,s,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(P);try{regeneratorRuntime=A}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=A:Function("r","regeneratorRuntime = r")(A)}var C;C=a("ke5Oc");var L,N=document.querySelector(".loadingSpinner"),M=document.querySelector(".backdrop");function D(){return(D=e(o)(e(P).mark((function t(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.style.display="block",B();case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function B(){M.classList.toggle("is-hidden")}L={startSpinner:function(){return D.apply(this,arguments)},hideLoader:function(){B(),N.style.display="none"}},e(C).defaults.baseURL="https://api.themoviedb.org/3";var U="886a5e80a67d15e1eb52e12b03d8c581",j=new WeakMap,F=new WeakMap,H=new WeakMap,q=function(){"use strict";function t(){e(u)(this,t),e(p)(this,j,{writable:!0,value:void 0}),e(p)(this,F,{writable:!0,value:1}),e(p)(this,H,{writable:!0,value:{params:{api_key:U}}}),e(m)(this,j,""),e(m)(this,F,1)}return e(_)(t,[{key:"fetchMovies",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i,a,o;return e(P).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,L.startSpinner)();case 2:return n.next=4,e(C).get("/trending/movie/day?page=".concat(t),e(c)(r,H));case 4:return i=n.sent.data,(0,L.hideLoader)(),o=null!==(a=JSON.parse(localStorage.getItem("films")))&&void 0!==a?a:[],localStorage.setItem("films",JSON.stringify(e(E)(i.results).concat(e(E)(o)))),n.abrupt("return",i);case 10:case"end":return n.stop()}}),n)})))()}},{key:"fetchSearchMovies",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i,a,o;return e(P).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(C).get("/search/movie?api_key=".concat(U,"&page=").concat(t,"&query=").concat(e(c)(r,j)));case 2:return i=n.sent.data,o=null!==(a=JSON.parse(localStorage.getItem("films")))&&void 0!==a?a:[],localStorage.setItem("films",JSON.stringify(e(E)(i.results).concat(e(E)(o)))),n.abrupt("return",i);case 7:case"end":return n.stop()}}),n)})))()}},{key:"fetchDetails",value:function(t){return e(o)(e(P).mark((function r(){var n;return e(P).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e(C).get("/movie/".concat(t,"?api_key=").concat(U));case 2:return n=r.sent.data,r.abrupt("return",n);case 4:case"end":return r.stop()}}),r)})))()}},{key:"fetchGenres",value:function(){return e(o)(e(P).mark((function t(){var r,n;return e(P).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(C).get("/genre/movie/list?",{params:{api_key:U}});case 2:r=t.sent,n=r.data.genres.reduce((function(t,r){return e(k)({},t,e(w)({},r.id,r.name))}),{}),localStorage.setItem("genres",JSON.stringify(n));case 5:case"end":return t.stop()}}),t)})))()}},{key:"query",get:function(){return e(c)(this,j)},set:function(t){e(m)(this,j,t)}},{key:"incrementPage",value:function(){e(m)(this,F,e(c)(this,F)+1)}},{key:"resetPage",value:function(){e(m)(this,F,1)}}]),t}(),V=document.querySelector(".movie-cards__list"),z=localStorage.getItem("genres"),W=JSON.parse(z);function J(e,t){var r=e.map((function(e){var t=e.id,r=e.poster_path,n=e.genre_ids,i=e.original_language,a=e.vote_average,o=e.title,s=e.release_date,u=n.filter((function(e){return W[e]})).map((function(e){return W[e]})).join(", ")||"Genres are not specified",c=r?"https://image.tmdb.org/t/p/w500".concat(r):"https://cdn.pixabay.com/photo/2015/02/22/17/56/loading-645268_960_720.jpg";return'\n    <li class="movie-card__item" id="'.concat(t,'">\n      <div class="movie-card">\n        <img class="movies__img" src="').concat(c,'" alt="').concat(o,'">\n        <h2 class="movie-info-title">').concat(o,'</h2>\n        <div class="movie-card__description">\n          <div class="movie-info-list">\n            <p class="info-item">').concat(u,'</p>\n            <span>&#127871;</span>\n            <p class="info-item-year">').concat(null==s?void 0:s.slice(0,4),'</p>\n          </div>\n          <div class="language-rating">\n            <span class="info-item-language"> ').concat(i.toUpperCase(),'</span>\n            <p class="info-item-rating"><span>&#9733;</span> ').concat(a.toFixed(1),"</p>\n          </div>\n        </div>\n      </div>\n    </li>")})).join("");t?V.innerHTML=r:V.insertAdjacentHTML("beforeend",r)}var G,K={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,G=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist",r(r.s=10)}([function(e,t,r){"use strict";e.exports=function(e,t){var r,n,i,a,o=Object.prototype.hasOwnProperty;for(i=1,a=arguments.length;i<a;i+=1)for(n in r=arguments[i])o.call(r,n)&&(e[n]=r[n]);return e}},function(e,t,r){"use strict";e.exports=function(e){return void 0===e}},function(e,t,r){"use strict";e.exports=function(e){return e instanceof Array}},function(e,t,r){"use strict";var n=r(2),i=r(17),a=r(6);e.exports=function(e,t,r){n(e)?i(e,t,r):a(e,t,r)}},function(e,t,r){"use strict";e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,r){"use strict";e.exports=function(e){return e instanceof Function}},function(e,t,r){"use strict";e.exports=function(e,t,r){var n;for(n in r=r||null,e)if(e.hasOwnProperty(n)&&!1===t.call(r,e[n],n,e))break}},function(e,t,r){"use strict";var n=r(18),i=r(0);e.exports=function(e,t){var r;return t||(t=e,e=null),r=t.init||function(){},e&&n(r,e),t.hasOwnProperty("static")&&(i(r,t.static),delete t.static),i(r.prototype,t),r}},function(e,t,r){"use strict";var n=r(2);e.exports=function(e,t,r){var i,a;if(r=r||0,!n(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,r);for(a=t.length,i=r;r>=0&&i<a;i+=1)if(t[i]===e)return i;return-1}},function(e,t,r){"use strict";var n=r(29),i=r(30),a=r(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var r=document.createElement("div"),i=a(e)?e(t):n(e,t);return r.innerHTML=i,r.firstChild},bind:function(e,t){var r,n=Array.prototype.slice;return e.bind?e.bind.apply(e,n.call(arguments,1)):(r=n.call(arguments,2),function(){return e.apply(t,r.length?r.concat(n.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};e.exports=o},function(e,t,r){"use strict";r(11),e.exports=r(12)},function(e,t,r){},function(e,t,r){"use strict";var n=r(13),i=r(7),a=r(0),o=r(1),s=r(20),u=r(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(e,t){this._options=a({},c,t),this._currentPage=0,this._view=new s(e,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,r=this.getCurrentPage();return t?r-1:r+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),r=this._options.visiblePages,n="prev"===e;return this._options.centerAlign?n?t-1:t+r:n?(t-1)*r:t*r+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},r=this._getLastPage(),n=this._getPageIndex(e),i=this._getPageIndex(r),a=this._getEdge(e);return t.leftPageNumber=a.left,t.rightPageNumber=a.right,t.prevMore=n>1,t.nextMore=n<i,t.page=e,t.currentPageIndex=e,t.lastPage=r,t.lastPageListIndex=r,t},_getEdge:function(e){var t,r,n,i=this._getLastPage(),a=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(n=Math.floor(a/2),(r=(t=Math.max(e-n,1))+a-1)>i&&(t=Math.max(i-a+1,1),r=i)):(t=(o-1)*a+1,r=o*a,r=Math.min(r,i)),{left:t,right:r}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});n.mixin(l),e.exports=l},function(e,t,r){"use strict";var n=r(0),i=r(14),a=r(4),o=r(16),s=r(2),u=r(5),c=r(3),l=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(e){n(e.prototype,f.prototype)},f.prototype._getHandlerItem=function(e,t){var r={handler:e};return t&&(r.context=t),r},f.prototype._safeEvent=function(e){var t,r=this.events;return r||(r=this.events={}),e&&((t=r[e])||(t=[],r[e]=t),r=t),r},f.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},f.prototype._indexOfContext=function(e){for(var t=this._safeContext(),r=0;t[r];){if(e===t[r][0])return r;r+=1}return-1},f.prototype._memorizeContext=function(e){var t,r;i(e)&&(t=this._safeContext(),(r=this._indexOfContext(e))>-1?t[r][1]+=1:t.push([e,1]))},f.prototype._forgetContext=function(e){var t,r;i(e)&&(t=this._safeContext(),(r=this._indexOfContext(e))>-1&&(t[r][1]-=1,t[r][1]<=0&&t.splice(r,1)))},f.prototype._bindEvent=function(e,t,r){var n=this._safeEvent(e);this._memorizeContext(r),n.push(this._getHandlerItem(t,r))},f.prototype.on=function(e,t,r){var n=this;a(e)?(e=e.split(l),c(e,(function(e){n._bindEvent(e,t,r)}))):o(e)&&(r=t,c(e,(function(e,t){n.on(t,e,r)})))},f.prototype.once=function(e,t,r){var n=this;if(o(e))return r=t,void c(e,(function(e,t){n.once(t,e,r)}));this.on(e,(function i(){t.apply(r,arguments),n.off(e,i,r)}),r)},f.prototype._spliceMatches=function(e,t){var r,n=0;if(s(e))for(r=e.length;n<r;n+=1)!0===t(e[n])&&(e.splice(n,1),r-=1,n-=1)},f.prototype._matchHandler=function(e){var t=this;return function(r){var n=e===r.handler;return n&&t._forgetContext(r.context),n}},f.prototype._matchContext=function(e){var t=this;return function(r){var n=e===r.context;return n&&t._forgetContext(r.context),n}},f.prototype._matchHandlerAndContext=function(e,t){var r=this;return function(n){var i=e===n.handler,a=t===n.context,o=i&&a;return o&&r._forgetContext(n.context),o}},f.prototype._offByEventName=function(e,t){var r=this,n=u(t),i=r._matchHandler(t);e=e.split(l),c(e,(function(e){var t=r._safeEvent(e);n?r._spliceMatches(t,i):(c(t,(function(e){r._forgetContext(e.context)})),r.events[e]=[])}))},f.prototype._offByHandler=function(e){var t=this,r=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,r)}))},f.prototype._offByObject=function(e,t){var r,n=this;this._indexOfContext(e)<0?c(e,(function(e,t){n.off(t,e)})):a(t)?(r=this._matchContext(e),n._spliceMatches(this._safeEvent(t),r)):u(t)?(r=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){n._spliceMatches(e,r)}))):(r=this._matchContext(e),c(this._safeEvent(),(function(e){n._spliceMatches(e,r)})))},f.prototype.off=function(e,t){a(e)?this._offByEventName(e,t):arguments.length?u(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},f.prototype.fire=function(e){this.invoke.apply(this,arguments)},f.prototype.invoke=function(e){var t,r,n,i;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),r=Array.prototype.slice.call(arguments,1),n=0;t[n];){if(!1===(i=t[n]).handler.apply(i.context,r))return!1;n+=1}return!0},f.prototype.hasListener=function(e){return this.getListenerLength(e)>0},f.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=f},function(e,t,r){"use strict";var n=r(1),i=r(15);e.exports=function(e){return!n(e)&&!i(e)}},function(e,t,r){"use strict";e.exports=function(e){return null===e}},function(e,t,r){"use strict";e.exports=function(e){return e===Object(e)}},function(e,t,r){"use strict";e.exports=function(e,t,r){var n=0,i=e.length;for(r=r||null;n<i&&!1!==t.call(r,e[n],n,e);n+=1);}},function(e,t,r){"use strict";var n=r(19);e.exports=function(e,t){var r=n(t.prototype);r.constructor=e,e.prototype=r}},function(e,t,r){"use strict";e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,r){"use strict";var n=r(3),i=r(7),a=r(21),o=r(22),s=r(24),u=r(25),c=r(0),l=r(4),f=r(28),h=r(9),p={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},d=["first","prev","next","last"],v=["prev","next"],m=i({init:function(e,t,r){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},p,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(r)},_setRootElement:function(e){if(l(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!f(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){n(d,(function(e){this._buttons[e]=h.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){n(d,(function(e){var t="disabled"+h.capitalizeFirstLetter(e);this._buttons[t]=h.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){n(v,(function(e){var t=e+"More";this._buttons[t]=h.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,u(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,u(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,r,n=e.leftPageNumber,i=e.rightPageNumber;for(r=n;r<=i;r+=1)r===e.page?t=h.createElementByTemplate(this._template.currentPage,{page:r}):(t=h.createElementByTemplate(this._template.page,{page:r}),this._enabledPageElements.push(t)),r!==n||e.prevMore||u(t,this._firstItemClassName),r!==i||e.nextMore||u(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var r,n,i=a(t);s(t),(n=this._getButtonType(i))||(r=this._getPageNumber(i)),e(n,r)}),this)},_getButtonType:function(e){var t,r=this._buttons;return n(r,(function(r,n){return!h.isContained(e,r)||(t=n,!1)}),this),t},_getPageNumber:function(e){var t,r=this._findPageElement(e);return r&&(t=parseInt(r.innerText,10)),t},_findPageElement:function(e){for(var t,r=0,n=this._enabledPageElements.length;r<n;r+=1)if(t=this._enabledPageElements[r],h.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],n(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=m},function(e,t,r){"use strict";e.exports=function(e){return e.target||e.srcElement}},function(e,t,r){"use strict";var n=r(4),i=r(3),a=r(23);function o(e,t,r,n){function o(t){r.call(n||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,r,n){var o=a(e,t),s=!1;i(o,(function(e){return e.handler!==r||(s=!0,!1)})),s||o.push({handler:r,wrappedHandler:n})}(e,t,r,o)}e.exports=function(e,t,r,a){n(t)?i(t.split(/\s+/g),(function(t){o(e,t,r,a)})):i(t,(function(t,n){o(e,n,t,r)}))}},function(e,t,r){"use strict";var n="_feEventKey";e.exports=function(e,t){var r,i=e[n];return i||(i=e[n]={}),(r=i[t])||(r=i[t]=[]),r}},function(e,t,r){"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,r){"use strict";var n=r(3),i=r(8),a=r(26),o=r(27);e.exports=function(e){var t,r=Array.prototype.slice.call(arguments,1),s=e.classList,u=[];s?n(r,(function(t){e.classList.add(t)})):((t=a(e))&&(r=[].concat(t.split(/\s+/),r)),n(r,(function(e){i(e,u)<0&&u.push(e)})),o(e,u))}},function(e,t,r){"use strict";var n=r(1);e.exports=function(e){return e&&e.className?n(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,r){"use strict";var n=r(2),i=r(1);e.exports=function(e,t){t=(t=n(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,r){"use strict";e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,r){"use strict";var n=r(8),i=r(3),a=r(2),o=r(4),s=r(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,h=/\./,p=/^["']\w+["']$/,d=/"|'/g,v=/^-?\d+\.?\d*$/,m={if:function(e,t,r){var n=function(e,t){var r=[e],n=[],a=0,o=0;return i(t,(function(e,i){0===e.indexOf("if")?a+=1:"/if"===e?a-=1:a||0!==e.indexOf("elseif")&&"else"!==e||(r.push("else"===e?["true"]:e.split(" ").slice(1)),n.push(t.slice(o,i)),o=i+1)})),n.push(t.slice(o)),{exps:r,sourcesInsideIf:n}}(e,t),a=!1,o="";return i(n.exps,(function(e,t){return(a=_(e,r))&&(o=w(n.sourcesInsideIf[t],r)),!a})),o},each:function(e,t,r){var n=_(e,r),o=a(n)?"@index":"@key",u={},c="";return i(n,(function(e,n){u[o]=n,u["@this"]=e,s(r,u),c+=w(t.slice(),r)})),c},with:function(e,t,r){var i=n("as",e),a=e[i+1],o=_(e.slice(0,i),r),u={};return u[a]=o,w(t,s(r,u))||""}},g=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var r,n,i=[],a=0;for(t.global||(t=new RegExp(t,"g")),r=t.exec(e);null!==r;)n=r.index,i.push(e.slice(a,n)),a=n+r[0].length,r=t.exec(e);return i.push(e.slice(a)),i};function y(e,t){var r,n=t[e];return"true"===e?n=!0:"false"===e?n=!1:p.test(e)?n=e.replace(d,""):c.test(e)?n=y((r=e.split(l))[0],t)[y(r[1],t)]:f.test(e)?n=y((r=e.split(h))[0],t)[r[1]]:v.test(e)&&(n=parseFloat(e)),n}function b(e,t,r){for(var n,i,a,s,u=m[e],c=1,l=2,f=t[l];c&&o(f);)0===f.indexOf(e)?c+=1:0===f.indexOf("/"+e)&&(c-=1,n=l),f=t[l+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=u(t[0].split(" ").slice(1),(i=0,a=n,(s=t.splice(i+1,a-i)).pop(),s),r),t}function _(e,t){var r=y(e[0],t);return r instanceof Function?function(e,t,r){var n=[];return i(t,(function(e){n.push(y(e,r))})),e.apply(null,n)}(r,e.slice(1),t):r}function w(e,t){for(var r,n,i,a=1,s=e[a];o(s);)n=(r=s.split(" "))[0],m[n]?(i=b(n,e.splice(a,e.length-a),t),e=e.concat(i)):e[a]=_(r,t),s=e[a+=2];return e.join("")}e.exports=function(e,t){return w(g(e,u),t)}},function(e,t,r){"use strict";var n=r(1),i=r(31);e.exports=function(e,t){var r=location.hostname,a="TOAST UI "+e+" for "+r+": Statistics",o=window.localStorage.getItem(a);(n(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:r,dp:r,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,r){"use strict";var n=r(6);e.exports=function(e,t){var r=document.createElement("img"),i="";return n(t,(function(e,t){i+="&"+t+"="+e})),i=i.substring(1),r.src=e+"?"+i,r.style.display="none",document.body.appendChild(r),document.body.removeChild(r),r}}])},K=G();var Y=new q,X=document.querySelector(".movie-cards__list"),$=(document.querySelector("#search-form"),new(e(K))("pagination",{totalItems:0,itemsPerPage:5,visiblePages:5,page:1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}));function Q(e){return Z.apply(this,arguments)}function Z(){return(Z=e(o)(e(P).mark((function t(r){var n,i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.page,e.prev=1,e.next=4,Y.fetchMovies(n);case 4:i=e.sent.results,X.innerHTML="",J(i),window.scrollTo({top:0,behavior:"smooth"}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}function ee(){(ee=document.querySelector(".year")).innerHTML=(new Date).getFullYear()}Y.fetchMovies(1).then((function(e){var t=e.results,r=e.total_pages;$.reset(r),X.innerHTML="",J(t)})),Y.fetchGenres(),$.on("afterMove",Q),ee();var te={header:document.querySelector(".header"),homeBtn:document.querySelector(".header__home-link"),libraryBtn:document.querySelector(".header__library-link"),form:document.querySelector("#search-form"),libr:document.querySelector(".library"),watchBtn:document.querySelector(".watch__btn"),queueBtn:document.querySelector(".queue__btn"),contactBtn:document.querySelector(".header__contact-link"),signUpBtn:document.querySelector(".header__singup-link"),gallery:document.querySelector(".movie-cards__list")};te.homeBtn.addEventListener("click",(function(){te.libr.classList.add("is-hidden"),te.form.classList.remove("is-hidden"),te.homeBtn.classList.add("current"),te.libraryBtn.classList.remove("current"),te.header.classList.remove("header__is-active")})),te.libraryBtn.addEventListener("click",(function(){te.form.classList.add("is-hidden"),te.libr.classList.remove("is-hidden"),te.libraryBtn.classList.add("current"),te.homeBtn.classList.remove("current"),te.header.classList.add("header__is-active")}));var re=document.querySelector("#search-form"),ne=new q,ie=document.querySelector(".movie-cards__list"),ae=document.querySelector(".failure-message"),oe=new(e(K))("pagination",{totalItems:0,itemsPerPage:5,visiblePages:5,page:1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});function se(){return(se=e(o)(e(P).mark((function t(r){var n,i,a,o,s;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=r.currentTarget.elements.query,i=n.value.trim()){e.next=6;break}return ae.classList.remove("is-hidden"),e.abrupt("return");case 6:return ne.query=i,oe.off("afterMove",Q),oe.off("afterMove",ue),oe.on("afterMove",ue),e.prev=10,e.next=13,ne.fetchSearchMovies(1);case 13:if(a=e.sent,o=a.results,s=a.total_pages,0!==o.length){e.next=19;break}return ae.classList.remove("is-hidden"),e.abrupt("return");case 19:if(ae.classList.add("is-hidden"),0!==s){e.next=22;break}return e.abrupt("return");case 22:oe.reset(s),ie.innerHTML="",J(o),loadMoreContent(),e.next=30;break;case 28:e.prev=28,e.t0=e.catch(10);case 30:case"end":return e.stop()}}),t,null,[[10,28]])})))).apply(this,arguments)}function ue(e){return ce.apply(this,arguments)}function ce(){return(ce=e(o)(e(P).mark((function t(r){var n,i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.page,e.prev=1,e.next=4,ne.fetchSearchMovies(n);case 4:i=e.sent.results,ie.innerHTML="",J(i),window.scrollTo({top:0,behavior:"smooth"}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}re.addEventListener("submit",(function(e){return se.apply(this,arguments)}));var le=document.querySelector(".library-watched"),fe=document.querySelector(".library-queue");te.libraryBtn.addEventListener("click",(function(e){var t,r,n=localStorage.getItem("watched"),i=null!==(t=JSON.parse(n))&&void 0!==t?t:[],a=null!==(r=localStorage.getItem("queue"))&&void 0!==r?r:"[]",o=JSON.parse(a);if(te.libraryBtn.classList.contains("current")){if(he.classList.add("dn"),0===i.length&&0===o.length)return void(te.gallery.innerHTML="<div class='container content__library'>\n          <div class='content__library-container'>\n          <img  class='content__library__img' src='https://assets.bigcartel.com/product_images/228233459/PikachuMeme.png?auto=format&fit=max&w=1500' loading='lazy' alt='pikachu' width=\"400\" height=\"400\"/>\n          </div>\n          <div class='content__library-ref'>\n          <h2 class='content__library-title'>Ooops... nothing was selected!</h2>\n          <p class='content__library__text'>\n          <a class='content__library-link' href='./index.html'>Go back</a> and choose movie you want to watch.</p>\n          </div>\n          </div>");0!==i.length?(le.classList.add("btn-js-active"),J(i,!0)):te.gallery.innerHTML="<div class='container content__library'>\n          <div class='content__library-container'>\n          <img  class='content__library__img' src='https://assets.bigcartel.com/product_images/228233459/PikachuMeme.png?auto=format&fit=max&w=1500' loading='lazy' alt='pikachu' width=\"400\" height=\"400\"/>\n          </div>\n          <div class='content__library-ref'>\n          <h2 class='content__library-title'>Ooops... nothing was selected!</h2>\n          <p class='content__library__text'>\n          <a class='content__library-link' href='./index.html'>Go back</a> and choose movie you want to watch.</p>\n          </div>\n          </div>",le.addEventListener("click",(function(e){e.target.classList.add("btn-js-active"),fe.classList.remove("btn-js-active"),0!==i.length?J(i,!0):te.gallery.innerHTML="<div class='container content__library'>\n          <div class='content__library-container'>\n          <img  class='content__library__img' src='https://assets.bigcartel.com/product_images/228233459/PikachuMeme.png?auto=format&fit=max&w=1500' loading='lazy' alt='pikachu' width=\"400\" height=\"400\"/>\n          </div>\n          <div class='content__library-ref'>\n          <h2 class='content__library-title'>Ooops... nothing was selected!</h2>\n          <p class='content__library__text'>\n          <a class='content__library-link' href='./index.html'>Go back</a> and choose movie you want to watch.</p>\n          </div>\n          </div>"})),fe.addEventListener("click",(function(e){e.target.classList.add("btn-js-active"),le.classList.remove("btn-js-active"),0!==o.length?J(o,!0):te.gallery.innerHTML="<div class='container content__library'>\n          <div class='content__library-container'>\n          <img  class='content__library__img' src='https://assets.bigcartel.com/product_images/228233459/PikachuMeme.png?auto=format&fit=max&w=1500' loading='lazy' alt='pikachu' width=\"400\" height=\"400\"/>\n          </div>\n          <div class='content__library-ref'>\n          <h2 class='content__library-title'>Ooops... nothing was selected!</h2>\n          <p class='content__library__text'>\n          <a class='content__library-link' href='./index.html'>Go back</a> and choose movie you want to watch.</p>\n          </div>\n          </div>"}))}}));var he=document.querySelector("#pagination");u=a("8MBJY"),_=a("a2hTj"),w=a("hKHmD"),u=a("8MBJY"),_=a("a2hTj");var pe={};Object.defineProperty(pe,"__esModule",{value:!0}),pe.default=function(e,t){return de.default(e)||ve.default(e,t)||ge.default(e,t)||me.default()};var de=ye(a("8slrw")),ve=ye(a("7AJDX")),me=ye(a("ifqQW")),ge=ye(a("auk6i"));function ye(e){return e&&e.__esModule?e:{default:e}}var be=a("ds8z5"),_e=(u=a("8MBJY"),_=a("a2hTj"),a("eYQtU")),we={};Object.defineProperty(we,"__esModule",{value:!0}),we.default=function(e){return Se(e)};var ke=Te(a("ge8co")),xe=Te(a("cZGw3")),Ee=Te(a("fVNic")),Ie=Te(a("gD1JV"));function Te(e){return e&&e.__esModule?e:{default:e}}function Se(e){var t="function"==typeof Map?new Map:void 0;return Se=function(e){if(null===e||!xe.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return ke.default(e,arguments,Ee.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Ie.default(r,e)},Se(e)}var Oe=a("2MbLg"),Re=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},Pe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,h=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(h=64)),n.push(r[l],r[f],r[h],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Re(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var a=r[e.charAt(i++)],o=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(n.push(c),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==u){var f=s<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ae=function(e){return function(e){var t=Re(e);return Pe.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Ce=function(e){try{return Pe.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Le=function(){"use strict";function t(){var r=this;e(u)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return e(_)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ne(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Me=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(t,i,a){var o;return e(u)(this,n),(o=r.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(be)(o),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(be)(o),De.prototype.create),o}return n}(e(we)(Error)),De=function(){"use strict";function t(r,n,i){e(u)(this,t),this.service=r,this.serviceName=n,this.errors=i}return e(_)(t,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Be(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new Me(a,u,i);return c}}]),t}();function Be(e,t){return e.replace(Ue,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var Ue=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Fe(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(He(l)&&He(f)){if(!Fe(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var h=!0,p=!1,d=void 0;try{for(var v,m=n[Symbol.iterator]();!(h=(v=m.next()).done);h=!0){var g=v.value;if(!r.includes(g))return!1}}catch(e){p=!0,d=e}finally{try{h||null==m.return||m.return()}finally{if(p)throw d}}return!0}function He(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=function(t,n){var i=e(pe)(n.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){r.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return r.length?"&"+r.join("&"):""}function Ve(t){var r={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=e(pe)(t.split("="),2),i=n[0],a=n[1];r[decodeURIComponent(i)]=decodeURIComponent(a)}})),r}function ze(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We=function(){"use strict";function t(r,n){var i=this;e(u)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(i)})).catch((function(e){i.error(e)}))}return e(_)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=Je),void 0===n.error&&(n.error=Je),void 0===n.complete&&(n.complete=Je);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Je(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge(e){return e&&e._delegate?e._delegate:e}var Ke=function(){"use strict";function t(r,n,i){e(u)(this,t),this.name=r,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(_)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Ye="[DEFAULT]",Xe=function(){"use strict";function t(r,n){e(u)(this,t),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(_)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new Le;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:Ye})}catch(e){}var r=!0,n=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=e(pe)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(o)(e(P).mark((function r(){var n;return e(P).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(t.instances.values()),r.next=3,Promise.all(e(E)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(E)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.options,n=void 0===r?{}:r,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:n}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=e(pe)(c.value,2),h=f[0],p=f[1],d=this.normalizeInstanceIdentifier(h);i===d&&p.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var a=this.instances.get(n);return a&&e(a,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,a=this.instances.get(r);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===Ye?void 0:t),options:i}),this.instances.set(r,a),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(a,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye;return this.component?this.component.multipleInstances?e:Ye:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,Qe,Ze=function(){"use strict";function t(r){e(u)(this,t),this.name=r,this.providers=new Map}return e(_)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Xe(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),et=(u=a("8MBJY"),_=a("a2hTj"),w=a("hKHmD"),[]);(Qe=$e||($e={}))[Qe.DEBUG=0]="DEBUG",Qe[Qe.VERBOSE=1]="VERBOSE",Qe[Qe.INFO=2]="INFO",Qe[Qe.WARN=3]="WARN",Qe[Qe.ERROR=4]="ERROR",Qe[Qe.SILENT=5]="SILENT";var tt,rt={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},nt=$e.INFO,it=(tt={},e(w)(tt,$e.DEBUG,"log"),e(w)(tt,$e.VERBOSE,"log"),e(w)(tt,$e.INFO,"info"),e(w)(tt,$e.WARN,"warn"),e(w)(tt,$e.ERROR,"error"),tt),at=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var o;if(!(r<t.logLevel)){var s=(new Date).toISOString(),u=it[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(E)(i)))}},ot=function(){"use strict";function t(r){e(u)(this,t),this.name=r,this._logLevel=nt,this._logHandler=at,this._userLogHandler=null,et.push(this)}return e(_)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in $e))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?rt[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,$e.DEBUG].concat(e(E)(r))),this._logHandler.apply(this,[this,$e.DEBUG].concat(e(E)(r)))}},{key:"log",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,$e.VERBOSE].concat(e(E)(r))),this._logHandler.apply(this,[this,$e.VERBOSE].concat(e(E)(r)))}},{key:"info",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,$e.INFO].concat(e(E)(r))),this._logHandler.apply(this,[this,$e.INFO].concat(e(E)(r)))}},{key:"warn",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,$e.WARN].concat(e(E)(r))),this._logHandler.apply(this,[this,$e.WARN].concat(e(E)(r)))}},{key:"error",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,$e.ERROR].concat(e(E)(r))),this._logHandler.apply(this,[this,$e.ERROR].concat(e(E)(r)))}}]),t}();var st,ut;var ct=new WeakMap,lt=new WeakMap,ft=new WeakMap,ht=new WeakMap,pt=new WeakMap;var dt={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return lt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ft.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return gt(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function vt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ut||(ut=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(yt(this),r),gt(ct.get(this))}:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return gt(t.apply(yt(this),r))}:function(r){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[yt(this),r].concat(e(E)(i)));return ft.set(s,r.sort?r.sort():[r]),gt(s)}}function mt(e){return"function"==typeof e?vt(e):(e instanceof IDBTransaction&&function(e){if(!lt.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),n()},a=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));lt.set(e,t)}}(e),t=e,(st||(st=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,dt):e);var t}function gt(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(gt(t.result)),n()},a=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&ct.set(e,t)})).catch((function(){})),pt.set(r,t),r;var t,r;if(ht.has(e))return ht.get(e);var n=mt(e);return n!==e&&(ht.set(e,n),pt.set(n,e)),n}var yt=function(e){return pt.get(e)};function bt(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,a=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=gt(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(gt(s.result),e.oldVersion,e.newVersion,gt(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var _t=["get","getKey","getAll","getAllKeys","count"],wt=["put","add","delete","clear"],kt=new Map;function xt(t,r){if(t instanceof IDBDatabase&&!(r in t)&&"string"==typeof r){if(kt.get(r))return kt.get(r);var n=r.replace(/FromIndex$/,""),i=r!==n,a=wt.includes(n);if(n in(i?IDBIndex:IDBObjectStore).prototype&&(a||_t.includes(n))){var s,u=(s=e(o)(e(P).mark((function t(r){var o,s,u,c,l,f,h=arguments;return e(P).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o=h.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=h[u];return l=this.transaction(r,a?"readwrite":"readonly"),f=l.store,i&&(f=f.index(s.shift())),t.next=7,Promise.all([(c=f)[n].apply(c,e(E)(s)),a&&l.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return s.apply(this,arguments)});return kt.set(r,u),u}}}dt=function(t){return e(k)({},t,{get:function(e,r,n){return xt(e,r)||t.get(e,r,n)},has:function(e,r){return!!xt(e,r)||t.has(e,r)}})}(dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Et=function(){"use strict";function t(r){e(u)(this,t),this.container=r}return e(_)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var It,Tt,St="@firebase/app",Ot="0.7.32",Rt=new ot("@firebase/app"),Pt="[DEFAULT]",At=(It={},e(w)(It,St,"fire-core"),e(w)(It,"@firebase/app-compat","fire-core-compat"),e(w)(It,"@firebase/analytics","fire-analytics"),e(w)(It,"@firebase/analytics-compat","fire-analytics-compat"),e(w)(It,"@firebase/app-check","fire-app-check"),e(w)(It,"@firebase/app-check-compat","fire-app-check-compat"),e(w)(It,"@firebase/auth","fire-auth"),e(w)(It,"@firebase/auth-compat","fire-auth-compat"),e(w)(It,"@firebase/database","fire-rtdb"),e(w)(It,"@firebase/database-compat","fire-rtdb-compat"),e(w)(It,"@firebase/functions","fire-fn"),e(w)(It,"@firebase/functions-compat","fire-fn-compat"),e(w)(It,"@firebase/installations","fire-iid"),e(w)(It,"@firebase/installations-compat","fire-iid-compat"),e(w)(It,"@firebase/messaging","fire-fcm"),e(w)(It,"@firebase/messaging-compat","fire-fcm-compat"),e(w)(It,"@firebase/performance","fire-perf"),e(w)(It,"@firebase/performance-compat","fire-perf-compat"),e(w)(It,"@firebase/remote-config","fire-rc"),e(w)(It,"@firebase/remote-config-compat","fire-rc-compat"),e(w)(It,"@firebase/storage","fire-gcs"),e(w)(It,"@firebase/storage-compat","fire-gcs-compat"),e(w)(It,"@firebase/firestore","fire-fst"),e(w)(It,"@firebase/firestore-compat","fire-fst-compat"),e(w)(It,"fire-js","fire-js"),e(w)(It,"firebase","fire-js-all"),It),Ct=new Map,Lt=new Map;function Nt(e,t){try{e.container.addComponent(t)}catch(r){Rt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function Mt(e){var t=e.name;if(Lt.has(t))return Rt.debug("There were multiple attempts to register component ".concat(t,".")),!1;Lt.set(t,e);var r=!0,n=!1,i=void 0;try{for(var a,o=Ct.values()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){Nt(a.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!0}function Dt(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Bt=(Tt={},e(w)(Tt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(w)(Tt,"bad-app-name","Illegal App name: '{$appName}"),e(w)(Tt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(w)(Tt,"app-deleted","Firebase App named '{$appName}' already deleted"),e(w)(Tt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(w)(Tt,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(w)(Tt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(w)(Tt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(w)(Tt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(w)(Tt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Tt),Ut=new De("app","Firebase",Bt),jt=function(){"use strict";function t(r,n,i){var a=this;e(u)(this,t),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ke("app",(function(){return a}),"PUBLIC"))}return e(_)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}]),t}(),Ft="9.9.4";function Ht(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,t=Ct.get(e);if(!t)throw Ut.create("no-app",{appName:e});return t}function qt(e,t,r){var n,i=null!==(n=At[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Rt.warn(s.join(" "))}Mt(new Ke("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vt="firebase-heartbeat-store",zt=null;function Wt(){return zt||(zt=bt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Vt)}}).catch((function(e){throw Ut.create("idb-open",{originalErrorMessage:e.message})}))),zt}function Jt(e){return Gt.apply(this,arguments)}function Gt(){return(Gt=e(o)(e(P).mark((function t(r){var n,i,a;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Wt();case 4:return i=e.sent,e.abrupt("return",i.transaction(Vt).objectStore(Vt).get(Xt(r)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof Me?Rt.warn(e.t0.message):(a=Ut.create("idb-get",{originalErrorMessage:null===(n=e.t0)||void 0===n?void 0:n.message}),Rt.warn(a.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function Kt(e,t){return Yt.apply(this,arguments)}function Yt(){return(Yt=e(o)(e(P).mark((function t(r,n){var i,a,o,s,u;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Wt();case 4:return a=e.sent,o=a.transaction(Vt,"readwrite"),s=o.objectStore(Vt),e.next=9,s.put(n,Xt(r));case 9:return e.abrupt("return",o.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof Me?Rt.warn(e.t0.message):(u=Ut.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),Rt.warn(u.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Xt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t=function(){"use strict";function t(r){var n=this;e(u)(this,t),this.container=r,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new tr(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return e(_)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(o)(e(P).mark((function r(){var n,i,a;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),a=Qt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(o)(e(P).mark((function r(){var n,i,a,o,s;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(n=Qt(),i=Zt(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=Ae(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=n,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),r)})))()}}]),t}();function Qt(){return(new Date).toISOString().substring(0,10)}function Zt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=r.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),rr(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:a.agent,dates:[a.date]}),rr(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var er,tr=function(){"use strict";function t(r){e(u)(this,t),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(_)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(o)(e(P).mark((function t(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(o)(e(P).mark((function r(){var n;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Jt(t.app);case 9:return n=e.sent,e.abrupt("return",n||{heartbeats:[]});case 11:case"end":return e.stop()}}),r)})))()}},{key:"overwrite",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i,a;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,r.read();case 10:return a=e.sent,e.abrupt("return",Kt(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),n)})))()}},{key:"add",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i,a;return e(P).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return a=n.sent,n.abrupt("return",Kt(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(E)(a.heartbeats).concat(e(E)(t.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),t}();function rr(e){return Ae(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er="",Mt(new Ke("platform-logger",(function(e){return new Et(e)}),"PRIVATE")),Mt(new Ke("heartbeat",(function(e){return new $t(e)}),"PRIVATE")),qt(St,Ot,er),qt(St,Ot,"esm2017"),qt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
qt("firebase","9.9.4","app");be=a("ds8z5"),u=a("8MBJY"),_=a("a2hTj"),w=a("hKHmD");var nr={};Object.defineProperty(nr,"__esModule",{value:!0}),nr.default=function(e,t,r){return ar(e,t,r)};var ir=function(e){return e&&e.__esModule?e:{default:e}}(a("2mz0K"));function ar(e,t,r){return(ar="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=ir.default(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r||e):i.value}})(e,t,r)}var or=a("fVNic");_e=a("eYQtU"),Oe=a("2MbLg");function sr(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create;function ur(){return e(w)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var cr=ur,lr=new De("auth","Firebase",ur()),fr=new ot("@firebase/auth");function hr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;fr.logLevel<=$e.ERROR&&(a=fr).error.apply(a,["Auth (".concat(Ft,"): ").concat(t)].concat(e(E)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];throw gr.apply(void 0,[t].concat(e(E)(n)))}function dr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return gr.apply(void 0,[t].concat(e(E)(n)))}function vr(t,r,n){var i=Object.assign(Object.assign({},cr()),e(w)({},r,n));return new De("auth","Firebase",i).create(r,{appName:t.name})}function mr(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&pr(e,"argument-error"),vr(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function gr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=n[0],u=e(E)(n.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(E)(u)))}return(a=lr).create.apply(a,[t].concat(e(E)(n)))}function yr(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!t)throw gr.apply(void 0,[r].concat(e(E)(i)))}function br(e){var t="INTERNAL ASSERTION FAILED: "+e;throw hr(t),new Error(t)}function _r(e,t){e||br(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wr=new Map;function kr(e){_r(e instanceof Function,"Expected a class definition");var t=wr.get(e);return t?(_r(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,wr.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(e,t){var r=Dt(e,"auth");if(r.isInitialized()){var n=r.getImmediate();if(Fe(r.getOptions(),null!=t?t:{}))return n;pr(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Er(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ir(){return"http:"===Tr()||"https:"===Tr()}function Tr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Ir()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Or=function(){"use strict";function t(r,n){e(u)(this,t),this.shortDelay=r,this.longDelay=n,_r(n>r,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(_)(t,[{key:"get",value:function(){return Sr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(e,t){_r(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pr,Ar=function(){"use strict";function t(){e(u)(this,t)}return e(_)(t,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),Cr=(Pr={},e(w)(Pr,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(w)(Pr,"MISSING_CUSTOM_TOKEN","internal-error"),e(w)(Pr,"INVALID_IDENTIFIER","invalid-email"),e(w)(Pr,"MISSING_CONTINUE_URI","internal-error"),e(w)(Pr,"INVALID_PASSWORD","wrong-password"),e(w)(Pr,"MISSING_PASSWORD","internal-error"),e(w)(Pr,"EMAIL_EXISTS","email-already-in-use"),e(w)(Pr,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(w)(Pr,"INVALID_IDP_RESPONSE","invalid-credential"),e(w)(Pr,"INVALID_PENDING_TOKEN","invalid-credential"),e(w)(Pr,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(w)(Pr,"MISSING_REQ_TYPE","internal-error"),e(w)(Pr,"EMAIL_NOT_FOUND","user-not-found"),e(w)(Pr,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(w)(Pr,"EXPIRED_OOB_CODE","expired-action-code"),e(w)(Pr,"INVALID_OOB_CODE","invalid-action-code"),e(w)(Pr,"MISSING_OOB_CODE","internal-error"),e(w)(Pr,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(w)(Pr,"INVALID_ID_TOKEN","invalid-user-token"),e(w)(Pr,"TOKEN_EXPIRED","user-token-expired"),e(w)(Pr,"USER_NOT_FOUND","user-token-expired"),e(w)(Pr,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(w)(Pr,"INVALID_CODE","invalid-verification-code"),e(w)(Pr,"INVALID_SESSION_INFO","invalid-verification-id"),e(w)(Pr,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(w)(Pr,"MISSING_SESSION_INFO","missing-verification-id"),e(w)(Pr,"SESSION_EXPIRED","code-expired"),e(w)(Pr,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(w)(Pr,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(w)(Pr,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(w)(Pr,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(w)(Pr,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(w)(Pr,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(w)(Pr,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(w)(Pr,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(w)(Pr,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(w)(Pr,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(w)(Pr,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Pr),Lr=new Or(3e4,6e4);function Nr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Mr(e,t,r,n){return Dr.apply(this,arguments)}function Dr(){return Dr=e(o)(e(P).mark((function t(r,n,i,a){var s,u=arguments;return e(P).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},t.abrupt("return",Br(r,s,e(o)(e(P).mark((function t(){var o,s,u,c;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===n?s=a:o={body:JSON.stringify(a)}),u=qe(Object.assign({key:r.config.apiKey},s)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",Ar.fetch()(Hr(r,r.config.apiHost,i,u),Object.assign({method:n,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Dr.apply(this,arguments)}function Br(e,t,r){return Ur.apply(this,arguments)}function Ur(){return(Ur=e(o)(e(P).mark((function t(r,n,i){var a,o,s,u,c,l,f,h,p;return e(P).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r._canInitEmulator=!1,a=Object.assign(Object.assign({},Cr),n),t.prev=2,o=new qr(r),t.next=6,Promise.race([i(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw Vr(r,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=e(pe)(c.split(" : "),2),f=l[0],h=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw Vr(r,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw Vr(r,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw Vr(r,"user-disabled",u);case 29:if(p=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!h){t.next=34;break}throw vr(r,p,h);case 34:pr(r,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof Me)){t.next=41;break}throw t.t0;case 41:pr(r,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function jr(e,t,r,n){return Fr.apply(this,arguments)}function Fr(){return Fr=e(o)(e(P).mark((function t(r,n,i,a){var o,s,u=arguments;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,Mr(r,n,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&pr(r,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),Fr.apply(this,arguments)}function Hr(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?Rr(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var qr=function(){"use strict";function t(r){var n=this;e(u)(this,t),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(dr(r.auth,"network-request-failed"))}),Lr.get())}))}return e(_)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Vr(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=dr(e,t,n);return i.customData._tokenResponse=r,i}function zr(e,t){return Wr.apply(this,arguments)}function Wr(){return(Wr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(P).mark((function t(r,n){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mr(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Jr(e,t){return Gr.apply(this,arguments)}function Gr(){return(Gr=e(o)(e(P).mark((function t(r,n){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mr(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(){return Yr=e(o)(e(P).mark((function t(r){var n,i,a,o,s,u,c=arguments;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]&&c[1],i=Ge(r),e.next=4,i.getIdToken(n);case 4:return a=e.sent,yr((o=$r(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:Kr(Xr(o.auth_time)),issuedAtTime:Kr(Xr(o.iat)),expirationTime:Kr(Xr(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Yr.apply(this,arguments)}function Xr(e){return 1e3*Number(e)}function $r(t){var r,n=e(pe)(t.split("."),3),i=n[0],a=n[1],o=n[2];if(void 0===i||void 0===a||void 0===o)return hr("JWT malformed, contained fewer than 3 sections"),null;try{var s=Ce(a);return s?JSON.parse(s):(hr("Failed to decode base64 JWT payload"),null)}catch(e){return hr("Caught error parsing JWT payload as JSON",null===(r=e)||void 0===r?void 0:r.toString()),null}}function Qr(e,t){return Zr.apply(this,arguments)}function Zr(){return Zr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(P).mark((function t(r,n){var i=arguments;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Me&&en(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Zr.apply(this,arguments)}function en(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn=function(){"use strict";function t(r){e(u)(this,t),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(_)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(t),n=this;this.timerId=setTimeout(e(o)(e(P).mark((function t(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),t)}))),r)}}},{key:"iteration",value:function(){var t=this;return e(o)(e(P).mark((function r(){var n;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(n=e.t0)||void 0===n?void 0:n.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}}]),t}(),rn=function(){"use strict";function t(r,n){e(u)(this,t),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return e(_)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Kr(this.lastLoginAt),this.creationTime=Kr(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e){return an.apply(this,arguments)}function an(){return(an=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(P).mark((function t(r){var n,i,a,o,s,u,c,l,f,h,p;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.auth,e.next=4,r.getIdToken();case 4:return a=e.sent,e.next=7,Qr(r,Jr(i,{idToken:a}));case 7:yr(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],r._notifyReloadListener(s),u=(null===(n=s.providerUserInfo)||void 0===n?void 0:n.length)?un(s.providerUserInfo):[],c=sn(r.providerData,u),l=r.isAnonymous,f=!(r.email&&s.passwordHash||(null==c?void 0:c.length)),h=!!l&&f,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new rn(s.createdAt,s.lastLoginAt),isAnonymous:h},Object.assign(r,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function on(){return(on=e(o)(e(P).mark((function t(r){var n;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Ge(r),e.next=3,nn(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function sn(t,r){var n=t.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return e(E)(n).concat(e(E)(r))}function un(e){return e.map((function(e){var t=e.providerId,r=sr(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function cn(e,t){return ln.apply(this,arguments)}function ln(){return(ln=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(P).mark((function t(r,n){var i;return e(P).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Br(r,{},e(o)(e(P).mark((function t(){var i,a,o,s,u,c;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=qe({grant_type:"refresh_token",refresh_token:n}).slice(1),a=r.config,o=a.tokenApiHost,s=a.apiKey,u=Hr(r,o,"/v1/token","key=".concat(s)),e.next=5,r._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Ar.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fn=function(){"use strict";function t(){e(u)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(_)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){yr(e.idToken,"internal-error"),yr(void 0!==e.idToken,"internal-error"),yr(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,yr(r=$r(t),"internal-error"),yr(void 0!==r.exp,"internal-error"),yr(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(o)(e(P).mark((function i(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(yr(!n.accessToken||n.refreshToken,t,"user-token-expired"),r||!n.accessToken||n.isExpired){e.next=3;break}return e.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){e.next=7;break}return e.next=6,n.refresh(t,n.refreshToken);case 6:return e.abrupt("return",n.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,r){var n=this;return e(o)(e(P).mark((function i(){var a,o,s,u;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,cn(t,r);case 2:a=e.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,n.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return br("not implemented")}}],[{key:"fromJSON",value:function(e,r){var n=r.refreshToken,i=r.accessToken,a=r.expirationTime,o=new t;return n&&(yr("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(yr("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(yr("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(e,t){yr("string"==typeof e||void 0===e,"internal-error",{appName:t})}var pn=function(){"use strict";function t(r){e(u)(this,t);var n=r.uid,i=r.auth,a=r.stsTokenManager,o=sr(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(E)(o.providerData):[],this.metadata=new rn(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(_)(t,[{key:"getIdToken",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Qr(r,r.stsTokenManager.getToken(r.auth,t));case 2:if(yr(i=e.sent,r.auth,"internal-error"),r.accessToken===i){e.next=9;break}return r.accessToken=i,e.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Yr.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return on.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(yr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){yr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(o)(e(P).mark((function i(){var a;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(t),a=!0),!r){e.next=5;break}return e.next=5,nn(n);case 5:return e.next=7,n.auth._persistUserIfCurrent(n);case 7:a&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(o)(e(P).mark((function r(){var n;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return n=e.sent,e.next=5,Qr(t,zr(t.auth,{idToken:n}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,r){var n,i,a,o,s,u,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,h=null!==(i=r.email)&&void 0!==i?i:void 0,p=null!==(a=r.phoneNumber)&&void 0!==a?a:void 0,d=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,y=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,b=r.uid,_=r.emailVerified,w=r.isAnonymous,k=r.providerData,x=r.stsTokenManager;yr(b&&x,e,"internal-error");var E=fn.fromJSON(this.name,x);yr("string"==typeof b,e,"internal-error"),hn(f,e.name),hn(h,e.name),yr("boolean"==typeof _,e,"internal-error"),yr("boolean"==typeof w,e,"internal-error"),hn(p,e.name),hn(d,e.name),hn(v,e.name),hn(m,e.name),hn(g,e.name),hn(y,e.name);var I=new t({uid:b,auth:e,email:h,emailVerified:_,displayName:f,isAnonymous:w,photoURL:d,phoneNumber:p,tenantId:v,stsTokenManager:E,createdAt:g,lastLoginAt:y});return k&&Array.isArray(k)&&(I.providerData=k.map((function(e){return Object.assign({},e)}))),m&&(I._redirectEventId=m),I}},{key:"_fromIdTokenResponse",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(o)(e(P).mark((function a(){var o,s;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new fn).updateFromServerResponse(n),s=new t({uid:n.localId,auth:r,stsTokenManager:o,isAnonymous:i}),e.next=5,nn(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),dn=function(){"use strict";function t(){e(u)(this,t),this.type="NONE",this.storage={}}return e(_)(t,[{key:"_isAvailable",value:function(){return e(o)(e(P).mark((function t(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,r){var n=this;return e(o)(e(P).mark((function i(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.storage[t]=r;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(o)(e(P).mark((function n(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete r.storage[t];case 1:case"end":return e.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn.type="NONE";var vn=dn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var gn=function(){"use strict";function t(r,n,i){e(u)(this,t),this.persistence=r,this.auth=n,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=mn(this.userKey,o.apiKey,s),this.fullPersistenceKey=mn("persistence",o.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(_)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(o)(e(P).mark((function r(){var n;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return n=e.sent,e.abrupt("return",n?pn._fromJSON(t.auth,n):null);case 4:case"end":return e.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.getCurrentUser();case 4:return i=e.sent,e.next=7,r.removeCurrentUser();case 7:if(r.persistence=t,!i){e.next=10;break}return e.abrupt("return",r.setCurrentUser(i));case 10:case"end":return e.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(o)(e(P).mark((function a(){var s,u,c,l,f,h,p,d,v,m,g,y,b;return e(P).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.length){a.next=2;break}return a.abrupt("return",new t(kr(vn),r,i));case 2:return a.next=4,Promise.all(n.map(function(){var t=e(o)(e(P).mark((function t(r){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||kr(vn),c=mn(i,r.config.apiKey,r.name),l=null,f=!0,h=!1,p=void 0,a.prev=9,d=n[Symbol.iterator]();case 11:if(f=(v=d.next()).done){a.next=29;break}return m=v.value,a.prev=13,a.next=16,m._get(c);case 16:if(!(g=a.sent)){a.next=22;break}return y=pn._fromJSON(r,g),m!==u&&(l=y),u=m,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:f=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),h=!0,p=a.t1;case 35:a.prev=35,a.prev=36,f||null==d.return||d.return();case 38:if(a.prev=38,!h){a.next=41;break}throw p;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(b=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&b.length){a.next=46;break}return a.abrupt("return",new t(u,r,i));case 46:if(u=b[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(n.map(function(){var t=e(o)(e(P).mark((function t(r){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===u){e.next=8;break}return e.prev=1,e.next=4,r._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return a.abrupt("return",new t(u,r,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(kn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(bn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(En(t))return"Blackberry";if(In(t))return"Webos";if(_n(t))return"Safari";if((t.includes("chrome/")||wn(t))&&!t.includes("edge/"))return"Chrome";if(xn(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function bn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne();return/firefox\//i.test(e)}function _n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne();return/crios\//i.test(e)}function kn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne();return/iemobile/i.test(e)}function xn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne();return/android/i.test(e)}function En(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne();return/blackberry/i.test(e)}function In(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne();return/webos/i.test(e)}function Tn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Sn(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne();return Tn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function On(){return((e=Ne()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Rn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne();return Tn(e)||xn(e)||In(e)||En(e)||/windows phone/i.test(e)||kn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pn(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=yn(Ne());break;case"Worker":t="".concat(yn(Ne()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Ft,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An=function(){"use strict";function t(r){e(u)(this,t),this.auth=r,this.queue=[]}return e(_)(t,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i,a,o,s,u,c,l,f,h,p,d,v,m,g;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:a=[],e.prev=4,o=!0,s=!1,u=void 0,e.prev=6,c=r.queue[Symbol.iterator]();case 8:if(o=(l=c.next()).done){e.next=16;break}return f=l.value,e.next=12,f(t);case 12:f.onAbort&&a.push(f.onAbort);case 13:o=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),s=!0,u=e.t0;case 22:e.prev=22,e.prev=23,o||null==c.return||c.return();case 25:if(e.prev=25,!s){e.next=28;break}throw u;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),a.reverse(),h=!0,p=!1,d=void 0,e.prev=36,v=a[Symbol.iterator]();!(h=(m=v.next()).done);h=!0){g=m.value;try{g()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),p=!0,d=e.t2;case 44:e.prev=44,e.prev=45,h||null==v.return||v.return();case 47:if(e.prev=47,!p){e.next=50;break}throw d;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),n,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),Cn=function(){"use strict";function t(r,n,i){e(u)(this,t),this.app=r,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nn(this),this.idTokenSubscription=new Nn(this),this.beforeStateQueue=new An(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=i.sdkClientVersion}return e(_)(t,[{key:"_initializeWithPersistence",value:function(t,r){r&&(this._popupRedirectResolver=kr(r));var n=this;return this._initializationPromise=this.queue(e(o)(e(P).mark((function i(){var a,o;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,gn.create(n,t);case 5:if(n.persistenceManager=e.sent,!n._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,n._popupRedirectResolver._initialize(n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(o=n.currentUser)||void 0===o?void 0:o.uid)||null,!n._deleted){e.next=21;break}return e.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(o)(e(P).mark((function r(){var n;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(n=e.sent,t.currentUser||n){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!n||t.currentUser.uid!==n.uid){e.next=12;break}return t._currentUser._assign(n),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(n,!0);case 14:case"end":return e.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i,a,o,s,u,c,l;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,s=!1,!t||!r.config.authDomain){e.next=15;break}return e.next=9,r.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,e.next=13,r.tryRedirectSignIn(t);case 13:l=e.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,r.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",r.directlySetCurrentUser(null));case 33:return yr(r._popupRedirectResolver,r,"argument-error"),e.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",r.directlySetCurrentUser(o));case 38:return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,r._popupRedirectResolver._completeRedirectFn(r,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,r._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,nn(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(i=e.t0)||void 0===i?void 0:i.code)){e.next=10;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 10:return e.abrupt("return",r.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(o)(e(P).mark((function r(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Ge(t):null)&&yr(i.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),e.abrupt("return",r._updateCurrentUser(i&&i._clone(r)));case 3:case"end":return e.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(o)(e(P).mark((function i(){return e(P).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&yr(n.tenantId===t.tenantId,n,"tenant-id-mismatch"),r){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",n.queue(e(o)(e(P).mark((function r(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.directlySetCurrentUser(t);case 2:n.notifyAuthListeners();case 3:case"end":return e.stop()}}),r)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(o)(e(P).mark((function r(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),r)})))()}},{key:"setPersistence",value:function(t){var r=this;return this.queue(e(o)(e(P).mark((function n(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.assertedPersistence.setPersistence(kr(t));case 2:case"end":return e.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new De("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,r){var n=this;return e(o)(e(P).mark((function i(){var a;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.redirectPersistenceManager){e.next=9;break}return yr(i=t&&kr(t)||r._popupRedirectResolver,r,"argument-error"),e.next=5,gn.create(r,[kr(i._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=e.sent,e.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=e.sent;case 9:return e.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return e.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i,a;return e(P).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(e(o)(e(P).mark((function t(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=r._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(a=r.redirectUser)||void 0===a?void 0:a._redirectEventId)!==t){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(t){var r=this;return e(o)(e(P).mark((function n(){return e(P).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(e(o)(e(P).mark((function n(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return yr(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var r=this;return e(o)(e(P).mark((function n(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.currentUser&&r.currentUser!==t&&r._currentUser._stopProactiveRefresh(),t&&r.isProactiveRefreshEnabled&&t._startProactiveRefresh(),r.currentUser=t,!t){e.next=8;break}return e.next=6,r.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,r.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return yr(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pn(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(o)(e(P).mark((function r(){var n,i,a;return e(P).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e(w)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),r.next=5,null===(n=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(a=r.sent)&&(i["X-Firebase-Client"]=a),r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return Ge(e)}var Nn=function(){"use strict";function t(r){var n,i,a=this;e(u)(this,t),this.auth=r,this.observer=null,this.addObserver=(i=new We((function(e){return a.observer=e}),n)).subscribe.bind(i)}return e(_)(t,[{key:"next",get:function(){return yr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mn=function(){"use strict";function t(r,n){e(u)(this,t),this.providerId=r,this.signInMethod=n}return e(_)(t,[{key:"toJSON",value:function(){return br("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return br("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return br("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return br("not implemented")}}]),t}();function Dn(e,t){return Bn.apply(this,arguments)}function Bn(){return(Bn=e(o)(e(P).mark((function t(r,n){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mr(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Un(e,t){return jn.apply(this,arguments)}function jn(){return(jn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(P).mark((function t(r,n){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",jr(r,"POST","/v1/accounts:signInWithPassword",Nr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fn(e,t){return Hn.apply(this,arguments)}function Hn(){return(Hn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(P).mark((function t(r,n){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",jr(r,"POST","/v1/accounts:signInWithEmailLink",Nr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qn(e,t){return Vn.apply(this,arguments)}function Vn(){return(Vn=e(o)(e(P).mark((function t(r,n){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",jr(r,"POST","/v1/accounts:signInWithEmailLink",Nr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zn=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(u)(this,n),(o=r.call(this,"password",a))._email=t,o._password=i,o._tenantId=s,o}return e(_)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var r=this;return e(o)(e(P).mark((function n(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Un(t,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Fn(t,{email:r._email,oobCode:r._password}));case 5:pr(t,"internal-error");case 6:case"end":return e.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(t,r){var n=this;return e(o)(e(P).mark((function i(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Dn(t,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",qn(t,{idToken:r,email:n._email,oobCode:n._password}));case 5:pr(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(Mn);function Wn(e,t){return Jn.apply(this,arguments)}function Jn(){return(Jn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(P).mark((function t(r,n){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",jr(r,"POST","/v1/accounts:signInWithIdp",Nr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(){var t;return e(u)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(_)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Wn(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,Wn(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Wn(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qe(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pr("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=sr(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(Mn);function Kn(e,t){return Yn.apply(this,arguments)}function Yn(){return(Yn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(P).mark((function t(r,n){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mr(r,"POST","/v1/accounts:sendVerificationCode",Nr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xn(){return(Xn=e(o)(e(P).mark((function t(r,n){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",jr(r,"POST","/v1/accounts:signInWithPhoneNumber",Nr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $n(){return($n=e(o)(e(P).mark((function t(r,n){var i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,jr(r,"POST","/v1/accounts:signInWithPhoneNumber",Nr(r,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Vr(r,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Qn=e(w)({},"USER_NOT_FOUND","user-not-found");function Zn(){return(Zn=e(o)(e(P).mark((function t(r,n){var i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",jr(r,"POST","/v1/accounts:signInWithPhoneNumber",Nr(r,i),Qn));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ei=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(t){var i;return e(u)(this,n),(i=r.call(this,"phone","phone")).params=t,i}return e(_)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Xn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return $n.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Zn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(Mn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ti=function(){"use strict";function t(r){var n,i,a,o,s,c;e(u)(this,t);var l=Ve(ze(r)),f=null!==(n=l.apiKey)&&void 0!==n?n:null,h=null!==(i=l.oobCode)&&void 0!==i?i:null,p=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);yr(f&&h&&p,"argument-error"),this.apiKey=f,this.operation=p,this.code=h,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=l.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return e(_)(t,null,[{key:"parseLink",value:function(e){var r=function(e){var t=Ve(ze(e)).link,r=t?Ve(ze(t)).deep_link_id:null,n=Ve(ze(e)).deep_link_id;return(n?Ve(ze(n)).link:null)||n||r||t||e}(e);try{return new t(r)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ri=function(){"use strict";function t(){e(u)(this,t),this.providerId=t.PROVIDER_ID}return e(_)(t,null,[{key:"credential",value:function(e,t){return zn._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=ti.parseLink(t);return yr(r,"argument-error"),zn._fromEmailAndCode(e,r.code,r.tenantId)}}]),t}();ri.PROVIDER_ID="password",ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ni=function(){"use strict";function t(r){e(u)(this,t),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return e(_)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),ii=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(){var t;return e(u)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(_)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(E)(this.scopes)}}]),n}(ni),ai=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(){return e(u)(this,n),r.call(this,"facebook.com")}return e(_)(n,null,[{key:"credential",value:function(e){return Gn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(ii);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ai.FACEBOOK_SIGN_IN_METHOD="facebook.com",ai.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var oi=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(){var t;return e(u)(this,n),(t=r.call(this,"google.com")).addScope("profile"),t}return e(_)(n,null,[{key:"credential",value:function(e,t){return Gn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(ii);oi.GOOGLE_SIGN_IN_METHOD="google.com",oi.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var si=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(){return e(u)(this,n),r.call(this,"github.com")}return e(_)(n,null,[{key:"credential",value:function(e){return Gn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(ii);si.GITHUB_SIGN_IN_METHOD="github.com",si.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ui=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(){return e(u)(this,n),r.call(this,"twitter.com")}return e(_)(n,null,[{key:"credential",value:function(e,t){return Gn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(ii);ui.TWITTER_SIGN_IN_METHOD="twitter.com",ui.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ci=function(){"use strict";function t(r){e(u)(this,t),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return e(_)(t,null,[{key:"_fromIdTokenResponse",value:function(r,n,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(o)(e(P).mark((function o(){var s,u,c;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pn._fromIdTokenResponse(r,i,a);case 2:return s=e.sent,u=li(i),c=new t({user:s,providerId:u,_tokenResponse:i,operationType:n}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(r,n,i){return e(o)(e(P).mark((function a(){var o;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._updateTokensIfNecessary(i,!0);case 2:return o=li(i),e.abrupt("return",new t({user:r,providerId:o,_tokenResponse:i,operationType:n}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function li(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fi=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(t,i,a,o){var s,c;return e(u)(this,n),(s=r.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(e(be)(s),n.prototype),s.customData={appName:t.name,tenantId:null!==(c=t.tenantId)&&void 0!==c?c:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return e(_)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(Me);function hi(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw fi._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(e,t){return di.apply(this,arguments)}function di(){return di=e(o)(e(P).mark((function t(r,n){var i,a,o=arguments;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=Qr,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",ci._forOperation(r,"link",a));case 14:case"end":return e.stop()}}),t)}))),di.apply(this,arguments)}function vi(e,t){return mi.apply(this,arguments)}function mi(){return mi=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(P).mark((function t(r,n){var i,a,o,s,u,c,l,f=arguments;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],o=r.auth,s="reauthenticate",e.prev=4,e.next=7,Qr(r,hi(o,s,n,r),i);case 7:return yr((u=e.sent).idToken,o,"internal-error"),yr(c=$r(u.idToken),o,"internal-error"),l=c.sub,yr(r.uid===l,o,"user-mismatch"),e.abrupt("return",ci._forOperation(r,s,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(a=e.t0)||void 0===a?void 0:a.code)&&pr(o,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),mi.apply(this,arguments)}function gi(e,t){return yi.apply(this,arguments)}function yi(){return yi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(P).mark((function t(r,n){var i,a,o,s,u=arguments;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,hi(r,a,n);case 4:return o=e.sent,e.next=7,ci._fromIdTokenResponse(r,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,r._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),yi.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(e,t){return Mr(e,"POST","/v2/accounts/mfaEnrollment:start",Nr(e,t))}new WeakMap;var _i="__sak",wi=function(){"use strict";function t(r,n){e(u)(this,t),this.storageRetriever=r,this.type=n}return e(_)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(_i,"1"),this.storage.removeItem(_i),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ki=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(){var t,i;return e(u)(this,n),(t=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,r){return t.onStorageEvent(e,r)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(_n(i=Ne())||Tn(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=Rn(),t._shouldAllowMigration=!0,t}return e(_)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var a=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);On()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,r){var i=this,a=this;return e(o)(e(P).mark((function o(){return e(P).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(nr)(e(or)(n.prototype),"_set",i).call(a,t,r);case 2:a.localCache[t]=JSON.stringify(r);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var r=this,i=this;return e(o)(e(P).mark((function a(){var o;return e(P).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(nr)(e(or)(n.prototype),"_get",r).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var r=this,i=this;return e(o)(e(P).mark((function a(){return e(P).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(nr)(e(or)(n.prototype),"_remove",r).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),n}(wi);ki.type="LOCAL";var xi=ki,Ei=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(){return e(u)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(_)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(wi);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ei.type="SESSION";var Ii=Ei;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){return Promise.all(t.map((r=e(o)(e(P).mark((function t(r){var n;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return r.apply(this,arguments)})));var r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Si=function(){"use strict";function t(r){e(u)(this,t),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(_)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i,a,s,u,c,l,f,h;return e(P).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=(i=t).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=r.handlersMap[u])?void 0:l.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),f=Array.from(l).map(function(){var t=e(o)(e(P).mark((function t(r){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(i.origin,c));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.next=9,Ti(f);case 9:h=n.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:h});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var r=this.receivers.find((function(t){return t.isListeningto(e)}));if(r)return r;var n=new t(e);return this.receivers.push(n),n}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Si.receivers=[];var Ri=function(){"use strict";function t(r){e(u)(this,t),this.target=r,this.handlers=new Set}return e(_)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(o)(e(P).mark((function a(){var o,s,u;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var c=Oi("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),n);u={messageChannel:o,onMessage:function(t){var r=t;if(r.data.eventId===c)switch(r.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(r.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:r},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ai(){return void 0!==Pi().WorkerGlobalScope&&"function"==typeof Pi().importScripts}function Ci(){return Li.apply(this,arguments)}function Li(){return(Li=e(o)(e(P).mark((function t(){var r;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ni="firebaseLocalStorageDb",Mi="firebaseLocalStorage",Di="fbase_key",Bi=function(){"use strict";function t(r){e(u)(this,t),this.request=r}return e(_)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),t}();function Ui(e,t){return e.transaction([Mi],t?"readwrite":"readonly").objectStore(Mi)}function ji(){var e=indexedDB.deleteDatabase(Ni);return new Bi(e).toPromise()}function Fi(){var t=indexedDB.open(Ni,1);return new Promise((function(r,n){t.addEventListener("error",(function(){n(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Mi,{keyPath:Di})}catch(e){n(e)}})),t.addEventListener("success",e(o)(e(P).mark((function n(){var i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Mi)){e.next=12;break}return i.close(),e.next=5,ji();case 5:return e.t0=r,e.next=8,Fi();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:r(i);case 13:case"end":return e.stop()}}),n)}))))}))}function Hi(e,t,r){return qi.apply(this,arguments)}function qi(){return(qi=e(o)(e(P).mark((function t(r,n,i){var a,o;return e(P).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Ui(r,!0).put((a={},e(w)(a,Di,n),e(w)(a,"value",i),a)),t.abrupt("return",new Bi(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Vi(e,t){return zi.apply(this,arguments)}function zi(){return(zi=e(o)(e(P).mark((function t(r,n){var i,a;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ui(r,!1).get(n),e.next=3,new Bi(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Wi(e,t){var r=Ui(e,!0).delete(t);return new Bi(r).toPromise()}var Ji=function(){"use strict";function t(){e(u)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(_)(t,[{key:"_openDb",value:function(){var t=this;return e(o)(e(P).mark((function r(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Fi();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),r)})))()}},{key:"_withRetries",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i,a;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,r._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(o)(e(P).mark((function r(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ai()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(o)(e(P).mark((function r(){return e(P).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.receiver=Si._getInstance(Ai()?self:null),t.receiver._subscribe("keyChanged",function(){var r=e(o)(e(P).mark((function r(n,i){var a;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(o)(e(P).mark((function t(r,n){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var t=this;return e(o)(e(P).mark((function r(){var n,i,a;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Ci();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Ri(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(n=a[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(t){var r=this;return e(o)(e(P).mark((function n(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,r.sender._send("keyChanged",{key:t},r.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(o)(e(P).mark((function t(){var r;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Fi();case 5:return r=e.sent,e.next=8,Hi(r,_i,"1");case 8:return e.next=10,Wi(r,_i);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var r=this;return e(o)(e(P).mark((function n(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,r.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,r){var n=this;return e(o)(e(P).mark((function i(){return e(P).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(e(o)(e(P).mark((function i(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Hi(e,t,r)}));case 2:return n.localCache[t]=r,e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Vi(e,t)}));case 2:return i=e.sent,r.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(o)(e(P).mark((function n(){return e(P).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(e(o)(e(P).mark((function n(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Wi(e,t)}));case 2:return delete r.localCache[t],e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var t=this;return e(o)(e(P).mark((function r(){var n,i,a,o,s,u,c,l,f,h,p,d,v,m,g,y,b;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Ui(e,!1).getAll();return new Bi(t).toPromise()}));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,e.prev=10,c=n[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)f=l.value,h=f.fbase_key,p=f.value,a.add(h),JSON.stringify(t.localCache[h])!==JSON.stringify(p)&&(t.notifyListeners(h,p),i.push(h));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==c.return||c.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(d=!0,v=!1,m=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(d=(y=g.next()).done);d=!0)b=y.value,t.localCache[b]&&!a.has(b)&&(t.notifyListeners(b,null),i.push(b));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),v=!0,m=e.t1;case 35:e.prev=35,e.prev=36,d||null==g.return||g.return();case 38:if(e.prev=38,!v){e.next=41;break}throw m;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(o)(e(P).mark((function r(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Ji.type="LOCAL";var Gi=Ji;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(e,t){return Mr(e,"POST","/v2/accounts/mfaSignIn:start",Nr(e,t))}function Yi(e){return new Promise((function(t,r){var n,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=dr("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)}))}function Xi(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Xi("rcb"),new Or(3e4,6e4);var $i="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e,t,r){return Zi.apply(this,arguments)}function Zi(){return(Zi=e(o)(e(P).mark((function t(r,n,i){var a,o,s,u,c,l,f,h;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,yr("string"==typeof o,r,"argument-error"),yr(i.type===$i,r,"argument-error"),!("session"in(s="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return yr("enroll"===u.type,r,"internal-error"),e.next=15,bi(r,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return yr("signin"===u.type,r,"internal-error"),yr(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,Ki(r,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Kn(r,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return h=e.sent.sessionInfo,e.abrupt("return",h);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ea=function(){"use strict";function t(r){e(u)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Ln(r)}return e(_)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Qi(this.auth,e,Ge(t))}}],[{key:"credential",value:function(e,t){return ei._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var r=e;return t.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?ei._fromTokenResponse(r,n):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ta(e,t){return t?kr(t):(yr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ea.PROVIDER_ID="phone",ea.PHONE_SIGN_IN_METHOD="phone";var ra=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(t){var i;return e(u)(this,n),(i=r.call(this,"custom","custom")).params=t,i}return e(_)(n,[{key:"_getIdTokenResponse",value:function(e){return Wn(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Wn(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Wn(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(Mn);function na(e){return gi(e.auth,new ra(e),e.bypassAuthState)}function ia(e){var t=e.auth,r=e.user;return yr(r,t,"internal-error"),vi(r,new ra(e),e.bypassAuthState)}function aa(e){return oa.apply(this,arguments)}function oa(){return(oa=e(o)(e(P).mark((function t(r){var n,i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,yr(i=r.user,n,"internal-error"),e.abrupt("return",pi(i,new ra(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sa=function(){"use strict";function t(r,n,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(u)(this,t),this.auth=r,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return e(_)(t,[{key:"execute",value:function(){var t,r=this;return new Promise((t=e(o)(e(P).mark((function t(n,i){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,r.resolver._initialize(r.auth);case 4:return r.eventManager=e.sent,e.next=7,r.onExecution();case 7:r.eventManager.registerConsumer(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,r){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i,a,o,s,u,c,l;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,c=t.type,!u){e.next=4;break}return r.reject(u),e.abrupt("return");case 4:return l={auth:r.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:r.user,bypassAuthState:r.bypassAuthState},e.prev=5,e.t0=r,e.next=9,r.getIdpTask(c)(l);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),r.reject(e.t2);case 16:case"end":return e.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return na;case"linkViaPopup":case"linkViaRedirect":return aa;case"reauthViaPopup":case"reauthViaRedirect":return ia;default:pr(this.auth,"internal-error")}}},{key:"resolve",value:function(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),ua=new Or(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(e,t,r){return la.apply(this,arguments)}function la(){return(la=e(o)(e(P).mark((function t(r,n,i){var a,o,s;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Ln(r),mr(r,n,ni),o=ta(a,i),s=new fa(a,"signInViaPopup",n,o),e.abrupt("return",s.executeNotNull());case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var fa=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(t,i,a,o,s){var c;return e(u)(this,n),(c=r.call(this,t,i,o,s)).provider=a,c.authWindow=null,c.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=e(be)(c),c}return e(_)(n,[{key:"executeNotNull",value:function(){var t=this;return e(o)(e(P).mark((function r(){var n;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return yr(n=e.sent,t.auth,"internal-error"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){var t=this;return e(o)(e(P).mark((function r(){var n;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _r(1===t.filter.length,"Popup operations only handle one event"),n=Oi(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],n);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=n,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(dr(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(dr(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(dr(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,ua.get())};t()}}]),n}(sa);fa.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ha=new Map,pa=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(u)(this,n),(a=r.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(_)(n,[{key:"execute",value:function(){var t=this,r=this;return e(o)(e(P).mark((function i(){var a,o;return e(P).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=ha.get(r.auth._key())){i.next=21;break}return i.prev=2,i.next=5,da(r.resolver,r.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(nr)(e(or)(n.prototype),"execute",t).call(r);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:ha.set(r.auth._key(),a);case 21:return r.bypassAuthState||ha.set(r.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var r=this,i=this,a=function(){return e(nr)(e(or)(n.prototype),"onAuthEvent",r)};return e(o)(e(P).mark((function r(){var n;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",a().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(n=e.sent)){e.next=16;break}return i.user=n,e.abrupt("return",a().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){return e(o)(e(P).mark((function t(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),n}(sa);function da(e,t){return va.apply(this,arguments)}function va(){return(va=e(o)(e(P).mark((function t(r,n){var i,a,o;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ya(n),a=ga(r),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ma(e,t){ha.set(e._key(),t)}function ga(e){return kr(e._redirectPersistence)}function ya(e){return mn("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(e,t){return _a.apply(this,arguments)}function _a(){return _a=e(o)(e(P).mark((function t(r,n){var i,a,o,s,u,c=arguments;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=Ln(r),o=ta(a,n),s=new pa(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,n);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),_a.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var wa=function(){"use strict";function t(r){e(u)(this,t),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(_)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xa(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!xa(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(dr(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ka(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(ka(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function ka(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function xa(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function Ea(e){return Ia.apply(this,arguments)}function Ia(){return Ia=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(P).mark((function t(r){var n,i=arguments;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Mr(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),t)}))),Ia.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ta=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sa=/^https?/;function Oa(){return(Oa=e(o)(e(P).mark((function t(r){var n,i,a,o,s,u,c;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Ea(r);case 4:n=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=n[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!Ra(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:pr(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Ra(e){var t=Er(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===i}if(!Sa.test(n))return!1;if(Ta.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pa=new Or(3e4,6e4);function Aa(){var t=Pi().___jsl,r=!0,n=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(E)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}var Ca=null;function La(e){return Ca=Ca||function(e){return new Promise((function(t,r){var n,i,a;function o(){Aa(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Aa(),r(dr(e,"network-request-failed"))},timeout:Pa.get()})}if(null===(i=null===(n=Pi().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Pi().gapi)||void 0===a?void 0:a.load)){var s=Xi("iframefcb");return Pi()[s]=function(){gapi.load?o():r(dr(e,"network-request-failed"))},Yi("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw Ca=null,e}))}(e),Ca}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Na=new Or(5e3,15e3),Ma={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Da=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ba(e){var t=e.config;yr(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?Rr(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:Ft},i=Da.get(e.config.apiHost);i&&(n.eid=i);var a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),"".concat(r,"?").concat(qe(n).slice(1))}function Ua(e){return ja.apply(this,arguments)}function ja(){return ja=e(o)(e(P).mark((function t(r){var n,i;return e(P).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,La(r);case 2:return n=t.sent,yr(i=Pi().gapi,r,"internal-error"),t.abrupt("return",n.open({where:document.body,url:Ba(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ma,dontclear:!0},(function(t){return new Promise((n=e(o)(e(P).mark((function n(i,a){var o,s,u;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){Pi().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=dr(r,"network-request-failed"),s=Pi().setTimeout((function(){a(o)}),Na.get()),t.ping(u).then(u,(function(){a(o)}));case 7:case"end":return e.stop()}}),n)}))),function(e,t){return n.apply(this,arguments)}));var n})));case 6:case"end":return t.stop()}}),t)}))),ja.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ha="_blank",qa="http://localhost",Va=function(){"use strict";function t(r){e(u)(this,t),this.window=r,this.associatedEvent=null}return e(_)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function za(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Fa),{width:i.toString(),height:a.toString(),top:o,left:s}),l=Ne().toLowerCase();n&&(u=wn(l)?Ha:n),bn(l)&&(r=r||qa,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,r){var n=e(pe)(r,2),i=n[0],a=n[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(Sn(l)&&"_self"!==u)return Wa(r||"",u),new Va(null);var h=window.open(r||"",u,f);yr(h,t,"popup-blocked");try{h.focus()}catch(e){}return new Va(h)}function Wa(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ja="__/auth/handler",Ga="emulator/auth/handler";function Ka(t,r,n,i,a,o){yr(t.config.authDomain,t,"auth-domain-config-required"),yr(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ft,eventId:a};if(r instanceof ni){r.setDefaultLanguage(t.languageCode),s.providerId=r.providerId||"",je(r.getCustomParameters())||(s.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,h=Object.entries(o||{})[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var p=e(pe)(f.value,2),d=p[0],v=p[1];s[d]=v}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}}if(r instanceof ii){var m=r.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var g,y,b=s,_=!0,w=!1,k=void 0;try{for(var x,E=Object.keys(b)[Symbol.iterator]();!(_=(x=E.next()).done);_=!0){var I=x.value;void 0===b[I]&&delete b[I]}}catch(e){w=!0,k=e}finally{try{_||null==E.return||E.return()}finally{if(w)throw k}}return"".concat((g=t,y=g.config,y.emulator?Rr(y,Ga):"https://".concat(y.authDomain,"/").concat(Ja)),"?").concat(qe(b).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ya="webStorageSupport",Xa=function(){"use strict";function t(){e(u)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ii,this._completeRedirectFn=ba,this._overrideRedirectResult=ma}return e(_)(t,[{key:"_openPopup",value:function(t,r,n,i){var a=this;return e(o)(e(P).mark((function o(){var s,u;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _r(null===(s=a.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=Ka(t,r,n,Er(),i),e.abrupt("return",za(t,u,Oi()));case 4:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,r,n,i){var a=this;return e(o)(e(P).mark((function o(){return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._originValidation(t);case 2:return o=Ka(t,r,n,Er(),i),Pi().location.href=o,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,a=n.promise;return i?Promise.resolve(i):(_r(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i,a;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ua(t);case 2:return i=e.sent,a=new wa(t),i.register("authEvent",(function(e){return yr(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[t._key()]={manager:a},r.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Ya,{type:Ya},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),pr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Oa.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Rn()||_n()||Tn()}}]),t}(),$a=Xa,Qa=function(t){"use strict";e(_e)(n,t);var r=e(Oe)(n);function n(t){var i;return e(u)(this,n),(i=r.call(this,"phone")).credential=t,i}return e(_)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return Mr(e,"POST","/v2/accounts/mfaEnrollment:finalize",Nr(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Mr(e,"POST","/v2/accounts/mfaSignIn:finalize",Nr(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function t(r){e(u)(this,t),this.factorId=r}return e(_)(t,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return br("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(u)(this,t)}return e(_)(t,null,[{key:"assertion",value:function(e){return Qa._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Za,eo="@firebase/auth",to="0.20.6",ro=function(){"use strict";function t(r){e(u)(this,t),this.auth=r,this.internalListeners=new Map}return e(_)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var r=this;return e(o)(e(P).mark((function n(){var i;return e(P).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.assertAuthConfigured(),e.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,r.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){yr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function no(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht(),t=Dt(e,"auth");return t.isInitialized()?t.getImmediate():xr(e,{popupRedirectResolver:$a,persistence:[Gi,xi,Ii]})}Za="Browser",Mt(new Ke("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=n.options,o=a.apiKey,s=a.authDomain;return function(e,t){yr(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),yr(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:s,clientPlatform:Za,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pn(Za)},i=new Cn(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(kr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),Mt(new Ke("auth-internal",(function(e){var t=Ln(e.getProvider("auth").getImmediate());return new ro(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),qt(eo,to,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Za)),qt(eo,to,"esm2017");var io=new oi,ao=(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var r=t;t={name:r}}var n=Object.assign({name:Pt,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Ut.create("bad-app-name",{appName:String(i)});var a=Ct.get(i);if(a){if(Fe(e,a.options)&&Fe(n,a.config))return a;throw Ut.create("duplicate-app",{appName:i})}var o=new Ze(i),s=!0,u=!1,c=void 0;try{for(var l,f=Lt.values()[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var h=l.value;o.addComponent(h)}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}var p=new jt(e,n,o);Ct.set(i,p)}({apiKey:"AIzaSyC-rMEvEUJ6DbhIaJz-m19MpHLMzbQ1hi4",authDomain:"auth-9127f.firebaseapp.com",projectId:"auth-9127f",storageBucket:"auth-9127f.appspot.com",messagingSenderId:"1077758083281",appId:"1:1077758083281:web:0634a927ba2da6007f85f0"}),document.querySelector(".header__btn-signup")),oo=document.querySelector(".header__btn-container"),so=document.querySelector(".header__item.is-hidden");document.querySelector(".header__library-link.current");function uo(){var e=no();if(JSON.parse(localStorage.getItem("authKey")))return localStorage.setItem("authKey",JSON.stringify("")),oo.innerHTML='<a class="header__ref header__singup-link header__btn-signup" style="font-size">Sign in</a>',void so.classList.add("is-hidden");ca(e,io).then((function(e){oi.credentialFromResult(e).accessToken;var t=e.user;localStorage.setItem("authKey",JSON.stringify(t.displayName)),oo.innerHTML='<a class="header__ref header__singup-link header__btn-signup" style="font-size">Sign out '.concat(t.displayName,"</a>"),so.classList.remove("is-hidden")})).catch((function(e){e.code,e.message,e.customData.email,oi.credentialFromError(e)}))}ao.addEventListener("click",uo);var co={openModalBtn:document.querySelector(".footer-link"),closeModalBtn:document.querySelector("[data-modal-close-contacts]"),backdrop:document.querySelector(".backdrop__modal")};function lo(){co.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",fo)}function fo(e){27===e.keyCode&&lo()}co.openModalBtn.addEventListener("click",(function(){co.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",fo)})),co.closeModalBtn.addEventListener("click",lo),co.backdrop.addEventListener("click",(function(e){e.target.classList.contains("js-close-modal")&&lo()}));var ho=document.querySelector(".scroll-btn");window.addEventListener("scroll",(function(){window.pageYOffset>100?ho.classList.add("is-activ"):ho.classList.remove("is-activ")}));var po=document.querySelector(".movie-cards__list"),vo=document.querySelector(".modal"),mo=document.querySelector(".modal-inner"),go=document.querySelector(".btn-close");document.querySelector("body");po.addEventListener("click",(function(e){var t=e.target.closest("li").id;ne.fetchDetails(t).then((function(e){yo(e)}))}));var yo=function(e){var t,r,n=e.id,i=e.poster_path,a=e.original_title,o=e.genres,s=e.vote_average,u=e.popularity,c=e.overview,l=e.vote_count,f=o.map((function(e){return e.name})).join(", ")||"Genres are not specified",h=i?"https://image.tmdb.org/t/p/w500".concat(i):"",p=null!==(t=localStorage.getItem("watched"))&&void 0!==t?t:"[]",d=JSON.parse(p).some((function(e){return e.id===n})),v=null!==(r=localStorage.getItem("queue"))&&void 0!==r?r:"[]",m=JSON.parse(v).some((function(e){return e.id===n})),g="<li id='".concat(n,'\' class="movies__item">\n  <img class="movie-modal__img" src="').concat(h,'" alt="').concat(a,'">\n    <div class="movies__wrapper">\n        <h2 class="movie-modal__name">').concat(a,'</h2>\n        <div class="movies__wrapper--data">\n            <table class="movie-modal__table">\n                        <tr>\n                            <td class="movie-modal__text">Vote / Votes</td>\n                            <td class="movie-modal__numbers"><span class="movie-modal__vote">').concat(s,' </span> / <span class="movie-modal__votes">').concat(l,'</span></td>\n                        </tr>\n                        <tr>\n                            <td class="movie-modal__text">Popularity</td>\n                            <td class="movie-modal__numbers">').concat(u,'</td>\n                        </tr>\n                    \n                        <tr>\n                            <td class="movie-modal__text">Original Title</td>\n                            <td class="movie-modal__numbers">').concat(a,'</td>\n                        </tr>\n                        <tr>\n                            <td class="movie-modal__text">Genre</td>\n                            <td class="movie-modal__numbers">').concat(f,'</td>\n                        </tr>\n                    </table>\n\n           \n            <article class="movie-modal__article">\n            <p class="movie-overview__title">ABOUT</p>\n            <p class="movie-overview__text">').concat(c,'</p>\n            </article>\n            <div class="btn-container">\n             <button class="btn-watched" data-btnModal="watched">').concat(d?"Remove from watched":"add to Watched",'</button>\n            <button class="btn-queue" data-btnModal="queue">').concat(m?"Remove from queue":"add to queue","</button>\n            </div>\n            </div>\n        </div>\n    </li>");mo.insertAdjacentHTML("afterbegin",g),vo.classList.add("is-open"),document.addEventListener("keydown",_o)};function bo(){vo.classList.remove("is-open"),mo.innerHTML="",document.removeEventListener("keydown",_o)}function _o(e){"Escape"===e.key&&(document.removeEventListener("keydown",_o),bo())}go.addEventListener("click",bo),vo.addEventListener("click",(function(e){"modal is-open"===e.target.className&&bo()}));var wo=localStorage.getItem("films"),ko=JSON.parse(wo),xo=localStorage.getItem("queue"),Eo=JSON.parse(xo),Io=null!=Eo?Eo:[],To=localStorage.getItem("watched"),So=JSON.parse(To),Oo=null!=So?So:[];mo.addEventListener("click",(function(e){var t=e.target.closest("li").id;if("btn-watched"===e.target.className){var r=document.querySelector('[data-btnModal="watched"]'),n=ko.find((function(e){return e.id===Number(t)}));if(!n)return;var i=Oo.findIndex((function(e){return e.id===n.id}));-1===i?(r.textContent="Remove from watched",Oo.push(n)):(r.textContent="add to Watched",Oo.splice(i,1)),localStorage.setItem("watched",JSON.stringify(Oo))}if("btn-queue"===e.target.className){var a=document.querySelector('[data-btnModal="queue"]'),o=ko.find((function(e){return e.id===Number(t)}));if(!o)return;var s=Io.findIndex((function(e){return e.id===o.id}));-1===s?(a.textContent="Remove from queue",Io.push(o)):(a.textContent="Add to queue",Io.splice(s,1)),localStorage.setItem("queue",JSON.stringify(Io))}}));var Ro={body:document.querySelector("body"),container:document.querySelector(".theme__container"),sunLogo:document.querySelector(".sun-logo"),moonLogo:document.querySelector(".moon-logo"),footer:document.querySelector(".footer-container")},Po=localStorage.getItem("darkMode"),Ao=function(){Ro.body.classList.add("dark"),Ro.footer.classList.add("dark"),Ro.sunLogo.classList.toggle("animate-sun"),Ro.moonLogo.classList.toggle("animate-moon"),localStorage.setItem("darkMode","enabled")};"enabled"===Po&&Ao(),Ro.container.addEventListener("click",(function(){"enabled"!==(Po=localStorage.getItem("darkMode"))?Ao():(Ro.body.classList.remove("dark"),Ro.footer.classList.remove("dark"),Ro.sunLogo.classList.toggle("animate-sun"),Ro.moonLogo.classList.toggle("animate-moon"),localStorage.setItem("darkMode","disabled"))}));var Co=document.querySelector(".header__item.is-hidden"),Lo=document.querySelector(".header__btn-container"),No=JSON.parse(localStorage.getItem("authKey"));No&&(Lo.innerHTML='<a class="header__ref header__singup-link header__btn-signup" style="font-size">Sign out '.concat(No,"</a>"),Co.classList.remove("is-hidden"),document.querySelector(".header__btn-signup").addEventListener("click",uo))}();
//# sourceMappingURL=index.2e02d1d3.js.map
