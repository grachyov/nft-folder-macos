const _0x887e8a=_0x111b;(function($,x){let e=_0x111b,a=$();for(;;)try{let o=-parseInt(e(287))/1+-parseInt(e(309))/2+parseInt(e(168))/3*(parseInt(e(310))/4)+-parseInt(e(251))/5*(-parseInt(e(220))/6)+-parseInt(e(197))/7+-parseInt(e(312))/8*(-parseInt(e(325))/9)+-parseInt(e(333))/10;if(866592===o)break;a.push(a.shift())}catch(r){a.push(a.shift())}})(_0x5f48,866592),THREE[_0x887e8a(300)]=function($,x,e){let a=_0x887e8a;this[a(181)]=[],this[a(246)]=0;var o=new THREE[a(262)],r=new THREE[a(245)];r.position.z=1;var t={passThruTexture:{value:null}},n=d(a(183),t),c=new THREE[a(285)](new THREE[a(177)](2,2),n);function l(e){let o=a;e.defines[o(324)]=o(271)+$[o(192)](1)+", "+x[o(192)](1)+" )"}function d($,x){x=x||{};var e=new THREE[a(344)]({uniforms:x,vertexShader:"void main()	{\n\n	gl_Position = vec4( position, 1.0 );\n\n}\n",fragmentShader:$});return l(e),e}o[a(261)](c),this[a(179)]=function($,x,e){let o=a;var r={name:$,initialValueTexture:e,material:this[o(297)](x),dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:THREE[o(206)],magFilter:THREE[o(206)]};return this[o(181)][o(301)](r),r},this.setVariableDependencies=function($,x){let e=a;$[e(352)]=x},this[a(274)]=function(){let o=a;if(!e[o(233)][o(343)](o(336))&&!e.capabilities[o(348)])return o(318);if(0===e.capabilities[o(341)])return o(288);for(var r=0;r<this[o(181)][o(166)];r++){var t=this.variables[r];t[o(277)][0]=this[o(342)]($,x,t[o(191)],t[o(229)],t[o(205)],t.magFilter),t[o(277)][1]=this[o(342)]($,x,t[o(191)],t[o(229)],t[o(205)],t[o(280)]),this[o(275)](t.initialValueTexture,t[o(277)][0]),this[o(275)](t[o(260)],t[o(277)][1]);var n=t[o(326)],c=n[o(185)];if(null!==t[o(352)])for(var l=0;l<t[o(352)].length;l++){var d=t[o(352)][l];if(d[o(316)]!==t.name){for(var s=!1,f=0;f<this[o(181)].length;f++)if(d[o(316)]===this[o(181)][f].name){s=!0;break}if(!s)return"Variable dependency not found. Variable="+t.name+o(236)+d[o(316)]}c[d.name]={value:null},n.fragmentShader="\nuniform sampler2D "+d[o(316)]+";\n"+n[o(331)]}}return this[o(246)]=0,null},this[a(167)]=function(){let $=a;for(var x=this.currentTextureIndex,e=0===this.currentTextureIndex?1:0,o=0,r=this[$(181)][$(166)];o<r;o++){var t=this[$(181)][o];if(null!==t.dependencies)for(var n=t[$(326)][$(185)],c=0,l=t.dependencies[$(166)];c<l;c++){var d=t[$(352)][c];n[d[$(316)]][$(294)]=d[$(277)][x][$(228)]}this[$(171)](t.material,t[$(277)][e])}this[$(246)]=e},this.getCurrentRenderTarget=function($){let x=a;return $[x(277)][this[x(246)]]},this.getAlternateRenderTarget=function($){return $[a(277)][0===this.currentTextureIndex?1:0]},this[a(176)]=l,this[a(297)]=d,this[a(342)]=function(e,o,r,t,n,c){let l=a;return e=e||$,o=o||x,r=r||THREE.ClampToEdgeWrapping,t=t||THREE[l(198)],n=n||THREE.NearestFilter,c=c||THREE.NearestFilter,new THREE[l(323)](e,o,{wrapS:r,wrapT:t,minFilter:n,magFilter:c,format:THREE.RGBAFormat,type:/(iPad|iPhone|iPod)/g[l(270)](navigator.userAgent)?THREE.HalfFloatType:THREE[l(328)],stencilBuffer:!1,depthBuffer:!1})},this.createTexture=function(){let e=a;var o=new Float32Array($*x*4);return new THREE[e(248)](o,$,x,THREE[e(320)],THREE.FloatType)},this[a(275)]=function($,x){let e=a;t[e(202)][e(294)]=$,this.doRenderTarget(n,x),t.passThruTexture[e(294)]=null},this.doRenderTarget=function($,x){let t=a;var l=e[t(250)]();c[t(326)]=$,e[t(289)](x),e[t(258)](o,r),c[t(326)]=n,e[t(289)](l)}};let render_vertex="\n  varying vec2 vUv;\n  void main() \n  {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }\n\n",render_fragment=_0x887e8a(351),reaction_diffusion_fragment=_0x887e8a(175);function isMobileDevice(){let $=_0x887e8a;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[$(270)](navigator[$(256)])}const width=window[_0x887e8a(296)],height=window[_0x887e8a(242)],actual_width=Math[_0x887e8a(212)](width*window[_0x887e8a(214)]),actual_height=Math[_0x887e8a(212)](height*window[_0x887e8a(214)]),mobileFactor=isMobileDevice()?2.5:1.75,simulation_width=Math[_0x887e8a(212)](actual_width/mobileFactor),simulation_height=Math[_0x887e8a(212)](actual_height/mobileFactor),aspectRatio=window[_0x887e8a(296)]/window[_0x887e8a(242)];class Random{constructor(){let $=_0x887e8a;this[$(227)]=!1;let x=function(x){let e=$,a=parseInt(x[e(172)](0,8),16),o=parseInt(x[e(172)](8,16),16),r=parseInt(x.substring(16,24),16),t=parseInt(x.substring(24,32),16);return function(){a|=0,o|=0,r|=0;let $=(a+o|0)+(t|=0)|0;return t=t+1|0,a=o^o>>>9,o=r+(r<<3)|0,r=(r=r<<21|r>>>11)+$|0,($>>>0)/4294967296}};this[$(226)]=new x(tokenData[$(293)].substring(2,34)),this.prngB=new x(tokenData[$(293)][$(172)](34,66));for(let e=0;e<1e6;e+=2)this.prngA(),this.prngB()}[_0x887e8a(308)](){let $=_0x887e8a;return this[$(227)]=!this[$(227)],this.useA?this[$(226)]():this.prngB()}[_0x887e8a(303)]($,x){return $+(x-$)*this[_0x887e8a(308)]()}random_int($,x){return Math[_0x887e8a(290)](this.random_num($,x+1))}[_0x887e8a(252)]($){return this.random_dec()<$}[_0x887e8a(329)]($){return $[this.random_int(0,$.length-1)]}}class SimplexNoise{constructor($){let x=_0x887e8a;this[x(235)]=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(256*$.random_dec());this[x(322)]=Array(512);for(let a=0;a<512;a++)this[x(322)][a]=this.p[255&a]}[_0x887e8a(278)]($,x,e,a){return $[0]*x+$[1]*e+$[2]*a}[_0x887e8a(215)]($,x,e){let a=_0x887e8a,o=1/6,r,t,n,c,l=($+x+e)*(1/3),d=Math[a(290)]($+l),s=Math[a(290)](x+l),f=Math.floor(e+l),u=(d+s+f)*o,_=$-(d-u),m=x-(s-u),g=e-(f-u),v,h,b,p,C,T;_>=m?m>=g?(v=1,h=0,b=0,p=1,C=1,T=0):_>=g?(v=1,h=0,b=0,p=1,C=0,T=1):(v=0,h=0,b=1,p=1,C=0,T=1):m<g?(v=0,h=0,b=1,p=0,C=1,T=1):_<g?(v=0,h=1,b=0,p=0,C=1,T=1):(v=0,h=1,b=0,p=1,C=1,T=0);let F=_-v+o,w=m-h+o,y=g-b+o,S=_-p+2*o,k=m-C+2*o,D=g-T+2*o,P=_-1+3*o,A=m-1+3*o,E=g-1+3*o,B=255&d,V=255&s,z=255&f,W=this[a(322)][B+this[a(322)][V+this[a(322)][z]]]%12,M=this[a(322)][B+v+this[a(322)][V+h+this[a(322)][z+b]]]%12,K=this[a(322)][B+p+this[a(322)][V+C+this[a(322)][z+T]]]%12,I=this[a(322)][B+1+this.perm[V+1+this.perm[z+1]]]%12,U=.6-_*_-m*m-g*g;U<0?r=0:(U*=U,r=U*U*this[a(278)](this.grad3[W],_,m,g));let G=.6-F*F-w*w-y*y;G<0?t=0:(G*=G,t=G*G*this[a(278)](this[a(235)][M],F,w,y));let H=.6-S*S-k*k-D*D;H<0?n=0:(H*=H,n=H*H*this[a(278)](this[a(235)][K],S,k,D));let N=.6-P*P-A*A-E*E;return N<0?c=0:(N*=N,c=N*N*this[a(278)](this[a(235)][I],P,A,E)),32*(r+t+n+c)}}let R=new Random;function getRandomArbitrary($,x){return R[_0x887e8a(308)]()*(x-$)+$}let diffScaleArray=[.25,.375,.5],diffScale=selectFromArray(diffScaleArray),diffScaleVar=selectFromArray([diffScale-.125,diffScale-.125]),diffScaleArrayWide=[.5,.625,.75,.875,1],diffScaleWide=selectFromArray(diffScaleArrayWide),diffScaleVarWide=selectFromArray([0,diffScale-.125]),feedVar=getRandomArbitrary(0,.01),killVar=getRandomArbitrary(0,.01),randomRect,randomCirc;function selectFromArray($){let x=_0x887e8a;return $[Math.floor(R[x(308)]()*$[x(166)])]}function selectNumberFromArray($){let x=_0x887e8a;return Math[x(290)](R.random_dec()*$[x(166)])}function getRandomBool($){return R[_0x887e8a(308)]()<$}function hexToRgb($){let x=parseInt($[_0x887e8a(345)](1),16),e=parseInt(x>>16&255),a=parseInt(x>>8&255),o=parseInt(255&x);return[e,a,o]}function getRandomBoolean(){return R.random_dec()>=.5}let palettes={Candy:{background:_0x887e8a(178),accent:"#E23DB3",substance:_0x887e8a(209),c4:_0x887e8a(347),c5:_0x887e8a(234)},Color2:{background:_0x887e8a(162),accent:_0x887e8a(162),substance:"#98D82D",c4:_0x887e8a(237),c5:_0x887e8a(237)},Color3:{background:"#F17401",accent:_0x887e8a(315),substance:_0x887e8a(210),c4:_0x887e8a(210),c5:_0x887e8a(210)},Color4:{background:_0x887e8a(173),accent:"#FF3C75",substance:_0x887e8a(201),c4:_0x887e8a(201),c5:_0x887e8a(201)},Color5:{background:"#000000",accent:"#000000",substance:_0x887e8a(234),c4:_0x887e8a(234),c5:_0x887e8a(234)},Color6:{background:_0x887e8a(315),accent:_0x887e8a(315),substance:_0x887e8a(210),c4:_0x887e8a(210),c5:_0x887e8a(210)},Yayoi:{background:_0x887e8a(219),accent:_0x887e8a(219),substance:_0x887e8a(234),c4:_0x887e8a(234),c5:"#FFFFFF"},Gabee:{background:"#ffffff",accent:_0x887e8a(190),substance:_0x887e8a(286),c4:_0x887e8a(286),c5:"#ffffff"},CMKY:{background:_0x887e8a(196),accent:(getRandomBoolean(),_0x887e8a(244)),substance:_0x887e8a(224),c4:_0x887e8a(194),c5:"#ffffff"},RGB:{background:_0x887e8a(218),accent:(getRandomBoolean(),_0x887e8a(165)),substance:_0x887e8a(204),c4:_0x887e8a(231),c5:_0x887e8a(234)},"30Rack":{background:_0x887e8a(163),accent:getRandomBoolean()?_0x887e8a(163):_0x887e8a(218),substance:_0x887e8a(163),c4:_0x887e8a(330),c5:_0x887e8a(330)},Mohun:{background:_0x887e8a(263),accent:(getRandomBoolean(),_0x887e8a(339)),substance:_0x887e8a(334),c4:"#5BC2AC",c5:_0x887e8a(346)},Q:{background:_0x887e8a(196),accent:_0x887e8a(196),substance:_0x887e8a(213),c4:_0x887e8a(196),c5:_0x887e8a(196)},Skeleton:{background:_0x887e8a(218),accent:_0x887e8a(196),substance:_0x887e8a(218),c4:"#000000",c5:_0x887e8a(218)}};const defaultPallette={background:"#FF0000",accent:_0x887e8a(165),substance:_0x887e8a(231)},traitColorKeys=Object[_0x887e8a(232)](palettes),randomColorIndex=R.random_int(0,traitColorKeys.length-1),randomColorKey=traitColorKeys[randomColorIndex],randomColorTrait=palettes[randomColorKey],selectedColor={...defaultPallette,...randomColorTrait};console[_0x887e8a(193)](_0x887e8a(216),randomColorKey,"Colors:",selectedColor);let main_trait={Zebra:{diffusion_scale:diffScaleWide,diffusion_scale_variation:diffScaleVarWide,feed:.05,feed_variation:0,warped:getRandomBool(.2),kill:.061,kill_variation:0,feed_modifier:-.015,kill_modifier:-.001,anisotropy:selectFromArray([.25,.75]),environment_noise_scale:750,field:!0,substance_color:hexToRgb(selectedColor[_0x887e8a(305)]),middle_color:hexToRgb(selectedColor[_0x887e8a(311)]),background_color:hexToRgb(selectedColor[_0x887e8a(298)]),c4_color:hexToRgb(selectedColor.c4),c5_color:hexToRgb(selectedColor.c5),simfrRate:64},Fingerprint:{diffusion_scale:diffScale,diffusion_scale_variation:diffScaleVar,feed:.037,feed_variation:0,warped:getRandomBool(.2),kill:.06,feed_modifier:.009,kill_modifier:.003,kill_modifier:0,anisotropy:.5,environment_noise_scale:250,field:getRandomBool(.3),substance_color:hexToRgb(selectedColor.substance),middle_color:hexToRgb(selectedColor[_0x887e8a(311)]),background_color:hexToRgb(selectedColor.background),c4_color:hexToRgb(selectedColor.c4),c5_color:hexToRgb(selectedColor.c5),simfrRate:64},"Dots and Dashes":{diffusion_scale:diffScale,diffusion_scale_variation:diffScaleVar,feed:.034,feed_variation:0,warped:getRandomBool(.2),kill:.0618,kill_variation:0,feed_modifier:-.004,kill_modifier:.0012,anisotropy:.5,environment_noise_scale:250,field:getRandomBool(.3),substance_color:hexToRgb(selectedColor.substance),middle_color:hexToRgb(selectedColor.accent),background_color:hexToRgb(selectedColor[_0x887e8a(298)]),c4_color:hexToRgb(selectedColor.c4),c5_color:hexToRgb(selectedColor.c5),simfrRate:64},Yayoi:{diffusion_scale:diffScaleWide,diffusion_scale_variation:diffScaleVarWide,feed:.03,feed_variation:0,warped:getRandomBool(.2),kill:.062,kill_variation:0,feed_modifier:0,kill_modifier:-.0065,anisotropy:.5,environment_noise_scale:250,field:getRandomBool(.3),substance_color:hexToRgb(selectedColor[_0x887e8a(305)]),middle_color:hexToRgb(selectedColor[_0x887e8a(311)]),background_color:hexToRgb(selectedColor[_0x887e8a(298)]),c4_color:hexToRgb(selectedColor.c4),c5_color:hexToRgb(selectedColor.c5),simfrRate:64},Spillage:{diffusion_scale:diffScale,diffusion_scale_variation:diffScaleVar,feed:.035,feed_variation:.006,kill:.06,kill_variation:.006,feed_modifier:-.005,kill_modifier:-.0035,anisotropy:.5,environment_noise_scale:250,field:getRandomBool(.3),substance_color:hexToRgb(selectedColor[_0x887e8a(305)]),middle_color:hexToRgb(selectedColor.accent),background_color:hexToRgb(selectedColor[_0x887e8a(298)]),c4_color:hexToRgb(selectedColor.c4),c5_color:hexToRgb(selectedColor.c5),simfrRate:64},Coral:{diffusion_scale:diffScale,diffusion_scale_variation:diffScaleVar,feed:.046,feed_variation:0,warped:getRandomBool(.2),kill:.063,kill_variation:0,feed_modifier:-.009,kill_modifier:-.003,anisotropy:.5,environment_noise_scale:250,field:getRandomBool(.3),substance_color:hexToRgb(selectedColor[_0x887e8a(305)]),middle_color:hexToRgb(selectedColor[_0x887e8a(311)]),background_color:hexToRgb(selectedColor[_0x887e8a(298)]),c4_color:hexToRgb(selectedColor.c4),c5_color:hexToRgb(selectedColor.c5),simfrRate:64},"Squiggle Maze":{diffusion_scale:diffScale,diffusion_scale_variation:diffScaleVar,feed:.03,feed_variation:0,warped:getRandomBool(.2),kill:.0565,kill_variation:0,feed_modifier:0,kill_modifier:.0065,anisotropy:.5,environment_noise_scale:250,field:getRandomBool(.3),substance_color:hexToRgb(selectedColor[_0x887e8a(305)]),middle_color:hexToRgb(selectedColor[_0x887e8a(311)]),background_color:hexToRgb(selectedColor[_0x887e8a(298)]),c4_color:hexToRgb(selectedColor.c4),c5_color:hexToRgb(selectedColor.c5),simfrRate:64}};const defaultSettings={anisotropy:.8,simfrRate:64,environment_noise_scale:250,substance_color:[0,0,0],middle_color:[0,255,255],background_color:[255,255,255],c4_color:[0,255,255],background_color:[255,255,255],feed_modifier:0,kill_modifier:0,specular_color:[0,0,0],field:!1,warped:!1,diffusion_scale:.625,diffusion_scale_variation:.375,feed:.042,feed_variation:.001,kill:.06,kill_variation:.001},traitKeys=Object[_0x887e8a(232)](main_trait),randomIndex=Math.floor(R.random_dec()*traitKeys[_0x887e8a(166)]),randomKey=traitKeys[randomIndex],randomTrait=main_trait[randomKey],settings={...defaultSettings,...randomTrait};console.log(_0x887e8a(238),randomKey,_0x887e8a(187),settings);const scene=new THREE[_0x887e8a(262)],camera=new THREE.Camera;camera.position.z=1;const renderer=new THREE.WebGLRenderer;renderer[_0x887e8a(273)](window[_0x887e8a(214)]),renderer.setSize(width,height),document[_0x887e8a(299)][_0x887e8a(169)](renderer[_0x887e8a(279)]);let rendererSize=new THREE[_0x887e8a(259)];renderer.getSize(rendererSize);const getRandomInt=($,x)=>Math[_0x887e8a(290)](R.random_dec()*($-x+1)+x),getRandomColor=()=>(16777215*R.random_dec()<<0)[_0x887e8a(276)](16).padStart(6,"0");let elapsedTime=0,frameCounter=0;const updateFrequency=1;function getRandomFloat($,x){return R.random_dec()*(x-$)+$}let isRect=R.random_choice([1,2,3,4]);switch(isRect){case 1:randomRect=new THREE.Vector4(.5*R.random_dec(),0,.2,1),randomCirc=new THREE[_0x887e8a(189)](0,0,0,0);break;case 2:randomRect=new THREE.Vector4(0,0,0,0),randomCirc=new THREE[_0x887e8a(189)](.5,.5,.4,.4);break;case 3:randomRect=new THREE[_0x887e8a(189)](0,0,0,0),randomCirc=new THREE[_0x887e8a(189)](0,0,0,0);break;case 4:randomRect=new THREE[_0x887e8a(189)](.5*R.random_dec(),0,.2,1),randomCirc=new THREE[_0x887e8a(189)](.5,.5,.4,.4);break;default:randomRect=new THREE[_0x887e8a(189)](.5*R.random_dec(),0,.2,1),randomCirc=new THREE.Vector4(0,0,0,0)}const borderSizes=[.01,.03],borderSize=R[_0x887e8a(329)](borderSizes);let borderProportion=borderSize,responsiveBorderSize=borderProportion*Math[_0x887e8a(349)](rendererSize.x,rendererSize.y),caEnabled=!!R.random_bool(.05);console[_0x887e8a(193)](_0x887e8a(225)+caEnabled);const ca_factor=!0===caEnabled?.8:0,caWidth=Math[_0x887e8a(290)](simulation_width/15),caHeight=Math[_0x887e8a(290)](simulation_height/15),caData=new Uint8Array(caWidth*caHeight*3);function _0x111b($,x){let e=_0x5f48();return(_0x111b=function($,x){return e[$-=161]})($,x)}for(let i=0;i<caData[_0x887e8a(166)];i+=3){let $=.8>R[_0x887e8a(308)]()?0:255;caData[i]=$,caData[i+1]=$,caData[i+2]=$}const caTexture=new THREE.DataTexture(caData,caWidth,caHeight,THREE[_0x887e8a(266)]);caTexture[_0x887e8a(280)]=THREE.NearestFilter,caTexture[_0x887e8a(205)]=THREE.NearestFilter,caTexture[_0x887e8a(191)]=THREE.ClampToEdgeWrapping,caTexture[_0x887e8a(229)]=THREE[_0x887e8a(198)],caTexture.needsUpdate=!0;const material=new THREE[_0x887e8a(344)]({vertexShader:render_vertex,fragmentShader:render_fragment,uniforms:{reaction_diffusion:{value:null},substance_color:{value:new THREE[_0x887e8a(254)]()[_0x887e8a(203)](settings[_0x887e8a(272)])[_0x887e8a(161)](255)},middle_color:{value:new THREE.Vector3()[_0x887e8a(203)](settings[_0x887e8a(338)])[_0x887e8a(161)](255)},background_color:{value:new THREE.Vector3()[_0x887e8a(203)](settings[_0x887e8a(302)])[_0x887e8a(161)](255)},c4_color:{value:new THREE[_0x887e8a(254)]()[_0x887e8a(203)](settings.c4_color)[_0x887e8a(161)](255)},c5_color:{value:new THREE[_0x887e8a(254)]()[_0x887e8a(203)](settings[_0x887e8a(307)])[_0x887e8a(161)](255)},time:{value:0},noise_texture:{value:null},isRect:{value:isRect},randomRect:{value:randomRect},randomCirc:{value:randomCirc},ca_state:{value:caTexture}},defines:{frag2sim:_0x887e8a(340)+simulation_width/actual_width+", "+simulation_height/actual_height+")",simulation_resolution:"vec2("+simulation_width+", "+simulation_height+")"}});scene[_0x887e8a(261)](new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),material));const gpu_compute=new THREE[_0x887e8a(300)](simulation_width,simulation_height,renderer),reaction_diffusion=gpu_compute[_0x887e8a(313)](),reaction_diffusion_variable=gpu_compute[_0x887e8a(179)]("reaction_diffusion",reaction_diffusion_fragment,reaction_diffusion);reaction_diffusion_variable[_0x887e8a(191)]=THREE[_0x887e8a(198)],reaction_diffusion_variable.wrapT=THREE[_0x887e8a(198)],gpu_compute[_0x887e8a(211)](reaction_diffusion_variable,[reaction_diffusion_variable]);const rdu=reaction_diffusion_variable.material.uniforms;rdu[_0x887e8a(230)]={value:new THREE.Vector2(-100,-100)};for(let i=0;i<10;i++)rdu[_0x887e8a(295)+i]={value:new THREE[_0x887e8a(259)](getRandomInt(50,simulation_width-50),getRandomInt(50,simulation_height-50))};function updateCA(){let $=_0x887e8a,x=new Uint8Array(caWidth*caHeight*3),e=[1],a=[2,3];for(let o=0;o<caHeight;o++)for(let r=0;r<caWidth;r++){let t=(o*caWidth+r)*3,n=0;for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){if(0===l&&0===c)continue;let d=(r+l+caWidth)%caWidth;255===caData[((o+c+caHeight)%caHeight*caWidth+d)*3]&&n++}let s=caData[t],f=n==e[0]||1==s&&a[$(353)](n)?1:0;f=255===s&&(2===n||3===n)?255:0===s&&3===n?255:0,x[t]=f,x[t+1]=f,x[t+2]=f}caData[$(249)](x),caTexture.needsUpdate=!0}rdu.mouse_down={value:!1},rdu[_0x887e8a(337)]={value:settings[_0x887e8a(337)]},rdu[_0x887e8a(317)]={value:settings.kill},rdu.diffusion_scale={value:settings.diffusion_scale},rdu.feed_variation={value:settings[_0x887e8a(241)]},rdu[_0x887e8a(350)]={value:settings.kill_variation},rdu.feed_modifier={value:settings[_0x887e8a(282)]},rdu.kill_modifier={value:settings[_0x887e8a(195)]},rdu[_0x887e8a(292)]={value:settings.diffusion_scale_variation},rdu[_0x887e8a(283)]={value:settings[_0x887e8a(283)]},rdu[_0x887e8a(164)]={value:!1},rdu[_0x887e8a(261)]={value:!1},rdu.field={value:settings.field},rdu[_0x887e8a(321)]={value:settings[_0x887e8a(321)]},rdu[_0x887e8a(174)]={value:ca_factor},rdu[_0x887e8a(284)]={value:caTexture},rdu[_0x887e8a(243)]={value:.6},rdu[_0x887e8a(217)]={value:responsiveBorderSize},rdu.randomRectPos={value:new THREE[_0x887e8a(259)](randomRect.x,randomRect.y)},rdu[_0x887e8a(264)]={value:new THREE[_0x887e8a(259)](randomRect.z,randomRect.w)},rdu.randomCircPos={value:new THREE[_0x887e8a(259)](randomCirc.x,randomCirc.y)},rdu.randomCircSize={value:new THREE[_0x887e8a(259)](randomCirc.z,randomCirc.w)};const caDuration=3e4,maxUpdateFrequency=10;let startTime=Date.now();function animate(){let $=_0x887e8a;if(requestAnimationFrame(animate),frameCounter++,caEnabled){let x=Date[$(335)]()-startTime;if(x<3e4){var e,a=0,o=3e4,r=1,t=10;let n=Math[$(290)]((e=x,r+(e-a)*(10-r)/(3e4-a)));frameCounter%n==0&&updateCA()}else caEnabled=!1}render()}function _0x5f48(){let $=["uniforms","save_image","Settings:","toDataURL","Vector4","#f5f5f0","wrapS","toFixed","log","#ffff00","kill_modifier","#ffffff","861357hvHjWA","ClampToEdgeWrapping","mouse_down","clientY","#FD97C4","passThruTexture","fromArray","#FF0000","minFilter","LinearFilter","forEach","onmouseleave","#FFC234","#EBFF32","setVariableDependencies","round","#e00000","devicePixelRatio","noise3d","palette:","borderSize","#000000","#D03A20","7048974PffXsp","touchstart","reaction_diffusion","click","#ff00ff","Aggressor: ","prngA","useA","texture","wrapT","mouse_pos","#0000FF","keys","extensions","#FFFFFF","grad3",", dependency=","#98D82D","Growth:","frame","prev_scale","feed_variation","innerHeight","caThreshold","#00ffff","Camera","currentTextureIndex","environment","DataTexture","set","getRenderTarget","5MUdLMR","random_bool","onmouseup","Vector3","href","userAgent","sqrt","render","Vector2","initialValueTexture","add","Scene","#FFFFF1","randomRectSize","resize","RGBFormat","touchend","time","download","test","vec2( ","substance_color","setPixelRatio","init","renderTexture","toString","renderTargets","dot","domElement","magFilter","touchcancel","feed_modifier","anisotropy","ca_state","Mesh","#f2f2f2","225841eSKEwX","No support for vertex shader textures.","setRenderTarget","floor","clientX","diffusion_scale_variation","hash","value","point_pos","innerWidth","createShaderMaterial","background","body","GPUComputationRenderer","push","background_color","random_num","save-link","substance","changedTouches","c5_color","random_dec","1021968ztitef","455892dEMzIN","accent","424LVnvvK","createTexture","touches","#F17401","name","kill","No OES_texture_float support for float textures.","environment_noise_scale","RGBAFormat","warped","perm","WebGLRenderTarget","resolution","274860HSTjyJ","material","type","FloatType","random_choice","#df2126","fragmentShader","info","11809540idlVZs","#AFCDF0","now","OES_texture_float","feed","middle_color","#C7AFF0","vec2(","maxVertexTextures","createRenderTarget","get","ShaderMaterial","slice","#DE87B7","#FFFF99","isWebGL2","min","kill_variation","\n\n  varying vec2 vUv;\n\n  uniform sampler2D reaction_diffusion;\n  uniform vec3 substance_color;\n  uniform vec3 background_color;\n  uniform vec3 middle_color;\n  uniform vec3 c4_color;\n  uniform vec3 c5_color;\n  uniform vec4 randomRect;\n  uniform vec3 circle;\n  uniform sampler2D noiseTexture;\n\n  void main() {\n    vec4 texColor = texture2D(reaction_diffusion, vUv);\n    float h = texColor.g;\n\n    vec3 colorA = background_color;\n    vec3 colorB = middle_color;\n    vec3 colorC = substance_color;\n    vec3 colorD = c4_color;\n    vec3 colorE = c5_color;\n\n    float baseEdge0 = 0.0;\n    float baseEdge1 = 0.075;\n    float baseEdge2 = 0.175;\n    float baseEdge3 = 0.275;\n    float baseEdge4 = 0.375;\n\n    float noiseValue = texture2D(noiseTexture, vUv).r;\n    float edgeVariation = noiseValue * 0.1;\n\n    float edge0 = baseEdge0 + edgeVariation;\n    float edge1 = baseEdge1 + edgeVariation;\n    float edge2 = baseEdge2 + edgeVariation;\n    float edge3 = baseEdge3 + edgeVariation;\n    float edge4 = baseEdge4 + edgeVariation;\n\n    vec3 finalColor;\n\n    if (h < edge1) {\n      float t = clamp((h - edge0) / (edge1 - edge0), 0.0, 1.0);\n      finalColor = mix(colorA, colorB, t);\n    } else if (h < edge2) {\n      float t = clamp((h - edge1) / (edge2 - edge1), 0.0, 1.0);\n      finalColor = mix(colorB, colorC, t);\n    } else if (h < edge3) {\n      float t = clamp((h - edge2) / (edge3 - edge2), 0.0, 1.0);\n      finalColor = mix(colorC, colorD, t);\n    } else if (h < edge4) {\n      float t = clamp((h - edge3) / (edge4 - edge3), 0.0, 1.0);\n      finalColor = mix(colorD, colorE, t);\n    } else {\n      finalColor = colorE;\n    }\n\n    gl_FragColor = vec4(finalColor, 1.0);\n  }\n\n","dependencies","includes","divideScalar","#AE2029","#b42024","reset","#00FF00","length","compute","3cywfoa","appendChild","touchmove","doRenderTarget","substring","#FF3C75","ca_factor","\n\n  uniform sampler2D environment;\n\n  uniform float feed;\n  uniform float kill;\n  uniform float diffusion_scale;\n\n  uniform float feed_variation;\n  uniform float kill_variation;\n  uniform bool isRect;\n  uniform float diffusion_scale_variation;\n\n  uniform float anisotropy;\n  uniform bool field;\n\n  uniform float feed_modifier;\n  uniform float kill_modifier;\n\n  uniform vec2 mouse_pos;\n  uniform vec2 point_pos0;\n  uniform vec2 point_pos1;\n  uniform vec2 point_pos2;\n  uniform vec2 point_pos3;\n  uniform vec2 point_pos4;\n  uniform vec2 point_pos5;\n  uniform vec2 point_pos6;\n  uniform vec2 point_pos7;\n  uniform vec2 point_pos8;\n  uniform vec2 point_pos9;\n  uniform vec2 point_posR;\n  uniform bool mouse_down;\n\n  uniform bool reset;\n  uniform bool add;\n\n  uniform vec4 randomRect;\n  uniform vec4 randomCirc;\n\n  uniform vec2 randomRectPos;\n  uniform vec2 randomRectSize;\n  uniform vec2 randomCircPos;\n  uniform vec2 randomCircSize;\n  uniform float borderSize;\n\n  uniform vec2 rect_top_left;\n  uniform vec2 rect_bottom_right;\n\n  uniform sampler2D ca_state;\n  uniform float caThreshold;\n  uniform float ca_factor;\n  \n\n  #define p2(v) v * v\n  #define PI 3.14159265358979323846\n\n \n  #define R 10.0\n  #define borderWidth 20.0\n  #define rectBorderWidth 2.0\n\n  #define s(x, y) texture2D(reaction_diffusion, (gl_FragCoord.xy + vec2(x, y)) / resolution).xy\n\n  vec2 anisotropicDiffusion(vec2 angles, float a1, vec2 center)\n    {\n      vec2\n      v00 = s(-1, 1), v10 = s(0, 1), v20 = s(1, 1),\n      v01 = s(-1, 0),                v21 = s(1, 0),\n      v02 = s(-1,-1), v12 = s(0,-1), v22 = s(1,-1);\n\n      vec2 cos_t = cos(angles);\n      vec2 sin_t = sin(angles);\n\n      vec2 cos2_t = p2(cos_t);\n      vec2 sin2_t = p2(sin_t);\n\n      float a2 = 1.0 - a1;\n\n      vec2 d = 4.0 * (a2 - a1) * p2(cos_t * sin_t);\n      vec2 h = 8.0 * (a1 * cos2_t + a2 * sin2_t);\n      vec2 v = 8.0 * (a2 * cos2_t + a1 * sin2_t);\n\n      return ((1.0 - d) * (v00 + v22) + (1.0 + d) * (v20 + v02) + h * (v01 + v21) + v * (v10 + v12) - 20.0 * center) / 6.0;\n    }\n\n  float random (vec2 st) {\n      return fract(sin(dot(st.xy,\n                          vec2(12.9898,78.233)))*\n          43758.5453123);\n  }\n  bool insideCircle(vec2 point, vec2 center, float radius) {\n  return distance(point, center) <= radius;\n  }\n\n\n  void main() {\n    vec4 env = texture2D(environment, (gl_FragCoord.xy / resolution).xy);\n    vec2 st = gl_FragCoord.xy/resolution;\n    vec3 ca_color = texture2D(ca_state, st).rgb;\n    float ca_intensity = dot(ca_color, vec3(0.299, 0.587, 0.114));\n       float caValue = texture2D(ca_state, (gl_FragCoord.xy / resolution)).r;\n\n\n    float rnd = random( st );\n    float pct = 0.0;\n\n    vec2 randomRectPosA = randomRectPos * resolution;\n    vec2 randomRectSizeA = randomRectSize * resolution;\n\n    vec2 randomCircPosA = randomCircPos * resolution;\n    vec2 randomCircSizeA = randomCircSize * resolution;\n\n    pct = distance(st,vec2(0.5));\n\n    float DS = diffusion_scale + env[2] * diffusion_scale_variation;\n    vec2 angles = (1.0 + vec2(env[3], field ? env[0] : env[3])) * PI;\n    float caInfluence = float(caValue > caThreshold);\n    float F = feed + env[0] * feed_variation;\n    float K = kill + env[1] * kill_variation;\n\n  \n    bool insideRectangle = (gl_FragCoord.x > randomRectPosA.x && gl_FragCoord.x < randomRectPosA.x + randomRectSizeA.x) &&\n                          (gl_FragCoord.y > randomRectPosA.y && gl_FragCoord.y < randomRectPosA.y + randomRectSizeA.y);\n\n    bool insideCircle = insideCircle(gl_FragCoord.xy, randomCircPosA, randomCircSizeA.x);                     \n\n    if (insideRectangle) {\n      K += 0.003;\n    }\n\n    if (insideCircle) {\n      K += 0.0025;\n    }\n\n    vec2 old = s(0, 0);\n\n    vec2 reaction = vec2(-1.0, 1.0) * old[0] * old[1] * old[1] * (1.0 + caInfluence * ca_factor);\n    vec2 dissipation = vec2(F * (1.0 - old[0]), -old[1] * (K + F));\n    vec2 diffusion = anisotropicDiffusion(angles, anisotropy, old) * DS * vec2(1.0, 0.5);\n    float dt = 1.0 / (4.0 * DS);\n    gl_FragColor.xy = old + (reaction + dissipation + diffusion) * dt;\n    float edgeDistX = min(gl_FragCoord.x, resolution.x - gl_FragCoord.x);\n    float edgeDistY = min(gl_FragCoord.y, resolution.y - gl_FragCoord.y);\n    float edgeDist = min(edgeDistX, edgeDistY);\n        if (edgeDist <= borderSize) {\n            gl_FragColor.x = 0.0;\n            gl_FragColor.y = 0.0;\n        }\n\n        if (mouse_down) {\n            gl_FragColor[1] += max(0.25 - old[1], 0.0) * max(R - distance(gl_FragCoord.xy, mouse_pos), 0.0) / R;\n        }\n\n        if (reset) {\n            gl_FragColor = vec4(0.0);\n        }\n\n        if(add)\n        {\n            vec2 pointPositions[10];\n            pointPositions[0] = point_pos1;\n            pointPositions[1] = point_pos2;\n            pointPositions[2] = point_pos3;\n            pointPositions[3] = point_pos4;\n            pointPositions[4] = point_pos5;\n            pointPositions[5] = point_pos6;\n            pointPositions[6] = point_pos7;\n            pointPositions[7] = point_pos8;\n            pointPositions[8] = point_pos9;\n            pointPositions[9] = point_pos0;\n\n            for (int i = 0; i < 10; i++) {\n                vec2 pointPos = pointPositions[i];\n                gl_FragColor[1] += max(0.25 - old[1], 0.0) * max(R - distance(gl_FragCoord.xy, pointPos), 0.0) / R;\n            }\n            gl_FragColor[1] += max(0.25 - old[1], 0.0) * max(R - distance(gl_FragCoord.xy, point_posR), 0.0) / R;\n\n        }\n    }\n\n","addResolutionDefine","PlaneBufferGeometry","#E23DB3","addVariable","u_time","variables","onmousedown","uniform sampler2D passThruTexture;\n\nvoid main() {\n\n	vec2 uv = gl_FragCoord.xy / resolution.xy;\n\n	gl_FragColor = texture2D( passThruTexture, uv );\n\n}\n","addEventListener"];return(_0x5f48=function(){return $})()}function render($){let x=_0x887e8a;if(simulateReactionDiffusion(settings.simfrRate),material[x(185)][x(222)][x(294)]=gpu_compute.getCurrentRenderTarget(reaction_diffusion_variable)[x(228)],elapsedTime+=.01,material[x(185)][x(268)].value=elapsedTime,rdu[x(180)]={value:.001*$},renderer[x(258)](scene,camera),!0===render[x(186)]){render.save_image=!1;let e=document.getElementById(x(304));e[x(269)]=render.savename,e[x(255)]=renderer.domElement[x(188)](),e[x(223)]()}renderer[x(332)][x(258)][x(239)]>=2e3&&renderer[x(332)][x(258)].frame<5e3?rdu[x(261)]={value:!0}:rdu.add={value:!1}}function simulateReactionDiffusion($){let x=_0x887e8a;for(let e=0;e<$;e++)gpu_compute[x(167)]()}function createEnvironment($=!0){let x=_0x887e8a;if(!$&&void 0!==createEnvironment.prev_scale&&createEnvironment[x(240)]===Settings[x(319)])return;createEnvironment[x(240)]=settings.environment_noise_scale;let e=new SimplexNoise(R),a=Array.from({length:4},()=>1e3*R.random_dec()),o=1/settings[x(319)],r={x:simulation_width/2,y:simulation_height/2},t=(r.x,r.y,new Float32Array(simulation_width*simulation_height*4));for(let n=0;n<simulation_height;n++)for(let c=0;c<simulation_width;c++)for(let l=0;l<4;l++)t[(n*simulation_width+c)*4+l]=e.noise3d((c+.5)*o,(n+.5)*(!0===settings[x(321)]?1:o),a[l]);rdu[x(247)]={value:new THREE.DataTexture(t,simulation_width,simulation_height,THREE[x(320)],THREE.FloatType)},rdu[x(247)][x(294)][x(280)]=THREE[x(206)],rdu[x(247)][x(294)][x(205)]=THREE[x(206)];let d=new THREE[x(248)](t,simulation_width,simulation_height,THREE[x(320)],THREE.FloatType);d.magFilter=THREE.LinearFilter,d[x(205)]=THREE[x(206)],material[x(185)].noise_texture[x(294)]=d}function updateMousePos($){let x=_0x887e8a,e=$[x(291)]*(simulation_width/width),a=simulation_height-$[x(200)]*(simulation_height/height);rdu[x(230)][x(294)][x(203)]([e,a])}function onMove($){let x=_0x887e8a;updateMousePos($),rdu[x(199)].value=mouse_down&&(brush_move=!0)}function onUp(){let $=_0x887e8a;mouse_down=!1,brush_move=!1,rdu[$(199)].value=!1}function onDown(){mouse_down=!0}function handleTouchEvent($,x){let e=_0x887e8a,a="touchend"===$[e(327)]||$[e(327)]===e(281)?$[e(306)]:$[e(314)];1===a[e(166)]&&($.preventDefault(),x(a[0]))}createEnvironment(),gpu_compute[_0x887e8a(274)](),animate(),renderer[_0x887e8a(279)][_0x887e8a(182)]=onDown,renderer[_0x887e8a(279)][_0x887e8a(253)]=renderer[_0x887e8a(279)][_0x887e8a(208)]=onUp,renderer[_0x887e8a(279)].onmousemove=onMove,[_0x887e8a(221),_0x887e8a(267),_0x887e8a(281),_0x887e8a(170)][_0x887e8a(207)]($=>{let x=_0x887e8a;renderer.domElement[x(184)]($,e=>{let a=x;$===a(221)?handleTouchEvent(e,onDown):$===a(170)?handleTouchEvent(e,onMove):handleTouchEvent(e,onUp)},!1)}),window[_0x887e8a(184)](_0x887e8a(265),function(){let $=_0x887e8a;renderer.getSize(rendererSize),responsiveBorderSize=borderProportion*Math.min(rendererSize.x,rendererSize.y),material.uniforms[$(217)][$(294)]=responsiveBorderSize},!1);