(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const V of document.querySelectorAll('link[rel="modulepreload"]'))d(V);new MutationObserver(V=>{for(const z of V)if(z.type==="childList")for(const w of z.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&d(w)}).observe(document,{childList:!0,subtree:!0});function N(V){const z={};return V.integrity&&(z.integrity=V.integrity),V.referrerPolicy&&(z.referrerPolicy=V.referrerPolicy),V.crossOrigin==="use-credentials"?z.credentials="include":V.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function d(V){if(V.ep)return;V.ep=!0;const z=N(V);fetch(V.href,z)}})();var Hr={exports:{}},Pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function Yy(){if(Qh)return Pl;Qh=1;var r=Symbol.for("react.transitional.element"),x=Symbol.for("react.fragment");function N(d,V,z){var w=null;if(z!==void 0&&(w=""+z),V.key!==void 0&&(w=""+V.key),"key"in V){z={};for(var U in V)U!=="key"&&(z[U]=V[U])}else z=V;return V=z.ref,{$$typeof:r,type:d,key:w,ref:V!==void 0?V:null,props:z}}return Pl.Fragment=x,Pl.jsx=N,Pl.jsxs=N,Pl}var Fh;function By(){return Fh||(Fh=1,Hr.exports=Yy()),Hr.exports}var i=By(),Dr={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function My(){if(Zh)return le;Zh=1;var r=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),w=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),G=Symbol.iterator;function te(h){return h===null||typeof h!="object"?null:(h=G&&h[G]||h["@@iterator"],typeof h=="function"?h:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ae=Object.assign,Ae={};function ze(h,T,D){this.props=h,this.context=T,this.refs=Ae,this.updater=D||P}ze.prototype.isReactComponent={},ze.prototype.setState=function(h,T){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,T,"setState")},ze.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function Re(){}Re.prototype=ze.prototype;function se(h,T,D){this.props=h,this.context=T,this.refs=Ae,this.updater=D||P}var Se=se.prototype=new Re;Se.constructor=se,ae(Se,ze.prototype),Se.isPureReactComponent=!0;var Ve=Array.isArray;function qe(){}var Z={H:null,A:null,T:null,S:null},Le=Object.prototype.hasOwnProperty;function Fe(h,T,D){var q=D.ref;return{$$typeof:r,type:h,key:T,ref:q!==void 0?q:null,props:D}}function K(h,T){return Fe(h.type,T,h.props)}function ne(h){return typeof h=="object"&&h!==null&&h.$$typeof===r}function F(h){var T={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(D){return T[D]})}var _e=/\/+/g;function at(h,T){return typeof h=="object"&&h!==null&&h.key!=null?F(""+h.key):T.toString(36)}function Ge(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(qe,qe):(h.status="pending",h.then(function(T){h.status==="pending"&&(h.status="fulfilled",h.value=T)},function(T){h.status==="pending"&&(h.status="rejected",h.reason=T)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function I(h,T,D,q,v){var O=typeof h;(O==="undefined"||O==="boolean")&&(h=null);var W=!1;if(h===null)W=!0;else switch(O){case"bigint":case"string":case"number":W=!0;break;case"object":switch(h.$$typeof){case r:case x:W=!0;break;case L:return W=h._init,I(W(h._payload),T,D,q,v)}}if(W)return v=v(h),W=q===""?"."+at(h,0):q,Ve(v)?(D="",W!=null&&(D=W.replace(_e,"$&/")+"/"),I(v,T,D,"",function(ga){return ga})):v!=null&&(ne(v)&&(v=K(v,D+(v.key==null||h&&h.key===v.key?"":(""+v.key).replace(_e,"$&/")+"/")+W)),T.push(v)),1;W=0;var Ye=q===""?".":q+":";if(Ve(h))for(var Te=0;Te<h.length;Te++)q=h[Te],O=Ye+at(q,Te),W+=I(q,T,D,O,v);else if(Te=te(h),typeof Te=="function")for(h=Te.call(h),Te=0;!(q=h.next()).done;)q=q.value,O=Ye+at(q,Te++),W+=I(q,T,D,O,v);else if(O==="object"){if(typeof h.then=="function")return I(Ge(h),T,D,q,v);throw T=String(h),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return W}function H(h,T,D){if(h==null)return h;var q=[],v=0;return I(h,q,"","",function(O){return T.call(D,O,v++)}),q}function S(h){if(h._status===-1){var T=h._result;T=T(),T.then(function(D){(h._status===0||h._status===-1)&&(h._status=1,h._result=D)},function(D){(h._status===0||h._status===-1)&&(h._status=2,h._result=D)}),h._status===-1&&(h._status=0,h._result=T)}if(h._status===1)return h._result.default;throw h._result}var R=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},J={map:H,forEach:function(h,T,D){H(h,function(){T.apply(this,arguments)},D)},count:function(h){var T=0;return H(h,function(){T++}),T},toArray:function(h){return H(h,function(T){return T})||[]},only:function(h){if(!ne(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return le.Activity=_,le.Children=J,le.Component=ze,le.Fragment=N,le.Profiler=V,le.PureComponent=se,le.StrictMode=d,le.Suspense=j,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,le.__COMPILER_RUNTIME={__proto__:null,c:function(h){return Z.H.useMemoCache(h)}},le.cache=function(h){return function(){return h.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(h,T,D){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var q=ae({},h.props),v=h.key;if(T!=null)for(O in T.key!==void 0&&(v=""+T.key),T)!Le.call(T,O)||O==="key"||O==="__self"||O==="__source"||O==="ref"&&T.ref===void 0||(q[O]=T[O]);var O=arguments.length-2;if(O===1)q.children=D;else if(1<O){for(var W=Array(O),Ye=0;Ye<O;Ye++)W[Ye]=arguments[Ye+2];q.children=W}return Fe(h.type,v,q)},le.createContext=function(h){return h={$$typeof:w,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:z,_context:h},h},le.createElement=function(h,T,D){var q,v={},O=null;if(T!=null)for(q in T.key!==void 0&&(O=""+T.key),T)Le.call(T,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(v[q]=T[q]);var W=arguments.length-2;if(W===1)v.children=D;else if(1<W){for(var Ye=Array(W),Te=0;Te<W;Te++)Ye[Te]=arguments[Te+2];v.children=Ye}if(h&&h.defaultProps)for(q in W=h.defaultProps,W)v[q]===void 0&&(v[q]=W[q]);return Fe(h,O,v)},le.createRef=function(){return{current:null}},le.forwardRef=function(h){return{$$typeof:U,render:h}},le.isValidElement=ne,le.lazy=function(h){return{$$typeof:L,_payload:{_status:-1,_result:h},_init:S}},le.memo=function(h,T){return{$$typeof:p,type:h,compare:T===void 0?null:T}},le.startTransition=function(h){var T=Z.T,D={};Z.T=D;try{var q=h(),v=Z.S;v!==null&&v(D,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(qe,R)}catch(O){R(O)}finally{T!==null&&D.types!==null&&(T.types=D.types),Z.T=T}},le.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},le.use=function(h){return Z.H.use(h)},le.useActionState=function(h,T,D){return Z.H.useActionState(h,T,D)},le.useCallback=function(h,T){return Z.H.useCallback(h,T)},le.useContext=function(h){return Z.H.useContext(h)},le.useDebugValue=function(){},le.useDeferredValue=function(h,T){return Z.H.useDeferredValue(h,T)},le.useEffect=function(h,T){return Z.H.useEffect(h,T)},le.useEffectEvent=function(h){return Z.H.useEffectEvent(h)},le.useId=function(){return Z.H.useId()},le.useImperativeHandle=function(h,T,D){return Z.H.useImperativeHandle(h,T,D)},le.useInsertionEffect=function(h,T){return Z.H.useInsertionEffect(h,T)},le.useLayoutEffect=function(h,T){return Z.H.useLayoutEffect(h,T)},le.useMemo=function(h,T){return Z.H.useMemo(h,T)},le.useOptimistic=function(h,T){return Z.H.useOptimistic(h,T)},le.useReducer=function(h,T,D){return Z.H.useReducer(h,T,D)},le.useRef=function(h){return Z.H.useRef(h)},le.useState=function(h){return Z.H.useState(h)},le.useSyncExternalStore=function(h,T,D){return Z.H.useSyncExternalStore(h,T,D)},le.useTransition=function(){return Z.H.useTransition()},le.version="19.2.8",le}var Kh;function Qr(){return Kh||(Kh=1,Dr.exports=My()),Dr.exports}var C=Qr(),Rr={exports:{}},eo={},qr={exports:{}},Lr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function Cy(){return Jh||(Jh=1,(function(r){function x(I,H){var S=I.length;I.push(H);e:for(;0<S;){var R=S-1>>>1,J=I[R];if(0<V(J,H))I[R]=H,I[S]=J,S=R;else break e}}function N(I){return I.length===0?null:I[0]}function d(I){if(I.length===0)return null;var H=I[0],S=I.pop();if(S!==H){I[0]=S;e:for(var R=0,J=I.length,h=J>>>1;R<h;){var T=2*(R+1)-1,D=I[T],q=T+1,v=I[q];if(0>V(D,S))q<J&&0>V(v,D)?(I[R]=v,I[q]=S,R=q):(I[R]=D,I[T]=S,R=T);else if(q<J&&0>V(v,S))I[R]=v,I[q]=S,R=q;else break e}}return H}function V(I,H){var S=I.sortIndex-H.sortIndex;return S!==0?S:I.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var z=performance;r.unstable_now=function(){return z.now()}}else{var w=Date,U=w.now();r.unstable_now=function(){return w.now()-U}}var j=[],p=[],L=1,_=null,G=3,te=!1,P=!1,ae=!1,Ae=!1,ze=typeof setTimeout=="function"?setTimeout:null,Re=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;function Se(I){for(var H=N(p);H!==null;){if(H.callback===null)d(p);else if(H.startTime<=I)d(p),H.sortIndex=H.expirationTime,x(j,H);else break;H=N(p)}}function Ve(I){if(ae=!1,Se(I),!P)if(N(j)!==null)P=!0,qe||(qe=!0,F());else{var H=N(p);H!==null&&Ge(Ve,H.startTime-I)}}var qe=!1,Z=-1,Le=5,Fe=-1;function K(){return Ae?!0:!(r.unstable_now()-Fe<Le)}function ne(){if(Ae=!1,qe){var I=r.unstable_now();Fe=I;var H=!0;try{e:{P=!1,ae&&(ae=!1,Re(Z),Z=-1),te=!0;var S=G;try{t:{for(Se(I),_=N(j);_!==null&&!(_.expirationTime>I&&K());){var R=_.callback;if(typeof R=="function"){_.callback=null,G=_.priorityLevel;var J=R(_.expirationTime<=I);if(I=r.unstable_now(),typeof J=="function"){_.callback=J,Se(I),H=!0;break t}_===N(j)&&d(j),Se(I)}else d(j);_=N(j)}if(_!==null)H=!0;else{var h=N(p);h!==null&&Ge(Ve,h.startTime-I),H=!1}}break e}finally{_=null,G=S,te=!1}H=void 0}}finally{H?F():qe=!1}}}var F;if(typeof se=="function")F=function(){se(ne)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,at=_e.port2;_e.port1.onmessage=ne,F=function(){at.postMessage(null)}}else F=function(){ze(ne,0)};function Ge(I,H){Z=ze(function(){I(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return G},r.unstable_next=function(I){switch(G){case 1:case 2:case 3:var H=3;break;default:H=G}var S=G;G=H;try{return I()}finally{G=S}},r.unstable_requestPaint=function(){Ae=!0},r.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var S=G;G=I;try{return H()}finally{G=S}},r.unstable_scheduleCallback=function(I,H,S){var R=r.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?R+S:R):S=R,I){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=S+J,I={id:L++,callback:H,priorityLevel:I,startTime:S,expirationTime:J,sortIndex:-1},S>R?(I.sortIndex=S,x(p,I),N(j)===null&&I===N(p)&&(ae?(Re(Z),Z=-1):ae=!0,Ge(Ve,S-R))):(I.sortIndex=J,x(j,I),P||te||(P=!0,qe||(qe=!0,F()))),I},r.unstable_shouldYield=K,r.unstable_wrapCallback=function(I){var H=G;return function(){var S=G;G=H;try{return I.apply(this,arguments)}finally{G=S}}}})(Lr)),Lr}var $h;function zy(){return $h||($h=1,qr.exports=Cy()),qr.exports}var Gr={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function Uy(){if(Ph)return ut;Ph=1;var r=Qr();function x(j){var p="https://react.dev/errors/"+j;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var L=2;L<arguments.length;L++)p+="&args[]="+encodeURIComponent(arguments[L])}return"Minified React error #"+j+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(){}var d={d:{f:N,r:function(){throw Error(x(522))},D:N,C:N,L:N,m:N,X:N,S:N,M:N},p:0,findDOMNode:null},V=Symbol.for("react.portal");function z(j,p,L){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:_==null?null:""+_,children:j,containerInfo:p,implementation:L}}var w=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function U(j,p){if(j==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,ut.createPortal=function(j,p){var L=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(x(299));return z(j,p,null,L)},ut.flushSync=function(j){var p=w.T,L=d.p;try{if(w.T=null,d.p=2,j)return j()}finally{w.T=p,d.p=L,d.d.f()}},ut.preconnect=function(j,p){typeof j=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,d.d.C(j,p))},ut.prefetchDNS=function(j){typeof j=="string"&&d.d.D(j)},ut.preinit=function(j,p){if(typeof j=="string"&&p&&typeof p.as=="string"){var L=p.as,_=U(L,p.crossOrigin),G=typeof p.integrity=="string"?p.integrity:void 0,te=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;L==="style"?d.d.S(j,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:G,fetchPriority:te}):L==="script"&&d.d.X(j,{crossOrigin:_,integrity:G,fetchPriority:te,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ut.preinitModule=function(j,p){if(typeof j=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var L=U(p.as,p.crossOrigin);d.d.M(j,{crossOrigin:L,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&d.d.M(j)},ut.preload=function(j,p){if(typeof j=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var L=p.as,_=U(L,p.crossOrigin);d.d.L(j,L,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ut.preloadModule=function(j,p){if(typeof j=="string")if(p){var L=U(p.as,p.crossOrigin);d.d.m(j,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:L,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else d.d.m(j)},ut.requestFormReset=function(j){d.d.r(j)},ut.unstable_batchedUpdates=function(j,p){return j(p)},ut.useFormState=function(j,p,L){return w.H.useFormState(j,p,L)},ut.useFormStatus=function(){return w.H.useHostTransitionStatus()},ut.version="19.2.8",ut}var ef;function Vy(){if(ef)return Gr.exports;ef=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(x){console.error(x)}}return r(),Gr.exports=Uy(),Gr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf;function _y(){if(tf)return eo;tf=1;var r=zy(),x=Qr(),N=Vy();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function V(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function z(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function w(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function U(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(z(e)!==e)throw Error(d(188))}function p(e){var t=e.alternate;if(!t){if(t=z(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var o=l.alternate;if(o===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===a)return j(l),e;if(o===n)return j(l),t;o=o.sibling}throw Error(d(188))}if(a.return!==n.return)a=l,n=o;else{for(var s=!1,u=l.child;u;){if(u===a){s=!0,a=l,n=o;break}if(u===n){s=!0,n=l,a=o;break}u=u.sibling}if(!s){for(u=o.child;u;){if(u===a){s=!0,a=o,n=l;break}if(u===n){s=!0,n=o,a=l;break}u=u.sibling}if(!s)throw Error(d(189))}}if(a.alternate!==n)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function L(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=L(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,G=Symbol.for("react.element"),te=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),Ae=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),Re=Symbol.for("react.consumer"),se=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),Fe=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ae:return"Fragment";case ze:return"Profiler";case Ae:return"StrictMode";case Ve:return"Suspense";case qe:return"SuspenseList";case Fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case se:return e.displayName||"Context";case Re:return(e._context.displayName||"Context")+".Consumer";case Se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:at(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return at(e(t))}catch{}}return null}var Ge=Array.isArray,I=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=N.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,S={pending:!1,data:null,method:null,action:null},R=[],J=-1;function h(e){return{current:e}}function T(e){0>J||(e.current=R[J],R[J]=null,J--)}function D(e,t){J++,R[J]=e.current,e.current=t}var q=h(null),v=h(null),O=h(null),W=h(null);function Ye(e,t){switch(D(O,t),D(v,e),D(q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gh(t),e=ph(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(q),D(q,e)}function Te(){T(q),T(v),T(O)}function ga(e){e.memoizedState!==null&&D(W,e);var t=q.current,a=ph(t,e.type);t!==a&&(D(v,e),D(q,a))}function Zt(e){v.current===e&&(T(q),T(v)),W.current===e&&(T(W),Zl._currentValue=S)}var pa,yn;function Ee(e){if(pa===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);pa=t&&t[1]||"",yn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pa+e+yn}var gn=!1;function pn(e,t){if(!e||gn)return"";gn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(k){var b=k}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(k){b=k}e.call(Y.prototype)}}else{try{throw Error()}catch(k){b=k}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(k){if(k&&b&&typeof k.stack=="string")return[k.stack,b.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),s=o[0],u=o[1];if(s&&u){var c=s.split(`
`),g=u.split(`
`);for(l=n=0;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;for(;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;if(n===c.length||l===g.length)for(n=c.length-1,l=g.length-1;1<=n&&0<=l&&c[n]!==g[l];)l--;for(;1<=n&&0<=l;n--,l--)if(c[n]!==g[l]){if(n!==1||l!==1)do if(n--,l--,0>l||c[n]!==g[l]){var A=`
`+c[n].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=n&&0<=l);break}}}finally{gn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ee(a):""}function Wa(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee("Lazy");case 13:return e.child!==t&&t!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return pn(e.type,!1);case 11:return pn(e.type.render,!1);case 1:return pn(e.type,!0);case 31:return Ee("Activity");default:return""}}function bn(e){try{var t="",a=null;do t+=Wa(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Xa=Object.prototype.hasOwnProperty,Qa=r.unstable_scheduleCallback,ol=r.unstable_cancelCallback,Ni=r.unstable_shouldYield,Ii=r.unstable_requestPaint,rt=r.unstable_now,lo=r.unstable_getCurrentPriorityLevel,il=r.unstable_ImmediatePriority,Fa=r.unstable_UserBlockingPriority,wn=r.unstable_NormalPriority,Ai=r.unstable_LowPriority,B=r.unstable_IdlePriority,M=r.log,fe=r.unstable_setDisableYieldValue,Ne=null,Oe=null;function ct(e){if(typeof M=="function"&&fe(e),Oe&&typeof Oe.setStrictMode=="function")try{Oe.setStrictMode(Ne,e)}catch{}}var be=Math.clz32?Math.clz32:io,Yt=Math.log,oo=Math.LN2;function io(e){return e>>>=0,e===0?32:31-(Yt(e)/oo|0)|0}var ba=256,sl=262144,so=4194304;function Za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ro(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var u=n&134217727;return u!==0?(n=u&~o,n!==0?l=Za(n):(s&=u,s!==0?l=Za(s):a||(a=u&~e,a!==0&&(l=Za(a))))):(u=n&~o,u!==0?l=Za(u):s!==0?l=Za(s):a||(a=n&~e,a!==0&&(l=Za(a)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:l}function rl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function pf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jr(){var e=so;return so<<=1,(so&62914560)===0&&(so=4194304),e}function Si(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ul(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bf(e,t,a,n,l,o){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,c=e.expirationTimes,g=e.hiddenUpdates;for(a=s&~a;0<a;){var A=31-be(a),Y=1<<A;u[A]=0,c[A]=-1;var b=g[A];if(b!==null)for(g[A]=null,A=0;A<b.length;A++){var k=b[A];k!==null&&(k.lane&=-536870913)}a&=~Y}n!==0&&$r(e,n,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~t))}function $r(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-be(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Pr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-be(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function eu(e,t){var a=t&-t;return a=(a&42)!==0?1:Ti(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ti(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ei(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tu(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Dh(e.type))}function au(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var wa=Math.random().toString(36).slice(2),nt="__reactFiber$"+wa,mt="__reactProps$"+wa,vn="__reactContainer$"+wa,Yi="__reactEvents$"+wa,wf="__reactListeners$"+wa,vf="__reactHandles$"+wa,nu="__reactResources$"+wa,cl="__reactMarker$"+wa;function Bi(e){delete e[nt],delete e[mt],delete e[Yi],delete e[wf],delete e[vf]}function xn(e){var t=e[nt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[vn]||a[nt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Nh(e);e!==null;){if(a=e[nt])return a;e=Nh(e)}return t}e=a,a=e.parentNode}return null}function kn(e){if(e=e[nt]||e[vn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function dl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function jn(e){var t=e[nu];return t||(t=e[nu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[cl]=!0}var lu=new Set,ou={};function Ka(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(ou[e]=t,e=0;e<t.length;e++)lu.add(t[e])}var xf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),iu={},su={};function kf(e){return Xa.call(su,e)?!0:Xa.call(iu,e)?!1:xf.test(e)?su[e]=!0:(iu[e]=!0,!1)}function uo(e,t,a){if(kf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function co(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Kt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ru(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jf(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mi(e){if(!e._valueTracker){var t=ru(e)?"checked":"value";e._valueTracker=jf(e,t,""+e[t])}}function uu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=ru(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nf=/[\n"\\]/g;function Mt(e){return e.replace(Nf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ci(e,t,a,n,l,o,s,u){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?zi(e,s,Bt(t)):a!=null?zi(e,s,Bt(a)):n!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Bt(u):e.removeAttribute("name")}function cu(e,t,a,n,l,o,s,u){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Mi(e);return}a=a!=null?""+Bt(a):"",t=t!=null?""+Bt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=u?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Mi(e)}function zi(e,t,a){t==="number"&&ho(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function In(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Bt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function du(e,t,a){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Bt(a):""}function hu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(d(92));if(Ge(n)){if(1<n.length)throw Error(d(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Bt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Mi(e)}function An(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var If=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||If.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function mu(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&fu(e,l,n)}else for(var o in t)t.hasOwnProperty(o)&&fu(e,o,t[o])}function Ui(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Af=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fo(e){return Sf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Jt(){}var Vi=null;function _i(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sn=null,Tn=null;function yu(e){var t=kn(e);if(t&&(e=t.stateNode)){var a=e[mt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ci(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[mt]||null;if(!l)throw Error(d(90));Ci(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&uu(n)}break e;case"textarea":du(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&In(e,!!a.multiple,t,!1)}}}var Oi=!1;function gu(e,t,a){if(Oi)return e(t,a);Oi=!0;try{var n=e(t);return n}finally{if(Oi=!1,(Sn!==null||Tn!==null)&&(ei(),Sn&&(t=Sn,e=Tn,Tn=Sn=null,yu(t),e)))for(t=0;t<e.length;t++)yu(e[t])}}function hl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[mt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hi=!1;if($t)try{var fl={};Object.defineProperty(fl,"passive",{get:function(){Hi=!0}}),window.addEventListener("test",fl,fl),window.removeEventListener("test",fl,fl)}catch{Hi=!1}var va=null,Di=null,mo=null;function pu(){if(mo)return mo;var e,t=Di,a=t.length,n,l="value"in va?va.value:va.textContent,o=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[o-n];n++);return mo=l.slice(e,1<n?1-n:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function bu(){return!1}function yt(e){function t(a,n,l,o,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?go:bu,this.isPropagationStopped=bu,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},po=yt(Ja),ml=_({},Ja,{view:0,detail:0}),Tf=yt(ml),Ri,qi,yl,bo=_({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yl&&(yl&&e.type==="mousemove"?(Ri=e.screenX-yl.screenX,qi=e.screenY-yl.screenY):qi=Ri=0,yl=e),Ri)},movementY:function(e){return"movementY"in e?e.movementY:qi}}),wu=yt(bo),Ef=_({},bo,{dataTransfer:0}),Yf=yt(Ef),Bf=_({},ml,{relatedTarget:0}),Li=yt(Bf),Mf=_({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Cf=yt(Mf),zf=_({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uf=yt(zf),Vf=_({},Ja,{data:0}),vu=yt(Vf),_f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Of={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Df(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hf[e])?!!t[e]:!1}function Gi(){return Df}var Rf=_({},ml,{key:function(e){if(e.key){var t=_f[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Of[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gi,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qf=yt(Rf),Lf=_({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=yt(Lf),Gf=_({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gi}),Wf=yt(Gf),Xf=_({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qf=yt(Xf),Ff=_({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zf=yt(Ff),Kf=_({},Ja,{newState:0,oldState:0}),Jf=yt(Kf),$f=[9,13,27,32],Wi=$t&&"CompositionEvent"in window,gl=null;$t&&"documentMode"in document&&(gl=document.documentMode);var Pf=$t&&"TextEvent"in window&&!gl,ku=$t&&(!Wi||gl&&8<gl&&11>=gl),ju=" ",Nu=!1;function Iu(e,t){switch(e){case"keyup":return $f.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function em(e,t){switch(e){case"compositionend":return Au(t);case"keypress":return t.which!==32?null:(Nu=!0,ju);case"textInput":return e=t.data,e===ju&&Nu?null:e;default:return null}}function tm(e,t){if(En)return e==="compositionend"||!Wi&&Iu(e,t)?(e=pu(),mo=Di=va=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ku&&t.locale!=="ko"?null:t.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!am[e.type]:t==="textarea"}function Tu(e,t,a,n){Sn?Tn?Tn.push(n):Tn=[n]:Sn=n,t=si(t,"onChange"),0<t.length&&(a=new po("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var pl=null,bl=null;function nm(e){ch(e,0)}function wo(e){var t=dl(e);if(uu(t))return e}function Eu(e,t){if(e==="change")return t}var Yu=!1;if($t){var Xi;if($t){var Qi="oninput"in document;if(!Qi){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),Qi=typeof Bu.oninput=="function"}Xi=Qi}else Xi=!1;Yu=Xi&&(!document.documentMode||9<document.documentMode)}function Mu(){pl&&(pl.detachEvent("onpropertychange",Cu),bl=pl=null)}function Cu(e){if(e.propertyName==="value"&&wo(bl)){var t=[];Tu(t,bl,e,_i(e)),gu(nm,t)}}function lm(e,t,a){e==="focusin"?(Mu(),pl=t,bl=a,pl.attachEvent("onpropertychange",Cu)):e==="focusout"&&Mu()}function om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(bl)}function im(e,t){if(e==="click")return wo(t)}function sm(e,t){if(e==="input"||e==="change")return wo(t)}function rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:rm;function wl(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Xa.call(t,l)||!kt(e[l],t[l]))return!1}return!0}function zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uu(e,t){var a=zu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zu(a)}}function Vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _u(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ho(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ho(e.document)}return t}function Fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var um=$t&&"documentMode"in document&&11>=document.documentMode,Yn=null,Zi=null,vl=null,Ki=!1;function Ou(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ki||Yn==null||Yn!==ho(n)||(n=Yn,"selectionStart"in n&&Fi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),vl&&wl(vl,n)||(vl=n,n=si(Zi,"onSelect"),0<n.length&&(t=new po("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Yn)))}function $a(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Bn={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Ji={},Hu={};$t&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function Pa(e){if(Ji[e])return Ji[e];if(!Bn[e])return e;var t=Bn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Hu)return Ji[e]=t[a];return e}var Du=Pa("animationend"),Ru=Pa("animationiteration"),qu=Pa("animationstart"),cm=Pa("transitionrun"),dm=Pa("transitionstart"),hm=Pa("transitioncancel"),Lu=Pa("transitionend"),Gu=new Map,$i="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$i.push("scrollEnd");function qt(e,t){Gu.set(e,t),Ka(t,[e])}var vo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ct=[],Mn=0,Pi=0;function xo(){for(var e=Mn,t=Pi=Mn=0;t<e;){var a=Ct[t];Ct[t++]=null;var n=Ct[t];Ct[t++]=null;var l=Ct[t];Ct[t++]=null;var o=Ct[t];if(Ct[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}o!==0&&Wu(a,l,o)}}function ko(e,t,a,n){Ct[Mn++]=e,Ct[Mn++]=t,Ct[Mn++]=a,Ct[Mn++]=n,Pi|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function es(e,t,a,n){return ko(e,t,a,n),jo(e)}function en(e,t){return ko(e,null,null,t),jo(e)}function Wu(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-be(a),e=o.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),o):null}function jo(e){if(50<ql)throw ql=0,ur=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Cn={};function fm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,a,n){return new fm(e,t,a,n)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pt(e,t){var a=e.alternate;return a===null?(a=jt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function No(e,t,a,n,l,o){var s=0;if(n=e,typeof e=="function")ts(e)&&(s=1);else if(typeof e=="string")s=by(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Fe:return e=jt(31,a,t,l),e.elementType=Fe,e.lanes=o,e;case ae:return tn(a.children,l,o,t);case Ae:s=8,l|=24;break;case ze:return e=jt(12,a,t,l|2),e.elementType=ze,e.lanes=o,e;case Ve:return e=jt(13,a,t,l),e.elementType=Ve,e.lanes=o,e;case qe:return e=jt(19,a,t,l),e.elementType=qe,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case se:s=10;break e;case Re:s=9;break e;case Se:s=11;break e;case Z:s=14;break e;case Le:s=16,n=null;break e}s=29,a=Error(d(130,e===null?"null":typeof e,"")),n=null}return t=jt(s,a,t,l),t.elementType=e,t.type=n,t.lanes=o,t}function tn(e,t,a,n){return e=jt(7,e,n,t),e.lanes=a,e}function as(e,t,a){return e=jt(6,e,null,t),e.lanes=a,e}function Qu(e){var t=jt(18,null,null,0);return t.stateNode=e,t}function ns(e,t,a){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fu=new WeakMap;function zt(e,t){if(typeof e=="object"&&e!==null){var a=Fu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:bn(t)},Fu.set(e,t),t)}return{value:e,source:t,stack:bn(t)}}var zn=[],Un=0,Io=null,xl=0,Ut=[],Vt=0,xa=null,Wt=1,Xt="";function ea(e,t){zn[Un++]=xl,zn[Un++]=Io,Io=e,xl=t}function Zu(e,t,a){Ut[Vt++]=Wt,Ut[Vt++]=Xt,Ut[Vt++]=xa,xa=e;var n=Wt;e=Xt;var l=32-be(n)-1;n&=~(1<<l),a+=1;var o=32-be(t)+l;if(30<o){var s=l-l%5;o=(n&(1<<s)-1).toString(32),n>>=s,l-=s,Wt=1<<32-be(t)+l|a<<l|n,Xt=o+e}else Wt=1<<o|a<<l|n,Xt=e}function ls(e){e.return!==null&&(ea(e,1),Zu(e,1,0))}function os(e){for(;e===Io;)Io=zn[--Un],zn[Un]=null,xl=zn[--Un],zn[Un]=null;for(;e===xa;)xa=Ut[--Vt],Ut[Vt]=null,Xt=Ut[--Vt],Ut[Vt]=null,Wt=Ut[--Vt],Ut[Vt]=null}function Ku(e,t){Ut[Vt++]=Wt,Ut[Vt++]=Xt,Ut[Vt++]=xa,Wt=t.id,Xt=t.overflow,xa=e}var lt=null,Be=null,he=!1,ka=null,_t=!1,is=Error(d(519));function ja(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kl(zt(t,e)),is}function Ju(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[nt]=e,t[mt]=n,a){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(a=0;a<Gl.length;a++)ue(Gl[a],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),cu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),hu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||mh(t.textContent,a)?(n.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),n.onScroll!=null&&ue("scroll",t),n.onScrollEnd!=null&&ue("scrollend",t),n.onClick!=null&&(t.onclick=Jt),t=!0):t=!1,t||ja(e,!0)}function $u(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:_t=!1;return;case 27:case 3:_t=!0;return;default:lt=lt.return}}function Vn(e){if(e!==lt)return!1;if(!he)return $u(e),he=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Nr(e.type,e.memoizedProps)),a=!a),a&&Be&&ja(e),$u(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Be=jh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Be=jh(e)}else t===27?(t=Be,_a(e.type)?(e=Er,Er=null,Be=e):Be=t):Be=lt?Ht(e.stateNode.nextSibling):null;return!0}function an(){Be=lt=null,he=!1}function ss(){var e=ka;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),ka=null),e}function kl(e){ka===null?ka=[e]:ka.push(e)}var rs=h(null),nn=null,ta=null;function Na(e,t,a){D(rs,t._currentValue),t._currentValue=a}function aa(e){e._currentValue=rs.current,T(rs)}function us(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function cs(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var s=l.child;o=o.firstContext;e:for(;o!==null;){var u=o;o=l;for(var c=0;c<t.length;c++)if(u.context===t[c]){o.lanes|=a,u=o.alternate,u!==null&&(u.lanes|=a),us(o.return,a,e),n||(s=null);break e}o=u.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(d(341));s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),us(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function _n(e,t,a,n){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var u=l.type;kt(l.pendingProps.value,s.value)||(e!==null?e.push(u):e=[u])}}else if(l===W.current){if(s=l.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Zl):e=[Zl])}l=l.return}e!==null&&cs(t,e,a,n),t.flags|=262144}function Ao(e){for(e=e.firstContext;e!==null;){if(!kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ln(e){nn=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return Pu(nn,e)}function So(e,t){return nn===null&&ln(e),Pu(e,t)}function Pu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(d(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return a}var mm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ym=r.unstable_scheduleCallback,gm=r.unstable_NormalPriority,Ze={$$typeof:se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ds(){return{controller:new mm,data:new Map,refCount:0}}function jl(e){e.refCount--,e.refCount===0&&ym(gm,function(){e.controller.abort()})}var Nl=null,hs=0,On=0,Hn=null;function pm(e,t){if(Nl===null){var a=Nl=[];hs=0,On=yr(),Hn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return hs++,t.then(ec,ec),t}function ec(){if(--hs===0&&Nl!==null){Hn!==null&&(Hn.status="fulfilled");var e=Nl;Nl=null,On=0,Hn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var tc=I.S;I.S=function(e,t){Od=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&pm(e,t),tc!==null&&tc(e,t)};var on=h(null);function fs(){var e=on.current;return e!==null?e:Ie.pooledCache}function To(e,t){t===null?D(on,on.current):D(on,t.pool)}function ac(){var e=fs();return e===null?null:{parent:Ze._currentValue,pool:e}}var Dn=Error(d(460)),ms=Error(d(474)),Eo=Error(d(542)),Yo={then:function(){}};function nc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Jt,Jt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ic(e),e;default:if(typeof t.status=="string")t.then(Jt,Jt);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ic(e),e}throw rn=t,Dn}}function sn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rn=a,Dn):a}}var rn=null;function oc(){if(rn===null)throw Error(d(459));var e=rn;return rn=null,e}function ic(e){if(e===Dn||e===Eo)throw Error(d(483))}var Rn=null,Il=0;function Bo(e){var t=Il;return Il+=1,Rn===null&&(Rn=[]),lc(Rn,e,t)}function Al(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Mo(e,t){throw t.$$typeof===G?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function sc(e){function t(m,f){if(e){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function a(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function n(m){for(var f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function l(m,f){return m=Pt(m,f),m.index=0,m.sibling=null,m}function o(m,f,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=67108866,f):y):(m.flags|=67108866,f)):(m.flags|=1048576,f)}function s(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function u(m,f,y,E){return f===null||f.tag!==6?(f=as(y,m.mode,E),f.return=m,f):(f=l(f,y),f.return=m,f)}function c(m,f,y,E){var $=y.type;return $===ae?A(m,f,y.props.children,E,y.key):f!==null&&(f.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Le&&sn($)===f.type)?(f=l(f,y.props),Al(f,y),f.return=m,f):(f=No(y.type,y.key,y.props,null,m.mode,E),Al(f,y),f.return=m,f)}function g(m,f,y,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=ns(y,m.mode,E),f.return=m,f):(f=l(f,y.children||[]),f.return=m,f)}function A(m,f,y,E,$){return f===null||f.tag!==7?(f=tn(y,m.mode,E,$),f.return=m,f):(f=l(f,y),f.return=m,f)}function Y(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=as(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case te:return y=No(f.type,f.key,f.props,null,m.mode,y),Al(y,f),y.return=m,y;case P:return f=ns(f,m.mode,y),f.return=m,f;case Le:return f=sn(f),Y(m,f,y)}if(Ge(f)||F(f))return f=tn(f,m.mode,y,null),f.return=m,f;if(typeof f.then=="function")return Y(m,Bo(f),y);if(f.$$typeof===se)return Y(m,So(m,f),y);Mo(m,f)}return null}function b(m,f,y,E){var $=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return $!==null?null:u(m,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case te:return y.key===$?c(m,f,y,E):null;case P:return y.key===$?g(m,f,y,E):null;case Le:return y=sn(y),b(m,f,y,E)}if(Ge(y)||F(y))return $!==null?null:A(m,f,y,E,null);if(typeof y.then=="function")return b(m,f,Bo(y),E);if(y.$$typeof===se)return b(m,f,So(m,y),E);Mo(m,y)}return null}function k(m,f,y,E,$){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return m=m.get(y)||null,u(f,m,""+E,$);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case te:return m=m.get(E.key===null?y:E.key)||null,c(f,m,E,$);case P:return m=m.get(E.key===null?y:E.key)||null,g(f,m,E,$);case Le:return E=sn(E),k(m,f,y,E,$)}if(Ge(E)||F(E))return m=m.get(y)||null,A(f,m,E,$,null);if(typeof E.then=="function")return k(m,f,y,Bo(E),$);if(E.$$typeof===se)return k(m,f,y,So(f,E),$);Mo(f,E)}return null}function X(m,f,y,E){for(var $=null,me=null,Q=f,ie=f=0,de=null;Q!==null&&ie<y.length;ie++){Q.index>ie?(de=Q,Q=null):de=Q.sibling;var ye=b(m,Q,y[ie],E);if(ye===null){Q===null&&(Q=de);break}e&&Q&&ye.alternate===null&&t(m,Q),f=o(ye,f,ie),me===null?$=ye:me.sibling=ye,me=ye,Q=de}if(ie===y.length)return a(m,Q),he&&ea(m,ie),$;if(Q===null){for(;ie<y.length;ie++)Q=Y(m,y[ie],E),Q!==null&&(f=o(Q,f,ie),me===null?$=Q:me.sibling=Q,me=Q);return he&&ea(m,ie),$}for(Q=n(Q);ie<y.length;ie++)de=k(Q,m,ie,y[ie],E),de!==null&&(e&&de.alternate!==null&&Q.delete(de.key===null?ie:de.key),f=o(de,f,ie),me===null?$=de:me.sibling=de,me=de);return e&&Q.forEach(function(qa){return t(m,qa)}),he&&ea(m,ie),$}function ee(m,f,y,E){if(y==null)throw Error(d(151));for(var $=null,me=null,Q=f,ie=f=0,de=null,ye=y.next();Q!==null&&!ye.done;ie++,ye=y.next()){Q.index>ie?(de=Q,Q=null):de=Q.sibling;var qa=b(m,Q,ye.value,E);if(qa===null){Q===null&&(Q=de);break}e&&Q&&qa.alternate===null&&t(m,Q),f=o(qa,f,ie),me===null?$=qa:me.sibling=qa,me=qa,Q=de}if(ye.done)return a(m,Q),he&&ea(m,ie),$;if(Q===null){for(;!ye.done;ie++,ye=y.next())ye=Y(m,ye.value,E),ye!==null&&(f=o(ye,f,ie),me===null?$=ye:me.sibling=ye,me=ye);return he&&ea(m,ie),$}for(Q=n(Q);!ye.done;ie++,ye=y.next())ye=k(Q,m,ie,ye.value,E),ye!==null&&(e&&ye.alternate!==null&&Q.delete(ye.key===null?ie:ye.key),f=o(ye,f,ie),me===null?$=ye:me.sibling=ye,me=ye);return e&&Q.forEach(function(Ey){return t(m,Ey)}),he&&ea(m,ie),$}function je(m,f,y,E){if(typeof y=="object"&&y!==null&&y.type===ae&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case te:e:{for(var $=y.key;f!==null;){if(f.key===$){if($=y.type,$===ae){if(f.tag===7){a(m,f.sibling),E=l(f,y.props.children),E.return=m,m=E;break e}}else if(f.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Le&&sn($)===f.type){a(m,f.sibling),E=l(f,y.props),Al(E,y),E.return=m,m=E;break e}a(m,f);break}else t(m,f);f=f.sibling}y.type===ae?(E=tn(y.props.children,m.mode,E,y.key),E.return=m,m=E):(E=No(y.type,y.key,y.props,null,m.mode,E),Al(E,y),E.return=m,m=E)}return s(m);case P:e:{for($=y.key;f!==null;){if(f.key===$)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){a(m,f.sibling),E=l(f,y.children||[]),E.return=m,m=E;break e}else{a(m,f);break}else t(m,f);f=f.sibling}E=ns(y,m.mode,E),E.return=m,m=E}return s(m);case Le:return y=sn(y),je(m,f,y,E)}if(Ge(y))return X(m,f,y,E);if(F(y)){if($=F(y),typeof $!="function")throw Error(d(150));return y=$.call(y),ee(m,f,y,E)}if(typeof y.then=="function")return je(m,f,Bo(y),E);if(y.$$typeof===se)return je(m,f,So(m,y),E);Mo(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,f!==null&&f.tag===6?(a(m,f.sibling),E=l(f,y),E.return=m,m=E):(a(m,f),E=as(y,m.mode,E),E.return=m,m=E),s(m)):a(m,f)}return function(m,f,y,E){try{Il=0;var $=je(m,f,y,E);return Rn=null,$}catch(Q){if(Q===Dn||Q===Eo)throw Q;var me=jt(29,Q,null,m.mode);return me.lanes=E,me.return=m,me}finally{}}}var un=sc(!0),rc=sc(!1),Ia=!1;function ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(pe&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=jo(e),Wu(e,null,a),t}return ko(e,n,t,a),jo(e)}function Sl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Pr(e,a)}}function ps(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?l=o=s:o=o.next=s,a=a.next}while(a!==null);o===null?l=o=t:o=o.next=t}else l=o=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var bs=!1;function Tl(){if(bs){var e=Hn;if(e!==null)throw e}}function El(e,t,a,n){bs=!1;var l=e.updateQueue;Ia=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var c=u,g=c.next;c.next=null,s===null?o=g:s.next=g,s=c;var A=e.alternate;A!==null&&(A=A.updateQueue,u=A.lastBaseUpdate,u!==s&&(u===null?A.firstBaseUpdate=g:u.next=g,A.lastBaseUpdate=c))}if(o!==null){var Y=l.baseState;s=0,A=g=c=null,u=o;do{var b=u.lane&-536870913,k=b!==u.lane;if(k?(ce&b)===b:(n&b)===b){b!==0&&b===On&&(bs=!0),A!==null&&(A=A.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var X=e,ee=u;b=t;var je=a;switch(ee.tag){case 1:if(X=ee.payload,typeof X=="function"){Y=X.call(je,Y,b);break e}Y=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=ee.payload,b=typeof X=="function"?X.call(je,Y,b):X,b==null)break e;Y=_({},Y,b);break e;case 2:Ia=!0}}b=u.callback,b!==null&&(e.flags|=64,k&&(e.flags|=8192),k=l.callbacks,k===null?l.callbacks=[b]:k.push(b))}else k={lane:b,tag:u.tag,payload:u.payload,callback:u.callback,next:null},A===null?(g=A=k,c=Y):A=A.next=k,s|=b;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;k=u,u=k.next,k.next=null,l.lastBaseUpdate=k,l.shared.pending=null}}while(!0);A===null&&(c=Y),l.baseState=c,l.firstBaseUpdate=g,l.lastBaseUpdate=A,o===null&&(l.shared.lanes=0),Ma|=s,e.lanes=s,e.memoizedState=Y}}function uc(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function cc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)uc(a[e],t)}var qn=h(null),Co=h(0);function dc(e,t){e=da,D(Co,e),D(qn,t),da=e|t.baseLanes}function ws(){D(Co,da),D(qn,qn.current)}function vs(){da=Co.current,T(qn),T(Co)}var Nt=h(null),Ot=null;function Ta(e){var t=e.alternate;D(We,We.current&1),D(Nt,e),Ot===null&&(t===null||qn.current!==null||t.memoizedState!==null)&&(Ot=e)}function xs(e){D(We,We.current),D(Nt,e),Ot===null&&(Ot=e)}function hc(e){e.tag===22?(D(We,We.current),D(Nt,e),Ot===null&&(Ot=e)):Ea()}function Ea(){D(We,We.current),D(Nt,Nt.current)}function It(e){T(Nt),Ot===e&&(Ot=null),T(We)}var We=h(0);function zo(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Sr(a)||Tr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=0,oe=null,xe=null,Ke=null,Uo=!1,Ln=!1,cn=!1,Vo=0,Yl=0,Gn=null,wm=0;function He(){throw Error(d(321))}function ks(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!kt(e[a],t[a]))return!1;return!0}function js(e,t,a,n,l,o){return na=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?Zc:Os,cn=!1,o=a(n,l),cn=!1,Ln&&(o=mc(t,a,n,l)),fc(e),o}function fc(e){I.H=Cl;var t=xe!==null&&xe.next!==null;if(na=0,Ke=xe=oe=null,Uo=!1,Yl=0,Gn=null,t)throw Error(d(300));e===null||Je||(e=e.dependencies,e!==null&&Ao(e)&&(Je=!0))}function mc(e,t,a,n){oe=e;var l=0;do{if(Ln&&(Gn=null),Yl=0,Ln=!1,25<=l)throw Error(d(301));if(l+=1,Ke=xe=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}I.H=Kc,o=t(a,n)}while(Ln);return o}function vm(){var e=I.H,t=e.useState()[0];return t=typeof t.then=="function"?Bl(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(oe.flags|=1024),t}function Ns(){var e=Vo!==0;return Vo=0,e}function Is(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function As(e){if(Uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Uo=!1}na=0,Ke=xe=oe=null,Ln=!1,Yl=Vo=0,Gn=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?oe.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Xe(){if(xe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ke===null?oe.memoizedState:Ke.next;if(t!==null)Ke=t,xe=e;else{if(e===null)throw oe.alternate===null?Error(d(467)):Error(d(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ke===null?oe.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function _o(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bl(e){var t=Yl;return Yl+=1,Gn===null&&(Gn=[]),e=lc(Gn,e,t),t=oe,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?Zc:Os),e}function Oo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bl(e);if(e.$$typeof===se)return ot(e)}throw Error(d(438,String(e)))}function Ss(e){var t=null,a=oe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=oe.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=_o(),oe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=K;return t.index++,a}function la(e,t){return typeof t=="function"?t(e):t}function Ho(e){var t=Xe();return Ts(t,xe,e)}function Ts(e,t,a){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=a;var l=e.baseQueue,o=n.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}t.baseQueue=l=o,n.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var u=s=null,c=null,g=t,A=!1;do{var Y=g.lane&-536870913;if(Y!==g.lane?(ce&Y)===Y:(na&Y)===Y){var b=g.revertLane;if(b===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),Y===On&&(A=!0);else if((na&b)===b){g=g.next,b===On&&(A=!0);continue}else Y={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(u=c=Y,s=o):c=c.next=Y,oe.lanes|=b,Ma|=b;Y=g.action,cn&&a(o,Y),o=g.hasEagerState?g.eagerState:a(o,Y)}else b={lane:Y,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(u=c=b,s=o):c=c.next=b,oe.lanes|=Y,Ma|=Y;g=g.next}while(g!==null&&g!==t);if(c===null?s=o:c.next=u,!kt(o,e.memoizedState)&&(Je=!0,A&&(a=Hn,a!==null)))throw a;e.memoizedState=o,e.baseState=s,e.baseQueue=c,n.lastRenderedState=o}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Es(e){var t=Xe(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,o=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);kt(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function yc(e,t,a){var n=oe,l=Xe(),o=he;if(o){if(a===void 0)throw Error(d(407));a=a()}else a=t();var s=!kt((xe||l).memoizedState,a);if(s&&(l.memoizedState=a,Je=!0),l=l.queue,Ms(bc.bind(null,n,l,e),[e]),l.getSnapshot!==t||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,Wn(9,{destroy:void 0},pc.bind(null,n,l,a,t),null),Ie===null)throw Error(d(349));o||(na&127)!==0||gc(n,t,a)}return a}function gc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=oe.updateQueue,t===null?(t=_o(),oe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function pc(e,t,a,n){t.value=a,t.getSnapshot=n,wc(t)&&vc(e)}function bc(e,t,a){return a(function(){wc(t)&&vc(e)})}function wc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!kt(e,a)}catch{return!0}}function vc(e){var t=en(e,2);t!==null&&vt(t,e,2)}function Ys(e){var t=dt();if(typeof e=="function"){var a=e;if(e=a(),cn){ct(!0);try{a()}finally{ct(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},t}function xc(e,t,a,n){return e.baseState=a,Ts(e,xe,typeof n=="function"?n:la)}function xm(e,t,a,n,l){if(qo(e))throw Error(d(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};I.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,kc(t,o)):(o.next=a.next,t.pending=a.next=o)}}function kc(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var o=I.T,s={};I.T=s;try{var u=a(l,n),c=I.S;c!==null&&c(s,u),jc(e,t,u)}catch(g){Bs(e,t,g)}finally{o!==null&&s.types!==null&&(o.types=s.types),I.T=o}}else try{o=a(l,n),jc(e,t,o)}catch(g){Bs(e,t,g)}}function jc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Nc(e,t,n)},function(n){return Bs(e,t,n)}):Nc(e,t,a)}function Nc(e,t,a){t.status="fulfilled",t.value=a,Ic(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,kc(e,a)))}function Bs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Ic(t),t=t.next;while(t!==n)}e.action=null}function Ic(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ac(e,t){return t}function Sc(e,t){if(he){var a=Ie.formState;if(a!==null){e:{var n=oe;if(he){if(Be){t:{for(var l=Be,o=_t;l.nodeType!==8;){if(!o){l=null;break t}if(l=Ht(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){Be=Ht(l.nextSibling),n=l.data==="F!";break e}}ja(n)}n=!1}n&&(t=a[0])}}return a=dt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ac,lastRenderedState:t},a.queue=n,a=Xc.bind(null,oe,n),n.dispatch=a,n=Ys(!1),o=_s.bind(null,oe,!1,n.queue),n=dt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=xm.bind(null,oe,l,o,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Tc(e){var t=Xe();return Ec(t,xe,e)}function Ec(e,t,a){if(t=Ts(e,t,Ac)[0],e=Ho(la)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Bl(t)}catch(s){throw s===Dn?Eo:s}else n=t;t=Xe();var l=t.queue,o=l.dispatch;return a!==t.memoizedState&&(oe.flags|=2048,Wn(9,{destroy:void 0},km.bind(null,l,a),null)),[n,o,e]}function km(e,t){e.action=t}function Yc(e){var t=Xe(),a=xe;if(a!==null)return Ec(t,a,e);Xe(),t=t.memoizedState,a=Xe();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Wn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=oe.updateQueue,t===null&&(t=_o(),oe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Bc(){return Xe().memoizedState}function Do(e,t,a,n){var l=dt();oe.flags|=e,l.memoizedState=Wn(1|t,{destroy:void 0},a,n===void 0?null:n)}function Ro(e,t,a,n){var l=Xe();n=n===void 0?null:n;var o=l.memoizedState.inst;xe!==null&&n!==null&&ks(n,xe.memoizedState.deps)?l.memoizedState=Wn(t,o,a,n):(oe.flags|=e,l.memoizedState=Wn(1|t,o,a,n))}function Mc(e,t){Do(8390656,8,e,t)}function Ms(e,t){Ro(2048,8,e,t)}function jm(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=_o(),oe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Cc(e){var t=Xe().memoizedState;return jm({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function zc(e,t){return Ro(4,2,e,t)}function Uc(e,t){return Ro(4,4,e,t)}function Vc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _c(e,t,a){a=a!=null?a.concat([e]):null,Ro(4,4,Vc.bind(null,t,e),a)}function Cs(){}function Oc(e,t){var a=Xe();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&ks(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Hc(e,t){var a=Xe();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&ks(t,n[1]))return n[0];if(n=e(),cn){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[n,t],n}function zs(e,t,a){return a===void 0||(na&1073741824)!==0&&(ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Dd(),oe.lanes|=e,Ma|=e,a)}function Dc(e,t,a,n){return kt(a,t)?a:qn.current!==null?(e=zs(e,a,n),kt(e,t)||(Je=!0),e):(na&42)===0||(na&1073741824)!==0&&(ce&261930)===0?(Je=!0,e.memoizedState=a):(e=Dd(),oe.lanes|=e,Ma|=e,t)}function Rc(e,t,a,n,l){var o=H.p;H.p=o!==0&&8>o?o:8;var s=I.T,u={};I.T=u,_s(e,!1,t,a);try{var c=l(),g=I.S;if(g!==null&&g(u,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var A=bm(c,n);Ml(e,t,A,Tt(e))}else Ml(e,t,n,Tt(e))}catch(Y){Ml(e,t,{then:function(){},status:"rejected",reason:Y},Tt())}finally{H.p=o,s!==null&&u.types!==null&&(s.types=u.types),I.T=s}}function Nm(){}function Us(e,t,a,n){if(e.tag!==5)throw Error(d(476));var l=qc(e).queue;Rc(e,l,t,S,a===null?Nm:function(){return Lc(e),a(n)})}function qc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:S,baseState:S,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:S},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Lc(e){var t=qc(e);t.next===null&&(t=e.alternate.memoizedState),Ml(e,t.next.queue,{},Tt())}function Vs(){return ot(Zl)}function Gc(){return Xe().memoizedState}function Wc(){return Xe().memoizedState}function Im(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Tt();e=Aa(a);var n=Sa(t,e,a);n!==null&&(vt(n,t,a),Sl(n,t,a)),t={cache:ds()},e.payload=t;return}t=t.return}}function Am(e,t,a){var n=Tt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},qo(e)?Qc(t,a):(a=es(e,t,a,n),a!==null&&(vt(a,e,n),Fc(a,t,n)))}function Xc(e,t,a){var n=Tt();Ml(e,t,a,n)}function Ml(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(qo(e))Qc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,u=o(s,a);if(l.hasEagerState=!0,l.eagerState=u,kt(u,s))return ko(e,t,l,0),Ie===null&&xo(),!1}catch{}finally{}if(a=es(e,t,l,n),a!==null)return vt(a,e,n),Fc(a,t,n),!0}return!1}function _s(e,t,a,n){if(n={lane:2,revertLane:yr(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},qo(e)){if(t)throw Error(d(479))}else t=es(e,a,n,2),t!==null&&vt(t,e,2)}function qo(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Qc(e,t){Ln=Uo=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Fc(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Pr(e,a)}}var Cl={readContext:ot,use:Oo,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};Cl.useEffectEvent=He;var Zc={readContext:ot,use:Oo,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Mc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Do(4194308,4,Vc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){Do(4,2,e,t)},useMemo:function(e,t){var a=dt();t=t===void 0?null:t;var n=e();if(cn){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=dt();if(a!==void 0){var l=a(t);if(cn){ct(!0);try{a(t)}finally{ct(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Am.bind(null,oe,e),[n.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ys(e);var t=e.queue,a=Xc.bind(null,oe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Cs,useDeferredValue:function(e,t){var a=dt();return zs(a,e,t)},useTransition:function(){var e=Ys(!1);return e=Rc.bind(null,oe,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=oe,l=dt();if(he){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),Ie===null)throw Error(d(349));(ce&127)!==0||gc(n,t,a)}l.memoizedState=a;var o={value:a,getSnapshot:t};return l.queue=o,Mc(bc.bind(null,n,o,e),[e]),n.flags|=2048,Wn(9,{destroy:void 0},pc.bind(null,n,o,a,t),null),a},useId:function(){var e=dt(),t=Ie.identifierPrefix;if(he){var a=Xt,n=Wt;a=(n&~(1<<32-be(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Vo++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=wm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Vs,useFormState:Sc,useActionState:Sc,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=_s.bind(null,oe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ss,useCacheRefresh:function(){return dt().memoizedState=Im.bind(null,oe)},useEffectEvent:function(e){var t=dt(),a={impl:e};return t.memoizedState=a,function(){if((pe&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},Os={readContext:ot,use:Oo,useCallback:Oc,useContext:ot,useEffect:Ms,useImperativeHandle:_c,useInsertionEffect:zc,useLayoutEffect:Uc,useMemo:Hc,useReducer:Ho,useRef:Bc,useState:function(){return Ho(la)},useDebugValue:Cs,useDeferredValue:function(e,t){var a=Xe();return Dc(a,xe.memoizedState,e,t)},useTransition:function(){var e=Ho(la)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:Bl(e),t]},useSyncExternalStore:yc,useId:Gc,useHostTransitionStatus:Vs,useFormState:Tc,useActionState:Tc,useOptimistic:function(e,t){var a=Xe();return xc(a,xe,e,t)},useMemoCache:Ss,useCacheRefresh:Wc};Os.useEffectEvent=Cc;var Kc={readContext:ot,use:Oo,useCallback:Oc,useContext:ot,useEffect:Ms,useImperativeHandle:_c,useInsertionEffect:zc,useLayoutEffect:Uc,useMemo:Hc,useReducer:Es,useRef:Bc,useState:function(){return Es(la)},useDebugValue:Cs,useDeferredValue:function(e,t){var a=Xe();return xe===null?zs(a,e,t):Dc(a,xe.memoizedState,e,t)},useTransition:function(){var e=Es(la)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:Bl(e),t]},useSyncExternalStore:yc,useId:Gc,useHostTransitionStatus:Vs,useFormState:Yc,useActionState:Yc,useOptimistic:function(e,t){var a=Xe();return xe!==null?xc(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ss,useCacheRefresh:Wc};Kc.useEffectEvent=Cc;function Hs(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:_({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ds={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Tt(),l=Aa(n);l.payload=t,a!=null&&(l.callback=a),t=Sa(e,l,n),t!==null&&(vt(t,e,n),Sl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Tt(),l=Aa(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Sa(e,l,n),t!==null&&(vt(t,e,n),Sl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Tt(),n=Aa(a);n.tag=2,t!=null&&(n.callback=t),t=Sa(e,n,a),t!==null&&(vt(t,e,a),Sl(t,e,a))}};function Jc(e,t,a,n,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!wl(a,n)||!wl(l,o):!0}function $c(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Ds.enqueueReplaceState(t,t.state,null)}function dn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=_({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Pc(e){vo(e)}function ed(e){console.error(e)}function td(e){vo(e)}function Lo(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function ad(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Rs(e,t,a){return a=Aa(a),a.tag=3,a.payload={element:null},a.callback=function(){Lo(e,t)},a}function nd(e){return e=Aa(e),e.tag=3,e}function ld(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var o=n.value;e.payload=function(){return l(o)},e.callback=function(){ad(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){ad(t,a,n),typeof l!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})})}function Sm(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&_n(t,a,l,!0),a=Nt.current,a!==null){switch(a.tag){case 31:case 13:return Ot===null?ti():a.alternate===null&&De===0&&(De=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Yo?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),hr(e,n,l)),!1;case 22:return a.flags|=65536,n===Yo?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),hr(e,n,l)),!1}throw Error(d(435,a.tag))}return hr(e,n,l),ti(),!1}if(he)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==is&&(e=Error(d(422),{cause:n}),kl(zt(e,a)))):(n!==is&&(t=Error(d(423),{cause:n}),kl(zt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=zt(n,a),l=Rs(e.stateNode,n,l),ps(e,l),De!==4&&(De=2)),!1;var o=Error(d(520),{cause:n});if(o=zt(o,a),Rl===null?Rl=[o]:Rl.push(o),De!==4&&(De=2),t===null)return!0;n=zt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Rs(a.stateNode,n,e),ps(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))))return a.flags|=65536,l&=-l,a.lanes|=l,l=nd(l),ld(l,e,a,n),ps(a,l),!1}a=a.return}while(a!==null);return!1}var qs=Error(d(461)),Je=!1;function it(e,t,a,n){t.child=e===null?rc(t,null,a,n):un(t,e.child,a,n)}function od(e,t,a,n,l){a=a.render;var o=t.ref;if("ref"in n){var s={};for(var u in n)u!=="ref"&&(s[u]=n[u])}else s=n;return ln(t),n=js(e,t,a,s,o,l),u=Ns(),e!==null&&!Je?(Is(e,t,l),oa(e,t,l)):(he&&u&&ls(t),t.flags|=1,it(e,t,n,l),t.child)}function id(e,t,a,n,l){if(e===null){var o=a.type;return typeof o=="function"&&!ts(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,sd(e,t,o,n,l)):(e=No(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Ks(e,l)){var s=o.memoizedProps;if(a=a.compare,a=a!==null?a:wl,a(s,n)&&e.ref===t.ref)return oa(e,t,l)}return t.flags|=1,e=Pt(o,n),e.ref=t.ref,e.return=t,t.child=e}function sd(e,t,a,n,l){if(e!==null){var o=e.memoizedProps;if(wl(o,n)&&e.ref===t.ref)if(Je=!1,t.pendingProps=n=o,Ks(e,l))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,oa(e,t,l)}return Ls(e,t,a,n,l)}function rd(e,t,a,n){var l=n.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~o}else n=0,t.child=null;return ud(e,t,o,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&To(t,o!==null?o.cachePool:null),o!==null?dc(t,o):ws(),hc(t);else return n=t.lanes=536870912,ud(e,t,o!==null?o.baseLanes|a:a,a,n)}else o!==null?(To(t,o.cachePool),dc(t,o),Ea(),t.memoizedState=null):(e!==null&&To(t,null),ws(),Ea());return it(e,t,l,a),t.child}function zl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ud(e,t,a,n,l){var o=fs();return o=o===null?null:{parent:Ze._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&To(t,null),ws(),hc(t),e!==null&&_n(e,t,n,!0),t.childLanes=l,null}function Go(e,t){return t=Xo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cd(e,t,a){return un(t,e.child,null,a),e=Go(t,t.pendingProps),e.flags|=2,It(t),t.memoizedState=null,e}function Tm(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(he){if(n.mode==="hidden")return e=Go(t,n),t.lanes=536870912,zl(null,e);if(xs(t),(e=Be)?(e=kh(e,_t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Wt,overflow:Xt}:null,retryLane:536870912,hydrationErrors:null},a=Qu(e),a.return=t,t.child=a,lt=t,Be=null)):e=null,e===null)throw ja(t);return t.lanes=536870912,null}return Go(t,n)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(xs(t),l)if(t.flags&256)t.flags&=-257,t=cd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Je||_n(e,t,a,!1),l=(a&e.childLanes)!==0,Je||l){if(n=Ie,n!==null&&(s=eu(n,a),s!==0&&s!==o.retryLane))throw o.retryLane=s,en(e,s),vt(n,e,s),qs;ti(),t=cd(e,t,a)}else e=o.treeContext,Be=Ht(s.nextSibling),lt=t,he=!0,ka=null,_t=!1,e!==null&&Ku(t,e),t=Go(t,n),t.flags|=4096;return t}return e=Pt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Wo(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ls(e,t,a,n,l){return ln(t),a=js(e,t,a,n,void 0,l),n=Ns(),e!==null&&!Je?(Is(e,t,l),oa(e,t,l)):(he&&n&&ls(t),t.flags|=1,it(e,t,a,l),t.child)}function dd(e,t,a,n,l,o){return ln(t),t.updateQueue=null,a=mc(t,n,a,l),fc(e),n=Ns(),e!==null&&!Je?(Is(e,t,o),oa(e,t,o)):(he&&n&&ls(t),t.flags|=1,it(e,t,a,o),t.child)}function hd(e,t,a,n,l){if(ln(t),t.stateNode===null){var o=Cn,s=a.contextType;typeof s=="object"&&s!==null&&(o=ot(s)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ds,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},ys(t),s=a.contextType,o.context=typeof s=="object"&&s!==null?ot(s):Cn,o.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Hs(t,a,s,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&Ds.enqueueReplaceState(o,o.state,null),El(t,n,o,l),Tl(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var u=t.memoizedProps,c=dn(a,u);o.props=c;var g=o.context,A=a.contextType;s=Cn,typeof A=="object"&&A!==null&&(s=ot(A));var Y=a.getDerivedStateFromProps;A=typeof Y=="function"||typeof o.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,A||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u||g!==s)&&$c(t,o,n,s),Ia=!1;var b=t.memoizedState;o.state=b,El(t,n,o,l),Tl(),g=t.memoizedState,u||b!==g||Ia?(typeof Y=="function"&&(Hs(t,a,Y,n),g=t.memoizedState),(c=Ia||Jc(t,a,c,n,b,g,s))?(A||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=g),o.props=n,o.state=g,o.context=s,n=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,gs(e,t),s=t.memoizedProps,A=dn(a,s),o.props=A,Y=t.pendingProps,b=o.context,g=a.contextType,c=Cn,typeof g=="object"&&g!==null&&(c=ot(g)),u=a.getDerivedStateFromProps,(g=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==Y||b!==c)&&$c(t,o,n,c),Ia=!1,b=t.memoizedState,o.state=b,El(t,n,o,l),Tl();var k=t.memoizedState;s!==Y||b!==k||Ia||e!==null&&e.dependencies!==null&&Ao(e.dependencies)?(typeof u=="function"&&(Hs(t,a,u,n),k=t.memoizedState),(A=Ia||Jc(t,a,A,n,b,k,c)||e!==null&&e.dependencies!==null&&Ao(e.dependencies))?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,k,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,k,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),o.props=n,o.state=k,o.context=c,n=A):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,Wo(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=un(t,e.child,null,l),t.child=un(t,null,a,l)):it(e,t,a,l),t.memoizedState=o.state,e=t.child):e=oa(e,t,l),e}function fd(e,t,a,n){return an(),t.flags|=256,it(e,t,a,n),t.child}var Gs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ws(e){return{baseLanes:e,cachePool:ac()}}function Xs(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=St),e}function md(e,t,a){var n=t.pendingProps,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(l?Ta(t):Ea(),(e=Be)?(e=kh(e,_t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Wt,overflow:Xt}:null,retryLane:536870912,hydrationErrors:null},a=Qu(e),a.return=t,t.child=a,lt=t,Be=null)):e=null,e===null)throw ja(t);return Tr(e)?t.lanes=32:t.lanes=536870912,null}var u=n.children;return n=n.fallback,l?(Ea(),l=t.mode,u=Xo({mode:"hidden",children:u},l),n=tn(n,l,a,null),u.return=t,n.return=t,u.sibling=n,t.child=u,n=t.child,n.memoizedState=Ws(a),n.childLanes=Xs(e,s,a),t.memoizedState=Gs,zl(null,n)):(Ta(t),Qs(t,u))}var c=e.memoizedState;if(c!==null&&(u=c.dehydrated,u!==null)){if(o)t.flags&256?(Ta(t),t.flags&=-257,t=Fs(e,t,a)):t.memoizedState!==null?(Ea(),t.child=e.child,t.flags|=128,t=null):(Ea(),u=n.fallback,l=t.mode,n=Xo({mode:"visible",children:n.children},l),u=tn(u,l,a,null),u.flags|=2,n.return=t,u.return=t,n.sibling=u,t.child=n,un(t,e.child,null,a),n=t.child,n.memoizedState=Ws(a),n.childLanes=Xs(e,s,a),t.memoizedState=Gs,t=zl(null,n));else if(Ta(t),Tr(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var g=s.dgst;s=g,n=Error(d(419)),n.stack="",n.digest=s,kl({value:n,source:null,stack:null}),t=Fs(e,t,a)}else if(Je||_n(e,t,a,!1),s=(a&e.childLanes)!==0,Je||s){if(s=Ie,s!==null&&(n=eu(s,a),n!==0&&n!==c.retryLane))throw c.retryLane=n,en(e,n),vt(s,e,n),qs;Sr(u)||ti(),t=Fs(e,t,a)}else Sr(u)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,Be=Ht(u.nextSibling),lt=t,he=!0,ka=null,_t=!1,e!==null&&Ku(t,e),t=Qs(t,n.children),t.flags|=4096);return t}return l?(Ea(),u=n.fallback,l=t.mode,c=e.child,g=c.sibling,n=Pt(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&65011712,g!==null?u=Pt(g,u):(u=tn(u,l,a,null),u.flags|=2),u.return=t,n.return=t,n.sibling=u,t.child=n,zl(null,n),n=t.child,u=e.child.memoizedState,u===null?u=Ws(a):(l=u.cachePool,l!==null?(c=Ze._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=ac(),u={baseLanes:u.baseLanes|a,cachePool:l}),n.memoizedState=u,n.childLanes=Xs(e,s,a),t.memoizedState=Gs,zl(e.child,n)):(Ta(t),a=e.child,e=a.sibling,a=Pt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Qs(e,t){return t=Xo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Xo(e,t){return e=jt(22,e,null,t),e.lanes=0,e}function Fs(e,t,a){return un(t,e.child,null,a),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),us(e.return,t,a)}function Zs(e,t,a,n,l,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=l,s.treeForkCount=o)}function gd(e,t,a){var n=t.pendingProps,l=n.revealOrder,o=n.tail;n=n.children;var s=We.current,u=(s&2)!==0;if(u?(s=s&1|2,t.flags|=128):s&=1,D(We,s),it(e,t,n,a),n=he?xl:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yd(e,a,t);else if(e.tag===19)yd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&zo(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Zs(t,!1,l,a,o,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&zo(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Zs(t,!0,a,null,o,n);break;case"together":Zs(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function oa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ma|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(_n(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=Pt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Pt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ks(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ao(e)))}function Em(e,t,a){switch(t.tag){case 3:Ye(t,t.stateNode.containerInfo),Na(t,Ze,e.memoizedState.cache),an();break;case 27:case 5:ga(t);break;case 4:Ye(t,t.stateNode.containerInfo);break;case 10:Na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,xs(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ta(t),t.flags|=128,null):(a&t.child.childLanes)!==0?md(e,t,a):(Ta(t),e=oa(e,t,a),e!==null?e.sibling:null);Ta(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(_n(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return gd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(We,We.current),n)break;return null;case 22:return t.lanes=0,rd(e,t,a,t.pendingProps);case 24:Na(t,Ze,e.memoizedState.cache)}return oa(e,t,a)}function pd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Ks(e,a)&&(t.flags&128)===0)return Je=!1,Em(e,t,a);Je=(e.flags&131072)!==0}else Je=!1,he&&(t.flags&1048576)!==0&&Zu(t,xl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=sn(t.elementType),t.type=e,typeof e=="function")ts(e)?(n=dn(e,n),t.tag=1,t=hd(null,t,e,n,a)):(t.tag=0,t=Ls(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===Se){t.tag=11,t=od(null,t,e,n,a);break e}else if(l===Z){t.tag=14,t=id(null,t,e,n,a);break e}}throw t=at(e)||e,Error(d(306,t,""))}}return t;case 0:return Ls(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=dn(n,t.pendingProps),hd(e,t,n,l,a);case 3:e:{if(Ye(t,t.stateNode.containerInfo),e===null)throw Error(d(387));n=t.pendingProps;var o=t.memoizedState;l=o.element,gs(e,t),El(t,n,null,a);var s=t.memoizedState;if(n=s.cache,Na(t,Ze,n),n!==o.cache&&cs(t,[Ze],a,!0),Tl(),n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=fd(e,t,n,a);break e}else if(n!==l){l=zt(Error(d(424)),t),kl(l),t=fd(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=Ht(e.firstChild),lt=t,he=!0,ka=null,_t=!0,a=rc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(an(),n===l){t=oa(e,t,a);break e}it(e,t,n,a)}t=t.child}return t;case 26:return Wo(e,t),e===null?(a=Th(t.type,null,t.pendingProps,null))?t.memoizedState=a:he||(a=t.type,e=t.pendingProps,n=ri(O.current).createElement(a),n[nt]=t,n[mt]=e,st(n,a,e),et(n),t.stateNode=n):t.memoizedState=Th(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ga(t),e===null&&he&&(n=t.stateNode=Ih(t.type,t.pendingProps,O.current),lt=t,_t=!0,l=Be,_a(t.type)?(Er=l,Be=Ht(n.firstChild)):Be=l),it(e,t,t.pendingProps.children,a),Wo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((l=n=Be)&&(n=oy(n,t.type,t.pendingProps,_t),n!==null?(t.stateNode=n,lt=t,Be=Ht(n.firstChild),_t=!1,l=!0):l=!1),l||ja(t)),ga(t),l=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,n=o.children,Nr(l,o)?n=null:s!==null&&Nr(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=js(e,t,vm,null,null,a),Zl._currentValue=l),Wo(e,t),it(e,t,n,a),t.child;case 6:return e===null&&he&&((e=a=Be)&&(a=iy(a,t.pendingProps,_t),a!==null?(t.stateNode=a,lt=t,Be=null,e=!0):e=!1),e||ja(t)),null;case 13:return md(e,t,a);case 4:return Ye(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=un(t,null,n,a):it(e,t,n,a),t.child;case 11:return od(e,t,t.type,t.pendingProps,a);case 7:return it(e,t,t.pendingProps,a),t.child;case 8:return it(e,t,t.pendingProps.children,a),t.child;case 12:return it(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Na(t,t.type,n.value),it(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,ln(t),l=ot(l),n=n(l),t.flags|=1,it(e,t,n,a),t.child;case 14:return id(e,t,t.type,t.pendingProps,a);case 15:return sd(e,t,t.type,t.pendingProps,a);case 19:return gd(e,t,a);case 31:return Tm(e,t,a);case 22:return rd(e,t,a,t.pendingProps);case 24:return ln(t),n=ot(Ze),e===null?(l=fs(),l===null&&(l=Ie,o=ds(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=a),l=o),t.memoizedState={parent:n,cache:l},ys(t),Na(t,Ze,l)):((e.lanes&a)!==0&&(gs(e,t),El(t,null,null,a),Tl()),l=e.memoizedState,o=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Na(t,Ze,n)):(n=o.cache,Na(t,Ze,n),n!==l.cache&&cs(t,[Ze],a,!0))),it(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function ia(e){e.flags|=4}function Js(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Gd())e.flags|=8192;else throw rn=Yo,ms}else e.flags&=-16777217}function bd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ch(t))if(Gd())e.flags|=8192;else throw rn=Yo,ms}function Qo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jr():536870912,e.lanes|=t,Zn|=t)}function Ul(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Ym(e,t,a){var n=t.pendingProps;switch(os(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),aa(Ze),Te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vn(t)?ia(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ss())),Me(t),null;case 26:var l=t.type,o=t.memoizedState;return e===null?(ia(t),o!==null?(Me(t),bd(t,o)):(Me(t),Js(t,l,null,n,a))):o?o!==e.memoizedState?(ia(t),Me(t),bd(t,o)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&ia(t),Me(t),Js(t,l,e,n,a)),null;case 27:if(Zt(t),a=O.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ia(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Me(t),null}e=q.current,Vn(t)?Ju(t):(e=Ih(l,n,a),t.stateNode=e,ia(t))}return Me(t),null;case 5:if(Zt(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ia(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Me(t),null}if(o=q.current,Vn(t))Ju(t);else{var s=ri(O.current);switch(o){case 1:o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=s.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?s.createElement(l,{is:n.is}):s.createElement(l)}}o[nt]=t,o[mt]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;e:switch(st(o,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ia(t)}}return Me(t),Js(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ia(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(e=O.current,Vn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=lt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[nt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||mh(e.nodeValue,a)),e||ja(t,!0)}else e=ri(e).createTextNode(n),e[nt]=t,t.stateNode=e}return Me(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Vn(t),a!==null){if(e===null){if(!n)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[nt]=t}else an(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else a=ss(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(It(t),t):(It(t),null);if((t.flags&128)!==0)throw Error(d(558))}return Me(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Vn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(d(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(d(317));l[nt]=t}else an(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),l=!1}else l=ss(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(It(t),t):(It(t),null)}return It(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Qo(t,t.updateQueue),Me(t),null);case 4:return Te(),e===null&&wr(t.stateNode.containerInfo),Me(t),null;case 10:return aa(t.type),Me(t),null;case 19:if(T(We),n=t.memoizedState,n===null)return Me(t),null;if(l=(t.flags&128)!==0,o=n.rendering,o===null)if(l)Ul(n,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=zo(e),o!==null){for(t.flags|=128,Ul(n,!1),e=o.updateQueue,t.updateQueue=e,Qo(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Xu(a,e),a=a.sibling;return D(We,We.current&1|2),he&&ea(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&rt()>$o&&(t.flags|=128,l=!0,Ul(n,!1),t.lanes=4194304)}else{if(!l)if(e=zo(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Qo(t,e),Ul(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!he)return Me(t),null}else 2*rt()-n.renderingStartTime>$o&&a!==536870912&&(t.flags|=128,l=!0,Ul(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(e=n.last,e!==null?e.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=rt(),e.sibling=null,a=We.current,D(We,l?a&1|2:a&1),he&&ea(t,n.treeForkCount),e):(Me(t),null);case 22:case 23:return It(t),vs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&Qo(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&T(on),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),aa(Ze),Me(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Bm(e,t){switch(os(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return aa(Ze),Te(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Zt(t),null;case 31:if(t.memoizedState!==null){if(It(t),t.alternate===null)throw Error(d(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(It(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(We),null;case 4:return Te(),null;case 10:return aa(t.type),null;case 22:case 23:return It(t),vs(),e!==null&&T(on),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return aa(Ze),null;case 25:return null;default:return null}}function wd(e,t){switch(os(t),t.tag){case 3:aa(Ze),Te();break;case 26:case 27:case 5:Zt(t);break;case 4:Te();break;case 31:t.memoizedState!==null&&It(t);break;case 13:It(t);break;case 19:T(We);break;case 10:aa(t.type);break;case 22:case 23:It(t),vs(),e!==null&&T(on);break;case 24:aa(Ze)}}function Vl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var o=a.create,s=a.inst;n=o(),s.destroy=n}a=a.next}while(a!==l)}}catch(u){ve(t,t.return,u)}}function Ya(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){var s=n.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,l=t;var c=a,g=u;try{g()}catch(A){ve(l,c,A)}}}n=n.next}while(n!==o)}}catch(A){ve(t,t.return,A)}}function vd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{cc(t,a)}catch(n){ve(e,e.return,n)}}}function xd(e,t,a){a.props=dn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ve(e,t,n)}}function _l(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ve(e,t,l)}}function Qt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ve(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ve(e,t,l)}else a.current=null}function kd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ve(e,e.return,l)}}function $s(e,t,a){try{var n=e.stateNode;Pm(n,e.type,a,t),n[mt]=t}catch(l){ve(e,e.return,l)}}function jd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_a(e.type)||e.tag===4}function Ps(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_a(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function er(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Jt));else if(n!==4&&(n===27&&_a(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(er(e,t,a),e=e.sibling;e!==null;)er(e,t,a),e=e.sibling}function Fo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&_a(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Fo(e,t,a),e=e.sibling;e!==null;)Fo(e,t,a),e=e.sibling}function Nd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);st(t,n,a),t[nt]=e,t[mt]=a}catch(o){ve(e,e.return,o)}}var sa=!1,$e=!1,tr=!1,Id=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Mm(e,t){if(e=e.containerInfo,kr=yi,e=_u(e),Fi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var s=0,u=-1,c=-1,g=0,A=0,Y=e,b=null;t:for(;;){for(var k;Y!==a||l!==0&&Y.nodeType!==3||(u=s+l),Y!==o||n!==0&&Y.nodeType!==3||(c=s+n),Y.nodeType===3&&(s+=Y.nodeValue.length),(k=Y.firstChild)!==null;)b=Y,Y=k;for(;;){if(Y===e)break t;if(b===a&&++g===l&&(u=s),b===o&&++A===n&&(c=s),(k=Y.nextSibling)!==null)break;Y=b,b=Y.parentNode}Y=k}a=u===-1||c===-1?null:{start:u,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(jr={focusedElem:e,selectionRange:a},yi=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,l=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var X=dn(a.type,l);e=n.getSnapshotBeforeUpdate(X,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(ee){ve(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ar(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ar(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function Ad(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),n&4&&Vl(5,a);break;case 1:if(ua(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ve(a,a.return,s)}else{var l=dn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ve(a,a.return,s)}}n&64&&vd(a),n&512&&_l(a,a.return);break;case 3:if(ua(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{cc(e,t)}catch(s){ve(a,a.return,s)}}break;case 27:t===null&&n&4&&Nd(a);case 26:case 5:ua(e,a),t===null&&n&4&&kd(a),n&512&&_l(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),n&4&&Ed(e,a);break;case 13:ua(e,a),n&4&&Yd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Rm.bind(null,a),sy(e,a))));break;case 22:if(n=a.memoizedState!==null||sa,!n){t=t!==null&&t.memoizedState!==null||$e,l=sa;var o=$e;sa=n,($e=t)&&!o?ca(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),sa=l,$e=o}break;case 30:break;default:ua(e,a)}}function Sd(e){var t=e.alternate;t!==null&&(e.alternate=null,Sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Bi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,gt=!1;function ra(e,t,a){for(a=a.child;a!==null;)Td(e,t,a),a=a.sibling}function Td(e,t,a){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(Ne,a)}catch{}switch(a.tag){case 26:$e||Qt(a,t),ra(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Qt(a,t);var n=Ce,l=gt;_a(a.type)&&(Ce=a.stateNode,gt=!1),ra(e,t,a),Xl(a.stateNode),Ce=n,gt=l;break;case 5:$e||Qt(a,t);case 6:if(n=Ce,l=gt,Ce=null,ra(e,t,a),Ce=n,gt=l,Ce!==null)if(gt)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(a.stateNode)}catch(o){ve(a,t,o)}else try{Ce.removeChild(a.stateNode)}catch(o){ve(a,t,o)}break;case 18:Ce!==null&&(gt?(e=Ce,vh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),nl(e)):vh(Ce,a.stateNode));break;case 4:n=Ce,l=gt,Ce=a.stateNode.containerInfo,gt=!0,ra(e,t,a),Ce=n,gt=l;break;case 0:case 11:case 14:case 15:Ya(2,a,t),$e||Ya(4,a,t),ra(e,t,a);break;case 1:$e||(Qt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&xd(a,t,n)),ra(e,t,a);break;case 21:ra(e,t,a);break;case 22:$e=(n=$e)||a.memoizedState!==null,ra(e,t,a),$e=n;break;default:ra(e,t,a)}}function Ed(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{nl(e)}catch(a){ve(t,t.return,a)}}}function Yd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{nl(e)}catch(a){ve(t,t.return,a)}}function Cm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Id),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Id),t;default:throw Error(d(435,e.tag))}}function Zo(e,t){var a=Cm(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=qm.bind(null,e,n);n.then(l,l)}})}function pt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],o=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 27:if(_a(u.type)){Ce=u.stateNode,gt=!1;break e}break;case 5:Ce=u.stateNode,gt=!1;break e;case 3:case 4:Ce=u.stateNode.containerInfo,gt=!0;break e}u=u.return}if(Ce===null)throw Error(d(160));Td(o,s,l),Ce=null,gt=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Bd(t,e),t=t.sibling}var Lt=null;function Bd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),bt(e),n&4&&(Ya(3,e,e.return),Vl(3,e),Ya(5,e,e.return));break;case 1:pt(t,e),bt(e),n&512&&($e||a===null||Qt(a,a.return)),n&64&&sa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Lt;if(pt(t,e),bt(e),n&512&&($e||a===null||Qt(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":o=l.getElementsByTagName("title")[0],(!o||o[cl]||o[nt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(n),l.head.insertBefore(o,l.querySelector("head > title"))),st(o,n,a),o[nt]=e,et(o),n=o;break e;case"link":var s=Bh("link","href",l).get(n+(a.href||""));if(s){for(var u=0;u<s.length;u++)if(o=s[u],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(u,1);break t}}o=l.createElement(n),st(o,n,a),l.head.appendChild(o);break;case"meta":if(s=Bh("meta","content",l).get(n+(a.content||""))){for(u=0;u<s.length;u++)if(o=s[u],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(u,1);break t}}o=l.createElement(n),st(o,n,a),l.head.appendChild(o);break;default:throw Error(d(468,n))}o[nt]=e,et(o),n=o}e.stateNode=n}else Mh(l,e.type,e.stateNode);else e.stateNode=Yh(l,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?Mh(l,e.type,e.stateNode):Yh(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&$s(e,e.memoizedProps,a.memoizedProps)}break;case 27:pt(t,e),bt(e),n&512&&($e||a===null||Qt(a,a.return)),a!==null&&n&4&&$s(e,e.memoizedProps,a.memoizedProps);break;case 5:if(pt(t,e),bt(e),n&512&&($e||a===null||Qt(a,a.return)),e.flags&32){l=e.stateNode;try{An(l,"")}catch(X){ve(e,e.return,X)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,$s(e,l,a!==null?a.memoizedProps:l)),n&1024&&(tr=!0);break;case 6:if(pt(t,e),bt(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(X){ve(e,e.return,X)}}break;case 3:if(di=null,l=Lt,Lt=ui(t.containerInfo),pt(t,e),Lt=l,bt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{nl(t.containerInfo)}catch(X){ve(e,e.return,X)}tr&&(tr=!1,Md(e));break;case 4:n=Lt,Lt=ui(e.stateNode.containerInfo),pt(t,e),bt(e),Lt=n;break;case 12:pt(t,e),bt(e);break;case 31:pt(t,e),bt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Zo(e,n)));break;case 13:pt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jo=rt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Zo(e,n)));break;case 22:l=e.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,g=sa,A=$e;if(sa=g||l,$e=A||c,pt(t,e),$e=A,sa=g,bt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||c||sa||$e||hn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(o=c.stateNode,l)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=c.stateNode;var Y=c.memoizedProps.style,b=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;u.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(X){ve(c,c.return,X)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(X){ve(c,c.return,X)}}}else if(t.tag===18){if(a===null){c=t;try{var k=c.stateNode;l?xh(k,!0):xh(c.stateNode,!1)}catch(X){ve(c,c.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Zo(e,a))));break;case 19:pt(t,e),bt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Zo(e,n)));break;case 30:break;case 21:break;default:pt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(jd(n)){a=n;break}n=n.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var l=a.stateNode,o=Ps(e);Fo(e,o,l);break;case 5:var s=a.stateNode;a.flags&32&&(An(s,""),a.flags&=-33);var u=Ps(e);Fo(e,u,s);break;case 3:case 4:var c=a.stateNode.containerInfo,g=Ps(e);er(e,g,c);break;default:throw Error(d(161))}}catch(A){ve(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Md(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Md(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ad(e,t.alternate,t),t=t.sibling}function hn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ya(4,t,t.return),hn(t);break;case 1:Qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&xd(t,t.return,a),hn(t);break;case 27:Xl(t.stateNode);case 26:case 5:Qt(t,t.return),hn(t);break;case 22:t.memoizedState===null&&hn(t);break;case 30:hn(t);break;default:hn(t)}e=e.sibling}}function ca(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,o=t,s=o.flags;switch(o.tag){case 0:case 11:case 15:ca(l,o,a),Vl(4,o);break;case 1:if(ca(l,o,a),n=o,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(g){ve(n,n.return,g)}if(n=o,l=n.updateQueue,l!==null){var u=n.stateNode;try{var c=l.shared.hiddenCallbacks;if(c!==null)for(l.shared.hiddenCallbacks=null,l=0;l<c.length;l++)uc(c[l],u)}catch(g){ve(n,n.return,g)}}a&&s&64&&vd(o),_l(o,o.return);break;case 27:Nd(o);case 26:case 5:ca(l,o,a),a&&n===null&&s&4&&kd(o),_l(o,o.return);break;case 12:ca(l,o,a);break;case 31:ca(l,o,a),a&&s&4&&Ed(l,o);break;case 13:ca(l,o,a),a&&s&4&&Yd(l,o);break;case 22:o.memoizedState===null&&ca(l,o,a),_l(o,o.return);break;case 30:break;default:ca(l,o,a)}t=t.sibling}}function ar(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&jl(a))}function nr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jl(e))}function Gt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cd(e,t,a,n),t=t.sibling}function Cd(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Gt(e,t,a,n),l&2048&&Vl(9,t);break;case 1:Gt(e,t,a,n);break;case 3:Gt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jl(e)));break;case 12:if(l&2048){Gt(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,s=o.id,u=o.onPostCommit;typeof u=="function"&&u(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){ve(t,t.return,c)}}else Gt(e,t,a,n);break;case 31:Gt(e,t,a,n);break;case 13:Gt(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState!==null?o._visibility&2?Gt(e,t,a,n):Ol(e,t):o._visibility&2?Gt(e,t,a,n):(o._visibility|=2,Xn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&ar(s,t);break;case 24:Gt(e,t,a,n),l&2048&&nr(t.alternate,t);break;default:Gt(e,t,a,n)}}function Xn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,s=t,u=a,c=n,g=s.flags;switch(s.tag){case 0:case 11:case 15:Xn(o,s,u,c,l),Vl(8,s);break;case 23:break;case 22:var A=s.stateNode;s.memoizedState!==null?A._visibility&2?Xn(o,s,u,c,l):Ol(o,s):(A._visibility|=2,Xn(o,s,u,c,l)),l&&g&2048&&ar(s.alternate,s);break;case 24:Xn(o,s,u,c,l),l&&g&2048&&nr(s.alternate,s);break;default:Xn(o,s,u,c,l)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:Ol(a,n),l&2048&&ar(n.alternate,n);break;case 24:Ol(a,n),l&2048&&nr(n.alternate,n);break;default:Ol(a,n)}t=t.sibling}}var Hl=8192;function Qn(e,t,a){if(e.subtreeFlags&Hl)for(e=e.child;e!==null;)zd(e,t,a),e=e.sibling}function zd(e,t,a){switch(e.tag){case 26:Qn(e,t,a),e.flags&Hl&&e.memoizedState!==null&&wy(a,Lt,e.memoizedState,e.memoizedProps);break;case 5:Qn(e,t,a);break;case 3:case 4:var n=Lt;Lt=ui(e.stateNode.containerInfo),Qn(e,t,a),Lt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Hl,Hl=16777216,Qn(e,t,a),Hl=n):Qn(e,t,a));break;default:Qn(e,t,a)}}function Ud(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];tt=n,_d(n,e)}Ud(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vd(e),e=e.sibling}function Vd(e){switch(e.tag){case 0:case 11:case 15:Dl(e),e.flags&2048&&Ya(9,e,e.return);break;case 3:Dl(e);break;case 12:Dl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ko(e)):Dl(e);break;default:Dl(e)}}function Ko(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];tt=n,_d(n,e)}Ud(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ya(8,t,t.return),Ko(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ko(t));break;default:Ko(t)}e=e.sibling}}function _d(e,t){for(;tt!==null;){var a=tt;switch(a.tag){case 0:case 11:case 15:Ya(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:jl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,tt=n;else e:for(a=e;tt!==null;){n=tt;var l=n.sibling,o=n.return;if(Sd(n),n===a){tt=null;break e}if(l!==null){l.return=o,tt=l;break e}tt=o}}}var zm={getCacheForType:function(e){var t=ot(Ze),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ot(Ze).controller.signal}},Um=typeof WeakMap=="function"?WeakMap:Map,pe=0,Ie=null,re=null,ce=0,we=0,At=null,Ba=!1,Fn=!1,lr=!1,da=0,De=0,Ma=0,fn=0,or=0,St=0,Zn=0,Rl=null,wt=null,ir=!1,Jo=0,Od=0,$o=1/0,Po=null,Ca=null,Pe=0,za=null,Kn=null,ha=0,sr=0,rr=null,Hd=null,ql=0,ur=null;function Tt(){return(pe&2)!==0&&ce!==0?ce&-ce:I.T!==null?yr():tu()}function Dd(){if(St===0)if((ce&536870912)===0||he){var e=sl;sl<<=1,(sl&3932160)===0&&(sl=262144),St=e}else St=536870912;return e=Nt.current,e!==null&&(e.flags|=32),St}function vt(e,t,a){(e===Ie&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(Jn(e,0),Ua(e,ce,St,!1)),ul(e,a),((pe&2)===0||e!==Ie)&&(e===Ie&&((pe&2)===0&&(fn|=a),De===4&&Ua(e,ce,St,!1)),Ft(e))}function Rd(e,t,a){if((pe&6)!==0)throw Error(d(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||rl(e,t),l=n?Om(e,t):dr(e,t,!0),o=n;do{if(l===0){Fn&&!n&&Ua(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!Vm(a)){l=dr(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var u=e;l=Rl;var c=u.current.memoizedState.isDehydrated;if(c&&(Jn(u,s).flags|=256),s=dr(u,s,!1),s!==2){if(lr&&!c){u.errorRecoveryDisabledLanes|=o,fn|=o,l=4;break e}o=wt,wt=l,o!==null&&(wt===null?wt=o:wt.push.apply(wt,o))}l=s}if(o=!1,l!==2)continue}}if(l===1){Jn(e,0),Ua(e,t,0,!0);break}e:{switch(n=e,o=l,o){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:Ua(n,t,St,!Ba);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(l=Jo+300-rt(),10<l)){if(Ua(n,t,St,!Ba),ro(n,0,!0)!==0)break e;ha=t,n.timeoutHandle=bh(qd.bind(null,n,a,wt,Po,ir,t,St,fn,Zn,Ba,o,"Throttled",-0,0),l);break e}qd(n,a,wt,Po,ir,t,St,fn,Zn,Ba,o,null,-0,0)}}break}while(!0);Ft(e)}function qd(e,t,a,n,l,o,s,u,c,g,A,Y,b,k){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Jt},zd(t,o,Y);var X=(o&62914560)===o?Jo-rt():(o&4194048)===o?Od-rt():0;if(X=vy(Y,X),X!==null){ha=o,e.cancelPendingCommit=X(Kd.bind(null,e,t,o,a,n,l,s,u,c,A,Y,null,b,k)),Ua(e,o,s,!g);return}}Kd(e,t,o,a,n,l,s,u,c)}function Vm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],o=l.getSnapshot;l=l.value;try{if(!kt(o(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ua(e,t,a,n){t&=~or,t&=~fn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var o=31-be(l),s=1<<o;n[o]=-1,l&=~s}a!==0&&$r(e,a,t)}function ei(){return(pe&6)===0?(Ll(0),!1):!0}function cr(){if(re!==null){if(we===0)var e=re.return;else e=re,ta=nn=null,As(e),Rn=null,Il=0,e=re;for(;e!==null;)wd(e.alternate,e),e=e.return;re=null}}function Jn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ay(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,cr(),Ie=e,re=a=Pt(e.current,null),ce=t,we=0,At=null,Ba=!1,Fn=rl(e,t),lr=!1,Zn=St=or=fn=Ma=De=0,wt=Rl=null,ir=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-be(n),o=1<<l;t|=e[l],n&=~o}return da=t,xo(),a}function Ld(e,t){oe=null,I.H=Cl,t===Dn||t===Eo?(t=oc(),we=3):t===ms?(t=oc(),we=4):we=t===qs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,re===null&&(De=1,Lo(e,zt(t,e.current)))}function Gd(){var e=Nt.current;return e===null?!0:(ce&4194048)===ce?Ot===null:(ce&62914560)===ce||(ce&536870912)!==0?e===Ot:!1}function Wd(){var e=I.H;return I.H=Cl,e===null?Cl:e}function Xd(){var e=I.A;return I.A=zm,e}function ti(){De=4,Ba||(ce&4194048)!==ce&&Nt.current!==null||(Fn=!0),(Ma&134217727)===0&&(fn&134217727)===0||Ie===null||Ua(Ie,ce,St,!1)}function dr(e,t,a){var n=pe;pe|=2;var l=Wd(),o=Xd();(Ie!==e||ce!==t)&&(Po=null,Jn(e,t)),t=!1;var s=De;e:do try{if(we!==0&&re!==null){var u=re,c=At;switch(we){case 8:cr(),s=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var g=we;if(we=0,At=null,$n(e,u,c,g),a&&Fn){s=0;break e}break;default:g=we,we=0,At=null,$n(e,u,c,g)}}_m(),s=De;break}catch(A){Ld(e,A)}while(!0);return t&&e.shellSuspendCounter++,ta=nn=null,pe=n,I.H=l,I.A=o,re===null&&(Ie=null,ce=0,xo()),s}function _m(){for(;re!==null;)Qd(re)}function Om(e,t){var a=pe;pe|=2;var n=Wd(),l=Xd();Ie!==e||ce!==t?(Po=null,$o=rt()+500,Jn(e,t)):Fn=rl(e,t);e:do try{if(we!==0&&re!==null){t=re;var o=At;t:switch(we){case 1:we=0,At=null,$n(e,t,o,1);break;case 2:case 9:if(nc(o)){we=0,At=null,Fd(t);break}t=function(){we!==2&&we!==9||Ie!==e||(we=7),Ft(e)},o.then(t,t);break e;case 3:we=7;break e;case 4:we=5;break e;case 7:nc(o)?(we=0,At=null,Fd(t)):(we=0,At=null,$n(e,t,o,7));break;case 5:var s=null;switch(re.tag){case 26:s=re.memoizedState;case 5:case 27:var u=re;if(s?Ch(s):u.stateNode.complete){we=0,At=null;var c=u.sibling;if(c!==null)re=c;else{var g=u.return;g!==null?(re=g,ai(g)):re=null}break t}}we=0,At=null,$n(e,t,o,5);break;case 6:we=0,At=null,$n(e,t,o,6);break;case 8:cr(),De=6;break e;default:throw Error(d(462))}}Hm();break}catch(A){Ld(e,A)}while(!0);return ta=nn=null,I.H=n,I.A=l,pe=a,re!==null?0:(Ie=null,ce=0,xo(),De)}function Hm(){for(;re!==null&&!Ni();)Qd(re)}function Qd(e){var t=pd(e.alternate,e,da);e.memoizedProps=e.pendingProps,t===null?ai(e):re=t}function Fd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=dd(a,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=dd(a,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:As(t);default:wd(a,t),t=re=Xu(t,da),t=pd(a,t,da)}e.memoizedProps=e.pendingProps,t===null?ai(e):re=t}function $n(e,t,a,n){ta=nn=null,As(t),Rn=null,Il=0;var l=t.return;try{if(Sm(e,l,t,a,ce)){De=1,Lo(e,zt(a,e.current)),re=null;return}}catch(o){if(l!==null)throw re=l,o;De=1,Lo(e,zt(a,e.current)),re=null;return}t.flags&32768?(he||n===1?e=!0:Fn||(ce&536870912)!==0?e=!1:(Ba=e=!0,(n===2||n===9||n===3||n===6)&&(n=Nt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Zd(t,e)):ai(t)}function ai(e){var t=e;do{if((t.flags&32768)!==0){Zd(t,Ba);return}e=t.return;var a=Ym(t.alternate,t,da);if(a!==null){re=a;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);De===0&&(De=5)}function Zd(e,t){do{var a=Bm(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);De=6,re=null}function Kd(e,t,a,n,l,o,s,u,c){e.cancelPendingCommit=null;do ni();while(Pe!==0);if((pe&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(o=t.lanes|t.childLanes,o|=Pi,bf(e,a,o,s,u,c),e===Ie&&(re=Ie=null,ce=0),Kn=t,za=e,ha=a,sr=o,rr=l,Hd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Lm(wn,function(){return th(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=I.T,I.T=null,l=H.p,H.p=2,s=pe,pe|=4;try{Mm(e,t,a)}finally{pe=s,H.p=l,I.T=n}}Pe=1,Jd(),$d(),Pd()}}function Jd(){if(Pe===1){Pe=0;var e=za,t=Kn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var n=H.p;H.p=2;var l=pe;pe|=4;try{Bd(t,e);var o=jr,s=_u(e.containerInfo),u=o.focusedElem,c=o.selectionRange;if(s!==u&&u&&u.ownerDocument&&Vu(u.ownerDocument.documentElement,u)){if(c!==null&&Fi(u)){var g=c.start,A=c.end;if(A===void 0&&(A=g),"selectionStart"in u)u.selectionStart=g,u.selectionEnd=Math.min(A,u.value.length);else{var Y=u.ownerDocument||document,b=Y&&Y.defaultView||window;if(b.getSelection){var k=b.getSelection(),X=u.textContent.length,ee=Math.min(c.start,X),je=c.end===void 0?ee:Math.min(c.end,X);!k.extend&&ee>je&&(s=je,je=ee,ee=s);var m=Uu(u,ee),f=Uu(u,je);if(m&&f&&(k.rangeCount!==1||k.anchorNode!==m.node||k.anchorOffset!==m.offset||k.focusNode!==f.node||k.focusOffset!==f.offset)){var y=Y.createRange();y.setStart(m.node,m.offset),k.removeAllRanges(),ee>je?(k.addRange(y),k.extend(f.node,f.offset)):(y.setEnd(f.node,f.offset),k.addRange(y))}}}}for(Y=[],k=u;k=k.parentNode;)k.nodeType===1&&Y.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<Y.length;u++){var E=Y[u];E.element.scrollLeft=E.left,E.element.scrollTop=E.top}}yi=!!kr,jr=kr=null}finally{pe=l,H.p=n,I.T=a}}e.current=t,Pe=2}}function $d(){if(Pe===2){Pe=0;var e=za,t=Kn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var n=H.p;H.p=2;var l=pe;pe|=4;try{Ad(e,t.alternate,t)}finally{pe=l,H.p=n,I.T=a}}Pe=3}}function Pd(){if(Pe===4||Pe===3){Pe=0,Ii();var e=za,t=Kn,a=ha,n=Hd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,Kn=za=null,eh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Ca=null),Ei(a),t=t.stateNode,Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(Ne,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=I.T,l=H.p,H.p=2,I.T=null;try{for(var o=e.onRecoverableError,s=0;s<n.length;s++){var u=n[s];o(u.value,{componentStack:u.stack})}}finally{I.T=t,H.p=l}}(ha&3)!==0&&ni(),Ft(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===ur?ql++:(ql=0,ur=e):ql=0,Ll(0)}}function eh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,jl(t)))}function ni(){return Jd(),$d(),Pd(),th()}function th(){if(Pe!==5)return!1;var e=za,t=sr;sr=0;var a=Ei(ha),n=I.T,l=H.p;try{H.p=32>a?32:a,I.T=null,a=rr,rr=null;var o=za,s=ha;if(Pe=0,Kn=za=null,ha=0,(pe&6)!==0)throw Error(d(331));var u=pe;if(pe|=4,Vd(o.current),Cd(o,o.current,s,a),pe=u,Ll(0,!1),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(Ne,o)}catch{}return!0}finally{H.p=l,I.T=n,eh(e,t)}}function ah(e,t,a){t=zt(a,t),t=Rs(e.stateNode,t,2),e=Sa(e,t,2),e!==null&&(ul(e,2),Ft(e))}function ve(e,t,a){if(e.tag===3)ah(e,e,a);else for(;t!==null;){if(t.tag===3){ah(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ca===null||!Ca.has(n))){e=zt(a,e),a=nd(2),n=Sa(t,a,2),n!==null&&(ld(a,n,t,e),ul(n,2),Ft(n));break}}t=t.return}}function hr(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Um;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(lr=!0,l.add(a),e=Dm.bind(null,e,t,a),t.then(e,e))}function Dm(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ie===e&&(ce&a)===a&&(De===4||De===3&&(ce&62914560)===ce&&300>rt()-Jo?(pe&2)===0&&Jn(e,0):or|=a,Zn===ce&&(Zn=0)),Ft(e)}function nh(e,t){t===0&&(t=Jr()),e=en(e,t),e!==null&&(ul(e,t),Ft(e))}function Rm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),nh(e,a)}function qm(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(t),nh(e,a)}function Lm(e,t){return Qa(e,t)}var li=null,Pn=null,fr=!1,oi=!1,mr=!1,Va=0;function Ft(e){e!==Pn&&e.next===null&&(Pn===null?li=Pn=e:Pn=Pn.next=e),oi=!0,fr||(fr=!0,Wm())}function Ll(e,t){if(!mr&&oi){mr=!0;do for(var a=!1,n=li;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var o=0;else{var s=n.suspendedLanes,u=n.pingedLanes;o=(1<<31-be(42|e)+1)-1,o&=l&~(s&~u),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,sh(n,o))}else o=ce,o=ro(n,n===Ie?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||rl(n,o)||(a=!0,sh(n,o));n=n.next}while(a);mr=!1}}function Gm(){lh()}function lh(){oi=fr=!1;var e=0;Va!==0&&ty()&&(e=Va);for(var t=rt(),a=null,n=li;n!==null;){var l=n.next,o=oh(n,t);o===0?(n.next=null,a===null?li=l:a.next=l,l===null&&(Pn=a)):(a=n,(e!==0||(o&3)!==0)&&(oi=!0)),n=l}Pe!==0&&Pe!==5||Ll(e),Va!==0&&(Va=0)}function oh(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-be(o),u=1<<s,c=l[s];c===-1?((u&a)===0||(u&n)!==0)&&(l[s]=pf(u,t)):c<=t&&(e.expiredLanes|=u),o&=~u}if(t=Ie,a=ce,a=ro(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(we===2||we===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&ol(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||rl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&ol(n),Ei(a)){case 2:case 8:a=Fa;break;case 32:a=wn;break;case 268435456:a=B;break;default:a=wn}return n=ih.bind(null,e),a=Qa(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&ol(n),e.callbackPriority=2,e.callbackNode=null,2}function ih(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ni()&&e.callbackNode!==a)return null;var n=ce;return n=ro(e,e===Ie?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Rd(e,n,t),oh(e,rt()),e.callbackNode!=null&&e.callbackNode===a?ih.bind(null,e):null)}function sh(e,t){if(ni())return null;Rd(e,t,!0)}function Wm(){ny(function(){(pe&6)!==0?Qa(il,Gm):lh()})}function yr(){if(Va===0){var e=On;e===0&&(e=ba,ba<<=1,(ba&261888)===0&&(ba=256)),Va=e}return Va}function rh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fo(""+e)}function uh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Xm(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var o=rh((l[mt]||null).action),s=n.submitter;s&&(t=(t=s[mt]||null)?rh(t.formAction):s.getAttribute("formAction"),t!==null&&(o=t,s=null));var u=new po("action","action",null,n,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Va!==0){var c=s?uh(l,s):new FormData(l);Us(a,{pending:!0,data:c,method:l.method,action:o},null,c)}}else typeof o=="function"&&(u.preventDefault(),c=s?uh(l,s):new FormData(l),Us(a,{pending:!0,data:c,method:l.method,action:o},o,c))},currentTarget:l}]})}}for(var gr=0;gr<$i.length;gr++){var pr=$i[gr],Qm=pr.toLowerCase(),Fm=pr[0].toUpperCase()+pr.slice(1);qt(Qm,"on"+Fm)}qt(Du,"onAnimationEnd"),qt(Ru,"onAnimationIteration"),qt(qu,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(cm,"onTransitionRun"),qt(dm,"onTransitionStart"),qt(hm,"onTransitionCancel"),qt(Lu,"onTransitionEnd"),Nn("onMouseEnter",["mouseout","mouseover"]),Nn("onMouseLeave",["mouseout","mouseover"]),Nn("onPointerEnter",["pointerout","pointerover"]),Nn("onPointerLeave",["pointerout","pointerover"]),Ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl));function ch(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var u=n[s],c=u.instance,g=u.currentTarget;if(u=u.listener,c!==o&&l.isPropagationStopped())break e;o=u,l.currentTarget=g;try{o(l)}catch(A){vo(A)}l.currentTarget=null,o=c}else for(s=0;s<n.length;s++){if(u=n[s],c=u.instance,g=u.currentTarget,u=u.listener,c!==o&&l.isPropagationStopped())break e;o=u,l.currentTarget=g;try{o(l)}catch(A){vo(A)}l.currentTarget=null,o=c}}}}function ue(e,t){var a=t[Yi];a===void 0&&(a=t[Yi]=new Set);var n=e+"__bubble";a.has(n)||(dh(t,e,2,!1),a.add(n))}function br(e,t,a){var n=0;t&&(n|=4),dh(a,e,n,t)}var ii="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[ii]){e[ii]=!0,lu.forEach(function(a){a!=="selectionchange"&&(Zm.has(a)||br(a,!1,e),br(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ii]||(t[ii]=!0,br("selectionchange",!1,t))}}function dh(e,t,a,n){switch(Dh(t)){case 2:var l=jy;break;case 8:l=Ny;break;default:l=zr}a=l.bind(null,t,a,e),l=void 0,!Hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function vr(e,t,a,n,l){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var u=n.stateNode.containerInfo;if(u===l)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;u!==null;){if(s=xn(u),s===null)return;if(c=s.tag,c===5||c===6||c===26||c===27){n=o=s;continue e}u=u.parentNode}}n=n.return}gu(function(){var g=o,A=_i(a),Y=[];e:{var b=Gu.get(e);if(b!==void 0){var k=po,X=e;switch(e){case"keypress":if(yo(a)===0)break e;case"keydown":case"keyup":k=qf;break;case"focusin":X="focus",k=Li;break;case"focusout":X="blur",k=Li;break;case"beforeblur":case"afterblur":k=Li;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Wf;break;case Du:case Ru:case qu:k=Cf;break;case Lu:k=Qf;break;case"scroll":case"scrollend":k=Tf;break;case"wheel":k=Zf;break;case"copy":case"cut":case"paste":k=Uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=xu;break;case"toggle":case"beforetoggle":k=Jf}var ee=(t&4)!==0,je=!ee&&(e==="scroll"||e==="scrollend"),m=ee?b!==null?b+"Capture":null:b;ee=[];for(var f=g,y;f!==null;){var E=f;if(y=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||y===null||m===null||(E=hl(f,m),E!=null&&ee.push(Wl(f,E,y))),je)break;f=f.return}0<ee.length&&(b=new k(b,X,null,a,A),Y.push({event:b,listeners:ee}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",b&&a!==Vi&&(X=a.relatedTarget||a.fromElement)&&(xn(X)||X[vn]))break e;if((k||b)&&(b=A.window===A?A:(b=A.ownerDocument)?b.defaultView||b.parentWindow:window,k?(X=a.relatedTarget||a.toElement,k=g,X=X?xn(X):null,X!==null&&(je=z(X),ee=X.tag,X!==je||ee!==5&&ee!==27&&ee!==6)&&(X=null)):(k=null,X=g),k!==X)){if(ee=wu,E="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(ee=xu,E="onPointerLeave",m="onPointerEnter",f="pointer"),je=k==null?b:dl(k),y=X==null?b:dl(X),b=new ee(E,f+"leave",k,a,A),b.target=je,b.relatedTarget=y,E=null,xn(A)===g&&(ee=new ee(m,f+"enter",X,a,A),ee.target=y,ee.relatedTarget=je,E=ee),je=E,k&&X)t:{for(ee=Km,m=k,f=X,y=0,E=m;E;E=ee(E))y++;E=0;for(var $=f;$;$=ee($))E++;for(;0<y-E;)m=ee(m),y--;for(;0<E-y;)f=ee(f),E--;for(;y--;){if(m===f||f!==null&&m===f.alternate){ee=m;break t}m=ee(m),f=ee(f)}ee=null}else ee=null;k!==null&&hh(Y,b,k,ee,!1),X!==null&&je!==null&&hh(Y,je,X,ee,!0)}}e:{if(b=g?dl(g):window,k=b.nodeName&&b.nodeName.toLowerCase(),k==="select"||k==="input"&&b.type==="file")var me=Eu;else if(Su(b))if(Yu)me=sm;else{me=om;var Q=lm}else k=b.nodeName,!k||k.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?g&&Ui(g.elementType)&&(me=Eu):me=im;if(me&&(me=me(e,g))){Tu(Y,me,a,A);break e}Q&&Q(e,b,g),e==="focusout"&&g&&b.type==="number"&&g.memoizedProps.value!=null&&zi(b,"number",b.value)}switch(Q=g?dl(g):window,e){case"focusin":(Su(Q)||Q.contentEditable==="true")&&(Yn=Q,Zi=g,vl=null);break;case"focusout":vl=Zi=Yn=null;break;case"mousedown":Ki=!0;break;case"contextmenu":case"mouseup":case"dragend":Ki=!1,Ou(Y,a,A);break;case"selectionchange":if(um)break;case"keydown":case"keyup":Ou(Y,a,A)}var ie;if(Wi)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else En?Iu(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(ku&&a.locale!=="ko"&&(En||de!=="onCompositionStart"?de==="onCompositionEnd"&&En&&(ie=pu()):(va=A,Di="value"in va?va.value:va.textContent,En=!0)),Q=si(g,de),0<Q.length&&(de=new vu(de,e,null,a,A),Y.push({event:de,listeners:Q}),ie?de.data=ie:(ie=Au(a),ie!==null&&(de.data=ie)))),(ie=Pf?em(e,a):tm(e,a))&&(de=si(g,"onBeforeInput"),0<de.length&&(Q=new vu("onBeforeInput","beforeinput",null,a,A),Y.push({event:Q,listeners:de}),Q.data=ie)),Xm(Y,e,g,a,A)}ch(Y,t)})}function Wl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function si(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=hl(e,a),l!=null&&n.unshift(Wl(e,l,o)),l=hl(e,t),l!=null&&n.push(Wl(e,l,o))),e.tag===3)return n;e=e.return}return[]}function Km(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hh(e,t,a,n,l){for(var o=t._reactName,s=[];a!==null&&a!==n;){var u=a,c=u.alternate,g=u.stateNode;if(u=u.tag,c!==null&&c===n)break;u!==5&&u!==26&&u!==27||g===null||(c=g,l?(g=hl(a,o),g!=null&&s.unshift(Wl(a,g,c))):l||(g=hl(a,o),g!=null&&s.push(Wl(a,g,c)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Jm=/\r\n?/g,$m=/\u0000|\uFFFD/g;function fh(e){return(typeof e=="string"?e:""+e).replace(Jm,`
`).replace($m,"")}function mh(e,t){return t=fh(t),fh(e)===t}function ke(e,t,a,n,l,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||An(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&An(e,""+n);break;case"className":co(e,"class",n);break;case"tabIndex":co(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":co(e,a,n);break;case"style":mu(e,n,o);break;case"data":if(t!=="object"){co(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=fo(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&ke(e,t,"name",l.name,l,null),ke(e,t,"formEncType",l.formEncType,l,null),ke(e,t,"formMethod",l.formMethod,l,null),ke(e,t,"formTarget",l.formTarget,l,null)):(ke(e,t,"encType",l.encType,l,null),ke(e,t,"method",l.method,l,null),ke(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=fo(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Jt);break;case"onScroll":n!=null&&ue("scroll",e);break;case"onScrollEnd":n!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=fo(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ue("beforetoggle",e),ue("toggle",e),uo(e,"popover",n);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":uo(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Af.get(a)||a,uo(e,a,n))}}function xr(e,t,a,n,l,o){switch(a){case"style":mu(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof n=="string"?An(e,n):(typeof n=="number"||typeof n=="bigint")&&An(e,""+n);break;case"onScroll":n!=null&&ue("scroll",e);break;case"onScrollEnd":n!=null&&ue("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Jt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ou.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),o=e[mt]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):uo(e,a,n)}}}function st(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var n=!1,l=!1,o;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];if(s!=null)switch(o){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ke(e,t,o,s,a,null)}}l&&ke(e,t,"srcSet",a.srcSet,a,null),n&&ke(e,t,"src",a.src,a,null);return;case"input":ue("invalid",e);var u=o=s=l=null,c=null,g=null;for(n in a)if(a.hasOwnProperty(n)){var A=a[n];if(A!=null)switch(n){case"name":l=A;break;case"type":s=A;break;case"checked":c=A;break;case"defaultChecked":g=A;break;case"value":o=A;break;case"defaultValue":u=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(d(137,t));break;default:ke(e,t,n,A,a,null)}}cu(e,o,u,c,g,s,l,!1);return;case"select":ue("invalid",e),n=s=o=null;for(l in a)if(a.hasOwnProperty(l)&&(u=a[l],u!=null))switch(l){case"value":o=u;break;case"defaultValue":s=u;break;case"multiple":n=u;default:ke(e,t,l,u,a,null)}t=o,a=s,e.multiple=!!n,t!=null?In(e,!!n,t,!1):a!=null&&In(e,!!n,a,!0);return;case"textarea":ue("invalid",e),o=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(u=a[s],u!=null))switch(s){case"value":n=u;break;case"defaultValue":l=u;break;case"children":o=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:ke(e,t,s,u,a,null)}hu(e,n,l,o);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(n=a[c],n!=null))switch(c){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ke(e,t,c,n,a,null)}return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(n=0;n<Gl.length;n++)ue(Gl[n],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(n=a[g],n!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ke(e,t,g,n,a,null)}return;default:if(Ui(t)){for(A in a)a.hasOwnProperty(A)&&(n=a[A],n!==void 0&&xr(e,t,A,n,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(n=a[u],n!=null&&ke(e,t,u,n,a,null))}function Pm(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,s=null,u=null,c=null,g=null,A=null;for(k in a){var Y=a[k];if(a.hasOwnProperty(k)&&Y!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":c=Y;default:n.hasOwnProperty(k)||ke(e,t,k,null,n,Y)}}for(var b in n){var k=n[b];if(Y=a[b],n.hasOwnProperty(b)&&(k!=null||Y!=null))switch(b){case"type":o=k;break;case"name":l=k;break;case"checked":g=k;break;case"defaultChecked":A=k;break;case"value":s=k;break;case"defaultValue":u=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(d(137,t));break;default:k!==Y&&ke(e,t,b,k,n,Y)}}Ci(e,s,u,c,g,A,o,l);return;case"select":k=s=u=b=null;for(o in a)if(c=a[o],a.hasOwnProperty(o)&&c!=null)switch(o){case"value":break;case"multiple":k=c;default:n.hasOwnProperty(o)||ke(e,t,o,null,n,c)}for(l in n)if(o=n[l],c=a[l],n.hasOwnProperty(l)&&(o!=null||c!=null))switch(l){case"value":b=o;break;case"defaultValue":u=o;break;case"multiple":s=o;default:o!==c&&ke(e,t,l,o,n,c)}t=u,a=s,n=k,b!=null?In(e,!!a,b,!1):!!n!=!!a&&(t!=null?In(e,!!a,t,!0):In(e,!!a,a?[]:"",!1));return;case"textarea":k=b=null;for(u in a)if(l=a[u],a.hasOwnProperty(u)&&l!=null&&!n.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ke(e,t,u,null,n,l)}for(s in n)if(l=n[s],o=a[s],n.hasOwnProperty(s)&&(l!=null||o!=null))switch(s){case"value":b=l;break;case"defaultValue":k=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(d(91));break;default:l!==o&&ke(e,t,s,l,n,o)}du(e,b,k);return;case"option":for(var X in a)if(b=a[X],a.hasOwnProperty(X)&&b!=null&&!n.hasOwnProperty(X))switch(X){case"selected":e.selected=!1;break;default:ke(e,t,X,null,n,b)}for(c in n)if(b=n[c],k=a[c],n.hasOwnProperty(c)&&b!==k&&(b!=null||k!=null))switch(c){case"selected":e.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:ke(e,t,c,b,n,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)b=a[ee],a.hasOwnProperty(ee)&&b!=null&&!n.hasOwnProperty(ee)&&ke(e,t,ee,null,n,b);for(g in n)if(b=n[g],k=a[g],n.hasOwnProperty(g)&&b!==k&&(b!=null||k!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,t));break;default:ke(e,t,g,b,n,k)}return;default:if(Ui(t)){for(var je in a)b=a[je],a.hasOwnProperty(je)&&b!==void 0&&!n.hasOwnProperty(je)&&xr(e,t,je,void 0,n,b);for(A in n)b=n[A],k=a[A],!n.hasOwnProperty(A)||b===k||b===void 0&&k===void 0||xr(e,t,A,b,n,k);return}}for(var m in a)b=a[m],a.hasOwnProperty(m)&&b!=null&&!n.hasOwnProperty(m)&&ke(e,t,m,null,n,b);for(Y in n)b=n[Y],k=a[Y],!n.hasOwnProperty(Y)||b===k||b==null&&k==null||ke(e,t,Y,b,n,k)}function yh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ey(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],o=l.transferSize,s=l.initiatorType,u=l.duration;if(o&&u&&yh(s)){for(s=0,u=l.responseEnd,n+=1;n<a.length;n++){var c=a[n],g=c.startTime;if(g>u)break;var A=c.transferSize,Y=c.initiatorType;A&&yh(Y)&&(c=c.responseEnd,s+=A*(c<u?1:(u-g)/(c-g)))}if(--n,t+=8*(o+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kr=null,jr=null;function ri(e){return e.nodeType===9?e:e.ownerDocument}function gh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ph(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Nr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ir=null;function ty(){var e=window.event;return e&&e.type==="popstate"?e===Ir?!1:(Ir=e,!0):(Ir=null,!1)}var bh=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(e){return wh.resolve(null).then(e).catch(ly)}:bh;function ly(e){setTimeout(function(){throw e})}function _a(e){return e==="head"}function vh(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),nl(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Xl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Xl(a);for(var o=a.firstChild;o;){var s=o.nextSibling,u=o.nodeName;o[cl]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=s}}else a==="body"&&Xl(e.ownerDocument.body);a=l}while(a);nl(t)}function xh(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Ar(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ar(a),Bi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function oy(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[cl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Ht(e.nextSibling),e===null)break}return null}function iy(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ht(e.nextSibling),e===null))return null;return e}function kh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ht(e.nextSibling),e===null))return null;return e}function Sr(e){return e.data==="$?"||e.data==="$~"}function Tr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function sy(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Er=null;function jh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ht(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Nh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Ih(e,t,a){switch(t=ri(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Xl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Bi(e)}var Dt=new Map,Ah=new Set;function ui(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=H.d;H.d={f:ry,r:uy,D:cy,C:dy,L:hy,m:fy,X:yy,S:my,M:gy};function ry(){var e=fa.f(),t=ei();return e||t}function uy(e){var t=kn(e);t!==null&&t.tag===5&&t.type==="form"?Lc(t):fa.r(e)}var el=typeof document>"u"?null:document;function Sh(e,t,a){var n=el;if(n&&typeof t=="string"&&t){var l=Mt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Ah.has(l)||(Ah.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),st(t,"link",e),et(t),n.head.appendChild(t)))}}function cy(e){fa.D(e),Sh("dns-prefetch",e,null)}function dy(e,t){fa.C(e,t),Sh("preconnect",e,t)}function hy(e,t,a){fa.L(e,t,a);var n=el;if(n&&e&&t){var l='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Mt(a.imageSizes)+'"]')):l+='[href="'+Mt(e)+'"]';var o=l;switch(t){case"style":o=tl(e);break;case"script":o=al(e)}Dt.has(o)||(e=_({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Dt.set(o,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(Ql(o))||t==="script"&&n.querySelector(Fl(o))||(t=n.createElement("link"),st(t,"link",e),et(t),n.head.appendChild(t)))}}function fy(e,t){fa.m(e,t);var a=el;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Mt(n)+'"][href="'+Mt(e)+'"]',o=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=al(e)}if(!Dt.has(o)&&(e=_({rel:"modulepreload",href:e},t),Dt.set(o,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fl(o)))return}n=a.createElement("link"),st(n,"link",e),et(n),a.head.appendChild(n)}}}function my(e,t,a){fa.S(e,t,a);var n=el;if(n&&e){var l=jn(n).hoistableStyles,o=tl(e);t=t||"default";var s=l.get(o);if(!s){var u={loading:0,preload:null};if(s=n.querySelector(Ql(o)))u.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Dt.get(o))&&Yr(e,a);var c=s=n.createElement("link");et(c),st(c,"link",e),c._p=new Promise(function(g,A){c.onload=g,c.onerror=A}),c.addEventListener("load",function(){u.loading|=1}),c.addEventListener("error",function(){u.loading|=2}),u.loading|=4,ci(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:u},l.set(o,s)}}}function yy(e,t){fa.X(e,t);var a=el;if(a&&e){var n=jn(a).hoistableScripts,l=al(e),o=n.get(l);o||(o=a.querySelector(Fl(l)),o||(e=_({src:e,async:!0},t),(t=Dt.get(l))&&Br(e,t),o=a.createElement("script"),et(o),st(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function gy(e,t){fa.M(e,t);var a=el;if(a&&e){var n=jn(a).hoistableScripts,l=al(e),o=n.get(l);o||(o=a.querySelector(Fl(l)),o||(e=_({src:e,async:!0,type:"module"},t),(t=Dt.get(l))&&Br(e,t),o=a.createElement("script"),et(o),st(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function Th(e,t,a,n){var l=(l=O.current)?ui(l):null;if(!l)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=tl(a.href),a=jn(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=tl(a.href);var o=jn(l).hoistableStyles,s=o.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=l.querySelector(Ql(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Dt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Dt.set(e,a),o||py(l,e,a,s.state))),t&&n===null)throw Error(d(528,""));return s}if(t&&n!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=al(a),a=jn(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function tl(e){return'href="'+Mt(e)+'"'}function Ql(e){return'link[rel="stylesheet"]['+e+"]"}function Eh(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function py(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),st(t,"link",a),et(t),e.head.appendChild(t))}function al(e){return'[src="'+Mt(e)+'"]'}function Fl(e){return"script[async]"+e}function Yh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Mt(a.href)+'"]');if(n)return t.instance=n,et(n),n;var l=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),et(n),st(n,"style",l),ci(n,a.precedence,e),t.instance=n;case"stylesheet":l=tl(a.href);var o=e.querySelector(Ql(l));if(o)return t.state.loading|=4,t.instance=o,et(o),o;n=Eh(a),(l=Dt.get(l))&&Yr(n,l),o=(e.ownerDocument||e).createElement("link"),et(o);var s=o;return s._p=new Promise(function(u,c){s.onload=u,s.onerror=c}),st(o,"link",n),t.state.loading|=4,ci(o,a.precedence,e),t.instance=o;case"script":return o=al(a.src),(l=e.querySelector(Fl(o)))?(t.instance=l,et(l),l):(n=a,(l=Dt.get(o))&&(n=_({},a),Br(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),et(l),st(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,ci(n,a.precedence,e));return t.instance}function ci(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,o=l,s=0;s<n.length;s++){var u=n[s];if(u.dataset.precedence===t)o=u;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Yr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Br(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var di=null;function Bh(e,t,a){if(di===null){var n=new Map,l=di=new Map;l.set(a,n)}else l=di,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var o=a[l];if(!(o[cl]||o[nt]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(t)||"";s=e+s;var u=n.get(s);u?u.push(o):n.set(s,[o])}}return n}function Mh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function by(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ch(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wy(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=tl(n.href),o=t.querySelector(Ql(l));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=hi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,et(o);return}o=t.ownerDocument||t,n=Eh(n),(l=Dt.get(l))&&Yr(n,l),o=o.createElement("link"),et(o);var s=o;s._p=new Promise(function(u,c){s.onload=u,s.onerror=c}),st(o,"link",n),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Mr=0;function vy(e,t){return e.stylesheets&&e.count===0&&mi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&mi(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Mr===0&&(Mr=62500*ey());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mi(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Mr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function hi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fi=null;function mi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fi=new Map,t.forEach(xy,e),fi=null,hi.call(e))}function xy(e,t){if(!(t.state.loading&4)){var a=fi.get(e);if(a)var n=a.get(null);else{a=new Map,fi.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var s=l[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),o=a.get(s)||n,o===n&&a.set(null,l),a.set(s,l),this.count++,n=hi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Zl={$$typeof:se,Provider:null,Consumer:null,_currentValue:S,_currentValue2:S,_threadCount:0};function ky(e,t,a,n,l,o,s,u,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Si(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.hiddenUpdates=Si(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function zh(e,t,a,n,l,o,s,u,c,g,A,Y){return e=new ky(e,t,a,s,c,g,A,Y,u),t=1,o===!0&&(t|=24),o=jt(3,null,null,t),e.current=o,o.stateNode=e,t=ds(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},ys(o),e}function Uh(e){return e?(e=Cn,e):Cn}function Vh(e,t,a,n,l,o){l=Uh(l),n.context===null?n.context=l:n.pendingContext=l,n=Aa(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=Sa(e,n,t),a!==null&&(vt(a,e,t),Sl(a,e,t))}function _h(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Cr(e,t){_h(e,t),(e=e.alternate)&&_h(e,t)}function Oh(e){if(e.tag===13||e.tag===31){var t=en(e,67108864);t!==null&&vt(t,e,67108864),Cr(e,67108864)}}function Hh(e){if(e.tag===13||e.tag===31){var t=Tt();t=Ti(t);var a=en(e,t);a!==null&&vt(a,e,t),Cr(e,t)}}var yi=!0;function jy(e,t,a,n){var l=I.T;I.T=null;var o=H.p;try{H.p=2,zr(e,t,a,n)}finally{H.p=o,I.T=l}}function Ny(e,t,a,n){var l=I.T;I.T=null;var o=H.p;try{H.p=8,zr(e,t,a,n)}finally{H.p=o,I.T=l}}function zr(e,t,a,n){if(yi){var l=Ur(n);if(l===null)vr(e,t,n,gi,a),Rh(e,n);else if(Ay(l,e,t,a,n))n.stopPropagation();else if(Rh(e,n),t&4&&-1<Iy.indexOf(e)){for(;l!==null;){var o=kn(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=Za(o.pendingLanes);if(s!==0){var u=o;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var c=1<<31-be(s);u.entanglements[1]|=c,s&=~c}Ft(o),(pe&6)===0&&($o=rt()+500,Ll(0))}}break;case 31:case 13:u=en(o,2),u!==null&&vt(u,o,2),ei(),Cr(o,2)}if(o=Ur(n),o===null&&vr(e,t,n,gi,a),o===l)break;l=o}l!==null&&n.stopPropagation()}else vr(e,t,n,null,a)}}function Ur(e){return e=_i(e),Vr(e)}var gi=null;function Vr(e){if(gi=null,e=xn(e),e!==null){var t=z(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=w(t),e!==null)return e;e=null}else if(a===31){if(e=U(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return gi=e,null}function Dh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lo()){case il:return 2;case Fa:return 8;case wn:case Ai:return 32;case B:return 268435456;default:return 32}default:return 32}}var _r=!1,Oa=null,Ha=null,Da=null,Kl=new Map,Jl=new Map,Ra=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rh(e,t){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":Kl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jl.delete(t.pointerId)}}function $l(e,t,a,n,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[l]},t!==null&&(t=kn(t),t!==null&&Oh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ay(e,t,a,n,l){switch(t){case"focusin":return Oa=$l(Oa,e,t,a,n,l),!0;case"dragenter":return Ha=$l(Ha,e,t,a,n,l),!0;case"mouseover":return Da=$l(Da,e,t,a,n,l),!0;case"pointerover":var o=l.pointerId;return Kl.set(o,$l(Kl.get(o)||null,e,t,a,n,l)),!0;case"gotpointercapture":return o=l.pointerId,Jl.set(o,$l(Jl.get(o)||null,e,t,a,n,l)),!0}return!1}function qh(e){var t=xn(e.target);if(t!==null){var a=z(t);if(a!==null){if(t=a.tag,t===13){if(t=w(a),t!==null){e.blockedOn=t,au(e.priority,function(){Hh(a)});return}}else if(t===31){if(t=U(a),t!==null){e.blockedOn=t,au(e.priority,function(){Hh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ur(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Vi=n,a.target.dispatchEvent(n),Vi=null}else return t=kn(a),t!==null&&Oh(t),e.blockedOn=a,!1;t.shift()}return!0}function Lh(e,t,a){pi(e)&&a.delete(t)}function Sy(){_r=!1,Oa!==null&&pi(Oa)&&(Oa=null),Ha!==null&&pi(Ha)&&(Ha=null),Da!==null&&pi(Da)&&(Da=null),Kl.forEach(Lh),Jl.forEach(Lh)}function bi(e,t){e.blockedOn===t&&(e.blockedOn=null,_r||(_r=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Sy)))}var wi=null;function Gh(e){wi!==e&&(wi=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){wi===e&&(wi=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Vr(n||a)===null)continue;break}var o=kn(a);o!==null&&(e.splice(t,3),t-=3,Us(o,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function nl(e){function t(c){return bi(c,e)}Oa!==null&&bi(Oa,e),Ha!==null&&bi(Ha,e),Da!==null&&bi(Da,e),Kl.forEach(t),Jl.forEach(t);for(var a=0;a<Ra.length;a++){var n=Ra[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)qh(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],o=a[n+1],s=l[mt]||null;if(typeof o=="function")s||Gh(a);else if(s){var u=null;if(o&&o.hasAttribute("formAction")){if(l=o,s=o[mt]||null)u=s.formAction;else if(Vr(l)!==null)continue}else u=s.action;typeof u=="function"?a[n+1]=u:(a.splice(n,3),n-=3),Gh(a)}}}function Wh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Or(e){this._internalRoot=e}vi.prototype.render=Or.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,n=Tt();Vh(a,n,e,t,null,null)},vi.prototype.unmount=Or.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vh(e.current,2,null,e,null,null),ei(),t[vn]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=tu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ra.length&&t!==0&&t<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&qh(e)}};var Xh=x.version;if(Xh!=="19.2.8")throw Error(d(527,Xh,"19.2.8"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=p(t),e=e!==null?L(e):null,e=e===null?null:e.stateNode,e};var Ty={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xi.isDisabled&&xi.supportsFiber)try{Ne=xi.inject(Ty),Oe=xi}catch{}}return eo.createRoot=function(e,t){if(!V(e))throw Error(d(299));var a=!1,n="",l=Pc,o=ed,s=td;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=zh(e,1,!1,null,null,a,n,null,l,o,s,Wh),e[vn]=t.current,wr(e),new Or(t)},eo.hydrateRoot=function(e,t,a){if(!V(e))throw Error(d(299));var n=!1,l="",o=Pc,s=ed,u=td,c=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),t=zh(e,1,!0,t,a??null,n,l,c,o,s,u,Wh),t.context=Uh(null),a=t.current,n=Tt(),n=Ti(n),l=Aa(n),l.callback=null,Sa(a,l,n),a=n,t.current.lanes=a,ul(t,a),Ft(t),e[vn]=t.current,wr(e),new vi(t)},eo.version="19.2.8",eo}var af;function Oy(){if(af)return Rr.exports;af=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(x){console.error(x)}}return r(),Rr.exports=_y(),Rr.exports}var Hy=Oy();const ft={id:"26af3597-73d4-491c-a9b3-aac9a0d55c82",name:"DomInNATEly Top Hits",description:`Thanks for Listening, My TikTok Is @DomInNATEly
same for insta and snap`,cover:"https://cdn2.suno.ai/image_large_9a613a1e-afde-4f8c-ade1-92f25a841205.jpeg",user_display_name:"Nate M. AKA  (@DomInNATEly)",user_handle:"dominnately",tiktok_handle:"@DomInNATEly",url:"https://suno.com/playlist/26af3597-73d4-491c-a9b3-aac9a0d55c82",totalTracks:48,totalDurationSeconds:13383},ht=[{id:"80501057-4d2b-4451-8805-d03190d5b5f0",title:"I Want You Back, But I hate That I Do!",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:1,image:"https://cdn2.suno.ai/ad021751-7ecf-4ce8-b673-c4baf9f4f25b.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/80501057-4d2b-4451-8805-d03190d5b5f0.m4a",videoUrl:"https://cdn1.suno.ai/80501057-4d2b-4451-8805-d03190d5b5f0.mp4",embedUrl:"https://suno.com/embed/80501057-4d2b-4451-8805-d03190d5b5f0",sunoUrl:"https://suno.com/song/80501057-4d2b-4451-8805-d03190d5b5f0",duration:186,durationFormatted:"3:06",tags:["alt-drill","alt-pop","melodic rap"],lyrics:`[Verse 1]
You slammed the door, I hit the floor,
You smiled like that was what it’s for.
All good deeds in your little show,
But the door was locked and you kept the code.

[Pre-Chorus]
You live for the room, for the nod, for the cheer,
Turning my hurt into something they’d hear.
And when I begged, you asked for more—
Like my panic was the price at the door.

[Chorus]
I want you back (but I hate what you are),
Every prayer you made had a hidden scar.
You took my name, then billed me twice,
Called it care when you drew blood nice.
That hoodie’s still on my chair,
I know you left it there on purpose, yeah.
Then why does your laugh still hit like a threat,
Why won’t my hands forget?

[Pre-Chorus]
I try to move, you pull me in,
With that church-fresh face and a grin too thin.
You fed the crowd, you fed on pain,
Made my breakdown look like my shame.

[Chorus]
I want you back (and I hate that I do),
Every road I take loops back to you.
I punch the wall, I count the cracks,
You loved it best when I came back.
I want you back (and it makes me sick),
You wore kindness like a loaded trick.

[Bridge – shouted, chaotic]
Yeah, you played saint with a knife behind,
All those “helping” hands had a pickpocket mind.
You took what you wanted, called it need,
Then laughed when I choked on what you’d bleed.
You liked the power, you liked the sting,
You called it love, but it was a thing.
I was the bill, you were the grin,
You always knew where my weak spots were in.

[Final Chorus]
I want you back (and I won’t say why),
You made a sport out of my alibis.
Call it cruel, call it sad—
You knew exactly how bad you had me.
I want you back—yeah, I want you near,
Even when I know what you do to me here.

[Chorus]
I want you back (but I hate that I do),
Every road I take loops back to you.
I punch the wall, I count the cracks,
You loved it best when I came back.
I want you back (and it makes me sick),
You wore kindness like a loaded trick.
⸻

[Grand Finale – emotional outro]
I want you back — but not in my house.
I want you back — with the mask off now.
I want you back — and I hate that call.
I want you back — after all, after all.
I want you back — you don’t get my fear.
I want you back — but not back here.
I want you back — that’s the hook, the hook.
I want you back — and it wrecks me to look.`},{id:"0028ed1b-8e30-4fb7-bda5-13e933cec42f",title:"Sweet At First",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:2,image:"https://cdn2.suno.ai/076dc8c3-7ea4-4084-9f8e-78febd12e69f.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/0028ed1b-8e30-4fb7-bda5-13e933cec42f.m4a",videoUrl:"https://cdn1.suno.ai/0028ed1b-8e30-4fb7-bda5-13e933cec42f.mp4",embedUrl:"https://suno.com/embed/0028ed1b-8e30-4fb7-bda5-13e933cec42f",sunoUrl:"https://suno.com/song/0028ed1b-8e30-4fb7-bda5-13e933cec42f",duration:387.9,durationFormatted:"6:27",tags:["Rock","Heartbreak","R&B"],lyrics:`[Male Vocals]
You came in sweet
All soft at the seams
Said you saw my wreck
And you knew how to redeem
Hudson corner store
Boxes in a pile
You smiled for the block
Then you cut me with that smile
Picking up trash
Like your time is free, but it costs me so
Free labor, looking so altruistic
That's the face you chose
You said I need people skills and I was broken
Said you'd save me from her
Now I'm in the fire
And you made it burn worse

[Male Vocals – Pre-Chorus]
You talk like a saint
But you move like a scheme
Turn my name to smoke
Then you slide out unseen
You bend every room
Till the truth won't stay
And every "I love you"
Comes out like bait

[Male Vocals]
You were sweet at first
Sweet at first
Now you're first to list
Unproved accusations
Caused by sociopathic exes
Now you're scared of me
But I ain't got no Tommy gun
And no malevolent motives
Sweet at first
Please, can I get her back?

[Female Vocals]
I came in like gravity
Pulled you right out of your orbit
Saw the cracks in your structure
And knew just how to exploit it
Hudson corner store
Boxes in a pile
I wasn’t smiling for the block
I was weaponizing that smile
I talked like a saint
But I moved like a scheme
Turned your name into smoke
To fuel my own dream
I was sweet at first
So sweet at first
Now I look at the wreckage
And I know I’m the worst

[Male Vocals]
You never trust me
Even when I'm right there
Look me in the face
Then you act like I'm not there
You tell everybody
I'm a liar with a grin
Then you push that soft
Then you get so scared
Running paranoid
And my anxiety grows worse
And cars pull over, hoping you won't be bought
You call it "helping"
But it's taking what I got
Empty my pockets
While you do another shot
Covert in the daylight
All warmth, no spine
Pessimistic bias is my pain
And a poison shot by shot

[Male Vocals – Pre-Chorus]
You talk like a saint
But you move like a scheme
Turn my name to smoke
Then you call that a dream
You bend every room
Till the truth won't stay
And every "I love you"
Comes out like bait

[Male Vocals – Chorus]
You were sweet at first
Sweet at first
Now you're worse than her
Worse than her
You were sweet at first
Sweet at first
Now you're worse than her
Well, maybe not...

[Male Vocals – Bridge]
You played the wounded bird in the darkest kind of spot
I came to be the fixer for the wings you said were caught
You wore a saintly mask, the most beautiful and smart
A flawless, sweet communal trap to paralyze my heart
You told me you were broken, said you blindly trusted me
But it was just a setup for your own hypocrisy
I thought I was your savior, pulling you from the debris
But you were building cages that I couldn't even see
I had to pay a toll just to look you in the eye
Funding your survival while you bled my spirit dry
You told me Tommy was a threat, a killer in the night
To keep me isolated in a paranoid spotlight
But you were texting him in secret, pulling strings behind the scenes
Just a calculated hustle in a Machiavellian dream

[Male Vocals]
You were sweet at first
Yeah, so sweet at first
Now I see the egosyntonic pleasure in the worst
You flip the script, you DARVO, you tell them I’m the pain
Using emotional torture for your financial gain
You smear my name to ashes, say I don't know how to love
While you wear that heavy halo you borrowed from above
Sweet at first...
But you were playing for the kill.

[Female Vocals]
I played the vulnerable victim, spinning you my web
A quiet, soft illusion to keep me in your head
I told my ex stay quiet, to never speak a word
So I could keep your wallet open while playing wounded bird
I gave you little "truth-lies," said you were too good for me
So when the whole thing shattered, you’d take accountability
I didn't want your healing, I didn't want a cure
I wanted you dependent, isolated, and unsure
I bent every single room, made you the villain of the play
Smeared your reputation before you had a say
I watched you lose your footing, watched you hollow out inside
And the relief I felt in breaking you was something I couldn't hide
I took your empathy and turned it to a leash
I wasn't your soulmate, I was acting like a leech`},{id:"cb27be40-3419-43f7-8990-c22e49dc719b",title:"Toxic",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:3,image:"https://cdn2.suno.ai/c8b85a05-4184-4278-afc8-6c059438c61b.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/cb27be40-3419-43f7-8990-c22e49dc719b.m4a",videoUrl:"https://cdn1.suno.ai/cb27be40-3419-43f7-8990-c22e49dc719b.mp4",embedUrl:"https://suno.com/embed/cb27be40-3419-43f7-8990-c22e49dc719b",sunoUrl:"https://suno.com/song/cb27be40-3419-43f7-8990-c22e49dc719b",duration:211.4,durationFormatted:"3:31",tags:["Hip Hop","Rap","Hardcore Hip Hop","Midwest Hip Hop"],lyrics:`Verse 1

I Approached You  with shaking hands,
I Said you look good in red.
You whispered, “You're mine, don't forget it,”
And I mistook possession for need.
You'd break my heart just to watch me bleed,
Then kiss the tears from my eyes.
I'd swear I'd leave you every morning,
Then crawl back to you every night.

You were the devil at my doorstep,
I was begging to let you in.
You didn't have to drag me closer—
I was already addicted to the sin.

Pre-Chorus

You made a weapon out of love,
And I learned how to pull the trigger.
Every time you pushed me away,
I only wanted you bigger.

Chorus

We're fucking beautiful when we're broken,
Two lunatics dancing in the rain.
You make me scream,
I make you laugh,
Then we do it all again.
I know you're poison,
I know you're death,
But I still breathe you in.
If loving you is madness,
Then baby, let the madness win.

Tie me to your chaos,
Drag me through your hell.
Tell me I'm the only one
Who knows you this well.
We're not lovers anymore—
We're an addiction wearing skin.
You destroy me just enough
To make me come running back again.

Verse 2

You'd disappear for days at a time,
I'd stare at the phone all night.
I'd rehearse a hundred ways to hate you,
Then lose them when you arrived.
You'd walk through the door like nothing happened,
That crooked smile across your face,
And every ounce of anger in me
Would turn into a desperate embrace.

I'd hide your secrets in my mouth,
I'd defend you to the grave.
If anybody called you dangerous,
I'd tell them they were afraid.

But deep inside I knew the truth—
I wasn't trying to save you.
I was terrified that without you
There'd be nothing left to break me.

Chorus

We're fucking beautiful when we're broken,
Two lunatics dancing in the rain.
You make me scream,
I make you laugh,
Then we do it all again.
I know you're poison,
I know you're death,
But I still breathe you in.
If loving you is madness,
Then baby, let the madness win.

Tie me to your chaos,
Drag me through your hell.
Tell me I'm the only one
Who knows you this well.
We're not lovers anymore—
We're an addiction wearing skin.
You destroy me just enough
To make me come running back again.

Bridge

I started seeing your face
Everywhere I went.
In every stranger's smile,
In every dark apartment.
I heard your voice in empty rooms,
Felt your hands when you weren't there.
I hated you for leaving me—
I hated myself for caring.

So I carved your name into my memories,
Burned your shadow into my brain.
You became the monster under my bed
And the reason I couldn't sleep.

And God help me…

I still wanted you.

Final Chorus

We're fucking beautiful when we're broken,
There's nothing beautiful left to save.
You call it love,
I call it hunger,
And we both know we're insane.
You are the fire,
I am the match,
We were always going to burn.
I keep begging you to hurt me
Just so you'll give me something to return to.

So kiss me like you hate me,
Hold me like I'm yours.
Let's dance inside the wreckage
Till we can't dance anymore.

Because we're not happily ever after—
We're the warning in the story.

Two beautiful disasters…

Too obsessed to leave,
Too damaged to stay,
And too fucking afraid
To find another way.`},{id:"5db33f1c-b785-4176-81e4-5d899c2bbdf7",title:"And I begged you, Don't Betray me 2.0",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:4,image:"https://cdn2.suno.ai/3924fff1-502d-4ae6-a0f3-9e2596eaeb4c.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/5db33f1c-b785-4176-81e4-5d899c2bbdf7.m4a",videoUrl:"https://cdn1.suno.ai/5db33f1c-b785-4176-81e4-5d899c2bbdf7.mp4",embedUrl:"https://suno.com/embed/5db33f1c-b785-4176-81e4-5d899c2bbdf7",sunoUrl:"https://suno.com/song/5db33f1c-b785-4176-81e4-5d899c2bbdf7",duration:294.8,durationFormatted:"4:54",tags:["Hip Hop","Trap"],lyrics:`It was June when you arrived like a bird with a broken wing

I built a fortress in my mind for every fragile thing

We walked across the city while I tried to shield your heart from every past pain

Told you I was helplessly falling, trusting you implicitly through the rain

You never kept a phone—an unreachable ghost in the noise

I spent half my nights wandering the city just to search for your voice

And every time I tried to do something gentle and sweet

You looked at me with hypervigilant eyes, searching for the trap at your feet

Asking me, "What's in it for *you*? Why are you being nice?"

Dissecting my intentions with weaponized vulnerability, calculating the price

**[Verse 2]**

[clean guitar arpeggiated riff, steady bass drive]

I provided your four walls, kept you warm and safe and fed

Taking care of every necessity, keeping shelter overhead

Making sure you weren't sick, giving everything I could supply

And you played the sweetest, smartest, most beautiful girl under the sky

Wearing a communal saintly mask, public virtue shining bright

While systematically draining resources out of sight

The second that the well ran dry and I had nothing left to yield

You dropped the fragile act and stepped into another field

Seamlessly sliding to the next victim with predatory ease

Leaving me hollowed out while you found new hands to squeeze

**[Verse 3]**

[dynamic clean guitar chimes, warm bass pulse]

You stared at the future with a heavy, pessimistic glare

Waiting until I was hopelessly in love and locked right there

Past the event horizon of a covert grandiose design

That’s when you started whispering warnings, drawing the trap line:

*"I'm becoming abusive... you're too good for me... you should walk away"*

Reverse-psychology performance designed to make me stay

So when the structural collapse occurred and the dynamic tore apart

I was primed to take accountability for every scar in your heart

Zero responsibility on your side of the ledger drawn

A malignant structure smiling as the morning broke at dawn

**[Chorus]**

And I begged you, "don't betray me," looking intently into your eyes

While yours were fixed upon the dirt—a sign I failed to recognize

While you calculated exact prices for every single kiss

I paid a literal toll just to catch your eyes in this

Watched the blueprint of our love turn to quiet lies

I have never felt a hollow cut as deep as you

**[Verse 4]**

Then your ex came back from Ethiopia, and the truth came out clear

You never broke up with him, when i approached you, instead of a hug, You guesture a danger signal to get away from you.

Pushed to the sidelines just like with the last girl , i felt like a lick again, like DEja vouis om. while you played Machiavellian chess,  i guess love was never free.

Screaming when I asked for truth, when i asked you to choose, ignoring all of my distress, you called it an ultimatum, to distract from how u lied to me. 

While you picked up roadside trash to build an altruistic shield

Hyperbolic public charity hiding what the ledger revealed

An overt performative weakness covering a core of pure spite
A dark triad spectrum hiding out of light

**[Pre-Chorus]**

[guitars swell, drums build in intensity]

Our shared dream of true crime files and obscure histories

Shifted to a cold dissection of my own anatomy

You derived a quiet, sadistic comfort watching me hollow inside

**[Chorus]**

[full band entry, soaring vocal delivery]

And I begged you, "don't betray me," looking intently into your eyes

While yours were fixed upon the dirt—a sign I failed to recognize

While you calculated exact prices for every single kiss

I paid a literal toll just to catch your eyes

Watched the blueprint of our love turn to quiet lies

I have never felt a hollow cut as deep as you

**[Bridge]**

[dynamic crescendo, ringing guitar chimes, pounding drums]

Your warmth was conditional, tied strictly to four walls

The second that the shelter cracked, you orchestrated falls

Egosyntonic cruelty disguised as a saintly grace

Moving to the next prey without a trace upon your face

Low agreeableness, high strategic control

A structural inversion that consumed my very soul

**[Verse 5]**

[subdued acoustic guitar, steady snare]

Now you’re playing the sweetest, smartest girl for someone new tonight

Hiding the predatory angle completely out of sight

While the rumor mill turns through the streets we used to know

Preemptive character assassination written in the snow

Claiming victimhood while walking from the wreckage of my trust

**[Chorus]**

[explosive final chorus, full emotional intensity]

And I begged you, "don't betray me," looking intently into your eyes

While yours were fixed upon the dirt—a sign I failed to recognize

While you calculated exact prices for every single kiss

I paid a literal toll just to catch your eyes

Watched the blueprint of our love turn to quiet lies

I have never felt a hollow cut as deep as you

**[Outro]**`},{id:"6338e119-6d75-49b9-8ac3-861f2cb45f18",title:"Pessimistic Bias",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:5,image:"https://cdn2.suno.ai/40767cc6.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/6338e119-6d75-49b9-8ac3-861f2cb45f18.m4a",videoUrl:"https://cdn1.suno.ai/6338e119-6d75-49b9-8ac3-861f2cb45f18.mp4",embedUrl:"https://suno.com/embed/6338e119-6d75-49b9-8ac3-861f2cb45f18",sunoUrl:"https://suno.com/song/6338e119-6d75-49b9-8ac3-861f2cb45f18",duration:242.4,durationFormatted:"4:02",tags:["alt-drill","indie-pop"],lyrics:`[Verse 1]
You keep waiting for the catch
Reading poison in the patchwork
Every kindness looks like bait
Every promise feels like last time, worse
You hold history like armor
Got your guard up to your ears
I see shadows in your stories
I see shaking in your fears

[Pre-Chorus]
You say everybody leaves me
You say love is just a bet
So you sharpen every question
Just to cut before your cut
I get that pessimistic bias in your mind, in your mind
You'd rather think I hurt you like they did every time

[Chorus]
But please take the chance, trust me let it climb
Let yourself be vulnerable like I did, I crossed that line
Just baby, press rewind, look me in the eye
See I'm not that kind
Please take the chance, drop the shield, it's time
Let yourself be vulnerable like I did, I crossed that line

[Verse 2]
I laid every scar on the table
Every secret every doubt I hide
You saw tremble in my fingers
When I told you how I almost died inside
I ain't here for your perfection
I'm here shaking in my skin
Two cracked mirrors on the mattress
Trying hard to let each other in

[Pre-Chorus]
You keep testing my intentions
Looking past me for the thrill
I keep staying, keep on saying
I'm still here while you predict
Pessimistic bias in your mind, in your mind
You'd rather think I hurt you like they did every time

[Chorus]
But please take the chance, trust me let it climb
Let yourself be vulnerable like I did, I crossed that line
Just baby, press rewind, look me in the eye
See I'm not that kind
Please take the chance, drop the shield, it's time
Let yourself be vulnerable like I did, I crossed that line

[Bridge]
What if this one time you're wrong
What if love shows up and stays
What if all those ghosted calls
Don't decide your future days
I'm not asking you for perfect
I'm just asking you to try
Hold my hand a little looser, let your heart be warm this time

[Chorus]
Pessimistic bias in your mind, in your mind
You'd rather think I hurt you like they did every time
But please take the chance, trust me let it climb
Let yourself be vulnerable like I did, I crossed that line
Just baby, press rewind, look me in the eye
See I'm not that kind
Please take the chance, drop the shield, it's time
Let yourself be vulnerable like I did, I crossed that line`},{id:"c1704899-4de4-42a0-a67c-8b0c1f59431e",title:"I Practiced being Hurt 2.0",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:6,image:"https://cdn2.suno.ai/bffc4969-723e-4f33-8dbd-518e9b0a3fec.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/c1704899-4de4-42a0-a67c-8b0c1f59431e.m4a",videoUrl:"https://cdn1.suno.ai/c1704899-4de4-42a0-a67c-8b0c1f59431e.mp4",embedUrl:"https://suno.com/embed/c1704899-4de4-42a0-a67c-8b0c1f59431e",sunoUrl:"https://suno.com/song/c1704899-4de4-42a0-a67c-8b0c1f59431e",duration:270.8,durationFormatted:"4:30",tags:["alt-drill","indie-pop"],lyrics:`[Male Vocals]
I learned young that jealousy meant
Somebody mattered more.
You arrived with a saccharine prelude, claiming love bore no fee,
Love-bombed me swiftly, establishing traps of transactional ice.

[Female Vocals]
Forgiving without punishment
Felt like wasting what anger was for.
So I asked the same thing twice
Until your answer sounded planned.
Then I kept the version that made you most at fault
Because being right gave me more control than repair.

[Male Vocals]
It didn’t just happen to me.
You were so beautiful and smart,
So I ignored the death left in your wake.
Now that I've fallen off the boat,
I was almost another left for dead,
Pillaged for the inconvenience of dealing with my body.
You say, "Yeah, I robbed you, but I told you right away—At least I'm honest."
Yeah, you try to be honest about all the crazy shit
So that way if some crazy shit happens,
You can lie and no one would question it.
Incalculable times I walked into "The Office," seeking your domain,
Only to meet icy rejection, public coldness, and disdain!
Zero PDA in the light—you pushed my hand away,
Playing the wounded bird so the crowd would pity you each day.
But I see through your sad sadistic games
Aimed to break my brain,
And untrain my reality until you felt like you caused enough pain.
Like you're pushing a button on a taser
And wondering when to let off,
The whole while trying to hide your smirk,
Thinking I deserved it for unproven accusations
Caused by your paranoid and unbalanced Libra mind.
You learned to wait until I was out of the room
Then You  start your account from there.
You dropped what led to it;
It was not about proof, it was about making me look bad.
I treated that as another offense...
Yeah, by then we could make the same result on command.

[Female Vocals]
I practiced looking loving.
I practiced needing proof.

[Male Vocals]
I suppressed being hurt.

[Female Vocals]
I learned which account made my anger look deserved.
Oh, I called intensity evidence,
As if intensity excused the damage.
Some feelings last because we repeat them.

[Male Vocals]
Mine lasted because they worked.
Yeah, because they worked.
You said I blamed you for what I chose,
Then blamed you again for remembering it.
You said I made you prove affection
And changed the standard once you did.

[Female Vocals]
No, you said you started leaving parts out
Because every detail became another charge.
By then we both knew how to make one reaction explain the rest.

[Male Vocals]
I got asked how she could blame me
For something that was just an invention in her mind.
you said your voice was the evidence,
And your yelling it in repetition your tool for proof.
Every preposterous allegation you directed at my name
Was a diagnostic mirror of your own clandestine game!

[Female Vocals]
Well, I stopped because I had learned that answer
Before I could test it.
Knowing where I learned it does not cancel what I chose.
I practiced wild yet believable accusations.
I projected my sadism in hidden accusations.
I know you just wanted to make me happy,
So when you did something nice, I told you you did it just to hurt me, cus i knew saying that would hurt you.

[Male Vocals]
and you gained pleasure from hurting me.
Does the extreme irony fascinate you?
Accusing me of what you are doing with the same sentence?
So efficient—you're a practiced instrument of my torture.
Driven by Machiavellian plots, narcissism, and psychopathy
A full Dark Triad fusion, wrapped in dramatic Cluster B!
I practiced suppressing pain.
You practiced needing proof.
Yeah, if I brought proof, you would either talk over me, or run out the room.
Now I know why it felt so easy.

[Male Vocals]
No, that does not erase the damage.

[Female Vocals]
I practiced looking loving.
I Practiced Looking hurt.

[Male Vocals]
I practiced being hurt.

[Female Vocals]
Yeah, I know why it worked.

[Male Vocals]
No... that does not make it harmless.`},{id:"5de6920f-ab82-4db1-b8df-9bac639de6dd",title:"Good Luck, GoodBye",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:7,image:"https://cdn2.suno.ai/27230293-e65e-4ce9-977b-a9ddb28cdd54.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/5de6920f-ab82-4db1-b8df-9bac639de6dd.m4a",videoUrl:"https://cdn1.suno.ai/5de6920f-ab82-4db1-b8df-9bac639de6dd.mp4",embedUrl:"https://suno.com/embed/5de6920f-ab82-4db1-b8df-9bac639de6dd",sunoUrl:"https://suno.com/song/5de6920f-ab82-4db1-b8df-9bac639de6dd",duration:329.6,durationFormatted:"5:29",tags:["alt-drill","drill","indie-pop"],lyrics:`[Intro — Soft Piano / Distant Vocals]
Yeah...
I think this is where we stop pretending.
I don't hate you...
I just can't keep hurting like this.

[Chorus — Melodic]
Good luck, goodbye, I hope you find what you need
I gave you all I had, but you still couldn't stay with me
Good luck, goodbye, I won't ask you to come back
It hurts to let you go, but I can't keep living like that

Good luck, goodbye, maybe someday I'll understand
Why you let go of us while I was still holding your hand
I wanted forever, you wanted something else
So I'm letting you go, even if it hurts like hell

[Verse 1 — Emotional Rap]
I remember when you told me you would never leave
I believed every word, that's the part that messes with me
Late nights on the phone, talking 'bout our lives
Now I see your name, but I don't know if I should reply

You knew every scar, every place that I was hurting
I thought you knew me better than anybody in this world did
Then something changed, and I couldn't understand
You went from saying “I'm yours” to letting go of my hand

I kept making excuses, saying maybe you were confused
Kept blaming myself for things you chose to do
Maybe I loved too hard, maybe I cared too much
But I can't spend my whole life wondering if I'm enough

I still remember everything, that's what makes it hard
The good days hit me just as hard as the bad parts
But memories aren't a reason that I should stay
Sometimes loving somebody means walking away

[Pre-Chorus — Soft / Layered]
And I know...
It's gonna hurt for a while
I'm gonna miss you sometimes
I'm gonna think about the good
Before I think about goodbye

But I can't keep going back
To a place that broke my heart
If this is really where it ends
Then I guess this is where we start...

[Chorus — Melodic]
Good luck, goodbye, I hope you find what you need
I gave you all I had, but you still couldn't stay with me
Good luck, goodbye, I won't ask you to come back
It hurts to let you go, but I can't keep living like that

Good luck, goodbye, maybe someday I'll understand
Why you let go of us while I was still holding your hand
I wanted forever, you wanted something else
So I'm letting you go, even if it hurts like hell

[Verse 2 — Faster Melodic Rap]
Look...
I moved the old pictures, but I remember every frame
Changed your contact in my phone, but I still remember your name
Everybody says “move on,” like it's easy to do
Like I can wake up tomorrow and forget I loved you

I don't wanna be bitter, I don't wanna wish you pain
I don't wanna see you hurting just because you walked away
If you find somebody else, I hope they treat you right
I hope they hold you close when you're having a bad night

That's the part that's different, I'm not trying to get revenge
I just finally understand that some stories have an end
You were part of my life, and I'll never deny that
But I'm building something new, and I can't keep looking back

You Turn every broken feeling into something I could sing out
Maybe this goodbye is another chapter I survive
Maybe losing you is how I finally learn to choose my life

[Bridge — Piano Only]
Maybe in another life...
We would've made it work.
Maybe we would've kept the promises
We made when everything felt perfect.

But I can't change the ending.
I can't make you stay.
So I'll keep the memories...
And I'll let you walk away.

No anger...
No hate...
No more chasing...
Just goodbye.

[Verse 3 — Vulnerable]
I hope you remember me for more than how it ended
Remember all the nights when we thought we'd be forever
Remember that I tried, even when I didn't know how
I was learning how to love while I was fighting myself

And if you ever hear this somewhere late at night
I hope you know I meant it when I said you changed my life
You weren't a mistake, you weren't a waste of time
You were somebody I loved during one part of my life

But I'm not gonna lose myself just to keep you around
I'm not gonna beg for love that doesn't wanna be found
I've got too much life ahead, too much left to become
And I'm finally learning I can heal without someone

[Final Chorus — Bigger / Layered Vocals]
Good luck, goodbye, I hope you find what you need
I gave you all I had, but you still couldn't stay with me
Good luck, goodbye, I won't ask you to come back
It hurts to let you go, but I won't keep living like that

Good luck, goodbye, I hope you're happy wherever you go
Even if a part of me still wishes you would've stayed, though
I wanted forever, but forever wasn't ours
So I'll carry what was beautiful and leave behind the scars

Good luck...
Goodbye...
I'm finally letting go tonight.
Good luck...
Goodbye...
I loved you, but I'm choosing life.

[Outro — Soft Piano / Fading Vocals]
Yeah...

No hard feelings.
No more questions.
No more chasing.

I hope you find what you're looking for.

And I hope I find myself again.

Good luck...
Goodbye... 🖤`},{id:"d9886311-6bcb-460c-b75e-905fc0da0147",title:"NUMB ENOUGH EDM REMIX",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:8,image:"https://cdn2.suno.ai/4b78786e-1994-409d-a48a-8c9de5d7341a.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/d9886311-6bcb-460c-b75e-905fc0da0147.m4a",videoUrl:"https://cdn1.suno.ai/d9886311-6bcb-460c-b75e-905fc0da0147.mp4",embedUrl:"https://suno.com/embed/d9886311-6bcb-460c-b75e-905fc0da0147",sunoUrl:"https://suno.com/song/d9886311-6bcb-460c-b75e-905fc0da0147",duration:353.2,durationFormatted:"5:53",tags:["electronic","half-time","urgent"],lyrics:`[Intro]
Room so dark I can barely see her
She got Rig on the table, Liquid so dark
I can’t look through it
Head screamin' words, gotta bleed music
Shots in the dark like, “Keep movin’”
Hard in the pipe, now we both losin’
Know where this goes, girl and boy in the vein, we just keep doin'

[Pre-Chorus]
All this speedballin got us feelin' ourselves
Our Mommas tell us we're really killing ourselves
Now I look in her eyes, see she killin' herself
We both know we wanna quit, but we can't help ourselves
She need help, I need help, why we doin' this to ourselves? (yeah)

[chorus]
we hit the pipe till we numb enough
I keep tellin' her, “Baby, your fucked up enough”
but she bang another speedball, sayin she ain’t fucked enough
I know one day this mixture gon’ fuck us up
I see the change every time she use
Look in her face, know what we could lose
Love in my hands, but the drugs make her choose

[Verse 1]
We chillin' in Hell, yeah, this our turf
Do I love her still? Hell yeah, down to Earth
If we talkin' 'bout my heart, yeah, this shit hurts
Watchin' her fade away off the Hard and the Percs
I tell her, “Please quit,” while I load my shot first
Hypocrite in the dark makin' bad shit worse
I’m banging the same poison, tryin’ to pull her back
How am I gonna save her when I’m on the same track?
Mixin' up boy while we talk about stoppin'
Both of us know that the casket’s an option
She look at me high, I look at her lost
We chasing the rush, but we hate the cost
I wish she’d take my hand and walk away once more
Try to save our lives like we wanted to before
We know we wanna quit, we could save ourselves again
Instead of loadin' up a rig just to kill the pain within

[Bridge]
We can't slow down
Speed up time, both lost our mind
Now it's our time, is it our time now?
I just want you to stop, I just want us to heal
Walk away from this life, make this quit real...

[chorus]
we hit the pipe till we numb enough
I keep tellin' her, “Baby, your fucked up enough”
but she bang another speedball, sayin she ain’t fucked enough
I know one day this mixture gon’ fuck us up
I see the change every time she use
Look in her face, know what we could lose
Love in my hands, but the drugs make her choose

[Verse 2]
She off the wall, smokin' Hard out the glass
Powder on her lip, ridin' high on the gas
Bangin' up boy, hopin' time don't pass
I join right in, but I’m prayin' it’s the last
It’s never enough, it’s never enough
Feel the love at all, or don't love at all
I tell her, “I had enough, I had enough
I want us both alive, I don't want us to fall”
I remember when we tried to get clean together
Thought we’d clear the storm, thought we’d fight through the weather
Now we back in the trap, loadin' shots in the dark
Feelin' the addiction tear away at our spark
I look in the rearview, yeah, the past
I wanted to leave all this powder in the past
How am I gonna tell her to put down the pipe
When I’m fixin' my own shot, holdin' on tight?
Now we too attached, way too attached
To the boy and the Hard and the pain we had
Tryna get us back, tryna get us back to clean...
But I know...

[chorus]
we hit the pipe till we numb enough
I keep tellin' her, “Baby, your fucked up enough”
but she bang another speedball, sayin she ain’t fucked enough
I know one day this Mixture may fuck us up

[Verse 3]
She know when I'm gone, I don't gotta explain
We both tryna kill the thought, forget the name
Every high wear off, bring us back to the same
So she mix another shot just to fuck with her brain
And I take one too, so she ain't alone in the pain
I know this shit bad, I ain't callin' it good
I tell her that we gotta quit, wish to God that she would
We both know we wanna quit, both sick of this hood
Love feels strong, but these drugs feel too good
I know that ain't right, but it feel that way
She want all my heart, but the boy in the way
Every time we come down, got less to say
I’m screaming “Please stop, let's get help today!”
She say, “but, you do the same, so what's your excuse?”
And she ain't wrong—we both destined to lose
One wrong move with the boy and it takin' you from me
And the worst part is we know it too well.
I’m sorry.. she just can't stop, and I wont leave her in the dark.
I just wish we could find a way to stop this again
Save us from the overdose waitin' round the bend

[chorus]
we hit the pipe till we numb enough
I keep tellin' her, “Baby, your fucked up enough”
but she bang another speedball, sayin she ain’t fucked enough
I know one day this mixture gon’ fuck us up
I see the change every time she use
Look in her face, know what we could lose
Love in my hands, but the drugs make her choose

[verse 4]
I keep prayin', “God, please let it be enough”
Before these speedballs fuck both of us up
I see her change every time she use
Look in her face, know what I’m 'bout to Lose
Please let her choose life over this Abuse
My Brother chose death he used a Noose
I’m staying back with her,  hope it aint a Ruse 
Love in my hands, but the drugs make her Choose

[END]`},{id:"b4bc2b00-d0ea-47bb-9c82-8771ce0acac1",title:"You questioned my motives",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:9,image:"https://cdn2.suno.ai/34f26ded-07b5-416d-8266-90f198f71b10.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/b4bc2b00-d0ea-47bb-9c82-8771ce0acac1.m4a",videoUrl:"https://cdn1.suno.ai/b4bc2b00-d0ea-47bb-9c82-8771ce0acac1.mp4",embedUrl:"https://suno.com/embed/b4bc2b00-d0ea-47bb-9c82-8771ce0acac1",sunoUrl:"https://suno.com/song/b4bc2b00-d0ea-47bb-9c82-8771ce0acac1",duration:252.7,durationFormatted:"4:12",tags:["alt-pop","industrial hip-hop"],lyrics:`[Verse 1]
[Emotional Male Vocals]
I poured my whole heart out, laid it bare on the floor.
But you looked at my devotion like a threat at the door.
I need an explanation for the walls that you built,
Trading unconditional love for suspicion and guilt.
Tell me, how could you doubt every word that I said?
Building cages of panic inside of your head.
I was trying to save you, I was holding the line,
But you treated my loyalty like some kind of crime.

[Cold Female Vocals]
I’m shaking in the shadows, waiting for the attack.
Even when you held me, I was watching my back.
I couldn't feel the safety, I was blinded by fear.
So I poisoned the water whenever you got near.

[Pre-Chorus]
[Male Vocals]
You questioned my motives, dissecting my grace.
Waiting for a mask to just slip from my face.

[Female Vocals]
Close enough to burn, but the world is finally slow.

[Duet]
Far enough to break, but it’s the only way I know.

[Chorus]
[Male Vocals]
Tell me why my love was just a reason to bleed?
Why was utter distrust the only thing you could feed?

[Female Vocals]
I’m running away, playing the wounded bird on the edge.

[Male Vocals]
I'm reverse-engineering how you pushed me off the ledge.

[Female Vocals]
You pull me to the fire, but my empathy is fake.

[Male Vocals]
You pull me to the middle, just to see how much I break.

[Verse 2]
[Male Vocals]
I frequented "The Office" trying to weather the storm.
While you treated my kindness like it broke every norm.
You hit me with DARVO 'cause you couldn't receive,
A polymath’s patience, so you chose to deceive.
I begged for a reason you were acting so cold,
Watching all the Dark Triad illusions unfold.
I gave you a sanctuary, gave you my best,
But you turned my affection to a paranoid test.

[Female Vocals]
I played the wounded bird so you would carry the weight.
I projected my darkness and I called it our fate.
You tried to heal the trauma, but my empathy's fake.
I never gave you trust, I only knew how to take.

[Pre-Chorus]
[Male Vocals]
You questioned my motives, dissecting my grace.
Waiting for a mask to just slip from my face.

[Female Vocals]
Close enough to burn, but the world is finally slow.

[Duet]
Far enough to break, but it’s the only way I know.

[Chorus]
[Male Vocals]
Tell me why my love was just a reason to bleed?
Why was utter distrust the only thing you could feed?

[Female Vocals]
I’m running away, playing the victim on the edge.

[Male Vocals]
I'm reverse-engineering how you pushed me off the ledge.

[Female Vocals]
You pull me to the fire, but my empathy is fake.

[Male Vocals]
You pull me to the middle, just to see how much I break.

[Bridge]
[Male Vocals]
I gave you unconditional, I gave you my soul!
But a void made of distrust can never be whole.
Why was every "I love you" a reason to run?

[Female Vocals]
Because destroying it all was my version of fun.
If I trust you, I lose, so I split us in two.
If I leave, I destroy the best part of me—you.

[Final Chorus]
[Male Vocals]
I'm begging for answers, I practiced needing proof...
How could you be so entirely removed from the truth?

[Female Vocals]
I’m running away, hiding the coldness inside.

[Male Vocals]
I’m drowning in heartbreak, with nowhere to hide.

[Female Vocals]
I’m running away, playing the victim today.

[Male Vocals]
I gave you my center...

[Duet]
Then you pull away.`},{id:"72aba4ee-f1a7-42bb-91e3-07572b31ec39",title:"Psychological Projection",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:10,image:"https://cdn2.suno.ai/40767cc6.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/72aba4ee-f1a7-42bb-91e3-07572b31ec39.m4a",videoUrl:"https://cdn1.suno.ai/72aba4ee-f1a7-42bb-91e3-07572b31ec39.mp4",embedUrl:"https://suno.com/embed/72aba4ee-f1a7-42bb-91e3-07572b31ec39",sunoUrl:"https://suno.com/song/72aba4ee-f1a7-42bb-91e3-07572b31ec39",duration:305.6,durationFormatted:"5:05",tags:["alt-drill","indie-pop"],lyrics:`**[Intro]**

[intimate clean guitar arpeggio, dark heavy bass pulse, steady drumbeat]

[Male Vocals – Verse 1]
Your happy-go-lucky attitude was almost handed out like free samples at the door, saying love was free.
Then love-bombed me hard, laying little hidden contracts under the table in a cold, transactional shade
You lived under my roof, but every kind thing got checked like I was passing counterfeit cash
You’d squint and ask, *"What's the angle? What's the catch?"* every time I handed you something to last
I walked into "The Office" more times than I can count, looking for your face across the room
Just to offer some warmth and get met with a dead stare, a public shutout, a room that turned to gloom
No hand on my back, no kiss in the open—you made me feel like a guest you barely knew
Saving the soft, off-the-record version of you for behind closed doors when nobody could see through

[Female Vocals – Verse 2 (The Communal Exploitation)]
I observed your arrival outside of "The Office" space
Using you for substances just to keep withdrawal off my face
I played the saintly communal savior, feeding the public my grace
While whispering *"I'm becoming abusive"* to keep you in your place—
A calculated reverse psychology so you'd prove your love was true
I mobilized my flying monkeys, launching a smear campaign on you:  Slandered you as a liar, a cheater, a snitch out of reach. Fabricating grotesque slanders—a voyeur, a pedophile to preach

[Male Vocals – Pre-Chorus]
Every preposterous allegation you directed at my name
Was a diagnostic mirror of your own clandestine game!
You labeled me paranoid, accused me of covert deceit
While executing insidious betrayals in total secrecy!

[Chorus – Duet]
[swelling distorted guitars, driving drum rhythm]

[Male Vocals]
It was pure psychological projection! A weaponized display!
You deployed flying monkeys to destroy me along the way!
I frequented "The Office" merely to endure your surgical knife While you weaponized horrific slander to dismantle my entire life!

[Female Vocals]
It was pure psychological projection! Every falsehood I assigned!
I mapped my own hidden guilt onto your unblemished mind!
I proclaimed you toxic to keep you perpetually on defense
Hiding my malignant reality behind a sanctimonious fence!

[Male Vocals – Verse 3 (The Inversion of Guilt)]
You claimed my affection was absent, though my devotion was absolute You feigned affection yourself, rendering my reality moot
You accused me of every grotesque crime your mind could construct—
An abuser, a voyeur, a cheater, a predator a snitch, But none of it would stick. trying to tell everyone i strangled you all the time.. then you get in my face yelling i abuse you. all while im backed in the corner crying because i dont understand why the women i love wants to hurt me so much and lie..
 —while you managed the conduct!

You used reverse psychology so I'd apologize for your shame

Trapping an empath in a one-sided, malignant game

[Female Vocals – Verse 4 (The Egosyntonic Confession)]
I recognized your profound devotion—it was blindingly clear
I used your shelter and drugs to keep the sickness out of here
I feigned uncertainty of my affection because I cannot love at all
Preemptively orchestrating ruin before the dynamic could fall
I turned associates into flying monkeys whenever you approached my desk
Rendering your genuine empathy bizarre, unhinged, and grotesque

[Bridge – Dynamic Duet]
[dynamic crescendo, ringing guitar chimes, pounding drums]

[Male Vocals]
How many times did I stand at "The Office" door
Seeking the woman who lived with me, only left on the floor?
Slandered to the crowd while you played the victimized saint!

[Female Vocals]
I derived an egosyntonic thrill from watching your dignity faint. Extracted your empathy and resources to fuel my own pride
Leaving you utterly depleted while I stayed sanctified

[Chorus – Both]
[explosive final chorus, full emotional intensity]
[Male Vocals]
It was pure psychological projection! A weaponized display!
You deployed flying monkeys to destroy me along the way!
I frequented "The Office" merely to endure your surgical knife
While you weaponized horrific slander to dismantle my entire life!

[Female Vocals]
It was pure psychological projection! Every falsehood I assigned!
I mapped my own hidden guilt onto your unblemished mind!
I was sweet at the onset, now revealed as the ultimate curse—
A communal parasite leaving your soul utterly adverse!

[Outro]
[fading piano, ambient feedback, trailing acoustic chords]
[Male Vocals]
Walked into "The Office" one final time...
Now I perceive the mirror behind every engineered crime.

[Female Vocals]
I called you a liar, a snitch, a voyeur...
When I was just a communal parasite, hiding who we really were.

[acoustic chord rings out and fades]`},{id:"d506c64f-9d50-42b9-98d1-da1a50767aa5",title:"Don't Let Me Go",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:11,image:"https://cdn2.suno.ai/40767cc6.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/d506c64f-9d50-42b9-98d1-da1a50767aa5.m4a",videoUrl:"https://cdn1.suno.ai/d506c64f-9d50-42b9-98d1-da1a50767aa5.mp4",embedUrl:"https://suno.com/embed/d506c64f-9d50-42b9-98d1-da1a50767aa5",sunoUrl:"https://suno.com/song/d506c64f-9d50-42b9-98d1-da1a50767aa5",duration:208.8,durationFormatted:"3:28",tags:["alt-drill","indie-pop","melodic-rock"],lyrics:`[INTRO — whispered / filtered]
Yeah…
I been somewhere I can’t explain
Bittersweet echoes stuck inside my brain
Same face, different frame
If I disappear, don’t call my name
I might come back changed

[VERSE 1 — melodic rap, laid-back pocket]
I got gasoline dreams and a match in my hand
Made a home out the wreckage, now I don’t know where I stand
You read my face like a crime scene before the lights turn green
Expecting poison shot by shot from a ghost you’ve never seen
You played the wounded bird, said I’m the one you can’t trust
Pessimistic bias turning all our gold into rust
But I hear voices in the engine when I’m driving alone
Like I'm standing at "The Office" just begging for my home

[CHORUS — HUGE, melodic rock]
DON’T LET ME GO
I’M ALREADY FALLING
DON’T LET ME KNOW
IF NOBODY’S CALLING

YOU’D RATHER BLAME ME FOR THE FIRE
THAN BECOME WHAT THEY WANTED
IF THIS IS MY LIFE
THEN I’M TAKING IT FROM ’EM

DON’T LET ME GO— (go, go, go)

[VERSE 2 — darker, tighter bounce]
I put my faith in a feeling, got betrayed by the facts
Had a communal saint with a blade in her back
You hit me with DARVO, flipped the script in the dark
Aiming every whisper like a knife in my heart
I smuggled concepts ‘cross the borders of your toxic-ass mind
Reverse-engineered the syntax of the traps you designed
You charged me a fee just to talk it all through
Turned my empathy to revenue, but I’m changing the locks on you

[METAL BREAKDOWN — HALF-TIME / GUITAR FEEDBACK]
Wait…
What if the door was never locked?
What if I was just scared to see what was on the other side?

[SCREAM]
OPEN THE FUCKING DOOR—

I’M NOT DEAD!
I JUST DON’T LIVE THE WAY YOU WANTED!
I'M BECOMING THE ONE I'VE ALWAYS BEEN RUNNING FROM!
EVERY DAY I GET CLOSER TO MY ABUSER!
I’M NOT LOST!
I JUST TOOK A DIFFERENT EXIT—

[FINAL VERSE — explosive rap]
Now I’m back with the windows down, let the whole damn city hear it
I spent years trying to kill the doubt, now I keep that motherfucker near me
That’s the difference: I ain’t healed, I’m just different
No more velvet blades in the kitchen
Turned the damage into diction
Turned the psychological projection into vision
Every failure left a fingerprint, every heartbreak left a doorway
Every night I thought I’d disappear built the man that’s standing here today
So if I vanish, let me vanish, I ain’t running anymore
I’m just walking through the version of myself I couldn’t before—

[OUTRO — guitar ringing out]
DON’T LET ME GO—
I’M ALREADY FALLING...

Maybe destiny ain’t a destination…
Maybe it’s just—
another door.`},{id:"4c09adf0-de63-4adc-bb3e-086cdae9c5c7",title:"And I begged you, Don't Betray me EDM REMIX",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:12,image:"https://cdn2.suno.ai/40767cc6.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/4c09adf0-de63-4adc-bb3e-086cdae9c5c7.m4a",videoUrl:"https://cdn1.suno.ai/4c09adf0-de63-4adc-bb3e-086cdae9c5c7.mp4",embedUrl:"https://suno.com/embed/4c09adf0-de63-4adc-bb3e-086cdae9c5c7",sunoUrl:"https://suno.com/song/4c09adf0-de63-4adc-bb3e-086cdae9c5c7",duration:434.4,durationFormatted:"7:14",tags:["funk-rock","dubstep"],lyrics:`it was June when you arrived like a bird with a broken wing

I built a fortress in my mind for every fragile thing

We walked across the city while I tried to shield your heart from every past pain

Told you I was helplessly falling, trusting you implicitly through the rain

You never kept a phone—an unreachable ghost in the noise

I spent half my nights wandering the city just to search for your voice

And every time I tried to do something gentle and sweet

You looked at me with hypervigilant eyes, searching for the trap at your feet

Asking me, "What's in it for *you*? Why are you being nice?"

Dissecting my intentions with weaponized vulnerability, calculating the price

**[Verse 2]**

[clean guitar arpeggiated riff, steady bass drive]

I provided your four walls, kept you warm and safe and fed

Taking care of every necessity, keeping shelter overhead

Making sure you weren't sick, giving everything I could supply

And you played the sweetest, smartest, most beautiful girl under the sky

Wearing a communal saintly mask, public virtue shining bright

While systematically draining resources out of sight

The second that the well ran dry and I had nothing left to yield

You dropped the fragile act and stepped into another field

Seamlessly sliding to the next victim with predatory ease

Leaving me hollowed out while you found new hands to squeeze

**[Verse 3]**

[dynamic clean guitar chimes, warm bass pulse]

You stared at the future with a heavy, pessimistic glare

Waiting until I was hopelessly in love and locked right there

Past the event horizon of a covert grandiose design

That’s when you started whispering warnings, drawing the trap line:

*"I'm becoming abusive... you're too good for me... you should walk away"*

Reverse-psychology performance designed to make me stay

So when the structural collapse occurred and the dynamic tore apart

I was primed to take accountability for every scar in your heart

Zero responsibility on your side of the ledger drawn

A malignant structure smiling as the morning broke at dawn

**[Chorus]**

And I begged you, "don't betray me," looking intently into your eyes

While yours were fixed upon the dirt—a sign I failed to recognize

While you calculated exact prices for every single kiss

I paid a literal toll just to catch your eyes in this

Watched the blueprint of our love turn to quiet lies

I have never felt a hollow cut as deep as you

**[Verse 4]**

Then your ex came back from Ethiopia, and the truth came out clear

You never broke up with him, when i approached you, instead of a hug, You guesture a danger signal to get away from you.

Pushed to the sidelines just like with the last girl , i felt like a lick again, like DEja vouis om. while you played Machiavellian chess,  i guess love was never free.

Screaming when I asked for truth, when i asked you to choose, ignoring all of my distress, you called it an ultimatum, to distract from how u lied to me. 

While you picked up roadside trash to build an altruistic shield

Hyperbolic public charity hiding what the ledger revealed

An overt performative weakness covering a core of pure spite
A dark triad spectrum hiding out of light

**[Pre-Chorus]**

[guitars swell, drums build in intensity]

Our shared dream of true crime files and obscure histories

Shifted to a cold dissection of my own anatomy

You derived a quiet, sadistic comfort watching me hollow inside

**[Chorus]**

[full band entry, soaring vocal delivery]

And I begged you, "don't betray me," looking intently into your eyes

While yours were fixed upon the dirt—a sign I failed to recognize

While you calculated exact prices for every single kiss

I paid a literal toll just to catch your eyes

Watched the blueprint of our love turn to quiet lies

I have never felt a hollow cut as deep as you

**[Bridge]**

[dynamic crescendo, ringing guitar chimes, pounding drums]

Your warmth was conditional, tied strictly to four walls

The second that the shelter cracked, you orchestrated falls

Egosyntonic cruelty disguised as a saintly grace

Moving to the next prey without a trace upon your face

Low agreeableness, high strategic control

A structural inversion that consumed my very soul

**[Verse 5]**

[subdued acoustic guitar, steady snare]

Now you’re playing the sweetest, smartest girl for someone new tonight

Hiding the predatory angle completely out of sight

While the rumor mill turns through the streets we used to know

Preemptive character assassination written in the snow

Claiming victimhood while walking from the wreckage of my trust

**[Chorus]**

[explosive final chorus, full emotional intensity]

And I begged you, "don't betray me," looking intently into your eyes

While yours were fixed upon the dirt—a sign I failed to recognize

While you calculated exact prices for every single kiss

I paid a literal toll just to catch your eyes

Watched the blueprint of our love turn to quiet lies

I have never felt a hollow cut as deep as you

**[Outro]**`},{id:"3e6a6896-4a3e-40f5-971c-fb7931c46a28",title:"pessimistic girl",artist:"Nate M (Main acct @DomInNATEly)",handle:"techyneiche",index:13,image:"https://cdn2.suno.ai/6643bdaa-0cc1-47fc-b13e-a618e6789ec4.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/3e6a6896-4a3e-40f5-971c-fb7931c46a28.m4a",videoUrl:"https://cdn1.suno.ai/3e6a6896-4a3e-40f5-971c-fb7931c46a28.mp4",embedUrl:"https://suno.com/embed/3e6a6896-4a3e-40f5-971c-fb7931c46a28",sunoUrl:"https://suno.com/song/3e6a6896-4a3e-40f5-971c-fb7931c46a28",duration:228,durationFormatted:"3:48",tags:["indie pop","lo-fi"],lyrics:`[Intro]
[Clean electric guitar playing syncopated, minor chords; a slow, steady bass drum enters]

[Verse 1]
[Relaxed male vocals, slightly weary tone]
They post the black square, it’s a standard move
Always front and center, you’ve got something to prove
The wounded bird posture, that delicate act
While you keep a tight grip on your donation contact.

[Pre-Chorus]
The first to sign the petition in the feed
But you don’t trust a perfect run,
You say trouble likes a little sun.
So you collect their praise as proof
Even when you know it's not the truth.

[Chorus]
You’re so "pessimistic"
You’ve made a science of looking altruistic.
Claim you're saving us from the catastrophic
But it looks more like a virtue toxic.
You’re so "giving"
A radar for praise just for living.
But I still sit right here
Watching your facade appear.

[Verse 2]
[Relaxed male vocals]
You save the receipts from the soup kitchen line
Map out every tragic story, right on time.
Got a spare tear ready for the camera’s flash
And a face like you already heard about the crash.

[Pre-Chorus]
You keep a lid on every happy spark
Predict a leak way before the dark.
Still, you’re counting how much attention you can gain
From standard, manufactured pain.

[Chorus]
You’re so "pessimistic"
You’ve made a science of looking altruistic.
Claim you're saving us from the catastrophic
perfected virtue signaling yet toxic.
You’re so "giving"
A radar for praise just for living.
But I still sit right here
Watching your facade appear.

[Bridge]
Maybe you learned how to trade it all away
Found out that sympathy gets you a pass.
Maybe every hand you ever opened up
Was just hoping someone would fill the glass.
Still, when you slip and show a crack of real fear
It’s like the whole place shifts a bit.
For one small second
You almost let them in.

[Final Chorus]
look so altruistic yet You’re so "pessimistic"
So impossible to talk you out of this.
One hand on the virtue signal
One foot out the door, waiting for the hand-out.
You’re so negative too pessimistic
Yeah, I see your complex, its defensive.
But I see the crack in your plan
When you ask me for a hand.

[Outro]
[Clean electric guitar returns, bass holds the last note, vocals fade]
You call it empathy.
I call it the perfect long con.
Always pessimistic.
Always giving.
Always taking.`},{id:"d6c27009-4035-45ed-81ae-8061fbdeae82",title:"Cluster B Storm",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:14,image:"https://cdn2.suno.ai/bef9e8f0-7f4a-435c-9a30-32f7afd297b4.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/d6c27009-4035-45ed-81ae-8061fbdeae82.m4a",videoUrl:"https://cdn1.suno.ai/d6c27009-4035-45ed-81ae-8061fbdeae82.mp4",embedUrl:"https://suno.com/embed/d6c27009-4035-45ed-81ae-8061fbdeae82",sunoUrl:"https://suno.com/song/d6c27009-4035-45ed-81ae-8061fbdeae82",duration:303.8,durationFormatted:"5:03",tags:["hip hop","R&B","trap hip hop"],lyrics:`[Intro]
Thought you were a saint, huh?
Let's tell the real story.
Let's pull the mask off.
Watch.

[Verse 1]
You walked in with that hands-on halo, fake glow, bathing in a curated grace
Sucking up the quiet ego cookies in that holy, sacred space
Preoccupied with sanctity, a little NSHC savior in disguise
Wrapping up a painted, psychotic paracosm right around my eyes
I was your king, your chosen project, just a perfect piece of clay
Blinded by the heavy-handed love-bombs that you threw along my way
But you're a walking diagnostic cocktail, a category five
A histrionic princess needing drama just to feel alive!
Always hunting for the spotlight, faking empathy to feed your greed
A amorous seductress with an appetite for what you think you need
Then the borderline splitting hit—no gray, just black and white
One day I’m your angel, next day you're screaming in the night!
Flipping like a pendulum, a rapid-fire grandiosity collapse
Dropping to a Wounded Bird the second that your dirty traps snap!

[Pre-Chorus]
(Beat builds rapidly, rapid-fire snare drum roll, rising cinematic strings)
And now the watercolor's running and the picture's turning gray
Your "Saintly Helper" adulation faded when you got your way
Yeah, you got your way... but the bill is due today!

[Chorus]
And you run on the fuel of the Dark Triad spark!
Narcissism screaming for a throne in the dark!
With the cold, amoral planning of a Machiavellian brain!
And a psychopathic coldness that is dancing in my pain!
You’re a perfect Cluster B storm, a category five!
I had to burn the theater down just to stay alive!
Yeah, I had to stay alive!

[Verse 2]
Devaluation came with a slow, amoral, sickening crawl
Using cold cognitive empathy to map my every single wall
Calculating every boundary, laughing when my limits broke
While your antisocial conscience treated my survival as a joke!
You took my peace, you took my money, conned me with a warm display
Then you dropped me like a piece of trash and tried to walk away
But when I caught you red-handed, you didn't even weep or sigh
Just a cool, contemptuous nonchalance, a shrug of "Why'd you buy?"
Then you launched the ultimate, unprincipled, malicious smear!
Telling the community I strangled you? Spreading that fear?
Calling me a snitch? A voyeur? Pulling lies out of the blue?
Reversing victim and abuser, acting like the harm was done to you!
You triggered moral outrage, got your flying monkeys on the track
Mobilized your brainwashed legions just to stab me in the back!
Deriving a sadistic, ego-syntonic, sick relief
"Playing for the kill" while I was drowning in a somatic grief!

[Pre-Chorus]
Left me in metalinguistic deprivation, stripped of every word
But I'm screaming now, chichi baby! Every single lie is heard!
Yeah, the clock is ticking down!

[Chorus]
(Full explosive release)
And you run on the fuel of the Dark Triad spark!
Narcissism screaming for a throne in the dark!
With the cold, amoral planning of a Machiavellian brain!
And a psychopathic coldness that is dancing in my pain!
You’re a perfect Cluster B storm, a category five!
I had to burn the theater down just to stay alive!

[Bridge]
(No drums. Just a ticking clock, a low ambient drone, and a rapid-fire, breathless delivery)
So I packed my bags in March of 2026 and shut the heavy door
Enforcing strict No-Contact 'cause I couldn’t take a second more!
Phase One: Days one to ninety in the dark of the room
Body screaming, vomiting, fighting off the shadow of your doom
A neurobiological detox from a chemical,
trauma-bonded trace
Craving for the safety of your devastating, toxic embrace!
Phase Two:
Months three to six, cognitive dissonance in my head
Replaying ten thousand texts, 
wishing that my mind was dead
Was it real? Was it fake?
Holding two conflicting, crazy lines
While the stress and reward chemistry was whispering our designs!
Phase Three:
Months six to twelve, taking my pieces to the floor
Somatic Experiencing discharging the panic at my core
Through the rapid eye movements of EMDR, 
the memories started to slide
Undoing the cognitive grip of the gaslight that you tried!

[Chorus]
(Full beat back in, triumphant, aggressive, and towering)
Now behind your communion, the freezing winds blow!
But I stepped off the stage of your one-person show!
I am out of the loop of your stress and your praise!
I escaped your chemical trap and your chemical haze!
Oh, your saintly sanctuary had a massive cost!
But I’m standing at the end of everything I lost!

[Outro]
Waking up at 5:40 to a steady, quiet light.
Realizing this silence is mine to keep tonight.
No texts to check.
No borderline storms to analyze.
Just the quiet.
And it’s mine.`},{id:"6c442496-4e41-4c18-ad04-1e1bd03ca5c4",title:"Sweet at first (Extended, Jazz Remix)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:15,image:"https://cdn2.suno.ai/40767cc6.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/6c442496-4e41-4c18-ad04-1e1bd03ca5c4.m4a",videoUrl:"https://cdn1.suno.ai/6c442496-4e41-4c18-ad04-1e1bd03ca5c4.mp4",embedUrl:"https://suno.com/embed/6c442496-4e41-4c18-ad04-1e1bd03ca5c4",sunoUrl:"https://suno.com/song/6c442496-4e41-4c18-ad04-1e1bd03ca5c4",duration:391.9,durationFormatted:"6:31",tags:["alt-drill","jazz-rock"],lyrics:`[Male vocals]
You came in sweet
All soft at the seams
You saw my ex use and hurt me
Said you felt for me

[Male Vocals]
Hello, Hudson corner store
Boxes to break down and trash
You smiled for the block
Then cut me with that smile
You said I needed people skills, said I was broken
Said you'd save me from her
Now I'm in the fire
And you made it worse

[Male vocals]
You talk like a saint
But you move like a scheme
Turn my name to smoke
Then you slip out unseen
You bend every room
Till the truth won't stay
And every "I love you"
Comes out like bait
Now you're first with accusations
From your sociopathic exes
Now you're scared of me
But I ain't got no Tommy gun
No sick little motive
Still you keep me on defense
Make me try harder
While you hide your dirty moves
You came in sweet
Please, can I get her back

[Female vocals]
I came in like gravity
Pulled you out of your orbit
Saw the cracks in your structure
And knew just how to exploit it
hello Hudson corner store
I wasn’t smiling for the block
I was weaponizing that smile
I talked like a saint
But I moved like a scheme
Turned your name into smoke
with a smear campaign
I was sweet at first
Now I look at the wreckage
And I know I’m the worst.

[Male vocals]
You said love is free
Asked why I was so nice
Said my four walls were more than enough
Then you flipped it, said  that you were becoming abusive.. and that I was too good for you and  you should walk away"
A reverse-psychology move to make me stay
Then the gifts I gave became demands
You wore down my peace, wore down my sanity
You lived in a different world, rewriting reality
And I was already warned, so I should've seen it sooner
When the kind act cracked
While you were smoking crack
You weren't saving me
You were dragging me back

[Male Vocals]
You never trust me
Even when I'm right there
Look me in the face
Then act like I'm not there
You tell everybody
I'm a liar with a grin
Then you push that soft
Then you get so scared
Running paranoid
And my anxiety grows worse
And cars pull over, hoping you won't be bought
You call it "helping"
But it's taking what I got
Empty my pockets
While you do another shot
Covert in the daylight
All warmth, no spine
Pessimistic bias is my pain
And a poison shot by shot

[Female vocals]
I wore that halo
Like a stolen crown
Used your four walls for shelter
While I burned them down
I wasn't saving you
I was breaking you down.

[Male Vocals]
You played the wounded bird in the darkest kind of spot
I came to fix the wings you said were caught
You wore a saintly mask, so beautiful and smart
A sweet little trap to lock up my heart
You told me you were broken, said you blindly trusted me
But it was just a setup for your own hypocrisy
I thought I was your savior, pulling you from the debris
But you were building cages I couldn't even see
I had to pay a toll just to look you in the eye
Funding your survival while you bled my spirit dry
You told me Tommy was a threat, a killer in the night
To keep me isolated in a paranoid spotlight
But you were texting him in secret, pulling strings behind the scenes
Just a calculated hustle in a Machiavellian dream
Now I see the ego-syntonic pleasure in the worst
You flip the script, you DARVO, you tell them I’m the pain
Using emotional torture for your financial gain
You smear my name to ashes, saying I'm a monster, throwing flying monkeys. Said I don't know how to love
But that was your projection in disguise
While you wear that heavy halo you borrowed from above
Sweet at first...
But you were playing for the kill.

[Female Vocals]
I played the vulnerable victim, spinning you my web
A quiet little trick to keep me in your head
I told my ex stay quiet, never say a word
So I could keep your wallet open while playing wounded bird
I gave you little truth-lies, said you were too good for me
So when it all fell apart, you'd take accountability
I didn't want your healing, I didn't want a cure
I wanted you dependent, isolated, unsure
I bent every room, made you the villain of the play
Smeared your name before you had a say
I watched you lose your footing, watched you hollow out inside
And the relief I felt in breaking you was hard to hide
I took your empathy and turned it to a leash
I wasn't your soulmate, I was acting like a leech

[female vocals]
Now here's the truth: I knew exactly what I was doing
I wanted your love and your money, and I kept both moving
I used your trust like a handle and your kindness like a door
And when you finally saw me, I still wanted more
I'm not sorry because I hurt you by mistake
I'm sorry you were useful and I still chose to take
I don't need saving, I need to admit what I am
I came in sweet just to leave you holding the damage
I was never gentle
I was just better at the act
And I liked how easy it was to watch you crack.
[End]`},{id:"427fba31-e531-49ff-8540-19e1cf95905b",title:"Super Pessimistic! (Experimental remix)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:16,image:"https://cdn2.suno.ai/40767cc6.jpeg",audioUrl:"https://cdn1.suno.ai/427fba31-e531-49ff-8540-19e1cf95905b.mp4",videoUrl:"https://cdn1.suno.ai/427fba31-e531-49ff-8540-19e1cf95905b.mp4",embedUrl:"https://suno.com/embed/427fba31-e531-49ff-8540-19e1cf95905b",sunoUrl:"https://suno.com/song/427fba31-e531-49ff-8540-19e1cf95905b",duration:240.1,durationFormatted:"4:00",tags:["alt pop","pop punk"],lyrics:`[singer A]
Appeared so far
just seconds ago
But lifting my head
it breathes down on my sore neck

Such a predatory sensation
mouth clamped shut
Mind reeling
I can’t look away

The devil resides
in our loving hearts
A velvet blade
under folded hands

[transition]

[singer B]
Your ambition
So pernicious
Self-inflicted inhibitions

And I get stuck inside my head
Your antics push me to the edge
Its always Barely a maybe saby baby

'Cause you're so pissy when you miss it
Yeah
You push it
And you miss it
You're super pessimistic
You're super pessimistic

[melodic transition]

[singer A]
Not allowed to turn
not allowed to run
You call my name
like a loaded gun

I feel it climb
from my feet to my chest
Flooding my veins
with trepidation

Devil in our hearts
devil in our hearts
You got me playing blind
With no rules at all

Devil in our hearts
devil in our hearts
I’m falling into you
And I know the cost

[transition]

[singer B]
You're super pessimistic
You're super pessimistic
You get so cynic and narcissistic
But I stay optimistic
But is that realistic?
'Cause you're so pissy when you miss it
Barely maybe saby baby

Super pessimistic
You're super pessimistic
Super pessimistic
You're super pessimistic`},{id:"f2063bc8-cde6-441f-b406-6fd94f63fb5e",title:"SHUT THE DEADBOLT",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:17,image:"https://cdn2.suno.ai/40767cc6.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/f2063bc8-cde6-441f-b406-6fd94f63fb5e.m4a",videoUrl:"https://cdn1.suno.ai/f2063bc8-cde6-441f-b406-6fd94f63fb5e.mp4",embedUrl:"https://suno.com/embed/f2063bc8-cde6-441f-b406-6fd94f63fb5e",sunoUrl:"https://suno.com/song/f2063bc8-cde6-441f-b406-6fd94f63fb5e",duration:176,durationFormatted:"2:56",tags:["Hip Hop","Trap"],lyrics:`[Verse]
You shut the deadbolt, hit the chain, leave me pacing in the hall
I’m tapping the ring like it’s a panel, like I can’t hear through the wall
Say, “Prove you ain’t a fraud,” like I’m some unpaid audit call
Then you lift that look so dry it could audit me in full
Cool as a spreadsheet, crossed arms, stainless face
Every word I drop gets flagged, gets filed, gets erased
You put my name in a red-box column, blame it on the weather
Like I wake up making glitches just to keep us tethered
No, you think I want the whole board, all the slots, all the keys
You think I’m out here counting misses just to watch you freeze
Every delayed text, every missed ring, every hour I’m not there
You turn it into evidence, like I plotted it in air

[Chorus]
You shut the deadbolt, hit the chain, leave me out in the cold
My voice cracks through the peephole, “I’m not lying, let me in, let it go”
Your brow folds up like a locked file, quiet, heavy, set to fail
You make me feel one-inch tall in a room built like a jail
And the line you throw back, clean as a knife on steel
“Hurt me, that’s what you wanted,” like it’s already real
I keep my hand on the knob till my knuckles turn chalk-white
Trying to debug this whole scene, trying to make the math right
But all I get back, every time, is that same flat reply
“Hurt me, that’s what you wanted”
Like you’d scripted it tonight

[Post-Chorus]
“Hurt me, that’s what you wanted”
Same receipt, same rerun, every time
“Hurt me, that’s what you wanted”
Spinning in my head like a looped design
“Hurt me, that’s what you wanted”
You say it like a tagline, no effort, no strain
It hangs in the kitchen
After I’m gone and the light stays on the chain

[Verse 2]
I’m planted in the hallway with my keys cutting my palm
TV leaking in the back room, kettle ticking itself off
Nobody moves, nobody flinches, you just stand there cool
Arms folded like a shutdown screen, acting like you’ve already ruled
I keep trying to get my side out clean, keep it plain, keep it true
But it lands all wrong, hits the floor, gets bent by the room
Again
You read the whole scene like a marked-up schematic
Every pause, every breath, every crack gets made out static
I can’t get a sentence past you without you turning it
Into proof I came here hungry for a fight and lit the circuit
Clock above the sink keeps tapping like it’s paid by the beat
Your shoes by the door, my coat half-worn, me stuck on repeat
Fridge hums low, the place feels staged, like a showroom after close
You look through me like the answer’s just something you already chose

[Outro]
So I lean on the frame, watch the latch stay stubborn, hard
Wait for you to look up like I’m not just dead air in the dark
But the house keeps its mouth shut, and you stay behind your line
I stop talking, let the silence do what it does every time
You shut the deadbolt, hit the chain, leave me out in the cold
And I let it sit on the mat
Between us
Like a package that nobody’s bold enough to unfold`},{id:"d9f75453-1a69-49f9-8e86-fcd935b2c39a",title:"I can't turn it off",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:18,image:"https://cdn2.suno.ai/deb181f5-0db0-4118-89af-9ded35b12056.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/d9f75453-1a69-49f9-8e86-fcd935b2c39a.m4a",videoUrl:"https://cdn1.suno.ai/d9f75453-1a69-49f9-8e86-fcd935b2c39a.mp4",embedUrl:"https://suno.com/embed/d9f75453-1a69-49f9-8e86-fcd935b2c39a",sunoUrl:"https://suno.com/song/d9f75453-1a69-49f9-8e86-fcd935b2c39a",duration:252.4,durationFormatted:"4:12",tags:["Alt-drill with low male Auto-Tuned melodic-pop vocals in hypnotic short-bar cadence","shaped from the user's own recorded voice; industrial grit","tape saturation","plate reverb and distorted indie-pop texture; distorted electric-guitar loop over crisp drill drums","sharp hi-hats and sliding 808s; slow-pocket Brooklyn bounce with a laid-back swing"],lyrics:`[Intro]
Yeah. Check the mic.
Step into the laboratory.
I spent years looking for a pulse in a freezing room.
Let me break it down.

[Verse 1]
Look at you scrolling, faking the motion
Dropping your tears in a digital ocean
While I was drowning, searching for a reason why
A soul could be so vacant behind a pair of eyes.
I built a hundred bridges, gave you a thousand outs,
Blamed your past, blamed your pain, swallowed all my doubts.
I told myself you’re hurting, I told myself you’re scared,
I manufactured empathy to prove that you still cared.
I bent the laws of logic to make your venom sweet,
Hoping underneath the ice, a human heart would beat.
I wanted just the good in you, the light I thought I saw,
But you were just extracting, a parasite by law.
You played the wounded bird, harvesting the trust,
While my unconditional devotion crumbled into dust.

[Chorus]
And the heaviest weight is I can't turn it off.
This unconditional love makes my spirit so soft.
I'm waking up aching, the pain's on repeat,
Dragging the ghost of your touch down the street.
While I pound my raw words into compounded verbs,
To vasodilate the grief in these compiled verses!
I'm the architect artist, drowning in my own art,
And you're just a mercenary, a void without a heart.

[Verse 2]
My pen is a scalpel, but my hands are still shaking
Dissecting the Dark Triad, the life you were taking.
I frequented "The Office" just to walk into your knife,
Begging for a reason you dismantled my life.
How could you be so cold? Not a flinch, not a blink,
While I was on the edge, pushing back from the brink?
You hit me with DARVO, flipped the script in the dark,
A calculated strike directly aimed at my heart.
I smuggled concepts 'cross the borders of my own mind,
Trying to prove you weren't the monster you designed.
But the math doesn't lie, the equations are clear,
You didn't feel love, you just weaponized fear.
You charged me a fee just to talk it all through,
Turned my empathy to revenue, a transaction for you.

[Chorus]
And the heaviest weight is I can't turn it off.
This unconditional love makes my spirit so soft.
I'm waking up aching, the pain's on repeat,
Dragging the ghost of your touch down the street.
While I pound my raw words into compounded verbs,
To vasodilate the grief in these compiled verses!
I'm the architect artist, drowning in my own art,
And you're just a mercenary, a void without a heart.

[Verse 3]
I wake up every morning and the silence is loud.
I'm screaming your name to an empty crowd.
I wanted to fix you, I wanted to stay,
But you were just an iceberg drifting my way.
You learned to wait until I raised my voice,
Then started your timeline, like I made the choice.
It was pure psychological projection! A weaponized display!
You deployed flying monkeys to destroy me along the way!
And the tragedy is, even knowing the truth,
Even seeing the fangs underneath the youth,
My heart still remembers the lie that it bought.
I'm trapped in the prison that your cruelty wrought.
You practiced looking loving while you set up the snare,
Because being right gave you more control than repair.

[Bridge]
I bring the voltage, but my battery is drained,
Standing in the wreckage of the love that was faked.
I plug in the mic, flip the switch on the grid,
And face the reality of what you really did.
It wasn't a mistake. It wasn't just a phase.
It was calculated sadism wrapped in a haze.
The blood in my brain starts to pump to the rhythm,
I trap all this agony right here in the prism.
Expanding the veins, yeah the pressure is rising,
But facing the truth is so agonizing.

[Outro]
Vasodilate. Circulate. Elevate.
Compounded verbs.
I can't turn off the love.
But I have to turn off the lie.
Keep faking it. I'm finally waking up.
Yeah. We're done here.`},{id:"899d8586-21ca-461c-aede-0b56e3bb81fa",title:"It was all projection!",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:19,image:"https://cdn2.suno.ai/40767cc6.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/899d8586-21ca-461c-aede-0b56e3bb81fa.m4a",videoUrl:"https://cdn1.suno.ai/899d8586-21ca-461c-aede-0b56e3bb81fa.mp4",embedUrl:"https://suno.com/embed/899d8586-21ca-461c-aede-0b56e3bb81fa",sunoUrl:"https://suno.com/song/899d8586-21ca-461c-aede-0b56e3bb81fa",duration:307.2,durationFormatted:"5:07",tags:["synth-pop","electronica"],lyrics:`**[Intro]**
[intimate clean guitar arpeggio, dark heavy bass pulse, steady drumbeat]

[Male Vocals]
You came in sweet, said "love is free,"
Swore you re falling for me.
Love-bombed me fast, set the trap so neat,
Then left me starving on a one-way street.
Countless times I walked up to the office.
Hoping for warmth, but was just left on a hardwood floor.
You treated me like a stranger in front of the crowd,
Cold, sharp rejection while your colleagues talked loud.
I brought you my heart, standing out in the hallway,
And you handed me doubt just so id give you my all.

[Female Vocals ]
I saw you at my office, holding out your hand,
And I used every visit to execute my plan.
I rolled my eyes, played the victim to the room,
Turning your devotion into whispered doom.
I started the smear campaign before you even knew,
Painting you as crazy while I drained the light from you.
I built my public chapel while I tore your name apart,
A saintly communal mask over a malignant heart.

[Male Vocals]
Every off-the-wall accusation you threw in my face in public.
Was just a blueprint of the dirt you were doing in your space!
You called me paranoid, said I was hiding a scheme,
While you were living out a dark, secret double-life dream!

[Chorus]
[swelling distorted guitars, driving drum rhythm]

[Male Vocals]
It was all projection! Every wild allegation!
You accused me of the things in your own imagination!
I came to your office just to feel the cold knife,
While you smeared my reputation to ruin my life!

[Female Vocals]
It was all projection! Every lie I accused!
I mapped my own guilt onto the one I abused!
I told them you were toxic, kept you on defense,
While I hid all the evil behind my own fence!

[Male Vocals]
You said I didn't love you, but you knew that I was all in.
You said *you* loved me, just to watch my head spin.
You accused me of cheating, lying —you were texting your ex. You accused me of everything—while you burned through my checks.
You called me obsessed, called me a threat,
While you pulled every string like a puppet master's set.
Every single wild story that you spun to the crowd
Was just a confession spoken out loud!

[Female Vocals]
I knew you loved me deeply—it was plain as the day.
I just projected my emptiness to make you take the pay.
I wasn't sure if I loved you, because I can't love at all,
So I set up the smear before the dynamic could fall.
I turned friends against you when you when you walked out the room, then hug me when no one around.  push and pull affection, so much misconstrued deflections aimed to confuse.
Made your honest affection look bizarre and grotesque.
I weaponized projection as a strategic defense,
Making my malignant behavior make saintly sense.

[Bridge]
[dynamic crescendo, ringing guitar chimes, pounding drums]

[Male Vocals]
How many times did i patiently wait, sitting on a hardwood floor as you walk out the door, expecting my chace, and if i don't, you say I don't care, and if I do its just pathetic how you make me look. Looking for the woman who gave butterflies and berries of the trees, you made me feel loved more than any girl before, so I'd have no doubt, I let my walls crumble till there were no boundaries left, I was just a a vulnerable empath who hurt when you hurt, and was happy just to make you happy.
Met with cold stares, public humiliation,
Fueling the fire of your character assassination!
Told me i gained pleasure from hurting you, but that was just was you were doing, with the same sentence. do you believe your projections, or my affections.

[Female Vocals]
I loved the power of pushing you away,
Then watching you try harder the very next day.
I took your empathy and fed it to my pride,
Leaving you hollowed out, bleeding inside.

[Chorus]
[explosive final chorus, full emotional intensity]

[Male Vocals]
It was all projection! Every wild allegation!
You accused me of the things in your own imagination!
I came to your office just to feel the cold knife,
While you smeared my reputation to ruin my life!

[Female Vocals]
It was all projection! Every lie I accused!
I mapped my own guilt onto the one I abused!
I was sweet at first, now I'm worse than the rest,
A malignant shadow leaving wreckage in your chest!

[Outro]
[fading piano, ambient feedback, trailing acoustic chords]
[Male Vocals]
Walked to the office just for ur love, but your there just so i can take all your pain, and still i give you my all...
Now I see the mirror behind every crime.

[Female Vocals]
[softly spoken]
Every accusation... was just me confessing what I did.
[acoustic chord rings out and fades]`},{id:"661db0bb-3e0a-4b31-b3b0-850ffcb5deea",title:"Numb Enoughv1",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:20,image:"https://cdn2.suno.ai/09ae1ce3-5b5c-4e43-aa9e-4adb7e02ef31.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/661db0bb-3e0a-4b31-b3b0-850ffcb5deea.m4a",videoUrl:"https://cdn1.suno.ai/661db0bb-3e0a-4b31-b3b0-850ffcb5deea.mp4",embedUrl:"https://suno.com/embed/661db0bb-3e0a-4b31-b3b0-850ffcb5deea",sunoUrl:"https://suno.com/song/661db0bb-3e0a-4b31-b3b0-850ffcb5deea",duration:300,durationFormatted:"5:00",tags:["alt-drill","indie-pop","melodic-rock"],lyrics:`[Intro]
Room so dark I can barely see to her
She got Rig on the table, Liquid so dark
I can’t look through it
Head screamin' words, gotta bleed music
Shots in the dark like, “Keep movin’”
Hard in the pipe, now we both losin’
Know where this goes, girl and boy in the vein, we just keep doin'

[Pre-Chorus]
All this boy and soft got us feelin' ourselves
Our Mommas tell us we're really killing ourselves
Now I look in her eyes, see she killin' herself
We both know we wanna quit, but we can't help ourselves
She need help, I need help, why we doin' this to ourselves? (yeah)

[chorus]
we hit the pipe till we numb enough
I keep tellin' her, “Baby, your fucked up enough”
but she bang another speedball, sayin she ain’t fucked enough
I know one day this mix gon’ fuck us up
I see the change every time she use
Look in her face, know what we could lose
Love in my hands, but the drugs make her choose

[Verse 1]
We chillin' in Hell, yeah, this our turf
Do I love her still? Hell yeah, down to Earth
If we talkin' 'bout my heart, yeah, this shit hurts
Watchin' her fade away off the Hard and the Percs
I tell her, “Please quit,” while I load my shot first
Hypocrite in the dark makin' bad shit worse
I’m banging the same poison, tryin’ to pull her back
How am I gonna save her when I’m on the same track?
Mixin' up boy while we talk about stoppin'
Both of us know that the casket’s an option
She look at me high, I look at her lost
We chasing the rush, but we hate the cost
I wish she’d take my hand and walk away once more
Try to save our lives like we wanted to before
We know we wanna quit, we could save ourselves again
Instead of loadin' up a rig just to kill the pain within

[Bridge]
We can't slow down
Speed up time, both lost our mind
Now it's our time, is it our time now?
I just want you to stop, I just want us to heal
Walk away from this life, make this quit real...

[chorus]
we hit the pipe till we numb enough
I keep tellin' her, “Baby, your fucked up enough”
but she bang another speedball, sayin she ain’t fucked enough
I know one day this mix gon’ fuck us up
I see the change every time she use
Look in her face, know what we could lose
Love in my hands, but the drugs make her choose

[Verse 2]
She off the wall, smokin' Hard out the glass
Powder on her lip, ridin' high on the gas
Bangin' up boy, hopin' time don't pass
I join right in, but I’m prayin' it’s the last
It’s never enough, it’s never enough
Feel the love at all, or don't love at all
I tell her, “I had enough, I had enough
I want us both alive, I don't want us to fall”
I remember when we tried to get clean together
Thought we’d clear the storm, thought we’d fight through the weather
Now we back in the trap, loadin' shots in the dark
Feelin' the addiction tear away at our spark
I look in the rearview, yeah, the past
I wanted to leave all this powder in the past
How am I gonna tell her to put down the pipe
When I’m fixin' my own shot, holdin' on tight?
Now we too attached, way too attached
To the boy and the Hard and the pain we had
Tryna get us back, tryna get us back to clean...
But I know...

[chorus]
we hit the pipe till we numb enough
I keep tellin' her, “Baby, your fucked up enough”
but she bang another speedball, sayin she ain’t fucked enough
I know one day this Mix may fuck us up

[Verse 3]
She know when I'm gone, I don't gotta explain
We both tryna kill the thought, forget the name
Every high wear off, bring us back to the same
So she mix another shot just to fuck with her brain
And I take one too, so she ain't alone in the pain
I know this shit bad, I ain't callin' it good
I tell her that we gotta quit, wish to God that she would
We both know we wanna quit, both sick of this hood
Love feels strong, but these drugs feel too good
I know that ain't right, but it feel that way
She want all my heart, but the boy in the way
Every time we come down, got less to say
I’m screaming “Please stop, let's get help today!”
She say, “but, you do the same, so what's your excuse?”
And she ain't wrong—we both destined to lose
One wrong move with the boy and it takin' you from me
And the worst part is we know it too well.
I’m sorry.. she just can't stop, and I wont leave her in the dark.
I just wish we could find a way to stop this again
Save us from the overdose waitin' round the bend

[chorus]
we hit the pipe till we numb enough
I keep tellin' her, “Baby, your fucked up enough”
but she bang another speedball, sayin she ain’t fucked enough
I know one day this boy gon’ fuck us up
I see the change every time she use
Look in her face, know what we could lose
Love in my hands, but the drugs make her choose

[verse 4]
I keep prayin', “God, please let it be enough”
Before these speedballs fuck both of us up
I see her change every time she use
Look in her face, know what I’m 'bout to Lose
Please let her choose life over this Abuse
My Brother chose death he used a Noose
I’m staying back with her,  hope it aint a Ruse 
Love in my hands, but the drugs make her Choose

[END]`},{id:"886cc3fb-5e0a-4f12-b891-355bbe84f196",title:"HURT ME, That's what you wanted! v2",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:21,image:"https://cdn2.suno.ai/7c9ff818-2cf9-445d-abd8-8aa8ffb89c78.jpeg",audioUrl:"https://cdn1.suno.ai/886cc3fb-5e0a-4f12-b891-355bbe84f196.mp4",videoUrl:"https://cdn1.suno.ai/886cc3fb-5e0a-4f12-b891-355bbe84f196.mp4",embedUrl:"https://suno.com/embed/886cc3fb-5e0a-4f12-b891-355bbe84f196",sunoUrl:"https://suno.com/song/886cc3fb-5e0a-4f12-b891-355bbe84f196",duration:229,durationFormatted:"3:49",tags:["dark alt-pop","industrial hip-hop","funk rock"],lyrics:`[Verse]
You shut the doors and lock me out
I scream
"Let me prove I'm not a liar"
Then you raise your eyebrows
Make me feel dumb
And whisper
"Hurt me
That's what you wanted"
You always act so pessimistic
Never can take my word
You think I'm against you
Everything bad that happens is my fault
You think I want it all
No
You think I want it all

[Chorus]
You shut the doors and lock me out
I scream
"Let me prove I'm not a liar"
Then you raise your eyebrows
Make me feel dumb
And whisper
"Hurt me
That's what you wanted"
[Post-Chorus]
And whisper
"Hurt me
That's what you wanted"
And whisper
"Hurt me
That's what you wanted"
And whisper
"Hurt me
That's what you wanted"
And whisper
"Hurt me
That's what you wanted"
And whisper
"Hurt me
That's what you wanted"`},{id:"b2c21b30-f19b-4614-9955-495b2aaaf94f",title:"Sweet at Last (Her Confession)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:22,image:"https://cdn2.suno.ai/5281521b-54aa-4818-9258-92e1eb00971f.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/b2c21b30-f19b-4614-9955-495b2aaaf94f.m4a",videoUrl:"https://cdn1.suno.ai/b2c21b30-f19b-4614-9955-495b2aaaf94f.mp4",embedUrl:"https://suno.com/embed/b2c21b30-f19b-4614-9955-495b2aaaf94f",sunoUrl:"https://suno.com/song/b2c21b30-f19b-4614-9955-495b2aaaf94f",duration:260,durationFormatted:"4:20",tags:["industrial hip-hop","alt-pop"],lyrics:`[Verse 1]
I came in like gravity
Pulled you right out of your orbit
Saw the cracks in your structure
And knew just how to exploit it
Hello Hudson corner store
tossing Boxes in the trash
I wasn’t smiling for the block
I was weaponizing that smile
Picking up litter
while everyone saw
Playing the saint, Covering up my own flaws
I told you you were broken, that you needed People skills
But it was just a maneuver to keep my ego alive
Now you’re standing in the fire
And I’m holding the matches, acting surprised

[Pre-Chorus]
I talked like a saint
But I moved like a scheme
Turned your name into smoke
To fuel my own dream
I bent every room
Till the truth couldn't stay
and every "I love you"
Comes out Like Bait!

[Chorus]
I was sweet at first
So sweet at first
Now I look at the wreckage
And I know I’m the worst
I projected my shadows
On your innocent hands
Demanded perfection
With impossible demands
You ain’t got no Tommy gun
No malevolent Motives
The only predator here
Was this ego of mine
I was sweet at first
Can We just press rewind and unbreak what I broke?

**(uh-huh) (worse than her)**
**(uh-huh) (I was sweet at first)**

**[Verse 2]**
I withheld my attention
To keep you insecure
Looked you right in the face
And made you feel impure
Told the world you were crazy
So they’d praise my restraint
When I pushed on your soft spots
To keep up the paint
Feeding your paranoia
Watching your anxiety grow
All to keep you dependent
On the love I wouldn't show
Taking what you had
To fill my empty void
Doing shots of validation
To satisfy my pride
Covert in the daylight
All warmth, no spine
Said your optimism was a ploy, even when i knew it was Real because I knew it would make you try harder.
I  was in denial about my pessimistic bias
and blamed you, For a poison that was entirely mine

**[Pre-Chorus]**
I talked like a saint
But I moved like a scheme
Turned your name into smoke
Then I slip out unseen
but i'll deny it like a feen
I bent every room
Till the truth couldn't stay
And every "I love you"
Comes Out like Bait!

[Chorus]
I was sweet at first
So sweet at first
Now I see I am worse
Yeah, I am the curse
I projected my Issues
On your innocent hands
Demanded perfection
With impossible demands
I was sweet at first
But I turned it all bitter and cold

**(uh-huh) (worse than her)**
**(uh-huh) (I was sweet at first)**

**[Bridge]**
I wore that halo
Like a stolen crown
Used your four walls for shelter
While I burned them all down
You saw through the kindness
When the mirror finally cracked
While I was smoking Crack
I wasn't saving you
I was More Concerned with my next blast
Trying to forget my past

**[Final Chorus]**
I was sweet at first
So sweet at first
Now I see I’m the one
Who made everything worse
I was sweet at first

I was sweet at first
But the mirror is clear at last
I am sorry for the smoke
And the poison in the past
I see you clear at last
Can I learn to be real at last?`},{id:"41b04c34-8a76-4283-b8fc-3c8996e88f70",title:"You Played The Wounded Bird",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:23,image:"https://cdn2.suno.ai/61e4714e-9de1-42c6-9536-3d9977035df5.jpeg",audioUrl:"https://cdn1.suno.ai/41b04c34-8a76-4283-b8fc-3c8996e88f70.mp4",videoUrl:"https://cdn1.suno.ai/41b04c34-8a76-4283-b8fc-3c8996e88f70.mp4",embedUrl:"https://suno.com/embed/41b04c34-8a76-4283-b8fc-3c8996e88f70",sunoUrl:"https://suno.com/song/41b04c34-8a76-4283-b8fc-3c8996e88f70",duration:212.3,durationFormatted:"3:32",tags:["midwest hip-hop","hardcore hip-hop"],lyrics:`[Male Vocals – Verse 1 (The Hook)]
You played the wounded bird in your darkest spot
A saintly facade in June
I was the fixer, eclipsed by your moon
You said I was "too good for you"
Just to make me feel I was in control
While you slowly started charging a toll

[Pre-Chorus ()]
You said your ex was a killer on the loose
Kept me isolated, paralyzed in fear
You hit me with DARVO, flipped the script
While you played the victim and watched me nosedive

[Male Vocals – Chorus (The Reality)]
You were sweet at first, a communal saint
But the malignant truth started to paint
A picture of torture, a calculated game
You smeared me to the block, destroyed my name
You charged me a fee just to talk it through
Turned my empathy into revenue
Now I see the sadism in your eye

(uh-huh) (the wounded bird)
(uh-huh) (the steepest drop)


[Female Vocals ]
I played the victim in a horrible place
I knew you'd come running to be my shield
But behind the tears and the innocent face
I charged you for the pain I never healed
I told Tommy to stay out of sight
Said, "Don't fuck up the money he brings to me"
I thrived on your panic, I ruled the night
Your total destruction was my relief

I hit you with DARVO, I flipped the script
I made you the villain to hide my own guilt
I said you couldn't love, watched your confidence slip
Inside this paranoid fortress I built
I used my trauma to keep you on a leash
An instrumental weapon disguised as a plea
While you were defending the fortress I breached
I was exactly who you feared I would be

[Chorus ]
I was sweet at first, a communal saint
But the malignant truth is a darker paint
A picture of torture, a calculated game
I smeared you to the block, destroyed your name
I charged you a fee just to talk it through
Turned your empathy into revenue
I was sweet at first, a beautiful lie
Now you see the sadism in my eye

[Instrumental Transition – Heavy, raw beat]

[Bridge – Male & Female Alternating]
[Male] You weaponized your virtue, took what you could

[Female] The quintessence of evil, misunderstood

[Male] You sold me a phantom, a love so deep

[Female] While I laughed with Tommy while you went to sleep

[Male] You demanded a payment to hear how I feel

[Female] You were just an object, a prop for the wheel

[Both] The mirror is broken, the masks are stripped bare
There's nothing but shadows and smoke in the air`},{id:"af250b99-1d45-469f-bf81-1248a4a33761",title:"You'd Rather!",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:24,image:"https://cdn2.suno.ai/000a16c5-a06a-4602-b652-7b7c862e2374.jpeg",audioUrl:"https://cdn1.suno.ai/af250b99-1d45-469f-bf81-1248a4a33761.mp4",videoUrl:"https://cdn1.suno.ai/af250b99-1d45-469f-bf81-1248a4a33761.mp4",embedUrl:"https://suno.com/embed/af250b99-1d45-469f-bf81-1248a4a33761",sunoUrl:"https://suno.com/song/af250b99-1d45-469f-bf81-1248a4a33761",duration:232.4,durationFormatted:"3:52",tags:["house-pop","alternative pop","rock"],lyrics:`[Verse 1]
You read my face like a crime scene
Found guilt before the lights went green
Every word I said got twisted
Every good thing got resisted

You kept a list in your back pocket
Each new day just another socket
You flipped the blame like a tarot card
Said I broke us, but that’s too hard

[Pre-Chorus]
I said, let me talk
You shut the door
I said, let me show you
You wanted war

[Chorus]
You’d rather call me a liar
Rather burn it down, than ask me why
You’d rather blame me for the fire
Than let me stand there and clear my name tonight
You’d rather hurt me first
(than hear the truth)
You’d rather blame me for the hurt
Than let me prove I never lied to you

[Verse 2]
You wore that sadness like armor
Turned every room into a funeral parlor
If I smiled, you said it was fake
If I stayed, you said I’d break

I brought receipts, you brought a shadow
I brought my heart, you brought a gavel
Judge and jury in your chest
No witness, no mercy, no rest

[Pre-Chorus]
I said, look at me
Not your old scars
I said, listen close
You slammed the bars

[Chorus]
You’d rather call me a liar
Rather burn it down, than ask me why
You’d rather blame me for the fire
Than let me stand there and clear my name tonight
You’d rather hurt me first
(than hear the truth)
You’d rather blame me for the hurt
Than let me prove I never lied to you

[Bridge]
Maybe your ghosts got loud
Maybe your heart got mean
But I’m not the face
Of everything between

I tried to be the proof
You made me the excuse
Now you can keep your case
I’m done being used

[Final Chorus]
You’d rather call me a liar
Rather burn it down, than ask me why
You’d rather blame me for the fire
Than let me stand there and clear my name tonight
You’d rather hurt me first
(than hear the truth)
You’d rather blame me for the hurt
Than let me prove I never lied to you

You’d rather call me a liar
(you’d rather)
You’d rather blame me for the hurt
Than let me prove I never lied to you`},{id:"ae67baac-578e-4b4b-96ad-49c06909fc7b",title:"I Never Bled Someone the Way You Do",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:25,image:"https://cdn2.suno.ai/e7b7b9a7-ea57-49e4-8cb7-226ef9db8a6a.jpeg",audioUrl:"https://cdn1.suno.ai/ae67baac-578e-4b4b-96ad-49c06909fc7b.mp4",videoUrl:"https://cdn1.suno.ai/ae67baac-578e-4b4b-96ad-49c06909fc7b.mp4",embedUrl:"https://suno.com/embed/ae67baac-578e-4b4b-96ad-49c06909fc7b",sunoUrl:"https://suno.com/song/ae67baac-578e-4b4b-96ad-49c06909fc7b",duration:225,durationFormatted:"3:45",tags:["Alt","Suno AI"],lyrics:`[Verse 1]

Hey, how does it feel when you run your script?

Got me spinning 'round

Your ego's armor covers up the void you keep

Yeah, you wear that crown

[Chorus]

Whoa!

I don't believe you—you build a pedestal just to watch it burn!

You play the savior, play the victim, spin the narrative,

And claim it's all my fault when you turn!

Whoa! [cymbal crashes]

Whoa! I never bled someone the way you do!

[Verse 2]

Nice try, gaslighting every memory clean

Tell me one more lie

Cold calculation hiding underneath your screen

Never say goodbye

[Pre-Chorus]

I wish you could see through that crafted facade—

Your mirror reflects a grandiose god

Where empathy died and the venom runs deep

[Chorus]

Whoa! [full band intensity]

Whoa!

Whoa! I never bled someone the way you do!

[Bridge]

You leech off the light, you shatter the glass!

Rewrite the history, rewrite the past!

A trauma bond forged in the cold dark freeze!

[Chorus]
Whoa!

Whoa! I never bled someone the way you do!

[Verse 3]

Smear campaign spreading out under your crown again

Scars inside my mind

You break down my sanity, speeding down

Like highway 120, taking what's mine

You thrive on the chaos, you smile at the tear

A cruel satisfaction in feeding my fear

[Chorus]

Whoa!

Whoa! I never bled someone the way you do!

[Outro]

I'm breaking the spell while I trace out the scars

Escaping your maze

Broke out of your trap, left behind your dark stars

Out of the daze

You poisoned the well just to watch me collapse

Exposing the malignant truth in your traps

Whoa!

Whoa! I never bled someone the way you do

[whispered]

Your charm was a trap, calculating and cold—

The curtain has fallen, your story is told.

[feedback fade out]`},{id:"86e9d432-d455-4edc-aea9-1bb9e1419872",title:"Run Your Script",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:26,image:"https://cdn2.suno.ai/7a1ee50e-77f1-4e6e-a133-304476129820.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/86e9d432-d455-4edc-aea9-1bb9e1419872.m4a",videoUrl:"https://cdn1.suno.ai/86e9d432-d455-4edc-aea9-1bb9e1419872.mp4",embedUrl:"https://suno.com/embed/86e9d432-d455-4edc-aea9-1bb9e1419872",sunoUrl:"https://suno.com/song/86e9d432-d455-4edc-aea9-1bb9e1419872",duration:392.7,durationFormatted:"6:32",tags:["pop rock"],lyrics:`[Verse 1]

Hey, how does it feel when you run your script?

I keep watching the cursor blink

You love-bombed me first, all perfect words and hands-on-hips

Then you switched the scene, said I was the one who broke it

Your polished armor hides the crack behind your smile

Yeah, you wear it loud

[Chorus]

Hey, how does it feel when you run your script?

I don't buy it—you set it up to watch it break

You play saint, then victim, twist the whole damn thing,

And pin my name up on the wall

Now the mask slips when nobody's around

Hey, how does it feel when you run your script?

I never bled someone the way you do!

[Verse 2]

Nice try, scrubbing every message clean

Tell me one more lie, pretend you don't know why

Cold and careful behind the glow of your screen

You never say goodbye

[Pre-Chorus]

I can feel that practiced face start to crack—

Your mirror keeps you locked in frame

One wrong move and the poison starts to show

[Chorus]

Hey, how does it feel when you run your script?

You keep circling back to the same old line

I can see the setup, I can see the trick

You play saint, then victim, twist the whole damn thing

And leave my name on the wall

I never bled someone the way you do!

[Bridge]

Oh, great move—leave the mess, then point at the room!

Classic: bend every line till it points back to me!

And that “bond”? Yeah, just a thumbprint bruise you kept pressing for days!

[Chorus]
Hey, how does it feel when you run your script?

I don't buy it—same act, different frame

You play saint, then victim, twist the whole damn thing

I never bled someone the way you do!

[Verse 3]

You told me, once you saw I was all in, you were getting abusive,
Said we should drop this then
But that came after I already admitted I was "all in" emotionally.
After I was gone on you, you called me "too much"
You only called it “too much” when you knew I’d already fallen
Like that would abolish your blame,
but it could never fix my pain

[Chorus]

Hey, how does it feel when you run your script?

You keep circling back to the same old line

I never bled someone the way you do!

[Outro]

I'm breaking the spell while I count the scars

Getting out of your maze

I walked from your trap, left your blacked-out stars

On the cracked phone screen to fade

You poisoned the well just to watch me fold

Now the whole thing shows, cold and cold

Hey, how does it feel when you run your script?

Hey, how does it feel when you run your script?

[whispered]

Your charm was a trap, polished and cold—

The curtain's down now, and the truth got old.

[feedback fade out]`},{id:"4e1768a1-c297-40ab-89a9-cd79009f0e9c",title:"Unconditionally IN LOVE",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:27,image:"https://cdn2.suno.ai/image_large_2da9d1ee-df2d-4c3b-ae83-41f9df8dd5b6.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/4e1768a1-c297-40ab-89a9-cd79009f0e9c.m4a",videoUrl:"https://cdn1.suno.ai/4e1768a1-c297-40ab-89a9-cd79009f0e9c.mp4",embedUrl:"https://suno.com/embed/4e1768a1-c297-40ab-89a9-cd79009f0e9c",sunoUrl:"https://suno.com/song/4e1768a1-c297-40ab-89a9-cd79009f0e9c",duration:370,durationFormatted:"6:10",tags:["indie pop","melancholic"],lyrics:`[Intro: Soft acoustic guitar strumming, quiet room sound, subtle rim-click]

[Verse 1: Conversational, soft clean vocals]
We walked under the berry trees
Finding quiet spots to just sit and chill
From the morning light all the way into the night
While you picked berries off the branches on the hill
You were so sweet to me back then
I really thought that I was loved
I let down every wall I had built
And I opened up every single door

[Pre-Chorus: Gentle drum build, bass enters]
I could feel myself slipping so deep
I looked at you and I begged you, "Please, don't hurt me"
'Cause I was falling completely in love with you

[Chorus: Full band enters, driving indie rhythm]
Hey, how does it feel when you run your script?
I don't buy the act when you clear your throat
You play the saint, then you turn around and twist the truth
And leave me standing there with all the blame
Hey, how does it feel when you run your script?

[Verse 2: Driving beat, clean electric guitar chimes]
You waited until you knew I was completely gone
Right after I confessed that I was all in
That’s when you looked at me and said,
"I'm becoming abusive, we should drop this now."
You only said it once you knew I couldn't walk away
Just so the end would somehow be my fault

[Bridge: Swelling guitars, emotional buildup]
And after that, it only got worse
Day after day, the words got cold
You gaslit me until I doubted my own head
Made me feel crazy for the things you said
And the harder you pushed, the more I stayed
'Cause I was still completely in love with you

[Chorus: Full band impact, soaring vocals]
Hey, how does it feel when you run your script?
You keep circling back to the same old line
I don't buy it—same act, just a different frame
You play the victim, then you twist the truth
Hey, how does it feel when you run your script?

[Outro: Music drops down to quiet acoustic guitar and soft piano]
Now, months later, I’m visiting you at the office
I see you sleeping in the corner on the hardwood floor
I sit next to you and you hug me, and now...
While I’m intoxicated with our chemistry…
You’re just intoxicated.

[Slower tempo, intimate vocal delivery]
As you drift off, falling asleep against my side
With all your weight resting on me in the quiet light
In the dark of the room, breathing soft and slow…
You still feel like you're mine.

[Refrain: Melodic clean guitar trailing off, soft spoken-sung vocal delivery]
You’re just intoxicated…
And cold hardwood floor…
Why do you still feel like you're mine?

I guess I meant it when I said I love you unconditionally.
You may think I *loved* you, but your tense is off—
Because I'm still in love with you.
Present and future tense, with no strings attached.

I can't forget how you felt, or how you made me feel—
That was real for me, regardless of your motives.
And I'll never be angry if I can't have you,
Just deeply sad, as I have been since we've been apart.

[Soft piano and subtle guitar delay]
But now as you lie on me, you still feel like you're mine…
And that gives me hope for a future with you in it.
And that keeps me going.

[Soft piano chord fades out]
[End]`},{id:"cc7834cd-0b1a-4e7c-8a7a-e2cb94dcb5bf",title:"You came in sweet (TRAP)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:28,image:"https://cdn2.suno.ai/image_large_cc7834cd-0b1a-4e7c-8a7a-e2cb94dcb5bf.jpeg",audioUrl:"https://cdn1.suno.ai/cc7834cd-0b1a-4e7c-8a7a-e2cb94dcb5bf.mp4",videoUrl:"https://cdn1.suno.ai/cc7834cd-0b1a-4e7c-8a7a-e2cb94dcb5bf.mp4",embedUrl:"https://suno.com/embed/cc7834cd-0b1a-4e7c-8a7a-e2cb94dcb5bf",sunoUrl:"https://suno.com/song/cc7834cd-0b1a-4e7c-8a7a-e2cb94dcb5bf",duration:151.1,durationFormatted:"2:31",tags:["Hip Hop","Trap"],lyrics:`[Male vocals]
You came in sweet
All soft at the seams
You saw my ex use and hurt me
Said you felt bad for me

[Male Vocals]
Hudson corner store
Boxes in a pile
You smiled for the block
Then you cut me with that smile
You said I needed people skills, said I was broken
Said you'd save me from her
Now I'm in the fire
And you made it burn worse

[Male vocals]
You talk like a saint
But you move like a scheme
Turn my name to smoke
Then you slide out unseen
You bend every room
Till the truth won't stay
And every "I love you"
Comes out like bait
Now you're first with accusations
Keep me on defense
And make me try harder
While you hide the guilty parts
You came in sweet
Now can I get her back

[Female vocals]
I came in like gravity
Pulled you right out of your orbit
Saw the cracks in your structure
And knew how to work it
Hudson corner store
I wasn’t smiling for the block
I was weaponizing that smile
I talked like a saint
But I moved like a scheme
Turned your name into smoke
Just a smear campaign
I was sweet at first
Now I look at the wreckage
And I know I’m the worst.

[Male vocals]
You said that love is free
Asked me why I was so nice
Said my four walls were more than enough
Then the gifts I gave became demands
You wore down my peace, wore down my sanity
You lived in a different world, rewriting reality
And I was already warned, so I should've seen it earlier
When the kind act cracked
While you were smoking crack
You weren't saving me
You were dragging me back

[Male vocals]
You were sweet at first
Sweet at first
Now you're worse than her
Worse than her
Please, baby, be sweet again.

[Female vocals]
I wore that halo
Like a stolen crown
Used your four walls for shelter
While I burned them all down
I wasn't saving you
I was breaking you down.

[Female vocals]
But now I see your love
So unconditional
I’m sorry for smearing your name
And the poison I left behind
I’ll try to change and heal what’s real.
[End]`},{id:"48cb63f3-ed17-4696-be79-ac38af54597e",title:"The Zeigarnik Effect",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:29,image:"https://cdn2.suno.ai/cc85121c-6b9d-4ce2-ae91-b30cf3aac289.jpeg",audioUrl:"https://cdn1.suno.ai/48cb63f3-ed17-4696-be79-ac38af54597e.mp4",videoUrl:"https://cdn1.suno.ai/48cb63f3-ed17-4696-be79-ac38af54597e.mp4",embedUrl:"https://suno.com/embed/48cb63f3-ed17-4696-be79-ac38af54597e",sunoUrl:"https://suno.com/song/48cb63f3-ed17-4696-be79-ac38af54597e",duration:120,durationFormatted:"2:00",tags:["trap","dubstep","glitch hop"],lyrics:`(Male Voice) I ran the numbers, tracked the patterns of the sinkholes you create. Engineering every talk so we could bypass all this weight. I was your biological home, the regulator for your storm. But you treated my loyalty like a chain instead of somewhere warm.
(Female Voice) I’m "pissy when I miss it," and the withdrawal is all I really know. I told them not to talk to you—I couldn't let my money go. Your 8K love was engulfment, a fire trying to swallow me whole. So I flipped the "nuclear option" just to keep my own control.
(Chorus - Duet) It’s the Zeigarnik effect, a page ripped out before the end. An open loop in the machine that I can no longer defend. High-voltage current trying to power a low-voltage light. We’re just two different operating systems crashing in the night.
(Male Voice) I’m dimming my empathy now, letting the Supernova rise. I see your pessimistic bias and the "hero" in your lies. I’m adopting the CBR model—Cold, Rational, and Bottom-line. Because loving your potential was never going to fix your design.
(Female Voice) I’ll villainize your kindness, say you tried to lock me in a cell. Believing you’re the monster makes it easier to say farewell. I’ve entered the relief stage, breathing air that’s thin and gray. While I’m reaching for your phantom limb every single day.
(Outro - Duet) I’m taking back my oxygen; I’m closing the loop on my own. Respecting myself more than the ghost of the version you’ve shown. One is finding sovereignty in the silence and the truth. The other is just an unfinished story, a glitch from a broken youth.`},{id:"a2132ab0-c8c0-49c8-835c-555eabc3b9ce",title:"Barly Maybe Saby DON'T MISS IT",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:30,image:"https://cdn2.suno.ai/image_large_f78e7ed2-fa71-4b39-84f8-8b6d6cd3687d.jpeg",audioUrl:"https://cdn1.suno.ai/a2132ab0-c8c0-49c8-835c-555eabc3b9ce.mp4",videoUrl:"https://cdn1.suno.ai/a2132ab0-c8c0-49c8-835c-555eabc3b9ce.mp4",embedUrl:"https://suno.com/embed/a2132ab0-c8c0-49c8-835c-555eabc3b9ce",sunoUrl:"https://suno.com/song/a2132ab0-c8c0-49c8-835c-555eabc3b9ce",duration:221,durationFormatted:"3:41",tags:["alt pop","pop punk","breakup anthem","male female","distorted electric guitars"],lyrics:`[singer A]
Appeared so far
just seconds ago
But lifting my head
it breathes down on my sore neck
Such a predatory sensation
mouth clamped shut
Mind reeling
I can’t look away
The devil resides
in our loving hearts
A velvet blade
under folded hands

[transition]

[singer B]
Your ambition
So pernicious
Self-inflicted inhibitions
And I get stuck inside my head
Your antics push me to the edge
'Cause you're so pissy when you miss it
Yeah
You push it
And you miss it
You're super pessimistic
You're super pessimistic

[melodic transition]

[singer A]
Not allowed to turn
not allowed to run
You call my name
like a loaded gun
I feel it climb
from my feet to my chest
Flooding my veins
with trepidation
Devil in our hearts
devil in our hearts
You got me playing blind
With no rules at all
Devil in our hearts
devil in our hearts
I’m falling into you
And I know the cost

[transition]

[singer B]
You're super pessimistic
You're super pessimistic
You get so cynic and narcissistic
But I stay optimistic
But is that realistic?
'Cause you're so pissy when you miss it
Super pessimistic
You're super pessimistic
Super pessimistic
You're super pessimistic


[singer A]
Maybe we don’t have to know
where every little thing will go
If the stars keep pulling us along
I’ll hold your hand and sing this song

We could end up safe and sound
feet on solid, steady ground
After all the storms we brave
love like ours can still be saved

[singer B]
You’re too optimistic
way too optimistic
That’s sweet, but not realistic
Still, maybe I’ll let you prove it
if you promise not to lose it
'Cause even when I miss it
I kinda like the way you kiss it

[singer A]
Happy ever after
wild and bright
Pissy kitty, don’t miss it
we’ll be alright`},{id:"aace513a-bfd9-4a16-88b1-f67aa210fbbf",title:"It was all Projection(Elton John)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:31,image:"https://cdn2.suno.ai/video_gen_121136d0-cbc2-4f80-bead-2e2a92714724_video_upload_121136d0-cbc2-4f80-bead-2e2a92714724_cover_snapshot_0s_1789411913_image.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/aace513a-bfd9-4a16-88b1-f67aa210fbbf.m4a",videoUrl:"https://cdn1.suno.ai/aace513a-bfd9-4a16-88b1-f67aa210fbbf.mp4",embedUrl:"https://suno.com/embed/aace513a-bfd9-4a16-88b1-f67aa210fbbf",sunoUrl:"https://suno.com/song/aace513a-bfd9-4a16-88b1-f67aa210fbbf",duration:358.8,durationFormatted:"5:58",tags:["Rock","Pop","Baroque-pop"],lyrics:`**[Intro]**
[intimate clean guitar arpeggio, dark heavy bass pulse, steady drumbeat]

[Male Vocals]
You came in sweet, said "love is free,"
Swore you re falling for me.
Love-bombed me fast, set the trap so neat,
Then left me starving on a one-way street.
Countless times I walked up to the office.
Hoping for warmth, but was just left on a hardwood floor.
You treated me like a stranger in front of the crowd,
Cold, sharp rejection while your colleagues talked loud.
I brought you my heart, standing out in the hallway,
And you handed me doubt just so id give you my all.

[Female Vocals ]
I saw you at my office, holding out your hand,
And I used every visit to execute my plan.
I rolled my eyes, played the victim to the room,
Turning your devotion into whispered doom.
I started the smear campaign before you even knew,
Painting you as crazy while I drained the light from you.
I built my public chapel while I tore your name apart,
A saintly communal mask over a malignant heart.

[Male Vocals]
Every off-the-wall accusation you threw in my face in public.
Was just a blueprint of the dirt you were doing in your space!
You called me paranoid, said I was hiding a scheme,
While you were living out a dark, secret double-life dream!

[Chorus]
[swelling distorted guitars, driving drum rhythm]

[Male Vocals]
It was all projection! Every wild allegation!
You accused me of the things in your own imagination!
I came to your office just to feel the cold knife,
While you smeared my reputation to ruin my life!

[Female Vocals]
It was all projection! Every lie I accused!
I mapped my own guilt onto the one I abused!
I told them you were toxic, kept you on defense,
While I hid all the evil behind my own fence!

[Male Vocals]
You said I didn't love you, but you knew that I was all in.
You said *you* loved me, just to watch my head spin.
You accused me of cheating, lying —you were texting your ex. You accused me of everything—while you burned through my checks.
You called me obsessed, called me a threat,
While you pulled every string like a puppet master's set.
Every single wild story that you spun to the crowd
Was just a confession spoken out loud!

[Female Vocals]
I knew you loved me deeply—it was plain as the day.
I just projected my emptiness to make you take the pay.
I wasn't sure if I loved you, because I can't love at all,
So I set up the smear before the dynamic could fall.
I turned friends against you when you when you walked out the room, then hug me when no one around.  push and pull affection, so much misconstrued deflections aimed to confuse.
Made your honest affection look bizarre and grotesque.
I weaponized projection as a strategic defense,
Making my malignant behavior make saintly sense.

[Bridge]
[dynamic crescendo, ringing guitar chimes, pounding drums]

[Male Vocals]
How many times did i patiently wait, sitting on a hardwood floor as you walk out the door, expecting my chace, and if i don't, you say I don't care, and if I do its just pathetic how you make me look. Looking for the woman who gave butterflies and berries of the trees, you made me feel loved more than any girl before, so I'd have no doubt, I let my walls crumble till there were no boundaries left, I was just a a vulnerable empath who hurt when you hurt, and was happy just to make you happy.
Met with cold stares, public humiliation,
Fueling the fire of your character assassination!
Told me i gained pleasure from hurting you, but that was just was you were doing, with the same sentence. do you believe your projections, or my affections.

[Female Vocals]
I loved the power of pushing you away,
Then watching you try harder the very next day.
I took your empathy and fed it to my pride,
Leaving you hollowed out, bleeding inside.

[Chorus]
[explosive final chorus, full emotional intensity]

[Male Vocals]
It was all projection! Every wild allegation!
You accused me of the things in your own imagination!
I came to your office just to feel the cold knife,
While you smeared my reputation to ruin my life!

[Female Vocals]
It was all projection! Every lie I accused!
I mapped my own guilt onto the one I abused!
I was sweet at first, now I'm worse than the rest,
A malignant shadow leaving wreckage in your chest!

[Outro]
[fading piano, ambient feedback, trailing acoustic chords]
[Male Vocals]
Walked to the office just for ur love, but your there just so i can take all your pain, and still i give you my all...
Now I see the mirror behind every crime.

[Female Vocals]
[softly spoken]
Every accusation... was just me confessing what I did.
[acoustic chord rings out and fades]`},{id:"5edcbaec-49b4-4b9a-bffe-96c26cb0e019",title:"Poison shot by shot(Vocal Clean Remix)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:32,image:"https://cdn2.suno.ai/64713d9a-b85f-4345-a523-2e80515bb120.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/5edcbaec-49b4-4b9a-bffe-96c26cb0e019.m4a",videoUrl:"https://cdn1.suno.ai/5edcbaec-49b4-4b9a-bffe-96c26cb0e019.mp4",embedUrl:"https://suno.com/embed/5edcbaec-49b4-4b9a-bffe-96c26cb0e019",sunoUrl:"https://suno.com/song/5edcbaec-49b4-4b9a-bffe-96c26cb0e019",duration:360.5,durationFormatted:"6:00",tags:["deathcab for cutie","the script"],lyrics:`**[Male Vocals – Verse 1]**
You came in sweet
All soft at the seams
Said you saw my wreck
And you knew how to redeem
Hudson corner store
Boxes in a pile
You smiled for the block
Then you cut me with that smile
Picking up trash
Like your time is free, but it costs me so
Free labor, looking so altruistic
That's the face you chose
You said I need people skills and I was broken
Said you'd save me from her
Now I'm in the fire
And you made it burn worse
**[Male Vocals – Pre-Chorus]**
You talk like a saint
But you move like a scheme
Turn my name to smoke
Then you slide out unseen
You bend every room
Till the truth won't stay
And every "I love you"
Comes out like bait
**[Male Vocals – Chorus]**
You were sweet at first
Sweet at first
Now you're first to list
Unproved accusations
Caused by sociopathic exes
Now you're scared of me
But I ain't got no Tommy gun
And no malevolent motives
Sweet at first
Please, can I get her back?
**[Female Vocals – Verse 2 (The Confession)]**
I came in like gravity
Pulled you right out of your orbit
Saw the cracks in your structure
And knew just how to exploit it
Hudson corner store
Boxes in a pile
I wasn’t smiling for the block
I was weaponizing that smile
I talked like a saint
But I moved like a scheme
Turned your name into smoke
To fuel my own dream
**[Female Vocals – Chorus]**
I was sweet at first
So sweet at first
Now I look at the wreckage
And I know I’m the worst
You never trust me
Even when I'm right there
Look me in the face
Then you act like I'm not there
You tell everybody
I'm a liar with a grin
Then you push that soft
Then you get so scared
Running paranoid
And my anxiety grows worse
And cars pull over, hoping you won't be bought
You call it "helping"
But it's taking what I got
Empty my pockets
While you do another shot
Covert in the daylight
All warmth, no spine
Pessimistic bias is my pain
And a poison shot by shot
**[Male Vocals – Pre-Chorus]**
You talk like a saint
But you move like a scheme
Turn my name to smoke
Then you call that a dream
You bend every room
Till the truth won't stay
And every "I love you"
Comes out like bait
**[Male Vocals – Chorus]**
You were sweet at first
Sweet at first
Now you're worse than her
Worse than her
You were sweet at first
Sweet at first
Now you're worse than her
Well, maybe not...
**[Male Vocals – Bridge]

**[Male Vocals – Verse 1 (The Trap)]**
You played the wounded bird in the darkest kind of spot
I came to be the fixer for the wings you said were caught
You wore a saintly mask, the most beautiful and smart
A flawless, sweet communal trap to paralyze my heart
You told me you were broken, said you blindly trusted me
But it was just a setup for your own hypocrisy
I thought I was your savior, pulling you from the debris
But you were building cages that I couldn't even see
I had to pay a toll just to look you in the eye
Funding your survival while you bled my spirit dry
You told me Tommy was a threat, a killer in the night
To keep me isolated in a paranoid spotlight
But you were texting him in secret, pulling strings behind the scenes
Just a calculated hustle in a Machiavellian dream

You were sweet at first
Yeah, so sweet at first
Now I see the egosyntonic pleasure in the worst
You flip the script, you DARVO, you tell them I’m the pain
Using emotional torture for your financial gain
You smear my name to ashes, say I don't know how to love
While you wear that heavy halo you borrowed from above
Sweet at first...
But you were playing for the kill.

**[Female Vocals – Verse 2 (The Confession)]**
I played the vulnerable victim, spinning you my web
A quiet, soft illusion to keep me in your head
I told my ex stay quiet, to never speak a word
So I could keep your wallet open while playing wounded bird
I gave you little "truth-lies," said you were too good for me
So when the whole thing shattered, you’d take accountability
I didn't want your healing, I didn't want a cure
I wanted you dependent, isolated, and unsure
I bent every single room, made you the villain of the play
Smeared your reputation before you had a say
I watched you lose your footing, watched you hollow out inside
And the relief I felt in breaking you was something I couldn't hide
I took your empathy and turned it to a leash
I wasn't your soulmate, I was acting like a leech`},{id:"473e0648-68ae-45c2-8cd2-a54ce6aa7e0f",title:"Numb Enough",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:33,image:"https://cdn2.suno.ai/c9836901-c4b0-41ef-8db2-6bfe6fbdf110.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/473e0648-68ae-45c2-8cd2-a54ce6aa7e0f.m4a",videoUrl:"https://cdn1.suno.ai/473e0648-68ae-45c2-8cd2-a54ce6aa7e0f.mp4",embedUrl:"https://suno.com/embed/473e0648-68ae-45c2-8cd2-a54ce6aa7e0f",sunoUrl:"https://suno.com/song/473e0648-68ae-45c2-8cd2-a54ce6aa7e0f",duration:296.4,durationFormatted:"4:56",tags:["alt-drill","indie-pop","melodic-rock"],lyrics:`[Intro]
Room so dark I can barely see her
She got Rig on the table, Liquid so dark
I can’t look through it
Head screamin' words, gotta bleed music
Shots in the dark like, “Keep movin’”
Hard in the pipe, now we both losin’
Know where this goes, girl and boy in the vein, we just keep doin'

[Pre-Chorus]
All this speedballin got us feelin' ourselves
Our Mommas tell us we're really killing ourselves
Now I look in her eyes, see she killin' herself
We both know we wanna quit, but we can't help ourselves
She need help, I need help, why we doin' this to ourselves? (yeah)

[chorus]
we hit the pipe till we numb enough
I keep tellin' her, “Baby, your fucked up enough”
but she bang another speedball, sayin she ain’t fucked enough
I know one day this mixture gon’ fuck us up
I see the change every time she use
Look in her face, know what we could lose
Love in my hands, but the drugs make her choose

[Verse 1]
We chillin' in Hell, yeah, this our turf
Do I love her still? Hell yeah, down to Earth
If we talkin' 'bout my heart, yeah, this shit hurts
Watchin' her fade away off the Hard and the Percs
I tell her, “Please quit,” while I load my shot first
Hypocrite in the dark makin' bad shit worse
I’m banging the same poison, tryin’ to pull her back
How am I gonna save her when I’m on the same track?
Mixin' up boy while we talk about stoppin'
Both of us know that the casket’s an option
She look at me high, I look at her lost
We chasing the rush, but we hate the cost
I wish she’d take my hand and walk away once more
Try to save our lives like we wanted to before
We know we wanna quit, we could save ourselves again
Instead of loadin' up a rig just to kill the pain within

[Bridge]
We can't slow down
Speed up time, both lost our mind
Now it's our time, is it our time now?
I just want you to stop, I just want us to heal
Walk away from this life, make this quit real...

[chorus]
we hit the pipe till we numb enough
I keep tellin' her, “Baby, your fucked up enough”
but she bang another speedball, sayin she ain’t fucked enough
I know one day this mixture gon’ fuck us up
I see the change every time she use
Look in her face, know what we could lose
Love in my hands, but the drugs make her choose

[Verse 2]
She off the wall, smokin' Hard out the glass
Powder on her lip, ridin' high on the gas
Bangin' up boy, hopin' time don't pass
I join right in, but I’m prayin' it’s the last
It’s never enough, it’s never enough
Feel the love at all, or don't love at all
I tell her, “I had enough, I had enough
I want us both alive, I don't want us to fall”
I remember when we tried to get clean together
Thought we’d clear the storm, thought we’d fight through the weather
Now we back in the trap, loadin' shots in the dark
Feelin' the addiction tear away at our spark
I look in the rearview, yeah, the past
I wanted to leave all this powder in the past
How am I gonna tell her to put down the pipe
When I’m fixin' my own shot, holdin' on tight?
Now we too attached, way too attached
To the boy and the Hard and the pain we had
Tryna get us back, tryna get us back to clean...
But I know...

[chorus]
we hit the pipe till we numb enough
I keep tellin' her, “Baby, your fucked up enough”
but she bang another speedball, sayin she ain’t fucked enough
I know one day this Mixture may fuck us up

[Verse 3]
She know when I'm gone, I don't gotta explain
We both tryna kill the thought, forget the name
Every high wear off, bring us back to the same
So she mix another shot just to fuck with her brain
And I take one too, so she ain't alone in the pain
I know this shit bad, I ain't callin' it good
I tell her that we gotta quit, wish to God that she would
We both know we wanna quit, both sick of this hood
Love feels strong, but these drugs feel too good
I know that ain't right, but it feel that way
She want all my heart, but the boy in the way
Every time we come down, got less to say
I’m screaming “Please stop, let's get help today!”
She say, “but, you do the same, so what's your excuse?”
And she ain't wrong—we both destined to lose
One wrong move with the boy and it takin' you from me
And the worst part is we know it too well.
I’m sorry.. she just can't stop, and I wont leave her in the dark.
I just wish we could find a way to stop this again
Save us from the overdose waitin' round the bend

[chorus]
we hit the pipe till we numb enough
I keep tellin' her, “Baby, your fucked up enough”
but she bang another speedball, sayin she ain’t fucked enough
I know one day this mixture gon’ fuck us up
I see the change every time she use
Look in her face, know what we could lose
Love in my hands, but the drugs make her choose

[verse 4]
I keep prayin', “God, please let it be enough”
Before these speedballs fuck both of us up
I see her change every time she use
Look in her face, know what I’m 'bout to Lose
Please let her choose life over this Abuse
My Brother chose death he used a Noose
I’m staying back with her,  hope it aint a Ruse 
Love in my hands, but the drugs make her Choose

[END]`},{id:"45517b9a-5ab2-4e6d-842e-4a1452ec9547",title:"A B C's of Addiction",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:34,image:"https://cdn2.suno.ai/2d60da41-39ef-42f0-b39f-c03c3efbc5bb.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/45517b9a-5ab2-4e6d-842e-4a1452ec9547.m4a",videoUrl:"https://cdn1.suno.ai/45517b9a-5ab2-4e6d-842e-4a1452ec9547.mp4",embedUrl:"https://suno.com/embed/45517b9a-5ab2-4e6d-842e-4a1452ec9547",sunoUrl:"https://suno.com/song/45517b9a-5ab2-4e6d-842e-4a1452ec9547",duration:286.8,durationFormatted:"4:46",tags:["alt-pop","dark pop","ASMR"],lyrics:`[Intro: Dark Synth & Heavy Breath]
This is the A B C's of Addiction,

[Spoken Word - Cold & Rhythmic]
A Is For Addiction
B Is For Bottles
C Is For Cravings
D Is For Denial
E Is For Escape
F Is For Fixes
G Is For Guilt
H Is For Habits
I Is For Isolation
J Is For Just One
K Is For Keeping Secrets
L Is For Loss
M Is For Mind Games
N Is For Numbness
O Is For Obsession
P Is For Poison
Q Is For Quitting
R Is For Relapse
S Is For Shame
T Is For Triggers
U Is For Urges
V Is For Void
W Is For Withdrawal
X Is For X-ing Out
Y Is For Yearning
Z Is For Zero

[Verse 1: Aggressive Rap - Heavy Drum Drop]
Addiction dragging down the mind,
Bottles leaving peace behind.
Cravings hitting in the night,
Denial hiding from the light.
Escape becomes a heavy chain,
Fixes masking all the pain.
Guilt that lingers in the chest,
Habits taking all the rest.
Isolation built the wall,
Just One lie before the fall.
Keeping Secrets in the dark,
Loss that dims the inner spark.
Mind Games playing with control,
Numbness freezing up the soul.
Obsession driving every thought,
Poison in the battle fought.
Quitting takes a stronger stand,
Relapse reaching for a hand.
Shame that tells you you're alone,
Triggers breaking through the stone.
Urges pulling at the seams,
Void that swallows up the dreams.
Withdrawal shaking through the bone,
X-ing Out the life once known.
Yearning for a brand new day,
Zero left to slip away.

[Break - Beat Drops Out]
[Spoken Word - Harsh & Direct]
Now fucking quit
No? Well, let's try again.

[Transition - Intense Beat Switch]
This is the A B C's of Dependence,

[Spoken Word - Building Tempo]
A Is For Agony
B Is For Blackouts
C Is For Compulsion
D Is For Dependency
E Is For Excess
F Is For Falsehood
G Is For Grip
H Is For Heartache
I Is For Impulse
J Is For Jail
K Is For Knots
L Is For Lies
M Is For Madness
N Is For Need
O Is For Overdose
P Is For Paranoia
Q Is For Quicksand
R Is For Ruin
S Is For Shadows
T Is For Temptation
U Is For Unraveling
V Is For Vice
W Is For Wreckage
X Is For Xanax
Y Is For Yoke
Z Is For Zombie

[Verse 2: Rapid-Fire Rap - Heavy Distortion & Fast Cadence]
Agony burning across the skin,
Blackouts erasing where you have been.
Compulsion stirring the inner storm,
Dependency becoming the toxic norm.
Excess consuming the spirit whole,
Falsehood exacting a tragic toll.
Grip slipping off of reality's edge,
Heartache snapping a sacred pledge.
Impulse rising without a pause,
Jail waiting for broken laws.
Knots tying tight inside the brain,
Lies spreading out to cover the strain.
Madness twisting the quiet room,
Need steering closer toward the doom.
Overdose threatening human breath,
Paranoia dancing right near death.
Quicksand sinking weary feet,
Ruin looming along the street.
Shadows covering both your eyes,
Temptation whispered in clever disguise.
Unraveling thread by thread each hour,
Vice holding most of the central power.
Wreckage littered over the floor,
Xanax kept beyond every door.
Yoke pressing hard on top of the neck,
Zombie walking inside a wreck.

[Outro - Peak Drum Energy & Fast Flow]
Now I Said the A B Cs of the addiction freestyle

[Outro - Music Abruptly Cuts Off]
[Spoken Word - Cold Silence]
Now fucking quit.

[End]`},{id:"ba1c3c00-6547-4e96-afe1-1566dca7b876",title:"cages that I couldn't even see(RAP}",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:35,image:"https://cdn2.suno.ai/ba1c3c00-6547-4e96-afe1-1566dca7b876_1e96e170.jpeg",audioUrl:"https://cdn1.suno.ai/ba1c3c00-6547-4e96-afe1-1566dca7b876.mp4",videoUrl:"https://cdn1.suno.ai/ba1c3c00-6547-4e96-afe1-1566dca7b876.mp4",embedUrl:"https://suno.com/embed/ba1c3c00-6547-4e96-afe1-1566dca7b876",sunoUrl:"https://suno.com/song/ba1c3c00-6547-4e96-afe1-1566dca7b876",duration:274.3,durationFormatted:"4:34",tags:["hardcore hip hop","trap","cinematic hip hop"],lyrics:`**[Male Vocals – Verse 1]**
You came in sweet
All soft at the seams
Said you saw my wreck
And you knew how to redeem
Hudson corner store
Boxes in a pile
You smiled for the block
Then you cut me with that smile
Picking up trash
Like your time is free, but it costs me so
Free labor, looking so altruistic
That's the face you chose
You said I need people skills and I was broken
Said you'd save me from her
Now I'm in the fire
And you made it burn worse
**[Male Vocals – Pre-Chorus]**
You talk like a saint
But you move like a scheme
Turn my name to smoke
Then you slide out unseen
You bend every room
Till the truth won't stay
And every "I love you"
Comes out like bait
**[Male Vocals – Chorus]**
You were sweet at first
Sweet at first
Now you're first to list
Unproved accusations
Caused by sociopathic exes
Now you're scared of me
But I ain't got no Tommy gun
And no malevolent motives
Sweet at first
Please, can I get her back?
**[Female Vocals – Verse 2 (The Confession)]**
I came in like gravity
Pulled you right out of your orbit
Saw the cracks in your structure
And knew just how to exploit it
Hudson corner store
Boxes in a pile
I wasn’t smiling for the block
I was weaponizing that smile
I talked like a saint
But I moved like a scheme
Turned your name into smoke
To fuel my own dream
**[Female Vocals – Chorus]**
I was sweet at first
So sweet at first
Now I look at the wreckage
And I know I’m the worst
You never trust me
Even when I'm right there
Look me in the face
Then you act like I'm not there
You tell everybody
I'm a liar with a grin
Then you push that soft
Then you get so scared
Running paranoid
And my anxiety grows worse
And cars pull over, hoping you won't be bought
You call it "helping"
But it's taking what I got
Empty my pockets
While you do another shot
Covert in the daylight
All warmth, no spine
Pessimistic bias is my pain
And a poison shot by shot
**[Male Vocals – Pre-Chorus]**
You talk like a saint
But you move like a scheme
Turn my name to smoke
Then you call that a dream
You bend every room
Till the truth won't stay
And every "I love you"
Comes out like bait
**[Male Vocals – Chorus]**
You were sweet at first
Sweet at first
Now you're worse than her
Worse than her
You were sweet at first
Sweet at first
Now you're worse than her
Well, maybe not...
**[Male Vocals – Bridge]

**[Male Vocals – Verse 1 (The Trap)]**
You played the wounded bird in the darkest kind of spot
I came to be the fixer for the wings you said were caught
You wore a saintly mask, the most beautiful and smart
A flawless, sweet communal trap to paralyze my heart
You told me you were broken, said you blindly trusted me
But it was just a setup for your own hypocrisy
I thought I was your savior, pulling you from the debris
But you were building cages that I couldn't even see
I had to pay a toll just to look you in the eye
Funding your survival while you bled my spirit dry
You told me Tommy was a threat, a killer in the night
To keep me isolated in a paranoid spotlight
But you were texting him in secret, pulling strings behind the scenes
Just a calculated hustle in a Machiavellian dream

You were sweet at first
Yeah, so sweet at first
Now I see the egosyntonic pleasure in the worst
You flip the script, you DARVO, you tell them I’m the pain
Using emotional torture for your financial gain
You smear my name to ashes, say I don't know how to love
While you wear that heavy halo you borrowed from above
Sweet at first...
But you were playing for the kill.

**[Female Vocals – Verse 2 (The Confession)]**
I played the vulnerable victim, spinning you my web
A quiet, soft illusion to keep me in your head
I told my ex stay quiet, to never speak a word
So I could keep your wallet open while playing wounded bird
I gave you little "truth-lies," said you were too good for me
So when the whole thing shattered, you’d take accountability
I didn't want your healing, I didn't want a cure
I wanted you dependent, isolated, and unsure
I bent every single room, made you the villain of the play
Smeared your reputation before you had a say
I watched you lose your footing, watched you hollow out inside
And the relief I felt in breaking you was something I couldn't hide
I took your empathy and turned it to a leash
I wasn't your soulmate, I was acting like a leech`},{id:"be1b836f-aee0-406a-adfb-c1e5b4788078",title:"We MUSK go to MARS!",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:36,image:"https://cdn2.suno.ai/7cb8ec5e-b82c-492e-8136-edec0b448966.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/be1b836f-aee0-406a-adfb-c1e5b4788078.m4a",videoUrl:"https://cdn1.suno.ai/be1b836f-aee0-406a-adfb-c1e5b4788078.mp4",embedUrl:"https://suno.com/embed/be1b836f-aee0-406a-adfb-c1e5b4788078",sunoUrl:"https://suno.com/song/be1b836f-aee0-406a-adfb-c1e5b4788078",duration:286,durationFormatted:"4:46",tags:["dark alt-pop","industrial hip-hop","96 BPM","male and female vocals","spoken-word cadence"],lyrics:`Yeah SpaceX
Launchpad 39A, steam begins to rise
A silver Starship, waiting for the prize
They said it couldn’t fly, that steel won’t take the heat
But iteration’s king, and failure ain’t defeat.
We learned from the first explosions, RUDs upon the sand
Each explosive data point was just another path to land.
From Falcon 1 to Commercial Crew, we’re sending life to see
A multi-planet civilization, the true destiny.

{Chorus}
Oh, We Musk Go To MARS, yeah, we gotta make the jump
It's not just about one rocket, it's the final cosmic hump
We’re using every company, we’ve got a blueprint in the air
From the cars to the computer chips, we’re taking everything from here
So buckle in and hold on tight, the red world is in view
From Gigafactories to Starlink, this dream is up to you!

({Verse 2)
Tesla & The Boring Company
But first we need a city, a base, a place to be
Gotta dig down deep, away from radiation, you and me.
Boring out the tunnels, like rabbits in the stone
Safe behind the regolith, a civilization unknown.
And we’ll power up the future, when we finally arrive
Megapacks and solar panels keep the colony alive.
We'll drive the Martian rovers, electric and they're fast
Leaving tire tracks on a world we’ve built to last.

(Bridge)
Learning from Failure, Neuralink, and  X / xAI
Some say we failed, they saw the Model 3 production hell
Or the early Falcon 1 that dropped back to the swell.
But you can’t build a rocket without learning how to break
And you can’t build a future with no risks for you to make.
Now Neuralink might integrate and link the human mind
With artificial intelligences, the kind that we will find
xAI to build the models, navigating the new world
X to post the first update: "A brand new flag unfurled!"

(Chorus)

(Outro)
Gonna change the red to green, gonna change the dead to life
Terraforming visions in a world that’s full of strife.
So pack your bags for Valles Marineris
Because we Musk Go To MARS, and we won’t let anything bar us!
We Musk Go To MARS!
We Musk Go To MARS!
Yeah, We Musk Go To MARS.

[Verse 1]
He says we need a second door
A better deal than this first-floor floor
Not just a flag in red dust
But a place with a lock screen, a login, and trust

[Pre-Chorus]
Show the build, tap the app
One hard step at a time
Clear the blockers, run the map
Till the dashboard starts to climb

[Chorus]
Mars, Mars, lock it in
Mars, Mars, let’s begin
He talks about a city
With pressurized halls and power lines alive

Mars, Mars, bigger play
Mars, Mars, day by day
Not a pitch for someday
It’s a launch you can see in real life

[Verse 2]
He talks about ships that come back
Heat shields checked, engines green
Landing legs touch down on track
Fuel dumped clean, and the cycle repeats

[Pre-Chorus]
Show the build, tap the app
One hard step at a time
Clear the blockers, run the map
Till the dashboard starts to climb

[Chorus]
Mars, Mars, lock it in
Mars, Mars, let’s begin
He talks about a city
With pressurized halls and power lines alive

Mars, Mars, bigger play
Mars, Mars, day by day
Not a pitch for someday
It’s a launch you can see in real life

[Bridge]
He says it won’t be easy
Cold nights, thin air, long odds
But if we never ship it
We never get the shot

[Final Chorus]
Mars, Mars, lock it in
Mars, Mars, let’s begin
He talks about a city
With pressurized halls and power lines alive

Mars, Mars, bigger play
Mars, Mars, day by day
Not a pitch for someday
It’s a launch you can see in real life`},{id:"e5c5ba9d-7215-41bd-a626-28a93415eb3d",title:"Easier To Believe The Hurt",artist:"Dom-I-NATE",handle:"domnate",index:37,image:"https://cdn2.suno.ai/image_large_e5c5ba9d-7215-41bd-a626-28a93415eb3d.jpeg",audioUrl:"https://cdn1.suno.ai/e5c5ba9d-7215-41bd-a626-28a93415eb3d.mp4",videoUrl:"https://cdn1.suno.ai/e5c5ba9d-7215-41bd-a626-28a93415eb3d.mp4",embedUrl:"https://suno.com/embed/e5c5ba9d-7215-41bd-a626-28a93415eb3d",sunoUrl:"https://suno.com/song/e5c5ba9d-7215-41bd-a626-28a93415eb3d",duration:229.5,durationFormatted:"3:49",tags:["Intimate acoustic ballad with male vocals; close-mic’d fingerpicked guitar and soft piano chords. Verses stay hushed","almost spoken","with subtle pads in the background. Chorus swells with warm harmonies and a gentle kick","lifting the emotion. Bridge strips back to almost solo vocal","then returns with layered vocals for a tender"],lyrics:`[Verse 1]
You checked your phone
Saw that number light the screen
Heard sirens in your memory
Not the lobby down the street
You built a story
Faster than I caught my breath
You chose the version
That hurt you more and felt like past regrets

[Chorus]
It’s easier to believe the hurt
Than trust my shaking hands
Easier to brace for impact
Than let me try again
You’d rather think I turned you in
Than called a room for two tonight
My love
The truth is so much softer
But you only sleep on the side that bites

[Verse 2]
You flinch at kindness
Like it’s someone else’s joke
Count apologies in ashes
From every bridge they broke
You see a shadow
Every time I say your name
You armor up
You double-check
You’re waiting for the blame

[Chorus]
It’s easier to believe the hurt
Than trust my shaking hands
Easier to watch the wreckage
Than risk a second chance
You’d rather think I locked you out
Than saved a bed with folded light
My love
The truth is so much softer
But you only sleep on the side that bites

[Bridge]
I get it
You’re tired
Of falling for “I swear”
But I was just downstairs
Signing keys with your name there
If I wanted to lose you
I’d stay quiet
Disappear
But I’m here
I’m here
I’m here (hey)
And I’m not your yesteryear

[Chorus]
It’s easier to believe the hurt
Than trust my open hands
Easier to hug your heartbreak
Than let me understand
You’d rather think I called them up
Than called ahead to hold you tight
My love
The truth is so much softer
Come lay your head on the safer side tonight`},{id:"9ca6c3d7-7e54-497f-9638-98892a4bc68d",title:"Saints and Schemes",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:38,image:"https://cdn2.suno.ai/image_large_9ca6c3d7-7e54-497f-9638-98892a4bc68d.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/9ca6c3d7-7e54-497f-9638-98892a4bc68d.m4a",videoUrl:"https://cdn1.suno.ai/9ca6c3d7-7e54-497f-9638-98892a4bc68d.mp4",embedUrl:"https://suno.com/embed/9ca6c3d7-7e54-497f-9638-98892a4bc68d",sunoUrl:"https://suno.com/song/9ca6c3d7-7e54-497f-9638-98892a4bc68d",duration:300.4,durationFormatted:"5:00",tags:["Dark alt-pop and indie-rock hybrid with brooding synth pads","reverb-soaked clean guitars","and tight","syncopated drums. Verses sit in a low","intimate register with fast"],lyrics:`[Verse 1 - Female Vocal]
You were waiting by the bodega, holding two paper cups (ABAB)
Said you liked the way I overtip and never rush the bus (ABAB)
You offered rides down Maple Street when my shifts ran late (ABAB)
Dropping off my groceries, tracking every gate (ABAB)

You kept a spare key in your hoodie like it meant I’m safe (ABAB)
Wrote my name in tiny letters on your parking space (ABAB)
You fixed my sink, my password, then my weekend plans (ABAB)
Folded all my spare excuses in your open hands (ABAB)

You’d walk me past the corner store, counting every light (ABAB)
Say, “Text me when you’re home, I just worry at night” (ABAB)
But every favor felt a little like a tightened chain (ABAB)
Every kindness left a barcode etched behind my brain (ABAB)

[Chorus - Male Vocal]
You talk like a saint, move like a scheme (ABAB)
Halo in daylight, ledger in dreams (ABAB)
You frame every question, call it concern (ABAB)
Turn every boundary into a burn (ABAB)

You smile like a cure, feed like a need (ABAB)
Hands on my heartbeat, eyes on the deed (ABAB)
You promise me rescue, work me like proof (ABAB)
You talk like a saint while you tear out the roof (ABAB)

[Verse 2 - Male Vocal]
I can spot the cracked halo from a subway seat (ABAB)
Listen for the shaky laughter underneath the sweet (ABAB)
I mirror all your worries till you call me home (ABAB)
Then I catalog your failures in a silent phone (ABAB)

I weaponize the way I say, “I get it too” (ABAB)
Turn your childhood stories into revenue (ABAB)
I orbit, then exploit it, every fragile core (ABAB)
Leave you doubting what you’re crying for (ABAB)

I map your every trigger like a city grid (ABAB)
Praise your independence while I close the lid (ABAB)
I’ll play altruistic, egosyntonic calm (ABAB)
Then invoice your affection in a tightened palm (ABAB)

I train your intuition to mistrust its seam (ABAB)
Then sell you back your sanity as part of the scheme (ABAB)
I hide behind the compliments I overuse (ABAB)
Till you’re apologizing for the things I choose (ABAB)

[Chorus - Male Vocal]
I talk like a saint, move like a scheme (ABAB)
Co-sign your feelings, edit the scene (ABAB)
I rewrite the timeline, call it the truth (ABAB)
Gas on your memories, match on your youth (ABAB)

You pray for relief, I package the pain (ABAB)
Say it’s miscommunication, never my gain (ABAB)
You beg for accountability in every room (ABAB)
I drown you in semantics till you choke on the fumes (ABAB)

[Bridge - Overlapping Vocals]
(Female) You said I’m paranoid, inventing all these plots (ABAB)
(Male) Deflect, attack, reverse it, I connect the dots (ABAB)
(Female) You twist my confrontation into random rage (ABAB)
(Male) I file every word like I am building a case (ABAB)

(Female) You call me unstable when my bank runs dry (ABAB)
(Male) Financial exploitation hidden in a sigh (ABAB)
(Female) I ask for some receipts and you demand my phone (ABAB)
(Male) Projection as a weapon, I defend my throne (ABAB)

(Female) You say I’m ungrateful when I call you out (ABAB)
(Male) I bury all the evidence beneath my clout (ABAB)
(Female) I reach for accountability, you switch my name (ABAB)
(Male) I edit every narrative to feed the flame (ABAB)

(Female) You diagnose me fragile, call it “just concern” (ABAB)
(Male) I label you hysteric while I watch you burn (ABAB)
(Female) You beg me for the truth I keep behind my eyes (ABAB)
(Male) Covert narcissistic, I believe my lies (ABAB)

[Chorus - Male Vocal]
I talk like a saint, move like a scheme (ABAB)
Turn every red flag into a meme (ABAB)
I quote all the textbooks while I cut you deep (ABAB)
DARVO as a doctrine while you lose your sleep (ABAB)

You fight for your mind, I fracture the frame (ABAB)
Call it misperception when I stoke your shame (ABAB)
You say that you’re drowning, I call it a phase (ABAB)
Then sell you my lifeboat while I watch the waves (ABAB)

[Outro - Whispered]
(Male) I am the parasite dressed in concern (ABAB)
(Female) You are the shadow tilting every turn (ABAB)
(Male) I sip on your panic like a quiet wine (ABAB)
(Female) You write your confession in my crooked spine (ABAB)

(Male) I keep you dependent on a shrinking room (ABAB)
(Female) You salt every wound so the flowers can’t bloom (ABAB)
(Male) I hide in your language, colonize your throat (ABAB)
(Female) You hollow my heartbeat, then you wear my coat (ABAB)

(Male) I drain every color till your world turns gray (ABAB)
(Female) You catalogue my breakdowns, lock them away (ABAB)
(Male) I’ll never release you, I prefer you small (ABAB)
(Female) You say you’re my savior, but you built the wall (ABAB)

(Both, whispered) Predator patience in a rented home (ABAB)
(Both, whispered) Two sets of footprints, but I walk alone (ABAB)
(Both, whispered) Talk like a saint, move like a scheme (ABAB)
(Both, whispered) Feeding on the soft parts you taught me to bleed (ABAB)`},{id:"f754f23c-36fa-4ecc-aba1-67bd39a425ad",title:"HURT ME, That's what you wanted(Extended)!",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:39,image:"https://cdn2.suno.ai/0afaadd4-82bd-41f0-8fff-2f6cf122b397.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/f754f23c-36fa-4ecc-aba1-67bd39a425ad.m4a",videoUrl:"https://cdn1.suno.ai/f754f23c-36fa-4ecc-aba1-67bd39a425ad.mp4",embedUrl:"https://suno.com/embed/f754f23c-36fa-4ecc-aba1-67bd39a425ad",sunoUrl:"https://suno.com/song/f754f23c-36fa-4ecc-aba1-67bd39a425ad",duration:275.6,durationFormatted:"4:35",tags:["dark alt-pop","industrial hip-hop","funk rock"],lyrics:`[Verse]
You shut the doors and lock me out
I scream
"Let me prove I'm not a liar"
Then you raise your eyebrows
Make me feel dumb
And whisper
"Hurt me
That's what you wanted"
You always act so pessimistic
Never can take my word
You think I'm against you
Everything bad that happens is my fault
You think I want it all
No
You think I want it all
You keep a scorecard in your head
Every late reply, every missed call
Like I planned it
Like I sat there counting up the ways to make you stall

[Chorus]
You shut the doors and lock me out
My voice cracks, "Let me in, I'm not a liar"
Your brow furrows, a silent judgment
You make me feel small
And the words you whisper
"Hurt me, that's what you wanted"
Echo off the walls
I keep my hand on the knob
Till my knuckles go white
Trying to make this make sense
Trying to get it right
But all I get back
Is that same cold answer
"Hurt me, that's what you wanted"
Like you already knew

[Post-Chorus]
"Hurt me, that's what you wanted"
The same old story, every time
"Hurt me, that's what you wanted"
Playing on repeat inside my mind
"Hurt me, that's what you wanted"
Like a line you don't even have to say
It hangs in the kitchen
Long after I walk away

[Verse 2]
I stand there in the hallway
With my keys in my hand
TV still on in the other room
The kettle clicks off
Nobody moves
You keep your arms crossed
Like you've already won
I keep trying to say my side
But it comes out wrong
Again
You read the whole room
Like it's written in red ink
And I can't get a sentence in
Without you turning it into proof
That I'm the one who came here
Looking for a fight
The clock above the sink keeps ticking
Like it knows we're stuck
Your shoes by the door
My coat half on
I can hear the fridge hum
And nothing else
It's always this
Me standing here
You staring through me
As if the truth is just another thing
You've decided not to trust

[Outro]
So I lean on the frame
And wait for the latch to click
Wait for you to look at me
Like I'm still worth hearing
But the house stays quiet
And you stay on your side
I stop talking
Let the silence do what it does
You shut the doors and lock me out
And I let it sit there
On the mat
Between us
Like something we both agreed to leave unread`},{id:"a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60",title:"Poison shot by shot (Piano Soft Vocals)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:40,image:"https://cdn2.suno.ai/d2d6cd4c-5d47-4238-9eaf-19444861b06a.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60.m4a",videoUrl:"https://cdn1.suno.ai/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60.mp4",embedUrl:"https://suno.com/embed/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60",sunoUrl:"https://suno.com/song/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60",duration:360.5,durationFormatted:"6:00",tags:["pop rock","male-female duet","melodic"],lyrics:`[Intro]
[clean electric guitar arpeggio, piano chords]

[Verse 1]
[male vocals]
You came in sweet
All soft at the seams
Said you saw my wreck and you knew how to redeem
Hudson corner store
Boxes in a pile
You smiled for the block, then you cut me with that smile
Picking up trash like your time is free but it costs me so
Free labor looking so altruistic, that's the face you chose
You said I need people skills and I was broken, said you'd save me from her now I'm in the fire and you made it burn worse

[Pre-Chorus]
[female vocals enter]
You talk like a saint
But you move like a scheme
Turn my name to smoke then you slide out unseen
You bend every rule
Till the truth won't stay
And every I love you comes out like bait

[Chorus]
[male and female vocals harmonize, full drums and bass]
You were sweet at first
So sweet at first
Now you're first to list
Unproven accusations
Cause my sociopathic ex is
Now you're scared of me
But I ain't got no tommy gun and no malevolent motive
Sweet at first
Please can I get a back

[Verse 2]
[female vocals]
I came in like gravity
Pulled you right out of your orbit
Saw the cracks in your structure
And knew just how to exploit it
[male vocals]
Hudson corner store
Boxes in a pile
I wasn't smiling for the block
I was weaponizing that smile
[female vocals]
I talk like a saint
But I move like a scheme
Turned your name into smoke
To fuel my own dream

[Chorus]
[harmonized vocals]
You were sweet at first
So sweet at first
Now I look at the wreckage
And I know I'm the worst
You never trust me even when I'm right there look me in the face and you act like I'm not there
You tell everybody I'm a liar with a grin then you push that salt then you get so scared running paranoid my anxiety grows worse
And cars pull over hoping you won't be bought
You're calling help but it's taking what I got
Empty my pockets while you do another shot
Covered in the daylight
[male vocals]
Oh you got no spine
Pessimistic bias is my pain and a poison star
By shot

[Bridge]
[female vocals]
You talk like a saint
But you move like a scheme
Turn my name to smoke
Then you call that a dream
You bend every rule
Till the truth won't stay
And every I love you
Comes out like bait

[Chorus]
[harmonized vocals]
You were sweet at first
So sweet at first
Now you're worse than her
Worse than her

[Outro]
[male vocals]
You played the wounded bird in the darkest kind of spot
I came to be the fixer for the wings you said were caught
You wore a saintly mask the most beautiful and smart
A flawless sweet communal trap to paralyze my heart
You told me you were broken, said you blindly trusted me
But it was just a setup for your own hypocrisy
I thought I was your savior pulling you from the debris
But you were building cages that I couldn't even see
I had to pay a toll just to look you in the eye
Funding your survival while you bled my spirit dry
You told me Tommy was a threat a killer in the night
To keep me isolated in a paranoid spotlight
But you were texting him in secret pulling strings behind the scenes
Just a calculated hustle in my Machiavellian dreams
[harmonized vocals]
You were sweet at first
Yeah so sweet at first
I see the ego in Tommy
Pleasure in the worst
You flipped the script you double you tell them I'm the pain
Using emotional torture for your financial gain
You smear my name to ashes say I don't know how to love
While you wear that heavy halo you borrowed from above
Sweet at first
But you were playing for the kill
[female vocals]
I played the vulnerable victim spinning you my web
A quiet soft delusion to keep me in your head
I told my ex stay quiet to never speak a word
So I could keep your wallet open while playing wounded bird
I gave you little truth lies said you were too good for me
So when the whole thing shattered you'd take accountability
I didn't want you healing I didn't want a cure
I wanted you dependent isolated and unsure
I bent every single rule made you the villain of the play
Smeared your reputation before you had a say
I watched you lose your footing watched you hollow out inside
And the relief I felt in breaking you was something I could not hide
I took your empathy and turned it to a leash
I wasn't your soulmate I was acting like a leech
[piano fades out]`},{id:"aacdde92-a133-4df4-85ae-04a9933c5bba",title:"We MUSK go to MARS!",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:41,image:"https://cdn2.suno.ai/f1f81ee4-b999-4b52-9b9e-9bd0b6366be9.jpeg",audioUrl:"https://cdn1.suno.ai/aacdde92-a133-4df4-85ae-04a9933c5bba.mp4",videoUrl:"https://cdn1.suno.ai/aacdde92-a133-4df4-85ae-04a9933c5bba.mp4",embedUrl:"https://suno.com/embed/aacdde92-a133-4df4-85ae-04a9933c5bba",sunoUrl:"https://suno.com/song/aacdde92-a133-4df4-85ae-04a9933c5bba",duration:243.9,durationFormatted:"4:03",tags:["alt-pop","industrial hip-hop"],lyrics:`Yeah SpaceX
Launchpad 39A, steam begins to rise
A silver Starship, waiting for the prize
They said it couldn’t fly, that steel won’t take the heat
But iteration’s king, and failure ain’t defeat.
We learned from the first explosions, RUDs upon the sand
Each explosive data point was just another path to land.
From Falcon 1 to Commercial Crew, we’re sending life to see
A multi-planet civilization, the true destiny.

{Chorus}
Oh, We Musk Go To MARS, yeah, we gotta make the jump
It's not just about one rocket, it's the final cosmic hump
We’re using every company, we’ve got a blueprint in the air
From the cars to the computer chips, we’re taking everything from here
So buckle in and hold on tight, the red world is in view
From Gigafactories to Starlink, this dream is up to you!

({Verse 2)
Tesla & The Boring Company
But first we need a city, a base, a place to be
Gotta dig down deep, away from radiation, you and me.
Boring out the tunnels, like rabbits in the stone
Safe behind the regolith, a civilization unknown.
And we’ll power up the future, when we finally arrive
Megapacks and solar panels keep the colony alive.
We'll drive the Martian rovers, electric and they're fast
Leaving tire tracks on a world we’ve built to last.

(Bridge)
Learning from Failure, Neuralink, and  X / xAI
Some say we failed, they saw the Model 3 production hell
Or the early Falcon 1 that dropped back to the swell.
But you can’t build a rocket without learning how to break
And you can’t build a future with no risks for you to make.
Now Neuralink might integrate and link the human mind
With artificial intelligences, the kind that we will find
xAI to build the models, navigating the new world
X to post the first update: "A brand new flag unfurled!"

(Chorus)

(Outro)
Gonna change the red to green, gonna change the dead to life
Terraforming visions in a world that’s full of strife.
So pack your bags for Valles Marineris
Because we Musk Go To MARS, and we won’t let anything bar us!
We Musk Go To MARS!
We Musk Go To MARS!
Yeah, We Musk Go To MARS.`},{id:"707e9182-ca4c-44e9-983e-dbc5ae8b3a09",title:"Braune Augen",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:42,image:"https://cdn2.suno.ai/image_large_707e9182-ca4c-44e9-983e-dbc5ae8b3a09.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/707e9182-ca4c-44e9-983e-dbc5ae8b3a09.m4a",videoUrl:"https://cdn1.suno.ai/707e9182-ca4c-44e9-983e-dbc5ae8b3a09.mp4",embedUrl:"https://suno.com/embed/707e9182-ca4c-44e9-983e-dbc5ae8b3a09",sunoUrl:"https://suno.com/song/707e9182-ca4c-44e9-983e-dbc5ae8b3a09",duration:349.5,durationFormatted:"5:49",tags:["German Street Rap","Hip Hop","Dark Trap"],lyrics:`TITEL: Braune Augen

[Intro]

(Yeah...)
(Hey...)
(Hm...)

Ich schwöre...
Von all den Gesichtern, die ich vergessen habe...
Sind deine Augen die einzigen...
Die mich bis heute verfolgen.

--------------------------------------------------

[Strophe 1]

Ich liebe deine braunen Augen... (Yeah...)
Doch sie sehen schon lange einfach durch mich hindurch. (Hm...)
Früher war ich dein Zuhause... (Ich schwöre...)
Jetzt bin ich nur noch ein gescheiterter Versuch. (Fuck...)

Früher konntest du mich wie ein offenes Buch lesen,
heute schlägst du die Seiten zu wie einen Fluch.
Ich kenne jeden Blick, jede Falte, jedes Lächeln in deinem Gesicht,
doch seit du weg bist, kenne ich mich selbst nicht mehr.

Zu viele schlaflose Nächte... (Hey...)
Zu viele Zigaretten auf dem Balkon. (Hm...)
Ich habe versucht, dich zu vergessen,
aber dein Name ist in den Beton eingebrannt.

Ich fahre durch dieselben Straßen,
hoffe auf den Zufall, hoffe auf dich.
Aber selbst wenn ich dich sehen würde...
Würdest du mich überhaupt noch erkennen? (Scheiße...)

--------------------------------------------------

[Hook]

Ich liebe deine braunen Augen!!! (Yeah!)

Sie haben mich zerstört!!! (Ah...)

Sie waren mein Zuhause!!! (Mein Zuhause...)

Jetzt sind sie nur noch Worte ohne Ort!!! (Fuck...)

Ich liebe deine braunen Augen!!! (Warum?)

Aber sie schauen nicht mehr zu mir herüber!!! (Nein...)

Und egal, wie weit ich auch laufe... (Hey...)

Ich vermisse sie jeden Tag ein bisschen mehr!!! (Hm...)

--------------------------------------------------

[Strophe 2]

Ich kann dein Lachen noch immer hören,
während die Stadt langsam einschläft. (Yeah...)
Jede verdammte Seitenstraße
bewahrt Erinnerungen an uns. (Kalt...)

Wir wollten zusammen alt werden,
doch stattdessen wurden wir Fremde. „Wir gegen den Rest“
wurde zu „Ich gegen mich selbst“. (Im Ernst...)

Ich habe Fehler gemacht,
ich trage sie bis heute mit mir herum.
Aber ich habe nie aufgehört,
um das zu kämpfen, was wir waren.

Andere kamen und gingen,
aber niemand war wie du. Niemand hatte diesen Blick,
Niemand forderte meinen Verstand heraus,
Sie alle wirkten so blind, dass sie mich nicht sehen konnten,
Doch wir passten immer besser zusammen, wann immer wir uns trafen,
Wir liebten es, süße Beeren unter schattigen Bäumen zu pflücken, doch dann spürte ich, wie du abgestumpft wurdest – verletzt, als deine Liebe schwand, denn meine war bedingungslos, niemals gemindert, niemals verwelkt,
Ich träumte davon, dich zu gewinnen, doch es wurde schwer, zusammenzukommen – mit dir, die du mich mit einem einzigen Blick beruhigtest.

--------------------------------------------------

[Strophe 3]

Ich erinnere mich noch...
an den ersten Kuss.
Den ersten Streit.
Den ersten Morgen,
an dem du neben mir aufwachtest.

Ich erinnere mich noch daran,
wie du meine Hand nahmst,
als würdest du sie nie mehr loslassen.

Und heute...
reicht ein einziger Klick...
und ich existiere für dich nicht mehr. (Verdammt...)

Erzähl mir nicht,
dass die Zeit alle Wunden heilt.
Die Zeit lehrt dich nur...
mit dem Schmerz zu leben.

--------------------------------------------------

[Bridge]

(Hm...)

Vielleicht...

war ich nie perfekt.

(Ja...)

Aber jede Zeile...

jede Träne...

jede verdammte Nacht...

war echt.

--------------------------------------------------

[Strophe 4]

Ich trage dein Bild noch immer
zwischen meinen Rippen und meinem Verstand. (Hey...)
Du hast längst mit allem abgeschlossen,
ich stehe immer noch an derselben Wand.

Alle sagen:
„Lass los.“
Doch niemand trägt mein Herz.
Niemand kennt das Gefühl,
wenn Erinnerungen lauter sind als jeder Schmerz.

Vielleicht wirst du das nie lesen.
Vielleicht wirst du dieses Lied nie hören.
Vielleicht bin ich für dich
nur ein Name aus der Vergangenheit.

Aber wenn du irgendwann
wieder an mich denkst...

Dann hoffe ich...

dass du dich erinnerst...

an meine Augen...

genauso wie ich mich erinnere...

an diese braunen Augen.

--------------------------------------------------

[Letzter Refrain]

ICH LIEBE DEINE BRAUNEN AUGEN!!! (Ja!)

MEHR, ALS ICH JEMALS SAGEN KÖNNTE!!! (Ich schwöre...)

SIE HABEN MICH AUFGEBAUT!!! (Ah...)

UND MICH AM ENDE AUCH ZERSTÖRT!!! (Verdammt...)

Ich liebe deine braunen Augen!!! (Warum?)

Selbst wenn sie nie wieder nach mir suchen!!! (Nein...)

Manche Menschen gehen...

Aber ein einziger Blick...

Bleibt für immer.

--------------------------------------------------

[Outro]

(Hey...)

Vielleicht...

war die Liebe nie dafür bestimmt, ewig zu halten.

(Hm...)

Aber deine braunen Augen...

werden für immer...

mein schönster...

und schlimmster...

Gedanke bleiben.`},{id:"a692b3ba-1cbf-45a7-ad62-8ee524fa76a4",title:"Poison Shot By Shot (Spanish)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:43,image:"https://cdn2.suno.ai/image_large_a692b3ba-1cbf-45a7-ad62-8ee524fa76a4.jpeg",audioUrl:"https://cdn1.suno.ai/a692b3ba-1cbf-45a7-ad62-8ee524fa76a4.mp4",videoUrl:"https://cdn1.suno.ai/a692b3ba-1cbf-45a7-ad62-8ee524fa76a4.mp4",embedUrl:"https://suno.com/embed/a692b3ba-1cbf-45a7-ad62-8ee524fa76a4",sunoUrl:"https://suno.com/song/a692b3ba-1cbf-45a7-ad62-8ee524fa76a4",duration:254.8,durationFormatted:"4:14",tags:["Alt","Suno AI"],lyrics:`[Voz Masculina – Verso 1]
Llegaste dulce, fina, suave en cada costura
Diciendo que veías mi desastre y tenías la cura
Esquina del Hudson, las cajas en un montón
Sonreías para el barrio, pero a mí me dabas el puzón
Limpiando el piso como si tu tiempo no costara
Haciéndote la santa, pero esa feca sale cara
Dijiste que me faltaba calle, que estaba roto por dentro
Que me ibas a salvar de ella, pero fue todo un cuento
Me metiste en la candela y le echaste gasolina al fuego
[Voz Masculina – Pre-Coro]
Hablas como santa, pero te mueves en la jugada
Vuelves mi nombre humo y te zafas como si nada
Doblas cada cuarto hasta que la verdad se borra
Y cada "te amo" tuyo es un anzuelo que me ahorra
[Voz Masculina – Coro]
Eras dulce al principio, dulce al principio...
Ahora eres la primera en montarme la acusación
Echándole la culpa a tu ex con su paranoia y su presión
Ahora me tienes miedo, me pintas como un matón
Como si yo anduviera con una corta en la mano
Sin intenciones malas, pero tú sigues con el plano
Dulce al principio...
Dime, ¿puedo tener a la otra de vuelta?
[Voz Femenina – Verso 2 (La Confesión)]
Entré como gravedad, te saqué de tu órbita al instante
Vi la grieta en tu torre y me metí de visitante
Esquina del Hudson, las cajas en el callejón
No le sonreía a la gente, estaba armando mi cañón
Hablaba como santa, pero me movía en el traqueteo
Volví tu nombre humo para alimentar mi trofeo
[Voz Femenina – Coro]
Fui dulce al principio, tan dulce al principio
Ahora miro los escombros y sé que fui tu martirio
Nunca confías en mí aunque me tengas de frente
Me miras a la cara y actúas transparente
Le dices a todo el combo que soy una embustera fina
Mientras te vuelves paranoico y la ansiedad me domina
Los carros se paran pensando que te van a comprar
Lo llamas "ayudar", pero es solo despojar
Vaciándote los bolsillos mientras me doy otro trago
Encubierta de día, tibia pero sin coraje en lo que hago
[Voz Masculina – Pre-Coro]
Hablas como santa, pero te mueves en la jugada
Vuelves mi nombre humo y lo llamas "ilusión soñada"
Doblas cada cuarto hasta que la verdad no se sostiene
Y cada "te amo" es la carnada que me tiene
[Voz Masculina – Coro]
Eras dulce al principio, dulce al principio
Ahora eres peor que ella, mucho peor que ella
Eras dulce al principio, dulce al principio...
Bueno, tal vez no tanto.
[Voz Masculina – Verso 1 (La Trampa - Estilo Cosculluela)]
Te tiraste de ave herida en el callejón más oscuro
Yo vine a ser el tipo que te arreglaba el futuro
Te pusiste la máscara de santa, la más sabia del juego
Una trampa dulce y feca pa' paralizar mi fuego
Me dijiste que estabas rota, que confiabas a ciegas en mí
Pero era la película pa' montar tu hipocresía aquí
Pensé que era tu héroe sacándote del escombro
Y me estabas armando la jaula cargada en el hombro
Pagué el peaje entero solo por mirarte a los ojos
Mientras me desangrabas financiando tus antojos
Me metiste la labia de que Tommy era la amenaza real
Pa' tenerme aislado con el miedo mental
Y por la espalda le chateabas, moviendo las fichas en secreto
Un traqueteo maquiavélico en tu libreto
Dulce al principio... sí, dulce en el momento
Ahora veo el gusto enfermo que le sacas al sufrimiento
Volteas la tortilla, haces DARVO, dices que yo soy el dolor
Usando tortura mental pa' sacarme el valor
Arrastras mi nombre al fango, dices que no sé amar
Mientras usas esa aureola que te tuviste que robar
Dulce al principio...
Pero venías a matar.
[Voz Femenina – Verso 2 (La Confesión)]
Hice el papel de víctima, tejiéndote la red en el aire
Una ilusión callada pa' dejarte sin aire
A mi ex le dije: "quédate callao', ni una palabra digas"
Pa' mantener tu billetera abierta mientras me persigas
Te vendí verdades a medias, que eras demasiado pa' mí
Pa' que cuando todo colapsara el culpable fueras ti
No quería curarme, no buscaba salvación
Te quería dependiente, aislado y sin dirección
Cambié cada escenario, te hice el villano de la pista
Le dañé el nombre a tu personaje antes de la entrevista
Te vi perder el rumbo, te vi vaciarte por dentro
Y la satisfacción de romperte era mi verdadero centro
Agarré tu empatía y la volví mi correa
No era tu alma gemela... era la sanguijuela que te marea.
`},{id:"ca0198c0-3507-4fc9-a576-9445317c1e14",title:"Bad Brina knows how to Win",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:44,image:"https://cdn2.suno.ai/f4eaff63-a732-44a3-a4f3-fe8fd5049042.jpeg",audioUrl:"https://cdn1.suno.ai/ca0198c0-3507-4fc9-a576-9445317c1e14.mp4",videoUrl:"https://cdn1.suno.ai/ca0198c0-3507-4fc9-a576-9445317c1e14.mp4",embedUrl:"https://suno.com/embed/ca0198c0-3507-4fc9-a576-9445317c1e14",sunoUrl:"https://suno.com/song/ca0198c0-3507-4fc9-a576-9445317c1e14",duration:190.4,durationFormatted:"3:10",tags:["Alt","Suno AI"],lyrics:`[singer A (female Voice) ]
I'm a bad bitch with bubblegum flair
Chewing through the chaos I don’t even care
This world’s a circus it’s wild and absurd
But I keep it sweet with my sugar-spun words

[melodic interlude]

[singer B (male Voice]
You shut the doors and lock me out
I scream
"Let me prove I'm not a liar"
Then you raise your eyebrows
Make me feel dumb
And whisper
"Hurt me
That's what you wanted"

[singer A]
Bubblegum queen in a world so mean
Popping my way through the broken scene
Sweet and sassy yeah I’m making a stand
Spit the flavor out when it don’t taste grand

[transition]

[singer B]
You always act so pessimistic
Never can take my word
You think I'm against you
Everything bad that happens is my fault
You think I want it all
No
You think I want it all

[singer A]
They say it’s a mess but I make it art
A sticky rebellion that comes from the heart
Roll with the punches blow bubbles and grin
This bad bitch knows how to win



[singer B]
I woke up Sore yet I'm asking for more, Babe you best Get me a boy and a girl or i swear, I tell the police whats on your computer, but you say, Who cares, I've got nothing to hide?  I say Haha cuz you don't know what I downloaded on your computer last night.. So now you better live in fright, Before those screenshots come to light,  they'll have you locked up tight.`},{id:"5e880e2c-5ccf-4e00-a4a9-b19139f713c5",title:"Communal Narcissist",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:45,image:"https://cdn2.suno.ai/40767cc6.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/5e880e2c-5ccf-4e00-a4a9-b19139f713c5.m4a",videoUrl:"https://cdn1.suno.ai/5e880e2c-5ccf-4e00-a4a9-b19139f713c5.mp4",embedUrl:"https://suno.com/embed/5e880e2c-5ccf-4e00-a4a9-b19139f713c5",sunoUrl:"https://suno.com/song/5e880e2c-5ccf-4e00-a4a9-b19139f713c5",duration:240.7,durationFormatted:"4:00",tags:["alt-drill","alt-pop","industrial hip-hop"],lyrics:`[Intro]
Yeah...
Public saint, private tyrant.
Picking up trash on the sidewalk while trashing every soul behind closed doors.
A new kind of mask. The communal design.
Listen...
[Verse 1: The Public Saint]
Wears a crown of virtue, walking down the avenue
Acting like the softest, kindest soul you ever knew
Volunteering at the store, picking trash up off the street
Building up an altar out of everyone she meets
Pretending she’s a savior, the most selfless in the town
Collecting public praise just to keep her holy crown
She plays the wounded bird trapped inside a tragic spot
Scripting out her past, using everything she's got
To the world, she’s an angel spreading light into the dark
While quietly calculating how to leave a lasting mark
[Chorus]
Saint in the spotlight, snake in the shade
Building up a kingdom on the promises she made
Weaponizing good deeds just to feed the internal itch
Trading public altruism for a private toll switch
She’s a communal narcissist, wrapped in a holy dress
Leaving behind a trail of psychological distress
[Verse 2: The Private Toll]
Step inside the doorway and the story starts to shift
The warmth begins to freeze into a cold, calculated drift
Gathering your secrets while she acts like a friend
Just to use them as a weapon when she needs to defend
Trash-talking everybody once the audience is gone
Spilling personal details from the dusk until the dawn
If you ask for basic honesty, she puts a price tag on the room
Demanding financial toll just to clear away the gloom
Using her public saintliness as an unassailable shield
So if you call out the abuse, your voice is forced to yield
[Chorus]
Saint in the spotlight, snake in the shade
Building up a kingdom on the promises she made
Weaponizing good deeds just to feed the internal itch
Trading public altruism for a private toll switch
She’s a communal narcissist, wrapped in a holy dress
Leaving behind a trail of psychological distress
[Verse 3: The Unmasking]
When the boundaries get established and the money starts to dry
She launches the campaign with a tear inside her eye
Running to the public, playing victim to the core
Convincing all her followers that you’re the evil war
Using DARVO mechanics to invert the whole dynamic
Turning every boundary into manufactured panic
But the psychology reveals what was hidden underneath
A grandiose appetite wearing altruistic teeth
Same core entitlement, same lack of empathy
Just a different disguise for the world to come and see
[Outro]
(Drums drop out; only the quiet piano loop remains)
Public virtue can't hide a private void.
The saintly mask is off.
The clinical reality is clear.
Sovereign and free.`},{id:"b9a539e0-e5f8-474b-beaa-9b901ad49720",title:"It was all projection(OWL)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:46,image:"https://cdn2.suno.ai/video_gen_93b4361f-836c-410e-a0fc-69a7a7f87b58_video_upload_93b4361f-836c-410e-a0fc-69a7a7f87b58_cover_snapshot_0s_1789413839_image.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/b9a539e0-e5f8-474b-beaa-9b901ad49720.m4a",videoUrl:"https://cdn1.suno.ai/b9a539e0-e5f8-474b-beaa-9b901ad49720.mp4",embedUrl:"https://suno.com/embed/b9a539e0-e5f8-474b-beaa-9b901ad49720",sunoUrl:"https://suno.com/song/b9a539e0-e5f8-474b-beaa-9b901ad49720",duration:335.9,durationFormatted:"5:35",tags:["synth-pop","electronica"],lyrics:`**[Intro]**
[intimate clean guitar arpeggio, dark heavy bass pulse, steady drumbeat]

[Male Vocals]
You came in sweet, said "love is free,"
Swore you re falling for me.
Love-bombed me fast, set the trap so neat,
Then left me starving on a one-way street.
Countless times I walked up to the office.
Hoping for warmth, but was just left on a hardwood floor.
You treated me like a stranger in front of the crowd,
Cold, sharp rejection while your colleagues talked loud.
I brought you my heart, standing out in the hallway,
And you handed me doubt just so id give you my all.

[Female Vocals ]
I saw you at my office, holding out your hand,
And I used every visit to execute my plan.
I rolled my eyes, played the victim to the room,
Turning your devotion into whispered doom.
I started the smear campaign before you even knew,
Painting you as crazy while I drained the light from you.
I built my public chapel while I tore your name apart,
A saintly communal mask over a malignant heart.

[Male Vocals]
Every off-the-wall accusation you threw in my face in public.
Was just a blueprint of the dirt you were doing in your space!
You called me paranoid, said I was hiding a scheme,
While you were living out a dark, secret double-life dream!

[Chorus]
[swelling distorted guitars, driving drum rhythm]

[Male Vocals]
It was all projection! Every wild allegation!
You accused me of the things in your own imagination!
I came to your office just to feel the cold knife,
While you smeared my reputation to ruin my life!

[Female Vocals]
It was all projection! Every lie I accused!
I mapped my own guilt onto the one I abused!
I told them you were toxic, kept you on defense,
While I hid all the evil behind my own fence!

[Male Vocals]
You said I didn't love you, but you knew that I was all in.
You said *you* loved me, just to watch my head spin.
You accused me of cheating, lying —you were texting your ex. You accused me of everything—while you burned through my checks.
You called me obsessed, called me a threat,
While you pulled every string like a puppet master's set.
Every single wild story that you spun to the crowd
Was just a confession spoken out loud!

[Female Vocals]
I knew you loved me deeply—it was plain as the day.
I just projected my emptiness to make you take the pay.
I wasn't sure if I loved you, because I can't love at all,
So I set up the smear before the dynamic could fall.
I turned friends against you when you when you walked out the room, then hug me when no one around.  push and pull affection, so much misconstrued deflections aimed to confuse.
Made your honest affection look bizarre and grotesque.
I weaponized projection as a strategic defense,
Making my malignant behavior make saintly sense.

[Bridge]
[dynamic crescendo, ringing guitar chimes, pounding drums]

[Male Vocals]
How many times did i patiently wait, sitting on a hardwood floor as you walk out the door, expecting my chace, and if i don't, you say I don't care, and if I do its just pathetic how you make me look. Looking for the woman who gave butterflies and berries of the trees, you made me feel loved more than any girl before, so I'd have no doubt, I let my walls crumble till there were no boundaries left, I was just a a vulnerable empath who hurt when you hurt, and was happy just to make you happy.
Met with cold stares, public humiliation,
Fueling the fire of your character assassination!
Told me i gained pleasure from hurting you, but that was just was you were doing, with the same sentence. do you believe your projections, or my affections.

[Female Vocals]
I loved the power of pushing you away,
Then watching you try harder the very next day.
I took your empathy and fed it to my pride,
Leaving you hollowed out, bleeding inside.

[Chorus]
[explosive final chorus, full emotional intensity]

[Male Vocals]
It was all projection! Every wild allegation!
You accused me of the things in your own imagination!
I came to your office just to feel the cold knife,
While you smeared my reputation to ruin my life!

[Female Vocals]
It was all projection! Every lie I accused!
I mapped my own guilt onto the one I abused!
I was sweet at first, now I'm worse than the rest,
A malignant shadow leaving wreckage in your chest!

[Outro]
[fading piano, ambient feedback, trailing acoustic chords]
[Male Vocals]
Walked to the office just for ur love, but your there just so i can take all your pain, and still i give you my all...
Now I see the mirror behind every crime.

[Female Vocals]
[softly spoken]
Every accusation... was just me confessing what I did.
[acoustic chord rings out and fades]`},{id:"63158df4-507c-403e-b6ed-40d272a1005f",title:"Communal Narcissist",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:47,image:"https://cdn2.suno.ai/video_gen_830a9827-d93a-42af-a66e-98de6c779eff_video_upload_830a9827-d93a-42af-a66e-98de6c779eff_cover_snapshot_0s_1791486110_image.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/63158df4-507c-403e-b6ed-40d272a1005f.m4a",videoUrl:"https://cdn1.suno.ai/63158df4-507c-403e-b6ed-40d272a1005f.mp4",embedUrl:"https://suno.com/embed/63158df4-507c-403e-b6ed-40d272a1005f",sunoUrl:"https://suno.com/song/63158df4-507c-403e-b6ed-40d272a1005f",duration:212.8,durationFormatted:"3:32",tags:["hip hop","hardcore"],lyrics:`[Intro]
[Spoken Word - Low Male Voice, Deep & Atmospheric]
Yeah...
Public saint, private tyrant.
Picking up trash on the sidewalk while trashing every soul behind closed doors.
A new kind of mask. The communal design.
Listen...

[Verse 1]
[Male Rap - Low Auto-Tune, Hypnotic Cadence]
Wears a crown of virtue, walking down the avenue
Acting like the softest, kindest soul you ever knew
Volunteering at the store, picking trash up off the street
Building up an altar out of everyone she meets
Pretending she’s a savior, the most selfless in the town
Collecting public praise just to keep her holy crown
She plays the wounded bird trapped inside a tragic spot
Scripting out her past, using everything she's got
To the world, she’s an angel spreading light into the dark
While quietly calculating how to leave a lasting mark

[Chorus]
[Male-Female Rap Duet - High Energy, Heavy 808 Drop]
Saint in the spotlight, snake in the shade
Building up a kingdom on the promises she made
Weaponizing good deeds just to feed the internal itch
Trading public altruism for a private toll switch
She’s a communal narcissist, wrapped in a holy dress
Leaving behind a trail of psychological distress

[Verse 2]
[Female Rap - Close-Mic, Sharp Staccato Flow]
Step inside the doorway and the story starts to shift
The warmth begins to freeze into a cold, calculated drift
Gathering your secrets while she acts like a friend
Just to use them as a weapon when she needs to defend
Trash-talking everybody once the audience is gone
Spilling personal details from the dusk until the dawn
If you ask for basic honesty, she puts a price tag on the room
Demanding financial toll just to clear away the gloom
Using her public saintliness as an unassailable shield
So if you call out the abuse, your voice is forced to yield

[Chorus]
[Male-Female Rap Duet - High Energy, Massive Layering]
Saint in the spotlight, snake in the shade
Building up a kingdom on the promises she made
Weaponizing good deeds just to feed the internal itch
Trading public altruism for a private toll switch
She’s a communal narcissist, wrapped in a holy dress
Leaving behind a trail of psychological distress

[Verse 3]
[Male & Female Dual Rap - Rapid-Fire, Peak Intensity]
When the boundaries get established and the money starts to dry
She launches the campaign with a tear inside her eye
Running to the public, playing victim to the core
Convincing all her followers that you’re the evil war
Using DARVO mechanics to invert the whole dynamic
Turning every boundary into manufactured panic
But the psychology reveals what was hidden underneath
A grandiose appetite wearing altruistic teeth
Same core entitlement, same lack of empathy
Just a different disguise for the world to come and see

[Outro]
[Drums Drop Out - Quiet Soft Piano Loop Only]
[Spoken Word - Low Male Voice, Cold & Clinical]
Public virtue can't hide a private void.
The saintly mask is off.
The clinical reality is clear.
Sovereign and free.`},{id:"38a0e5e0-201b-451c-b2e7-e2dfa83a9489",title:"Cluster B Storm(Elton Johns style)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:48,image:"https://cdn2.suno.ai/01aa20f3-e4dc-4974-8ba2-15160a2bb73a.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/38a0e5e0-201b-451c-b2e7-e2dfa83a9489.m4a",videoUrl:"https://cdn1.suno.ai/38a0e5e0-201b-451c-b2e7-e2dfa83a9489.mp4",embedUrl:"https://suno.com/embed/38a0e5e0-201b-451c-b2e7-e2dfa83a9489",sunoUrl:"https://suno.com/song/38a0e5e0-201b-451c-b2e7-e2dfa83a9489",duration:435.6,durationFormatted:"7:15",tags:["glam rock","baroque pop","ballad"],lyrics:`It was June when you arrived like a bird with a broken wing

I built a fortress in my mind for every fragile thing

We walked across the city while I tried to shield your heart from every past pain

Told you I was helplessly falling, trusting you implicitly through the rain

You never kept a phone—an unreachable ghost in the noise

I spent half my nights wandering the city just to search for your voice

And every time I tried to do something gentle and sweet

You looked at me with hypervigilant eyes, searching for the trap at your feet

Asking me, "What's in it for *you*? Why are you being nice?"

Dissecting my intentions with weaponized vulnerability, calculating the price

**[Verse 2]**

[clean guitar arpeggiated riff, steady bass drive]

I provided your four walls, kept you warm and safe and fed

Taking care of every necessity, keeping shelter overhead

Making sure you weren't sick, giving everything I could supply

And you played the sweetest, smartest, most beautiful girl under the sky

Wearing a communal saintly mask, public virtue shining bright

While systematically draining resources out of sight

The second that the well ran dry and I had nothing left to yield

You dropped the fragile act and stepped into another field

Seamlessly sliding to the next victim with predatory ease

Leaving me hollowed out while you found new hands to squeeze

**[Verse 3]**

[dynamic clean guitar chimes, warm bass pulse]

You stared at the future with a heavy, pessimistic glare

Waiting until I was hopelessly in love and locked right there

Past the event horizon of a covert grandiose design

That’s when you started whispering warnings, drawing the trap line:

*"I'm becoming abusive... you're too good for me... you should walk away"*

Reverse-psychology performance designed to make me stay

So when the structural collapse occurred and the dynamic tore apart

I was primed to take accountability for every scar in your heart

Zero responsibility on your side of the ledger drawn

A malignant structure smiling as the morning broke at dawn

**[Chorus]**

And I begged you, "don't betray me," looking intently into your eyes

While yours were fixed upon the dirt—a sign I failed to recognize

While you calculated exact prices for every single kiss

I paid a literal toll just to catch your eyes in this

Watched the blueprint of our love turn to quiet lies

I have never felt a hollow cut as deep as you

**[Verse 4]**

Then your ex came back from Ethiopia, and the truth came out clear

You never broke up with him, when i approached you, instead of a hug, You guesture a danger signal to get away from you.

Pushed to the sidelines just like with the last girl , i felt like a lick again, like DEja vouis om. while you played Machiavellian chess,  i guess love was never free.

Screaming when I asked for truth, when i asked you to choose, ignoring all of my distress, you called it an ultimatum, to distract from how u lied to me. 

While you picked up roadside trash to build an altruistic shield

Hyperbolic public charity hiding what the ledger revealed

An overt performative weakness covering a core of pure spite
A dark triad spectrum hiding out of light

**[Pre-Chorus]**

[guitars swell, drums build in intensity]

Our shared dream of true crime files and obscure histories

Shifted to a cold dissection of my own anatomy

You derived a quiet, sadistic comfort watching me hollow inside

**[Chorus]**

[full band entry, soaring vocal delivery]

And I begged you, "don't betray me," looking intently into your eyes

While yours were fixed upon the dirt—a sign I failed to recognize

While you calculated exact prices for every single kiss

I paid a literal toll just to catch your eyes

Watched the blueprint of our love turn to quiet lies

I have never felt a hollow cut as deep as you

**[Bridge]**

[dynamic crescendo, ringing guitar chimes, pounding drums]

Your warmth was conditional, tied strictly to four walls

The second that the shelter cracked, you orchestrated falls

Egosyntonic cruelty disguised as a saintly grace

Moving to the next prey without a trace upon your face

Low agreeableness, high strategic control

A structural inversion that consumed my very soul

**[Verse 5]**

[subdued acoustic guitar, steady snare]

Now you’re playing the sweetest, smartest girl for someone new tonight

Hiding the predatory angle completely out of sight

While the rumor mill turns through the streets we used to know

Preemptive character assassination written in the snow

Claiming victimhood while walking from the wreckage of my trust

**[Chorus]**

[explosive final chorus, full emotional intensity]

And I begged you, "don't betray me," looking intently into your eyes

While yours were fixed upon the dirt—a sign I failed to recognize

While you calculated exact prices for every single kiss

I paid a literal toll just to catch your eyes

Watched the blueprint of our love turn to quiet lies

I have never felt a hollow cut as deep as you

**[Outro]**`}],Qe=r=>{const x=ht.find(N=>{if(N.id===r)return!0;const d=r.toLowerCase().replace(/[^a-z0-9]/g,""),V=N.title.toLowerCase().replace(/[^a-z0-9]/g,"");return V.includes(d)||d.includes(V)});return(x==null?void 0:x.lyrics)||""},Wr={MPLgPPy9Sjs:Qe("Poison Shot By Shot"),BCY7C34diZk:Qe("Don't Betray me")||Qe("I Never Bled Someone the Way You Do"),"9qx6tz-NyKY":Qe("You questioned my motives")||Qe("You'd Rather!"),fBBwdLTJMVE:Qe("Super Pessimistic! (Experimental remix)"),r6BibuJXzEw:Qe("I Practiced being Hurt")||Qe("HURT ME"),PZtOJku0f_g:Qe("Cluster B Storm"),Szoqqqy0KkU:Qe("I Want You Back, But I hate That I Do!"),vohyDAV8PpI:Qe("You Played The Wounded Bird"),BcCaAPSLgVg:Qe("You'd Rather!"),XpnTmJ6WCmw:Qe("pessimistic girl")||Qe("Pessimistic Bias"),"HV2GfTi2-mI":Qe("We MUSK go to MARS!"),osGORpTfs0I:Qe("DON'T MISS IT"),Dgvk00dBQ1Y:Qe("The Doubts Between the Seams"),"9lmCALdX0f8":Qe("Bad Brina knows how to Win"),sx_f6KVmWmQ:Qe("Saints and Schemes"),t8zv9_NNdps:Qe("cages that I couldn't even see(RAP}")||Qe("Poison Shot By Shot")};function Fr(r){if(!r)return"";if("lyrics"in r&&r.lyrics&&r.lyrics.trim().length>30)return r.lyrics;if(r.id&&Wr[r.id])return Wr[r.id];const x=(r.title||"").toLowerCase().replace(/[^a-z0-9]/g,"");if(x){const N=ht.find(d=>{const V=d.title.toLowerCase().replace(/[^a-z0-9]/g,"");return V.includes(x)||x.includes(V)});if(N&&N.lyrics)return N.lyrics}return"featuredLyrics"in r&&r.featuredLyrics?r.featuredLyrics:""}const Dy=[{id:"MPLgPPy9Sjs",title:"Poison Shot By Shot",artist:"Dom-I-NATE",duration:"6:28",durationSeconds:388,index:1,thumbnail:"https://i.ytimg.com/vi/MPLgPPy9Sjs/hqdefault.jpg",youtubeUrl:"https://youtu.be/MPLgPPy9Sjs?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Rock","Epic","Anthem"],description:"The featured single. A haunting build-up tracing toxic cycles, betrayal, and relentless raw guitars.",featuredLyrics:"You came in sweet / All soft at the seams / Said you saw my wreck / And you knew how to redeem..."},{id:"BCY7C34diZk",title:"I Begged You Don't Betray Me",artist:"DomInNATEly",duration:"4:55",durationSeconds:295,index:2,thumbnail:"https://i.ytimg.com/vi/BCY7C34diZk/hqdefault.jpg",youtubeUrl:"https://youtu.be/BCY7C34diZk?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Alt Rock","Vulnerable","Emotional Build","Guitar Driven"],description:"An impassioned, desperate alt-rock plea confronting broken trust and the agony of repeated betrayal.",featuredLyrics:"I pleaded for honesty when the ground started shaking beneath us."},{id:"9qx6tz-NyKY",title:"You Questioned My Motives",artist:"DomInNATEly",duration:"4:13",durationSeconds:253,index:3,thumbnail:"https://i.ytimg.com/vi/9qx6tz-NyKY/hqdefault.jpg",youtubeUrl:"https://youtu.be/9qx6tz-NyKY?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"alt",tags:["Introspective","Raw Emotion","Alt Rock","Distortion"],description:"A hard-hitting confrontation challenging unfair accusations and the pain of having pure intentions doubted.",featuredLyrics:"You twisted every gesture into an interrogation under cold fluorescent lights."},{id:"fBBwdLTJMVE",title:"Super Pessimistic (Guitar Riffs Remix)",artist:"DomInNATEly",duration:"4:01",durationSeconds:241,index:4,thumbnail:"https://i.ytimg.com/vi/fBBwdLTJMVE/hqdefault.jpg",youtubeUrl:"https://youtu.be/fBBwdLTJMVE?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"remix",tags:["Remix","Alt Rock","Heavy Riffs"],description:"High-energy reworked version loaded with heavy electric overdrive and driving rhythmic hooks.",featuredLyrics:"Heavy riffs collide with sharp emotional dissonance in this amplified anthem."},{id:"r6BibuJXzEw",title:"I Practiced Being Hurt",artist:"DomInNATEly",duration:"4:02",durationSeconds:242,index:5,thumbnail:"https://i.ytimg.com/vi/r6BibuJXzEw/hqdefault.jpg",youtubeUrl:"https://youtu.be/r6BibuJXzEw?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Melodic Rock","Vulnerability","Heartbreak","Anthem"],description:"A poignant reflection on emotional armor and conditioning oneself to endure heartache.",featuredLyrics:"Bracing for impact until feeling numb felt like second nature."},{id:"PZtOJku0f_g",title:"Cluster B Storm",artist:"DomInNATEly",duration:"5:04",durationSeconds:304,index:6,thumbnail:"https://i.ytimg.com/vi/PZtOJku0f_g/hqdefault.jpg",youtubeUrl:"https://youtu.be/PZtOJku0f_g?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Psychological Rock","Intense","Dark Rock","Epic"],description:"An intense, dark rock odyssey exploring turbulent psychological dynamics and chaotic relational storms.",featuredLyrics:"Caught in the eye of a psychological whirlwind with no shelter in sight."},{id:"Szoqqqy0KkU",title:"I Want You Back, But I Hate that I Do",artist:"DomInNATEly",duration:"3:19",durationSeconds:199,index:7,thumbnail:"https://i.ytimg.com/vi/Szoqqqy0KkU/hqdefault.jpg",youtubeUrl:"https://youtu.be/Szoqqqy0KkU?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Alt Rock","Breakup Anthem","Raw Guitars","Single"],description:"A fiery, conflicted rock single confronting the paradox of missing an abusive ex while hating the manipulation and emotional toll.",featuredLyrics:"I want you back (but I hate that I do) / Every road I take loops back to you / You wore kindness like a loaded trick / And you loved it best when I came back..."},{id:"vohyDAV8PpI",title:"You Played the Wounded Bird",artist:"DomInNATEly",duration:"3:33",durationSeconds:213,index:8,thumbnail:"https://i.ytimg.com/vi/vohyDAV8PpI/hqdefault.jpg",youtubeUrl:"https://youtu.be/vohyDAV8PpI?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Hard Rock","Dark","Story"],description:"Intense alt-rock confession exploring emotional manipulation and playing the martyr in a relationship.",featuredLyrics:"I played the victim in a horrible place / I knew you'd come running to be my shield..."},{id:"BcCaAPSLgVg",title:"You'd Rather",artist:"DomInNATEly",duration:"3:53",durationSeconds:233,index:9,thumbnail:"https://i.ytimg.com/vi/BcCaAPSLgVg/hqdefault.jpg",youtubeUrl:"https://youtu.be/BcCaAPSLgVg?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"alt",tags:["Alt Rock","Direct","Heavy"],description:"Punchy vocal deliveries confronting choices, avoidance, and unspoken boundaries.",featuredLyrics:"When the line is drawn, would you rather hide or face the fire head on?"},{id:"XpnTmJ6WCmw",title:"Pessimistic Girl",artist:"DomInNATEly",duration:"3:49",durationSeconds:229,index:10,thumbnail:"https://i.ytimg.com/vi/XpnTmJ6WCmw/hqdefault.jpg",youtubeUrl:"https://youtu.be/XpnTmJ6WCmw?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"alt",tags:["Alt Rock","Indie Rock","Cynical Romance","Rhythm"],description:"Driving melodic rock examining cynical defenses, emotional barriers, and self-fulfilling doubt.",featuredLyrics:"Expecting rain before the clouds even gather in the sky."},{id:"HV2GfTi2-mI",title:"We MUSK go to MARS!",artist:"DomInNATEly",duration:"4:47",durationSeconds:287,index:11,thumbnail:"https://i.ytimg.com/vi/HV2GfTi2-mI/hqdefault.jpg",youtubeUrl:"https://youtu.be/HV2GfTi2-mI?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"anthem",tags:["Sci-Fi Rock","One-Man Band","Concept"],description:"A satirical sci-fi rock odyssey about interstellar colonization, billionaires, and leaving Earth behind.",featuredLyrics:"Countdowns, booster engines, and eccentric dreams of red dust horizons."},{id:"osGORpTfs0I",title:"Take the Chance",artist:"Dom-I-NATE",duration:"4:10",durationSeconds:250,index:12,thumbnail:"https://i.ytimg.com/vi/osGORpTfs0I/hqdefault.jpg",youtubeUrl:"https://youtu.be/osGORpTfs0I?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Uplifting Rock","Driving Beat","Guitar Solo","Hope"],description:"Inspiring rock anthem urging listeners to take bold leaps into the unknown despite lingering fear.",featuredLyrics:"Step to the ledge and feel the rush when hesitation fades away."},{id:"Dgvk00dBQ1Y",title:"Bittersweet Echos",artist:"Dom-I-Nate",duration:"3:17",durationSeconds:197,index:13,thumbnail:"https://i.ytimg.com/vi/Dgvk00dBQ1Y/hqdefault.jpg",youtubeUrl:"https://youtu.be/Dgvk00dBQ1Y?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Melodic Rock","Echo","Vocal"],description:"Atmospheric guitars weaving nostalgic echoes of past relationships that refuse to fade.",featuredLyrics:"Reverberating notes of what could have been linger in the quiet aftermath."},{id:"9lmCALdX0f8",title:"Crazy Can be So much Fun",artist:"Dom-I-NATE",duration:"2:44",durationSeconds:164,index:14,thumbnail:"https://i.ytimg.com/vi/9lmCALdX0f8/hqdefault.jpg",youtubeUrl:"https://youtu.be/9lmCALdX0f8?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Wild","Garage Rock","Fun"],description:"A chaotic, cheerful garage rock romp celebrating the unpredictable and eccentric sides of life.",featuredLyrics:"Toss out the rulebook and turn the distortion up to eleven."},{id:"sx_f6KVmWmQ",title:"Her Leather Facade",artist:'Nate "Dom-I-Nater"',duration:"3:17",durationSeconds:197,index:15,thumbnail:"https://i.ytimg.com/vi/sx_f6KVmWmQ/hqdefault.jpg",youtubeUrl:"https://youtu.be/sx_f6KVmWmQ?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Hard Rock","Tough Exterior","Vulnerable"],description:"Heavy riff-laden tribute to guarded hearts, tough leather jackets, and hidden vulnerabilities.",featuredLyrics:"Behind the studs and zipper collar lies a fortress waiting to crumble."},{id:"t8zv9_NNdps",title:"You Jinxed Us",artist:"Dom-I-NATE",duration:"2:51",durationSeconds:171,index:16,thumbnail:"https://i.ytimg.com/vi/t8zv9_NNdps/hqdefault.jpg",youtubeUrl:"https://youtu.be/t8zv9_NNdps?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"duet",tags:["Duet Style","Heartbreak","Superstition"],description:"Soulful alt-rock ballad on fragile romance, superstitions, and premature declarations.",featuredLyrics:"You said forever too loud and shattered the spell before we even started."}],xt=Dy.map(r=>({...r,lyrics:Wr[r.id]||r.featuredLyrics||""})),Ry="https://youtube.com/playlist?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH&si=m-pggLDCyI2ogv_c",qy="https://www.youtube.com/@DomInNATEly",ma={name:"DomInNATEly's Music",description:"Official YouTube audio and video catalogue by DomInNATEly featuring heavy guitar riffs, melodic ballads, and conceptual alt-rock.",channel:"DomInNATEly",channelUrl:"https://www.youtube.com/@DomInNATEly",playlistUrl:"https://youtube.com/playlist?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH&si=m-pggLDCyI2ogv_c",totalDurationFormatted:"1 hr 4 min",cover:"https://i.ytimg.com/vi/MPLgPPy9Sjs/hqdefault.jpg"},nf=r=>({id:r.id,title:r.title,artist:r.artist,duration:r.durationFormatted,durationSeconds:r.duration,index:r.index,thumbnail:r.image,youtubeUrl:r.sunoUrl,category:"alt",tags:r.tags,description:`Suno AI Track • @${r.handle}`,featuredLyrics:r.lyrics,lyrics:r.lyrics,audioUrl:r.videoUrl||r.audioUrl,videoUrl:r.videoUrl,embedUrl:r.embedUrl,sunoUrl:r.sunoUrl,isSuno:!0});/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(x,N,d)=>d?d.toUpperCase():N.toLowerCase()),lf=r=>{const x=Gy(r);return x.charAt(0).toUpperCase()+x.slice(1)},sf=(...r)=>r.filter((x,N,d)=>!!x&&x.trim()!==""&&d.indexOf(x)===N).join(" ").trim(),Wy=r=>{for(const x in r)if(x.startsWith("aria-")||x==="role"||x==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=C.forwardRef(({color:r="currentColor",size:x=24,strokeWidth:N=2,absoluteStrokeWidth:d,className:V="",children:z,iconNode:w,...U},j)=>C.createElement("svg",{ref:j,...Xy,width:x,height:x,stroke:r,strokeWidth:d?Number(N)*24/Number(x):N,className:sf("lucide",V),...!z&&!Wy(U)&&{"aria-hidden":"true"},...U},[...w.map(([p,L])=>C.createElement(p,L)),...Array.isArray(z)?z:[z]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(r,x)=>{const N=C.forwardRef(({className:d,...V},z)=>C.createElement(Qy,{ref:z,iconNode:x,className:sf(`lucide-${Ly(lf(r))}`,`lucide-${r}`,d),...V}));return N.displayName=lf(r),N};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Zy=ge("bell",Fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],to=ge("check",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],rf=ge("clock",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ao=ge("copy",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],uf=ge("disc-3",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],ll=ge("disc",eg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ue=ge("external-link",tg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],La=ge("file-text",ag);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],cf=ge("flame",ng);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],df=ge("heart",lg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],hf=ge("layout-grid",og);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],of=ge("list-music",ig);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],ff=ge("list",sg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],Zr=ge("music-2",rg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Xr=ge("music",ug);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],mn=ge("pause",cg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Rt=ge("play",dg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],fg=ge("repeat",hg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],mf=ge("search",mg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],gg=ge("send",yg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Et=ge("share-2",pg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],ki=ge("shuffle",bg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],vg=ge("skip-back",wg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],kg=ge("skip-forward",xg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ya=ge("sparkles",jg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],no=ge("tv",Ng);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ag=ge("user",Ig);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Tg=ge("video",Sg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Yg=ge("volume-2",Eg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Mg=ge("volume-x",Bg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ga=ge("x",Cg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],ji=ge("youtube",zg),yf=[{id:"tiktok",name:"TikTok",label:"Follow on TikTok",url:"https://tiktok.com/@domInNATEly",handle:"@domInNATEly",icon:"🎵",color:"from-pink-500/20 to-cyan-500/20 text-pink-400 border-pink-500/30 hover:border-pink-400",actionText:"Follow & Like"},{id:"youtube",name:"YouTube",label:"Subscribe on YouTube",url:"https://www.youtube.com/@DomInNATEly",handle:"@DomInNATEly",icon:"▶️",color:"from-red-600/20 to-red-500/10 text-red-400 border-red-500/30 hover:border-red-400",actionText:"Subscribe & Like"},{id:"github",name:"GitHub",label:"Check on GitHub",url:"https://github.com/Nate-Mina",handle:"Nate-Mina",icon:"🐙",color:"from-purple-500/20 to-neutral-700/20 text-purple-300 border-purple-500/30 hover:border-purple-400",actionText:"Star & Follow"},{id:"facebook",name:"Facebook",label:"Connect on Facebook",url:"https://facebook.com/NateMina",handle:"NateMina",icon:"👍",color:"from-blue-600/20 to-indigo-600/20 text-blue-400 border-blue-500/30 hover:border-blue-400",actionText:"Connect"},{id:"linkedin",name:"LinkedIn",label:"Connect on LinkedIn",url:"https://www.linkedin.com/in/dominnately/",handle:"dominnately",icon:"💼",color:"from-sky-600/20 to-cyan-600/20 text-sky-400 border-sky-500/30 hover:border-sky-400",actionText:"Connect"},{id:"portfolio",name:"About Me",label:"Visit Portfolio & CV",url:"https://nate-mina.github.io/Portfolio-CV/",handle:"nate-mina.github.io",icon:"👤",color:"from-cyan-500/20 to-teal-500/20 text-cyan-300 border-cyan-500/30 hover:border-cyan-400",actionText:"View CV"}],Ug="https://nate-mina.github.io/Portfolio-CV/",Vg=({isDarkMode:r,onToggleDarkMode:x,trackCount:N,onQuickShareAll:d})=>i.jsx("header",{id:"main-header",className:`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${r?"bg-black/40 border-white/10 text-white":"bg-white/80 border-neutral-200 text-neutral-900"}`,children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[i.jsxs("div",{className:"flex flex-col",children:[i.jsxs("h1",{className:"text-2xl sm:text-3xl md:text-4xl tracking-tighter leading-none select-none",children:[i.jsx("span",{className:"font-black",children:"D"}),i.jsx("span",{className:"font-light opacity-80",children:"o"}),i.jsx("span",{className:"font-medium opacity-90",children:"m"}),i.jsx("span",{className:"font-black text-cyan-400",children:"I"}),i.jsx("span",{className:"font-light opacity-80",children:"n"}),i.jsx("span",{className:"font-black bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent",children:"NATE"}),i.jsx("span",{className:"font-light opacity-80",children:"l"}),i.jsx("span",{className:"font-medium opacity-90",children:"y"})]}),i.jsx("p",{className:"text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold mt-0.5",children:"Official Gallery"})]}),i.jsxs("span",{className:`hidden md:inline-flex px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${r?"bg-white/5 border-white/10 text-cyan-300":"bg-cyan-50 border-cyan-200 text-cyan-700"}`,children:[N," Tracks"]})]}),i.jsxs("div",{className:"flex items-center gap-2 sm:gap-4 md:gap-6",children:[i.jsxs("a",{id:"about-me-header-link",href:Ug,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold tracking-wider uppercase transition-all shadow-xs ${r?"bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-teal-500/20 border-cyan-400/50 text-cyan-300 hover:text-white hover:bg-cyan-500/30 hover:border-cyan-300 hover:shadow-cyan-500/20":"bg-cyan-50 border-cyan-400 text-cyan-800 hover:bg-cyan-100 hover:text-cyan-950"}`,title:"About Me - Nate Mina Portfolio & CV",children:[i.jsx(Ag,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"About Me"}),i.jsx(Ue,{className:"w-3 h-3 opacity-60"})]}),i.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[i.jsxs("a",{id:"youtube-channel-link",href:qy,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Visit DomInNATEly on YouTube",children:[i.jsx(uf,{className:"w-3.5 h-3.5 text-cyan-400 animate-spin",style:{animationDuration:"6s"}}),i.jsx("span",{className:"hidden lg:inline",children:"YT Channel"}),i.jsx(Ue,{className:"w-3 h-3 opacity-60"})]}),i.jsxs("a",{id:"youtube-playlist-link",href:Ry,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Open DomInNATEly official playlists on YouTube",children:[i.jsx(Zr,{className:"w-3.5 h-3.5 text-red-500"}),i.jsx("span",{className:"hidden lg:inline",children:"YT Playlists"}),i.jsx(Ue,{className:"w-3 h-3 opacity-60"})]}),i.jsxs("a",{id:"tiktok-header-link",href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-pink-400 hover:border-pink-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-pink-600 hover:bg-neutral-200"}`,title:"Follow @domInNATEly on TikTok",children:[i.jsx("span",{className:"text-xs",children:"🎵"}),i.jsx("span",{className:"hidden lg:inline",children:"TikTok"}),i.jsx(Ue,{className:"w-3 h-3 opacity-60"})]}),i.jsxs("a",{id:"suno-playlist-header-link",href:ft.url,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Open official DomInNATEly playlist on Suno",children:[i.jsx(ya,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden lg:inline",children:"Suno Playlist"}),i.jsx(Ue,{className:"w-3 h-3 opacity-60"})]})]}),d&&i.jsxs("button",{id:"share-gallery-btn",onClick:d,className:`p-2 sm:px-3 sm:py-1.5 rounded-full border text-xs font-semibold tracking-wider inline-flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600"}`,title:"Share Gallery","aria-label":"Share DomInNATEly Music Gallery",children:[i.jsx(Et,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden md:inline uppercase text-[11px]",children:"Share"})]}),i.jsxs("div",{className:`flex items-center gap-2.5 sm:gap-3 border-l pl-3 sm:pl-5 ${r?"border-white/10":"border-neutral-200"}`,children:[i.jsx("button",{id:"dark-mode-toggle",onClick:x,className:`w-10 h-6 rounded-full relative flex items-center px-0.5 transition-colors focus:outline-hidden ${r?"bg-cyan-500":"bg-neutral-300"}`,title:r?"Switch to Light Mode":"Switch to Dark Mode","aria-label":r?"Switch to Light Mode":"Switch to Dark Mode",children:i.jsx("div",{className:`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${r?"translate-x-4":"translate-x-0"}`})}),i.jsx("span",{className:`text-[10px] uppercase font-bold tracking-wider hidden sm:inline ${r?"text-white/80":"text-neutral-700"}`,children:r?"Dark Mode":"Light Mode"})]})]})]})}),_g=({track:r,isPlaying:x,isCurrentTrack:N,onPlay:d,onOpenShare:V,onOpenDetails:z,onOpenLyrics:w,isDarkMode:U})=>i.jsxs("div",{id:`track-card-${r.id}`,className:`group rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden relative ${N?U?"bg-white/10 border-cyan-400/80 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400/40":"bg-cyan-50/40 border-cyan-500 shadow-md ring-1 ring-cyan-400/30":U?"bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15 shadow-sm hover:shadow-md":"bg-white hover:bg-neutral-50/90 border-neutral-200 hover:border-neutral-300 shadow-xs hover:shadow-sm"}`,children:[i.jsxs("div",{className:"relative aspect-video w-full overflow-hidden bg-black",children:[i.jsx("img",{src:r.thumbnail,alt:r.title,loading:"lazy",referrerPolicy:"no-referrer",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"}),i.jsxs("div",{className:"absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white shadow-md",children:r.index.toString().padStart(2,"0")}),i.jsxs("span",{className:"px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-black/80 backdrop-blur-xs text-cyan-400 border border-white/10 flex items-center gap-1.5 shadow-xs",children:[i.jsx(rf,{className:"w-3 h-3 text-cyan-400"}),r.duration]})]}),i.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:i.jsx("button",{id:`play-btn-${r.id}`,onClick:j=>{j.stopPropagation(),d(r)},className:`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform active:scale-95 ${N&&x?"bg-cyan-400 text-black scale-100 ring-4 ring-cyan-400/40 font-bold":"bg-white/90 hover:bg-white text-black backdrop-blur-sm group-hover:scale-110 shadow-lg"}`,"aria-label":N&&x?`Pause ${r.title}`:`Play ${r.title}`,children:N&&x?i.jsx(mn,{className:"w-5 h-5 fill-current"}):i.jsx(Rt,{className:"w-5 h-5 fill-current translate-x-0.5"})})}),N&&x&&i.jsxs("div",{className:"absolute bottom-2.5 left-2.5 flex items-end gap-1 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs border border-cyan-400/40",children:[i.jsx("span",{className:"w-1 bg-cyan-400 rounded-full animate-eq-1"}),i.jsx("span",{className:"w-1 bg-cyan-300 rounded-full animate-eq-2"}),i.jsx("span",{className:"w-1 bg-purple-400 rounded-full animate-eq-3"}),i.jsx("span",{className:"w-1 bg-cyan-400 rounded-full animate-eq-4"}),i.jsx("span",{className:"text-[10px] font-mono text-cyan-300 ml-1 font-bold uppercase tracking-wider",children:"Playing"})]})]}),i.jsxs("div",{className:"p-3.5 sm:p-4 flex-1 flex flex-col justify-between",children:[i.jsx("div",{children:i.jsx("h3",{onClick:()=>d(r),className:`text-sm sm:text-base font-bold line-clamp-1 cursor-pointer transition-colors ${N?U?"text-cyan-400":"text-cyan-700":U?"text-white hover:text-cyan-400":"text-neutral-900 hover:text-cyan-700"}`,title:r.title,children:r.title})}),i.jsxs("div",{className:`mt-4 pt-3.5 border-t flex items-center justify-between gap-2 ${U?"border-white/10":"border-neutral-200"}`,children:[i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("button",{id:`card-play-toggle-${r.id}`,onClick:()=>d(r),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${N&&x?"bg-cyan-500 text-black font-bold":U?"bg-white/5 hover:bg-white/10 text-white border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-800"}`,children:N&&x?i.jsxs(i.Fragment,{children:[i.jsx(mn,{className:"w-3.5 h-3.5 fill-current"}),i.jsx("span",{children:"Pause"})]}):i.jsxs(i.Fragment,{children:[i.jsx(Rt,{className:"w-3.5 h-3.5 fill-current"}),i.jsx("span",{children:"Play"})]})}),w&&i.jsxs("button",{id:`card-lyrics-btn-${r.id}`,onClick:j=>{j.stopPropagation(),w(r)},className:`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${U?"bg-white/5 hover:bg-white/10 text-white/80 hover:text-cyan-400 border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-700"}`,title:"View Full Lyrics","aria-label":`View lyrics for ${r.title}`,children:[i.jsx(La,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden sm:inline",children:"Lyrics"})]})]}),i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx("a",{id:`quick-x-share-${r.id}`,href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Listening to "${r.title}" by DomInNATEly 🔥`)}&url=${encodeURIComponent(r.youtubeUrl)}`,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${U?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-black hover:bg-neutral-200"}`,title:"Share on X","aria-label":`Share ${r.title} on X`,children:i.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),i.jsx("a",{id:`quick-fb-share-${r.id}`,href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(r.youtubeUrl)}`,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${U?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-[#1877F2] hover:bg-neutral-200"}`,title:"Share on Facebook","aria-label":`Share ${r.title} on Facebook`,children:i.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),i.jsx("a",{id:`card-youtube-link-${r.id}`,href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${U?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-[#FF0000] hover:bg-neutral-200"}`,title:"Watch Video on YouTube","aria-label":`Watch ${r.title} on YouTube`,children:i.jsx(ji,{className:"w-3.5 h-3.5 fill-current"})}),i.jsx("button",{id:`open-share-modal-${r.id}`,onClick:()=>V(r),className:`p-1.5 rounded-md transition-colors ${U?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200"}`,title:"More Share Options (WhatsApp, Reddit, Copy Link, etc.)","aria-label":`Share ${r.title}`,children:i.jsx(Et,{className:"w-3.5 h-3.5"})})]})]})]})]}),Og=({searchQuery:r,onSearchChange:x,sortField:N,onSortChange:d,selectedCategory:V,onCategoryChange:z,totalResults:w,totalTracks:U=16,isDarkMode:j})=>{const p=[{id:"all",label:"All Tracks"},{id:"rock",label:"Rock & Riffs"},{id:"remix",label:"Remixes"},{id:"acoustic",label:"Acoustic / Live"},{id:"duet",label:"Duets"},{id:"alt",label:"Alt / Concept"}],L=U.toString().padStart(2,"0"),_=[{id:"playlist",label:`Playlist Order (#01 - #${L})`},{id:"newest",label:`Reverse Order (#${L} - #01)`},{id:"duration-desc",label:"Duration (Longest First)"},{id:"duration-asc",label:"Duration (Shortest First)"},{id:"title-asc",label:"Title (A → Z)"},{id:"title-desc",label:"Title (Z → A)"}],G=r.trim()!==""||V!=="all"||N!=="playlist";return i.jsxs("div",{id:"sorting-filter-panel",className:`rounded-2xl border p-4 sm:p-5 mb-6 backdrop-blur-md transition-all ${j?"bg-white/5 border-white/10 shadow-xl shadow-black/40":"bg-white/90 border-neutral-200 shadow-sm"}`,children:[i.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-3.5",children:[i.jsxs("div",{className:"relative flex-1",children:[i.jsx(mf,{className:`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${j?"text-white/40":"text-neutral-400"}`}),i.jsx("input",{id:"track-search-input",type:"text",placeholder:"Search tracks, lyrics, or styles...",value:r,onChange:te=>x(te.target.value),className:`w-full pl-9 pr-9 py-2 rounded-xl text-xs sm:text-sm border focus:outline-hidden transition-all ${j?"bg-black/50 border-white/10 text-white placeholder-white/40 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/40":"bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600/30"}`}),r&&i.jsx("button",{onClick:()=>x(""),className:`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md ${j?"text-white/40 hover:text-white":"text-neutral-500 hover:text-neutral-900"}`,title:"Clear search",children:i.jsx(Ga,{className:"w-3.5 h-3.5"})})]}),i.jsxs("div",{className:`flex items-center px-3 py-1.5 rounded-full border transition-all ${j?"bg-white/5 border-white/10 text-white":"bg-neutral-100 border-neutral-300 text-neutral-800"}`,children:[i.jsx("span",{className:`text-[10px] sm:text-xs font-bold mr-2 uppercase tracking-wider ${j?"text-white/50":"text-neutral-500"}`,children:"SORT BY:"}),i.jsx("select",{id:"track-sort-select",value:N,onChange:te=>d(te.target.value),className:`bg-transparent text-xs outline-hidden cursor-pointer font-bold uppercase tracking-wider ${j?"text-cyan-400":"text-cyan-700"}`,children:_.map(te=>i.jsx("option",{value:te.id,className:j?"bg-[#0a0a0a] text-white":"bg-white text-neutral-900",children:te.label},te.id))})]})]}),i.jsxs("div",{className:`mt-4 pt-3.5 border-t flex flex-wrap items-center justify-between gap-2.5 ${j?"border-white/10":"border-neutral-200"}`,children:[i.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar",children:p.map(te=>{const P=V===te.id;return i.jsx("button",{id:`filter-pill-${te.id}`,onClick:()=>z(te.id),className:`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${P?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":j?"bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20":"bg-neutral-100 border border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400"}`,children:te.label},te.id)})}),i.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono",children:[i.jsxs("span",{className:j?"text-cyan-400 font-bold":"text-cyan-700 font-bold",children:[w," ",w===1?"TRACK":"TRACKS"]}),G&&i.jsx("button",{id:"reset-filters-btn",onClick:()=>{x(""),z("all"),d("playlist")},className:`underline text-[11px] uppercase tracking-wider ml-2 transition-colors ${j?"text-white/50 hover:text-white":"text-neutral-500 hover:text-black"}`,children:"Reset"})]})]})]})},Hg=({currentTrack:r,playlist:x,onTrackChange:N,onOpenShare:d,onOpenLyrics:V,isDarkMode:z,isPlaying:w,setIsPlaying:U,allPlaylists:j,onSwitchPlaylist:p,currentPlaylistType:L="youtube",disableInternalPlayback:_=!1,onVolumeChange:G})=>{const[te,P]=C.useState(0),[ae,Ae]=C.useState(0),[ze,Re]=C.useState(80),[se,Se]=C.useState(!1),[Ve,qe]=C.useState(!1),[Z,Le]=C.useState(!1),[Fe,K]=C.useState(!1),[ne,F]=C.useState(!1),[_e,at]=C.useState("current"),Ge=C.useMemo(()=>_e==="youtube"&&(j!=null&&j.youtube)?j.youtube:_e==="suno"&&(j!=null&&j.suno)?j.suno:x,[_e,j,x]),[I,H]=C.useState(!1),S=C.useRef(null),R=C.useRef(null),J=C.useRef(null),h=C.useRef(null),T=C.useRef(null),D=C.useRef(null),q=C.useRef(!1),v=C.useRef(null),O="youtube-player-container",W=C.useRef(0),Ye=C.useRef(0),Te=C.useRef(Z);Te.current=Z;const ga=C.useRef(Ve);ga.current=Ve;const Zt=C.useRef(U);Zt.current=U;const pa=C.useRef(N);pa.current=N;const yn=C.useRef(x);yn.current=x;const Ee=!!(r!=null&&r.audioUrl||r!=null&&r.isSuno),gn=B=>{if(isNaN(B)||B<0)return"0:00";const M=Math.floor(B/60),fe=Math.floor(B%60);return`${M}:${fe<10?"0":""}${fe}`},pn=C.useCallback(()=>{const B=yn.current;if(!r||B.length===0)return;if(ga.current){const Ne=Math.floor(Math.random()*B.length);pa.current(B[Ne]);return}const fe=(B.findIndex(Ne=>Ne.id===r.id)+1)%B.length;pa.current(B[fe])},[r==null?void 0:r.id]),Wa=C.useRef(pn);Wa.current=pn,C.useCallback(()=>{const B=yn.current;if(!r||B.length===0)return;if(W.current>4){if(Ee&&R.current){R.current.currentTime=0,W.current=0,P(0);return}if(S.current&&typeof S.current.seekTo=="function")try{S.current.seekTo(0,!0),W.current=0,P(0);return}catch{}}const fe=(B.findIndex(Ne=>Ne.id===r.id)-1+B.length)%B.length;pa.current(B[fe])},[r==null?void 0:r.id,Ee]),C.useEffect(()=>{if(r){if(_){if(R.current&&R.current.pause(),J.current&&J.current.pause(),S.current&&typeof S.current.pauseVideo=="function")try{S.current.pauseVideo()}catch{}return}if(Ee){if(S.current&&typeof S.current.pauseVideo=="function")try{S.current.pauseVideo()}catch{}const B=r.audioUrl||r.videoUrl||"";R.current&&(R.current.src=B?encodeURI(B):"",R.current.volume=se?0:(ze||80)/100,R.current.muted=se,R.current.load(),P(0),Ae(r.durationSeconds||180),w&&R.current.play().catch(M=>{console.warn("Audio auto-play notice:",M)})),J.current&&(J.current.volume=se?0:(ze||80)/100,J.current.muted=se,w&&J.current.play().catch(()=>{}));return}R.current&&R.current.pause(),J.current&&J.current.pause()}},[r==null?void 0:r.id,Ee]),C.useEffect(()=>{var B;if(!window.YT&&!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){const fe=document.createElement("script");fe.src="https://www.youtube.com/iframe_api";const Ne=document.getElementsByTagName("script")[0];(B=Ne==null?void 0:Ne.parentNode)==null||B.insertBefore(fe,Ne)}},[]),C.useEffect(()=>{if(!r||Ee||_)return;if(S.current&&q.current){if(typeof S.current.loadVideoById=="function")try{w?S.current.loadVideoById(r.id):typeof S.current.cueVideoById=="function"?S.current.cueVideoById(r.id):S.current.loadVideoById(r.id)}catch(Ne){console.warn("Error loading video by ID:",Ne)}return}v.current=r.id,T.current&&(clearTimeout(T.current),T.current=null);let B=0;const M=50,fe=()=>{const Ne=D.current||document.getElementById(O);if(!Ne){B++<M&&(T.current=setTimeout(fe,100));return}if(!window.YT||!window.YT.Player){B++<M&&(T.current=setTimeout(fe,100));return}if(!S.current)try{Ne.innerHTML="";const Oe=document.createElement("div");Oe.style.width="100%",Oe.style.height="100%",Ne.appendChild(Oe);const ct=typeof window<"u"&&window.location.origin&&window.location.origin!=="null"?window.location.origin:void 0;S.current=new window.YT.Player(Oe,{height:"100%",width:"100%",videoId:r.id,playerVars:{autoplay:w?1:0,controls:1,modestbranding:1,rel:0,enablejsapi:1,...ct?{origin:ct}:{}},events:{onReady:be=>{var Yt,oo,io;if(q.current=!0,typeof((Yt=be.target)==null?void 0:Yt.setVolume)=="function")try{be.target.setVolume(ze)}catch{}if(v.current&&v.current!==r.id){const ba=v.current;if(v.current=null,typeof((oo=be.target)==null?void 0:oo.loadVideoById)=="function")try{be.target.loadVideoById(ba),setTimeout(()=>{Zt.current(!0)},0)}catch{}}else if(w&&typeof((io=be.target)==null?void 0:io.playVideo)=="function")try{be.target.playVideo()}catch{}},onStateChange:be=>{if(be.data===1){if(setTimeout(()=>{Zt.current(!0)},0),S.current&&typeof S.current.getDuration=="function")try{const Yt=S.current.getDuration();Yt&&Yt>0&&(Ye.current=Yt,Ae(Yt))}catch{}}else if(be.data===2)setTimeout(()=>{Zt.current(!1)},0);else if(be.data===0)if(Te.current){if(S.current&&typeof S.current.seekTo=="function")try{S.current.seekTo(0)}catch{}if(S.current&&typeof S.current.playVideo=="function")try{S.current.playVideo()}catch{}}else setTimeout(()=>{Wa.current()},0)},onError:be=>{console.warn("YouTube Player event notice:",be)}}})}catch(Oe){console.warn("Error instantiating YT.Player:",Oe)}};return fe(),()=>{T.current&&(clearTimeout(T.current),T.current=null)}},[r==null?void 0:r.id,Ee]),C.useEffect(()=>{if(_){if(R.current&&R.current.pause(),J.current&&J.current.pause(),S.current&&typeof S.current.pauseVideo=="function")try{S.current.pauseVideo()}catch{}return}if(Ee){if(!R.current)return;w?R.current.play().catch(B=>{console.warn("Audio play notice:",B)}):R.current.pause();return}if(!(!q.current||!S.current))try{w&&typeof S.current.playVideo=="function"?S.current.playVideo():!w&&typeof S.current.pauseVideo=="function"&&S.current.pauseVideo()}catch(B){console.warn("Error syncing playback state:",B)}},[w,Ee,_]),C.useEffect(()=>(w?h.current=setInterval(()=>{if(Ee){if(J.current&&!J.current.paused){const B=J.current.currentTime;B!==void 0&&!isNaN(B)&&(W.current=B,P(B));const M=J.current.duration;M&&!isNaN(M)&&M>0&&(Ye.current=M,Ae(M))}else if(R.current&&!R.current.paused){const B=R.current.currentTime;B!==void 0&&!isNaN(B)&&(W.current=B,P(B));const M=R.current.duration;M&&!isNaN(M)&&M>0&&(Ye.current=M,Ae(M))}else{const B=Ye.current||(r==null?void 0:r.durationSeconds)||180;W.current>=B?(W.current=0,P(0),setTimeout(()=>{Wa.current()},0)):(W.current+=1,P(W.current))}return}if(S.current&&typeof S.current.getCurrentTime=="function")try{const B=S.current.getCurrentTime();if(B!==void 0&&!isNaN(B)&&(W.current=B,P(B)),typeof S.current.getDuration=="function"){const M=S.current.getDuration();M&&M>0&&(Ye.current=M,Ae(M))}}catch{}},500):clearInterval(h.current),()=>clearInterval(h.current)),[w,Ee,r==null?void 0:r.id]),C.useEffect(()=>()=>{if(clearInterval(h.current),S.current&&typeof S.current.destroy=="function")try{S.current.destroy()}catch{}S.current=null,q.current=!1,R.current&&R.current.pause(),J.current&&J.current.pause()},[]);const bn=C.useCallback(()=>{if(x.length===0)return;if(!r){N(x[0]);return}const B=x.findIndex(fe=>fe.id===r.id),M=B===-1||B>=x.length-1?0:B+1;N(x[M])},[r,x,N]),Xa=C.useCallback(()=>{if(x.length===0)return;if(!r){N(x[x.length-1]);return}const B=x.findIndex(fe=>fe.id===r.id),M=B<=0?x.length-1:B-1;N(x[M])},[r,x,N]),Qa=C.useCallback(()=>{if(!r&&x.length>0){N(x[0]);return}if(_){U(!w);return}if(Ee){if(!R.current){U(!w);return}w?(R.current.pause(),U(!1)):(R.current.play().catch(B=>{console.warn("Audio play error:",B)}),U(!0));return}if(!S.current||!q.current){U(!w);return}try{w?(typeof S.current.pauseVideo=="function"&&S.current.pauseVideo(),U(!1)):(typeof S.current.playVideo=="function"&&S.current.playVideo(),U(!0))}catch(B){console.warn("Error toggling playback:",B),U(!w)}},[r,x,Ee,w,U,N]),ol=B=>{const M=parseFloat(B.target.value);if(P(M),Ee){R.current&&(R.current.currentTime=M),J.current&&(J.current.currentTime=M);return}if(S.current&&typeof S.current.seekTo=="function")try{S.current.seekTo(M,!0)}catch(fe){console.warn("Error seeking:",fe)}},Ni=B=>{const M=parseInt(B.target.value,10);if(Re(M),Ee){R.current&&(R.current.volume=se?0:M/100),J.current&&(J.current.volume=se?0:M/100);return}if(S.current&&typeof S.current.setVolume=="function")try{S.current.setVolume(M),M===0?(Se(!0),typeof S.current.mute=="function"&&S.current.mute()):se&&(Se(!1),typeof S.current.unMute=="function"&&S.current.unMute())}catch(fe){console.warn("Error setting volume:",fe)}},Ii=()=>{if(Ee){const B=!se;Se(B),R.current&&(R.current.muted=B),J.current&&(J.current.muted=B);return}if(S.current)try{se?(typeof S.current.unMute=="function"&&S.current.unMute(),Se(!1),typeof S.current.setVolume=="function"&&S.current.setVolume(ze||50)):(typeof S.current.mute=="function"&&S.current.mute(),Se(!0))}catch(B){console.warn("Error toggling mute:",B)}},rt=C.useRef(Qa);rt.current=Qa;const lo=C.useRef(bn);lo.current=bn;const il=C.useRef(Xa);if(il.current=Xa,C.useEffect(()=>{const B=M=>{if(M.altKey||M.ctrlKey||M.metaKey)return;const fe=M.target;if(fe){const Ne=fe.tagName?fe.tagName.toUpperCase():"",Oe=fe.isContentEditable,ct=Ne==="INPUT",be=ct?fe.type.toLowerCase():"";if(Ne==="TEXTAREA"||Ne==="SELECT"||Oe||ct&&!["range","button","checkbox","radio"].includes(be)||ct&&be==="range"&&(M.key==="ArrowLeft"||M.key==="ArrowRight"||M.key==="ArrowUp"||M.key==="ArrowDown"||M.code==="ArrowLeft"||M.code==="ArrowRight"||M.code==="ArrowUp"||M.code==="ArrowDown"))return}if(M.key===" "||M.code==="Space"||M.key==="Spacebar"){M.preventDefault(),rt.current();return}if(M.key==="ArrowLeft"||M.code==="ArrowLeft"||M.key==="Left"||M.key==="ArrowUp"||M.code==="ArrowUp"||M.key==="Up"){M.preventDefault(),il.current();return}if(M.key==="ArrowRight"||M.code==="ArrowRight"||M.key==="Right"||M.key==="ArrowDown"||M.code==="ArrowDown"||M.key==="Down"){M.preventDefault(),lo.current();return}};return window.addEventListener("keydown",B),()=>{window.removeEventListener("keydown",B)}},[]),!r)return null;const Fa=ae||r.durationSeconds||180,wn=Fa>0?te/Fa*100:0,Ai=i.jsxs("div",{className:"w-full h-full relative bg-black flex items-center justify-center overflow-hidden rounded-2xl",children:[Ee?r.videoUrl?i.jsx("video",{ref:J,src:encodeURI(r.videoUrl),controls:!0,autoPlay:!0,playsInline:!0,muted:se,className:"w-full h-full object-contain bg-black",onTimeUpdate:B=>{const M=B.currentTarget.currentTime;isNaN(M)||P(M)},onLoadedMetadata:B=>{const M=B.currentTarget.duration;M&&!isNaN(M)&&M>0&&Ae(M)},onEnded:()=>{Te.current?J.current&&(J.current.currentTime=0,J.current.play().catch(()=>{})):setTimeout(()=>{Wa.current()},0)}}):i.jsx("iframe",{src:encodeURI(r.embedUrl||r.youtubeUrl||""),title:`Suno Embed - ${r.title}`,className:"w-full h-full border-0",allow:"autoplay"}):null,i.jsx("div",{ref:D,id:O,className:`w-full h-full min-h-[220px] ${Ee?"hidden":""}`})]});return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300 ${Fe?"opacity-100 pointer-events-auto visible":"opacity-0 pointer-events-none invisible"}`,onClick:()=>K(!1),children:i.jsxs("div",{className:`relative w-full ${Ee?"max-w-sm sm:max-w-[380px] aspect-[9/16] max-h-[90vh]":"max-w-3xl aspect-video"} bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col transition-all duration-300`,onClick:B=>B.stopPropagation(),children:[i.jsxs("div",{className:"p-3 bg-neutral-950/90 border-b border-white/10 flex items-center justify-between text-xs",children:[i.jsxs("span",{className:"font-bold text-white truncate max-w-[80%]",children:[r.title," — ",r.artist]}),i.jsx("button",{onClick:()=>K(!1),className:"px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-semibold transition-colors",children:"Close Video Mode"})]}),i.jsx("div",{className:"flex-1 w-full h-full relative",children:Ai})]})}),i.jsx("audio",{ref:R,crossOrigin:"anonymous",onError:()=>{R.current&&(r!=null&&r.videoUrl)&&R.current.src!==r.videoUrl&&(R.current.src=r.videoUrl,R.current.load(),w&&R.current.play().catch(()=>{}))},onTimeUpdate:B=>{const M=B.currentTarget.currentTime;isNaN(M)||P(M)},onLoadedMetadata:B=>{const M=B.currentTarget.duration;M&&!isNaN(M)&&M>0&&Ae(M)},onEnded:()=>{Te.current?R.current&&(R.current.currentTime=0,R.current.play().catch(()=>{})):setTimeout(()=>{Wa.current()},0)},preload:"auto"}),i.jsxs("div",{id:"persistent-audio-player",className:`fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-xl shadow-2xl transition-all duration-300 ${z?"bg-black/95 border-white/10 text-white":"bg-white/95 border-neutral-200 text-neutral-900"}`,children:[i.jsxs("div",{className:"relative w-full h-1.5 group cursor-pointer bg-white/10",children:[i.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all pointer-events-none relative",style:{width:`${wn}%`},children:i.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg shadow-cyan-500/50 scale-0 group-hover:scale-100 transition-transform"})}),i.jsx("input",{id:"audio-progress-bar",type:"range",min:"0",max:Fa,step:"1",value:te,onChange:ol,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer","aria-label":"Seek track"})]}),i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-8 py-3",children:i.jsxs("div",{className:"flex items-center justify-between gap-4 sm:gap-8",children:[i.jsxs("div",{className:"flex items-center gap-3.5 min-w-0 max-w-[40%] sm:max-w-[28%]",children:[i.jsxs("div",{className:"relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-md bg-black",children:[i.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),w&&i.jsx("div",{className:"absolute inset-0 bg-black/50 flex items-center justify-center",children:i.jsxs("div",{className:"flex items-end gap-0.5 h-3",children:[i.jsx("span",{className:"w-0.5 bg-cyan-400 animate-eq-1"}),i.jsx("span",{className:"w-0.5 bg-cyan-300 animate-eq-2"}),i.jsx("span",{className:"w-0.5 bg-purple-400 animate-eq-3"})]})})]}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h4",{className:"text-xs sm:text-sm font-bold truncate leading-tight hover:text-cyan-400 transition-colors",children:r.title}),i.jsxs("p",{className:`text-[11px] sm:text-xs truncate ${z?"text-white/50":"text-neutral-500"}`,children:[r.artist," • ",i.jsxs("span",{className:"font-mono text-cyan-400",children:["#",r.index.toString().padStart(2,"0")]})]})]})]}),i.jsxs("div",{className:"flex flex-col items-center justify-center gap-1.5 flex-1 max-w-md",children:[i.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[i.jsx("button",{id:"player-shuffle-btn",onClick:()=>qe(!Ve),className:`p-1.5 rounded-full transition-colors hidden sm:block ${Ve?"text-cyan-400 font-bold":z?"text-white/40 hover:text-white":"text-neutral-400 hover:text-black"}`,title:Ve?"Shuffle Active":"Enable Shuffle","aria-label":"Shuffle",children:i.jsx(ki,{className:"w-4 h-4"})}),i.jsx("button",{id:"player-prev-btn",onClick:Xa,className:`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${z?"text-white hover:text-cyan-400":"text-neutral-700 hover:text-black"}`,title:"Previous Track (←)","aria-label":"Previous Track",children:i.jsx(vg,{className:"w-5 h-5 fill-current"})}),i.jsx("button",{id:"player-play-pause-btn",onClick:Qa,className:"w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black hover:bg-cyan-300 flex items-center justify-center font-bold text-xl shadow-xl hover:scale-105 active:scale-95 transition-all",title:w?"Pause (Space)":"Play (Space)","aria-label":w?"Pause":"Play",children:w?i.jsx(mn,{className:"w-5 h-5 fill-current"}):i.jsx(Rt,{className:"w-5 h-5 fill-current translate-x-0.5"})}),i.jsx("button",{id:"player-next-btn",onClick:bn,className:`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${z?"text-white hover:text-cyan-400":"text-neutral-700 hover:text-black"}`,title:"Next Track (→)","aria-label":"Next Track",children:i.jsx(kg,{className:"w-5 h-5 fill-current"})}),i.jsx("button",{id:"player-repeat-btn",onClick:()=>Le(!Z),className:`p-1.5 rounded-full transition-colors hidden sm:block ${Z?"text-cyan-400 font-bold":z?"text-white/40 hover:text-white":"text-neutral-400 hover:text-black"}`,title:Z?"Repeat Active":"Enable Repeat","aria-label":"Repeat",children:i.jsx(fg,{className:"w-4 h-4"})})]}),i.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold",children:[i.jsx("span",{className:"text-cyan-400",children:gn(te)}),i.jsx("span",{className:"text-white/30",children:"/"}),i.jsx("span",{className:z?"text-white/40":"text-neutral-400",children:gn(Fa)}),i.jsxs("span",{className:"hidden lg:inline-flex items-center gap-1 text-[10px] text-white/40 font-normal ml-2",children:[i.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[9px] font-mono",children:"Space"}),i.jsx("span",{children:"Play"}),i.jsx("span",{className:"text-white/20",children:"•"}),i.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[9px] font-mono",children:"←"}),i.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[9px] font-mono",children:"→"}),i.jsx("span",{children:"Tracks"})]})]})]}),i.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[i.jsxs("div",{className:"hidden md:flex items-center gap-2.5 w-36 lg:w-48",children:[i.jsx("span",{className:`text-[10px] font-bold tracking-wider ${z?"text-white/40":"text-neutral-400"}`,children:"VOL"}),i.jsx("button",{onClick:Ii,className:`p-1 rounded-md transition-colors ${z?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,"aria-label":se?"Unmute":"Mute",children:se||ze===0?i.jsx(Mg,{className:"w-3.5 h-3.5 text-cyan-400"}):i.jsx(Yg,{className:"w-3.5 h-3.5"})}),i.jsx("div",{className:"flex-1 flex items-center",children:i.jsx("input",{id:"player-volume-slider",type:"range",min:"0",max:"100",value:se?0:ze,onChange:Ni,className:"w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-400","aria-label":"Volume slider"})})]}),i.jsxs("button",{id:"player-queue-modal-btn",onClick:()=>F(!ne),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${ne?"bg-cyan-500 border-cyan-400 text-black font-bold shadow-lg shadow-cyan-500/25":z?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Playlist Queue & Up Next","aria-label":"Toggle Playlist Queue",children:[i.jsx(of,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden sm:inline text-[11px] uppercase tracking-wider",children:"Queue"}),i.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-400/20 text-cyan-300 font-mono",children:Ge.length})]}),i.jsxs("button",{id:"player-video-modal-btn",onClick:()=>K(!Fe),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${Fe?"bg-cyan-500 border-cyan-400 text-black font-bold":z?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Open Video View","aria-label":"Toggle Video Mode",children:[i.jsx(no,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden lg:inline text-[11px] uppercase tracking-wider",children:"Video"})]}),V&&i.jsxs("button",{id:"player-lyrics-btn",onClick:()=>V(r),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${z?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"View Full Lyrics","aria-label":"View Full Song Lyrics",children:[i.jsx(La,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden lg:inline text-[11px] uppercase tracking-wider",children:"Lyrics"})]}),i.jsxs("button",{id:"player-share-current-btn",onClick:()=>d(r),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${z?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black hover:bg-neutral-200"}`,title:"Share Song","aria-label":"Share current song",children:[i.jsx(Et,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden sm:inline text-[11px] uppercase tracking-wider",children:"Share"})]})]})]})})]}),ne&&i.jsxs("div",{id:"player-queue-drawer",className:`fixed bottom-24 sm:bottom-28 right-2 sm:right-6 w-[calc(100vw-16px)] sm:w-96 md:w-[420px] max-h-[70vh] z-50 rounded-2xl border shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden transition-all ${z?"bg-neutral-950/95 border-white/15 text-white shadow-cyan-950/40":"bg-white/95 border-neutral-200 text-neutral-900 shadow-xl"}`,children:[i.jsxs("div",{className:"p-3.5 sm:p-4 border-b border-white/10 flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(of,{className:"w-4 h-4 text-cyan-400"}),i.jsx("h3",{className:"font-bold text-sm tracking-wide",children:"Playlist Queue"}),i.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold",children:[Ge.length," Songs"]})]}),i.jsx("button",{onClick:()=>F(!1),className:`p-1.5 rounded-full hover:bg-white/10 transition-colors ${z?"text-white/60 hover:text-white":"text-neutral-500 hover:text-neutral-900"}`,"aria-label":"Close Queue",children:i.jsx(Ga,{className:"w-4 h-4"})})]}),i.jsxs("div",{className:"p-2 border-b border-white/10 flex items-center gap-1.5 bg-black/20 text-xs",children:[i.jsxs("button",{onClick:()=>at("current"),className:`flex-1 py-1.5 px-2 rounded-lg font-semibold text-center transition-all ${_e==="current"?"bg-cyan-500 text-black font-bold shadow-sm":z?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:["Current (",x.length,")"]}),(j==null?void 0:j.youtube)&&i.jsxs("button",{onClick:()=>{at("youtube"),p&&p("youtube")},className:`flex-1 py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${_e==="youtube"?"bg-cyan-500 text-black font-bold shadow-sm":z?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:[i.jsx(ll,{className:"w-3 h-3 text-red-500"}),i.jsxs("span",{children:["YouTube (",j.youtube.length,")"]})]}),(j==null?void 0:j.suno)&&i.jsxs("button",{onClick:()=>{at("suno"),p&&p("suno")},className:`flex-1 py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${_e==="suno"?"bg-cyan-500 text-black font-bold shadow-sm":z?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:[i.jsx(ya,{className:"w-3 h-3 text-cyan-400"}),i.jsxs("span",{children:["Suno (",j.suno.length,")"]})]})]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 max-h-[50vh] divide-y divide-white/5",children:Ge.map((B,M)=>{const fe=(r==null?void 0:r.id)===B.id;return i.jsxs("div",{onClick:()=>{N(B),U(!0)},className:`p-2 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition-all ${fe?z?"bg-cyan-500/20 border border-cyan-400/40 text-white shadow-sm":"bg-cyan-50 border border-cyan-300 text-cyan-950 font-medium":z?"hover:bg-white/5 text-white/80 hover:text-white":"hover:bg-neutral-100 text-neutral-800"}`,children:[i.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[i.jsx("span",{className:"font-mono text-[10px] opacity-40 w-4 text-center shrink-0",children:fe?i.jsx("span",{className:"text-cyan-400 font-bold",children:"▶"}):(B.index||M+1).toString().padStart(2,"0")}),i.jsx("div",{className:"w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-neutral-900",children:i.jsx("img",{src:B.thumbnail,alt:B.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"})}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("p",{className:"text-xs font-bold truncate leading-tight",children:B.title}),i.jsx("p",{className:`text-[10px] truncate ${z?"text-white/50":"text-neutral-500"}`,children:B.artist})]})]}),i.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[fe&&w&&i.jsxs("div",{className:"flex items-end gap-0.5 h-2.5",children:[i.jsx("span",{className:"w-0.5 bg-cyan-400 animate-eq-1"}),i.jsx("span",{className:"w-0.5 bg-cyan-300 animate-eq-2"}),i.jsx("span",{className:"w-0.5 bg-purple-400 animate-eq-3"})]}),i.jsx("span",{className:"font-mono text-[10px] opacity-60",children:B.duration})]})]},`${B.id}-${M}`)})})]})]})},Dg=({track:r,isOpen:x,onClose:N,isDarkMode:d})=>{const[V,z]=C.useState(!1);if(!x||!r)return null;const w=typeof window<"u"?window.location.href:"",U=r.youtubeUrl||w,j=`Check out "${r.title}" by DomInNATEly! 🎸🔥`,p=async()=>{try{navigator.clipboard&&(await navigator.clipboard.writeText(U),z(!0),setTimeout(()=>z(!1),2500))}catch{const ae=document.createElement("textarea");ae.value=U,document.body.appendChild(ae),ae.select(),document.execCommand("copy"),document.body.removeChild(ae),z(!0),setTimeout(()=>z(!1),2500)}},L=async()=>{if(navigator.share)try{await navigator.share({title:`${r.title} - DomInNATEly`,text:j,url:U})}catch{}},_=encodeURIComponent(U),G=encodeURIComponent(`${j} ${U}`),te=encodeURIComponent(`${r.title} - DomInNATEly`),P=[{name:"X (Twitter)",url:`https://twitter.com/intent/tweet?text=${G}`,color:"bg-black text-white hover:bg-neutral-800 border-neutral-700",icon:i.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})},{name:"Facebook",url:`https://www.facebook.com/sharer/sharer.php?u=${_}`,color:"bg-[#1877F2] text-white hover:bg-[#166fe5] border-transparent",icon:i.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})},{name:"WhatsApp",url:`https://api.whatsapp.com/send?text=${G}`,color:"bg-[#25D366] text-white hover:bg-[#20ba59] border-transparent",icon:i.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"})})},{name:"Reddit",url:`https://reddit.com/submit?url=${_}&title=${te}`,color:"bg-[#FF4500] text-white hover:bg-[#e03d00] border-transparent",icon:i.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"})})},{name:"Telegram",url:`https://t.me/share/url?url=${_}&text=${G}`,color:"bg-[#229ED9] text-white hover:bg-[#1f8ec4] border-transparent",icon:i.jsx(gg,{className:"w-4 h-4 fill-current"})}];return i.jsx("div",{id:"share-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity",onClick:N,children:i.jsxs("div",{id:"share-modal-container",className:`w-full max-w-md rounded-2xl border shadow-2xl p-6 relative transition-all ${d?"bg-[#0a0a0a] border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:ae=>ae.stopPropagation(),children:[i.jsx("button",{id:"close-share-modal",onClick:N,className:`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${d?"text-white/40 hover:text-white hover:bg-white/10":"text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"}`,"aria-label":"Close modal",children:i.jsx(Ga,{className:"w-5 h-5"})}),i.jsxs("div",{className:"flex items-start gap-3.5 mb-5",children:[i.jsx("div",{className:"relative w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-black shadow-md",children:i.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"})}),i.jsxs("div",{className:"min-w-0 flex-1 pr-6",children:[i.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-cyan-400 font-bold uppercase tracking-wider mb-0.5",children:[i.jsx(Et,{className:"w-3.5 h-3.5"}),"Share Track"]}),i.jsx("h3",{className:"font-bold text-base leading-snug truncate",children:r.title}),i.jsxs("p",{className:`text-xs ${d?"text-white/50":"text-neutral-500"}`,children:["by ",i.jsx("span",{className:"font-medium text-cyan-400",children:r.artist})," • ",r.duration]})]})]}),i.jsxs("div",{className:"mb-5",children:[i.jsx("label",{className:`block text-xs font-bold uppercase tracking-wider mb-1.5 ${d?"text-white/50":"text-neutral-600"}`,children:"Track Link"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("input",{id:"share-link-input",type:"text",readOnly:!0,value:U,className:`flex-1 text-xs px-3 py-2.5 rounded-xl border font-mono truncate focus:outline-hidden ${d?"bg-black/60 border-white/10 text-cyan-300":"bg-neutral-50 border-neutral-300 text-neutral-800"}`}),i.jsx("button",{id:"copy-track-link-btn",onClick:p,className:`px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shrink-0 ${V?"bg-emerald-500 text-black":"bg-cyan-500 hover:bg-cyan-400 text-black shadow-md shadow-cyan-500/20"}`,children:V?i.jsxs(i.Fragment,{children:[i.jsx(to,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Copied"})]}):i.jsxs(i.Fragment,{children:[i.jsx(ao,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Copy"})]})})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-xs font-bold uppercase tracking-wider mb-2.5 ${d?"text-white/50":"text-neutral-600"}`,children:"Share on Social Networks"}),i.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5",children:[P.map(ae=>i.jsxs("a",{href:ae.url,target:"_blank",rel:"noopener noreferrer",className:`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border shadow-xs transition-transform active:scale-95 ${ae.color}`,children:[ae.icon,i.jsx("span",{children:ae.name})]},ae.name)),i.jsxs("a",{href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FF0000] text-white hover:bg-[#d90000] shadow-xs active:scale-95 transition-transform",children:[i.jsx(ji,{className:"w-4 h-4 fill-current"}),i.jsx("span",{children:"YouTube"})]})]})]}),typeof navigator<"u"&&"share"in navigator&&i.jsx("div",{className:"mt-4 pt-4 border-t border-white/10",children:i.jsxs("button",{id:"native-device-share-btn",onClick:L,className:`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all ${d?"bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-cyan-400":"bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"}`,children:[i.jsx(Et,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"Open Device Share Sheet"})]})})]})})},Kr=({lyrics:r,title:x,artist:N,isDarkMode:d,maxHeight:V="max-h-[360px]",compact:z=!1})=>{const[w,U]=C.useState(!1),j=()=>{r&&(navigator.clipboard.writeText(r),U(!0),setTimeout(()=>U(!1),2e3))};if(!r||r.trim()==="")return i.jsxs("div",{className:"py-10 text-center text-xs opacity-60 flex flex-col items-center justify-center gap-2",children:[i.jsx(La,{className:"w-6 h-6 opacity-40 text-cyan-400"}),i.jsx("p",{children:"No written lyrics available for this track."})]});const p=r.split(`
`);return i.jsxs("div",{className:"w-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(La,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-cyan-400 font-mono",children:"Full Song Lyrics"})]}),i.jsx("button",{onClick:j,className:`px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1.5 transition-all ${w?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":d?"bg-white/5 hover:bg-white/10 text-white/80 border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300"}`,title:"Copy lyrics to clipboard","aria-label":"Copy lyrics",children:w?i.jsxs(i.Fragment,{children:[i.jsx(to,{className:"w-3 h-3 text-emerald-400"}),i.jsx("span",{children:"Copied!"})]}):i.jsxs(i.Fragment,{children:[i.jsx(ao,{className:"w-3 h-3 opacity-70"}),i.jsx("span",{children:"Copy"})]})})]}),i.jsx("div",{className:`overflow-y-auto pr-2 space-y-2 ${V} custom-scrollbar font-mono ${z?"text-[11px] leading-relaxed":"text-xs sm:text-sm leading-relaxed"}`,children:p.map((L,_)=>{const G=L.trim();if(!G)return i.jsx("div",{className:"h-2"},_);if(G.startsWith("**[")||G.startsWith("[")||G.endsWith("]**")||G.endsWith("]")){const P=G.replace(/\*\*/g,"");return i.jsx("div",{className:"pt-2 pb-0.5 text-cyan-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs",children:i.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 inline-block",children:P})},_)}return i.jsx("p",{className:`${d?"text-white/80":"text-neutral-800"} hover:text-cyan-300 transition-colors select-text`,children:G},_)})})]})},Rg=({track:r,isOpen:x,onClose:N,isPlaying:d,isCurrentTrack:V,onPlay:z,onOpenShare:w,isDarkMode:U})=>!x||!r?null:i.jsx("div",{id:"track-detail-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md",onClick:N,children:i.jsxs("div",{id:"track-detail-container",className:`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden transition-all relative ${U?"bg-[#0a0a0a] border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:j=>j.stopPropagation(),children:[i.jsx("button",{id:"close-track-detail-btn",onClick:N,className:"absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white border border-white/10 backdrop-blur-sm transition-colors","aria-label":"Close track details",children:i.jsx(Ga,{className:"w-5 h-5"})}),i.jsxs("div",{className:"relative aspect-video w-full bg-black",children:[i.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"}),i.jsxs("div",{className:"absolute bottom-4 left-6 flex items-center gap-3",children:[i.jsx("button",{onClick:()=>z(r),className:"w-12 h-12 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center shadow-xl shadow-cyan-950/60 font-bold transform active:scale-95 transition-transform",children:V&&d?i.jsx(mn,{className:"w-5 h-5 fill-current"}):i.jsx(Rt,{className:"w-5 h-5 fill-current translate-x-0.5"})}),i.jsxs("div",{children:[i.jsxs("span",{className:"text-xs uppercase font-mono font-bold text-cyan-400",children:["Track #",r.index.toString().padStart(2,"0")]}),i.jsx("h2",{className:"text-xl font-bold leading-tight drop-shadow-md text-white",children:r.title})]})]})]}),i.jsxs("div",{className:"p-6",children:[i.jsxs("div",{className:`flex items-center justify-between gap-4 pb-4 border-b ${U?"border-white/10":"border-neutral-200"}`,children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-white/40",children:"Artist / Band"}),i.jsx("p",{className:"text-sm font-bold text-cyan-400",children:r.artist})]}),i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-white/40",children:"Duration"}),i.jsxs("p",{className:"text-sm font-mono font-semibold flex items-center gap-1 text-cyan-400",children:[i.jsx(rf,{className:"w-3.5 h-3.5"}),r.duration]})]}),i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-white/40",children:"Category"}),i.jsx("p",{className:"text-sm font-semibold capitalize text-white/90",children:r.category})]})]}),r.description&&i.jsxs("div",{className:"mt-4",children:[i.jsx("h4",{className:"text-xs uppercase font-semibold tracking-wider text-white/40 mb-1.5",children:"Track Background"}),i.jsx("p",{className:`text-sm leading-relaxed ${U?"text-white/70":"text-neutral-700"}`,children:r.description})]}),i.jsx("div",{className:`mt-4 p-4 rounded-2xl border ${U?"bg-white/5 border-white/10":"bg-neutral-50 border-neutral-200"}`,children:i.jsx(Kr,{lyrics:Fr(r),title:r.title,artist:r.artist,isDarkMode:U,maxHeight:"max-h-[280px]"})}),i.jsxs("div",{className:"mt-6 flex items-center gap-3",children:[i.jsxs("button",{onClick:()=>w(r),className:"flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95",children:[i.jsx(Et,{className:"w-4 h-4"}),i.jsx("span",{children:"Share Song"})]}),i.jsxs("a",{href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:`py-2.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${U?"bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-cyan-400":"bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"}`,children:[i.jsx(ji,{className:"w-4 h-4 text-[#FF0000]"}),i.jsx("span",{children:"Watch on YouTube"})]})]})]})]})}),qg=({track:r,isOpen:x,onClose:N,isDarkMode:d,isPlaying:V=!1,isCurrentTrack:z=!1,onPlay:w,onOpenShare:U})=>{if(!x||!r)return null;const j=Fr(r),p="thumbnail"in r?r.thumbnail:r.image;return i.jsx("div",{id:"lyrics-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300",onClick:N,children:i.jsxs("div",{id:"lyrics-modal-container",className:`relative w-full max-w-2xl max-h-[85vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden transition-all ${d?"bg-neutral-950/95 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:L=>L.stopPropagation(),children:[i.jsxs("div",{className:"p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-3 bg-black/30",children:[i.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[p&&i.jsx("img",{src:p,alt:r.title,className:"w-12 h-12 rounded-xl object-cover shrink-0 border border-white/10 shadow-md",referrerPolicy:"no-referrer"}),i.jsxs("div",{className:"min-w-0",children:[i.jsxs("span",{className:"text-[10px] font-mono uppercase font-bold text-cyan-400",children:["Track #",r.index," • ","isSuno"in r&&r.isSuno?"Suno AI Collection":"YouTube Media"]}),i.jsx("h3",{className:"text-base sm:text-lg font-black truncate leading-tight",children:r.title}),i.jsx("p",{className:`text-xs truncate ${d?"text-white/60":"text-neutral-500"}`,children:r.artist})]})]}),i.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[w&&i.jsx("button",{onClick:()=>w(r),className:"w-10 h-10 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center font-bold shadow-md transition-all transform active:scale-95",title:z&&V?"Pause":"Play","aria-label":z&&V?"Pause":"Play",children:z&&V?i.jsx(mn,{className:"w-4 h-4 fill-current"}):i.jsx(Rt,{className:"w-4 h-4 fill-current translate-x-0.5"})}),i.jsx("button",{onClick:N,className:"p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors","aria-label":"Close lyrics modal",children:i.jsx(Ga,{className:"w-4 h-4"})})]})]}),i.jsx("div",{className:"p-4 sm:p-6 overflow-y-auto flex-1 custom-scrollbar",children:i.jsx(Kr,{lyrics:j,title:r.title,artist:r.artist,isDarkMode:d,maxHeight:"max-h-[50vh]"})}),i.jsxs("div",{className:"p-3.5 sm:p-4 border-t border-white/10 bg-black/40 flex items-center justify-between gap-3 text-xs",children:[i.jsxs("div",{className:"flex items-center gap-1.5 text-white/50 text-[11px] font-mono",children:[i.jsx(Zr,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"DomInNATEly Official Lyrics"})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[U&&i.jsxs("button",{onClick:()=>U(r),className:"px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-all",children:[i.jsx(Et,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"Share"})]}),i.jsx("button",{onClick:N,className:"px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all",children:"Done"})]})]})]})})},Lg=({track:r,isPlaying:x,isCurrentTrack:N,onPlay:d,isDarkMode:V})=>i.jsxs("div",{id:`suno-track-card-${r.id}`,className:`group relative rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden ${N?V?"bg-white/[0.08] border-cyan-500/50 shadow-lg shadow-cyan-500/10":"bg-cyan-50/70 border-cyan-400 shadow-md":V?"bg-neutral-900/60 border-white/5 hover:border-white/20 hover:bg-neutral-900/90":"bg-white border-neutral-200 hover:border-neutral-300 shadow-sm"}`,children:[i.jsxs("div",{onClick:()=>d(r),className:"relative aspect-square w-full overflow-hidden bg-neutral-950 cursor-pointer",children:[i.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",loading:"lazy"}),i.jsxs("div",{className:"absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white font-mono text-[11px] font-bold border border-white/10",children:["#",r.index]}),i.jsx("div",{className:"absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-cyan-300 font-mono text-[11px] font-bold border border-white/10",children:r.durationFormatted}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity"}),i.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:i.jsx("button",{type:"button",onClick:z=>{z.stopPropagation(),d(r)},"aria-label":N&&x?"Pause track":"Play track",className:`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all transform duration-300 active:scale-95 ${N&&x?"bg-cyan-400 text-black shadow-cyan-500/50 scale-105 ring-4 ring-cyan-400/40":"bg-white/90 text-black hover:bg-cyan-400 opacity-90 group-hover:opacity-100 group-hover:scale-110 shadow-lg"}`,children:N&&x?i.jsx(mn,{className:"w-6 h-6 fill-current"}):i.jsx(Rt,{className:"w-6 h-6 fill-current translate-x-0.5"})})}),N&&x&&i.jsxs("div",{className:"absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-400/40 flex items-center gap-1",children:[i.jsx("div",{className:"w-1 h-3 bg-cyan-400 animate-pulse"}),i.jsx("div",{className:"w-1 h-4 bg-cyan-400 animate-pulse delay-75"}),i.jsx("div",{className:"w-1 h-2 bg-cyan-400 animate-pulse delay-150"}),i.jsx("span",{className:"text-[10px] font-mono font-bold text-cyan-300 ml-1 uppercase",children:"Playing"})]})]}),i.jsx("div",{onClick:()=>d(r),className:"p-3.5 sm:p-4 cursor-pointer",children:i.jsx("h3",{className:`font-bold text-sm sm:text-base leading-snug line-clamp-1 transition-colors ${N?V?"text-cyan-400":"text-cyan-600":V?"text-white hover:text-cyan-400":"text-neutral-900 hover:text-cyan-600"}`,title:r.title,children:r.title})})]}),Gg=({track:r,onClose:x,isDarkMode:N,onPlayTrack:d,isPlaying:V,isCurrentTrack:z})=>{const[w,U]=C.useState(!1);if(!r)return null;const j=()=>{navigator.clipboard.writeText(r.lyrics||""),U(!0),setTimeout(()=>U(!1),2e3)},p=L=>{if(!L||L.trim()==="")return i.jsx("div",{className:"py-12 text-center text-sm opacity-60",children:"Instrumental or no written lyrics provided for this track."});const _=L.split(`
`);return i.jsx("div",{className:"space-y-2 font-mono text-xs sm:text-sm leading-relaxed",children:_.map((G,te)=>{const P=G.trim(),ae=P.startsWith("**[")||P.startsWith("[")||P.endsWith("]**")||P.endsWith("]"),Ae=P.startsWith("*")&&P.endsWith("*");return ae?i.jsx("div",{className:"pt-3 pb-1 text-cyan-400 font-bold tracking-wider uppercase text-[11px] sm:text-xs",children:P.replace(/\*\*/g,"")},te):P?i.jsx("div",{className:`${Ae?"italic opacity-80":N?"text-white/90":"text-neutral-800"}`,children:P.replace(/\*\*/g,"").replace(/\*/g,"")},te):i.jsx("div",{className:"h-2"},te)})})};return i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity",onClick:x,children:i.jsxs("div",{className:`relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl border overflow-hidden ${N?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:L=>L.stopPropagation(),children:[i.jsxs("div",{className:`p-4 sm:p-5 border-b flex items-center justify-between gap-4 ${N?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[i.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[i.jsx("img",{src:r.image,alt:r.title,className:"w-12 h-12 rounded-lg object-cover shadow border border-white/10"}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h3",{className:"font-bold text-base sm:text-lg truncate tracking-tight",children:r.title}),i.jsxs("p",{className:"text-xs text-cyan-400 font-medium truncate",children:[r.artist," • ",r.durationFormatted]})]})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsxs("button",{onClick:j,className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${N?"bg-white/5 border-white/10 hover:bg-white/10 text-white/80":"bg-white border-neutral-300 hover:bg-neutral-100 text-neutral-700"}`,title:"Copy Lyrics",children:[w?i.jsx(to,{className:"w-3.5 h-3.5 text-emerald-400"}):i.jsx(ao,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:w?"Copied":"Copy"})]}),i.jsxs("a",{href:r.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${N?"bg-white/5 border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 text-white/80":"bg-white border-neutral-300 hover:text-cyan-600 text-neutral-700"}`,title:"Open on Suno.com",children:[i.jsx("span",{className:"hidden sm:inline",children:"Suno"}),i.jsx(Ue,{className:"w-3.5 h-3.5"})]}),i.jsx("button",{onClick:x,className:`p-2 rounded-lg transition-colors ${N?"hover:bg-white/10 text-white/70":"hover:bg-neutral-200 text-neutral-600"}`,"aria-label":"Close",children:i.jsx(Ga,{className:"w-5 h-5"})})]})]}),r.tags&&r.tags.length>0&&i.jsxs("div",{className:`px-5 py-2.5 border-b flex flex-wrap gap-1.5 text-[11px] ${N?"border-white/5 bg-black/40":"border-neutral-100 bg-neutral-100/50"}`,children:[i.jsx("span",{className:"opacity-50 uppercase tracking-wider text-[10px] self-center mr-1 font-mono",children:"Styles:"}),r.tags.map((L,_)=>i.jsx("span",{className:`px-2 py-0.5 rounded-full border ${N?"bg-white/5 border-white/10 text-white/80":"bg-white border-neutral-200 text-neutral-700"}`,children:L},_))]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 custom-scrollbar",children:p(r.lyrics)}),i.jsxs("div",{className:`p-4 border-t flex items-center justify-between gap-3 text-xs ${N?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[i.jsxs("div",{className:"flex items-center gap-2 text-white/50 text-[11px]",children:[i.jsx(ya,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"AI-generated vocals and production via Suno v4.5"})]}),d&&i.jsxs("button",{onClick:()=>d(r),className:"px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20",children:[i.jsx(Zr,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:z&&V?"Pause Audio":"Play Audio"})]})]})]})})},Wg=({track:r,onClose:x,isDarkMode:N})=>{const[d,V]=C.useState("embed");return r?i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all",onClick:x,children:i.jsxs("div",{className:`relative w-full max-w-sm sm:max-w-[390px] flex flex-col rounded-2xl shadow-2xl border overflow-hidden max-h-[95vh] ${N?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:z=>z.stopPropagation(),children:[i.jsxs("div",{className:`p-4 border-b flex items-center justify-between gap-3 ${N?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[i.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[i.jsx("div",{className:"w-9 h-9 rounded-lg overflow-hidden border border-white/10 flex-shrink-0",children:i.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover"})}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h3",{className:"font-bold text-sm sm:text-base truncate tracking-tight",children:r.title}),i.jsx("p",{className:"text-[11px] text-cyan-400 font-mono truncate",children:r.artist})]})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsxs("div",{className:`flex items-center p-1 rounded-lg border text-xs font-semibold ${N?"bg-black/50 border-white/10":"bg-neutral-100 border-neutral-300"}`,children:[i.jsxs("button",{onClick:()=>V("embed"),className:`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${d==="embed"?"bg-cyan-500 text-black font-bold shadow-sm":N?"text-white/70 hover:text-white":"text-neutral-600 hover:text-black"}`,children:[i.jsx(uf,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Suno Embed"})]}),i.jsxs("button",{onClick:()=>V("video"),className:`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${d==="video"?"bg-cyan-500 text-black font-bold shadow-sm":N?"text-white/70 hover:text-white":"text-neutral-600 hover:text-black"}`,children:[i.jsx(Tg,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Video MP4"})]})]}),i.jsx("a",{href:r.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${N?"bg-white/5 border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 text-white/80":"bg-white border-neutral-300 hover:text-cyan-600 text-neutral-700"}`,title:"Open song on Suno",children:i.jsx(Ue,{className:"w-3.5 h-3.5"})}),i.jsx("button",{onClick:x,className:`p-2 rounded-lg transition-colors ${N?"hover:bg-white/10 text-white/70":"hover:bg-neutral-200 text-neutral-600"}`,"aria-label":"Close",children:i.jsx(Ga,{className:"w-5 h-5"})})]})]}),i.jsx("div",{className:"relative w-full aspect-[9/16] max-h-[72vh] bg-black flex items-center justify-center overflow-hidden",children:d==="embed"?i.jsx("iframe",{src:encodeURI(r.embedUrl||""),title:`Suno Embed - ${r.title}`,className:"w-full h-full border-0",allow:"autoplay",loading:"lazy"}):i.jsx("video",{src:encodeURI(r.videoUrl||""),controls:!0,autoPlay:!0,playsInline:!0,className:"w-full h-full object-cover bg-black",poster:r.image})}),i.jsxs("div",{className:`p-3.5 border-t flex items-center justify-between text-xs ${N?"border-white/10 bg-white/5 text-white/60":"border-neutral-200 bg-neutral-50 text-neutral-600"}`,children:[i.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[i.jsx(ya,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"Interactive player hosted by Suno.ai"})]}),i.jsxs("a",{href:"https://suno.com/playlist/26af3597-73d4-491c-a9b3-aac9a0d55c82",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-400 underline underline-offset-2 flex items-center gap-1 font-mono text-[11px]",children:[i.jsx("span",{children:"DomInNATEly Top Hits Playlist"}),i.jsx(Ue,{className:"w-3 h-3"})]})]})]})}):null},Xg=({track:r,isOpen:x,onClose:N,isDarkMode:d})=>{const[V,z]=C.useState(!1),[w,U]=C.useState(!1);if(!x)return null;const j=r?r.sunoUrl:ft.url,p=r?r.title:ft.name,L=r?r.artist:`Curated playlist by ${ft.user_display_name}`,_=async()=>{try{await navigator.clipboard.writeText(j),z(!0),setTimeout(()=>z(!1),2e3)}catch{}},G=async()=>{try{await navigator.clipboard.writeText(ft.url),U(!0),setTimeout(()=>U(!1),2e3)}catch{}},te=async()=>{if(navigator.share)try{await navigator.share({title:`${p} - DomInNATEly`,text:`Listen to "${p}" on Suno!`,url:j})}catch{}};return i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity",onClick:N,children:i.jsxs("div",{className:`relative w-full max-w-md rounded-2xl p-6 shadow-2xl border ${d?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:P=>P.stopPropagation(),children:[i.jsxs("div",{className:"flex items-start justify-between mb-4",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",children:i.jsx(Et,{className:"w-5 h-5"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-base",children:r?"Share Track":"Share Playlist"}),i.jsx("p",{className:"text-xs opacity-60",children:"Spread the sound of DomInNATEly"})]})]}),i.jsx("button",{onClick:N,className:"p-1 rounded-lg hover:bg-white/10 transition-colors opacity-70 hover:opacity-100",children:i.jsx(Ga,{className:"w-5 h-5"})})]}),i.jsxs("div",{className:`p-3 rounded-xl border flex items-center gap-3 mb-5 ${d?"bg-white/5 border-white/10":"bg-neutral-50 border-neutral-200"}`,children:[i.jsx("img",{src:r?r.image:ft.cover,alt:p,className:"w-12 h-12 rounded-lg object-cover border border-white/10"}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsx("h4",{className:"font-bold text-sm truncate",children:p}),i.jsx("p",{className:"text-xs text-cyan-400 truncate",children:L})]})]}),i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{children:[i.jsx("label",{className:"text-[11px] font-mono uppercase tracking-wider opacity-60 block mb-1.5",children:r?"Track Suno Link":"Playlist Suno Link"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("input",{type:"text",readOnly:!0,value:j,className:`flex-1 px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${d?"bg-neutral-900 border-white/10 text-white/90":"bg-neutral-100 border-neutral-300 text-neutral-800"}`}),i.jsxs("button",{onClick:_,className:"px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20",children:[V?i.jsx(to,{className:"w-4 h-4 text-black"}):i.jsx(ao,{className:"w-4 h-4"}),i.jsx("span",{children:V?"Copied":"Copy"})]})]})]}),r&&i.jsxs("div",{children:[i.jsx("label",{className:"text-[11px] font-mono uppercase tracking-wider opacity-60 block mb-1.5",children:"DomInNATEly Top Hits Playlist Link"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("input",{type:"text",readOnly:!0,value:ft.url,className:`flex-1 px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${d?"bg-neutral-900 border-white/10 text-white/90":"bg-neutral-100 border-neutral-300 text-neutral-800"}`}),i.jsxs("button",{onClick:G,className:`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${d?"bg-white/5 border-white/10 text-white hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[w?i.jsx(to,{className:"w-4 h-4 text-emerald-400"}):i.jsx(ao,{className:"w-4 h-4"}),i.jsx("span",{children:w?"Copied":"Copy"})]})]})]})]}),typeof navigator<"u"&&"share"in navigator&&i.jsxs("button",{onClick:te,className:"w-full mt-4 py-2.5 rounded-xl border border-white/15 hover:border-cyan-400/50 flex items-center justify-center gap-2 text-xs font-bold transition-all",children:[i.jsx(Et,{className:"w-4 h-4 text-cyan-400"}),i.jsx("span",{children:"Open System Share Menu"})]}),i.jsxs("div",{className:"mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs",children:[i.jsxs("a",{href:ft.url,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-[11px]",children:[i.jsx("span",{children:"Open Playlist on Suno"}),i.jsx(Ue,{className:"w-3 h-3"})]}),i.jsx("button",{onClick:N,className:"opacity-60 hover:opacity-100 text-xs",children:"Close"})]})]})})},gf=({isDarkMode:r})=>i.jsxs("div",{id:"social-subscribe-banner",className:`relative overflow-hidden rounded-2xl border p-4 sm:p-5 mb-7 transition-all ${r?"bg-gradient-to-r from-neutral-900/90 via-black to-neutral-900/90 border-cyan-500/20 shadow-xl":"bg-gradient-to-r from-cyan-50/80 via-white to-pink-50/80 border-cyan-200/80 shadow-md"}`,children:[i.jsx("div",{className:"absolute top-0 right-1/4 w-72 h-36 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"}),i.jsx("div",{className:"absolute bottom-0 left-1/4 w-72 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[i.jsxs("div",{className:"flex items-start sm:items-center gap-3",children:[i.jsx("div",{className:`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border shadow-inner ${r?"bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border-white/10 text-cyan-400":"bg-cyan-100 border-cyan-200 text-cyan-600"}`,children:i.jsx(df,{className:"w-5 h-5 text-red-500 fill-red-500 animate-pulse"})}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsxs("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1",children:[i.jsx(ya,{className:"w-3.5 h-3.5"}),"Support the Music"]}),i.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded-full border ${r?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-200 text-neutral-600"}`,children:"Official Channels"})]}),i.jsxs("h3",{className:"text-base sm:text-lg font-black tracking-tight leading-snug mt-0.5",children:["Please Like & Subscribe to my"," ",i.jsx("a",{href:"https://www.youtube.com/@DomInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-red-500 hover:underline inline-flex items-center gap-0.5",children:"YouTube"})," ","and"," ",i.jsx("a",{href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-pink-400 hover:underline inline-flex items-center gap-0.5",children:"TikTok"})," ","channel!"]}),i.jsx("p",{className:`text-xs mt-0.5 ${r?"text-white/65":"text-neutral-600"}`,children:"Stream music, drop a like on videos, follow for upcoming track drops & connect across socials!"})]})]}),i.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[i.jsxs("a",{id:"cta-youtube-subscribe",href:"https://www.youtube.com/@DomInNATEly?sub_confirmation=1",target:"_blank",rel:"noopener noreferrer",className:"group px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white flex items-center gap-1.5 shadow-md shadow-red-600/25 transition-transform active:scale-95 shrink-0",title:"Subscribe to DomInNATEly on YouTube",children:[i.jsx(Zy,{className:"w-3.5 h-3.5 fill-current group-hover:rotate-12 transition-transform"}),i.jsx("span",{children:"Subscribe YT"}),i.jsx(Ue,{className:"w-3 h-3 opacity-70"})]}),i.jsxs("a",{id:"cta-tiktok-follow",href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:"group px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white flex items-center gap-1.5 shadow-md shadow-pink-600/25 transition-transform active:scale-95 shrink-0",title:"Follow DomInNATEly on TikTok",children:[i.jsx("span",{className:"text-sm",children:"🎵"}),i.jsx("span",{children:"Follow TikTok"}),i.jsx(Ue,{className:"w-3 h-3 opacity-70"})]}),i.jsx("div",{className:"flex flex-wrap items-center gap-1.5 pt-1 lg:pt-0",children:yf.map(x=>i.jsxs("a",{id:`social-link-${x.id}`,href:x.url,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-300 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100 hover:text-cyan-700"}`,title:`${x.label}: ${x.url}`,children:[i.jsx("span",{className:"text-xs",children:x.icon}),i.jsx("span",{className:"font-semibold text-[11px]",children:x.name}),i.jsx(Ue,{className:"w-2.5 h-2.5 opacity-50"})]},x.id))})]})]})]}),Qg=({isDarkMode:r,currentTrack:x,isPlaying:N,onPlayTrack:d,onTogglePlayPause:V,onTrackChange:z,onSwitchToYouTube:w})=>{const[U,j]=C.useState(""),[p,L]=C.useState("all"),[_,G]=C.useState("index"),[te,P]=C.useState("grid"),[ae,Ae]=C.useState(null),[ze,Re]=C.useState(null),[se,Se]=C.useState(null),Ve=C.useMemo(()=>[{id:"all",label:"All Tracks"},{id:"alt-drill",label:"Alt-Drill & Trap"},{id:"rock",label:"Rock & Alt Pop"},{id:"hip-hop",label:"Rap & Hip-Hop"},{id:"duet",label:"Duets"},{id:"ballad",label:"Ballads & Acoustic"}],[]),qe=C.useMemo(()=>{const K=ft.totalDurationSeconds,ne=Math.floor(K/3600),F=Math.floor(K%3600/60);return`${ne} hr ${F} min`},[]),Z=C.useMemo(()=>{let K=[...ht];if(U.trim()!==""){const ne=U.toLowerCase().trim();K=K.filter(F=>F.title.toLowerCase().includes(ne)||F.artist.toLowerCase().includes(ne)||F.tags.some(_e=>_e.toLowerCase().includes(ne))||F.lyrics.toLowerCase().includes(ne))}return p!=="all"&&(K=K.filter(ne=>{const F=(ne.tags.join(" ")+" "+ne.title+" "+ne.lyrics).toLowerCase();return p==="alt-drill"?F.includes("drill")||F.includes("trap")||F.includes("dubstep"):p==="rock"?F.includes("rock")||F.includes("pop")||F.includes("punk"):p==="hip-hop"?F.includes("rap")||F.includes("hip-hop")||F.includes("hip hop"):p==="duet"?F.includes("duet")||F.includes("female vocals"):p==="ballad"?F.includes("ballad")||F.includes("acoustic")||F.includes("piano"):!0})),K.sort((ne,F)=>_==="title"?ne.title.localeCompare(F.title):_==="duration-desc"?F.duration-ne.duration:_==="duration-asc"?ne.duration-F.duration:ne.index-F.index),K},[U,p,_]),Le=()=>{Z.length>0&&d(Z[0])},Fe=()=>{if(Z.length>0){const K=Math.floor(Math.random()*Z.length);d(Z[K])}};return i.jsxs("div",{className:"w-full flex flex-col",children:[i.jsxs("section",{id:"suno-hero-banner",className:`relative overflow-hidden rounded-3xl border mb-8 p-6 sm:p-8 md:p-10 transition-colors ${r?"bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 border-white/10 shadow-2xl":"bg-gradient-to-br from-cyan-50/80 via-white to-neutral-100 border-neutral-200 shadow-lg"}`,children:[i.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"}),i.jsx("div",{className:"absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8",children:[i.jsxs("div",{className:"relative flex-shrink-0 group",children:[i.jsx("div",{className:"w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-neutral-900",children:i.jsx("img",{src:ft.cover,alt:ft.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),i.jsxs("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-black font-mono font-bold text-[10px] tracking-wider uppercase shadow-lg shadow-cyan-500/30 flex items-center gap-1.5 whitespace-nowrap",children:[i.jsx(cf,{className:"w-3 h-3 fill-current"}),i.jsx("span",{children:"Suno Top Hits"})]})]}),i.jsxs("div",{className:"flex-1 text-center md:text-left flex flex-col justify-between",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3",children:[i.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-cyan-400/15 text-cyan-400 border border-cyan-400/30 flex items-center gap-1.5",children:[i.jsx(ya,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Suno Playlist"})]}),i.jsxs("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:[ht.length," Official Tracks"]}),i.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:qe})]}),i.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight",children:ft.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium",children:[i.jsx("span",{className:"text-cyan-400 font-bold",children:ft.user_display_name}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-pink-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"🎵 TikTok: @domInNATEly"}),i.jsx(Ue,{className:"w-3 h-3"})]}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:"https://www.youtube.com/@DomInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-red-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"▶️ YouTube: @DomInNATEly"}),i.jsx(Ue,{className:"w-3 h-3"})]}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:"https://nate-mina.github.io/Portfolio-CV/",target:"_blank",rel:"noopener noreferrer",className:"text-cyan-300 hover:underline flex items-center gap-1 font-mono text-xs",title:"About Nate Mina - Portfolio & CV",children:[i.jsx("span",{children:"👤 About Me"}),i.jsx(Ue,{className:"w-3 h-3"})]})]}),i.jsxs("p",{className:`mt-3 text-sm max-w-2xl leading-relaxed ${r?"text-white/70":"text-neutral-600"}`,children:[ft.description,". Stream the official Suno AI audio collection featuring high-fidelity guitars, dual vocal anthems, hard-hitting trap beats, and psychological lyricism."]})]}),i.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3",children:[i.jsxs("button",{id:"suno-play-all-btn",onClick:Le,className:"px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-400/25 transition-transform active:scale-95",children:[i.jsx(Rt,{className:"w-4 h-4 fill-current"}),i.jsx("span",{children:"Play All"})]}),i.jsxs("button",{id:"suno-shuffle-all-btn",onClick:Fe,className:`px-4 py-2.5 rounded-full border text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(ki,{className:"w-4 h-4 text-cyan-400"}),i.jsx("span",{children:"Shuffle"})]}),i.jsxs("a",{id:"suno-open-official-btn",href:ft.url,target:"_blank",rel:"noopener noreferrer",className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[i.jsx("span",{children:"Open on Suno"}),i.jsx(Ue,{className:"w-3.5 h-3.5 opacity-70"})]}),w&&i.jsxs("button",{id:"switch-to-youtube-hero-btn",onClick:w,className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-red-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-red-700 hover:bg-neutral-200"}`,children:[i.jsx(ll,{className:"w-4 h-4 text-red-500"}),i.jsxs("span",{children:["Switch to YouTube Gallery (",xt.length,")"]})]}),i.jsx("button",{onClick:()=>Se(null),className:`p-2.5 rounded-full border transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,title:"Share Playlist",children:i.jsx(Et,{className:"w-4 h-4"})})]})]})]})]}),i.jsx(gf,{isDarkMode:r}),i.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6",children:[i.jsxs("div",{className:"relative flex-1 max-w-md",children:[i.jsx(mf,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50"}),i.jsx("input",{id:"suno-search-input",type:"text",placeholder:"Search Suno tracks, lyrics, styles...",value:U,onChange:K=>j(K.target.value),className:`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none transition-colors ${r?"bg-neutral-900 border-white/10 text-white placeholder-white/40 focus:border-cyan-400/60":"bg-white border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-cyan-500"}`})]}),i.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-3",children:[i.jsxs("select",{id:"suno-sort-select",value:_,onChange:K=>G(K.target.value),className:`px-3 py-2 rounded-xl text-xs font-semibold border focus:outline-none cursor-pointer ${r?"bg-neutral-900 border-white/10 text-white":"bg-white border-neutral-300 text-neutral-800"}`,children:[i.jsxs("option",{value:"index",children:["Tracklist Order (#1 - #",ht.length,")"]}),i.jsx("option",{value:"title",children:"Title (A to Z)"}),i.jsx("option",{value:"duration-desc",children:"Duration (Longest first)"}),i.jsx("option",{value:"duration-asc",children:"Duration (Shortest first)"})]}),i.jsxs("div",{className:`flex items-center p-1 rounded-xl border ${r?"border-white/10 bg-white/5":"border-neutral-300 bg-neutral-100"}`,children:[i.jsxs("button",{id:"suno-view-grid",onClick:()=>P("grid"),className:`p-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${te==="grid"?"bg-cyan-500 text-black shadow-sm":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"Grid View",children:[i.jsx(hf,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:"Grid"})]}),i.jsxs("button",{id:"suno-view-list",onClick:()=>P("list"),className:`p-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${te==="list"?"bg-cyan-500 text-black shadow-sm":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"List View",children:[i.jsx(ff,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:"List"})]})]})]})]}),i.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-3 mb-6 custom-scrollbar",children:[Ve.map(K=>i.jsx("button",{id:`suno-filter-tag-${K.id}`,onClick:()=>L(K.id),className:`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${p===K.id?"bg-cyan-500 text-black border-cyan-400 font-bold shadow-md shadow-cyan-500/20":r?"bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white":"bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100"}`,children:K.label},K.id)),i.jsxs("span",{className:"text-[11px] font-mono opacity-50 ml-auto whitespace-nowrap",children:["Showing ",Z.length," of ",ht.length," tracks"]})]}),Z.length>0?te==="grid"?i.jsx("div",{id:"suno-tracks-grid",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:Z.map(K=>i.jsx(Lg,{track:K,isPlaying:N,isCurrentTrack:(x==null?void 0:x.id)===K.id,onPlay:ne=>d(ne),onOpenLyrics:ne=>Ae(ne),onOpenEmbed:ne=>Re(ne),onOpenShare:ne=>Se(ne),isDarkMode:r},`${K.id}-${K.index}`))}):i.jsxs("div",{id:"suno-tracks-list",className:"flex flex-col gap-2.5",children:[i.jsxs("div",{className:`grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 ${r?"text-white/40":"text-neutral-500"}`,children:[i.jsx("div",{className:"col-span-1 text-center",children:"#"}),i.jsx("div",{className:"col-span-8 sm:col-span-9",children:"Track Name"}),i.jsx("div",{className:"col-span-3 sm:col-span-2 text-right",children:"Duration"})]}),Z.map(K=>{const ne=(x==null?void 0:x.id)===K.id;return i.jsxs("div",{id:`suno-list-item-${K.id}`,onClick:()=>d(K),className:`group p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${ne?r?"bg-cyan-950/40 border-cyan-500/40 text-cyan-300":"bg-cyan-50 border-cyan-300 text-cyan-900":r?"bg-neutral-900/50 border-white/5 hover:border-white/15 hover:bg-neutral-900":"bg-white border-neutral-200 hover:border-neutral-300 shadow-sm"}`,children:[i.jsxs("div",{className:"grid grid-cols-12 items-center flex-1 min-w-0",children:[i.jsx("div",{className:"col-span-1 flex items-center justify-center font-mono text-xs opacity-60",children:ne&&N?i.jsx("div",{className:"w-3 h-3 rounded-full bg-cyan-400 animate-ping"}):i.jsx("span",{children:K.index})}),i.jsxs("div",{className:"col-span-8 sm:col-span-9 flex items-center gap-3 min-w-0 pr-3",children:[i.jsxs("div",{className:"relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900",children:[i.jsx("img",{src:K.image,alt:K.title,className:"w-full h-full object-cover"}),i.jsx("div",{className:"absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:i.jsx(Rt,{className:"w-3.5 h-3.5 fill-white text-white"})})]}),i.jsx("div",{className:"min-w-0",children:i.jsx("h4",{className:`font-bold text-xs sm:text-sm truncate transition-colors ${ne?"text-cyan-400":"group-hover:text-cyan-400"}`,children:K.title})})]}),i.jsx("div",{className:"col-span-3 sm:col-span-2 text-right font-mono text-xs opacity-75",children:K.durationFormatted})]}),i.jsxs("div",{className:"flex items-center gap-1.5 ml-2",children:[i.jsx("button",{onClick:F=>{F.stopPropagation(),Ae(K)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Lyrics",children:i.jsx(La,{className:"w-3.5 h-3.5"})}),i.jsx("button",{onClick:F=>{F.stopPropagation(),Re(K)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Watch Video",children:i.jsx(no,{className:"w-3.5 h-3.5"})}),i.jsx("button",{onClick:F=>{F.stopPropagation(),Se(K)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Share",children:i.jsx(Et,{className:"w-3.5 h-3.5"})})]})]},`${K.id}-${K.index}`)})]}):i.jsxs("div",{className:"py-20 text-center rounded-2xl border border-dashed border-white/15 my-6",children:[i.jsx(Xr,{className:"w-10 h-10 mx-auto text-cyan-400/50 mb-3"}),i.jsxs("p",{className:"font-bold text-base",children:['No tracks found matching "',U,'"']}),i.jsx("p",{className:"text-xs opacity-60 mt-1",children:'Try clearing your search query or selecting "All Tracks"'}),i.jsx("button",{onClick:()=>{j(""),L("all")},className:"mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold",children:"Reset Filters"})]}),i.jsx(Gg,{track:ae,onClose:()=>Ae(null),isDarkMode:r,onPlayTrack:K=>d(K),isPlaying:N,isCurrentTrack:(x==null?void 0:x.id)===(ae==null?void 0:ae.id)}),i.jsx(Wg,{track:ze,onClose:()=>Re(null),isDarkMode:r}),i.jsx(Xg,{track:se,isOpen:!!(se||se===null&&!1),onClose:()=>Se(null),isDarkMode:r})]})},Fg=({track:r,isPlaying:x,onPlay:N,onPause:d,onEnded:V,isDarkMode:z,volume:w=80,isMuted:U=!1,size:j="sm"})=>{const p=!!("isSuno"in r?r.isSuno:r.audioUrl||r.videoUrl),L=C.useRef(null),_=C.useRef(null);C.useEffect(()=>{p&&L.current&&(x?L.current.play().catch(ae=>{console.warn("Suno video autoplay notice:",ae)}):L.current.pause())},[x,p,r.id]),C.useEffect(()=>{p&&L.current&&(L.current.volume=U?0:w/100,L.current.muted=U)},[w,U,p]),C.useEffect(()=>{if(!p&&_.current&&_.current.contentWindow&&x)try{U?_.current.contentWindow.postMessage('{"event":"command","func":"mute","args":""}',"*"):(_.current.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}',"*"),_.current.contentWindow.postMessage(JSON.stringify({event:"command",func:"setVolume",args:[w]}),"*"))}catch{}},[w,U,p,x]);const G="thumbnail"in r?r.thumbnail:r.image,te="videoUrl"in r&&r.videoUrl?r.videoUrl:"audioUrl"in r&&r.audioUrl?r.audioUrl:`https://cdn1.suno.ai/${r.id}.mp4`,P=j==="sm"?"max-w-[270px]":j==="md"?"max-w-[320px]":"max-w-[370px]";return i.jsx("div",{className:`relative w-full ${p?`aspect-[9/16] ${P} mx-auto`:"aspect-video"} rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl group transition-all duration-300`,children:p?i.jsxs("div",{className:"relative w-full h-full bg-black flex items-center justify-center",children:[i.jsx("video",{ref:L,src:te,poster:G,controls:!0,autoPlay:x,playsInline:!0,preload:"auto",className:"w-full h-full object-cover bg-black",onPlay:()=>{x||N(r)},onPause:()=>{x&&d()},onEnded:()=>{V&&V()},onError:ae=>{console.warn("Suno video playback error:",ae)}},`suno-video-${r.id}`),i.jsxs("div",{className:"absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300 font-bold pointer-events-none flex items-center gap-1 z-10",children:[i.jsx(ya,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"Suno 9:16 Player"})]})]}):i.jsxs("div",{className:"relative w-full h-full bg-black",children:[x?i.jsx("div",{className:"w-full h-full relative",children:i.jsx("iframe",{ref:_,src:`https://www.youtube-nocookie.com/embed/${r.id}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&playsinline=1`,title:`Music Video - ${r.title}`,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},`yt-iframe-${r.id}`)}):i.jsxs("div",{className:"relative w-full h-full",children:[i.jsx("img",{src:G,alt:r.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",referrerPolicy:"no-referrer"}),i.jsxs("div",{className:"absolute inset-0 bg-black/45 backdrop-blur-[1px] flex flex-col items-center justify-center p-4",children:[i.jsx("button",{id:"showcase-play-video-btn",onClick:()=>N(r),className:"w-16 h-16 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all ring-4 ring-cyan-400/40 mb-2","aria-label":"Play music video",title:"Play video",children:i.jsx(Rt,{className:"w-7 h-7 fill-current translate-x-0.5"})}),i.jsxs("div",{className:"flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-[11px] font-mono font-bold text-white tracking-wider",children:[i.jsx(no,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"WATCH MUSIC VIDEO"})]})]})]}),i.jsxs("div",{className:"absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300 font-bold pointer-events-none flex items-center gap-1 z-10",children:[i.jsx(no,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"HD Music Video"})]})]})})},Zg=({isDarkMode:r})=>i.jsx("footer",{id:"site-social-footer",className:`mt-16 pt-10 pb-8 border-t transition-colors ${r?"border-white/10 bg-black/40":"border-neutral-200 bg-neutral-100/60"}`,children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6",children:[i.jsxs("div",{className:"text-center md:text-left",children:[i.jsxs("div",{className:"flex items-center justify-center md:justify-start gap-2 mb-1.5",children:[i.jsx("span",{className:"font-black text-lg tracking-wider",children:"DomInNATEly"}),i.jsx("span",{className:"text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-bold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20",children:"Official Artist Hub"})]}),i.jsx("p",{className:`text-xs max-w-md ${r?"text-white/60":"text-neutral-600"}`,children:"Please like and subscribe to my YouTube and TikTok channels to support the music and stay updated on every new release!"})]}),i.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2.5",children:[i.jsxs("a",{id:"footer-youtube-link",href:"https://www.youtube.com/@DomInNATEly?sub_confirmation=1",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-md shadow-red-600/20",children:[i.jsx(ji,{className:"w-3.5 h-3.5 fill-current"}),i.jsx("span",{children:"YouTube Channel"}),i.jsx(Ue,{className:"w-3 h-3 opacity-70"})]}),yf.map(x=>i.jsxs("a",{id:`footer-social-${x.id}`,href:x.url,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-200 hover:text-cyan-600"}`,title:x.label,children:[i.jsx("span",{children:x.icon}),i.jsx("span",{children:x.name}),i.jsx(Ue,{className:"w-2.5 h-2.5 opacity-50"})]},x.id))]})]}),i.jsxs("div",{className:`mt-8 pt-4 border-t flex flex-col sm:flex-row items-center justify-between text-[11px] gap-2 ${r?"border-white/5 text-white/40":"border-neutral-200 text-neutral-500"}`,children:[i.jsxs("div",{children:["© ",new Date().getFullYear()," DomInNATEly. Built for fans, listeners, and creators."]}),i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx("span",{children:"Made with passion for high-energy alt-rock & storytelling"}),i.jsx(df,{className:"w-3 h-3 text-red-500 fill-red-500 inline"})]})]})]})});function Kg(){const[r,x]=C.useState(()=>{var v;if(typeof window<"u")try{const O=(v=window.localStorage)==null?void 0:v.getItem("dominnately_theme");if(O)return O==="dark"}catch{return!0}return!0}),[N,d]=C.useState("youtube"),[V,z]=C.useState(()=>typeof window<"u"?window.innerWidth>=1280:!1);C.useEffect(()=>{const v=()=>{z(window.innerWidth>=1280)};return window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]);const[w,U]=C.useState(xt[0]||null),[j,p]=C.useState(!1),[L,_]=C.useState("video"),[G,te]=C.useState(()=>{try{const v=localStorage.getItem("dominately_stage_size");if(v==="sm"||v==="md"||v==="lg")return v}catch{}return"sm"}),P=v=>{te(v);try{localStorage.setItem("dominately_stage_size",v)}catch{}},[ae,Ae]=C.useState(ht[0]||null),[ze,Re]=C.useState(!1),[se,Se]=C.useState(""),[Ve,qe]=C.useState("playlist"),[Z,Le]=C.useState("all"),[Fe,K]=C.useState("grid"),[ne,F]=C.useState(null),[_e,at]=C.useState(null),[Ge,I]=C.useState(null);C.useEffect(()=>{var v;try{(v=window.localStorage)==null||v.setItem("dominnately_theme",r?"dark":"light")}catch{}r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]);const H=C.useMemo(()=>ht.map(nf),[]),S=v=>{(w==null?void 0:w.id)===v.id?p(!j):(U(v),p(!0))},R=v=>{Ae(v);const O=nf(v);(w==null?void 0:w.id)===O.id?(p(!j),Re(!j)):(U(O),p(!0),Re(!0))},J=C.useMemo(()=>w!=null&&w.isSuno&&ht.find(v=>v.id===w.id)||ae,[w,ae]),h=C.useMemo(()=>{let v=[...xt];if(se.trim()!==""){const O=se.toLowerCase().trim();v=v.filter(W=>W.title.toLowerCase().includes(O)||W.artist.toLowerCase().includes(O)||W.featuredLyrics&&W.featuredLyrics.toLowerCase().includes(O)||W.tags.some(Ye=>Ye.toLowerCase().includes(O))||W.description&&W.description.toLowerCase().includes(O))}return Z!=="all"&&(v=v.filter(O=>O.category===Z)),v.sort((O,W)=>{switch(Ve){case"playlist":return O.index-W.index;case"newest":return W.index-O.index;case"duration-desc":return W.durationSeconds-O.durationSeconds;case"duration-asc":return O.durationSeconds-W.durationSeconds;case"title-asc":return O.title.localeCompare(W.title);case"title-desc":return W.title.localeCompare(O.title);default:return O.index-W.index}}),v},[se,Z,Ve]),T=C.useMemo(()=>N==="suno"||w!=null&&w.isSuno?H:h.length>0?h:xt,[N,w==null?void 0:w.isSuno,H,h]),D=()=>{h.length>0&&(U(h[0]),p(!0))},q=()=>{if(h.length>0){const v=Math.floor(Math.random()*h.length);U(h[v]),p(!0)}};return i.jsxs("div",{className:`min-h-screen font-outfit transition-colors duration-200 flex flex-col ${r?"bg-[#050505] text-white":"bg-neutral-50 text-neutral-900"}`,children:[i.jsx(Vg,{isDarkMode:r,onToggleDarkMode:()=>x(!r),trackCount:N==="suno"?ht.length:xt.length,onQuickShareAll:()=>F(w||xt[0])}),i.jsxs("main",{className:"flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-36",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-6",children:[i.jsxs("button",{id:"tab-youtube-gallery",onClick:()=>{d("youtube")},className:`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all border shadow-sm ${N==="youtube"?"bg-cyan-500 text-black border-cyan-400 shadow-cyan-500/25 ring-2 ring-cyan-400/40":r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(ll,{className:"w-4 h-4"}),i.jsxs("span",{children:["YouTube Audio Gallery (",xt.length," Tracks)"]})]}),i.jsxs("button",{id:"tab-suno-playlist",onClick:()=>{d("suno")},className:`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all border shadow-sm ${N==="suno"?"bg-cyan-500 text-black border-cyan-400 shadow-cyan-500/25 ring-2 ring-cyan-400/40":r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(ya,{className:"w-4 h-4 text-cyan-400"}),i.jsxs("span",{children:["Suno AI Playlist (",ht.length," Tracks)"]})]})]}),i.jsxs("div",{className:"xl:grid xl:grid-cols-12 xl:gap-8 items-start",children:[i.jsx("div",{className:G==="sm"?"xl:col-span-8 2xl:col-span-9 transition-all duration-300":G==="md"?"xl:col-span-7 2xl:col-span-8 transition-all duration-300":"xl:col-span-6 transition-all duration-300",children:N==="suno"?i.jsx(Qg,{isDarkMode:r,currentTrack:J,isPlaying:j&&!!(w!=null&&w.isSuno),onPlayTrack:R,onTogglePlayPause:()=>{p(!j),Re(!j)},onTrackChange:R,onSwitchToYouTube:()=>d("youtube")}):i.jsxs(i.Fragment,{children:[i.jsxs("section",{id:"youtube-hero-banner",className:`relative overflow-hidden rounded-3xl border mb-8 p-6 sm:p-8 md:p-10 transition-colors ${r?"bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 border-white/10 shadow-2xl":"bg-gradient-to-br from-red-50/70 via-white to-neutral-100 border-neutral-200 shadow-lg"}`,children:[i.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none"}),i.jsx("div",{className:"absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8",children:[i.jsxs("div",{className:"relative flex-shrink-0 group",children:[i.jsx("div",{className:"w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-neutral-900",children:i.jsx("img",{src:ma.cover,alt:ma.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),i.jsxs("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-red-600 text-white font-mono font-bold text-[10px] tracking-wider uppercase shadow-lg shadow-red-600/30 flex items-center gap-1.5 whitespace-nowrap",children:[i.jsx(cf,{className:"w-3 h-3 fill-current"}),i.jsx("span",{children:"YouTube Top Hits"})]})]}),i.jsxs("div",{className:"flex-1 text-center md:text-left flex flex-col justify-between",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3",children:[i.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-red-500/15 text-red-400 border border-red-500/30 flex items-center gap-1.5",children:[i.jsx(ll,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Official YouTube Playlist"})]}),i.jsxs("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:[xt.length," Recorded Tracks"]}),i.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:ma.totalDurationFormatted})]}),i.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight",children:ma.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium",children:[i.jsx("span",{className:"text-cyan-400 font-bold",children:ma.channel}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:ma.channelUrl,target:"_blank",rel:"noopener noreferrer",className:"text-red-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"▶️ YouTube: @DomInNATEly"}),i.jsx(Ue,{className:"w-3 h-3"})]}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-pink-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"🎵 TikTok: @domInNATEly"}),i.jsx(Ue,{className:"w-3 h-3"})]}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:"https://nate-mina.github.io/Portfolio-CV/",target:"_blank",rel:"noopener noreferrer",className:"text-cyan-300 hover:underline flex items-center gap-1 font-mono text-xs",title:"About Nate Mina - Portfolio & CV",children:[i.jsx("span",{children:"👤 About Me"}),i.jsx(Ue,{className:"w-3 h-3"})]}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:ma.playlistUrl,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"Open Playlist on YouTube"}),i.jsx(Ue,{className:"w-3 h-3"})]})]}),i.jsxs("p",{className:`mt-3 text-sm max-w-2xl leading-relaxed ${r?"text-white/70":"text-neutral-600"}`,children:[ma.description," Full-length studio recordings, explosive remixes, and introspective anthems."]})]}),i.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3",children:[i.jsxs("button",{id:"youtube-hero-play-all-btn",onClick:D,className:"px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-400/25 transition-transform active:scale-95",children:[i.jsx(Rt,{className:"w-4 h-4 fill-current"}),i.jsxs("span",{children:["Play All (",xt.length,")"]})]}),i.jsxs("button",{id:"youtube-hero-shuffle-btn",onClick:q,className:`px-4 py-2.5 rounded-full border text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(ki,{className:"w-4 h-4 text-cyan-400"}),i.jsx("span",{children:"Shuffle"})]}),i.jsxs("a",{id:"youtube-open-official-btn",href:ma.playlistUrl,target:"_blank",rel:"noopener noreferrer",className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-red-400 hover:border-red-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[i.jsx(ll,{className:"w-4 h-4 text-red-500"}),i.jsx("span",{children:"Open YouTube Playlist"}),i.jsx(Ue,{className:"w-3.5 h-3.5 opacity-60"})]}),i.jsxs("button",{id:"switch-to-suno-hero-btn",onClick:()=>d("suno"),className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-cyan-700 hover:bg-neutral-200"}`,children:[i.jsx(ya,{className:"w-4 h-4"}),i.jsxs("span",{children:["Switch to Suno Playlist (",ht.length,")"]})]})]})]})]})]}),i.jsx(gf,{isDarkMode:r}),i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-5",children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsxs("button",{id:"play-all-tracks-btn",onClick:D,className:"px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all active:scale-95",children:[i.jsx(Rt,{className:"w-3.5 h-3.5 fill-current"}),i.jsx("span",{children:"Play All"})]}),i.jsxs("button",{id:"shuffle-all-tracks-btn",onClick:q,className:`px-3.5 py-2 rounded-full border text-xs sm:text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(ki,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"Shuffle"})]})]}),i.jsxs("div",{className:`flex items-center gap-1.5 p-1 rounded-full border ${r?"border-white/10 bg-white/5":"border-neutral-300 bg-neutral-100"}`,children:[i.jsxs("button",{id:"view-mode-grid",onClick:()=>K("grid"),className:`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${Fe==="grid"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"Grid View","aria-label":"Grid View",children:[i.jsx(hf,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:"Grid"})]}),i.jsxs("button",{id:"view-mode-list",onClick:()=>K("list"),className:`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${Fe==="list"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"List View","aria-label":"List View",children:[i.jsx(ff,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:"List"})]})]})]}),i.jsx(Og,{searchQuery:se,onSearchChange:Se,sortField:Ve,onSortChange:qe,selectedCategory:Z,onCategoryChange:Le,totalResults:h.length,totalTracks:xt.length,isDarkMode:r}),h.length>0?Fe==="grid"?i.jsx("div",{id:"tracks-grid-container",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:h.map(v=>i.jsx(_g,{track:v,isPlaying:j,isCurrentTrack:(w==null?void 0:w.id)===v.id,onPlay:S,onOpenShare:O=>F(O),onOpenDetails:O=>at(O),onOpenLyrics:O=>I(O),isDarkMode:r},`${v.id}-${v.index}`))}):i.jsxs("div",{id:"tracks-list-container",className:"flex flex-col gap-2.5",children:[i.jsxs("div",{className:`grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 ${r?"text-white/40":"text-neutral-500"}`,children:[i.jsx("div",{className:"col-span-7 sm:col-span-6",children:"Track Info"}),i.jsx("div",{className:"hidden sm:block sm:col-span-3",children:"Category"}),i.jsx("div",{className:"col-span-3 sm:col-span-2",children:"Duration"}),i.jsx("div",{className:"col-span-2 sm:col-span-1 text-right",children:"Share"})]}),h.map(v=>{const O=(w==null?void 0:w.id)===v.id;return i.jsx("div",{id:`track-list-item-${v.id}`,onClick:()=>S(v),className:`group p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${O?r?"bg-white/10 border-cyan-400/80 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-400/30":"bg-cyan-50/50 border-cyan-400 text-cyan-900 shadow-xs":r?"bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15 text-white":"bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-900 shadow-xs"}`,children:i.jsxs("div",{className:"grid grid-cols-12 w-full items-center gap-2",children:[i.jsxs("div",{className:"col-span-7 sm:col-span-6 flex items-center gap-3 min-w-0",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-xs",children:v.index.toString().padStart(2,"0")}),i.jsx("img",{src:v.thumbnail,alt:v.title,className:"w-12 h-8 rounded-lg object-cover border border-white/10 shrink-0 hidden sm:block",referrerPolicy:"no-referrer"}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h4",{className:`font-bold text-xs sm:text-sm truncate transition-colors ${O?"text-cyan-400":"group-hover:text-cyan-400"}`,children:v.title}),i.jsx("p",{className:`text-[11px] truncate ${r?"text-white/50":"text-neutral-500"}`,children:v.artist})]})]}),i.jsx("div",{className:"hidden sm:block sm:col-span-3",children:i.jsx("span",{className:`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${r?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-300 text-neutral-600"}`,children:v.category})}),i.jsx("div",{className:"col-span-3 sm:col-span-2",children:i.jsx("span",{className:"text-xs font-mono text-cyan-400 font-bold",children:v.duration})}),i.jsxs("div",{className:"col-span-2 sm:col-span-1 flex items-center justify-end gap-1",children:[i.jsx("button",{id:`list-lyrics-btn-${v.id}`,onClick:W=>{W.stopPropagation(),I(v)},className:`p-1.5 rounded-md transition-colors ${r?"text-white/50 hover:text-cyan-400 hover:bg-white/10":"text-neutral-500 hover:text-black hover:bg-neutral-200"}`,title:"View Full Lyrics","aria-label":`View lyrics for ${v.title}`,children:i.jsx(La,{className:"w-3.5 h-3.5"})}),i.jsx("button",{id:`list-share-btn-${v.id}`,onClick:W=>{W.stopPropagation(),F(v)},className:`p-1.5 rounded-md transition-colors ${r?"text-white/50 hover:text-cyan-400 hover:bg-white/10":"text-neutral-500 hover:text-black hover:bg-neutral-200"}`,title:"Share Track","aria-label":`Share ${v.title}`,children:i.jsx(Et,{className:"w-3.5 h-3.5"})})]})]})},`${v.id}-${v.index}`)})]}):i.jsxs("div",{id:"empty-tracks-state",className:`rounded-2xl border p-12 text-center my-6 backdrop-blur-md ${r?"bg-white/5 border-white/10":"bg-white border-neutral-200"}`,children:[i.jsx(Xr,{className:"w-10 h-10 mx-auto mb-3 text-cyan-400 opacity-80"}),i.jsx("h3",{className:"text-base font-bold",children:"No tracks matched your search"}),i.jsx("p",{className:`text-xs mt-1 max-w-sm mx-auto ${r?"text-white/50":"text-neutral-600"}`,children:'Try clearing your search query or selecting "All Tracks" to view the complete catalog.'}),i.jsx("button",{onClick:()=>{Se(""),Le("all"),qe("playlist")},className:"mt-4 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider transition-all",children:"Reset Filters"})]})]})}),(()=>{const v=w||(N==="suno"?H[0]:xt[0]);return v?i.jsx("aside",{className:`hidden xl:block ${G==="sm"?"xl:col-span-4 2xl:col-span-3":G==="md"?"xl:col-span-5 2xl:col-span-4":"xl:col-span-6"} sticky top-24 transition-all duration-300 flex justify-end`,children:i.jsxs("div",{id:"immersive-now-playing-stage",className:`w-full rounded-3xl border ${G==="sm"?"p-3.5 sm:p-4 max-w-[320px]":G==="md"?"p-4 sm:p-5 max-w-[400px]":"p-5 sm:p-6 max-w-[490px]"} ml-auto flex flex-col items-center justify-center backdrop-blur-xl transition-all shadow-2xl relative overflow-hidden ${r?"bg-black/60 border-white/10 text-white":"bg-white/95 border-neutral-200 text-neutral-900"}`,children:[i.jsx("div",{className:"absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/15 blur-[60px] rounded-full pointer-events-none animate-pulse"}),i.jsx("div",{className:"absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600/15 blur-[60px] rounded-full pointer-events-none"}),i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 w-full mb-3 z-20",children:[i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("span",{className:`w-2 h-2 rounded-full ${j?"bg-cyan-400 animate-ping":"bg-white/30"}`}),i.jsx("span",{className:"text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-cyan-400",children:j?"Live Stage":"Now Playing"})]}),i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsxs("div",{className:"flex items-center bg-black/50 p-0.5 rounded-xl border border-white/10 text-xs",children:[i.jsxs("button",{onClick:()=>_("video"),className:`px-2 py-1 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${L==="video"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/25":"text-white/60 hover:text-white"}`,title:"Watch Music Video",children:[i.jsx(no,{className:"w-3 h-3"}),i.jsx("span",{className:G==="sm"?"hidden sm:inline text-[11px]":"text-xs",children:"Video"})]}),i.jsxs("button",{onClick:()=>_("lyrics"),className:`px-2 py-1 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${L==="lyrics"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/25":"text-white/60 hover:text-white"}`,title:"View Full Lyrics",children:[i.jsx(La,{className:"w-3 h-3"}),i.jsx("span",{className:G==="sm"?"hidden sm:inline text-[11px]":"text-xs",children:"Lyrics"})]}),i.jsxs("button",{onClick:()=>_("artwork"),className:`px-2 py-1 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${L==="artwork"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/25":"text-white/60 hover:text-white"}`,title:"View Album Art",children:[i.jsx(ll,{className:"w-3 h-3"}),i.jsx("span",{className:G==="sm"?"hidden sm:inline text-[11px]":"text-xs",children:"Art"})]})]}),i.jsxs("div",{className:"flex items-center bg-black/50 p-0.5 rounded-xl border border-white/10",title:"Adjust player size & right positioning",children:[i.jsx("button",{onClick:()=>P("sm"),className:`px-1.5 py-0.5 rounded-lg text-[10px] font-mono font-bold transition-all ${G==="sm"?"bg-cyan-500 text-black shadow-sm font-black":"text-white/50 hover:text-white"}`,title:"Compact (Smaller & further right)","aria-label":"Set player size to small",children:"S"}),i.jsx("button",{onClick:()=>P("md"),className:`px-1.5 py-0.5 rounded-lg text-[10px] font-mono font-bold transition-all ${G==="md"?"bg-cyan-500 text-black shadow-sm font-black":"text-white/50 hover:text-white"}`,title:"Medium player size","aria-label":"Set player size to medium",children:"M"}),i.jsx("button",{onClick:()=>P("lg"),className:`px-1.5 py-0.5 rounded-lg text-[10px] font-mono font-bold transition-all ${G==="lg"?"bg-cyan-500 text-black shadow-sm font-black":"text-white/50 hover:text-white"}`,title:"Large expanded player size","aria-label":"Set player size to large",children:"L"})]})]})]}),i.jsxs("div",{className:"relative w-full mb-3.5 z-10",children:[i.jsx("div",{className:L==="video"?"block":"hidden",children:i.jsx(Fg,{track:v,isPlaying:j&&(w==null?void 0:w.id)===v.id,onPlay:O=>{(w==null?void 0:w.id)===O.id?p(!0):S(O)},onPause:()=>p(!1),onEnded:()=>{const O=T,W=O.findIndex(Ye=>Ye.id===v.id);W!==-1&&W<O.length-1?S(O[W+1]):O.length>0&&S(O[0])},isDarkMode:r,size:G})}),L==="lyrics"&&i.jsx("div",{className:"w-full p-3.5 rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-md shadow-xl",children:i.jsx(Kr,{lyrics:Fr(v),title:v.title,artist:v.artist,isDarkMode:r,maxHeight:"max-h-[440px]"})}),L==="artwork"&&i.jsxs("div",{className:"relative w-full aspect-square group",children:[i.jsx("div",{className:"absolute inset-0 bg-cyan-500/20 blur-[50px] rounded-full animate-pulse pointer-events-none"}),i.jsxs("div",{className:"relative z-10 w-full h-full bg-gradient-to-br from-neutral-800 to-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center",children:[i.jsx("img",{src:v.thumbnail,alt:v.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),i.jsx("div",{className:"absolute bottom-3 right-3 text-2xl font-black text-white/25 font-mono tracking-widest pointer-events-none drop-shadow-md",children:"D-LY"}),i.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:i.jsx("button",{onClick:()=>{(w==null?void 0:w.id)===v.id?p(!j):S(v)},className:"w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-xl hover:scale-105 transition-transform","aria-label":"Toggle playback",children:j&&(w==null?void 0:w.id)===v.id?i.jsx(mn,{className:"w-6 h-6 fill-current"}):i.jsx(Rt,{className:"w-6 h-6 fill-current translate-x-0.5"})})})]})]})]}),i.jsxs("div",{className:"text-center w-full z-10",children:[i.jsx("h2",{className:`${G==="sm"?"text-base font-extrabold":"text-xl font-black"} mb-1 tracking-tight truncate hover:text-cyan-400 transition-colors`,title:v.title,children:v.title}),i.jsxs("p",{className:`text-cyan-400 ${G==="sm"?"text-[10px]":"text-xs"} font-bold tracking-widest uppercase mb-2.5`,children:[j&&(w==null?void 0:w.id)===v.id?"Now Playing":"Selected Track"," • #",v.index.toString().padStart(2,"0")]}),i.jsxs("div",{className:`flex gap-1 justify-center items-end ${G==="sm"?"h-5 mb-3":"h-7 mb-4"}`,children:[i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${j&&(w==null?void 0:w.id)===v.id?"h-[60%] animate-eq-1":"h-[25%]"}`}),i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${j&&(w==null?void 0:w.id)===v.id?"h-[90%] animate-eq-2":"h-[40%]"}`}),i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${j&&(w==null?void 0:w.id)===v.id?"h-[40%] animate-eq-3":"h-[20%]"}`}),i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${j&&(w==null?void 0:w.id)===v.id?"h-[70%] animate-eq-4":"h-[35%]"}`}),i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${j&&(w==null?void 0:w.id)===v.id?"h-[30%] animate-eq-2":"h-[15%]"}`})]}),i.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-1.5 sm:gap-2",children:[i.jsxs("button",{onClick:()=>I(v),className:`px-3 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black ${G==="sm"?"text-[11px]":"text-xs"} font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all active:scale-95`,title:"View Full Lyrics in Modal",children:[i.jsx(La,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Lyrics"})]}),i.jsxs("button",{onClick:()=>F(v),className:`px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 ${G==="sm"?"text-[11px]":"text-xs"} font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all`,children:[i.jsx(Et,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Share"})]}),i.jsxs("button",{onClick:()=>at(v),className:`px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 ${G==="sm"?"text-[11px]":"text-xs"} font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all`,children:[i.jsx(Xr,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"Story"})]})]})]})]})}):null})()]}),i.jsx(Zg,{isDarkMode:r})]}),i.jsx(Hg,{currentTrack:w,playlist:T,allPlaylists:{youtube:h.length>0?h:xt,suno:H},onSwitchPlaylist:v=>{d(v),v==="suno"&&ht.length>0?R(ht[0]):v==="youtube"&&xt.length>0&&S(xt[0])},currentPlaylistType:w!=null&&w.isSuno?"suno":"youtube",onTrackChange:v=>{if(U(v),p(!0),v.isSuno){const O=ht.find(W=>W.id===v.id);O&&(Ae(O),Re(!0))}else Re(!1)},onOpenShare:v=>F(v),onOpenLyrics:v=>I(v),disableInternalPlayback:V,isDarkMode:r,isPlaying:j,setIsPlaying:v=>{p(v),w!=null&&w.isSuno&&Re(v)}}),i.jsx(Dg,{track:ne,isOpen:!!ne,onClose:()=>F(null),isDarkMode:r}),i.jsx(Rg,{track:_e,isOpen:!!_e,onClose:()=>at(null),isPlaying:j,isCurrentTrack:(w==null?void 0:w.id)===(_e==null?void 0:_e.id),onPlay:S,onOpenShare:v=>F(v),isDarkMode:r}),i.jsx(qg,{track:Ge,isOpen:!!Ge,onClose:()=>I(null),isDarkMode:r,isPlaying:j,isCurrentTrack:(w==null?void 0:w.id)===(Ge==null?void 0:Ge.id),onPlay:S,onOpenShare:v=>F(v)})]})}typeof window<"u"&&(window.addEventListener("error",r=>{if(!r.message||r.message==="Script error."||r.filename&&(r.filename.includes("youtube.com")||r.filename.includes("suno.ai")))return r.preventDefault(),!0}),window.addEventListener("unhandledrejection",r=>{var x,N;if(r.reason){const d=((x=r.reason)==null?void 0:x.name)||"",V=String(((N=r.reason)==null?void 0:N.message)||r.reason||"");if(d==="AbortError"||d==="NotAllowedError"||V.includes("play()")||V.includes("interact")){r.preventDefault();return}}r.reason||r.preventDefault()}));Hy.createRoot(document.getElementById("root")).render(i.jsx(C.StrictMode,{children:i.jsx(Kg,{})}));
