(()=>{"use strict";function e(e,t,n,r=[]){for(var f=0;f<e.length;f++)r[f]=S(e[f],t[f],n);return r}function t(e){var t=D(~~e[0],0,255),n=D(~~e[1],0,255);return"#"+(D(~~e[2],0,255)|n<<8|t<<16|16777216).toString(16).slice(1)}function n(e,n,r){const f=r/180*u;return t((([e,t,n])=>{let r=d(e+.3963377774*t+.2158037573*n,3),f=d(e-.1055613458*t-.0638541728*n,3),o=d(e-.0894841775*t-1.291485548*n,3);return[D(~~(255*N(4.0767245293*r-3.3072168827*f+.2307590544*o)),0,255),D(~~(255*N(-1.2681437731*r+2.6093323231*f-.341134429*o)),0,255),D(~~(255*N(-.0041119885*r-.7034763098*f+1.7068625689*o)),0,255)]})([e/=100,(n/=100)?n*h(f):0,n?n*i(f):0]))}function r(e,t=3,n,r=.5,f=.5){const o=(e,t)=>({B:e,D:t,C:[]}),c=e=>{if(e.D<t){const t=(({B:e})=>{const[t,n]=e,o=n[0]-t[0],c=n[1]-t[1],s=.5*r;return((e,t,n,r)=>{const[f,o]=e,[c,s]=f,[a,l]=o;t=k(t);const i=(n?a-c:l-s)*(t=r?1-t:t);return n?[[f,[c+i,l]],[[c+i,s],o]]:[[f,[a,s+i]],[[c,s+i],o]]})(e,ie(.5-s,.5+s),((e=1,t=1)=>.5>oe()/d(e,t))(o/c,f),ae())})(e)||[];e.C=t.filter(s).map(t=>o(t,e.D+1)),e.C.forEach(c)}},s=e=>{const[t,r]=e,f=r[0]-t[0],o=r[1]-t[1];return f>=n&&o>=n},a=o(e,0);return c(a),(e=>{const t=[],n=[a];for(;n.length;){const e=n.shift(),r=e.C;r.length?n.unshift(...r):t.push(e.B)}return t})()}function f(n,f,o=42){se(n);const c=Te(oe),v=l,C=(e,t,n=.1,r=1)=>{const f=e*n,o=t*n;return(1*c(f,o)+.5*c(2*f,2*o)+.25*c(4*f,4*o)+.13*c(8*f,8*o)+.06*c(16*f,16*o)+.03*c(32*f,32*o))/1.97*r};let P=le(.01),$=!P&&le(.25),[B,I,N,z,O,V,W,H,J]=Se($,P);const K=B.map(e=>L(e));let[X,Z]=ue([[.5,.5],[1,.25],[.5,0],[0,1]]),ee=le(.1),te=$?1:ue([4,5,6]),ne=le(.05);const re=ae(),fe=!ne&&le(.075),ce=le(.2)&&fe,de=ae();let ve=ce||ne?.05:ie(.02,.25),me=fe||le(.1),ye=ae()?null:ue([0,u/2]);fe&&(ye=re?u/2:0);const Ee=fe&&re?[-v,-v,0]:[0,-v,-v];let Me=!W&&!V&&le(.1),we=P||V||2<=B.length&&le(.3);const Ce=!P&&!V&&le(.1),Ae=Ce?he(10,21):0;let De=.0045;Ce&&(De*=.8);let ke=ae(),Ue=[[0,1,1,4.5,1],[0,.5,1,5,1.75],[0,.75,1,4,1],[0,1,.5,3,2]];ne||V||!le(1)||Ue.push([0,.75,1,7.5,1],[0,.5,.75,5,4],[0,.5,.75,4,3]),ce||ne||V||!le(.25)||Ue.push([1,.4,.5,.5,1],[1,.2,1,1,1],[1,.4,1,1,1],[1,.25,.85,2,2]),ne&&(Ue=[[0,.5,1,2,2]]);let[xe,Re,Pe,$e,Be]=ue(Ue),Ie=!fe&&!Ce&&O&&!V&&!$&&le(.05),Le=!(z==ge),Ne=!Ce&&!Me&&!W&&Le&&le(.33),ze=[Me?.33:.15];Me?ze.push(.5,.7):Ne?ze.push(.5,1.1):ze.push(...ue([[.66],[.5],[.33,.7],[.25,.5,.75]]));let Oe=ue([2,5,10,15]),Ve=!Me&&ae(),We=!(ce||W||!(V||ne||le(.1)))&&(V?B[2]:B[0]);const je=!fe&&O&&!Me&&!W&&!ne&&!Ie&&!Ce&&le(.1),[qe,He,Je,Qe]=[.5,.75,.2,.25];let _e;$?_e=[[.0125],[.01]]:(_e=[[.0085,.01],[.0125,.0085],[.015,.01,.0085]],!Me&&_e.push([.01]));const Fe=ue(_e),Ge=ie(-10,10),Ke=ie(-10,10),Xe=(e,t)=>(2*c(.05*(2*e-1),.05*(2*t-1))-1)*(2*u),Ye=(e,t)=>{var n=Math.round,r=Math.hypot;let f=2*e-1,o=2*t-1;ce&&(re?f/=2:o/=2);let c=f+Ge,a=o+Ke,l=r(f,o),i=C(c,a,Re,Pe);if(i=s(0,i),i=s(0,d(i,$e)*Be),ne){const e=.3;i=S(.01*i,i,U(.5+e,.5-e,l+.3*(2*C(f,o,1,1)-1)))}if(0!==Ae&&(ke&&(f=n(f*Ae)/Ae),!ke&&(o=n(o*Ae)/Ae)),i+=ve,fe){let e=.2*i;const t=ce?1:.5,n=(re?o:f)+(ce?.1:1)*(2*C(f*t,o*t,1,1)-1),r=ce?.15:.25;let c=U(r,-r,n);i=S(e,i+ce?.5:.25,c)}if(je){const e=He*(2*C(f*qe,o*qe,1,1)-1);let t=U(Je,-Je,f+2*Qe+e),n=U(-Je,Je,f-2*Qe+e);i*=s(t,n)}return[f,i,o]};let[Ze,et,tt]=G(Ye,o),nt=1/0,rt=-nt;Ze.map(e=>{rt=s(rt,e[1]),nt=p(nt,e[1])});let ft=Array(o*o);const[ot,ct]=(()=>{const e=e=>e/1e6,t=[408248,-235703,-5774,0,0,471404,-5774,0,-408249,-235703,-5774,0,0,0,27320,1e6].map(e);return[e=>Y([],e,t,1.075),[1224744,-0,-1224745,-0,-707108,1414213,-707106,-0,-57730044,-57730218,-57729902,0,1577184,1577189,1577180,1e6].map(e)]})(),st=e=>{let[t,,n]=e;ce&&(re?t*=2:n*=2);const r=.5*n+.5,f=D(~~((.5*t+.5)*o),0,o-1)+D(~~(r*o),0,o-1)*o,c=et[2*f+0],s=ft[f]?ft[f]:ft[f]=Q(e,Ze,c);if(!s)return-1;const a=s[0],l=s[1];return s[2],0<=a&&0<=l&&1>a&&1>l?2*f+0:2*f+1},at=[[0,0],[1,1]];const lt=($?[at]:r(at,te,.0025,X,Z)).map(n=>Ie?(e=>{const[t,n]=e,r=n[0]-t[0],f=n[1]-t[1],o=ue([.05,.025,.0175,.1])*l,[c,s]=[a(r/o),a(f/o)];let[i,h,u,d]=G(Ye,c,s,([e,r])=>[k(R(e,0,1,t[0],n[0])),k(R(r,0,1,t[1],n[1]))]);const p=ue(B),b=[];return d.forEach(e=>{const t=e.map(e=>i[e]);t.push(t[0]),b.push([t,p,.5])}),b})(n):(n=>{const[r,f]=n;r[0],r[1];const o=f[0]-r[0],c=f[1]-r[1],d=([e,t])=>[k(R(e,0,1,r[0],f[0])),k(R(t,0,1,r[1],f[1]))],g=ue(B);let v=1*ue(Fe);const y=ae()?1:-1;let E=[];if(ee){const e=$?2:ue(ae()?[2]:[1,2,3]),t=v*l*e,[n,r]=[a(o/t),a(c/t)];for(let e=0;e<r;e++)for(let t=0;t<n;t++){let f=1>=n?.5:t/(n-1),s=1>=r?.5:e/(r-1);E.push([f*o,s*c])}}else E=((e,t,n)=>{const r=n*l,f=a(e/r),o=a(t/r),c=Array(f*o),d=[],b=(e,t)=>{const a=0|e/r,l=0|t/r,i=s(a-2,0),h=s(l-2,0),u=p(a+3,f),d=p(l+3,o);for(let r=h;r<d;++r){const o=r*f;for(let r=i;r<u;++r){const f=c[o+r];if(f){const r=f[0]-e,o=f[1]-t;if(r*r+o*o<n*n)return!1}}}return!0},g=(e,t)=>{const n=c[f*(0|t/r)+(0|e/r)]=[e,t];return d.push(n),n};let v=[g(e/2,t/2)];e:for(;d.length;){const r=0|oe()*d.length,f=d[r],o=oe();for(let r=0;r<10;++r){const c=2*u*(o+1*r/10),s=n+1e-7,a=f[0]+s*h(c),l=f[1]+s*i(c);if(0<=a&&a<e&&0<=l&&l<t&&b(a,l)){v.push(g(a,l));continue e}}const c=d.pop();r<d.length&&(d[r]=c)}return v})(o,c,v);const C=null==ye?ue([0,u/2]):ye;let A;$?A=[[5,.01]]:Me?A=[[1,.005]]:(A=[[8,.02]],ae()&&A.push([2,.03]),ae()&&A.push([5,.03]));let[S,U]=ue(A);W&&(U*=3,S=6);const P=(e,t,n,r=1,f=!1)=>{let[o,c]=t;const s=f?-1:1;for(let t=f?1:0;t<n;t++){const t=me?C:Xe(...d([o,c]));if(o+=h(t)*U*r*s,c+=i(t)*U*r*s,f?e.unshift([o,c]):e.push([o,c]),I(o,c))break}},I=(e,t)=>1<e||0>e||1<t||0>t,L=[];return E.map(n=>{const r=[n[0]/o,n[1]/c];if(Ne){let e=.5*-Xe(...r),t=pe(0,.25);r[0]+=h(e)*t,r[1]+=i(e)*t}if(I(...d(r)))return;const[f,a]=d(r),[l,u]=((e,t,n)=>{const r=[],f=[],o=e(t,n);if(0<=t-1e-5){const f=e(t-1e-5,n);m(r,o,f)}else{const f=e(t+1e-5,n);m(r,f,o)}if(0<=n-1e-5){const r=e(t,n-1e-5);m(f,o,r)}else{const r=e(t,n+1e-5);m(f,r,o)}const c=b([],r,f);return M(c,c),M(r,r),M(f,f),[o,c]})(Ye,f,a),v=T(nt,rt,l[1])||0,E=1-k(s(0,w(u,Ee)));let C=x(E,ze),A=(ce||je)&&.05>=v,U=y;A&&(U*=.2),U*=1;const R=s(1,~~(S/2)),$=[];Me||P($,r,R,U,!0),$.push(r),Me||P($,r,R,U,!1);let N=1;Me&&(N=2),N*=1;let z=g;we&&(z=t(((t,n)=>{n=D(n,0,1);var r=t.length-1,f=n*r,o=~~f,c=p(o+1,r);return e(t[o%t.length],t[c%t.length],f-o)})(K,E))),A&&(z=B[B.length-1]);let O=(Le?C:.5)*N;L.push([$.map(e=>Ye(...d(e))),z,O])}),L})(n)),it=[];P&&Array(100).fill().map(()=>{const e=Ye(oe(),oe());e[1]+=pe(.66,.1);const t=[1,-1,0],n=pe(.02,.005),r=[-1,1].map(r=>ot(E([],e,t,n*r)));it.push([[r],ue(B),.5])});const ht=Array(et.length);for(let e=0;e<ht.length;e++)ht[e]=null;const ut=e=>{if(null==ht[e]){let t=(e=>{const t=tt[e],n=_(...t);et[e];const r=ot(n),f=[],o=[];return A(f,o,r,ct),!!(Ce&&de||((e,t)=>{const n=e[0],r=e[1],f=e[2];return m(j,r,n),m(q,f,n),b(j,j,q),M(j,j),0<w(t,j)})(t,o))&&(y(o,o,-1),g(f,n),E(f,f,o,.01),!((e,t,n,r,f)=>{for(let o=0;o<e.length;o++){if(o===f)continue;const e=t[o];if(F(n,r,e[0],e[1],e[2]))return!0}return!1})(et,tt,f,o,e))})(e);return ht[e]=t,!0===t}return!0===ht[e]},dt=[[0,1],[1,1],[1,0]],pt=[];for(let t=0;t<dt.length-1;t++){const n=dt[t],r=dt[t+1],f=150;for(let t=0;t<f;t++){const o=e(n,r,t/(f-1)),c=Ye(...o);c[1]=s(0,c[1]),pt.push(c)}}const bt=[Ye(1,0),[1,0,-1],[1,0,1],[-1,0,1],...pt].map(e=>ot(e));let gt=[];ne||(gt=(e=>{const t=[],n=ue(e);let r=e.filter(e=>e!==n);r.length||(r=e);let f=pt;for(let e,n=0;n<Oe;n++){e=1-d(1-(e=n/(Oe-1)),4);const o=f.map((t,r)=>{const f=[...t];return f[1]=n===Oe-1?0:S(pt[r][1],0,e),f});t.push([o,ue(r)]),f=o}!Ve&&2<=t.length&&t.shift(),0<t.length&&(t[0][1]=n,2<=t.length&&(t[t.length-1][1]=n));const o=Ye(0,1);o[1]=s(o[1],0);const c=[o[0],0,o[2]],a=Ye(1,0);a[1]=s(a[1],0);const l=[a[0],0,a[2]];return[[[o,c],n],...t,[[a,l],n]].map(e=>[[e[0].map(e=>ot(e))],e[1],.33])})(V?[B[1]]:B)),lt.forEach(e=>{e.forEach(([e,t,n])=>{if(!t)return;const r=[];let f=[];for(let t=0;t<e.length;t++){const n=e[t],o=st(n);let c=Ie||0<=o&&ut(o);const[s,a]=ot(n),l=0;c&&s>=l&&s<=1-l&&a>=l&&a<=1-l?f.push([s,a]):(1<=f.length&&r.push(f),f=[])}1<=f.length&&r.push(f),r.length&&1e-4<=n&&it.push([r,t,n])})});let vt=1/0,mt=-1/0;it.forEach(e=>{e[0].forEach(e=>{e.forEach(e=>{vt=p(vt,e[1]),mt=s(mt,e[1])})})}),bt.forEach(e=>{vt=p(vt,e[1]),mt=s(mt,e[1])});const yt=(e,t,n,r)=>{e.globalCompositeOperation=t,e.globalAlpha=r,e.fillStyle=e.strokeStyle=n};return f?[I,B,We,z,N,De,it,bt,gt]:(e,t,n)=>{let r,f,o=p(t,n)*De,c=t,s=n;1>t/n?s=c:c=s,r=.5*(t-c),f=.5*(n-s),f+=(s-mt*s-vt*s)/2,e.lineJoin=e.lineCap="round",yt(e,be,I,1),e.fillRect(0,0,t,n);const a=t=>{t.forEach(([t,n,a])=>{const l=a*o;e.lineWidth=l,e.beginPath(),t.forEach(t=>{t.forEach((n,o)=>{const a=r+n[0]*c,i=f+n[1]*s;if(0===o?e.moveTo(a,i):e.lineTo(a,i),1===t.length){const t=l/20;e.lineTo(a-t,i-t),e.lineTo(a+t,i+t)}})}),yt(e,z,n,N),e.stroke()})};a(it),yt(e,be,I,1),e.beginPath(),bt.forEach(t=>e.lineTo(...((e,t,n,r,f)=>[t+e[0]*r,n+e[1]*f])(t,r,f,c,s))),e.closePath(),e.fill(),We&&(yt(e,z,We,N),e.fill()),a(gt)}}var o=Math.floor,c=Math.sqrt,s=Math.max,a=Math.ceil,l=Math.SQRT1_2,i=Math.sin,h=Math.cos,u=Math.PI,d=Math.pow,p=Math.min;const b=(e,t,n)=>{var r=t[0],f=t[1],o=t[2],c=n[0],s=n[1],a=n[2];return e[0]=f*a-o*s,e[1]=o*c-r*a,e[2]=r*s-f*c,e},g=(e,t)=>v(e,t[0],t[1],t[2]),v=(e,t,n,r)=>(e[0]=t,e[1]=n,e[2]=r,e),m=(e,t,n)=>v(e,t[0]-n[0],t[1]-n[1],t[2]-n[2]),y=(e,t,n)=>v(e,t[0]*n,t[1]*n,t[2]*n),E=(e,t,n,r)=>v(e,t[0]+n[0]*r,t[1]+n[1]*r,t[2]+n[2]*r),M=(e,t)=>{let n=w(t,t);return 0<n&&(n=1/c(n)),y(e,t,n)},w=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],C=(e,t,n)=>((e,t,n)=>{let r=t[0],f=t[1],o=t[2];var[c,s,a,l,i,h,u,d,p,b,g,m,y,E,M,w]=n,C=1/(r*l+f*d+o*m+w);return v(e,(r*c+f*i+o*p+y)*C,(r*s+f*h+o*b+E)*C,(r*a+f*u+o*g+M)*C)})(v(e,2*t[0]-1,2*-t[1]+1,2*t[2]-1),e,n),A=(e,t,n,r)=>{var f=n[0],o=n[1];v(e,f,o,0),v(t,f,o,1),C(e,e,r),C(t,t,r),m(t,t,e),M(t,t)},D=(e,t,n)=>s(p(e,n),t),k=e=>D(e,0,1),S=(e,t,n)=>e*(1-n)+t*n,T=(e,t,n)=>(n-e)/(t-e),U=(e,t,n)=>(n=k((n-e)/(t-e)),n*n*(3-2*n)),x=(e,t)=>t[D(~~(e*t.length),0,t.length-1)],R=(e,t,n,r,f)=>S(r,f,T(t,n,e)),P=e=>d((e+.055)/1.055,2.4),$=(e,n=~~(e/100*255))=>t([n,n,n]),B=e=>{"string"==typeof e&&(e=L(e));var t=e[0]/255,n=e[1]/255,r=e[2]/255;return.2126*(.03928>=t?t*(1/12.92):P(t))+.7152*(.03928>=n?n*(1/12.92):P(n))+.0722*(.03928>=r?r*(1/12.92):P(r))},I=(e,t)=>{var n=B(e),r=B(t);return(s(n,r)+.05)/(p(n,r)+.05)},L=e=>{var t=e.replace("#",""),n=parseInt(t,16);return[n>>16,255&n>>8,255&n]},N=e=>.0031308<e?1.055*d(e,1/2.4)-.055:12.92*e,z=(e,t,n=1,r=[3,2.5,2])=>{for(let f=0;f<r.length;f++){const o=e.filter(e=>t.every(t=>I(e,t)>=r[f]));if(o.length>=n)return o}},O=[],V=[],W=[],j=[],q=[],H=[],J=[],Q=(e,t,n,r=[])=>{const f=t[n[0]],o=t[n[1]],c=t[n[2]];m(O,c,f),m(V,o,f),m(W,e,f);const s=w(O,O),a=w(O,V),l=w(O,W),i=w(V,V),h=w(V,W),u=s*i-a*a;if(0!==u){const e=1/u,t=(i*l-a*h)*e,n=(s*h-a*l)*e;return v(r,1-t-n,n,t)}},_=(e,t,n)=>[(e[0]+t[0]+n[0])/3,(e[1]+t[1]+n[1])/3,(e[2]+t[2]+n[2])/3],F=(e,t,n,r,f)=>{m(j,r,n),m(q,f,n),b(H,j,q);let o,c=w(t,H);if(0<c)return!1;if(!(0>c))return!1;o=-1,c=-c,m(J,e,n),b(q,J,q);const s=-1*w(t,q);if(0>s)return!1;b(j,j,J);const a=-1*w(t,j);return!(0>a||s+a>c||0>1*w(J,H))},G=(e,t,n=t,r=(e=>e))=>{const f=[],o=[],c=[];t++,n++;for(let o=0;o<n;o++)for(let c=0;c<t;c++)f.push(e(...r([1>=t?.5:c/(t-1),1>=n?.5:o/(n-1)])));for(let e=0;e<n-1;e++)for(let n=0;n<t-1;n++){const r=n+e*t,f=n+1+e*t,s=n+1+(e+1)*t,a=n+(e+1)*t;o.push([r,f,a],[f,s,a]),c.push([r,f,s,a])}return[f,o,o.map(e=>e.map(e=>f[e])),c]};var K=[];const X=(e,...t)=>{for(let n=0;n<t.length;n++)e[n]=t[n];return e},Y=(e,t,n,r=1)=>{X(K,t[0],t[1],t[2],1),((e,t,n)=>{var[r,f,o,c]=t;X(e,n[0]*r+n[4]*f+n[8]*o+n[12]*c,n[1]*r+n[5]*f+n[9]*o+n[13]*c,n[2]*r+n[6]*f+n[10]*o+n[14]*c,n[3]*r+n[7]*f+n[11]*o+n[15]*c)})(K,K,n);var f=K[3];return 0!==f&&(K[0]/=f,K[1]/=f),X(e,.5*K[0]*r+.5,.5*K[1]*-r+.5)},Z=d(2,-32),ee=32557,te=new Uint16Array(4),ne=new DataView(te.buffer);let re=null,fe=!1;const oe=()=>{const e=te[0],t=te[1],n=te[2],r=te[3],f=0|33103+ee*e,o=0|63335+ee*t+(19605*e+(f>>>16)),c=0|31614+ee*n+19605*t+(62509*e+(o>>>16));te[0]=f,te[1]=o,te[2]=c,te[3]=5125+ee*r+(19605*n+62509*t)+(22609*e+(c>>>16));const s=(r<<21)+((r>>2^n)<<5)+((n>>2^t)>>11);return Z*((s>>>(r>>11)|s<<(31&-(r>>11)))>>>0)},ce=(e,t=0)=>{const n=16;for(var r,f=1540483477,o=e.length,c=t^o,s=0;4<=o;)r=(65535&(r=255&e[s]|(255&e[++s])<<8|(255&e[++s])<<16|(255&e[++s])<<24))*f+(((r>>>n)*f&65535)<<n),c=(65535&c)*f+(((c>>>n)*f&65535)<<n)^(r=(65535&(r^=r>>>24))*f+(((r>>>n)*f&65535)<<n)),o-=4,++s;switch(o){case 3:c^=(255&e[s+2])<<n;case 2:c^=(255&e[s+1])<<8;case 1:c=(65535&(c^=255&e[s]))*f+(((c>>>n)*f&65535)<<n)}return c=(65535&(c^=c>>>13))*f+(((c>>>16)*f&65535)<<16),(c^=c>>>15)>>>0},se=e=>{fe=!1,re=null;const t=~~((e.length-2)/2),n=[];for(let r=0;r<t;r++){const t=2+2*r;n.push(parseInt(e.slice(t,t+2),16))}const r=ce(n,1690382925),f=ce(n,72970470);ne.setUint32(0,r),ne.setUint32(4,f)},ae=()=>.5<oe(),le=(e=.5)=>oe()<e,ie=(e,t)=>(void 0===t&&(t=e,e=0),oe()*(t-e)+e),he=(e,t)=>o(ie(e,t)),ue=e=>e.length?e[he(e.length)]:void 0,de=e=>{for(var t,n,r=e.length,f=[...e];r;)t=~~(oe()*r--),n=f[r],f[r]=f[t],f[t]=n;return f},pe=(e=0,t=1)=>{var n=Math.log;if(fe){fe=!1;var r=re;return re=null,e+t*r}var f=0,o=0,s=0;do{s=(f=2*oe()-1)*f+(o=2*oe()-1)*o}while(1<=s||0===s);var a=c(-2*n(s)/s);return re=o*a,fe=!0,e+t*(f*a)},be="source-over",ge="multiply",ve="#000000",me=e=>e.match(/.{6}/g).map(e=>"#"+e),ye=e=>e.split`:`.map(me),Ee=me("f2c5d2e5bb579c96cdf5eeeb76b99570a7c5f8e6d1dfbcabf1e7e1efedf6e1dce9f0ded5cdcad5f2f2f2"),Me=me("914e720078bf00a95c3255a4f150603d5588765ba700838abb8b41407060ff665e925f52ffe800d2515eff6c2fff48b0ac936ee45d50ff747762a8e54982cf0074a2235ba8484d7a435060d5e4c0a5aaa870747c5f8289375e775e695e00aa9319975d397e58516e5a4a635d68724d62c2b167b346009da5169b62237e742f61659d7ad2aa60bf775d7a6c5d80f65058d1517a9e4c6ea75154e3ed55ffb511ffae3bf6a04dee7f4bff6f4cba8032bd64398e595af2cdcff984cae6b5c9bd8ca682d8d5ffe900ff4c65"),we=ye("455097db6a4568876bf5be2f:224816e85d13f5b2bc90c6cbf9b807:fc4626fddc3f0971d900bb70:ff5500f4c1451447142f04fce276af:21a48ff9ced08ab2dfef7a62"),Ce=ye("344e49ebb133f7ebd0f9e9d3f8ead3a28a7d:224816e85d13f5b2bc90c6cbf9b807fcfdfe:272b239de6d7d4dd38e1e2db29b09de17072:290915f7ac32e8cec59c1debe37440eb8ae1:180d0643372fa79f98f66257d3978f0c4b37:222518ca684301853f4b97c206783b00833f:144714c58e46455097db6a4558765b:312fc882fcfcfbaff5d551ee1c1d67d85598:5f3746808cc5f293823c757e:282634bd928ba1a6aade7571ff4e44:3a3d7e6aaadefddf48:455097ffffffdb6a4568876bf5be2f"),Ae=[[0,50],[1,15],[2,50],[3,30],[7,160],[12,80],[6,160],[13,50],[14,50],[8,25],[9,25]],De=new Set;Me.forEach((e,t)=>{Me.forEach((n,r)=>{if(t!=r&&3<=I(e,n)){const e=[t,r];e.sort((e,t)=>e-t),De.add(e.join(":"))}})});const ke=[...De].map(e=>e.split(":").map(e=>Me[e])),Se=(e,r)=>{const f=r?15:Ae[(e=>{var t,n=0;for(t=0;t<e.length;t++)n+=e[t];var r=oe()*n;for(t=0;t<e.length;t++){if(r<e[t])return t;r-=e[t]}return 0})(Ae.map(e=>e[1]))][0];let o,c,s=0,a=ve,l=be,i=1,h=-1;const u=8==f;if(0==f)o=$(98),c=[$(5)];else if(1==f)o=$(5),c=[$(98)];else if(15===f)o=ve,c=["#ffea00","#878787","#ffffff"];else if(9==f)o=ve,c=["#ffffff"],s=0,i=.25,l="screen";else if(2==f||3==f){const e=2==f;o=e?n(50,ie(5,20),ie(360)):n(92,ie(5,5),ie(360)),c=[e?"#ffffff":ve]}else if(12===f)o=(c=[...(()=>de(ue(ke)))()]).shift();else if(7==f)o=$(95),h=he(we.length),c=[...we[h]],l=ge,s=.25,a="#ffffff";else if(13==f||14==f)o=(c=[...(e=>{const t=14==f?n(30,ue([2,5,10]),ie(100,300)):ue(Ee),r=[t,ue(z(Me,[t],2)||[ve])];let o=z(Me,r);return ae()&&o&&r.push(ue(o.filter(e=>!r.includes(e)))),r})()]).shift();else if(6==f)h=he(Ce.length),o=(c=[...Ce[h]]).shift();else if(u){const e=ue(z(Me,[o=ve],2.5,[5,4,3]));c=[ve,$(40),e]}const d=l===be;let p=d?1:i,b=a,g=d?0:s;if(!u&&15!=f&&(c=de(c),e)){const e=z(c,[o]);e&&(c=e)}return 0<g&&(c=c.map(e=>((e,n,r)=>{e=L(e),n=L(n);for(var f=0;3>f;f++)n[f]=n[f]*r+e[f]*(1-r);return t(n)})(e,b,g))),[c,o,p,l,l==be,u,9==f,f,h]};var Te=e=>{const t=c(3);var n=(3-t)/6,r=[..."221021201001212012210010122102120100"].map(e=>e-1),f=0;const s=new Uint8Array(512);for(var a=s.slice(0,256);256>f;f++)a[f]=f;for(f=0;255>f;f++){var l=f+~~(e()*(256-f)),i=a[f];a[f]=a[l],a[l]=i}const h=s.slice();for(f=0;512>f;f++)s[f]=a[255&f],h[f]=s[f]%12;return(e,f)=>{var c,a,l=0,i=0,u=0,d=(e+f)*(.5*(t-1)),p=o(e+d),b=o(f+d),g=(p+b)*n,v=e-(p-g),m=f-(b-g);v>m?(c=1,a=0):(c=0,a=1);var y=v-c+n,E=m-a+n,M=v-1+2*n,w=m-1+2*n,C=255&p,A=255&b,D=.5-v*v-m*m;if(0<=D){var k=3*h[C+s[A]];l=(D*=D)*D*(r[k]*v+r[k+1]*m)}var S=.5-y*y-E*E;if(0<=S){var T=3*h[C+c+s[A+a]];i=(S*=S)*S*(r[T]*y+r[T+1]*E)}var U=.5-M*M-w*w;if(0<=U){var x=3*h[C+1+s[A+1]];u=(U*=U)*U*(r[x]*M+r[x+1]*w)}return 70*(l+i+u)*.5+.5}};let Ue="undefined"==typeof tokenData?(()=>{let e="0x";for(let t=64;0<t;--t)e+="0123456789abcdef"[~~(16*Math.random())];return e})():"string"==typeof tokenData?tokenData:tokenData.hash;return(()=>{if(("undefined"==typeof RUN||RUN)&&"undefined"!=typeof document){let e=window,t=document;const n="undefined"==typeof $C?t.body.appendChild(t.createElement("canvas")):CANVAS,r=n.getContext("2d");let o,c,s,a;const l=()=>{r.save(),r.scale(a,a),o(r,c,s),r.restore()},i=()=>{c=e.innerWidth,s=e.innerHeight,a=e.devicePixelRatio,n.width=~~(c*a),n.height=~~(s*a),n.style.width=`${c}px`,n.style.height=`${s}px`,o&&l()};return e.addEventListener("resize",i),i(),o=f(Ue),l(),[n,()=>e.removeEventListener("resize",i)]}return f})()})();