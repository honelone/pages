import{d as se,n as j,h as ne,l as ae,f as W,a as h,t as K,g as oe,p as re,b as le,o as X}from"./index-DblQHoIm.js";import{_ as ce}from"./plugin-vueexport-helper-DlAUqK2U.js";function ie(){let C={screenSize:[13,20],intervals:1e3},E,z,p=0;const u=new Map;let T=!0,N=null,$=null,D="",B="",v=[0,0],I=new Set;const x="bg";let F=0,G=()=>{};const S=["I","L","J","Z","S","T","O"],O={I:[[1,1,1,1]],L:[[1,1,1],[1,0,0]],J:[[1,1,1],[0,0,1]],Z:[[1,1,0],[0,1,1]],S:[[0,1,1],[1,1,0]],T:[[1,1,1],[0,1,0]],O:[[1,1],[1,1]]},y=function(e={}){a(e)};y.create=(e={})=>new y(e),y.prototype={get map(){return[...u.values()]},get status(){return p},get isPause(){return T},get score(){return F},get nextShap(){return{type:B,shapData:$}}},y.prototype.ready=function(){console.log("ready: "),p===0&&(A(),H(),p=1)},y.prototype.play=function(){p===1&&(p=2),T&&(T=!1,R())},y.prototype.pause=function(){T=!0},y.prototype.over=function(){p=3},y.prototype.again=function(e={}){a(e),this.ready()},y.prototype.update=function(e){G=e},y.prototype.action=function(e){const[t,s]=v;p!==2||T||(e==="left"?M([t-1,s]):e==="right"?M([t+1,s]):e==="lower"?M([t,s+1],!0):e==="change"&&w())};const a=(e={})=>{C={...C,...e},E=C.screenSize,z=C.intervals,v=[0,0],I=new Set,p=0,F=0,T=!0;const{datas:t,index:s}=r();$=t,B=s},A=()=>{const[e,t]=E;for(let s=0;s<t;s++)for(let n=0;n<e;n++){const o=[n,s];u.set(b(o),{type:x,vector:o})}},H=()=>{const[e]=E;N=$,D=B,v=[Math.floor(e/2)-(!(e&1)&&D==="I"?2:1),0];const t=l(v);_(t,D,!1);const{datas:s,index:n}=r();$=s,B=n,Y(t)&&(p=3),G()},R=()=>{if(!(T||p===3)){if(p===2){const[e,t]=v;M([e,t+1],!0)}setTimeout(()=>{R()},z)}},r=()=>{const e=Math.random()*S.length<<0,t=S[e];return{index:t,datas:O[t]}},M=([e,t],s=!1)=>{const n=l([e,t]);if(s===!0&&g([e,t])){L(),H();return}k(n)||V(n)||J([e,t])},J=e=>{let t=l(v);_(t,x),t=l(e),_(t,D),v=e,G()},_=(e,t,s=!0)=>{e.forEach(n=>{const o=b(n);!s&&u.get(o).type!==x||u.set(o,{type:t,vector:n})})},L=()=>{const e=P();Z(e)},P=()=>{const[e,t]=E,s=[];for(let n=t-1;n>=0;n--){let o=!0;for(let c=0;c<e;c++)if(u.get(b([c,n])).type===x){o=!1;break}o&&s.push(n)}return F+=s.length,s},l=([e,t],s=N)=>{const n=s.length,o=s[0].length,c=[];for(let d=0;d<n;d++)for(let i=0;i<o;i++)if(s[d][i]===1){let m=[i+e,d+t];D==="I"&&n>=4?m=[i+e+1,d+t-1]:D==="O"&&(m[0]+=1),c.push(m)}return c},Z=e=>{const[t]=E;q([...e]).forEach(n=>{for(let o=n;o>=0;o--)for(let c=0;c<t;c++){if(o===n){const Q=b([c,o]);u.set(Q,{type:x,vector:[c,o]}),I.delete(Q);continue}const d=b([c,o]),i=b([c,o+1]),m=u.get(d),te=u.get(i);m.type!==x&&te.type===x&&(u.set(d,{type:x,vector:[c,o]}),u.set(i,{type:m.type,vector:[c,o+1]}),I.delete(d),I.add(i))}})},w=()=>{const e=ee(N),t=l(v,e);k(t)||V(t)||(_(l(v),x),_(t,D),N=e,G())},g=e=>{const t=l(e);if(k(t)||V(t)){const s=l(v).map(n=>b(n));return I=new Set([...I,...s]),!0}return!1},k=e=>{const[t,s]=E;return e.some(([n,o])=>n<0||n>=t||o>=s)},V=e=>e.some(t=>I.has(b(t))),Y=e=>{const[,t]=v;return!!(t<=0&&V(e))},q=(e,t=[])=>{if(e.length<=0)return t;const s=Math.min(...e),n=e.indexOf(s);return t.push(e.splice(n,1)[0]),q(e,t)},ee=(e,t=!0)=>{const s=e[0].length,n=e.length,o=s-1,c=n-1,d=[];for(let i=0;i<s;i++){d[i]=[];for(let m=0;m<n;m++){if(t){d[i].push(e[c-m][i]);continue}d[i].push(e[m][o-i])}}return d},b=([e,t])=>`${e}_${t}`;return y}const U=C=>(re("data-v-2e7ea974"),C=C(),le(),C),ue={class:"tetris-wrapper"},pe={class:"info"},de=U(()=>h("div",{class:"next"},"下一个",-1)),he={class:"next-box"},fe=U(()=>h("div",{class:"score_title"},"得分",-1)),ve={class:"score"},ye=U(()=>h("div",{class:"status_title"},"状态",-1)),Se={class:"status"},ge={key:0,class:"mask"},f=30,xe=se({__name:"index",setup(C){const E=ie(),z=[13,20],p=[5,2],u=j(),T=()=>{u.value.style.width=`${p[0]*f}px`,u.value.style.height=`${p[1]*f}px`},N=R=>{const r=document.createElement("div"),{type:M,shapData:J}=R,[_,L]=p,P=new Set,l=J.length,Z=J[0].length;r.style.width=`${_*f}px`,r.style.height=`${L*f}px`,u.value.innerHTML=null;for(let w=0;w<l;w++)for(let g=0;g<Z;g++)J[w][g]===1&&P.add(`${M==="O"?g+1:g}_${w}`);for(let w=0;w<L;w++)for(let g=0;g<_;g++){const k=document.createElement("div");k.style.width=k.style.height=`${f}px`,k.style.left=`${g*f}px`,k.style.top=`${w*f}px`,k.setAttribute("class",`rect rect-${P.has(`${g-1}_${w}`)?M:"bg"}`),r.appendChild(k)}u.value.appendChild(r)},$=j(),D=()=>{$.value.style.width=`${z[0]*f}px`,$.value.style.height=`${z[1]*f}px`},B=R=>{console.log("renderGame data: ",R);const r=document.createElement("div"),[M,J]=z;$.value.innerHTML=null,r.style.width=`${M*f}px`,r.style.height=`${J*f}px`,R.forEach(_=>{const[L,P]=_.vector,l=document.createElement("div");l.style.width=l.style.height=`${f}px`,l.style.left=`${L*f}px`,l.style.top=`${P*f}px`,l.setAttribute("class",`rect rect-${_.type}`),r.appendChild(l)}),$.value.appendChild(r)},v=()=>{console.log("handleReady: "),console.log("TJS.value: ",a.value),a.value.status===0&&a.value.ready()},I=()=>{O.value=!1,!(a.value.status!==1&&a.value.status!==2)&&a.value.play()},x=()=>{a.value.status===2&&(a.value.pause(),O.value=!0)},F=()=>{a.value.status===2&&(a.value.over(),S.value=a.value.status,O.value=!1)},G=()=>{a.value.status===3&&a.value.again()},S=j(-1),O=j(!1),y=ne(()=>S.value==-1?"请先准备":S.value==0||S.value==1?"请开始游戏":S.value==2?"正在游戏中":S.value==3?"结束了，需要重来":O.value?"暂停了":""),a=j(),A=j(0),H=()=>{a.value=new E({screenSize:z,intervals:1e3}),console.log(a.value),a.value.update(()=>{B(a.value.map),N(a.value.nextShap),A.value=a.value.score,S.value=a.value.status}),a.value&&document.addEventListener("keydown",R=>{const{keyCode:r}=R;r===37?a.value.action("left"):r===39?a.value.action("right"):r===38?a.value.action("change"):r===40&&a.value.action("lower")})};return ae(()=>{T(),D(),H(),console.log("TJS.value: ",a.value)}),(R,r)=>(X(),W("div",ue,[h("div",{class:"action"},[h("div",{class:"ready",onClick:v},"准备"),h("div",{class:"play",onClick:I},"开始"),h("div",{class:"pause",onClick:x},"暂停"),h("div",{class:"over",onClick:F},"结束"),h("div",{class:"over",onClick:G},"重来")]),h("div",pe,[de,h("div",he,[h("div",{class:"next-shape",ref_key:"nextShapeRef",ref:u},null,512)]),fe,h("div",ve,K(A.value),1),ye,h("div",Se,K(S.value),1)]),S.value!==2||O.value?(X(),W("div",ge,K(y.value),1)):oe("",!0),h("div",{class:"tetris-container",ref_key:"tetrisContainerRef",ref:$},null,512)]))}}),me=ce(xe,[["__scopeId","data-v-2e7ea974"]]);export{me as default};