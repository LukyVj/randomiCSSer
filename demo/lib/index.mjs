/**
 * DO NOT EDIT THIS FILE DIRECTLY.
 * This file is generated following the conversion of 
 * @see [./lib/index.cjs]{@link ./lib/index.cjs}
 * 
 **/
export defaultfunction(n){void 0===n&&(n={amount:3,variable:"random",unit:"",range:{min:1,max:100,round:!1},target:"undefined"==typeof window?null:document.querySelector("body"),values:void 0});var r=Array.isArray(n),a=r?n:[n],o=[],e=function(a,o,e,t){var u=r?n[t].values:n.values;if(u&&u.length>0)return u[Math.floor(Math.random()*u.length)];var i=o-a;return e?Math.round(a+Math.random()*i):a+Math.random()*i},t=function(n){a.map(function(r,a){!function(n){var r,a=n.amount,t=void 0===a?3:a,u=n.variable,i=void 0===u?"random":u,d=n.unit,m=void 0===d?"":d,l=n.range,v=void 0===l?{min:1,max:100,round:!1}:l,f=n.target,s=void 0===f?"undefined"==typeof window?null:document.querySelector("body"):f,g=n.dom,y=n.index,c=s,h=[],p=((r={})[i]=h,r),x=[];Array.from({length:t}).map(function(n,r){var a,o=1===t?"--"+i:"--"+i+"-"+r,u=m?""+e(v.min,v.max,v.round,y)+m:e(v.min,v.max,v.round,y);return h.push(((a={})[o]=u,a)),c&&g&&c.style.setProperty(""+o,""+u),null}),x.push(JSON.stringify(p)),o.push(x.join(","))}({amount:r.amount,variable:r.variable,unit:r.unit,range:r.range,target:r.target,values:r.values,dom:!1!==n,index:a})})};return{load:t,getVars:function(n){t(!1);var r=n?o[n]:o.join(",");return JSON.parse("["+r+"]")}}};
//# sourceMappingURL=index.cjs.map