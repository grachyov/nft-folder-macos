let e,t,r,n,f,a,c,i,o,l,d,u,s,m,b,v,p,T,E,h,R,x,g,w,A,y,F,_,U,B,k,X,q,L,C,I,$,N,G=(t,r)=>(void 0===t?(t=0,r=1):r=r||0,t+(W.i&&W.f>6e3?M.random():e())*(r-t)),z=(e=1,t=0)=>{if(a){a=!1;let r=f;return f=null,t+e*r}{let r=0,n=0,c=0;do{r=G(-1,1),n=G(-1,1),c=r*r+n*n}while(c>=1||0===c);let i=M.sqrt(-2*M.log(c)/c);return f=n*i,a=!0,t+e*(r*i)}},O=4095,Y=e=>.5*(1-M.cos(e*M.PI)),H=Array,V=(e,t=0,r=0)=>{if(null==c){c=new H(4096);for(let e=0;e<4096;e++)c[e]=G()}e<0&&(e=-e),t<0&&(t=-t),r<0&&(r=-r);let n,f,a,i,o,l=~~e,d=~~t,u=~~r,s=e-l,m=t-d,b=r-u,v=0,p=.5;for(let e=0;e<4;e++){let e=l+(d<<4)+(u<<8);n=Y(s),f=Y(m),a=c[e&O],a+=n*(c[e+1&O]-a),i=c[e+16&O],i+=n*(c[e+16+1&O]-i),a+=f*(i-a),e+=256,i=c[e&O],i+=n*(c[e+1&O]-i),o=c[e+16&O],o+=n*(c[e+16+1&O]-o),i+=f*(o-i),a+=Y(b)*(i-a),v+=a*p,p*=.5,l<<=1,s*=2,d<<=1,m*=2,u<<=1,b*=2,s>=1&&(l++,s--),m>=1&&(d++,m--),b>=1&&(u++,b--)}return 2*v-1},j=(e,t,r)=>[r*(t[0]-e[0])+e[0],r*(t[1]-e[1])+e[1]],K=(e,t,r)=>M.max(M.min(e,r),t),Q=(e,t,r,n,f)=>(e-t)*(f-n)/(r-t)+n,J=(e,t,r)=>{let n=e.createShader(r);return e.shaderSource(n,t),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS)||e.deleteShader(n),n},Z=Float32Array,ee=(e,t,r,n,f)=>{let a=t,c=t+n,i=r,o=r+f;e.bufferData(e.ARRAY_BUFFER,new Z([a,i,c,i,a,o,a,o,c,i,c,o]),e.STATIC_DRAW)},te=(e,t,r,n,f=!1)=>{let{width:a,height:c}=e.canvas,i=((e,t,r)=>{let n=e.createProgram(),f=J(e,t,e.VERTEX_SHADER),a=J(e,r,e.FRAGMENT_SHADER);return e.attachShader(n,f),e.attachShader(n,a),e.linkProgram(n),e.getProgramParameter(n,e.LINK_STATUS)||e.deleteProgram(n),n})(e,t,r);e.useProgram(i);let o=e.getAttribLocation(i,"P"),l=e.getAttribLocation(i,"T"),d={};for(let t of n)d[t]=e.getUniformLocation(i,t);let u=e.createVertexArray();e.bindVertexArray(u);let s=e.createBuffer();e.enableVertexAttribArray(o),e.bindBuffer(e.ARRAY_BUFFER,s),e.vertexAttribPointer(o,2,e.FLOAT,!1,0,0),ee(e,0,0,a,c);let m=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,new Z([0,0,1,0,0,1,0,1,1,0,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(l),e.bindBuffer(e.ARRAY_BUFFER,m),e.vertexAttribPointer(l,2,e.FLOAT,!1,0,0);let b=e.createTexture();e.bindTexture(e.TEXTURE_2D,b),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST);let v=f?null:e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,v),null!==v&&(e.texImage2D(e.TEXTURE_2D,0,e.RGBA,a,c,0,e.RGBA,e.UNSIGNED_BYTE,null),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,b,0)),{texture:b,D(t){e.useProgram(i),e.bindVertexArray(u);for(let r of t)e[r[0]](d[r[1]],...r[2]);e.viewport(0,0,a,c),e.bindBuffer(e.ARRAY_BUFFER,s),ee(e,0,0,a,c),e.drawArrays(e.TRIANGLES,0,6)},S(){e.bindFramebuffer(e.FRAMEBUFFER,v),e.viewport(0,0,a,c)},R(){({width:a,height:c}=e.canvas),ee(e,0,0,a,c),v&&(e.bindTexture(e.TEXTURE_2D,b),e.bindFramebuffer(e.FRAMEBUFFER,v),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,a,c,0,e.RGBA,e.UNSIGNED_BYTE,null),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,b,0))}}},re="#version 300 es\nin vec2 P;in vec2 T;uniform vec2 r;out vec2 p;void main(){p=T;vec2 c=(P/r*2.)-1.;gl_Position=vec4(c*vec2(1,-1),0,1);}",ne="fefdfb1d1517302332dd2e26f87d68fcc2cbf55b4dfcc79ef7d86ea0b8acb4aab2-de2c2cfff8e8fcd581d52941990d35-183945116973F67C1FD82B03F2F2F2-1e90ffff514eff7700f7e3d569b6682b9091486abd282e39-b8b8d15b5f97319177ffc145ffe0a0fffffbffb5b4ff6b6c-1b3b4bd40000b68762eef2f6e6e0dae0b299eda67de2725b-0505041d34611f487d237ba133b2cce6e6e6fdd692fb3640-1d2f53ec5c23fdc449f5f1ebf8b8a03cb8a472c1c65898c1-ffbb33f1faeea8dadc457b9d1d3557031927424b54042a2b-26437fffcc00d2292effffff0000001884bffefddfd9381e-d00000fefefa3f88c5032b43136f6337323e96c8a2001242-05668d02809000a89602c39af0f3bdf7e7cefffaf000bbd8-3f3f37d6d6b1f2e0b6e6a100f24500-ff8f9effa8b5ffbdc9ffd5d1ffecdbe30022ffd0b3ffb9a3ff9e8fff8f8f343434-247ba033b2ccfdd692ffcc33ff8c00fb364000563fff91af-40190617171af0a000f0c630f0d9a5f0d0c0ff0015cceeff".split`-`.map((e=>e.match(/.{6}/g).map((e=>"#"+e)))),fe=null,ae=e=>{let t=~~G(ne.length);return i=ne[t],t},ce=e=>(e=>{let t;do{t=e[~~G(e.length)]}while(t===fe);return fe=t,t})(i),ie={},oe=!1,{Meter:le,Filter:de,StereoWidener:ue,Limiter:se,Volume:me,Reverb:be,LFO:ve,PingPongDelay:pe,PolySynth:Te,Synth:Ee,Panner:he,Oscillator:Re,Distortion:xe,EQ3:ge,PitchShift:we,Noise:Ae,start:ye}=Tone,De=async e=>{await ye(),oe=!0,o.frequency.value=20,w.frequency.value=`${ie.s}s`,s.frequency.value=ie.f,m.frequency.value=ie.f+40,d.frequency.value=100,l.frequency.value=0,R.volume.value=-24,w.start(),x.start(),g.start(),s.start(),m.start(),u.start(),E.volume.value=-48,E.volume.rampTo(0,"10s"),o.frequency.rampTo(1500,"10s"),R.volume.rampTo(-6,(7200-W.f)/6+"s")},We=e=>{w.stop(),x.stop(),g.stop(),s.stop(),m.stop(),u.stop(),oe&&e?De():oe=!1},Fe=!1,_e={fill:!1,stroke:!1,blend:"source-over"},Ue={t:1,m:0},Se=(e,t={})=>{let r=D.createElement("canvas"),n=r.getContext(e,{alpha:!1,...t});return[r,n]},Pe=(e,t)=>Fe?`color(display-p3 ${e[0]} ${e[1]} ${e[2]} / ${t||e[3]||1})`:`rgba(${255*e[0]}, ${255*e[1]}, ${255*e[2]}, ${t||e[3]||1})`,Be=(e,t=1)=>{e.width=~~(k*q*t),e.height=~~(X*q*t);let r=e.style;r.width=`${k}px`,r.height=`${X}px`,r.imageRendering="pixelated"},Me=(e,t)=>{S.backgroundColor=Pe(ie.b),k=e,X=t,q=W.devicePixelRatio;let r=M.min(k,X);L=r/ie.a/2,Be(F,.5),Be(U),C&&C.R(),I&&I.R(),$&&$.R(),N&&N.R()},ke=e=>{_e.blend=e,_.globalCompositeOperation=e},Xe=(e,t,r)=>{r?_.fillStyle=`rgba(${255*e[0]}, ${255*e[1]}, ${255*e[2]}, ${t||e[3]||1})`:((e,t,r)=>{_e[e]=Pe(t,r),_[`${e}Style`]=_e[e]})("fill",e,t)},qe=(e,t,r,n,f)=>{_.beginPath(),_[e](t*L,r*L,n*L,(f||n)*L,0,0,2*M.PI),_e.fill&&_.fill(),_e.stroke&&_.stroke()},Le=(e,t=1)=>{_.beginPath();for(let r=e.length-1;r>=0;r--){let n=L*t;_.rect(e[r][0]*L-n/2,e[r][1]*L-n/2,n,n)}_.fill()};const Ce=e=>{let t,r,n,f,a,c,i;return{I(e,o,l,d){var u,s;t=(e=>{let t=e[0],r=e[1]/100,n=e[2]/100,f=e[3]||1,a=(1-M.abs(2*n-1))*r,c=a*(1-M.abs(t/60%2-1)),i=n-a/2,o=0,l=0,d=0;return 0<=t&&t<60?(o=a,l=c,d=0):60<=t&&t<120?(o=c,l=a,d=0):120<=t&&t<180?(o=0,l=a,d=c):180<=t&&t<240?(o=0,l=c,d=a):240<=t&&t<300?(o=c,l=0,d=a):300<=t&&t<360&&(o=a,l=0,d=c),o+=i,l+=i,d+=i,[o,l,d,f]})(((e,t=.5,r,n)=>{let f=360+e[0],a=e[1],c=e[2];return r=r||e[3],f=z(t*=4,f)%360,a=K(z(t,a),.01,100),c=K(z(t,c),.01,100),n||(r=K(z(t/20,r),1e-4,1)),[f,a,c,r]})((e=>{let t,r,[n,f,a]=(e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return[P(t[1],16)/255,P(t[2],16)/255,P(t[3],16)/255,1]})(e),c=M.max(n,f,a),i=M.min(n,f,a),o=(c+i)/2;if(c==i)t=r=0;else{let e=c-i;switch(r=o>.5?e/(2-c-i):e/(c+i),c){case n:t=(f-a)/e+(f<a?6:0);break;case f:t=(a-n)/e+2;break;case a:t=(n-f)/e+4}t/=6}return t*=360,r*=100,o*=100,[t,r,o,1]})(d),.5)),r=G()<.05?1e3:l,n=G(2,8),f=0,c=[],i=.01,a=G(100,300),this.A=!0;let m=1/(u=e,s=o,M.sqrt((s[0]-u[0])*(s[0]-u[0])+(s[1]-u[1])*(s[1]-u[1]))*G(.015,.15));for(let t=0;t<=1;t+=m)c.push(j(e,o,t))},U(){for(let e=c.length-1;e>=0;e--)c[e][0]+=V(c[e][0]/r,c[e][1]/r,1e3)*n/2,c[e][1]+=V(c[e][0]/r,c[e][1]/r,1e4)*n/2;f++,i=1-M.abs(Q(f,0,a,-1,1)),this.A=f<a},D(){ke("multiply"),Xe(t,.75*i),Le(c,n),ke("screen"),Xe(t,i),Le(c,.4*n)}}};(i=>{W=window,W.M=Math,W.P=parseInt,W.D=document,W.S=D.body.style;let M,k,X,O,Y,V,j,K,J,Z=navigator.userAgent.includes("HeadlessChrome");W.f=0,W.m=!1,W.i=!0,S.backgroundColor="#000",S.cursor="none";let ee=e=>{V=W.requestAnimationFrame(ee),X=e,Y=X-O,Y>M&&(O=X-Y%M,(e=>{_.save(),_.scale(q,q);e();B.activeTexture(B.TEXTURE0),B.bindTexture(B.TEXTURE_2D,C.texture),B.texImage2D(B.TEXTURE_2D,0,B.RGBA,B.RGBA,B.UNSIGNED_BYTE,F),W.m||W.i?(Ue.t=0,Ue.m=0):(Ue.t=Q(W.f,0,6e3,.99,.15),Ue.m=A.getValue()/300*Q(W.f,0,6e3,.9,.6)),I.S(),C.D([["uniform2f","r",[U.width,U.height]],["uniform1f","t",[W.f]],["uniform1i","i",[0]]]),$.S(),B.bindTexture(B.TEXTURE_2D,I.texture),I.D([["uniform2f","r",[U.width,U.height]],["uniform1f","t",[Ue.t]],["uniform1i","i",[0]]]),N.S(),B.bindTexture(B.TEXTURE_2D,$.texture),$.D([["uniform2f","r",[U.width,U.height]],["uniform1f","t",[2]],["uniform1i","i",[0]]]),B.bindFramebuffer(B.FRAMEBUFFER,null),B.activeTexture(B.TEXTURE0),B.bindTexture(B.TEXTURE_2D,I.texture),B.activeTexture(B.TEXTURE1),B.bindTexture(B.TEXTURE_2D,N.texture),N.D([["uniform2f","r",[U.width,U.height]],["uniform1f","e",[Ue.m]],["uniform1f","t",[W.f]],["uniform1f","f",[W.i]],["uniform1i","i",[0]],["uniform1i","m",[1]]]),W.s&&(U.toBlob((e=>{let t=URL.createObjectURL(e),r=D.createElement("a");r.href=t,r.download=`${tokenData.tokenId}_${tokenData.hash}.png`,r.click()})),W.s=!1),_.restore()})(j),W.f++,W.f%500==0&&oe&&(p.delayTime.value=1+~~G(0,6)+"s",y.triggerAttackRelease("A"+(1+~~G(0,6)),".2s"),y.triggerAttackRelease("A"+(1+~~G(0,6)),".2s","+0.2"),y.triggerAttackRelease("A"+(1+~~G(0,6)),".2s","+0.4")),6e3===W.f&&(W.i||(d.frequency.rampTo(1e3,"30s"),l.frequency.rampTo(300,"30s")),Z&&W.cancelAnimationFrame(V)),W.i||7800!==W.f||We())},ne=i=>{V&&W.cancelAnimationFrame(V),((c="tx piter")=>{e=t=r=n=f=a=null,t=Uint32Array.from([0,1,r=n=2,3].map((e=>P(c.substr(8*e+2,8),16)))),e=e=>(n=t[3],t[3]=t[2],t[2]=t[1],t[1]=r=t[0],n^=n<<11,t[0]^=n^n>>>8^r>>>19,t[0]/2**32)})(tokenData.hash),ie={a:2e3,b:[0,0,0,1],p:ae(),n:G(50,200),f:G(50,200),s:1+~~G(0,5)},(e=>{let t=(()=>{let e,t,r=4294967296;return{setSeed(n){t=e=(null==n?G()*r:n)>>>0},getSeed:()=>e,rand:()=>(t=(1664525*t+1013904223)%r,t/r)}})();t.setSeed(e),c=new H(4096);for(let e=0;e<4096;e++)c[e]=t.rand()})(G(93174,54177876)),K=W.innerWidth,J=W.innerHeight,Me(K,J),C=te(B,re,"#version 300 es\nprecision highp float;uniform float t;uniform sampler2D i;in vec2 p;out vec4 o;vec3 R(vec3 c){vec4 k=vec4(0,-1/3,2/3,-1);vec4 p=mix(vec4(c.zy,k.wz),vec4(c.yz,k.xy),c.z<c.y?1.:0.);vec4 q=mix(vec4(p.xyw,c.x),vec4(c.x,p.yzx),p.x<c.x?1.:0.);float d=q.x-min(q.w,q.y);return vec3(abs(q.z+(q.w-q.y)/(6.*d)),d/q.x,q.x);}vec3 H(vec3 c){vec3 r=clamp(abs(mod(c.x*6.+vec3(0,4,2),6.)-3.)-1.,0.,1.);return c.z*mix(vec3(1.),r,c.y);}void main(){vec4 c=texture(i,p);vec3 h=R(c.xyz);h.x=mod(h.x+(t/250.),1.);h=H(h);o=mix(c,vec4(h.xyz,c.a),abs(sin(10.+t/100.))*.05+.05);}",["r","t","i"],!0),I=te(B,re,"#version 300 es\nprecision highp float;in vec2 p;uniform float t;uniform sampler2D i;out vec4 o;void main(){vec4 c=texture(i,p);float b=dot(c.rgb,vec3(.2126,.7152,.0722));o=mix(vec4(0,0,0,1),c,step(t,b));}",["r","t","i"]),$=te(B,re,"#version 300 es\nprecision highp float;uniform vec2 r;uniform float t;uniform sampler2D i;in vec2 p;out vec4 o;void main(){vec2 a=vec2(1./r.x);vec2 f=a.xy*vec2(t,t)+a*.5;vec2 p=vec2(p.x-f.x,p.y+f.y);vec4 c=texture(i,p);p=vec2(p.x+f.x,p.y+f.y);c+=texture(i,p);p=vec2(p.x+f.x,p.y-f.y);c+=texture(i,p);p=vec2(p.x-f.x,p.y-f.y);c+=texture(i,p);o=c*.25;}",["r","t","i"]),N=te(B,re,"#version 300 es\nprecision highp float;in vec2 p;uniform vec2 r;uniform float t;uniform sampler2D i;uniform sampler2D m;uniform float e;uniform bool f;out vec4 o;const float B=600.;const float W=6000.;float N(float n,float x,float y,float z,float w){return (n-x)*(w-z)/(y-x)+z;}float C(in vec2 l,in float r){vec2 dist=l-vec2(.5);return 1.-smoothstep(r-(r*.95),r+(r*.01),dot(dist,dist)*4.);}void main(){vec2 a=gl_FragCoord.xy/r;vec2 b=p;if(a.x>.5)b.x=(1.-p.x)*2.;else b.x=p.x*2.;if(a.y<.5)b.y=(1.-p.y)*2.;else b.y=p.y*2.;vec3 c=texture(i,b).rgb+texture(m,b).rgb*e;if(t<B){float d=1.-pow(1.-(t/200.),5.);float g=1.-C(a,1./d);g=min(g+N(d,0.,33.,.0,1.),1.);c=c*g*min(N(d,0.,10.,.0,1.),1.);}if(t>W&&!f){float d=pow((t-W)/2000.,3.);float g=C(a,10.*d);g=g+d*.25;vec3 h=vec3(g);if(c.r==0. && c.g==0. && c.b==0.)c=h;else c=c+h;}o=vec4(c,1.0);}",["r","t","i","m","e","f"]),j=((e,t)=>{let r,n,f,{a,n:c,b:i}=ie,o=e/t;o>=1?(r=a*o,n=a):(r=a,n=a/o);let l=e=>z(e)%e,d=e=>{ce();let t=[l(r),l(n)],f=[l(r),l(n)];e.I(t,f,2*z(100,c),ce())},u=[];for(let e=0;e<50;e++)f=Ce(),d(f),u.push(f);return e=>{var t,a;0===W.f&&(Xe(i),((e,t,r,n)=>{qe("rect",0,0,r,n)})(0,0,r,n)),t=r/2,a=n/2,_.translate(t*L,a*L),_e.stroke=!1;for(var c=u.length-1;c>=0;c--)f=u[c],f.U(),f.D();return(()=>{for(var e=u.length-1;e>=0;e--)f=u[e],f.A||d(f)})(),!0}})(K,J),W.f=0,M=1e3/60,O=W.performance.now(),k=O,ee()};(e=>{[F,_]=Se("2d"),[U,B]=Se("webgl2",{preserveDrawingBuffer:!1,antialiasing:!1,powerPreference:"high-performance"}),D.body.appendChild(U);let t=_.fillStyle;_.fillStyle="color(display-p3 0 1 0)",Fe=_.fillStyle!=t})(),(e=>{A=new le,A.normalRange=!0,o=new de(0,"lowpass").toDestination();let t=new ue(.4).connect(o);T=new se(-24).connect(t),E=new me(0).connect(T);let r=new be({wet:.5,decay:10}).connect(E),n=new de(500,"lowpass").connect(r);w=new ve("6s",30,300).connect(n.frequency).connect(A),h=new me(0).connect(n).connect(r);let f=new be({wet:1,decay:5,preDelay:5}).connect(h);p=new pe(0,.9).connect(f),y=new Te(Ee).connect(p),y.volume.value=-40,(e=>{l=new de(0,"highpass").connect(h),R=new me(-24).connect(l);let t=new se(-32).connect(R),r={wet:.75,decay:30};v=new be(r).connect(t),b=new be(r).connect(v);let n=new he(-1).connect(b),f=new he(1).connect(b);x=new ve("30s",-1,1).connect(n.pan),g=new ve("30s",1,-1).connect(f.pan),s=(new Re).connect(n),m=(new Re).connect(f)})(),(e=>{d=new de(100,"lowpass").connect(h);let t=new me(-9).connect(d),r=new ue(.2).connect(t),n=new se(-18).connect(r),f=new xe({distortion:.6,wet:1,oversample:"none"}).connect(n),a=new ge({low:-6,mid:12,high:18}).connect(f),c=new we(-12).connect(a),i=new me(-12).connect(c);u=new Ae("white").connect(i)})()})();Z?(W.m=!0,W.i=!1):(W.addEventListener("resize",(e=>{We(!0),ne()})),W.addEventListener("keydown",(e=>{W.s="s"===e.key,"i"===e.key&&(W.i=!W.i),"m"===e.key&&(W.m=!W.m,E.mute=W.m)})),["click","touch"].forEach((e=>W.addEventListener(e,(e=>{W.i=!1,De()}),{once:!0})))),ne()})()
