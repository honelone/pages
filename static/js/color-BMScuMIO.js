const g=(s,o=1)=>{const t=r=>r>255?255:r<0?0:Math.round(r),e=s/60*255,a=t(Math.abs(e-765)-255),n=t(510-Math.abs(e-510)),b=t(510-Math.abs(e-1020)),c=o||1;return"rgba("+a+","+n+","+b+","+c+")"};export{g};