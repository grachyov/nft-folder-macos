p5.disableFriendlyErrors=true;let m=Math;let dd={...tokenData};let bb=aa(dd);let pp=cc(dd);let tokenId=parseInt(dd.tokenId.substring(2));function aa(token){return new Array(32).fill(null).map((a,j)=>parseInt(token.hash.slice(2+j*2,4+j*2),16));}
function cc(token){return parseInt(token.hash.slice(0,16),16);}
function rnd(){pp^=pp<<13;pp^=pp>>17;pp^=pp<<5;return((pp<0?~pp+1:pp)%1000)/ 1000;}
function range(min,max){if(max===undefined){max=min;min=0;}
return rnd()*(max-min)+min;}
function ee(min,max){if(max===undefined){max=min;min=0;}
return m.floor(range(min,max));}
let w;let hh=201;let ff=hh;let gg=hh;let ii;let jj;let kk=0;let ll=0;const[mm,nn,oo,qq,rrr,ss,]=new Array(6).fill(null).map(()=>m.floor(rnd()*255));let safe=false;const tt=bb[19]%16<15;const uu=bb[14]%2===0;const vv=uu?m.max(10,m.floor(bb[18]/ 4)):255;if(uu)hh-=60;const ggg=bb[13]%5;const fff=bb[10]%3;const eee=bb[9]%44===0;const ddd=bb[15]%20>1&&bb[15]%20<16;const vFadeRate=m.floor(bb[16]/ 16)+1;const hhh=bb[11]%50===0;const ccc=bb[12]%3===0;const lll=bb[17]%5;const kkk=bb[25]%5===0;const bbb=bb[25]%5===1;const vKleinSpace=bb[25]%5===2;const aaa=bb[15]%20<2;const ww=bb[15]%20<1;let zz=(bb[29]%6);const vSquarepp=bb[15]%20>15&&bb[15]%20<18;const yy=ee(hh / 6,hh / 2);const xx=bb[20]%4===0;const iii=ee(0,yy);const jjj=3*bb[27]+30;const burstStart=ee(90,m.max(jjj-30,90));const burstSpeed=10+(bb[26]%8);const vKillIndex=ee(burstStart,jjj);const mmm=bb[29]%8===0;const nnn=bb[30]%8===0;const ooo=(mmm?10:1)*(nnn?0.1:1);const vSlowDeadColors=bb[27]%8===0;const vFastDeadColors=bb[28]%8===0;const vDeadMultiplier=(vSlowDeadColors?10:1)*(vFastDeadColors?0.1:1);let idx1=(0+fff)%3;let idx2=(1+fff)%3;let idx3=(2+fff)%3;const rotate=bb[31]%2===0;const flipX=bb[30]%2===0;const flipY=bb[29]%2===0;const deadExistence=!(bb[0]%2||bb[1]%2||bb[2]%2||bb[3]%2||bb[4]%2||bb[5]%2||bb[6]%2||bb[7]%2||bb[8]%2||bb[9]%2)||bb[19]%16===0;let difference;let gfx;function setup(){const square=m.min(windowWidth,windowHeight);createCanvas(square,square);gfx=createGraphics(square,square);w=square / ff;difference=square-w*ff;init();background(0);noStroke();noSmooth();safe=false;}
function keyPressed(){if(keyCode===RIGHT_ARROW){if(gg<421){gg+=10;ff+=10;}
setup();}else if(keyCode===LEFT_ARROW){if(gg>80){gg-=10;ff-=10;}
setup();}}
const redLivingMult=1 /(41*ooo);const greenLivingMult=1 /(23*ooo);const blueLivingMult=1 /(17*ooo);const redDeadColorMult=(ggg+1)/(3583*vDeadMultiplier);const greenDeadMult=((bb[23]%5)+1)/(97*vDeadMultiplier);const blueDeadColorMultBloom=((bb[22]%5)+1)/(73*vDeadMultiplier);const blueDeadColorMult=((bb[20]%5)+1)/(109*vDeadMultiplier);function draw(){generate();if(!uu)gfx.background(0);gfx.noStroke();gfx.translate(difference / 2,difference / 2);ll=0;let anAccountingOfTheDead=0;const vRedLiveSinArg=bb[27]+redLivingMult*kk;const vGreenLiveSinArg=bb[25]+greenLivingMult*kk;const vBlueLiveSinArg=bb[26]+blueLivingMult*kk;const gggSinArg=bb[7]+redDeadColorMult*kk;const vGreenDeadSinArg=bb[24]+greenDeadMult*kk;const vBlueDeadBloomSinArg=bb[4]+blueDeadColorMultBloom*kk;const vBlueDeadSinArg=bb[21]+blueDeadColorMult*kk;for(let a=0;a<ff;a++){for(let b=0;b<gg;b++){let i=flipX?(rotate?a:b):(rotate?ff-a-1:gg-b-1)
let j=flipY?(rotate?b:a):(rotate?gg-b-1:ff-a-1)
let cancel=false;if(ii[i][j].alive==1){ll++;const red=m.min(m.floor(ii[i][j].age*(2+m.sin(vRedLiveSinArg))),255);const green=m.max(200-ii[i][j].age*(2+m.sin(vGreenLiveSinArg)),0);const blue=m.floor(128*1+m.sin(vBlueLiveSinArg));const colors=[red,green,blue];const fff=bb[2]%3;cancel=colors[0]+colors[1]+colors[2]===0;gfx.fill((colors[idx1]+mm)%255,(colors[idx2]+nn)%255,(colors[idx3]+oo)%255,vv);deadCells[i][j]=false;}else{anAccountingOfTheDead++;const red=m.floor(ii[i][j].fade*(2+m.sin(gggSinArg)));const green=ii[i][j].bloom?(ii[i][j].bloom*11)%256:m.floor(0.5*(ii[i][j].fade*(2+m.sin(vGreenDeadSinArg))));const blue=ii[i][j].bloom?m.floor(ii[i][j].bloom*(1+m.sin(vBlueDeadBloomSinArg))):m.floor(ii[i][j].fade*(2+m.sin(ii[i][j].fade+vBlueDeadSinArg)));const colors=[red,green,blue];cancel=colors[0]+colors[1]+colors[2]===0;gfx.fill((colors[idx1]+(ii[i][j].fade?qq:0))%255,(colors[idx2]+(ii[i][j].fade?rrr:0))%255,(colors[idx3]+(ii[i][j].fade?ss:0))%255,vv);}
if(!cancel||vv!==255){if(deadCells[i][j]!==true){if(cancel){if(deadCells[i][j]===false){deadCells[i][j]=60;}else if(deadCells[i][j]===0){deadCells[i][j]=true;gfx.fill(0,0,0,255);}else if(deadCells[i][j]<5){gfx.fill(0,0,0,50);}else{deadCells[i][j]--;}}
gfx.rect(a*w,b*w,vv!==255?w:w-1);}}else{if(!deadCells[i][j]){gfx.rect(a*w,b*w,w-1);deadCells[i][j]=true;}}}}
if(!ll){if(kk<100){safe=true;}
if(aaa||ww){zz++;}
init();}
image(gfx,0,0);gfx.translate(-difference / 2,-difference / 2);}
function mousePressed(){init();}
const makeCell=(alive=0,age=0,bloom=0,fade=0)=>{return{alive,age,bloom,fade,};};const newDead=()=>{return makeCell();};const newAlive=()=>{return makeCell(1);};const gridInit=(runner)=>{for(let i=0;i<ff;i++){for(let j=0;j<gg;j++){if(tt&&!kkk&&!vKleinSpace&&!bbb){if(i===0||j===0||i===ff-1||j===gg-1){ii[i][j]=newDead();jj[i][j]=newDead();continue;}}
runner(j,i)
jj[i][j]=newDead();}}};function init(){pp=cc(dd);ii=new Array(ff);jj=new Array(ff);deadCells=new Array(ff);for(let i=0;i<ff;i++){ii[i]=new Array(gg);jj[i]=new Array(gg);deadCells[i]=new Array(gg);}
let a=m.floor(rnd()*(ff / 2));let b=m.floor(rnd*(gg / 2));if(b<a){[b,a]=[a,b];}
if(safe){gridInit((i,j)=>{let k=bb[18]%2===0?i:j;if(k%((bb[17]%91)+3)===0){ii[i][j]=newAlive();}else{ii[i][j]=newDead();}});return;}
if(eee){const foo=m.max(7,m.min(9*bb[12],255)+2);const bar=m.max(7,m.min(9*4+m.floor(bb[12]/ 32),(abs(bb[9]-bb[10])%9)*4+
m.floor(bb[12]/ 32)))+2;gridInit((i,j)=>{ii[i][j]=(i+j*j)%foo===0||(j*m.floor(m.sin(i*((bb[14]%10)-5))))%bar===0?newAlive():newDead();});}else{const gliderPointsAt=(w,z)=>{return[[w,z],[w+1,z],[w+2,z],[w+2,z-1],[w+1,z-2],];};const gliderPointsAt2=(w,z)=>{return[[w,z],[w+1,z],[w+2,z],[w+2,z+1],[w+1,z+2],];};const gliderPointsAt3=(w,z)=>{return[[w,z],[w+1,z],[w+2,z],[w,z-1],[w+1,z-2],];};const gliderPointsAt4=(w,z)=>{return[[w,z],[w+1,z],[w+2,z],[w,z+1],[w+1,z+2],];};let gliderPoints=[];const gliderCount=(bb[23]%8)+4;const gliderSpacing=m.min(m.floor(hh /(2*gliderCount)),5+(bb[3]%16));if(aaa){const pointsAtFunctions=[gliderPointsAt,gliderPointsAt2,gliderPointsAt3,gliderPointsAt4,];const gliderSetter=(q0,q1,r0,r1,s)=>{for(let q=q0;q<q1;q+=gliderSpacing){for(let r=r0;r<r1;r+=gliderSpacing){gliderPoints=[...gliderPoints,...pointsAtFunctions[s](ww?q+ee(1,4)-2:q,ww?r+ee(1,4)-1:r),];}}};gliderSetter(5+zz,5+gliderCount*gliderSpacing+zz,5,5+gliderCount*gliderSpacing,0);gliderSetter(5,5+gliderCount*gliderSpacing,gg-(5+gliderCount*gliderSpacing)-zz,gg-5-zz,1);gliderSetter(ff-(5+gliderCount*gliderSpacing),ff-5,5+zz,5+gliderCount*gliderSpacing+zz,2);gliderSetter(ff-(5+gliderCount*gliderSpacing)-zz,ff-5-zz,gg-(5+gliderCount*gliderSpacing),gg-5,3);}
const d=()=>bb[7]%2===0?ee(1,100)/10:1;const trigModA=d();const trigModB=d();const trigModC=d();const trigModD=d();gridInit((i,j)=>{deadCells[i][j]=false;let exists;if(ddd){if(deadExistence){exists=i===m.floor(ff / 2)||j===m.floor(gg / 2);}else{const conditions=[(i===m.floor(ff / 4)&&j<m.floor(gg / 2))||(i===m.floor((3*ff)/ 4)&&j>m.floor(gg / 2)),(i===m.floor(ff / 2)&&j>m.floor(gg / 2))||(i===m.floor(ff / 2)&&j<m.floor(gg / 2)),(i===m.floor(ff / 4)&&j>m.floor(gg / 2))||(i===m.floor((3*ff)/ 4)&&j<m.floor(gg / 2)),(j===m.floor(gg / 4)&&i<m.floor(ff / 2))||(j===m.floor((3*gg)/ 4)&&i>m.floor(ff / 2)),(j===m.floor(gg / 2)&&i>m.floor(ff / 2))||(j===m.floor(gg / 2)&&i<m.floor(ff / 2)),(j===m.floor(gg / 4)&&i>m.floor(ff / 2))||(j===m.floor((3*gg)/ 4)&&i<m.floor(ff / 2)),(j===m.floor(gg / 8)&&i>m.floor((3*ff)/ 4))||(j===m.floor((7*gg)/ 8)&&i<m.floor(ff / 4)),(j===m.floor(gg / 8)&&i<m.floor(ff / 4))||(j===m.floor((7*gg)/ 8)&&i>m.floor((3*ff)/ 4)),(i===m.floor(gg / 8)&&j>m.floor((3*ff)/ 4))||(i===m.floor((7*gg)/ 8)&&j<m.floor(ff / 4)),(i===m.floor(gg / 8)&&j<m.floor(ff / 4))||(i===m.floor((7*gg)/ 8)&&j>m.floor((3*ff)/ 4)),];exists=conditions.some((condition,idx)=>{return condition&&bb[idx]%2===0;});}}else if(aaa){exists=gliderPoints.some((point)=>{return point[0]===i&&point[1]===j;});}else if(vSquarepp){const a=i-m.floor(gg / 2);const b=j-m.floor(ff / 2);const squarehh=xx?ee(0,hh / 2):yy;const existsInLargerSquare=m.abs(a)<=squarehh&&m.abs(b)<=squarehh;const existsInSmallerSquare=m.abs(a)<=iii&&m.abs(b)<=iii;exists=existsInLargerSquare&&!existsInSmallerSquare;}else{const a=i-m.floor(gg / 2);const b=j-m.floor(ff / 2);const ro=m.sqrt(a*a+b*b);const t=m.atan(a / b);const trigFns=[m.floor((m.sin(i*j)+1)*256)>400+trigModA*10,m.floor(250*trigModA*m.abs(t))%7<trigModB / 1000*m.floor(ro),m.sin(a*trigModA)*m.cos(b*trigModB)<m.sin(b*trigModA)+m.cos(a*trigModB),m.sin(a*trigModA)*m.cos(a)<m.sin(b*trigModB)*m.cos(b),m.sin(a)-m.cos(trigModA*a)<m.sin(b)*m.cos(b*trigModB),];exists=trigFns[bb[17]%trigFns.length];}
ii[i][j]=exists?newAlive():newDead();});}
kk=0;}
const bloomTimeFactor=1;const maxNeighborAgeToBloom=500*bloomTimeFactor;const totalNeighborAgeToBloom=255*bloomTimeFactor;function generate(){kk++;let overpopulationNumber;if(ccc){if(m.floor((kk*burstSpeed)/ 20)%jjj===vKillIndex){overpopulationNumber=2;}else{overpopulationNumber=m.floor((kk*burstSpeed)/ 20)%jjj<burstStart?3:4;}}else{overpopulationNumber=3;}
const normalSpace=!(kkk||bbb||vKleinSpace);let xStart=normalSpace?1:0;let yStart=normalSpace?1:0;let xStop=normalSpace?ff-1:ff;let yStop=normalSpace?gg-1:gg;for(let x=xStart;x<xStop;x++){for(let y=yStart;y<yStop;y++){let neighbors=0;let neighborAge=0;let maxNeighborAge=0;let bloom=0;for(let i=-1;i<=1;i++){for(let j=-1;j<=1;j++){let xIndex=x+i;let yIndex=y+j;let swap=false;if(xIndex<0){xIndex+=ff;if(bbb||vKleinSpace){yIndex=gg-yIndex-1;}}
if(xIndex>=ff){xIndex-=ff;if(bbb||vKleinSpace){yIndex=gg-yIndex-1;}}
if(yIndex<0){yIndex+=gg;if(bbb){xIndex=ff-xIndex-1;}}
if(yIndex>=gg){yIndex-=gg;if(bbb){xIndex=ff-xIndex-1;}}
neighbors+=ii[xIndex][yIndex].alive;neighborAge+=ii[xIndex][yIndex].age;maxNeighborAge=m.max(ii[xIndex][yIndex].age,maxNeighborAge);}}
neighbors-=ii[x][y].alive;neighborAge-=ii[x][y].age;bloom=ii[x][y].alive?m.max(5,neighborAge-maxNeighborAge):neighborAge-maxNeighborAge;if(ii[x][y].alive==1&&neighbors<2){jj[x][y]=makeCell(0,0,bloom,128);}else if(ii[x][y].alive==1&&neighbors>overpopulationNumber){jj[x][y]=makeCell(0,0,bloom,128);}else if(ii[x][y].alive==0&&neighbors==3){jj[x][y]=makeCell(1,0,bloom,128);}else{if(ii[x][y].alive){jj[x][y]=makeCell(1,ii[x][y].age+1,bloom,0);}else{if(maxNeighborAge>maxNeighborAgeToBloom||neighborAge>totalNeighborAgeToBloom){jj[x][y]=newAlive();}else{jj[x][y]=makeCell(0,0,bloom,m.max(0,ii[x][y].fade-vFadeRate));}}}}}
let temp=Object.assign({},ii);ii=Object.assign({},jj);if(!hhh)jj=Object.assign({},temp);}