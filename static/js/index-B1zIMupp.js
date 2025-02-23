import{_ as B,a as M,f as R,b as s,d as ot,c as et,r as J,o as lt,q as at,t as Y,x as V,p as rt}from"./index-DxAQDDcl.js";function it(){let S={screenSize:[13,20],intervals:1e3},r,z,h=0;const $=new Map;let x=!0,E=null,O=null,y="",j="",w=[0,0],p=new Set;const c="bg";let G=0,l=()=>{};const H=["I","L","J","Z","S","T","O"],Q={I:[[1,1,1,1]],L:[[1,1,1],[1,0,0]],J:[[1,1,1],[0,0,1]],Z:[[1,1,0],[0,1,1]],S:[[0,1,1],[1,1,0]],T:[[1,1,1],[0,1,0]],O:[[1,1],[1,1]]},_=function(t={}){F(t)};_.create=(t={})=>new _(t),_.prototype={get map(){return[...$.values()]},get status(){return h},get isPause(){return x},get score(){return G},get nextShap(){return{type:j,shapData:O}}},_.prototype.ready=function(){console.log("ready: "),h===0&&(X(),K(),h=1)},_.prototype.play=function(){h===1&&(h=2),x&&(x=!1,U())},_.prototype.pause=function(){x=!0},_.prototype.over=function(){h=3},_.prototype.again=function(t={}){F(t),this.ready()},_.prototype.update=function(t){l=t},_.prototype.action=function(t){const[e,o]=w;h!==2||x||(t==="left"?A([e-1,o]):t==="right"?A([e+1,o]):t==="lower"?A([e,o+1],!0):t==="change"&&q())};const F=(t={})=>{S={...S,...t},r=S.screenSize,z=S.intervals,w=[0,0],p=new Set,h=0,G=0,x=!0;const{datas:e,index:o}=W();O=e,j=o},X=()=>{const[t,e]=r;for(let o=0;o<e;o++)for(let a=0;a<t;a++){const i=[a,o];$.set(T(i),{type:c,vector:i})}},K=()=>{const[t]=r;E=O,y=j,w=[Math.floor(t/2)-(!(t&1)&&y==="I"?2:1),0];const e=g(w);n(e,y,!1);const{datas:o,index:a}=W();O=o,j=a,k(e)&&(h=3),l()},U=()=>{if(!(x||h===3)){if(h===2){const[t,e]=w;A([t,e+1],!0)}setTimeout(()=>{U()},z)}},W=()=>{const t=Math.random()*H.length<<0,e=H[t];return{index:e,datas:Q[e]}},A=([t,e],o=!1)=>{const[,a]=w,i=g([t,e]);if(o===!0&&D([t,e])){N(),K();return}Z(i)||m(i)||I([t,e])},I=t=>{let e=g(w);n(e,c),e=g(t),n(e,y),w=t,l()},n=(t,e,o=!0)=>{t.forEach(a=>{const i=T(a);!o&&$.get(i).type!==c||$.set(i,{type:e,vector:a})})},N=()=>{const t=L();P(t)},L=()=>{const[t,e]=r,o=[];for(let a=e-1;a>=0;a--){let i=!0;for(let u=0;u<t;u++)if($.get(T([u,a])).type===c){i=!1;break}i&&o.push(a)}return G+=o.length,o},g=([t,e],o=E)=>{const a=o.length,i=o[0].length,u=[];for(let f=0;f<a;f++)for(let d=0;d<i;d++)if(o[f][d]===1){let C=[d+t,f+e];y==="I"&&a>=4?C=[d+t+1,f+e-1]:y==="O"&&(C[0]+=1),u.push(C)}return u},P=t=>{const[e]=r;b([...t]).forEach(a=>{for(let i=a;i>=0;i--)for(let u=0;u<e;u++){if(i===a){const tt=T([u,i]);$.set(tt,{type:c,vector:[u,i]}),p.delete(tt);continue}const f=T([u,i]),d=T([u,i+1]),C=$.get(f),st=$.get(d);C.type!==c&&st.type===c&&($.set(f,{type:c,vector:[u,i]}),$.set(d,{type:C.type,vector:[u,i+1]}),p.delete(f),p.add(d))}})},q=()=>{const t=nt(E),e=g(w,t);Z(e)||m(e)||(n(g(w),c),n(e,y),E=t,l())},D=t=>{const e=g(t);if(Z(e)||m(e)){const o=g(w).map(a=>T(a));return p=new Set([...p,...o]),!0}return!1},Z=t=>{const[e,o]=r;return t.some(([a,i])=>a<0||a>=e||i>=o)},m=t=>t.some(e=>p.has(T(e))),k=t=>{const[,e]=w;return!!(e<=0&&m(t))},b=(t,e=[])=>{if(t.length<=0)return e;const o=Math.min(...t),a=t.indexOf(o);return e.push(t.splice(a,1)[0]),b(t,e)},nt=(t,e=!0)=>{const o=t[0].length,a=t.length,i=o-1,u=a-1,f=[];for(let d=0;d<o;d++){f[d]=[];for(let C=0;C<a;C++){if(e){f[d].push(t[u-C][d]);continue}f[d].push(t[C][i-d])}}return f},T=([t,e])=>`${t}_${e}`;return _}const ct={},ut={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"};function dt(S,r){return R(),M("svg",ut,r[0]||(r[0]=[s("path",{fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z"},null,-1)]))}const pt=B(ct,[["render",dt]]),ht={},ft={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"};function vt(S,r){return R(),M("svg",ft,r[0]||(r[0]=[s("path",{fill:"currentColor",d:"M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"},null,-1)]))}const wt=B(ht,[["render",vt]]),gt={},mt={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 48 48"};function xt(S,r){return R(),M("svg",mt,r[0]||(r[0]=[s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M31 36L19 24l12-12"},null,-1)]))}const yt=B(gt,[["render",xt]]),_t={},St={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 48 48"};function $t(S,r){return R(),M("svg",St,r[0]||(r[0]=[s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"m19 12l12 12l-12 12"},null,-1)]))}const kt=B(_t,[["render",$t]]),Ct={},Mt={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256"};function Rt(S,r){return R(),M("svg",Mt,r[0]||(r[0]=[s("path",{fill:"currentColor",d:"m208.49 152.49l-72 72a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L116 187V40a12 12 0 0 1 24 0v147l51.51-51.52a12 12 0 0 1 17 17Z"},null,-1)]))}const Dt=B(Ct,[["render",Rt]]),It={},bt={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"};function zt(S,r){return R(),M("svg",bt,r[0]||(r[0]=[s("g",{fill:"none"},[s("path",{d:"M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"}),s("path",{fill:"currentColor",d:"M5.631 7.23a1.5 1.5 0 0 1 1.967-.446l.122.077l1.566 1.097a1.497 1.497 0 0 1 .5 2.048l-.078.118l-1.128 1.612a1.5 1.5 0 0 1-2.648-.373a7 7 0 0 0-.73.305a3.3 3.3 0 0 0-.553.332c.27.209.746.46 1.461.698c1.439.48 3.521.802 5.89.802s4.451-.322 5.89-.802c.716-.239 1.193-.49 1.462-.7l-.135-.095a4 4 0 0 0-.305-.178c-.686-.36-1.764-.702-3.157-.933a1.5 1.5 0 0 1 .49-2.96c1.57.26 2.992.674 4.066 1.24c.946.498 2.189 1.427 2.189 2.928c0 1.07-.652 1.852-1.279 2.346c-.643.507-1.481.898-2.383 1.198c-1.819.607-4.236.956-6.838.956s-5.02-.35-6.838-.956c-.902-.3-1.74-.691-2.383-1.198C2.152 13.852 1.5 13.07 1.5 12c0-.8.371-1.448.808-1.916c.43-.46.986-.82 1.567-1.107c.451-.223.96-.421 1.514-.595A1.5 1.5 0 0 1 5.63 7.23ZM12 3.5a1.5 1.5 0 0 1 1.493 1.356L13.5 5v7h-3V5A1.5 1.5 0 0 1 12 3.5M10.5 18v1a1.5 1.5 0 0 0 3 0v-1z"})],-1)]))}const Tt=B(It,[["render",zt]]),Bt={},Lt={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 20 20"};function Vt(S,r){return R(),M("svg",Lt,r[0]||(r[0]=[s("g",{fill:"currentColor"},[s("path",{d:"M13.937 4.211a1 1 0 0 1-1.126 1.653A5 5 0 1 0 15 10a1 1 0 1 1 2 0a7 7 0 1 1-3.063-5.789"}),s("path",{d:"M13.539 12.506a1 1 0 1 1-1.078-1.685l3.482-2.227a1 1 0 0 1 1.077 1.685z"}),s("path",{d:"M18.903 12.41a1 1 0 0 1-1.826.815l-1.508-3.38a1 1 0 1 1 1.826-.815z"})],-1)]))}const Et=B(Bt,[["render",Vt]]),Ot={class:"tetris-wrapper"},jt={class:"inner-wrapper"},At={class:"tetris-content"},Nt={class:"info"},Pt={class:"next-box"},qt={class:"score"},Jt={class:"status"},Gt={key:0,class:"mask"},Ht={class:"tetris-actions"},v=18,Zt=ot({__name:"index",setup(S){rt(I=>({f02160ae:$.value}));const r=it(),z=[13,20],h=[5,2],$=et(()=>z[0]*v+24*2+"px"),x=J(),E=()=>{x.value.style.width=`${h[0]*v}px`,x.value.style.height=`${h[1]*v}px`},O=I=>{const n=document.createElement("div"),{type:N,shapData:L}=I,[g,P]=h,q=new Set,D=L.length,Z=L[0].length;n.style.width=`${g*v}px`,n.style.height=`${P*v}px`,x.value.innerHTML=null;for(let m=0;m<D;m++)for(let k=0;k<Z;k++)L[m][k]===1&&q.add(`${N==="O"?k+1:k}_${m}`);for(let m=0;m<P;m++)for(let k=0;k<g;k++){const b=document.createElement("div");b.style.width=b.style.height=`${v}px`,b.style.left=`${k*v}px`,b.style.top=`${m*v}px`,b.setAttribute("class",`rect rect-${q.has(`${k-1}_${m}`)?N:"bg"}`),n.appendChild(b)}x.value.appendChild(n)},y=J(),j=()=>{y.value.style.width=`${z[0]*v}px`,y.value.style.height=`${z[1]*v}px`},w=I=>{const n=document.createElement("div"),[N,L]=z;y.value.innerHTML=null,n.style.width=`${N*v}px`,n.style.height=`${L*v}px`,I.forEach(g=>{const[P,q]=g.vector,D=document.createElement("div");D.style.width=D.style.height=`${v}px`,D.style.left=`${P*v}px`,D.style.top=`${q*v}px`,D.setAttribute("class",`rect rect-${g.type}`),n.appendChild(D)}),y.value.appendChild(n)},p=J(-1),c=J(!1),G=et(()=>c.value?"暂停了":p.value<=1?"请开始游戏":p.value==2?"正在游戏中":p.value==3?"结束了":""),l=J(),H=J(0),Q=()=>{l.value=new r({screenSize:z,intervals:1e3}),l.value.update(()=>{w(l.value.map),O(l.value.nextShap),H.value=l.value.score,p.value=l.value.status}),l.value&&document.addEventListener("keydown",I=>{const{keyCode:n}=I;n===37?l.value.action("left"):n===39?l.value.action("right"):n===38?l.value.action("change"):n===40&&l.value.action("lower")})},_=()=>{if(c.value)c.value=!1,l.value.play();else{if(l.value.ready(),c.value=!1,l.value.status!==1&&l.value.status!==2)return;l.value.play()}},F=()=>{l.value.status===2&&(l.value.pause(),c.value=!0)},X=()=>{l.value.over(),p.value=l.value.status,c.value=!1,l.value.again()},K=()=>{l.value.action("left")},U=()=>{l.value.action("right")},W=()=>{l.value.action("change")},A=()=>{l.value.action("lower")};return lt(()=>{E(),j(),Q()}),(I,n)=>(R(),M("div",Ot,[s("div",jt,[s("div",At,[s("div",{class:"tetris-container",ref_key:"tetrisContainerRef",ref:y},null,512),s("div",Nt,[n[3]||(n[3]=s("div",{class:"next"},"下一个",-1)),s("div",Pt,[s("div",{class:"next-shape",ref_key:"nextShapeRef",ref:x},null,512)]),n[4]||(n[4]=s("div",{class:"score_title"},"得分",-1)),s("div",qt,Y(H.value),1),n[5]||(n[5]=s("div",{class:"status_title"},"状态",-1)),s("div",Jt,Y(p.value),1),p.value<=1||c.value?(R(),M("div",{key:0,class:"action-item play",onClick:_},[V(pt),n[0]||(n[0]=s("span",{class:"label"},"开始",-1))])):(R(),M("div",{key:1,class:"action-item pause",onClick:F},[V(wt),n[1]||(n[1]=s("span",{class:"label"},"暂停",-1))])),s("div",{class:"action-item again",onClick:X},[V(Et),n[2]||(n[2]=s("span",{class:"label"},"重玩",-1))])]),p.value!==2||c.value?(R(),M("div",Gt,Y(G.value),1)):at("",!0)]),s("div",Ht,[s("div",{class:"left",onClick:K},[V(yt),n[6]||(n[6]=s("span",{class:"label"},"左移",-1))]),s("div",{class:"right",onClick:U},[V(kt),n[7]||(n[7]=s("span",{class:"label"},"右移",-1))]),s("div",{class:"down",onClick:A},[V(Dt),n[8]||(n[8]=s("span",{class:"label"},"下移",-1))]),s("div",{class:"rotate",onClick:W},[V(Tt),n[9]||(n[9]=s("span",{class:"label"},"旋转",-1))])])])]))}}),Kt=B(Zt,[["__scopeId","data-v-97fefec5"]]);export{Kt as default};
