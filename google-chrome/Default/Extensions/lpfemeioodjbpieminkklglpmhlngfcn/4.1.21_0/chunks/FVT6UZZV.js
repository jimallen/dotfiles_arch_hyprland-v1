import{a as g}from"./SZ3C6HJE.js";import{c as Z,f as l}from"./UTGLRY7A.js";var q=Z((Se,V)=>{V.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}});var a=l(g(),1);var K=l(g(),1);var G=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Q={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xA9","&#169;":"\xA9","&reg;":"\xAE","&#174;":"\xAE","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},_=t=>Q[t],z=t=>t.replace(G,_);var O={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:z};function $(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};O={...O,...t}}function w(){return O}var B;function C(t){B=t}function h(){return B}var D={type:"3rdParty",init(t){$(t.options.react),C(t)}};var b=(0,K.createContext)(),P=class{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}};function W(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`)}}var U={};function T(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&U[e[0]]||(typeof e[0]=="string"&&(U[e[0]]=new Date),W(...e))}var M=(t,e)=>()=>{if(t.isInitialized)e();else{let n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}};function k(t,e,n){t.loadNamespaces(e,M(t,n))}function j(t,e,n,f){typeof n=="string"&&(n=[n]),n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,M(t,f))}function ee(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},f=e.languages[0],i=e.options?e.options.fallbackLng:!1,r=e.languages[e.languages.length-1];if(f.toLowerCase()==="cimode")return!0;let m=(S,E)=>{let s=e.services.backendConnector.state[`${S}|${E}`];return s===-1||s===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!m(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(f,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||m(f,t)&&(!i||m(r,t)))}function J(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(T("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,r)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!r(i.isLanguageChangingTo,t))return!1}}):ee(t,e,n)}var te=(t,e)=>{let n=(0,a.useRef)();return(0,a.useEffect)(()=>{n.current=e?n.current:t},[t,e]),n.current};function R(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{i18n:n}=e,{i18n:f,defaultNS:i}=(0,a.useContext)(b)||{},r=n||f||h();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new P),!r){T("You will need to pass in an i18next instance by using initReactI18next");let o=(p,u)=>typeof u=="string"?u:u&&typeof u=="object"&&typeof u.defaultValue=="string"?u.defaultValue:Array.isArray(p)?p[p.length-1]:p,c=[o,{},!1];return c.t=o,c.i18n={},c.ready=!1,c}r.options.react&&r.options.react.wait!==void 0&&T("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");let m={...w(),...r.options.react,...e},{useSuspense:S,keyPrefix:E}=m,s=t||i||r.options&&r.options.defaultNS;s=typeof s=="string"?[s]:s||["translation"],r.reportNamespaces.addUsedNamespaces&&r.reportNamespaces.addUsedNamespaces(s);let x=(r.isInitialized||r.initializedStoreOnce)&&s.every(o=>J(o,r,m));function y(){return r.getFixedT(e.lng||null,m.nsMode==="fallback"?s:s[0],E)}let[A,N]=(0,a.useState)(y),v=s.join();e.lng&&(v=`${e.lng}${v}`);let F=te(v),d=(0,a.useRef)(!0);(0,a.useEffect)(()=>{let{bindI18n:o,bindI18nStore:c}=m;d.current=!0,!x&&!S&&(e.lng?j(r,e.lng,s,()=>{d.current&&N(y)}):k(r,s,()=>{d.current&&N(y)})),x&&F&&F!==v&&d.current&&N(y);function p(){d.current&&N(y)}return o&&r&&r.on(o,p),c&&r&&r.store.on(c,p),()=>{d.current=!1,o&&r&&o.split(" ").forEach(u=>r.off(u,p)),c&&r&&c.split(" ").forEach(u=>r.store.off(u,p))}},[r,v]);let H=(0,a.useRef)(!0);(0,a.useEffect)(()=>{d.current&&!H.current&&N(y),H.current=!1},[r,E]);let I=[A,r,x];if(I.t=A,I.i18n=r,I.ready=x,x||!x&&!S)return I;throw new Promise(o=>{e.lng?j(r,e.lng,s,()=>o()):k(r,s,()=>o())})}var se=l(g(),1);var L=l(g(),1);var ne=l(q());var Y=l(g(),1);var X=l(g(),1);var ce=l(g(),1);var ae=l(g(),1);export{D as a,R as b};
