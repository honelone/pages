import{d as k,r as d,j as w,o as L,a as D,b as S,g as b,_ as G}from"./index-COQhxWnb.js";const B={class:"card-container"},c=36,l=80,F=100,O=k({__name:"index",setup(P){const f=d(),r=w({}),i=d(!1),u=d(),m=d();function R(e,t,o,n){const a=e-o,s=t-n;return Math.sqrt(a*a+s*s)}function v(){return"#"+("000000"+(Math.random()*16777215<<0).toString(16)).slice(-6)}function _(e,t){return Math.floor(Math.random()*(t-e+1))+e}function y(){for(let e=0;e<c;e++){const t=document.createElement("div");t.classList.add("grid-row");for(let o=0;o<c;o++){const n=document.createElement("div");n.classList.add("grid-cell"),n.dataset.x=o.toString(),n.dataset.y=e.toString(),t.appendChild(n),r["x"+o+"y"+e]=n}f.value.appendChild(t)}}function g(){for(const e in r)r[e].classList.remove("on")}function I(e,t,o,n){n===void 0&&(n="transparent");for(let a=t-o;a<=t+o;a++)if(!(a<0||a>=c))for(let s=e-o;s<=e+o;s++){if(s<0||s>=c)continue;const E=R(e,t,s,a);E<o-1||E>o||(r["x"+s+"y"+a].classList.add("on"),r["x"+s+"y"+a].style.backgroundColor=n)}}function T(e,t,o,n,a){setTimeout(function(){I(e,t,o,n)},a||1)}function p(e,t,o){if(i.value)return!1;i.value=!0;for(let n=0;n<c*1.5;n++)T(e,t,n,o,l*n);setTimeout(function(){i.value=!1},l*(c*1.5))}function h(e){if(i.value)return!1;const t=e.target||e.srcElement,o=t.dataset.x,n=t.dataset.y;g(),p(o,n,v()),x()}function M(){for(const e in r)r[e].addEventListener("click",h,!1)}function C(){const e=_(0,c-1),t=_(0,c-1);g(),p(e,t,v())}function x(){clearTimeout(u.value),clearInterval(m.value),u.value=setTimeout(function(){m.value=setInterval(C,l*(c*2))},F)}return L(()=>{y(),M(),x()}),(e,t)=>(b(),D("div",B,[S("div",{class:"grid",ref_key:"radioGridRef",ref:f},null,512)]))}}),q=G(O,[["__scopeId","data-v-550fe616"]]);export{q as default};
