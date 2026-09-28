(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))h(v);new MutationObserver(v=>{for(const B of v)if(B.type==="childList")for(const C of B.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&h(C)}).observe(document,{childList:!0,subtree:!0});function T(v){const B={};return v.integrity&&(B.integrity=v.integrity),v.referrerPolicy&&(B.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?B.credentials="include":v.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function h(v){if(v.ep)return;v.ep=!0;const B=T(v);fetch(v.href,B)}})();var Ss={exports:{}},Un={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function A0(){if(Mf)return Un;Mf=1;var r=Symbol.for("react.transitional.element"),E=Symbol.for("react.fragment");function T(h,v,B){var C=null;if(B!==void 0&&(C=""+B),v.key!==void 0&&(C=""+v.key),"key"in v){B={};for(var M in v)M!=="key"&&(B[M]=v[M])}else B=v;return v=B.ref,{$$typeof:r,type:h,key:C,ref:v!==void 0?v:null,props:B}}return Un.Fragment=E,Un.jsx=T,Un.jsxs=T,Un}var _f;function T0(){return _f||(_f=1,Ss.exports=A0()),Ss.exports}var u=T0(),Ns={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function k0(){if(Uf)return W;Uf=1;var r=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),C=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),X=Symbol.iterator;function K(d){return d===null||typeof d!="object"?null:(d=X&&d[X]||d["@@iterator"],typeof d=="function"?d:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le=Object.assign,Se={};function Me(d,A,U){this.props=d,this.context=A,this.refs=Se,this.updater=U||P}Me.prototype.isReactComponent={},Me.prototype.setState=function(d,A){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,A,"setState")},Me.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Ye(){}Ye.prototype=Me.prototype;function Be(d,A,U){this.props=d,this.context=A,this.refs=Se,this.updater=U||P}var ke=Be.prototype=new Ye;ke.constructor=Be,le(ke,Me.prototype),ke.isPureReactComponent=!0;var Oe=Array.isArray;function he(){}var $={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function I(d,A,U){var q=U.ref;return{$$typeof:r,type:d,key:A,ref:q!==void 0?q:null,props:U}}function ee(d,A){return I(d.type,A,d.props)}function Z(d){return typeof d=="object"&&d!==null&&d.$$typeof===r}function ue(d){var A={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(U){return A[U]})}var Ht=/\/+/g;function dt(d,A){return typeof d=="object"&&d!==null&&d.key!=null?ue(""+d.key):A.toString(36)}function Y(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(he,he):(d.status="pending",d.then(function(A){d.status==="pending"&&(d.status="fulfilled",d.value=A)},function(A){d.status==="pending"&&(d.status="rejected",d.reason=A)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function f(d,A,U,q,F){var ne=typeof d;(ne==="undefined"||ne==="boolean")&&(d=null);var me=!1;if(d===null)me=!0;else switch(ne){case"bigint":case"string":case"number":me=!0;break;case"object":switch(d.$$typeof){case r:case E:me=!0;break;case R:return me=d._init,f(me(d._payload),A,U,q,F)}}if(me)return F=F(d),me=q===""?"."+dt(d,0):q,Oe(F)?(U="",me!=null&&(U=me.replace(Ht,"$&/")+"/"),f(F,A,U,"",function(Ya){return Ya})):F!=null&&(Z(F)&&(F=ee(F,U+(F.key==null||d&&d.key===F.key?"":(""+F.key).replace(Ht,"$&/")+"/")+me)),A.push(F)),1;me=0;var Je=q===""?".":q+":";if(Oe(d))for(var Ee=0;Ee<d.length;Ee++)q=d[Ee],ne=Je+dt(q,Ee),me+=f(q,A,U,ne,F);else if(Ee=K(d),typeof Ee=="function")for(d=Ee.call(d),Ee=0;!(q=d.next()).done;)q=q.value,ne=Je+dt(q,Ee++),me+=f(q,A,U,ne,F);else if(ne==="object"){if(typeof d.then=="function")return f(Y(d),A,U,q,F);throw A=String(d),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return me}function k(d,A,U){if(d==null)return d;var q=[],F=0;return f(d,q,"","",function(ne){return A.call(U,ne,F++)}),q}function O(d){if(d._status===-1){var A=d._result;A=A(),A.then(function(U){(d._status===0||d._status===-1)&&(d._status=1,d._result=U)},function(U){(d._status===0||d._status===-1)&&(d._status=2,d._result=U)}),d._status===-1&&(d._status=0,d._result=A)}if(d._status===1)return d._result.default;throw d._result}var re=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},pe={map:k,forEach:function(d,A,U){k(d,function(){A.apply(this,arguments)},U)},count:function(d){var A=0;return k(d,function(){A++}),A},toArray:function(d){return k(d,function(A){return A})||[]},only:function(d){if(!Z(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return W.Activity=_,W.Children=pe,W.Component=Me,W.Fragment=T,W.Profiler=v,W.PureComponent=Be,W.StrictMode=h,W.Suspense=z,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,W.__COMPILER_RUNTIME={__proto__:null,c:function(d){return $.H.useMemoCache(d)}},W.cache=function(d){return function(){return d.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(d,A,U){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var q=le({},d.props),F=d.key;if(A!=null)for(ne in A.key!==void 0&&(F=""+A.key),A)!_e.call(A,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&A.ref===void 0||(q[ne]=A[ne]);var ne=arguments.length-2;if(ne===1)q.children=U;else if(1<ne){for(var me=Array(ne),Je=0;Je<ne;Je++)me[Je]=arguments[Je+2];q.children=me}return I(d.type,F,q)},W.createContext=function(d){return d={$$typeof:C,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:B,_context:d},d},W.createElement=function(d,A,U){var q,F={},ne=null;if(A!=null)for(q in A.key!==void 0&&(ne=""+A.key),A)_e.call(A,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(F[q]=A[q]);var me=arguments.length-2;if(me===1)F.children=U;else if(1<me){for(var Je=Array(me),Ee=0;Ee<me;Ee++)Je[Ee]=arguments[Ee+2];F.children=Je}if(d&&d.defaultProps)for(q in me=d.defaultProps,me)F[q]===void 0&&(F[q]=me[q]);return I(d,ne,F)},W.createRef=function(){return{current:null}},W.forwardRef=function(d){return{$$typeof:M,render:d}},W.isValidElement=Z,W.lazy=function(d){return{$$typeof:R,_payload:{_status:-1,_result:d},_init:O}},W.memo=function(d,A){return{$$typeof:w,type:d,compare:A===void 0?null:A}},W.startTransition=function(d){var A=$.T,U={};$.T=U;try{var q=d(),F=$.S;F!==null&&F(U,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(he,re)}catch(ne){re(ne)}finally{A!==null&&U.types!==null&&(A.types=U.types),$.T=A}},W.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},W.use=function(d){return $.H.use(d)},W.useActionState=function(d,A,U){return $.H.useActionState(d,A,U)},W.useCallback=function(d,A){return $.H.useCallback(d,A)},W.useContext=function(d){return $.H.useContext(d)},W.useDebugValue=function(){},W.useDeferredValue=function(d,A){return $.H.useDeferredValue(d,A)},W.useEffect=function(d,A){return $.H.useEffect(d,A)},W.useEffectEvent=function(d){return $.H.useEffectEvent(d)},W.useId=function(){return $.H.useId()},W.useImperativeHandle=function(d,A,U){return $.H.useImperativeHandle(d,A,U)},W.useInsertionEffect=function(d,A){return $.H.useInsertionEffect(d,A)},W.useLayoutEffect=function(d,A){return $.H.useLayoutEffect(d,A)},W.useMemo=function(d,A){return $.H.useMemo(d,A)},W.useOptimistic=function(d,A){return $.H.useOptimistic(d,A)},W.useReducer=function(d,A,U){return $.H.useReducer(d,A,U)},W.useRef=function(d){return $.H.useRef(d)},W.useState=function(d){return $.H.useState(d)},W.useSyncExternalStore=function(d,A,U){return $.H.useSyncExternalStore(d,A,U)},W.useTransition=function(){return $.H.useTransition()},W.version="19.2.8",W}var Yf;function Es(){return Yf||(Yf=1,Ns.exports=k0()),Ns.exports}var V=Es(),js={exports:{}},Yn={},As={exports:{}},Ts={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function E0(){return Of||(Of=1,(function(r){function E(f,k){var O=f.length;f.push(k);e:for(;0<O;){var re=O-1>>>1,pe=f[re];if(0<v(pe,k))f[re]=k,f[O]=pe,O=re;else break e}}function T(f){return f.length===0?null:f[0]}function h(f){if(f.length===0)return null;var k=f[0],O=f.pop();if(O!==k){f[0]=O;e:for(var re=0,pe=f.length,d=pe>>>1;re<d;){var A=2*(re+1)-1,U=f[A],q=A+1,F=f[q];if(0>v(U,O))q<pe&&0>v(F,U)?(f[re]=F,f[q]=O,re=q):(f[re]=U,f[A]=O,re=A);else if(q<pe&&0>v(F,O))f[re]=F,f[q]=O,re=q;else break e}}return k}function v(f,k){var O=f.sortIndex-k.sortIndex;return O!==0?O:f.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var B=performance;r.unstable_now=function(){return B.now()}}else{var C=Date,M=C.now();r.unstable_now=function(){return C.now()-M}}var z=[],w=[],R=1,_=null,X=3,K=!1,P=!1,le=!1,Se=!1,Me=typeof setTimeout=="function"?setTimeout:null,Ye=typeof clearTimeout=="function"?clearTimeout:null,Be=typeof setImmediate<"u"?setImmediate:null;function ke(f){for(var k=T(w);k!==null;){if(k.callback===null)h(w);else if(k.startTime<=f)h(w),k.sortIndex=k.expirationTime,E(z,k);else break;k=T(w)}}function Oe(f){if(le=!1,ke(f),!P)if(T(z)!==null)P=!0,he||(he=!0,ue());else{var k=T(w);k!==null&&Y(Oe,k.startTime-f)}}var he=!1,$=-1,_e=5,I=-1;function ee(){return Se?!0:!(r.unstable_now()-I<_e)}function Z(){if(Se=!1,he){var f=r.unstable_now();I=f;var k=!0;try{e:{P=!1,le&&(le=!1,Ye($),$=-1),K=!0;var O=X;try{t:{for(ke(f),_=T(z);_!==null&&!(_.expirationTime>f&&ee());){var re=_.callback;if(typeof re=="function"){_.callback=null,X=_.priorityLevel;var pe=re(_.expirationTime<=f);if(f=r.unstable_now(),typeof pe=="function"){_.callback=pe,ke(f),k=!0;break t}_===T(z)&&h(z),ke(f)}else h(z);_=T(z)}if(_!==null)k=!0;else{var d=T(w);d!==null&&Y(Oe,d.startTime-f),k=!1}}break e}finally{_=null,X=O,K=!1}k=void 0}}finally{k?ue():he=!1}}}var ue;if(typeof Be=="function")ue=function(){Be(Z)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,dt=Ht.port2;Ht.port1.onmessage=Z,ue=function(){dt.postMessage(null)}}else ue=function(){Me(Z,0)};function Y(f,k){$=Me(function(){f(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(f){f.callback=null},r.unstable_forceFrameRate=function(f){0>f||125<f?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<f?Math.floor(1e3/f):5},r.unstable_getCurrentPriorityLevel=function(){return X},r.unstable_next=function(f){switch(X){case 1:case 2:case 3:var k=3;break;default:k=X}var O=X;X=k;try{return f()}finally{X=O}},r.unstable_requestPaint=function(){Se=!0},r.unstable_runWithPriority=function(f,k){switch(f){case 1:case 2:case 3:case 4:case 5:break;default:f=3}var O=X;X=f;try{return k()}finally{X=O}},r.unstable_scheduleCallback=function(f,k,O){var re=r.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?re+O:re):O=re,f){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=O+pe,f={id:R++,callback:k,priorityLevel:f,startTime:O,expirationTime:pe,sortIndex:-1},O>re?(f.sortIndex=O,E(w,f),T(z)===null&&f===T(w)&&(le?(Ye($),$=-1):le=!0,Y(Oe,O-re))):(f.sortIndex=pe,E(z,f),P||K||(P=!0,he||(he=!0,ue()))),f},r.unstable_shouldYield=ee,r.unstable_wrapCallback=function(f){var k=X;return function(){var O=X;X=k;try{return f.apply(this,arguments)}finally{X=O}}}})(Ts)),Ts}var Df;function B0(){return Df||(Df=1,As.exports=E0()),As.exports}var ks={exports:{}},at={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function z0(){if(Hf)return at;Hf=1;var r=Es();function E(z){var w="https://react.dev/errors/"+z;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)w+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+z+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(){}var h={d:{f:T,r:function(){throw Error(E(522))},D:T,C:T,L:T,m:T,X:T,S:T,M:T},p:0,findDOMNode:null},v=Symbol.for("react.portal");function B(z,w,R){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:_==null?null:""+_,children:z,containerInfo:w,implementation:R}}var C=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function M(z,w){if(z==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,at.createPortal=function(z,w){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(E(299));return B(z,w,null,R)},at.flushSync=function(z){var w=C.T,R=h.p;try{if(C.T=null,h.p=2,z)return z()}finally{C.T=w,h.p=R,h.d.f()}},at.preconnect=function(z,w){typeof z=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,h.d.C(z,w))},at.prefetchDNS=function(z){typeof z=="string"&&h.d.D(z)},at.preinit=function(z,w){if(typeof z=="string"&&w&&typeof w.as=="string"){var R=w.as,_=M(R,w.crossOrigin),X=typeof w.integrity=="string"?w.integrity:void 0,K=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;R==="style"?h.d.S(z,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:_,integrity:X,fetchPriority:K}):R==="script"&&h.d.X(z,{crossOrigin:_,integrity:X,fetchPriority:K,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},at.preinitModule=function(z,w){if(typeof z=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var R=M(w.as,w.crossOrigin);h.d.M(z,{crossOrigin:R,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&h.d.M(z)},at.preload=function(z,w){if(typeof z=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var R=w.as,_=M(R,w.crossOrigin);h.d.L(z,R,{crossOrigin:_,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},at.preloadModule=function(z,w){if(typeof z=="string")if(w){var R=M(w.as,w.crossOrigin);h.d.m(z,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:R,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else h.d.m(z)},at.requestFormReset=function(z){h.d.r(z)},at.unstable_batchedUpdates=function(z,w){return z(w)},at.useFormState=function(z,w,R){return C.H.useFormState(z,w,R)},at.useFormStatus=function(){return C.H.useHostTransitionStatus()},at.version="19.2.8",at}var Rf;function C0(){if(Rf)return ks.exports;Rf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(E){console.error(E)}}return r(),ks.exports=z0(),ks.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function M0(){if(qf)return Yn;qf=1;var r=B0(),E=Es(),T=C0();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function B(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function C(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(B(e)!==e)throw Error(h(188))}function w(e){var t=e.alternate;if(!t){if(t=B(e),t===null)throw Error(h(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return z(n),e;if(i===l)return z(n),t;i=i.sibling}throw Error(h(188))}if(a.return!==l.return)a=n,l=i;else{for(var o=!1,s=n.child;s;){if(s===a){o=!0,a=n,l=i;break}if(s===l){o=!0,l=n,a=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===a){o=!0,a=i,l=n;break}if(s===l){o=!0,l=i,a=n;break}s=s.sibling}if(!o)throw Error(h(189))}}if(a.alternate!==l)throw Error(h(190))}if(a.tag!==3)throw Error(h(188));return a.stateNode.current===a?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,X=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),Se=Symbol.for("react.strict_mode"),Me=Symbol.for("react.profiler"),Ye=Symbol.for("react.consumer"),Be=Symbol.for("react.context"),ke=Symbol.for("react.forward_ref"),Oe=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function ue(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var Ht=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case Me:return"Profiler";case Se:return"StrictMode";case Oe:return"Suspense";case he:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case Be:return e.displayName||"Context";case Ye:return(e._context.displayName||"Context")+".Consumer";case ke:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:dt(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return dt(e(t))}catch{}}return null}var Y=Array.isArray,f=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},re=[],pe=-1;function d(e){return{current:e}}function A(e){0>pe||(e.current=re[pe],re[pe]=null,pe--)}function U(e,t){pe++,re[pe]=e.current,e.current=t}var q=d(null),F=d(null),ne=d(null),me=d(null);function Je(e,t){switch(U(ne,t),U(F,e),U(q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ef(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ef(t),e=tf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(q),U(q,e)}function Ee(){A(q),A(F),A(ne)}function Ya(e){e.memoizedState!==null&&U(me,e);var t=q.current,a=tf(t,e.type);t!==a&&(U(F,e),U(q,a))}function D(e){F.current===e&&(A(q),A(F)),me.current===e&&(A(me),zn._currentValue=O)}var J,ie;function Qe(e){if(J===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);J=t&&t[1]||"",ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+J+e+ie}var nu=!1;function iu(e,t){if(!e||nu)return"";nu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(x){var g=x}Reflect.construct(e,[],j)}else{try{j.call()}catch(x){g=x}e.call(j.prototype)}}else{try{throw Error()}catch(x){g=x}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(x){if(x&&g&&typeof x.stack=="string")return[x.stack,g.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],s=i[1];if(o&&s){var c=o.split(`
`),p=s.split(`
`);for(n=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(l===c.length||n===p.length)for(l=c.length-1,n=p.length-1;1<=l&&0<=n&&c[l]!==p[n];)n--;for(;1<=l&&0<=n;l--,n--)if(c[l]!==p[n]){if(l!==1||n!==1)do if(l--,n--,0>n||c[l]!==p[n]){var S=`
`+c[l].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=l&&0<=n);break}}}finally{nu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qe(a):""}function ah(e,t){switch(e.tag){case 26:case 27:case 5:return Qe(e.type);case 16:return Qe("Lazy");case 13:return e.child!==t&&t!==null?Qe("Suspense Fallback"):Qe("Suspense");case 19:return Qe("SuspenseList");case 0:case 15:return iu(e.type,!1);case 11:return iu(e.type.render,!1);case 1:return iu(e.type,!0);case 31:return Qe("Activity");default:return""}}function Cs(e){try{var t="",a=null;do t+=ah(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var uu=Object.prototype.hasOwnProperty,ou=r.unstable_scheduleCallback,su=r.unstable_cancelCallback,lh=r.unstable_shouldYield,nh=r.unstable_requestPaint,ft=r.unstable_now,ih=r.unstable_getCurrentPriorityLevel,Ms=r.unstable_ImmediatePriority,_s=r.unstable_UserBlockingPriority,Dn=r.unstable_NormalPriority,uh=r.unstable_LowPriority,Us=r.unstable_IdlePriority,oh=r.log,sh=r.unstable_setDisableYieldValue,Vl=null,ht=null;function ca(e){if(typeof oh=="function"&&sh(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(Vl,e)}catch{}}var mt=Math.clz32?Math.clz32:dh,rh=Math.log,ch=Math.LN2;function dh(e){return e>>>=0,e===0?32:31-(rh(e)/ch|0)|0}var Hn=256,Rn=262144,qn=4194304;function Oa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Oa(l):(o&=s,o!==0?n=Oa(o):a||(a=s&~e,a!==0&&(n=Oa(a))))):(s=l&~i,s!==0?n=Oa(s):o!==0?n=Oa(o):a||(a=l&~e,a!==0&&(n=Oa(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Ll(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function fh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ys(){var e=qn;return qn<<=1,(qn&62914560)===0&&(qn=4194304),e}function ru(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Il(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hh(e,t,a,l,n,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,p=e.hiddenUpdates;for(a=o&~a;0<a;){var S=31-mt(a),j=1<<S;s[S]=0,c[S]=-1;var g=p[S];if(g!==null)for(p[S]=null,S=0;S<g.length;S++){var x=g[S];x!==null&&(x.lane&=-536870913)}a&=~j}l!==0&&Os(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Os(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-mt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Ds(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-mt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Hs(e,t){var a=t&-t;return a=(a&42)!==0?1:cu(a),(a&(e.suspendedLanes|t))!==0?0:a}function cu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Rs(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:Af(e.type))}function qs(e,t){var a=k.p;try{return k.p=e,t()}finally{k.p=a}}var da=Math.random().toString(36).slice(2),$e="__reactFiber$"+da,nt="__reactProps$"+da,al="__reactContainer$"+da,fu="__reactEvents$"+da,mh="__reactListeners$"+da,yh="__reactHandles$"+da,Vs="__reactResources$"+da,Gl="__reactMarker$"+da;function hu(e){delete e[$e],delete e[nt],delete e[fu],delete e[mh],delete e[yh]}function ll(e){var t=e[$e];if(t)return t;for(var a=e.parentNode;a;){if(t=a[al]||a[$e]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=rf(e);e!==null;){if(a=e[$e])return a;e=rf(e)}return t}e=a,a=e.parentNode}return null}function nl(e){if(e=e[$e]||e[al]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function il(e){var t=e[Vs];return t||(t=e[Vs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[Gl]=!0}var Ls=new Set,Is={};function Da(e,t){ul(e,t),ul(e+"Capture",t)}function ul(e,t){for(Is[e]=t,e=0;e<t.length;e++)Ls.add(t[e])}var bh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gs={},Xs={};function ph(e){return uu.call(Xs,e)?!0:uu.call(Gs,e)?!1:bh.test(e)?Xs[e]=!0:(Gs[e]=!0,!1)}function Ln(e,t,a){if(ph(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function In(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Xt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gh(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mu(e){if(!e._valueTracker){var t=Qs(e)?"checked":"value";e._valueTracker=gh(e,t,""+e[t])}}function Zs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Qs(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xh=/[\n"\\]/g;function At(e){return e.replace(xh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yu(e,t,a,l,n,i,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?bu(e,o,jt(t)):a!=null?bu(e,o,jt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+jt(s):e.removeAttribute("name")}function Ks(e,t,a,l,n,i,o,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){mu(e);return}a=a!=null?""+jt(a):"",t=t!=null?""+jt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),mu(e)}function bu(e,t,a){t==="number"&&Gn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ol(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+jt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Js(e,t,a){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+jt(a):""}function $s(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(h(92));if(Y(l)){if(1<l.length)throw Error(h(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=jt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),mu(e)}function sl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var vh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fs(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||vh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ws(e,t,a){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Fs(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Fs(e,i,t[i])}function pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xn(e){return Sh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qt(){}var gu=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rl=null,cl=null;function Ps(e){var t=nl(e);if(t&&(e=t.stateNode)){var a=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(yu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[nt]||null;if(!n)throw Error(h(90));yu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Zs(l)}break e;case"textarea":Js(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ol(e,!!a.multiple,t,!1)}}}var vu=!1;function er(e,t,a){if(vu)return e(t,a);vu=!0;try{var l=e(t);return l}finally{if(vu=!1,(rl!==null||cl!==null)&&(Mi(),rl&&(t=rl,e=cl,cl=rl=null,Ps(t),e)))for(t=0;t<e.length;t++)Ps(e[t])}}function Ql(e,t){var a=e.stateNode;if(a===null)return null;var l=a[nt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(h(231,t,typeof a));return a}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=!1;if(Zt)try{var Zl={};Object.defineProperty(Zl,"passive",{get:function(){wu=!0}}),window.addEventListener("test",Zl,Zl),window.removeEventListener("test",Zl,Zl)}catch{wu=!1}var fa=null,Su=null,Qn=null;function tr(){if(Qn)return Qn;var e,t=Su,a=t.length,l,n="value"in fa?fa.value:fa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[i-l];l++);return Qn=n.slice(e,1<l?1-l:void 0)}function Zn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kn(){return!0}function ar(){return!1}function it(e){function t(a,l,n,i,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kn:ar,this.isPropagationStopped=ar,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),t}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jn=it(Ha),Kl=_({},Ha,{view:0,detail:0}),Nh=it(Kl),Nu,ju,Jl,$n=_({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jl&&(Jl&&e.type==="mousemove"?(Nu=e.screenX-Jl.screenX,ju=e.screenY-Jl.screenY):ju=Nu=0,Jl=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:ju}}),lr=it($n),jh=_({},$n,{dataTransfer:0}),Ah=it(jh),Th=_({},Kl,{relatedTarget:0}),Au=it(Th),kh=_({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),Eh=it(kh),Bh=_({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zh=it(Bh),Ch=_({},Ha,{data:0}),nr=it(Ch),Mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_h={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uh[e])?!!t[e]:!1}function Tu(){return Yh}var Oh=_({},Kl,{key:function(e){if(e.key){var t=Mh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_h[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?Zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dh=it(Oh),Hh=_({},$n,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ir=it(Hh),Rh=_({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),qh=it(Rh),Vh=_({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lh=it(Vh),Ih=_({},$n,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gh=it(Ih),Xh=_({},Ha,{newState:0,oldState:0}),Qh=it(Xh),Zh=[9,13,27,32],ku=Zt&&"CompositionEvent"in window,$l=null;Zt&&"documentMode"in document&&($l=document.documentMode);var Kh=Zt&&"TextEvent"in window&&!$l,ur=Zt&&(!ku||$l&&8<$l&&11>=$l),or=" ",sr=!1;function rr(e,t){switch(e){case"keyup":return Zh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dl=!1;function Jh(e,t){switch(e){case"compositionend":return cr(t);case"keypress":return t.which!==32?null:(sr=!0,or);case"textInput":return e=t.data,e===or&&sr?null:e;default:return null}}function $h(e,t){if(dl)return e==="compositionend"||!ku&&rr(e,t)?(e=tr(),Qn=Su=fa=null,dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ur&&t.locale!=="ko"?null:t.data;default:return null}}var Fh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fh[e.type]:t==="textarea"}function fr(e,t,a,l){rl?cl?cl.push(l):cl=[l]:rl=l,t=Ri(t,"onChange"),0<t.length&&(a=new Jn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Fl=null,Wl=null;function Wh(e){Kd(e,0)}function Fn(e){var t=Xl(e);if(Zs(t))return e}function hr(e,t){if(e==="change")return t}var mr=!1;if(Zt){var Eu;if(Zt){var Bu="oninput"in document;if(!Bu){var yr=document.createElement("div");yr.setAttribute("oninput","return;"),Bu=typeof yr.oninput=="function"}Eu=Bu}else Eu=!1;mr=Eu&&(!document.documentMode||9<document.documentMode)}function br(){Fl&&(Fl.detachEvent("onpropertychange",pr),Wl=Fl=null)}function pr(e){if(e.propertyName==="value"&&Fn(Wl)){var t=[];fr(t,Wl,e,xu(e)),er(Wh,t)}}function Ph(e,t,a){e==="focusin"?(br(),Fl=t,Wl=a,Fl.attachEvent("onpropertychange",pr)):e==="focusout"&&br()}function em(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fn(Wl)}function tm(e,t){if(e==="click")return Fn(t)}function am(e,t){if(e==="input"||e==="change")return Fn(t)}function lm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:lm;function Pl(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!uu.call(t,n)||!yt(e[n],t[n]))return!1}return!0}function gr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var a=gr(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gr(a)}}function vr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Gn(e.document)}return t}function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var nm=Zt&&"documentMode"in document&&11>=document.documentMode,fl=null,Cu=null,en=null,Mu=!1;function Sr(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||fl==null||fl!==Gn(l)||(l=fl,"selectionStart"in l&&zu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),en&&Pl(en,l)||(en=l,l=Ri(Cu,"onSelect"),0<l.length&&(t=new Jn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=fl)))}function Ra(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var hl={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionrun:Ra("Transition","TransitionRun"),transitionstart:Ra("Transition","TransitionStart"),transitioncancel:Ra("Transition","TransitionCancel"),transitionend:Ra("Transition","TransitionEnd")},_u={},Nr={};Zt&&(Nr=document.createElement("div").style,"AnimationEvent"in window||(delete hl.animationend.animation,delete hl.animationiteration.animation,delete hl.animationstart.animation),"TransitionEvent"in window||delete hl.transitionend.transition);function qa(e){if(_u[e])return _u[e];if(!hl[e])return e;var t=hl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Nr)return _u[e]=t[a];return e}var jr=qa("animationend"),Ar=qa("animationiteration"),Tr=qa("animationstart"),im=qa("transitionrun"),um=qa("transitionstart"),om=qa("transitioncancel"),kr=qa("transitionend"),Er=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Yt(e,t){Er.set(e,t),Da(t,[e])}var Wn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Tt=[],ml=0,Yu=0;function Pn(){for(var e=ml,t=Yu=ml=0;t<e;){var a=Tt[t];Tt[t++]=null;var l=Tt[t];Tt[t++]=null;var n=Tt[t];Tt[t++]=null;var i=Tt[t];if(Tt[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}i!==0&&Br(a,n,i)}}function ei(e,t,a,l){Tt[ml++]=e,Tt[ml++]=t,Tt[ml++]=a,Tt[ml++]=l,Yu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ou(e,t,a,l){return ei(e,t,a,l),ti(e)}function Va(e,t){return ei(e,null,null,t),ti(e)}function Br(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-mt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ti(e){if(50<Nn)throw Nn=0,Qo=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var yl={};function sm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,a,l){return new sm(e,t,a,l)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var a=e.alternate;return a===null?(a=bt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zr(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ai(e,t,a,l,n,i){var o=0;if(l=e,typeof e=="function")Du(e)&&(o=1);else if(typeof e=="string")o=h0(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=bt(31,a,t,n),e.elementType=I,e.lanes=i,e;case le:return La(a.children,n,i,t);case Se:o=8,n|=24;break;case Me:return e=bt(12,a,t,n|2),e.elementType=Me,e.lanes=i,e;case Oe:return e=bt(13,a,t,n),e.elementType=Oe,e.lanes=i,e;case he:return e=bt(19,a,t,n),e.elementType=he,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Be:o=10;break e;case Ye:o=9;break e;case ke:o=11;break e;case $:o=14;break e;case _e:o=16,l=null;break e}o=29,a=Error(h(130,e===null?"null":typeof e,"")),l=null}return t=bt(o,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function La(e,t,a,l){return e=bt(7,e,l,t),e.lanes=a,e}function Hu(e,t,a){return e=bt(6,e,null,t),e.lanes=a,e}function Cr(e){var t=bt(18,null,null,0);return t.stateNode=e,t}function Ru(e,t,a){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Mr=new WeakMap;function kt(e,t){if(typeof e=="object"&&e!==null){var a=Mr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Cs(t)},Mr.set(e,t),t)}return{value:e,source:t,stack:Cs(t)}}var bl=[],pl=0,li=null,tn=0,Et=[],Bt=0,ha=null,Rt=1,qt="";function Jt(e,t){bl[pl++]=tn,bl[pl++]=li,li=e,tn=t}function _r(e,t,a){Et[Bt++]=Rt,Et[Bt++]=qt,Et[Bt++]=ha,ha=e;var l=Rt;e=qt;var n=32-mt(l)-1;l&=~(1<<n),a+=1;var i=32-mt(t)+n;if(30<i){var o=n-n%5;i=(l&(1<<o)-1).toString(32),l>>=o,n-=o,Rt=1<<32-mt(t)+n|a<<n|l,qt=i+e}else Rt=1<<i|a<<n|l,qt=e}function qu(e){e.return!==null&&(Jt(e,1),_r(e,1,0))}function Vu(e){for(;e===li;)li=bl[--pl],bl[pl]=null,tn=bl[--pl],bl[pl]=null;for(;e===ha;)ha=Et[--Bt],Et[Bt]=null,qt=Et[--Bt],Et[Bt]=null,Rt=Et[--Bt],Et[Bt]=null}function Ur(e,t){Et[Bt++]=Rt,Et[Bt++]=qt,Et[Bt++]=ha,Rt=t.id,qt=t.overflow,ha=e}var Fe=null,ze=null,fe=!1,ma=null,zt=!1,Lu=Error(h(519));function ya(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw an(kt(t,e)),Lu}function Yr(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[$e]=e,t[nt]=l,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<An.length;a++)se(An[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),Ks(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),$s(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Wd(t.textContent,a)?(l.popover!=null&&(se("beforetoggle",t),se("toggle",t)),l.onScroll!=null&&se("scroll",t),l.onScrollEnd!=null&&se("scrollend",t),l.onClick!=null&&(t.onclick=Qt),t=!0):t=!1,t||ya(e,!0)}function Or(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:zt=!1;return;case 27:case 3:zt=!0;return;default:Fe=Fe.return}}function gl(e){if(e!==Fe)return!1;if(!fe)return Or(e),fe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||os(e.type,e.memoizedProps)),a=!a),a&&ze&&ya(e),Or(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ze=sf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ze=sf(e)}else t===27?(t=ze,Ba(e.type)?(e=fs,fs=null,ze=e):ze=t):ze=Fe?Mt(e.stateNode.nextSibling):null;return!0}function Ia(){ze=Fe=null,fe=!1}function Iu(){var e=ma;return e!==null&&(rt===null?rt=e:rt.push.apply(rt,e),ma=null),e}function an(e){ma===null?ma=[e]:ma.push(e)}var Gu=d(null),Ga=null,$t=null;function ba(e,t,a){U(Gu,t._currentValue),t._currentValue=a}function Ft(e){e._currentValue=Gu.current,A(Gu)}function Xu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Qu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var c=0;c<t.length;c++)if(s.context===t[c]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Xu(i.return,a,e),l||(o=null);break e}i=s.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(h(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),Xu(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function xl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(h(387));if(o=o.memoizedProps,o!==null){var s=n.type;yt(n.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(n===me.current){if(o=n.alternate,o===null)throw Error(h(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(zn):e=[zn])}n=n.return}e!==null&&Qu(t,e,a,l),t.flags|=262144}function ni(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xa(e){Ga=e,$t=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return Dr(Ga,e)}function ii(e,t){return Ga===null&&Xa(e),Dr(e,t)}function Dr(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},$t===null){if(e===null)throw Error(h(308));$t=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $t=$t.next=t;return a}var rm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},cm=r.unstable_scheduleCallback,dm=r.unstable_NormalPriority,Ve={$$typeof:Be,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new rm,data:new Map,refCount:0}}function ln(e){e.refCount--,e.refCount===0&&cm(dm,function(){e.controller.abort()})}var nn=null,Ku=0,vl=0,wl=null;function fm(e,t){if(nn===null){var a=nn=[];Ku=0,vl=Wo(),wl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ku++,t.then(Hr,Hr),t}function Hr(){if(--Ku===0&&nn!==null){wl!==null&&(wl.status="fulfilled");var e=nn;nn=null,vl=0,wl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function hm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Rr=f.S;f.S=function(e,t){Sd=ft(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&fm(e,t),Rr!==null&&Rr(e,t)};var Qa=d(null);function Ju(){var e=Qa.current;return e!==null?e:Te.pooledCache}function ui(e,t){t===null?U(Qa,Qa.current):U(Qa,t.pool)}function qr(){var e=Ju();return e===null?null:{parent:Ve._currentValue,pool:e}}var Sl=Error(h(460)),$u=Error(h(474)),oi=Error(h(542)),si={then:function(){}};function Vr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lr(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Qt,Qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gr(e),e;default:if(typeof t.status=="string")t.then(Qt,Qt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gr(e),e}throw Ka=t,Sl}}function Za(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ka=a,Sl):a}}var Ka=null;function Ir(){if(Ka===null)throw Error(h(459));var e=Ka;return Ka=null,e}function Gr(e){if(e===Sl||e===oi)throw Error(h(483))}var Nl=null,un=0;function ri(e){var t=un;return un+=1,Nl===null&&(Nl=[]),Lr(Nl,e,t)}function on(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ci(e,t){throw t.$$typeof===X?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Xr(e){function t(y,m){if(e){var b=y.deletions;b===null?(y.deletions=[m],y.flags|=16):b.push(m)}}function a(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function l(y){for(var m=new Map;y!==null;)y.key!==null?m.set(y.key,y):m.set(y.index,y),y=y.sibling;return m}function n(y,m){return y=Kt(y,m),y.index=0,y.sibling=null,y}function i(y,m,b){return y.index=b,e?(b=y.alternate,b!==null?(b=b.index,b<m?(y.flags|=67108866,m):b):(y.flags|=67108866,m)):(y.flags|=1048576,m)}function o(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function s(y,m,b,N){return m===null||m.tag!==6?(m=Hu(b,y.mode,N),m.return=y,m):(m=n(m,b),m.return=y,m)}function c(y,m,b,N){var G=b.type;return G===le?S(y,m,b.props.children,N,b.key):m!==null&&(m.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===_e&&Za(G)===m.type)?(m=n(m,b.props),on(m,b),m.return=y,m):(m=ai(b.type,b.key,b.props,null,y.mode,N),on(m,b),m.return=y,m)}function p(y,m,b,N){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=Ru(b,y.mode,N),m.return=y,m):(m=n(m,b.children||[]),m.return=y,m)}function S(y,m,b,N,G){return m===null||m.tag!==7?(m=La(b,y.mode,N,G),m.return=y,m):(m=n(m,b),m.return=y,m)}function j(y,m,b){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Hu(""+m,y.mode,b),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case K:return b=ai(m.type,m.key,m.props,null,y.mode,b),on(b,m),b.return=y,b;case P:return m=Ru(m,y.mode,b),m.return=y,m;case _e:return m=Za(m),j(y,m,b)}if(Y(m)||ue(m))return m=La(m,y.mode,b,null),m.return=y,m;if(typeof m.then=="function")return j(y,ri(m),b);if(m.$$typeof===Be)return j(y,ii(y,m),b);ci(y,m)}return null}function g(y,m,b,N){var G=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return G!==null?null:s(y,m,""+b,N);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case K:return b.key===G?c(y,m,b,N):null;case P:return b.key===G?p(y,m,b,N):null;case _e:return b=Za(b),g(y,m,b,N)}if(Y(b)||ue(b))return G!==null?null:S(y,m,b,N,null);if(typeof b.then=="function")return g(y,m,ri(b),N);if(b.$$typeof===Be)return g(y,m,ii(y,b),N);ci(y,b)}return null}function x(y,m,b,N,G){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return y=y.get(b)||null,s(m,y,""+N,G);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case K:return y=y.get(N.key===null?b:N.key)||null,c(m,y,N,G);case P:return y=y.get(N.key===null?b:N.key)||null,p(m,y,N,G);case _e:return N=Za(N),x(y,m,b,N,G)}if(Y(N)||ue(N))return y=y.get(b)||null,S(m,y,N,G,null);if(typeof N.then=="function")return x(y,m,b,ri(N),G);if(N.$$typeof===Be)return x(y,m,b,ii(m,N),G);ci(m,N)}return null}function H(y,m,b,N){for(var G=null,ye=null,L=m,ae=m=0,de=null;L!==null&&ae<b.length;ae++){L.index>ae?(de=L,L=null):de=L.sibling;var be=g(y,L,b[ae],N);if(be===null){L===null&&(L=de);break}e&&L&&be.alternate===null&&t(y,L),m=i(be,m,ae),ye===null?G=be:ye.sibling=be,ye=be,L=de}if(ae===b.length)return a(y,L),fe&&Jt(y,ae),G;if(L===null){for(;ae<b.length;ae++)L=j(y,b[ae],N),L!==null&&(m=i(L,m,ae),ye===null?G=L:ye.sibling=L,ye=L);return fe&&Jt(y,ae),G}for(L=l(L);ae<b.length;ae++)de=x(L,y,ae,b[ae],N),de!==null&&(e&&de.alternate!==null&&L.delete(de.key===null?ae:de.key),m=i(de,m,ae),ye===null?G=de:ye.sibling=de,ye=de);return e&&L.forEach(function(Ua){return t(y,Ua)}),fe&&Jt(y,ae),G}function Q(y,m,b,N){if(b==null)throw Error(h(151));for(var G=null,ye=null,L=m,ae=m=0,de=null,be=b.next();L!==null&&!be.done;ae++,be=b.next()){L.index>ae?(de=L,L=null):de=L.sibling;var Ua=g(y,L,be.value,N);if(Ua===null){L===null&&(L=de);break}e&&L&&Ua.alternate===null&&t(y,L),m=i(Ua,m,ae),ye===null?G=Ua:ye.sibling=Ua,ye=Ua,L=de}if(be.done)return a(y,L),fe&&Jt(y,ae),G;if(L===null){for(;!be.done;ae++,be=b.next())be=j(y,be.value,N),be!==null&&(m=i(be,m,ae),ye===null?G=be:ye.sibling=be,ye=be);return fe&&Jt(y,ae),G}for(L=l(L);!be.done;ae++,be=b.next())be=x(L,y,ae,be.value,N),be!==null&&(e&&be.alternate!==null&&L.delete(be.key===null?ae:be.key),m=i(be,m,ae),ye===null?G=be:ye.sibling=be,ye=be);return e&&L.forEach(function(j0){return t(y,j0)}),fe&&Jt(y,ae),G}function Ae(y,m,b,N){if(typeof b=="object"&&b!==null&&b.type===le&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case K:e:{for(var G=b.key;m!==null;){if(m.key===G){if(G=b.type,G===le){if(m.tag===7){a(y,m.sibling),N=n(m,b.props.children),N.return=y,y=N;break e}}else if(m.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===_e&&Za(G)===m.type){a(y,m.sibling),N=n(m,b.props),on(N,b),N.return=y,y=N;break e}a(y,m);break}else t(y,m);m=m.sibling}b.type===le?(N=La(b.props.children,y.mode,N,b.key),N.return=y,y=N):(N=ai(b.type,b.key,b.props,null,y.mode,N),on(N,b),N.return=y,y=N)}return o(y);case P:e:{for(G=b.key;m!==null;){if(m.key===G)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){a(y,m.sibling),N=n(m,b.children||[]),N.return=y,y=N;break e}else{a(y,m);break}else t(y,m);m=m.sibling}N=Ru(b,y.mode,N),N.return=y,y=N}return o(y);case _e:return b=Za(b),Ae(y,m,b,N)}if(Y(b))return H(y,m,b,N);if(ue(b)){if(G=ue(b),typeof G!="function")throw Error(h(150));return b=G.call(b),Q(y,m,b,N)}if(typeof b.then=="function")return Ae(y,m,ri(b),N);if(b.$$typeof===Be)return Ae(y,m,ii(y,b),N);ci(y,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,m!==null&&m.tag===6?(a(y,m.sibling),N=n(m,b),N.return=y,y=N):(a(y,m),N=Hu(b,y.mode,N),N.return=y,y=N),o(y)):a(y,m)}return function(y,m,b,N){try{un=0;var G=Ae(y,m,b,N);return Nl=null,G}catch(L){if(L===Sl||L===oi)throw L;var ye=bt(29,L,null,y.mode);return ye.lanes=N,ye.return=y,ye}finally{}}}var Ja=Xr(!0),Qr=Xr(!1),pa=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ge&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ti(e),Br(e,null,a),t}return ei(e,l,t,a),ti(e)}function sn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ds(e,a)}}function Pu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var eo=!1;function rn(){if(eo){var e=wl;if(e!==null)throw e}}function cn(e,t,a,l){eo=!1;var n=e.updateQueue;pa=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var c=s,p=c.next;c.next=null,o===null?i=p:o.next=p,o=c;var S=e.alternate;S!==null&&(S=S.updateQueue,s=S.lastBaseUpdate,s!==o&&(s===null?S.firstBaseUpdate=p:s.next=p,S.lastBaseUpdate=c))}if(i!==null){var j=n.baseState;o=0,S=p=c=null,s=i;do{var g=s.lane&-536870913,x=g!==s.lane;if(x?(ce&g)===g:(l&g)===g){g!==0&&g===vl&&(eo=!0),S!==null&&(S=S.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var H=e,Q=s;g=t;var Ae=a;switch(Q.tag){case 1:if(H=Q.payload,typeof H=="function"){j=H.call(Ae,j,g);break e}j=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=Q.payload,g=typeof H=="function"?H.call(Ae,j,g):H,g==null)break e;j=_({},j,g);break e;case 2:pa=!0}}g=s.callback,g!==null&&(e.flags|=64,x&&(e.flags|=8192),x=n.callbacks,x===null?n.callbacks=[g]:x.push(g))}else x={lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},S===null?(p=S=x,c=j):S=S.next=x,o|=g;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;x=s,s=x.next,x.next=null,n.lastBaseUpdate=x,n.shared.pending=null}}while(!0);S===null&&(c=j),n.baseState=c,n.firstBaseUpdate=p,n.lastBaseUpdate=S,i===null&&(n.shared.lanes=0),ja|=o,e.lanes=o,e.memoizedState=j}}function Zr(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Kr(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zr(a[e],t)}var jl=d(null),di=d(0);function Jr(e,t){e=ua,U(di,e),U(jl,t),ua=e|t.baseLanes}function to(){U(di,ua),U(jl,jl.current)}function ao(){ua=di.current,A(jl),A(di)}var pt=d(null),Ct=null;function va(e){var t=e.alternate;U(Re,Re.current&1),U(pt,e),Ct===null&&(t===null||jl.current!==null||t.memoizedState!==null)&&(Ct=e)}function lo(e){U(Re,Re.current),U(pt,e),Ct===null&&(Ct=e)}function $r(e){e.tag===22?(U(Re,Re.current),U(pt,e),Ct===null&&(Ct=e)):wa()}function wa(){U(Re,Re.current),U(pt,pt.current)}function gt(e){A(pt),Ct===e&&(Ct=null),A(Re)}var Re=d(0);function fi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||cs(a)||ds(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wt=0,te=null,Ne=null,Le=null,hi=!1,Al=!1,$a=!1,mi=0,dn=0,Tl=null,mm=0;function De(){throw Error(h(321))}function no(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yt(e[a],t[a]))return!1;return!0}function io(e,t,a,l,n,i){return Wt=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,f.H=e===null||e.memoizedState===null?_c:wo,$a=!1,i=a(l,n),$a=!1,Al&&(i=Wr(t,a,l,n)),Fr(e),i}function Fr(e){f.H=mn;var t=Ne!==null&&Ne.next!==null;if(Wt=0,Le=Ne=te=null,hi=!1,dn=0,Tl=null,t)throw Error(h(300));e===null||Ie||(e=e.dependencies,e!==null&&ni(e)&&(Ie=!0))}function Wr(e,t,a,l){te=e;var n=0;do{if(Al&&(Tl=null),dn=0,Al=!1,25<=n)throw Error(h(301));if(n+=1,Le=Ne=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}f.H=Uc,i=t(a,l)}while(Al);return i}function ym(){var e=f.H,t=e.useState()[0];return t=typeof t.then=="function"?fn(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(te.flags|=1024),t}function uo(){var e=mi!==0;return mi=0,e}function oo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function so(e){if(hi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hi=!1}Wt=0,Le=Ne=te=null,Al=!1,dn=mi=0,Tl=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?te.memoizedState=Le=e:Le=Le.next=e,Le}function qe(){if(Ne===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Le===null?te.memoizedState:Le.next;if(t!==null)Le=t,Ne=e;else{if(e===null)throw te.alternate===null?Error(h(467)):Error(h(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Le===null?te.memoizedState=Le=e:Le=Le.next=e}return Le}function yi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fn(e){var t=dn;return dn+=1,Tl===null&&(Tl=[]),e=Lr(Tl,e,t),t=te,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,f.H=t===null||t.memoizedState===null?_c:wo),e}function bi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fn(e);if(e.$$typeof===Be)return We(e)}throw Error(h(438,String(e)))}function ro(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=yi(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=ee;return t.index++,a}function Pt(e,t){return typeof t=="function"?t(e):t}function pi(e){var t=qe();return co(t,Ne,e)}function co(e,t,a){var l=e.queue;if(l===null)throw Error(h(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=o=null,c=null,p=t,S=!1;do{var j=p.lane&-536870913;if(j!==p.lane?(ce&j)===j:(Wt&j)===j){var g=p.revertLane;if(g===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),j===vl&&(S=!0);else if((Wt&g)===g){p=p.next,g===vl&&(S=!0);continue}else j={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(s=c=j,o=i):c=c.next=j,te.lanes|=g,ja|=g;j=p.action,$a&&a(i,j),i=p.hasEagerState?p.eagerState:a(i,j)}else g={lane:j,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(s=c=g,o=i):c=c.next=g,te.lanes|=j,ja|=j;p=p.next}while(p!==null&&p!==t);if(c===null?o=i:c.next=s,!yt(i,e.memoizedState)&&(Ie=!0,S&&(a=wl,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=c,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function fo(e){var t=qe(),a=t.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do i=e(i,o.action),o=o.next;while(o!==n);yt(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Pr(e,t,a){var l=te,n=qe(),i=fe;if(i){if(a===void 0)throw Error(h(407));a=a()}else a=t();var o=!yt((Ne||n).memoizedState,a);if(o&&(n.memoizedState=a,Ie=!0),n=n.queue,yo(ac.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,kl(9,{destroy:void 0},tc.bind(null,l,n,a,t),null),Te===null)throw Error(h(349));i||(Wt&127)!==0||ec(l,t,a)}return a}function ec(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=yi(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function tc(e,t,a,l){t.value=a,t.getSnapshot=l,lc(t)&&nc(e)}function ac(e,t,a){return a(function(){lc(t)&&nc(e)})}function lc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yt(e,a)}catch{return!0}}function nc(e){var t=Va(e,2);t!==null&&ct(t,e,2)}function ho(e){var t=lt();if(typeof e=="function"){var a=e;if(e=a(),$a){ca(!0);try{a()}finally{ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function ic(e,t,a,l){return e.baseState=a,co(e,Ne,typeof l=="function"?l:Pt)}function bm(e,t,a,l,n){if(vi(e))throw Error(h(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};f.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,uc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function uc(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=f.T,o={};f.T=o;try{var s=a(n,l),c=f.S;c!==null&&c(o,s),oc(e,t,s)}catch(p){mo(e,t,p)}finally{i!==null&&o.types!==null&&(i.types=o.types),f.T=i}}else try{i=a(n,l),oc(e,t,i)}catch(p){mo(e,t,p)}}function oc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){sc(e,t,l)},function(l){return mo(e,t,l)}):sc(e,t,a)}function sc(e,t,a){t.status="fulfilled",t.value=a,rc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,uc(e,a)))}function mo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,rc(t),t=t.next;while(t!==l)}e.action=null}function rc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cc(e,t){return t}function dc(e,t){if(fe){var a=Te.formState;if(a!==null){e:{var l=te;if(fe){if(ze){t:{for(var n=ze,i=zt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Mt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ze=Mt(n.nextSibling),l=n.data==="F!";break e}}ya(l)}l=!1}l&&(t=a[0])}}return a=lt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cc,lastRenderedState:t},a.queue=l,a=zc.bind(null,te,l),l.dispatch=a,l=ho(!1),i=vo.bind(null,te,!1,l.queue),l=lt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=bm.bind(null,te,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function fc(e){var t=qe();return hc(t,Ne,e)}function hc(e,t,a){if(t=co(e,t,cc)[0],e=pi(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=fn(t)}catch(o){throw o===Sl?oi:o}else l=t;t=qe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,kl(9,{destroy:void 0},pm.bind(null,n,a),null)),[l,i,e]}function pm(e,t){e.action=t}function mc(e){var t=qe(),a=Ne;if(a!==null)return hc(t,a,e);qe(),t=t.memoizedState,a=qe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function kl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=yi(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function yc(){return qe().memoizedState}function gi(e,t,a,l){var n=lt();te.flags|=e,n.memoizedState=kl(1|t,{destroy:void 0},a,l===void 0?null:l)}function xi(e,t,a,l){var n=qe();l=l===void 0?null:l;var i=n.memoizedState.inst;Ne!==null&&l!==null&&no(l,Ne.memoizedState.deps)?n.memoizedState=kl(t,i,a,l):(te.flags|=e,n.memoizedState=kl(1|t,i,a,l))}function bc(e,t){gi(8390656,8,e,t)}function yo(e,t){xi(2048,8,e,t)}function gm(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=yi(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function pc(e){var t=qe().memoizedState;return gm({ref:t,nextImpl:e}),function(){if((ge&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function gc(e,t){return xi(4,2,e,t)}function xc(e,t){return xi(4,4,e,t)}function vc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wc(e,t,a){a=a!=null?a.concat([e]):null,xi(4,4,vc.bind(null,t,e),a)}function bo(){}function Sc(e,t){var a=qe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&no(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Nc(e,t){var a=qe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&no(t,l[1]))return l[0];if(l=e(),$a){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l}function po(e,t,a){return a===void 0||(Wt&1073741824)!==0&&(ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=jd(),te.lanes|=e,ja|=e,a)}function jc(e,t,a,l){return yt(a,t)?a:jl.current!==null?(e=po(e,a,l),yt(e,t)||(Ie=!0),e):(Wt&42)===0||(Wt&1073741824)!==0&&(ce&261930)===0?(Ie=!0,e.memoizedState=a):(e=jd(),te.lanes|=e,ja|=e,t)}function Ac(e,t,a,l,n){var i=k.p;k.p=i!==0&&8>i?i:8;var o=f.T,s={};f.T=s,vo(e,!1,t,a);try{var c=n(),p=f.S;if(p!==null&&p(s,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var S=hm(c,l);hn(e,t,S,wt(e))}else hn(e,t,l,wt(e))}catch(j){hn(e,t,{then:function(){},status:"rejected",reason:j},wt())}finally{k.p=i,o!==null&&s.types!==null&&(o.types=s.types),f.T=o}}function xm(){}function go(e,t,a,l){if(e.tag!==5)throw Error(h(476));var n=Tc(e).queue;Ac(e,n,t,O,a===null?xm:function(){return kc(e),a(l)})}function Tc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:O},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kc(e){var t=Tc(e);t.next===null&&(t=e.alternate.memoizedState),hn(e,t.next.queue,{},wt())}function xo(){return We(zn)}function Ec(){return qe().memoizedState}function Bc(){return qe().memoizedState}function vm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=wt();e=ga(a);var l=xa(t,e,a);l!==null&&(ct(l,t,a),sn(l,t,a)),t={cache:Zu()},e.payload=t;return}t=t.return}}function wm(e,t,a){var l=wt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vi(e)?Cc(t,a):(a=Ou(e,t,a,l),a!==null&&(ct(a,e,l),Mc(a,t,l)))}function zc(e,t,a){var l=wt();hn(e,t,a,l)}function hn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vi(e))Cc(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,a);if(n.hasEagerState=!0,n.eagerState=s,yt(s,o))return ei(e,t,n,0),Te===null&&Pn(),!1}catch{}finally{}if(a=Ou(e,t,n,l),a!==null)return ct(a,e,l),Mc(a,t,l),!0}return!1}function vo(e,t,a,l){if(l={lane:2,revertLane:Wo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},vi(e)){if(t)throw Error(h(479))}else t=Ou(e,a,l,2),t!==null&&ct(t,e,2)}function vi(e){var t=e.alternate;return e===te||t!==null&&t===te}function Cc(e,t){Al=hi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Mc(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ds(e,a)}}var mn={readContext:We,use:bi,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};mn.useEffectEvent=De;var _c={readContext:We,use:bi,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:bc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,gi(4194308,4,vc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){gi(4,2,e,t)},useMemo:function(e,t){var a=lt();t=t===void 0?null:t;var l=e();if($a){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=lt();if(a!==void 0){var n=a(t);if($a){ca(!0);try{a(t)}finally{ca(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=wm.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=ho(e);var t=e.queue,a=zc.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:bo,useDeferredValue:function(e,t){var a=lt();return po(a,e,t)},useTransition:function(){var e=ho(!1);return e=Ac.bind(null,te,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=lt();if(fe){if(a===void 0)throw Error(h(407));a=a()}else{if(a=t(),Te===null)throw Error(h(349));(ce&127)!==0||ec(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,bc(ac.bind(null,l,i,e),[e]),l.flags|=2048,kl(9,{destroy:void 0},tc.bind(null,l,i,a,t),null),a},useId:function(){var e=lt(),t=Te.identifierPrefix;if(fe){var a=qt,l=Rt;a=(l&~(1<<32-mt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=mi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=mm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:xo,useFormState:dc,useActionState:dc,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=vo.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:ro,useCacheRefresh:function(){return lt().memoizedState=vm.bind(null,te)},useEffectEvent:function(e){var t=lt(),a={impl:e};return t.memoizedState=a,function(){if((ge&2)!==0)throw Error(h(440));return a.impl.apply(void 0,arguments)}}},wo={readContext:We,use:bi,useCallback:Sc,useContext:We,useEffect:yo,useImperativeHandle:wc,useInsertionEffect:gc,useLayoutEffect:xc,useMemo:Nc,useReducer:pi,useRef:yc,useState:function(){return pi(Pt)},useDebugValue:bo,useDeferredValue:function(e,t){var a=qe();return jc(a,Ne.memoizedState,e,t)},useTransition:function(){var e=pi(Pt)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:Pr,useId:Ec,useHostTransitionStatus:xo,useFormState:fc,useActionState:fc,useOptimistic:function(e,t){var a=qe();return ic(a,Ne,e,t)},useMemoCache:ro,useCacheRefresh:Bc};wo.useEffectEvent=pc;var Uc={readContext:We,use:bi,useCallback:Sc,useContext:We,useEffect:yo,useImperativeHandle:wc,useInsertionEffect:gc,useLayoutEffect:xc,useMemo:Nc,useReducer:fo,useRef:yc,useState:function(){return fo(Pt)},useDebugValue:bo,useDeferredValue:function(e,t){var a=qe();return Ne===null?po(a,e,t):jc(a,Ne.memoizedState,e,t)},useTransition:function(){var e=fo(Pt)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:Pr,useId:Ec,useHostTransitionStatus:xo,useFormState:mc,useActionState:mc,useOptimistic:function(e,t){var a=qe();return Ne!==null?ic(a,Ne,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ro,useCacheRefresh:Bc};Uc.useEffectEvent=pc;function So(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:_({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var No={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=wt(),n=ga(l);n.payload=t,a!=null&&(n.callback=a),t=xa(e,n,l),t!==null&&(ct(t,e,l),sn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=wt(),n=ga(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=xa(e,n,l),t!==null&&(ct(t,e,l),sn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=wt(),l=ga(a);l.tag=2,t!=null&&(l.callback=t),t=xa(e,l,a),t!==null&&(ct(t,e,a),sn(t,e,a))}};function Yc(e,t,a,l,n,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!Pl(a,l)||!Pl(n,i):!0}function Oc(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&No.enqueueReplaceState(t,t.state,null)}function Fa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=_({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Dc(e){Wn(e)}function Hc(e){console.error(e)}function Rc(e){Wn(e)}function wi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function qc(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function jo(e,t,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){wi(e,t)},a}function Vc(e){return e=ga(e),e.tag=3,e}function Lc(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){qc(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){qc(t,a,l),typeof n!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Sm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&xl(t,a,n,!0),a=pt.current,a!==null){switch(a.tag){case 31:case 13:return Ct===null?_i():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===si?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Jo(e,l,n)),!1;case 22:return a.flags|=65536,l===si?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Jo(e,l,n)),!1}throw Error(h(435,a.tag))}return Jo(e,l,n),_i(),!1}if(fe)return t=pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Lu&&(e=Error(h(422),{cause:l}),an(kt(e,a)))):(l!==Lu&&(t=Error(h(423),{cause:l}),an(kt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=kt(l,a),n=jo(e.stateNode,l,n),Pu(e,n),He!==4&&(He=2)),!1;var i=Error(h(520),{cause:l});if(i=kt(i,a),Sn===null?Sn=[i]:Sn.push(i),He!==4&&(He=2),t===null)return!0;l=kt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=jo(a.stateNode,l,e),Pu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Aa===null||!Aa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Vc(n),Lc(n,e,a,l),Pu(a,n),!1}a=a.return}while(a!==null);return!1}var Ao=Error(h(461)),Ie=!1;function Pe(e,t,a,l){t.child=e===null?Qr(t,null,a,l):Ja(t,e.child,a,l)}function Ic(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var o={};for(var s in l)s!=="ref"&&(o[s]=l[s])}else o=l;return Xa(t),l=io(e,t,a,o,i,n),s=uo(),e!==null&&!Ie?(oo(e,t,n),ea(e,t,n)):(fe&&s&&qu(t),t.flags|=1,Pe(e,t,l,n),t.child)}function Gc(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Du(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Xc(e,t,i,l,n)):(e=ai(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!_o(e,n)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:Pl,a(o,l)&&e.ref===t.ref)return ea(e,t,n)}return t.flags|=1,e=Kt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Xc(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Pl(i,l)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=l=i,_o(e,n))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,ea(e,t,n)}return To(e,t,a,l,n)}function Qc(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Zc(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ui(t,i!==null?i.cachePool:null),i!==null?Jr(t,i):to(),$r(t);else return l=t.lanes=536870912,Zc(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ui(t,i.cachePool),Jr(t,i),wa(),t.memoizedState=null):(e!==null&&ui(t,null),to(),wa());return Pe(e,t,n,a),t.child}function yn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Zc(e,t,a,l,n){var i=Ju();return i=i===null?null:{parent:Ve._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ui(t,null),to(),$r(t),e!==null&&xl(e,t,l,!0),t.childLanes=n,null}function Si(e,t){return t=ji({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Kc(e,t,a){return Ja(t,e.child,null,a),e=Si(t,t.pendingProps),e.flags|=2,gt(t),t.memoizedState=null,e}function Nm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(l.mode==="hidden")return e=Si(t,l),t.lanes=536870912,yn(null,e);if(lo(t),(e=ze)?(e=of(e,zt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Rt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=Cr(e),a.return=t,t.child=a,Fe=t,ze=null)):e=null,e===null)throw ya(t);return t.lanes=536870912,null}return Si(t,l)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(lo(t),n)if(t.flags&256)t.flags&=-257,t=Kc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(Ie||xl(e,t,a,!1),n=(a&e.childLanes)!==0,Ie||n){if(l=Te,l!==null&&(o=Hs(l,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,Va(e,o),ct(l,e,o),Ao;_i(),t=Kc(e,t,a)}else e=i.treeContext,ze=Mt(o.nextSibling),Fe=t,fe=!0,ma=null,zt=!1,e!==null&&Ur(t,e),t=Si(t,l),t.flags|=4096;return t}return e=Kt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ni(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(h(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function To(e,t,a,l,n){return Xa(t),a=io(e,t,a,l,void 0,n),l=uo(),e!==null&&!Ie?(oo(e,t,n),ea(e,t,n)):(fe&&l&&qu(t),t.flags|=1,Pe(e,t,a,n),t.child)}function Jc(e,t,a,l,n,i){return Xa(t),t.updateQueue=null,a=Wr(t,l,a,n),Fr(e),l=uo(),e!==null&&!Ie?(oo(e,t,i),ea(e,t,i)):(fe&&l&&qu(t),t.flags|=1,Pe(e,t,a,i),t.child)}function $c(e,t,a,l,n){if(Xa(t),t.stateNode===null){var i=yl,o=a.contextType;typeof o=="object"&&o!==null&&(i=We(o)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=No,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Fu(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?We(o):yl,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(So(t,a,o,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&No.enqueueReplaceState(i,i.state,null),cn(t,l,i,n),rn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,c=Fa(a,s);i.props=c;var p=i.context,S=a.contextType;o=yl,typeof S=="object"&&S!==null&&(o=We(S));var j=a.getDerivedStateFromProps;S=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||p!==o)&&Oc(t,i,l,o),pa=!1;var g=t.memoizedState;i.state=g,cn(t,l,i,n),rn(),p=t.memoizedState,s||g!==p||pa?(typeof j=="function"&&(So(t,a,j,l),p=t.memoizedState),(c=pa||Yc(t,a,c,l,g,p,o))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=p),i.props=l,i.state=p,i.context=o,l=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Wu(e,t),o=t.memoizedProps,S=Fa(a,o),i.props=S,j=t.pendingProps,g=i.context,p=a.contextType,c=yl,typeof p=="object"&&p!==null&&(c=We(p)),s=a.getDerivedStateFromProps,(p=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==j||g!==c)&&Oc(t,i,l,c),pa=!1,g=t.memoizedState,i.state=g,cn(t,l,i,n),rn();var x=t.memoizedState;o!==j||g!==x||pa||e!==null&&e.dependencies!==null&&ni(e.dependencies)?(typeof s=="function"&&(So(t,a,s,l),x=t.memoizedState),(S=pa||Yc(t,a,S,l,g,x,c)||e!==null&&e.dependencies!==null&&ni(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,x,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,x,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=x),i.props=l,i.state=x,i.context=c,l=S):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ni(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ja(t,e.child,null,n),t.child=Ja(t,null,a,n)):Pe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ea(e,t,n),e}function Fc(e,t,a,l){return Ia(),t.flags|=256,Pe(e,t,a,l),t.child}var ko={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eo(e){return{baseLanes:e,cachePool:qr()}}function Bo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=vt),e}function Wc(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(n?va(t):wa(),(e=ze)?(e=of(e,zt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Rt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=Cr(e),a.return=t,t.child=a,Fe=t,ze=null)):e=null,e===null)throw ya(t);return ds(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(wa(),n=t.mode,s=ji({mode:"hidden",children:s},n),l=La(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=Eo(a),l.childLanes=Bo(e,o,a),t.memoizedState=ko,yn(null,l)):(va(t),zo(t,s))}var c=e.memoizedState;if(c!==null&&(s=c.dehydrated,s!==null)){if(i)t.flags&256?(va(t),t.flags&=-257,t=Co(e,t,a)):t.memoizedState!==null?(wa(),t.child=e.child,t.flags|=128,t=null):(wa(),s=l.fallback,n=t.mode,l=ji({mode:"visible",children:l.children},n),s=La(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Ja(t,e.child,null,a),l=t.child,l.memoizedState=Eo(a),l.childLanes=Bo(e,o,a),t.memoizedState=ko,t=yn(null,l));else if(va(t),ds(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var p=o.dgst;o=p,l=Error(h(419)),l.stack="",l.digest=o,an({value:l,source:null,stack:null}),t=Co(e,t,a)}else if(Ie||xl(e,t,a,!1),o=(a&e.childLanes)!==0,Ie||o){if(o=Te,o!==null&&(l=Hs(o,a),l!==0&&l!==c.retryLane))throw c.retryLane=l,Va(e,l),ct(o,e,l),Ao;cs(s)||_i(),t=Co(e,t,a)}else cs(s)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,ze=Mt(s.nextSibling),Fe=t,fe=!0,ma=null,zt=!1,e!==null&&Ur(t,e),t=zo(t,l.children),t.flags|=4096);return t}return n?(wa(),s=l.fallback,n=t.mode,c=e.child,p=c.sibling,l=Kt(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,p!==null?s=Kt(p,s):(s=La(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,yn(null,l),l=t.child,s=e.child.memoizedState,s===null?s=Eo(a):(n=s.cachePool,n!==null?(c=Ve._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=qr(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=Bo(e,o,a),t.memoizedState=ko,yn(e.child,l)):(va(t),a=e.child,e=a.sibling,a=Kt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function zo(e,t){return t=ji({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ji(e,t){return e=bt(22,e,null,t),e.lanes=0,e}function Co(e,t,a){return Ja(t,e.child,null,a),e=zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pc(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Xu(e.return,t,a)}function Mo(e,t,a,l,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=i)}function ed(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var o=Re.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,U(Re,o),Pe(e,t,l,a),l=fe?tn:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pc(e,a,t);else if(e.tag===19)Pc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&fi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Mo(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&fi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Mo(t,!0,a,null,i,l);break;case"together":Mo(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ea(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ja|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(xl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,a=Kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function _o(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ni(e)))}function jm(e,t,a){switch(t.tag){case 3:Je(t,t.stateNode.containerInfo),ba(t,Ve,e.memoizedState.cache),Ia();break;case 27:case 5:Ya(t);break;case 4:Je(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(va(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Wc(e,t,a):(va(t),e=ea(e,t,a),e!==null?e.sibling:null);va(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(xl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return ed(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U(Re,Re.current),l)break;return null;case 22:return t.lanes=0,Qc(e,t,a,t.pendingProps);case 24:ba(t,Ve,e.memoizedState.cache)}return ea(e,t,a)}function td(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!_o(e,a)&&(t.flags&128)===0)return Ie=!1,jm(e,t,a);Ie=(e.flags&131072)!==0}else Ie=!1,fe&&(t.flags&1048576)!==0&&_r(t,tn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Za(t.elementType),t.type=e,typeof e=="function")Du(e)?(l=Fa(e,l),t.tag=1,t=$c(null,t,e,l,a)):(t.tag=0,t=To(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ke){t.tag=11,t=Ic(null,t,e,l,a);break e}else if(n===$){t.tag=14,t=Gc(null,t,e,l,a);break e}}throw t=dt(e)||e,Error(h(306,t,""))}}return t;case 0:return To(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Fa(l,t.pendingProps),$c(e,t,l,n,a);case 3:e:{if(Je(t,t.stateNode.containerInfo),e===null)throw Error(h(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Wu(e,t),cn(t,l,null,a);var o=t.memoizedState;if(l=o.cache,ba(t,Ve,l),l!==i.cache&&Qu(t,[Ve],a,!0),rn(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Fc(e,t,l,a);break e}else if(l!==n){n=kt(Error(h(424)),t),an(n),t=Fc(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ze=Mt(e.firstChild),Fe=t,fe=!0,ma=null,zt=!0,a=Qr(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ia(),l===n){t=ea(e,t,a);break e}Pe(e,t,l,a)}t=t.child}return t;case 26:return Ni(e,t),e===null?(a=hf(t.type,null,t.pendingProps,null))?t.memoizedState=a:fe||(a=t.type,e=t.pendingProps,l=qi(ne.current).createElement(a),l[$e]=t,l[nt]=e,et(l,a,e),Ze(l),t.stateNode=l):t.memoizedState=hf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ya(t),e===null&&fe&&(l=t.stateNode=cf(t.type,t.pendingProps,ne.current),Fe=t,zt=!0,n=ze,Ba(t.type)?(fs=n,ze=Mt(l.firstChild)):ze=n),Pe(e,t,t.pendingProps.children,a),Ni(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((n=l=ze)&&(l=e0(l,t.type,t.pendingProps,zt),l!==null?(t.stateNode=l,Fe=t,ze=Mt(l.firstChild),zt=!1,n=!0):n=!1),n||ya(t)),Ya(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,os(n,i)?l=null:o!==null&&os(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=io(e,t,ym,null,null,a),zn._currentValue=n),Ni(e,t),Pe(e,t,l,a),t.child;case 6:return e===null&&fe&&((e=a=ze)&&(a=t0(a,t.pendingProps,zt),a!==null?(t.stateNode=a,Fe=t,ze=null,e=!0):e=!1),e||ya(t)),null;case 13:return Wc(e,t,a);case 4:return Je(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ja(t,null,l,a):Pe(e,t,l,a),t.child;case 11:return Ic(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ba(t,t.type,l.value),Pe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Xa(t),n=We(n),l=l(n),t.flags|=1,Pe(e,t,l,a),t.child;case 14:return Gc(e,t,t.type,t.pendingProps,a);case 15:return Xc(e,t,t.type,t.pendingProps,a);case 19:return ed(e,t,a);case 31:return Nm(e,t,a);case 22:return Qc(e,t,a,t.pendingProps);case 24:return Xa(t),l=We(Ve),e===null?(n=Ju(),n===null&&(n=Te,i=Zu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Fu(t),ba(t,Ve,n)):((e.lanes&a)!==0&&(Wu(e,t),cn(t,null,null,a),rn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ba(t,Ve,l)):(l=i.cache,ba(t,Ve,l),l!==n.cache&&Qu(t,[Ve],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function ta(e){e.flags|=4}function Uo(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Ed())e.flags|=8192;else throw Ka=si,$u}else e.flags&=-16777217}function ad(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gf(t))if(Ed())e.flags|=8192;else throw Ka=si,$u}function Ai(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ys():536870912,e.lanes|=t,Cl|=t)}function bn(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Am(e,t,a){var l=t.pendingProps;switch(Vu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(Ve),Ee(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(gl(t)?ta(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Iu())),Ce(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ta(t),i!==null?(Ce(t),ad(t,i)):(Ce(t),Uo(t,n,null,l,a))):i?i!==e.memoizedState?(ta(t),Ce(t),ad(t,i)):(Ce(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ta(t),Ce(t),Uo(t,n,e,l,a)),null;case 27:if(D(t),a=ne.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(h(166));return Ce(t),null}e=q.current,gl(t)?Yr(t):(e=cf(n,l,a),t.stateNode=e,ta(t))}return Ce(t),null;case 5:if(D(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(h(166));return Ce(t),null}if(i=q.current,gl(t))Yr(t);else{var o=qi(ne.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}i[$e]=t,i[nt]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(et(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ta(t)}}return Ce(t),Uo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(h(166));if(e=ne.current,gl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Fe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[$e]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Wd(e.nodeValue,a)),e||ya(t,!0)}else e=qi(e).createTextNode(l),e[$e]=t,t.stateNode=e}return Ce(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=gl(t),a!==null){if(e===null){if(!l)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[$e]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),e=!1}else a=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(gt(t),t):(gt(t),null);if((t.flags&128)!==0)throw Error(h(558))}return Ce(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=gl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(h(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[$e]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),n=!1}else n=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(gt(t),t):(gt(t),null)}return gt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ai(t,t.updateQueue),Ce(t),null);case 4:return Ee(),e===null&&as(t.stateNode.containerInfo),Ce(t),null;case 10:return Ft(t.type),Ce(t),null;case 19:if(A(Re),l=t.memoizedState,l===null)return Ce(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)bn(l,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=fi(e),i!==null){for(t.flags|=128,bn(l,!1),e=i.updateQueue,t.updateQueue=e,Ai(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)zr(a,e),a=a.sibling;return U(Re,Re.current&1|2),fe&&Jt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ft()>zi&&(t.flags|=128,n=!0,bn(l,!1),t.lanes=4194304)}else{if(!n)if(e=fi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ai(t,e),bn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!fe)return Ce(t),null}else 2*ft()-l.renderingStartTime>zi&&a!==536870912&&(t.flags|=128,n=!0,bn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ft(),e.sibling=null,a=Re.current,U(Re,n?a&1|2:a&1),fe&&Jt(t,l.treeForkCount),e):(Ce(t),null);case 22:case 23:return gt(t),ao(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),a=t.updateQueue,a!==null&&Ai(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&A(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(Ve),Ce(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Tm(e,t){switch(Vu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Ve),Ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return D(t),null;case 31:if(t.memoizedState!==null){if(gt(t),t.alternate===null)throw Error(h(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(Re),null;case 4:return Ee(),null;case 10:return Ft(t.type),null;case 22:case 23:return gt(t),ao(),e!==null&&A(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Ve),null;case 25:return null;default:return null}}function ld(e,t){switch(Vu(t),t.tag){case 3:Ft(Ve),Ee();break;case 26:case 27:case 5:D(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&gt(t);break;case 13:gt(t);break;case 19:A(Re);break;case 10:Ft(t.type);break;case 22:case 23:gt(t),ao(),e!==null&&A(Qa);break;case 24:Ft(Ve)}}function pn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,o=a.inst;l=i(),o.destroy=l}a=a.next}while(a!==n)}}catch(s){ve(t,t.return,s)}}function Sa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var o=l.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,n=t;var c=a,p=s;try{p()}catch(S){ve(n,c,S)}}}l=l.next}while(l!==i)}}catch(S){ve(t,t.return,S)}}function nd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Kr(t,a)}catch(l){ve(e,e.return,l)}}}function id(e,t,a){a.props=Fa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ve(e,t,l)}}function gn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ve(e,t,n)}}function Vt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ve(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ve(e,t,n)}else a.current=null}function ud(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ve(e,e.return,n)}}function Yo(e,t,a){try{var l=e.stateNode;Km(l,e.type,a,t),l[nt]=t}catch(n){ve(e,e.return,n)}}function od(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function Oo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Qt));else if(l!==4&&(l===27&&Ba(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Do(e,t,a),e=e.sibling;e!==null;)Do(e,t,a),e=e.sibling}function Ti(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ti(e,t,a),e=e.sibling;e!==null;)Ti(e,t,a),e=e.sibling}function sd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);et(t,l,a),t[$e]=e,t[nt]=a}catch(i){ve(e,e.return,i)}}var aa=!1,Ge=!1,Ho=!1,rd=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function km(e,t){if(e=e.containerInfo,is=Zi,e=wr(e),zu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,s=-1,c=-1,p=0,S=0,j=e,g=null;t:for(;;){for(var x;j!==a||n!==0&&j.nodeType!==3||(s=o+n),j!==i||l!==0&&j.nodeType!==3||(c=o+l),j.nodeType===3&&(o+=j.nodeValue.length),(x=j.firstChild)!==null;)g=j,j=x;for(;;){if(j===e)break t;if(g===a&&++p===n&&(s=o),g===i&&++S===l&&(c=o),(x=j.nextSibling)!==null)break;j=g,g=j.parentNode}j=x}a=s===-1||c===-1?null:{start:s,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(us={focusedElem:e,selectionRange:a},Zi=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var H=Fa(a.type,n);e=l.getSnapshotBeforeUpdate(H,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(Q){ve(a,a.return,Q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)rs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function cd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),l&4&&pn(5,a);break;case 1:if(na(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ve(a,a.return,o)}else{var n=Fa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ve(a,a.return,o)}}l&64&&nd(a),l&512&&gn(a,a.return);break;case 3:if(na(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Kr(e,t)}catch(o){ve(a,a.return,o)}}break;case 27:t===null&&l&4&&sd(a);case 26:case 5:na(e,a),t===null&&l&4&&ud(a),l&512&&gn(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),l&4&&hd(e,a);break;case 13:na(e,a),l&4&&md(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Om.bind(null,a),a0(e,a))));break;case 22:if(l=a.memoizedState!==null||aa,!l){t=t!==null&&t.memoizedState!==null||Ge,n=aa;var i=Ge;aa=l,(Ge=t)&&!i?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),aa=n,Ge=i}break;case 30:break;default:na(e,a)}}function dd(e){var t=e.alternate;t!==null&&(e.alternate=null,dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,ut=!1;function la(e,t,a){for(a=a.child;a!==null;)fd(e,t,a),a=a.sibling}function fd(e,t,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Vl,a)}catch{}switch(a.tag){case 26:Ge||Vt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Vt(a,t);var l=Ue,n=ut;Ba(a.type)&&(Ue=a.stateNode,ut=!1),la(e,t,a),kn(a.stateNode),Ue=l,ut=n;break;case 5:Ge||Vt(a,t);case 6:if(l=Ue,n=ut,Ue=null,la(e,t,a),Ue=l,ut=n,Ue!==null)if(ut)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(a.stateNode)}catch(i){ve(a,t,i)}else try{Ue.removeChild(a.stateNode)}catch(i){ve(a,t,i)}break;case 18:Ue!==null&&(ut?(e=Ue,nf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Rl(e)):nf(Ue,a.stateNode));break;case 4:l=Ue,n=ut,Ue=a.stateNode.containerInfo,ut=!0,la(e,t,a),Ue=l,ut=n;break;case 0:case 11:case 14:case 15:Sa(2,a,t),Ge||Sa(4,a,t),la(e,t,a);break;case 1:Ge||(Vt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&id(a,t,l)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:Ge=(l=Ge)||a.memoizedState!==null,la(e,t,a),Ge=l;break;default:la(e,t,a)}}function hd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rl(e)}catch(a){ve(t,t.return,a)}}}function md(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rl(e)}catch(a){ve(t,t.return,a)}}function Em(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rd),t;default:throw Error(h(435,e.tag))}}function ki(e,t){var a=Em(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Dm.bind(null,e,l);l.then(n,n)}})}function ot(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(Ba(s.type)){Ue=s.stateNode,ut=!1;break e}break;case 5:Ue=s.stateNode,ut=!1;break e;case 3:case 4:Ue=s.stateNode.containerInfo,ut=!0;break e}s=s.return}if(Ue===null)throw Error(h(160));fd(i,o,n),Ue=null,ut=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}var Ot=null;function yd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ot(t,e),st(e),l&4&&(Sa(3,e,e.return),pn(3,e),Sa(5,e,e.return));break;case 1:ot(t,e),st(e),l&512&&(Ge||a===null||Vt(a,a.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ot;if(ot(t,e),st(e),l&512&&(Ge||a===null||Vt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Gl]||i[$e]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),et(i,l,a),i[$e]=e,Ze(i),l=i;break e;case"link":var o=bf("link","href",n).get(l+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(i=o[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break t}}i=n.createElement(l),et(i,l,a),n.head.appendChild(i);break;case"meta":if(o=bf("meta","content",n).get(l+(a.content||""))){for(s=0;s<o.length;s++)if(i=o[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break t}}i=n.createElement(l),et(i,l,a),n.head.appendChild(i);break;default:throw Error(h(468,l))}i[$e]=e,Ze(i),l=i}e.stateNode=l}else pf(n,e.type,e.stateNode);else e.stateNode=yf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?pf(n,e.type,e.stateNode):yf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Yo(e,e.memoizedProps,a.memoizedProps)}break;case 27:ot(t,e),st(e),l&512&&(Ge||a===null||Vt(a,a.return)),a!==null&&l&4&&Yo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ot(t,e),st(e),l&512&&(Ge||a===null||Vt(a,a.return)),e.flags&32){n=e.stateNode;try{sl(n,"")}catch(H){ve(e,e.return,H)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Yo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Ho=!0);break;case 6:if(ot(t,e),st(e),l&4){if(e.stateNode===null)throw Error(h(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(H){ve(e,e.return,H)}}break;case 3:if(Ii=null,n=Ot,Ot=Vi(t.containerInfo),ot(t,e),Ot=n,st(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Rl(t.containerInfo)}catch(H){ve(e,e.return,H)}Ho&&(Ho=!1,bd(e));break;case 4:l=Ot,Ot=Vi(e.stateNode.containerInfo),ot(t,e),st(e),Ot=l;break;case 12:ot(t,e),st(e);break;case 31:ot(t,e),st(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ki(e,l)));break;case 13:ot(t,e),st(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bi=ft()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ki(e,l)));break;case 22:n=e.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,p=aa,S=Ge;if(aa=p||n,Ge=S||c,ot(t,e),Ge=S,aa=p,st(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||c||aa||Ge||Wa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(i=c.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=c.stateNode;var j=c.memoizedProps.style,g=j!=null&&j.hasOwnProperty("display")?j.display:null;s.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(H){ve(c,c.return,H)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(H){ve(c,c.return,H)}}}else if(t.tag===18){if(a===null){c=t;try{var x=c.stateNode;n?uf(x,!0):uf(c.stateNode,!1)}catch(H){ve(c,c.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,ki(e,a))));break;case 19:ot(t,e),st(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ki(e,l)));break;case 30:break;case 21:break;default:ot(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(od(l)){a=l;break}l=l.return}if(a==null)throw Error(h(160));switch(a.tag){case 27:var n=a.stateNode,i=Oo(e);Ti(e,i,n);break;case 5:var o=a.stateNode;a.flags&32&&(sl(o,""),a.flags&=-33);var s=Oo(e);Ti(e,s,o);break;case 3:case 4:var c=a.stateNode.containerInfo,p=Oo(e);Do(e,p,c);break;default:throw Error(h(161))}}catch(S){ve(e,e.return,S)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cd(e,t.alternate,t),t=t.sibling}function Wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Sa(4,t,t.return),Wa(t);break;case 1:Vt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&id(t,t.return,a),Wa(t);break;case 27:kn(t.stateNode);case 26:case 5:Vt(t,t.return),Wa(t);break;case 22:t.memoizedState===null&&Wa(t);break;case 30:Wa(t);break;default:Wa(t)}e=e.sibling}}function ia(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:ia(n,i,a),pn(4,i);break;case 1:if(ia(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){ve(l,l.return,p)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Zr(c[n],s)}catch(p){ve(l,l.return,p)}}a&&o&64&&nd(i),gn(i,i.return);break;case 27:sd(i);case 26:case 5:ia(n,i,a),a&&l===null&&o&4&&ud(i),gn(i,i.return);break;case 12:ia(n,i,a);break;case 31:ia(n,i,a),a&&o&4&&hd(n,i);break;case 13:ia(n,i,a),a&&o&4&&md(n,i);break;case 22:i.memoizedState===null&&ia(n,i,a),gn(i,i.return);break;case 30:break;default:ia(n,i,a)}t=t.sibling}}function Ro(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ln(a))}function qo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e))}function Dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pd(e,t,a,l),t=t.sibling}function pd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,l),n&2048&&pn(9,t);break;case 1:Dt(e,t,a,l);break;case 3:Dt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e)));break;case 12:if(n&2048){Dt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,s=i.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){ve(t,t.return,c)}}else Dt(e,t,a,l);break;case 31:Dt(e,t,a,l);break;case 13:Dt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?Dt(e,t,a,l):xn(e,t):i._visibility&2?Dt(e,t,a,l):(i._visibility|=2,El(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ro(o,t);break;case 24:Dt(e,t,a,l),n&2048&&qo(t.alternate,t);break;default:Dt(e,t,a,l)}}function El(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,s=a,c=l,p=o.flags;switch(o.tag){case 0:case 11:case 15:El(i,o,s,c,n),pn(8,o);break;case 23:break;case 22:var S=o.stateNode;o.memoizedState!==null?S._visibility&2?El(i,o,s,c,n):xn(i,o):(S._visibility|=2,El(i,o,s,c,n)),n&&p&2048&&Ro(o.alternate,o);break;case 24:El(i,o,s,c,n),n&&p&2048&&qo(o.alternate,o);break;default:El(i,o,s,c,n)}t=t.sibling}}function xn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:xn(a,l),n&2048&&Ro(l.alternate,l);break;case 24:xn(a,l),n&2048&&qo(l.alternate,l);break;default:xn(a,l)}t=t.sibling}}var vn=8192;function Bl(e,t,a){if(e.subtreeFlags&vn)for(e=e.child;e!==null;)gd(e,t,a),e=e.sibling}function gd(e,t,a){switch(e.tag){case 26:Bl(e,t,a),e.flags&vn&&e.memoizedState!==null&&m0(a,Ot,e.memoizedState,e.memoizedProps);break;case 5:Bl(e,t,a);break;case 3:case 4:var l=Ot;Ot=Vi(e.stateNode.containerInfo),Bl(e,t,a),Ot=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=vn,vn=16777216,Bl(e,t,a),vn=l):Bl(e,t,a));break;default:Bl(e,t,a)}}function xd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,wd(l,e)}xd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vd(e),e=e.sibling}function vd(e){switch(e.tag){case 0:case 11:case 15:wn(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:wn(e);break;case 12:wn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ei(e)):wn(e);break;default:wn(e)}}function Ei(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,wd(l,e)}xd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sa(8,t,t.return),Ei(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ei(t));break;default:Ei(t)}e=e.sibling}}function wd(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:Sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ln(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ke=l;else e:for(a=e;Ke!==null;){l=Ke;var n=l.sibling,i=l.return;if(dd(l),l===a){Ke=null;break e}if(n!==null){n.return=i,Ke=n;break e}Ke=i}}}var Bm={getCacheForType:function(e){var t=We(Ve),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return We(Ve).controller.signal}},zm=typeof WeakMap=="function"?WeakMap:Map,ge=0,Te=null,oe=null,ce=0,xe=0,xt=null,Na=!1,zl=!1,Vo=!1,ua=0,He=0,ja=0,Pa=0,Lo=0,vt=0,Cl=0,Sn=null,rt=null,Io=!1,Bi=0,Sd=0,zi=1/0,Ci=null,Aa=null,Xe=0,Ta=null,Ml=null,oa=0,Go=0,Xo=null,Nd=null,Nn=0,Qo=null;function wt(){return(ge&2)!==0&&ce!==0?ce&-ce:f.T!==null?Wo():Rs()}function jd(){if(vt===0)if((ce&536870912)===0||fe){var e=Rn;Rn<<=1,(Rn&3932160)===0&&(Rn=262144),vt=e}else vt=536870912;return e=pt.current,e!==null&&(e.flags|=32),vt}function ct(e,t,a){(e===Te&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(_l(e,0),ka(e,ce,vt,!1)),Il(e,a),((ge&2)===0||e!==Te)&&(e===Te&&((ge&2)===0&&(Pa|=a),He===4&&ka(e,ce,vt,!1)),Lt(e))}function Ad(e,t,a){if((ge&6)!==0)throw Error(h(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ll(e,t),n=l?_m(e,t):Ko(e,t,!0),i=l;do{if(n===0){zl&&!l&&ka(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Cm(a)){n=Ko(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;n=Sn;var c=s.current.memoizedState.isDehydrated;if(c&&(_l(s,o).flags|=256),o=Ko(s,o,!1),o!==2){if(Vo&&!c){s.errorRecoveryDisabledLanes|=i,Pa|=i,n=4;break e}i=rt,rt=n,i!==null&&(rt===null?rt=i:rt.push.apply(rt,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){_l(e,0),ka(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:ka(l,t,vt,!Na);break e;case 2:rt=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(n=Bi+300-ft(),10<n)){if(ka(l,t,vt,!Na),Vn(l,0,!0)!==0)break e;oa=t,l.timeoutHandle=af(Td.bind(null,l,a,rt,Ci,Io,t,vt,Pa,Cl,Na,i,"Throttled",-0,0),n);break e}Td(l,a,rt,Ci,Io,t,vt,Pa,Cl,Na,i,null,-0,0)}}break}while(!0);Lt(e)}function Td(e,t,a,l,n,i,o,s,c,p,S,j,g,x){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qt},gd(t,i,j);var H=(i&62914560)===i?Bi-ft():(i&4194048)===i?Sd-ft():0;if(H=y0(j,H),H!==null){oa=i,e.cancelPendingCommit=H(Ud.bind(null,e,t,i,a,l,n,o,s,c,S,j,null,g,x)),ka(e,i,o,!p);return}}Ud(e,t,i,a,l,n,o,s,c)}function Cm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!yt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ka(e,t,a,l){t&=~Lo,t&=~Pa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-mt(n),o=1<<i;l[i]=-1,n&=~o}a!==0&&Os(e,a,t)}function Mi(){return(ge&6)===0?(jn(0),!1):!0}function Zo(){if(oe!==null){if(xe===0)var e=oe.return;else e=oe,$t=Ga=null,so(e),Nl=null,un=0,e=oe;for(;e!==null;)ld(e.alternate,e),e=e.return;oe=null}}function _l(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Fm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),oa=0,Zo(),Te=e,oe=a=Kt(e.current,null),ce=t,xe=0,xt=null,Na=!1,zl=Ll(e,t),Vo=!1,Cl=vt=Lo=Pa=ja=He=0,rt=Sn=null,Io=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-mt(l),i=1<<n;t|=e[n],l&=~i}return ua=t,Pn(),a}function kd(e,t){te=null,f.H=mn,t===Sl||t===oi?(t=Ir(),xe=3):t===$u?(t=Ir(),xe=4):xe=t===Ao?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xt=t,oe===null&&(He=1,wi(e,kt(t,e.current)))}function Ed(){var e=pt.current;return e===null?!0:(ce&4194048)===ce?Ct===null:(ce&62914560)===ce||(ce&536870912)!==0?e===Ct:!1}function Bd(){var e=f.H;return f.H=mn,e===null?mn:e}function zd(){var e=f.A;return f.A=Bm,e}function _i(){He=4,Na||(ce&4194048)!==ce&&pt.current!==null||(zl=!0),(ja&134217727)===0&&(Pa&134217727)===0||Te===null||ka(Te,ce,vt,!1)}function Ko(e,t,a){var l=ge;ge|=2;var n=Bd(),i=zd();(Te!==e||ce!==t)&&(Ci=null,_l(e,t)),t=!1;var o=He;e:do try{if(xe!==0&&oe!==null){var s=oe,c=xt;switch(xe){case 8:Zo(),o=6;break e;case 3:case 2:case 9:case 6:pt.current===null&&(t=!0);var p=xe;if(xe=0,xt=null,Ul(e,s,c,p),a&&zl){o=0;break e}break;default:p=xe,xe=0,xt=null,Ul(e,s,c,p)}}Mm(),o=He;break}catch(S){kd(e,S)}while(!0);return t&&e.shellSuspendCounter++,$t=Ga=null,ge=l,f.H=n,f.A=i,oe===null&&(Te=null,ce=0,Pn()),o}function Mm(){for(;oe!==null;)Cd(oe)}function _m(e,t){var a=ge;ge|=2;var l=Bd(),n=zd();Te!==e||ce!==t?(Ci=null,zi=ft()+500,_l(e,t)):zl=Ll(e,t);e:do try{if(xe!==0&&oe!==null){t=oe;var i=xt;t:switch(xe){case 1:xe=0,xt=null,Ul(e,t,i,1);break;case 2:case 9:if(Vr(i)){xe=0,xt=null,Md(t);break}t=function(){xe!==2&&xe!==9||Te!==e||(xe=7),Lt(e)},i.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Vr(i)?(xe=0,xt=null,Md(t)):(xe=0,xt=null,Ul(e,t,i,7));break;case 5:var o=null;switch(oe.tag){case 26:o=oe.memoizedState;case 5:case 27:var s=oe;if(o?gf(o):s.stateNode.complete){xe=0,xt=null;var c=s.sibling;if(c!==null)oe=c;else{var p=s.return;p!==null?(oe=p,Ui(p)):oe=null}break t}}xe=0,xt=null,Ul(e,t,i,5);break;case 6:xe=0,xt=null,Ul(e,t,i,6);break;case 8:Zo(),He=6;break e;default:throw Error(h(462))}}Um();break}catch(S){kd(e,S)}while(!0);return $t=Ga=null,f.H=l,f.A=n,ge=a,oe!==null?0:(Te=null,ce=0,Pn(),He)}function Um(){for(;oe!==null&&!lh();)Cd(oe)}function Cd(e){var t=td(e.alternate,e,ua);e.memoizedProps=e.pendingProps,t===null?Ui(e):oe=t}function Md(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Jc(a,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=Jc(a,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:so(t);default:ld(a,t),t=oe=zr(t,ua),t=td(a,t,ua)}e.memoizedProps=e.pendingProps,t===null?Ui(e):oe=t}function Ul(e,t,a,l){$t=Ga=null,so(t),Nl=null,un=0;var n=t.return;try{if(Sm(e,n,t,a,ce)){He=1,wi(e,kt(a,e.current)),oe=null;return}}catch(i){if(n!==null)throw oe=n,i;He=1,wi(e,kt(a,e.current)),oe=null;return}t.flags&32768?(fe||l===1?e=!0:zl||(ce&536870912)!==0?e=!1:(Na=e=!0,(l===2||l===9||l===3||l===6)&&(l=pt.current,l!==null&&l.tag===13&&(l.flags|=16384))),_d(t,e)):Ui(t)}function Ui(e){var t=e;do{if((t.flags&32768)!==0){_d(t,Na);return}e=t.return;var a=Am(t.alternate,t,ua);if(a!==null){oe=a;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);He===0&&(He=5)}function _d(e,t){do{var a=Tm(e.alternate,e);if(a!==null){a.flags&=32767,oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=a}while(e!==null);He=6,oe=null}function Ud(e,t,a,l,n,i,o,s,c){e.cancelPendingCommit=null;do Yi();while(Xe!==0);if((ge&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(i=t.lanes|t.childLanes,i|=Yu,hh(e,a,i,o,s,c),e===Te&&(oe=Te=null,ce=0),Ml=t,Ta=e,oa=a,Go=i,Xo=n,Nd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hm(Dn,function(){return Rd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=f.T,f.T=null,n=k.p,k.p=2,o=ge,ge|=4;try{km(e,t,a)}finally{ge=o,k.p=n,f.T=l}}Xe=1,Yd(),Od(),Dd()}}function Yd(){if(Xe===1){Xe=0;var e=Ta,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=f.T,f.T=null;var l=k.p;k.p=2;var n=ge;ge|=4;try{yd(t,e);var i=us,o=wr(e.containerInfo),s=i.focusedElem,c=i.selectionRange;if(o!==s&&s&&s.ownerDocument&&vr(s.ownerDocument.documentElement,s)){if(c!==null&&zu(s)){var p=c.start,S=c.end;if(S===void 0&&(S=p),"selectionStart"in s)s.selectionStart=p,s.selectionEnd=Math.min(S,s.value.length);else{var j=s.ownerDocument||document,g=j&&j.defaultView||window;if(g.getSelection){var x=g.getSelection(),H=s.textContent.length,Q=Math.min(c.start,H),Ae=c.end===void 0?Q:Math.min(c.end,H);!x.extend&&Q>Ae&&(o=Ae,Ae=Q,Q=o);var y=xr(s,Q),m=xr(s,Ae);if(y&&m&&(x.rangeCount!==1||x.anchorNode!==y.node||x.anchorOffset!==y.offset||x.focusNode!==m.node||x.focusOffset!==m.offset)){var b=j.createRange();b.setStart(y.node,y.offset),x.removeAllRanges(),Q>Ae?(x.addRange(b),x.extend(m.node,m.offset)):(b.setEnd(m.node,m.offset),x.addRange(b))}}}}for(j=[],x=s;x=x.parentNode;)x.nodeType===1&&j.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<j.length;s++){var N=j[s];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Zi=!!is,us=is=null}finally{ge=n,k.p=l,f.T=a}}e.current=t,Xe=2}}function Od(){if(Xe===2){Xe=0;var e=Ta,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=f.T,f.T=null;var l=k.p;k.p=2;var n=ge;ge|=4;try{cd(e,t.alternate,t)}finally{ge=n,k.p=l,f.T=a}}Xe=3}}function Dd(){if(Xe===4||Xe===3){Xe=0,nh();var e=Ta,t=Ml,a=oa,l=Nd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,Ml=Ta=null,Hd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Aa=null),du(a),t=t.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=f.T,n=k.p,k.p=2,f.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var s=l[o];i(s.value,{componentStack:s.stack})}}finally{f.T=t,k.p=n}}(oa&3)!==0&&Yi(),Lt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Qo?Nn++:(Nn=0,Qo=e):Nn=0,jn(0)}}function Hd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ln(t)))}function Yi(){return Yd(),Od(),Dd(),Rd()}function Rd(){if(Xe!==5)return!1;var e=Ta,t=Go;Go=0;var a=du(oa),l=f.T,n=k.p;try{k.p=32>a?32:a,f.T=null,a=Xo,Xo=null;var i=Ta,o=oa;if(Xe=0,Ml=Ta=null,oa=0,(ge&6)!==0)throw Error(h(331));var s=ge;if(ge|=4,vd(i.current),pd(i,i.current,o,a),ge=s,jn(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Vl,i)}catch{}return!0}finally{k.p=n,f.T=l,Hd(e,t)}}function qd(e,t,a){t=kt(a,t),t=jo(e.stateNode,t,2),e=xa(e,t,2),e!==null&&(Il(e,2),Lt(e))}function ve(e,t,a){if(e.tag===3)qd(e,e,a);else for(;t!==null;){if(t.tag===3){qd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Aa===null||!Aa.has(l))){e=kt(a,e),a=Vc(2),l=xa(t,a,2),l!==null&&(Lc(a,l,t,e),Il(l,2),Lt(l));break}}t=t.return}}function Jo(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new zm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Vo=!0,n.add(a),e=Ym.bind(null,e,t,a),t.then(e,e))}function Ym(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Te===e&&(ce&a)===a&&(He===4||He===3&&(ce&62914560)===ce&&300>ft()-Bi?(ge&2)===0&&_l(e,0):Lo|=a,Cl===ce&&(Cl=0)),Lt(e)}function Vd(e,t){t===0&&(t=Ys()),e=Va(e,t),e!==null&&(Il(e,t),Lt(e))}function Om(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vd(e,a)}function Dm(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(h(314))}l!==null&&l.delete(t),Vd(e,a)}function Hm(e,t){return ou(e,t)}var Oi=null,Yl=null,$o=!1,Di=!1,Fo=!1,Ea=0;function Lt(e){e!==Yl&&e.next===null&&(Yl===null?Oi=Yl=e:Yl=Yl.next=e),Di=!0,$o||($o=!0,qm())}function jn(e,t){if(!Fo&&Di){Fo=!0;do for(var a=!1,l=Oi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var o=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-mt(42|e)+1)-1,i&=n&~(o&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Xd(l,i))}else i=ce,i=Vn(l,l===Te?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ll(l,i)||(a=!0,Xd(l,i));l=l.next}while(a);Fo=!1}}function Rm(){Ld()}function Ld(){Di=$o=!1;var e=0;Ea!==0&&$m()&&(e=Ea);for(var t=ft(),a=null,l=Oi;l!==null;){var n=l.next,i=Id(l,t);i===0?(l.next=null,a===null?Oi=n:a.next=n,n===null&&(Yl=a)):(a=l,(e!==0||(i&3)!==0)&&(Di=!0)),l=n}Xe!==0&&Xe!==5||jn(e),Ea!==0&&(Ea=0)}function Id(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-mt(i),s=1<<o,c=n[o];c===-1?((s&a)===0||(s&l)!==0)&&(n[o]=fh(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}if(t=Te,a=ce,a=Vn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&su(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ll(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&su(l),du(a)){case 2:case 8:a=_s;break;case 32:a=Dn;break;case 268435456:a=Us;break;default:a=Dn}return l=Gd.bind(null,e),a=ou(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&su(l),e.callbackPriority=2,e.callbackNode=null,2}function Gd(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Yi()&&e.callbackNode!==a)return null;var l=ce;return l=Vn(e,e===Te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ad(e,l,t),Id(e,ft()),e.callbackNode!=null&&e.callbackNode===a?Gd.bind(null,e):null)}function Xd(e,t){if(Yi())return null;Ad(e,t,!0)}function qm(){Wm(function(){(ge&6)!==0?ou(Ms,Rm):Ld()})}function Wo(){if(Ea===0){var e=vl;e===0&&(e=Hn,Hn<<=1,(Hn&261888)===0&&(Hn=256)),Ea=e}return Ea}function Qd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xn(""+e)}function Zd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Vm(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Qd((n[nt]||null).action),o=l.submitter;o&&(t=(t=o[nt]||null)?Qd(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var s=new Jn("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ea!==0){var c=o?Zd(n,o):new FormData(n);go(a,{pending:!0,data:c,method:n.method,action:i},null,c)}}else typeof i=="function"&&(s.preventDefault(),c=o?Zd(n,o):new FormData(n),go(a,{pending:!0,data:c,method:n.method,action:i},i,c))},currentTarget:n}]})}}for(var Po=0;Po<Uu.length;Po++){var es=Uu[Po],Lm=es.toLowerCase(),Im=es[0].toUpperCase()+es.slice(1);Yt(Lm,"on"+Im)}Yt(jr,"onAnimationEnd"),Yt(Ar,"onAnimationIteration"),Yt(Tr,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(im,"onTransitionRun"),Yt(um,"onTransitionStart"),Yt(om,"onTransitionCancel"),Yt(kr,"onTransitionEnd"),ul("onMouseEnter",["mouseout","mouseover"]),ul("onMouseLeave",["mouseout","mouseover"]),ul("onPointerEnter",["pointerout","pointerover"]),ul("onPointerLeave",["pointerout","pointerover"]),Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Da("onBeforeInput",["compositionend","keypress","textInput","paste"]),Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(An));function Kd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var s=l[o],c=s.instance,p=s.currentTarget;if(s=s.listener,c!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=p;try{i(n)}catch(S){Wn(S)}n.currentTarget=null,i=c}else for(o=0;o<l.length;o++){if(s=l[o],c=s.instance,p=s.currentTarget,s=s.listener,c!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=p;try{i(n)}catch(S){Wn(S)}n.currentTarget=null,i=c}}}}function se(e,t){var a=t[fu];a===void 0&&(a=t[fu]=new Set);var l=e+"__bubble";a.has(l)||(Jd(t,e,2,!1),a.add(l))}function ts(e,t,a){var l=0;t&&(l|=4),Jd(a,e,l,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function as(e){if(!e[Hi]){e[Hi]=!0,Ls.forEach(function(a){a!=="selectionchange"&&(Gm.has(a)||ts(a,!1,e),ts(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,ts("selectionchange",!1,t))}}function Jd(e,t,a,l){switch(Af(t)){case 2:var n=g0;break;case 8:n=x0;break;default:n=ps}a=n.bind(null,t,a,e),n=void 0,!wu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function ls(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var s=l.stateNode.containerInfo;if(s===n)break;if(o===4)for(o=l.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;s!==null;){if(o=ll(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){l=i=o;continue e}s=s.parentNode}}l=l.return}er(function(){var p=i,S=xu(a),j=[];e:{var g=Er.get(e);if(g!==void 0){var x=Jn,H=e;switch(e){case"keypress":if(Zn(a)===0)break e;case"keydown":case"keyup":x=Dh;break;case"focusin":H="focus",x=Au;break;case"focusout":H="blur",x=Au;break;case"beforeblur":case"afterblur":x=Au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=lr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=qh;break;case jr:case Ar:case Tr:x=Eh;break;case kr:x=Lh;break;case"scroll":case"scrollend":x=Nh;break;case"wheel":x=Gh;break;case"copy":case"cut":case"paste":x=zh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ir;break;case"toggle":case"beforetoggle":x=Qh}var Q=(t&4)!==0,Ae=!Q&&(e==="scroll"||e==="scrollend"),y=Q?g!==null?g+"Capture":null:g;Q=[];for(var m=p,b;m!==null;){var N=m;if(b=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||b===null||y===null||(N=Ql(m,y),N!=null&&Q.push(Tn(m,N,b))),Ae)break;m=m.return}0<Q.length&&(g=new x(g,H,null,a,S),j.push({event:g,listeners:Q}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&a!==gu&&(H=a.relatedTarget||a.fromElement)&&(ll(H)||H[al]))break e;if((x||g)&&(g=S.window===S?S:(g=S.ownerDocument)?g.defaultView||g.parentWindow:window,x?(H=a.relatedTarget||a.toElement,x=p,H=H?ll(H):null,H!==null&&(Ae=B(H),Q=H.tag,H!==Ae||Q!==5&&Q!==27&&Q!==6)&&(H=null)):(x=null,H=p),x!==H)){if(Q=lr,N="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(Q=ir,N="onPointerLeave",y="onPointerEnter",m="pointer"),Ae=x==null?g:Xl(x),b=H==null?g:Xl(H),g=new Q(N,m+"leave",x,a,S),g.target=Ae,g.relatedTarget=b,N=null,ll(S)===p&&(Q=new Q(y,m+"enter",H,a,S),Q.target=b,Q.relatedTarget=Ae,N=Q),Ae=N,x&&H)t:{for(Q=Xm,y=x,m=H,b=0,N=y;N;N=Q(N))b++;N=0;for(var G=m;G;G=Q(G))N++;for(;0<b-N;)y=Q(y),b--;for(;0<N-b;)m=Q(m),N--;for(;b--;){if(y===m||m!==null&&y===m.alternate){Q=y;break t}y=Q(y),m=Q(m)}Q=null}else Q=null;x!==null&&$d(j,g,x,Q,!1),H!==null&&Ae!==null&&$d(j,Ae,H,Q,!0)}}e:{if(g=p?Xl(p):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var ye=hr;else if(dr(g))if(mr)ye=am;else{ye=em;var L=Ph}else x=g.nodeName,!x||x.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?p&&pu(p.elementType)&&(ye=hr):ye=tm;if(ye&&(ye=ye(e,p))){fr(j,ye,a,S);break e}L&&L(e,g,p),e==="focusout"&&p&&g.type==="number"&&p.memoizedProps.value!=null&&bu(g,"number",g.value)}switch(L=p?Xl(p):window,e){case"focusin":(dr(L)||L.contentEditable==="true")&&(fl=L,Cu=p,en=null);break;case"focusout":en=Cu=fl=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Sr(j,a,S);break;case"selectionchange":if(nm)break;case"keydown":case"keyup":Sr(j,a,S)}var ae;if(ku)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else dl?rr(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(ur&&a.locale!=="ko"&&(dl||de!=="onCompositionStart"?de==="onCompositionEnd"&&dl&&(ae=tr()):(fa=S,Su="value"in fa?fa.value:fa.textContent,dl=!0)),L=Ri(p,de),0<L.length&&(de=new nr(de,e,null,a,S),j.push({event:de,listeners:L}),ae?de.data=ae:(ae=cr(a),ae!==null&&(de.data=ae)))),(ae=Kh?Jh(e,a):$h(e,a))&&(de=Ri(p,"onBeforeInput"),0<de.length&&(L=new nr("onBeforeInput","beforeinput",null,a,S),j.push({event:L,listeners:de}),L.data=ae)),Vm(j,e,p,a,S)}Kd(j,t)})}function Tn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ri(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ql(e,a),n!=null&&l.unshift(Tn(e,n,i)),n=Ql(e,t),n!=null&&l.push(Tn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Xm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $d(e,t,a,l,n){for(var i=t._reactName,o=[];a!==null&&a!==l;){var s=a,c=s.alternate,p=s.stateNode;if(s=s.tag,c!==null&&c===l)break;s!==5&&s!==26&&s!==27||p===null||(c=p,n?(p=Ql(a,i),p!=null&&o.unshift(Tn(a,p,c))):n||(p=Ql(a,i),p!=null&&o.push(Tn(a,p,c)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Qm=/\r\n?/g,Zm=/\u0000|\uFFFD/g;function Fd(e){return(typeof e=="string"?e:""+e).replace(Qm,`
`).replace(Zm,"")}function Wd(e,t){return t=Fd(t),Fd(e)===t}function je(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||sl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&sl(e,""+l);break;case"className":In(e,"class",l);break;case"tabIndex":In(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":In(e,a,l);break;case"style":Ws(e,l,i);break;case"data":if(t!=="object"){In(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Xn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&je(e,t,"name",n.name,n,null),je(e,t,"formEncType",n.formEncType,n,null),je(e,t,"formMethod",n.formMethod,n,null),je(e,t,"formTarget",n.formTarget,n,null)):(je(e,t,"encType",n.encType,n,null),je(e,t,"method",n.method,n,null),je(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Xn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Qt);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Xn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":se("beforetoggle",e),se("toggle",e),Ln(e,"popover",l);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ln(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wh.get(a)||a,Ln(e,a,l))}}function ns(e,t,a,l,n,i){switch(a){case"style":Ws(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"children":typeof l=="string"?sl(e,l):(typeof l=="number"||typeof l=="bigint")&&sl(e,""+l);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Is.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[nt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Ln(e,a,l)}}}function et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:je(e,t,i,o,a,null)}}n&&je(e,t,"srcSet",a.srcSet,a,null),l&&je(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var s=i=o=n=null,c=null,p=null;for(l in a)if(a.hasOwnProperty(l)){var S=a[l];if(S!=null)switch(l){case"name":n=S;break;case"type":o=S;break;case"checked":c=S;break;case"defaultChecked":p=S;break;case"value":i=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(h(137,t));break;default:je(e,t,l,S,a,null)}}Ks(e,i,s,c,p,o,n,!1);return;case"select":se("invalid",e),l=o=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":o=s;break;case"multiple":l=s;default:je(e,t,n,s,a,null)}t=i,a=o,e.multiple=!!l,t!=null?ol(e,!!l,t,!1):a!=null&&ol(e,!!l,a,!0);return;case"textarea":se("invalid",e),i=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(h(91));break;default:je(e,t,o,s,a,null)}$s(e,l,n,i);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(l=a[c],l!=null))switch(c){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:je(e,t,c,l,a,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(l=0;l<An.length;l++)se(An[l],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:je(e,t,p,l,a,null)}return;default:if(pu(t)){for(S in a)a.hasOwnProperty(S)&&(l=a[S],l!==void 0&&ns(e,t,S,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&je(e,t,s,l,a,null))}function Km(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,s=null,c=null,p=null,S=null;for(x in a){var j=a[x];if(a.hasOwnProperty(x)&&j!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":c=j;default:l.hasOwnProperty(x)||je(e,t,x,null,l,j)}}for(var g in l){var x=l[g];if(j=a[g],l.hasOwnProperty(g)&&(x!=null||j!=null))switch(g){case"type":i=x;break;case"name":n=x;break;case"checked":p=x;break;case"defaultChecked":S=x;break;case"value":o=x;break;case"defaultValue":s=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(h(137,t));break;default:x!==j&&je(e,t,g,x,l,j)}}yu(e,o,s,c,p,S,i,n);return;case"select":x=o=s=g=null;for(i in a)if(c=a[i],a.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":x=c;default:l.hasOwnProperty(i)||je(e,t,i,null,l,c)}for(n in l)if(i=l[n],c=a[n],l.hasOwnProperty(n)&&(i!=null||c!=null))switch(n){case"value":g=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:i!==c&&je(e,t,n,i,l,c)}t=s,a=o,l=x,g!=null?ol(e,!!a,g,!1):!!l!=!!a&&(t!=null?ol(e,!!a,t,!0):ol(e,!!a,a?[]:"",!1));return;case"textarea":x=g=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:je(e,t,s,null,l,n)}for(o in l)if(n=l[o],i=a[o],l.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":g=n;break;case"defaultValue":x=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==i&&je(e,t,o,n,l,i)}Js(e,g,x);return;case"option":for(var H in a)if(g=a[H],a.hasOwnProperty(H)&&g!=null&&!l.hasOwnProperty(H))switch(H){case"selected":e.selected=!1;break;default:je(e,t,H,null,l,g)}for(c in l)if(g=l[c],x=a[c],l.hasOwnProperty(c)&&g!==x&&(g!=null||x!=null))switch(c){case"selected":e.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:je(e,t,c,g,l,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in a)g=a[Q],a.hasOwnProperty(Q)&&g!=null&&!l.hasOwnProperty(Q)&&je(e,t,Q,null,l,g);for(p in l)if(g=l[p],x=a[p],l.hasOwnProperty(p)&&g!==x&&(g!=null||x!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,t));break;default:je(e,t,p,g,l,x)}return;default:if(pu(t)){for(var Ae in a)g=a[Ae],a.hasOwnProperty(Ae)&&g!==void 0&&!l.hasOwnProperty(Ae)&&ns(e,t,Ae,void 0,l,g);for(S in l)g=l[S],x=a[S],!l.hasOwnProperty(S)||g===x||g===void 0&&x===void 0||ns(e,t,S,g,l,x);return}}for(var y in a)g=a[y],a.hasOwnProperty(y)&&g!=null&&!l.hasOwnProperty(y)&&je(e,t,y,null,l,g);for(j in l)g=l[j],x=a[j],!l.hasOwnProperty(j)||g===x||g==null&&x==null||je(e,t,j,g,l,x)}function Pd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,o=n.initiatorType,s=n.duration;if(i&&s&&Pd(o)){for(o=0,s=n.responseEnd,l+=1;l<a.length;l++){var c=a[l],p=c.startTime;if(p>s)break;var S=c.transferSize,j=c.initiatorType;S&&Pd(j)&&(c=c.responseEnd,o+=S*(c<s?1:(s-p)/(c-p)))}if(--l,t+=8*(i+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var is=null,us=null;function qi(e){return e.nodeType===9?e:e.ownerDocument}function ef(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ss=null;function $m(){var e=window.event;return e&&e.type==="popstate"?e===ss?!1:(ss=e,!0):(ss=null,!1)}var af=typeof setTimeout=="function"?setTimeout:void 0,Fm=typeof clearTimeout=="function"?clearTimeout:void 0,lf=typeof Promise=="function"?Promise:void 0,Wm=typeof queueMicrotask=="function"?queueMicrotask:typeof lf<"u"?function(e){return lf.resolve(null).then(e).catch(Pm)}:af;function Pm(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function nf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Rl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")kn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,kn(a);for(var i=a.firstChild;i;){var o=i.nextSibling,s=i.nodeName;i[Gl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&kn(e.ownerDocument.body);a=n}while(a);Rl(t)}function uf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function rs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rs(a),hu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function e0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Gl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function t0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mt(e.nextSibling),e===null))return null;return e}function of(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function cs(e){return e.data==="$?"||e.data==="$~"}function ds(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function a0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var fs=null;function sf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Mt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function rf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function cf(e,t,a){switch(t=qi(a),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function kn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hu(e)}var _t=new Map,df=new Set;function Vi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=k.d;k.d={f:l0,r:n0,D:i0,C:u0,L:o0,m:s0,X:c0,S:r0,M:d0};function l0(){var e=sa.f(),t=Mi();return e||t}function n0(e){var t=nl(e);t!==null&&t.tag===5&&t.type==="form"?kc(t):sa.r(e)}var Ol=typeof document>"u"?null:document;function ff(e,t,a){var l=Ol;if(l&&typeof t=="string"&&t){var n=At(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),df.has(n)||(df.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),et(t,"link",e),Ze(t),l.head.appendChild(t)))}}function i0(e){sa.D(e),ff("dns-prefetch",e,null)}function u0(e,t){sa.C(e,t),ff("preconnect",e,t)}function o0(e,t,a){sa.L(e,t,a);var l=Ol;if(l&&e&&t){var n='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+At(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+At(a.imageSizes)+'"]')):n+='[href="'+At(e)+'"]';var i=n;switch(t){case"style":i=Dl(e);break;case"script":i=Hl(e)}_t.has(i)||(e=_({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),_t.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(En(i))||t==="script"&&l.querySelector(Bn(i))||(t=l.createElement("link"),et(t,"link",e),Ze(t),l.head.appendChild(t)))}}function s0(e,t){sa.m(e,t);var a=Ol;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+At(l)+'"][href="'+At(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Hl(e)}if(!_t.has(i)&&(e=_({rel:"modulepreload",href:e},t),_t.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bn(i)))return}l=a.createElement("link"),et(l,"link",e),Ze(l),a.head.appendChild(l)}}}function r0(e,t,a){sa.S(e,t,a);var l=Ol;if(l&&e){var n=il(l).hoistableStyles,i=Dl(e);t=t||"default";var o=n.get(i);if(!o){var s={loading:0,preload:null};if(o=l.querySelector(En(i)))s.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},a),(a=_t.get(i))&&hs(e,a);var c=o=l.createElement("link");Ze(c),et(c,"link",e),c._p=new Promise(function(p,S){c.onload=p,c.onerror=S}),c.addEventListener("load",function(){s.loading|=1}),c.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Li(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:s},n.set(i,o)}}}function c0(e,t){sa.X(e,t);var a=Ol;if(a&&e){var l=il(a).hoistableScripts,n=Hl(e),i=l.get(n);i||(i=a.querySelector(Bn(n)),i||(e=_({src:e,async:!0},t),(t=_t.get(n))&&ms(e,t),i=a.createElement("script"),Ze(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function d0(e,t){sa.M(e,t);var a=Ol;if(a&&e){var l=il(a).hoistableScripts,n=Hl(e),i=l.get(n);i||(i=a.querySelector(Bn(n)),i||(e=_({src:e,async:!0,type:"module"},t),(t=_t.get(n))&&ms(e,t),i=a.createElement("script"),Ze(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function hf(e,t,a,l){var n=(n=ne.current)?Vi(n):null;if(!n)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Dl(a.href),a=il(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Dl(a.href);var i=il(n).hoistableStyles,o=i.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=n.querySelector(En(e)))&&!i._p&&(o.instance=i,o.state.loading=5),_t.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_t.set(e,a),i||f0(n,e,a,o.state))),t&&l===null)throw Error(h(528,""));return o}if(t&&l!==null)throw Error(h(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hl(a),a=il(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Dl(e){return'href="'+At(e)+'"'}function En(e){return'link[rel="stylesheet"]['+e+"]"}function mf(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function f0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),et(t,"link",a),Ze(t),e.head.appendChild(t))}function Hl(e){return'[src="'+At(e)+'"]'}function Bn(e){return"script[async]"+e}function yf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+At(a.href)+'"]');if(l)return t.instance=l,Ze(l),l;var n=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ze(l),et(l,"style",n),Li(l,a.precedence,e),t.instance=l;case"stylesheet":n=Dl(a.href);var i=e.querySelector(En(n));if(i)return t.state.loading|=4,t.instance=i,Ze(i),i;l=mf(a),(n=_t.get(n))&&hs(l,n),i=(e.ownerDocument||e).createElement("link"),Ze(i);var o=i;return o._p=new Promise(function(s,c){o.onload=s,o.onerror=c}),et(i,"link",l),t.state.loading|=4,Li(i,a.precedence,e),t.instance=i;case"script":return i=Hl(a.src),(n=e.querySelector(Bn(i)))?(t.instance=n,Ze(n),n):(l=a,(n=_t.get(i))&&(l=_({},a),ms(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ze(n),et(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Li(l,a.precedence,e));return t.instance}function Li(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,o=0;o<l.length;o++){var s=l[o];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function hs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ms(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ii=null;function bf(e,t,a){if(Ii===null){var l=new Map,n=Ii=new Map;n.set(a,l)}else n=Ii,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Gl]||i[$e]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var s=l.get(o);s?s.push(i):l.set(o,[i])}}return l}function pf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function h0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function m0(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Dl(l.href),i=t.querySelector(En(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ze(i);return}i=t.ownerDocument||t,l=mf(l),(n=_t.get(n))&&hs(l,n),i=i.createElement("link"),Ze(i);var o=i;o._p=new Promise(function(s,c){o.onload=s,o.onerror=c}),et(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Gi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var ys=0;function y0(e,t){return e.stylesheets&&e.count===0&&Qi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Qi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&ys===0&&(ys=62500*Jm());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>ys?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Gi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xi=null;function Qi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xi=new Map,t.forEach(b0,e),Xi=null,Gi.call(e))}function b0(e,t){if(!(t.state.loading&4)){var a=Xi.get(e);if(a)var l=a.get(null);else{a=new Map,Xi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),i=a.get(o)||l,i===l&&a.set(null,n),a.set(o,n),this.count++,l=Gi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var zn={$$typeof:Be,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function p0(e,t,a,l,n,i,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ru(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.hiddenUpdates=ru(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function xf(e,t,a,l,n,i,o,s,c,p,S,j){return e=new p0(e,t,a,o,c,p,S,j,s),t=1,i===!0&&(t|=24),i=bt(3,null,null,t),e.current=i,i.stateNode=e,t=Zu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Fu(i),e}function vf(e){return e?(e=yl,e):yl}function wf(e,t,a,l,n,i){n=vf(n),l.context===null?l.context=n:l.pendingContext=n,l=ga(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=xa(e,l,t),a!==null&&(ct(a,e,t),sn(a,e,t))}function Sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function bs(e,t){Sf(e,t),(e=e.alternate)&&Sf(e,t)}function Nf(e){if(e.tag===13||e.tag===31){var t=Va(e,67108864);t!==null&&ct(t,e,67108864),bs(e,67108864)}}function jf(e){if(e.tag===13||e.tag===31){var t=wt();t=cu(t);var a=Va(e,t);a!==null&&ct(a,e,t),bs(e,t)}}var Zi=!0;function g0(e,t,a,l){var n=f.T;f.T=null;var i=k.p;try{k.p=2,ps(e,t,a,l)}finally{k.p=i,f.T=n}}function x0(e,t,a,l){var n=f.T;f.T=null;var i=k.p;try{k.p=8,ps(e,t,a,l)}finally{k.p=i,f.T=n}}function ps(e,t,a,l){if(Zi){var n=gs(l);if(n===null)ls(e,t,l,Ki,a),Tf(e,l);else if(w0(n,e,t,a,l))l.stopPropagation();else if(Tf(e,l),t&4&&-1<v0.indexOf(e)){for(;n!==null;){var i=nl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Oa(i.pendingLanes);if(o!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-mt(o);s.entanglements[1]|=c,o&=~c}Lt(i),(ge&6)===0&&(zi=ft()+500,jn(0))}}break;case 31:case 13:s=Va(i,2),s!==null&&ct(s,i,2),Mi(),bs(i,2)}if(i=gs(l),i===null&&ls(e,t,l,Ki,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else ls(e,t,l,null,a)}}function gs(e){return e=xu(e),xs(e)}var Ki=null;function xs(e){if(Ki=null,e=ll(e),e!==null){var t=B(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=C(t),e!==null)return e;e=null}else if(a===31){if(e=M(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ki=e,null}function Af(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ih()){case Ms:return 2;case _s:return 8;case Dn:case uh:return 32;case Us:return 268435456;default:return 32}default:return 32}}var vs=!1,za=null,Ca=null,Ma=null,Cn=new Map,Mn=new Map,_a=[],v0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tf(e,t){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":Cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function _n(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=nl(t),t!==null&&Nf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function w0(e,t,a,l,n){switch(t){case"focusin":return za=_n(za,e,t,a,l,n),!0;case"dragenter":return Ca=_n(Ca,e,t,a,l,n),!0;case"mouseover":return Ma=_n(Ma,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Cn.set(i,_n(Cn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Mn.set(i,_n(Mn.get(i)||null,e,t,a,l,n)),!0}return!1}function kf(e){var t=ll(e.target);if(t!==null){var a=B(t);if(a!==null){if(t=a.tag,t===13){if(t=C(a),t!==null){e.blockedOn=t,qs(e.priority,function(){jf(a)});return}}else if(t===31){if(t=M(a),t!==null){e.blockedOn=t,qs(e.priority,function(){jf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=gs(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);gu=l,a.target.dispatchEvent(l),gu=null}else return t=nl(a),t!==null&&Nf(t),e.blockedOn=a,!1;t.shift()}return!0}function Ef(e,t,a){Ji(e)&&a.delete(t)}function S0(){vs=!1,za!==null&&Ji(za)&&(za=null),Ca!==null&&Ji(Ca)&&(Ca=null),Ma!==null&&Ji(Ma)&&(Ma=null),Cn.forEach(Ef),Mn.forEach(Ef)}function $i(e,t){e.blockedOn===t&&(e.blockedOn=null,vs||(vs=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,S0)))}var Fi=null;function Bf(e){Fi!==e&&(Fi=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Fi===e&&(Fi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(xs(l||a)===null)continue;break}var i=nl(a);i!==null&&(e.splice(t,3),t-=3,go(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Rl(e){function t(c){return $i(c,e)}za!==null&&$i(za,e),Ca!==null&&$i(Ca,e),Ma!==null&&$i(Ma,e),Cn.forEach(t),Mn.forEach(t);for(var a=0;a<_a.length;a++){var l=_a[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<_a.length&&(a=_a[0],a.blockedOn===null);)kf(a),a.blockedOn===null&&_a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],o=n[nt]||null;if(typeof i=="function")o||Bf(a);else if(o){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[nt]||null)s=o.formAction;else if(xs(n)!==null)continue}else s=o.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Bf(a)}}}function zf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ws(e){this._internalRoot=e}Wi.prototype.render=ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var a=t.current,l=wt();wf(a,l,e,t,null,null)},Wi.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wf(e.current,2,null,e,null,null),Mi(),t[al]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<_a.length&&t!==0&&t<_a[a].priority;a++);_a.splice(a,0,e),a===0&&kf(e)}};var Cf=E.version;if(Cf!=="19.2.8")throw Error(h(527,Cf,"19.2.8"));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=w(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var N0={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:f,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Vl=Pi.inject(N0),ht=Pi}catch{}}return Yn.createRoot=function(e,t){if(!v(e))throw Error(h(299));var a=!1,l="",n=Dc,i=Hc,o=Rc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=xf(e,1,!1,null,null,a,l,null,n,i,o,zf),e[al]=t.current,as(e),new ws(t)},Yn.hydrateRoot=function(e,t,a){if(!v(e))throw Error(h(299));var l=!1,n="",i=Dc,o=Hc,s=Rc,c=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),t=xf(e,1,!0,t,a??null,l,n,c,i,o,s,zf),t.context=vf(null),a=t.current,l=wt(),l=cu(l),n=ga(l),n.callback=null,xa(a,n,l),a=l,t.current.lanes=a,Il(t,a),Lt(t),e[al]=t.current,as(e),new Wi(t)},Yn.version="19.2.8",Yn}var Vf;function _0(){if(Vf)return js.exports;Vf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(E){console.error(E)}}return r(),js.exports=M0(),js.exports}var U0=_0();const Ut=[{id:"MPLgPPy9Sjs",title:"Poison Shot By Shot",artist:"Dom-I-NATE",duration:"6:28",durationSeconds:388,index:1,thumbnail:"https://i.ytimg.com/vi/MPLgPPy9Sjs/hqdefault.jpg",youtubeUrl:"https://youtu.be/MPLgPPy9Sjs?si=C7TK4fLAwcrYkgnN",category:"rock",tags:["Rock","Epic","Anthem"],description:"The featured single. A haunting build-up tracing toxic cycles, betrayal, and relentless raw guitars.",featuredLyrics:"You came in sweet / All soft at the seams / Said you saw my wreck / And you knew how to redeem..."},{id:"fBBwdLTJMVE",title:"Super Pessimistic (Guitar Riffs Remix)",artist:"DomInNATEly",duration:"4:01",durationSeconds:241,index:2,thumbnail:"https://i.ytimg.com/vi/fBBwdLTJMVE/hqdefault.jpg",youtubeUrl:"https://youtu.be/fBBwdLTJMVE",category:"remix",tags:["Remix","Alt Rock","Heavy Riffs"],description:"High-energy reworked version loaded with heavy electric overdrive and driving rhythmic hooks.",featuredLyrics:"Heavy riffs collide with sharp emotional dissonance in this amplified anthem."},{id:"vohyDAV8PpI",title:"You Played the Wounded Bird",artist:"DomInNATEly",duration:"3:33",durationSeconds:213,index:3,thumbnail:"https://i.ytimg.com/vi/vohyDAV8PpI/hqdefault.jpg",youtubeUrl:"https://youtu.be/vohyDAV8PpI",category:"rock",tags:["Hard Rock","Dark","Story"],description:"Intense alt-rock confession exploring emotional manipulation and playing the martyr in a relationship.",featuredLyrics:"I played the victim in a horrible place / I knew you'd come running to be my shield..."},{id:"ynfsntAvAYU",title:"Pessimistic Bias",artist:"DOM-I-Nate",duration:"3:59",durationSeconds:239,index:4,thumbnail:"https://i.ytimg.com/vi/ynfsntAvAYU/hqdefault.jpg",youtubeUrl:"https://youtu.be/ynfsntAvAYU",category:"alt",tags:["Psychological","Grunge","Raw"],description:"Grungy introspective track examining self-fulfilling negative thoughts and distorted expectations.",featuredLyrics:"Caught in a mirror of anticipation where every bad omen turns to gold."},{id:"Dgvk00dBQ1Y",title:"Bittersweet Echos",artist:"Dom-I-Nate",duration:"3:17",durationSeconds:197,index:5,thumbnail:"https://i.ytimg.com/vi/Dgvk00dBQ1Y/hqdefault.jpg",youtubeUrl:"https://youtu.be/Dgvk00dBQ1Y",category:"rock",tags:["Melodic Rock","Echo","Vocal"],description:"Atmospheric guitars weaving nostalgic echoes of past relationships that refuse to fade.",featuredLyrics:"Reverberating notes of what could have been linger in the quiet aftermath."},{id:"BcCaAPSLgVg",title:"You'd Rather",artist:"DomInNATEly",duration:"3:53",durationSeconds:233,index:6,thumbnail:"https://i.ytimg.com/vi/BcCaAPSLgVg/hqdefault.jpg",youtubeUrl:"https://youtu.be/BcCaAPSLgVg",category:"alt",tags:["Alt Rock","Direct","Heavy"],description:"Punchy vocal deliveries confronting choices, avoidance, and unspoken boundaries.",featuredLyrics:"When the line is drawn, would you rather hide or face the fire head on?"},{id:"HV2GfTi2-mI",title:"We MUSK go to MARS!",artist:"DomInNATEly",duration:"4:47",durationSeconds:287,index:7,thumbnail:"https://i.ytimg.com/vi/HV2GfTi2-mI/hqdefault.jpg",youtubeUrl:"https://youtu.be/HV2GfTi2-mI",category:"anthem",tags:["Sci-Fi Rock","One-Man Band","Concept"],description:"A satirical sci-fi rock odyssey about interstellar colonization, billionaires, and leaving Earth behind.",featuredLyrics:"Countdowns, booster engines, and eccentric dreams of red dust horizons."},{id:"C4FRocguOgA",title:"Sweet at First (Live)",artist:"DomInNATEly",duration:"4:40",durationSeconds:280,index:8,thumbnail:"https://i.ytimg.com/vi/C4FRocguOgA/hqdefault.jpg",youtubeUrl:"https://youtu.be/C4FRocguOgA",category:"acoustic",tags:["Live","Raw Emotion","Stage"],description:"Captured live with blistering dynamics—starts tender and unravels into passionate rock fervor.",featuredLyrics:"It starts with sugar and velvet smiles before the sharp edge catches light."},{id:"Tnz8crSx-cM",title:"I Won't Give In",artist:"DomInNATEly",duration:"2:12",durationSeconds:132,index:9,thumbnail:"https://i.ytimg.com/vi/Tnz8crSx-cM/hqdefault.jpg",youtubeUrl:"https://youtu.be/Tnz8crSx-cM",category:"rock",tags:["Punk Rock","Defiant","Fast"],description:"Short, fierce punk-rock defiance with driving tempo and relentless grit.",featuredLyrics:"Stand firm against the pressure. No surrender, no compromise."},{id:"57aqyr_8pio",title:"Chasing Things",artist:"DomInNATEly",duration:"2:12",durationSeconds:132,index:10,thumbnail:"https://i.ytimg.com/vi/57aqyr_8pio/hqdefault.jpg",youtubeUrl:"https://youtu.be/57aqyr_8pio",category:"alt",tags:["Fast Pace","Indie Rock","Groove"],description:"Upbeat rhythmic groove about running after fleeting illusions and hollow pursuits.",featuredLyrics:"Running circles in the dust chasing shadows that evaporate by dawn."},{id:"BwIhLd5Zo9U",title:"I'm A Dom, Your My Sub!",artist:"DomInNATEly",duration:"2:12",durationSeconds:132,index:11,thumbnail:"https://i.ytimg.com/vi/BwIhLd5Zo9U/hqdefault.jpg",youtubeUrl:"https://youtu.be/BwIhLd5Zo9U",category:"rock",tags:["Bold","Wordplay","Attitude"],description:"Playful yet aggressive wordplay track embodying the DomInNATEly rock persona and swagger.",featuredLyrics:"Commanding rhythm and brazen guitar lines flipping the script."},{id:"t8zv9_NNdps",title:"You Jinxed Us",artist:"Dom-I-NATE",duration:"2:51",durationSeconds:171,index:12,thumbnail:"https://i.ytimg.com/vi/t8zv9_NNdps/hqdefault.jpg",youtubeUrl:"https://youtu.be/t8zv9_NNdps",category:"duet",tags:["Duet Style","Heartbreak","Superstition"],description:"Soulful alt-rock ballad on fragile romance, superstitions, and premature declarations.",featuredLyrics:"You said forever too loud and shattered the spell before we even started."},{id:"9lmCALdX0f8",title:"Crazy Can be So much Fun",artist:"Dom-I-NATE",duration:"2:44",durationSeconds:164,index:13,thumbnail:"https://i.ytimg.com/vi/9lmCALdX0f8/hqdefault.jpg",youtubeUrl:"https://youtu.be/9lmCALdX0f8",category:"rock",tags:["Wild","Garage Rock","Fun"],description:"A chaotic, cheerful garage rock romp celebrating the unpredictable and eccentric sides of life.",featuredLyrics:"Toss out the rulebook and turn the distortion up to eleven."},{id:"DgxXDwDDdpw",title:"I'm making music? Ironic AF!",artist:"DomInNATEly",duration:"3:31",durationSeconds:211,index:14,thumbnail:"https://i.ytimg.com/vi/DgxXDwDDdpw/hqdefault.jpg",youtubeUrl:"https://youtu.be/DgxXDwDDdpw",category:"alt",tags:["Meta","Self-Aware","Experimental"],description:"An honest, self-aware personal monologue song reflecting on unexpected creative awakenings.",featuredLyrics:"Never planned to write chords or hold the mic, but here the song stands."},{id:"sx_f6KVmWmQ",title:"Her Leather Facade",artist:'Nate "Dom-I-Nater"',duration:"3:17",durationSeconds:197,index:15,thumbnail:"https://i.ytimg.com/vi/sx_f6KVmWmQ/hqdefault.jpg",youtubeUrl:"https://youtu.be/sx_f6KVmWmQ",category:"rock",tags:["Hard Rock","Tough Exterior","Vulnerable"],description:"Heavy riff-laden tribute to guarded hearts, tough leather jackets, and hidden vulnerabilities.",featuredLyrics:"Behind the studs and zipper collar lies a fortress waiting to crumble."},{id:"zfFmOk1IfGA",title:"“Please forget me” (Cover)",artist:"Dom-I-NATE",duration:"8:25",durationSeconds:505,index:16,thumbnail:"https://i.ytimg.com/vi/zfFmOk1IfGA/hqdefault.jpg",youtubeUrl:"https://youtu.be/zfFmOk1IfGA",category:"acoustic",tags:["Epic Length","Cover","Soulful"],description:"An extended 8-minute emotional opus and reinterpretation with shifting acoustic & electric movements.",featuredLyrics:"An expansive eight-minute voyage through remorse, memory, and final farewells."},{id:"nZRBsja135c",title:"Hard Drives to Motherboards",artist:"Nate (Dom-I-NATEr)",duration:"1:25",durationSeconds:85,index:17,thumbnail:"https://i.ytimg.com/vi/nZRBsja135c/hqdefault.jpg",youtubeUrl:"https://youtu.be/nZRBsja135c",category:"alt",tags:["Cyber Punk","Short & Sharp","Outro"],description:"Punchy electro-rock synthesis bridging digital circuit boards and raw organic guitar licks.",featuredLyrics:"Binary signals pulsing through speaker wire at lightning velocity."},{id:"fBBwdLTJMVE",title:"I Want You Back, But I Hate that I Do",artist:"DomInNATEly",duration:"3:19",durationSeconds:199,index:18,thumbnail:"https://i.ytimg.com/vi/fBBwdLTJMVE/hqdefault.jpg",youtubeUrl:"https://www.youtube.com/@DomInNATEly",category:"rock",tags:["Alt Rock","Breakup Anthem","Raw Guitars","Single"],description:"A fiery, conflicted rock single confronting the paradox of missing an abusive ex while hating the manipulation and emotional toll.",featuredLyrics:"I want you back (but I hate that I do) / Every road I take loops back to you / You wore kindness like a loaded trick / And you loved it best when I came back..."}],Qf="https://www.youtube.com/@DomInNATEly/playlists",Y0="https://www.youtube.com/@DomInNATEly",ra={name:"DomInNATEly Top Hits",description:"Official YouTube audio and video catalogue by DomInNATEly / Dom-I-NATE featuring heavy guitar riffs, melodic ballads, and conceptual alt-rock.",channel:"DomInNATEly",channelUrl:"https://www.youtube.com/@DomInNATEly",playlistUrl:"https://www.youtube.com/@DomInNATEly/playlists",totalDurationFormatted:"1 hr 7 min",cover:"https://i.ytimg.com/vi/MPLgPPy9Sjs/hqdefault.jpg"},tt={id:"26af3597-73d4-491c-a9b3-aac9a0d55c82",name:"DomInNATEly Top Hits",description:"Official Suno AI curated collection of 20 high-energy rock anthems, trap crossovers, introspective ballads, and spoken-word odysseys. TikTok: @dom_i_nater",cover:"https://cdn2.suno.ai/image_large_ba1c3c00-6547-4e96-afe1-1566dca7b876.jpeg",user_display_name:"Nate M. AKA  (@DomInNATEly)",user_handle:"dominnately",tiktok_handle:"@dom_i_nater",url:"https://suno.com/playlist/26af3597-73d4-491c-a9b3-aac9a0d55c82",totalTracks:20,totalDurationSeconds:5182},It=[{id:"0028ed1b-8e30-4fb7-bda5-13e933cec42f",title:"Poison Shot By Shot",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:1,image:"https://cdn2.suno.ai/24ba0796-195f-4346-9646-95a2a1069e17.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/0028ed1b-8e30-4fb7-bda5-13e933cec42f.m4a",videoUrl:"https://cdn1.suno.ai/0028ed1b-8e30-4fb7-bda5-13e933cec42f.mp4",embedUrl:"https://suno.com/embed/0028ed1b-8e30-4fb7-bda5-13e933cec42f",sunoUrl:"https://suno.com/song/0028ed1b-8e30-4fb7-bda5-13e933cec42f",duration:387.9,durationFormatted:"6:27",tags:["alt rock","rock duet","male female vocals","acoustic to heavy guitar","confessional emo rock"],lyrics:`**[Male Vocals – Verse 1]**
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
I wasn't your soulmate, I was acting like a leech`},{id:"427fba31-e531-49ff-8540-19e1cf95905b",title:"Super Pessimistic! (Experimental remix)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:2,image:"https://cdn2.suno.ai/22bd11ac-ecae-47a8-b4f9-c4307f31be80.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/427fba31-e531-49ff-8540-19e1cf95905b.m4a",videoUrl:"https://cdn1.suno.ai/427fba31-e531-49ff-8540-19e1cf95905b.mp4",embedUrl:"https://suno.com/embed/427fba31-e531-49ff-8540-19e1cf95905b",sunoUrl:"https://suno.com/song/427fba31-e531-49ff-8540-19e1cf95905b",duration:240.1,durationFormatted:"4:00",tags:["alt pop","pop punk","breakup anthem","male female","distorted electric guitars"],lyrics:`[singer A]
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
You're super pessimistic`},{id:"886cc3fb-5e0a-4f12-b891-355bbe84f196",title:"HURT ME, That's what you wanted!",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:3,image:"https://cdn2.suno.ai/7c9ff818-2cf9-445d-abd8-8aa8ffb89c78.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/886cc3fb-5e0a-4f12-b891-355bbe84f196.m4a",videoUrl:"https://cdn1.suno.ai/886cc3fb-5e0a-4f12-b891-355bbe84f196.mp4",embedUrl:"https://suno.com/embed/886cc3fb-5e0a-4f12-b891-355bbe84f196",sunoUrl:"https://suno.com/song/886cc3fb-5e0a-4f12-b891-355bbe84f196",duration:229,durationFormatted:"3:49",tags:["dark alt-pop","industrial hip-hop","funk rock","theatrical spoken word","dual-register vocals"],lyrics:`[Verse]
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
That's what you wanted"`},{id:"48cb63f3-ed17-4696-be79-ac38af54597e",title:"The Zeigarnik Effect",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:4,image:"https://cdn2.suno.ai/cc85121c-6b9d-4ce2-ae91-b30cf3aac289.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/48cb63f3-ed17-4696-be79-ac38af54597e.m4a",videoUrl:"https://cdn1.suno.ai/48cb63f3-ed17-4696-be79-ac38af54597e.mp4",embedUrl:"https://suno.com/embed/48cb63f3-ed17-4696-be79-ac38af54597e",sunoUrl:"https://suno.com/song/48cb63f3-ed17-4696-be79-ac38af54597e",duration:120,durationFormatted:"2:00",tags:["trap","dubstep","halftime beat","140 BPM","wobble sub-bass"],lyrics:`(Male Voice) I ran the numbers, tracked the patterns of the sinkholes you create. Engineering every talk so we could bypass all this weight. I was your biological home, the regulator for your storm. But you treated my loyalty like a chain instead of somewhere warm.
(Female Voice) I’m "pissy when I miss it," and the withdrawal is all I really know. I told them not to talk to you—I couldn't let my money go. Your 8K love was engulfment, a fire trying to swallow me whole. So I flipped the "nuclear option" just to keep my own control.
(Chorus - Duet) It’s the Zeigarnik effect, a page ripped out before the end. An open loop in the machine that I can no longer defend. High-voltage current trying to power a low-voltage light. We’re just two different operating systems crashing in the night.
(Male Voice) I’m dimming my empathy now, letting the Supernova rise. I see your pessimistic bias and the "hero" in your lies. I’m adopting the CBR model—Cold, Rational, and Bottom-line. Because loving your potential was never going to fix your design.
(Female Voice) I’ll villainize your kindness, say you tried to lock me in a cell. Believing you’re the monster makes it easier to say farewell. I’ve entered the relief stage, breathing air that’s thin and gray. While I’m reaching for your phantom limb every single day.
(Outro - Duet) I’m taking back my oxygen; I’m closing the loop on my own. Respecting myself more than the ghost of the version you’ve shown. One is finding sovereignty in the silence and the truth. The other is just an unfinished story, a glitch from a broken youth.`},{id:"633cd991-f8da-4c18-a065-d33d249fe84f",title:"Pessimistic Bias",artist:"Dom-I-NATE",handle:"domnate",index:5,image:"https://cdn2.suno.ai/image_large_633cd991-f8da-4c18-a065-d33d249fe84f.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/633cd991-f8da-4c18-a065-d33d249fe84f.m4a",videoUrl:"https://cdn1.suno.ai/633cd991-f8da-4c18-a065-d33d249fe84f.mp4",embedUrl:"https://suno.com/embed/633cd991-f8da-4c18-a065-d33d249fe84f",sunoUrl:"https://suno.com/song/633cd991-f8da-4c18-a065-d33d249fe84f",duration:245.3,durationFormatted:"4:05",tags:["rap","Moody trap-soul beat with filtered piano and distant pads","tight 808 groove. Male vocals: intimate","confessional rap in the verses with a half-sung hook","subtle pitch-shifted ad-libs. Chorus widens with airy harmonies and a slight lift in the drums"],lyrics:`[Verse 1]
You keep waiting for the catch
Reading poison in the patchwork
Every kindness looks like bait
Every promise feels like last time, worse

You hold history like armor
Got your guard up to your ears
I see shadows in your stories
I see shaking in your fears (yeah)

You say, "Everybody leaves me"
You say, "Love is just a bet"
So you sharpen every question
Just to cut before you're cut, I get that

[Chorus]
Pessimistic bias in your mind, in your mind
You'd rather think I hurt you
Like they did every time
But please take the chance
Trust me, let it climb
Let yourself be vulnerable
Like I did, I crossed that line

Pessimistic bias, baby, press rewind
Look me in the eyes
See I’m not that kind
Please take the chance
Drop the shield this time
Let yourself be vulnerable
Like I did, I crossed that line (yeah)

[Verse 2]
I laid every scar on the table
Every secret, every doubt I hide
You saw tremble in my fingers
When I told you how I almost died inside

I ain't here for your perfection
I'm here shaking in my skin
Two cracked mirrors on the mattress
Trying hard to let each other in

You keep testing my intentions
Looking past me for the trick
I keep staying, keep on saying
"I’m still here," while you predict

[Chorus]
Pessimistic bias in your mind, in your mind
You'd rather think I hurt you
Like they did every time
But please take the chance
Trust me, let it climb
Let yourself be vulnerable
Like I did, I crossed that line

Pessimistic bias, baby, press rewind
Look me in the eyes
See I’m not that kind
Please take the chance
Drop the shield this time
Let yourself be vulnerable
Like I did, I crossed that line (oh)

[Bridge]
What if this one time, you're wrong?
What if love shows up and stays?
What if all those ghosted calls
Don’t decide your future days?

I’m not asking you for perfect
I’m just asking you to try
Hold my hand a little looser
Let your heart be wrong this time (yeah)

[Chorus]
Pessimistic bias in your mind, in your mind
You'd rather think I hurt you
Like they did every time
But please take the chance
Trust me, let it climb
Let yourself be vulnerable
Like I did, I crossed that line

Pessimistic bias, baby, press rewind
Look me in the eyes
See I’m not that kind
Please take the chance
Drop the shield this time
Let yourself be vulnerable
Like I did, I crossed that line`},{id:"41b04c34-8a76-4283-b8fc-3c8996e88f70",title:"You Played The Wounded Bird",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:6,image:"https://cdn2.suno.ai/61e4714e-9de1-42c6-9536-3d9977035df5.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/41b04c34-8a76-4283-b8fc-3c8996e88f70.m4a",videoUrl:"https://cdn1.suno.ai/41b04c34-8a76-4283-b8fc-3c8996e88f70.mp4",embedUrl:"https://suno.com/embed/41b04c34-8a76-4283-b8fc-3c8996e88f70",sunoUrl:"https://suno.com/song/41b04c34-8a76-4283-b8fc-3c8996e88f70",duration:212.3,durationFormatted:"3:32",tags:["midwest hip-hop","hardcore hip-hop"],lyrics:`[Male Vocals – Verse 1 (The Hook)]
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
There's nothing but shadows and smoke in the air`},{id:"ae67baac-578e-4b4b-96ad-49c06909fc7b",title:"I Never Bled Someone the Way You Do",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:7,image:"https://cdn2.suno.ai/e7b7b9a7-ea57-49e4-8cb7-226ef9db8a6a.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/ae67baac-578e-4b4b-96ad-49c06909fc7b.m4a",videoUrl:"https://cdn1.suno.ai/ae67baac-578e-4b4b-96ad-49c06909fc7b.mp4",embedUrl:"https://suno.com/embed/ae67baac-578e-4b4b-96ad-49c06909fc7b",sunoUrl:"https://suno.com/song/ae67baac-578e-4b4b-96ad-49c06909fc7b",duration:225,durationFormatted:"3:45",tags:["hard rock","alt rock","heavy guitars","breakup anthem","passionate vocal"],lyrics:`[Verse 1]

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

[feedback fade out]`},{id:"af250b99-1d45-469f-bf81-1248a4a33761",title:"You'd Rather!",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:8,image:"https://cdn2.suno.ai/a972fc4d-2992-42c3-9e5d-7c6b8d487a61.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/af250b99-1d45-469f-bf81-1248a4a33761.m4a",videoUrl:"https://cdn1.suno.ai/af250b99-1d45-469f-bf81-1248a4a33761.mp4",embedUrl:"https://suno.com/embed/af250b99-1d45-469f-bf81-1248a4a33761",sunoUrl:"https://suno.com/song/af250b99-1d45-469f-bf81-1248a4a33761",duration:232.4,durationFormatted:"3:52",tags:["House-pop with rock grit and funky guitar chops","four-on-the-floor kick and syncopated bass driving a tense groove","verse stays stripped to clipped drums","muted bass","and sarcastic vocal phrasing"],lyrics:`[Verse 1]
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
Than let me prove I never lied to you`},{id:"a2132ab0-c8c0-49c8-835c-555eabc3b9ce",title:"Barly Maybe Saby DON'T MISS IT",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:9,image:"https://cdn2.suno.ai/image_large_f78e7ed2-fa71-4b39-84f8-8b6d6cd3687d.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/a2132ab0-c8c0-49c8-835c-555eabc3b9ce.m4a",videoUrl:"https://cdn1.suno.ai/a2132ab0-c8c0-49c8-835c-555eabc3b9ce.mp4",embedUrl:"https://suno.com/embed/a2132ab0-c8c0-49c8-835c-555eabc3b9ce",sunoUrl:"https://suno.com/song/a2132ab0-c8c0-49c8-835c-555eabc3b9ce",duration:221,durationFormatted:"3:41",tags:["alt pop","pop punk","breakup anthem","male female","distorted electric guitars"],lyrics:`[singer A]
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
we’ll be alright`},{id:"ca0198c0-3507-4fc9-a576-9445317c1e14",title:"Bad Brina knows how to Win",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:10,image:"https://cdn2.suno.ai/f4eaff63-a732-44a3-a4f3-fe8fd5049042.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/ca0198c0-3507-4fc9-a576-9445317c1e14.m4a",videoUrl:"https://cdn1.suno.ai/ca0198c0-3507-4fc9-a576-9445317c1e14.mp4",embedUrl:"https://suno.com/embed/ca0198c0-3507-4fc9-a576-9445317c1e14",sunoUrl:"https://suno.com/song/ca0198c0-3507-4fc9-a576-9445317c1e14",duration:190.4,durationFormatted:"3:10",tags:["pop punk","alt pop","duet","male female vocals","energetic"],lyrics:`[singer A (female Voice) ]
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
I woke up Sore yet I'm asking for more, Babe you best Get me a boy and a girl or i swear, I tell the police whats on your computer, but you say, Who cares, I've got nothing to hide?  I say Haha cuz you don't know what I downloaded on your computer last night.. So now you better live in fright, Before those screenshots come to light,  they'll have you locked up tight.`},{id:"be1b836f-aee0-406a-adfb-c1e5b4788078",title:"We MUSK go to MARS!",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:11,image:"https://cdn2.suno.ai/7cb8ec5e-b82c-492e-8136-edec0b448966.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/be1b836f-aee0-406a-adfb-c1e5b4788078.m4a",videoUrl:"https://cdn1.suno.ai/be1b836f-aee0-406a-adfb-c1e5b4788078.mp4",embedUrl:"https://suno.com/embed/be1b836f-aee0-406a-adfb-c1e5b4788078",sunoUrl:"https://suno.com/song/be1b836f-aee0-406a-adfb-c1e5b4788078",duration:286,durationFormatted:"4:46",tags:["dark alt-pop","industrial hip-hop","96 BPM","male and female vocals","spoken-word cadence"],lyrics:`Yeah SpaceX
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
It’s a launch you can see in real life`},{id:"018cff53-c1ec-4f4a-bace-e7ea89f9ce3d",title:"ABCs",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:12,image:"https://cdn2.suno.ai/image_large_018cff53-c1ec-4f4a-bace-e7ea89f9ce3d.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/018cff53-c1ec-4f4a-bace-e7ea89f9ce3d.m4a",videoUrl:"https://cdn1.suno.ai/018cff53-c1ec-4f4a-bace-e7ea89f9ce3d.mp4",embedUrl:"https://suno.com/embed/018cff53-c1ec-4f4a-bace-e7ea89f9ce3d",sunoUrl:"https://suno.com/song/018cff53-c1ec-4f4a-bace-e7ea89f9ce3d",duration:270,durationFormatted:"4:30",tags:["dark alt pop minimal bass heavy production quirky rhythmic synth breathy and whispered vocal delivery deadpan spoken word verses staccato cadence distorted sub bass hits sharp asmr style percussion hauntingly intimate atmosphere Pop","Electropop","Indie Pop","Alternative Pop style"],lyrics:`This is the A B C's of Addiction,


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

[Verse 1]
Addiction got its hand on me,
Bottles on the kitchen floor.
Cravings hit at 2 a.m.,
Denial leaning on the door.
Escape turns into static noise,
Fixes keep me in the loop.
Guilt sits heavy in my ribs,
Habits moving like a troop.
Isolation builds a frame,
“Just One” writes itself again.
Keeping Secrets in my phone,
Loss goes quiet, then it caves in.
Mind Games in the hallway mirror,
Numbness slowing every spark.
Obsession setting off the room,
Poison humming in the dark.
Quitting feels like changing skin,
Relapse knows exactly where.
Shame keeps playing in my head,
Triggers flashing everywhere.
Urges pulling on my sleeves,
Void with nothing to report.
Withdrawal shaking out the days,
X-ing Out the things Iोर्ट?
Yearning for a cleaner beat,
Zero feels too close for comfort.

[Break ]
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

[Verse 2: melancholy jazz]
Agony under the skin,
Blackouts cutting out the map.
Compulsion tapping at the gate,
Dependency in every gap.
Excess chewing up the day,
Falsehood hanging off my tongue.
Grip on the edge of what is real,
Heartache when the damage’s done.
Impulse lit like a phone screen flare,
Jail in the shape of my own room.
Knots pulled tight behind my eyes,
Lies keeping pace with the doom.
Madness buzzing through the blinds,
Need with a hand on my throat.
Overdose a shadow line,
Paranoia under every coat.
Quicksand soft beneath my feet,
Ruin showing up on time.
Shadows flicker in the glass,
Temptation dressed in borrowed lines.
Unraveling one thread at a time,
Vice keeps leaning on the beat.
Wreckage scattered by the sink,
Xanax tucked away discreet.
Yoke around the back of my neck,
Zombie moving, half-asleep.

[Outro ]
Now I Said the A B Cs of the addiction freestyle

[Outro - Music Abruptly Cuts Off]
[Spoken Word - Cold Silence]
Now fucking quit.

[End]`},{id:"ba1c3c00-6547-4e96-afe1-1566dca7b876",title:"cages that I couldn't even see(RAP}",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:13,image:"https://cdn2.suno.ai/ba1c3c00-6547-4e96-afe1-1566dca7b876_1e96e170.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/ba1c3c00-6547-4e96-afe1-1566dca7b876.m4a",videoUrl:"https://cdn1.suno.ai/ba1c3c00-6547-4e96-afe1-1566dca7b876.mp4",embedUrl:"https://suno.com/embed/ba1c3c00-6547-4e96-afe1-1566dca7b876",sunoUrl:"https://suno.com/song/ba1c3c00-6547-4e96-afe1-1566dca7b876",duration:274.3,durationFormatted:"4:34",tags:["hardcore cinematic hip hop aggressive male rap vocal high speed technical flow dense internal rhymes rapid fire delivery powerful punchlines intense emotional performance dark orchestral trap beat heavy 808 bass sharp snare hits dramatic strings cinematic drums underground battle rap energy modern Hip Hop","Rap","Hardcore Hip Hop","Midwest Hip Hop inspired intensity rebellious attitude energetic hook dynamic vocal switches fast verses with explosive chorus stadium sized sound professional studio production 2000s hardcore rap influence mixed with modern trap"],lyrics:`**[Male Vocals – Verse 1]**
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
I wasn't your soulmate, I was acting like a leech`},{id:"ade85e2d-c891-42bc-8dbf-8768b475d101",title:"The Doubts Between the Seams",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:14,image:"https://cdn2.suno.ai/image_large_ade85e2d-c891-42bc-8dbf-8768b475d101.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/ade85e2d-c891-42bc-8dbf-8768b475d101.m4a",videoUrl:"https://cdn1.suno.ai/ade85e2d-c891-42bc-8dbf-8768b475d101.mp4",embedUrl:"https://suno.com/embed/ade85e2d-c891-42bc-8dbf-8768b475d101",sunoUrl:"https://suno.com/song/ade85e2d-c891-42bc-8dbf-8768b475d101",duration:238.4,durationFormatted:"3:58",tags:["a duet","dubstep","trap"],lyrics:`[Verse 1]
You act all cold when the feeling hits
Yeah, you throw those jabs and little fits
But you’re always pointing at the wrong thing
When the love’s right there, but you won’t let it sing

Yeah, I don’t miss that
When you flip like that
’Cause you’re so quick to twist it
And you’re so pissy when you miss it

You’re super pessimistic
You’re super pessimistic
You get so cynic and narcissistic
’Cause you’re so pissy when you miss it

[Pre-Chorus]
When you miss it
You say you never miss it
But it’s written on your face now
From your head down low

And I see you fold
When the night runs cold
But you won’t let it show
No, you won’t let it show

[Chorus]
Pissy when you miss it
Pissy when you miss it
You really feel it now
Pissy when you miss it

You push it, then you miss it
You say you don’t need it
But you really need it
And you keep on missing out

[Verse 2]
One’s got a soft heart, one wears armor tight
Both too proud to say what’s wrong or right
When the sparks get loud and the silence grows
You both play tough, but the hurt still shows

And you make me wanna stay near
Even when you disappear
For the words you never mean
And the doubts between the seams

Try to find the bad, try to make it real
But all that’s left is how you feel
There’s no villain in the scene
Just two lost hearts and a broken dream

[Pre-Chorus]
When you miss it
You swear you never miss it
But it circles back around now
From your head down low

And I keep on giving
Still you keep on slipping
Looking for the flame
Where the fire used to glow

[Chorus]
Pissy when you miss it
Pissy when you miss it
You really feel it now
Pissy when you miss it

You push it, then you miss it
You say you don’t need it
But you really need it
And you keep on missing out

[Bridge]
Maybe you’re scared of being seen
Maybe you’re scared of trust
Maybe you call it damage
When it’s only us

I’m not your enemy
I’m just here, I’m here
Holding what you can’t see
Holding through the fear

[Final Chorus]
Pissy when you miss it
Pissy when you miss it
You really feel it now
Pissy when you miss it

You push it, then you miss it
You say you don’t need it
But you really need it
And you keep on missing out`},{id:"e5c5ba9d-7215-41bd-a626-28a93415eb3d",title:"Easier To Believe The Hurt",artist:"Dom-I-NATE",handle:"domnate",index:15,image:"https://cdn2.suno.ai/image_large_e5c5ba9d-7215-41bd-a626-28a93415eb3d.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/e5c5ba9d-7215-41bd-a626-28a93415eb3d.m4a",videoUrl:"https://cdn1.suno.ai/e5c5ba9d-7215-41bd-a626-28a93415eb3d.mp4",embedUrl:"https://suno.com/embed/e5c5ba9d-7215-41bd-a626-28a93415eb3d",sunoUrl:"https://suno.com/song/e5c5ba9d-7215-41bd-a626-28a93415eb3d",duration:229.5,durationFormatted:"3:49",tags:["Intimate acoustic ballad with male vocals","close-mic’d fingerpicked guitar and soft piano chords. Verses stay hushed","almost spoken","with subtle pads in the background. Chorus swells with warm harmonies and a gentle kick","lifting the emotion. Bridge strips back to almost solo vocal"],lyrics:`[Verse 1]
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
Come lay your head on the safer side tonight`},{id:"9ca6c3d7-7e54-497f-9638-98892a4bc68d",title:"Saints and Schemes",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:16,image:"https://cdn2.suno.ai/image_large_9ca6c3d7-7e54-497f-9638-98892a4bc68d.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/9ca6c3d7-7e54-497f-9638-98892a4bc68d.m4a",videoUrl:"https://cdn1.suno.ai/9ca6c3d7-7e54-497f-9638-98892a4bc68d.mp4",embedUrl:"https://suno.com/embed/9ca6c3d7-7e54-497f-9638-98892a4bc68d",sunoUrl:"https://suno.com/song/9ca6c3d7-7e54-497f-9638-98892a4bc68d",duration:300.4,durationFormatted:"5:00",tags:["Dark alt-pop and indie-rock hybrid with brooding synth pads","reverb-soaked clean guitars","and tight","syncopated drums. Verses sit in a low","intimate register with fast"],lyrics:`[Verse 1 - Female Vocal]
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
(Both, whispered) Feeding on the soft parts you taught me to bleed (ABAB)`},{id:"45517b9a-5ab2-4e6d-842e-4a1452ec9547",title:"A B C's of Addiction",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:17,image:"https://cdn2.suno.ai/2d60da41-39ef-42f0-b39f-c03c3efbc5bb.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/45517b9a-5ab2-4e6d-842e-4a1452ec9547.m4a",videoUrl:"https://cdn1.suno.ai/45517b9a-5ab2-4e6d-842e-4a1452ec9547.mp4",embedUrl:"https://suno.com/embed/45517b9a-5ab2-4e6d-842e-4a1452ec9547",sunoUrl:"https://suno.com/song/45517b9a-5ab2-4e6d-842e-4a1452ec9547",duration:286.8,durationFormatted:"4:46",tags:["dark alt-pop","minimalist sub bass","breathy whispered vocals","intimate close-mic delivery","eerie synths"],lyrics:`[Intro: Dark Synth & Heavy Breath]
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

[End]`},{id:"aacdde92-a133-4df4-85ae-04a9933c5bba",title:"We MUSK go to MARS!",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:18,image:"https://cdn2.suno.ai/f1f81ee4-b999-4b52-9b9e-9bd0b6366be9.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/aacdde92-a133-4df4-85ae-04a9933c5bba.m4a",videoUrl:"https://cdn1.suno.ai/aacdde92-a133-4df4-85ae-04a9933c5bba.mp4",embedUrl:"https://suno.com/embed/aacdde92-a133-4df4-85ae-04a9933c5bba",sunoUrl:"https://suno.com/song/aacdde92-a133-4df4-85ae-04a9933c5bba",duration:243.9,durationFormatted:"4:03",tags:["dark alt-pop","industrial hip-hop","96 BPM","male and female vocals","spoken-word cadence"],lyrics:`Yeah SpaceX
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
Yeah, We Musk Go To MARS.`},{id:"a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60",title:"Poison shot by shot (Piano Soft Vocals)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:19,image:"https://cdn2.suno.ai/d2d6cd4c-5d47-4238-9eaf-19444861b06a.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60.m4a",videoUrl:"https://cdn1.suno.ai/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60.mp4",embedUrl:"https://suno.com/embed/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60",sunoUrl:"https://suno.com/song/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60",duration:360.5,durationFormatted:"6:00",tags:["Pop rock duet in G major at 120 BPM. The arrangement features a clean electric guitar playing arpeggiated chords","a grand piano","and a driving drum kit with a prominent snare. A melodic bass guitar follows the chord progression. The track features alternating male and female lead vocals that harmonize during the choruses. The production uses light reverb on the vocals and a crisp","modern mix with clear separation between the mid-range piano and the high-frequency guitar strums."],lyrics:`[Intro]
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
[piano fades out]`},{id:"aab189df-e9a0-4fac-842e-90aa85f3baac",title:"Poison shot by shot(Vocal Clean Remix)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:20,image:"https://cdn2.suno.ai/image_large_aab189df-e9a0-4fac-842e-90aa85f3baac.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/aab189df-e9a0-4fac-842e-90aa85f3baac.m4a",videoUrl:"https://cdn1.suno.ai/aab189df-e9a0-4fac-842e-90aa85f3baac.mp4",embedUrl:"https://suno.com/embed/aab189df-e9a0-4fac-842e-90aa85f3baac",sunoUrl:"https://suno.com/song/aab189df-e9a0-4fac-842e-90aa85f3baac",duration:388.9,durationFormatted:"6:28",tags:["J-Rock with elements of post-hardcore and alternative metal. Distorted electric guitars play palm-muted power chords and syncopated riffs. The bass guitar follows the kick drum with a gritty","overdriven tone. Drums feature rapid double-kick patterns","aggressive snare hits","and frequent crash cymbal accents. Vocals are male","ranging from melodic singing to strained shouting and guttural screams. The arrangement includes sudden dynamic shifts between dense"],lyrics:`**[Male Vocals – Verse 1]**
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
I wasn't your soulmate, I was acting like a leech`}],Lf=r=>({id:r.id,title:r.title,artist:r.artist,duration:r.durationFormatted,durationSeconds:r.duration,index:r.index,thumbnail:r.image,youtubeUrl:r.sunoUrl,category:"alt",tags:r.tags,description:`Suno AI Track • @${r.handle}`,featuredLyrics:r.lyrics,audioUrl:r.audioUrl,videoUrl:r.videoUrl,embedUrl:r.embedUrl,sunoUrl:r.sunoUrl,isSuno:!0});/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),D0=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(E,T,h)=>h?h.toUpperCase():T.toLowerCase()),If=r=>{const E=D0(r);return E.charAt(0).toUpperCase()+E.slice(1)},Zf=(...r)=>r.filter((E,T,h)=>!!E&&E.trim()!==""&&h.indexOf(E)===T).join(" ").trim(),H0=r=>{for(const E in r)if(E.startsWith("aria-")||E==="role"||E==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var R0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=V.forwardRef(({color:r="currentColor",size:E=24,strokeWidth:T=2,absoluteStrokeWidth:h,className:v="",children:B,iconNode:C,...M},z)=>V.createElement("svg",{ref:z,...R0,width:E,height:E,stroke:r,strokeWidth:h?Number(T)*24/Number(E):T,className:Zf("lucide",v),...!B&&!H0(M)&&{"aria-hidden":"true"},...M},[...C.map(([w,R])=>V.createElement(w,R)),...Array.isArray(B)?B:[B]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(r,E)=>{const T=V.forwardRef(({className:h,...v},B)=>V.createElement(q0,{ref:B,iconNode:E,className:Zf(`lucide-${O0(If(r))}`,`lucide-${r}`,h),...v}));return T.displayName=If(r),T};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],eu=we("check",V0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Kf=we("clock",L0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],tu=we("copy",I0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],Jf=we("disc-3",G0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],On=we("disc",X0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],St=we("external-link",Q0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],$f=we("file-text",Z0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Ff=we("flame",K0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Wf=we("layout-grid",J0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Gf=we("list-music",$0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Pf=we("list",F0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],eh=we("music-2",W0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],au=we("music",P0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],ql=we("pause",ey);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Gt=we("play",ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],ly=we("repeat",ay);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],th=we("search",ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],uy=we("send",iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Nt=we("share-2",oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],lu=we("shuffle",sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],cy=we("skip-back",ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],fy=we("skip-forward",dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],el=we("sparkles",hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],Bs=we("tv",my);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],by=we("video",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],gy=we("volume-2",py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],vy=we("volume-x",xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],tl=we("x",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],zs=we("youtube",Sy),Ny=({isDarkMode:r,onToggleDarkMode:E,trackCount:T,onQuickShareAll:h})=>u.jsx("header",{id:"main-header",className:`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${r?"bg-black/40 border-white/10 text-white":"bg-white/80 border-neutral-200 text-neutral-900"}`,children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[u.jsxs("div",{className:"flex flex-col",children:[u.jsxs("h1",{className:"text-2xl sm:text-3xl md:text-4xl tracking-tighter leading-none select-none",children:[u.jsx("span",{className:"font-black",children:"D"}),u.jsx("span",{className:"font-light opacity-80",children:"o"}),u.jsx("span",{className:"font-medium opacity-90",children:"m"}),u.jsx("span",{className:"font-black text-cyan-400",children:"I"}),u.jsx("span",{className:"font-light opacity-80",children:"n"}),u.jsx("span",{className:"font-black bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent",children:"NATE"}),u.jsx("span",{className:"font-light opacity-80",children:"l"}),u.jsx("span",{className:"font-medium opacity-90",children:"y"})]}),u.jsx("p",{className:"text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold mt-0.5",children:"Official Gallery"})]}),u.jsxs("span",{className:`hidden md:inline-flex px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${r?"bg-white/5 border-white/10 text-cyan-300":"bg-cyan-50 border-cyan-200 text-cyan-700"}`,children:[T," Tracks"]})]}),u.jsxs("div",{className:"flex items-center gap-3 sm:gap-6",children:[u.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[u.jsxs("a",{id:"youtube-channel-link",href:Y0,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Visit DomInNATEly on YouTube",children:[u.jsx(Jf,{className:"w-3.5 h-3.5 text-cyan-400 animate-spin",style:{animationDuration:"6s"}}),u.jsx("span",{className:"hidden lg:inline",children:"Channel"}),u.jsx(St,{className:"w-3 h-3 opacity-60"})]}),u.jsxs("a",{id:"youtube-playlist-link",href:Qf,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Open DomInNATEly official playlists on YouTube",children:[u.jsx(eh,{className:"w-3.5 h-3.5 text-red-500"}),u.jsx("span",{className:"hidden lg:inline",children:"YT Playlists"}),u.jsx(St,{className:"w-3 h-3 opacity-60"})]}),u.jsxs("a",{id:"suno-playlist-header-link",href:tt.url,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Open official DomInNATEly playlist on Suno",children:[u.jsx(el,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{className:"hidden lg:inline",children:"Suno Playlist"}),u.jsx(St,{className:"w-3 h-3 opacity-60"})]})]}),h&&u.jsxs("button",{id:"share-gallery-btn",onClick:h,className:`p-2 sm:px-3 sm:py-1.5 rounded-full border text-xs font-semibold tracking-wider inline-flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600"}`,title:"Share Gallery","aria-label":"Share DomInNATEly Music Gallery",children:[u.jsx(Nt,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{className:"hidden md:inline uppercase text-[11px]",children:"Share"})]}),u.jsxs("div",{className:`flex items-center gap-2.5 sm:gap-3 border-l pl-3 sm:pl-5 ${r?"border-white/10":"border-neutral-200"}`,children:[u.jsx("button",{id:"dark-mode-toggle",onClick:E,className:`w-10 h-6 rounded-full relative flex items-center px-0.5 transition-colors focus:outline-hidden ${r?"bg-cyan-500":"bg-neutral-300"}`,title:r?"Switch to Light Mode":"Switch to Dark Mode","aria-label":r?"Switch to Light Mode":"Switch to Dark Mode",children:u.jsx("div",{className:`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${r?"translate-x-4":"translate-x-0"}`})}),u.jsx("span",{className:`text-[10px] uppercase font-bold tracking-wider hidden sm:inline ${r?"text-white/80":"text-neutral-700"}`,children:r?"Dark Mode":"Light Mode"})]})]})]})}),jy=({track:r,isPlaying:E,isCurrentTrack:T,onPlay:h,onOpenShare:v,onOpenDetails:B,isDarkMode:C})=>u.jsxs("div",{id:`track-card-${r.id}`,className:`group rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden relative ${T?C?"bg-white/10 border-cyan-400/80 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400/40":"bg-cyan-50/40 border-cyan-500 shadow-md ring-1 ring-cyan-400/30":C?"bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15 shadow-sm hover:shadow-md":"bg-white hover:bg-neutral-50/90 border-neutral-200 hover:border-neutral-300 shadow-xs hover:shadow-sm"}`,children:[u.jsxs("div",{className:"relative aspect-video w-full overflow-hidden bg-black",children:[u.jsx("img",{src:r.thumbnail,alt:r.title,loading:"lazy",referrerPolicy:"no-referrer",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"}),u.jsxs("div",{className:"absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none",children:[u.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white shadow-md",children:r.index.toString().padStart(2,"0")}),u.jsxs("span",{className:"px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-black/80 backdrop-blur-xs text-cyan-400 border border-white/10 flex items-center gap-1.5 shadow-xs",children:[u.jsx(Kf,{className:"w-3 h-3 text-cyan-400"}),r.duration]})]}),u.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:u.jsx("button",{id:`play-btn-${r.id}`,onClick:M=>{M.stopPropagation(),h(r)},className:`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform active:scale-95 ${T&&E?"bg-cyan-400 text-black scale-100 ring-4 ring-cyan-400/40 font-bold":"bg-white/90 hover:bg-white text-black backdrop-blur-sm group-hover:scale-110 shadow-lg"}`,"aria-label":T&&E?`Pause ${r.title}`:`Play ${r.title}`,children:T&&E?u.jsx(ql,{className:"w-5 h-5 fill-current"}):u.jsx(Gt,{className:"w-5 h-5 fill-current translate-x-0.5"})})}),T&&E&&u.jsxs("div",{className:"absolute bottom-2.5 left-2.5 flex items-end gap-1 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs border border-cyan-400/40",children:[u.jsx("span",{className:"w-1 bg-cyan-400 rounded-full animate-eq-1"}),u.jsx("span",{className:"w-1 bg-cyan-300 rounded-full animate-eq-2"}),u.jsx("span",{className:"w-1 bg-purple-400 rounded-full animate-eq-3"}),u.jsx("span",{className:"w-1 bg-cyan-400 rounded-full animate-eq-4"}),u.jsx("span",{className:"text-[10px] font-mono text-cyan-300 ml-1 font-bold uppercase tracking-wider",children:"Playing"})]})]}),u.jsxs("div",{className:"p-4 sm:p-5 flex-1 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between gap-2 mb-1.5",children:[u.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-cyan-400 truncate",children:r.artist}),u.jsx("span",{className:`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${C?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-300 text-neutral-600"}`,children:r.category})]}),u.jsx("h3",{onClick:()=>B&&B(r),className:`text-base font-bold line-clamp-1 cursor-pointer transition-colors ${T?C?"text-cyan-400":"text-cyan-700":C?"text-white hover:text-cyan-400":"text-neutral-900 hover:text-cyan-700"}`,title:r.title,children:r.title}),u.jsx("p",{className:"text-xs text-white/50 italic mt-0.5",children:"DomInNATEly Originals"}),r.featuredLyrics&&u.jsxs("p",{className:`mt-2 text-xs italic line-clamp-2 leading-relaxed ${C?"text-white/60":"text-neutral-600"}`,children:["“",r.featuredLyrics,"”"]}),u.jsx("div",{className:"mt-3 flex flex-wrap gap-1",children:r.tags.map(M=>u.jsxs("span",{className:`text-[10px] font-medium px-2 py-0.5 rounded-md ${C?"bg-white/5 text-white/50 border border-white/5":"bg-neutral-100 text-neutral-600"}`,children:["#",M]},M))})]}),u.jsxs("div",{className:`mt-4 pt-3.5 border-t flex items-center justify-between gap-2 ${C?"border-white/10":"border-neutral-200"}`,children:[u.jsx("button",{id:`card-play-toggle-${r.id}`,onClick:()=>h(r),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${T&&E?"bg-cyan-500 text-black font-bold":C?"bg-white/5 hover:bg-white/10 text-white border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-800"}`,children:T&&E?u.jsxs(u.Fragment,{children:[u.jsx(ql,{className:"w-3.5 h-3.5 fill-current"}),u.jsx("span",{children:"Pause"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Gt,{className:"w-3.5 h-3.5 fill-current"}),u.jsx("span",{children:"Play"})]})}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx("a",{id:`quick-x-share-${r.id}`,href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Listening to "${r.title}" by DomInNATEly 🔥`)}&url=${encodeURIComponent(r.youtubeUrl)}`,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${C?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-black hover:bg-neutral-200"}`,title:"Share on X","aria-label":`Share ${r.title} on X`,children:u.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),u.jsx("a",{id:`quick-fb-share-${r.id}`,href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(r.youtubeUrl)}`,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${C?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-[#1877F2] hover:bg-neutral-200"}`,title:"Share on Facebook","aria-label":`Share ${r.title} on Facebook`,children:u.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),u.jsx("a",{id:`card-youtube-link-${r.id}`,href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${C?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-[#FF0000] hover:bg-neutral-200"}`,title:"Watch Video on YouTube","aria-label":`Watch ${r.title} on YouTube`,children:u.jsx(zs,{className:"w-3.5 h-3.5 fill-current"})}),u.jsx("button",{id:`open-share-modal-${r.id}`,onClick:()=>v(r),className:`p-1.5 rounded-md transition-colors ${C?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200"}`,title:"More Share Options (WhatsApp, Reddit, Copy Link, etc.)","aria-label":`Share ${r.title}`,children:u.jsx(Nt,{className:"w-3.5 h-3.5"})})]})]})]})]}),Ay=({searchQuery:r,onSearchChange:E,sortField:T,onSortChange:h,selectedCategory:v,onCategoryChange:B,totalResults:C,totalTracks:M=18,isDarkMode:z})=>{const w=[{id:"all",label:"All Tracks"},{id:"rock",label:"Rock & Riffs"},{id:"remix",label:"Remixes"},{id:"acoustic",label:"Acoustic / Live"},{id:"duet",label:"Duets"},{id:"alt",label:"Alt / Concept"}],R=M.toString().padStart(2,"0"),_=[{id:"playlist",label:`Playlist Order (#01 - #${R})`},{id:"newest",label:`Reverse Order (#${R} - #01)`},{id:"duration-desc",label:"Duration (Longest First)"},{id:"duration-asc",label:"Duration (Shortest First)"},{id:"title-asc",label:"Title (A → Z)"},{id:"title-desc",label:"Title (Z → A)"}],X=r.trim()!==""||v!=="all"||T!=="playlist";return u.jsxs("div",{id:"sorting-filter-panel",className:`rounded-2xl border p-4 sm:p-5 mb-6 backdrop-blur-md transition-all ${z?"bg-white/5 border-white/10 shadow-xl shadow-black/40":"bg-white/90 border-neutral-200 shadow-sm"}`,children:[u.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-3.5",children:[u.jsxs("div",{className:"relative flex-1",children:[u.jsx(th,{className:`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${z?"text-white/40":"text-neutral-400"}`}),u.jsx("input",{id:"track-search-input",type:"text",placeholder:"Search tracks, lyrics, or styles...",value:r,onChange:K=>E(K.target.value),className:`w-full pl-9 pr-9 py-2 rounded-xl text-xs sm:text-sm border focus:outline-hidden transition-all ${z?"bg-black/50 border-white/10 text-white placeholder-white/40 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/40":"bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600/30"}`}),r&&u.jsx("button",{onClick:()=>E(""),className:`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md ${z?"text-white/40 hover:text-white":"text-neutral-500 hover:text-neutral-900"}`,title:"Clear search",children:u.jsx(tl,{className:"w-3.5 h-3.5"})})]}),u.jsxs("div",{className:`flex items-center px-3 py-1.5 rounded-full border transition-all ${z?"bg-white/5 border-white/10 text-white":"bg-neutral-100 border-neutral-300 text-neutral-800"}`,children:[u.jsx("span",{className:`text-[10px] sm:text-xs font-bold mr-2 uppercase tracking-wider ${z?"text-white/50":"text-neutral-500"}`,children:"SORT BY:"}),u.jsx("select",{id:"track-sort-select",value:T,onChange:K=>h(K.target.value),className:`bg-transparent text-xs outline-hidden cursor-pointer font-bold uppercase tracking-wider ${z?"text-cyan-400":"text-cyan-700"}`,children:_.map(K=>u.jsx("option",{value:K.id,className:z?"bg-[#0a0a0a] text-white":"bg-white text-neutral-900",children:K.label},K.id))})]})]}),u.jsxs("div",{className:`mt-4 pt-3.5 border-t flex flex-wrap items-center justify-between gap-2.5 ${z?"border-white/10":"border-neutral-200"}`,children:[u.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar",children:w.map(K=>{const P=v===K.id;return u.jsx("button",{id:`filter-pill-${K.id}`,onClick:()=>B(K.id),className:`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${P?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":z?"bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20":"bg-neutral-100 border border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400"}`,children:K.label},K.id)})}),u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono",children:[u.jsxs("span",{className:z?"text-cyan-400 font-bold":"text-cyan-700 font-bold",children:[C," ",C===1?"TRACK":"TRACKS"]}),X&&u.jsx("button",{id:"reset-filters-btn",onClick:()=>{E(""),B("all"),h("playlist")},className:`underline text-[11px] uppercase tracking-wider ml-2 transition-colors ${z?"text-white/50 hover:text-white":"text-neutral-500 hover:text-black"}`,children:"Reset"})]})]})]})};class Ty{constructor(){this.activePlayer=null,this.listeners=[]}setActivePlayer(E){this.activePlayer!==E&&(this.activePlayer=E,this.notifyListeners())}getActivePlayer(){return this.activePlayer}subscribe(E){return this.listeners.push(E),E(this.activePlayer),()=>{this.listeners=this.listeners.filter(T=>T!==E)}}notifyListeners(){this.listeners.forEach(E=>{try{E(this.activePlayer)}catch(T){console.error("PlayerManager listener error:",T)}})}}const Xf=new Ty,ky=({currentTrack:r,playlist:E,onTrackChange:T,onOpenShare:h,isDarkMode:v,isPlaying:B,setIsPlaying:C,allPlaylists:M,onSwitchPlaylist:z,currentPlaylistType:w="youtube"})=>{const[R,_]=V.useState(0),[X,K]=V.useState(0),[P,le]=V.useState(80),[Se,Me]=V.useState(!1),[Ye,Be]=V.useState(!1),[ke,Oe]=V.useState(!1),[he,$]=V.useState(!1),[_e,I]=V.useState(!1),[ee,Z]=V.useState("current"),ue=V.useMemo(()=>ee==="youtube"&&(M!=null&&M.youtube)?M.youtube:ee==="suno"&&(M!=null&&M.suno)?M.suno:E,[ee,M,E]),[Ht,dt]=V.useState(!1),Y=V.useRef(null),f=V.useRef(null),k=V.useRef(null),O=V.useRef(!1),re=V.useRef(null),pe="youtube-player-container",d=!!(r!=null&&r.audioUrl||r!=null&&r.isSuno);V.useEffect(()=>{B&&Xf.setActivePlayer(d?"suno":"youtube")},[B,d]),V.useEffect(()=>Xf.subscribe(J=>{if(J==="suno"&&B&&!d){if(C(!1),Y.current&&typeof Y.current.pauseVideo=="function")try{Y.current.pauseVideo()}catch{}}else J==="youtube"&&B&&d&&(C(!1),f.current&&f.current.pause())}),[B,d,C]);const A=D=>{if(isNaN(D)||D<0)return"0:00";const J=Math.floor(D/60),ie=Math.floor(D%60);return`${J}:${ie<10?"0":""}${ie}`},U=V.useCallback(()=>{if(!r||E.length===0)return;if(Ye){const ie=Math.floor(Math.random()*E.length);T(E[ie]);return}const J=(E.findIndex(ie=>ie.id===r.id)+1)%E.length;T(E[J])},[r,E,Ye,T]),q=V.useCallback(()=>{if(!r||E.length===0)return;if(R>4){if(d&&f.current){f.current.currentTime=0,_(0);return}if(Y.current&&typeof Y.current.seekTo=="function")try{Y.current.seekTo(0,!0),_(0);return}catch{}}const J=(E.findIndex(ie=>ie.id===r.id)-1+E.length)%E.length;T(E[J])},[r,E,R,d,T]);V.useEffect(()=>{if(r){if(d){if(Y.current&&typeof Y.current.pauseVideo=="function")try{Y.current.pauseVideo()}catch{}f.current&&(f.current.src=r.audioUrl?encodeURI(r.audioUrl):"",f.current.load(),_(0),K(r.durationSeconds||180),B&&f.current.play().catch(D=>{console.warn("Audio auto-play restricted by browser:",D)}));return}f.current&&f.current.pause()}},[r==null?void 0:r.id,d]),V.useEffect(()=>{var D;if(!window.YT&&!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){const ie=document.createElement("script");ie.src="https://www.youtube.com/iframe_api";const Qe=document.getElementsByTagName("script")[0];(D=Qe==null?void 0:Qe.parentNode)==null||D.insertBefore(ie,Qe)}},[]),V.useEffect(()=>{if(!r||d)return;if(Y.current&&O.current){if(typeof Y.current.loadVideoById=="function")try{B?Y.current.loadVideoById(r.id):typeof Y.current.cueVideoById=="function"?Y.current.cueVideoById(r.id):Y.current.loadVideoById(r.id)}catch(J){console.warn("Error loading video by ID:",J)}return}re.current=r.id;const D=()=>{if(!document.getElementById(pe)){setTimeout(D,100);return}if(!window.YT||!window.YT.Player){setTimeout(D,100);return}if(!Y.current)try{Y.current=new window.YT.Player(pe,{height:"100%",width:"100%",videoId:r.id,playerVars:{autoplay:B?1:0,controls:1,modestbranding:1,rel:0,origin:window.location.origin},events:{onReady:ie=>{if(O.current=!0,typeof ie.target.setVolume=="function"&&ie.target.setVolume(P),re.current&&re.current!==r.id){const Qe=re.current;re.current=null,typeof ie.target.loadVideoById=="function"&&(ie.target.loadVideoById(Qe),C(!0))}else B&&typeof ie.target.playVideo=="function"&&ie.target.playVideo()},onStateChange:ie=>{if(ie.data===1){if(C(!0),Y.current&&typeof Y.current.getDuration=="function"){const Qe=Y.current.getDuration();Qe&&Qe>0&&K(Qe)}}else ie.data===2?C(!1):ie.data===0&&(ke?(Y.current&&typeof Y.current.seekTo=="function"&&Y.current.seekTo(0),Y.current&&typeof Y.current.playVideo=="function"&&Y.current.playVideo()):U())},onError:ie=>{console.warn("YouTube Player event error:",ie)}}})}catch(ie){console.warn("Error instantiating YT.Player:",ie)}};D()},[r==null?void 0:r.id,d]),V.useEffect(()=>{if(d){if(!f.current)return;B?f.current.play().catch(D=>{console.warn("Audio play failed:",D)}):f.current.pause();return}if(!(!O.current||!Y.current))try{B&&typeof Y.current.playVideo=="function"?Y.current.playVideo():!B&&typeof Y.current.pauseVideo=="function"&&Y.current.pauseVideo()}catch(D){console.warn("Error syncing playback state:",D)}},[B,d]),V.useEffect(()=>(B?k.current=setInterval(()=>{if(d){if(f.current&&!f.current.paused){const D=f.current.currentTime;D!==void 0&&!isNaN(D)&&_(D);const J=f.current.duration;J&&!isNaN(J)&&J>0&&K(J)}else _(D=>{const J=X||(r==null?void 0:r.durationSeconds)||180;return D>=J?(U(),0):D+1});return}if(Y.current&&typeof Y.current.getCurrentTime=="function")try{const D=Y.current.getCurrentTime();if(D!==void 0&&!isNaN(D)&&_(D),typeof Y.current.getDuration=="function"){const J=Y.current.getDuration();J&&J>0&&K(J)}}catch{}},500):clearInterval(k.current),()=>clearInterval(k.current)),[B,d,X,r==null?void 0:r.durationSeconds,U]),V.useEffect(()=>()=>{if(clearInterval(k.current),Y.current&&typeof Y.current.destroy=="function")try{Y.current.destroy()}catch{}Y.current=null,O.current=!1,f.current&&f.current.pause()},[]);const F=()=>{if(d){if(!f.current){C(!B);return}B?(f.current.pause(),C(!1)):(f.current.play().catch(D=>{console.warn("Audio play error:",D)}),C(!0));return}if(!Y.current||!O.current){C(!B);return}try{B?(typeof Y.current.pauseVideo=="function"&&Y.current.pauseVideo(),C(!1)):(typeof Y.current.playVideo=="function"&&Y.current.playVideo(),C(!0))}catch(D){console.warn("Error toggling playback:",D),C(!B)}},ne=D=>{const J=parseFloat(D.target.value);if(_(J),d&&f.current){f.current.currentTime=J;return}if(Y.current&&typeof Y.current.seekTo=="function")try{Y.current.seekTo(J,!0)}catch(ie){console.warn("Error seeking:",ie)}},me=D=>{const J=parseInt(D.target.value,10);if(le(J),d&&f.current){f.current.volume=Se?0:J/100;return}if(Y.current&&typeof Y.current.setVolume=="function")try{Y.current.setVolume(J),J===0?(Me(!0),typeof Y.current.mute=="function"&&Y.current.mute()):Se&&(Me(!1),typeof Y.current.unMute=="function"&&Y.current.unMute())}catch(ie){console.warn("Error setting volume:",ie)}},Je=()=>{if(d&&f.current){const D=!Se;Me(D),f.current.muted=D;return}if(Y.current)try{Se?(typeof Y.current.unMute=="function"&&Y.current.unMute(),Me(!1),typeof Y.current.setVolume=="function"&&Y.current.setVolume(P||50)):(typeof Y.current.mute=="function"&&Y.current.mute(),Me(!0))}catch(D){console.warn("Error toggling mute:",D)}};if(!r)return null;const Ee=X||r.durationSeconds||180,Ya=Ee>0?R/Ee*100:0;return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300 ${he?"opacity-100 pointer-events-auto visible":"opacity-0 pointer-events-none invisible"}`,onClick:()=>$(!1),children:u.jsxs("div",{className:"relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col",onClick:D=>D.stopPropagation(),children:[u.jsxs("div",{className:"p-3 bg-neutral-950/90 border-b border-white/10 flex items-center justify-between text-xs",children:[u.jsxs("span",{className:"font-bold text-white truncate max-w-[80%]",children:[r.title," — ",r.artist]}),u.jsx("button",{onClick:()=>$(!1),className:"px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-semibold transition-colors",children:"Close Video Mode"})]}),u.jsxs("div",{className:"flex-1 w-full h-full relative",children:[d?r.videoUrl?u.jsx("video",{src:encodeURI(r.videoUrl),controls:!0,autoPlay:!0,className:"w-full h-full object-contain"}):u.jsx("iframe",{src:encodeURI(r.embedUrl||r.youtubeUrl||""),title:`Suno Embed - ${r.title}`,className:"w-full h-full border-0",allow:"autoplay"}):null,u.jsx("div",{id:pe,className:`w-full h-full ${d?"hidden":""}`})]})]})}),u.jsx("audio",{ref:f,onTimeUpdate:D=>{const J=D.currentTarget.currentTime;isNaN(J)||_(J)},onLoadedMetadata:D=>{const J=D.currentTarget.duration;J&&!isNaN(J)&&J>0&&K(J)},onEnded:()=>{ke?f.current&&(f.current.currentTime=0,f.current.play().catch(()=>{})):U()},preload:"auto"}),u.jsxs("div",{id:"persistent-audio-player",className:`fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-xl shadow-2xl transition-all duration-300 ${v?"bg-black/95 border-white/10 text-white":"bg-white/95 border-neutral-200 text-neutral-900"}`,children:[u.jsxs("div",{className:"relative w-full h-1.5 group cursor-pointer bg-white/10",children:[u.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all pointer-events-none relative",style:{width:`${Ya}%`},children:u.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg shadow-cyan-500/50 scale-0 group-hover:scale-100 transition-transform"})}),u.jsx("input",{id:"audio-progress-bar",type:"range",min:"0",max:Ee,step:"1",value:R,onChange:ne,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer","aria-label":"Seek track"})]}),u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-8 py-3",children:u.jsxs("div",{className:"flex items-center justify-between gap-4 sm:gap-8",children:[u.jsxs("div",{className:"flex items-center gap-3.5 min-w-0 max-w-[40%] sm:max-w-[28%]",children:[u.jsxs("div",{className:"relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-md bg-black",children:[u.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),B&&u.jsx("div",{className:"absolute inset-0 bg-black/50 flex items-center justify-center",children:u.jsxs("div",{className:"flex items-end gap-0.5 h-3",children:[u.jsx("span",{className:"w-0.5 bg-cyan-400 animate-eq-1"}),u.jsx("span",{className:"w-0.5 bg-cyan-300 animate-eq-2"}),u.jsx("span",{className:"w-0.5 bg-purple-400 animate-eq-3"})]})})]}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("h4",{className:"text-xs sm:text-sm font-bold truncate leading-tight hover:text-cyan-400 transition-colors",children:r.title}),u.jsxs("p",{className:`text-[11px] sm:text-xs truncate ${v?"text-white/50":"text-neutral-500"}`,children:[r.artist," • ",u.jsxs("span",{className:"font-mono text-cyan-400",children:["#",r.index.toString().padStart(2,"0")]})]})]})]}),u.jsxs("div",{className:"flex flex-col items-center justify-center gap-1.5 flex-1 max-w-md",children:[u.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[u.jsx("button",{id:"player-shuffle-btn",onClick:()=>Be(!Ye),className:`p-1.5 rounded-full transition-colors hidden sm:block ${Ye?"text-cyan-400 font-bold":v?"text-white/40 hover:text-white":"text-neutral-400 hover:text-black"}`,title:Ye?"Shuffle Active":"Enable Shuffle","aria-label":"Shuffle",children:u.jsx(lu,{className:"w-4 h-4"})}),u.jsx("button",{id:"player-prev-btn",onClick:q,className:`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${v?"text-white hover:text-cyan-400":"text-neutral-700 hover:text-black"}`,title:"Previous Track","aria-label":"Previous Track",children:u.jsx(cy,{className:"w-5 h-5 fill-current"})}),u.jsx("button",{id:"player-play-pause-btn",onClick:F,className:"w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black hover:bg-cyan-300 flex items-center justify-center font-bold text-xl shadow-xl hover:scale-105 active:scale-95 transition-all",title:B?"Pause":"Play","aria-label":B?"Pause":"Play",children:B?u.jsx(ql,{className:"w-5 h-5 fill-current"}):u.jsx(Gt,{className:"w-5 h-5 fill-current translate-x-0.5"})}),u.jsx("button",{id:"player-next-btn",onClick:U,className:`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${v?"text-white hover:text-cyan-400":"text-neutral-700 hover:text-black"}`,title:"Next Track","aria-label":"Next Track",children:u.jsx(fy,{className:"w-5 h-5 fill-current"})}),u.jsx("button",{id:"player-repeat-btn",onClick:()=>Oe(!ke),className:`p-1.5 rounded-full transition-colors hidden sm:block ${ke?"text-cyan-400 font-bold":v?"text-white/40 hover:text-white":"text-neutral-400 hover:text-black"}`,title:ke?"Repeat Active":"Enable Repeat","aria-label":"Repeat",children:u.jsx(ly,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold",children:[u.jsx("span",{className:"text-cyan-400",children:A(R)}),u.jsx("span",{className:"text-white/30",children:"/"}),u.jsx("span",{className:v?"text-white/40":"text-neutral-400",children:A(Ee)})]})]}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[u.jsxs("div",{className:"hidden md:flex items-center gap-2.5 w-36 lg:w-48",children:[u.jsx("span",{className:`text-[10px] font-bold tracking-wider ${v?"text-white/40":"text-neutral-400"}`,children:"VOL"}),u.jsx("button",{onClick:Je,className:`p-1 rounded-md transition-colors ${v?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,"aria-label":Se?"Unmute":"Mute",children:Se||P===0?u.jsx(vy,{className:"w-3.5 h-3.5 text-cyan-400"}):u.jsx(gy,{className:"w-3.5 h-3.5"})}),u.jsx("div",{className:"flex-1 flex items-center",children:u.jsx("input",{id:"player-volume-slider",type:"range",min:"0",max:"100",value:Se?0:P,onChange:me,className:"w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-400","aria-label":"Volume slider"})})]}),u.jsxs("button",{id:"player-queue-modal-btn",onClick:()=>I(!_e),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${_e?"bg-cyan-500 border-cyan-400 text-black font-bold shadow-lg shadow-cyan-500/25":v?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Playlist Queue & Up Next","aria-label":"Toggle Playlist Queue",children:[u.jsx(Gf,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{className:"hidden sm:inline text-[11px] uppercase tracking-wider",children:"Queue"}),u.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-400/20 text-cyan-300 font-mono",children:ue.length})]}),u.jsxs("button",{id:"player-video-modal-btn",onClick:()=>$(!he),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${he?"bg-cyan-500 border-cyan-400 text-black font-bold":v?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Open Video View","aria-label":"Toggle Video Mode",children:[u.jsx(Bs,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{className:"hidden lg:inline text-[11px] uppercase tracking-wider",children:"Video"})]}),u.jsxs("button",{id:"player-share-current-btn",onClick:()=>h(r),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${v?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black hover:bg-neutral-200"}`,title:"Share Song","aria-label":"Share current song",children:[u.jsx(Nt,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{className:"hidden sm:inline text-[11px] uppercase tracking-wider",children:"Share"})]})]})]})})]}),_e&&u.jsxs("div",{id:"player-queue-drawer",className:`fixed bottom-24 sm:bottom-28 right-2 sm:right-6 w-[calc(100vw-16px)] sm:w-96 md:w-[420px] max-h-[70vh] z-50 rounded-2xl border shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden transition-all ${v?"bg-neutral-950/95 border-white/15 text-white shadow-cyan-950/40":"bg-white/95 border-neutral-200 text-neutral-900 shadow-xl"}`,children:[u.jsxs("div",{className:"p-3.5 sm:p-4 border-b border-white/10 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Gf,{className:"w-4 h-4 text-cyan-400"}),u.jsx("h3",{className:"font-bold text-sm tracking-wide",children:"Playlist Queue"}),u.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold",children:[ue.length," Songs"]})]}),u.jsx("button",{onClick:()=>I(!1),className:`p-1.5 rounded-full hover:bg-white/10 transition-colors ${v?"text-white/60 hover:text-white":"text-neutral-500 hover:text-neutral-900"}`,"aria-label":"Close Queue",children:u.jsx(tl,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"p-2 border-b border-white/10 flex items-center gap-1.5 bg-black/20 text-xs",children:[u.jsxs("button",{onClick:()=>Z("current"),className:`flex-1 py-1.5 px-2 rounded-lg font-semibold text-center transition-all ${ee==="current"?"bg-cyan-500 text-black font-bold shadow-sm":v?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:["Current (",E.length,")"]}),(M==null?void 0:M.youtube)&&u.jsxs("button",{onClick:()=>{Z("youtube"),z&&z("youtube")},className:`flex-1 py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${ee==="youtube"?"bg-cyan-500 text-black font-bold shadow-sm":v?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:[u.jsx(On,{className:"w-3 h-3 text-red-500"}),u.jsxs("span",{children:["YouTube (",M.youtube.length,")"]})]}),(M==null?void 0:M.suno)&&u.jsxs("button",{onClick:()=>{Z("suno"),z&&z("suno")},className:`flex-1 py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${ee==="suno"?"bg-cyan-500 text-black font-bold shadow-sm":v?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:[u.jsx(el,{className:"w-3 h-3 text-cyan-400"}),u.jsxs("span",{children:["Suno (",M.suno.length,")"]})]})]}),u.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 max-h-[50vh] divide-y divide-white/5",children:ue.map((D,J)=>{const ie=(r==null?void 0:r.id)===D.id;return u.jsxs("div",{onClick:()=>{T(D),C(!0)},className:`p-2 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition-all ${ie?v?"bg-cyan-500/20 border border-cyan-400/40 text-white shadow-sm":"bg-cyan-50 border border-cyan-300 text-cyan-950 font-medium":v?"hover:bg-white/5 text-white/80 hover:text-white":"hover:bg-neutral-100 text-neutral-800"}`,children:[u.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[u.jsx("span",{className:"font-mono text-[10px] opacity-40 w-4 text-center shrink-0",children:ie?u.jsx("span",{className:"text-cyan-400 font-bold",children:"▶"}):(D.index||J+1).toString().padStart(2,"0")}),u.jsx("div",{className:"w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-neutral-900",children:u.jsx("img",{src:D.thumbnail,alt:D.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"})}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("p",{className:"text-xs font-bold truncate leading-tight",children:D.title}),u.jsx("p",{className:`text-[10px] truncate ${v?"text-white/50":"text-neutral-500"}`,children:D.artist})]})]}),u.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[ie&&B&&u.jsxs("div",{className:"flex items-end gap-0.5 h-2.5",children:[u.jsx("span",{className:"w-0.5 bg-cyan-400 animate-eq-1"}),u.jsx("span",{className:"w-0.5 bg-cyan-300 animate-eq-2"}),u.jsx("span",{className:"w-0.5 bg-purple-400 animate-eq-3"})]}),u.jsx("span",{className:"font-mono text-[10px] opacity-60",children:D.duration})]})]},`${D.id}-${J}`)})})]})]})},Ey=({track:r,isOpen:E,onClose:T,isDarkMode:h})=>{const[v,B]=V.useState(!1);if(!E||!r)return null;const C=typeof window<"u"?window.location.href:"",M=r.youtubeUrl||C,z=`Check out "${r.title}" by DomInNATEly! 🎸🔥`,w=async()=>{try{navigator.clipboard&&(await navigator.clipboard.writeText(M),B(!0),setTimeout(()=>B(!1),2500))}catch{const le=document.createElement("textarea");le.value=M,document.body.appendChild(le),le.select(),document.execCommand("copy"),document.body.removeChild(le),B(!0),setTimeout(()=>B(!1),2500)}},R=async()=>{if(navigator.share)try{await navigator.share({title:`${r.title} - DomInNATEly`,text:z,url:M})}catch{}},_=encodeURIComponent(M),X=encodeURIComponent(`${z} ${M}`),K=encodeURIComponent(`${r.title} - DomInNATEly`),P=[{name:"X (Twitter)",url:`https://twitter.com/intent/tweet?text=${X}`,color:"bg-black text-white hover:bg-neutral-800 border-neutral-700",icon:u.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})},{name:"Facebook",url:`https://www.facebook.com/sharer/sharer.php?u=${_}`,color:"bg-[#1877F2] text-white hover:bg-[#166fe5] border-transparent",icon:u.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})},{name:"WhatsApp",url:`https://api.whatsapp.com/send?text=${X}`,color:"bg-[#25D366] text-white hover:bg-[#20ba59] border-transparent",icon:u.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"})})},{name:"Reddit",url:`https://reddit.com/submit?url=${_}&title=${K}`,color:"bg-[#FF4500] text-white hover:bg-[#e03d00] border-transparent",icon:u.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"})})},{name:"Telegram",url:`https://t.me/share/url?url=${_}&text=${X}`,color:"bg-[#229ED9] text-white hover:bg-[#1f8ec4] border-transparent",icon:u.jsx(uy,{className:"w-4 h-4 fill-current"})}];return u.jsx("div",{id:"share-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity",onClick:T,children:u.jsxs("div",{id:"share-modal-container",className:`w-full max-w-md rounded-2xl border shadow-2xl p-6 relative transition-all ${h?"bg-[#0a0a0a] border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:le=>le.stopPropagation(),children:[u.jsx("button",{id:"close-share-modal",onClick:T,className:`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${h?"text-white/40 hover:text-white hover:bg-white/10":"text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"}`,"aria-label":"Close modal",children:u.jsx(tl,{className:"w-5 h-5"})}),u.jsxs("div",{className:"flex items-start gap-3.5 mb-5",children:[u.jsx("div",{className:"relative w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-black shadow-md",children:u.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"})}),u.jsxs("div",{className:"min-w-0 flex-1 pr-6",children:[u.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-cyan-400 font-bold uppercase tracking-wider mb-0.5",children:[u.jsx(Nt,{className:"w-3.5 h-3.5"}),"Share Track"]}),u.jsx("h3",{className:"font-bold text-base leading-snug truncate",children:r.title}),u.jsxs("p",{className:`text-xs ${h?"text-white/50":"text-neutral-500"}`,children:["by ",u.jsx("span",{className:"font-medium text-cyan-400",children:r.artist})," • ",r.duration]})]})]}),u.jsxs("div",{className:"mb-5",children:[u.jsx("label",{className:`block text-xs font-bold uppercase tracking-wider mb-1.5 ${h?"text-white/50":"text-neutral-600"}`,children:"Track Link"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{id:"share-link-input",type:"text",readOnly:!0,value:M,className:`flex-1 text-xs px-3 py-2.5 rounded-xl border font-mono truncate focus:outline-hidden ${h?"bg-black/60 border-white/10 text-cyan-300":"bg-neutral-50 border-neutral-300 text-neutral-800"}`}),u.jsx("button",{id:"copy-track-link-btn",onClick:w,className:`px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shrink-0 ${v?"bg-emerald-500 text-black":"bg-cyan-500 hover:bg-cyan-400 text-black shadow-md shadow-cyan-500/20"}`,children:v?u.jsxs(u.Fragment,{children:[u.jsx(eu,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Copied"})]}):u.jsxs(u.Fragment,{children:[u.jsx(tu,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Copy"})]})})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:`block text-xs font-bold uppercase tracking-wider mb-2.5 ${h?"text-white/50":"text-neutral-600"}`,children:"Share on Social Networks"}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5",children:[P.map(le=>u.jsxs("a",{href:le.url,target:"_blank",rel:"noopener noreferrer",className:`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border shadow-xs transition-transform active:scale-95 ${le.color}`,children:[le.icon,u.jsx("span",{children:le.name})]},le.name)),u.jsxs("a",{href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FF0000] text-white hover:bg-[#d90000] shadow-xs active:scale-95 transition-transform",children:[u.jsx(zs,{className:"w-4 h-4 fill-current"}),u.jsx("span",{children:"YouTube"})]})]})]}),typeof navigator<"u"&&"share"in navigator&&u.jsx("div",{className:"mt-4 pt-4 border-t border-white/10",children:u.jsxs("button",{id:"native-device-share-btn",onClick:R,className:`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all ${h?"bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-cyan-400":"bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"}`,children:[u.jsx(Nt,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"Open Device Share Sheet"})]})})]})})},By=({track:r,isOpen:E,onClose:T,isPlaying:h,isCurrentTrack:v,onPlay:B,onOpenShare:C,isDarkMode:M})=>!E||!r?null:u.jsx("div",{id:"track-detail-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md",onClick:T,children:u.jsxs("div",{id:"track-detail-container",className:`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden transition-all relative ${M?"bg-[#0a0a0a] border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:z=>z.stopPropagation(),children:[u.jsx("button",{id:"close-track-detail-btn",onClick:T,className:"absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white border border-white/10 backdrop-blur-sm transition-colors","aria-label":"Close track details",children:u.jsx(tl,{className:"w-5 h-5"})}),u.jsxs("div",{className:"relative aspect-video w-full bg-black",children:[u.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"}),u.jsxs("div",{className:"absolute bottom-4 left-6 flex items-center gap-3",children:[u.jsx("button",{onClick:()=>B(r),className:"w-12 h-12 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center shadow-xl shadow-cyan-950/60 font-bold transform active:scale-95 transition-transform",children:v&&h?u.jsx(ql,{className:"w-5 h-5 fill-current"}):u.jsx(Gt,{className:"w-5 h-5 fill-current translate-x-0.5"})}),u.jsxs("div",{children:[u.jsxs("span",{className:"text-xs uppercase font-mono font-bold text-cyan-400",children:["Track #",r.index.toString().padStart(2,"0")]}),u.jsx("h2",{className:"text-xl font-bold leading-tight drop-shadow-md text-white",children:r.title})]})]})]}),u.jsxs("div",{className:"p-6",children:[u.jsxs("div",{className:`flex items-center justify-between gap-4 pb-4 border-b ${M?"border-white/10":"border-neutral-200"}`,children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-xs text-white/40",children:"Artist / Band"}),u.jsx("p",{className:"text-sm font-bold text-cyan-400",children:r.artist})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-xs text-white/40",children:"Duration"}),u.jsxs("p",{className:"text-sm font-mono font-semibold flex items-center gap-1 text-cyan-400",children:[u.jsx(Kf,{className:"w-3.5 h-3.5"}),r.duration]})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-xs text-white/40",children:"Category"}),u.jsx("p",{className:"text-sm font-semibold capitalize text-white/90",children:r.category})]})]}),r.description&&u.jsxs("div",{className:"mt-4",children:[u.jsx("h4",{className:"text-xs uppercase font-semibold tracking-wider text-white/40 mb-1.5",children:"Track Background"}),u.jsx("p",{className:`text-sm leading-relaxed ${M?"text-white/70":"text-neutral-700"}`,children:r.description})]}),r.featuredLyrics&&u.jsxs("div",{className:`mt-4 p-4 rounded-2xl border ${M?"bg-white/5 border-white/10":"bg-neutral-50 border-neutral-200"}`,children:[u.jsxs("h4",{className:"text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 mb-1.5 flex items-center gap-1.5",children:[u.jsx(au,{className:"w-3.5 h-3.5"}),"Featured Lyrics Snippet"]}),u.jsxs("p",{className:"text-sm italic leading-relaxed font-serif opacity-90",children:["“",r.featuredLyrics,"”"]})]}),u.jsxs("div",{className:"mt-6 flex items-center gap-3",children:[u.jsxs("button",{onClick:()=>C(r),className:"flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95",children:[u.jsx(Nt,{className:"w-4 h-4"}),u.jsx("span",{children:"Share Song"})]}),u.jsxs("a",{href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:`py-2.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${M?"bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-cyan-400":"bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"}`,children:[u.jsx(zs,{className:"w-4 h-4 text-[#FF0000]"}),u.jsx("span",{children:"Watch on YouTube"})]})]})]})]})}),zy=({track:r,isPlaying:E,isCurrentTrack:T,onPlay:h,onOpenLyrics:v,onOpenEmbed:B,onOpenShare:C,isDarkMode:M})=>{const w=(R=>R&&R.split(`
`).map(X=>X.trim()).filter(X=>X&&!X.startsWith("[")&&!X.startsWith("**[")).slice(0,2).join(" / ")||null)(r.lyrics);return u.jsxs("div",{id:`suno-track-card-${r.id}`,className:`group relative rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden ${T?M?"bg-white/[0.08] border-cyan-500/50 shadow-lg shadow-cyan-500/10":"bg-cyan-50/70 border-cyan-400 shadow-md":M?"bg-neutral-900/60 border-white/5 hover:border-white/20 hover:bg-neutral-900/90":"bg-white border-neutral-200 hover:border-neutral-300 shadow-sm"}`,children:[u.jsxs("div",{onClick:()=>h(r),className:"relative aspect-square w-full overflow-hidden bg-neutral-950 cursor-pointer",children:[u.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",loading:"lazy",crossOrigin:"anonymous"}),u.jsxs("div",{className:"absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white font-mono text-[11px] font-bold border border-white/10",children:["#",r.index]}),u.jsx("div",{className:"absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-cyan-300 font-mono text-[11px] font-bold border border-white/10",children:r.durationFormatted}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity"}),u.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:u.jsx("button",{type:"button",onClick:R=>{R.stopPropagation(),h(r)},"aria-label":T&&E?"Pause track":"Play track",className:`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all transform duration-300 active:scale-95 ${T&&E?"bg-cyan-400 text-black shadow-cyan-500/50 scale-105 ring-4 ring-cyan-400/40":"bg-white/90 text-black hover:bg-cyan-400 opacity-90 group-hover:opacity-100 group-hover:scale-110 shadow-lg"}`,children:T&&E?u.jsx(ql,{className:"w-6 h-6 fill-current"}):u.jsx(Gt,{className:"w-6 h-6 fill-current translate-x-0.5"})})}),T&&E&&u.jsxs("div",{className:"absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-400/40 flex items-center gap-1",children:[u.jsx("div",{className:"w-1 h-3 bg-cyan-400 animate-pulse"}),u.jsx("div",{className:"w-1 h-4 bg-cyan-400 animate-pulse delay-75"}),u.jsx("div",{className:"w-1 h-2 bg-cyan-400 animate-pulse delay-150"}),u.jsx("span",{className:"text-[10px] font-mono font-bold text-cyan-300 ml-1 uppercase",children:"Playing"})]})]}),u.jsxs("div",{className:"p-4 sm:p-5 flex-1 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"flex items-start justify-between gap-2",children:u.jsx("h3",{onClick:()=>h(r),className:"font-bold text-sm sm:text-base leading-snug hover:text-cyan-400 cursor-pointer line-clamp-2 transition-colors",children:r.title})}),u.jsxs("p",{className:"text-xs text-cyan-400/90 font-mono mt-1 flex items-center gap-1.5",children:[u.jsxs("span",{children:["@",r.handle]}),u.jsx("span",{className:"opacity-40",children:"•"}),u.jsx("span",{className:"opacity-75",children:"Suno v4.5"})]}),w&&u.jsxs("div",{onClick:()=>v(r),className:`mt-3 p-2.5 rounded-lg text-xs italic line-clamp-2 border transition-colors cursor-pointer ${M?"bg-white/5 border-white/5 text-white/70 hover:border-cyan-400/30 hover:text-white":"bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-cyan-500/40"}`,children:['"',w,'..."']}),r.tags&&r.tags.length>0&&u.jsx("div",{className:"flex flex-wrap gap-1 mt-3",children:r.tags.slice(0,3).map((R,_)=>u.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-md font-mono border ${M?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-200 text-neutral-600"}`,children:R},_))})]}),u.jsxs("div",{className:"pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("button",{onClick:()=>v(r),className:`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 border transition-colors ${M?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"View full lyrics",children:[u.jsx($f,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"Lyrics"})]}),u.jsx("button",{onClick:()=>B(r),className:`p-1.5 rounded-md text-xs font-semibold border transition-colors ${M?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Open Suno player / video",children:u.jsx(Bs,{className:"w-3.5 h-3.5 text-cyan-400"})}),u.jsx("button",{onClick:()=>C(r),className:`p-1.5 rounded-md text-xs border transition-colors ${M?"bg-white/5 border-white/10 text-white/70 hover:text-white":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Share track",children:u.jsx(Nt,{className:"w-3.5 h-3.5"})})]}),u.jsxs("a",{href:r.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:"text-[11px] font-mono text-cyan-400 hover:underline flex items-center gap-1",title:"View on Suno.com",children:[u.jsx("span",{children:"Suno"}),u.jsx(St,{className:"w-3 h-3"})]})]})]})]})},Cy=({track:r,onClose:E,isDarkMode:T,onPlayTrack:h,isPlaying:v,isCurrentTrack:B})=>{const[C,M]=V.useState(!1);if(!r)return null;const z=()=>{navigator.clipboard.writeText(r.lyrics||""),M(!0),setTimeout(()=>M(!1),2e3)},w=R=>{if(!R||R.trim()==="")return u.jsx("div",{className:"py-12 text-center text-sm opacity-60",children:"Instrumental or no written lyrics provided for this track."});const _=R.split(`
`);return u.jsx("div",{className:"space-y-2 font-mono text-xs sm:text-sm leading-relaxed",children:_.map((X,K)=>{const P=X.trim(),le=P.startsWith("**[")||P.startsWith("[")||P.endsWith("]**")||P.endsWith("]"),Se=P.startsWith("*")&&P.endsWith("*");return le?u.jsx("div",{className:"pt-3 pb-1 text-cyan-400 font-bold tracking-wider uppercase text-[11px] sm:text-xs",children:P.replace(/\*\*/g,"")},K):P?u.jsx("div",{className:`${Se?"italic opacity-80":T?"text-white/90":"text-neutral-800"}`,children:P.replace(/\*\*/g,"").replace(/\*/g,"")},K):u.jsx("div",{className:"h-2"},K)})})};return u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity",onClick:E,children:u.jsxs("div",{className:`relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl border overflow-hidden ${T?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:R=>R.stopPropagation(),children:[u.jsxs("div",{className:`p-4 sm:p-5 border-b flex items-center justify-between gap-4 ${T?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[u.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[u.jsx("img",{src:r.image,alt:r.title,className:"w-12 h-12 rounded-lg object-cover shadow border border-white/10",crossOrigin:"anonymous"}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("h3",{className:"font-bold text-base sm:text-lg truncate tracking-tight",children:r.title}),u.jsxs("p",{className:"text-xs text-cyan-400 font-medium truncate",children:[r.artist," • ",r.durationFormatted]})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("button",{onClick:z,className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${T?"bg-white/5 border-white/10 hover:bg-white/10 text-white/80":"bg-white border-neutral-300 hover:bg-neutral-100 text-neutral-700"}`,title:"Copy Lyrics",children:[C?u.jsx(eu,{className:"w-3.5 h-3.5 text-emerald-400"}):u.jsx(tu,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:C?"Copied":"Copy"})]}),u.jsxs("a",{href:r.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${T?"bg-white/5 border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 text-white/80":"bg-white border-neutral-300 hover:text-cyan-600 text-neutral-700"}`,title:"Open on Suno.com",children:[u.jsx("span",{className:"hidden sm:inline",children:"Suno"}),u.jsx(St,{className:"w-3.5 h-3.5"})]}),u.jsx("button",{onClick:E,className:`p-2 rounded-lg transition-colors ${T?"hover:bg-white/10 text-white/70":"hover:bg-neutral-200 text-neutral-600"}`,"aria-label":"Close",children:u.jsx(tl,{className:"w-5 h-5"})})]})]}),r.tags&&r.tags.length>0&&u.jsxs("div",{className:`px-5 py-2.5 border-b flex flex-wrap gap-1.5 text-[11px] ${T?"border-white/5 bg-black/40":"border-neutral-100 bg-neutral-100/50"}`,children:[u.jsx("span",{className:"opacity-50 uppercase tracking-wider text-[10px] self-center mr-1 font-mono",children:"Styles:"}),r.tags.map((R,_)=>u.jsx("span",{className:`px-2 py-0.5 rounded-full border ${T?"bg-white/5 border-white/10 text-white/80":"bg-white border-neutral-200 text-neutral-700"}`,children:R},_))]}),u.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 custom-scrollbar",children:w(r.lyrics)}),u.jsxs("div",{className:`p-4 border-t flex items-center justify-between gap-3 text-xs ${T?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[u.jsxs("div",{className:"flex items-center gap-2 text-white/50 text-[11px]",children:[u.jsx(el,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"AI-generated vocals and production via Suno v4.5"})]}),h&&u.jsxs("button",{onClick:()=>h(r),className:"px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20",children:[u.jsx(eh,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:B&&v?"Pause Audio":"Play Audio"})]})]})]})})},My=({track:r,onClose:E,isDarkMode:T})=>{const[h,v]=V.useState("embed");return r?u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all",onClick:E,children:u.jsxs("div",{className:`relative w-full max-w-3xl flex flex-col rounded-2xl shadow-2xl border overflow-hidden ${T?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:B=>B.stopPropagation(),children:[u.jsxs("div",{className:`p-4 border-b flex items-center justify-between gap-3 ${T?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[u.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[u.jsx("div",{className:"w-9 h-9 rounded-lg overflow-hidden border border-white/10 flex-shrink-0",children:u.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover"})}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("h3",{className:"font-bold text-sm sm:text-base truncate tracking-tight",children:r.title}),u.jsx("p",{className:"text-[11px] text-cyan-400 font-mono truncate",children:r.artist})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("div",{className:`flex items-center p-1 rounded-lg border text-xs font-semibold ${T?"bg-black/50 border-white/10":"bg-neutral-100 border-neutral-300"}`,children:[u.jsxs("button",{onClick:()=>v("embed"),className:`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${h==="embed"?"bg-cyan-500 text-black font-bold shadow-sm":T?"text-white/70 hover:text-white":"text-neutral-600 hover:text-black"}`,children:[u.jsx(Jf,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Suno Embed"})]}),u.jsxs("button",{onClick:()=>v("video"),className:`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${h==="video"?"bg-cyan-500 text-black font-bold shadow-sm":T?"text-white/70 hover:text-white":"text-neutral-600 hover:text-black"}`,children:[u.jsx(by,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Video MP4"})]})]}),u.jsx("a",{href:r.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${T?"bg-white/5 border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 text-white/80":"bg-white border-neutral-300 hover:text-cyan-600 text-neutral-700"}`,title:"Open song on Suno",children:u.jsx(St,{className:"w-3.5 h-3.5"})}),u.jsx("button",{onClick:E,className:`p-2 rounded-lg transition-colors ${T?"hover:bg-white/10 text-white/70":"hover:bg-neutral-200 text-neutral-600"}`,"aria-label":"Close",children:u.jsx(tl,{className:"w-5 h-5"})})]})]}),u.jsx("div",{className:"relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden",children:h==="embed"?u.jsx("iframe",{src:encodeURI(r.embedUrl||""),title:`Suno Embed - ${r.title}`,className:"w-full h-full border-0",allow:"autoplay",loading:"lazy"}):u.jsx("video",{src:encodeURI(r.videoUrl||""),controls:!0,autoPlay:!0,className:"w-full h-full object-contain",poster:r.image})}),u.jsxs("div",{className:`p-3.5 border-t flex items-center justify-between text-xs ${T?"border-white/10 bg-white/5 text-white/60":"border-neutral-200 bg-neutral-50 text-neutral-600"}`,children:[u.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[u.jsx(el,{className:"w-3 h-3 text-cyan-400"}),u.jsx("span",{children:"Interactive player hosted by Suno.ai"})]}),u.jsxs("a",{href:"https://suno.com/playlist/26af3597-73d4-491c-a9b3-aac9a0d55c82",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-400 underline underline-offset-2 flex items-center gap-1 font-mono text-[11px]",children:[u.jsx("span",{children:"DomInNATEly Top Hits Playlist"}),u.jsx(St,{className:"w-3 h-3"})]})]})]})}):null},_y=({track:r,isOpen:E,onClose:T,isDarkMode:h})=>{const[v,B]=V.useState(!1),[C,M]=V.useState(!1);if(!E)return null;const z=r?r.sunoUrl:tt.url,w=r?r.title:tt.name,R=r?r.artist:`Curated playlist by ${tt.user_display_name}`,_=async()=>{try{await navigator.clipboard.writeText(z),B(!0),setTimeout(()=>B(!1),2e3)}catch{}},X=async()=>{try{await navigator.clipboard.writeText(tt.url),M(!0),setTimeout(()=>M(!1),2e3)}catch{}},K=async()=>{if(navigator.share)try{await navigator.share({title:`${w} - DomInNATEly`,text:`Listen to "${w}" on Suno!`,url:z})}catch{}};return u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity",onClick:T,children:u.jsxs("div",{className:`relative w-full max-w-md rounded-2xl p-6 shadow-2xl border ${h?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:P=>P.stopPropagation(),children:[u.jsxs("div",{className:"flex items-start justify-between mb-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",children:u.jsx(Nt,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-base",children:r?"Share Track":"Share Playlist"}),u.jsx("p",{className:"text-xs opacity-60",children:"Spread the sound of DomInNATEly"})]})]}),u.jsx("button",{onClick:T,className:"p-1 rounded-lg hover:bg-white/10 transition-colors opacity-70 hover:opacity-100",children:u.jsx(tl,{className:"w-5 h-5"})})]}),u.jsxs("div",{className:`p-3 rounded-xl border flex items-center gap-3 mb-5 ${h?"bg-white/5 border-white/10":"bg-neutral-50 border-neutral-200"}`,children:[u.jsx("img",{src:r?r.image:tt.cover,alt:w,className:"w-12 h-12 rounded-lg object-cover border border-white/10"}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("h4",{className:"font-bold text-sm truncate",children:w}),u.jsx("p",{className:"text-xs text-cyan-400 truncate",children:R})]})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-[11px] font-mono uppercase tracking-wider opacity-60 block mb-1.5",children:r?"Track Suno Link":"Playlist Suno Link"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"text",readOnly:!0,value:z,className:`flex-1 px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${h?"bg-neutral-900 border-white/10 text-white/90":"bg-neutral-100 border-neutral-300 text-neutral-800"}`}),u.jsxs("button",{onClick:_,className:"px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20",children:[v?u.jsx(eu,{className:"w-4 h-4 text-black"}):u.jsx(tu,{className:"w-4 h-4"}),u.jsx("span",{children:v?"Copied":"Copy"})]})]})]}),r&&u.jsxs("div",{children:[u.jsx("label",{className:"text-[11px] font-mono uppercase tracking-wider opacity-60 block mb-1.5",children:"DomInNATEly Top Hits Playlist Link"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"text",readOnly:!0,value:tt.url,className:`flex-1 px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${h?"bg-neutral-900 border-white/10 text-white/90":"bg-neutral-100 border-neutral-300 text-neutral-800"}`}),u.jsxs("button",{onClick:X,className:`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${h?"bg-white/5 border-white/10 text-white hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[C?u.jsx(eu,{className:"w-4 h-4 text-emerald-400"}):u.jsx(tu,{className:"w-4 h-4"}),u.jsx("span",{children:C?"Copied":"Copy"})]})]})]})]}),typeof navigator<"u"&&"share"in navigator&&u.jsxs("button",{onClick:K,className:"w-full mt-4 py-2.5 rounded-xl border border-white/15 hover:border-cyan-400/50 flex items-center justify-center gap-2 text-xs font-bold transition-all",children:[u.jsx(Nt,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:"Open System Share Menu"})]}),u.jsxs("div",{className:"mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs",children:[u.jsxs("a",{href:tt.url,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-[11px]",children:[u.jsx("span",{children:"Open Playlist on Suno"}),u.jsx(St,{className:"w-3 h-3"})]}),u.jsx("button",{onClick:T,className:"opacity-60 hover:opacity-100 text-xs",children:"Close"})]})]})})},Uy=({isDarkMode:r,currentTrack:E,isPlaying:T,onPlayTrack:h,onTogglePlayPause:v,onTrackChange:B,onSwitchToYouTube:C})=>{const[M,z]=V.useState(""),[w,R]=V.useState("all"),[_,X]=V.useState("index"),[K,P]=V.useState("grid"),[le,Se]=V.useState(null),[Me,Ye]=V.useState(null),[Be,ke]=V.useState(null),Oe=V.useMemo(()=>[{id:"all",label:"All Tracks"},{id:"rock",label:"Rock & Alt Pop"},{id:"hip-hop",label:"Rap & Hip-Hop"},{id:"trap",label:"Trap & Dubstep"},{id:"duet",label:"Duets"},{id:"ballad",label:"Ballads"}],[]),he=V.useMemo(()=>{let I=[...It];if(M.trim()!==""){const ee=M.toLowerCase().trim();I=I.filter(Z=>Z.title.toLowerCase().includes(ee)||Z.artist.toLowerCase().includes(ee)||Z.tags.some(ue=>ue.toLowerCase().includes(ee))||Z.lyrics.toLowerCase().includes(ee))}return w!=="all"&&(I=I.filter(ee=>{const Z=(ee.tags.join(" ")+" "+ee.title+" "+ee.lyrics).toLowerCase();return w==="rock"?Z.includes("rock")||Z.includes("pop")||Z.includes("punk"):w==="hip-hop"?Z.includes("rap")||Z.includes("hip-hop")||Z.includes("hip hop"):w==="trap"?Z.includes("trap")||Z.includes("dubstep")||Z.includes("halftime"):w==="duet"?Z.includes("duet")||Z.includes("female vocals"):w==="ballad"?Z.includes("ballad")||Z.includes("acoustic")||Z.includes("piano"):!0})),I.sort((ee,Z)=>_==="title"?ee.title.localeCompare(Z.title):_==="duration-desc"?Z.duration-ee.duration:_==="duration-asc"?ee.duration-Z.duration:ee.index-Z.index),I},[M,w,_]),$=()=>{he.length>0&&h(he[0])},_e=()=>{if(he.length>0){const I=Math.floor(Math.random()*he.length);h(he[I])}};return u.jsxs("div",{className:"w-full flex flex-col",children:[u.jsxs("section",{id:"suno-hero-banner",className:`relative overflow-hidden rounded-3xl border mb-8 p-6 sm:p-8 md:p-10 transition-colors ${r?"bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 border-white/10 shadow-2xl":"bg-gradient-to-br from-cyan-50/80 via-white to-neutral-100 border-neutral-200 shadow-lg"}`,children:[u.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"}),u.jsx("div",{className:"absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"}),u.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8",children:[u.jsxs("div",{className:"relative flex-shrink-0 group",children:[u.jsx("div",{className:"w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-neutral-900",children:u.jsx("img",{src:tt.cover,alt:tt.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",crossOrigin:"anonymous"})}),u.jsxs("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-black font-mono font-bold text-[10px] tracking-wider uppercase shadow-lg shadow-cyan-500/30 flex items-center gap-1.5 whitespace-nowrap",children:[u.jsx(Ff,{className:"w-3 h-3 fill-current"}),u.jsx("span",{children:"Suno Top Hits"})]})]}),u.jsxs("div",{className:"flex-1 text-center md:text-left flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3",children:[u.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-cyan-400/15 text-cyan-400 border border-cyan-400/30 flex items-center gap-1.5",children:[u.jsx(el,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Suno Playlist"})]}),u.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:"20 Curated Tracks"}),u.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:"1 hr 26 min"})]}),u.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight",children:tt.name}),u.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium",children:[u.jsx("span",{className:"text-cyan-400 font-bold",children:tt.user_display_name}),u.jsx("span",{className:"opacity-40",children:"•"}),u.jsxs("span",{className:"font-mono text-xs opacity-75",children:["@",tt.user_handle]}),u.jsx("span",{className:"opacity-40",children:"•"}),u.jsxs("a",{href:`https://www.tiktok.com/${tt.tiktok_handle}`,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[u.jsxs("span",{children:["TikTok: ",tt.tiktok_handle]}),u.jsx(St,{className:"w-3 h-3"})]})]}),u.jsxs("p",{className:`mt-3 text-sm max-w-2xl leading-relaxed ${r?"text-white/70":"text-neutral-600"}`,children:[tt.description,". Stream the official Suno AI audio collection featuring high-fidelity guitars, dual vocal anthems, hard-hitting trap beats, and psychological lyricism."]})]}),u.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3",children:[u.jsxs("button",{id:"suno-play-all-btn",onClick:$,className:"px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-400/25 transition-transform active:scale-95",children:[u.jsx(Gt,{className:"w-4 h-4 fill-current"}),u.jsx("span",{children:"Play All"})]}),u.jsxs("button",{id:"suno-shuffle-all-btn",onClick:_e,className:`px-4 py-2.5 rounded-full border text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[u.jsx(lu,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:"Shuffle"})]}),u.jsxs("a",{id:"suno-open-official-btn",href:tt.url,target:"_blank",rel:"noopener noreferrer",className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[u.jsx("span",{children:"Open on Suno"}),u.jsx(St,{className:"w-3.5 h-3.5 opacity-70"})]}),C&&u.jsxs("button",{id:"switch-to-youtube-hero-btn",onClick:C,className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-red-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-red-700 hover:bg-neutral-200"}`,children:[u.jsx(On,{className:"w-4 h-4 text-red-500"}),u.jsx("span",{children:"Switch to YouTube Gallery (18)"})]}),u.jsx("button",{onClick:()=>ke(null),className:`p-2.5 rounded-full border transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,title:"Share Playlist",children:u.jsx(Nt,{className:"w-4 h-4"})})]})]})]})]}),u.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6",children:[u.jsxs("div",{className:"relative flex-1 max-w-md",children:[u.jsx(th,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50"}),u.jsx("input",{id:"suno-search-input",type:"text",placeholder:"Search Suno tracks, lyrics, styles...",value:M,onChange:I=>z(I.target.value),className:`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none transition-colors ${r?"bg-neutral-900 border-white/10 text-white placeholder-white/40 focus:border-cyan-400/60":"bg-white border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-cyan-500"}`})]}),u.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-3",children:[u.jsxs("select",{id:"suno-sort-select",value:_,onChange:I=>X(I.target.value),className:`px-3 py-2 rounded-xl text-xs font-semibold border focus:outline-none cursor-pointer ${r?"bg-neutral-900 border-white/10 text-white":"bg-white border-neutral-300 text-neutral-800"}`,children:[u.jsx("option",{value:"index",children:"Tracklist Order (#1 - #20)"}),u.jsx("option",{value:"title",children:"Title (A to Z)"}),u.jsx("option",{value:"duration-desc",children:"Duration (Longest first)"}),u.jsx("option",{value:"duration-asc",children:"Duration (Shortest first)"})]}),u.jsxs("div",{className:`flex items-center p-1 rounded-xl border ${r?"border-white/10 bg-white/5":"border-neutral-300 bg-neutral-100"}`,children:[u.jsxs("button",{id:"suno-view-grid",onClick:()=>P("grid"),className:`p-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${K==="grid"?"bg-cyan-500 text-black shadow-sm":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"Grid View",children:[u.jsx(Wf,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"Grid"})]}),u.jsxs("button",{id:"suno-view-list",onClick:()=>P("list"),className:`p-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${K==="list"?"bg-cyan-500 text-black shadow-sm":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"List View",children:[u.jsx(Pf,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"List"})]})]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-3 mb-6 custom-scrollbar",children:[Oe.map(I=>u.jsx("button",{id:`suno-filter-tag-${I.id}`,onClick:()=>R(I.id),className:`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${w===I.id?"bg-cyan-500 text-black border-cyan-400 font-bold shadow-md shadow-cyan-500/20":r?"bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white":"bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100"}`,children:I.label},I.id)),u.jsxs("span",{className:"text-[11px] font-mono opacity-50 ml-auto whitespace-nowrap",children:["Showing ",he.length," of ",It.length," tracks"]})]}),he.length>0?K==="grid"?u.jsx("div",{id:"suno-tracks-grid",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:he.map(I=>u.jsx(zy,{track:I,isPlaying:T,isCurrentTrack:(E==null?void 0:E.id)===I.id,onPlay:ee=>h(ee),onOpenLyrics:ee=>Se(ee),onOpenEmbed:ee=>Ye(ee),onOpenShare:ee=>ke(ee),isDarkMode:r},I.id))}):u.jsxs("div",{id:"suno-tracks-list",className:"flex flex-col gap-2.5",children:[u.jsxs("div",{className:`grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 ${r?"text-white/40":"text-neutral-500"}`,children:[u.jsx("div",{className:"col-span-1 text-center",children:"#"}),u.jsx("div",{className:"col-span-6 sm:col-span-5",children:"Track Info"}),u.jsx("div",{className:"hidden sm:block sm:col-span-3",children:"Style / Genre"}),u.jsx("div",{className:"col-span-3 sm:col-span-2 text-right sm:text-left",children:"Duration"}),u.jsx("div",{className:"col-span-2 sm:col-span-1 text-right",children:"Actions"})]}),he.map(I=>{const ee=(E==null?void 0:E.id)===I.id;return u.jsxs("div",{id:`suno-list-item-${I.id}`,className:`group p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${ee?r?"bg-cyan-950/40 border-cyan-500/40 text-cyan-300":"bg-cyan-50 border-cyan-300 text-cyan-900":r?"bg-neutral-900/50 border-white/5 hover:border-white/15 hover:bg-neutral-900":"bg-white border-neutral-200 hover:border-neutral-300 shadow-sm"}`,children:[u.jsxs("div",{onClick:()=>h(I),className:"grid grid-cols-12 items-center flex-1 min-w-0",children:[u.jsx("div",{className:"col-span-1 flex items-center justify-center font-mono text-xs opacity-60",children:ee&&T?u.jsx("div",{className:"w-3 h-3 rounded-full bg-cyan-400 animate-ping"}):u.jsx("span",{children:I.index})}),u.jsxs("div",{className:"col-span-6 sm:col-span-5 flex items-center gap-3 min-w-0 pr-3",children:[u.jsxs("div",{className:"relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900",children:[u.jsx("img",{src:I.image,alt:I.title,className:"w-full h-full object-cover",crossOrigin:"anonymous"}),u.jsx("div",{className:"absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:u.jsx(Gt,{className:"w-3.5 h-3.5 fill-white text-white"})})]}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("h4",{className:"font-bold text-xs sm:text-sm truncate",children:I.title}),u.jsxs("p",{className:"text-[11px] opacity-60 truncate",children:["@",I.handle]})]})]}),u.jsx("div",{className:"hidden sm:flex sm:col-span-3 items-center gap-1 pr-3 overflow-hidden",children:I.tags&&I.tags.length>0?I.tags.slice(0,2).map((Z,ue)=>u.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded font-mono truncate border border-white/10 opacity-70",children:Z},ue)):u.jsx("span",{className:"text-[10px] opacity-40 italic",children:"Suno v4.5"})}),u.jsx("div",{className:"col-span-3 sm:col-span-2 text-right sm:text-left font-mono text-xs opacity-75",children:I.durationFormatted})]}),u.jsxs("div",{className:"flex items-center gap-1.5 ml-2",children:[u.jsx("button",{onClick:Z=>{Z.stopPropagation(),Se(I)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Lyrics",children:u.jsx($f,{className:"w-3.5 h-3.5"})}),u.jsx("button",{onClick:Z=>{Z.stopPropagation(),Ye(I)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Watch Video",children:u.jsx(Bs,{className:"w-3.5 h-3.5"})}),u.jsx("button",{onClick:Z=>{Z.stopPropagation(),ke(I)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Share",children:u.jsx(Nt,{className:"w-3.5 h-3.5"})})]})]},I.id)})]}):u.jsxs("div",{className:"py-20 text-center rounded-2xl border border-dashed border-white/15 my-6",children:[u.jsx(au,{className:"w-10 h-10 mx-auto text-cyan-400/50 mb-3"}),u.jsxs("p",{className:"font-bold text-base",children:['No tracks found matching "',M,'"']}),u.jsx("p",{className:"text-xs opacity-60 mt-1",children:'Try clearing your search query or selecting "All Tracks"'}),u.jsx("button",{onClick:()=>{z(""),R("all")},className:"mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold",children:"Reset Filters"})]}),u.jsx(Cy,{track:le,onClose:()=>Se(null),isDarkMode:r,onPlayTrack:I=>h(I),isPlaying:T,isCurrentTrack:(E==null?void 0:E.id)===(le==null?void 0:le.id)}),u.jsx(My,{track:Me,onClose:()=>Ye(null),isDarkMode:r}),u.jsx(_y,{track:Be,isOpen:!!(Be||Be===null&&!1),onClose:()=>ke(null),isDarkMode:r})]})};function Yy(){const[r,E]=V.useState(()=>{if(typeof window<"u"){const f=localStorage.getItem("dominnately_theme");return f?f==="dark":!0}return!0}),[T,h]=V.useState("youtube"),[v,B]=V.useState(Ut[0]),[C,M]=V.useState(!1),[z,w]=V.useState(It[0]),[R,_]=V.useState(!1),[X,K]=V.useState(""),[P,le]=V.useState("playlist"),[Se,Me]=V.useState("all"),[Ye,Be]=V.useState("grid"),[ke,Oe]=V.useState(null),[he,$]=V.useState(null);V.useEffect(()=>{localStorage.setItem("dominnately_theme",r?"dark":"light"),r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]);const _e=V.useMemo(()=>It.map(Lf),[]),I=f=>{(v==null?void 0:v.id)===f.id?M(!C):(B(f),M(!0))},ee=f=>{w(f);const k=Lf(f);(v==null?void 0:v.id)===k.id?(M(!C),_(!C)):(B(k),M(!0),_(!0))},Z=V.useMemo(()=>v!=null&&v.isSuno&&It.find(f=>f.id===v.id)||z,[v,z]),ue=V.useMemo(()=>{let f=[...Ut];if(X.trim()!==""){const k=X.toLowerCase().trim();f=f.filter(O=>O.title.toLowerCase().includes(k)||O.artist.toLowerCase().includes(k)||O.featuredLyrics&&O.featuredLyrics.toLowerCase().includes(k)||O.tags.some(re=>re.toLowerCase().includes(k))||O.description&&O.description.toLowerCase().includes(k))}return Se!=="all"&&(f=f.filter(k=>k.category===Se)),f.sort((k,O)=>{switch(P){case"playlist":return k.index-O.index;case"newest":return O.index-k.index;case"duration-desc":return O.durationSeconds-k.durationSeconds;case"duration-asc":return k.durationSeconds-O.durationSeconds;case"title-asc":return k.title.localeCompare(O.title);case"title-desc":return O.title.localeCompare(k.title);default:return k.index-O.index}}),f},[X,Se,P]),Ht=V.useMemo(()=>T==="suno"||v!=null&&v.isSuno?_e:ue.length>0?ue:Ut,[T,v==null?void 0:v.isSuno,_e,ue]),dt=()=>{ue.length>0&&(B(ue[0]),M(!0))},Y=()=>{if(ue.length>0){const f=Math.floor(Math.random()*ue.length);B(ue[f]),M(!0)}};return u.jsxs("div",{className:`min-h-screen font-outfit transition-colors duration-200 flex flex-col ${r?"bg-[#050505] text-white":"bg-neutral-50 text-neutral-900"}`,children:[u.jsx(Ny,{isDarkMode:r,onToggleDarkMode:()=>E(!r),trackCount:T==="suno"?It.length:Ut.length,onQuickShareAll:()=>Oe(v||Ut[0])}),u.jsxs("main",{className:"flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-36",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-6",children:[u.jsxs("button",{id:"tab-youtube-gallery",onClick:()=>{h("youtube")},className:`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all border shadow-sm ${T==="youtube"?"bg-cyan-500 text-black border-cyan-400 shadow-cyan-500/25 ring-2 ring-cyan-400/40":r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[u.jsx(On,{className:"w-4 h-4"}),u.jsxs("span",{children:["YouTube Audio Gallery (",Ut.length," Tracks)"]})]}),u.jsxs("button",{id:"tab-suno-playlist",onClick:()=>{h("suno")},className:`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all border shadow-sm ${T==="suno"?"bg-cyan-500 text-black border-cyan-400 shadow-cyan-500/25 ring-2 ring-cyan-400/40":r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[u.jsx(el,{className:"w-4 h-4 text-cyan-400"}),u.jsxs("span",{children:["Suno AI Playlist (",It.length," Tracks)"]})]})]}),T==="suno"?u.jsx(Uy,{isDarkMode:r,currentTrack:Z,isPlaying:C&&!!(v!=null&&v.isSuno),onPlayTrack:ee,onTogglePlayPause:()=>{M(!C),_(!C)},onTrackChange:ee,onSwitchToYouTube:()=>h("youtube")}):u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"youtube-hero-banner",className:`relative overflow-hidden rounded-3xl border mb-8 p-6 sm:p-8 md:p-10 transition-colors ${r?"bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 border-white/10 shadow-2xl":"bg-gradient-to-br from-red-50/70 via-white to-neutral-100 border-neutral-200 shadow-lg"}`,children:[u.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none"}),u.jsx("div",{className:"absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"}),u.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8",children:[u.jsxs("div",{className:"relative flex-shrink-0 group",children:[u.jsx("div",{className:"w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-neutral-900",children:u.jsx("img",{src:ra.cover,alt:ra.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),u.jsxs("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-red-600 text-white font-mono font-bold text-[10px] tracking-wider uppercase shadow-lg shadow-red-600/30 flex items-center gap-1.5 whitespace-nowrap",children:[u.jsx(Ff,{className:"w-3 h-3 fill-current"}),u.jsx("span",{children:"YouTube Top Hits"})]})]}),u.jsxs("div",{className:"flex-1 text-center md:text-left flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3",children:[u.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-red-500/15 text-red-400 border border-red-500/30 flex items-center gap-1.5",children:[u.jsx(On,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Official YouTube Playlist"})]}),u.jsxs("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:[Ut.length," Recorded Tracks"]}),u.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:ra.totalDurationFormatted})]}),u.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight",children:ra.name}),u.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium",children:[u.jsx("span",{className:"text-cyan-400 font-bold",children:ra.channel}),u.jsx("span",{className:"opacity-40",children:"•"}),u.jsxs("a",{href:ra.channelUrl,target:"_blank",rel:"noopener noreferrer",className:"text-red-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[u.jsx("span",{children:"Official Channel"}),u.jsx(St,{className:"w-3 h-3"})]}),u.jsx("span",{className:"opacity-40",children:"•"}),u.jsxs("a",{href:ra.playlistUrl,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[u.jsx("span",{children:"View All YouTube Playlists"}),u.jsx(St,{className:"w-3 h-3"})]})]}),u.jsxs("p",{className:`mt-3 text-sm max-w-2xl leading-relaxed ${r?"text-white/70":"text-neutral-600"}`,children:[ra.description," Full-length studio recordings, explosive remixes, and introspective anthems."]})]}),u.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3",children:[u.jsxs("button",{id:"youtube-hero-play-all-btn",onClick:dt,className:"px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-400/25 transition-transform active:scale-95",children:[u.jsx(Gt,{className:"w-4 h-4 fill-current"}),u.jsxs("span",{children:["Play All (",Ut.length,")"]})]}),u.jsxs("button",{id:"youtube-hero-shuffle-btn",onClick:Y,className:`px-4 py-2.5 rounded-full border text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[u.jsx(lu,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:"Shuffle"})]}),u.jsxs("a",{id:"youtube-open-official-btn",href:ra.playlistUrl,target:"_blank",rel:"noopener noreferrer",className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-red-400 hover:border-red-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[u.jsx(On,{className:"w-4 h-4 text-red-500"}),u.jsx("span",{children:"YouTube Playlists"}),u.jsx(St,{className:"w-3.5 h-3.5 opacity-60"})]}),u.jsxs("button",{id:"switch-to-suno-hero-btn",onClick:()=>h("suno"),className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-cyan-700 hover:bg-neutral-200"}`,children:[u.jsx(el,{className:"w-4 h-4"}),u.jsx("span",{children:"Switch to Suno Playlist (20)"})]})]})]})]})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-5",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsxs("button",{id:"play-all-tracks-btn",onClick:dt,className:"px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all active:scale-95",children:[u.jsx(Gt,{className:"w-3.5 h-3.5 fill-current"}),u.jsx("span",{children:"Play All"})]}),u.jsxs("button",{id:"shuffle-all-tracks-btn",onClick:Y,className:`px-3.5 py-2 rounded-full border text-xs sm:text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[u.jsx(lu,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"Shuffle"})]})]}),u.jsxs("div",{className:`flex items-center gap-1.5 p-1 rounded-full border ${r?"border-white/10 bg-white/5":"border-neutral-300 bg-neutral-100"}`,children:[u.jsxs("button",{id:"view-mode-grid",onClick:()=>Be("grid"),className:`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${Ye==="grid"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"Grid View","aria-label":"Grid View",children:[u.jsx(Wf,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"Grid"})]}),u.jsxs("button",{id:"view-mode-list",onClick:()=>Be("list"),className:`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${Ye==="list"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"List View","aria-label":"List View",children:[u.jsx(Pf,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"List"})]})]})]}),u.jsx(Ay,{searchQuery:X,onSearchChange:K,sortField:P,onSortChange:le,selectedCategory:Se,onCategoryChange:Me,totalResults:ue.length,totalTracks:Ut.length,isDarkMode:r}),u.jsxs("div",{className:"xl:grid xl:grid-cols-12 xl:gap-8 items-start",children:[u.jsx("div",{className:"xl:col-span-8",children:ue.length>0?Ye==="grid"?u.jsx("div",{id:"tracks-grid-container",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:ue.map(f=>u.jsx(jy,{track:f,isPlaying:C,isCurrentTrack:(v==null?void 0:v.id)===f.id,onPlay:I,onOpenShare:k=>Oe(k),onOpenDetails:k=>$(k),isDarkMode:r},f.id))}):u.jsxs("div",{id:"tracks-list-container",className:"flex flex-col gap-2.5",children:[u.jsxs("div",{className:`grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 ${r?"text-white/40":"text-neutral-500"}`,children:[u.jsx("div",{className:"col-span-7 sm:col-span-6",children:"Track Info"}),u.jsx("div",{className:"hidden sm:block sm:col-span-3",children:"Category"}),u.jsx("div",{className:"col-span-3 sm:col-span-2",children:"Duration"}),u.jsx("div",{className:"col-span-2 sm:col-span-1 text-right",children:"Share"})]}),ue.map(f=>{const k=(v==null?void 0:v.id)===f.id;return u.jsx("div",{id:`track-list-item-${f.id}`,onClick:()=>I(f),className:`group p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${k?r?"bg-white/10 border-cyan-400/80 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-400/30":"bg-cyan-50/50 border-cyan-400 text-cyan-900 shadow-xs":r?"bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15 text-white":"bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-900 shadow-xs"}`,children:u.jsxs("div",{className:"grid grid-cols-12 w-full items-center gap-2",children:[u.jsxs("div",{className:"col-span-7 sm:col-span-6 flex items-center gap-3 min-w-0",children:[u.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-xs",children:f.index.toString().padStart(2,"0")}),u.jsx("img",{src:f.thumbnail,alt:f.title,className:"w-12 h-8 rounded-lg object-cover border border-white/10 shrink-0 hidden sm:block",referrerPolicy:"no-referrer"}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("h4",{className:`font-bold text-xs sm:text-sm truncate transition-colors ${k?"text-cyan-400":"group-hover:text-cyan-400"}`,children:f.title}),u.jsx("p",{className:`text-[11px] truncate ${r?"text-white/50":"text-neutral-500"}`,children:f.artist})]})]}),u.jsx("div",{className:"hidden sm:block sm:col-span-3",children:u.jsx("span",{className:`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${r?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-300 text-neutral-600"}`,children:f.category})}),u.jsx("div",{className:"col-span-3 sm:col-span-2",children:u.jsx("span",{className:"text-xs font-mono text-cyan-400 font-bold",children:f.duration})}),u.jsx("div",{className:"col-span-2 sm:col-span-1 flex items-center justify-end gap-1",children:u.jsx("button",{id:`list-share-btn-${f.id}`,onClick:O=>{O.stopPropagation(),Oe(f)},className:`p-1.5 rounded-md transition-colors ${r?"text-white/50 hover:text-cyan-400 hover:bg-white/10":"text-neutral-500 hover:text-black hover:bg-neutral-200"}`,title:"Share Track","aria-label":`Share ${f.title}`,children:u.jsx(Nt,{className:"w-3.5 h-3.5"})})})]})},f.id)})]}):u.jsxs("div",{id:"empty-tracks-state",className:`rounded-2xl border p-12 text-center my-6 backdrop-blur-md ${r?"bg-white/5 border-white/10":"bg-white border-neutral-200"}`,children:[u.jsx(au,{className:"w-10 h-10 mx-auto mb-3 text-cyan-400 opacity-80"}),u.jsx("h3",{className:"text-base font-bold",children:"No tracks matched your search"}),u.jsx("p",{className:`text-xs mt-1 max-w-sm mx-auto ${r?"text-white/50":"text-neutral-600"}`,children:'Try clearing your search query or selecting "All Tracks" to view the complete catalog.'}),u.jsx("button",{onClick:()=>{K(""),Me("all"),le("playlist")},className:"mt-4 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider transition-all",children:"Reset Filters"})]})}),u.jsx("aside",{className:"hidden xl:block xl:col-span-4 sticky top-24",children:u.jsxs("div",{id:"immersive-now-playing-stage",className:`rounded-3xl border p-6 flex flex-col items-center justify-center backdrop-blur-xl transition-all shadow-2xl relative overflow-hidden ${r?"bg-black/40 border-white/10 text-white":"bg-white/90 border-neutral-200 text-neutral-900"}`,children:[u.jsx("div",{className:"absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/15 blur-[60px] rounded-full pointer-events-none animate-pulse"}),u.jsx("div",{className:"absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600/15 blur-[60px] rounded-full pointer-events-none"}),u.jsxs("div",{className:"relative w-full aspect-square mb-6 group",children:[u.jsx("div",{className:"absolute inset-0 bg-cyan-500/20 blur-[50px] rounded-full animate-pulse pointer-events-none"}),u.jsxs("div",{className:"relative z-10 w-full h-full bg-gradient-to-br from-neutral-800 to-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center",children:[u.jsx("img",{src:v.thumbnail,alt:v.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),u.jsx("div",{className:"absolute bottom-3 right-3 text-2xl font-black text-white/25 font-mono tracking-widest pointer-events-none drop-shadow-md",children:"D-LY"}),u.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:u.jsx("button",{onClick:()=>M(!C),className:"w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-xl hover:scale-105 transition-transform","aria-label":"Toggle playback",children:C?u.jsx(ql,{className:"w-6 h-6 fill-current"}):u.jsx(Gt,{className:"w-6 h-6 fill-current translate-x-0.5"})})})]})]}),u.jsxs("div",{className:"text-center w-full",children:[u.jsx("h2",{className:"text-xl font-black mb-1 tracking-tight truncate",title:v.title,children:v.title}),u.jsxs("p",{className:"text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4",children:[C?"Now Playing":"Selected Track"," • #",v.index.toString().padStart(2,"0")]}),u.jsxs("div",{className:"flex gap-1 justify-center items-end h-8 mb-4",children:[u.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${C?"h-[60%] animate-eq-1":"h-[25%]"}`}),u.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${C?"h-[90%] animate-eq-2":"h-[40%]"}`}),u.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${C?"h-[40%] animate-eq-3":"h-[20%]"}`}),u.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${C?"h-[70%] animate-eq-4":"h-[35%]"}`}),u.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${C?"h-[30%] animate-eq-2":"h-[15%]"}`})]}),v.featuredLyrics&&u.jsxs("p",{className:"text-xs italic text-white/60 mb-5 line-clamp-2 px-2",children:["“",v.featuredLyrics,"”"]}),u.jsxs("div",{className:"flex items-center justify-center gap-2",children:[u.jsxs("button",{onClick:()=>Oe(v),className:"px-4 py-2 rounded-full bg-white/10 hover:bg-cyan-500 hover:text-black text-white border border-white/10 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all",children:[u.jsx(Nt,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Share Track"})]}),u.jsxs("button",{onClick:()=>$(v),className:"px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all",children:[u.jsx(au,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"Details"})]})]})]})]})})]})]}),u.jsxs("footer",{id:"music-gallery-footer",className:`mt-16 pt-8 border-t text-center text-xs ${r?"border-white/10 text-white/50":"border-neutral-200 text-neutral-500"}`,children:[u.jsx("p",{className:"font-bold text-sm mb-1 tracking-wider text-cyan-400 uppercase font-mono",children:"DomInNATEly"}),u.jsxs("p",{children:["Official Music Archive & Player • Based on the playlist"," ",u.jsx("a",{href:Qf,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline",children:"DomInNATEly's Music"})]}),u.jsx("p",{className:"mt-2 text-[11px] opacity-75",children:"All songs written & performed by DomInNATEly / Dom-I-NATE. Audio powered by YouTube Media Integration."})]})]}),u.jsx(ky,{currentTrack:v,playlist:Ht,allPlaylists:{youtube:ue.length>0?ue:Ut,suno:_e},onSwitchPlaylist:f=>{h(f),f==="suno"&&It.length>0?ee(It[0]):f==="youtube"&&Ut.length>0&&I(Ut[0])},currentPlaylistType:v!=null&&v.isSuno?"suno":"youtube",onTrackChange:f=>{if(B(f),M(!0),f.isSuno){const k=It.find(O=>O.id===f.id);k&&(w(k),_(!0))}else _(!1)},onOpenShare:f=>Oe(f),isDarkMode:r,isPlaying:C,setIsPlaying:f=>{M(f),v!=null&&v.isSuno&&_(f)}}),u.jsx(Ey,{track:ke,isOpen:!!ke,onClose:()=>Oe(null),isDarkMode:r}),u.jsx(By,{track:he,isOpen:!!he,onClose:()=>$(null),isPlaying:C,isCurrentTrack:(v==null?void 0:v.id)===(he==null?void 0:he.id),onPlay:I,onOpenShare:f=>Oe(f),isDarkMode:r})]})}U0.createRoot(document.getElementById("root")).render(u.jsx(V.StrictMode,{children:u.jsx(Yy,{})}));
