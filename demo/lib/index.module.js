var r=function(r){void 0===r&&(r={count:3,variable:"random",unit:"",range:{min:1,max:100,round:!1},target:"undefined"==typeof window?null:document.querySelector("body"),values:void 0});var n=Array.isArray(r),e=n?r:[r],a=[],t=function(e,a,t,o){var u=n?r[o].values:r.values;if(u&&u.length>0)return u[Math.floor(Math.random()*u.length)];var i=a-e;return t?Math.round(e+Math.random()*i):e+Math.random()*i},o=function(r){for(var n,e=r.count,o=void 0===e?3:e,u=r.variable,i=void 0===u?"random":u,d=r.unit,l=void 0===d?"":d,v=r.range,f=void 0===v?{min:1,max:100,round:!1}:v,s=r.target,c=void 0===s?"undefined"==typeof window?null:document.querySelector("body"):s,g=r.dom,m=r.index,h=c,y=[],b=((n={})[i]=y,n),p=o,x=0;x<p;x++){var O,S=1===o?"--"+i:"--"+i+"-"+x,M=l?""+t(f.min,f.max,f.round,m)+l:t(f.min,f.max,f.round,m);y.push(((O={})[S]=M,O)),h&&g&&h.style.setProperty(""+S,""+M)}a.push(JSON.stringify(b))},u=function(r){for(var n=0;n<e.length;n++){var a=e[n];o({count:a.count,variable:a.variable,unit:a.unit,range:a.range,target:a.target,values:a.values,dom:!1!==r,index:n})}};return{load:u,getVars:function(r){for(var n="",e=a.map(function(r){return r}),t=0;t<e.length;t++)for(var o=JSON.parse(e[t]),u=Object.values(o)[0].slice(0,r),i=0;i<u.length;i++){var d=u[i],l=Object.keys(d),v=Object.values(d);n+=l[0]+": "+v[0]+";"}return n},getVarsJSON:function(){0===a.length&&u(!1);for(var r="[",n=0;n<a.length;n++)r+=a[n],n!==a.length-1&&(r+=",");return r+="]",JSON.parse(r)}}};export{r as default};
//# sourceMappingURL=index.module.js.map
//# v: 1.0.15
