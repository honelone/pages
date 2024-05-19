const b=s=>{const t=r=>r>255?255:r<0?0:Math.round(r),e=s/60*255,o=t(Math.abs(e-765)-255),n=t(510-Math.abs(e-510)),a=t(510-Math.abs(e-1020));return"rgb("+o+","+n+","+a+")"};export{b as g};
