import{d as w,r as _,c as I,o as k,a as n,b as c,F as l,e as u,u as m,f,g as o,n as B,t as d,_ as P}from"./index-COQhxWnb.js";var e=(s=>(s.PREVIEW="PREVIEW",s.GAME="GAME",s.BUSINESS="BUSINESS",s))(e||{});const p=[{label:"Firework",tag:e.PREVIEW,path:"/preview/firework"},{label:"Radio Grid Transition",tag:e.PREVIEW,path:"/preview/radio-grid-transition"},{label:"Wave Rainbow",tag:e.PREVIEW,path:"/preview/wave-rotate"},{label:"Background",tag:e.PREVIEW,path:"/preview/background"}],R=[{label:"Tetris",tag:e.GAME,path:"/game/tetris"},{label:"2048",tag:e.GAME,path:"/game/2048"},{label:"sudoku",tag:e.GAME,path:"/game/sudoku"}],V=[{label:"Color Picker",tag:e.BUSINESS,path:"/business/color-picker"},{label:"Input Tag",tag:e.BUSINESS,path:"/business/input-tag"},{label:"Drag Grid",tag:e.BUSINESS,path:"/business/drag"},{label:"Virtual List",tag:e.BUSINESS,path:"/business/virtual-list"}],C=[{label:"Preview",tag:e.PREVIEW,path:"/preview"},{label:"Game",tag:e.GAME,path:"/game"},{label:"Business",tag:e.BUSINESS,path:"/business"}],G={class:"page-header-container"},W=["onClick"],N={class:"page-content-container"},L=["onClick"],M=w({__name:"index",setup(s){const r=_(e.PREVIEW),g=I(()=>{switch(r.value){case e.PREVIEW:return p;case e.BUSINESS:return V;case e.GAME:return R;default:return p}}),E=f(),h=new CustomEvent("customStorage"),v=a=>{window.localStorage.setItem("tag",a),window.dispatchEvent(h),window.localStorage.setItem("new_tag",a),r.value=a},S=a=>{const i=E.resolve({path:a});window.open(i.href,"_blank")};return k(()=>{window.addEventListener("customStorage",a=>{console.log("storage changed: ",a)})}),(a,i)=>(o(),n(l,null,[c("div",G,[(o(!0),n(l,null,u(m(C),t=>(o(),n("div",{key:t.label,class:B(["header-item",{active:t.tag===r.value}]),onClick:b=>v(t.tag)},d(t.label),11,W))),128))]),c("div",N,[(o(!0),n(l,null,u(g.value,t=>(o(),n("div",{key:t.label,class:"content-item",onClick:b=>S(t.path)},d(t.label),9,L))),128))])],64))}}),A=P(M,[["__scopeId","data-v-dff70192"]]);export{A as default};