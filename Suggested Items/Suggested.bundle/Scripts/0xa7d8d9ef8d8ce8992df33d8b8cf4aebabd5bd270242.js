!function(){class t{constructor(t){this.seed=t}next(){return(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31}}let e;function n(n){e=new t(n)}function o(){return e.next()}function i(t,e,n){return e+t*(n-e)}function r(t,e){return i(o(),t,e)}function s(t,e){return Math.floor(r(t,e+1))}function a(t){const e=o(),n=t.filter(((t,e)=>e%2==0)).reduce(((t,e)=>t+e),0);let i=0;for(let o=0;o<t.length;o+=2){const r=t[o]/n;if(e<r+i)return t[o+1];i+=r}}const l="#2a2a2a",h="#ddd",f="#f5f2e3",c="#999",u={blackOnBeige:{background:f,foreground:l,overlay:c,shadow:l},orangeOnBeige:{background:f,foreground:"#e26d5a",overlay:c,shadow:l},greenOnBeige:{background:f,foreground:"#386641",overlay:c,shadow:l},blueOnBeige:{background:f,foreground:"#0353a4",overlay:c,shadow:l},purpleOnBeige:{background:f,foreground:"#754db6",overlay:c,shadow:l},beigeOnBlack:{background:l,foreground:f,overlay:h,shadow:l},yellowOnBlack:{background:l,foreground:"#ffd400",overlay:h,shadow:l},pinkOnBlack:{background:l,foreground:"#fdc5f5",overlay:h,shadow:l}};const d=[.04,"beigeOnBlack",.02,"yellowOnBlack",.02,"pinkOnBlack",.4,"blackOnBeige",.135,"orangeOnBeige",.135,"greenOnBeige",.135,"blueOnBeige",.135,"purpleOnBeige"];function g(){return o()<.2?"random":[s(2,6),s(2,6)]}function p(t,e){const n=t.map((t=>Math.abs(t[1]-t[0])));let o=e*n.reduce(((t,e)=>t+e),0);for(let e=0;e<n.length;e++){if(o<=n[e])return t[e][0]+o/n[e]*(t[e][1]-t[e][0]);o-=n[e]}}function m(t){return[...t]}function x(t){return t.map((t=>m(t)))}function w(t,e,n){return t.forEach((t=>{L(t,[e,n])})),t}function M(t){return e=t[0],n=t[1],e[0]<n[0]||!(e[0]>n[0])&&e[1]<n[1]?t:[t[1],t[0]];var e,n}function b(t,e){return t=M(t),e=M(e),T(t[0],e[0])&&T(t[1],e[1])}function y(t){return k(C(m(t[0]),t[1]))}function k(t){return Math.atan2(t[1],t[0])}function S(t,e){return T(t[0],e)?t:[t[1],t[0]]}function v(t,e){let n=C(m(t[0]),t[1]),o=C(m(t[1]),e);return C(m(o),function(t,e){return A(t,z(t,e)/function(t){return z(t,t)}(t))}(n,o))}function C(t,e){if("number"==typeof e)for(let n=0,o=t.length;n<o;n++)t[n]-=e;else for(let n=0,o=t.length;n<o;n++)t[n]-=e[n]||0;return t}function L(t,e){if("number"==typeof e)for(let n=0,o=t.length;n<o;n++)t[n]+=e;else for(let n=0,o=t.length;n<o;n++)t[n]+=e[n]||0;return t}function O(t,e){for(let n=0,o=t.length;n<o;n++)t[n]/=e;return t}function A(t,e){if("number"==typeof e)for(let n=0,o=t.length;n<o;n++)t[n]*=e;else{if(t.length!=e.length)throw new Error;for(let n=0,o=t.length;n<o;n++)t[n]*=e[n]}return t}function P(t){let e=Y(t);return 0===e?[0,0]:O(t,e)}function E(t){return Y(C(m(t[1]),t[0]))}function Y(t){return Math.sqrt(z(t,t))}function z(t,e){let n=0;for(let o=0,i=t.length;o<i;o++)n+=t[o]*e[o];return n}function I(t){let e,n;for(let o of t)null==e?(e=m(o),n=m(o)):(e=W(e,o),n=q(n,o));return[e,n]}function T(t,e,n=.01){for(let o=0,i=t.length;o<i;o++)if(Math.abs(t[o]-e[o])>n)return!1;return!0}function W(t,e){let n=m(t);for(let o=0,i=Math.min(t.length,e.length);o<i;o++)n[o]=Math.min(t[o],e[o]);return n}function q(t,e){let n=m(t);for(let o=0,i=Math.min(t.length,e.length);o<i;o++)n[o]=Math.max(t[o],e[o]);return n}function D(t){return O(function(t){let e=m(t[0]);for(let n=1,o=t.length;n<o;n++)L(e,t[n]);return e}(t),t.length)}function X(t){return 57.29577951308232*t}function R(t){return t*(Math.PI/180)}function B(t,e){let n=Z(t[0],t[1]),o=Z(e[0],e[1]),i=t[0],r=e[0],s=t[0][0],a=t[0][1],l=t[1][0],h=t[1][1],f=e[0][0],c=e[0][1],u=e[1][0],d=e[1][1];if(null==n){if(null==o)return;let t=((c-d)*(f-s)+c*(u-f))/(u-f);return[i[0],t]}if(null==o){let t=((a-h)*(s-f)+a*(l-s))/(l-s);return[r[0],t]}if(o.slope!=n.slope){return[(-s*(a-h)*(f-u)+f*(s-l)*(c-d)-(s-l)*(-a+c)*(f-u))/((s-l)*(c-d)+(-a+h)*(f-u)),(s*h*c-s*h*d-a*l*c+a*l*d-a*f*d+a*c*u+h*f*d-h*c*u)/(s*c-s*d-a*f+a*u-l*c+l*d+h*f-h*u)]}return n.yi==o.yi?[i[0],i[1]]:void 0}function Z(t,e){if(e[0]-t[0]!=0){let n=(e[1]-t[1])/(e[0]-t[0]),o=t[1]-n*t[0];return{slope:n,yi:o,xi:0===n?void 0:-o/n}}}function K(t,e,n){let o=[t,m(t)];return G(o[1],e,n,!0),o}function G(t,e,n,o=!1){let i=null!=n?n:Y(t),r=[Math.cos(e)*i,Math.sin(e)*i];return o?L(t,r):function(t,e){return t[0]=e[0],t[1]=e[1],t}(t,r)}function F(t,e){return H(t[0],t[1],e)}function H(t,e,n=.5){let o=Math.min(t.length,e.length),i=[];for(let r=0;r<o;r++)i[r]=t[r]*(1-n)+e[r]*n;return i}function N(t,e){let n=function(t,e){let n=[];for(let o=1;o<=e;o++)n.push(H(t[0],t[1],o/(e+1)));return n}(t,e-2);return n.unshift(t[0]),n.push(t[t.length-1]),n}var V,j;function _(t,e,n){const o=[0,0],i=Math.round(n+90);i&&J(t,o,i);const r=function(t,e){const n=[...t];n[0].join(",")!==n[n.length-1].join(",")&&n.push([n[0][0],n[0][1]]);const o=[];if(n&&n.length>2){e=Math.max(e,.1);const t=[];for(let e=0;e<n.length-1;e++){const o=n[e],i=n[e+1];if(o[1]!==i[1]){const e=Math.min(o[1],i[1]);t.push({ymin:e,ymax:Math.max(o[1],i[1]),x:e===o[1]?o[0]:i[0],islope:(i[0]-o[0])/(i[1]-o[1])})}}if(t.sort(((t,e)=>t.ymin<e.ymin?-1:t.ymin>e.ymin?1:t.x<e.x?-1:t.x>e.x?1:t.ymax===e.ymax?0:(t.ymax-e.ymax)/Math.abs(t.ymax-e.ymax))),!t.length)return o;let i=[],r=t[0].ymin;for(;i.length||t.length;){if(t.length){let e=-1;for(let n=0;n<t.length&&!(t[n].ymin>r);n++)e=n;t.splice(0,e+1).forEach((t=>{i.push({s:r,edge:t})}))}if(i=i.filter((t=>!(t.edge.ymax<=r))),i.sort(((t,e)=>t.edge.x===e.edge.x?0:(t.edge.x-e.edge.x)/Math.abs(t.edge.x-e.edge.x))),i.length>1)for(let t=0;t<i.length;t+=2){const e=t+1;if(e>=i.length)break;const n=i[t].edge,s=i[e].edge;o.push([[Math.round(n.x),r],[Math.round(s.x),r]])}r+=e,i.forEach((t=>{t.edge.x=t.edge.x+e*t.edge.islope}))}}return o}(t,e);return i&&(J(t,o,-i),function(t,e,n){const o=[];t.forEach((t=>o.push(...t))),J(o,e,n)}(r,o,-i)),r}function J(t,e,n){if(t&&t.length){const[o,i]=e,r=Math.PI/180*n,s=Math.cos(r),a=Math.sin(r);t.forEach((t=>{const[e,n]=t;t[0]=(e-o)*s-(n-i)*a+o,t[1]=(e-o)*a+(n-i)*s+i}))}return t}function Q(t,e){return[...t,...J(x(t.slice(1)),e,-120),...J(x(t.slice(1)),e,-240)]}function U(t,e=[100,100]){return[...t,...J(x(t.slice(1)),e,-90),...J(x(t.slice(1)),e,-180),...J(x(t.slice(1)),e,-270)]}function $(t){return et(t,[[100,0],[100,100]])}function tt(t){return et(t,[[0,100],[100,100]])}function et(t,e){const n=[...t];for(let o=t.length-2;o>0;o--){const i=t[o],r=v(e,i),s=L(m(i),A(r,2));n.push(s)}return n}function nt(t,e,n,o,i){const r=ot(t,e,n,o,i,!0,!1),s=ot(t,e,n,o,i,!0,!0);return r.concat(s)}function ot(t,e,n,i,r,s,a){const l=Math.pow(t-n,2)+Math.pow(e-i,2),h=Math.sqrt(l);let f=1;f=h<200?1:h>500?.4:-.0016668*h+1.233334;let c=r.maxRandomnessOffset;c*c*100>l&&(c=h/10);const u=c/2;let d=(r.bowing??1)*r.maxRandomnessOffset*(i-e)/200,g=(r.bowing??1)*r.maxRandomnessOffset*(t-n)/200;d=lt(d,r,f),g=lt(g,r,f);const p=.2+.2*o(),m=[],x=()=>lt(u,r,f),w=()=>lt(c,r,f),M=r.preserveVertices;return s&&(a?m.push({op:V.move,data:[t+(M?0:x()),e+(M?0:x())]}):m.push({op:V.move,data:[t+(M?0:w()),e+(M?0:w())]})),a?m.push({op:V.bcurveTo,data:[d+t+(n-t)*p+x(),g+e+(i-e)*p+x(),d+t+2*(n-t)*p+x(),g+e+2*(i-e)*p+x(),n+(M?0:x()),i+(M?0:x())]}):m.push({op:V.bcurveTo,data:[d+t+(n-t)*p+w(),g+e+(i-e)*p+w(),d+t+2*(n-t)*p+w(),g+e+2*(i-e)*p+w(),n+(M?0:w()),i+(M?0:w())]}),m}function it(t,e,n,o,i){return function(t,e,n,o){const i=.1,[r,s]=st(o.increment,t,e,o.rx,o.ry,i,o.increment*at(.1,at(.4,1)));let a=rt(r,null,n);if(!n.disableMultiStroke){const[r]=st(o.increment,t,e,o.rx,o.ry,1.5*i,0),s=rt(r,null,n);a=a.concat(s)}return a}(t,e,i,function(t,e,n){const o=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),i=Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*o),r=2*Math.PI/i;let s=Math.abs(t/2),a=Math.abs(e/2);const l=1-(n.curveFitting??.95);return s+=lt(s*l),a+=lt(a*l),{increment:r,rx:s,ry:a}}(n,o,i))}function rt(t,e,n){const o=t.length,i=[];if(o>3){const e=[],r=1-(n.curveTightness??0);i.push({op:V.move,data:[t[1][0],t[1][1]]});for(let n=1;n+2<o;n++){const o=t[n];e[0]=[o[0],o[1]],e[1]=[o[0]+(r*t[n+1][0]-r*t[n-1][0])/6,o[1]+(r*t[n+1][1]-r*t[n-1][1])/6],e[2]=[t[n+1][0]+(r*t[n][0]-r*t[n+2][0])/6,t[n+1][1]+(r*t[n][1]-r*t[n+2][1])/6],e[3]=[t[n+1][0],t[n+1][1]],i.push({op:V.bcurveTo,data:[e[1][0],e[1][1],e[2][0],e[2][1],e[3][0],e[3][1]]})}}else 3===o&&(i.push({op:V.move,data:[t[1][0],t[1][1]]}),i.push({op:V.bcurveTo,data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]}));return i}function st(t,e,n,o,i,r,s){const a=[],l=[],h=lt(.5)-Math.PI/2;l.push([lt(r)+e+.9*o*Math.cos(h-t),lt(r)+n+.9*i*Math.sin(h-t)]);for(let s=h;s<2*Math.PI+h-.01;s+=t){const t=[lt(r)+e+o*Math.cos(s),lt(r)+n+i*Math.sin(s)];a.push(t),l.push(t)}return l.push([lt(r)+e+o*Math.cos(h+2*Math.PI+.5*s),lt(r)+n+i*Math.sin(h+2*Math.PI+.5*s)]),l.push([lt(r)+e+.98*o*Math.cos(h+s),lt(r)+n+.98*i*Math.sin(h+s)]),l.push([lt(r)+e+.9*o*Math.cos(h+.5*s),lt(r)+n+.9*i*Math.sin(h+.5*s)]),[l,a]}function at(t,e,n,o=1){return(n?.roughness??1)*o*r(t,e)}function lt(t,e,n=1){return at(-t,t,e,n)}(j=V||(V={}))[j.move=0]="move",j[j.bcurveTo=1]="bcurveTo";class ht{static getRectangle(){return{lines:[[[0,100],[100,100]],[[100,0],[100,100]],[[0,0],[100,0]],[[0,0],[0,100]]],tilingMode:"square",angleRange:{"+1":[[10,35]],"+2":[[60,70]]}}}static getHexagon(){return{tilingMode:"hex",angleRange:{"+1":[[-15,-75]],"+2":[[-50,-59],[-61,-82]]},...ft(50,50,50,6)}}}function ft(t,e,n,o,i){let r=2*Math.PI/o,s=null,a=null,l=null,h=[],f=[];for(let o=i=i??0;o<2*Math.PI+i;o+=r){let i=[t+Math.cos(o)*n,e+Math.sin(o)*n];f.splice(0,0,i),l&&h.push([l,i]),l=i,(null===s||i[0]<s)&&(s=i[0]),(null===a||i[1]<a)&&(a=i[1])}return h=h.map((t=>w(x(t),-s,-a))),f=w(f,-s,-a),{lines:h,shape:f}}function ct(t){return(e=t,I(e.flatMap((t=>t))))[1];var e}function ut(t,e,n,o){const i=function(t,e,n){let o=t[1],i=[t];for(const n of e)b(n,t)||(T(n[0],o)||T(n[1],o))&&i.push(n);const r=[];for(const t of n){if(Y(v(t,o))<.01)for(const e of i){const n=S(e,t[1]),o=v(t,n[1]),i=L(L(m(n[1]),o),o);r.push([n[0],i])}}return[...i,...r]}(t,n,o).map((e=>({line:e=S(e,t[1]),angle:y(e)})));i.sort(((t,e)=>t.angle-e.angle));const r=i.findIndex((e=>b(e.line,[t[1],t[0]]))),s=r>0?r-1:i.length-1,a={first:i[r<i.length-1?r+1:0].line,second:i[s].line};return[dt(t[1],t[0],a.first[1],e),dt(t[1],a.second[1],t[0],e)]}function dt(t,e,n,o){let i=y([t,n])-y([t,e]);for(;i<0;)i+=2*Math.PI;const r=P(C(m(t),e)),s=P(C(m(t),n)),a=o/Math.sin(i);return[t[0]-(r[0]*a+s[0]*a),t[1]-(r[1]*a+s[1]*a)]}const gt=[[[0,0],[0,100]],[[100,100],[0,100]],[[100,0],[100,100]],[[100,0],[0,0]]];function pt(t){const e=[];for(const n of t)for(let t=0;t<n.length;t++){let o=n[t-1],i=n[t];0==t&&(o=n[n.length-1]),e.push([o,i])}return e}function mt(t){t.forEach((t=>L(t,[-6.6987298107780475,0])))}function xt(t){const e=[100,91.42135620117188],n=[91.42135620117188,100],o=[0,50],i=[35.35533905029297,64.64466094970703],r=[50,100],s=[64.64466094970703,64.64466094970703],a=[100,50],l=[64.64466094970703,35.35533905029297],h=[50,0],f=[35.35533905029297,35.35533905029297],c=[14.644660949707031,14.644660949707031],u=[14.644660949707031,85.35533905029297],d=[85.35533905029297,85.35533905029297],g=[85.35533905029297,14.644660949707031],p=[29.289321899414062,50],m=[50,29.289321899414062],x=[70.71067810058594,50],w=[50,70.71067810058594];[m,l,x,s,w,i,p,f].forEach(((e,n)=>{L(e,G([0,0],R(90+45*n),25*t-14))}));const M=B([g,m],[h,l]),b=B([g,x],[a,l]),y=B([d,x],[a,s]),k=B([d,w],[r,s]),S=B([r,i],[u,w]),v=B([u,p],[o,i]),C=B([o,f],[c,p]),O=B([c,m],[h,f]);return{label:{title:"The Great Mosque of Cordoba",location:"Cordoba, Spain (AD 784 / AH 167)"},tilingMode:"square",tileSize:[100,100],tileEdges:gt,shapes:[[h,M,m,O],[M,g,b,l],[b,a,y,x],[y,d,k,s],[k,r,S,w],[u,v,i,S],[C,c,O,f],[o,C,p,v],[m,M,l,b,x,y,s,k,w,S,i,v,p,C,f,O]],lines:[[i,v],[v,o],[S,r],[S,i],[M,h],[l,M],[O,h],[f,O],[k,r],[s,k],[y,a],[s,y],[b,a],[l,b],[C,o],[f,C],[c,[0,8.578643798828125]],[O,c],[m,O],[c,[8.578643798828125,0]],[C,c],[p,C],[m,M],[g,[100,8.578643798828125]],[M,g],[g,[91.42135620117188,0]],[b,g],[x,b],[w,S],[u,[0,91.42135620117188]],[S,u],[u,[8.578643798828125,100]],[v,u],[p,v],[d,e],[k,d],[w,k],[x,y],[d,n],[y,d]],externalShapes:[$([[100,8.578643798828125],g,b,a]),$([a,y,d,e]),U([e,d,n]),tt([n,d,k,r]),tt([r,S,u,[8.578643798828125,100]])],fillPatterns:[[[[8,1,3,5,6,11],[]],[[],[8,1,3,5,6,11]]],[[[8,1,3,5,6,11],[11]],[[11],[8,1,3,5,6,11]]],[[[[0,1,2,3,4,5,6,7,9,10,11,12,13],[2,7,8,9,10,11]],[[0,4,8,11,12,13],[0,1,2,3,4,5,6,7,8,11]]],{shiftX:-.5,shiftY:-.5}],[[[[0,1,2,3,4,5,6,7,8,9,10,11,12,13],[2,7,9,10,11]],[[0,4,11,12,13],[0,1,2,3,4,5,6,7,8,11]]],{shiftX:-.5,shiftY:-.5}],[[[9,10,12,13]]],[[[[9,10,11,12,13]]],{}],[[[[0,2,4,7,8,11]],[[11,6,3,1,5],[0,2,4,7,8,11]]],{shiftY:-.5,shiftX:1}],[[[[0,2,4,7,8]],[[],[0,2,4,7,8]]],{shiftY:-.5,shiftX:.5}],[[[[0,1,2,3,4,5,6,7]],[[8],[0,1,2,3,4,5,6,7]]],{shiftX:.5,shiftY:.5}],[[[0,1,2,3,4,5,6,7]]]]}}function wt(t){const e=20+25*t,n=100-e,o=[100,50],i=[85.355339,n],r=[85.355339,85.355339],s=[n,85.355339],a=[50,100],l=[[[50,0],[n,14.64466],[85.355339,14.64466],[85.355339,e],o,i,r,s,a,[e,85.355339],[14.64466,85.3553],[14.64466,n],[0,50],[14.64466,e],[14.64466,14.64466],[e,14.64466]]];return{label:{title:"Capella Palatina",location:"Palermo, Sicily, Italy (AD 1132, AH 526)"},tilingMode:"square",tileSize:[100,100],tileEdges:gt,shapes:l,lines:pt(l),interlacingConfig:[[0,8,0,-1,3,5],[4,12,1,0,3,5]],externalShapes:[[o,i,r,s,a,...J(x([i,r,s,a]),[100,100],-90),...J(x([i,r,s,a]),[100,100],-180),...J(x([i,r,s,a]),[100,100],-270)]],fillPatterns:[[[[[0,1],[0]],[[0],[0,1]]],{shiftX:.5,shiftY:.5}],[[[[1],[0]],[[0],[1]]],{shiftX:-.5}],[[[[0,1],[]],[[],[0,1]]],{shiftY:.5}],[[[[1],[0,1],[]],[[0,1],[1],[0]],[[],[0],[1]]],{shiftY:.5,shiftX:-0}],[[[[1],[0,1],[]],[[0,1],[1],[0]],[[],[0],[1]]],{shiftY:.5,shiftX:0}]]}}function Mt(e){const n=[60.35533905029297,75],o=[39.64466094970703,75],r=[39.64466094970703,25],s=[60.35533905029297,25],a=[75,39.64466094970703],l=[75,60.35533905029297],h=[25,60.35533905029297],f=[25,39.64466094970703],c=[50,50],u=[100,50],d=[50,100],g=[0,50],p=[50,0],m=[25,10.355339050292969],x=[75,10.355339050292969],M=[75,89.64466094970703],b=[25,89.64466094970703],y=[89.64466094970703,25],k=[10.355339050292969,25],S=[89.64466094970703,75],v=[10.355339050292969,75],C=new t(9999999*(e??1));let O=i(C.next(),-6,10);L(n,[O,0]),L(o,[-O,0]),L(r,[-O,0]),L(s,[O,0]);let A=i(C.next(),-10,6);L(a,[0,A]),L(l,[0,-A]),L(f,[0,A]),L(h,[0,-A]);let P=i(C.next(),O>5?0:-8,10);const E=[m,f];w(E,-P,0);const Y=[k,r];w(Y,0,-P);const z=[v,o],I=[h,b];w(z,0,P),w(I,-P,0);const T=[n,S],W=[M,l];w(T,0,P),w(W,P,0);const q=[s,y],D=[x,a];w(q,0,-P),w(D,P,0);const X=B(Y,E),R=B(z,I),Z=B(T,W),K=B(q,D);return{label:{title:"The East Tower of Kharraqan",location:"Kharraqan, Iran (AD 1076 / AH 459)"},tilingMode:"square",tileSize:[100,100],tileEdges:gt,shapes:[[m,p,x,K,s,c,r,X],[g,f,X,r,c,o,R,h],[d,b,R,o,c,n,Z,M],[u,l,Z,n,c,s,K,a]],lines:[[[0,0],k],[k,X],[X,r],[c,r],[c,s],[K,s],[K,y],[[100,0],y],[p,x],[K,x],[p,m],[m,X],[K,a],[a,u],[u,l],[l,Z],[Z,S],[S,[100,100]],[Z,n],[n,c],[o,c],[o,R],[R,v],[v,[0,100]],[R,h],[h,g],[g,f],[f,X],[R,b],[b,d],[d,M],[M,Z]],interlacingConfig:[[6,5,0,0,0,2],[27,11,0,0,5,3,0,!1],[27,11,0,0,3,5,0,!1],[8,29,0,-1,2,3,0,!1],[29,8,0,1,5,0,0,!1],[17,0,1,1,5,0,0,!1],[17,0,1,1,3,2,0,!1],[21,22,0,0,5,0,0,!1],[21,22,0,0,3,2,0,!1],[3,19,0,0,0,5,0,!1],[3,19,0,0,2,3,0,!1],[13,25,1,0,3,5,0,!1],[25,13,-1,0,3,5,0,!1],[31,15,0,0,3,5,0,!1],[31,15,0,0,5,3,0,!1]],externalShapes:[$([u,l,Z,S,[100,100]]),$([[100,0],y,K,a,u]),tt([[100,100],S,Z,M,d]),tt([d,b,R,v,[0,100]])],fillPatterns:[[[[0,2,6,7]]],[[[6,7]]],[[[4,5]]],[[[0,1,2,3]]],[[[[0,1,2,3,6,7],[1,3]],[[0,2,4,5,6,7],[0,2,1,3,4,5]]],{shiftX:-.5,shiftY:1}],[[[[0,1,2,3,6,7],[0,2]],[[0,1,2,3,4,5,6,7],[1,3,4,5]]],{shiftX:-.5,shiftY:.5}]]}}function bt(t,e,n){let o,i;return"hex"==t?(o=n.x-25*e,i=n.y):"hex2"==t?(o=n.x,i=n.y-25*e):(o=n.x,i=n.y),[o,i]}function yt(t,e){const{width:n,height:o,desiredNumber:i,pattern:{tilingMode:r,tileSize:s},fillPatternOpts:a}=t,l=n/i/s[0],h=o/i/s[1],f=Math.min(l,h),c={x:s[0]*f,y:s[1]*f},[u,d]=bt(r,f,c);let g=Math.ceil(n/u)+1,p=Math.ceil(o/d)+1;"hex"==r&&(g+=1);let m=(n-g*u)/2;"hex"==r&&(m-=c.x/2);let x=(o-p*d)/2;function w(t,n){let o=t*u+(a?.shiftX??0)*u,i=n*d+(a?.shiftY??0)*d;"hex2"==r?o+=n%2*(c.x/2):"hex"==r&&(i+=t%2*(c.y/2)),e(o+m,i+x,f,{x:t,y:n,rows:g,cols:p})}if("hex"==r)for(let t=-1;t<g;t++)for(let e=-1;e<p;e++)w(t,e);else for(let t=-1;t<p;t++)for(let e=-1;e<g;e++)w(e,t)}function kt(t,e){const n=.2+.2*e;return[F(t,n),F(t,.5-n+.5)]}function St(t){const e=[6.6987,25],n=[50,0],o=[93.3012,25],i=[93.30127018922192,75],r=[50,100],s=[6.6987,75];mt([e,n,o,i,r,s]);const[a,l]=kt([e,s],t),[h,f]=kt([e,n],t),[c,u]=kt([n,o],t),[d,g]=kt([o,i],t),[p,m]=kt([i,r],t),[x,w]=kt([r,s],t),M=B([a,c],[f,d]),b=B([f,d],[u,p]),y=B([g,x],[u,p]),k=B([g,x],[m,l]),S=B([w,h],[m,l]),v=B([w,h],[a,c]),C=[[f,M],[M,c],[u,b],[b,d],[g,y],[y,p],[m,k],[k,x],[w,S],[S,l],[a,v],[v,h],[v,S],[k,S],[k,y],[y,b],[b,M],[M,v]],L=[[M,b,y,k,S,v]],O=[...pt(L),...C],A=ft(50,50,50,6,Math.PI/2);return{label:{title:"Mosque of Ibn Tulun",location:"Cairo, Egypt (AD 879, AH 265)"},tilingMode:"hex2",tileSize:ct(A.lines),tileEdges:A.lines,shapes:L,lines:O,externalShapes:[et([d,b,y,g],[d,g]),Q([g,y,p],i),et([p,y,k,m],[p,m]),Q([m,k,x],r),et([x,k,S,w],[x,w])],fillPatterns:[[[[1,2,3,4]]],[[[1,2,4,5]]],[[[[2,3,4,5]]],{shiftY:-.2}],[[[[1,2,4]]],{shiftY:-.2}],[[[[0]]],{shiftY:-.2}],[[[[1,2,3,4,5]]],{shiftY:-.2}],[[[[2,4,0]]],{shiftY:-.2}],[[[[2,3,4],[1,2,4,5]],[[1,2,3,4,5],[1,2,4]]],{shiftY:-.7}],[[[[2,3,4],[4,5]],[[1,2,3,4,5],[1,2]]],{shiftY:-.7}]]}}function vt(t){const e=p([[-6,6]],t),n=[39.1743,18.75],o=[60.825,18.75],i=[39.174,81.249],r=[60.825,81.25],s=[17.5238,43.7497],a=[28.349,24.999],l=[71.65,24.999],h=[82.475,43.749],f=[82.475,56.249],c=[71.65,74.999],u=[17.523,56.249],d=[28.349,74.999],g=[50,0],m=[93.301,25],x=[93.301,75],w=[50,100],M=[6.698,74.999],b=[6.698,24.999];mt([n,o,l,h,f,c,r,i,d,u,s,a,g,m,x,w,M,b]);for(const[t,g,p]of[[s,a,30],[n,o,90],[l,h,150],[c,f,210],[i,r,270],[d,u,330]]){let n=G([0,0],R(p),e);L(t,n),L(g,n)}const y=B([s,o],[n,h]),k=B([u,r],[i,f]),S=B([s,o],[a,d]),v=B([n,h],[l,c]),C=B([i,f],[l,c]),O=B([d,a],[u,r]),A=[[g,n,y,o],[m,l,v,h],[x,f,C,c],[w,r,k,i],[M,d,O,u],[b,s,S,a],[y,v,C,k,O,S]],P=[...pt(A)],E=ft(50,50,50,6,Math.PI/2);return{label:{title:"The 'Abd al-Samad Complex",location:"Natanz, Iran (AD 1304, AH 703)"},tilingMode:"hex2",tileSize:ct(E.lines),tileEdges:E.lines,shapes:A,lines:P,externalShapes:[et([m,h,v,C,f,x],[x,m]),et([x,c,C,k,r,w],[x,w]),et([M,d,O,k,i,w],[M,w])],fillPatterns:[[[[[0,1,2,3,4,5,7,8,9]]],{shiftY:.3}],[[[[7,8,9]]],{shiftY:.3}],[[[7,9]]],[[[7,8]]],[[[[0,1,2,3,4,5,6]]],{shiftY:.3}],[[[[6]]],{shiftY:.3}],[[[[0,1,2,3,4,5]]],{shiftY:.3}]]}}function Ct(t){return!(2==t.length&&"object"==typeof t[1]&&!Array.isArray(t[1]))}var Lt,Ot;(Ot=Lt||(Lt={})).off="off",Ot.default="default";function At(t,e){const n=_(t,e.hachureGap,e.hachureAngle),o=[];for(const t of n)o.push(...nt(t[0][0],t[0][1],t[1][0],t[1][1],e));return{ops:o}}function Pt(t,e){return function(t,e){const n=[];let o=Math.max(e.gap,.1);const i=o/4;for(const r of t){const t=E(r),s=t/o,a=Math.ceil(s)-1,l=t-a*o,h=(r[0][0]+r[1][0])/2-o/4,f=Math.min(r[0][1],r[1][1]);for(let t=0;t<a;t++){const r=f+l+t*o,s=it(at(h-i,h+i),at(r-i,r+i),e.dotSize,e.dotSize,e);n.push(...s)}}return n}(_(t,e.hachureGap,0),{gap:e.hachureGap,dotSize:e.dotSize,curveStepCount:10,curveFitting:1,curveTightness:0})}function Et(t,e){t.beginPath();for(const n of e){const e=n.data;switch(n.op){case V.move:t.moveTo(e[0],e[1]);break;case V.bcurveTo:t.bezierCurveTo(e[0],e[1],e[2],e[3],e[4],e[5])}}t.stroke()}function Yt(t,e,n,o,i,r){const s=nt(e,n,o,i,{roughness:r.roughness,maxRandomnessOffset:r.maxRandomnessOffset/3,bowing:6*r.bowing});Et(t.drawingContext,s)}function zt(t,e,n,o,i){Et(t.drawingContext,it(e,n,o,i,{curveStepCount:3}))}function It(t,e,n,o,i,r=!0){let s,a,l;r?(s=100,l=s/o,a=i*l):(s=o,a=i);const h=t.createGraphics(5*o,5*i);return h.background(n.background),r&&h.scale(5,5),h}function Tt(t,e,n,o){const i=1+o,r=It(t,0,n,i,i);return r.fill(n.foreground),r.noStroke(),r.circle(i/2,i/2,1),r}function Wt(t,e,n,o){const i=new Path2D("M 0 2 c 1.25 -2.5 3.75 -2.5 5 0 c 1.25 2.5 3.75 2.5 5 0 M -5 2 c 1.25 2.5 3.75 2.5 5 0 M 10 2 c 1.25 -2.5 3.75 -2.5 5 0"),r=It(t,0,n,10,6+o);return r.translate(0,1+o/2),r.stroke(n.foreground),r.drawingContext.stroke(i),r}function qt(t,e,n,o){const i=o+1+5,r=It(t,0,n,i,i);return r.stroke(n.foreground),r.strokeWeight(1),r.line(i/2,o/2,i/2,i-o/2),r.line(o/2,i/2,i-o/2,i/2),r}function Dt(t,e,n,o,i=0){const r=o+1,s=It(t,0,n,r,r+i);return s.stroke(n.foreground),s.strokeWeight(1),s.line(r/2,0,r/2,r),s}function Xt(t,e,n,o){return Dt(t,0,n,o,3)}function Rt(t,e,n,o){const i=o+1,r=It(t,0,n,i,i);return r.stroke(n.foreground),r.line(i/2,0,i/2,i),r.line(0,i/2,i,i/2),r}function Bt(t,e,n,o){const i=1-e;t.translate(n[0]*i,n[1]*i),t.translate(o[0],o[1]),t.scale(e),t.translate(-o[0],-o[1])}function Zt(t,e){t.beginShape(),e.forEach(((e,n)=>{t.vertex(e[0],e[1])})),t.endShape(t.CLOSE)}function Kt(e,n,o,i,s,a,l,h,f,c){const u=function(t){const e=I(t),n=C(e[1],e[0]),o=e[0];return{bounds:e,shapeSize:n,start:o,availableWidth:.1*n[0],center:C(D(t),o)}}(l);let d;d=p([[2,24],[28,42],[49,62],[65,84],[98,133],[140,151],[157,160],[163,176]],"random"==s.patternAngle?r(0,1):s.patternAngle??1);const g=s.patternGap??1;if("none"==s.patternKind)return;if("infinite"==s.patternKind)return void function(t,e,n,o,i,r){t.push(),t.noFill(),t.stroke(e.colors.foreground),t.strokeWeight(.5);let s=.5*(n.infiniteStrokeWeight??1)*r.availableWidth,a=Math.round((n.infiniteDensity??1)*(r.availableWidth/s))+1,l=.1,h=.9;1==n?.infiniteAlignment?(h=.4,a/=1.5):2==n?.infiniteAlignment&&(l=.4,h=.3,a/=1.5);for(let e=0;e<a;e++){const n=l+e/a*h;if(t.push(),Bt(t,n,r.start,r.center),t.strokeWeight(s/n),"on"==o?.mode)for(let e=0;e<i.length;e++){let o=i[e-1],r=i[e];0==e&&(o=i[i.length-1]);const s=1/(n/.4);Yt(t,...o,...r,{roughness:s,maxRandomnessOffset:1,bowing:9})}else Zt(t,i);t.pop()}t.pop()}(e,n,s,a,l,u);e.push();let m=1;if(s.margin){const t=n.pattern.angle-.5,o=.16+.2458333*t+.40625*t**2+1.354167*t**3+2.34375*t**4;m=1-(o+(1-o)*s.margin),Bt(e,m,u.start,u.center)}if("on"==a?.mode){if(e.stroke(n.colors.foreground),"lines"==s?.patternKind||"dashed-lines"==s?.patternKind){"dashed-lines"==s?.patternKind&&e.drawingContext.setLineDash([12*s.patternScale,6*s.patternScale]);const{ops:t}=At(l,{hachureAngle:360-d,hachureGap:Math.max(2*g*s.patternScale,.3),maxRandomnessOffset:n.rough.maxOffset??3,bowing:n.rough.bowing??1,roughness:n.rough.roughness??1});e.strokeWeight(s.patternScale),Et(e.drawingContext,t)}if("dots"==s?.patternKind){const t=1,n=Pt(l,{hachureGap:Math.max(2*g*s.patternScale,.3),dotSize:.35*s.patternScale/t});e.strokeWeight(.5*s.patternScale*t),Et(e.drawingContext,n)}if("solid"==s?.patternKind){const n=new t(s.patternAngle).next()<.5,o=n?.2:1.5;let i;i=n?{hachureAngle:45,hachureGap:s?.roughSolidDensity??.1,bowing:50,maxRandomnessOffset:1,roughness:1}:{hachureAngle:45,hachureGap:1*o,bowing:n?70:50,maxRandomnessOffset:1,roughness:1},e.strokeWeight(o);const{ops:r}=At(l,i);Et(e.drawingContext,r)}}else if("solid"==s.patternKind)e.fill(n.colors.foreground),e.noStroke(),Zt(e,l);else{let t=function(t,e,n,o,i){if(t.patterns||(t.patterns={}),t.patterns[n])return t.patterns[n];let r={lines:Dt,"dashed-lines":Xt,dots:Tt,waves:Wt,crosses:qt,crossHatch:Rt}[n];if(!r)return null;const s=r(e,t,o,i).elt;let a=e.drawingContext.createPattern(s,"repeat");return t.patterns[n]=a,a}(o,c,s.patternKind,n.colors,g);t.setTransform(function(t,e,n,o){const i=.1*n*(1/o);return(new DOMMatrix).scale(i)}(u.shapeSize,0,s.patternScale??1,m).rotate(d)),e.fill("black"),e.drawingContext.fillStyle=t,e.noStroke(),Zt(e,l),e.drawingContext.fillStyle=null}e.pop()}function Gt(t,e,n){t.drawingContext.beginPath(),t.drawingContext.arc(e,n,t.drawingContext.lineWidth/2,0,t.TWO_PI,!1),t.drawingContext.fill()}function Ft(t,e,n,o,i){if(t.stroke(o.foreground),t.noFill(),!n.show||"none"==n.style)return;t.drawingContext.save();const r="on"==i.mode&&(1-n.dotDensity)*n.width<.4;if("dotted"!=n.style&&"double-dotted"!=n.style||r){if("dashed"==n.style){let e;e="random"==n.dashConfig?[s(1,6),s(1,6)]:n.dashConfig,t.drawingContext.setLineDash(e)}!function(t,e,n,o,i){t.stroke(o.foreground),t.noFill(),t.strokeWeight(n.width??1),"on"==i?.mode?(t.strokeWeight(1.2*(n.width??1)),Yt(t,...e[0],...e[1],{maxRandomnessOffset:10,bowing:2,roughness:.4})):t.line(...e[0],...e[1])}(t,e,n,o,i)}else!function(t,e,n,o,i){let r=n.width??1;1==r&&(r=1.0001);let s=n.dotDensity??.4;"on"==i?.mode&&(s*=.9);let a=E(e);a==1/0&&(a=1);const l=a/r,h=Math.round(s*l);let f=N([e[0],e[1]],h);if(n.noEndDots&&(f=f.slice(1,f.length-1)),"on"==i?.mode?t.strokeWeight(.2):t.strokeWeight(r),t.stroke(o.foreground),t.drawingContext.linestyle,"on"==i?.mode)for(const e of f)zt(t,e[0],e[1],r,r);else{const e=t.drawingContext.fillStyle;t.drawingContext.fillStyle=o.foreground;for(const e of f)Gt(t,e[0],e[1]),n.style;t.drawingContext.fillStyle=e}}(t,e,n,o,i);t.drawingContext.restore()}function Ht(t){const{buffer:e,pattern:n,x:o,y:i,scale:r,config:s,cache:a,info:l,p5:h,fillPattern:f}=t;if(e.push(),e.translate(o,i),e.scale(r),f&&s.fills.length){let t=[...n.shapes,...n.externalShapes??[]];const o=f[Math.abs(l.y)%f.length];let i=o[Math.abs(l.x)%o.length];const r=Array.from(Array(t.length).keys());let a=!0===i?r:i;r.forEach((o=>{let i;if(a.indexOf(o)>-1)i=s.fills[0];else{if(!(s.fills.length>1))return;i=s.fills[1]}let r=t[o];Kt(e,s,n,0,i,s.rough,r,0,0,h)}))}n.lines.forEach(((t,o)=>{const i=n.expandedLines[o];i&&(e.push(),e.noStroke(),e.fill(s.colors.background),Zt(e,i),e.pop())})),n.lines.forEach(((t,o)=>{const i=n.expandedLines[o];s.centerLine&&(s.expandedLineRightStroke?.show?Ft(e,[i[4],i[1]],s.centerLine,s.colors,s.rough):Ft(e,[t[0],t[1]],s.centerLine,s.colors,s.rough)),i&&s.expandedLineLeftStroke&&Ft(e,[i[5],i[0]],s.expandedLineLeftStroke,s.colors,s.rough),i&&s.expandedLineRightStroke&&Ft(e,[i[2],i[3]],s.expandedLineRightStroke,s.colors,s.rough)})),e.pop()}function Nt(t,e){const{config:n,pattern:o,cache:i,p5:r}=e;let s,a={};const l=(h=n.pattern.fillPatternIdx??0,f=0,c=1,u=-1,d=(o?.fillPatterns?.length??0)-1,Math.min(d,Math.floor(function(t,e,n,o,i){return(t-e)/(n-e)*(i-o)+o}(h,f,c,u,d+1))));var h,f,c,u,d;if(-1==l)s=[[!0]];else{let t=o?.fillPatterns[l];s=Ct(t)?t:t[0],a=Ct(t)?{}:t[1]}const g=t[0][1].width,p=t[0][1].height;return yt({width:g,height:p,desiredNumber:n.bufferedNumber??11,pattern:o,fillPatternOpts:a},((e,a,l,h)=>{let f=o.tileSize[0]*l,c=o.tileSize[1]*l,u=t[0][1],d=t[0][0];for(const[n,o]of t){const t=(g-g/n)/2,i=(p-p/n)/2;e>t&&a>i&&e+f<g-t&&a+c<p-i&&(u=o,d=n)}if(!u)return;Ht({pattern:o,buffer:u,x:e=(e-(g-g/d)/2)*d,y:a=(a-(p-p/d)/2)*d,scale:l*=d,config:n,cache:i,info:h,p5:r,fillPattern:s})})),a}const Vt=2.2;const jt=function(t){n(t);const e=a([1.2,"kharraqan",3,"cordoba",3,"capella-palatina",1.8,"ibn-tulun",3.5,"al-samad",3,"template-square",9,"template-hexagon"]);let i=!0,s=a([.5,"on",.5,"off"]);const l=[];for(let t=0;t<a([.02,0,.7,1,.3,2]);t++){let t=[2.5,"dots",3,"lines",1.5,"dashed-lines",2,"infinite",1,"solid"];"off"==s&&t.push.apply(t,[2,"crosses",2,"waves"]);const e=a(t);let n,i,h,f;"dots"==e?"on"==s?(n=r(1.3,1.8),i=r(1,2.9-n),h=i<1.5&&n<1.5):(n=r(.6,1.2),i=r(1,2.5-n),h=i<1.7&&n<.8):"crosses"==e?(n=r(.15,.6),i=r(2,7-4*n),h=i<2.7&&n<.3):"lines"==e?(n=r(.5,1),i=r(1,5),h=i<2.4&&n<.7):(n=r(.15,.5),i=r(2,3),h=i<2.2&&n<.25),f="waves"==e&&n>.2?0:"solid"==e?r(.5,.9):"crosses"==e&&n>.3||o()<.5?0:r(.1,.8-n/1.3);const c={patternKind:e,patternScale:n,patternGap:i,patternIsTiny:h,patternAngle:o()<.13?"random":o(),infiniteStrokeWeight:.2,infiniteAlignment:a([3,0,1,1,1,2]),infiniteDensity:r(.1,.9),roughSolidDensity:r(.1,.5),margin:f};l.push(c)}const h=!l.filter((t=>"solid"!=t.patternKind)).length&&l.length>0,f=!!l.filter((t=>t.margin<.2)).length,c=!!l.filter((t=>!(t.margin>.2)&&("infinite"!=t.patternKind&&!t.patternIsTiny))).length,p=o(),m=a([.75,"+1",.25,"+2"]);let x,w,M,b,y,k,S=.7;l.length<=0?(y=!0,S=3):y=o()<.85,k="capella-palatina"==e?9:"template-hexagon"==e&&p<.3?6:"template-hexagon"==e&&"+2"==m?6-(1-p):"template-square"==e&&"+2"==m||"template-square"==e&&"+1"==m?5-(1-p):5,f&&c&&(i=!1,"off"==s&&(y=!0),"on"==s&&(S=3,l.forEach((t=>{t.margin=Math.max(.15,t.margin)}))));let v=r(S,k);const C=a([i?.2:0,"dashed",.3,"solid",i?.4:0,"dotted"]);w=M={show:y,style:C,width:.5,shadow:false,dashConfig:g()},b={patternKind:"none"},w?.show&&"none"!=w?.style&&(i=!0);let L=a([i?.2:0,"dashed",.3,"solid",i?.4:0,"dotted",l.length<=0?0:y?.1:.2,"none"]);{let t,e;y?t="on"==s?r(.3,.5):r(.1,"dotted"==L?1:.8):("solid"!=L&&"dashed"!=L||(t=.5),"dotted"==L&&(t=r(.6,1))),e=f&&!y?.8:y?r(.1,"on"==s?.6:.9):r(.5,.8),"off"==s&&h&&(t=1,L="solid"),x={show:!(y&&v<.8),style:L,width:t,dotDensity:e,dashConfig:g(),shadow:false}}const O=!("none"!=L&&x.show||"none"!=C&&w.show);let A=o();O&&l.length<2&&(A=0),O&&(v=Math.min(v,3)),O&&v>1.5&&l.forEach((t=>{"dots"==t.patternKind&&(t.patternGap=1,t.patternScale=Math.min(t.patternScale,1.4)),"lines"!=t.patternKind&&"dashed-lines"!=t.patternKind||(t.patternGap=Math.min(3,t.patternGap),t.patternScale=Math.min(t.patternScale,1.4))})),O&&l.forEach((t=>{t.margin=0}));const P=u[a(d)];let E="template-hexagon"==e||"template-square"==e||"capella-palatina"==e,Y=a([1,E?7:5]);return{rough:{mode:s,roughness:1},frame:a([.12,"letterbox",.2,"none",.68,"full"]),desiredNumber:Y,bufferedNumber:E?15:11,colors:P,pattern:{name:e,expandedStrokeWidth:v,angle:p,mode:m,interlacing:a([.5,"default",.5,"off"]),fillPatternIdx:A},drawTiles:!1,fills:l,centerLine:x,expandedLineLeftStroke:w,expandedLineRightStroke:M,expandedLineFill:b}}(parseInt(tokenData.hash.substr(-7),16)),_t=function(t){let e;const n={kharraqan:Mt,cordoba:xt,"al-samad":vt,"ibn-tulun":St,"capella-palatina":wt};if(t.name in n)e=n[t.name](t.angle);else{let n;if("template-square"==t.name)n=ht.getRectangle();else{if("template-hexagon"!=t.name)throw new Error("invalid template name");n=ht.getHexagon()}const o=p(n.angleRange[t.mode],t.angle);e=function(t,e,n){const{lines:o}=t;let i=[],r=[],s=[];function a(t){return(t%=o.length)<0?o.length+t:t}function l(t,n,i=1){const r=o[a(t)],s=X(k(C(m(r[1]),r[0]))),l=o[a(n)],h=X(k(C(m(l[1]),l[0]))),f=B(K(F(r,.5),R(s-e*i),1),K(F(l,.5),R(h+e*i),1));return[F(r,.5),f]}const h=[];for(let e=0;e<o.length;e++)if("+1"==n){const n=l(e,(e+1)%o.length),s=l((e+1)%o.length,e,-1);i.push(n),i.push(s),r.splice(0,0,s[0],n[1],n[0]),"hex"!=t.tilingMode||5!=e&&0!=e?"square"==t.tilingMode&&0==e&&h.push(U([s[0],n[1],n[0]],[100,100])):h.push(Q([n[0],n[1],s[0]],o[e][1]))}else{const n=l(e,e+2),a=l(e+1,e-1,-1),f=B(n,a);i.push([n[0],f]),i.push([f,n[1]]),i.push([a[0],f]),i.push([f,a[1]]),r.splice(r.length,0,a[1],f),s[e]||(s[e]=[]),s[e].splice(s[e].length,0,a[0],f,n[1]);const c=0==e?o.length-1:e-1;s[c]||(s[c]=[]),s[c].push(f),s[c].push(n[0]),"square"==t.tilingMode&&0==e?h.push(U([a[0],f,n[0]],[100,100])):("hex"==t.tilingMode&&0==e||5==e)&&h.push(Q([n[0],f,a[0]],o[e][1]))}let f=[];return f="hex"==t.tilingMode?"+2"==n?[[[[[6,7],[7,8]],[[8],[6,7]],[[7,8],[8]]],{shiftX:-.5,shiftY:-.5}],[[[6],[7,8]],[[],[6]],[[7,8],[]]],[[[6,7],[]],[[8],[6,7]],[[],[8]]],[[[[6,8],[7]]],{shiftX:.5}],[[[0,1,2,3,4,5,6]]],[[[6]]],[[[[7,8]]],{shiftX:-.5}]]:[[[[[1,2],[1,0],[2,0],[2,0,1]],[[1,2],[1],[2,0],[2,1]]],{shiftX:.5,shiftY:0}],[[[[0,1,2],[1,2]]],{shiftX:-.5}],[[[0]]],[[[1,2]]]]:"+1"==n?[[[[[1],[0,1],[]],[[0,1],[1],[0]],[[],[0],[1]]],{shiftX:0,shiftY:.5}],[[[1],[0]],[[0],[1]]],[[[[0,1],[]],[[],[0,1]]],{}],[[[[1],[0],[0,1]],[[0],[1],[]],[[0,1],[],[1]]],{shiftX:-.5,shiftY:0}],[[[[0,1],[0],[0,1]],[[0],[],[]],[[0,1],[],[1]]],{shiftY:0,shiftX:-.5}],[[[[0,1],[1]],[[0],[]]],{shiftY:0}]]:[[[[[5],[4,5],[]],[[4,5],[5],[4]],[[],[4],[5]]],{shiftX:0,shiftY:-.5}],[[[[4,5],[4]],[[4],[4,5]]],{shiftY:-.5}],[[[[5],[]],[[],[5]]],{shiftX:-.5,shiftY:.5}],[[[[1,2,0,3,4],[0,1,2,3,4,5]],[[0,1,2,3,4,5],[0,1,2,3,4]]],{shiftY:.5}],[[[1,0,2,3,4]]],[[[1,0,2,3]]]],{tilingMode:t.tilingMode,tileEdges:t.lines,tileSize:ct(t.lines),lines:i,shapes:[...s.filter((t=>!!t)),...r.length?[r]:[]],externalShapes:h,fillPatterns:f}}(n,o,t.mode)}if(t.expandedStrokeWidth){e.expandedLines=e.lines.map(((n,o)=>{const i=function(t,e,n,o,i){const r=ut(t,o,n,i),s=ut([t[1],t[0]],o,n,i);return[s[0],t[0],s[1],r[0],t[1],r[1]]}(n,0,e.lines,t.expandedStrokeWidth,e.tileEdges);if(i)return i})).filter((t=>!!t));let n,o=!1;if(e.interlacingConfig?(o="default"==t.interlacing,n=e.interlacingConfig):"template-square"==t.name&&"+1"==t.mode?(o="default"==t.interlacing,n=[[0,4,0,1,0,2],[2,6,1,0,0,2]]):"template-square"==t.name&&"+2"==t.mode?(o="default"==t.interlacing,n=[[15,14,0,0,5,5,0,!1],[15,14,0,0,3,3,0,!1],[3,2,0,0,3,3,0,!1],[3,2,0,0,5,5,0,!1],[7,6,0,0,3,3,0,!1],[7,6,0,0,5,5,0,!1],[11,10,0,0,3,3,0,!1],[11,10,0,0,5,5,0,!1],[0,8,0,1,0,2,0,!0],[4,12,1,0,0,2,0,!0]]):"template-hexagon"==t.name&&"+1"==t.mode?(o="default"==t.interlacing,n=[[7,1,0,-1,0,2],[5,11,-1,0,0,2,1],[3,9,-1,0,0,2,-1]]):"template-hexagon"==t.name&&"+2"==t.mode&&(o="default"==t.interlacing,n=[[21,20,0,0,2,3,0,!1],[21,20,0,0,0,5,0,!1],[17,16,0,0,2,3,0,!1],[17,16,0,0,0,5,0,!1],[13,12,0,0,2,3,0,!1],[13,12,0,0,0,5,0,!1],[9,8,0,0,2,3,0,!1],[9,8,0,0,0,5,0,!1],[5,4,0,0,2,3,0,!1],[5,4,0,0,0,5,0,!1],[1,0,0,0,2,3,0,!1],[1,0,0,0,0,5,0,!1],[10,22,-1,0,0,2,1],[6,18,-1,0,0,2,-1],[2,14,0,1,0,2,0]]),o){const[t,o]=bt(e.tilingMode,1,{x:e.tileSize[0],y:e.tileSize[1]});let i=0;"hex"==e.tilingMode&&(i=e.tileSize[1]/2);for(const[r,s,a,l,h,f,c,u]of n){let n;n=m(e.expandedLines[r][h]),e.expandedLines[s][f][1]+=4,e.expandedLines[s][f]=[n[0]-t*a,n[1]-o*l+i*(c??0)],!1!==u&&(n=m(e.expandedLines[s][h]),e.expandedLines[r][f]=[n[0]+t*a,n[1]+o*l-i*(c??0)])}n.flatMap((t=>t.slice(0,1)));for(let t=0;t<e.lines.length;t++)e.expandedLines[t][1]=F([e.expandedLines[t][0],e.expandedLines[t][2]],.5),e.expandedLines[t][4]=F([e.expandedLines[t][3],e.expandedLines[t][5]],.5)}}return e}(jt.pattern);new class{constructor(t,e,n){this.showInfo=!1,this.seed=0,this.animationActive=!1,this.currentZoom=1,this.targetZoom=1,this.cache={},this.config=t,this.pattern=e,this.seed=n?.seed;const o=this.size=n?.size||{width:650,height:500};this.p5=new window.p5((t=>{this.p5=t,t.disableFriendlyErrors=!0,t.setup=()=>{const e=t.createCanvas(o.width,o.height);n?.parent&&e.parent(n.parent),n.noAutoInit||this.init()},t.draw=()=>{this.animationActive&&(this.draw(),this.runAnimationLoop())}}))}setupInteractiveHandlers(t){t=t||window;const e=t=>{"i"==t.key&&(this.showInfo=!this.showInfo,this.config.drawTiles=!this.config.drawTiles,this.draw())},n=t=>{38==t.keyCode&&(t.preventDefault(),this.zoomTo(Math.min(5,this.targetZoom+.1)),this.draw()),40==t.keyCode&&(t.preventDefault(),this.zoomTo(Math.max(1,this.targetZoom-.1)),this.draw())},o=t=>{t.preventDefault();const e=this.targetZoom-t.deltaY/1e3;this.zoomTo(Math.min(5,Math.max(1,e))),this.draw()};return t.addEventListener("keypress",e),t.addEventListener("keydown",n),t.addEventListener("wheel",o,{passive:!1}),()=>{t.removeEventListener("keypress",e),t.removeEventListener("keydown",n),t.removeEventListener("wheel",o)}}zoomTo(t){this.targetZoom=t,this.animationActive||(this.startZoomMillis=this.p5.millis(),this.startZoomValue=this.currentZoom),this.runAnimationLoop()}runAnimationLoop(){if(this.animationActive){const t=Math.min(1,(this.p5.millis()-this.startZoomMillis)/300);this.currentZoom=this.startZoomValue+(this.targetZoom-this.startZoomValue)*t}this.animationActive=this.targetZoom!=this.currentZoom}init(){const{p5:t,pattern:e,config:o,cache:i}=this;var r,s,a,l;this.seed&&n(this.seed),this.currentZoom=this.targetZoom=(o.bufferedNumber??11)/o.desiredNumber,this.buffers=[[1,this.p5.createGraphics(this.size.width*Vt,this.size.height*Vt)]],this.fillPatternOpts=Nt(this.buffers,{pattern:e,config:o,cache:i,p5:t}),this.overlayBuffer=this.p5.createGraphics(this.size.width*Vt,this.size.height*Vt),r=this.overlayBuffer,s=o,a=e,l=this.fillPatternOpts,r.push(),r.strokeWeight(.8),r.stroke(s.colors.overlay),r.noFill(),r.drawingContext.lineDashOffset=12,r.drawingContext.setLineDash([1,2]),yt({width:r.width,height:r.height,desiredNumber:s.bufferedNumber??11,pattern:a,fillPatternOpts:l},((t,e,n,o)=>{r.push(),r.translate(t,e),r.scale(n),a.tileEdges?.forEach((t=>{r.line(...t[0],...t[1])})),r.pop()})),r.pop(),this.draw()}draw(){const{p5:t,config:e,buffers:n}=this;t.background(e.colors.background);const o=(e,n)=>{t.push(),t.translate(t.width/2,t.height/2),t.scale(this.currentZoom/(n??1)/Vt),t.translate(-e.width/2,-e.height/2),t.image(e,0,0),t.pop()};for(const[t,e]of this.buffers)o(e,t);e.drawTiles&&o(this.overlayBuffer,1);const i=this.drawFrame();if(this.showInfo&&this.pattern.label){t.push(),t.translate(0,-3);const n=.25*i,o=i/4;t.textStyle(t.ITALIC),t.textSize(n);const r=t.height-3*o+.8*n,s=t.height-2*o+n,a="full"==this.config.frame?i:15,l=Math.max(t.textWidth(this.pattern.label?.title),t.textWidth(this.pattern.label?.location));"none"==this.config.frame&&(t.fill(e.colors.background),t.stroke(e.colors.foreground),t.rect(a-5,r-n-5,l+10,s-r+2*n)),t.fill(e.colors.overlay),t.noStroke(),t.text(this.pattern.label?.title,a,r),t.textStyle(t.NORMAL),t.text(this.pattern.label?.location,a,s),t.pop()}}drawFrame(){const{p5:t,config:e}=this;t.noStroke(),t.fill(e.colors.background);const n=Math.max(0,.05*t.height),o=Math.max(0,.05*t.width),i=Math.min(n,o);return"none"!=e.frame&&(t.rect(0,0,t.width,i),t.rect(0,t.height-i,t.width,i),"full"==e.frame?(t.rect(0,0,i,t.height),t.rect(t.width-i,0,i,t.height),t.strokeWeight(1),t.noFill(),t.stroke(e.colors.foreground),t.rect(i,i,t.width-2*i,t.height-2*i)):(t.strokeWeight(1),t.stroke(e.colors.foreground),t.line(0,i,t.width,i),t.line(0,t.height-i,t.width,t.height-i))),i}}(jt,_t,{size:{width:window.innerWidth,height:window.innerHeight}}).setupInteractiveHandlers()}();
//# sourceMappingURL=artblocksEntry.js.map
