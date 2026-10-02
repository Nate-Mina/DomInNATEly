(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))d(H);new MutationObserver(H=>{for(const U of H)if(U.type==="childList")for(const x of U.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&d(x)}).observe(document,{childList:!0,subtree:!0});function S(H){const U={};return H.integrity&&(U.integrity=H.integrity),H.referrerPolicy&&(U.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?U.credentials="include":H.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function d(H){if(H.ep)return;H.ep=!0;const U=S(H);fetch(H.href,U)}})();var Uu={exports:{}},Fn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf;function Q0(){if(Gf)return Fn;Gf=1;var u=Symbol.for("react.transitional.element"),j=Symbol.for("react.fragment");function S(d,H,U){var x=null;if(U!==void 0&&(x=""+U),H.key!==void 0&&(x=""+H.key),"key"in H){U={};for(var C in H)C!=="key"&&(U[C]=H[C])}else U=H;return H=U.ref,{$$typeof:u,type:d,key:x,ref:H!==void 0?H:null,props:U}}return Fn.Fragment=j,Fn.jsx=S,Fn.jsxs=S,Fn}var Xf;function Z0(){return Xf||(Xf=1,Uu.exports=Q0()),Uu.exports}var s=Z0(),Yu={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function K0(){if(Qf)return le;Qf=1;var u=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),x=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),X=Symbol.iterator;function K(h){return h===null||typeof h!="object"?null:(h=X&&h[X]||h["@@iterator"],typeof h=="function"?h:null)}var ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ae=Object.assign,Ne={};function Be(h,f,k){this.props=h,this.context=f,this.refs=Ne,this.updater=k||ee}Be.prototype.isReactComponent={},Be.prototype.setState=function(h,f){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,f,"setState")},Be.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function Ke(){}Ke.prototype=Be.prototype;function ue(h,f,k){this.props=h,this.context=f,this.refs=Ne,this.updater=k||ee}var je=ue.prototype=new Ke;je.constructor=ue,ae(je,Be.prototype),je.isPureReactComponent=!0;var He=Array.isArray;function pe(){}var te={H:null,A:null,T:null,S:null},Re=Object.prototype.hasOwnProperty;function L(h,f,k){var _=k.ref;return{$$typeof:u,type:h,key:f,ref:_!==void 0?_:null,props:k}}function ie(h,f){return L(h.type,f,h.props)}function $(h){return typeof h=="object"&&h!==null&&h.$$typeof===u}function Ee(h){var f={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(k){return f[k]})}var qe=/\/+/g;function Je(h,f){return typeof h=="object"&&h!==null&&h.key!=null?Ee(""+h.key):f.toString(36)}function Ce(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(pe,pe):(h.status="pending",h.then(function(f){h.status==="pending"&&(h.status="fulfilled",h.value=f)},function(f){h.status==="pending"&&(h.status="rejected",h.reason=f)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function T(h,f,k,_,J){var oe=typeof h;(oe==="undefined"||oe==="boolean")&&(h=null);var W=!1;if(h===null)W=!0;else switch(oe){case"bigint":case"string":case"number":W=!0;break;case"object":switch(h.$$typeof){case u:case j:W=!0;break;case V:return W=h._init,T(W(h._payload),f,k,_,J)}}if(W)return J=J(h),W=_===""?"."+Je(h,0):_,He(J)?(k="",W!=null&&(k=W.replace(qe,"$&/")+"/"),T(J,f,k,"",function(Zt){return Zt})):J!=null&&($(J)&&(J=ie(J,k+(J.key==null||h&&h.key===J.key?"":(""+J.key).replace(qe,"$&/")+"/")+W)),f.push(J)),1;W=0;var $e=_===""?".":_+":";if(He(h))for(var ke=0;ke<h.length;ke++)_=h[ke],oe=$e+Je(_,ke),W+=T(_,f,k,oe,J);else if(ke=K(h),typeof ke=="function")for(h=ke.call(h),ke=0;!(_=h.next()).done;)_=_.value,oe=$e+Je(_,ke++),W+=T(_,f,k,oe,J);else if(oe==="object"){if(typeof h.then=="function")return T(Ce(h),f,k,_,J);throw f=String(h),Error("Objects are not valid as a React child (found: "+(f==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":f)+"). If you meant to render a collection of children, use an array instead.")}return W}function D(h,f,k){if(h==null)return h;var _=[],J=0;return T(h,_,"","",function(oe){return f.call(k,oe,J++)}),_}function A(h){if(h._status===-1){var f=h._result;f=f(),f.then(function(k){(h._status===0||h._status===-1)&&(h._status=1,h._result=k)},function(k){(h._status===0||h._status===-1)&&(h._status=2,h._result=k)}),h._status===-1&&(h._status=0,h._result=f)}if(h._status===1)return h._result.default;throw h._result}var q=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var f=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(f))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},Q={map:D,forEach:function(h,f,k){D(h,function(){f.apply(this,arguments)},k)},count:function(h){var f=0;return D(h,function(){f++}),f},toArray:function(h){return D(h,function(f){return f})||[]},only:function(h){if(!$(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return le.Activity=Y,le.Children=Q,le.Component=Be,le.Fragment=S,le.Profiler=H,le.PureComponent=ue,le.StrictMode=d,le.Suspense=w,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,le.__COMPILER_RUNTIME={__proto__:null,c:function(h){return te.H.useMemoCache(h)}},le.cache=function(h){return function(){return h.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(h,f,k){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var _=ae({},h.props),J=h.key;if(f!=null)for(oe in f.key!==void 0&&(J=""+f.key),f)!Re.call(f,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&f.ref===void 0||(_[oe]=f[oe]);var oe=arguments.length-2;if(oe===1)_.children=k;else if(1<oe){for(var W=Array(oe),$e=0;$e<oe;$e++)W[$e]=arguments[$e+2];_.children=W}return L(h.type,J,_)},le.createContext=function(h){return h={$$typeof:x,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:U,_context:h},h},le.createElement=function(h,f,k){var _,J={},oe=null;if(f!=null)for(_ in f.key!==void 0&&(oe=""+f.key),f)Re.call(f,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(J[_]=f[_]);var W=arguments.length-2;if(W===1)J.children=k;else if(1<W){for(var $e=Array(W),ke=0;ke<W;ke++)$e[ke]=arguments[ke+2];J.children=$e}if(h&&h.defaultProps)for(_ in W=h.defaultProps,W)J[_]===void 0&&(J[_]=W[_]);return L(h,oe,J)},le.createRef=function(){return{current:null}},le.forwardRef=function(h){return{$$typeof:C,render:h}},le.isValidElement=$,le.lazy=function(h){return{$$typeof:V,_payload:{_status:-1,_result:h},_init:A}},le.memo=function(h,f){return{$$typeof:g,type:h,compare:f===void 0?null:f}},le.startTransition=function(h){var f=te.T,k={};te.T=k;try{var _=h(),J=te.S;J!==null&&J(k,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(pe,q)}catch(oe){q(oe)}finally{f!==null&&k.types!==null&&(f.types=k.types),te.T=f}},le.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},le.use=function(h){return te.H.use(h)},le.useActionState=function(h,f,k){return te.H.useActionState(h,f,k)},le.useCallback=function(h,f){return te.H.useCallback(h,f)},le.useContext=function(h){return te.H.useContext(h)},le.useDebugValue=function(){},le.useDeferredValue=function(h,f){return te.H.useDeferredValue(h,f)},le.useEffect=function(h,f){return te.H.useEffect(h,f)},le.useEffectEvent=function(h){return te.H.useEffectEvent(h)},le.useId=function(){return te.H.useId()},le.useImperativeHandle=function(h,f,k){return te.H.useImperativeHandle(h,f,k)},le.useInsertionEffect=function(h,f){return te.H.useInsertionEffect(h,f)},le.useLayoutEffect=function(h,f){return te.H.useLayoutEffect(h,f)},le.useMemo=function(h,f){return te.H.useMemo(h,f)},le.useOptimistic=function(h,f){return te.H.useOptimistic(h,f)},le.useReducer=function(h,f,k){return te.H.useReducer(h,f,k)},le.useRef=function(h){return te.H.useRef(h)},le.useState=function(h){return te.H.useState(h)},le.useSyncExternalStore=function(h,f,k){return te.H.useSyncExternalStore(h,f,k)},le.useTransition=function(){return te.H.useTransition()},le.version="19.2.8",le}var Zf;function Lu(){return Zf||(Zf=1,Yu.exports=K0()),Yu.exports}var R=Lu(),Ou={exports:{}},Wn={},Hu={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function J0(){return Kf||(Kf=1,(function(u){function j(T,D){var A=T.length;T.push(D);e:for(;0<A;){var q=A-1>>>1,Q=T[q];if(0<H(Q,D))T[q]=D,T[A]=Q,A=q;else break e}}function S(T){return T.length===0?null:T[0]}function d(T){if(T.length===0)return null;var D=T[0],A=T.pop();if(A!==D){T[0]=A;e:for(var q=0,Q=T.length,h=Q>>>1;q<h;){var f=2*(q+1)-1,k=T[f],_=f+1,J=T[_];if(0>H(k,A))_<Q&&0>H(J,k)?(T[q]=J,T[_]=A,q=_):(T[q]=k,T[f]=A,q=f);else if(_<Q&&0>H(J,A))T[q]=J,T[_]=A,q=_;else break e}}return D}function H(T,D){var A=T.sortIndex-D.sortIndex;return A!==0?A:T.id-D.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var U=performance;u.unstable_now=function(){return U.now()}}else{var x=Date,C=x.now();u.unstable_now=function(){return x.now()-C}}var w=[],g=[],V=1,Y=null,X=3,K=!1,ee=!1,ae=!1,Ne=!1,Be=typeof setTimeout=="function"?setTimeout:null,Ke=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function je(T){for(var D=S(g);D!==null;){if(D.callback===null)d(g);else if(D.startTime<=T)d(g),D.sortIndex=D.expirationTime,j(w,D);else break;D=S(g)}}function He(T){if(ae=!1,je(T),!ee)if(S(w)!==null)ee=!0,pe||(pe=!0,Ee());else{var D=S(g);D!==null&&Ce(He,D.startTime-T)}}var pe=!1,te=-1,Re=5,L=-1;function ie(){return Ne?!0:!(u.unstable_now()-L<Re)}function $(){if(Ne=!1,pe){var T=u.unstable_now();L=T;var D=!0;try{e:{ee=!1,ae&&(ae=!1,Ke(te),te=-1),K=!0;var A=X;try{t:{for(je(T),Y=S(w);Y!==null&&!(Y.expirationTime>T&&ie());){var q=Y.callback;if(typeof q=="function"){Y.callback=null,X=Y.priorityLevel;var Q=q(Y.expirationTime<=T);if(T=u.unstable_now(),typeof Q=="function"){Y.callback=Q,je(T),D=!0;break t}Y===S(w)&&d(w),je(T)}else d(w);Y=S(w)}if(Y!==null)D=!0;else{var h=S(g);h!==null&&Ce(He,h.startTime-T),D=!1}}break e}finally{Y=null,X=A,K=!1}D=void 0}}finally{D?Ee():pe=!1}}}var Ee;if(typeof ue=="function")Ee=function(){ue($)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,Je=qe.port2;qe.port1.onmessage=$,Ee=function(){Je.postMessage(null)}}else Ee=function(){Be($,0)};function Ce(T,D){te=Be(function(){T(u.unstable_now())},D)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(T){T.callback=null},u.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<T?Math.floor(1e3/T):5},u.unstable_getCurrentPriorityLevel=function(){return X},u.unstable_next=function(T){switch(X){case 1:case 2:case 3:var D=3;break;default:D=X}var A=X;X=D;try{return T()}finally{X=A}},u.unstable_requestPaint=function(){Ne=!0},u.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var A=X;X=T;try{return D()}finally{X=A}},u.unstable_scheduleCallback=function(T,D,A){var q=u.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?q+A:q):A=q,T){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=A+Q,T={id:V++,callback:D,priorityLevel:T,startTime:A,expirationTime:Q,sortIndex:-1},A>q?(T.sortIndex=A,j(g,T),S(w)===null&&T===S(g)&&(ae?(Ke(te),te=-1):ae=!0,Ce(He,A-q))):(T.sortIndex=Q,j(w,T),ee||K||(ee=!0,pe||(pe=!0,Ee()))),T},u.unstable_shouldYield=ie,u.unstable_wrapCallback=function(T){var D=X;return function(){var A=X;X=D;try{return T.apply(this,arguments)}finally{X=A}}}})(Ru)),Ru}var Jf;function $0(){return Jf||(Jf=1,Hu.exports=J0()),Hu.exports}var Du={exports:{}},st={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function F0(){if($f)return st;$f=1;var u=Lu();function j(w){var g="https://react.dev/errors/"+w;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var V=2;V<arguments.length;V++)g+="&args[]="+encodeURIComponent(arguments[V])}return"Minified React error #"+w+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(){}var d={d:{f:S,r:function(){throw Error(j(522))},D:S,C:S,L:S,m:S,X:S,S,M:S},p:0,findDOMNode:null},H=Symbol.for("react.portal");function U(w,g,V){var Y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:Y==null?null:""+Y,children:w,containerInfo:g,implementation:V}}var x=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(w,g){if(w==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,st.createPortal=function(w,g){var V=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(j(299));return U(w,g,null,V)},st.flushSync=function(w){var g=x.T,V=d.p;try{if(x.T=null,d.p=2,w)return w()}finally{x.T=g,d.p=V,d.d.f()}},st.preconnect=function(w,g){typeof w=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,d.d.C(w,g))},st.prefetchDNS=function(w){typeof w=="string"&&d.d.D(w)},st.preinit=function(w,g){if(typeof w=="string"&&g&&typeof g.as=="string"){var V=g.as,Y=C(V,g.crossOrigin),X=typeof g.integrity=="string"?g.integrity:void 0,K=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;V==="style"?d.d.S(w,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:Y,integrity:X,fetchPriority:K}):V==="script"&&d.d.X(w,{crossOrigin:Y,integrity:X,fetchPriority:K,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},st.preinitModule=function(w,g){if(typeof w=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var V=C(g.as,g.crossOrigin);d.d.M(w,{crossOrigin:V,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&d.d.M(w)},st.preload=function(w,g){if(typeof w=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var V=g.as,Y=C(V,g.crossOrigin);d.d.L(w,V,{crossOrigin:Y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},st.preloadModule=function(w,g){if(typeof w=="string")if(g){var V=C(g.as,g.crossOrigin);d.d.m(w,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:V,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else d.d.m(w)},st.requestFormReset=function(w){d.d.r(w)},st.unstable_batchedUpdates=function(w,g){return w(g)},st.useFormState=function(w,g,V){return x.H.useFormState(w,g,V)},st.useFormStatus=function(){return x.H.useHostTransitionStatus()},st.version="19.2.8",st}var Ff;function W0(){if(Ff)return Du.exports;Ff=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(j){console.error(j)}}return u(),Du.exports=F0(),Du.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function P0(){if(Wf)return Wn;Wf=1;var u=$0(),j=Lu(),S=W0();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function U(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(U(e)!==e)throw Error(d(188))}function g(e){var t=e.alternate;if(!t){if(t=U(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return w(n),e;if(i===l)return w(n),t;i=i.sibling}throw Error(d(188))}if(a.return!==l.return)a=n,l=i;else{for(var o=!1,r=n.child;r;){if(r===a){o=!0,a=n,l=i;break}if(r===l){o=!0,l=n,a=i;break}r=r.sibling}if(!o){for(r=i.child;r;){if(r===a){o=!0,a=i,l=n;break}if(r===l){o=!0,l=i,a=n;break}r=r.sibling}if(!o)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function V(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=V(e),t!==null)return t;e=e.sibling}return null}var Y=Object.assign,X=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),ee=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),Be=Symbol.for("react.profiler"),Ke=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function Ee(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var qe=Symbol.for("react.client.reference");function Je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ae:return"Fragment";case Be:return"Profiler";case Ne:return"StrictMode";case He:return"Suspense";case pe:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ee:return"Portal";case ue:return e.displayName||"Context";case Ke:return(e._context.displayName||"Context")+".Consumer";case je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:Je(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return Je(e(t))}catch{}}return null}var Ce=Array.isArray,T=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=S.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A={pending:!1,data:null,method:null,action:null},q=[],Q=-1;function h(e){return{current:e}}function f(e){0>Q||(e.current=q[Q],q[Q]=null,Q--)}function k(e,t){Q++,q[Q]=e.current,e.current=t}var _=h(null),J=h(null),oe=h(null),W=h(null);function $e(e,t){switch(k(oe,t),k(J,e),k(_,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?hf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=hf(t),e=mf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}f(_),k(_,e)}function ke(){f(_),f(J),f(oe)}function Zt(e){e.memoizedState!==null&&k(W,e);var t=_.current,a=mf(t,e.type);t!==a&&(k(J,e),k(_,a))}function ba(e){J.current===e&&(f(_),f(J)),W.current===e&&(f(W),Zn._currentValue=A)}var Xa,ti;function Kt(e){if(Xa===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Xa=t&&t[1]||"",ti=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xa+e+ti}var Pl=!1;function dl(e,t){if(!e||Pl)return"";Pl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(N){var v=N}Reflect.construct(e,[],B)}else{try{B.call()}catch(N){v=N}e.call(B.prototype)}}else{try{throw Error()}catch(N){v=N}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(N){if(N&&v&&typeof N.stack=="string")return[N.stack,v.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],r=i[1];if(o&&r){var c=o.split(`
`),p=r.split(`
`);for(n=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(l===c.length||n===p.length)for(l=c.length-1,n=p.length-1;1<=l&&0<=n&&c[l]!==p[n];)n--;for(;1<=l&&0<=n;l--,n--)if(c[l]!==p[n]){if(l!==1||n!==1)do if(l--,n--,0>n||c[l]!==p[n]){var E=`
`+c[l].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=l&&0<=n);break}}}finally{Pl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Kt(a):""}function ai(e,t){switch(e.tag){case 26:case 27:case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return e.child!==t&&t!==null?Kt("Suspense Fallback"):Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return dl(e.type,!1);case 11:return dl(e.type.render,!1);case 1:return dl(e.type,!0);case 31:return Kt("Activity");default:return""}}function en(e){try{var t="",a=null;do t+=ai(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var pa=Object.prototype.hasOwnProperty,tn=u.unstable_scheduleCallback,an=u.unstable_cancelCallback,O=u.unstable_shouldYield,M=u.unstable_requestPaint,P=u.unstable_now,it=u.unstable_getCurrentPriorityLevel,Rt=u.unstable_ImmediatePriority,Jt=u.unstable_UserBlockingPriority,Le=u.unstable_NormalPriority,Dt=u.unstable_LowPriority,ln=u.unstable_IdlePriority,li=u.log,nn=u.unstable_setDisableYieldValue,fl=null,pt=null;function ga(e){if(typeof li=="function"&&nn(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(fl,e)}catch{}}var gt=Math.clz32?Math.clz32:Mh,Bh=Math.log,Ch=Math.LN2;function Mh(e){return e>>>=0,e===0?32:31-(Bh(e)/Ch|0)|0}var ni=256,ii=262144,si=4194304;function Qa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function oi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?n=Qa(l):(o&=r,o!==0?n=Qa(o):a||(a=r&~e,a!==0&&(n=Qa(a))))):(r=l&~i,r!==0?n=Qa(r):o!==0?n=Qa(o):a||(a=l&~e,a!==0&&(n=Qa(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function sn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _h(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zu(){var e=si;return si<<=1,(si&62914560)===0&&(si=4194304),e}function ws(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function on(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Uh(e,t,a,l,n,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,c=e.expirationTimes,p=e.hiddenUpdates;for(a=o&~a;0<a;){var E=31-gt(a),B=1<<E;r[E]=0,c[E]=-1;var v=p[E];if(v!==null)for(p[E]=null,E=0;E<v.length;E++){var N=v[E];N!==null&&(N.lane&=-536870913)}a&=~B}l!==0&&Ku(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Ku(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-gt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Ju(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-gt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function $u(e,t){var a=t&-t;return a=(a&42)!==0?1:Ns(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ns(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function js(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fu(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:Hf(e.type))}function Wu(e,t){var a=D.p;try{return D.p=e,t()}finally{D.p=a}}var xa=Math.random().toString(36).slice(2),Pe="__reactFiber$"+xa,ut="__reactProps$"+xa,hl="__reactContainer$"+xa,Ss="__reactEvents$"+xa,Yh="__reactListeners$"+xa,Oh="__reactHandles$"+xa,Pu="__reactResources$"+xa,un="__reactMarker$"+xa;function As(e){delete e[Pe],delete e[ut],delete e[Ss],delete e[Yh],delete e[Oh]}function ml(e){var t=e[Pe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[hl]||a[Pe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=wf(e);e!==null;){if(a=e[Pe])return a;e=wf(e)}return t}e=a,a=e.parentNode}return null}function yl(e){if(e=e[Pe]||e[hl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function rn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function bl(e){var t=e[Pu];return t||(t=e[Pu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[un]=!0}var er=new Set,tr={};function Za(e,t){pl(e,t),pl(e+"Capture",t)}function pl(e,t){for(tr[e]=t,e=0;e<t.length;e++)er.add(t[e])}var Hh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ar={},lr={};function Rh(e){return pa.call(lr,e)?!0:pa.call(ar,e)?!1:Hh.test(e)?lr[e]=!0:(ar[e]=!0,!1)}function ui(e,t,a){if(Rh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ri(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function $t(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dh(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ts(e){if(!e._valueTracker){var t=nr(e)?"checked":"value";e._valueTracker=Dh(e,t,""+e[t])}}function ir(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=nr(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vh=/[\n"\\]/g;function kt(e){return e.replace(Vh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Es(e,t,a,l,n,i,o,r){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?ks(e,o,Et(t)):a!=null?ks(e,o,Et(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+Et(r):e.removeAttribute("name")}function sr(e,t,a,l,n,i,o,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ts(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Ts(e)}function ks(e,t,a){t==="number"&&ci(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function gl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function or(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function ur(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(d(92));if(Ce(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ts(e)}function xl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var qh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rr(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||qh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function cr(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&rr(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&rr(e,i,t[i])}function zs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ih=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function di(e){return Ih.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ft(){}var Bs=null;function Cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,wl=null;function dr(e){var t=yl(e);if(t&&(e=t.stateNode)){var a=e[ut]||null;e:switch(e=t.stateNode,t.type){case"input":if(Es(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[ut]||null;if(!n)throw Error(d(90));Es(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&ir(l)}break e;case"textarea":or(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&gl(e,!!a.multiple,t,!1)}}}var Ms=!1;function fr(e,t,a){if(Ms)return e(t,a);Ms=!0;try{var l=e(t);return l}finally{if(Ms=!1,(vl!==null||wl!==null)&&(Wi(),vl&&(t=vl,e=wl,wl=vl=null,dr(t),e)))for(t=0;t<e.length;t++)dr(e[t])}}function cn(e,t){var a=e.stateNode;if(a===null)return null;var l=a[ut]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_s=!1;if(Wt)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){_s=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{_s=!1}var va=null,Us=null,fi=null;function hr(){if(fi)return fi;var e,t=Us,a=t.length,l,n="value"in va?va.value:va.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[i-l];l++);return fi=n.slice(e,1<l?1-l:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mi(){return!0}function mr(){return!1}function rt(e){function t(a,l,n,i,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mi:mr,this.isPropagationStopped=mr,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),t}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yi=rt(Ka),fn=Y({},Ka,{view:0,detail:0}),Gh=rt(fn),Ys,Os,hn,bi=Y({},fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Ys=e.screenX-hn.screenX,Os=e.screenY-hn.screenY):Os=Ys=0,hn=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Os}}),yr=rt(bi),Xh=Y({},bi,{dataTransfer:0}),Qh=rt(Xh),Zh=Y({},fn,{relatedTarget:0}),Hs=rt(Zh),Kh=Y({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Jh=rt(Kh),$h=Y({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fh=rt($h),Wh=Y({},Ka,{data:0}),br=rt(Wh),Ph={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tm[e])?!!t[e]:!1}function Rs(){return am}var lm=Y({},fn,{key:function(e){if(e.key){var t=Ph[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?em[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nm=rt(lm),im=Y({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pr=rt(im),sm=Y({},fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),om=rt(sm),um=Y({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=rt(um),cm=Y({},bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=rt(cm),fm=Y({},Ka,{newState:0,oldState:0}),hm=rt(fm),mm=[9,13,27,32],Ds=Wt&&"CompositionEvent"in window,mn=null;Wt&&"documentMode"in document&&(mn=document.documentMode);var ym=Wt&&"TextEvent"in window&&!mn,gr=Wt&&(!Ds||mn&&8<mn&&11>=mn),xr=" ",vr=!1;function wr(e,t){switch(e){case"keyup":return mm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nl=!1;function bm(e,t){switch(e){case"compositionend":return Nr(t);case"keypress":return t.which!==32?null:(vr=!0,xr);case"textInput":return e=t.data,e===xr&&vr?null:e;default:return null}}function pm(e,t){if(Nl)return e==="compositionend"||!Ds&&wr(e,t)?(e=hr(),fi=Us=va=null,Nl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gr&&t.locale!=="ko"?null:t.data;default:return null}}var gm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gm[e.type]:t==="textarea"}function Sr(e,t,a,l){vl?wl?wl.push(l):wl=[l]:vl=l,t=is(t,"onChange"),0<t.length&&(a=new yi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var yn=null,bn=null;function xm(e){of(e,0)}function pi(e){var t=rn(e);if(ir(t))return e}function Ar(e,t){if(e==="change")return t}var Tr=!1;if(Wt){var Vs;if(Wt){var qs="oninput"in document;if(!qs){var Er=document.createElement("div");Er.setAttribute("oninput","return;"),qs=typeof Er.oninput=="function"}Vs=qs}else Vs=!1;Tr=Vs&&(!document.documentMode||9<document.documentMode)}function kr(){yn&&(yn.detachEvent("onpropertychange",zr),bn=yn=null)}function zr(e){if(e.propertyName==="value"&&pi(bn)){var t=[];Sr(t,bn,e,Cs(e)),fr(xm,t)}}function vm(e,t,a){e==="focusin"?(kr(),yn=t,bn=a,yn.attachEvent("onpropertychange",zr)):e==="focusout"&&kr()}function wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(bn)}function Nm(e,t){if(e==="click")return pi(t)}function jm(e,t){if(e==="input"||e==="change")return pi(t)}function Sm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Sm;function pn(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!pa.call(t,n)||!xt(e[n],t[n]))return!1}return!0}function Br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cr(e,t){var a=Br(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Br(a)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _r(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ci(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ci(e.document)}return t}function Ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Am=Wt&&"documentMode"in document&&11>=document.documentMode,jl=null,Is=null,gn=null,Gs=!1;function Ur(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gs||jl==null||jl!==ci(l)||(l=jl,"selectionStart"in l&&Ls(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),gn&&pn(gn,l)||(gn=l,l=is(Is,"onSelect"),0<l.length&&(t=new yi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=jl)))}function Ja(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Sl={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Xs={},Yr={};Wt&&(Yr=document.createElement("div").style,"AnimationEvent"in window||(delete Sl.animationend.animation,delete Sl.animationiteration.animation,delete Sl.animationstart.animation),"TransitionEvent"in window||delete Sl.transitionend.transition);function $a(e){if(Xs[e])return Xs[e];if(!Sl[e])return e;var t=Sl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Yr)return Xs[e]=t[a];return e}var Or=$a("animationend"),Hr=$a("animationiteration"),Rr=$a("animationstart"),Tm=$a("transitionrun"),Em=$a("transitionstart"),km=$a("transitioncancel"),Dr=$a("transitionend"),Vr=new Map,Qs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qs.push("scrollEnd");function Vt(e,t){Vr.set(e,t),Za(t,[e])}var gi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zt=[],Al=0,Zs=0;function xi(){for(var e=Al,t=Zs=Al=0;t<e;){var a=zt[t];zt[t++]=null;var l=zt[t];zt[t++]=null;var n=zt[t];zt[t++]=null;var i=zt[t];if(zt[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}i!==0&&qr(a,n,i)}}function vi(e,t,a,l){zt[Al++]=e,zt[Al++]=t,zt[Al++]=a,zt[Al++]=l,Zs|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ks(e,t,a,l){return vi(e,t,a,l),wi(e)}function Fa(e,t){return vi(e,null,null,t),wi(e)}function qr(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-gt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function wi(e){if(50<Vn)throw Vn=0,nu=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Tl={};function zm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,a,l){return new zm(e,t,a,l)}function Js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pt(e,t){var a=e.alternate;return a===null?(a=vt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lr(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ni(e,t,a,l,n,i){var o=0;if(l=e,typeof e=="function")Js(e)&&(o=1);else if(typeof e=="string")o=U0(e,a,_.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case L:return e=vt(31,a,t,n),e.elementType=L,e.lanes=i,e;case ae:return Wa(a.children,n,i,t);case Ne:o=8,n|=24;break;case Be:return e=vt(12,a,t,n|2),e.elementType=Be,e.lanes=i,e;case He:return e=vt(13,a,t,n),e.elementType=He,e.lanes=i,e;case pe:return e=vt(19,a,t,n),e.elementType=pe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ue:o=10;break e;case Ke:o=9;break e;case je:o=11;break e;case te:o=14;break e;case Re:o=16,l=null;break e}o=29,a=Error(d(130,e===null?"null":typeof e,"")),l=null}return t=vt(o,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Wa(e,t,a,l){return e=vt(7,e,l,t),e.lanes=a,e}function $s(e,t,a){return e=vt(6,e,null,t),e.lanes=a,e}function Ir(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function Fs(e,t,a){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Gr=new WeakMap;function Bt(e,t){if(typeof e=="object"&&e!==null){var a=Gr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:en(t)},Gr.set(e,t),t)}return{value:e,source:t,stack:en(t)}}var El=[],kl=0,ji=null,xn=0,Ct=[],Mt=0,wa=null,It=1,Gt="";function ea(e,t){El[kl++]=xn,El[kl++]=ji,ji=e,xn=t}function Xr(e,t,a){Ct[Mt++]=It,Ct[Mt++]=Gt,Ct[Mt++]=wa,wa=e;var l=It;e=Gt;var n=32-gt(l)-1;l&=~(1<<n),a+=1;var i=32-gt(t)+n;if(30<i){var o=n-n%5;i=(l&(1<<o)-1).toString(32),l>>=o,n-=o,It=1<<32-gt(t)+n|a<<n|l,Gt=i+e}else It=1<<i|a<<n|l,Gt=e}function Ws(e){e.return!==null&&(ea(e,1),Xr(e,1,0))}function Ps(e){for(;e===ji;)ji=El[--kl],El[kl]=null,xn=El[--kl],El[kl]=null;for(;e===wa;)wa=Ct[--Mt],Ct[Mt]=null,Gt=Ct[--Mt],Ct[Mt]=null,It=Ct[--Mt],Ct[Mt]=null}function Qr(e,t){Ct[Mt++]=It,Ct[Mt++]=Gt,Ct[Mt++]=wa,It=t.id,Gt=t.overflow,wa=e}var et=null,Me=null,he=!1,Na=null,_t=!1,eo=Error(d(519));function ja(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vn(Bt(t,e)),eo}function Zr(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Pe]=e,t[ut]=l,a){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(a=0;a<Ln.length;a++)ce(Ln[a],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),sr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),ur(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||df(t.textContent,a)?(l.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),l.onScroll!=null&&ce("scroll",t),l.onScrollEnd!=null&&ce("scrollend",t),l.onClick!=null&&(t.onclick=Ft),t=!0):t=!1,t||ja(e,!0)}function Kr(e){for(et=e.return;et;)switch(et.tag){case 5:case 31:case 13:_t=!1;return;case 27:case 3:_t=!0;return;default:et=et.return}}function zl(e){if(e!==et)return!1;if(!he)return Kr(e),he=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xu(e.type,e.memoizedProps)),a=!a),a&&Me&&ja(e),Kr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Me=vf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Me=vf(e)}else t===27?(t=Me,Ha(e.type)?(e=Su,Su=null,Me=e):Me=t):Me=et?Yt(e.stateNode.nextSibling):null;return!0}function Pa(){Me=et=null,he=!1}function to(){var e=Na;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),Na=null),e}function vn(e){Na===null?Na=[e]:Na.push(e)}var ao=h(null),el=null,ta=null;function Sa(e,t,a){k(ao,t._currentValue),t._currentValue=a}function aa(e){e._currentValue=ao.current,f(ao)}function lo(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function no(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=n;for(var c=0;c<t.length;c++)if(r.context===t[c]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),lo(i.return,a,e),l||(o=null);break e}i=r.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(d(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),lo(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function Bl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(d(387));if(o=o.memoizedProps,o!==null){var r=n.type;xt(n.pendingProps.value,o.value)||(e!==null?e.push(r):e=[r])}}else if(n===W.current){if(o=n.alternate,o===null)throw Error(d(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Zn):e=[Zn])}n=n.return}e!==null&&no(t,e,a,l),t.flags|=262144}function Si(e){for(e=e.firstContext;e!==null;){if(!xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tl(e){el=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tt(e){return Jr(el,e)}function Ai(e,t){return el===null&&tl(e),Jr(e,t)}function Jr(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(d(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return a}var Bm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Cm=u.unstable_scheduleCallback,Mm=u.unstable_NormalPriority,Ie={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function io(){return{controller:new Bm,data:new Map,refCount:0}}function wn(e){e.refCount--,e.refCount===0&&Cm(Mm,function(){e.controller.abort()})}var Nn=null,so=0,Cl=0,Ml=null;function _m(e,t){if(Nn===null){var a=Nn=[];so=0,Cl=cu(),Ml={status:"pending",value:void 0,then:function(l){a.push(l)}}}return so++,t.then($r,$r),t}function $r(){if(--so===0&&Nn!==null){Ml!==null&&(Ml.status="fulfilled");var e=Nn;Nn=null,Cl=0,Ml=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Um(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Fr=T.S;T.S=function(e,t){Ud=P(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_m(e,t),Fr!==null&&Fr(e,t)};var al=h(null);function oo(){var e=al.current;return e!==null?e:ze.pooledCache}function Ti(e,t){t===null?k(al,al.current):k(al,t.pool)}function Wr(){var e=oo();return e===null?null:{parent:Ie._currentValue,pool:e}}var _l=Error(d(460)),uo=Error(d(474)),Ei=Error(d(542)),ki={then:function(){}};function Pr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ec(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ft,Ft),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ac(e),e;default:if(typeof t.status=="string")t.then(Ft,Ft);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ac(e),e}throw nl=t,_l}}function ll(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(nl=a,_l):a}}var nl=null;function tc(){if(nl===null)throw Error(d(459));var e=nl;return nl=null,e}function ac(e){if(e===_l||e===Ei)throw Error(d(483))}var Ul=null,jn=0;function zi(e){var t=jn;return jn+=1,Ul===null&&(Ul=[]),ec(Ul,e,t)}function Sn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bi(e,t){throw t.$$typeof===X?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function lc(e){function t(y,m){if(e){var b=y.deletions;b===null?(y.deletions=[m],y.flags|=16):b.push(m)}}function a(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function l(y){for(var m=new Map;y!==null;)y.key!==null?m.set(y.key,y):m.set(y.index,y),y=y.sibling;return m}function n(y,m){return y=Pt(y,m),y.index=0,y.sibling=null,y}function i(y,m,b){return y.index=b,e?(b=y.alternate,b!==null?(b=b.index,b<m?(y.flags|=67108866,m):b):(y.flags|=67108866,m)):(y.flags|=1048576,m)}function o(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function r(y,m,b,z){return m===null||m.tag!==6?(m=$s(b,y.mode,z),m.return=y,m):(m=n(m,b),m.return=y,m)}function c(y,m,b,z){var Z=b.type;return Z===ae?E(y,m,b.props.children,z,b.key):m!==null&&(m.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Re&&ll(Z)===m.type)?(m=n(m,b.props),Sn(m,b),m.return=y,m):(m=Ni(b.type,b.key,b.props,null,y.mode,z),Sn(m,b),m.return=y,m)}function p(y,m,b,z){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=Fs(b,y.mode,z),m.return=y,m):(m=n(m,b.children||[]),m.return=y,m)}function E(y,m,b,z,Z){return m===null||m.tag!==7?(m=Wa(b,y.mode,z,Z),m.return=y,m):(m=n(m,b),m.return=y,m)}function B(y,m,b){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=$s(""+m,y.mode,b),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case K:return b=Ni(m.type,m.key,m.props,null,y.mode,b),Sn(b,m),b.return=y,b;case ee:return m=Fs(m,y.mode,b),m.return=y,m;case Re:return m=ll(m),B(y,m,b)}if(Ce(m)||Ee(m))return m=Wa(m,y.mode,b,null),m.return=y,m;if(typeof m.then=="function")return B(y,zi(m),b);if(m.$$typeof===ue)return B(y,Ai(y,m),b);Bi(y,m)}return null}function v(y,m,b,z){var Z=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return Z!==null?null:r(y,m,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case K:return b.key===Z?c(y,m,b,z):null;case ee:return b.key===Z?p(y,m,b,z):null;case Re:return b=ll(b),v(y,m,b,z)}if(Ce(b)||Ee(b))return Z!==null?null:E(y,m,b,z,null);if(typeof b.then=="function")return v(y,m,zi(b),z);if(b.$$typeof===ue)return v(y,m,Ai(y,b),z);Bi(y,b)}return null}function N(y,m,b,z,Z){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return y=y.get(b)||null,r(m,y,""+z,Z);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case K:return y=y.get(z.key===null?b:z.key)||null,c(m,y,z,Z);case ee:return y=y.get(z.key===null?b:z.key)||null,p(m,y,z,Z);case Re:return z=ll(z),N(y,m,b,z,Z)}if(Ce(z)||Ee(z))return y=y.get(b)||null,E(m,y,z,Z,null);if(typeof z.then=="function")return N(y,m,b,zi(z),Z);if(z.$$typeof===ue)return N(y,m,b,Ai(m,z),Z);Bi(m,z)}return null}function I(y,m,b,z){for(var Z=null,me=null,G=m,se=m=0,fe=null;G!==null&&se<b.length;se++){G.index>se?(fe=G,G=null):fe=G.sibling;var ye=v(y,G,b[se],z);if(ye===null){G===null&&(G=fe);break}e&&G&&ye.alternate===null&&t(y,G),m=i(ye,m,se),me===null?Z=ye:me.sibling=ye,me=ye,G=fe}if(se===b.length)return a(y,G),he&&ea(y,se),Z;if(G===null){for(;se<b.length;se++)G=B(y,b[se],z),G!==null&&(m=i(G,m,se),me===null?Z=G:me.sibling=G,me=G);return he&&ea(y,se),Z}for(G=l(G);se<b.length;se++)fe=N(G,y,se,b[se],z),fe!==null&&(e&&fe.alternate!==null&&G.delete(fe.key===null?se:fe.key),m=i(fe,m,se),me===null?Z=fe:me.sibling=fe,me=fe);return e&&G.forEach(function(La){return t(y,La)}),he&&ea(y,se),Z}function F(y,m,b,z){if(b==null)throw Error(d(151));for(var Z=null,me=null,G=m,se=m=0,fe=null,ye=b.next();G!==null&&!ye.done;se++,ye=b.next()){G.index>se?(fe=G,G=null):fe=G.sibling;var La=v(y,G,ye.value,z);if(La===null){G===null&&(G=fe);break}e&&G&&La.alternate===null&&t(y,G),m=i(La,m,se),me===null?Z=La:me.sibling=La,me=La,G=fe}if(ye.done)return a(y,G),he&&ea(y,se),Z;if(G===null){for(;!ye.done;se++,ye=b.next())ye=B(y,ye.value,z),ye!==null&&(m=i(ye,m,se),me===null?Z=ye:me.sibling=ye,me=ye);return he&&ea(y,se),Z}for(G=l(G);!ye.done;se++,ye=b.next())ye=N(G,y,se,ye.value,z),ye!==null&&(e&&ye.alternate!==null&&G.delete(ye.key===null?se:ye.key),m=i(ye,m,se),me===null?Z=ye:me.sibling=ye,me=ye);return e&&G.forEach(function(X0){return t(y,X0)}),he&&ea(y,se),Z}function Te(y,m,b,z){if(typeof b=="object"&&b!==null&&b.type===ae&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case K:e:{for(var Z=b.key;m!==null;){if(m.key===Z){if(Z=b.type,Z===ae){if(m.tag===7){a(y,m.sibling),z=n(m,b.props.children),z.return=y,y=z;break e}}else if(m.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Re&&ll(Z)===m.type){a(y,m.sibling),z=n(m,b.props),Sn(z,b),z.return=y,y=z;break e}a(y,m);break}else t(y,m);m=m.sibling}b.type===ae?(z=Wa(b.props.children,y.mode,z,b.key),z.return=y,y=z):(z=Ni(b.type,b.key,b.props,null,y.mode,z),Sn(z,b),z.return=y,y=z)}return o(y);case ee:e:{for(Z=b.key;m!==null;){if(m.key===Z)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){a(y,m.sibling),z=n(m,b.children||[]),z.return=y,y=z;break e}else{a(y,m);break}else t(y,m);m=m.sibling}z=Fs(b,y.mode,z),z.return=y,y=z}return o(y);case Re:return b=ll(b),Te(y,m,b,z)}if(Ce(b))return I(y,m,b,z);if(Ee(b)){if(Z=Ee(b),typeof Z!="function")throw Error(d(150));return b=Z.call(b),F(y,m,b,z)}if(typeof b.then=="function")return Te(y,m,zi(b),z);if(b.$$typeof===ue)return Te(y,m,Ai(y,b),z);Bi(y,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,m!==null&&m.tag===6?(a(y,m.sibling),z=n(m,b),z.return=y,y=z):(a(y,m),z=$s(b,y.mode,z),z.return=y,y=z),o(y)):a(y,m)}return function(y,m,b,z){try{jn=0;var Z=Te(y,m,b,z);return Ul=null,Z}catch(G){if(G===_l||G===Ei)throw G;var me=vt(29,G,null,y.mode);return me.lanes=z,me.return=y,me}finally{}}}var il=lc(!0),nc=lc(!1),Aa=!1;function ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function co(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(be&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=wi(e),qr(e,null,a),t}return vi(e,l,t,a),wi(e)}function An(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ju(e,a)}}function fo(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ho=!1;function Tn(){if(ho){var e=Ml;if(e!==null)throw e}}function En(e,t,a,l){ho=!1;var n=e.updateQueue;Aa=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var c=r,p=c.next;c.next=null,o===null?i=p:o.next=p,o=c;var E=e.alternate;E!==null&&(E=E.updateQueue,r=E.lastBaseUpdate,r!==o&&(r===null?E.firstBaseUpdate=p:r.next=p,E.lastBaseUpdate=c))}if(i!==null){var B=n.baseState;o=0,E=p=c=null,r=i;do{var v=r.lane&-536870913,N=v!==r.lane;if(N?(de&v)===v:(l&v)===v){v!==0&&v===Cl&&(ho=!0),E!==null&&(E=E.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var I=e,F=r;v=t;var Te=a;switch(F.tag){case 1:if(I=F.payload,typeof I=="function"){B=I.call(Te,B,v);break e}B=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=F.payload,v=typeof I=="function"?I.call(Te,B,v):I,v==null)break e;B=Y({},B,v);break e;case 2:Aa=!0}}v=r.callback,v!==null&&(e.flags|=64,N&&(e.flags|=8192),N=n.callbacks,N===null?n.callbacks=[v]:N.push(v))}else N={lane:v,tag:r.tag,payload:r.payload,callback:r.callback,next:null},E===null?(p=E=N,c=B):E=E.next=N,o|=v;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;N=r,r=N.next,N.next=null,n.lastBaseUpdate=N,n.shared.pending=null}}while(!0);E===null&&(c=B),n.baseState=c,n.firstBaseUpdate=p,n.lastBaseUpdate=E,i===null&&(n.shared.lanes=0),Ma|=o,e.lanes=o,e.memoizedState=B}}function ic(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function sc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ic(a[e],t)}var Yl=h(null),Ci=h(0);function oc(e,t){e=da,k(Ci,e),k(Yl,t),da=e|t.baseLanes}function mo(){k(Ci,da),k(Yl,Yl.current)}function yo(){da=Ci.current,f(Yl),f(Ci)}var wt=h(null),Ut=null;function ka(e){var t=e.alternate;k(De,De.current&1),k(wt,e),Ut===null&&(t===null||Yl.current!==null||t.memoizedState!==null)&&(Ut=e)}function bo(e){k(De,De.current),k(wt,e),Ut===null&&(Ut=e)}function uc(e){e.tag===22?(k(De,De.current),k(wt,e),Ut===null&&(Ut=e)):za()}function za(){k(De,De.current),k(wt,wt.current)}function Nt(e){f(wt),Ut===e&&(Ut=null),f(De)}var De=h(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Nu(a)||ju(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var la=0,ne=null,Se=null,Ge=null,_i=!1,Ol=!1,sl=!1,Ui=0,kn=0,Hl=null,Ym=0;function Ye(){throw Error(d(321))}function po(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!xt(e[a],t[a]))return!1;return!0}function go(e,t,a,l,n,i){return la=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Xc:_o,sl=!1,i=a(l,n),sl=!1,Ol&&(i=cc(t,a,l,n)),rc(e),i}function rc(e){T.H=Cn;var t=Se!==null&&Se.next!==null;if(la=0,Ge=Se=ne=null,_i=!1,kn=0,Hl=null,t)throw Error(d(300));e===null||Xe||(e=e.dependencies,e!==null&&Si(e)&&(Xe=!0))}function cc(e,t,a,l){ne=e;var n=0;do{if(Ol&&(Hl=null),kn=0,Ol=!1,25<=n)throw Error(d(301));if(n+=1,Ge=Se=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=Qc,i=t(a,l)}while(Ol);return i}function Om(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?zn(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(ne.flags|=1024),t}function xo(){var e=Ui!==0;return Ui=0,e}function vo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function wo(e){if(_i){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_i=!1}la=0,Ge=Se=ne=null,Ol=!1,kn=Ui=0,Hl=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?ne.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Ve(){if(Se===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ge===null?ne.memoizedState:Ge.next;if(t!==null)Ge=t,Se=e;else{if(e===null)throw ne.alternate===null?Error(d(467)):Error(d(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ge===null?ne.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Yi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zn(e){var t=kn;return kn+=1,Hl===null&&(Hl=[]),e=ec(Hl,e,t),t=ne,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Xc:_o),e}function Oi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zn(e);if(e.$$typeof===ue)return tt(e)}throw Error(d(438,String(e)))}function No(e){var t=null,a=ne.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Yi(),ne.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=ie;return t.index++,a}function na(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=Ve();return jo(t,Se,e)}function jo(e,t,a){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var r=o=null,c=null,p=t,E=!1;do{var B=p.lane&-536870913;if(B!==p.lane?(de&B)===B:(la&B)===B){var v=p.revertLane;if(v===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),B===Cl&&(E=!0);else if((la&v)===v){p=p.next,v===Cl&&(E=!0);continue}else B={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(r=c=B,o=i):c=c.next=B,ne.lanes|=v,Ma|=v;B=p.action,sl&&a(i,B),i=p.hasEagerState?p.eagerState:a(i,B)}else v={lane:B,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(r=c=v,o=i):c=c.next=v,ne.lanes|=B,Ma|=B;p=p.next}while(p!==null&&p!==t);if(c===null?o=i:c.next=r,!xt(i,e.memoizedState)&&(Xe=!0,E&&(a=Ml,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=c,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function So(e){var t=Ve(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do i=e(i,o.action),o=o.next;while(o!==n);xt(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function dc(e,t,a){var l=ne,n=Ve(),i=he;if(i){if(a===void 0)throw Error(d(407));a=a()}else a=t();var o=!xt((Se||n).memoizedState,a);if(o&&(n.memoizedState=a,Xe=!0),n=n.queue,Eo(mc.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||Ge!==null&&Ge.memoizedState.tag&1){if(l.flags|=2048,Rl(9,{destroy:void 0},hc.bind(null,l,n,a,t),null),ze===null)throw Error(d(349));i||(la&127)!==0||fc(l,t,a)}return a}function fc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ne.updateQueue,t===null?(t=Yi(),ne.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function hc(e,t,a,l){t.value=a,t.getSnapshot=l,yc(t)&&bc(e)}function mc(e,t,a){return a(function(){yc(t)&&bc(e)})}function yc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!xt(e,a)}catch{return!0}}function bc(e){var t=Fa(e,2);t!==null&&mt(t,e,2)}function Ao(e){var t=ot();if(typeof e=="function"){var a=e;if(e=a(),sl){ga(!0);try{a()}finally{ga(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t}function pc(e,t,a,l){return e.baseState=a,jo(e,Se,typeof l=="function"?l:na)}function Hm(e,t,a,l,n){if(Vi(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};T.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,gc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function gc(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=T.T,o={};T.T=o;try{var r=a(n,l),c=T.S;c!==null&&c(o,r),xc(e,t,r)}catch(p){To(e,t,p)}finally{i!==null&&o.types!==null&&(i.types=o.types),T.T=i}}else try{i=a(n,l),xc(e,t,i)}catch(p){To(e,t,p)}}function xc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){vc(e,t,l)},function(l){return To(e,t,l)}):vc(e,t,a)}function vc(e,t,a){t.status="fulfilled",t.value=a,wc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,gc(e,a)))}function To(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,wc(t),t=t.next;while(t!==l)}e.action=null}function wc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Nc(e,t){return t}function jc(e,t){if(he){var a=ze.formState;if(a!==null){e:{var l=ne;if(he){if(Me){t:{for(var n=Me,i=_t;n.nodeType!==8;){if(!i){n=null;break t}if(n=Yt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Me=Yt(n.nextSibling),l=n.data==="F!";break e}}ja(l)}l=!1}l&&(t=a[0])}}return a=ot(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nc,lastRenderedState:t},a.queue=l,a=Lc.bind(null,ne,l),l.dispatch=a,l=Ao(!1),i=Mo.bind(null,ne,!1,l.queue),l=ot(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Hm.bind(null,ne,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Sc(e){var t=Ve();return Ac(t,Se,e)}function Ac(e,t,a){if(t=jo(e,t,Nc)[0],e=Hi(na)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=zn(t)}catch(o){throw o===_l?Ei:o}else l=t;t=Ve();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ne.flags|=2048,Rl(9,{destroy:void 0},Rm.bind(null,n,a),null)),[l,i,e]}function Rm(e,t){e.action=t}function Tc(e){var t=Ve(),a=Se;if(a!==null)return Ac(t,a,e);Ve(),t=t.memoizedState,a=Ve();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Rl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ne.updateQueue,t===null&&(t=Yi(),ne.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ec(){return Ve().memoizedState}function Ri(e,t,a,l){var n=ot();ne.flags|=e,n.memoizedState=Rl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Di(e,t,a,l){var n=Ve();l=l===void 0?null:l;var i=n.memoizedState.inst;Se!==null&&l!==null&&po(l,Se.memoizedState.deps)?n.memoizedState=Rl(t,i,a,l):(ne.flags|=e,n.memoizedState=Rl(1|t,i,a,l))}function kc(e,t){Ri(8390656,8,e,t)}function Eo(e,t){Di(2048,8,e,t)}function Dm(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=Yi(),ne.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function zc(e){var t=Ve().memoizedState;return Dm({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function Bc(e,t){return Di(4,2,e,t)}function Cc(e,t){return Di(4,4,e,t)}function Mc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _c(e,t,a){a=a!=null?a.concat([e]):null,Di(4,4,Mc.bind(null,t,e),a)}function ko(){}function Uc(e,t){var a=Ve();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&po(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Yc(e,t){var a=Ve();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&po(t,l[1]))return l[0];if(l=e(),sl){ga(!0);try{e()}finally{ga(!1)}}return a.memoizedState=[l,t],l}function zo(e,t,a){return a===void 0||(la&1073741824)!==0&&(de&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Od(),ne.lanes|=e,Ma|=e,a)}function Oc(e,t,a,l){return xt(a,t)?a:Yl.current!==null?(e=zo(e,a,l),xt(e,t)||(Xe=!0),e):(la&42)===0||(la&1073741824)!==0&&(de&261930)===0?(Xe=!0,e.memoizedState=a):(e=Od(),ne.lanes|=e,Ma|=e,t)}function Hc(e,t,a,l,n){var i=D.p;D.p=i!==0&&8>i?i:8;var o=T.T,r={};T.T=r,Mo(e,!1,t,a);try{var c=n(),p=T.S;if(p!==null&&p(r,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var E=Um(c,l);Bn(e,t,E,At(e))}else Bn(e,t,l,At(e))}catch(B){Bn(e,t,{then:function(){},status:"rejected",reason:B},At())}finally{D.p=i,o!==null&&r.types!==null&&(o.types=r.types),T.T=o}}function Vm(){}function Bo(e,t,a,l){if(e.tag!==5)throw Error(d(476));var n=Rc(e).queue;Hc(e,n,t,A,a===null?Vm:function(){return Dc(e),a(l)})}function Rc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:A,baseState:A,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:A},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dc(e){var t=Rc(e);t.next===null&&(t=e.alternate.memoizedState),Bn(e,t.next.queue,{},At())}function Co(){return tt(Zn)}function Vc(){return Ve().memoizedState}function qc(){return Ve().memoizedState}function qm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=At();e=Ta(a);var l=Ea(t,e,a);l!==null&&(mt(l,t,a),An(l,t,a)),t={cache:io()},e.payload=t;return}t=t.return}}function Lm(e,t,a){var l=At();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vi(e)?Ic(t,a):(a=Ks(e,t,a,l),a!==null&&(mt(a,e,l),Gc(a,t,l)))}function Lc(e,t,a){var l=At();Bn(e,t,a,l)}function Bn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vi(e))Ic(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,r=i(o,a);if(n.hasEagerState=!0,n.eagerState=r,xt(r,o))return vi(e,t,n,0),ze===null&&xi(),!1}catch{}finally{}if(a=Ks(e,t,n,l),a!==null)return mt(a,e,l),Gc(a,t,l),!0}return!1}function Mo(e,t,a,l){if(l={lane:2,revertLane:cu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Vi(e)){if(t)throw Error(d(479))}else t=Ks(e,a,l,2),t!==null&&mt(t,e,2)}function Vi(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Ic(e,t){Ol=_i=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Gc(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ju(e,a)}}var Cn={readContext:tt,use:Oi,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye};Cn.useEffectEvent=Ye;var Xc={readContext:tt,use:Oi,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:kc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ri(4194308,4,Mc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){Ri(4,2,e,t)},useMemo:function(e,t){var a=ot();t=t===void 0?null:t;var l=e();if(sl){ga(!0);try{e()}finally{ga(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ot();if(a!==void 0){var n=a(t);if(sl){ga(!0);try{a(t)}finally{ga(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Lm.bind(null,ne,e),[l.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=Ao(e);var t=e.queue,a=Lc.bind(null,ne,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ko,useDeferredValue:function(e,t){var a=ot();return zo(a,e,t)},useTransition:function(){var e=Ao(!1);return e=Hc.bind(null,ne,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ne,n=ot();if(he){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),ze===null)throw Error(d(349));(de&127)!==0||fc(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,kc(mc.bind(null,l,i,e),[e]),l.flags|=2048,Rl(9,{destroy:void 0},hc.bind(null,l,i,a,t),null),a},useId:function(){var e=ot(),t=ze.identifierPrefix;if(he){var a=Gt,l=It;a=(l&~(1<<32-gt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ui++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Ym++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Co,useFormState:jc,useActionState:jc,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Mo.bind(null,ne,!0,a),a.dispatch=t,[e,t]},useMemoCache:No,useCacheRefresh:function(){return ot().memoizedState=qm.bind(null,ne)},useEffectEvent:function(e){var t=ot(),a={impl:e};return t.memoizedState=a,function(){if((be&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},_o={readContext:tt,use:Oi,useCallback:Uc,useContext:tt,useEffect:Eo,useImperativeHandle:_c,useInsertionEffect:Bc,useLayoutEffect:Cc,useMemo:Yc,useReducer:Hi,useRef:Ec,useState:function(){return Hi(na)},useDebugValue:ko,useDeferredValue:function(e,t){var a=Ve();return Oc(a,Se.memoizedState,e,t)},useTransition:function(){var e=Hi(na)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:zn(e),t]},useSyncExternalStore:dc,useId:Vc,useHostTransitionStatus:Co,useFormState:Sc,useActionState:Sc,useOptimistic:function(e,t){var a=Ve();return pc(a,Se,e,t)},useMemoCache:No,useCacheRefresh:qc};_o.useEffectEvent=zc;var Qc={readContext:tt,use:Oi,useCallback:Uc,useContext:tt,useEffect:Eo,useImperativeHandle:_c,useInsertionEffect:Bc,useLayoutEffect:Cc,useMemo:Yc,useReducer:So,useRef:Ec,useState:function(){return So(na)},useDebugValue:ko,useDeferredValue:function(e,t){var a=Ve();return Se===null?zo(a,e,t):Oc(a,Se.memoizedState,e,t)},useTransition:function(){var e=So(na)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:zn(e),t]},useSyncExternalStore:dc,useId:Vc,useHostTransitionStatus:Co,useFormState:Tc,useActionState:Tc,useOptimistic:function(e,t){var a=Ve();return Se!==null?pc(a,Se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:No,useCacheRefresh:qc};Qc.useEffectEvent=zc;function Uo(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:Y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yo={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=At(),n=Ta(l);n.payload=t,a!=null&&(n.callback=a),t=Ea(e,n,l),t!==null&&(mt(t,e,l),An(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=At(),n=Ta(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Ea(e,n,l),t!==null&&(mt(t,e,l),An(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=At(),l=Ta(a);l.tag=2,t!=null&&(l.callback=t),t=Ea(e,l,a),t!==null&&(mt(t,e,a),An(t,e,a))}};function Zc(e,t,a,l,n,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!pn(a,l)||!pn(n,i):!0}function Kc(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function ol(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=Y({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Jc(e){gi(e)}function $c(e){console.error(e)}function Fc(e){gi(e)}function qi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Wc(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Oo(e,t,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){qi(e,t)},a}function Pc(e){return e=Ta(e),e.tag=3,e}function ed(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Wc(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Wc(t,a,l),typeof n!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function Im(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Bl(t,a,n,!0),a=wt.current,a!==null){switch(a.tag){case 31:case 13:return Ut===null?Pi():a.alternate===null&&Oe===0&&(Oe=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===ki?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ou(e,l,n)),!1;case 22:return a.flags|=65536,l===ki?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ou(e,l,n)),!1}throw Error(d(435,a.tag))}return ou(e,l,n),Pi(),!1}if(he)return t=wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==eo&&(e=Error(d(422),{cause:l}),vn(Bt(e,a)))):(l!==eo&&(t=Error(d(423),{cause:l}),vn(Bt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Bt(l,a),n=Oo(e.stateNode,l,n),fo(e,n),Oe!==4&&(Oe=2)),!1;var i=Error(d(520),{cause:l});if(i=Bt(i,a),Dn===null?Dn=[i]:Dn.push(i),Oe!==4&&(Oe=2),t===null)return!0;l=Bt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Oo(a.stateNode,l,e),fo(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(_a===null||!_a.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Pc(n),ed(n,e,a,l),fo(a,n),!1}a=a.return}while(a!==null);return!1}var Ho=Error(d(461)),Xe=!1;function at(e,t,a,l){t.child=e===null?nc(t,null,a,l):il(t,e.child,a,l)}function td(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var o={};for(var r in l)r!=="ref"&&(o[r]=l[r])}else o=l;return tl(t),l=go(e,t,a,o,i,n),r=xo(),e!==null&&!Xe?(vo(e,t,n),ia(e,t,n)):(he&&r&&Ws(t),t.flags|=1,at(e,t,l,n),t.child)}function ad(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Js(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,ld(e,t,i,l,n)):(e=Ni(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Xo(e,n)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:pn,a(o,l)&&e.ref===t.ref)return ia(e,t,n)}return t.flags|=1,e=Pt(i,l),e.ref=t.ref,e.return=t,t.child=e}function ld(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(pn(i,l)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=l=i,Xo(e,n))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,ia(e,t,n)}return Ro(e,t,a,l,n)}function nd(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return id(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ti(t,i!==null?i.cachePool:null),i!==null?oc(t,i):mo(),uc(t);else return l=t.lanes=536870912,id(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Ti(t,i.cachePool),oc(t,i),za(),t.memoizedState=null):(e!==null&&Ti(t,null),mo(),za());return at(e,t,n,a),t.child}function Mn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function id(e,t,a,l,n){var i=oo();return i=i===null?null:{parent:Ie._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Ti(t,null),mo(),uc(t),e!==null&&Bl(e,t,l,!0),t.childLanes=n,null}function Li(e,t){return t=Gi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sd(e,t,a){return il(t,e.child,null,a),e=Li(t,t.pendingProps),e.flags|=2,Nt(t),t.memoizedState=null,e}function Gm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(he){if(l.mode==="hidden")return e=Li(t,l),t.lanes=536870912,Mn(null,e);if(bo(t),(e=Me)?(e=xf(e,_t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wa!==null?{id:It,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},a=Ir(e),a.return=t,t.child=a,et=t,Me=null)):e=null,e===null)throw ja(t);return t.lanes=536870912,null}return Li(t,l)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(bo(t),n)if(t.flags&256)t.flags&=-257,t=sd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Xe||Bl(e,t,a,!1),n=(a&e.childLanes)!==0,Xe||n){if(l=ze,l!==null&&(o=$u(l,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,Fa(e,o),mt(l,e,o),Ho;Pi(),t=sd(e,t,a)}else e=i.treeContext,Me=Yt(o.nextSibling),et=t,he=!0,Na=null,_t=!1,e!==null&&Qr(t,e),t=Li(t,l),t.flags|=4096;return t}return e=Pt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ii(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ro(e,t,a,l,n){return tl(t),a=go(e,t,a,l,void 0,n),l=xo(),e!==null&&!Xe?(vo(e,t,n),ia(e,t,n)):(he&&l&&Ws(t),t.flags|=1,at(e,t,a,n),t.child)}function od(e,t,a,l,n,i){return tl(t),t.updateQueue=null,a=cc(t,l,a,n),rc(e),l=xo(),e!==null&&!Xe?(vo(e,t,i),ia(e,t,i)):(he&&l&&Ws(t),t.flags|=1,at(e,t,a,i),t.child)}function ud(e,t,a,l,n){if(tl(t),t.stateNode===null){var i=Tl,o=a.contextType;typeof o=="object"&&o!==null&&(i=tt(o)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Yo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ro(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?tt(o):Tl,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Uo(t,a,o,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Yo.enqueueReplaceState(i,i.state,null),En(t,l,i,n),Tn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var r=t.memoizedProps,c=ol(a,r);i.props=c;var p=i.context,E=a.contextType;o=Tl,typeof E=="object"&&E!==null&&(o=tt(E));var B=a.getDerivedStateFromProps;E=typeof B=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,E||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||p!==o)&&Kc(t,i,l,o),Aa=!1;var v=t.memoizedState;i.state=v,En(t,l,i,n),Tn(),p=t.memoizedState,r||v!==p||Aa?(typeof B=="function"&&(Uo(t,a,B,l),p=t.memoizedState),(c=Aa||Zc(t,a,c,l,v,p,o))?(E||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=p),i.props=l,i.state=p,i.context=o,l=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,co(e,t),o=t.memoizedProps,E=ol(a,o),i.props=E,B=t.pendingProps,v=i.context,p=a.contextType,c=Tl,typeof p=="object"&&p!==null&&(c=tt(p)),r=a.getDerivedStateFromProps,(p=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==B||v!==c)&&Kc(t,i,l,c),Aa=!1,v=t.memoizedState,i.state=v,En(t,l,i,n),Tn();var N=t.memoizedState;o!==B||v!==N||Aa||e!==null&&e.dependencies!==null&&Si(e.dependencies)?(typeof r=="function"&&(Uo(t,a,r,l),N=t.memoizedState),(E=Aa||Zc(t,a,E,l,v,N,c)||e!==null&&e.dependencies!==null&&Si(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,N,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,N,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=N),i.props=l,i.state=N,i.context=c,l=E):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ii(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=il(t,e.child,null,n),t.child=il(t,null,a,n)):at(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ia(e,t,n),e}function rd(e,t,a,l){return Pa(),t.flags|=256,at(e,t,a,l),t.child}var Do={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vo(e){return{baseLanes:e,cachePool:Wr()}}function qo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=St),e}function cd(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(n?ka(t):za(),(e=Me)?(e=xf(e,_t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wa!==null?{id:It,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},a=Ir(e),a.return=t,t.child=a,et=t,Me=null)):e=null,e===null)throw ja(t);return ju(e)?t.lanes=32:t.lanes=536870912,null}var r=l.children;return l=l.fallback,n?(za(),n=t.mode,r=Gi({mode:"hidden",children:r},n),l=Wa(l,n,a,null),r.return=t,l.return=t,r.sibling=l,t.child=r,l=t.child,l.memoizedState=Vo(a),l.childLanes=qo(e,o,a),t.memoizedState=Do,Mn(null,l)):(ka(t),Lo(t,r))}var c=e.memoizedState;if(c!==null&&(r=c.dehydrated,r!==null)){if(i)t.flags&256?(ka(t),t.flags&=-257,t=Io(e,t,a)):t.memoizedState!==null?(za(),t.child=e.child,t.flags|=128,t=null):(za(),r=l.fallback,n=t.mode,l=Gi({mode:"visible",children:l.children},n),r=Wa(r,n,a,null),r.flags|=2,l.return=t,r.return=t,l.sibling=r,t.child=l,il(t,e.child,null,a),l=t.child,l.memoizedState=Vo(a),l.childLanes=qo(e,o,a),t.memoizedState=Do,t=Mn(null,l));else if(ka(t),ju(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var p=o.dgst;o=p,l=Error(d(419)),l.stack="",l.digest=o,vn({value:l,source:null,stack:null}),t=Io(e,t,a)}else if(Xe||Bl(e,t,a,!1),o=(a&e.childLanes)!==0,Xe||o){if(o=ze,o!==null&&(l=$u(o,a),l!==0&&l!==c.retryLane))throw c.retryLane=l,Fa(e,l),mt(o,e,l),Ho;Nu(r)||Pi(),t=Io(e,t,a)}else Nu(r)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,Me=Yt(r.nextSibling),et=t,he=!0,Na=null,_t=!1,e!==null&&Qr(t,e),t=Lo(t,l.children),t.flags|=4096);return t}return n?(za(),r=l.fallback,n=t.mode,c=e.child,p=c.sibling,l=Pt(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,p!==null?r=Pt(p,r):(r=Wa(r,n,a,null),r.flags|=2),r.return=t,l.return=t,l.sibling=r,t.child=l,Mn(null,l),l=t.child,r=e.child.memoizedState,r===null?r=Vo(a):(n=r.cachePool,n!==null?(c=Ie._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=Wr(),r={baseLanes:r.baseLanes|a,cachePool:n}),l.memoizedState=r,l.childLanes=qo(e,o,a),t.memoizedState=Do,Mn(e.child,l)):(ka(t),a=e.child,e=a.sibling,a=Pt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Lo(e,t){return t=Gi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gi(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function Io(e,t,a){return il(t,e.child,null,a),e=Lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),lo(e.return,t,a)}function Go(e,t,a,l,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=i)}function fd(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var o=De.current,r=(o&2)!==0;if(r?(o=o&1|2,t.flags|=128):o&=1,k(De,o),at(e,t,l,a),l=he?xn:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dd(e,a,t);else if(e.tag===19)dd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Mi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Go(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Mi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Go(t,!0,a,null,i,l);break;case"together":Go(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ia(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ma|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Bl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=Pt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Pt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Xo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Si(e)))}function Xm(e,t,a){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),Sa(t,Ie,e.memoizedState.cache),Pa();break;case 27:case 5:Zt(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:Sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,bo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ka(t),t.flags|=128,null):(a&t.child.childLanes)!==0?cd(e,t,a):(ka(t),e=ia(e,t,a),e!==null?e.sibling:null);ka(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Bl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return fd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),k(De,De.current),l)break;return null;case 22:return t.lanes=0,nd(e,t,a,t.pendingProps);case 24:Sa(t,Ie,e.memoizedState.cache)}return ia(e,t,a)}function hd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Xo(e,a)&&(t.flags&128)===0)return Xe=!1,Xm(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,he&&(t.flags&1048576)!==0&&Xr(t,xn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=ll(t.elementType),t.type=e,typeof e=="function")Js(e)?(l=ol(e,l),t.tag=1,t=ud(null,t,e,l,a)):(t.tag=0,t=Ro(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===je){t.tag=11,t=td(null,t,e,l,a);break e}else if(n===te){t.tag=14,t=ad(null,t,e,l,a);break e}}throw t=Je(e)||e,Error(d(306,t,""))}}return t;case 0:return Ro(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=ol(l,t.pendingProps),ud(e,t,l,n,a);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(d(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,co(e,t),En(t,l,null,a);var o=t.memoizedState;if(l=o.cache,Sa(t,Ie,l),l!==i.cache&&no(t,[Ie],a,!0),Tn(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=rd(e,t,l,a);break e}else if(l!==n){n=Bt(Error(d(424)),t),vn(n),t=rd(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=Yt(e.firstChild),et=t,he=!0,Na=null,_t=!0,a=nc(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Pa(),l===n){t=ia(e,t,a);break e}at(e,t,l,a)}t=t.child}return t;case 26:return Ii(e,t),e===null?(a=Af(t.type,null,t.pendingProps,null))?t.memoizedState=a:he||(a=t.type,e=t.pendingProps,l=ss(oe.current).createElement(a),l[Pe]=t,l[ut]=e,lt(l,a,e),Fe(l),t.stateNode=l):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Zt(t),e===null&&he&&(l=t.stateNode=Nf(t.type,t.pendingProps,oe.current),et=t,_t=!0,n=Me,Ha(t.type)?(Su=n,Me=Yt(l.firstChild)):Me=n),at(e,t,t.pendingProps.children,a),Ii(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((n=l=Me)&&(l=w0(l,t.type,t.pendingProps,_t),l!==null?(t.stateNode=l,et=t,Me=Yt(l.firstChild),_t=!1,n=!0):n=!1),n||ja(t)),Zt(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,xu(n,i)?l=null:o!==null&&xu(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=go(e,t,Om,null,null,a),Zn._currentValue=n),Ii(e,t),at(e,t,l,a),t.child;case 6:return e===null&&he&&((e=a=Me)&&(a=N0(a,t.pendingProps,_t),a!==null?(t.stateNode=a,et=t,Me=null,e=!0):e=!1),e||ja(t)),null;case 13:return cd(e,t,a);case 4:return $e(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=il(t,null,l,a):at(e,t,l,a),t.child;case 11:return td(e,t,t.type,t.pendingProps,a);case 7:return at(e,t,t.pendingProps,a),t.child;case 8:return at(e,t,t.pendingProps.children,a),t.child;case 12:return at(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Sa(t,t.type,l.value),at(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,tl(t),n=tt(n),l=l(n),t.flags|=1,at(e,t,l,a),t.child;case 14:return ad(e,t,t.type,t.pendingProps,a);case 15:return ld(e,t,t.type,t.pendingProps,a);case 19:return fd(e,t,a);case 31:return Gm(e,t,a);case 22:return nd(e,t,a,t.pendingProps);case 24:return tl(t),l=tt(Ie),e===null?(n=oo(),n===null&&(n=ze,i=io(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ro(t),Sa(t,Ie,n)):((e.lanes&a)!==0&&(co(e,t),En(t,null,null,a),Tn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Sa(t,Ie,l)):(l=i.cache,Sa(t,Ie,l),l!==n.cache&&no(t,[Ie],a,!0))),at(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function sa(e){e.flags|=4}function Qo(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Vd())e.flags|=8192;else throw nl=ki,uo}else e.flags&=-16777217}function md(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bf(t))if(Vd())e.flags|=8192;else throw nl=ki,uo}function Xi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Zu():536870912,e.lanes|=t,Ll|=t)}function _n(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Qm(e,t,a){var l=t.pendingProps;switch(Ps(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),aa(Ie),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zl(t)?sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,to())),_e(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(sa(t),i!==null?(_e(t),md(t,i)):(_e(t),Qo(t,n,null,l,a))):i?i!==e.memoizedState?(sa(t),_e(t),md(t,i)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&sa(t),_e(t),Qo(t,n,e,l,a)),null;case 27:if(ba(t),a=oe.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&sa(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return _e(t),null}e=_.current,zl(t)?Zr(t):(e=Nf(n,l,a),t.stateNode=e,sa(t))}return _e(t),null;case 5:if(ba(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&sa(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return _e(t),null}if(i=_.current,zl(t))Zr(t);else{var o=ss(oe.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}i[Pe]=t,i[ut]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(lt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&sa(t)}}return _e(t),Qo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&sa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(d(166));if(e=oe.current,zl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=et,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||df(e.nodeValue,a)),e||ja(t,!0)}else e=ss(e).createTextNode(l),e[Pe]=t,t.stateNode=e}return _e(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=zl(t),a!==null){if(e===null){if(!l)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Pe]=t}else Pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else a=to(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Nt(t),t):(Nt(t),null);if((t.flags&128)!==0)throw Error(d(558))}return _e(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=zl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Pe]=t}else Pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),n=!1}else n=to(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Nt(t),t):(Nt(t),null)}return Nt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Xi(t,t.updateQueue),_e(t),null);case 4:return ke(),e===null&&mu(t.stateNode.containerInfo),_e(t),null;case 10:return aa(t.type),_e(t),null;case 19:if(f(De),l=t.memoizedState,l===null)return _e(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)_n(l,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Mi(e),i!==null){for(t.flags|=128,_n(l,!1),e=i.updateQueue,t.updateQueue=e,Xi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Lr(a,e),a=a.sibling;return k(De,De.current&1|2),he&&ea(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&P()>$i&&(t.flags|=128,n=!0,_n(l,!1),t.lanes=4194304)}else{if(!n)if(e=Mi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Xi(t,e),_n(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!he)return _e(t),null}else 2*P()-l.renderingStartTime>$i&&a!==536870912&&(t.flags|=128,n=!0,_n(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=P(),e.sibling=null,a=De.current,k(De,n?a&1|2:a&1),he&&ea(t,l.treeForkCount),e):(_e(t),null);case 22:case 23:return Nt(t),yo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),a=t.updateQueue,a!==null&&Xi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&f(al),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),aa(Ie),_e(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Zm(e,t){switch(Ps(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return aa(Ie),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ba(t),null;case 31:if(t.memoizedState!==null){if(Nt(t),t.alternate===null)throw Error(d(340));Pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return f(De),null;case 4:return ke(),null;case 10:return aa(t.type),null;case 22:case 23:return Nt(t),yo(),e!==null&&f(al),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return aa(Ie),null;case 25:return null;default:return null}}function yd(e,t){switch(Ps(t),t.tag){case 3:aa(Ie),ke();break;case 26:case 27:case 5:ba(t);break;case 4:ke();break;case 31:t.memoizedState!==null&&Nt(t);break;case 13:Nt(t);break;case 19:f(De);break;case 10:aa(t.type);break;case 22:case 23:Nt(t),yo(),e!==null&&f(al);break;case 24:aa(Ie)}}function Un(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,o=a.inst;l=i(),o.destroy=l}a=a.next}while(a!==n)}}catch(r){ve(t,t.return,r)}}function Ba(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var o=l.inst,r=o.destroy;if(r!==void 0){o.destroy=void 0,n=t;var c=a,p=r;try{p()}catch(E){ve(n,c,E)}}}l=l.next}while(l!==i)}}catch(E){ve(t,t.return,E)}}function bd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{sc(t,a)}catch(l){ve(e,e.return,l)}}}function pd(e,t,a){a.props=ol(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ve(e,t,l)}}function Yn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ve(e,t,n)}}function Xt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ve(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ve(e,t,n)}else a.current=null}function gd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ve(e,e.return,n)}}function Zo(e,t,a){try{var l=e.stateNode;y0(l,e.type,a,t),l[ut]=t}catch(n){ve(e,e.return,n)}}function xd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function Ko(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ft));else if(l!==4&&(l===27&&Ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Jo(e,t,a),e=e.sibling;e!==null;)Jo(e,t,a),e=e.sibling}function Qi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Qi(e,t,a),e=e.sibling;e!==null;)Qi(e,t,a),e=e.sibling}function vd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);lt(t,l,a),t[Pe]=e,t[ut]=a}catch(i){ve(e,e.return,i)}}var oa=!1,Qe=!1,$o=!1,wd=typeof WeakSet=="function"?WeakSet:Set,We=null;function Km(e,t){if(e=e.containerInfo,pu=hs,e=_r(e),Ls(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,r=-1,c=-1,p=0,E=0,B=e,v=null;t:for(;;){for(var N;B!==a||n!==0&&B.nodeType!==3||(r=o+n),B!==i||l!==0&&B.nodeType!==3||(c=o+l),B.nodeType===3&&(o+=B.nodeValue.length),(N=B.firstChild)!==null;)v=B,B=N;for(;;){if(B===e)break t;if(v===a&&++p===n&&(r=o),v===i&&++E===l&&(c=o),(N=B.nextSibling)!==null)break;B=v,v=B.parentNode}B=N}a=r===-1||c===-1?null:{start:r,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(gu={focusedElem:e,selectionRange:a},hs=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var I=ol(a.type,n);e=l.getSnapshotBeforeUpdate(I,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(F){ve(a,a.return,F)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)wu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function Nd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),l&4&&Un(5,a);break;case 1:if(ra(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ve(a,a.return,o)}else{var n=ol(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ve(a,a.return,o)}}l&64&&bd(a),l&512&&Yn(a,a.return);break;case 3:if(ra(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{sc(e,t)}catch(o){ve(a,a.return,o)}}break;case 27:t===null&&l&4&&vd(a);case 26:case 5:ra(e,a),t===null&&l&4&&gd(a),l&512&&Yn(a,a.return);break;case 12:ra(e,a);break;case 31:ra(e,a),l&4&&Ad(e,a);break;case 13:ra(e,a),l&4&&Td(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=l0.bind(null,a),j0(e,a))));break;case 22:if(l=a.memoizedState!==null||oa,!l){t=t!==null&&t.memoizedState!==null||Qe,n=oa;var i=Qe;oa=l,(Qe=t)&&!i?ca(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),oa=n,Qe=i}break;case 30:break;default:ra(e,a)}}function jd(e){var t=e.alternate;t!==null&&(e.alternate=null,jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&As(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,ct=!1;function ua(e,t,a){for(a=a.child;a!==null;)Sd(e,t,a),a=a.sibling}function Sd(e,t,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(fl,a)}catch{}switch(a.tag){case 26:Qe||Xt(a,t),ua(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||Xt(a,t);var l=Ue,n=ct;Ha(a.type)&&(Ue=a.stateNode,ct=!1),ua(e,t,a),Gn(a.stateNode),Ue=l,ct=n;break;case 5:Qe||Xt(a,t);case 6:if(l=Ue,n=ct,Ue=null,ua(e,t,a),Ue=l,ct=n,Ue!==null)if(ct)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(a.stateNode)}catch(i){ve(a,t,i)}else try{Ue.removeChild(a.stateNode)}catch(i){ve(a,t,i)}break;case 18:Ue!==null&&(ct?(e=Ue,pf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$l(e)):pf(Ue,a.stateNode));break;case 4:l=Ue,n=ct,Ue=a.stateNode.containerInfo,ct=!0,ua(e,t,a),Ue=l,ct=n;break;case 0:case 11:case 14:case 15:Ba(2,a,t),Qe||Ba(4,a,t),ua(e,t,a);break;case 1:Qe||(Xt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&pd(a,t,l)),ua(e,t,a);break;case 21:ua(e,t,a);break;case 22:Qe=(l=Qe)||a.memoizedState!==null,ua(e,t,a),Qe=l;break;default:ua(e,t,a)}}function Ad(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$l(e)}catch(a){ve(t,t.return,a)}}}function Td(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$l(e)}catch(a){ve(t,t.return,a)}}function Jm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new wd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new wd),t;default:throw Error(d(435,e.tag))}}function Zi(e,t){var a=Jm(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=n0.bind(null,e,l);l.then(n,n)}})}function dt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,o=t,r=o;e:for(;r!==null;){switch(r.tag){case 27:if(Ha(r.type)){Ue=r.stateNode,ct=!1;break e}break;case 5:Ue=r.stateNode,ct=!1;break e;case 3:case 4:Ue=r.stateNode.containerInfo,ct=!0;break e}r=r.return}if(Ue===null)throw Error(d(160));Sd(i,o,n),Ue=null,ct=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ed(t,e),t=t.sibling}var qt=null;function Ed(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dt(t,e),ft(e),l&4&&(Ba(3,e,e.return),Un(3,e),Ba(5,e,e.return));break;case 1:dt(t,e),ft(e),l&512&&(Qe||a===null||Xt(a,a.return)),l&64&&oa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=qt;if(dt(t,e),ft(e),l&512&&(Qe||a===null||Xt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[un]||i[Pe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),lt(i,l,a),i[Pe]=e,Fe(i),l=i;break e;case"link":var o=kf("link","href",n).get(l+(a.href||""));if(o){for(var r=0;r<o.length;r++)if(i=o[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(r,1);break t}}i=n.createElement(l),lt(i,l,a),n.head.appendChild(i);break;case"meta":if(o=kf("meta","content",n).get(l+(a.content||""))){for(r=0;r<o.length;r++)if(i=o[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(r,1);break t}}i=n.createElement(l),lt(i,l,a),n.head.appendChild(i);break;default:throw Error(d(468,l))}i[Pe]=e,Fe(i),l=i}e.stateNode=l}else zf(n,e.type,e.stateNode);else e.stateNode=Ef(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?zf(n,e.type,e.stateNode):Ef(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Zo(e,e.memoizedProps,a.memoizedProps)}break;case 27:dt(t,e),ft(e),l&512&&(Qe||a===null||Xt(a,a.return)),a!==null&&l&4&&Zo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dt(t,e),ft(e),l&512&&(Qe||a===null||Xt(a,a.return)),e.flags&32){n=e.stateNode;try{xl(n,"")}catch(I){ve(e,e.return,I)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Zo(e,n,a!==null?a.memoizedProps:n)),l&1024&&($o=!0);break;case 6:if(dt(t,e),ft(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(I){ve(e,e.return,I)}}break;case 3:if(rs=null,n=qt,qt=os(t.containerInfo),dt(t,e),qt=n,ft(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{$l(t.containerInfo)}catch(I){ve(e,e.return,I)}$o&&($o=!1,kd(e));break;case 4:l=qt,qt=os(e.stateNode.containerInfo),dt(t,e),ft(e),qt=l;break;case 12:dt(t,e),ft(e);break;case 31:dt(t,e),ft(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 13:dt(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ji=P()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 22:n=e.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,p=oa,E=Qe;if(oa=p||n,Qe=E||c,dt(t,e),Qe=E,oa=p,ft(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||c||oa||Qe||ul(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(i=c.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{r=c.stateNode;var B=c.memoizedProps.style,v=B!=null&&B.hasOwnProperty("display")?B.display:null;r.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(I){ve(c,c.return,I)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(I){ve(c,c.return,I)}}}else if(t.tag===18){if(a===null){c=t;try{var N=c.stateNode;n?gf(N,!0):gf(c.stateNode,!1)}catch(I){ve(c,c.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Zi(e,a))));break;case 19:dt(t,e),ft(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 30:break;case 21:break;default:dt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(xd(l)){a=l;break}l=l.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var n=a.stateNode,i=Ko(e);Qi(e,i,n);break;case 5:var o=a.stateNode;a.flags&32&&(xl(o,""),a.flags&=-33);var r=Ko(e);Qi(e,r,o);break;case 3:case 4:var c=a.stateNode.containerInfo,p=Ko(e);Jo(e,p,c);break;default:throw Error(d(161))}}catch(E){ve(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ra(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Nd(e,t.alternate,t),t=t.sibling}function ul(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ba(4,t,t.return),ul(t);break;case 1:Xt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&pd(t,t.return,a),ul(t);break;case 27:Gn(t.stateNode);case 26:case 5:Xt(t,t.return),ul(t);break;case 22:t.memoizedState===null&&ul(t);break;case 30:ul(t);break;default:ul(t)}e=e.sibling}}function ca(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:ca(n,i,a),Un(4,i);break;case 1:if(ca(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){ve(l,l.return,p)}if(l=i,n=l.updateQueue,n!==null){var r=l.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)ic(c[n],r)}catch(p){ve(l,l.return,p)}}a&&o&64&&bd(i),Yn(i,i.return);break;case 27:vd(i);case 26:case 5:ca(n,i,a),a&&l===null&&o&4&&gd(i),Yn(i,i.return);break;case 12:ca(n,i,a);break;case 31:ca(n,i,a),a&&o&4&&Ad(n,i);break;case 13:ca(n,i,a),a&&o&4&&Td(n,i);break;case 22:i.memoizedState===null&&ca(n,i,a),Yn(i,i.return);break;case 30:break;default:ca(n,i,a)}t=t.sibling}}function Fo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&wn(a))}function Wo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wn(e))}function Lt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zd(e,t,a,l),t=t.sibling}function zd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,a,l),n&2048&&Un(9,t);break;case 1:Lt(e,t,a,l);break;case 3:Lt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wn(e)));break;case 12:if(n&2048){Lt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,r=i.onPostCommit;typeof r=="function"&&r(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){ve(t,t.return,c)}}else Lt(e,t,a,l);break;case 31:Lt(e,t,a,l);break;case 13:Lt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?Lt(e,t,a,l):On(e,t):i._visibility&2?Lt(e,t,a,l):(i._visibility|=2,Dl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Fo(o,t);break;case 24:Lt(e,t,a,l),n&2048&&Wo(t.alternate,t);break;default:Lt(e,t,a,l)}}function Dl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,r=a,c=l,p=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(i,o,r,c,n),Un(8,o);break;case 23:break;case 22:var E=o.stateNode;o.memoizedState!==null?E._visibility&2?Dl(i,o,r,c,n):On(i,o):(E._visibility|=2,Dl(i,o,r,c,n)),n&&p&2048&&Fo(o.alternate,o);break;case 24:Dl(i,o,r,c,n),n&&p&2048&&Wo(o.alternate,o);break;default:Dl(i,o,r,c,n)}t=t.sibling}}function On(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:On(a,l),n&2048&&Fo(l.alternate,l);break;case 24:On(a,l),n&2048&&Wo(l.alternate,l);break;default:On(a,l)}t=t.sibling}}var Hn=8192;function Vl(e,t,a){if(e.subtreeFlags&Hn)for(e=e.child;e!==null;)Bd(e,t,a),e=e.sibling}function Bd(e,t,a){switch(e.tag){case 26:Vl(e,t,a),e.flags&Hn&&e.memoizedState!==null&&Y0(a,qt,e.memoizedState,e.memoizedProps);break;case 5:Vl(e,t,a);break;case 3:case 4:var l=qt;qt=os(e.stateNode.containerInfo),Vl(e,t,a),qt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Hn,Hn=16777216,Vl(e,t,a),Hn=l):Vl(e,t,a));break;default:Vl(e,t,a)}}function Cd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Rn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];We=l,_d(l,e)}Cd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Md(e),e=e.sibling}function Md(e){switch(e.tag){case 0:case 11:case 15:Rn(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Rn(e);break;case 12:Rn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ki(e)):Rn(e);break;default:Rn(e)}}function Ki(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];We=l,_d(l,e)}Cd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ba(8,t,t.return),Ki(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ki(t));break;default:Ki(t)}e=e.sibling}}function _d(e,t){for(;We!==null;){var a=We;switch(a.tag){case 0:case 11:case 15:Ba(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:wn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,We=l;else e:for(a=e;We!==null;){l=We;var n=l.sibling,i=l.return;if(jd(l),l===a){We=null;break e}if(n!==null){n.return=i,We=n;break e}We=i}}}var $m={getCacheForType:function(e){var t=tt(Ie),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return tt(Ie).controller.signal}},Fm=typeof WeakMap=="function"?WeakMap:Map,be=0,ze=null,re=null,de=0,xe=0,jt=null,Ca=!1,ql=!1,Po=!1,da=0,Oe=0,Ma=0,rl=0,eu=0,St=0,Ll=0,Dn=null,ht=null,tu=!1,Ji=0,Ud=0,$i=1/0,Fi=null,_a=null,Ze=0,Ua=null,Il=null,fa=0,au=0,lu=null,Yd=null,Vn=0,nu=null;function At(){return(be&2)!==0&&de!==0?de&-de:T.T!==null?cu():Fu()}function Od(){if(St===0)if((de&536870912)===0||he){var e=ii;ii<<=1,(ii&3932160)===0&&(ii=262144),St=e}else St=536870912;return e=wt.current,e!==null&&(e.flags|=32),St}function mt(e,t,a){(e===ze&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Gl(e,0),Ya(e,de,St,!1)),on(e,a),((be&2)===0||e!==ze)&&(e===ze&&((be&2)===0&&(rl|=a),Oe===4&&Ya(e,de,St,!1)),Qt(e))}function Hd(e,t,a){if((be&6)!==0)throw Error(d(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||sn(e,t),n=l?e0(e,t):su(e,t,!0),i=l;do{if(n===0){ql&&!l&&Ya(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Wm(a)){n=su(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var r=e;n=Dn;var c=r.current.memoizedState.isDehydrated;if(c&&(Gl(r,o).flags|=256),o=su(r,o,!1),o!==2){if(Po&&!c){r.errorRecoveryDisabledLanes|=i,rl|=i,n=4;break e}i=ht,ht=n,i!==null&&(ht===null?ht=i:ht.push.apply(ht,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){Gl(e,0),Ya(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:Ya(l,t,St,!Ca);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(n=Ji+300-P(),10<n)){if(Ya(l,t,St,!Ca),oi(l,0,!0)!==0)break e;fa=t,l.timeoutHandle=yf(Rd.bind(null,l,a,ht,Fi,tu,t,St,rl,Ll,Ca,i,"Throttled",-0,0),n);break e}Rd(l,a,ht,Fi,tu,t,St,rl,Ll,Ca,i,null,-0,0)}}break}while(!0);Qt(e)}function Rd(e,t,a,l,n,i,o,r,c,p,E,B,v,N){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ft},Bd(t,i,B);var I=(i&62914560)===i?Ji-P():(i&4194048)===i?Ud-P():0;if(I=O0(B,I),I!==null){fa=i,e.cancelPendingCommit=I(Qd.bind(null,e,t,i,a,l,n,o,r,c,E,B,null,v,N)),Ya(e,i,o,!p);return}}Qd(e,t,i,a,l,n,o,r,c)}function Wm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!xt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ya(e,t,a,l){t&=~eu,t&=~rl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-gt(n),o=1<<i;l[i]=-1,n&=~o}a!==0&&Ku(e,a,t)}function Wi(){return(be&6)===0?(qn(0),!1):!0}function iu(){if(re!==null){if(xe===0)var e=re.return;else e=re,ta=el=null,wo(e),Ul=null,jn=0,e=re;for(;e!==null;)yd(e.alternate,e),e=e.return;re=null}}function Gl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,g0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,iu(),ze=e,re=a=Pt(e.current,null),de=t,xe=0,jt=null,Ca=!1,ql=sn(e,t),Po=!1,Ll=St=eu=rl=Ma=Oe=0,ht=Dn=null,tu=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-gt(l),i=1<<n;t|=e[n],l&=~i}return da=t,xi(),a}function Dd(e,t){ne=null,T.H=Cn,t===_l||t===Ei?(t=tc(),xe=3):t===uo?(t=tc(),xe=4):xe=t===Ho?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,re===null&&(Oe=1,qi(e,Bt(t,e.current)))}function Vd(){var e=wt.current;return e===null?!0:(de&4194048)===de?Ut===null:(de&62914560)===de||(de&536870912)!==0?e===Ut:!1}function qd(){var e=T.H;return T.H=Cn,e===null?Cn:e}function Ld(){var e=T.A;return T.A=$m,e}function Pi(){Oe=4,Ca||(de&4194048)!==de&&wt.current!==null||(ql=!0),(Ma&134217727)===0&&(rl&134217727)===0||ze===null||Ya(ze,de,St,!1)}function su(e,t,a){var l=be;be|=2;var n=qd(),i=Ld();(ze!==e||de!==t)&&(Fi=null,Gl(e,t)),t=!1;var o=Oe;e:do try{if(xe!==0&&re!==null){var r=re,c=jt;switch(xe){case 8:iu(),o=6;break e;case 3:case 2:case 9:case 6:wt.current===null&&(t=!0);var p=xe;if(xe=0,jt=null,Xl(e,r,c,p),a&&ql){o=0;break e}break;default:p=xe,xe=0,jt=null,Xl(e,r,c,p)}}Pm(),o=Oe;break}catch(E){Dd(e,E)}while(!0);return t&&e.shellSuspendCounter++,ta=el=null,be=l,T.H=n,T.A=i,re===null&&(ze=null,de=0,xi()),o}function Pm(){for(;re!==null;)Id(re)}function e0(e,t){var a=be;be|=2;var l=qd(),n=Ld();ze!==e||de!==t?(Fi=null,$i=P()+500,Gl(e,t)):ql=sn(e,t);e:do try{if(xe!==0&&re!==null){t=re;var i=jt;t:switch(xe){case 1:xe=0,jt=null,Xl(e,t,i,1);break;case 2:case 9:if(Pr(i)){xe=0,jt=null,Gd(t);break}t=function(){xe!==2&&xe!==9||ze!==e||(xe=7),Qt(e)},i.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Pr(i)?(xe=0,jt=null,Gd(t)):(xe=0,jt=null,Xl(e,t,i,7));break;case 5:var o=null;switch(re.tag){case 26:o=re.memoizedState;case 5:case 27:var r=re;if(o?Bf(o):r.stateNode.complete){xe=0,jt=null;var c=r.sibling;if(c!==null)re=c;else{var p=r.return;p!==null?(re=p,es(p)):re=null}break t}}xe=0,jt=null,Xl(e,t,i,5);break;case 6:xe=0,jt=null,Xl(e,t,i,6);break;case 8:iu(),Oe=6;break e;default:throw Error(d(462))}}t0();break}catch(E){Dd(e,E)}while(!0);return ta=el=null,T.H=l,T.A=n,be=a,re!==null?0:(ze=null,de=0,xi(),Oe)}function t0(){for(;re!==null&&!O();)Id(re)}function Id(e){var t=hd(e.alternate,e,da);e.memoizedProps=e.pendingProps,t===null?es(e):re=t}function Gd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=od(a,t,t.pendingProps,t.type,void 0,de);break;case 11:t=od(a,t,t.pendingProps,t.type.render,t.ref,de);break;case 5:wo(t);default:yd(a,t),t=re=Lr(t,da),t=hd(a,t,da)}e.memoizedProps=e.pendingProps,t===null?es(e):re=t}function Xl(e,t,a,l){ta=el=null,wo(t),Ul=null,jn=0;var n=t.return;try{if(Im(e,n,t,a,de)){Oe=1,qi(e,Bt(a,e.current)),re=null;return}}catch(i){if(n!==null)throw re=n,i;Oe=1,qi(e,Bt(a,e.current)),re=null;return}t.flags&32768?(he||l===1?e=!0:ql||(de&536870912)!==0?e=!1:(Ca=e=!0,(l===2||l===9||l===3||l===6)&&(l=wt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Xd(t,e)):es(t)}function es(e){var t=e;do{if((t.flags&32768)!==0){Xd(t,Ca);return}e=t.return;var a=Qm(t.alternate,t,da);if(a!==null){re=a;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);Oe===0&&(Oe=5)}function Xd(e,t){do{var a=Zm(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);Oe=6,re=null}function Qd(e,t,a,l,n,i,o,r,c){e.cancelPendingCommit=null;do ts();while(Ze!==0);if((be&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(i=t.lanes|t.childLanes,i|=Zs,Uh(e,a,i,o,r,c),e===ze&&(re=ze=null,de=0),Il=t,Ua=e,fa=a,au=i,lu=n,Yd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,i0(Le,function(){return Fd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=T.T,T.T=null,n=D.p,D.p=2,o=be,be|=4;try{Km(e,t,a)}finally{be=o,D.p=n,T.T=l}}Ze=1,Zd(),Kd(),Jd()}}function Zd(){if(Ze===1){Ze=0;var e=Ua,t=Il,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null;var l=D.p;D.p=2;var n=be;be|=4;try{Ed(t,e);var i=gu,o=_r(e.containerInfo),r=i.focusedElem,c=i.selectionRange;if(o!==r&&r&&r.ownerDocument&&Mr(r.ownerDocument.documentElement,r)){if(c!==null&&Ls(r)){var p=c.start,E=c.end;if(E===void 0&&(E=p),"selectionStart"in r)r.selectionStart=p,r.selectionEnd=Math.min(E,r.value.length);else{var B=r.ownerDocument||document,v=B&&B.defaultView||window;if(v.getSelection){var N=v.getSelection(),I=r.textContent.length,F=Math.min(c.start,I),Te=c.end===void 0?F:Math.min(c.end,I);!N.extend&&F>Te&&(o=Te,Te=F,F=o);var y=Cr(r,F),m=Cr(r,Te);if(y&&m&&(N.rangeCount!==1||N.anchorNode!==y.node||N.anchorOffset!==y.offset||N.focusNode!==m.node||N.focusOffset!==m.offset)){var b=B.createRange();b.setStart(y.node,y.offset),N.removeAllRanges(),F>Te?(N.addRange(b),N.extend(m.node,m.offset)):(b.setEnd(m.node,m.offset),N.addRange(b))}}}}for(B=[],N=r;N=N.parentNode;)N.nodeType===1&&B.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<B.length;r++){var z=B[r];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}hs=!!pu,gu=pu=null}finally{be=n,D.p=l,T.T=a}}e.current=t,Ze=2}}function Kd(){if(Ze===2){Ze=0;var e=Ua,t=Il,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=T.T,T.T=null;var l=D.p;D.p=2;var n=be;be|=4;try{Nd(e,t.alternate,t)}finally{be=n,D.p=l,T.T=a}}Ze=3}}function Jd(){if(Ze===4||Ze===3){Ze=0,M();var e=Ua,t=Il,a=fa,l=Yd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Il=Ua=null,$d(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(_a=null),js(a),t=t.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(fl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=T.T,n=D.p,D.p=2,T.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var r=l[o];i(r.value,{componentStack:r.stack})}}finally{T.T=t,D.p=n}}(fa&3)!==0&&ts(),Qt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===nu?Vn++:(Vn=0,nu=e):Vn=0,qn(0)}}function $d(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wn(t)))}function ts(){return Zd(),Kd(),Jd(),Fd()}function Fd(){if(Ze!==5)return!1;var e=Ua,t=au;au=0;var a=js(fa),l=T.T,n=D.p;try{D.p=32>a?32:a,T.T=null,a=lu,lu=null;var i=Ua,o=fa;if(Ze=0,Il=Ua=null,fa=0,(be&6)!==0)throw Error(d(331));var r=be;if(be|=4,Md(i.current),zd(i,i.current,o,a),be=r,qn(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(fl,i)}catch{}return!0}finally{D.p=n,T.T=l,$d(e,t)}}function Wd(e,t,a){t=Bt(a,t),t=Oo(e.stateNode,t,2),e=Ea(e,t,2),e!==null&&(on(e,2),Qt(e))}function ve(e,t,a){if(e.tag===3)Wd(e,e,a);else for(;t!==null;){if(t.tag===3){Wd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_a===null||!_a.has(l))){e=Bt(a,e),a=Pc(2),l=Ea(t,a,2),l!==null&&(ed(a,l,t,e),on(l,2),Qt(l));break}}t=t.return}}function ou(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Fm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Po=!0,n.add(a),e=a0.bind(null,e,t,a),t.then(e,e))}function a0(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ze===e&&(de&a)===a&&(Oe===4||Oe===3&&(de&62914560)===de&&300>P()-Ji?(be&2)===0&&Gl(e,0):eu|=a,Ll===de&&(Ll=0)),Qt(e)}function Pd(e,t){t===0&&(t=Zu()),e=Fa(e,t),e!==null&&(on(e,t),Qt(e))}function l0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Pd(e,a)}function n0(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(t),Pd(e,a)}function i0(e,t){return tn(e,t)}var as=null,Ql=null,uu=!1,ls=!1,ru=!1,Oa=0;function Qt(e){e!==Ql&&e.next===null&&(Ql===null?as=Ql=e:Ql=Ql.next=e),ls=!0,uu||(uu=!0,o0())}function qn(e,t){if(!ru&&ls){ru=!0;do for(var a=!1,l=as;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var o=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-gt(42|e)+1)-1,i&=n&~(o&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,lf(l,i))}else i=de,i=oi(l,l===ze?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||sn(l,i)||(a=!0,lf(l,i));l=l.next}while(a);ru=!1}}function s0(){ef()}function ef(){ls=uu=!1;var e=0;Oa!==0&&p0()&&(e=Oa);for(var t=P(),a=null,l=as;l!==null;){var n=l.next,i=tf(l,t);i===0?(l.next=null,a===null?as=n:a.next=n,n===null&&(Ql=a)):(a=l,(e!==0||(i&3)!==0)&&(ls=!0)),l=n}Ze!==0&&Ze!==5||qn(e),Oa!==0&&(Oa=0)}function tf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-gt(i),r=1<<o,c=n[o];c===-1?((r&a)===0||(r&l)!==0)&&(n[o]=_h(r,t)):c<=t&&(e.expiredLanes|=r),i&=~r}if(t=ze,a=de,a=oi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&an(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||sn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&an(l),js(a)){case 2:case 8:a=Jt;break;case 32:a=Le;break;case 268435456:a=ln;break;default:a=Le}return l=af.bind(null,e),a=tn(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&an(l),e.callbackPriority=2,e.callbackNode=null,2}function af(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ts()&&e.callbackNode!==a)return null;var l=de;return l=oi(e,e===ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Hd(e,l,t),tf(e,P()),e.callbackNode!=null&&e.callbackNode===a?af.bind(null,e):null)}function lf(e,t){if(ts())return null;Hd(e,t,!0)}function o0(){x0(function(){(be&6)!==0?tn(Rt,s0):ef()})}function cu(){if(Oa===0){var e=Cl;e===0&&(e=ni,ni<<=1,(ni&261888)===0&&(ni=256)),Oa=e}return Oa}function nf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:di(""+e)}function sf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function u0(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=nf((n[ut]||null).action),o=l.submitter;o&&(t=(t=o[ut]||null)?nf(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var r=new yi("action","action",null,l,n);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Oa!==0){var c=o?sf(n,o):new FormData(n);Bo(a,{pending:!0,data:c,method:n.method,action:i},null,c)}}else typeof i=="function"&&(r.preventDefault(),c=o?sf(n,o):new FormData(n),Bo(a,{pending:!0,data:c,method:n.method,action:i},i,c))},currentTarget:n}]})}}for(var du=0;du<Qs.length;du++){var fu=Qs[du],r0=fu.toLowerCase(),c0=fu[0].toUpperCase()+fu.slice(1);Vt(r0,"on"+c0)}Vt(Or,"onAnimationEnd"),Vt(Hr,"onAnimationIteration"),Vt(Rr,"onAnimationStart"),Vt("dblclick","onDoubleClick"),Vt("focusin","onFocus"),Vt("focusout","onBlur"),Vt(Tm,"onTransitionRun"),Vt(Em,"onTransitionStart"),Vt(km,"onTransitionCancel"),Vt(Dr,"onTransitionEnd"),pl("onMouseEnter",["mouseout","mouseover"]),pl("onMouseLeave",["mouseout","mouseover"]),pl("onPointerEnter",["pointerout","pointerover"]),pl("onPointerLeave",["pointerout","pointerover"]),Za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Za("onBeforeInput",["compositionend","keypress","textInput","paste"]),Za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ln));function of(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var r=l[o],c=r.instance,p=r.currentTarget;if(r=r.listener,c!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=p;try{i(n)}catch(E){gi(E)}n.currentTarget=null,i=c}else for(o=0;o<l.length;o++){if(r=l[o],c=r.instance,p=r.currentTarget,r=r.listener,c!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=p;try{i(n)}catch(E){gi(E)}n.currentTarget=null,i=c}}}}function ce(e,t){var a=t[Ss];a===void 0&&(a=t[Ss]=new Set);var l=e+"__bubble";a.has(l)||(uf(t,e,2,!1),a.add(l))}function hu(e,t,a){var l=0;t&&(l|=4),uf(a,e,l,t)}var ns="_reactListening"+Math.random().toString(36).slice(2);function mu(e){if(!e[ns]){e[ns]=!0,er.forEach(function(a){a!=="selectionchange"&&(d0.has(a)||hu(a,!1,e),hu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ns]||(t[ns]=!0,hu("selectionchange",!1,t))}}function uf(e,t,a,l){switch(Hf(t)){case 2:var n=D0;break;case 8:n=V0;break;default:n=zu}a=n.bind(null,t,a,e),n=void 0,!_s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function yu(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var r=l.stateNode.containerInfo;if(r===n)break;if(o===4)for(o=l.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;r!==null;){if(o=ml(r),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){l=i=o;continue e}r=r.parentNode}}l=l.return}fr(function(){var p=i,E=Cs(a),B=[];e:{var v=Vr.get(e);if(v!==void 0){var N=yi,I=e;switch(e){case"keypress":if(hi(a)===0)break e;case"keydown":case"keyup":N=nm;break;case"focusin":I="focus",N=Hs;break;case"focusout":I="blur",N=Hs;break;case"beforeblur":case"afterblur":N=Hs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=yr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Qh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=om;break;case Or:case Hr:case Rr:N=Jh;break;case Dr:N=rm;break;case"scroll":case"scrollend":N=Gh;break;case"wheel":N=dm;break;case"copy":case"cut":case"paste":N=Fh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=pr;break;case"toggle":case"beforetoggle":N=hm}var F=(t&4)!==0,Te=!F&&(e==="scroll"||e==="scrollend"),y=F?v!==null?v+"Capture":null:v;F=[];for(var m=p,b;m!==null;){var z=m;if(b=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||b===null||y===null||(z=cn(m,y),z!=null&&F.push(In(m,z,b))),Te)break;m=m.return}0<F.length&&(v=new N(v,I,null,a,E),B.push({event:v,listeners:F}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",v&&a!==Bs&&(I=a.relatedTarget||a.fromElement)&&(ml(I)||I[hl]))break e;if((N||v)&&(v=E.window===E?E:(v=E.ownerDocument)?v.defaultView||v.parentWindow:window,N?(I=a.relatedTarget||a.toElement,N=p,I=I?ml(I):null,I!==null&&(Te=U(I),F=I.tag,I!==Te||F!==5&&F!==27&&F!==6)&&(I=null)):(N=null,I=p),N!==I)){if(F=yr,z="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(F=pr,z="onPointerLeave",y="onPointerEnter",m="pointer"),Te=N==null?v:rn(N),b=I==null?v:rn(I),v=new F(z,m+"leave",N,a,E),v.target=Te,v.relatedTarget=b,z=null,ml(E)===p&&(F=new F(y,m+"enter",I,a,E),F.target=b,F.relatedTarget=Te,z=F),Te=z,N&&I)t:{for(F=f0,y=N,m=I,b=0,z=y;z;z=F(z))b++;z=0;for(var Z=m;Z;Z=F(Z))z++;for(;0<b-z;)y=F(y),b--;for(;0<z-b;)m=F(m),z--;for(;b--;){if(y===m||m!==null&&y===m.alternate){F=y;break t}y=F(y),m=F(m)}F=null}else F=null;N!==null&&rf(B,v,N,F,!1),I!==null&&Te!==null&&rf(B,Te,I,F,!0)}}e:{if(v=p?rn(p):window,N=v.nodeName&&v.nodeName.toLowerCase(),N==="select"||N==="input"&&v.type==="file")var me=Ar;else if(jr(v))if(Tr)me=jm;else{me=wm;var G=vm}else N=v.nodeName,!N||N.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?p&&zs(p.elementType)&&(me=Ar):me=Nm;if(me&&(me=me(e,p))){Sr(B,me,a,E);break e}G&&G(e,v,p),e==="focusout"&&p&&v.type==="number"&&p.memoizedProps.value!=null&&ks(v,"number",v.value)}switch(G=p?rn(p):window,e){case"focusin":(jr(G)||G.contentEditable==="true")&&(jl=G,Is=p,gn=null);break;case"focusout":gn=Is=jl=null;break;case"mousedown":Gs=!0;break;case"contextmenu":case"mouseup":case"dragend":Gs=!1,Ur(B,a,E);break;case"selectionchange":if(Am)break;case"keydown":case"keyup":Ur(B,a,E)}var se;if(Ds)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Nl?wr(e,a)&&(fe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(fe="onCompositionStart");fe&&(gr&&a.locale!=="ko"&&(Nl||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Nl&&(se=hr()):(va=E,Us="value"in va?va.value:va.textContent,Nl=!0)),G=is(p,fe),0<G.length&&(fe=new br(fe,e,null,a,E),B.push({event:fe,listeners:G}),se?fe.data=se:(se=Nr(a),se!==null&&(fe.data=se)))),(se=ym?bm(e,a):pm(e,a))&&(fe=is(p,"onBeforeInput"),0<fe.length&&(G=new br("onBeforeInput","beforeinput",null,a,E),B.push({event:G,listeners:fe}),G.data=se)),u0(B,e,p,a,E)}of(B,t)})}function In(e,t,a){return{instance:e,listener:t,currentTarget:a}}function is(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=cn(e,a),n!=null&&l.unshift(In(e,n,i)),n=cn(e,t),n!=null&&l.push(In(e,n,i))),e.tag===3)return l;e=e.return}return[]}function f0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rf(e,t,a,l,n){for(var i=t._reactName,o=[];a!==null&&a!==l;){var r=a,c=r.alternate,p=r.stateNode;if(r=r.tag,c!==null&&c===l)break;r!==5&&r!==26&&r!==27||p===null||(c=p,n?(p=cn(a,i),p!=null&&o.unshift(In(a,p,c))):n||(p=cn(a,i),p!=null&&o.push(In(a,p,c)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var h0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function cf(e){return(typeof e=="string"?e:""+e).replace(h0,`
`).replace(m0,"")}function df(e,t){return t=cf(t),cf(e)===t}function Ae(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||xl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&xl(e,""+l);break;case"className":ri(e,"class",l);break;case"tabIndex":ri(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ri(e,a,l);break;case"style":cr(e,l,i);break;case"data":if(t!=="object"){ri(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=di(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ae(e,t,"name",n.name,n,null),Ae(e,t,"formEncType",n.formEncType,n,null),Ae(e,t,"formMethod",n.formMethod,n,null),Ae(e,t,"formTarget",n.formTarget,n,null)):(Ae(e,t,"encType",n.encType,n,null),Ae(e,t,"method",n.method,n,null),Ae(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=di(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ft);break;case"onScroll":l!=null&&ce("scroll",e);break;case"onScrollEnd":l!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=di(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ce("beforetoggle",e),ce("toggle",e),ui(e,"popover",l);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ui(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lh.get(a)||a,ui(e,a,l))}}function bu(e,t,a,l,n,i){switch(a){case"style":cr(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof l=="string"?xl(e,l):(typeof l=="number"||typeof l=="bigint")&&xl(e,""+l);break;case"onScroll":l!=null&&ce("scroll",e);break;case"onScrollEnd":l!=null&&ce("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ft);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[ut]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ui(e,a,l)}}}function lt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ae(e,t,i,o,a,null)}}n&&Ae(e,t,"srcSet",a.srcSet,a,null),l&&Ae(e,t,"src",a.src,a,null);return;case"input":ce("invalid",e);var r=i=o=n=null,c=null,p=null;for(l in a)if(a.hasOwnProperty(l)){var E=a[l];if(E!=null)switch(l){case"name":n=E;break;case"type":o=E;break;case"checked":c=E;break;case"defaultChecked":p=E;break;case"value":i=E;break;case"defaultValue":r=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(d(137,t));break;default:Ae(e,t,l,E,a,null)}}sr(e,i,r,c,p,o,n,!1);return;case"select":ce("invalid",e),l=o=i=null;for(n in a)if(a.hasOwnProperty(n)&&(r=a[n],r!=null))switch(n){case"value":i=r;break;case"defaultValue":o=r;break;case"multiple":l=r;default:Ae(e,t,n,r,a,null)}t=i,a=o,e.multiple=!!l,t!=null?gl(e,!!l,t,!1):a!=null&&gl(e,!!l,a,!0);return;case"textarea":ce("invalid",e),i=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(r=a[o],r!=null))switch(o){case"value":l=r;break;case"defaultValue":n=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:Ae(e,t,o,r,a,null)}ur(e,l,n,i);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(l=a[c],l!=null))switch(c){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ae(e,t,c,l,a,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(l=0;l<Ln.length;l++)ce(Ln[l],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ae(e,t,p,l,a,null)}return;default:if(zs(t)){for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!==void 0&&bu(e,t,E,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&Ae(e,t,r,l,a,null))}function y0(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,r=null,c=null,p=null,E=null;for(N in a){var B=a[N];if(a.hasOwnProperty(N)&&B!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":c=B;default:l.hasOwnProperty(N)||Ae(e,t,N,null,l,B)}}for(var v in l){var N=l[v];if(B=a[v],l.hasOwnProperty(v)&&(N!=null||B!=null))switch(v){case"type":i=N;break;case"name":n=N;break;case"checked":p=N;break;case"defaultChecked":E=N;break;case"value":o=N;break;case"defaultValue":r=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(d(137,t));break;default:N!==B&&Ae(e,t,v,N,l,B)}}Es(e,o,r,c,p,E,i,n);return;case"select":N=o=r=v=null;for(i in a)if(c=a[i],a.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":N=c;default:l.hasOwnProperty(i)||Ae(e,t,i,null,l,c)}for(n in l)if(i=l[n],c=a[n],l.hasOwnProperty(n)&&(i!=null||c!=null))switch(n){case"value":v=i;break;case"defaultValue":r=i;break;case"multiple":o=i;default:i!==c&&Ae(e,t,n,i,l,c)}t=r,a=o,l=N,v!=null?gl(e,!!a,v,!1):!!l!=!!a&&(t!=null?gl(e,!!a,t,!0):gl(e,!!a,a?[]:"",!1));return;case"textarea":N=v=null;for(r in a)if(n=a[r],a.hasOwnProperty(r)&&n!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:Ae(e,t,r,null,l,n)}for(o in l)if(n=l[o],i=a[o],l.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":v=n;break;case"defaultValue":N=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&Ae(e,t,o,n,l,i)}or(e,v,N);return;case"option":for(var I in a)if(v=a[I],a.hasOwnProperty(I)&&v!=null&&!l.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:Ae(e,t,I,null,l,v)}for(c in l)if(v=l[c],N=a[c],l.hasOwnProperty(c)&&v!==N&&(v!=null||N!=null))switch(c){case"selected":e.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:Ae(e,t,c,v,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in a)v=a[F],a.hasOwnProperty(F)&&v!=null&&!l.hasOwnProperty(F)&&Ae(e,t,F,null,l,v);for(p in l)if(v=l[p],N=a[p],l.hasOwnProperty(p)&&v!==N&&(v!=null||N!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,t));break;default:Ae(e,t,p,v,l,N)}return;default:if(zs(t)){for(var Te in a)v=a[Te],a.hasOwnProperty(Te)&&v!==void 0&&!l.hasOwnProperty(Te)&&bu(e,t,Te,void 0,l,v);for(E in l)v=l[E],N=a[E],!l.hasOwnProperty(E)||v===N||v===void 0&&N===void 0||bu(e,t,E,v,l,N);return}}for(var y in a)v=a[y],a.hasOwnProperty(y)&&v!=null&&!l.hasOwnProperty(y)&&Ae(e,t,y,null,l,v);for(B in l)v=l[B],N=a[B],!l.hasOwnProperty(B)||v===N||v==null&&N==null||Ae(e,t,B,v,l,N)}function ff(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function b0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,o=n.initiatorType,r=n.duration;if(i&&r&&ff(o)){for(o=0,r=n.responseEnd,l+=1;l<a.length;l++){var c=a[l],p=c.startTime;if(p>r)break;var E=c.transferSize,B=c.initiatorType;E&&ff(B)&&(c=c.responseEnd,o+=E*(c<r?1:(r-p)/(c-p)))}if(--l,t+=8*(i+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pu=null,gu=null;function ss(e){return e.nodeType===9?e:e.ownerDocument}function hf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function xu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vu=null;function p0(){var e=window.event;return e&&e.type==="popstate"?e===vu?!1:(vu=e,!0):(vu=null,!1)}var yf=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,bf=typeof Promise=="function"?Promise:void 0,x0=typeof queueMicrotask=="function"?queueMicrotask:typeof bf<"u"?function(e){return bf.resolve(null).then(e).catch(v0)}:yf;function v0(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function pf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),$l(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Gn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Gn(a);for(var i=a.firstChild;i;){var o=i.nextSibling,r=i.nodeName;i[un]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&Gn(e.ownerDocument.body);a=n}while(a);$l(t)}function gf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function wu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wu(a),As(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function w0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[un])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Yt(e.nextSibling),e===null)break}return null}function N0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Yt(e.nextSibling),e===null))return null;return e}function xf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Yt(e.nextSibling),e===null))return null;return e}function Nu(e){return e.data==="$?"||e.data==="$~"}function ju(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function j0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Su=null;function vf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Yt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function wf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Nf(e,t,a){switch(t=ss(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Gn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);As(e)}var Ot=new Map,jf=new Set;function os(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=D.d;D.d={f:S0,r:A0,D:T0,C:E0,L:k0,m:z0,X:C0,S:B0,M:M0};function S0(){var e=ha.f(),t=Wi();return e||t}function A0(e){var t=yl(e);t!==null&&t.tag===5&&t.type==="form"?Dc(t):ha.r(e)}var Zl=typeof document>"u"?null:document;function Sf(e,t,a){var l=Zl;if(l&&typeof t=="string"&&t){var n=kt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),jf.has(n)||(jf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),lt(t,"link",e),Fe(t),l.head.appendChild(t)))}}function T0(e){ha.D(e),Sf("dns-prefetch",e,null)}function E0(e,t){ha.C(e,t),Sf("preconnect",e,t)}function k0(e,t,a){ha.L(e,t,a);var l=Zl;if(l&&e&&t){var n='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+kt(a.imageSizes)+'"]')):n+='[href="'+kt(e)+'"]';var i=n;switch(t){case"style":i=Kl(e);break;case"script":i=Jl(e)}Ot.has(i)||(e=Y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Xn(i))||t==="script"&&l.querySelector(Qn(i))||(t=l.createElement("link"),lt(t,"link",e),Fe(t),l.head.appendChild(t)))}}function z0(e,t){ha.m(e,t);var a=Zl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+kt(l)+'"][href="'+kt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Jl(e)}if(!Ot.has(i)&&(e=Y({rel:"modulepreload",href:e},t),Ot.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Qn(i)))return}l=a.createElement("link"),lt(l,"link",e),Fe(l),a.head.appendChild(l)}}}function B0(e,t,a){ha.S(e,t,a);var l=Zl;if(l&&e){var n=bl(l).hoistableStyles,i=Kl(e);t=t||"default";var o=n.get(i);if(!o){var r={loading:0,preload:null};if(o=l.querySelector(Xn(i)))r.loading=5;else{e=Y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(i))&&Au(e,a);var c=o=l.createElement("link");Fe(c),lt(c,"link",e),c._p=new Promise(function(p,E){c.onload=p,c.onerror=E}),c.addEventListener("load",function(){r.loading|=1}),c.addEventListener("error",function(){r.loading|=2}),r.loading|=4,us(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:r},n.set(i,o)}}}function C0(e,t){ha.X(e,t);var a=Zl;if(a&&e){var l=bl(a).hoistableScripts,n=Jl(e),i=l.get(n);i||(i=a.querySelector(Qn(n)),i||(e=Y({src:e,async:!0},t),(t=Ot.get(n))&&Tu(e,t),i=a.createElement("script"),Fe(i),lt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function M0(e,t){ha.M(e,t);var a=Zl;if(a&&e){var l=bl(a).hoistableScripts,n=Jl(e),i=l.get(n);i||(i=a.querySelector(Qn(n)),i||(e=Y({src:e,async:!0,type:"module"},t),(t=Ot.get(n))&&Tu(e,t),i=a.createElement("script"),Fe(i),lt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Af(e,t,a,l){var n=(n=oe.current)?os(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Kl(a.href),a=bl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Kl(a.href);var i=bl(n).hoistableStyles,o=i.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=n.querySelector(Xn(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),i||_0(n,e,a,o.state))),t&&l===null)throw Error(d(528,""));return o}if(t&&l!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Jl(a),a=bl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Kl(e){return'href="'+kt(e)+'"'}function Xn(e){return'link[rel="stylesheet"]['+e+"]"}function Tf(e){return Y({},e,{"data-precedence":e.precedence,precedence:null})}function _0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),lt(t,"link",a),Fe(t),e.head.appendChild(t))}function Jl(e){return'[src="'+kt(e)+'"]'}function Qn(e){return"script[async]"+e}function Ef(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+kt(a.href)+'"]');if(l)return t.instance=l,Fe(l),l;var n=Y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Fe(l),lt(l,"style",n),us(l,a.precedence,e),t.instance=l;case"stylesheet":n=Kl(a.href);var i=e.querySelector(Xn(n));if(i)return t.state.loading|=4,t.instance=i,Fe(i),i;l=Tf(a),(n=Ot.get(n))&&Au(l,n),i=(e.ownerDocument||e).createElement("link"),Fe(i);var o=i;return o._p=new Promise(function(r,c){o.onload=r,o.onerror=c}),lt(i,"link",l),t.state.loading|=4,us(i,a.precedence,e),t.instance=i;case"script":return i=Jl(a.src),(n=e.querySelector(Qn(i)))?(t.instance=n,Fe(n),n):(l=a,(n=Ot.get(i))&&(l=Y({},a),Tu(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Fe(n),lt(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,us(l,a.precedence,e));return t.instance}function us(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,o=0;o<l.length;o++){var r=l[o];if(r.dataset.precedence===t)i=r;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Au(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Tu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var rs=null;function kf(e,t,a){if(rs===null){var l=new Map,n=rs=new Map;n.set(a,l)}else n=rs,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[un]||i[Pe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var r=l.get(o);r?r.push(i):l.set(o,[i])}}return l}function zf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function U0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Bf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Y0(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Kl(l.href),i=t.querySelector(Xn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=cs.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Fe(i);return}i=t.ownerDocument||t,l=Tf(l),(n=Ot.get(n))&&Au(l,n),i=i.createElement("link"),Fe(i);var o=i;o._p=new Promise(function(r,c){o.onload=r,o.onerror=c}),lt(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=cs.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Eu=0;function O0(e,t){return e.stylesheets&&e.count===0&&fs(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&fs(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Eu===0&&(Eu=62500*b0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fs(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Eu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function cs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ds=null;function fs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ds=new Map,t.forEach(H0,e),ds=null,cs.call(e))}function H0(e,t){if(!(t.state.loading&4)){var a=ds.get(e);if(a)var l=a.get(null);else{a=new Map,ds.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),i=a.get(o)||l,i===l&&a.set(null,n),a.set(o,n),this.count++,l=cs.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Zn={$$typeof:ue,Provider:null,Consumer:null,_currentValue:A,_currentValue2:A,_threadCount:0};function R0(e,t,a,l,n,i,o,r,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ws(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ws(0),this.hiddenUpdates=ws(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Cf(e,t,a,l,n,i,o,r,c,p,E,B){return e=new R0(e,t,a,o,c,p,E,B,r),t=1,i===!0&&(t|=24),i=vt(3,null,null,t),e.current=i,i.stateNode=e,t=io(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ro(i),e}function Mf(e){return e?(e=Tl,e):Tl}function _f(e,t,a,l,n,i){n=Mf(n),l.context===null?l.context=n:l.pendingContext=n,l=Ta(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Ea(e,l,t),a!==null&&(mt(a,e,t),An(a,e,t))}function Uf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ku(e,t){Uf(e,t),(e=e.alternate)&&Uf(e,t)}function Yf(e){if(e.tag===13||e.tag===31){var t=Fa(e,67108864);t!==null&&mt(t,e,67108864),ku(e,67108864)}}function Of(e){if(e.tag===13||e.tag===31){var t=At();t=Ns(t);var a=Fa(e,t);a!==null&&mt(a,e,t),ku(e,t)}}var hs=!0;function D0(e,t,a,l){var n=T.T;T.T=null;var i=D.p;try{D.p=2,zu(e,t,a,l)}finally{D.p=i,T.T=n}}function V0(e,t,a,l){var n=T.T;T.T=null;var i=D.p;try{D.p=8,zu(e,t,a,l)}finally{D.p=i,T.T=n}}function zu(e,t,a,l){if(hs){var n=Bu(l);if(n===null)yu(e,t,l,ms,a),Rf(e,l);else if(L0(n,e,t,a,l))l.stopPropagation();else if(Rf(e,l),t&4&&-1<q0.indexOf(e)){for(;n!==null;){var i=yl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Qa(i.pendingLanes);if(o!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;o;){var c=1<<31-gt(o);r.entanglements[1]|=c,o&=~c}Qt(i),(be&6)===0&&($i=P()+500,qn(0))}}break;case 31:case 13:r=Fa(i,2),r!==null&&mt(r,i,2),Wi(),ku(i,2)}if(i=Bu(l),i===null&&yu(e,t,l,ms,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else yu(e,t,l,null,a)}}function Bu(e){return e=Cs(e),Cu(e)}var ms=null;function Cu(e){if(ms=null,e=ml(e),e!==null){var t=U(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=C(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ms=e,null}function Hf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(it()){case Rt:return 2;case Jt:return 8;case Le:case Dt:return 32;case ln:return 268435456;default:return 32}default:return 32}}var Mu=!1,Ra=null,Da=null,Va=null,Kn=new Map,Jn=new Map,qa=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rf(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function $n(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=yl(t),t!==null&&Yf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function L0(e,t,a,l,n){switch(t){case"focusin":return Ra=$n(Ra,e,t,a,l,n),!0;case"dragenter":return Da=$n(Da,e,t,a,l,n),!0;case"mouseover":return Va=$n(Va,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Kn.set(i,$n(Kn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Jn.set(i,$n(Jn.get(i)||null,e,t,a,l,n)),!0}return!1}function Df(e){var t=ml(e.target);if(t!==null){var a=U(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,Wu(e.priority,function(){Of(a)});return}}else if(t===31){if(t=C(a),t!==null){e.blockedOn=t,Wu(e.priority,function(){Of(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Bu(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Bs=l,a.target.dispatchEvent(l),Bs=null}else return t=yl(a),t!==null&&Yf(t),e.blockedOn=a,!1;t.shift()}return!0}function Vf(e,t,a){ys(e)&&a.delete(t)}function I0(){Mu=!1,Ra!==null&&ys(Ra)&&(Ra=null),Da!==null&&ys(Da)&&(Da=null),Va!==null&&ys(Va)&&(Va=null),Kn.forEach(Vf),Jn.forEach(Vf)}function bs(e,t){e.blockedOn===t&&(e.blockedOn=null,Mu||(Mu=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,I0)))}var ps=null;function qf(e){ps!==e&&(ps=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){ps===e&&(ps=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Cu(l||a)===null)continue;break}var i=yl(a);i!==null&&(e.splice(t,3),t-=3,Bo(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function $l(e){function t(c){return bs(c,e)}Ra!==null&&bs(Ra,e),Da!==null&&bs(Da,e),Va!==null&&bs(Va,e),Kn.forEach(t),Jn.forEach(t);for(var a=0;a<qa.length;a++){var l=qa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)Df(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],o=n[ut]||null;if(typeof i=="function")o||qf(a);else if(o){var r=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[ut]||null)r=o.formAction;else if(Cu(n)!==null)continue}else r=o.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),qf(a)}}}function Lf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function _u(e){this._internalRoot=e}gs.prototype.render=_u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,l=At();_f(a,l,e,t,null,null)},gs.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_f(e.current,2,null,e,null,null),Wi(),t[hl]=null}};function gs(e){this._internalRoot=e}gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<qa.length&&t!==0&&t<qa[a].priority;a++);qa.splice(a,0,e),a===0&&Df(e)}};var If=j.version;if(If!=="19.2.8")throw Error(d(527,If,"19.2.8"));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=g(t),e=e!==null?V(e):null,e=e===null?null:e.stateNode,e};var G0={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xs.isDisabled&&xs.supportsFiber)try{fl=xs.inject(G0),pt=xs}catch{}}return Wn.createRoot=function(e,t){if(!H(e))throw Error(d(299));var a=!1,l="",n=Jc,i=$c,o=Fc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Cf(e,1,!1,null,null,a,l,null,n,i,o,Lf),e[hl]=t.current,mu(e),new _u(t)},Wn.hydrateRoot=function(e,t,a){if(!H(e))throw Error(d(299));var l=!1,n="",i=Jc,o=$c,r=Fc,c=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),t=Cf(e,1,!0,t,a??null,l,n,c,i,o,r,Lf),t.context=Mf(null),a=t.current,l=At(),l=Ns(l),n=Ta(l),n.callback=null,Ea(a,n,l),a=l,t.current.lanes=a,on(t,a),Qt(t),e[hl]=t.current,mu(e),new gs(t)},Wn.version="19.2.8",Wn}var Pf;function ey(){if(Pf)return Ou.exports;Pf=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(j){console.error(j)}}return u(),Ou.exports=P0(),Ou.exports}var ty=ey();const nt={id:"26af3597-73d4-491c-a9b3-aac9a0d55c82",name:"DomInNATEly Top Hits",description:"Official Suno AI curated collection of 20 high-energy rock anthems, trap crossovers, introspective ballads, and spoken-word odysseys. TikTok: @dom_i_nater",cover:"https://cdn2.suno.ai/image_large_ba1c3c00-6547-4e96-afe1-1566dca7b876.jpeg",user_display_name:"Nate M. AKA  (@DomInNATEly)",user_handle:"dominnately",tiktok_handle:"@dom_i_nater",url:"https://suno.com/playlist/26af3597-73d4-491c-a9b3-aac9a0d55c82",totalTracks:20,totalDurationSeconds:5182},ge=[{id:"0028ed1b-8e30-4fb7-bda5-13e933cec42f",title:"Poison Shot By Shot",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:1,image:"https://cdn2.suno.ai/24ba0796-195f-4346-9646-95a2a1069e17.jpeg",audioUrl:"https://cdn1.suno.ai/0028ed1b-8e30-4fb7-bda5-13e933cec42f.mp4",videoUrl:"https://cdn1.suno.ai/0028ed1b-8e30-4fb7-bda5-13e933cec42f.mp4",embedUrl:"https://suno.com/embed/0028ed1b-8e30-4fb7-bda5-13e933cec42f",sunoUrl:"https://suno.com/song/0028ed1b-8e30-4fb7-bda5-13e933cec42f",duration:387.9,durationFormatted:"6:27",tags:["alt rock","rock duet","male female vocals","acoustic to heavy guitar","confessional emo rock"],lyrics:`**[Male Vocals – Verse 1]**
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
I wasn't your soulmate, I was acting like a leech`},{id:"427fba31-e531-49ff-8540-19e1cf95905b",title:"Super Pessimistic! (Experimental remix)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:2,image:"https://cdn2.suno.ai/22bd11ac-ecae-47a8-b4f9-c4307f31be80.jpeg",audioUrl:"https://cdn1.suno.ai/427fba31-e531-49ff-8540-19e1cf95905b.mp4",videoUrl:"https://cdn1.suno.ai/427fba31-e531-49ff-8540-19e1cf95905b.mp4",embedUrl:"https://suno.com/embed/427fba31-e531-49ff-8540-19e1cf95905b",sunoUrl:"https://suno.com/song/427fba31-e531-49ff-8540-19e1cf95905b",duration:240.1,durationFormatted:"4:00",tags:["alt pop","pop punk","breakup anthem","male female","distorted electric guitars"],lyrics:`[singer A]
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
You're super pessimistic`},{id:"886cc3fb-5e0a-4f12-b891-355bbe84f196",title:"HURT ME, That's what you wanted!",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:3,image:"https://cdn2.suno.ai/7c9ff818-2cf9-445d-abd8-8aa8ffb89c78.jpeg",audioUrl:"https://cdn1.suno.ai/886cc3fb-5e0a-4f12-b891-355bbe84f196.mp4",videoUrl:"https://cdn1.suno.ai/886cc3fb-5e0a-4f12-b891-355bbe84f196.mp4",embedUrl:"https://suno.com/embed/886cc3fb-5e0a-4f12-b891-355bbe84f196",sunoUrl:"https://suno.com/song/886cc3fb-5e0a-4f12-b891-355bbe84f196",duration:229,durationFormatted:"3:49",tags:["dark alt-pop","industrial hip-hop","funk rock","theatrical spoken word","dual-register vocals"],lyrics:`[Verse]
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
That's what you wanted"`},{id:"48cb63f3-ed17-4696-be79-ac38af54597e",title:"The Zeigarnik Effect",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:4,image:"https://cdn2.suno.ai/cc85121c-6b9d-4ce2-ae91-b30cf3aac289.jpeg",audioUrl:"https://cdn1.suno.ai/48cb63f3-ed17-4696-be79-ac38af54597e.mp4",videoUrl:"https://cdn1.suno.ai/48cb63f3-ed17-4696-be79-ac38af54597e.mp4",embedUrl:"https://suno.com/embed/48cb63f3-ed17-4696-be79-ac38af54597e",sunoUrl:"https://suno.com/song/48cb63f3-ed17-4696-be79-ac38af54597e",duration:120,durationFormatted:"2:00",tags:["trap","dubstep","halftime beat","140 BPM","wobble sub-bass"],lyrics:`(Male Voice) I ran the numbers, tracked the patterns of the sinkholes you create. Engineering every talk so we could bypass all this weight. I was your biological home, the regulator for your storm. But you treated my loyalty like a chain instead of somewhere warm.
(Female Voice) I’m "pissy when I miss it," and the withdrawal is all I really know. I told them not to talk to you—I couldn't let my money go. Your 8K love was engulfment, a fire trying to swallow me whole. So I flipped the "nuclear option" just to keep my own control.
(Chorus - Duet) It’s the Zeigarnik effect, a page ripped out before the end. An open loop in the machine that I can no longer defend. High-voltage current trying to power a low-voltage light. We’re just two different operating systems crashing in the night.
(Male Voice) I’m dimming my empathy now, letting the Supernova rise. I see your pessimistic bias and the "hero" in your lies. I’m adopting the CBR model—Cold, Rational, and Bottom-line. Because loving your potential was never going to fix your design.
(Female Voice) I’ll villainize your kindness, say you tried to lock me in a cell. Believing you’re the monster makes it easier to say farewell. I’ve entered the relief stage, breathing air that’s thin and gray. While I’m reaching for your phantom limb every single day.
(Outro - Duet) I’m taking back my oxygen; I’m closing the loop on my own. Respecting myself more than the ghost of the version you’ve shown. One is finding sovereignty in the silence and the truth. The other is just an unfinished story, a glitch from a broken youth.`},{id:"633cd991-f8da-4c18-a065-d33d249fe84f",title:"Pessimistic Bias",artist:"Dom-I-NATE",handle:"domnate",index:5,image:"https://cdn2.suno.ai/image_large_633cd991-f8da-4c18-a065-d33d249fe84f.jpeg",audioUrl:"https://cdn1.suno.ai/633cd991-f8da-4c18-a065-d33d249fe84f.mp4",videoUrl:"https://cdn1.suno.ai/633cd991-f8da-4c18-a065-d33d249fe84f.mp4",embedUrl:"https://suno.com/embed/633cd991-f8da-4c18-a065-d33d249fe84f",sunoUrl:"https://suno.com/song/633cd991-f8da-4c18-a065-d33d249fe84f",duration:245.3,durationFormatted:"4:05",tags:["rap","Moody trap-soul beat with filtered piano and distant pads","tight 808 groove. Male vocals: intimate","confessional rap in the verses with a half-sung hook","subtle pitch-shifted ad-libs. Chorus widens with airy harmonies and a slight lift in the drums"],lyrics:`[Verse 1]
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
Like I did, I crossed that line`},{id:"41b04c34-8a76-4283-b8fc-3c8996e88f70",title:"You Played The Wounded Bird",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:6,image:"https://cdn2.suno.ai/61e4714e-9de1-42c6-9536-3d9977035df5.jpeg",audioUrl:"https://cdn1.suno.ai/41b04c34-8a76-4283-b8fc-3c8996e88f70.mp4",videoUrl:"https://cdn1.suno.ai/41b04c34-8a76-4283-b8fc-3c8996e88f70.mp4",embedUrl:"https://suno.com/embed/41b04c34-8a76-4283-b8fc-3c8996e88f70",sunoUrl:"https://suno.com/song/41b04c34-8a76-4283-b8fc-3c8996e88f70",duration:212.3,durationFormatted:"3:32",tags:["midwest hip-hop","hardcore hip-hop"],lyrics:`[Male Vocals – Verse 1 (The Hook)]
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
There's nothing but shadows and smoke in the air`},{id:"ae67baac-578e-4b4b-96ad-49c06909fc7b",title:"I Never Bled Someone the Way You Do",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:7,image:"https://cdn2.suno.ai/e7b7b9a7-ea57-49e4-8cb7-226ef9db8a6a.jpeg",audioUrl:"https://cdn1.suno.ai/ae67baac-578e-4b4b-96ad-49c06909fc7b.mp4",videoUrl:"https://cdn1.suno.ai/ae67baac-578e-4b4b-96ad-49c06909fc7b.mp4",embedUrl:"https://suno.com/embed/ae67baac-578e-4b4b-96ad-49c06909fc7b",sunoUrl:"https://suno.com/song/ae67baac-578e-4b4b-96ad-49c06909fc7b",duration:225,durationFormatted:"3:45",tags:["hard rock","alt rock","heavy guitars","breakup anthem","passionate vocal"],lyrics:`[Verse 1]

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

[feedback fade out]`},{id:"af250b99-1d45-469f-bf81-1248a4a33761",title:"You'd Rather!",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:8,image:"https://cdn2.suno.ai/a972fc4d-2992-42c3-9e5d-7c6b8d487a61.jpeg",audioUrl:"https://cdn1.suno.ai/af250b99-1d45-469f-bf81-1248a4a33761.mp4",videoUrl:"https://cdn1.suno.ai/af250b99-1d45-469f-bf81-1248a4a33761.mp4",embedUrl:"https://suno.com/embed/af250b99-1d45-469f-bf81-1248a4a33761",sunoUrl:"https://suno.com/song/af250b99-1d45-469f-bf81-1248a4a33761",duration:232.4,durationFormatted:"3:52",tags:["House-pop with rock grit and funky guitar chops","four-on-the-floor kick and syncopated bass driving a tense groove","verse stays stripped to clipped drums","muted bass","and sarcastic vocal phrasing"],lyrics:`[Verse 1]
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
Than let me prove I never lied to you`},{id:"a2132ab0-c8c0-49c8-835c-555eabc3b9ce",title:"Barly Maybe Saby DON'T MISS IT",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:9,image:"https://cdn2.suno.ai/image_large_f78e7ed2-fa71-4b39-84f8-8b6d6cd3687d.jpeg",audioUrl:"https://cdn1.suno.ai/a2132ab0-c8c0-49c8-835c-555eabc3b9ce.mp4",videoUrl:"https://cdn1.suno.ai/a2132ab0-c8c0-49c8-835c-555eabc3b9ce.mp4",embedUrl:"https://suno.com/embed/a2132ab0-c8c0-49c8-835c-555eabc3b9ce",sunoUrl:"https://suno.com/song/a2132ab0-c8c0-49c8-835c-555eabc3b9ce",duration:221,durationFormatted:"3:41",tags:["alt pop","pop punk","breakup anthem","male female","distorted electric guitars"],lyrics:`[singer A]
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
we’ll be alright`},{id:"ca0198c0-3507-4fc9-a576-9445317c1e14",title:"Bad Brina knows how to Win",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:10,image:"https://cdn2.suno.ai/f4eaff63-a732-44a3-a4f3-fe8fd5049042.jpeg",audioUrl:"https://cdn1.suno.ai/ca0198c0-3507-4fc9-a576-9445317c1e14.mp4",videoUrl:"https://cdn1.suno.ai/ca0198c0-3507-4fc9-a576-9445317c1e14.mp4",embedUrl:"https://suno.com/embed/ca0198c0-3507-4fc9-a576-9445317c1e14",sunoUrl:"https://suno.com/song/ca0198c0-3507-4fc9-a576-9445317c1e14",duration:190.4,durationFormatted:"3:10",tags:["pop punk","alt pop","duet","male female vocals","energetic"],lyrics:`[singer A (female Voice) ]
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
I woke up Sore yet I'm asking for more, Babe you best Get me a boy and a girl or i swear, I tell the police whats on your computer, but you say, Who cares, I've got nothing to hide?  I say Haha cuz you don't know what I downloaded on your computer last night.. So now you better live in fright, Before those screenshots come to light,  they'll have you locked up tight.`},{id:"be1b836f-aee0-406a-adfb-c1e5b4788078",title:"We MUSK go to MARS!",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:11,image:"https://cdn2.suno.ai/7cb8ec5e-b82c-492e-8136-edec0b448966.jpeg",audioUrl:"https://cdn1.suno.ai/be1b836f-aee0-406a-adfb-c1e5b4788078.mp4",videoUrl:"https://cdn1.suno.ai/be1b836f-aee0-406a-adfb-c1e5b4788078.mp4",embedUrl:"https://suno.com/embed/be1b836f-aee0-406a-adfb-c1e5b4788078",sunoUrl:"https://suno.com/song/be1b836f-aee0-406a-adfb-c1e5b4788078",duration:286,durationFormatted:"4:46",tags:["dark alt-pop","industrial hip-hop","96 BPM","male and female vocals","spoken-word cadence"],lyrics:`Yeah SpaceX
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
It’s a launch you can see in real life`},{id:"018cff53-c1ec-4f4a-bace-e7ea89f9ce3d",title:"ABCs",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:12,image:"https://cdn2.suno.ai/image_large_018cff53-c1ec-4f4a-bace-e7ea89f9ce3d.jpeg",audioUrl:"https://cdn1.suno.ai/018cff53-c1ec-4f4a-bace-e7ea89f9ce3d.mp4",videoUrl:"https://cdn1.suno.ai/018cff53-c1ec-4f4a-bace-e7ea89f9ce3d.mp4",embedUrl:"https://suno.com/embed/018cff53-c1ec-4f4a-bace-e7ea89f9ce3d",sunoUrl:"https://suno.com/song/018cff53-c1ec-4f4a-bace-e7ea89f9ce3d",duration:270,durationFormatted:"4:30",tags:["dark alt pop minimal bass heavy production quirky rhythmic synth breathy and whispered vocal delivery deadpan spoken word verses staccato cadence distorted sub bass hits sharp asmr style percussion hauntingly intimate atmosphere Pop","Electropop","Indie Pop","Alternative Pop style"],lyrics:`This is the A B C's of Addiction,


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

[End]`},{id:"ba1c3c00-6547-4e96-afe1-1566dca7b876",title:"cages that I couldn't even see(RAP}",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:13,image:"https://cdn2.suno.ai/ba1c3c00-6547-4e96-afe1-1566dca7b876_1e96e170.jpeg",audioUrl:"https://cdn1.suno.ai/ba1c3c00-6547-4e96-afe1-1566dca7b876.mp4",videoUrl:"https://cdn1.suno.ai/ba1c3c00-6547-4e96-afe1-1566dca7b876.mp4",embedUrl:"https://suno.com/embed/ba1c3c00-6547-4e96-afe1-1566dca7b876",sunoUrl:"https://suno.com/song/ba1c3c00-6547-4e96-afe1-1566dca7b876",duration:274.3,durationFormatted:"4:34",tags:["hardcore cinematic hip hop aggressive male rap vocal high speed technical flow dense internal rhymes rapid fire delivery powerful punchlines intense emotional performance dark orchestral trap beat heavy 808 bass sharp snare hits dramatic strings cinematic drums underground battle rap energy modern Hip Hop","Rap","Hardcore Hip Hop","Midwest Hip Hop inspired intensity rebellious attitude energetic hook dynamic vocal switches fast verses with explosive chorus stadium sized sound professional studio production 2000s hardcore rap influence mixed with modern trap"],lyrics:`**[Male Vocals – Verse 1]**
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
I wasn't your soulmate, I was acting like a leech`},{id:"ade85e2d-c891-42bc-8dbf-8768b475d101",title:"The Doubts Between the Seams",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:14,image:"https://cdn2.suno.ai/image_large_ade85e2d-c891-42bc-8dbf-8768b475d101.jpeg",audioUrl:"https://cdn1.suno.ai/ade85e2d-c891-42bc-8dbf-8768b475d101.mp4",videoUrl:"https://cdn1.suno.ai/ade85e2d-c891-42bc-8dbf-8768b475d101.mp4",embedUrl:"https://suno.com/embed/ade85e2d-c891-42bc-8dbf-8768b475d101",sunoUrl:"https://suno.com/song/ade85e2d-c891-42bc-8dbf-8768b475d101",duration:238.4,durationFormatted:"3:58",tags:["a duet","dubstep","trap"],lyrics:`[Verse 1]
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
And you keep on missing out`},{id:"e5c5ba9d-7215-41bd-a626-28a93415eb3d",title:"Easier To Believe The Hurt",artist:"Dom-I-NATE",handle:"domnate",index:15,image:"https://cdn2.suno.ai/image_large_e5c5ba9d-7215-41bd-a626-28a93415eb3d.jpeg",audioUrl:"https://cdn1.suno.ai/e5c5ba9d-7215-41bd-a626-28a93415eb3d.mp4",videoUrl:"https://cdn1.suno.ai/e5c5ba9d-7215-41bd-a626-28a93415eb3d.mp4",embedUrl:"https://suno.com/embed/e5c5ba9d-7215-41bd-a626-28a93415eb3d",sunoUrl:"https://suno.com/song/e5c5ba9d-7215-41bd-a626-28a93415eb3d",duration:229.5,durationFormatted:"3:49",tags:["Intimate acoustic ballad with male vocals","close-mic’d fingerpicked guitar and soft piano chords. Verses stay hushed","almost spoken","with subtle pads in the background. Chorus swells with warm harmonies and a gentle kick","lifting the emotion. Bridge strips back to almost solo vocal"],lyrics:`[Verse 1]
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
Come lay your head on the safer side tonight`},{id:"9ca6c3d7-7e54-497f-9638-98892a4bc68d",title:"Saints and Schemes",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:16,image:"https://cdn2.suno.ai/image_large_9ca6c3d7-7e54-497f-9638-98892a4bc68d.jpeg",audioUrl:"https://cdn1.suno.ai/9ca6c3d7-7e54-497f-9638-98892a4bc68d.mp4",videoUrl:"https://cdn1.suno.ai/9ca6c3d7-7e54-497f-9638-98892a4bc68d.mp4",embedUrl:"https://suno.com/embed/9ca6c3d7-7e54-497f-9638-98892a4bc68d",sunoUrl:"https://suno.com/song/9ca6c3d7-7e54-497f-9638-98892a4bc68d",duration:300.4,durationFormatted:"5:00",tags:["Dark alt-pop and indie-rock hybrid with brooding synth pads","reverb-soaked clean guitars","and tight","syncopated drums. Verses sit in a low","intimate register with fast"],lyrics:`[Verse 1 - Female Vocal]
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
(Both, whispered) Feeding on the soft parts you taught me to bleed (ABAB)`},{id:"45517b9a-5ab2-4e6d-842e-4a1452ec9547",title:"A B C's of Addiction",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:17,image:"https://cdn2.suno.ai/2d60da41-39ef-42f0-b39f-c03c3efbc5bb.jpeg",audioUrl:"https://cdn1.suno.ai/45517b9a-5ab2-4e6d-842e-4a1452ec9547.mp4",videoUrl:"https://cdn1.suno.ai/45517b9a-5ab2-4e6d-842e-4a1452ec9547.mp4",embedUrl:"https://suno.com/embed/45517b9a-5ab2-4e6d-842e-4a1452ec9547",sunoUrl:"https://suno.com/song/45517b9a-5ab2-4e6d-842e-4a1452ec9547",duration:286.8,durationFormatted:"4:46",tags:["dark alt-pop","minimalist sub bass","breathy whispered vocals","intimate close-mic delivery","eerie synths"],lyrics:`[Intro: Dark Synth & Heavy Breath]
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

[End]`},{id:"aacdde92-a133-4df4-85ae-04a9933c5bba",title:"We MUSK go to MARS!",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:18,image:"https://cdn2.suno.ai/f1f81ee4-b999-4b52-9b9e-9bd0b6366be9.jpeg",audioUrl:"https://cdn1.suno.ai/aacdde92-a133-4df4-85ae-04a9933c5bba.mp4",videoUrl:"https://cdn1.suno.ai/aacdde92-a133-4df4-85ae-04a9933c5bba.mp4",embedUrl:"https://suno.com/embed/aacdde92-a133-4df4-85ae-04a9933c5bba",sunoUrl:"https://suno.com/song/aacdde92-a133-4df4-85ae-04a9933c5bba",duration:243.9,durationFormatted:"4:03",tags:["dark alt-pop","industrial hip-hop","96 BPM","male and female vocals","spoken-word cadence"],lyrics:`Yeah SpaceX
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
Yeah, We Musk Go To MARS.`},{id:"a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60",title:"Poison shot by shot (Piano Soft Vocals)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:19,image:"https://cdn2.suno.ai/d2d6cd4c-5d47-4238-9eaf-19444861b06a.jpeg",audioUrl:"https://cdn1.suno.ai/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60.mp4",videoUrl:"https://cdn1.suno.ai/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60.mp4",embedUrl:"https://suno.com/embed/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60",sunoUrl:"https://suno.com/song/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60",duration:360.5,durationFormatted:"6:00",tags:["Pop rock duet in G major at 120 BPM. The arrangement features a clean electric guitar playing arpeggiated chords","a grand piano","and a driving drum kit with a prominent snare. A melodic bass guitar follows the chord progression. The track features alternating male and female lead vocals that harmonize during the choruses. The production uses light reverb on the vocals and a crisp","modern mix with clear separation between the mid-range piano and the high-frequency guitar strums."],lyrics:`[Intro]
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
[piano fades out]`},{id:"aab189df-e9a0-4fac-842e-90aa85f3baac",title:"Poison shot by shot(Vocal Clean Remix)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:20,image:"https://cdn2.suno.ai/image_large_aab189df-e9a0-4fac-842e-90aa85f3baac.jpeg",audioUrl:"https://cdn1.suno.ai/aab189df-e9a0-4fac-842e-90aa85f3baac.mp4",videoUrl:"https://cdn1.suno.ai/aab189df-e9a0-4fac-842e-90aa85f3baac.mp4",embedUrl:"https://suno.com/embed/aab189df-e9a0-4fac-842e-90aa85f3baac",sunoUrl:"https://suno.com/song/aab189df-e9a0-4fac-842e-90aa85f3baac",duration:388.9,durationFormatted:"6:28",tags:["J-Rock with elements of post-hardcore and alternative metal. Distorted electric guitars play palm-muted power chords and syncopated riffs. The bass guitar follows the kick drum with a gritty","overdriven tone. Drums feature rapid double-kick patterns","aggressive snare hits","and frequent crash cymbal accents. Vocals are male","ranging from melodic singing to strained shouting and guttural screams. The arrangement includes sudden dynamic shifts between dense"],lyrics:`**[Male Vocals – Verse 1]**
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
I wasn't your soulmate, I was acting like a leech`}];var lh,nh,ih,sh,oh,uh,rh,ch,dh,fh,hh,mh,yh,bh,ph,gh,xh,vh,wh;const Vu={MPLgPPy9Sjs:((lh=ge[0])==null?void 0:lh.lyrics)||"",BCY7C34diZk:`**[Verse 1]**
I pleaded for honesty when the ground started shaking beneath us
You built your alibis out of glass and smoke
Said I was paranoid for reading between the lines you wrote
Every promise was a loaded trick
A neat escape hatch when things got thick

**[Pre-Chorus]**
I gave you every piece of trust I had to spare
You traded it away without a single care
Now the silence in this room is deafening

**[Chorus]**
I begged you don't betray me
I stood bare in the cold
Trading all my certainty for stories you would told
You looked right in my eyes and promised you were true
While cutting every anchor tying me to you

**[Verse 2]**
Cold fluorescent lights on an empty kitchen floor
Wondering what happened to the warmth we had before
You twist my words into a weapon for your defense
Playing the victim while you tear down our fence

**[Outro]**
I begged you...
Don't betray me.
Now the dust has settled and you're just a ghost in the hall.`,"9qx6tz-NyKY":((nh=ge[7])==null?void 0:nh.lyrics)||((ih=ge[4])==null?void 0:ih.lyrics)||"",fBBwdLTJMVE:((sh=ge[1])==null?void 0:sh.lyrics)||"",r6BibuJXzEw:((oh=ge[2])==null?void 0:oh.lyrics)||((uh=ge[14])==null?void 0:uh.lyrics)||"",PZtOJku0f_g:((rh=ge[3])==null?void 0:rh.lyrics)||"",Szoqqqy0KkU:((ch=ge[9])==null?void 0:ch.lyrics)||"",vohyDAV8PpI:((dh=ge[5])==null?void 0:dh.lyrics)||"",BcCaAPSLgVg:((fh=ge[7])==null?void 0:fh.lyrics)||"",XpnTmJ6WCmw:((hh=ge[4])==null?void 0:hh.lyrics)||((mh=ge[1])==null?void 0:mh.lyrics)||"","HV2GfTi2-mI":((yh=ge[10])==null?void 0:yh.lyrics)||"",osGORpTfs0I:((bh=ge[8])==null?void 0:bh.lyrics)||"",Dgvk00dBQ1Y:((ph=ge[13])==null?void 0:ph.lyrics)||"","9lmCALdX0f8":((gh=ge[6])==null?void 0:gh.lyrics)||"",sx_f6KVmWmQ:((xh=ge[15])==null?void 0:xh.lyrics)||"",t8zv9_NNdps:((vh=ge[12])==null?void 0:vh.lyrics)||((wh=ge[2])==null?void 0:wh.lyrics)||""};function Iu(u){if(!u)return"";if("lyrics"in u&&u.lyrics&&u.lyrics.trim().length>30)return u.lyrics;if(u.id&&Vu[u.id])return Vu[u.id];const j=(u.title||"").toLowerCase().replace(/[^a-z0-9]/g,"");if(j){const S=ge.find(d=>{const H=d.title.toLowerCase().replace(/[^a-z0-9]/g,"");return H.includes(j)||j.includes(H)});if(S&&S.lyrics)return S.lyrics}return"featuredLyrics"in u&&u.featuredLyrics?u.featuredLyrics:""}const ay=[{id:"MPLgPPy9Sjs",title:"Poison Shot By Shot",artist:"Dom-I-NATE",duration:"6:28",durationSeconds:388,index:1,thumbnail:"https://i.ytimg.com/vi/MPLgPPy9Sjs/hqdefault.jpg",youtubeUrl:"https://youtu.be/MPLgPPy9Sjs?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Rock","Epic","Anthem"],description:"The featured single. A haunting build-up tracing toxic cycles, betrayal, and relentless raw guitars.",featuredLyrics:"You came in sweet / All soft at the seams / Said you saw my wreck / And you knew how to redeem..."},{id:"BCY7C34diZk",title:"I Begged You Don't Betray Me",artist:"DomInNATEly",duration:"4:55",durationSeconds:295,index:2,thumbnail:"https://i.ytimg.com/vi/BCY7C34diZk/hqdefault.jpg",youtubeUrl:"https://youtu.be/BCY7C34diZk?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Alt Rock","Vulnerable","Emotional Build","Guitar Driven"],description:"An impassioned, desperate alt-rock plea confronting broken trust and the agony of repeated betrayal.",featuredLyrics:"I pleaded for honesty when the ground started shaking beneath us."},{id:"9qx6tz-NyKY",title:"You Questioned My Motives",artist:"DomInNATEly",duration:"4:13",durationSeconds:253,index:3,thumbnail:"https://i.ytimg.com/vi/9qx6tz-NyKY/hqdefault.jpg",youtubeUrl:"https://youtu.be/9qx6tz-NyKY?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"alt",tags:["Introspective","Raw Emotion","Alt Rock","Distortion"],description:"A hard-hitting confrontation challenging unfair accusations and the pain of having pure intentions doubted.",featuredLyrics:"You twisted every gesture into an interrogation under cold fluorescent lights."},{id:"fBBwdLTJMVE",title:"Super Pessimistic (Guitar Riffs Remix)",artist:"DomInNATEly",duration:"4:01",durationSeconds:241,index:4,thumbnail:"https://i.ytimg.com/vi/fBBwdLTJMVE/hqdefault.jpg",youtubeUrl:"https://youtu.be/fBBwdLTJMVE?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"remix",tags:["Remix","Alt Rock","Heavy Riffs"],description:"High-energy reworked version loaded with heavy electric overdrive and driving rhythmic hooks.",featuredLyrics:"Heavy riffs collide with sharp emotional dissonance in this amplified anthem."},{id:"r6BibuJXzEw",title:"I Practiced Being Hurt",artist:"DomInNATEly",duration:"4:02",durationSeconds:242,index:5,thumbnail:"https://i.ytimg.com/vi/r6BibuJXzEw/hqdefault.jpg",youtubeUrl:"https://youtu.be/r6BibuJXzEw?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Melodic Rock","Vulnerability","Heartbreak","Anthem"],description:"A poignant reflection on emotional armor and conditioning oneself to endure heartache.",featuredLyrics:"Bracing for impact until feeling numb felt like second nature."},{id:"PZtOJku0f_g",title:"Cluster B Storm",artist:"DomInNATEly",duration:"5:04",durationSeconds:304,index:6,thumbnail:"https://i.ytimg.com/vi/PZtOJku0f_g/hqdefault.jpg",youtubeUrl:"https://youtu.be/PZtOJku0f_g?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Psychological Rock","Intense","Dark Rock","Epic"],description:"An intense, dark rock odyssey exploring turbulent psychological dynamics and chaotic relational storms.",featuredLyrics:"Caught in the eye of a psychological whirlwind with no shelter in sight."},{id:"Szoqqqy0KkU",title:"I Want You Back, But I Hate that I Do",artist:"DomInNATEly",duration:"3:19",durationSeconds:199,index:7,thumbnail:"https://i.ytimg.com/vi/Szoqqqy0KkU/hqdefault.jpg",youtubeUrl:"https://youtu.be/Szoqqqy0KkU?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Alt Rock","Breakup Anthem","Raw Guitars","Single"],description:"A fiery, conflicted rock single confronting the paradox of missing an abusive ex while hating the manipulation and emotional toll.",featuredLyrics:"I want you back (but I hate that I do) / Every road I take loops back to you / You wore kindness like a loaded trick / And you loved it best when I came back..."},{id:"vohyDAV8PpI",title:"You Played the Wounded Bird",artist:"DomInNATEly",duration:"3:33",durationSeconds:213,index:8,thumbnail:"https://i.ytimg.com/vi/vohyDAV8PpI/hqdefault.jpg",youtubeUrl:"https://youtu.be/vohyDAV8PpI?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Hard Rock","Dark","Story"],description:"Intense alt-rock confession exploring emotional manipulation and playing the martyr in a relationship.",featuredLyrics:"I played the victim in a horrible place / I knew you'd come running to be my shield..."},{id:"BcCaAPSLgVg",title:"You'd Rather",artist:"DomInNATEly",duration:"3:53",durationSeconds:233,index:9,thumbnail:"https://i.ytimg.com/vi/BcCaAPSLgVg/hqdefault.jpg",youtubeUrl:"https://youtu.be/BcCaAPSLgVg?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"alt",tags:["Alt Rock","Direct","Heavy"],description:"Punchy vocal deliveries confronting choices, avoidance, and unspoken boundaries.",featuredLyrics:"When the line is drawn, would you rather hide or face the fire head on?"},{id:"XpnTmJ6WCmw",title:"Pessimistic Girl",artist:"DomInNATEly",duration:"3:49",durationSeconds:229,index:10,thumbnail:"https://i.ytimg.com/vi/XpnTmJ6WCmw/hqdefault.jpg",youtubeUrl:"https://youtu.be/XpnTmJ6WCmw?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"alt",tags:["Alt Rock","Indie Rock","Cynical Romance","Rhythm"],description:"Driving melodic rock examining cynical defenses, emotional barriers, and self-fulfilling doubt.",featuredLyrics:"Expecting rain before the clouds even gather in the sky."},{id:"HV2GfTi2-mI",title:"We MUSK go to MARS!",artist:"DomInNATEly",duration:"4:47",durationSeconds:287,index:11,thumbnail:"https://i.ytimg.com/vi/HV2GfTi2-mI/hqdefault.jpg",youtubeUrl:"https://youtu.be/HV2GfTi2-mI?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"anthem",tags:["Sci-Fi Rock","One-Man Band","Concept"],description:"A satirical sci-fi rock odyssey about interstellar colonization, billionaires, and leaving Earth behind.",featuredLyrics:"Countdowns, booster engines, and eccentric dreams of red dust horizons."},{id:"osGORpTfs0I",title:"Take the Chance",artist:"Dom-I-NATE",duration:"4:10",durationSeconds:250,index:12,thumbnail:"https://i.ytimg.com/vi/osGORpTfs0I/hqdefault.jpg",youtubeUrl:"https://youtu.be/osGORpTfs0I?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Uplifting Rock","Driving Beat","Guitar Solo","Hope"],description:"Inspiring rock anthem urging listeners to take bold leaps into the unknown despite lingering fear.",featuredLyrics:"Step to the ledge and feel the rush when hesitation fades away."},{id:"Dgvk00dBQ1Y",title:"Bittersweet Echos",artist:"Dom-I-Nate",duration:"3:17",durationSeconds:197,index:13,thumbnail:"https://i.ytimg.com/vi/Dgvk00dBQ1Y/hqdefault.jpg",youtubeUrl:"https://youtu.be/Dgvk00dBQ1Y?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Melodic Rock","Echo","Vocal"],description:"Atmospheric guitars weaving nostalgic echoes of past relationships that refuse to fade.",featuredLyrics:"Reverberating notes of what could have been linger in the quiet aftermath."},{id:"9lmCALdX0f8",title:"Crazy Can be So much Fun",artist:"Dom-I-NATE",duration:"2:44",durationSeconds:164,index:14,thumbnail:"https://i.ytimg.com/vi/9lmCALdX0f8/hqdefault.jpg",youtubeUrl:"https://youtu.be/9lmCALdX0f8?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Wild","Garage Rock","Fun"],description:"A chaotic, cheerful garage rock romp celebrating the unpredictable and eccentric sides of life.",featuredLyrics:"Toss out the rulebook and turn the distortion up to eleven."},{id:"sx_f6KVmWmQ",title:"Her Leather Facade",artist:'Nate "Dom-I-Nater"',duration:"3:17",durationSeconds:197,index:15,thumbnail:"https://i.ytimg.com/vi/sx_f6KVmWmQ/hqdefault.jpg",youtubeUrl:"https://youtu.be/sx_f6KVmWmQ?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Hard Rock","Tough Exterior","Vulnerable"],description:"Heavy riff-laden tribute to guarded hearts, tough leather jackets, and hidden vulnerabilities.",featuredLyrics:"Behind the studs and zipper collar lies a fortress waiting to crumble."},{id:"t8zv9_NNdps",title:"You Jinxed Us",artist:"Dom-I-NATE",duration:"2:51",durationSeconds:171,index:16,thumbnail:"https://i.ytimg.com/vi/t8zv9_NNdps/hqdefault.jpg",youtubeUrl:"https://youtu.be/t8zv9_NNdps?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"duet",tags:["Duet Style","Heartbreak","Superstition"],description:"Soulful alt-rock ballad on fragile romance, superstitions, and premature declarations.",featuredLyrics:"You said forever too loud and shattered the spell before we even started."}],yt=ay.map(u=>({...u,lyrics:Vu[u.id]||u.featuredLyrics||""})),Nh="https://youtube.com/playlist?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH&si=m-pggLDCyI2ogv_c",ly="https://www.youtube.com/@DomInNATEly",ma={name:"DomInNATEly's Music",description:"Official YouTube audio and video catalogue by DomInNATEly featuring heavy guitar riffs, melodic ballads, and conceptual alt-rock.",channel:"DomInNATEly",channelUrl:"https://www.youtube.com/@DomInNATEly",playlistUrl:"https://youtube.com/playlist?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH&si=m-pggLDCyI2ogv_c",totalDurationFormatted:"1 hr 4 min",cover:"https://i.ytimg.com/vi/MPLgPPy9Sjs/hqdefault.jpg"},eh=u=>({id:u.id,title:u.title,artist:u.artist,duration:u.durationFormatted,durationSeconds:u.duration,index:u.index,thumbnail:u.image,youtubeUrl:u.sunoUrl,category:"alt",tags:u.tags,description:`Suno AI Track • @${u.handle}`,featuredLyrics:u.lyrics,lyrics:u.lyrics,audioUrl:u.videoUrl||u.audioUrl,videoUrl:u.videoUrl,embedUrl:u.embedUrl,sunoUrl:u.sunoUrl,isSuno:!0});/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),iy=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(j,S,d)=>d?d.toUpperCase():S.toLowerCase()),th=u=>{const j=iy(u);return j.charAt(0).toUpperCase()+j.slice(1)},jh=(...u)=>u.filter((j,S,d)=>!!j&&j.trim()!==""&&d.indexOf(j)===S).join(" ").trim(),sy=u=>{for(const j in u)if(j.startsWith("aria-")||j==="role"||j==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=R.forwardRef(({color:u="currentColor",size:j=24,strokeWidth:S=2,absoluteStrokeWidth:d,className:H="",children:U,iconNode:x,...C},w)=>R.createElement("svg",{ref:w,...oy,width:j,height:j,stroke:u,strokeWidth:d?Number(S)*24/Number(j):S,className:jh("lucide",H),...!U&&!sy(C)&&{"aria-hidden":"true"},...C},[...x.map(([g,V])=>R.createElement(g,V)),...Array.isArray(U)?U:[U]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(u,j)=>{const S=R.forwardRef(({className:d,...H},U)=>R.createElement(uy,{ref:U,iconNode:j,className:jh(`lucide-${ny(th(u))}`,`lucide-${u}`,d),...H}));return S.displayName=th(u),S};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Pn=we("check",ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Sh=we("clock",cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ei=we("copy",dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],Ah=we("disc-3",fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Fl=we("disc",hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Tt=we("external-link",my);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ya=we("file-text",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Th=we("flame",by);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Eh=we("layout-grid",py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],ah=we("list-music",gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],kh=we("list",xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],Gu=we("music-2",vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],qu=we("music",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],cl=we("pause",Ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ht=we("play",jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],Ay=we("repeat",Sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],zh=we("search",Ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],ky=we("send",Ey);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],bt=we("share-2",zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],vs=we("shuffle",By);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],My=we("skip-back",Cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Uy=we("skip-forward",_y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ia=we("sparkles",Yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],Wl=we("tv",Oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Ry=we("video",Hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Vy=we("volume-2",Dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Ly=we("volume-x",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ga=we("x",Iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Xu=we("youtube",Gy),Xy=({isDarkMode:u,onToggleDarkMode:j,trackCount:S,onQuickShareAll:d})=>s.jsx("header",{id:"main-header",className:`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${u?"bg-black/40 border-white/10 text-white":"bg-white/80 border-neutral-200 text-neutral-900"}`,children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[s.jsxs("div",{className:"flex flex-col",children:[s.jsxs("h1",{className:"text-2xl sm:text-3xl md:text-4xl tracking-tighter leading-none select-none",children:[s.jsx("span",{className:"font-black",children:"D"}),s.jsx("span",{className:"font-light opacity-80",children:"o"}),s.jsx("span",{className:"font-medium opacity-90",children:"m"}),s.jsx("span",{className:"font-black text-cyan-400",children:"I"}),s.jsx("span",{className:"font-light opacity-80",children:"n"}),s.jsx("span",{className:"font-black bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent",children:"NATE"}),s.jsx("span",{className:"font-light opacity-80",children:"l"}),s.jsx("span",{className:"font-medium opacity-90",children:"y"})]}),s.jsx("p",{className:"text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold mt-0.5",children:"Official Gallery"})]}),s.jsxs("span",{className:`hidden md:inline-flex px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${u?"bg-white/5 border-white/10 text-cyan-300":"bg-cyan-50 border-cyan-200 text-cyan-700"}`,children:[S," Tracks"]})]}),s.jsxs("div",{className:"flex items-center gap-3 sm:gap-6",children:[s.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[s.jsxs("a",{id:"youtube-channel-link",href:ly,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${u?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Visit DomInNATEly on YouTube",children:[s.jsx(Ah,{className:"w-3.5 h-3.5 text-cyan-400 animate-spin",style:{animationDuration:"6s"}}),s.jsx("span",{className:"hidden lg:inline",children:"Channel"}),s.jsx(Tt,{className:"w-3 h-3 opacity-60"})]}),s.jsxs("a",{id:"youtube-playlist-link",href:Nh,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${u?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Open DomInNATEly official playlists on YouTube",children:[s.jsx(Gu,{className:"w-3.5 h-3.5 text-red-500"}),s.jsx("span",{className:"hidden lg:inline",children:"YT Playlists"}),s.jsx(Tt,{className:"w-3 h-3 opacity-60"})]}),s.jsxs("a",{id:"suno-playlist-header-link",href:nt.url,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${u?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Open official DomInNATEly playlist on Suno",children:[s.jsx(Ia,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{className:"hidden lg:inline",children:"Suno Playlist"}),s.jsx(Tt,{className:"w-3 h-3 opacity-60"})]})]}),d&&s.jsxs("button",{id:"share-gallery-btn",onClick:d,className:`p-2 sm:px-3 sm:py-1.5 rounded-full border text-xs font-semibold tracking-wider inline-flex items-center gap-1.5 transition-all ${u?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600"}`,title:"Share Gallery","aria-label":"Share DomInNATEly Music Gallery",children:[s.jsx(bt,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{className:"hidden md:inline uppercase text-[11px]",children:"Share"})]}),s.jsxs("div",{className:`flex items-center gap-2.5 sm:gap-3 border-l pl-3 sm:pl-5 ${u?"border-white/10":"border-neutral-200"}`,children:[s.jsx("button",{id:"dark-mode-toggle",onClick:j,className:`w-10 h-6 rounded-full relative flex items-center px-0.5 transition-colors focus:outline-hidden ${u?"bg-cyan-500":"bg-neutral-300"}`,title:u?"Switch to Light Mode":"Switch to Dark Mode","aria-label":u?"Switch to Light Mode":"Switch to Dark Mode",children:s.jsx("div",{className:`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${u?"translate-x-4":"translate-x-0"}`})}),s.jsx("span",{className:`text-[10px] uppercase font-bold tracking-wider hidden sm:inline ${u?"text-white/80":"text-neutral-700"}`,children:u?"Dark Mode":"Light Mode"})]})]})]})}),Qy=({track:u,isPlaying:j,isCurrentTrack:S,onPlay:d,onOpenShare:H,onOpenDetails:U,onOpenLyrics:x,isDarkMode:C})=>s.jsxs("div",{id:`track-card-${u.id}`,className:`group rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden relative ${S?C?"bg-white/10 border-cyan-400/80 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400/40":"bg-cyan-50/40 border-cyan-500 shadow-md ring-1 ring-cyan-400/30":C?"bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15 shadow-sm hover:shadow-md":"bg-white hover:bg-neutral-50/90 border-neutral-200 hover:border-neutral-300 shadow-xs hover:shadow-sm"}`,children:[s.jsxs("div",{className:"relative aspect-video w-full overflow-hidden bg-black",children:[s.jsx("img",{src:u.thumbnail,alt:u.title,loading:"lazy",referrerPolicy:"no-referrer",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"}),s.jsxs("div",{className:"absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none",children:[s.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white shadow-md",children:u.index.toString().padStart(2,"0")}),s.jsxs("span",{className:"px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-black/80 backdrop-blur-xs text-cyan-400 border border-white/10 flex items-center gap-1.5 shadow-xs",children:[s.jsx(Sh,{className:"w-3 h-3 text-cyan-400"}),u.duration]})]}),s.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:s.jsx("button",{id:`play-btn-${u.id}`,onClick:w=>{w.stopPropagation(),d(u)},className:`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform active:scale-95 ${S&&j?"bg-cyan-400 text-black scale-100 ring-4 ring-cyan-400/40 font-bold":"bg-white/90 hover:bg-white text-black backdrop-blur-sm group-hover:scale-110 shadow-lg"}`,"aria-label":S&&j?`Pause ${u.title}`:`Play ${u.title}`,children:S&&j?s.jsx(cl,{className:"w-5 h-5 fill-current"}):s.jsx(Ht,{className:"w-5 h-5 fill-current translate-x-0.5"})})}),S&&j&&s.jsxs("div",{className:"absolute bottom-2.5 left-2.5 flex items-end gap-1 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs border border-cyan-400/40",children:[s.jsx("span",{className:"w-1 bg-cyan-400 rounded-full animate-eq-1"}),s.jsx("span",{className:"w-1 bg-cyan-300 rounded-full animate-eq-2"}),s.jsx("span",{className:"w-1 bg-purple-400 rounded-full animate-eq-3"}),s.jsx("span",{className:"w-1 bg-cyan-400 rounded-full animate-eq-4"}),s.jsx("span",{className:"text-[10px] font-mono text-cyan-300 ml-1 font-bold uppercase tracking-wider",children:"Playing"})]})]}),s.jsxs("div",{className:"p-4 sm:p-5 flex-1 flex flex-col justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center justify-between gap-2 mb-1.5",children:[s.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-cyan-400 truncate",children:u.artist}),s.jsx("span",{className:`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${C?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-300 text-neutral-600"}`,children:u.category})]}),s.jsx("h3",{onClick:()=>U&&U(u),className:`text-base font-bold line-clamp-1 cursor-pointer transition-colors ${S?C?"text-cyan-400":"text-cyan-700":C?"text-white hover:text-cyan-400":"text-neutral-900 hover:text-cyan-700"}`,title:u.title,children:u.title}),s.jsx("p",{className:"text-xs text-white/50 italic mt-0.5",children:"DomInNATEly Originals"}),u.featuredLyrics&&s.jsxs("p",{className:`mt-2 text-xs italic line-clamp-2 leading-relaxed ${C?"text-white/60":"text-neutral-600"}`,children:["“",u.featuredLyrics,"”"]}),s.jsx("div",{className:"mt-3 flex flex-wrap gap-1",children:u.tags.map(w=>s.jsxs("span",{className:`text-[10px] font-medium px-2 py-0.5 rounded-md ${C?"bg-white/5 text-white/50 border border-white/5":"bg-neutral-100 text-neutral-600"}`,children:["#",w]},w))})]}),s.jsxs("div",{className:`mt-4 pt-3.5 border-t flex items-center justify-between gap-2 ${C?"border-white/10":"border-neutral-200"}`,children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx("button",{id:`card-play-toggle-${u.id}`,onClick:()=>d(u),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${S&&j?"bg-cyan-500 text-black font-bold":C?"bg-white/5 hover:bg-white/10 text-white border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-800"}`,children:S&&j?s.jsxs(s.Fragment,{children:[s.jsx(cl,{className:"w-3.5 h-3.5 fill-current"}),s.jsx("span",{children:"Pause"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Ht,{className:"w-3.5 h-3.5 fill-current"}),s.jsx("span",{children:"Play"})]})}),x&&s.jsxs("button",{id:`card-lyrics-btn-${u.id}`,onClick:w=>{w.stopPropagation(),x(u)},className:`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${C?"bg-white/5 hover:bg-white/10 text-white/80 hover:text-cyan-400 border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-700"}`,title:"View Full Lyrics","aria-label":`View lyrics for ${u.title}`,children:[s.jsx(ya,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{className:"hidden sm:inline",children:"Lyrics"})]})]}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("a",{id:`quick-x-share-${u.id}`,href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Listening to "${u.title}" by DomInNATEly 🔥`)}&url=${encodeURIComponent(u.youtubeUrl)}`,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${C?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-black hover:bg-neutral-200"}`,title:"Share on X","aria-label":`Share ${u.title} on X`,children:s.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),s.jsx("a",{id:`quick-fb-share-${u.id}`,href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(u.youtubeUrl)}`,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${C?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-[#1877F2] hover:bg-neutral-200"}`,title:"Share on Facebook","aria-label":`Share ${u.title} on Facebook`,children:s.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),s.jsx("a",{id:`card-youtube-link-${u.id}`,href:u.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${C?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-[#FF0000] hover:bg-neutral-200"}`,title:"Watch Video on YouTube","aria-label":`Watch ${u.title} on YouTube`,children:s.jsx(Xu,{className:"w-3.5 h-3.5 fill-current"})}),s.jsx("button",{id:`open-share-modal-${u.id}`,onClick:()=>H(u),className:`p-1.5 rounded-md transition-colors ${C?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200"}`,title:"More Share Options (WhatsApp, Reddit, Copy Link, etc.)","aria-label":`Share ${u.title}`,children:s.jsx(bt,{className:"w-3.5 h-3.5"})})]})]})]})]}),Zy=({searchQuery:u,onSearchChange:j,sortField:S,onSortChange:d,selectedCategory:H,onCategoryChange:U,totalResults:x,totalTracks:C=16,isDarkMode:w})=>{const g=[{id:"all",label:"All Tracks"},{id:"rock",label:"Rock & Riffs"},{id:"remix",label:"Remixes"},{id:"acoustic",label:"Acoustic / Live"},{id:"duet",label:"Duets"},{id:"alt",label:"Alt / Concept"}],V=C.toString().padStart(2,"0"),Y=[{id:"playlist",label:`Playlist Order (#01 - #${V})`},{id:"newest",label:`Reverse Order (#${V} - #01)`},{id:"duration-desc",label:"Duration (Longest First)"},{id:"duration-asc",label:"Duration (Shortest First)"},{id:"title-asc",label:"Title (A → Z)"},{id:"title-desc",label:"Title (Z → A)"}],X=u.trim()!==""||H!=="all"||S!=="playlist";return s.jsxs("div",{id:"sorting-filter-panel",className:`rounded-2xl border p-4 sm:p-5 mb-6 backdrop-blur-md transition-all ${w?"bg-white/5 border-white/10 shadow-xl shadow-black/40":"bg-white/90 border-neutral-200 shadow-sm"}`,children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-3.5",children:[s.jsxs("div",{className:"relative flex-1",children:[s.jsx(zh,{className:`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${w?"text-white/40":"text-neutral-400"}`}),s.jsx("input",{id:"track-search-input",type:"text",placeholder:"Search tracks, lyrics, or styles...",value:u,onChange:K=>j(K.target.value),className:`w-full pl-9 pr-9 py-2 rounded-xl text-xs sm:text-sm border focus:outline-hidden transition-all ${w?"bg-black/50 border-white/10 text-white placeholder-white/40 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/40":"bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600/30"}`}),u&&s.jsx("button",{onClick:()=>j(""),className:`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md ${w?"text-white/40 hover:text-white":"text-neutral-500 hover:text-neutral-900"}`,title:"Clear search",children:s.jsx(Ga,{className:"w-3.5 h-3.5"})})]}),s.jsxs("div",{className:`flex items-center px-3 py-1.5 rounded-full border transition-all ${w?"bg-white/5 border-white/10 text-white":"bg-neutral-100 border-neutral-300 text-neutral-800"}`,children:[s.jsx("span",{className:`text-[10px] sm:text-xs font-bold mr-2 uppercase tracking-wider ${w?"text-white/50":"text-neutral-500"}`,children:"SORT BY:"}),s.jsx("select",{id:"track-sort-select",value:S,onChange:K=>d(K.target.value),className:`bg-transparent text-xs outline-hidden cursor-pointer font-bold uppercase tracking-wider ${w?"text-cyan-400":"text-cyan-700"}`,children:Y.map(K=>s.jsx("option",{value:K.id,className:w?"bg-[#0a0a0a] text-white":"bg-white text-neutral-900",children:K.label},K.id))})]})]}),s.jsxs("div",{className:`mt-4 pt-3.5 border-t flex flex-wrap items-center justify-between gap-2.5 ${w?"border-white/10":"border-neutral-200"}`,children:[s.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar",children:g.map(K=>{const ee=H===K.id;return s.jsx("button",{id:`filter-pill-${K.id}`,onClick:()=>U(K.id),className:`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${ee?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":w?"bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20":"bg-neutral-100 border border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400"}`,children:K.label},K.id)})}),s.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono",children:[s.jsxs("span",{className:w?"text-cyan-400 font-bold":"text-cyan-700 font-bold",children:[x," ",x===1?"TRACK":"TRACKS"]}),X&&s.jsx("button",{id:"reset-filters-btn",onClick:()=>{j(""),U("all"),d("playlist")},className:`underline text-[11px] uppercase tracking-wider ml-2 transition-colors ${w?"text-white/50 hover:text-white":"text-neutral-500 hover:text-black"}`,children:"Reset"})]})]})]})},Ky=({currentTrack:u,playlist:j,onTrackChange:S,onOpenShare:d,onOpenLyrics:H,isDarkMode:U,isPlaying:x,setIsPlaying:C,allPlaylists:w,onSwitchPlaylist:g,currentPlaylistType:V="youtube",disableInternalPlayback:Y=!1,onVolumeChange:X})=>{const[K,ee]=R.useState(0),[ae,Ne]=R.useState(0),[Be,Ke]=R.useState(80),[ue,je]=R.useState(!1),[He,pe]=R.useState(!1),[te,Re]=R.useState(!1),[L,ie]=R.useState(!1),[$,Ee]=R.useState(!1),[qe,Je]=R.useState("current"),Ce=R.useMemo(()=>qe==="youtube"&&(w!=null&&w.youtube)?w.youtube:qe==="suno"&&(w!=null&&w.suno)?w.suno:j,[qe,w,j]),[T,D]=R.useState(!1),A=R.useRef(null),q=R.useRef(null),Q=R.useRef(null),h=R.useRef(null),f=R.useRef(null),k=R.useRef(null),_=R.useRef(!1),J=R.useRef(null),oe="youtube-player-container",W=!!(u!=null&&u.audioUrl||u!=null&&u.isSuno),$e=O=>{if(isNaN(O)||O<0)return"0:00";const M=Math.floor(O/60),P=Math.floor(O%60);return`${M}:${P<10?"0":""}${P}`},ke=R.useCallback(()=>{if(!u||j.length===0)return;if(He){const P=Math.floor(Math.random()*j.length);S(j[P]);return}const M=(j.findIndex(P=>P.id===u.id)+1)%j.length;S(j[M])},[u,j,He,S]);R.useCallback(()=>{if(!u||j.length===0)return;if(K>4){if(W&&q.current){q.current.currentTime=0,ee(0);return}if(A.current&&typeof A.current.seekTo=="function")try{A.current.seekTo(0,!0),ee(0);return}catch{}}const M=(j.findIndex(P=>P.id===u.id)-1+j.length)%j.length;S(j[M])},[u,j,K,W,S]),R.useEffect(()=>{if(u){if(Y){if(q.current&&q.current.pause(),Q.current&&Q.current.pause(),A.current&&typeof A.current.pauseVideo=="function")try{A.current.pauseVideo()}catch{}return}if(W){if(A.current&&typeof A.current.pauseVideo=="function")try{A.current.pauseVideo()}catch{}const O=u.audioUrl||u.videoUrl||"";q.current&&(q.current.src=O?encodeURI(O):"",q.current.volume=ue?0:(Be||80)/100,q.current.muted=ue,q.current.load(),ee(0),Ne(u.durationSeconds||180),x&&q.current.play().catch(M=>{console.warn("Audio auto-play notice:",M)})),Q.current&&(Q.current.volume=ue?0:(Be||80)/100,Q.current.muted=ue,x&&Q.current.play().catch(()=>{}));return}q.current&&q.current.pause(),Q.current&&Q.current.pause()}},[u==null?void 0:u.id,W]),R.useEffect(()=>{var O;if(!window.YT&&!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){const P=document.createElement("script");P.src="https://www.youtube.com/iframe_api";const it=document.getElementsByTagName("script")[0];(O=it==null?void 0:it.parentNode)==null||O.insertBefore(P,it)}},[]),R.useEffect(()=>{if(!u||W||Y)return;if(A.current&&_.current){if(typeof A.current.loadVideoById=="function")try{x?A.current.loadVideoById(u.id):typeof A.current.cueVideoById=="function"?A.current.cueVideoById(u.id):A.current.loadVideoById(u.id)}catch(it){console.warn("Error loading video by ID:",it)}return}J.current=u.id,f.current&&(clearTimeout(f.current),f.current=null);let O=0;const M=50,P=()=>{const it=k.current||document.getElementById(oe);if(!it){O++<M&&(f.current=setTimeout(P,100));return}if(!window.YT||!window.YT.Player){O++<M&&(f.current=setTimeout(P,100));return}if(!A.current)try{it.innerHTML="";const Rt=document.createElement("div");Rt.style.width="100%",Rt.style.height="100%",it.appendChild(Rt);const Jt=typeof window<"u"&&window.location.origin&&window.location.origin!=="null"?window.location.origin:void 0;A.current=new window.YT.Player(Rt,{height:"100%",width:"100%",videoId:u.id,playerVars:{autoplay:x?1:0,controls:1,modestbranding:1,rel:0,enablejsapi:1,...Jt?{origin:Jt}:{}},events:{onReady:Le=>{var Dt,ln,li;if(_.current=!0,typeof((Dt=Le.target)==null?void 0:Dt.setVolume)=="function")try{Le.target.setVolume(Be)}catch{}if(J.current&&J.current!==u.id){const nn=J.current;if(J.current=null,typeof((ln=Le.target)==null?void 0:ln.loadVideoById)=="function")try{Le.target.loadVideoById(nn),C(!0)}catch{}}else if(x&&typeof((li=Le.target)==null?void 0:li.playVideo)=="function")try{Le.target.playVideo()}catch{}},onStateChange:Le=>{if(Le.data===1){if(C(!0),A.current&&typeof A.current.getDuration=="function")try{const Dt=A.current.getDuration();Dt&&Dt>0&&Ne(Dt)}catch{}}else if(Le.data===2)C(!1);else if(Le.data===0)if(te){if(A.current&&typeof A.current.seekTo=="function")try{A.current.seekTo(0)}catch{}if(A.current&&typeof A.current.playVideo=="function")try{A.current.playVideo()}catch{}}else ke()},onError:Le=>{console.warn("YouTube Player event notice:",Le)}}})}catch(Rt){console.warn("Error instantiating YT.Player:",Rt)}};return P(),()=>{f.current&&(clearTimeout(f.current),f.current=null)}},[u==null?void 0:u.id,W]),R.useEffect(()=>{if(Y){if(q.current&&q.current.pause(),Q.current&&Q.current.pause(),A.current&&typeof A.current.pauseVideo=="function")try{A.current.pauseVideo()}catch{}return}if(W){if(!q.current)return;x?q.current.play().catch(O=>{console.warn("Audio play notice:",O)}):q.current.pause();return}if(!(!_.current||!A.current))try{x&&typeof A.current.playVideo=="function"?A.current.playVideo():!x&&typeof A.current.pauseVideo=="function"&&A.current.pauseVideo()}catch(O){console.warn("Error syncing playback state:",O)}},[x,W,Y]),R.useEffect(()=>(x?h.current=setInterval(()=>{if(W){if(Q.current&&!Q.current.paused){const O=Q.current.currentTime;O!==void 0&&!isNaN(O)&&ee(O);const M=Q.current.duration;M&&!isNaN(M)&&M>0&&Ne(M)}else if(q.current&&!q.current.paused){const O=q.current.currentTime;O!==void 0&&!isNaN(O)&&ee(O);const M=q.current.duration;M&&!isNaN(M)&&M>0&&Ne(M)}else ee(O=>{const M=ae||(u==null?void 0:u.durationSeconds)||180;return O>=M?(ke(),0):O+1});return}if(A.current&&typeof A.current.getCurrentTime=="function")try{const O=A.current.getCurrentTime();if(O!==void 0&&!isNaN(O)&&ee(O),typeof A.current.getDuration=="function"){const M=A.current.getDuration();M&&M>0&&Ne(M)}}catch{}},500):clearInterval(h.current),()=>clearInterval(h.current)),[x,W,ae,u==null?void 0:u.durationSeconds,ke]),R.useEffect(()=>()=>{if(clearInterval(h.current),A.current&&typeof A.current.destroy=="function")try{A.current.destroy()}catch{}A.current=null,_.current=!1,q.current&&q.current.pause(),Q.current&&Q.current.pause()},[]);const Zt=R.useCallback(()=>{if(j.length===0)return;if(!u){S(j[0]);return}const O=j.findIndex(P=>P.id===u.id),M=O===-1||O>=j.length-1?0:O+1;S(j[M])},[u,j,S]),ba=R.useCallback(()=>{if(j.length===0)return;if(!u){S(j[j.length-1]);return}const O=j.findIndex(P=>P.id===u.id),M=O<=0?j.length-1:O-1;S(j[M])},[u,j,S]),Xa=R.useCallback(()=>{if(!u&&j.length>0){S(j[0]);return}if(Y){C(!x);return}if(W){if(!q.current){C(!x);return}x?(q.current.pause(),C(!1)):(q.current.play().catch(O=>{console.warn("Audio play error:",O)}),C(!0));return}if(!A.current||!_.current){C(!x);return}try{x?(typeof A.current.pauseVideo=="function"&&A.current.pauseVideo(),C(!1)):(typeof A.current.playVideo=="function"&&A.current.playVideo(),C(!0))}catch(O){console.warn("Error toggling playback:",O),C(!x)}},[u,j,W,x,C,S]),ti=O=>{const M=parseFloat(O.target.value);if(ee(M),W){q.current&&(q.current.currentTime=M),Q.current&&(Q.current.currentTime=M);return}if(A.current&&typeof A.current.seekTo=="function")try{A.current.seekTo(M,!0)}catch(P){console.warn("Error seeking:",P)}},Kt=O=>{const M=parseInt(O.target.value,10);if(Ke(M),W){q.current&&(q.current.volume=ue?0:M/100),Q.current&&(Q.current.volume=ue?0:M/100);return}if(A.current&&typeof A.current.setVolume=="function")try{A.current.setVolume(M),M===0?(je(!0),typeof A.current.mute=="function"&&A.current.mute()):ue&&(je(!1),typeof A.current.unMute=="function"&&A.current.unMute())}catch(P){console.warn("Error setting volume:",P)}},Pl=()=>{if(W){const O=!ue;je(O),q.current&&(q.current.muted=O),Q.current&&(Q.current.muted=O);return}if(A.current)try{ue?(typeof A.current.unMute=="function"&&A.current.unMute(),je(!1),typeof A.current.setVolume=="function"&&A.current.setVolume(Be||50)):(typeof A.current.mute=="function"&&A.current.mute(),je(!0))}catch(O){console.warn("Error toggling mute:",O)}},dl=R.useRef(Xa);dl.current=Xa;const ai=R.useRef(Zt);ai.current=Zt;const en=R.useRef(ba);if(en.current=ba,R.useEffect(()=>{const O=M=>{if(M.altKey||M.ctrlKey||M.metaKey)return;const P=M.target;if(P){const it=P.tagName?P.tagName.toUpperCase():"",Rt=P.isContentEditable,Jt=it==="INPUT",Le=Jt?P.type.toLowerCase():"";if(it==="TEXTAREA"||it==="SELECT"||Rt||Jt&&!["range","button","checkbox","radio"].includes(Le)||Jt&&Le==="range"&&(M.key==="ArrowLeft"||M.key==="ArrowRight"||M.key==="ArrowUp"||M.key==="ArrowDown"||M.code==="ArrowLeft"||M.code==="ArrowRight"||M.code==="ArrowUp"||M.code==="ArrowDown"))return}if(M.key===" "||M.code==="Space"||M.key==="Spacebar"){M.preventDefault(),dl.current();return}if(M.key==="ArrowLeft"||M.code==="ArrowLeft"||M.key==="Left"||M.key==="ArrowUp"||M.code==="ArrowUp"||M.key==="Up"){M.preventDefault(),en.current();return}if(M.key==="ArrowRight"||M.code==="ArrowRight"||M.key==="Right"||M.key==="ArrowDown"||M.code==="ArrowDown"||M.key==="Down"){M.preventDefault(),ai.current();return}};return window.addEventListener("keydown",O),()=>{window.removeEventListener("keydown",O)}},[]),!u)return null;const pa=ae||u.durationSeconds||180,tn=pa>0?K/pa*100:0,an=s.jsxs("div",{className:"w-full h-full relative bg-black flex items-center justify-center overflow-hidden rounded-2xl",children:[W?u.videoUrl?s.jsx("video",{ref:Q,src:encodeURI(u.videoUrl),controls:!0,autoPlay:!0,playsInline:!0,muted:ue,className:"w-full h-full object-contain bg-black",onTimeUpdate:O=>{const M=O.currentTarget.currentTime;isNaN(M)||ee(M)},onLoadedMetadata:O=>{const M=O.currentTarget.duration;M&&!isNaN(M)&&M>0&&Ne(M)},onEnded:()=>{te?Q.current&&(Q.current.currentTime=0,Q.current.play().catch(()=>{})):ke()}}):s.jsx("iframe",{src:encodeURI(u.embedUrl||u.youtubeUrl||""),title:`Suno Embed - ${u.title}`,className:"w-full h-full border-0",allow:"autoplay"}):null,s.jsx("div",{ref:k,id:oe,className:`w-full h-full min-h-[220px] ${W?"hidden":""}`})]});return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300 ${L?"opacity-100 pointer-events-auto visible":"opacity-0 pointer-events-none invisible"}`,onClick:()=>ie(!1),children:s.jsxs("div",{className:"relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col",onClick:O=>O.stopPropagation(),children:[s.jsxs("div",{className:"p-3 bg-neutral-950/90 border-b border-white/10 flex items-center justify-between text-xs",children:[s.jsxs("span",{className:"font-bold text-white truncate max-w-[80%]",children:[u.title," — ",u.artist]}),s.jsx("button",{onClick:()=>ie(!1),className:"px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-semibold transition-colors",children:"Close Video Mode"})]}),s.jsx("div",{className:"flex-1 w-full h-full relative",children:an})]})}),s.jsx("audio",{ref:q,crossOrigin:"anonymous",onError:()=>{q.current&&(u!=null&&u.videoUrl)&&q.current.src!==u.videoUrl&&(q.current.src=u.videoUrl,q.current.load(),x&&q.current.play().catch(()=>{}))},onTimeUpdate:O=>{const M=O.currentTarget.currentTime;isNaN(M)||ee(M)},onLoadedMetadata:O=>{const M=O.currentTarget.duration;M&&!isNaN(M)&&M>0&&Ne(M)},onEnded:()=>{te?q.current&&(q.current.currentTime=0,q.current.play().catch(()=>{})):ke()},preload:"auto"}),s.jsxs("div",{id:"persistent-audio-player",className:`fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-xl shadow-2xl transition-all duration-300 ${U?"bg-black/95 border-white/10 text-white":"bg-white/95 border-neutral-200 text-neutral-900"}`,children:[s.jsxs("div",{className:"relative w-full h-1.5 group cursor-pointer bg-white/10",children:[s.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all pointer-events-none relative",style:{width:`${tn}%`},children:s.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg shadow-cyan-500/50 scale-0 group-hover:scale-100 transition-transform"})}),s.jsx("input",{id:"audio-progress-bar",type:"range",min:"0",max:pa,step:"1",value:K,onChange:ti,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer","aria-label":"Seek track"})]}),s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-8 py-3",children:s.jsxs("div",{className:"flex items-center justify-between gap-4 sm:gap-8",children:[s.jsxs("div",{className:"flex items-center gap-3.5 min-w-0 max-w-[40%] sm:max-w-[28%]",children:[s.jsxs("div",{className:"relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-md bg-black",children:[s.jsx("img",{src:u.thumbnail,alt:u.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),x&&s.jsx("div",{className:"absolute inset-0 bg-black/50 flex items-center justify-center",children:s.jsxs("div",{className:"flex items-end gap-0.5 h-3",children:[s.jsx("span",{className:"w-0.5 bg-cyan-400 animate-eq-1"}),s.jsx("span",{className:"w-0.5 bg-cyan-300 animate-eq-2"}),s.jsx("span",{className:"w-0.5 bg-purple-400 animate-eq-3"})]})})]}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("h4",{className:"text-xs sm:text-sm font-bold truncate leading-tight hover:text-cyan-400 transition-colors",children:u.title}),s.jsxs("p",{className:`text-[11px] sm:text-xs truncate ${U?"text-white/50":"text-neutral-500"}`,children:[u.artist," • ",s.jsxs("span",{className:"font-mono text-cyan-400",children:["#",u.index.toString().padStart(2,"0")]})]})]})]}),s.jsxs("div",{className:"flex flex-col items-center justify-center gap-1.5 flex-1 max-w-md",children:[s.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[s.jsx("button",{id:"player-shuffle-btn",onClick:()=>pe(!He),className:`p-1.5 rounded-full transition-colors hidden sm:block ${He?"text-cyan-400 font-bold":U?"text-white/40 hover:text-white":"text-neutral-400 hover:text-black"}`,title:He?"Shuffle Active":"Enable Shuffle","aria-label":"Shuffle",children:s.jsx(vs,{className:"w-4 h-4"})}),s.jsx("button",{id:"player-prev-btn",onClick:ba,className:`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${U?"text-white hover:text-cyan-400":"text-neutral-700 hover:text-black"}`,title:"Previous Track (←)","aria-label":"Previous Track",children:s.jsx(My,{className:"w-5 h-5 fill-current"})}),s.jsx("button",{id:"player-play-pause-btn",onClick:Xa,className:"w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black hover:bg-cyan-300 flex items-center justify-center font-bold text-xl shadow-xl hover:scale-105 active:scale-95 transition-all",title:x?"Pause (Space)":"Play (Space)","aria-label":x?"Pause":"Play",children:x?s.jsx(cl,{className:"w-5 h-5 fill-current"}):s.jsx(Ht,{className:"w-5 h-5 fill-current translate-x-0.5"})}),s.jsx("button",{id:"player-next-btn",onClick:Zt,className:`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${U?"text-white hover:text-cyan-400":"text-neutral-700 hover:text-black"}`,title:"Next Track (→)","aria-label":"Next Track",children:s.jsx(Uy,{className:"w-5 h-5 fill-current"})}),s.jsx("button",{id:"player-repeat-btn",onClick:()=>Re(!te),className:`p-1.5 rounded-full transition-colors hidden sm:block ${te?"text-cyan-400 font-bold":U?"text-white/40 hover:text-white":"text-neutral-400 hover:text-black"}`,title:te?"Repeat Active":"Enable Repeat","aria-label":"Repeat",children:s.jsx(Ay,{className:"w-4 h-4"})})]}),s.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold",children:[s.jsx("span",{className:"text-cyan-400",children:$e(K)}),s.jsx("span",{className:"text-white/30",children:"/"}),s.jsx("span",{className:U?"text-white/40":"text-neutral-400",children:$e(pa)}),s.jsxs("span",{className:"hidden lg:inline-flex items-center gap-1 text-[10px] text-white/40 font-normal ml-2",children:[s.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[9px] font-mono",children:"Space"}),s.jsx("span",{children:"Play"}),s.jsx("span",{className:"text-white/20",children:"•"}),s.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[9px] font-mono",children:"←"}),s.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[9px] font-mono",children:"→"}),s.jsx("span",{children:"Tracks"})]})]})]}),s.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[s.jsxs("div",{className:"hidden md:flex items-center gap-2.5 w-36 lg:w-48",children:[s.jsx("span",{className:`text-[10px] font-bold tracking-wider ${U?"text-white/40":"text-neutral-400"}`,children:"VOL"}),s.jsx("button",{onClick:Pl,className:`p-1 rounded-md transition-colors ${U?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,"aria-label":ue?"Unmute":"Mute",children:ue||Be===0?s.jsx(Ly,{className:"w-3.5 h-3.5 text-cyan-400"}):s.jsx(Vy,{className:"w-3.5 h-3.5"})}),s.jsx("div",{className:"flex-1 flex items-center",children:s.jsx("input",{id:"player-volume-slider",type:"range",min:"0",max:"100",value:ue?0:Be,onChange:Kt,className:"w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-400","aria-label":"Volume slider"})})]}),s.jsxs("button",{id:"player-queue-modal-btn",onClick:()=>Ee(!$),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${$?"bg-cyan-500 border-cyan-400 text-black font-bold shadow-lg shadow-cyan-500/25":U?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Playlist Queue & Up Next","aria-label":"Toggle Playlist Queue",children:[s.jsx(ah,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{className:"hidden sm:inline text-[11px] uppercase tracking-wider",children:"Queue"}),s.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-400/20 text-cyan-300 font-mono",children:Ce.length})]}),s.jsxs("button",{id:"player-video-modal-btn",onClick:()=>ie(!L),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${L?"bg-cyan-500 border-cyan-400 text-black font-bold":U?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Open Video View","aria-label":"Toggle Video Mode",children:[s.jsx(Wl,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{className:"hidden lg:inline text-[11px] uppercase tracking-wider",children:"Video"})]}),H&&s.jsxs("button",{id:"player-lyrics-btn",onClick:()=>H(u),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${U?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"View Full Lyrics","aria-label":"View Full Song Lyrics",children:[s.jsx(ya,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{className:"hidden lg:inline text-[11px] uppercase tracking-wider",children:"Lyrics"})]}),s.jsxs("button",{id:"player-share-current-btn",onClick:()=>d(u),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${U?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black hover:bg-neutral-200"}`,title:"Share Song","aria-label":"Share current song",children:[s.jsx(bt,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{className:"hidden sm:inline text-[11px] uppercase tracking-wider",children:"Share"})]})]})]})})]}),$&&s.jsxs("div",{id:"player-queue-drawer",className:`fixed bottom-24 sm:bottom-28 right-2 sm:right-6 w-[calc(100vw-16px)] sm:w-96 md:w-[420px] max-h-[70vh] z-50 rounded-2xl border shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden transition-all ${U?"bg-neutral-950/95 border-white/15 text-white shadow-cyan-950/40":"bg-white/95 border-neutral-200 text-neutral-900 shadow-xl"}`,children:[s.jsxs("div",{className:"p-3.5 sm:p-4 border-b border-white/10 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(ah,{className:"w-4 h-4 text-cyan-400"}),s.jsx("h3",{className:"font-bold text-sm tracking-wide",children:"Playlist Queue"}),s.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold",children:[Ce.length," Songs"]})]}),s.jsx("button",{onClick:()=>Ee(!1),className:`p-1.5 rounded-full hover:bg-white/10 transition-colors ${U?"text-white/60 hover:text-white":"text-neutral-500 hover:text-neutral-900"}`,"aria-label":"Close Queue",children:s.jsx(Ga,{className:"w-4 h-4"})})]}),s.jsxs("div",{className:"p-2 border-b border-white/10 flex items-center gap-1.5 bg-black/20 text-xs",children:[s.jsxs("button",{onClick:()=>Je("current"),className:`flex-1 py-1.5 px-2 rounded-lg font-semibold text-center transition-all ${qe==="current"?"bg-cyan-500 text-black font-bold shadow-sm":U?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:["Current (",j.length,")"]}),(w==null?void 0:w.youtube)&&s.jsxs("button",{onClick:()=>{Je("youtube"),g&&g("youtube")},className:`flex-1 py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${qe==="youtube"?"bg-cyan-500 text-black font-bold shadow-sm":U?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:[s.jsx(Fl,{className:"w-3 h-3 text-red-500"}),s.jsxs("span",{children:["YouTube (",w.youtube.length,")"]})]}),(w==null?void 0:w.suno)&&s.jsxs("button",{onClick:()=>{Je("suno"),g&&g("suno")},className:`flex-1 py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${qe==="suno"?"bg-cyan-500 text-black font-bold shadow-sm":U?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:[s.jsx(Ia,{className:"w-3 h-3 text-cyan-400"}),s.jsxs("span",{children:["Suno (",w.suno.length,")"]})]})]}),s.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 max-h-[50vh] divide-y divide-white/5",children:Ce.map((O,M)=>{const P=(u==null?void 0:u.id)===O.id;return s.jsxs("div",{onClick:()=>{S(O),C(!0)},className:`p-2 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition-all ${P?U?"bg-cyan-500/20 border border-cyan-400/40 text-white shadow-sm":"bg-cyan-50 border border-cyan-300 text-cyan-950 font-medium":U?"hover:bg-white/5 text-white/80 hover:text-white":"hover:bg-neutral-100 text-neutral-800"}`,children:[s.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[s.jsx("span",{className:"font-mono text-[10px] opacity-40 w-4 text-center shrink-0",children:P?s.jsx("span",{className:"text-cyan-400 font-bold",children:"▶"}):(O.index||M+1).toString().padStart(2,"0")}),s.jsx("div",{className:"w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-neutral-900",children:s.jsx("img",{src:O.thumbnail,alt:O.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"})}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("p",{className:"text-xs font-bold truncate leading-tight",children:O.title}),s.jsx("p",{className:`text-[10px] truncate ${U?"text-white/50":"text-neutral-500"}`,children:O.artist})]})]}),s.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[P&&x&&s.jsxs("div",{className:"flex items-end gap-0.5 h-2.5",children:[s.jsx("span",{className:"w-0.5 bg-cyan-400 animate-eq-1"}),s.jsx("span",{className:"w-0.5 bg-cyan-300 animate-eq-2"}),s.jsx("span",{className:"w-0.5 bg-purple-400 animate-eq-3"})]}),s.jsx("span",{className:"font-mono text-[10px] opacity-60",children:O.duration})]})]},`${O.id}-${M}`)})})]})]})},Jy=({track:u,isOpen:j,onClose:S,isDarkMode:d})=>{const[H,U]=R.useState(!1);if(!j||!u)return null;const x=typeof window<"u"?window.location.href:"",C=u.youtubeUrl||x,w=`Check out "${u.title}" by DomInNATEly! 🎸🔥`,g=async()=>{try{navigator.clipboard&&(await navigator.clipboard.writeText(C),U(!0),setTimeout(()=>U(!1),2500))}catch{const ae=document.createElement("textarea");ae.value=C,document.body.appendChild(ae),ae.select(),document.execCommand("copy"),document.body.removeChild(ae),U(!0),setTimeout(()=>U(!1),2500)}},V=async()=>{if(navigator.share)try{await navigator.share({title:`${u.title} - DomInNATEly`,text:w,url:C})}catch{}},Y=encodeURIComponent(C),X=encodeURIComponent(`${w} ${C}`),K=encodeURIComponent(`${u.title} - DomInNATEly`),ee=[{name:"X (Twitter)",url:`https://twitter.com/intent/tweet?text=${X}`,color:"bg-black text-white hover:bg-neutral-800 border-neutral-700",icon:s.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})},{name:"Facebook",url:`https://www.facebook.com/sharer/sharer.php?u=${Y}`,color:"bg-[#1877F2] text-white hover:bg-[#166fe5] border-transparent",icon:s.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})},{name:"WhatsApp",url:`https://api.whatsapp.com/send?text=${X}`,color:"bg-[#25D366] text-white hover:bg-[#20ba59] border-transparent",icon:s.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"})})},{name:"Reddit",url:`https://reddit.com/submit?url=${Y}&title=${K}`,color:"bg-[#FF4500] text-white hover:bg-[#e03d00] border-transparent",icon:s.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"})})},{name:"Telegram",url:`https://t.me/share/url?url=${Y}&text=${X}`,color:"bg-[#229ED9] text-white hover:bg-[#1f8ec4] border-transparent",icon:s.jsx(ky,{className:"w-4 h-4 fill-current"})}];return s.jsx("div",{id:"share-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity",onClick:S,children:s.jsxs("div",{id:"share-modal-container",className:`w-full max-w-md rounded-2xl border shadow-2xl p-6 relative transition-all ${d?"bg-[#0a0a0a] border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:ae=>ae.stopPropagation(),children:[s.jsx("button",{id:"close-share-modal",onClick:S,className:`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${d?"text-white/40 hover:text-white hover:bg-white/10":"text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"}`,"aria-label":"Close modal",children:s.jsx(Ga,{className:"w-5 h-5"})}),s.jsxs("div",{className:"flex items-start gap-3.5 mb-5",children:[s.jsx("div",{className:"relative w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-black shadow-md",children:s.jsx("img",{src:u.thumbnail,alt:u.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"})}),s.jsxs("div",{className:"min-w-0 flex-1 pr-6",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-cyan-400 font-bold uppercase tracking-wider mb-0.5",children:[s.jsx(bt,{className:"w-3.5 h-3.5"}),"Share Track"]}),s.jsx("h3",{className:"font-bold text-base leading-snug truncate",children:u.title}),s.jsxs("p",{className:`text-xs ${d?"text-white/50":"text-neutral-500"}`,children:["by ",s.jsx("span",{className:"font-medium text-cyan-400",children:u.artist})," • ",u.duration]})]})]}),s.jsxs("div",{className:"mb-5",children:[s.jsx("label",{className:`block text-xs font-bold uppercase tracking-wider mb-1.5 ${d?"text-white/50":"text-neutral-600"}`,children:"Track Link"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("input",{id:"share-link-input",type:"text",readOnly:!0,value:C,className:`flex-1 text-xs px-3 py-2.5 rounded-xl border font-mono truncate focus:outline-hidden ${d?"bg-black/60 border-white/10 text-cyan-300":"bg-neutral-50 border-neutral-300 text-neutral-800"}`}),s.jsx("button",{id:"copy-track-link-btn",onClick:g,className:`px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shrink-0 ${H?"bg-emerald-500 text-black":"bg-cyan-500 hover:bg-cyan-400 text-black shadow-md shadow-cyan-500/20"}`,children:H?s.jsxs(s.Fragment,{children:[s.jsx(Pn,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Copied"})]}):s.jsxs(s.Fragment,{children:[s.jsx(ei,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Copy"})]})})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:`block text-xs font-bold uppercase tracking-wider mb-2.5 ${d?"text-white/50":"text-neutral-600"}`,children:"Share on Social Networks"}),s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5",children:[ee.map(ae=>s.jsxs("a",{href:ae.url,target:"_blank",rel:"noopener noreferrer",className:`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border shadow-xs transition-transform active:scale-95 ${ae.color}`,children:[ae.icon,s.jsx("span",{children:ae.name})]},ae.name)),s.jsxs("a",{href:u.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FF0000] text-white hover:bg-[#d90000] shadow-xs active:scale-95 transition-transform",children:[s.jsx(Xu,{className:"w-4 h-4 fill-current"}),s.jsx("span",{children:"YouTube"})]})]})]}),typeof navigator<"u"&&"share"in navigator&&s.jsx("div",{className:"mt-4 pt-4 border-t border-white/10",children:s.jsxs("button",{id:"native-device-share-btn",onClick:V,className:`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all ${d?"bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-cyan-400":"bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"}`,children:[s.jsx(bt,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{children:"Open Device Share Sheet"})]})})]})})},Qu=({lyrics:u,title:j,artist:S,isDarkMode:d,maxHeight:H="max-h-[360px]",compact:U=!1})=>{const[x,C]=R.useState(!1),w=()=>{u&&(navigator.clipboard.writeText(u),C(!0),setTimeout(()=>C(!1),2e3))};if(!u||u.trim()==="")return s.jsxs("div",{className:"py-10 text-center text-xs opacity-60 flex flex-col items-center justify-center gap-2",children:[s.jsx(ya,{className:"w-6 h-6 opacity-40 text-cyan-400"}),s.jsx("p",{children:"No written lyrics available for this track."})]});const g=u.split(`
`);return s.jsxs("div",{className:"w-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(ya,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-cyan-400 font-mono",children:"Full Song Lyrics"})]}),s.jsx("button",{onClick:w,className:`px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1.5 transition-all ${x?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":d?"bg-white/5 hover:bg-white/10 text-white/80 border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300"}`,title:"Copy lyrics to clipboard","aria-label":"Copy lyrics",children:x?s.jsxs(s.Fragment,{children:[s.jsx(Pn,{className:"w-3 h-3 text-emerald-400"}),s.jsx("span",{children:"Copied!"})]}):s.jsxs(s.Fragment,{children:[s.jsx(ei,{className:"w-3 h-3 opacity-70"}),s.jsx("span",{children:"Copy"})]})})]}),s.jsx("div",{className:`overflow-y-auto pr-2 space-y-2 ${H} custom-scrollbar font-mono ${U?"text-[11px] leading-relaxed":"text-xs sm:text-sm leading-relaxed"}`,children:g.map((V,Y)=>{const X=V.trim();if(!X)return s.jsx("div",{className:"h-2"},Y);if(X.startsWith("**[")||X.startsWith("[")||X.endsWith("]**")||X.endsWith("]")){const ee=X.replace(/\*\*/g,"");return s.jsx("div",{className:"pt-2 pb-0.5 text-cyan-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs",children:s.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 inline-block",children:ee})},Y)}return s.jsx("p",{className:`${d?"text-white/80":"text-neutral-800"} hover:text-cyan-300 transition-colors select-text`,children:X},Y)})})]})},$y=({track:u,isOpen:j,onClose:S,isPlaying:d,isCurrentTrack:H,onPlay:U,onOpenShare:x,isDarkMode:C})=>!j||!u?null:s.jsx("div",{id:"track-detail-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md",onClick:S,children:s.jsxs("div",{id:"track-detail-container",className:`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden transition-all relative ${C?"bg-[#0a0a0a] border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:w=>w.stopPropagation(),children:[s.jsx("button",{id:"close-track-detail-btn",onClick:S,className:"absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white border border-white/10 backdrop-blur-sm transition-colors","aria-label":"Close track details",children:s.jsx(Ga,{className:"w-5 h-5"})}),s.jsxs("div",{className:"relative aspect-video w-full bg-black",children:[s.jsx("img",{src:u.thumbnail,alt:u.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"}),s.jsxs("div",{className:"absolute bottom-4 left-6 flex items-center gap-3",children:[s.jsx("button",{onClick:()=>U(u),className:"w-12 h-12 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center shadow-xl shadow-cyan-950/60 font-bold transform active:scale-95 transition-transform",children:H&&d?s.jsx(cl,{className:"w-5 h-5 fill-current"}):s.jsx(Ht,{className:"w-5 h-5 fill-current translate-x-0.5"})}),s.jsxs("div",{children:[s.jsxs("span",{className:"text-xs uppercase font-mono font-bold text-cyan-400",children:["Track #",u.index.toString().padStart(2,"0")]}),s.jsx("h2",{className:"text-xl font-bold leading-tight drop-shadow-md text-white",children:u.title})]})]})]}),s.jsxs("div",{className:"p-6",children:[s.jsxs("div",{className:`flex items-center justify-between gap-4 pb-4 border-b ${C?"border-white/10":"border-neutral-200"}`,children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-xs text-white/40",children:"Artist / Band"}),s.jsx("p",{className:"text-sm font-bold text-cyan-400",children:u.artist})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs text-white/40",children:"Duration"}),s.jsxs("p",{className:"text-sm font-mono font-semibold flex items-center gap-1 text-cyan-400",children:[s.jsx(Sh,{className:"w-3.5 h-3.5"}),u.duration]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs text-white/40",children:"Category"}),s.jsx("p",{className:"text-sm font-semibold capitalize text-white/90",children:u.category})]})]}),u.description&&s.jsxs("div",{className:"mt-4",children:[s.jsx("h4",{className:"text-xs uppercase font-semibold tracking-wider text-white/40 mb-1.5",children:"Track Background"}),s.jsx("p",{className:`text-sm leading-relaxed ${C?"text-white/70":"text-neutral-700"}`,children:u.description})]}),s.jsx("div",{className:`mt-4 p-4 rounded-2xl border ${C?"bg-white/5 border-white/10":"bg-neutral-50 border-neutral-200"}`,children:s.jsx(Qu,{lyrics:Iu(u),title:u.title,artist:u.artist,isDarkMode:C,maxHeight:"max-h-[280px]"})}),s.jsxs("div",{className:"mt-6 flex items-center gap-3",children:[s.jsxs("button",{onClick:()=>x(u),className:"flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95",children:[s.jsx(bt,{className:"w-4 h-4"}),s.jsx("span",{children:"Share Song"})]}),s.jsxs("a",{href:u.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:`py-2.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${C?"bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-cyan-400":"bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"}`,children:[s.jsx(Xu,{className:"w-4 h-4 text-[#FF0000]"}),s.jsx("span",{children:"Watch on YouTube"})]})]})]})]})}),Fy=({track:u,isOpen:j,onClose:S,isDarkMode:d,isPlaying:H=!1,isCurrentTrack:U=!1,onPlay:x,onOpenShare:C})=>{if(!j||!u)return null;const w=Iu(u),g="thumbnail"in u?u.thumbnail:u.image;return s.jsx("div",{id:"lyrics-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300",onClick:S,children:s.jsxs("div",{id:"lyrics-modal-container",className:`relative w-full max-w-2xl max-h-[85vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden transition-all ${d?"bg-neutral-950/95 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:V=>V.stopPropagation(),children:[s.jsxs("div",{className:"p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-3 bg-black/30",children:[s.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[g&&s.jsx("img",{src:g,alt:u.title,className:"w-12 h-12 rounded-xl object-cover shrink-0 border border-white/10 shadow-md",referrerPolicy:"no-referrer"}),s.jsxs("div",{className:"min-w-0",children:[s.jsxs("span",{className:"text-[10px] font-mono uppercase font-bold text-cyan-400",children:["Track #",u.index," • ","isSuno"in u&&u.isSuno?"Suno AI Collection":"YouTube Media"]}),s.jsx("h3",{className:"text-base sm:text-lg font-black truncate leading-tight",children:u.title}),s.jsx("p",{className:`text-xs truncate ${d?"text-white/60":"text-neutral-500"}`,children:u.artist})]})]}),s.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[x&&s.jsx("button",{onClick:()=>x(u),className:"w-10 h-10 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center font-bold shadow-md transition-all transform active:scale-95",title:U&&H?"Pause":"Play","aria-label":U&&H?"Pause":"Play",children:U&&H?s.jsx(cl,{className:"w-4 h-4 fill-current"}):s.jsx(Ht,{className:"w-4 h-4 fill-current translate-x-0.5"})}),s.jsx("button",{onClick:S,className:"p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors","aria-label":"Close lyrics modal",children:s.jsx(Ga,{className:"w-4 h-4"})})]})]}),s.jsx("div",{className:"p-4 sm:p-6 overflow-y-auto flex-1 custom-scrollbar",children:s.jsx(Qu,{lyrics:w,title:u.title,artist:u.artist,isDarkMode:d,maxHeight:"max-h-[50vh]"})}),s.jsxs("div",{className:"p-3.5 sm:p-4 border-t border-white/10 bg-black/40 flex items-center justify-between gap-3 text-xs",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-white/50 text-[11px] font-mono",children:[s.jsx(Gu,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{children:"DomInNATEly Official Lyrics"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[C&&s.jsxs("button",{onClick:()=>C(u),className:"px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-all",children:[s.jsx(bt,{className:"w-3 h-3 text-cyan-400"}),s.jsx("span",{children:"Share"})]}),s.jsx("button",{onClick:S,className:"px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all",children:"Done"})]})]})]})})},Wy=({track:u,isPlaying:j,isCurrentTrack:S,onPlay:d,onOpenLyrics:H,onOpenEmbed:U,onOpenShare:x,isDarkMode:C})=>{const g=(V=>V&&V.split(`
`).map(X=>X.trim()).filter(X=>X&&!X.startsWith("[")&&!X.startsWith("**[")).slice(0,2).join(" / ")||null)(u.lyrics);return s.jsxs("div",{id:`suno-track-card-${u.id}`,className:`group relative rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden ${S?C?"bg-white/[0.08] border-cyan-500/50 shadow-lg shadow-cyan-500/10":"bg-cyan-50/70 border-cyan-400 shadow-md":C?"bg-neutral-900/60 border-white/5 hover:border-white/20 hover:bg-neutral-900/90":"bg-white border-neutral-200 hover:border-neutral-300 shadow-sm"}`,children:[s.jsxs("div",{onClick:()=>d(u),className:"relative aspect-square w-full overflow-hidden bg-neutral-950 cursor-pointer",children:[s.jsx("img",{src:u.image,alt:u.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",loading:"lazy"}),s.jsxs("div",{className:"absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white font-mono text-[11px] font-bold border border-white/10",children:["#",u.index]}),s.jsx("div",{className:"absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-cyan-300 font-mono text-[11px] font-bold border border-white/10",children:u.durationFormatted}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity"}),s.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:s.jsx("button",{type:"button",onClick:V=>{V.stopPropagation(),d(u)},"aria-label":S&&j?"Pause track":"Play track",className:`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all transform duration-300 active:scale-95 ${S&&j?"bg-cyan-400 text-black shadow-cyan-500/50 scale-105 ring-4 ring-cyan-400/40":"bg-white/90 text-black hover:bg-cyan-400 opacity-90 group-hover:opacity-100 group-hover:scale-110 shadow-lg"}`,children:S&&j?s.jsx(cl,{className:"w-6 h-6 fill-current"}):s.jsx(Ht,{className:"w-6 h-6 fill-current translate-x-0.5"})})}),S&&j&&s.jsxs("div",{className:"absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-400/40 flex items-center gap-1",children:[s.jsx("div",{className:"w-1 h-3 bg-cyan-400 animate-pulse"}),s.jsx("div",{className:"w-1 h-4 bg-cyan-400 animate-pulse delay-75"}),s.jsx("div",{className:"w-1 h-2 bg-cyan-400 animate-pulse delay-150"}),s.jsx("span",{className:"text-[10px] font-mono font-bold text-cyan-300 ml-1 uppercase",children:"Playing"})]})]}),s.jsxs("div",{className:"p-4 sm:p-5 flex-1 flex flex-col justify-between",children:[s.jsxs("div",{children:[s.jsx("div",{className:"flex items-start justify-between gap-2",children:s.jsx("h3",{onClick:()=>d(u),className:"font-bold text-sm sm:text-base leading-snug hover:text-cyan-400 cursor-pointer line-clamp-2 transition-colors",children:u.title})}),s.jsxs("p",{className:"text-xs text-cyan-400/90 font-mono mt-1 flex items-center gap-1.5",children:[s.jsxs("span",{children:["@",u.handle]}),s.jsx("span",{className:"opacity-40",children:"•"}),s.jsx("span",{className:"opacity-75",children:"Suno v4.5"})]}),g&&s.jsxs("div",{onClick:()=>H(u),className:`mt-3 p-2.5 rounded-lg text-xs italic line-clamp-2 border transition-colors cursor-pointer ${C?"bg-white/5 border-white/5 text-white/70 hover:border-cyan-400/30 hover:text-white":"bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-cyan-500/40"}`,children:['"',g,'..."']}),u.tags&&u.tags.length>0&&s.jsx("div",{className:"flex flex-wrap gap-1 mt-3",children:u.tags.slice(0,3).map((V,Y)=>s.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-md font-mono border ${C?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-200 text-neutral-600"}`,children:V},Y))})]}),s.jsxs("div",{className:"pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2",children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsxs("button",{onClick:()=>H(u),className:`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 border transition-colors ${C?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"View full lyrics",children:[s.jsx(ya,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{children:"Lyrics"})]}),s.jsx("button",{onClick:()=>U(u),className:`p-1.5 rounded-md text-xs font-semibold border transition-colors ${C?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Open Suno player / video",children:s.jsx(Wl,{className:"w-3.5 h-3.5 text-cyan-400"})}),s.jsx("button",{onClick:()=>x(u),className:`p-1.5 rounded-md text-xs border transition-colors ${C?"bg-white/5 border-white/10 text-white/70 hover:text-white":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Share track",children:s.jsx(bt,{className:"w-3.5 h-3.5"})})]}),s.jsxs("a",{href:u.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:"text-[11px] font-mono text-cyan-400 hover:underline flex items-center gap-1",title:"View on Suno.com",children:[s.jsx("span",{children:"Suno"}),s.jsx(Tt,{className:"w-3 h-3"})]})]})]})]})},Py=({track:u,onClose:j,isDarkMode:S,onPlayTrack:d,isPlaying:H,isCurrentTrack:U})=>{const[x,C]=R.useState(!1);if(!u)return null;const w=()=>{navigator.clipboard.writeText(u.lyrics||""),C(!0),setTimeout(()=>C(!1),2e3)},g=V=>{if(!V||V.trim()==="")return s.jsx("div",{className:"py-12 text-center text-sm opacity-60",children:"Instrumental or no written lyrics provided for this track."});const Y=V.split(`
`);return s.jsx("div",{className:"space-y-2 font-mono text-xs sm:text-sm leading-relaxed",children:Y.map((X,K)=>{const ee=X.trim(),ae=ee.startsWith("**[")||ee.startsWith("[")||ee.endsWith("]**")||ee.endsWith("]"),Ne=ee.startsWith("*")&&ee.endsWith("*");return ae?s.jsx("div",{className:"pt-3 pb-1 text-cyan-400 font-bold tracking-wider uppercase text-[11px] sm:text-xs",children:ee.replace(/\*\*/g,"")},K):ee?s.jsx("div",{className:`${Ne?"italic opacity-80":S?"text-white/90":"text-neutral-800"}`,children:ee.replace(/\*\*/g,"").replace(/\*/g,"")},K):s.jsx("div",{className:"h-2"},K)})})};return s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity",onClick:j,children:s.jsxs("div",{className:`relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl border overflow-hidden ${S?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:V=>V.stopPropagation(),children:[s.jsxs("div",{className:`p-4 sm:p-5 border-b flex items-center justify-between gap-4 ${S?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[s.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[s.jsx("img",{src:u.image,alt:u.title,className:"w-12 h-12 rounded-lg object-cover shadow border border-white/10"}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("h3",{className:"font-bold text-base sm:text-lg truncate tracking-tight",children:u.title}),s.jsxs("p",{className:"text-xs text-cyan-400 font-medium truncate",children:[u.artist," • ",u.durationFormatted]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("button",{onClick:w,className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${S?"bg-white/5 border-white/10 hover:bg-white/10 text-white/80":"bg-white border-neutral-300 hover:bg-neutral-100 text-neutral-700"}`,title:"Copy Lyrics",children:[x?s.jsx(Pn,{className:"w-3.5 h-3.5 text-emerald-400"}):s.jsx(ei,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:x?"Copied":"Copy"})]}),s.jsxs("a",{href:u.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${S?"bg-white/5 border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 text-white/80":"bg-white border-neutral-300 hover:text-cyan-600 text-neutral-700"}`,title:"Open on Suno.com",children:[s.jsx("span",{className:"hidden sm:inline",children:"Suno"}),s.jsx(Tt,{className:"w-3.5 h-3.5"})]}),s.jsx("button",{onClick:j,className:`p-2 rounded-lg transition-colors ${S?"hover:bg-white/10 text-white/70":"hover:bg-neutral-200 text-neutral-600"}`,"aria-label":"Close",children:s.jsx(Ga,{className:"w-5 h-5"})})]})]}),u.tags&&u.tags.length>0&&s.jsxs("div",{className:`px-5 py-2.5 border-b flex flex-wrap gap-1.5 text-[11px] ${S?"border-white/5 bg-black/40":"border-neutral-100 bg-neutral-100/50"}`,children:[s.jsx("span",{className:"opacity-50 uppercase tracking-wider text-[10px] self-center mr-1 font-mono",children:"Styles:"}),u.tags.map((V,Y)=>s.jsx("span",{className:`px-2 py-0.5 rounded-full border ${S?"bg-white/5 border-white/10 text-white/80":"bg-white border-neutral-200 text-neutral-700"}`,children:V},Y))]}),s.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 custom-scrollbar",children:g(u.lyrics)}),s.jsxs("div",{className:`p-4 border-t flex items-center justify-between gap-3 text-xs ${S?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[s.jsxs("div",{className:"flex items-center gap-2 text-white/50 text-[11px]",children:[s.jsx(Ia,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{children:"AI-generated vocals and production via Suno v4.5"})]}),d&&s.jsxs("button",{onClick:()=>d(u),className:"px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20",children:[s.jsx(Gu,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:U&&H?"Pause Audio":"Play Audio"})]})]})]})})},eb=({track:u,onClose:j,isDarkMode:S})=>{const[d,H]=R.useState("embed");return u?s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all",onClick:j,children:s.jsxs("div",{className:`relative w-full max-w-3xl flex flex-col rounded-2xl shadow-2xl border overflow-hidden ${S?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:U=>U.stopPropagation(),children:[s.jsxs("div",{className:`p-4 border-b flex items-center justify-between gap-3 ${S?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[s.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[s.jsx("div",{className:"w-9 h-9 rounded-lg overflow-hidden border border-white/10 flex-shrink-0",children:s.jsx("img",{src:u.image,alt:u.title,className:"w-full h-full object-cover"})}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("h3",{className:"font-bold text-sm sm:text-base truncate tracking-tight",children:u.title}),s.jsx("p",{className:"text-[11px] text-cyan-400 font-mono truncate",children:u.artist})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("div",{className:`flex items-center p-1 rounded-lg border text-xs font-semibold ${S?"bg-black/50 border-white/10":"bg-neutral-100 border-neutral-300"}`,children:[s.jsxs("button",{onClick:()=>H("embed"),className:`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${d==="embed"?"bg-cyan-500 text-black font-bold shadow-sm":S?"text-white/70 hover:text-white":"text-neutral-600 hover:text-black"}`,children:[s.jsx(Ah,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Suno Embed"})]}),s.jsxs("button",{onClick:()=>H("video"),className:`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${d==="video"?"bg-cyan-500 text-black font-bold shadow-sm":S?"text-white/70 hover:text-white":"text-neutral-600 hover:text-black"}`,children:[s.jsx(Ry,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Video MP4"})]})]}),s.jsx("a",{href:u.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${S?"bg-white/5 border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 text-white/80":"bg-white border-neutral-300 hover:text-cyan-600 text-neutral-700"}`,title:"Open song on Suno",children:s.jsx(Tt,{className:"w-3.5 h-3.5"})}),s.jsx("button",{onClick:j,className:`p-2 rounded-lg transition-colors ${S?"hover:bg-white/10 text-white/70":"hover:bg-neutral-200 text-neutral-600"}`,"aria-label":"Close",children:s.jsx(Ga,{className:"w-5 h-5"})})]})]}),s.jsx("div",{className:"relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden",children:d==="embed"?s.jsx("iframe",{src:encodeURI(u.embedUrl||""),title:`Suno Embed - ${u.title}`,className:"w-full h-full border-0",allow:"autoplay",loading:"lazy"}):s.jsx("video",{src:encodeURI(u.videoUrl||""),controls:!0,autoPlay:!0,muted:!0,className:"w-full h-full object-contain",poster:u.image})}),s.jsxs("div",{className:`p-3.5 border-t flex items-center justify-between text-xs ${S?"border-white/10 bg-white/5 text-white/60":"border-neutral-200 bg-neutral-50 text-neutral-600"}`,children:[s.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[s.jsx(Ia,{className:"w-3 h-3 text-cyan-400"}),s.jsx("span",{children:"Interactive player hosted by Suno.ai"})]}),s.jsxs("a",{href:"https://suno.com/playlist/26af3597-73d4-491c-a9b3-aac9a0d55c82",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-400 underline underline-offset-2 flex items-center gap-1 font-mono text-[11px]",children:[s.jsx("span",{children:"DomInNATEly Top Hits Playlist"}),s.jsx(Tt,{className:"w-3 h-3"})]})]})]})}):null},tb=({track:u,isOpen:j,onClose:S,isDarkMode:d})=>{const[H,U]=R.useState(!1),[x,C]=R.useState(!1);if(!j)return null;const w=u?u.sunoUrl:nt.url,g=u?u.title:nt.name,V=u?u.artist:`Curated playlist by ${nt.user_display_name}`,Y=async()=>{try{await navigator.clipboard.writeText(w),U(!0),setTimeout(()=>U(!1),2e3)}catch{}},X=async()=>{try{await navigator.clipboard.writeText(nt.url),C(!0),setTimeout(()=>C(!1),2e3)}catch{}},K=async()=>{if(navigator.share)try{await navigator.share({title:`${g} - DomInNATEly`,text:`Listen to "${g}" on Suno!`,url:w})}catch{}};return s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity",onClick:S,children:s.jsxs("div",{className:`relative w-full max-w-md rounded-2xl p-6 shadow-2xl border ${d?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:ee=>ee.stopPropagation(),children:[s.jsxs("div",{className:"flex items-start justify-between mb-4",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",children:s.jsx(bt,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-base",children:u?"Share Track":"Share Playlist"}),s.jsx("p",{className:"text-xs opacity-60",children:"Spread the sound of DomInNATEly"})]})]}),s.jsx("button",{onClick:S,className:"p-1 rounded-lg hover:bg-white/10 transition-colors opacity-70 hover:opacity-100",children:s.jsx(Ga,{className:"w-5 h-5"})})]}),s.jsxs("div",{className:`p-3 rounded-xl border flex items-center gap-3 mb-5 ${d?"bg-white/5 border-white/10":"bg-neutral-50 border-neutral-200"}`,children:[s.jsx("img",{src:u?u.image:nt.cover,alt:g,className:"w-12 h-12 rounded-lg object-cover border border-white/10"}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsx("h4",{className:"font-bold text-sm truncate",children:g}),s.jsx("p",{className:"text-xs text-cyan-400 truncate",children:V})]})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-[11px] font-mono uppercase tracking-wider opacity-60 block mb-1.5",children:u?"Track Suno Link":"Playlist Suno Link"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("input",{type:"text",readOnly:!0,value:w,className:`flex-1 px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${d?"bg-neutral-900 border-white/10 text-white/90":"bg-neutral-100 border-neutral-300 text-neutral-800"}`}),s.jsxs("button",{onClick:Y,className:"px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20",children:[H?s.jsx(Pn,{className:"w-4 h-4 text-black"}):s.jsx(ei,{className:"w-4 h-4"}),s.jsx("span",{children:H?"Copied":"Copy"})]})]})]}),u&&s.jsxs("div",{children:[s.jsx("label",{className:"text-[11px] font-mono uppercase tracking-wider opacity-60 block mb-1.5",children:"DomInNATEly Top Hits Playlist Link"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("input",{type:"text",readOnly:!0,value:nt.url,className:`flex-1 px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${d?"bg-neutral-900 border-white/10 text-white/90":"bg-neutral-100 border-neutral-300 text-neutral-800"}`}),s.jsxs("button",{onClick:X,className:`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${d?"bg-white/5 border-white/10 text-white hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[x?s.jsx(Pn,{className:"w-4 h-4 text-emerald-400"}):s.jsx(ei,{className:"w-4 h-4"}),s.jsx("span",{children:x?"Copied":"Copy"})]})]})]})]}),typeof navigator<"u"&&"share"in navigator&&s.jsxs("button",{onClick:K,className:"w-full mt-4 py-2.5 rounded-xl border border-white/15 hover:border-cyan-400/50 flex items-center justify-center gap-2 text-xs font-bold transition-all",children:[s.jsx(bt,{className:"w-4 h-4 text-cyan-400"}),s.jsx("span",{children:"Open System Share Menu"})]}),s.jsxs("div",{className:"mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs",children:[s.jsxs("a",{href:nt.url,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-[11px]",children:[s.jsx("span",{children:"Open Playlist on Suno"}),s.jsx(Tt,{className:"w-3 h-3"})]}),s.jsx("button",{onClick:S,className:"opacity-60 hover:opacity-100 text-xs",children:"Close"})]})]})})},ab=({isDarkMode:u,currentTrack:j,isPlaying:S,onPlayTrack:d,onTogglePlayPause:H,onTrackChange:U,onSwitchToYouTube:x})=>{const[C,w]=R.useState(""),[g,V]=R.useState("all"),[Y,X]=R.useState("index"),[K,ee]=R.useState("grid"),[ae,Ne]=R.useState(null),[Be,Ke]=R.useState(null),[ue,je]=R.useState(null),He=R.useMemo(()=>[{id:"all",label:"All Tracks"},{id:"rock",label:"Rock & Alt Pop"},{id:"hip-hop",label:"Rap & Hip-Hop"},{id:"trap",label:"Trap & Dubstep"},{id:"duet",label:"Duets"},{id:"ballad",label:"Ballads"}],[]),pe=R.useMemo(()=>{let L=[...ge];if(C.trim()!==""){const ie=C.toLowerCase().trim();L=L.filter($=>$.title.toLowerCase().includes(ie)||$.artist.toLowerCase().includes(ie)||$.tags.some(Ee=>Ee.toLowerCase().includes(ie))||$.lyrics.toLowerCase().includes(ie))}return g!=="all"&&(L=L.filter(ie=>{const $=(ie.tags.join(" ")+" "+ie.title+" "+ie.lyrics).toLowerCase();return g==="rock"?$.includes("rock")||$.includes("pop")||$.includes("punk"):g==="hip-hop"?$.includes("rap")||$.includes("hip-hop")||$.includes("hip hop"):g==="trap"?$.includes("trap")||$.includes("dubstep")||$.includes("halftime"):g==="duet"?$.includes("duet")||$.includes("female vocals"):g==="ballad"?$.includes("ballad")||$.includes("acoustic")||$.includes("piano"):!0})),L.sort((ie,$)=>Y==="title"?ie.title.localeCompare($.title):Y==="duration-desc"?$.duration-ie.duration:Y==="duration-asc"?ie.duration-$.duration:ie.index-$.index),L},[C,g,Y]),te=()=>{pe.length>0&&d(pe[0])},Re=()=>{if(pe.length>0){const L=Math.floor(Math.random()*pe.length);d(pe[L])}};return s.jsxs("div",{className:"w-full flex flex-col",children:[s.jsxs("section",{id:"suno-hero-banner",className:`relative overflow-hidden rounded-3xl border mb-8 p-6 sm:p-8 md:p-10 transition-colors ${u?"bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 border-white/10 shadow-2xl":"bg-gradient-to-br from-cyan-50/80 via-white to-neutral-100 border-neutral-200 shadow-lg"}`,children:[s.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"}),s.jsx("div",{className:"absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"}),s.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8",children:[s.jsxs("div",{className:"relative flex-shrink-0 group",children:[s.jsx("div",{className:"w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-neutral-900",children:s.jsx("img",{src:nt.cover,alt:nt.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),s.jsxs("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-black font-mono font-bold text-[10px] tracking-wider uppercase shadow-lg shadow-cyan-500/30 flex items-center gap-1.5 whitespace-nowrap",children:[s.jsx(Th,{className:"w-3 h-3 fill-current"}),s.jsx("span",{children:"Suno Top Hits"})]})]}),s.jsxs("div",{className:"flex-1 text-center md:text-left flex flex-col justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3",children:[s.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-cyan-400/15 text-cyan-400 border border-cyan-400/30 flex items-center gap-1.5",children:[s.jsx(Ia,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Suno Playlist"})]}),s.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${u?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:"20 Curated Tracks"}),s.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${u?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:"1 hr 26 min"})]}),s.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight",children:nt.name}),s.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium",children:[s.jsx("span",{className:"text-cyan-400 font-bold",children:nt.user_display_name}),s.jsx("span",{className:"opacity-40",children:"•"}),s.jsxs("span",{className:"font-mono text-xs opacity-75",children:["@",nt.user_handle]}),s.jsx("span",{className:"opacity-40",children:"•"}),s.jsxs("a",{href:`https://www.tiktok.com/${nt.tiktok_handle}`,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[s.jsxs("span",{children:["TikTok: ",nt.tiktok_handle]}),s.jsx(Tt,{className:"w-3 h-3"})]})]}),s.jsxs("p",{className:`mt-3 text-sm max-w-2xl leading-relaxed ${u?"text-white/70":"text-neutral-600"}`,children:[nt.description,". Stream the official Suno AI audio collection featuring high-fidelity guitars, dual vocal anthems, hard-hitting trap beats, and psychological lyricism."]})]}),s.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3",children:[s.jsxs("button",{id:"suno-play-all-btn",onClick:te,className:"px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-400/25 transition-transform active:scale-95",children:[s.jsx(Ht,{className:"w-4 h-4 fill-current"}),s.jsx("span",{children:"Play All"})]}),s.jsxs("button",{id:"suno-shuffle-all-btn",onClick:Re,className:`px-4 py-2.5 rounded-full border text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${u?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[s.jsx(vs,{className:"w-4 h-4 text-cyan-400"}),s.jsx("span",{children:"Shuffle"})]}),s.jsxs("a",{id:"suno-open-official-btn",href:nt.url,target:"_blank",rel:"noopener noreferrer",className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${u?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[s.jsx("span",{children:"Open on Suno"}),s.jsx(Tt,{className:"w-3.5 h-3.5 opacity-70"})]}),x&&s.jsxs("button",{id:"switch-to-youtube-hero-btn",onClick:x,className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${u?"bg-white/5 border-white/10 text-red-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-red-700 hover:bg-neutral-200"}`,children:[s.jsx(Fl,{className:"w-4 h-4 text-red-500"}),s.jsxs("span",{children:["Switch to YouTube Gallery (",yt.length,")"]})]}),s.jsx("button",{onClick:()=>je(null),className:`p-2.5 rounded-full border transition-all ${u?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,title:"Share Playlist",children:s.jsx(bt,{className:"w-4 h-4"})})]})]})]})]}),s.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6",children:[s.jsxs("div",{className:"relative flex-1 max-w-md",children:[s.jsx(zh,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50"}),s.jsx("input",{id:"suno-search-input",type:"text",placeholder:"Search Suno tracks, lyrics, styles...",value:C,onChange:L=>w(L.target.value),className:`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none transition-colors ${u?"bg-neutral-900 border-white/10 text-white placeholder-white/40 focus:border-cyan-400/60":"bg-white border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-cyan-500"}`})]}),s.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-3",children:[s.jsxs("select",{id:"suno-sort-select",value:Y,onChange:L=>X(L.target.value),className:`px-3 py-2 rounded-xl text-xs font-semibold border focus:outline-none cursor-pointer ${u?"bg-neutral-900 border-white/10 text-white":"bg-white border-neutral-300 text-neutral-800"}`,children:[s.jsx("option",{value:"index",children:"Tracklist Order (#1 - #20)"}),s.jsx("option",{value:"title",children:"Title (A to Z)"}),s.jsx("option",{value:"duration-desc",children:"Duration (Longest first)"}),s.jsx("option",{value:"duration-asc",children:"Duration (Shortest first)"})]}),s.jsxs("div",{className:`flex items-center p-1 rounded-xl border ${u?"border-white/10 bg-white/5":"border-neutral-300 bg-neutral-100"}`,children:[s.jsxs("button",{id:"suno-view-grid",onClick:()=>ee("grid"),className:`p-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${K==="grid"?"bg-cyan-500 text-black shadow-sm":u?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"Grid View",children:[s.jsx(Eh,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Grid"})]}),s.jsxs("button",{id:"suno-view-list",onClick:()=>ee("list"),className:`p-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${K==="list"?"bg-cyan-500 text-black shadow-sm":u?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"List View",children:[s.jsx(kh,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"List"})]})]})]})]}),s.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-3 mb-6 custom-scrollbar",children:[He.map(L=>s.jsx("button",{id:`suno-filter-tag-${L.id}`,onClick:()=>V(L.id),className:`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${g===L.id?"bg-cyan-500 text-black border-cyan-400 font-bold shadow-md shadow-cyan-500/20":u?"bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white":"bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100"}`,children:L.label},L.id)),s.jsxs("span",{className:"text-[11px] font-mono opacity-50 ml-auto whitespace-nowrap",children:["Showing ",pe.length," of ",ge.length," tracks"]})]}),pe.length>0?K==="grid"?s.jsx("div",{id:"suno-tracks-grid",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:pe.map(L=>s.jsx(Wy,{track:L,isPlaying:S,isCurrentTrack:(j==null?void 0:j.id)===L.id,onPlay:ie=>d(ie),onOpenLyrics:ie=>Ne(ie),onOpenEmbed:ie=>Ke(ie),onOpenShare:ie=>je(ie),isDarkMode:u},`${L.id}-${L.index}`))}):s.jsxs("div",{id:"suno-tracks-list",className:"flex flex-col gap-2.5",children:[s.jsxs("div",{className:`grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 ${u?"text-white/40":"text-neutral-500"}`,children:[s.jsx("div",{className:"col-span-1 text-center",children:"#"}),s.jsx("div",{className:"col-span-6 sm:col-span-5",children:"Track Info"}),s.jsx("div",{className:"hidden sm:block sm:col-span-3",children:"Style / Genre"}),s.jsx("div",{className:"col-span-3 sm:col-span-2 text-right sm:text-left",children:"Duration"}),s.jsx("div",{className:"col-span-2 sm:col-span-1 text-right",children:"Actions"})]}),pe.map(L=>{const ie=(j==null?void 0:j.id)===L.id;return s.jsxs("div",{id:`suno-list-item-${L.id}`,className:`group p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${ie?u?"bg-cyan-950/40 border-cyan-500/40 text-cyan-300":"bg-cyan-50 border-cyan-300 text-cyan-900":u?"bg-neutral-900/50 border-white/5 hover:border-white/15 hover:bg-neutral-900":"bg-white border-neutral-200 hover:border-neutral-300 shadow-sm"}`,children:[s.jsxs("div",{onClick:()=>d(L),className:"grid grid-cols-12 items-center flex-1 min-w-0",children:[s.jsx("div",{className:"col-span-1 flex items-center justify-center font-mono text-xs opacity-60",children:ie&&S?s.jsx("div",{className:"w-3 h-3 rounded-full bg-cyan-400 animate-ping"}):s.jsx("span",{children:L.index})}),s.jsxs("div",{className:"col-span-6 sm:col-span-5 flex items-center gap-3 min-w-0 pr-3",children:[s.jsxs("div",{className:"relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900",children:[s.jsx("img",{src:L.image,alt:L.title,className:"w-full h-full object-cover"}),s.jsx("div",{className:"absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:s.jsx(Ht,{className:"w-3.5 h-3.5 fill-white text-white"})})]}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("h4",{className:"font-bold text-xs sm:text-sm truncate",children:L.title}),s.jsxs("p",{className:"text-[11px] opacity-60 truncate",children:["@",L.handle]})]})]}),s.jsx("div",{className:"hidden sm:flex sm:col-span-3 items-center gap-1 pr-3 overflow-hidden",children:L.tags&&L.tags.length>0?L.tags.slice(0,2).map(($,Ee)=>s.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded font-mono truncate border border-white/10 opacity-70",children:$},Ee)):s.jsx("span",{className:"text-[10px] opacity-40 italic",children:"Suno v4.5"})}),s.jsx("div",{className:"col-span-3 sm:col-span-2 text-right sm:text-left font-mono text-xs opacity-75",children:L.durationFormatted})]}),s.jsxs("div",{className:"flex items-center gap-1.5 ml-2",children:[s.jsx("button",{onClick:$=>{$.stopPropagation(),Ne(L)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Lyrics",children:s.jsx(ya,{className:"w-3.5 h-3.5"})}),s.jsx("button",{onClick:$=>{$.stopPropagation(),Ke(L)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Watch Video",children:s.jsx(Wl,{className:"w-3.5 h-3.5"})}),s.jsx("button",{onClick:$=>{$.stopPropagation(),je(L)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Share",children:s.jsx(bt,{className:"w-3.5 h-3.5"})})]})]},`${L.id}-${L.index}`)})]}):s.jsxs("div",{className:"py-20 text-center rounded-2xl border border-dashed border-white/15 my-6",children:[s.jsx(qu,{className:"w-10 h-10 mx-auto text-cyan-400/50 mb-3"}),s.jsxs("p",{className:"font-bold text-base",children:['No tracks found matching "',C,'"']}),s.jsx("p",{className:"text-xs opacity-60 mt-1",children:'Try clearing your search query or selecting "All Tracks"'}),s.jsx("button",{onClick:()=>{w(""),V("all")},className:"mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold",children:"Reset Filters"})]}),s.jsx(Py,{track:ae,onClose:()=>Ne(null),isDarkMode:u,onPlayTrack:L=>d(L),isPlaying:S,isCurrentTrack:(j==null?void 0:j.id)===(ae==null?void 0:ae.id)}),s.jsx(eb,{track:Be,onClose:()=>Ke(null),isDarkMode:u}),s.jsx(tb,{track:ue,isOpen:!!(ue||ue===null&&!1),onClose:()=>je(null),isDarkMode:u})]})},lb=({track:u,isPlaying:j,onPlay:S,onPause:d,onEnded:H,isDarkMode:U,volume:x=80,isMuted:C=!1})=>{const w=!!("isSuno"in u?u.isSuno:u.audioUrl||u.videoUrl),g=R.useRef(null),V=R.useRef(null);R.useEffect(()=>{w&&g.current&&(j?g.current.play().catch(K=>{console.warn("Suno video autoplay notice:",K)}):g.current.pause())},[j,w,u.id]),R.useEffect(()=>{w&&g.current&&(g.current.volume=C?0:x/100,g.current.muted=C)},[x,C,w]),R.useEffect(()=>{if(!w&&V.current&&V.current.contentWindow&&j)try{C?V.current.contentWindow.postMessage('{"event":"command","func":"mute","args":""}',"*"):(V.current.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}',"*"),V.current.contentWindow.postMessage(JSON.stringify({event:"command",func:"setVolume",args:[x]}),"*"))}catch{}},[x,C,w,j]);const Y="thumbnail"in u?u.thumbnail:u.image,X="videoUrl"in u&&u.videoUrl?u.videoUrl:"audioUrl"in u&&u.audioUrl?u.audioUrl:`https://cdn1.suno.ai/${u.id}.mp4`;return s.jsx("div",{className:"relative w-full aspect-video rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl group",children:w?s.jsxs("div",{className:"relative w-full h-full bg-black flex items-center justify-center",children:[s.jsx("video",{ref:g,src:X,poster:Y,controls:!0,autoPlay:j,playsInline:!0,preload:"auto",className:"w-full h-full object-contain bg-black",onPlay:()=>{j||S(u)},onPause:()=>{j&&d()},onEnded:()=>{H&&H()},onError:K=>{console.warn("Suno video playback error:",K)}},`suno-video-${u.id}`),s.jsxs("div",{className:"absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300 font-bold pointer-events-none flex items-center gap-1",children:[s.jsx(Ia,{className:"w-3 h-3 text-cyan-400"}),s.jsx("span",{children:"Suno Video"})]})]}):s.jsxs("div",{className:"relative w-full h-full bg-black",children:[j?s.jsx("div",{className:"w-full h-full relative",children:s.jsx("iframe",{ref:V,src:`https://www.youtube-nocookie.com/embed/${u.id}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&playsinline=1`,title:`Music Video - ${u.title}`,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},`yt-iframe-${u.id}`)}):s.jsxs("div",{className:"relative w-full h-full",children:[s.jsx("img",{src:Y,alt:u.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",referrerPolicy:"no-referrer"}),s.jsxs("div",{className:"absolute inset-0 bg-black/45 backdrop-blur-[1px] flex flex-col items-center justify-center p-4",children:[s.jsx("button",{id:"showcase-play-video-btn",onClick:()=>S(u),className:"w-16 h-16 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all ring-4 ring-cyan-400/40 mb-2","aria-label":"Play music video",title:"Play video",children:s.jsx(Ht,{className:"w-7 h-7 fill-current translate-x-0.5"})}),s.jsxs("div",{className:"flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-[11px] font-mono font-bold text-white tracking-wider",children:[s.jsx(Wl,{className:"w-3 h-3 text-cyan-400"}),s.jsx("span",{children:"WATCH MUSIC VIDEO"})]})]})]}),s.jsxs("div",{className:"absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300 font-bold pointer-events-none flex items-center gap-1 z-10",children:[s.jsx(Wl,{className:"w-3 h-3 text-cyan-400"}),s.jsx("span",{children:"HD Music Video"})]})]})})};function nb(){const[u,j]=R.useState(()=>{var f;if(typeof window<"u")try{const k=(f=window.localStorage)==null?void 0:f.getItem("dominnately_theme");if(k)return k==="dark"}catch{return!0}return!0}),[S,d]=R.useState("youtube"),[H,U]=R.useState(()=>typeof window<"u"?window.innerWidth>=1280:!1);R.useEffect(()=>{const f=()=>{U(window.innerWidth>=1280)};return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const[x,C]=R.useState(yt[0]||null),[w,g]=R.useState(!1),[V,Y]=R.useState("video"),[X,K]=R.useState(ge[0]||null),[ee,ae]=R.useState(!1),[Ne,Be]=R.useState(""),[Ke,ue]=R.useState("playlist"),[je,He]=R.useState("all"),[pe,te]=R.useState("grid"),[Re,L]=R.useState(null),[ie,$]=R.useState(null),[Ee,qe]=R.useState(null);R.useEffect(()=>{var f;try{(f=window.localStorage)==null||f.setItem("dominnately_theme",u?"dark":"light")}catch{}u?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[u]);const Je=R.useMemo(()=>ge.map(eh),[]),Ce=f=>{(x==null?void 0:x.id)===f.id?g(!w):(C(f),g(!0))},T=f=>{K(f);const k=eh(f);(x==null?void 0:x.id)===k.id?(g(!w),ae(!w)):(C(k),g(!0),ae(!0))},D=R.useMemo(()=>x!=null&&x.isSuno&&ge.find(f=>f.id===x.id)||X,[x,X]),A=R.useMemo(()=>{let f=[...yt];if(Ne.trim()!==""){const k=Ne.toLowerCase().trim();f=f.filter(_=>_.title.toLowerCase().includes(k)||_.artist.toLowerCase().includes(k)||_.featuredLyrics&&_.featuredLyrics.toLowerCase().includes(k)||_.tags.some(J=>J.toLowerCase().includes(k))||_.description&&_.description.toLowerCase().includes(k))}return je!=="all"&&(f=f.filter(k=>k.category===je)),f.sort((k,_)=>{switch(Ke){case"playlist":return k.index-_.index;case"newest":return _.index-k.index;case"duration-desc":return _.durationSeconds-k.durationSeconds;case"duration-asc":return k.durationSeconds-_.durationSeconds;case"title-asc":return k.title.localeCompare(_.title);case"title-desc":return _.title.localeCompare(k.title);default:return k.index-_.index}}),f},[Ne,je,Ke]),q=R.useMemo(()=>S==="suno"||x!=null&&x.isSuno?Je:A.length>0?A:yt,[S,x==null?void 0:x.isSuno,Je,A]),Q=()=>{A.length>0&&(C(A[0]),g(!0))},h=()=>{if(A.length>0){const f=Math.floor(Math.random()*A.length);C(A[f]),g(!0)}};return s.jsxs("div",{className:`min-h-screen font-outfit transition-colors duration-200 flex flex-col ${u?"bg-[#050505] text-white":"bg-neutral-50 text-neutral-900"}`,children:[s.jsx(Xy,{isDarkMode:u,onToggleDarkMode:()=>j(!u),trackCount:S==="suno"?ge.length:yt.length,onQuickShareAll:()=>L(x||yt[0])}),s.jsxs("main",{className:"flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-36",children:[s.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-6",children:[s.jsxs("button",{id:"tab-youtube-gallery",onClick:()=>{d("youtube")},className:`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all border shadow-sm ${S==="youtube"?"bg-cyan-500 text-black border-cyan-400 shadow-cyan-500/25 ring-2 ring-cyan-400/40":u?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[s.jsx(Fl,{className:"w-4 h-4"}),s.jsxs("span",{children:["YouTube Audio Gallery (",yt.length," Tracks)"]})]}),s.jsxs("button",{id:"tab-suno-playlist",onClick:()=>{d("suno")},className:`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all border shadow-sm ${S==="suno"?"bg-cyan-500 text-black border-cyan-400 shadow-cyan-500/25 ring-2 ring-cyan-400/40":u?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[s.jsx(Ia,{className:"w-4 h-4 text-cyan-400"}),s.jsxs("span",{children:["Suno AI Playlist (",ge.length," Tracks)"]})]})]}),s.jsxs("div",{className:"xl:grid xl:grid-cols-12 xl:gap-8 items-start",children:[s.jsx("div",{className:"xl:col-span-7",children:S==="suno"?s.jsx(ab,{isDarkMode:u,currentTrack:D,isPlaying:w&&!!(x!=null&&x.isSuno),onPlayTrack:T,onTogglePlayPause:()=>{g(!w),ae(!w)},onTrackChange:T,onSwitchToYouTube:()=>d("youtube")}):s.jsxs(s.Fragment,{children:[s.jsxs("section",{id:"youtube-hero-banner",className:`relative overflow-hidden rounded-3xl border mb-8 p-6 sm:p-8 md:p-10 transition-colors ${u?"bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 border-white/10 shadow-2xl":"bg-gradient-to-br from-red-50/70 via-white to-neutral-100 border-neutral-200 shadow-lg"}`,children:[s.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none"}),s.jsx("div",{className:"absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"}),s.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8",children:[s.jsxs("div",{className:"relative flex-shrink-0 group",children:[s.jsx("div",{className:"w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-neutral-900",children:s.jsx("img",{src:ma.cover,alt:ma.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),s.jsxs("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-red-600 text-white font-mono font-bold text-[10px] tracking-wider uppercase shadow-lg shadow-red-600/30 flex items-center gap-1.5 whitespace-nowrap",children:[s.jsx(Th,{className:"w-3 h-3 fill-current"}),s.jsx("span",{children:"YouTube Top Hits"})]})]}),s.jsxs("div",{className:"flex-1 text-center md:text-left flex flex-col justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3",children:[s.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-red-500/15 text-red-400 border border-red-500/30 flex items-center gap-1.5",children:[s.jsx(Fl,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Official YouTube Playlist"})]}),s.jsxs("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${u?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:[yt.length," Recorded Tracks"]}),s.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${u?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:ma.totalDurationFormatted})]}),s.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight",children:ma.name}),s.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium",children:[s.jsx("span",{className:"text-cyan-400 font-bold",children:ma.channel}),s.jsx("span",{className:"opacity-40",children:"•"}),s.jsxs("a",{href:ma.channelUrl,target:"_blank",rel:"noopener noreferrer",className:"text-red-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[s.jsx("span",{children:"Official Channel"}),s.jsx(Tt,{className:"w-3 h-3"})]}),s.jsx("span",{className:"opacity-40",children:"•"}),s.jsxs("a",{href:ma.playlistUrl,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[s.jsx("span",{children:"Open Playlist on YouTube"}),s.jsx(Tt,{className:"w-3 h-3"})]})]}),s.jsxs("p",{className:`mt-3 text-sm max-w-2xl leading-relaxed ${u?"text-white/70":"text-neutral-600"}`,children:[ma.description," Full-length studio recordings, explosive remixes, and introspective anthems."]})]}),s.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3",children:[s.jsxs("button",{id:"youtube-hero-play-all-btn",onClick:Q,className:"px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-400/25 transition-transform active:scale-95",children:[s.jsx(Ht,{className:"w-4 h-4 fill-current"}),s.jsxs("span",{children:["Play All (",yt.length,")"]})]}),s.jsxs("button",{id:"youtube-hero-shuffle-btn",onClick:h,className:`px-4 py-2.5 rounded-full border text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${u?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[s.jsx(vs,{className:"w-4 h-4 text-cyan-400"}),s.jsx("span",{children:"Shuffle"})]}),s.jsxs("a",{id:"youtube-open-official-btn",href:ma.playlistUrl,target:"_blank",rel:"noopener noreferrer",className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${u?"bg-white/5 border-white/10 text-white/80 hover:text-red-400 hover:border-red-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[s.jsx(Fl,{className:"w-4 h-4 text-red-500"}),s.jsx("span",{children:"Open YouTube Playlist"}),s.jsx(Tt,{className:"w-3.5 h-3.5 opacity-60"})]}),s.jsxs("button",{id:"switch-to-suno-hero-btn",onClick:()=>d("suno"),className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${u?"bg-white/5 border-white/10 text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-cyan-700 hover:bg-neutral-200"}`,children:[s.jsx(Ia,{className:"w-4 h-4"}),s.jsx("span",{children:"Switch to Suno Playlist (20)"})]})]})]})]})]}),s.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-5",children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsxs("button",{id:"play-all-tracks-btn",onClick:Q,className:"px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all active:scale-95",children:[s.jsx(Ht,{className:"w-3.5 h-3.5 fill-current"}),s.jsx("span",{children:"Play All"})]}),s.jsxs("button",{id:"shuffle-all-tracks-btn",onClick:h,className:`px-3.5 py-2 rounded-full border text-xs sm:text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${u?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[s.jsx(vs,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{children:"Shuffle"})]})]}),s.jsxs("div",{className:`flex items-center gap-1.5 p-1 rounded-full border ${u?"border-white/10 bg-white/5":"border-neutral-300 bg-neutral-100"}`,children:[s.jsxs("button",{id:"view-mode-grid",onClick:()=>te("grid"),className:`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${pe==="grid"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":u?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"Grid View","aria-label":"Grid View",children:[s.jsx(Eh,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Grid"})]}),s.jsxs("button",{id:"view-mode-list",onClick:()=>te("list"),className:`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${pe==="list"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":u?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"List View","aria-label":"List View",children:[s.jsx(kh,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"List"})]})]})]}),s.jsx(Zy,{searchQuery:Ne,onSearchChange:Be,sortField:Ke,onSortChange:ue,selectedCategory:je,onCategoryChange:He,totalResults:A.length,totalTracks:yt.length,isDarkMode:u}),A.length>0?pe==="grid"?s.jsx("div",{id:"tracks-grid-container",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:A.map(f=>s.jsx(Qy,{track:f,isPlaying:w,isCurrentTrack:(x==null?void 0:x.id)===f.id,onPlay:Ce,onOpenShare:k=>L(k),onOpenDetails:k=>$(k),onOpenLyrics:k=>qe(k),isDarkMode:u},`${f.id}-${f.index}`))}):s.jsxs("div",{id:"tracks-list-container",className:"flex flex-col gap-2.5",children:[s.jsxs("div",{className:`grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 ${u?"text-white/40":"text-neutral-500"}`,children:[s.jsx("div",{className:"col-span-7 sm:col-span-6",children:"Track Info"}),s.jsx("div",{className:"hidden sm:block sm:col-span-3",children:"Category"}),s.jsx("div",{className:"col-span-3 sm:col-span-2",children:"Duration"}),s.jsx("div",{className:"col-span-2 sm:col-span-1 text-right",children:"Share"})]}),A.map(f=>{const k=(x==null?void 0:x.id)===f.id;return s.jsx("div",{id:`track-list-item-${f.id}`,onClick:()=>Ce(f),className:`group p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${k?u?"bg-white/10 border-cyan-400/80 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-400/30":"bg-cyan-50/50 border-cyan-400 text-cyan-900 shadow-xs":u?"bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15 text-white":"bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-900 shadow-xs"}`,children:s.jsxs("div",{className:"grid grid-cols-12 w-full items-center gap-2",children:[s.jsxs("div",{className:"col-span-7 sm:col-span-6 flex items-center gap-3 min-w-0",children:[s.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-xs",children:f.index.toString().padStart(2,"0")}),s.jsx("img",{src:f.thumbnail,alt:f.title,className:"w-12 h-8 rounded-lg object-cover border border-white/10 shrink-0 hidden sm:block",referrerPolicy:"no-referrer"}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("h4",{className:`font-bold text-xs sm:text-sm truncate transition-colors ${k?"text-cyan-400":"group-hover:text-cyan-400"}`,children:f.title}),s.jsx("p",{className:`text-[11px] truncate ${u?"text-white/50":"text-neutral-500"}`,children:f.artist})]})]}),s.jsx("div",{className:"hidden sm:block sm:col-span-3",children:s.jsx("span",{className:`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${u?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-300 text-neutral-600"}`,children:f.category})}),s.jsx("div",{className:"col-span-3 sm:col-span-2",children:s.jsx("span",{className:"text-xs font-mono text-cyan-400 font-bold",children:f.duration})}),s.jsxs("div",{className:"col-span-2 sm:col-span-1 flex items-center justify-end gap-1",children:[s.jsx("button",{id:`list-lyrics-btn-${f.id}`,onClick:_=>{_.stopPropagation(),qe(f)},className:`p-1.5 rounded-md transition-colors ${u?"text-white/50 hover:text-cyan-400 hover:bg-white/10":"text-neutral-500 hover:text-black hover:bg-neutral-200"}`,title:"View Full Lyrics","aria-label":`View lyrics for ${f.title}`,children:s.jsx(ya,{className:"w-3.5 h-3.5"})}),s.jsx("button",{id:`list-share-btn-${f.id}`,onClick:_=>{_.stopPropagation(),L(f)},className:`p-1.5 rounded-md transition-colors ${u?"text-white/50 hover:text-cyan-400 hover:bg-white/10":"text-neutral-500 hover:text-black hover:bg-neutral-200"}`,title:"Share Track","aria-label":`Share ${f.title}`,children:s.jsx(bt,{className:"w-3.5 h-3.5"})})]})]})},`${f.id}-${f.index}`)})]}):s.jsxs("div",{id:"empty-tracks-state",className:`rounded-2xl border p-12 text-center my-6 backdrop-blur-md ${u?"bg-white/5 border-white/10":"bg-white border-neutral-200"}`,children:[s.jsx(qu,{className:"w-10 h-10 mx-auto mb-3 text-cyan-400 opacity-80"}),s.jsx("h3",{className:"text-base font-bold",children:"No tracks matched your search"}),s.jsx("p",{className:`text-xs mt-1 max-w-sm mx-auto ${u?"text-white/50":"text-neutral-600"}`,children:'Try clearing your search query or selecting "All Tracks" to view the complete catalog.'}),s.jsx("button",{onClick:()=>{Be(""),He("all"),ue("playlist")},className:"mt-4 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider transition-all",children:"Reset Filters"})]})]})}),(()=>{const f=x||(S==="suno"?Je[0]:yt[0]);return f?s.jsx("aside",{className:"hidden xl:block xl:col-span-5 sticky top-24",children:s.jsxs("div",{id:"immersive-now-playing-stage",className:`rounded-3xl border p-5 sm:p-6 flex flex-col items-center justify-center backdrop-blur-xl transition-all shadow-2xl relative overflow-hidden ${u?"bg-black/60 border-white/10 text-white":"bg-white/95 border-neutral-200 text-neutral-900"}`,children:[s.jsx("div",{className:"absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/15 blur-[60px] rounded-full pointer-events-none animate-pulse"}),s.jsx("div",{className:"absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600/15 blur-[60px] rounded-full pointer-events-none"}),s.jsxs("div",{className:"flex items-center justify-between w-full mb-3.5 z-20",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`w-2 h-2 rounded-full ${w?"bg-cyan-400 animate-ping":"bg-white/30"}`}),s.jsx("span",{className:"text-[11px] font-mono font-bold tracking-widest uppercase text-cyan-400",children:w?"Live Player Stage":"Now Playing"})]}),s.jsxs("div",{className:"flex items-center bg-black/50 p-1 rounded-xl border border-white/10 text-xs",children:[s.jsxs("button",{onClick:()=>Y("video"),className:`px-2.5 py-1 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-all ${V==="video"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/25":"text-white/60 hover:text-white"}`,title:"Watch Music Video",children:[s.jsx(Wl,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Video"})]}),s.jsxs("button",{onClick:()=>Y("lyrics"),className:`px-2.5 py-1 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-all ${V==="lyrics"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/25":"text-white/60 hover:text-white"}`,title:"View Full Lyrics",children:[s.jsx(ya,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Lyrics"})]}),s.jsxs("button",{onClick:()=>Y("artwork"),className:`px-2.5 py-1 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-all ${V==="artwork"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/25":"text-white/60 hover:text-white"}`,title:"View Album Art",children:[s.jsx(Fl,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Art"})]})]})]}),s.jsxs("div",{className:"relative w-full mb-4 z-10",children:[s.jsx("div",{className:V==="video"?"block":"hidden",children:s.jsx(lb,{track:f,isPlaying:w&&(x==null?void 0:x.id)===f.id,onPlay:k=>{(x==null?void 0:x.id)===k.id?g(!0):Ce(k)},onPause:()=>g(!1),onEnded:()=>{const k=q,_=k.findIndex(J=>J.id===f.id);_!==-1&&_<k.length-1?Ce(k[_+1]):k.length>0&&Ce(k[0])},isDarkMode:u})}),V==="lyrics"&&s.jsx("div",{className:"w-full p-4 rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-md shadow-xl",children:s.jsx(Qu,{lyrics:Iu(f),title:f.title,artist:f.artist,isDarkMode:u,maxHeight:"max-h-[300px]"})}),V==="artwork"&&s.jsxs("div",{className:"relative w-full aspect-square group",children:[s.jsx("div",{className:"absolute inset-0 bg-cyan-500/20 blur-[50px] rounded-full animate-pulse pointer-events-none"}),s.jsxs("div",{className:"relative z-10 w-full h-full bg-gradient-to-br from-neutral-800 to-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center",children:[s.jsx("img",{src:f.thumbnail,alt:f.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),s.jsx("div",{className:"absolute bottom-3 right-3 text-2xl font-black text-white/25 font-mono tracking-widest pointer-events-none drop-shadow-md",children:"D-LY"}),s.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:s.jsx("button",{onClick:()=>{(x==null?void 0:x.id)===f.id?g(!w):Ce(f)},className:"w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-xl hover:scale-105 transition-transform","aria-label":"Toggle playback",children:w&&(x==null?void 0:x.id)===f.id?s.jsx(cl,{className:"w-6 h-6 fill-current"}):s.jsx(Ht,{className:"w-6 h-6 fill-current translate-x-0.5"})})})]})]})]}),s.jsxs("div",{className:"text-center w-full z-10",children:[s.jsx("h2",{className:"text-xl font-black mb-1 tracking-tight truncate hover:text-cyan-400 transition-colors",title:f.title,children:f.title}),s.jsxs("p",{className:"text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3",children:[w&&(x==null?void 0:x.id)===f.id?"Now Playing":"Selected Track"," • #",f.index.toString().padStart(2,"0")]}),s.jsxs("div",{className:"flex gap-1 justify-center items-end h-7 mb-4",children:[s.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${w&&(x==null?void 0:x.id)===f.id?"h-[60%] animate-eq-1":"h-[25%]"}`}),s.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${w&&(x==null?void 0:x.id)===f.id?"h-[90%] animate-eq-2":"h-[40%]"}`}),s.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${w&&(x==null?void 0:x.id)===f.id?"h-[40%] animate-eq-3":"h-[20%]"}`}),s.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${w&&(x==null?void 0:x.id)===f.id?"h-[70%] animate-eq-4":"h-[35%]"}`}),s.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${w&&(x==null?void 0:x.id)===f.id?"h-[30%] animate-eq-2":"h-[15%]"}`})]}),s.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2",children:[s.jsxs("button",{onClick:()=>qe(f),className:"px-3.5 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all active:scale-95",title:"View Full Lyrics in Modal",children:[s.jsx(ya,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Full Lyrics"})]}),s.jsxs("button",{onClick:()=>L(f),className:"px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all",children:[s.jsx(bt,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Share"})]}),s.jsxs("button",{onClick:()=>$(f),className:"px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all",children:[s.jsx(qu,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{children:"Story"})]})]})]})]})}):null})()]}),s.jsxs("footer",{id:"music-gallery-footer",className:`mt-16 pt-8 border-t text-center text-xs ${u?"border-white/10 text-white/50":"border-neutral-200 text-neutral-500"}`,children:[s.jsx("p",{className:"font-bold text-sm mb-1 tracking-wider text-cyan-400 uppercase font-mono",children:"DomInNATEly"}),s.jsxs("p",{children:["Official Music Archive & Player • Based on the playlist"," ",s.jsx("a",{href:Nh,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline",children:"DomInNATEly's Music"})]}),s.jsx("p",{className:"mt-2 text-[11px] opacity-75",children:"All songs written & performed by DomInNATEly / Dom-I-NATE. Audio powered by YouTube Media Integration."})]})]}),s.jsx(Ky,{currentTrack:x,playlist:q,allPlaylists:{youtube:A.length>0?A:yt,suno:Je},onSwitchPlaylist:f=>{d(f),f==="suno"&&ge.length>0?T(ge[0]):f==="youtube"&&yt.length>0&&Ce(yt[0])},currentPlaylistType:x!=null&&x.isSuno?"suno":"youtube",onTrackChange:f=>{if(C(f),g(!0),f.isSuno){const k=ge.find(_=>_.id===f.id);k&&(K(k),ae(!0))}else ae(!1)},onOpenShare:f=>L(f),onOpenLyrics:f=>qe(f),disableInternalPlayback:H,isDarkMode:u,isPlaying:w,setIsPlaying:f=>{g(f),x!=null&&x.isSuno&&ae(f)}}),s.jsx(Jy,{track:Re,isOpen:!!Re,onClose:()=>L(null),isDarkMode:u}),s.jsx($y,{track:ie,isOpen:!!ie,onClose:()=>$(null),isPlaying:w,isCurrentTrack:(x==null?void 0:x.id)===(ie==null?void 0:ie.id),onPlay:Ce,onOpenShare:f=>L(f),isDarkMode:u}),s.jsx(Fy,{track:Ee,isOpen:!!Ee,onClose:()=>qe(null),isDarkMode:u,isPlaying:w,isCurrentTrack:(x==null?void 0:x.id)===(Ee==null?void 0:Ee.id),onPlay:Ce,onOpenShare:f=>L(f)})]})}typeof window<"u"&&(window.addEventListener("error",u=>{if(!u.message||u.message==="Script error."||u.filename&&(u.filename.includes("youtube.com")||u.filename.includes("suno.ai")))return u.preventDefault(),!0}),window.addEventListener("unhandledrejection",u=>{var j,S;if(u.reason){const d=((j=u.reason)==null?void 0:j.name)||"",H=String(((S=u.reason)==null?void 0:S.message)||u.reason||"");if(d==="AbortError"||d==="NotAllowedError"||H.includes("play()")||H.includes("interact")){u.preventDefault();return}}u.reason||u.preventDefault()}));ty.createRoot(document.getElementById("root")).render(s.jsx(R.StrictMode,{children:s.jsx(nb,{})}));
