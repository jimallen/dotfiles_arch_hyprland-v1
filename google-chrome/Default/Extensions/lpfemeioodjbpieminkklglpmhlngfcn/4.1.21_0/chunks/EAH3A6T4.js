import{D as i,R as n,ba as f}from"./W7JCQNRZ.js";import{w as d,za as o}from"./NVVQBQGC.js";import{a as S}from"./SZ3C6HJE.js";import{f as t}from"./UTGLRY7A.js";var p=t(S());var e=t(d()),v=u=>{let{options:l,maxWidth:g,defaultValue:m,onChange:c,sx:x}=u,[b,C]=(0,p.useState)(()=>m||l[0].value),h=r=>{C(r),c?.(r)};return(0,e.jsx)(o,{direction:"row",alignItems:"stretch",gap:3,sx:{...x},children:l.map(r=>{let s=b===r.value;return(0,e.jsxs)(o,{sx:{borderRadius:"4px",border:"1px solid",borderColor:"customColor.borderColor",maxWidth:g,bgcolor:a=>a.palette.mode==="dark"?"rgb(32, 33, 36)":"rgb(255,255,255)",flex:"1 1 0",cursor:"pointer",...s&&{borderColor:"primary.main",bgcolor:a=>a.palette.mode==="dark"?"rgb(56, 56, 56)":"rgb(235, 227, 345)"}},onClick:()=>{h(r.value)},children:[(0,e.jsx)(i,{sx:{m:0},value:r.value,control:(0,e.jsx)(n,{checked:s,sx:{p:1}}),label:r.label}),r.image&&(0,e.jsx)(o,{sx:{p:1,"& img":{width:"100%",height:"auto",boxShadow:"0px 1px 7px 2px rgba(0, 0, 0, 0.10)",userSelect:"none",userDrag:"none",pointerEvents:"none"}},children:(0,e.jsx)("img",{src:r.image,alt:r.label})})]},r.value)})})},F=v;export{F as a};
