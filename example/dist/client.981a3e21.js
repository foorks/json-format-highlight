webpackJsonp([0],[,function(r,e,o){"use strict";var t=o(11);e.a={data:function(){return{code:Object(t.a)({a:"string",b:111,c:!1,d:!0,e:null,f:{ww:"kkk",qq:[1,2,3],rr:{t:"awt"}},g:'<p>hello world</p> with \n <p>new line</p> and quote sign: "'},{tagPre:!0,wordWrap:!0,colors:{falseColor:"#f44747"}})}}}},function(r,e,o){r.exports=o(3)},function(r,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(4),n=o(8);new t.a({el:"#app",render:function(r){return r(n.a)}})},,,,,function(r,e,o){"use strict";function t(r){o(9)}var n=o(1),l=o(12),a=o(10),c=t,u=a(n.a,l.a,!1,c,null,null);e.a=u.exports},function(r,e){},,function(r,e,o){"use strict";function t(r){return String(r).replace(/[&<>"'`=]/g,function(r){return c[r]})}function n(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=e.tagPre,n=void 0!==o&&o,c=e.wordWrap,u=void 0===c||c,s=e.colors,i=void 0===r?"undefined":l(r);"string"!==i&&(r=JSON.stringify(r,null,2)||i),s=Object.assign({},a,s),r=r.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">");var p=r.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+]?\d+)?)/g,function(r){var e=s.numberColor,o="",n="";return/^"/.test(r)?/:$/.test(r)?(o="key",e=s.keyColor):(o="",e=s.stringColor,r='"'+t(r.substr(1,r.length-2))+'"',n=u?"word-wrap:break-word;white-space:pre-wrap;":""):e=/true/.test(r)?s.trueColor:/false/.test(r)?s.falseColor:/null/.test(r)?s.nullColor:e,"key"===o?'<span style="'+n+"color:"+e+'">'+r.slice(0,-1)+"</span>:":'<span style="'+n+"color:"+e+'">'+r+"</span>"});return n?'<pre style="color:'+s.bracketsColor+";background:"+s.backgroundColor+(u?"":";overflow:auto")+'">'+p+"</pre>":p}e.a=n;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},a={keyColor:"#9cdcfe",nullColor:"#569cd6",trueColor:"#569cd6",falseColor:"#569cd6",numberColor:"#b5cea8",stringColor:"#ce9178",bracketsColor:"#d4d4d4",backgroundColor:"#1e1e1e"},c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#x60;","=":"&#x3D;"}},function(r,e,o){"use strict";var t=function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",{attrs:{id:"app"}},[o("code",{domProps:{innerHTML:r._s(r.code)}})])},n=[],l={render:t,staticRenderFns:n};e.a=l}],[2]);
//# sourceMappingURL=client.981a3e21.js.map