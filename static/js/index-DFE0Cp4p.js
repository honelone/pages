import{d as k,n as d,s as w,l as L,f as D,a as S,o as G}from"./index-DblQHoIm.js";import{_ as b}from"./plugin-vueexport-helper-DlAUqK2U.js";const B={class:"card-container"},c=36,l=80,F=100,O=k({__name:"index",setup(P){const f=d(),r=w({}),i=d(!1),u=d(),m=d();function R(t,e,o,n){const a=t-o,s=e-n;return Math.sqrt(a*a+s*s)}function v(){return"#"+("000000"+(Math.random()*16777215<<0).toString(16)).slice(-6)}function _(t,e){return Math.floor(Math.random()*(e-t+1))+t}function y(){for(let t=0;t<c;t++){const e=document.createElement("div");e.classList.add("grid-row");for(let o=0;o<c;o++){const n=document.createElement("div");n.classList.add("grid-cell"),n.dataset.x=o.toString(),n.dataset.y=t.toString(),e.appendChild(n),r["x"+o+"y"+t]=n}f.value.appendChild(e)}}function p(){for(const t in r)r[t].classList.remove("on")}function I(t,e,o,n){n===void 0&&(n="transparent");for(let a=e-o;a<=e+o;a++)if(!(a<0||a>=c))for(let s=t-o;s<=t+o;s++){if(s<0||s>=c)continue;const E=R(t,e,s,a);E<o-1||E>o||(r["x"+s+"y"+a].classList.add("on"),r["x"+s+"y"+a].style.backgroundColor=n)}}function T(t,e,o,n,a){setTimeout(function(){I(t,e,o,n)},a||1)}function g(t,e,o){if(i.value)return!1;i.value=!0;for(let n=0;n<c*1.5;n++)T(t,e,n,o,l*n);setTimeout(function(){i.value=!1},l*(c*1.5))}function h(t){if(i.value)return!1;const e=t.target||t.srcElement,o=e.dataset.x,n=e.dataset.y;p(),g(o,n,v()),x()}function M(){for(const t in r)r[t].addEventListener("click",h,!1)}function C(){const t=_(0,c-1),e=_(0,c-1);p(),g(t,e,v())}function x(){clearTimeout(u.value),clearInterval(m.value),u.value=setTimeout(function(){m.value=setInterval(C,l*(c*2))},F)}return L(()=>{y(),M(),x()}),(t,e)=>(G(),D("div",B,[S("div",{class:"grid",ref_key:"radioGridRef",ref:f},null,512)]))}}),N=b(O,[["__scopeId","data-v-6d9f85dd"]]);export{N as default};
