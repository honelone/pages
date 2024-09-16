import{d as I,c as b,o as x,a as B,E as P,G as X,H as O,_ as N,r as w,w as M,k as j,j as z,b as o,x as d,y as g,s as m,t as C}from"./index-D3906Olc.js";const F=I({__name:"Tag",props:{type:{},light:{type:Boolean},ghost:{type:Boolean},allowClear:{type:Boolean}},setup(_){const a=_,R=b(()=>{let s=`custom-tag custom-tag-${a.type}`;return a.light&&(s+=" custom-tag-light"),a.ghost&&(s+=" custom-tag-ghost"),{class:s}});return(s,i)=>(x(),B("div",X(O(R.value)),[P(s.$slots,"default",{},void 0,!0)],16))}}),v=N(F,[["__scopeId","data-v-8066967e"]]),G={class:"input-tag-wrapper"},U={class:"box-item"},q={class:"content"},J={class:"box-item"},K={class:"content"},Q={class:"rule-input"},W={class:"box-item"},Y={class:"content"},Z={class:"rule-preview"},f={INDEX:"索引",TIME:"日期"},ee=I({__name:"InputTag",props:{rule:{default:""}},setup(_){const a=_,R=b(()=>L(s.value,1)),s=w(a.rule);M(()=>a.rule,()=>{s.value=a.rule});const i=w();M(i,()=>{i.value&&(i.value.innerHTML=a.rule)});const H=w(),A=()=>{const n=window.getSelection&&window.getSelection();n&&n.rangeCount&&(H.value=n.getRangeAt(0))};j(()=>{document.addEventListener("selectionchange",A,!1)}),z(()=>{document.removeEventListener("selectionchange",A,!1)});const D=n=>{const e=n.target.innerHTML;s.value=e},V=()=>{},E=n=>{const e=`${n}`;$(e);const t=i.value.innerHTML;s.value=t},S=n=>{const e=`<input type="button" value='${f[n]}' />`;$(e);const t=i.value.innerHTML;s.value=t},L=(n,e,t)=>{let l=n||"";const y=/<input[^>]+>/g,r=l.match(y);if(!r)return l;for(let c=0;c<r.length;c++){const h=/value="([^"]*)"/,u=r[c].match(h);if(u){let p="";const T=u[1];T==f.INDEX?p=e+"":T==f.TIME&&(p=new Date().toLocaleString()),l=l.replace(r[c],p)}}return console.log(l),l},$=n=>{var r,c;const e=window.getSelection();if(!e)return;let t;if(e&&e.rangeCount&&(t=e.getRangeAt(0)),["",null,void 0].includes(t))t=(r=k())==null?void 0:r.getRangeAt(0);else{const h=document.getElementById("edit"),u=document.createRange();u.selectNode(h);const p=t.compareBoundaryPoints(Range.START_TO_START,u),T=t.compareBoundaryPoints(Range.END_TO_END,u);p!==-1&&T!==1||(t=(c=k())==null?void 0:c.getRangeAt(0))}console.log(t);const l=t.createContextualFragment(n),y=l.lastChild;t.insertNode(l),y&&(t=t.cloneRange(),t.setStartAfter(y),t.collapse(!0),e.removeAllRanges(),e.addRange(t))},k=n=>{const e=document.getElementById("edit");e==null||e.focus();const t=window.getSelection();return t.selectAllChildren(e),t.collapseToEnd(),t};return(n,e)=>(x(),B("div",G,[o("div",U,[e[8]||(e[8]=o("div",{class:"title"},"标签",-1)),o("div",q,[d(v,{ghost:"",type:"primary",onClick:e[0]||(e[0]=t=>E("常量名称1"))},{default:g(()=>e[5]||(e[5]=[m(" 常量 - 名称1 ")])),_:1}),d(v,{ghost:"",type:"primary",onClick:e[1]||(e[1]=t=>E("常量名称2"))},{default:g(()=>e[6]||(e[6]=[m(" 常量 - 名称2 ")])),_:1}),d(v,{ghost:"",type:"primary",onClick:e[2]||(e[2]=t=>E("常量名称3"))},{default:g(()=>e[7]||(e[7]=[m(" 常量 - 名称3 ")])),_:1}),d(v,{type:"primary",onClick:e[3]||(e[3]=t=>S("INDEX"))},{default:g(()=>[m(" 变量 - "+C(f.INDEX),1)]),_:1}),d(v,{type:"primary",onClick:e[4]||(e[4]=t=>S("TIME"))},{default:g(()=>[m(" 变量 - "+C(f.TIME),1)]),_:1})])]),o("div",J,[e[9]||(e[9]=o("div",{class:"title"},"输入框",-1)),o("div",K,[o("div",Q,[o("div",{id:"edit",ref_key:"innerRuleRef",ref:i,class:"common-name-rule-input",contenteditable:"true",placeholder:"请输入",onInput:D,onBlur:V},null,544)])])]),o("div",W,[e[10]||(e[10]=o("div",{class:"title"},"预览",-1)),o("div",Y,[o("div",Z,C(R.value),1)])])]))}}),te=N(ee,[["__scopeId","data-v-b043cd0e"]]),ne={class:"input-tag-container"},oe=I({__name:"index",setup(_){return(a,R)=>(x(),B("div",ne,[d(te)]))}}),le=N(oe,[["__scopeId","data-v-fd23992b"]]);export{le as default};