const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/howler-Dcj4_M-0.js","static/js/commonjsHelpers-Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{i as o,k as h,w as m,s as u,x as d}from"./index-By46uPpP.js";function H(v,{volume:t=1,playbackRate:r=1,soundEnabled:p=!0,interrupt:y=!1,autoplay:w=!1,onload:f,...i}={}){const n=o(null),l=o(!1),s=o(null),e=o(null);function c(){var a;typeof f=="function"&&f.call(this),s.value=(s.value||((a=e.value)==null?void 0:a.duration())||0)*1e3,w===!0&&(l.value=!0)}return h(async()=>{const a=await m(()=>import("./howler-Dcj4_M-0.js").then(_=>_.h),__vite__mapDeps([0,1]));n.value=a.default.Howl,e.value=new n.value({src:u(v),volume:u(t),rate:u(r),onload:c,...i})}),d(()=>[v],()=>{n.value&&n.value&&e&&e.value&&(e.value=new n.value({src:u(v),volume:u(t),rate:u(r),onload:c,...i}))}),d(()=>[u(t),u(r)],()=>{e.value&&(e.value.volume(u(t)),e.value.rate(u(r)))}),{play:a=>{typeof a>"u"&&(a={}),!(!e.value||!p&&!a.forceSoundEnabled)&&(y&&e.value.stop(),a.playbackRate&&e.value.rate(a.playbackRate),e.value.play(a.id),e.value.once("end",()=>{e.value&&e.value&&!e.value.playing()&&(l.value=!1)}),l.value=!0)},sound:e,isPlaying:l,duration:s,pause:a=>{e.value&&(e.value.pause(typeof a=="number"?a:void 0),l.value=!1)},stop:a=>{e.value&&(e.value.stop(typeof a=="number"?a:void 0),l.value=!1)}}}export{H as u};
