const NR=function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))I(A);new MutationObserver(A=>{for(const _ of A)if(_.type==="childList")for(const B of _.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&I(B)}).observe(document,{childList:!0,subtree:!0});function S(A){const _={};return A.integrity&&(_.integrity=A.integrity),A.referrerpolicy&&(_.referrerPolicy=A.referrerpolicy),A.crossorigin==="use-credentials"?_.credentials="include":A.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function I(A){if(A.ep)return;A.ep=!0;const _=S(A);fetch(A.href,_)}};NR();const Fa={},FR=(y,w)=>y===w,BR=Symbol("solid-proxy"),Ws={equals:FR};let DR=N0;const To={},zn=1,Vs=2,O0={owned:null,cleanups:null,context:null,owner:null},[zR,dN]=Ma(!1);var ht=null;let Wa=null,$t=null,Ua=null,Jt=null,un=null,Wu=0;function _0(y,w){const S=$t,I=ht,A=y.length===0?O0:{owned:null,cleanups:null,context:null,owner:w||I};ht=A,$t=null;try{return Ks(()=>y(()=>Ju(A)),!0)}finally{$t=S,ht=I}}function Ma(y,w){w=w?Object.assign({},Ws,w):Ws;const S={value:y,observers:null,observerSlots:null,pending:To,comparator:w.equals||void 0},I=A=>(typeof A=="function"&&(A=A(S.pending!==To?S.pending:S.value)),Gu(S,A));return[R0.bind(S),I]}function UR(y,w,S){const I=Ku(y,w,!0,zn);Va(I)}function zt(y,w,S){const I=Ku(y,w,!1,zn);Va(I)}function Vt(y,w,S){S=S?Object.assign({},Ws,S):Ws;const I=Ku(y,w,!0,0);return I.pending=To,I.observers=null,I.observerSlots=null,I.comparator=S.equals||void 0,Va(I),R0.bind(I)}function T0(y){if(Ua)return y();let w;const S=Ua=[];try{w=y()}finally{Ua=null}return Ks(()=>{for(let I=0;I<S.length;I+=1){const A=S[I];if(A.pending!==To){const _=A.pending;A.pending=To,Gu(A,_)}}},!1),w}function Dn(y){let w,S=$t;return $t=null,w=y(),$t=S,w}function C0(y,w,S){const I=Array.isArray(y);let A,_=S&&S.defer;return B=>{let O;if(I){O=[];for(let V=0;V<y.length;V++)O.push(y[V]())}else O=y();if(_){_=!1;return}const P=Dn(()=>w(O,A,B));return A=O,P}}function I0(y){return ht===null||(ht.cleanups===null?ht.cleanups=[y]:ht.cleanups.push(y)),y}function j0(){return ht}function qR(y,w){const S=ht;ht=y;try{return Ks(w,!0)}finally{ht=S}}function MR(y){const w=$t,S=ht;return Promise.resolve().then(()=>{$t=w,ht=S;let I;return T0(y),I?I.done:void 0})}function HR(){return[zR,MR]}function P0(y){const w=Symbol("context");return{id:w,Provider:KR(w),defaultValue:y}}function Vu(y){let w;return(w=D0(ht,y.id))!==void 0?w:y.defaultValue}function WR(y){const w=Vt(y);return Vt(()=>Mu(w()))}function R0(){const y=Wa;if(this.sources&&(this.state||y)){const w=Jt;Jt=null,this.state===zn||y?Va(this):Gs(this),Jt=w}if($t){const w=this.observers?this.observers.length:0;$t.sources?($t.sources.push(this),$t.sourceSlots.push(w)):($t.sources=[this],$t.sourceSlots=[w]),this.observers?(this.observers.push($t),this.observerSlots.push($t.sources.length-1)):(this.observers=[$t],this.observerSlots=[$t.sources.length-1])}return this.value}function Gu(y,w,S){if(Ua)return y.pending===To&&Ua.push(y),y.pending=w,w;if(y.comparator&&y.comparator(y.value,w))return w;let I=!1;return y.value=w,y.observers&&y.observers.length&&Ks(()=>{for(let A=0;A<y.observers.length;A+=1){const _=y.observers[A];I&&Wa.disposed.has(_),(I&&!_.tState||!I&&!_.state)&&(_.pure?Jt.push(_):un.push(_),_.observers&&F0(_)),I||(_.state=zn)}if(Jt.length>1e6)throw Jt=[],new Error},!1),w}function Va(y){if(!y.fn)return;Ju(y);const w=ht,S=$t,I=Wu;$t=ht=y,VR(y,y.value,I),$t=S,ht=w}function VR(y,w,S){let I;try{I=y.fn(w)}catch(A){B0(A)}(!y.updatedAt||y.updatedAt<=S)&&(y.observers&&y.observers.length?Gu(y,I):y.value=I,y.updatedAt=S)}function Ku(y,w,S,I=zn,A){const _={fn:y,state:I,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:w,owner:ht,context:null,pure:S};return ht===null||ht!==O0&&(ht.owned?ht.owned.push(_):ht.owned=[_]),_}function L0(y){const w=Wa;if(y.state===0||w)return;if(y.state===Vs||w)return Gs(y);if(y.suspense&&Dn(y.suspense.inFallback))return y.suspense.effects.push(y);const S=[y];for(;(y=y.owner)&&(!y.updatedAt||y.updatedAt<Wu);)(y.state||w)&&S.push(y);for(let I=S.length-1;I>=0;I--)if(y=S[I],y.state===zn||w)Va(y);else if(y.state===Vs||w){const A=Jt;Jt=null,Gs(y,S[0]),Jt=A}}function Ks(y,w){if(Jt)return y();let S=!1;w||(Jt=[]),un?S=!0:un=[],Wu++;try{return y()}catch(I){B0(I)}finally{GR(S)}}function GR(y){Jt&&(N0(Jt),Jt=null),!y&&(un.length?T0(()=>{DR(un),un=null}):un=null)}function N0(y){for(let w=0;w<y.length;w++)L0(y[w])}function Gs(y,w){const S=Wa;y.state=0;for(let I=0;I<y.sources.length;I+=1){const A=y.sources[I];A.sources&&(A.state===zn||S?A!==w&&L0(A):(A.state===Vs||S)&&Gs(A,w))}}function F0(y){const w=Wa;for(let S=0;S<y.observers.length;S+=1){const I=y.observers[S];(!I.state||w)&&(I.state=Vs,I.pure?Jt.push(I):un.push(I),I.observers&&F0(I))}}function Ju(y){let w;if(y.sources)for(;y.sources.length;){const S=y.sources.pop(),I=y.sourceSlots.pop(),A=S.observers;if(A&&A.length){const _=A.pop(),B=S.observerSlots.pop();I<A.length&&(_.sourceSlots[B]=I,A[I]=_,S.observerSlots[I]=B)}}if(y.owned){for(w=0;w<y.owned.length;w++)Ju(y.owned[w]);y.owned=null}if(y.cleanups){for(w=0;w<y.cleanups.length;w++)y.cleanups[w]();y.cleanups=null}y.state=0,y.context=null}function B0(y){throw y}function D0(y,w){return y?y.context&&y.context[w]!==void 0?y.context[w]:D0(y.owner,w):void 0}function Mu(y){if(typeof y=="function"&&!y.length)return Mu(y());if(Array.isArray(y)){const w=[];for(let S=0;S<y.length;S++){const I=Mu(y[S]);Array.isArray(I)?w.push.apply(w,I):w.push(I)}return w}return y}function KR(y){return function(S){let I;return UR(()=>I=Dn(()=>(ht.context={[y]:S.value},WR(()=>S.children)))),I}}function We(y,w){return Dn(()=>y(w))}function qs(){return!0}const z0={get(y,w,S){return w===BR?S:y.get(w)},has(y,w){return y.has(w)},set:qs,deleteProperty:qs,getOwnPropertyDescriptor(y,w){return{configurable:!0,enumerable:!0,get(){return y.get(w)},set:qs,deleteProperty:qs}},ownKeys(y){return y.keys()}};function zu(y){return typeof y=="function"?y():y}function JR(...y){return new Proxy({get(w){for(let S=y.length-1;S>=0;S--){const I=zu(y[S])[w];if(I!==void 0)return I}},has(w){for(let S=y.length-1;S>=0;S--)if(w in zu(y[S]))return!0;return!1},keys(){const w=[];for(let S=0;S<y.length;S++)w.push(...Object.keys(zu(y[S])));return[...new Set(w)]}},z0)}function YR(y,...w){const S=new Set(w.flat()),I=Object.getOwnPropertyDescriptors(y),A=w.map(_=>{const B={};for(let O=0;O<_.length;O++){const P=_[O];Object.defineProperty(B,P,I[P]?I[P]:{get(){return y[P]},set(){return!0}})}return B});return A.push(new Proxy({get(_){return S.has(_)?void 0:y[_]},has(_){return S.has(_)?!1:_ in y},keys(){return Object.keys(y).filter(_=>!S.has(_))}},z0)),A}function U0(y){let w=!1;const S=Vt(()=>y.when,void 0,{equals:(I,A)=>w?I===A:!I==!A});return Vt(()=>{const I=S();if(I){const A=y.children;return(w=typeof A=="function"&&A.length>0)?Dn(()=>A(I)):A}return y.fallback})}const ZR=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],QR=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ZR]),XR=new Set(["innerHTML","textContent","innerText","children"]),eL={className:"class",htmlFor:"for"},b0={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},tL=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),rL={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function nL(y,w,S){let I=S.length,A=w.length,_=I,B=0,O=0,P=w[A-1].nextSibling,V=null;for(;B<A||O<_;){if(w[B]===S[O]){B++,O++;continue}for(;w[A-1]===S[_-1];)A--,_--;if(A===B){const ie=_<I?O?S[O-1].nextSibling:S[_-O]:P;for(;O<_;)y.insertBefore(S[O++],ie)}else if(_===O)for(;B<A;)(!V||!V.has(w[B]))&&w[B].remove(),B++;else if(w[B]===S[_-1]&&S[O]===w[A-1]){const ie=w[--A].nextSibling;y.insertBefore(S[O++],w[B++].nextSibling),y.insertBefore(S[--_],ie),w[A]=S[_]}else{if(!V){V=new Map;let he=O;for(;he<_;)V.set(S[he],he++)}const ie=V.get(w[B]);if(ie!=null)if(O<ie&&ie<_){let he=B,ue=1,x;for(;++he<A&&he<_&&!((x=V.get(w[he]))==null||x!==ie+ue);)ue++;if(ue>ie-O){const se=w[B];for(;O<ie;)y.insertBefore(S[O++],se)}else y.replaceChild(S[O++],w[B++])}else B++;else w[B++].remove()}}}const x0="_$DX_DELEGATE";function oL(y,w,S){let I;return _0(A=>{I=A,w===document?y():gt(w,y(),w.firstChild?null:void 0,S)}),()=>{I(),w.textContent=""}}function $r(y,w,S){const I=document.createElement("template");I.innerHTML=y;let A=I.content.firstChild;return S&&(A=A.firstChild),A}function aL(y,w=window.document){const S=w[x0]||(w[x0]=new Set);for(let I=0,A=y.length;I<A;I++){const _=y[I];S.has(_)||(S.add(_),w.addEventListener(_,hL))}}function fr(y,w,S){S==null?y.removeAttribute(w):y.setAttribute(w,S)}function iL(y,w,S,I){I==null?y.removeAttributeNS(w,S):y.setAttributeNS(w,S,I)}function sL(y,w,S,I){I?Array.isArray(S)?(y[`$$${w}`]=S[0],y[`$$${w}Data`]=S[1]):y[`$$${w}`]=S:Array.isArray(S)?y.addEventListener(w,A=>S[0](S[1],A)):y.addEventListener(w,S)}function lL(y,w,S={}){const I=Object.keys(w||{}),A=Object.keys(S);let _,B;for(_=0,B=A.length;_<B;_++){const O=A[_];!O||O==="undefined"||w[O]||(w0(y,O,!1),delete S[O])}for(_=0,B=I.length;_<B;_++){const O=I[_],P=!!w[O];!O||O==="undefined"||S[O]===P||!P||(w0(y,O,!0),S[O]=P)}return S}function cL(y,w,S={}){const I=y.style;if(w==null||typeof w=="string")return I.cssText=w;typeof S=="string"&&(S={});let A,_;for(_ in S)w[_]==null&&I.removeProperty(_),delete S[_];for(_ in w)A=w[_],A!==S[_]&&(I.setProperty(_,A),S[_]=A);return S}function pL(y,w,S,I){typeof w=="function"?zt(A=>S0(y,w(),A,S,I)):S0(y,w,void 0,S,I)}function gt(y,w,S,I){if(S!==void 0&&!I&&(I=[]),typeof w!="function")return Co(y,w,I,S);zt(A=>Co(y,w(),A,S),I)}function uL(y,w,S,I,A={}){for(const _ in A)if(!(_ in w)){if(_==="children")continue;$0(y,_,null,A[_],S)}for(const _ in w){if(_==="children"){I||Co(y,w.children);continue}const B=w[_];A[_]=$0(y,_,B,A[_],S)}}function dL(y){return y.toLowerCase().replace(/-([a-z])/g,(w,S)=>S.toUpperCase())}function w0(y,w,S){const I=w.trim().split(/\s+/);for(let A=0,_=I.length;A<_;A++)y.classList.toggle(I[A],S)}function $0(y,w,S,I,A){let _,B,O;if(w==="style")return cL(y,S,I);if(w==="classList")return lL(y,S,I);if(S===I)return I;if(w==="ref")S(y);else if(w.slice(0,3)==="on:")y.addEventListener(w.slice(3),S);else if(w.slice(0,10)==="oncapture:")y.addEventListener(w.slice(10),S,!0);else if(w.slice(0,2)==="on"){const P=w.slice(2).toLowerCase(),V=tL.has(P);sL(y,P,S,V),V&&aL([P])}else if((O=XR.has(w))||!A&&(b0[w]||(B=QR.has(w)))||(_=y.nodeName.includes("-")))_&&!B&&!O?y[dL(w)]=S:y[b0[w]||w]=S;else{const P=A&&w.indexOf(":")>-1&&rL[w.split(":")[0]];P?iL(y,P,w,S):fr(y,eL[w]||w,S)}return S}function hL(y){const w=`$$${y.type}`;let S=y.composedPath&&y.composedPath()[0]||y.target;for(y.target!==S&&Object.defineProperty(y,"target",{configurable:!0,value:S}),Object.defineProperty(y,"currentTarget",{configurable:!0,get(){return S||document}});S!==null;){const I=S[w];if(I&&!S.disabled){const A=S[`${w}Data`];if(A!==void 0?I(A,y):I(y),y.cancelBubble)return}S=S.host&&S.host!==S&&S.host instanceof Node?S.host:S.parentNode}}function S0(y,w,S={},I,A){return!A&&"children"in w&&zt(()=>S.children=Co(y,w.children,S.children)),zt(()=>uL(y,w,I,!0,S)),S}function Co(y,w,S,I,A){for(Fa.context&&!S&&(S=[...y.childNodes]);typeof S=="function";)S=S();if(w===S)return S;const _=typeof w,B=I!==void 0;if(y=B&&S[0]&&S[0].parentNode||y,_==="string"||_==="number"){if(Fa.context)return S;if(_==="number"&&(w=w.toString()),B){let O=S[0];O&&O.nodeType===3?O.data=w:O=document.createTextNode(w),S=_o(y,S,I,O)}else S!==""&&typeof S=="string"?S=y.firstChild.data=w:S=y.textContent=w}else if(w==null||_==="boolean"){if(Fa.context)return S;S=_o(y,S,I)}else{if(_==="function")return zt(()=>{let O=w();for(;typeof O=="function";)O=O();S=Co(y,O,S,I)}),()=>S;if(Array.isArray(w)){const O=[];if(Hu(O,w,A))return zt(()=>S=Co(y,O,S,I,!0)),()=>S;if(Fa.context){for(let P=0;P<O.length;P++)if(O[P].parentNode)return S=O}if(O.length===0){if(S=_o(y,S,I),B)return S}else Array.isArray(S)?S.length===0?k0(y,O,I):nL(y,S,O):(S&&_o(y),k0(y,O));S=O}else if(w instanceof Node){if(Fa.context&&w.parentNode)return S=B?[w]:w;if(Array.isArray(S)){if(B)return S=_o(y,S,I,w);_o(y,S,null,w)}else S==null||S===""||!y.firstChild?y.appendChild(w):y.replaceChild(w,y.firstChild);S=w}}return S}function Hu(y,w,S){let I=!1;for(let A=0,_=w.length;A<_;A++){let B=w[A],O;if(B instanceof Node)y.push(B);else if(!(B==null||B===!0||B===!1))if(Array.isArray(B))I=Hu(y,B)||I;else if((O=typeof B)=="string")y.push(document.createTextNode(B));else if(O==="function")if(S){for(;typeof B=="function";)B=B();I=Hu(y,Array.isArray(B)?B:[B])||I}else y.push(B),I=!0;else y.push(document.createTextNode(B.toString()))}return I}function k0(y,w,S){for(let I=0,A=w.length;I<A;I++)y.insertBefore(w[I],S)}function _o(y,w,S,I){if(S===void 0)return y.textContent="";const A=I||document.createTextNode("");if(w.length){let _=!1;for(let B=w.length-1;B>=0;B--){const O=w[B];if(A!==O){const P=O.parentNode===y;!_&&!B?P?y.replaceChild(A,O):y.insertBefore(A,S):P&&O.remove()}else _=!0}}else y.insertBefore(A,S);return[A]}function fL(y,w,S){return y.addEventListener(w,S),()=>y.removeEventListener(w,S)}function mL([y,w],S,I){return[S?()=>S(y()):y,I?A=>w(I(A)):w]}function gL(y,w){const S=document.getElementById(y);S?S.scrollIntoView():w&&window.scrollTo(0,0)}function yL(y,w,S,I){let A=!1;const _=O=>typeof O=="string"?{value:O}:O,B=mL(Ma(_(y()),{equals:(O,P)=>O.value===P.value}),void 0,O=>(!A&&w(O),O));return S&&I0(S((O=y())=>{A=!0,B[1](_(O)),A=!1})),{signal:B,utils:I}}function vL(y){if(y){if(Array.isArray(y))return{signal:y}}else return{signal:Ma({value:""})};return y}function bL(){return yL(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:y,replace:w,scroll:S,state:I})=>{w?window.history.replaceState(I,"",y):window.history.pushState(I,"",y),gL(window.location.hash.slice(1),S)},y=>fL(window,"popstate",()=>y()),{go:y=>window.history.go(y)})}const xL=/^(?:[a-z0-9]+:)?\/\//i,wL=/^\/+|\/+$|\s+/g;function qa(y){const w=y.replace(wL,"");return w?w.startsWith("?")?w:"/"+w:""}function Hs(y,w,S){if(xL.test(w))return;const I=qa(y),A=S&&qa(S);let _="";return!A||w.charAt(0)==="/"?_=I:A.toLowerCase().indexOf(I.toLowerCase())!==0?_=I+A:_=A,_+qa(w)||"/"}function $L(y,w){if(y==null)throw new Error(w);return y}function q0(y,w){return qa(y).replace(/\/*(\*.*)?$/g,"")+qa(w)}function SL(y){const w={};return y.searchParams.forEach((S,I)=>{w[I]=S}),w}function kL(y,w){const[S,I]=y.split("/*",2),A=S.split("/").filter(Boolean),_=A.length;return B=>{const O=B.split("/").filter(Boolean),P=O.length-_;if(P<0||P>0&&I===void 0&&!w)return null;const V={path:_?"":"/",params:{}};for(let ie=0;ie<_;ie++){const he=A[ie],ue=O[ie];if(he[0]===":")V.params[he.slice(1)]=ue;else if(he.localeCompare(ue,void 0,{sensitivity:"base"})!==0)return null;V.path+=`/${ue}`}return I&&(V.params[I]=P?O.slice(-P).join("/"):""),V}}function AL(y){const[w,S]=y.pattern.split("/*",2),I=w.split("/").filter(Boolean);return I.reduce((A,_)=>A+(_.startsWith(":")?2:3),I.length-(S===void 0?0:1))}function M0(y){const w=new Map,S=j0();return new Proxy({},{get(I,A){return w.has(A)||qR(S,()=>w.set(A,Vt(()=>y()[A]))),w.get(A)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(y())}})}const EL=100,H0=P0(),Js=P0(),Yu=()=>$L(Vu(H0),"Make sure your app is wrapped in a <Router />");let Ha;const Zu=()=>Ha||Vu(Js)||Yu().base,OL=y=>{const w=Zu();return Vt(()=>w.resolvePath(y()))},_L=y=>{const w=Yu();return Vt(()=>{const S=y();return S!==void 0?w.renderPath(S):S})};function TL(y,w="",S){const{path:I,component:A,data:_,children:B}=y,O=!B||Array.isArray(B)&&!B.length,P=q0(w,I),V=O?P:P.split("/*",1)[0];return{originalPath:I,pattern:V,element:A?()=>We(A,{}):()=>{const{element:ie}=y;return ie===void 0&&S?We(S,{}):ie},preload:y.component?A.preload:y.preload,data:_,matcher:kL(V,!O)}}function CL(y,w=0){return{routes:y,score:AL(y[y.length-1])*1e4-w,matcher(S){const I=[];for(let A=y.length-1;A>=0;A--){const _=y[A],B=_.matcher(S);if(!B)return null;I.unshift({...B,route:_})}return I}}}function W0(y,w="",S,I=[],A=[]){const _=Array.isArray(y)?y:[y];for(let B=0,O=_.length;B<O;B++){const P=_[B];if(P&&typeof P=="object"&&P.hasOwnProperty("path")){const V=TL(P,w,S);if(I.push(V),P.children)W0(P.children,V.pattern,S,I,A);else{const ie=CL([...I],A.length);A.push(ie)}I.pop()}}return I.length?A:A.sort((B,O)=>O.score-B.score)}function IL(y,w){for(let S=0,I=y.length;S<I;S++){const A=y[S].matcher(w);if(A)return A}return[]}function jL(y,w){const S=new URL("http://sar"),I=Vt(P=>{const V=y();try{return new URL(V,S)}catch{return console.error(`Invalid path ${V}`),P}},S,{equals:(P,V)=>P.href===V.href}),A=Vt(()=>I().pathname),_=Vt(()=>I().search.slice(1)),B=Vt(()=>I().hash.slice(1)),O=Vt(()=>"");return{get pathname(){return A()},get search(){return _()},get hash(){return B()},get state(){return w()},get key(){return O()},query:M0(C0(_,()=>SL(I())))}}function PL(y,w="",S,I){const{signal:[A,_],utils:B={}}=vL(y),O=B.parsePath||(q=>q),P=B.renderPath||(q=>q),V=Hs("",w),ie=void 0;if(V===void 0)throw new Error(`${V} is not a valid base path`);V&&!A().value&&_({value:V,replace:!0,scroll:!1});const[he,ue]=HR(),[x,se]=Ma(A().value),[me,fe]=Ma(A().state),re=jL(x,me),ye=[],ve={pattern:V,params:{},path:()=>V,outlet:()=>null,resolvePath(q){return Hs(V,q)}};if(S)try{Ha=ve,ve.data=S({data:void 0,params:{},location:re,navigate:ne(ve)})}finally{Ha=void 0}function ce(q,Y,ee){Dn(()=>{if(typeof Y=="number"){Y&&(B.go?B.go(Y):console.warn("Router integration does not support relative routing"));return}const{replace:K,resolve:ae,scroll:pe,state:$e}={replace:!1,resolve:!0,scroll:!0,...ee},Oe=ae?q.resolvePath(Y):Hs("",Y);if(Oe===void 0)throw new Error(`Path '${Y}' is not a routable path`);if(ye.length>=EL)throw new Error("Too many redirects");const Ae=x();if(Oe!==Ae||$e!==me()){const Re=ye.push({value:Ae,replace:K,scroll:pe,state:me});ue(()=>{se(Oe),fe($e)}).then(()=>{ye.length===Re&&be({value:Oe,state:$e})})}})}function ne(q){return q=q||Vu(Js)||ve,(Y,ee)=>ce(q,Y,ee)}function be(q){const Y=ye[0];Y&&((q.value!==Y.value||q.state!==Y.state)&&_({...q,replace:Y.replace,scroll:Y.scroll}),ye.length=0)}zt(()=>{const{value:q,state:Y}=A();q!==Dn(x)&&ue(()=>{se(q),fe(Y)})});{let q=function(Y){if(Y.defaultPrevented||Y.button!==0||Y.metaKey||Y.altKey||Y.ctrlKey||Y.shiftKey)return;const ee=Y.composedPath().find(Le=>Le instanceof Node&&Le.nodeName.toUpperCase()==="A");if(!ee)return;const K=ee instanceof SVGAElement,ae=K?ee.href.baseVal:ee.href;if((K?ee.target.baseVal:ee.target)||!ae&&!ee.hasAttribute("state"))return;const $e=(ee.getAttribute("rel")||"").split(/\s+/);if(ee.hasAttribute("download")||$e&&$e.includes("external"))return;const Oe=K?new URL(ae,document.baseURI):new URL(ae);if(Oe.origin!==window.location.origin||V&&Oe.pathname&&!Oe.pathname.toLowerCase().startsWith(V.toLowerCase()))return;const Ae=O(Oe.pathname+Oe.search+Oe.hash),Re=ee.getAttribute("state");Y.preventDefault(),ce(ve,Ae,{resolve:!1,replace:ee.hasAttribute("replace"),scroll:!ee.hasAttribute("noscroll"),state:Re&&JSON.parse(Re)})};var X=q;document.addEventListener("click",q),I0(()=>document.removeEventListener("click",q))}return{base:ve,out:ie,location:re,isRouting:he,renderPath:P,parsePath:O,navigatorFactory:ne}}function RL(y,w,S,I){const{base:A,location:_,navigatorFactory:B}=y,{pattern:O,element:P,preload:V,data:ie}=I().route,he=Vt(()=>I().path),ue=M0(()=>I().params);V&&V();const x={parent:w,pattern:O,get child(){return S()},path:he,params:ue,data:w.data,outlet:P,resolvePath(se){return Hs(A.path(),se,he())}};if(ie)try{Ha=x,x.data=ie({data:w.data,params:ue,location:_,navigate:B(x)})}finally{Ha=void 0}return x}const LL=$r("<a></a>"),NL=y=>{const{source:w,url:S,base:I,data:A,out:_}=y,B=w||bL(),O=PL(B,I,A);return We(H0.Provider,{value:O,get children(){return y.children}})},FL=y=>{const w=Yu(),S=Zu(),I=Vt(()=>W0(y.children,q0(S.pattern,y.base||""),BL)),A=Vt(()=>IL(I(),w.location.pathname));w.out&&w.out.matches.push(A().map(({route:P,path:V,params:ie})=>({originalPath:P.originalPath,pattern:P.pattern,path:V,params:ie})));const _=[];let B;const O=Vt(C0(A,(P,V,ie)=>{let he=V&&P.length===V.length;const ue=[];for(let x=0,se=P.length;x<se;x++){const me=V&&V[x],fe=P[x];ie&&me&&fe.route.pattern===me.route.pattern?ue[x]=ie[x]:(he=!1,_[x]&&_[x](),_0(re=>{_[x]=re,ue[x]=RL(w,ue[x-1]||S,()=>O()[x+1],()=>A()[x])}))}return _.splice(P.length).forEach(x=>x()),ie&&he?ie:(B=ue[0],ue)}));return We(U0,{get when(){return O()&&B},children:P=>We(Js.Provider,{value:P,get children(){return P.outlet()}})})},Uu=y=>y,BL=()=>{const y=Zu();return We(U0,{get when(){return y.child},children:w=>We(Js.Provider,{value:w,get children(){return w.outlet()}})})};function DL(y){const[,w]=YR(y,["children","to","href","state"]),S=_L(()=>y.to);return(()=>{const I=LL.cloneNode(!0);return pL(I,w,!1,!0),gt(I,()=>y.children),zt(A=>{const _=S()||y.href,B=JSON.stringify(y.state);return _!==A._v$&&fr(I,"href",A._v$=_),B!==A._v$2&&fr(I,"state",A._v$2=B),A},{_v$:void 0,_v$2:void 0}),I})()}function Ms(y){const w=OL(()=>y.href);return We(DL,JR(y,{get to(){return w()}}))}const zL="_header_1j9za_1",UL="_headerTitle_1j9za_33";var A0={header:zL,headerTitle:UL},qL="/assets/logo.e31ee2dc.png";const ML=$r('<div><a style="text-decoration: none; color: #979797; padding-right: 30px; padding-top: 14px;" href="/"><img alt="GCP logo" width="30px" height="30px" style="padding-right: 10px; padding-left: 10px;"><span>Apigee Service API Portal</span></a></div>'),HL=()=>(()=>{const y=ML.cloneNode(!0),w=y.firstChild,S=w.firstChild,I=S.nextSibling;return fr(S,"src",qL),zt(A=>{const _=A0.header,B=A0.headerTitle;return _!==A._v$&&(y.className=A._v$=_),B!==A._v$2&&(I.className=A._v$2=B),A},{_v$:void 0,_v$2:void 0}),y})(),WL="_contentContainer_1wb29_1",VL="_side_1wb29_7",GL="_content_1wb29_1";var qu={contentContainer:WL,side:VL,content:GL};const KL="_sidenav_19ks5_1",JL="_addButton_19ks5_14",YL="_addIcon_19ks5_47",ZL="_addText_19ks5_53",QL="_appsButton_19ks5_59",XL="_appsButtonText_19ks5_84",e3="_appsIcon_19ks5_89",t3="_sectionHeader_19ks5_94",r3="_sectionHeaderText_19ks5_102",n3="_tree_19ks5_108",o3="_section_19ks5_94",a3="_treeLink_19ks5_167";var Ct={sidenav:KL,addButton:JL,addIcon:YL,addText:ZL,appsButton:QL,appsButtonText:XL,appsIcon:e3,sectionHeader:t3,sectionHeaderText:r3,tree:n3,section:o3,treeLink:a3},i3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZShDYBADEV7BFbA3w6wAIyAwcEyhFUQxwYQBoBJMAyAOFIFuJaE5MT/qk3a/9KKb0iovcz9s0/n1Uj2IvpZAAAAAFF8TomXDB79XTvbUNEtoj31BWzubCueVwG05irAF3OWKBFZ2VC9fr7VI9IUAABCAVxeUhcea3YoUAAAAABJRU5ErkJggg==",s3="/assets/dash-icon.db255ed5.svg";const l3=$r("<div><img><span>My Apps</span></div>"),c3=$r('<div><a><img><span>Create App</span></a><div><span>Service APIs</span></div><ul><li><input type="checkbox" id="restAPIs"><label for="restAPIs">REST</label><ul><li><input type="checkbox" id="productAPI"><label for="productAPI"></label><ul><li></li></ul></li><li>Shipping API</li></ul></li><li><input type="checkbox" id="grpcAPIs"><label for="grpcAPIs">gRPC</label><ul><li></li><li>Shipping API</li></ul></li></ul></div>'),p3=()=>(()=>{const y=c3.cloneNode(!0),w=y.firstChild,S=w.firstChild,I=S.nextSibling,A=w.nextSibling,_=A.firstChild,B=A.nextSibling,O=B.firstChild,P=O.firstChild,V=P.nextSibling,ie=V.nextSibling,he=ie.firstChild,ue=he.firstChild,x=ue.nextSibling,se=x.nextSibling,me=se.firstChild,fe=O.nextSibling,re=fe.firstChild,ye=re.nextSibling,ve=ye.nextSibling,ce=ve.firstChild;return fr(S,"src",i3),gt(y,We(Ms,{href:"/apps",get class(){return Ct.treeLink},get children(){const ne=l3.cloneNode(!0),be=ne.firstChild,X=be.nextSibling;return fr(be,"src",s3),zt(q=>{const Y=Ct.appsButton,ee=Ct.appsIcon,K=Ct.appsButtonText;return Y!==q._v$&&(ne.className=q._v$=Y),ee!==q._v$2&&(be.className=q._v$2=ee),K!==q._v$3&&(X.className=q._v$3=K),q},{_v$:void 0,_v$2:void 0,_v$3:void 0}),ne}}),A),gt(x,We(Ms,{href:"/apis/products",get class(){return Ct.treeLink},children:"Product Catalog API"})),gt(me,We(Ms,{href:"/apis/products#post-/pet/-petId-/uploadImage",get class(){return Ct.treeLink},children:"uploadImage"})),gt(ce,We(Ms,{href:"/apis/shipping",get class(){return Ct.treeLink},children:"Product Shipping Protobuf"})),zt(ne=>{const be=Ct.sidenav,X=Ct.addButton,q=Ct.addIcon,Y=Ct.addText,ee=Ct.sectionHeader,K=Ct.sectionHeaderText,ae=Ct.tree,pe=Ct.section,$e=Ct.treeLink,Oe=Ct.section,Ae=Ct.section,Re=Ct.treeLink;return be!==ne._v$4&&(y.className=ne._v$4=be),X!==ne._v$5&&(w.className=ne._v$5=X),q!==ne._v$6&&(S.className=ne._v$6=q),Y!==ne._v$7&&(I.className=ne._v$7=Y),ee!==ne._v$8&&(A.className=ne._v$8=ee),K!==ne._v$9&&(_.className=ne._v$9=K),ae!==ne._v$10&&(B.className=ne._v$10=ae),pe!==ne._v$11&&(O.className=ne._v$11=pe),$e!==ne._v$12&&(V.className=ne._v$12=$e),Oe!==ne._v$13&&(he.className=ne._v$13=Oe),Ae!==ne._v$14&&(fe.className=ne._v$14=Ae),Re!==ne._v$15&&(ye.className=ne._v$15=Re),ne},{_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0}),y})(),u3="_docFrame_e2cm2_1",d3="_docFlexbox_e2cm2_12",h3="_breadcrumbs_e2cm2_19",f3="_crumb_e2cm2_29",m3="_cardFlexbox_e2cm2_33",g3="_headerText_e2cm2_40",y3="_bookmarkIcon_e2cm2_49",v3="_normalText_e2cm2_63";var xr={docFrame:u3,docFlexbox:d3,breadcrumbs:h3,crumb:f3,cardFlexbox:m3,headerText:g3,bookmarkIcon:y3,normalText:v3};const b3="_cardContainer_18o1y_1",x3="_cardIcon_18o1y_18",w3="_cardText_18o1y_24",$3="_cardTitle_18o1y_29",S3="_cardSubtitle_18o1y_33",k3="_cardDivider_18o1y_37",A3="_cardFooter_18o1y_47",E3="_cardBlock_18o1y_54",O3="_cardFunction_18o1y_68";var Ba={cardContainer:b3,cardIcon:x3,cardText:w3,cardTitle:$3,cardSubtitle:S3,cardDivider:k3,cardFooter:A3,cardBlock:E3,cardFunction:O3};const _3=$r('<div><div><img style="width: 27px;"></div><div><div></div><div></div></div></div>'),Da=y=>(()=>{const w=_3.cloneNode(!0),S=w.firstChild,I=S.firstChild,A=S.nextSibling,_=A.firstChild,B=_.nextSibling;return gt(_,()=>y.title),gt(B,()=>y.subtitle),zt(O=>{const P=Ba.cardContainer,V=Ba.cardIcon,ie=y.icon,he=Ba.cardText,ue=Ba.cardTitle,x=Ba.cardSubtitle;return P!==O._v$&&(w.className=O._v$=P),V!==O._v$2&&(S.className=O._v$2=V),ie!==O._v$3&&fr(I,"src",O._v$3=ie),he!==O._v$4&&(A.className=O._v$4=he),ue!==O._v$5&&(_.className=O._v$5=ue),x!==O._v$6&&(B.className=O._v$6=x),O},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),w})();var V0="/assets/icon-bookmark.4a7c0abf.svg",T3="/assets/icon-clock.1dc46bb4.svg",C3="/assets/icon-code.2f6c41cf.svg",I3="/assets/icon-doc.e9ee2727.svg",j3="/assets/icon-collection.7d4f861e.svg",P3="/assets/icon-help.06cb8dcc.svg";const R3=$r("<div><div><span>Apigee Service API Portal</span><span>&gt</span><span>Documentation</span><span>&gt</span><span>Getting Started</span></div><div>Service APIs Documentation<div><img></div></div><div>You have data, you have services, and you want to develop new business solutions quickly, both internally and externally. With Apigee, you can build API proxies\u2014RESTful, HTTP-based APIs that interact with your services. With easy-to-use APIs, developers can be more productive, increasing your speed to market.</div><div></div></div>"),L3=()=>(()=>{const y=R3.cloneNode(!0),w=y.firstChild,S=w.firstChild,I=S.nextSibling,A=I.nextSibling,_=A.nextSibling,B=_.nextSibling,O=w.nextSibling,P=O.firstChild,V=P.nextSibling,ie=V.firstChild,he=O.nextSibling,ue=he.nextSibling;return fr(ie,"src",V0),gt(ue,We(Da,{title:"Quickstarts",subtitle:"Learn in 5 minutes",icon:T3}),null),gt(ue,We(Da,{title:"APIs & Reference",subtitle:"APIs, Console, and command-line",icon:C3}),null),gt(ue,We(Da,{title:"How-to Guides",subtitle:"Learn a task",icon:I3}),null),gt(ue,We(Da,{title:"Resources",subtitle:"Pricing, quotas, and release notes",icon:j3}),null),gt(ue,We(Da,{title:"Support",subtitle:"Get assistance with issues",icon:P3}),null),zt(x=>{const se=xr.docFrame,me=xr.breadcrumbs,fe=xr.crumb,re=xr.crumb,ye=xr.crumb,ve=xr.crumb,ce=xr.crumb,ne=xr.headerText,be=xr.bookmarkIcon,X=xr.normalText,q=xr.docFlexbox;return se!==x._v$&&(y.className=x._v$=se),me!==x._v$2&&(w.className=x._v$2=me),fe!==x._v$3&&(S.className=x._v$3=fe),re!==x._v$4&&(I.className=x._v$4=re),ye!==x._v$5&&(A.className=x._v$5=ye),ve!==x._v$6&&(_.className=x._v$6=ve),ce!==x._v$7&&(B.className=x._v$7=ce),ne!==x._v$8&&(O.className=x._v$8=ne),be!==x._v$9&&(V.className=x._v$9=be),X!==x._v$10&&(he.className=x._v$10=X),q!==x._v$11&&(ue.className=x._v$11=q),x},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0}),y})(),N3="_cardFlexbox_j5k2c_2",F3="_headerText_j5k2c_9";var E0={cardFlexbox:N3,headerText:F3};const B3="_cardContainer_19unv_1",D3="_cardTopBar_19unv_14",z3="_cardTitle_19unv_19",U3="_cardDivider_19unv_26",q3="_cardFooter_19unv_36",M3="_cardBlock_19unv_43",H3="_cardFunction_19unv_57";var Kt={cardContainer:B3,cardTopBar:D3,cardTitle:z3,cardDivider:U3,cardFooter:q3,cardBlock:M3,cardFunction:H3},W3="/assets/icon-open.b42dd186.svg",V3="/assets/icon-share.e069999c.svg",G3="/assets/icon-delete.19032651.svg";const K3=$r('<div><div></div><div></div><div></div><div style="display: flex; margin-left: 20px; font-size: 14px; color: #979797"><div style="">Key:<br>Secret:</div><div style="margin-left: 10px">**************************<br>**************************</div></div><div></div><div><div><img><span>Edit app</span></div><div><img><span>Share app</span></div><div><img><span>Delete app</span></div></div></div>'),za=y=>(()=>{const w=K3.cloneNode(!0),S=w.firstChild,I=S.nextSibling,A=I.nextSibling,_=A.nextSibling,B=_.nextSibling,O=B.nextSibling,P=O.firstChild,V=P.firstChild,ie=V.nextSibling,he=P.nextSibling,ue=he.firstChild,x=ue.nextSibling,se=he.nextSibling,me=se.firstChild,fe=me.nextSibling;return gt(I,()=>y.title),fr(V,"src",W3),fr(ue,"src",V3),fr(me,"src",G3),zt(re=>{const ye=Kt.cardContainer,ve=Kt.cardTopBar,ce=Kt.cardTitle,ne=Kt.cardDivider,be=Kt.cardDivider,X=Kt.cardFooter,q=Kt.cardBlock,Y=Kt.appsIcon,ee=Kt.cardFunction,K=Kt.cardBlock,ae=Kt.appsIcon,pe=Kt.cardFunction,$e=Kt.cardBlock,Oe=Kt.appsIcon,Ae=Kt.cardFunction;return ye!==re._v$&&(w.className=re._v$=ye),ve!==re._v$2&&(S.className=re._v$2=ve),ce!==re._v$3&&(I.className=re._v$3=ce),ne!==re._v$4&&(A.className=re._v$4=ne),be!==re._v$5&&(B.className=re._v$5=be),X!==re._v$6&&(O.className=re._v$6=X),q!==re._v$7&&(P.className=re._v$7=q),Y!==re._v$8&&(V.className=re._v$8=Y),ee!==re._v$9&&(ie.className=re._v$9=ee),K!==re._v$10&&(he.className=re._v$10=K),ae!==re._v$11&&(ue.className=re._v$11=ae),pe!==re._v$12&&(x.className=re._v$12=pe),$e!==re._v$13&&(se.className=re._v$13=$e),Oe!==re._v$14&&(me.className=re._v$14=Oe),Ae!==re._v$15&&(fe.className=re._v$15=Ae),re},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0}),w})(),J3=$r("<div><div>5 apps</div><div></div></div>"),Y3=()=>(()=>{const y=J3.cloneNode(!0),w=y.firstChild,S=w.nextSibling;return gt(S,We(za,{title:"Mobile App 1"}),null),gt(S,We(za,{title:"Partner App 1"}),null),gt(S,We(za,{title:"Internal Test App"}),null),gt(S,We(za,{title:"Mobile App 2"}),null),gt(S,We(za,{title:"Ecosystem App 1"}),null),zt(I=>{const A=E0.headerText,_=E0.cardFlexbox;return A!==I._v$&&(w.className=I._v$=A),_!==I._v$2&&(S.className=I._v$2=_),I},{_v$:void 0,_v$2:void 0}),y})(),Z3="_docView_1ufu5_1",Q3="_docFrame_1ufu5_6",X3="_docFlexbox_1ufu5_17",eN="_breadcrumbs_1ufu5_24",tN="_crumb_1ufu5_34",rN="_cardFlexbox_1ufu5_38",nN="_headerText_1ufu5_45",oN="_bookmarkIcon_1ufu5_54",aN="_normalText_1ufu5_68";var wr={docView:Z3,docFrame:Q3,docFlexbox:X3,breadcrumbs:eN,crumb:tN,cardFlexbox:rN,headerText:nN,bookmarkIcon:oN,normalText:aN};/*! RapiDoc 9.2.0 | Author - Mrinmoy Majumdar | License information can be found in rapidoc-min.js.LICENSE.txt  */(()=>{var y,w,S={448:(_,B,O)=>{const P=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),ie=new Map;class he{constructor(t,r){if(this._$cssResult$=!0,r!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=ie.get(this.cssText);return P&&t===void 0&&(ie.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const ue=e=>new he(typeof e=="string"?e:e+"",V),x=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new he(r,V)},se=P?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return ue(r)})(e):e;var me;const fe=window.trustedTypes,re=fe?fe.emptyScript:"",ye=window.reactiveElementPolyfillSupport,ve={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ce=(e,t)=>t!==e&&(t==t||e==e),ne={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:ce};class be extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var r;(r=this.l)!==null&&r!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Eh(n,r);o!==void 0&&(this._$Eu.set(o,n),t.push(o))}),t}static createProperty(t,r=ne){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ne}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(se(o))}else t!==void 0&&r.push(se(t));return r}static _$Eh(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$Eg)!==null&&r!==void 0?r:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$Eg)===null||r===void 0||r.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Et.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((n,o)=>{P?n.adoptedStyleSheets=o.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet):o.forEach(a=>{const i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=a.cssText,n.appendChild(i)})})(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ES(t,r,n=ne){var o,a;const i=this.constructor._$Eh(t,n);if(i!==void 0&&n.reflect===!0){const s=((a=(o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&a!==void 0?a:ve.toAttribute)(r,n.type);this._$Ei=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Ei=null}}_$AK(t,r){var n,o,a;const i=this.constructor,s=i._$Eu.get(t);if(s!==void 0&&this._$Ei!==s){const l=i.getPropertyOptions(s),c=l.converter,d=(a=(o=(n=c)===null||n===void 0?void 0:n.fromAttribute)!==null&&o!==void 0?o:typeof c=="function"?c:null)!==null&&a!==void 0?a:ve.fromAttribute;this._$Ei=s,this[s]=d(r,l.type),this._$Ei=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ce)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,a)=>this[a]=o),this._$Et=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$Eg)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$EU()}catch(o){throw r=!1,this._$EU(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$Eg)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$ES(n,this[n],r)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var X;be.finalized=!0,be.elementProperties=new Map,be.elementStyles=[],be.shadowRootOptions={mode:"open"},ye?.({ReactiveElement:be}),((me=globalThis.reactiveElementVersions)!==null&&me!==void 0?me:globalThis.reactiveElementVersions=[]).push("1.3.0");const q=globalThis.trustedTypes,Y=q?q.createPolicy("lit-html",{createHTML:e=>e}):void 0,ee=`lit$${(Math.random()+"").slice(9)}$`,K="?"+ee,ae=`<${K}>`,pe=document,$e=(e="")=>pe.createComment(e),Oe=e=>e===null||typeof e!="object"&&typeof e!="function",Ae=Array.isArray,Re=e=>{var t;return Ae(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,ct=/>/g,Pe=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Ue=/'/g,De=/"/g,Qe=/^(?:script|style|textarea|title)$/i,Ke=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),v=Ke(1),ze=Symbol.for("lit-noChange"),Ie=Symbol.for("lit-nothing"),It=new WeakMap,pt=pe.createTreeWalker(pe,129,null,!1),Ut=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",i=Le;for(let l=0;l<r;l++){const c=e[l];let d,u,f=-1,m=0;for(;m<c.length&&(i.lastIndex=m,u=i.exec(c),u!==null);)m=i.lastIndex,i===Le?u[1]==="!--"?i=tt:u[1]!==void 0?i=ct:u[2]!==void 0?(Qe.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=Pe):u[3]!==void 0&&(i=Pe):i===Pe?u[0]===">"?(i=o??Le,f=-1):u[1]===void 0?f=-2:(f=i.lastIndex-u[2].length,d=u[1],i=u[3]===void 0?Pe:u[3]==='"'?De:Ue):i===De||i===Ue?i=Pe:i===tt||i===ct?i=Le:(i=Pe,o=void 0);const $=i===Pe&&e[l+1].startsWith("/>")?" ":"";a+=i===Le?c+ae:f>=0?(n.push(d),c.slice(0,f)+"$lit$"+c.slice(f)+ee+$):c+ee+(f===-2?(n.push(void 0),l):$)}const s=a+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Y!==void 0?Y.createHTML(s):s,n]};class ot{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,i=0;const s=t.length-1,l=this.parts,[c,d]=Ut(t,r);if(this.el=ot.createElement(c,n),pt.currentNode=this.el.content,r===2){const u=this.el.content,f=u.firstChild;f.remove(),u.append(...f.childNodes)}for(;(o=pt.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const f of o.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(ee)){const m=d[i++];if(u.push(f),m!==void 0){const $=o.getAttribute(m.toLowerCase()+"$lit$").split(ee),C=/([.?@])?(.*)/.exec(m);l.push({type:1,index:a,name:C[2],strings:$,ctor:C[1]==="."?Sr:C[1]==="?"?Io:C[1]==="@"?Ys:ir})}else l.push({type:6,index:a})}for(const f of u)o.removeAttribute(f)}if(Qe.test(o.tagName)){const u=o.textContent.split(ee),f=u.length-1;if(f>0){o.textContent=q?q.emptyScript:"";for(let m=0;m<f;m++)o.append(u[m],$e()),pt.nextNode(),l.push({type:2,index:++a});o.append(u[f],$e())}}}else if(o.nodeType===8)if(o.data===K)l.push({type:2,index:a});else{let u=-1;for(;(u=o.data.indexOf(ee,u+1))!==-1;)l.push({type:7,index:a}),u+=ee.length-1}a++}}static createElement(t,r){const n=pe.createElement("template");return n.innerHTML=t,n}}function yt(e,t,r=e,n){var o,a,i,s;if(t===ze)return t;let l=n!==void 0?(o=r._$Cl)===null||o===void 0?void 0:o[n]:r._$Cu;const c=Oe(t)?void 0:t._$litDirective$;return l?.constructor!==c&&((a=l?._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((i=(s=r)._$Cl)!==null&&i!==void 0?i:s._$Cl=[])[n]=l:r._$Cu=l),l!==void 0&&(t=yt(e,l._$AS(e,t.values),l,n)),t}class Un{constructor(t,r){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t?.creationScope)!==null&&r!==void 0?r:pe).importNode(n,!0);pt.currentNode=a;let i=pt.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new er(i,i.nextSibling,this,t):c.type===1?d=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(d=new kr(i,this,t)),this.v.push(d),c=o[++l]}s!==c?.index&&(i=pt.nextNode(),s++)}return a}m(t){let r=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class er{constructor(t,r,n,o){var a;this.type=2,this._$AH=Ie,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cg=(a=o?.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=yt(this,t,r),Oe(t)?t===Ie||t==null||t===""?(this._$AH!==Ie&&this._$AR(),this._$AH=Ie):t!==this._$AH&&t!==ze&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Re(t)?this.S(t):this.$(t)}A(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==Ie&&Oe(this._$AH)?this._$AA.nextSibling.data=t:this.k(pe.createTextNode(t)),this._$AH=t}T(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ot.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.m(n);else{const i=new Un(a,this),s=i.p(this.options);i.m(n),this.k(s),this._$AH=i}}_$AC(t){let r=It.get(t.strings);return r===void 0&&It.set(t.strings,r=new ot(t)),r}S(t){Ae(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new er(this.A($e()),this.A($e()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cg=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class ir{constructor(t,r,n,o,a){this.type=1,this._$AH=Ie,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ie}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let i=!1;if(a===void 0)t=yt(this,t,r,0),i=!Oe(t)||t!==this._$AH&&t!==ze,i&&(this._$AH=t);else{const s=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=yt(this,s[n+l],r,l),c===ze&&(c=this._$AH[l]),i||(i=!Oe(c)||c!==this._$AH[l]),c===Ie?t=Ie:t!==Ie&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}i&&!o&&this.C(t)}C(t){t===Ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Sr extends ir{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===Ie?void 0:t}}const sr=q?q.emptyScript:"";class Io extends ir{constructor(){super(...arguments),this.type=4}C(t){t&&t!==Ie?this.element.setAttribute(this.name,sr):this.element.removeAttribute(this.name)}}class Ys extends ir{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=yt(this,t,r,0))!==null&&n!==void 0?n:Ie)===ze)return;const o=this._$AH,a=t===Ie&&o!==Ie||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==Ie&&(o===Ie||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class kr{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){yt(this,t)}}const Ga=window.litHtmlPolyfillSupport;var p,g;Ga?.(ot,er),((X=globalThis.litHtmlVersions)!==null&&X!==void 0?X:globalThis.litHtmlVersions=[]).push("2.2.0");class b extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((n,o,a)=>{var i,s;const l=(i=a?.renderBefore)!==null&&i!==void 0?i:o;let c=l._$litPart$;if(c===void 0){const d=(s=a?.renderBefore)!==null&&s!==void 0?s:null;l._$litPart$=c=new er(o.insertBefore($e(),d),d,void 0,a??{})}return c._$AI(n),c})(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return ze}}b.finalized=!0,b._$litElement$=!0,(p=globalThis.litElementHydrateSupport)===null||p===void 0||p.call(globalThis,{LitElement:b});const z=globalThis.litElementPolyfillSupport;z?.({LitElement:b});function H(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}((g=globalThis.litElementVersions)!==null&&g!==void 0?g:globalThis.litElementVersions=[]).push("3.2.0");let G={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const de=/[&<>"']/,Ne=/[&<>"']/g,qe=/[<>"']|&(?!#?\w+;)/,ft=/[<>"']|&(?!#?\w+;)/g,Je={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},mt=e=>Je[e];function jt(e,t){if(t){if(de.test(e))return e.replace(Ne,mt)}else if(qe.test(e))return e.replace(ft,mt);return e}const G0=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Qu(e){return e.replace(G0,(t,r)=>(r=r.toLowerCase())==="colon"?":":r.charAt(0)==="#"?r.charAt(1)==="x"?String.fromCharCode(parseInt(r.substring(2),16)):String.fromCharCode(+r.substring(1)):"")}const K0=/(^|[^\[])\^/g;function it(e,t){e=e.source||e,t=t||"";const r={replace:(n,o)=>(o=(o=o.source||o).replace(K0,"$1"),e=e.replace(n,o),r),getRegex:()=>new RegExp(e,t)};return r}const J0=/[^\w:]/g,Y0=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Xu(e,t,r){if(e){let n;try{n=decodeURIComponent(Qu(r)).replace(J0,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}t&&!Y0.test(r)&&(r=function(n,o){Ka[" "+n]||(Z0.test(n)?Ka[" "+n]=n+"/":Ka[" "+n]=Ya(n,"/",!0));const a=(n=Ka[" "+n]).indexOf(":")===-1;return o.substring(0,2)==="//"?a?o:n.replace(Q0,"$1")+o:o.charAt(0)==="/"?a?o:n.replace(X0,"$1")+o:n+o}(t,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const Ka={},Z0=/^[^:]+:\/*[^/]*$/,Q0=/^([^:]+:)[\s\S]*$/,X0=/^([^:]+:\/*[^/]*)[\s\S]*$/,Ja={exec:function(){}};function mr(e){let t,r,n=1;for(;n<arguments.length;n++)for(r in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function ed(e,t){const r=e.replace(/\|/g,(o,a,i)=>{let s=!1,l=a;for(;--l>=0&&i[l]==="\\";)s=!s;return s?"|":" |"}).split(/ \|/);let n=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|");return r}function Ya(e,t,r){const n=e.length;if(n===0)return"";let o=0;for(;o<n;){const a=e.charAt(n-o-1);if(a!==t||r){if(a===t||!r)break;o++}else o++}return e.substr(0,n-o)}function td(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function rd(e,t){if(t<1)return"";let r="";for(;t>1;)1&t&&(r+=e),t>>=1,e+=e;return r+e}function nd(e,t,r,n){const o=t.href,a=t.title?jt(t.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){n.state.inLink=!0;const s={type:"link",raw:r,href:o,title:a,text:i,tokens:n.inlineTokens(i,[])};return n.state.inLink=!1,s}return{type:"image",raw:r,href:o,title:a,text:jt(i)}}class Zs{constructor(t){this.options=t||G}space(t){const r=this.rules.block.newline.exec(t);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(t){const r=this.rules.block.code.exec(t);if(r){const n=r[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Ya(n,`
`)}}}fences(t){const r=this.rules.block.fences.exec(t);if(r){const n=r[0],o=function(a,i){const s=a.match(/^(\s+)(?:```)/);if(s===null)return i;const l=s[1];return i.split(`
`).map(c=>{const d=c.match(/^\s+/);if(d===null)return c;const[u]=d;return u.length>=l.length?c.slice(l.length):c}).join(`
`)}(n,r[3]||"");return{type:"code",raw:n,lang:r[2]?r[2].trim():r[2],text:o}}}heading(t){const r=this.rules.block.heading.exec(t);if(r){let n=r[2].trim();if(/#$/.test(n)){const a=Ya(n,"#");this.options.pedantic?n=a.trim():a&&!/ $/.test(a)||(n=a.trim())}const o={type:"heading",raw:r[0],depth:r[1].length,text:n,tokens:[]};return this.lexer.inline(o.text,o.tokens),o}}hr(t){const r=this.rules.block.hr.exec(t);if(r)return{type:"hr",raw:r[0]}}blockquote(t){const r=this.rules.block.blockquote.exec(t);if(r){const n=r[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:r[0],tokens:this.lexer.blockTokens(n,[]),text:n}}}list(t){let r=this.rules.block.list.exec(t);if(r){let n,o,a,i,s,l,c,d,u,f,m,$,C=r[1].trim();const E=C.length>1,h={type:"list",raw:"",ordered:E,start:E?+C.slice(0,-1):"",loose:!1,items:[]};C=E?`\\d{1,9}\\${C.slice(-1)}`:`\\${C}`,this.options.pedantic&&(C=E?C:"[*+-]");const D=new RegExp(`^( {0,3}${C})((?: [^\\n]*)?(?:\\n|$))`);for(;t&&($=!1,r=D.exec(t))&&!this.rules.block.hr.test(t);){if(n=r[0],t=t.substring(n.length),d=r[2].split(`
`,1)[0],u=t.split(`
`,1)[0],this.options.pedantic?(i=2,m=d.trimLeft()):(i=r[2].search(/[^ ]/),i=i>4?1:i,m=d.slice(i),i+=r[1].length),l=!1,!d&&/^ *$/.test(u)&&(n+=u+`
`,t=t.substring(u.length+1),$=!0),!$){const M=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;t&&(f=t.split(`
`,1)[0],d=f,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!M.test(d));){if(d.search(/[^ ]/)>=i||!d.trim())m+=`
`+d.slice(i);else{if(l)break;m+=`
`+d}l||d.trim()||(l=!0),n+=f+`
`,t=t.substring(f.length+1)}}h.loose||(c?h.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(m),o&&(a=o[0]!=="[ ] ",m=m.replace(/^\[[ xX]\] +/,""))),h.items.push({type:"list_item",raw:n,task:!!o,checked:a,loose:!1,text:m}),h.raw+=n}h.items[h.items.length-1].raw=n.trimRight(),h.items[h.items.length-1].text=m.trimRight(),h.raw=h.raw.trimRight();const F=h.items.length;for(s=0;s<F;s++){this.lexer.state.top=!1,h.items[s].tokens=this.lexer.blockTokens(h.items[s].text,[]);const M=h.items[s].tokens.filter(N=>N.type==="space"),Z=M.every(N=>{const Q=N.raw.split("");let T=0;for(const L of Q)if(L===`
`&&(T+=1),T>1)return!0;return!1});!h.loose&&M.length&&Z&&(h.loose=!0,h.items[s].loose=!0)}return h}}html(t){const r=this.rules.block.html.exec(t);if(r){const n={type:"html",raw:r[0],pre:!this.options.sanitizer&&(r[1]==="pre"||r[1]==="script"||r[1]==="style"),text:r[0]};return this.options.sanitize&&(n.type="paragraph",n.text=this.options.sanitizer?this.options.sanitizer(r[0]):jt(r[0]),n.tokens=[],this.lexer.inline(n.text,n.tokens)),n}}def(t){const r=this.rules.block.def.exec(t);if(r)return r[3]&&(r[3]=r[3].substring(1,r[3].length-1)),{type:"def",tag:r[1].toLowerCase().replace(/\s+/g," "),raw:r[0],href:r[2],title:r[3]}}table(t){const r=this.rules.block.table.exec(t);if(r){const n={type:"table",header:ed(r[1]).map(o=>({text:o})),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:r[3]&&r[3].trim()?r[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=r[0];let o,a,i,s,l=n.align.length;for(o=0;o<l;o++)/^ *-+: *$/.test(n.align[o])?n.align[o]="right":/^ *:-+: *$/.test(n.align[o])?n.align[o]="center":/^ *:-+ *$/.test(n.align[o])?n.align[o]="left":n.align[o]=null;for(l=n.rows.length,o=0;o<l;o++)n.rows[o]=ed(n.rows[o],n.header.length).map(c=>({text:c}));for(l=n.header.length,a=0;a<l;a++)n.header[a].tokens=[],this.lexer.inlineTokens(n.header[a].text,n.header[a].tokens);for(l=n.rows.length,a=0;a<l;a++)for(s=n.rows[a],i=0;i<s.length;i++)s[i].tokens=[],this.lexer.inlineTokens(s[i].text,s[i].tokens);return n}}}lheading(t){const r=this.rules.block.lheading.exec(t);if(r){const n={type:"heading",raw:r[0],depth:r[2].charAt(0)==="="?1:2,text:r[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}paragraph(t){const r=this.rules.block.paragraph.exec(t);if(r){const n={type:"paragraph",raw:r[0],text:r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}text(t){const r=this.rules.block.text.exec(t);if(r){const n={type:"text",raw:r[0],text:r[0],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}escape(t){const r=this.rules.inline.escape.exec(t);if(r)return{type:"escape",raw:r[0],text:jt(r[1])}}tag(t){const r=this.rules.inline.tag.exec(t);if(r)return!this.lexer.state.inLink&&/^<a /i.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):jt(r[0]):r[0]}}link(t){const r=this.rules.inline.link.exec(t);if(r){const n=r[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const i=Ya(n.slice(0,-1),"\\");if((n.length-i.length)%2==0)return}else{const i=function(s,l){if(s.indexOf(l[1])===-1)return-1;const c=s.length;let d=0,u=0;for(;u<c;u++)if(s[u]==="\\")u++;else if(s[u]===l[0])d++;else if(s[u]===l[1]&&(d--,d<0))return u;return-1}(r[2],"()");if(i>-1){const s=(r[0].indexOf("!")===0?5:4)+r[1].length+i;r[2]=r[2].substring(0,i),r[0]=r[0].substring(0,s).trim(),r[3]=""}}let o=r[2],a="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);i&&(o=i[1],a=i[3])}else a=r[3]?r[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(o=this.options.pedantic&&!/>$/.test(n)?o.slice(1):o.slice(1,-1)),nd(r,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},r[0],this.lexer)}}reflink(t,r){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let o=(n[2]||n[1]).replace(/\s+/g," ");if(o=r[o.toLowerCase()],!o||!o.href){const a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return nd(n,o,n[0],this.lexer)}}emStrong(t,r,n=""){let o=this.rules.inline.emStrong.lDelim.exec(t);if(!o||o[3]&&n.match(/[\p{L}\p{N}]/u))return;const a=o[1]||o[2]||"";if(!a||a&&(n===""||this.rules.inline.punctuation.exec(n))){const i=o[0].length-1;let s,l,c=i,d=0;const u=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(u.lastIndex=0,r=r.slice(-1*t.length+i);(o=u.exec(r))!=null;){if(s=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!s)continue;if(l=s.length,o[3]||o[4]){c+=l;continue}if((o[5]||o[6])&&i%3&&!((i+l)%3)){d+=l;continue}if(c-=l,c>0)continue;if(l=Math.min(l,l+c+d),Math.min(i,l)%2){const m=t.slice(1,i+o.index+l);return{type:"em",raw:t.slice(0,i+o.index+l+1),text:m,tokens:this.lexer.inlineTokens(m,[])}}const f=t.slice(2,i+o.index+l-1);return{type:"strong",raw:t.slice(0,i+o.index+l+1),text:f,tokens:this.lexer.inlineTokens(f,[])}}}}codespan(t){const r=this.rules.inline.code.exec(t);if(r){let n=r[2].replace(/\n/g," ");const o=/[^ ]/.test(n),a=/^ /.test(n)&&/ $/.test(n);return o&&a&&(n=n.substring(1,n.length-1)),n=jt(n,!0),{type:"codespan",raw:r[0],text:n}}}br(t){const r=this.rules.inline.br.exec(t);if(r)return{type:"br",raw:r[0]}}del(t){const r=this.rules.inline.del.exec(t);if(r)return{type:"del",raw:r[0],text:r[2],tokens:this.lexer.inlineTokens(r[2],[])}}autolink(t,r){const n=this.rules.inline.autolink.exec(t);if(n){let o,a;return n[2]==="@"?(o=jt(this.options.mangle?r(n[1]):n[1]),a="mailto:"+o):(o=jt(n[1]),a=o),{type:"link",raw:n[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}url(t,r){let n;if(n=this.rules.inline.url.exec(t)){let o,a;if(n[2]==="@")o=jt(this.options.mangle?r(n[0]):n[0]),a="mailto:"+o;else{let i;do i=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(i!==n[0]);o=jt(n[0]),a=n[1]==="www."?"http://"+o:o}return{type:"link",raw:n[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(t,r){const n=this.rules.inline.text.exec(t);if(n){let o;return o=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):jt(n[0]):n[0]:jt(this.options.smartypants?r(n[0]):n[0]),{type:"text",raw:n[0],text:o}}}}const je={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Ja,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};je.def=it(je.def).replace("label",je._label).replace("title",je._title).getRegex(),je.bullet=/(?:[*+-]|\d{1,9}[.)])/,je.listItemStart=it(/^( *)(bull) */).replace("bull",je.bullet).getRegex(),je.list=it(je.list).replace(/bull/g,je.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+je.def.source+")").getRegex(),je._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",je._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,je.html=it(je.html,"i").replace("comment",je._comment).replace("tag",je._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),je.paragraph=it(je._paragraph).replace("hr",je.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",je._tag).getRegex(),je.blockquote=it(je.blockquote).replace("paragraph",je.paragraph).getRegex(),je.normal=mr({},je),je.gfm=mr({},je.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),je.gfm.table=it(je.gfm.table).replace("hr",je.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",je._tag).getRegex(),je.gfm.paragraph=it(je._paragraph).replace("hr",je.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",je.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",je._tag).getRegex(),je.pedantic=mr({},je.normal,{html:it(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",je._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ja,paragraph:it(je.normal._paragraph).replace("hr",je.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",je.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const ke={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ja,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ja,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function ex(e){return e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function od(e){let t,r,n="";const o=e.length;for(t=0;t<o;t++)r=e.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),n+="&#"+r+";";return n}ke._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",ke.punctuation=it(ke.punctuation).replace(/punctuation/g,ke._punctuation).getRegex(),ke.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,ke.escapedEmSt=/\\\*|\\_/g,ke._comment=it(je._comment).replace("(?:-->|$)","-->").getRegex(),ke.emStrong.lDelim=it(ke.emStrong.lDelim).replace(/punct/g,ke._punctuation).getRegex(),ke.emStrong.rDelimAst=it(ke.emStrong.rDelimAst,"g").replace(/punct/g,ke._punctuation).getRegex(),ke.emStrong.rDelimUnd=it(ke.emStrong.rDelimUnd,"g").replace(/punct/g,ke._punctuation).getRegex(),ke._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,ke._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,ke._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,ke.autolink=it(ke.autolink).replace("scheme",ke._scheme).replace("email",ke._email).getRegex(),ke._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,ke.tag=it(ke.tag).replace("comment",ke._comment).replace("attribute",ke._attribute).getRegex(),ke._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ke._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,ke._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,ke.link=it(ke.link).replace("label",ke._label).replace("href",ke._href).replace("title",ke._title).getRegex(),ke.reflink=it(ke.reflink).replace("label",ke._label).replace("ref",je._label).getRegex(),ke.nolink=it(ke.nolink).replace("ref",je._label).getRegex(),ke.reflinkSearch=it(ke.reflinkSearch,"g").replace("reflink",ke.reflink).replace("nolink",ke.nolink).getRegex(),ke.normal=mr({},ke),ke.pedantic=mr({},ke.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:it(/^!?\[(label)\]\((.*?)\)/).replace("label",ke._label).getRegex(),reflink:it(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ke._label).getRegex()}),ke.gfm=mr({},ke.normal,{escape:it(ke.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),ke.gfm.url=it(ke.gfm.url,"i").replace("email",ke.gfm._extended_email).getRegex(),ke.breaks=mr({},ke.gfm,{br:it(ke.br).replace("{2,}","*").getRegex(),text:it(ke.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class Nr{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||G,this.options.tokenizer=this.options.tokenizer||new Zs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const r={block:je.normal,inline:ke.normal};this.options.pedantic?(r.block=je.pedantic,r.inline=ke.pedantic):this.options.gfm&&(r.block=je.gfm,this.options.breaks?r.inline=ke.breaks:r.inline=ke.gfm),this.tokenizer.rules=r}static get rules(){return{block:je,inline:ke}}static lex(t,r){return new Nr(r).lex(t)}static lexInline(t,r){return new Nr(r).inlineTokens(t)}lex(t){let r;for(t=t.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(t,this.tokens);r=this.inlineQueue.shift();)this.inlineTokens(r.src,r.tokens);return this.tokens}blockTokens(t,r=[]){let n,o,a,i;for(this.options.pedantic&&(t=t.replace(/^ +$/gm,""));t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(s=>!!(n=s.call({lexer:this},t,r))&&(t=t.substring(n.raw.length),r.push(n),!0))))if(n=this.tokenizer.space(t))t=t.substring(n.raw.length),n.raw.length===1&&r.length>0?r[r.length-1].raw+=`
`:r.push(n);else if(n=this.tokenizer.code(t))t=t.substring(n.raw.length),o=r[r.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?r.push(n):(o.raw+=`
`+n.raw,o.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(n=this.tokenizer.fences(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.heading(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.hr(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.blockquote(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.list(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.html(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.def(t))t=t.substring(n.raw.length),o=r[r.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(o.raw+=`
`+n.raw,o.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(n=this.tokenizer.table(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.lheading(t))t=t.substring(n.raw.length),r.push(n);else{if(a=t,this.options.extensions&&this.options.extensions.startBlock){let s=1/0;const l=t.slice(1);let c;this.options.extensions.startBlock.forEach(function(d){c=d.call({lexer:this},l),typeof c=="number"&&c>=0&&(s=Math.min(s,c))}),s<1/0&&s>=0&&(a=t.substring(0,s+1))}if(this.state.top&&(n=this.tokenizer.paragraph(a)))o=r[r.length-1],i&&o.type==="paragraph"?(o.raw+=`
`+n.raw,o.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):r.push(n),i=a.length!==t.length,t=t.substring(n.raw.length);else if(n=this.tokenizer.text(t))t=t.substring(n.raw.length),o=r[r.length-1],o&&o.type==="text"?(o.raw+=`
`+n.raw,o.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):r.push(n);else if(t){const s="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(s);break}throw new Error(s)}}return this.state.top=!0,r}inline(t,r){this.inlineQueue.push({src:t,tokens:r})}inlineTokens(t,r=[]){let n,o,a,i,s,l,c=t;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)d.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,i.index)+"["+rd("a",i[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,i.index)+"["+rd("a",i[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.escapedEmSt.exec(c))!=null;)c=c.slice(0,i.index)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;t;)if(s||(l=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>!!(n=d.call({lexer:this},t,r))&&(t=t.substring(n.raw.length),r.push(n),!0))))if(n=this.tokenizer.escape(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.tag(t))t=t.substring(n.raw.length),o=r[r.length-1],o&&n.type==="text"&&o.type==="text"?(o.raw+=n.raw,o.text+=n.text):r.push(n);else if(n=this.tokenizer.link(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(n.raw.length),o=r[r.length-1],o&&n.type==="text"&&o.type==="text"?(o.raw+=n.raw,o.text+=n.text):r.push(n);else if(n=this.tokenizer.emStrong(t,c,l))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.codespan(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.br(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.del(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.autolink(t,od))t=t.substring(n.raw.length),r.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(t,od))){if(a=t,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const u=t.slice(1);let f;this.options.extensions.startInline.forEach(function(m){f=m.call({lexer:this},u),typeof f=="number"&&f>=0&&(d=Math.min(d,f))}),d<1/0&&d>=0&&(a=t.substring(0,d+1))}if(n=this.tokenizer.inlineText(a,ex))t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(l=n.raw.slice(-1)),s=!0,o=r[r.length-1],o&&o.type==="text"?(o.raw+=n.raw,o.text+=n.text):r.push(n);else if(t){const d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}throw new Error(d)}}else t=t.substring(n.raw.length),r.push(n);return r}}class Qs{constructor(t){this.options=t||G}code(t,r,n){const o=(r||"").match(/\S*/)[0];if(this.options.highlight){const a=this.options.highlight(t,o);a!=null&&a!==t&&(n=!0,t=a)}return t=t.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+jt(o,!0)+'">'+(n?t:jt(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:jt(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
`+t+`</blockquote>
`}html(t){return t}heading(t,r,n,o){return this.options.headerIds?"<h"+r+' id="'+this.options.headerPrefix+o.slug(n)+'">'+t+"</h"+r+`>
`:"<h"+r+">"+t+"</h"+r+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,r,n){const o=r?"ol":"ul";return"<"+o+(r&&n!==1?' start="'+n+'"':"")+`>
`+t+"</"+o+`>
`}listitem(t){return"<li>"+t+`</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return"<p>"+t+`</p>
`}table(t,r){return r&&(r="<tbody>"+r+"</tbody>"),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow(t){return`<tr>
`+t+`</tr>
`}tablecell(t,r){const n=r.header?"th":"td";return(r.align?"<"+n+' align="'+r.align+'">':"<"+n+">")+t+"</"+n+`>
`}strong(t){return"<strong>"+t+"</strong>"}em(t){return"<em>"+t+"</em>"}codespan(t){return"<code>"+t+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return"<del>"+t+"</del>"}link(t,r,n){if((t=Xu(this.options.sanitize,this.options.baseUrl,t))===null)return n;let o='<a href="'+jt(t)+'"';return r&&(o+=' title="'+r+'"'),o+=">"+n+"</a>",o}image(t,r,n){if((t=Xu(this.options.sanitize,this.options.baseUrl,t))===null)return n;let o='<img src="'+t+'" alt="'+n+'"';return r&&(o+=' title="'+r+'"'),o+=this.options.xhtml?"/>":">",o}text(t){return t}}class ad{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,r,n){return""+n}image(t,r,n){return""+n}br(){return""}}class id{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,r){let n=t,o=0;if(this.seen.hasOwnProperty(n)){o=this.seen[t];do o++,n=t+"-"+o;while(this.seen.hasOwnProperty(n))}return r||(this.seen[t]=o,this.seen[n]=0),n}slug(t,r={}){const n=this.serialize(t);return this.getNextSafeSlug(n,r.dryrun)}}class Fr{constructor(t){this.options=t||G,this.options.renderer=this.options.renderer||new Qs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ad,this.slugger=new id}static parse(t,r){return new Fr(r).parse(t)}static parseInline(t,r){return new Fr(r).parseInline(t)}parse(t,r=!0){let n,o,a,i,s,l,c,d,u,f,m,$,C,E,h,D,F,M,Z,N="";const Q=t.length;for(n=0;n<Q;n++)if(f=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(Z=this.options.extensions.renderers[f.type].call({parser:this},f),Z!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type)))N+=Z||"";else switch(f.type){case"space":continue;case"hr":N+=this.renderer.hr();continue;case"heading":N+=this.renderer.heading(this.parseInline(f.tokens),f.depth,Qu(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue;case"code":N+=this.renderer.code(f.text,f.lang,f.escaped);continue;case"table":for(d="",c="",i=f.header.length,o=0;o<i;o++)c+=this.renderer.tablecell(this.parseInline(f.header[o].tokens),{header:!0,align:f.align[o]});for(d+=this.renderer.tablerow(c),u="",i=f.rows.length,o=0;o<i;o++){for(l=f.rows[o],c="",s=l.length,a=0;a<s;a++)c+=this.renderer.tablecell(this.parseInline(l[a].tokens),{header:!1,align:f.align[a]});u+=this.renderer.tablerow(c)}N+=this.renderer.table(d,u);continue;case"blockquote":u=this.parse(f.tokens),N+=this.renderer.blockquote(u);continue;case"list":for(m=f.ordered,$=f.start,C=f.loose,i=f.items.length,u="",o=0;o<i;o++)h=f.items[o],D=h.checked,F=h.task,E="",h.task&&(M=this.renderer.checkbox(D),C?h.tokens.length>0&&h.tokens[0].type==="paragraph"?(h.tokens[0].text=M+" "+h.tokens[0].text,h.tokens[0].tokens&&h.tokens[0].tokens.length>0&&h.tokens[0].tokens[0].type==="text"&&(h.tokens[0].tokens[0].text=M+" "+h.tokens[0].tokens[0].text)):h.tokens.unshift({type:"text",text:M}):E+=M),E+=this.parse(h.tokens,C),u+=this.renderer.listitem(E,F,D);N+=this.renderer.list(u,m,$);continue;case"html":N+=this.renderer.html(f.text);continue;case"paragraph":N+=this.renderer.paragraph(this.parseInline(f.tokens));continue;case"text":for(u=f.tokens?this.parseInline(f.tokens):f.text;n+1<Q&&t[n+1].type==="text";)f=t[++n],u+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);N+=r?this.renderer.paragraph(u):u;continue;default:{const T='Token with "'+f.type+'" type was not found.';if(this.options.silent)return void console.error(T);throw new Error(T)}}return N}parseInline(t,r){r=r||this.renderer;let n,o,a,i="";const s=t.length;for(n=0;n<s;n++)if(o=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(a=this.options.extensions.renderers[o.type].call({parser:this},o),a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)))i+=a||"";else switch(o.type){case"escape":i+=r.text(o.text);break;case"html":i+=r.html(o.text);break;case"link":i+=r.link(o.href,o.title,this.parseInline(o.tokens,r));break;case"image":i+=r.image(o.href,o.title,o.text);break;case"strong":i+=r.strong(this.parseInline(o.tokens,r));break;case"em":i+=r.em(this.parseInline(o.tokens,r));break;case"codespan":i+=r.codespan(o.text);break;case"br":i+=r.br();break;case"del":i+=r.del(this.parseInline(o.tokens,r));break;case"text":i+=r.text(o.text);break;default:{const l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}}return i}}function xe(e,t,r){if(e==null)throw new Error("marked(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(typeof t=="function"&&(r=t,t=null),td(t=mr({},xe.defaults,t||{})),r){const n=t.highlight;let o;try{o=Nr.lex(e,t)}catch(s){return r(s)}const a=function(s){let l;if(!s)try{t.walkTokens&&xe.walkTokens(o,t.walkTokens),l=Fr.parse(o,t)}catch(c){s=c}return t.highlight=n,s?r(s):r(null,l)};if(!n||n.length<3||(delete t.highlight,!o.length))return a();let i=0;return xe.walkTokens(o,function(s){s.type==="code"&&(i++,setTimeout(()=>{n(s.text,s.lang,function(l,c){if(l)return a(l);c!=null&&c!==s.text&&(s.text=c,s.escaped=!0),i--,i===0&&a()})},0))}),void(i===0&&a())}try{const n=Nr.lex(e,t);return t.walkTokens&&xe.walkTokens(n,t.walkTokens),Fr.parse(n,t)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+jt(n.message+"",!0)+"</pre>";throw n}}xe.options=xe.setOptions=function(e){var t;return mr(xe.defaults,e),t=xe.defaults,G=t,xe},xe.getDefaults=H,xe.defaults=G,xe.use=function(...e){const t=mr({},...e),r=xe.defaults.extensions||{renderers:{},childTokens:{}};let n;e.forEach(o=>{if(o.extensions&&(n=!0,o.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const i=r.renderers?r.renderers[a.name]:null;r.renderers[a.name]=i?function(...s){let l=a.renderer.apply(this,s);return l===!1&&(l=i.apply(this,s)),l}:a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");r[a.level]?r[a.level].unshift(a.tokenizer):r[a.level]=[a.tokenizer],a.start&&(a.level==="block"?r.startBlock?r.startBlock.push(a.start):r.startBlock=[a.start]:a.level==="inline"&&(r.startInline?r.startInline.push(a.start):r.startInline=[a.start]))}a.childTokens&&(r.childTokens[a.name]=a.childTokens)})),o.renderer){const a=xe.defaults.renderer||new Qs;for(const i in o.renderer){const s=a[i];a[i]=(...l)=>{let c=o.renderer[i].apply(a,l);return c===!1&&(c=s.apply(a,l)),c}}t.renderer=a}if(o.tokenizer){const a=xe.defaults.tokenizer||new Zs;for(const i in o.tokenizer){const s=a[i];a[i]=(...l)=>{let c=o.tokenizer[i].apply(a,l);return c===!1&&(c=s.apply(a,l)),c}}t.tokenizer=a}if(o.walkTokens){const a=xe.defaults.walkTokens;t.walkTokens=function(i){o.walkTokens.call(this,i),a&&a.call(this,i)}}n&&(t.extensions=r),xe.setOptions(t)})},xe.walkTokens=function(e,t){for(const r of e)switch(t.call(xe,r),r.type){case"table":for(const n of r.header)xe.walkTokens(n.tokens,t);for(const n of r.rows)for(const o of n)xe.walkTokens(o.tokens,t);break;case"list":xe.walkTokens(r.items,t);break;default:xe.defaults.extensions&&xe.defaults.extensions.childTokens&&xe.defaults.extensions.childTokens[r.type]?xe.defaults.extensions.childTokens[r.type].forEach(function(n){xe.walkTokens(r[n],t)}):r.tokens&&xe.walkTokens(r.tokens,t)}},xe.parseInline=function(e,t){if(e==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");td(t=mr({},xe.defaults,t||{}));try{const r=Nr.lexInline(e,t);return t.walkTokens&&xe.walkTokens(r,t.walkTokens),Fr.parseInline(r,t)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+jt(r.message+"",!0)+"</pre>";throw r}},xe.Parser=Fr,xe.parser=Fr.parse,xe.Renderer=Qs,xe.TextRenderer=ad,xe.Lexer=Nr,xe.lexer=Nr.lex,xe.Tokenizer=Zs,xe.Slugger=id,xe.parse=xe,Fr.parse,Nr.lex;var tx=O(660),Pt=O.n(tx);O(251),O(358),O(46),O(503),O(277),O(874),O(366),O(57),O(16);const Wr=x`
  .hover-bg:hover{
    background: var(--bg3);
  }
  ::selection {
    background: var(--selection-bg);
    color: var(--selection-fg);
  }
  .regular-font{ 
    font-family:var(--font-regular); 
  }
  .mono-font { 
    font-family:var(--font-mono); 
  }
  .title { 
    font-size: calc(var(--font-size-small) + 18px);
    font-weight: normal 
  }
  .sub-title{ font-size: 20px;}
  .req-res-title {
    font-family: var(--font-regular);
    font-size: calc(var(--font-size-small) + 4px);
    font-weight:bold;
    margin-bottom:8px;
    text-align:left;
  }
  .tiny-title { 
    font-size:calc(var(--font-size-small) + 1px); 
    font-weight:bold; 
  }
  .regular-font-size { font-size: var(--font-size-regular); }
  .small-font-size { font-size: var(--font-size-small); }
  .upper { text-transform: uppercase; }
  .primary-text{ color: var(--primary-color); }
  .bold-text { font-weight:bold; }
  .gray-text { color: var(--light-fg); }
  .red-text {color: var(--red)}
  .blue-text {color: var(--blue)}
  .multiline {
    overflow: scroll;
    max-height: var(--resp-area-height, 300px);
    color: var(--fg3);  
  }
  .method-fg.put { color: var(--orange); }
  .method-fg.post { color: var(--green); }
  .method-fg.get { color: var(--blue); }
  .method-fg.delete { color: var(--red); }
  .method-fg.options, 
  .method-fg.head, 
  .method-fg.patch { 
    color: var(--yellow); 
  }

  h1{ font-family:var(--font-regular); font-size:28px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h2{ font-family:var(--font-regular); font-size:24px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h3{ font-family:var(--font-regular); font-size:18px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h4{ font-family:var(--font-regular); font-size:16px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h5{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h6{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }

  h1,h2,h3,h4,h5,h5{
    margin-block-end: 0.2em;
  }
  p { margin-block-start: 0.5em; }
  a { color: var(--blue); cursor:pointer; }
  a.inactive-link { 
    color:var(--fg);
    text-decoration: none;
    cursor:text;
  }
  
  code,
  pre {
    margin: 0px;
    font-family: var(--font-mono);
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown,
  .m-markdown-small {
    display:block;
  }

  .m-markdown p,
  .m-markdown span {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 8px);
  }
  .m-markdown li {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 10px);
  }
  
  .m-markdown-small p,
  .m-markdown-small span,
  .m-markdown-small li {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 6px);
  }
  .m-markdown-small li {
    line-height: calc(var(--font-size-small) + 8px);
  }

  .m-markdown p:not(:first-child) {
    margin-block-start: 24px;
  }

  .m-markdown-small p:not(:first-child) {
    margin-block-start: 12px;
  }
  .m-markdown-small p:first-child {
    margin-block-start: 0;
  }

  .m-markdown p,
  .m-markdown-small p {
    margin-block-end: 0
  }

  .m-markdown code span {
    font-size:var(--font-size-mono);
  }

  .m-markdown-small code,
  .m-markdown code {
    padding: 1px 6px;
    border-radius: 2px;
    color: var(--inline-code-fg);
    background-color: var(--bg3);
    font-size: calc(var(--font-size-mono));
    line-height: 1.2;
  }

  .m-markdown-small code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown-small pre,
  .m-markdown pre {
    white-space: pre-wrap;
    overflow-x: auto;
    line-height: normal;
    border-radius: 2px;
    border: 1px solid var(--code-border-color);
  }

  .m-markdown pre {
    padding: 12px;
    background-color: var(--code-bg);
    color:var(--code-fg);
  }

  .m-markdown-small pre {
    margin-top: 4px;
    padding: 2px 4px;
    background-color: var(--bg3);
    color: var(--fg2);
  }

  .m-markdown-small pre code,
  .m-markdown pre code {
    border:none;
    padding:0;
  }

  .m-markdown pre code {
    color: var(--code-fg);
    background-color: var(--code-bg);
    background-color: transparent;
  }

  .m-markdown-small pre code {
    color: var(--fg2);
    background-color: var(--bg3);
  }

  .m-markdown ul,
  .m-markdown ol {
    padding-inline-start: 30px;
  }

  .m-markdown-small ul,
  .m-markdown-small ol {
    padding-inline-start: 20px;
  }

  .m-markdown-small a,
  .m-markdown a {
    color:var(--blue);
  }

  .m-markdown-small img,
  .m-markdown img { 
    max-width: 100%; 
  }

  /* Markdown table */

  .m-markdown-small table,
  .m-markdown table {
    border-spacing: 0;
    margin: 10px 0;
    border-collapse: separate;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: calc(var(--font-size-small) + 1px);
    line-height: calc(var(--font-size-small) + 4px);
    max-width: 100%;
  }

  .m-markdown-small table {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 2px);
    margin: 8px 0;
  }

  .m-markdown-small td, 
  .m-markdown-small th,
  .m-markdown td, 
  .m-markdown th {
    vertical-align: top;
    border-top: 1px solid var(--border-color);
    line-height: calc(var(--font-size-small) + 4px);
  }

  .m-markdown-small tr:first-child th,
  .m-markdown tr:first-child th {
    border-top: 0 none;
  }

  .m-markdown th, 
  .m-markdown td { 
    padding: 10px 12px; 
  }

  .m-markdown-small th,
  .m-markdown-small td { 
    padding: 8px 8px; 
  }

  .m-markdown th,
  .m-markdown-small th {
    font-weight: 600;
    background-color: var(--bg2);
    vertical-align: middle;
  }

  .m-markdown-small table code {
    font-size: calc(var(--font-size-mono) - 2px);
  }

  .m-markdown table code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown blockquote,
  .m-markdown-small blockquote {
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-left: 3px solid var(--border-color);
    padding: 6px 0 6px 6px;
  }
  .m-markdown hr{
    border: 1px solid var(--border-color);
  }
`,qn=x`
/* Button */
.m-btn {
  border-radius: var(--border-radius);
  font-weight: 600;
  display: inline-block;
  padding: 6px 16px;
  font-size: var(--font-size-small);
  outline: 0;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  border: 2px solid var(--primary-color);
  background-color:transparent;
  transition: background-color 0.2s;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.m-btn.primary {
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.thin-border { border-width: 1px; }
.m-btn.large { padding:8px 14px; }
.m-btn.small { padding:5px 12px; }
.m-btn.tiny { padding:5px 6px; }
.m-btn.circle { border-radius: 50%; }
.m-btn:hover { 
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.nav { border: 2px solid var(--nav-accent-color); }
.m-btn.nav:hover { 
  background-color: var(--nav-accent-color);
}
.m-btn:disabled{ 
  background-color: var(--bg3);
  color: var(--fg3);
  border-color: var(--fg3);
  cursor: not-allowed;
  opacity: 0.4;
}
.toolbar-btn{
  cursor: pointer;
  padding: 4px;
  margin:0 2px;
  font-size: var(--font-size-small);
  min-width: 50px;
  color: var(--primary-color-invert);
  border-radius: 2px;
  border: none;
  background-color: var(--primary-color);
}

input, textarea, select, button, pre {
  color:var(--fg);
  outline: none;
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}
button {
  font-family: var(--font-regular);
}

/* Form Inputs */
pre,
select,
textarea,
input[type="file"],
input[type="text"],
input[type="password"] {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: var(--font-size-small);
  transition: border .2s;
  padding: 6px 5px;
}

select {
  font-family: var(--font-regular);
  padding: 5px 30px 5px 5px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%3Cpath%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3A1%201%200%2000.3%204.7l5%205a1%201%200%20001.4%200l5-5a1%201%200%2010-1.4-1.4z%22%20fill%3D%22%23777777%22%2F%3E%3C%2Fsvg%3E"); 
  background-position: calc(100% - 5px) center;
  background-repeat: no-repeat;  
  background-size: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

select:hover {
  border-color: var(--primary-color);
}

textarea::placeholder,
input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: var(--placeholder-color);
  opacity:1;
}

select:focus,
textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
textarea:active,
input[type="text"]:active,
input[type="password"]:active {
  border:1px solid var(--primary-color);
}

input[type="file"]{
  font-family: var(--font-regular);
  padding:2px;
  cursor:pointer;
  border: 1px solid var(--primary-color);
  min-height: calc(var(--font-size-small) + 18px);
}

input[type="file"]::-webkit-file-upload-button {
  font-family: var(--font-regular);
  font-size: var(--font-size-small);
  outline: none;
  cursor:pointer;
  padding: 3px 8px;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
  border-radius: var(--border-radius);;
  -webkit-appearance: none;
}

pre,
textarea {
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) var(--input-bg);
}

pre::-webkit-scrollbar,
textarea::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

pre::-webkit-scrollbar-track,
textarea::-webkit-scrollbar-track {
  background:var(--input-bg);
}
 
pre::-webkit-scrollbar-thumb,
textarea::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--border-color);
}

.link {
  font-size:var(--font-size-small);
  text-decoration: underline;
  color:var(--blue);
  font-family:var(--font-mono);
  margin-bottom:2px;
}

input[type="checkbox"]:focus{
  outline:0;
}

/* Toggle Body */
input[type="checkbox"] {
  appearance: none;
  display: inline-block;
  background-color: var(--light-bg);
  border: 1px solid var(--light-bg);
  border-radius: 9px;
  cursor: pointer;
  height: 18px;
  position: relative;
  transition: border .25s .15s, box-shadow .25s .3s, padding .25s;
  min-width: 36px;
  width: 36px;
  vertical-align: top;
}
/* Toggle Thumb */
input[type="checkbox"]:after {
  position: absolute;
  background-color: var(--bg);
  border: 1px solid var(--light-bg);
  border-radius: 8px;
  content: '';
  top: 0px;
  left: 0px;
  right: 16px;
  display: block;
  height: 16px;
  transition: border .25s .15s, left .25s .1s, right .15s .175s;
}

/* Toggle Body - Checked */
input[type="checkbox"]:checked {
  box-shadow: inset 0 0 0 13px var(--green);
  border-color: var(--green);
}
/* Toggle Thumb - Checked*/
input[type="checkbox"]:checked:after {
  border: 1px solid var(--green);
  left: 16px;
  right: 1px;
  transition: border .25s, left .15s .25s, right .25s .175s;
}
`,jo=x`
.row, .col{
  display:flex;
} 
.row {
  align-items:center;
  flex-direction: row;
}
.col {
  align-items:stretch;
  flex-direction: column;
}
`,Po=x`
.m-table {
  border-spacing: 0;  
  border-collapse: separate;
  border: 1px solid var(--light-border-color);
  border-radius: var(--border-radius);
  margin: 0;
  max-width: 100%;
  direction: ltr;
}
.m-table tr:first-child td,
.m-table tr:first-child th {
    border-top: 0 none;
}
.m-table td, 
.m-table th {
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 4px);
  padding: 4px 5px 4px;
  vertical-align: top;
}

.m-table.padded-12 td, 
.m-table.padded-12 th {
  padding: 12px;
}

.m-table td:not([align]), 
.m-table th:not([align]) {
  text-align: left;
}

.m-table th {
  color: var(--fg2);
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 18px);
  font-weight: 600;
  letter-spacing: normal;
  background-color: var(--bg2);
  vertical-align: bottom;
  border-bottom: 1px solid var(--light-border-color);
}

.m-table > tbody > tr > td,
.m-table > tr > td {
  border-top: 1px solid var(--light-border-color);
  text-overflow: ellipsis;
  overflow: hidden;
}
.table-title {
  font-size:var(--font-size-small);
  font-weight:bold;
  vertical-align: middle;
  margin: 12px 0 4px 0;
}
`,Xs=x`
.only-large-screen { display:none; }
.endpoint-head .path{
  display: flex;
  font-family:var(--font-mono);
  font-size: var(--font-size-small);
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
}

.endpoint-head .descr {
  font-size: var(--font-size-small);
  color:var(--light-fg);
  font-weight:400;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
  display:none;
}

.m-endpoint.expanded{margin-bottom:16px; }
.m-endpoint > .endpoint-head{
  border-width:1px 1px 1px 5px;
  border-style:solid;
  border-color:transparent;
  border-top-color:var(--light-border-color);
  display:flex;
  padding:6px 16px;
  align-items: center;
  cursor: pointer;
}
.m-endpoint > .endpoint-head.put:hover,
.m-endpoint > .endpoint-head.put.expanded{
  border-color:var(--orange); 
  background-color:var(--light-orange); 
}
.m-endpoint > .endpoint-head.post:hover,
.m-endpoint > .endpoint-head.post.expanded {
  border-color:var(--green); 
  background-color:var(--light-green); 
}
.m-endpoint > .endpoint-head.get:hover,
.m-endpoint > .endpoint-head.get.expanded {
  border-color:var(--blue); 
  background-color:var(--light-blue); 
}
.m-endpoint > .endpoint-head.delete:hover,
.m-endpoint > .endpoint-head.delete.expanded {
  border-color:var(--red); 
  background-color:var(--light-red); 
}

.m-endpoint > .endpoint-head.head:hover,
.m-endpoint > .endpoint-head.head.expanded,
.m-endpoint > .endpoint-head.patch:hover,
.m-endpoint > .endpoint-head.patch.expanded,
.m-endpoint > .endpoint-head.options:hover,
.m-endpoint > .endpoint-head.options.expanded {
  border-color:var(--yellow); 
  background-color:var(--light-yellow); 
}

.m-endpoint > .endpoint-head.deprecated:hover,
.m-endpoint > .endpoint-head.deprecated.expanded {
  border-color:var(--border-color); 
  filter:opacity(0.6);
}

.m-endpoint .endpoint-body {
  flex-wrap:wrap;
  padding:16px 0px 0 0px;
  border-width:0px 1px 1px 5px;
  border-style:solid;
  box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.15);
}
.m-endpoint .endpoint-body.delete{ border-color:var(--red); }
.m-endpoint .endpoint-body.put{ border-color:var(--orange); }
.m-endpoint .endpoint-body.post{border-color:var(--green);}
.m-endpoint .endpoint-body.get{ border-color:var(--blue); }
.m-endpoint .endpoint-body.head,
.m-endpoint .endpoint-body.patch,
.m-endpoint .endpoint-body.options { 
  border-color:var(--yellow); 
}

.m-endpoint .endpoint-body.deprecated{ 
  border-color:var(--border-color);
  filter:opacity(0.6);
}

.endpoint-head .deprecated{
  color: var(--light-fg);
  filter:opacity(0.6);
}

.summary{
  padding:8px 8px;
}
.summary .title{
  font-size:calc(var(--font-size-regular) + 2px);
  margin-bottom: 6px;
  word-break: break-all;
}

.method{
  padding:2px 5px;
  vertical-align: middle;
  font-size:var(--font-size-small);
  height: calc(var(--font-size-small) + 16px);
  line-height: calc(var(--font-size-small) + 8px);
  width: 60px;
  border-radius: 2px;
  display:inline-block;
  text-align: center;
  font-weight: bold;
  text-transform:uppercase;
  margin-right:5px;
}
.method.delete{ border: 2px solid var(--red);}
.method.put{ border: 2px solid var(--orange); }
.method.post{ border: 2px solid var(--green); }
.method.get{ border: 2px solid var(--blue); }
.method.get.deprecated{ border: 2px solid var(--border-color); }
.method.head,
.method.patch,
.method.options { 
  border: 2px solid var(--yellow); 
}

.req-resp-container{
  display: flex;
  margin-top:16px;
  align-items: stretch;
  flex-wrap: wrap;
  flex-direction: column;
  border-top:1px solid var(--light-border-color);
}

.view-mode-request,
api-response.view-mode {
  flex:1; 
  min-height:100px;
  padding:16px 8px;
  overflow:hidden;
}
.view-mode-request {
  border-width:0 0 1px 0;
  border-style:dashed;
}

.head .view-mode-request,
.patch .view-mode-request,
.options .view-mode-request { 
  border-color:var(--yellow); 
}
.put .view-mode-request { 
  border-color:var(--orange); 
}
.post .view-mode-request { 
  border-color:var(--green); 
}
.get .view-mode-request { 
  border-color:var(--blue); 
}
.delete .view-mode-request { 
  border-color:var(--red); 
}

@media only screen and (min-width: 1024px) {
  .only-large-screen { display:block; }
  .endpoint-head .path{
    font-size: var(--font-size-regular);
  }
  .endpoint-head .descr{
    display: flex;
  }
  .endpoint-head .m-markdown-small,
  .descr .m-markdown-small{
    display:block;
  }
  .req-resp-container{
    flex-direction: var(--layout, row);
    flex-wrap: nowrap;
  }
  api-response.view-mode {
    padding:16px;
  }
  .view-mode-request.row-layout {
    border-width:0 1px 0 0;
    padding:16px;
  }
  .summary{
    padding:8px 16px;
  }
}
`,Za=x`
code[class*="language-"],
pre[class*="language-"] {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 2;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--light-fg)
}

.token.punctuation {
  color: var(--fg);
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color:var(--pink);
}

.token.function-name {
  color: var(--blue);
}

.token.boolean,
.token.number,
.token.function {
  color: var(--red);
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: var(--code-property-color);
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: var(--code-keyword-color);
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable { 
  color: var(--green);
}

.token.operator,
.token.entity,
.token.url {
  color: var(--code-operator-color);
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
`,Ro=x`
.tab-panel {
  border: none;
}
.tab-buttons {
  height:30px;
  border-bottom: 1px solid var(--light-border-color) ;
  align-items: stretch;
  overflow-y: hidden;
  overflow-x: auto;
  scrollbar-width: thin;
}
.tab-buttons::-webkit-scrollbar {
  height: 1px;
  background-color: var(--border-color);
}
.tab-btn {
  border: none;
  border-bottom: 3px solid transparent; 
  color: var(--light-fg);
  background-color: transparent;
  white-space: nowrap;
  cursor:pointer;
  outline:none;
  font-family:var(--font-regular); 
  font-size:var(--font-size-small);
  margin-right:16px;
  padding:1px;
}
.tab-btn.active {
  border-bottom: 3px solid var(--primary-color); 
  font-weight:bold;
  color:var(--primary-color);
}

.tab-btn:hover {
  color:var(--primary-color);
}
.tab-content {
  margin:-1px 0 0 0;
  position:relative;
}
`,el=x`
.nav-bar {
  width:0;
  height:100%;
  overflow: hidden;
  color:var(--nav-text-color);
  background-color: var(--nav-bg-color);
  background-blend-mode: multiply;
  line-height: calc(var(--font-size-small) + 4px);
  display:none;
  position:relative;
  flex-direction:column;
  flex-wrap:nowrap;
  word-break:break-word;
}
::slotted([slot=nav-logo]){
  padding:16px 16px 0 16px;
}
.nav-scroll {
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: overlay;
  scrollbar-width: thin;
  scrollbar-color: var(--nav-hover-bg-color) transparent;
}

.nav-bar-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.nav-bar.read .nav-bar-tag-icon {
  display:none;
}

.nav-bar-tag-icon {
  color: var(--nav-text-color);
  font-size: 20px; 
}
.nav-bar-tag-icon:hover {
  color:var(--nav-hover-text-color);
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-paths-under-tag {
  display:none;
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transform: rotate(270deg);
}
.nav-bar.focused .nav-bar-tag-and-paths.expanded .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
}
.nav-scroll::-webkit-scrollbar {
  width: var(--scroll-bar-width, 8px);
}
.nav-scroll::-webkit-scrollbar-track {
  background:transparent;
}
.nav-scroll::-webkit-scrollbar-thumb {
  background-color: var(--nav-hover-bg-color);
}

.nav-bar-tag {
  font-size: var(--font-size-regular);
  color: var(--nav-accent-color);
  border-left:4px solid transparent;
  font-weight:bold;
  padding: 15px 15px 15px 10px;
  text-transform: capitalize;
}

.nav-bar-components,
.nav-bar-h1,
.nav-bar-h2,
.nav-bar-info,
.nav-bar-tag,
.nav-bar-path {
  display:flex;
  cursor:pointer;
  border-left:4px solid transparent;
}

.nav-bar-h1,
.nav-bar-h2,
.nav-bar-path {
  font-size: calc(var(--font-size-small) + 1px);
  padding: var(--nav-item-padding);
}
.nav-bar-path.small-font {
  font-size: var(--font-size-small);
}

.nav-bar-info {
  font-size: var(--font-size-regular);
  padding: 16px 10px;
  font-weight:bold;
}
.nav-bar-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--font-size-small);
  color: var(--nav-text-color);
  padding: var(--nav-item-padding);
  font-weight:bold;
}
.nav-bar-section.operations {
  cursor:pointer;
}
.nav-bar-section.operations:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}

.nav-bar-section:first-child {
  display: none;
}
.nav-bar-h2 {margin-left:12px;}

.nav-bar-h1.active,
.nav-bar-h2.active,
.nav-bar-info.active,
.nav-bar-tag.active,
.nav-bar-path.active,
.nav-bar-section.operations.active {
  border-left:4px solid var(--nav-accent-color);
  color:var(--nav-hover-text-color);
}

.nav-bar-h1:hover,
.nav-bar-h2:hover,
.nav-bar-info:hover,
.nav-bar-tag:hover,
.nav-bar-path:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}
`,tl=x`
#api-info {
  font-size:calc(var(--font-size-regular) - 1px);margin-top:8px
  margin-left: -15px;
}

#api-info span:before {
  content: "|";
  display: inline-block;
  opacity: 0.5;
  width: 15px;
  text-align: center;
}
#api-info span:first-child:before {
  content: "";
  width: 0px;
}
`,Mn=x`

`,Lo=/[\s#:?&={}]/g,dn="_rapidoc_api_key";function No(e){return new Promise(t=>setTimeout(t,e))}function Fo(e,t){const r=t.currentTarget,n=document.createElement("textarea");n.value=e,n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy"),r.innerText="Copied",setTimeout(()=>{r.innerText="Copy"},5e3)}catch(o){console.error("Unable to copy",o)}document.body.removeChild(n)}function Bo(e,t,r="includes"){return r==="includes"?`${t.method} ${t.path} ${t.summary||t.description||""} ${t.operationId||""}`.toLowerCase().includes(e.toLowerCase()):new RegExp(e,"i").test(`${t.method} ${t.path}`)}function rl(e,t=new Set){return e&&Object.keys(e).forEach(r=>{var n;if(t.add(r),e[r].properties)rl(e[r].properties,t);else if((n=e[r].items)!==null&&n!==void 0&&n.properties){var o;rl((o=e[r].items)===null||o===void 0?void 0:o.properties,t)}}),t}function sd(e,t){if(e){const r=document.createElement("a");document.body.appendChild(r),r.style="display: none",r.href=e,r.download=t,r.click(),r.remove()}}function ld(e){if(e){const t=document.createElement("a");document.body.appendChild(t),t.style="display: none",t.href=e,t.target="_blank",t.click(),t.remove()}}var cd=O(764).Buffer;function rx(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}),t}var Qa=function(e){return e&&e.Math==Math&&e},Ce=Qa(typeof globalThis=="object"&&globalThis)||Qa(typeof window=="object"&&window)||Qa(typeof self=="object"&&self)||Qa(typeof Ce=="object"&&Ce)||function(){return this}()||Function("return this")(),st=function(e){try{return!!e()}catch{return!0}},Xa=!st(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")}),nx=Xa,pd=Function.prototype,ud=pd.apply,dd=pd.call,Do=typeof Reflect=="object"&&Reflect.apply||(nx?dd.bind(ud):function(){return dd.apply(ud,arguments)}),hd=Xa,fd=Function.prototype,ox=fd.bind,nl=fd.call,ax=hd&&ox.bind(nl,nl),at=hd?function(e){return e&&ax(e)}:function(e){return e&&function(){return nl.apply(e,arguments)}},St=function(e){return typeof e=="function"},hn={},qt=!st(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),ix=Xa,ei=Function.prototype.call,Yt=ix?ei.bind(ei):function(){return ei.apply(ei,arguments)},zo={},md={}.propertyIsEnumerable,gd=Object.getOwnPropertyDescriptor,sx=gd&&!md.call({1:2},1);zo.f=sx?function(e){var t=gd(this,e);return!!t&&t.enumerable}:md;var Vr,ti,Gr=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},yd=at,lx=yd({}.toString),cx=yd("".slice),fn=function(e){return cx(lx(e),8,-1)},px=at,ux=st,dx=fn,ol=Ce.Object,hx=px("".split),al=ux(function(){return!ol("z").propertyIsEnumerable(0)})?function(e){return dx(e)=="String"?hx(e,""):ol(e)}:ol,fx=Ce.TypeError,Uo=function(e){if(e==null)throw fx("Can't call method on "+e);return e},mx=al,gx=Uo,gr=function(e){return mx(gx(e))},yx=St,Ot=function(e){return typeof e=="object"?e!==null:yx(e)},_t={},il=_t,sl=Ce,vx=St,vd=function(e){return vx(e)?e:void 0},lr=function(e,t){return arguments.length<2?vd(il[e])||vd(sl[e]):il[e]&&il[e][t]||sl[e]&&sl[e][t]},Mt=at({}.isPrototypeOf),ri=lr("navigator","userAgent")||"",bd=Ce,ll=ri,xd=bd.process,wd=bd.Deno,$d=xd&&xd.versions||wd&&wd.version,Sd=$d&&$d.v8;Sd&&(ti=(Vr=Sd.split("."))[0]>0&&Vr[0]<4?1:+(Vr[0]+Vr[1])),!ti&&ll&&(!(Vr=ll.match(/Edge\/(\d+)/))||Vr[1]>=74)&&(Vr=ll.match(/Chrome\/(\d+)/))&&(ti=+Vr[1]);var ni=ti,kd=ni,bx=st,cl=!!Object.getOwnPropertySymbols&&!bx(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&kd&&kd<41}),Ad=cl&&!Symbol.sham&&typeof Symbol.iterator=="symbol",xx=lr,wx=St,$x=Mt,Sx=Ad,kx=Ce.Object,pl=Sx?function(e){return typeof e=="symbol"}:function(e){var t=xx("Symbol");return wx(t)&&$x(t.prototype,kx(e))},Ax=Ce.String,oi=function(e){try{return Ax(e)}catch{return"Object"}},Ex=St,Ox=oi,_x=Ce.TypeError,mn=function(e){if(Ex(e))return e;throw _x(Ox(e)+" is not a function")},Tx=mn,ul=function(e,t){var r=e[t];return r==null?void 0:Tx(r)},dl=Yt,hl=St,fl=Ot,Cx=Ce.TypeError,ai={exports:{}},Ed=Ce,Ix=Object.defineProperty,jx=function(e,t){try{Ix(Ed,e,{value:t,configurable:!0,writable:!0})}catch{Ed[e]=t}return t},Od="__core-js_shared__",ml=Ce[Od]||jx(Od,{}),_d=ml;(ai.exports=function(e,t){return _d[e]||(_d[e]=t!==void 0?t:{})})("versions",[]).push({version:"3.21.1",mode:"pure",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Px=Uo,Rx=Ce.Object,Br=function(e){return Rx(Px(e))},Lx=Br,Nx=at({}.hasOwnProperty),Ft=Object.hasOwn||function(e,t){return Nx(Lx(e),t)},Fx=at,Bx=0,Dx=Math.random(),zx=Fx(1 .toString),ii=function(e){return"Symbol("+(e===void 0?"":e)+")_"+zx(++Bx+Dx,36)},Ux=Ce,qx=ai.exports,Td=Ft,Mx=ii,Cd=cl,Id=Ad,qo=qx("wks"),gn=Ux.Symbol,jd=gn&&gn.for,Hx=Id?gn:gn&&gn.withoutSetter||Mx,ut=function(e){if(!Td(qo,e)||!Cd&&typeof qo[e]!="string"){var t="Symbol."+e;Cd&&Td(gn,e)?qo[e]=gn[e]:qo[e]=Id&&jd?jd(t):Hx(t)}return qo[e]},Wx=Yt,Pd=Ot,Rd=pl,Vx=ul,Gx=function(e,t){var r,n;if(t==="string"&&hl(r=e.toString)&&!fl(n=dl(r,e))||hl(r=e.valueOf)&&!fl(n=dl(r,e))||t!=="string"&&hl(r=e.toString)&&!fl(n=dl(r,e)))return n;throw Cx("Can't convert object to primitive value")},Kx=ut,Jx=Ce.TypeError,Yx=Kx("toPrimitive"),Zx=function(e,t){if(!Pd(e)||Rd(e))return e;var r,n=Vx(e,Yx);if(n){if(t===void 0&&(t="default"),r=Wx(n,e,t),!Pd(r)||Rd(r))return r;throw Jx("Can't convert object to primitive value")}return t===void 0&&(t="number"),Gx(e,t)},Qx=pl,si=function(e){var t=Zx(e,"string");return Qx(t)?t:t+""},Ld=Ot,gl=Ce.document,Xx=Ld(gl)&&Ld(gl.createElement),yl=function(e){return Xx?gl.createElement(e):{}},ew=yl,Nd=!qt&&!st(function(){return Object.defineProperty(ew("div"),"a",{get:function(){return 7}}).a!=7}),tw=qt,rw=Yt,nw=zo,ow=Gr,aw=gr,iw=si,sw=Ft,lw=Nd,Fd=Object.getOwnPropertyDescriptor;hn.f=tw?Fd:function(e,t){if(e=aw(e),t=iw(t),lw)try{return Fd(e,t)}catch{}if(sw(e,t))return ow(!rw(nw.f,e,t),e[t])};var cw=st,pw=St,uw=/#|\.prototype\./,Mo=function(e,t){var r=hw[dw(e)];return r==mw||r!=fw&&(pw(t)?cw(t):!!t)},dw=Mo.normalize=function(e){return String(e).replace(uw,".").toLowerCase()},hw=Mo.data={},fw=Mo.NATIVE="N",mw=Mo.POLYFILL="P",Bd=Mo,gw=mn,yw=Xa,vw=at(at.bind),yn=function(e,t){return gw(e),t===void 0?e:yw?vw(e,t):function(){return e.apply(t,arguments)}},tr={},Dd=qt&&st(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),zd=Ce,bw=Ot,xw=zd.String,ww=zd.TypeError,Zt=function(e){if(bw(e))return e;throw ww(xw(e)+" is not an object")},$w=qt,Sw=Nd,kw=Dd,li=Zt,Ud=si,Aw=Ce.TypeError,vl=Object.defineProperty,Ew=Object.getOwnPropertyDescriptor,Ow="enumerable",_w="configurable",Tw="writable";tr.f=$w?kw?function(e,t,r){if(li(e),t=Ud(t),li(r),typeof e=="function"&&t==="prototype"&&"value"in r&&Tw in r&&!r.writable){var n=Ew(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:_w in r?r.configurable:n.configurable,enumerable:Ow in r?r.enumerable:n.enumerable,writable:!1})}return vl(e,t,r)}:vl:function(e,t,r){if(li(e),t=Ud(t),li(r),Sw)try{return vl(e,t,r)}catch{}if("get"in r||"set"in r)throw Aw("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var Cw=tr,Iw=Gr,Kr=qt?function(e,t,r){return Cw.f(e,t,Iw(1,r))}:function(e,t,r){return e[t]=r,e},ci=Ce,jw=Do,Pw=at,Rw=St,Lw=hn.f,Nw=Bd,Hn=_t,Fw=yn,Wn=Kr,qd=Ft,Bw=function(e){var t=function(r,n,o){if(this instanceof t){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,o)}return jw(e,this,arguments)};return t.prototype=e.prototype,t},Ye=function(e,t){var r,n,o,a,i,s,l,c,d=e.target,u=e.global,f=e.stat,m=e.proto,$=u?ci:f?ci[d]:(ci[d]||{}).prototype,C=u?Hn:Hn[d]||Wn(Hn,d,{})[d],E=C.prototype;for(o in t)r=!Nw(u?o:d+(f?".":"#")+o,e.forced)&&$&&qd($,o),i=C[o],r&&(s=e.noTargetGet?(c=Lw($,o))&&c.value:$[o]),a=r&&s?s:t[o],r&&typeof i==typeof a||(l=e.bind&&r?Fw(a,ci):e.wrap&&r?Bw(a):m&&Rw(a)?Pw(a):a,(e.sham||a&&a.sham||i&&i.sham)&&Wn(l,"sham",!0),Wn(C,o,l),m&&(qd(Hn,n=d+"Prototype")||Wn(Hn,n,{}),Wn(Hn[n],o,a),e.real&&E&&!E[o]&&Wn(E,o,a)))},Dw=Math.ceil,zw=Math.floor,pi=function(e){var t=+e;return t!=t||t===0?0:(t>0?zw:Dw)(t)},Uw=pi,qw=Math.max,Mw=Math.min,ui=function(e,t){var r=Uw(e);return r<0?qw(r+t,0):Mw(r,t)},Hw=pi,Ww=Math.min,Md=function(e){return e>0?Ww(Hw(e),9007199254740991):0},Vw=Md,Jr=function(e){return Vw(e.length)},Gw=gr,Kw=ui,Jw=Jr,Hd=function(e){return function(t,r,n){var o,a=Gw(t),i=Jw(a),s=Kw(n,i);if(e&&r!=r){for(;i>s;)if((o=a[s++])!=o)return!0}else for(;i>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},bl={includes:Hd(!0),indexOf:Hd(!1)},Ho={},xl=Ft,Yw=gr,Zw=bl.indexOf,Qw=Ho,Wd=at([].push),Vd=function(e,t){var r,n=Yw(e),o=0,a=[];for(r in n)!xl(Qw,r)&&xl(n,r)&&Wd(a,r);for(;t.length>o;)xl(n,r=t[o++])&&(~Zw(a,r)||Wd(a,r));return a},wl=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Xw=Vd,e1=wl,Wo=Object.keys||function(e){return Xw(e,e1)},t1=Br,Gd=Wo;Ye({target:"Object",stat:!0,forced:st(function(){Gd(1)})},{keys:function(e){return Gd(t1(e))}});var Kd=_t.Object.keys,Jd=Kd,r1=fn,Vo=Array.isArray||function(e){return r1(e)=="Array"},Yd={};Yd[ut("toStringTag")]="z";var $l=String(Yd)==="[object z]",n1=Ce,o1=$l,a1=St,di=fn,i1=ut("toStringTag"),s1=n1.Object,l1=di(function(){return arguments}())=="Arguments",Yr=o1?di:function(e){var t,r,n;return e===void 0?"Undefined":e===null?"Null":typeof(r=function(o,a){try{return o[a]}catch{}}(t=s1(e),i1))=="string"?r:l1?di(t):(n=di(t))=="Object"&&a1(t.callee)?"Arguments":n},c1=Yr,p1=Ce.String,vn=function(e){if(c1(e)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return p1(e)},hi={},u1=qt,d1=Dd,h1=tr,f1=Zt,m1=gr,g1=Wo;hi.f=u1&&!d1?Object.defineProperties:function(e,t){f1(e);for(var r,n=m1(t),o=g1(t),a=o.length,i=0;a>i;)h1.f(e,r=o[i++],n[r]);return e};var fi,Zd=lr("document","documentElement"),y1=ai.exports,v1=ii,Qd=y1("keys"),mi=function(e){return Qd[e]||(Qd[e]=v1(e))},b1=Zt,x1=hi,Xd=wl,w1=Ho,$1=Zd,S1=yl,eh=mi("IE_PROTO"),Sl=function(){},th=function(e){return"<script>"+e+"<\/script>"},rh=function(e){e.write(th("")),e.close();var t=e.parentWindow.Object;return e=null,t},gi=function(){try{fi=new ActiveXObject("htmlfile")}catch{}var e,t;gi=typeof document<"u"?document.domain&&fi?rh(fi):((t=S1("iframe")).style.display="none",$1.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(th("document.F=Object")),e.close(),e.F):rh(fi);for(var r=Xd.length;r--;)delete gi.prototype[Xd[r]];return gi()};w1[eh]=!0;var Go=Object.create||function(e,t){var r;return e!==null?(Sl.prototype=b1(e),r=new Sl,Sl.prototype=null,r[eh]=e):r=gi(),t===void 0?r:x1.f(r,t)},Ko={},k1=Vd,A1=wl.concat("length","prototype");Ko.f=Object.getOwnPropertyNames||function(e){return k1(e,A1)};var kl={},E1=si,O1=tr,_1=Gr,Vn=function(e,t,r){var n=E1(t);n in e?O1.f(e,n,_1(0,r)):e[n]=r},nh=ui,T1=Jr,C1=Vn,I1=Ce.Array,j1=Math.max,oh=function(e,t,r){for(var n=T1(e),o=nh(t,n),a=nh(r===void 0?n:r,n),i=I1(j1(a-o,0)),s=0;o<a;o++,s++)C1(i,s,e[o]);return i.length=s,i},P1=fn,R1=gr,ah=Ko.f,L1=oh,ih=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];kl.f=function(e){return ih&&P1(e)=="Window"?function(t){try{return ah(t)}catch{return L1(ih)}}(e):ah(R1(e))};var yi={};yi.f=Object.getOwnPropertySymbols;var Al=at([].slice),N1=Kr,Jo=function(e,t,r,n){n&&n.enumerable?e[t]=r:N1(e,t,r)},vi={},F1=ut;vi.f=F1;var sh=_t,B1=Ft,D1=vi,z1=tr.f,xt=function(e){var t=sh.Symbol||(sh.Symbol={});B1(t,e)||z1(t,e,{value:D1.f(e)})},U1=Yr,q1=$l?{}.toString:function(){return"[object "+U1(this)+"]"},M1=$l,H1=tr.f,W1=Kr,V1=Ft,G1=q1,lh=ut("toStringTag"),bn=function(e,t,r,n){if(e){var o=r?e:e.prototype;V1(o,lh)||H1(o,lh,{configurable:!0,value:t}),n&&!M1&&W1(o,"toString",G1)}},K1=St,El=ml,J1=at(Function.toString);K1(El.inspectSource)||(El.inspectSource=function(e){return J1(e)});var bi,Yo,xi,Ol=El.inspectSource,Y1=St,Z1=Ol,ch=Ce.WeakMap,ph=Y1(ch)&&/native code/.test(Z1(ch)),Q1=ph,uh=Ce,_l=at,X1=Ot,e$=Kr,Tl=Ft,Cl=ml,t$=mi,r$=Ho,dh="Object already initialized",Il=uh.TypeError,n$=uh.WeakMap;if(Q1||Cl.state){var xn=Cl.state||(Cl.state=new n$),o$=_l(xn.get),hh=_l(xn.has),a$=_l(xn.set);bi=function(e,t){if(hh(xn,e))throw new Il(dh);return t.facade=e,a$(xn,e,t),t},Yo=function(e){return o$(xn,e)||{}},xi=function(e){return hh(xn,e)}}else{var Gn=t$("state");r$[Gn]=!0,bi=function(e,t){if(Tl(e,Gn))throw new Il(dh);return t.facade=e,e$(e,Gn,t),t},Yo=function(e){return Tl(e,Gn)?e[Gn]:{}},xi=function(e){return Tl(e,Gn)}}var Ar={set:bi,get:Yo,has:xi,enforce:function(e){return xi(e)?Yo(e):bi(e,{})},getterFor:function(e){return function(t){var r;if(!X1(t)||(r=Yo(t)).type!==e)throw Il("Incompatible receiver, "+e+" required");return r}}},i$=at,s$=st,fh=St,l$=Yr,c$=Ol,mh=function(){},p$=[],gh=lr("Reflect","construct"),jl=/^\s*(?:class|function)\b/,u$=i$(jl.exec),d$=!jl.exec(mh),Zo=function(e){if(!fh(e))return!1;try{return gh(mh,p$,e),!0}catch{return!1}},yh=function(e){if(!fh(e))return!1;switch(l$(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d$||!!u$(jl,c$(e))}catch{return!0}};yh.sham=!0;var wi=!gh||s$(function(){var e;return Zo(Zo.call)||!Zo(Object)||!Zo(function(){e=!0})||e})?yh:Zo,h$=Ce,vh=Vo,f$=wi,m$=Ot,g$=ut("species"),bh=h$.Array,y$=function(e){var t;return vh(e)&&(t=e.constructor,(f$(t)&&(t===bh||vh(t.prototype))||m$(t)&&(t=t[g$])===null)&&(t=void 0)),t===void 0?bh:t},Pl=function(e,t){return new(y$(e))(t===0?0:t)},v$=yn,b$=al,x$=Br,w$=Jr,$$=Pl,xh=at([].push),Zr=function(e){var t=e==1,r=e==2,n=e==3,o=e==4,a=e==6,i=e==7,s=e==5||a;return function(l,c,d,u){for(var f,m,$=x$(l),C=b$($),E=v$(c,d),h=w$(C),D=0,F=u||$$,M=t?F(l,h):r||i?F(l,0):void 0;h>D;D++)if((s||D in C)&&(m=E(f=C[D],D,$),e))if(t)M[D]=m;else if(m)switch(e){case 3:return!0;case 5:return f;case 6:return D;case 2:xh(M,f)}else switch(e){case 4:return!1;case 7:xh(M,f)}return a?-1:n||o?o:M}},Qr={forEach:Zr(0),map:Zr(1),filter:Zr(2),some:Zr(3),every:Zr(4),find:Zr(5),findIndex:Zr(6),filterReject:Zr(7)},Kn=Ye,Rl=Ce,S$=lr,k$=Do,Qo=Yt,A$=at,Jn=qt,wn=cl,Ll=st,kt=Ft,E$=Vo,O$=St,_$=Ot,T$=Mt,Nl=pl,Fl=Zt,C$=Br,$i=gr,Bl=si,wh=vn,Dl=Gr,Xo=Go,$h=Wo,I$=Ko,Sh=kl,zl=yi,kh=hn,Ah=tr,j$=hi,Eh=zo,P$=Al,Ul=Jo,ea=ai.exports,Oh=Ho,_h=ii,Th=ut,R$=vi,L$=xt,N$=bn,Ch=Ar,Si=Qr.forEach,Qt=mi("hidden"),ki="Symbol",Ih=Th("toPrimitive"),F$=Ch.set,jh=Ch.getterFor(ki),yr=Object.prototype,Xr=Rl.Symbol,$n=Xr&&Xr.prototype,Ph=Rl.TypeError,ql=Rl.QObject,ta=S$("JSON","stringify"),Rh=kh.f,en=Ah.f,Lh=Sh.f,B$=Eh.f,Nh=A$([].push),Dr=ea("symbols"),ra=ea("op-symbols"),Ml=ea("string-to-symbol-registry"),Hl=ea("symbol-to-string-registry"),D$=ea("wks"),Wl=!ql||!ql.prototype||!ql.prototype.findChild,Vl=Jn&&Ll(function(){return Xo(en({},"a",{get:function(){return en(this,"a",{value:7}).a}})).a!=7})?function(e,t,r){var n=Rh(yr,t);n&&delete yr[t],en(e,t,r),n&&e!==yr&&en(yr,t,n)}:en,Gl=function(e,t){var r=Dr[e]=Xo($n);return F$(r,{type:ki,tag:e,description:t}),Jn||(r.description=t),r},Ai=function(e,t,r){e===yr&&Ai(ra,t,r),Fl(e);var n=Bl(t);return Fl(r),kt(Dr,n)?(r.enumerable?(kt(e,Qt)&&e[Qt][n]&&(e[Qt][n]=!1),r=Xo(r,{enumerable:Dl(0,!1)})):(kt(e,Qt)||en(e,Qt,Dl(1,{})),e[Qt][n]=!0),Vl(e,n,r)):en(e,n,r)},Kl=function(e,t){Fl(e);var r=$i(t),n=$h(r).concat(Jl(r));return Si(n,function(o){Jn&&!Qo(Fh,r,o)||Ai(e,o,r[o])}),e},Fh=function(e){var t=Bl(e),r=Qo(B$,this,t);return!(this===yr&&kt(Dr,t)&&!kt(ra,t))&&(!(r||!kt(this,t)||!kt(Dr,t)||kt(this,Qt)&&this[Qt][t])||r)},Bh=function(e,t){var r=$i(e),n=Bl(t);if(r!==yr||!kt(Dr,n)||kt(ra,n)){var o=Rh(r,n);return!o||!kt(Dr,n)||kt(r,Qt)&&r[Qt][n]||(o.enumerable=!0),o}},Dh=function(e){var t=Lh($i(e)),r=[];return Si(t,function(n){kt(Dr,n)||kt(Oh,n)||Nh(r,n)}),r},Jl=function(e){var t=e===yr,r=Lh(t?ra:$i(e)),n=[];return Si(r,function(o){!kt(Dr,o)||t&&!kt(yr,o)||Nh(n,Dr[o])}),n};if(wn||(Ul($n=(Xr=function(){if(T$($n,this))throw Ph("Symbol is not a constructor");var e=arguments.length&&arguments[0]!==void 0?wh(arguments[0]):void 0,t=_h(e),r=function(n){this===yr&&Qo(r,ra,n),kt(this,Qt)&&kt(this[Qt],t)&&(this[Qt][t]=!1),Vl(this,t,Dl(1,n))};return Jn&&Wl&&Vl(yr,t,{configurable:!0,set:r}),Gl(t,e)}).prototype,"toString",function(){return jh(this).tag}),Ul(Xr,"withoutSetter",function(e){return Gl(_h(e),e)}),Eh.f=Fh,Ah.f=Ai,j$.f=Kl,kh.f=Bh,I$.f=Sh.f=Dh,zl.f=Jl,R$.f=function(e){return Gl(Th(e),e)},Jn&&en($n,"description",{configurable:!0,get:function(){return jh(this).description}})),Kn({global:!0,wrap:!0,forced:!wn,sham:!wn},{Symbol:Xr}),Si($h(D$),function(e){L$(e)}),Kn({target:ki,stat:!0,forced:!wn},{for:function(e){var t=wh(e);if(kt(Ml,t))return Ml[t];var r=Xr(t);return Ml[t]=r,Hl[r]=t,r},keyFor:function(e){if(!Nl(e))throw Ph(e+" is not a symbol");if(kt(Hl,e))return Hl[e]},useSetter:function(){Wl=!0},useSimple:function(){Wl=!1}}),Kn({target:"Object",stat:!0,forced:!wn,sham:!Jn},{create:function(e,t){return t===void 0?Xo(e):Kl(Xo(e),t)},defineProperty:Ai,defineProperties:Kl,getOwnPropertyDescriptor:Bh}),Kn({target:"Object",stat:!0,forced:!wn},{getOwnPropertyNames:Dh,getOwnPropertySymbols:Jl}),Kn({target:"Object",stat:!0,forced:Ll(function(){zl.f(1)})},{getOwnPropertySymbols:function(e){return zl.f(C$(e))}}),ta&&Kn({target:"JSON",stat:!0,forced:!wn||Ll(function(){var e=Xr();return ta([e])!="[null]"||ta({a:e})!="{}"||ta(Object(e))!="{}"})},{stringify:function(e,t,r){var n=P$(arguments),o=t;if((_$(t)||e!==void 0)&&!Nl(e))return E$(t)||(t=function(a,i){if(O$(o)&&(i=Qo(o,this,a,i)),!Nl(i))return i}),n[1]=t,k$(ta,null,n)}}),!$n[Ih]){var z$=$n.valueOf;Ul($n,Ih,function(e){return Qo(z$,this)})}N$(Xr,ki),Oh[Qt]=!0;var Ei=_t.Object.getOwnPropertySymbols,U$=st,q$=ni,M$=ut("species"),na=function(e){return q$>=51||!U$(function(){var t=[];return(t.constructor={})[M$]=function(){return{foo:1}},t[e](Boolean).foo!==1})},H$=Qr.filter;Ye({target:"Array",proto:!0,forced:!na("filter")},{filter:function(e){return H$(this,e,arguments.length>1?arguments[1]:void 0)}});var W$=_t,cr=function(e){return W$[e+"Prototype"]},V$=cr("Array").filter,G$=Mt,K$=V$,Yl=Array.prototype,zh=function(e){var t=e.filter;return e===Yl||G$(Yl,e)&&t===Yl.filter?K$:t},J$=zh,Uh={exports:{}},Y$=Ye,Z$=st,Q$=gr,qh=hn.f,Mh=qt,X$=Z$(function(){qh(1)});Y$({target:"Object",stat:!0,forced:!Mh||X$,sham:!Mh},{getOwnPropertyDescriptor:function(e,t){return qh(Q$(e),t)}});var Hh=_t.Object,eS=Uh.exports=function(e,t){return Hh.getOwnPropertyDescriptor(e,t)};Hh.getOwnPropertyDescriptor.sham&&(eS.sham=!0);var Sn,Wh,Vh,Gh=Uh.exports,Yn={},Zl=qt,tS=Ft,Kh=Function.prototype,rS=Zl&&Object.getOwnPropertyDescriptor,Ql=tS(Kh,"name"),nS={EXISTS:Ql,PROPER:Ql&&function(){}.name==="something",CONFIGURABLE:Ql&&(!Zl||Zl&&rS(Kh,"name").configurable)},oS=!st(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}),aS=Ce,iS=Ft,sS=St,lS=Br,cS=oS,Jh=mi("IE_PROTO"),Xl=aS.Object,pS=Xl.prototype,ec=cS?Xl.getPrototypeOf:function(e){var t=lS(e);if(iS(t,Jh))return t[Jh];var r=t.constructor;return sS(r)&&t instanceof r?r.prototype:t instanceof Xl?pS:null},uS=st,dS=St,hS=Go,Yh=ec,fS=Jo,tc=ut("iterator"),Zh=!1;[].keys&&("next"in(Vh=[].keys())?(Wh=Yh(Yh(Vh)))!==Object.prototype&&(Sn=Wh):Zh=!0);var mS=Sn==null||uS(function(){var e={};return Sn[tc].call(e)!==e});dS((Sn=mS?{}:hS(Sn))[tc])||fS(Sn,tc,function(){return this});var Qh={IteratorPrototype:Sn,BUGGY_SAFARI_ITERATORS:Zh},gS=Qh.IteratorPrototype,yS=Go,vS=Gr,bS=bn,xS=Yn,wS=function(){return this},Xh=function(e,t,r,n){var o=t+" Iterator";return e.prototype=yS(gS,{next:vS(+!n,r)}),bS(e,o,!1,!0),xS[o]=wS,e},ef=Ce,$S=St,SS=ef.String,kS=ef.TypeError,AS=at,ES=Zt,OS=function(e){if(typeof e=="object"||$S(e))return e;throw kS("Can't set "+SS(e)+" as a prototype")},_S=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=AS(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch{}return function(n,o){return ES(n),OS(o),t?e(n,o):n.__proto__=o,n}}():void 0),TS=Ye,CS=Yt,IS=Xh,jS=ec,PS=bn,tf=Jo,rf=Yn,RS=nS.PROPER,Oi=Qh.BUGGY_SAFARI_ITERATORS,rc=ut("iterator"),nf="keys",_i="values",of="entries",LS=function(){return this},af=function(e,t,r,n,o,a,i){IS(r,t,n);var s,l,c,d=function(h){if(h===o&&C)return C;if(!Oi&&h in m)return m[h];switch(h){case nf:case _i:case of:return function(){return new r(this,h)}}return function(){return new r(this)}},u=t+" Iterator",f=!1,m=e.prototype,$=m[rc]||m["@@iterator"]||o&&m[o],C=!Oi&&$||d(o),E=t=="Array"&&m.entries||$;if(E&&(s=jS(E.call(new e)))!==Object.prototype&&s.next&&(PS(s,u,!0,!0),rf[u]=LS),RS&&o==_i&&$&&$.name!==_i&&(f=!0,C=function(){return CS($,this)}),o)if(l={values:d(_i),keys:a?C:d(nf),entries:d(of)},i)for(c in l)(Oi||f||!(c in m))&&tf(m,c,l[c]);else TS({target:t,proto:!0,forced:Oi||f},l);return i&&m[rc]!==C&&tf(m,rc,C,{name:o}),rf[t]=C,l},NS=gr,sf=Yn,lf=Ar;tr.f;var FS=af,cf="Array Iterator",BS=lf.set,DS=lf.getterFor(cf);FS(Array,"Array",function(e,t){BS(this,{type:cf,target:NS(e),index:0,kind:t})},function(){var e=DS(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):r=="keys"?{value:n,done:!1}:r=="values"?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}},"values"),sf.Arguments=sf.Array;var zS={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},US=Ce,qS=Yr,MS=Kr,pf=Yn,uf=ut("toStringTag");for(var nc in zS){var df=US[nc],oc=df&&df.prototype;oc&&qS(oc)!==uf&&MS(oc,uf,nc),pf[nc]=pf.Array}var HS=st,hf=function(e,t){var r=[][e];return!!r&&HS(function(){r.call(null,t||function(){return 1},1)})},WS=Qr.forEach,ff=hf("forEach")?[].forEach:function(e){return WS(this,e,arguments.length>1?arguments[1]:void 0)};Ye({target:"Array",proto:!0,forced:[].forEach!=ff},{forEach:ff});var VS=cr("Array").forEach,GS=Yr,KS=Ft,JS=Mt,YS=VS,ac=Array.prototype,ZS={DOMTokenList:!0,NodeList:!0},mf=function(e){var t=e.forEach;return e===ac||JS(ac,e)&&t===ac.forEach||KS(ZS,GS(e))?YS:t},QS=lr,XS=Ko,ek=yi,tk=Zt,rk=at([].concat),gf=QS("Reflect","ownKeys")||function(e){var t=XS.f(tk(e)),r=ek.f;return r?rk(t,r(e)):t},nk=gf,ok=gr,ak=hn,ik=Vn;Ye({target:"Object",stat:!0,sham:!qt},{getOwnPropertyDescriptors:function(e){for(var t,r,n=ok(e),o=ak.f,a=nk(n),i={},s=0;a.length>s;)(r=o(n,t=a[s++]))!==void 0&&ik(i,t,r);return i}});var yf=_t.Object.getOwnPropertyDescriptors,vf={exports:{}},sk=Ye,lk=qt,bf=hi.f;sk({target:"Object",stat:!0,forced:Object.defineProperties!==bf,sham:!lk},{defineProperties:bf});var xf=_t.Object,ck=vf.exports=function(e,t){return xf.defineProperties(e,t)};xf.defineProperties.sham&&(ck.sham=!0);var pk=vf.exports,wf={exports:{}},uk=Ye,dk=qt,$f=tr.f;uk({target:"Object",stat:!0,forced:Object.defineProperty!==$f,sham:!dk},{defineProperty:$f});var Sf=_t.Object,hk=wf.exports=function(e,t,r){return Sf.defineProperty(e,t,r)};Sf.defineProperty.sham&&(hk.sham=!0);var Ti=wf.exports;function fk(e,t,r){return t in e?Ti(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function kf(e,t){var r=Jd(e);if(Ei){var n=Ei(e);t&&(n=J$(n).call(n,function(o){return Gh(e,o).enumerable})),r.push.apply(r,n)}return r}function dt(e){for(var t=1;t<arguments.length;t++){var r,n,o=arguments[t]!=null?arguments[t]:{};t%2?mf(r=kf(Object(o),!0)).call(r,function(a){fk(e,a,o[a])}):yf?pk(e,yf(o)):mf(n=kf(Object(o))).call(n,function(a){Ti(e,a,Gh(o,a))})}return e}var Af=qt,mk=at,gk=Yt,yk=st,ic=Wo,vk=yi,bk=zo,xk=Br,wk=al,Zn=Object.assign,Ef=Object.defineProperty,$k=mk([].concat),Of=!Zn||yk(function(){if(Af&&Zn({b:1},Zn(Ef({},"a",{enumerable:!0,get:function(){Ef(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(o){t[o]=o}),Zn({},e)[r]!=7||ic(Zn({},t)).join("")!=n})?function(e,t){for(var r=xk(e),n=arguments.length,o=1,a=vk.f,i=bk.f;n>o;)for(var s,l=wk(arguments[o++]),c=a?$k(ic(l),a(l)):ic(l),d=c.length,u=0;d>u;)s=c[u++],Af&&!gk(i,l,s)||(r[s]=l[s]);return r}:Zn;Ye({target:"Object",stat:!0,forced:Object.assign!==Of},{assign:Of});var pr=_t.Object.assign,Sk=Ot,kk=fn,Ak=ut("match"),Ek=function(e){var t;return Sk(e)&&((t=e[Ak])!==void 0?!!t:kk(e)=="RegExp")},Ok=Ce.TypeError,_f=function(e){if(Ek(e))throw Ok("The method doesn't accept regular expressions");return e},_k=ut("match"),Tf=function(e){var t=/./;try{"/./"[e](t)}catch{try{return t[_k]=!1,"/./"[e](t)}catch{}}return!1},Tk=Ye,Cf=at,Ck=Md,If=vn,Ik=_f,jk=Uo,Pk=Tf,jf=Cf("".startsWith),Rk=Cf("".slice),Lk=Math.min;Tk({target:"String",proto:!0,forced:!Pk("startsWith")},{startsWith:function(e){var t=If(jk(this));Ik(e);var r=Ck(Lk(arguments.length>1?arguments[1]:void 0,t.length)),n=If(e);return jf?jf(t,n,r):Rk(t,r,r+n.length)===n}});var Nk=cr("String").startsWith,Fk=Mt,Bk=Nk,sc=String.prototype,Pf=function(e){var t=e.startsWith;return typeof e=="string"||e===sc||Fk(sc,e)&&t===sc.startsWith?Bk:t},rr={},lc={exports:{}};(function(e,t){(function(r){var n=t&&!t.nodeType&&t,o=e&&!e.nodeType&&e,a=typeof O.g=="object"&&O.g;a.global!==a&&a.window!==a&&a.self!==a||(r=a);var i,s,l=2147483647,c=36,d=/^xn--/,u=/[^\x20-\x7E]/,f=/[\x2E\u3002\uFF0E\uFF61]/g,m={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},$=Math.floor,C=String.fromCharCode;function E(L){throw RangeError(m[L])}function h(L,U){for(var j=L.length,k=[];j--;)k[j]=U(L[j]);return k}function D(L,U){var j=L.split("@"),k="";return j.length>1&&(k=j[0]+"@",L=j[1]),k+h((L=L.replace(f,".")).split("."),U).join(".")}function F(L){for(var U,j,k=[],R=0,te=L.length;R<te;)(U=L.charCodeAt(R++))>=55296&&U<=56319&&R<te?(64512&(j=L.charCodeAt(R++)))==56320?k.push(((1023&U)<<10)+(1023&j)+65536):(k.push(U),R--):k.push(U);return k}function M(L){return h(L,function(U){var j="";return U>65535&&(j+=C((U-=65536)>>>10&1023|55296),U=56320|1023&U),j+=C(U)}).join("")}function Z(L,U){return L+22+75*(L<26)-((U!=0)<<5)}function N(L,U,j){var k=0;for(L=j?$(L/700):L>>1,L+=$(L/U);L>455;k+=c)L=$(L/35);return $(k+36*L/(L+38))}function Q(L){var U,j,k,R,te,oe,ge,J,W,le,Se,we=[],Fe=L.length,Be=0,et=128,He=72;for((j=L.lastIndexOf("-"))<0&&(j=0),k=0;k<j;++k)L.charCodeAt(k)>=128&&E("not-basic"),we.push(L.charCodeAt(k));for(R=j>0?j+1:0;R<Fe;){for(te=Be,oe=1,ge=c;R>=Fe&&E("invalid-input"),((J=(Se=L.charCodeAt(R++))-48<10?Se-22:Se-65<26?Se-65:Se-97<26?Se-97:c)>=c||J>$((l-Be)/oe))&&E("overflow"),Be+=J*oe,!(J<(W=ge<=He?1:ge>=He+26?26:ge-He));ge+=c)oe>$(l/(le=c-W))&&E("overflow"),oe*=le;He=N(Be-te,U=we.length+1,te==0),$(Be/U)>l-et&&E("overflow"),et+=$(Be/U),Be%=U,we.splice(Be++,0,et)}return M(we)}function T(L){var U,j,k,R,te,oe,ge,J,W,le,Se,we,Fe,Be,et,He=[];for(we=(L=F(L)).length,U=128,j=0,te=72,oe=0;oe<we;++oe)(Se=L[oe])<128&&He.push(C(Se));for(k=R=He.length,R&&He.push("-");k<we;){for(ge=l,oe=0;oe<we;++oe)(Se=L[oe])>=U&&Se<ge&&(ge=Se);for(ge-U>$((l-j)/(Fe=k+1))&&E("overflow"),j+=(ge-U)*Fe,U=ge,oe=0;oe<we;++oe)if((Se=L[oe])<U&&++j>l&&E("overflow"),Se==U){for(J=j,W=c;!(J<(le=W<=te?1:W>=te+26?26:W-te));W+=c)et=J-le,Be=c-le,He.push(C(Z(le+et%Be,0))),J=$(et/Be);He.push(C(Z(J,0))),te=N(j,Fe,k==R),j=0,++k}++j,++U}return He.join("")}if(i={version:"1.3.2",ucs2:{decode:F,encode:M},decode:Q,encode:T,toASCII:function(L){return D(L,function(U){return u.test(U)?"xn--"+T(U):U})},toUnicode:function(L){return D(L,function(U){return d.test(U)?Q(U.slice(4).toLowerCase()):U})}},n&&o)if(e.exports==n)o.exports=i;else for(s in i)i.hasOwnProperty(s)&&(n[s]=i[s]);else r.punycode=i})(this)})(lc,lc.exports);var oa={};function Dk(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var aa=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};oa.decode=oa.parse=function(e,t,r,n){t=t||"&",r=r||"=";var o={};if(typeof e!="string"||e.length===0)return o;var a=/\+/g;e=e.split(t);var i=1e3;n&&typeof n.maxKeys=="number"&&(i=n.maxKeys);var s=e.length;i>0&&s>i&&(s=i);for(var l=0;l<s;++l){var c,d,u,f,m=e[l].replace(a,"%20"),$=m.indexOf(r);$>=0?(c=m.substr(0,$),d=m.substr($+1)):(c=m,d=""),u=decodeURIComponent(c),f=decodeURIComponent(d),Dk(o,u)?Array.isArray(o[u])?o[u].push(f):o[u]=[o[u],f]:o[u]=f}return o},oa.encode=oa.stringify=function(e,t,r,n){return t=t||"&",r=r||"=",e===null&&(e=void 0),typeof e=="object"?Object.keys(e).map(function(o){var a=encodeURIComponent(aa(o))+r;return Array.isArray(e[o])?e[o].map(function(i){return a+encodeURIComponent(aa(i))}).join(t):a+encodeURIComponent(aa(e[o]))}).join(t):n?encodeURIComponent(aa(n))+r+encodeURIComponent(aa(e)):""};var zk=lc.exports,Er={isString:function(e){return typeof e=="string"},isObject:function(e){return typeof e=="object"&&e!==null},isNull:function(e){return e===null},isNullOrUndefined:function(e){return e==null}};function ur(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}rr.parse=ia,rr.resolve=function(e,t){return ia(e,!1,!0).resolve(t)},rr.resolveObject=function(e,t){return e?ia(e,!1,!0).resolveObject(t):t},rr.format=function(e){return Er.isString(e)&&(e=ia(e)),e instanceof ur?e.format():ur.prototype.format.call(e)},rr.Url=ur;var Uk=/^([a-z0-9.+-]+:)/i,qk=/:[0-9]*$/,Mk=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Hk=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r",`
`,"	"]),cc=["'"].concat(Hk),Rf=["%","/","?",";","#"].concat(cc),Lf=["/","?","#"],Nf=/^[+a-z0-9A-Z_-]{0,63}$/,Wk=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Vk={javascript:!0,"javascript:":!0},pc={javascript:!0,"javascript:":!0},Qn={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},uc=oa;function ia(e,t,r){if(e&&Er.isObject(e)&&e instanceof ur)return e;var n=new ur;return n.parse(e,t,r),n}ur.prototype.parse=function(e,t,r){if(!Er.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),o=n!==-1&&n<e.indexOf("#")?"?":"#",a=e.split(o);a[0]=a[0].replace(/\\/g,"/");var i=e=a.join(o);if(i=i.trim(),!r&&e.split("#").length===1){var s=Mk.exec(i);if(s)return this.path=i,this.href=i,this.pathname=s[1],s[2]?(this.search=s[2],this.query=t?uc.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var l=Uk.exec(i);if(l){var c=(l=l[0]).toLowerCase();this.protocol=c,i=i.substr(l.length)}if(r||l||i.match(/^\/\/[^@\/]+@[^@\/]+/)){var d=i.substr(0,2)==="//";!d||l&&pc[l]||(i=i.substr(2),this.slashes=!0)}if(!pc[l]&&(d||l&&!Qn[l])){for(var u,f,m=-1,$=0;$<Lf.length;$++)(C=i.indexOf(Lf[$]))!==-1&&(m===-1||C<m)&&(m=C);for((f=m===-1?i.lastIndexOf("@"):i.lastIndexOf("@",m))!==-1&&(u=i.slice(0,f),i=i.slice(f+1),this.auth=decodeURIComponent(u)),m=-1,$=0;$<Rf.length;$++){var C;(C=i.indexOf(Rf[$]))!==-1&&(m===-1||C<m)&&(m=C)}m===-1&&(m=i.length),this.host=i.slice(0,m),i=i.slice(m),this.parseHost(),this.hostname=this.hostname||"";var E=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!E)for(var h=this.hostname.split(/\./),D=($=0,h.length);$<D;$++){var F=h[$];if(F&&!F.match(Nf)){for(var M="",Z=0,N=F.length;Z<N;Z++)F.charCodeAt(Z)>127?M+="x":M+=F[Z];if(!M.match(Nf)){var Q=h.slice(0,$),T=h.slice($+1),L=F.match(Wk);L&&(Q.push(L[1]),T.unshift(L[2])),T.length&&(i="/"+T.join(".")+i),this.hostname=Q.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),E||(this.hostname=zk.toASCII(this.hostname));var U=this.port?":"+this.port:"",j=this.hostname||"";this.host=j+U,this.href+=this.host,E&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),i[0]!=="/"&&(i="/"+i))}if(!Vk[c])for($=0,D=cc.length;$<D;$++){var k=cc[$];if(i.indexOf(k)!==-1){var R=encodeURIComponent(k);R===k&&(R=escape(k)),i=i.split(k).join(R)}}var te=i.indexOf("#");te!==-1&&(this.hash=i.substr(te),i=i.slice(0,te));var oe=i.indexOf("?");if(oe!==-1?(this.search=i.substr(oe),this.query=i.substr(oe+1),t&&(this.query=uc.parse(this.query)),i=i.slice(0,oe)):t&&(this.search="",this.query={}),i&&(this.pathname=i),Qn[c]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){U=this.pathname||"";var ge=this.search||"";this.path=U+ge}return this.href=this.format(),this},ur.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,a="";this.host?o=e+this.host:this.hostname&&(o=e+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&Er.isObject(this.query)&&Object.keys(this.query).length&&(a=uc.stringify(this.query));var i=this.search||a&&"?"+a||"";return t&&t.substr(-1)!==":"&&(t+=":"),this.slashes||(!t||Qn[t])&&o!==!1?(o="//"+(o||""),r&&r.charAt(0)!=="/"&&(r="/"+r)):o||(o=""),n&&n.charAt(0)!=="#"&&(n="#"+n),i&&i.charAt(0)!=="?"&&(i="?"+i),t+o+(r=r.replace(/[?#]/g,function(s){return encodeURIComponent(s)}))+(i=i.replace("#","%23"))+n},ur.prototype.resolve=function(e){return this.resolveObject(ia(e,!1,!0)).format()},ur.prototype.resolveObject=function(e){if(Er.isString(e)){var t=new ur;t.parse(e,!1,!0),e=t}for(var r=new ur,n=Object.keys(this),o=0;o<n.length;o++){var a=n[o];r[a]=this[a]}if(r.hash=e.hash,e.href==="")return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var i=Object.keys(e),s=0;s<i.length;s++){var l=i[s];l!=="protocol"&&(r[l]=e[l])}return Qn[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!Qn[e.protocol]){for(var c=Object.keys(e),d=0;d<c.length;d++){var u=c[d];r[u]=e[u]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||pc[e.protocol])r.pathname=e.pathname;else{for(var f=(e.pathname||"").split("/");f.length&&!(e.host=f.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),f[0]!==""&&f.unshift(""),f.length<2&&f.unshift(""),r.pathname=f.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var m=r.pathname||"",$=r.search||"";r.path=m+$}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var C=r.pathname&&r.pathname.charAt(0)==="/",E=e.host||e.pathname&&e.pathname.charAt(0)==="/",h=E||C||r.host&&e.pathname,D=h,F=r.pathname&&r.pathname.split("/")||[],M=(f=e.pathname&&e.pathname.split("/")||[],r.protocol&&!Qn[r.protocol]);if(M&&(r.hostname="",r.port=null,r.host&&(F[0]===""?F[0]=r.host:F.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(f[0]===""?f[0]=e.host:f.unshift(e.host)),e.host=null),h=h&&(f[0]===""||F[0]==="")),E)r.host=e.host||e.host===""?e.host:r.host,r.hostname=e.hostname||e.hostname===""?e.hostname:r.hostname,r.search=e.search,r.query=e.query,F=f;else if(f.length)F||(F=[]),F.pop(),F=F.concat(f),r.search=e.search,r.query=e.query;else if(!Er.isNullOrUndefined(e.search))return M&&(r.hostname=r.host=F.shift(),(L=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=L.shift(),r.host=r.hostname=L.shift())),r.search=e.search,r.query=e.query,Er.isNull(r.pathname)&&Er.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r;if(!F.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var Z=F.slice(-1)[0],N=(r.host||e.host||F.length>1)&&(Z==="."||Z==="..")||Z==="",Q=0,T=F.length;T>=0;T--)(Z=F[T])==="."?F.splice(T,1):Z===".."?(F.splice(T,1),Q++):Q&&(F.splice(T,1),Q--);if(!h&&!D)for(;Q--;Q)F.unshift("..");!h||F[0]===""||F[0]&&F[0].charAt(0)==="/"||F.unshift(""),N&&F.join("/").substr(-1)!=="/"&&F.push("");var L,U=F[0]===""||F[0]&&F[0].charAt(0)==="/";return M&&(r.hostname=r.host=U?"":F.length?F.shift():"",(L=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=L.shift(),r.host=r.hostname=L.shift())),(h=h||r.host&&F.length)&&!U&&F.unshift(""),F.length?r.pathname=F.join("/"):(r.pathname=null,r.path=null),Er.isNull(r.pathname)&&Er.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},ur.prototype.parseHost=function(){var e=this.host,t=qk.exec(e);t&&((t=t[0])!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var Gk=Ye,Kk=Ce,Jk=st,Yk=Vo,Zk=Ot,Qk=Br,Xk=Jr,Ff=Vn,eA=Pl,tA=na,rA=ni,Bf=ut("isConcatSpreadable"),Df=9007199254740991,zf="Maximum allowed index exceeded",Uf=Kk.TypeError,nA=rA>=51||!Jk(function(){var e=[];return e[Bf]=!1,e.concat()[0]!==e}),oA=tA("concat"),aA=function(e){if(!Zk(e))return!1;var t=e[Bf];return t!==void 0?!!t:Yk(e)};Gk({target:"Array",proto:!0,forced:!nA||!oA},{concat:function(e){var t,r,n,o,a,i=Qk(this),s=eA(i,0),l=0;for(t=-1,n=arguments.length;t<n;t++)if(aA(a=t===-1?i:arguments[t])){if(l+(o=Xk(a))>Df)throw Uf(zf);for(r=0;r<o;r++,l++)r in a&&Ff(s,l,a[r])}else{if(l>=Df)throw Uf(zf);Ff(s,l++,a)}return s.length=l,s}}),xt("asyncIterator"),xt("hasInstance"),xt("isConcatSpreadable"),xt("iterator"),xt("match"),xt("matchAll"),xt("replace"),xt("search"),xt("species"),xt("split"),xt("toPrimitive"),xt("toStringTag"),xt("unscopables"),bn(Ce.JSON,"JSON",!0);var iA=_t.Symbol;xt("asyncDispose"),xt("dispose"),xt("matcher"),xt("metadata"),xt("observable"),xt("patternMatch"),xt("replaceAll");var kn=iA,dc=at,sA=pi,lA=vn,cA=Uo,pA=dc("".charAt),qf=dc("".charCodeAt),uA=dc("".slice),Mf=function(e){return function(t,r){var n,o,a=lA(cA(t)),i=sA(r),s=a.length;return i<0||i>=s?e?"":void 0:(n=qf(a,i))<55296||n>56319||i+1===s||(o=qf(a,i+1))<56320||o>57343?e?pA(a,i):n:e?uA(a,i,i+2):o-56320+(n-55296<<10)+65536}},dA={codeAt:Mf(!1),charAt:Mf(!0)}.charAt,hA=vn,Hf=Ar,fA=af,Wf="String Iterator",mA=Hf.set,gA=Hf.getterFor(Wf);fA(String,"String",function(e){mA(this,{type:Wf,string:hA(e),index:0})},function(){var e,t=gA(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=dA(r,n),t.index+=e.length,{value:e,done:!1})});var yA=Yr,Vf=ul,vA=Yn,bA=ut("iterator"),sa=function(e){if(e!=null)return Vf(e,bA)||Vf(e,"@@iterator")||vA[yA(e)]},hc=sa;Ye({target:"Array",stat:!0},{isArray:Vo});var fc=_t.Array.isArray,xA=Ye,wA=Ce,Gf=Vo,$A=wi,SA=Ot,Kf=ui,kA=Jr,AA=gr,EA=Vn,OA=ut,_A=Al,TA=na("slice"),CA=OA("species"),mc=wA.Array,IA=Math.max;xA({target:"Array",proto:!0,forced:!TA},{slice:function(e,t){var r,n,o,a=AA(this),i=kA(a),s=Kf(e,i),l=Kf(t===void 0?i:t,i);if(Gf(a)&&(r=a.constructor,($A(r)&&(r===mc||Gf(r.prototype))||SA(r)&&(r=r[CA])===null)&&(r=void 0),r===mc||r===void 0))return _A(a,s,l);for(n=new(r===void 0?mc:r)(IA(l-s,0)),o=0;s<l;s++,o++)s in a&&EA(n,o,a[s]);return n.length=o,n}});var jA=cr("Array").slice,PA=Mt,RA=jA,gc=Array.prototype,Jf=function(e){var t=e.slice;return e===gc||PA(gc,e)&&t===gc.slice?RA:t},LA=Jf,NA=Yt,Yf=Zt,FA=ul,Zf=function(e,t,r){var n,o;Yf(e);try{if(!(n=FA(e,"return"))){if(t==="throw")throw r;return r}n=NA(n,e)}catch(a){o=!0,n=a}if(t==="throw")throw r;if(o)throw n;return Yf(n),r},BA=Zt,DA=Zf,zA=Yn,UA=ut("iterator"),qA=Array.prototype,Qf=function(e){return e!==void 0&&(zA.Array===e||qA[UA]===e)},MA=Yt,HA=mn,WA=Zt,VA=oi,GA=sa,KA=Ce.TypeError,yc=function(e,t){var r=arguments.length<2?GA(e):t;if(HA(r))return WA(MA(r,e));throw KA(VA(e)+" is not iterable")},JA=yn,YA=Yt,ZA=Br,QA=function(e,t,r,n){try{return n?t(BA(r)[0],r[1]):t(r)}catch(o){DA(e,"throw",o)}},XA=Qf,eE=wi,tE=Jr,Xf=Vn,rE=yc,nE=sa,em=Ce.Array,tm=ut("iterator"),rm=!1;try{var oE=0,nm={next:function(){return{done:!!oE++}},return:function(){rm=!0}};nm[tm]=function(){return this},Array.from(nm,function(){throw 2})}catch{}var om=function(e,t){if(!t&&!rm)return!1;var r=!1;try{var n={};n[tm]=function(){return{next:function(){return{done:r=!0}}}},e(n)}catch{}return r},aE=function(e){var t=ZA(e),r=eE(this),n=arguments.length,o=n>1?arguments[1]:void 0,a=o!==void 0;a&&(o=JA(o,n>2?arguments[2]:void 0));var i,s,l,c,d,u,f=nE(t),m=0;if(!f||this==em&&XA(f))for(i=tE(t),s=r?new this(i):em(i);i>m;m++)u=a?o(t[m],m):t[m],Xf(s,m,u);else for(d=(c=rE(t,f)).next,s=r?new this:[];!(l=YA(d,c)).done;m++)u=a?QA(c,o,[l.value,m],!0):l.value,Xf(s,m,u);return s.length=m,s};Ye({target:"Array",stat:!0,forced:!om(function(e){Array.from(e)})},{from:aE});var am=_t.Array.from,im=am;function vc(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function bc(e,t){var r;if(e){if(typeof e=="string")return vc(e,t);var n=LA(r=Object.prototype.toString.call(e)).call(r,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?im(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?vc(e,t):void 0}}function An(e,t){var r=kn!==void 0&&hc(e)||e["@@iterator"];if(!r){if(fc(e)||(r=bc(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return i=l.done,l},e:function(l){s=!0,a=l},f:function(){try{i||r.return==null||r.return()}finally{if(s)throw a}}}}var iE=vi.f("iterator");function lt(e){return(lt=typeof kn=="function"&&typeof iE=="symbol"?function(t){return typeof t}:function(t){return t&&typeof kn=="function"&&t.constructor===kn&&t!==kn.prototype?"symbol":typeof t})(e)}function vr(e,t){return function(r){if(fc(r))return r}(e)||function(r,n){var o=r==null?null:kn!==void 0&&hc(r)||r["@@iterator"];if(o!=null){var a,i,s=[],l=!0,c=!1;try{for(o=o.call(r);!(l=(a=o.next()).done)&&(s.push(a.value),!n||s.length!==n);l=!0);}catch(d){c=!0,i=d}finally{try{l||o.return==null||o.return()}finally{if(c)throw i}}return s}}(e,t)||bc(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}var sm=Ft,sE=gf,lE=hn,cE=tr,pE=at("".replace),uE=String(Error("zxcasd").stack),lm=/\n\s*at [^:]*:[^\n]*/,dE=lm.test(uE),hE=Ot,fE=Kr,mE=yn,gE=Yt,yE=Zt,vE=oi,bE=Qf,xE=Jr,cm=Mt,wE=yc,$E=sa,pm=Zf,SE=Ce.TypeError,Ci=function(e,t){this.stopped=e,this.result=t},um=Ci.prototype,Xn=function(e,t,r){var n,o,a,i,s,l,c,d=r&&r.that,u=!(!r||!r.AS_ENTRIES),f=!(!r||!r.IS_ITERATOR),m=!(!r||!r.INTERRUPTED),$=mE(t,d),C=function(h){return n&&pm(n,"normal",h),new Ci(!0,h)},E=function(h){return u?(yE(h),m?$(h[0],h[1],C):$(h[0],h[1])):m?$(h,C):$(h)};if(f)n=e;else{if(!(o=$E(e)))throw SE(vE(e)+" is not iterable");if(bE(o)){for(a=0,i=xE(e);i>a;a++)if((s=E(e[a]))&&cm(um,s))return s;return new Ci(!1)}n=wE(e,o)}for(l=n.next;!(c=gE(l,n)).done;){try{s=E(c.value)}catch(h){pm(n,"throw",h)}if(typeof s=="object"&&s&&cm(um,s))return s}return new Ci(!1)},kE=vn,AE=Gr,EE=!st(function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",AE(1,7)),e.stack!==7)}),OE=Ye,_E=Ce,TE=Mt,CE=ec,Ii=_S,IE=function(e,t,r){for(var n=sE(t),o=cE.f,a=lE.f,i=0;i<n.length;i++){var s=n[i];sm(e,s)||r&&sm(r,s)||o(e,s,a(t,s))}},dm=Go,ji=Kr,xc=Gr,jE=function(e,t){if(dE&&typeof e=="string")for(;t--;)e=pE(e,lm,"");return e},PE=function(e,t){hE(t)&&"cause"in t&&fE(e,"cause",t.cause)},RE=Xn,LE=function(e,t){return e===void 0?arguments.length<2?"":t:kE(e)},NE=EE,FE=ut("toStringTag"),Pi=_E.Error,BE=[].push,la=function(e,t){var r,n=arguments.length>2?arguments[2]:void 0,o=TE(wc,this);Ii?r=Ii(new Pi,o?CE(this):wc):(r=o?this:dm(wc),ji(r,FE,"Error")),t!==void 0&&ji(r,"message",LE(t)),NE&&ji(r,"stack",jE(r.stack,1)),PE(r,n);var a=[];return RE(e,BE,{that:a}),ji(r,"errors",a),r};Ii?Ii(la,Pi):IE(la,Pi,{name:!0});var wc=la.prototype=dm(Pi.prototype,{constructor:xc(1,la),message:xc(1,""),name:xc(1,"AggregateError")});OE({global:!0},{AggregateError:la});var ca,eo,hm,$c,fm=Ce.Promise,DE=Jo,Ri=function(e,t,r){for(var n in t)r&&r.unsafe&&e[n]?e[n]=t[n]:DE(e,n,t[n],r);return e},zE=lr,UE=tr,qE=qt,mm=ut("species"),ME=Mt,HE=Ce.TypeError,Li=function(e,t){if(ME(t,e))return e;throw HE("Incorrect invocation")},WE=wi,VE=oi,GE=Ce.TypeError,gm=Zt,KE=function(e){if(WE(e))return e;throw GE(VE(e)+" is not a constructor")},JE=ut("species"),ym=function(e,t){var r,n=gm(e).constructor;return n===void 0||(r=gm(n)[JE])==null?t:KE(r)},YE=Ce.TypeError,vm=function(e,t){if(e<t)throw YE("Not enough arguments");return e},bm=/(?:ipad|iphone|ipod).*applewebkit/i.test(ri),Sc=fn(Ce.process)=="process",nr=Ce,ZE=Do,QE=yn,xm=St,XE=Ft,e2=st,wm=Zd,t2=Al,$m=yl,r2=vm,n2=bm,o2=Sc,kc=nr.setImmediate,Ac=nr.clearImmediate,a2=nr.process,Ec=nr.Dispatch,i2=nr.Function,Sm=nr.MessageChannel,s2=nr.String,Oc=0,pa={},l2="onreadystatechange";try{ca=nr.location}catch{}var _c=function(e){if(XE(pa,e)){var t=pa[e];delete pa[e],t()}},Tc=function(e){return function(){_c(e)}},km=function(e){_c(e.data)},Am=function(e){nr.postMessage(s2(e),ca.protocol+"//"+ca.host)};kc&&Ac||(kc=function(e){r2(arguments.length,1);var t=xm(e)?e:i2(e),r=t2(arguments,1);return pa[++Oc]=function(){ZE(t,void 0,r)},eo(Oc),Oc},Ac=function(e){delete pa[e]},o2?eo=function(e){a2.nextTick(Tc(e))}:Ec&&Ec.now?eo=function(e){Ec.now(Tc(e))}:Sm&&!n2?($c=(hm=new Sm).port2,hm.port1.onmessage=km,eo=QE($c.postMessage,$c)):nr.addEventListener&&xm(nr.postMessage)&&!nr.importScripts&&ca&&ca.protocol!=="file:"&&!e2(Am)?(eo=Am,nr.addEventListener("message",km,!1)):eo=l2 in $m("script")?function(e){wm.appendChild($m("script")).onreadystatechange=function(){wm.removeChild(this),_c(e)}}:function(e){setTimeout(Tc(e),0)});var ua,En,da,to,Cc,Ic,jc,Em,Om={set:kc,clear:Ac},c2=Ce,p2=/ipad|iphone|ipod/i.test(ri)&&c2.Pebble!==void 0,u2=/web0s(?!.*chrome)/i.test(ri),On=Ce,_m=yn,d2=hn.f,Pc=Om.set,h2=bm,f2=p2,m2=u2,Rc=Sc,Tm=On.MutationObserver||On.WebKitMutationObserver,Cm=On.document,Im=On.process,Ni=On.Promise,jm=d2(On,"queueMicrotask"),Pm=jm&&jm.value;Pm||(ua=function(){var e,t;for(Rc&&(e=Im.domain)&&e.exit();En;){t=En.fn,En=En.next;try{t()}catch(r){throw En?to():da=void 0,r}}da=void 0,e&&e.enter()},h2||Rc||m2||!Tm||!Cm?!f2&&Ni&&Ni.resolve?((jc=Ni.resolve(void 0)).constructor=Ni,Em=_m(jc.then,jc),to=function(){Em(ua)}):Rc?to=function(){Im.nextTick(ua)}:(Pc=_m(Pc,On),to=function(){Pc(ua)}):(Cc=!0,Ic=Cm.createTextNode(""),new Tm(ua).observe(Ic,{characterData:!0}),to=function(){Ic.data=Cc=!Cc}));var g2=Pm||function(e){var t={fn:e,next:void 0};da&&(da.next=t),En||(En=t,to()),da=t},ro={},Rm=mn,y2=function(e){var t,r;this.promise=new e(function(n,o){if(t!==void 0||r!==void 0)throw TypeError("Bad Promise constructor");t=n,r=o}),this.resolve=Rm(t),this.reject=Rm(r)};ro.f=function(e){return new y2(e)};var v2=Zt,b2=Ot,x2=ro,Lm=function(e,t){if(v2(e),b2(t)&&t.constructor===e)return t;var r=x2.f(e);return(0,r.resolve)(t),r.promise},w2=Ce,Fi=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}},Nm=function(){this.head=null,this.tail=null};Nm.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}};var Lc,Fm,Nc,$2=typeof window=="object",Bi=Ye,zr=Ce,S2=lr,tn=Yt,Fc=fm,k2=Ri,A2=bn,E2=function(e){var t=zE(e),r=UE.f;qE&&t&&!t[mm]&&r(t,mm,{configurable:!0,get:function(){return this}})},Bc=mn,Di=St,O2=Ot,_2=Li,T2=Ol,Bm=Xn,C2=om,I2=ym,Dm=Om.set,Dc=g2,j2=Lm,P2=function(e,t){var r=w2.console;r&&r.error&&(arguments.length==1?r.error(e):r.error(e,t))},zm=ro,zc=Fi,R2=Nm,Uc=Ar,L2=Bd,N2=$2,zi=Sc,Um=ni,F2=ut("species"),Or="Promise",qm=Uc.getterFor(Or),B2=Uc.set,D2=Uc.getterFor(Or),z2=Fc&&Fc.prototype,_r=Fc,Ui=z2,Mm=zr.TypeError,qc=zr.document,Mc=zr.process,no=zm.f,U2=no,q2=!!(qc&&qc.createEvent&&zr.dispatchEvent),Hm=Di(zr.PromiseRejectionEvent),Wm="unhandledrejection",qi=L2(Or,function(){var e=T2(_r),t=e!==String(_r);if(!t&&Um===66||!Ui.finally)return!0;if(Um>=51&&/native code/.test(e))return!1;var r=new _r(function(o){o(1)}),n=function(o){o(function(){},function(){})};return(r.constructor={})[F2]=n,!(r.then(function(){})instanceof n)||!t&&N2&&!Hm}),M2=qi||!C2(function(e){_r.all(e).catch(function(){})}),Vm=function(e){var t;return!(!O2(e)||!Di(t=e.then))&&t},Gm=function(e,t){var r,n,o,a=t.value,i=t.state==1,s=i?e.ok:e.fail,l=e.resolve,c=e.reject,d=e.domain;try{s?(i||(t.rejection===2&&W2(t),t.rejection=1),s===!0?r=a:(d&&d.enter(),r=s(a),d&&(d.exit(),o=!0)),r===e.promise?c(Mm("Promise-chain cycle")):(n=Vm(r))?tn(n,r,l,c):l(r)):c(a)}catch(u){d&&!o&&d.exit(),c(u)}},Km=function(e,t){e.notified||(e.notified=!0,Dc(function(){for(var r,n=e.reactions;r=n.get();)Gm(r,e);e.notified=!1,t&&!e.rejection&&H2(e)}))},Jm=function(e,t,r){var n,o;q2?((n=qc.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),zr.dispatchEvent(n)):n={promise:t,reason:r},!Hm&&(o=zr["on"+e])?o(n):e===Wm&&P2("Unhandled promise rejection",r)},H2=function(e){tn(Dm,zr,function(){var t,r=e.facade,n=e.value;if(Ym(e)&&(t=zc(function(){zi?Mc.emit("unhandledRejection",n,r):Jm(Wm,r,n)}),e.rejection=zi||Ym(e)?2:1,t.error))throw t.value})},Ym=function(e){return e.rejection!==1&&!e.parent},W2=function(e){tn(Dm,zr,function(){var t=e.facade;zi?Mc.emit("rejectionHandled",t):Jm("rejectionhandled",t,e.value)})},oo=function(e,t,r){return function(n){e(t,n,r)}},ao=function(e,t,r){e.done||(e.done=!0,r&&(e=r),e.value=t,e.state=2,Km(e,!0))},Hc=function(e,t,r){if(!e.done){e.done=!0,r&&(e=r);try{if(e.facade===t)throw Mm("Promise can't be resolved itself");var n=Vm(t);n?Dc(function(){var o={done:!1};try{tn(n,t,oo(Hc,o,e),oo(ao,o,e))}catch(a){ao(o,a,e)}}):(e.value=t,e.state=1,Km(e,!1))}catch(o){ao({done:!1},o,e)}}};qi&&(Ui=(_r=function(e){_2(this,Ui),Bc(e),tn(Lc,this);var t=qm(this);try{e(oo(Hc,t),oo(ao,t))}catch(r){ao(t,r)}}).prototype,(Lc=function(e){B2(this,{type:Or,done:!1,notified:!1,parent:!1,reactions:new R2,rejection:!1,state:0,value:void 0})}).prototype=k2(Ui,{then:function(e,t){var r=D2(this),n=no(I2(this,_r));return r.parent=!0,n.ok=!Di(e)||e,n.fail=Di(t)&&t,n.domain=zi?Mc.domain:void 0,r.state==0?r.reactions.add(n):Dc(function(){Gm(n,r)}),n.promise},catch:function(e){return this.then(void 0,e)}}),Fm=function(){var e=new Lc,t=qm(e);this.promise=e,this.resolve=oo(Hc,t),this.reject=oo(ao,t)},zm.f=no=function(e){return e===_r||e===Nc?new Fm(e):U2(e)}),Bi({global:!0,wrap:!0,forced:qi},{Promise:_r}),A2(_r,Or,!1,!0),E2(Or),Nc=S2(Or),Bi({target:Or,stat:!0,forced:qi},{reject:function(e){var t=no(this);return tn(t.reject,void 0,e),t.promise}}),Bi({target:Or,stat:!0,forced:!0},{resolve:function(e){return j2(this===Nc?_r:this,e)}}),Bi({target:Or,stat:!0,forced:M2},{all:function(e){var t=this,r=no(t),n=r.resolve,o=r.reject,a=zc(function(){var i=Bc(t.resolve),s=[],l=0,c=1;Bm(e,function(d){var u=l++,f=!1;c++,tn(i,t,d).then(function(m){f||(f=!0,s[u]=m,--c||n(s))},o)}),--c||n(s)});return a.error&&o(a.value),r.promise},race:function(e){var t=this,r=no(t),n=r.reject,o=zc(function(){var a=Bc(t.resolve);Bm(e,function(i){tn(a,t,i).then(r.resolve,n)})});return o.error&&n(o.value),r.promise}});var V2=Yt,G2=mn,K2=ro,J2=Fi,Y2=Xn;Ye({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=K2.f(t),n=r.resolve,o=r.reject,a=J2(function(){var i=G2(t.resolve),s=[],l=0,c=1;Y2(e,function(d){var u=l++,f=!1;c++,V2(i,t,d).then(function(m){f||(f=!0,s[u]={status:"fulfilled",value:m},--c||n(s))},function(m){f||(f=!0,s[u]={status:"rejected",reason:m},--c||n(s))})}),--c||n(s)});return a.error&&o(a.value),r.promise}});var Z2=mn,Q2=lr,X2=Yt,eO=ro,tO=Fi,rO=Xn,Zm="No one promise resolved";Ye({target:"Promise",stat:!0},{any:function(e){var t=this,r=Q2("AggregateError"),n=eO.f(t),o=n.resolve,a=n.reject,i=tO(function(){var s=Z2(t.resolve),l=[],c=0,d=1,u=!1;rO(e,function(f){var m=c++,$=!1;d++,X2(s,t,f).then(function(C){$||u||(u=!0,o(C))},function(C){$||u||($=!0,l[m]=C,--d||a(new r(l,Zm)))})}),--d||a(new r(l,Zm))});return i.error&&a(i.value),n.promise}});var Qm=fm,nO=lr,oO=St,aO=ym,Xm=Lm;Ye({target:"Promise",proto:!0,real:!0,forced:!!Qm&&st(function(){Qm.prototype.finally.call({then:function(){}},function(){})})},{finally:function(e){var t=aO(this,nO("Promise")),r=oO(e);return this.then(r?function(n){return Xm(t,e()).then(function(){return n})}:e,r?function(n){return Xm(t,e()).then(function(){throw n})}:e)}});var eg=_t.Promise,iO=eg,sO=ro,lO=Fi;Ye({target:"Promise",stat:!0,forced:!0},{try:function(e){var t=sO.f(this),r=lO(e);return(r.error?t.reject:t.resolve)(r.value),t.promise}});var tg=iO;function rg(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(c){return void r(c)}s.done?t(l):tg.resolve(l).then(n,o)}function Wc(e){return function(){var t=this,r=arguments;return new tg(function(n,o){var a=e.apply(t,r);function i(l){rg(a,n,o,i,s,"next",l)}function s(l){rg(a,n,o,i,s,"throw",l)}i(void 0)})}}var ng={exports:{}};(function(e){var t=function(r){var n,o=Object.prototype,a=o.hasOwnProperty,i=typeof Symbol=="function"?Symbol:{},s=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function d(J,W,le){return Object.defineProperty(J,W,{value:le,enumerable:!0,configurable:!0,writable:!0}),J[W]}try{d({},"")}catch{d=function(W,le,Se){return W[le]=Se}}function u(J,W,le,Se){var we=W&&W.prototype instanceof D?W:D,Fe=Object.create(we.prototype),Be=new te(Se||[]);return Fe._invoke=function(et,He,Me){var Nt=m;return function(bt,Lr){if(Nt===C)throw new Error("Generator is already running");if(Nt===E){if(bt==="throw")throw Lr;return ge()}for(Me.method=bt,Me.arg=Lr;;){var Us=Me.delegate;if(Us){var La=j(Us,Me);if(La){if(La===h)continue;return La}}if(Me.method==="next")Me.sent=Me._sent=Me.arg;else if(Me.method==="throw"){if(Nt===m)throw Nt=E,Me.arg;Me.dispatchException(Me.arg)}else Me.method==="return"&&Me.abrupt("return",Me.arg);Nt=C;var Na=f(et,He,Me);if(Na.type==="normal"){if(Nt=Me.done?E:$,Na.arg===h)continue;return{value:Na.arg,done:Me.done}}Na.type==="throw"&&(Nt=E,Me.method="throw",Me.arg=Na.arg)}}}(J,le,Be),Fe}function f(J,W,le){try{return{type:"normal",arg:J.call(W,le)}}catch(Se){return{type:"throw",arg:Se}}}r.wrap=u;var m="suspendedStart",$="suspendedYield",C="executing",E="completed",h={};function D(){}function F(){}function M(){}var Z={};d(Z,s,function(){return this});var N=Object.getPrototypeOf,Q=N&&N(N(oe([])));Q&&Q!==o&&a.call(Q,s)&&(Z=Q);var T=M.prototype=D.prototype=Object.create(Z);function L(J){["next","throw","return"].forEach(function(W){d(J,W,function(le){return this._invoke(W,le)})})}function U(J,W){function le(we,Fe,Be,et){var He=f(J[we],J,Fe);if(He.type!=="throw"){var Me=He.arg,Nt=Me.value;return Nt&&typeof Nt=="object"&&a.call(Nt,"__await")?W.resolve(Nt.__await).then(function(bt){le("next",bt,Be,et)},function(bt){le("throw",bt,Be,et)}):W.resolve(Nt).then(function(bt){Me.value=bt,Be(Me)},function(bt){return le("throw",bt,Be,et)})}et(He.arg)}var Se;this._invoke=function(we,Fe){function Be(){return new W(function(et,He){le(we,Fe,et,He)})}return Se=Se?Se.then(Be,Be):Be()}}function j(J,W){var le=J.iterator[W.method];if(le===n){if(W.delegate=null,W.method==="throw"){if(J.iterator.return&&(W.method="return",W.arg=n,j(J,W),W.method==="throw"))return h;W.method="throw",W.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var Se=f(le,J.iterator,W.arg);if(Se.type==="throw")return W.method="throw",W.arg=Se.arg,W.delegate=null,h;var we=Se.arg;return we?we.done?(W[J.resultName]=we.value,W.next=J.nextLoc,W.method!=="return"&&(W.method="next",W.arg=n),W.delegate=null,h):we:(W.method="throw",W.arg=new TypeError("iterator result is not an object"),W.delegate=null,h)}function k(J){var W={tryLoc:J[0]};1 in J&&(W.catchLoc=J[1]),2 in J&&(W.finallyLoc=J[2],W.afterLoc=J[3]),this.tryEntries.push(W)}function R(J){var W=J.completion||{};W.type="normal",delete W.arg,J.completion=W}function te(J){this.tryEntries=[{tryLoc:"root"}],J.forEach(k,this),this.reset(!0)}function oe(J){if(J){var W=J[s];if(W)return W.call(J);if(typeof J.next=="function")return J;if(!isNaN(J.length)){var le=-1,Se=function we(){for(;++le<J.length;)if(a.call(J,le))return we.value=J[le],we.done=!1,we;return we.value=n,we.done=!0,we};return Se.next=Se}}return{next:ge}}function ge(){return{value:n,done:!0}}return F.prototype=M,d(T,"constructor",M),d(M,"constructor",F),F.displayName=d(M,c,"GeneratorFunction"),r.isGeneratorFunction=function(J){var W=typeof J=="function"&&J.constructor;return!!W&&(W===F||(W.displayName||W.name)==="GeneratorFunction")},r.mark=function(J){return Object.setPrototypeOf?Object.setPrototypeOf(J,M):(J.__proto__=M,d(J,c,"GeneratorFunction")),J.prototype=Object.create(T),J},r.awrap=function(J){return{__await:J}},L(U.prototype),d(U.prototype,l,function(){return this}),r.AsyncIterator=U,r.async=function(J,W,le,Se,we){we===void 0&&(we=Promise);var Fe=new U(u(J,W,le,Se),we);return r.isGeneratorFunction(W)?Fe:Fe.next().then(function(Be){return Be.done?Be.value:Fe.next()})},L(T),d(T,c,"Generator"),d(T,s,function(){return this}),d(T,"toString",function(){return"[object Generator]"}),r.keys=function(J){var W=[];for(var le in J)W.push(le);return W.reverse(),function Se(){for(;W.length;){var we=W.pop();if(we in J)return Se.value=we,Se.done=!1,Se}return Se.done=!0,Se}},r.values=oe,te.prototype={constructor:te,reset:function(J){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!J)for(var W in this)W.charAt(0)==="t"&&a.call(this,W)&&!isNaN(+W.slice(1))&&(this[W]=n)},stop:function(){this.done=!0;var J=this.tryEntries[0].completion;if(J.type==="throw")throw J.arg;return this.rval},dispatchException:function(J){if(this.done)throw J;var W=this;function le(He,Me){return Fe.type="throw",Fe.arg=J,W.next=He,Me&&(W.method="next",W.arg=n),!!Me}for(var Se=this.tryEntries.length-1;Se>=0;--Se){var we=this.tryEntries[Se],Fe=we.completion;if(we.tryLoc==="root")return le("end");if(we.tryLoc<=this.prev){var Be=a.call(we,"catchLoc"),et=a.call(we,"finallyLoc");if(Be&&et){if(this.prev<we.catchLoc)return le(we.catchLoc,!0);if(this.prev<we.finallyLoc)return le(we.finallyLoc)}else if(Be){if(this.prev<we.catchLoc)return le(we.catchLoc,!0)}else{if(!et)throw new Error("try statement without catch or finally");if(this.prev<we.finallyLoc)return le(we.finallyLoc)}}}},abrupt:function(J,W){for(var le=this.tryEntries.length-1;le>=0;--le){var Se=this.tryEntries[le];if(Se.tryLoc<=this.prev&&a.call(Se,"finallyLoc")&&this.prev<Se.finallyLoc){var we=Se;break}}we&&(J==="break"||J==="continue")&&we.tryLoc<=W&&W<=we.finallyLoc&&(we=null);var Fe=we?we.completion:{};return Fe.type=J,Fe.arg=W,we?(this.method="next",this.next=we.finallyLoc,h):this.complete(Fe)},complete:function(J,W){if(J.type==="throw")throw J.arg;return J.type==="break"||J.type==="continue"?this.next=J.arg:J.type==="return"?(this.rval=this.arg=J.arg,this.method="return",this.next="end"):J.type==="normal"&&W&&(this.next=W),h},finish:function(J){for(var W=this.tryEntries.length-1;W>=0;--W){var le=this.tryEntries[W];if(le.finallyLoc===J)return this.complete(le.completion,le.afterLoc),R(le),h}},catch:function(J){for(var W=this.tryEntries.length-1;W>=0;--W){var le=this.tryEntries[W];if(le.tryLoc===J){var Se=le.completion;if(Se.type==="throw"){var we=Se.arg;R(le)}return we}}throw new Error("illegal catch attempt")},delegateYield:function(J,W,le){return this.delegate={iterator:oe(J),resultName:W,nextLoc:le},this.method==="next"&&(this.arg=n),h}},r}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(ng);var Tr=ng.exports,cO=bl.includes;Ye({target:"Array",proto:!0},{includes:function(e){return cO(this,e,arguments.length>1?arguments[1]:void 0)}});var pO=cr("Array").includes,uO=Ye,dO=_f,hO=Uo,og=vn,fO=Tf,mO=at("".indexOf);uO({target:"String",proto:!0,forced:!fO("includes")},{includes:function(e){return!!~mO(og(hO(this)),og(dO(e)),arguments.length>1?arguments[1]:void 0)}});var gO=cr("String").includes,ag=Mt,yO=pO,vO=gO,Vc=Array.prototype,Gc=String.prototype,ha=function(e){var t=e.includes;return e===Vc||ag(Vc,e)&&t===Vc.includes?yO:typeof e=="string"||e===Gc||ag(Gc,e)&&t===Gc.includes?vO:t},bO=cr("Array").entries,xO=Yr,wO=Ft,$O=Mt,SO=bO,Kc=Array.prototype,kO={DOMTokenList:!0,NodeList:!0},ig=function(e){var t=e.entries;return e===Kc||$O(Kc,e)&&t===Kc.entries||wO(kO,xO(e))?SO:t},sg=am,AO=Ye,EO=lr,OO=Do,fa=at,_O=st,TO=Ce.Array,Mi=EO("JSON","stringify"),Hi=fa(/./.exec),lg=fa("".charAt),CO=fa("".charCodeAt),IO=fa("".replace),jO=fa(1 .toString),PO=/[\uD800-\uDFFF]/g,cg=/^[\uD800-\uDBFF]$/,pg=/^[\uDC00-\uDFFF]$/,RO=function(e,t,r){var n=lg(r,t-1),o=lg(r,t+1);return Hi(cg,e)&&!Hi(pg,o)||Hi(pg,e)&&!Hi(cg,n)?"\\u"+jO(CO(e,0),16):e},LO=_O(function(){return Mi("\uDF06\uD834")!=='"\\udf06\\ud834"'||Mi("\uDEAD")!=='"\\udead"'});Mi&&AO({target:"JSON",stat:!0,forced:LO},{stringify:function(e,t,r){for(var n=0,o=arguments.length,a=TO(o);n<o;n++)a[n]=arguments[n];var i=OO(Mi,null,a);return typeof i=="string"?IO(i,PO,RO):i}});var Jc=_t,NO=Do;Jc.JSON||(Jc.JSON={stringify:JSON.stringify});var Wi=function(e,t,r){return NO(Jc.JSON.stringify,null,arguments)},FO=Qr.map;Ye({target:"Array",proto:!0,forced:!na("map")},{map:function(e){return FO(this,e,arguments.length>1?arguments[1]:void 0)}});var BO=cr("Array").map,DO=Mt,zO=BO,Yc=Array.prototype,Xe=function(e){var t=e.map;return e===Yc||DO(Yc,e)&&t===Yc.map?zO:t},Ve=Kd,UO=cr("Array").concat,qO=Mt,MO=UO,Zc=Array.prototype,Ee=function(e){var t=e.concat;return e===Zc||qO(Zc,e)&&t===Zc.concat?MO:t},HO=qt,ug=at,WO=Wo,VO=gr,GO=ug(zo.f),KO=ug([].push),dg=function(e){return function(t){for(var r,n=VO(t),o=WO(n),a=o.length,i=0,s=[];a>i;)r=o[i++],HO&&!GO(n,r)||KO(s,e?[r,n[r]]:n[r]);return s}},JO={entries:dg(!0),values:dg(!1)}.entries;Ye({target:"Object",stat:!0},{entries:function(e){return JO(e)}});var hg=_t.Object.entries,dr=zh;(function(e){(function(t){var r="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,o="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch{return!1}}(),a="FormData"in e,i="ArrayBuffer"in e;if(i)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(T){return T&&s.indexOf(Object.prototype.toString.call(T))>-1};function c(T){if(typeof T!="string"&&(T=String(T)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(T))throw new TypeError("Invalid character in header field name");return T.toLowerCase()}function d(T){return typeof T!="string"&&(T=String(T)),T}function u(T){var L={next:function(){var U=T.shift();return{done:U===void 0,value:U}}};return n&&(L[Symbol.iterator]=function(){return L}),L}function f(T){this.map={},T instanceof f?T.forEach(function(L,U){this.append(U,L)},this):Array.isArray(T)?T.forEach(function(L){this.append(L[0],L[1])},this):T&&Object.getOwnPropertyNames(T).forEach(function(L){this.append(L,T[L])},this)}function m(T){if(T.bodyUsed)return Promise.reject(new TypeError("Already read"));T.bodyUsed=!0}function $(T){return new Promise(function(L,U){T.onload=function(){L(T.result)},T.onerror=function(){U(T.error)}})}function C(T){var L=new FileReader,U=$(L);return L.readAsArrayBuffer(T),U}function E(T){if(T.slice)return T.slice(0);var L=new Uint8Array(T.byteLength);return L.set(new Uint8Array(T)),L.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(T){var L;this._bodyInit=T,T?typeof T=="string"?this._bodyText=T:o&&Blob.prototype.isPrototypeOf(T)?this._bodyBlob=T:a&&FormData.prototype.isPrototypeOf(T)?this._bodyFormData=T:r&&URLSearchParams.prototype.isPrototypeOf(T)?this._bodyText=T.toString():i&&o&&(L=T)&&DataView.prototype.isPrototypeOf(L)?(this._bodyArrayBuffer=E(T.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i&&(ArrayBuffer.prototype.isPrototypeOf(T)||l(T))?this._bodyArrayBuffer=E(T):this._bodyText=T=Object.prototype.toString.call(T):this._bodyText="",this.headers.get("content-type")||(typeof T=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(T)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var T=m(this);if(T)return T;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?m(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(C)}),this.text=function(){var T=m(this);if(T)return T;if(this._bodyBlob)return function(L){var U=new FileReader,j=$(U);return U.readAsText(L),j}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(L){for(var U=new Uint8Array(L),j=new Array(U.length),k=0;k<U.length;k++)j[k]=String.fromCharCode(U[k]);return j.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(M)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(T,L){T=c(T),L=d(L);var U=this.map[T];this.map[T]=U?U+", "+L:L},f.prototype.delete=function(T){delete this.map[c(T)]},f.prototype.get=function(T){return T=c(T),this.has(T)?this.map[T]:null},f.prototype.has=function(T){return this.map.hasOwnProperty(c(T))},f.prototype.set=function(T,L){this.map[c(T)]=d(L)},f.prototype.forEach=function(T,L){for(var U in this.map)this.map.hasOwnProperty(U)&&T.call(L,this.map[U],U,this)},f.prototype.keys=function(){var T=[];return this.forEach(function(L,U){T.push(U)}),u(T)},f.prototype.values=function(){var T=[];return this.forEach(function(L){T.push(L)}),u(T)},f.prototype.entries=function(){var T=[];return this.forEach(function(L,U){T.push([U,L])}),u(T)},n&&(f.prototype[Symbol.iterator]=f.prototype.entries);var D=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function F(T,L){var U=(L=L||{}).body;if(T instanceof F){if(T.bodyUsed)throw new TypeError("Already read");this.url=T.url,this.credentials=T.credentials,L.headers||(this.headers=new f(T.headers)),this.method=T.method,this.mode=T.mode,this.signal=T.signal,U||T._bodyInit==null||(U=T._bodyInit,T.bodyUsed=!0)}else this.url=String(T);if(this.credentials=L.credentials||this.credentials||"same-origin",!L.headers&&this.headers||(this.headers=new f(L.headers)),this.method=function(j){var k=j.toUpperCase();return D.indexOf(k)>-1?k:j}(L.method||this.method||"GET"),this.mode=L.mode||this.mode||null,this.signal=L.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&U)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(U)}function M(T){var L=new FormData;return T.trim().split("&").forEach(function(U){if(U){var j=U.split("="),k=j.shift().replace(/\+/g," "),R=j.join("=").replace(/\+/g," ");L.append(decodeURIComponent(k),decodeURIComponent(R))}}),L}function Z(T,L){L||(L={}),this.type="default",this.status=L.status===void 0?200:L.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in L?L.statusText:"OK",this.headers=new f(L.headers),this.url=L.url||"",this._initBody(T)}F.prototype.clone=function(){return new F(this,{body:this._bodyInit})},h.call(F.prototype),h.call(Z.prototype),Z.prototype.clone=function(){return new Z(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},Z.error=function(){var T=new Z(null,{status:0,statusText:""});return T.type="error",T};var N=[301,302,303,307,308];Z.redirect=function(T,L){if(N.indexOf(L)===-1)throw new RangeError("Invalid status code");return new Z(null,{status:L,headers:{location:T}})},t.DOMException=e.DOMException;try{new t.DOMException}catch{t.DOMException=function(L,U){this.message=L,this.name=U;var j=Error(L);this.stack=j.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function Q(T,L){return new Promise(function(U,j){var k=new F(T,L);if(k.signal&&k.signal.aborted)return j(new t.DOMException("Aborted","AbortError"));var R=new XMLHttpRequest;function te(){R.abort()}R.onload=function(){var oe,ge,J={status:R.status,statusText:R.statusText,headers:(oe=R.getAllResponseHeaders()||"",ge=new f,oe.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(le){var Se=le.split(":"),we=Se.shift().trim();if(we){var Fe=Se.join(":").trim();ge.append(we,Fe)}}),ge)};J.url="responseURL"in R?R.responseURL:J.headers.get("X-Request-URL");var W="response"in R?R.response:R.responseText;U(new Z(W,J))},R.onerror=function(){j(new TypeError("Network request failed"))},R.ontimeout=function(){j(new TypeError("Network request failed"))},R.onabort=function(){j(new t.DOMException("Aborted","AbortError"))},R.open(k.method,k.url,!0),k.credentials==="include"?R.withCredentials=!0:k.credentials==="omit"&&(R.withCredentials=!1),"responseType"in R&&o&&(R.responseType="blob"),k.headers.forEach(function(oe,ge){R.setRequestHeader(ge,oe)}),k.signal&&(k.signal.addEventListener("abort",te),R.onreadystatechange=function(){R.readyState===4&&k.signal.removeEventListener("abort",te)}),R.send(k._bodyInit===void 0?null:k._bodyInit)})}Q.polyfill=!0,e.fetch||(e.fetch=Q,e.Headers=f,e.Request=F,e.Response=Z),t.Headers=f,t.Request=F,t.Response=Z,t.fetch=Q,Object.defineProperty(t,"__esModule",{value:!0})})({})})(typeof self<"u"?self:globalThis);var Ge,fg=typeof Symbol<"u"&&Symbol,YO=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),r=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;for(t in e[t]=42,e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var n=Object.getOwnPropertySymbols(e);if(n.length!==1||n[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var o=Object.getOwnPropertyDescriptor(e,t);if(o.value!==42||o.enumerable!==!0)return!1}return!0},ZO="Function.prototype.bind called on incompatible ",Qc=Array.prototype.slice,QO=Object.prototype.toString,XO="[object Function]",e_=function(e){var t=this;if(typeof t!="function"||QO.call(t)!==XO)throw new TypeError(ZO+t);for(var r,n=Qc.call(arguments,1),o=function(){if(this instanceof r){var c=t.apply(this,n.concat(Qc.call(arguments)));return Object(c)===c?c:this}return t.apply(e,n.concat(Qc.call(arguments)))},a=Math.max(0,t.length-n.length),i=[],s=0;s<a;s++)i.push("$"+s);if(r=Function("binder","return function ("+i.join(",")+"){ return binder.apply(this,arguments); }")(o),t.prototype){var l=function(){};l.prototype=t.prototype,r.prototype=new l,l.prototype=null}return r},Xc=Function.prototype.bind||e_,t_=Xc.call(Function.call,Object.prototype.hasOwnProperty),ma=SyntaxError,mg=Function,io=TypeError,ep=function(e){try{return mg('"use strict"; return ('+e+").constructor;")()}catch{}},_n=Object.getOwnPropertyDescriptor;if(_n)try{_n({},"")}catch{_n=null}var tp=function(){throw new io},r_=_n?function(){try{return tp}catch{try{return _n(arguments,"callee").get}catch{return tp}}}():tp,so=typeof fg=="function"&&typeof Symbol=="function"&&typeof fg("foo")=="symbol"&&typeof Symbol("bar")=="symbol"&&YO(),rn=Object.getPrototypeOf||function(e){return e.__proto__},lo={},n_=typeof Uint8Array>"u"?Ge:rn(Uint8Array),co={"%AggregateError%":typeof AggregateError>"u"?Ge:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?Ge:ArrayBuffer,"%ArrayIteratorPrototype%":so?rn([][Symbol.iterator]()):Ge,"%AsyncFromSyncIteratorPrototype%":Ge,"%AsyncFunction%":lo,"%AsyncGenerator%":lo,"%AsyncGeneratorFunction%":lo,"%AsyncIteratorPrototype%":lo,"%Atomics%":typeof Atomics>"u"?Ge:Atomics,"%BigInt%":typeof BigInt>"u"?Ge:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?Ge:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array>"u"?Ge:Float32Array,"%Float64Array%":typeof Float64Array>"u"?Ge:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?Ge:FinalizationRegistry,"%Function%":mg,"%GeneratorFunction%":lo,"%Int8Array%":typeof Int8Array>"u"?Ge:Int8Array,"%Int16Array%":typeof Int16Array>"u"?Ge:Int16Array,"%Int32Array%":typeof Int32Array>"u"?Ge:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":so?rn(rn([][Symbol.iterator]())):Ge,"%JSON%":typeof JSON=="object"?JSON:Ge,"%Map%":typeof Map>"u"?Ge:Map,"%MapIteratorPrototype%":typeof Map<"u"&&so?rn(new Map()[Symbol.iterator]()):Ge,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?Ge:Promise,"%Proxy%":typeof Proxy>"u"?Ge:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect>"u"?Ge:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?Ge:Set,"%SetIteratorPrototype%":typeof Set<"u"&&so?rn(new Set()[Symbol.iterator]()):Ge,"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?Ge:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":so?rn(""[Symbol.iterator]()):Ge,"%Symbol%":so?Symbol:Ge,"%SyntaxError%":ma,"%ThrowTypeError%":r_,"%TypedArray%":n_,"%TypeError%":io,"%Uint8Array%":typeof Uint8Array>"u"?Ge:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?Ge:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?Ge:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?Ge:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap>"u"?Ge:WeakMap,"%WeakRef%":typeof WeakRef>"u"?Ge:WeakRef,"%WeakSet%":typeof WeakSet>"u"?Ge:WeakSet},o_=function e(t){var r;if(t==="%AsyncFunction%")r=ep("async function () {}");else if(t==="%GeneratorFunction%")r=ep("function* () {}");else if(t==="%AsyncGeneratorFunction%")r=ep("async function* () {}");else if(t==="%AsyncGenerator%"){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if(t==="%AsyncIteratorPrototype%"){var o=e("%AsyncGenerator%");o&&(r=rn(o.prototype))}return co[t]=r,r},gg={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Vi=Xc,Gi=t_,a_=Vi.call(Function.call,Array.prototype.concat),i_=Vi.call(Function.apply,Array.prototype.splice),yg=Vi.call(Function.call,String.prototype.replace),Ki=Vi.call(Function.call,String.prototype.slice),s_=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,l_=/\\(\\)?/g,c_=function(e){var t=Ki(e,0,1),r=Ki(e,-1);if(t==="%"&&r!=="%")throw new ma("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&t!=="%")throw new ma("invalid intrinsic syntax, expected opening `%`");var n=[];return yg(e,s_,function(o,a,i,s){n[n.length]=i?yg(s,l_,"$1"):a||o}),n},p_=function(e,t){var r,n=e;if(Gi(gg,n)&&(n="%"+(r=gg[n])[0]+"%"),Gi(co,n)){var o=co[n];if(o===lo&&(o=o_(n)),o===void 0&&!t)throw new io("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:o}}throw new ma("intrinsic "+e+" does not exist!")},rp=function(e,t){if(typeof e!="string"||e.length===0)throw new io("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new io('"allowMissing" argument must be a boolean');var r=c_(e),n=r.length>0?r[0]:"",o=p_("%"+n+"%",t),a=o.name,i=o.value,s=!1,l=o.alias;l&&(n=l[0],i_(r,a_([0,1],l)));for(var c=1,d=!0;c<r.length;c+=1){var u=r[c],f=Ki(u,0,1),m=Ki(u,-1);if((f==='"'||f==="'"||f==="`"||m==='"'||m==="'"||m==="`")&&f!==m)throw new ma("property names with quotes must have matching quotes");if(u!=="constructor"&&d||(s=!0),Gi(co,a="%"+(n+="."+u)+"%"))i=co[a];else if(i!=null){if(!(u in i)){if(!t)throw new io("base intrinsic for "+e+" exists, but the property is not available.");return}if(_n&&c+1>=r.length){var $=_n(i,u);i=(d=!!$)&&"get"in $&&!("originalValue"in $.get)?$.get:i[u]}else d=Gi(i,u),i=i[u];d&&!s&&(co[a]=i)}}return i},vg={exports:{}};(function(e){var t=Xc,r=rp,n=r("%Function.prototype.apply%"),o=r("%Function.prototype.call%"),a=r("%Reflect.apply%",!0)||t.call(o,n),i=r("%Object.getOwnPropertyDescriptor%",!0),s=r("%Object.defineProperty%",!0),l=r("%Math.max%");if(s)try{s({},"a",{value:1})}catch{s=null}e.exports=function(d){var u=a(t,o,arguments);if(i&&s){var f=i(u,"length");f.configurable&&s(u,"length",{value:1+l(0,d.length-(arguments.length-1))})}return u};var c=function(){return a(t,n,arguments)};s?s(e.exports,"apply",{value:c}):e.exports.apply=c})(vg);var bg=rp,xg=vg.exports,u_=xg(bg("String.prototype.indexOf")),d_=rx(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{}})),np=typeof Map=="function"&&Map.prototype,op=Object.getOwnPropertyDescriptor&&np?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Ji=np&&op&&typeof op.get=="function"?op.get:null,h_=np&&Map.prototype.forEach,ap=typeof Set=="function"&&Set.prototype,ip=Object.getOwnPropertyDescriptor&&ap?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Yi=ap&&ip&&typeof ip.get=="function"?ip.get:null,f_=ap&&Set.prototype.forEach,ga=typeof WeakMap=="function"&&WeakMap.prototype?WeakMap.prototype.has:null,ya=typeof WeakSet=="function"&&WeakSet.prototype?WeakSet.prototype.has:null,wg=typeof WeakRef=="function"&&WeakRef.prototype?WeakRef.prototype.deref:null,m_=Boolean.prototype.valueOf,g_=Object.prototype.toString,y_=Function.prototype.toString,v_=String.prototype.match,sp=String.prototype.slice,nn=String.prototype.replace,b_=String.prototype.toUpperCase,$g=String.prototype.toLowerCase,Sg=RegExp.prototype.test,kg=Array.prototype.concat,Cr=Array.prototype.join,x_=Array.prototype.slice,Ag=Math.floor,lp=typeof BigInt=="function"?BigInt.prototype.valueOf:null,cp=Object.getOwnPropertySymbols,pp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,po=typeof Symbol=="function"&&typeof Symbol.iterator=="object",Ht=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===po||"symbol")?Symbol.toStringTag:null,Eg=Object.prototype.propertyIsEnumerable,Og=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function _g(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||Sg.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof e=="number"){var n=e<0?-Ag(-e):Ag(e);if(n!==e){var o=String(n),a=sp.call(t,o.length+1);return nn.call(o,r,"$&_")+"."+nn.call(nn.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return nn.call(t,r,"$&_")}var up=d_.custom,dp=up&&Cg(up)?up:null;function Tg(e,t,r){var n=(r.quoteStyle||t)==="double"?'"':"'";return n+e+n}function w_(e){return nn.call(String(e),/"/g,"&quot;")}function hp(e){return!(an(e)!=="[object Array]"||Ht&&typeof e=="object"&&Ht in e)}function Cg(e){if(po)return e&&typeof e=="object"&&e instanceof Symbol;if(typeof e=="symbol")return!0;if(!e||typeof e!="object"||!pp)return!1;try{return pp.call(e),!0}catch{}return!1}var $_=Object.prototype.hasOwnProperty||function(e){return e in this};function on(e,t){return $_.call(e,t)}function an(e){return g_.call(e)}function Ig(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function jg(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,n="... "+r+" more character"+(r>1?"s":"");return jg(sp.call(e,0,t.maxStringLength),t)+n}return Tg(nn.call(nn.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,S_),"single",t)}function S_(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+b_.call(t.toString(16))}function va(e){return"Object("+e+")"}function fp(e){return e+" { ? }"}function Pg(e,t,r,n){return e+" ("+t+") {"+(n?mp(r,n):Cr.call(r,", "))+"}"}function mp(e,t){if(e.length===0)return"";var r=`
`+t.prev+t.base;return r+Cr.call(e,","+r)+`
`+t.prev}function Zi(e,t){var r=hp(e),n=[];if(r){n.length=e.length;for(var o=0;o<e.length;o++)n[o]=on(e,o)?t(e[o],e):""}var a,i=typeof cp=="function"?cp(e):[];if(po){a={};for(var s=0;s<i.length;s++)a["$"+i[s]]=i[s]}for(var l in e)on(e,l)&&(r&&String(Number(l))===l&&l<e.length||po&&a["$"+l]instanceof Symbol||(Sg.call(/[^\w$]/,l)?n.push(t(l,e)+": "+t(e[l],e)):n.push(l+": "+t(e[l],e))));if(typeof cp=="function")for(var c=0;c<i.length;c++)Eg.call(e,i[c])&&n.push("["+t(i[c])+"]: "+t(e[i[c]],e));return n}var gp=rp,uo=function(e,t){var r=bg(e,!!t);return typeof r=="function"&&u_(e,".prototype.")>-1?xg(r):r},k_=function e(t,r,n,o){var a=r||{};if(on(a,"quoteStyle")&&a.quoteStyle!=="single"&&a.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(on(a,"maxStringLength")&&(typeof a.maxStringLength=="number"?a.maxStringLength<0&&a.maxStringLength!==1/0:a.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=!on(a,"customInspect")||a.customInspect;if(typeof i!="boolean"&&i!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(on(a,"indent")&&a.indent!==null&&a.indent!=="	"&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(on(a,"numericSeparator")&&typeof a.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var s=a.numericSeparator;if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="boolean")return t?"true":"false";if(typeof t=="string")return jg(t,a);if(typeof t=="number"){if(t===0)return 1/0/t>0?"0":"-0";var l=String(t);return s?_g(t,l):l}if(typeof t=="bigint"){var c=String(t)+"n";return s?_g(t,c):c}var d=a.depth===void 0?5:a.depth;if(n===void 0&&(n=0),n>=d&&d>0&&typeof t=="object")return hp(t)?"[Array]":"[Object]";var u=function(k,R){var te;if(k.indent==="	")te="	";else{if(!(typeof k.indent=="number"&&k.indent>0))return null;te=Cr.call(Array(k.indent+1)," ")}return{base:te,prev:Cr.call(Array(R+1),te)}}(a,n);if(o===void 0)o=[];else if(Ig(o,t)>=0)return"[Circular]";function f(k,R,te){if(R&&(o=x_.call(o)).push(R),te){var oe={depth:a.depth};return on(a,"quoteStyle")&&(oe.quoteStyle=a.quoteStyle),e(k,oe,n+1,o)}return e(k,a,n+1,o)}if(typeof t=="function"){var m=function(k){if(k.name)return k.name;var R=v_.call(y_.call(k),/^function\s*([\w$]+)/);return R?R[1]:null}(t),$=Zi(t,f);return"[Function"+(m?": "+m:" (anonymous)")+"]"+($.length>0?" { "+Cr.call($,", ")+" }":"")}if(Cg(t)){var C=po?nn.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):pp.call(t);return typeof t!="object"||po?C:va(C)}if(function(k){return!k||typeof k!="object"?!1:typeof HTMLElement<"u"&&k instanceof HTMLElement?!0:typeof k.nodeName=="string"&&typeof k.getAttribute=="function"}(t)){for(var E="<"+$g.call(String(t.nodeName)),h=t.attributes||[],D=0;D<h.length;D++)E+=" "+h[D].name+"="+Tg(w_(h[D].value),"double",a);return E+=">",t.childNodes&&t.childNodes.length&&(E+="..."),E+="</"+$g.call(String(t.nodeName))+">"}if(hp(t)){if(t.length===0)return"[]";var F=Zi(t,f);return u&&!function(k){for(var R=0;R<k.length;R++)if(Ig(k[R],`
`)>=0)return!1;return!0}(F)?"["+mp(F,u)+"]":"[ "+Cr.call(F,", ")+" ]"}if(function(k){return!(an(k)!=="[object Error]"||Ht&&typeof k=="object"&&Ht in k)}(t)){var M=Zi(t,f);return"cause"in t&&!Eg.call(t,"cause")?"{ ["+String(t)+"] "+Cr.call(kg.call("[cause]: "+f(t.cause),M),", ")+" }":M.length===0?"["+String(t)+"]":"{ ["+String(t)+"] "+Cr.call(M,", ")+" }"}if(typeof t=="object"&&i){if(dp&&typeof t[dp]=="function")return t[dp]();if(i!=="symbol"&&typeof t.inspect=="function")return t.inspect()}if(function(k){if(!Ji||!k||typeof k!="object")return!1;try{Ji.call(k);try{Yi.call(k)}catch{return!0}return k instanceof Map}catch{}return!1}(t)){var Z=[];return h_.call(t,function(k,R){Z.push(f(R,t,!0)+" => "+f(k,t))}),Pg("Map",Ji.call(t),Z,u)}if(function(k){if(!Yi||!k||typeof k!="object")return!1;try{Yi.call(k);try{Ji.call(k)}catch{return!0}return k instanceof Set}catch{}return!1}(t)){var N=[];return f_.call(t,function(k){N.push(f(k,t))}),Pg("Set",Yi.call(t),N,u)}if(function(k){if(!ga||!k||typeof k!="object")return!1;try{ga.call(k,ga);try{ya.call(k,ya)}catch{return!0}return k instanceof WeakMap}catch{}return!1}(t))return fp("WeakMap");if(function(k){if(!ya||!k||typeof k!="object")return!1;try{ya.call(k,ya);try{ga.call(k,ga)}catch{return!0}return k instanceof WeakSet}catch{}return!1}(t))return fp("WeakSet");if(function(k){if(!wg||!k||typeof k!="object")return!1;try{return wg.call(k),!0}catch{}return!1}(t))return fp("WeakRef");if(function(k){return!(an(k)!=="[object Number]"||Ht&&typeof k=="object"&&Ht in k)}(t))return va(f(Number(t)));if(function(k){if(!k||typeof k!="object"||!lp)return!1;try{return lp.call(k),!0}catch{}return!1}(t))return va(f(lp.call(t)));if(function(k){return!(an(k)!=="[object Boolean]"||Ht&&typeof k=="object"&&Ht in k)}(t))return va(m_.call(t));if(function(k){return!(an(k)!=="[object String]"||Ht&&typeof k=="object"&&Ht in k)}(t))return va(f(String(t)));if(!function(k){return!(an(k)!=="[object Date]"||Ht&&typeof k=="object"&&Ht in k)}(t)&&!function(k){return!(an(k)!=="[object RegExp]"||Ht&&typeof k=="object"&&Ht in k)}(t)){var Q=Zi(t,f),T=Og?Og(t)===Object.prototype:t instanceof Object||t.constructor===Object,L=t instanceof Object?"":"null prototype",U=!T&&Ht&&Object(t)===t&&Ht in t?sp.call(an(t),8,-1):L?"Object":"",j=(T||typeof t.constructor!="function"?"":t.constructor.name?t.constructor.name+" ":"")+(U||L?"["+Cr.call(kg.call([],U||[],L||[]),": ")+"] ":"");return Q.length===0?j+"{}":u?j+"{"+mp(Q,u)+"}":j+"{ "+Cr.call(Q,", ")+" }"}return String(t)},A_=gp("%TypeError%"),Qi=gp("%WeakMap%",!0),Xi=gp("%Map%",!0),E_=uo("WeakMap.prototype.get",!0),O_=uo("WeakMap.prototype.set",!0),__=uo("WeakMap.prototype.has",!0),T_=uo("Map.prototype.get",!0),C_=uo("Map.prototype.set",!0),I_=uo("Map.prototype.has",!0),yp=function(e,t){for(var r,n=e;(r=n.next)!==null;n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r,r},j_=String.prototype.replace,P_=/%20/g,Rg="RFC3986",vp={default:Rg,formatters:{RFC1738:function(e){return j_.call(e,P_,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:Rg},R_=vp,bp=Object.prototype.hasOwnProperty,Tn=Array.isArray,Ir=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),Lg=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)e[n]!==void 0&&(r[n]=e[n]);return r},Ng={arrayToObject:Lg,assign:function(e,t){return Object.keys(t).reduce(function(r,n){return r[n]=t[n],r},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],a=o.obj[o.prop],i=Object.keys(a),s=0;s<i.length;++s){var l=i[s],c=a[l];typeof c=="object"&&c!==null&&r.indexOf(c)===-1&&(t.push({obj:a,prop:l}),r.push(c))}return function(d){for(;d.length>1;){var u=d.pop(),f=u.obj[u.prop];if(Tn(f)){for(var m=[],$=0;$<f.length;++$)f[$]!==void 0&&m.push(f[$]);u.obj[u.prop]=m}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if(r==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},encode:function(e,t,r,n,o){if(e.length===0)return e;var a=e;if(typeof e=="symbol"?a=Symbol.prototype.toString.call(e):typeof e!="string"&&(a=String(e)),r==="iso-8859-1")return escape(a).replace(/%u[0-9a-f]{4}/gi,function(c){return"%26%23"+parseInt(c.slice(2),16)+"%3B"});for(var i="",s=0;s<a.length;++s){var l=a.charCodeAt(s);l===45||l===46||l===95||l===126||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||o===R_.RFC1738&&(l===40||l===41)?i+=a.charAt(s):l<128?i+=Ir[l]:l<2048?i+=Ir[192|l>>6]+Ir[128|63&l]:l<55296||l>=57344?i+=Ir[224|l>>12]+Ir[128|l>>6&63]+Ir[128|63&l]:(s+=1,l=65536+((1023&l)<<10|1023&a.charCodeAt(s)),i+=Ir[240|l>>18]+Ir[128|l>>12&63]+Ir[128|l>>6&63]+Ir[128|63&l])}return i},isBuffer:function(e){return!(!e||typeof e!="object")&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},maybeMap:function(e,t){if(Tn(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if(typeof r!="object"){if(Tn(t))t.push(r);else{if(!t||typeof t!="object")return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!bp.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||typeof t!="object")return[t].concat(r);var o=t;return Tn(t)&&!Tn(r)&&(o=Lg(t,n)),Tn(t)&&Tn(r)?(r.forEach(function(a,i){if(bp.call(t,i)){var s=t[i];s&&typeof s=="object"&&a&&typeof a=="object"?t[i]=e(s,a,n):t.push(a)}else t[i]=a}),t):Object.keys(r).reduce(function(a,i){var s=r[i];return bp.call(a,i)?a[i]=e(a[i],s,n):a[i]=s,a},o)}},Fg=function(){var e,t,r,n={assert:function(o){if(!n.has(o))throw new A_("Side channel does not contain "+k_(o))},get:function(o){if(Qi&&o&&(typeof o=="object"||typeof o=="function")){if(e)return E_(e,o)}else if(Xi){if(t)return T_(t,o)}else if(r)return function(a,i){var s=yp(a,i);return s&&s.value}(r,o)},has:function(o){if(Qi&&o&&(typeof o=="object"||typeof o=="function")){if(e)return __(e,o)}else if(Xi){if(t)return I_(t,o)}else if(r)return function(a,i){return!!yp(a,i)}(r,o);return!1},set:function(o,a){Qi&&o&&(typeof o=="object"||typeof o=="function")?(e||(e=new Qi),O_(e,o,a)):Xi?(t||(t=new Xi),C_(t,o,a)):(r||(r={key:{},next:null}),function(i,s,l){var c=yp(i,s);c?c.value=l:i.next={key:s,next:i.next,value:l}}(r,o,a))}};return n},xp=Ng,ba=vp,L_=Object.prototype.hasOwnProperty,Bg={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},Cn=Array.isArray,N_=String.prototype.split,F_=Array.prototype.push,Dg=function(e,t){F_.apply(e,Cn(t)?t:[t])},B_=Date.prototype.toISOString,zg=ba.default,Bt={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:xp.encode,encodeValuesOnly:!1,format:zg,formatter:ba.formatters[zg],indices:!1,serializeDate:function(e){return B_.call(e)},skipNulls:!1,strictNullHandling:!1},wp={},D_=function e(t,r,n,o,a,i,s,l,c,d,u,f,m,$,C){for(var E=t,h=C,D=0,F=!1;(h=h.get(wp))!==void 0&&!F;){var M=h.get(t);if(D+=1,M!==void 0){if(M===D)throw new RangeError("Cyclic object value");F=!0}h.get(wp)===void 0&&(D=0)}if(typeof s=="function"?E=s(r,E):E instanceof Date?E=d(E):n==="comma"&&Cn(E)&&(E=xp.maybeMap(E,function(J){return J instanceof Date?d(J):J})),E===null){if(o)return i&&!m?i(r,Bt.encoder,$,"key",u):r;E=""}if(function(J){return typeof J=="string"||typeof J=="number"||typeof J=="boolean"||typeof J=="symbol"||typeof J=="bigint"}(E)||xp.isBuffer(E)){if(i){var Z=m?r:i(r,Bt.encoder,$,"key",u);if(n==="comma"&&m){for(var N=N_.call(String(E),","),Q="",T=0;T<N.length;++T)Q+=(T===0?"":",")+f(i(N[T],Bt.encoder,$,"value",u));return[f(Z)+"="+Q]}return[f(Z)+"="+f(i(E,Bt.encoder,$,"value",u))]}return[f(r)+"="+f(String(E))]}var L,U=[];if(E===void 0)return U;if(n==="comma"&&Cn(E))L=[{value:E.length>0?E.join(",")||null:void 0}];else if(Cn(s))L=s;else{var j=Object.keys(E);L=l?j.sort(l):j}for(var k=0;k<L.length;++k){var R=L[k],te=typeof R=="object"&&R.value!==void 0?R.value:E[R];if(!a||te!==null){var oe=Cn(E)?typeof n=="function"?n(r,R):r:r+(c?"."+R:"["+R+"]");C.set(t,D);var ge=Fg();ge.set(wp,C),Dg(U,e(te,oe,n,o,a,i,s,l,c,d,u,f,m,$,ge))}}return U},ho=Ng,$p=Object.prototype.hasOwnProperty,z_=Array.isArray,Rt={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:ho.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},U_=function(e){return e.replace(/&#(\d+);/g,function(t,r){return String.fromCharCode(parseInt(r,10))})},Ug=function(e,t){return e&&typeof e=="string"&&t.comma&&e.indexOf(",")>-1?e.split(","):e},q_=function(e,t,r,n){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,i=r.depth>0&&/(\[[^[\]]*])/.exec(o),s=i?o.slice(0,i.index):o,l=[];if(s){if(!r.plainObjects&&$p.call(Object.prototype,s)&&!r.allowPrototypes)return;l.push(s)}for(var c=0;r.depth>0&&(i=a.exec(o))!==null&&c<r.depth;){if(c+=1,!r.plainObjects&&$p.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(i[1])}return i&&l.push("["+o.slice(i.index)+"]"),function(d,u,f,m){for(var $=m?u:Ug(u,f),C=d.length-1;C>=0;--C){var E,h=d[C];if(h==="[]"&&f.parseArrays)E=[].concat($);else{E=f.plainObjects?Object.create(null):{};var D=h.charAt(0)==="["&&h.charAt(h.length-1)==="]"?h.slice(1,-1):h,F=parseInt(D,10);f.parseArrays||D!==""?!isNaN(F)&&h!==D&&String(F)===D&&F>=0&&f.parseArrays&&F<=f.arrayLimit?(E=[])[F]=$:D!=="__proto__"&&(E[D]=$):E={0:$}}$=E}return $}(l,t,r,n)}},Sp={formats:vp,parse:function(e,t){var r=function(c){if(!c)return Rt;if(c.decoder!==null&&c.decoder!==void 0&&typeof c.decoder!="function")throw new TypeError("Decoder has to be a function.");if(c.charset!==void 0&&c.charset!=="utf-8"&&c.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var d=c.charset===void 0?Rt.charset:c.charset;return{allowDots:c.allowDots===void 0?Rt.allowDots:!!c.allowDots,allowPrototypes:typeof c.allowPrototypes=="boolean"?c.allowPrototypes:Rt.allowPrototypes,allowSparse:typeof c.allowSparse=="boolean"?c.allowSparse:Rt.allowSparse,arrayLimit:typeof c.arrayLimit=="number"?c.arrayLimit:Rt.arrayLimit,charset:d,charsetSentinel:typeof c.charsetSentinel=="boolean"?c.charsetSentinel:Rt.charsetSentinel,comma:typeof c.comma=="boolean"?c.comma:Rt.comma,decoder:typeof c.decoder=="function"?c.decoder:Rt.decoder,delimiter:typeof c.delimiter=="string"||ho.isRegExp(c.delimiter)?c.delimiter:Rt.delimiter,depth:typeof c.depth=="number"||c.depth===!1?+c.depth:Rt.depth,ignoreQueryPrefix:c.ignoreQueryPrefix===!0,interpretNumericEntities:typeof c.interpretNumericEntities=="boolean"?c.interpretNumericEntities:Rt.interpretNumericEntities,parameterLimit:typeof c.parameterLimit=="number"?c.parameterLimit:Rt.parameterLimit,parseArrays:c.parseArrays!==!1,plainObjects:typeof c.plainObjects=="boolean"?c.plainObjects:Rt.plainObjects,strictNullHandling:typeof c.strictNullHandling=="boolean"?c.strictNullHandling:Rt.strictNullHandling}}(t);if(e===""||e==null)return r.plainObjects?Object.create(null):{};for(var n=typeof e=="string"?function(c,d){var u,f={},m=d.ignoreQueryPrefix?c.replace(/^\?/,""):c,$=d.parameterLimit===1/0?void 0:d.parameterLimit,C=m.split(d.delimiter,$),E=-1,h=d.charset;if(d.charsetSentinel)for(u=0;u<C.length;++u)C[u].indexOf("utf8=")===0&&(C[u]==="utf8=%E2%9C%93"?h="utf-8":C[u]==="utf8=%26%2310003%3B"&&(h="iso-8859-1"),E=u,u=C.length);for(u=0;u<C.length;++u)if(u!==E){var D,F,M=C[u],Z=M.indexOf("]="),N=Z===-1?M.indexOf("="):Z+1;N===-1?(D=d.decoder(M,Rt.decoder,h,"key"),F=d.strictNullHandling?null:""):(D=d.decoder(M.slice(0,N),Rt.decoder,h,"key"),F=ho.maybeMap(Ug(M.slice(N+1),d),function(Q){return d.decoder(Q,Rt.decoder,h,"value")})),F&&d.interpretNumericEntities&&h==="iso-8859-1"&&(F=U_(F)),M.indexOf("[]=")>-1&&(F=z_(F)?[F]:F),$p.call(f,D)?f[D]=ho.combine(f[D],F):f[D]=F}return f}(e,r):e,o=r.plainObjects?Object.create(null):{},a=Object.keys(n),i=0;i<a.length;++i){var s=a[i],l=q_(s,n[s],r,typeof e=="string");o=ho.merge(o,l,r)}return r.allowSparse===!0?o:ho.compact(o)},stringify:function(e,t){var r,n=e,o=function(m){if(!m)return Bt;if(m.encoder!==null&&m.encoder!==void 0&&typeof m.encoder!="function")throw new TypeError("Encoder has to be a function.");var $=m.charset||Bt.charset;if(m.charset!==void 0&&m.charset!=="utf-8"&&m.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var C=ba.default;if(m.format!==void 0){if(!L_.call(ba.formatters,m.format))throw new TypeError("Unknown format option provided.");C=m.format}var E=ba.formatters[C],h=Bt.filter;return(typeof m.filter=="function"||Cn(m.filter))&&(h=m.filter),{addQueryPrefix:typeof m.addQueryPrefix=="boolean"?m.addQueryPrefix:Bt.addQueryPrefix,allowDots:m.allowDots===void 0?Bt.allowDots:!!m.allowDots,charset:$,charsetSentinel:typeof m.charsetSentinel=="boolean"?m.charsetSentinel:Bt.charsetSentinel,delimiter:m.delimiter===void 0?Bt.delimiter:m.delimiter,encode:typeof m.encode=="boolean"?m.encode:Bt.encode,encoder:typeof m.encoder=="function"?m.encoder:Bt.encoder,encodeValuesOnly:typeof m.encodeValuesOnly=="boolean"?m.encodeValuesOnly:Bt.encodeValuesOnly,filter:h,format:C,formatter:E,serializeDate:typeof m.serializeDate=="function"?m.serializeDate:Bt.serializeDate,skipNulls:typeof m.skipNulls=="boolean"?m.skipNulls:Bt.skipNulls,sort:typeof m.sort=="function"?m.sort:null,strictNullHandling:typeof m.strictNullHandling=="boolean"?m.strictNullHandling:Bt.strictNullHandling}}(t);typeof o.filter=="function"?n=(0,o.filter)("",n):Cn(o.filter)&&(r=o.filter);var a,i=[];if(typeof n!="object"||n===null)return"";a=t&&t.arrayFormat in Bg?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var s=Bg[a];r||(r=Object.keys(n)),o.sort&&r.sort(o.sort);for(var l=Fg(),c=0;c<r.length;++c){var d=r[c];o.skipNulls&&n[d]===null||Dg(i,D_(n[d],d,s,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.format,o.formatter,o.encodeValuesOnly,o.charset,l))}var u=i.join(o.delimiter),f=o.addQueryPrefix===!0?"?":"";return o.charsetSentinel&&(o.charset==="iso-8859-1"?f+="utf8=%26%2310003%3B&":f+="utf8=%E2%9C%93&"),u.length>0?f+u:""}};function qg(e){return e==null}var Tt={isNothing:qg,isObject:function(e){return typeof e=="object"&&e!==null},toArray:function(e){return Array.isArray(e)?e:qg(e)?[]:[e]},repeat:function(e,t){var r,n="";for(r=0;r<t;r+=1)n+=e;return n},isNegativeZero:function(e){return e===0&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var r,n,o,a;if(t)for(r=0,n=(a=Object.keys(t)).length;r<n;r+=1)e[o=a[r]]=t[o];return e}};function Mg(e,t){var r="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(r+=`

`+e.mark.snippet),n+" "+r):n}function xa(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Mg(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}xa.prototype=Object.create(Error.prototype),xa.prototype.constructor=xa,xa.prototype.toString=function(e){return this.name+": "+Mg(this,e)};var Gt=xa;function kp(e,t,r,n,o){var a="",i="",s=Math.floor(o/2)-1;return n-t>s&&(t=n-s+(a=" ... ").length),r-n>s&&(r=n+s-(i=" ...").length),{str:a+e.slice(t,r).replace(/\t/g,"\u2192")+i,pos:n-t+a.length}}function Ap(e,t){return Tt.repeat(" ",t-e.length)+e}var M_=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),typeof t.indent!="number"&&(t.indent=1),typeof t.linesBefore!="number"&&(t.linesBefore=3),typeof t.linesAfter!="number"&&(t.linesAfter=2);for(var r,n=/\r?\n|\r|\0/g,o=[0],a=[],i=-1;r=n.exec(e.buffer);)a.push(r.index),o.push(r.index+r[0].length),e.position<=r.index&&i<0&&(i=o.length-2);i<0&&(i=o.length-1);var s,l,c="",d=Math.min(e.line+t.linesAfter,a.length).toString().length,u=t.maxLength-(t.indent+d+3);for(s=1;s<=t.linesBefore&&!(i-s<0);s++)l=kp(e.buffer,o[i-s],a[i-s],e.position-(o[i]-o[i-s]),u),c=Tt.repeat(" ",t.indent)+Ap((e.line-s+1).toString(),d)+" | "+l.str+`
`+c;for(l=kp(e.buffer,o[i],a[i],e.position,u),c+=Tt.repeat(" ",t.indent)+Ap((e.line+1).toString(),d)+" | "+l.str+`
`,c+=Tt.repeat("-",t.indent+d+3+l.pos)+`^
`,s=1;s<=t.linesAfter&&!(i+s>=a.length);s++)l=kp(e.buffer,o[i+s],a[i+s],e.position-(o[i]-o[i+s]),u),c+=Tt.repeat(" ",t.indent)+Ap((e.line+s+1).toString(),d)+" | "+l.str+`
`;return c.replace(/\n$/,"")},H_=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],W_=["scalar","sequence","mapping"],Dt=function(e,t){if(t=t||{},Object.keys(t).forEach(function(r){if(H_.indexOf(r)===-1)throw new Gt('Unknown option "'+r+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(r){return r},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(r){var n={};return r!==null&&Object.keys(r).forEach(function(o){r[o].forEach(function(a){n[String(a)]=o})}),n}(t.styleAliases||null),W_.indexOf(this.kind)===-1)throw new Gt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function Hg(e,t){var r=[];return e[t].forEach(function(n){var o=r.length;r.forEach(function(a,i){a.tag===n.tag&&a.kind===n.kind&&a.multi===n.multi&&(o=i)}),r[o]=n}),r}function Ep(e){return this.extend(e)}Ep.prototype.extend=function(e){var t=[],r=[];if(e instanceof Dt)r.push(e);else if(Array.isArray(e))r=r.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new Gt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(r=r.concat(e.explicit))}t.forEach(function(o){if(!(o instanceof Dt))throw new Gt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new Gt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new Gt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(o){if(!(o instanceof Dt))throw new Gt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(Ep.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(r),n.compiledImplicit=Hg(n,"implicit"),n.compiledExplicit=Hg(n,"explicit"),n.compiledTypeMap=function(){var o,a,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function s(l){l.multi?(i.multi[l.kind].push(l),i.multi.fallback.push(l)):i[l.kind][l.tag]=i.fallback[l.tag]=l}for(o=0,a=arguments.length;o<a;o+=1)arguments[o].forEach(s);return i}(n.compiledImplicit,n.compiledExplicit),n};var Wg=Ep,Vg=new Dt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Gg=new Dt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Kg=new Dt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Jg=new Wg({explicit:[Vg,Gg,Kg]}),Yg=new Dt("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")},construct:function(){return null},predicate:function(e){return e===null},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Zg=new Dt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")},construct:function(e){return e==="true"||e==="True"||e==="TRUE"},predicate:function(e){return Object.prototype.toString.call(e)==="[object Boolean]"},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function V_(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function G_(e){return 48<=e&&e<=55}function K_(e){return 48<=e&&e<=57}var Qg=new Dt("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(e===null)return!1;var t,r=e.length,n=0,o=!1;if(!r)return!1;if((t=e[n])!=="-"&&t!=="+"||(t=e[++n]),t==="0"){if(n+1===r)return!0;if((t=e[++n])==="b"){for(n++;n<r;n++)if((t=e[n])!=="_"){if(t!=="0"&&t!=="1")return!1;o=!0}return o&&t!=="_"}if(t==="x"){for(n++;n<r;n++)if((t=e[n])!=="_"){if(!V_(e.charCodeAt(n)))return!1;o=!0}return o&&t!=="_"}if(t==="o"){for(n++;n<r;n++)if((t=e[n])!=="_"){if(!G_(e.charCodeAt(n)))return!1;o=!0}return o&&t!=="_"}}if(t==="_")return!1;for(;n<r;n++)if((t=e[n])!=="_"){if(!K_(e.charCodeAt(n)))return!1;o=!0}return!(!o||t==="_")},construct:function(e){var t,r=e,n=1;if(r.indexOf("_")!==-1&&(r=r.replace(/_/g,"")),(t=r[0])!=="-"&&t!=="+"||(t==="-"&&(n=-1),t=(r=r.slice(1))[0]),r==="0")return 0;if(t==="0"){if(r[1]==="b")return n*parseInt(r.slice(2),2);if(r[1]==="x")return n*parseInt(r.slice(2),16);if(r[1]==="o")return n*parseInt(r.slice(2),8)}return n*parseInt(r,10)},predicate:function(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1==0&&!Tt.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),J_=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),Y_=/^[-+]?[0-9]+e/,Xg=new Dt("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return e!==null&&!(!J_.test(e)||e[e.length-1]==="_")},construct:function(e){var t,r;return r=(t=e.replace(/_/g,"").toLowerCase())[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:r*parseFloat(t,10)},predicate:function(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!=0||Tt.isNegativeZero(e))},represent:function(e,t){var r;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Tt.isNegativeZero(e))return"-0.0";return r=e.toString(10),Y_.test(r)?r.replace("e",".e"):r},defaultStyle:"lowercase"}),ey=Jg.extend({implicit:[Yg,Zg,Qg,Xg]}),ty=ey,ry=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ny=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),oy=new Dt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return e!==null&&(ry.exec(e)!==null||ny.exec(e)!==null)},construct:function(e){var t,r,n,o,a,i,s,l,c=0,d=null;if((t=ry.exec(e))===null&&(t=ny.exec(e)),t===null)throw new Error("Date resolve error");if(r=+t[1],n=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(r,n,o));if(a=+t[4],i=+t[5],s=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=6e4*(60*+t[10]+ +(t[11]||0)),t[9]==="-"&&(d=-d)),l=new Date(Date.UTC(r,n,o,a,i,s,c)),d&&l.setTime(l.getTime()-d),l},instanceOf:Date,represent:function(e){return e.toISOString()}}),ay=new Dt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return e==="<<"||e===null}}),Op=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`,iy=new Dt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(e===null)return!1;var t,r,n=0,o=e.length,a=Op;for(r=0;r<o;r++)if(!((t=a.indexOf(e.charAt(r)))>64)){if(t<0)return!1;n+=6}return n%8==0},construct:function(e){var t,r,n=e.replace(/[\r\n=]/g,""),o=n.length,a=Op,i=0,s=[];for(t=0;t<o;t++)t%4==0&&t&&(s.push(i>>16&255),s.push(i>>8&255),s.push(255&i)),i=i<<6|a.indexOf(n.charAt(t));return(r=o%4*6)===0?(s.push(i>>16&255),s.push(i>>8&255),s.push(255&i)):r===18?(s.push(i>>10&255),s.push(i>>2&255)):r===12&&s.push(i>>4&255),new Uint8Array(s)},predicate:function(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"},represent:function(e){var t,r,n="",o=0,a=e.length,i=Op;for(t=0;t<a;t++)t%3==0&&t&&(n+=i[o>>18&63],n+=i[o>>12&63],n+=i[o>>6&63],n+=i[63&o]),o=(o<<8)+e[t];return(r=a%3)===0?(n+=i[o>>18&63],n+=i[o>>12&63],n+=i[o>>6&63],n+=i[63&o]):r===2?(n+=i[o>>10&63],n+=i[o>>4&63],n+=i[o<<2&63],n+=i[64]):r===1&&(n+=i[o>>2&63],n+=i[o<<4&63],n+=i[64],n+=i[64]),n}}),Z_=Object.prototype.hasOwnProperty,Q_=Object.prototype.toString,sy=new Dt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(e===null)return!0;var t,r,n,o,a,i=[],s=e;for(t=0,r=s.length;t<r;t+=1){if(n=s[t],a=!1,Q_.call(n)!=="[object Object]")return!1;for(o in n)if(Z_.call(n,o)){if(a)return!1;a=!0}if(!a||i.indexOf(o)!==-1)return!1;i.push(o)}return!0},construct:function(e){return e!==null?e:[]}}),X_=Object.prototype.toString,ly=new Dt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(e===null)return!0;var t,r,n,o,a,i=e;for(a=new Array(i.length),t=0,r=i.length;t<r;t+=1){if(n=i[t],X_.call(n)!=="[object Object]"||(o=Object.keys(n)).length!==1)return!1;a[t]=[o[0],n[o[0]]]}return!0},construct:function(e){if(e===null)return[];var t,r,n,o,a,i=e;for(a=new Array(i.length),t=0,r=i.length;t<r;t+=1)n=i[t],o=Object.keys(n),a[t]=[o[0],n[o[0]]];return a}}),eT=Object.prototype.hasOwnProperty,cy=new Dt("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(e===null)return!0;var t,r=e;for(t in r)if(eT.call(r,t)&&r[t]!==null)return!1;return!0},construct:function(e){return e!==null?e:{}}}),_p=ty.extend({implicit:[oy,ay],explicit:[iy,sy,ly,cy]}),sn=Object.prototype.hasOwnProperty,tT=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,rT=/[\x85\u2028\u2029]/,nT=/[,\[\]\{\}]/,py=/^(?:!|!!|![a-z\-]+!)$/i,uy=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function dy(e){return Object.prototype.toString.call(e)}function jr(e){return e===10||e===13}function In(e){return e===9||e===32}function Xt(e){return e===9||e===32||e===10||e===13}function fo(e){return e===44||e===91||e===93||e===123||e===125}function oT(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function aT(e){return e===120?2:e===117?4:e===85?8:0}function iT(e){return 48<=e&&e<=57?e-48:-1}function hy(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function sT(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var fy=new Array(256),my=new Array(256),mo=0;mo<256;mo++)fy[mo]=hy(mo)?1:0,my[mo]=hy(mo);function lT(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||_p,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function gy(e,t){var r={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return r.snippet=M_(r),new Gt(t,r)}function _e(e,t){throw gy(e,t)}function es(e,t){e.onWarning&&e.onWarning.call(null,gy(e,t))}var yy={YAML:function(e,t,r){var n,o,a;e.version!==null&&_e(e,"duplication of %YAML directive"),r.length!==1&&_e(e,"YAML directive accepts exactly one argument"),(n=/^([0-9]+)\.([0-9]+)$/.exec(r[0]))===null&&_e(e,"ill-formed argument of the YAML directive"),o=parseInt(n[1],10),a=parseInt(n[2],10),o!==1&&_e(e,"unacceptable YAML version of the document"),e.version=r[0],e.checkLineBreaks=a<2,a!==1&&a!==2&&es(e,"unsupported YAML version of the document")},TAG:function(e,t,r){var n,o;r.length!==2&&_e(e,"TAG directive accepts exactly two arguments"),n=r[0],o=r[1],py.test(n)||_e(e,"ill-formed tag handle (first argument) of the TAG directive"),sn.call(e.tagMap,n)&&_e(e,'there is a previously declared suffix for "'+n+'" tag handle'),uy.test(o)||_e(e,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch{_e(e,"tag prefix is malformed: "+o)}e.tagMap[n]=o}};function ln(e,t,r,n){var o,a,i,s;if(t<r){if(s=e.input.slice(t,r),n)for(o=0,a=s.length;o<a;o+=1)(i=s.charCodeAt(o))===9||32<=i&&i<=1114111||_e(e,"expected valid JSON character");else tT.test(s)&&_e(e,"the stream contains non-printable characters");e.result+=s}}function vy(e,t,r,n){var o,a,i,s;for(Tt.isObject(r)||_e(e,"cannot merge mappings; the provided source object is unacceptable"),i=0,s=(o=Object.keys(r)).length;i<s;i+=1)a=o[i],sn.call(t,a)||(t[a]=r[a],n[a]=!0)}function go(e,t,r,n,o,a,i,s,l){var c,d;if(Array.isArray(o))for(c=0,d=(o=Array.prototype.slice.call(o)).length;c<d;c+=1)Array.isArray(o[c])&&_e(e,"nested arrays are not supported inside keys"),typeof o=="object"&&dy(o[c])==="[object Object]"&&(o[c]="[object Object]");if(typeof o=="object"&&dy(o)==="[object Object]"&&(o="[object Object]"),o=String(o),t===null&&(t={}),n==="tag:yaml.org,2002:merge")if(Array.isArray(a))for(c=0,d=a.length;c<d;c+=1)vy(e,t,a[c],r);else vy(e,t,a,r);else e.json||sn.call(r,o)||!sn.call(t,o)||(e.line=i||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,_e(e,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(t,o,{configurable:!0,enumerable:!0,writable:!0,value:a}):t[o]=a,delete r[o];return t}function Tp(e){var t;(t=e.input.charCodeAt(e.position))===10?e.position++:t===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):_e(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function At(e,t,r){for(var n=0,o=e.input.charCodeAt(e.position);o!==0;){for(;In(o);)o===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(t&&o===35)do o=e.input.charCodeAt(++e.position);while(o!==10&&o!==13&&o!==0);if(!jr(o))break;for(Tp(e),o=e.input.charCodeAt(e.position),n++,e.lineIndent=0;o===32;)e.lineIndent++,o=e.input.charCodeAt(++e.position)}return r!==-1&&n!==0&&e.lineIndent<r&&es(e,"deficient indentation"),n}function ts(e){var t,r=e.position;return!((t=e.input.charCodeAt(r))!==45&&t!==46||t!==e.input.charCodeAt(r+1)||t!==e.input.charCodeAt(r+2)||(r+=3,(t=e.input.charCodeAt(r))!==0&&!Xt(t)))}function Cp(e,t){t===1?e.result+=" ":t>1&&(e.result+=Tt.repeat(`
`,t-1))}function by(e,t){var r,n,o=e.tag,a=e.anchor,i=[],s=!1;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=i),n=e.input.charCodeAt(e.position);n!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,_e(e,"tab characters must not be used in indentation")),n===45)&&Xt(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,At(e,!0,-1)&&e.lineIndent<=t)i.push(null),n=e.input.charCodeAt(e.position);else if(r=e.line,yo(e,t,3,!1,!0),i.push(e.result),At(e,!0,-1),n=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>t)&&n!==0)_e(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=o,e.anchor=a,e.kind="sequence",e.result=i,!0)}function cT(e){var t,r,n,o,a=!1,i=!1;if((o=e.input.charCodeAt(e.position))!==33)return!1;if(e.tag!==null&&_e(e,"duplication of a tag property"),(o=e.input.charCodeAt(++e.position))===60?(a=!0,o=e.input.charCodeAt(++e.position)):o===33?(i=!0,r="!!",o=e.input.charCodeAt(++e.position)):r="!",t=e.position,a){do o=e.input.charCodeAt(++e.position);while(o!==0&&o!==62);e.position<e.length?(n=e.input.slice(t,e.position),o=e.input.charCodeAt(++e.position)):_e(e,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!Xt(o);)o===33&&(i?_e(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(t-1,e.position+1),py.test(r)||_e(e,"named tag handle cannot contain such characters"),i=!0,t=e.position+1)),o=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),nT.test(n)&&_e(e,"tag suffix cannot contain flow indicator characters")}n&&!uy.test(n)&&_e(e,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch{_e(e,"tag name is malformed: "+n)}return a?e.tag=n:sn.call(e.tagMap,r)?e.tag=e.tagMap[r]+n:r==="!"?e.tag="!"+n:r==="!!"?e.tag="tag:yaml.org,2002:"+n:_e(e,'undeclared tag handle "'+r+'"'),!0}function pT(e){var t,r;if((r=e.input.charCodeAt(e.position))!==38)return!1;for(e.anchor!==null&&_e(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),t=e.position;r!==0&&!Xt(r)&&!fo(r);)r=e.input.charCodeAt(++e.position);return e.position===t&&_e(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function yo(e,t,r,n,o){var a,i,s,l,c,d,u,f,m,$=1,C=!1,E=!1;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=i=s=r===4||r===3,n&&At(e,!0,-1)&&(C=!0,e.lineIndent>t?$=1:e.lineIndent===t?$=0:e.lineIndent<t&&($=-1)),$===1)for(;cT(e)||pT(e);)At(e,!0,-1)?(C=!0,s=a,e.lineIndent>t?$=1:e.lineIndent===t?$=0:e.lineIndent<t&&($=-1)):s=!1;if(s&&(s=C||o),$!==1&&r!==4||(f=r===1||r===2?t:t+1,m=e.position-e.lineStart,$===1?s&&(by(e,m)||function(h,D,F){var M,Z,N,Q,T,L,U,j=h.tag,k=h.anchor,R={},te=Object.create(null),oe=null,ge=null,J=null,W=!1,le=!1;if(h.firstTabInLine!==-1)return!1;for(h.anchor!==null&&(h.anchorMap[h.anchor]=R),U=h.input.charCodeAt(h.position);U!==0;){if(W||h.firstTabInLine===-1||(h.position=h.firstTabInLine,_e(h,"tab characters must not be used in indentation")),M=h.input.charCodeAt(h.position+1),N=h.line,U!==63&&U!==58||!Xt(M)){if(Q=h.line,T=h.lineStart,L=h.position,!yo(h,F,2,!1,!0))break;if(h.line===N){for(U=h.input.charCodeAt(h.position);In(U);)U=h.input.charCodeAt(++h.position);if(U===58)Xt(U=h.input.charCodeAt(++h.position))||_e(h,"a whitespace character is expected after the key-value separator within a block mapping"),W&&(go(h,R,te,oe,ge,null,Q,T,L),oe=ge=J=null),le=!0,W=!1,Z=!1,oe=h.tag,ge=h.result;else{if(!le)return h.tag=j,h.anchor=k,!0;_e(h,"can not read an implicit mapping pair; a colon is missed")}}else{if(!le)return h.tag=j,h.anchor=k,!0;_e(h,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else U===63?(W&&(go(h,R,te,oe,ge,null,Q,T,L),oe=ge=J=null),le=!0,W=!0,Z=!0):W?(W=!1,Z=!0):_e(h,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),h.position+=1,U=M;if((h.line===N||h.lineIndent>D)&&(W&&(Q=h.line,T=h.lineStart,L=h.position),yo(h,D,4,!0,Z)&&(W?ge=h.result:J=h.result),W||(go(h,R,te,oe,ge,J,Q,T,L),oe=ge=J=null),At(h,!0,-1),U=h.input.charCodeAt(h.position)),(h.line===N||h.lineIndent>D)&&U!==0)_e(h,"bad indentation of a mapping entry");else if(h.lineIndent<D)break}return W&&go(h,R,te,oe,ge,null,Q,T,L),le&&(h.tag=j,h.anchor=k,h.kind="mapping",h.result=R),le}(e,m,f))||function(h,D){var F,M,Z,N,Q,T,L,U,j,k,R,te,oe=!0,ge=h.tag,J=h.anchor,W=Object.create(null);if((te=h.input.charCodeAt(h.position))===91)Q=93,U=!1,N=[];else{if(te!==123)return!1;Q=125,U=!0,N={}}for(h.anchor!==null&&(h.anchorMap[h.anchor]=N),te=h.input.charCodeAt(++h.position);te!==0;){if(At(h,!0,D),(te=h.input.charCodeAt(h.position))===Q)return h.position++,h.tag=ge,h.anchor=J,h.kind=U?"mapping":"sequence",h.result=N,!0;oe?te===44&&_e(h,"expected the node content, but found ','"):_e(h,"missed comma between flow collection entries"),R=null,T=L=!1,te===63&&Xt(h.input.charCodeAt(h.position+1))&&(T=L=!0,h.position++,At(h,!0,D)),F=h.line,M=h.lineStart,Z=h.position,yo(h,D,1,!1,!0),k=h.tag,j=h.result,At(h,!0,D),te=h.input.charCodeAt(h.position),!L&&h.line!==F||te!==58||(T=!0,te=h.input.charCodeAt(++h.position),At(h,!0,D),yo(h,D,1,!1,!0),R=h.result),U?go(h,N,W,k,j,R,F,M,Z):T?N.push(go(h,null,W,k,j,R,F,M,Z)):N.push(j),At(h,!0,D),(te=h.input.charCodeAt(h.position))===44?(oe=!0,te=h.input.charCodeAt(++h.position)):oe=!1}_e(h,"unexpected end of the stream within a flow collection")}(e,f)?E=!0:(i&&function(h,D){var F,M,Z,N,Q=1,T=!1,L=!1,U=D,j=0,k=!1;if((N=h.input.charCodeAt(h.position))===124)M=!1;else{if(N!==62)return!1;M=!0}for(h.kind="scalar",h.result="";N!==0;)if((N=h.input.charCodeAt(++h.position))===43||N===45)Q===1?Q=N===43?3:2:_e(h,"repeat of a chomping mode identifier");else{if(!((Z=iT(N))>=0))break;Z===0?_e(h,"bad explicit indentation width of a block scalar; it cannot be less than one"):L?_e(h,"repeat of an indentation width identifier"):(U=D+Z-1,L=!0)}if(In(N)){do N=h.input.charCodeAt(++h.position);while(In(N));if(N===35)do N=h.input.charCodeAt(++h.position);while(!jr(N)&&N!==0)}for(;N!==0;){for(Tp(h),h.lineIndent=0,N=h.input.charCodeAt(h.position);(!L||h.lineIndent<U)&&N===32;)h.lineIndent++,N=h.input.charCodeAt(++h.position);if(!L&&h.lineIndent>U&&(U=h.lineIndent),jr(N))j++;else{if(h.lineIndent<U){Q===3?h.result+=Tt.repeat(`
`,T?1+j:j):Q===1&&T&&(h.result+=`
`);break}for(M?In(N)?(k=!0,h.result+=Tt.repeat(`
`,T?1+j:j)):k?(k=!1,h.result+=Tt.repeat(`
`,j+1)):j===0?T&&(h.result+=" "):h.result+=Tt.repeat(`
`,j):h.result+=Tt.repeat(`
`,T?1+j:j),T=!0,L=!0,j=0,F=h.position;!jr(N)&&N!==0;)N=h.input.charCodeAt(++h.position);ln(h,F,h.position,!1)}}return!0}(e,f)||function(h,D){var F,M,Z;if((F=h.input.charCodeAt(h.position))!==39)return!1;for(h.kind="scalar",h.result="",h.position++,M=Z=h.position;(F=h.input.charCodeAt(h.position))!==0;)if(F===39){if(ln(h,M,h.position,!0),(F=h.input.charCodeAt(++h.position))!==39)return!0;M=h.position,h.position++,Z=h.position}else jr(F)?(ln(h,M,Z,!0),Cp(h,At(h,!1,D)),M=Z=h.position):h.position===h.lineStart&&ts(h)?_e(h,"unexpected end of the document within a single quoted scalar"):(h.position++,Z=h.position);_e(h,"unexpected end of the stream within a single quoted scalar")}(e,f)||function(h,D){var F,M,Z,N,Q,T;if((T=h.input.charCodeAt(h.position))!==34)return!1;for(h.kind="scalar",h.result="",h.position++,F=M=h.position;(T=h.input.charCodeAt(h.position))!==0;){if(T===34)return ln(h,F,h.position,!0),h.position++,!0;if(T===92){if(ln(h,F,h.position,!0),jr(T=h.input.charCodeAt(++h.position)))At(h,!1,D);else if(T<256&&fy[T])h.result+=my[T],h.position++;else if((Q=aT(T))>0){for(Z=Q,N=0;Z>0;Z--)(Q=oT(T=h.input.charCodeAt(++h.position)))>=0?N=(N<<4)+Q:_e(h,"expected hexadecimal character");h.result+=sT(N),h.position++}else _e(h,"unknown escape sequence");F=M=h.position}else jr(T)?(ln(h,F,M,!0),Cp(h,At(h,!1,D)),F=M=h.position):h.position===h.lineStart&&ts(h)?_e(h,"unexpected end of the document within a double quoted scalar"):(h.position++,M=h.position)}_e(h,"unexpected end of the stream within a double quoted scalar")}(e,f)?E=!0:function(h){var D,F,M;if((M=h.input.charCodeAt(h.position))!==42)return!1;for(M=h.input.charCodeAt(++h.position),D=h.position;M!==0&&!Xt(M)&&!fo(M);)M=h.input.charCodeAt(++h.position);return h.position===D&&_e(h,"name of an alias node must contain at least one character"),F=h.input.slice(D,h.position),sn.call(h.anchorMap,F)||_e(h,'unidentified alias "'+F+'"'),h.result=h.anchorMap[F],At(h,!0,-1),!0}(e)?(E=!0,e.tag===null&&e.anchor===null||_e(e,"alias node should not have any properties")):function(h,D,F){var M,Z,N,Q,T,L,U,j,k=h.kind,R=h.result;if(Xt(j=h.input.charCodeAt(h.position))||fo(j)||j===35||j===38||j===42||j===33||j===124||j===62||j===39||j===34||j===37||j===64||j===96||(j===63||j===45)&&(Xt(M=h.input.charCodeAt(h.position+1))||F&&fo(M)))return!1;for(h.kind="scalar",h.result="",Z=N=h.position,Q=!1;j!==0;){if(j===58){if(Xt(M=h.input.charCodeAt(h.position+1))||F&&fo(M))break}else if(j===35){if(Xt(h.input.charCodeAt(h.position-1)))break}else{if(h.position===h.lineStart&&ts(h)||F&&fo(j))break;if(jr(j)){if(T=h.line,L=h.lineStart,U=h.lineIndent,At(h,!1,-1),h.lineIndent>=D){Q=!0,j=h.input.charCodeAt(h.position);continue}h.position=N,h.line=T,h.lineStart=L,h.lineIndent=U;break}}Q&&(ln(h,Z,N,!1),Cp(h,h.line-T),Z=N=h.position,Q=!1),In(j)||(N=h.position+1),j=h.input.charCodeAt(++h.position)}return ln(h,Z,N,!1),!!h.result||(h.kind=k,h.result=R,!1)}(e,f,r===1)&&(E=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):$===0&&(E=s&&by(e,m))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&_e(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,c=e.implicitTypes.length;l<c;l+=1)if((u=e.implicitTypes[l]).resolve(e.result)){e.result=u.construct(e.result),e.tag=u.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(sn.call(e.typeMap[e.kind||"fallback"],e.tag))u=e.typeMap[e.kind||"fallback"][e.tag];else for(u=null,l=0,c=(d=e.typeMap.multi[e.kind||"fallback"]).length;l<c;l+=1)if(e.tag.slice(0,d[l].tag.length)===d[l].tag){u=d[l];break}u||_e(e,"unknown tag !<"+e.tag+">"),e.result!==null&&u.kind!==e.kind&&_e(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+u.kind+'", not "'+e.kind+'"'),u.resolve(e.result,e.tag)?(e.result=u.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):_e(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||E}function uT(e){var t,r,n,o,a=e.position,i=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(o=e.input.charCodeAt(e.position))!==0&&(At(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||o!==37));){for(i=!0,o=e.input.charCodeAt(++e.position),t=e.position;o!==0&&!Xt(o);)o=e.input.charCodeAt(++e.position);for(n=[],(r=e.input.slice(t,e.position)).length<1&&_e(e,"directive name must not be less than one character in length");o!==0;){for(;In(o);)o=e.input.charCodeAt(++e.position);if(o===35){do o=e.input.charCodeAt(++e.position);while(o!==0&&!jr(o));break}if(jr(o))break;for(t=e.position;o!==0&&!Xt(o);)o=e.input.charCodeAt(++e.position);n.push(e.input.slice(t,e.position))}o!==0&&Tp(e),sn.call(yy,r)?yy[r](e,r,n):es(e,'unknown document directive "'+r+'"')}At(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,At(e,!0,-1)):i&&_e(e,"directives end mark is expected"),yo(e,e.lineIndent-1,4,!1,!0),At(e,!0,-1),e.checkLineBreaks&&rT.test(e.input.slice(a,e.position))&&es(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&ts(e)?e.input.charCodeAt(e.position)===46&&(e.position+=3,At(e,!0,-1)):e.position<e.length-1&&_e(e,"end of the stream or a document separator is expected")}function xy(e,t){t=t||{},(e=String(e)).length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var r=new lT(e,t),n=e.indexOf("\0");for(n!==-1&&(r.position=n,_e(r,"null byte is not allowed in input")),r.input+="\0";r.input.charCodeAt(r.position)===32;)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)uT(r);return r.documents}var wy={loadAll:function(e,t,r){t!==null&&typeof t=="object"&&r===void 0&&(r=t,t=null);var n=xy(e,r);if(typeof t!="function")return n;for(var o=0,a=n.length;o<a;o+=1)t(n[o])},load:function(e,t){var r=xy(e,t);if(r.length!==0){if(r.length===1)return r[0];throw new Gt("expected a single document in the stream, but found more")}}},$y=Object.prototype.toString,Sy=Object.prototype.hasOwnProperty,Ip=65279,dT={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},hT=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],fT=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function mT(e){var t,r,n;if(t=e.toString(16).toUpperCase(),e<=255)r="x",n=2;else if(e<=65535)r="u",n=4;else{if(!(e<=4294967295))throw new Gt("code point within a string may not be greater than 0xFFFFFFFF");r="U",n=8}return"\\"+r+Tt.repeat("0",n-t.length)+t}function gT(e){this.schema=e.schema||_p,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Tt.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(t,r){var n,o,a,i,s,l,c;if(r===null)return{};for(n={},a=0,i=(o=Object.keys(r)).length;a<i;a+=1)s=o[a],l=String(r[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),(c=t.compiledTypeMap.fallback[s])&&Sy.call(c.styleAliases,l)&&(l=c.styleAliases[l]),n[s]=l;return n}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function ky(e,t){for(var r,n=Tt.repeat(" ",t),o=0,a=-1,i="",s=e.length;o<s;)(a=e.indexOf(`
`,o))===-1?(r=e.slice(o),o=s):(r=e.slice(o,a+1),o=a+1),r.length&&r!==`
`&&(i+=n),i+=r;return i}function jp(e,t){return`
`+Tt.repeat(" ",e.indent*t)}function rs(e){return e===32||e===9}function wa(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==Ip||65536<=e&&e<=1114111}function Ay(e){return wa(e)&&e!==Ip&&e!==13&&e!==10}function Ey(e,t,r){var n=Ay(e),o=n&&!rs(e);return(r?n:n&&e!==44&&e!==91&&e!==93&&e!==123&&e!==125)&&e!==35&&!(t===58&&!o)||Ay(t)&&!rs(t)&&e===35||t===58&&o}function $a(e,t){var r,n=e.charCodeAt(t);return n>=55296&&n<=56319&&t+1<e.length&&(r=e.charCodeAt(t+1))>=56320&&r<=57343?1024*(n-55296)+r-56320+65536:n}function Oy(e){return/^\n* /.test(e)}function yT(e,t,r,n,o,a,i,s){var l,c=0,d=null,u=!1,f=!1,m=n!==-1,$=-1,C=function(E){return wa(E)&&E!==Ip&&!rs(E)&&E!==45&&E!==63&&E!==58&&E!==44&&E!==91&&E!==93&&E!==123&&E!==125&&E!==35&&E!==38&&E!==42&&E!==33&&E!==124&&E!==61&&E!==62&&E!==39&&E!==34&&E!==37&&E!==64&&E!==96}($a(e,0))&&function(E){return!rs(E)&&E!==58}($a(e,e.length-1));if(t||i)for(l=0;l<e.length;c>=65536?l+=2:l++){if(!wa(c=$a(e,l)))return 5;C=C&&Ey(c,d,s),d=c}else{for(l=0;l<e.length;c>=65536?l+=2:l++){if((c=$a(e,l))===10)u=!0,m&&(f=f||l-$-1>n&&e[$+1]!==" ",$=l);else if(!wa(c))return 5;C=C&&Ey(c,d,s),d=c}f=f||m&&l-$-1>n&&e[$+1]!==" "}return u||f?r>9&&Oy(e)?5:i?a===2?5:2:f?4:3:!C||i||o(e)?a===2?5:2:1}function vT(e,t,r,n,o){e.dump=function(){if(t.length===0)return e.quotingType===2?'""':"''";if(!e.noCompatMode&&(hT.indexOf(t)!==-1||fT.test(t)))return e.quotingType===2?'"'+t+'"':"'"+t+"'";var a=e.indent*Math.max(1,r),i=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a),s=n||e.flowLevel>-1&&r>=e.flowLevel;switch(yT(t,s,e.indent,i,function(l){return function(c,d){var u,f;for(u=0,f=c.implicitTypes.length;u<f;u+=1)if(c.implicitTypes[u].resolve(d))return!0;return!1}(e,l)},e.quotingType,e.forceQuotes&&!n,o)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+_y(t,e.indent)+Ty(ky(t,a));case 4:return">"+_y(t,e.indent)+Ty(ky(function(l,c){for(var d,u,f=/(\n+)([^\n]*)/g,m=(C=l.indexOf(`
`),C=C!==-1?C:l.length,f.lastIndex=C,Cy(l.slice(0,C),c)),$=l[0]===`
`||l[0]===" ",C;u=f.exec(l);){var E=u[1],h=u[2];d=h[0]===" ",m+=E+($||d||h===""?"":`
`)+Cy(h,c),$=d}return m}(t,i),a));case 5:return'"'+function(l){for(var c,d="",u=0,f=0;f<l.length;u>=65536?f+=2:f++)u=$a(l,f),!(c=dT[u])&&wa(u)?(d+=l[f],u>=65536&&(d+=l[f+1])):d+=c||mT(u);return d}(t)+'"';default:throw new Gt("impossible error: invalid scalar style")}}()}function _y(e,t){var r=Oy(e)?String(t):"",n=e[e.length-1]===`
`;return r+(n&&(e[e.length-2]===`
`||e===`
`)?"+":n?"":"-")+`
`}function Ty(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Cy(e,t){if(e===""||e[0]===" ")return e;for(var r,n,o=/ [^ ]/g,a=0,i=0,s=0,l="";r=o.exec(e);)(s=r.index)-a>t&&(n=i>a?i:s,l+=`
`+e.slice(a,n),a=n+1),i=s;return l+=`
`,e.length-a>t&&i>a?l+=e.slice(a,i)+`
`+e.slice(i+1):l+=e.slice(a),l.slice(1)}function Iy(e,t,r,n){var o,a,i,s="",l=e.tag;for(o=0,a=r.length;o<a;o+=1)i=r[o],e.replacer&&(i=e.replacer.call(r,String(o),i)),(Ur(e,t+1,i,!0,!0,!1,!0)||i===void 0&&Ur(e,t+1,null,!0,!0,!1,!0))&&(n&&s===""||(s+=jp(e,t)),e.dump&&e.dump.charCodeAt(0)===10?s+="-":s+="- ",s+=e.dump);e.tag=l,e.dump=s||"[]"}function jy(e,t,r){var n,o,a,i,s,l;for(a=0,i=(o=r?e.explicitTypes:e.implicitTypes).length;a<i;a+=1)if(((s=o[a]).instanceOf||s.predicate)&&(!s.instanceOf||typeof t=="object"&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(r?s.multi&&s.representName?e.tag=s.representName(t):e.tag=s.tag:e.tag="?",s.represent){if(l=e.styleMap[s.tag]||s.defaultStyle,$y.call(s.represent)==="[object Function]")n=s.represent(t,l);else{if(!Sy.call(s.represent,l))throw new Gt("!<"+s.tag+'> tag resolver accepts not "'+l+'" style');n=s.represent[l](t,l)}e.dump=n}return!0}return!1}function Ur(e,t,r,n,o,a,i){e.tag=null,e.dump=r,jy(e,r,!1)||jy(e,r,!0);var s,l=$y.call(e.dump),c=n;n&&(n=e.flowLevel<0||e.flowLevel>t);var d,u,f=l==="[object Object]"||l==="[object Array]";if(f&&(u=(d=e.duplicates.indexOf(r))!==-1),(e.tag!==null&&e.tag!=="?"||u||e.indent!==2&&t>0)&&(o=!1),u&&e.usedDuplicates[d])e.dump="*ref_"+d;else{if(f&&u&&!e.usedDuplicates[d]&&(e.usedDuplicates[d]=!0),l==="[object Object]")n&&Object.keys(e.dump).length!==0?(function(m,$,C,E){var h,D,F,M,Z,N,Q="",T=m.tag,L=Object.keys(C);if(m.sortKeys===!0)L.sort();else if(typeof m.sortKeys=="function")L.sort(m.sortKeys);else if(m.sortKeys)throw new Gt("sortKeys must be a boolean or a function");for(h=0,D=L.length;h<D;h+=1)N="",E&&Q===""||(N+=jp(m,$)),M=C[F=L[h]],m.replacer&&(M=m.replacer.call(C,F,M)),Ur(m,$+1,F,!0,!0,!0)&&((Z=m.tag!==null&&m.tag!=="?"||m.dump&&m.dump.length>1024)&&(m.dump&&m.dump.charCodeAt(0)===10?N+="?":N+="? "),N+=m.dump,Z&&(N+=jp(m,$)),Ur(m,$+1,M,!0,Z)&&(m.dump&&m.dump.charCodeAt(0)===10?N+=":":N+=": ",Q+=N+=m.dump));m.tag=T,m.dump=Q||"{}"}(e,t,e.dump,o),u&&(e.dump="&ref_"+d+e.dump)):(function(m,$,C){var E,h,D,F,M,Z="",N=m.tag,Q=Object.keys(C);for(E=0,h=Q.length;E<h;E+=1)M="",Z!==""&&(M+=", "),m.condenseFlow&&(M+='"'),F=C[D=Q[E]],m.replacer&&(F=m.replacer.call(C,D,F)),Ur(m,$,D,!1,!1)&&(m.dump.length>1024&&(M+="? "),M+=m.dump+(m.condenseFlow?'"':"")+":"+(m.condenseFlow?"":" "),Ur(m,$,F,!1,!1)&&(Z+=M+=m.dump));m.tag=N,m.dump="{"+Z+"}"}(e,t,e.dump),u&&(e.dump="&ref_"+d+" "+e.dump));else if(l==="[object Array]")n&&e.dump.length!==0?(e.noArrayIndent&&!i&&t>0?Iy(e,t-1,e.dump,o):Iy(e,t,e.dump,o),u&&(e.dump="&ref_"+d+e.dump)):(function(m,$,C){var E,h,D,F="",M=m.tag;for(E=0,h=C.length;E<h;E+=1)D=C[E],m.replacer&&(D=m.replacer.call(C,String(E),D)),(Ur(m,$,D,!1,!1)||D===void 0&&Ur(m,$,null,!1,!1))&&(F!==""&&(F+=","+(m.condenseFlow?"":" ")),F+=m.dump);m.tag=M,m.dump="["+F+"]"}(e,t,e.dump),u&&(e.dump="&ref_"+d+" "+e.dump));else{if(l!=="[object String]"){if(l==="[object Undefined]"||e.skipInvalid)return!1;throw new Gt("unacceptable kind of an object to dump "+l)}e.tag!=="?"&&vT(e,e.dump,t,a,c)}e.tag!==null&&e.tag!=="?"&&(s=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),s=e.tag[0]==="!"?"!"+s:s.slice(0,18)==="tag:yaml.org,2002:"?"!!"+s.slice(18):"!<"+s+">",e.dump=s+" "+e.dump)}return!0}function bT(e,t){var r,n,o=[],a=[];for(Pp(e,o,a),r=0,n=a.length;r<n;r+=1)t.duplicates.push(o[a[r]]);t.usedDuplicates=new Array(n)}function Pp(e,t,r){var n,o,a;if(e!==null&&typeof e=="object")if((o=t.indexOf(e))!==-1)r.indexOf(o)===-1&&r.push(o);else if(t.push(e),Array.isArray(e))for(o=0,a=e.length;o<a;o+=1)Pp(e[o],t,r);else for(o=0,a=(n=Object.keys(e)).length;o<a;o+=1)Pp(e[n[o]],t,r)}function Rp(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var Py={Type:Dt,Schema:Wg,FAILSAFE_SCHEMA:Jg,JSON_SCHEMA:ey,CORE_SCHEMA:ty,DEFAULT_SCHEMA:_p,load:wy.load,loadAll:wy.loadAll,dump:function(e,t){var r=new gT(t=t||{});r.noRefs||bT(e,r);var n=e;return r.replacer&&(n=r.replacer.call({"":n},"",n)),Ur(r,0,n,!0,!0)?r.dump+`
`:""},YAMLException:Gt,types:{binary:iy,float:Xg,map:Kg,null:Yg,pairs:ly,set:cy,timestamp:oy,bool:Zg,int:Qg,merge:ay,omap:sy,seq:Gg,str:Vg},safeLoad:Rp("safeLoad","load"),safeLoadAll:Rp("safeLoadAll","loadAll"),safeDump:Rp("safeDump","dump")};const xT=typeof globalThis<"u"?globalThis:typeof self<"u"?self:window,{FormData:Ry,Blob:ns,File:Ly}=xT;function jn(e){return function(t){if(fc(t))return vc(t)}(e)||function(t){if(kn!==void 0&&hc(t)!=null||t["@@iterator"]!=null)return im(t)}(e)||bc(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}var br=Jf,wT=function(e){return":/?#[]@!$&'()*+,;=".indexOf(e)>-1},$T=function(e){return/^[a-z0-9\-._~]+$/i.test(e)};function vo(e){var t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.escape,o=arguments.length>2?arguments[2]:void 0;return typeof e=="number"&&(e=e.toString()),typeof e=="string"&&e.length&&n?o?JSON.parse(e):Xe(t=jn(e)).call(t,function(a){var i,s;if($T(a)||wT(a)&&n==="unsafe")return a;var l=new TextEncoder;return Xe(i=Xe(s=sg(l.encode(a))).call(s,function(c){var d;return br(d="0".concat(c.toString(16).toUpperCase())).call(d,-2)})).call(i,function(c){return"%".concat(c)}).join("")}).join(""):e}function Lp(e){var t=e.value;return Array.isArray(t)?function(r){var n=r.key,o=r.value,a=r.style,i=r.explode,s=r.escape,l=function(f){return vo(f,{escape:s})};if(a==="simple")return Xe(o).call(o,function(f){return l(f)}).join(",");if(a==="label")return".".concat(Xe(o).call(o,function(f){return l(f)}).join("."));if(a==="matrix")return Xe(o).call(o,function(f){return l(f)}).reduce(function(f,m){var $,C,E;return!f||i?Ee(C=Ee(E="".concat(f||"",";")).call(E,n,"=")).call(C,m):Ee($="".concat(f,",")).call($,m)},"");if(a==="form"){var c=i?"&".concat(n,"="):",";return Xe(o).call(o,function(f){return l(f)}).join(c)}if(a==="spaceDelimited"){var d=i?"".concat(n,"="):"";return Xe(o).call(o,function(f){return l(f)}).join(" ".concat(d))}if(a==="pipeDelimited"){var u=i?"".concat(n,"="):"";return Xe(o).call(o,function(f){return l(f)}).join("|".concat(u))}}(e):lt(t)==="object"?function(r){var n=r.key,o=r.value,a=r.style,i=r.explode,s=r.escape,l=function(d){return vo(d,{escape:s})},c=Ve(o);if(a==="simple")return c.reduce(function(d,u){var f,m,$,C=l(o[u]),E=i?"=":",",h=d?"".concat(d,","):"";return Ee(f=Ee(m=Ee($="".concat(h)).call($,u)).call(m,E)).call(f,C)},"");if(a==="label")return c.reduce(function(d,u){var f,m,$,C=l(o[u]),E=i?"=":".",h=d?"".concat(d,"."):".";return Ee(f=Ee(m=Ee($="".concat(h)).call($,u)).call(m,E)).call(f,C)},"");if(a==="matrix"&&i)return c.reduce(function(d,u){var f,m,$=l(o[u]),C=d?"".concat(d,";"):";";return Ee(f=Ee(m="".concat(C)).call(m,u,"=")).call(f,$)},"");if(a==="matrix")return c.reduce(function(d,u){var f,m,$=l(o[u]),C=d?"".concat(d,","):";".concat(n,"=");return Ee(f=Ee(m="".concat(C)).call(m,u,",")).call(f,$)},"");if(a==="form")return c.reduce(function(d,u){var f,m,$,C,E=l(o[u]),h=d?Ee(f="".concat(d)).call(f,i?"&":","):"",D=i?"=":",";return Ee(m=Ee($=Ee(C="".concat(h)).call(C,u)).call($,D)).call(m,E)},"")}(e):function(r){var n,o=r.key,a=r.value,i=r.style,s=r.escape,l=function(c){return vo(c,{escape:s})};if(i==="simple")return l(a);if(i==="label")return".".concat(l(a));if(i==="matrix")return Ee(n=";".concat(o,"=")).call(n,l(a));if(i==="form"||i==="deepObject")return l(a)}(e)}var ST=function(e,t){t.body=e},Np={serializeRes:Fy,mergeInQueryOrForm:My};function os(e){return Ny.apply(this,arguments)}function Ny(){return(Ny=Wc(Tr.mark(function e(t){var r,n,o,a,i,s=arguments;return Tr.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(r=s.length>1&&s[1]!==void 0?s[1]:{},lt(t)==="object"&&(t=(r=t).url),r.headers=r.headers||{},Np.mergeInQueryOrForm(r),r.headers&&Ve(r.headers).forEach(function(c){var d=r.headers[c];typeof d=="string"&&(r.headers[c]=d.replace(/\n+/g," "))}),!r.requestInterceptor){l.next=12;break}return l.next=8,r.requestInterceptor(r);case 8:if(l.t0=l.sent,l.t0){l.next=11;break}l.t0=r;case 11:r=l.t0;case 12:return n=r.headers["content-type"]||r.headers["Content-Type"],/multipart\/form-data/i.test(n)&&r.body instanceof Ry&&(delete r.headers["content-type"],delete r.headers["Content-Type"]),l.prev=14,l.next=17,(r.userFetch||fetch)(r.url,r);case 17:return o=l.sent,l.next=20,Np.serializeRes(o,t,r);case 20:if(o=l.sent,!r.responseInterceptor){l.next=28;break}return l.next=24,r.responseInterceptor(o);case 24:if(l.t1=l.sent,l.t1){l.next=27;break}l.t1=o;case 27:o=l.t1;case 28:l.next=39;break;case 30:if(l.prev=30,l.t2=l.catch(14),o){l.next=34;break}throw l.t2;case 34:throw(a=new Error(o.statusText||"response status is ".concat(o.status))).status=o.status,a.statusCode=o.status,a.responseError=l.t2,a;case 39:if(o.ok){l.next=45;break}throw(i=new Error(o.statusText||"response status is ".concat(o.status))).status=o.status,i.statusCode=o.status,i.response=o,i;case 45:return l.abrupt("return",o);case 46:case"end":return l.stop()}},e,null,[[14,30]])}))).apply(this,arguments)}var kT=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/(json|xml|yaml|text)\b/.test(e)};function AT(e,t){return t&&(t.indexOf("application/json")===0||t.indexOf("+json")>0)?JSON.parse(e):Py.load(e)}function Fy(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.loadSpec,o=n!==void 0&&n,a={ok:e.ok,url:e.url||t,status:e.status,statusText:e.statusText,headers:By(e.headers)},i=a.headers["content-type"],s=o||kT(i),l=s?e.text:e.blob||e.buffer;return l.call(e).then(function(c){if(a.text=c,a.data=c,s)try{var d=AT(c,i);a.body=d,a.obj=d}catch(u){a.parseError=u}return a})}function ET(e){return ha(e).call(e,", ")?e.split(", "):e}function By(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return typeof ig(e)!="function"?{}:sg(ig(e).call(e)).reduce(function(t,r){var n=vr(r,2),o=n[0],a=n[1];return t[o]=ET(a),t},{})}function Fp(e,t){return t||typeof navigator>"u"||(t=navigator),t&&t.product==="ReactNative"?!(!e||lt(e)!=="object"||typeof e.uri!="string"):Ly!==void 0&&e instanceof Ly||ns!==void 0&&e instanceof ns||!!ArrayBuffer.isView(e)||e!==null&&lt(e)==="object"&&typeof e.pipe=="function"}function Dy(e,t){return Array.isArray(e)&&e.some(function(r){return Fp(r,t)})}var OT={form:",",spaceDelimited:"%20",pipeDelimited:"|"},_T={csv:",",ssv:"%20",tsv:"%09",pipes:"|"};function zy(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],n=t.collectionFormat,o=t.allowEmptyValue,a=t.serializationOption,i=t.encoding,s=lt(t)!=="object"||Array.isArray(t)?t:t.value,l=r?function($){return $.toString()}:function($){return encodeURIComponent($)},c=l(e);if(s===void 0&&o)return[[c,""]];if(Fp(s)||Dy(s))return[[c,s]];if(a)return Uy(e,s,r,a);if(i){if([lt(i.style),lt(i.explode),lt(i.allowReserved)].some(function($){return $!=="undefined"})){var d=i.style,u=i.explode,f=i.allowReserved;return Uy(e,s,r,{style:d,explode:u,allowReserved:f})}if(i.contentType){if(i.contentType==="application/json"){var m=typeof s=="string"?s:Wi(s);return[[c,l(m)]]}return[[c,l(s.toString())]]}return lt(s)!=="object"?[[c,l(s)]]:Array.isArray(s)&&s.every(function($){return lt($)!=="object"})?[[c,Xe(s).call(s,l).join(",")]]:[[c,l(Wi(s))]]}return lt(s)!=="object"?[[c,l(s)]]:Array.isArray(s)?n==="multi"?[[c,Xe(s).call(s,l)]]:[[c,Xe(s).call(s,l).join(_T[n||"csv"])]]:[[c,""]]}function Uy(e,t,r,n){var o,a,i,s=n.style||"form",l=n.explode===void 0?s==="form":n.explode,c=!r&&(n&&n.allowReserved?"unsafe":"reserved"),d=function(f){return vo(f,{escape:c})},u=r?function(f){return f}:function(f){return vo(f,{escape:c})};return lt(t)!=="object"?[[u(e),d(t)]]:Array.isArray(t)?l?[[u(e),Xe(t).call(t,d)]]:[[u(e),Xe(t).call(t,d).join(OT[s])]]:s==="deepObject"?Xe(a=Ve(t)).call(a,function(f){var m;return[u(Ee(m="".concat(e,"[")).call(m,f,"]")),d(t[f])]}):l?Xe(i=Ve(t)).call(i,function(f){return[u(f),d(t[f])]}):[[u(e),Xe(o=Ve(t)).call(o,function(f){var m;return[Ee(m="".concat(u(f),",")).call(m,d(t[f]))]}).join(",")]]}function TT(e){return hg(e).reduce(function(t,r){var n,o=vr(r,2),a=An(zy(o[0],o[1],!0));try{for(a.s();!(n=a.n()).done;){var i=vr(n.value,2),s=i[0],l=i[1];if(Array.isArray(l)){var c,d=An(l);try{for(d.s();!(c=d.n()).done;){var u=c.value;if(ArrayBuffer.isView(u)){var f=new ns([u]);t.append(s,f)}else t.append(s,u)}}catch($){d.e($)}finally{d.f()}}else if(ArrayBuffer.isView(l)){var m=new ns([l]);t.append(s,m)}else t.append(s,l)}}catch($){a.e($)}finally{a.f()}return t},new Ry)}function qy(e){var t=Ve(e).reduce(function(r,n){var o,a=An(zy(n,e[n]));try{for(a.s();!(o=a.n()).done;){var i=vr(o.value,2),s=i[0],l=i[1];r[s]=l}}catch(c){a.e(c)}finally{a.f()}return r},{});return Sp.stringify(t,{encode:!1,indices:!1})||""}function My(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.url,r=t===void 0?"":t,n=e.query,o=e.form,a=function(){for(var h=arguments.length,D=new Array(h),F=0;F<h;F++)D[F]=arguments[F];var M=dr(D).call(D,function(Z){return Z}).join("&");return M?"?".concat(M):""};if(o){var i=Ve(o).some(function(h){var D=o[h].value;return Fp(D)||Dy(D)}),s=e.headers["content-type"]||e.headers["Content-Type"];if(i||/multipart\/form-data/i.test(s)){var l=TT(e.form);ST(l,e)}else e.body=qy(o);delete e.form}if(n){var c=r.split("?"),d=vr(c,2),u=d[0],f=d[1],m="";if(f){var $=Sp.parse(f),C=Ve(n);C.forEach(function(h){return delete $[h]}),m=Sp.stringify($,{encode:!0})}var E=a(m,qy(n));e.url=u+E,delete e.query}return e}function Hy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wy(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Ti(e,n.key,n)}}function Vy(e,t,r){return t&&Wy(e.prototype,t),r&&Wy(e,r),Ti(e,"prototype",{writable:!1}),e}var CT=Ye,IT=Qr.find,jT="find",Gy=!0;jT in[]&&Array(1).find(function(){Gy=!1}),CT({target:"Array",proto:!0,forced:Gy},{find:function(e){return IT(this,e,arguments.length>1?arguments[1]:void 0)}});var PT=cr("Array").find,RT=Mt,LT=PT,Bp=Array.prototype,NT=function(e){var t=e.find;return e===Bp||RT(Bp,e)&&t===Bp.find?LT:t},Pn=eg,FT=Ye,BT=Ce,DT=ui,zT=pi,UT=Jr,qT=Br,MT=Pl,HT=Vn,WT=na("splice"),VT=BT.TypeError,GT=Math.max,KT=Math.min,JT=9007199254740991,YT="Maximum allowed length exceeded";FT({target:"Array",proto:!0,forced:!WT},{splice:function(e,t){var r,n,o,a,i,s,l=qT(this),c=UT(l),d=DT(e,c),u=arguments.length;if(u===0?r=n=0:u===1?(r=0,n=c-d):(r=u-2,n=KT(GT(zT(t),0),c-d)),c+r-n>JT)throw VT(YT);for(o=MT(l,n),a=0;a<n;a++)(i=d+a)in l&&HT(o,a,l[i]);if(o.length=n,r<n){for(a=d;a<c-n;a++)s=a+r,(i=a+n)in l?l[s]=l[i]:delete l[s];for(a=c;a>c-n+r;a--)delete l[a-1]}else if(r>n)for(a=c-n;a>d;a--)s=a+r-1,(i=a+n-1)in l?l[s]=l[i]:delete l[s];for(a=0;a<r;a++)l[a+d]=arguments[a+2];return l.length=c-n+r,o}});var Dp,ZT=cr("Array").splice,QT=Mt,XT=ZT,zp=Array.prototype,eC=function(e){var t=e.splice;return e===zp||QT(zp,e)&&t===zp.splice?XT:t},tC=globalThis&&globalThis.__extends||(Dp=function(e,t){return(Dp=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o])})(e,t)},function(e,t){function r(){this.constructor=e}Dp(e,t),e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}),rC=Object.prototype.hasOwnProperty;function Up(e,t){return rC.call(e,t)}function qp(e){if(Array.isArray(e)){for(var t=new Array(e.length),r=0;r<t.length;r++)t[r]=""+r;return t}if(Object.keys)return Object.keys(e);t=[];for(var n in e)Up(e,n)&&t.push(n);return t}function or(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e));case"undefined":return null;default:return e}}function Mp(e){for(var t,r=0,n=e.length;r<n;){if(!((t=e.charCodeAt(r))>=48&&t<=57))return!1;r++}return!0}function Rn(e){return e.indexOf("/")===-1&&e.indexOf("~")===-1?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function Ky(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}function Hp(e){if(e===void 0)return!0;if(e){if(Array.isArray(e)){for(var t=0,r=e.length;t<r;t++)if(Hp(e[t]))return!0}else if(typeof e=="object"){var n=qp(e),o=n.length;for(t=0;t<o;t++)if(Hp(e[n[t]]))return!0}}return!1}function Jy(e,t){var r=[e];for(var n in t){var o=typeof t[n]=="object"?JSON.stringify(t[n],null,2):t[n];o!==void 0&&r.push(n+": "+o)}return r.join(`
`)}var Yy=function(e){function t(r,n,o,a,i){var s=this.constructor,l=e.call(this,Jy(r,{name:n,index:o,operation:a,tree:i}))||this;return l.name=n,l.index=o,l.operation=a,l.tree=i,Object.setPrototypeOf(l,s.prototype),l.message=Jy(r,{name:n,index:o,operation:a,tree:i}),l}return tC(t,e),t}(Error),vt=Yy,nC=or,bo={add:function(e,t,r){return e[t]=this.value,{newDocument:r}},remove:function(e,t,r){var n=e[t];return delete e[t],{newDocument:r,removed:n}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:function(e,t,r){var n=Sa(r,this.path);n&&(n=or(n));var o=Ln(r,{op:"remove",path:this.from}).removed;return Ln(r,{op:"add",path:this.path,value:o}),{newDocument:r,removed:n}},copy:function(e,t,r){var n=Sa(r,this.from);return Ln(r,{op:"add",path:this.path,value:or(n)}),{newDocument:r}},test:function(e,t,r){return{newDocument:r,test:ka(e[t],this.value)}},_get:function(e,t,r){return this.value=e[t],{newDocument:r}}},oC={add:function(e,t,r){return Mp(t)?e.splice(t,0,this.value):e[t]=this.value,{newDocument:r,index:t}},remove:function(e,t,r){return{newDocument:r,removed:e.splice(t,1)[0]}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:bo.move,copy:bo.copy,test:bo.test,_get:bo._get};function Sa(e,t){if(t=="")return e;var r={op:"_get",path:t};return Ln(e,r),r.value}function Ln(e,t,r,n,o,a){if(r===void 0&&(r=!1),n===void 0&&(n=!0),o===void 0&&(o=!0),a===void 0&&(a=0),r&&(typeof r=="function"?r(t,0,e,t.path):as(t,0)),t.path===""){var i={newDocument:e};if(t.op==="add")return i.newDocument=t.value,i;if(t.op==="replace")return i.newDocument=t.value,i.removed=e,i;if(t.op==="move"||t.op==="copy")return i.newDocument=Sa(e,t.from),t.op==="move"&&(i.removed=e),i;if(t.op==="test"){if(i.test=ka(e,t.value),i.test===!1)throw new vt("Test operation failed","TEST_OPERATION_FAILED",a,t,e);return i.newDocument=e,i}if(t.op==="remove")return i.removed=e,i.newDocument=null,i;if(t.op==="_get")return t.value=e,i;if(r)throw new vt("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",a,t,e);return i}n||(e=or(e));var s=(t.path||"").split("/"),l=e,c=1,d=s.length,u=void 0,f=void 0,m=void 0;for(m=typeof r=="function"?r:as;;){if((f=s[c])&&f.indexOf("~")!=-1&&(f=Ky(f)),o&&f=="__proto__")throw new TypeError("JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(r&&u===void 0&&(l[f]===void 0?u=s.slice(0,c).join("/"):c==d-1&&(u=t.path),u!==void 0&&m(t,0,e,u)),c++,Array.isArray(l)){if(f==="-")f=l.length;else{if(r&&!Mp(f))throw new vt("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",a,t,e);Mp(f)&&(f=~~f)}if(c>=d){if(r&&t.op==="add"&&f>l.length)throw new vt("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",a,t,e);if((i=oC[t.op].call(t,l,f,e)).test===!1)throw new vt("Test operation failed","TEST_OPERATION_FAILED",a,t,e);return i}}else if(c>=d){if((i=bo[t.op].call(t,l,f,e)).test===!1)throw new vt("Test operation failed","TEST_OPERATION_FAILED",a,t,e);return i}if(l=l[f],r&&c<d&&(!l||typeof l!="object"))throw new vt("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",a,t,e)}}function cn(e,t,r,n,o){if(n===void 0&&(n=!0),o===void 0&&(o=!0),r&&!Array.isArray(t))throw new vt("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");n||(e=or(e));for(var a=new Array(t.length),i=0,s=t.length;i<s;i++)a[i]=Ln(e,t[i],r,!0,o,i),e=a[i].newDocument;return a.newDocument=e,a}function as(e,t,r,n){if(typeof e!="object"||e===null||Array.isArray(e))throw new vt("Operation is not an object","OPERATION_NOT_AN_OBJECT",t,e,r);if(!bo[e.op])throw new vt("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",t,e,r);if(typeof e.path!="string")throw new vt("Operation `path` property is not a string","OPERATION_PATH_INVALID",t,e,r);if(e.path.indexOf("/")!==0&&e.path.length>0)throw new vt('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",t,e,r);if((e.op==="move"||e.op==="copy")&&typeof e.from!="string")throw new vt("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",t,e,r);if((e.op==="add"||e.op==="replace"||e.op==="test")&&e.value===void 0)throw new vt("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",t,e,r);if((e.op==="add"||e.op==="replace"||e.op==="test")&&Hp(e.value))throw new vt("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",t,e,r);if(r){if(e.op=="add"){var o=e.path.split("/").length,a=n.split("/").length;if(o!==a+1&&o!==a)throw new vt("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",t,e,r)}else if(e.op==="replace"||e.op==="remove"||e.op==="_get"){if(e.path!==n)throw new vt("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",t,e,r)}else if(e.op==="move"||e.op==="copy"){var i=Zy([{op:"_get",path:e.from,value:void 0}],r);if(i&&i.name==="OPERATION_PATH_UNRESOLVABLE")throw new vt("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",t,e,r)}}}function Zy(e,t,r){try{if(!Array.isArray(e))throw new vt("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(t)cn(or(t),or(e),r||!0);else{r=r||as;for(var n=0;n<e.length;n++)r(e[n],n,t,void 0)}}catch(o){if(o instanceof vt)return o;throw o}}function ka(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r,n,o,a=Array.isArray(e),i=Array.isArray(t);if(a&&i){if((n=e.length)!=t.length)return!1;for(r=n;r--!=0;)if(!ka(e[r],t[r]))return!1;return!0}if(a!=i)return!1;var s=Object.keys(e);if((n=s.length)!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!t.hasOwnProperty(s[r]))return!1;for(r=n;r--!=0;)if(!ka(e[o=s[r]],t[o]))return!1;return!0}return e!=e&&t!=t}var aC=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",JsonPatchError:vt,deepClone:nC,getValueByPointer:Sa,applyOperation:Ln,applyPatch:cn,applyReducer:function(e,t,r){var n=Ln(e,t);if(n.test===!1)throw new vt("Test operation failed","TEST_OPERATION_FAILED",r,t,e);return n.newDocument},validator:as,validate:Zy,_areEquals:ka}),Wp=new WeakMap,iC=function(e){this.observers=new Map,this.obj=e},sC=function(e,t){this.callback=e,this.observer=t};function Vp(e,t){t===void 0&&(t=!1);var r=Wp.get(e.object);Gp(r.value,e.object,e.patches,"",t),e.patches.length&&cn(r.value,e.patches);var n=e.patches;return n.length>0&&(e.patches=[],e.callback&&e.callback(n)),n}function Gp(e,t,r,n,o){if(t!==e){typeof t.toJSON=="function"&&(t=t.toJSON());for(var a=qp(t),i=qp(e),s=!1,l=i.length-1;l>=0;l--){var c=e[u=i[l]];if(!Up(t,u)||t[u]===void 0&&c!==void 0&&Array.isArray(t)===!1)Array.isArray(e)===Array.isArray(t)?(o&&r.push({op:"test",path:n+"/"+Rn(u),value:or(c)}),r.push({op:"remove",path:n+"/"+Rn(u)}),s=!0):(o&&r.push({op:"test",path:n,value:e}),r.push({op:"replace",path:n,value:t}));else{var d=t[u];typeof c=="object"&&c!=null&&typeof d=="object"&&d!=null&&Array.isArray(c)===Array.isArray(d)?Gp(c,d,r,n+"/"+Rn(u),o):c!==d&&(o&&r.push({op:"test",path:n+"/"+Rn(u),value:or(c)}),r.push({op:"replace",path:n+"/"+Rn(u),value:or(d)}))}}if(s||a.length!=i.length)for(l=0;l<a.length;l++){var u;Up(e,u=a[l])||t[u]===void 0||r.push({op:"add",path:n+"/"+Rn(u),value:or(t[u])})}}}var lC=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",unobserve:function(e,t){t.unobserve()},observe:function(e,t){var r,n=function(s){return Wp.get(s)}(e);if(n){var o=function(s,l){return s.observers.get(l)}(n,t);r=o&&o.observer}else n=new iC(e),Wp.set(e,n);if(r)return r;if(r={},n.value=or(e),t){r.callback=t,r.next=null;var a=function(){Vp(r)},i=function(){clearTimeout(r.next),r.next=setTimeout(a)};typeof window<"u"&&(window.addEventListener("mouseup",i),window.addEventListener("keyup",i),window.addEventListener("mousedown",i),window.addEventListener("keydown",i),window.addEventListener("change",i))}return r.patches=[],r.object=e,r.unobserve=function(){Vp(r),clearTimeout(r.next),function(s,l){s.observers.delete(l.callback)}(n,r),typeof window<"u"&&(window.removeEventListener("mouseup",i),window.removeEventListener("keyup",i),window.removeEventListener("mousedown",i),window.removeEventListener("keydown",i),window.removeEventListener("change",i))},n.observers.set(t,new sC(t,r)),r},generate:Vp,compare:function(e,t,r){r===void 0&&(r=!1);var n=[];return Gp(e,t,n,"",r),n}});Object.assign({},aC,lC,{JsonPatchError:Yy,deepClone:or,escapePathComponent:Rn,unescapePathComponent:Ky});var cC=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var r=Object.prototype.toString.call(t);return r==="[object RegExp]"||r==="[object Date]"||function(n){return n.$$typeof===pC}(t)}(e)},pC=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function Aa(e,t){return t.clone!==!1&&t.isMergeableObject(e)?xo((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function uC(e,t,r){return e.concat(t).map(function(n){return Aa(n,r)})}function Qy(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(r){return t.propertyIsEnumerable(r)}):[]}(e))}function Xy(e,t){try{return t in e}catch{return!1}}function dC(e,t,r){var n={};return r.isMergeableObject(e)&&Qy(e).forEach(function(o){n[o]=Aa(e[o],r)}),Qy(t).forEach(function(o){(function(a,i){return Xy(a,i)&&!(Object.hasOwnProperty.call(a,i)&&Object.propertyIsEnumerable.call(a,i))})(e,o)||(Xy(e,o)&&r.isMergeableObject(t[o])?n[o]=function(a,i){if(!i.customMerge)return xo;var s=i.customMerge(a);return typeof s=="function"?s:xo}(o,r)(e[o],t[o],r):n[o]=Aa(t[o],r))}),n}function xo(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||uC,r.isMergeableObject=r.isMergeableObject||cC,r.cloneUnlessOtherwiseSpecified=Aa;var n=Array.isArray(t);return n===Array.isArray(e)?n?r.arrayMerge(e,t,r):dC(e,t,r):Aa(t,r)}xo.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,n){return xo(r,n,t)},{})};var hC=xo,rt={add:function(e,t){return{op:"add",path:e,value:t}},replace:is,remove:function(e){return{op:"remove",path:e}},merge:function(e,t){return{type:"mutation",op:"merge",path:e,value:t}},mergeDeep:function(e,t){return{type:"mutation",op:"mergeDeep",path:e,value:t}},context:function(e,t){return{type:"context",path:e,value:t}},getIn:function(e,t){return t.reduce(function(r,n){return n!==void 0&&r?r[n]:r},e)},applyPatch:function(e,t,r){if(r=r||{},(t=dt(dt({},t),{},{path:t.path&&ev(t.path)})).op==="merge"){var n=Yp(e,t.path);pr(n,t.value),cn(e,[is(t.path,n)])}else if(t.op==="mergeDeep"){var o=Yp(e,t.path),a=hC(o,t.value);e=cn(e,[is(t.path,a)]).newDocument}else if(t.op==="add"&&t.path===""&&Nn(t.value)){var i=Ve(t.value).reduce(function(c,d){return c.push({op:"add",path:"/".concat(ev(d)),value:t.value[d]}),c},[]);cn(e,i)}else if(t.op==="replace"&&t.path===""){var s=t.value;r.allowMetaPatches&&t.meta&&ss(t)&&(Array.isArray(t.value)||Nn(t.value))&&(s=dt(dt({},s),t.meta)),e=s}else if(cn(e,[t]),r.allowMetaPatches&&t.meta&&ss(t)&&(Array.isArray(t.value)||Nn(t.value))){var l=dt(dt({},Yp(e,t.path)),t.meta);cn(e,[is(t.path,l)])}return e},parentPathMatch:function(e,t){if(!Array.isArray(t))return!1;for(var r=0,n=t.length;r<n;r+=1)if(t[r]!==e[r])return!1;return!0},flatten:Ea,fullyNormalizeArray:function(e){return nv(Ea(rv(e)))},normalizeArray:rv,isPromise:function(e){return Nn(e)&&ov(e.then)},forEachNew:function(e,t){try{return tv(e,Jp,t)}catch(r){return r}},forEachNewPrimitive:function(e,t){try{return tv(e,Kp,t)}catch(r){return r}},isJsonPatch:av,isContextPatch:function(e){return ls(e)&&e.type==="context"},isPatch:ls,isMutation:iv,isAdditiveMutation:ss,isGenerator:function(e){return Object.prototype.toString.call(e)==="[object GeneratorFunction]"},isFunction:ov,isObject:Nn,isError:function(e){return e instanceof Error}};function ev(e){return Array.isArray(e)?e.length<1?"":"/".concat(Xe(e).call(e,function(t){return(t+"").replace(/~/g,"~0").replace(/\//g,"~1")}).join("/")):e}function is(e,t,r){return{op:"replace",path:e,value:t,meta:r}}function tv(e,t,r){var n;return nv(Ea(Xe(n=dr(e).call(e,ss)).call(n,function(o){return t(o.value,r,o.path)})||[]))}function Kp(e,t,r){return r=r||[],Array.isArray(e)?Xe(e).call(e,function(o,a){return Kp(o,t,Ee(r).call(r,a))}):Nn(e)?Xe(n=Ve(e)).call(n,function(o){return Kp(e[o],t,Ee(r).call(r,o))}):t(e,r[r.length-1],r);var n}function Jp(e,t,r){var n=[];if((r=r||[]).length>0){var o=t(e,r[r.length-1],r);o&&(n=Ee(n).call(n,o))}if(Array.isArray(e)){var a=Xe(e).call(e,function(l,c){return Jp(l,t,Ee(r).call(r,c))});a&&(n=Ee(n).call(n,a))}else if(Nn(e)){var i,s=Xe(i=Ve(e)).call(i,function(l){return Jp(e[l],t,Ee(r).call(r,l))});s&&(n=Ee(n).call(n,s))}return n=Ea(n)}function rv(e){return Array.isArray(e)?e:[e]}function Ea(e){var t;return Ee(t=[]).apply(t,jn(Xe(e).call(e,function(r){return Array.isArray(r)?Ea(r):r})))}function nv(e){return dr(e).call(e,function(t){return t!==void 0})}function Nn(e){return e&&lt(e)==="object"}function ov(e){return e&&typeof e=="function"}function av(e){if(ls(e)){var t=e.op;return t==="add"||t==="remove"||t==="replace"}return!1}function iv(e){return av(e)||ls(e)&&e.type==="mutation"}function ss(e){return iv(e)&&(e.op==="add"||e.op==="replace"||e.op==="merge"||e.op==="mergeDeep")}function ls(e){return e&&lt(e)==="object"}function Yp(e,t){try{return Sa(e,t)}catch(r){return console.error(r),{}}}var cs={exports:{}},fC=st(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}),mC=st,gC=Ot,yC=fn,sv=fC,ps=Object.isExtensible,lv=mC(function(){ps(1)})||sv?function(e){return!!gC(e)&&(!sv||yC(e)!="ArrayBuffer")&&(!ps||ps(e))}:ps,vC=!st(function(){return Object.isExtensible(Object.preventExtensions({}))}),bC=Ye,xC=at,wC=Ho,$C=Ot,Zp=Ft,SC=tr.f,cv=Ko,kC=kl,Qp=lv,AC=vC,pv=!1,qr=ii("meta"),EC=0,Xp=function(e){SC(e,qr,{value:{objectID:"O"+EC++,weakData:{}}})},OC=cs.exports={enable:function(){OC.enable=function(){},pv=!0;var e=cv.f,t=xC([].splice),r={};r[qr]=1,e(r).length&&(cv.f=function(n){for(var o=e(n),a=0,i=o.length;a<i;a++)if(o[a]===qr){t(o,a,1);break}return o},bC({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:kC.f}))},fastKey:function(e,t){if(!$C(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!Zp(e,qr)){if(!Qp(e))return"F";if(!t)return"E";Xp(e)}return e[qr].objectID},getWeakData:function(e,t){if(!Zp(e,qr)){if(!Qp(e))return!0;if(!t)return!1;Xp(e)}return e[qr].weakData},onFreeze:function(e){return AC&&pv&&Qp(e)&&!Zp(e,qr)&&Xp(e),e}};wC[qr]=!0;var _C=Ye,TC=Ce,CC=cs.exports,IC=st,jC=Kr,PC=Xn,RC=Li,LC=St,NC=Ot,FC=bn,BC=tr.f,DC=Qr.forEach,zC=qt,UC=Ar.set,qC=Ar.getterFor,MC=at,uv=Ri,us=cs.exports.getWeakData,HC=Zt,eu=Ot,WC=Li,VC=Xn,dv=Ft,GC=Ar.set,KC=Ar.getterFor,JC=Qr.find,YC=Qr.findIndex,ZC=MC([].splice),QC=0,ds=function(e){return e.frozen||(e.frozen=new hv)},hv=function(){this.entries=[]},tu=function(e,t){return JC(e.entries,function(r){return r[0]===t})};hv.prototype={get:function(e){var t=tu(this,e);if(t)return t[1]},has:function(e){return!!tu(this,e)},set:function(e,t){var r=tu(this,e);r?r[1]=t:this.entries.push([e,t])},delete:function(e){var t=YC(this.entries,function(r){return r[0]===e});return~t&&ZC(this.entries,t,1),!!~t}};var Oa,XC={getConstructor:function(e,t,r,n){var o=e(function(l,c){WC(l,a),GC(l,{type:t,id:QC++,frozen:void 0}),c!=null&&VC(c,l[n],{that:l,AS_ENTRIES:r})}),a=o.prototype,i=KC(t),s=function(l,c,d){var u=i(l),f=us(HC(c),!0);return f===!0?ds(u).set(c,d):f[u.id]=d,l};return uv(a,{delete:function(l){var c=i(this);if(!eu(l))return!1;var d=us(l);return d===!0?ds(c).delete(l):d&&dv(d,c.id)&&delete d[c.id]},has:function(l){var c=i(this);if(!eu(l))return!1;var d=us(l);return d===!0?ds(c).has(l):d&&dv(d,c.id)}}),uv(a,r?{get:function(l){var c=i(this);if(eu(l)){var d=us(l);return d===!0?ds(c).get(l):d?d[c.id]:void 0}},set:function(l,c){return s(this,l,c)}}:{add:function(l){return s(this,l,!0)}}),o}},fv=Ce,hs=at,eI=Ri,tI=cs.exports,rI=function(e,t,r){var n,o=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,i=o?"set":"add",s=TC[e],l=s&&s.prototype,c={};if(zC&&LC(s)&&(a||l.forEach&&!IC(function(){new s().entries().next()}))){var d=(n=t(function(f,m){UC(RC(f,d),{type:e,collection:new s}),m!=null&&PC(m,f[i],{that:f,AS_ENTRIES:o})})).prototype,u=qC(e);DC(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(f){var m=f=="add"||f=="set";!(f in l)||a&&f=="clear"||jC(d,f,function($,C){var E=u(this).collection;if(!m&&a&&!NC($))return f=="get"&&void 0;var h=E[f]($===0?0:$,C);return m?this:h})}),a||BC(d,"size",{configurable:!0,get:function(){return u(this).collection.size}})}else n=r.getConstructor(t,e,o,i),CC.enable();return FC(n,e,!1,!0),c[e]=n,_C({global:!0,forced:!0},c),a||r.setStrong(n,e,o),n},mv=XC,fs=Ot,ms=lv,gs=Ar.enforce,nI=ph,oI=!fv.ActiveXObject&&"ActiveXObject"in fv,gv=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},aI=rI("WeakMap",gv,mv);if(nI&&oI){Oa=mv.getConstructor(gv,"WeakMap",!0),tI.enable();var _a=aI.prototype,yv=hs(_a.delete),ys=hs(_a.has),vv=hs(_a.get),bv=hs(_a.set);eI(_a,{delete:function(e){if(fs(e)&&!ms(e)){var t=gs(this);return t.frozen||(t.frozen=new Oa),yv(this,e)||t.frozen.delete(e)}return yv(this,e)},has:function(e){if(fs(e)&&!ms(e)){var t=gs(this);return t.frozen||(t.frozen=new Oa),ys(this,e)||t.frozen.has(e)}return ys(this,e)},get:function(e){if(fs(e)&&!ms(e)){var t=gs(this);return t.frozen||(t.frozen=new Oa),ys(this,e)?vv(this,e):t.frozen.get(e)}return vv(this,e)},set:function(e,t){if(fs(e)&&!ms(e)){var r=gs(this);r.frozen||(r.frozen=new Oa),ys(this,e)?bv(this,e,t):r.frozen.set(e,t)}else bv(this,e,t);return this}})}var iI=_t.WeakMap,sI=st,lI=ut("iterator"),cI=!sI(function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach(function(n,o){t.delete("b"),r+=o+n}),!e.toJSON||!t.sort||e.href!=="http://a/c%20d?a=1&c=3"||t.get("c")!=="3"||String(new URLSearchParams("?a=1"))!=="a=1"||!t[lI]||new URL("https://a@b").username!=="a"||new URLSearchParams(new URLSearchParams("a=b")).get("a")!=="b"||new URL("http://\u0442\u0435\u0441\u0442").host!=="xn--e1aybc"||new URL("http://a#\u0431").hash!=="#%D0%B1"||r!=="a1c3"||new URL("http://x",void 0).host!=="x"}),xv=oh,pI=Math.floor,ru=function(e,t){var r=e.length,n=pI(r/2);return r<8?uI(e,t):dI(e,ru(xv(e,0,n),t),ru(xv(e,n),t),t)},uI=function(e,t){for(var r,n,o=e.length,a=1;a<o;){for(n=a,r=e[a];n&&t(e[n-1],r)>0;)e[n]=e[--n];n!==a++&&(e[n]=r)}return e},dI=function(e,t,r,n){for(var o=t.length,a=r.length,i=0,s=0;i<o||s<a;)e[i+s]=i<o&&s<a?n(t[i],r[s])<=0?t[i++]:r[s++]:i<o?t[i++]:r[s++];return e},nu=Ye,vs=Ce,ou=lr,bs=Yt,Pr=at,wv=cI,$v=Jo,hI=Ri,fI=bn,mI=Xh,au=Ar,Sv=Li,iu=St,gI=Ft,yI=yn,vI=Yr,bI=Zt,kv=Ot,ar=vn,xI=Go,Av=Gr,su=yc,wI=sa,wo=vm,$I=ru,SI=ut("iterator"),xs="URLSearchParams",Ev="URLSearchParamsIterator",Ov=au.set,Rr=au.getterFor(xs),kI=au.getterFor(Ev),_v=ou("fetch"),ws=ou("Request"),Ta=ou("Headers"),lu=ws&&ws.prototype,Tv=Ta&&Ta.prototype,AI=vs.RegExp,EI=vs.TypeError,Cv=vs.decodeURIComponent,OI=vs.encodeURIComponent,_I=Pr("".charAt),Iv=Pr([].join),Fn=Pr([].push),cu=Pr("".replace),TI=Pr([].shift),jv=Pr([].splice),Pv=Pr("".split),CI=Pr("".slice),II=/\+/g,Rv=Array(4),jI=function(e){return Rv[e-1]||(Rv[e-1]=AI("((?:%[\\da-f]{2}){"+e+"})","gi"))},PI=function(e){try{return Cv(e)}catch{return e}},Lv=function(e){var t=cu(e,II," "),r=4;try{return Cv(t)}catch{for(;r;)t=cu(t,jI(r--),PI);return t}},RI=/[!'()~]|%20/g,LI={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},NI=function(e){return LI[e]},Nv=function(e){return cu(OI(e),RI,NI)},pu=mI(function(e,t){Ov(this,{type:Ev,iterator:su(Rr(e).entries),kind:t})},"Iterator",function(){var e=kI(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value=t==="keys"?n.key:t==="values"?n.value:[n.key,n.value]),r},!0),Fv=function(e){this.entries=[],this.url=null,e!==void 0&&(kv(e)?this.parseObject(e):this.parseQuery(typeof e=="string"?_I(e,0)==="?"?CI(e,1):e:ar(e)))};Fv.prototype={type:xs,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,r,n,o,a,i,s,l=wI(e);if(l)for(r=(t=su(e,l)).next;!(n=bs(r,t)).done;){if(a=(o=su(bI(n.value))).next,(i=bs(a,o)).done||(s=bs(a,o)).done||!bs(a,o).done)throw EI("Expected sequence with length 2");Fn(this.entries,{key:ar(i.value),value:ar(s.value)})}else for(var c in e)gI(e,c)&&Fn(this.entries,{key:c,value:ar(e[c])})},parseQuery:function(e){if(e)for(var t,r,n=Pv(e,"&"),o=0;o<n.length;)(t=n[o++]).length&&(r=Pv(t,"="),Fn(this.entries,{key:Lv(TI(r)),value:Lv(Iv(r,"="))}))},serialize:function(){for(var e,t=this.entries,r=[],n=0;n<t.length;)e=t[n++],Fn(r,Nv(e.key)+"="+Nv(e.value));return Iv(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var uu=function(){Sv(this,Ca);var e=arguments.length>0?arguments[0]:void 0;Ov(this,new Fv(e))},Ca=uu.prototype;if(hI(Ca,{append:function(e,t){wo(arguments.length,2);var r=Rr(this);Fn(r.entries,{key:ar(e),value:ar(t)}),r.updateURL()},delete:function(e){wo(arguments.length,1);for(var t=Rr(this),r=t.entries,n=ar(e),o=0;o<r.length;)r[o].key===n?jv(r,o,1):o++;t.updateURL()},get:function(e){wo(arguments.length,1);for(var t=Rr(this).entries,r=ar(e),n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){wo(arguments.length,1);for(var t=Rr(this).entries,r=ar(e),n=[],o=0;o<t.length;o++)t[o].key===r&&Fn(n,t[o].value);return n},has:function(e){wo(arguments.length,1);for(var t=Rr(this).entries,r=ar(e),n=0;n<t.length;)if(t[n++].key===r)return!0;return!1},set:function(e,t){wo(arguments.length,1);for(var r,n=Rr(this),o=n.entries,a=!1,i=ar(e),s=ar(t),l=0;l<o.length;l++)(r=o[l]).key===i&&(a?jv(o,l--,1):(a=!0,r.value=s));a||Fn(o,{key:i,value:s}),n.updateURL()},sort:function(){var e=Rr(this);$I(e.entries,function(t,r){return t.key>r.key?1:-1}),e.updateURL()},forEach:function(e){for(var t,r=Rr(this).entries,n=yI(e,arguments.length>1?arguments[1]:void 0),o=0;o<r.length;)n((t=r[o++]).value,t.key,this)},keys:function(){return new pu(this,"keys")},values:function(){return new pu(this,"values")},entries:function(){return new pu(this,"entries")}},{enumerable:!0}),$v(Ca,SI,Ca.entries,{name:"entries"}),$v(Ca,"toString",function(){return Rr(this).serialize()},{enumerable:!0}),fI(uu,xs),nu({global:!0,forced:!wv},{URLSearchParams:uu}),!wv&&iu(Ta)){var FI=Pr(Tv.has),BI=Pr(Tv.set),Bv=function(e){if(kv(e)){var t,r=e.body;if(vI(r)===xs)return t=e.headers?new Ta(e.headers):new Ta,FI(t,"content-type")||BI(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),xI(e,{body:Av(0,ar(r)),headers:Av(0,t)})}return e};if(iu(_v)&&nu({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return _v(e,arguments.length>1?Bv(arguments[1]):{})}}),iu(ws)){var du=function(e){return Sv(this,lu),new ws(e,arguments.length>1?Bv(arguments[1]):{})};lu.constructor=du,du.prototype=lu,nu({global:!0,forced:!0},{Request:du})}}var Dv=_t.URLSearchParams;function zv(e,t){function r(){Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack;for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];this.message=o[0],t&&t.apply(this,o)}return r.prototype=new Error,r.prototype.name=e,r.prototype.constructor=r,r}var Uv={exports:{}},DI=Uv.exports=function(e){return new hr(e)};function hr(e){this.value=e}function qv(e,t,r){var n=[],o=[],a=!0;return function i(s){var l=r?Mv(s):s,c={},d=!0,u={node:l,node_:s,path:[].concat(n),parent:o[o.length-1],parents:o,key:n.slice(-1)[0],isRoot:n.length===0,level:n.length,circular:null,update:function($,C){u.isRoot||(u.parent.node[u.key]=$),u.node=$,C&&(d=!1)},delete:function($){delete u.parent.node[u.key],$&&(d=!1)},remove:function($){Hv(u.parent.node)?u.parent.node.splice(u.key,1):delete u.parent.node[u.key],$&&(d=!1)},keys:null,before:function($){c.before=$},after:function($){c.after=$},pre:function($){c.pre=$},post:function($){c.post=$},stop:function(){a=!1},block:function(){d=!1}};if(!a)return u;function f(){if(typeof u.node=="object"&&u.node!==null){u.keys&&u.node_===u.node||(u.keys=$s(u.node)),u.isLeaf=u.keys.length==0;for(var $=0;$<o.length;$++)if(o[$].node_===s){u.circular=o[$];break}}else u.isLeaf=!0,u.keys=null;u.notLeaf=!u.isLeaf,u.notRoot=!u.isRoot}f();var m=t.call(u,u.node);return m!==void 0&&u.update&&u.update(m),c.before&&c.before.call(u,u.node),d&&(typeof u.node!="object"||u.node===null||u.circular||(o.push(u),f(),Ss(u.keys,function($,C){n.push($),c.pre&&c.pre.call(u,u.node[$],$);var E=i(u.node[$]);r&&ks.call(u.node,$)&&(u.node[$]=E.node),E.isLast=C==u.keys.length-1,E.isFirst=C==0,c.post&&c.post.call(u,E),n.pop()}),o.pop()),c.after&&c.after.call(u,u.node)),u}(e).node}function Mv(e){if(typeof e=="object"&&e!==null){var t;if(Hv(e))t=[];else if($o(e)==="[object Date]")t=new Date(e.getTime?e.getTime():e);else if(function(o){return $o(o)==="[object RegExp]"}(e))t=new RegExp(e);else if(function(o){return $o(o)==="[object Error]"}(e))t={message:e.message};else if(function(o){return $o(o)==="[object Boolean]"}(e))t=new Boolean(e);else if(function(o){return $o(o)==="[object Number]"}(e))t=new Number(e);else if(function(o){return $o(o)==="[object String]"}(e))t=new String(e);else if(Object.create&&Object.getPrototypeOf)t=Object.create(Object.getPrototypeOf(e));else if(e.constructor===Object)t={};else{var r=e.constructor&&e.constructor.prototype||e.__proto__||{},n=function(){};n.prototype=r,t=new n}return Ss($s(e),function(o){t[o]=e[o]}),t}return e}hr.prototype.get=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!ks.call(t,n)){t=void 0;break}t=t[n]}return t},hr.prototype.has=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!ks.call(t,n))return!1;t=t[n]}return!0},hr.prototype.set=function(e,t){for(var r=this.value,n=0;n<e.length-1;n++){var o=e[n];ks.call(r,o)||(r[o]={}),r=r[o]}return r[e[n]]=t,t},hr.prototype.map=function(e){return qv(this.value,e,!0)},hr.prototype.forEach=function(e){return this.value=qv(this.value,e,!1),this.value},hr.prototype.reduce=function(e,t){var r=arguments.length===1,n=r?this.value:t;return this.forEach(function(o){this.isRoot&&r||(n=e.call(this,n,o))}),n},hr.prototype.paths=function(){var e=[];return this.forEach(function(t){e.push(this.path)}),e},hr.prototype.nodes=function(){var e=[];return this.forEach(function(t){e.push(this.node)}),e},hr.prototype.clone=function(){var e=[],t=[];return function r(n){for(var o=0;o<e.length;o++)if(e[o]===n)return t[o];if(typeof n=="object"&&n!==null){var a=Mv(n);return e.push(n),t.push(a),Ss($s(n),function(i){a[i]=r(n[i])}),e.pop(),t.pop(),a}return n}(this.value)};var $s=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};function $o(e){return Object.prototype.toString.call(e)}var Hv=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},Ss=function(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)};Ss($s(hr.prototype),function(e){DI[e]=function(t){var r=[].slice.call(arguments,1),n=new hr(t);return n[e].apply(n,r)}});var ks=Object.hasOwnProperty||function(e,t){return t in e},zI=Uv.exports,UI=["properties"],qI=["properties"],MI=["definitions","parameters","responses","securityDefinitions","components/schemas","components/responses","components/parameters","components/securitySchemes"],HI=["schema/example","items/example"];function Wv(e){var t=e[e.length-1],r=e[e.length-2],n=e.join("/");return UI.indexOf(t)>-1&&qI.indexOf(r)===-1||MI.indexOf(n)>-1||HI.some(function(o){return n.indexOf(o)>-1})}function hu(e,t){var r,n=vr(e.split("#"),2),o=n[0],a=n[1],i=rr.resolve(o||"",t||"");return a?Ee(r="".concat(i,"#")).call(r,a):i}var Vv="application/json, application/yaml",WI=/^([a-z]+:\/\/|\/\/)/i,So=zv("JSONRefError",function(e,t,r){this.originalError=r,pr(this,t||{})}),Mr={},Gv=new iI,VI=[function(e){return e[0]==="paths"&&e[3]==="responses"&&e[5]==="examples"},function(e){return e[0]==="paths"&&e[3]==="responses"&&e[5]==="content"&&e[7]==="example"},function(e){return e[0]==="paths"&&e[3]==="responses"&&e[5]==="content"&&e[7]==="examples"&&e[9]==="value"},function(e){return e[0]==="paths"&&e[3]==="requestBody"&&e[4]==="content"&&e[6]==="example"},function(e){return e[0]==="paths"&&e[3]==="requestBody"&&e[4]==="content"&&e[6]==="examples"&&e[8]==="value"},function(e){return e[0]==="paths"&&e[2]==="parameters"&&e[4]==="example"},function(e){return e[0]==="paths"&&e[3]==="parameters"&&e[5]==="example"},function(e){return e[0]==="paths"&&e[2]==="parameters"&&e[4]==="examples"&&e[6]==="value"},function(e){return e[0]==="paths"&&e[3]==="parameters"&&e[5]==="examples"&&e[7]==="value"},function(e){return e[0]==="paths"&&e[2]==="parameters"&&e[4]==="content"&&e[6]==="example"},function(e){return e[0]==="paths"&&e[2]==="parameters"&&e[4]==="content"&&e[6]==="examples"&&e[8]==="value"},function(e){return e[0]==="paths"&&e[3]==="parameters"&&e[4]==="content"&&e[7]==="example"},function(e){return e[0]==="paths"&&e[3]==="parameters"&&e[5]==="content"&&e[7]==="examples"&&e[9]==="value"}],Kv=pr({key:"$ref",plugin:function(e,t,r,n){var o=n.getInstance(),a=br(r).call(r,0,-1);if(!Wv(a)&&!function(E){return VI.some(function(h){return h(E)})}(a)){var i=n.getContext(r).baseDoc;if(typeof e!="string")return new So("$ref: must be a string (JSON-Ref)",{$ref:e,baseDoc:i,fullPath:r});var s,l,c,d=Yv(e),u=d[0],f=d[1]||"";try{s=i||u?Jv(u,i):null}catch(E){return fu(E,{pointer:f,$ref:e,basePath:s,fullPath:r})}if(function(E,h,D,F){var M,Z,N=Gv.get(F);N||(N={},Gv.set(F,N));var Q=function(k){return k.length===0?"":"/".concat(Xe(k).call(k,eb).join("/"))}(D),T=Ee(M="".concat(h||"<specmap-base>","#")).call(M,E),L=Q.replace(/allOf\/\d+\/?/g,""),U=F.contextTree.get([]).baseDoc;if(h===U&&yu(L,E))return!0;var j="";return D.some(function(k){var R;return j=Ee(R="".concat(j,"/")).call(R,eb(k)),N[j]&&N[j].some(function(te){return yu(te,T)||yu(T,te)})})?!0:void(N[L]=Ee(Z=N[L]||[]).call(Z,T))}(f,s,a,n)&&!o.useCircularStructures){var m=hu(e,s);return e===m?null:rt.replace(r,m)}if(s==null?(c=gu(f),(l=n.get(c))===void 0&&(l=new So("Could not resolve reference: ".concat(e),{pointer:f,$ref:e,baseDoc:i,fullPath:r}))):l=(l=Zv(s,f)).__value!=null?l.__value:l.catch(function(E){throw fu(E,{pointer:f,$ref:e,baseDoc:i,fullPath:r})}),l instanceof Error)return[rt.remove(r),l];var $=hu(e,s),C=rt.replace(a,l,{$$ref:$});if(s&&s!==i)return[C,rt.context(a,{baseDoc:s})];try{if(!function(E,h){var D=[E];return h.path.reduce(function(M,Z){return D.push(M[Z]),M[Z]},E),F(h.value);function F(M){return rt.isObject(M)&&(D.indexOf(M)>=0||Ve(M).some(function(Z){return F(M[Z])}))}}(n.state,C)||o.useCircularStructures)return C}catch{return null}}}},{docCache:Mr,absoluteify:Jv,clearCache:function(e){e!==void 0?delete Mr[e]:Ve(Mr).forEach(function(t){delete Mr[t]})},JSONRefError:So,wrapError:fu,getDoc:Qv,split:Yv,extractFromDoc:Zv,fetchJSON:function(e){return fetch(e,{headers:{Accept:Vv},loadSpec:!0}).then(function(t){return t.text()}).then(function(t){return Py.load(t)})},extract:mu,jsonPointerToArray:gu,unescapeJsonPointerToken:Xv});function Jv(e,t){if(!WI.test(e)){var r;if(!t)throw new So(Ee(r="Tried to resolve a relative URL, without having a basePath. path: '".concat(e,"' basePath: '")).call(r,t,"'"));return rr.resolve(t,e)}return e}function fu(e,t){var r,n;return e&&e.response&&e.response.body?r=Ee(n="".concat(e.response.body.code," ")).call(n,e.response.body.message):r=e.message,new So("Could not resolve reference: ".concat(r),t,e)}function Yv(e){return(e+"").split("#")}function Zv(e,t){var r=Mr[e];if(r&&!rt.isPromise(r))try{var n=mu(t,r);return pr(Pn.resolve(n),{__value:n})}catch(o){return Pn.reject(o)}return Qv(e).then(function(o){return mu(t,o)})}function Qv(e){var t=Mr[e];return t?rt.isPromise(t)?t:Pn.resolve(t):(Mr[e]=Kv.fetchJSON(e).then(function(r){return Mr[e]=r,r}),Mr[e])}function mu(e,t){var r=gu(e);if(r.length<1)return t;var n=rt.getIn(t,r);if(n===void 0)throw new So("Could not resolve pointer: ".concat(e," does not exist in document"),{pointer:e});return n}function gu(e){var t;if(typeof e!="string")throw new TypeError("Expected a string, got a ".concat(lt(e)));return e[0]==="/"&&(e=e.substr(1)),e===""?[]:Xe(t=e.split("/")).call(t,Xv)}function Xv(e){return typeof e!="string"?e:new Dv("=".concat(e.replace(/~1/g,"/").replace(/~0/g,"~"))).get("")}function eb(e){var t,r=new Dv([["",e.replace(/~/g,"~0").replace(/\//g,"~1")]]);return br(t=r.toString()).call(t,1)}function yu(e,t){if(function(o){return!o||o==="/"||o==="#"}(t))return!0;var r=e.charAt(t.length),n=br(t).call(t,-1);return e.indexOf(t)===0&&(!r||r==="/"||r==="#")&&n!=="#"}var GI={key:"allOf",plugin:function(e,t,r,n,o){if(!o.meta||!o.meta.$$ref){var a=br(r).call(r,0,-1);if(!Wv(a)){if(!Array.isArray(e)){var i=new TypeError("allOf must be an array");return i.fullPath=r,i}var s=!1,l=o.value;if(a.forEach(function(f){l&&(l=l[f])}),l=dt({},l),Ve(l).length!==0){delete l.allOf;var c,d,u=[];return u.push(n.replace(a,{})),e.forEach(function(f,m){if(!n.isObject(f)){if(s)return null;s=!0;var $=new TypeError("Elements in allOf must be objects");return $.fullPath=r,u.push($)}u.push(n.mergeDeep(a,f));var C=function(E,h){var D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},F=D.specmap,M=D.getBaseUrlForNodePath,Z=M===void 0?function(L){var U;return F.getContext(Ee(U=[]).call(U,jn(h),jn(L))).baseDoc}:M,N=D.targetKeys,Q=N===void 0?["$ref","$$ref"]:N,T=[];return zI(E).forEach(function(){if(ha(Q).call(Q,this.key)&&typeof this.node=="string"){var L=this.path,U=Ee(h).call(h,this.path),j=hu(this.node,Z(L));T.push(F.replace(U,j))}}),T}(f,br(r).call(r,0,-1),{getBaseUrlForNodePath:function(E){var h;return n.getContext(Ee(h=[]).call(h,jn(r),[m],jn(E))).baseDoc},specmap:n});u.push.apply(u,jn(C))}),l.example&&u.push(n.remove(Ee(c=[]).call(c,a,"example"))),u.push(n.mergeDeep(a,l)),!l.$$ref&&u.push(n.remove(Ee(d=[]).call(d,a,"$$ref"))),u}}}}},KI={key:"parameters",plugin:function(e,t,r,n){if(Array.isArray(e)&&e.length){var o=pr([],e),a=br(r).call(r,0,-1),i=dt({},rt.getIn(n.spec,a));return e.forEach(function(s,l){try{o[l].default=n.parameterMacro(i,s)}catch(d){var c=new Error(d);return c.fullPath=r,c}}),rt.replace(r,o)}return rt.replace(r,e)}},JI={key:"properties",plugin:function(e,t,r,n){var o=dt({},e);for(var a in e)try{o[a].default=n.modelPropertyMacro(o[a])}catch(s){var i=new Error(s);return i.fullPath=r,i}return rt.replace(r,o)}},YI=function(){function e(t){Hy(this,e),this.root=vu(t||{})}return Vy(e,[{key:"set",value:function(t,r){var n=this.getParent(t,!0);if(n){var o=t[t.length-1],a=n.children;a[o]?As(a[o],r,n):a[o]=vu(r,n)}else As(this.root,r,null)}},{key:"get",value:function(t){if((t=t||[]).length<1)return this.root.value;for(var r,n,o=this.root,a=0;a<t.length&&(n=t[a],(r=o.children)[n]);a+=1)o=r[n];return o&&o.protoValue}},{key:"getParent",value:function(t,r){return!t||t.length<1?null:t.length<2?this.root:br(t).call(t,0,-1).reduce(function(n,o){if(!n)return n;var a=n.children;return!a[o]&&r&&(a[o]=vu(null,n)),a[o]},this.root)}}]),e}();function vu(e,t){return As({children:{}},e,t)}function As(e,t,r){return e.value=t||{},e.protoValue=r?dt(dt({},r.protoValue),e.value):e.value,Ve(e.children).forEach(function(n){var o=e.children[n];e.children[n]=As(o,o.value,e)}),e}var tb=function(){},ZI=function(){function e(t){var r,n,o=this;Hy(this,e),pr(this,{spec:"",debugLevel:"info",plugins:[],pluginHistory:{},errors:[],mutations:[],promisedPatches:[],state:{},patches:[],context:{},contextTree:new YI,showDebug:!1,allPatches:[],pluginProp:"specMap",libMethods:pr(Object.create(this),rt,{getInstance:function(){return o}}),allowMetaPatches:!1},t),this.get=this._get.bind(this),this.getContext=this._getContext.bind(this),this.hasRun=this._hasRun.bind(this),this.wrappedPlugins=dr(r=Xe(n=this.plugins).call(n,this.wrapPlugin.bind(this))).call(r,rt.isFunction),this.patches.push(rt.add([],this.spec)),this.patches.push(rt.context([],this.context)),this.updatePatches(this.patches)}return Vy(e,[{key:"debug",value:function(t){if(this.debugLevel===t){for(var r,n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];(r=console).log.apply(r,o)}}},{key:"verbose",value:function(t){if(this.debugLevel==="verbose"){for(var r,n,o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];(r=console).log.apply(r,Ee(n=["[".concat(t,"]   ")]).call(n,a))}}},{key:"wrapPlugin",value:function(t,r){var n,o,a,i=this.pathDiscriminator,s=null;return t[this.pluginProp]?(s=t,n=t[this.pluginProp]):rt.isFunction(t)?n=t:rt.isObject(t)&&(o=t,a=function(l,c){return!Array.isArray(l)||l.every(function(d,u){return d===c[u]})},n=Tr.mark(function l(c,d){var u,f,m,$,C,E;return Tr.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:E=function(D,F,M){var Z,N,Q,T,L,U,j,k,R,te,oe,ge,J;return Tr.wrap(function(W){for(;;)switch(W.prev=W.next){case 0:if(rt.isObject(D)){W.next=6;break}if(o.key!==F[F.length-1]){W.next=4;break}return W.next=4,o.plugin(D,o.key,F,d);case 4:W.next=30;break;case 6:Z=F.length-1,N=F[Z],Q=F.indexOf("properties"),T=N==="properties"&&Z===Q,L=d.allowMetaPatches&&f[D.$$ref],U=0,j=Ve(D);case 12:if(!(U<j.length)){W.next=30;break}if(k=j[U],R=D[k],te=Ee(F).call(F,k),oe=rt.isObject(R),ge=D.$$ref,L){W.next=22;break}if(!oe){W.next=22;break}return d.allowMetaPatches&&ge&&(f[ge]=!0),W.delegateYield(E(R,te,M),"t0",22);case 22:if(T||k!==o.key){W.next=27;break}if(J=a(i,F),i&&!J){W.next=27;break}return W.next=27,o.plugin(R,k,te,d,M);case 27:U++,W.next=12;break;case 30:case"end":return W.stop()}},u)},u=Tr.mark(E),f={},m=An(dr(c).call(c,rt.isAdditiveMutation)),h.prev=4,m.s();case 6:if(($=m.n()).done){h.next=11;break}return C=$.value,h.delegateYield(E(C.value,C.path,C),"t0",9);case 9:h.next=6;break;case 11:h.next=16;break;case 13:h.prev=13,h.t1=h.catch(4),m.e(h.t1);case 16:return h.prev=16,m.f(),h.finish(16);case 19:case"end":return h.stop()}},l,null,[[4,13,16,19]])})),pr(n.bind(s),{pluginName:t.name||r,isGenerator:rt.isGenerator(n)})}},{key:"nextPlugin",value:function(){var t,r=this;return NT(t=this.wrappedPlugins).call(t,function(n){return r.getMutationsForPlugin(n).length>0})}},{key:"nextPromisedPatch",value:function(){var t;if(this.promisedPatches.length>0)return Pn.race(Xe(t=this.promisedPatches).call(t,function(r){return r.value}))}},{key:"getPluginHistory",value:function(t){var r=this.constructor.getPluginName(t);return this.pluginHistory[r]||[]}},{key:"getPluginRunCount",value:function(t){return this.getPluginHistory(t).length}},{key:"getPluginHistoryTip",value:function(t){var r=this.getPluginHistory(t);return r&&r[r.length-1]||{}}},{key:"getPluginMutationIndex",value:function(t){var r=this.getPluginHistoryTip(t).mutationIndex;return typeof r!="number"?-1:r}},{key:"updatePluginHistory",value:function(t,r){var n=this.constructor.getPluginName(t);this.pluginHistory[n]=this.pluginHistory[n]||[],this.pluginHistory[n].push(r)}},{key:"updatePatches",value:function(t){var r=this;rt.normalizeArray(t).forEach(function(n){if(n instanceof Error)r.errors.push(n);else try{if(!rt.isObject(n))return void r.debug("updatePatches","Got a non-object patch",n);if(r.showDebug&&r.allPatches.push(n),rt.isPromise(n.value))return r.promisedPatches.push(n),void r.promisedPatchThen(n);if(rt.isContextPatch(n))return void r.setContext(n.path,n.value);if(rt.isMutation(n))return void r.updateMutations(n)}catch(o){console.error(o),r.errors.push(o)}})}},{key:"updateMutations",value:function(t){lt(t.value)==="object"&&!Array.isArray(t.value)&&this.allowMetaPatches&&(t.value=dt({},t.value));var r=rt.applyPatch(this.state,t,{allowMetaPatches:this.allowMetaPatches});r&&(this.mutations.push(t),this.state=r)}},{key:"removePromisedPatch",value:function(t){var r,n=this.promisedPatches.indexOf(t);n<0?this.debug("Tried to remove a promisedPatch that isn't there!"):eC(r=this.promisedPatches).call(r,n,1)}},{key:"promisedPatchThen",value:function(t){var r=this;return t.value=t.value.then(function(n){var o=dt(dt({},t),{},{value:n});r.removePromisedPatch(t),r.updatePatches(o)}).catch(function(n){r.removePromisedPatch(t),r.updatePatches(n)}),t.value}},{key:"getMutations",value:function(t,r){var n;return t=t||0,typeof r!="number"&&(r=this.mutations.length),br(n=this.mutations).call(n,t,r)}},{key:"getCurrentMutations",value:function(){return this.getMutationsForPlugin(this.getCurrentPlugin())}},{key:"getMutationsForPlugin",value:function(t){var r=this.getPluginMutationIndex(t);return this.getMutations(r+1)}},{key:"getCurrentPlugin",value:function(){return this.currentPlugin}},{key:"getLib",value:function(){return this.libMethods}},{key:"_get",value:function(t){return rt.getIn(this.state,t)}},{key:"_getContext",value:function(t){return this.contextTree.get(t)}},{key:"setContext",value:function(t,r){return this.contextTree.set(t,r)}},{key:"_hasRun",value:function(t){return this.getPluginRunCount(this.getCurrentPlugin())>(t||0)}},{key:"dispatch",value:function(){var t,r=this,n=this,o=this.nextPlugin();if(!o){var a=this.nextPromisedPatch();if(a)return a.then(function(){return r.dispatch()}).catch(function(){return r.dispatch()});var i={spec:this.state,errors:this.errors};return this.showDebug&&(i.patches=this.allPatches),Pn.resolve(i)}if(n.pluginCount=n.pluginCount||{},n.pluginCount[o]=(n.pluginCount[o]||0)+1,n.pluginCount[o]>100)return Pn.resolve({spec:n.state,errors:Ee(t=n.errors).call(t,new Error("We've reached a hard limit of ".concat(100," plugin runs")))});if(o!==this.currentPlugin&&this.promisedPatches.length){var s,l=Xe(s=this.promisedPatches).call(s,function(d){return d.value});return Pn.all(Xe(l).call(l,function(d){return d.then(tb,tb)})).then(function(){return r.dispatch()})}return function(){n.currentPlugin=o;var d=n.getCurrentMutations(),u=n.mutations.length-1;try{if(o.isGenerator){var f,m=An(o(d,n.getLib()));try{for(m.s();!(f=m.n()).done;)c(f.value)}catch($){m.e($)}finally{m.f()}}else c(o(d,n.getLib()))}catch($){console.error($),c([pr(Object.create($),{plugin:o})])}finally{n.updatePluginHistory(o,{mutationIndex:u})}return n.dispatch()}();function c(d){d&&(d=rt.fullyNormalizeArray(d),n.updatePatches(d,o))}}}],[{key:"getPluginName",value:function(t){return t.pluginName}},{key:"getPatchesOfType",value:function(t,r){return dr(t).call(t,r)}}]),e}(),Bn={refs:Kv,allOf:GI,parameters:KI,properties:JI},rb=function(e){return String.prototype.toLowerCase.call(e)},nb=function(e){return e.replace(/[^\w]/gi,"_")};function ob(e){var t=e.openapi;return!!t&&Pf(t).call(t,"3")}function Es(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=n.v2OperationIdCompatibilityMode;if(!e||lt(e)!=="object")return null;var a=(e.operationId||"").replace(/\s/g,"");return a.length?nb(e.operationId):QI(t,r,{v2OperationIdCompatibilityMode:o})}function QI(e,t){var r,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.v2OperationIdCompatibilityMode;if(o){var a,i,s=Ee(a="".concat(t.toLowerCase(),"_")).call(a,e).replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g,"_");return(s=s||Ee(i="".concat(e.substring(1),"_")).call(i,t)).replace(/((_){2,})/g,"_").replace(/^(_)*/g,"").replace(/([_])*$/g,"")}return Ee(r="".concat(rb(t))).call(r,nb(e))}function ab(e,t){var r;return Ee(r="".concat(rb(t),"-")).call(r,e)}function XI(e,t){return e&&e.paths?function(r,n){return ib(r,n,!0)||null}(e,function(r){var n=r.pathName,o=r.method,a=r.operation;if(!a||lt(a)!=="object")return!1;var i=a.operationId;return[Es(a,n,o),ab(n,o),i].some(function(s){return s&&s===t})}):null}function ib(e,t,r){if(!e||lt(e)!=="object"||!e.paths||lt(e.paths)!=="object")return null;var n=e.paths;for(var o in n)for(var a in n[o])if(a.toUpperCase()!=="PARAMETERS"){var i=n[o][a];if(i&&lt(i)==="object"){var s={spec:e,pathName:o,method:a.toUpperCase(),operation:i},l=t(s);if(r&&l)return s}}}function sb(e){var t=e.spec,r=t.paths,n={};if(!r||t.$$normalized)return e;for(var o in r){var a,i=r[o];if(i!=null&&ha(a=["object","function"]).call(a,lt(i))){var s=i.parameters,l=function(d){var u,f=i[d];if(f==null||!ha(u=["object","function"]).call(u,lt(f)))return"continue";var m=Es(f,o,d);if(m){n[m]?n[m].push(f):n[m]=[f];var $=n[m];if($.length>1)$.forEach(function(U,j){var k;U.__originalOperationId=U.__originalOperationId||U.operationId,U.operationId=Ee(k="".concat(m)).call(k,j+1)});else if(f.operationId!==void 0){var C=$[0];C.__originalOperationId=C.__originalOperationId||f.operationId,C.operationId=m}}if(d!=="parameters"){var E=[],h={};for(var D in t)D!=="produces"&&D!=="consumes"&&D!=="security"||(h[D]=t[D],E.push(h));if(s&&(h.parameters=s,E.push(h)),E.length){var F,M=An(E);try{for(M.s();!(F=M.n()).done;){var Z=F.value;for(var N in Z)if(f[N]){if(N==="parameters"){var Q,T=An(Z[N]);try{var L=function(){var U=Q.value;f[N].some(function(j){return j.name&&j.name===U.name||j.$ref&&j.$ref===U.$ref||j.$$ref&&j.$$ref===U.$$ref||j===U})||f[N].push(U)};for(T.s();!(Q=T.n()).done;)L()}catch(U){T.e(U)}finally{T.f()}}}else f[N]=Z[N]}}catch(U){M.e(U)}finally{M.f()}}}};for(var c in i)l(c)}}return t.$$normalized=!0,e}function lb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.requestInterceptor,n=t.responseInterceptor,o=e.withCredentials?"include":"same-origin";return function(a){return e({url:a,loadSpec:!0,requestInterceptor:r,responseInterceptor:n,headers:{Accept:Vv},credentials:o}).then(function(i){return i.body})}}function cb(e){var t=e.fetch,r=e.spec,n=e.url,o=e.mode,a=e.allowMetaPatches,i=a===void 0||a,s=e.pathDiscriminator,l=e.modelPropertyMacro,c=e.parameterMacro,d=e.requestInterceptor,u=e.responseInterceptor,f=e.skipNormalization,m=e.useCircularStructures,$=e.http,C=e.baseDoc;return C=C||n,$=t||$||os,r?E(r):lb($,{requestInterceptor:d,responseInterceptor:u})(C).then(E);function E(h){C&&(Bn.refs.docCache[C]=h),Bn.refs.fetchJSON=lb($,{requestInterceptor:d,responseInterceptor:u});var D,F=[Bn.refs];return typeof c=="function"&&F.push(Bn.parameters),typeof l=="function"&&F.push(Bn.properties),o!=="strict"&&F.push(Bn.allOf),(D={spec:h,context:{baseDoc:C},plugins:F,allowMetaPatches:i,pathDiscriminator:s,parameterMacro:c,modelPropertyMacro:l,useCircularStructures:m},new ZI(D).dispatch()).then(f?function(){var M=Wc(Tr.mark(function Z(N){return Tr.wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.abrupt("return",N);case 1:case"end":return Q.stop()}},Z)}));return function(Z){return M.apply(this,arguments)}}():sb)}}var bu=Array.isArray,ej=typeof O.g=="object"&&O.g&&O.g.Object===Object&&O.g,tj=typeof self=="object"&&self&&self.Object===Object&&self,xu=ej||tj||Function("return this")(),Ia=xu.Symbol,pb=Ia,ub=Object.prototype,rj=ub.hasOwnProperty,nj=ub.toString,ja=pb?pb.toStringTag:void 0,oj=function(e){var t=rj.call(e,ja),r=e[ja];try{e[ja]=void 0;var n=!0}catch{}var o=nj.call(e);return n&&(t?e[ja]=r:delete e[ja]),o},aj=Object.prototype.toString,ij=oj,sj=function(e){return aj.call(e)},db=Ia?Ia.toStringTag:void 0,hb=function(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":db&&db in Object(e)?ij(e):sj(e)},lj=hb,cj=function(e){return e!=null&&typeof e=="object"},wu=function(e){return typeof e=="symbol"||cj(e)&&lj(e)=="[object Symbol]"},pj=bu,uj=wu,dj=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,hj=/^\w*$/,fj=function(e,t){if(pj(e))return!1;var r=typeof e;return!(r!="number"&&r!="symbol"&&r!="boolean"&&e!=null&&!uj(e))||hj.test(e)||!dj.test(e)||t!=null&&e in Object(t)},fb=function(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")},mj=hb,gj=fb,yj=function(e){if(!gj(e))return!1;var t=mj(e);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},$u=xu["__core-js_shared__"],mb=function(){var e=/[^.]+$/.exec($u&&$u.keys&&$u.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),vj=function(e){return!!mb&&mb in e},bj=Function.prototype.toString,xj=yj,wj=vj,$j=fb,Sj=function(e){if(e!=null){try{return bj.call(e)}catch{}try{return e+""}catch{}}return""},kj=/^\[object .+?Constructor\]$/,Aj=Function.prototype,Ej=Object.prototype,Oj=Aj.toString,_j=Ej.hasOwnProperty,Tj=RegExp("^"+Oj.call(_j).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Cj=function(e){return!(!$j(e)||wj(e))&&(xj(e)?Tj:kj).test(Sj(e))},Ij=function(e,t){return e?.[t]},gb=function(e,t){var r=Ij(e,t);return Cj(r)?r:void 0},Os=gb(Object,"create"),yb=Os,jj=function(){this.__data__=yb?yb(null):{},this.size=0},Pj=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Rj=Os,Lj=Object.prototype.hasOwnProperty,Nj=function(e){var t=this.__data__;if(Rj){var r=t[e];return r==="__lodash_hash_undefined__"?void 0:r}return Lj.call(t,e)?t[e]:void 0},Fj=Os,Bj=Object.prototype.hasOwnProperty,Dj=Os,zj=jj,Uj=Pj,qj=Nj,Mj=function(e){var t=this.__data__;return Fj?t[e]!==void 0:Bj.call(t,e)},Hj=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Dj&&t===void 0?"__lodash_hash_undefined__":t,this};function ko(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ko.prototype.clear=zj,ko.prototype.delete=Uj,ko.prototype.get=qj,ko.prototype.has=Mj,ko.prototype.set=Hj;var Wj=ko,Vj=function(){this.__data__=[],this.size=0},Gj=function(e,t){return e===t||e!=e&&t!=t},_s=function(e,t){for(var r=e.length;r--;)if(Gj(e[r][0],t))return r;return-1},Kj=_s,Jj=Array.prototype.splice,Yj=_s,Zj=_s,Qj=_s,Xj=Vj,eP=function(e){var t=this.__data__,r=Kj(t,e);return!(r<0)&&(r==t.length-1?t.pop():Jj.call(t,r,1),--this.size,!0)},tP=function(e){var t=this.__data__,r=Yj(t,e);return r<0?void 0:t[r][1]},rP=function(e){return Zj(this.__data__,e)>-1},nP=function(e,t){var r=this.__data__,n=Qj(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ao(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ao.prototype.clear=Xj,Ao.prototype.delete=eP,Ao.prototype.get=tP,Ao.prototype.has=rP,Ao.prototype.set=nP;var oP=Ao,aP=gb(xu,"Map"),vb=Wj,iP=oP,sP=aP,lP=function(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null},Ts=function(e,t){var r=e.__data__;return lP(t)?r[typeof t=="string"?"string":"hash"]:r.map},cP=Ts,pP=Ts,uP=Ts,dP=Ts,hP=function(){this.size=0,this.__data__={hash:new vb,map:new(sP||iP),string:new vb}},fP=function(e){var t=cP(this,e).delete(e);return this.size-=t?1:0,t},mP=function(e){return pP(this,e).get(e)},gP=function(e){return uP(this,e).has(e)},yP=function(e,t){var r=dP(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Eo(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Eo.prototype.clear=hP,Eo.prototype.delete=fP,Eo.prototype.get=mP,Eo.prototype.has=gP,Eo.prototype.set=yP;var bb=Eo;function Su(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=e.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(Su.Cache||bb),r}Su.Cache=bb;var vP=Su,bP=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xP=/\\(\\)?/g,wP=function(e){var t=vP(e,function(n){return r.size===500&&r.clear(),n}),r=t.cache;return t}(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(bP,function(r,n,o,a){t.push(o?a.replace(xP,"$1"):n||r)}),t}),$P=function(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},SP=bu,kP=wu,xb=Ia?Ia.prototype:void 0,wb=xb?xb.toString:void 0,AP=function e(t){if(typeof t=="string")return t;if(SP(t))return $P(t,e)+"";if(kP(t))return wb?wb.call(t):"";var r=t+"";return r=="0"&&1/t==-1/0?"-0":r},EP=bu,OP=fj,_P=wP,TP=function(e){return e==null?"":AP(e)},CP=wu,IP=function(e,t){return EP(e)?e:OP(e,t)?[e]:_P(TP(e))},jP=function(e){if(typeof e=="string"||CP(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},PP=function(e,t){for(var r=0,n=(t=IP(t,e)).length;e!=null&&r<n;)e=e[jP(t[r++])];return r&&r==n?e:void 0},Pa=function(e,t,r){var n=e==null?void 0:PP(e,t);return n===void 0?r:n};function $b(){return($b=Wc(Tr.mark(function e(t,r){var n,o,a,i,s,l,c,d,u,f,m,$,C=arguments;return Tr.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return n=C.length>2&&C[2]!==void 0?C[2]:{},o=n.returnEntireTree,a=n.baseDoc,i=n.requestInterceptor,s=n.responseInterceptor,l=n.parameterMacro,c=n.modelPropertyMacro,d=n.useCircularStructures,u={pathDiscriminator:r,baseDoc:a,requestInterceptor:i,responseInterceptor:s,parameterMacro:l,modelPropertyMacro:c,useCircularStructures:d},f=sb({spec:t}),m=f.spec,E.next=6,cb(dt(dt({},u),{},{spec:m,allowMetaPatches:!0,skipNormalization:!0}));case 6:return $=E.sent,!o&&Array.isArray(r)&&r.length&&($.spec=Pa($.spec,r)||null),E.abrupt("return",$);case 9:case"end":return E.stop()}},e)}))).apply(this,arguments)}var RP=function(){return null},Sb={mapTagOperations:function(e){var t=e.spec,r=e.cb,n=r===void 0?RP:r,o=e.defaultTag,a=o===void 0?"default":o,i=e.v2OperationIdCompatibilityMode,s={},l={};return ib(t,function(c){var d,u=c.pathName,f=c.method,m=c.operation;(m.tags?(d=m.tags,Array.isArray(d)?d:[d]):[a]).forEach(function($){if(typeof $=="string"){l[$]=l[$]||{};var C,E=l[$],h=Es(m,u,f,{v2OperationIdCompatibilityMode:i}),D=n({spec:t,pathName:u,method:f,operation:m,operationId:h});if(s[h])s[h]+=1,E[Ee(C="".concat(h)).call(C,s[h])]=D;else if(E[h]!==void 0){var F,M,Z=s[h]||1;s[h]=Z+1,E[Ee(F="".concat(h)).call(F,s[h])]=D;var N=E[h];delete E[h],E[Ee(M="".concat(h)).call(M,Z)]=N}else E[h]=D}})}),l},makeExecute:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function(t){var r=t.pathName,n=t.method,o=t.operationId;return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.requestInterceptor,l=e.responseInterceptor,c=e.userFetch;return e.execute(dt({spec:e.spec,requestInterceptor:s,responseInterceptor:l,userFetch:c,pathName:r,method:n,parameters:a,operationId:o},i))}}}},LP=Ye,NP=bl.indexOf,FP=hf,ku=at([].indexOf),kb=!!ku&&1/ku([1],1,-0)<0,BP=FP("indexOf");LP({target:"Array",proto:!0,forced:kb||!BP},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return kb?ku(this,e,t)||0:NP(this,e,t)}});var DP=cr("Array").indexOf,zP=Mt,UP=DP,Au=Array.prototype,Ab=function(e){var t=e.indexOf;return e===Au||zP(Au,e)&&t===Au.indexOf?UP:t};function qP(e,t){if(e==null)return{};var r,n,o=function(i,s){if(i==null)return{};var l,c,d={},u=Jd(i);for(c=0;c<u.length;c++)l=u[c],Ab(s).call(s,l)>=0||(d[l]=i[l]);return d}(e,t);if(Ei){var a=Ei(e);for(n=0;n<a.length;n++)r=a[n],Ab(t).call(t,r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var MP={parse:function(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var r={},n=t||{},o=e.split(";"),a=n.decode||HP,i=0;i<o.length;i++){var s=o[i],l=s.indexOf("=");if(!(l<0)){var c=s.substring(0,l).trim();if(r[c]==null){var d=s.substring(l+1,s.length).trim();d[0]==='"'&&(d=d.slice(1,-1)),r[c]=VP(d,a)}}}return r},serialize:function(e,t,r){var n=r||{},o=n.encode||WP;if(typeof o!="function")throw new TypeError("option encode is invalid");if(!Cs.test(e))throw new TypeError("argument name is invalid");var a=o(t);if(a&&!Cs.test(a))throw new TypeError("argument val is invalid");var i=e+"="+a;if(n.maxAge!=null){var s=n.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(s)}if(n.domain){if(!Cs.test(n.domain))throw new TypeError("option domain is invalid");i+="; Domain="+n.domain}if(n.path){if(!Cs.test(n.path))throw new TypeError("option path is invalid");i+="; Path="+n.path}if(n.expires){if(typeof n.expires.toUTCString!="function")throw new TypeError("option expires is invalid");i+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(i+="; HttpOnly"),n.secure&&(i+="; Secure"),n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i}},HP=decodeURIComponent,WP=encodeURIComponent,Cs=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function VP(e,t){try{return t(e)}catch{return e}}function Eb(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ob(e){var t,r;return Eb(e)!==!1&&((t=e.constructor)===void 0||Eb(r=t.prototype)!==!1&&r.hasOwnProperty("isPrototypeOf")!==!1)}var GP={body:function(e){var t=e.req,r=e.value;t.body=r},header:function(e){var t=e.req,r=e.parameter,n=e.value;t.headers=t.headers||{},n!==void 0&&(t.headers[r.name]=n)},query:function(e){var t=e.req,r=e.value,n=e.parameter;if(t.query=t.query||{},r===!1&&n.type==="boolean"&&(r="false"),r===0&&["number","integer"].indexOf(n.type)>-1&&(r="0"),r)t.query[n.name]={collectionFormat:n.collectionFormat,value:r};else if(n.allowEmptyValue&&r!==void 0){var o=n.name;t.query[o]=t.query[o]||{},t.query[o].allowEmptyValue=!0}},path:function(e){var t=e.req,r=e.value,n=e.parameter;t.url=t.url.split("{".concat(n.name,"}")).join(encodeURIComponent(r))},formData:function(e){var t=e.req,r=e.value,n=e.parameter;(r||n.allowEmptyValue)&&(t.form=t.form||{},t.form[n.name]={value:r,allowEmptyValue:n.allowEmptyValue,collectionFormat:n.collectionFormat})}};function Is(e,t){return ha(t).call(t,"application/json")?typeof e=="string"?e:Wi(e):e.toString()}var KP=["accept","authorization","content-type"],JP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",path:function(e){var t=e.req,r=e.value,n=e.parameter,o=n.name,a=n.style,i=n.explode,s=n.content;if(s){var l=Ve(s)[0];t.url=t.url.split("{".concat(o,"}")).join(vo(Is(r,l),{escape:!0}))}else{var c=Lp({key:n.name,value:r,style:a||"simple",explode:i||!1,escape:!0});t.url=t.url.split("{".concat(o,"}")).join(c)}},query:function(e){var t=e.req,r=e.value,n=e.parameter;if(t.query=t.query||{},n.content){var o=Ve(n.content)[0];t.query[n.name]=Is(r,o)}else if(r===!1&&(r="false"),r===0&&(r="0"),r){var a=n.style,i=n.explode,s=n.allowReserved;t.query[n.name]={value:r,serializationOption:{style:a,explode:i,allowReserved:s}}}else if(n.allowEmptyValue&&r!==void 0){var l=n.name;t.query[l]=t.query[l]||{},t.query[l].allowEmptyValue=!0}},header:function(e){var t=e.req,r=e.parameter,n=e.value;if(t.headers=t.headers||{},!(KP.indexOf(r.name.toLowerCase())>-1))if(r.content){var o=Ve(r.content)[0];t.headers[r.name]=Is(n,o)}else n!==void 0&&(t.headers[r.name]=Lp({key:r.name,value:n,style:r.style||"simple",explode:r.explode!==void 0&&r.explode,escape:!1}))},cookie:function(e){var t=e.req,r=e.parameter,n=e.value;t.headers=t.headers||{};var o=lt(n);if(r.content){var a,i=Ve(r.content)[0];t.headers.Cookie=Ee(a="".concat(r.name,"=")).call(a,Is(n,i))}else if(o!=="undefined"){var s=o==="object"&&!Array.isArray(n)&&r.explode?"":"".concat(r.name,"=");t.headers.Cookie=s+Lp({key:r.name,value:n,escape:!1,style:r.style||"form",explode:r.explode!==void 0&&r.explode})}}}),YP={exports:function(e){return(e instanceof cd?e:cd.from(e.toString(),"binary")).toString("base64")}},_b=YP.exports;function ZP(e,t){var r=e.operation,n=e.requestBody,o=e.securities,a=e.spec,i=e.attachContentTypeForEmptyPayload,s=e.requestContentType;t=function(C){var E=C.request,h=C.securities,D=h===void 0?{}:h,F=C.operation,M=F===void 0?{}:F,Z=C.spec,N=dt({},E),Q=D.authorized,T=Q===void 0?{}:Q,L=M.security||Z.security||[],U=T&&!!Ve(T).length,j=Pa(Z,["components","securitySchemes"])||{};return N.headers=N.headers||{},N.query=N.query||{},!Ve(D).length||!U||!L||Array.isArray(M.security)&&!M.security.length?E:(L.forEach(function(k){Ve(k).forEach(function(R){var te=T[R],oe=j[R];if(te){var ge=te.value||te,J=oe.type;if(te){if(J==="apiKey")oe.in==="query"&&(N.query[oe.name]=ge),oe.in==="header"&&(N.headers[oe.name]=ge),oe.in==="cookie"&&(N.cookies[oe.name]=ge);else if(J==="http"){if(/^basic$/i.test(oe.scheme)){var W,le=ge.username||"",Se=ge.password||"",we=_b(Ee(W="".concat(le,":")).call(W,Se));N.headers.Authorization="Basic ".concat(we)}/^bearer$/i.test(oe.scheme)&&(N.headers.Authorization="Bearer ".concat(ge))}else if(J==="oauth2"||J==="openIdConnect"){var Fe,Be=te.token||{},et=Be[oe["x-tokenName"]||"access_token"],He=Be.token_type;He&&He.toLowerCase()!=="bearer"||(He="Bearer"),N.headers.Authorization=Ee(Fe="".concat(He," ")).call(Fe,et)}}}})}),N)}({request:t,securities:o,operation:r,spec:a});var l=r.requestBody||{},c=Ve(l.content||{}),d=s&&c.indexOf(s)>-1;if(n||i){if(s&&d)t.headers["Content-Type"]=s;else if(!s){var u=c[0];u&&(t.headers["Content-Type"]=u,s=u)}}else s&&d&&(t.headers["Content-Type"]=s);if(!e.responseContentType&&r.responses){var f,m=dr(f=hg(r.responses)).call(f,function(C){var E=vr(C,2),h=E[0],D=E[1],F=parseInt(h,10);return F>=200&&F<300&&Ob(D.content)}).reduce(function(C,E){var h=vr(E,2)[1];return Ee(C).call(C,Ve(h.content))},[]);m.length>0&&(t.headers.accept=m.join(", "))}if(n)if(s){if(c.indexOf(s)>-1)if(s==="application/x-www-form-urlencoded"||s==="multipart/form-data")if(lt(n)==="object"){var $=(l.content[s]||{}).encoding||{};t.form={},Ve(n).forEach(function(C){t.form[C]={value:n[C],encoding:$[C]||{}}})}else t.form=n;else t.body=n}else t.body=n;return t}function QP(e,t){var r,n,o=e.spec,a=e.operation,i=e.securities,s=e.requestContentType,l=e.responseContentType,c=e.attachContentTypeForEmptyPayload;if((t=function(E){var h=E.request,D=E.securities,F=D===void 0?{}:D,M=E.operation,Z=M===void 0?{}:M,N=E.spec,Q=dt({},h),T=F.authorized,L=T===void 0?{}:T,U=F.specSecurity,j=U===void 0?[]:U,k=Z.security||j,R=L&&!!Ve(L).length,te=N.securityDefinitions;return Q.headers=Q.headers||{},Q.query=Q.query||{},!Ve(F).length||!R||!k||Array.isArray(Z.security)&&!Z.security.length?h:(k.forEach(function(oe){Ve(oe).forEach(function(ge){var J=L[ge];if(J){var W=J.token,le=J.value||J,Se=te[ge],we=Se.type,Fe=Se["x-tokenName"]||"access_token",Be=W&&W[Fe],et=W&&W.token_type;if(J){if(we==="apiKey"){var He=Se.in==="query"?"query":"headers";Q[He]=Q[He]||{},Q[He][Se.name]=le}else if(we==="basic")if(le.header)Q.headers.authorization=le.header;else{var Me,Nt=le.username||"",bt=le.password||"";le.base64=_b(Ee(Me="".concat(Nt,":")).call(Me,bt)),Q.headers.authorization="Basic ".concat(le.base64)}else if(we==="oauth2"&&Be){var Lr;et=et&&et.toLowerCase()!=="bearer"?et:"Bearer",Q.headers.authorization=Ee(Lr="".concat(et," ")).call(Lr,Be)}}}})}),Q)}({request:t,securities:i,operation:a,spec:o})).body||t.form||c)if(s)t.headers["Content-Type"]=s;else if(Array.isArray(a.consumes)){var d=vr(a.consumes,1);t.headers["Content-Type"]=d[0]}else if(Array.isArray(o.consumes)){var u=vr(o.consumes,1);t.headers["Content-Type"]=u[0]}else a.parameters&&dr(r=a.parameters).call(r,function(E){return E.type==="file"}).length?t.headers["Content-Type"]="multipart/form-data":a.parameters&&dr(n=a.parameters).call(n,function(E){return E.in==="formData"}).length&&(t.headers["Content-Type"]="application/x-www-form-urlencoded");else if(s){var f,m,$=a.parameters&&dr(f=a.parameters).call(f,function(E){return E.in==="body"}).length>0,C=a.parameters&&dr(m=a.parameters).call(m,function(E){return E.in==="formData"}).length>0;($||C)&&(t.headers["Content-Type"]=s)}return!l&&Array.isArray(a.produces)&&a.produces.length>0&&(t.headers.accept=a.produces.join(", ")),t}var XP=["http","fetch","spec","operationId","pathName","method","parameters","securities"],Tb=function(e){return Array.isArray(e)?e:[]},eR=zv("OperationNotFoundError",function(e,t,r){this.originalError=r,pr(this,t||{})}),tR={buildRequest:Cb};function Cb(e){var t,r,n=e.spec,o=e.operationId,a=e.responseContentType,i=e.scheme,s=e.requestInterceptor,l=e.responseInterceptor,c=e.contextUrl,d=e.userFetch,u=e.server,f=e.serverVariables,m=e.http,$=e.signal,C=e.parameters,E=e.parameterBuilders,h=ob(n);E||(E=h?JP:GP);var D={url:"",credentials:m&&m.withCredentials?"include":"same-origin",headers:{},cookies:{}};$&&(D.signal=$),s&&(D.requestInterceptor=s),l&&(D.responseInterceptor=l),d&&(D.userFetch=d);var F=XI(n,o);if(!F)throw new eR("Operation ".concat(o," not found"));var M=F.operation,Z=M===void 0?{}:M,N=F.method,Q=F.pathName;if(D.url+=Ib({spec:n,scheme:i,contextUrl:c,server:u,serverVariables:f,pathName:Q,method:N}),!o)return delete D.cookies,D;D.url+=Q,D.method="".concat(N).toUpperCase(),C=C||{};var T=n.paths[Q]||{};a&&(D.headers.accept=a);var L=function(k){var R={};k.forEach(function(oe){R[oe.in]||(R[oe.in]={}),R[oe.in][oe.name]=oe});var te=[];return Ve(R).forEach(function(oe){Ve(R[oe]).forEach(function(ge){te.push(R[oe][ge])})}),te}(Ee(t=Ee(r=[]).call(r,Tb(Z.parameters))).call(t,Tb(T.parameters)));L.forEach(function(k){var R,te,oe=E[k.in];if(k.in==="body"&&k.schema&&k.schema.properties&&(R=C),(R=k&&k.name&&C[k.name])===void 0)R=k&&k.name&&C[Ee(te="".concat(k.in,".")).call(te,k.name)];else if(function(J,W){return dr(W).call(W,function(le){return le.name===J})}(k.name,L).length>1){var ge;console.warn(Ee(ge="Parameter '".concat(k.name,"' is ambiguous because the defined spec has more than one parameter with the name: '")).call(ge,k.name,"' and the passed-in parameter values did not define an 'in' value."))}if(R!==null){if(k.default!==void 0&&R===void 0&&(R=k.default),R===void 0&&k.required&&!k.allowEmptyValue)throw new Error("Required parameter ".concat(k.name," is not provided"));if(h&&k.schema&&k.schema.type==="object"&&typeof R=="string")try{R=JSON.parse(R)}catch{throw new Error("Could not parse object parameter value string as JSON")}oe&&oe({req:D,parameter:k,value:R,operation:Z,spec:n})}});var U=dt(dt({},e),{},{operation:Z});if((D=h?ZP(U,D):QP(U,D)).cookies&&Ve(D.cookies).length){var j=Ve(D.cookies).reduce(function(k,R){var te=D.cookies[R];return k+(k?"&":"")+MP.serialize(R,te)},"");D.headers.Cookie=j}return D.cookies&&delete D.cookies,My(D),D}var Eu=function(e){return e?e.replace(/\W/g,""):null};function Ib(e){return ob(e.spec)?function(t){var r=t.spec,n=t.pathName,o=t.method,a=t.server,i=t.contextUrl,s=t.serverVariables,l=s===void 0?{}:s,c=Pa(r,["paths",n,(o||"").toLowerCase(),"servers"])||Pa(r,["paths",n,"servers"])||Pa(r,["servers"]),d="",u=null;if(a&&c&&c.length){var f=Xe(c).call(c,function($){return $.url});f.indexOf(a)>-1&&(d=a,u=c[f.indexOf(a)])}if(!d&&c&&c.length){d=c[0].url;var m=vr(c,1);u=m[0]}return d.indexOf("{")>-1&&function($){for(var C,E=[],h=/{([^}]+)}/g;C=h.exec($);)E.push(C[1]);return E}(d).forEach(function($){if(u.variables&&u.variables[$]){var C=u.variables[$],E=l[$]||C.default,h=new RegExp("{".concat($,"}"),"g");d=d.replace(h,E)}}),function(){var $,C,E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",D=E&&h?rr.parse(rr.resolve(h,E)):rr.parse(E),F=rr.parse(h),M=Eu(D.protocol)||Eu(F.protocol)||"",Z=D.host||F.host,N=D.pathname||"";return $=M&&Z?Ee(C="".concat(M,"://")).call(C,Z+N):N,$[$.length-1]==="/"?br($).call($,0,-1):$}(d,i)}(e):function(t){var r,n,o=t.spec,a=t.scheme,i=t.contextUrl,s=i===void 0?"":i,l=rr.parse(s),c=Array.isArray(o.schemes)?o.schemes[0]:null,d=a||c||Eu(l.protocol)||"http",u=o.host||l.host||"",f=o.basePath||"";return r=d&&u?Ee(n="".concat(d,"://")).call(n,u+f):f,r[r.length-1]==="/"?br(r).call(r,0,-1):r}(e)}function wt(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e=="string"?r.url=e:r=e,!(this instanceof wt))return new wt(r);pr(this,r);var n=this.resolve().then(function(){return t.disableInterfaces||pr(t,wt.makeApisTagOperation(t)),t});return n.client=this,n}wt.http=os,wt.makeHttp=function(e,t,r){return r=r||function(n){return n},t=t||function(n){return n},function(n){return typeof n=="string"&&(n={url:n}),Np.mergeInQueryOrForm(n),n=t(n),r(e(n))}}.bind(null,wt.http),wt.resolve=cb,wt.resolveSubtree=function(e,t){return $b.apply(this,arguments)},wt.execute=function(e){var t=e.http,r=e.fetch,n=e.spec,o=e.operationId,a=e.pathName,i=e.method,s=e.parameters,l=e.securities,c=qP(e,XP),d=t||r||os;a&&i&&!o&&(o=ab(a,i));var u=tR.buildRequest(dt({spec:n,operationId:o,parameters:s,securities:l,http:d},c));return u.body&&(Ob(u.body)||Array.isArray(u.body))&&(u.body=Wi(u.body)),d(u)},wt.serializeRes=Fy,wt.serializeHeaders=By,wt.clearCache=function(){Bn.refs.clearCache()},wt.makeApisTagOperation=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Sb.makeExecute(e);return{apis:Sb.mapTagOperations({v2OperationIdCompatibilityMode:e.v2OperationIdCompatibilityMode,spec:e.spec,cb:t})}},wt.buildRequest=Cb,wt.helpers={opId:Es},wt.getBaseUrl=Ib,wt.prototype={http:os,execute:function(e){return this.applyDefaults(),wt.execute(dt({spec:this.spec,http:this.http,securities:{authorized:this.authorizations},contextUrl:typeof this.url=="string"?this.url:void 0,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null},e))},resolve:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wt.resolve(dt({spec:this.spec,url:this.url,http:this.http||this.fetch,allowMetaPatches:this.allowMetaPatches,useCircularStructures:this.useCircularStructures,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null,skipNormalization:this.skipNormalization||!1},t)).then(function(r){return e.originalSpec=e.spec,e.spec=r.spec,e.errors=r.errors,e})}},wt.prototype.applyDefaults=function(){var e=this.spec,t=this.url;if(t&&Pf(t).call(t,"http")){var r=rr.parse(t);e.host||(e.host=r.host),e.schemes||(e.schemes=[r.protocol.replace(":","")]),e.basePath||(e.basePath="/")}};function jb(e){const t=(e=e.replace("[]","Array")).split("/");return t[0]=t[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm,"_"),t.join("/")}var nt={parameterTypeProperties:["format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","minLength","maxLength","multipleOf","minItems","maxItems","uniqueItems","minProperties","maxProperties","additionalProperties","pattern","enum","default"],arrayProperties:["items","minItems","maxItems","uniqueItems"],httpMethods:["get","post","put","delete","patch","head","options","trace"],uniqueOnly:function(e,t,r){return r.indexOf(e)===t},createHash:function(e){let t,r=0;if(e.length===0)return r;for(let n=0;n<e.length;n++)t=e.charCodeAt(n),r=(r<<5)-r+t,r|=0;return r},sanitise:jb,sanitiseAll:function(e){return jb(e.split("/").join("_"))},camelize:function(e){return e.toLowerCase().replace(/[-_ \/\.](.)/g,(t,r)=>r.toUpperCase())},clone:function(e){return JSON.parse(JSON.stringify(e))},circularClone:function e(t,r){if(r||(r=new WeakMap),Object(t)!==t||t instanceof Function)return t;if(r.has(t))return r.get(t);let n;try{n=new t.constructor}catch{n=Object.create(Object.getPrototypeOf(t))}return r.set(t,n),Object.assign(n,...Object.keys(t).map(o=>({[o]:e(t[o],r)})))}};function Pb(){return{depth:0,seen:new WeakMap,top:!0,combine:!1,allowRefSiblings:!1}}var rR={getDefaultState:Pb,walkSchema:function e(t,r,n,o){if(n.depth===void 0&&(n=Pb()),t==null||(n.combine&&(t.allOf&&Array.isArray(t.allOf)&&t.allOf.length===1&&delete(t={...t.allOf[0],...t}).allOf,t.anyOf&&Array.isArray(t.anyOf)&&t.anyOf.length===1&&delete(t={...t.anyOf[0],...t}).anyOf,t.oneOf&&Array.isArray(t.oneOf)&&t.oneOf.length===1&&delete(t={...t.oneOf[0],...t}).oneOf),o(t,r,n),n.seen.has(t)))return t;if(typeof t=="object"&&t!==null&&n.seen.set(t,!0),n.top=!1,n.depth++,t.items!==void 0&&(n.property="items",e(t.items,t,n,o)),t.additionalItems&&typeof t.additionalItems=="object"&&(n.property="additionalItems",e(t.additionalItems,t,n,o)),t.additionalProperties&&typeof t.additionalProperties=="object"&&(n.property="additionalProperties",e(t.additionalProperties,t,n,o)),t.properties)for(const a in t.properties){const i=t.properties[a];n.property=`properties/${a}`,e(i,t,n,o)}if(t.patternProperties)for(const a in t.patternProperties){const i=t.patternProperties[a];n.property=`patternProperties/${a}`,e(i,t,n,o)}if(t.allOf)for(const a in t.allOf){const i=t.allOf[a];n.property=`allOf/${a}`,e(i,t,n,o)}if(t.anyOf)for(const a in t.anyOf){const i=t.anyOf[a];n.property=`anyOf/${a}`,e(i,t,n,o)}if(t.oneOf)for(const a in t.oneOf){const i=t.oneOf[a];n.property=`oneOf/${a}`,e(i,t,n,o)}return t.not&&(n.property="not",e(t.not,t,n,o)),n.depth--,t}};function Ou(e,t,r){if(t||(t={depth:0}),t.depth||(t={path:"#",depth:0,pkey:"",parent:{},payload:{},seen:new WeakMap,identity:!1,identityDetection:!1,...t}),typeof e!="object")return;const n=t.path;for(const o in e){if(t.key=o,t.path=`${t.path}/${encodeURIComponent(o)}`,t.identityPath=t.seen.get(e[o]),t.identity=t.identityPath!==void 0,e.hasOwnProperty(o)&&r(e,o,t),typeof e[o]=="object"&&!t.identity){t.identityDetection&&!Array.isArray(e[o])&&e[o]!==null&&t.seen.set(e[o],t.path);const a={};a.parent=e,a.path=t.path,a.depth=t.depth?t.depth+1:1,a.pkey=o,a.payload=t.payload,a.seen=t.seen,a.identity=!1,a.identityDetection=t.identityDetection,Ou(e[o],a,r)}t.path=n}}let Rb;function _u(e,t){for(const r in e)r.startsWith("x-")&&!r.startsWith("x-s2o")&&(t[r]=e[r])}function js(e,t){rR.walkSchema(e,{},{},(r,n)=>{(function(o){if(o["x-required"]&&Array.isArray(o["x-required"])&&(o.required||(o.required=[]),o.required=o.required.concat(o["x-required"]),delete o["x-required"]),o["x-anyOf"]&&(o.anyOf=o["x-anyOf"],delete o["x-anyOf"]),o["x-oneOf"]&&(o.oneOf=o["x-oneOf"],delete o["x-oneOf"]),o["x-not"]&&(o.not=o["x-not"],delete o["x-not"]),typeof o["x-nullable"]=="boolean"&&(o.nullable=o["x-nullable"],delete o["x-nullable"]),typeof o["x-discriminator"]=="object"&&typeof o["x-discriminator"].propertyName=="string"){o.discriminator=o["x-discriminator"],delete o["x-discriminator"];for(const a in o.discriminator.mapping){const i=o.discriminator.mapping[a];i.startsWith("#/definitions/")&&(o.discriminator.mapping[a]=i.replace("#/definitions/","#/components/schemas/"))}}})(r),function(o,a,i){if(o.nullable&&i.patches++,o.discriminator&&typeof o.discriminator=="string"&&(o.discriminator={propertyName:o.discriminator}),o.items&&Array.isArray(o.items)&&(o.items.length===0?o.items={}:o.items.length===1?o.items=o.items[0]:o.items={anyOf:o.items}),o.type&&Array.isArray(o.type)){if(i.patches++,i.warnings.push("(Patchable) schema type must not be an array"),o.type.length===0)delete o.type;else{o.oneOf||(o.oneOf=[]);for(const s of o.type){const l={};if(s==="null")o.nullable=!0;else{l.type=s;for(const c of nt.arrayProperties)o.prop!==void 0&&(l[c]=o[c],delete o[c])}l.type&&o.oneOf.push(l)}delete o.type,o.oneOf.length===0?delete o.oneOf:o.oneOf.length<2&&(o.type=o.oneOf[0].type,Object.keys(o.oneOf[0]).length>1&&(i.patches++,i.warnings.push("Lost properties from oneOf")),delete o.oneOf)}o.type&&Array.isArray(o.type)&&o.type.length===1&&(o.type=o.type[0])}o.type&&o.type==="null"&&(delete o.type,o.nullable=!0),o.type!=="array"||o.items||(o.items={}),o.type==="file"&&(o.type="string",o.format="binary"),typeof o.required=="boolean"&&(o.required&&o.name&&(a.required===void 0&&(a.required=[]),Array.isArray(a.required)&&a.required.push(o.name)),delete o.required),o.xml&&typeof o.xml.namespace=="string"&&(o.xml.namespace||delete o.xml.namespace),o.allowEmptyValue&&(delete o.allowEmptyValue,i.patches++,i.warnings.push("(Patchable): deleted schema.allowEmptyValue"))}(r,n,t)})}function Lb(e){for(const t in e)for(const r in e[t]){const n=nt.sanitise(r);r!==n&&(e[t][n]=e[t][r],delete e[t][r])}}function nR(e,t){if(e.type==="basic"&&(e.type="http",e.scheme="basic"),e.type==="oauth2"){const r={};let n=e.flow;e.flow==="application"&&(n="clientCredentials"),e.flow==="accessCode"&&(n="authorizationCode"),typeof e.authorizationUrl=="string"&&(r.authorizationUrl=e.authorizationUrl.split("?")[0].trim()||"/"),typeof e.tokenUrl=="string"&&(r.tokenUrl=e.tokenUrl.split("?")[0].trim()||"/"),r.scopes=e.scopes||{},e.flows={},e.flows[n]=r,delete e.flow,delete e.authorizationUrl,delete e.tokenUrl,delete e.scopes,e.name&&(delete e.name,t.patches++,t.warnings.push("(Patchable) oauth2 securitySchemes should not have name property"))}}function Nb(e){return e&&!e["x-s2o-delete"]}function Fb(e,t){if(e.type&&!e.schema&&(e.schema={}),e.type&&(e.schema.type=e.type),e.items&&e.items.type!=="array"){if(e.items.collectionFormat!==e.collectionFormat)return t.errCount++,void t.errors.push({message:"Nested collectionFormats are not supported",pointer:"/.../responses/header"});delete e.items.collectionFormat}e.type==="array"?(e.collectionFormat==="ssv"?(t.patches++,t.warnings.push("collectionFormat:ssv is no longer supported for headers")):e.collectionFormat==="pipes"?(t.patches++,t.warnings.push("collectionFormat:pipes is no longer supported for headers")):e.collectionFormat==="multi"?e.explode=!0:e.collectionFormat==="tsv"?(e["x-collectionFormat"]="tsv",t.patches++,t.warnings.push("collectionFormat:tsv is no longer supported")):e.style="simple",delete e.collectionFormat):e.collectionFormat&&(delete e.collectionFormat,t.patches++,t.warnings.push("(Patchable) collectionFormat is only applicable to header.type array")),delete e.type;for(const r of nt.parameterTypeProperties)e[r]!==void 0&&(e.schema[r]=e[r],delete e[r]);for(const r of nt.arrayProperties)e[r]!==void 0&&(e.schema[r]=e[r],delete e[r])}function Ps(e,t,r,n,o,a,i){const s={};let l,c=!0;t&&t.consumes&&typeof t.consumes=="string"&&(t.consumes=[t.consumes],i.patches++,i.warnings.push("(Patchable) operation.consumes must be an array")),Array.isArray(a.consumes)||delete a.consumes;const d=((t?t.consumes:null)||a.consumes||[]).filter(nt.uniqueOnly);if(e&&(e.name||e.in)){typeof e["x-deprecated"]=="boolean"&&(e.deprecated=e["x-deprecated"],delete e["x-deprecated"]),e["x-example"]!==void 0&&(e.example=e["x-example"],delete e["x-example"]),e.in==="body"||e.type||(e.type="string",i.patches++,i.warnings.push("(Patchable) parameter.type is mandatory for non-body parameters")),e.type==="file"&&(e["x-s2o-originalType"]=e.type,l=e.type),e.description===null&&delete e.description;let u=e.collectionFormat;if(e.type!=="array"||u||(u="csv"),u&&(e.type!=="array"&&(delete e.collectionFormat,i.patches++,i.warnings.push("(Patchable) collectionFormat is only applicable to param.type array")),u!=="csv"||e.in!=="query"&&e.in!=="cookie"||(e.style="form",e.explode=!1),u!=="csv"||e.in!=="path"&&e.in!=="header"||(e.style="simple"),u==="ssv"&&(e.in==="query"?e.style="spaceDelimited":i.warnings.push(`${e.name} collectionFormat:ssv is no longer supported except for in:query parameters`)),u==="pipes"&&(e.in==="query"?e.style="pipeDelimited":i.warnings.push(`${e.name} collectionFormat:pipes is no longer supported except for in:query parameters`)),u==="multi"&&(e.explode=!0),u==="tsv"&&(i.warnings.push("collectionFormat:tsv is no longer supported"),e["x-collectionFormat"]="tsv"),delete e.collectionFormat),e.type&&e.type!=="body"&&e.in!=="formData")if(e.items&&e.schema)i.warnings.push(`${e.name} parameter has array,items and schema`);else{e.schema&&i.patches++,e.schema&&typeof e.schema=="object"||(e.schema={}),e.schema.type=e.type,e.items&&(e.schema.items=e.items,delete e.items,Ou(e.schema.items,null,(f,m)=>{m==="collectionFormat"&&typeof f[m]=="string"&&(u&&f[m]!==u&&i.warnings.push(`${e.name} Nested collectionFormats are not supported`),delete f[m])}));for(const f of nt.parameterTypeProperties)e[f]!==void 0&&(e.schema[f]=e[f]),delete e[f]}e.schema&&js(e.schema,i),e["x-ms-skip-url-encoding"]&&e.in==="query"&&(e.allowReserved=!0,delete e["x-ms-skip-url-encoding"])}if(e&&e.in==="formData"){c=!1,s.content={};let u="application/x-www-form-urlencoded";if(d.length&&d.indexOf("multipart/form-data")>=0&&(u="multipart/form-data"),s.content[u]={},e.schema)s.content[u].schema=e.schema;else{s.content[u].schema={},s.content[u].schema.type="object",s.content[u].schema.properties={},s.content[u].schema.properties[e.name]={};const f=s.content[u].schema,m=s.content[u].schema.properties[e.name];e.description&&(m.description=e.description),e.example&&(m.example=e.example),e.type&&(m.type=e.type);for(const $ of nt.parameterTypeProperties)e[$]!==void 0&&(m[$]=e[$]);e.required===!0&&(f.required||(f.required=[]),f.required.push(e.name),s.required=!0),e.default!==void 0&&(m.default=e.default),m.properties&&(m.properties=e.properties),e.allOf&&(m.allOf=e.allOf),e.type==="array"&&e.items&&(m.items=e.items,m.items.collectionFormat&&delete m.items.collectionFormat),l!=="file"&&e["x-s2o-originalType"]!=="file"||(m.type="string",m.format="binary"),_u(e,m)}}else e&&e.type==="file"&&(e.required&&(s.required=e.required),s.content={},s.content["application/octet-stream"]={},s.content["application/octet-stream"].schema={},s.content["application/octet-stream"].schema.type="string",s.content["application/octet-stream"].schema.format="binary",_u(e,s));if(e&&e.in==="body"){s.content={},e.name&&(s["x-s2o-name"]=(t&&t.operationId?nt.sanitiseAll(t.operationId):"")+nt.camelize(`_${e.name}`)),e.description&&(s.description=e.description),e.required&&(s.required=e.required),d.length||d.push("application/json");for(const u of d)s.content[u]={},s.content[u].schema=nt.clone(e.schema||{}),js(s.content[u].schema,i);_u(e,s)}if(Object.keys(s).length>0&&(e["x-s2o-delete"]=!0,t))if(t.requestBody&&c){t.requestBody["x-s2o-overloaded"]=!0;const u=t.operationId||o;i.warnings.push(`Operation ${u} has multiple requestBodies`)}else t.requestBody||(t=function(u,f){const m={};for(const $ of Object.keys(u))m[$]=u[$],$==="parameters"&&(m.requestBody={},f.rbname&&(m[f.rbname]=""));return m.requestBody={},m}(t,i),r[n]=t),t.requestBody.content&&t.requestBody.content["multipart/form-data"]&&t.requestBody.content["multipart/form-data"].schema&&t.requestBody.content["multipart/form-data"].schema.properties&&s.content["multipart/form-data"]&&s.content["multipart/form-data"].schema&&s.content["multipart/form-data"].schema.properties?(t.requestBody.content["multipart/form-data"].schema.properties=Object.assign(t.requestBody.content["multipart/form-data"].schema.properties,s.content["multipart/form-data"].schema.properties),t.requestBody.content["multipart/form-data"].schema.required=(t.requestBody.content["multipart/form-data"].schema.required||[]).concat(s.content["multipart/form-data"].schema.required||[]),t.requestBody.content["multipart/form-data"].schema.required.length||delete t.requestBody.content["multipart/form-data"].schema.required):t.requestBody.content&&t.requestBody.content["application/x-www-form-urlencoded"]&&t.requestBody.content["application/x-www-form-urlencoded"].schema&&t.requestBody.content["application/x-www-form-urlencoded"].schema.properties&&s.content["application/x-www-form-urlencoded"]&&s.content["application/x-www-form-urlencoded"].schema&&s.content["application/x-www-form-urlencoded"].schema.properties?(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties=Object.assign(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties,s.content["application/x-www-form-urlencoded"].schema.properties),t.requestBody.content["application/x-www-form-urlencoded"].schema.required=(t.requestBody.content["application/x-www-form-urlencoded"].schema.required||[]).concat(s.content["application/x-www-form-urlencoded"].schema.required||[]),t.requestBody.content["application/x-www-form-urlencoded"].schema.required.length||delete t.requestBody.content["application/x-www-form-urlencoded"].schema.required):(t.requestBody=Object.assign(t.requestBody,s),t.requestBody["x-s2o-name"]||t.operationId&&(t.requestBody["x-s2o-name"]=nt.sanitiseAll(t.operationId)));if(e&&!e["x-s2o-delete"]){delete e.type;for(const u of nt.parameterTypeProperties)delete e[u];e.in!=="path"||e.required!==void 0&&e.required===!0||(e.required=!0,i.patches++,i.warnings.push(`(Patchable) path parameters must be required:true [${e.name} in ${o}]`))}return t}function Bb(e,t,r,n,o){if(!e)return!1;if(e.description||typeof e!="object"||Array.isArray(e)||(o.patches++,o.warnings.push("(Patchable) response.description is mandatory")),e.schema!==void 0){js(e.schema,o),r&&r.produces&&typeof r.produces=="string"&&(r.produces=[r.produces],o.patches++,o.warnings.push("(Patchable) operation.produces must be an array")),n.produces&&!Array.isArray(n.produces)&&delete n.produces;const a=((r?r.produces:null)||n.produces||[]).filter(nt.uniqueOnly);a.length||a.push("*/*"),e.content={};for(const i of a){if(e.content[i]={},e.content[i].schema=nt.clone(e.schema),e.examples&&e.examples[i]){const s={};s.value=e.examples[i],e.content[i].examples={},e.content[i].examples.response=s,delete e.examples[i]}e.content[i].schema.type==="file"&&(e.content[i].schema={type:"string",format:"binary"})}delete e.schema}for(const a in e.examples)e.content||(e.content={}),e.content[a]||(e.content[a]={}),e.content[a].examples={},e.content[a].examples.response={},e.content[a].examples.response.value=e.examples[a];if(delete e.examples,e.headers)for(const a in e.headers)a.toLowerCase()==="status code"?(delete e.headers[a],o.patches++,o.warnings.push('(Patchable) "Status Code" is not a valid header')):Fb(e.headers[a],o)}function Db(e,t,r,n,o){for(const a in e){const i=e[a];i&&i["x-trace"]&&typeof i["x-trace"]=="object"&&(i.trace=i["x-trace"],delete i["x-trace"]),i&&i["x-summary"]&&typeof i["x-summary"]=="string"&&(i.summary=i["x-summary"],delete i["x-summary"]),i&&i["x-description"]&&typeof i["x-description"]=="string"&&(i.description=i["x-description"],delete i["x-description"]),i&&i["x-servers"]&&Array.isArray(i["x-servers"])&&(i.servers=i["x-servers"],delete i["x-servers"]);for(const s in i)if(nt.httpMethods.indexOf(s)>=0||s==="x-amazon-apigateway-any-method"){let l=i[s];if(l&&l.parameters&&Array.isArray(l.parameters)){if(i.parameters)for(const c of i.parameters)l.parameters.find(d=>d.name===c.name&&d.in===c.in)||c.in!=="formData"&&c.in!=="body"&&c.type!=="file"||(l=Ps(c,l,i,s,a,o,r));for(const c of l.parameters)l=Ps(c,l,i,s,`${s}: ${a}`,o,r);l.parameters&&(l.parameters=l.parameters.filter(Nb))}if(l&&l.security&&Lb(l.security),typeof l=="object"){if(!l.responses){const c={description:"Default response"};l.responses={default:c}}for(const c in l.responses)Bb(l.responses[c],0,l,o,r)}if(l&&l["x-servers"]&&Array.isArray(l["x-servers"]))l.servers=l["x-servers"],delete l["x-servers"];else if(l&&l.schemes&&l.schemes.length){for(const c of l.schemes)if((!o.schemes||o.schemes.indexOf(c)<0)&&(l.servers||(l.servers=[]),Array.isArray(o.servers)))for(const d of o.servers){const u=nt.clone(d);l.servers.push(u)}}if(l){if(delete l.consumes,delete l.produces,delete l.schemes,l["x-ms-examples"]){for(const c in l["x-ms-examples"]){const d=l["x-ms-examples"][c],u=nt.sanitiseAll(c);if(d.parameters)for(const f in d.parameters){const m=d.parameters[f];for(const $ of(l.parameters||[]).concat(i.parameters||[]))$.name!==f||$.example||($.examples||($.examples={}),$.examples[c]={value:m})}if(d.responses)for(const f in d.responses){if(d.responses[f].headers)for(const m in d.responses[f].headers){const $=d.responses[f].headers[m];for(const C in l.responses[f].headers)C===m&&(l.responses[f].headers[C].example=$)}if(d.responses[f].body&&(o.components.examples[u]={value:nt.clone(d.responses[f].body)},l.responses[f]&&l.responses[f].content))for(const m in l.responses[f].content){const $=l.responses[f].content[m];$.examples||($.examples={}),$.examples[c]={$ref:`#/components/examples/${u}`}}}}delete l["x-ms-examples"]}if(l.parameters&&l.parameters.length===0&&delete l.parameters,l.requestBody){const c=l.operationId?nt.sanitiseAll(l.operationId):nt.camelize(nt.sanitiseAll(s+a)),d=nt.sanitise(l.requestBody["x-s2o-name"]||c||"");delete l.requestBody["x-s2o-name"];const u=JSON.stringify(l.requestBody),f=nt.createHash(u);if(!n[f]){const $={};$.name=d,$.body=l.requestBody,$.refs=[],n[f]=$}const m=`#/${t}/${encodeURIComponent(a)}/${s}/requestBody`;n[f].refs.push(m)}}}if(i&&i.parameters){for(const s in i.parameters)Ps(i.parameters[s],null,i,null,a,o,r);Array.isArray(i.parameters)&&(i.parameters=i.parameters.filter(Nb))}}}function zb(e){return e&&e.url&&typeof e.url=="string"&&(e.url=e.url.split("{{").join("{"),e.url=e.url.split("}}").join("}"),e.url.replace(/\{(.+?)\}/g,(t,r)=>{e.variables||(e.variables={}),e.variables[r]={default:"unknown"}})),e}function Ub(e,t){e.info!==void 0&&e.info!==null||(e.info={version:"",title:""},t.patches++,t.warnings.push("(Patchable) info object is mandatory")),(typeof e.info!="object"||Array.isArray(e.info))&&(t.errCount++,t.errors.push({message:"info must be an object",pointer:"/info"})),e.info&&(e.info.title===void 0&&(t.patches++,e.info.title="",t.warnings.push({message:"(Patchable) info.title cannot be null",pointer:"/info/title",patchable:!0})),e.info.version===void 0?(t.patches++,e.info.version="",t.warnings.push("(Patchable) info.version cannot be null")):typeof e.info.version!="string"&&(t.patches++,e.info.version=e.info.version.toString(),t.warnings.push("(Patchable) info.version must be a string")))}function qb(e,t){e.paths||(t.patches++,e.paths={},t.warnings.push("(Patchable) paths object is mandatory"))}function Mb(e={}){const t={original:e,openapi:{},patches:0,warnings:[],errCount:0,errors:[]};if(e.openapi&&typeof e.openapi=="string"&&e.openapi.startsWith("3."))return t.openapi=nt.circularClone(e),Ub(t.openapi,t),qb(t.openapi,t),t;if(e.swagger!=="2.0")return t.errCount++,t.errors.push({message:`Unsupported swagger/OpenAPI version: ${e.openapi?e.openapi:e.swagger}`,pointer:"/swagger"}),t;if(t.openapi=nt.circularClone(e),t.openapi.openapi="3.0.0",delete t.openapi.swagger,Ou(t.openapi,{},(r,n,o)=>{r[n]===null&&!n.startsWith("x-")&&n!=="default"&&o.path.indexOf("/example")<0&&delete r[n]}),e.host)(e.schemes||[]).forEach(r=>{const n={},o=(e.basePath||"").replace(/\/$/,"");n.url=`${r?`${r}:`:""}//${e.host}${o}`,zb(n),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(n)});else if(e.basePath){const r={};r.url=e.basePath,zb(r),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(r)}if(delete t.openapi.host,delete t.openapi.basePath,e["x-ms-parameterized-host"]){const r=e["x-ms-parameterized-host"],n={};n.url=r.hostTemplate+(e.basePath?e.basePath:""),n.variables={};const o=n.url.match(/\{\w+\}/g);for(const a in r.parameters){const i=r.parameters[a];a.startsWith("x-")||(delete i.required,delete i.type,delete i.in,i.default===void 0&&(i.enum?i.default=i.enum[0]:i.default="none"),i.name||(i.name=o[a].replace("{","").replace("}","")),n.variables[i.name]=i,delete i.name)}t.openapi.servers||(t.openapi.servers=[]),r.useSchemePrefix===!1?t.openapi.servers.push(n):e.schemes.forEach(a=>{t.openapi.servers.push({...n,url:`${a}://${n.url}`})}),delete t.openapi["x-ms-parameterized-host"]}return Ub(t.openapi,t),qb(t.openapi,t),typeof t.openapi.consumes=="string"&&(t.openapi.consumes=[t.openapi.consumes]),typeof t.openapi.produces=="string"&&(t.openapi.produces=[t.openapi.produces]),t.openapi.components={},t.openapi["x-callbacks"]&&(t.openapi.components.callbacks=t.openapi["x-callbacks"],delete t.openapi["x-callbacks"]),t.openapi.components.examples={},t.openapi.components.headers={},t.openapi["x-links"]&&(t.openapi.components.links=t.openapi["x-links"],delete t.openapi["x-links"]),t.openapi.components.parameters=t.openapi.parameters||{},t.openapi.components.responses=t.openapi.responses||{},t.openapi.components.requestBodies={},t.openapi.components.securitySchemes=t.openapi.securityDefinitions||{},t.openapi.components.schemas=t.openapi.definitions||{},delete t.openapi.definitions,delete t.openapi.responses,delete t.openapi.parameters,delete t.openapi.securityDefinitions,function(r){const n=r.openapi,o={};Rb={schemas:{}},n.security&&Lb(n.security);for(const a in n.components.securitySchemes){const i=nt.sanitise(a);if(a!==i){if(n.components.securitySchemes[i])return r.errCount++,r.errors.push({message:`Duplicate sanitised securityScheme name ${i}`,pointer:`/components/securitySchemes/${i}`}),r;n.components.securitySchemes[i]=n.components.securitySchemes[a],delete n.components.securitySchemes[a]}nR(n.components.securitySchemes[i],r)}for(const a in n.components.schemas){const i=nt.sanitiseAll(a);let s="";if(a!==i){for(;n.components.schemas[i+s];)s=s?++s:2;n.components.schemas[i+s]=n.components.schemas[a],delete n.components.schemas[a]}Rb.schemas[a]=i+s,js(n.components.schemas[`${i}${s}`],r)}for(const a in n.components.parameters){const i=nt.sanitise(a);if(a!==i){if(n.components.parameters[i])return r.errCount++,r.errors.push({message:`Duplicate sanitised parameter name ${i}`,pointer:`/components/parameters/${i}`}),r;n.components.parameters[i]=n.components.parameters[a],delete n.components.parameters[a]}Ps(n.components.parameters[i],null,null,null,i,n,r)}for(const a in n.components.responses){const i=nt.sanitise(a);if(a!==i){if(n.components.responses[i])return r.errCount++,r.errors.push({message:`Duplicate sanitised response name ${i}`,pointer:`/components/responses/${i}`}),r;n.components.responses[i]=n.components.responses[a],delete n.components.responses[a]}const s=n.components.responses[i];if(Bb(s,0,null,n,r),s.headers)for(const l in s.headers)l.toLowerCase()==="status code"?(delete s.headers[l],r.patches++,r.warnings.push('(Patchable) "Status Code" is not a valid header')):Fb(s.headers[l],r)}for(const a in n.components.requestBodies){const i=n.components.requestBodies[a],s=JSON.stringify(i),l=nt.createHash(s),c={};c.name=a,c.body=i,c.refs=[],o[l]=c}Db(n.paths,"paths",r,o,n),n["x-ms-paths"]&&Db(n["x-ms-paths"],"x-ms-paths",r,o,n);for(const a in n.components.parameters)n.components.parameters[a]["x-s2o-delete"]&&delete n.components.parameters[a];return delete n.consumes,delete n.produces,delete n.schemes,n.components.requestBodies={},n.components.responses&&Object.keys(n.components.responses).length===0&&delete n.components.responses,n.components.parameters&&Object.keys(n.components.parameters).length===0&&delete n.components.parameters,n.components.examples&&Object.keys(n.components.examples).length===0&&delete n.components.examples,n.components.requestBodies&&Object.keys(n.components.requestBodies).length===0&&delete n.components.requestBodies,n.components.securitySchemes&&Object.keys(n.components.securitySchemes).length===0&&delete n.components.securitySchemes,n.components.headers&&Object.keys(n.components.headers).length===0&&delete n.components.headers,n.components.schemas&&Object.keys(n.components.schemas).length===0&&delete n.components.schemas,n.components&&Object.keys(n.components).length===0&&delete n.components,r}(t)}var Hb={convertObj:Mb,resolve:function(e){return new Promise(async t=>{try{const r=await wt.resolve(e);if(r.errors&&r.errors.length>0)t(r);else{r.spec.openapi&&(r.resolvedSpec=r.spec,t(r));const n=Mb(r.spec);n.errors&&n.errors.length>0&&(Array.isArray(r.errors)?r.errors.concat(r.errors):r.errors=n.errors),n.warnings&&n.warnings.length>0&&(r.warnings=n.warnings),r.resolvedSpec=r.spec,r.spec=n.openapi,t(r)}}catch(r){t(r)}})}};async function Tu(e,t=!1,r=!1,n="",o="",a="",i="",s=""){var l,c;let d;try{var u,f;let N;if(this.requestUpdate(),N=typeof e=="string"?await Hb.resolve({url:e,allowMetaPatches:!1}):await Hb.resolve({spec:e,allowMetaPatches:!1}),await No(0),(u=N.resolvedSpec)!==null&&u!==void 0&&u.jsonSchemaViewer&&(f=N.resolvedSpec)!==null&&f!==void 0&&f.schemaAndExamples){this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:N.resolvedSpec}}));const Q=Object.entries(N.resolvedSpec.schemaAndExamples).map(T=>({show:!0,expanded:!0,selectedExample:null,name:T[0],elementId:T[0].replace(Lo,"-"),...T[1]}));return{specLoadError:!1,isSpecLoading:!1,info:N.resolvedSpec.info,schemaAndExamples:Q}}var m,$,C,E;if(!N.spec||!(N.spec.components||N.spec.info||N.spec.servers||N.spec.tags||N.spec.paths))return console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",N),{specLoadError:!0,isSpecLoading:!1,info:{title:"Error loading the spec",description:(m=N.response)!==null&&m!==void 0&&m.url?`${($=N.response)===null||$===void 0?void 0:$.url} \u2503 ${(C=N.response)===null||C===void 0?void 0:C.status}  ${(E=N.response)===null||E===void 0?void 0:E.statusText}`:"Unable to load the Spec",version:" "},tags:[]};d=N.spec,this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:d}}))}catch(N){console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",N)}const h=function(N,Q,T=!1,L=!1){const U=["get","put","post","delete","patch","head","options"],j=N.tags&&Array.isArray(N.tags)?N.tags.map(te=>({show:!0,elementId:`tag--${te.name.replace(Lo,"-")}`,name:te.name,description:te.description||"",headers:te.description?Cu(te.description):[],paths:[],expanded:te["x-tag-expanded"]!==!1})):[],k=N.paths||{};if(N.webhooks)for(const[te,oe]of Object.entries(N.webhooks))oe._type="webhook",k[te]=oe;for(const te in k){const oe=k[te].parameters,ge={servers:k[te].servers||[],parameters:k[te].parameters||[]},J=k[te]._type==="webhook";U.forEach(W=>{if(k[te][W]){const le=N.paths[te][W],Se=le.tags||[];if(Se.length===0)if(T){const we=te.replace(/^\/+|\/+$/g,""),Fe=we.indexOf("/");Fe===-1?Se.push(we):Se.push(we.substr(0,Fe))}else Se.push("General \u2982");Se.forEach(we=>{let Fe,Be;var et,He;N.tags&&(Be=N.tags.find(bt=>bt.name.toLowerCase()===we.toLowerCase())),Fe=j.find(bt=>bt.name===we),Fe||(Fe={show:!0,elementId:`tag--${we.replace(Lo,"-")}`,name:we,description:((et=Be)===null||et===void 0?void 0:et.description)||"",headers:(He=Be)!==null&&He!==void 0&&He.description?Cu(Be.description):[],paths:[],expanded:!Be||Be["x-tag-expanded"]!==!1},j.push(Fe));let Me=(le.summary||le.description||`${W.toUpperCase()} ${te}`).trim();Me.length>100&&([Me]=Me.split(/[.|!|?]\s|[\r?\n]/));let Nt=[];if(Nt=oe?le.parameters?oe.filter(bt=>{if(!le.parameters.some(Lr=>bt.name===Lr.name&&bt.in===Lr.in))return bt}).concat(le.parameters):oe.slice(0):le.parameters?le.parameters.slice(0):[],le.callbacks)for(const[bt,Lr]of Object.entries(le.callbacks)){const Us=Object.entries(Lr).filter(La=>typeof La[1]=="object")||[];le.callbacks[bt]=Object.fromEntries(Us)}Fe.paths.push({show:!0,expanded:!1,isWebhook:J,expandedAtLeastOnce:!1,summary:le.summary||"",description:le.description||"",shortSummary:Me,method:W,path:te,operationId:le.operationId,elementId:`${W}-${te.replace(Lo,"-")}`,servers:le.servers?ge.servers.concat(le.servers):ge.servers,parameters:Nt,requestBody:le.requestBody,responses:le.responses,callbacks:le.callbacks,deprecated:le.deprecated,security:le.security,xBadges:le["x-badges"]||void 0,xCodeSamples:le["x-codeSamples"]||le["x-code-samples"]||""})})}})}const R=j.filter(te=>te.paths&&te.paths.length>0);return R.forEach(te=>{Q==="method"?te.paths.sort((oe,ge)=>U.indexOf(oe.method).toString().localeCompare(U.indexOf(ge.method))):Q==="summary"?te.paths.sort((oe,ge)=>oe.shortSummary.localeCompare(ge.shortSummary)):Q==="path"&&te.paths.sort((oe,ge)=>oe.path.localeCompare(ge.path)),te.firstPathId=te.paths[0].elementId}),L?R.sort((te,oe)=>te.name.localeCompare(oe.name)):R}(d,n,t,r),D=function(N){if(!N.components)return[];const Q=[];for(const T in N.components){const L=[];for(const R in N.components[T]){const te={show:!0,id:`${T.toLowerCase()}-${R.toLowerCase()}`.replace(Lo,"-"),name:R,component:N.components[T][R]};L.push(te)}let U=T,j=T;switch(T){case"schemas":j="Schemas",U="Schemas allows the definition of input and output data types. These types can be objects, but also primitives and arrays.";break;case"responses":j="Responses",U="Describes responses from an API Operation, including design-time, static links to operations based on the response.";break;case"parameters":j="Parameters",U="Describes operation parameters. A unique parameter is defined by a combination of a name and location.";break;case"examples":j="Examples",U="List of Examples for operations, can be requests, responses and objects examples.";break;case"requestBodies":j="Request Bodies",U="Describes common request bodies that are used across the API operations.";break;case"headers":j="Headers",U='Headers follows the structure of the Parameters but they are explicitly in "header"';break;case"securitySchemes":j="Security Schemes",U="Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows(implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.";break;case"links":j="Links",U="Links represent a possible design-time link for a response. The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.";break;case"callbacks":j="Callbacks",U="A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.";break;default:j=T,U=T}const k={show:!0,name:j,description:U,subComponents:L};Q.push(k)}return Q||[]}(d),F=(l=d.info)!==null&&l!==void 0&&l.description?Cu(d.info.description):[],M=[];if((c=d.components)!==null&&c!==void 0&&c.securitySchemes){const N=new Set;Object.entries(d.components.securitySchemes).forEach(Q=>{if(!N.has(Q[0])){N.add(Q[0]);const T={securitySchemeId:Q[0],...Q[1]};T.value="",T.finalKeyValue="",Q[1].type==="apiKey"||Q[1].type==="http"?(T.in=Q[1].in||"header",T.name=Q[1].name||"Authorization",T.user="",T.password=""):Q[1].type==="oauth2"&&(T.in="header",T.name="Authorization",T.clientId="",T.clientSecret=""),M.push(T)}})}o&&a&&i&&M.push({securitySchemeId:dn,description:"api-key provided in rapidoc element attributes",type:"apiKey",oAuthFlow:"",name:o,in:a,value:i,finalKeyValue:i}),M.forEach(N=>{N.type==="http"?N.typeDisplay=N.scheme==="basic"?"HTTP Basic":"HTTP Bearer":N.type==="apiKey"?N.typeDisplay=`API Key (${N.name})`:N.type==="oauth2"?N.typeDisplay=`OAuth (${N.securitySchemeId})`:N.typeDisplay=N.type});let Z=[];return d.servers&&Array.isArray(d.servers)?(d.servers.forEach(N=>{let Q=N.url.trim();Q.startsWith("http")||Q.startsWith("//")||Q.startsWith("{")||window.location.origin.startsWith("http")&&(N.url=window.location.origin+N.url,Q=N.url),N.variables&&Object.entries(N.variables).forEach(T=>{const L=new RegExp(`{${T[0]}}`,"g");Q=Q.replace(L,T[1].default||""),T[1].value=T[1].default||""}),N.computedUrl=Q}),s&&d.servers.push({url:s,computedUrl:s})):s?d.servers=[{url:s,computedUrl:s}]:window.location.origin.startsWith("http")?d.servers=[{url:window.location.origin,computedUrl:window.location.origin}]:d.servers=[{url:"http://localhost",computedUrl:"http://localhost"}],Z=d.servers,{specLoadError:!1,isSpecLoading:!1,info:d.info,infoDescriptionHeaders:F,tags:h,components:D,externalDocs:d.externalDocs,securitySchemes:M,servers:Z}}function Cu(e){return xe.lexer(e).filter(t=>t.type==="heading"&&t.depth<=2)||[]}const Wb=1,oR=2,Vb=3,Gb=4,Iu=e=>(...t)=>({_$litDirective$:e,values:t});class ju{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}class Pu extends ju{constructor(t){if(super(t),this.it=Ie,t.type!==oR)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Ie||t==null)return this.ft=void 0,this.it=t;if(t===ze)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Pu.directiveName="unsafeHTML",Pu.resultType=1;const Ze=Iu(Pu),Kb="rapidoc";function Ra(e,t="",r="",n=""){var o,a;const i=(o=this.resolvedSpec.securitySchemes)===null||o===void 0?void 0:o.find(c=>c.securitySchemeId===e);if(!i)return!1;let s="";if(((a=i.scheme)===null||a===void 0?void 0:a.toLowerCase())==="basic")t&&(s=`Basic ${btoa(`${t}:${r}`)}`);else if(n){var l;i.value=n,s=`${((l=i.scheme)===null||l===void 0?void 0:l.toLowerCase())==="bearer"?"Bearer ":""}${n}`}return!!s&&(i.finalKeyValue=s,this.requestUpdate(),!0)}function Jb(){var e;(e=this.resolvedSpec.securitySchemes)===null||e===void 0||e.forEach(t=>{t.user="",t.password="",t.value="",t.finalKeyValue=""}),this.requestUpdate()}function Ru(){return JSON.parse(localStorage.getItem(Kb))||{}}function Yb(e){localStorage.setItem(Kb,JSON.stringify(e))}function aR(){const e=Ru.call(this);Object.values(e).forEach(t=>{Ra.call(this,t.securitySchemeId,t.username,t.password,t.value)})}function Zb(e){let t="";const r=this.resolvedSpec.securitySchemes.find(n=>n.securitySchemeId===e);if(r){const n=this.shadowRoot.getElementById(`security-scheme-${e}`);if(n){if(r.type&&r.scheme&&r.type==="http"&&r.scheme.toLowerCase()==="basic"){const o=n.querySelector(".api-key-user").value.trim(),a=n.querySelector(".api-key-password").value.trim();Ra.call(this,e,o,a)}else t=n.querySelector(".api-key-input").value.trim(),Ra.call(this,e,"","",t);if(this.persistAuth==="true"){const o=Ru.call(this);o[e]=r,Yb.call(this,o)}}}}function Qb(e,t,r="Bearer"){this.resolvedSpec.securitySchemes.find(n=>n.securitySchemeId===e).finalKeyValue=`${r.toLowerCase()==="bearer"?"Bearer":r.toLowerCase()==="mac"?"MAC":r} ${t}`,this.requestUpdate()}async function Lu(e,t,r,n,o,a,i,s,l="header",c=null,d=null,u=null){const f=s?s.querySelector(".oauth-resp-display"):void 0,m=new URLSearchParams,$=new Headers;m.append("grant_type",o),o!=="client_credentials"&&o!=="password"&&m.append("redirect_uri",n),a&&(m.append("code",a),m.append("code_verifier","731DB1C3F7EA533B85E29492D26AA-1234567890-1234567890")),l==="header"?$.set("Authorization",`Basic ${btoa(`${t}:${r}`)}`):(m.append("client_id",t),m.append("client_secret",r)),o==="password"&&(m.append("username",d),m.append("password",u)),c&&m.append("scope",c);try{const C=await fetch(e,{method:"POST",headers:$,body:m}),E=await C.json();if(!C.ok)return f&&(f.innerHTML=`<span style="color:var(--red)">${E.error_description||E.error_description||"Unable to get access token"}</span>`),!1;if(E.token_type&&E.access_token)return Qb.call(this,i,E.access_token,E.token_type),f&&(f.innerHTML='<span style="color:var(--green)">Access Token Received</span>'),!0}catch{return f&&(f.innerHTML='<span style="color:var(--red)">Failed to get access token</span>'),!1}}async function iR(e,t,r,n,o,a,i,s,l,c){sessionStorage.removeItem("winMessageEventActive"),t.close(),e.data.fake||(e.data||console.warn("RapiDoc: Received no data with authorization message"),e.data.error&&console.warn("RapiDoc: Error while receiving data"),e.data&&(e.data.responseType==="code"?Lu.call(this,r,n,o,a,i,e.data.code,l,c,s):e.data.responseType==="token"&&Qb.call(this,l,e.data.access_token,e.data.token_type)))}async function sR(e,t,r,n,o){const a=o.target.closest(".oauth-flow"),i=a.querySelector(".oauth-client-id")?a.querySelector(".oauth-client-id").value.trim():"",s=a.querySelector(".oauth-client-secret")?a.querySelector(".oauth-client-secret").value.trim():"",l=a.querySelector(".api-key-user")?a.querySelector(".api-key-user").value.trim():"",c=a.querySelector(".api-key-password")?a.querySelector(".api-key-password").value.trim():"",d=a.querySelector(".oauth-send-client-secret-in")?a.querySelector(".oauth-send-client-secret-in").value.trim():"header",u=[...a.querySelectorAll(".scope-checkbox:checked")],f=a.querySelector(`#${e}-pkce`),m=`${Math.random().toString(36)}random`.slice(2,9),$=`${Math.random().toString(36)}random`.slice(2,9),C=new URL(`${window.location.origin}${window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/"))}/${this.oauthReceiver}`);let E,h="",D="";if([...a.parentNode.querySelectorAll(".oauth-resp-display")].forEach(F=>{F.innerHTML=""}),t==="authorizationCode"||t==="implicit"){const F=new URL(r);t==="authorizationCode"?(h="authorization_code",D="code"):t==="implicit"&&(D="token");const M=new URLSearchParams(F.search),Z=u.map(N=>N.value).join(" ");Z&&M.set("scope",Z),M.set("client_id",i),M.set("redirect_uri",C.toString()),M.set("response_type",D),M.set("state",m),M.set("nonce",$),f&&f.checked&&(M.set("code_challenge","4FatVDBJKPAo4JgLLaaQFMUcQPn5CrPRvLlaob9PTYc"),M.set("code_challenge_method","S256")),M.set("show_dialog",!0),F.search=M.toString(),sessionStorage.getItem("winMessageEventActive")==="true"&&window.postMessage({fake:!0},this),setTimeout(()=>{E=window.open(F.toString()),E?(sessionStorage.setItem("winMessageEventActive","true"),window.addEventListener("message",N=>iR.call(this,N,E,n,i,s,C.toString(),h,d,e,a),{once:!0})):console.error(`RapiDoc: Unable to open ${F.toString()} in a new window`)},10)}else if(t==="clientCredentials"){h="client_credentials";const F=u.map(M=>M.value).join(" ");Lu.call(this,n,i,s,C.toString(),h,"",e,a,d,F)}else if(t==="password"){h="password";const F=u.map(M=>M.value).join(" ");Lu.call(this,n,i,s,C.toString(),h,"",e,a,d,F,l,c)}}function lR(e,t,r,n,o,a=[]){let{authorizationUrl:i,tokenUrl:s,refreshUrl:l}=o;const c=u=>u.indexOf("://")>0||u.indexOf("//")===0;let d;return l&&!c(l)&&(l=`${this.selectedServer.computedUrl}/${l.replace(/^\//,"")}`),s&&!c(s)&&(s=`${this.selectedServer.computedUrl}/${s.replace(/^\//,"")}`),i&&!c(i)&&(i=`${this.selectedServer.computedUrl}/${i.replace(/^\//,"")}`),d=e==="authorizationCode"?"Authorization Code Flow":e==="clientCredentials"?"Client Credentials Flow":e==="implicit"?"Implicit Flow":e==="password"?"Password Flow":e,v`
    <div class="oauth-flow ${e}" style="padding: 12px 0; margin-bottom:12px;">
      <div class="tiny-title upper" style="margin-bottom:8px;">${d}</div>
      ${i?v`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Auth URL</span> <span class="mono-font"> ${i} </span></div>`:""}
      ${s?v`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Token URL</span> <span class="mono-font">${s}</span></div>`:""}
      ${l?v`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Refresh URL</span> <span class="mono-font">${l}</span></div>`:""}
      ${e==="authorizationCode"||e==="clientCredentials"||e==="implicit"||e==="password"?v`
          ${o.scopes?v`
              <span> Scopes </span>
              <div class= "oauth-scopes" part="section-auth-scopes" style = "width:100%; display:flex; flex-direction:column; flex-wrap:wrap; margin:0 0 10px 24px">
                ${Object.entries(o.scopes).map((u,f)=>v`
                  <div class="m-checkbox" style="display:inline-flex; align-items:center">
                    <input type="checkbox" part="checkbox checkbox-auth-scope" class="scope-checkbox" id="${n}${e}${f}" ?checked="${a.includes(u[0])}" value="${u[0]}">
                    <label for="${n}${e}${f}" style="margin-left:5px; cursor:pointer">
                      <span class="mono-font">${u[0]}</span>
                        ${u[0]!==u[1]?` - ${u[1]||""}`:""}
                    </label>
                  </div>
                `)}
              </div>
            `:""}
          ${e==="password"?v`
              <div style="margin:5px 0">
                <input type="text" value = "" placeholder="username" spellcheck="false" class="oauth2 ${e} ${n} api-key-user" part="textbox textbox-username">
                <input type="password" value = "" placeholder="password" spellcheck="false" class="oauth2 ${e} ${n} api-key-password" style = "margin:0 5px;" part="textbox textbox-password">
              </div>`:""}
          <div>
            ${e==="authorizationCode"?v`
                <div style="margin: 16px 0 4px">
                  <input type="checkbox" part="checkbox checkbox-auth-scope" id="${n}-pkce" checked>
                  <label for="${n}-pkce" style="margin:0 16px 0 4px; line-height:24px; cursor:pointer">
                   Send Proof Key for Code Exchange (PKCE)
                  </label>
                </div>
              `:""}
            <input type="text" part="textbox textbox-auth-client-id" value = "${t||""}" placeholder="client-id" spellcheck="false" class="oauth2 ${e} ${n} oauth-client-id">
            ${e==="authorizationCode"||e==="clientCredentials"||e==="password"?v`
                <input type="password" part="textbox textbox-auth-client-secret" value = "${r||""}" placeholder="client-secret" spellcheck="false" class="oauth2 ${e} ${n} oauth-client-secret" style = "margin:0 5px;">
                ${e==="authorizationCode"||e==="clientCredentials"||e==="password"?v`
                    <select style="margin-right:5px;" class="${e} ${n} oauth-send-client-secret-in">
                      <option value = 'header' selected> Authorization Header </option>
                      <option value = 'request-body'> Request Body </option>
                    </select>`:""}`:""}
            ${e==="authorizationCode"||e==="clientCredentials"||e==="implicit"||e==="password"?v`
                <button class="m-btn thin-border" part="btn btn-outline"
                  @click="${u=>{sR.call(this,n,e,i,s,u)}}"
                > GET TOKEN </button>`:""}
          </div>
          <div class="oauth-resp-display red-text small-font-size"></div>
          `:""}
    </div>
  `}function cR(e){var t;const r=(t=this.resolvedSpec.securitySchemes)===null||t===void 0?void 0:t.find(n=>n.securitySchemeId===e);if(r.user="",r.password="",r.value="",r.finalKeyValue="",this.persistAuth==="true"){const n=Ru.call(this);delete n[r.securitySchemeId],Yb.call(this,n)}this.requestUpdate()}function Xb(){var e;if(!this.resolvedSpec)return"";const t=(e=this.resolvedSpec.securitySchemes)===null||e===void 0?void 0:e.filter(r=>r.finalKeyValue);return t?v`
  <section id='auth' part="section-auth" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class = 'observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap "}'>
    <div class='sub-title regular-font'> AUTHENTICATION </div>

    <div class="small-font-size" style="display:flex; align-items: center; min-height:30px">
      ${t.length>0?v`
          <div class="blue-text"> ${t.length} API key applied </div>
          <div style="flex:1"></div>
          <button class="m-btn thin-border" part="btn btn-outline" @click=${()=>{Jb.call(this)}}>CLEAR ALL API KEYS</button>`:v`<div class="red-text">No API key applied</div>`}
    </div>
    ${this.resolvedSpec.securitySchemes&&this.resolvedSpec.securitySchemes.length>0?v`
        <table id="auth-table" class='m-table padded-12' style="width:100%;">
          ${this.resolvedSpec.securitySchemes.map(r=>v`
            <tr id="security-scheme-${r.securitySchemeId}" class="${r.type.toLowerCase()}">
              <td style="max-width:500px; overflow-wrap: break-word;">
                <div style="line-height:28px; margin-bottom:5px;">
                  <span style="font-weight:bold; font-size:var(--font-size-regular)">${r.typeDisplay}</span>
                  ${r.finalKeyValue?v`
                      <span class='blue-text'>  ${r.finalKeyValue?"Key Applied":""} </span>
                      <button class="m-btn thin-border small" part="btn btn-outline" @click=${()=>{cR.call(this,r.securitySchemeId)}}>REMOVE</button>
                      `:""}
                </div>
                ${r.description?v`
                    <div class="m-markdown">
                      ${Ze(xe(r.description||""))}
                    </div>`:""}

                ${r.type.toLowerCase()==="apikey"||r.type.toLowerCase()==="http"&&r.scheme.toLowerCase()==="bearer"?v`
                    <div style="margin-bottom:5px">
                      ${r.type.toLowerCase()==="apikey"?v`Send <code>${r.name}</code> in <code>${r.in}</code>`:v`Send <code>Authorization</code> in <code>header</code> containing the word <code>Bearer</code> followed by a space and a Token String.`}
                    </div>
                    <div style="max-height:28px;">
                      ${r.in!=="cookie"?v`
                          <input type = "text" value = "${r.value}" class="${r.type} ${r.securitySchemeId} api-key-input" placeholder = "api-token" spellcheck = "false">
                          <button class="m-btn thin-border" style = "margin-left:5px;"
                            part = "btn btn-outline"
                            @click="${n=>{Zb.call(this,r.securitySchemeId,n)}}">
                            ${r.finalKeyValue?"UPDATE":"SET"}
                          </button>`:v`<span class="gray-text" style="font-size::var(--font-size-small)"> cookies cannot be set from here</span>`}
                    </div>`:""}
                ${r.type.toLowerCase()==="http"&&r.scheme.toLowerCase()==="basic"?v`
                    <div style="margin-bottom:5px">
                      Send <code>Authorization</code> in <code>header</code> containing the word <code>Basic</code> followed by a space and a base64 encoded string of <code>username:password</code>.
                    </div>
                    <div>
                      <input type="text" value = "${r.user}" placeholder="username" spellcheck="false" class="${r.type} ${r.securitySchemeId} api-key-user" style="width:100px">
                      <input type="password" value = "${r.password}" placeholder="password" spellcheck="false" class="${r.type} ${r.securitySchemeId} api-key-password" style = "width:100px; margin:0 5px;">
                      <button class="m-btn thin-border"
                        @click="${n=>{Zb.call(this,r.securitySchemeId,n)}}"
                        part = "btn btn-outline"
                      >
                        ${r.finalKeyValue?"UPDATE":"SET"}
                      </button>
                    </div>`:""}
              </td>
            </tr>
            ${r.type.toLowerCase()==="oauth2"?v`
                <tr>
                  <td style="border:none; padding-left:48px">
                    ${Object.keys(r.flows).map(n=>lR.call(this,n,r["x-client-id"],r["x-client-secret"],r.securitySchemeId,r.flows[n],r["x-default-scopes"]))}
                  </td>
                </tr>
                `:""}
          `)}
        </table>`:""}
    <slot name="auth"></slot>
  </section>
`:void 0}function e0(e){if(this.resolvedSpec.securitySchemes&&e){const t=[];return e.forEach(r=>{const n=[],o=[];Object.keys(r).forEach(a=>{let i="";const s=this.resolvedSpec.securitySchemes.find(l=>l.securitySchemeId===a);r[a]&&Array.isArray(r[a])&&(i=r[a].join(", ")),s&&(o.push(s.typeDisplay),n.push({...s,scopes:i}))}),t.push({securityTypes:o.length>1?`${o[0]} + ${o.length-1} more`:o[0],securityDefs:n})}),v`<div style="position:absolute; top:3px; right:2px; font-size:var(--font-size-small); line-height: 1.5;">
      <div style="position:relative; display:flex; min-width:350px; max-width:700px; justify-content: flex-end;">
        <svg width="16" height="24">
          <g>
            <path style="fill: var(--fg3)" d="m13.8,8.5l0,-2.6l0,0c0,-3.2 -2.6,-5.8 -5.8,-5.8s-5.8,2.6 -5.8,5.8l0,0l0,2.6l-2.1,0l0,11.2l16,0l0,-11.2l-2.1,0l-0,0l0,0l0,0l-0,0zm-9.8,-2.6c0,0 0,0 0,0c0,-2.2 1.8,-4 4,-4c2.2,0 4,1.8 4,4c0,0 0,0 0,0l0,2.6l-8.03,0l0,-2.6l0,0l0,0z" />
          </g>
        </svg>
          ${t.map((r,n)=>v`

          ${r.securityTypes?v`
              ${n!==0?v`<div style="padding:3px 4px;"> OR </div>`:""}
              <div class="tooltip">
                <div style = "padding:2px 4px; white-space:nowrap; text-overflow:ellipsis;max-width:150px; overflow:hidden;">
                  <a part="anchor anchor-operation-security" href="#auth"> ${r.securityTypes} </a>
                </div>
                <div class="tooltip-text" style="position:absolute; color: var(--fg); top:26px; right:0; border:1px solid var(--border-color);padding:2px 4px; display:block;">
                  ${r.securityDefs.length>1?v`<div>Requires <b>all</b> of the following </div>`:""}
                  <div style="padding-left: 8px">
                    ${r.securityDefs.map((o,a)=>{const i=v`${o.scopes!==""?v`
                          <div>
                            <b>Required scopes:</b>
                            <br/>
                            <div style="margin-left:8px">
                              ${o.scopes.split(",").map((s,l)=>v`${l===0?"":"\u2503"}<span>${s}</span>`)}
                            </div>
                          </div>`:""}`;return v`
                      ${o.type==="oauth2"?v`
                          <div>
                            ${r.securityDefs.length>1?v`<b>${a+1}.</b> &nbsp;`:"Needs"}
                            OAuth Token <span style="font-family:var(--font-mono); color:var(--primary-color);">${o.securitySchemeId}</span> in <b>Authorization header</b>
                            ${i}
                          </div>`:o.type==="http"?v`
                            <div>
                              ${r.securityDefs.length>1?v`<b>${a+1}.</b> &nbsp;`:v`Requires`}
                              ${o.scheme==="basic"?"Base 64 encoded username:password":"Bearer Token"} in <b>Authorization header</b>
                              ${i}
                            </div>`:v`
                            <div>
                              ${r.securityDefs.length>1?v`<b>${a+1}.</b> &nbsp;`:v`Requires`}
                              Token in <b>${o.name} ${o.in}</b>
                              ${i}
                            </div>`}`})}
                  </div>
                </div>
              </div>
            `:""}
        `)}
      </div>
    `}return""}function t0(e){return v`
  <section class="table-title" style="margin-top:24px;">CODE SAMPLES</div>
  <div class="tab-panel col"
    @click="${t=>{if(!t.target.classList.contains("tab-btn"))return;const r=t.target.dataset.tab,n=[...t.currentTarget.querySelectorAll(".tab-btn")],o=[...t.currentTarget.querySelectorAll(".tab-content")];n.forEach(a=>a.classList[a.dataset.tab===r?"add":"remove"]("active")),o.forEach(a=>{a.style.display=a.dataset.tab===r?"block":"none"})}}">
    <div class="tab-buttons row" style="width:100; overflow">
      ${e.map((t,r)=>v`<button class="tab-btn ${r===0?"active":""}" data-tab = '${t.lang}${r}'> ${t.label||t.lang} </button>`)}
    </div>
    ${e.map((t,r)=>{var n,o,a;return v`
      <div class="tab-content m-markdown" style= "display:${r===0?"block":"none"}" data-tab = '${t.lang}${r}'>
        <button class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${i=>{Fo(t.source,i)}}'> Copy </button>
        <pre><code class="language">${Pt().languages[(n=t.lang)===null||n===void 0?void 0:n.toLowerCase()]?Ze(Pt().highlight(t.source,Pt().languages[(o=t.lang)===null||o===void 0?void 0:o.toLowerCase()],(a=t.lang)===null||a===void 0?void 0:a.toLowerCase())):t.source}</code></pre>
      </div>`})}
  </section>`}function r0(e){return v`
    <div class="req-res-title" style="margin-top:12px">CALLBACKS</div>
    ${Object.entries(e).map(t=>v`
      <div class="tiny-title" style="padding: 12px; border:1px solid var(--light-border-color)"> 
        ${t[0]}
        ${Object.entries(t[1]).map(r=>v`
          <div class="mono-font small-font-size" style="display:flex; margin-left:16px;">
            <div> 
              ${Object.entries(r[1]).map(n=>{var o,a,i;return v`
                <div>
                  <div style="margin-top:12px;">
                    <div class="method method-fg ${n[0]}" style="width:70px; border:none; margin:0; padding:0; line-height:20px; vertical-align: baseline;text-align:left"> 
                      <span style="font-size:20px;"> &#x2944; </span> 
                      ${n[0]} 
                    </div>
                    <span style="line-height:20px; vertical-align: baseline;">${r[0]} </span>
                  </div>  
                  <div class='expanded-req-resp-container'>
                    <api-request
                      class = "${this.renderStyle}-mode callback"  
                      style = "width:100%;"
                      callback = "true"
                      method = "${n[0]||""}", 
                      path = "${r[0]||""}" 
                      .parameters = "${((o=n[1])===null||o===void 0?void 0:o.parameters)||""}" 
                      .request_body = "${((a=n[1])===null||a===void 0?void 0:a.requestBody)||""}"
                      fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
                      allow-try = "false"
                      render-style="${this.renderStyle}" 
                      schema-style = "${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                      schema-hide-read-only = "${this.schemaHideReadOnly}"
                      fetch-credentials = "${this.fetchCredentials}"
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                        file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                        anchor:anchor, anchor-param-example:anchor-param-example"
                    > </api-request>

                    <api-response
                      style = "width:100%;"
                      class = "${this.renderStyle}-mode"
                      callback = "true"
                      .responses="${(i=n[1])===null||i===void 0?void 0:i.responses}"
                      render-style="${this.renderStyle}"
                      schema-style="${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy"
                    > </api-response>
                  </div>
                </div>  
              `})}
            </div>  
          </div>  
        `)}
      </div>  
    `)}
  `}const pR={},Rs=Iu(class extends ju{constructor(){super(...arguments),this.nt=pR}render(e,t){return t()}update(e,[t,r]){if(Array.isArray(t)){if(Array.isArray(this.nt)&&this.nt.length===t.length&&t.every((n,o)=>n===this.nt[o]))return ze}else if(this.nt===t)return ze;return this.nt=Array.isArray(t)?Array.from(t):t,this.render(t,r)}}),uR={},dR=Iu(class extends ju{constructor(e){if(super(e),e.type!==Vb&&e.type!==Wb&&e.type!==Gb)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>t.strings===void 0)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ze||t===Ie)return t;const r=e.element,n=e.name;if(e.type===Vb){if(t===r[n])return ze}else if(e.type===Gb){if(!!t===r.hasAttribute(n))return ze}else if(e.type===Wb&&r.getAttribute(n)===t+"")return ze;return((o,a=uR)=>{o._$AH=a})(e),t}}),Ls=x`
.border-top {
  border-top:1px solid var(--border-color);
}
.border{
  border:1px solid var(--border-color);
  border-radius: var(--border-radius);
}
.light-border{
  border:1px solid var(--light-border-color);
  border-radius: var(--border-radius);
}
.pad-8-16{
  padding: 8px 16px;
}
.pad-top-8{
  padding-top: 8px;
}
.mar-top-8{
  margin-top: 8px;
}
`;function pn(e){if(!e)return;let t="",r="";if(e.$ref){const s=e.$ref.lastIndexOf("/");t=`{recursive: ${e.$ref.substring(s+1)}} `}else e.type?(t=Array.isArray(e.type)?e.type.join("\u2503"):e.type,(e.format||e.enum)&&(t=t.replace("string",e.enum?"enum":e.format)),e.nullable&&(t+="\u2503null")):t=Object.keys(e).length===0?"any":"{missing-type-info}";const n={type:t,format:e.format||"",pattern:e.pattern&&!e.enum?e.pattern:"",readOrWriteOnly:e.readOnly?"\u{1F181}":e.writeOnly?"\u{1F186}":"",deprecated:e.deprecated?"\u274C":"",examples:e.examples||e.example,default:e.default!=null?`${e.default}`:"",description:e.description||"",constrain:"",allowedValues:"",arrayType:"",html:""};if(n.type==="{recursive}"?n.description=e.$ref.substring(e.$ref.lastIndexOf("/")+1):n.type!=="{missing-type-info}"&&n.type!=="any"||(n.description=n.description||""),n.allowedValues=Array.isArray(e.enum)?e.enum.join("\u2503"):"",t==="array"&&e.items){var o,a,i;const s=(o=e.items)===null||o===void 0?void 0:o.type,l=((a=e.items)===null||a===void 0?void 0:a.default)!==void 0?e.items.default:"";n.arrayType=`${e.type} of ${Array.isArray(s)?s.join(""):s}`,n.default=l,n.allowedValues=Array.isArray((i=e.items)===null||i===void 0?void 0:i.enum)?e.items.enum.join("\u2503"):""}return t.match(/integer|number/g)&&(e.minimum===void 0&&e.exclusiveMinimum===void 0||(r+=e.minimum!==void 0?`Min ${e.minimum}`:`More than ${e.exclusiveMinimum}`),e.maximum===void 0&&e.exclusiveMaximum===void 0||(r+=e.maximum!==void 0?`${r?"\u2503":""}Max ${e.maximum}`:`${r?"\u2503":""}Less than ${e.exclusiveMaximum}`),e.multipleOf!==void 0&&(r+=`${r?"\u2503":""} multiple of ${e.multipleOf}`)),t.match(/string/g)&&(e.minLength!==void 0&&e.maxLength!==void 0?r+=`${r?"\u2503":""}${e.minLength} to ${e.maxLength} chars`:e.minLength!==void 0?r+=`${r?"\u2503":""}Min ${e.minLength} chars`:e.maxLength!==void 0&&(r+=`Max ${r?"\u2503":""}${e.maxLength} chars`)),n.constrain=r,n.html=`${n.type}~|~${n.readOrWriteOnly}~|~${n.constrain}~|~${n.default}~|~${n.allowedValues}~|~${n.pattern}~|~${n.description}~|~${e.title||""}~|~${n.deprecated?"deprecated":""}`,n}function Nu(e){return e&&{Example:{value:e}}}function n0(e,t="string"){let r,n;if(e){if(e.constructor===Object){const o=Object.values(e);r=o.length>0?typeof o[0].value=="boolean"||typeof o[0].value=="number"?o[0].value.toString():o[0].value:"",n=Object.values(e).map(a=>({value:typeof a.value=="boolean"||typeof a.value=="number"?a.value.toString():a.value,description:a.description||a.summary||a.value}))}else Array.isArray(e)||(e=e?[e]:[]),e.length>0&&(t==="array"?([r]=e,n=e.map(o=>({value:o,description:Array.isArray(o)?o.join(" , "):o}))):(r=e[0].toString(),n=e.map(o=>({value:o.toString(),description:o}))));return{exampleVal:r,exampleList:n}}return{exampleVal:"",exampleList:[]}}function Ns(e){const t=e.examples?e.examples[0]:e.example===null?null:e.example||void 0;if(t==="")return"";if(t===null)return null;if(t===0)return 0;if(t)return t;if(Object.keys(e).length===0)return null;if(e.$ref)return e.$ref;const r=Array.isArray(e.type)?e.type[0]:e.type;if(!r)return"?";if(r.match(/^integer|^number/g)){const n=Number.isNaN(Number(e.multipleOf))?void 0:Number(e.multipleOf),o=Number.isNaN(Number(e.maximum))?void 0:Number(e.maximum),a=Number.isNaN(Number(e.minimum))?Number.isNaN(Number(e.exclusiveMinimum))?o||0:Number(e.exclusiveMinimum)+(r.startsWith("integer")?1:.001):Number(e.minimum);return n?n>=a?n:a%n==0?a:Math.ceil(a/n)*n:a}if(r.match(/^boolean/g))return!1;if(r.match(/^null/g))return null;if(r.match(/^string/g)){if(e.enum)return e.enum[0];if(e.pattern)return e.pattern;if(!e.format){const n=Number.isNaN(e.minLength)?void 0:Number(e.minLength),o=Number.isNaN(e.maxLength)?void 0:Number(e.maxLength),a=n||(o>6?6:o||void 0);return a?"A".repeat(a):"string"}{const n=`${Date.now().toString(16)}${Math.random().toString(16)}0`.repeat(16);switch(e.format.toLowerCase()){case"url":case"uri":return"http://example.com";case"date":return new Date(0).toISOString().split("T")[0];case"time":return new Date(0).toISOString().split("T")[1];case"date-time":return new Date(0).toISOString();case"duration":return"P3Y6M4DT12H30M5S";case"email":case"idn-email":return"user@example.com";case"hostname":case"idn-hostname":return"www.example.com";case"ipv4":return"198.51.100.42";case"ipv6":return"2001:0db8:5b96:0000:0000:426f:8e17:642a";case"uuid":return[n.substr(0,8),n.substr(8,4),`4000-8${n.substr(13,3)}`,n.substr(16,12)].join("-");default:return""}}}return"?"}function Fu(e,t=1){const r="  ".repeat(t);let n="";if(t===1&&typeof e!="object")return`
${r}${e.toString()}`;for(const o in e)n=Array.isArray(e[o])||typeof e[o]=="object"?`${n}
${r}<${o}> ${Fu(e[o],t+1)}
${r}</${o}>`:`${n}
${r}<${o}> ${e[o].toString()} </${o}>`;return n}function Fs(e,t){typeof t=="object"&&t!==null&&(e.title&&(t["::TITLE"]=e.title),e.description&&(t["::DESCRIPTION"]=e.description))}function o0(e){if(typeof e=="object"&&e!==null){delete e["::TITLE"],delete e["::DESCRIPTION"];for(const t in e)o0(e[t])}}function a0(e,t,r){for(const n in t)t[n][r]=e}function Bu(e,t,r){let n=0;const o={};for(const a in e){for(const i in r)if(o[`example-${n}`]={...e[a]},o[`example-${n}`][t]=r[i],n++,n>=10)break;if(n>=10)break}return o}function Hr(e,t={}){let r={};if(e){if(e.allOf){const u={};if(e.allOf.length===1&&!e.allOf[0].properties&&!e.allOf[0].items)return e.allOf[0].$ref?"{  }":e.allOf[0].readOnly&&t.includeReadOnly?Ns(e.allOf[0]):void 0;e.allOf.forEach(f=>{if(f.type==="object"||f.properties||f.allOf||f.anyOf||f.oneOf){const m=Hr(f,t);Object.assign(u,m)}else if(f.type==="array"||f.items){const m=[Hr(f,t)];Object.assign(u,m)}else{if(!f.type)return"";{const m=`prop${Object.keys(u).length}`;u[m]=Ns(f)}}}),r=u}else if(e.oneOf){const u={};if(e.properties)for(const f in e.properties)u[f]=Ns(e.properties[f]);if(e.oneOf.length>0){let f=0;for(const m in e.oneOf){const $=Hr(e.oneOf[m],t);for(const C in $)if($[C]===null){const E=Object.assign($[C],u);r[`example-${f}`]=E,Fs(e.oneOf[m],r[`example-${f}`]),f++}}}}else if(e.anyOf){let u;if(e.type==="object"||e.properties){u={"example-0":{}};for(const m in e.properties){if(e.example){u=e;break}e.properties[m].deprecated&&!t.includeDeprecated||e.properties[m].readOnly&&!t.includeReadOnly||e.properties[m].writeOnly&&!t.includeWriteOnly||(u=Bu(u,m,Hr(e.properties[m],t)))}}let f=0;for(const m in e.anyOf){const $=Hr(e.anyOf[m],t);for(const C in $){if(u!==void 0)for(const E in u)r[`example-${f}`]={...u[E],...$[C]};else r[`example-${f}`]=$[C];Fs(e.anyOf[m],r[`example-${f}`]),f++}}}else if(e.type==="object"||e.properties)if(r["example-0"]={},Fs(e,r["example-0"]),e.example)r["example-0"]=e.example;else for(const u in e.properties){var n,o,a,i,s,l,c;if(((n=e.properties[u])===null||n===void 0||!n.deprecated||t.includeDeprecated)&&((o=e.properties[u])===null||o===void 0||!o.readOnly||t.includeReadOnly)&&((a=e.properties[u])===null||a===void 0||!a.writeOnly||t.includeWriteOnly))if(((i=e.properties[u])===null||i===void 0?void 0:i.type)==="array"||(s=e.properties[u])!==null&&s!==void 0&&s.items)if(e.properties[u].example)a0(e.properties[u].example,r,u);else if((l=e.properties[u])!==null&&l!==void 0&&(c=l.items)!==null&&c!==void 0&&c.example)a0([e.properties[u].items.example],r,u);else{const f=Hr(e.properties[u].items,t),m=[];for(const $ in f)m[$]=[f[$]];r=Bu(r,u,m)}else r=Bu(r,u,Hr(e.properties[u],t))}else{if(e.type!=="array"&&!e.items)return{"example-0":Ns(e)};var d;if(e.example)r["example-0"]=e.example;else if((d=e.items)!==null&&d!==void 0&&d.example)r["example-0"]=[e.items.example];else{const u=Hr(e.items,t);let f=0;for(const m in u)r[`example-${f}`]=[u[m]],Fs(e.items,r[`example-${f}`]),f++}}return r}}function i0(e,t=0){var r;let n="";if(e.title&&(n=`**${e.title}:** `),e.minItems&&(n=`${n} **Min Items:** ${e.minItems}`),e.maxItems&&(n=`${n} **Max Items:** ${e.maxItems}`),e.description&&(n=`${n} ${e.description}`),t>0&&(r=e.items)!==null&&r!==void 0&&r.description){let o="";e.items.minProperties&&(o=`**Min Properties:** ${e.items.minProperties}`),e.items.maxProperties&&(o=`${o} **Max Properties:** ${e.items.maxProperties}`),n=`${n} \u2B95 ${o} [ ${e.items.description} ] `}return n}function Et(e,t,r=0,n=""){if(e){if(e.allOf){const i={};if(e.allOf.length===1&&!e.allOf[0].properties&&!e.allOf[0].items)return`${pn(e.allOf[0]).html}`;e.allOf.map((s,l)=>{if(s.type==="object"||s.properties||s.allOf||s.anyOf||s.oneOf){const c=(s.anyOf||s.oneOf)&&l>0?l:"",d=Et(s,{},r+1,c);Object.assign(i,d)}else if(s.type==="array"||s.items){const c=Et(s,{},r+1);Object.assign(i,c)}else{if(!s.type)return"";{const c=`prop${Object.keys(i).length}`,d=pn(s);i[c]=`${d.html}`}}}),t=i}else if(e.anyOf||e.oneOf){if(t["::description"]=e.description||"",e.type==="object"||e.properties){t["::description"]=e.description||"",t["::type"]="object";for(const l in e.properties)e.required&&e.required.includes(l)?t[`${l}*`]=Et(e.properties[l],{},r+1):t[l]=Et(e.properties[l],{},r+1)}const i={},s=e.anyOf?"anyOf":"oneOf";e[s].forEach((l,c)=>{if(l.type==="object"||l.properties||l.allOf||l.anyOf||l.oneOf){const d=Et(l,{});i[`::OPTION~${c+1}${l.title?`~${l.title}`:""}`]=d,i["::type"]="xxx-of-option"}else if(l.type==="array"||l.items){const d=Et(l,{});i[`::OPTION~${c+1}${l.title?`~${l.title}`:""}`]=d,i["::type"]="xxx-of-array"}else{const d=`::OPTION~${c+1}${l.title?`~${l.title}`:""}`;i[d]=`${pn(l).html}`,i["::type"]="xxx-of-option"}}),t[e.anyOf?`::ANY~OF ${n}`:`::ONE~OF ${n}`]=i,t["::type"]="xxx-of"}else if(Array.isArray(e.type)){const i=JSON.parse(JSON.stringify(e)),s=[],l=[];let c;var o;if(i.type.forEach(d=>{var u,f;d.match(/integer|number|string|null|boolean/g)?s.push(d):d==="array"&&typeof((u=i.items)===null||u===void 0?void 0:u.type)=="string"&&(f=i.items)!==null&&f!==void 0&&f.type.match(/integer|number|string|null|boolean/g)?i.items.type==="string"&&i.items.format?s.push(`[${i.items.format}]`):s.push(`[${i.items.type}]`):l.push(d)}),s.length>0&&(i.type=s.join("\u2503"),c=pn(i),l.length===0))return`${((o=c)===null||o===void 0?void 0:o.html)||""}`;if(l.length>0){var a;t["::type"]="xxx-of";const d={"::type":"xxx-of-option"};l.forEach((u,f)=>{if(u==="null")d[`::OPTION~${f+1}`]="NULL~|~~|~~|~~|~~|~~|~~|~~|~";else if("integer, number, string, boolean,".includes(`${u},`)){i.type=Array.isArray(u)?u.join("\u2503"):u;const m=pn(i);d[`::OPTION~${f+1}`]=m.html}else if(u==="object"){const m={"::title":e.title||"","::description":e.description||"","::type":"object","::deprecated":e.deprecated||!1};for(const $ in e.properties)e.required&&e.required.includes($)?m[`${$}*`]=Et(e.properties[$],{},r+1):m[$]=Et(e.properties[$],{},r+1);d[`::OPTION~${f+1}`]=m}else u==="array"&&(d[`::OPTION~${f+1}`]={"::title":e.title||"","::description":e.description||"","::type":"array","::props":Et(e.items,{},r+1)})}),d[`::OPTION~${l.length+1}`]=((a=c)===null||a===void 0?void 0:a.html)||"",t["::ONE~OF"]=d}}else if(e.type==="object"||e.properties){t["::title"]=e.title||"",t["::description"]=i0(e,r),t["::type"]="object",t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"";for(const i in e.properties)e.required&&e.required.includes(i)?t[`${i}*`]=Et(e.properties[i],{},r+1):t[i]=Et(e.properties[i],{},r+1);e.additionalProperties&&(t["<any-key>"]=Et(e.additionalProperties,{}))}else{if(e.type!=="array"&&!e.items){const i=pn(e);return i!=null&&i.html?`${i.html}`:""}t["::title"]=e.title||"",t["::description"]=i0(e,r),t["::type"]="array",t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"",e.items.items&&(t["::array-type"]=e.items.items.type),t["::props"]=Et(e.items,{},r+1)}return t}}function Oo(e,t,r="",n="",o=!0,a=!0,i="json",s=!1){const l=[];if(r)for(const c in r){let d="",u="json";if(t!=null&&t.toLowerCase().includes("json")){if(i==="text")d=typeof r[c].value=="string"?r[c].value:JSON.stringify(r[c].value,void 0,2),u="text";else if(d=r[c].value,typeof r[c].value=="string")try{const f=r[c].value.replace(/([\w]+)(:)/g,'"$1"$2').replace(/'/g,'"');d=JSON.parse(f),u="json"}catch{u="text",d=r[c].value}}else d=r[c].value,u="text";l.push({exampleId:c,exampleSummary:r[c].summary||c,exampleDescription:r[c].description||"",exampleType:t,exampleValue:d,exampleFormat:u})}else if(n){let c="",d="json";if(t!=null&&t.toLowerCase().includes("json")){if(i==="text")c=typeof n=="string"?n:JSON.stringify(n,void 0,2),d="text";else if(typeof n=="object")c=n,d="json";else if(typeof n=="string")try{c=JSON.parse(n),d="json"}catch{d="text",c=n}}else c=n,d="text";l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:c,exampleFormat:d})}if(l.length===0||s===!0)if(e)if(e.example)l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:e.example,exampleFormat:t!=null&&t.toLowerCase().includes("json")&&typeof e.example=="object"?"json":"text"});else if(t!=null&&t.toLowerCase().includes("json")||t!=null&&t.toLowerCase().includes("text")||t!=null&&t.toLowerCase().includes("*/*")||t!=null&&t.toLowerCase().includes("xml")){let c="",d="",u="",f="";t!=null&&t.toLowerCase().includes("xml")?(c=e.xml&&e.xml.name?`<${e.xml.name}>`:"<root>",d=e.xml&&e.xml.name?`</${e.xml.name}>`:"</root>",u="text"):u=i;const m=Hr(e,{includeReadOnly:o,includeWriteOnly:a,deprecated:!0});let $=0;for(const C in m){if(!m[C])continue;const E=m[C]["::TITLE"]||"Example "+ ++$,h=m[C]["::DESCRIPTION"]||"";o0(m[C]),f=t!=null&&t.toLowerCase().includes("xml")?`${c}${Fu(m[C])}
${d}`:i==="text"?JSON.stringify(m[C],null,2):m[C],l.push({exampleId:C,exampleSummary:E,exampleDescription:h,exampleType:t,exampleFormat:u,exampleValue:f})}}else t!=null&&t.toLowerCase().includes("jose")?l.push({exampleId:"Example",exampleSummary:"Base64 Encoded",exampleDescription:"",exampleType:t,exampleValue:e.pattern||"bXJpbg==",exampleFormat:"text"}):l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});else l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});return l}function hR(e){return e==="application/json"?"json":e==="application/xml"?"xml":null}function fR(e){if(e.schema)return[e.schema,null,null];if(e.content){for(const t of Object.keys(e.content))if(e.content[t].schema)return[e.content[t].schema,hR(t),e.content[t]]}return[null,null,null]}customElements.define("json-tree",class extends b{static get properties(){return{data:{type:Object},renderStyle:{type:String,attribute:"render-style"}}}static get styles(){return[Wr,Ls,qn,x`
      :host{
        display:flex;
      }
      .json-tree {
        position: relative;
        font-family: var(--font-mono);
        font-size: var(--font-size-small);
        display:inline-block;
        overflow:hidden;
        word-break: break-all;
        flex:1;
        line-height: calc(var(--font-size-small) + 6px);
        direction: ltr; 
        text-align: left;
      }

      .open-bracket{
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .open-bracket:hover{
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .inside-bracket{
        padding-left:12px;
        border-left:1px dotted var(--border-color);
      }
      .open-bracket.collapsed + .inside-bracket,
      .open-bracket.collapsed + .inside-bracket + .close-bracket {
        display:none;
      }

      .string{color:var(--green);}
      .number{color:var(--blue);}
      .null{color:var(--red);}
      .boolean{color:var(--purple);}
      .object{color:var(--fg)}
      .toolbar {
        position: absolute;
        top:5px;
        right:6px;
        display:flex;
        padding:2px;
        align-items: center;
      }`,Mn]}render(){return v`
      <div class = "json-tree" >
        <div class='toolbar'> 
          <button class="toolbar-btn" part="btn btn-fill btn-copy" @click='${e=>{Fo(JSON.stringify(this.data,null,2),e)}}'> Copy </button>
        </div>
        ${this.generateTree(this.data,!0)}
      </div>  
    `}generateTree(e,t=!1){if(e===null)return v`<div class="null" style="display:inline;">null</div>`;if(typeof e=="object"&&!(e instanceof Date)){const r=Array.isArray(e)?"array":"pure_object";return Object.keys(e).length===0?v`${Array.isArray(e)?"[ ],":"{ },"}`:v`
      <div class="open-bracket expanded ${r==="array"?"array":"object"} " @click="${this.toggleExpand}" > ${r==="array"?"[":"{"}</div>
      <div class="inside-bracket">
        ${Object.keys(e).map((n,o,a)=>v`
          <div class="item"> 
            ${r==="pure_object"?v`"${n}":`:""}
            ${this.generateTree(e[n],o===a.length-1)}
          </div>`)}
      </div>
      <div class="close-bracket">${r==="array"?"]":"}"}${t?"":","}</div>
      `}return typeof e=="string"||e instanceof Date?v`<span class="${typeof e}">"${e}"</span>${t?"":","}`:v`<span class="${typeof e}">${e}</span>${t?"":","}`}toggleExpand(e){const t=e.target;t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array")?"[":"{")}});const s0=x`

*, *:before, *:after { box-sizing: border-box; }

.tr {
  display: flex;
  flex: none;
  width: 100%;
  box-sizing: content-box;
  border-bottom: 1px dotted transparent;
}
.td {
  display: block;
  flex: 0 0 auto;
}
.key {
  font-family: var(--font-mono);
  white-space: normal;
  word-break: break-all;
}

.collapsed-descr .key{
  overflow:hidden;
}

.key-descr {
  font-family:var(--font-regular);
  color:var(--light-fg);
  flex-shrink: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  display: none;
}
.expanded-descr .key-descr{
  max-height:auto;
  overflow:hidden;
  display: none;
}
.collapsed-descr .tr {
  max-height:20px;
}

.tr.xxx-of{
  border-top: 1px dotted var(--primary-color);
}

.xxx-of-key {
  font-size: calc(var(--font-size-small) - 2px); 
  font-weight:bold; 
  background-color:var(--primary-color); 
  color:var(--primary-color-invert); 
  border-radius:2px;
  line-height:calc(var(--font-size-small) + 6px);
  padding:0px 5px; 
  margin-bottom:1px; 
  display:inline-block;
}

.xxx-of-descr {
    font-family: var(--font-regular);
    color: var(--primary-color);
    font-size: calc(var(--font-size-small) - 1px);
    margin-left: 2px;
}

.stri, .string, .uri, .url, .byte, .bina, .date, .pass, .ipv4, .ipv4, .uuid, .emai, .host {color:var(--green);}
.inte, .numb, .number, .int6, .int3, .floa, .doub, .deci .blue {color:var(--blue);}
.null {color:var(--red);}
.bool, .boolean{color:var(--orange)}
.enum {color:var(--purple)}
.recu {color:var(--brown)}
.toolbar {
  display:flex;
  width:100%;
  padding: 2px 0;
  color:var(--primary-color);
}
.toolbar-item {
  cursor:pointer;
  padding:5px 0;
  margin:0 2px;
}
.schema-root-type {
  cursor:auto;
  color:var(--fg2);
  font-weight: bold;
  text-transform: uppercase;
}
.schema-root-type.xxx-of {
  display:none;
}
.toolbar-item:first-of-type { margin:0 2px 0 0;}

@media only screen and (min-width: 500px) {
  .key-descr {
    display: block;
  }
  .expanded-descr .key-descr{
    display: block;
  }
}
`;customElements.define("schema-tree",class extends b{static get properties(){return{data:{type:Object},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[Wr,s0,Ls,x`
      .tree {
        font-size:var(--font-size-small);
        text-align: left;
        direction: ltr;
        line-height:calc(var(--font-size-small) + 6px);
      }
      .tree .tr:hover{
        background-color:var(--hover-color);
      }
      .collapsed-descr .tr {
        max-height:calc(var(--font-size-small) + 8px);
      }
      .collapsed-descr .m-markdown-small p {
        line-height:calc(var(--font-size-small) + 6px);
      }

      .tree .key {
        max-width: 300px;
      }
      .key.deprecated .key-label {
        text-decoration: line-through; 
      }

      .open-bracket{
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .close-bracket{
        display:inline-block;
        font-family: var(--font-mono);
      }
      .tr.collapsed + .inside-bracket,
      .tr.collapsed + .inside-bracket + .close-bracket{
        display:none;
      }
      .inside-bracket.object,
      .inside-bracket.array {
        border-left: 1px dotted var(--border-color);
      }
      .inside-bracket.xxx-of {
        padding:5px 0px;
        border-style: dotted;
        border-width: 0 0 1px 0;
        border-color:var(--primary-color);
      }`,Mn]}render(){var e,t,r;return v`
      <div class="tree ${this.schemaDescriptionExpanded==="true"?"expanded-descr":"collapsed-descr"}">
        <div class="toolbar">
          <div class="toolbar-item schema-root-type ${((e=this.data)===null||e===void 0?void 0:e["::type"])||""} "> ${((t=this.data)===null||t===void 0?void 0:t["::type"])||""} </div>
          ${this.allowSchemaDescriptionExpandToggle==="true"?v`
              <div style="flex:1"></div>
              <div class='toolbar-item' @click='${()=>{this.schemaDescriptionExpanded=this.schemaDescriptionExpanded==="true"?"false":"true"}}'> 
                ${this.schemaDescriptionExpanded==="true"?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        ${(r=this.data)!==null&&r!==void 0&&r["::description"]?v`<span class='m-markdown'> ${Ze(xe(this.data["::description"]||""))}</span>`:""}
        ${this.data?v`
            ${this.generateTree(this.data["::type"]==="array"?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"]||"")}`:v`<span class='mono-font' style='color:var(--red)'> Schema not found </span>`}
      </div>  
    `}generateTree(e,t="object",r="",n="",o="",a=0,i=0,s=""){var l;if(this.schemaHideReadOnly==="true"&&(t==="array"&&s==="readonly"||e["::readwrite"]==="readonly")||this.schemaHideWriteOnly==="true"&&(t==="array"&&s==="writeonly"||e["::readwrite"]==="writeonly"))return;if(!e)return v`<div class="null" style="display:inline;">null</div>`;if(Object.keys(e).length===0)return v`<span class="key object">${n}:{ }</span>`;let c="",d="";if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))c=n.replace("::","").replace("~"," ");else if(n.startsWith("::OPTION")){const R=n.split("~");c=R[1],d=R[2]}else c=n;const u=400-12*i;let f="",m="";const $=(l=e["::type"])!==null&&l!==void 0&&l.startsWith("xxx-of")?a:a+1,C=t==="xxx-of-option"||e["::type"]==="xxx-of-option"||n.startsWith("::OPTION")?i:i+1;if(e["::type"]==="object")t==="array"?(f=a<this.schemaExpandLevel?v`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{</span>`:v`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{...}]</span>`,m="}]"):(f=a<this.schemaExpandLevel?v`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{</span>`:v`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{...}</span>`,m="}");else if(e["::type"]==="array")if(t==="array"){const R=r!=="object"?r:"";f=a<this.schemaExpandLevel?v`<span class="open-bracket array-of-array" data-array-type="${R}" @click="${this.toggleObjectExpand}">[[ ${R} </span>`:v`<span class="open-bracket array-of-array"  data-array-type="${R}" @click="${this.toggleObjectExpand}">[[...]]</span>`,m="]]"}else f=a<this.schemaExpandLevel?v`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[</span>`:v`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[...]</span>`,m="]";var E;if(typeof e=="object")return v`
        <div class="tr ${a<this.schemaExpandLevel||(E=e["::type"])!==null&&E!==void 0&&E.startsWith("xxx-of")?"expanded":"collapsed"} ${e["::type"]||"no-type-info"}">
          <div class="td key ${e["::deprecated"]?"deprecated":""}" style='min-width:${u}px'>
            ${e["::type"]==="xxx-of-option"||e["::type"]==="xxx-of-array"||n.startsWith("::OPTION")?v`<span class='key-label xxx-of-key'>${c}</span><span class="xxx-of-descr">${d}</span>`:c==="::props"||c==="::ARRAY~OF"?"":a>0?v`<span class="key-label" title="${s==="readonly"?"Read-Only":s==="writeonly"?"Write-Only":""}">
                      ${c.replace(/\*$/,"")}${c.endsWith("*")?v`<span style="color:var(--red)">*</span>`:""}${s==="readonly"?v` 🆁`:s==="writeonly"?v` 🆆`:s}:
                    </span>`:""}
            ${e["::type"]==="xxx-of"&&t==="array"?v`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
            ${f}
          </div>
          <div class='td key-descr m-markdown-small'>${Ze(xe(o||""))}</div>
        </div>
        <div class='inside-bracket ${e["::type"]||"no-type-info"}' style='padding-left:${e["::type"]==="xxx-of-option"||e["::type"]==="xxx-of-array"?0:12}px;'>
          ${Array.isArray(e)&&e[0]?v`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",$,C,e[0]["::readwrite"])}`:v`
              ${Object.keys(e).map(R=>v`
                ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite"].includes(R)?e[R]["::type"]==="array"||e[R]["::type"]==="object"?v`${this.generateTree(e[R]["::type"]==="array"?e[R]["::props"]:e[R],e[R]["::type"],e[R]["::array-type"]||"",R,e[R]["::description"],$,C,e[R]["::readwrite"]?e[R]["::readwrite"]:"")}`:"":v`${this.generateTree(e[R]["::type"]==="array"?e[R]["::props"]:e[R],e[R]["::type"],e[R]["::array-type"]||"",R,e[R]["::description"],$,C,e[R]["::readwrite"]?e[R]["::readwrite"]:"")}`}
              `)}
            `}
        </div>
        ${e["::type"]&&e["::type"].includes("xxx-of")?"":v`<div class='close-bracket'> ${m} </div>`}
      `;const[h,D,F,M,Z,N,Q,T,L]=e.split("~|~");if(D==="\u{1F181}"&&this.schemaHideReadOnly==="true"||D==="\u{1F186}"&&this.schemaHideWriteOnly==="true")return;const U=h.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase();let j="",k="";return t==="array"?s==="readonly"?(j="\u{1F181}",k="Read-Only"):s==="writeonly"&&(j="\u{1F186}",k="Write-Only"):D==="\u{1F181}"?(j="\u{1F181}",k="Read-Only"):D==="\u{1F186}"&&(j="\u{1F186}",k="Write-Only"),v`
      <div class = "tr primitive">
        <div class="td key ${L}" style='min-width:${u}px' >
          ${c.endsWith("*")?v`<span class="key-label">${c.substring(0,c.length-1)}</span><span style='color:var(--red);'>*</span>:`:n.startsWith("::OPTION")?v`<span class='key-label xxx-of-key'>${c}</span><span class="xxx-of-descr">${d}</span>`:v`<span class="key-label">${c}:</span>`}
          <span class="${U}" title="${k}"> 
            ${t==="array"?`[${h}]`:`${h}`}
            ${j}
          </span>
        </div>
        <div class='td key-descr'>
          ${t==="array"?v`<span class="m-markdown-small">${Ze(xe(o))}</span>`:""}
          ${F?v`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Constraints: </span>${F}</div>`:""}
          ${M?v`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Default: </span>${M}</div>`:""}
          ${Z?v`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Allowed: </span>${Z}</div>`:""}
          ${N?v`<div style='display:inline-block; line-break: anywhere; margin-right:8px'><span class='bold-text'>Pattern: </span>${N}</div>`:""}
          ${Q?v`<span class="m-markdown-small">${Ze(xe(`${T?`**${T}:**`:""} ${Q}`))}</span>`:""}
        </div>
      </div>
    `}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{...}]":e.target.classList.contains("array-of-array")?"[[...]]":e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{":e.target.classList.contains("array-of-array")?`[[ ${e.target.dataset.arrayType}`:e.target.classList.contains("object")?"{":"[")}}),customElements.define("tag-input",class extends b{render(){let e="";return Array.isArray(this.value)&&(e=v`${this.value.filter(t=>t.trim()!=="").map(t=>v`<span class='tag'>${t}</span>`)}`),v`
      <div class='tags' tabindex="0">
        ${e}
        <input type="text" class='editor' @paste="${t=>this.afterPaste(t)}" @keydown="${this.afterKeyDown}" @blur="${this.onBlur}" placeholder="${this.placeholder||""}">
      </div>
    `}static get properties(){return{placeholder:{type:String},value:{type:Array,attribute:"value"}}}attributeChangedCallback(e,t,r){e==="value"&&r&&t!==r&&(this.value=r.split(",").filter(n=>n.trim()!=="")),super.attributeChangedCallback(e,t,r)}afterPaste(e){const t=(e.clipboardData||window.clipboardData).getData("Text"),r=t?t.split(",").filter(n=>n.trim()!==""):"";r&&(Array.isArray(this.value)?this.value=[...this.value,...r]:this.value=r),e.preventDefault()}afterKeyDown(e){e.keyCode===13?(e.stopPropagation(),e.preventDefault(),e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")):e.keyCode===8&&e.target.value.length===0&&Array.isArray(this.value)&&this.value.length>0&&(this.value.splice(-1),this.value=[...this.value])}onBlur(e){e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")}static get styles(){return[x`
      .tags{
        display:flex;
        flex-wrap: wrap;
        outline: none;
        padding:0;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        cursor:text;
        overflow:hidden;
        background:var(--input-bg);
      }
      .tag, .editor {
        padding:3px;
        margin:2px;
      }
      .tag{
        border:1px solid var(--border-color);
        background-color:var(--bg3);
        color:var(--fg3);
        border-radius:var(--border-radius);
        word-break: break-all;
        font-size: var(--font-size-small);
      }
      .tag:hover ~ #cursor {
        display: block;
      }
      .editor{
        flex:1;
        border:1px solid transparent;
        color:var(--fg);
        min-width:60px;
        outline: none;
        line-height: inherit;
        font-family:inherit;
        background:transparent;
        font-size: calc(var(--font-size-small) + 1px);
      }
      .editor::placeholder {
        color: var(--placeholder-color);
        opacity:1;
      }
    `]}}),customElements.define("api-request",class extends b{constructor(){super(),this.responseMessage="",this.responseStatus="success",this.responseHeaders="",this.responseText="",this.responseUrl="",this.curlSyntax="",this.activeResponseTab="response",this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.activeParameterSchemaTabs={}}static get properties(){return{serverUrl:{type:String,attribute:"server-url"},servers:{type:Array},method:{type:String},path:{type:String},security:{type:Array},parameters:{type:Array},request_body:{type:Object},api_keys:{type:Array},parser:{type:Object},accept:{type:String},callback:{type:String},responseMessage:{type:String,attribute:!1},responseText:{type:String,attribute:!1},responseHeaders:{type:String,attribute:!1},responseStatus:{type:String,attribute:!1},responseUrl:{type:String,attribute:!1},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},allowTry:{type:String,attribute:"allow-try"},renderStyle:{type:String,attribute:"render-style"},schemaStyle:{type:String,attribute:"schema-style"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},activeParameterSchemaTabs:{type:Object,converter:{fromAttribute:e=>JSON.parse(e),toAttribute:e=>JSON.stringify(e)},attribute:"active-parameter-schema-tabs"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},fetchCredentials:{type:String,attribute:"fetch-credentials"},activeResponseTab:{type:String},selectedRequestBodyType:{type:String,attribute:"selected-request-body-type"},selectedRequestBodyExample:{type:String,attribute:"selected-request-body-example"}}}static get styles(){return[Po,qn,Wr,jo,Ls,Ro,Za,x`
        *, *:before, *:after { box-sizing: border-box; }
    
        .read-mode {
          margin-top: 24px;
        }
        .param-name,
        .param-type {
          margin: 1px 0;
          text-align: right;
          line-height: var(--font-size-small);
        }
        .param-name{
          color: var(--fg); 
          font-family: var(--font-mono);
        }
        .param-name.deprecated { 
          text-decoration: line-through;
        }
        .param-type{
          color: var(--light-fg); 
          font-family: var(--font-regular);
        }
        .param-constraint{
          min-width:100px;
        }
        .param-constraint:empty{
          display:none;
        }
        .top-gap{margin-top:24px;}

        .textarea {
          min-height:220px; 
          padding:5px;
          resize:vertical;
          direction: ltr;
        }
        .example:first-child {
          margin-top: -9px;
        }

        .response-message{
          font-weight:bold;
          text-overflow: ellipsis;
        }
        .response-message.error {
          color:var(--red);
        }
        .response-message.success {
          color:var(--blue);
        }

        .file-input-container {
          align-items:flex-end;
        }
        .file-input-container .input-set:first-child .file-input-remove-btn{
          visibility:hidden;
        }

        .file-input-remove-btn{
          font-size:16px;
          color:var(--red);
          outline: none;
          border: none;
          background:none;
          cursor:pointer;
        }

        .v-tab-btn {
          font-size: var(--smal-font-size);
          height:24px; 
          border:none; 
          background:none; 
          opacity: 0.3;
          cursor: pointer;
          padding: 4px 8px;
        }
        .v-tab-btn.active {
          font-weight: bold;
          background: var(--bg);
          opacity: 1;
        }

        @media only screen and (min-width: 768px) {
          .textarea {
            padding:8px;
          }
        }

        @media only screen and (max-width: 470px) {
          .hide-in-small-screen {
            display:none;
          }
        }
      `,Mn]}render(){return v`
    <div class="col regular-font request-panel ${"read focused".includes(this.renderStyle)||this.callback==="true"?"read-mode":"view-mode"}">
      <div class=" ${this.callback==="true"?"tiny-title":"req-res-title"} "> 
        ${this.callback==="true"?"CALLBACK REQUEST":"REQUEST"}
      </div>
      <div>
        ${Rs([this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("path"))}
        ${Rs([this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("query"))}
        ${this.requestBodyTemplate()}
        ${Rs([this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("header"))}
        ${Rs([this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("cookie"))}
        ${this.allowTry==="false"?"":v`${this.apiCallTemplate()}`}
      </div>  
    </div>
    `}updated(e){this.renderStyle==="focused"&&(e.size===1&&e.has("activeSchemaTab")||[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach(t=>{const r=this.shadowRoot.querySelector(`textarea[data-pname='hidden-${t.dataset.pname}']`);r&&(t.value=r.value)}))}exampleListTemplate(e,t,r=[]){return v`
    ${r.length>0?v`<span style="font-weight:bold">Example: </span>
        ${r.map((n,o)=>{var a,i;return v`
          ${o===0?"":"\u2503"}
          ${t==="array"?"[":""}
          <a part="anchor anchor-param-example" class = "${this.allowTry==="true"?"":"inactive-link"}"
            data-example-type="${t==="array"?t:"string"}"
            data-example = "${n.value&&Array.isArray(n.value)?(a=n.value)===null||a===void 0?void 0:a.join("~|~"):n.value||""}"
            @click="${s=>{const l=s.target.closest("table").querySelector(`[data-pname="${e}"]`);l&&(s.target.dataset.exampleType==="array"?l.value=s.target.dataset.example.split("~|~"):l.value=s.target.dataset.example)}}"
          >${n.value&&Array.isArray(n.value)?(i=n.value)===null||i===void 0?void 0:i.join(", "):n.value||""}</a>
          ${t==="array"?"] ":""}
        `})}
      `:""}`}inputParametersTemplate(e){const t=this.parameters?this.parameters.filter(o=>o.in===e):[];if(t.length===0)return"";let r="";e==="path"?r="PATH PARAMETERS":e==="query"?r="QUERY-STRING PARAMETERS":e==="header"?r="REQUEST HEADERS":e==="cookie"&&(r="COOKIES");const n=[];for(const o of t){const[a,i,s]=fR(o);if(!a)continue;const l=pn(a);if(!l)continue;const c=Et(a,{});let d="form",u=!0,f=!1;e==="query"&&(o.style&&"form spaceDelimited pipeDelimited".includes(o.style)?d=o.style:i&&(d=i),typeof o.explode=="boolean"&&(u=o.explode),typeof o.allowReserved=="boolean"&&(f=o.allowReserved));const m=n0(o.examples||Nu(o.example)||Nu(s?.example)||s?.examples||l.examples||Nu(l.example),l.type);m.exampleVal||l.type!=="object"||(m.exampleVal=Oo(a,i||"json","","",!0,!0,"text",!1)[0].exampleValue);const $="read focused".includes(this.renderStyle)?"200px":"160px";n.push(v`
      <tr> 
        <td rowspan="${this.allowTry==="true"?"1":"2"}" style="width:${$}; min-width:100px;">
          <div class="param-name">
            ${o.required?v`<span style='color:var(--red)'>*</span>`:""}${o.name}
          </div>
          <div class="param-type">
            ${l.type==="array"?`${l.arrayType}`:`${l.format?l.format:l.type}`}
          </div>
        </td>  
        ${this.allowTry==="true"?v`
            <td style="min-width:100px;">
              ${l.type==="array"?v`
                  <tag-input class="request-param" 
                    style = "width:100%" 
                    data-ptype = "${e}"
                    data-pname = "${o.name}"
                    data-example = "${Array.isArray(m.exampleVal)?m.exampleVal.join("~|~"):m.exampleVal}"
                    data-param-serialize-style = "${d}"
                    data-param-serialize-explode = "${u}"
                    data-param-allow-reserved = "${f}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(m.exampleVal),m.exampleVal}"
                  >
                  </tag-input>`:l.type==="object"?v`
                    <div class="tab-panel col" style="border-width:0 0 1px 0;">
                      <div class="tab-buttons row" @click="${C=>{if(C.target.tagName.toLowerCase()==="button"){const E={...this.activeParameterSchemaTabs};E[o.name]=C.target.dataset.tab,this.activeParameterSchemaTabs=E}}}">
                        <button class="tab-btn ${this.activeParameterSchemaTabs[o.name]==="example"?"active":""}" data-tab = 'example'>EXAMPLE </button>
                        <button class="tab-btn ${this.activeParameterSchemaTabs[o.name]!=="example"?"active":""}" data-tab = 'schema'>SCHEMA</button>
                      </div>
                      ${this.activeParameterSchemaTabs[o.name]==="example"?v`<div class="tab-content col">
                          <textarea 
                            class = "textarea request-param"
                            part = "textarea textarea-param"
                            data-ptype = "${e}-object"
                            data-pname = "${o.name}"
                            data-example = "${m.exampleVal}"
                            data-param-serialize-style = "${d}"
                            data-param-serialize-explode = "${u}"
                            data-param-allow-reserved = "${f}"
                            spellcheck = "false"
                            .textContent = "${this.fillRequestFieldsWithExample==="true"?m.exampleVal:""}"
                            style = "resize:vertical; width:100%; height: ${"read focused".includes(this.renderStyle)?"180px":"120px"};"
                          ></textarea>
                        </div>`:v`
                          <div class="tab-content col">            
                            <schema-tree
                              class = 'json'
                              style = 'display: block'
                              .data = '${c}'
                              schema-expand-level = "${this.schemaExpandLevel}"
                              schema-description-expanded = "${this.schemaDescriptionExpanded}"
                              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                              schema-hide-read-only = "${this.schemaHideReadOnly.includes(this.method)}"
                              schema-hide-write-only = "false"
                            > </schema-tree>
                          </div>`}
                    </div>`:v`
                    <input type="${l.format==="password"?"password":"text"}" spellcheck="false" style="width:100%" 
                      class="request-param"
                      part="textbox textbox-param"
                      data-ptype="${e}"
                      data-pname="${o.name}" 
                      data-example="${Array.isArray(m.exampleVal)?m.exampleVal.join("~|~"):m.exampleVal}"
                      data-param-allow-reserved = "${f}"
                      data-array="false"
                      .value="${dR(this.fillRequestFieldsWithExample==="true"?m.exampleVal:"")}"
                    />`}
            </td>`:""}
        ${l.default||l.constrain||l.allowedValues||l.pattern?v`
            <td colspan="${this.allowTry==="true"?"1":"2"}">
              <div class="param-constraint">
                ${l.default?v`<span style="font-weight:bold">Default: </span>${l.default}<br/>`:""}
                ${l.pattern?v`<span style="font-weight:bold">Pattern: </span>${l.pattern}<br/>`:""}
                ${l.constrain?v`${l.constrain}<br/>`:""}
                ${l.allowedValues&&l.allowedValues.split("\u2503").map((C,E)=>v`
                  ${E>0?"\u2503":v`<span style="font-weight:bold">Allowed: </span>`}
                  ${v`
                    <a part="anchor anchor-param-constraint" class = "${this.allowTry==="true"?"":"inactive-link"}"
                      data-type="${l.type==="array"?l.type:"string"}"
                      data-enum="${C.trim()}"
                      @click="${h=>{const D=h.target.closest("table").querySelector(`[data-pname="${o.name}"]`);D&&(h.target.dataset.type==="array"?D.value=[h.target.dataset.enum]:D.value=h.target.dataset.enum)}}"
                    >${C}</a>`}`)}
              </div>
            </td>`:""}
      </tr>
      <tr>
        ${this.allowTry==="true"?v`<td style="border:none"> </td>`:""}
        <td colspan="2" style="border:none;">
          <span class="m-markdown-small">${Ze(xe(o.description||""))}</span>
          ${this.exampleListTemplate.call(this,o.name,l.type,m.exampleList)}
        </td>
      </tr>
    `)}return v`
    <div class="table-title top-gap">${r}</div>
    <div style="display:block; overflow-x:auto; max-width:100%;">
      <table class="m-table" style="width:100%; word-break:break-word;">
        ${n}
      </table>
    </div>`}resetRequestBodySelection(){this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.clearResponseData()}onSelectExample(e){this.selectedRequestBodyExample=e.target.value;const t=e.target;window.setTimeout(r=>{const n=r.closest(".example-panel").querySelector(".request-body-param");r.closest(".example-panel").querySelector(".request-body-param-user-input").value=n.innerText},0,t)}onMimeTypeChange(e){this.selectedRequestBodyType=e.target.value;const t=e.target;this.selectedRequestBodyExample="",window.setTimeout(r=>{const n=r.closest(".request-body-container").querySelector(".request-body-param");n&&(r.closest(".request-body-container").querySelector(".request-body-param-user-input").value=n.innerText)},0,t)}requestBodyTemplate(){if(!this.request_body||Object.keys(this.request_body).length===0)return"";let e="",t="",r="",n="",o="";const a=[],{content:i}=this.request_body;for(const s in i)a.push({mimeType:s,schema:i[s].schema,example:i[s].example,examples:i[s].examples}),this.selectedRequestBodyType||(this.selectedRequestBodyType=s);return e=a.length===1?"":v`
        <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change = '${s=>this.onMimeTypeChange(s)}'>
          ${a.map(s=>v`
            <option value = '${s.mimeType}' ?selected = '${s.mimeType===this.selectedRequestBodyType}'>
              ${s.mimeType}
            </option> `)}
        </select>
      `,a.forEach(s=>{let l,c=[];if(this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose"))s.mimeType===this.selectedRequestBodyType&&(c=Oo(s.schema,s.mimeType,s.examples,s.example,!1,!0,"text",!1),this.selectedRequestBodyExample||(this.selectedRequestBodyExample=c.length>0?c[0].exampleId:""),o=v`
            ${o}
            <div class = 'example-panel border-top pad-top-8'>
              ${c.length===1?"":v`
                  <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change='${d=>this.onSelectExample(d)}'>
                    ${c.map(d=>v`<option value="${d.exampleId}" ?selected=${d.exampleId===this.selectedRequestBodyExample} > 
                      ${d.exampleSummary.length>80?d.exampleId:d.exampleSummary?d.exampleSummary:d.exampleId} 
                    </option>`)}
                  </select>
                `}
              ${c.filter(d=>d.exampleId===this.selectedRequestBodyExample).map(d=>v`
                <div class="example ${d.exampleId===this.selectedRequestBodyExample?"example-selected":""}" data-example = '${d.exampleId}'>
                  ${d.exampleSummary&&d.exampleSummary.length>80?v`<div style="padding: 4px 0"> ${d.exampleSummary} </div>`:""}
                  ${d.exampleDescription?v`<div class="m-markdown-small" style="padding: 4px 0"> ${Ze(xe(d.exampleDescription||""))} </div>`:""}
                  <!-- This pre(hidden) is to store the original example value, this will remain unchanged when users switches from one example to another, its is used to populate the editable textarea -->
                  <pre 
                    class = "textarea is-hidden request-body-param ${s.mimeType.substring(s.mimeType.indexOf("/")+1)}" 
                    spellcheck = "false"
                    data-ptype = "${s.mimeType}" 
                    style="width:100%; resize:vertical; display:none"
                  >${d.exampleFormat==="text"?d.exampleValue:JSON.stringify(d.exampleValue,null,2)}</pre>

                  <!-- this textarea is for user to edit the example -->
                  <textarea 
                    class = "textarea request-body-param-user-input"
                    part = "textarea textarea-param"
                    spellcheck = "false"
                    data-ptype = "${s.mimeType}" 
                    data-example = "${d.exampleFormat==="text"?d.exampleValue:JSON.stringify(d.exampleValue,null,2)}"
                    data-example-format = "${d.exampleFormat}"
                    style="width:100%; resize:vertical;"
                    .textContent = "${this.fillRequestFieldsWithExample==="true"?d.exampleFormat==="text"?d.exampleValue:JSON.stringify(d.exampleValue,null,2):""}"
                  ></textarea>
                </div>  
              `)}

            </div>
          `);else if(this.selectedRequestBodyType.includes("form-urlencoded")||this.selectedRequestBodyType.includes("form-data")){if(s.mimeType===this.selectedRequestBodyType){const d=Oo(s.schema,s.mimeType,s.examples,s.example,!1,!0,"text",!1);s.schema&&(r=this.formDataTemplate(s.schema,s.mimeType,d[0]?d[0].exampleValue:""))}}else/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(this.selectedRequestBodyType)&&s.mimeType===this.selectedRequestBodyType&&(t=v`
            <div class = "small-font-size bold-text row">
              <input type="file" part="file-input" style="max-width:100%" class="request-body-param-file" data-ptype="${s.mimeType}" spellcheck="false" />
            </div>  
          `);(s.mimeType.includes("json")||s.mimeType.includes("xml")||s.mimeType.includes("text")||this.selectedRequestBodyType.includes("jose"))&&(l=Et(s.schema,{}),this.schemaStyle==="table"?n=v`
            ${n}
            <schema-table
              class = '${s.mimeType.substring(s.mimeType.indexOf("/")+1)}'
              style = 'display: ${this.selectedRequestBodyType===s.mimeType?"block":"none"};'
              .data = '${l}'
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
              schema-hide-read-only = "${this.schemaHideReadOnly.includes(this.method)}"
              schema-hide-write-only = "false"
            > </schema-table>
          `:this.schemaStyle==="tree"&&(n=v`
            ${n}
            <schema-tree
              class = "${s.mimeType.substring(s.mimeType.indexOf("/")+1)}"
              style = "display: ${this.selectedRequestBodyType===s.mimeType?"block":"none"};"
              .data = "${l}"
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
              schema-hide-read-only = "true"
              schema-hide-write-only = "false"
            > </schema-tree>
          `))}),v`
      <div class='request-body-container' data-selected-request-body-type="${this.selectedRequestBodyType}">
        <div class="table-title top-gap row">
          REQUEST BODY ${this.request_body.required?v`<span class="mono-font" style='color:var(--red)'>*</span>`:""} 
          <span style = "font-weight:normal; margin-left:5px"> ${this.selectedRequestBodyType}</span>
          <span style="flex:1"></span>
          ${e}
        </div>
        ${this.request_body.description?v`<div class="m-markdown" style="margin-bottom:12px">${Ze(xe(this.request_body.description))}</div>`:""}
        
        ${this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose")?v`
            <div class="tab-panel col" style="border-width:0 0 1px 0;">
              <div class="tab-buttons row" @click="${s=>{s.target.tagName.toLowerCase()==="button"&&(this.activeSchemaTab=s.target.dataset.tab)}}">
                <button class="tab-btn ${this.activeSchemaTab==="example"?"active":""}" data-tab = 'example'>EXAMPLE</button>
                <button class="tab-btn ${this.activeSchemaTab!=="example"?"active":""}" data-tab = 'schema'>SCHEMA</button>
              </div>
              ${this.activeSchemaTab==="example"?v`<div class="tab-content col"> ${o}</div>`:v`<div class="tab-content col"> ${n}</div>`}
            </div>`:v`  
            ${t}
            ${r}`}
      </div>  
    `}formDataParamAsObjectTemplate(e,t,r){var n;const o=Et(t,{}),a=Oo(t,"json",t.examples,t.example,!1,!0,"text",!1);return v`
      <div class="tab-panel row" style="min-height:220px; border-left: 6px solid var(--light-border-color); align-items: stretch;">
        <div style="width:24px; background-color:var(--light-border-color)">
          <div class="row" style="flex-direction:row-reverse; width:160px; height:24px; transform:rotate(270deg) translateX(-160px); transform-origin:top left; display:block;" @click="${i=>{if(i.target.classList.contains("v-tab-btn")){const{tab:s}=i.target.dataset;if(s){const l=i.target.closest(".tab-panel"),c=l.querySelector(`.v-tab-btn[data-tab="${s}"]`),d=[...l.querySelectorAll(`.v-tab-btn:not([data-tab="${s}"])`)],u=l.querySelector(`.tab-content[data-tab="${s}"]`),f=[...l.querySelectorAll(`.tab-content:not([data-tab="${s}"])`)];c.classList.add("active"),u.style.display="block",d.forEach(m=>{m.classList.remove("active")}),f.forEach(m=>{m.style.display="none"})}}i.target.tagName.toLowerCase()==="button"&&(this.activeSchemaTab=i.target.dataset.tab)}}">
          <button class="v-tab-btn ${this.activeSchemaTab==="example"?"active":""}" data-tab = 'example'>EXAMPLE</button>
          <button class="v-tab-btn ${this.activeSchemaTab!=="example"?"active":""}" data-tab = 'schema'>SCHEMA</button>
        </div>
      </div>
      ${v`
        <div class="tab-content col" data-tab = 'example' style="display:${this.activeSchemaTab==="example"?"block":"none"}; padding-left:5px; width:100%"> 
          <textarea 
            class = "textarea"
            part = "textarea textarea-param"
            style = "width:100%; border:none; resize:vertical;" 
            data-array = "false" 
            data-ptype = "${r.includes("form-urlencode")?"form-urlencode":"form-data"}"
            data-pname = "${e}"
            data-example = "${((n=a[0])===null||n===void 0?void 0:n.exampleValue)||""}"
            .textContent = "${this.fillRequestFieldsWithExample==="true"?a[0].exampleValue:""}"
            spellcheck = "false"
          ></textarea>
          <!-- This textarea(hidden) is to store the original example value, in focused mode on navbar change it is used to update the example text -->
          <textarea data-pname = "hidden-${e}" data-ptype = "${r.includes("form-urlencode")?"hidden-form-urlencode":"hidden-form-data"}" class="is-hidden" style="display:none">${a[0].exampleValue}</textarea>
        </div>`}
      ${v`
        <div class="tab-content col" data-tab = 'schema' style="display:${this.activeSchemaTab!=="example"?"block":"none"}; padding-left:5px; width:100%;"> 
          <schema-tree
            .data = '${o}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
          > </schema-tree>
        </div>`}
      </div>
    `}formDataTemplate(e,t,r=""){const n=[];if(e.properties){for(const i in e.properties){var o,a;const s=e.properties[i];if(s.readOnly)continue;const l=s.examples||s.example||"",c=s.type,d=pn(s),u="read focused".includes(this.renderStyle)?"200px":"160px",f=n0(d.examples||d.example,d.type);n.push(v`
        <tr> 
          <td style="width:${u}; min-width:100px;">
            <div class="param-name ${s.deprecated?"deprecated":""}">
              ${i}${(o=e.required)!==null&&o!==void 0&&o.includes(i)||s.required?v`<span style='color:var(--red);'>*</span>`:""}
            </div>
            <div class="param-type">${d.type}</div>
          </td>  
          <td 
            style="${c==="object"?"width:100%; padding:0;":this.allowTry==="true"?"":"display:none;"} min-width:100px;" 
            colspan="${c==="object"?2:1}">
            ${c==="array"?((a=s.items)===null||a===void 0?void 0:a.format)==="binary"?v`
                <div class="file-input-container col" style='align-items:flex-end;' @click="${m=>this.onAddRemoveFileInput(m,i,t)}">
                  <div class='input-set row'>
                    <input 
                      type = "file"
                      part = "file-input"
                      style = "width:100%" 
                      data-pname = "${i}" 
                      data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                      data-array = "false" 
                      data-file-array = "true" 
                    />
                    <button class="file-input-remove-btn"> &#x2715; </button>
                  </div>  
                  <button class="m-btn primary file-input-add-btn" part="btn btn-fill" style="margin:2px 25px 0 0; padding:2px 6px;">ADD</button>
                </div>  
                `:v`
                  <tag-input
                    style = "width:100%" 
                    data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                    data-pname = "${i}"
                    data-example = "${Array.isArray(l)?l.join("~|~"):l}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(l)?Array.isArray(l[0])?l[0]:[l[0]]:[l]}"
                  >
                  </tag-input>
                `:v`
                ${c==="object"?this.formDataParamAsObjectTemplate.call(this,i,s,t):v`
                    ${this.allowTry==="true"?v`<input
                          .value = "${this.fillRequestFieldsWithExample==="true"?f.exampleVal:""}"
                          spellcheck = "false"
                          type = "${s.format==="binary"?"file":s.format==="password"?"password":"text"}"
                          part = "textbox textbox-param"
                          style = "width:100%"
                          data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                          data-pname = "${i}"
                          data-example = "${Array.isArray(l)?l[0]:l}"
                          data-array = "false"
                        />`:""}
                    `}`}
          </td>
          ${c==="object"?"":v`
              <td>
                ${d.default||d.constrain||d.allowedValues||d.pattern?v`
                    <div class="param-constraint">
                      ${d.default?v`<span style="font-weight:bold">Default: </span>${d.default}<br/>`:""}
                      ${d.pattern?v`<span style="font-weight:bold">Pattern: </span>${d.pattern}<br/>`:""}
                      ${d.constrain?v`${d.constrain}<br/>`:""}
                      ${d.allowedValues&&d.allowedValues.split("\u2503").map((m,$)=>v`
                        ${$>0?"\u2503":v`<span style="font-weight:bold">Allowed: </span>`}
                        ${v`
                          <a part="anchor anchor-param-constraint" class = "${this.allowTry==="true"?"":"inactive-link"}"
                            data-type="${d.type==="array"?d.type:"string"}"
                            data-enum="${m.trim()}"
                            @click="${C=>{const E=C.target.closest("table").querySelector(`[data-pname="${i}"]`);E&&(C.target.dataset.type==="array"?E.value=[C.target.dataset.enum]:E.value=C.target.dataset.enum)}}"
                          > 
                            ${m} 
                          </a>`}`)}
                    </div>`:""}
              </td>`}
        </tr>
        ${c==="object"?"":v`
            <tr>
              <td style="border:none"> </td>
              <td colspan="2" style="border:none; margin-top:0; padding:0 5px 8px 5px;"> 
                <span class="m-markdown-small">${Ze(xe(s.description||""))}</span>
                ${this.exampleListTemplate.call(this,i,d.type,f.exampleList)}
              </td>
            </tr>
          `}`)}return v`
        <table style="width:100%;" class="m-table">
          ${n}
        </table>
      `}return v`
      <textarea
        class = "textarea dynamic-form-param ${t}"
        part = "textarea textarea-param"
        spellcheck = "false"
        data-pname="dynamic-form" 
        data-ptype="${t}"
        .textContent = "${r}"
        style="width:100%"
      ></textarea>
      ${e.description?v`<span class="m-markdown-small">${Ze(xe(e.description))}</span>`:""}
    `}apiResponseTabTemplate(){const e=this.responseHeaders.includes("json")?"json":this.responseHeaders.includes("html")||this.responseHeaders.includes("xml")?"html":"";return v`
      <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
        <div class="response-message ${this.responseStatus}">Response Status: ${this.responseMessage}</div>
        <div style="flex:1"></div>
        <button class="m-btn" part="btn btn-outline btn-clear-response" @click="${this.clearResponseData}">CLEAR RESPONSE</button>
      </div>
      <div class="tab-panel col" style="border-width:0 0 1px 0;">
        <div id="tab_buttons" class="tab-buttons row" @click="${t=>{t.target.classList.contains("tab-btn")!==!1&&(this.activeResponseTab=t.target.dataset.tab)}}">
          <button class="tab-btn ${this.activeResponseTab==="response"?"active":""}" data-tab = 'response' > RESPONSE</button>
          <button class="tab-btn ${this.activeResponseTab==="headers"?"active":""}"  data-tab = 'headers' > RESPONSE HEADERS</button>
          <button class="tab-btn ${this.activeResponseTab==="curl"?"active":""}" data-tab = 'curl'>CURL</button>
        </div>
        ${this.responseIsBlob?v`
            <div class="tab-content col" style="flex:1; display:${this.activeResponseTab==="response"?"flex":"none"};">
              <button class="m-btn thin-border mar-top-8" style="width:135px" @click='${t=>{sd(this.responseBlobUrl,this.respContentDisposition)}}' part="btn btn-outline">
                DOWNLOAD
              </button>
              ${this.responseBlobType==="view"?v`<button class="m-btn thin-border mar-top-8" style="width:135px"  @click='${t=>{ld(this.responseBlobUrl)}}' part="btn btn-outline">VIEW (NEW TAB)</button>`:""}
            </div>`:v`
            <div class="tab-content col m-markdown" style="flex:1;display:${this.activeResponseTab==="response"?"flex":"none"};" >
              <button class="toolbar-btn" style="position:absolute; top:12px; right:8px" @click='${t=>{Fo(this.responseText,t)}}' part="btn btn-fill"> Copy </button>
              <pre style="white-space:pre; max-height:400px; overflow:auto">${e?v`<code>${Ze(Pt().highlight(this.responseText,Pt().languages[e],e))}</code>`:`${this.responseText}`}</pre>
            </div>`}
        <div class="tab-content col m-markdown" style="flex:1;display:${this.activeResponseTab==="headers"?"flex":"none"};" >
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${t=>{Fo(this.responseHeaders,t)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${Ze(Pt().highlight(this.responseHeaders,Pt().languages.css,"css"))}</code></pre>
        </div>
        <div class="tab-content col m-markdown" style="flex:1;display:${this.activeResponseTab==="curl"?"flex":"none"};">
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${t=>{Fo(this.curlSyntax.replace(/\\$/,""),t)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${Ze(Pt().highlight(this.curlSyntax.trim().replace(/\\$/,""),Pt().languages.shell,"shell"))}</code></pre>
        </div>
      </div>`}apiCallTemplate(){var e,t;let r="";this.servers&&this.servers.length>0&&(r=v`
        <select style="min-width:100px;" @change='${o=>{this.serverUrl=o.target.value}}'>
          ${this.servers.map(o=>v`<option value = "${o.url}"> ${o.url} - ${o.description} </option>`)}
        </select>
      `);const n=v`
      <div style="display:flex; flex-direction:column;">
        ${r}
        ${this.serverUrl?v`
            <div style="display:flex; align-items:baseline;">
              <div style="font-weight:bold; padding-right:5px;">API Server</div> 
              <span class = "gray-text"> ${this.serverUrl} </span>
            </div>
          `:""}
      </div>  
    `;return v`
    <div style="display:flex; align-items:flex-end; margin:16px 0; font-size:var(--font-size-small);">
      <div class="hide-in-small-screen" style="flex-direction:column; margin:0; width:calc(100% - 60px);">
        <div style="display:flex; flex-direction:row; align-items:center; overflow:hidden;"> 
          ${n}
        </div>
        <div style="display:flex;">
          <div style="font-weight:bold; padding-right:5px;">Authentication</div>
          ${((e=this.security)===null||e===void 0?void 0:e.length)>0?v`
              ${this.api_keys.length>0?v`<div style="color:var(--blue); overflow:hidden;"> 
                    ${this.api_keys.length===1?`${(t=this.api_keys[0])===null||t===void 0?void 0:t.typeDisplay} in ${this.api_keys[0].in}`:`${this.api_keys.length} API keys applied`} 
                  </div>`:v`<div class="gray-text">Required  <span style="color:var(--red)">(None Applied)</span>`}`:v`<span class="gray-text"> Not Required </span>`}
        </div>
      </div>
      ${this.parameters.length>0||this.request_body?v`
            <button class="m-btn thin-border" part="btn btn-outline btn-fill" style="margin-right:5px;" @click="${this.onFillRequestData}" title="Fills with example data (if provided)">
              FILL EXAMPLE
            </button>
            <button class="m-btn thin-border" part="btn btn-outline btn-clear" style="margin-right:5px;" @click="${this.onClearRequestData}">
              CLEAR
            </button>`:""}
      <button class="m-btn primary thin-border" part="btn btn-try" @click="${this.onTryClick}">TRY</button>
    </div>
    ${this.responseMessage===""?"":this.apiResponseTabTemplate()}
    `}async onFillRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach(t=>{t.dataset.example&&(t.tagName.toUpperCase()==="TAG-INPUT"?t.value=t.dataset.example.split("~|~"):t.value=t.dataset.example)})}async onClearRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach(t=>{t.value=""})}async onTryClick(e){var t;const r=e.target;let n,o,a="",i="",s="",l="";const c=(t=this.closest(".expanded-req-resp-container, .req-resp-container"))===null||t===void 0?void 0:t.getElementsByTagName("api-response")[0],d=c?.selectedMimeType,u=e.target.closest(".request-panel"),f=[...u.querySelectorAll("[data-ptype='path']")],m=[...u.querySelectorAll("[data-ptype='query']")],$=[...u.querySelectorAll("[data-ptype='query-object']")],C=[...u.querySelectorAll("[data-ptype='header']")],E=u.querySelector(".request-body-container");n=this.path;const h={method:this.method.toUpperCase()};f.map(j=>{n=n.replace(`{${j.dataset.pname}}`,encodeURIComponent(j.value))});const D=new Map,F=[];m.length>0&&m.forEach(j=>{const k=new URLSearchParams;if(j.dataset.paramAllowReserved==="true"&&F.push(j.dataset.pname),j.dataset.array==="false")j.value!==""&&k.append(j.dataset.pname,j.value);else{const{paramSerializeStyle:R,paramSerializeExplode:te}=j.dataset;let oe=j.value&&Array.isArray(j.value)?j.value:[];oe=Array.isArray(oe)?oe.filter(ge=>ge!==""):[],oe.length>0&&(R==="spaceDelimited"?k.append(j.dataset.pname,oe.join(" ").replace(/^\s|\s$/g,"")):R==="pipeDelimited"?k.append(j.dataset.pname,oe.join("|").replace(/^\||\|$/g,"")):te==="true"?oe.forEach(ge=>{k.append(j.dataset.pname,ge)}):k.append(j.dataset.pname,oe.join(",").replace(/^,|,$/g,"")))}k.toString()&&D.set(j.dataset.pname,k)}),$.length>0&&$.map(j=>{const k=new URLSearchParams;try{let R={};const{paramSerializeStyle:te,paramSerializeExplode:oe}=j.dataset;if(R=Object.assign(R,JSON.parse(j.value.replace(/\s+/g," "))),j.dataset.paramAllowReserved==="true"&&F.push(j.dataset.pname),"json xml".includes(te))te==="json"?k.append(j.dataset.pname,JSON.stringify(R)):te==="xml"&&k.append(j.dataset.pname,Fu(R));else for(const ge in R)typeof R[ge]=="object"?Array.isArray(R[ge])&&(te==="spaceDelimited"?k.append(ge,R[ge].join(" ")):te==="pipeDelimited"?k.append(ge,R[ge].join("|")):oe==="true"?R[ge].forEach(J=>{k.append(ge,J)}):k.append(ge,R[ge])):k.append(ge,R[ge])}catch{console.log("RapiDoc: unable to parse %s into object",j.value)}k.toString()&&D.set(j.dataset.pname,k)});let M="";D.size&&(M="?",D.forEach((j,k)=>{F.includes(k)?(M+=`${k}=`,M+=j.getAll(k).join(`&${k}=`),M+="&"):M+=`${j.toString()}&`}),M=M.slice(0,-1)),n=`${n}${M}`,this.api_keys.filter(j=>j.in==="query").forEach(j=>{n=`${n}${n.includes("?")?"&":"?"}${j.name}=${encodeURIComponent(j.finalKeyValue)}`}),n=`${this.serverUrl.replace(/\/$/,"")}${n}`,n.startsWith("http")===!1?o=new URL(n,window.location.href).href:o=n,a=`curl -X ${this.method.toUpperCase()} "${o}" \\
`;const Z=new Headers;if(d?(Z.append("Accept",d),i+=` -H "Accept: ${d}" \\
`):this.accept&&(Z.append("Accept",this.accept),i+=` -H "Accept: ${this.accept}" \\
`),this.api_keys.filter(j=>j.in==="header").forEach(j=>{Z.append(j.name,j.finalKeyValue),i+=` -H "${j.name}: ${j.finalKeyValue}" \\
`}),C.map(j=>{j.value&&(Z.append(j.dataset.pname,j.value),i+=` -H "${j.dataset.pname}: ${j.value}" \\
`)}),E){const j=E.dataset.selectedRequestBodyType;if(j.includes("form-urlencoded")){const k=u.querySelector("[data-ptype='dynamic-form']");if(k){const R=k.value,te=new URLSearchParams;let oe,ge=!0;if(R)try{oe=JSON.parse(R)}catch(J){ge=!1,console.warn("RapiDoc: Invalid JSON provided",J)}else ge=!1;if(ge){for(const J in oe)te.append(J,JSON.stringify(oe[J]));h.body=te,s=` -d ${te.toString()} \\
`}}else{const R=[...u.querySelectorAll("[data-ptype='form-urlencode']")],te=new URLSearchParams;R.filter(oe=>oe.type!=="file").forEach(oe=>{if(oe.dataset.array==="false")oe.value&&te.append(oe.dataset.pname,oe.value);else{const ge=oe.value&&Array.isArray(oe.value)?oe.value.join(","):"";te.append(oe.dataset.pname,ge)}}),h.body=te,s=` -d ${te.toString()} \\
`}}else if(j.includes("form-data")){const k=new FormData;[...u.querySelectorAll("[data-ptype='form-data']")].forEach(R=>{R.dataset.array==="false"?R.type==="file"&&R.files[0]?(k.append(R.dataset.pname,R.files[0],R.files[0].name),l+=` -F "${R.dataset.pname}=@${R.files[0].name}" \\
`):R.value&&(k.append(R.dataset.pname,R.value),l+=` -F "${R.dataset.pname}=${R.value}" \\
`):R.value&&Array.isArray(R.value)&&(R.value.forEach(te=>{l=`${l} -F "${R.dataset.pname}[]=${te}" \\
`}),k.append(R.dataset.pname,R.value.join(",")))}),h.body=k}else if(/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(j)){const k=u.querySelector(".request-body-param-file");k!=null&&k.files[0]&&(h.body=k.files[0],s=` --data-binary @${k.files[0].name} \\
`)}else if(j.includes("json")||j.includes("xml")||j.includes("text")){const k=u.querySelector(".request-body-param-user-input");if(k!=null&&k.value){if(h.body=k.value,j.includes("json"))try{s=` -d '${JSON.stringify(JSON.parse(k.value))}' \\
`}catch{}s||(s=` -d '${k.value.replace(/'/g,`'"'"'`)}' \\
`)}}j.includes("form-data")||Z.append("Content-Type",j),i+=` -H "Content-Type: ${j}" \\
`}this.responseUrl="",this.responseHeaders=[],this.curlSyntax="",this.responseStatus="success",this.responseIsBlob=!1,this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),this.curlSyntax=`${a}${i}${s}${l}`,this.fetchCredentials&&(h.credentials=this.fetchCredentials);const N=new AbortController,{signal:Q}=N;h.headers=Z;const T=new Request(n,h);let L,U;this.dispatchEvent(new CustomEvent("before-try",{bubbles:!0,composed:!0,detail:{request:T,controller:N}}));try{let j,k,R;r.disabled=!0;const te=performance.now();L=await fetch(T,{signal:Q});const oe=performance.now();U=L.clone(),r.disabled=!1,this.responseMessage=v`${L.statusText?`${L.statusText}:${L.status}`:L.status} <div style="color:var(--light-fg)"> Took ${Math.round(oe-te)} milliseconds </div>`,this.responseUrl=L.url;const ge={};L.headers.forEach((W,le)=>{ge[le]=W,this.responseHeaders=`${this.responseHeaders}${le}: ${W}
`});const J=L.headers.get("content-type");if((await L.clone().text()).length===0)this.responseText="";else if(J){if(J.includes("json"))if(/charset=[^"']+/.test(J)){const W=J.split("charset=")[1],le=await L.arrayBuffer();try{R=new TextDecoder(W).decode(le)}catch{R=new TextDecoder("utf-8").decode(le)}try{k=JSON.parse(R),this.responseText=JSON.stringify(k,null,2)}catch{this.responseText=R}}else k=await L.json(),this.responseText=JSON.stringify(k,null,2);else/^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$|^application\/vnd\./.test(J)?(this.responseIsBlob=!0,this.responseBlobType="download"):/^audio|^image|^video/.test(J)?(this.responseIsBlob=!0,this.responseBlobType="view"):(R=await L.text(),J.includes("xml")&&(this.responseText=function(W){const le=new DOMParser().parseFromString(W,"text/xml"),Se=new DOMParser().parseFromString([`<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
      <xsl:strip-space elements="*"/>
        <xsl:template match="para[content-style][not(text())]">
          <xsl:value-of select="normalize-space(.)"/>
        </xsl:template>
        <xsl:template match="node()|@*">
          <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>
        </xsl:template>
        <xsl:output indent="yes"/>
      </xsl:stylesheet>`].join(`
`),"application/xml"),we=new XSLTProcessor;we.importStylesheet(Se);const Fe=we.transformToDocument(le);return new XMLSerializer().serializeToString(Fe)}(R)),this.responseText=R);if(this.responseIsBlob){const W=L.headers.get("content-disposition");this.respContentDisposition=W?W.split("filename=")[1].replace(/\\"/g,""):"filename",j=await L.blob(),this.responseBlobUrl=URL.createObjectURL(j)}}else R=await L.text(),this.responseText=R;this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{request:T,response:U,responseHeaders:ge,responseBody:k||R||j,responseStatus:U.ok}}))}catch(j){r.disabled=!1,j.name==="AbortError"?(this.dispatchEvent(new CustomEvent("request-aborted",{bubbles:!0,composed:!0,detail:{err:j,request:T}})),this.responseMessage="Request Aborted"):(this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{err:j,request:T}})),this.responseMessage=`${j.message} (CORS or Network Issue)`)}this.requestUpdate()}onAddRemoveFileInput(e,t,r){if(e.target.tagName.toLowerCase()!=="button")return;if(e.target.classList.contains("file-input-remove-btn"))return void e.target.closest(".input-set").remove();const n=e.target.closest(".file-input-container"),o=document.createElement("div");o.setAttribute("class","input-set row");const a=document.createElement("input");a.type="file",a.style="width:200px; margin-top:2px;",a.setAttribute("data-pname",t),a.setAttribute("data-ptype",r.includes("form-urlencode")?"form-urlencode":"form-data"),a.setAttribute("data-array","false"),a.setAttribute("data-file-array","true");const i=document.createElement("button");i.setAttribute("class","file-input-remove-btn"),i.innerHTML="&#x2715;",o.appendChild(a),o.appendChild(i),n.insertBefore(o,e.target)}clearResponseData(){this.responseUrl="",this.responseHeaders="",this.responseText="",this.responseStatus="success",this.responseMessage="",this.responseIsBlob=!1,this.responseBlobType="",this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl="")}disconnectedCallback(){this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),super.disconnectedCallback()}}),customElements.define("schema-table",class extends b{static get properties(){return{schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},data:{type:Object}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[Wr,s0,x`
      .table {
        font-size: var(--font-size-small);
        text-align: left;
        line-height: calc(var(--font-size-small) + 6px);
      }
      .table .tr {
        width: calc(100% - 5px);
        padding: 0 0 0 5px;
        border-bottom: 1px dotted var(--light-border-color);
      }
      .table .td {
        padding: 4px 0;
      }
      .table .key {
        width: 240px;
      }
      .key.deprecated .key-label {
        text-decoration: line-through;
      }

      .table .key-type {
        white-space: normal;
        width: 150px;
      }
      .collapsed-descr .tr {
        max-height: calc(var(--font-size-small) + var(--font-size-small) + 4px);
      }

      .obj-toggle {
        padding: 0 2px;
        border-radius:2px;
        border: 1px solid transparent;
        display: inline-block;
        margin-left: -16px;
        color:var(--primary-color);
        cursor:pointer;
        font-size: calc(var(--font-size-small) + 4px);
        font-family: var(--font-mono);
        background-clip: border-box;
      }
      .obj-toggle:hover {
        border-color: var(--primary-color);
      }
      .tr.expanded + .object-body {
        display:block;
      }
      .tr.collapsed + .object-body {
        display:none;
      }`,Mn]}render(){var e,t,r;return v`
      <div class="table ${this.schemaDescriptionExpanded==="true"?"expanded-descr":"collapsed-descr"}">
        <div class='toolbar'>
          <div class="toolbar-item schema-root-type ${((e=this.data)===null||e===void 0?void 0:e["::type"])||""} "> ${((t=this.data)===null||t===void 0?void 0:t["::type"])||""} </div>
          ${this.allowSchemaDescriptionExpandToggle==="true"?v`
              <div style="flex:1"></div>
              <div class='toolbar-item' @click='${()=>{this.schemaDescriptionExpanded=this.schemaDescriptionExpanded==="true"?"false":"true"}}'> 
                ${this.schemaDescriptionExpanded==="true"?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        ${(r=this.data)!==null&&r!==void 0&&r["::description"]?v`<span class='m-markdown'> ${Ze(xe(this.data["::description"]||""))}</span>`:""}
        <div style = 'border:1px solid var(--light-border-color)'>
          <div style='display:flex; background-color: var(--bg2); padding:8px 4px; border-bottom:1px solid var(--light-border-color);'>
            <div class='key' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Field </div>
            <div class='key-type' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Type </div>
            <div class='key-descr' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Description </div>
          </div>
          ${this.data?v`
              ${this.generateTree(this.data["::type"]==="array"?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"])}`:""}  
        </div>
      </div>  
    `}generateTree(e,t="object",r="",n="",o="",a=0,i=0,s=""){var l,c;if(this.schemaHideReadOnly==="true"&&(t==="array"&&s==="readonly"||e["::readwrite"]==="readonly")||this.schemaHideWriteOnly==="true"&&(t==="array"&&s==="writeonly"||e["::readwrite"]==="writeonly"))return;const d=(l=e["::type"])!==null&&l!==void 0&&l.startsWith("xxx-of")?a:a+1,u=t==="xxx-of-option"||e["::type"]==="xxx-of-option"||n.startsWith("::OPTION")?i:i+1,f=16*u;if(!e)return v`<div class="null" style="display:inline;">null</div>`;if(Object.keys(e).length===0)return v`<span class="td key object" style='padding-left:${f}px'>${n}</span>`;let m="",$="",C=!1;if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))m=n.replace("::","").replace("~"," "),C=!0;else if(n.startsWith("::OPTION")){const k=n.split("~");m=k[1],$=k[2]}else m=n;let E="";if(e["::type"]==="object"?E=t==="array"?"array of object":"object":e["::type"]==="array"&&(E=t==="array"?"array of array "+(r!=="object"?`of ${r}`:""):"array"),typeof e=="object")return v`
        ${d>=0&&n?v`
            <div class='tr ${d<=this.schemaExpandLevel?"expanded":"collapsed"} ${e["::type"]}' data-obj='${m}'>
              <div class="td key ${e["::deprecated"]?"deprecated":""}" style='padding-left:${f}px'>
                ${m||$?v`
                    <span 
                      class='obj-toggle ${d<this.schemaExpandLevel?"expanded":"collapsed"}'
                      data-obj='${m}'
                      @click= ${k=>this.toggleObjectExpand(k,m)} 
                    >
                      ${a<this.schemaExpandLevel?"-":"+"}
                    </span>`:""}
                ${e["::type"]==="xxx-of-option"||e["::type"]==="xxx-of-array"||n.startsWith("::OPTION")?v`<span class="xxx-of-key" style="margin-left:-6px">${m}</span><span class="${C?"xxx-of-key":"xxx-of-descr"}">${$}</span>`:m.endsWith("*")?v`<span class="key-label" style="display:inline-block; margin-left:-6px;"> ${m.substring(0,m.length-1)}</span><span style='color:var(--red);'>*</span>`:v`<span class="key-label" style="display:inline-block; margin-left:-6px;">${m==="::props"?"":m}</span>`}
                ${e["::type"]==="xxx-of"&&t==="array"?v`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
              </div>
              <div class='td key-type' title="${e["::readwrite"]==="readonly"?"Read-Only":e["::readwrite"]==="writeonly"?"Write-Only":""}">
                ${(e["::type"]||"").includes("xxx-of")?"":E}
                ${e["::readwrite"]==="readonly"?" \u{1F181}":e["::readwrite"]==="writeonly"?" \u{1F186}":""}
              </div>
              <div class='td key-descr m-markdown-small' style='line-height:1.7'>${Ze(xe(o||""))}</div>
            </div>`:v`
              ${e["::type"]==="array"&&t==="array"?v`
                  <div class='tr'> 
                    <div class='td key'></div> 
                    <div class='td key-type'>
                      ${r&&r!=="object"?`${t} of ${r}`:t}
                    </div> 
                    <div class='td key-descr'></div> 
                  </div>`:""}
          `}
        <div class='object-body'>
        ${Array.isArray(e)&&e[0]?v`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",d,u,"")}`:v`
            ${Object.keys(e).map(k=>v`
              ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite"].includes(k)?e[k]["::type"]==="array"||e[k]["::type"]==="object"?v`${this.generateTree(e[k]["::type"]==="array"?e[k]["::props"]:e[k],e[k]["::type"],e[k]["::array-type"]||"",k,e[k]["::description"],d,u,e[k]["::readwrite"]?e[k]["::readwrite"]:"")}`:"":v`${this.generateTree(e[k]["::type"]==="array"?e[k]["::props"]:e[k],e[k]["::type"],e[k]["::array-type"]||"",k,e[k]["::description"],d,u,e[k]["::readwrite"]?e[k]["::readwrite"]:"")}`}
            `)}
          `}
        <div>
      `;const[h,D,F,M,Z,N,Q,T,L]=e.split("~|~");if(D==="\u{1F181}"&&this.schemaHideReadOnly==="true"||D==="\u{1F186}"&&this.schemaHideWriteOnly==="true")return;const U=h.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase();let j="";return j=t==="array"?v` 
        <div class='td key-type ${U}' title="${s==="readonly"?"Read-Only":D==="writeonly"?"Write-Only":""}">
          [${h}] ${s==="readonly"?"\u{1F181}":s==="writeonly"?"\u{1F186}":""}
        </div>`:v` 
        <div class='td key-type ${U}' title="${D==="\u{1F181}"?"Read-Only":D==="\u{1F186}"?"Write-Only":""}">
          ${h} ${D}
        </div>`,v`
      <div class = "tr primitive">
        <div class="td key ${L}" style='padding-left:${f}px'>
          ${(c=m)!==null&&c!==void 0&&c.endsWith("*")?v`<span class="key-label">${m.substring(0,m.length-1)}</span><span style='color:var(--red);'>*</span>`:n.startsWith("::OPTION")?v`<span class='xxx-of-key'>${m}</span><span class="xxx-of-descr">${$}</span>`:v`${m?v`<span class="key-label"> ${m}</span>`:v`<span class="xxx-of-descr">${T}</span>`}`}
        </div>
        ${j}
        <div class='td key-descr'>
          ${t==="array"?v`<span class="m-markdown-small">${Ze(xe(o))}</span>`:""}
          ${F?v`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Constraints: </span> ${F}</div>`:""}
          ${M?v`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Default: </span>${M}</div>`:""}
          ${Z?v`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Allowed: </span>${Z}</div>`:""}
          ${N?v`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Pattern: </span>${N}</div>`:""}
          ${Q?v`<span class="m-markdown-small">${Ze(xe(`${T?`**${T}:**`:""} ${Q}`))}</span>`:""}
        </div>
      </div>
    `}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.add("collapsed"),t.classList.remove("expanded"),e.target.innerText="+"):(t.classList.remove("collapsed"),t.classList.add("expanded"),e.target.innerText="-")}});function mR(e){const t=new xe.Renderer;return t.heading=(r,n,o,a)=>`<h${n} class="observe-me" id="${e}--${a.slug(o)}">${r}</h${n}>`,t}function Du(e,t=""){var r,n,o;const a=new Set;for(const u in e.responses)for(const f in(i=e.responses[u])===null||i===void 0?void 0:i.content){var i;a.add(f.trim())}const s=[...a].join(", "),l=this.resolvedSpec.securitySchemes.filter(u=>{var f;return u.finalKeyValue&&((f=e.security)===null||f===void 0?void 0:f.some(m=>u.securitySchemeId in m))})||[],c=this.resolvedSpec.securitySchemes.find(u=>u.securitySchemeId===dn&&u.value!=="-");c&&l.push(c);const d=e.xCodeSamples?t0.call(this,e.xCodeSamples):"";return v`
    ${this.renderStyle==="read"?v`<div class='divider' part="operation-divider"></div>`:""}
    <div class='expanded-endpoint-body observe-me ${e.method} ${e.deprecated?"deprecated":""} ' part="section-operation ${e.elementId}" id='${e.elementId}'>
    ${this.renderStyle==="focused"&&t!=="General \u2982"?v`<h3 class="upper" style="font-weight:bold"> ${t} </h3>`:""}
    ${e.deprecated?v`<div class="bold-text red-text"> DEPRECATED </div>`:""}
    ${v`
      ${e.xBadges&&((r=e.xBadges)===null||r===void 0?void 0:r.length)>0?v`
          <div style="display:flex; flex-wrap:wrap; margin-bottom: -24px; font-size: var(--font-size-small);">
            ${e.xBadges.map(u=>v`<span style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${u.color}, var(--input-bg)); color:var(--${u.color}); border:1px solid var(--${u.color})">${u.label}</span>`)}
          </div>
          `:""}
      <h2> ${e.shortSummary||`${e.method.toUpperCase()} ${e.path}`}</h2>
      ${e.isWebhook?v`<span style="color:var(--primary-color); font-weight:bold; font-size: var(--font-size-regular);"> WEBHOOK </span>`:v`
          <div class='mono-font part="section-operation-url" regular-font-size' style='text-align:left; direction:ltr; padding: 8px 0; color:var(--fg3)'> 
            <span part="label-operation-method" class='regular-font upper method-fg bold-text ${e.method}'>${e.method}</span> 
            <span part="label-operation-path">${e.path}</span>
          </div>
        `}
      <slot name="${e.elementId}"></slot>`}
    ${e.description?v`<div class="m-markdown"> ${Ze(xe(e.description))}</div>`:""}
    ${e0.call(this,e.security)}
    ${d}
    <div class='expanded-req-resp-container'>
      <api-request
        class = "${this.renderStyle}-mode"
        style = "width:100%;"
        method = "${e.method}"
        path = "${e.path}"
        .security = "${e.security}"
        .parameters = "${e.parameters}"
        .request_body = "${e.requestBody}"
        .api_keys = "${l}"
        .servers = "${e.servers}"
        server-url = "${((n=e.servers)===null||n===void 0||(o=n[0])===null||o===void 0?void 0:o.url)||this.selectedServer.computedUrl}"
        fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
        allow-try = "${this.allowTry}"
        accept = "${s}"
        render-style="${this.renderStyle}" 
        schema-style = "${this.schemaStyle}"
        active-schema-tab = "${this.defaultSchemaTab}"
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "${this.schemaHideReadOnly}"
        fetch-credentials = "${this.fetchCredentials}"
        exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
          file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
          anchor:anchor, anchor-param-example:anchor-param-example"
      > </api-request>

      ${e.callbacks?r0.call(this,e.callbacks):""}

      <api-response
        class = "${this.renderStyle}-mode"
        style = "width:100%;"
        .responses = "${e.responses}"
        render-style = "${this.renderStyle}"
        schema-style = "${this.schemaStyle}"
        active-schema-tab = "${this.defaultSchemaTab}"
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        selected-status = "${Object.keys(e.responses||{})[0]||""}"
        exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy"
      > </api-response>
    </div>
  </div>
  `}function gR(){return this.resolvedSpec?v`
  ${this.resolvedSpec.tags.map(e=>v`
    <section id="${e.elementId}" part="section-tag" class="regular-font section-gap--read-mode observe-me" style="border-top:1px solid var(--primary-color);">
      <div class="title tag" part="label-tag-title">${e.name}</div>
      <slot name="${e.elementId}"></slot>
      <div class="regular-font-size">
      ${Ze(`
          <div class="m-markdown regular-font">
          ${xe(e.description||"",this.infoDescriptionHeadingsInNavBar==="true"?{renderer:mR(e.elementId)}:void 0)}
        </div>`)}
      </div>
    </section>
    <section class='regular-font section-gap--read-mode' part="section-operations-in-tag">
      ${e.paths.map(t=>Du.call(this,t,"BBB"))}
    </section>
    `)}
`:""}function yR(e){return v`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400;"> Schema </span></div>
  ${this.schemaStyle==="table"?v`
      <schema-table
        render-style = '${this.renderStyle}'
        .data = '${Et(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
      > </schema-tree> `:v`
      <schema-tree
        render-style = '${this.renderStyle}'
        .data = '${Et(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
      > </schema-tree>`}
  </div>`}function vR(e,t){return e.id.indexOf("schemas-")!==-1?yR.call(this,e):v`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    ${v`
      <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400"> ${t} </span> </div>
      ${e.component?v`
      <div class='mono-font regular-font-size' style='padding: 8px 0; color:var(--fg2)'> 
        <json-tree class="border tree" render-style='${this.renderStyle}' .data="${e.component}"> </json-tree>
      </div>`:""}
    `}
  </div>
  `}function bR(){return this.resolvedSpec?v`
  ${this.resolvedSpec.components.map(e=>v`
    <div id="cmp--${e.name.toLowerCase()}" class='regular-font section-gap--read-mode observe-me' style="border-top:1px solid var(--primary-color);">
      <div class="title tag">${e.name}</div>
      <div class="regular-font-size">
        ${Ze(`<div class='m-markdown regular-font'>${xe(e.description?e.description:"")}</div>`)}
      </div>
    </div>
    <div class='regular-font section-gap--read-mode'>
      ${e.subComponents.filter(t=>t.expanded!==!1).map(t=>vR.call(this,t,e.name))}
    </div>
    `)}
`:""}function xR(){const e=new xe.Renderer;return e.heading=(t,r,n,o)=>`<h${r} class="observe-me" id="overview--${o.slug(n)}">${t}</h${r}>`,e}function Bs(){var e,t,r,n;return v`
    <section id="overview" part="section-overview"
      class="observe-me ${this.renderStyle==="view"?"section-gap":"section-gap--read-mode"}">
      ${(e=this.resolvedSpec)!==null&&e!==void 0&&e.info?v`
          <div id="api-title" part="label-overview-title" style="font-size:32px">
            ${this.resolvedSpec.info.title}
            ${this.resolvedSpec.info.version?v`
              <span style = 'font-size:var(--font-size-small);font-weight:bold'>
                ${this.resolvedSpec.info.version}
              </span>`:""}
          </div>
          <div id="api-info" style="font-size:calc(var(--font-size-regular) - 1px); margin-top:8px;">
            ${(t=this.resolvedSpec.info.contact)!==null&&t!==void 0&&t.email?v`<span>${this.resolvedSpec.info.contact.name||"Email"}: 
                <a href="mailto:${this.resolvedSpec.info.contact.email}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.email}</a>
              </span>`:""}
            ${(r=this.resolvedSpec.info.contact)!==null&&r!==void 0&&r.url?v`<span>URL: <a href="${this.resolvedSpec.info.contact.url}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.url}</a></span>`:""}
            ${this.resolvedSpec.info.license?v`<span>License: 
                ${this.resolvedSpec.info.license.url?v`<a href="${this.resolvedSpec.info.license.url}" part="anchor anchor-overview">${this.resolvedSpec.info.license.name}</a>`:this.resolvedSpec.info.license.name} </span>`:""}
            ${this.resolvedSpec.info.termsOfService?v`<span><a href="${this.resolvedSpec.info.termsOfService}" part="anchor anchor-overview">Terms of Service</a></span>`:""}
            ${this.specUrl&&this.allowSpecFileDownload==="true"?v`
                <div style="display:flex; margin:12px 0; gap:8px; justify-content: start;">
                  <button class="m-btn thin-border" style="width:170px" part="btn btn-outline" @click='${o=>{sd(this.specUrl,"openapi-spec")}}'>Download OpenAPI spec</button>
                  ${(n=this.specUrl)!==null&&n!==void 0&&n.trim().toLowerCase().endsWith("json")?v`<button class="m-btn thin-border" style="width:200px" part="btn btn-outline" @click='${o=>{ld(this.specUrl)}}'>View OpenAPI spec (New Tab)</button>`:""}
                </div>`:""}
          </div>
          <slot name="overview"></slot>
          <div id="api-description">
          ${this.resolvedSpec.info.description?v`${Ze(`
                <div class="m-markdown regular-font">
                ${xe(this.resolvedSpec.info.description,this.infoDescriptionHeadingsInNavBar==="true"?{renderer:xR()}:void 0)}
              </div>`)}`:""}
          </div>
        `:""}
    </section>
  `}function l0(e){var t;const r=(t=this.resolvedSpec)===null||t===void 0?void 0:t.servers.find(n=>n.url===e);return!!r&&(this.selectedServer=r,this.requestUpdate(),this.dispatchEvent(new CustomEvent("api-server-change",{bubbles:!0,composed:!0,detail:{selectedServer:r}})),!0)}function c0(e,t){const r=[...e.currentTarget.closest("table").querySelectorAll("input, select")];let n=t.url;r.forEach(o=>{const a=new RegExp(`{${o.dataset.var}}`,"g");n=n.replace(a,o.value)}),t.computedUrl=n,this.requestUpdate()}function wR(){return this.selectedServer&&this.selectedServer.variables?v`
    <div class="table-title"> SERVER VARIABLES</div>
    <table class='m-table'>
      ${Object.entries(this.selectedServer.variables).map(e=>v`
        <tr>
          <td style="vertical-align: middle;" >${e[0]}</td>
          <td>
            ${e[1].enum?v`
            <select
              data-var = "${e[0]}"
              @input = ${t=>{c0.call(this,t,this.selectedServer)}}
            >
            ${Object.entries(e[1].enum).map(t=>e[1].default===t[1]?v`
              <option
                selected
                label = ${t[1]}
                value = ${t[1]}
              />`:v`
              <option
                label = ${t[1]}
                value = ${t[1]}
              />`)}
            </select>`:v`
            <input
              type = "text"
              part="textbox textbox-server-var"
              spellcheck = "false"
              data-var = "${e[0]}"
              value = "${e[1].default}"
              @input = ${t=>{c0.call(this,t,this.selectedServer)}}
            />`}
          </td>
        </tr>
        ${e[1].description?v`<tr><td colspan="2" style="border:none"><span class="m-markdown-small"> ${Ze(xe(e[1].description))} </span></td></tr>`:""}
      `)}
    </table>
    `:""}function p0(){var e,t,r;return!this.resolvedSpec||this.resolvedSpec.specLoadError?"":v`
  <section id = 'servers' part="section-servers" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class='regular-font observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap"}'>
    <div class = 'sub-title'>API SERVER</div>
    <div class = 'mono-font' style='margin: 12px 0; font-size:calc(var(--font-size-small) + 1px);'>
      ${this.resolvedSpec.servers&&((e=this.resolvedSpec.servers)===null||e===void 0?void 0:e.length)!==0?v`
          ${(t=this.resolvedSpec)===null||t===void 0?void 0:t.servers.map((n,o)=>v`
            <input type = 'radio'
              name = 'api_server'
              id = 'srvr-opt-${o}'
              value = '${n.url}'
              @change = ${()=>{l0.call(this,n.url)}}
              .checked = '${this.selectedServer.url===n.url}'
              style = 'margin:4px 0; cursor:pointer'
            />
              <label style='cursor:pointer' for='srvr-opt-${o}'>
                ${n.url} ${n.description?v`- <span class='regular-font'>${n.description} </span>`:""}
              </label>
            <br/>
          `)}
      `:""}
      <div class="table-title primary-text" part="label-selected-server"> SELECTED: ${((r=this.selectedServer)===null||r===void 0?void 0:r.computedUrl)||"none"}</div>
    </div>
    <slot name="servers"></slot>
    ${wR.call(this)}
  </section>`}function u0(e,t="toggle"){const r=e?.closest(".nav-bar-tag-and-paths");if(r){const n=r.classList.contains("expanded");!n||t!=="toggle"&&t!=="collapse"?n||t!=="toggle"&&t!=="expand"||r.classList.replace("collapsed","expanded"):r.classList.replace("expanded","collapsed")}}function d0(e){u0(e.target,"toggle")}function h0(e,t="expand-all"){(function(r,n="expand-all"){const o=[...r.querySelectorAll(".nav-bar-tag-and-paths")];n==="expand-all"?o.map(a=>{a.classList.replace("collapsed","expanded")}):o.map(a=>{a.classList.replace("expanded","collapsed")})})(e.target.closest(".nav-scroll"),t)}function $R(){return!this.resolvedSpec||this.resolvedSpec.specLoadError?v`
      <nav class='nav-bar' part="section-navbar">
        <slot name="nav-logo" class="logo"></slot>
      </nav>
    `:v`
  <nav class='nav-bar ${this.renderStyle}' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    ${this.allowSearch==="false"&&this.allowAdvancedSearch==="false"?"":v`
        <div style="display:flex; flex-direction:row; justify-content:center; align-items:center; padding:8px 24px 12px 24px; ${this.allowAdvancedSearch==="false"?"border-bottom: 1px solid var(--nav-hover-bg-color)":""}">
          ${this.allowSearch==="false"?"":v`
              <div style="display:flex; flex:1; line-height:22px;">
                <input id="nav-bar-search" 
                  part = "textbox textbox-nav-filter"
                  style = "width:100%; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
                  type = "text"
                  placeholder = "Filter" 
                  @change = "${this.onSearchChange}"  
                  spellcheck = "false" 
                >
                <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
              </div>  
              ${this.matchPaths?v`
                  <div @click = '${this.onClearSearch}' style='margin-left:5px; cursor:pointer; align-self:center; color:var(--nav-text-color)' class='small-font-size primary-text bold-text'> CLEAR </div>`:""}
            `}
          ${this.allowAdvancedSearch==="false"||this.matchPaths?"":v`
              <button class="m-btn primary" part="btn btn-fill btn-search" style="margin-left:5px;" @click="${this.onShowSearchModalClicked}">
                Search
              </button>
            `}
        </div>
      `}
    ${v`<nav class='nav-scroll' part="section-navbar-scroll">
      ${this.showInfo!=="false"&&this.resolvedSpec.info?v`
          ${this.infoDescriptionHeadingsInNavBar==="true"?v`
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?v`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${e=>this.scrollToEventTarget(e,!1)}' > Overview </div>`:""}
              <div class="overview-headers">
                ${this.resolvedSpec.infoDescriptionHeaders.map(e=>v`
                  <div 
                    class='nav-bar-h${e.depth}' 
                    id="link-overview--${new xe.Slugger().slug(e.text)}"  
                    data-content-id='overview--${new xe.Slugger().slug(e.text)}' 
                    @click='${t=>this.scrollToEventTarget(t,!1)}'
                  >
                    ${e.text}
                  </div>`)}
              </div>
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?v`<hr style='border-top: 1px solid var(--nav-hover-bg-color); border-width:1px 0 0 0; margin: 15px 0 0 0'/>`:""}
            `:v`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${e=>this.scrollToEventTarget(e,!1)}'> Overview </div>`}
        `:""}
    
      ${this.allowServerSelection==="false"?"":v`<div class='nav-bar-info' id='link-servers' data-content-id='servers' @click = '${e=>this.scrollToEventTarget(e,!1)}'> API Servers </div>`}
      ${this.allowAuthentication!=="false"&&this.resolvedSpec.securitySchemes?v`<div class='nav-bar-info' id='link-auth' data-content-id='auth' @click = '${e=>this.scrollToEventTarget(e,!1)}'> Authentication </div>`:""}

      <div id='link-operations-top' class='nav-bar-section operations' data-content-id='operations-top' @click = '${e=>this.scrollToEventTarget(e,!1)}'>
        <div style="font-size:16px; display:flex; margin-left:10px;">
          ${this.renderStyle==="focused"?v`
              <div @click="${e=>{h0.call(this,e,"expand-all")}}" title="Expand all" style="transform: rotate(90deg); cursor:pointer; margin-right:10px;">▸</div>
              <div @click="${e=>{h0.call(this,e,"collapse-all")}}" title="Collapse all" style="transform: rotate(270deg); cursor:pointer;">▸</div>`:""}  
        </div>
        <div class='nav-bar-section-title'> OPERATIONS </div>
      </div>

      <!-- TAGS AND PATHS-->
      ${this.resolvedSpec.tags.filter(e=>e.paths.filter(t=>Bo(this.matchPaths,t,this.matchType)).length).map(e=>v`
          <div class='nav-bar-tag-and-paths ${e.expanded?"expanded":"collapsed"}'>
            ${e.name==="General \u2982"?v`<hr style="border:none; border-top: 1px dotted var(--nav-text-color); opacity:0.3; margin:-1px 0 0 0;"/>`:v`
                <div 
                  class='nav-bar-tag' 
                  id="link-${e.elementId}" 
                  data-content-id='${e.elementId}'
                  data-first-path-id='${e.firstPathId}'
                  @click='${t=>{this.renderStyle==="focused"&&this.onNavTagClick==="expand-collapse"?d0.call(this,t):this.scrollToEventTarget(t,!1)}}'
                >
                  <div>${e.name}</div>
                  <div class="nav-bar-tag-icon" @click="${t=>{this.renderStyle==="focused"&&this.onNavTagClick==="show-description"&&d0.call(this,t)}}">
                  </div>
                </div>
              `}
            ${this.infoDescriptionHeadingsInNavBar==="true"?v`
                ${this.renderStyle==="focused"&&this.onNavTagClick==="expand-collapse"?"":v`
                    <div class='tag-headers'>
                      ${e.headers.map(t=>v`
                      <div 
                        class='nav-bar-h${t.depth}' 
                        id="link-${e.elementId}--${new xe.Slugger().slug(t.text)}"  
                        data-content-id='${e.elementId}--${new xe.Slugger().slug(t.text)}' 
                        @click='${r=>this.scrollToEventTarget(r,!1)}'
                      > ${t.text}</div>`)}
                    </div>`}`:""}

            
            <div class='nav-bar-paths-under-tag'>
              <!-- Paths in each tag (endpoints) -->
              ${e.paths.filter(t=>!this.matchPaths||Bo(this.matchPaths,t,this.matchType)).map(t=>v`
              <div 
                class='nav-bar-path
                ${this.usePathInNavBar==="true"?"small-font":""}'
                data-content-id='${t.elementId}'
                id='link-${t.elementId}'
                @click = '${r=>{this.scrollToEventTarget(r,!1)}}'
              >
                <span style = "${t.deprecated?"filter:opacity(0.5)":""}">
                  ${t.isWebhook?v`<span style="font-weight:bold; margin-right:8px; font-size: calc(var(--font-size-small) - 2px)">WEBHOOK</span>`:""}
                  ${this.usePathInNavBar==="true"?v`<span class='mono-font'>${t.method.toUpperCase()} ${t.path}</span>`:t.summary||t.shortSummary}
                </span>
              </div>`)}
            </div>
          </div>
        `)}

      <!-- COMPONENTS -->
      ${this.resolvedSpec.components&&this.showComponents==="true"&&this.renderStyle==="focused"?v`
          <div id='link-components' class='nav-bar-section components'>
            <div></div>
            <div class='nav-bar-section-title'>COMPONENTS</div>
          </div>
          ${this.resolvedSpec.components.map(e=>e.subComponents.length?v`
              <div class='nav-bar-tag' 
                data-content-id='cmp--${e.name.toLowerCase()}' 
                id='link-cmp--${e.name.toLowerCase()}' 
                @click='${t=>this.scrollToEventTarget(t,!1)}'>
                ${e.name}
              </div>
              ${e.subComponents.filter(t=>t.expanded!==!1).map(t=>v`
                <div class='nav-bar-path' data-content-id='cmp--${t.id}' id='link-cmp--${t.id}' @click='${r=>this.scrollToEventTarget(r,!1)}'>
                  <span> ${t.name} </span>
                </div>`)}`:"")}`:""}
    </nav>`}
</nav>
`}function SR(e){const t=new xe.Renderer;return t.heading=(r,n,o,a)=>`<h${n} class="observe-me" id="${e}--${a.slug(o)}">${r}</h${n}>`,t}function Ds(e){return v`
    <div class='regular-font section-gap--focused-mode' part="section-operations-in-tag">
      ${e}
    </div>`}function f0(){var e;if(this.showInfo==="true")return Ds(Bs.call(this));const t=this.resolvedSpec.tags[0],r=(e=this.resolvedSpec.tags[0])===null||e===void 0?void 0:e.paths[0];return Ds(t&&r?Du.call(this,r,t.name):"")}function kR(e){return v`
    <h1 id="${e.elementId}">${e.name}</h1>
    ${this.onNavTagClick==="show-description"&&e.description?v`
        <div class="m-markdown">
          ${Ze(`
            <div class="m-markdown regular-font">
              ${xe(e.description||"",this.infoDescriptionHeadingsInNavBar==="true"?{renderer:SR(e.elementId)}:void 0)}
            </div>`)}
        </div>`:""}
  `}function AR(){if(!this.focusedElementId||!this.resolvedSpec)return;const e=this.focusedElementId;let t,r=null,n=null,o=0;if(e.startsWith("overview")&&this.showInfo==="true")t=Bs.call(this);else if(e==="auth"&&this.allowAuthentication==="true")t=Xb.call(this);else if(e==="servers"&&this.allowServerSelection==="true")t=p0.call(this);else if(e==="operations-top")t=v`
    <div id="operations-top" class="observe-me">
      <slot name="operations-top"></slot>
    </div>`;else if(e.startsWith("cmp--")&&this.showComponents==="true")t=bR.call(this);else if(e.startsWith("tag--")){const a=e.indexOf("--",4)>0?e.substring(0,e.indexOf("--",5)):e;n=this.resolvedSpec.tags.find(i=>i.elementId===a),t=n?Ds.call(this,kR.call(this,n)):f0.call(this)}else{for(o=0;o<this.resolvedSpec.tags.length&&(n=this.resolvedSpec.tags[o],r=this.resolvedSpec.tags[o].paths.find(a=>`${a.elementId}`===e),!r);o+=1);r?(u0(this.shadowRoot.getElementById(`link-${e}`),"expand"),t=Ds.call(this,Du.call(this,r,n.name))):t=f0.call(this)}return t}function ER(e){if(e.expanded)e.expanded=!1,this.updateRoute==="true"&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${this.routePrefix==="#"?"":`${this.routePrefix}`}`);else if(e.expanded=!0,this.updateRoute==="true"){const t=`${this.routePrefix||"#"}${e.elementId}`;window.location.hash!==t&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${t}`)}this.requestUpdate()}function OR(e,t="expand-all"){const r=[...e.querySelectorAll(".section-tag")];t==="expand-all"?r.map(n=>{n.classList.replace("collapsed","expanded")}):r.map(n=>{n.classList.replace("expanded","collapsed")})}function m0(e,t="expand-all"){OR.call(this,e.target.closest(".operations-root"),t)}function g0(e,t=!1){return v`
  <summary @click="${r=>{ER.call(this,e,r)}}" class='endpoint-head ${e.method} ${e.deprecated?"deprecated":""} ${t||e.expanded?"expanded":"collapsed"}'>
    <div class="method ${e.method} ${e.deprecated?"deprecated":""}"> ${e.method} </div> 
    <div class="path ${e.deprecated?"deprecated":""}"> 
      ${e.path} 
      ${e.isWebhook?v`<span style="font-family: var(--font-regular); font-size: var(--); font-size: var(--font-size-small); color:var(--primary-color); margin-left: 16px"> Webhook</span>`:""}
    </div>
    ${e.deprecated?v`
        <span style="font-size:var(--font-size-small); text-transform:uppercase; font-weight:bold; color:var(--red); margin:2px 0 0 5px;"> 
          deprecated 
        </span>`:""}
    ${this.showSummaryWhenCollapsed?v`
        <div class="only-large-screen" style="min-width:60px; flex:1"></div>
        <div class="descr">${e.summary||e.shortSummary} </div>`:""}
  </summary>
  `}function y0(e){var t;const r=new Set;for(const l in e.responses)for(const c in(n=e.responses[l])===null||n===void 0?void 0:n.content){var n;r.add(c.trim())}const o=[...r].join(", "),a=this.resolvedSpec.securitySchemes.filter(l=>{var c;return l.finalKeyValue&&((c=e.security)===null||c===void 0?void 0:c.some(d=>l.securitySchemeId in d))})||[],i=this.resolvedSpec.securitySchemes.find(l=>l.securitySchemeId===dn&&l.value!=="-");i&&a.push(i);const s=e.xCodeSamples?t0(e.xCodeSamples):"";return v`
  <div class='endpoint-body ${e.method} ${e.deprecated?"deprecated":""}'>
    <div class="summary">
      ${e.summary?v`<div class="title">${e.summary}<div>`:e.shortSummary!==e.description?v`<div class="title">${e.shortSummary}</div>`:""}
      ${e.xBadges&&((t=e.xBadges)===null||t===void 0?void 0:t.length)>0?v`
          <div style="display:flex; flex-wrap:wrap;font-size: var(--font-size-small);">
            ${e.xBadges.map(l=>v`<span style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${l.color}, var(--input-bg)); color:var(--${l.color}); border:1px solid var(--${l.color})">${l.label}</span>`)}
          </div>
          `:""}

      ${e.description?v`<div class="m-markdown"> ${Ze(xe(e.description))}</div>`:""}
      <slot name="${e.elementId}"></slot>
      ${e0.call(this,e.security)}
      ${s}
    </div>  
    <div class='req-resp-container'> 
      <div style="display:flex; flex-direction:column" class="view-mode-request ${this.layout}-layout">
        <api-request
          class = "${this.renderStyle}-mode ${this.layout}-layout"
          style = "width:100%;"
          method = "${e.method}", 
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${a}"
          .servers = "${e.servers}" 
          server-url = "${e.servers&&e.servers.length>0?e.servers[0].url:this.selectedServer.computedUrl}" 
          active-schema-tab = "${this.defaultSchemaTab}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          accept = "${o}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}" 
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example"
        > </api-request>

          ${e.callbacks?r0.call(this,e.callbacks):""}
      </div>  

      <api-response
        class = "${this.renderStyle}-mode"
        style = "width:100%;"
        .responses="${e.responses}"
        active-schema-tab = "${this.defaultSchemaTab}" 
        render-style="${this.renderStyle}" 
        schema-style="${this.schemaStyle}"
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        selected-status = "${Object.keys(e.responses||{})[0]||""}"
        exportparts = 
        "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, anchor:anchor, anchor-param-example:anchor-param-example, btn-clear-resp:btn-clear-resp"
      > </api-response>
    </div>
  </div>`}function _R(e=!0,t=!0,r=!1){return this.resolvedSpec?v`
    ${e?v`
        <div style="display:flex; justify-content:flex-end;"> 
          <span @click="${n=>m0(n,"expand-all")}" style="color:var(--primary-color); cursor:pointer;">
            Expand all
          </span> 
          &nbsp;|&nbsp; 
          <span @click="${n=>m0(n,"collapse-all")}" style="color:var(--primary-color); cursor:pointer;" >
            Collapse all
          </span> 
          &nbsp; sections
        </div>`:""}
    ${this.resolvedSpec.tags.map(n=>v`
      ${t?v` 
          <div class='regular-font section-gap section-tag ${n.expanded?"expanded":"collapsed"}'> 
            <div class='section-tag-header' @click="${()=>{n.expanded=!n.expanded,this.requestUpdate()}}">
              <div id='${n.elementId}' class="sub-title tag" style="color:var(--primary-color)">${n.name}</div>
            </div>
            <div class='section-tag-body'>
              <slot name="${n.elementId}"></slot>
              <div class="regular-font regular-font-size m-markdown" style="padding-bottom:12px">
                ${Ze(xe(n.description||""))}
              </div>
              ${n.paths.filter(o=>!this.matchPaths||Bo(this.matchPaths,o,this.matchType)).map(o=>v`
                <section id='${o.elementId}' class='m-endpoint regular-font ${o.method} ${r||o.expanded?"expanded":"collapsed"}'>
                  ${g0.call(this,o,r)}      
                  ${r||o.expanded?y0.call(this,o):""}
                </section>`)}
            </div>
          </div>`:v`
          <div class='section-tag-body'>
          ${n.paths.filter(o=>!this.matchPaths||Bo(this.matchPaths,o,this.matchType)).map(o=>v`
            <section id='${o.elementId}' class='m-endpoint regular-font ${o.method} ${r||o.expanded?"expanded":"collapsed"}'>
              ${g0.call(this,o,r)}      
              ${r||o.expanded?y0.call(this,o):""}
            </section>`)}
          </div>
        `}
  `)}`:""}function zs(){return v`
  <header class="row header regular-font" part="section-header" style="padding:8px 4px 8px 4px;min-height:48px;">
    <div class="only-large-screen-flex" style="align-items: center;">
      <slot name="logo" class="logo" part="section-logo">
        ${e="height:36px;width:36px;margin-left:5px",v`
  <div style=${e}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 511 512">
      <path d="M351 411a202 202 0 01-350 0 203 203 0 01333-24 203 203 0 0117 24zm0 0" fill="#adc165"/>
      <path d="M334 387a202 202 0 01-216-69 202 202 0 01216 69zm78 32H85a8 8 0 01-8-8 8 8 0 018-8h327a8 8 0 017 8 8 8 0 01-7 8zm0 0" fill="#99aa52"/>
      <path d="M374 338l-5 30a202 202 0 01-248-248 203 203 0 01253 218zm0 0" fill="#ffc73b"/>
      <path d="M374 338a202 202 0 01-100-197 203 203 0 01100 197zm38 81l-6-2-231-231a8 8 0 0111-11l231 230a8 8 0 01-5 14zm0 0" fill="#efb025"/>
      <path d="M311 175c0 75 40 140 101 175a202 202 0 000-350 202 202 0 00-101 175zm0 0" fill="#ff903e"/>
      <path d="M412 419a8 8 0 01-8-8V85a8 8 0 0115 0v326a8 8 0 01-7 8zm0 0" fill="#e87425"/>
    </svg>
  </div>    
`}
        <!-- m-logo style="height:36px;width:36px;margin-left:5px"></m-logo -->
      </slot>  
      <div class="header-title" part="label-header-title">${this.headingText}</div>
    </div>  
    <div style="margin: 0px 8px;display:flex;flex:1">
      ${this.allowSpecUrlLoad==="false"?"":v`
          <input id="spec-url" 
            type="text" 
            style="font-size:var(--font-size-small)" 
            class="header-input mono-font"
            part="textbox textbox-spec-url" 
            placeholder="Spec URL" 
            value="${this.specUrl||""}" 
            @change="${this.onSepcUrlChange}" 
            spellcheck="false"
          >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div> 
        `} 
      ${this.allowSpecFileLoad==="false"?"":v`
          <input id="spec-file" 
            part = "file-input"
            type="file" 
            style="display:none" 
            value="${this.specFile||""}" 
            @change="${this.onSepcFileChange}" 
            spellcheck="false"
           >
          <button class="m-btn primary only-large-screen" style="margin-left:10px;" part="btn btn-fill" @click="${this.onFileLoadClick}"> LOCAL JSON FILE </button>
        `}
      <slot name="header"></slot>
      ${this.allowSearch==="false"||"read focused".includes(this.renderStyle)?"":v`  
          <input id="search" class="header-input" type="text" part="textbox textbox-header-filter" placeholder="Filter" @change="${this.onSearchChange}" style="max-width:130px;margin-left:10px;" spellcheck="false" >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
        `}
      
      ${this.allowAdvancedSearch==="false"||"read focused".includes(this.renderStyle)?"":v`
          <button class="m-btn primary only-large-screen" part="btn btn-fill btn-search" style="margin-left:10px;" @click="${this.onShowSearchModalClicked}">
            Search
          </button>
        `}
    </div>
    </header>`;var e}customElements.define("api-response",class extends b{constructor(){super(),this.selectedStatus="",this.headersForEachRespStatus={},this.mimeResponsesForEachStatus={},this.activeSchemaTab="schema"}static get properties(){return{callback:{type:String},responses:{type:Object},parser:{type:Object},schemaStyle:{type:String,attribute:"schema-style"},renderStyle:{type:String,attribute:"render-style"},selectedStatus:{type:String,attribute:"selected-status"},selectedMimeType:{type:String,attribute:"selected-mime-type"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}static get styles(){return[Wr,jo,Ro,Po,qn,Ls,x`
      .resp-head{
        vertical-align: middle;
        padding:16px 0 8px;
      }
      .resp-head.divider{
        border-top: 1px solid var(--border-color);
        margin-top:10px;
      }
      .resp-status{ 
        font-weight:bold;
        font-size:calc(var(--font-size-small) + 1px);
      }
      .resp-descr{
        font-size:calc(var(--font-size-small) + 1px);
        color:var(--light-fg);
        text-align:left;
      }
      .top-gap{margin-top:16px;}
      .example-panel{
        font-size:var(--font-size-small);
        margin:0;
      }
      .focused-mode,
      .read-mode {
        padding-top:24px;
        margin-top:12px;
        border-top: 1px dashed var(--border-color);
      }`,Mn]}render(){return v`
    <div class="col regular-font response-panel ${this.renderStyle}-mode">
      <div class=" ${this.callback==="true"?"tiny-title":"req-res-title"} "> 
        ${this.callback==="true"?"CALLBACK RESPONSE":"RESPONSE"}
      </div>
      <div>
        ${this.responseTemplate()}
      <div>  
    </div>  
    `}resetSelection(){this.selectedStatus="",this.selectedMimeType=""}responseTemplate(){if(!this.responses)return"";for(const n in this.responses){this.selectedStatus||(this.selectedStatus=n);const o={};for(const i in(e=this.responses[n])===null||e===void 0?void 0:e.content){var e,t;const s=this.responses[n].content[i];this.selectedMimeType||(this.selectedMimeType=i);const l=Et(s.schema,{}),c=Oo(s.schema,i,s.examples,s.example,!0,!1,i.includes("json")?"json":"text");o[i]={description:this.responses[n].description,examples:c,selectedExample:((t=c[0])===null||t===void 0?void 0:t.exampleId)||"",schemaTree:l}}const a=[];for(const i in(r=this.responses[n])===null||r===void 0?void 0:r.headers){var r;a.push({name:i,...this.responses[n].headers[i]})}this.headersForEachRespStatus[n]=a,this.mimeResponsesForEachStatus[n]=o}return v`
      ${Object.keys(this.responses).length>1?v`<div class='row' style='flex-wrap:wrap'>
          ${Object.keys(this.responses).map(n=>v`
            ${n==="$$ref"?"":v`
                <button 
                  @click="${()=>{this.selectedStatus=n,this.responses[n].content&&Object.keys(this.responses[n].content)[0]?this.selectedMimeType=Object.keys(this.responses[n].content)[0]:this.selectedMimeType=void 0}}"
                  class='m-btn small ${this.selectedStatus===n?"primary":""}'
                  part="btn ${this.selectedStatus===n?"btn-response-status btn-selected-response-status":" btn-response-status"}"
                  style='margin: 8px 4px 0 0'
                > 
                  ${n} 
                </button>`}`)}`:v`<span>${Object.keys(this.responses)[0]}</span>`}
      </div>

      ${Object.keys(this.responses).map(n=>{var o,a;return v`
        <div style = 'display: ${n===this.selectedStatus?"block":"none"}' >
          <div class="top-gap">
            <span class="resp-descr m-markdown ">${Ze(xe(((o=this.responses[n])===null||o===void 0?void 0:o.description)||""))}</span>
            ${this.headersForEachRespStatus[n]&&((a=this.headersForEachRespStatus[n])===null||a===void 0?void 0:a.length)>0?v`${this.responseHeaderListTemplate(this.headersForEachRespStatus[n])}`:""}
          </div>
          ${Object.keys(this.mimeResponsesForEachStatus[n]).length===0?"":v`  
              <div class="tab-panel col">
                <div class="tab-buttons row" @click="${i=>{i.target.tagName.toLowerCase()==="button"&&(this.activeSchemaTab=i.target.dataset.tab)}}" >
                  <button class="tab-btn ${this.activeSchemaTab==="example"?"active":""}" data-tab = 'example'>EXAMPLE </button>
                  <button class="tab-btn ${this.activeSchemaTab!=="example"?"active":""}" data-tab = 'schema' >SCHEMA</button>
                  <div style="flex:1"></div>
                  ${Object.keys(this.mimeResponsesForEachStatus[n]).length===1?v`<span class='small-font-size gray-text' style='align-self:center; margin-top:8px;'> ${Object.keys(this.mimeResponsesForEachStatus[n])[0]} </span>`:v`${this.mimeTypeDropdownTemplate(Object.keys(this.mimeResponsesForEachStatus[n]))}`}
                </div>
                ${this.activeSchemaTab==="example"?v`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeExampleTemplate(this.mimeResponsesForEachStatus[n][this.selectedMimeType])}
                    </div>`:v`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeSchemaTemplate(this.mimeResponsesForEachStatus[n][this.selectedMimeType])}
                    </div>`}
              </div>
            `}`})}
    `}responseHeaderListTemplate(e){return v`
      <div style="padding:16px 0 8px 0" class="resp-headers small-font-size bold-text">RESPONSE HEADERS</div> 
      <table style="border-collapse: collapse; margin-bottom:16px; border:1px solid var(--border-color); border-radius: var(--border-radius)" class="small-font-size mono-font">
        ${e.map(t=>v`
          <tr>
            <td style="padding:8px; vertical-align: baseline; min-width:120px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${t.name||""}
            </td> 
            <td style="padding:4px; vertical-align: baseline; padding:0 5px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${t.schema.type||""}
            </td> 
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color);text-overflow: ellipsis;">
              <div class="m-markdown-small regular-font" >${Ze(xe(t.description||""))}</div>
            </td>
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${t.schema.example||""}
            </td>
          </tr>
        `)}
    </table>`}mimeTypeDropdownTemplate(e){return v`
      <select @change="${t=>{this.selectedMimeType=t.target.value}}" style='margin-bottom: -1px; z-index:1'>
        ${e.map(t=>v`<option value='${t}' ?selected = '${t===this.selectedMimeType}'> ${t} </option>`)}
      </select>`}onSelectExample(e){[...e.target.closest(".example-panel").querySelectorAll(".example")].forEach(t=>{t.style.display=t.dataset.example===e.target.value?"block":"none"})}mimeExampleTemplate(e){return e?v`
      ${e.examples.length===1?v`
          ${e.examples[0].exampleFormat==="json"?v`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?v`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?v`<div class="m-markdown-small" style="padding: 4px 0"> ${Ze(xe(e.examples[0].exampleDescription||""))} </div>`:""}
              <json-tree 
                render-style = '${this.renderStyle}'
                .data="${e.examples[0].exampleValue}"
                class = 'example-panel ${this.renderStyle==="read"?"border pad-8-16":"border-top pad-top-8"}'
                exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
              ></json-tree>`:v`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?v`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?v`<div class="m-markdown-small" style="padding: 4px 0"> ${Ze(xe(e.examples[0].exampleDescription||""))} </div>`:""}
              <pre class = 'example-panel ${this.renderStyle==="read"?"border pad-8-16":"border-top pad-top-8"}'>${e.examples[0].exampleValue}</pre>
            `}`:v`
          <span class = 'example-panel ${this.renderStyle==="read"?"border pad-8-16":"border-top pad-top-8"}'>
            <select style="min-width:100px; max-width:100%" @change='${t=>this.onSelectExample(t)}'>
              ${e.examples.map(t=>v`<option value="${t.exampleId}" ?selected=${t.exampleId===e.selectedExample} > 
                ${t.exampleSummary.length>80?t.exampleId:t.exampleSummary} 
              </option>`)}
            </select>
            ${e.examples.map(t=>v`
              <div class="example" data-example = '${t.exampleId}' style = "display: ${t.exampleId===e.selectedExample?"block":"none"}">
                ${t.exampleSummary&&t.exampleSummary.length>80?v`<div style="padding: 4px 0"> ${t.exampleSummary} </div>`:""}
                ${t.exampleDescription?v`<div class="m-markdown-small"  style="padding: 4px 0"> ${Ze(xe(t.exampleDescription||""))} </div>`:""}
                ${t.exampleFormat==="json"?v`
                    <json-tree 
                      render-style = '${this.renderStyle}'
                      .data = '${t.exampleValue}'
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
                    ></json-tree>`:v`<pre>${t.exampleValue}</pre>`}
              </div>  
            `)}
          </span>  
        `}
    `:v`
        <pre style='color:var(--red)' class = '${this.renderStyle==="read"?"read example-panel border pad-8-16":"example-panel border-top"}'> No example provided </pre>
      `}mimeSchemaTemplate(e){return e?v`
      ${this.schemaStyle==="table"?v`
          <schema-table
            render-style = "${this.renderStyle}"
            .data = "${e.schemaTree}"
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
            schema-hide-read-only = "false"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
          > </schema-tree> `:v`
          <schema-tree
            render-style = "${this.renderStyle}"
            .data = '${e.schemaTree}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
            schema-hide-read-only = "false"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
          > </schema-tree>`}`:v`
        <pre style='color:var(--red)' class = '${this.renderStyle==="read"?"border pad-8-16":"border-top"}'> Schema not found</pre>
      `}});const TR=x`
  *, *:before, *:after { box-sizing: border-box; }

  .dialog-box-overlay {
    background-color: var(--overlay-bg);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: var(--dialog-z-index);
  }
  
  .dialog-box {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: var(--bg2);
    color: var(--fg2);
    border-radius: 4px;
    max-height: 500px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  .dialog-box-header {
    position: sticky;
    top: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    min-height: 60px;
    max-height: 60px;
    border-bottom: 1px solid var(--light-border-color);
    overflow: hidden;
  }
  
  .dialog-box-header button {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: var(--fg);
    border: none;
    outline: none;
    background-color: transparent;
    cursor:pointer;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: -8px;
  }
  .dialog-box-header button:hover {
    border-color: var(--primary-color);
  }

  .dialog-box-content {
    padding: 16px;
    display:block;
    overflow: auto;
    height: 100%;
  }

  .dialog-box-title {
    flex-grow: 1;
    font-size:24px;
  }
`;function CR(){var e;return document.addEventListener("close",()=>{this.showAdvancedSearchDialog=!1}),document.addEventListener("open",this.onOpenSearchDialog),v`
    <dialog-box 
      heading="Search" 
      show="${!!this.showAdvancedSearchDialog}"
    >
      <span class="advanced-search-options">
        <input
          style="width:100%; padding-right:20px;"
          type="text"
          part="textbox textbox-search-dialog"
          placeholder="search text..."
          spellcheck="false"
          @keyup = "${t=>this.onAdvancedSearch(t,400)}"
        >
        <div style="display:flex; margin:8px 0 24px;">
          <div>
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-path" checked @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label for="search-api-path" style="cursor:pointer;"> API Path </label>
            </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-descr" checked @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label style="cursor:pointer;" for="search-api-descr"> API Description </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-params" @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label style="cursor:pointer;" for="search-api-params"> API Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-request-body" @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label style="cursor:pointer;" for="search-api-request-body"> Request Body Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-resp-descr" @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label style="cursor:pointer;" for="search-api-resp-descr"> Response Description </label>
          </div>
        </div>
      </span>
      
      ${(e=this.advancedSearchMatches)===null||e===void 0?void 0:e.map(t=>v`
      <div
        class="mono-font small-font-size hover-bg"
        style='padding: 5px; cursor: pointer; border-bottom: 1px solid var(--light-border-color); ${t.deprecated?"filter:opacity(0.5);":""}' 
        data-content-id='${t.elementId}'
        tabindex = '0'
        @click="${r=>{this.matchPaths="",this.showAdvancedSearchDialog=!1,this.requestUpdate(),this.scrollToEventTarget(r,!0)}}"
      > 
        <span class="upper bold-text method-fg ${t.method}">${t.method}</span> 
        <span>${t.path}</span>
        <span class="regular-font gray-text">${t.summary}</span>
      </div>
    `)}
    </dialog-box>
  `}customElements.define("dialog-box",class extends b{static get properties(){return{heading:{type:String,attribute:"heading"},show:{type:String,attribute:"show"}}}static get styles(){return[TR]}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",e=>{e.code==="Escape"&&this.onClose()})}attributeChangedCallback(e,t,r){t!==r&&(e==="heading"&&(this.heading=r),e==="show"&&(this.show=r,r==="true"&&document.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0,detail:this})))),super.attributeChangedCallback(e,t,r)}render(){return v`
    ${this.show==="true"?v`
        <div class="dialog-box-overlay">
          <div class="dialog-box">
            <header class="dialog-box-header">
              <span class="dialog-box-title">${this.heading}</span>
              <button type="button" @click="${this.onClose}">&times;</button>
            </header>
            <div class="dialog-box-content">
              <slot></slot>
            </div>
          </div>
        </div>`:""}`}onClose(){document.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}});const Te={color:{inputReverseFg:"#fff",inputReverseBg:"#333",headerBg:"#444",getRgb(e){if(e.indexOf("#")===0&&(e=e.slice(1,7)),e.length!==3&&e.length!==4||(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e.length!==6)throw new Error("Invalid HEX color.");return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}},luminanace(e){const t=this.getRgb(e);return .299*t.r+.587*t.g+.114*t.b},invert(e){return this.luminanace(e)>135?"#000":"#fff"},opacity(e,t){const r=this.getRgb(e);return`rgba(${r.r}, ${r.g}, ${r.b}, ${t})`},brightness(e,t){const r=this.getRgb(e);return r.r+=t,r.g+=t,r.b+=t,r.r>255?r.r=255:r.r<0&&(r.r=0),r.g>255?r.g=255:r.g<0&&(r.g=0),r.b>255?r.b=255:r.b<0&&(r.b=0),`#${r.r.toString(16).padStart(2,"0")}${r.g.toString(16).padStart(2,"0")}${r.b.toString(16).padStart(2,"0")}`},hasGoodContrast(e,t){return this.luminanace(e)-this.luminanace(t)}}};function Lt(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/i.test(e)}function Wt(e,t={}){let r={};const n=t.primaryColor?t.primaryColor:e==="dark"?"#f76b39":"#ff591e",o=Te.color.invert(n),a=Te.color.opacity(n,"0.8");if(e==="dark"){const i=t.bg1?t.bg1:"#333",s=t.fg1?t.fg1:"#bbb",l=t.bg2?t.bg2:Te.color.brightness(i,5),c=t.bg3?t.bg3:Te.color.brightness(i,17),d=t.bg3?t.bg3:Te.color.brightness(i,35),u=t.fg2?t.fg2:Te.color.brightness(s,-15),f=t.fg3?t.fg3:Te.color.brightness(s,-20),m=t.fg3?t.fg3:Te.color.brightness(s,-65),$=t.inlineCodeFg?t.inlineCodeFg:"#aaa",C="#bbb",E="#eee",h=t.headerColor?t.headerColor:Te.color.brightness(i,10),D=t.navBgColor?t.navBgColor:Te.color.brightness(i,10);r={bg1:i,bg2:l,bg3:c,lightBg:d,fg1:s,fg2:u,fg3:f,lightFg:m,inlineCodeFg:$,primaryColor:n,primaryColorTrans:a,primaryColorInvert:o,selectionBg:C,selectionFg:E,overlayBg:"rgba(80, 80, 80, 0.4)",navBgColor:D,navTextColor:t.navTextColor?t.navTextColor:Te.color.opacity(Te.color.invert(D),"0.65"),navHoverBgColor:t.navHoverBgColor?t.navHoverBgColor:Te.color.brightness(D,-15),navHoverTextColor:t.navHoverTextColor?t.navHoverTextColor:Te.color.invert(D),navAccentColor:t.navAccentColor?t.navAccentColor:Te.color.brightness(n,25),headerColor:h,headerColorInvert:Te.color.invert(h),headerColorDarker:Te.color.brightness(h,-20),headerColorBorder:Te.color.brightness(h,10),borderColor:t.borderColor||Te.color.brightness(i,20),lightBorderColor:t.lightBorderColor||Te.color.brightness(i,15),codeBorderColor:t.codeBorderColor||Te.color.brightness(i,30),inputBg:t.inputBg||Te.color.brightness(i,-5),placeHolder:t.placeHolder||Te.color.opacity(s,"0.3"),hoverColor:t.hoverColor||Te.color.brightness(i,-10),red:t.red?t.red:"#F06560",lightRed:t.lightRed?t.lightRed:Te.color.brightness(i,-10),pink:t.pink?t.pink:"#ffb2b2",lightPink:t.lightPink||Te.color.brightness(i,-10),green:t.green||"#7ec699",lightGreen:t.lightGreen||Te.color.brightness(i,-10),blue:t.blue||"#71b7ff",lightBlue:t.lightBlue||Te.color.brightness(i,-10),orange:t.orange?t.orange:"#f08d49",lightOrange:t.lightOrange||Te.color.brightness(i,-10),yellow:t.yellow||"#827717",lightYellow:t.lightYellow||Te.color.brightness(i,-10),purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||Te.color.opacity(Te.color.brightness(i,-15),.7),codeFg:t.codeFg||"#aaa",codePropertyColor:t.codePropertyColor||"#f8c555",codeKeywordColor:t.codeKeywordColor||"#cc99cd",codeOperatorColor:t.codeOperatorColor||"#67cdcc"}}else{const i=t.bg1?t.bg1:"#ffffff",s=t.fg1?t.fg1:"#444444",l=t.bg2?t.bg2:Te.color.brightness(i,-5),c=t.bg3?t.bg3:Te.color.brightness(i,-15),d=t.bg3?t.bg3:Te.color.brightness(i,-45),u=t.fg2?t.fg2:Te.color.brightness(s,17),f=t.fg3?t.fg3:Te.color.brightness(s,30),m=t.fg3?t.fg3:Te.color.brightness(s,70),$=t.inlineCodeFg?t.inlineCodeFg:"brown",C="#444",E="#eee",h=t.headerColor?t.headerColor:Te.color.brightness(i,-180),D=t.navBgColor?t.navBgColor:Te.color.brightness(i,-180);r={bg1:i,bg2:l,bg3:c,lightBg:d,fg1:s,fg2:u,fg3:f,lightFg:m,inlineCodeFg:$,primaryColor:n,primaryColorTrans:a,primaryColorInvert:o,selectionBg:C,selectionFg:E,overlayBg:"rgba(0, 0, 0, 0.4)",navBgColor:D,navTextColor:t.navTextColor?t.navTextColor:Te.color.opacity(Te.color.invert(D),"0.65"),navHoverBgColor:t.navHoverBgColor?t.navHoverBgColor:Te.color.brightness(D,-15),navHoverTextColor:t.navHoverTextColor?t.navHoverTextColor:Te.color.invert(D),navAccentColor:t.navAccentColor?t.navAccentColor:Te.color.brightness(n,25),headerColor:h,headerColorInvert:Te.color.invert(h),headerColorDarker:Te.color.brightness(h,-20),headerColorBorder:Te.color.brightness(h,10),borderColor:t.borderColor||Te.color.brightness(i,-38),lightBorderColor:t.lightBorderColor||Te.color.brightness(i,-23),codeBorderColor:t.codeBorderColor||"transparent",inputBg:t.inputBg||Te.color.brightness(i,10),placeHolder:t.placeHolder||Te.color.brightness(m,20),hoverColor:t.hoverColor||Te.color.brightness(i,-5),red:t.red||"#F06560",lightRed:t.lightRed||"#fff0f0",pink:t.pink?t.pink:"#990055",lightPink:t.lightPink?t.lightPink:"#ffb2b2",green:t.green||"#690",lightGreen:t.lightGreen||"#fbfff0",blue:t.blue||"#47AFE8",lightBlue:t.lightBlue||"#eff8fd",orange:t.orange||"#FF9900",lightOrange:t.lightOrange||"#fff5e6",yellow:t.yellow||"#827717",lightYellow:t.lightYellow||"#fff5cc",purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||Te.color.opacity(Te.color.brightness(i,-15),.7),codeFg:t.codeFg||"#666",codePropertyColor:t.codePropertyColor||"#905",codeKeywordColor:t.codeKeywordColor||"#07a",codeOperatorColor:t.codeOperatorColor||"#9a6e3a"}}return v`
  <style>
  *, *:before, *:after { box-sizing: border-box; }
  
  :host {
    /* Common Styles - irrespective of themes */  
    --border-radius: 2px;
    --layout: ${this.layout||"row"};
    --font-mono: ${this.monoFont||'Monaco, "Andale Mono", "Roboto Mono", Consolas, monospace'};
    --font-regular: ${this.regularFont||'"Open Sans", Avenir, "Segoe UI", Arial, sans-serif'};
    --scroll-bar-width: 8px;
    --nav-item-padding: ${this.navItemSpacing==="relaxed"?"10px 16px 10px 10px":this.navItemSpacing==="compact"?"5px 16px 5px 10px":"7px 16px 7px 10px"};
    
    --resp-area-height: ${this.responseAreaHeight};
    --font-size-small:  ${this.fontSize==="default"?"12px":this.fontSize==="large"?"13px":"14px"};
    --font-size-mono:   ${this.fontSize==="default"?"13px":this.fontSize==="large"?"14px":"15px"};
    --font-size-regular: ${this.fontSize==="default"?"14px":this.fontSize==="large"?"15px":"16px"};
    --dialog-z-index: 1000;

    /* Theme specific styles */  
    --bg:${r.bg1};
    --bg2:${r.bg2};
    --bg3:${r.bg3};
    --light-bg:${r.lightBg};
    --fg:${r.fg1};
    --fg2:${r.fg2};
    --fg3:${r.fg3};
    --light-fg:${r.lightFg};
    --selection-bg:${r.selectionBg};
    --selection-fg:${r.selectionFg};
    --overlay-bg:${r.overlayBg};
    
    /* Border Colors */
    --border-color:${r.borderColor};
    --light-border-color:${r.lightBorderColor};
    --code-border-color:${r.codeBorderColor};

    --input-bg:${r.inputBg};
    --placeholder-color:${r.placeHolder};
    --hover-color:${r.hoverColor};
    --red:${r.red};
    --light-red:${r.lightRed};
    --pink:${r.pink};
    --light-pink:${r.lightPink};
    --green:${r.green};
    --light-green:${r.lightGreen};
    --blue:${r.blue};
    --light-blue:${r.lightBlue};
    --orange:${r.orange};
    --light-orange:${r.lightOrange};
    --yellow:${r.yellow};
    --light-yellow:${r.lightYellow};
    --purple:${r.purple};
    --brown:${r.brown};

    /* Header Color */
    --header-bg:${r.headerColor};
    --header-fg:${r.headerColorInvert};
    --header-color-darker:${r.headerColorDarker};
    --header-color-border:${r.headerColorBorder};

    /* Nav Colors */  
    --nav-bg-color:${r.navBgColor};
    --nav-text-color:${r.navTextColor};
    --nav-hover-bg-color:${r.navHoverBgColor};
    --nav-hover-text-color:${r.navHoverTextColor};
    --nav-accent-color:${r.navAccentColor};

    /* Primary Colors */  
    --primary-color:${r.primaryColor};
    --primary-color-invert:${r.primaryColorInvert};
    --primary-color-trans:${r.primaryColorTrans};

    /*Code Syntax Color*/
    --code-bg:${r.codeBg};
    --code-fg:${r.codeFg};
    --inline-code-fg:${r.inlineCodeFg};
    --code-property-color:${r.codePropertyColor};
    --code-keyword-color:${r.codeKeywordColor};
    --code-operator-color:${r.codeOperatorColor};
  }
  </style>`}function v0(e=!1,t=!0,r=!0,n=!1){if(!this.resolvedSpec)return"";this.persistAuth==="true"&&aR.call(this);const o={bg1:Lt(this.bgColor)?this.bgColor:"",fg1:Lt(this.textColor)?this.textColor:"",headerColor:Lt(this.headerColor)?this.headerColor:"",primaryColor:Lt(this.primaryColor)?this.primaryColor:"",navBgColor:Lt(this.navBgColor)?this.navBgColor:"",navTextColor:Lt(this.navTextColor)?this.navTextColor:"",navHoverBgColor:Lt(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:Lt(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:Lt(this.navAccentColor)?this.navAccentColor:""};return this.resolvedSpec.specLoadError?e?v`
        ${this.theme==="dark"?Wt.call(this,"dark",o):Wt.call(this,"light",o)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:v`
      ${this.theme==="dark"?Wt.call(this,"dark",o):Wt.call(this,"light",o)}
      <!-- Header -->
      ${zs.call(this)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?v`
      ${this.theme==="dark"?Wt.call(this,"dark",o):Wt.call(this,"light",o)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:v`
    ${this.theme==="dark"?Wt.call(this,"dark",o):Wt.call(this,"light",o)}

    <!-- Header -->
    ${this.showHeader==="false"?"":zs.call(this)}
    
    <!-- Advanced Search -->
    ${this.allowAdvancedSearch==="false"?"":CR.call(this)}

    <div id='the-main-body' class="body" dir= ${this.pageDirection}>
      <!-- Side Nav -->
      ${this.renderStyle!=="read"&&this.renderStyle!=="focused"||this.showSideNav!=="true"||!this.resolvedSpec?"":$R.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${this.loading===!0?v`<div class="loader"></div>`:v`
              ${this.loadFailed===!0?v`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:v`
                  <div class="operations-root" @click="${a=>{this.handleHref(a)}}">
                  ${this.renderStyle==="focused"?v`${AR.call(this)}`:v`
                      ${this.showInfo==="true"?Bs.call(this):""}
                      ${this.allowServerSelection==="true"?p0.call(this):""}
                      ${this.allowAuthentication==="true"?Xb.call(this):""}
                      <div id="operations-top" class="observe-me">
                        <slot name="operations-top"></slot>
                      </div>  
                      ${this.renderStyle==="read"?gR.call(this):_R.call(this,t,r,n)}
                    `}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `}class IR extends b{constructor(){super();const t={root:this.getRootNode().host,rootMargin:"-50px 0px -50px 0px",threshold:0};this.showSummaryWhenCollapsed=!0,this.isIntersectionObserverActive=!0,this.intersectionObserver=new IntersectionObserver(r=>{this.onIntersect(r)},t)}static get properties(){return{headingText:{type:String,attribute:"heading-text"},gotoPath:{type:String,attribute:"goto-path"},updateRoute:{type:String,attribute:"update-route"},routePrefix:{type:String,attribute:"route-prefix"},specUrl:{type:String,attribute:"spec-url"},sortTags:{type:String,attribute:"sort-tags"},generateMissingTags:{type:String,attribute:"generate-missing-tags"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},specFile:{type:String,attribute:!1},layout:{type:String},renderStyle:{type:String,attribute:"render-style"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},persistAuth:{type:String,attribute:"persist-auth"},onNavTagClick:{type:String,attribute:"on-nav-tag-click"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowAuthentication:{type:String,attribute:"allow-authentication"},allowTry:{type:String,attribute:"allow-try"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},allowAdvancedSearch:{type:String,attribute:"allow-advanced-search"},allowServerSelection:{type:String,attribute:"allow-server-selection"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showComponents:{type:String,attribute:"show-components"},pageDirection:{type:String,attribute:"page-direction"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},headerColor:{type:String,attribute:"header-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},navBgColor:{type:String,attribute:"nav-bg-color"},navTextColor:{type:String,attribute:"nav-text-color"},navHoverBgColor:{type:String,attribute:"nav-hover-bg-color"},navHoverTextColor:{type:String,attribute:"nav-hover-text-color"},navAccentColor:{type:String,attribute:"nav-accent-color"},navItemSpacing:{type:String,attribute:"nav-item-spacing"},usePathInNavBar:{type:String,attribute:"use-path-in-nav-bar"},infoDescriptionHeadingsInNavBar:{type:String,attribute:"info-description-headings-in-navbar"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean},focusedElementId:{type:String},showAdvancedSearchDialog:{type:Boolean},advancedSearchMatches:{type:Object}}}static get styles(){return[Wr,qn,jo,Po,Xs,Za,Ro,el,tl,x`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }

      .main-content { 
        margin:0;
        padding: 0; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }

      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }

      .section-gap.section-tag {
        border-bottom:1px solid var(--border-color);
      }
      .section-gap,
      .section-gap--focused-mode,
      .section-gap--read-mode { 
        padding: 0px 4px; 
      }
      .section-tag-header {
        position:relative;
        cursor: n-resize;
        padding: 12px 0;
      }
      .collapsed .section-tag-header:hover{
        cursor: s-resize;
      }

      .section-tag-header:hover{
        background-image: linear-gradient(to right, rgba(0,0,0,0), var(--border-color), rgba(0,0,0,0));
      }

      .section-tag-header:hover::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color:var(--primary-color);
        content: '⬆'; 
      }

      .collapsed .section-tag-header::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color: var(--border-color);
        content: '⬇'; 
      }
      .collapsed .section-tag-header:hover::after {
        color:var(--primary-color);
      }

      .collapsed .section-tag-body {
        display:none;
      }

      .logo {
        height:36px;
        width:36px;
        margin-left:5px; 
      }
      .only-large-screen-flex,
      .only-large-screen{
        display:none;
      }
      .tag.title {
        text-transform: uppercase;
      }
      .header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      .expanded-endpoint-body{ 
        position: relative;
        padding: 6px 0px; 
      }
      .expanded-endpoint-body.deprecated{ filter:opacity(0.6); }
      .divider { 
        border-top: 2px solid var(--border-color);
        margin: 24px 0;
        width:100%;
      }

      .tooltip {
        cursor:pointer;
        border: 1px solid var(--border-color);
        border-left-width: 4px;
        margin-left:2px;
      }
      .tooltip a {
        color: var(--fg2);
        text-decoration: none;
      }
      .tooltip-text {
        color: var(--fg2);
        max-width: 400px;
        position: absolute;
        z-index:1;
        background-color: var(--bg2);
        visibility: hidden;

        overflow-wrap: break-word;
      }
      .tooltip:hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
      }
      .tooltip:hover a:hover {
        color: var(--primary-color);
      }

      .tooltip:hover .tooltip-text {
        visibility: visible;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @media only screen and (min-width: 768px) {
        .nav-bar {
          width: 260px;
          display:flex;
        }
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
        .section-gap { 
          padding: 0 0 0 24px; 
        }
        .section-gap--focused-mode {
          padding: 24px 8px; 
        }
        .section-gap--read-mode { 
          padding: 24px 8px; 
        }
        .endpoint-body {
          position: relative;
          padding:36px 0 48px 0;
        }
      }

      @media only screen and (min-width: 1024px) {
        .nav-bar {
          width: ${ue(this.fontSize==="default"?"300px":this.fontSize==="large"?"315px":"330px")};
          display:flex;
        }
        .section-gap--focused-mode { 
          padding: 12px 80px 12px 80px; 
        }
        .section-gap--read-mode { 
          padding: 24px 80px 12px 80px; 
        }
      }`,Mn]}connectedCallback(){super.connectedCallback();const t=this.parentElement;if(t&&(t.offsetWidth===0&&t.style.width===""&&(t.style.width="100vw"),t.offsetHeight===0&&t.style.height===""&&(t.style.height="100vh"),t.tagName==="BODY"&&(t.style.marginTop||(t.style.marginTop="0"),t.style.marginRight||(t.style.marginRight="0"),t.style.marginBottom||(t.style.marginBottom="0"),t.style.marginLeft||(t.style.marginLeft="0"))),this.loadFonts!=="false"){const n={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},o=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",n);n.weight="600";const a=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",n);o.load().then(i=>{document.fonts.add(i)}),a.load().then(i=>{document.fonts.add(i)})}this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.renderStyle&&"read, view, focused,".includes(`${this.renderStyle},`)||(this.renderStyle="read"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?this.defaultSchemaTab==="model"&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false");const r=["post","put","patch"];this.schemaHideReadOnly?this.schemaHideReadOnly!=="never"&&(this.schemaHideReadOnly=r.filter(n=>this.schemaHideReadOnly.includes(n)),this.schemaHideReadOnly.length===0&&(this.schemaHideReadOnly=r)):this.schemaHideReadOnly=r,this.schemaHideReadOnly+=["get","head","delete","options"],this.schemaHideWriteOnly=this.schemaHideWriteOnly!=="never",this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.onNavTagClick&&"expand-collapse, show-description,".includes(`${this.onNavTagClick},`)||(this.onNavTagClick="expand-collapse"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),this.allowAdvancedSearch&&"true, false,".includes(`${this.allowAdvancedSearch},`)||(this.allowAdvancedSearch="true"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.updateRoute&&"true, false,".includes(`${this.updateRoute},`)||(this.updateRoute="true"),this.routePrefix||(this.routePrefix="#"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.generateMissingTags&&"true, false,".includes(`${this.generateMissingTags},`)||(this.generateMissingTags="false"),this.sortEndpointsBy&&"method, path, summary, none,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.navItemSpacing&&"compact, relaxed, default,".includes(`${this.navItemSpacing},`)||(this.navItemSpacing="default"),this.usePathInNavBar&&"true, false,".includes(`${this.usePathInNavBar},`)||(this.usePathInNavBar="false"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.allowServerSelection&&"true, false,".includes(`${this.allowServerSelection},`)||(this.allowServerSelection="true"),this.allowAuthentication&&"true, false,".includes(`${this.allowAuthentication},`)||(this.allowAuthentication="true"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showComponents&&"true false".includes(this.showComponents)||(this.showComponents="false"),this.infoDescriptionHeadingsInNavBar&&"true, false,".includes(`${this.infoDescriptionHeadingsInNavBar},`)||(this.infoDescriptionHeadingsInNavBar="false"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.showAdvancedSearchDialog||(this.showAdvancedSearchDialog=!1),xe.setOptions({highlight:(n,o)=>Pt().languages[o]?Pt().highlight(n,Pt().languages[o],o):n}),window.addEventListener("hashchange",()=>{const n=new RegExp(`^${this.routePrefix}`,"i"),o=window.location.hash.replace(n,"");this.scrollTo(o)},!0)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}infoDescriptionHeadingRenderer(){const t=new xe.Renderer;return t.heading=(r,n,o,a)=>`<h${n} class="observe-me" id="${a.slug(o)}">${r}</h${n}>`,t}render(){return v0.call(this)}observeExpandedContent(){this.shadowRoot.querySelectorAll(".observe-me").forEach(t=>{this.intersectionObserver.observe(t)})}attributeChangedCallback(t,r,n){if(t==="spec-url"&&r!==n&&window.setTimeout(async()=>{await this.loadSpec(n),this.gotoPath&&!window.location.hash&&this.scrollTo(this.gotoPath)},0),t==="render-style"&&(n==="read"?window.setTimeout(()=>{this.observeExpandedContent()},100):this.intersectionObserver.disconnect()),t==="api-key-name"||t==="api-key-location"||t==="api-key-value"){let o=!1,a="",i="",s="";if(t==="api-key-name"?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(a=n,i=this.getAttribute("api-key-location"),s=this.getAttribute("api-key-value"),o=!0):t==="api-key-location"?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(i=n,a=this.getAttribute("api-key-name"),s=this.getAttribute("api-key-value"),o=!0):t==="api-key-value"&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(s=n,i=this.getAttribute("api-key-location"),a=this.getAttribute("api-key-name"),o=!0),o&&this.resolvedSpec){const l=this.resolvedSpec.securitySchemes.find(c=>c.securitySchemeId===dn);l?(l.name=a,l.in=i,l.value=s,l.finalKeyValue=s):this.resolvedSpec.securitySchemes.push({securitySchemeId:dn,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:a,in:i,value:s,finalKeyValue:s}),this.requestUpdate()}}super.attributeChangedCallback(t,r,n)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSepcFileChange(t){this.setAttribute("spec-file",this.shadowRoot.getElementById("spec-file").value);const r=t.target.files[0],n=new FileReader;n.onload=()=>{try{const o=JSON.parse(n.result);this.loadSpec(o),this.shadowRoot.getElementById("spec-url").value=""}catch{console.error("RapiDoc: Unable to read or parse json")}},n.readAsText(r)}onFileLoadClick(){this.shadowRoot.getElementById("spec-file").click()}onSearchChange(t){this.matchPaths=t.target.value,this.resolvedSpec.tags.forEach(r=>r.paths.filter(n=>{this.matchPaths&&Bo(this.matchPaths,n,this.matchType)&&(r.expanded=!0)})),this.resolvedSpec.components.forEach(r=>r.subComponents.filter(n=>{n.expanded=!1,this.matchPaths&&!function(o,a){return a.name.toLowerCase().includes(o.toLowerCase())}(this.matchPaths,n)||(n.expanded=!0)})),this.requestUpdate()}onClearSearch(){this.shadowRoot.getElementById("nav-bar-search").value="",this.matchPaths="",this.resolvedSpec.components.forEach(t=>t.subComponents.filter(r=>{r.expanded=!0}))}onShowSearchModalClicked(){this.showAdvancedSearchDialog=!0}async onOpenSearchDialog(t){const r=t.detail.querySelector("input");await No(0),r&&r.focus()}async loadSpec(t){if(t){this.matchPaths="";try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1;const r=await Tu.call(this,t,this.generateMissingTags==="true",this.sortTags==="true",this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(r)}catch(r){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${r.message}`)}}}async afterSpecParsedAndValidated(t){var r;for(this.resolvedSpec=t,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find(a=>a.url===this.defaultApiServerUrl))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const n=new CustomEvent("spec-loaded",{detail:t});if(this.dispatchEvent(n),this.intersectionObserver.disconnect(),this.renderStyle==="read"&&(await No(100),this.observeExpandedContent()),!((r=window.location.hash)===null||r===void 0)&&r.substring(1)){const a=new RegExp(`^${this.routePrefix}`,"i"),i=window.location.hash.replace(a,"");this.renderStyle==="view"?this.expandAndGotoOperation(i,!0,!0):this.scrollTo(i)}else if(this.renderStyle==="focused"){var o;const a=this.showInfo?"overview":(o=this.resolvedSpec.tags[0])===null||o===void 0?void 0:o.paths[0];this.scrollTo(a)}}expandAndGotoOperation(t,r=!0){if(!this.resolvedSpec)return;let n=!0;const o=t.indexOf("#")===-1?t:t.substring(1);if(o.startsWith("overview")||o==="servers"||o==="auth")n=!1;else for(let s=0;s<((a=this.resolvedSpec.tags)===null||a===void 0?void 0:a.length);s++){var a,i;const l=this.resolvedSpec.tags[s],c=(i=l.paths)===null||i===void 0?void 0:i.find(d=>d.elementId===t);c&&(c.expanded&&l.expanded?n=!1:(c.expanded=!0,l.expanded=!0))}r&&(n&&this.requestUpdate(),window.setTimeout(()=>{const s=this.shadowRoot.getElementById(o);s&&(s.scrollIntoView({behavior:"auto",block:"start"}),this.updateRoute==="true"&&window.history.replaceState(null,null,`${this.routePrefix||"#"}${o}`))},n?150:0))}isValidTopId(t){return t.startsWith("overview")||t==="servers"||t==="auth"}isValidPathId(t){var r,n,o,a;return!(t!=="overview"||!this.showInfo)||!(t!=="servers"||!this.allowServerSelection)||!(t!=="auth"||!this.allowAuthentication)||(t.startsWith("tag--")?(o=this.resolvedSpec)===null||o===void 0||(a=o.tags)===null||a===void 0?void 0:a.find(i=>i.elementId===t):(r=this.resolvedSpec)===null||r===void 0||(n=r.tags)===null||n===void 0?void 0:n.find(i=>i.paths.find(s=>s.elementId===t)))}onIntersect(t){this.isIntersectionObserverActive!==!1&&t.forEach(r=>{if(r.isIntersecting&&r.intersectionRatio>0){const n=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active"),o=this.shadowRoot.getElementById(`link-${r.target.id}`);o&&(this.updateRoute==="true"&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${this.routePrefix||"#"}${r.target.id}`),o.scrollIntoView({behavior:"auto",block:"center"}),o.classList.add("active")),n&&n.classList.remove("active")}})}handleHref(t){if(t.target.tagName.toLowerCase()==="a"&&t.target.getAttribute("href").startsWith("#")){const r=this.shadowRoot.getElementById(t.target.getAttribute("href").replace("#",""));r&&r.scrollIntoView({behavior:"auto",block:"start"})}}async scrollToEventTarget(t,r=!0){const n=t.currentTarget;n.dataset.contentId&&(this.isIntersectionObserverActive=!1,this.scrollTo(n.dataset.contentId,!0,r),setTimeout(()=>{this.isIntersectionObserverActive=!0},300))}async scrollTo(t,r=!0,n=!0){if(this.renderStyle==="focused"&&(this.focusedElementId=t,await No(0)),this.renderStyle==="view")this.expandAndGotoOperation(t,r,!0);else{let o=!1;const a=this.shadowRoot.getElementById(t);if(a?(o=!0,a.scrollIntoView({behavior:"auto",block:"start"})):o=!1,o){if(this.renderStyle==="focused"){const s=this.shadowRoot.querySelector("api-request");s&&s.resetRequestBodySelection();const l=this.shadowRoot.querySelector("api-response");l&&l.resetSelection()}this.updateRoute==="true"&&window.history.replaceState(null,null,`${this.routePrefix||"#"}${t}`);const i=this.shadowRoot.getElementById(`link-${t}`);if(i){n&&i.scrollIntoView({behavior:"auto",block:"center"}),await No(0);const s=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active");s&&s.classList.remove("active"),i.classList.add("active")}}}}setHttpUserNameAndPassword(t,r,n){return Ra.call(this,t,r,n)}setApiKey(t,r){return Ra.call(this,t,"","",r)}removeAllSecurityKeys(){return Jb.call(this)}setApiServer(t){return l0.call(this,t)}onAdvancedSearch(t,r){const n=t.target;clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{let o;o=n.type==="text"?n:n.closest(".advanced-search-options").querySelector("input[type=text]");const a=[...n.closest(".advanced-search-options").querySelectorAll("input:checked")].map(i=>i.id);this.advancedSearchMatches=function(i,s,l=[]){if(!i.trim()||l.length===0)return;const c=[];return s.forEach(d=>{d.paths.forEach(u=>{let f="";var m;if(l.includes("search-api-path")&&(f=u.path),l.includes("search-api-descr")&&(f=`${f} ${u.summary||u.description||""}`),l.includes("search-api-params")&&(f=`${f} ${((m=u.parameters)===null||m===void 0?void 0:m.map(h=>h.name).join(" "))||""}`),l.includes("search-api-request-body")&&u.requestBody){let h=new Set;for(const D in($=u.requestBody)===null||$===void 0?void 0:$.content){var $,C,E;(C=u.requestBody.content[D].schema)!==null&&C!==void 0&&C.properties&&(h=rl((E=u.requestBody.content[D].schema)===null||E===void 0?void 0:E.properties)),f=`${f} ${[...h].join(" ")}`}}l.includes("search-api-resp-descr")&&(f=`${f} ${Object.values(u.responses).map(h=>h.description||"").join(" ")}`),f.toLowerCase().includes(i.trim().toLowerCase())&&c.push({elementId:u.elementId,method:u.method,path:u.path,summary:u.summary||u.description||"",deprecated:u.deprecated})})}),c}(o.value,this.resolvedSpec.tags,a)},r)}}customElements.define("rapi-doc",IR),customElements.define("rapi-doc-mini",class extends b{constructor(){super(),this.isMini=!0,this.updateRoute="false",this.renderStyle="view",this.showHeader="false",this.allowAdvancedSearch="false"}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},layout:{type:String},pathsExpanded:{type:String,attribute:"paths-expanded"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},showSummaryWhenCollapsed:{type:String,attribute:"show-summary-when-collapsed"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},persistAuth:{type:String,attribute:"persist-auth"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},allowTry:{type:String,attribute:"allow-try"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean}}}static get styles(){return[Wr,qn,jo,Po,Xs,Za,Ro,el,tl,x`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }

      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){if(super.connectedCallback(),this.loadFonts!=="false"){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then(n=>{document.fonts.add(n)}),r.load().then(n=>{document.fonts.add(n)})}this.showSummaryWhenCollapsed&&"true, false,".includes(`${this.showSummaryWhenCollapsed},`)||(this.showSummaryWhenCollapsed="true"),this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?this.defaultSchemaTab==="model"&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",this.pathsExpanded=this.pathsExpanded==="true",(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.sortEndpointsBy&&"method, path, summary,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),xe.setOptions({highlight:(e,t)=>Pt().languages[t]?Pt().highlight(e,Pt().languages[t],t):e})}render(){return v0.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){if(e==="spec-url"&&t!==r&&window.setTimeout(async()=>{await this.loadSpec(r)},0),e==="api-key-name"||e==="api-key-location"||e==="api-key-value"){let n=!1,o="",a="",i="";if(e==="api-key-name"?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(o=r,a=this.getAttribute("api-key-location"),i=this.getAttribute("api-key-value"),n=!0):e==="api-key-location"?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(a=r,o=this.getAttribute("api-key-name"),i=this.getAttribute("api-key-value"),n=!0):e==="api-key-value"&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(i=r,a=this.getAttribute("api-key-location"),o=this.getAttribute("api-key-name"),n=!0),n&&this.resolvedSpec){const s=this.resolvedSpec.securitySchemes.find(l=>l.securitySchemeId===dn);s?(s.name=o,s.in=a,s.value=i,s.finalKeyValue=i):this.resolvedSpec.securitySchemes.push({apiKeyId:dn,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:o,in:a,value:i,finalKeyValue:i}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await Tu.call(this,e,this.generateMissingTags==="true",this.sortTags==="true",this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(t){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${t.message}`)}}async afterSpecParsedAndValidated(e){for(this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find(r=>r.url===this.defaultApiServerUrl))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if(e.target.tagName.toLowerCase()==="a"&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}});class jR extends HTMLElement{connectedCallback(){this.receiveAuthParms(),window.addEventListener("storage",t=>this.receiveStorage(t),!0)}receiveAuthParms(){let t={};if(document.location.search){const r=new URLSearchParams(document.location.search);t={code:r.get("code"),error:r.get("error"),state:r.get("state"),responseType:"code"}}else window.location.hash&&(t={token_type:this.parseQueryString(window.location.hash.substring(1),"token_type"),access_token:this.parseQueryString(window.location.hash.substring(1),"access_token"),responseType:"token"});window.opener?window.opener.postMessage(t,this.target):sessionStorage.setItem("rapidoc-oauth-data",JSON.stringify(t))}relayAuthParams(t){if(window.parent&&t.key==="rapidoc-oauth-data"){const r=JSON.parse(t.newValue);window.parent.postMessage(r,this.target)}}parseQueryString(t,r){const n=t.split("&");for(let o=0;o<n.length;o++){const a=n[o].split("=");if(decodeURIComponent(a[0])===r)return decodeURIComponent(a[1])}}}function PR(){return v`
  <nav class='nav-bar' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    <div style="display:flex;line-height:22px; padding:8px">
      <input id="nav-bar-search" 
        part = "textbox textbox-nav-filter"
        style = "width:100%; height: 26px; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
        type = "text"
        placeholder = "Filter" 
        @change = "${this.onSearchChange}"  
        spellcheck = "false" 
      >
      <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
    </div>
    <nav style="flex:1" class='nav-scroll' part="section-navbar-scroll">
      ${this.resolvedSpec.schemaAndExamples.map(e=>v`
        <div class='nav-bar-path' data-content-id='${e.elementId}' id='link-${e.elementId}'
          @click = '${t=>{this.scrollToEventTarget(t,!1)}}'
        > 
          ${e.name}
        </div>`)}
    </nav>  
  </nav>
  `}function RR(){return v`
    ${this.showInfo==="true"?Bs.call(this):""}
    <div style="font-size:var(--font-size-regular);">
    ${this.resolvedSpec.schemaAndExamples.map(e=>{var t;const r=Oo(e.schema,"json",e.examples,e.example,!0,!1,"json",!0);return e.selectedExample=(t=r[0])===null||t===void 0?void 0:t.exampleId,v`
        <section id='${e.elementId}' class='json-schema-and-example regular-font' style="display:flex; flex-direction: column; border:1px solid var(--border-color); margin-bottom:32px; border-top: 5px solid var(--border-color)">
          <div style="padding:16px; border-bottom: 1px solid var(--border-color)">
            <div style="font-size:var(--font-size-small); font-weight:bold">${e.name}</div>
            <span class="json-schema-description m-markdown ">${Ze(xe(e.description||""))}</span>
          </div>  
          <div style="display:flex; flex-direction: row; gap:16px;">
            <div class="json-schema-def" style="flex:1; padding:16px 0 16px 16px; ">
              <schema-tree
                .data = "${Et(e.schema,{})}"
                schema-expand-level = "${this.schemaExpandLevel}"
                schema-description-expanded = "${this.schemaDescriptionExpanded}"
                allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                schema-hide-read-only = "false"
                schema-hide-write-only = "false"
              > </schema-tree>
            </div>
            <div class="json-schema-example-panel" style="width:400px; background-color: var(--input-bg); padding:16px 0 16px 16px; border-left: 1px dashed var(--border-color);">
              ${r.length>1?v`<select style="min-width:100px; max-width:100%" @change='${n=>this.onSelectExample(n,e)}'>
                    ${r.map(n=>v`
                      <option value="${n.exampleId}" ?selected=${n.exampleId===e.selectedExample}> 
                        ${n.exampleSummary.length>80?n.exampleId:n.exampleSummary}
                      </option>`)}
                  </select>`:v`<div style="font-size: var(--font-size-small);font-weight:700; margin:5px 0"> ${r[0].exampleSummary}</div>`}
              ${r.map(n=>v`
                <json-tree 
                  .data = "${n.exampleValue}"
                  data-example = "${n.exampleId}"
                  class = "example"
                  style = "margin-top:16px; display: ${n.exampleId===e.selectedExample?"flex":"none"}"
                ></json-tree>`)}
            </div>
          </div>
        </section>`})}
    </div>
  `}function LR(e=!1){if(!this.resolvedSpec)return"";const t={bg1:Lt(this.bgColor)?this.bgColor:"",fg1:Lt(this.textColor)?this.textColor:"",headerColor:Lt(this.headerColor)?this.headerColor:"",primaryColor:Lt(this.primaryColor)?this.primaryColor:"",navBgColor:Lt(this.navBgColor)?this.navBgColor:"",navTextColor:Lt(this.navTextColor)?this.navTextColor:"",navHoverBgColor:Lt(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:Lt(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:Lt(this.navAccentColor)?this.navAccentColor:""};return this.resolvedSpec.specLoadError?e?v`
        ${this.theme==="dark"?Wt.call(this,"dark",t):Wt.call(this,"light",t)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:v`
      ${this.theme==="dark"?Wt.call(this,"dark",t):Wt.call(this,"light",t)}
      <!-- Header -->
      ${zs.call(this)}
      <h1> Header </h1>
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?v`
      ${this.theme==="dark"?Wt.call(this,"dark",t):Wt.call(this,"light",t)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:v`
    ${this.theme==="dark"?Wt.call(this,"dark",t):Wt.call(this,"light",t)}

    <!-- Header -->
    ${this.showHeader==="false"?"":zs.call(this)}
    
    <div id='the-main-body' class="body" dir= ${this.pageDirection}>

      <!-- Side Nav -->
      ${PR.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${this.loading===!0?v`<div class="loader"></div>`:v`
              ${this.loadFailed===!0?v`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:v`
                  <div class="operations-root" @click="${r=>{this.handleHref(r)}}">
                    ${RR.call(this)}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `}customElements.define("oauth-receiver",jR),customElements.define("json-schema-viewer",class extends b{constructor(){super(),this.isMini=!1,this.updateRoute="false",this.renderStyle="focused",this.showHeader="true",this.allowAdvancedSearch="false",this.selectedExampleForEachSchema={}}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},loading:{type:Boolean}}}static get styles(){return[Wr,qn,jo,Po,Xs,Za,Ro,el,tl,x`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }
      .nav-bar {
        width: 230px;
        display:flex;
      }

      .main-content { 
        margin:0;
        padding: 16px; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }
      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }
      .header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){super.connectedCallback();const e=this.parentElement;if(e&&(e.offsetWidth===0&&e.style.width===""&&(e.style.width="100vw"),e.offsetHeight===0&&e.style.height===""&&(e.style.height="100vh"),e.tagName==="BODY"&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0"))),this.loadFonts!=="false"){const t={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",t);t.weight="600";const n=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",t);r.load().then(o=>{document.fonts.add(o)}),n.load().then(o=>{document.fonts.add(o)})}this.renderStyle="focused",this.pathsExpanded=this.pathsExpanded==="true",this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showHeader&&"true, false,".includes(`${this.showHeader},`)||(this.showHeader="true"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),xe.setOptions({highlight:(t,r)=>Pt().languages[r]?Pt().highlight(t,Pt().languages[r],r):t})}render(){return LR.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){e==="spec-url"&&t!==r&&window.setTimeout(async()=>{await this.loadSpec(r)},0),super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSearchChange(e){this.matchPaths=e.target.value}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await Tu.call(this,e,this.generateMissingTags==="true",this.sortTags==="true",this.getAttribute("sort-endpoints-by"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(t){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${t.message}`)}}async afterSpecParsedAndValidated(e){this.resolvedSpec=e;const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if(e.target.tagName.toLowerCase()==="a"&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}onSelectExample(e){[...e.target.closest(".json-schema-example-panel").querySelectorAll(".example")].forEach(t=>{t.style.display=t.dataset.example===e.target.value?"flex":"none"})}async scrollToEventTarget(e){const t=e.currentTarget;if(!t.dataset.contentId)return;const r=this.shadowRoot.getElementById(t.dataset.contentId);r&&r.scrollIntoView({behavior:"auto",block:"start"})}})},742:(_,B)=>{B.byteLength=function(me){var fe=x(me),re=fe[0],ye=fe[1];return 3*(re+ye)/4-ye},B.toByteArray=function(me){var fe,re,ye=x(me),ve=ye[0],ce=ye[1],ne=new V(function(q,Y,ee){return 3*(Y+ee)/4-ee}(0,ve,ce)),be=0,X=ce>0?ve-4:ve;for(re=0;re<X;re+=4)fe=P[me.charCodeAt(re)]<<18|P[me.charCodeAt(re+1)]<<12|P[me.charCodeAt(re+2)]<<6|P[me.charCodeAt(re+3)],ne[be++]=fe>>16&255,ne[be++]=fe>>8&255,ne[be++]=255&fe;return ce===2&&(fe=P[me.charCodeAt(re)]<<2|P[me.charCodeAt(re+1)]>>4,ne[be++]=255&fe),ce===1&&(fe=P[me.charCodeAt(re)]<<10|P[me.charCodeAt(re+1)]<<4|P[me.charCodeAt(re+2)]>>2,ne[be++]=fe>>8&255,ne[be++]=255&fe),ne},B.fromByteArray=function(me){for(var fe,re=me.length,ye=re%3,ve=[],ce=16383,ne=0,be=re-ye;ne<be;ne+=ce)ve.push(se(me,ne,ne+ce>be?be:ne+ce));return ye===1?(fe=me[re-1],ve.push(O[fe>>2]+O[fe<<4&63]+"==")):ye===2&&(fe=(me[re-2]<<8)+me[re-1],ve.push(O[fe>>10]+O[fe>>4&63]+O[fe<<2&63]+"=")),ve.join("")};for(var O=[],P=[],V=typeof Uint8Array<"u"?Uint8Array:Array,ie="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",he=0,ue=ie.length;he<ue;++he)O[he]=ie[he],P[ie.charCodeAt(he)]=he;function x(me){var fe=me.length;if(fe%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var re=me.indexOf("=");return re===-1&&(re=fe),[re,re===fe?0:4-re%4]}function se(me,fe,re){for(var ye,ve,ce=[],ne=fe;ne<re;ne+=3)ye=(me[ne]<<16&16711680)+(me[ne+1]<<8&65280)+(255&me[ne+2]),ce.push(O[(ve=ye)>>18&63]+O[ve>>12&63]+O[ve>>6&63]+O[63&ve]);return ce.join("")}P["-".charCodeAt(0)]=62,P["_".charCodeAt(0)]=63},764:(_,B,O)=>{const P=O(742),V=O(645),ie=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;B.Buffer=x,B.SlowBuffer=function(p){return+p!=p&&(p=0),x.alloc(+p)},B.INSPECT_MAX_BYTES=50;const he=2147483647;function ue(p){if(p>he)throw new RangeError('The value "'+p+'" is invalid for option "size"');const g=new Uint8Array(p);return Object.setPrototypeOf(g,x.prototype),g}function x(p,g,b){if(typeof p=="number"){if(typeof g=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return fe(p)}return se(p,g,b)}function se(p,g,b){if(typeof p=="string")return function(G,de){if(typeof de=="string"&&de!==""||(de="utf8"),!x.isEncoding(de))throw new TypeError("Unknown encoding: "+de);const Ne=0|ce(G,de);let qe=ue(Ne);const ft=qe.write(G,de);return ft!==Ne&&(qe=qe.slice(0,ft)),qe}(p,g);if(ArrayBuffer.isView(p))return function(G){if(sr(G,Uint8Array)){const de=new Uint8Array(G);return ye(de.buffer,de.byteOffset,de.byteLength)}return re(G)}(p);if(p==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p);if(sr(p,ArrayBuffer)||p&&sr(p.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(sr(p,SharedArrayBuffer)||p&&sr(p.buffer,SharedArrayBuffer)))return ye(p,g,b);if(typeof p=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const z=p.valueOf&&p.valueOf();if(z!=null&&z!==p)return x.from(z,g,b);const H=function(G){if(x.isBuffer(G)){const de=0|ve(G.length),Ne=ue(de);return Ne.length===0||G.copy(Ne,0,0,de),Ne}if(G.length!==void 0)return typeof G.length!="number"||Io(G.length)?ue(0):re(G);if(G.type==="Buffer"&&Array.isArray(G.data))return re(G.data)}(p);if(H)return H;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof p[Symbol.toPrimitive]=="function")return x.from(p[Symbol.toPrimitive]("string"),g,b);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p)}function me(p){if(typeof p!="number")throw new TypeError('"size" argument must be of type number');if(p<0)throw new RangeError('The value "'+p+'" is invalid for option "size"')}function fe(p){return me(p),ue(p<0?0:0|ve(p))}function re(p){const g=p.length<0?0:0|ve(p.length),b=ue(g);for(let z=0;z<g;z+=1)b[z]=255&p[z];return b}function ye(p,g,b){if(g<0||p.byteLength<g)throw new RangeError('"offset" is outside of buffer bounds');if(p.byteLength<g+(b||0))throw new RangeError('"length" is outside of buffer bounds');let z;return z=g===void 0&&b===void 0?new Uint8Array(p):b===void 0?new Uint8Array(p,g):new Uint8Array(p,g,b),Object.setPrototypeOf(z,x.prototype),z}function ve(p){if(p>=he)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+he.toString(16)+" bytes");return 0|p}function ce(p,g){if(x.isBuffer(p))return p.length;if(ArrayBuffer.isView(p)||sr(p,ArrayBuffer))return p.byteLength;if(typeof p!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof p);const b=p.length,z=arguments.length>2&&arguments[2]===!0;if(!z&&b===0)return 0;let H=!1;for(;;)switch(g){case"ascii":case"latin1":case"binary":return b;case"utf8":case"utf-8":return er(p).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*b;case"hex":return b>>>1;case"base64":return ir(p).length;default:if(H)return z?-1:er(p).length;g=(""+g).toLowerCase(),H=!0}}function ne(p,g,b){let z=!1;if((g===void 0||g<0)&&(g=0),g>this.length||((b===void 0||b>this.length)&&(b=this.length),b<=0)||(b>>>=0)<=(g>>>=0))return"";for(p||(p="utf8");;)switch(p){case"hex":return tt(this,g,b);case"utf8":case"utf-8":return Oe(this,g,b);case"ascii":return Re(this,g,b);case"latin1":case"binary":return Le(this,g,b);case"base64":return $e(this,g,b);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ct(this,g,b);default:if(z)throw new TypeError("Unknown encoding: "+p);p=(p+"").toLowerCase(),z=!0}}function be(p,g,b){const z=p[g];p[g]=p[b],p[b]=z}function X(p,g,b,z,H){if(p.length===0)return-1;if(typeof b=="string"?(z=b,b=0):b>2147483647?b=2147483647:b<-2147483648&&(b=-2147483648),Io(b=+b)&&(b=H?0:p.length-1),b<0&&(b=p.length+b),b>=p.length){if(H)return-1;b=p.length-1}else if(b<0){if(!H)return-1;b=0}if(typeof g=="string"&&(g=x.from(g,z)),x.isBuffer(g))return g.length===0?-1:q(p,g,b,z,H);if(typeof g=="number")return g&=255,typeof Uint8Array.prototype.indexOf=="function"?H?Uint8Array.prototype.indexOf.call(p,g,b):Uint8Array.prototype.lastIndexOf.call(p,g,b):q(p,[g],b,z,H);throw new TypeError("val must be string, number or Buffer")}function q(p,g,b,z,H){let G,de=1,Ne=p.length,qe=g.length;if(z!==void 0&&((z=String(z).toLowerCase())==="ucs2"||z==="ucs-2"||z==="utf16le"||z==="utf-16le")){if(p.length<2||g.length<2)return-1;de=2,Ne/=2,qe/=2,b/=2}function ft(Je,mt){return de===1?Je[mt]:Je.readUInt16BE(mt*de)}if(H){let Je=-1;for(G=b;G<Ne;G++)if(ft(p,G)===ft(g,Je===-1?0:G-Je)){if(Je===-1&&(Je=G),G-Je+1===qe)return Je*de}else Je!==-1&&(G-=G-Je),Je=-1}else for(b+qe>Ne&&(b=Ne-qe),G=b;G>=0;G--){let Je=!0;for(let mt=0;mt<qe;mt++)if(ft(p,G+mt)!==ft(g,mt)){Je=!1;break}if(Je)return G}return-1}function Y(p,g,b,z){b=Number(b)||0;const H=p.length-b;z?(z=Number(z))>H&&(z=H):z=H;const G=g.length;let de;for(z>G/2&&(z=G/2),de=0;de<z;++de){const Ne=parseInt(g.substr(2*de,2),16);if(Io(Ne))return de;p[b+de]=Ne}return de}function ee(p,g,b,z){return Sr(er(g,p.length-b),p,b,z)}function K(p,g,b,z){return Sr(function(H){const G=[];for(let de=0;de<H.length;++de)G.push(255&H.charCodeAt(de));return G}(g),p,b,z)}function ae(p,g,b,z){return Sr(ir(g),p,b,z)}function pe(p,g,b,z){return Sr(function(H,G){let de,Ne,qe;const ft=[];for(let Je=0;Je<H.length&&!((G-=2)<0);++Je)de=H.charCodeAt(Je),Ne=de>>8,qe=de%256,ft.push(qe),ft.push(Ne);return ft}(g,p.length-b),p,b,z)}function $e(p,g,b){return g===0&&b===p.length?P.fromByteArray(p):P.fromByteArray(p.slice(g,b))}function Oe(p,g,b){b=Math.min(p.length,b);const z=[];let H=g;for(;H<b;){const G=p[H];let de=null,Ne=G>239?4:G>223?3:G>191?2:1;if(H+Ne<=b){let qe,ft,Je,mt;switch(Ne){case 1:G<128&&(de=G);break;case 2:qe=p[H+1],(192&qe)==128&&(mt=(31&G)<<6|63&qe,mt>127&&(de=mt));break;case 3:qe=p[H+1],ft=p[H+2],(192&qe)==128&&(192&ft)==128&&(mt=(15&G)<<12|(63&qe)<<6|63&ft,mt>2047&&(mt<55296||mt>57343)&&(de=mt));break;case 4:qe=p[H+1],ft=p[H+2],Je=p[H+3],(192&qe)==128&&(192&ft)==128&&(192&Je)==128&&(mt=(15&G)<<18|(63&qe)<<12|(63&ft)<<6|63&Je,mt>65535&&mt<1114112&&(de=mt))}}de===null?(de=65533,Ne=1):de>65535&&(de-=65536,z.push(de>>>10&1023|55296),de=56320|1023&de),z.push(de),H+=Ne}return function(G){const de=G.length;if(de<=Ae)return String.fromCharCode.apply(String,G);let Ne="",qe=0;for(;qe<de;)Ne+=String.fromCharCode.apply(String,G.slice(qe,qe+=Ae));return Ne}(z)}B.kMaxLength=he,x.TYPED_ARRAY_SUPPORT=function(){try{const p=new Uint8Array(1),g={foo:function(){return 42}};return Object.setPrototypeOf(g,Uint8Array.prototype),Object.setPrototypeOf(p,g),p.foo()===42}catch{return!1}}(),x.TYPED_ARRAY_SUPPORT||typeof console>"u"||typeof console.error!="function"||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(x.prototype,"parent",{enumerable:!0,get:function(){if(x.isBuffer(this))return this.buffer}}),Object.defineProperty(x.prototype,"offset",{enumerable:!0,get:function(){if(x.isBuffer(this))return this.byteOffset}}),x.poolSize=8192,x.from=function(p,g,b){return se(p,g,b)},Object.setPrototypeOf(x.prototype,Uint8Array.prototype),Object.setPrototypeOf(x,Uint8Array),x.alloc=function(p,g,b){return function(z,H,G){return me(z),z<=0?ue(z):H!==void 0?typeof G=="string"?ue(z).fill(H,G):ue(z).fill(H):ue(z)}(p,g,b)},x.allocUnsafe=function(p){return fe(p)},x.allocUnsafeSlow=function(p){return fe(p)},x.isBuffer=function(p){return p!=null&&p._isBuffer===!0&&p!==x.prototype},x.compare=function(p,g){if(sr(p,Uint8Array)&&(p=x.from(p,p.offset,p.byteLength)),sr(g,Uint8Array)&&(g=x.from(g,g.offset,g.byteLength)),!x.isBuffer(p)||!x.isBuffer(g))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(p===g)return 0;let b=p.length,z=g.length;for(let H=0,G=Math.min(b,z);H<G;++H)if(p[H]!==g[H]){b=p[H],z=g[H];break}return b<z?-1:z<b?1:0},x.isEncoding=function(p){switch(String(p).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},x.concat=function(p,g){if(!Array.isArray(p))throw new TypeError('"list" argument must be an Array of Buffers');if(p.length===0)return x.alloc(0);let b;if(g===void 0)for(g=0,b=0;b<p.length;++b)g+=p[b].length;const z=x.allocUnsafe(g);let H=0;for(b=0;b<p.length;++b){let G=p[b];if(sr(G,Uint8Array))H+G.length>z.length?(x.isBuffer(G)||(G=x.from(G)),G.copy(z,H)):Uint8Array.prototype.set.call(z,G,H);else{if(!x.isBuffer(G))throw new TypeError('"list" argument must be an Array of Buffers');G.copy(z,H)}H+=G.length}return z},x.byteLength=ce,x.prototype._isBuffer=!0,x.prototype.swap16=function(){const p=this.length;if(p%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let g=0;g<p;g+=2)be(this,g,g+1);return this},x.prototype.swap32=function(){const p=this.length;if(p%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let g=0;g<p;g+=4)be(this,g,g+3),be(this,g+1,g+2);return this},x.prototype.swap64=function(){const p=this.length;if(p%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let g=0;g<p;g+=8)be(this,g,g+7),be(this,g+1,g+6),be(this,g+2,g+5),be(this,g+3,g+4);return this},x.prototype.toString=function(){const p=this.length;return p===0?"":arguments.length===0?Oe(this,0,p):ne.apply(this,arguments)},x.prototype.toLocaleString=x.prototype.toString,x.prototype.equals=function(p){if(!x.isBuffer(p))throw new TypeError("Argument must be a Buffer");return this===p||x.compare(this,p)===0},x.prototype.inspect=function(){let p="";const g=B.INSPECT_MAX_BYTES;return p=this.toString("hex",0,g).replace(/(.{2})/g,"$1 ").trim(),this.length>g&&(p+=" ... "),"<Buffer "+p+">"},ie&&(x.prototype[ie]=x.prototype.inspect),x.prototype.compare=function(p,g,b,z,H){if(sr(p,Uint8Array)&&(p=x.from(p,p.offset,p.byteLength)),!x.isBuffer(p))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof p);if(g===void 0&&(g=0),b===void 0&&(b=p?p.length:0),z===void 0&&(z=0),H===void 0&&(H=this.length),g<0||b>p.length||z<0||H>this.length)throw new RangeError("out of range index");if(z>=H&&g>=b)return 0;if(z>=H)return-1;if(g>=b)return 1;if(this===p)return 0;let G=(H>>>=0)-(z>>>=0),de=(b>>>=0)-(g>>>=0);const Ne=Math.min(G,de),qe=this.slice(z,H),ft=p.slice(g,b);for(let Je=0;Je<Ne;++Je)if(qe[Je]!==ft[Je]){G=qe[Je],de=ft[Je];break}return G<de?-1:de<G?1:0},x.prototype.includes=function(p,g,b){return this.indexOf(p,g,b)!==-1},x.prototype.indexOf=function(p,g,b){return X(this,p,g,b,!0)},x.prototype.lastIndexOf=function(p,g,b){return X(this,p,g,b,!1)},x.prototype.write=function(p,g,b,z){if(g===void 0)z="utf8",b=this.length,g=0;else if(b===void 0&&typeof g=="string")z=g,b=this.length,g=0;else{if(!isFinite(g))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");g>>>=0,isFinite(b)?(b>>>=0,z===void 0&&(z="utf8")):(z=b,b=void 0)}const H=this.length-g;if((b===void 0||b>H)&&(b=H),p.length>0&&(b<0||g<0)||g>this.length)throw new RangeError("Attempt to write outside buffer bounds");z||(z="utf8");let G=!1;for(;;)switch(z){case"hex":return Y(this,p,g,b);case"utf8":case"utf-8":return ee(this,p,g,b);case"ascii":case"latin1":case"binary":return K(this,p,g,b);case"base64":return ae(this,p,g,b);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pe(this,p,g,b);default:if(G)throw new TypeError("Unknown encoding: "+z);z=(""+z).toLowerCase(),G=!0}},x.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const Ae=4096;function Re(p,g,b){let z="";b=Math.min(p.length,b);for(let H=g;H<b;++H)z+=String.fromCharCode(127&p[H]);return z}function Le(p,g,b){let z="";b=Math.min(p.length,b);for(let H=g;H<b;++H)z+=String.fromCharCode(p[H]);return z}function tt(p,g,b){const z=p.length;(!g||g<0)&&(g=0),(!b||b<0||b>z)&&(b=z);let H="";for(let G=g;G<b;++G)H+=Ys[p[G]];return H}function ct(p,g,b){const z=p.slice(g,b);let H="";for(let G=0;G<z.length-1;G+=2)H+=String.fromCharCode(z[G]+256*z[G+1]);return H}function Pe(p,g,b){if(p%1!=0||p<0)throw new RangeError("offset is not uint");if(p+g>b)throw new RangeError("Trying to access beyond buffer length")}function Ue(p,g,b,z,H,G){if(!x.isBuffer(p))throw new TypeError('"buffer" argument must be a Buffer instance');if(g>H||g<G)throw new RangeError('"value" argument is out of bounds');if(b+z>p.length)throw new RangeError("Index out of range")}function De(p,g,b,z,H){Ut(g,z,H,p,b,7);let G=Number(g&BigInt(4294967295));p[b++]=G,G>>=8,p[b++]=G,G>>=8,p[b++]=G,G>>=8,p[b++]=G;let de=Number(g>>BigInt(32)&BigInt(4294967295));return p[b++]=de,de>>=8,p[b++]=de,de>>=8,p[b++]=de,de>>=8,p[b++]=de,b}function Qe(p,g,b,z,H){Ut(g,z,H,p,b,7);let G=Number(g&BigInt(4294967295));p[b+7]=G,G>>=8,p[b+6]=G,G>>=8,p[b+5]=G,G>>=8,p[b+4]=G;let de=Number(g>>BigInt(32)&BigInt(4294967295));return p[b+3]=de,de>>=8,p[b+2]=de,de>>=8,p[b+1]=de,de>>=8,p[b]=de,b+8}function Ke(p,g,b,z,H,G){if(b+z>p.length)throw new RangeError("Index out of range");if(b<0)throw new RangeError("Index out of range")}function v(p,g,b,z,H){return g=+g,b>>>=0,H||Ke(p,0,b,4),V.write(p,g,b,z,23,4),b+4}function ze(p,g,b,z,H){return g=+g,b>>>=0,H||Ke(p,0,b,8),V.write(p,g,b,z,52,8),b+8}x.prototype.slice=function(p,g){const b=this.length;(p=~~p)<0?(p+=b)<0&&(p=0):p>b&&(p=b),(g=g===void 0?b:~~g)<0?(g+=b)<0&&(g=0):g>b&&(g=b),g<p&&(g=p);const z=this.subarray(p,g);return Object.setPrototypeOf(z,x.prototype),z},x.prototype.readUintLE=x.prototype.readUIntLE=function(p,g,b){p>>>=0,g>>>=0,b||Pe(p,g,this.length);let z=this[p],H=1,G=0;for(;++G<g&&(H*=256);)z+=this[p+G]*H;return z},x.prototype.readUintBE=x.prototype.readUIntBE=function(p,g,b){p>>>=0,g>>>=0,b||Pe(p,g,this.length);let z=this[p+--g],H=1;for(;g>0&&(H*=256);)z+=this[p+--g]*H;return z},x.prototype.readUint8=x.prototype.readUInt8=function(p,g){return p>>>=0,g||Pe(p,1,this.length),this[p]},x.prototype.readUint16LE=x.prototype.readUInt16LE=function(p,g){return p>>>=0,g||Pe(p,2,this.length),this[p]|this[p+1]<<8},x.prototype.readUint16BE=x.prototype.readUInt16BE=function(p,g){return p>>>=0,g||Pe(p,2,this.length),this[p]<<8|this[p+1]},x.prototype.readUint32LE=x.prototype.readUInt32LE=function(p,g){return p>>>=0,g||Pe(p,4,this.length),(this[p]|this[p+1]<<8|this[p+2]<<16)+16777216*this[p+3]},x.prototype.readUint32BE=x.prototype.readUInt32BE=function(p,g){return p>>>=0,g||Pe(p,4,this.length),16777216*this[p]+(this[p+1]<<16|this[p+2]<<8|this[p+3])},x.prototype.readBigUInt64LE=kr(function(p){ot(p>>>=0,"offset");const g=this[p],b=this[p+7];g!==void 0&&b!==void 0||yt(p,this.length-8);const z=g+256*this[++p]+65536*this[++p]+this[++p]*2**24,H=this[++p]+256*this[++p]+65536*this[++p]+b*2**24;return BigInt(z)+(BigInt(H)<<BigInt(32))}),x.prototype.readBigUInt64BE=kr(function(p){ot(p>>>=0,"offset");const g=this[p],b=this[p+7];g!==void 0&&b!==void 0||yt(p,this.length-8);const z=g*2**24+65536*this[++p]+256*this[++p]+this[++p],H=this[++p]*2**24+65536*this[++p]+256*this[++p]+b;return(BigInt(z)<<BigInt(32))+BigInt(H)}),x.prototype.readIntLE=function(p,g,b){p>>>=0,g>>>=0,b||Pe(p,g,this.length);let z=this[p],H=1,G=0;for(;++G<g&&(H*=256);)z+=this[p+G]*H;return H*=128,z>=H&&(z-=Math.pow(2,8*g)),z},x.prototype.readIntBE=function(p,g,b){p>>>=0,g>>>=0,b||Pe(p,g,this.length);let z=g,H=1,G=this[p+--z];for(;z>0&&(H*=256);)G+=this[p+--z]*H;return H*=128,G>=H&&(G-=Math.pow(2,8*g)),G},x.prototype.readInt8=function(p,g){return p>>>=0,g||Pe(p,1,this.length),128&this[p]?-1*(255-this[p]+1):this[p]},x.prototype.readInt16LE=function(p,g){p>>>=0,g||Pe(p,2,this.length);const b=this[p]|this[p+1]<<8;return 32768&b?4294901760|b:b},x.prototype.readInt16BE=function(p,g){p>>>=0,g||Pe(p,2,this.length);const b=this[p+1]|this[p]<<8;return 32768&b?4294901760|b:b},x.prototype.readInt32LE=function(p,g){return p>>>=0,g||Pe(p,4,this.length),this[p]|this[p+1]<<8|this[p+2]<<16|this[p+3]<<24},x.prototype.readInt32BE=function(p,g){return p>>>=0,g||Pe(p,4,this.length),this[p]<<24|this[p+1]<<16|this[p+2]<<8|this[p+3]},x.prototype.readBigInt64LE=kr(function(p){ot(p>>>=0,"offset");const g=this[p],b=this[p+7];g!==void 0&&b!==void 0||yt(p,this.length-8);const z=this[p+4]+256*this[p+5]+65536*this[p+6]+(b<<24);return(BigInt(z)<<BigInt(32))+BigInt(g+256*this[++p]+65536*this[++p]+this[++p]*16777216)}),x.prototype.readBigInt64BE=kr(function(p){ot(p>>>=0,"offset");const g=this[p],b=this[p+7];g!==void 0&&b!==void 0||yt(p,this.length-8);const z=(g<<24)+65536*this[++p]+256*this[++p]+this[++p];return(BigInt(z)<<BigInt(32))+BigInt(this[++p]*16777216+65536*this[++p]+256*this[++p]+b)}),x.prototype.readFloatLE=function(p,g){return p>>>=0,g||Pe(p,4,this.length),V.read(this,p,!0,23,4)},x.prototype.readFloatBE=function(p,g){return p>>>=0,g||Pe(p,4,this.length),V.read(this,p,!1,23,4)},x.prototype.readDoubleLE=function(p,g){return p>>>=0,g||Pe(p,8,this.length),V.read(this,p,!0,52,8)},x.prototype.readDoubleBE=function(p,g){return p>>>=0,g||Pe(p,8,this.length),V.read(this,p,!1,52,8)},x.prototype.writeUintLE=x.prototype.writeUIntLE=function(p,g,b,z){p=+p,g>>>=0,b>>>=0,!z&&Ue(this,p,g,b,Math.pow(2,8*b)-1,0);let H=1,G=0;for(this[g]=255&p;++G<b&&(H*=256);)this[g+G]=p/H&255;return g+b},x.prototype.writeUintBE=x.prototype.writeUIntBE=function(p,g,b,z){p=+p,g>>>=0,b>>>=0,!z&&Ue(this,p,g,b,Math.pow(2,8*b)-1,0);let H=b-1,G=1;for(this[g+H]=255&p;--H>=0&&(G*=256);)this[g+H]=p/G&255;return g+b},x.prototype.writeUint8=x.prototype.writeUInt8=function(p,g,b){return p=+p,g>>>=0,b||Ue(this,p,g,1,255,0),this[g]=255&p,g+1},x.prototype.writeUint16LE=x.prototype.writeUInt16LE=function(p,g,b){return p=+p,g>>>=0,b||Ue(this,p,g,2,65535,0),this[g]=255&p,this[g+1]=p>>>8,g+2},x.prototype.writeUint16BE=x.prototype.writeUInt16BE=function(p,g,b){return p=+p,g>>>=0,b||Ue(this,p,g,2,65535,0),this[g]=p>>>8,this[g+1]=255&p,g+2},x.prototype.writeUint32LE=x.prototype.writeUInt32LE=function(p,g,b){return p=+p,g>>>=0,b||Ue(this,p,g,4,4294967295,0),this[g+3]=p>>>24,this[g+2]=p>>>16,this[g+1]=p>>>8,this[g]=255&p,g+4},x.prototype.writeUint32BE=x.prototype.writeUInt32BE=function(p,g,b){return p=+p,g>>>=0,b||Ue(this,p,g,4,4294967295,0),this[g]=p>>>24,this[g+1]=p>>>16,this[g+2]=p>>>8,this[g+3]=255&p,g+4},x.prototype.writeBigUInt64LE=kr(function(p,g=0){return De(this,p,g,BigInt(0),BigInt("0xffffffffffffffff"))}),x.prototype.writeBigUInt64BE=kr(function(p,g=0){return Qe(this,p,g,BigInt(0),BigInt("0xffffffffffffffff"))}),x.prototype.writeIntLE=function(p,g,b,z){if(p=+p,g>>>=0,!z){const Ne=Math.pow(2,8*b-1);Ue(this,p,g,b,Ne-1,-Ne)}let H=0,G=1,de=0;for(this[g]=255&p;++H<b&&(G*=256);)p<0&&de===0&&this[g+H-1]!==0&&(de=1),this[g+H]=(p/G>>0)-de&255;return g+b},x.prototype.writeIntBE=function(p,g,b,z){if(p=+p,g>>>=0,!z){const Ne=Math.pow(2,8*b-1);Ue(this,p,g,b,Ne-1,-Ne)}let H=b-1,G=1,de=0;for(this[g+H]=255&p;--H>=0&&(G*=256);)p<0&&de===0&&this[g+H+1]!==0&&(de=1),this[g+H]=(p/G>>0)-de&255;return g+b},x.prototype.writeInt8=function(p,g,b){return p=+p,g>>>=0,b||Ue(this,p,g,1,127,-128),p<0&&(p=255+p+1),this[g]=255&p,g+1},x.prototype.writeInt16LE=function(p,g,b){return p=+p,g>>>=0,b||Ue(this,p,g,2,32767,-32768),this[g]=255&p,this[g+1]=p>>>8,g+2},x.prototype.writeInt16BE=function(p,g,b){return p=+p,g>>>=0,b||Ue(this,p,g,2,32767,-32768),this[g]=p>>>8,this[g+1]=255&p,g+2},x.prototype.writeInt32LE=function(p,g,b){return p=+p,g>>>=0,b||Ue(this,p,g,4,2147483647,-2147483648),this[g]=255&p,this[g+1]=p>>>8,this[g+2]=p>>>16,this[g+3]=p>>>24,g+4},x.prototype.writeInt32BE=function(p,g,b){return p=+p,g>>>=0,b||Ue(this,p,g,4,2147483647,-2147483648),p<0&&(p=4294967295+p+1),this[g]=p>>>24,this[g+1]=p>>>16,this[g+2]=p>>>8,this[g+3]=255&p,g+4},x.prototype.writeBigInt64LE=kr(function(p,g=0){return De(this,p,g,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),x.prototype.writeBigInt64BE=kr(function(p,g=0){return Qe(this,p,g,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),x.prototype.writeFloatLE=function(p,g,b){return v(this,p,g,!0,b)},x.prototype.writeFloatBE=function(p,g,b){return v(this,p,g,!1,b)},x.prototype.writeDoubleLE=function(p,g,b){return ze(this,p,g,!0,b)},x.prototype.writeDoubleBE=function(p,g,b){return ze(this,p,g,!1,b)},x.prototype.copy=function(p,g,b,z){if(!x.isBuffer(p))throw new TypeError("argument should be a Buffer");if(b||(b=0),z||z===0||(z=this.length),g>=p.length&&(g=p.length),g||(g=0),z>0&&z<b&&(z=b),z===b||p.length===0||this.length===0)return 0;if(g<0)throw new RangeError("targetStart out of bounds");if(b<0||b>=this.length)throw new RangeError("Index out of range");if(z<0)throw new RangeError("sourceEnd out of bounds");z>this.length&&(z=this.length),p.length-g<z-b&&(z=p.length-g+b);const H=z-b;return this===p&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(g,b,z):Uint8Array.prototype.set.call(p,this.subarray(b,z),g),H},x.prototype.fill=function(p,g,b,z){if(typeof p=="string"){if(typeof g=="string"?(z=g,g=0,b=this.length):typeof b=="string"&&(z=b,b=this.length),z!==void 0&&typeof z!="string")throw new TypeError("encoding must be a string");if(typeof z=="string"&&!x.isEncoding(z))throw new TypeError("Unknown encoding: "+z);if(p.length===1){const G=p.charCodeAt(0);(z==="utf8"&&G<128||z==="latin1")&&(p=G)}}else typeof p=="number"?p&=255:typeof p=="boolean"&&(p=Number(p));if(g<0||this.length<g||this.length<b)throw new RangeError("Out of range index");if(b<=g)return this;let H;if(g>>>=0,b=b===void 0?this.length:b>>>0,p||(p=0),typeof p=="number")for(H=g;H<b;++H)this[H]=p;else{const G=x.isBuffer(p)?p:x.from(p,z),de=G.length;if(de===0)throw new TypeError('The value "'+p+'" is invalid for argument "value"');for(H=0;H<b-g;++H)this[H+g]=G[H%de]}return this};const Ie={};function It(p,g,b){Ie[p]=class extends b{constructor(){super(),Object.defineProperty(this,"message",{value:g.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${p}]`,this.stack,delete this.name}get code(){return p}set code(z){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:z,writable:!0})}toString(){return`${this.name} [${p}]: ${this.message}`}}}function pt(p){let g="",b=p.length;const z=p[0]==="-"?1:0;for(;b>=z+4;b-=3)g=`_${p.slice(b-3,b)}${g}`;return`${p.slice(0,b)}${g}`}function Ut(p,g,b,z,H,G){if(p>b||p<g){const de=typeof g=="bigint"?"n":"";let Ne;throw Ne=G>3?g===0||g===BigInt(0)?`>= 0${de} and < 2${de} ** ${8*(G+1)}${de}`:`>= -(2${de} ** ${8*(G+1)-1}${de}) and < 2 ** ${8*(G+1)-1}${de}`:`>= ${g}${de} and <= ${b}${de}`,new Ie.ERR_OUT_OF_RANGE("value",Ne,p)}(function(de,Ne,qe){ot(Ne,"offset"),de[Ne]!==void 0&&de[Ne+qe]!==void 0||yt(Ne,de.length-(qe+1))})(z,H,G)}function ot(p,g){if(typeof p!="number")throw new Ie.ERR_INVALID_ARG_TYPE(g,"number",p)}function yt(p,g,b){throw Math.floor(p)!==p?(ot(p,b),new Ie.ERR_OUT_OF_RANGE(b||"offset","an integer",p)):g<0?new Ie.ERR_BUFFER_OUT_OF_BOUNDS:new Ie.ERR_OUT_OF_RANGE(b||"offset",`>= ${b?1:0} and <= ${g}`,p)}It("ERR_BUFFER_OUT_OF_BOUNDS",function(p){return p?`${p} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),It("ERR_INVALID_ARG_TYPE",function(p,g){return`The "${p}" argument must be of type number. Received type ${typeof g}`},TypeError),It("ERR_OUT_OF_RANGE",function(p,g,b){let z=`The value of "${p}" is out of range.`,H=b;return Number.isInteger(b)&&Math.abs(b)>4294967296?H=pt(String(b)):typeof b=="bigint"&&(H=String(b),(b>BigInt(2)**BigInt(32)||b<-(BigInt(2)**BigInt(32)))&&(H=pt(H)),H+="n"),z+=` It must be ${g}. Received ${H}`,z},RangeError);const Un=/[^+/0-9A-Za-z-_]/g;function er(p,g){let b;g=g||1/0;const z=p.length;let H=null;const G=[];for(let de=0;de<z;++de){if(b=p.charCodeAt(de),b>55295&&b<57344){if(!H){if(b>56319){(g-=3)>-1&&G.push(239,191,189);continue}if(de+1===z){(g-=3)>-1&&G.push(239,191,189);continue}H=b;continue}if(b<56320){(g-=3)>-1&&G.push(239,191,189),H=b;continue}b=65536+(H-55296<<10|b-56320)}else H&&(g-=3)>-1&&G.push(239,191,189);if(H=null,b<128){if((g-=1)<0)break;G.push(b)}else if(b<2048){if((g-=2)<0)break;G.push(b>>6|192,63&b|128)}else if(b<65536){if((g-=3)<0)break;G.push(b>>12|224,b>>6&63|128,63&b|128)}else{if(!(b<1114112))throw new Error("Invalid code point");if((g-=4)<0)break;G.push(b>>18|240,b>>12&63|128,b>>6&63|128,63&b|128)}}return G}function ir(p){return P.toByteArray(function(g){if((g=(g=g.split("=")[0]).trim().replace(Un,"")).length<2)return"";for(;g.length%4!=0;)g+="=";return g}(p))}function Sr(p,g,b,z){let H;for(H=0;H<z&&!(H+b>=g.length||H>=p.length);++H)g[H+b]=p[H];return H}function sr(p,g){return p instanceof g||p!=null&&p.constructor!=null&&p.constructor.name!=null&&p.constructor.name===g.name}function Io(p){return p!=p}const Ys=function(){const p="0123456789abcdef",g=new Array(256);for(let b=0;b<16;++b){const z=16*b;for(let H=0;H<16;++H)g[z+H]=p[b]+p[H]}return g}();function kr(p){return typeof BigInt>"u"?Ga:p}function Ga(){throw new Error("BigInt not supported")}},645:(_,B)=>{B.read=function(O,P,V,ie,he){var ue,x,se=8*he-ie-1,me=(1<<se)-1,fe=me>>1,re=-7,ye=V?he-1:0,ve=V?-1:1,ce=O[P+ye];for(ye+=ve,ue=ce&(1<<-re)-1,ce>>=-re,re+=se;re>0;ue=256*ue+O[P+ye],ye+=ve,re-=8);for(x=ue&(1<<-re)-1,ue>>=-re,re+=ie;re>0;x=256*x+O[P+ye],ye+=ve,re-=8);if(ue===0)ue=1-fe;else{if(ue===me)return x?NaN:1/0*(ce?-1:1);x+=Math.pow(2,ie),ue-=fe}return(ce?-1:1)*x*Math.pow(2,ue-ie)},B.write=function(O,P,V,ie,he,ue){var x,se,me,fe=8*ue-he-1,re=(1<<fe)-1,ye=re>>1,ve=he===23?Math.pow(2,-24)-Math.pow(2,-77):0,ce=ie?0:ue-1,ne=ie?1:-1,be=P<0||P===0&&1/P<0?1:0;for(P=Math.abs(P),isNaN(P)||P===1/0?(se=isNaN(P)?1:0,x=re):(x=Math.floor(Math.log(P)/Math.LN2),P*(me=Math.pow(2,-x))<1&&(x--,me*=2),(P+=x+ye>=1?ve/me:ve*Math.pow(2,1-ye))*me>=2&&(x++,me/=2),x+ye>=re?(se=0,x=re):x+ye>=1?(se=(P*me-1)*Math.pow(2,he),x+=ye):(se=P*Math.pow(2,ye-1)*Math.pow(2,he),x=0));he>=8;O[V+ce]=255&se,ce+=ne,se/=256,he-=8);for(x=x<<he|se,fe+=he;fe>0;O[V+ce]=255&x,ce+=ne,x/=256,fe-=8);O[V+ce-ne]|=128*be}},874:()=>{(function(_){var B="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",O={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},P={bash:O,environment:{pattern:RegExp("\\$"+B),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+B),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};_.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+B),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:P},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:O}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:P},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:P.entity}}],environment:{pattern:RegExp("\\$?"+B),alias:"constant"},variable:P.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},O.inside=_.languages.bash;for(var V=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],ie=P.variable[1].inside,he=0;he<V.length;he++)ie[V[he]]=_.languages.bash[V[he]];_.languages.shell=_.languages.bash})(Prism)},16:()=>{(function(_){function B(ze,Ie){return ze.replace(/<<(\d+)>>/g,function(It,pt){return"(?:"+Ie[+pt]+")"})}function O(ze,Ie,It){return RegExp(B(ze,Ie),It||"")}function P(ze,Ie){for(var It=0;It<Ie;It++)ze=ze.replace(/<<self>>/g,function(){return"(?:"+ze+")"});return ze.replace(/<<self>>/g,"[^\\s\\S]")}var V="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",ie="class enum interface record struct",he="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",ue="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function x(ze){return"\\b(?:"+ze.trim().replace(/ /g,"|")+")\\b"}var se=x(ie),me=RegExp(x(V+" "+ie+" "+he+" "+ue)),fe=x(ie+" "+he+" "+ue),re=x(V+" "+ie+" "+ue),ye=P(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),ve=P(/\((?:[^()]|<<self>>)*\)/.source,2),ce=/@?\b[A-Za-z_]\w*\b/.source,ne=B(/<<0>>(?:\s*<<1>>)?/.source,[ce,ye]),be=B(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[fe,ne]),X=/\[\s*(?:,\s*)*\]/.source,q=B(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[be,X]),Y=B(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[ye,ve,X]),ee=B(/\(<<0>>+(?:,<<0>>+)+\)/.source,[Y]),K=B(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[ee,be,X]),ae={keyword:me,punctuation:/[<>()?,.:[\]]/},pe=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,$e=/"(?:\\.|[^\\"\r\n])*"/.source,Oe=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;_.languages.csharp=_.languages.extend("clike",{string:[{pattern:O(/(^|[^$\\])<<0>>/.source,[Oe]),lookbehind:!0,greedy:!0},{pattern:O(/(^|[^@$\\])<<0>>/.source,[$e]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:O(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[be]),lookbehind:!0,inside:ae},{pattern:O(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[ce,K]),lookbehind:!0,inside:ae},{pattern:O(/(\busing\s+)<<0>>(?=\s*=)/.source,[ce]),lookbehind:!0},{pattern:O(/(\b<<0>>\s+)<<1>>/.source,[se,ne]),lookbehind:!0,inside:ae},{pattern:O(/(\bcatch\s*\(\s*)<<0>>/.source,[be]),lookbehind:!0,inside:ae},{pattern:O(/(\bwhere\s+)<<0>>/.source,[ce]),lookbehind:!0},{pattern:O(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[q]),lookbehind:!0,inside:ae},{pattern:O(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[K,re,ce]),inside:ae}],keyword:me,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),_.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),_.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:O(/([(,]\s*)<<0>>(?=\s*:)/.source,[ce]),lookbehind:!0,alias:"punctuation"}}),_.languages.insertBefore("csharp","class-name",{namespace:{pattern:O(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[ce]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:O(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[ve]),lookbehind:!0,alias:"class-name",inside:ae},"return-type":{pattern:O(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[K,be]),inside:ae,alias:"class-name"},"constructor-invocation":{pattern:O(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[K]),lookbehind:!0,inside:ae,alias:"class-name"},"generic-method":{pattern:O(/<<0>>\s*<<1>>(?=\s*\()/.source,[ce,ye]),inside:{function:O(/^<<0>>/.source,[ce]),generic:{pattern:RegExp(ye),alias:"class-name",inside:ae}}},"type-list":{pattern:O(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[se,ne,ce,K,me.source,ve,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:O(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[ne,ve]),lookbehind:!0,greedy:!0,inside:_.languages.csharp},keyword:me,"class-name":{pattern:RegExp(K),greedy:!0,inside:ae},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var Ae=$e+"|"+pe,Re=B(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[Ae]),Le=P(B(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[Re]),2),tt=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,ct=B(/<<0>>(?:\s*\(<<1>>*\))?/.source,[be,Le]);_.languages.insertBefore("csharp","class-name",{attribute:{pattern:O(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[tt,ct]),lookbehind:!0,greedy:!0,inside:{target:{pattern:O(/^<<0>>(?=\s*:)/.source,[tt]),alias:"keyword"},"attribute-arguments":{pattern:O(/\(<<0>>*\)/.source,[Le]),inside:_.languages.csharp},"class-name":{pattern:RegExp(be),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var Pe=/:[^}\r\n]+/.source,Ue=P(B(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[Re]),2),De=B(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[Ue,Pe]),Qe=P(B(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[Ae]),2),Ke=B(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[Qe,Pe]);function v(ze,Ie){return{interpolation:{pattern:O(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[ze]),lookbehind:!0,inside:{"format-string":{pattern:O(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[Ie,Pe]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:_.languages.csharp}}},string:/[\s\S]+/}}_.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:O(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[De]),lookbehind:!0,greedy:!0,inside:v(De,Ue)},{pattern:O(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[Ke]),lookbehind:!0,greedy:!0,inside:v(Ke,Qe)}],char:{pattern:RegExp(pe),greedy:!0}}),_.languages.dotnet=_.languages.cs=_.languages.csharp})(Prism)},251:()=>{(function(_){var B=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;_.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+B.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+B.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+B.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:B,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},_.languages.css.atrule.inside.rest=_.languages.css;var O=_.languages.markup;O&&(O.tag.addInlined("style","css"),O.tag.addAttribute("style","css"))})(Prism)},46:()=>{Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete Prism.languages.go["class-name"]},57:()=>{(function(_){function B(se){return RegExp("(^(?:"+se+"):[ 	]*(?![ 	]))[^]+","i")}_.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:_.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:B(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:_.languages.csp},{pattern:B(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:_.languages.hpkp},{pattern:B(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:_.languages.hsts},{pattern:B(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var O,P=_.languages,V={"application/javascript":P.javascript,"application/json":P.json||P.javascript,"application/xml":P.xml,"text/xml":P.xml,"text/html":P.html,"text/css":P.css,"text/plain":P.plain},ie={"application/json":!0,"application/xml":!0};function he(se){var me=se.replace(/^[a-z]+\//,"");return"(?:"+se+"|"+("\\w+/(?:[\\w.-]+\\+)+"+me+"(?![+\\w.-])")+")"}for(var ue in V)if(V[ue]){O=O||{};var x=ie[ue]?he(ue):ue;O[ue.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+x+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:V[ue]}}O&&_.languages.insertBefore("http","header",O)})(Prism)},503:()=>{(function(_){var B=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,O=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,P={pattern:RegExp(O+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};_.languages.java=_.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[P,{pattern:RegExp(O+/[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),lookbehind:!0,inside:P.inside}],keyword:B,function:[_.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),_.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),_.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":P,keyword:B,punctuation:/[<>(),.:]/,operator:/[?&|]/}},namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return B.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism)},277:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},366:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},358:()=>{(function(_){var B=/[*&][^\s[\]{},]+/,O=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,P="(?:"+O.source+"(?:[ 	]+"+B.source+")?|"+B.source+"(?:[ 	]+"+O.source+")?)",V=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),ie=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function he(ue,x){x=(x||"").replace(/m/g,"")+"m";var se=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return P}).replace(/<<value>>/g,function(){return ue});return RegExp(se,x)}_.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return P})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return P}).replace(/<<key>>/g,function(){return"(?:"+V+"|"+ie+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:he(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:he(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:he(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:he(ie),lookbehind:!0,greedy:!0},number:{pattern:he(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:O,important:B,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},_.languages.yml=_.languages.yaml})(Prism)},660:(_,B,O)=>{var P=function(V){var ie=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,he=0,ue={},x={manual:V.Prism&&V.Prism.manual,disableWorkerMessageHandler:V.Prism&&V.Prism.disableWorkerMessageHandler,util:{encode:function X(q){return q instanceof se?new se(q.type,X(q.content),q.alias):Array.isArray(q)?q.map(X):q.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(X){return Object.prototype.toString.call(X).slice(8,-1)},objId:function(X){return X.__id||Object.defineProperty(X,"__id",{value:++he}),X.__id},clone:function X(q,Y){var ee,K;switch(Y=Y||{},x.util.type(q)){case"Object":if(K=x.util.objId(q),Y[K])return Y[K];for(var ae in ee={},Y[K]=ee,q)q.hasOwnProperty(ae)&&(ee[ae]=X(q[ae],Y));return ee;case"Array":return K=x.util.objId(q),Y[K]?Y[K]:(ee=[],Y[K]=ee,q.forEach(function(pe,$e){ee[$e]=X(pe,Y)}),ee);default:return q}},getLanguage:function(X){for(;X;){var q=ie.exec(X.className);if(q)return q[1].toLowerCase();X=X.parentElement}return"none"},setLanguage:function(X,q){X.className=X.className.replace(RegExp(ie,"gi"),""),X.classList.add("language-"+q)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(ee){var X=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(ee.stack)||[])[1];if(X){var q=document.getElementsByTagName("script");for(var Y in q)if(q[Y].src==X)return q[Y]}return null}},isActive:function(X,q,Y){for(var ee="no-"+q;X;){var K=X.classList;if(K.contains(q))return!0;if(K.contains(ee))return!1;X=X.parentElement}return!!Y}},languages:{plain:ue,plaintext:ue,text:ue,txt:ue,extend:function(X,q){var Y=x.util.clone(x.languages[X]);for(var ee in q)Y[ee]=q[ee];return Y},insertBefore:function(X,q,Y,ee){var K=(ee=ee||x.languages)[X],ae={};for(var pe in K)if(K.hasOwnProperty(pe)){if(pe==q)for(var $e in Y)Y.hasOwnProperty($e)&&(ae[$e]=Y[$e]);Y.hasOwnProperty(pe)||(ae[pe]=K[pe])}var Oe=ee[X];return ee[X]=ae,x.languages.DFS(x.languages,function(Ae,Re){Re===Oe&&Ae!=X&&(this[Ae]=ae)}),ae},DFS:function X(q,Y,ee,K){K=K||{};var ae=x.util.objId;for(var pe in q)if(q.hasOwnProperty(pe)){Y.call(q,pe,q[pe],ee||pe);var $e=q[pe],Oe=x.util.type($e);Oe!=="Object"||K[ae($e)]?Oe!=="Array"||K[ae($e)]||(K[ae($e)]=!0,X($e,Y,pe,K)):(K[ae($e)]=!0,X($e,Y,null,K))}}},plugins:{},highlightAll:function(X,q){x.highlightAllUnder(document,X,q)},highlightAllUnder:function(X,q,Y){var ee={callback:Y,container:X,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};x.hooks.run("before-highlightall",ee),ee.elements=Array.prototype.slice.apply(ee.container.querySelectorAll(ee.selector)),x.hooks.run("before-all-elements-highlight",ee);for(var K,ae=0;K=ee.elements[ae++];)x.highlightElement(K,q===!0,ee.callback)},highlightElement:function(X,q,Y){var ee=x.util.getLanguage(X),K=x.languages[ee];x.util.setLanguage(X,ee);var ae=X.parentElement;ae&&ae.nodeName.toLowerCase()==="pre"&&x.util.setLanguage(ae,ee);var pe={element:X,language:ee,grammar:K,code:X.textContent};function $e(Ae){pe.highlightedCode=Ae,x.hooks.run("before-insert",pe),pe.element.innerHTML=pe.highlightedCode,x.hooks.run("after-highlight",pe),x.hooks.run("complete",pe),Y&&Y.call(pe.element)}if(x.hooks.run("before-sanity-check",pe),(ae=pe.element.parentElement)&&ae.nodeName.toLowerCase()==="pre"&&!ae.hasAttribute("tabindex")&&ae.setAttribute("tabindex","0"),!pe.code)return x.hooks.run("complete",pe),void(Y&&Y.call(pe.element));if(x.hooks.run("before-highlight",pe),pe.grammar)if(q&&V.Worker){var Oe=new Worker(x.filename);Oe.onmessage=function(Ae){$e(Ae.data)},Oe.postMessage(JSON.stringify({language:pe.language,code:pe.code,immediateClose:!0}))}else $e(x.highlight(pe.code,pe.grammar,pe.language));else $e(x.util.encode(pe.code))},highlight:function(X,q,Y){var ee={code:X,grammar:q,language:Y};if(x.hooks.run("before-tokenize",ee),!ee.grammar)throw new Error('The language "'+ee.language+'" has no grammar.');return ee.tokens=x.tokenize(ee.code,ee.grammar),x.hooks.run("after-tokenize",ee),se.stringify(x.util.encode(ee.tokens),ee.language)},tokenize:function(X,q){var Y=q.rest;if(Y){for(var ee in Y)q[ee]=Y[ee];delete q.rest}var K=new re;return ye(K,K.head,X),fe(X,K,q,K.head,0),function(ae){for(var pe=[],$e=ae.head.next;$e!==ae.tail;)pe.push($e.value),$e=$e.next;return pe}(K)},hooks:{all:{},add:function(X,q){var Y=x.hooks.all;Y[X]=Y[X]||[],Y[X].push(q)},run:function(X,q){var Y=x.hooks.all[X];if(Y&&Y.length)for(var ee,K=0;ee=Y[K++];)ee(q)}},Token:se};function se(X,q,Y,ee){this.type=X,this.content=q,this.alias=Y,this.length=0|(ee||"").length}function me(X,q,Y,ee){X.lastIndex=q;var K=X.exec(Y);if(K&&ee&&K[1]){var ae=K[1].length;K.index+=ae,K[0]=K[0].slice(ae)}return K}function fe(X,q,Y,ee,K,ae){for(var pe in Y)if(Y.hasOwnProperty(pe)&&Y[pe]){var $e=Y[pe];$e=Array.isArray($e)?$e:[$e];for(var Oe=0;Oe<$e.length;++Oe){if(ae&&ae.cause==pe+","+Oe)return;var Ae=$e[Oe],Re=Ae.inside,Le=!!Ae.lookbehind,tt=!!Ae.greedy,ct=Ae.alias;if(tt&&!Ae.pattern.global){var Pe=Ae.pattern.toString().match(/[imsuy]*$/)[0];Ae.pattern=RegExp(Ae.pattern.source,Pe+"g")}for(var Ue=Ae.pattern||Ae,De=ee.next,Qe=K;De!==q.tail&&!(ae&&Qe>=ae.reach);Qe+=De.value.length,De=De.next){var Ke=De.value;if(q.length>X.length)return;if(!(Ke instanceof se)){var v,ze=1;if(tt){if(!(v=me(Ue,Qe,X,Le))||v.index>=X.length)break;var Ie=v.index,It=v.index+v[0].length,pt=Qe;for(pt+=De.value.length;Ie>=pt;)pt+=(De=De.next).value.length;if(Qe=pt-=De.value.length,De.value instanceof se)continue;for(var Ut=De;Ut!==q.tail&&(pt<It||typeof Ut.value=="string");Ut=Ut.next)ze++,pt+=Ut.value.length;ze--,Ke=X.slice(Qe,pt),v.index-=Qe}else if(!(v=me(Ue,0,Ke,Le)))continue;Ie=v.index;var ot=v[0],yt=Ke.slice(0,Ie),Un=Ke.slice(Ie+ot.length),er=Qe+Ke.length;ae&&er>ae.reach&&(ae.reach=er);var ir=De.prev;if(yt&&(ir=ye(q,ir,yt),Qe+=yt.length),ve(q,ir,ze),De=ye(q,ir,new se(pe,Re?x.tokenize(ot,Re):ot,ct,ot)),Un&&ye(q,De,Un),ze>1){var Sr={cause:pe+","+Oe,reach:er};fe(X,q,Y,De.prev,Qe,Sr),ae&&Sr.reach>ae.reach&&(ae.reach=Sr.reach)}}}}}}function re(){var X={value:null,prev:null,next:null},q={value:null,prev:X,next:null};X.next=q,this.head=X,this.tail=q,this.length=0}function ye(X,q,Y){var ee=q.next,K={value:Y,prev:q,next:ee};return q.next=K,ee.prev=K,X.length++,K}function ve(X,q,Y){for(var ee=q.next,K=0;K<Y&&ee!==X.tail;K++)ee=ee.next;q.next=ee,ee.prev=q,X.length-=K}if(V.Prism=x,se.stringify=function X(q,Y){if(typeof q=="string")return q;if(Array.isArray(q)){var ee="";return q.forEach(function(Oe){ee+=X(Oe,Y)}),ee}var K={type:q.type,content:X(q.content,Y),tag:"span",classes:["token",q.type],attributes:{},language:Y},ae=q.alias;ae&&(Array.isArray(ae)?Array.prototype.push.apply(K.classes,ae):K.classes.push(ae)),x.hooks.run("wrap",K);var pe="";for(var $e in K.attributes)pe+=" "+$e+'="'+(K.attributes[$e]||"").replace(/"/g,"&quot;")+'"';return"<"+K.tag+' class="'+K.classes.join(" ")+'"'+pe+">"+K.content+"</"+K.tag+">"},!V.document)return V.addEventListener&&(x.disableWorkerMessageHandler||V.addEventListener("message",function(X){var q=JSON.parse(X.data),Y=q.language,ee=q.code,K=q.immediateClose;V.postMessage(x.highlight(ee,x.languages[Y],Y)),K&&V.close()},!1)),x;var ce=x.util.currentScript();function ne(){x.manual||x.highlightAll()}if(ce&&(x.filename=ce.src,ce.hasAttribute("data-manual")&&(x.manual=!0)),!x.manual){var be=document.readyState;be==="loading"||be==="interactive"&&ce&&ce.defer?document.addEventListener("DOMContentLoaded",ne):window.requestAnimationFrame?window.requestAnimationFrame(ne):window.setTimeout(ne,16)}return x}(typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{});_.exports&&(_.exports=P),O.g!==void 0&&(O.g.Prism=P),P.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},P.languages.markup.tag.inside["attr-value"].inside.entity=P.languages.markup.entity,P.languages.markup.doctype.inside["internal-subset"].inside=P.languages.markup,P.hooks.add("wrap",function(V){V.type==="entity"&&(V.attributes.title=V.content.replace(/&amp;/,"&"))}),Object.defineProperty(P.languages.markup.tag,"addInlined",{value:function(V,ie){var he={};he["language-"+ie]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:P.languages[ie]},he.cdata=/^<!\[CDATA\[|\]\]>$/i;var ue={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:he}};ue["language-"+ie]={pattern:/[\s\S]+/,inside:P.languages[ie]};var x={};x[V]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return V}),"i"),lookbehind:!0,greedy:!0,inside:ue},P.languages.insertBefore("markup","cdata",x)}}),Object.defineProperty(P.languages.markup.tag,"addAttribute",{value:function(V,ie){P.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+V+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[ie,"language-"+ie],inside:P.languages[ie]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),P.languages.html=P.languages.markup,P.languages.mathml=P.languages.markup,P.languages.svg=P.languages.markup,P.languages.xml=P.languages.extend("markup",{}),P.languages.ssml=P.languages.xml,P.languages.atom=P.languages.xml,P.languages.rss=P.languages.xml,function(V){var ie=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;V.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+ie.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+ie.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+ie.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:ie,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},V.languages.css.atrule.inside.rest=V.languages.css;var he=V.languages.markup;he&&(he.tag.addInlined("style","css"),he.tag.addAttribute("style","css"))}(P),P.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},P.languages.javascript=P.languages.extend("clike",{"class-name":[P.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),P.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,P.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:P.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:P.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:P.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:P.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:P.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),P.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:P.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),P.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),P.languages.markup&&(P.languages.markup.tag.addInlined("script","javascript"),P.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),P.languages.js=P.languages.javascript,function(){if(P!==void 0&&typeof document<"u"){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var V={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},ie="data-src-status",he="loading",ue="loaded",x='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';P.hooks.add("before-highlightall",function(me){me.selector+=", "+x}),P.hooks.add("before-sanity-check",function(me){var fe=me.element;if(fe.matches(x)){me.code="",fe.setAttribute(ie,he);var re=fe.appendChild(document.createElement("CODE"));re.textContent="Loading\u2026";var ye=fe.getAttribute("data-src"),ve=me.language;if(ve==="none"){var ce=(/\.(\w+)$/.exec(ye)||[,"none"])[1];ve=V[ce]||ce}P.util.setLanguage(re,ve),P.util.setLanguage(fe,ve);var ne=P.plugins.autoloader;ne&&ne.loadLanguages(ve),function(be,X,q){var Y=new XMLHttpRequest;Y.open("GET",be,!0),Y.onreadystatechange=function(){Y.readyState==4&&(Y.status<400&&Y.responseText?X(Y.responseText):Y.status>=400?q("\u2716 Error "+Y.status+" while fetching file: "+Y.statusText):q("\u2716 Error: File does not exist or is empty"))},Y.send(null)}(ye,function(be){fe.setAttribute(ie,ue);var X=function(K){var ae=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(K||"");if(ae){var pe=Number(ae[1]),$e=ae[2],Oe=ae[3];return $e?Oe?[pe,Number(Oe)]:[pe,void 0]:[pe,pe]}}(fe.getAttribute("data-range"));if(X){var q=be.split(/\r\n?|\n/g),Y=X[0],ee=X[1]==null?q.length:X[1];Y<0&&(Y+=q.length),Y=Math.max(0,Math.min(Y-1,q.length)),ee<0&&(ee+=q.length),ee=Math.max(0,Math.min(ee,q.length)),be=q.slice(Y,ee).join(`
`),fe.hasAttribute("data-start")||fe.setAttribute("data-start",String(Y+1))}re.textContent=be,P.highlightElement(re)},function(be){fe.setAttribute(ie,"failed"),re.textContent=be})}}),P.plugins.fileHighlight={highlight:function(me){for(var fe,re=(me||document).querySelectorAll(x),ye=0;fe=re[ye++];)P.highlightElement(fe)}};var se=!1;P.fileHighlight=function(){se||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),se=!0),P.plugins.fileHighlight.highlight.apply(this,arguments)}}}()}},I={};function A(_){var B=I[_];if(B!==void 0){if(B.error!==void 0)throw B.error;return B.exports}var O=I[_]={exports:{}};try{var P={id:_,module:O,factory:S[_],require:A};A.i.forEach(function(V){V(P)}),O=P.module,P.factory.call(O.exports,O,O.exports,P.require)}catch(V){throw O.error=V,V}return O.exports}A.m=S,A.c=I,A.i=[],A.n=_=>{var B=_&&_.__esModule?()=>_.default:()=>_;return A.d(B,{a:B}),B},A.d=(_,B)=>{for(var O in B)A.o(B,O)&&!A.o(_,O)&&Object.defineProperty(_,O,{enumerable:!0,get:B[O]})},A.hu=_=>_+"."+A.h()+".hot-update.js",A.hmrF=()=>"main."+A.h()+".hot-update.json",A.h=()=>"27ebe4f6ce7b32ad2722",A.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),A.o=(_,B)=>Object.prototype.hasOwnProperty.call(_,B),y={},w="rapidoc:",A.l=(_,B,O,P)=>{if(y[_])y[_].push(B);else{var V,ie;if(O!==void 0)for(var he=document.getElementsByTagName("script"),ue=0;ue<he.length;ue++){var x=he[ue];if(x.getAttribute("src")==_||x.getAttribute("data-webpack")==w+O){V=x;break}}V||(ie=!0,(V=document.createElement("script")).charset="utf-8",V.timeout=120,A.nc&&V.setAttribute("nonce",A.nc),V.setAttribute("data-webpack",w+O),V.src=_),y[_]=[B];var se=(fe,re)=>{V.onerror=V.onload=null,clearTimeout(me);var ye=y[_];if(delete y[_],V.parentNode&&V.parentNode.removeChild(V),ye&&ye.forEach(ve=>ve(re)),fe)return fe(re)},me=setTimeout(se.bind(null,void 0,{type:"timeout",target:V}),12e4);V.onerror=se.bind(null,V.onerror),V.onload=se.bind(null,V.onload),ie&&document.head.appendChild(V)}},(()=>{var _,B,O,P,V={},ie=A.c,he=[],ue=[],x="idle";function se(ce){x=ce;for(var ne=[],be=0;be<ue.length;be++)ne[be]=ue[be].call(null,ce);return Promise.all(ne)}function me(ce){if(B.length===0)return ce();var ne=B;return B=[],Promise.all(ne).then(function(){return me(ce)})}function fe(ce){if(x!=="idle")throw new Error("check() is only allowed in idle status");return se("check").then(A.hmrM).then(function(ne){return ne?se("prepare").then(function(){var be=[];return B=[],O=[],Promise.all(Object.keys(A.hmrC).reduce(function(X,q){return A.hmrC[q](ne.c,ne.r,ne.m,X,O,be),X},[])).then(function(){return me(function(){return ce?ye(ce):se("ready").then(function(){return be})})})}):se(ve()?"ready":"idle").then(function(){return null})})}function re(ce){return x!=="ready"?Promise.resolve().then(function(){throw new Error("apply() is only allowed in ready status")}):ye(ce)}function ye(ce){ce=ce||{},ve();var ne=O.map(function(ae){return ae(ce)});O=void 0;var be=ne.map(function(ae){return ae.error}).filter(Boolean);if(be.length>0)return se("abort").then(function(){throw be[0]});var X=se("dispose");ne.forEach(function(ae){ae.dispose&&ae.dispose()});var q,Y=se("apply"),ee=function(ae){q||(q=ae)},K=[];return ne.forEach(function(ae){if(ae.apply){var pe=ae.apply(ee);if(pe)for(var $e=0;$e<pe.length;$e++)K.push(pe[$e])}}),Promise.all([X,Y]).then(function(){return q?se("fail").then(function(){throw q}):P?ye(ce).then(function(ae){return K.forEach(function(pe){ae.indexOf(pe)<0&&ae.push(pe)}),ae}):se("idle").then(function(){return K})})}function ve(){if(P)return O||(O=[]),Object.keys(A.hmrI).forEach(function(ce){P.forEach(function(ne){A.hmrI[ce](ne,O)})}),P=void 0,!0}A.hmrD=V,A.i.push(function(ce){var ne,be,X,q,Y=ce.module,ee=function(K,ae){var pe=ie[ae];if(!pe)return K;var $e=function(Re){if(pe.hot.active){if(ie[Re]){var Le=ie[Re].parents;Le.indexOf(ae)===-1&&Le.push(ae)}else he=[ae],_=Re;pe.children.indexOf(Re)===-1&&pe.children.push(Re)}else console.warn("[HMR] unexpected require("+Re+") from disposed module "+ae),he=[];return K(Re)},Oe=function(Re){return{configurable:!0,enumerable:!0,get:function(){return K[Re]},set:function(Le){K[Re]=Le}}};for(var Ae in K)Object.prototype.hasOwnProperty.call(K,Ae)&&Ae!=="e"&&Object.defineProperty($e,Ae,Oe(Ae));return $e.e=function(Re){return function(Le){switch(x){case"ready":return se("prepare"),B.push(Le),me(function(){return se("ready")}),Le;case"prepare":return B.push(Le),Le;default:return Le}}(K.e(Re))},$e}(ce.require,ce.id);Y.hot=(ne=ce.id,be=Y,q={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:X=_!==ne,_requireSelf:function(){he=be.parents.slice(),_=X?void 0:ne,A(ne)},active:!0,accept:function(K,ae,pe){if(K===void 0)q._selfAccepted=!0;else if(typeof K=="function")q._selfAccepted=K;else if(typeof K=="object"&&K!==null)for(var $e=0;$e<K.length;$e++)q._acceptedDependencies[K[$e]]=ae||function(){},q._acceptedErrorHandlers[K[$e]]=pe;else q._acceptedDependencies[K]=ae||function(){},q._acceptedErrorHandlers[K]=pe},decline:function(K){if(K===void 0)q._selfDeclined=!0;else if(typeof K=="object"&&K!==null)for(var ae=0;ae<K.length;ae++)q._declinedDependencies[K[ae]]=!0;else q._declinedDependencies[K]=!0},dispose:function(K){q._disposeHandlers.push(K)},addDisposeHandler:function(K){q._disposeHandlers.push(K)},removeDisposeHandler:function(K){var ae=q._disposeHandlers.indexOf(K);ae>=0&&q._disposeHandlers.splice(ae,1)},invalidate:function(){switch(this._selfInvalidated=!0,x){case"idle":O=[],Object.keys(A.hmrI).forEach(function(K){A.hmrI[K](ne,O)}),se("ready");break;case"ready":Object.keys(A.hmrI).forEach(function(K){A.hmrI[K](ne,O)});break;case"prepare":case"check":case"dispose":case"apply":(P=P||[]).push(ne)}},check:fe,apply:re,status:function(K){if(!K)return x;ue.push(K)},addStatusHandler:function(K){ue.push(K)},removeStatusHandler:function(K){var ae=ue.indexOf(K);ae>=0&&ue.splice(ae,1)},data:V[ne]},_=void 0,q),Y.parents=he,Y.children=[],he=[],ce.require=ee}),A.hmrC={},A.hmrI={}})(),A.p="",(()=>{var _,B,O,P,V=A.hmrS_jsonp=A.hmrS_jsonp||{179:0},ie={};function he(x){return new Promise((se,me)=>{ie[x]=se;var fe=A.p+A.hu(x),re=new Error;A.l(fe,ye=>{if(ie[x]){ie[x]=void 0;var ve=ye&&(ye.type==="load"?"missing":ye.type),ce=ye&&ye.target&&ye.target.src;re.message="Loading hot update chunk "+x+` failed.
(`+ve+": "+ce+")",re.name="ChunkLoadError",re.type=ve,re.request=ce,me(re)}})})}function ue(x){function se(Ae){for(var Re=[Ae],Le={},tt=Re.map(function(ze){return{chain:[ze],id:ze}});tt.length>0;){var ct=tt.pop(),Pe=ct.id,Ue=ct.chain,De=A.c[Pe];if(De&&(!De.hot._selfAccepted||De.hot._selfInvalidated)){if(De.hot._selfDeclined)return{type:"self-declined",chain:Ue,moduleId:Pe};if(De.hot._main)return{type:"unaccepted",chain:Ue,moduleId:Pe};for(var Qe=0;Qe<De.parents.length;Qe++){var Ke=De.parents[Qe],v=A.c[Ke];if(v){if(v.hot._declinedDependencies[Pe])return{type:"declined",chain:Ue.concat([Ke]),moduleId:Pe,parentId:Ke};Re.indexOf(Ke)===-1&&(v.hot._acceptedDependencies[Pe]?(Le[Ke]||(Le[Ke]=[]),me(Le[Ke],[Pe])):(delete Le[Ke],Re.push(Ke),tt.push({chain:Ue.concat([Ke]),id:Ke})))}}}}return{type:"accepted",moduleId:Ae,outdatedModules:Re,outdatedDependencies:Le}}function me(Ae,Re){for(var Le=0;Le<Re.length;Le++){var tt=Re[Le];Ae.indexOf(tt)===-1&&Ae.push(tt)}}A.f&&delete A.f.jsonpHmr,_=void 0;var fe={},re=[],ye={},ve=function(Ae){console.warn("[HMR] unexpected require("+Ae.id+") to disposed module")};for(var ce in B)if(A.o(B,ce)){var ne,be=B[ce],X=!1,q=!1,Y=!1,ee="";switch((ne=be?se(ce):{type:"disposed",moduleId:ce}).chain&&(ee=`
Update propagation: `+ne.chain.join(" -> ")),ne.type){case"self-declined":x.onDeclined&&x.onDeclined(ne),x.ignoreDeclined||(X=new Error("Aborted because of self decline: "+ne.moduleId+ee));break;case"declined":x.onDeclined&&x.onDeclined(ne),x.ignoreDeclined||(X=new Error("Aborted because of declined dependency: "+ne.moduleId+" in "+ne.parentId+ee));break;case"unaccepted":x.onUnaccepted&&x.onUnaccepted(ne),x.ignoreUnaccepted||(X=new Error("Aborted because "+ce+" is not accepted"+ee));break;case"accepted":x.onAccepted&&x.onAccepted(ne),q=!0;break;case"disposed":x.onDisposed&&x.onDisposed(ne),Y=!0;break;default:throw new Error("Unexception type "+ne.type)}if(X)return{error:X};if(q)for(ce in ye[ce]=be,me(re,ne.outdatedModules),ne.outdatedDependencies)A.o(ne.outdatedDependencies,ce)&&(fe[ce]||(fe[ce]=[]),me(fe[ce],ne.outdatedDependencies[ce]));Y&&(me(re,[ne.moduleId]),ye[ce]=ve)}B=void 0;for(var K,ae=[],pe=0;pe<re.length;pe++){var $e=re[pe],Oe=A.c[$e];Oe&&(Oe.hot._selfAccepted||Oe.hot._main)&&ye[$e]!==ve&&!Oe.hot._selfInvalidated&&ae.push({module:$e,require:Oe.hot._requireSelf,errorHandler:Oe.hot._selfAccepted})}return{dispose:function(){var Ae;O.forEach(function(Ke){delete V[Ke]}),O=void 0;for(var Re,Le=re.slice();Le.length>0;){var tt=Le.pop(),ct=A.c[tt];if(ct){var Pe={},Ue=ct.hot._disposeHandlers;for(pe=0;pe<Ue.length;pe++)Ue[pe].call(null,Pe);for(A.hmrD[tt]=Pe,ct.hot.active=!1,delete A.c[tt],delete fe[tt],pe=0;pe<ct.children.length;pe++){var De=A.c[ct.children[pe]];De&&(Ae=De.parents.indexOf(tt))>=0&&De.parents.splice(Ae,1)}}}for(var Qe in fe)if(A.o(fe,Qe)&&(ct=A.c[Qe]))for(K=fe[Qe],pe=0;pe<K.length;pe++)Re=K[pe],(Ae=ct.children.indexOf(Re))>=0&&ct.children.splice(Ae,1)},apply:function(Ae){for(var Re in ye)A.o(ye,Re)&&(A.m[Re]=ye[Re]);for(var Le=0;Le<P.length;Le++)P[Le](A);for(var tt in fe)if(A.o(fe,tt)){var ct=A.c[tt];if(ct){K=fe[tt];for(var Pe=[],Ue=[],De=[],Qe=0;Qe<K.length;Qe++){var Ke=K[Qe],v=ct.hot._acceptedDependencies[Ke],ze=ct.hot._acceptedErrorHandlers[Ke];if(v){if(Pe.indexOf(v)!==-1)continue;Pe.push(v),Ue.push(ze),De.push(Ke)}}for(var Ie=0;Ie<Pe.length;Ie++)try{Pe[Ie].call(null,K)}catch(ot){if(typeof Ue[Ie]=="function")try{Ue[Ie](ot,{moduleId:tt,dependencyId:De[Ie]})}catch(yt){x.onErrored&&x.onErrored({type:"accept-error-handler-errored",moduleId:tt,dependencyId:De[Ie],error:yt,originalError:ot}),x.ignoreErrored||(Ae(yt),Ae(ot))}else x.onErrored&&x.onErrored({type:"accept-errored",moduleId:tt,dependencyId:De[Ie],error:ot}),x.ignoreErrored||Ae(ot)}}}for(var It=0;It<ae.length;It++){var pt=ae[It],Ut=pt.module;try{pt.require(Ut)}catch(ot){if(typeof pt.errorHandler=="function")try{pt.errorHandler(ot,{moduleId:Ut,module:A.c[Ut]})}catch(yt){x.onErrored&&x.onErrored({type:"self-accept-error-handler-errored",moduleId:Ut,error:yt,originalError:ot}),x.ignoreErrored||(Ae(yt),Ae(ot))}else x.onErrored&&x.onErrored({type:"self-accept-errored",moduleId:Ut,error:ot}),x.ignoreErrored||Ae(ot)}}return re}}}self.webpackHotUpdaterapidoc=(x,se,me)=>{for(var fe in se)A.o(se,fe)&&(B[fe]=se[fe]);me&&P.push(me),ie[x]&&(ie[x](),ie[x]=void 0)},A.hmrI.jsonp=function(x,se){B||(B={},P=[],O=[],se.push(ue)),A.o(B,x)||(B[x]=A.m[x])},A.hmrC.jsonp=function(x,se,me,fe,re,ye){re.push(ue),_={},O=se,B=me.reduce(function(ve,ce){return ve[ce]=!1,ve},{}),P=[],x.forEach(function(ve){A.o(V,ve)&&V[ve]!==void 0&&(fe.push(he(ve)),_[ve]=!0)}),A.f&&(A.f.jsonpHmr=function(ve,ce){_&&!A.o(_,ve)&&A.o(V,ve)&&V[ve]!==void 0&&(ce.push(he(ve)),_[ve]=!0)})},A.hmrM=()=>{if(typeof fetch>"u")throw new Error("No browser support: need fetch API");return fetch(A.p+A.hmrF()).then(x=>{if(x.status!==404){if(!x.ok)throw new Error("Failed to fetch update manifest "+x.statusText);return x.json()}})}})(),A(448)})();const iN=$r('<div><div><span>Apigee Service API Portal</span><span>&gt</span><span>APIs</span><span>&gt</span><span>Product Catalog API</span></div><div>Product Catalog API<div><img></div></div><div>This API provides access to the product catalog API which provides product-related data to clients.</div><rapi-doc spec-url="https://petstore.swagger.io/v2/swagger.json" show-header="false" show-info="false" api-key-name="x-api-key" api-key-location="header" api-key-value="2jk43k4j324j32kj4k32j" allow-authentication="true" allow-server-selection="false" allow-api-list-style-selection="false" theme="light" bg-color="rgb(241, 243, 244)" primary-color="#35a854" render-style="view" data-reveal-delay="200"></rapi-doc></div>'),sN=y=>(()=>{const w=iN.cloneNode(!0),S=w.firstChild,I=S.firstChild,A=I.nextSibling,_=A.nextSibling,B=_.nextSibling,O=B.nextSibling,P=S.nextSibling,V=P.firstChild,ie=V.nextSibling,he=ie.firstChild,ue=P.nextSibling,x=ue.nextSibling;return fr(he,"src",V0),x.style.setProperty("textAlign","left"),x._$owner=j0(),zt(se=>{const me=wr.docFrame,fe=wr.breadcrumbs,re=wr.crumb,ye=wr.crumb,ve=wr.crumb,ce=wr.crumb,ne=wr.crumb,be=wr.headerText,X=wr.bookmarkIcon,q=wr.normalText,Y=wr.docView;return me!==se._v$&&(w.className=se._v$=me),fe!==se._v$2&&(S.className=se._v$2=fe),re!==se._v$3&&(I.className=se._v$3=re),ye!==se._v$4&&(A.className=se._v$4=ye),ve!==se._v$5&&(_.className=se._v$5=ve),ce!==se._v$6&&(B.className=se._v$6=ce),ne!==se._v$7&&(O.className=se._v$7=ne),be!==se._v$8&&(P.className=se._v$8=be),X!==se._v$9&&(ie.className=se._v$9=X),q!==se._v$10&&(ue.className=se._v$10=q),Y!==se._v$11&&(x.className=se._v$11=Y),se},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0}),w})(),lN=$r("<div><div></div><div></div></div>"),cN=()=>(()=>{const y=lN.cloneNode(!0),w=y.firstChild,S=w.nextSibling;return gt(w,We(p3,{})),gt(S,We(FL,{get children(){return[We(Uu,{path:"/",get element(){return We(L3,{})}}),We(Uu,{path:"/apps",get element(){return We(Y3,{})}}),We(Uu,{path:"/apis/:api",get element(){return We(sN,{})}})]}})),zt(I=>{const A=qu.contentContainer,_=qu.side,B=qu.content;return A!==I._v$&&(y.className=I._v$=A),_!==I._v$2&&(w.className=I._v$2=_),B!==I._v$3&&(S.className=I._v$3=B),I},{_v$:void 0,_v$2:void 0,_v$3:void 0}),y})(),pN=$r('<div style="height: 100%"></div>'),uN=()=>(()=>{const y=pN.cloneNode(!0);return gt(y,We(HL,{}),null),gt(y,We(cN,{}),null),y})();oL(()=>We(NL,{get children(){return We(uN,{})}}),document.getElementById("root"));
