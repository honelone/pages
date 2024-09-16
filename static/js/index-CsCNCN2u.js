import{d as M,c as s,w as T,r as p,a as S,b as m,F as R,e as V,p as w,o as L,E as $,k as D,A as I,C as z,x as j,y as E,t as F,_ as P}from"./index-D3906Olc.js";const U=M({__name:"VirtualScroller",props:{list:{default:()=>[]},height:{default:300},itemHeight:{default:32},preloadNum:{default:5}},emits:["arriveBottom"],setup(f,{emit:g}){const t=f,c=g,d=s(()=>t.list.length*t.itemHeight),h=s(()=>!d.value||!t.height||!v.value?!1:v.value+t.height>=d.value);T(h,()=>{h.value&&c("arriveBottom")});const e=s(()=>({width:"100%",height:`${t.height}px`,"overflow-y":"auto"})),N=s(()=>{let n=l.value*t.itemHeight,r=d.value-n;return r<0&&(r=d.value,n=0),{width:"100%",height:`${r}px`,marginTop:`${n}px`}}),v=p(0),b=n=>{v.value=n.target.scrollTop},y=s(()=>t.preloadNum&&!isNaN(t.preloadNum)&&t.preloadNum>0?t.preloadNum:5),H=s(()=>t.height?Math.ceil(t.height/t.itemHeight):0),o=s(()=>Math.floor(v.value/t.itemHeight)),l=s(()=>{const n=o.value-y.value;return n<0?0:n}),a=s(()=>{const n=o.value+H.value+y.value;return n>t.list.length?t.list.length:n}),i=s(()=>t.list.slice(l.value,a.value));return(n,r)=>(L(),S("div",{ref:"outerScrollerRef",style:w(e.value),onScroll:b},[m("div",{ref:"innerScrollerRef",style:w(N.value)},[(L(!0),S(R,null,V(i.value,(_,u)=>(L(),S("div",{key:_.name,style:w({height:`${t.itemHeight}px`})},[$(n.$slots,"default",{index:u+l.value,item:_})],4))),128))],4)],36))}});function q(f){const t=p((()=>{const e=document.createElement("div");return e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.zIndex="9999",e.style.backgroundColor="rgba(0, 0, 0, 0.5)",e.innerHTML="Loading...",e.style.visibility="hidden",e})());T(f,()=>{if(f){const e=f.value;e==null||e.appendChild(t.value)}else{const e=document.body;e==null||e.appendChild(t.value)}});const c=p(!1);return{loading:c,startLoading:()=>{t.value.style.visibility="visible",c.value=!0},endLoading:()=>{t.value.style.visibility="hidden",c.value=!1}}}const G={class:"virtual-list-container"},J={class:"content-header"},K=M({__name:"index",setup(f){const g=p(),t=s(()=>{var o;return((o=g.value)==null?void 0:o.clientHeight)-96}),{startLoading:c,endLoading:d}=q(g),h=p(""),e=p([]),N=s(()=>e.value.filter(o=>o.name.includes(h.value)));D(()=>{e.value=y()});const v=()=>{e.value=[...e.value,...y(50)]},b=()=>{c(),setTimeout(()=>{v(),d()},1e3*2)},y=(o=200)=>{const l=[],a=o;for(let i=0;i<a;i++)l.push({name:H(10)});return l};function H(o){const l="abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789",i=l.length-1;let n="";o=o||15;for(let r=0,_;r<o;r++)_=function(u,x){return u(0,i,x,u)}(function(u,x,B,C){let k=Math.floor(Math.random()*(x-u+1)+u);const A=l.length-10;return B==0&&k>=A&&(k=C(u,x,B,C)),k},r),n+=l[_];return n}return(o,l)=>(L(),S("div",G,[m("div",{ref_key:"contentRef",ref:g,class:"content"},[m("div",J,[l[1]||(l[1]=m("div",{class:"title"},"虚拟列表",-1)),I(m("input",{"onUpdate:modelValue":l[0]||(l[0]=a=>h.value=a)},null,512),[[z,h.value]]),m("button",{onClick:v},"手动添加数据")]),j(U,{list:N.value,itemHeight:28,height:t.value,onArriveBottom:b},{default:E(({item:a,index:i})=>[m("div",null,F(i+"-"+a.name),1)]),_:1},8,["list","height"])],512)]))}}),Q=P(K,[["__scopeId","data-v-4b2ecdc3"]]);export{Q as default};