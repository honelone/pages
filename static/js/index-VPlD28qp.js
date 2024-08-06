import{d as se,h as P,c as ne,j as ae,a as W,b as p,t as K,v as oe,p as re,k as ce,o as X,_ as le}from"./index-DwJGF_ix.js";function ie(){let C={screenSize:[13,20],intervals:1e3},E,z,d=0;const u=new Map;let T=!0,N=null,$=null,D="",j="",v=[0,0],I=new Set;const x="bg";let F=0,B=()=>{};const S=["I","L","J","Z","S","T","O"],O={I:[[1,1,1,1]],L:[[1,1,1],[1,0,0]],J:[[1,1,1],[0,0,1]],Z:[[1,1,0],[0,1,1]],S:[[0,1,1],[1,1,0]],T:[[1,1,1],[0,1,0]],O:[[1,1],[1,1]]},y=function(e={}){a(e)};y.create=(e={})=>new y(e),y.prototype={get map(){return[...u.values()]},get status(){return d},get isPause(){return T},get score(){return F},get nextShap(){return{type:j,shapData:$}}},y.prototype.ready=function(){console.log("ready: "),d===0&&(A(),H(),d=1)},y.prototype.play=function(){d===1&&(d=2),T&&(T=!1,R())},y.prototype.pause=function(){T=!0},y.prototype.over=function(){d=3},y.prototype.again=function(e={}){a(e),this.ready()},y.prototype.update=function(e){B=e},y.prototype.action=function(e){const[t,s]=v;d!==2||T||(e==="left"?M([t-1,s]):e==="right"?M([t+1,s]):e==="lower"?M([t,s+1],!0):e==="change"&&w())};const a=(e={})=>{C={...C,...e},E=C.screenSize,z=C.intervals,v=[0,0],I=new Set,d=0,F=0,T=!0;const{datas:t,index:s}=r();$=t,j=s},A=()=>{const[e,t]=E;for(let s=0;s<t;s++)for(let n=0;n<e;n++){const o=[n,s];u.set(b(o),{type:x,vector:o})}},H=()=>{const[e]=E;N=$,D=j,v=[Math.floor(e/2)-(!(e&1)&&D==="I"?2:1),0];const t=c(v);_(t,D,!1);const{datas:s,index:n}=r();$=s,j=n,Y(t)&&(d=3),B()},R=()=>{if(!(T||d===3)){if(d===2){const[e,t]=v;M([e,t+1],!0)}setTimeout(()=>{R()},z)}},r=()=>{const e=Math.random()*S.length<<0,t=S[e];return{index:t,datas:O[t]}},M=([e,t],s=!1)=>{const n=c([e,t]);if(s===!0&&g([e,t])){G(),H();return}k(n)||V(n)||J([e,t])},J=e=>{let t=c(v);_(t,x),t=c(e),_(t,D),v=e,B()},_=(e,t,s=!0)=>{e.forEach(n=>{const o=b(n);!s&&u.get(o).type!==x||u.set(o,{type:t,vector:n})})},G=()=>{const e=L();Z(e)},L=()=>{const[e,t]=E,s=[];for(let n=t-1;n>=0;n--){let o=!0;for(let l=0;l<e;l++)if(u.get(b([l,n])).type===x){o=!1;break}o&&s.push(n)}return F+=s.length,s},c=([e,t],s=N)=>{const n=s.length,o=s[0].length,l=[];for(let h=0;h<n;h++)for(let i=0;i<o;i++)if(s[h][i]===1){let m=[i+e,h+t];D==="I"&&n>=4?m=[i+e+1,h+t-1]:D==="O"&&(m[0]+=1),l.push(m)}return l},Z=e=>{const[t]=E;q([...e]).forEach(n=>{for(let o=n;o>=0;o--)for(let l=0;l<t;l++){if(o===n){const Q=b([l,o]);u.set(Q,{type:x,vector:[l,o]}),I.delete(Q);continue}const h=b([l,o]),i=b([l,o+1]),m=u.get(h),te=u.get(i);m.type!==x&&te.type===x&&(u.set(h,{type:x,vector:[l,o]}),u.set(i,{type:m.type,vector:[l,o+1]}),I.delete(h),I.add(i))}})},w=()=>{const e=ee(N),t=c(v,e);k(t)||V(t)||(_(c(v),x),_(t,D),N=e,B())},g=e=>{const t=c(e);if(k(t)||V(t)){const s=c(v).map(n=>b(n));return I=new Set([...I,...s]),!0}return!1},k=e=>{const[t,s]=E;return e.some(([n,o])=>n<0||n>=t||o>=s)},V=e=>e.some(t=>I.has(b(t))),Y=e=>{const[,t]=v;return!!(t<=0&&V(e))},q=(e,t=[])=>{if(e.length<=0)return t;const s=Math.min(...e),n=e.indexOf(s);return t.push(e.splice(n,1)[0]),q(e,t)},ee=(e,t=!0)=>{const s=e[0].length,n=e.length,o=s-1,l=n-1,h=[];for(let i=0;i<s;i++){h[i]=[];for(let m=0;m<n;m++){if(t){h[i].push(e[l-m][i]);continue}h[i].push(e[m][o-i])}}return h},b=([e,t])=>`${e}_${t}`;return y}const U=C=>(re("data-v-0932855c"),C=C(),ce(),C),ue={class:"tetris-wrapper"},pe={class:"inner-wrapper"},de={class:"info"},he=U(()=>p("div",{class:"next"},"下一个",-1)),fe={class:"next-box"},ve=U(()=>p("div",{class:"score_title"},"得分",-1)),ye={class:"score"},Se=U(()=>p("div",{class:"status_title"},"状态",-1)),ge={class:"status"},xe={key:0,class:"mask"},f=30,_e=se({__name:"index",setup(C){const E=ie(),z=[13,20],d=[5,2],u=P(),T=()=>{u.value.style.width=`${d[0]*f}px`,u.value.style.height=`${d[1]*f}px`},N=R=>{const r=document.createElement("div"),{type:M,shapData:J}=R,[_,G]=d,L=new Set,c=J.length,Z=J[0].length;r.style.width=`${_*f}px`,r.style.height=`${G*f}px`,u.value.innerHTML=null;for(let w=0;w<c;w++)for(let g=0;g<Z;g++)J[w][g]===1&&L.add(`${M==="O"?g+1:g}_${w}`);for(let w=0;w<G;w++)for(let g=0;g<_;g++){const k=document.createElement("div");k.style.width=k.style.height=`${f}px`,k.style.left=`${g*f}px`,k.style.top=`${w*f}px`,k.setAttribute("class",`rect rect-${L.has(`${g-1}_${w}`)?M:"bg"}`),r.appendChild(k)}u.value.appendChild(r)},$=P(),D=()=>{$.value.style.width=`${z[0]*f}px`,$.value.style.height=`${z[1]*f}px`},j=R=>{console.log("renderGame data: ",R);const r=document.createElement("div"),[M,J]=z;$.value.innerHTML=null,r.style.width=`${M*f}px`,r.style.height=`${J*f}px`,R.forEach(_=>{const[G,L]=_.vector,c=document.createElement("div");c.style.width=c.style.height=`${f}px`,c.style.left=`${G*f}px`,c.style.top=`${L*f}px`,c.setAttribute("class",`rect rect-${_.type}`),r.appendChild(c)}),$.value.appendChild(r)},v=()=>{console.log("handleReady: "),console.log("TJS.value: ",a.value),a.value.status===0&&a.value.ready()},I=()=>{O.value=!1,!(a.value.status!==1&&a.value.status!==2)&&a.value.play()},x=()=>{a.value.status===2&&(a.value.pause(),O.value=!0)},F=()=>{a.value.status===2&&(a.value.over(),S.value=a.value.status,O.value=!1)},B=()=>{a.value.status===3&&a.value.again()},S=P(-1),O=P(!1),y=ne(()=>S.value==-1?"请先准备":S.value==0||S.value==1?"请开始游戏":S.value==2?"正在游戏中":S.value==3?"结束了，需要重来":O.value?"暂停了":""),a=P(),A=P(0),H=()=>{a.value=new E({screenSize:z,intervals:1e3}),console.log(a.value),a.value.update(()=>{j(a.value.map),N(a.value.nextShap),A.value=a.value.score,S.value=a.value.status}),a.value&&document.addEventListener("keydown",R=>{const{keyCode:r}=R;r===37?a.value.action("left"):r===39?a.value.action("right"):r===38?a.value.action("change"):r===40&&a.value.action("lower")})};return ae(()=>{T(),D(),H(),console.log("TJS.value: ",a.value)}),(R,r)=>(X(),W("div",ue,[p("div",pe,[p("div",{class:"action"},[p("div",{class:"ready",onClick:v},"准备"),p("div",{class:"play",onClick:I},"开始"),p("div",{class:"pause",onClick:x},"暂停"),p("div",{class:"over",onClick:F},"结束"),p("div",{class:"over",onClick:B},"重来")]),p("div",de,[he,p("div",fe,[p("div",{class:"next-shape",ref_key:"nextShapeRef",ref:u},null,512)]),ve,p("div",ye,K(A.value),1),Se,p("div",ge,K(S.value),1)]),S.value!==2||O.value?(X(),W("div",xe,K(y.value),1)):oe("",!0),p("div",{class:"tetris-container",ref_key:"tetrisContainerRef",ref:$},null,512)])]))}}),me=le(_e,[["__scopeId","data-v-0932855c"]]);export{me as default};
