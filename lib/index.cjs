module.exports=function(n){var o=n.variable,r=void 0===o?"random":o,t=n.unit,a=void 0===t?"":t,e=n.amount,d=void 0===e?3:e,u=n.target,i=void 0===u?"undefined"==typeof window?null:document.querySelector("body"):u,m=n.range,v=void 0===m?{min:1,max:100,round:!1}:m,l=i,f=[],c=r,h=a,g=d,p=function(n,o,r){var t=o-n;return r?Math.round(n+Math.random()*t):n+Math.random()*t},s=function(n){!function(n){var o=n.dom;Array.from({length:n.length}).map(function(n,r){var t="--"+c+"-"+r,a=""!==h?'"'+p(v.min||1,v.max||100,v.round||!0)+h+'"':""+p(v.min||1,v.max||100,v.round||!0);f.push('{"'+t+'":'+a+"}"),l&&o&&l.style.setProperty(""+t,""+a)})}({length:g,dom:!1!==n})};return{load:s,getVars:function(n){s(!1);var o=n?f[n]:f.join(",");return JSON.parse("["+o+"]")}}};
//# sourceMappingURL=index.cjs.map
