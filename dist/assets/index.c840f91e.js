import{OrbitControls as gl}from"https://cdn.jsdelivr.net/npm/three@0.132.0/examples/jsm/controls/OrbitControls.js";import{LineMaterial as _l}from"https://cdn.jsdelivr.net/npm/three@0.132.0/examples/jsm/lines/LineMaterial.js";import{LineGeometry as vl}from"https://cdn.jsdelivr.net/npm/three@0.132.0/examples/jsm/lines/LineGeometry.js";import{ConvexGeometry as Ro}from"https://cdn.jsdelivr.net/npm/three@0.132.0/examples/jsm/geometries/ConvexGeometry.js";import{Line2 as xl}from"https://cdn.jsdelivr.net/npm/three@0.132.0/examples/jsm/lines/Line2.js";import"https://cdn.jsdelivr.net/npm/three@0.132.0/examples/jsm/libs/dat.gui.module.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="144",yl=0,fs=1,Sl=2,Uo=1,Ml=2,Xi=3,Bn=0,Dt=1,Jt=2,Mn=0,yi=1,hs=2,ds=3,ps=4,bl=5,_i=100,wl=101,Tl=102,ms=103,gs=104,El=200,Al=201,Cl=202,Ll=203,Fo=204,Io=205,Dl=206,Pl=207,Rl=208,Ul=209,Fl=210,Il=0,Nl=1,Ol=2,Na=3,zl=4,Bl=5,kl=6,Gl=7,No=0,Vl=1,Wl=2,sn=0,Hl=1,Xl=2,ql=3,jl=4,Yl=5,Oo=300,Mi=301,bi=302,Oa=303,za=304,zr=306,Ba=1e3,Ht=1001,ka=1002,yt=1003,_s=1004,vs=1005,St=1006,Zl=1007,Br=1008,kn=1009,Jl=1010,Kl=1011,zo=1012,Ql=1013,Un=1014,Fn=1015,Zi=1016,$l=1017,ec=1018,Si=1020,tc=1021,nc=1022,Kt=1023,ic=1024,rc=1025,On=1026,wi=1027,ac=1028,sc=1029,oc=1030,lc=1031,cc=1033,ia=33776,ra=33777,aa=33778,sa=33779,xs=35840,ys=35841,Ss=35842,Ms=35843,uc=36196,bs=37492,ws=37496,Ts=37808,Es=37809,As=37810,Cs=37811,Ls=37812,Ds=37813,Ps=37814,Rs=37815,Us=37816,Fs=37817,Is=37818,Ns=37819,Os=37820,zs=37821,Bs=36492,Gn=3e3,$e=3001,fc=3200,Bo=3201,hc=0,dc=1,rn="srgb",In="srgb-linear",oa=7680,pc=519,ks=35044,Gs="300 es",Ga=1035;class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],la=Math.PI/180,Vs=180/Math.PI;function Ji(){const c=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dt[c&255]+dt[c>>8&255]+dt[c>>16&255]+dt[c>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[r&255]+dt[r>>8&255]+dt[r>>16&255]+dt[r>>24&255]).toLowerCase()}function At(c,e,t){return Math.max(e,Math.min(t,c))}function mc(c,e){return(c%e+e)%e}function ca(c,e,t){return(1-t)*c+t*e}function Ws(c){return(c&c-1)===0&&c!==0}function Va(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function fr(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function wt(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*r-s*i+e.x,this.y=n*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ct{constructor(){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,r,i,n,s,a,o,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=n,u[5]=o,u[6]=r,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,n=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],u=r[4],f=r[7],h=r[2],m=r[5],x=r[8],p=i[0],d=i[3],_=i[6],v=i[1],M=i[4],g=i[7],S=i[2],w=i[5],D=i[8];return n[0]=s*p+a*v+o*S,n[3]=s*d+a*M+o*w,n[6]=s*_+a*g+o*D,n[1]=l*p+u*v+f*S,n[4]=l*d+u*M+f*w,n[7]=l*_+u*g+f*D,n[2]=h*p+m*v+x*S,n[5]=h*d+m*M+x*w,n[8]=h*_+m*g+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],s=e[4],a=e[5],o=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-r*n*u+r*a*o+i*n*l-i*s*o}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],s=e[4],a=e[5],o=e[6],l=e[7],u=e[8],f=u*s-a*l,h=a*o-u*n,m=l*n-s*o,x=t*f+r*h+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=f*p,e[1]=(i*l-u*r)*p,e[2]=(a*r-i*s)*p,e[3]=h*p,e[4]=(u*t-i*o)*p,e[5]=(i*n-a*t)*p,e[6]=m*p,e[7]=(r*o-l*t)*p,e[8]=(s*t-r*n)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,n,s,a){const o=Math.cos(n),l=Math.sin(n);return this.set(r*o,r*l,-r*(o*s+l*a)+s+e,-i*l,i*o,-i*(-l*s+o*a)+a+t,0,0,1),this}scale(e,t){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=t,r[4]*=t,r[7]*=t,this}rotate(e){const t=Math.cos(e),r=Math.sin(e),i=this.elements,n=i[0],s=i[3],a=i[6],o=i[1],l=i[4],u=i[7];return i[0]=t*n+r*o,i[3]=t*s+r*l,i[6]=t*a+r*u,i[1]=-r*n+t*o,i[4]=-r*s+t*l,i[7]=-r*a+t*u,this}translate(e,t){const r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=t*r[2],r[4]+=t*r[5],r[7]+=t*r[8],this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ko(c){for(let e=c.length-1;e>=0;--e)if(c[e]>=65535)return!0;return!1}function Or(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function zn(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function Fr(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const ua={[rn]:{[In]:zn},[In]:{[rn]:Fr}},kt={legacyMode:!0,get workingColorSpace(){return In},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,e,t){if(this.legacyMode||e===t||!e||!t)return c;if(ua[e]&&ua[e][t]!==void 0){const r=ua[e][t];return c.r=r(c.r),c.g=r(c.g),c.b=r(c.b),c}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(c,e){return this.convert(c,this.workingColorSpace,e)},toWorkingColorSpace:function(c,e){return this.convert(c,e,this.workingColorSpace)}},Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},Gt={h:0,s:0,l:0},hr={h:0,s:0,l:0};function fa(c,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?c+(e-c)*6*t:t<1/2?e:t<2/3?c+(e-c)*6*(2/3-t):c}function dr(c,e){return e.r=c.r,e.g=c.g,e.b=c.b,e}class qe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=In){return this.r=e,this.g=t,this.b=r,kt.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=In){if(e=mc(e,1),t=At(t,0,1),r=At(r,0,1),t===0)this.r=this.g=this.b=r;else{const n=r<=.5?r*(1+t):r+t-r*t,s=2*r-n;this.r=fa(s,n,e+1/3),this.g=fa(s,n,e),this.b=fa(s,n,e-1/3)}return kt.toWorkingColorSpace(this,i),this}setStyle(e,t=rn){function r(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,kt.toWorkingColorSpace(this,t),r(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,kt.toWorkingColorSpace(this,t),r(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(n[1])/360,l=parseFloat(n[2])/100,u=parseFloat(n[3])/100;return r(n[4]),this.setHSL(o,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=i[1],s=n.length;if(s===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,kt.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,kt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=rn){const r=Go[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return kt.fromWorkingColorSpace(dr(this,rt),e),At(rt.r*255,0,255)<<16^At(rt.g*255,0,255)<<8^At(rt.b*255,0,255)<<0}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=In){kt.fromWorkingColorSpace(dr(this,rt),t);const r=rt.r,i=rt.g,n=rt.b,s=Math.max(r,i,n),a=Math.min(r,i,n);let o,l;const u=(a+s)/2;if(a===s)o=0,l=0;else{const f=s-a;switch(l=u<=.5?f/(s+a):f/(2-s-a),s){case r:o=(i-n)/f+(i<n?6:0);break;case i:o=(n-r)/f+2;break;case n:o=(r-i)/f+4;break}o/=6}return e.h=o,e.s=l,e.l=u,e}getRGB(e,t=In){return kt.fromWorkingColorSpace(dr(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=rn){return kt.fromWorkingColorSpace(dr(this,rt),e),e!==rn?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,r){return this.getHSL(Gt),Gt.h+=e,Gt.s+=t,Gt.l+=r,this.setHSL(Gt.h,Gt.s,Gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Gt),e.getHSL(hr);const r=ca(Gt.h,hr.h,t),i=ca(Gt.s,hr.s,t),n=ca(Gt.l,hr.l,t);return this.setHSL(r,i,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}qe.NAMES=Go;let ni;class Vo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=Or("canvas")),ni.width=e.width,ni.height=e.height;const r=ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),n=i.data;for(let s=0;s<n.length;s++)n[s]=zn(n[s]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(zn(t[r]/255)*255):t[r]=zn(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Wo{constructor(e=null){this.isSource=!0,this.uuid=Ji(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let n;if(Array.isArray(i)){n=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?n.push(ha(i[s].image)):n.push(ha(i[s]))}else n=ha(i);r.url=n}return t||(e.images[this.uuid]=r),r}}function ha(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?Vo.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gc=0;class Ot extends Ei{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,r=Ht,i=Ht,n=St,s=Br,a=Kt,o=kn,l=1,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Ji(),this.name="",this.source=new Wo(e),this.mipmaps=[],this.mapping=t,this.wrapS=r,this.wrapT=i,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ba:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ba:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Oo;class at{constructor(e=0,t=0,r=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i+s[12]*n,this.y=s[1]*t+s[5]*r+s[9]*i+s[13]*n,this.z=s[2]*t+s[6]*r+s[10]*i+s[14]*n,this.w=s[3]*t+s[7]*r+s[11]*i+s[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,n;const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],m=o[5],x=o[9],p=o[2],d=o[6],_=o[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(x+d)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,g=(m+1)/2,S=(_+1)/2,w=(u+h)/4,D=(f+p)/4,y=(x+d)/4;return M>g&&M>S?M<.01?(r=0,i=.707106781,n=.707106781):(r=Math.sqrt(M),i=w/r,n=D/r):g>S?g<.01?(r=.707106781,i=0,n=.707106781):(i=Math.sqrt(g),r=w/i,n=y/i):S<.01?(r=.707106781,i=.707106781,n=0):(n=Math.sqrt(S),r=D/n,i=y/n),this.set(r,i,n,t),this}let v=Math.sqrt((d-x)*(d-x)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(d-x)/v,this.y=(f-p)/v,this.z=(h-u)/v,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vn extends Ei{constructor(e,t,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ot(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:St,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ho extends Ot{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _c extends Ot{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,n,s,a){let o=r[i+0],l=r[i+1],u=r[i+2],f=r[i+3];const h=n[s+0],m=n[s+1],x=n[s+2],p=n[s+3];if(a===0){e[t+0]=o,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(f!==p||o!==h||l!==m||u!==x){let d=1-a;const _=o*h+l*m+u*x+f*p,v=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const S=Math.sqrt(M),w=Math.atan2(S,_*v);d=Math.sin(d*w)/S,a=Math.sin(a*w)/S}const g=a*v;if(o=o*d+h*g,l=l*d+m*g,u=u*d+x*g,f=f*d+p*g,d===1-a){const S=1/Math.sqrt(o*o+l*l+u*u+f*f);o*=S,l*=S,u*=S,f*=S}}e[t]=o,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,i,n,s){const a=r[i],o=r[i+1],l=r[i+2],u=r[i+3],f=n[s],h=n[s+1],m=n[s+2],x=n[s+3];return e[t]=a*x+u*f+o*m-l*h,e[t+1]=o*x+u*h+l*f-a*m,e[t+2]=l*x+u*m+a*h-o*f,e[t+3]=u*x-a*f-o*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,i=e._y,n=e._z,s=e._order,a=Math.cos,o=Math.sin,l=a(r/2),u=a(i/2),f=a(n/2),h=o(r/2),m=o(i/2),x=o(n/2);switch(s){case"XYZ":this._x=h*u*f+l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f+h*m*x;break;case"YZX":this._x=h*u*f+l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f-h*m*x;break;case"XZY":this._x=h*u*f-l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],n=t[8],s=t[1],a=t[5],o=t[9],l=t[2],u=t[6],f=t[10],h=r+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-o)*m,this._y=(n-l)*m,this._z=(s-i)*m}else if(r>a&&r>f){const m=2*Math.sqrt(1+r-a-f);this._w=(u-o)/m,this._x=.25*m,this._y=(i+s)/m,this._z=(n+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-r-f);this._w=(n-l)/m,this._x=(i+s)/m,this._y=.25*m,this._z=(o+u)/m}else{const m=2*Math.sqrt(1+f-r-a);this._w=(s-i)/m,this._x=(n+l)/m,this._y=(o+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,n=e._z,s=e._w,a=t._x,o=t._y,l=t._z,u=t._w;return this._x=r*u+s*a+i*l-n*o,this._y=i*u+s*o+n*a-r*l,this._z=n*u+s*l+r*o-i*a,this._w=s*u-r*a-i*o-n*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,n=this._z,s=this._w;let a=s*e._w+r*e._x+i*e._y+n*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=i,this._z=n,this;const o=1-a*a;if(o<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*r+t*this._x,this._y=m*i+t*this._y,this._z=m*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(o),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=s*f+this._w*h,this._x=r*f+this._x*h,this._y=i*f+this._y*h,this._z=n*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(i),r*Math.sin(n),r*Math.cos(n),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6]*i,this.y=n[1]*t+n[4]*r+n[7]*i,this.z=n[2]*t+n[5]*r+n[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,n=e.elements,s=1/(n[3]*t+n[7]*r+n[11]*i+n[15]);return this.x=(n[0]*t+n[4]*r+n[8]*i+n[12])*s,this.y=(n[1]*t+n[5]*r+n[9]*i+n[13])*s,this.z=(n[2]*t+n[6]*r+n[10]*i+n[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,n=e.x,s=e.y,a=e.z,o=e.w,l=o*t+s*i-a*r,u=o*r+a*t-n*i,f=o*i+n*r-s*t,h=-n*t-s*r-a*i;return this.x=l*o+h*-n+u*-a-f*-s,this.y=u*o+h*-s+f*-n-l*-a,this.z=f*o+h*-a+l*-s-u*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*i,this.y=n[1]*t+n[5]*r+n[9]*i,this.z=n[2]*t+n[6]*r+n[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,n=e.z,s=t.x,a=t.y,o=t.z;return this.x=i*o-n*a,this.y=n*s-r*o,this.z=r*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new q,Hs=new Ki;class Ai{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,r=1/0,i=1/0,n=-1/0,s=-1/0,a=-1/0;for(let o=0,l=e.length;o<l;o+=3){const u=e[o],f=e[o+1],h=e[o+2];u<t&&(t=u),f<r&&(r=f),h<i&&(i=h),u>n&&(n=u),f>s&&(s=f),h>a&&(a=h)}return this.min.set(t,r,i),this.max.set(n,s,a),this}setFromBufferAttribute(e){let t=1/0,r=1/0,i=1/0,n=-1/0,s=-1/0,a=-1/0;for(let o=0,l=e.count;o<l;o++){const u=e.getX(o),f=e.getY(o),h=e.getZ(o);u<t&&(t=u),f<r&&(r=f),h<i&&(i=h),u>n&&(n=u),f>s&&(s=f),h>a&&(a=h)}return this.min.set(t,r,i),this.max.set(n,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0)if(t&&r.attributes!=null&&r.attributes.position!==void 0){const n=r.attributes.position;for(let s=0,a=n.count;s<a;s++)Tn.fromBufferAttribute(n,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Tn)}else r.boundingBox===null&&r.computeBoundingBox(),pa.copy(r.boundingBox),pa.applyMatrix4(e.matrixWorld),this.union(pa);const i=e.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),pr.subVectors(this.max,Vi),ii.subVectors(e.a,Vi),ri.subVectors(e.b,Vi),ai.subVectors(e.c,Vi),dn.subVectors(ri,ii),pn.subVectors(ai,ri),En.subVectors(ii,ai);let t=[0,-dn.z,dn.y,0,-pn.z,pn.y,0,-En.z,En.y,dn.z,0,-dn.x,pn.z,0,-pn.x,En.z,0,-En.x,-dn.y,dn.x,0,-pn.y,pn.x,0,-En.y,En.x,0];return!ma(t,ii,ri,ai,pr)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,ii,ri,ai,pr))?!1:(mr.crossVectors(dn,pn),t=[mr.x,mr.y,mr.z],ma(t,ii,ri,ai,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Tn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new q,new q,new q,new q,new q,new q,new q,new q],Tn=new q,pa=new Ai,ii=new q,ri=new q,ai=new q,dn=new q,pn=new q,En=new q,Vi=new q,pr=new q,mr=new q,An=new q;function ma(c,e,t,r,i){for(let n=0,s=c.length-3;n<=s;n+=3){An.fromArray(c,n);const a=i.x*Math.abs(An.x)+i.y*Math.abs(An.y)+i.z*Math.abs(An.z),o=e.dot(An),l=t.dot(An),u=r.dot(An);if(Math.max(-Math.max(o,l,u),Math.min(o,l,u))>a)return!1}return!0}const vc=new Ai,Xs=new q,gr=new q,ga=new q;class kr{constructor(e=new q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):vc.setFromPoints(e).getCenter(r);let i=0;for(let n=0,s=e.length;n<s;n++)i=Math.max(i,r.distanceToSquared(e[n]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.add(ga.multiplyScalar(i/r)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?gr.set(0,0,1).multiplyScalar(e.radius):gr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Xs.copy(e.center).add(gr)),this.expandByPoint(Xs.copy(e.center).sub(gr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new q,_a=new q,_r=new q,mn=new q,va=new q,vr=new q,xa=new q;class xc{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.direction).multiplyScalar(t).add(this.origin),$t.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){_a.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),mn.copy(this.origin).sub(_a);const n=e.distanceTo(t)*.5,s=-this.direction.dot(_r),a=mn.dot(this.direction),o=-mn.dot(_r),l=mn.lengthSq(),u=Math.abs(1-s*s);let f,h,m,x;if(u>0)if(f=s*o-a,h=s*a-o,x=n*u,f>=0)if(h>=-x)if(h<=x){const p=1/u;f*=p,h*=p,m=f*(f+s*h+2*a)+h*(s*f+h+2*o)+l}else h=n,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*o)+l;else h=-n,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*o)+l;else h<=-x?(f=Math.max(0,-(-s*n+a)),h=f>0?-n:Math.min(Math.max(-n,-o),n),m=-f*f+h*(h+2*o)+l):h<=x?(f=0,h=Math.min(Math.max(-n,-o),n),m=h*(h+2*o)+l):(f=Math.max(0,-(s*n+a)),h=f>0?n:Math.min(Math.max(-n,-o),n),m=-f*f+h*(h+2*o)+l);else h=s>0?-n:n,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*o)+l;return r&&r.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(_r).multiplyScalar(h).add(_a),m}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const r=$t.dot(this.direction),i=$t.dot($t)-r*r,n=e.radius*e.radius;if(i>n)return null;const s=Math.sqrt(n-i),a=r-s,o=r+s;return a<0&&o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,n,s,a,o;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(r=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(r=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(n=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(n=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),r>s||n>i||((n>r||r!==r)&&(r=n),(s<i||i!==i)&&(i=s),f>=0?(a=(e.min.z-h.z)*f,o=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,o=(e.min.z-h.z)*f),r>o||a>i)||((a>r||r!==r)&&(r=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,r,i,n){va.subVectors(t,e),vr.subVectors(r,e),xa.crossVectors(va,vr);let s=this.direction.dot(xa),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;mn.subVectors(this.origin,e);const o=a*this.direction.dot(vr.crossVectors(mn,vr));if(o<0)return null;const l=a*this.direction.dot(va.cross(mn));if(l<0||o+l>s)return null;const u=-a*mn.dot(xa);return u<0?null:this.at(u/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,r,i,n,s,a,o,l,u,f,h,m,x,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=i,_[1]=n,_[5]=s,_[9]=a,_[13]=o,_[2]=l,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=x,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/si.setFromMatrixColumn(e,0).length(),n=1/si.setFromMatrixColumn(e,1).length(),s=1/si.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,n=e.z,s=Math.cos(r),a=Math.sin(r),o=Math.cos(i),l=Math.sin(i),u=Math.cos(n),f=Math.sin(n);if(e.order==="XYZ"){const h=s*u,m=s*f,x=a*u,p=a*f;t[0]=o*u,t[4]=-o*f,t[8]=l,t[1]=m+x*l,t[5]=h-p*l,t[9]=-a*o,t[2]=p-h*l,t[6]=x+m*l,t[10]=s*o}else if(e.order==="YXZ"){const h=o*u,m=o*f,x=l*u,p=l*f;t[0]=h+p*a,t[4]=x*a-m,t[8]=s*l,t[1]=s*f,t[5]=s*u,t[9]=-a,t[2]=m*a-x,t[6]=p+h*a,t[10]=s*o}else if(e.order==="ZXY"){const h=o*u,m=o*f,x=l*u,p=l*f;t[0]=h-p*a,t[4]=-s*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=s*u,t[9]=p-h*a,t[2]=-s*l,t[6]=a,t[10]=s*o}else if(e.order==="ZYX"){const h=s*u,m=s*f,x=a*u,p=a*f;t[0]=o*u,t[4]=x*l-m,t[8]=h*l+p,t[1]=o*f,t[5]=p*l+h,t[9]=m*l-x,t[2]=-l,t[6]=a*o,t[10]=s*o}else if(e.order==="YZX"){const h=s*o,m=s*l,x=a*o,p=a*l;t[0]=o*u,t[4]=p-h*f,t[8]=x*f+m,t[1]=f,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*f+x,t[10]=h-p*f}else if(e.order==="XZY"){const h=s*o,m=s*l,x=a*o,p=a*l;t[0]=o*u,t[4]=-f,t[8]=l*u,t[1]=h*f+p,t[5]=s*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yc,e,Sc)}lookAt(e,t,r){const i=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),gn.crossVectors(r,Tt),gn.lengthSq()===0&&(Math.abs(r.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),gn.crossVectors(r,Tt)),gn.normalize(),xr.crossVectors(Tt,gn),i[0]=gn.x,i[4]=xr.x,i[8]=Tt.x,i[1]=gn.y,i[5]=xr.y,i[9]=Tt.y,i[2]=gn.z,i[6]=xr.z,i[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,n=this.elements,s=r[0],a=r[4],o=r[8],l=r[12],u=r[1],f=r[5],h=r[9],m=r[13],x=r[2],p=r[6],d=r[10],_=r[14],v=r[3],M=r[7],g=r[11],S=r[15],w=i[0],D=i[4],y=i[8],T=i[12],I=i[1],Y=i[5],F=i[9],U=i[13],C=i[2],V=i[6],G=i[10],te=i[14],j=i[3],L=i[7],R=i[11],P=i[15];return n[0]=s*w+a*I+o*C+l*j,n[4]=s*D+a*Y+o*V+l*L,n[8]=s*y+a*F+o*G+l*R,n[12]=s*T+a*U+o*te+l*P,n[1]=u*w+f*I+h*C+m*j,n[5]=u*D+f*Y+h*V+m*L,n[9]=u*y+f*F+h*G+m*R,n[13]=u*T+f*U+h*te+m*P,n[2]=x*w+p*I+d*C+_*j,n[6]=x*D+p*Y+d*V+_*L,n[10]=x*y+p*F+d*G+_*R,n[14]=x*T+p*U+d*te+_*P,n[3]=v*w+M*I+g*C+S*j,n[7]=v*D+M*Y+g*V+S*L,n[11]=v*y+M*F+g*G+S*R,n[15]=v*T+M*U+g*te+S*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],n=e[12],s=e[1],a=e[5],o=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],p=e[7],d=e[11],_=e[15];return x*(+n*o*f-i*l*f-n*a*h+r*l*h+i*a*m-r*o*m)+p*(+t*o*m-t*l*h+n*s*h-i*s*m+i*l*u-n*o*u)+d*(+t*l*f-t*a*m-n*s*f+r*s*m+n*a*u-r*l*u)+_*(-i*a*u-t*o*f+t*a*h+i*s*f-r*s*h+r*o*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],s=e[4],a=e[5],o=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],p=e[13],d=e[14],_=e[15],v=f*d*l-p*h*l+p*o*m-a*d*m-f*o*_+a*h*_,M=x*h*l-u*d*l-x*o*m+s*d*m+u*o*_-s*h*_,g=u*p*l-x*f*l+x*a*m-s*p*m-u*a*_+s*f*_,S=x*f*o-u*p*o-x*a*h+s*p*h+u*a*d-s*f*d,w=t*v+r*M+i*g+n*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/w;return e[0]=v*D,e[1]=(p*h*n-f*d*n-p*i*m+r*d*m+f*i*_-r*h*_)*D,e[2]=(a*d*n-p*o*n+p*i*l-r*d*l-a*i*_+r*o*_)*D,e[3]=(f*o*n-a*h*n-f*i*l+r*h*l+a*i*m-r*o*m)*D,e[4]=M*D,e[5]=(u*d*n-x*h*n+x*i*m-t*d*m-u*i*_+t*h*_)*D,e[6]=(x*o*n-s*d*n-x*i*l+t*d*l+s*i*_-t*o*_)*D,e[7]=(s*h*n-u*o*n+u*i*l-t*h*l-s*i*m+t*o*m)*D,e[8]=g*D,e[9]=(x*f*n-u*p*n-x*r*m+t*p*m+u*r*_-t*f*_)*D,e[10]=(s*p*n-x*a*n+x*r*l-t*p*l-s*r*_+t*a*_)*D,e[11]=(u*a*n-s*f*n-u*r*l+t*f*l+s*r*m-t*a*m)*D,e[12]=S*D,e[13]=(u*p*i-x*f*i+x*r*h-t*p*h-u*r*d+t*f*d)*D,e[14]=(x*a*i-s*p*i-x*r*o+t*p*o+s*r*d-t*a*d)*D,e[15]=(s*f*i-u*a*i+u*r*o-t*f*o-s*r*h+t*a*h)*D,this}scale(e){const t=this.elements,r=e.x,i=e.y,n=e.z;return t[0]*=r,t[4]*=i,t[8]*=n,t[1]*=r,t[5]*=i,t[9]*=n,t[2]*=r,t[6]*=i,t[10]*=n,t[3]*=r,t[7]*=i,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),n=1-r,s=e.x,a=e.y,o=e.z,l=n*s,u=n*a;return this.set(l*s+r,l*a-i*o,l*o+i*a,0,l*a+i*o,u*a+r,u*o-i*s,0,l*o-i*a,u*o+i*s,n*o*o+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,n,s){return this.set(1,r,n,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,n=t._x,s=t._y,a=t._z,o=t._w,l=n+n,u=s+s,f=a+a,h=n*l,m=n*u,x=n*f,p=s*u,d=s*f,_=a*f,v=o*l,M=o*u,g=o*f,S=r.x,w=r.y,D=r.z;return i[0]=(1-(p+_))*S,i[1]=(m+g)*S,i[2]=(x-M)*S,i[3]=0,i[4]=(m-g)*w,i[5]=(1-(h+_))*w,i[6]=(d+v)*w,i[7]=0,i[8]=(x+M)*D,i[9]=(d-v)*D,i[10]=(1-(h+p))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let n=si.set(i[0],i[1],i[2]).length();const s=si.set(i[4],i[5],i[6]).length(),a=si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(n=-n),e.x=i[12],e.y=i[13],e.z=i[14],Vt.copy(this);const l=1/n,u=1/s,f=1/a;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=u,Vt.elements[5]*=u,Vt.elements[6]*=u,Vt.elements[8]*=f,Vt.elements[9]*=f,Vt.elements[10]*=f,t.setFromRotationMatrix(Vt),r.x=n,r.y=s,r.z=a,this}makePerspective(e,t,r,i,n,s){const a=this.elements,o=2*n/(t-e),l=2*n/(r-i),u=(t+e)/(t-e),f=(r+i)/(r-i),h=-(s+n)/(s-n),m=-2*s*n/(s-n);return a[0]=o,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,r,i,n,s){const a=this.elements,o=1/(t-e),l=1/(r-i),u=1/(s-n),f=(t+e)*o,h=(r+i)*l,m=(s+n)*u;return a[0]=2*o,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const si=new q,Vt=new lt,yc=new q(0,0,0),Sc=new q(1,1,1),gn=new q,xr=new q,Tt=new q,qs=new lt,js=new Ki;class Qi{constructor(e=0,t=0,r=0,i=Qi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,n=i[0],s=i[4],a=i[8],o=i[1],l=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-f,n),this._z=0);break;case"ZXY":this._x=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,n));break;case"ZYX":this._y=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(o,n)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,n)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-At(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return qs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qs,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return js.setFromEuler(this),this.setFromQuaternion(js,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Qi.DefaultOrder="XYZ";Qi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Xo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mc=0;const Ys=new q,oi=new Ki,en=new lt,yr=new q,Wi=new q,bc=new q,wc=new Ki,Zs=new q(1,0,0),Js=new q(0,1,0),Ks=new q(0,0,1),Tc={type:"added"},Qs={type:"removed"};class Pt extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DefaultUp.clone();const e=new q,t=new Qi,r=new Ki,i=new q(1,1,1);function n(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ct}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Pt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Pt.DefaultMatrixWorldAutoUpdate,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Zs,e)}rotateY(e){return this.rotateOnAxis(Js,e)}rotateZ(e){return this.rotateOnAxis(Ks,e)}translateOnAxis(e,t){return Ys.copy(e).applyQuaternion(this.quaternion),this.position.add(Ys.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zs,e)}translateY(e){return this.translateOnAxis(Js,e)}translateZ(e){return this.translateOnAxis(Ks,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?yr.copy(e):yr.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Wi,yr,this.up):en.lookAt(yr,Wi,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),oi.setFromRotationMatrix(en),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qs)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Qs)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,bc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,wc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++){const n=t[r];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let n=0,s=i.length;n<s;n++){const a=i[n];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function n(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=n(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,u=o.length;l<u;l++){const f=o[l];n(e.shapes,f)}else n(e.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(n(e.materials,this.material[o]));i.material=a}else i.material=n(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];i.animations.push(n(e.animations,o))}}if(t){const a=s(e.geometries),o=s(e.materials),l=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),m=s(e.animations),x=s(e.nodes);a.length>0&&(r.geometries=a),o.length>0&&(r.materials=o),l.length>0&&(r.textures=l),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),m.length>0&&(r.animations=m),x.length>0&&(r.nodes=x)}return r.object=i,r;function s(a){const o=[];for(const l in a){const u=a[l];delete u.metadata,o.push(u)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Pt.DefaultUp=new q(0,1,0);Pt.DefaultMatrixAutoUpdate=!0;Pt.DefaultMatrixWorldAutoUpdate=!0;const Wt=new q,tn=new q,ya=new q,nn=new q,li=new q,ci=new q,$s=new q,Sa=new q,Ma=new q,ba=new q;class an{constructor(e=new q,t=new q,r=new q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),Wt.subVectors(e,t),i.cross(Wt);const n=i.lengthSq();return n>0?i.multiplyScalar(1/Math.sqrt(n)):i.set(0,0,0)}static getBarycoord(e,t,r,i,n){Wt.subVectors(i,t),tn.subVectors(r,t),ya.subVectors(e,t);const s=Wt.dot(Wt),a=Wt.dot(tn),o=Wt.dot(ya),l=tn.dot(tn),u=tn.dot(ya),f=s*l-a*a;if(f===0)return n.set(-2,-1,-1);const h=1/f,m=(l*o-a*u)*h,x=(s*u-a*o)*h;return n.set(1-m-x,x,m)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,nn),nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getUV(e,t,r,i,n,s,a,o){return this.getBarycoord(e,t,r,i,nn),o.set(0,0),o.addScaledVector(n,nn.x),o.addScaledVector(s,nn.y),o.addScaledVector(a,nn.z),o}static isFrontFacing(e,t,r,i){return Wt.subVectors(r,t),tn.subVectors(e,t),Wt.cross(tn).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Wt.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,i,n){return an.getUV(e,this.a,this.b,this.c,t,r,i,n)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,n=this.c;let s,a;li.subVectors(i,r),ci.subVectors(n,r),Sa.subVectors(e,r);const o=li.dot(Sa),l=ci.dot(Sa);if(o<=0&&l<=0)return t.copy(r);Ma.subVectors(e,i);const u=li.dot(Ma),f=ci.dot(Ma);if(u>=0&&f<=u)return t.copy(i);const h=o*f-u*l;if(h<=0&&o>=0&&u<=0)return s=o/(o-u),t.copy(r).addScaledVector(li,s);ba.subVectors(e,n);const m=li.dot(ba),x=ci.dot(ba);if(x>=0&&m<=x)return t.copy(n);const p=m*l-o*x;if(p<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(r).addScaledVector(ci,a);const d=u*x-m*f;if(d<=0&&f-u>=0&&m-x>=0)return $s.subVectors(n,i),a=(f-u)/(f-u+(m-x)),t.copy(i).addScaledVector($s,a);const _=1/(d+p+h);return s=p*_,a=h*_,t.copy(r).addScaledVector(li,s).addScaledVector(ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ec=0;class Gr extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=yi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fo,this.blendDst=Io,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(r.blending=this.blending),this.side!==Bn&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function i(n){const s=[];for(const a in n){const o=n[a];delete o.metadata,s.push(o)}return s}if(t){const n=i(e.textures),s=i(e.images);n.length>0&&(r.textures=n),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let n=0;n!==i;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $i extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new q,Sr=new Xe;class Xt{constructor(e,t,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r===!0,this.usage=ks,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,n=this.itemSize;i<n;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array),i=wt(i,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ks&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class qo extends Xt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class jo extends Xt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class bn extends Xt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Ac=0;const It=new lt,wa=new Pt,ui=new q,Et=new Ai,Hi=new Ai,ot=new q;class ln extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ko(e)?jo:qo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const n=new Ct().getNormalMatrix(e);r.applyNormalMatrix(n),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,r){return It.makeTranslation(e,t,r),this.applyMatrix4(It),this}scale(e,t,r){return It.makeScale(e,t,r),this.applyMatrix4(It),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=[];for(let r=0,i=e.length;r<i;r++){const n=e[r];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const n=t[r];Et.setFromBufferAttribute(n),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Et.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Et.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Et.min),this.boundingBox.expandByPoint(Et.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(Et.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(Et.min,Hi.min),Et.expandByPoint(ot),ot.addVectors(Et.max,Hi.max),Et.expandByPoint(ot)):(Et.expandByPoint(Hi.min),Et.expandByPoint(Hi.max))}Et.getCenter(r);let i=0;for(let n=0,s=e.count;n<s;n++)ot.fromBufferAttribute(e,n),i=Math.max(i,r.distanceToSquared(ot));if(t)for(let n=0,s=t.length;n<s;n++){const a=t[n],o=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ot.fromBufferAttribute(a,l),o&&(ui.fromBufferAttribute(e,l),ot.add(ui)),i=Math.max(i,r.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=t.position.array,n=t.normal.array,s=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,l=[],u=[];for(let I=0;I<a;I++)l[I]=new q,u[I]=new q;const f=new q,h=new q,m=new q,x=new Xe,p=new Xe,d=new Xe,_=new q,v=new q;function M(I,Y,F){f.fromArray(i,I*3),h.fromArray(i,Y*3),m.fromArray(i,F*3),x.fromArray(s,I*2),p.fromArray(s,Y*2),d.fromArray(s,F*2),h.sub(f),m.sub(f),p.sub(x),d.sub(x);const U=1/(p.x*d.y-d.x*p.y);!isFinite(U)||(_.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(U),v.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(U),l[I].add(_),l[Y].add(_),l[F].add(_),u[I].add(v),u[Y].add(v),u[F].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:r.length}]);for(let I=0,Y=g.length;I<Y;++I){const F=g[I],U=F.start,C=F.count;for(let V=U,G=U+C;V<G;V+=3)M(r[V+0],r[V+1],r[V+2])}const S=new q,w=new q,D=new q,y=new q;function T(I){D.fromArray(n,I*3),y.copy(D);const Y=l[I];S.copy(Y),S.sub(D.multiplyScalar(D.dot(Y))).normalize(),w.crossVectors(y,Y);const U=w.dot(u[I])<0?-1:1;o[I*4]=S.x,o[I*4+1]=S.y,o[I*4+2]=S.z,o[I*4+3]=U}for(let I=0,Y=g.length;I<Y;++I){const F=g[I],U=F.start,C=F.count;for(let V=U,G=U+C;V<G;V+=3)T(r[V+0]),T(r[V+1]),T(r[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,m=r.count;h<m;h++)r.setXYZ(h,0,0,0);const i=new q,n=new q,s=new q,a=new q,o=new q,l=new q,u=new q,f=new q;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);i.fromBufferAttribute(t,x),n.fromBufferAttribute(t,p),s.fromBufferAttribute(t,d),u.subVectors(s,n),f.subVectors(i,n),u.cross(f),a.fromBufferAttribute(r,x),o.fromBufferAttribute(r,p),l.fromBufferAttribute(r,d),a.add(u),o.add(u),l.add(u),r.setXYZ(x,a.x,a.y,a.z),r.setXYZ(p,o.x,o.y,o.z),r.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),n.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,n),f.subVectors(i,n),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,o){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(o.length*u);let m=0,x=0;for(let p=0,d=o.length;p<d;p++){a.isInterleavedBufferAttribute?m=o[p]*a.data.stride+a.offset:m=o[p]*u;for(let _=0;_<u;_++)h[x++]=l[m++]}return new Xt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,r=this.index.array,i=this.attributes;for(const a in i){const o=i[a],l=e(o,r);t.setAttribute(a,l)}const n=this.morphAttributes;for(const a in n){const o=[],l=n[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,r);o.push(m)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const o in r){const l=r[o];e.data.attributes[o]=l.toJSON(e.data)}const i={};let n=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(i[o]=u,n=!0)}n&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const n=e.morphAttributes;for(const l in n){const u=[],f=n[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const eo=new lt,fi=new xc,Ta=new kr,_n=new q,vn=new q,xn=new q,Ea=new q,Aa=new q,Ca=new q,Mr=new q,br=new q,wr=new q,Tr=new Xe,Er=new Xe,Ar=new Xe,La=new q,Cr=new q;class Lt extends Pt{constructor(e=new ln,t=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}raycast(e,t){const r=this.geometry,i=this.material,n=this.matrixWorld;if(i===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),Ta.copy(r.boundingSphere),Ta.applyMatrix4(n),e.ray.intersectsSphere(Ta)===!1)||(eo.copy(n).invert(),fi.copy(e.ray).applyMatrix4(eo),r.boundingBox!==null&&fi.intersectsBox(r.boundingBox)===!1))return;let s;const a=r.index,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative,f=r.attributes.uv,h=r.attributes.uv2,m=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const _=m[p],v=i[_.materialIndex],M=Math.max(_.start,x.start),g=Math.min(a.count,Math.min(_.start+_.count,x.start+x.count));for(let S=M,w=g;S<w;S+=3){const D=a.getX(S),y=a.getX(S+1),T=a.getX(S+2);s=Lr(this,v,e,fi,o,l,u,f,h,D,y,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const p=Math.max(0,x.start),d=Math.min(a.count,x.start+x.count);for(let _=p,v=d;_<v;_+=3){const M=a.getX(_),g=a.getX(_+1),S=a.getX(_+2);s=Lr(this,i,e,fi,o,l,u,f,h,M,g,S),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const _=m[p],v=i[_.materialIndex],M=Math.max(_.start,x.start),g=Math.min(o.count,Math.min(_.start+_.count,x.start+x.count));for(let S=M,w=g;S<w;S+=3){const D=S,y=S+1,T=S+2;s=Lr(this,v,e,fi,o,l,u,f,h,D,y,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const p=Math.max(0,x.start),d=Math.min(o.count,x.start+x.count);for(let _=p,v=d;_<v;_+=3){const M=_,g=_+1,S=_+2;s=Lr(this,i,e,fi,o,l,u,f,h,M,g,S),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function Cc(c,e,t,r,i,n,s,a){let o;if(e.side===Dt?o=r.intersectTriangle(s,n,i,!0,a):o=r.intersectTriangle(i,n,s,e.side!==Jt,a),o===null)return null;Cr.copy(a),Cr.applyMatrix4(c.matrixWorld);const l=t.ray.origin.distanceTo(Cr);return l<t.near||l>t.far?null:{distance:l,point:Cr.clone(),object:c}}function Lr(c,e,t,r,i,n,s,a,o,l,u,f){_n.fromBufferAttribute(i,l),vn.fromBufferAttribute(i,u),xn.fromBufferAttribute(i,f);const h=c.morphTargetInfluences;if(n&&h){Mr.set(0,0,0),br.set(0,0,0),wr.set(0,0,0);for(let x=0,p=n.length;x<p;x++){const d=h[x],_=n[x];d!==0&&(Ea.fromBufferAttribute(_,l),Aa.fromBufferAttribute(_,u),Ca.fromBufferAttribute(_,f),s?(Mr.addScaledVector(Ea,d),br.addScaledVector(Aa,d),wr.addScaledVector(Ca,d)):(Mr.addScaledVector(Ea.sub(_n),d),br.addScaledVector(Aa.sub(vn),d),wr.addScaledVector(Ca.sub(xn),d)))}_n.add(Mr),vn.add(br),xn.add(wr)}c.isSkinnedMesh&&(c.boneTransform(l,_n),c.boneTransform(u,vn),c.boneTransform(f,xn));const m=Cc(c,e,t,r,_n,vn,xn,La);if(m){a&&(Tr.fromBufferAttribute(a,l),Er.fromBufferAttribute(a,u),Ar.fromBufferAttribute(a,f),m.uv=an.getUV(La,_n,vn,xn,Tr,Er,Ar,new Xe)),o&&(Tr.fromBufferAttribute(o,l),Er.fromBufferAttribute(o,u),Ar.fromBufferAttribute(o,f),m.uv2=an.getUV(La,_n,vn,xn,Tr,Er,Ar,new Xe));const x={a:l,b:u,c:f,normal:new q,materialIndex:0};an.getNormal(_n,vn,xn,x.normal),m.face=x}return m}class er extends ln{constructor(e=1,t=1,r=1,i=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:n,depthSegments:s};const a=this;i=Math.floor(i),n=Math.floor(n),s=Math.floor(s);const o=[],l=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,r,t,e,s,n,0),x("z","y","x",1,-1,r,t,-e,s,n,1),x("x","z","y",1,1,e,r,t,i,s,2),x("x","z","y",1,-1,e,r,-t,i,s,3),x("x","y","z",1,-1,e,t,r,i,n,4),x("x","y","z",-1,-1,e,t,-r,i,n,5),this.setIndex(o),this.setAttribute("position",new bn(l,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(f,2));function x(p,d,_,v,M,g,S,w,D,y,T){const I=g/D,Y=S/y,F=g/2,U=S/2,C=w/2,V=D+1,G=y+1;let te=0,j=0;const L=new q;for(let R=0;R<G;R++){const P=R*Y-U;for(let O=0;O<V;O++){const X=O*I-F;L[p]=X*v,L[d]=P*M,L[_]=C,l.push(L.x,L.y,L.z),L[p]=0,L[d]=0,L[_]=w>0?1:-1,u.push(L.x,L.y,L.z),f.push(O/D),f.push(1-R/y),te+=1}}for(let R=0;R<y;R++)for(let P=0;P<D;P++){const O=h+P+V*R,X=h+P+V*(R+1),J=h+(P+1)+V*(R+1),Q=h+(P+1)+V*R;o.push(O,X,Q),o.push(X,J,Q),j+=6}a.addGroup(m,j,T),m+=j,h+=te}}static fromJSON(e){return new er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(c){const e={};for(const t in c){e[t]={};for(const r in c[t]){const i=c[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function pt(c){const e={};for(let t=0;t<c.length;t++){const r=Ti(c[t]);for(const i in r)e[i]=r[i]}return e}function Lc(c){const e=[];for(let t=0;t<c.length;t++)e.push(c[t].clone());return e}const Yo={clone:Ti,merge:pt};var Dc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dc,this.fragmentShader=Pc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Lc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Zo extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends Zo{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,i,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,n=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;n+=s.offsetX*i/o,t-=s.offsetY*r/l,i*=s.width/o,r*=s.height/l}const a=this.filmOffset;a!==0&&(n+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+i,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=90,di=1;class Rc extends Pt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r;const i=new Nt(hi,di,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new q(1,0,0)),this.add(i);const n=new Nt(hi,di,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new q(-1,0,0)),this.add(n);const s=new Nt(hi,di,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new q(0,1,0)),this.add(s);const a=new Nt(hi,di,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new q(0,-1,0)),this.add(a);const o=new Nt(hi,di,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new q(0,0,1)),this.add(o);const l=new Nt(hi,di,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new q(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[i,n,s,a,o,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=sn,e.xr.enabled=!1;const m=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,i),e.setRenderTarget(r,1),e.render(t,n),e.setRenderTarget(r,2),e.render(t,s),e.setRenderTarget(r,3),e.render(t,a),e.setRenderTarget(r,4),e.render(t,o),r.texture.generateMipmaps=m,e.setRenderTarget(r,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,r.texture.needsPMREMUpdate=!0}}class Jo extends Ot{constructor(e,t,r,i,n,s,a,o,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,r,i,n,s,a,o,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uc extends Vn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new Jo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new er(5,5,5),n=new Wn({name:"CubemapFromEquirect",uniforms:Ti(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dt,blending:Mn});n.uniforms.tEquirect.value=t;const s=new Lt(i,n),a=t.minFilter;return t.minFilter===Br&&(t.minFilter=St),new Rc(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,i){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,i);e.setRenderTarget(n)}}const Da=new q,Fc=new q,Ic=new Ct;class Dn{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=Da.subVectors(r,t).cross(Fc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const r=e.delta(Da),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/i;return n<0||n>1?null:t.copy(r).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ic.getNormalMatrix(e),i=this.coplanarPoint(Da).applyMatrix4(e),n=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new kr,Dr=new q;class Ko{constructor(e=new Dn,t=new Dn,r=new Dn,i=new Dn,n=new Dn,s=new Dn){this.planes=[e,t,r,i,n,s]}set(e,t,r,i,n,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(i),a[4].copy(n),a[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes,r=e.elements,i=r[0],n=r[1],s=r[2],a=r[3],o=r[4],l=r[5],u=r[6],f=r[7],h=r[8],m=r[9],x=r[10],p=r[11],d=r[12],_=r[13],v=r[14],M=r[15];return t[0].setComponents(a-i,f-o,p-h,M-d).normalize(),t[1].setComponents(a+i,f+o,p+h,M+d).normalize(),t[2].setComponents(a+n,f+l,p+m,M+_).normalize(),t[3].setComponents(a-n,f-l,p-m,M-_).normalize(),t[4].setComponents(a-s,f-u,p-x,M-v).normalize(),t[5].setComponents(a+s,f+u,p+x,M+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(Dr.x=i.normal.x>0?e.max.x:e.min.x,Dr.y=i.normal.y>0?e.max.y:e.min.y,Dr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qo(){let c=null,e=!1,t=null,r=null;function i(n,s){t(n,s),r=c.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=c.requestAnimationFrame(i),e=!0)},stop:function(){c.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){c=n}}}function Nc(c,e){const t=e.isWebGL2,r=new WeakMap;function i(l,u){const f=l.array,h=l.usage,m=c.createBuffer();c.bindBuffer(u,m),c.bufferData(u,f,h),l.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function n(l,u,f){const h=u.array,m=u.updateRange;c.bindBuffer(f,l),m.count===-1?c.bufferSubData(f,0,h):(t?c.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):c.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),r.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=r.get(l);u&&(c.deleteBuffer(u.buffer),r.delete(l))}function o(l,u){if(l.isGLBufferAttribute){const h=r.get(l);(!h||h.version<l.version)&&r.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=r.get(l);f===void 0?r.set(l,i(l,u)):f.version<l.version&&(n(f.buffer,l,u),f.version=l.version)}return{get:s,remove:a,update:o}}class Vr extends ln{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const n=e/2,s=t/2,a=Math.floor(r),o=Math.floor(i),l=a+1,u=o+1,f=e/a,h=t/o,m=[],x=[],p=[],d=[];for(let _=0;_<u;_++){const v=_*h-s;for(let M=0;M<l;M++){const g=M*f-n;x.push(g,-v,0),p.push(0,0,1),d.push(M/a),d.push(1-_/o)}}for(let _=0;_<o;_++)for(let v=0;v<a;v++){const M=v+l*_,g=v+l*(_+1),S=v+1+l*(_+1),w=v+1+l*_;m.push(M,g,w),m.push(g,S,w)}this.setIndex(m),this.setAttribute("position",new bn(x,3)),this.setAttribute("normal",new bn(p,3)),this.setAttribute("uv",new bn(d,2))}static fromJSON(e){return new Vr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Oc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wc="vec3 transformed = vec3( position );",Hc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,qc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,iu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ru=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,su=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",uu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,du=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_u=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Su=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Tu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Eu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Pu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ru=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Nu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ou=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ju=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ku=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_f=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ef=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Af=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Cf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Lf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Df=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Pf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Rf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Uf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ff=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,If=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Of=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$f=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,th=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ih=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ah=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ch=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,hh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:Oc,alphamap_pars_fragment:zc,alphatest_fragment:Bc,alphatest_pars_fragment:kc,aomap_fragment:Gc,aomap_pars_fragment:Vc,begin_vertex:Wc,beginnormal_vertex:Hc,bsdfs:Xc,iridescence_fragment:qc,bumpmap_pars_fragment:jc,clipping_planes_fragment:Yc,clipping_planes_pars_fragment:Zc,clipping_planes_pars_vertex:Jc,clipping_planes_vertex:Kc,color_fragment:Qc,color_pars_fragment:$c,color_pars_vertex:eu,color_vertex:tu,common:nu,cube_uv_reflection_fragment:iu,defaultnormal_vertex:ru,displacementmap_pars_vertex:au,displacementmap_vertex:su,emissivemap_fragment:ou,emissivemap_pars_fragment:lu,encodings_fragment:cu,encodings_pars_fragment:uu,envmap_fragment:fu,envmap_common_pars_fragment:hu,envmap_pars_fragment:du,envmap_pars_vertex:pu,envmap_physical_pars_fragment:Eu,envmap_vertex:mu,fog_vertex:gu,fog_pars_vertex:_u,fog_fragment:vu,fog_pars_fragment:xu,gradientmap_pars_fragment:yu,lightmap_fragment:Su,lightmap_pars_fragment:Mu,lights_lambert_fragment:bu,lights_lambert_pars_fragment:wu,lights_pars_begin:Tu,lights_toon_fragment:Au,lights_toon_pars_fragment:Cu,lights_phong_fragment:Lu,lights_phong_pars_fragment:Du,lights_physical_fragment:Pu,lights_physical_pars_fragment:Ru,lights_fragment_begin:Uu,lights_fragment_maps:Fu,lights_fragment_end:Iu,logdepthbuf_fragment:Nu,logdepthbuf_pars_fragment:Ou,logdepthbuf_pars_vertex:zu,logdepthbuf_vertex:Bu,map_fragment:ku,map_pars_fragment:Gu,map_particle_fragment:Vu,map_particle_pars_fragment:Wu,metalnessmap_fragment:Hu,metalnessmap_pars_fragment:Xu,morphcolor_vertex:qu,morphnormal_vertex:ju,morphtarget_pars_vertex:Yu,morphtarget_vertex:Zu,normal_fragment_begin:Ju,normal_fragment_maps:Ku,normal_pars_fragment:Qu,normal_pars_vertex:$u,normal_vertex:ef,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:nf,clearcoat_normal_fragment_maps:rf,clearcoat_pars_fragment:af,iridescence_pars_fragment:sf,output_fragment:of,packing:lf,premultiplied_alpha_fragment:cf,project_vertex:uf,dithering_fragment:ff,dithering_pars_fragment:hf,roughnessmap_fragment:df,roughnessmap_pars_fragment:pf,shadowmap_pars_fragment:mf,shadowmap_pars_vertex:gf,shadowmap_vertex:_f,shadowmask_pars_fragment:vf,skinbase_vertex:xf,skinning_pars_vertex:yf,skinning_vertex:Sf,skinnormal_vertex:Mf,specularmap_fragment:bf,specularmap_pars_fragment:wf,tonemapping_fragment:Tf,tonemapping_pars_fragment:Ef,transmission_fragment:Af,transmission_pars_fragment:Cf,uv_pars_fragment:Lf,uv_pars_vertex:Df,uv_vertex:Pf,uv2_pars_fragment:Rf,uv2_pars_vertex:Uf,uv2_vertex:Ff,worldpos_vertex:If,background_vert:Nf,background_frag:Of,cube_vert:zf,cube_frag:Bf,depth_vert:kf,depth_frag:Gf,distanceRGBA_vert:Vf,distanceRGBA_frag:Wf,equirect_vert:Hf,equirect_frag:Xf,linedashed_vert:qf,linedashed_frag:jf,meshbasic_vert:Yf,meshbasic_frag:Zf,meshlambert_vert:Jf,meshlambert_frag:Kf,meshmatcap_vert:Qf,meshmatcap_frag:$f,meshnormal_vert:eh,meshnormal_frag:th,meshphong_vert:nh,meshphong_frag:ih,meshphysical_vert:rh,meshphysical_frag:ah,meshtoon_vert:sh,meshtoon_frag:oh,points_vert:lh,points_frag:ch,shadow_vert:uh,shadow_frag:fh,sprite_vert:hh,sprite_frag:dh},be={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ct},uv2Transform:{value:new Ct},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}}},Zt={basic:{uniforms:pt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:pt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:pt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:pt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:pt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:pt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:pt([be.points,be.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:pt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:pt([be.common,be.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:pt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:pt([be.sprite,be.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},cube:{uniforms:pt([be.envmap,{opacity:{value:1}}]),vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:pt([be.common,be.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:pt([be.lights,be.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Zt.physical={uniforms:pt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function ph(c,e,t,r,i,n){const s=new qe(0);let a=i===!0?0:1,o,l,u=null,f=0,h=null;function m(p,d){let _=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=e.get(v));const M=c.xr,g=M.getSession&&M.getSession();g&&g.environmentBlendMode==="additive"&&(v=null),v===null?x(s,a):v&&v.isColor&&(x(v,1),_=!0),(c.autoClear||_)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),v&&(v.isCubeTexture||v.mapping===zr)?(l===void 0&&(l=new Lt(new er(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Ti(Zt.cube.uniforms),vertexShader:Zt.cube.vertexShader,fragmentShader:Zt.cube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||f!==v.version||h!==c.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=c.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(o===void 0&&(o=new Lt(new Vr(2,2),new Wn({name:"BackgroundMaterial",uniforms:Ti(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(o)),o.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),o.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==c.toneMapping)&&(o.material.needsUpdate=!0,u=v,f=v.version,h=c.toneMapping),o.layers.enableAll(),p.unshift(o,o.geometry,o.material,0,0,null))}function x(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,n)}return{getClearColor:function(){return s},setClearColor:function(p,d=1){s.set(p),a=d,x(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,x(s,a)},render:m}}function mh(c,e,t,r){const i=c.getParameter(34921),n=r.isWebGL2?null:e.get("OES_vertex_array_object"),s=r.isWebGL2||n!==null,a={},o=d(null);let l=o,u=!1;function f(C,V,G,te,j){let L=!1;if(s){const R=p(te,G,V);l!==R&&(l=R,m(l.object)),L=_(C,te,G,j),L&&v(C,te,G,j)}else{const R=V.wireframe===!0;(l.geometry!==te.id||l.program!==G.id||l.wireframe!==R)&&(l.geometry=te.id,l.program=G.id,l.wireframe=R,L=!0)}j!==null&&t.update(j,34963),(L||u)&&(u=!1,y(C,V,G,te),j!==null&&c.bindBuffer(34963,t.get(j).buffer))}function h(){return r.isWebGL2?c.createVertexArray():n.createVertexArrayOES()}function m(C){return r.isWebGL2?c.bindVertexArray(C):n.bindVertexArrayOES(C)}function x(C){return r.isWebGL2?c.deleteVertexArray(C):n.deleteVertexArrayOES(C)}function p(C,V,G){const te=G.wireframe===!0;let j=a[C.id];j===void 0&&(j={},a[C.id]=j);let L=j[V.id];L===void 0&&(L={},j[V.id]=L);let R=L[te];return R===void 0&&(R=d(h()),L[te]=R),R}function d(C){const V=[],G=[],te=[];for(let j=0;j<i;j++)V[j]=0,G[j]=0,te[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:G,attributeDivisors:te,object:C,attributes:{},index:null}}function _(C,V,G,te){const j=l.attributes,L=V.attributes;let R=0;const P=G.getAttributes();for(const O in P)if(P[O].location>=0){const J=j[O];let Q=L[O];if(Q===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),J===void 0||J.attribute!==Q||Q&&J.data!==Q.data)return!0;R++}return l.attributesNum!==R||l.index!==te}function v(C,V,G,te){const j={},L=V.attributes;let R=0;const P=G.getAttributes();for(const O in P)if(P[O].location>=0){let J=L[O];J===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(J=C.instanceColor));const Q={};Q.attribute=J,J&&J.data&&(Q.data=J.data),j[O]=Q,R++}l.attributes=j,l.attributesNum=R,l.index=te}function M(){const C=l.newAttributes;for(let V=0,G=C.length;V<G;V++)C[V]=0}function g(C){S(C,0)}function S(C,V){const G=l.newAttributes,te=l.enabledAttributes,j=l.attributeDivisors;G[C]=1,te[C]===0&&(c.enableVertexAttribArray(C),te[C]=1),j[C]!==V&&((r.isWebGL2?c:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,V),j[C]=V)}function w(){const C=l.newAttributes,V=l.enabledAttributes;for(let G=0,te=V.length;G<te;G++)V[G]!==C[G]&&(c.disableVertexAttribArray(G),V[G]=0)}function D(C,V,G,te,j,L){r.isWebGL2===!0&&(G===5124||G===5125)?c.vertexAttribIPointer(C,V,G,j,L):c.vertexAttribPointer(C,V,G,te,j,L)}function y(C,V,G,te){if(r.isWebGL2===!1&&(C.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const j=te.attributes,L=G.getAttributes(),R=V.defaultAttributeValues;for(const P in L){const O=L[P];if(O.location>=0){let X=j[P];if(X===void 0&&(P==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),P==="instanceColor"&&C.instanceColor&&(X=C.instanceColor)),X!==void 0){const J=X.normalized,Q=X.itemSize,z=t.get(X);if(z===void 0)continue;const $=z.buffer,ee=z.type,ae=z.bytesPerElement;if(X.isInterleavedBufferAttribute){const oe=X.data,he=oe.stride,re=X.offset;if(oe.isInstancedInterleavedBuffer){for(let Se=0;Se<O.locationSize;Se++)S(O.location+Se,oe.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Se=0;Se<O.locationSize;Se++)g(O.location+Se);c.bindBuffer(34962,$);for(let Se=0;Se<O.locationSize;Se++)D(O.location+Se,Q/O.locationSize,ee,J,he*ae,(re+Q/O.locationSize*Se)*ae)}else{if(X.isInstancedBufferAttribute){for(let oe=0;oe<O.locationSize;oe++)S(O.location+oe,X.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let oe=0;oe<O.locationSize;oe++)g(O.location+oe);c.bindBuffer(34962,$);for(let oe=0;oe<O.locationSize;oe++)D(O.location+oe,Q/O.locationSize,ee,J,Q*ae,Q/O.locationSize*oe*ae)}}else if(R!==void 0){const J=R[P];if(J!==void 0)switch(J.length){case 2:c.vertexAttrib2fv(O.location,J);break;case 3:c.vertexAttrib3fv(O.location,J);break;case 4:c.vertexAttrib4fv(O.location,J);break;default:c.vertexAttrib1fv(O.location,J)}}}}w()}function T(){F();for(const C in a){const V=a[C];for(const G in V){const te=V[G];for(const j in te)x(te[j].object),delete te[j];delete V[G]}delete a[C]}}function I(C){if(a[C.id]===void 0)return;const V=a[C.id];for(const G in V){const te=V[G];for(const j in te)x(te[j].object),delete te[j];delete V[G]}delete a[C.id]}function Y(C){for(const V in a){const G=a[V];if(G[C.id]===void 0)continue;const te=G[C.id];for(const j in te)x(te[j].object),delete te[j];delete G[C.id]}}function F(){U(),u=!0,l!==o&&(l=o,m(l.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:F,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:Y,initAttributes:M,enableAttribute:g,disableUnusedAttributes:w}}function gh(c,e,t,r){const i=r.isWebGL2;let n;function s(l){n=l}function a(l,u){c.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,f){if(f===0)return;let h,m;if(i)h=c,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](n,l,u,f),t.update(u,n,f)}this.setMode=s,this.render=a,this.renderInstances=o}function _h(c,e,t){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=c.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function n(D){if(D==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&c instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=c.getParameter(34930),h=c.getParameter(35660),m=c.getParameter(3379),x=c.getParameter(34076),p=c.getParameter(34921),d=c.getParameter(36347),_=c.getParameter(36348),v=c.getParameter(36349),M=h>0,g=s||e.has("OES_texture_float"),S=M&&g,w=s?c.getParameter(36183):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:n,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:M,floatFragmentTextures:g,floatVertexTextures:S,maxSamples:w}}function vh(c){const e=this;let t=null,r=0,i=!1,n=!1;const s=new Dn,a=new Ct,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const x=f.length!==0||h||r!==0||i;return i=h,t=u(f,m,0),r=f.length,x},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1,l()},this.setState=function(f,h,m){const x=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,_=c.get(f);if(!i||x===null||x.length===0||n&&!d)n?u(null):l();else{const v=n?0:r,M=v*4;let g=_.clippingState||null;o.value=g,g=u(x,h,M,m);for(let S=0;S!==M;++S)g[S]=t[S];_.clippingState=g,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,h,m,x){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=o.value,x!==!0||d===null){const _=m+p*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(d===null||d.length<_)&&(d=new Float32Array(_));for(let M=0,g=m;M!==p;++M,g+=4)s.copy(f[M]).applyMatrix4(v,a),s.normal.toArray(d,g),d[g+3]=s.constant}o.value=d,o.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function xh(c){let e=new WeakMap;function t(s,a){return a===Oa?s.mapping=Mi:a===za&&(s.mapping=bi),s}function r(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Oa||a===za)if(e.has(s)){const o=e.get(s).texture;return t(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const l=new Uc(o.height/2);return l.fromEquirectangularTexture(c,s),e.set(s,l),s.addEventListener("dispose",i),t(l.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const o=e.get(a);o!==void 0&&(e.delete(a),o.dispose())}function n(){e=new WeakMap}return{get:r,dispose:n}}class yh extends Zo{constructor(e=-1,t=1,r=1,i=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let n=r-e,s=r+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,a-=u*this.view.offsetY,o=a-u*this.view.height}this.projectionMatrix.makeOrthographic(n,s,a,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vi=4,to=[.125,.215,.35,.446,.526,.582],Rn=20,Pa=new yh,no=new qe;let Ra=null;const Pn=(1+Math.sqrt(5))/2,mi=1/Pn,io=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,Pn,mi),new q(0,Pn,-mi),new q(mi,0,Pn),new q(-mi,0,Pn),new q(Pn,mi,0),new q(-Pn,mi,0)];class ro{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){Ra=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,r,i,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=so(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra),e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:St,minFilter:St,generateMipmaps:!1,type:Zi,format:Kt,encoding:Gn,depthBuffer:!1},i=ao(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ao(e,t,r);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sh(n)),this._blurMaterial=Mh(n,e,t)}return i}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,r,i){const a=new Nt(90,1,t,r),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(no),u.toneMapping=sn,u.autoClear=!1;const m=new $i({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),x=new Lt(new er,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(no),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(a.up.set(0,o[_],0),a.lookAt(l[_],0,0)):v===1?(a.up.set(0,0,o[_]),a.lookAt(0,l[_],0)):(a.up.set(0,o[_],0),a.lookAt(0,0,l[_]));const M=this._cubeSize;Pr(i,v*M,_>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===Mi||e.mapping===bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=so());const n=i?this._cubemapMaterial:this._equirectMaterial,s=new Lt(this._lodPlanes[0],n),a=n.uniforms;a.envMap.value=e;const o=this._cubeSize;Pr(t,0,0,3*o,2*o),r.setRenderTarget(t),r.render(s,Pa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const n=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=io[(i-1)%io.length];this._blur(e,i-1,i,n,s)}t.autoClear=r}_blur(e,t,r,i,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,i,"latitudinal",n),this._halfBlur(s,e,r,r,i,"longitudinal",n)}_halfBlur(e,t,r,i,n,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Lt(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[r]-1,x=isFinite(n)?Math.PI/(2*m):2*Math.PI/(2*Rn-1),p=n/x,d=isFinite(n)?1+Math.floor(u*p):Rn;d>Rn&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Rn}`);const _=[];let v=0;for(let D=0;D<Rn;++D){const y=D/p,T=Math.exp(-y*y/2);_.push(T),D===0?v+=T:D<d&&(v+=2*T)}for(let D=0;D<_.length;D++)_[D]=_[D]/v;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=x,h.mipInt.value=M-r;const g=this._sizeLods[i],S=3*g*(i>M-vi?i-M+vi:0),w=4*(this._cubeSize-g);Pr(t,S,w,3*g,2*g),o.setRenderTarget(t),o.render(f,Pa)}}function Sh(c){const e=[],t=[],r=[];let i=c;const n=c-vi+1+to.length;for(let s=0;s<n;s++){const a=Math.pow(2,i);t.push(a);let o=1/a;s>c-vi?o=to[s-c+vi-1]:s===0&&(o=0),r.push(o);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,p=3,d=2,_=1,v=new Float32Array(p*x*m),M=new Float32Array(d*x*m),g=new Float32Array(_*x*m);for(let w=0;w<m;w++){const D=w%3*2/3-1,y=w>2?0:-1,T=[D,y,0,D+2/3,y,0,D+2/3,y+1,0,D,y,0,D+2/3,y+1,0,D,y+1,0];v.set(T,p*x*w),M.set(h,d*x*w);const I=[w,w,w,w,w,w];g.set(I,_*x*w)}const S=new ln;S.setAttribute("position",new Xt(v,p)),S.setAttribute("uv",new Xt(M,d)),S.setAttribute("faceIndex",new Xt(g,_)),e.push(S),i>vi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function ao(c,e,t){const r=new Vn(c,e,t);return r.texture.mapping=zr,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pr(c,e,t,r,i){c.viewport.set(e,t,r,i),c.scissor.set(e,t,r,i)}function Mh(c,e,t){const r=new Float32Array(Rn),i=new q(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function so(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function oo(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Za(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bh(c){let e=new WeakMap,t=null;function r(a){if(a&&a.isTexture){const o=a.mapping,l=o===Oa||o===za,u=o===Mi||o===bi;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new ro(c)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new ro(c));const h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",n),h.texture}else return null}}}return a}function i(a){let o=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&o++;return o===l}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function wh(c){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=c.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const i=t(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function Th(c,e,t,r){const i={},n=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",s),delete i[h.id];const m=n.get(h);m&&(e.remove(m),n.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function o(f){const h=f.attributes;for(const x in h)e.update(h[x],34962);const m=f.morphAttributes;for(const x in m){const p=m[x];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function l(f){const h=[],m=f.index,x=f.attributes.position;let p=0;if(m!==null){const v=m.array;p=m.version;for(let M=0,g=v.length;M<g;M+=3){const S=v[M+0],w=v[M+1],D=v[M+2];h.push(S,w,w,D,D,S)}}else{const v=x.array;p=x.version;for(let M=0,g=v.length/3-1;M<g;M+=3){const S=M+0,w=M+1,D=M+2;h.push(S,w,w,D,D,S)}}const d=new(ko(h)?jo:qo)(h,1);d.version=p;const _=n.get(f);_&&e.remove(_),n.set(f,d)}function u(f){const h=n.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return n.get(f)}return{get:a,update:o,getWireframeAttribute:u}}function Eh(c,e,t,r){const i=r.isWebGL2;let n;function s(h){n=h}let a,o;function l(h){a=h.type,o=h.bytesPerElement}function u(h,m){c.drawElements(n,m,a,h*o),t.update(m,n,1)}function f(h,m,x){if(x===0)return;let p,d;if(i)p=c,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](n,m,a,h*o,x),t.update(m,n,x)}this.setMode=s,this.setIndex=l,this.render=u,this.renderInstances=f}function Ah(c){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(n/3);break;case 1:t.lines+=a*(n/2);break;case 3:t.lines+=a*(n-1);break;case 2:t.lines+=a*n;break;case 0:t.points+=a*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function Ch(c,e){return c[0]-e[0]}function Lh(c,e){return Math.abs(e[1])-Math.abs(c[1])}function Dh(c,e,t){const r={},i=new Float32Array(8),n=new WeakMap,s=new at,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function o(l,u,f,h){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=x!==void 0?x.length:0;let d=n.get(u);if(d===void 0||d.count!==p){let V=function(){U.dispose(),n.delete(u),u.removeEventListener("dispose",V)};d!==void 0&&d.texture.dispose();const M=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let T=0;M===!0&&(T=1),g===!0&&(T=2),S===!0&&(T=3);let I=u.attributes.position.count*T,Y=1;I>e.maxTextureSize&&(Y=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*Y*4*p),U=new Ho(F,I,Y,p);U.type=Fn,U.needsUpdate=!0;const C=T*4;for(let G=0;G<p;G++){const te=w[G],j=D[G],L=y[G],R=I*Y*4*G;for(let P=0;P<te.count;P++){const O=P*C;M===!0&&(s.fromBufferAttribute(te,P),F[R+O+0]=s.x,F[R+O+1]=s.y,F[R+O+2]=s.z,F[R+O+3]=0),g===!0&&(s.fromBufferAttribute(j,P),F[R+O+4]=s.x,F[R+O+5]=s.y,F[R+O+6]=s.z,F[R+O+7]=0),S===!0&&(s.fromBufferAttribute(L,P),F[R+O+8]=s.x,F[R+O+9]=s.y,F[R+O+10]=s.z,F[R+O+11]=L.itemSize===4?s.w:1)}}d={count:p,texture:U,size:new Xe(I,Y)},n.set(u,d),u.addEventListener("dispose",V)}let _=0;for(let M=0;M<m.length;M++)_+=m[M];const v=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(c,"morphTargetBaseInfluence",v),h.getUniforms().setValue(c,"morphTargetInfluences",m),h.getUniforms().setValue(c,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(c,"morphTargetsTextureSize",d.size)}else{const x=m===void 0?0:m.length;let p=r[u.id];if(p===void 0||p.length!==x){p=[];for(let g=0;g<x;g++)p[g]=[g,0];r[u.id]=p}for(let g=0;g<x;g++){const S=p[g];S[0]=g,S[1]=m[g]}p.sort(Lh);for(let g=0;g<8;g++)g<x&&p[g][1]?(a[g][0]=p[g][0],a[g][1]=p[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(Ch);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let v=0;for(let g=0;g<8;g++){const S=a[g],w=S[0],D=S[1];w!==Number.MAX_SAFE_INTEGER&&D?(d&&u.getAttribute("morphTarget"+g)!==d[w]&&u.setAttribute("morphTarget"+g,d[w]),_&&u.getAttribute("morphNormal"+g)!==_[w]&&u.setAttribute("morphNormal"+g,_[w]),i[g]=D,v+=D):(d&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),_&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),i[g]=0)}const M=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(c,"morphTargetBaseInfluence",M),h.getUniforms().setValue(c,"morphTargetInfluences",i)}}return{update:o}}function Ph(c,e,t,r){let i=new WeakMap;function n(o){const l=r.render.frame,u=o.geometry,f=e.get(o,u);return i.get(f)!==l&&(e.update(f),i.set(f,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),t.update(o.instanceMatrix,34962),o.instanceColor!==null&&t.update(o.instanceColor,34962)),f}function s(){i=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:n,dispose:s}}const $o=new Ot,el=new Ho,tl=new _c,nl=new Jo,lo=[],co=[],uo=new Float32Array(16),fo=new Float32Array(9),ho=new Float32Array(4);function Ci(c,e,t){const r=c[0];if(r<=0||r>0)return c;const i=e*t;let n=lo[i];if(n===void 0&&(n=new Float32Array(i),lo[i]=n),e!==0){r.toArray(n,0);for(let s=1,a=0;s!==e;++s)a+=t,c[s].toArray(n,a)}return n}function _t(c,e){if(c.length!==e.length)return!1;for(let t=0,r=c.length;t<r;t++)if(c[t]!==e[t])return!1;return!0}function vt(c,e){for(let t=0,r=e.length;t<r;t++)c[t]=e[t]}function Wr(c,e){let t=co[e];t===void 0&&(t=new Int32Array(e),co[e]=t);for(let r=0;r!==e;++r)t[r]=c.allocateTextureUnit();return t}function Rh(c,e){const t=this.cache;t[0]!==e&&(c.uniform1f(this.addr,e),t[0]=e)}function Uh(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;c.uniform2fv(this.addr,e),vt(t,e)}}function Fh(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(c.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;c.uniform3fv(this.addr,e),vt(t,e)}}function Ih(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;c.uniform4fv(this.addr,e),vt(t,e)}}function Nh(c,e){const t=this.cache,r=e.elements;if(r===void 0){if(_t(t,e))return;c.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,r))return;ho.set(r),c.uniformMatrix2fv(this.addr,!1,ho),vt(t,r)}}function Oh(c,e){const t=this.cache,r=e.elements;if(r===void 0){if(_t(t,e))return;c.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,r))return;fo.set(r),c.uniformMatrix3fv(this.addr,!1,fo),vt(t,r)}}function zh(c,e){const t=this.cache,r=e.elements;if(r===void 0){if(_t(t,e))return;c.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,r))return;uo.set(r),c.uniformMatrix4fv(this.addr,!1,uo),vt(t,r)}}function Bh(c,e){const t=this.cache;t[0]!==e&&(c.uniform1i(this.addr,e),t[0]=e)}function kh(c,e){const t=this.cache;_t(t,e)||(c.uniform2iv(this.addr,e),vt(t,e))}function Gh(c,e){const t=this.cache;_t(t,e)||(c.uniform3iv(this.addr,e),vt(t,e))}function Vh(c,e){const t=this.cache;_t(t,e)||(c.uniform4iv(this.addr,e),vt(t,e))}function Wh(c,e){const t=this.cache;t[0]!==e&&(c.uniform1ui(this.addr,e),t[0]=e)}function Hh(c,e){const t=this.cache;_t(t,e)||(c.uniform2uiv(this.addr,e),vt(t,e))}function Xh(c,e){const t=this.cache;_t(t,e)||(c.uniform3uiv(this.addr,e),vt(t,e))}function qh(c,e){const t=this.cache;_t(t,e)||(c.uniform4uiv(this.addr,e),vt(t,e))}function jh(c,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(c.uniform1i(this.addr,i),r[0]=i),t.setTexture2D(e||$o,i)}function Yh(c,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(c.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||tl,i)}function Zh(c,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(c.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||nl,i)}function Jh(c,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(c.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||el,i)}function Kh(c){switch(c){case 5126:return Rh;case 35664:return Uh;case 35665:return Fh;case 35666:return Ih;case 35674:return Nh;case 35675:return Oh;case 35676:return zh;case 5124:case 35670:return Bh;case 35667:case 35671:return kh;case 35668:case 35672:return Gh;case 35669:case 35673:return Vh;case 5125:return Wh;case 36294:return Hh;case 36295:return Xh;case 36296:return qh;case 35678:case 36198:case 36298:case 36306:case 35682:return jh;case 35679:case 36299:case 36307:return Yh;case 35680:case 36300:case 36308:case 36293:return Zh;case 36289:case 36303:case 36311:case 36292:return Jh}}function Qh(c,e){c.uniform1fv(this.addr,e)}function $h(c,e){const t=Ci(e,this.size,2);c.uniform2fv(this.addr,t)}function ed(c,e){const t=Ci(e,this.size,3);c.uniform3fv(this.addr,t)}function td(c,e){const t=Ci(e,this.size,4);c.uniform4fv(this.addr,t)}function nd(c,e){const t=Ci(e,this.size,4);c.uniformMatrix2fv(this.addr,!1,t)}function id(c,e){const t=Ci(e,this.size,9);c.uniformMatrix3fv(this.addr,!1,t)}function rd(c,e){const t=Ci(e,this.size,16);c.uniformMatrix4fv(this.addr,!1,t)}function ad(c,e){c.uniform1iv(this.addr,e)}function sd(c,e){c.uniform2iv(this.addr,e)}function od(c,e){c.uniform3iv(this.addr,e)}function ld(c,e){c.uniform4iv(this.addr,e)}function cd(c,e){c.uniform1uiv(this.addr,e)}function ud(c,e){c.uniform2uiv(this.addr,e)}function fd(c,e){c.uniform3uiv(this.addr,e)}function hd(c,e){c.uniform4uiv(this.addr,e)}function dd(c,e,t){const r=e.length,i=Wr(t,r);c.uniform1iv(this.addr,i);for(let n=0;n!==r;++n)t.setTexture2D(e[n]||$o,i[n])}function pd(c,e,t){const r=e.length,i=Wr(t,r);c.uniform1iv(this.addr,i);for(let n=0;n!==r;++n)t.setTexture3D(e[n]||tl,i[n])}function md(c,e,t){const r=e.length,i=Wr(t,r);c.uniform1iv(this.addr,i);for(let n=0;n!==r;++n)t.setTextureCube(e[n]||nl,i[n])}function gd(c,e,t){const r=e.length,i=Wr(t,r);c.uniform1iv(this.addr,i);for(let n=0;n!==r;++n)t.setTexture2DArray(e[n]||el,i[n])}function _d(c){switch(c){case 5126:return Qh;case 35664:return $h;case 35665:return ed;case 35666:return td;case 35674:return nd;case 35675:return id;case 35676:return rd;case 5124:case 35670:return ad;case 35667:case 35671:return sd;case 35668:case 35672:return od;case 35669:case 35673:return ld;case 5125:return cd;case 36294:return ud;case 36295:return fd;case 36296:return hd;case 35678:case 36198:case 36298:case 36306:case 35682:return dd;case 35679:case 36299:case 36307:return pd;case 35680:case 36300:case 36308:case 36293:return md;case 36289:case 36303:case 36311:case 36292:return gd}}class vd{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Kh(t.type)}}class xd{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=_d(t.type)}}class yd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let n=0,s=i.length;n!==s;++n){const a=i[n];a.setValue(e,t[a.id],r)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function po(c,e){c.seq.push(e),c.map[e.id]=e}function Sd(c,e,t){const r=c.name,i=r.length;for(Ua.lastIndex=0;;){const n=Ua.exec(r),s=Ua.lastIndex;let a=n[1];const o=n[2]==="]",l=n[3];if(o&&(a=a|0),l===void 0||l==="["&&s+2===i){po(t,l===void 0?new vd(a,c,e):new xd(a,c,e));break}else{let f=t.map[a];f===void 0&&(f=new yd(a),po(t,f)),t=f}}}class Ir{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,35718);for(let i=0;i<r;++i){const n=e.getActiveUniform(t,i),s=e.getUniformLocation(t,n.name);Sd(n,s,this)}}setValue(e,t,r,i){const n=this.map[t];n!==void 0&&n.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let n=0,s=t.length;n!==s;++n){const a=t[n],o=r[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.id in t&&r.push(s)}return r}}function mo(c,e,t){const r=c.createShader(e);return c.shaderSource(r,t),c.compileShader(r),r}let Md=0;function bd(c,e){const t=c.split(`
`),r=[],i=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let s=i;s<n;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return r.join(`
`)}function wd(c){switch(c){case Gn:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function go(c,e,t){const r=c.getShaderParameter(e,35713),i=c.getShaderInfoLog(e).trim();if(r&&i==="")return"";const n=/ERROR: 0:(\d+)/.exec(i);if(n){const s=parseInt(n[1]);return t.toUpperCase()+`

`+i+`

`+bd(c.getShaderSource(e),s)}else return i}function Td(c,e){const t=wd(e);return"vec4 "+c+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ed(c,e){let t;switch(e){case Hl:t="Linear";break;case Xl:t="Reinhard";break;case ql:t="OptimizedCineon";break;case jl:t="ACESFilmic";break;case Yl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+c+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ad(c){return[c.extensionDerivatives||!!c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qi).join(`
`)}function Cd(c){const e=[];for(const t in c){const r=c[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Ld(c,e){const t={},r=c.getProgramParameter(e,35721);for(let i=0;i<r;i++){const n=c.getActiveAttrib(e,i),s=n.name;let a=1;n.type===35674&&(a=2),n.type===35675&&(a=3),n.type===35676&&(a=4),t[s]={type:n.type,location:c.getAttribLocation(e,s),locationSize:a}}return t}function qi(c){return c!==""}function _o(c,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vo(c,e){return c.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(c){return c.replace(Dd,Pd)}function Pd(c,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wa(t)}const Rd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xo(c){return c.replace(Rd,Ud)}function Ud(c,e,t,r){let i="";for(let n=parseInt(e);n<parseInt(t);n++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return i}function yo(c){let e="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?e+=`
#define HIGH_PRECISION`:c.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fd(c){let e="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===Uo?e="SHADOWMAP_TYPE_PCF":c.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function Id(c){let e="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case Mi:case bi:e="ENVMAP_TYPE_CUBE";break;case zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nd(c){let e="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Od(c){let e="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case No:e="ENVMAP_BLENDING_MULTIPLY";break;case Vl:e="ENVMAP_BLENDING_MIX";break;case Wl:e="ENVMAP_BLENDING_ADD";break}return e}function zd(c){const e=c.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function Bd(c,e,t,r){const i=c.getContext(),n=t.defines;let s=t.vertexShader,a=t.fragmentShader;const o=Fd(t),l=Id(t),u=Nd(t),f=Od(t),h=zd(t),m=t.isWebGL2?"":Ad(t),x=Cd(n),p=i.createProgram();let d,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[x].filter(qi).join(`
`),d.length>0&&(d+=`
`),_=[m,x].filter(qi).join(`
`),_.length>0&&(_+=`
`)):(d=[yo(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),_=[m,yo(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sn?"#define TONE_MAPPING":"",t.toneMapping!==sn?ze.tonemapping_pars_fragment:"",t.toneMapping!==sn?Ed("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,Td("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qi).join(`
`)),s=Wa(s),s=_o(s,t),s=vo(s,t),a=Wa(a),a=_o(a,t),a=vo(a,t),s=xo(s),a=xo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Gs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=v+d+s,g=v+_+a,S=mo(i,35633,M),w=mo(i,35632,g);if(i.attachShader(p,S),i.attachShader(p,w),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),c.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(S).trim(),Y=i.getShaderInfoLog(w).trim();let F=!0,U=!0;if(i.getProgramParameter(p,35714)===!1){F=!1;const C=go(i,S,"vertex"),V=go(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+C+`
`+V)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||Y==="")&&(U=!1);U&&(this.diagnostics={runnable:F,programLog:T,vertexShader:{log:I,prefix:d},fragmentShader:{log:Y,prefix:_}})}i.deleteShader(S),i.deleteShader(w);let D;this.getUniforms=function(){return D===void 0&&(D=new Ir(i,p)),D};let y;return this.getAttributes=function(){return y===void 0&&(y=Ld(i,p)),y},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Md++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=w,this}let kd=0;class Gd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),n=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Vd(e),t.set(e,r)),r}}class Vd{constructor(e){this.id=kd++,this.code=e,this.usedTimes=0}}function Wd(c,e,t,r,i,n,s){const a=new Xo,o=new Gd,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,T,I,Y,F){const U=Y.fog,C=F.geometry,V=y.isMeshStandardMaterial?Y.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),te=!!G&&G.mapping===zr?G.image.height:null,j=x[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const L=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,R=L!==void 0?L.length:0;let P=0;C.morphAttributes.position!==void 0&&(P=1),C.morphAttributes.normal!==void 0&&(P=2),C.morphAttributes.color!==void 0&&(P=3);let O,X,J,Q;if(j){const he=Zt[j];O=he.vertexShader,X=he.fragmentShader}else O=y.vertexShader,X=y.fragmentShader,o.update(y),J=o.getVertexShaderID(y),Q=o.getFragmentShaderID(y);const z=c.getRenderTarget(),$=y.alphaTest>0,ee=y.clearcoat>0,ae=y.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:y.type,vertexShader:O,fragmentShader:X,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:h,outputEncoding:z===null?c.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:Gn,map:!!y.map,matcap:!!y.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:te,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===dc,tangentSpaceNormalMap:y.normalMapType===hc,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===$e,clearcoat:ee,clearcoatMap:ee&&!!y.clearcoatMap,clearcoatRoughnessMap:ee&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ee&&!!y.clearcoatNormalMap,iridescence:ae,iridescenceMap:ae&&!!y.iridescenceMap,iridescenceThicknessMap:ae&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===yi,alphaMap:!!y.alphaMap,alphaTest:$,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!C.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:P,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:c.shadowMap.enabled&&I.length>0,shadowMapType:c.shadowMap.type,toneMapping:y.toneMapped?c.toneMapping:sn,physicallyCorrectLights:c.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jt,flipSided:y.side===Dt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)T.push(I),T.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(_(T,y),v(T,y),T.push(c.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function _(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),y.push(a.mask)}function M(y){const T=x[y.type];let I;if(T){const Y=Zt[T];I=Yo.clone(Y.uniforms)}else I=y.uniforms;return I}function g(y,T){let I;for(let Y=0,F=l.length;Y<F;Y++){const U=l[Y];if(U.cacheKey===T){I=U,++I.usedTimes;break}}return I===void 0&&(I=new Bd(c,T,y,n),l.push(I)),I}function S(y){if(--y.usedTimes===0){const T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),y.destroy()}}function w(y){o.remove(y)}function D(){o.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:g,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:D}}function Hd(){let c=new WeakMap;function e(n){let s=c.get(n);return s===void 0&&(s={},c.set(n,s)),s}function t(n){c.delete(n)}function r(n,s,a){c.get(n)[s]=a}function i(){c=new WeakMap}return{get:e,remove:t,update:r,dispose:i}}function Xd(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.material.id!==e.material.id?c.material.id-e.material.id:c.z!==e.z?c.z-e.z:c.id-e.id}function So(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.z!==e.z?e.z-c.z:c.id-e.id}function Mo(){const c=[];let e=0;const t=[],r=[],i=[];function n(){e=0,t.length=0,r.length=0,i.length=0}function s(f,h,m,x,p,d){let _=c[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:p,group:d},c[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=p,_.group=d),e++,_}function a(f,h,m,x,p,d){const _=s(f,h,m,x,p,d);m.transmission>0?r.push(_):m.transparent===!0?i.push(_):t.push(_)}function o(f,h,m,x,p,d){const _=s(f,h,m,x,p,d);m.transmission>0?r.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(f,h){t.length>1&&t.sort(f||Xd),r.length>1&&r.sort(h||So),i.length>1&&i.sort(h||So)}function u(){for(let f=e,h=c.length;f<h;f++){const m=c[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:i,init:n,push:a,unshift:o,finish:u,sort:l}}function qd(){let c=new WeakMap;function e(r,i){const n=c.get(r);let s;return n===void 0?(s=new Mo,c.set(r,[s])):i>=n.length?(s=new Mo,n.push(s)):s=n[i],s}function t(){c=new WeakMap}return{get:e,dispose:t}}function jd(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new qe};break;case"SpotLight":t={position:new q,direction:new q,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new q,halfWidth:new q,halfHeight:new q};break}return c[e.id]=t,t}}}function Yd(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[e.id]=t,t}}}let Zd=0;function Jd(c,e){return(e.castShadow?2:0)-(c.castShadow?2:0)+(e.map?1:0)-(c.map?1:0)}function Kd(c,e){const t=new jd,r=Yd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new q);const n=new q,s=new lt,a=new lt;function o(u,f){let h=0,m=0,x=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let p=0,d=0,_=0,v=0,M=0,g=0,S=0,w=0,D=0,y=0;u.sort(Jd);const T=f!==!0?Math.PI:1;for(let Y=0,F=u.length;Y<F;Y++){const U=u[Y],C=U.color,V=U.intensity,G=U.distance,te=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=C.r*V*T,m+=C.g*V*T,x+=C.b*V*T;else if(U.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(U.sh.coefficients[j],V);else if(U.isDirectionalLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const L=U.shadow,R=r.get(U);R.shadowBias=L.bias,R.shadowNormalBias=L.normalBias,R.shadowRadius=L.radius,R.shadowMapSize=L.mapSize,i.directionalShadow[p]=R,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=U.shadow.matrix,g++}i.directional[p]=j,p++}else if(U.isSpotLight){const j=t.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(C).multiplyScalar(V*T),j.distance=G,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,i.spot[_]=j;const L=U.shadow;if(U.map&&(i.spotLightMap[D]=U.map,D++,L.updateMatrices(U),U.castShadow&&y++),i.spotLightMatrix[_]=L.matrix,U.castShadow){const R=r.get(U);R.shadowBias=L.bias,R.shadowNormalBias=L.normalBias,R.shadowRadius=L.radius,R.shadowMapSize=L.mapSize,i.spotShadow[_]=R,i.spotShadowMap[_]=te,w++}_++}else if(U.isRectAreaLight){const j=t.get(U);j.color.copy(C).multiplyScalar(V),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),i.rectArea[v]=j,v++}else if(U.isPointLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*T),j.distance=U.distance,j.decay=U.decay,U.castShadow){const L=U.shadow,R=r.get(U);R.shadowBias=L.bias,R.shadowNormalBias=L.normalBias,R.shadowRadius=L.radius,R.shadowMapSize=L.mapSize,R.shadowCameraNear=L.camera.near,R.shadowCameraFar=L.camera.far,i.pointShadow[d]=R,i.pointShadowMap[d]=te,i.pointShadowMatrix[d]=U.shadow.matrix,S++}i.point[d]=j,d++}else if(U.isHemisphereLight){const j=t.get(U);j.skyColor.copy(U.color).multiplyScalar(V*T),j.groundColor.copy(U.groundColor).multiplyScalar(V*T),i.hemi[M]=j,M++}}v>0&&(e.isWebGL2||c.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=x;const I=i.hash;(I.directionalLength!==p||I.pointLength!==d||I.spotLength!==_||I.rectAreaLength!==v||I.hemiLength!==M||I.numDirectionalShadows!==g||I.numPointShadows!==S||I.numSpotShadows!==w||I.numSpotMaps!==D)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=v,i.point.length=d,i.hemi.length=M,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+D-y,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=y,I.directionalLength=p,I.pointLength=d,I.spotLength=_,I.rectAreaLength=v,I.hemiLength=M,I.numDirectionalShadows=g,I.numPointShadows=S,I.numSpotShadows=w,I.numSpotMaps=D,i.version=Zd++)}function l(u,f){let h=0,m=0,x=0,p=0,d=0;const _=f.matrixWorldInverse;for(let v=0,M=u.length;v<M;v++){const g=u[v];if(g.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(_),h++}else if(g.isSpotLight){const S=i.spot[x];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(_),x++}else if(g.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(_),a.identity(),s.copy(g.matrixWorld),s.premultiply(_),a.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(g.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(_),m++}else if(g.isHemisphereLight){const S=i.hemi[d];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(_),d++}}}return{setup:o,setupView:l,state:i}}function bo(c,e){const t=new Kd(c,e),r=[],i=[];function n(){r.length=0,i.length=0}function s(f){r.push(f)}function a(f){i.push(f)}function o(f){t.setup(r,f)}function l(f){t.setupView(r,f)}return{init:n,state:{lightsArray:r,shadowsArray:i,lights:t},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Qd(c,e){let t=new WeakMap;function r(n,s=0){const a=t.get(n);let o;return a===void 0?(o=new bo(c,e),t.set(n,[o])):s>=a.length?(o=new bo(c,e),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:r,dispose:i}}class il extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rl extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new q,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $d=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ep=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tp(c,e,t){let r=new Ko;const i=new Xe,n=new Xe,s=new at,a=new il({depthPacking:Bo}),o=new rl,l={},u=t.maxTextureSize,f={0:Dt,1:Bn,2:Jt},h=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:$d,fragmentShader:ep}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new ln;x.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Lt(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo,this.render=function(g,S,w){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||g.length===0)return;const D=c.getRenderTarget(),y=c.getActiveCubeFace(),T=c.getActiveMipmapLevel(),I=c.state;I.setBlending(Mn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let Y=0,F=g.length;Y<F;Y++){const U=g[Y],C=U.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;i.copy(C.mapSize);const V=C.getFrameExtents();if(i.multiply(V),n.copy(C.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(n.x=Math.floor(u/V.x),i.x=n.x*V.x,C.mapSize.x=n.x),i.y>u&&(n.y=Math.floor(u/V.y),i.y=n.y*V.y,C.mapSize.y=n.y)),C.map===null){const te=this.type!==Xi?{minFilter:yt,magFilter:yt}:{};C.map=new Vn(i.x,i.y,te),C.map.texture.name=U.name+".shadowMap",C.camera.updateProjectionMatrix()}c.setRenderTarget(C.map),c.clear();const G=C.getViewportCount();for(let te=0;te<G;te++){const j=C.getViewport(te);s.set(n.x*j.x,n.y*j.y,n.x*j.z,n.y*j.w),I.viewport(s),C.updateMatrices(U,te),r=C.getFrustum(),M(S,w,C.camera,U,this.type)}C.isPointLightShadow!==!0&&this.type===Xi&&_(C,w),C.needsUpdate=!1}d.needsUpdate=!1,c.setRenderTarget(D,y,T)};function _(g,S){const w=e.update(p);h.defines.VSM_SAMPLES!==g.blurSamples&&(h.defines.VSM_SAMPLES=g.blurSamples,m.defines.VSM_SAMPLES=g.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),g.mapPass===null&&(g.mapPass=new Vn(i.x,i.y)),h.uniforms.shadow_pass.value=g.map.texture,h.uniforms.resolution.value=g.mapSize,h.uniforms.radius.value=g.radius,c.setRenderTarget(g.mapPass),c.clear(),c.renderBufferDirect(S,null,w,h,p,null),m.uniforms.shadow_pass.value=g.mapPass.texture,m.uniforms.resolution.value=g.mapSize,m.uniforms.radius.value=g.radius,c.setRenderTarget(g.map),c.clear(),c.renderBufferDirect(S,null,w,m,p,null)}function v(g,S,w,D,y,T){let I=null;const Y=w.isPointLight===!0?g.customDistanceMaterial:g.customDepthMaterial;if(Y!==void 0?I=Y:I=w.isPointLight===!0?o:a,c.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const F=I.uuid,U=S.uuid;let C=l[F];C===void 0&&(C={},l[F]=C);let V=C[U];V===void 0&&(V=I.clone(),C[U]=V),I=V}return I.visible=S.visible,I.wireframe=S.wireframe,T===Xi?I.side=S.shadowSide!==null?S.shadowSide:S.side:I.side=S.shadowSide!==null?S.shadowSide:f[S.side],I.alphaMap=S.alphaMap,I.alphaTest=S.alphaTest,I.clipShadows=S.clipShadows,I.clippingPlanes=S.clippingPlanes,I.clipIntersection=S.clipIntersection,I.displacementMap=S.displacementMap,I.displacementScale=S.displacementScale,I.displacementBias=S.displacementBias,I.wireframeLinewidth=S.wireframeLinewidth,I.linewidth=S.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(w.matrixWorld),I.nearDistance=D,I.farDistance=y),I}function M(g,S,w,D,y){if(g.visible===!1)return;if(g.layers.test(S.layers)&&(g.isMesh||g.isLine||g.isPoints)&&(g.castShadow||g.receiveShadow&&y===Xi)&&(!g.frustumCulled||r.intersectsObject(g))){g.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,g.matrixWorld);const Y=e.update(g),F=g.material;if(Array.isArray(F)){const U=Y.groups;for(let C=0,V=U.length;C<V;C++){const G=U[C],te=F[G.materialIndex];if(te&&te.visible){const j=v(g,te,D,w.near,w.far,y);c.renderBufferDirect(w,null,Y,j,g,G)}}}else if(F.visible){const U=v(g,F,D,w.near,w.far,y);c.renderBufferDirect(w,null,Y,U,g,null)}}const I=g.children;for(let Y=0,F=I.length;Y<F;Y++)M(I[Y],S,w,D,y)}}function np(c,e,t){const r=t.isWebGL2;function i(){let N=!1;const ye=new at;let K=null;const pe=new at(0,0,0,0);return{setMask:function(Me){K!==Me&&!N&&(c.colorMask(Me,Me,Me,Me),K=Me)},setLocked:function(Me){N=Me},setClear:function(Me,Oe,ke,je,We){We===!0&&(Me*=je,Oe*=je,ke*=je),ye.set(Me,Oe,ke,je),pe.equals(ye)===!1&&(c.clearColor(Me,Oe,ke,je),pe.copy(ye))},reset:function(){N=!1,K=null,pe.set(-1,0,0,0)}}}function n(){let N=!1,ye=null,K=null,pe=null;return{setTest:function(Me){Me?$(2929):ee(2929)},setMask:function(Me){ye!==Me&&!N&&(c.depthMask(Me),ye=Me)},setFunc:function(Me){if(K!==Me){if(Me)switch(Me){case Il:c.depthFunc(512);break;case Nl:c.depthFunc(519);break;case Ol:c.depthFunc(513);break;case Na:c.depthFunc(515);break;case zl:c.depthFunc(514);break;case Bl:c.depthFunc(518);break;case kl:c.depthFunc(516);break;case Gl:c.depthFunc(517);break;default:c.depthFunc(515)}else c.depthFunc(515);K=Me}},setLocked:function(Me){N=Me},setClear:function(Me){pe!==Me&&(c.clearDepth(Me),pe=Me)},reset:function(){N=!1,ye=null,K=null,pe=null}}}function s(){let N=!1,ye=null,K=null,pe=null,Me=null,Oe=null,ke=null,je=null,We=null;return{setTest:function(Pe){N||(Pe?$(2960):ee(2960))},setMask:function(Pe){ye!==Pe&&!N&&(c.stencilMask(Pe),ye=Pe)},setFunc:function(Pe,Ye,Je){(K!==Pe||pe!==Ye||Me!==Je)&&(c.stencilFunc(Pe,Ye,Je),K=Pe,pe=Ye,Me=Je)},setOp:function(Pe,Ye,Je){(Oe!==Pe||ke!==Ye||je!==Je)&&(c.stencilOp(Pe,Ye,Je),Oe=Pe,ke=Ye,je=Je)},setLocked:function(Pe){N=Pe},setClear:function(Pe){We!==Pe&&(c.clearStencil(Pe),We=Pe)},reset:function(){N=!1,ye=null,K=null,pe=null,Me=null,Oe=null,ke=null,je=null,We=null}}}const a=new i,o=new n,l=new s,u=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,p=[],d=null,_=!1,v=null,M=null,g=null,S=null,w=null,D=null,y=null,T=!1,I=null,Y=null,F=null,U=null,C=null;const V=c.getParameter(35661);let G=!1,te=0;const j=c.getParameter(7938);j.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=te>=1):j.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=te>=2);let L=null,R={};const P=c.getParameter(3088),O=c.getParameter(2978),X=new at().fromArray(P),J=new at().fromArray(O);function Q(N,ye,K){const pe=new Uint8Array(4),Me=c.createTexture();c.bindTexture(N,Me),c.texParameteri(N,10241,9728),c.texParameteri(N,10240,9728);for(let Oe=0;Oe<K;Oe++)c.texImage2D(ye+Oe,0,6408,1,1,0,6408,5121,pe);return Me}const z={};z[3553]=Q(3553,3553,1),z[34067]=Q(34067,34069,6),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),$(2929),o.setFunc(Na),Ae(!1),Re(fs),$(2884),Le(Mn);function $(N){h[N]!==!0&&(c.enable(N),h[N]=!0)}function ee(N){h[N]!==!1&&(c.disable(N),h[N]=!1)}function ae(N,ye){return m[N]!==ye?(c.bindFramebuffer(N,ye),m[N]=ye,r&&(N===36009&&(m[36160]=ye),N===36160&&(m[36009]=ye)),!0):!1}function oe(N,ye){let K=p,pe=!1;if(N)if(K=x.get(ye),K===void 0&&(K=[],x.set(ye,K)),N.isWebGLMultipleRenderTargets){const Me=N.texture;if(K.length!==Me.length||K[0]!==36064){for(let Oe=0,ke=Me.length;Oe<ke;Oe++)K[Oe]=36064+Oe;K.length=Me.length,pe=!0}}else K[0]!==36064&&(K[0]=36064,pe=!0);else K[0]!==1029&&(K[0]=1029,pe=!0);pe&&(t.isWebGL2?c.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function he(N){return d!==N?(c.useProgram(N),d=N,!0):!1}const re={[_i]:32774,[wl]:32778,[Tl]:32779};if(r)re[ms]=32775,re[gs]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(re[ms]=N.MIN_EXT,re[gs]=N.MAX_EXT)}const Se={[El]:0,[Al]:1,[Cl]:768,[Fo]:770,[Fl]:776,[Rl]:774,[Dl]:772,[Ll]:769,[Io]:771,[Ul]:775,[Pl]:773};function Le(N,ye,K,pe,Me,Oe,ke,je){if(N===Mn){_===!0&&(ee(3042),_=!1);return}if(_===!1&&($(3042),_=!0),N!==bl){if(N!==v||je!==T){if((M!==_i||w!==_i)&&(c.blendEquation(32774),M=_i,w=_i),je)switch(N){case yi:c.blendFuncSeparate(1,771,1,771);break;case hs:c.blendFunc(1,1);break;case ds:c.blendFuncSeparate(0,769,0,1);break;case ps:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case yi:c.blendFuncSeparate(770,771,1,771);break;case hs:c.blendFunc(770,1);break;case ds:c.blendFuncSeparate(0,769,0,1);break;case ps:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,S=null,D=null,y=null,v=N,T=je}return}Me=Me||ye,Oe=Oe||K,ke=ke||pe,(ye!==M||Me!==w)&&(c.blendEquationSeparate(re[ye],re[Me]),M=ye,w=Me),(K!==g||pe!==S||Oe!==D||ke!==y)&&(c.blendFuncSeparate(Se[K],Se[pe],Se[Oe],Se[ke]),g=K,S=pe,D=Oe,y=ke),v=N,T=null}function Te(N,ye){N.side===Jt?ee(2884):$(2884);let K=N.side===Dt;ye&&(K=!K),Ae(K),N.blending===yi&&N.transparent===!1?Le(Mn):Le(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),a.setMask(N.colorWrite);const pe=N.stencilWrite;l.setTest(pe),pe&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),xe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?$(32926):ee(32926)}function Ae(N){I!==N&&(N?c.frontFace(2304):c.frontFace(2305),I=N)}function Re(N){N!==yl?($(2884),N!==Y&&(N===fs?c.cullFace(1029):N===Sl?c.cullFace(1028):c.cullFace(1032))):ee(2884),Y=N}function le(N){N!==F&&(G&&c.lineWidth(N),F=N)}function xe(N,ye,K){N?($(32823),(U!==ye||C!==K)&&(c.polygonOffset(ye,K),U=ye,C=K)):ee(32823)}function Ee(N){N?$(3089):ee(3089)}function ue(N){N===void 0&&(N=33984+V-1),L!==N&&(c.activeTexture(N),L=N)}function A(N,ye){L===null&&ue();let K=R[L];K===void 0&&(K={type:void 0,texture:void 0},R[L]=K),(K.type!==N||K.texture!==ye)&&(c.bindTexture(N,ye||z[N]),K.type=N,K.texture=ye)}function b(){const N=R[L];N!==void 0&&N.type!==void 0&&(c.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function B(){try{c.compressedTexImage2D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{c.texSubImage2D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{c.texSubImage3D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{c.texStorage2D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{c.texStorage3D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{c.texImage2D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{c.texImage3D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(N){X.equals(N)===!1&&(c.scissor(N.x,N.y,N.z,N.w),X.copy(N))}function _e(N){J.equals(N)===!1&&(c.viewport(N.x,N.y,N.z,N.w),J.copy(N))}function me(N,ye){let K=f.get(ye);K===void 0&&(K=new WeakMap,f.set(ye,K));let pe=K.get(N);pe===void 0&&(pe=c.getUniformBlockIndex(ye,N.name),K.set(N,pe))}function ve(N,ye){const pe=f.get(ye).get(N);u.get(N)!==pe&&(c.uniformBlockBinding(ye,pe,N.__bindingPointIndex),u.set(N,pe))}function Fe(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),r===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),h={},L=null,R={},m={},x=new WeakMap,p=[],d=null,_=!1,v=null,M=null,g=null,S=null,w=null,D=null,y=null,T=!1,I=null,Y=null,F=null,U=null,C=null,X.set(0,0,c.canvas.width,c.canvas.height),J.set(0,0,c.canvas.width,c.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:$,disable:ee,bindFramebuffer:ae,drawBuffers:oe,useProgram:he,setBlending:Le,setMaterial:Te,setFlipSided:Ae,setCullFace:Re,setLineWidth:le,setPolygonOffset:xe,setScissorTest:Ee,activeTexture:ue,bindTexture:A,unbindTexture:b,compressedTexImage2D:B,texImage2D:ge,texImage3D:de,updateUBOMapping:me,uniformBlockBinding:ve,texStorage2D:ce,texStorage3D:k,texSubImage2D:Z,texSubImage3D:se,compressedTexSubImage2D:fe,scissor:we,viewport:_e,reset:Fe}}function ip(c,e,t,r,i,n,s){const a=i.isWebGL2,o=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,b){return _?new OffscreenCanvas(A,b):Or("canvas")}function M(A,b,B,Z){let se=1;if((A.width>Z||A.height>Z)&&(se=Z/Math.max(A.width,A.height)),se<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const fe=b?Va:Math.floor,ce=fe(se*A.width),k=fe(se*A.height);p===void 0&&(p=v(ce,k));const ge=B?v(ce,k):p;return ge.width=ce,ge.height=k,ge.getContext("2d").drawImage(A,0,0,ce,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ce+"x"+k+")."),ge}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return Ws(A.width)&&Ws(A.height)}function S(A){return a?!1:A.wrapS!==Ht||A.wrapT!==Ht||A.minFilter!==yt&&A.minFilter!==St}function w(A,b){return A.generateMipmaps&&b&&A.minFilter!==yt&&A.minFilter!==St}function D(A){c.generateMipmap(A)}function y(A,b,B,Z,se=!1){if(a===!1)return b;if(A!==null){if(c[A]!==void 0)return c[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe=b;return b===6403&&(B===5126&&(fe=33326),B===5131&&(fe=33325),B===5121&&(fe=33321)),b===33319&&(B===5126&&(fe=33328),B===5131&&(fe=33327),B===5121&&(fe=33323)),b===6408&&(B===5126&&(fe=34836),B===5131&&(fe=34842),B===5121&&(fe=Z===$e&&se===!1?35907:32856),B===32819&&(fe=32854),B===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function T(A,b,B){return w(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==yt&&A.minFilter!==St?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function I(A){return A===yt||A===_s||A===vs?9728:9729}function Y(A){const b=A.target;b.removeEventListener("dispose",Y),U(b),b.isVideoTexture&&x.delete(b)}function F(A){const b=A.target;b.removeEventListener("dispose",F),V(b)}function U(A){const b=r.get(A);if(b.__webglInit===void 0)return;const B=A.source,Z=d.get(B);if(Z){const se=Z[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(A),Object.keys(Z).length===0&&d.delete(B)}r.remove(A)}function C(A){const b=r.get(A);c.deleteTexture(b.__webglTexture);const B=A.source,Z=d.get(B);delete Z[b.__cacheKey],s.memory.textures--}function V(A){const b=A.texture,B=r.get(A),Z=r.get(b);if(Z.__webglTexture!==void 0&&(c.deleteTexture(Z.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)c.deleteFramebuffer(B.__webglFramebuffer[se]),B.__webglDepthbuffer&&c.deleteRenderbuffer(B.__webglDepthbuffer[se]);else{if(c.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&c.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&c.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let se=0;se<B.__webglColorRenderbuffer.length;se++)B.__webglColorRenderbuffer[se]&&c.deleteRenderbuffer(B.__webglColorRenderbuffer[se]);B.__webglDepthRenderbuffer&&c.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let se=0,fe=b.length;se<fe;se++){const ce=r.get(b[se]);ce.__webglTexture&&(c.deleteTexture(ce.__webglTexture),s.memory.textures--),r.remove(b[se])}r.remove(b),r.remove(A)}let G=0;function te(){G=0}function j(){const A=G;return A>=o&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+o),G+=1,A}function L(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.encoding),b.join()}function R(A,b){const B=r.get(A);if(A.isVideoTexture&&Ee(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(B,A,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,B.__webglTexture)}function P(A,b){const B=r.get(A);if(A.version>0&&B.__version!==A.version){ee(B,A,b);return}t.activeTexture(33984+b),t.bindTexture(35866,B.__webglTexture)}function O(A,b){const B=r.get(A);if(A.version>0&&B.__version!==A.version){ee(B,A,b);return}t.activeTexture(33984+b),t.bindTexture(32879,B.__webglTexture)}function X(A,b){const B=r.get(A);if(A.version>0&&B.__version!==A.version){ae(B,A,b);return}t.activeTexture(33984+b),t.bindTexture(34067,B.__webglTexture)}const J={[Ba]:10497,[Ht]:33071,[ka]:33648},Q={[yt]:9728,[_s]:9984,[vs]:9986,[St]:9729,[Zl]:9985,[Br]:9987};function z(A,b,B){if(B?(c.texParameteri(A,10242,J[b.wrapS]),c.texParameteri(A,10243,J[b.wrapT]),(A===32879||A===35866)&&c.texParameteri(A,32882,J[b.wrapR]),c.texParameteri(A,10240,Q[b.magFilter]),c.texParameteri(A,10241,Q[b.minFilter])):(c.texParameteri(A,10242,33071),c.texParameteri(A,10243,33071),(A===32879||A===35866)&&c.texParameteri(A,32882,33071),(b.wrapS!==Ht||b.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(A,10240,I(b.magFilter)),c.texParameteri(A,10241,I(b.minFilter)),b.minFilter!==yt&&b.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(b.type===Fn&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Zi&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||r.get(b).__currentAnisotropy)&&(c.texParameterf(A,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy)}}function $(A,b){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",Y));const Z=b.source;let se=d.get(Z);se===void 0&&(se={},d.set(Z,se));const fe=L(b);if(fe!==A.__cacheKey){se[fe]===void 0&&(se[fe]={texture:c.createTexture(),usedTimes:0},s.memory.textures++,B=!0),se[fe].usedTimes++;const ce=se[A.__cacheKey];ce!==void 0&&(se[A.__cacheKey].usedTimes--,ce.usedTimes===0&&C(b)),A.__cacheKey=fe,A.__webglTexture=se[fe].texture}return B}function ee(A,b,B){let Z=3553;b.isDataArrayTexture&&(Z=35866),b.isData3DTexture&&(Z=32879);const se=$(A,b),fe=b.source;if(t.activeTexture(33984+B),t.bindTexture(Z,A.__webglTexture),fe.version!==fe.__currentVersion||se===!0){c.pixelStorei(37440,b.flipY),c.pixelStorei(37441,b.premultiplyAlpha),c.pixelStorei(3317,b.unpackAlignment),c.pixelStorei(37443,0);const ce=S(b)&&g(b.image)===!1;let k=M(b.image,ce,!1,u);k=ue(b,k);const ge=g(k)||a,de=n.convert(b.format,b.encoding);let we=n.convert(b.type),_e=y(b.internalFormat,de,we,b.encoding,b.isVideoTexture);z(Z,b,ge);let me;const ve=b.mipmaps,Fe=a&&b.isVideoTexture!==!0,N=fe.__currentVersion===void 0||se===!0,ye=T(b,k,ge);if(b.isDepthTexture)_e=6402,a?b.type===Fn?_e=36012:b.type===Un?_e=33190:b.type===Si?_e=35056:_e=33189:b.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===On&&_e===6402&&b.type!==zo&&b.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Un,we=n.convert(b.type)),b.format===wi&&_e===6402&&(_e=34041,b.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Si,we=n.convert(b.type))),N&&(Fe?t.texStorage2D(3553,1,_e,k.width,k.height):t.texImage2D(3553,0,_e,k.width,k.height,0,de,we,null));else if(b.isDataTexture)if(ve.length>0&&ge){Fe&&N&&t.texStorage2D(3553,ye,_e,ve[0].width,ve[0].height);for(let K=0,pe=ve.length;K<pe;K++)me=ve[K],Fe?t.texSubImage2D(3553,K,0,0,me.width,me.height,de,we,me.data):t.texImage2D(3553,K,_e,me.width,me.height,0,de,we,me.data);b.generateMipmaps=!1}else Fe?(N&&t.texStorage2D(3553,ye,_e,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,de,we,k.data)):t.texImage2D(3553,0,_e,k.width,k.height,0,de,we,k.data);else if(b.isCompressedTexture){Fe&&N&&t.texStorage2D(3553,ye,_e,ve[0].width,ve[0].height);for(let K=0,pe=ve.length;K<pe;K++)me=ve[K],b.format!==Kt?de!==null?Fe?t.compressedTexSubImage2D(3553,K,0,0,me.width,me.height,de,me.data):t.compressedTexImage2D(3553,K,_e,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(3553,K,0,0,me.width,me.height,de,we,me.data):t.texImage2D(3553,K,_e,me.width,me.height,0,de,we,me.data)}else if(b.isDataArrayTexture)Fe?(N&&t.texStorage3D(35866,ye,_e,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,de,we,k.data)):t.texImage3D(35866,0,_e,k.width,k.height,k.depth,0,de,we,k.data);else if(b.isData3DTexture)Fe?(N&&t.texStorage3D(32879,ye,_e,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,de,we,k.data)):t.texImage3D(32879,0,_e,k.width,k.height,k.depth,0,de,we,k.data);else if(b.isFramebufferTexture){if(N)if(Fe)t.texStorage2D(3553,ye,_e,k.width,k.height);else{let K=k.width,pe=k.height;for(let Me=0;Me<ye;Me++)t.texImage2D(3553,Me,_e,K,pe,0,de,we,null),K>>=1,pe>>=1}}else if(ve.length>0&&ge){Fe&&N&&t.texStorage2D(3553,ye,_e,ve[0].width,ve[0].height);for(let K=0,pe=ve.length;K<pe;K++)me=ve[K],Fe?t.texSubImage2D(3553,K,0,0,de,we,me):t.texImage2D(3553,K,_e,de,we,me);b.generateMipmaps=!1}else Fe?(N&&t.texStorage2D(3553,ye,_e,k.width,k.height),t.texSubImage2D(3553,0,0,0,de,we,k)):t.texImage2D(3553,0,_e,de,we,k);w(b,ge)&&D(Z),fe.__currentVersion=fe.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ae(A,b,B){if(b.image.length!==6)return;const Z=$(A,b),se=b.source;if(t.activeTexture(33984+B),t.bindTexture(34067,A.__webglTexture),se.version!==se.__currentVersion||Z===!0){c.pixelStorei(37440,b.flipY),c.pixelStorei(37441,b.premultiplyAlpha),c.pixelStorei(3317,b.unpackAlignment),c.pixelStorei(37443,0);const fe=b.isCompressedTexture||b.image[0].isCompressedTexture,ce=b.image[0]&&b.image[0].isDataTexture,k=[];for(let K=0;K<6;K++)!fe&&!ce?k[K]=M(b.image[K],!1,!0,l):k[K]=ce?b.image[K].image:b.image[K],k[K]=ue(b,k[K]);const ge=k[0],de=g(ge)||a,we=n.convert(b.format,b.encoding),_e=n.convert(b.type),me=y(b.internalFormat,we,_e,b.encoding),ve=a&&b.isVideoTexture!==!0,Fe=se.__currentVersion===void 0||Z===!0;let N=T(b,ge,de);z(34067,b,de);let ye;if(fe){ve&&Fe&&t.texStorage2D(34067,N,me,ge.width,ge.height);for(let K=0;K<6;K++){ye=k[K].mipmaps;for(let pe=0;pe<ye.length;pe++){const Me=ye[pe];b.format!==Kt?we!==null?ve?t.compressedTexSubImage2D(34069+K,pe,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(34069+K,pe,me,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?t.texSubImage2D(34069+K,pe,0,0,Me.width,Me.height,we,_e,Me.data):t.texImage2D(34069+K,pe,me,Me.width,Me.height,0,we,_e,Me.data)}}}else{ye=b.mipmaps,ve&&Fe&&(ye.length>0&&N++,t.texStorage2D(34067,N,me,k[0].width,k[0].height));for(let K=0;K<6;K++)if(ce){ve?t.texSubImage2D(34069+K,0,0,0,k[K].width,k[K].height,we,_e,k[K].data):t.texImage2D(34069+K,0,me,k[K].width,k[K].height,0,we,_e,k[K].data);for(let pe=0;pe<ye.length;pe++){const Oe=ye[pe].image[K].image;ve?t.texSubImage2D(34069+K,pe+1,0,0,Oe.width,Oe.height,we,_e,Oe.data):t.texImage2D(34069+K,pe+1,me,Oe.width,Oe.height,0,we,_e,Oe.data)}}else{ve?t.texSubImage2D(34069+K,0,0,0,we,_e,k[K]):t.texImage2D(34069+K,0,me,we,_e,k[K]);for(let pe=0;pe<ye.length;pe++){const Me=ye[pe];ve?t.texSubImage2D(34069+K,pe+1,0,0,we,_e,Me.image[K]):t.texImage2D(34069+K,pe+1,me,we,_e,Me.image[K])}}}w(b,de)&&D(34067),se.__currentVersion=se.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function oe(A,b,B,Z,se){const fe=n.convert(B.format,B.encoding),ce=n.convert(B.type),k=y(B.internalFormat,fe,ce,B.encoding);r.get(b).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,k,b.width,b.height,b.depth,0,fe,ce,null):t.texImage2D(se,0,k,b.width,b.height,0,fe,ce,null)),t.bindFramebuffer(36160,A),xe(b)?h.framebufferTexture2DMultisampleEXT(36160,Z,se,r.get(B).__webglTexture,0,le(b)):c.framebufferTexture2D(36160,Z,se,r.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function he(A,b,B){if(c.bindRenderbuffer(36161,A),b.depthBuffer&&!b.stencilBuffer){let Z=33189;if(B||xe(b)){const se=b.depthTexture;se&&se.isDepthTexture&&(se.type===Fn?Z=36012:se.type===Un&&(Z=33190));const fe=le(b);xe(b)?h.renderbufferStorageMultisampleEXT(36161,fe,Z,b.width,b.height):c.renderbufferStorageMultisample(36161,fe,Z,b.width,b.height)}else c.renderbufferStorage(36161,Z,b.width,b.height);c.framebufferRenderbuffer(36160,36096,36161,A)}else if(b.depthBuffer&&b.stencilBuffer){const Z=le(b);B&&xe(b)===!1?c.renderbufferStorageMultisample(36161,Z,35056,b.width,b.height):xe(b)?h.renderbufferStorageMultisampleEXT(36161,Z,35056,b.width,b.height):c.renderbufferStorage(36161,34041,b.width,b.height),c.framebufferRenderbuffer(36160,33306,36161,A)}else{const Z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let se=0;se<Z.length;se++){const fe=Z[se],ce=n.convert(fe.format,fe.encoding),k=n.convert(fe.type),ge=y(fe.internalFormat,ce,k,fe.encoding),de=le(b);B&&xe(b)===!1?c.renderbufferStorageMultisample(36161,de,ge,b.width,b.height):xe(b)?h.renderbufferStorageMultisampleEXT(36161,de,ge,b.width,b.height):c.renderbufferStorage(36161,ge,b.width,b.height)}}c.bindRenderbuffer(36161,null)}function re(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),R(b.depthTexture,0);const Z=r.get(b.depthTexture).__webglTexture,se=le(b);if(b.depthTexture.format===On)xe(b)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,se):c.framebufferTexture2D(36160,36096,3553,Z,0);else if(b.depthTexture.format===wi)xe(b)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,se):c.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function Se(A){const b=r.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");re(b.__webglFramebuffer,A)}else if(B){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(36160,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]=c.createRenderbuffer(),he(b.__webglDepthbuffer[Z],A,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=c.createRenderbuffer(),he(b.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Le(A,b,B){const Z=r.get(A);b!==void 0&&oe(Z.__webglFramebuffer,A,A.texture,36064,3553),B!==void 0&&Se(A)}function Te(A){const b=A.texture,B=r.get(A),Z=r.get(b);A.addEventListener("dispose",F),A.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=c.createTexture()),Z.__version=b.version,s.memory.textures++);const se=A.isWebGLCubeRenderTarget===!0,fe=A.isWebGLMultipleRenderTargets===!0,ce=g(A)||a;if(se){B.__webglFramebuffer=[];for(let k=0;k<6;k++)B.__webglFramebuffer[k]=c.createFramebuffer()}else{if(B.__webglFramebuffer=c.createFramebuffer(),fe)if(i.drawBuffers){const k=A.texture;for(let ge=0,de=k.length;ge<de;ge++){const we=r.get(k[ge]);we.__webglTexture===void 0&&(we.__webglTexture=c.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&xe(A)===!1){const k=fe?b:[b];B.__webglMultisampledFramebuffer=c.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let ge=0;ge<k.length;ge++){const de=k[ge];B.__webglColorRenderbuffer[ge]=c.createRenderbuffer(),c.bindRenderbuffer(36161,B.__webglColorRenderbuffer[ge]);const we=n.convert(de.format,de.encoding),_e=n.convert(de.type),me=y(de.internalFormat,we,_e,de.encoding),ve=le(A);c.renderbufferStorageMultisample(36161,ve,me,A.width,A.height),c.framebufferRenderbuffer(36160,36064+ge,36161,B.__webglColorRenderbuffer[ge])}c.bindRenderbuffer(36161,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=c.createRenderbuffer(),he(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,Z.__webglTexture),z(34067,b,ce);for(let k=0;k<6;k++)oe(B.__webglFramebuffer[k],A,b,36064,34069+k);w(b,ce)&&D(34067),t.unbindTexture()}else if(fe){const k=A.texture;for(let ge=0,de=k.length;ge<de;ge++){const we=k[ge],_e=r.get(we);t.bindTexture(3553,_e.__webglTexture),z(3553,we,ce),oe(B.__webglFramebuffer,A,we,36064+ge,3553),w(we,ce)&&D(3553)}t.unbindTexture()}else{let k=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?k=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,Z.__webglTexture),z(k,b,ce),oe(B.__webglFramebuffer,A,b,36064,k),w(b,ce)&&D(k),t.unbindTexture()}A.depthBuffer&&Se(A)}function Ae(A){const b=g(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Z=0,se=B.length;Z<se;Z++){const fe=B[Z];if(w(fe,b)){const ce=A.isWebGLCubeRenderTarget?34067:3553,k=r.get(fe).__webglTexture;t.bindTexture(ce,k),D(ce),t.unbindTexture()}}}function Re(A){if(a&&A.samples>0&&xe(A)===!1){const b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,Z=A.height;let se=16384;const fe=[],ce=A.stencilBuffer?33306:36096,k=r.get(A),ge=A.isWebGLMultipleRenderTargets===!0;if(ge)for(let de=0;de<b.length;de++)t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,k.__webglFramebuffer),c.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,k.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,k.__webglFramebuffer);for(let de=0;de<b.length;de++){fe.push(36064+de),A.depthBuffer&&fe.push(ce);const we=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(we===!1&&(A.depthBuffer&&(se|=256),A.stencilBuffer&&(se|=1024)),ge&&c.framebufferRenderbuffer(36008,36064,36161,k.__webglColorRenderbuffer[de]),we===!0&&(c.invalidateFramebuffer(36008,[ce]),c.invalidateFramebuffer(36009,[ce])),ge){const _e=r.get(b[de]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,_e,0)}c.blitFramebuffer(0,0,B,Z,0,0,B,Z,se,9728),m&&c.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ge)for(let de=0;de<b.length;de++){t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+de,36161,k.__webglColorRenderbuffer[de]);const we=r.get(b[de]).__webglTexture;t.bindFramebuffer(36160,k.__webglFramebuffer),c.framebufferTexture2D(36009,36064+de,3553,we,0)}t.bindFramebuffer(36009,k.__webglMultisampledFramebuffer)}}function le(A){return Math.min(f,A.samples)}function xe(A){const b=r.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ee(A){const b=s.render.frame;x.get(A)!==b&&(x.set(A,b),A.update())}function ue(A,b){const B=A.encoding,Z=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ga||B!==Gn&&(B===$e?a===!1?e.has("EXT_sRGB")===!0&&Z===Kt?(A.format=Ga,A.minFilter=St,A.generateMipmaps=!1):b=Vo.sRGBToLinear(b):(Z!==Kt||se!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),b}this.allocateTextureUnit=j,this.resetTextureUnits=te,this.setTexture2D=R,this.setTexture2DArray=P,this.setTexture3D=O,this.setTextureCube=X,this.rebindTextures=Le,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=xe}function rp(c,e,t){const r=t.isWebGL2;function i(n,s=null){let a;if(n===kn)return 5121;if(n===$l)return 32819;if(n===ec)return 32820;if(n===Jl)return 5120;if(n===Kl)return 5122;if(n===zo)return 5123;if(n===Ql)return 5124;if(n===Un)return 5125;if(n===Fn)return 5126;if(n===Zi)return r?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===tc)return 6406;if(n===Kt)return 6408;if(n===ic)return 6409;if(n===rc)return 6410;if(n===On)return 6402;if(n===wi)return 34041;if(n===ac)return 6403;if(n===nc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(n===Ga)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===sc)return 36244;if(n===oc)return 33319;if(n===lc)return 33320;if(n===cc)return 36249;if(n===ia||n===ra||n===aa||n===sa)if(s===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xs||n===ys||n===Ss||n===Ms)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===xs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ys)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ss)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ms)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===bs||n===ws)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===bs)return s===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ws)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ts||n===Es||n===As||n===Cs||n===Ls||n===Ds||n===Ps||n===Rs||n===Us||n===Fs||n===Is||n===Ns||n===Os||n===zs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ts)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Es)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===As)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cs)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ls)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ds)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ps)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rs)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Us)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fs)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Is)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ns)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Os)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zs)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Bs)return s===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return n===Si?r?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):c[n]!==void 0?c[n]:null}return{convert:i}}class ap extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rr extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sp={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,n=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,r);if(l.joints[p.jointName]===void 0){const v=new Rr;v.matrixAutoUpdate=!1,v.visible=!1,l.joints[p.jointName]=v,l.add(v)}const _=l.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&h>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&n!==null&&(i=n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),this}}class op extends Ot{constructor(e,t,r,i,n,s,a,o,l,u){if(u=u!==void 0?u:On,u!==On&&u!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===On&&(r=Un),r===void 0&&u===wi&&(r=Si),super(null,i,n,s,a,o,u,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yt,this.minFilter=o!==void 0?o:yt,this.flipY=!1,this.generateMipmaps=!1}}class lp extends Ei{constructor(e,t){super();const r=this;let i=null,n=1,s=null,a="local-floor",o=null,l=null,u=null,f=null,h=null,m=null;const x=t.getContextAttributes();let p=null,d=null;const _=[],v=[],M=new Nt;M.layers.enable(1),M.viewport=new at;const g=new Nt;g.layers.enable(2),g.viewport=new at;const S=[M,g],w=new ap;w.layers.enable(1),w.layers.enable(2);let D=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let R=_[L];return R===void 0&&(R=new Fa,_[L]=R),R.getTargetRaySpace()},this.getControllerGrip=function(L){let R=_[L];return R===void 0&&(R=new Fa,_[L]=R),R.getGripSpace()},this.getHand=function(L){let R=_[L];return R===void 0&&(R=new Fa,_[L]=R),R.getHandSpace()};function T(L){const R=v.indexOf(L.inputSource);if(R===-1)return;const P=_[R];P!==void 0&&P.dispatchEvent({type:L.type,data:L.inputSource})}function I(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",Y);for(let L=0;L<_.length;L++){const R=v[L];R!==null&&(v[L]=null,_[L].disconnect(R))}D=null,y=null,e.setRenderTarget(p),h=null,f=null,u=null,i=null,d=null,j.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){n=L,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||s},this.setReferenceSpace=function(L){o=L},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",I),i.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const R={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:n};h=new XRWebGLLayer(i,t,R),i.updateRenderState({baseLayer:h}),d=new Vn(h.framebufferWidth,h.framebufferHeight,{format:Kt,type:kn,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let R=null,P=null,O=null;x.depth&&(O=x.stencil?35056:33190,R=x.stencil?wi:On,P=x.stencil?Si:Un);const X={colorFormat:32856,depthFormat:O,scaleFactor:n};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(X),i.updateRenderState({layers:[f]}),d=new Vn(f.textureWidth,f.textureHeight,{format:Kt,type:kn,depthTexture:new op(f.textureWidth,f.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const J=e.properties.get(d);J.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),o=null,s=await i.requestReferenceSpace(a),j.setContext(i),j.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function Y(L){for(let R=0;R<L.removed.length;R++){const P=L.removed[R],O=v.indexOf(P);O>=0&&(v[O]=null,_[O].dispatchEvent({type:"disconnected",data:P}))}for(let R=0;R<L.added.length;R++){const P=L.added[R];let O=v.indexOf(P);if(O===-1){for(let J=0;J<_.length;J++)if(J>=v.length){v.push(P),O=J;break}else if(v[J]===null){v[J]=P,O=J;break}if(O===-1)break}const X=_[O];X&&X.dispatchEvent({type:"connected",data:P})}}const F=new q,U=new q;function C(L,R,P){F.setFromMatrixPosition(R.matrixWorld),U.setFromMatrixPosition(P.matrixWorld);const O=F.distanceTo(U),X=R.projectionMatrix.elements,J=P.projectionMatrix.elements,Q=X[14]/(X[10]-1),z=X[14]/(X[10]+1),$=(X[9]+1)/X[5],ee=(X[9]-1)/X[5],ae=(X[8]-1)/X[0],oe=(J[8]+1)/J[0],he=Q*ae,re=Q*oe,Se=O/(-ae+oe),Le=Se*-ae;R.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Le),L.translateZ(Se),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const Te=Q+Se,Ae=z+Se,Re=he-Le,le=re+(O-Le),xe=$*z/Ae*Te,Ee=ee*z/Ae*Te;L.projectionMatrix.makePerspective(Re,le,xe,Ee,Te,Ae)}function V(L,R){R===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(R.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;w.near=g.near=M.near=L.near,w.far=g.far=M.far=L.far,(D!==w.near||y!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,y=w.far);const R=L.parent,P=w.cameras;V(w,R);for(let X=0;X<P.length;X++)V(P[X],R);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),L.matrix.copy(w.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);const O=L.children;for(let X=0,J=O.length;X<J;X++)O[X].updateMatrixWorld(!0);P.length===2?C(w,M,g):w.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(L){f!==null&&(f.fixedFoveation=L),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=L)};let G=null;function te(L,R){if(l=R.getViewerPose(o||s),m=R,l!==null){const P=l.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let O=!1;P.length!==w.cameras.length&&(w.cameras.length=0,O=!0);for(let X=0;X<P.length;X++){const J=P[X];let Q=null;if(h!==null)Q=h.getViewport(J);else{const $=u.getViewSubImage(f,J);Q=$.viewport,X===0&&(e.setRenderTargetTextures(d,$.colorTexture,f.ignoreDepthValues?void 0:$.depthStencilTexture),e.setRenderTarget(d))}let z=S[X];z===void 0&&(z=new Nt,z.layers.enable(X),z.viewport=new at,S[X]=z),z.matrix.fromArray(J.transform.matrix),z.projectionMatrix.fromArray(J.projectionMatrix),z.viewport.set(Q.x,Q.y,Q.width,Q.height),X===0&&w.matrix.copy(z.matrix),O===!0&&w.cameras.push(z)}}for(let P=0;P<_.length;P++){const O=v[P],X=_[P];O!==null&&X!==void 0&&X.update(O,R,o||s)}G&&G(L,R),m=null}const j=new Qo;j.setAnimationLoop(te),this.setAnimationLoop=function(L){G=L},this.dispose=function(){}}}function cp(c,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,_,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,M)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),x(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(n(p,d),d.isLineDashedMaterial&&s(p,d)):d.isPointsMaterial?a(p,d,_,v):d.isSpriteMaterial?o(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Dt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Dt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const g=c.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*g}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let v;d.map?v=d.map:d.specularMap?v=d.specularMap:d.displacementMap?v=d.displacementMap:d.normalMap?v=d.normalMap:d.bumpMap?v=d.bumpMap:d.roughnessMap?v=d.roughnessMap:d.metalnessMap?v=d.metalnessMap:d.alphaMap?v=d.alphaMap:d.emissiveMap?v=d.emissiveMap:d.clearcoatMap?v=d.clearcoatMap:d.clearcoatNormalMap?v=d.clearcoatNormalMap:d.clearcoatRoughnessMap?v=d.clearcoatRoughnessMap:d.iridescenceMap?v=d.iridescenceMap:d.iridescenceThicknessMap?v=d.iridescenceThicknessMap:d.specularIntensityMap?v=d.specularIntensityMap:d.specularColorMap?v=d.specularColorMap:d.transmissionMap?v=d.transmissionMap:d.thicknessMap?v=d.thicknessMap:d.sheenColorMap?v=d.sheenColorMap:d.sheenRoughnessMap&&(v=d.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let M;d.aoMap?M=d.aoMap:d.lightMap&&(M=d.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function n(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function s(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=v*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M;d.map?M=d.map:d.alphaMap&&(M=d.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Dt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:r}}function up(c,e,t,r){let i={},n={},s=[];const a=t.isWebGL2?c.getParameter(35375):0;function o(v,M){const g=M.program;r.uniformBlockBinding(v,g)}function l(v,M){let g=i[v.id];g===void 0&&(x(v),g=u(v),i[v.id]=g,v.addEventListener("dispose",d));const S=M.program;r.updateUBOMapping(v,S);const w=e.render.frame;n[v.id]!==w&&(h(v),n[v.id]=w)}function u(v){const M=f();v.__bindingPointIndex=M;const g=c.createBuffer(),S=v.__size,w=v.usage;return c.bindBuffer(35345,g),c.bufferData(35345,S,w),c.bindBuffer(35345,null),c.bindBufferBase(35345,M,g),g}function f(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const M=i[v.id],g=v.uniforms,S=v.__cache;c.bindBuffer(35345,M);for(let w=0,D=g.length;w<D;w++){const y=g[w];if(m(y,w,S)===!0){const T=y.value,I=y.__offset;typeof T=="number"?(y.__data[0]=T,c.bufferSubData(35345,I,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):T.toArray(y.__data),c.bufferSubData(35345,I,y.__data))}}c.bindBuffer(35345,null)}function m(v,M,g){const S=v.value;if(g[M]===void 0)return typeof S=="number"?g[M]=S:g[M]=S.clone(),!0;if(typeof S=="number"){if(g[M]!==S)return g[M]=S,!0}else{const w=g[M];if(w.equals(S)===!1)return w.copy(S),!0}return!1}function x(v){const M=v.uniforms;let g=0;const S=16;let w=0;for(let D=0,y=M.length;D<y;D++){const T=M[D],I=p(T);if(T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=g,D>0){w=g%S;const Y=S-w;w!==0&&Y-I.boundary<0&&(g+=S-w,T.__offset=g)}g+=I.storage}return w=g%S,w>0&&(g+=S-w),v.__size=g,v.__cache={},this}function p(v){const M=v.value,g={boundary:0,storage:0};return typeof M=="number"?(g.boundary=4,g.storage=4):M.isVector2?(g.boundary=8,g.storage=8):M.isVector3||M.isColor?(g.boundary=16,g.storage=12):M.isVector4?(g.boundary=16,g.storage=16):M.isMatrix3?(g.boundary=48,g.storage=48):M.isMatrix4?(g.boundary=64,g.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),g}function d(v){const M=v.target;M.removeEventListener("dispose",d);const g=s.indexOf(M.__bindingPointIndex);s.splice(g,1),c.deleteBuffer(i[M.id]),delete i[M.id],delete n[M.id]}function _(){for(const v in i)c.deleteBuffer(i[v]);s=[],i={},n={}}return{bind:o,update:l,dispose:_}}function fp(){const c=Or("canvas");return c.style.display="block",c}function al(c={}){this.isWebGLRenderer=!0;const e=c.canvas!==void 0?c.canvas:fp(),t=c.context!==void 0?c.context:null,r=c.depth!==void 0?c.depth:!0,i=c.stencil!==void 0?c.stencil:!0,n=c.antialias!==void 0?c.antialias:!1,s=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,a=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,o=c.powerPreference!==void 0?c.powerPreference:"default",l=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=c.alpha!==void 0?c.alpha:!1;let f=null,h=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Gn,this.physicallyCorrectLights=!1,this.toneMapping=sn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,v=0,M=null,g=-1,S=null;const w=new at,D=new at;let y=null,T=e.width,I=e.height,Y=1,F=null,U=null;const C=new at(0,0,T,I),V=new at(0,0,T,I);let G=!1;const te=new Ko;let j=!1,L=!1,R=null;const P=new lt,O=new Xe,X=new q,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Q(){return M===null?Y:1}let z=t;function $(E,H){for(let ne=0;ne<E.length;ne++){const W=E[ne],ie=e.getContext(W,H);if(ie!==null)return ie}return null}try{const E={alpha:!0,depth:r,stencil:i,antialias:n,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:o,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ya}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Fe,!1),z===null){const H=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&H.shift(),z=$(H,E),z===null)throw $(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ee,ae,oe,he,re,Se,Le,Te,Ae,Re,le,xe,Ee,ue,A,b,B,Z,se,fe,ce,k,ge,de;function we(){ee=new wh(z),ae=new _h(z,ee,c),ee.init(ae),k=new rp(z,ee,ae),oe=new np(z,ee,ae),he=new Ah,re=new Hd,Se=new ip(z,ee,oe,re,ae,k,he),Le=new xh(p),Te=new bh(p),Ae=new Nc(z,ae),ge=new mh(z,ee,Ae,ae),Re=new Th(z,Ae,he,ge),le=new Ph(z,Re,Ae,he),se=new Dh(z,ae,Se),b=new vh(re),xe=new Wd(p,Le,Te,ee,ae,ge,b),Ee=new cp(p,re),ue=new qd,A=new Qd(ee,ae),Z=new ph(p,Le,oe,le,u,s),B=new tp(p,le,ae),de=new up(z,he,ae,oe),fe=new gh(z,ee,he,ae),ce=new Eh(z,ee,he,ae),he.programs=xe.programs,p.capabilities=ae,p.extensions=ee,p.properties=re,p.renderLists=ue,p.shadowMap=B,p.state=oe,p.info=he}we();const _e=new lp(p,z);this.xr=_e,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(T,I,!1))},this.getSize=function(E){return E.set(T,I)},this.setSize=function(E,H,ne){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,I=H,e.width=Math.floor(E*Y),e.height=Math.floor(H*Y),ne!==!1&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(T*Y,I*Y).floor()},this.setDrawingBufferSize=function(E,H,ne){T=E,I=H,Y=ne,e.width=Math.floor(E*ne),e.height=Math.floor(H*ne),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(C)},this.setViewport=function(E,H,ne,W){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,H,ne,W),oe.viewport(w.copy(C).multiplyScalar(Y).floor())},this.getScissor=function(E){return E.copy(V)},this.setScissor=function(E,H,ne,W){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,H,ne,W),oe.scissor(D.copy(V).multiplyScalar(Y).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(E){oe.setScissorTest(G=E)},this.setOpaqueSort=function(E){F=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(E=!0,H=!0,ne=!0){let W=0;E&&(W|=16384),H&&(W|=256),ne&&(W|=1024),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),ue.dispose(),A.dispose(),re.dispose(),Le.dispose(),Te.dispose(),le.dispose(),ge.dispose(),de.dispose(),xe.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Oe),_e.removeEventListener("sessionend",ke),R&&(R.dispose(),R=null),je.stop()};function me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const E=he.autoReset,H=B.enabled,ne=B.autoUpdate,W=B.needsUpdate,ie=B.type;we(),he.autoReset=E,B.enabled=H,B.autoUpdate=ne,B.needsUpdate=W,B.type=ie}function Fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function N(E){const H=E.target;H.removeEventListener("dispose",N),ye(H)}function ye(E){K(E),re.remove(E)}function K(E){const H=re.get(E).programs;H!==void 0&&(H.forEach(function(ne){xe.releaseProgram(ne)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,ne,W,ie,De){H===null&&(H=J);const Ue=ie.isMesh&&ie.matrixWorld.determinant()<0,Ne=it(E,H,ne,W,ie);oe.setMaterial(W,Ue);let Ie=ne.index;const He=ne.attributes.position;if(Ie===null){if(He===void 0||He.count===0)return}else if(Ie.count===0)return;let Be=1;W.wireframe===!0&&(Ie=Re.getWireframeAttribute(ne),Be=2),ge.setup(ie,W,Ne,ne,Ie);let Ve,Ke=fe;Ie!==null&&(Ve=Ae.get(Ie),Ke=ce,Ke.setIndex(Ve));const Rt=Ie!==null?Ie.count:He.count,qt=ne.drawRange.start*Be,jt=ne.drawRange.count*Be,Ce=De!==null?De.start*Be:0,Ge=De!==null?De.count*Be:1/0,cn=Math.max(qt,Ce),Qe=Math.min(Rt,qt+jt,Ce+Ge)-1,gt=Math.max(0,Qe-cn+1);if(gt!==0){if(ie.isMesh)W.wireframe===!0?(oe.setLineWidth(W.wireframeLinewidth*Q()),Ke.setMode(1)):Ke.setMode(4);else if(ie.isLine){let Ut=W.linewidth;Ut===void 0&&(Ut=1),oe.setLineWidth(Ut*Q()),ie.isLineSegments?Ke.setMode(1):ie.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else ie.isPoints?Ke.setMode(0):ie.isSprite&&Ke.setMode(4);if(ie.isInstancedMesh)Ke.renderInstances(cn,gt,ie.count);else if(ne.isInstancedBufferGeometry){const Ut=Math.min(ne.instanceCount,ne._maxInstanceCount);Ke.renderInstances(cn,gt,Ut)}else Ke.render(cn,gt)}},this.compile=function(E,H){function ne(W,ie,De){W.transparent===!0&&W.side===Jt?(W.side=Dt,W.needsUpdate=!0,et(W,ie,De),W.side=Bn,W.needsUpdate=!0,et(W,ie,De),W.side=Jt):et(W,ie,De)}h=A.get(E),h.init(),x.push(h),E.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),h.setupLights(p.physicallyCorrectLights),E.traverse(function(W){const ie=W.material;if(ie)if(Array.isArray(ie))for(let De=0;De<ie.length;De++){const Ue=ie[De];ne(Ue,E,W)}else ne(ie,E,W)}),x.pop(),h=null};let pe=null;function Me(E){pe&&pe(E)}function Oe(){je.stop()}function ke(){je.start()}const je=new Qo;je.setAnimationLoop(Me),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(E){pe=E,_e.setAnimationLoop(E),E===null?je.stop():je.start()},_e.addEventListener("sessionstart",Oe),_e.addEventListener("sessionend",ke),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(H),H=_e.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,H,M),h=A.get(E,x.length),h.init(),x.push(h),P.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),te.setFromProjectionMatrix(P),L=this.localClippingEnabled,j=b.init(this.clippingPlanes,L,H),f=ue.get(E,m.length),f.init(),m.push(f),We(E,H,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(F,U),j===!0&&b.beginShadows();const ne=h.state.shadowsArray;if(B.render(ne,E,H),j===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(f,E),h.setupLights(p.physicallyCorrectLights),H.isArrayCamera){const W=H.cameras;for(let ie=0,De=W.length;ie<De;ie++){const Ue=W[ie];Pe(f,E,Ue,Ue.viewport)}}else Pe(f,E,H);M!==null&&(Se.updateMultisampleRenderTarget(M),Se.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(p,E,H),ge.resetDefaultState(),g=-1,S=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function We(E,H,ne,W){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)ne=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){W&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(P);const Ue=le.update(E),Ne=E.material;Ne.visible&&f.push(E,Ue,Ne,ne,X.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==he.render.frame&&(E.skeleton.update(),E.skeleton.frame=he.render.frame),!E.frustumCulled||te.intersectsObject(E))){W&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(P);const Ue=le.update(E),Ne=E.material;if(Array.isArray(Ne)){const Ie=Ue.groups;for(let He=0,Be=Ie.length;He<Be;He++){const Ve=Ie[He],Ke=Ne[Ve.materialIndex];Ke&&Ke.visible&&f.push(E,Ue,Ke,ne,X.z,Ve)}}else Ne.visible&&f.push(E,Ue,Ne,ne,X.z,null)}}const De=E.children;for(let Ue=0,Ne=De.length;Ue<Ne;Ue++)We(De[Ue],H,ne,W)}function Pe(E,H,ne,W){const ie=E.opaque,De=E.transmissive,Ue=E.transparent;h.setupLightsView(ne),De.length>0&&Ye(ie,H,ne),W&&oe.viewport(w.copy(W)),ie.length>0&&Je(ie,H,ne),De.length>0&&Je(De,H,ne),Ue.length>0&&Je(Ue,H,ne),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Ye(E,H,ne){const W=ae.isWebGL2;R===null&&(R=new Vn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?Zi:kn,minFilter:Br,samples:W&&n===!0?4:0})),p.getDrawingBufferSize(O),W?R.setSize(O.x,O.y):R.setSize(Va(O.x),Va(O.y));const ie=p.getRenderTarget();p.setRenderTarget(R),p.clear();const De=p.toneMapping;p.toneMapping=sn,Je(E,H,ne),p.toneMapping=De,Se.updateMultisampleRenderTarget(R),Se.updateRenderTargetMipmap(R),p.setRenderTarget(ie)}function Je(E,H,ne){const W=H.isScene===!0?H.overrideMaterial:null;for(let ie=0,De=E.length;ie<De;ie++){const Ue=E[ie],Ne=Ue.object,Ie=Ue.geometry,He=W===null?Ue.material:W,Be=Ue.group;Ne.layers.test(ne.layers)&&Ze(Ne,H,ne,Ie,He,Be)}}function Ze(E,H,ne,W,ie,De){E.onBeforeRender(p,H,ne,W,ie,De),E.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ie.onBeforeRender(p,H,ne,W,E,De),ie.transparent===!0&&ie.side===Jt?(ie.side=Dt,ie.needsUpdate=!0,p.renderBufferDirect(ne,H,W,ie,E,De),ie.side=Bn,ie.needsUpdate=!0,p.renderBufferDirect(ne,H,W,ie,E,De),ie.side=Jt):p.renderBufferDirect(ne,H,W,ie,E,De),E.onAfterRender(p,H,ne,W,ie,De)}function et(E,H,ne){H.isScene!==!0&&(H=J);const W=re.get(E),ie=h.state.lights,De=h.state.shadowsArray,Ue=ie.state.version,Ne=xe.getParameters(E,ie.state,De,H,ne),Ie=xe.getProgramCacheKey(Ne);let He=W.programs;W.environment=E.isMeshStandardMaterial?H.environment:null,W.fog=H.fog,W.envMap=(E.isMeshStandardMaterial?Te:Le).get(E.envMap||W.environment),He===void 0&&(E.addEventListener("dispose",N),He=new Map,W.programs=He);let Be=He.get(Ie);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===Ue)return Mt(E,Ne),Be}else Ne.uniforms=xe.getUniforms(E),E.onBuild(ne,Ne,p),E.onBeforeCompile(Ne,p),Be=xe.acquireProgram(Ne,Ie),He.set(Ie,Be),W.uniforms=Ne.uniforms;const Ve=W.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=b.uniform),Mt(E,Ne),W.needsLights=mt(E),W.lightsStateVersion=Ue,W.needsLights&&(Ve.ambientLightColor.value=ie.state.ambient,Ve.lightProbe.value=ie.state.probe,Ve.directionalLights.value=ie.state.directional,Ve.directionalLightShadows.value=ie.state.directionalShadow,Ve.spotLights.value=ie.state.spot,Ve.spotLightShadows.value=ie.state.spotShadow,Ve.rectAreaLights.value=ie.state.rectArea,Ve.ltc_1.value=ie.state.rectAreaLTC1,Ve.ltc_2.value=ie.state.rectAreaLTC2,Ve.pointLights.value=ie.state.point,Ve.pointLightShadows.value=ie.state.pointShadow,Ve.hemisphereLights.value=ie.state.hemi,Ve.directionalShadowMap.value=ie.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ve.spotShadowMap.value=ie.state.spotShadowMap,Ve.spotLightMatrix.value=ie.state.spotLightMatrix,Ve.spotLightMap.value=ie.state.spotLightMap,Ve.pointShadowMap.value=ie.state.pointShadowMap,Ve.pointShadowMatrix.value=ie.state.pointShadowMatrix);const Ke=Be.getUniforms(),Rt=Ir.seqWithValue(Ke.seq,Ve);return W.currentProgram=Be,W.uniformsList=Rt,Be}function Mt(E,H){const ne=re.get(E);ne.outputEncoding=H.outputEncoding,ne.instancing=H.instancing,ne.skinning=H.skinning,ne.morphTargets=H.morphTargets,ne.morphNormals=H.morphNormals,ne.morphColors=H.morphColors,ne.morphTargetsCount=H.morphTargetsCount,ne.numClippingPlanes=H.numClippingPlanes,ne.numIntersection=H.numClipIntersection,ne.vertexAlphas=H.vertexAlphas,ne.vertexTangents=H.vertexTangents,ne.toneMapping=H.toneMapping}function it(E,H,ne,W,ie){H.isScene!==!0&&(H=J),Se.resetTextureUnits();const De=H.fog,Ue=W.isMeshStandardMaterial?H.environment:null,Ne=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Gn,Ie=(W.isMeshStandardMaterial?Te:Le).get(W.envMap||Ue),He=W.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Be=!!W.normalMap&&!!ne.attributes.tangent,Ve=!!ne.morphAttributes.position,Ke=!!ne.morphAttributes.normal,Rt=!!ne.morphAttributes.color,qt=W.toneMapped?p.toneMapping:sn,jt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ce=jt!==void 0?jt.length:0,Ge=re.get(W),cn=h.state.lights;if(j===!0&&(L===!0||E!==S)){const ct=E===S&&W.id===g;b.setState(W,E,ct)}let Qe=!1;W.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==cn.state.version||Ge.outputEncoding!==Ne||ie.isInstancedMesh&&Ge.instancing===!1||!ie.isInstancedMesh&&Ge.instancing===!0||ie.isSkinnedMesh&&Ge.skinning===!1||!ie.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Ie||W.fog===!0&&Ge.fog!==De||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==b.numPlanes||Ge.numIntersection!==b.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==Be||Ge.morphTargets!==Ve||Ge.morphNormals!==Ke||Ge.morphColors!==Rt||Ge.toneMapping!==qt||ae.isWebGL2===!0&&Ge.morphTargetsCount!==Ce)&&(Qe=!0):(Qe=!0,Ge.__version=W.version);let gt=Ge.currentProgram;Qe===!0&&(gt=et(W,H,ie));let Ut=!1,Yt=!1,un=!1;const st=gt.getUniforms(),Ft=Ge.uniforms;if(oe.useProgram(gt.program)&&(Ut=!0,Yt=!0,un=!0),W.id!==g&&(g=W.id,Yt=!0),Ut||S!==E){if(st.setValue(z,"projectionMatrix",E.projectionMatrix),ae.logarithmicDepthBuffer&&st.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,Yt=!0,un=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const ct=st.map.cameraPosition;ct!==void 0&&ct.setValue(z,X.setFromMatrixPosition(E.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&st.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ie.isSkinnedMesh)&&st.setValue(z,"viewMatrix",E.matrixWorldInverse)}if(ie.isSkinnedMesh){st.setOptional(z,ie,"bindMatrix"),st.setOptional(z,ie,"bindMatrixInverse");const ct=ie.skeleton;ct&&(ae.floatVertexTextures?(ct.boneTexture===null&&ct.computeBoneTexture(),st.setValue(z,"boneTexture",ct.boneTexture,Se),st.setValue(z,"boneTextureSize",ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zn=ne.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0&&ae.isWebGL2===!0)&&se.update(ie,ne,W,gt),(Yt||Ge.receiveShadow!==ie.receiveShadow)&&(Ge.receiveShadow=ie.receiveShadow,st.setValue(z,"receiveShadow",ie.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ft.envMap.value=Ie,Ft.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Yt&&(st.setValue(z,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&tt(Ft,un),De&&W.fog===!0&&Ee.refreshFogUniforms(Ft,De),Ee.refreshMaterialUniforms(Ft,W,Y,I,R),Ir.upload(z,Ge.uniformsList,Ft,Se)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ir.upload(z,Ge.uniformsList,Ft,Se),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&st.setValue(z,"center",ie.center),st.setValue(z,"modelViewMatrix",ie.modelViewMatrix),st.setValue(z,"normalMatrix",ie.normalMatrix),st.setValue(z,"modelMatrix",ie.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ct=W.uniformsGroups;for(let Jn=0,wn=ct.length;Jn<wn;Jn++)if(ae.isWebGL2){const Kn=ct[Jn];de.update(Kn,gt),de.bind(Kn,gt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gt}function tt(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function mt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,H,ne){re.get(E.texture).__webglTexture=H,re.get(E.depthTexture).__webglTexture=ne;const W=re.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=ne===void 0,W.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,H){const ne=re.get(E);ne.__webglFramebuffer=H,ne.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,ne=0){M=E,_=H,v=ne;let W=!0;if(E){const Ie=re.get(E);Ie.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),W=!1):Ie.__webglFramebuffer===void 0?Se.setupRenderTarget(E):Ie.__hasExternalTextures&&Se.rebindTextures(E,re.get(E.texture).__webglTexture,re.get(E.depthTexture).__webglTexture)}let ie=null,De=!1,Ue=!1;if(E){const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture)&&(Ue=!0);const He=re.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ie=He[H],De=!0):ae.isWebGL2&&E.samples>0&&Se.useMultisampledRTT(E)===!1?ie=re.get(E).__webglMultisampledFramebuffer:ie=He,w.copy(E.viewport),D.copy(E.scissor),y=E.scissorTest}else w.copy(C).multiplyScalar(Y).floor(),D.copy(V).multiplyScalar(Y).floor(),y=G;if(oe.bindFramebuffer(36160,ie)&&ae.drawBuffers&&W&&oe.drawBuffers(E,ie),oe.viewport(w),oe.scissor(D),oe.setScissorTest(y),De){const Ie=re.get(E.texture);z.framebufferTexture2D(36160,36064,34069+H,Ie.__webglTexture,ne)}else if(Ue){const Ie=re.get(E.texture),He=H||0;z.framebufferTextureLayer(36160,36064,Ie.__webglTexture,ne||0,He)}g=-1},this.readRenderTargetPixels=function(E,H,ne,W,ie,De,Ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){oe.bindFramebuffer(36160,Ne);try{const Ie=E.texture,He=Ie.format,Be=Ie.type;if(He!==Kt&&k.convert(He)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Be===Zi&&(ee.has("EXT_color_buffer_half_float")||ae.isWebGL2&&ee.has("EXT_color_buffer_float"));if(Be!==kn&&k.convert(Be)!==z.getParameter(35738)&&!(Be===Fn&&(ae.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-W&&ne>=0&&ne<=E.height-ie&&z.readPixels(H,ne,W,ie,k.convert(He),k.convert(Be),De)}finally{const Ie=M!==null?re.get(M).__webglFramebuffer:null;oe.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(E,H,ne=0){const W=Math.pow(2,-ne),ie=Math.floor(H.image.width*W),De=Math.floor(H.image.height*W);Se.setTexture2D(H,0),z.copyTexSubImage2D(3553,ne,0,0,E.x,E.y,ie,De),oe.unbindTexture()},this.copyTextureToTexture=function(E,H,ne,W=0){const ie=H.image.width,De=H.image.height,Ue=k.convert(ne.format),Ne=k.convert(ne.type);Se.setTexture2D(ne,0),z.pixelStorei(37440,ne.flipY),z.pixelStorei(37441,ne.premultiplyAlpha),z.pixelStorei(3317,ne.unpackAlignment),H.isDataTexture?z.texSubImage2D(3553,W,E.x,E.y,ie,De,Ue,Ne,H.image.data):H.isCompressedTexture?z.compressedTexSubImage2D(3553,W,E.x,E.y,H.mipmaps[0].width,H.mipmaps[0].height,Ue,H.mipmaps[0].data):z.texSubImage2D(3553,W,E.x,E.y,Ue,Ne,H.image),W===0&&ne.generateMipmaps&&z.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(E,H,ne,W,ie=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=E.max.x-E.min.x+1,Ue=E.max.y-E.min.y+1,Ne=E.max.z-E.min.z+1,Ie=k.convert(W.format),He=k.convert(W.type);let Be;if(W.isData3DTexture)Se.setTexture3D(W,0),Be=32879;else if(W.isDataArrayTexture)Se.setTexture2DArray(W,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,W.flipY),z.pixelStorei(37441,W.premultiplyAlpha),z.pixelStorei(3317,W.unpackAlignment);const Ve=z.getParameter(3314),Ke=z.getParameter(32878),Rt=z.getParameter(3316),qt=z.getParameter(3315),jt=z.getParameter(32877),Ce=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;z.pixelStorei(3314,Ce.width),z.pixelStorei(32878,Ce.height),z.pixelStorei(3316,E.min.x),z.pixelStorei(3315,E.min.y),z.pixelStorei(32877,E.min.z),ne.isDataTexture||ne.isData3DTexture?z.texSubImage3D(Be,ie,H.x,H.y,H.z,De,Ue,Ne,Ie,He,Ce.data):ne.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Be,ie,H.x,H.y,H.z,De,Ue,Ne,Ie,Ce.data)):z.texSubImage3D(Be,ie,H.x,H.y,H.z,De,Ue,Ne,Ie,He,Ce),z.pixelStorei(3314,Ve),z.pixelStorei(32878,Ke),z.pixelStorei(3316,Rt),z.pixelStorei(3315,qt),z.pixelStorei(32877,jt),ie===0&&W.generateMipmaps&&z.generateMipmap(Be),oe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Se.setTextureCube(E,0):E.isData3DTexture?Se.setTexture3D(E,0):E.isDataArrayTexture?Se.setTexture2DArray(E,0):Se.setTexture2D(E,0),oe.unbindTexture()},this.resetState=function(){_=0,v=0,M=null,oe.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class hp extends al{}hp.prototype.isWebGL1Renderer=!0;class dp extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class pp extends Xt{constructor(e,t,r,i=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class mp extends ln{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ha extends Vr{constructor(e,t,r,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,r,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);function Ja(){var c=0,e=[],t,r=0,i=0;function n(_,v){var M=Ja();function g(){var S=c>0?_:v;if(p(S))try{var w=S(t);w===M&&x();var D=h(w);D?D.call(w,M.resolve,M.reject):M.resolve(w)}catch(y){M.reject(y)}else M[c>0?"resolve":"reject"](t)}return e.push(g),c&&l(),M}var s=m(function(_){i||o(1,_)}),a=m(function(_){i||o(-1,_)});function o(_,v){i++;var M=0;try{v===d&&x();var g=_>0&&h(v);g?g.call(v,m(function(S){M++,o(1,S)}),m(function(S){M++,o(-1,S)})):(c=_,t=v,l())}catch(S){!c&&!M&&o(-1,S)}}function l(){r||(setTimeout(u,0),r=1)}function u(){var _=e;r=0,e=[],_.forEach(f)}function f(_){_()}function h(_){var v=_&&(p(_)||typeof _=="object")&&_.then;return p(v)&&v}function m(_){var v=0;return function(){for(var M=[],g=arguments.length;g--;)M[g]=arguments[g];v++||_.apply(this,M)}}function x(){throw new TypeError("Chaining cycle detected")}var p=function(_){return typeof _=="function"},d={then:n,resolve:s,reject:a};return d}function sl(){var c,e,t=new Promise(function(r,i){c=r,e=i});return{then:t.then.bind(t),resolve:c,reject:e}}Ja.all=sl.all=function(c){var e=0,t=[],r=on();return c.length===0?r.resolve([]):c.forEach(function(i,n){var s=on();s.resolve(i),s.then(function(a){e++,t[n]=a,e===c.length&&r.resolve(t)},r.reject)}),r};var on=typeof Promise=="function"?sl:Ja;function gp(){var c=Object.create(null);function e(i,n){var s=i.id,a=i.name,o=i.dependencies;o===void 0&&(o=[]);var l=i.init;l===void 0&&(l=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!c[s])try{o=o.map(function(h){return h&&h.isWorkerModule&&(e(h,function(m){if(m instanceof Error)throw m}),h=c[h.id].value),h}),l=r("<"+a+">.init",l),u&&(u=r("<"+a+">.getTransferables",u));var f=null;typeof l=="function"?f=l.apply(void 0,o):console.error("worker module init function failed to rehydrate"),c[s]={id:s,value:f,getTransferables:u},n(f)}catch(h){h&&h.noLog||console.error(h),n(h)}}function t(i,n){var s,a=i.id,o=i.args;(!c[a]||typeof c[a].value!="function")&&n(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var l=(s=c[a]).value.apply(s,o);l&&typeof l.then=="function"?l.then(u,function(f){return n(f instanceof Error?f:new Error(""+f))}):u(l)}catch(f){n(f)}function u(f){try{var h=c[a].getTransferables&&c[a].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),n(f,h)}catch(m){console.error(m),n(m)}}}function r(i,n){var s=void 0;self.troikaDefine=function(o){return s=o};var a=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+n+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(o){console.error(o)}return URL.revokeObjectURL(a),delete self.troikaDefine,s}self.addEventListener("message",function(i){var n=i.data,s=n.messageId,a=n.action,o=n.data;try{a==="registerModule"&&e(o,function(l){l instanceof Error?postMessage({messageId:s,success:!1,error:l.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof l=="function"}})}),a==="callModule"&&t(o,function(l,u){l instanceof Error?postMessage({messageId:s,success:!1,error:l.message}):postMessage({messageId:s,success:!0,result:l},u||void 0)})}catch(l){postMessage({messageId:s,success:!1,error:l.stack})}})}function _p(c){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=c.dependencies,r=c.init;t=Array.isArray(t)?t.map(function(n){return n&&n._getInitResult?n._getInitResult():n}):[];var i=on.all(t).then(function(n){return r.apply(null,n)});return e._getInitResult=function(){return i},i},e}var ol=function(){var c=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),c=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return ol=function(){return c},c},vp=0,xp=0,Ia=!1,ji=Object.create(null),Yi=Object.create(null),Xa=Object.create(null);function Li(c){if((!c||typeof c.init!="function")&&!Ia)throw new Error("requires `options.init` function");var e=c.dependencies,t=c.init,r=c.getTransferables,i=c.workerId;if(!ol())return _p(c);i==null&&(i="#default");var n="workerModule"+ ++vp,s=c.name||n,a=null;e=e&&e.map(function(l){return typeof l=="function"&&!l.workerModuleData&&(Ia=!0,l=Li({workerId:i,name:"<"+s+"> function dependency: "+l.name,init:`function(){return (
`+Nr(l)+`
)}`}),Ia=!1),l&&l.workerModuleData&&(l=l.workerModuleData),l});function o(){for(var l=[],u=arguments.length;u--;)l[u]=arguments[u];if(!a){a=wo(i,"registerModule",o.workerModuleData);var f=function(){a=null,Yi[i].delete(f)};(Yi[i]||(Yi[i]=new Set)).add(f)}return a.then(function(h){var m=h.isCallable;if(m)return wo(i,"callModule",{id:n,args:l});throw new Error("Worker module function was called but `init` did not return a callable function")})}return o.workerModuleData={isWorkerModule:!0,id:n,name:s,dependencies:e,init:Nr(t),getTransferables:r&&Nr(r)},o}function yp(c){Yi[c]&&Yi[c].forEach(function(e){e()}),ji[c]&&(ji[c].terminate(),delete ji[c])}function Nr(c){var e=c.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Sp(c){var e=ji[c];if(!e){var t=Nr(gp);e=ji[c]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+c.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var i=r.data,n=i.messageId,s=Xa[n];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete Xa[n],s(i)}}return e}function wo(c,e,t){var r=on(),i=++xp;return Xa[i]=function(n){n.success?r.resolve(n.result):r.reject(new Error("Error in worker "+e+" call: "+n.error))},Sp(c).postMessage({messageId:i,action:e,data:t}),r}var Mp=Li({name:"Thenable",dependencies:[on],init:function(c){return c}});function ll(){var c=function(e){function t(L,R,P,O,X,J,Q,z){var $=1-Q;z.x=$*$*L+2*$*Q*P+Q*Q*X,z.y=$*$*R+2*$*Q*O+Q*Q*J}function r(L,R,P,O,X,J,Q,z,$,ee){var ae=1-$;ee.x=ae*ae*ae*L+3*ae*ae*$*P+3*ae*$*$*X+$*$*$*Q,ee.y=ae*ae*ae*R+3*ae*ae*$*O+3*ae*$*$*J+$*$*$*z}function i(L,R){for(var P=/([MLQCZ])([^MLQCZ]*)/g,O,X,J,Q,z;O=P.exec(L);){var $=O[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ee){return parseFloat(ee)});switch(O[1]){case"M":Q=X=$[0],z=J=$[1];break;case"L":($[0]!==Q||$[1]!==z)&&R("L",Q,z,Q=$[0],z=$[1]);break;case"Q":{R("Q",Q,z,Q=$[2],z=$[3],$[0],$[1]);break}case"C":{R("C",Q,z,Q=$[4],z=$[5],$[0],$[1],$[2],$[3]);break}case"Z":(Q!==X||z!==J)&&R("L",Q,z,X,J);break}}}function n(L,R,P){P===void 0&&(P=16);var O={x:0,y:0};i(L,function(X,J,Q,z,$,ee,ae,oe,he){switch(X){case"L":R(J,Q,z,$);break;case"Q":{for(var re=J,Se=Q,Le=1;Le<P;Le++)t(J,Q,ee,ae,z,$,Le/(P-1),O),R(re,Se,O.x,O.y),re=O.x,Se=O.y;break}case"C":{for(var Te=J,Ae=Q,Re=1;Re<P;Re++)r(J,Q,ee,ae,oe,he,z,$,Re/(P-1),O),R(Te,Ae,O.x,O.y),Te=O.x,Ae=O.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",o=new WeakMap,l={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(L,R){var P=L.getContext?L.getContext("webgl",l):L,O=o.get(P);if(!O){let ae=function(Te){var Ae=J[Te];if(!Ae&&(Ae=J[Te]=P.getExtension(Te),!Ae))throw new Error(Te+" not supported");return Ae},oe=function(Te,Ae){var Re=P.createShader(Ae);return P.shaderSource(Re,Te),P.compileShader(Re),Re},he=function(Te,Ae,Re,le){if(!Q[Te]){var xe={},Ee={},ue=P.createProgram();P.attachShader(ue,oe(Ae,P.VERTEX_SHADER)),P.attachShader(ue,oe(Re,P.FRAGMENT_SHADER)),P.linkProgram(ue),Q[Te]={program:ue,transaction:function(b){P.useProgram(ue),b({setUniform:function(Z,se){for(var fe=[],ce=arguments.length-2;ce-- >0;)fe[ce]=arguments[ce+2];var k=Ee[se]||(Ee[se]=P.getUniformLocation(ue,se));P["uniform"+Z].apply(P,[k].concat(fe))},setAttribute:function(Z,se,fe,ce,k){var ge=xe[Z];ge||(ge=xe[Z]={buf:P.createBuffer(),loc:P.getAttribLocation(ue,Z),data:null}),P.bindBuffer(P.ARRAY_BUFFER,ge.buf),P.vertexAttribPointer(ge.loc,se,P.FLOAT,!1,0,0),P.enableVertexAttribArray(ge.loc),X?P.vertexAttribDivisor(ge.loc,ce):ae("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(ge.loc,ce),k!==ge.data&&(P.bufferData(P.ARRAY_BUFFER,k,fe),ge.data=k)}})}}}Q[Te].transaction(le)},re=function(Te,Ae){$++;try{P.activeTexture(P.TEXTURE0+$);var Re=z[Te];Re||(Re=z[Te]=P.createTexture(),P.bindTexture(P.TEXTURE_2D,Re),P.texParameteri(P.TEXTURE_2D,P.TEXTURE_MIN_FILTER,P.NEAREST),P.texParameteri(P.TEXTURE_2D,P.TEXTURE_MAG_FILTER,P.NEAREST)),P.bindTexture(P.TEXTURE_2D,Re),Ae(Re,$)}finally{$--}},Se=function(Te,Ae,Re){var le=P.createFramebuffer();ee.push(le),P.bindFramebuffer(P.FRAMEBUFFER,le),P.activeTexture(P.TEXTURE0+Ae),P.bindTexture(P.TEXTURE_2D,Te),P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Te,0);try{Re(le)}finally{P.deleteFramebuffer(le),P.bindFramebuffer(P.FRAMEBUFFER,ee[--ee.length-1]||null)}},Le=function(){J={},Q={},z={},$=-1,ee.length=0};var X=typeof WebGL2RenderingContext<"u"&&P instanceof WebGL2RenderingContext,J={},Q={},z={},$=-1,ee=[];P.canvas.addEventListener("webglcontextlost",function(Te){Le(),Te.preventDefault()},!1),o.set(P,O={gl:P,isWebGL2:X,getExtension:ae,withProgram:he,withTexture:re,withTextureFramebuffer:Se,handleContextLoss:Le})}R(O)}function f(L,R,P,O,X,J,Q,z){Q===void 0&&(Q=15),z===void 0&&(z=null),u(L,function($){var ee=$.gl,ae=$.withProgram,oe=$.withTexture;oe("copy",function(he,re){ee.texImage2D(ee.TEXTURE_2D,0,ee.RGBA,X,J,0,ee.RGBA,ee.UNSIGNED_BYTE,R),ae("copy",s,a,function(Se){var Le=Se.setUniform,Te=Se.setAttribute;Te("aUV",2,ee.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Le("1i","image",re),ee.bindFramebuffer(ee.FRAMEBUFFER,z||null),ee.disable(ee.BLEND),ee.colorMask(Q&8,Q&4,Q&2,Q&1),ee.viewport(P,O,X,J),ee.scissor(P,O,X,J),ee.drawArrays(ee.TRIANGLES,0,3)})})})}function h(L,R,P){var O=L.width,X=L.height;u(L,function(J){var Q=J.gl,z=new Uint8Array(O*X*4);Q.readPixels(0,0,O,X,Q.RGBA,Q.UNSIGNED_BYTE,z),L.width=R,L.height=P,f(Q,z,0,0,O,X)})}var m=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function x(L,R,P,O,X,J){J===void 0&&(J=1);var Q=new Uint8Array(L*R),z=O[2]-O[0],$=O[3]-O[1],ee=[];n(P,function(Te,Ae,Re,le){ee.push({x1:Te,y1:Ae,x2:Re,y2:le,minX:Math.min(Te,Re),minY:Math.min(Ae,le),maxX:Math.max(Te,Re),maxY:Math.max(Ae,le)})}),ee.sort(function(Te,Ae){return Te.maxX-Ae.maxX});for(var ae=0;ae<L;ae++)for(var oe=0;oe<R;oe++){var he=Se(O[0]+z*(ae+.5)/L,O[1]+$*(oe+.5)/R),re=Math.pow(1-Math.abs(he)/X,J)/2;he<0&&(re=1-re),re=Math.max(0,Math.min(255,Math.round(re*255))),Q[oe*L+ae]=re}return Q;function Se(Te,Ae){for(var Re=1/0,le=1/0,xe=ee.length;xe--;){var Ee=ee[xe];if(Ee.maxX+le<=Te)break;if(Te+le>Ee.minX&&Ae-le<Ee.maxY&&Ae+le>Ee.minY){var ue=_(Te,Ae,Ee.x1,Ee.y1,Ee.x2,Ee.y2);ue<Re&&(Re=ue,le=Math.sqrt(Re))}}return Le(Te,Ae)&&(le=-le),le}function Le(Te,Ae){for(var Re=0,le=ee.length;le--;){var xe=ee[le];if(xe.maxX<=Te)break;var Ee=xe.y1>Ae!=xe.y2>Ae&&Te<(xe.x2-xe.x1)*(Ae-xe.y1)/(xe.y2-xe.y1)+xe.x1;Ee&&(Re+=xe.y1<xe.y2?1:-1)}return Re!==0}}function p(L,R,P,O,X,J,Q,z,$,ee){J===void 0&&(J=1),z===void 0&&(z=0),$===void 0&&($=0),ee===void 0&&(ee=0),d(L,R,P,O,X,J,Q,null,z,$,ee)}function d(L,R,P,O,X,J,Q,z,$,ee,ae){J===void 0&&(J=1),$===void 0&&($=0),ee===void 0&&(ee=0),ae===void 0&&(ae=0);for(var oe=x(L,R,P,O,X,J),he=new Uint8Array(oe.length*4),re=0;re<oe.length;re++)he[re*4+ae]=oe[re];f(Q,he,$,ee,L,R,1<<3-ae,z)}function _(L,R,P,O,X,J){var Q=X-P,z=J-O,$=Q*Q+z*z,ee=$?Math.max(0,Math.min(1,((L-P)*Q+(R-O)*z)/$)):0,ae=L-(P+ee*Q),oe=R-(O+ee*z);return ae*ae+oe*oe}var v=Object.freeze({__proto__:null,generate:x,generateIntoCanvas:p,generateIntoFramebuffer:d}),M="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",g="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",S="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),D=null,y=!1,T={},I=new WeakMap;function Y(L){if(!y&&!V(L))throw new Error("WebGL generation not supported")}function F(L,R,P,O,X,J,Q){if(J===void 0&&(J=1),Q===void 0&&(Q=null),!Q&&(Q=D,!Q)){var z=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!z)throw new Error("OffscreenCanvas or DOM canvas not supported");Q=D=z.getContext("webgl",{depth:!1})}Y(Q);var $=new Uint8Array(L*R*4);u(Q,function(he){var re=he.gl,Se=he.withTexture,Le=he.withTextureFramebuffer;Se("readable",function(Te,Ae){re.texImage2D(re.TEXTURE_2D,0,re.RGBA,L,R,0,re.RGBA,re.UNSIGNED_BYTE,null),Le(Te,Ae,function(Re){C(L,R,P,O,X,J,re,Re,0,0,0),re.readPixels(0,0,L,R,re.RGBA,re.UNSIGNED_BYTE,$)})})});for(var ee=new Uint8Array(L*R),ae=0,oe=0;ae<$.length;ae+=4)ee[oe++]=$[ae];return ee}function U(L,R,P,O,X,J,Q,z,$,ee){J===void 0&&(J=1),z===void 0&&(z=0),$===void 0&&($=0),ee===void 0&&(ee=0),C(L,R,P,O,X,J,Q,null,z,$,ee)}function C(L,R,P,O,X,J,Q,z,$,ee,ae){J===void 0&&(J=1),$===void 0&&($=0),ee===void 0&&(ee=0),ae===void 0&&(ae=0),Y(Q);var oe=[];n(P,function(he,re,Se,Le){oe.push(he,re,Se,Le)}),oe=new Float32Array(oe),u(Q,function(he){var re=he.gl,Se=he.isWebGL2,Le=he.getExtension,Te=he.withProgram,Ae=he.withTexture,Re=he.withTextureFramebuffer,le=he.handleContextLoss;if(Ae("rawDistances",function(xe,Ee){(L!==xe._lastWidth||R!==xe._lastHeight)&&re.texImage2D(re.TEXTURE_2D,0,re.RGBA,xe._lastWidth=L,xe._lastHeight=R,0,re.RGBA,re.UNSIGNED_BYTE,null),Te("main",M,g,function(ue){var A=ue.setAttribute,b=ue.setUniform,B=!Se&&Le("ANGLE_instanced_arrays"),Z=!Se&&Le("EXT_blend_minmax");A("aUV",2,re.STATIC_DRAW,0,w),A("aLineSegment",4,re.DYNAMIC_DRAW,1,oe),b.apply(void 0,["4f","uGlyphBounds"].concat(O)),b("1f","uMaxDistance",X),b("1f","uExponent",J),Re(xe,Ee,function(se){re.enable(re.BLEND),re.colorMask(!0,!0,!0,!0),re.viewport(0,0,L,R),re.scissor(0,0,L,R),re.blendFunc(re.ONE,re.ONE),re.blendEquationSeparate(re.FUNC_ADD,Se?re.MAX:Z.MAX_EXT),re.clear(re.COLOR_BUFFER_BIT),Se?re.drawArraysInstanced(re.TRIANGLES,0,3,oe.length/4):B.drawArraysInstancedANGLE(re.TRIANGLES,0,3,oe.length/4)})}),Te("post",s,S,function(ue){ue.setAttribute("aUV",2,re.STATIC_DRAW,0,w),ue.setUniform("1i","tex",Ee),re.bindFramebuffer(re.FRAMEBUFFER,z),re.disable(re.BLEND),re.colorMask(ae===0,ae===1,ae===2,ae===3),re.viewport($,ee,L,R),re.scissor($,ee,L,R),re.drawArrays(re.TRIANGLES,0,3)})}),re.isContextLost())throw le(),new Error("webgl context lost")})}function V(L){var R=!L||L===D?T:L.canvas||L,P=I.get(R);if(P===void 0){y=!0;var O=null;try{var X=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],J=F(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,L);P=J&&X.length===J.length&&J.every(function(Q,z){return Q===X[z]}),P||(O="bad trial run results",console.info(X,J))}catch(Q){P=!1,O=Q.message}O&&console.warn("WebGL SDF generation not supported:",O),y=!1,I.set(R,P)}return P}var G=Object.freeze({__proto__:null,generate:F,generateIntoCanvas:U,generateIntoFramebuffer:C,isSupported:V});function te(L,R,P,O,X,J){X===void 0&&(X=Math.max(O[2]-O[0],O[3]-O[1])/2),J===void 0&&(J=1);try{return F.apply(G,arguments)}catch(Q){return console.info("WebGL SDF generation failed, falling back to JS",Q),x.apply(v,arguments)}}function j(L,R,P,O,X,J,Q,z,$,ee){X===void 0&&(X=Math.max(O[2]-O[0],O[3]-O[1])/2),J===void 0&&(J=1),z===void 0&&(z=0),$===void 0&&($=0),ee===void 0&&(ee=0);try{return U.apply(G,arguments)}catch(ae){return console.info("WebGL SDF generation failed, falling back to JS",ae),p.apply(v,arguments)}}return e.forEachPathCommand=i,e.generate=te,e.generateIntoCanvas=j,e.javascript=v,e.pathToLineSegments=n,e.webgl=G,e.webglUtils=m,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return c}function bp(){var c=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},i={};r.L=1,i[1]="L",Object.keys(t).forEach(function(le,xe){r[le]=1<<xe+1,i[r[le]]=le}),Object.freeze(r);var n=r.LRI|r.RLI|r.FSI,s=r.L|r.R|r.AL,a=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,o=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,l=r.S|r.WS|r.B|n|r.PDI|o,u=null;function f(){if(!u){u=new Map;var le=function(Ee){if(t.hasOwnProperty(Ee)){var ue=0;t[Ee].split(",").forEach(function(A){var b=A.split("+"),B=b[0],Z=b[1];B=parseInt(B,36),Z=Z?parseInt(Z,36):0,u.set(ue+=B,r[Ee]);for(var se=0;se<Z;se++)u.set(++ue,r[Ee])})}};for(var xe in t)le(xe)}}function h(le){return f(),u.get(le.codePointAt(0))||r.L}function m(le){return i[h(le)]}var x={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function p(le,xe){var Ee=36,ue=0,A=new Map,b=xe&&new Map,B;return le.split(",").forEach(function Z(se){if(se.indexOf("+")!==-1)for(var fe=+se;fe--;)Z(B);else{B=se;var ce=se.split(">"),k=ce[0],ge=ce[1];k=String.fromCodePoint(ue+=parseInt(k,Ee)),ge=String.fromCodePoint(ue+=parseInt(ge,Ee)),A.set(k,ge),xe&&b.set(ge,k)}}),{map:A,reverseMap:b}}var d,_,v;function M(){if(!d){var le=p(x.pairs,!0),xe=le.map,Ee=le.reverseMap;d=xe,_=Ee,v=p(x.canonical,!1).map}}function g(le){return M(),d.get(le)||null}function S(le){return M(),_.get(le)||null}function w(le){return M(),v.get(le)||null}var D=r.L,y=r.R,T=r.EN,I=r.ES,Y=r.ET,F=r.AN,U=r.CS,C=r.B,V=r.S,G=r.ON,te=r.BN,j=r.NSM,L=r.AL,R=r.LRO,P=r.RLO,O=r.LRE,X=r.RLE,J=r.PDF,Q=r.LRI,z=r.RLI,$=r.FSI,ee=r.PDI;function ae(le,xe){for(var Ee=125,ue=new Uint32Array(le.length),A=0;A<le.length;A++)ue[A]=h(le[A]);var b=new Map;function B(ht,Bt){var xt=ue[ht];ue[ht]=Bt,b.set(xt,b.get(xt)-1),xt&a&&b.set(a,b.get(a)-1),b.set(Bt,(b.get(Bt)||0)+1),Bt&a&&b.set(a,(b.get(a)||0)+1)}for(var Z=new Uint8Array(le.length),se=new Map,fe=[],ce=null,k=0;k<le.length;k++)ce||fe.push(ce={start:k,end:le.length-1,level:xe==="rtl"?1:xe==="ltr"?0:cs(k,!1)}),ue[k]&C&&(ce.end=k,ce=null);for(var ge=X|O|P|R|n|ee|J|C,de=function(ht){return ht+(ht&1?1:2)},we=function(ht){return ht+(ht&1?2:1)},_e=0;_e<fe.length;_e++){ce=fe[_e];var me=[{_level:ce.level,_override:0,_isolate:0}],ve=void 0,Fe=0,N=0,ye=0;b.clear();for(var K=ce.start;K<=ce.end;K++){var pe=ue[K];if(ve=me[me.length-1],b.set(pe,(b.get(pe)||0)+1),pe&a&&b.set(a,(b.get(a)||0)+1),pe&ge)if(pe&(X|O)){Z[K]=ve._level;var Me=(pe===X?we:de)(ve._level);Me<=Ee&&!Fe&&!N?me.push({_level:Me,_override:0,_isolate:0}):Fe||N++}else if(pe&(P|R)){Z[K]=ve._level;var Oe=(pe===P?we:de)(ve._level);Oe<=Ee&&!Fe&&!N?me.push({_level:Oe,_override:pe&P?y:D,_isolate:0}):Fe||N++}else if(pe&n){pe&$&&(pe=cs(K+1,!0)===1?z:Q),Z[K]=ve._level,ve._override&&B(K,ve._override);var ke=(pe===z?we:de)(ve._level);ke<=Ee&&Fe===0&&N===0?(ye++,me.push({_level:ke,_override:0,_isolate:1,_isolInitIndex:K})):Fe++}else if(pe&ee){if(Fe>0)Fe--;else if(ye>0){for(N=0;!me[me.length-1]._isolate;)me.pop();var je=me[me.length-1]._isolInitIndex;je!=null&&(se.set(je,K),se.set(K,je)),me.pop(),ye--}ve=me[me.length-1],Z[K]=ve._level,ve._override&&B(K,ve._override)}else pe&J?(Fe===0&&(N>0?N--:!ve._isolate&&me.length>1&&(me.pop(),ve=me[me.length-1])),Z[K]=ve._level):pe&C&&(Z[K]=ce.level);else Z[K]=ve._level,ve._override&&pe!==te&&B(K,ve._override)}for(var We=[],Pe=null,Ye=ce.start;Ye<=ce.end;Ye++){var Je=ue[Ye];if(!(Je&o)){var Ze=Z[Ye],et=Je&n,Mt=Je===ee;Pe&&Ze===Pe._level?(Pe._end=Ye,Pe._endsWithIsolInit=et):We.push(Pe={_start:Ye,_end:Ye,_level:Ze,_startsWithPDI:Mt,_endsWithIsolInit:et})}}for(var it=[],tt=0;tt<We.length;tt++){var mt=We[tt];if(!mt._startsWithPDI||mt._startsWithPDI&&!se.has(mt._start)){for(var E=[Pe=mt],H=void 0;Pe&&Pe._endsWithIsolInit&&(H=se.get(Pe._end))!=null;)for(var ne=tt+1;ne<We.length;ne++)if(We[ne]._start===H){E.push(Pe=We[ne]);break}for(var W=[],ie=0;ie<E.length;ie++)for(var De=E[ie],Ue=De._start;Ue<=De._end;Ue++)W.push(Ue);for(var Ne=Z[W[0]],Ie=ce.level,He=W[0]-1;He>=0;He--)if(!(ue[He]&o)){Ie=Z[He];break}var Be=W[W.length-1],Ve=Z[Be],Ke=ce.level;if(!(ue[Be]&n)){for(var Rt=Be+1;Rt<=ce.end;Rt++)if(!(ue[Rt]&o)){Ke=Z[Rt];break}}it.push({_seqIndices:W,_sosType:Math.max(Ie,Ne)%2?y:D,_eosType:Math.max(Ke,Ve)%2?y:D})}}for(var qt=0;qt<it.length;qt++){var jt=it[qt],Ce=jt._seqIndices,Ge=jt._sosType,cn=jt._eosType;if(b.get(j))for(var Qe=0;Qe<Ce.length;Qe++){var gt=Ce[Qe];if(ue[gt]&j){for(var Ut=Ge,Yt=Qe-1;Yt>=0;Yt--)if(!(ue[Ce[Yt]]&o)){Ut=ue[Ce[Yt]];break}B(gt,Ut&(n|ee)?G:Ut)}}if(b.get(T))for(var un=0;un<Ce.length;un++){var st=Ce[un];if(ue[st]&T)for(var Ft=un-1;Ft>=-1;Ft--){var Zn=Ft===-1?Ge:ue[Ce[Ft]];if(Zn&s){Zn===L&&B(st,F);break}}}if(b.get(L))for(var ct=0;ct<Ce.length;ct++){var Jn=Ce[ct];ue[Jn]&L&&B(Jn,y)}if(b.get(I)||b.get(U))for(var wn=1;wn<Ce.length-1;wn++){var Kn=Ce[wn];if(ue[Kn]&(I|U)){for(var Qn=0,Xr=0,qr=wn-1;qr>=0&&(Qn=ue[Ce[qr]],!!(Qn&o));qr--);for(var jr=wn+1;jr<Ce.length&&(Xr=ue[Ce[jr]],!!(Xr&o));jr++);Qn===Xr&&(ue[Kn]===I?Qn===T:Qn&(T|F))&&B(Kn,Qn)}}if(b.get(T))for(var Ri=0;Ri<Ce.length;Ri++){var dl=Ce[Ri];if(ue[dl]&T){for(var tr=Ri-1;tr>=0&&ue[Ce[tr]]&(Y|o);tr--)B(Ce[tr],T);for(var nr=Ri+1;nr<Ce.length&&ue[Ce[nr]]&(Y|o);nr++)B(Ce[nr],T)}}if(b.get(Y)||b.get(I)||b.get(U))for(var Ui=0;Ui<Ce.length;Ui++){var Qa=Ce[Ui];if(ue[Qa]&(Y|I|U)){B(Qa,G);for(var ir=Ui-1;ir>=0&&ue[Ce[ir]]&o;ir--)B(Ce[ir],G);for(var rr=Ui+1;rr<Ce.length&&ue[Ce[rr]]&o;rr++)B(Ce[rr],G)}}if(b.get(T))for(var Yr=0,$a=Ge;Yr<Ce.length;Yr++){var es=Ce[Yr],Zr=ue[es];Zr&T?$a===D&&B(es,D):Zr&s&&($a=Zr)}if(b.get(a)){var Fi=y|T|F,ts=Fi|D,ar=[];{for(var $n=[],ei=0;ei<Ce.length;ei++)if(ue[Ce[ei]]&a){var Ii=le[Ce[ei]],ns=void 0;if(g(Ii)!==null)if($n.length<63)$n.push({char:Ii,seqIndex:ei});else break;else if((ns=S(Ii))!==null)for(var Ni=$n.length-1;Ni>=0;Ni--){var Jr=$n[Ni].char;if(Jr===ns||Jr===S(w(Ii))||g(w(Jr))===Ii){ar.push([$n[Ni].seqIndex,ei]),$n.length=Ni;break}}}ar.sort(function(ht,Bt){return ht[0]-Bt[0]})}for(var Kr=0;Kr<ar.length;Kr++){for(var is=ar[Kr],Oi=is[0],sr=is[1],rs=!1,zt=0,Qr=Oi+1;Qr<sr;Qr++){var $r=Ce[Qr];if(ue[$r]&ts){rs=!0;var as=ue[$r]&Fi?y:D;if(as===ti($r)){zt=as;break}}}if(rs&&!zt){zt=Ge;for(var ea=Oi-1;ea>=0;ea--){var or=Ce[ea];if(ue[or]&ts){var ss=ue[or]&Fi?y:D;ss!==ti(or)?zt=ss:zt=ti(or);break}}}if(zt){if(ue[Ce[Oi]]=ue[Ce[sr]]=zt,zt!==ti(Ce[Oi])){for(var zi=Oi+1;zi<Ce.length;zi++)if(!(ue[Ce[zi]]&o)){h(le[Ce[zi]])&j&&(ue[Ce[zi]]=zt);break}}if(zt!==ti(Ce[sr])){for(var Bi=sr+1;Bi<Ce.length;Bi++)if(!(ue[Ce[Bi]]&o)){h(le[Ce[Bi]])&j&&(ue[Ce[Bi]]=zt);break}}}}for(var fn=0;fn<Ce.length;fn++)if(ue[Ce[fn]]&a){for(var os=fn,ta=fn,na=Ge,ki=fn-1;ki>=0;ki--)if(ue[Ce[ki]]&o)os=ki;else{na=ue[Ce[ki]]&Fi?y:D;break}for(var ls=cn,Gi=fn+1;Gi<Ce.length;Gi++)if(ue[Ce[Gi]]&(a|o))ta=Gi;else{ls=ue[Ce[Gi]]&Fi?y:D;break}for(var lr=os;lr<=ta;lr++)ue[Ce[lr]]=na===ls?na:ti(Ce[lr]);fn=ta}}}for(var bt=ce.start;bt<=ce.end;bt++){var pl=Z[bt],cr=ue[bt];if(pl&1?cr&(D|T|F)&&Z[bt]++:cr&y?Z[bt]++:cr&(F|T)&&(Z[bt]+=2),cr&o&&(Z[bt]=bt===0?ce.level:Z[bt-1]),bt===ce.end||h(le[bt])&(V|C))for(var ur=bt;ur>=0&&h(le[ur])&l;ur--)Z[ur]=ce.level}}return{levels:Z,paragraphs:fe};function cs(ht,Bt){for(var xt=ht;xt<le.length;xt++){var hn=ue[xt];if(hn&(y|L))return 1;if(hn&(C|D)||Bt&&hn===ee)return 0;if(hn&n){var us=ml(xt);xt=us===-1?le.length:us}}return 0}function ml(ht){for(var Bt=1,xt=ht+1;xt<le.length;xt++){var hn=ue[xt];if(hn&C)break;if(hn&ee){if(--Bt===0)return xt}else hn&n&&Bt++}return-1}function ti(ht){return Z[ht]&1?y:D}}var oe="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",he;function re(){if(!he){var le=p(oe,!0),xe=le.map,Ee=le.reverseMap;Ee.forEach(function(ue,A){xe.set(A,ue)}),he=xe}}function Se(le){return re(),he.get(le)||null}function Le(le,xe,Ee,ue){var A=le.length;Ee=Math.max(0,Ee==null?0:+Ee),ue=Math.min(A-1,ue==null?A-1:+ue);for(var b=new Map,B=Ee;B<=ue;B++)if(xe[B]&1){var Z=Se(le[B]);Z!==null&&b.set(B,Z)}return b}function Te(le,xe,Ee,ue){var A=le.length;Ee=Math.max(0,Ee==null?0:+Ee),ue=Math.min(A-1,ue==null?A-1:+ue);var b=[];return xe.paragraphs.forEach(function(B){var Z=Math.max(Ee,B.start),se=Math.min(ue,B.end);if(Z<se){for(var fe=xe.levels.slice(Z,se+1),ce=se;ce>=Z&&h(le[ce])&l;ce--)fe[ce]=B.level;for(var k=B.level,ge=1/0,de=0;de<fe.length;de++){var we=fe[de];we>k&&(k=we),we<ge&&(ge=we|1)}for(var _e=k;_e>=ge;_e--)for(var me=0;me<fe.length;me++)if(fe[me]>=_e){for(var ve=me;me+1<fe.length&&fe[me+1]>=_e;)me++;me>ve&&b.push([ve+Ee,me+Ee])}}}),b}function Ae(le,xe,Ee,ue){var A=Re(le,xe,Ee,ue),b=[].concat(le);return A.forEach(function(B,Z){b[Z]=(xe.levels[B]&1?Se(le[B]):null)||le[B]}),b.join("")}function Re(le,xe,Ee,ue){for(var A=Te(le,xe,Ee,ue),b=[],B=0;B<le.length;B++)b[B]=B;return A.forEach(function(Z){for(var se=Z[0],fe=Z[1],ce=b.slice(se,fe+1),k=ce.length;k--;)b[fe-k]=ce[k]}),b}return e.closingToOpeningBracket=S,e.getBidiCharType=h,e.getBidiCharTypeName=m,e.getCanonicalBracket=w,e.getEmbeddingLevels=ae,e.getMirroredCharacter=Se,e.getMirroredCharactersMap=Le,e.getReorderSegments=Te,e.getReorderedIndices=Re,e.getReorderedString=Ae,e.openingToClosingBracket=g,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return c}const cl=/\bvoid\s+main\s*\(\s*\)\s*{/g;function qa(c){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,i){let n=ze[i];return n?qa(n):r}return c.replace(e,t)}const ut=[];for(let c=0;c<256;c++)ut[c]=(c<16?"0":"")+c.toString(16);function wp(){const c=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ut[c&255]+ut[c>>8&255]+ut[c>>16&255]+ut[c>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[r&255]+ut[r>>8&255]+ut[r>>16&255]+ut[r>>24&255]).toUpperCase()}const Cn=Object.assign||function(){let c=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let i in r)r.hasOwnProperty(i)&&(c[i]=r[i])}return c},Tp=Date.now(),To=new WeakMap,Eo=new Map;let Ep=1e10;function ja(c,e){const t=Dp(e);let r=To.get(c);if(r||To.set(c,r=Object.create(null)),r[t])return new r[t];const i=`_onBeforeCompile${t}`,n=function(l){c.onBeforeCompile.call(this,l);const u=this.customProgramCacheKey()+"|"+l.vertexShader+"|"+l.fragmentShader;let f=Eo[u];if(!f){const h=Ap(l,e,t);f=Eo[u]=h}l.vertexShader=f.vertexShader,l.fragmentShader=f.fragmentShader,Cn(l.uniforms,this.uniforms),e.timeUniform&&(l.uniforms[e.timeUniform]={get value(){return Date.now()-Tp}}),this[i]&&this[i](l)},s=function(){return a(e.chained?c:c.clone())},a=function(l){const u=Object.create(l,o);return Object.defineProperty(u,"baseMaterial",{value:c}),Object.defineProperty(u,"id",{value:Ep++}),u.uuid=wp(),u.uniforms=Cn({},l.uniforms,e.uniforms),u.defines=Cn({},l.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Cn({},l.extensions,e.extensions),u._listeners=void 0,u},o={constructor:{value:s},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return c.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return n},set(l){this[i]=l}},copy:{writable:!0,configurable:!0,value:function(l){return c.copy.call(this,l),!c.isShaderMaterial&&!c.isDerivedMaterial&&(Cn(this.extensions,l.extensions),Cn(this.defines,l.defines),Cn(this.uniforms,Yo.clone(l.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const l=new c.constructor;return a(l).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let l=this._depthMaterial;return l||(l=this._depthMaterial=ja(c.isDerivedMaterial?c.getDepthMaterial():new il({depthPacking:Bo}),e),l.defines.IS_DEPTH_MATERIAL="",l.uniforms=this.uniforms),l}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let l=this._distanceMaterial;return l||(l=this._distanceMaterial=ja(c.isDerivedMaterial?c.getDistanceMaterial():new rl,e),l.defines.IS_DISTANCE_MATERIAL="",l.uniforms=this.uniforms),l}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:l,_distanceMaterial:u}=this;l&&l.dispose(),u&&u.dispose(),c.dispose.call(this)}}};return r[t]=s,new s}function Ap({vertexShader:c,fragmentShader:e},t,r){let{vertexDefs:i,vertexMainIntro:n,vertexMainOutro:s,vertexTransform:a,fragmentDefs:o,fragmentMainIntro:l,fragmentMainOutro:u,fragmentColorTransform:f,customRewriter:h,timeUniform:m}=t;if(i=i||"",n=n||"",s=s||"",o=o||"",l=l||"",u=u||"",(a||h)&&(c=qa(c)),(f||h)&&(e=e.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),e=qa(e)),h){let x=h({vertexShader:c,fragmentShader:e});c=x.vertexShader,e=x.fragmentShader}if(f){let x=[];e=e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(x.push(p),"")),u=`${f}
${x.join(`
`)}
${u}`}if(m){const x=`
uniform float ${m};
`;i=x+i,o=x+o}return a&&(c=`vec3 troika_position_${r};
vec3 troika_normal_${r};
vec2 troika_uv_${r};
${c}
`,i=`${i}
void troikaVertexTransform${r}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${a}
}
`,n=`
troika_position_${r} = vec3(position);
troika_normal_${r} = vec3(normal);
troika_uv_${r} = vec2(uv);
troikaVertexTransform${r}(troika_position_${r}, troika_normal_${r}, troika_uv_${r});
${n}
`,c=c.replace(/\b(position|normal|uv)\b/g,(x,p,d,_)=>/\battribute\s+vec[23]\s+$/.test(_.substr(0,d))?p:`troika_${p}_${r}`)),c=Ao(c,r,i,n,s),e=Ao(e,r,o,l,u),{vertexShader:c,fragmentShader:e}}function Ao(c,e,t,r,i){return(r||i||t)&&(c=c.replace(cl,`
${t}
void troikaOrigMain${e}() {`),c+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${i}
}`),c}function Cp(c,e){return c==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Lp=0;const Co=new Map;function Dp(c){const e=JSON.stringify(c,Cp);let t=Co.get(e);return t==null&&Co.set(e,t=++Lp),t}function Pp(c,e,t){const{defaultFontURL:r}=t,i=Object.create(null),n=1/0,s=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,a=/[\s\-\u007C\u00AD\u2010\u2012-\u2014\u2027\u2056\u2E17\u2E40]/;function o(_,v){function M(){const g=S=>{console.error(`Failure loading font ${_}${_===r?"":"; trying fallback"}`,S),_!==r&&(_=r,M())};try{const S=new XMLHttpRequest;S.open("get",_,!0),S.responseType="arraybuffer",S.onload=function(){if(S.status>=400)g(new Error(S.statusText));else if(S.status>0)try{const w=c(S.response);v(w)}catch(w){g(w)}},S.onerror=g,S.send()}catch(S){g(S)}}M()}function l(_,v){_||(_=r);let M=i[_];M?M.pending?M.pending.push(v):v(M):(i[_]={pending:[v]},o(_,g=>{let S=i[_].pending;i[_]=g,S.forEach(w=>w(g))}))}function u({text:_="",font:v=r,sdfGlyphSize:M=64,fontSize:g=1,letterSpacing:S=0,lineHeight:w="normal",maxWidth:D=n,direction:y,textAlign:T="left",textIndent:I=0,whiteSpace:Y="normal",overflowWrap:F="normal",anchorX:U=0,anchorY:C=0,includeCaretPositions:V=!1,chunkedBoundsSize:G=8192,colorRanges:te=null},j,L=!1){const R=x(),P={fontLoad:0,typesetting:0};_.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),g=+g,S=+S,D=+D,w=w||"normal",I=+I,l(v,O=>{const X=isFinite(D);let J=null,Q=null,z=null,$=null,ee=null,ae=null,oe=null,he=0,re=0,Se=Y!=="nowrap";const{ascender:Le,descender:Te,unitsPerEm:Ae}=O;P.fontLoad=x()-R;const Re=x(),le=g/Ae;w==="normal"&&(w=(Le-Te)/Ae),w=w*g;const xe=(w-(Le-Te)*le)/2,Ee=-(Le*le+xe),ue=Math.min(w,(Le-Te)*le),A=(Le+Te)/2*le-ue/2;let b=I,B=new p;const Z=[B];O.forEachGlyph(_,g,S,(ce,k,ge)=>{const de=_.charAt(ge),we=ce.advanceWidth*le,_e=B.count;let me;if("isEmpty"in ce||(ce.isWhitespace=!!de&&/\s/.test(de),ce.canBreakAfter=!!de&&a.test(de),ce.isEmpty=ce.xMin===ce.xMax||ce.yMin===ce.yMax||s.test(de)),!ce.isWhitespace&&!ce.isEmpty&&re++,Se&&X&&!ce.isWhitespace&&k+we+b>D&&_e){if(B.glyphAt(_e-1).glyphObj.canBreakAfter)me=new p,b=-k;else for(let Fe=_e;Fe--;)if(Fe===0&&F==="break-word"){me=new p,b=-k;break}else if(B.glyphAt(Fe).glyphObj.canBreakAfter){me=B.splitAt(Fe+1);const N=me.glyphAt(0).x;b-=N;for(let ye=me.count;ye--;)me.glyphAt(ye).x-=N;break}me&&(B.isSoftWrapped=!0,B=me,Z.push(B),he=D)}let ve=B.glyphAt(B.count);ve.glyphObj=ce,ve.x=k+b,ve.width=we,ve.charIndex=ge,de===`
`&&(B=new p,Z.push(B),b=-(k+we+S*g)+I)}),Z.forEach(ce=>{for(let k=ce.count;k--;){let{glyphObj:ge,x:de,width:we}=ce.glyphAt(k);if(!ge.isWhitespace){ce.width=de+we,ce.width>he&&(he=ce.width);return}}});let se=0,fe=0;if(U&&(typeof U=="number"?se=-U:typeof U=="string"&&(se=-he*(U==="left"?0:U==="center"?.5:U==="right"?1:h(U)))),C){if(typeof C=="number")fe=-C;else if(typeof C=="string"){let ce=Z.length*w;fe=C==="top"?0:C==="top-baseline"?-Ee:C==="middle"?ce/2:C==="bottom"?ce:C==="bottom-baseline"?ce-xe+Te*le:h(C)*ce}}if(!L){const ce=e.getEmbeddingLevels(_,y);J=new Uint16Array(re),Q=new Float32Array(re*2),z={},ae=[n,n,-n,-n],oe=[];let k=Ee;V&&(ee=new Float32Array(_.length*3)),te&&($=new Uint8Array(re*3));let ge=0,de=-1,we=-1,_e,me;if(Z.forEach((ve,Fe)=>{let{count:N,width:ye}=ve;if(N>0){let K=0;for(let We=N;We--&&ve.glyphAt(We).glyphObj.isWhitespace;)K++;let pe=0,Me=0;if(T==="center")pe=(he-ye)/2;else if(T==="right")pe=he-ye;else if(T==="justify"&&ve.isSoftWrapped){let We=0;for(let Pe=N-K;Pe--;)ve.glyphAt(Pe).glyphObj.isWhitespace&&We++;Me=(he-ye)/We}if(Me||pe){let We=0;for(let Pe=0;Pe<N;Pe++){let Ye=ve.glyphAt(Pe);const Je=Ye.glyphObj;Ye.x+=pe+We,Me!==0&&Je.isWhitespace&&Pe<N-K&&(We+=Me,Ye.width+=Me)}}const Oe=e.getReorderSegments(_,ce,ve.glyphAt(0).charIndex,ve.glyphAt(ve.count-1).charIndex);for(let We=0;We<Oe.length;We++){const[Pe,Ye]=Oe[We];let Je=1/0,Ze=-1/0;for(let et=0;et<N;et++)if(ve.glyphAt(et).charIndex>=Pe){let Mt=et,it=et;for(;it<N;it++){let tt=ve.glyphAt(it);if(tt.charIndex>Ye)break;it<N-K&&(Je=Math.min(Je,tt.x),Ze=Math.max(Ze,tt.x+tt.width))}for(let tt=Mt;tt<it;tt++){const mt=ve.glyphAt(tt);mt.x=Ze-(mt.x+mt.width-Je)}break}}let ke;const je=We=>ke=We;for(let We=0;We<N;We++){let Pe=ve.glyphAt(We);ke=Pe.glyphObj;const Ye=ke.index,Je=ce.levels[Pe.charIndex]&1;if(Je){const Ze=e.getMirroredCharacter(_[Pe.charIndex]);Ze&&O.forEachGlyph(Ze,0,0,je)}if(V){const{charIndex:Ze}=Pe,et=Pe.x+se,Mt=Pe.x+Pe.width+se;ee[Ze*3]=Je?Mt:et,ee[Ze*3+1]=Je?et:Mt,ee[Ze*3+2]=k+A+fe;const it=Ze-de;it>1&&m(ee,de,it),de=Ze}if(te){const{charIndex:Ze}=Pe;for(;Ze>we;)we++,te.hasOwnProperty(we)&&(me=te[we])}if(!ke.isWhitespace&&!ke.isEmpty){const Ze=ge++;z[Ye]||(z[Ye]={path:ke.path,pathBounds:[ke.xMin,ke.yMin,ke.xMax,ke.yMax]});const et=Pe.x+se,Mt=k+fe;Q[Ze*2]=et,Q[Ze*2+1]=Mt;const it=et+ke.xMin*le,tt=Mt+ke.yMin*le,mt=et+ke.xMax*le,E=Mt+ke.yMax*le;it<ae[0]&&(ae[0]=it),tt<ae[1]&&(ae[1]=tt),mt>ae[2]&&(ae[2]=mt),E>ae[3]&&(ae[3]=E),Ze%G===0&&(_e={start:Ze,end:Ze,rect:[n,n,-n,-n]},oe.push(_e)),_e.end++;const H=_e.rect;if(it<H[0]&&(H[0]=it),tt<H[1]&&(H[1]=tt),mt>H[2]&&(H[2]=mt),E>H[3]&&(H[3]=E),J[Ze]=Ye,te){const ne=Ze*3;$[ne]=me>>16&255,$[ne+1]=me>>8&255,$[ne+2]=me&255}}}}k-=w}),ee){const ve=_.length-de;ve>1&&m(ee,de,ve)}}P.typesetting=x()-Re,j({glyphIds:J,glyphPositions:Q,glyphData:z,caretPositions:ee,caretHeight:ue,glyphColors:$,chunkedBounds:oe,fontSize:g,unitsPerEm:Ae,ascender:Le*le,descender:Te*le,lineHeight:w,topBaseline:Ee,blockBounds:[se,fe-Z.length*w,se+he,fe],visibleBounds:ae,timings:P})})}function f(_,v){u(_,M=>{const[g,S,w,D]=M.blockBounds;v({width:w-g,height:D-S})},{metricsOnly:!0})}function h(_){let v=_.match(/^([\d.]+)%$/),M=v?parseFloat(v[1]):NaN;return isNaN(M)?0:M/100}function m(_,v,M){const g=_[v*3],S=_[v*3+1],w=_[v*3+2],D=(S-g)/M;for(let y=0;y<M;y++){const T=(v+y)*3;_[T]=g+D*y,_[T+1]=g+D*(y+1),_[T+2]=w}}function x(){return(self.performance||Date).now()}function p(){this.data=[]}const d=["glyphObj","x","width","charIndex"];return p.prototype={width:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(_){let v=p.flyweight;return v.data=this.data,v.index=_,v},splitAt(_){let v=new p;return v.data=this.data.splice(_*d.length),v}},p.flyweight=d.reduce((_,v,M,g)=>(Object.defineProperty(_,v,{get(){return this.data[this.index*d.length+M]},set(S){this.data[this.index*d.length+M]=S}}),_),{data:null,index:0}),{typeset:u,measure:f,loadFont:l}}const Nn=()=>(self.performance||Date).now(),Hr=ll();let Lo;function Rp(c,e,t,r,i,n,s,a,o,l,u=!0){return u?Up(c,e,t,r,i,n,s,a,o,l).then(null,f=>(Lo||(console.warn("WebGL SDF generation failed, falling back to JS",f),Lo=!0),Do(c,e,t,r,i,n,s,a,o,l))):Do(c,e,t,r,i,n,s,a,o,l)}const Up=function(){const c=[];let t=0;function r(){const i=Nn();for(;c.length&&Nn()-i<5;)c.shift()();t=c.length?setTimeout(r,0):0}return(...i)=>{const n=on();return c.push(()=>{const s=Nn();try{Hr.webgl.generateIntoCanvas(...i),n.resolve({timing:Nn()-s})}catch(a){n.reject(a)}}),t||(t=setTimeout(r,0)),n}}(),Do=function(){const t={};let r=0;return function(i,n,s,a,o,l,u,f,h,m){const x="TroikaTextSDFGenerator_JS_"+r++%4;let p=t[x];return p||(p=t[x]={workerModule:Li({name:x,workerId:x,dependencies:[ll,Nn],init(d,_){const v=d().javascript.generate;return function(...M){const g=_();return{textureData:v(...M),timing:_()-g}}},getTransferables(d){return[d.textureData.buffer]}}),requests:0,idleTimer:null}),p.requests++,clearTimeout(p.idleTimer),p.workerModule(i,n,s,a,o,l).then(({textureData:d,timing:_})=>{const v=Nn(),M=new Uint8Array(d.length*4);for(let g=0;g<d.length;g++)M[g*4+m]=d[g];return Hr.webglUtils.renderImageData(u,M,f,h,i,n,1<<3-m),_+=Nn()-v,--p.requests===0&&(p.idleTimer=setTimeout(()=>{yp(x)},2e3)),{timing:_}})}}();function Fp(c){c._warm||(Hr.webgl.isSupported(c),c._warm=!0)}const Ip=Hr.webglUtils.resizeWebGLCanvasWithoutClearing;/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Np(){return typeof window>"u"&&(self.window=self),function(c){var e={parse:function(i){var n=e._bin,s=new Uint8Array(i);if(n.readASCII(s,0,4)=="ttcf"){var a=4;n.readUshort(s,a),a+=2,n.readUshort(s,a),a+=2;var o=n.readUint(s,a);a+=4;for(var l=[],u=0;u<o;u++){var f=n.readUint(s,a);a+=4,l.push(e._readFont(s,f))}return l}return[e._readFont(s,0)]},_readFont:function(i,n){var s=e._bin,a=n;s.readFixed(i,n),n+=4;var o=s.readUshort(i,n);n+=2,s.readUshort(i,n),n+=2,s.readUshort(i,n),n+=2,s.readUshort(i,n),n+=2;for(var l=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],u={_data:i,_offset:a},f={},h=0;h<o;h++){var m=s.readASCII(i,n,4);n+=4,s.readUint(i,n),n+=4;var x=s.readUint(i,n);n+=4;var p=s.readUint(i,n);n+=4,f[m]={offset:x,length:p}}for(h=0;h<l.length;h++){var d=l[h];f[d]&&(u[d.trim()]=e[d.trim()].parse(i,f[d].offset,f[d].length,u))}return u},_tabOffset:function(i,n,s){for(var a=e._bin,o=a.readUshort(i,s+4),l=s+12,u=0;u<o;u++){var f=a.readASCII(i,l,4);l+=4,a.readUint(i,l),l+=4;var h=a.readUint(i,l);if(l+=4,a.readUint(i,l),l+=4,f==n)return h}return 0}};e._bin={readFixed:function(i,n){return(i[n]<<8|i[n+1])+(i[n+2]<<8|i[n+3])/65540},readF2dot14:function(i,n){return e._bin.readShort(i,n)/16384},readInt:function(i,n){return e._bin._view(i).getInt32(n)},readInt8:function(i,n){return e._bin._view(i).getInt8(n)},readShort:function(i,n){return e._bin._view(i).getInt16(n)},readUshort:function(i,n){return e._bin._view(i).getUint16(n)},readUshorts:function(i,n,s){for(var a=[],o=0;o<s;o++)a.push(e._bin.readUshort(i,n+2*o));return a},readUint:function(i,n){return e._bin._view(i).getUint32(n)},readUint64:function(i,n){return 4294967296*e._bin.readUint(i,n)+e._bin.readUint(i,n+4)},readASCII:function(i,n,s){for(var a="",o=0;o<s;o++)a+=String.fromCharCode(i[n+o]);return a},readUnicode:function(i,n,s){for(var a="",o=0;o<s;o++){var l=i[n++]<<8|i[n++];a+=String.fromCharCode(l)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,n,s){var a=e._bin._tdec;return a&&n==0&&s==i.length?a.decode(i):e._bin.readASCII(i,n,s)},readBytes:function(i,n,s){for(var a=[],o=0;o<s;o++)a.push(i[n+o]);return a},readASCIIArray:function(i,n,s){for(var a=[],o=0;o<s;o++)a.push(String.fromCharCode(i[n+o]));return a},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,n,s,a,o){var l=e._bin,u={},f=n;l.readFixed(i,n),n+=4;var h=l.readUshort(i,n);n+=2;var m=l.readUshort(i,n);n+=2;var x=l.readUshort(i,n);return n+=2,u.scriptList=e._lctf.readScriptList(i,f+h),u.featureList=e._lctf.readFeatureList(i,f+m),u.lookupList=e._lctf.readLookupList(i,f+x,o),u},e._lctf.readLookupList=function(i,n,s){var a=e._bin,o=n,l=[],u=a.readUshort(i,n);n+=2;for(var f=0;f<u;f++){var h=a.readUshort(i,n);n+=2;var m=e._lctf.readLookupTable(i,o+h,s);l.push(m)}return l},e._lctf.readLookupTable=function(i,n,s){var a=e._bin,o=n,l={tabs:[]};l.ltype=a.readUshort(i,n),n+=2,l.flag=a.readUshort(i,n),n+=2;var u=a.readUshort(i,n);n+=2;for(var f=l.ltype,h=0;h<u;h++){var m=a.readUshort(i,n);n+=2;var x=s(i,f,o+m,l);l.tabs.push(x)}return l},e._lctf.numOfOnes=function(i){for(var n=0,s=0;s<32;s++)(i>>>s&1)!=0&&n++;return n},e._lctf.readClassDef=function(i,n){var s=e._bin,a=[],o=s.readUshort(i,n);if(n+=2,o==1){var l=s.readUshort(i,n);n+=2;var u=s.readUshort(i,n);n+=2;for(var f=0;f<u;f++)a.push(l+f),a.push(l+f),a.push(s.readUshort(i,n)),n+=2}if(o==2){var h=s.readUshort(i,n);for(n+=2,f=0;f<h;f++)a.push(s.readUshort(i,n)),n+=2,a.push(s.readUshort(i,n)),n+=2,a.push(s.readUshort(i,n)),n+=2}return a},e._lctf.getInterval=function(i,n){for(var s=0;s<i.length;s+=3){var a=i[s],o=i[s+1];if(i[s+2],a<=n&&n<=o)return s}return-1},e._lctf.readCoverage=function(i,n){var s=e._bin,a={};a.fmt=s.readUshort(i,n),n+=2;var o=s.readUshort(i,n);return n+=2,a.fmt==1&&(a.tab=s.readUshorts(i,n,o)),a.fmt==2&&(a.tab=s.readUshorts(i,n,3*o)),a},e._lctf.coverageIndex=function(i,n){var s=i.tab;if(i.fmt==1)return s.indexOf(n);if(i.fmt==2){var a=e._lctf.getInterval(s,n);if(a!=-1)return s[a+2]+(n-s[a])}return-1},e._lctf.readFeatureList=function(i,n){var s=e._bin,a=n,o=[],l=s.readUshort(i,n);n+=2;for(var u=0;u<l;u++){var f=s.readASCII(i,n,4);n+=4;var h=s.readUshort(i,n);n+=2;var m=e._lctf.readFeatureTable(i,a+h);m.tag=f.trim(),o.push(m)}return o},e._lctf.readFeatureTable=function(i,n){var s=e._bin,a=n,o={},l=s.readUshort(i,n);n+=2,l>0&&(o.featureParams=a+l);var u=s.readUshort(i,n);n+=2,o.tab=[];for(var f=0;f<u;f++)o.tab.push(s.readUshort(i,n+2*f));return o},e._lctf.readScriptList=function(i,n){var s=e._bin,a=n,o={},l=s.readUshort(i,n);n+=2;for(var u=0;u<l;u++){var f=s.readASCII(i,n,4);n+=4;var h=s.readUshort(i,n);n+=2,o[f.trim()]=e._lctf.readScriptTable(i,a+h)}return o},e._lctf.readScriptTable=function(i,n){var s=e._bin,a=n,o={},l=s.readUshort(i,n);n+=2,o.default=e._lctf.readLangSysTable(i,a+l);var u=s.readUshort(i,n);n+=2;for(var f=0;f<u;f++){var h=s.readASCII(i,n,4);n+=4;var m=s.readUshort(i,n);n+=2,o[h.trim()]=e._lctf.readLangSysTable(i,a+m)}return o},e._lctf.readLangSysTable=function(i,n){var s=e._bin,a={};s.readUshort(i,n),n+=2,a.reqFeature=s.readUshort(i,n),n+=2;var o=s.readUshort(i,n);return n+=2,a.features=s.readUshorts(i,n,o),a},e.CFF={},e.CFF.parse=function(i,n,s){var a=e._bin;(i=new Uint8Array(i.buffer,n,s))[n=0],i[++n],i[++n],i[++n],n++;var o=[];n=e.CFF.readIndex(i,n,o);for(var l=[],u=0;u<o.length-1;u++)l.push(a.readASCII(i,n+o[u],o[u+1]-o[u]));n+=o[o.length-1];var f=[];n=e.CFF.readIndex(i,n,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(i,n+f[u],n+f[u+1]));n+=f[f.length-1];var m=h[0],x=[];n=e.CFF.readIndex(i,n,x);var p=[];for(u=0;u<x.length-1;u++)p.push(a.readASCII(i,n+x[u],x[u+1]-x[u]));if(n+=x[x.length-1],e.CFF.readSubrs(i,n,m),m.CharStrings){n=m.CharStrings,x=[],n=e.CFF.readIndex(i,n,x);var d=[];for(u=0;u<x.length-1;u++)d.push(a.readBytes(i,n+x[u],x[u+1]-x[u]));m.CharStrings=d}if(m.ROS){n=m.FDArray;var _=[];for(n=e.CFF.readIndex(i,n,_),m.FDArray=[],u=0;u<_.length-1;u++){var v=e.CFF.readDict(i,n+_[u],n+_[u+1]);e.CFF._readFDict(i,v,p),m.FDArray.push(v)}n+=_[_.length-1],n=m.FDSelect,m.FDSelect=[];var M=i[n];if(n++,M!=3)throw M;var g=a.readUshort(i,n);for(n+=2,u=0;u<g+1;u++)m.FDSelect.push(a.readUshort(i,n),i[n+2]),n+=3}return m.Encoding&&(m.Encoding=e.CFF.readEncoding(i,m.Encoding,m.CharStrings.length)),m.charset&&(m.charset=e.CFF.readCharset(i,m.charset,m.CharStrings.length)),e.CFF._readFDict(i,m,p),m},e.CFF._readFDict=function(i,n,s){var a;for(var o in n.Private&&(a=n.Private[1],n.Private=e.CFF.readDict(i,a,a+n.Private[0]),n.Private.Subrs&&e.CFF.readSubrs(i,a+n.Private.Subrs,n.Private)),n)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(o)!=-1&&(n[o]=s[n[o]-426+35])},e.CFF.readSubrs=function(i,n,s){var a=e._bin,o=[];n=e.CFF.readIndex(i,n,o);var l,u=o.length;l=u<1240?107:u<33900?1131:32768,s.Bias=l,s.Subrs=[];for(var f=0;f<o.length-1;f++)s.Subrs.push(a.readBytes(i,n+o[f],o[f+1]-o[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,n){for(var s=0;s<i.charset.length;s++)if(i.charset[s]==n)return s;return-1},e.CFF.glyphBySE=function(i,n){return n<0||n>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[n])},e.CFF.readEncoding=function(i,n,s){e._bin;var a=[".notdef"],o=i[n];if(n++,o!=0)throw"error: unknown encoding format: "+o;var l=i[n];n++;for(var u=0;u<l;u++)a.push(i[n+u]);return a},e.CFF.readCharset=function(i,n,s){var a=e._bin,o=[".notdef"],l=i[n];if(n++,l==0)for(var u=0;u<s;u++){var f=a.readUshort(i,n);n+=2,o.push(f)}else{if(l!=1&&l!=2)throw"error: format: "+l;for(;o.length<s;){f=a.readUshort(i,n),n+=2;var h=0;for(l==1?(h=i[n],n++):(h=a.readUshort(i,n),n+=2),u=0;u<=h;u++)o.push(f),f++}}return o},e.CFF.readIndex=function(i,n,s){var a=e._bin,o=a.readUshort(i,n)+1,l=i[n+=2];if(n++,l==1)for(var u=0;u<o;u++)s.push(i[n+u]);else if(l==2)for(u=0;u<o;u++)s.push(a.readUshort(i,n+2*u));else if(l==3)for(u=0;u<o;u++)s.push(16777215&a.readUint(i,n+3*u-1));else if(o!=1)throw"unsupported offset size: "+l+", count: "+o;return(n+=o*l)-1},e.CFF.getCharString=function(i,n,s){var a=e._bin,o=i[n],l=i[n+1];i[n+2],i[n+3],i[n+4];var u=1,f=null,h=null;o<=20&&(f=o,u=1),o==12&&(f=100*o+l,u=2),21<=o&&o<=27&&(f=o,u=1),o==28&&(h=a.readShort(i,n+1),u=3),29<=o&&o<=31&&(f=o,u=1),32<=o&&o<=246&&(h=o-139,u=1),247<=o&&o<=250&&(h=256*(o-247)+l+108,u=2),251<=o&&o<=254&&(h=256*-(o-251)-l-108,u=2),o==255&&(h=a.readInt(i,n+1)/65535,u=5),s.val=h!=null?h:"o"+f,s.size=u},e.CFF.readCharString=function(i,n,s){for(var a=n+s,o=e._bin,l=[];n<a;){var u=i[n],f=i[n+1];i[n+2],i[n+3],i[n+4];var h=1,m=null,x=null;u<=20&&(m=u,h=1),u==12&&(m=100*u+f,h=2),u!=19&&u!=20||(m=u,h=2),21<=u&&u<=27&&(m=u,h=1),u==28&&(x=o.readShort(i,n+1),h=3),29<=u&&u<=31&&(m=u,h=1),32<=u&&u<=246&&(x=u-139,h=1),247<=u&&u<=250&&(x=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(x=256*-(u-251)-f-108,h=2),u==255&&(x=o.readInt(i,n+1)/65535,h=5),l.push(x!=null?x:"o"+m),n+=h}return l},e.CFF.readDict=function(i,n,s){for(var a=e._bin,o={},l=[];n<s;){var u=i[n],f=i[n+1];i[n+2],i[n+3],i[n+4];var h=1,m=null,x=null;if(u==28&&(x=a.readShort(i,n+1),h=3),u==29&&(x=a.readInt(i,n+1),h=5),32<=u&&u<=246&&(x=u-139,h=1),247<=u&&u<=250&&(x=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(x=256*-(u-251)-f-108,h=2),u==255)throw x=a.readInt(i,n+1)/65535,h=5,"unknown number";if(u==30){var p=[];for(h=1;;){var d=i[n+h];h++;var _=d>>4,v=15&d;if(_!=15&&p.push(_),v!=15&&p.push(v),v==15)break}for(var M="",g=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],S=0;S<p.length;S++)M+=g[p[S]];x=parseFloat(M)}u<=21&&(m=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(m=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),m!=null?(o[m]=l.length==1?l[0]:l,l=[]):l.push(x),n+=h}return o},e.cmap={},e.cmap.parse=function(i,n,s){i=new Uint8Array(i.buffer,n,s),n=0;var a=e._bin,o={};a.readUshort(i,n),n+=2;var l=a.readUshort(i,n);n+=2;var u=[];o.tables=[];for(var f=0;f<l;f++){var h=a.readUshort(i,n);n+=2;var m=a.readUshort(i,n);n+=2;var x=a.readUint(i,n);n+=4;var p="p"+h+"e"+m,d=u.indexOf(x);if(d==-1){var _;d=o.tables.length,u.push(x);var v=a.readUshort(i,x);v==0?_=e.cmap.parse0(i,x):v==4?_=e.cmap.parse4(i,x):v==6?_=e.cmap.parse6(i,x):v==12?_=e.cmap.parse12(i,x):console.debug("unknown format: "+v,h,m,x),o.tables.push(_)}if(o[p]!=null)throw"multiple tables for one platform+encoding";o[p]=d}return o},e.cmap.parse0=function(i,n){var s=e._bin,a={};a.format=s.readUshort(i,n),n+=2;var o=s.readUshort(i,n);n+=2,s.readUshort(i,n),n+=2,a.map=[];for(var l=0;l<o-6;l++)a.map.push(i[n+l]);return a},e.cmap.parse4=function(i,n){var s=e._bin,a=n,o={};o.format=s.readUshort(i,n),n+=2;var l=s.readUshort(i,n);n+=2,s.readUshort(i,n),n+=2;var u=s.readUshort(i,n);n+=2;var f=u/2;o.searchRange=s.readUshort(i,n),n+=2,o.entrySelector=s.readUshort(i,n),n+=2,o.rangeShift=s.readUshort(i,n),n+=2,o.endCount=s.readUshorts(i,n,f),n+=2*f,n+=2,o.startCount=s.readUshorts(i,n,f),n+=2*f,o.idDelta=[];for(var h=0;h<f;h++)o.idDelta.push(s.readShort(i,n)),n+=2;for(o.idRangeOffset=s.readUshorts(i,n,f),n+=2*f,o.glyphIdArray=[];n<a+l;)o.glyphIdArray.push(s.readUshort(i,n)),n+=2;return o},e.cmap.parse6=function(i,n){var s=e._bin,a={};a.format=s.readUshort(i,n),n+=2,s.readUshort(i,n),n+=2,s.readUshort(i,n),n+=2,a.firstCode=s.readUshort(i,n),n+=2;var o=s.readUshort(i,n);n+=2,a.glyphIdArray=[];for(var l=0;l<o;l++)a.glyphIdArray.push(s.readUshort(i,n)),n+=2;return a},e.cmap.parse12=function(i,n){var s=e._bin,a={};a.format=s.readUshort(i,n),n+=2,n+=2,s.readUint(i,n),n+=4,s.readUint(i,n),n+=4;var o=s.readUint(i,n);n+=4,a.groups=[];for(var l=0;l<o;l++){var u=n+12*l,f=s.readUint(i,u+0),h=s.readUint(i,u+4),m=s.readUint(i,u+8);a.groups.push([f,h,m])}return a},e.glyf={},e.glyf.parse=function(i,n,s,a){for(var o=[],l=0;l<a.maxp.numGlyphs;l++)o.push(null);return o},e.glyf._parseGlyf=function(i,n){var s=e._bin,a=i._data,o=e._tabOffset(a,"glyf",i._offset)+i.loca[n];if(i.loca[n]==i.loca[n+1])return null;var l={};if(l.noc=s.readShort(a,o),o+=2,l.xMin=s.readShort(a,o),o+=2,l.yMin=s.readShort(a,o),o+=2,l.xMax=s.readShort(a,o),o+=2,l.yMax=s.readShort(a,o),o+=2,l.xMin>=l.xMax||l.yMin>=l.yMax)return null;if(l.noc>0){l.endPts=[];for(var u=0;u<l.noc;u++)l.endPts.push(s.readUshort(a,o)),o+=2;var f=s.readUshort(a,o);if(o+=2,a.length-o<f)return null;l.instructions=s.readBytes(a,o,f),o+=f;var h=l.endPts[l.noc-1]+1;for(l.flags=[],u=0;u<h;u++){var m=a[o];if(o++,l.flags.push(m),(8&m)!=0){var x=a[o];o++;for(var p=0;p<x;p++)l.flags.push(m),u++}}for(l.xs=[],u=0;u<h;u++){var d=(2&l.flags[u])!=0,_=(16&l.flags[u])!=0;d?(l.xs.push(_?a[o]:-a[o]),o++):_?l.xs.push(0):(l.xs.push(s.readShort(a,o)),o+=2)}for(l.ys=[],u=0;u<h;u++)d=(4&l.flags[u])!=0,_=(32&l.flags[u])!=0,d?(l.ys.push(_?a[o]:-a[o]),o++):_?l.ys.push(0):(l.ys.push(s.readShort(a,o)),o+=2);var v=0,M=0;for(u=0;u<h;u++)v+=l.xs[u],M+=l.ys[u],l.xs[u]=v,l.ys[u]=M}else{var g;l.parts=[];do{g=s.readUshort(a,o),o+=2;var S={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(l.parts.push(S),S.glyphIndex=s.readUshort(a,o),o+=2,1&g){var w=s.readShort(a,o);o+=2;var D=s.readShort(a,o);o+=2}else w=s.readInt8(a,o),o++,D=s.readInt8(a,o),o++;2&g?(S.m.tx=w,S.m.ty=D):(S.p1=w,S.p2=D),8&g?(S.m.a=S.m.d=s.readF2dot14(a,o),o+=2):64&g?(S.m.a=s.readF2dot14(a,o),o+=2,S.m.d=s.readF2dot14(a,o),o+=2):128&g&&(S.m.a=s.readF2dot14(a,o),o+=2,S.m.b=s.readF2dot14(a,o),o+=2,S.m.c=s.readF2dot14(a,o),o+=2,S.m.d=s.readF2dot14(a,o),o+=2)}while(32&g);if(256&g){var y=s.readUshort(a,o);for(o+=2,l.instr=[],u=0;u<y;u++)l.instr.push(a[o]),o++}}return l},e.GPOS={},e.GPOS.parse=function(i,n,s,a){return e._lctf.parse(i,n,s,a,e.GPOS.subt)},e.GPOS.subt=function(i,n,s,a){var o=e._bin,l=s,u={};if(u.fmt=o.readUshort(i,s),s+=2,n==1||n==2||n==3||n==7||n==8&&u.fmt<=2){var f=o.readUshort(i,s);s+=2,u.coverage=e._lctf.readCoverage(i,f+l)}if(n==1&&u.fmt==1){var h=o.readUshort(i,s);s+=2;var m=e._lctf.numOfOnes(h);h!=0&&(u.pos=e.GPOS.readValueRecord(i,s,h))}else if(n==2&&u.fmt>=1&&u.fmt<=2){h=o.readUshort(i,s),s+=2;var x=o.readUshort(i,s);s+=2,m=e._lctf.numOfOnes(h);var p=e._lctf.numOfOnes(x);if(u.fmt==1){u.pairsets=[];var d=o.readUshort(i,s);s+=2;for(var _=0;_<d;_++){var v=l+o.readUshort(i,s);s+=2;var M=o.readUshort(i,v);v+=2;for(var g=[],S=0;S<M;S++){var w=o.readUshort(i,v);v+=2,h!=0&&(F=e.GPOS.readValueRecord(i,v,h),v+=2*m),x!=0&&(U=e.GPOS.readValueRecord(i,v,x),v+=2*p),g.push({gid2:w,val1:F,val2:U})}u.pairsets.push(g)}}if(u.fmt==2){var D=o.readUshort(i,s);s+=2;var y=o.readUshort(i,s);s+=2;var T=o.readUshort(i,s);s+=2;var I=o.readUshort(i,s);for(s+=2,u.classDef1=e._lctf.readClassDef(i,l+D),u.classDef2=e._lctf.readClassDef(i,l+y),u.matrix=[],_=0;_<T;_++){var Y=[];for(S=0;S<I;S++){var F=null,U=null;h!=0&&(F=e.GPOS.readValueRecord(i,s,h),s+=2*m),x!=0&&(U=e.GPOS.readValueRecord(i,s,x),s+=2*p),Y.push({val1:F,val2:U})}u.matrix.push(Y)}}}else{if(n==9&&u.fmt==1){var C=o.readUshort(i,s);s+=2;var V=o.readUint(i,s);if(s+=4,a.ltype==9)a.ltype=C;else if(a.ltype!=C)throw"invalid extension substitution";return e.GPOS.subt(i,a.ltype,l+V)}console.debug("unsupported GPOS table LookupType",n,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,n,s){var a=e._bin,o=[];return o.push(1&s?a.readShort(i,n):0),n+=1&s?2:0,o.push(2&s?a.readShort(i,n):0),n+=2&s?2:0,o.push(4&s?a.readShort(i,n):0),n+=4&s?2:0,o.push(8&s?a.readShort(i,n):0),n+=8&s?2:0,o},e.GSUB={},e.GSUB.parse=function(i,n,s,a){return e._lctf.parse(i,n,s,a,e.GSUB.subt)},e.GSUB.subt=function(i,n,s,a){var o=e._bin,l=s,u={};if(u.fmt=o.readUshort(i,s),s+=2,n!=1&&n!=4&&n!=5&&n!=6)return null;if(n==1||n==4||n==5&&u.fmt<=2||n==6&&u.fmt<=2){var f=o.readUshort(i,s);s+=2,u.coverage=e._lctf.readCoverage(i,l+f)}if(n==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=o.readShort(i,s),s+=2;else if(u.fmt==2){var h=o.readUshort(i,s);s+=2,u.newg=o.readUshorts(i,s,h),s+=2*u.newg.length}}else if(n==4){u.vals=[],h=o.readUshort(i,s),s+=2;for(var m=0;m<h;m++){var x=o.readUshort(i,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(i,l+x))}}else if(n==5&&u.fmt==2){if(u.fmt==2){var p=o.readUshort(i,s);s+=2,u.cDef=e._lctf.readClassDef(i,l+p),u.scset=[];var d=o.readUshort(i,s);for(s+=2,m=0;m<d;m++){var _=o.readUshort(i,s);s+=2,u.scset.push(_==0?null:e.GSUB.readSubClassSet(i,l+_))}}}else if(n==6&&u.fmt==3){if(u.fmt==3){for(m=0;m<3;m++){h=o.readUshort(i,s),s+=2;for(var v=[],M=0;M<h;M++)v.push(e._lctf.readCoverage(i,l+o.readUshort(i,s+2*M)));s+=2*h,m==0&&(u.backCvg=v),m==1&&(u.inptCvg=v),m==2&&(u.ahedCvg=v)}h=o.readUshort(i,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,s,h)}}else{if(n==7&&u.fmt==1){var g=o.readUshort(i,s);s+=2;var S=o.readUint(i,s);if(s+=4,a.ltype==9)a.ltype=g;else if(a.ltype!=g)throw"invalid extension substitution";return e.GSUB.subt(i,a.ltype,l+S)}console.debug("unsupported GSUB table LookupType",n,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,n){var s=e._bin.readUshort,a=n,o=[],l=s(i,n);n+=2;for(var u=0;u<l;u++){var f=s(i,n);n+=2,o.push(e.GSUB.readSubClassRule(i,a+f))}return o},e.GSUB.readSubClassRule=function(i,n){var s=e._bin.readUshort,a={},o=s(i,n),l=s(i,n+=2);n+=2,a.input=[];for(var u=0;u<o-1;u++)a.input.push(s(i,n)),n+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(i,n,l),a},e.GSUB.readSubstLookupRecords=function(i,n,s){for(var a=e._bin.readUshort,o=[],l=0;l<s;l++)o.push(a(i,n),a(i,n+2)),n+=4;return o},e.GSUB.readChainSubClassSet=function(i,n){var s=e._bin,a=n,o=[],l=s.readUshort(i,n);n+=2;for(var u=0;u<l;u++){var f=s.readUshort(i,n);n+=2,o.push(e.GSUB.readChainSubClassRule(i,a+f))}return o},e.GSUB.readChainSubClassRule=function(i,n){for(var s=e._bin,a={},o=["backtrack","input","lookahead"],l=0;l<o.length;l++){var u=s.readUshort(i,n);n+=2,l==1&&u--,a[o[l]]=s.readUshorts(i,n,u),n+=2*a[o[l]].length}return u=s.readUshort(i,n),n+=2,a.subst=s.readUshorts(i,n,2*u),n+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(i,n){var s=e._bin,a=n,o=[],l=s.readUshort(i,n);n+=2;for(var u=0;u<l;u++){var f=s.readUshort(i,n);n+=2,o.push(e.GSUB.readLigature(i,a+f))}return o},e.GSUB.readLigature=function(i,n){var s=e._bin,a={chain:[]};a.nglyph=s.readUshort(i,n),n+=2;var o=s.readUshort(i,n);n+=2;for(var l=0;l<o-1;l++)a.chain.push(s.readUshort(i,n)),n+=2;return a},e.head={},e.head.parse=function(i,n,s){var a=e._bin,o={};return a.readFixed(i,n),n+=4,o.fontRevision=a.readFixed(i,n),n+=4,a.readUint(i,n),n+=4,a.readUint(i,n),n+=4,o.flags=a.readUshort(i,n),n+=2,o.unitsPerEm=a.readUshort(i,n),n+=2,o.created=a.readUint64(i,n),n+=8,o.modified=a.readUint64(i,n),n+=8,o.xMin=a.readShort(i,n),n+=2,o.yMin=a.readShort(i,n),n+=2,o.xMax=a.readShort(i,n),n+=2,o.yMax=a.readShort(i,n),n+=2,o.macStyle=a.readUshort(i,n),n+=2,o.lowestRecPPEM=a.readUshort(i,n),n+=2,o.fontDirectionHint=a.readShort(i,n),n+=2,o.indexToLocFormat=a.readShort(i,n),n+=2,o.glyphDataFormat=a.readShort(i,n),n+=2,o},e.hhea={},e.hhea.parse=function(i,n,s){var a=e._bin,o={};return a.readFixed(i,n),n+=4,o.ascender=a.readShort(i,n),n+=2,o.descender=a.readShort(i,n),n+=2,o.lineGap=a.readShort(i,n),n+=2,o.advanceWidthMax=a.readUshort(i,n),n+=2,o.minLeftSideBearing=a.readShort(i,n),n+=2,o.minRightSideBearing=a.readShort(i,n),n+=2,o.xMaxExtent=a.readShort(i,n),n+=2,o.caretSlopeRise=a.readShort(i,n),n+=2,o.caretSlopeRun=a.readShort(i,n),n+=2,o.caretOffset=a.readShort(i,n),n+=2,n+=8,o.metricDataFormat=a.readShort(i,n),n+=2,o.numberOfHMetrics=a.readUshort(i,n),n+=2,o},e.hmtx={},e.hmtx.parse=function(i,n,s,a){for(var o=e._bin,l={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<a.maxp.numGlyphs;h++)h<a.hhea.numberOfHMetrics&&(u=o.readUshort(i,n),n+=2,f=o.readShort(i,n),n+=2),l.aWidth.push(u),l.lsBearing.push(f);return l},e.kern={},e.kern.parse=function(i,n,s,a){var o=e._bin,l=o.readUshort(i,n);if(n+=2,l==1)return e.kern.parseV1(i,n-2,s,a);var u=o.readUshort(i,n);n+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){n+=2,s=o.readUshort(i,n),n+=2;var m=o.readUshort(i,n);n+=2;var x=m>>>8;if((x&=15)!=0)throw"unknown kern table format: "+x;n=e.kern.readFormat0(i,n,f)}return f},e.kern.parseV1=function(i,n,s,a){var o=e._bin;o.readFixed(i,n),n+=4;var l=o.readUint(i,n);n+=4;for(var u={glyph1:[],rval:[]},f=0;f<l;f++){o.readUint(i,n),n+=4;var h=o.readUshort(i,n);n+=2,o.readUshort(i,n),n+=2;var m=h>>>8;if((m&=15)!=0)throw"unknown kern table format: "+m;n=e.kern.readFormat0(i,n,u)}return u},e.kern.readFormat0=function(i,n,s){var a=e._bin,o=-1,l=a.readUshort(i,n);n+=2,a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2;for(var u=0;u<l;u++){var f=a.readUshort(i,n);n+=2;var h=a.readUshort(i,n);n+=2;var m=a.readShort(i,n);n+=2,f!=o&&(s.glyph1.push(f),s.rval.push({glyph2:[],vals:[]}));var x=s.rval[s.rval.length-1];x.glyph2.push(h),x.vals.push(m),o=f}return n},e.loca={},e.loca.parse=function(i,n,s,a){var o=e._bin,l=[],u=a.head.indexToLocFormat,f=a.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)l.push(o.readUshort(i,n+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)l.push(o.readUint(i,n+(h<<2)));return l},e.maxp={},e.maxp.parse=function(i,n,s){var a=e._bin,o={},l=a.readUint(i,n);return n+=4,o.numGlyphs=a.readUshort(i,n),n+=2,l==65536&&(o.maxPoints=a.readUshort(i,n),n+=2,o.maxContours=a.readUshort(i,n),n+=2,o.maxCompositePoints=a.readUshort(i,n),n+=2,o.maxCompositeContours=a.readUshort(i,n),n+=2,o.maxZones=a.readUshort(i,n),n+=2,o.maxTwilightPoints=a.readUshort(i,n),n+=2,o.maxStorage=a.readUshort(i,n),n+=2,o.maxFunctionDefs=a.readUshort(i,n),n+=2,o.maxInstructionDefs=a.readUshort(i,n),n+=2,o.maxStackElements=a.readUshort(i,n),n+=2,o.maxSizeOfInstructions=a.readUshort(i,n),n+=2,o.maxComponentElements=a.readUshort(i,n),n+=2,o.maxComponentDepth=a.readUshort(i,n),n+=2),o},e.name={},e.name.parse=function(i,n,s){var a=e._bin,o={};a.readUshort(i,n),n+=2;var l=a.readUshort(i,n);n+=2,a.readUshort(i,n);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=n+=2,m=0;m<l;m++){var x=a.readUshort(i,n);n+=2;var p=a.readUshort(i,n);n+=2;var d=a.readUshort(i,n);n+=2;var _=a.readUshort(i,n);n+=2;var v=a.readUshort(i,n);n+=2;var M=a.readUshort(i,n);n+=2;var g,S=f[_],w=h+12*l+M;if(x==0)g=a.readUnicode(i,w,v/2);else if(x==3&&p==0)g=a.readUnicode(i,w,v/2);else if(p==0)g=a.readASCII(i,w,v);else if(p==1)g=a.readUnicode(i,w,v/2);else if(p==3)g=a.readUnicode(i,w,v/2);else{if(x!=1)throw"unknown encoding "+p+", platformID: "+x;g=a.readASCII(i,w,v),console.debug("reading unknown MAC encoding "+p+" as ASCII")}var D="p"+x+","+d.toString(16);o[D]==null&&(o[D]={}),o[D][S!==void 0?S:_]=g,o[D]._lang=d}for(var y in o)if(o[y].postScriptName!=null&&o[y]._lang==1033)return o[y];for(var y in o)if(o[y].postScriptName!=null&&o[y]._lang==0)return o[y];for(var y in o)if(o[y].postScriptName!=null&&o[y]._lang==3084)return o[y];for(var y in o)if(o[y].postScriptName!=null)return o[y];for(var y in o){u=y;break}return console.debug("returning name table with languageID "+o[u]._lang),o[u]},e["OS/2"]={},e["OS/2"].parse=function(i,n,s){var a=e._bin.readUshort(i,n);n+=2;var o={};if(a==0)e["OS/2"].version0(i,n,o);else if(a==1)e["OS/2"].version1(i,n,o);else if(a==2||a==3||a==4)e["OS/2"].version2(i,n,o);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(i,n,o)}return o},e["OS/2"].version0=function(i,n,s){var a=e._bin;return s.xAvgCharWidth=a.readShort(i,n),n+=2,s.usWeightClass=a.readUshort(i,n),n+=2,s.usWidthClass=a.readUshort(i,n),n+=2,s.fsType=a.readUshort(i,n),n+=2,s.ySubscriptXSize=a.readShort(i,n),n+=2,s.ySubscriptYSize=a.readShort(i,n),n+=2,s.ySubscriptXOffset=a.readShort(i,n),n+=2,s.ySubscriptYOffset=a.readShort(i,n),n+=2,s.ySuperscriptXSize=a.readShort(i,n),n+=2,s.ySuperscriptYSize=a.readShort(i,n),n+=2,s.ySuperscriptXOffset=a.readShort(i,n),n+=2,s.ySuperscriptYOffset=a.readShort(i,n),n+=2,s.yStrikeoutSize=a.readShort(i,n),n+=2,s.yStrikeoutPosition=a.readShort(i,n),n+=2,s.sFamilyClass=a.readShort(i,n),n+=2,s.panose=a.readBytes(i,n,10),n+=10,s.ulUnicodeRange1=a.readUint(i,n),n+=4,s.ulUnicodeRange2=a.readUint(i,n),n+=4,s.ulUnicodeRange3=a.readUint(i,n),n+=4,s.ulUnicodeRange4=a.readUint(i,n),n+=4,s.achVendID=[a.readInt8(i,n),a.readInt8(i,n+1),a.readInt8(i,n+2),a.readInt8(i,n+3)],n+=4,s.fsSelection=a.readUshort(i,n),n+=2,s.usFirstCharIndex=a.readUshort(i,n),n+=2,s.usLastCharIndex=a.readUshort(i,n),n+=2,s.sTypoAscender=a.readShort(i,n),n+=2,s.sTypoDescender=a.readShort(i,n),n+=2,s.sTypoLineGap=a.readShort(i,n),n+=2,s.usWinAscent=a.readUshort(i,n),n+=2,s.usWinDescent=a.readUshort(i,n),n+=2},e["OS/2"].version1=function(i,n,s){var a=e._bin;return n=e["OS/2"].version0(i,n,s),s.ulCodePageRange1=a.readUint(i,n),n+=4,s.ulCodePageRange2=a.readUint(i,n),n+=4},e["OS/2"].version2=function(i,n,s){var a=e._bin;return n=e["OS/2"].version1(i,n,s),s.sxHeight=a.readShort(i,n),n+=2,s.sCapHeight=a.readShort(i,n),n+=2,s.usDefault=a.readUshort(i,n),n+=2,s.usBreak=a.readUshort(i,n),n+=2,s.usMaxContext=a.readUshort(i,n),n+=2},e["OS/2"].version5=function(i,n,s){var a=e._bin;return n=e["OS/2"].version2(i,n,s),s.usLowerOpticalPointSize=a.readUshort(i,n),n+=2,s.usUpperOpticalPointSize=a.readUshort(i,n),n+=2},e.post={},e.post.parse=function(i,n,s){var a=e._bin,o={};return o.version=a.readFixed(i,n),n+=4,o.italicAngle=a.readFixed(i,n),n+=4,o.underlinePosition=a.readShort(i,n),n+=2,o.underlineThickness=a.readShort(i,n),n+=2,o},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,n){var s=i.cmap,a=-1;if(s.p0e4!=null?a=s.p0e4:s.p3e1!=null?a=s.p3e1:s.p1e0!=null?a=s.p1e0:s.p0e3!=null&&(a=s.p0e3),a==-1)throw"no familiar platform and encoding!";var o=s.tables[a];if(o.format==0)return n>=o.map.length?0:o.map[n];if(o.format==4){for(var l=-1,u=0;u<o.endCount.length;u++)if(n<=o.endCount[u]){l=u;break}return l==-1||o.startCount[l]>n?0:65535&(o.idRangeOffset[l]!=0?o.glyphIdArray[n-o.startCount[l]+(o.idRangeOffset[l]>>1)-(o.idRangeOffset.length-l)]:n+o.idDelta[l])}if(o.format==12){if(n>o.groups[o.groups.length-1][1])return 0;for(u=0;u<o.groups.length;u++){var f=o.groups[u];if(f[0]<=n&&n<=f[1])return f[2]+(n-f[0])}return 0}throw"unknown cmap table format "+o.format},e.U.glyphToPath=function(i,n){var s={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[n]){var a=i.SVG.entries[n];return a==null?s:(typeof a=="string"&&(a=e.SVG.toPath(a),i.SVG.entries[n]=a),a)}if(i.CFF){var o={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},l=i.CFF,u=i.CFF.Private;if(l.ROS){for(var f=0;l.FDSelect[f+2]<=n;)f+=2;u=l.FDArray[l.FDSelect[f+1]].Private}e.U._drawCFF(i.CFF.CharStrings[n],o,l,u,s)}else i.glyf&&e.U._drawGlyf(n,i,s);return s},e.U._drawGlyf=function(i,n,s){var a=n.glyf[i];a==null&&(a=n.glyf[i]=e.glyf._parseGlyf(n,i)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,s):e.U._compoGlyph(a,n,s))},e.U._simpleGlyph=function(i,n){for(var s=0;s<i.noc;s++){for(var a=s==0?0:i.endPts[s-1]+1,o=i.endPts[s],l=a;l<=o;l++){var u=l==a?o:l-1,f=l==o?a:l+1,h=1&i.flags[l],m=1&i.flags[u],x=1&i.flags[f],p=i.xs[l],d=i.ys[l];if(l==a)if(h){if(!m){e.U.P.moveTo(n,p,d);continue}e.U.P.moveTo(n,i.xs[u],i.ys[u])}else m?e.U.P.moveTo(n,i.xs[u],i.ys[u]):e.U.P.moveTo(n,(i.xs[u]+p)/2,(i.ys[u]+d)/2);h?m&&e.U.P.lineTo(n,p,d):x?e.U.P.qcurveTo(n,p,d,i.xs[f],i.ys[f]):e.U.P.qcurveTo(n,p,d,(p+i.xs[f])/2,(d+i.ys[f])/2)}e.U.P.closePath(n)}},e.U._compoGlyph=function(i,n,s){for(var a=0;a<i.parts.length;a++){var o={cmds:[],crds:[]},l=i.parts[a];e.U._drawGlyf(l.glyphIndex,n,o);for(var u=l.m,f=0;f<o.crds.length;f+=2){var h=o.crds[f],m=o.crds[f+1];s.crds.push(h*u.a+m*u.b+u.tx),s.crds.push(h*u.c+m*u.d+u.ty)}for(f=0;f<o.cmds.length;f++)s.cmds.push(o.cmds[f])}},e.U._getGlyphClass=function(i,n){var s=e._lctf.getInterval(n,i);return s==-1?0:n[s+2]},e.U.getPairAdjustment=function(i,n,s){var a=0,o=!1;if(i.GPOS)for(var l=i.GPOS,u=l.lookupList,f=l.featureList,h=[],m=0;m<f.length;m++){var x=f[m];if(x.tag=="kern"){o=!0;for(var p=0;p<x.tab.length;p++)if(!h[x.tab[p]]){h[x.tab[p]]=!0;for(var d=u[x.tab[p]],_=0;_<d.tabs.length;_++)if(d.tabs[_]!=null){var v,M=d.tabs[_];if((!M.coverage||(v=e._lctf.coverageIndex(M.coverage,n))!=-1)&&d.ltype!=1){if(d.ltype==2){var g;if(M.fmt==1){var S=M.pairsets[v];for(m=0;m<S.length;m++)S[m].gid2==s&&(g=S[m])}else if(M.fmt==2){var w=e.U._getGlyphClass(n,M.classDef1),D=e.U._getGlyphClass(s,M.classDef2);g=M.matrix[w][D]}g&&g.val1&&g.val1[2]&&(a+=g.val1[2]),g&&g.val2&&g.val2[0]&&(a+=g.val2[0])}}}}}}if(i.kern&&!o){var y=i.kern.glyph1.indexOf(n);if(y!=-1){var T=i.kern.rval[y].glyph2.indexOf(s);T!=-1&&(a+=i.kern.rval[y].vals[T])}}return a},e.U._applySubs=function(i,n,s,a){for(var o=i.length-n-1,l=0;l<s.tabs.length;l++)if(s.tabs[l]!=null){var u,f=s.tabs[l];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,i[n]))!=-1){if(s.ltype==1)i[n],f.fmt==1?i[n]=i[n]+f.delta:i[n]=f.newg[u];else if(s.ltype==4)for(var h=f.vals[u],m=0;m<h.length;m++){var x=h[m],p=x.chain.length;if(!(p>o)){for(var d=!0,_=0,v=0;v<p;v++){for(;i[n+_+(1+v)]==-1;)_++;x.chain[v]!=i[n+_+(1+v)]&&(d=!1)}if(d){for(i[n]=x.nglyph,v=0;v<p+_;v++)i[n+v+1]=-1;break}}}else if(s.ltype==5&&f.fmt==2)for(var M=e._lctf.getInterval(f.cDef,i[n]),g=f.cDef[M+2],S=f.scset[g],w=0;w<S.length;w++){var D=S[w],y=D.input;if(!(y.length>o)){for(d=!0,v=0;v<y.length;v++){var T=e._lctf.getInterval(f.cDef,i[n+1+v]);if(M==-1&&f.cDef[T+2]!=y[v]){d=!1;break}}if(d){var I=D.substLookupRecords;for(m=0;m<I.length;m+=2)I[m],I[m+1]}}}else if(s.ltype==6&&f.fmt==3){if(!e.U._glsCovered(i,f.backCvg,n-f.backCvg.length)||!e.U._glsCovered(i,f.inptCvg,n)||!e.U._glsCovered(i,f.ahedCvg,n+f.inptCvg.length))continue;var Y=f.lookupRec;for(w=0;w<Y.length;w+=2){M=Y[w];var F=a[Y[w+1]];e.U._applySubs(i,n+M,F,a)}}}}},e.U._glsCovered=function(i,n,s){for(var a=0;a<n.length;a++)if(e._lctf.coverageIndex(n[a],i[s+a])==-1)return!1;return!0},e.U.glyphsToPath=function(i,n,s){for(var a={cmds:[],crds:[]},o=0,l=0;l<n.length;l++){var u=n[l];if(u!=-1){for(var f=l<n.length-1&&n[l+1]!=-1?n[l+1]:0,h=e.U.glyphToPath(i,u),m=0;m<h.crds.length;m+=2)a.crds.push(h.crds[m]+o),a.crds.push(h.crds[m+1]);for(s&&a.cmds.push(s),m=0;m<h.cmds.length;m++)a.cmds.push(h.cmds[m]);s&&a.cmds.push("X"),o+=i.hmtx.aWidth[u],l<n.length-1&&(o+=e.U.getPairAdjustment(i,u,f))}}return a},e.U.P={},e.U.P.moveTo=function(i,n,s){i.cmds.push("M"),i.crds.push(n,s)},e.U.P.lineTo=function(i,n,s){i.cmds.push("L"),i.crds.push(n,s)},e.U.P.curveTo=function(i,n,s,a,o,l,u){i.cmds.push("C"),i.crds.push(n,s,a,o,l,u)},e.U.P.qcurveTo=function(i,n,s,a,o){i.cmds.push("Q"),i.crds.push(n,s,a,o)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,n,s,a,o){for(var l=n.stack,u=n.nStems,f=n.haveWidth,h=n.width,m=n.open,x=0,p=n.x,d=n.y,_=0,v=0,M=0,g=0,S=0,w=0,D=0,y=0,T=0,I=0,Y={val:0,size:0};x<i.length;){e.CFF.getCharString(i,x,Y);var F=Y.val;if(x+=Y.size,F=="o1"||F=="o18")l.length%2!=0&&!f&&(h=l.shift()+a.nominalWidthX),u+=l.length>>1,l.length=0,f=!0;else if(F=="o3"||F=="o23")l.length%2!=0&&!f&&(h=l.shift()+a.nominalWidthX),u+=l.length>>1,l.length=0,f=!0;else if(F=="o4")l.length>1&&!f&&(h=l.shift()+a.nominalWidthX,f=!0),m&&e.U.P.closePath(o),d+=l.pop(),e.U.P.moveTo(o,p,d),m=!0;else if(F=="o5")for(;l.length>0;)p+=l.shift(),d+=l.shift(),e.U.P.lineTo(o,p,d);else if(F=="o6"||F=="o7")for(var U=l.length,C=F=="o6",V=0;V<U;V++){var G=l.shift();C?p+=G:d+=G,C=!C,e.U.P.lineTo(o,p,d)}else if(F=="o8"||F=="o24"){U=l.length;for(var te=0;te+6<=U;)_=p+l.shift(),v=d+l.shift(),M=_+l.shift(),g=v+l.shift(),p=M+l.shift(),d=g+l.shift(),e.U.P.curveTo(o,_,v,M,g,p,d),te+=6;F=="o24"&&(p+=l.shift(),d+=l.shift(),e.U.P.lineTo(o,p,d))}else{if(F=="o11")break;if(F=="o1234"||F=="o1235"||F=="o1236"||F=="o1237")F=="o1234"&&(v=d,M=(_=p+l.shift())+l.shift(),I=g=v+l.shift(),w=g,y=d,p=(D=(S=(T=M+l.shift())+l.shift())+l.shift())+l.shift(),e.U.P.curveTo(o,_,v,M,g,T,I),e.U.P.curveTo(o,S,w,D,y,p,d)),F=="o1235"&&(_=p+l.shift(),v=d+l.shift(),M=_+l.shift(),g=v+l.shift(),T=M+l.shift(),I=g+l.shift(),S=T+l.shift(),w=I+l.shift(),D=S+l.shift(),y=w+l.shift(),p=D+l.shift(),d=y+l.shift(),l.shift(),e.U.P.curveTo(o,_,v,M,g,T,I),e.U.P.curveTo(o,S,w,D,y,p,d)),F=="o1236"&&(_=p+l.shift(),v=d+l.shift(),M=_+l.shift(),I=g=v+l.shift(),w=g,D=(S=(T=M+l.shift())+l.shift())+l.shift(),y=w+l.shift(),p=D+l.shift(),e.U.P.curveTo(o,_,v,M,g,T,I),e.U.P.curveTo(o,S,w,D,y,p,d)),F=="o1237"&&(_=p+l.shift(),v=d+l.shift(),M=_+l.shift(),g=v+l.shift(),T=M+l.shift(),I=g+l.shift(),S=T+l.shift(),w=I+l.shift(),D=S+l.shift(),y=w+l.shift(),Math.abs(D-p)>Math.abs(y-d)?p=D+l.shift():d=y+l.shift(),e.U.P.curveTo(o,_,v,M,g,T,I),e.U.P.curveTo(o,S,w,D,y,p,d));else if(F=="o14"){if(l.length>0&&!f&&(h=l.shift()+s.nominalWidthX,f=!0),l.length==4){var j=l.shift(),L=l.shift(),R=l.shift(),P=l.shift(),O=e.CFF.glyphBySE(s,R),X=e.CFF.glyphBySE(s,P);e.U._drawCFF(s.CharStrings[O],n,s,a,o),n.x=j,n.y=L,e.U._drawCFF(s.CharStrings[X],n,s,a,o)}m&&(e.U.P.closePath(o),m=!1)}else if(F=="o19"||F=="o20")l.length%2!=0&&!f&&(h=l.shift()+a.nominalWidthX),u+=l.length>>1,l.length=0,f=!0,x+=u+7>>3;else if(F=="o21")l.length>2&&!f&&(h=l.shift()+a.nominalWidthX,f=!0),d+=l.pop(),p+=l.pop(),m&&e.U.P.closePath(o),e.U.P.moveTo(o,p,d),m=!0;else if(F=="o22")l.length>1&&!f&&(h=l.shift()+a.nominalWidthX,f=!0),p+=l.pop(),m&&e.U.P.closePath(o),e.U.P.moveTo(o,p,d),m=!0;else if(F=="o25"){for(;l.length>6;)p+=l.shift(),d+=l.shift(),e.U.P.lineTo(o,p,d);_=p+l.shift(),v=d+l.shift(),M=_+l.shift(),g=v+l.shift(),p=M+l.shift(),d=g+l.shift(),e.U.P.curveTo(o,_,v,M,g,p,d)}else if(F=="o26")for(l.length%2&&(p+=l.shift());l.length>0;)_=p,v=d+l.shift(),p=M=_+l.shift(),d=(g=v+l.shift())+l.shift(),e.U.P.curveTo(o,_,v,M,g,p,d);else if(F=="o27")for(l.length%2&&(d+=l.shift());l.length>0;)v=d,M=(_=p+l.shift())+l.shift(),g=v+l.shift(),p=M+l.shift(),d=g,e.U.P.curveTo(o,_,v,M,g,p,d);else if(F=="o10"||F=="o29"){var J=F=="o10"?a:s;if(l.length==0)console.debug("error: empty stack");else{var Q=l.pop(),z=J.Subrs[Q+J.Bias];n.x=p,n.y=d,n.nStems=u,n.haveWidth=f,n.width=h,n.open=m,e.U._drawCFF(z,n,s,a,o),p=n.x,d=n.y,u=n.nStems,f=n.haveWidth,h=n.width,m=n.open}}else if(F=="o30"||F=="o31"){var $=l.length,ee=(te=0,F=="o31");for(te+=$-(U=-3&$);te<U;)ee?(v=d,M=(_=p+l.shift())+l.shift(),d=(g=v+l.shift())+l.shift(),U-te==5?(p=M+l.shift(),te++):p=M,ee=!1):(_=p,v=d+l.shift(),M=_+l.shift(),g=v+l.shift(),p=M+l.shift(),U-te==5?(d=g+l.shift(),te++):d=g,ee=!0),e.U.P.curveTo(o,_,v,M,g,p,d),te+=4}else{if((F+"").charAt(0)=="o")throw console.debug("Unknown operation: "+F,i),F;l.push(F)}}}n.x=p,n.y=d,n.nStems=u,n.haveWidth=f,n.width=h,n.open=m};var t=e,r={Typr:t};return c.Typr=t,c.default=r,Object.defineProperty(c,"__esModule",{value:!0}),c}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function Op(){return function(c){var e=Uint8Array,t=Uint16Array,r=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),n=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(F,U){for(var C=new t(31),V=0;V<31;++V)C[V]=U+=1<<F[V-1];var G=new r(C[30]);for(V=1;V<30;++V)for(var te=C[V];te<C[V+1];++te)G[te]=te-C[V]<<5|V;return[C,G]},o=a(i,2),l=o[0],u=o[1];l[28]=258,u[258]=28;for(var f=a(n,0)[0],h=new t(32768),m=0;m<32768;++m){var x=(43690&m)>>>1|(21845&m)<<1;x=(61680&(x=(52428&x)>>>2|(13107&x)<<2))>>>4|(3855&x)<<4,h[m]=((65280&x)>>>8|(255&x)<<8)>>>1}var p=function(F,U,C){for(var V=F.length,G=0,te=new t(U);G<V;++G)++te[F[G]-1];var j,L=new t(U);for(G=0;G<U;++G)L[G]=L[G-1]+te[G-1]<<1;if(C){j=new t(1<<U);var R=15-U;for(G=0;G<V;++G)if(F[G])for(var P=G<<4|F[G],O=U-F[G],X=L[F[G]-1]++<<O,J=X|(1<<O)-1;X<=J;++X)j[h[X]>>>R]=P}else for(j=new t(V),G=0;G<V;++G)F[G]&&(j[G]=h[L[F[G]-1]++]>>>15-F[G]);return j},d=new e(288);for(m=0;m<144;++m)d[m]=8;for(m=144;m<256;++m)d[m]=9;for(m=256;m<280;++m)d[m]=7;for(m=280;m<288;++m)d[m]=8;var _=new e(32);for(m=0;m<32;++m)_[m]=5;var v=p(d,9,1),M=p(_,5,1),g=function(F){for(var U=F[0],C=1;C<F.length;++C)F[C]>U&&(U=F[C]);return U},S=function(F,U,C){var V=U/8|0;return(F[V]|F[V+1]<<8)>>(7&U)&C},w=function(F,U){var C=U/8|0;return(F[C]|F[C+1]<<8|F[C+2]<<16)>>(7&U)},D=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(F,U,C){var V=new Error(U||D[F]);if(V.code=F,Error.captureStackTrace&&Error.captureStackTrace(V,y),!C)throw V;return V},T=function(F,U,C){var V=F.length;if(!V||C&&!C.l&&V<5)return U||new e(0);var G=!U||C,te=!C||C.i;C||(C={}),U||(U=new e(3*V));var j,L=function(ve){var Fe=U.length;if(ve>Fe){var N=new e(Math.max(2*Fe,ve));N.set(U),U=N}},R=C.f||0,P=C.p||0,O=C.b||0,X=C.l,J=C.d,Q=C.m,z=C.n,$=8*V;do{if(!X){C.f=R=S(F,P,1);var ee=S(F,P+1,3);if(P+=3,!ee){var ae=F[(Ee=((j=P)/8|0)+(7&j&&1)+4)-4]|F[Ee-3]<<8,oe=Ee+ae;if(oe>V){te&&y(0);break}G&&L(O+ae),U.set(F.subarray(Ee,oe),O),C.b=O+=ae,C.p=P=8*oe;continue}if(ee==1)X=v,J=M,Q=9,z=5;else if(ee==2){var he=S(F,P,31)+257,re=S(F,P+10,15)+4,Se=he+S(F,P+5,31)+1;P+=14;for(var Le=new e(Se),Te=new e(19),Ae=0;Ae<re;++Ae)Te[s[Ae]]=S(F,P+3*Ae,7);P+=3*re;var Re=g(Te),le=(1<<Re)-1,xe=p(Te,Re,1);for(Ae=0;Ae<Se;){var Ee,ue=xe[S(F,P,le)];if(P+=15&ue,(Ee=ue>>>4)<16)Le[Ae++]=Ee;else{var A=0,b=0;for(Ee==16?(b=3+S(F,P,3),P+=2,A=Le[Ae-1]):Ee==17?(b=3+S(F,P,7),P+=3):Ee==18&&(b=11+S(F,P,127),P+=7);b--;)Le[Ae++]=A}}var B=Le.subarray(0,he),Z=Le.subarray(he);Q=g(B),z=g(Z),X=p(B,Q,1),J=p(Z,z,1)}else y(1);if(P>$){te&&y(0);break}}G&&L(O+131072);for(var se=(1<<Q)-1,fe=(1<<z)-1,ce=P;;ce=P){var k=(A=X[w(F,P)&se])>>>4;if((P+=15&A)>$){te&&y(0);break}if(A||y(2),k<256)U[O++]=k;else{if(k==256){ce=P,X=null;break}var ge=k-254;if(k>264){var de=i[Ae=k-257];ge=S(F,P,(1<<de)-1)+l[Ae],P+=de}var we=J[w(F,P)&fe],_e=we>>>4;if(we||y(3),P+=15&we,Z=f[_e],_e>3&&(de=n[_e],Z+=w(F,P)&(1<<de)-1,P+=de),P>$){te&&y(0);break}G&&L(O+131072);for(var me=O+ge;O<me;O+=4)U[O]=U[O-Z],U[O+1]=U[O+1-Z],U[O+2]=U[O+2-Z],U[O+3]=U[O+3-Z];O=me}}C.l=X,C.p=ce,C.b=O,X&&(R=1,C.m=Q,C.d=J,C.n=z)}while(!R);return O==U.length?U:function(ve,Fe,N){(Fe==null||Fe<0)&&(Fe=0),(N==null||N>ve.length)&&(N=ve.length);var ye=new(ve instanceof t?t:ve instanceof r?r:e)(N-Fe);return ye.set(ve.subarray(Fe,N)),ye}(U,0,O)},I=new e(0),Y=typeof TextDecoder<"u"&&new TextDecoder;try{Y.decode(I,{stream:!0})}catch{}return c.convert_streams=function(F){var U=new DataView(F),C=0;function V(){var he=U.getUint16(C);return C+=2,he}function G(){var he=U.getUint32(C);return C+=4,he}function te(he){ae.setUint16(oe,he),oe+=2}function j(he){ae.setUint32(oe,he),oe+=4}for(var L={signature:G(),flavor:G(),length:G(),numTables:V(),reserved:V(),totalSfntSize:G(),majorVersion:V(),minorVersion:V(),metaOffset:G(),metaLength:G(),metaOrigLength:G(),privOffset:G(),privLength:G()},R=0;Math.pow(2,R)<=L.numTables;)R++;R--;for(var P=16*Math.pow(2,R),O=16*L.numTables-P,X=12,J=[],Q=0;Q<L.numTables;Q++)J.push({tag:G(),offset:G(),compLength:G(),origLength:G(),origChecksum:G()}),X+=16;var z,$=new Uint8Array(12+16*J.length+J.reduce(function(he,re){return he+re.origLength+4},0)),ee=$.buffer,ae=new DataView(ee),oe=0;return j(L.flavor),te(L.numTables),te(P),te(R),te(O),J.forEach(function(he){j(he.tag),j(he.origChecksum),j(X),j(he.origLength),he.outOffset=X,(X+=he.origLength)%4!=0&&(X+=4-X%4)}),J.forEach(function(he){var re,Se=F.slice(he.offset,he.offset+he.compLength);if(he.compLength!=he.origLength){var Le=new Uint8Array(he.origLength);re=new Uint8Array(Se,2),T(re,Le)}else Le=new Uint8Array(Se);$.set(Le,he.outOffset);var Te=0;(X=he.outOffset+he.origLength)%4!=0&&(Te=4-X%4),$.set(new Uint8Array(Te).buffer,he.outOffset+he.origLength),z=X+Te}),ee.slice(0,z)},Object.defineProperty(c,"__esModule",{value:!0}),c}({}).convert_streams}function zp(c,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,n=2,s=4,a=8,o=16,l=32;let u;function f(g){if(!u){const S={R:n,L:i,D:s,C:o,U:l,T:a};u=new Map;for(let w in r){let D=0;r[w].split(",").forEach(y=>{let[T,I]=y.split("+");T=parseInt(T,36),I=I?parseInt(I,36):0,u.set(D+=T,S[w]);for(let Y=I;Y--;)u.set(++D,S[w])})}}return u.get(g)||l}const h=1,m=2,x=3,p=4,d=[null,"isol","init","fina","medi"];function _(g){const S=new Uint8Array(g.length);let w=l,D=h,y=-1;for(let T=0;T<g.length;T++){const I=g.codePointAt(T);let Y=f(I)|0,F=h;Y&a||(w&(i|s|o)?Y&(n|s|o)?(F=x,(D===h||D===x)&&S[y]++):Y&(i|l)&&(D===m||D===p)&&S[y]--:w&(n|l)&&(D===m||D===p)&&S[y]--,D=S[T]=F,w=Y,y=T,I>65535&&T++)}return S}function v(g,S){const w=[];for(let y=0;y<S.length;y++){const T=S.codePointAt(y);T>65535&&y++,w.push(c.U.codeToGlyph(g,T))}const D=g.GSUB;if(D){const{lookupList:y,featureList:T}=D;let I;const Y=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,F=[];T.forEach(U=>{if(Y.test(U.tag))for(let C=0;C<U.tab.length;C++){if(F[U.tab[C]])continue;F[U.tab[C]]=!0;const V=y[U.tab[C]],G=/^(isol|init|fina|medi)$/.test(U.tag);G&&!I&&(I=_(S));for(let te=0;te<w.length;te++)(!I||!G||d[I[te]]===U.tag)&&c.U._applySubs(w,te,V,y)}})}return w}function M(g){const S=Object.create(null),w={unitsPerEm:g.head.unitsPerEm,ascender:g.hhea.ascender,descender:g.hhea.descender,forEachGlyph(D,y,T,I){let Y=0;const F=1/w.unitsPerEm*y,U=v(g,D);let C=0,V=-1;return U.forEach((G,te)=>{if(G!==-1){let j=S[G];if(!j){const{cmds:L,crds:R}=c.U.glyphToPath(g,G);let P="",O=0;for(let $=0,ee=L.length;$<ee;$++){const ae=t[L[$]];P+=L[$];for(let oe=1;oe<=ae;oe++)P+=(oe>1?",":"")+R[O++]}let X,J,Q,z;if(R.length){X=J=1/0,Q=z=-1/0;for(let $=0,ee=R.length;$<ee;$+=2){let ae=R[$],oe=R[$+1];ae<X&&(X=ae),oe<J&&(J=oe),ae>Q&&(Q=ae),oe>z&&(z=oe)}}else X=Q=J=z=0;j=S[G]={index:G,advanceWidth:g.hmtx.aWidth[G],xMin:X,yMin:J,xMax:Q,yMax:z,path:P,pathCommandCount:L.length}}V!==-1&&(Y+=c.U.getPairAdjustment(g,V,G)*F),I.call(null,j,Y,C),j.advanceWidth&&(Y+=j.advanceWidth*F),T&&(Y+=T*y),V=G}C+=D.codePointAt(C)>65535?2:1}),Y}};return w}return function(S){const w=new Uint8Array(S,0,4),D=c._bin.readASCII(w,0,4);if(D==="wOFF")S=e(S);else if(D==="wOF2")throw new Error("woff2 fonts not supported");return M(c.parse(S)[0])}}const Bp=Li({name:"Typr Font Parser",dependencies:[Np,Op,zp],init(c,e,t){const r=c(),i=e();return t(r,i)}}),xi={defaultFontURL:"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},kp=new qe;function gi(){return(self.performance||Date).now()}const Po=Object.create(null);function Gp(c,e){c=Wp({},c);const t=gi();if(c.font=Hp(c.font||xi.defaultFontURL),c.text=""+c.text,c.sdfGlyphSize=c.sdfGlyphSize||xi.sdfGlyphSize,c.colorRanges!=null){let f={};for(let h in c.colorRanges)if(c.colorRanges.hasOwnProperty(h)){let m=c.colorRanges[h];typeof m!="number"&&(m=kp.set(m).getHex()),f[h]=m}c.colorRanges=f}Object.freeze(c);const{textureWidth:r,sdfExponent:i}=xi,{sdfGlyphSize:n}=c,s=r/n*4;let a=Po[n];if(!a){const f=document.createElement("canvas");f.width=r,f.height=n*256/s,a=Po[n]={glyphCount:0,sdfGlyphSize:n,sdfCanvas:f,sdfTexture:new Ot(f,void 0,void 0,void 0,St,St),contextLost:!1,glyphsByFont:new Map},a.sdfTexture.generateMipmaps=!1,Vp(a)}const{sdfTexture:o,sdfCanvas:l}=a;let u=a.glyphsByFont.get(c.font);u||a.glyphsByFont.set(c.font,u=new Map),qp(c).then(f=>{const{glyphIds:h,glyphPositions:m,fontSize:x,unitsPerEm:p,timings:d}=f,_=[],v=new Float32Array(h.length*4),M=x/p;let g=0,S=0;const w=gi();h.forEach((Y,F)=>{let U=u.get(Y);if(!U){const{path:te,pathBounds:j}=f.glyphData[Y],L=Math.max(j[2]-j[0],j[3]-j[1])/n*(xi.sdfMargin*n+.5),R=a.glyphCount++,P=[j[0]-L,j[1]-L,j[2]+L,j[3]+L];u.set(Y,U={path:te,atlasIndex:R,sdfViewBox:P}),_.push(U)}const{sdfViewBox:C}=U,V=m[S++],G=m[S++];v[g++]=V+C[0]*M,v[g++]=G+C[1]*M,v[g++]=V+C[2]*M,v[g++]=G+C[3]*M,h[F]=U.atlasIndex}),d.quads=(d.quads||0)+(gi()-w);const D=gi();d.sdf={};const y=l.height,T=Math.ceil(a.glyphCount/s),I=Math.pow(2,Math.ceil(Math.log2(T*n)));I>y&&(console.info(`Increasing SDF texture size ${y}->${I}`),Ip(l,r,I),o.dispose()),on.all(_.map(Y=>ul(Y,a,c.gpuAccelerateSDF).then(({timing:F})=>{d.sdf[Y.atlasIndex]=F}))).then(()=>{_.length&&!a.contextLost&&(fl(a),o.needsUpdate=!0),d.sdfTotal=gi()-D,d.total=gi()-t,e(Object.freeze({parameters:c,sdfTexture:o,sdfGlyphSize:n,sdfExponent:i,glyphBounds:v,glyphAtlasIndices:h,glyphColors:f.glyphColors,caretPositions:f.caretPositions,caretHeight:f.caretHeight,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings,get totalBounds(){return console.log("totalBounds deprecated, use blockBounds instead"),f.blockBounds},get totalBlockSize(){console.log("totalBlockSize deprecated, use blockBounds instead");const[Y,F,U,C]=f.blockBounds;return[U-Y,C-F]}}))})}),on.all([]).then(()=>{a.contextLost||Fp(l)})}function ul({path:c,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:i,contextLost:n},s){if(n)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:o}=xi,l=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(a/r)*r,h=Math.floor(u/(a/r))*r,m=e%4;return Rp(r,r,c,t,l,o,i,f,h,m,s)}function Vp(c){const e=c.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),c.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),c.contextLost=!1;const r=[];c.glyphsByFont.forEach(i=>{i.forEach(n=>{r.push(ul(n,c,!0))})}),on.all(r).then(()=>{fl(c),c.sdfTexture.needsUpdate=!0})})}function Wp(c,e){for(let t in e)e.hasOwnProperty(t)&&(c[t]=e[t]);return c}let Ur;function Hp(c){return Ur||(Ur=typeof document>"u"?{}:document.createElement("a")),Ur.href=c,Ur.href}function fl(c){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=c,{width:r,height:i}=e,n=c.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==r*i*4)&&(s=new Uint8Array(r*i*4),t.image={width:r,height:i,data:s},t.flipY=!1,t.isDataTexture=!0),n.readPixels(0,0,r,i,n.RGBA,n.UNSIGNED_BYTE,s)}}const Xp=Li({name:"Typesetter",dependencies:[xi,Bp,Pp,bp],init(c,e,t,r){const{defaultFontURL:i}=c;return t(e,r(),{defaultFontURL:i})}}),qp=Li({name:"Typesetter",dependencies:[Xp,Mp],init(c,e){return function(t){const r=new e;return c.typeset(t,r.resolve),r}},getTransferables(c){const e=[c.glyphPositions.buffer,c.glyphIds.buffer];return c.caretPositions&&e.push(c.caretPositions.buffer),c.glyphColors&&e.push(c.glyphColors.buffer),e}}),jp=(()=>{const c={};function e(o){let l=c[o];if(!l){const u=new Ha(1,1,o,o),f=u.clone(),h=u.attributes,m=f.attributes,x=new ln,p=h.uv.count;for(let d=0;d<p;d++)m.position.array[d*3]*=-1,m.normal.array[d*3+2]*=-1;["position","normal","uv"].forEach(d=>{x.setAttribute(d,new bn([...h[d].array,...m[d].array],h[d].itemSize))}),x.setIndex([...u.index.array,...f.index.array.map(d=>d+p)]),x.translate(.5,.5,0),l=c[o]=x}return l}const t="aTroikaGlyphBounds",r="aTroikaGlyphIndex",i="aTroikaGlyphColor";class n extends mp{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new kr,this.boundingBox=new Ai}computeBoundingSphere(){}computeBoundingBox(){}setSide(l){const u=this.getIndex().count;this.setDrawRange(l===Dt?u/2:0,l===Jt?u:u/2)}set detail(l){if(l!==this._detail){this._detail=l,(typeof l!="number"||l<1)&&(l=1);let u=e(l);["position","normal","uv"].forEach(f=>{this.attributes[f]=u.attributes[f].clone()}),this.setIndex(u.getIndex().clone())}}get detail(){return this._detail}set curveRadius(l){l!==this._curveRadius&&(this._curveRadius=l,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(l,u,f,h,m){s(this,t,l,4),s(this,r,u,1),s(this,i,m,3),this._blockBounds=f,this._chunkedBounds=h,a(this,u.length),this._updateBounds()}_updateBounds(){const l=this._blockBounds;if(l){const{curveRadius:u,boundingBox:f}=this;if(u){const{PI:h,floor:m,min:x,max:p,sin:d,cos:_}=Math,v=h/2,M=h*2,g=Math.abs(u),S=l[0]/g,w=l[2]/g,D=m((S+v)/M)!==m((w+v)/M)?-g:x(d(S)*g,d(w)*g),y=m((S-v)/M)!==m((w-v)/M)?g:p(d(S)*g,d(w)*g),T=m((S+h)/M)!==m((w+h)/M)?g*2:p(g-_(S)*g,g-_(w)*g);f.min.set(D,l[1],u<0?-T:0),f.max.set(y,l[3],u<0?0:T)}else f.min.set(l[0],l[1],0),f.max.set(l[2],l[3],0);f.getBoundingSphere(this.boundingSphere)}}applyClipRect(l){let u=this.getAttribute(r).count,f=this._chunkedBounds;if(f)for(let h=f.length;h--;){u=f[h].end;let m=f[h].rect;if(m[1]<l.w&&m[3]>l.y&&m[0]<l.z&&m[2]>l.x)break}a(this,u)}}n.prototype.setAttribute||(n.prototype.setAttribute=function(o,l){return this.attributes[o]=l,this});function s(o,l,u,f){const h=o.getAttribute(l);u?h&&h.array.length===u.length?(h.array.set(u),h.needsUpdate=!0):(o.setAttribute(l,new pp(u,f)),delete o._maxInstanceCount,o.dispose()):h&&o.deleteAttribute(l)}function a(o,l){o[o.hasOwnProperty("instanceCount")?"instanceCount":"maxInstancedCount"]=l}return n})(),Yp=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Zp=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Jp=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Kp=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Qp(c){const e=ja(c,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Xe},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new at(0,0,0,0)},uTroikaClipRect:{value:new at(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Xe},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new qe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ct},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Yp,vertexTransform:Zp,fragmentDefs:Jp,fragmentColorTransform:Kp,customRewriter({vertexShader:t,fragmentShader:r}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(r)&&(r=r.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(cl,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Di=(()=>{const c=new $i({color:16777215,side:Jt,transparent:!0}),e=8421504,t=new lt,r=new q,i=new q,n=[],s=new q,a="+x+y";function o(_){return Array.isArray(_)?_[0]:_}let l=()=>{const _=new Lt(new Ha(1,1),c);return l=()=>_,_},u=()=>{const _=new Lt(new Ha(1,1,32,1),c);return u=()=>_,_};const f={type:"syncstart"},h={type:"synccomplete"},m=["font","fontSize","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],x=m.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class p extends Lt{constructor(){const v=new jp;super(v,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.fontSize=.1,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=e,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=a,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(v){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(v):(this._isSyncing=!0,this.dispatchEvent(f),Gp({text:this.text,font:this.font,fontSize:this.fontSize||.1,letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF},M=>{this._isSyncing=!1,this._textRenderInfo=M,this.geometry.updateGlyphs(M.glyphBounds,M.glyphAtlasIndices,M.blockBounds,M.chunkedBounds,M.glyphColors);const g=this._queuedSyncs;g&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{g.forEach(S=>S&&S())})),this.dispatchEvent(h),v&&v()})))}onBeforeRender(v,M,g,S,w,D){this.sync(),w.isTroikaTextMaterial&&this._prepareForRender(w),w._hadOwnSide=w.hasOwnProperty("side"),this.geometry.setSide(w._actualSide=w.side),w.side=Bn}onAfterRender(v,M,g,S,w,D){w._hadOwnSide?w.side=w._actualSide:delete w.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let v=this._derivedMaterial;const M=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=c.clone());if((!v||v.baseMaterial!==M)&&(v=this._derivedMaterial=Qp(M),M.addEventListener("dispose",function g(){M.removeEventListener("dispose",g),v.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let g=v._outlineMtl;return g||(g=v._outlineMtl=Object.create(v,{id:{value:v.id+.1}}),g.isTextOutlineMaterial=!0,g.depthWrite=!1,g.map=null,v.addEventListener("dispose",function S(){v.removeEventListener("dispose",S),g.dispose()})),[g,v]}else return v}set material(v){v&&v.isTroikaTextMaterial?(this._derivedMaterial=v,this._baseMaterial=v.baseMaterial):this._baseMaterial=v}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(v){this.geometry.detail=v}get curveRadius(){return this.geometry.curveRadius}set curveRadius(v){this.geometry.curveRadius=v}get customDepthMaterial(){return o(this.material).getDepthMaterial()}get customDistanceMaterial(){return o(this.material).getDistanceMaterial()}_prepareForRender(v){const M=v.isTextOutlineMaterial,g=v.uniforms,S=this.textRenderInfo;if(S){const{sdfTexture:y,blockBounds:T}=S;g.uTroikaSDFTexture.value=y,g.uTroikaSDFTextureSize.value.set(y.image.width,y.image.height),g.uTroikaSDFGlyphSize.value=S.sdfGlyphSize,g.uTroikaSDFExponent.value=S.sdfExponent,g.uTroikaTotalBounds.value.fromArray(T),g.uTroikaUseGlyphColors.value=!M&&!!S.glyphColors;let I=0,Y=0,F=0,U,C,V,G=0,te=0;if(M){let{outlineWidth:L,outlineOffsetX:R,outlineOffsetY:P,outlineBlur:O,outlineOpacity:X}=this;I=this._parsePercent(L)||0,Y=Math.max(0,this._parsePercent(O)||0),U=X,G=this._parsePercent(R)||0,te=this._parsePercent(P)||0}else F=Math.max(0,this._parsePercent(this.strokeWidth)||0),F&&(V=this.strokeColor,g.uTroikaStrokeColor.value.set(V==null?e:V),C=this.strokeOpacity,C==null&&(C=1)),U=this.fillOpacity;g.uTroikaDistanceOffset.value=I,g.uTroikaPositionOffset.value.set(G,te),g.uTroikaBlurRadius.value=Y,g.uTroikaStrokeWidth.value=F,g.uTroikaStrokeOpacity.value=C,g.uTroikaFillOpacity.value=U==null?1:U,g.uTroikaCurveRadius.value=this.curveRadius||0;let j=this.clipRect;if(j&&Array.isArray(j)&&j.length===4)g.uTroikaClipRect.value.fromArray(j);else{const L=(this.fontSize||.1)*100;g.uTroikaClipRect.value.set(T[0]-L,T[1]-L,T[2]+L,T[3]+L)}this.geometry.applyClipRect(g.uTroikaClipRect.value)}g.uTroikaSDFDebug.value=!!this.debugSDF,v.polygonOffset=!!this.depthOffset,v.polygonOffsetFactor=v.polygonOffsetUnits=this.depthOffset||0;const w=M?this.outlineColor||0:this.color;if(w==null)delete v.color;else{const y=v.hasOwnProperty("color")?v.color:v.color=new qe;(w!==y._input||typeof w=="object")&&y.set(y._input=w)}let D=this.orientation||a;if(D!==v._orientation){let y=g.uTroikaOrient.value;D=D.replace(/[^-+xyz]/g,"");let T=D!==a&&D.match(/^([-+])([xyz])([-+])([xyz])$/);if(T){let[,I,Y,F,U]=T;r.set(0,0,0)[Y]=I==="-"?1:-1,i.set(0,0,0)[U]=F==="-"?-1:1,t.lookAt(s,r.cross(i),i),y.setFromMatrix4(t)}else y.identity();v._orientation=D}}_parsePercent(v){if(typeof v=="string"){let M=v.match(/^(-?[\d.]+)%$/),g=M?parseFloat(M[1]):NaN;v=(isNaN(g)?0:g/100)*this.fontSize}return v}localPositionToTextCoords(v,M=new Xe){M.copy(v);const g=this.curveRadius;return g&&(M.x=Math.atan2(v.x,Math.abs(g)-Math.abs(v.z))*Math.abs(g)),M}worldPositionToTextCoords(v,M=new Xe){return r.copy(v),this.localPositionToTextCoords(this.worldToLocal(r),M)}raycast(v,M){const{textRenderInfo:g,curveRadius:S}=this;if(g){const w=g.blockBounds,D=S?u():l(),y=D.geometry,{position:T,uv:I}=y.attributes;for(let Y=0;Y<I.count;Y++){let F=w[0]+I.getX(Y)*(w[2]-w[0]);const U=w[1]+I.getY(Y)*(w[3]-w[1]);let C=0;S&&(C=S-Math.cos(F/S)*S,F=Math.sin(F/S)*S),T.setXYZ(Y,F,U,C)}y.boundingSphere=this.geometry.boundingSphere,y.boundingBox=this.geometry.boundingBox,D.matrixWorld=this.matrixWorld,D.material.side=this.material.side,n.length=0,D.raycast(v,n);for(let Y=0;Y<n.length;Y++)n[Y].object=this,M.push(n[Y])}}copy(v){const M=this.geometry;return super.copy(v),this.geometry=M,x.forEach(g=>{this[g]=v[g]}),this}clone(){return new this.constructor().copy(this)}}m.forEach(_=>{const v="_private_"+_;Object.defineProperty(p.prototype,_,{get(){return this[v]},set(M){M!==this[v]&&(this[v]=M,this._needsSync=!0)}})});let d=!1;return Object.defineProperty(p.prototype,"anchor",{get(){return this._deprecated_anchor},set(_){this._deprecated_anchor=_,d||(console.warn("TextMesh: `anchor` has been deprecated; use `anchorX` and `anchorY` instead."),d=!0),Array.isArray(_)?(this.anchorX=`${(+_[0]||0)*100}%`,this.anchorY=`${(+_[1]||0)*100}%`):this.anchorX=this.anchorY=0}}),p})();window.transformation=[new q(NaN,NaN,NaN),new q(NaN,NaN,NaN),new q(NaN,NaN,NaN)];window.input=[new q(NaN,NaN,NaN),new q(NaN,NaN,NaN),new q(NaN,NaN,NaN),new q(NaN,NaN,NaN)];window.drawn=null;window.drawnTransformation=null;window.divisions=1;const Xn=new al({antialias:!0});Xn.setPixelRatio(window.devicePixelRatio);Xn.setSize(window.innerWidth,window.innerHeight);Xn.outputEncoding=$e;container.appendChild(Xn.domElement);const ft=new dp;ft.background=new qe(12575709);const Hn=new Nt(45,window.innerWidth/window.innerHeight,1,500);Hn.position.set(50,50,50);Hn.lookAt(0,0,0);const qn=new gl(Hn,Xn.domElement);qn.target.set(0,0,0);qn.update();qn.enablePan=!1;qn.enableDamping=!0;qn.maxDistance=300;qn.minDistance=150;function Ka(c,e,t){var r=new _l({color:e,linewidth:c,dashed:!1});r.resolution.set(window.innerWidth,window.innerHeight);var i=new vl;i.setPositions(t);var n=new xl(i,r);return n.computeLineDistances(),n.scale.set(1,1,1),n}const $p=[-50,0,0,50,0,0],em=[0,-50,0,0,50,0],tm=[0,0,-50,0,0,50];var nm=Ka(5,0,$p),im=Ka(5,0,em),rm=Ka(5,0,tm);ft.add(nm,im,rm);window.onresize=function(){Hn.aspect=window.innerWidth/window.innerHeight,Hn.updateProjectionMatrix(),Xn.setSize(window.innerWidth,window.innerHeight)};const Pi=new Di;ft.add(Pi);Pi.text="x axis";Pi.fontSize=2;Pi.position.x=1;Pi.color=0;Pi.sync();for(let c=1;c<10;c++){var Ln=new Di;ft.add(Ln),Ln.text=c*window.divisions,Ln.fontSize=1,Ln.position.x=c*5,Ln.position.y=2,Ln.color=1118481,Ln.sync()}const jn=new Di;ft.add(jn);jn.text="y axis";jn.fontSize=2;jn.position.y=1;jn.orientation="+y+z";jn.color=0;jn.sync();for(let c=1;c<10;c++){var yn=new Di;ft.add(yn),yn.text=c*window.divisions,yn.fontSize=1,yn.orientation="-y-z",yn.position.y=c*5,yn.position.z=1,yn.color=1118481,yn.sync()}const Yn=new Di;ft.add(Yn);Yn.text="z axis";Yn.fontSize=2;Yn.position.z=6;Yn.orientation="-z+y";Yn.color=0;Yn.sync();for(let c=1;c<10;c++){var Sn=new Di;ft.add(Sn),Sn.text=c*window.divisions,Sn.orientation="-z+y",Sn.fontSize=1,Sn.position.z=c*5,Sn.position.y=2,Sn.color=1118481,Sn.sync()}function am(){if(window.inputComplete){if(window.inputChange&&(ft.remove(window.drawn),ft.remove(window.drawnTransformation),window.drawn=null,window.drawnTransformation=null,window.inputChange=!1),window.drawn==null){console.log("change");const c=new Ro(window.input),e=new $i({color:11141120}),t=new Lt(c,e);window.drawn=t,ft.add(t)}}else window.drawn!=null&&(ft.remove(window.drawn),window.drawn=null)}function sm(){if(window.transformationComplete&window.inputComplete){if(window.transChange&&(ft.remove(window.drawnTransformation),window.drawnTransformation=null,window.transChange=!1),window.drawnTransformation==null){for(var c=[new q(NaN,NaN,NaN),new q(NaN,NaN,NaN),new q(NaN,NaN,NaN),new q(NaN,NaN,NaN)],e=window.transformation,t=window.input,r=0;r<4;r++)for(var i=0;i<3;i++)i==0&&(c[r].x=e[0].x*t[r].x+e[1].x*t[r].y+e[2].x*t[r].z),i==1&&(c[r].y=e[0].y*t[r].x+e[1].y*t[r].y+e[2].y*t[r].z),i==2&&(c[r].z=e[0].z*t[r].x+e[1].z*t[r].y+e[2].z*t[r].z);const n=new Ro(c),s=new $i({color:170}),a=new Lt(n,s);window.drawnTransformation=a,ft.add(a)}}else window.drawnTransformation!=null&&(ft.remove(window.drawnTransformation),window.drawnTransformation=null)}function hl(){ft.background=new qe(Hn.position.X),requestAnimationFrame(hl),qn.update(),sm(),am(),Xn.render(ft,Hn)}hl();
