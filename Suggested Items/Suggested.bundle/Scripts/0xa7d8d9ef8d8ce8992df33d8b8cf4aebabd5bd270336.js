const V="20220801.210420",a=Number,b=Math,s=b.floor,t=b.abs,e=b.min,j=b.max,n=b.round,r=Object,h=r.keys,i=r.entries,l=r.assign,c=setTimeout,d=function(t){let n,i,l=Uint32Array.from([0,1,i=n=2,3].map((a=>parseInt(t.substr(8*a+2,8),16))));this.t=a=>(n=l[3],l[3]=l[2],l[2]=l[1],l[1]=i=l[0],n^=n<<11,l[0]^=n^n>>>8^i>>>19,l[0]/b.pow(2,32)),this.j=(a=.5)=>this.t()<a,this.h=(a,b=[])=>(a=a.filter((a=>!b.includes(a))))[s(this.t()*a.length)],this.i=(a,b)=>{let s=this.t();return b&&(s=b(s)),a[0]+s*(a[1]-a[0])},this.l=(b,s=!1)=>{const t=h(b)[this.o(r.values(b))];return s?a(t):t},this.o=a=>{const b=a.reduce(((a,b)=>a+b),0);let s=this.t()*b;return a.findIndex((a=>(s-=a,s<0)))},this.m=a=>{let b,t,e;for(e=a.length;e;e--)b=s(this.t()*e),t=a[e-1],a[e-1]=a[b],a[b]=t;return a},this.p=(a,b=1)=>{b=e(1,j(0,b));const s=[0];let t=s[0];for(let e=0;e<a;e++)t+=1-this.t()*b,s.push(t);return s.map((a=>a/t%1)).slice(0,-1)}},f=(a,b,s=",")=>{let t=a.split(s);for(let a=t.length-1;a>0;a--){const s=b[a-1],e=t[a];for(let b=0;b<a;b++)t[b]=t[b].replaceAll(s,e)}return t[0]},o=({k:a,u:b,D:s,g:t,A:e,q:j,C:n})=>t.map(((t,r)=>t.map(((t,h)=>{const i=f(t,n).split("").map((a=>j.indexOf(a)));let l=0;const c=[];for(let t=0;t<i.length;t+=3){const j=a[i[t]],n=b[i[t+1]];l+=s[i[t+2]],c.push({name:j,B:l,J:n,A:e})}return{K:c,id:"ABC"[r]+(h+1)}})))),m=a=>{const b=a.length;return a.reduce(((a,s)=>a+g(s.J)/g(s.P)/b),0)*b},w=(b,s)=>{let t,e,j=0,n=1/0;for(let[r,h]of i(s)){if(r=a(r),r>=b){n=r,e=h;break}j=r,t=h}return u(t,e,D(j,n,b))},p=a=>JSON.parse(JSON.stringify(a)),k=a=>a>1?s=>1-b.pow(1-s,a):a<1?s=>b.pow(s,-a):a=>a,u=(a,b,s)=>a+(b-a)*s,D=(a,b,s)=>(s-a)/(b-a),v=a=>a.reduce((function(a,b){return a+b}),0),g=a=>v(a)/a.length;class A{constructor(a,b,s,t){this.set(a,b,s,t)}set(a,b,s,t){this.x=a,this.y=b,this.w=s,this.F=t,this.a=s*t}H(a,b){return a>=this.x&&a<=this.x+this.w&&b>=this.y&&b<=this.y+this.F}}const q={G:{I:1,N:{0:0,5:150,13:500,20:900,35:1e3},L:{M:{1:12,"3p":2,"3T":2,2:1},O:.75,T:.2,R:.9},P:{20:8,100:6,200:4,300:2,400:1,500:1,600:1},S:{0:2,.33:3,.67:1},J:{1e4:1,15e3:2,2e4:2},U:{0:1,.15:3,.3:1,.5:.5},W:2,_:{0:8,.25:1,.5:1,.75:1,1:8},V:{0:1,.25:2,.5:6,.75:2,1:1},X:{Y:24,Z:2,$:1,aa:1,ba:1,sa:1,ta:1,ea:1,ja:1,na:1,ra:1},ha:{Z:{ia:["b8ffde","ff9","bff","fccdff","d8d2ff"],F:"fff",la:"fff"},$:{ia:["595959","808080","404040","303030","999"],F:"fff",la:"000"},aa:{ia:["b3b3b3","808080","ccc","e6e6e6","d9d9d9","bfbfbf"],F:"fff",la:"888"},ba:{ia:["00a99d","666","c4e9fb","29abe2","ccc","fccdff"],F:"fff",la:"888"},sa:{ia:["e6e6e6","bff","c4e9fb","92d6ff","29abe2","0071bc"],F:"fff",la:"00419d"},ta:{ia:["e6e6e6","d8d2ff","6f00a4","fccdff","ed1e79","f00"],F:"fff",la:"888"},ea:{ia:["e6e6e6","78ff72","b8ffde","00a791","00a545","006837"],F:"fff",la:"888"},ja:{ia:["00a651","00aeef","ed1c24","ee2a7b","000","595959"],F:"fff",la:"6f00a4"},na:{ia:["000","6f00a4","fccdff"],F:"fff",la:"ff008d"},ra:{ia:["000","404040","595959","737373","8c8c8c"],F:"fff",la:"e5e5e5"},Y:{ia:["fccdff","b8ffde","00a545","c4e9fb","29abe2","6f00a4","ed1e79","ff9","ff0","060","60f","ff6200","f0f","0ff","f00","00a99d","7a00db"],F:"fff",la:"666",ca:{3:3,6:2,9:1,15:1,99:1}}},da:80,fa:{J:{min:300,max:960,oa:1},ma:[{wa:"B2",pa:[.03,1],ka:"l"},{wa:"C8",pa:[.01,.03],ka:"h"}]},ua:{Da:.6,max:4,va:.3,ga:.04,Aa:{min:.15,max:.6,oa:.01}}}},C=[1,2,4,8,16,32,64],B=/(?=[A-Z])/;q.qa={Ca:{25:1,35:2,45:3,55:4},Ba:[.2,.35],za:[.05,.25],ya:[.15,.35],xa:[.05,.3],Ja:{Ka:{oscillator:{type:["pulse","pwm","sawtooth","square"],width:.46,modulationFrequency:[0,.7]},effect:{Pa:"fffvv".split(""),wet:[.1,.35],feedback:[.1,.55],delayTime:[.2,.5],frequency:[.39,.6],depth:[.1,.23]}},Fa:{filterEnvelope:{octaves:(a,b)=>a.filterEnvelope.baseFrequency<220?b.l({4:1,5:2},!0):4}},Ha:[{volume:-15,envelope:{attack:[0,.16,-2.4],decay:.43,sustain:.16,release:.19},filterEnvelope:{attack:0,decay:[.21,1],sustain:[0,.6],release:[0,.55],baseFrequency:"C2D2E3F2G2A2B2C3D3E3F3G3A3B3C4D4E4F4G4".split(B)}},{volume:-16,envelope:{attack:[0,.16,-2.4],decay:.25,sustain:.26,release:.08},filterEnvelope:{attack:0,decay:[.23,1],sustain:[0,1],release:[0,.55],baseFrequency:"C3D3E3F3G3A3B3C4D4E4F4G4A4B4C5".split(B)}},{volume:-16,envelope:{attack:[0,.16,-2.4],decay:.22,sustain:.31,release:.26},filterEnvelope:{attack:0,decay:[.23,1],sustain:[0,1],release:[0,.55],baseFrequency:"C3D3E3F3G3A3B3C4D4E4F4G4".split(B)}}]},data:{A:.89,Ga:3072,q:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#",C:"0123456789",k:"A#2G#2B2F#2D#2D#3C#3G#3F#3A#4G#4B4E4D#4C#4B3F#4D#5E5C#5F#5A#5G#5C#6E2E3B5D#6E6A#3D5F#6G#6A#6B6A#1B1D#1C#2E1F#1G#1C#7C#1E7D#7F#7A2G#7".split(B),u:[24,12,48,96,72,192,23,25,11,10,22,144,36,13,768,108,240,384,576,288,336,60,84,19,3,2,264,672,8,5,40,7,16,32,168,360,6,241,120,14],D:[0,24,168,96,12,216,192,180,204,48,348,396,144,240,108,23,25,26,72,312,336,22,288,264,768,384,228,11,227,14,10,13,84,120,36,360,60,576,156,9,15,591,300,672,132,600,480,276,744,528,70,46,372,6],g:[["aaaa033c1c2c1c0a1a24e1e234f1f2g1g2h1h2i1i2,2a1a2,ac,ab,b1b2,d1d2","OdaO1J2L4K3P52L60M0M2L0e0e4K560,dd,0J0,0L0,0P0,0K0,0N0N,1J3P","MfaJ1P0N1y0e0J0P220,fg,0e0K0,0L0R","8a378H30575167624a47,75757,76767,a4a4a,8jJ78H8jJ,bKaHKajK,PaHPajP,eaHeaje,ab,Ja","eaa01jh2g3D2y4p2f3h2e4n2g3i2y4z2f3o2,c21j,g5yamc2f5eamca,aj,ada2,adc2,ama2","e5e0M2d3y6fad5jM4e0b2M3d2y41jeam1j,abcab,e0gam5jyamy05mea,6gad5j,6yady0,6ead,aa,dj","Paa63y56017n4n93y7m4m901ab,3ya1a,bP5p8vbZ2D8pbjpbju83y,BbDxbeFbePae,BbevbeGbeMae,8n8,abPab,PabvbY2ubm,5Pabn4vbv2,bb,4n8u8","8a461cae8j2ac0c51faI3z9ac0cb,5K9IbbH7G7C7r7A78K2c,K9Abbr7C7G7H7I7,ba5bab,8bbab,161,b8j,8K2aa0a5,be,La,ab3","5a608i361J2rbKu4A7vbIB4C4Pie8mb,1P25dPis,PN3m9r4w75dsbjA7Pnb,a35jn9v4w7,b5b,be,Pa,0PibPi3,45e,JibK,bjt4","baa222y7333d7444e7560b7h0j1b1k1h1m1b12y7z0r1y1l1z1k1y13d7i0t1d1s1i1l1d14e7f0j1e1s1f1r1e160,aj,ab,h0b0,z0y0,i0d0,6060,f0e,ad","0a8o6n0m0l0j2s0r4s93v97v1k6q0m0q0j0l2k00er0r0s0s3u91v6w0s3E2l0j8eeC05H0F0I0H0geegedw6v0C0B0A3w0C4A0v93s0r20e8x6B05C0v7H4G0C0B0x7v91C65x75C00eaedaeds6u0r2j90v0k8ee88k6m0p0j2r3s4k0q0l0j0k2l0,be,0aeeaed,0t0,0u0,0yee,F0G0,bd,0A0,0d,0w","ecaecde14e051105cj,c5c,4e4e,jJcjJcdJ,cjec,3jecd,2c2","5a0b5b0b,265b21ib61ab6Lb,65bKi3Kij5jKi4K,Bb35dvb4Lbj,jC7F7H75e,jx7F7I75e,La,Lbb,be","Mda1N2O3OcjJ0O2e3ecjJ21O0M0N2J3Jcj,2P3Pcj,K3Kcj,dm,cg","OdaO0N0N0L0L0J0J3M2N0N2J0J2O0O3M0y0y0e0e2L0L0,dd,0P0,1P0,0M0","bca51n3161q308vbdB7G2u2F2r2dce54mgn34ag64agq30d0k82r7B2G2F2,aj,08bcg,be,0p0h,0ddjd,k0q0n,j0k0n,2A2w2,bdj","Paa0b4c4b4z2f3O31g5z5g5p2h3,b2OadO3d3b3Pas,g2NadN3c3g3Oas,aj,ab,2P20,2O21","Pfa3K1K2033M1M1N1N21,133,fg,1L1L,P1","3a0j3d0j,3s1j3s1d3b1s1b3b3j4d4s2j4s2d4b2s2b4b4,3j3,4j4,ea,Ka","4b14H1tbbs2u2w2C2B2,455r2A2v2w2s24G,345ab4H3jaj,be,0j54H0,Ma,bj","erae0d0d0M0M0J0J0,rz","MlaM0c1c0a1a0e1e0M1M0b1b0g1g0K1K0,cm,lj","eea3J460J5J1P470P5Pcje43K480K5K1d490d5dcj,es,cjM4M0M0M0M5Mcj,e0e0e,20e5ecj,ej,cs,J0J0J,P0P0P,K0K0K,d0d0d","Jaa6jbs01sJas1H4eaj61jjbb0xbbA2w3vbbw2JaIw7x3vbjA2x266Ocs,8v5Kcb1sPasj7w341slbs8x56,Na,be,2u21e,1d6Ocs,21e1d,1b,bsv2,u2w2","yaa0y1y4y3M5Kaj0K1K4K3y5eaj0e1e4e1y5dabPab0P1P4P1J5t6K5,Abds6r6l6,2s6A6,aKlbdr6,2e5A6,aK0,ae,be","eaa0eae0e1e5A2M6M6y1y5A2K6K6b1b5x2ederbdC43dbsadrabtabla8rbdA48skdrkbtkblkb,ubdw3A73l3j3,dejbdl3t3r3s3A93,3C973,be,3uaewabAa,devbd,de0,3s3r3t,bMdb,3w3u","baabasJftaawa0y0yasKftcawc0J0J0PfuMawM0e0e0JfJcdx,aj","eaae0J1J532b1b043042J1J32452N1N2,2y1y2,am,aj,2e1e,P1P,2K1K","Pda130P21N0N2K2,2P2,J0K0J0K230,dd,L2N2L","Oaa0Pad1Oad06x3Pae16C3,9O7O4OaeOadt2u2w2O8O5OaeNad9N7N4Nae,t2u2w2P8P5Pae,ab,be,2vbbC3I3H3F3G3,2GbbF3H3I3C3v3,tbbs3u3w3A3,2w2u2t2,2A2s2j2,j2s2A2","Naa4567aj8w158A27dj4BbKk0m936CbKl0j0k9JaeKajNdj8w1FbKI0H1A0v038A2S0T0I0H0F0A0v1s0r0l0JaeKaj,be,0B0C0,0r0s0,w0NaeLajPdj,sbdj0r0l0,NaMLajPaj,wbdr0v0A0,JaMKajN,vbd,0j0l2","8a28K23m5jAbIB74w4G4643v51e,FbdG74,jGbd6b,08e81ePvK0PmePm1e,JwK0JaeJa1eJ,be,K0JmeJm,F4I4Q,4C4B,Pa","Raa1R0R3R4O7O0O5O6bK7K0K3K4N7N0N5N6b,aKm2s8erbe,n2lbek8e,bd,aKr2rbb,ask2kbb,aKj2jbb,asl2lb,as1,betb","Mba51K3K0K3K1e3e0e3e1671L3L0L3L74y4y8e64448e,4QbsIbeF9e,4Bbs2e,C9eFb,bK,bb,M0M3M,P3P0P3P,1M35,4B42,beGb","6aKasI8C1A763a2a54r0cadPe5r89I16KrbI96eyadPv3c2e54r146eIbIB1w16ezad,16K6s,be,b6jKabC8s1l1q0dadP,5H8A1v7P,I8B1w1,bKas,Pa,1s0yad,bb,w1B1","Laa5z34b5g3Dbb,1lbjA3C3G21sbjB3F3,4bLabsbbA3I3C24b,3gbILab,be,gbbLa,0Q20S3","Oba3J2Obb3G2I2,1e41e,5jlbbA2u2s25GlbsA2s2u2A2Cb,be,5b040,G25j,La","2a02s0z1c1g1hcb,Qbdx3t3l32K2jBbjt3q3,cb2j02s0,Ma,be","LaacbbL6S72D2c38p12D2c3LcbDbbGbbC9l2p2c38D12D2c3N6Q5D42p2D3L6S708p40N6D5CbjI9s0LcbGbjC9l08CbjI9s2c2fbb,2cbI8cbb,bbCbbI9s,be,bb8cbb,10L6GbbC9l08D1,72cbINabcbbNab,cbpbb,bbF2B2s,Lab,2A2","LcaLajs8H3B42v5ebLas62B0H2z2ebbLe7j62I0Q5wbsbdA2I0H2e2fab,3I42,5a7b,be,2C1l8C2G1Lab62,2C1sbjB2F,2ebIL,sbbA,2bbLa,bjA2","Laaeab70t41vbm8s375BbmA93a4tbj1absa4c4v406c4f4v48s3a4c46f4z4v45ybja4g4z4B4A92Raeyab,8r2RaeeabRa2abRa2ab,r2k2j2l2,be,2RaeyabLa2ab,bb,0r4s92x2,t41abja4,tbs1vbm,w2t2,2w2v","3a0e60e,7I1F1G1C4s56227k1j1l5w43b7w5l1j1k1n56ubKw1A16ubIw1A4C1627s4C1G1F1I1Hb,be,77,La,1B1,1r1,3e,3d","Laa051P15aI34B2F6HbsF2G2B2x2Pab,4G2H6Bbsx2G2F2,aI30,be,Lab,3GbsC2,N1O1N,2LaK3","3aa0y0c0a0g1a1i23dc0b1a2b1f2y1d2b1cab,13d3d3d,aj3j,ab3s,Pa","Laap0p30o0o0m0m1D0p0p0k2f0f0z0z0i0i0g0g0c0c0f0f3aj,ajLaj,0D0,0n0,1D2n","JfaJ3J3J0P3P1e3e2gM3M3,3P3P3,3e3e3,3M3Mf,fg","2a1b2b1b,2jAbmv3C3B3G3F3H3I3,4KbKebb2b4ebKKb,Ja,be,02o0","Jaa020eejD4hab,1j21j,3ajKeja4c5b3a,Kejf4b5b,K4P4PabJ,as,abJa","JdaJ2P1P2K1K2J1J0dM1M2y1y0d,2e1ed,dw,dd","bfa0e10afg,y1M1yfgdfg,fgbfg","PdaP1O1O2J1J2N1N2K1K1,1P1,dg,0P1","PcaP0P2P1eN2N0N2N1eJ2J0J2J1eL2L0L2L1e,4s3v3w3r3,4w3v3x3Bb,cj,be,ajrbn","NfaP0P0P1gK0yfg,1gP1g,fgNf","NfaP0P1eNfVK0J1e,fgAbgv2w2x4s2r3x2NfV,fgwbgr2s4x3A4Ab,be,2w2v2,2B2","Jfa13J4J024K4,f24Kf,J3J4J,gK4K4K,4J4,fg","2d01NadKajJdj012gKadJajOdj,11,2g2g,Lc","Mfa1gM21g,b2V2Mf,0gg20,fg","PfaO0K0J0P0O0N0L0JawKabMabyab,fz","Jaa0as1Jcse8y8cc4acsy8f8bc3b,1Jas1J,64Jms63b,5B5,jG7I5H5F5C2F2Bb,jI7C2x2G2w5wbb,be,JmdJm,bjF5,cj"],["jaak0l1m0n0o0p0q2k0n1n0k2q0p0o0n0m1l0k0,ad,0j0,1r0s0r1","nfao0m1m0p0n0k0m0l1o0,fg,0j0k0q0","odah0D1i0o1f0n1D0q1h0k1m0n1o0m1p0,td,dw","vbaA32ewabwbtu1A1v1jae2b2bsbbAbxv3r1s1jaI2bwbsu1s1r12e4c4b4H0b,wabjaJ2,be,ra,1w1u1,0b2","naa1k251l24,4na,3m4m53o4o5j5kabm0s,4q5j4m4q6so4o,j5n6s,aj,0j,abn0","kIajact0uajs2k0t0u1oagp0k2l0j0s0r0jrbkfzuagt0k2s0u0w0t1rags0j0l2k0p0o0kfbqfg,ab,0lrbnfz,0q0","DMapdzn0qddmdgndzDdzpdlnd!m0q0n0mdd,ad","qdaq3j5n1l1l4k1m1m5n3j4k1t2u0s0t0x0B0A0ndbn1r2C0F0r6G0C0ldbl1madG6Q0m0u0A0x0jdbj1k2w0F0k0H6x0,ab,dd,adv0,1j1,1k1,1n1,0I0","fba1bo1aog2D2h4o5j2o4j5t2r2v2w6x2F2H6x2H2F2FafH2x6H2F2x6w2v2r2t5j4o2j5o4h2D2g2f2Fbf30Fbo30,be,g0D0h7o8j0o7j8t0r0v0w9x0F0H9x0H0F0f,ab,H0x9H0F0x9w0v0r0t8j7o0j8o7h0D0g0f,2n2,2k2,2B2,0n0,0k0,0B0","jbjr0t0j0mbkj0r0v0kbkq0m0l0vbkA0w0s0nclmcjq1l1rcmlcjubnA0r0w0x0A0B0C0udosddvddwcdCcj,be,cmkcj","Dfao6n0m0l0j1s0r2s0w2v0w4v0p8k6q0m0q0j0l1k1r0r0s0s2u0w0n8v6w0s2r1l0j3C0F35o8w6v0C0B0A2w0C92s0r1m8x6B07v4H07B90k8C6F3x475F0H3B0q8s6u0r1j0w0v0k4x0x0B0B0C0C3n8k6m0p0j1r2s0j0k0q0l0j0k1l0,be,0t0,0u0,0G0,0A0,H0F0I0H0,bg,F3C0,fe,0x4v0w","j0v0jafs1r0Aatv1s0jats0Dfuzfgnfgmfg,as,0uat","tja62j142q142lkrtjv659l2s5t2u57w2l28u2l2q2r2A2s2v5w2u58w28A2w2vkr,7q232,24297,jb,t27q2t27q,979k,2j2,032m2t203,k2,7r2,r5","jasuasr0kawlasj0raww0A0jaur0s0lax1A03l013w0r0l0kcbl2jdjrcdB2A2G2BajFajr2v2r2w2A2v2xajBaj,ab,j0k0A0v0w0,cj,B0C0B0x0","mla0kdjl20ldjjdd,3jw1A1wddAddmcdocj,23j,ddmld,ocmkd","3a0k203bicbkaj1b,radtaggaj3jl2sadrag3d,jagcajca,ad1b3b,fa","zja071r5z1075x1z1246246m8A191u1w5Anb62zabmabu1w5914rab95x1,m171,jb,m146m1,s8t1l16m,l1t8s1,1v1,zjj,313,1r1,z1m","lca1A4w5B6l41x4v5C6l62el32e,n7o8j3m7n8r3k7q8t3j7k8s3t7l8j3r7t8w3u7s8,n5o6j4m5n6r4k5q6t4j5k6s4t5l6j4r5t6w4u5s6,0A3w7B8l30x3v7Cb,ae,cb,aj,ab,bb,be","learazladkajjdnu0renw0kdnvazwadraj,azradlaj","2a0j2n0j,c1f1g1cajzajfq,aj2u,aa","jam0n1k20k1tab,m2lab,aJpabmaJ,abjaJ","mammabm3m0n3n1o3o24ab,abn3nab,abo3oab,a4a,aJ,bp3p","hba37w0D89o04i8o0h03o84u0x0x8u0v05u860o0vbf59D0w87u060,be,k0n0j097k0r0j0u0,j0r0k079j0n0k0o0,n0D09o01,17w0r0v0,r0w07u02,29D0n0h,t0,bi,q0","cbag2p20x2F2FbiB2w56cme3cmf3Amjs1l1m7g1cabc1f14fmf4FmjB1w1t1k1n7pbj0v2B2G8u52,1el2s2A2C2C8s2l21ep2g6c2f2p2q2t2u2,mb,be,g7m1l1s1A1C1,p1q1t1u1x1F1,2t2k2n2p,2c2,1p1,biA2","Aaar2A0v4r4A4lebtcsAajr2x62A6365r5A5uebrcs,2w62w32,2AaHr2,ab,2sasw2s,1A0,1x0,2v","h1k0c3k0c2q1m0H2j1l0H2r1l1q42s1t1j43l1j1k0H3j1l1t1sadh1n1,1ha,ab,3k1,n0c,1kash1","joaloykoysoy","haa0hac0zasp1n197572p19z39z1f39n38D3b3hdbbaj,m1n161Dac45D18k1D3D3h261,ab,5n1,1p1,n5D1n,1m1,D2D2h,pajn,n2m1,h1","laaj1l1j1l1j1l1j7m1n7m1n99994s1r1s1r1l97sanr1l97nbnm0k0j0l5B0C0A0B0v0A0C0B0A0v0w0s0r0l0j0k0r0l0j0k8k8k0m3n0m0p0D3n8p0D0p3n8D0n0m265w0sbbw0v0A0w5B0C0B0A0v0w0CbGB0H0F0C0B0F0B0A0F0B0A0v0F0H0I0,be,ab,060k0j0l0,0n8p0D0,1s1r1s1r1s1r1,0r0s0w0v0A0,k0j0l0k0j0l,1m1n1,0m0n0,1j1k","buac9aujg99jf9zaj0z205253D2h3p2z2,42z242,62f262,ab,72D2h72,8a2z28a,1f21c,p2D2z,2m2n,f2c2,cu","Bajs0w0A0w0v0r0j0jbns1k1r1j1s1r1k1,az,be","ba18b1zas5fas2ias3fas2r9j6r6zae5kbbm6l6j6fae2j9r6s6iae3j9k6q6faez0f1f1,1f1f1,ab,z0f1f1baHb8b1,p7h1h1casa8b1g1g1,1d1d1,h0f1f1casa4d1d1,be,1h1h1,1b1,bbl6","najj1r1j0k41t1s1l0j2q2k43t3s3l0j40,ad,0n0,40q0j0,0o0,0r","Jbay0K0b0e0a0y0c0f0z0D0p0n0m0k0j250T0Q0H8B0v9u0T0Q0H8G0B0x9u0s0r0t0l0j0k0m0n0o0p0D0h0i0z0f0f0z0i0h0D0p0o0n0m0k0j0l0t0r0s0u9x0B0G8H0Q0T0u9v0B8H0Q0T360j0k0m0n0p0D0z0f0c0y0a0e0b0K0y0J0Jaey1K1ba01a1y1c1f1z1D1p1n1m1k1j471T1Q1H1F1B1v1w1u1T1Q1H1F1G1B1x1w1u1s1r1t1l1j1k1m1n1o1p1D1h1i1z1f1,be,ab,050,060,171,r0s9A0B0C8H,H8C0B0A9s0r,r1s1w1A1B1C1F1H,0F0,0w0","kaan4taHl4raHtadlxdlaskaHl7dkaswyHr5x3A5B3x0AzeA2w3A0w0k2tyPk6u3s6w3u0szes2t3s0t0,ye,adja,yN,yO,1djas,0v0v2,0r0r2,adka","iaa2n1j2q1j2n3l1b2q3j3,o3g1bo3m3g1sg3o1bo3,3ia,0m1j0,ab","baa3baj35b5b,cjh4i64o2i2b4m2b4n2ba,h4n62m62i2o64i2,4h4,1pcbbaj1ncb,ab,n0bp0,4b","haa0o82q8q357q1n160l8q94v1w1s1v1A1v1w1u4s91,6has26h4p462haH26h76n3k1kas54,ab,n1m1n1,1k1,aj,j1l1j3k,h1,4m1p1,4k1,1l3s","pca1bpcb1b,2bbD3ob2b,Dbwob0bo3ha0,bpbbh,cbDbw","naarajrauw6j6r68s0b42515330b4141,1414a,ab,15151,7l7l,n18s,r1s1w1v,ajnau,1n1m1j1,m1r1","z2f2z2hagD2p2oawn2m2Dawp2z2kawj2l2v2w3w2u0t0r2t0n4m0j0D0k0m3r0t0j0v0w3w0u4r0v10B10,ab,0A0w3j3r4l0r3j3w0A0B,aj,0s0,0l0","nFj1j6j0n614bq3k7k8t3r9j6j0m3j7r8s3t94b,2q6q2,n2j6j2l650,Fb,ab,r6rkblGslG,l0n6n,Fs,3n2n2l3,3j2j2,3l250","paa3930575167624a47,75757,76767,a4a4a,8p98p,bD7f7n7D7D7f7n7D,h7o7g7h7h7o7g7h,z7D7a7z7z7D7a7z,ab,m7z9p7m7z7,7p7","laa01l20Ibofc,j1k2n1m2p1p2D,ab,aJ","5j22lj1u4151l4b,jbt3rjbu3va15br3ljbw3ujb,bj3,51l0x3Aa1,js,0A3xa,jj","DCa030ab2K412i45,83j6s986r3u9u3r6D6l3j9r6j3D6l3k3D,5Dab,j7t1j5t5s1j7t1t5r5u1u,Cb,br5t1t7j1r5t5j1t7k,ib,3t3,5l5,j3l6D,3D3","Aaa3Aaj34b4b,7v55a,6A26v2s2u2,ab,1l2jcbAaj1t2rcb,rajt0bjcjl0,2j2l7A,s2u2l2j2,2u2s2","trar0j0l0u0s0r0v0,rz","Caa9C0B6v1F0G0C0x6v0w0t37D0w0u0s0t0l0j0k0o0o0k0j0l0t0s0u0w0482t0w0v6x0C0G0F52v6B0C0,ab,0s0r0l0j0,0j0l0r0s0,7D7D,8282,2v6B0C2v6B0C,0A0,1m0n0p0,D0p0n0m,B6v1C0B6v1","1am0qabmab1bq0iabpab,aw1d1zmawpadDawhab,na","hBaidRpBdDdRhcd47p1526330,cj,050,060,8m8m,p7p7p,D8D0o,p0n0p0n,0h0,0o0","kbaj51120r3w0u0w0v3t025n5,5n5k5j5,40l0,r0t0r3t0u3t,0s0,l0l0l,bb","Daap0haLD0kaLl0naLk0raUlabtabmab,ag","caahIbfaWn1WhIbnaWk1Jo0k0m0p0n0h0j0c0f0D0z0rbbtbelbejbe,ab,IbDa","foaaoycoygcyccjz0f0g0D0i0z0f0,cjccj","maal2n0matq2n0c3c4jm2r2j1D2n1q2l0a3a4j,1n2Dab,abmat,aj,cHpcj,cjpc","oaao0hazzaz1j1noajgaugaz,azhaz,oajza","kbajbsrb1vb51wb1Aa56Kjj0r2v2s2t2w2Abb70s2t0n40B3H3C3x3F3Ibbr40C3x0r0,Kb,6bjjbs,070,0r40,0w0v,1sb1tb,bnbjk,n0k0j","hcgD1m1n2j2n1ncnm1l1j1janl3m3n3n0bq0bn0b,aHm3D3ha,cj,1hcnD1m1,ab","haa1gi0D0i0Ddg,dghag1g,fdgza"],["lba1u9lbg1v0w0u0tbh4s0w0u6n0q03u0w9tbg4u0x0w6o0n5r0u0x9w0,be,70m08bbq03rbft0280m5s0,l070,k0j0l0t0r0,2m0n0mbb3,0q0k0j0t0,bir0t02,j0k0q,n0o0n,0v0","iban03As1k7q5u0m7o0k5n7p8t2u69B0iienbB3Cs1w7u0s2t0lbDubEmbqq0k5k7t0j0u0t6u09GneHbFo0j14AA09B0C0r7t0s19l7k2s1j7q0s2w69C0F0H0oiejbBu0w64CA09B0C0B79A6w0ubDxbElbqt2s1r7w0sie9w0C09F0Qne,be,0u0w6,0r0,l0t2t8q2t0l8rb,w0s2t6w0u0s2vb,0j0l0t2,0v0,bb,0j0k0,x0","Daa0m3qmjjbml1r1s4B1x1Dae0h3zcjCbmB1A4u1s1t1,2iamh3z3n3Dan2namp3,be,h3pamD3,aj,1w1v1","hBandRpBdodRnBdqdRmBdkdR","rbal1k6sbHj1u1w1nbHq0j2sbm3kbS91vbHu6s1sbH7xbm8rbSl1k6r1u0v0A0x0G0F0s6u1w1x1B0A0C0nbKq0j24C0sbj3GbIF0I0Q0T0kbj95I0Q0vbIu6s5Q0T0sbI74B0x0xbI8UbIS0T0Q0I0C0x0,be,bb,0r0s0,r0v0w0A0x0,IbjH0F0G0,1B1x0C0G0,1j1,r0j0q0n0,A0w0v2,j1r1t","nbaD0p9D4D4D4n1j0l0habh4h4h4r1s0k0zabz4z4z4j1s0q9n6l6k6rbbt0s0r2l1j2k1q2t1s2r1u0paIw1v0A0v7x1B0C0w7C1G0F0v7H1F0C0A3x1C0v0r3w1A0u0r3v1x0G0B3x1B0I0A8eF1G0Q5Q0S5U0W0H8e,be,bj,0oaI,0nae,ad,0B8eT1,1Daj,0pae,0ma,0Dab","fbaD0i0h5p5n5m5q5k5j5xbmA3w0h7p0o5m5k5j5l5t5s5Bbmx0A3v0A0x6w3A68x4s0w6j0l0u3k0l4x0q0t0u0A7l0r3D0zbdqbdmbdvbdu0w4u4t9k0q0m7o0D0h0z1n0o0p0D0h0x1m7o0D6x1m7o2B0D2k9l0t48A0x6C0G0F0H0I0m0k9t4s08x6G6F0G0H0,be,0A3w0u0s4t0l9k0q0,0o7m0q0k9l0t4s08A0x0,0v0,0r0,bb,0B0,0n0,u0w3,0j0","nKaob#p1D1z1i681C1G972A3r1t71r1t1j1k1q1m1p852x1A1v71r1t1,1o1n1m1q1k1j1l1t1r1s1u1w1v1,be,4A3r1l81C593t60A4A3r3r1t1l1j1i60,1v71s1,1x1,1G1C91v1w,1h1D1p,1w1u,0A4B,1B4A","pba0ep20e,58x96r752C8B9x26t42A8v93r2t7j2i48w9u2r2t2j2k2q2mb,o2n2m2q2k2j7t2r2s2u2w2v,be,w2u2s2,2h2D2p21,12A2x2B,A2v23,2l2,de,bd","hdah2f2f2z2z2g2g2h2h2m5n1q0l3n0f6f2j5l0t1m1l1z6i5h4m1m0D0p0z6D5h0p4n0q1l0g6pbmD0i4g6n5m3t3m0,be,0k0,dg,0j1,0o0,bd,de","fa07f0b7hgp2hgq2igr3gpigq316p6phaq8h085hb549090D0a0fgbg0D0a0f0g0D0a0f0g0D0a0f0g0,ab,gp6p6p,cgbzgbfgphgqcgbzgbfgp,agbfgbggpigqagbfgbg,09090,p0g0z0fhbp0g0z0f,fgqbgbggbcg,0g0cgbf0b0g0cgb,a0g0c0h0a0g0c0,o0f0i0z","edaa3c1e51e6e51K6K51J6J5221,48aj,ab,1d17c07a4ji1f1a1p1D1h,adf1h1,1da8a,dbc3D,dba3c1,f1i1,j7a1d","gaaD0h0z19q0n0o1j4o2n1m5p1q6n1k49n5p1k7n1t4q6n1j0k0m1k7m1lebl3m7k1m0k0j1n6q1t3n7k1p5n8k3n6q1p5m1n2o1j3o0n0q8z0h0D1,ab,0g0,0p0,asg0,ebgas,0o0,0m0,0q0,1D2o1,o2D1","lcag40k1m0k0j1n46B2x2t5n0q0k7n1D3Aajs2w2v2k5n47m1n3lajr2A2w2j5o0n0q1D3z0h0D6r2w2,cj,0g0,ab,0p0o1,0m0q,cbg0,1Aaju2,1p0o0","saa20s02110,ab,0m3f0q0k3l0j5k0j3r0l0v3r4l3o0u0t3q4t3w0s,w3t4q3t0u0o3l4r3v0l0r3j0k5j0l3k0q0f3m,0h0,0o0,0f3f0","pfaa0i1h0n0c1p0a1i0p0g0c1,fg,0f0","daaN0M1e0a0O1d0N1M0y0P0O1,ag,0J0","goacoyaoyboy","0a0zhbun2b0zfbwp2sM1b1c10db1f1qbmp2bf1ipd0gh1c1hbdobb,ea,dd,bb0","yba0p2q8l3q6574k2m1In63s2w8A52,4n2p1I,8yb,bj,1bKbmK70,f2q1Gy2,1bPbmP,2k8r,2ybg,be","8a0620s24kbjlbb59A2D37pbbh3i3hbb71e62n37obbq3p3iaj1e69,41e,kbjm9l95b,98e,bb8b,8j78s8jiaj,t9iaeu9w,s20A,iab,da,be","2a12m1dad2j12m0y3g3zabfab2j4bf3gabdab,d32jd32j,0y32m4b,Oa,aj,02bya","vbasbzrbzwbz0ev1ubbsbJsbjrbuubbwaJ0e,vbw22u1w1ub,be,s1r1","sba563ubw573sbw8p469hddubd8n479qdd,r2k1n1hbbhbb,be,1j1,1fbbfbb,ddsbdu,0sbwu,2t1n,1q2o,0Ddd,1odm","ilai0m1j0n1n0h1h0z1z0o1o0j1j0p1z0q1q0t1s2k1k0m1m0t1t2l1D0,cm,lj,0r1r0","lbam032j0l232j48230p2m231j46p2m1j0l7s5v0A0v5s7s5v0A0v0B0C0B0A0v5s5v0B0C0F0C0B0v5s0l1l0j2m1l0j630h2m0p82l69p2m030h2382p69m41381l09m030h0z0f0c0a0b0a0f0z0h0D0p81n0j2l2r0p0j0p1p80D231j79n0382m2p099r0v5A5s0r419m6p819m1m0p2p2D80D80h1h1z0j0z0j6m0D0p0h2m1j0l7s7s0r46p0h0p0h0D81n440r1s0l79r5v0,be,0k0,0n0,p0D,0l0j,0w0,1m2,0r0,0m,j1","raal0m1v0n279s2p39r4C0v0k187D25252D2h68n050f0D2D6n6a6D4D050h0m1m0p2m3m08s3w3v2r0w0B1p1v2B0n0r47F28v17r0D2v0r09v19D0r4A3m0w3B0s1w3v47C3s48w0k17r1r0,ab,0j0,0k0,0l0,0m0,h0p,0z0,s0,p0,n1","Daa1D43D41sajr2j0k0v0w2l0j0D03jajk0l0j2v0w0A0v0B0C0,ab,3m43h4maj,0s0r0,paj,au","psanoLqoymoyDfy","oraq0m0j0k0m0p0D0,rz","gajf2Dax32paxg01blHDam3ab1alHpam,adfab,dlHhamz0,abhaxz0,gadp","Daa3930575167624a47,75757,76767,a4a4a,8D98D,bp7z7m7p7p7z7m7p,i7c7p7i7i7c7p7i,n7h7k7n7n7h7k7n,ab,f7n9D7f7n7,7D7","eaae4M7M4K7K4P7Pa07e2y4y10PaeP2K4K10,be,4mbb8n0p3k0q0j0m08l0k0r0t0s0l0u0j0s0t5s0v5A0B,4bbsa3D0p6D0f6g0f0i0a3p68D08n0,0h0,ab,0w0u0,0i3,aJ,o0","aad1a81Dacl75A0x6H4D8r2H0F6w2Q0S0Q0H0F0G0D0l72x0G0C4A5C6D72v0s70t2,ab,p0n0j3w0A0a8n0j73x0C0,5B0,0j8r0,2F0I0,0v0,0B0,0r,aH","eaa534z3za04D3D3pebeas53m21n2z3zd0m21k2h3h3mep,jead53,f3fa0,cjycj,aj,yad1yad,f3e","bba1bbQ19f0a09z0f0bbQ4w6r0bbc4u0r0t7f0a8x0B7z0f8B0C0,be,f0D0p0n0m0k0j0,k0m0n0p0D0,050,1r6A0v0w6r0v0,r6w0v,0s0,0jbc2,350A0,jbQ2","7a7s1n6n3m6m2n6n2m6m3l6j3j6k2l6j2k6mab,hab4b4b,7b5b5b,ab04b,ab15b,hasha,7s7,aj,fa","frah5m5n5p5DAzkawl3j3q02321q1k3,32323,43q43,i3o3n3m,ab,3p3n3m,rz","kaa9k5j0q464q0t49qajk0q4j060j0l0t7w5v0u383u0x7uajw0u3v080v0A0x0,ab,j0l0j4kaj,v0A0v3waj,0w0,0k0,as,k5q41q,3w0w52,w5u32u,k0k51","saak1l1s1u1w4v1A7w7k4l1q5l0bn1q1p1m53q5q1n4m1n5o0b,1k43kask2p1m1h16naHm2p1h46hasha,ab,1n1h1,k4j1l1j5,aj,1k1,h4n1m2,1v1s1","hCa1bh8102b234bhcsDcjncjD6p9a6D9D6p6g6D6z6n6p6m6,b2b2b,58h85C,k7h7j7D7k7h7l7jD,b4b4b,D7p7b7h7a7D7b7hD,b8D8a8h8b8p8D,Ej,Db,Cb,6b6h6","aCa38304j415j522j,j4j4j,j5j5j,6H6H,7C8DC,b9h9b9hH,fCjnCjfCjnC,jc9p9c9p,DC8DC8D,jaCj,Hj","afaa1z0g0c1h0p0n0D0h0,fg,0f0f0h0","Dfah1p1hfzD1n1qfzn1p1oagn0n0q0jabkfbq1j1,abmab,fg","zJap1f2D1g0n1z2p1i2o1n0m1,2h1D2,aJ,Jb","fJag2h1D0D1p0p1o2D1h2n1o2,2f1g2,Jb,aJ","fdaD1p1o3n1m1f1o1m1j3q1l1fcd0jf20j,D2p2o4n2m2f2o2m2j4q2lc,dd,cj,1f1p1,2f2p2","hba0eh10e,n7i1D1n1j1t52j3x18B4v1C1B4j1A1v1u9l1j7n1n7j1l9u1v1A1j38v38B1x4j261t1j1n1m1q7t1rb,be,5161,1l1r9w1v1,1v1w9r1l1,1u1w1r1t1j7m1n,n1m7j1t1r1w1u,1k1,B1C1,1s1","ldaj0s1t1u3wabsdbt0t3rabtdbl0u2r2w3vabudbr0r3sab,dd,dwr0,dws0,an","ndajdglazkabpfcnfgkfgrfglagjadkadrrglfzkfznfg","laa0bl21l2laT1j2kdbl3s3r3law0b,1k2mdfk3j3wads2r2ta,j2k2mad,ab,dd","DfaD1p0m0m0D0D0h0h1p0k0k0l0l0,fg,0p0","pcuo0h0D0m0p0q0m0,cz","raa081b825j4s4w4v4A4wcb7u97rdjt6l6j6s6r6t6l6,1b81b,2482a,t4l4j5j,t9l9j9,ab,48t4l4,dd,3s93,r4,cj","nadmadladk1kaX0jramt1s1j1r1kaL0j,mazk1n1j1o1la,aj","neaj0negj2L1g3032q1g,2qslfnqfg,sqfnlf,esr,jegn","nta010w,md1mdwqtdodwmtdnd,wntd","gdgD1idwp1fdwD1hdwn1g0icwqcjpdjf0hcwkcjndj,cwncjDdj,dd","6zr5u16Ur1A56UA5r1mad40m042306br1A1B1,ab,dd,030,z0f0c0a,n0p0D,1w1,Dd","irahryiryDry"]]}};class z{constructor(a,b,s){this.Ia=a,this.c=b,this.Na=s,this.La=-1,this.dir=-1,this.J=0,this.Ma=0,this.r=new A,this.Oa()}Oa(){this.id=this.Na.t()}Qa(a){if(a>0&&this.Ta){[this.Ta,this.Ea][this.Na.o([this.Ta.Ra,this.Ea.Ra])].Qa(a-1)}else{const a=new z(this.Ia,null,this.Na).Sa(this),b=new z(this.Ia,this.Na.h(this.Ia.Ua,[a.c]),this.Na),s=new z(this.Ia,this.Na.h(this.Ia.Ua,[a.c,b.c]),this.Na);this.Sa(s),this.Ta=a,this.Ea=b,this.Wa(a.La)}}_a(a,b,s){if(this.r.H(a,b)){if(this.Ta)return this.Ta._a(a,b,this)||this.Ea._a(a,b,this);this.Wa(s?s.La:null);const t=this.Na.h(this.Ia.Ua,this.c);return this.Ta=new z(this.Ia,this.c,this.Na),this.Ea=new z(this.Ia,t,this.Na),this.Ta.id=this.id,this.Oa(),!0}return!1}Wa(a){this.Ma=0,this.dir=this.Na.j()?0:1,this.La=-1==a?this.Na.j()?0:1:this.Na.j(this.Ia.V)?1-a:a,this.J=this.Na.i(this.Ia.J)}Va(a,b,s,t,n,r){if(this.r.set(b,s,t,n),this.Ta){const h=a/this.J;let i,l;this.Ma=e(1,j(0,this.Ma+h));let c=this.Ia.W(this.Ma);1==this.dir?(i=this.Ta,l=this.Ea,c=1-c):(i=this.Ea,l=this.Ta),0==this.La?(i.Va(a,b,s,t*c,n,r),l.Va(a,b+t*c,s,t*(1-c),n,r)):(i.Va(a,b,s,t,n*c,r),l.Va(a,b,s+n*c,t,n*(1-c),r)),(this.Ta.r.a<36||this.Ta.r.w<1||this.Ta.r.F<1||a>0&&this.Ma>=1||a<0&&this.Ma<=0)&&this.Sa(a>0?this.Ea:this.Ta)}else r&&(S.fillStyle=S.strokeStyle="#"+this.c,S.strokeRect(b,s,t,n),S.fillRect(b,s,t,n))}Sa(a){return this.La=a.La,this.dir=a.dir,this.J=a.J,this.Ma=a.Ma,this.r=a.r,this.Ta=a.Ta,this.Ea=a.Ea,this.c=a.c,this.id=a.id,this}get Xa(){return this.Ta?this.Ta.Xa.concat(this.Ea.Xa):[this]}get Ra(){return this.Ta?1+j(this.Ta.Ra,this.Ea.Ra):1}}class y{constructor(a,b){this.Ia=a,this.Na=b,this.Ya=1,this.Za={},this.$a=g(a.J)/a.ab}bb({note:a,J:b}){if(Z.hidden)return;const s=this.Ia.fa;for(const a in this.Za)if(this.Za[a].sb){const b=this.tb.Xa.find((({id:b})=>b==a));b&&(b.c=this.Za[a].c),delete this.Za[a]}const t=M(b),n=N.Frequency(a);let r;for(r of s.ma)if(N.Frequency(r.wa)>=n)break;const h=this.tb.Xa;let i=h.filter((a=>!this.Za[a.id]));i.length||(i=h);let l,d=r.pa[0]*this.pa,f=r.pa[1]*this.pa;do{l=i.filter((a=>a.r.a>=d&&a.r.a<=f)),d*=.7,f/=.7}while(!l.length);const o=this.Na.h(l);this.Za[o.id]||(this.Za[o.id]={c:o.c}),o.c=this.Ia.ha[this.Ia.eb][r.ka];const m=j(s.J.min,e(s.J.max,t*s.J.oa)),w=o.id;c((a=>{this.Za[w].sb=!0}),m);const p=this.Ia.ua,k=j(p.Aa.min,e(s.J.max,b*p.Aa.oa));this.jb+=k*this.Ya*this.$a,this.nb=this.rb}hb(a,b,s,t){this.pa=s*t,this.rect=new A(a,b,s,t)}ib(){this.tb=new z(this.Ia,this.Na.h(this.Ia.Ua),this.Na),this.rb=0,this.lb=Date.now(),this.ua=this.jb=this.Ia.ua.Da,this.cb();const a=this.Ia.J[1];for(;this.rb<a;)this.Va(50/3,!0);this.Ia.I=20/this.tb.Ra}Va(a,b){this.rb+=a,this.rb>this.fb&&(this.ob(),this.cb(e(this.rb-this.fb,50/3)));const s=this.Ia.ua;this.jb=e(s.max,j(this.jb-s.ga,s.Da));const t=this.jb-this.ua;t>.001?this.ua+=s.va:t<-.001&&(this.ua-=s.ga);const n=a*this.ua*this.Ia.I,{x:r,y:h,w:i,F:l}=this.rect;return this.tb.Va(n,r,h,i,l,!b),!b}cb(a=0){this.fb=this.rb+this.Na.i(this.Ia.P)/t(this.ua*this.Ia.I)-a}ob(){const{x:a,y:b,w:s,F:t}=this.rect;if(this.Na.j(this.Ia._)){const a=n((1-this.Ia._)/.2),b=this.Na.o(C.slice(0,a));this.tb.Qa(b)}else this.tb._a(a+this.Na.t()*s,b+this.Na.t()*t,null)}}class x{constructor(b,s,t){this.Ia=b,this.Na=t,this.Ia.ab=e(...h(this.Ia.J).map((b=>a(b)))),this.ib(s)}ib(a){const b=w(a,this.Ia.N),s=this.Ia.L,j=this.Na,r=j.l(s.M),h=j.j(),i=j.j();this.mb=r;const l=j.j(s.T),c=j.j(s.R),d=a=>{a.eb=j.l(a.X);const b=a.ha[a.eb];if(b.ca){const s=j.l(b.ca);a.Ua=j.m(b.ia.slice()).slice(0,s)}else a.Ua=b.ia;const s=j.l(a.P,!0),t=j.l(a.S,!0);a.P=[1-t,1+t].map((a=>n(s*a)));const e=j.l(a.J,!0),r=j.l(a.U,!0);a.J=[1-r,1+r].map((a=>n(e*a))),a._=j.l(a._,!0),a.V=j.l(a.V,!0),a.W=k(a.W)},f=a=>{const s=[];let e,n,r=null,h=null;for(n=0;n<15;n++){const s=[],j=p(this.Ia);for(let b=0;b<a;b++){const a=l?j:p(this.Ia);a.wb||(d(a),a.wb=!0),c&&b>0&&(a.eb=s[0].eb,a.Ua=s[0].Ua),s.push(a)}e=m(s),(null==r||t(e-b)<t(h-b))&&(r=s,h=e)}for(let b=0;b<a;b++){const a=new y(r[b],j);s.push(a)}return s},o=(a,b)=>{const s=f(a.length);i&&a.forEach((a=>{a.y=1-a.y-a.F})),h&&a.forEach((a=>{a.set(a.y,a.x,a.F,a.w)})),j.m(a),j.m(b),this.L=s.map(((s,t)=>(s.Ya=1/b[t].length,{_:s,rect:a[t],pb:b[t]})))},u=s.O;switch(r){case"1":o([new A(0,0,1,1)],[[0,1,2]]);break;case"2":{const[,a]=j.p(2,u),b=[new A(0,0,a,1),new A(a,0,1-a,1)],s=j.m([0,1,2]);o(b,[s.slice(0,1),s.slice(1)]);break}case"3p":{const[,a,b]=j.p(3,u);o([new A(0,0,a,1),new A(a,0,b-a,1),new A(b,0,1-b,1)],[[0],[1],[2]]);break}case"3T":{const[,a]=j.p(2,u);let[,b]=j.p(2,u);b=e(b,1-b);o([new A(0,0,1,b),new A(0,b,a,1-b),new A(a,b,1-a,1-b)],[[0],[1],[2]]);break}}}size(a,b){this.L.forEach((({_:s,rect:t})=>{s.hb(a*t.x,b*t.y,a*t.w,b*t.F),this.kb||s.ib()})),this.kb=!0}Va(a){this.L.forEach((({_:b})=>{b.Va(a)}))}bb(a){c((b=>{this.L.find((({pb:b})=>b.includes(a.channel)))._.bb(a)}),this.Ia.da+1e3*N.context.lookAhead)}}const J=tokenData.hash,K=new d(J),P=new d(J),F=o(q.qa.data);q.qa.bpm=K.l(q.qa.Ca,!0),q.qa.g=F.map((a=>K.h(a)));const H=q.qa.g.reduce(((a,{K:b})=>a+b.length),0),G=H*q.qa.bpm/1e3,I=new x(q.G,G,P),N=Tone,L=N.Transport,M=a=>a/(L.PPQ*L.bpm.value/6e4);class O{constructor(a,b){this.ub=a,this.Na=b,this.Db=this.vb(a.Ja),this.gb=this.Db.map((a=>({nb:-1,Ab:0}))),this.qb(this.Db),L.bpm.value=a.bpm,this.Cb=a.g,this.Bb=this.zb=2*a.bpm,this.yb=b.i(a.Ba),this.xb=b.i(a.za),this.Jb=b.i(a.ya),this.Kb=b.i(a.xa)}Pb(){c((a=>{L.stop(),this.gb.forEach((a=>{a.part&&(a.part.dispose(),a.part=null),a.Fb.dispose(),a.Fb=null}))}),500),c((a=>{this.qb(this.Db)}),3e3),c((a=>{L.start(),this.Hb()}),6e3)}start(){this.Gb=0,this.Hb(),N.start(),L.start()}Ib(){N.Destination.mute=!N.Destination.mute}Hb(){if(this.Nb++,this.Bb<=0&&this.gb.every((a=>a.Ab<=1)))return this.Bb=this.zb,void this.Pb();const a=this.ub.data.Ga,s=b.ceil(L.ticks/a)*a;this.Lb().forEach(((a,b)=>{if(a){const t=this.gb[b];t.part&&t.part.dispose(),t.part=new Tone.Part(((a,s)=>{a<=t.nb||(t.nb=a,t.Fb.triggerAttackRelease(s.note,s.J+"i",a,s.A),s.channel=b,this.emit("note",s))}),a.map((({name:a,J:b,B:s,A:t})=>({note:a,J:b,time:s+"i",A:t})))).start(s+"i")}}));const t=s+a-L.PPQ/2;L.scheduleOnce((a=>{this.Hb()}),t+"i"),this.Bb--}get Mb(){return this.Cb.reduce(((a,{K:b})=>a+b.length),0)}Lb(){const a=this.gb.filter((a=>a.Ab<=1));let b=null;a.length==this.gb.length&&(b=this.Na.h(a));return this.gb.map(((a,s)=>(a.Ab--,a.Ab<=0?this.Ob(s,a==b):null)))}Ob(a,b){const s=this.gb[a],t=this.Na;let e=1,j=null,n=[];if(b||t.j(1-this.xb)){for(j=this.Cb[a],t.j(this.yb)&&(j=t.h(this.Cb,[j])),n=j.K,s.rev=t.j(this.Jb),s.rev&&(n=T(j.id,n,this.ub.data.Ga));t.j(this.Kb)&&e<4;)e++;e>1&&(n=Q(n,e))}return s.Ab=e,n}vb(a){const b=b=>{for(const[a,s]of i(b))if(s.constructor==Object)for(const[t,e]of i(s))Array.isArray(e)&&("number"==typeof e[0]?b[a][t]=this.Na.i(e,k(e[2])):b[a][t]=this.Na.h(e));for(const[s,t]of i(a.Fa))for(const[a,e]of i(t))b[s][a]=e(b,this.Na);return b};return a.Ha.map(((s,t)=>b(l(s,p(a.Ka)))))}qb(a){return a.forEach(((a,b)=>{const s=new N.MonoSynth(a),t={v:N.Vibrato,f:N.FeedbackDelay}[a.effect.Pa];s.effect=new t(a.effect),s.envelope.chain(s.effect,s.output),this.gb[b].Fb=s.toDestination()}))}}function Q(a,b){return a.map((a=>{const s=l({},a);return s.B*=b,s}))}function T(a,b,s){const t=s;return b.filter(((a,b)=>(a.B,a.B<=t))).map((a=>{const b=l({},a);return b.B=t-a.B,b})).reverse()}N.Emitter.mixin(O);const E=a=>{const b=innerWidth,t=innerHeight,e=devicePixelRatio,j=null==U;b>0&&(S.scale(e,e),U=R.width=s(b*e),W=R.height=s(t*e),R.style.width=b+"px",R.style.height=t+"px",I.size(U,W),j&&aa())};let R,S,U,W,_,X,Y=window,Z=document,$=0;Y.onload=a=>{R=Z.querySelector("canvas"),S=R.getContext("2d"),Y.onresize=a=>{null!=X&&clearTimeout(X),X=c(E,20)},_=new O(q.qa,K),_.on("note",(a=>{I.bb(a)})),E();let b=0;Y.addEventListener(void 0!==Y.ontouchend?"touchend":"click",(a=>{0==b?_.start():_.Ib(),b++}))};const aa=a=>{let b=Date.now(),s=e(34,b-$);$=b,I.Va(s),requestAnimationFrame(aa)};