let t,e,s,i,h,n,r,a,c,l,d,f,o,b,u,p,m=[],x=[],y=[],Z="F0E8D6e59c231a63dc182f54Zeeebe3f18b8b2396960d2e2eZF0E8D6C52330DB86831C1C19Ze8e7d1b8b4a6908c835b5754302f2eZf5eaeae897151D6F700b1a33Zfffcff2861b3fa1d05ffaa000f0a30ZF0E8D6ed1f636b2f8018024eZe0e2e22ea6941f789d00273fZf7f9e1cd4453F39262222b4eZE9E3E0005E7565A8C10D3642Zdfdbc9bc3c24013e4c03181aZECE8E42EA363206145302e2dZe1ded6d92b1eE6A61C452b33Ze5e5caec5746633339292920Zf0f5f9b6c6d152616b1e2022Zfff3f20e7d96ee988e211e57Zfff7f8205e8aff2b4f15324FZfdf1f5277782e33c300b3136".split`Z`.map((t=>t.match(/.{6}/g).map((t=>"#"+t)))),g=window.innerHeight,w=window.innerWidth,E=Math.min(w,g)/1e3;window.setup=()=>{a=new A,i=a.c([8,16,24]),h=a.c([8,16,24]),c=a.c([.1,.05]),l=a.c([4,8]),bh=a.c([0,1]),p=a.i(0,Z.length-1),m=Z[p],n=m[a.c([0,m.length-1])],frameRate(30),d=translate,f=vertex,cv=curveVertex,createCanvas(w,g),angleMode(RADIANS),colorMode(HSB,360,100,100,100),noFill(),s=.3*E,l*=E,t*=s,e*=s,c=Math.min(w,g)*c,r=a.d()<.5?0:180,o=a.d()<.5,background(n),strokeWeight(Math.max(1,s));let D=(w-2*c)/i,M=(g-2*c)/h,C=n,S=[];b=a.c([1,2,4]),u=a.c([1,2,4]);for(let t=0;t<4;t++)S.push(a.c([1,2,3])),y.push(a.c([1.5,1])*s,a.c([1.5,1])*s);for(let s=0;s<h;s++)for(let r=0;r<i;r++){let c,d,f,o,p,Z=D*r+a.n(l,D/2),g=D*r+a.n(D/2,D-l),w=M*s+a.n(l,M/2),E=M*s+a.n(M/2,M-l);c=a.c(m.filter((t=>t!==C&&t!=n))),C=c,r<i/b&&s<h/u?(t=y[0],e=y[1],1==S[0]?(d=M*s+l,f=D*i/b-l,p=M*(s+1)-l,o=l):2==S[0]?(d=l,f=D*(r+1)-l,p=M*h/u-l,o=D*r+l):3==S[0]?(d=l,f=D*i/b-l,p=M*h/u-l,o=l):4==S[0]&&(d=M*s+l,f=D*(r+1)-l,p=M*(s+1)-l,o=D*r+l)):r>=i/b&&s<h/u?(t=y[2],e=y[3],1==S[1]?(d=M*s+l,f=D*i-l,p=M*(s+1)-l,o=D*i/b+l):2==S[1]?(d=l,f=D*(r+1)-l,p=M*h/u-l,o=D*r+l):3==S[1]?(d=l,f=D*i-l,p=M*h/u-l,o=D*i/b+l):4==S[1]&&(d=M*s+l,f=D*(r+1)-l,p=M*(s+1)-l,o=D*r+l)):r<i/b&&s>=h/u?(t=y[4],e=y[5],1==S[2]?(d=M*s+l,f=D*i/b-l,p=M*(s+1)-l,o=l):2==S[2]?(d=M*h/u+l,f=D*(r+1)-l,p=M*h-l,o=D*r+l):3==S[2]?(d=M*h/u+l,f=D*i/b-l,p=M*h-l,o=l):4==S[2]&&(d=M*s+l,f=D*(r+1)-l,p=M*(s+1)-l,o=D*r+l)):r>=i/b&&s>=h/u&&(t=y[6],e=y[7],1==S[3]?(d=M*s+l,f=D*i-l,p=M*(s+1)-l,o=D*i/b+l):2==S[3]?(d=M*h/u+l,f=D*(r+1)-l,p=M*h-l,o=D*r+l):3==S[3]?(d=M*h/u+l,f=D*i-l,p=M*h-l,o=D*i/b+l):4==S[3]&&(d=M*s+l,f=D*(r+1)-l,p=M*(s+1)-l,o=D*r+l));let A=new k(Z,g,w,E,d,f,p,o,c,t,e);x.push(A)}},window.draw=()=>{d(c,c),0==r&&0==o||(d(w/2-c,g/2-c),rotate(radians(r)),o&&scale(-1,1),d(-w/2+c,-g/2+c));for(let t=0;t<x.length;t++)x[t].cb(),x[t].up(),1==bh?(x[t].dr(),x[t].dc()):(x[t].dr(),x[t].ds())},window.keyPressed=()=>{"s"!=key&&"S"!=key||save(`Divenire.png`)};class k{constructor(t,e,s,i,h,n,r,c,l,d,f){this.mx=a.c([-1,1]),this.my=a.c([-1,1]),this.i1=d,this.i2=f,this.x1=t,this.x2=e,this.y1=s,this.y2=i,this.lr=n,this.ll=c,this.lt=h,this.lb=r,this.c=color(l),this.h=hue(this.c),this.la=a.d()}cb(){stroke(this.h,saturation(this.c),brightness(this.c),100*Math.min(1,s));let{mx:t,my:e,ll:i,lr:h,lb:n,lt:r,x1:c,x2:l,y1:d,y2:f,i1:o,i2:b}=this,u=min(d,f)-a.n(10,60)*E,p=max(d,f)+a.n(10,60)*E,m=min(c,l)-a.n(10,60)*E,x=max(c,l)+a.n(10,60)*E;(l+b*t>h||c+o*t>h)&&(this.mx*=-1,line(h,u,h,p)),(l+b*t<i||c+o*t<i)&&(this.mx*=-1,line(i,u,i,p)),(f+b*e<r||d+o*e<r)&&(this.my*=-1,line(m,r,x,r)),(d+o*e>n||f+b*e>n)&&(this.my*=-1,line(m,n,x,n))}dr(){let{x1:t,x2:e,y1:s,y2:i}=this;beginShape(),f(t,s),f(e,s),f(e,i),f(t,i),endShape(CLOSE)}dc(){let{x1:t,x2:e,y1:i,y2:h}=this;push(),stroke(this.h+a.n(-1,1),saturation(this.c)+a.n(-5,5),brightness(this.c)+a.n(-5,5),100*Math.min(1,s)*.1),beginShape();for(let s=0;s<10;s++)cv(lerp(t,e,a.d()),lerp(i,h,a.d())),cv(lerp(e,t,a.d()),lerp(h,i,a.d()));endShape(),pop()}ds(){stroke(this.h+a.n(-1,1),saturation(this.c)+a.n(-5,5),brightness(this.c)+a.n(-5,5),100*Math.min(1,s));for(let t=0;t<5e3/(i*h);t++)point(lerp(this.x1,this.x2,a.d()),lerp(this.y1,this.y2,a.d()))}up(){let{mx:t,my:e,c:i,h,i1:n,i2:r}=this;stroke(this.h+a.n(-1,1),saturation(i),brightness(i),100*Math.min(1,s)),this.x2+=r*t,this.y2+=r*e,this.x1+=n*t,this.y1+=n*e}}class A{constructor(){this.uA=!1;let t=t=>{let e=parseInt(t.substr(0,8),16),s=parseInt(t.substr(8,8),16),i=parseInt(t.substr(16,8),16),h=parseInt(t.substr(24,8),16);return()=>{e|=0,s|=0,i|=0,h|=0;let t=(e+s|0)+h|0;return h=h+1|0,e=s^s>>>9,s=i+(i<<3)|0,i=i<<21|i>>>11,i=i+t|0,(t>>>0)/4294967296}};this.A=t(tokenData.hash.substr(2,32)),this.B=t(tokenData.hash.substr(34,32));for(let t=0;t<1e6;t+=2)this.A(),this.B()}d(){return this.uA=!this.uA,this.uA?this.A():this.B()}n(t,e){return t+(e-t)*this.d()}i(t,e){return~~this.n(t,e+1)}c(t){return t[this.i(0,t.length-1)]}}