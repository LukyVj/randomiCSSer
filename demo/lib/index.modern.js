const e=(e={count:3,variable:"random",unit:"",range:{min:1,max:100,round:!1},target:"undefined"==typeof window?null:document.querySelector("body"),values:void 0})=>{const t=Array.isArray(e),n=t?e:[e],r=[],a=(n,r,a,o)=>{const l=t?e[o].values:e.values;if(l&&l.length>0)return l[Math.floor(Math.random()*l.length)];{const e=r-n;return a?Math.round(n+Math.random()*e):n+Math.random()*e}},o=({count:e=3,variable:t="random",unit:n="",range:o={min:1,max:100,round:!1},target:l=("undefined"==typeof window?null:document.querySelector("body")),dom:u,index:s})=>{const d=l,i=[],c={[t]:i},g=e;for(let r=0;r<g;r++){const l=1===e?`--${t}`:`--${t}-${r}`,c=n?`${a(o.min,o.max,o.round,s)}${n}`:a(o.min,o.max,o.round,s);i.push({[l]:c}),d&&u&&d.style.setProperty(`${l}`,`${c}`)}r.push(JSON.stringify(c))},l=e=>{for(let t=0;t<n.length;t++){const r=n[t];o({count:r.count,variable:r.variable,unit:r.unit,range:r.range,target:r.target,values:r.values,dom:!1!==e,index:t})}};return{load:l,getVars:e=>{let t="",n=r.map(e=>e);for(let r=0;r<n.length;r++){const a=JSON.parse(n[r]),o=Object.values(a)[0].slice(0,e);for(let e=0;e<o.length;e++){const n=o[e],r=Object.keys(n),a=Object.values(n);t+=`${r[0]}: ${a[0]};`}}return t},getVarsJSON:()=>{0===r.length&&l(!1);let e="[";for(let t=0;t<r.length;t++)e+=r[t],t!==r.length-1&&(e+=",");return e+="]",JSON.parse(e)}}};export{e as default};
//# sourceMappingURL=index.modern.js.map
//# v: 1.1.0
