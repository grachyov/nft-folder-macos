let F=Math,o=window,e=F.pow,l=Math.max,r=document,t=Math.ceil,D=F.random,V="20230918.102958",C={F:{o:[{l:["#00CCFF","#00CCFF","#00FFFF","#29ABE2","#29ABE2","#6AFEFF","#B8FFDE","#BFFFFF","#C4E9FB","#D8D2FF","#FCCDFF","#FF00FF","#FF4AD2","#FFFF00","#FFFF00","#FFFF9B","#FFFFFF"],t:[4,5,6]},{l:["#6AFEFF","#FF4AD2","#FFFF00","#FFFFFF"]},{l:["#B8FFDE","#BFFFFF","#D8D2FF","#FCCDFF","#FFFF9B"]},{l:["#00FFFF","#B8FFDE","#D8D2FF","#FCCDFF","#FFFFFF"]},{l:["#00CCFF","#29ABE2","#BFFFFF","#C4E9FB","#FFFFFF"]},{l:["#00FFFF","#FF00FF","#FFFF00","#FFFFFF"]},{l:["#00FFFF","#B8FFDE","#BFFFFF","#D8D2FF","#ED1E79","#FCCDFF","#FCCDFF","#FFFF9B","#FFFFFF"]},{l:["#000000","#000099","#008D3A","#29ABE2","#333333","#662D91","#BF0644","#ED1E79"]},{l:["#999999","#AAAAAA","#BFFFFF","#CCCCCC","#ED1E79","#FFFFFF"]}],D:[{l:["#000000","#00007F","#000099","#0000FF","#006837","#008D3A","#29ABE2","#333333","#600091","#662D91","#666666","#B8FFDE","#BF0644","#BFFFFF","#D8D2FF","#ED1E79","#FCCDFF","#FF0000","#FF9900","#FFFF9B"],t:[4,5,6]},{l:["#000000","#00007F","#008D3A","#600091","#FF0000"]},{l:["#00007F","#006837","#662D91","#ED1E79","#FF9900"]},{l:["#B8FFDE","#BFFFFF","#D8D2FF","#FCCDFF","#FFFF9B"]},{l:["#000000","#00007F","#29ABE2","#662D91","#ED1E79"]},{l:["#000000","#000099","#662D91","#BF0644"]},{l:["#000000","#0000FF","#FF0000"]},{l:["#000000","#000099","#008D3A","#29ABE2","#333333","#662D91","#BF0644","#ED1E79"]},{l:["#000000","#000099","#333333","#666666"]}]},C:[{B:!0,A:[.1,.4]},{B:!1,A:[.2,.3,.4]}],i:7e-4,u:F=>e(F,1.5),p:o=>(o*=2)<1?.5*e(o,2):1-.5*F.abs(e(2-o,2)),S:[74132,58028,84657,73174,21814,33399,503,53504,84794,98282,58513,49677,93360,45328]};const s={v:(F,o)=>(null!=o&&(F=F.filter((F=>-1==o.indexOf(F)))),F[D()*F.length>>0]),g:(F,o)=>s.m(F.slice()).slice(0,o),m:F=>{let o,e,l;for(l=F.length;l;l--)o=D()*l>>0,e=F[l-1],F[l-1]=F[o],F[o]=e;return F},range:([F,o])=>F+D()*(o-F),h:F=>{let o=4022871197,e=2.3283064365386963e-10;var l=function(F){F=String(F);for(let e=0;e<F.length;e++){o+=F.charCodeAt(e);let l=.02519603282416938*o;o=l>>>0,l-=o,l*=o,o=l>>>0,l-=o,o+=4294967296*l}return(o>>>0)*e};let r=1,t=l(" "),D=l(" "),s=l(" ");return t-=l(F),t<0&&(t+=1),D-=l(F),D<0&&(D+=1),s-=l(F),s<0&&(s+=1),()=>{const F=2091639*t+r*e;return t=D,D=s,s=F-(r=0|F)}}};let n,c,B,E,a=(F,o,e)=>{let[l,r,t]=A(F),[D,s,n]=A(o);return"#"+(((D-l)*e+l<<16)+((s-r)*e+r<<8)+((n-t)*e+t<<0)).toString(16).padStart(6,"0")},A=F=>F.slice(-6).match(/.{2}/g).map((F=>parseInt(F,16)));r.body.style.overflow="hidden";let i,u,d,p,f,v=F=>{f=parseInt(tokenData.tokenId.slice(-6));let o=C.S[f%C.S.length];D=s.h(o),n=g(C.F.o),c=g(C.F.D);let e=s.v(C.C);if(e.B)B=[e.A];else{let F=s.v(e.A);B=[[F,F]]}E=[];let r=1+l(...B.flat());for(;r>0;)r=m(r)},g=F=>{let o=s.v(F),e=o.l;if(o.t){let F=s.v(o.t);e=s.g(e,F)}return e},m=F=>{let o=s.range(s.v(B)),e=E[0],l=s.v(n,[e?.M]),r={size:o,M:l,k:s.v(c,[e?.k,l])};return r.I=F-r.size,E.unshift(r),r.I},h=()=>{E.forEach((F=>{F.I+=C.i})),E[0].I>0&&m(E[0].I),E[E.length-2].I>=1&&E.pop()},M=o=>{for(let o=0;o<2;o++){i.save(),0==o&&(i.translate(1,0),i.rotate(F.PI));let e=d/2+1,r=p/2,t=E[0].I,D=E.at(-1).I,s=D-t,n=i.createLinearGradient(t*e,0,D*e,0);E.forEach((({M:o,k:e,I:r})=>{let D=r;D>0&&D<1&&(D=C.u(D));let c=a(o,e,C.p(l(0,F.min(1,r))));n.addColorStop((D-t)/s,c)})),i.fillStyle=n,i.fillRect(0,-r,e,p),i.restore()}},S=F=>{M(),requestAnimationFrame(S)},k=o.onresize=F=>{let e=o.innerWidth,l=o.innerHeight,r=o.devicePixelRatio;e&&(d=t(e*r),p=t(l*r),i.scale(r,r),u.width=d,u.height=p,u.style.width=e+"px",u.style.height=l+"px",i.translate(d/2,p/2),i.save())};o.onload=()=>{u=r.querySelector("canvas"),u.style.margin="0",i=u.getContext("2d"),v(),k(),setInterval(h,17),S()};