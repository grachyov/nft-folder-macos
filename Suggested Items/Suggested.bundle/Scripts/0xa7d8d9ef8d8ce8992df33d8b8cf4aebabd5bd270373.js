let t=Math,e=Object,o=window,n=t.pow,f=t.max,i=Math.ceil,s=t.floor,c=Object.values,l=requestAnimationFrame;const V="20220906.150459";let r=function(hash){let o,i,l;this.reset=function(){l=Uint32Array.from([0,1,i=o=2,3].map((t=>parseInt(hash.substr(8*t+2,8),16))))},this.reset(),this.t=t=>(o=l[3],l[3]=l[2],l[2]=l[1],l[1]=i=l[0],o^=o<<11,l[0]^=o^o>>>8^i>>>19,l[0]/n(2,32)),this.o=(t=.5)=>this.t()<t,this.i=(t,e=[])=>(t=t.filter((t=>!e.includes(t))))[s(this.t()*t.length)],this.range=function([t,e],o){o&&(e+=1);var n=t+this.t()*(e-t);return o?s(n):n},this.l=(t,o=!1)=>{const n=e.keys(t)[this.u(c(t))];return o?N(n):n},this.u=t=>{const e=t.reduce(((t,e)=>t+e),0);let o=this.t()*e;return t.findIndex((t=>(o-=t,o<0)))},this.p=function(t,e){const o=t.map((t=>e(t)));return t[this.u(o)]},this.h=t=>{let e,o,n;for(n=t.length;n;n--)e=s(this.t()*n),o=t[n-1],t[n-1]=t[e],t[e]=o;return t},this.m=function(e,o=1,n=1,i=null){o=t.min(1,f(0,o));const s=[0];let c=s[0];for(let t=0;t<e;t++)c+=1-this.t()*o,s.push(c);const l=n/c,r=null!=i?i:this.t();return s.map((t=>(r+t*l)%n)).slice(0,-1)}};const a={k:.2,v:{x:1,sq:.25},M:[4,6],S:[{q:1,R:["b8ffde","ffff9b","bfffff","fccdff","d8d2ff"]},{q:.4,R:["595959","808080","404040","303030","999"]},{q:.4,R:["b3b3b3","808080","cccccc","e6e6e6","d9d9d9","bfbfbf"]},{q:1,R:["00a99d","666","c4e9fb","29abe2","ccc","fccdff"]},{q:.1,R:["e6e6e6","bfffff","c4e9fb","92d6ff","29abe2","0071bc"]},{q:1,R:["e6e6e6","d8d2ff","6f00a4","fccdff","ed1e79","f00"]},{q:.1,R:["e6e6e6","78ff72","b8ffde","00a791","00a545","006837"]},{q:1,R:["00a651","00aeef","ed1c24","ee2a7b","000","595959"]},{q:33,R:["fccdff","b8ffde","00a545","c4e9fb","29abe2","6f00a4","ed1e79","ffff9b","ff0","006400","60f","ff6200","f0f","0ff","f00","00a99d","7a00db"],A:{2:2,3:1,4:.25,5:.25,6:1,7:1,12:1}}],g:.3,j:.2,C:!0,D:{x:{I:1,all:0,N:1,O:1,P:1},sq:{I:.25,all:1,N:.5,O:.5,P:.5}},F:[.001,.003],L:0,U:!1,V:.8,B:4,G:{all:[[1,2,3],[0,2,3],[0,1,3],[0,1,2]],N:[[1],[0],[3],[2]],O:[[2],[3],[0],[1]],P:[[3],[2],[1],[0]],I:[[],[],[],[]]}};let d,b,u,p,h,y,m,w,k,v,x,M,S=new r(tokenData.hash),q=function(){const t=S.l(a.v),e=S.p(a.S,(t=>t.q));let o=e.R.map((t=>"#"+t));if(e.A){const t=S.l(e.A);o=S.h(o).slice(0,t)}const n=S.l(a.D[t]),f=S.o(a.g)||o.length<5&&"no"==n||o.length<4&&"all"!=n||o.length<3&&"all"==n;return{H:t,J:n,R:o,lines:S.range(a.M,!0),K:f}},R=document.querySelector("canvas"),A=R.getContext("2d",{alpha:!1}),g=[{},{},{},{}],j=function(){let e=q(),{lines:o,J:n}=e,f=t.round(h*o);m=e.K,w=e.H,k=e.R,v=a.G[n];const i=S.range(a.F);x=[];const s=(t,e)=>{let o=a.U?i:S.range(a.F);o*=0==a.L?S.o()?1:-1:a.L,x.push({id:e,T:t,speed:o})},c=1/h,l=S.m(o+1,a.V,c,0);l.shift();for(let t=0;t<o;t++)s(l[t],"v"+t);if(f>o){I();const t=S.m(f-o,a.V,1-c).map((t=>t+c)).sort(((t,e)=>t-e));for(let e=o;e<f;e++)s(t[e-o],"v"+e);const e=x[o-1].id+".e",n=x[o-1].id+"."+x[o].id;g.forEach((t=>{t[n]=t[e]})),I()}M=[];for(let t=0;t<f;t++)M[t]=[]},C=function(){O(),l(C)},D=function(){const e=x.length;for(let o=0;o<1;o+=.1){for(let t=0;t<e-1;t++)for(let o=t;o<e;o++)M[t][o]=E(x[o].T,x[t].T);for(let o=0;o<e;o++){const n=x[o],f=n.T;if(n.T=(n.T+.1*n.speed*p+1)%1,t.abs(f-n.T)>.5){const t=x[(o+1)%e].id,f=x[(o-1+e)%e].id;if(n.T>.5)for(let e=0;e<4;e++)g[e]["c."+t]=g[e][n.id+"."+t],g[e][f+"."+n.id]=g[e][f+".e"];else for(let e=0;e<4;e++)g[e][f+".e"]=g[e][f+"."+n.id],g[e][n.id+"."+t]=g[e]["c."+t]}}U.length=0;for(let o=0;o<e-1;o++)for(let n=o;n<e;n++){const e=E(x[n].T,x[o].T)-M[o][n];t.abs(e)>.5&&U.push([x[o],x[n]])}U.forEach((([t,e])=>{const o=t.id+"."+e.id;for(let t=0;t<4;t++)delete g[t][o];const n=t.id;t.id=e.id,e.id=n})),x.sort(z)}I()},I=function(){for(let t=0;t<4;t++){const e=[],o=new Set,n=g[t],f=x.length;for(let i=0;i<=f;i++){const{key:s,W:c,X:l}=P(i,f);o.add(s),n[s]||e.push({Y:t,Z:i,key:s,W:c,X:l})}for(const t in n)o.has(t)||delete n[t];S.h(e).forEach((({Y:t,Z:e,key:o,W:i,X:s})=>{const l=G[t];if(B.length=0,!m||S.o(a.j)){const t=1==e?"c":x[(e-2+f)%f].id;F(B,n[t+"."+i]);const o=e==f-1?"e":x[(e+1)%f].id;F(B,n[s+"."+o])}if(m){if(a.C){const t=[...new Set(c(n))];1==t.length&&F(B,t[0])}}else l.forEach((t=>{F(B,g[t][o])}));B.length>=k.length&&(B.length=0),n[o]=S.i(k,B),v[t].forEach((t=>{g[t][o]=n[o]}))}))}},O=function(){const t=x.length,e=y/2;A.save();for(let o=0;o<2;o++){const n=1==o;H.forEach(((o,f)=>{const i=g[f];A.rotate(o);for(let o=0;o<=t;o++){const{key:f,$:s,p1:c}=P(o,t),l=i[f];n?A.fillStyle=l:(A.strokeStyle=l,A.lineWidth=2),A.beginPath();const r=s*e,a=c*e;"x"==w?L(A,r,-r,a,-a,a,a,r,r):L(A,r,0,r,-r,0,-r,0,-a,a,-a,a,0),n?A.fill():A.stroke()}A.rotate(-o),A.restore()}))}},P=function(t,e){const o=x[(t-1+e)%e],n=x[t%e];let f=o.id,i=n.id,s=u(o.T),c=u(n.T);return s>c&&(0==t?(f="c",s=0):(i="e",c=1)),{key:f+"."+i,$:s,p1:c,W:f,X:i}},z=(t,e)=>t.T-e.T,E=function(t,e){return t<e?t-e+1:t-e},F=(t,e)=>{null==e||t.includes(e)||t.push(e)},L=function(t,...e){const o=e.length;t.moveTo(e[o-2],e[o-1]);for(let n=0;n<o;n+=2)t.lineTo(e[n],e[n+1]);return t},U=[],B=[],G=[[3,2],[2,3],[1,0],[0,1]],H=[t.PI,0,t.PI/2,-t.PI/2];o.onresize=function(){const t=o.innerWidth,e=o.innerHeight,c=o.devicePixelRatio;if(t){d=s(t*c),b=s(e*c),A.scale(c,c),R.width=i(d),R.height=i(b),R.style.width=t+"px",R.style.height=e+"px",A.resetTransform(),A.translate(d/2,b/2),y=f(d,b);const o=f(d/b,b/d),l=a.B,r=n(1/l,1/(l-1)),m=n(r,l),w=1+(1-r)*(o-1),k=1/w,v=1/o,x=1-v;u=t=>t<k?t/k/o:v+(n(r+(t-k)/(1-k)*(1-r),l)-m)/(1-m)*x,p=a.k/w,h=w,S.reset(),j(),O()}},l(C),setInterval(D,16.667),onresize();