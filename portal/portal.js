// Patched copy of bitymi-demos portal/assets/portal-f59165bb.js for the personal site:
// params from window.__PORTAL_QS, window.__portalTextures(on), a "portal-ready" event, and a
// tilt reference that re-centres on wherever a touch drag left the view.
var fs=Object.defineProperty;var ps=(n,a,f)=>a in n?fs(n,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):n[a]=f;var G=(n,a,f)=>(ps(n,typeof a!="symbol"?a+"":a,f),f);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))v(m);new MutationObserver(m=>{for(const y of m)if(y.type==="childList")for(const A of y.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&v(A)}).observe(document,{childList:!0,subtree:!0});function f(m){const y={};return m.integrity&&(y.integrity=m.integrity),m.referrerPolicy&&(y.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?y.credentials="include":m.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function v(m){if(m.ep)return;m.ep=!0;const y=f(m);fetch(m.href,y)}})();function _s(n,a){return class extends n{constructor(...f){super(...f),a(this)}}}const hs=_s(Array,n=>n.fill(0));let pe=1e-6;function gs(n){function a(h=0,x=0){const w=new n(2);return h!==void 0&&(w[0]=h,x!==void 0&&(w[1]=x)),w}const f=a;function v(h,x,w){const e=w??new n(2);return e[0]=h,e[1]=x,e}function m(h,x){const w=x??new n(2);return w[0]=Math.ceil(h[0]),w[1]=Math.ceil(h[1]),w}function y(h,x){const w=x??new n(2);return w[0]=Math.floor(h[0]),w[1]=Math.floor(h[1]),w}function A(h,x){const w=x??new n(2);return w[0]=Math.round(h[0]),w[1]=Math.round(h[1]),w}function E(h,x=0,w=1,e){const u=e??new n(2);return u[0]=Math.min(w,Math.max(x,h[0])),u[1]=Math.min(w,Math.max(x,h[1])),u}function k(h,x,w){const e=w??new n(2);return e[0]=h[0]+x[0],e[1]=h[1]+x[1],e}function z(h,x,w,e){const u=e??new n(2);return u[0]=h[0]+x[0]*w,u[1]=h[1]+x[1]*w,u}function O(h,x){const w=h[0],e=h[1],u=x[0],i=x[1],o=Math.sqrt(w*w+e*e),s=Math.sqrt(u*u+i*i),c=o*s,g=c&&$(h,x)/c;return Math.acos(g)}function Z(h,x,w){const e=w??new n(2);return e[0]=h[0]-x[0],e[1]=h[1]-x[1],e}const B=Z;function I(h,x){return Math.abs(h[0]-x[0])<pe&&Math.abs(h[1]-x[1])<pe}function W(h,x){return h[0]===x[0]&&h[1]===x[1]}function re(h,x,w,e){const u=e??new n(2);return u[0]=h[0]+w*(x[0]-h[0]),u[1]=h[1]+w*(x[1]-h[1]),u}function q(h,x,w,e){const u=e??new n(2);return u[0]=h[0]+w[0]*(x[0]-h[0]),u[1]=h[1]+w[1]*(x[1]-h[1]),u}function H(h,x,w){const e=w??new n(2);return e[0]=Math.max(h[0],x[0]),e[1]=Math.max(h[1],x[1]),e}function X(h,x,w){const e=w??new n(2);return e[0]=Math.min(h[0],x[0]),e[1]=Math.min(h[1],x[1]),e}function C(h,x,w){const e=w??new n(2);return e[0]=h[0]*x,e[1]=h[1]*x,e}const Q=C;function ee(h,x,w){const e=w??new n(2);return e[0]=h[0]/x,e[1]=h[1]/x,e}function Y(h,x){const w=x??new n(2);return w[0]=1/h[0],w[1]=1/h[1],w}const V=Y;function N(h,x,w){const e=w??new n(3),u=h[0]*x[1]-h[1]*x[0];return e[0]=0,e[1]=0,e[2]=u,e}function $(h,x){return h[0]*x[0]+h[1]*x[1]}function le(h){const x=h[0],w=h[1];return Math.sqrt(x*x+w*w)}const P=le;function F(h){const x=h[0],w=h[1];return x*x+w*w}const te=F;function ce(h,x){const w=h[0]-x[0],e=h[1]-x[1];return Math.sqrt(w*w+e*e)}const K=ce;function ie(h,x){const w=h[0]-x[0],e=h[1]-x[1];return w*w+e*e}const ae=ie;function J(h,x){const w=x??new n(2),e=h[0],u=h[1],i=Math.sqrt(e*e+u*u);return i>1e-5?(w[0]=e/i,w[1]=u/i):(w[0]=0,w[1]=0),w}function we(h,x){const w=x??new n(2);return w[0]=-h[0],w[1]=-h[1],w}function fe(h,x){const w=x??new n(2);return w[0]=h[0],w[1]=h[1],w}const be=fe;function xe(h,x,w){const e=w??new n(2);return e[0]=h[0]*x[0],e[1]=h[1]*x[1],e}const Se=xe;function oe(h,x,w){const e=w??new n(2);return e[0]=h[0]/x[0],e[1]=h[1]/x[1],e}const _e=oe;function ye(h=1,x){const w=x??new n(2),e=Math.random()*2*Math.PI;return w[0]=Math.cos(e)*h,w[1]=Math.sin(e)*h,w}function S(h){const x=h??new n(2);return x[0]=0,x[1]=0,x}function D(h,x,w){const e=w??new n(2),u=h[0],i=h[1];return e[0]=u*x[0]+i*x[4]+x[12],e[1]=u*x[1]+i*x[5]+x[13],e}function _(h,x,w){const e=w??new n(2),u=h[0],i=h[1];return e[0]=x[0]*u+x[4]*i+x[8],e[1]=x[1]*u+x[5]*i+x[9],e}function t(h,x,w,e){const u=e??new n(2),i=h[0]-x[0],o=h[1]-x[1],s=Math.sin(w),c=Math.cos(w);return u[0]=i*c-o*s+x[0],u[1]=i*s+o*c+x[1],u}function l(h,x,w){const e=w??new n(2);return J(h,e),C(e,x,e)}function r(h,x,w){const e=w??new n(2);return le(h)>x?l(h,x,e):fe(h,e)}function d(h,x,w){const e=w??new n(2);return re(h,x,.5,e)}return{create:a,fromValues:f,set:v,ceil:m,floor:y,round:A,clamp:E,add:k,addScaled:z,angle:O,subtract:Z,sub:B,equalsApproximately:I,equals:W,lerp:re,lerpV:q,max:H,min:X,mulScalar:C,scale:Q,divScalar:ee,inverse:Y,invert:V,cross:N,dot:$,length:le,len:P,lengthSq:F,lenSq:te,distance:ce,dist:K,distanceSq:ie,distSq:ae,normalize:J,negate:we,copy:fe,clone:be,multiply:xe,mul:Se,divide:oe,div:_e,random:ye,zero:S,transformMat4:D,transformMat3:_,rotate:t,setLength:l,truncate:r,midpoint:d}}const An=new Map;function Xn(n){let a=An.get(n);return a||(a=gs(n),An.set(n,a)),a}function ws(n){function a(s,c,g){const p=new n(3);return s!==void 0&&(p[0]=s,c!==void 0&&(p[1]=c,g!==void 0&&(p[2]=g))),p}const f=a;function v(s,c,g,p){const b=p??new n(3);return b[0]=s,b[1]=c,b[2]=g,b}function m(s,c){const g=c??new n(3);return g[0]=Math.ceil(s[0]),g[1]=Math.ceil(s[1]),g[2]=Math.ceil(s[2]),g}function y(s,c){const g=c??new n(3);return g[0]=Math.floor(s[0]),g[1]=Math.floor(s[1]),g[2]=Math.floor(s[2]),g}function A(s,c){const g=c??new n(3);return g[0]=Math.round(s[0]),g[1]=Math.round(s[1]),g[2]=Math.round(s[2]),g}function E(s,c=0,g=1,p){const b=p??new n(3);return b[0]=Math.min(g,Math.max(c,s[0])),b[1]=Math.min(g,Math.max(c,s[1])),b[2]=Math.min(g,Math.max(c,s[2])),b}function k(s,c,g){const p=g??new n(3);return p[0]=s[0]+c[0],p[1]=s[1]+c[1],p[2]=s[2]+c[2],p}function z(s,c,g,p){const b=p??new n(3);return b[0]=s[0]+c[0]*g,b[1]=s[1]+c[1]*g,b[2]=s[2]+c[2]*g,b}function O(s,c){const g=s[0],p=s[1],b=s[2],T=c[0],M=c[1],L=c[2],U=Math.sqrt(g*g+p*p+b*b),R=Math.sqrt(T*T+M*M+L*L),ne=U*R,ue=ne&&$(s,c)/ne;return Math.acos(ue)}function Z(s,c,g){const p=g??new n(3);return p[0]=s[0]-c[0],p[1]=s[1]-c[1],p[2]=s[2]-c[2],p}const B=Z;function I(s,c){return Math.abs(s[0]-c[0])<pe&&Math.abs(s[1]-c[1])<pe&&Math.abs(s[2]-c[2])<pe}function W(s,c){return s[0]===c[0]&&s[1]===c[1]&&s[2]===c[2]}function re(s,c,g,p){const b=p??new n(3);return b[0]=s[0]+g*(c[0]-s[0]),b[1]=s[1]+g*(c[1]-s[1]),b[2]=s[2]+g*(c[2]-s[2]),b}function q(s,c,g,p){const b=p??new n(3);return b[0]=s[0]+g[0]*(c[0]-s[0]),b[1]=s[1]+g[1]*(c[1]-s[1]),b[2]=s[2]+g[2]*(c[2]-s[2]),b}function H(s,c,g){const p=g??new n(3);return p[0]=Math.max(s[0],c[0]),p[1]=Math.max(s[1],c[1]),p[2]=Math.max(s[2],c[2]),p}function X(s,c,g){const p=g??new n(3);return p[0]=Math.min(s[0],c[0]),p[1]=Math.min(s[1],c[1]),p[2]=Math.min(s[2],c[2]),p}function C(s,c,g){const p=g??new n(3);return p[0]=s[0]*c,p[1]=s[1]*c,p[2]=s[2]*c,p}const Q=C;function ee(s,c,g){const p=g??new n(3);return p[0]=s[0]/c,p[1]=s[1]/c,p[2]=s[2]/c,p}function Y(s,c){const g=c??new n(3);return g[0]=1/s[0],g[1]=1/s[1],g[2]=1/s[2],g}const V=Y;function N(s,c,g){const p=g??new n(3),b=s[2]*c[0]-s[0]*c[2],T=s[0]*c[1]-s[1]*c[0];return p[0]=s[1]*c[2]-s[2]*c[1],p[1]=b,p[2]=T,p}function $(s,c){return s[0]*c[0]+s[1]*c[1]+s[2]*c[2]}function le(s){const c=s[0],g=s[1],p=s[2];return Math.sqrt(c*c+g*g+p*p)}const P=le;function F(s){const c=s[0],g=s[1],p=s[2];return c*c+g*g+p*p}const te=F;function ce(s,c){const g=s[0]-c[0],p=s[1]-c[1],b=s[2]-c[2];return Math.sqrt(g*g+p*p+b*b)}const K=ce;function ie(s,c){const g=s[0]-c[0],p=s[1]-c[1],b=s[2]-c[2];return g*g+p*p+b*b}const ae=ie;function J(s,c){const g=c??new n(3),p=s[0],b=s[1],T=s[2],M=Math.sqrt(p*p+b*b+T*T);return M>1e-5?(g[0]=p/M,g[1]=b/M,g[2]=T/M):(g[0]=0,g[1]=0,g[2]=0),g}function we(s,c){const g=c??new n(3);return g[0]=-s[0],g[1]=-s[1],g[2]=-s[2],g}function fe(s,c){const g=c??new n(3);return g[0]=s[0],g[1]=s[1],g[2]=s[2],g}const be=fe;function xe(s,c,g){const p=g??new n(3);return p[0]=s[0]*c[0],p[1]=s[1]*c[1],p[2]=s[2]*c[2],p}const Se=xe;function oe(s,c,g){const p=g??new n(3);return p[0]=s[0]/c[0],p[1]=s[1]/c[1],p[2]=s[2]/c[2],p}const _e=oe;function ye(s=1,c){const g=c??new n(3),p=Math.random()*2*Math.PI,b=Math.random()*2-1,T=Math.sqrt(1-b*b)*s;return g[0]=Math.cos(p)*T,g[1]=Math.sin(p)*T,g[2]=b*s,g}function S(s){const c=s??new n(3);return c[0]=0,c[1]=0,c[2]=0,c}function D(s,c,g){const p=g??new n(3),b=s[0],T=s[1],M=s[2],L=c[3]*b+c[7]*T+c[11]*M+c[15]||1;return p[0]=(c[0]*b+c[4]*T+c[8]*M+c[12])/L,p[1]=(c[1]*b+c[5]*T+c[9]*M+c[13])/L,p[2]=(c[2]*b+c[6]*T+c[10]*M+c[14])/L,p}function _(s,c,g){const p=g??new n(3),b=s[0],T=s[1],M=s[2];return p[0]=b*c[0*4+0]+T*c[1*4+0]+M*c[2*4+0],p[1]=b*c[0*4+1]+T*c[1*4+1]+M*c[2*4+1],p[2]=b*c[0*4+2]+T*c[1*4+2]+M*c[2*4+2],p}function t(s,c,g){const p=g??new n(3),b=s[0],T=s[1],M=s[2];return p[0]=b*c[0]+T*c[4]+M*c[8],p[1]=b*c[1]+T*c[5]+M*c[9],p[2]=b*c[2]+T*c[6]+M*c[10],p}function l(s,c,g){const p=g??new n(3),b=c[0],T=c[1],M=c[2],L=c[3]*2,U=s[0],R=s[1],ne=s[2],ue=T*ne-M*R,j=M*U-b*ne,se=b*R-T*U;return p[0]=U+ue*L+(T*se-M*j)*2,p[1]=R+j*L+(M*ue-b*se)*2,p[2]=ne+se*L+(b*j-T*ue)*2,p}function r(s,c){const g=c??new n(3);return g[0]=s[12],g[1]=s[13],g[2]=s[14],g}function d(s,c,g){const p=g??new n(3),b=c*4;return p[0]=s[b+0],p[1]=s[b+1],p[2]=s[b+2],p}function h(s,c){const g=c??new n(3),p=s[0],b=s[1],T=s[2],M=s[4],L=s[5],U=s[6],R=s[8],ne=s[9],ue=s[10];return g[0]=Math.sqrt(p*p+b*b+T*T),g[1]=Math.sqrt(M*M+L*L+U*U),g[2]=Math.sqrt(R*R+ne*ne+ue*ue),g}function x(s,c,g,p){const b=p??new n(3),T=[],M=[];return T[0]=s[0]-c[0],T[1]=s[1]-c[1],T[2]=s[2]-c[2],M[0]=T[0],M[1]=T[1]*Math.cos(g)-T[2]*Math.sin(g),M[2]=T[1]*Math.sin(g)+T[2]*Math.cos(g),b[0]=M[0]+c[0],b[1]=M[1]+c[1],b[2]=M[2]+c[2],b}function w(s,c,g,p){const b=p??new n(3),T=[],M=[];return T[0]=s[0]-c[0],T[1]=s[1]-c[1],T[2]=s[2]-c[2],M[0]=T[2]*Math.sin(g)+T[0]*Math.cos(g),M[1]=T[1],M[2]=T[2]*Math.cos(g)-T[0]*Math.sin(g),b[0]=M[0]+c[0],b[1]=M[1]+c[1],b[2]=M[2]+c[2],b}function e(s,c,g,p){const b=p??new n(3),T=[],M=[];return T[0]=s[0]-c[0],T[1]=s[1]-c[1],T[2]=s[2]-c[2],M[0]=T[0]*Math.cos(g)-T[1]*Math.sin(g),M[1]=T[0]*Math.sin(g)+T[1]*Math.cos(g),M[2]=T[2],b[0]=M[0]+c[0],b[1]=M[1]+c[1],b[2]=M[2]+c[2],b}function u(s,c,g){const p=g??new n(3);return J(s,p),C(p,c,p)}function i(s,c,g){const p=g??new n(3);return le(s)>c?u(s,c,p):fe(s,p)}function o(s,c,g){const p=g??new n(3);return re(s,c,.5,p)}return{create:a,fromValues:f,set:v,ceil:m,floor:y,round:A,clamp:E,add:k,addScaled:z,angle:O,subtract:Z,sub:B,equalsApproximately:I,equals:W,lerp:re,lerpV:q,max:H,min:X,mulScalar:C,scale:Q,divScalar:ee,inverse:Y,invert:V,cross:N,dot:$,length:le,len:P,lengthSq:F,lenSq:te,distance:ce,dist:K,distanceSq:ie,distSq:ae,normalize:J,negate:we,copy:fe,clone:be,multiply:xe,mul:Se,divide:oe,div:_e,random:ye,zero:S,transformMat4:D,transformMat4Upper3x3:_,transformMat3:t,transformQuat:l,getTranslation:r,getAxis:d,getScaling:h,rotateX:x,rotateY:w,rotateZ:e,setLength:u,truncate:i,midpoint:o}}const kn=new Map;function Qt(n){let a=kn.get(n);return a||(a=ws(n),kn.set(n,a)),a}function xs(n){const a=Xn(n),f=Qt(n);function v(t,l,r,d,h,x,w,e,u){const i=new n(12);return i[3]=0,i[7]=0,i[11]=0,t!==void 0&&(i[0]=t,l!==void 0&&(i[1]=l,r!==void 0&&(i[2]=r,d!==void 0&&(i[4]=d,h!==void 0&&(i[5]=h,x!==void 0&&(i[6]=x,w!==void 0&&(i[8]=w,e!==void 0&&(i[9]=e,u!==void 0&&(i[10]=u))))))))),i}function m(t,l,r,d,h,x,w,e,u,i){const o=i??new n(12);return o[0]=t,o[1]=l,o[2]=r,o[3]=0,o[4]=d,o[5]=h,o[6]=x,o[7]=0,o[8]=w,o[9]=e,o[10]=u,o[11]=0,o}function y(t,l){const r=l??new n(12);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=0,r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=0,r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=0,r}function A(t,l){const r=l??new n(12),d=t[0],h=t[1],x=t[2],w=t[3],e=d+d,u=h+h,i=x+x,o=d*e,s=h*e,c=h*u,g=x*e,p=x*u,b=x*i,T=w*e,M=w*u,L=w*i;return r[0]=1-c-b,r[1]=s+L,r[2]=g-M,r[3]=0,r[4]=s-L,r[5]=1-o-b,r[6]=p+T,r[7]=0,r[8]=g+M,r[9]=p-T,r[10]=1-o-c,r[11]=0,r}function E(t,l){const r=l??new n(12);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[4]=-t[4],r[5]=-t[5],r[6]=-t[6],r[8]=-t[8],r[9]=-t[9],r[10]=-t[10],r}function k(t,l,r){const d=r??new n(12);return d[0]=t[0]*l,d[1]=t[1]*l,d[2]=t[2]*l,d[4]=t[4]*l,d[5]=t[5]*l,d[6]=t[6]*l,d[8]=t[8]*l,d[9]=t[9]*l,d[10]=t[10]*l,d}const z=k;function O(t,l,r){const d=r??new n(12);return d[0]=t[0]+l[0],d[1]=t[1]+l[1],d[2]=t[2]+l[2],d[4]=t[4]+l[4],d[5]=t[5]+l[5],d[6]=t[6]+l[6],d[8]=t[8]+l[8],d[9]=t[9]+l[9],d[10]=t[10]+l[10],d}function Z(t,l){const r=l??new n(12);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[8]=t[8],r[9]=t[9],r[10]=t[10],r}const B=Z;function I(t,l){return Math.abs(t[0]-l[0])<pe&&Math.abs(t[1]-l[1])<pe&&Math.abs(t[2]-l[2])<pe&&Math.abs(t[4]-l[4])<pe&&Math.abs(t[5]-l[5])<pe&&Math.abs(t[6]-l[6])<pe&&Math.abs(t[8]-l[8])<pe&&Math.abs(t[9]-l[9])<pe&&Math.abs(t[10]-l[10])<pe}function W(t,l){return t[0]===l[0]&&t[1]===l[1]&&t[2]===l[2]&&t[4]===l[4]&&t[5]===l[5]&&t[6]===l[6]&&t[8]===l[8]&&t[9]===l[9]&&t[10]===l[10]}function re(t){const l=t??new n(12);return l[0]=1,l[1]=0,l[2]=0,l[4]=0,l[5]=1,l[6]=0,l[8]=0,l[9]=0,l[10]=1,l}function q(t,l){const r=l??new n(12);if(r===t){let c;return c=t[1],t[1]=t[4],t[4]=c,c=t[2],t[2]=t[8],t[8]=c,c=t[6],t[6]=t[9],t[9]=c,r}const d=t[0*4+0],h=t[0*4+1],x=t[0*4+2],w=t[1*4+0],e=t[1*4+1],u=t[1*4+2],i=t[2*4+0],o=t[2*4+1],s=t[2*4+2];return r[0]=d,r[1]=w,r[2]=i,r[4]=h,r[5]=e,r[6]=o,r[8]=x,r[9]=u,r[10]=s,r}function H(t,l){const r=l??new n(12),d=t[0*4+0],h=t[0*4+1],x=t[0*4+2],w=t[1*4+0],e=t[1*4+1],u=t[1*4+2],i=t[2*4+0],o=t[2*4+1],s=t[2*4+2],c=s*e-u*o,g=-s*w+u*i,p=o*w-e*i,b=1/(d*c+h*g+x*p);return r[0]=c*b,r[1]=(-s*h+x*o)*b,r[2]=(u*h-x*e)*b,r[4]=g*b,r[5]=(s*d-x*i)*b,r[6]=(-u*d+x*w)*b,r[8]=p*b,r[9]=(-o*d+h*i)*b,r[10]=(e*d-h*w)*b,r}function X(t){const l=t[0],r=t[0*4+1],d=t[0*4+2],h=t[1*4+0],x=t[1*4+1],w=t[1*4+2],e=t[2*4+0],u=t[2*4+1],i=t[2*4+2];return l*(x*i-u*w)-h*(r*i-u*d)+e*(r*w-x*d)}const C=H;function Q(t,l,r){const d=r??new n(12),h=t[0],x=t[1],w=t[2],e=t[4+0],u=t[4+1],i=t[4+2],o=t[8+0],s=t[8+1],c=t[8+2],g=l[0],p=l[1],b=l[2],T=l[4+0],M=l[4+1],L=l[4+2],U=l[8+0],R=l[8+1],ne=l[8+2];return d[0]=h*g+e*p+o*b,d[1]=x*g+u*p+s*b,d[2]=w*g+i*p+c*b,d[4]=h*T+e*M+o*L,d[5]=x*T+u*M+s*L,d[6]=w*T+i*M+c*L,d[8]=h*U+e*R+o*ne,d[9]=x*U+u*R+s*ne,d[10]=w*U+i*R+c*ne,d}const ee=Q;function Y(t,l,r){const d=r??re();return t!==d&&(d[0]=t[0],d[1]=t[1],d[2]=t[2],d[4]=t[4],d[5]=t[5],d[6]=t[6]),d[8]=l[0],d[9]=l[1],d[10]=1,d}function V(t,l){const r=l??a.create();return r[0]=t[8],r[1]=t[9],r}function N(t,l,r){const d=r??a.create(),h=l*4;return d[0]=t[h+0],d[1]=t[h+1],d}function $(t,l,r,d){const h=d===t?t:Z(t,d),x=r*4;return h[x+0]=l[0],h[x+1]=l[1],h}function le(t,l){const r=l??a.create(),d=t[0],h=t[1],x=t[4],w=t[5];return r[0]=Math.sqrt(d*d+h*h),r[1]=Math.sqrt(x*x+w*w),r}function P(t,l){const r=l??f.create(),d=t[0],h=t[1],x=t[2],w=t[4],e=t[5],u=t[6],i=t[8],o=t[9],s=t[10];return r[0]=Math.sqrt(d*d+h*h+x*x),r[1]=Math.sqrt(w*w+e*e+u*u),r[2]=Math.sqrt(i*i+o*o+s*s),r}function F(t,l){const r=l??new n(12);return r[0]=1,r[1]=0,r[2]=0,r[4]=0,r[5]=1,r[6]=0,r[8]=t[0],r[9]=t[1],r[10]=1,r}function te(t,l,r){const d=r??new n(12),h=l[0],x=l[1],w=t[0],e=t[1],u=t[2],i=t[1*4+0],o=t[1*4+1],s=t[1*4+2],c=t[2*4+0],g=t[2*4+1],p=t[2*4+2];return t!==d&&(d[0]=w,d[1]=e,d[2]=u,d[4]=i,d[5]=o,d[6]=s),d[8]=w*h+i*x+c,d[9]=e*h+o*x+g,d[10]=u*h+s*x+p,d}function ce(t,l){const r=l??new n(12),d=Math.cos(t),h=Math.sin(t);return r[0]=d,r[1]=h,r[2]=0,r[4]=-h,r[5]=d,r[6]=0,r[8]=0,r[9]=0,r[10]=1,r}function K(t,l,r){const d=r??new n(12),h=t[0*4+0],x=t[0*4+1],w=t[0*4+2],e=t[1*4+0],u=t[1*4+1],i=t[1*4+2],o=Math.cos(l),s=Math.sin(l);return d[0]=o*h+s*e,d[1]=o*x+s*u,d[2]=o*w+s*i,d[4]=o*e-s*h,d[5]=o*u-s*x,d[6]=o*i-s*w,t!==d&&(d[8]=t[8],d[9]=t[9],d[10]=t[10]),d}function ie(t,l){const r=l??new n(12),d=Math.cos(t),h=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[4]=0,r[5]=d,r[6]=h,r[8]=0,r[9]=-h,r[10]=d,r}function ae(t,l,r){const d=r??new n(12),h=t[4],x=t[5],w=t[6],e=t[8],u=t[9],i=t[10],o=Math.cos(l),s=Math.sin(l);return d[4]=o*h+s*e,d[5]=o*x+s*u,d[6]=o*w+s*i,d[8]=o*e-s*h,d[9]=o*u-s*x,d[10]=o*i-s*w,t!==d&&(d[0]=t[0],d[1]=t[1],d[2]=t[2]),d}function J(t,l){const r=l??new n(12),d=Math.cos(t),h=Math.sin(t);return r[0]=d,r[1]=0,r[2]=-h,r[4]=0,r[5]=1,r[6]=0,r[8]=h,r[9]=0,r[10]=d,r}function we(t,l,r){const d=r??new n(12),h=t[0*4+0],x=t[0*4+1],w=t[0*4+2],e=t[2*4+0],u=t[2*4+1],i=t[2*4+2],o=Math.cos(l),s=Math.sin(l);return d[0]=o*h-s*e,d[1]=o*x-s*u,d[2]=o*w-s*i,d[8]=o*e+s*h,d[9]=o*u+s*x,d[10]=o*i+s*w,t!==d&&(d[4]=t[4],d[5]=t[5],d[6]=t[6]),d}const fe=ce,be=K;function xe(t,l){const r=l??new n(12);return r[0]=t[0],r[1]=0,r[2]=0,r[4]=0,r[5]=t[1],r[6]=0,r[8]=0,r[9]=0,r[10]=1,r}function Se(t,l,r){const d=r??new n(12),h=l[0],x=l[1];return d[0]=h*t[0*4+0],d[1]=h*t[0*4+1],d[2]=h*t[0*4+2],d[4]=x*t[1*4+0],d[5]=x*t[1*4+1],d[6]=x*t[1*4+2],t!==d&&(d[8]=t[8],d[9]=t[9],d[10]=t[10]),d}function oe(t,l){const r=l??new n(12);return r[0]=t[0],r[1]=0,r[2]=0,r[4]=0,r[5]=t[1],r[6]=0,r[8]=0,r[9]=0,r[10]=t[2],r}function _e(t,l,r){const d=r??new n(12),h=l[0],x=l[1],w=l[2];return d[0]=h*t[0*4+0],d[1]=h*t[0*4+1],d[2]=h*t[0*4+2],d[4]=x*t[1*4+0],d[5]=x*t[1*4+1],d[6]=x*t[1*4+2],d[8]=w*t[2*4+0],d[9]=w*t[2*4+1],d[10]=w*t[2*4+2],d}function ye(t,l){const r=l??new n(12);return r[0]=t,r[1]=0,r[2]=0,r[4]=0,r[5]=t,r[6]=0,r[8]=0,r[9]=0,r[10]=1,r}function S(t,l,r){const d=r??new n(12);return d[0]=l*t[0*4+0],d[1]=l*t[0*4+1],d[2]=l*t[0*4+2],d[4]=l*t[1*4+0],d[5]=l*t[1*4+1],d[6]=l*t[1*4+2],t!==d&&(d[8]=t[8],d[9]=t[9],d[10]=t[10]),d}function D(t,l){const r=l??new n(12);return r[0]=t,r[1]=0,r[2]=0,r[4]=0,r[5]=t,r[6]=0,r[8]=0,r[9]=0,r[10]=t,r}function _(t,l,r){const d=r??new n(12);return d[0]=l*t[0*4+0],d[1]=l*t[0*4+1],d[2]=l*t[0*4+2],d[4]=l*t[1*4+0],d[5]=l*t[1*4+1],d[6]=l*t[1*4+2],d[8]=l*t[2*4+0],d[9]=l*t[2*4+1],d[10]=l*t[2*4+2],d}return{add:O,clone:B,copy:Z,create:v,determinant:X,equals:W,equalsApproximately:I,fromMat4:y,fromQuat:A,get3DScaling:P,getAxis:N,getScaling:le,getTranslation:V,identity:re,inverse:H,invert:C,mul:ee,mulScalar:z,multiply:Q,multiplyScalar:k,negate:E,rotate:K,rotateX:ae,rotateY:we,rotateZ:be,rotation:ce,rotationX:ie,rotationY:J,rotationZ:fe,scale:Se,scale3D:_e,scaling:xe,scaling3D:oe,set:m,setAxis:$,setTranslation:Y,translate:te,translation:F,transpose:q,uniformScale:S,uniformScale3D:_,uniformScaling:ye,uniformScaling3D:D}}const Mn=new Map;function ms(n){let a=Mn.get(n);return a||(a=xs(n),Mn.set(n,a)),a}function ys(n){const a=Qt(n);function f(e,u,i,o,s,c,g,p,b,T,M,L,U,R,ne,ue){const j=new n(16);return e!==void 0&&(j[0]=e,u!==void 0&&(j[1]=u,i!==void 0&&(j[2]=i,o!==void 0&&(j[3]=o,s!==void 0&&(j[4]=s,c!==void 0&&(j[5]=c,g!==void 0&&(j[6]=g,p!==void 0&&(j[7]=p,b!==void 0&&(j[8]=b,T!==void 0&&(j[9]=T,M!==void 0&&(j[10]=M,L!==void 0&&(j[11]=L,U!==void 0&&(j[12]=U,R!==void 0&&(j[13]=R,ne!==void 0&&(j[14]=ne,ue!==void 0&&(j[15]=ue)))))))))))))))),j}function v(e,u,i,o,s,c,g,p,b,T,M,L,U,R,ne,ue,j){const se=j??new n(16);return se[0]=e,se[1]=u,se[2]=i,se[3]=o,se[4]=s,se[5]=c,se[6]=g,se[7]=p,se[8]=b,se[9]=T,se[10]=M,se[11]=L,se[12]=U,se[13]=R,se[14]=ne,se[15]=ue,se}function m(e,u){const i=u??new n(16);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=0,i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=0,i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function y(e,u){const i=u??new n(16),o=e[0],s=e[1],c=e[2],g=e[3],p=o+o,b=s+s,T=c+c,M=o*p,L=s*p,U=s*b,R=c*p,ne=c*b,ue=c*T,j=g*p,se=g*b,ge=g*T;return i[0]=1-U-ue,i[1]=L+ge,i[2]=R-se,i[3]=0,i[4]=L-ge,i[5]=1-M-ue,i[6]=ne+j,i[7]=0,i[8]=R+se,i[9]=ne-j,i[10]=1-M-U,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function A(e,u){const i=u??new n(16);return i[0]=-e[0],i[1]=-e[1],i[2]=-e[2],i[3]=-e[3],i[4]=-e[4],i[5]=-e[5],i[6]=-e[6],i[7]=-e[7],i[8]=-e[8],i[9]=-e[9],i[10]=-e[10],i[11]=-e[11],i[12]=-e[12],i[13]=-e[13],i[14]=-e[14],i[15]=-e[15],i}function E(e,u,i){const o=i??new n(16);return o[0]=e[0]+u[0],o[1]=e[1]+u[1],o[2]=e[2]+u[2],o[3]=e[3]+u[3],o[4]=e[4]+u[4],o[5]=e[5]+u[5],o[6]=e[6]+u[6],o[7]=e[7]+u[7],o[8]=e[8]+u[8],o[9]=e[9]+u[9],o[10]=e[10]+u[10],o[11]=e[11]+u[11],o[12]=e[12]+u[12],o[13]=e[13]+u[13],o[14]=e[14]+u[14],o[15]=e[15]+u[15],o}function k(e,u,i){const o=i??new n(16);return o[0]=e[0]*u,o[1]=e[1]*u,o[2]=e[2]*u,o[3]=e[3]*u,o[4]=e[4]*u,o[5]=e[5]*u,o[6]=e[6]*u,o[7]=e[7]*u,o[8]=e[8]*u,o[9]=e[9]*u,o[10]=e[10]*u,o[11]=e[11]*u,o[12]=e[12]*u,o[13]=e[13]*u,o[14]=e[14]*u,o[15]=e[15]*u,o}const z=k;function O(e,u){const i=u??new n(16);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],i}const Z=O;function B(e,u){return Math.abs(e[0]-u[0])<pe&&Math.abs(e[1]-u[1])<pe&&Math.abs(e[2]-u[2])<pe&&Math.abs(e[3]-u[3])<pe&&Math.abs(e[4]-u[4])<pe&&Math.abs(e[5]-u[5])<pe&&Math.abs(e[6]-u[6])<pe&&Math.abs(e[7]-u[7])<pe&&Math.abs(e[8]-u[8])<pe&&Math.abs(e[9]-u[9])<pe&&Math.abs(e[10]-u[10])<pe&&Math.abs(e[11]-u[11])<pe&&Math.abs(e[12]-u[12])<pe&&Math.abs(e[13]-u[13])<pe&&Math.abs(e[14]-u[14])<pe&&Math.abs(e[15]-u[15])<pe}function I(e,u){return e[0]===u[0]&&e[1]===u[1]&&e[2]===u[2]&&e[3]===u[3]&&e[4]===u[4]&&e[5]===u[5]&&e[6]===u[6]&&e[7]===u[7]&&e[8]===u[8]&&e[9]===u[9]&&e[10]===u[10]&&e[11]===u[11]&&e[12]===u[12]&&e[13]===u[13]&&e[14]===u[14]&&e[15]===u[15]}function W(e){const u=e??new n(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function re(e,u){const i=u??new n(16);if(i===e){let he;return he=e[1],e[1]=e[4],e[4]=he,he=e[2],e[2]=e[8],e[8]=he,he=e[3],e[3]=e[12],e[12]=he,he=e[6],e[6]=e[9],e[9]=he,he=e[7],e[7]=e[13],e[13]=he,he=e[11],e[11]=e[14],e[14]=he,i}const o=e[0*4+0],s=e[0*4+1],c=e[0*4+2],g=e[0*4+3],p=e[1*4+0],b=e[1*4+1],T=e[1*4+2],M=e[1*4+3],L=e[2*4+0],U=e[2*4+1],R=e[2*4+2],ne=e[2*4+3],ue=e[3*4+0],j=e[3*4+1],se=e[3*4+2],ge=e[3*4+3];return i[0]=o,i[1]=p,i[2]=L,i[3]=ue,i[4]=s,i[5]=b,i[6]=U,i[7]=j,i[8]=c,i[9]=T,i[10]=R,i[11]=se,i[12]=g,i[13]=M,i[14]=ne,i[15]=ge,i}function q(e,u){const i=u??new n(16),o=e[0*4+0],s=e[0*4+1],c=e[0*4+2],g=e[0*4+3],p=e[1*4+0],b=e[1*4+1],T=e[1*4+2],M=e[1*4+3],L=e[2*4+0],U=e[2*4+1],R=e[2*4+2],ne=e[2*4+3],ue=e[3*4+0],j=e[3*4+1],se=e[3*4+2],ge=e[3*4+3],he=R*ge,Be=se*ne,Te=T*ge,Ee=se*M,De=T*ne,Oe=R*M,Fe=c*ge,Ge=se*g,ze=c*ne,Ue=R*g,qe=c*M,$e=T*g,Re=L*j,We=ue*U,Ze=p*j,ke=ue*b,Ce=p*U,st=L*b,rt=o*j,it=ue*s,at=o*U,wt=L*s,ot=o*b,ct=p*s,At=he*b+Ee*U+De*j-(Be*b+Te*U+Oe*j),Dt=Be*s+Fe*U+Ue*j-(he*s+Ge*U+ze*j),Gt=Te*s+Ge*b+qe*j-(Ee*s+Fe*b+$e*j),ft=Oe*s+ze*b+$e*U-(De*s+Ue*b+qe*U),Ie=1/(o*At+p*Dt+L*Gt+ue*ft);return i[0]=Ie*At,i[1]=Ie*Dt,i[2]=Ie*Gt,i[3]=Ie*ft,i[4]=Ie*(Be*p+Te*L+Oe*ue-(he*p+Ee*L+De*ue)),i[5]=Ie*(he*o+Ge*L+ze*ue-(Be*o+Fe*L+Ue*ue)),i[6]=Ie*(Ee*o+Fe*p+$e*ue-(Te*o+Ge*p+qe*ue)),i[7]=Ie*(De*o+Ue*p+qe*L-(Oe*o+ze*p+$e*L)),i[8]=Ie*(Re*M+ke*ne+Ce*ge-(We*M+Ze*ne+st*ge)),i[9]=Ie*(We*g+rt*ne+wt*ge-(Re*g+it*ne+at*ge)),i[10]=Ie*(Ze*g+it*M+ot*ge-(ke*g+rt*M+ct*ge)),i[11]=Ie*(st*g+at*M+ct*ne-(Ce*g+wt*M+ot*ne)),i[12]=Ie*(Ze*R+st*se+We*T-(Ce*se+Re*T+ke*R)),i[13]=Ie*(at*se+Re*c+it*R-(rt*R+wt*se+We*c)),i[14]=Ie*(rt*T+ct*se+ke*c-(ot*se+Ze*c+it*T)),i[15]=Ie*(ot*R+Ce*c+wt*T-(at*T+ct*R+st*c)),i}function H(e){const u=e[0],i=e[0*4+1],o=e[0*4+2],s=e[0*4+3],c=e[1*4+0],g=e[1*4+1],p=e[1*4+2],b=e[1*4+3],T=e[2*4+0],M=e[2*4+1],L=e[2*4+2],U=e[2*4+3],R=e[3*4+0],ne=e[3*4+1],ue=e[3*4+2],j=e[3*4+3],se=L*j,ge=ue*U,he=p*j,Be=ue*b,Te=p*U,Ee=L*b,De=o*j,Oe=ue*s,Fe=o*U,Ge=L*s,ze=o*b,Ue=p*s,qe=se*g+Be*M+Te*ne-(ge*g+he*M+Ee*ne),$e=ge*i+De*M+Ge*ne-(se*i+Oe*M+Fe*ne),Re=he*i+Oe*g+ze*ne-(Be*i+De*g+Ue*ne),We=Ee*i+Fe*g+Ue*M-(Te*i+Ge*g+ze*M);return u*qe+c*$e+T*Re+R*We}const X=q;function C(e,u,i){const o=i??new n(16),s=e[0],c=e[1],g=e[2],p=e[3],b=e[4+0],T=e[4+1],M=e[4+2],L=e[4+3],U=e[8+0],R=e[8+1],ne=e[8+2],ue=e[8+3],j=e[12+0],se=e[12+1],ge=e[12+2],he=e[12+3],Be=u[0],Te=u[1],Ee=u[2],De=u[3],Oe=u[4+0],Fe=u[4+1],Ge=u[4+2],ze=u[4+3],Ue=u[8+0],qe=u[8+1],$e=u[8+2],Re=u[8+3],We=u[12+0],Ze=u[12+1],ke=u[12+2],Ce=u[12+3];return o[0]=s*Be+b*Te+U*Ee+j*De,o[1]=c*Be+T*Te+R*Ee+se*De,o[2]=g*Be+M*Te+ne*Ee+ge*De,o[3]=p*Be+L*Te+ue*Ee+he*De,o[4]=s*Oe+b*Fe+U*Ge+j*ze,o[5]=c*Oe+T*Fe+R*Ge+se*ze,o[6]=g*Oe+M*Fe+ne*Ge+ge*ze,o[7]=p*Oe+L*Fe+ue*Ge+he*ze,o[8]=s*Ue+b*qe+U*$e+j*Re,o[9]=c*Ue+T*qe+R*$e+se*Re,o[10]=g*Ue+M*qe+ne*$e+ge*Re,o[11]=p*Ue+L*qe+ue*$e+he*Re,o[12]=s*We+b*Ze+U*ke+j*Ce,o[13]=c*We+T*Ze+R*ke+se*Ce,o[14]=g*We+M*Ze+ne*ke+ge*Ce,o[15]=p*We+L*Ze+ue*ke+he*Ce,o}const Q=C;function ee(e,u,i){const o=i??W();return e!==o&&(o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=e[3],o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=e[7],o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=e[11]),o[12]=u[0],o[13]=u[1],o[14]=u[2],o[15]=1,o}function Y(e,u){const i=u??a.create();return i[0]=e[12],i[1]=e[13],i[2]=e[14],i}function V(e,u,i){const o=i??a.create(),s=u*4;return o[0]=e[s+0],o[1]=e[s+1],o[2]=e[s+2],o}function N(e,u,i,o){const s=o===e?o:O(e,o),c=i*4;return s[c+0]=u[0],s[c+1]=u[1],s[c+2]=u[2],s}function $(e,u){const i=u??a.create(),o=e[0],s=e[1],c=e[2],g=e[4],p=e[5],b=e[6],T=e[8],M=e[9],L=e[10];return i[0]=Math.sqrt(o*o+s*s+c*c),i[1]=Math.sqrt(g*g+p*p+b*b),i[2]=Math.sqrt(T*T+M*M+L*L),i}function le(e,u,i,o,s){const c=s??new n(16),g=Math.tan(Math.PI*.5-.5*e);if(c[0]=g/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=g,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,Number.isFinite(o)){const p=1/(i-o);c[10]=o*p,c[14]=o*i*p}else c[10]=-1,c[14]=-i;return c}function P(e,u,i,o=1/0,s){const c=s??new n(16),g=1/Math.tan(e*.5);if(c[0]=g/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=g,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,o===1/0)c[10]=0,c[14]=i;else{const p=1/(o-i);c[10]=i*p,c[14]=o*i*p}return c}function F(e,u,i,o,s,c,g){const p=g??new n(16);return p[0]=2/(u-e),p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=2/(o-i),p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1/(s-c),p[11]=0,p[12]=(u+e)/(e-u),p[13]=(o+i)/(i-o),p[14]=s/(s-c),p[15]=1,p}function te(e,u,i,o,s,c,g){const p=g??new n(16),b=u-e,T=o-i,M=s-c;return p[0]=2*s/b,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=2*s/T,p[6]=0,p[7]=0,p[8]=(e+u)/b,p[9]=(o+i)/T,p[10]=c/M,p[11]=-1,p[12]=0,p[13]=0,p[14]=s*c/M,p[15]=0,p}function ce(e,u,i,o,s,c=1/0,g){const p=g??new n(16),b=u-e,T=o-i;if(p[0]=2*s/b,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=2*s/T,p[6]=0,p[7]=0,p[8]=(e+u)/b,p[9]=(o+i)/T,p[11]=-1,p[12]=0,p[13]=0,p[15]=0,c===1/0)p[10]=0,p[14]=s;else{const M=1/(c-s);p[10]=s*M,p[14]=c*s*M}return p}const K=a.create(),ie=a.create(),ae=a.create();function J(e,u,i,o){const s=o??new n(16);return a.normalize(a.subtract(u,e,ae),ae),a.normalize(a.cross(i,ae,K),K),a.normalize(a.cross(ae,K,ie),ie),s[0]=K[0],s[1]=K[1],s[2]=K[2],s[3]=0,s[4]=ie[0],s[5]=ie[1],s[6]=ie[2],s[7]=0,s[8]=ae[0],s[9]=ae[1],s[10]=ae[2],s[11]=0,s[12]=e[0],s[13]=e[1],s[14]=e[2],s[15]=1,s}function we(e,u,i,o){const s=o??new n(16);return a.normalize(a.subtract(e,u,ae),ae),a.normalize(a.cross(i,ae,K),K),a.normalize(a.cross(ae,K,ie),ie),s[0]=K[0],s[1]=K[1],s[2]=K[2],s[3]=0,s[4]=ie[0],s[5]=ie[1],s[6]=ie[2],s[7]=0,s[8]=ae[0],s[9]=ae[1],s[10]=ae[2],s[11]=0,s[12]=e[0],s[13]=e[1],s[14]=e[2],s[15]=1,s}function fe(e,u,i,o){const s=o??new n(16);return a.normalize(a.subtract(e,u,ae),ae),a.normalize(a.cross(i,ae,K),K),a.normalize(a.cross(ae,K,ie),ie),s[0]=K[0],s[1]=ie[0],s[2]=ae[0],s[3]=0,s[4]=K[1],s[5]=ie[1],s[6]=ae[1],s[7]=0,s[8]=K[2],s[9]=ie[2],s[10]=ae[2],s[11]=0,s[12]=-(K[0]*e[0]+K[1]*e[1]+K[2]*e[2]),s[13]=-(ie[0]*e[0]+ie[1]*e[1]+ie[2]*e[2]),s[14]=-(ae[0]*e[0]+ae[1]*e[1]+ae[2]*e[2]),s[15]=1,s}function be(e,u){const i=u??new n(16);return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=e[0],i[13]=e[1],i[14]=e[2],i[15]=1,i}function xe(e,u,i){const o=i??new n(16),s=u[0],c=u[1],g=u[2],p=e[0],b=e[1],T=e[2],M=e[3],L=e[1*4+0],U=e[1*4+1],R=e[1*4+2],ne=e[1*4+3],ue=e[2*4+0],j=e[2*4+1],se=e[2*4+2],ge=e[2*4+3],he=e[3*4+0],Be=e[3*4+1],Te=e[3*4+2],Ee=e[3*4+3];return e!==o&&(o[0]=p,o[1]=b,o[2]=T,o[3]=M,o[4]=L,o[5]=U,o[6]=R,o[7]=ne,o[8]=ue,o[9]=j,o[10]=se,o[11]=ge),o[12]=p*s+L*c+ue*g+he,o[13]=b*s+U*c+j*g+Be,o[14]=T*s+R*c+se*g+Te,o[15]=M*s+ne*c+ge*g+Ee,o}function Se(e,u){const i=u??new n(16),o=Math.cos(e),s=Math.sin(e);return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=o,i[6]=s,i[7]=0,i[8]=0,i[9]=-s,i[10]=o,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function oe(e,u,i){const o=i??new n(16),s=e[4],c=e[5],g=e[6],p=e[7],b=e[8],T=e[9],M=e[10],L=e[11],U=Math.cos(u),R=Math.sin(u);return o[4]=U*s+R*b,o[5]=U*c+R*T,o[6]=U*g+R*M,o[7]=U*p+R*L,o[8]=U*b-R*s,o[9]=U*T-R*c,o[10]=U*M-R*g,o[11]=U*L-R*p,e!==o&&(o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=e[3],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function _e(e,u){const i=u??new n(16),o=Math.cos(e),s=Math.sin(e);return i[0]=o,i[1]=0,i[2]=-s,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=s,i[9]=0,i[10]=o,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function ye(e,u,i){const o=i??new n(16),s=e[0*4+0],c=e[0*4+1],g=e[0*4+2],p=e[0*4+3],b=e[2*4+0],T=e[2*4+1],M=e[2*4+2],L=e[2*4+3],U=Math.cos(u),R=Math.sin(u);return o[0]=U*s-R*b,o[1]=U*c-R*T,o[2]=U*g-R*M,o[3]=U*p-R*L,o[8]=U*b+R*s,o[9]=U*T+R*c,o[10]=U*M+R*g,o[11]=U*L+R*p,e!==o&&(o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=e[7],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function S(e,u){const i=u??new n(16),o=Math.cos(e),s=Math.sin(e);return i[0]=o,i[1]=s,i[2]=0,i[3]=0,i[4]=-s,i[5]=o,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function D(e,u,i){const o=i??new n(16),s=e[0*4+0],c=e[0*4+1],g=e[0*4+2],p=e[0*4+3],b=e[1*4+0],T=e[1*4+1],M=e[1*4+2],L=e[1*4+3],U=Math.cos(u),R=Math.sin(u);return o[0]=U*s+R*b,o[1]=U*c+R*T,o[2]=U*g+R*M,o[3]=U*p+R*L,o[4]=U*b-R*s,o[5]=U*T-R*c,o[6]=U*M-R*g,o[7]=U*L-R*p,e!==o&&(o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=e[11],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function _(e,u,i){const o=i??new n(16);let s=e[0],c=e[1],g=e[2];const p=Math.sqrt(s*s+c*c+g*g);s/=p,c/=p,g/=p;const b=s*s,T=c*c,M=g*g,L=Math.cos(u),U=Math.sin(u),R=1-L;return o[0]=b+(1-b)*L,o[1]=s*c*R+g*U,o[2]=s*g*R-c*U,o[3]=0,o[4]=s*c*R-g*U,o[5]=T+(1-T)*L,o[6]=c*g*R+s*U,o[7]=0,o[8]=s*g*R+c*U,o[9]=c*g*R-s*U,o[10]=M+(1-M)*L,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}const t=_;function l(e,u,i,o){const s=o??new n(16);let c=u[0],g=u[1],p=u[2];const b=Math.sqrt(c*c+g*g+p*p);c/=b,g/=b,p/=b;const T=c*c,M=g*g,L=p*p,U=Math.cos(i),R=Math.sin(i),ne=1-U,ue=T+(1-T)*U,j=c*g*ne+p*R,se=c*p*ne-g*R,ge=c*g*ne-p*R,he=M+(1-M)*U,Be=g*p*ne+c*R,Te=c*p*ne+g*R,Ee=g*p*ne-c*R,De=L+(1-L)*U,Oe=e[0],Fe=e[1],Ge=e[2],ze=e[3],Ue=e[4],qe=e[5],$e=e[6],Re=e[7],We=e[8],Ze=e[9],ke=e[10],Ce=e[11];return s[0]=ue*Oe+j*Ue+se*We,s[1]=ue*Fe+j*qe+se*Ze,s[2]=ue*Ge+j*$e+se*ke,s[3]=ue*ze+j*Re+se*Ce,s[4]=ge*Oe+he*Ue+Be*We,s[5]=ge*Fe+he*qe+Be*Ze,s[6]=ge*Ge+he*$e+Be*ke,s[7]=ge*ze+he*Re+Be*Ce,s[8]=Te*Oe+Ee*Ue+De*We,s[9]=Te*Fe+Ee*qe+De*Ze,s[10]=Te*Ge+Ee*$e+De*ke,s[11]=Te*ze+Ee*Re+De*Ce,e!==s&&(s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15]),s}const r=l;function d(e,u){const i=u??new n(16);return i[0]=e[0],i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e[1],i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=e[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function h(e,u,i){const o=i??new n(16),s=u[0],c=u[1],g=u[2];return o[0]=s*e[0*4+0],o[1]=s*e[0*4+1],o[2]=s*e[0*4+2],o[3]=s*e[0*4+3],o[4]=c*e[1*4+0],o[5]=c*e[1*4+1],o[6]=c*e[1*4+2],o[7]=c*e[1*4+3],o[8]=g*e[2*4+0],o[9]=g*e[2*4+1],o[10]=g*e[2*4+2],o[11]=g*e[2*4+3],e!==o&&(o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function x(e,u){const i=u??new n(16);return i[0]=e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=e,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function w(e,u,i){const o=i??new n(16);return o[0]=u*e[0*4+0],o[1]=u*e[0*4+1],o[2]=u*e[0*4+2],o[3]=u*e[0*4+3],o[4]=u*e[1*4+0],o[5]=u*e[1*4+1],o[6]=u*e[1*4+2],o[7]=u*e[1*4+3],o[8]=u*e[2*4+0],o[9]=u*e[2*4+1],o[10]=u*e[2*4+2],o[11]=u*e[2*4+3],e!==o&&(o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}return{add:E,aim:J,axisRotate:l,axisRotation:_,cameraAim:we,clone:Z,copy:O,create:f,determinant:H,equals:I,equalsApproximately:B,fromMat3:m,fromQuat:y,frustum:te,frustumReverseZ:ce,getAxis:V,getScaling:$,getTranslation:Y,identity:W,inverse:q,invert:X,lookAt:fe,mul:Q,mulScalar:z,multiply:C,multiplyScalar:k,negate:A,ortho:F,perspective:le,perspectiveReverseZ:P,rotate:r,rotateX:oe,rotateY:ye,rotateZ:D,rotation:t,rotationX:Se,rotationY:_e,rotationZ:S,scale:h,scaling:d,set:v,setAxis:N,setTranslation:ee,translate:xe,translation:be,transpose:re,uniformScale:w,uniformScaling:x}}const Pn=new Map;function bs(n){let a=Pn.get(n);return a||(a=ys(n),Pn.set(n,a)),a}function vs(n){const a=Qt(n);function f(S,D,_,t){const l=new n(4);return S!==void 0&&(l[0]=S,D!==void 0&&(l[1]=D,_!==void 0&&(l[2]=_,t!==void 0&&(l[3]=t)))),l}const v=f;function m(S,D,_,t,l){const r=l??new n(4);return r[0]=S,r[1]=D,r[2]=_,r[3]=t,r}function y(S,D,_){const t=_??new n(4),l=D*.5,r=Math.sin(l);return t[0]=r*S[0],t[1]=r*S[1],t[2]=r*S[2],t[3]=Math.cos(l),t}function A(S,D){const _=D??a.create(3),t=Math.acos(S[3])*2,l=Math.sin(t*.5);return l>pe?(_[0]=S[0]/l,_[1]=S[1]/l,_[2]=S[2]/l):(_[0]=1,_[1]=0,_[2]=0),{angle:t,axis:_}}function E(S,D){const _=le(S,D);return Math.acos(2*_*_-1)}function k(S,D,_){const t=_??new n(4),l=S[0],r=S[1],d=S[2],h=S[3],x=D[0],w=D[1],e=D[2],u=D[3];return t[0]=l*u+h*x+r*e-d*w,t[1]=r*u+h*w+d*x-l*e,t[2]=d*u+h*e+l*w-r*x,t[3]=h*u-l*x-r*w-d*e,t}const z=k;function O(S,D,_){const t=_??new n(4),l=D*.5,r=S[0],d=S[1],h=S[2],x=S[3],w=Math.sin(l),e=Math.cos(l);return t[0]=r*e+x*w,t[1]=d*e+h*w,t[2]=h*e-d*w,t[3]=x*e-r*w,t}function Z(S,D,_){const t=_??new n(4),l=D*.5,r=S[0],d=S[1],h=S[2],x=S[3],w=Math.sin(l),e=Math.cos(l);return t[0]=r*e-h*w,t[1]=d*e+x*w,t[2]=h*e+r*w,t[3]=x*e-d*w,t}function B(S,D,_){const t=_??new n(4),l=D*.5,r=S[0],d=S[1],h=S[2],x=S[3],w=Math.sin(l),e=Math.cos(l);return t[0]=r*e+d*w,t[1]=d*e-r*w,t[2]=h*e+x*w,t[3]=x*e-h*w,t}function I(S,D,_,t){const l=t??new n(4),r=S[0],d=S[1],h=S[2],x=S[3];let w=D[0],e=D[1],u=D[2],i=D[3],o=r*w+d*e+h*u+x*i;o<0&&(o=-o,w=-w,e=-e,u=-u,i=-i);let s,c;if(1-o>pe){const g=Math.acos(o),p=Math.sin(g);s=Math.sin((1-_)*g)/p,c=Math.sin(_*g)/p}else s=1-_,c=_;return l[0]=s*r+c*w,l[1]=s*d+c*e,l[2]=s*h+c*u,l[3]=s*x+c*i,l}function W(S,D){const _=D??new n(4),t=S[0],l=S[1],r=S[2],d=S[3],h=t*t+l*l+r*r+d*d,x=h?1/h:0;return _[0]=-t*x,_[1]=-l*x,_[2]=-r*x,_[3]=d*x,_}function re(S,D){const _=D??new n(4);return _[0]=-S[0],_[1]=-S[1],_[2]=-S[2],_[3]=S[3],_}function q(S,D){const _=D??new n(4),t=S[0]+S[5]+S[10];if(t>0){const l=Math.sqrt(t+1);_[3]=.5*l;const r=.5/l;_[0]=(S[6]-S[9])*r,_[1]=(S[8]-S[2])*r,_[2]=(S[1]-S[4])*r}else{let l=0;S[5]>S[0]&&(l=1),S[10]>S[l*4+l]&&(l=2);const r=(l+1)%3,d=(l+2)%3,h=Math.sqrt(S[l*4+l]-S[r*4+r]-S[d*4+d]+1);_[l]=.5*h;const x=.5/h;_[3]=(S[r*4+d]-S[d*4+r])*x,_[r]=(S[r*4+l]+S[l*4+r])*x,_[d]=(S[d*4+l]+S[l*4+d])*x}return _}function H(S,D,_,t,l){const r=l??new n(4),d=S*.5,h=D*.5,x=_*.5,w=Math.sin(d),e=Math.cos(d),u=Math.sin(h),i=Math.cos(h),o=Math.sin(x),s=Math.cos(x);switch(t){case"xyz":r[0]=w*i*s+e*u*o,r[1]=e*u*s-w*i*o,r[2]=e*i*o+w*u*s,r[3]=e*i*s-w*u*o;break;case"xzy":r[0]=w*i*s-e*u*o,r[1]=e*u*s-w*i*o,r[2]=e*i*o+w*u*s,r[3]=e*i*s+w*u*o;break;case"yxz":r[0]=w*i*s+e*u*o,r[1]=e*u*s-w*i*o,r[2]=e*i*o-w*u*s,r[3]=e*i*s+w*u*o;break;case"yzx":r[0]=w*i*s+e*u*o,r[1]=e*u*s+w*i*o,r[2]=e*i*o-w*u*s,r[3]=e*i*s-w*u*o;break;case"zxy":r[0]=w*i*s-e*u*o,r[1]=e*u*s+w*i*o,r[2]=e*i*o+w*u*s,r[3]=e*i*s-w*u*o;break;case"zyx":r[0]=w*i*s-e*u*o,r[1]=e*u*s+w*i*o,r[2]=e*i*o-w*u*s,r[3]=e*i*s+w*u*o;break;default:throw new Error(`Unknown rotation order: ${t}`)}return r}function X(S,D){const _=D??new n(4);return _[0]=S[0],_[1]=S[1],_[2]=S[2],_[3]=S[3],_}const C=X;function Q(S,D,_){const t=_??new n(4);return t[0]=S[0]+D[0],t[1]=S[1]+D[1],t[2]=S[2]+D[2],t[3]=S[3]+D[3],t}function ee(S,D,_){const t=_??new n(4);return t[0]=S[0]-D[0],t[1]=S[1]-D[1],t[2]=S[2]-D[2],t[3]=S[3]-D[3],t}const Y=ee;function V(S,D,_){const t=_??new n(4);return t[0]=S[0]*D,t[1]=S[1]*D,t[2]=S[2]*D,t[3]=S[3]*D,t}const N=V;function $(S,D,_){const t=_??new n(4);return t[0]=S[0]/D,t[1]=S[1]/D,t[2]=S[2]/D,t[3]=S[3]/D,t}function le(S,D){return S[0]*D[0]+S[1]*D[1]+S[2]*D[2]+S[3]*D[3]}function P(S,D,_,t){const l=t??new n(4);return l[0]=S[0]+_*(D[0]-S[0]),l[1]=S[1]+_*(D[1]-S[1]),l[2]=S[2]+_*(D[2]-S[2]),l[3]=S[3]+_*(D[3]-S[3]),l}function F(S){const D=S[0],_=S[1],t=S[2],l=S[3];return Math.sqrt(D*D+_*_+t*t+l*l)}const te=F;function ce(S){const D=S[0],_=S[1],t=S[2],l=S[3];return D*D+_*_+t*t+l*l}const K=ce;function ie(S,D){const _=D??new n(4),t=S[0],l=S[1],r=S[2],d=S[3],h=Math.sqrt(t*t+l*l+r*r+d*d);return h>1e-5?(_[0]=t/h,_[1]=l/h,_[2]=r/h,_[3]=d/h):(_[0]=0,_[1]=0,_[2]=0,_[3]=1),_}function ae(S,D){return Math.abs(S[0]-D[0])<pe&&Math.abs(S[1]-D[1])<pe&&Math.abs(S[2]-D[2])<pe&&Math.abs(S[3]-D[3])<pe}function J(S,D){return S[0]===D[0]&&S[1]===D[1]&&S[2]===D[2]&&S[3]===D[3]}function we(S){const D=S??new n(4);return D[0]=0,D[1]=0,D[2]=0,D[3]=1,D}const fe=a.create(),be=a.create(),xe=a.create();function Se(S,D,_){const t=_??new n(4),l=a.dot(S,D);return l<-.999999?(a.cross(be,S,fe),a.len(fe)<1e-6&&a.cross(xe,S,fe),a.normalize(fe,fe),y(fe,Math.PI,t),t):l>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(a.cross(S,D,fe),t[0]=fe[0],t[1]=fe[1],t[2]=fe[2],t[3]=1+l,ie(t,t))}const oe=new n(4),_e=new n(4);function ye(S,D,_,t,l,r){const d=r??new n(4);return I(S,t,l,oe),I(D,_,l,_e),I(oe,_e,2*l*(1-l),d),d}return{create:f,fromValues:v,set:m,fromAxisAngle:y,toAxisAngle:A,angle:E,multiply:k,mul:z,rotateX:O,rotateY:Z,rotateZ:B,slerp:I,inverse:W,conjugate:re,fromMat:q,fromEuler:H,copy:X,clone:C,add:Q,subtract:ee,sub:Y,mulScalar:V,scale:N,divScalar:$,dot:le,lerp:P,length:F,len:te,lengthSq:ce,lenSq:K,normalize:ie,equalsApproximately:ae,equals:J,identity:we,rotationTo:Se,sqlerp:ye}}const Dn=new Map;function Ss(n){let a=Dn.get(n);return a||(a=vs(n),Dn.set(n,a)),a}function Bs(n){function a(_,t,l,r){const d=new n(4);return _!==void 0&&(d[0]=_,t!==void 0&&(d[1]=t,l!==void 0&&(d[2]=l,r!==void 0&&(d[3]=r)))),d}const f=a;function v(_,t,l,r,d){const h=d??new n(4);return h[0]=_,h[1]=t,h[2]=l,h[3]=r,h}function m(_,t){const l=t??new n(4);return l[0]=Math.ceil(_[0]),l[1]=Math.ceil(_[1]),l[2]=Math.ceil(_[2]),l[3]=Math.ceil(_[3]),l}function y(_,t){const l=t??new n(4);return l[0]=Math.floor(_[0]),l[1]=Math.floor(_[1]),l[2]=Math.floor(_[2]),l[3]=Math.floor(_[3]),l}function A(_,t){const l=t??new n(4);return l[0]=Math.round(_[0]),l[1]=Math.round(_[1]),l[2]=Math.round(_[2]),l[3]=Math.round(_[3]),l}function E(_,t=0,l=1,r){const d=r??new n(4);return d[0]=Math.min(l,Math.max(t,_[0])),d[1]=Math.min(l,Math.max(t,_[1])),d[2]=Math.min(l,Math.max(t,_[2])),d[3]=Math.min(l,Math.max(t,_[3])),d}function k(_,t,l){const r=l??new n(4);return r[0]=_[0]+t[0],r[1]=_[1]+t[1],r[2]=_[2]+t[2],r[3]=_[3]+t[3],r}function z(_,t,l,r){const d=r??new n(4);return d[0]=_[0]+t[0]*l,d[1]=_[1]+t[1]*l,d[2]=_[2]+t[2]*l,d[3]=_[3]+t[3]*l,d}function O(_,t,l){const r=l??new n(4);return r[0]=_[0]-t[0],r[1]=_[1]-t[1],r[2]=_[2]-t[2],r[3]=_[3]-t[3],r}const Z=O;function B(_,t){return Math.abs(_[0]-t[0])<pe&&Math.abs(_[1]-t[1])<pe&&Math.abs(_[2]-t[2])<pe&&Math.abs(_[3]-t[3])<pe}function I(_,t){return _[0]===t[0]&&_[1]===t[1]&&_[2]===t[2]&&_[3]===t[3]}function W(_,t,l,r){const d=r??new n(4);return d[0]=_[0]+l*(t[0]-_[0]),d[1]=_[1]+l*(t[1]-_[1]),d[2]=_[2]+l*(t[2]-_[2]),d[3]=_[3]+l*(t[3]-_[3]),d}function re(_,t,l,r){const d=r??new n(4);return d[0]=_[0]+l[0]*(t[0]-_[0]),d[1]=_[1]+l[1]*(t[1]-_[1]),d[2]=_[2]+l[2]*(t[2]-_[2]),d[3]=_[3]+l[3]*(t[3]-_[3]),d}function q(_,t,l){const r=l??new n(4);return r[0]=Math.max(_[0],t[0]),r[1]=Math.max(_[1],t[1]),r[2]=Math.max(_[2],t[2]),r[3]=Math.max(_[3],t[3]),r}function H(_,t,l){const r=l??new n(4);return r[0]=Math.min(_[0],t[0]),r[1]=Math.min(_[1],t[1]),r[2]=Math.min(_[2],t[2]),r[3]=Math.min(_[3],t[3]),r}function X(_,t,l){const r=l??new n(4);return r[0]=_[0]*t,r[1]=_[1]*t,r[2]=_[2]*t,r[3]=_[3]*t,r}const C=X;function Q(_,t,l){const r=l??new n(4);return r[0]=_[0]/t,r[1]=_[1]/t,r[2]=_[2]/t,r[3]=_[3]/t,r}function ee(_,t){const l=t??new n(4);return l[0]=1/_[0],l[1]=1/_[1],l[2]=1/_[2],l[3]=1/_[3],l}const Y=ee;function V(_,t){return _[0]*t[0]+_[1]*t[1]+_[2]*t[2]+_[3]*t[3]}function N(_){const t=_[0],l=_[1],r=_[2],d=_[3];return Math.sqrt(t*t+l*l+r*r+d*d)}const $=N;function le(_){const t=_[0],l=_[1],r=_[2],d=_[3];return t*t+l*l+r*r+d*d}const P=le;function F(_,t){const l=_[0]-t[0],r=_[1]-t[1],d=_[2]-t[2],h=_[3]-t[3];return Math.sqrt(l*l+r*r+d*d+h*h)}const te=F;function ce(_,t){const l=_[0]-t[0],r=_[1]-t[1],d=_[2]-t[2],h=_[3]-t[3];return l*l+r*r+d*d+h*h}const K=ce;function ie(_,t){const l=t??new n(4),r=_[0],d=_[1],h=_[2],x=_[3],w=Math.sqrt(r*r+d*d+h*h+x*x);return w>1e-5?(l[0]=r/w,l[1]=d/w,l[2]=h/w,l[3]=x/w):(l[0]=0,l[1]=0,l[2]=0,l[3]=0),l}function ae(_,t){const l=t??new n(4);return l[0]=-_[0],l[1]=-_[1],l[2]=-_[2],l[3]=-_[3],l}function J(_,t){const l=t??new n(4);return l[0]=_[0],l[1]=_[1],l[2]=_[2],l[3]=_[3],l}const we=J;function fe(_,t,l){const r=l??new n(4);return r[0]=_[0]*t[0],r[1]=_[1]*t[1],r[2]=_[2]*t[2],r[3]=_[3]*t[3],r}const be=fe;function xe(_,t,l){const r=l??new n(4);return r[0]=_[0]/t[0],r[1]=_[1]/t[1],r[2]=_[2]/t[2],r[3]=_[3]/t[3],r}const Se=xe;function oe(_){const t=_??new n(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function _e(_,t,l){const r=l??new n(4),d=_[0],h=_[1],x=_[2],w=_[3];return r[0]=t[0]*d+t[4]*h+t[8]*x+t[12]*w,r[1]=t[1]*d+t[5]*h+t[9]*x+t[13]*w,r[2]=t[2]*d+t[6]*h+t[10]*x+t[14]*w,r[3]=t[3]*d+t[7]*h+t[11]*x+t[15]*w,r}function ye(_,t,l){const r=l??new n(4);return ie(_,r),X(r,t,r)}function S(_,t,l){const r=l??new n(4);return N(_)>t?ye(_,t,r):J(_,r)}function D(_,t,l){const r=l??new n(4);return W(_,t,.5,r)}return{create:a,fromValues:f,set:v,ceil:m,floor:y,round:A,clamp:E,add:k,addScaled:z,subtract:O,sub:Z,equalsApproximately:B,equals:I,lerp:W,lerpV:re,max:q,min:H,mulScalar:X,scale:C,divScalar:Q,inverse:ee,invert:Y,dot:V,length:N,len:$,lengthSq:le,lenSq:P,distance:F,dist:te,distanceSq:ce,distSq:K,normalize:ie,negate:ae,copy:J,clone:we,multiply:fe,mul:be,divide:xe,div:Se,zero:oe,transformMat4:_e,setLength:ye,truncate:S,midpoint:D}}const Gn=new Map;function Ts(n){let a=Gn.get(n);return a||(a=Bs(n),Gn.set(n,a)),a}function hn(n,a,f,v,m,y){return{mat3:ms(n),mat4:bs(a),quat:Ss(f),vec2:Xn(v),vec3:Qt(m),vec4:Ts(y)}}const{mat3:Es,mat4:Ve,quat:zr,vec2:zn,vec3:de,vec4:Ur}=hn(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);hn(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);hn(hs,Array,Array,Array,Array,Array);const Un=document.querySelector("#log");let Xe=null,bt=null;function Qn(){if(Xe)return Xe;Xe=document.createElement("div"),Xe.className="ply-spinner-overlay";const n=document.createElement("div");return n.className="ply-spinner",Xe.appendChild(n),bt=document.createElement("div"),bt.className="ply-spinner-label",Xe.appendChild(bt),Xe.style.display="none",document.body.appendChild(Xe),Xe}function As(n){Qn(),bt&&n&&(bt.textContent=n),Xe&&(Xe.style.opacity="1",Xe.style.display="flex")}function Wt(n){Qn(),bt&&(bt.textContent=n)}function ks(){if(!Xe)return;const n=Xe;n.style.opacity="0",setTimeout(()=>{n.style.opacity==="0"&&(n.style.display="none")},220)}function es(n,a){if(!Un)return;const f=document.createElement("p");f.innerText=n,a&&Object.assign(f.style,a),Un.appendChild(f)}async function Qe(n){console.log(n),es(n)}async function Ms(n){console.error(n),es(n,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let ts;function Ps(){ts=performance.now()}function Rn(n){const a=performance.now()-ts;Qe(`⏱️ ${n} Time: ${a.toFixed(0)} ms`)}function Bt(n){return n+3&-4}const Ds=2,Gs=3,zs=5,Us=6,kt=7,Yt=8,Mt=9,Pt=10;function In(n){const a=new TextDecoder("ascii"),f=a.decode(new Uint8Array(n,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(n.byteLength<4+64)throw new Error(`NAT2 truncated (${n.byteLength} bytes < 4 + 64)`);const v=new DataView(n),m=4,y=v.getUint32(m+0,!0),A=v.getUint32(m+4,!0),E=v.getUint32(m+8,!0),k=v.getUint32(m+12,!0),z=v.getUint32(m+16,!0),O=v.getFloat32(m+20,!0),Z=v.getUint32(m+24,!0),B=v.getUint32(m+28,!0),I=v.getFloat32(m+32,!0),W=v.getFloat32(m+36,!0),re=v.getFloat32(m+40,!0),q=v.getUint32(m+44,!0),H=v.getFloat32(m+48,!0),X=v.getFloat32(m+52,!0),C=v.getUint32(m+56,!0),Q=v.getUint32(m+60,!0),ee=B===Mt||B===Pt,Y=ee?Q:0,V=ee?0:Q&255,N=ee?0:Q>>8&255,$=V>0?V:1;if(B===zs||B===Us)throw new Error(`NAT2: paired-RVQ format=${B} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const le=B===Mt||B===Pt;if(B!==Ds&&B!==Gs&&B!==kt&&B!==Yt&&!le)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${B}`);if(y%4!==0||q%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${y} layer_h=${q}`);let P=m+64;const F=(C+1)*4,te=new Uint32Array(n.slice(P,P+F));P+=F;let ce;if($>1){const oe=($+1)*4;if(P+oe>n.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${oe} from ${P})`);ce=new Uint32Array(n.slice(P,P+oe)),P+=oe}else ce=new Uint32Array([0,y]);let K=0;for(let oe=0;oe<$;oe++){const _e=ce[oe+1]-ce[oe];_e>K&&(K=_e)}if(le){const oe=Y&1?7:6,_e=z*oe*4;if(P+_e>n.byteLength)throw new Error(`NAT2 truncated at probes: need ${_e} more bytes from offset ${P}, have ${n.byteLength-P}`);const ye=new Float32Array(n.slice(P,P+_e));P+=_e;const S=Math.max(1,Y>>8&255),D=[];let _=0;for(let h=0,x=y,w=q;h<S;h++,x>>=1,w>>=1){const e=Math.max(1,x>>2)*Math.max(1,w>>2)*16;D.push(e),_+=e}const t=n.byteLength-P;if(t<_)throw new Error(`NAT2 probe atlas truncated: need ${_} bytes for ${y}x${q} x${S} mips, have ${t}`);const l=[];let r=P;for(const h of D)l.push(new Uint8Array(n.slice(r,r+h))),r+=h;const d=l[0];return{width:y,height:A,channels:E,kernel_type:k,num_rects:z,uv_extent:O,sb_number:Z,format:B,sh_bias:I,res_bias:W,compact_mult:re,layer_h:q,atlas_scale:H,atlas_offset:X,n_layers:C,n_cols:$,layer_cuts:te,column_cuts:ce,slice_width:K,rects_expanded:ye,atlas_bytes:d,mip_bytes:l,probe_mode:Y&1?2:1}}const ie=z*4*4;if(P+ie>n.byteLength)throw new Error(`NAT2 truncated at rects: need ${ie} more bytes from offset ${P}, have ${n.byteLength-P}`);const ae=new Float32Array(n.slice(P,P+ie));P+=ie;const J=new Float32Array(z*5);for(let oe=0;oe<z;oe++){const _e=ae[oe*4+0],ye=ae[oe*4+1],S=ae[oe*4+2],D=ae[oe*4+3];let _=0;for(let h=1;h<=C&&te[h]<=ye;h++)_=h;let t=0;for(let h=1;h<=$&&ce[h]<=_e;h++)t=h;const l=ye-te[_],r=_e-ce[t],d=t*C+_;J[oe*5+0]=r,J[oe*5+1]=l,J[oe*5+2]=S,J[oe*5+3]=D,J[oe*5+4]=d}let we,fe;const be=$,Se=y/4*16;if(B===kt||B===Yt){if(P+24>n.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const oe=B===kt?"BCCB":"ACCB",_e=a.decode(new Uint8Array(n,P,4));if(_e!==oe)throw new Error(`NAT2 typeD bad sub-magic: expected '${oe}' got '${_e}'`);const ye=v.getUint32(P+4,!0),S=v.getUint32(P+8,!0),D=v.getUint32(P+12,!0),_=v.getUint32(P+16,!0),t=v.getUint32(P+20,!0);if(ye!==1)throw new Error(`NAT2 BCCB unsupported version ${ye}`);if(D!==A/4||_!==y/4||t!==D*_)throw new Error(`NAT2 BCCB block grid mismatch: header ${y}×${A}, sub-header ${_}×${D} (${t} blocks)`);P+=24;const l=S*16;if(P+l>n.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${l}, have ${n.byteLength-P})`);const r=new Uint8Array(n,P,l);P+=l;const d=t*2;if(P+d>n.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${d}, have ${n.byteLength-P})`);const h=new Uint16Array(n.slice(P,P+d));P+=d;const x=new Uint8Array(t*16);for(let w=0;w<t;w++){const e=h[w]*16;x.set(r.subarray(e,e+16),w*16)}if(we=x,N>1){fe=[x];for(let w=1;w<N;w++){if(P+24>n.byteLength)throw new Error(`NAT2 truncated at mip ${w} sub-header`);const e=a.decode(new Uint8Array(n,P,4));if(e!==oe)throw new Error(`NAT2 mip ${w}: bad sub-magic '${e}'`);const u=v.getUint32(P+8,!0),i=v.getUint32(P+16,!0),o=v.getUint32(P+20,!0);if(i!==w)throw new Error(`NAT2 mip section order: expected level ${w}, got ${i}`);P+=24;let s=0;for(let b=0;b<be;b++)for(let T=0;T<C;T++){const M=ns(w,ce[b+1]-ce[b],te[T+1]-te[T],K,q);s+=(M.cw>>2)*(M.ch>>2)}if(s!==o)throw new Error(`NAT2 mip ${w}: ${o} blocks, loader expects ${s}`);if(P+u*16+o*2>n.byteLength)throw new Error(`NAT2 truncated in mip ${w}`);const c=new Uint8Array(n,P,u*16);P+=u*16;const g=new Uint16Array(n.slice(P,P+o*2));P+=o*2;const p=new Uint8Array(o*16);for(let b=0;b<o;b++){const T=g[b]*16;p.set(c.subarray(T,T+16),b*16)}fe.push(p)}}}else{let oe=0;for(let _e=0;_e<C;_e++){const ye=te[_e+1]-te[_e];if(ye%4!==0)throw new Error(`NAT2 BC7 layer ${_e} rows ${ye} not 4-aligned`);oe+=ye/4*Se}if(P+oe>n.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${oe} more bytes from offset ${P}, have ${n.byteLength-P}`);we=new Uint8Array(n.slice(P,P+oe))}return{width:y,height:A,channels:E,kernel_type:k,num_rects:z,uv_extent:O,sb_number:Z,format:B,sh_bias:I,res_bias:W,compact_mult:re,layer_h:q,atlas_scale:H,atlas_offset:X,n_layers:C,n_cols:$,layer_cuts:te,column_cuts:ce,slice_width:K,rects_expanded:J,atlas_bytes:we,...fe?{mip_bytes:fe}:{}}}function ns(n,a,f,v,m){const y=E=>E+3>>2<<2,A=1<<n;return{cw:Math.min(y(Math.max(1,v>>n)),y(Math.ceil(a/A))),ch:Math.min(y(Math.max(1,m>>n)),y(Math.ceil(f/A)))}}const Rs=32;function Is(n,a,f){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let v,m,y,A;if(a.format===2||a.format===kt||a.format===Mt){if(!n.features.has("texture-compression-bc"))return Qe(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;A=a.format===Mt?"BC7 atlas (proberes: shared probe texture)":a.format===kt?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:v,view:m,sampler:y}=Ln(n,a,"bc7-rgba-unorm",A)}else if(a.format===3||a.format===Yt||a.format===Pt){if(!n.features.has("texture-compression-astc"))return Qe(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;A=a.format===Pt?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===Yt?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:v,view:m,sampler:y}=Ln(n,a,"astc-4x4-unorm",A)}else return Qe(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:E}=a,k=n.createBuffer({label:"atlas rects (5-stride)",size:Bt(E.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});n.queue.writeBuffer(k,0,E);const z=n.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return $t(n,z,a,f),{texture:v,view:m,sampler:y,rectsBuffer:k,texParamsBuffer:z,meta:a}}function Ln(n,a,f,v){const{width:m,layer_h:y,n_layers:A,n_cols:E,layer_cuts:k,column_cuts:z,slice_width:O,atlas_bytes:Z}=a,I=m/4*16,W=n.limits.maxTextureDimension2D;if(y>W||O>W)throw new Error(`⚠️  atlas slice dims ${O}x${y} exceed maxTextureDimension2D=${W}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const re=E*A;if(re>n.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${E} cols × ${A} layers = ${re} slices > maxTextureArrayLayers=${n.limits.maxTextureArrayLayers}.`);const q=a.mip_bytes??[Z],H=q.length,X=n.createTexture({label:v,size:{width:O,height:y,depthOrArrayLayers:re},mipLevelCount:H,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let Y=0;Y<E;Y++){const V=z[Y]/4,N=(z[Y+1]-z[Y])/4;for(let $=0;$<A;$++){const le=k[$]/4,P=(k[$+1]-k[$])/4,F=Y*A+$,te=le*I+V*16;n.queue.writeTexture({texture:X,mipLevel:0,origin:{x:0,y:0,z:F},aspect:"all"},Z,{offset:te,bytesPerRow:I,rowsPerImage:P},{width:N*4,height:P*4,depthOrArrayLayers:1})}}const C=a.format===Mt||a.format===Pt;for(let Y=1;Y<H&&!C;Y++){let V=0;for(let N=0;N<E;N++)for(let $=0;$<A;$++){const{cw:le,ch:P}=ns(Y,z[N+1]-z[N],k[$+1]-k[$],O,y);n.queue.writeTexture({texture:X,mipLevel:Y,origin:{x:0,y:0,z:N*A+$},aspect:"all"},q[Y],{offset:V,bytesPerRow:(le>>2)*16,rowsPerImage:P>>2},{width:le,height:P,depthOrArrayLayers:1}),V+=(le>>2)*(P>>2)*16}}for(let Y=1;Y<H&&C;Y++){const V=Math.max(1,O>>Y),N=Math.max(1,y>>Y);n.queue.writeTexture({texture:X,mipLevel:Y,origin:{x:0,y:0,z:0},aspect:"all"},q[Y],{offset:0,bytesPerRow:Math.max(1,V>>2)*16,rowsPerImage:Math.max(1,N>>2)},{width:V,height:N,depthOrArrayLayers:1})}H>1&&console.log(`[atlas] ${H} mip levels uploaded (${C?"trilinear":"per-surfel integer level"})`);const Q=X.createView({label:`${v} view`,dimension:"2d-array"}),ee=n.createSampler({label:`${v} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:H>1&&C?"linear":"nearest"});return{texture:X,view:Q,sampler:ee}}function $t(n,a,f,v,m=1){var z;const y=new ArrayBuffer(32),A=new Uint32Array(y),E=new Float32Array(y);A[0]=v?1:0,E[1]=f.atlas_scale,E[2]=f.atlas_offset,E[3]=f.res_bias,A[4]=f.probe_mode?f.probe_mode|0:0,A[5]=f.width|0;const k=(((z=f.mip_bytes)==null?void 0:z.length)??1)>1;A[6]=k&&m!==0?1:0,E[7]=f.uv_extent,n.queue.writeBuffer(a,0,y)}async function Ls(n,a){Qe(`loading ply file from File... : ${n.name}`),As("downloading PLY...");const f=await n.arrayBuffer();try{return await Fs(f,a)}finally{ks()}}function ss(n){return new Promise((a,f)=>{const v=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});v.onmessage=m=>{const y=m.data;if((y==null?void 0:y.type)==="error"){Ms(`PLY worker error: ${y.message??"unknown error"}`),v.terminate(),f(new Error(y.message??"Worker error"));return}else if((y==null?void 0:y.type)==="download_progress"){const A=y.totalBytes,E=y.loadedBytes/(1024*1024),k=A?A/(1024*1024):void 0,z=(y.speedBps??0)/(1024*1024),O=A?Math.min(99,Math.floor(y.loadedBytes/A*100)):void 0,Z=k?`total ${k.toFixed(1)} MB`:"total -- MB",B=k&&O!==void 0?`${E.toFixed(1)} MB downloaded (${O}%)`:`${E.toFixed(1)} MB downloaded`,I=`${z.toFixed(2)} MB/s`;Wt(`downloading PLY ...
${Z}, ${B}
${I}`);return}else if((y==null?void 0:y.type)==="fetched"){Qe(`💾 Fetched (${y.byteLength} bytes)`),Rn("Download"),Wt("parsing PLY..."),Ps();return}else if((y==null?void 0:y.type)==="parse_progress"){const A=y.total??0,E=y.read??0,k=A>0?Math.floor(E/A*100):0;Wt(`parsing PLY ...
${E}/${A} surfels (${k}%)`);return}else(y==null?void 0:y.type)==="done"&&(v.terminate(),Rn("Parse"),a(y))},v.onerror=m=>{v.terminate(),f(m)},n instanceof ArrayBuffer?(Wt("parsing PLY..."),v.postMessage({type:"start",plyBuffer:n},[n])):v.postMessage({type:"start_url",url:n.url})})}async function Os(n){const a=await ss(await n.arrayBuffer());return{num_points:a.num_points,K:a.K,feature_mode:a.feature_mode??0,sh_bias:a.sh_bias,kernel_type:a.kernel_type,surfel_data:new Float32Array(a.surfelBuffer),sv_params:new Float32Array(a.svParamsBuffer)}}async function Fs(n,a){var W,re,q,H,X,C,Q,ee,Y,V,N,$;const f=await ss(n),v=f.num_points,m=f.K,y=f.feature_mode??0,A=f.sh_bias,E=f.kernel_type,k=f.surfelBuffer,z=f.svParamsBuffer;Qe(`🪐 Total surfels: ${v}, mode=${y===1?"SB":"SV"}, K=${m}, sh_bias=${A}, kernel_type=${E}`);const Z=a.createBuffer({label:"surfel input buffer",size:Bt(v*Rs),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(Z,0,k);const B=z.byteLength>0?z.byteLength:16,I=a.createBuffer({label:y===1?"color_params buffer (SB)":"color_params buffer (SV)",size:Bt(B),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return z.byteLength>0&&a.queue.writeBuffer(I,0,z),{num_points:v,K:m,feature_mode:y,sh_bias:A,kernel_type:E,surfel_buffer:Z,surfel_data:new Float32Array(k),sv_params_buffer:I,bbox:f.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:f.centroid??[((((re=(W=f.bbox)==null?void 0:W.min)==null?void 0:re[0])??-1)+(((H=(q=f.bbox)==null?void 0:q.max)==null?void 0:H[0])??1))/2,((((C=(X=f.bbox)==null?void 0:X.min)==null?void 0:C[1])??-1)+(((ee=(Q=f.bbox)==null?void 0:Q.max)==null?void 0:ee[1])??1))/2,((((V=(Y=f.bbox)==null?void 0:Y.min)==null?void 0:V[2])??-1)+((($=(N=f.bbox)==null?void 0:N.max)==null?void 0:$[2])??1))/2]}}function pt(n){const a=n&32768?-1:1,f=n>>10&31,v=n&1023;return f===0?a*v*5960464477539063e-23:f===31?v?NaN:a*(1/0):a*(1+v/1024)*Math.pow(2,f-15)}const Ws=`#version 300 es
precision highp float;
precision highp int;
layout(location=0) in vec4 a_tu_op;     // CONIC (u0, v0, J00) + opacity
layout(location=1) in vec4 a_tv_sh;     // (J01, J10, J11) + beta shape
layout(location=2) in vec4 a_tw_ly;     // (dw/dx, dw/dy, 0) + atlas layer
layout(location=3) in vec4 a_col_dc;    // rgb + depth at centre
layout(location=4) in vec4 a_ctr_ext;   // centre px (x, y) + extent px (x, y)
layout(location=5) in vec4 a_uv;        // uv_base (2) + uv_scale (2)
layout(location=6) in vec2 a_dp;        // depth_u, depth_v
uniform vec2 u_vp;
flat out vec4 v_tu_op; flat out vec4 v_tv_sh; flat out vec4 v_tw_ly; flat out vec4 v_col_dc;
flat out vec2 v_ctr; flat out vec4 v_uv; flat out vec2 v_dp;
void main() {
    const float FILTER_R = 3.0 * 0.7071067811865476;
    int vid = gl_VertexID;
    vec2 ext_pad = a_ctr_ext.zw * 1.001 + vec2(0.25);
    vec2 hlf = max(ext_pad, vec2(FILTER_R));
    float ox = (vid & 1) == 0 ? 1.0 : -1.0;
    float oy = vid < 2 ? 1.0 : -1.0;
    vec2 corner = a_ctr_ext.xy + vec2(ox, oy) * hlf;
    gl_Position = vec4((corner.x * 2.0 - (u_vp.x - 1.0)) / u_vp.x,
                       -((corner.y * 2.0 - (u_vp.y - 1.0)) / u_vp.y), 0.0, 1.0);
    v_tu_op = a_tu_op; v_tv_sh = a_tv_sh; v_tw_ly = a_tw_ly; v_col_dc = a_col_dc;
    v_ctr = a_ctr_ext.xy; v_uv = a_uv; v_dp = a_dp;
}`,Cs=n=>`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2DArray;
flat in vec4 v_tu_op; flat in vec4 v_tv_sh; flat in vec4 v_tw_ly; flat in vec4 v_col_dc;
flat in vec2 v_ctr; flat in vec4 v_uv; flat in vec2 v_dp;
uniform vec2 u_vp;
uniform sampler2DArray u_atlas;
uniform int u_atlas_on;
uniform vec4 u_tex;          // atlas_scale, atlas_offset, res_bias, uv_extent
uniform vec2 u_dims;         // atlas slice width, layer height
out vec4 o;
void main() {
    const float FILTER_INV_SQUARE = 2.0;
    const float K_BETA_SQ = 9.0;
    vec2 pixf = floor(vec2(gl_FragCoord.x, u_vp.y - gl_FragCoord.y));   // top-left origin
    float u0 = v_tu_op.x, v0 = v_tu_op.y, J00 = v_tu_op.z;
    float J01 = v_tv_sh.x, J10 = v_tv_sh.y, J11 = v_tv_sh.z;
    vec2 d = pixf - v_ctr;
    float denom = 1.0 + v_tw_ly.x * d.x + v_tw_ly.y * d.y;
    if (denom < 0.1) discard;
    float inv_d = 1.0 / denom;
    vec2 s = vec2(u0 + (J00 * d.x + J01 * d.y) * inv_d, v0 + (J10 * d.x + J11 * d.y) * inv_d);
    float rho3d = dot(s, s);
    vec2 d_pix = v_ctr - pixf;
    float rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);
    float depth = rho3d <= rho2d ? dot(vec3(v_dp, v_col_dc.w), vec3(s, 1.0)) : v_col_dc.w;
    if (depth < 0.2) discard;
    float ab;
${n?`    if (rho3d >= K_BETA_SQ + 1e-6) discard;
    float base = max(0.0, 1.0 - rho3d / K_BETA_SQ);
    float sh = v_tv_sh.w;
    if (sh >= 1.99 && sh <= 2.01) ab = base * base;
    else if (sh >= 0.99 && sh <= 1.01) ab = base;
    else if (sh >= 0.49 && sh <= 0.51) ab = sqrt(base);
    else if (sh >= 3.99 && sh <= 4.01) { float b2 = base * base; ab = b2 * b2; }
    else ab = pow(base, sh);`:"    ab = exp(-rho3d * 0.5);"}
    float alp = exp(-rho2d * 0.5);
    float b = min(0.99, v_tu_op.w * max(ab, alp));
    if (b < 1.0 / 255.0) discard;
    vec3 color = v_col_dc.rgb;
    if (u_atlas_on != 0) {
        vec2 hw = max(abs(v_uv.zw) * u_tex.w - 0.5 / u_dims, vec2(0.0));
        vec2 uv = clamp(v_uv.xy + s * v_uv.zw, v_uv.xy - hw, v_uv.xy + hw);
        vec4 t = textureLod(u_atlas, vec3(uv, v_tw_ly.w), 0.0);
        color = color + t.rgb * u_tex.x + vec3(u_tex.y);
    }
    color = max(vec3(0.0), color + vec3(u_tex.z));
    o = vec4(color, 1.0) * b;
}`,_t=26;class Kt{constructor(a,f,v,m={}){G(this,"gl");G(this,"prog");G(this,"vao");G(this,"inst");G(this,"instData");G(this,"keys");G(this,"keyBits");G(this,"sortVals");G(this,"sorted");G(this,"tex",null);G(this,"uniforms",{});G(this,"n");G(this,"xyz");G(this,"L0");G(this,"L1");G(this,"opa");G(this,"shape");G(this,"textured");G(this,"uvb");G(this,"layer");G(this,"sv");G(this,"K");G(this,"shBias");G(this,"staticKeys");G(this,"wide");G(this,"atlasStatus","no atlas");if(this.gl=a,this.n=f.num_points,this.K=f.K,this.shBias=f.sh_bias,this.sv=f.sv_params,this.staticKeys=m.staticSortKeys??null,this.wide=m.wideFrustum??!1,f.feature_mode!==0)throw new Error("WebGL fallback supports SV colour only");const y=!(v&&v.kernel_type===0),A=this.n,E=new Uint32Array(f.surfel_data.buffer,f.surfel_data.byteOffset,A*8);this.xyz=new Float32Array(A*3),this.L0=new Float32Array(A*3),this.L1=new Float32Array(A*3),this.opa=new Float32Array(A),this.shape=new Float32Array(A),this.textured=new Uint8Array(A);for(let B=0;B<A;B++){const I=B*8;this.xyz[B*3]=f.surfel_data[I],this.xyz[B*3+1]=f.surfel_data[I+1],this.xyz[B*3+2]=f.surfel_data[I+2],this.opa[B]=pt(E[I+3]&65535),this.shape[B]=pt(E[I+3]>>>16);const W=pt(E[I+4]&65535),re=pt(E[I+4]>>>16);let q=pt(E[I+5]&65535),H=pt(E[I+5]>>>16),X=pt(E[I+6]&65535),C=pt(E[I+6]>>>16);const Q=1/Math.sqrt(Math.max(q*q+H*H+X*X+C*C,1e-20));q*=Q,H*=Q,X*=Q,C*=Q,this.L0[B*3]=(1-2*(X*X+C*C))*W,this.L0[B*3+1]=2*(H*X+q*C)*W,this.L0[B*3+2]=2*(H*C-q*X)*W,this.L1[B*3]=2*(H*X-q*C)*re,this.L1[B*3+1]=(1-2*(H*H+C*C))*re,this.L1[B*3+2]=2*(X*C+q*H)*re,this.textured[B]=E[I+7]>>>16&1}if(this.uvb=new Float32Array(A*4),this.layer=new Float32Array(A),v){const B=v.slice_width||v.width,I=v.layer_h,W=v.uv_extent,re=v.rects_expanded;for(let q=0;q<A;q++){if(!this.textured[q])continue;const H=re[q*5],X=re[q*5+1],C=re[q*5+2],Q=re[q*5+3];this.uvb[q*4]=(H+.5*Math.max(C,1))/B,this.uvb[q*4+1]=(X+.5*Math.max(Q,1))/I,this.uvb[q*4+2]=C/(2*W)/B,this.uvb[q*4+3]=Q/(2*W)/I,this.layer[q]=re[q*5+4]}}const k=(B,I)=>{const W=a.createShader(B);if(a.shaderSource(W,I),a.compileShader(W),!a.getShaderParameter(W,a.COMPILE_STATUS))throw new Error("GLSL: "+a.getShaderInfoLog(W));return W},z=a.createProgram();if(a.attachShader(z,k(a.VERTEX_SHADER,Ws)),a.attachShader(z,k(a.FRAGMENT_SHADER,Cs(y))),a.linkProgram(z),!a.getProgramParameter(z,a.LINK_STATUS))throw new Error("GLSL link: "+a.getProgramInfoLog(z));this.prog=z;for(const B of["u_vp","u_atlas","u_atlas_on","u_tex","u_dims"])this.uniforms[B]=a.getUniformLocation(z,B);this.instData=new Float32Array(A*_t),this.keys=new Float32Array(A),this.keyBits=new Uint32Array(this.keys.buffer),this.sortVals=new Float64Array(A),this.sorted=new Float32Array(A*_t),this.vao=a.createVertexArray(),a.bindVertexArray(this.vao),this.inst=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,this.inst),a.bufferData(a.ARRAY_BUFFER,this.instData.byteLength,a.DYNAMIC_DRAW);const O=[4,4,4,4,4,4,2];let Z=0;O.forEach((B,I)=>{a.enableVertexAttribArray(I),a.vertexAttribPointer(I,B,a.FLOAT,!1,_t*4,Z*4),a.vertexAttribDivisor(I,1),Z+=B}),a.bindVertexArray(null),a.useProgram(z),a.uniform1i(this.uniforms.u_atlas,0),a.uniform1i(this.uniforms.u_atlas_on,0),a.uniform4f(this.uniforms.u_tex,0,0,v?v.res_bias:0,v?v.uv_extent:4),v&&this.uploadAtlas(v)}static atlasSupport(a){return{bc7:!!a.getExtension("EXT_texture_compression_bptc"),astc:!!a.getExtension("WEBGL_compressed_texture_astc")}}uploadAtlas(a){const f=this.gl,v=Kt.atlasSupport(f),m=a.format===2||a.format===7,y=a.format===3||a.format===8;let A=0;if(m&&v.bc7?A=36492:y&&v.astc&&(A=37808),!A){this.atlasStatus=`atlas format ${a.format} not supported by this WebGL (bc7=${v.bc7} astc=${v.astc})`,console.warn("[portal/gl]",this.atlasStatus);return}const{width:E,layer_h:k,n_layers:z,n_cols:O,layer_cuts:Z,column_cuts:B,slice_width:I,atlas_bytes:W}=a,re=E/4*16,q=I/4*16,H=q*(k/4),X=O*z,C=new Uint8Array(H*X);for(let ee=0;ee<O;ee++){const Y=B[ee]/4,V=(B[ee+1]-B[ee])/4;for(let N=0;N<z;N++){const $=Z[N]/4,le=(Z[N+1]-Z[N])/4,P=(ee*z+N)*H;for(let F=0;F<le;F++){const te=($+F)*re+Y*16;C.set(W.subarray(te,te+V*16),P+F*q)}}}this.tex=f.createTexture(),f.activeTexture(f.TEXTURE0),f.bindTexture(f.TEXTURE_2D_ARRAY,this.tex),f.compressedTexImage3D(f.TEXTURE_2D_ARRAY,0,A,I,k,X,0,C),f.texParameteri(f.TEXTURE_2D_ARRAY,f.TEXTURE_MIN_FILTER,f.LINEAR),f.texParameteri(f.TEXTURE_2D_ARRAY,f.TEXTURE_MAG_FILTER,f.LINEAR),f.texParameteri(f.TEXTURE_2D_ARRAY,f.TEXTURE_WRAP_S,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D_ARRAY,f.TEXTURE_WRAP_T,f.CLAMP_TO_EDGE);const Q=f.getError();if(Q!==f.NO_ERROR){this.atlasStatus=`atlas upload failed (GL error 0x${Q.toString(16)})`,console.warn("[portal/gl]",this.atlasStatus),f.deleteTexture(this.tex),this.tex=null;return}f.useProgram(this.prog),f.uniform1i(this.uniforms.u_atlas_on,1),f.uniform4f(this.uniforms.u_tex,a.atlas_scale,a.atlas_offset,a.res_bias,a.uv_extent),f.uniform2f(this.uniforms.u_dims,I,k),this.atlasStatus=`${A===36492?"BC7":"ASTC"} atlas ${I}x${k}x${X}`}get hasAtlas(){return this.tex!==null}render(a){const f=this.gl,v=this.n,m=a.rotation,y=a.eye,A=a.width,E=a.height,k=.5*E/Math.tan(a.fovY*.5),z=-(m[0]*y[0]+m[4]*y[1]+m[8]*y[2]),O=-(m[1]*y[0]+m[5]*y[1]+m[9]*y[2]),Z=-(m[2]*y[0]+m[6]*y[1]+m[10]*y[2]),B=.01,I=100,W=I/(I-B),re=-(I*B)/(I-B),q=2*k/A,H=2*k/E,X=this.wide?8e3/(.5*Math.max(A,E)):1.2,C=A/2,Q=(A-1)/2,ee=E/2,Y=(E-1)/2,V=this.K,N=this.sv,$=V*7,le=this.shBias,P=this.instData;let F=0;for(let J=0;J<v;J++){const we=this.opa[J];if(!(we>1/255)||!this.textured[J])continue;const fe=this.xyz[J*3],be=this.xyz[J*3+1],xe=this.xyz[J*3+2],Se=m[0]*fe+m[4]*be+m[8]*xe+z,oe=m[1]*fe+m[5]*be+m[9]*xe+O,_e=m[2]*fe+m[6]*be+m[10]*xe+Z,ye=W*_e+re,S=_e,D=ye/S,_=X*S;if(!(D>0&&D<1)||Math.abs(q*Se)>_||Math.abs(H*oe)>_)continue;const t=this.L0[J*3],l=this.L0[J*3+1],r=this.L0[J*3+2],d=this.L1[J*3],h=this.L1[J*3+1],x=this.L1[J*3+2],w=m[0]*t+m[4]*l+m[8]*r,e=m[1]*t+m[5]*l+m[9]*r,u=m[2]*t+m[6]*l+m[10]*r,i=m[0]*d+m[4]*h+m[8]*x,o=m[1]*d+m[5]*h+m[9]*x,s=m[2]*d+m[6]*h+m[10]*x,c=q*w*C+u*Q,g=q*i*C+s*Q,p=q*Se*C+S*Q,b=H*e*ee+u*Y,T=H*o*ee+s*Y,M=H*oe*ee+S*Y,L=u,U=s,R=S,ne=this.shape[J];let ue;if(ne>1e-6){const Me=1/(255*Math.max(we,.00392156862745098));ue=Math.max(.5,3*Math.sqrt(Math.max(0,1-Math.pow(Me,1/Math.max(ne,.001)))))}else ue=Math.max(.5,Math.sqrt(2*Math.log(255*Math.max(we,1/255))));const j=ue*ue,se=T*R-M*U,ge=M*L-b*R,he=b*U-T*L,Be=U*p-R*g,Te=R*c-L*p,Ee=L*g-U*c,De=g*M-p*T,Oe=p*b-c*M,Fe=c*T-g*b,Ge=se*se+ge*ge-j*he*he,ze=se*Be+ge*Te-j*he*Ee,Ue=Be*Be+Te*Te-j*Ee*Ee,qe=se*De+ge*Oe-j*he*Fe,$e=Be*De+Te*Oe-j*Ee*Fe,Re=Ge*Ue-ze*ze;let We=0,Ze=0,ke=-1,Ce=-1;if(Re>0&&Ge>0&&Ue>0){const Me=(ze*$e-Ue*qe)/Re,Ke=(ze*qe-Ge*$e)/Re,Ye=Me*se+Ke*Be+De,Je=Me*ge+Ke*Te+Oe,Ae=Me*he+Ke*Ee+Fe,Ne=-(Ye*Ye+Je*Je-j*Ae*Ae);Ne>0&&(We=Me,Ze=Ke,ke=Math.sqrt(Ne*Ue/Re),Ce=Math.sqrt(Ne*Ge/Re))}if(ke<0){const Me=j*L*L+j*U*U-R*R;if(Me<0){const Ke=j/Me,Ye=j/Me,Je=-1/Me,Ae=Ke*c*L+Ye*g*U+Je*p*R,Ne=Ke*b*L+Ye*T*U+Je*M*R,lt=Ae*Ae-(Ke*c*c+Ye*g*g+Je*p*p),ut=Ne*Ne-(Ke*b*b+Ye*T*T+Je*M*M);lt>=0&&ut>=0&&(We=Ae,Ze=Ne,ke=Math.sqrt(lt),Ce=Math.sqrt(ut),Math.max(ke,Ce)>2*Math.max(A,E)&&(ke=-1))}}if(ke<0||Math.max(ke,Ce)<.25&&we<.5)continue;const st=Math.round(We*4)*.25,rt=Math.round(Ze*4)*.25,it=st*L-c,at=st*U-g,wt=st*R-p,ot=rt*L-b,ct=rt*U-T,At=rt*R-M,Dt=at*At-wt*ct,Gt=wt*ot-it*At,ft=it*ct-at*ot;let Ie=1e10,zt=1e10,yn=0,bn=0,vn=0,Sn=0,Bn=0,Tn=0;if(Math.abs(ft)>1e-12){Ie=Dt/ft,zt=Gt/ft;const Me=L*Ie+U*zt+R,Ke=it*ct-at*ot;if(Math.abs(Ke)>1e-12&&Math.abs(Me)>1e-8){const Ye=Me/Ke;yn=-ct*Ye,bn=at*Ye,vn=ot*Ye,Sn=-it*Ye,Bn=(U*b-L*T)/ft,Tn=(g*L-c*U)/ft}else Ie=1e10,zt=1e10}let Ut=fe-y[0],Rt=be-y[1],It=xe-y[2];const tn=1/Math.sqrt(Ut*Ut+Rt*Rt+It*It);Ut*=tn,Rt*=tn,It*=tn;let Lt=0,Ot=0,Ft=0;if(V>0){const Me=J*$;let Ke=-34e37;const Ye=[0,0,0,0,0,0,0,0];for(let Ae=0;Ae<V;Ae++){let Ne=N[Me+Ae*3],lt=N[Me+Ae*3+1],ut=N[Me+Ae*3+2];const nn=1/Math.sqrt(Math.max(Ne*Ne+lt*lt+ut*ut,1e-20));Ne=Ne*nn-Ut,lt=lt*nn-Rt,ut=ut*nn-It;const ds=Math.exp(N[Me+V*6+Ae]);Ye[Ae]=-ds*Math.sqrt(Ne*Ne+lt*lt+ut*ut),Ye[Ae]>Ke&&(Ke=Ye[Ae])}let Je=0;for(let Ae=0;Ae<V;Ae++){const Ne=Math.exp(Ye[Ae]-Ke);Je+=Ne,Lt+=Ne*N[Me+V*3+Ae*3],Ot+=Ne*N[Me+V*3+Ae*3+1],Ft+=Ne*N[Me+V*3+Ae*3+2]}Je=1/Math.max(Je,1e-20),Lt=Math.max(0,Lt*Je+le),Ot=Math.max(0,Ot*Je+le),Ft=Math.max(0,Ft*Je+le)}const ve=F*_t;P[ve]=Ie,P[ve+1]=zt,P[ve+2]=yn,P[ve+3]=we,P[ve+4]=bn,P[ve+5]=vn,P[ve+6]=Sn,P[ve+7]=ne,P[ve+8]=Bn,P[ve+9]=Tn,P[ve+10]=0,P[ve+11]=this.layer[J],P[ve+12]=Lt,P[ve+13]=Ot,P[ve+14]=Ft,P[ve+15]=_e,P[ve+16]=st,P[ve+17]=rt,P[ve+18]=ke,P[ve+19]=Ce,P[ve+20]=this.uvb[J*4],P[ve+21]=this.uvb[J*4+1],P[ve+22]=this.uvb[J*4+2],P[ve+23]=this.uvb[J*4+3],P[ve+24]=m[2]*t+m[6]*l+m[10]*r,P[ve+25]=m[2]*d+m[6]*h+m[10]*x;const En=this.staticKeys?this.staticKeys[J]:0;this.keys[F]=En>0?En:I-ye,F++}const te=this.keyBits,ce=this.sortVals,K=2097152;for(let J=0;J<F;J++)ce[J]=te[J]*K+J;const ie=ce.subarray(0,F).sort(),ae=this.sorted;for(let J=0;J<F;J++){const we=ie[J]%K*_t;ae.set(P.subarray(we,we+_t),J*_t)}return f.viewport(0,0,A,E),f.clearColor(0,0,0,0),f.clear(f.COLOR_BUFFER_BIT),f.enable(f.BLEND),f.blendFunc(f.ONE,f.ONE_MINUS_SRC_ALPHA),f.disable(f.DEPTH_TEST),f.useProgram(this.prog),f.uniform2f(this.uniforms.u_vp,A,E),this.tex&&(f.activeTexture(f.TEXTURE0),f.bindTexture(f.TEXTURE_2D_ARRAY,this.tex)),f.bindVertexArray(this.vao),f.bindBuffer(f.ARRAY_BUFFER,this.inst),f.bufferSubData(f.ARRAY_BUFFER,0,ae,0,F*_t),f.drawArraysInstanced(f.TRIANGLE_STRIP,0,4,F),f.bindVertexArray(null),F}}const rs="BITYMI01",Ns=0,qs=1,$s=2,Zs=3,Ys=4,Ks=5;function Vs(n){const a=new Uint8Array(n),f=new TextDecoder().decode(a.subarray(0,8));if(f!==rs)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const v=new DataView(n),m=v.getUint32(8,!0),y=12,A=20;let E=null,k=null,z=null;for(let O=0;O<m;O++){const Z=y+O*A,B=v.getUint32(Z+0,!0),I=Number(v.getBigUint64(Z+4,!0)),W=Number(v.getBigUint64(Z+12,!0)),re=a.slice(I,I+W).buffer;B===Ns||B===qs||B===Ks?E=re:B===$s?k=re:(B===Zs||B===Ys)&&(z=re)}if(E===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:E,camerasBuffer:k,atlasBuffer:z}}async function Hs(n,a){var A;const f=await fetch(n);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const v=(()=>{const E=f.headers.get("content-length");return E&&parseInt(E,10)||void 0})(),m=(A=f.body)==null?void 0:A.getReader();let y;if(!m)y=await f.arrayBuffer(),a&&a(y.byteLength,v,0);else{const E=[];let k=0,z=performance.now(),O=0;for(;;){const{done:I,value:W}=await m.read();if(I)break;E.push(W),k+=W.byteLength;const re=performance.now();if(re-z>=150&&a){const q=(k-O)/((re-z)/1e3);a(k,v,q),z=re,O=k}}const Z=new Uint8Array(k);let B=0;for(const I of E)Z.set(I,B),B+=I.byteLength;y=Z.buffer,a&&a(k,v,0)}return y.byteLength>=8&&new TextDecoder().decode(new Uint8Array(y,0,8))===rs?{bundle:Vs(y),rawPly:null}:{bundle:null,rawPly:y}}const js=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
//
// Cull writes a compacted alive list with per-Gauss metadata into Splat2DGS
// + SHSolver buffers; this stage runs only over alive Gausses (indirect-
// dispatched), evaluates the per-Gauss color from EITHER:
//
//   feature_mode = 0 (SV): Spherical Voronoi softmax over K sites with
//      per-site colors and per-site τ scalars. Result per-Gauss is
//      \`max(0, Σ_k W_k·color_k + sh_bias)\`. Mirrors nest's
//      \`eval_voronoi_sv_feat\`.
//
//   feature_mode = 1 (SB): SH degree-3 base color plus K spherical-beta
//      directional lobes. Result per-Gauss is
//      \`max(0, eval_sh(view_dir, coefs) + sh_bias) + eval_sb(view_dir, lobes)\`.
//      Matches diff_surfel_bake_render's preprocessCUDA: SH is clamped first
//      (the inner ReLU), the SB sum is added unclamped on top, and the
//      fragment shader applies the outer \`max(0, color + atlas + res_bias)\`.
//
// In both modes the per-Gauss RGB is packed as f16 into Splat2DGS.color_*.
// The render fragment shader reads from there and never re-evaluates color —
// SV/SB eval is per-Gauss, not per-pixel, mirroring the CUDA path's design.

struct GeneralInfo {
  keys_size  : u32,
  dispatch_x : u32, dispatch_y : u32, dispatch_z : u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

const WG_SIZE : u32 = 256u;

struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};

// 32-byte RenderSettings (matches render-settings.ts canonical layout).
//   0  vec2<u32> canvas_size
//   8  u32       accel_flags    (consumed by surfel_cull; unused here)
//   12 u32       feature_mode   (0 = SV, 1 = SB)
//   16 f32       gaussian_scaling
//   20 f32       sh_bias
//   24 u32       color_K        (K — sites for SV, lobes for SB)
//   28 f32       walltime
struct RenderSettings {
  canvas_size      : vec2<u32>,
  accel_flags      : u32,
  feature_mode     : u32,
  gaussian_scaling : f32,
  sh_bias          : f32,
  color_K          : u32,
  walltime         : f32,
};

// Splat2DGS — MUST match surfel_cull.wgsl + render_2dgs.wgsl + host TS
// (C_SIZE_2D_SPLAT = 96 in gaussian-renderer.ts).  Fields uv_base_*,
// uv_scale_*, layer are the atlas-UV precompute added 2026-07-23: this
// preprocess pass fills them so the fragment shader can do a single
// \`uv = uv_base + s * uv_scale\` mad + texture sample (see file header of
// render_2dgs.wgsl).
struct Splat2DGS {
  tu_x : f32, tu_y : f32, tu_z : f32,
  tv_x : f32, tv_y : f32, tv_z : f32,
  tw_x : f32, tw_y : f32, tw_z : f32,
  opacity      : f32,
  pos          : u32,   // 2× i16 snorm center_pix/8192 (¼-px fixed point; cull packs, render unpacks)
  extent       : u32,
  color_rg     : u32,
  color_b_shape: u32,
  gauss_id     : u32,
  depth_u      : f32,
  depth_v      : f32,
  depth_center : f32,
  uv_base_x    : f32,
  uv_base_y    : f32,
  uv_scale_x   : f32,
  uv_scale_y   : f32,
  layer        : u32,
  _pad         : u32,
};

struct SHSolver {
  dir_xy        : u32,
  dir_z_opacity : u32,
  idx           : u32,
};

// AtlasParams — same layout as gaussian-renderer.ts writes for this pass.
// Everything is a per-frame uniform; \`atlas_width\` and \`atlas_layer_h\` are
// zero when the bundle has no atlas (or user disabled it), which causes this
// pass to skip writing the UV-precomp fields (fragment shader gate will
// short-circuit via TexParams.atlas_enabled).
struct AtlasParams {
  atlas_width   : u32,      // texture_2d_array width in texels; 0 = no atlas
  atlas_layer_h : u32,      // per-layer height in texels
  uv_extent     : f32,      // surfel-uv cutoff used at bake time (≈ 4.0)
  // 0 = baked: atlas_rects is stride 5 (u0, v0, w, h, layer), diagonal affine.
  // 1 = proberes: atlas_rects is stride 6 (A00, A01, A10, A11, t0, t1),
  //     ALREADY divided by tex_res by the exporter, so we pass it straight
  //     through with no arithmetic. Single-layer texture, layer always 0.
  // 2 = proberes+WSR: stride 7 — same 6 affine floats + per-surfel occlusion
  //     (read by fs_wsr in the render pass, not here).
  probe_mode    : u32,
  // Baked atlases exported with --mips: number of levels (1 = level 0 only / mips toggled off).
  mip_count     : u32,
  // Levels subtracted from the per-surfel choice (0 = round(log2 texels/pixel)). The finetune
  // optimised the texels for level-0 point sampling, so full prefiltering loses detail the
  // model relies on; a bias keeps level 0 until a surfel is minified by 2^(bias+0.5) or more.
  lod_bias      : f32,
  _p1 : u32, _p2 : u32,
};

@group(0) @binding(0) var<uniform> camera          : CameraUniforms;
@group(0) @binding(1) var<uniform> render_settings : RenderSettings;

@group(1) @binding(0) var<storage, read>       sort_infos : GeneralInfo;
@group(1) @binding(1) var<storage, read>       sh_solvers : array<SHSolver>;
@group(1) @binding(2) var<storage, read_write> splats_2d  : array<Splat2DGS>;
@group(1) @binding(3) var<storage, read>       color_params : array<f32>;

// Atlas rects laid out as fp32 [N, 5] rows: (u0, v0, w_span, h_span, layer).
// Same buffer the fragment shader used to fetch per-pixel; now consumed here
// once per alive Gauss.
@group(1) @binding(4) var<storage, read>       atlas_rects : array<f32>;
@group(1) @binding(5) var<uniform>             atlas_params : AtlasParams;

// =============================================================================
// SV evaluation — feature_mode == 0
// Layout per Gauss (stride K*7): K sites (3 ea) + K colors (3 ea) + K taus (1 ea).
// =============================================================================
fn eval_sv(gauss_id: u32, view_dir: vec3<f32>, K: u32, sh_bias: f32) -> vec3<f32> {
    if K == 0u { return vec3<f32>(0.0); }
    let stride    = K * 7u;
    let base      = gauss_id * stride;
    let sites_ofs = base;
    let cols_ofs  = base + K * 3u;
    let taus_ofs  = base + K * 6u;

    var logits : array<f32, 8>;     // K ≤ 8 supported.
    var lmax   = -3.4e38;
    for (var k = 0u; k < K; k = k + 1u) {
        let s = vec3<f32>(
            color_params[sites_ofs + k * 3u + 0u],
            color_params[sites_ofs + k * 3u + 1u],
            color_params[sites_ofs + k * 3u + 2u],
        );
        let s_unit = s * inverseSqrt(max(dot(s, s), 1e-20));
        let tau    = exp(color_params[taus_ofs + k]);
        let d      = s_unit - view_dir;
        let dist   = sqrt(max(dot(d, d), 0.0));
        let lg     = -tau * dist;
        logits[k]  = lg;
        if lg > lmax { lmax = lg; }
    }

    var w_sum = 0.0;
    var feat  = vec3<f32>(0.0);
    for (var k = 0u; k < K; k = k + 1u) {
        let w = exp(logits[k] - lmax);
        w_sum = w_sum + w;
        let c = vec3<f32>(
            color_params[cols_ofs + k * 3u + 0u],
            color_params[cols_ofs + k * 3u + 1u],
            color_params[cols_ofs + k * 3u + 2u],
        );
        feat = feat + w * c;
    }
    feat = feat / max(w_sum, 1e-20);
    return max(vec3<f32>(0.0), feat + vec3<f32>(sh_bias));
}

// =============================================================================
// SH-DC evaluation — used in SB mode.
//
// nest-splatting freezes f_rest_* (degrees 1–3) at zero during \`--feature
// beta\` training (gaussian_model.py:824), so we evaluate ONLY the DC term:
//   color = SH_C0 · (dc_r, dc_g, dc_b)
// The SB lobes carry the entire view-dependent contribution; the atlas
// residual carries the spatial high-frequency detail.
//
// Per-Gauss buffer base = gauss_id * (3 + K*6); DC at offsets 0..2,
// SB lobes start at offset 3.
// =============================================================================
const SH_C0 : f32 = 0.28209479177387814;

fn eval_sh_dc(coef_base: u32) -> vec3<f32> {
    return SH_C0 * vec3<f32>(
        color_params[coef_base + 0u],
        color_params[coef_base + 1u],
        color_params[coef_base + 2u],
    );
}

// =============================================================================
// SB lobe evaluation — used in SB mode.
// Per-lobe: (r, g, b, theta, phi, beta_raw). Formula matches Python eval_sb
// and CUDA eval_sb in diff_surfel_bake_render/forward.cu:
//   rgb_steep = softplus_steep(r,g,b)        (steep = 10·ln(2))
//   mu        = (sin θ cos φ, sin θ sin φ, cos θ)
//   dot       = mu · view_dir
//   contrib   = (dot > 0 ? dot^(4·exp(beta_raw)) : 0) · rgb_steep
//   sum across K lobes.
// =============================================================================
fn softplus_steep(x: f32) -> f32 {
    // β = 10·ln(2) ≈ 6.9314718. softplus = log(1 + exp(β·x)) / β.
    let s = 6.9314718;
    return log(1.0 + exp(s * x)) / s;
}

fn eval_sb(lobe_base: u32, K: u32, view_dir: vec3<f32>) -> vec3<f32> {
    var rgb = vec3<f32>(0.0);
    for (var k = 0u; k < K; k = k + 1u) {
        let p = lobe_base + k * 6u;
        let r       = color_params[p + 0u];
        let g       = color_params[p + 1u];
        let b       = color_params[p + 2u];
        let theta   = color_params[p + 3u];
        let phi     = color_params[p + 4u];
        let beta_r  = color_params[p + 5u];
        let beta    = 4.0 * exp(beta_r);
        let st = sin(theta); let ct = cos(theta);
        let sp = sin(phi);   let cp = cos(phi);
        let mu = vec3<f32>(st * cp, st * sp, ct);
        let d  = dot(mu, view_dir);
        if d > 0.0 {
            let w = pow(max(d, 1e-12), beta);
            rgb = rgb + vec3<f32>(softplus_steep(r), softplus_steep(g), softplus_steep(b)) * w;
        }
    }
    return rgb;
}

@compute @workgroup_size(WG_SIZE)
fn preprocess(@builtin(global_invocation_id) gid: vec3<u32>) {
    let store_idx = gid.x;
    if store_idx >= sort_infos.keys_size { return; }

    let solver = sh_solvers[store_idx];
    let dir_op = vec4<f32>(unpack2x16float(solver.dir_xy), unpack2x16float(solver.dir_z_opacity));
    let dir    = dir_op.xyz;
    let v_idx  = solver.idx;

    var rgb : vec3<f32>;
    if render_settings.feature_mode == 1u {
        // SB: per-Gauss stride = 3 + K*6 floats. DC at offset 0..2, SB lobes at 3+.
        let K = render_settings.color_K;
        let base = v_idx * (3u + K * 6u);
        let sh_color = max(vec3<f32>(0.0), eval_sh_dc(base) + vec3<f32>(render_settings.sh_bias));
        let sb_color = eval_sb(base + 3u, K, dir);
        // Inner clamp on SH only — matches CUDA preprocessCUDA. The fragment
        // shader applies the outer \`max(0, color + atlas + res_bias)\`.
        rgb = sh_color + sb_color;
    } else {
        rgb = eval_sv(v_idx, dir, render_settings.color_K, render_settings.sh_bias);
    }

    // Preserve the shape value the cull pass packed alongside (zeroed) color.b.
    let prev  = unpack2x16float(splats_2d[store_idx].color_b_shape);
    let shape = prev.y;
    splats_2d[store_idx].color_rg      = pack2x16float(vec2<f32>(rgb.r, rgb.g));
    splats_2d[store_idx].color_b_shape = pack2x16float(vec2<f32>(rgb.b, shape));

    // Atlas UV precomputation — fold everything Gauss-uniform in the atlas UV
    // mapping into (uv_base, uv_scale). Fragment does \`uv = uv_base + s * uv_scale\`
    // (2 fmadd) then one HW texture fetch. Kills 5 storage-buffer reads + 2
    // fp32 divides per fragment vs the pre-2026-07-23 shader that fetched
    // atlas_rects and normalised divisors per pixel.
    //
    // Derivation, per axis, s = surfel-uv in [−E, E]:
    //   au = u0 + (s + E) / (2E) * w_span            (atlas pixel)
    //   uv = (au + 0.5) / atlas_width                (normalised)
    //      = ((u0 + 0.5 + w_span/2)          + s * (w_span / (2E))) / atlas_width
    //      = uv_base                          + s * uv_scale
    // where uv_base and uv_scale are Gauss-uniform.
    //
    // Untextured mixed_3d Gauss and no-atlas bundles: cull writes gauss_id with
    // its high bit set OR the bundle has atlas_width=0. Either way we skip the
    // rect fetch and write sentinel zeros — fragment gates on tex_params.atlas_enabled.
    // NB: don't reuse \`gid\` here — that's the workgroup-builtin param name.
    let gid_raw   = splats_2d[store_idx].gauss_id;
    let is_texd   = (gid_raw & 0x80000000u) == 0u;
    let src_gauss = gid_raw & 0x7FFFFFFFu;
    if is_texd && atlas_params.atlas_width > 0u && atlas_params.probe_mode != 0u {
        // Proberes: stage the per-surfel affine into Splat2DGS so the fragment
        // needs ZERO storage-buffer reads (the baked path's whole reason for
        // the UV precompute). The 6 probe floats fit the 6 free slots exactly:
        // 4 f32 + the layer/_pad u32 pair, reinterpreted via bitcast. Safe
        // because this atlas is single-layer, so \`layer\` is identically 0 and
        // the fragment hardcodes layer = 0 under probe_mode.
        // Values are already divided by tex_res by the exporter.
        // probe_mode 2 (WSR) = stride-7 records (6 affine floats + occlusion).
        let po = src_gauss * select(6u, 7u, atlas_params.probe_mode == 2u);
        splats_2d[store_idx].uv_base_x  = atlas_rects[po + 4u];                 // t0
        splats_2d[store_idx].uv_base_y  = atlas_rects[po + 5u];                 // t1
        splats_2d[store_idx].uv_scale_x = atlas_rects[po + 0u];                 // A00
        splats_2d[store_idx].uv_scale_y = atlas_rects[po + 3u];                 // A11
        splats_2d[store_idx].layer      = bitcast<u32>(atlas_rects[po + 1u]);   // A01
        splats_2d[store_idx]._pad       = bitcast<u32>(atlas_rects[po + 2u]);   // A10
    } else if is_texd && atlas_params.atlas_width > 0u {
        let base_off = src_gauss * 5u;
        let u0     = atlas_rects[base_off + 0u];
        let v0     = atlas_rects[base_off + 1u];
        let w_span = atlas_rects[base_off + 2u];
        let h_span = atlas_rects[base_off + 3u];
        let layer  = u32(atlas_rects[base_off + 4u]);
        let E      = atlas_params.uv_extent;
        let inv_w  = 1.0 / f32(atlas_params.atlas_width);
        let inv_h  = 1.0 / f32(atlas_params.atlas_layer_h);
        let inv_2E = 1.0 / (2.0 * E);
        // ---- per-surfel mip level (typeD bundles exported with --mips) ----------------
        // The cull stores the CONIC form of the ray-splat (surfel_cull.wgsl): tu = (u0, v0, J⁻¹00),
        // tv = (J⁻¹01, J⁻¹10, J⁻¹11), with s = (u0, v0) + J⁻¹·Δpix / (1 + dw·Δpix). At the centre,
        // uv moves J⁻¹ per pixel, so texel motion per pixel is diag(w, h)/2E · J⁻¹ and the
        // minification is its larger column norm (the pixel axis that sweeps most texels).
        // ONE integer level per surfel (nearest-level sampler → still a single bilinear
        // fetch), rounded, clamped to the levels shipped and to the tile's own alignment:
        // the box filter is per-tile exact only up to countTrailingZeros(u0 | v0 | w | h).
        var lod = 0.0;
        var fx  = 1.0;
        var fy  = 1.0;
        if atlas_params.mip_count > 1u && w_span >= 2.0 && h_span >= 2.0 {
            let sp   = splats_2d[store_idx];
            let kx   = w_span * inv_2E;
            let ky   = h_span * inv_2E;
            let c0   = vec2<f32>(kx * sp.tu_z, ky * sp.tv_y);   // d(texel)/d(pix.x): (J⁻¹00, J⁻¹10)
            let c1   = vec2<f32>(kx * sp.tv_x, ky * sp.tv_z);   // d(texel)/d(pix.y): (J⁻¹01, J⁻¹11)
            let tpp  = max(length(c0), length(c1));
            let amax = countTrailingZeros(u32(u0) | u32(v0) | u32(w_span) | u32(h_span));
            // ...and never below 4 texels on the short side (a 64x4 tile stops at 16x4, not 64x1):
            // every level is then a plain halving that exists in the training-side pyramid too
            // (nest-splatting gaussian_renderer.mip_view_levels, --mip_view_lod finetunes).
            let side = countTrailingZeros(u32(min(w_span, h_span)));
            let lmax = f32(min(min(atlas_params.mip_count - 1u, amax), max(side, 2u) - 2u));
            lod = clamp(floor(log2(max(tpp, 1.0)) + 0.5 - atlas_params.lod_bias), 0.0, lmax);
            // Level-l tiles stay inside their rect by the fragment's CLAMP (half a level-l texel
            // in from each edge, the CUDA/training convention), not by shrinking the uv span.
        }
        // Texel i of the bake sits at s_i = (i + ½)·2E/w − E, i.e. at atlas x = u0 + w/2 + s·w/2E
        // (normalised: ÷ width; texel i's centre is at i + ½). Matches CUDA / Vulkan
        // (u0 − ½ + w/2 base, sampled at au + ½). The pre-2026-09-19 base carried an extra +½:
        // every fetch was half a texel off (−0.7 dB vs CUDA on garden). w = 0 (no texture)
        // keeps pointing at texel (u0, v0)'s centre.
        splats_2d[store_idx].uv_base_x  = (u0 + 0.5 * max(w_span, 1.0)) * inv_w;
        splats_2d[store_idx].uv_base_y  = (v0 + 0.5 * max(h_span, 1.0)) * inv_h;
        splats_2d[store_idx].uv_scale_x = w_span * fx * inv_2E * inv_w;
        splats_2d[store_idx].uv_scale_y = h_span * fy * inv_2E * inv_h;
        splats_2d[store_idx].layer      = layer;
        splats_2d[store_idx]._pad       = bitcast<u32>(lod);   // render reads it as sp.lod
    } else {
        splats_2d[store_idx].uv_base_x  = 0.0;
        splats_2d[store_idx].uv_base_y  = 0.0;
        splats_2d[store_idx].uv_scale_x = 0.0;
        splats_2d[store_idx].uv_scale_y = 0.0;
        splats_2d[store_idx].layer      = 0u;
        splats_2d[store_idx]._pad       = 0u;
    }
}
`,On=`// 2DGS render — vertex+fragment.
//
// Fragment does CONIC-corrected rational reconstruction (see the CONIC block
// below) + optional BC7/typeD atlas residual lookup via a SINGLE HW-decoded
// texture fetch.
//
// Atlas UV precomputation
// -----------------------
// The atlas UV mapping \`au = u0 + (s.x + E)/(2E)*w_span\` etc. is Gauss-uniform
// in everything except \`s.x\`/\`s.y\`. Two coefficients per axis (\`uv_base\`,
// \`uv_scale\`) and the array layer live inside Splat2DGS, computed once per
// alive Gauss in preprocess_2dgs.wgsl. Fragment then does:
//   \`uv = uv_base + s * uv_scale\` (2 fmadd, 0 divides, 0 storage-buffer loads).
// Prior versions read atlas_rects[gauss_id*5..gauss_id*5+4] per pixel and did
// 2 fp32 divides for the atlas_width/atlas_layer_h normalisation. That path
// showed up as a large fraction of "textures on" latency on TBDR mobile GPUs
// (Adreno / Mali / Apple), which pay more for storage-buffer reads than for
// texture reads.
//
// Paired-RVQ path
// ---------------
// Removed 2026-07-23. The per-fragment SW codebook decode was unusably slow
// on TBDR mobile GPUs. All shipped bundles are typeD (atlas_format=7, BC7
// codebook expanded to a normal BC7 texture at load time); the fragment
// shader below only knows about the single HW-decoded texture-fetch path.
// See memory/reference_atlas_format_typeD_default.md.

const FILTER_INV_SQUARE : f32 = 2.0;             // 1 / (2 · FilterSize²) with FilterSize=√2/2
const FILTER_SIZE       : f32 = 0.7071067811865476;
const K_BETA            : f32 = 3.0;
const K_BETA_SQ         : f32 = 9.0;

// Compile-time constant: 1 = beta_scaled bake (--kernel beta_scaled,
// shape > 0 per Gauss), 0 = Gaussian bake (--kernel gaussian, shape == 0
// always). Host sets it at pipeline-build time from bake_meta.json.kernel
// and the shader dead-strips the unused branch.
override BETA_KERNEL : u32 = 1u;

// Splat2DGS — layout MUST match the same struct in preprocess_2dgs.wgsl,
// surfel_cull.wgsl, and gaussian-renderer.ts::C_SIZE_2D_SPLAT (96 B stride).
// Fields added over the 80-byte v1:
//   uv_base_x/y, uv_scale_x/y : normalised atlas UV precomp (see file header)
//   layer                     : atlas array layer (u32; preprocess writes it)
//   _pad                      : keeps stride at 96 = 24*4 for 16-B alignment
struct Splat2DGS {
  tu_x : f32, tu_y : f32, tu_z : f32,
  tv_x : f32, tv_y : f32, tv_z : f32,
  tw_x : f32, tw_y : f32, tw_z : f32,
  opacity      : f32,
  pos          : u32,   // 2× i16 centre in ¼-px units (unpack_center)
  extent       : u32,
  color_rg     : u32,
  color_b_shape: u32,
  gauss_id     : u32,
  depth_u      : f32,
  depth_v      : f32,
  depth_center : f32,
  uv_base_x    : f32,
  uv_base_y    : f32,
  uv_scale_x   : f32,
  uv_scale_y   : f32,
  layer        : u32,
  _pad         : u32,
};

// ---------------------------------------------------------------------------
// Build variants (host-side line preprocessor in gaussian-renderer.ts —
// \`//#if NAME\` / \`//#else\` / \`//#endif\`, no nesting needed):
//
//   FETCH_BY_ID — the vertex stage emits ONLY the compacted splat slot
//     (one flat u32); the fragment re-reads Splat2DGS[slot] from the storage
//     buffer. Replaces 13 flat varyings (≈ 176 B/primitive of interpolator
//     storage). Measured faster than 7 flat vec4s in the Vulkan port on a
//     5090 (docs/VULKAN_HW_RASTER.md §3); on TBDR mobile GPUs the varying
//     store is per-tile, so this is expected to matter more there. ?byid=0
//     restores the varying path for an A/B.
//   OCT — 8-vertex triangle-strip octagon tangent to the EXACT projected
//     cutoff ellipse (the same conic the cull's SnugBox uses, rebuilt here
//     from the CONIC coefficients), unioned with the low-pass disc, instead
//     of the axis-aligned quad. ~21 % fewer fragments per surfel at 2× the
//     vertex invocations; an earlier corner-cut-quad attempt was a net loss
//     on most GPUs, so this is OFF by default (?oct=1 to A/B). NB the
//     hyperbolic-surfel drop that gave the big Vulkan fragment win lives in
//     surfel_cull.wgsl (accel bit 9), independent of this.
// ---------------------------------------------------------------------------

//#if FETCH_BY_ID
struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0) @interpolate(flat) slot : u32,
};
//#else
struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0)  @interpolate(flat) Tu          : vec3<f32>,
  @location(1)  @interpolate(flat) Tv          : vec3<f32>,
  @location(2)  @interpolate(flat) Tw          : vec3<f32>,
  @location(3)  @interpolate(flat) color       : vec4<f32>,
  @location(4)  @interpolate(flat) shape       : f32,
  @location(5)  @interpolate(flat) center_pix  : vec2<f32>,
  @location(6)  @interpolate(flat) depth_plane : vec3<f32>,
  @location(7)  @interpolate(flat) gauss_id    : u32,
  @location(8)  @interpolate(flat) uv_base     : vec2<f32>,
  @location(9)  @interpolate(flat) uv_scale    : vec2<f32>,
  @location(10) @interpolate(flat) layer       : u32,
  // Proberes off-diagonal terms (A01, A10) / tex_res. Unused when probe_mode==0.
  @location(11) @interpolate(flat) uv_skew     : vec2<f32>,
  // Proberes mip LOD: log2(texels per pixel), computed once per Gauss in the
  // vertex stage. Compute passes have no implicit derivatives, so the fragment
  // must use textureSampleLevel with an explicit level. 0 when probe_mode==0.
  @location(12) @interpolate(flat) lod         : f32,
};
//#endif

// Per-splat inputs to shade() — identical content whichever variant delivers
// it (varyings or a storage re-read).
struct SplatIn {
  Tu          : vec3<f32>,
  Tv          : vec3<f32>,
  Tw          : vec3<f32>,
  color       : vec4<f32>,
  shape       : f32,
  center_pix  : vec2<f32>,
  depth_plane : vec3<f32>,
  gauss_id    : u32,
  uv_base     : vec2<f32>,
  uv_scale    : vec2<f32>,
  layer       : u32,
  uv_skew     : vec2<f32>,
  lod         : f32,
};

// 32-byte RenderSettings — same layout as preprocess_2dgs.wgsl. We only read
// \`canvas_size\` here (vertex shader uses it to convert pixel coords → NDC)
// plus accel_flags bit 0 (OAC) under OCT to rebuild the cull's cutoff.
struct RenderSettings {
  canvas_size      : vec2<u32>,
  accel_flags      : u32,
  _pad0            : u32,
  gaussian_scaling : f32,
  sh_bias          : f32,
  sv_number        : u32,
  walltime         : f32,
};

// 32-byte TexParams. Bundle without atlas → host writes \`atlas_enabled = 0\`
// and the fragment shader's single \`if atlas_enabled != 0u\` short-circuits.
//
// Cut down from 48 B in the pre-2026-07-23 shader: the RVQ tail
// (rvq_block / pair_scale / pair_offset) was removed with the RVQ code path.
struct TexParams {
  atlas_enabled : u32,     // 0 = no atlas / user toggle off ; nonzero = sample
  atlas_scale   : f32,
  atlas_offset  : f32,
  res_bias      : f32,     // additive RGB bias after the residual is folded in
  // 0 = baked (per-surfel rect, diagonal affine, multi-layer atlas)
  // 1 = proberes (shared single-layer texture, general 2x2 affine + low-pass
  //     centre collapse). Set by the loader for NAT2 atlas_format 9/10.
  probe_mode    : u32,
  // Atlas width in texels — needed for the proberes mip LOD, since the probe
  // affine arrives NORMALISED (already divided by tex_res by the exporter) and
  // LOD needs an absolute texel count. Claims the former _pad0.
  atlas_width   : u32,
  // Mip LOD policy (proberes). 0 = force level 0 (pre-mip behaviour, point-ish
  // minification); 1 = trilinear at the computed LOD. Runtime-toggleable so the
  // same bundle can be A/B'd — the chain is resident either way.
  mip_mode      : u32,
  // Explicit u32 pad (NOT vec3<f32>): a vec3 aligns to 16 and would push the
  // struct to 48 B, mismatching buildStubAtlas's 32-byte TexParams buffer.
  // uv extent E of the bake (surfel uv ∈ [−E, E] ↔ the tile): the fragment clamp needs the
  // tile's half span, = |uv_scale|·E.
  uv_extent : f32,
};

@group(0) @binding(0) var<uniform>       render_settings : RenderSettings;
@group(1) @binding(0) var<storage, read> splats_2d       : array<Splat2DGS>;
@group(1) @binding(1) var<storage, read> indices         : array<u32>;
@group(2) @binding(0) var                atlas           : texture_2d_array<f32>;
@group(2) @binding(1) var                atlas_samp      : sampler;
@group(2) @binding(2) var<uniform>       tex_params      : TexParams;

// Splat2DGS.pos → centre in pixels (¼-px integer grid, see surfel_cull
// pack_center). Sign-extend each i16 lane with a shift pair.
fn unpack_center(p: u32) -> vec2<f32> {
    // accel bit 10 (?legacy=1): the cull packed f16 instead — read it back the
    // old way so the two stages always agree within a frame.
    if (render_settings.accel_flags & 1024u) != 0u {
        return unpack2x16float(p);
    }
    let x = (i32(p << 16u)) >> 16u;
    let y = (i32(p)) >> 16u;
    return vec2<f32>(f32(x), f32(y)) * 0.25;
}

// Bound margin: 0.25 px + 0.1 % over the cull's tight bbox (see vs_main), or
// nothing under ?legacy=1.
fn bound_pad(extent_pix: vec2<f32>) -> vec2<f32> {
    if (render_settings.accel_flags & 1024u) != 0u { return extent_pix; }
    return extent_pix * 1.001 + vec2<f32>(0.25);
}

// Unpack a Splat2DGS record into the shade() inputs. Shared by the vertex
// stage (varying variant) and the fragment stage (FETCH_BY_ID variant) so the
// two variants are the same math by construction.
fn unpack_splat(splat: Splat2DGS) -> SplatIn {
    var sp : SplatIn;
    sp.Tu = vec3<f32>(splat.tu_x, splat.tu_y, splat.tu_z);
    sp.Tv = vec3<f32>(splat.tv_x, splat.tv_y, splat.tv_z);
    sp.Tw = vec3<f32>(splat.tw_x, splat.tw_y, splat.tw_z);
    let rg = unpack2x16float(splat.color_rg);
    let bs = unpack2x16float(splat.color_b_shape);
    sp.color       = vec4<f32>(rg.x, rg.y, bs.x, splat.opacity);
    sp.shape       = bs.y;
    sp.center_pix  = unpack_center(splat.pos);
    sp.depth_plane = vec3<f32>(splat.depth_u, splat.depth_v, splat.depth_center);
    sp.gauss_id    = splat.gauss_id;
    sp.uv_base     = vec2<f32>(splat.uv_base_x,  splat.uv_base_y);
    sp.uv_scale    = vec2<f32>(splat.uv_scale_x, splat.uv_scale_y);
    sp.layer       = splat.layer;
    // Under probe_mode the layer/_pad slots carry A01/A10 (see preprocess).
    // Harmless otherwise — probe_mode==0 never reads uv_skew.
    sp.uv_skew     = vec2<f32>(bitcast<f32>(splat.layer), bitcast<f32>(splat._pad));

    // ---- proberes mip LOD ----------------------------------------------------
    // The probe maps surfel-uv -> NORMALISED texture uv, so a column's length
    // times atlas_width is that axis's texel span across uv 0..1. The surfel
    // spans uv in [-3,3] (6 units) over 2*extent_pix screen pixels, hence
    //     texels_per_pixel = 6*|A_col|*atlas_width / (2*extent_pix)
    // and lod = log2 of the larger axis, clamped at 0 (magnification stays on
    // level 0, where plain bilinear is already correct).
    sp.lod = 0.0;
    if tex_params.probe_mode != 0u {
        let extent_pix = unpack2x16float(splat.extent);
        let a_col0 = vec2<f32>(sp.uv_scale.x, sp.uv_skew.y);   // (A00, A10)
        let a_col1 = vec2<f32>(sp.uv_skew.x,  sp.uv_scale.y);  // (A01, A11)
        let texw   = f32(tex_params.atlas_width);
        let px     = max(2.0 * max(extent_pix.x, extent_pix.y), 1.0);
        let tpp    = 6.0 * texw * max(length(a_col0), length(a_col1)) / px;
        sp.lod     = max(0.0, log2(max(tpp, 1.0)));
    } else {
        // Baked atlas: preprocess picked the integer level and stored it in \`_pad\`
        // (0.0 for bundles without a chain), see preprocess_2dgs.wgsl.
        sp.lod     = sp.uv_skew.y;
    }
    return sp;
}

fn splat_in(in: VertexOutput) -> SplatIn {
//#if FETCH_BY_ID
    return unpack_splat(splats_2d[in.slot]);
//#else
    var sp : SplatIn;
    sp.Tu = in.Tu; sp.Tv = in.Tv; sp.Tw = in.Tw;
    sp.color = in.color; sp.shape = in.shape; sp.center_pix = in.center_pix;
    sp.depth_plane = in.depth_plane; sp.gauss_id = in.gauss_id;
    sp.uv_base = in.uv_base; sp.uv_scale = in.uv_scale; sp.layer = in.layer;
    sp.uv_skew = in.uv_skew; sp.lod = in.lod;
    return sp;
//#endif
}

//#if OCT
// ---- OCT bound: exact cutoff ellipse rebuilt from the CONIC coefficients ----
// The fragment's rational reconstruction is s(d) = c + J·d / (1 + dw·d) with
// c = (u0, v0), so with M = J + c ⊗ dw:  |s|² ≤ k²  ⇔  |c + M d|² ≤ k²(1+dw·d)²
// (denom > 0 side), a quadratic in d:
//     dᵀ Q d + 2 gᵀ d + q0 ≤ 0,   Q = MᵀM − k² dw dwᵀ,  g = Mᵀc − k² dw,
//     q0 = |c|² − k².
// Completing the square gives centre δ = −Q⁻¹g and dᵀQd ≤ t = gᵀQ⁻¹g − q0.
// For a cull-alive surfel this is exactly the SnugBox ellipse (same cutoff k,
// same conic), so δ ≈ 0 — it is kept anyway so fp drift never shrinks the
// bound. The cutoff must be rebuilt with the cull's formula (OAC included).
fn oct_cutoff(opacity: f32, shape: f32) -> f32 {
    let oac = (render_settings.accel_flags & 1u) != 0u;
    if shape > 1e-6 {
        if !oac { return 3.0; }
        let inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
        let inv_pow = pow(inv, 1.0 / max(shape, 1e-3));
        return max(0.5, 3.0 * sqrt(max(0.0, 1.0 - inv_pow)));
    }
    if !oac { return 3.5; }
    return max(0.5, sqrt(2.0 * log(255.0 * max(opacity, 1.0 / 255.0))));
}

// 8 unit normals at 45° steps (CCW) — support directions of the octagon.
const OCT_N = array<vec2<f32>, 8>(
    vec2<f32>( 1.0,  0.0), vec2<f32>( 0.7071067811865476,  0.7071067811865476),
    vec2<f32>( 0.0,  1.0), vec2<f32>(-0.7071067811865476,  0.7071067811865476),
    vec2<f32>(-1.0,  0.0), vec2<f32>(-0.7071067811865476, -0.7071067811865476),
    vec2<f32>( 0.0, -1.0), vec2<f32>( 0.7071067811865476, -0.7071067811865476),
);

// Corner \`k\` (0..7, CCW) of the polygon bounding this splat, in pixel offsets
// from center_pix. Ellipse support h(n) = sqrt(t · nᵀQ⁻¹n), unioned with the
// low-pass disc (radius filter_r, as the quad path) and the cull's box
// half-extents (never smaller than the legacy quad); + PAD px of slack.
fn oct_corner(sp: SplatIn, extent_pix: vec2<f32>, k: u32) -> vec2<f32> {
    let filter_r = K_BETA * FILTER_SIZE;
    let ext_pad = bound_pad(extent_pix);
    let half = vec2<f32>(max(ext_pad.x, filter_r), max(ext_pad.y, filter_r));
    var use_ell = false;
    var Qa = 1.0; var Qb = 0.0; var Qe = 1.0; var t = 0.0; var delta = vec2<f32>(0.0);
    if (sp.gauss_id & 0x80000000u) == 0u {
        let c  = vec2<f32>(sp.Tu.x, sp.Tu.y);
        let J00 = sp.Tu.z; let J01 = sp.Tv.x; let J10 = sp.Tv.y; let J11 = sp.Tv.z;
        let dw = vec2<f32>(sp.Tw.x, sp.Tw.y);
        let kk = oct_cutoff(sp.color.a, sp.shape); let k2 = kk * kk;
        let M00 = J00 + c.x * dw.x; let M01 = J01 + c.x * dw.y;
        let M10 = J10 + c.y * dw.x; let M11 = J11 + c.y * dw.y;
        Qa = M00 * M00 + M10 * M10 - k2 * dw.x * dw.x;
        Qb = M00 * M01 + M10 * M11 - k2 * dw.x * dw.y;
        Qe = M01 * M01 + M11 * M11 - k2 * dw.y * dw.y;
        let g = vec2<f32>(M00 * c.x + M10 * c.y - k2 * dw.x,
                          M01 * c.x + M11 * c.y - k2 * dw.y);
        let q0 = dot(c, c) - k2;
        let det = Qa * Qe - Qb * Qb;
        if det > 1e-12 && Qa > 0.0 && Qe > 0.0 {
            // Q⁻¹ = [E −B; −B A] / det
            let Qig = vec2<f32>(Qe * g.x - Qb * g.y, -Qb * g.x + Qa * g.y) / det;
            delta = -Qig;
            t = dot(g, Qig) - q0;
            use_ell = t > 0.0;
        }
    }
    // Same slack as the quad path (centre now exact for the CONIC; f16 extent
    // only enters through \`half\`).
    let PAD = select(0.25, 0.0, (render_settings.accel_flags & 1024u) != 0u);
    var h : array<f32, 8>;
    for (var j = 0u; j < 8u; j = j + 1u) {
        let n = OCT_N[j];
        // Box support (== legacy quad when the ellipse is unavailable).
        var hj = half.x * abs(n.x) + half.y * abs(n.y);
        if use_ell {
            let det = Qa * Qe - Qb * Qb;
            let he = sqrt(max(t * (Qe * n.x * n.x - 2.0 * Qb * n.x * n.y + Qa * n.y * n.y) / det, 0.0));
            // ellipse ∪ low-pass disc, offset by the completed-square centre
            hj = max(he + dot(n, delta), filter_r);
        }
        h[j] = hj + PAD;
    }
    // Corner k = intersection of the tangent lines n_k·x = h_k and
    // n_{k+1}·x = h_{k+1}  (2×2 Cramer, determinant sin 45°).
    let n0 = OCT_N[k]; let n1 = OCT_N[(k + 1u) & 7u];
    let h0 = h[k];     let h1 = h[(k + 1u) & 7u];
    return vec2<f32>(h0 * n1.y - n0.y * h1, n0.x * h1 - h0 * n1.x) * 1.4142135623730951;
}
//#endif

@vertex
fn vs_main(
    @builtin(vertex_index)   vid : u32,
    @builtin(instance_index) iid : u32,
) -> VertexOutput {
    var out : VertexOutput;

    let slot       = indices[iid];
    let splat      = splats_2d[slot];
    let center_pix = unpack_center(splat.pos);
    let extent_pix = unpack2x16float(splat.extent);
    let sp         = unpack_splat(splat);

//#if OCT
    // 8-vertex triangle strip over the CCW octagon corners in zig-zag order
    // 0,1,7,2,6,3,5,4 → triangles (0,1,7)(1,7,2)(7,2,6)(2,6,3)(6,3,5)(3,5,4)
    // tile the convex polygon exactly. drawIndirect vertex_count == 8.
    let k = select((8u - (vid >> 1u)) & 7u, (vid + 1u) >> 1u, (vid & 1u) == 1u);
    let corner_pix = center_pix + oct_corner(sp, extent_pix, k);
//#else
    // Quad half-extent: max(extent_pix, k·FilterSize) on each axis. The cull
    // pass already wrote the tight bbox, so this just adds the filter margin.
    // Margin: the stored centre is on a ¼-px grid (≤ ⅛ px from the ellipse's
    // true centre) and the f16 extent carries 0.05 % relative error, so the
    // bare tight bbox clipped fragments on the edge. For hard-edged surfels
    // (beta shape → 0, α ≈ opacity right up to ρ = 3) those were fully
    // visible fragments: measured ~100 px/frame, |Δ| up to 46/255 on room
    // before the ¼-px centre, 16/255 after. 0.25 px + 0.1 % restores them.
    let filter_r = K_BETA * FILTER_SIZE;
    let ext_pad  = bound_pad(extent_pix);
    let half     = vec2<f32>(max(ext_pad.x, filter_r), max(ext_pad.y, filter_r));

    // 4-vertex triangle-strip axis-aligned quad (matches websplatter).
    //   vid 0: ( 1,  1)   vid 1: (-1,  1)
    //   vid 2: ( 1, -1)   vid 3: (-1, -1)
    let ox = select(-1.0, 1.0, (vid & 1u) == 0u);
    let oy = select(-1.0, 1.0, vid < 2u);
    let corner_pix = center_pix + vec2<f32>(ox, oy) * half;
//#endif

    // Pixel → NDC. Framebuffer y grows downward; clip y grows upward.
    let vp = vec2<f32>(f32(render_settings.canvas_size.x), f32(render_settings.canvas_size.y));
    let ndc = vec2<f32>(
        (corner_pix.x * 2.0 - (vp.x - 1.0)) / vp.x,
        -((corner_pix.y * 2.0 - (vp.y - 1.0)) / vp.y),
    );
    out.position = vec4<f32>(ndc, 0.0, 1.0);

//#if FETCH_BY_ID
    out.slot = slot;
//#else
    out.Tu = sp.Tu; out.Tv = sp.Tv; out.Tw = sp.Tw;
    out.color       = sp.color;
    out.shape       = sp.shape;
    out.center_pix  = center_pix;
    out.depth_plane = sp.depth_plane;
    out.gauss_id    = sp.gauss_id;
    out.uv_base     = sp.uv_base;
    out.uv_scale    = sp.uv_scale;
    out.layer       = sp.layer;
    out.uv_skew     = sp.uv_skew;
    out.lod         = sp.lod;
//#endif
    return out;
}

// Shared fragment evaluation — returns un-premultiplied rgb, alpha, and the
// per-pixel VIEW-SPACE depth of the exact ray-splat intersection (zv). All
// fs_main calls this; a discard inside culls the fragment.
struct ShadeOut {
    rgb : vec3<f32>,
    a   : f32,
    zv  : f32,
};

fn shade(in: SplatIn, pos: vec2<f32>) -> ShadeOut {
    let pixf = floor(pos);

    // \`--method mixed_3d\` untextured branch — Gauss is a 3D EWA ellipsoid,
    // not a 2DGS surfel. Top bit of gauss_id is the untextured flag (set in
    // surfel_cull at store time). When set:
    //   * Tu carries the inverse 2D covariance (a, b, c), NOT the transmat;
    //   * Falloff is \`α·exp(-½·m)\` with m = a·dx² + 2b·dx·dy + c·dy²;
    //   * No atlas residual — untextured Gausses carry a zero-area atlas rect
    //     at bake time; skip the sample entirely.
    //   * Depth = depth_center (no surfel-plane interpolation).
    // Matches diff_surfel_bake_render/cuda_rasterizer/forward.cu:457.
    if (in.gauss_id & 0x80000000u) != 0u {
        let dx_e = pixf - in.center_pix;
        let m_e  = in.Tu.x * dx_e.x * dx_e.x
                 + 2.0 * in.Tu.y * dx_e.x * dx_e.y
                 + in.Tu.z * dx_e.y * dx_e.y;
        if m_e < 0.0 { discard; }
        let alpha_e = min(0.99, in.color.a * exp(-0.5 * m_e));
        if alpha_e < 1.0 / 255.0 { discard; }
        if in.depth_plane.z < 0.2 { discard; }
        let color_e = max(vec3<f32>(0.0), in.color.rgb + vec3<f32>(tex_params.res_bias));
        return ShadeOut(color_e, alpha_e, in.depth_plane.z);
    }

    // CONIC OPTION A: fragment reads precomputed (u₀, v₀, J⁻¹, ∇p.z/p_c.z)
    // from the tu/tv/tw slots (see surfel_cull's textured branch). Skips the
    // per-fragment cross-product + perspective divide. Formula is
    // MATHEMATICALLY EXACT (not linearized) because p.x, p.z are both linear
    // in pix → u = p.x/p.z is a rational function of pix, and:
    //   u = u₀ + (J⁻¹·Δpix).x / (1 + dwdxr·dx + dwdyr·dy)
    // Slot layout: tu=(u₀, v₀, J00), tv=(J01, J10, J11), tw=(dwdxr, dwdyr, 0).
    // Two ways to get the ray/surfel intersection \`s\`. Both are the SAME
    // algebra; they differ only in where the cancellation happens.
    var s : vec2<f32>;
    if (render_settings.accel_flags & 4096u) != 0u {
        // CENTRED (accel bit 12): same cross-product, but in coordinates
        // centred on the splat. in.Tu = k_c, in.Tv = l_c, in.Tw = Tw, and the
        // offset d is at most the quad half-extent -- so nothing here subtracts
        // two numbers of magnitude ~1e3 to get one of magnitude ~1.
        let d2 = pixf - in.center_pix;
        let kk = in.Tu + d2.x * in.Tw;
        let ll = in.Tv + d2.y * in.Tw;
        let pp = cross(kk, ll);
        if abs(pp.z) < 1e-12 { discard; }
        s = pp.xy / pp.z;
    } else if (render_settings.accel_flags & 2048u) != 0u {
        // accel bit 11 (?raysplat=1): original 2DGS per-fragment ray-splat from
        // the RAW transmat rows the cull stored under the same bit. Every
        // cancellation in \`pix*Tw - Tu\` happens AT this pixel, so the error
        // cannot grow with the quad.
        let kk = pixf.x * in.Tw - in.Tu;
        let ll = pixf.y * in.Tw - in.Tv;
        let pp = cross(kk, ll);
        if abs(pp.z) < 1e-12 { discard; }
        s = pp.xy / pp.z;
    } else {
        // CONIC OPTION A: (u0, v0, J⁻¹, dw) precomputed about the splat centre.
        // Exact in exact arithmetic, but the cancellation is baked into the
        // per-Gauss constants and the extrapolation multiplies whatever error
        // they carry by the distance from the centre.
        let u0 = in.Tu.x; let v0 = in.Tu.y;
        let J00 = in.Tu.z; let J01 = in.Tv.x;
        let J10 = in.Tv.y; let J11 = in.Tv.z;
        let dwdxr = in.Tw.x; let dwdyr = in.Tw.y;
        let d = pixf - in.center_pix;
        let du_lin = J00 * d.x + J01 * d.y;
        let dv_lin = J10 * d.x + J11 * d.y;
        // Correction denominator crosses zero at the expansion's validity
        // boundary — sign flips there produce the foggy/bowtie artifact.
        let denom  = 1.0 + dwdxr * d.x + dwdyr * d.y;
        if denom < 0.1 { discard; }
        let inv_d  = 1.0 / denom;
        s = vec2<f32>(u0 + du_lin * inv_d, v0 + dv_lin * inv_d);
    }
    let rho3d  = dot(s, s);

    // Screen-space low-pass (alpha_lp) for sub-pixel splats.
    let d_pix = in.center_pix - pixf;
    let rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);

    // Per-pixel intersection depth — with the CUDA low-pass fallback
    // (forward.cu: \`depth = (rho3d <= rho2d) ? plane : Tw.z\`). When the
    // screen-space low-pass kernel wins (sub-pixel / edge-on splats), the
    // ray-plane intersection \`s\` is a wild extrapolation and the plane-
    // interpolated depth is meaningless — fall back to the splat's CENTER
    // depth. Invisible in ht=0 (zv unused; order comes from the sort), but
    // in HT modes this is the CORE SORT KEY: keying an edge-on splat at an
    // extrapolated depth costs it its core slot and buries it in the tail
    // at huge \`rel\` → thin structures vanish/shimmer under ht=1/2.
    let depth_plane_interp = dot(in.depth_plane, vec3<f32>(s, 1.0));
    let depth = select(in.depth_plane.z, depth_plane_interp, rho3d <= rho2d);
    if depth < 0.2 { discard; }

    // Kernel dispatch — BETA_KERNEL is a pipeline constant.
    var alpha_beta : f32;
    if BETA_KERNEL == 0u {
        alpha_beta = exp(-rho3d * 0.5);
    } else {
        if rho3d >= K_BETA_SQ + 1e-6 { discard; }
        let base = max(0.0, 1.0 - rho3d / K_BETA_SQ);
        let sh = in.shape;
        // Fast paths for shape ∈ {0.5, 1, 2, 4}.
        if sh >= 1.99 && sh <= 2.01 {
            alpha_beta = base * base;                               // β=2
        } else if sh >= 0.99 && sh <= 1.01 {
            alpha_beta = base;                                      // β=1
        } else if sh >= 0.49 && sh <= 0.51 {
            alpha_beta = sqrt(base);                                // β=0.5
        } else if sh >= 3.99 && sh <= 4.01 {
            let b2 = base * base;                                   // β=4
            alpha_beta = b2 * b2;
        } else {
            alpha_beta = pow(base, sh);                             // fallback
        }
    }
    let alpha_lp   = exp(-rho2d * 0.5);
    let opa        = in.color.a;
    let b          = min(0.99, opa * max(alpha_beta, alpha_lp));
    if b < 1.0 / 255.0 { discard; }

    var color = in.color.rgb;

    // Atlas residual — single HW-decoded BC7 texture fetch per fragment.
    // uv_base / uv_scale are precomputed in preprocess_2dgs.wgsl so the entire
    // atlas UV mapping reduces to two fmadd + one texture sample.
    if tex_params.atlas_enabled != 0u {
        var uv    : vec2<f32>;
        var layer : i32 = i32(in.layer);
        if tex_params.probe_mode != 0u {
            // ---- Proberes: shared single-layer texture, general 2x2 affine ----
            // Mirrors the CUDA ground truth (diff_surfel_3D_sh_res_probe
            // forward.cu case 5, flag 0x1000):
            //     uv = (rho3d <= rho2d) ? s : (0,0)
            //     tx = A00*uv.x + A01*uv.y + t0
            //     ty = A10*uv.x + A11*uv.y + t1
            //
            // The low-pass collapse is NOT foldable into the affine: when the
            // screen-space kernel wins, the sample point is the probe CENTRE,
            // not the ray-splat point. Dropping it corrupts distant geometry.
            let uv_eff = select(vec2<f32>(0.0), s, rho3d <= rho2d);
            // Zero storage reads — all six coefficients arrive as flat varyings.
            // uv_scale = (A00, A11) diagonal, uv_skew = (A01, A10) off-diagonal.
            uv = vec2<f32>(
                in.uv_scale.x * uv_eff.x + in.uv_skew.x  * uv_eff.y + in.uv_base.x,
                in.uv_skew.y  * uv_eff.x + in.uv_scale.y * uv_eff.y + in.uv_base.y,
            );
            layer = 0;
        } else {
            // Clamp to the tile's texel-centre range at the sampled level (CUDA: au ∈ [u0, u0+w−1.001]
            // before the +½), so bilinear taps never reach the neighbouring tile in the atlas.
            let lvl  = select(0.0, in.lod, tex_params.mip_mode != 0u);
            let dims = vec2<f32>(textureDimensions(atlas));
            let hw   = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 * exp2(lvl) / dims, vec2<f32>(0.0));
            uv = clamp(in.uv_base + s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        }
        let lod_eff = select(0.0, in.lod, tex_params.mip_mode != 0u);
        let rgba = textureSampleLevel(atlas, atlas_samp, uv, layer, lod_eff);
        color = color + rgba.rgb * tex_params.atlas_scale + vec3<f32>(tex_params.atlas_offset);
    }
    color = max(vec3<f32>(0.0), color + vec3<f32>(tex_params.res_bias));

    return ShadeOut(color, b, depth);
}

// ---------------------------------------------------------------------------
// Sorted path (default): premultiplied output, blend order = radix-sorted
// instance order. Popping-prone when opaque surfels interpenetrate (per-splat
// center-depth global order vs per-pixel intersection order).
// ---------------------------------------------------------------------------
@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let sh = shade(sp, in.position.xy);
    return vec4<f32>(sh.rgb, 1.0) * sh.a;
}
`,Js=`const WG_SIZE = 256u;
const TILE_SIZE = 256u;
override RS_RADIX_LOG2 = 8u;  // 2 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 4 entries into the radix table

struct GeneralInfo{
  keys_size : u32,  dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

struct DrawIndirect {
    vertex_count: u32,
    instance_count: u32,
    first_vertex: u32,
    first_instance: u32,
}

@group(0) @binding(0) var<storage, read_write> infos: GeneralInfo;
@group(0) @binding(1) var<storage, read_write> draw_indirect: DrawIndirect;

@compute @workgroup_size(1)
fn write_dispatch_triples(
    @builtin(workgroup_id)        wid: vec3<u32>,
    @builtin(local_invocation_id) lid: vec3<u32>
) {
    if wid.x == 0u && lid.x == 0u {
        draw_indirect.instance_count = infos.keys_size;
        // Histogram/Scatter dispatch X (elements divided by WG_SIZE)
        infos.dispatch_x = (infos.keys_size + WG_SIZE - 1u) / WG_SIZE;
        infos.dispatch_y = 1u;
        infos.dispatch_z = 1u;

        // Two-level tile counts
        let t0 = (infos.dispatch_x + TILE_SIZE - 1u) / TILE_SIZE;
        let t1 = (t0 + TILE_SIZE - 1u) / TILE_SIZE;

        // Triples for L0/L1 plus t0/t1
        infos.l0_x = t0; infos.l0_y = RS_RADIX_SIZE; infos.l0_z = 1u; infos.l0_t = t0;
        infos.l1_x = t1; infos.l1_y = RS_RADIX_SIZE; infos.l1_z = 1u; infos.l1_t = t1;
    }
}`,Xs=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
//
// Reads per-Gauss \`Surfel\` (position + 2D scale + rotation + opacity + shape),
// builds the transmat T = (splat2world)^T · world2ndc · ndc2pix, computes the
// axis-aligned screen-space bbox via compute_aabb, AABB-culls against the
// viewport, and writes the alive Gauss compactly into:
//   • splats_2d  : Splat2DGS (Tu/Tv/Tw + opacity + pos + extent + depth_plane + gauss_id + shape)
//   • sh_solvers : SHSolver  (view_dir + opacity + gauss_id, for later SH/SV eval)
//   • sort_depths/sort_indices : keys & payload for radix sort
//
// Compaction uses workgroup-local prefix sum + a single atomicAdd per workgroup
// to allocate the output offset. No inter-workgroup spin-wait.

struct GeneralInfo {
  keys_size  : atomic<u32>,
  dispatch_x : u32, dispatch_y : u32, dispatch_z : u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

const WG_SIZE : u32 = 256u;

struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};

// 32-byte input surfel (matches PLY worker output).
//
// IMPORTANT: WGSL would naturally size this struct at 28 bytes (3 f32 +
// 4 u32, all 4-aligned) with \`array<Surfel>\` stride 28, but the JS-side
// SurfelPlyParser writes 32 bytes per record (xyz f32 + 4 u32 + 1 pad u32).
// Without the explicit \`_pad\` field below, surfel N would read at offset
// N*28 in WGSL while JS wrote it at N*32 — every surfel past #0 ends up
// reading garbage from the middle of an earlier record. That single
// alignment bug is what made the renderer look completely broken.
struct Surfel {
  x : f32, y : f32, z : f32,
  opacity_shape : u32,            // 2× f16: [opacity, shape]
  scale_rot     : array<u32, 3>,  // 6× f16: [scale_x, scale_y, rot_w, rot_x, rot_y, rot_z]
  // \`--method mixed_3d\` aux word — was \`_pad\` before mixed_3d. JS PLY parser
  // writes 1 (is_textured=true, scale_z=0) for every Gauss in pre-mixed_3d
  // bundles, so the textured branch below is bit-identically the old path
  // (the EWA branch is gated on \`(aux >> 16) & 1 == 0u\`).
  //   bits  0..15 : scale_z (f16, exp'd from log-space PLY column);
  //                 ignored when is_textured = 1.
  //   bit      16 : is_textured (1 = 2DGS surfel + atlas residual path;
  //                              0 = mixed_3d untextured 3D EWA ellipsoid).
  //   bits 17..31 : reserved.
  aux           : u32,
};

// 96-byte output splat. Extended 2026-07-23 with atlas-UV precomp fields
// (uv_base_*, uv_scale_*, layer) that preprocess_2dgs.wgsl fills once per
// alive Gauss so the fragment shader can do \`uv = uv_base + s * uv_scale\`
// and a single HW texture fetch — kills 5 storage-buffer reads + 2 fp32
// divides per fragment on the atlas path. Cull just zero-initialises the
// new fields; preprocess overwrites.
//
// Stride must match preprocess_2dgs.wgsl + render_2dgs.wgsl + the host TS
// (\`C_SIZE_2D_SPLAT = 96\` in gaussian-renderer.ts).
struct Splat2DGS {
  tu_x : f32, tu_y : f32, tu_z : f32,
  tv_x : f32, tv_y : f32, tv_z : f32,
  tw_x : f32, tw_y : f32, tw_z : f32,
  opacity      : f32,
  pos          : u32, // 2× i16 center_pix in ¼-px units (pack_center / unpack_center)
  extent       : u32, // 2× f16 extent_pix
  color_rg     : u32, // 2× f16, written by preprocess
  color_b_shape: u32, // 2× f16, .x=color.b .y=shape
  gauss_id     : u32,
  depth_u      : f32,
  depth_v      : f32,
  depth_center : f32,
  uv_base_x    : f32,
  uv_base_y    : f32,
  uv_scale_x   : f32,
  uv_scale_y   : f32,
  layer        : u32,
  _pad         : u32,
};

// 12-byte solver — view dir + opacity + idx. Preprocess reads this to evaluate
// per-frame view-dependent color and writes the result into Splat2DGS.color_*.
struct SHSolver {
  dir_xy        : u32, // 2× f16 = [dir.x, dir.y]
  dir_z_opacity : u32, // 2× f16 = [dir.z, opacity]
  idx           : u32, // gauss_id (input vertex index)
};

// 32-byte RenderSettings (matches render-settings.ts canonical layout).
//   word at offset 8 = accel_flags
//     bit 0 → OAC: opacity-aware cutoff (shrink k per-surfel by opacity·shape)
//     bit 1 → SPR: sub-pixel rejection (drop tiny low-opacity surfels)
//     bit 2 → BFC: backface cull (drop surfels where normal points away from
//             camera; only safe on 1-sided bakes — many 2DGS bakes train
//             double-sided so leave OFF unless visually verified)
struct RenderSettings {
  canvas_size      : vec2<u32>,
  accel_flags      : u32,
  _pad0            : u32,
  gaussian_scaling : f32,
  kernel_size      : f32,
  mip_spatting     : u32,
  walltime         : f32,
};

@group(0) @binding(0) var<uniform> camera          : CameraUniforms;
@group(0) @binding(1) var<uniform> render_settings : RenderSettings;

@group(1) @binding(0) var<storage, read>       surfels   : array<Surfel>;
@group(1) @binding(1) var<storage, read_write> splats_2d : array<Splat2DGS>;

@group(2) @binding(0) var<storage, read_write> sort_infos    : GeneralInfo;
@group(2) @binding(1) var<storage, read_write> sort_depths   : array<u32>;
@group(2) @binding(2) var<storage, read_write> sort_indices  : array<u32>;
@group(2) @binding(3) var<storage, read_write> sh_solvers    : array<SHSolver>;

// Backface-cull params (centroid-oriented BFC — matches nest-splatting's
// train.py --backface_cull + the CUDA lean_occ set_backface_cull):
//   n_out = disc_normal * sign(dot(disc_normal, pos − centroid))
//   cull when dot(normalize(pos − cam), n_out) > cos_thr
// cos_thr > 1.0 is the OFF sentinel → the ACCEL_BFC bit falls back to the
// legacy sign-naive test (old bundles keep their behavior). Host seeds the
// centroid from the loaded surfel cloud's mean at boot.
struct BfcParams {
  cos_thr : f32,
  cx : f32, cy : f32, cz : f32,
};
@group(3) @binding(1) var<uniform> bfc_params : BfcParams;
//#if STATIC_KEYS
// Fixed per-surfel sort keys (portal background): > 0 replaces the live view depth as the
// radix-sort key, so these surfels keep one global order however the camera moves.
@group(3) @binding(2) var<storage, read> static_keys : array<f32>;
//#endif

// Splat2DGS.pos: centre in ¼-px units as two i16 (low = x, high = y).
// Exact integer grid (pack2x16snorm's 1/32767 scale is NOT a ¼-px grid and
// drifts 0.12 px by x = 4000). Unpack in render_2dgs.wgsl: unpack_center.
fn pack_center(c: vec2<f32>) -> u32 {
    let q = vec2<i32>(round(c * 4.0));
    return (u32(q.x) & 0xFFFFu) | (u32(q.y) << 16u);
}

fn quat_to_rotmat(q: vec4<f32>) -> mat3x3<f32> {
    let qn = q * inverseSqrt(max(dot(q, q), 1e-20));
    let w = qn.x; let x = qn.y; let y = qn.z; let z = qn.w;
    let x2 = x*x; let y2 = y*y; let z2 = z*z;
    let xy = x*y; let xz = x*z; let yz = y*z;
    let wx = w*x; let wy = w*y; let wz = w*z;
    return mat3x3<f32>(
        vec3<f32>(1.0 - 2.0*(y2 + z2), 2.0*(xy + wz),       2.0*(xz - wy)),
        vec3<f32>(2.0*(xy - wz),       1.0 - 2.0*(x2 + z2), 2.0*(yz + wx)),
        vec3<f32>(2.0*(xz + wy),       2.0*(yz - wx),       1.0 - 2.0*(x2 + y2))
    );
}

// Opacity-aware cutoff (OAC) — BetaScaled kernel.
// The fragment shader discards when \`opacity · (1 − ρ²/k²)^shape < 1/255\`.
// Solve for ρ:
//   k_eff = k · √(1 − (1/(255·opa))^(1/shape))
// Tighter than the compact-support k, especially for low-opacity surfels.
// Returns at least 0.5 to avoid the bbox shrinking below the minimum quad
// the vertex shader applies.
fn opacity_aware_cutoff(k: f32, opacity: f32, shape: f32) -> f32 {
    let inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
    let inv_pow = pow(inv, 1.0 / max(shape, 1e-3));
    let inside = max(0.0, 1.0 - inv_pow);
    return max(0.5, k * sqrt(inside));
}

// Opacity-aware cutoff — Gaussian kernel (--kernel gaussian, shape == 0).
// Solve \`α · exp(-ρ²/2) = 1/255\` → ρ = √(2·log(255·α)).
// For α = 1 → ρ ≈ 3.33; α = 0.5 → 3.0; α = 0.1 → 2.5. Tighter than the
// hardcoded 3.0 in the beta path's caller for low-α surfels, which is
// exactly the win we want on Gaussian bakes (loose binning was leaving the
// SnugBox+AccuTile pass over-emitting tiles for these). Same 0.5 floor.
fn opacity_aware_cutoff_gaussian(opacity: f32) -> f32 {
    let log_term = log(255.0 * max(opacity, 1.0 / 255.0));
    return max(0.5, sqrt(2.0 * log_term));
}

// Axis-aligned bbox of the projected disk via the standard transmat conic
// (matches CUDA \`compute_aabb\` in diff_surfel_bake_render). Returns
// (cx, cy, hx, hy) in pixel coords. hx<0 ⇒ degenerate (caller culls).
fn compute_aabb(T: mat3x3<f32>, cutoff: f32) -> vec4<f32> {
    let t = vec3<f32>(cutoff * cutoff, cutoff * cutoff, -1.0);
    let d = dot(t, T[2] * T[2]);
    if d >= 0.0 { return vec4<f32>(0.0, 0.0, -1.0, -1.0); }
    let f = (1.0 / d) * t;
    let p  = vec2<f32>(dot(f, T[0] * T[2]), dot(f, T[1] * T[2]));
    let h0 = p * p - vec2<f32>(dot(f, T[0] * T[0]), dot(f, T[1] * T[1]));
    if any(h0 < vec2<f32>(0.0)) { return vec4<f32>(0.0, 0.0, -1.0, -1.0); }
    let h = sqrt(h0);
    return vec4<f32>(p.x, p.y, h.x, h.y);
}

// SnugBox AABB — same ellipse, computed via the cross-product / quadratic
// form Q(p) = A·px² + 2B·px·py + E·py² + 2D·px + 2F·py + G ≤ 0 with
// coefficients derived from {n0,n1,n2} = {Tv×Tw, Tw×Tu, Tu×Tv}. Numerically
// stable: doesn't catastrophically lose digits on edge-on splats where the
// standard \`compute_aabb\` returns negative axes (caller would cull). Ports
// directly from Halloumi-web-splat's preprocess_2dgs.wgsl::compute_aabb_snugbox.
// On bonsai's foreground glass orb this recovers ~12% of foreground pixels.
fn compute_aabb_snugbox(T: mat3x3<f32>, cutoff: f32) -> vec4<f32> {
    let k_sq = cutoff * cutoff;
    let Tu = T[0];
    let Tv = T[1];
    let Tw = T[2];

    let n0 = cross(Tv, Tw);  // coef of px
    let n1 = cross(Tw, Tu);  // coef of py
    let n2 = cross(Tu, Tv);  // constant

    let A_ = n0.x*n0.x + n0.y*n0.y - k_sq * n0.z*n0.z;
    let B_ = n0.x*n1.x + n0.y*n1.y - k_sq * n0.z*n1.z;
    let E_ = n1.x*n1.x + n1.y*n1.y - k_sq * n1.z*n1.z;
    let D_ = n0.x*n2.x + n0.y*n2.y - k_sq * n0.z*n2.z;
    let F_ = n1.x*n2.x + n1.y*n2.y - k_sq * n1.z*n2.z;

    let det = A_*E_ - B_*B_;
    if !(det > 0.0) || !(A_ > 0.0) || !(E_ > 0.0) {
        return vec4<f32>(0.0, 0.0, -1.0, -1.0);
    }

    // Center p = ellipse gradient zero (Cramer on ∇Q = 0).
    let p_x = (B_*F_ - E_*D_) / det;
    let p_y = (B_*D_ - A_*F_) / det;

    // t = -Q(p). Evaluating via the cross-product form (each component
    // O(1) after gradient cancellation) keeps ~7 more digits than the
    // direct (D·p + F·p + G) form.
    let cx_p = p_x*n0.x + p_y*n1.x + n2.x;
    let cy_p = p_x*n0.y + p_y*n1.y + n2.y;
    let cz_p = p_x*n0.z + p_y*n1.z + n2.z;
    let t_   = -(cx_p*cx_p + cy_p*cy_p - k_sq * cz_p*cz_p);
    if !(t_ > 0.0) {
        return vec4<f32>(0.0, 0.0, -1.0, -1.0);
    }

    // Axis-aligned bbox half-extents of the centered ellipse:
    //   max |px| s.t. A·dx² + 2B·dx·dy + E·dy² ≤ t  ⇒  dx² = t·E / det
    let hx = sqrt(t_ * E_ / det);
    let hy = sqrt(t_ * A_ / det);
    return vec4<f32>(p_x, p_y, hx, hy);
}

// \`--method mixed_3d\` untextured EWA 3D-ellipsoid projection. Ports the
// FastGS-verbatim path I just landed in diff_surfel_bake_render's CUDA
// preprocess (cuda_rasterizer/forward.cu compute_ewa_conic + the AccuTile
// AABB block I added at forward.cu:617). Returns:
//   .xy   = pixel-space center (CUDA convention — same as compute_aabb_snugbox);
//   .zw   = per-axis tight half-extents (in pixels).
// Conic (a, b, c) = inverse 2D covariance is returned via out_conic; degenerate
// conics return half-extent < 0 so the caller culls.
fn compute_ewa_cov2d_pixel(
    xyz: vec3<f32>,
    scales: vec3<f32>,           // (sx, sy, sz), already exp'd from log-space + multiplied by gaussian_scaling.
    rot: vec4<f32>,
    camspace: vec3<f32>,         // camera-space position (camera.view * xyz).xyz
    opacity: f32,
    out_conic: ptr<function, vec3<f32>>,
) -> vec4<f32> {
    // World covariance Σw = R · diag(sx²,sy²,sz²) · Rᵀ. Quat → R.
    let R = quat_to_rotmat(rot);
    let s2 = scales * scales;
    let r0 = R[0]; let r1 = R[1]; let r2 = R[2];

    // Σw is symmetric 3x3 — keep 6 components.
    let cw_xx = s2.x*r0.x*r0.x + s2.y*r1.x*r1.x + s2.z*r2.x*r2.x;
    let cw_xy = s2.x*r0.x*r0.y + s2.y*r1.x*r1.y + s2.z*r2.x*r2.y;
    let cw_xz = s2.x*r0.x*r0.z + s2.y*r1.x*r1.z + s2.z*r2.x*r2.z;
    let cw_yy = s2.x*r0.y*r0.y + s2.y*r1.y*r1.y + s2.z*r2.y*r2.y;
    let cw_yz = s2.x*r0.y*r0.z + s2.y*r1.y*r1.z + s2.z*r2.y*r2.z;
    let cw_zz = s2.x*r0.z*r0.z + s2.y*r1.z*r1.z + s2.z*r2.z*r2.z;

    // T = J · W, where W is the view rotation submatrix and J is the FastGS
    // Jacobian of the perspective projection at camera-space position t:
    //   J = [[fx/t.z,    0,    -fx·t.x/t.z²],
    //        [   0,   fy/t.z,  -fy·t.y/t.z²],
    //        [   0,      0,         0      ]]   (last row dropped)
    // Σs (screen-space 2D cov) = T · Σw · Tᵀ.
    let t  = camspace;
    let tz = sign(t.z) * max(abs(t.z), 1e-6);   // protect against /0 without flipping sign
    let zi = 1.0 / tz;
    let fx = camera.focal.x;
    let fy = camera.focal.y;
    let view_R = mat3x3<f32>(
        camera.view[0].xyz, camera.view[1].xyz, camera.view[2].xyz,
    );

    // T (2x3) — 2 rows (the screen-x and screen-y row), 3 world cols.
    // Row 0 = J row 0 · W:  (fx·zi, 0, -fx·t.x·zi²) · W
    // Row 1 = J row 1 · W:  (0, fy·zi, -fy·t.y·zi²) · W
    let j0 = vec3<f32>(fx * zi, 0.0, -fx * t.x * zi * zi);
    let j1 = vec3<f32>(0.0,     fy * zi, -fy * t.y * zi * zi);
    let T0 = vec3<f32>(dot(j0, view_R[0]), dot(j0, view_R[1]), dot(j0, view_R[2]));
    let T1 = vec3<f32>(dot(j1, view_R[0]), dot(j1, view_R[1]), dot(j1, view_R[2]));

    // Σs = T · Σw · Tᵀ. Symmetric 2x2 → 3 entries (xx, xy, yy).
    // Tw0 = Σw · T0 (3-vec), Tw1 = Σw · T1.
    let Tw0 = vec3<f32>(
        cw_xx*T0.x + cw_xy*T0.y + cw_xz*T0.z,
        cw_xy*T0.x + cw_yy*T0.y + cw_yz*T0.z,
        cw_xz*T0.x + cw_yz*T0.y + cw_zz*T0.z,
    );
    let Tw1 = vec3<f32>(
        cw_xx*T1.x + cw_xy*T1.y + cw_xz*T1.z,
        cw_xy*T1.x + cw_yy*T1.y + cw_yz*T1.z,
        cw_xz*T1.x + cw_yz*T1.y + cw_zz*T1.z,
    );
    var sxx = dot(T0, Tw0);
    var sxy = dot(T0, Tw1);
    var syy = dot(T1, Tw1);

    // Mip low-pass (FastGS eps2d = 0.3) — adds a sub-pixel filter so
    // far-away EWA Gaussians don't degenerate to a near-zero conic.
    sxx = sxx + 0.3;
    syy = syy + 0.3;

    let det = sxx * syy - sxy * sxy;
    if !(det > 0.0) {
        *out_conic = vec3<f32>(0.0);
        return vec4<f32>(0.0, 0.0, -1.0, -1.0);
    }

    // Conic = Σ⁻¹.
    let inv = 1.0 / det;
    *out_conic = vec3<f32>(syy * inv, -sxy * inv, sxx * inv);

    // Opacity-aware Mahalanobis-squared cutoff: 1/255 alpha-floor =>
    //   α · exp(-m/2) > 1/255   ⇔   m < 2·log(255·α).
    // Anything outside this iso-line is culled by the fragment shader's
    // \`α·exp(-m/2) < 1/255\` check, so binning to it is lossless.
    let t_cut = max(0.5, 2.0 * log(255.0 * max(opacity, 1.0 / 255.0)));
    let r_cut = sqrt(t_cut);

    // Per-axis tight half-extents at the cutoff iso-line. Σs.xx == sxx, so
    // half_w = r_cut · √Σs.xx (no inverse-roundtrip needed). Screen-axis-
    // aligned bbox is slightly loose for rotated EWA ellipses (vs. tight
    // principal-axes bbox), but the per-surfel atan2+cos+sin cost of computing
    // the principal-axis rotation in WGSL outweighs the saved fragments in
    // practice. Sticking with the simpler axis-aligned form.
    let hx = r_cut * sqrt(sxx);
    let hy = r_cut * sqrt(syy);

    // Pixel-space center in CUDA convention (matches compute_aabb_snugbox).
    // Use proj_raw (Y-flip undone) so wgpu's NDC matches the CUDA-convention
    // pixel coords the rest of the pipeline already produces for textured.
    var proj_raw = camera.proj;
    proj_raw[0].y = -proj_raw[0].y;
    proj_raw[1].y = -proj_raw[1].y;
    proj_raw[2].y = -proj_raw[2].y;
    proj_raw[3].y = -proj_raw[3].y;
    let pos2d_cuda = proj_raw * vec4<f32>(camspace, 1.0);
    let inv_w = 1.0 / pos2d_cuda.w;
    let ndc_cuda = pos2d_cuda.xy * inv_w;
    let W = camera.viewport.x;
    let H = camera.viewport.y;
    let cx = ndc_cuda.x * (W * 0.5) + (W - 1.0) * 0.5;
    let cy = ndc_cuda.y * (H * 0.5) + (H - 1.0) * 0.5;
    return vec4<f32>(cx, cy, hx, hy);
}

var<workgroup> scan0      : array<u32, WG_SIZE>;
var<workgroup> scan1      : array<u32, WG_SIZE>;
var<workgroup> group_base : u32;

@compute @workgroup_size(WG_SIZE)
fn surfel_cull(
  @builtin(global_invocation_id) gid : vec3<u32>,
  @builtin(local_invocation_id)  lid : vec3<u32>
) {
    var alive : u32 = 0u;

    // Per-element staging that the alive lane will commit at the end.
    var tu : vec3<f32>;
    var tv : vec3<f32>;
    var tw : vec3<f32>;
    var center_pix : vec2<f32>;
    var extent_pix : vec2<f32>;
    var depth_u    : f32;
    var depth_v    : f32;
    var depth_center : f32;
    var depth      : f32;
    var opacity    : f32;
    var shape      : f32;
    var view_dir   : vec3<f32>;
    // \`--method mixed_3d\` per-Gauss textured/untextured flag, persisted out of
    // the inner block so the store can OR it into gauss_id's top bit. Default 1
    // (textured) — bit-identical to the pre-mixed_3d path when every surfel is
    // textured (which is every existing bundle on the demo site).
    var is_textured_flag : u32 = 1u;

    let idx = gid.x;
    if idx < arrayLength(&surfels) {
        let s = surfels[idx];
        let xyz = vec3<f32>(s.x, s.y, s.z);

        let opa_shape = unpack2x16float(s.opacity_shape);
        opacity = opa_shape.x;
        shape   = opa_shape.y;

        // View clip (pos2d / w  ∈ [−1.2, 1.2]).
        let camspace = camera.view * vec4<f32>(xyz, 1.0);
        let pos2d    = camera.proj * camspace;
//#if WIDE_FRUSTUM
        // Portal: keep every surfel whose CENTRE projects anywhere Splat2DGS.pos can store
        // (±8191 px, ¼-px i16). The 1.2 test below drops big surfels (sky, clouds) whose
        // centre sits just off-screen although their footprint covers the view, so they
        // pop in and out as the camera moves; training (CUDA) never culls on the centre.
        let bounds   = (8000.0 / (0.5 * max(camera.viewport.x, camera.viewport.y))) * pos2d.w;
//#else
        let bounds   = 1.2 * pos2d.w;
//#endif
        let z_ndc    = pos2d.z / pos2d.w;

        if z_ndc > 0.0 && z_ndc < 1.0
            && pos2d.x >= -bounds && pos2d.x <= bounds
            && pos2d.y >= -bounds && pos2d.y <= bounds
            && opacity > 1.0 / 255.0 {


            let scale_packed = unpack2x16float(s.scale_rot[0]);
            let rot_wx       = unpack2x16float(s.scale_rot[1]);
            let rot_yz       = unpack2x16float(s.scale_rot[2]);

            let scaling = render_settings.gaussian_scaling;
            let sx = scale_packed.x * scaling;
            let sy = scale_packed.y * scaling;
            let rot = vec4<f32>(rot_wx.x, rot_wx.y, rot_yz.x, rot_yz.y);

            let R = quat_to_rotmat(rot);

            // \`--method mixed_3d\` aux split: bit 16 = is_textured (default 1 →
            // standard 2DGS path), bits 0..15 = scale_z (f16, exp'd from
            // log-space, ignored when textured). For mixed_3d untextured rows
            // we jump to the EWA branch at the bottom; textured rows take the
            // existing 2DGS path verbatim.
            is_textured_flag = (s.aux >> 16u) & 1u;
            let aux_lo16 = s.aux & 0xFFFFu;
            let sz       = unpack2x16float(aux_lo16).x * scaling;

            if is_textured_flag != 0u {

            // Backface cull (BFC, bit 2). 2DGS surfels lie in the local x-y
            // plane, so the local z-axis (R column 2) is the surface normal.
            // Cull when (pos − cam)·n > 0 — the normal points away from the
            // camera, i.e. we're looking at the back side.
            //
            // The win is downstream: a smaller alive list shrinks the sort
            // input by ~½ and the HW raster's vertex-instance count along
            // with it. We can't bail out of the surrounding \`if z_ndc > 0\`
            // block (would skip workgroupBarrier() and break compaction),
            // so backface lanes still finish the per-surfel math but never
            // set \`alive = 1u\`.
            //
            // Off by default — many 2DGS bakes train double-sided, so
            // enabling this can punch holes in surfaces. Verify visually
            // per-scene before relying on it.
            var alive_geom : bool = true;
            if (render_settings.accel_flags & 4u) != 0u {
                let camera_pos = camera.view_inv[3].xyz;
                if bfc_params.cos_thr <= 1.0 {
                    // Centroid-oriented BFC (training-matched): orient the
                    // disc normal outward via the cloud centroid, fade the
                    // surfel out as it turns away past the cos threshold.
                    // Required for --backface_cull-trained checkpoints —
                    // their back shell is unsupervised garbage without it.
                    //
                    // SMOOTH fade (±BFC_FADE_BAND around the threshold)
                    // instead of a binary kill: a hard per-view predicate
                    // pops silhouette surfels in/out as the camera orbits
                    // (the decision boundary sweeps across them). Fading
                    // opacity over the band is stateless and view-continuous
                    // — same surfel set, no temporal popping.
                    const BFC_FADE_BAND : f32 = 0.08;
                    var n = R[2];
                    let rel = xyz - vec3<f32>(bfc_params.cx, bfc_params.cy, bfc_params.cz);
                    if dot(n, rel) < 0.0 { n = -n; }
                    let vd = xyz - camera_pos;
                    let inv_len = inverseSqrt(max(dot(vd, vd), 1e-24));
                    let facing = dot(vd, n) * inv_len;
                    let fade = 1.0 - smoothstep(bfc_params.cos_thr - BFC_FADE_BAND,
                                                bfc_params.cos_thr + BFC_FADE_BAND,
                                                facing);
                    opacity = opacity * fade;
                    if opacity <= 1.0 / 255.0 {
                        alive_geom = false;
                    }
                } else if dot(R[2], xyz - camera_pos) > 0.0 {
                    // Legacy sign-naive test (pre-centroid bundles).
                    alive_geom = false;
                }
            }

            let L0 = R[0] * sx;
            let L1 = R[1] * sy;
            depth_u = (camera.view * vec4<f32>(L0, 0.0)).z;
            depth_v = (camera.view * vec4<f32>(L1, 0.0)).z;
            depth_center = camspace.z;

            // Build T = (splat2world)^T · world2ndc · ndc2pix. We undo the wgpu
            // Y-flip that's baked into camera.proj so the math runs in the
            // CUDA-standard Y-up NDC, then ndc2pix converts to pixel coords.
            let s2w_r0 = vec4<f32>(L0, 0.0);
            let s2w_r1 = vec4<f32>(L1, 0.0);
            let s2w_r2 = vec4<f32>(xyz, 1.0);

            var proj_raw = camera.proj;
            proj_raw[0].y = -proj_raw[0].y;
            proj_raw[1].y = -proj_raw[1].y;
            proj_raw[2].y = -proj_raw[2].y;
            proj_raw[3].y = -proj_raw[3].y;
            let M = transpose(proj_raw * camera.view);

            let I0 = vec4<f32>(dot(s2w_r0, M[0]), dot(s2w_r0, M[1]), dot(s2w_r0, M[2]), dot(s2w_r0, M[3]));
            let I1 = vec4<f32>(dot(s2w_r1, M[0]), dot(s2w_r1, M[1]), dot(s2w_r1, M[2]), dot(s2w_r1, M[3]));
            let I2 = vec4<f32>(dot(s2w_r2, M[0]), dot(s2w_r2, M[1]), dot(s2w_r2, M[2]), dot(s2w_r2, M[3]));

            let W = camera.viewport.x;
            let H = camera.viewport.y;
            let np0 = vec4<f32>(W / 2.0, 0.0, 0.0, (W - 1.0) / 2.0);
            let np1 = vec4<f32>(0.0, H / 2.0, 0.0, (H - 1.0) / 2.0);
            let np2 = vec4<f32>(0.0, 0.0, 0.0, 1.0);

            let T_mat = mat3x3<f32>(
                vec3<f32>(dot(I0, np0), dot(I1, np0), dot(I2, np0)),
                vec3<f32>(dot(I0, np1), dot(I1, np1), dot(I2, np1)),
                vec3<f32>(dot(I0, np2), dot(I1, np2), dot(I2, np2)),
            );

            // Per-Gauss cutoff selection. shape > 0 ⇒ BetaScaled bake (k=3
            // compact support). shape ≈ 0 ⇒ Gaussian-kernel bake — natural
            // cutoff is √(2·log(255·α)) ≈ 3.33 at α=1, much smaller at low α.
            // The OAC flag (bit 0) shrinks per-surfel based on actual opacity
            // (and shape for beta); when OAC is off we use a conservative
            // global value per kernel.
            var cutoff : f32;
            if (shape > 1e-6) {
                cutoff = 3.0;
                if (render_settings.accel_flags & 1u) != 0u {
                    cutoff = opacity_aware_cutoff(3.0, opacity, shape);
                }
            } else {
                // Gaussian. Default 3.5 covers the α≈1 tail with a small
                // margin; OAC tightens to the exact per-α iso-line.
                cutoff = 3.5;
                if (render_settings.accel_flags & 1u) != 0u {
                    cutoff = opacity_aware_cutoff_gaussian(opacity);
                }
            }
            // SnugBox first — numerically more robust for edge-on splats.
            // Fall back to the standard transmat compute_aabb only when
            // SnugBox itself is degenerate (det ≤ 0 or t ≤ 0), so we get
            // identical conservative behavior in the rare cases SnugBox
            // can't handle.
            var aabb = compute_aabb_snugbox(T_mat, cutoff);
            // SnugBox failing (det/A/E/t ≤ 0) means the conic is NOT an
            // ellipse: the cutoff disc crosses the camera plane and its
            // projection is unbounded. compute_aabb returns a garbage rect
            // for these (Vulkan port, room: 161 surfels, up to 765k px) and
            // every one of their fragments fails the denom/depth culls in
            // the fragment shader — a full-screen quad of pure discard work.
            // Drop them (bit-identical on 13/13 scenes). accel bit 9
            // (?hyp_legacy=1) restores the old fallback for an A/B.
            if aabb.z < 0.0 {
                aabb = compute_aabb(T_mat, cutoff);
                // Garbage-rect guard (default on; accel bit 9 = ?hyp_legacy=1
                // disables it). Measured offline on room cam 0: the SnugBox
                // failures are NOT hyperbolic surfels — they are 99 thin,
                // edge-on surfels (depth 3–10 m, ≤ 81 px) whose det is
                // ~1e-6·A·E, so fp32 cancellation ruins the centre / t test;
                // compute_aabb recovers them fine and they ARE visible (370 px,
                // α up to 0.99), so culling every failure costs real pixels.
                // Only a rect wider than twice the viewport can be the
                // camera-plane-crossing garbage (Vulkan port, room: up to
                // 765k px half-extent, every fragment failing the denom /
                // depth culls) — cull just those.
                if (render_settings.accel_flags & 512u) == 0u
                    && max(aabb.z, aabb.w) > 2.0 * max(camera.viewport.x, camera.viewport.y) {
                    aabb = vec4<f32>(0.0, 0.0, -1.0, -1.0);
                }
            }
            if alive_geom && aabb.z >= 0.0 {
                // CONIC OPTION A (precomputed): compute (u₀, v₀, J⁻¹, ∇p.z/p_c.z)
                // once here, so the fragment shader skips the ray-splat entirely.
                // Same math as the CUDA lean fork's LEAN_CONIC + exact rational
                // correction — matches production ray-splat to fp32 precision.
                // Repurposes the tu/tv/tw slots (36 B — same footprint):
                //   tu = (u0, v0, J⁻¹[0,0])
                //   tv = (J⁻¹[0,1], J⁻¹[1,0], J⁻¹[1,1])
                //   tw = (dwdxr, dwdyr, 0)
                let Tux = T_mat[0].x; let Tuy = T_mat[0].y; let Tuz = T_mat[0].z;
                let Tvx = T_mat[1].x; let Tvy = T_mat[1].y; let Tvz = T_mat[1].z;
                let Twx = T_mat[2].x; let Twy = T_mat[2].y; let Twz = T_mat[2].z;
                // Quantise the centre to the ¼-px grid Splat2DGS.pos stores
                // BEFORE deriving the CONIC, so (u₀, v₀, J⁻¹, ∇w) are exact for
                // the centre the fragment actually subtracts — zero systematic
                // shift, whatever the canvas width. (Extent stays relative to
                // the true centre; the vertex pads for the ≤ ⅛ px difference.)
                // accel bit 10 (?legacy=1) restores the unquantised centre.
                let legacy_pos = (render_settings.accel_flags & 1024u) != 0u;
                let cxc = select(round(aabb.x * 4.0) * 0.25, aabb.x, legacy_pos);
                let cyc = select(round(aabb.y * 4.0) * 0.25, aabb.y, legacy_pos);
                let k_c = vec3<f32>(cxc*Twx - Tux, cxc*Twy - Tuy, cxc*Twz - Tuz);
                let l_c = vec3<f32>(cyc*Twx - Tvx, cyc*Twy - Tvy, cyc*Twz - Tvz);
                let p_c = cross(k_c, l_c);
                var u0f: f32 = 1e10; var v0f: f32 = 1e10;   // "always cull" defaults
                var J00f: f32 = 0.0; var J01f: f32 = 0.0;
                var J10f: f32 = 0.0; var J11f: f32 = 0.0;
                var dwdxrf: f32 = 0.0; var dwdyrf: f32 = 0.0;
                if abs(p_c.z) > 1e-12 {
                    u0f = p_c.x / p_c.z;
                    v0f = p_c.y / p_c.z;
                    let w_c = Twx*u0f + Twy*v0f + Twz;
                    let det_kl = k_c.x*l_c.y - k_c.y*l_c.x;
                    if abs(det_kl) > 1e-12 && abs(w_c) > 1e-8 {
                        let scale = w_c / det_kl;
                        J00f = -l_c.y * scale;
                        J01f =  k_c.y * scale;
                        J10f =  l_c.x * scale;
                        J11f = -k_c.x * scale;
                        // ∂p.z/∂pix is CONSTANT (bilinear cross-terms cancel):
                        //   ∂p.z/∂pix.x = Tw.y·Tv.x - Tw.x·Tv.y
                        //   ∂p.z/∂pix.y = Tu.y·Tw.x - Tu.x·Tw.y
                        // Exact rational reconstruction:
                        //   u = u₀ + (J·Δpix).x / (1 + dwdxr·dx + dwdyr·dy)
                        let dpz_dpx = Twy*Tvx - Twx*Tvy;
                        let dpz_dpy = Tuy*Twx - Tux*Twy;
                        dwdxrf = dpz_dpx / p_c.z;
                        dwdyrf = dpz_dpy / p_c.z;
                    } else {
                        // Degenerate Jacobian → force cull (u₀ huge → rho3d always > cutoff).
                        u0f = 1e10; v0f = 1e10;
                    }
                }
                // accel bit 11 (?raysplat=1): hand the fragment the RAW transmat
                // rows instead of the conic expansion, so it can do the original
                // per-fragment ray/surfel intersection. Same math, but the
                // cancellation in \`pix*Tw - Tu\` is evaluated AT the fragment
                // rather than baked into u0/v0/J and extrapolated outward.
                if (render_settings.accel_flags & 4096u) != 0u {
                    // CENTRED (accel bit 12): hand over k_c / l_c / Tw so the
                    // fragment can form k = k_c + dx*Tw with dx only a few px.
                    tu = k_c;
                    tv = l_c;
                    tw = vec3<f32>(Twx, Twy, Twz);
                } else if (render_settings.accel_flags & 2048u) != 0u {
                    tu = T_mat[0];
                    tv = T_mat[1];
                    tw = T_mat[2];
                } else {
                    tu = vec3<f32>(u0f, v0f, J00f);
                    tv = vec3<f32>(J01f, J10f, J11f);
                    tw = vec3<f32>(dwdxrf, dwdyrf, 0.0);
                }
                center_pix = vec2<f32>(cxc, cyc);
                extent_pix = aabb.zw;

                // SPR (sub-pixel rejection): drop surfels whose tight ellipse
                // extent is well under one pixel AND whose opacity is low
                // enough that the lp-filtered contribution to neighbouring
                // pixels falls below 1/255. Conservative threshold (extent <
                // 0.25 px AND opa < 0.5) is safe for SV bakes — it catches
                // degenerate / numerically-vanishing surfels without killing
                // visible signal. Bit 1 of accel_flags gates it.
                let drop_subpixel = (render_settings.accel_flags & 2u) != 0u
                    && max(extent_pix.x, extent_pix.y) < 0.25
                    && opacity < 0.5;

                if !drop_subpixel {
                    let camera_pos = camera.view_inv[3].xyz;
                    view_dir = normalize(xyz - camera_pos);

                    // Sort key = front-to-back distance (back has smaller value
                    // with this CUDA convention; matches keksboter's bitcast).
                    let zfar = -camera.proj[3][2] / (camera.proj[2][2] - 1.0);
                    depth = zfar - pos2d.z;
                    alive = 1u;
                }
            }

            } else {
                // ===== \`--method mixed_3d\` UNTEXTURED — EWA 3D ellipsoid =====
                // Mirrors the CUDA bake-render branch I added at
                // diff_surfel_bake_render/cuda_rasterizer/forward.cu:617.
                // Color is per-Gauss SV (no atlas tap — untextured rows
                // carry a zero atlas rect by construction); geometry is
                // the FastGS EWA conic + opacity-aware Mahalanobis cutoff.
                // The fragment shader's untextured branch reads (a, b, c)
                // out of tu_x/y/z (transmat slot is repurposed).
                let camera_pos = camera.view_inv[3].xyz;
                view_dir = normalize(xyz - camera_pos);

                var conic : vec3<f32>;
                let aabb_e = compute_ewa_cov2d_pixel(
                    xyz,
                    vec3<f32>(sx, sy, sz),
                    rot,
                    camspace.xyz,
                    opacity,
                    &conic,
                );
                if aabb_e.z >= 0.0 {
                    tu = conic;
                    tv = vec3<f32>(0.0);
                    tw = vec3<f32>(0.0);
                    center_pix = aabb_e.xy;
                    extent_pix = aabb_e.zw;
                    depth_u = 0.0;
                    depth_v = 0.0;
                    depth_center = camspace.z;

                    // SPR (same threshold as textured path).
                    let drop_subpixel = (render_settings.accel_flags & 2u) != 0u
                        && max(extent_pix.x, extent_pix.y) < 0.25
                        && opacity < 0.5;
                    if !drop_subpixel {
                        let zfar = -camera.proj[3][2] / (camera.proj[2][2] - 1.0);
                        depth = zfar - pos2d.z;
                        alive = 1u;
                    }
                }
            }
        }
    }

    // Workgroup-local Hillis-Steele inclusive scan over \`alive\` flags.
    scan0[lid.x] = alive;
    workgroupBarrier();
    if (lid.x >=   1u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x -   1u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >=   2u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x -   2u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >=   4u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x -   4u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >=   8u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x -   8u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >=  16u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x -  16u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >=  32u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x -  32u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >=  64u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x -  64u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 128u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 128u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();

    // Single global atomicAdd per workgroup, broadcast the base offset.
    if (lid.x == 0u) {
        let group_cnt = scan0[WG_SIZE - 1u];
        if (group_cnt != 0u) {
            group_base = atomicAdd(&sort_infos.keys_size, group_cnt);
        }
    }
    workgroupBarrier();

    if (alive == 1u) {
        let store_idx = group_base + scan0[lid.x] - 1u;
        // \`--method mixed_3d\` untextured marker: top bit of gauss_id. The
        // fragment shader checks this to dispatch the EWA Mahalanobis path
        // vs the standard 2DGS ray-disk path. Bits 0..30 still hold the
        // original surfel index (we never have >2^31 Gausses) so any
        // downstream lookup that needs the real index can mask with
        // 0x7FFFFFFFu. SHSolver.idx (used for color eval) stays unmasked
        // — preprocess never sees the untex flag, just the raw index.
        let gauss_id_packed : u32 = idx | ((1u - is_textured_flag) << 31u);
        // We leave color_* and the atlas UV precompute fields (uv_base_*,
        // uv_scale_*, layer) zero — preprocess_2dgs.wgsl fills them per frame
        // per alive Gauss (color from SV/SB eval, UV precomp from atlas_rects
        // + atlas dims). Fragment shader gates the atlas fetch on
        // tex_params.atlas_enabled so zero UV precomp is harmless when the
        // bundle has no atlas.
        splats_2d[store_idx] = Splat2DGS(
            tu.x, tu.y, tu.z,
            tv.x, tv.y, tv.z,
            tw.x, tw.y, tw.z,
            opacity,
            // ¼-px fixed point (2×i16, exact grid), NOT f16: f16 has
            // 1 px spacing beyond x=1024 and 0.5 px beyond 512, which shifted
            // every splat on the right/bottom of a retina canvas by up to
            // 0.5 px (the CONIC u0/v0 are exact for the TRUE centre) and let
            // the vertex quad miss up to 0.5 px of the ellipse edge (measured:
            // 100 px/frame with α up to 0.18 on room). Range ±8191.75 px
            // covers canvases up to ~7400 px wide (cull keeps |centre| ≤ 1.1·viewport).
            select(pack_center(center_pix),
                   pack2x16float(center_pix),
                   (render_settings.accel_flags & 1024u) != 0u),
            pack2x16float(extent_pix),
            0u,
            pack2x16float(vec2<f32>(0.0, shape)),
            gauss_id_packed,
            depth_u,
            depth_v,
            depth_center,
            0.0, 0.0,      // uv_base_x, uv_base_y
            0.0, 0.0,      // uv_scale_x, uv_scale_y
            0u,            // layer
            0u,            // _pad
        );
        sh_solvers[store_idx] = SHSolver(
            pack2x16float(view_dir.xy),
            pack2x16float(vec2<f32>(view_dir.z, opacity)),
            idx,
        );
//#if STATIC_KEYS
        let static_key = static_keys[idx];
        sort_depths[store_idx]  = bitcast<u32>(select(depth, static_key, static_key > 0.0));
//#else
        sort_depths[store_idx]  = bitcast<u32>(depth);
//#endif
        sort_indices[store_idx] = store_idx;
    }
}
`,Qs=`// shader implementing gpu radix sort.

override PASS_ID = 0u;  // Pass ID for current radix sort pass
const WG_SIZE = 256u;
const WORDS_PER_WG   : u32 = WG_SIZE / 32u; // 8 for 256
override RS_RADIX_LOG2 = 8u;  // 8 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 256 entries into the radix table
override MAX_BIN_SIZE = RS_RADIX_SIZE * WORDS_PER_WG; // legacy (pre-padding)

struct GeneralInfo{
  keys_size : u32,  dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

@group(0) @binding(0) var<storage, read> infos: GeneralInfo;
@group(0) @binding(1) var<storage, read> digit_base : array<u32>;
@group(0) @binding(2) var<storage, read> keys_src : array<u32>;
@group(0) @binding(3) var<storage, read_write> keys_dst : array<u32>;
@group(0) @binding(4) var<storage, read> payload_src : array<u32>;
@group(0) @binding(5) var<storage, read_write> payload_dst : array<u32>;
@group(0) @binding(6) var<storage, read> wg_prefixes : array<u32>;
// --------------------------------------------------------------------------------------------------------------
// Pass 3: Scatter elements to final positions
// --------------------------------------------------------------------------------------------------------------
// var<workgroup> sh_digits : array<u32, WG_SIZE>;
// var<workgroup> bin_flags : array<atomic<u32>, MAX_BIN_SIZE>;

struct BinWords { words: array<atomic<u32>, WORDS_PER_WG + 1> }
var<workgroup> bin_flags : array<BinWords, RS_RADIX_SIZE>; // For each digit: 8 x 32-bit words bitmap

@compute @workgroup_size(WG_SIZE)
fn scatter_elements(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(num_workgroups) wgs: vec3<u32>) {
    // for (var i = lid.x; i < RS_RADIX_SIZE * WORDS_PER_WG; i += WG_SIZE) {
    //     let d = i / WORDS_PER_WG;
    //     let w = i % WORDS_PER_WG;
    //     atomicStore(&bin_flags[d].words[w], 0u);
    // }
    atomicStore(&bin_flags[lid.x].words[0], 0u);
    atomicStore(&bin_flags[lid.x].words[1], 0u);
    atomicStore(&bin_flags[lid.x].words[2], 0u);
    atomicStore(&bin_flags[lid.x].words[3], 0u);
    atomicStore(&bin_flags[lid.x].words[4], 0u);
    atomicStore(&bin_flags[lid.x].words[5], 0u);
    atomicStore(&bin_flags[lid.x].words[6], 0u);
    atomicStore(&bin_flags[lid.x].words[7], 0u);

    workgroupBarrier();

    let wg_base  = wid.x * WG_SIZE;
    let pos = wg_base + lid.x;

    var key: u32;
    var digit : u32;

    if (pos < infos.keys_size) {
        key = keys_src[pos];
        digit = extractBits(key, PASS_ID * RS_RADIX_LOG2, RS_RADIX_LOG2);
        // 3) Set bit in this digit's bitmap: one 32-thread word
        let myWord = lid.x >> 5u;                 // /32
        let myBit  = 1u << (lid.x & 31u);         // %32
        atomicOr(&bin_flags[digit].words[myWord], myBit);
    }
    workgroupBarrier();

    if (pos < infos.keys_size) {

        let myWord = lid.x >> 5u;                 // /32
        let myBit  = 1u << (lid.x & 31u);         // %32
        var rank_in_row : u32 = 0u;

        // Accumulate bit counts in preceding full words
        for (var w = 0u; w < myWord; w++) {
            let bits = atomicLoad(&bin_flags[digit].words[w]);
            rank_in_row += countOneBits(bits);
        }
        // Add bits below my bit in the current word
        let cur  = atomicLoad(&bin_flags[digit].words[myWord]);
        rank_in_row  += countOneBits(cur & (myBit - 1u));

        let global_pos =
            digit_base[digit] +
            wg_prefixes[digit * wgs.x + wid.x] +
            rank_in_row;

        // Write back key/payload
        keys_dst[global_pos]    = key;
        payload_dst[global_pos] = payload_src[pos];
    }
}
`,er=`// shader implementing gpu radix sort.

override PASS_ID = 0u;  // Pass ID for current radix sort pass
const WG_SIZE = 256u;
override RS_RADIX_LOG2 = 8u;  // 8 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 256 entries into the radix table

struct GeneralInfo{
  keys_size : u32,  dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

@group(0) @binding(0) var<storage, read> infos: GeneralInfo;
@group(0) @binding(1) var<storage, read> keys_src : array<u32>;
@group(0) @binding(2) var<storage, read_write> wg_histograms : array<u32>;
// --------------------------------------------------------------------------------------------------------------
// NEW MULTI-PASS RADIX SORT IMPLEMENTATION
// Pass 1: Local histogram generation per workgroup
// --------------------------------------------------------------------------------------------------------------
var<workgroup> local_histogram : array<atomic<u32>, RS_RADIX_SIZE>;
@compute @workgroup_size(WG_SIZE)
fn local_histogram_pass(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(num_workgroups) wgs: vec3<u32>) {
    // Zero local histogram
    if lid.x < RS_RADIX_SIZE {
        atomicStore(&local_histogram[lid.x], 0u);
    }
    workgroupBarrier();
    
    // Process elements and build local histogram + ranks
    let pos = wid.x * WG_SIZE + lid.x;
    if (pos < infos.keys_size) {
        let key = keys_src[pos];
        let digit = extractBits(key, PASS_ID * RS_RADIX_LOG2, RS_RADIX_LOG2);
        
        atomicAdd(&local_histogram[digit], 1u);
    }
    workgroupBarrier();
    
    // Write workgroup histogram to global memory
    if lid.x < RS_RADIX_SIZE {
        wg_histograms[wid.x + lid.x * wgs.x] = atomicLoad(&local_histogram[lid.x]);
    }
}
`,tr=`// ============================================================================
// 2-Level (Nested) Blelloch Prefix Scan Kernels (Radix Sort histogram phase)
// ----------------------------------------------------------------------------
// This file implements a hierarchical exclusive prefix sum over workgroup
// histograms laid out as [digit][workgroup]. We use a tile size equal to the
// workgroup size so each invocation owns exactly one element (no inner loops).
//
// Pipeline of passes for one radix digit plane (repeated for all digits):
//   (A) prefix_l0_tile_scan              : per-element scan in tiles of wg histograms
//       -> produces wg_prefixes (exclusive) + l0_sums (per tile totals)
//   (B) prefix_l1_tile_scan_on_l0_sums   : scan l0_sums producing l0_offsets + l1_sums
//   (C) prefix_scan_l1_sums              : scan l1_sums producing l1_offsets
//   (D) prefix_add_l1_to_l0_offsets      : add l1_offsets back to l0_offsets
//   (E) prefix_add_l0_to_elements        : add final l0_offsets to element prefixes
//   (F) compute_digit_base               : final scan across digits to get digit_base
//
// All scans are Blelloch (exclusive) using a shared workgroup array \`temp\`.
// We intentionally keep loops with compile-time bounds (WG_SIZE) for the
// compiler to unroll/optimize. No algorithmic / memory access pattern change
// has been made—only clarity improvements and richer commentary.
//
// NOTE: RS_RADIX_SIZE == WG_SIZE (256) here, allowing reuse of the same
// Blelloch logic for digit_base without an extra buffer.
// ============================================================================

override WG_SIZE        : u32 = 256u;  // 1 thread ↔ 1 element (no inner striding)

// Dispatch / tiling metadata passed from host.
// l0_t: number of L0 tiles      (ceil(dispatch_x / WG_SIZE))
// l1_t: number of L1 tiles over l0_t (ceil(l0_t / WG_SIZE))
struct GeneralInfo {
  keys_size  : u32,  // Total number of keys (for context)
  dispatch_x : u32,  // Number of workgroups along x for histogram source
  dispatch_y : u32,  // (digits) normally RS_RADIX_SIZE or batched digits
  dispatch_z : u32,
  l0_x       : u32,  // Mirrors grid dims for L0 (informational)
  l0_y       : u32,
  l0_z       : u32,
  l0_t       : u32,  // Number of L0 tiles per digit
  l1_x       : u32,  // Mirrors grid dims for L1 (informational)
  l1_y       : u32,
  l1_z       : u32,
  l1_t       : u32,  // Number of L1 tiles over L0 tiles per digit
};

// in/out buffers
@group(0) @binding(0) var<storage, read>        infos         : GeneralInfo;
@group(0) @binding(1) var<storage, read>        wg_histograms : array<u32>; // [digit][wg]
@group(0) @binding(2) var<storage, read_write>  wg_prefixes   : array<u32>; // [digit][wg] (exclusive prefix for each digit)
@group(0) @binding(3) var<storage, read_write>  l0_sums       : array<u32>; // [digit][t0]   per L0 tile total
@group(0) @binding(4) var<storage, read_write>  l0_offsets    : array<u32>; // [digit][t0]   exclusive scan over l0_sums
@group(0) @binding(5) var<storage, read_write>  l1_sums       : array<u32>; // [digit][t1]   per L1 tile total (over l0_sums)
@group(0) @binding(6) var<storage, read_write>  l1_offsets    : array<u32>; // [digit][t1]   exclusive scan over l1_sums
@group(0) @binding(7) var<storage, read_write>  digit_base    : array<u32>; // length RS_RADIX_SIZE exclusive base per digit

fn idx_hist(d: u32, wg: u32) -> u32 { return d * infos.dispatch_x + wg; }
fn idx_l0 (d: u32, t0: u32) -> u32 { return d * infos.l0_t + t0; }
fn idx_l1 (d: u32, t1: u32) -> u32 { return d * infos.l1_t + t1; }
// Shared scratch used by all kernels (size == WG_SIZE). For digit_base the
// size matches RS_RADIX_SIZE.
var<workgroup> temp : array<u32, WG_SIZE>;

// ---------------------------------------------------------------------------
// Reusable Blelloch scan helpers (tile-sized, operating on \`temp\`).
// We split into up-sweep (returning total) and down-sweep (producing exclusive)
// so callers needing the tile total (for hierarchical sums) can read it.
// These operate over the full WG_SIZE; inactive lanes should have been
// initialized with 0 beforehand.
// ---------------------------------------------------------------------------
// NOTE: Manually unrolled for WG_SIZE == 256u (log2=8). If WG_SIZE changes,
// regenerate this sequence (offsets: 1,2,4,8,16,32,64,128).
fn blelloch_up_sweep_tile(tid: u32) -> u32 {
  let ui1 = (tid + 1u) * 2u * 1u - 1u;   if (ui1   < WG_SIZE) { temp[ui1]   += temp[ui1 - 1u]; }     workgroupBarrier();
  let ui2 = (tid + 1u) * 2u * 2u - 1u;   if (ui2   < WG_SIZE) { temp[ui2]   += temp[ui2 - 2u]; }     workgroupBarrier();
  let ui4 = (tid + 1u) * 2u * 4u - 1u;   if (ui4   < WG_SIZE) { temp[ui4]   += temp[ui4 - 4u]; }     workgroupBarrier();
  let ui8 = (tid + 1u) * 2u * 8u - 1u;   if (ui8   < WG_SIZE) { temp[ui8]   += temp[ui8 - 8u]; }     workgroupBarrier();
  let ui16 = (tid + 1u) * 2u * 16u - 1u; if (ui16  < WG_SIZE) { temp[ui16]  += temp[ui16 - 16u]; }   workgroupBarrier();
  let ui32 = (tid + 1u) * 2u * 32u - 1u; if (ui32  < WG_SIZE) { temp[ui32]  += temp[ui32 - 32u]; }   workgroupBarrier();
  let ui64 = (tid + 1u) * 2u * 64u - 1u; if (ui64  < WG_SIZE) { temp[ui64]  += temp[ui64 - 64u]; }   workgroupBarrier();
  let ui128 = (tid + 1u) * 2u * 128u - 1u; if (ui128 < WG_SIZE) { temp[ui128] += temp[ui128 - 128u]; } workgroupBarrier();
  return temp[WG_SIZE - 1u]; // inclusive total
}

fn blelloch_down_sweep_tile_exclusive(tid: u32) {
  if (tid == 0u) { temp[WG_SIZE - 1u] = 0u; }
  workgroupBarrier();
  let di128 = (tid + 1u) * 2u * 128u - 1u; if (di128 < WG_SIZE) { let t = temp[di128 - 128u]; temp[di128 - 128u] = temp[di128]; temp[di128] += t; } workgroupBarrier();
  let di64  = (tid + 1u) * 2u * 64u  - 1u; if (di64  < WG_SIZE) { let t = temp[di64  - 64u];  temp[di64  - 64u]  = temp[di64];  temp[di64]  += t; } workgroupBarrier();
  let di32  = (tid + 1u) * 2u * 32u  - 1u; if (di32  < WG_SIZE) { let t = temp[di32  - 32u];  temp[di32  - 32u]  = temp[di32];  temp[di32]  += t; } workgroupBarrier();
  let di16  = (tid + 1u) * 2u * 16u  - 1u; if (di16  < WG_SIZE) { let t = temp[di16  - 16u];  temp[di16  - 16u]  = temp[di16];  temp[di16]  += t; } workgroupBarrier();
  let di8   = (tid + 1u) * 2u * 8u   - 1u; if (di8   < WG_SIZE) { let t = temp[di8   - 8u];   temp[di8   - 8u]   = temp[di8];   temp[di8]   += t; } workgroupBarrier();
  let di4   = (tid + 1u) * 2u * 4u   - 1u; if (di4   < WG_SIZE) { let t = temp[di4   - 4u];   temp[di4   - 4u]   = temp[di4];   temp[di4]   += t; } workgroupBarrier();
  let di2   = (tid + 1u) * 2u * 2u   - 1u; if (di2   < WG_SIZE) { let t = temp[di2   - 2u];   temp[di2   - 2u]   = temp[di2];   temp[di2]   += t; } workgroupBarrier();
  let di1   = (tid + 1u) * 2u * 1u   - 1u; if (di1   < WG_SIZE) { let t = temp[di1   - 1u];   temp[di1   - 1u]   = temp[di1];   temp[di1]   += t; } workgroupBarrier();
}

// Separate helpers for digit_base scan (RS_RADIX_SIZE may conceptually differ
// though equal here). Kept distinct to avoid introducing an extra branch.
fn blelloch_up_sweep_digits(d: u32) {
  // Unrolled for RS_RADIX_SIZE == 256u
  let ui1 = (d + 1u) * 2u * 1u - 1u;   if (ui1   < WG_SIZE) { temp[ui1]   += temp[ui1 - 1u]; }     workgroupBarrier();
  let ui2 = (d + 1u) * 2u * 2u - 1u;   if (ui2   < WG_SIZE) { temp[ui2]   += temp[ui2 - 2u]; }     workgroupBarrier();
  let ui4 = (d + 1u) * 2u * 4u - 1u;   if (ui4   < WG_SIZE) { temp[ui4]   += temp[ui4 - 4u]; }     workgroupBarrier();
  let ui8 = (d + 1u) * 2u * 8u - 1u;   if (ui8   < WG_SIZE) { temp[ui8]   += temp[ui8 - 8u]; }     workgroupBarrier();
  let ui16 = (d + 1u) * 2u * 16u - 1u; if (ui16  < WG_SIZE) { temp[ui16]  += temp[ui16 - 16u]; }   workgroupBarrier();
  let ui32 = (d + 1u) * 2u * 32u - 1u; if (ui32  < WG_SIZE) { temp[ui32]  += temp[ui32 - 32u]; }   workgroupBarrier();
  let ui64 = (d + 1u) * 2u * 64u - 1u; if (ui64  < WG_SIZE) { temp[ui64]  += temp[ui64 - 64u]; }   workgroupBarrier();
  let ui128 = (d + 1u) * 2u * 128u - 1u; if (ui128 < WG_SIZE) { temp[ui128] += temp[ui128 - 128u]; } workgroupBarrier();
}

fn blelloch_down_sweep_digits(d: u32) {
  if (d == 0u) { temp[WG_SIZE - 1u] = 0u; }
  workgroupBarrier();
  let di128 = (d + 1u) * 2u * 128u - 1u; if (di128 < WG_SIZE) { let t = temp[di128 - 128u]; temp[di128 - 128u] = temp[di128]; temp[di128] += t; } workgroupBarrier();
  let di64  = (d + 1u) * 2u * 64u  - 1u; if (di64  < WG_SIZE) { let t = temp[di64  - 64u];  temp[di64  - 64u]  = temp[di64];  temp[di64]  += t; } workgroupBarrier();
  let di32  = (d + 1u) * 2u * 32u  - 1u; if (di32  < WG_SIZE) { let t = temp[di32  - 32u];  temp[di32  - 32u]  = temp[di32];  temp[di32]  += t; } workgroupBarrier();
  let di16  = (d + 1u) * 2u * 16u  - 1u; if (di16  < WG_SIZE) { let t = temp[di16  - 16u];  temp[di16  - 16u]  = temp[di16];  temp[di16]  += t; } workgroupBarrier();
  let di8   = (d + 1u) * 2u * 8u   - 1u; if (di8   < WG_SIZE) { let t = temp[di8   - 8u];   temp[di8   - 8u]   = temp[di8];   temp[di8]   += t; } workgroupBarrier();
  let di4   = (d + 1u) * 2u * 4u   - 1u; if (di4   < WG_SIZE) { let t = temp[di4   - 4u];   temp[di4   - 4u]   = temp[di4];   temp[di4]   += t; } workgroupBarrier();
  let di2   = (d + 1u) * 2u * 2u   - 1u; if (di2   < WG_SIZE) { let t = temp[di2   - 2u];   temp[di2   - 2u]   = temp[di2];   temp[di2]   += t; } workgroupBarrier();
  let di1   = (d + 1u) * 2u * 1u   - 1u; if (di1   < WG_SIZE) { let t = temp[di1   - 1u];   temp[di1   - 1u]   = temp[di1];   temp[di1]   += t; } workgroupBarrier();
}

// ---------------------------------------------------------------------------
// (A) L0 pass
// Per-digit tile scan over wg_histograms -> produces:
//   - wg_prefixes (exclusive per element inside each digit plane)
//   - l0_sums     (tile totals for hierarchical accumulation)
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_l0_tile_scan(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t0, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t0    = wid.x;
  let digit = wid.y;

  let start = t0 * WG_SIZE;
  // Number of active (in-bounds) lanes for this tile along dispatch_x.
  let valid = select(0u, min(WG_SIZE, infos.dispatch_x - start), infos.dispatch_x > start);

  let tid = lid.x; // lane id

  var v : u32 = 0u;
  if (tid < valid) { v = wg_histograms[idx_hist(digit, start + tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  // Blelloch scan over tile
  let total = blelloch_up_sweep_tile(tid);
  blelloch_down_sweep_tile_exclusive(tid);

  if (tid < valid) { wg_prefixes[idx_hist(digit, start + tid)] = temp[tid]; }
  if (tid == 0u)    { l0_sums[idx_l0(digit, t0)] = select(0u, total, valid > 0u); }
}

// ---------------------------------------------------------------------------
// (B) L1 pass over l0_sums
// Scan l0_sums in tiles to produce l0_offsets (exclusive within tile) and
// l1_sums (totals per L1 tile). This is structurally identical to (A) but the
// source array is l0_sums and destination for element-level offsets is l0_offsets.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_l1_tile_scan_on_l0_sums(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t1, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t1    = wid.x;
  let digit = wid.y;

  let t0_len = infos.l0_t;
  let start  = t1 * WG_SIZE;
  let valid  = select(0u, min(WG_SIZE, t0_len - start), t0_len > start);

  let tid = lid.x;

  var v : u32 = 0u;
  if (tid < valid) { v = l0_sums[idx_l0(digit, start + tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  let total = blelloch_up_sweep_tile(tid);
  blelloch_down_sweep_tile_exclusive(tid);

  if (tid < valid) { l0_offsets[idx_l0(digit, start + tid)] = temp[tid]; }
  if (tid == 0u)    { l1_sums[idx_l1(digit, t1)] = select(0u, total, valid > 0u); }
}

// ---------------------------------------------------------------------------
// (C) Scan l1_sums -> l1_offsets (single workgroup per digit)
// Assumes infos.l1_t <= WG_SIZE. Add further level if this can be exceeded.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_scan_l1_sums(
  @builtin(workgroup_id)        wid : vec3<u32>,   // y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let digit = wid.y;
  let T = infos.l1_t;

  let tid = lid.x;

  var v : u32 = 0u;
  if (tid < T) { v = l1_sums[idx_l1(digit, tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  blelloch_up_sweep_tile(tid); // total not needed here
  blelloch_down_sweep_tile_exclusive(tid);
  if (tid < T) { l1_offsets[idx_l1(digit, tid)] = temp[tid]; }
}

// ---------------------------------------------------------------------------
// (D) Add l1_offsets into l0_offsets for each corresponding L0 tile.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_add_l1_to_l0_offsets(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t1, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t1    = wid.x;
  let digit = wid.y;

  let t0_len = infos.l0_t;
  let start  = t1 * WG_SIZE;
  let valid  = select(0u, min(WG_SIZE, t0_len - start), t0_len > start);
  let add    = l1_offsets[idx_l1(digit, t1)];

  let tid = lid.x;
  if (tid < valid) {
    let idx = idx_l0(digit, start + tid);
    l0_offsets[idx] += add;
  }
}

// ---------------------------------------------------------------------------
// (E) Add final l0_offsets back to element-level wg_prefixes.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_add_l0_to_elements(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t0, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t0    = wid.x;
  let digit = wid.y;

  let start = t0 * WG_SIZE;
  let valid = select(0u, min(WG_SIZE, infos.dispatch_x - start), infos.dispatch_x > start);
  let add   = l0_offsets[idx_l0(digit, t0)];

  let tid = lid.x;
  if (tid < valid) {
    let idx = idx_hist(digit, start + tid);
    wg_prefixes[idx] += add;
  }
}

@compute @workgroup_size(WG_SIZE)
fn compute_digit_base(
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let d = lid.x; // digit 0..255

  // Gather total count for digit d into temp[d]
  var tot : u32 = 0u;
  if (infos.dispatch_x > 0u) {
    let last = infos.dispatch_x - 1u;
    let idx  = idx_hist(d, last);
    tot = wg_prefixes[idx] + wg_histograms[idx];
  }
  temp[d] = tot;
  workgroupBarrier();

  // Blelloch exclusive scan over digits -------------------------------
  blelloch_up_sweep_digits(d);
  blelloch_down_sweep_digits(d);
  // Exclusive result -> digit_base
  digit_base[d] = temp[d];
}

@compute @workgroup_size(WG_SIZE)
fn compute_digit_base1(
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let d = lid.x; // digit 0..255 (one lane per digit)
  // Gather total count for digit d (tile total for that digit plane)
  let idx  = idx_hist(d, infos.dispatch_x - 1u);
  temp[d] = wg_prefixes[idx] + wg_histograms[idx];
  workgroupBarrier();
  // Hillis-Steele inclusive scan (log2(256)=8 iterations)
  // offset 1
  let add1   = select(0u, temp[d - 1u],   d >= 1u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add1,   d >= 1u);   workgroupBarrier();
  // offset 2
  let add2   = select(0u, temp[d - 2u],   d >= 2u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add2,   d >= 2u);   workgroupBarrier();
  // offset 4
  let add4   = select(0u, temp[d - 4u],   d >= 4u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add4,   d >= 4u);   workgroupBarrier();
  // offset 8
  let add8   = select(0u, temp[d - 8u],   d >= 8u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add8,   d >= 8u);   workgroupBarrier();
  // offset 16
  let add16  = select(0u, temp[d - 16u],  d >= 16u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add16,  d >= 16u);  workgroupBarrier();
  // offset 32
  let add32  = select(0u, temp[d - 32u],  d >= 32u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add32,  d >= 32u);  workgroupBarrier();
  // offset 64
  let add64  = select(0u, temp[d - 64u],  d >= 64u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add64,  d >= 64u);  workgroupBarrier();
  // offset 128
  let add128 = select(0u, temp[d - 128u], d >= 128u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add128, d >= 128u); workgroupBarrier();
  // Convert inclusive -> exclusive: shift right by one (digit 0 -> 0)
  digit_base[d] = select(0u, temp[d - 1u], d > 0u);
}`,is=32,an=1,on=2,Fn=4,Wn=512,Cn=1024,Nn=2048,qn=4096,nr=0,gt=new ArrayBuffer(is),He={canvas_size:new Uint32Array(gt,0,2),accel_flags:new Uint32Array(gt,8,1),feature_mode:new Uint32Array(gt,12,1),gaussian_scaling:new Float32Array(gt,16,1),sh_bias:new Float32Array(gt,20,1),color_K:new Uint32Array(gt,24,1),walltime:new Float32Array(gt,28,1)};function sr(n){He.canvas_size[0]=n.width>>>0,He.canvas_size[1]=n.height>>>0,He.accel_flags[0]=(n.accel_flags??an|on)>>>0,He.feature_mode[0]=(n.feature_mode??nr)>>>0,He.gaussian_scaling[0]=n.gaussian_scaling??1,He.sh_bias[0]=n.sh_bias??.5,He.color_K[0]=(n.color_K??0)>>>0,He.walltime[0]=n.walltime??0}function as(n,a){n.queue.writeBuffer(a,0,gt)}function en(n,a,f){f&&n&&a&&as(n,a)}function $n(n,a,f,v,m=!0){He.canvas_size[0]=n>>>0,He.canvas_size[1]=a>>>0,en(f??null,v??null,m)}function rr(n,a,f,v=!0){He.gaussian_scaling[0]=n,en(a??null,f??null,v)}function ir(n,a,f,v=!0){He.sh_bias[0]=n,en(a??null,f??null,v)}function ar(n,a,f,v=!0){let m=He.accel_flags[0];n.oac!==void 0&&(m=n.oac?m|an:m&~an),n.spr!==void 0&&(m=n.spr?m|on:m&~on),n.bfc!==void 0&&(m=n.bfc?m|Fn:m&~Fn),n.hypLegacy!==void 0&&(m=n.hypLegacy?m|Wn:m&~Wn),n.centred!==void 0&&(m=n.centred?m|qn:m&~qn),n.raysplat!==void 0&&(m=n.raysplat?m|Nn:m&~Nn),n.legacyPos!==void 0&&(m=n.legacyPos?m|Cn:m&~Cn),He.accel_flags[0]=m>>>0,en(a??null,f??null,v)}const or=256;function sn(n,a){const f=[],v=[];let m=!0;for(const y of n.split(`
`)){const A=y.trim();let E;if((E=/^\/\/#if\s+(\w+)\s*$/.exec(A))!==null){const k=!!a[E[1]];v.push({parent:m,taken:k}),m=m&&k;continue}if(/^\/\/#else\s*$/.test(A)){const k=v[v.length-1];if(k===void 0)throw new Error("preprocessWGSL: #else without #if");m=k.parent&&!k.taken;continue}if(/^\/\/#endif\s*$/.test(A)){const k=v.pop();if(k===void 0)throw new Error("preprocessWGSL: #endif without #if");m=k.parent;continue}m&&f.push(y)}if(v.length!==0)throw new Error("preprocessWGSL: unterminated #if");return f.join(`
`)}const cr=is,lr=8,ur=96,dr=12,gn=8,dt=1<<gn,mt=256,Vt=32/gn,fr=0,Zn=Vt&1;function Yn(n,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:n*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:n*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function pr(n,a){const f=n.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),v=n.createPipelineLayout({bindGroupLayouts:[f]}),m=y=>n.createComputePipeline({layout:v,compute:{module:a,entryPoint:y,constants:{WG_SIZE:mt}}});return{l0TileScan:m("prefix_l0_tile_scan"),l1TileScanOnL0:m("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:m("prefix_scan_l1_sums"),addL1ToL0:m("prefix_add_l1_to_l0_offsets"),addL0ToElems:m("prefix_add_l0_to_elements"),computeDigitBase:m("compute_digit_base"),prefixBindGroupLayout:f}}function _r(n,a,f){const v=n.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),m=n.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),y=n.createPipelineLayout({bindGroupLayouts:[v]}),A=n.createPipelineLayout({bindGroupLayouts:[m]}),E=[];for(let k=0;k<Vt;k++){const z={PASS_ID:k+fr,RS_RADIX_LOG2:gn,RS_RADIX_SIZE:dt};E.push({localHistogram:n.createComputePipeline({layout:y,compute:{module:a,entryPoint:"local_histogram_pass",constants:z}}),scatterElements:n.createComputePipeline({layout:A,compute:{module:f,entryPoint:"scatter_elements",constants:z}})})}return{passes:E,localHistogramBindGroupLayout:v,scatterBindGroupLayout:m}}function hr(n){const a=n.createShaderModule({label:"local histogram",code:er}),f=n.createShaderModule({label:"scatter",code:Qs}),v=n.createShaderModule({label:"blelloch prefix",code:tr}),m=pr(n,v),y=_r(n,a,f);return{localHistogramBindGroupLayout:y.localHistogramBindGroupLayout,scatterBindGroupLayout:y.scatterBindGroupLayout,passes:y.passes,hierarchicalBlelloch:m}}function Kn(n){const a=n.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=a.createView({dimension:"2d-array"}),v=n.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),m=n.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),y=n.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});n.queue.writeBuffer(y,0,new ArrayBuffer(32));const A={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:f,sampler:v,rectsBuffer:m,texParamsBuffer:y,meta:A}}class gr{constructor(a,f,v,m,y,A=null,E={}){G(this,"device");G(this,"pc");G(this,"presentationFormat");G(this,"camera_buffer");G(this,"render_settings_buffer");G(this,"draw_indirect_buffer");G(this,"splat_2d_buffer");G(this,"querySet");G(this,"resolveBuffer");G(this,"resultBuffer");G(this,"queriesPerFrame",lr);G(this,"queryCapacityFrames",200);G(this,"sort_prefixBindGroup");G(this,"sort_pipelines");G(this,"sort_localHistogramBindGroups");G(this,"sort_scatterBindGroups");G(this,"lastFrame",0);G(this,"frameCount",0);G(this,"preprocessPipeline");G(this,"cullPipeline");G(this,"renderPipeline");G(this,"indirectPipeline");G(this,"renderShaderModule");G(this,"betaKernel",1);G(this,"fetchById");G(this,"octBound");G(this,"acc16");G(this,"accTexture",null);G(this,"accView",null);G(this,"accW",0);G(this,"accH",0);G(this,"legacyRenderPipeline",null);G(this,"varyingsPipeline",null);G(this,"legacyRenderer",!1);G(this,"accResolvePipeline",null);G(this,"accResolveBgl",null);G(this,"accResolveBindGroup",null);G(this,"renderSettingsBgl");G(this,"preprocessBgl2");G(this,"renderSplatsBgl");G(this,"atlasBgl");G(this,"sort_info_buffer");G(this,"sort_ping_pong");G(this,"crsBg");G(this,"gsBg");G(this,"cullBg2");G(this,"preprocessBg1");G(this,"renderSplatsBindGroup");G(this,"renderSettingsBindGroup");G(this,"atlasBindGroup");G(this,"indirectBindGroup");G(this,"sh_solvers_buffer");G(this,"bfcParamsBuffer");G(this,"bfcBindGroupLayout");G(this,"bfcBindGroup");G(this,"staticSortKeys",null);G(this,"wideFrustum",!1);G(this,"staticKeysBuffer",null);G(this,"bgColor",[0,0,0,0]);G(this,"showPerfDialogNext",!1);G(this,"requestReorderNextFrame",!1);G(this,"reorderInFlight",!1);G(this,"downloadOnceNextRead",!1);G(this,"downloadOnceFileName","fps_metrics");G(this,"allFrameTimes",[]);G(this,"lastStageBreakdownMs",null);G(this,"timeQueryEnabled");G(this,"atlas");G(this,"atlasParamsBuffer");G(this,"_atlasEnabled",!0);G(this,"mipLodBias",1);G(this,"_mipMode",1);this.fetchById=E.fetchById??!0,this.staticSortKeys=E.staticSortKeys??null,this.wideFrustum=E.wideFrustum??!1,this.octBound=E.octBound??!1,this.acc16=E.acc16??!1,Qe(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const k=y.includes("timestamp-query");this.timeQueryEnabled=k,k&&Qe("⏰ using timestamp-query"),this.pc=a,this.device=f,this.presentationFormat=v,this.camera_buffer=m,this.atlas=A??Kn(f),this.atlasParamsBuffer=f.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),f.addEventListener("uncapturederror",xe=>{console.error("A WebGPU error was not captured:",xe.error)}),this._setupTimestampQueries(),this._setupBuffers();const z=(Math.floor((this.pc.num_points+mt-1)/mt)+1)*mt,O=Math.ceil(z/mt);console.log(`keys count adjusted: ${z}`),console.log(`key size: ${this.pc.num_points}`);const Z=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=hr(f);const B=[Yn(z,f),Yn(z,f)],I=f.createBuffer({label:"workgroup histograms",size:O*dt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),W=f.createBuffer({label:"workgroup prefixes",size:O*dt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),re=f.createBuffer({label:"digit base",size:dt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=Math.ceil(O/mt),H=Math.ceil(q/mt),X=f.createBuffer({label:"prefix l0 sums",size:q*dt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),C=f.createBuffer({label:"prefix l0 offsets",size:q*dt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Q=f.createBuffer({label:"prefix l1 sums",size:H*dt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ee=f.createBuffer({label:"prefix l1 offsets",size:H*dt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:I}},{binding:2,resource:{buffer:W}},{binding:3,resource:{buffer:X}},{binding:4,resource:{buffer:C}},{binding:5,resource:{buffer:Q}},{binding:6,resource:{buffer:ee}},{binding:7,resource:{buffer:re}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:B[0].sort_depths_buffer}},{binding:2,resource:{buffer:I}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:B[1].sort_depths_buffer}},{binding:2,resource:{buffer:I}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:re}},{binding:2,resource:{buffer:B[0].sort_depths_buffer}},{binding:3,resource:{buffer:B[1].sort_depths_buffer}},{binding:4,resource:{buffer:B[0].sort_indices_buffer}},{binding:5,resource:{buffer:B[1].sort_indices_buffer}},{binding:6,resource:{buffer:W}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:re}},{binding:2,resource:{buffer:B[1].sort_depths_buffer}},{binding:3,resource:{buffer:B[0].sort_depths_buffer}},{binding:4,resource:{buffer:B[1].sort_indices_buffer}},{binding:5,resource:{buffer:B[0].sort_indices_buffer}},{binding:6,resource:{buffer:W}}]})],this.sort_info_buffer=Z,this.sort_ping_pong=B;const Y=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),V=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),N=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),$=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:Y,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:V,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:N,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=$,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:$,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const le=this.device.createShaderModule({code:Js});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:le,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const P=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],F=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:Bt(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),P.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),F.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:P}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:F});const te=this.device.createShaderModule({code:sn(Xs,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[Y,V,N,this.bfcBindGroupLayout]}),compute:{module:te,entryPoint:"surfel_cull"}});const ce=this.device.createShaderModule({code:js});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Y,$]}),compute:{module:ce,entryPoint:"preprocess"}});const K=this.device.createShaderModule({label:"render_2dgs",code:sn(On,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});K.getCompilationInfo().then(xe=>{xe.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),xe.messages.forEach(Se=>{(Se.type==="error"?console.error:Se.type==="warning"?console.warn:console.log)(`${Se.type} (line ${Se.lineNum}:${Se.linePos}): ${Se.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const ie=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),ae=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,J=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:ae,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),we=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),fe=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ie,J,we]}),vertex:{module:K,entryPoint:"vs_main"},fragment:{module:K,entryPoint:"fs_main",constants:{BETA_KERNEL:fe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const be=(xe,Se,oe)=>{const _e=this.device.createShaderModule({label:`render_2dgs (${xe})`,code:sn(On,{FETCH_BY_ID:Se,OCT:oe})});return this.device.createRenderPipeline({label:`render_2dgs_${xe}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[ie,J,we]}),vertex:{module:_e,entryPoint:"vs_main"},fragment:{module:_e,entryPoint:"fs_main",constants:{BETA_KERNEL:fe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=be("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?be("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(xe=>{xe?console.error("[render_2dgs] pipeline create validation error:",xe.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:ie,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:J,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Zn].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:we,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=K,this.betaKernel=fe,this.renderSettingsBgl=ie,this.renderSplatsBgl=J,this.atlasBgl=we}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(a,f){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,f[0],f[1],f[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var m;const a=new ArrayBuffer(32),f=new Uint32Array(a),v=new Float32Array(a);f[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,f[1]=this.atlas.meta.layer_h|0,v[2]=this.atlas.meta.uv_extent||0,f[3]=this.atlas.meta.probe_mode|0||0,f[4]=this._mipMode!==0?Math.max(1,((m=this.atlas.meta.mip_bytes)==null?void 0:m.length)??1):1,v[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureAccResources(a,f){var v;if(this.accResolvePipeline===null){const m=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,y=this.device.createShaderModule({label:"acc16_resolve",code:m});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:y,entryPoint:"vs_main"},fragment:{module:y,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===a&&this.accH===f||((v=this.accTexture)==null||v.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,a),height:Math.max(1,f),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=a,this.accH=f)}setAtlas(a){this.atlas=a??Kn(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&$t(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=a,$t(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a,this._mipMode))}setMipLodBias(a){this.mipLodBias=a,this.writeAtlasParams()}setFetchById(a){a!==this.fetchById&&(this.fetchById=a,Qe(`[render_2dgs] fragment inputs: ${a?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(a){if(a===this.legacyRenderer)return;this.legacyRenderer=a,ar({legacyPos:a,hypLegacy:a},this.device,this.render_settings_buffer);const f=!a&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([f])),Qe(`[render_2dgs] renderer: ${a?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(a){this.atlas.meta.format!==4294967295&&(this._mipMode=a?1:0,this.writeAtlasParams(),$t(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var a;return(((a=this.atlas.meta.mip_bytes)==null?void 0:a.length)??1)>1}async debugReadSortedIndices(a=30){const f=Math.max(0,Math.min(a,this.pc.num_points)),v=f*Uint32Array.BYTES_PER_ELEMENT;if(v===0){console.log("[DEBUG] No indices to read.");return}const m=this.device.createBuffer({size:v,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),y=this.device.createCommandEncoder();y.copyBufferToBuffer(this.sort_ping_pong[Zn].sort_indices_buffer,0,m,0,v),this.device.queue.submit([y.finish()]),await m.mapAsync(GPUMapMode.READ);const A=new Uint32Array(m.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(A)),m.unmap()}frame(a,f,v=!0){const y=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,A=v&&this.timeQueryEnabled;{a.clearBuffer(this.sort_info_buffer,0,4);const E={label:"cull"};A&&(E.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:y+0,endOfPassWriteIndex:y+1});const k=a.beginComputePass(E);k.setPipeline(this.cullPipeline),k.setBindGroup(0,this.crsBg),k.setBindGroup(1,this.gsBg),k.setBindGroup(2,this.cullBg2),k.setBindGroup(3,this.bfcBindGroup);const z=Math.ceil(this.pc.num_points/or);k.dispatchWorkgroups(z,1,1),k.end()}{const E=a.beginComputePass({label:"calculate indirect dispatch"});E.setPipeline(this.indirectPipeline),E.setBindGroup(0,this.indirectBindGroup),E.dispatchWorkgroups(1,1,1),E.end()}{const E={label:"preprocess"};A&&(E.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:y+2,endOfPassWriteIndex:y+3});const k=a.beginComputePass(E);k.setPipeline(this.preprocessPipeline),k.setBindGroup(0,this.crsBg),k.setBindGroup(1,this.preprocessBg1),k.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),k.end()}for(let E=0;E<Vt;E++){const k=E&1,z=this.sort_pipelines.passes[E],O=this.sort_localHistogramBindGroups[k],Z=this.sort_scatterBindGroups[k];{const B={label:`upsweep_round${E}`};A&&E==0&&(B.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:y+4});const I=a.beginComputePass(B);I.setPipeline(z.localHistogram),I.setBindGroup(0,O),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),I.end()}{const B=a.beginComputePass({label:`prefix_round${E} - l0TileScan`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),B.end()}{const B=a.beginComputePass({label:`prefix_round${E} - l1TileScanOnL0`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),B.end()}{const B=a.beginComputePass({label:`prefix_round${E} - l1ScanSums`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroups(1,dt,1),B.end()}{const B=a.beginComputePass({label:`prefix_round${E} - addL1ToL0`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),B.end()}{const B=a.beginComputePass({label:`prefix_round${E} - addL0ToElems`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),B.end()}{const B=a.beginComputePass({label:`prefix_round${E} - computeDigitBase`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroups(1,1,1),B.end()}{const B={label:`scatter_round${E}`};A&&E==Vt-1&&(B.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:y+5});const I=a.beginComputePass(B);I.setPipeline(z.scatterElements),I.setBindGroup(0,Z),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),I.end()}}{let E=f;this.acc16&&(this.ensureAccResources(He.canvas_size[0],He.canvas_size[1]),E=this.accView);const k={label:"render",colorAttachments:[{view:E,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};A&&(k.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:y+6,...this.acc16?{}:{endOfPassWriteIndex:y+7}});const z=a.beginRenderPass(k);if(z.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),z.setBindGroup(0,this.renderSettingsBindGroup),z.setBindGroup(1,this.renderSplatsBindGroup),z.setBindGroup(2,this.atlasBindGroup),z.drawIndirect(this.draw_indirect_buffer,0),z.end(),this.acc16){const O={label:"acc16_resolve",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};A&&(O.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:y+7});const Z=a.beginRenderPass(O);Z.setPipeline(this.accResolvePipeline),Z.setBindGroup(0,this.accResolveBindGroup),Z.draw(3),Z.end()}}this.frameCount++}async readPerfMetrics(a){const f=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const v=this.device.createCommandEncoder({label:"timestamp resolve encoder"});v.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),v.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([v.finish()]),await this.device.queue.onSubmittedWorkDone();const m=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const y=new BigInt64Array(this.resultBuffer.getMappedRange()),A=Math.min(this.frameCount,this.queryCapacityFrames),E=(this.lastFrame+this.frameCount-A)%this.queryCapacityFrames,k=Array.from({length:m.length},()=>[]);let z=0;for(let H=0;H<A;H++){const X=(E+H)%this.queryCapacityFrames,C=X*this.queriesPerFrame;let Q=!0;for(let ee=0;ee<m.length;ee++){const[Y,V,N]=m[ee];if(y[C+N]===0n||y[C+V]===0n||y[C+V]<y[C+N]){Q=!1;break}}if(!Q){!f&&X%60===0&&console.debug("[timestamp] frame slot",X,"contains unwritten (0) timestamps, skipped in stats");continue}z++;for(let ee=0;ee<m.length;ee++){const[Y,V,N]=m[ee],$=Number(y[C+N]),le=Number(y[C+V]);k[ee].push((le-$)/1e6)}}if(z===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...k[0]);const O=[];let Z=0,B=0,I=0;for(let H=0;H<m.length;H++){const X=m[H][0],C=k[H];let Q=0;if(X==="Total"){const ee=this.allFrameTimes;Q=ee.reduce((N,$)=>N+$,0)/ee.length;const Y=[...ee].sort((N,$)=>N-$);Z=Y[Math.floor(Y.length*.99)]||0;const V=ee.reduce((N,$)=>N+Math.pow($-Q,2),0)/ee.length;B=Math.sqrt(V),I=Q}else Q=C.reduce((ee,Y)=>ee+Y,0)/C.length;O.push([X,Q])}this.lastFrame+=this.frameCount,this.frameCount=0;const W=Object.fromEntries(O);this.lastStageBreakdownMs={cull:W.Culling??0,preprocess:W.Preprocess??0,sort:W.Sort??0,render:W.Render??0,total:W.Total??0};const q=`[TIMESTAMP - ${this.constructor.name}]
`+O.map(([H,X])=>`${H}: ${X.toFixed(3)}ms`).join(`
`)+`
Total P99: ${Z.toFixed(3)}ms
Total STD: ${B.toFixed(3)}ms
Total AVG: ${I.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(q),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const H=`Stage,ms
`,X=O.map(([ee,Y])=>`${ee},${Y.toFixed(3)}`).join(`
`),C="data:text/csv;charset=utf-8,"+encodeURIComponent(H+X),Q=document.createElement("a");Q.href=C,Q.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(Q),Q.click(),Q.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(q)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:cr,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),f=a?a.width:1,v=a?a.height:1;sr({width:f,height:v,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),as(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Bt(this.pc.num_points*ur),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Bt(this.pc.num_points*dr),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const f=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,v=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${v}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function wr(n,a){return 2*Math.atan(a/(2*n))}function xr(n,a,f,v){const m=Math.tan(v/2),y=Math.tan(f/2),A=m*n,E=-A,k=y*n,z=-k,O=Ve.create();return O[0]=2*n/(k-z),O[5]=-2*n/(A-E),O[2]=(k+z)/(k-z),O[6]=(A+E)/(A-E),O[14]=1,O[10]=a/(a-n),O[11]=-(a*n)/(a-n),Ve.transpose(O,O),O}async function mr(n){Qe(`loading scene camera file... : ${n}`);const f=await(await fetch(n)).json();return Qe(`loaded cameras count: ${f.length}`),f.map(v=>{const m=de.clone(v.position),y=Es.create(...v.rotation.flat()),A=y[0],E=y[4],k=y[8],z=y[1],O=y[5],Z=y[9],B=y[2],I=y[6],W=y[10];A*(O*W-Z*I)-E*(z*W-Z*B)+k*(z*I-O*B)<0&&(y[1]=-y[1],y[5]=-y[5],y[9]=-y[9]);const q=Ve.fromMat3(y);return{position:m,rotation:q,img_name:v.img_name,id:v.id}})}const yr=4*2,br=4*16,os=4*br+2*yr;function vr(n){return n.createBuffer({label:"camera uniform",size:os,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const xt=new Float32Array(os/Float32Array.BYTES_PER_ELEMENT),Xt=class Xt{constructor(a,f){G(this,"_renderSize",null);G(this,"uniform_buffer");G(this,"position",de.create());G(this,"rotation",Ve.create());G(this,"fovY",45/180*Math.PI);G(this,"fovX");G(this,"focalRatioX",1);G(this,"focal",zn.create());G(this,"viewport",zn.create());G(this,"view_matrix",Ve.identity());G(this,"view_inv_matrix",Ve.identity());G(this,"proj_matrix",Ve.identity());G(this,"proj_inv_matrix",Ve.identity());G(this,"_negPos",de.create());G(this,"look",de.create(0,0,1));G(this,"up",de.create(0,1,0));G(this,"right",de.create(1,0,0));this.canvas=a,this.device=f,this.uniform_buffer=vr(f),this.on_update_canvas()}setRenderSize(a,f){this._renderSize=[a,f],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const a=this._renderSize?this._renderSize[0]:this.canvas.width,f=this._renderSize?this._renderSize[1]:this.canvas.height,v=.5*f/Math.tan(this.fovY*.5);this.focal[0]=v*this.focalRatioX,this.focal[1]=v,this.fovX=wr(this.focal[0],a),this.viewport[0]=a,this.viewport[1]=f,this.proj_matrix=xr(.01,100,this.fovX,this.fovY),Ve.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],Ve.copy(this.rotation,this.view_matrix),Ve.translate(this.view_matrix,this._negPos,this.view_matrix),Ve.inverse(this.view_matrix,this.view_inv_matrix),de.transformMat4Upper3x3(Xt.Z_AXIS,this.view_inv_matrix,this.look),de.normalize(this.look,this.look),de.cross(this.up,this.look,this.right),de.normalize(this.right,this.right);let a=0;xt.set(this.view_matrix,a),a+=16,xt.set(this.view_inv_matrix,a),a+=16,xt.set(this.proj_matrix,a),a+=16,xt.set(this.proj_inv_matrix,a),a+=16,xt.set(this.viewport,a),a+=2,xt.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,xt)}set_preset(a){de.copy(a.position,this.position),Ve.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}setFocalRatio(a){this.focalRatioX=a,this.on_update_canvas()}getFov(){return this.fovY}};G(Xt,"Z_AXIS",de.create(0,0,1));let cn=Xt;const et=new URLSearchParams(window.__PORTAL_QS??window.location.search),ln=(n,a)=>{const f=parseFloat(et.get(n)??"");return Number.isFinite(f)?f:a},yt=document.getElementById("frame"),Ht=document.getElementById("window"),Pe=document.getElementById("webgpu-canvas"),rn=document.getElementById("status"),Sr=document.getElementById("glare"),Vn=document.getElementById("hint"),Zt=document.getElementById("btn-mode"),un=document.getElementById("btn-frame"),Ct=document.getElementById("btn-gpu");let tt=et.get("mode")==="free"?"free":"train";const dn=et.get("frame")??"window";let Et=dn!=="fill"&&dn!=="none";dn==="dark"&&yt.classList.add("dark");et.get("ui")==="0"&&(document.getElementById("ui").style.display="none");const St=et.get("poster");St&&(Ht.style.backgroundImage=`url("${St}")`);const ht=n=>{if(n===null){rn.classList.add("hidden");return}rn.textContent=n,rn.classList.remove("hidden")};let fn=1070/1600,pn=null;function jt(){if(yt.classList.toggle("fill",!Et),!Et)yt.style.width="100%",yt.style.height="100%";else{const n=Math.max(8,Math.min(window.innerWidth,window.innerHeight)*.03),a=Math.round(Math.max(8,Math.min(16,window.innerWidth*.02)));yt.style.setProperty("--pad",`${a}px`);const f=window.innerWidth-2*n;let m=window.innerHeight-2*n-40,y=(m-2*a)*fn+2*a;y>f&&(y=f,m=(y-2*a)/fn+2*a),yt.style.width=`${Math.floor(y)}px`,yt.style.height=`${Math.floor(m)}px`}pn&&pn()}jt();const Nt=(n,a)=>de.normalize(de.create(n[a],n[4+a],n[8+a]));function Br(n,a){const f=et.get("base")??"photo";let v=n.findIndex(V=>V.img_name===f);if(v<0){const V=de.create();for(const $ of n)de.add(V,$.position,V);de.scale(V,1/n.length,V);let N=1/0;n.forEach(($,le)=>{const P=de.distance($.position,V);P<N&&(N=P,v=le)})}const m=n[v],y=Nt(m.rotation,0),A=Nt(m.rotation,1),E=Nt(m.rotation,2);let k=0,z=0,O=0,Z=0;for(const V of n){const N=de.sub(V.position,m.position),$=de.dot(N,y),le=de.dot(N,A);k=Math.min(k,$),z=Math.max(z,$),O=Math.min(O,le),Z=Math.max(Z,le)}let B=ln("focus",NaN);if(!Number.isFinite(B)){let V=0,N=0;for(const $ of n){const le=Nt($.rotation,2),P=de.sub(m.position,$.position),F=de.dot(E,le),te=de.dot(E,P),ce=de.dot(le,P),K=1-F*F;if(K<1e-8)continue;const ie=(F*ce-te)/K;ie>0&&(N+=ie*K,V+=K)}B=V>0?N/V:2}const I=de.addScaled(m.position,E,B),W=a[v]??{},re=W.height??1600,q=W.width??1070,H=W.fy??1334.6;fn=q/re;const X=2*Math.atan(re/(2*H)),C={pos:de.clone(m.position),right:y,down:A,fwd:E,focus:I,focusDist:B,x0:k,x1:z,y0:O,y1:Z,fovY:X},Q={position:de.create(),rotation:Ve.create()};let ee=0,Y=0;for(const V of n){const N=de.sub(V.position,m.position);_n(C,de.dot(N,y),de.dot(N,A),de.dot(N,E),Q),ee=Math.max(ee,de.distance(Q.position,V.position));for(let $=0;$<16;$++)Y=Math.max(Y,Math.abs(Q.rotation[$]-V.rotation[$]))}return console.log(`[portal] base='${m.img_name}' x[${k.toFixed(3)},${z.toFixed(3)}] y[${O.toFixed(3)},${Z.toFixed(3)}] focus ${B.toFixed(3)} fovY ${(X*180/Math.PI).toFixed(1)}° ${n.length} cams; rig vs training poses: max |dpos| ${ee.toExponential(2)}, max |dR| ${Y.toExponential(2)}`),C}function _n(n,a,f,v,m){const y=de.addScaled(de.addScaled(de.addScaled(n.pos,n.right,a),n.down,f),n.fwd,v),A=de.normalize(de.sub(n.focus,y)),E=de.normalize(de.cross(A,de.negate(n.down))),k=de.cross(A,E),z=m.rotation;Ve.identity(z),z[0]=E[0],z[4]=E[1],z[8]=E[2],z[1]=k[0],z[5]=k[1],z[9]=k[2],z[2]=A[0],z[6]=A[1],z[10]=A[2],de.copy(y,m.position)}function Tr(n,a,f,v){const m=new Float32Array(a),y=[];for(let k=0;k<a;k++)m[k]=(n[k*8]-f.pos[0])*f.fwd[0]+(n[k*8+1]-f.pos[1])*f.fwd[1]+(n[k*8+2]-f.pos[2])*f.fwd[2],m[k]>v&&y.push(k);y.sort((k,z)=>m[k]-m[z]||k-z);const A=new Uint32Array(a),E=new Uint32Array(new Float32Array([1]).buffer)[0];return y.forEach((k,z)=>{A[k]=E+(y.length-z)}),{keys:new Float32Array(A.buffer),count:y.length}}const Er=3,me={x:0,y:0,z:0},Le={x:0,y:0,z:0};let vt=-1e9,je=null;const nt=new Map;let Jt=0,cs=0;function Tt(){const n=tt==="train"?1:Er;me.x=Math.max(-n,Math.min(n,me.x)),me.y=Math.max(-n,Math.min(n,me.y)),me.z=tt==="train"?0:Math.max(-1.5,Math.min(1,me.z))}Pe.addEventListener("pointermove",n=>{const a=Ht.getBoundingClientRect();if(nt.has(n.pointerId)&&nt.set(n.pointerId,[n.clientX,n.clientY]),nt.size===2&&tt==="free"){const[f,v]=[...nt.values()],m=Math.hypot(f[0]-v[0],f[1]-v[1]);Jt>0&&(me.z=cs+(m/Jt-1)*1.5,Tt(),vt=performance.now());return}if(je&&n.pointerId===je.id){const f=(n.clientX-je.x0)/(.5*a.width),v=(n.clientY-je.y0)/(.5*a.height);me.x=je.bx-f,me.y=je.by-v,Tt(),vt=performance.now()}else n.pointerType==="mouse"&&tt==="train"&&(me.x=(n.clientX-a.left)/a.width*2-1,me.y=(n.clientY-a.top)/a.height*2-1,Tt(),vt=performance.now())});Pe.addEventListener("pointerdown",n=>{if(Pe.setPointerCapture(n.pointerId),n.pointerType==="touch"&&nt.set(n.pointerId,[n.clientX,n.clientY]),nt.size===2){const[a,f]=[...nt.values()];Jt=Math.hypot(a[0]-f[0],a[1]-f[1]),cs=me.z,je=null}else je={id:n.pointerId,x0:n.clientX,y0:n.clientY,bx:me.x,by:me.y};vt=performance.now(),Ar()});const ls=n=>{nt.delete(n.pointerId),nt.size<2&&(Jt=0),je&&n.pointerId===je.id&&(je=null)};Pe.addEventListener("pointerup",ls);Pe.addEventListener("pointercancel",ls);Pe.addEventListener("pointerleave",n=>{n.pointerType==="mouse"&&!je&&tt==="train"&&(me.x=0,me.y=0)});Pe.addEventListener("wheel",n=>{tt==="free"&&(n.preventDefault(),me.z-=n.deltaY*.0015,Tt(),vt=performance.now())},{passive:!1});Pe.addEventListener("dblclick",()=>{me.x=me.y=me.z=0});const wn=et.get("gyro")!=="0";let Hn=!1,qt=null,gyRebase=!1;function us(n){if(!wn||n.beta===null||n.gamma===null)return;if(je||nt.size){gyRebase=!0;return}const a=1/18;(!qt||gyRebase)&&(qt=[n.beta-me.y/a,n.gamma-me.x/a],gyRebase=!1);me.x=(n.gamma-qt[1])*a,me.y=(n.beta-qt[0])*a,Tt(),qt=[n.beta-me.y/a,n.gamma-me.x/a],vt=performance.now()}function Ar(){if(!wn||Hn)return;Hn=!0;const n=window.DeviceOrientationEvent;n&&typeof n.requestPermission=="function"&&n.requestPermission().then(a=>{a==="granted"&&window.addEventListener("deviceorientation",us)}).catch(()=>{})}var jn;wn&&typeof((jn=window.DeviceOrientationEvent)==null?void 0:jn.requestPermission)!="function"&&window.addEventListener("deviceorientation",us);var Jn;const kr=((Jn=window.matchMedia)==null?void 0:Jn.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,Mr=et.get("idle")==="1"&&!kr;function xn(){Zt.textContent=tt==="train"?"◎ Training views":"✥ Free",Zt.title=tt==="train"?"Camera stays within the training views — click for free movement":"Free movement (extrapolates) — click to stay within the training views",Zt.classList.toggle("on",tt==="free"),un.textContent=Et?"▭ Framed":"⛶ Full",un.title=Et?"Window at the photo's exact aspect — click for full-bleed":"Full-bleed — click for the framed window at the photo's aspect"}let mn=()=>{};Zt.addEventListener("click",()=>{tt=tt==="train"?"free":"train",Tt(),xn(),mn()});un.addEventListener("click",()=>{Et=!Et,jt(),xn(),mn()});xn();const Pr=et.get("renderer");function Dr(n){const a=new URLSearchParams(window.location.search);a.set("renderer",n),window.location.search=a.toString()}(async()=>{const n=et.get("bundle");if(!n){ht("no ?bundle= given");return}const a=et.get("astc");let f=null,v=null,m=[],y=null,A=!!navigator.gpu;if(Pr!=="webgl"&&A){const F=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(A=!!F,F){for(const te of["timestamp-query","texture-compression-bc","texture-compression-astc"])F.features.has(te)&&m.push(te);v=await F.requestDevice({requiredFeatures:m,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:F.limits.maxComputeWorkgroupStorageSize,maxBufferSize:F.limits.maxBufferSize,maxStorageBufferBindingSize:F.limits.maxStorageBufferBindingSize}}),f="webgpu"}}if(f||(y=Pe.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"}),y&&(f="webgl")),Ct.textContent=f==="webgl"?"WebGL":"WebGPU",Ct.title=f==="webgl"?A?"Rendering with the WebGL2 fallback — click for WebGPU":"Rendering with WebGL2 (WebGPU not available)":"Rendering with WebGPU — click for the WebGL2 fallback",Ct.disabled=f==="webgl"&&!A,Ct.onclick=()=>Dr(f==="webgl"?"webgpu":"webgl"),!f){ht(St?null:"no WebGPU or WebGL2");return}let E,k;f==="webgpu"?(E=m.includes("texture-compression-bc"),k=m.includes("texture-compression-astc")):{bc7:E,astc:k}=Kt.atlasSupport(y);const z=!E&&a&&k?a:n;if(!E&&!(a&&k)){console.warn(`[portal] ${f}: no BC7/ASTC support`),ht(St?null:"no BC7/ASTC texture support");return}const{bundle:O}=await Hs(z,(F,te)=>{ht(te?`loading ${Math.floor(100*F/te)}%`:`loading ${(F/2**20).toFixed(1)} MB`)});if(!O||!O.camerasBuffer){ht("bundle has no cameras.json");return}const Z=JSON.parse(new TextDecoder().decode(O.camerasBuffer)),B=URL.createObjectURL(new Blob([O.camerasBuffer],{type:"application/json"})),I=await mr(B);URL.revokeObjectURL(B);const W=Br(I,Z);jt();const re=ln("maxpx",f==="webgl"?9e5:13e5),q=()=>{const F=Math.min(window.devicePixelRatio||1,2);let te=Math.max(1,Math.round(Ht.clientWidth*F)),ce=Math.max(1,Math.round(Ht.clientHeight*F));const K=Math.min(1,Math.sqrt(re/(te*ce)));return te=Math.max(1,Math.round(te*K)),ce=Math.max(1,Math.round(ce*K)),Pe.width===te&&Pe.height===ce?!1:(Pe.width=te,Pe.height=ce,!0)};q();const H=(F,te)=>{if(et.get("staticbg")==="0")return null;const ce=ln("bgdepth",1.5*W.focusDist),{keys:K,count:ie}=Tr(F,te,W,ce);return console.log(`[portal] fixed background order: ${ie} / ${te} surfels beyond ${ce.toFixed(2)} m`),K},X=et.get("wide")!=="0";let C,Q,ee;if(f==="webgpu"){const F=v,te=await Ls(new File([O.pcBuffer],"bundle.ply"),F);let ce=null;if(O.atlasBuffer)try{ce=Is(F,In(O.atlasBuffer),!0)}catch(be){console.warn("[portal] atlas upload failed",be)}const K=Pe.getContext("webgpu"),ie="rgba8unorm";K.configure({device:F,format:ie,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});const ae=new cn(Pe,F);ae.setFov(W.fovY),ae.on_update_canvas();const J=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),we=new gr(te,F,ie,ae.uniform_buffer,m,ce,{fetchById:!J,staticSortKeys:H(te.surfel_data,te.num_points),wideFrustum:X});$n(Pe.width,Pe.height,F,we.render_settings_buffer),ir(te.sh_bias,F,we.render_settings_buffer),rr(1,F,we.render_settings_buffer),C={position:ae.position,rotation:ae.rotation};window.__portalTextures=on=>{try{we.setAtlasEnabled(on)}catch(e){console.warn("[portal] texture toggle",e)}Y=!0};let fe=Promise.resolve(void 0);Q=async()=>{ae.update_buffer(),await fe;const be=F.createCommandEncoder();return we.frame(be,K.getCurrentTexture().createView(),!1),F.queue.submit([be.finish()]),fe=F.queue.onSubmittedWorkDone(),fe},ee=()=>{ae.on_update_canvas(),$n(Pe.width,Pe.height,F,we.render_settings_buffer)}}else{const F=y,te=await Os(new File([O.pcBuffer],"bundle.ply")),ce=O.atlasBuffer?In(O.atlasBuffer):null,K=new Kt(F,te,ce,{staticSortKeys:H(te.surfel_data,te.num_points),wideFrustum:X});if(console.log(`[portal/gl] ${te.num_points} surfels, ${K.atlasStatus}`),!K.hasAtlas){ht(St?null:K.atlasStatus);return}window.__portalTextures=on=>{F.useProgram(K.prog),F.uniform1i(K.uniforms.u_atlas_on,on&&K.hasAtlas?1:0),Y=!0},C={position:de.create(),rotation:Ve.create()},Q=async()=>{K.render({rotation:C.rotation,eye:C.position,fovY:W.fovY,width:Pe.width,height:Pe.height})},ee=()=>{}}let Y=!0;mn=()=>{Y=!0},pn=()=>{q()&&ee(),Y=!0},new ResizeObserver(()=>{jt()}).observe(document.body),window.__portalSet=(F,te)=>{me.x=Le.x=F,me.y=Le.y=te,Y=!0},window.__portalBackend=f,window.dispatchEvent(new CustomEvent("portal-ready",{detail:{backend:f}})),window.__portalDraw=()=>(_n(W,.3*W.x1,.2*W.y1,0,C),Q());let V=performance.now(),N=0,$=!1;const le={x:NaN,y:NaN,z:NaN};function P(){const F=performance.now(),te=Math.min((F-V)/1e3,.1);if(V=F,Mr&&!je&&F-vt>4e3){const K=F/1e3;me.x=.55*Math.sin(K*.45),me.y=.3*Math.sin(K*.31+1)}const ce=1-Math.exp(-te*(je?14:6));if(Le.x+=(me.x-Le.x)*ce,Le.y+=(me.y-Le.y)*ce,Le.z+=(me.z-Le.z)*ce,!$&&(Y||Math.abs(Le.x-le.x)>1e-4||Math.abs(Le.y-le.y)>1e-4||Math.abs(Le.z-le.z)>1e-4)){const K=Le.x*(Le.x>=0?W.x1:-W.x0),ie=Le.y*(Le.y>=0?W.y1:-W.y0),ae=Le.z*Math.max(W.x1-W.x0,W.y1-W.y0);_n(W,K,ie,ae,C),Sr.style.transform=`translate3d(${(-Le.x*4).toFixed(2)}%, ${(-Le.y*4).toFixed(2)}%, 0)`,le.x=Le.x,le.y=Le.y,le.z=Le.z,Y=!1,$=!0;const J=Q();J.then(()=>{$=!1}),++N===1&&J.then(()=>requestAnimationFrame(()=>{Pe.classList.add("live"),ht(null),Vn.classList.add("show"),setTimeout(()=>Vn.classList.remove("show"),2500)}))}requestAnimationFrame(P)}requestAnimationFrame(P)})().catch(n=>{console.error(n),ht(St?null:`failed: ${(n==null?void 0:n.message)??n}`)});
