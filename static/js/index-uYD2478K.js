import{d as C,c as H,o as x,a as S,G as X,H as O,I as j,_ as B,h as E,w as D,j as z,i as F,b as o,D as p,J as _,x as m,t as w,p as G,k as J}from"./index-DwJGF_ix.js";const U=C({__name:"Tag",props:{type:{},light:{type:Boolean},ghost:{type:Boolean},allowClear:{type:Boolean}},setup(c){const a=c,h=H(()=>{let s=`custom-tag custom-tag-${a.type}`;return a.light&&(s+=" custom-tag-light"),a.ghost&&(s+=" custom-tag-ghost"),{class:s}});return(s,i)=>(x(),S("div",O(j(h.value)),[X(s.$slots,"default",{},void 0,!0)],16))}}),v=B(U,[["__scopeId","data-v-8761e710"]]),N=c=>(G("data-v-392fafd0"),c=c(),J(),c),q={class:"input-tag-wrapper"},K={class:"box-item"},Q=N(()=>o("div",{class:"title"},"标签",-1)),W={class:"content"},Y={class:"box-item"},Z=N(()=>o("div",{class:"title"},"输入框",-1)),ee={class:"content"},te={class:"rule-input"},ne={class:"box-item"},oe=N(()=>o("div",{class:"title"},"预览",-1)),se={class:"content"},ae={class:"rule-preview"},f={INDEX:"索引",TIME:"日期"},le=C({__name:"InputTag",props:{rule:{default:""}},setup(c){const a=c,h=H(()=>P(s.value,1)),s=E(a.rule);D(()=>a.rule,()=>{s.value=a.rule});const i=E();D(i,()=>{i.value&&(i.value.innerHTML=a.rule)});const b=E(),A=()=>{const n=window.getSelection&&window.getSelection();n&&n.rangeCount&&(b.value=n.getRangeAt(0))};z(()=>{document.addEventListener("selectionchange",A,!1)}),F(()=>{document.removeEventListener("selectionchange",A,!1)});const V=n=>{const e=n.target.innerHTML;s.value=e},L=()=>{},I=n=>{const e=`${n}`;k(e);const t=i.value.innerHTML;s.value=t},$=n=>{const e=`<input type="button" value='${f[n]}' />`;k(e);const t=i.value.innerHTML;s.value=t},P=(n,e,t)=>{let l=n||"";const R=/<input[^>]+>/g,r=l.match(R);if(!r)return l;for(let d=0;d<r.length;d++){const T=/value="([^"]*)"/,u=r[d].match(T);if(u){let g="";const y=u[1];y==f.INDEX?g=e+"":y==f.TIME&&(g=new Date().toLocaleString()),l=l.replace(r[d],g)}}return console.log(l),l},k=n=>{var r,d;const e=window.getSelection();if(!e)return;let t;if(e&&e.rangeCount&&(t=e.getRangeAt(0)),["",null,void 0].includes(t))t=(r=M())==null?void 0:r.getRangeAt(0);else{const T=document.getElementById("edit"),u=document.createRange();u.selectNode(T);const g=t.compareBoundaryPoints(Range.START_TO_START,u),y=t.compareBoundaryPoints(Range.END_TO_END,u);g!==-1&&y!==1||(t=(d=M())==null?void 0:d.getRangeAt(0))}console.log(t);const l=t.createContextualFragment(n),R=l.lastChild;t.insertNode(l),R&&(t=t.cloneRange(),t.setStartAfter(R),t.collapse(!0),e.removeAllRanges(),e.addRange(t))},M=n=>{const e=document.getElementById("edit");e==null||e.focus();const t=window.getSelection();return t.selectAllChildren(e),t.collapseToEnd(),t};return(n,e)=>(x(),S("div",q,[o("div",K,[Q,o("div",W,[p(v,{ghost:"",type:"primary",onClick:e[0]||(e[0]=t=>I("常量名称1"))},{default:_(()=>[m(" 常量 - 名称1 ")]),_:1}),p(v,{ghost:"",type:"primary",onClick:e[1]||(e[1]=t=>I("常量名称2"))},{default:_(()=>[m(" 常量 - 名称2 ")]),_:1}),p(v,{ghost:"",type:"primary",onClick:e[2]||(e[2]=t=>I("常量名称3"))},{default:_(()=>[m(" 常量 - 名称3 ")]),_:1}),p(v,{type:"primary",onClick:e[3]||(e[3]=t=>$("INDEX"))},{default:_(()=>[m(" 变量 - "+w(f.INDEX),1)]),_:1}),p(v,{type:"primary",onClick:e[4]||(e[4]=t=>$("TIME"))},{default:_(()=>[m(" 变量 - "+w(f.TIME),1)]),_:1})])]),o("div",Y,[Z,o("div",ee,[o("div",te,[o("div",{id:"edit",ref_key:"innerRuleRef",ref:i,class:"common-name-rule-input",contenteditable:"true",placeholder:"请输入",onInput:V,onBlur:L},null,544)])])]),o("div",ne,[oe,o("div",se,[o("div",ae,w(h.value),1)])])]))}}),ce=B(le,[["__scopeId","data-v-392fafd0"]]),ie={class:"input-tag-container"},re=C({__name:"index",setup(c){return(a,h)=>(x(),S("div",ie,[p(ce)]))}}),pe=B(re,[["__scopeId","data-v-c85c907e"]]);export{pe as default};
