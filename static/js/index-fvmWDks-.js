import{d as F,h as R,n as x,C as T,f as E,a as _,z as S,p as Y,b as q,o as B,s as se,k as K,D as M,E as j,G as O,g as N,v as U,F as oe,i as ne,y as ae,l as re,e as D,c as ue,H as le,t as ce}from"./index-CGIzB1Ky.js";import{_ as I}from"./plugin-vueexport-helper-DlAUqK2U.js";const ie=n=>{const s=n.toString(16).toUpperCase();return s.length==1?"0"+s:s},P=n=>{const s=pe(n).substr(1).split(""),t=s[0]+s[1],o=s[2]+s[3],v=s[4]+s[5],m=s[6]+s[7],l=parseInt(t,16),e=parseInt(o,16),r=parseInt(v,16),i=parseInt(m,16)/255;return{hex:"#"+t+o+v,hexa:"#"+t+o+v+m,r:l,g:e,b:r,a:i}},pe=n=>{if(!n||n.length<3)return"#000000FF";let s=n.toUpperCase();if(s.startsWith("#")&&(s=s.substr(1)),s.length<3)return"#000000FF";let t,o,v,m;if(t=o=v="00",m="FF",s.length===3){const e=s.repeat(2).split("").map(r=>J(r));t=e[0]+e[1],o=e[2]+e[3],v=e[4]+e[5]}else if(s.length>=6){const l=s.split("").map(e=>J(e));t=l[0]+l[1],o=l[2]+l[3],v=l[4]+l[5],l.length===8&&(m=l[6]+l[7])}return`#${t}${o}${v}${m}`},J=n=>n.length<0||n.length>1?"0":isNaN(n)?["A","B","C","D","E","F"].includes(n.toUpperCase())?n.toUpperCase():"0":n,Q=n=>{const s=l=>l>255?255:l<0?0:Math.round(l),t=n/60*255,o=s(Math.abs(t-765)-255),v=s(510-Math.abs(t-510)),m=s(510-Math.abs(t-1020));return{r:o,g:v,b:m}},z=(n,s,t)=>{let o,v,m,l,e,r=0,i=0,g=0;switch(s<0&&(s=0),s>1&&(s=1),t<0&&(t=0),t>1&&(t=1),n%=360,n<0&&(n+=360),n/=60,o=Math.floor(n),v=n-o,m=t*(1-s),l=t*(1-s*v),e=t*(1-s*(1-v)),o){case 0:r=t,i=e,g=m;break;case 1:r=l,i=t,g=m;break;case 2:r=m,i=t,g=e;break;case 3:r=m,i=l,g=t;break;case 4:r=e,i=m,g=t;break;case 5:r=t,i=m,g=l;break}return{r:Math.round(r*255),g:Math.round(i*255),b:Math.round(g*255)}},Z=n=>{const{r:s,g:t,b:o}=n;let v=(1<<24)+s*65536+t*256+o;return v=v.toString(16).toUpperCase(),"#"+v.slice(1)},W=n=>{let s=n.substring(1);s="0x"+(s.length<6?l(s,2):s);const t=s>>16,o=s>>8&"0xff",v=s&"0xff";return{r:t,g:o,b:v};function m(e,r){let i="";for(let g=0;g<r;g++)i+=e;return i}function l(e,r){let i="";for(const g of e)i+=m(g,r);return i}},A=({r:n,g:s,b:t})=>{n=n/255,s=s/255,t=t/255;const o=Math.max(n,s,t),v=Math.min(n,s,t),m=o-v,l=o,e=o===0?0:m/o;let r=0;if(m!==0){switch(o){case n:r=(s-t)/m+(s<t?6:0);break;case s:r=(t-n)/m+2;break;case t:r=(n-s)/m+4;break}r=r/6}return{h:r*360,s:e,v:l}},ee=n=>(Y("data-v-f01603c6"),n=n(),q(),n),de=ee(()=>_("div",{class:"sat-container"},null,-1)),ve=ee(()=>_("div",{class:"val-container"},null,-1)),he=F({__name:"Gradient",props:{width:{},currentColor:{},hue:{},sat:{},val:{}},emits:["update:sat","update:val"],setup(n,{expose:s,emit:t}){const o=n,v=t,m=R(()=>{const{r:p,g:f,b:d}=Q(o.hue);return`rgba(${p}, ${f}, ${d}, 1)`}),l=R(()=>o.width),e=x(0),r=x(0),i=x(0),g=x(),w=x(),k=p=>{p.which===1&&(C(),u(),p.target!=w.value&&(a(p.offsetX,p.offsetY),p.stopPropagation(),p.preventDefault()))},$=()=>{h()},c=p=>{let f=p.pageX-e.value,d=p.pageY-r.value;f=Math.min(l.value,Math.max(0,f)),d=Math.min(i.value,Math.max(0,d)),a(f,d)},a=(p,f)=>{w.value.style.transform=`translate(${p}px, ${f}px)`;const d=p/l.value,b=1-f/i.value;v("update:sat",d),v("update:val",b)},u=()=>{const p=g.value.getBoundingClientRect();e.value=p.left,r.value=p.top,i.value=p.height};s({setSizePoses:u,setCursor:()=>{const p=l.value*o.sat,f=i.value*(1-o.val);w.value.style.transform=`translate(${p}px, ${f}px)`}});const C=()=>{document.addEventListener("mouseup",$),document.addEventListener("mousemove",c)},h=()=>{document.removeEventListener("mouseup",$),document.removeEventListener("mousemove",c)};return T(()=>{h()}),(p,f)=>(B(),E("div",{class:"gradient-content",ref_key:"gradientRef",ref:g,style:S({backgroundColor:m.value}),onMousedown:k},[de,ve,_("div",{ref_key:"gradientCursorRef",ref:w,class:"cursor-container",style:S({backgroundColor:o.currentColor})},null,4)],36))}}),fe=I(he,[["__scopeId","data-v-f01603c6"]]),me=F({__name:"Hue",props:{width:{},hue:{}},emits:["update:hue"],setup(n,{expose:s,emit:t}){const o=n,v=t,m=R(()=>{const{r:C,g:h,b:p}=Q(o.hue);return`rgba(${C}, ${h}, ${p}, 1)`}),l=R(()=>o.width),e=x(0),r=x(),i=x(),g=C=>{C.which===1&&(u(),c(),C.target!=i.value&&($(C.offsetX),C.stopPropagation(),C.preventDefault()))},w=()=>{y()},k=C=>{let h=C.pageX-e.value;h=Math.min(l.value,Math.max(0,h)),$(h)},$=C=>{i.value.style.transform=`translate(${C}px, 0px)`;const h=Math.round(C/l.value*360*100)/100;v("update:hue",h)},c=()=>{const C=r.value.getBoundingClientRect();e.value=C.left};s({setSizePoses:c,setCursor:()=>{const C=o.hue*l.value/360;i.value.style.transform=`translate(${C}px, 0px)`}});const u=()=>{document.addEventListener("mouseup",w),document.addEventListener("mousemove",k)},y=()=>{document.removeEventListener("mouseup",w),document.removeEventListener("mousemove",k)};return T(()=>{y()}),(C,h)=>(B(),E("div",{ref_key:"hueRef",ref:r,class:"hue-slider",onMousedown:g},[_("div",{ref_key:"hueCursorRef",ref:i,class:"slider-cursor",style:S({backgroundColor:m.value})},null,4)],544))}}),ge=I(me,[["__scopeId","data-v-2da596e5"]]),be=F({__name:"Opacity",props:{width:{},hue:{},sat:{},val:{},alpha:{}},emits:["update:alpha"],setup(n,{expose:s,emit:t}){const o=n,v=t,m=R(()=>{const{r:h,g:p,b:f}=z(o.hue,o.sat,o.val),d=`rgba(${h}, ${p}, ${f}, 0)`,b=`rgba(${h}, ${p}, ${f}, 1)`;return`linear-gradient(to right, ${d}, ${b})`}),l=R(()=>{const{r:h,g:p,b:f}=z(o.hue,o.sat,o.val);return`rgba(${h}, ${p}, ${f}, ${o.alpha})`}),e=R(()=>o.width),r=x(0),i=x(),g=x(),w=h=>{h.which===1&&(y(),a(),h.target!=g.value&&(c(h.offsetX),h.stopPropagation(),h.preventDefault()))},k=()=>{C()},$=h=>{let p=h.pageX-r.value;p=Math.min(e.value,Math.max(0,p)),c(p)},c=h=>{g.value.style.transform=`translate(${h}px, 0px)`;const p=h/e.value*100/100;v("update:alpha",p)},a=()=>{const h=i.value.getBoundingClientRect();r.value=h.left};s({setSizePoses:a,setCursor:()=>{const h=o.alpha*e.value;g.value.style.transform=`translate(${h}px, 0px)`}});const y=()=>{document.addEventListener("mouseup",k),document.addEventListener("mousemove",$)},C=()=>{document.removeEventListener("mouseup",k),document.removeEventListener("mousemove",$)};return T(()=>{C()}),(h,p)=>(B(),E("div",{ref_key:"alphaRef",ref:i,class:"alpha-slider",onMousedown:w},[_("div",{class:"alpha-slider-content",style:S({background:m.value})},[_("div",{ref_key:"alphaCursorRef",ref:g,class:"slider-cursor",style:S({background:l.value})},null,4)],4)],544))}}),Ce=I(be,[["__scopeId","data-v-13dce5c2"]]),te=n=>(Y("data-v-ab4d0fa4"),n=n(),q(),n),_e={class:"input-content"},xe=["value"],we=te(()=>_("option",{class:"input-select-option",value:"hex"},"HEX",-1)),ye=te(()=>_("option",{class:"input-select-option",value:"rgb"},"RGB",-1)),$e=[we,ye],ke={class:"input-rgb"},Be={class:"input-rgb-item"},Re={class:"input-rgb-item"},Ee={class:"input-rgb-item"},Me={key:0,class:"input-rgb-item"},Se={class:"input-hex"},Ue=F({__name:"ColorInput",props:{hue:{},sat:{},val:{},alpha:{},showOpacity:{type:Boolean}},emits:["update:hue","update:sat","update:val","update:alpha"],setup(n,{emit:s}){const t=n,o=s,v=x("hex"),m=c=>{const a=c.target.value;v.value=a},l=()=>{const{r:c,g:a,b:u}=z(t.hue,t.sat,t.val),y=Z({r:c,g:a,b:u});return{r:c,g:a,b:u,a:t.alpha,hex:y}},e=se({r:0,g:0,b:0,a:1,hex:"#FFFE00FF"});K([()=>t.hue,()=>t.sat,()=>t.val,()=>t.alpha],()=>{const{r:c,g:a,b:u,a:y,hex:C}=l();e.r=c,e.g=a,e.b=u,e.a=y,e.hex=C},{immediate:!0});const r=()=>{let c=Number(e.r);c=isNaN(c)?0:c>255?255:c<0?0:c;let a=Number(e.g);a=isNaN(a)?0:a>255?255:a<0?0:a;let u=Number(e.b);return u=isNaN(u)?0:u>255?255:u<0?0:u,{r:c,g:a,b:u}},i=()=>{let c=Number(e.a);return c=isNaN(c)?0:c>1?1:c<0?0:c,c},g=c=>{var a;if(c=="rgb"){const{r:u,g:y,b:C}=r(),{h,s:p,v:f}=A({r:u,g:y,b:C});U(()=>{o("update:hue",h),o("update:sat",p),o("update:val",f)})}else if(c=="a"){const u=i();U(()=>{o("update:alpha",u)})}else if(c=="hex"&&((a=e.hex)==null?void 0:a.length)>=7){const{hex:u}=P(e.hex),{r:y,g:C,b:h}=W(u),{h:p,s:f,v:d}=A({r:y,g:C,b:h});U(()=>{o("update:hue",p),o("update:sat",f),o("update:val",d)})}},w=()=>{const{r:c,g:a,b:u}=r();e.r=c,e.g=a,e.b=u},k=()=>{const c=i();e.a=c},$=c=>{const a=c.target.value;if(a.length<7){const{hex:u}=l();e.hex=u}else if(a.length>=7){const{hex:u}=P(a.slice(0,7));e.hex=u}};return(c,a)=>(B(),E("div",_e,[_("select",{class:"input-select",value:v.value,onChange:m},$e,40,xe),M(_("div",ke,[_("div",Be,[M(_("input",{"onUpdate:modelValue":a[0]||(a[0]=u=>e.r=u),onInput:a[1]||(a[1]=u=>g("rgb")),onBlur:w},null,544),[[O,e.r]])]),_("div",Re,[M(_("input",{"onUpdate:modelValue":a[2]||(a[2]=u=>e.g=u),onInput:a[3]||(a[3]=u=>g("rgb")),onBlur:w},null,544),[[O,e.g]])]),_("div",Ee,[M(_("input",{"onUpdate:modelValue":a[4]||(a[4]=u=>e.b=u),onInput:a[5]||(a[5]=u=>g("rgb")),onBlur:w},null,544),[[O,e.b]])]),t.showOpacity?(B(),E("div",Me,[M(_("input",{class:"alpha-input","onUpdate:modelValue":a[6]||(a[6]=u=>e.a=u),onInput:a[7]||(a[7]=u=>g("a")),onBlur:k},null,544),[[O,e.a]])])):N("",!0)],512),[[j,v.value==="rgb"]]),M(_("div",Se,[M(_("input",{"onUpdate:modelValue":a[8]||(a[8]=u=>e.hex=u),onInput:a[9]||(a[9]=u=>g("hex")),onBlur:$},null,544),[[O,e.hex]]),t.showOpacity?M((B(),E("input",{key:0,class:"alpha-input","onUpdate:modelValue":a[10]||(a[10]=u=>e.a=u),onInput:a[11]||(a[11]=u=>g("a")),onBlur:k},null,544)),[[O,e.a]]):N("",!0)],512),[[j,v.value==="hex"]])]))}}),Fe=I(Ue,[["__scopeId","data-v-ab4d0fa4"]]),Ie={key:0,class:"swatch-content"},Le=["onClick"],Oe=F({__name:"Swatches",props:{swatches:{},hideSwatches:{type:Boolean,default:!1},showOpacity:{type:Boolean},currentColor:{}},emits:["select"],setup(n,{emit:s}){const t=n,o=s,v=R(()=>{const l=["#56CCF2","#4BDDD4","#61F0E7","#49F397","#96E24A","#F1E257","#FCB17A","#EB5C5C","#DD789C","#F563DE","#C18AF7","#8177F5","#9F71B5","#A9A1C0","#CEA3F9","#4792E6"];return t.showOpacity?t.swatches??l.map(e=>e+"FF"):t.swatches??l}),m=l=>{const{hex:e,a:r}=P(l);t.showOpacity?o("select",e,r):o("select",e)};return(l,e)=>l.hideSwatches?N("",!0):(B(),E("div",Ie,[(B(!0),E(oe,null,ne(v.value,r=>(B(),E("div",{key:r,class:ae(["swatch-item",{"has-border":t.currentColor===r}]),style:S({backgroundColor:r}),onClick:i=>m(r)},null,14,Le))),128))]))}}),He=I(Oe,[["__scopeId","data-v-5debd9cb"]]),De={class:"panel-content"},Ne={class:"controls-container"},Pe=F({__name:"Panel",props:{value:{default:""},width:{default:240},showOpacity:{type:Boolean,default:!0}},emits:["update:value","change"],setup(n,{emit:s}){const t=n,o=s,v=R(()=>t.width),m=x(),l=R(()=>{var f;return((f=m.value)==null?void 0:f.offsetWidth)??0}),e=x(0),r=x(0),i=x(0),g=x(1),w=R(()=>{const{r:f,g:d,b}=z(e.value,r.value,i.value),L=Z({r:f,g:d,b});if(t.showOpacity){const H=ie(Math.round(g.value*255));return L+H}else return L});K(w,()=>{U(()=>{o("update:value",w.value),o("change",w.value),u()})}),re(()=>{U(()=>{k()})});const k=()=>{if(t.value){const{hex:f,a:d}=P(t.value),{r:b,g:L,b:H}=W(f),{h:G,s:V,v:X}=A({r:b,g:L,b:H});e.value=G,r.value=V,i.value=X,t.showOpacity&&(g.value=d)}U(()=>{u()})},$=x(),c=x(),a=x(),u=()=>{y(),U(()=>{C()})},y=()=>{var f,d,b;(f=$.value)==null||f.setSizePoses(),(d=c.value)==null||d.setSizePoses(),(b=a.value)==null||b.setSizePoses()},C=()=>{var f,d,b;(f=$.value)==null||f.setCursor(),(d=c.value)==null||d.setCursor(),(b=a.value)==null||b.setCursor()},h=(f,d)=>{const{r:b,g:L,b:H}=W(f),{h:G,s:V,v:X}=A({r:b,g:L,b:H});e.value=G,r.value=V,i.value=X,t.showOpacity&&(g.value=d)},p=async()=>{const b=(await new window.EyeDropper().open({})).sRGBHex;h(b,"1")};return(f,d)=>(B(),E("div",De,[D(fe,{ref_key:"gradientRef",ref:$,width:v.value,currentColor:w.value,hue:e.value,sat:r.value,"onUpdate:sat":d[0]||(d[0]=b=>r.value=b),val:i.value,"onUpdate:val":d[1]||(d[1]=b=>i.value=b)},null,8,["width","currentColor","hue","sat","val"]),_("div",Ne,[_("div",{class:"slider-container",ref_key:"sliderRef",ref:m},[D(ge,{ref_key:"hueRef",ref:c,width:l.value,hue:e.value,"onUpdate:hue":d[2]||(d[2]=b=>e.value=b)},null,8,["width","hue"]),t.showOpacity?(B(),ue(Ce,{key:0,ref_key:"opacityRef",ref:a,width:l.value,alpha:g.value,"onUpdate:alpha":d[3]||(d[3]=b=>g.value=b),hue:e.value,sat:r.value,val:i.value},null,8,["width","alpha","hue","sat","val"])):N("",!0)],512),_("div",{class:"square",onClick:p},[_("span",{style:S({backgroundColor:w.value})},null,4)])]),D(Fe,{hue:e.value,"onUpdate:hue":d[4]||(d[4]=b=>e.value=b),sat:r.value,"onUpdate:sat":d[5]||(d[5]=b=>r.value=b),val:i.value,"onUpdate:val":d[6]||(d[6]=b=>i.value=b),alpha:g.value,"onUpdate:alpha":d[7]||(d[7]=b=>g.value=b),showOpacity:t.showOpacity},null,8,["hue","sat","val","alpha","showOpacity"]),D(He,le(f.$attrs,{currentColor:w.value,showOpacity:f.showOpacity,onSelect:h}),null,16,["currentColor","showOpacity"])]))}}),ze=I(Pe,[["__scopeId","data-v-2dcba686"]]),Ae=n=>(Y("data-v-b93e6bd1"),n=n(),q(),n),Ge={class:"color-picker-container"},Ve=Ae(()=>_("div",{class:"tips"},ce("Color Picker"),-1)),Xe={class:"color-panel"},We=F({__name:"index",setup(n){const s=x("#f2f5f7");return(t,o)=>(B(),E("div",Ge,[_("div",{class:"color-picker-content",style:S({"background-color":s.value})},[Ve,_("div",Xe,[D(ze,{value:s.value,"onUpdate:value":o[0]||(o[0]=v=>s.value=v)},null,8,["value"])])],4)]))}}),qe=I(We,[["__scopeId","data-v-b93e6bd1"]]);export{qe as default};