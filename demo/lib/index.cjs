function r(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function e(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=function(r){void 0===r&&(r={count:3,variable:"random",unit:"",range:{min:1,max:100,round:!1},target:"undefined"==typeof window?null:document.querySelector("body"),values:void 0});var n=Array.isArray(r),t=n?r:[r],o=[],a=function(e,t,o,a){var u=n?r[a].values:r.values;if(u&&u.length>0)return u[Math.floor(Math.random()*u.length)];var i=t-e;return o?Math.round(e+Math.random()*i):e+Math.random()*i},u=function(r){for(var e,n=r.count,t=void 0===n?3:n,u=r.variable,i=void 0===u?"random":u,l=r.unit,d=void 0===l?"":l,v=r.range,c=void 0===v?{min:1,max:100,round:!1}:v,f=r.target,s=void 0===f?"undefined"==typeof window?null:document.querySelector("body"):f,m=r.dom,y=r.index,g=s,b=[],h=((e={})[i]=b,e),p=t,S=0;S<p;S++){var O,x=1===t?"--"+i:"--"+i+"-"+S,A=d?""+a(c.min,c.max,c.round,y)+d:a(c.min,c.max,c.round,y);b.push(((O={})[x]=A,O)),g&&m&&g.style.setProperty(""+x,""+A)}o.push(JSON.stringify(h))},i=function(r){for(var e=0;e<t.length;e++){var n=t[e];u({count:n.count,variable:n.variable,unit:n.unit,range:n.range,target:n.target,values:n.values,dom:!1!==r,index:e})}};return{load:i,getVars:function(r){i(!1);for(var n,t="",a=e(o);!(n=a()).done;)for(var u,l=JSON.parse(n.value),d=e(Object.values(l)[0].slice(0,r));!(u=d()).done;){var v=u.value,c=Object.keys(v),f=Object.values(v);t+=c[0]+": "+f[0]+";"}return t},getVarsJSON:function(){0===o.length&&i(!1);for(var r="[",e=0;e<o.length;e++)r+=o[e],e!==o.length-1&&(r+=",");return r+="]",JSON.parse(r)}}};
//# sourceMappingURL=index.cjs.map
//# v: 1.1.0
