!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e||self).randomicsser=n()}(this,function(){function e(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function n(n,r){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=function(n,r){if(n){if("string"==typeof n)return e(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}}(n))||r&&n&&"number"==typeof n.length){t&&(n=t);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return function(e){void 0===e&&(e={count:3,variable:"random",unit:"",range:{min:1,max:100,round:!1},target:"undefined"==typeof window?null:document.querySelector("body"),values:void 0});var r=Array.isArray(e),t=r?e:[e],o=[],a=function(n,t,o,a){var i=r?e[a].values:e.values;if(i&&i.length>0)return i[Math.floor(Math.random()*i.length)];var u=t-n;return o?Math.round(n+Math.random()*u):n+Math.random()*u},i=function(e){for(var n,r=e.count,t=void 0===r?3:r,i=e.variable,u=void 0===i?"random":i,d=e.unit,l=void 0===d?"":d,f=e.range,s=void 0===f?{min:1,max:100,round:!1}:f,v=e.target,c=void 0===v?"undefined"==typeof window?null:document.querySelector("body"):v,m=e.dom,y=e.index,g=c,b=[],h=((n={})[u]=b,n),p=t,S=0;S<p;S++){var x,j=1===t?"--"+u:"--"+u+"-"+S,A=l?""+a(s.min,s.max,s.round,y)+l:a(s.min,s.max,s.round,y);b.push(((x={})[j]=A,x)),g&&m&&g.style.setProperty(""+j,""+A)}o.push(JSON.stringify(h))},u=function(e){for(var n=0;n<t.length;n++){var r=t[n];i({count:r.count,variable:r.variable,unit:r.unit,range:r.range,target:r.target,values:r.values,dom:!1!==e,index:n})}};return{load:u,getVars:function(e){u(!1);for(var r,t="",a=n(o);!(r=a()).done;)for(var i,d=JSON.parse(r.value),l=n(Object.values(d)[0].slice(0,e));!(i=l()).done;){var f=i.value,s=Object.keys(f),v=Object.values(f);t+=s[0]+": "+v[0]+";"}0===o.length&&u(!1);for(var c="[",m=0;m<o.length;m++)c+=o[m],m!==o.length-1&&(c+=",");return c+="]",{css:t,json:JSON.parse(c)}}}}});
//# sourceMappingURL=index.umd.js.map
//# v: 1.1.0
