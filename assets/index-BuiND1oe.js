(function(){const N=document.createElement("link").relList;if(N&&N.supports&&N.supports("modulepreload"))return;for(const k of document.querySelectorAll('link[rel="modulepreload"]'))f(k);new MutationObserver(k=>{for(const M of k)if(M.type==="childList")for(const Y of M.addedNodes)Y.tagName==="LINK"&&Y.rel==="modulepreload"&&f(Y)}).observe(document,{childList:!0,subtree:!0});function E(k){const M={};return k.integrity&&(M.integrity=k.integrity),k.referrerPolicy&&(M.referrerPolicy=k.referrerPolicy),k.crossOrigin==="use-credentials"?M.credentials="include":k.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function f(k){if(k.ep)return;k.ep=!0;const M=E(k);fetch(k.href,M)}})();var So={exports:{}},kn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function A0(){if(Mf)return kn;Mf=1;var r=Symbol.for("react.transitional.element"),N=Symbol.for("react.fragment");function E(f,k,M){var Y=null;if(M!==void 0&&(Y=""+M),k.key!==void 0&&(Y=""+k.key),"key"in k){M={};for(var z in k)z!=="key"&&(M[z]=k[z])}else M=k;return k=M.ref,{$$typeof:r,type:f,key:Y,ref:k!==void 0?k:null,props:M}}return kn.Fragment=N,kn.jsx=E,kn.jsxs=E,kn}var _f;function T0(){return _f||(_f=1,So.exports=A0()),So.exports}var u=T0(),No={exports:{}},$={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function E0(){if(Yf)return $;Yf=1;var r=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),G=Symbol.iterator;function ne(c){return c===null||typeof c!="object"?null:(c=G&&c[G]||c["@@iterator"],typeof c=="function"?c:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,Ae={};function pe(c,p,A){this.props=c,this.context=p,this.refs=Ae,this.updater=A||J}pe.prototype.isReactComponent={},pe.prototype.setState=function(c,p){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,p,"setState")},pe.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Me(){}Me.prototype=pe.prototype;function he(c,p,A){this.props=c,this.context=p,this.refs=Ae,this.updater=A||J}var ke=he.prototype=new Me;ke.constructor=he,F(ke,pe.prototype),ke.isPureReactComponent=!0;var ce=Array.isArray;function Te(){}var B={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function I(c,p,A){var D=A.ref;return{$$typeof:r,type:c,key:p,ref:D!==void 0?D:null,props:A}}function Q(c,p){return I(c.type,p,c.props)}function _e(c){return typeof c=="object"&&c!==null&&c.$$typeof===r}function q(c){var p={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(A){return p[A]})}var se=/\/+/g;function me(c,p){return typeof c=="object"&&c!==null&&c.key!=null?q(""+c.key):p.toString(36)}function Qe(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(Te,Te):(c.status="pending",c.then(function(p){c.status==="pending"&&(c.status="fulfilled",c.value=p)},function(p){c.status==="pending"&&(c.status="rejected",c.reason=p)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function w(c,p,A,D,W){var te=typeof c;(te==="undefined"||te==="boolean")&&(c=null);var ge=!1;if(c===null)ge=!0;else switch(te){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(c.$$typeof){case r:case N:ge=!0;break;case H:return ge=c._init,w(ge(c._payload),p,A,D,W)}}if(ge)return W=W(c),ge=D===""?"."+me(c,0):D,ce(W)?(A="",ge!=null&&(A=ge.replace(se,"$&/")+"/"),w(W,p,A,"",function(Yl){return Yl})):W!=null&&(_e(W)&&(W=Q(W,A+(W.key==null||c&&c.key===W.key?"":(""+W.key).replace(se,"$&/")+"/")+ge)),p.push(W)),1;ge=0;var et=D===""?".":D+":";if(ce(c))for(var Oe=0;Oe<c.length;Oe++)D=c[Oe],te=et+me(D,Oe),ge+=w(D,p,A,te,W);else if(Oe=ne(c),typeof Oe=="function")for(c=Oe.call(c),Oe=0;!(D=c.next()).done;)D=D.value,te=et+me(D,Oe++),ge+=w(D,p,A,te,W);else if(te==="object"){if(typeof c.then=="function")return w(Qe(c),p,A,D,W);throw p=String(c),Error("Objects are not valid as a React child (found: "+(p==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":p)+"). If you meant to render a collection of children, use an array instead.")}return ge}function U(c,p,A){if(c==null)return c;var D=[],W=0;return w(c,D,"","",function(te){return p.call(A,te,W++)}),D}function Z(c){if(c._status===-1){var p=c._result;p=p(),p.then(function(A){(c._status===0||c._status===-1)&&(c._status=1,c._result=A)},function(A){(c._status===0||c._status===-1)&&(c._status=2,c._result=A)}),c._status===-1&&(c._status=0,c._result=p)}if(c._status===1)return c._result.default;throw c._result}var oe=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var p=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(p))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},ye={map:U,forEach:function(c,p,A){U(c,function(){p.apply(this,arguments)},A)},count:function(c){var p=0;return U(c,function(){p++}),p},toArray:function(c){return U(c,function(p){return p})||[]},only:function(c){if(!_e(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return $.Activity=C,$.Children=ye,$.Component=pe,$.Fragment=E,$.Profiler=k,$.PureComponent=he,$.StrictMode=f,$.Suspense=_,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,$.__COMPILER_RUNTIME={__proto__:null,c:function(c){return B.H.useMemoCache(c)}},$.cache=function(c){return function(){return c.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(c,p,A){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var D=F({},c.props),W=c.key;if(p!=null)for(te in p.key!==void 0&&(W=""+p.key),p)!O.call(p,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&p.ref===void 0||(D[te]=p[te]);var te=arguments.length-2;if(te===1)D.children=A;else if(1<te){for(var ge=Array(te),et=0;et<te;et++)ge[et]=arguments[et+2];D.children=ge}return I(c.type,W,D)},$.createContext=function(c){return c={$$typeof:Y,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:M,_context:c},c},$.createElement=function(c,p,A){var D,W={},te=null;if(p!=null)for(D in p.key!==void 0&&(te=""+p.key),p)O.call(p,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(W[D]=p[D]);var ge=arguments.length-2;if(ge===1)W.children=A;else if(1<ge){for(var et=Array(ge),Oe=0;Oe<ge;Oe++)et[Oe]=arguments[Oe+2];W.children=et}if(c&&c.defaultProps)for(D in ge=c.defaultProps,ge)W[D]===void 0&&(W[D]=ge[D]);return I(c,te,W)},$.createRef=function(){return{current:null}},$.forwardRef=function(c){return{$$typeof:z,render:c}},$.isValidElement=_e,$.lazy=function(c){return{$$typeof:H,_payload:{_status:-1,_result:c},_init:Z}},$.memo=function(c,p){return{$$typeof:x,type:c,compare:p===void 0?null:p}},$.startTransition=function(c){var p=B.T,A={};B.T=A;try{var D=c(),W=B.S;W!==null&&W(A,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Te,oe)}catch(te){oe(te)}finally{p!==null&&A.types!==null&&(p.types=A.types),B.T=p}},$.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},$.use=function(c){return B.H.use(c)},$.useActionState=function(c,p,A){return B.H.useActionState(c,p,A)},$.useCallback=function(c,p){return B.H.useCallback(c,p)},$.useContext=function(c){return B.H.useContext(c)},$.useDebugValue=function(){},$.useDeferredValue=function(c,p){return B.H.useDeferredValue(c,p)},$.useEffect=function(c,p){return B.H.useEffect(c,p)},$.useEffectEvent=function(c){return B.H.useEffectEvent(c)},$.useId=function(){return B.H.useId()},$.useImperativeHandle=function(c,p,A){return B.H.useImperativeHandle(c,p,A)},$.useInsertionEffect=function(c,p){return B.H.useInsertionEffect(c,p)},$.useLayoutEffect=function(c,p){return B.H.useLayoutEffect(c,p)},$.useMemo=function(c,p){return B.H.useMemo(c,p)},$.useOptimistic=function(c,p){return B.H.useOptimistic(c,p)},$.useReducer=function(c,p,A){return B.H.useReducer(c,p,A)},$.useRef=function(c){return B.H.useRef(c)},$.useState=function(c){return B.H.useState(c)},$.useSyncExternalStore=function(c,p,A){return B.H.useSyncExternalStore(c,p,A)},$.useTransition=function(){return B.H.useTransition()},$.version="19.2.8",$}var Uf;function ko(){return Uf||(Uf=1,No.exports=E0()),No.exports}var R=ko(),jo={exports:{}},Bn={},Ao={exports:{}},To={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function k0(){return Of||(Of=1,(function(r){function N(w,U){var Z=w.length;w.push(U);e:for(;0<Z;){var oe=Z-1>>>1,ye=w[oe];if(0<k(ye,U))w[oe]=U,w[Z]=ye,Z=oe;else break e}}function E(w){return w.length===0?null:w[0]}function f(w){if(w.length===0)return null;var U=w[0],Z=w.pop();if(Z!==U){w[0]=Z;e:for(var oe=0,ye=w.length,c=ye>>>1;oe<c;){var p=2*(oe+1)-1,A=w[p],D=p+1,W=w[D];if(0>k(A,Z))D<ye&&0>k(W,A)?(w[oe]=W,w[D]=Z,oe=D):(w[oe]=A,w[p]=Z,oe=p);else if(D<ye&&0>k(W,Z))w[oe]=W,w[D]=Z,oe=D;else break e}}return U}function k(w,U){var Z=w.sortIndex-U.sortIndex;return Z!==0?Z:w.id-U.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;r.unstable_now=function(){return M.now()}}else{var Y=Date,z=Y.now();r.unstable_now=function(){return Y.now()-z}}var _=[],x=[],H=1,C=null,G=3,ne=!1,J=!1,F=!1,Ae=!1,pe=typeof setTimeout=="function"?setTimeout:null,Me=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;function ke(w){for(var U=E(x);U!==null;){if(U.callback===null)f(x);else if(U.startTime<=w)f(x),U.sortIndex=U.expirationTime,N(_,U);else break;U=E(x)}}function ce(w){if(F=!1,ke(w),!J)if(E(_)!==null)J=!0,Te||(Te=!0,q());else{var U=E(x);U!==null&&Qe(ce,U.startTime-w)}}var Te=!1,B=-1,O=5,I=-1;function Q(){return Ae?!0:!(r.unstable_now()-I<O)}function _e(){if(Ae=!1,Te){var w=r.unstable_now();I=w;var U=!0;try{e:{J=!1,F&&(F=!1,Me(B),B=-1),ne=!0;var Z=G;try{t:{for(ke(w),C=E(_);C!==null&&!(C.expirationTime>w&&Q());){var oe=C.callback;if(typeof oe=="function"){C.callback=null,G=C.priorityLevel;var ye=oe(C.expirationTime<=w);if(w=r.unstable_now(),typeof ye=="function"){C.callback=ye,ke(w),U=!0;break t}C===E(_)&&f(_),ke(w)}else f(_);C=E(_)}if(C!==null)U=!0;else{var c=E(x);c!==null&&Qe(ce,c.startTime-w),U=!1}}break e}finally{C=null,G=Z,ne=!1}U=void 0}}finally{U?q():Te=!1}}}var q;if(typeof he=="function")q=function(){he(_e)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,me=se.port2;se.port1.onmessage=_e,q=function(){me.postMessage(null)}}else q=function(){pe(_e,0)};function Qe(w,U){B=pe(function(){w(r.unstable_now())},U)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(w){w.callback=null},r.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<w?Math.floor(1e3/w):5},r.unstable_getCurrentPriorityLevel=function(){return G},r.unstable_next=function(w){switch(G){case 1:case 2:case 3:var U=3;break;default:U=G}var Z=G;G=U;try{return w()}finally{G=Z}},r.unstable_requestPaint=function(){Ae=!0},r.unstable_runWithPriority=function(w,U){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var Z=G;G=w;try{return U()}finally{G=Z}},r.unstable_scheduleCallback=function(w,U,Z){var oe=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,w){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Z+ye,w={id:H++,callback:U,priorityLevel:w,startTime:Z,expirationTime:ye,sortIndex:-1},Z>oe?(w.sortIndex=Z,N(x,w),E(_)===null&&w===E(x)&&(F?(Me(B),B=-1):F=!0,Qe(ce,Z-oe))):(w.sortIndex=ye,N(_,w),J||ne||(J=!0,Te||(Te=!0,q()))),w},r.unstable_shouldYield=Q,r.unstable_wrapCallback=function(w){var U=G;return function(){var Z=G;G=U;try{return w.apply(this,arguments)}finally{G=Z}}}})(To)),To}var Df;function B0(){return Df||(Df=1,Ao.exports=k0()),Ao.exports}var Eo={exports:{}},We={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf;function z0(){if(Rf)return We;Rf=1;var r=ko();function N(_){var x="https://react.dev/errors/"+_;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)x+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+_+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(){}var f={d:{f:E,r:function(){throw Error(N(522))},D:E,C:E,L:E,m:E,X:E,S:E,M:E},p:0,findDOMNode:null},k=Symbol.for("react.portal");function M(_,x,H){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:C==null?null:""+C,children:_,containerInfo:x,implementation:H}}var Y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(_,x){if(_==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,We.createPortal=function(_,x){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(N(299));return M(_,x,null,H)},We.flushSync=function(_){var x=Y.T,H=f.p;try{if(Y.T=null,f.p=2,_)return _()}finally{Y.T=x,f.p=H,f.d.f()}},We.preconnect=function(_,x){typeof _=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,f.d.C(_,x))},We.prefetchDNS=function(_){typeof _=="string"&&f.d.D(_)},We.preinit=function(_,x){if(typeof _=="string"&&x&&typeof x.as=="string"){var H=x.as,C=z(H,x.crossOrigin),G=typeof x.integrity=="string"?x.integrity:void 0,ne=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;H==="style"?f.d.S(_,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:C,integrity:G,fetchPriority:ne}):H==="script"&&f.d.X(_,{crossOrigin:C,integrity:G,fetchPriority:ne,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},We.preinitModule=function(_,x){if(typeof _=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var H=z(x.as,x.crossOrigin);f.d.M(_,{crossOrigin:H,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&f.d.M(_)},We.preload=function(_,x){if(typeof _=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var H=x.as,C=z(H,x.crossOrigin);f.d.L(_,H,{crossOrigin:C,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},We.preloadModule=function(_,x){if(typeof _=="string")if(x){var H=z(x.as,x.crossOrigin);f.d.m(_,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:H,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else f.d.m(_)},We.requestFormReset=function(_){f.d.r(_)},We.unstable_batchedUpdates=function(_,x){return _(x)},We.useFormState=function(_,x,H){return Y.H.useFormState(_,x,H)},We.useFormStatus=function(){return Y.H.useHostTransitionStatus()},We.version="19.2.8",We}var Hf;function C0(){if(Hf)return Eo.exports;Hf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(N){console.error(N)}}return r(),Eo.exports=z0(),Eo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function M0(){if(qf)return Bn;qf=1;var r=B0(),N=ko(),E=C0();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function k(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function M(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(M(e)!==e)throw Error(f(188))}function x(e){var t=e.alternate;if(!t){if(t=M(e),t===null)throw Error(f(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return _(n),e;if(i===l)return _(n),t;i=i.sibling}throw Error(f(188))}if(a.return!==l.return)a=n,l=i;else{for(var s=!1,o=n.child;o;){if(o===a){s=!0,a=n,l=i;break}if(o===l){s=!0,l=n,a=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===a){s=!0,a=i,l=n;break}if(o===l){s=!0,l=i,a=n;break}o=o.sibling}if(!s)throw Error(f(189))}}if(a.alternate!==l)throw Error(f(190))}if(a.tag!==3)throw Error(f(188));return a.stateNode.current===a?e:t}function H(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=H(e),t!==null)return t;e=e.sibling}return null}var C=Object.assign,G=Symbol.for("react.element"),ne=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Ae=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),Me=Symbol.for("react.consumer"),he=Symbol.for("react.context"),ke=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),Q=Symbol.for("react.memo_cache_sentinel"),_e=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=_e&&e[_e]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case pe:return"Profiler";case Ae:return"StrictMode";case ce:return"Suspense";case Te:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case J:return"Portal";case he:return e.displayName||"Context";case Me:return(e._context.displayName||"Context")+".Consumer";case ke:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var Qe=Array.isArray,w=N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},oe=[],ye=-1;function c(e){return{current:e}}function p(e){0>ye||(e.current=oe[ye],oe[ye]=null,ye--)}function A(e,t){ye++,oe[ye]=e.current,e.current=t}var D=c(null),W=c(null),te=c(null),ge=c(null);function et(e,t){switch(A(te,t),A(W,e),A(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ef(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ef(t),e=tf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}p(D),A(D,e)}function Oe(){p(D),p(W),p(te)}function Yl(e){e.memoizedState!==null&&A(ge,e);var t=D.current,a=tf(t,e.type);t!==a&&(A(W,e),A(D,a))}function Mn(e){W.current===e&&(p(D),p(W)),ge.current===e&&(p(ge),jn._currentValue=Z)}var lu,zo;function ka(e){if(lu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);lu=t&&t[1]||"",zo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lu+e+zo}var nu=!1;function iu(e,t){if(!e||nu)return"";nu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(v){var g=v}Reflect.construct(e,[],T)}else{try{T.call()}catch(v){g=v}e.call(T.prototype)}}else{try{throw Error()}catch(v){g=v}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(v){if(v&&g&&typeof v.stack=="string")return[v.stack,g.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],o=i[1];if(s&&o){var d=s.split(`
`),b=o.split(`
`);for(n=l=0;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;for(;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;if(l===d.length||n===b.length)for(l=d.length-1,n=b.length-1;1<=l&&0<=n&&d[l]!==b[n];)n--;for(;1<=l&&0<=n;l--,n--)if(d[l]!==b[n]){if(l!==1||n!==1)do if(l--,n--,0>n||d[l]!==b[n]){var S=`
`+d[l].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=l&&0<=n);break}}}finally{nu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ka(a):""}function ah(e,t){switch(e.tag){case 26:case 27:case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return e.child!==t&&t!==null?ka("Suspense Fallback"):ka("Suspense");case 19:return ka("SuspenseList");case 0:case 15:return iu(e.type,!1);case 11:return iu(e.type.render,!1);case 1:return iu(e.type,!0);case 31:return ka("Activity");default:return""}}function Co(e){try{var t="",a=null;do t+=ah(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var uu=Object.prototype.hasOwnProperty,su=r.unstable_scheduleCallback,ou=r.unstable_cancelCallback,lh=r.unstable_shouldYield,nh=r.unstable_requestPaint,ct=r.unstable_now,ih=r.unstable_getCurrentPriorityLevel,Mo=r.unstable_ImmediatePriority,_o=r.unstable_UserBlockingPriority,_n=r.unstable_NormalPriority,uh=r.unstable_LowPriority,Yo=r.unstable_IdlePriority,sh=r.log,oh=r.unstable_setDisableYieldValue,Ul=null,dt=null;function la(e){if(typeof sh=="function"&&oh(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Ul,e)}catch{}}var ft=Math.clz32?Math.clz32:dh,rh=Math.log,ch=Math.LN2;function dh(e){return e>>>=0,e===0?32:31-(rh(e)/ch|0)|0}var Yn=256,Un=262144,On=4194304;function Ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=Ba(l):(s&=o,s!==0?n=Ba(s):a||(a=o&~e,a!==0&&(n=Ba(a))))):(o=l&~i,o!==0?n=Ba(o):s!==0?n=Ba(s):a||(a=l&~e,a!==0&&(n=Ba(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Ol(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function fh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uo(){var e=On;return On<<=1,(On&62914560)===0&&(On=4194304),e}function ru(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Dl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hh(e,t,a,l,n,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,d=e.expirationTimes,b=e.hiddenUpdates;for(a=s&~a;0<a;){var S=31-ft(a),T=1<<S;o[S]=0,d[S]=-1;var g=b[S];if(g!==null)for(b[S]=null,S=0;S<g.length;S++){var v=g[S];v!==null&&(v.lane&=-536870913)}a&=~T}l!==0&&Oo(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function Oo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ft(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Do(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ft(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Ro(e,t){var a=t&-t;return a=(a&42)!==0?1:cu(a),(a&(e.suspendedLanes|t))!==0?0:a}function cu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ho(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:Af(e.type))}function qo(e,t){var a=U.p;try{return U.p=e,t()}finally{U.p=a}}var na=Math.random().toString(36).slice(2),Ze="__reactFiber$"+na,lt="__reactProps$"+na,Ka="__reactContainer$"+na,fu="__reactEvents$"+na,mh="__reactListeners$"+na,yh="__reactHandles$"+na,Vo="__reactResources$"+na,Rl="__reactMarker$"+na;function hu(e){delete e[Ze],delete e[lt],delete e[fu],delete e[mh],delete e[yh]}function Ja(e){var t=e[Ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ka]||a[Ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=rf(e);e!==null;){if(a=e[Ze])return a;e=rf(e)}return t}e=a,a=e.parentNode}return null}function Fa(e){if(e=e[Ze]||e[Ka]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function $a(e){var t=e[Vo];return t||(t=e[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[Rl]=!0}var Lo=new Set,Io={};function za(e,t){Wa(e,t),Wa(e+"Capture",t)}function Wa(e,t){for(Io[e]=t,e=0;e<t.length;e++)Lo.add(t[e])}var bh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Go={},Xo={};function ph(e){return uu.call(Xo,e)?!0:uu.call(Go,e)?!1:bh.test(e)?Xo[e]=!0:(Go[e]=!0,!1)}function Rn(e,t,a){if(ph(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Hn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ht(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gh(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mu(e){if(!e._valueTracker){var t=Qo(e)?"checked":"value";e._valueTracker=gh(e,t,""+e[t])}}function Zo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Qo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function qn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xh=/[\n"\\]/g;function wt(e){return e.replace(xh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yu(e,t,a,l,n,i,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?bu(e,s,vt(t)):a!=null?bu(e,s,vt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+vt(o):e.removeAttribute("name")}function Ko(e,t,a,l,n,i,s,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){mu(e);return}a=a!=null?""+vt(a):"",t=t!=null?""+vt(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),mu(e)}function bu(e,t,a){t==="number"&&qn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Pa(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+vt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Jo(e,t,a){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+vt(a):""}function Fo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(f(92));if(Qe(l)){if(1<l.length)throw Error(f(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=vt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),mu(e)}function el(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var vh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $o(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||vh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Wo(e,t,a){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&$o(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&$o(e,i,t[i])}function pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vn(e){return Sh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var gu=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,al=null;function Po(e){var t=Fa(e);if(t&&(e=t.stateNode)){var a=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(yu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[lt]||null;if(!n)throw Error(f(90));yu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Zo(l)}break e;case"textarea":Jo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Pa(e,!!a.multiple,t,!1)}}}var vu=!1;function er(e,t,a){if(vu)return e(t,a);vu=!0;try{var l=e(t);return l}finally{if(vu=!1,(tl!==null||al!==null)&&(ki(),tl&&(t=tl,e=al,al=tl=null,Po(t),e)))for(t=0;t<e.length;t++)Po(e[t])}}function ql(e,t){var a=e.stateNode;if(a===null)return null;var l=a[lt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(f(231,t,typeof a));return a}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=!1;if(Vt)try{var Vl={};Object.defineProperty(Vl,"passive",{get:function(){wu=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{wu=!1}var ia=null,Su=null,Ln=null;function tr(){if(Ln)return Ln;var e,t=Su,a=t.length,l,n="value"in ia?ia.value:ia.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var s=a-e;for(l=1;l<=s&&t[a-l]===n[i-l];l++);return Ln=n.slice(e,1<l?1-l:void 0)}function In(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gn(){return!0}function ar(){return!1}function nt(e){function t(a,l,n,i,s){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gn:ar,this.isPropagationStopped=ar,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gn)},persist:function(){},isPersistent:Gn}),t}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xn=nt(Ca),Ll=C({},Ca,{view:0,detail:0}),Nh=nt(Ll),Nu,ju,Il,Qn=C({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Il&&(Il&&e.type==="mousemove"?(Nu=e.screenX-Il.screenX,ju=e.screenY-Il.screenY):ju=Nu=0,Il=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:ju}}),lr=nt(Qn),jh=C({},Qn,{dataTransfer:0}),Ah=nt(jh),Th=C({},Ll,{relatedTarget:0}),Au=nt(Th),Eh=C({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),kh=nt(Eh),Bh=C({},Ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zh=nt(Bh),Ch=C({},Ca,{data:0}),nr=nt(Ch),Mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_h={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yh[e])?!!t[e]:!1}function Tu(){return Uh}var Oh=C({},Ll,{key:function(e){if(e.key){var t=Mh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=In(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_h[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?In(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?In(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dh=nt(Oh),Rh=C({},Qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ir=nt(Rh),Hh=C({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),qh=nt(Hh),Vh=C({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lh=nt(Vh),Ih=C({},Qn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gh=nt(Ih),Xh=C({},Ca,{newState:0,oldState:0}),Qh=nt(Xh),Zh=[9,13,27,32],Eu=Vt&&"CompositionEvent"in window,Gl=null;Vt&&"documentMode"in document&&(Gl=document.documentMode);var Kh=Vt&&"TextEvent"in window&&!Gl,ur=Vt&&(!Eu||Gl&&8<Gl&&11>=Gl),sr=" ",or=!1;function rr(e,t){switch(e){case"keyup":return Zh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ll=!1;function Jh(e,t){switch(e){case"compositionend":return cr(t);case"keypress":return t.which!==32?null:(or=!0,sr);case"textInput":return e=t.data,e===sr&&or?null:e;default:return null}}function Fh(e,t){if(ll)return e==="compositionend"||!Eu&&rr(e,t)?(e=tr(),Ln=Su=ia=null,ll=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ur&&t.locale!=="ko"?null:t.data;default:return null}}var $h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$h[e.type]:t==="textarea"}function fr(e,t,a,l){tl?al?al.push(l):al=[l]:tl=l,t=Ui(t,"onChange"),0<t.length&&(a=new Xn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Xl=null,Ql=null;function Wh(e){Kd(e,0)}function Zn(e){var t=Hl(e);if(Zo(t))return e}function hr(e,t){if(e==="change")return t}var mr=!1;if(Vt){var ku;if(Vt){var Bu="oninput"in document;if(!Bu){var yr=document.createElement("div");yr.setAttribute("oninput","return;"),Bu=typeof yr.oninput=="function"}ku=Bu}else ku=!1;mr=ku&&(!document.documentMode||9<document.documentMode)}function br(){Xl&&(Xl.detachEvent("onpropertychange",pr),Ql=Xl=null)}function pr(e){if(e.propertyName==="value"&&Zn(Ql)){var t=[];fr(t,Ql,e,xu(e)),er(Wh,t)}}function Ph(e,t,a){e==="focusin"?(br(),Xl=t,Ql=a,Xl.attachEvent("onpropertychange",pr)):e==="focusout"&&br()}function em(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zn(Ql)}function tm(e,t){if(e==="click")return Zn(t)}function am(e,t){if(e==="input"||e==="change")return Zn(t)}function lm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:lm;function Zl(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!uu.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function gr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var a=gr(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gr(a)}}function vr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=qn(e.document)}return t}function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var nm=Vt&&"documentMode"in document&&11>=document.documentMode,nl=null,Cu=null,Kl=null,Mu=!1;function Sr(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||nl==null||nl!==qn(l)||(l=nl,"selectionStart"in l&&zu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Kl&&Zl(Kl,l)||(Kl=l,l=Ui(Cu,"onSelect"),0<l.length&&(t=new Xn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=nl)))}function Ma(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var il={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},_u={},Nr={};Vt&&(Nr=document.createElement("div").style,"AnimationEvent"in window||(delete il.animationend.animation,delete il.animationiteration.animation,delete il.animationstart.animation),"TransitionEvent"in window||delete il.transitionend.transition);function _a(e){if(_u[e])return _u[e];if(!il[e])return e;var t=il[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Nr)return _u[e]=t[a];return e}var jr=_a("animationend"),Ar=_a("animationiteration"),Tr=_a("animationstart"),im=_a("transitionrun"),um=_a("transitionstart"),sm=_a("transitioncancel"),Er=_a("transitionend"),kr=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function zt(e,t){kr.set(e,t),za(t,[e])}var Kn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},St=[],ul=0,Uu=0;function Jn(){for(var e=ul,t=Uu=ul=0;t<e;){var a=St[t];St[t++]=null;var l=St[t];St[t++]=null;var n=St[t];St[t++]=null;var i=St[t];if(St[t++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}i!==0&&Br(a,n,i)}}function Fn(e,t,a,l){St[ul++]=e,St[ul++]=t,St[ul++]=a,St[ul++]=l,Uu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ou(e,t,a,l){return Fn(e,t,a,l),$n(e)}function Ya(e,t){return Fn(e,null,null,t),$n(e)}function Br(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ft(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function $n(e){if(50<pn)throw pn=0,Xs=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sl={};function om(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,a,l){return new om(e,t,a,l)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var a=e.alternate;return a===null?(a=mt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zr(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wn(e,t,a,l,n,i){var s=0;if(l=e,typeof e=="function")Du(e)&&(s=1);else if(typeof e=="string")s=h0(e,a,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=mt(31,a,t,n),e.elementType=I,e.lanes=i,e;case F:return Ua(a.children,n,i,t);case Ae:s=8,n|=24;break;case pe:return e=mt(12,a,t,n|2),e.elementType=pe,e.lanes=i,e;case ce:return e=mt(13,a,t,n),e.elementType=ce,e.lanes=i,e;case Te:return e=mt(19,a,t,n),e.elementType=Te,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case he:s=10;break e;case Me:s=9;break e;case ke:s=11;break e;case B:s=14;break e;case O:s=16,l=null;break e}s=29,a=Error(f(130,e===null?"null":typeof e,"")),l=null}return t=mt(s,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ua(e,t,a,l){return e=mt(7,e,l,t),e.lanes=a,e}function Ru(e,t,a){return e=mt(6,e,null,t),e.lanes=a,e}function Cr(e){var t=mt(18,null,null,0);return t.stateNode=e,t}function Hu(e,t,a){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Mr=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var a=Mr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Co(t)},Mr.set(e,t),t)}return{value:e,source:t,stack:Co(t)}}var ol=[],rl=0,Pn=null,Jl=0,jt=[],At=0,ua=null,_t=1,Yt="";function It(e,t){ol[rl++]=Jl,ol[rl++]=Pn,Pn=e,Jl=t}function _r(e,t,a){jt[At++]=_t,jt[At++]=Yt,jt[At++]=ua,ua=e;var l=_t;e=Yt;var n=32-ft(l)-1;l&=~(1<<n),a+=1;var i=32-ft(t)+n;if(30<i){var s=n-n%5;i=(l&(1<<s)-1).toString(32),l>>=s,n-=s,_t=1<<32-ft(t)+n|a<<n|l,Yt=i+e}else _t=1<<i|a<<n|l,Yt=e}function qu(e){e.return!==null&&(It(e,1),_r(e,1,0))}function Vu(e){for(;e===Pn;)Pn=ol[--rl],ol[rl]=null,Jl=ol[--rl],ol[rl]=null;for(;e===ua;)ua=jt[--At],jt[At]=null,Yt=jt[--At],jt[At]=null,_t=jt[--At],jt[At]=null}function Yr(e,t){jt[At++]=_t,jt[At++]=Yt,jt[At++]=ua,_t=t.id,Yt=t.overflow,ua=e}var Ke=null,Be=null,re=!1,sa=null,Tt=!1,Lu=Error(f(519));function oa(e){var t=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(Nt(t,e)),Lu}function Ur(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ze]=e,t[lt]=l,a){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(a=0;a<xn.length;a++)le(xn[a],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),Ko(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),Fo(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Wd(t.textContent,a)?(l.popover!=null&&(le("beforetoggle",t),le("toggle",t)),l.onScroll!=null&&le("scroll",t),l.onScrollEnd!=null&&le("scrollend",t),l.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||oa(e,!0)}function Or(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Ke=Ke.return}}function cl(e){if(e!==Ke)return!1;if(!re)return Or(e),re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||uo(e.type,e.memoizedProps)),a=!a),a&&Be&&oa(e),Or(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));Be=of(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));Be=of(e)}else t===27?(t=Be,Sa(e.type)?(e=fo,fo=null,Be=e):Be=t):Be=Ke?kt(e.stateNode.nextSibling):null;return!0}function Oa(){Be=Ke=null,re=!1}function Iu(){var e=sa;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),sa=null),e}function Fl(e){sa===null?sa=[e]:sa.push(e)}var Gu=c(null),Da=null,Gt=null;function ra(e,t,a){A(Gu,t._currentValue),t._currentValue=a}function Xt(e){e._currentValue=Gu.current,p(Gu)}function Xu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Qu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var d=0;d<t.length;d++)if(o.context===t[d]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),Xu(i.return,a,e),l||(s=null);break e}i=o.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(f(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Xu(s,a,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function dl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(f(387));if(s=s.memoizedProps,s!==null){var o=n.type;ht(n.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(n===ge.current){if(s=n.alternate,s===null)throw Error(f(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(jn):e=[jn])}n=n.return}e!==null&&Qu(t,e,a,l),t.flags|=262144}function ei(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ra(e){Da=e,Gt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return Dr(Da,e)}function ti(e,t){return Da===null&&Ra(e),Dr(e,t)}function Dr(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Gt===null){if(e===null)throw Error(f(308));Gt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gt=Gt.next=t;return a}var rm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},cm=r.unstable_scheduleCallback,dm=r.unstable_NormalPriority,He={$$typeof:he,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new rm,data:new Map,refCount:0}}function $l(e){e.refCount--,e.refCount===0&&cm(dm,function(){e.controller.abort()})}var Wl=null,Ku=0,fl=0,hl=null;function fm(e,t){if(Wl===null){var a=Wl=[];Ku=0,fl=$s(),hl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ku++,t.then(Rr,Rr),t}function Rr(){if(--Ku===0&&Wl!==null){hl!==null&&(hl.status="fulfilled");var e=Wl;Wl=null,fl=0,hl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function hm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Hr=w.S;w.S=function(e,t){Sd=ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&fm(e,t),Hr!==null&&Hr(e,t)};var Ha=c(null);function Ju(){var e=Ha.current;return e!==null?e:Ee.pooledCache}function ai(e,t){t===null?A(Ha,Ha.current):A(Ha,t.pool)}function qr(){var e=Ju();return e===null?null:{parent:He._currentValue,pool:e}}var ml=Error(f(460)),Fu=Error(f(474)),li=Error(f(542)),ni={then:function(){}};function Vr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lr(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qt,qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gr(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gr(e),e}throw Va=t,ml}}function qa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Va=a,ml):a}}var Va=null;function Ir(){if(Va===null)throw Error(f(459));var e=Va;return Va=null,e}function Gr(e){if(e===ml||e===li)throw Error(f(483))}var yl=null,Pl=0;function ii(e){var t=Pl;return Pl+=1,yl===null&&(yl=[]),Lr(yl,e,t)}function en(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ui(e,t){throw t.$$typeof===G?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Xr(e){function t(m,h){if(e){var y=m.deletions;y===null?(m.deletions=[h],m.flags|=16):y.push(h)}}function a(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function l(m){for(var h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function n(m,h){return m=Lt(m,h),m.index=0,m.sibling=null,m}function i(m,h,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<h?(m.flags|=67108866,h):y):(m.flags|=67108866,h)):(m.flags|=1048576,h)}function s(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function o(m,h,y,j){return h===null||h.tag!==6?(h=Ru(y,m.mode,j),h.return=m,h):(h=n(h,y),h.return=m,h)}function d(m,h,y,j){var X=y.type;return X===F?S(m,h,y.props.children,j,y.key):h!==null&&(h.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===O&&qa(X)===h.type)?(h=n(h,y.props),en(h,y),h.return=m,h):(h=Wn(y.type,y.key,y.props,null,m.mode,j),en(h,y),h.return=m,h)}function b(m,h,y,j){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Hu(y,m.mode,j),h.return=m,h):(h=n(h,y.children||[]),h.return=m,h)}function S(m,h,y,j,X){return h===null||h.tag!==7?(h=Ua(y,m.mode,j,X),h.return=m,h):(h=n(h,y),h.return=m,h)}function T(m,h,y){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Ru(""+h,m.mode,y),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ne:return y=Wn(h.type,h.key,h.props,null,m.mode,y),en(y,h),y.return=m,y;case J:return h=Hu(h,m.mode,y),h.return=m,h;case O:return h=qa(h),T(m,h,y)}if(Qe(h)||q(h))return h=Ua(h,m.mode,y,null),h.return=m,h;if(typeof h.then=="function")return T(m,ii(h),y);if(h.$$typeof===he)return T(m,ti(m,h),y);ui(m,h)}return null}function g(m,h,y,j){var X=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return X!==null?null:o(m,h,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ne:return y.key===X?d(m,h,y,j):null;case J:return y.key===X?b(m,h,y,j):null;case O:return y=qa(y),g(m,h,y,j)}if(Qe(y)||q(y))return X!==null?null:S(m,h,y,j,null);if(typeof y.then=="function")return g(m,h,ii(y),j);if(y.$$typeof===he)return g(m,h,ti(m,y),j);ui(m,y)}return null}function v(m,h,y,j,X){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return m=m.get(y)||null,o(h,m,""+j,X);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ne:return m=m.get(j.key===null?y:j.key)||null,d(h,m,j,X);case J:return m=m.get(j.key===null?y:j.key)||null,b(h,m,j,X);case O:return j=qa(j),v(m,h,y,j,X)}if(Qe(j)||q(j))return m=m.get(y)||null,S(h,m,j,X,null);if(typeof j.then=="function")return v(m,h,y,ii(j),X);if(j.$$typeof===he)return v(m,h,y,ti(h,j),X);ui(h,j)}return null}function V(m,h,y,j){for(var X=null,de=null,L=h,ee=h=0,ue=null;L!==null&&ee<y.length;ee++){L.index>ee?(ue=L,L=null):ue=L.sibling;var fe=g(m,L,y[ee],j);if(fe===null){L===null&&(L=ue);break}e&&L&&fe.alternate===null&&t(m,L),h=i(fe,h,ee),de===null?X=fe:de.sibling=fe,de=fe,L=ue}if(ee===y.length)return a(m,L),re&&It(m,ee),X;if(L===null){for(;ee<y.length;ee++)L=T(m,y[ee],j),L!==null&&(h=i(L,h,ee),de===null?X=L:de.sibling=L,de=L);return re&&It(m,ee),X}for(L=l(L);ee<y.length;ee++)ue=v(L,m,ee,y[ee],j),ue!==null&&(e&&ue.alternate!==null&&L.delete(ue.key===null?ee:ue.key),h=i(ue,h,ee),de===null?X=ue:de.sibling=ue,de=ue);return e&&L.forEach(function(Ea){return t(m,Ea)}),re&&It(m,ee),X}function K(m,h,y,j){if(y==null)throw Error(f(151));for(var X=null,de=null,L=h,ee=h=0,ue=null,fe=y.next();L!==null&&!fe.done;ee++,fe=y.next()){L.index>ee?(ue=L,L=null):ue=L.sibling;var Ea=g(m,L,fe.value,j);if(Ea===null){L===null&&(L=ue);break}e&&L&&Ea.alternate===null&&t(m,L),h=i(Ea,h,ee),de===null?X=Ea:de.sibling=Ea,de=Ea,L=ue}if(fe.done)return a(m,L),re&&It(m,ee),X;if(L===null){for(;!fe.done;ee++,fe=y.next())fe=T(m,fe.value,j),fe!==null&&(h=i(fe,h,ee),de===null?X=fe:de.sibling=fe,de=fe);return re&&It(m,ee),X}for(L=l(L);!fe.done;ee++,fe=y.next())fe=v(L,m,ee,fe.value,j),fe!==null&&(e&&fe.alternate!==null&&L.delete(fe.key===null?ee:fe.key),h=i(fe,h,ee),de===null?X=fe:de.sibling=fe,de=fe);return e&&L.forEach(function(j0){return t(m,j0)}),re&&It(m,ee),X}function je(m,h,y,j){if(typeof y=="object"&&y!==null&&y.type===F&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ne:e:{for(var X=y.key;h!==null;){if(h.key===X){if(X=y.type,X===F){if(h.tag===7){a(m,h.sibling),j=n(h,y.props.children),j.return=m,m=j;break e}}else if(h.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===O&&qa(X)===h.type){a(m,h.sibling),j=n(h,y.props),en(j,y),j.return=m,m=j;break e}a(m,h);break}else t(m,h);h=h.sibling}y.type===F?(j=Ua(y.props.children,m.mode,j,y.key),j.return=m,m=j):(j=Wn(y.type,y.key,y.props,null,m.mode,j),en(j,y),j.return=m,m=j)}return s(m);case J:e:{for(X=y.key;h!==null;){if(h.key===X)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){a(m,h.sibling),j=n(h,y.children||[]),j.return=m,m=j;break e}else{a(m,h);break}else t(m,h);h=h.sibling}j=Hu(y,m.mode,j),j.return=m,m=j}return s(m);case O:return y=qa(y),je(m,h,y,j)}if(Qe(y))return V(m,h,y,j);if(q(y)){if(X=q(y),typeof X!="function")throw Error(f(150));return y=X.call(y),K(m,h,y,j)}if(typeof y.then=="function")return je(m,h,ii(y),j);if(y.$$typeof===he)return je(m,h,ti(m,y),j);ui(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,h!==null&&h.tag===6?(a(m,h.sibling),j=n(h,y),j.return=m,m=j):(a(m,h),j=Ru(y,m.mode,j),j.return=m,m=j),s(m)):a(m,h)}return function(m,h,y,j){try{Pl=0;var X=je(m,h,y,j);return yl=null,X}catch(L){if(L===ml||L===li)throw L;var de=mt(29,L,null,m.mode);return de.lanes=j,de.return=m,de}finally{}}}var La=Xr(!0),Qr=Xr(!1),ca=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(be&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=$n(e),Br(e,null,a),t}return Fn(e,l,t,a),$n(e)}function tn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Do(e,a)}}function Pu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var es=!1;function an(){if(es){var e=hl;if(e!==null)throw e}}function ln(e,t,a,l){es=!1;var n=e.updateQueue;ca=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var d=o,b=d.next;d.next=null,s===null?i=b:s.next=b,s=d;var S=e.alternate;S!==null&&(S=S.updateQueue,o=S.lastBaseUpdate,o!==s&&(o===null?S.firstBaseUpdate=b:o.next=b,S.lastBaseUpdate=d))}if(i!==null){var T=n.baseState;s=0,S=b=d=null,o=i;do{var g=o.lane&-536870913,v=g!==o.lane;if(v?(ie&g)===g:(l&g)===g){g!==0&&g===fl&&(es=!0),S!==null&&(S=S.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var V=e,K=o;g=t;var je=a;switch(K.tag){case 1:if(V=K.payload,typeof V=="function"){T=V.call(je,T,g);break e}T=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=K.payload,g=typeof V=="function"?V.call(je,T,g):V,g==null)break e;T=C({},T,g);break e;case 2:ca=!0}}g=o.callback,g!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[g]:v.push(g))}else v={lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},S===null?(b=S=v,d=T):S=S.next=v,s|=g;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;v=o,o=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);S===null&&(d=T),n.baseState=d,n.firstBaseUpdate=b,n.lastBaseUpdate=S,i===null&&(n.shared.lanes=0),pa|=s,e.lanes=s,e.memoizedState=T}}function Zr(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function Kr(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zr(a[e],t)}var bl=c(null),si=c(0);function Jr(e,t){e=ea,A(si,e),A(bl,t),ea=e|t.baseLanes}function ts(){A(si,ea),A(bl,bl.current)}function as(){ea=si.current,p(bl),p(si)}var yt=c(null),Et=null;function ha(e){var t=e.alternate;A(De,De.current&1),A(yt,e),Et===null&&(t===null||bl.current!==null||t.memoizedState!==null)&&(Et=e)}function ls(e){A(De,De.current),A(yt,e),Et===null&&(Et=e)}function Fr(e){e.tag===22?(A(De,De.current),A(yt,e),Et===null&&(Et=e)):ma()}function ma(){A(De,De.current),A(yt,yt.current)}function bt(e){p(yt),Et===e&&(Et=null),p(De)}var De=c(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ro(a)||co(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qt=0,P=null,Se=null,qe=null,ri=!1,pl=!1,Ia=!1,ci=0,nn=0,gl=null,mm=0;function Ye(){throw Error(f(321))}function ns(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function is(e,t,a,l,n,i){return Qt=i,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?_c:vs,Ia=!1,i=a(l,n),Ia=!1,pl&&(i=Wr(t,a,l,n)),$r(e),i}function $r(e){w.H=on;var t=Se!==null&&Se.next!==null;if(Qt=0,qe=Se=P=null,ri=!1,nn=0,gl=null,t)throw Error(f(300));e===null||Ve||(e=e.dependencies,e!==null&&ei(e)&&(Ve=!0))}function Wr(e,t,a,l){P=e;var n=0;do{if(pl&&(gl=null),nn=0,pl=!1,25<=n)throw Error(f(301));if(n+=1,qe=Se=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}w.H=Yc,i=t(a,l)}while(pl);return i}function ym(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?un(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(P.flags|=1024),t}function us(){var e=ci!==0;return ci=0,e}function ss(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function os(e){if(ri){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ri=!1}Qt=0,qe=Se=P=null,pl=!1,nn=ci=0,gl=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?P.memoizedState=qe=e:qe=qe.next=e,qe}function Re(){if(Se===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=qe===null?P.memoizedState:qe.next;if(t!==null)qe=t,Se=e;else{if(e===null)throw P.alternate===null?Error(f(467)):Error(f(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},qe===null?P.memoizedState=qe=e:qe=qe.next=e}return qe}function di(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function un(e){var t=nn;return nn+=1,gl===null&&(gl=[]),e=Lr(gl,e,t),t=P,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?_c:vs),e}function fi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return un(e);if(e.$$typeof===he)return Je(e)}throw Error(f(438,String(e)))}function rs(e){var t=null,a=P.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=P.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=di(),P.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Q;return t.index++,a}function Zt(e,t){return typeof t=="function"?t(e):t}function hi(e){var t=Re();return cs(t,Se,e)}function cs(e,t,a){var l=e.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=s=null,d=null,b=t,S=!1;do{var T=b.lane&-536870913;if(T!==b.lane?(ie&T)===T:(Qt&T)===T){var g=b.revertLane;if(g===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),T===fl&&(S=!0);else if((Qt&g)===g){b=b.next,g===fl&&(S=!0);continue}else T={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},d===null?(o=d=T,s=i):d=d.next=T,P.lanes|=g,pa|=g;T=b.action,Ia&&a(i,T),i=b.hasEagerState?b.eagerState:a(i,T)}else g={lane:T,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},d===null?(o=d=g,s=i):d=d.next=g,P.lanes|=T,pa|=T;b=b.next}while(b!==null&&b!==t);if(d===null?s=i:d.next=o,!ht(i,e.memoizedState)&&(Ve=!0,S&&(a=hl,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=d,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ds(e){var t=Re(),a=t.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do i=e(i,s.action),s=s.next;while(s!==n);ht(i,t.memoizedState)||(Ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Pr(e,t,a){var l=P,n=Re(),i=re;if(i){if(a===void 0)throw Error(f(407));a=a()}else a=t();var s=!ht((Se||n).memoizedState,a);if(s&&(n.memoizedState=a,Ve=!0),n=n.queue,ms(ac.bind(null,l,n,e),[e]),n.getSnapshot!==t||s||qe!==null&&qe.memoizedState.tag&1){if(l.flags|=2048,xl(9,{destroy:void 0},tc.bind(null,l,n,a,t),null),Ee===null)throw Error(f(349));i||(Qt&127)!==0||ec(l,t,a)}return a}function ec(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=P.updateQueue,t===null?(t=di(),P.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function tc(e,t,a,l){t.value=a,t.getSnapshot=l,lc(t)&&nc(e)}function ac(e,t,a){return a(function(){lc(t)&&nc(e)})}function lc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function nc(e){var t=Ya(e,2);t!==null&&rt(t,e,2)}function fs(e){var t=tt();if(typeof e=="function"){var a=e;if(e=a(),Ia){la(!0);try{a()}finally{la(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:e},t}function ic(e,t,a,l){return e.baseState=a,cs(e,Se,typeof l=="function"?l:Zt)}function bm(e,t,a,l,n){if(bi(e))throw Error(f(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};w.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,uc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function uc(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=w.T,s={};w.T=s;try{var o=a(n,l),d=w.S;d!==null&&d(s,o),sc(e,t,o)}catch(b){hs(e,t,b)}finally{i!==null&&s.types!==null&&(i.types=s.types),w.T=i}}else try{i=a(n,l),sc(e,t,i)}catch(b){hs(e,t,b)}}function sc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){oc(e,t,l)},function(l){return hs(e,t,l)}):oc(e,t,a)}function oc(e,t,a){t.status="fulfilled",t.value=a,rc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,uc(e,a)))}function hs(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,rc(t),t=t.next;while(t!==l)}e.action=null}function rc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cc(e,t){return t}function dc(e,t){if(re){var a=Ee.formState;if(a!==null){e:{var l=P;if(re){if(Be){t:{for(var n=Be,i=Tt;n.nodeType!==8;){if(!i){n=null;break t}if(n=kt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Be=kt(n.nextSibling),l=n.data==="F!";break e}}oa(l)}l=!1}l&&(t=a[0])}}return a=tt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cc,lastRenderedState:t},a.queue=l,a=zc.bind(null,P,l),l.dispatch=a,l=fs(!1),i=xs.bind(null,P,!1,l.queue),l=tt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=bm.bind(null,P,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function fc(e){var t=Re();return hc(t,Se,e)}function hc(e,t,a){if(t=cs(e,t,cc)[0],e=hi(Zt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=un(t)}catch(s){throw s===ml?li:s}else l=t;t=Re();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(P.flags|=2048,xl(9,{destroy:void 0},pm.bind(null,n,a),null)),[l,i,e]}function pm(e,t){e.action=t}function mc(e){var t=Re(),a=Se;if(a!==null)return hc(t,a,e);Re(),t=t.memoizedState,a=Re();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function xl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=P.updateQueue,t===null&&(t=di(),P.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function yc(){return Re().memoizedState}function mi(e,t,a,l){var n=tt();P.flags|=e,n.memoizedState=xl(1|t,{destroy:void 0},a,l===void 0?null:l)}function yi(e,t,a,l){var n=Re();l=l===void 0?null:l;var i=n.memoizedState.inst;Se!==null&&l!==null&&ns(l,Se.memoizedState.deps)?n.memoizedState=xl(t,i,a,l):(P.flags|=e,n.memoizedState=xl(1|t,i,a,l))}function bc(e,t){mi(8390656,8,e,t)}function ms(e,t){yi(2048,8,e,t)}function gm(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=di(),P.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function pc(e){var t=Re().memoizedState;return gm({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}function gc(e,t){return yi(4,2,e,t)}function xc(e,t){return yi(4,4,e,t)}function vc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wc(e,t,a){a=a!=null?a.concat([e]):null,yi(4,4,vc.bind(null,t,e),a)}function ys(){}function Sc(e,t){var a=Re();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ns(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Nc(e,t){var a=Re();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ns(t,l[1]))return l[0];if(l=e(),Ia){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[l,t],l}function bs(e,t,a){return a===void 0||(Qt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=jd(),P.lanes|=e,pa|=e,a)}function jc(e,t,a,l){return ht(a,t)?a:bl.current!==null?(e=bs(e,a,l),ht(e,t)||(Ve=!0),e):(Qt&42)===0||(Qt&1073741824)!==0&&(ie&261930)===0?(Ve=!0,e.memoizedState=a):(e=jd(),P.lanes|=e,pa|=e,t)}function Ac(e,t,a,l,n){var i=U.p;U.p=i!==0&&8>i?i:8;var s=w.T,o={};w.T=o,xs(e,!1,t,a);try{var d=n(),b=w.S;if(b!==null&&b(o,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var S=hm(d,l);sn(e,t,S,xt(e))}else sn(e,t,l,xt(e))}catch(T){sn(e,t,{then:function(){},status:"rejected",reason:T},xt())}finally{U.p=i,s!==null&&o.types!==null&&(s.types=o.types),w.T=s}}function xm(){}function ps(e,t,a,l){if(e.tag!==5)throw Error(f(476));var n=Tc(e).queue;Ac(e,n,t,Z,a===null?xm:function(){return Ec(e),a(l)})}function Tc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:Z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ec(e){var t=Tc(e);t.next===null&&(t=e.alternate.memoizedState),sn(e,t.next.queue,{},xt())}function gs(){return Je(jn)}function kc(){return Re().memoizedState}function Bc(){return Re().memoizedState}function vm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=xt();e=da(a);var l=fa(t,e,a);l!==null&&(rt(l,t,a),tn(l,t,a)),t={cache:Zu()},e.payload=t;return}t=t.return}}function wm(e,t,a){var l=xt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bi(e)?Cc(t,a):(a=Ou(e,t,a,l),a!==null&&(rt(a,e,l),Mc(a,t,l)))}function zc(e,t,a){var l=xt();sn(e,t,a,l)}function sn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bi(e))Cc(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,a);if(n.hasEagerState=!0,n.eagerState=o,ht(o,s))return Fn(e,t,n,0),Ee===null&&Jn(),!1}catch{}finally{}if(a=Ou(e,t,n,l),a!==null)return rt(a,e,l),Mc(a,t,l),!0}return!1}function xs(e,t,a,l){if(l={lane:2,revertLane:$s(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},bi(e)){if(t)throw Error(f(479))}else t=Ou(e,a,l,2),t!==null&&rt(t,e,2)}function bi(e){var t=e.alternate;return e===P||t!==null&&t===P}function Cc(e,t){pl=ri=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Mc(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Do(e,a)}}var on={readContext:Je,use:fi,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye};on.useEffectEvent=Ye;var _c={readContext:Je,use:fi,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:bc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,mi(4194308,4,vc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){mi(4,2,e,t)},useMemo:function(e,t){var a=tt();t=t===void 0?null:t;var l=e();if(Ia){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=tt();if(a!==void 0){var n=a(t);if(Ia){la(!0);try{a(t)}finally{la(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=wm.bind(null,P,e),[l.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:function(e){e=fs(e);var t=e.queue,a=zc.bind(null,P,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ys,useDeferredValue:function(e,t){var a=tt();return bs(a,e,t)},useTransition:function(){var e=fs(!1);return e=Ac.bind(null,P,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=P,n=tt();if(re){if(a===void 0)throw Error(f(407));a=a()}else{if(a=t(),Ee===null)throw Error(f(349));(ie&127)!==0||ec(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,bc(ac.bind(null,l,i,e),[e]),l.flags|=2048,xl(9,{destroy:void 0},tc.bind(null,l,i,a,t),null),a},useId:function(){var e=tt(),t=Ee.identifierPrefix;if(re){var a=Yt,l=_t;a=(l&~(1<<32-ft(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ci++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=mm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:gs,useFormState:dc,useActionState:dc,useOptimistic:function(e){var t=tt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=xs.bind(null,P,!0,a),a.dispatch=t,[e,t]},useMemoCache:rs,useCacheRefresh:function(){return tt().memoizedState=vm.bind(null,P)},useEffectEvent:function(e){var t=tt(),a={impl:e};return t.memoizedState=a,function(){if((be&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}},vs={readContext:Je,use:fi,useCallback:Sc,useContext:Je,useEffect:ms,useImperativeHandle:wc,useInsertionEffect:gc,useLayoutEffect:xc,useMemo:Nc,useReducer:hi,useRef:yc,useState:function(){return hi(Zt)},useDebugValue:ys,useDeferredValue:function(e,t){var a=Re();return jc(a,Se.memoizedState,e,t)},useTransition:function(){var e=hi(Zt)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:un(e),t]},useSyncExternalStore:Pr,useId:kc,useHostTransitionStatus:gs,useFormState:fc,useActionState:fc,useOptimistic:function(e,t){var a=Re();return ic(a,Se,e,t)},useMemoCache:rs,useCacheRefresh:Bc};vs.useEffectEvent=pc;var Yc={readContext:Je,use:fi,useCallback:Sc,useContext:Je,useEffect:ms,useImperativeHandle:wc,useInsertionEffect:gc,useLayoutEffect:xc,useMemo:Nc,useReducer:ds,useRef:yc,useState:function(){return ds(Zt)},useDebugValue:ys,useDeferredValue:function(e,t){var a=Re();return Se===null?bs(a,e,t):jc(a,Se.memoizedState,e,t)},useTransition:function(){var e=ds(Zt)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:un(e),t]},useSyncExternalStore:Pr,useId:kc,useHostTransitionStatus:gs,useFormState:mc,useActionState:mc,useOptimistic:function(e,t){var a=Re();return Se!==null?ic(a,Se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:rs,useCacheRefresh:Bc};Yc.useEffectEvent=pc;function ws(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:C({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ss={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=xt(),n=da(l);n.payload=t,a!=null&&(n.callback=a),t=fa(e,n,l),t!==null&&(rt(t,e,l),tn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=xt(),n=da(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=fa(e,n,l),t!==null&&(rt(t,e,l),tn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=xt(),l=da(a);l.tag=2,t!=null&&(l.callback=t),t=fa(e,l,a),t!==null&&(rt(t,e,a),tn(t,e,a))}};function Uc(e,t,a,l,n,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,s):t.prototype&&t.prototype.isPureReactComponent?!Zl(a,l)||!Zl(n,i):!0}function Oc(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ss.enqueueReplaceState(t,t.state,null)}function Ga(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=C({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Dc(e){Kn(e)}function Rc(e){console.error(e)}function Hc(e){Kn(e)}function pi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function qc(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ns(e,t,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){pi(e,t)},a}function Vc(e){return e=da(e),e.tag=3,e}function Lc(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){qc(t,a,l)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){qc(t,a,l),typeof n!="function"&&(ga===null?ga=new Set([this]):ga.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Sm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&dl(t,a,n,!0),a=yt.current,a!==null){switch(a.tag){case 31:case 13:return Et===null?Bi():a.alternate===null&&Ue===0&&(Ue=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===ni?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Ks(e,l,n)),!1;case 22:return a.flags|=65536,l===ni?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Ks(e,l,n)),!1}throw Error(f(435,a.tag))}return Ks(e,l,n),Bi(),!1}if(re)return t=yt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Lu&&(e=Error(f(422),{cause:l}),Fl(Nt(e,a)))):(l!==Lu&&(t=Error(f(423),{cause:l}),Fl(Nt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Nt(l,a),n=Ns(e.stateNode,l,n),Pu(e,n),Ue!==4&&(Ue=2)),!1;var i=Error(f(520),{cause:l});if(i=Nt(i,a),bn===null?bn=[i]:bn.push(i),Ue!==4&&(Ue=2),t===null)return!0;l=Nt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Ns(a.stateNode,l,e),Pu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ga===null||!ga.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Vc(n),Lc(n,e,a,l),Pu(a,n),!1}a=a.return}while(a!==null);return!1}var js=Error(f(461)),Ve=!1;function Fe(e,t,a,l){t.child=e===null?Qr(t,null,a,l):La(t,e.child,a,l)}function Ic(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var s={};for(var o in l)o!=="ref"&&(s[o]=l[o])}else s=l;return Ra(t),l=is(e,t,a,s,i,n),o=us(),e!==null&&!Ve?(ss(e,t,n),Kt(e,t,n)):(re&&o&&qu(t),t.flags|=1,Fe(e,t,l,n),t.child)}function Gc(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Du(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Xc(e,t,i,l,n)):(e=Wn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ms(e,n)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:Zl,a(s,l)&&e.ref===t.ref)return Kt(e,t,n)}return t.flags|=1,e=Lt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Xc(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Zl(i,l)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=l=i,Ms(e,n))(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,Kt(e,t,n)}return As(e,t,a,l,n)}function Qc(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Zc(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ai(t,i!==null?i.cachePool:null),i!==null?Jr(t,i):ts(),Fr(t);else return l=t.lanes=536870912,Zc(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ai(t,i.cachePool),Jr(t,i),ma(),t.memoizedState=null):(e!==null&&ai(t,null),ts(),ma());return Fe(e,t,n,a),t.child}function rn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Zc(e,t,a,l,n){var i=Ju();return i=i===null?null:{parent:He._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ai(t,null),ts(),Fr(t),e!==null&&dl(e,t,l,!0),t.childLanes=n,null}function gi(e,t){return t=vi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Kc(e,t,a){return La(t,e.child,null,a),e=gi(t,t.pendingProps),e.flags|=2,bt(t),t.memoizedState=null,e}function Nm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(l.mode==="hidden")return e=gi(t,l),t.lanes=536870912,rn(null,e);if(ls(t),(e=Be)?(e=sf(e,Tt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ua!==null?{id:_t,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},a=Cr(e),a.return=t,t.child=a,Ke=t,Be=null)):e=null,e===null)throw oa(t);return t.lanes=536870912,null}return gi(t,l)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(ls(t),n)if(t.flags&256)t.flags&=-257,t=Kc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(f(558));else if(Ve||dl(e,t,a,!1),n=(a&e.childLanes)!==0,Ve||n){if(l=Ee,l!==null&&(s=Ro(l,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,Ya(e,s),rt(l,e,s),js;Bi(),t=Kc(e,t,a)}else e=i.treeContext,Be=kt(s.nextSibling),Ke=t,re=!0,sa=null,Tt=!1,e!==null&&Yr(t,e),t=gi(t,l),t.flags|=4096;return t}return e=Lt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(f(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function As(e,t,a,l,n){return Ra(t),a=is(e,t,a,l,void 0,n),l=us(),e!==null&&!Ve?(ss(e,t,n),Kt(e,t,n)):(re&&l&&qu(t),t.flags|=1,Fe(e,t,a,n),t.child)}function Jc(e,t,a,l,n,i){return Ra(t),t.updateQueue=null,a=Wr(t,l,a,n),$r(e),l=us(),e!==null&&!Ve?(ss(e,t,i),Kt(e,t,i)):(re&&l&&qu(t),t.flags|=1,Fe(e,t,a,i),t.child)}function Fc(e,t,a,l,n){if(Ra(t),t.stateNode===null){var i=sl,s=a.contextType;typeof s=="object"&&s!==null&&(i=Je(s)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ss,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},$u(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?Je(s):sl,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(ws(t,a,s,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Ss.enqueueReplaceState(i,i.state,null),ln(t,l,i,n),an(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,d=Ga(a,o);i.props=d;var b=i.context,S=a.contextType;s=sl,typeof S=="object"&&S!==null&&(s=Je(S));var T=a.getDerivedStateFromProps;S=typeof T=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||b!==s)&&Oc(t,i,l,s),ca=!1;var g=t.memoizedState;i.state=g,ln(t,l,i,n),an(),b=t.memoizedState,o||g!==b||ca?(typeof T=="function"&&(ws(t,a,T,l),b=t.memoizedState),(d=ca||Uc(t,a,d,l,g,b,s))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=b),i.props=l,i.state=b,i.context=s,l=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Wu(e,t),s=t.memoizedProps,S=Ga(a,s),i.props=S,T=t.pendingProps,g=i.context,b=a.contextType,d=sl,typeof b=="object"&&b!==null&&(d=Je(b)),o=a.getDerivedStateFromProps,(b=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==T||g!==d)&&Oc(t,i,l,d),ca=!1,g=t.memoizedState,i.state=g,ln(t,l,i,n),an();var v=t.memoizedState;s!==T||g!==v||ca||e!==null&&e.dependencies!==null&&ei(e.dependencies)?(typeof o=="function"&&(ws(t,a,o,l),v=t.memoizedState),(S=ca||Uc(t,a,S,l,g,v,d)||e!==null&&e.dependencies!==null&&ei(e.dependencies))?(b||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,v,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,v,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),i.props=l,i.state=v,i.context=d,l=S):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,xi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=La(t,e.child,null,n),t.child=La(t,null,a,n)):Fe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Kt(e,t,n),e}function $c(e,t,a,l){return Oa(),t.flags|=256,Fe(e,t,a,l),t.child}var Ts={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Es(e){return{baseLanes:e,cachePool:qr()}}function ks(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=gt),e}function Wc(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),s&&(n=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(n?ha(t):ma(),(e=Be)?(e=sf(e,Tt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ua!==null?{id:_t,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},a=Cr(e),a.return=t,t.child=a,Ke=t,Be=null)):e=null,e===null)throw oa(t);return co(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(ma(),n=t.mode,o=vi({mode:"hidden",children:o},n),l=Ua(l,n,a,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=Es(a),l.childLanes=ks(e,s,a),t.memoizedState=Ts,rn(null,l)):(ha(t),Bs(t,o))}var d=e.memoizedState;if(d!==null&&(o=d.dehydrated,o!==null)){if(i)t.flags&256?(ha(t),t.flags&=-257,t=zs(e,t,a)):t.memoizedState!==null?(ma(),t.child=e.child,t.flags|=128,t=null):(ma(),o=l.fallback,n=t.mode,l=vi({mode:"visible",children:l.children},n),o=Ua(o,n,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,La(t,e.child,null,a),l=t.child,l.memoizedState=Es(a),l.childLanes=ks(e,s,a),t.memoizedState=Ts,t=rn(null,l));else if(ha(t),co(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var b=s.dgst;s=b,l=Error(f(419)),l.stack="",l.digest=s,Fl({value:l,source:null,stack:null}),t=zs(e,t,a)}else if(Ve||dl(e,t,a,!1),s=(a&e.childLanes)!==0,Ve||s){if(s=Ee,s!==null&&(l=Ro(s,a),l!==0&&l!==d.retryLane))throw d.retryLane=l,Ya(e,l),rt(s,e,l),js;ro(o)||Bi(),t=zs(e,t,a)}else ro(o)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,Be=kt(o.nextSibling),Ke=t,re=!0,sa=null,Tt=!1,e!==null&&Yr(t,e),t=Bs(t,l.children),t.flags|=4096);return t}return n?(ma(),o=l.fallback,n=t.mode,d=e.child,b=d.sibling,l=Lt(d,{mode:"hidden",children:l.children}),l.subtreeFlags=d.subtreeFlags&65011712,b!==null?o=Lt(b,o):(o=Ua(o,n,a,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,rn(null,l),l=t.child,o=e.child.memoizedState,o===null?o=Es(a):(n=o.cachePool,n!==null?(d=He._currentValue,n=n.parent!==d?{parent:d,pool:d}:n):n=qr(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=ks(e,s,a),t.memoizedState=Ts,rn(e.child,l)):(ha(t),a=e.child,e=a.sibling,a=Lt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Bs(e,t){return t=vi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function vi(e,t){return e=mt(22,e,null,t),e.lanes=0,e}function zs(e,t,a){return La(t,e.child,null,a),e=Bs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pc(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Xu(e.return,t,a)}function Cs(e,t,a,l,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=a,s.tailMode=n,s.treeForkCount=i)}function ed(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var s=De.current,o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,A(De,s),Fe(e,t,l,a),l=re?Jl:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pc(e,a,t);else if(e.tag===19)Pc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&oi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Cs(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&oi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Cs(t,!0,a,null,i,l);break;case"together":Cs(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Kt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),pa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(dl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,a=Lt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Lt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ms(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ei(e)))}function jm(e,t,a){switch(t.tag){case 3:et(t,t.stateNode.containerInfo),ra(t,He,e.memoizedState.cache),Oa();break;case 27:case 5:Yl(t);break;case 4:et(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ls(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ha(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Wc(e,t,a):(ha(t),e=Kt(e,t,a),e!==null?e.sibling:null);ha(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(dl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return ed(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),A(De,De.current),l)break;return null;case 22:return t.lanes=0,Qc(e,t,a,t.pendingProps);case 24:ra(t,He,e.memoizedState.cache)}return Kt(e,t,a)}function td(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ve=!0;else{if(!Ms(e,a)&&(t.flags&128)===0)return Ve=!1,jm(e,t,a);Ve=(e.flags&131072)!==0}else Ve=!1,re&&(t.flags&1048576)!==0&&_r(t,Jl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=qa(t.elementType),t.type=e,typeof e=="function")Du(e)?(l=Ga(e,l),t.tag=1,t=Fc(null,t,e,l,a)):(t.tag=0,t=As(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ke){t.tag=11,t=Ic(null,t,e,l,a);break e}else if(n===B){t.tag=14,t=Gc(null,t,e,l,a);break e}}throw t=me(e)||e,Error(f(306,t,""))}}return t;case 0:return As(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ga(l,t.pendingProps),Fc(e,t,l,n,a);case 3:e:{if(et(t,t.stateNode.containerInfo),e===null)throw Error(f(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Wu(e,t),ln(t,l,null,a);var s=t.memoizedState;if(l=s.cache,ra(t,He,l),l!==i.cache&&Qu(t,[He],a,!0),an(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=$c(e,t,l,a);break e}else if(l!==n){n=Nt(Error(f(424)),t),Fl(n),t=$c(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=kt(e.firstChild),Ke=t,re=!0,sa=null,Tt=!0,a=Qr(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Oa(),l===n){t=Kt(e,t,a);break e}Fe(e,t,l,a)}t=t.child}return t;case 26:return xi(e,t),e===null?(a=hf(t.type,null,t.pendingProps,null))?t.memoizedState=a:re||(a=t.type,e=t.pendingProps,l=Oi(te.current).createElement(a),l[Ze]=t,l[lt]=e,$e(l,a,e),Ge(l),t.stateNode=l):t.memoizedState=hf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yl(t),e===null&&re&&(l=t.stateNode=cf(t.type,t.pendingProps,te.current),Ke=t,Tt=!0,n=Be,Sa(t.type)?(fo=n,Be=kt(l.firstChild)):Be=n),Fe(e,t,t.pendingProps.children,a),xi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((n=l=Be)&&(l=e0(l,t.type,t.pendingProps,Tt),l!==null?(t.stateNode=l,Ke=t,Be=kt(l.firstChild),Tt=!1,n=!0):n=!1),n||oa(t)),Yl(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,uo(n,i)?l=null:s!==null&&uo(n,s)&&(t.flags|=32),t.memoizedState!==null&&(n=is(e,t,ym,null,null,a),jn._currentValue=n),xi(e,t),Fe(e,t,l,a),t.child;case 6:return e===null&&re&&((e=a=Be)&&(a=t0(a,t.pendingProps,Tt),a!==null?(t.stateNode=a,Ke=t,Be=null,e=!0):e=!1),e||oa(t)),null;case 13:return Wc(e,t,a);case 4:return et(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=La(t,null,l,a):Fe(e,t,l,a),t.child;case 11:return Ic(e,t,t.type,t.pendingProps,a);case 7:return Fe(e,t,t.pendingProps,a),t.child;case 8:return Fe(e,t,t.pendingProps.children,a),t.child;case 12:return Fe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ra(t,t.type,l.value),Fe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ra(t),n=Je(n),l=l(n),t.flags|=1,Fe(e,t,l,a),t.child;case 14:return Gc(e,t,t.type,t.pendingProps,a);case 15:return Xc(e,t,t.type,t.pendingProps,a);case 19:return ed(e,t,a);case 31:return Nm(e,t,a);case 22:return Qc(e,t,a,t.pendingProps);case 24:return Ra(t),l=Je(He),e===null?(n=Ju(),n===null&&(n=Ee,i=Zu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},$u(t),ra(t,He,n)):((e.lanes&a)!==0&&(Wu(e,t),ln(t,null,null,a),an()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ra(t,He,l)):(l=i.cache,ra(t,He,l),l!==n.cache&&Qu(t,[He],a,!0))),Fe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function Jt(e){e.flags|=4}function _s(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(kd())e.flags|=8192;else throw Va=ni,Fu}else e.flags&=-16777217}function ad(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gf(t))if(kd())e.flags|=8192;else throw Va=ni,Fu}function wi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Uo():536870912,e.lanes|=t,Nl|=t)}function cn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Am(e,t,a){var l=t.pendingProps;switch(Vu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Xt(He),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(cl(t)?Jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Iu())),ze(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Jt(t),i!==null?(ze(t),ad(t,i)):(ze(t),_s(t,n,null,l,a))):i?i!==e.memoizedState?(Jt(t),ze(t),ad(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Jt(t),ze(t),_s(t,n,e,l,a)),null;case 27:if(Mn(t),a=te.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(f(166));return ze(t),null}e=D.current,cl(t)?Ur(t):(e=cf(n,l,a),t.stateNode=e,Jt(t))}return ze(t),null;case 5:if(Mn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(f(166));return ze(t),null}if(i=D.current,cl(t))Ur(t);else{var s=Oi(te.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?s.createElement(n,{is:l.is}):s.createElement(n)}}i[Ze]=t,i[lt]=l;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch($e(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Jt(t)}}return ze(t),_s(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(f(166));if(e=te.current,cl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Wd(e.nodeValue,a)),e||oa(t,!0)}else e=Oi(e).createTextNode(l),e[Ze]=t,t.stateNode=e}return ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=cl(t),a!==null){if(e===null){if(!l)throw Error(f(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[Ze]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else a=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(f(558))}return ze(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=cl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(f(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));n[Ze]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),wi(t,t.updateQueue),ze(t),null);case 4:return Oe(),e===null&&to(t.stateNode.containerInfo),ze(t),null;case 10:return Xt(t.type),ze(t),null;case 19:if(p(De),l=t.memoizedState,l===null)return ze(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)cn(l,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=oi(e),i!==null){for(t.flags|=128,cn(l,!1),e=i.updateQueue,t.updateQueue=e,wi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)zr(a,e),a=a.sibling;return A(De,De.current&1|2),re&&It(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ct()>Ti&&(t.flags|=128,n=!0,cn(l,!1),t.lanes=4194304)}else{if(!n)if(e=oi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,wi(t,e),cn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!re)return ze(t),null}else 2*ct()-l.renderingStartTime>Ti&&a!==536870912&&(t.flags|=128,n=!0,cn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ct(),e.sibling=null,a=De.current,A(De,n?a&1|2:a&1),re&&It(t,l.treeForkCount),e):(ze(t),null);case 22:case 23:return bt(t),as(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&wi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&p(Ha),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Xt(He),ze(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function Tm(e,t){switch(Vu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xt(He),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Mn(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(f(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return p(De),null;case 4:return Oe(),null;case 10:return Xt(t.type),null;case 22:case 23:return bt(t),as(),e!==null&&p(Ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xt(He),null;case 25:return null;default:return null}}function ld(e,t){switch(Vu(t),t.tag){case 3:Xt(He),Oe();break;case 26:case 27:case 5:Mn(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:p(De);break;case 10:Xt(t.type);break;case 22:case 23:bt(t),as(),e!==null&&p(Ha);break;case 24:Xt(He)}}function dn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,s=a.inst;l=i(),s.destroy=l}a=a.next}while(a!==n)}}catch(o){we(t,t.return,o)}}function ya(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var s=l.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,n=t;var d=a,b=o;try{b()}catch(S){we(n,d,S)}}}l=l.next}while(l!==i)}}catch(S){we(t,t.return,S)}}function nd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Kr(t,a)}catch(l){we(e,e.return,l)}}}function id(e,t,a){a.props=Ga(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){we(e,t,l)}}function fn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){we(e,t,n)}}function Ut(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){we(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){we(e,t,n)}else a.current=null}function ud(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){we(e,e.return,n)}}function Ys(e,t,a){try{var l=e.stateNode;Km(l,e.type,a,t),l[lt]=t}catch(n){we(e,e.return,n)}}function sd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sa(e.type)||e.tag===4}function Us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Os(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qt));else if(l!==4&&(l===27&&Sa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Os(e,t,a),e=e.sibling;e!==null;)Os(e,t,a),e=e.sibling}function Si(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Sa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Si(e,t,a),e=e.sibling;e!==null;)Si(e,t,a),e=e.sibling}function od(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$e(t,l,a),t[Ze]=e,t[lt]=a}catch(i){we(e,e.return,i)}}var Ft=!1,Le=!1,Ds=!1,rd=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Em(e,t){if(e=e.containerInfo,no=Ii,e=wr(e),zu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,o=-1,d=-1,b=0,S=0,T=e,g=null;t:for(;;){for(var v;T!==a||n!==0&&T.nodeType!==3||(o=s+n),T!==i||l!==0&&T.nodeType!==3||(d=s+l),T.nodeType===3&&(s+=T.nodeValue.length),(v=T.firstChild)!==null;)g=T,T=v;for(;;){if(T===e)break t;if(g===a&&++b===n&&(o=s),g===i&&++S===l&&(d=s),(v=T.nextSibling)!==null)break;T=g,g=T.parentNode}T=v}a=o===-1||d===-1?null:{start:o,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(io={focusedElem:e,selectionRange:a},Ii=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var V=Ga(a.type,n);e=l.getSnapshotBeforeUpdate(V,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(K){we(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)oo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function cd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Wt(e,a),l&4&&dn(5,a);break;case 1:if(Wt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){we(a,a.return,s)}else{var n=Ga(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){we(a,a.return,s)}}l&64&&nd(a),l&512&&fn(a,a.return);break;case 3:if(Wt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Kr(e,t)}catch(s){we(a,a.return,s)}}break;case 27:t===null&&l&4&&od(a);case 26:case 5:Wt(e,a),t===null&&l&4&&ud(a),l&512&&fn(a,a.return);break;case 12:Wt(e,a);break;case 31:Wt(e,a),l&4&&hd(e,a);break;case 13:Wt(e,a),l&4&&md(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Om.bind(null,a),a0(e,a))));break;case 22:if(l=a.memoizedState!==null||Ft,!l){t=t!==null&&t.memoizedState!==null||Le,n=Ft;var i=Le;Ft=l,(Le=t)&&!i?Pt(e,a,(a.subtreeFlags&8772)!==0):Wt(e,a),Ft=n,Le=i}break;case 30:break;default:Wt(e,a)}}function dd(e){var t=e.alternate;t!==null&&(e.alternate=null,dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,it=!1;function $t(e,t,a){for(a=a.child;a!==null;)fd(e,t,a),a=a.sibling}function fd(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Ul,a)}catch{}switch(a.tag){case 26:Le||Ut(a,t),$t(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Le||Ut(a,t);var l=Ce,n=it;Sa(a.type)&&(Ce=a.stateNode,it=!1),$t(e,t,a),wn(a.stateNode),Ce=l,it=n;break;case 5:Le||Ut(a,t);case 6:if(l=Ce,n=it,Ce=null,$t(e,t,a),Ce=l,it=n,Ce!==null)if(it)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(a.stateNode)}catch(i){we(a,t,i)}else try{Ce.removeChild(a.stateNode)}catch(i){we(a,t,i)}break;case 18:Ce!==null&&(it?(e=Ce,nf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cl(e)):nf(Ce,a.stateNode));break;case 4:l=Ce,n=it,Ce=a.stateNode.containerInfo,it=!0,$t(e,t,a),Ce=l,it=n;break;case 0:case 11:case 14:case 15:ya(2,a,t),Le||ya(4,a,t),$t(e,t,a);break;case 1:Le||(Ut(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&id(a,t,l)),$t(e,t,a);break;case 21:$t(e,t,a);break;case 22:Le=(l=Le)||a.memoizedState!==null,$t(e,t,a),Le=l;break;default:$t(e,t,a)}}function hd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cl(e)}catch(a){we(t,t.return,a)}}}function md(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(a){we(t,t.return,a)}}function km(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rd),t;default:throw Error(f(435,e.tag))}}function Ni(e,t){var a=km(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Dm.bind(null,e,l);l.then(n,n)}})}function ut(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(Sa(o.type)){Ce=o.stateNode,it=!1;break e}break;case 5:Ce=o.stateNode,it=!1;break e;case 3:case 4:Ce=o.stateNode.containerInfo,it=!0;break e}o=o.return}if(Ce===null)throw Error(f(160));fd(i,s,n),Ce=null,it=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}var Ct=null;function yd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),st(e),l&4&&(ya(3,e,e.return),dn(3,e),ya(5,e,e.return));break;case 1:ut(t,e),st(e),l&512&&(Le||a===null||Ut(a,a.return)),l&64&&Ft&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ct;if(ut(t,e),st(e),l&512&&(Le||a===null||Ut(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Rl]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),$e(i,l,a),i[Ze]=e,Ge(i),l=i;break e;case"link":var s=bf("link","href",n).get(l+(a.href||""));if(s){for(var o=0;o<s.length;o++)if(i=s[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(o,1);break t}}i=n.createElement(l),$e(i,l,a),n.head.appendChild(i);break;case"meta":if(s=bf("meta","content",n).get(l+(a.content||""))){for(o=0;o<s.length;o++)if(i=s[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(o,1);break t}}i=n.createElement(l),$e(i,l,a),n.head.appendChild(i);break;default:throw Error(f(468,l))}i[Ze]=e,Ge(i),l=i}e.stateNode=l}else pf(n,e.type,e.stateNode);else e.stateNode=yf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?pf(n,e.type,e.stateNode):yf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ys(e,e.memoizedProps,a.memoizedProps)}break;case 27:ut(t,e),st(e),l&512&&(Le||a===null||Ut(a,a.return)),a!==null&&l&4&&Ys(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ut(t,e),st(e),l&512&&(Le||a===null||Ut(a,a.return)),e.flags&32){n=e.stateNode;try{el(n,"")}catch(V){we(e,e.return,V)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Ys(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Ds=!0);break;case 6:if(ut(t,e),st(e),l&4){if(e.stateNode===null)throw Error(f(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(V){we(e,e.return,V)}}break;case 3:if(Hi=null,n=Ct,Ct=Di(t.containerInfo),ut(t,e),Ct=n,st(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(V){we(e,e.return,V)}Ds&&(Ds=!1,bd(e));break;case 4:l=Ct,Ct=Di(e.stateNode.containerInfo),ut(t,e),st(e),Ct=l;break;case 12:ut(t,e),st(e);break;case 31:ut(t,e),st(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ni(e,l)));break;case 13:ut(t,e),st(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ai=ct()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ni(e,l)));break;case 22:n=e.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,b=Ft,S=Le;if(Ft=b||n,Le=S||d,ut(t,e),Le=S,Ft=b,st(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||d||Ft||Le||Xa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(i=d.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=d.stateNode;var T=d.memoizedProps.style,g=T!=null&&T.hasOwnProperty("display")?T.display:null;o.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(V){we(d,d.return,V)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=n?"":d.memoizedProps}catch(V){we(d,d.return,V)}}}else if(t.tag===18){if(a===null){d=t;try{var v=d.stateNode;n?uf(v,!0):uf(d.stateNode,!1)}catch(V){we(d,d.return,V)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ni(e,a))));break;case 19:ut(t,e),st(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ni(e,l)));break;case 30:break;case 21:break;default:ut(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(sd(l)){a=l;break}l=l.return}if(a==null)throw Error(f(160));switch(a.tag){case 27:var n=a.stateNode,i=Us(e);Si(e,i,n);break;case 5:var s=a.stateNode;a.flags&32&&(el(s,""),a.flags&=-33);var o=Us(e);Si(e,o,s);break;case 3:case 4:var d=a.stateNode.containerInfo,b=Us(e);Os(e,b,d);break;default:throw Error(f(161))}}catch(S){we(e,e.return,S)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cd(e,t.alternate,t),t=t.sibling}function Xa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ya(4,t,t.return),Xa(t);break;case 1:Ut(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&id(t,t.return,a),Xa(t);break;case 27:wn(t.stateNode);case 26:case 5:Ut(t,t.return),Xa(t);break;case 22:t.memoizedState===null&&Xa(t);break;case 30:Xa(t);break;default:Xa(t)}e=e.sibling}}function Pt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:Pt(n,i,a),dn(4,i);break;case 1:if(Pt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(b){we(l,l.return,b)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var d=n.shared.hiddenCallbacks;if(d!==null)for(n.shared.hiddenCallbacks=null,n=0;n<d.length;n++)Zr(d[n],o)}catch(b){we(l,l.return,b)}}a&&s&64&&nd(i),fn(i,i.return);break;case 27:od(i);case 26:case 5:Pt(n,i,a),a&&l===null&&s&4&&ud(i),fn(i,i.return);break;case 12:Pt(n,i,a);break;case 31:Pt(n,i,a),a&&s&4&&hd(n,i);break;case 13:Pt(n,i,a),a&&s&4&&md(n,i);break;case 22:i.memoizedState===null&&Pt(n,i,a),fn(i,i.return);break;case 30:break;default:Pt(n,i,a)}t=t.sibling}}function Rs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$l(a))}function Hs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e))}function Mt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pd(e,t,a,l),t=t.sibling}function pd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,a,l),n&2048&&dn(9,t);break;case 1:Mt(e,t,a,l);break;case 3:Mt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e)));break;case 12:if(n&2048){Mt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,o=i.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){we(t,t.return,d)}}else Mt(e,t,a,l);break;case 31:Mt(e,t,a,l);break;case 13:Mt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?Mt(e,t,a,l):hn(e,t):i._visibility&2?Mt(e,t,a,l):(i._visibility|=2,vl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Rs(s,t);break;case 24:Mt(e,t,a,l),n&2048&&Hs(t.alternate,t);break;default:Mt(e,t,a,l)}}function vl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,o=a,d=l,b=s.flags;switch(s.tag){case 0:case 11:case 15:vl(i,s,o,d,n),dn(8,s);break;case 23:break;case 22:var S=s.stateNode;s.memoizedState!==null?S._visibility&2?vl(i,s,o,d,n):hn(i,s):(S._visibility|=2,vl(i,s,o,d,n)),n&&b&2048&&Rs(s.alternate,s);break;case 24:vl(i,s,o,d,n),n&&b&2048&&Hs(s.alternate,s);break;default:vl(i,s,o,d,n)}t=t.sibling}}function hn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:hn(a,l),n&2048&&Rs(l.alternate,l);break;case 24:hn(a,l),n&2048&&Hs(l.alternate,l);break;default:hn(a,l)}t=t.sibling}}var mn=8192;function wl(e,t,a){if(e.subtreeFlags&mn)for(e=e.child;e!==null;)gd(e,t,a),e=e.sibling}function gd(e,t,a){switch(e.tag){case 26:wl(e,t,a),e.flags&mn&&e.memoizedState!==null&&m0(a,Ct,e.memoizedState,e.memoizedProps);break;case 5:wl(e,t,a);break;case 3:case 4:var l=Ct;Ct=Di(e.stateNode.containerInfo),wl(e,t,a),Ct=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=mn,mn=16777216,wl(e,t,a),mn=l):wl(e,t,a));break;default:wl(e,t,a)}}function xd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,wd(l,e)}xd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vd(e),e=e.sibling}function vd(e){switch(e.tag){case 0:case 11:case 15:yn(e),e.flags&2048&&ya(9,e,e.return);break;case 3:yn(e);break;case 12:yn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ji(e)):yn(e);break;default:yn(e)}}function ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,wd(l,e)}xd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ya(8,t,t.return),ji(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ji(t));break;default:ji(t)}e=e.sibling}}function wd(e,t){for(;Xe!==null;){var a=Xe;switch(a.tag){case 0:case 11:case 15:ya(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$l(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Xe=l;else e:for(a=e;Xe!==null;){l=Xe;var n=l.sibling,i=l.return;if(dd(l),l===a){Xe=null;break e}if(n!==null){n.return=i,Xe=n;break e}Xe=i}}}var Bm={getCacheForType:function(e){var t=Je(He),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Je(He).controller.signal}},zm=typeof WeakMap=="function"?WeakMap:Map,be=0,Ee=null,ae=null,ie=0,ve=0,pt=null,ba=!1,Sl=!1,qs=!1,ea=0,Ue=0,pa=0,Qa=0,Vs=0,gt=0,Nl=0,bn=null,ot=null,Ls=!1,Ai=0,Sd=0,Ti=1/0,Ei=null,ga=null,Ie=0,xa=null,jl=null,ta=0,Is=0,Gs=null,Nd=null,pn=0,Xs=null;function xt(){return(be&2)!==0&&ie!==0?ie&-ie:w.T!==null?$s():Ho()}function jd(){if(gt===0)if((ie&536870912)===0||re){var e=Un;Un<<=1,(Un&3932160)===0&&(Un=262144),gt=e}else gt=536870912;return e=yt.current,e!==null&&(e.flags|=32),gt}function rt(e,t,a){(e===Ee&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Al(e,0),va(e,ie,gt,!1)),Dl(e,a),((be&2)===0||e!==Ee)&&(e===Ee&&((be&2)===0&&(Qa|=a),Ue===4&&va(e,ie,gt,!1)),Ot(e))}function Ad(e,t,a){if((be&6)!==0)throw Error(f(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ol(e,t),n=l?_m(e,t):Zs(e,t,!0),i=l;do{if(n===0){Sl&&!l&&va(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Cm(a)){n=Zs(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var o=e;n=bn;var d=o.current.memoizedState.isDehydrated;if(d&&(Al(o,s).flags|=256),s=Zs(o,s,!1),s!==2){if(qs&&!d){o.errorRecoveryDisabledLanes|=i,Qa|=i,n=4;break e}i=ot,ot=n,i!==null&&(ot===null?ot=i:ot.push.apply(ot,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){Al(e,0),va(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:va(l,t,gt,!ba);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(n=Ai+300-ct(),10<n)){if(va(l,t,gt,!ba),Dn(l,0,!0)!==0)break e;ta=t,l.timeoutHandle=af(Td.bind(null,l,a,ot,Ei,Ls,t,gt,Qa,Nl,ba,i,"Throttled",-0,0),n);break e}Td(l,a,ot,Ei,Ls,t,gt,Qa,Nl,ba,i,null,-0,0)}}break}while(!0);Ot(e)}function Td(e,t,a,l,n,i,s,o,d,b,S,T,g,v){if(e.timeoutHandle=-1,T=t.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},gd(t,i,T);var V=(i&62914560)===i?Ai-ct():(i&4194048)===i?Sd-ct():0;if(V=y0(T,V),V!==null){ta=i,e.cancelPendingCommit=V(Yd.bind(null,e,t,i,a,l,n,s,o,d,S,T,null,g,v)),va(e,i,s,!b);return}}Yd(e,t,i,a,l,n,s,o,d)}function Cm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ht(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function va(e,t,a,l){t&=~Vs,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ft(n),s=1<<i;l[i]=-1,n&=~s}a!==0&&Oo(e,a,t)}function ki(){return(be&6)===0?(gn(0),!1):!0}function Qs(){if(ae!==null){if(ve===0)var e=ae.return;else e=ae,Gt=Da=null,os(e),yl=null,Pl=0,e=ae;for(;e!==null;)ld(e.alternate,e),e=e.return;ae=null}}function Al(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,$m(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,Qs(),Ee=e,ae=a=Lt(e.current,null),ie=t,ve=0,pt=null,ba=!1,Sl=Ol(e,t),qs=!1,Nl=gt=Vs=Qa=pa=Ue=0,ot=bn=null,Ls=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ft(l),i=1<<n;t|=e[n],l&=~i}return ea=t,Jn(),a}function Ed(e,t){P=null,w.H=on,t===ml||t===li?(t=Ir(),ve=3):t===Fu?(t=Ir(),ve=4):ve=t===js?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,ae===null&&(Ue=1,pi(e,Nt(t,e.current)))}function kd(){var e=yt.current;return e===null?!0:(ie&4194048)===ie?Et===null:(ie&62914560)===ie||(ie&536870912)!==0?e===Et:!1}function Bd(){var e=w.H;return w.H=on,e===null?on:e}function zd(){var e=w.A;return w.A=Bm,e}function Bi(){Ue=4,ba||(ie&4194048)!==ie&&yt.current!==null||(Sl=!0),(pa&134217727)===0&&(Qa&134217727)===0||Ee===null||va(Ee,ie,gt,!1)}function Zs(e,t,a){var l=be;be|=2;var n=Bd(),i=zd();(Ee!==e||ie!==t)&&(Ei=null,Al(e,t)),t=!1;var s=Ue;e:do try{if(ve!==0&&ae!==null){var o=ae,d=pt;switch(ve){case 8:Qs(),s=6;break e;case 3:case 2:case 9:case 6:yt.current===null&&(t=!0);var b=ve;if(ve=0,pt=null,Tl(e,o,d,b),a&&Sl){s=0;break e}break;default:b=ve,ve=0,pt=null,Tl(e,o,d,b)}}Mm(),s=Ue;break}catch(S){Ed(e,S)}while(!0);return t&&e.shellSuspendCounter++,Gt=Da=null,be=l,w.H=n,w.A=i,ae===null&&(Ee=null,ie=0,Jn()),s}function Mm(){for(;ae!==null;)Cd(ae)}function _m(e,t){var a=be;be|=2;var l=Bd(),n=zd();Ee!==e||ie!==t?(Ei=null,Ti=ct()+500,Al(e,t)):Sl=Ol(e,t);e:do try{if(ve!==0&&ae!==null){t=ae;var i=pt;t:switch(ve){case 1:ve=0,pt=null,Tl(e,t,i,1);break;case 2:case 9:if(Vr(i)){ve=0,pt=null,Md(t);break}t=function(){ve!==2&&ve!==9||Ee!==e||(ve=7),Ot(e)},i.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Vr(i)?(ve=0,pt=null,Md(t)):(ve=0,pt=null,Tl(e,t,i,7));break;case 5:var s=null;switch(ae.tag){case 26:s=ae.memoizedState;case 5:case 27:var o=ae;if(s?gf(s):o.stateNode.complete){ve=0,pt=null;var d=o.sibling;if(d!==null)ae=d;else{var b=o.return;b!==null?(ae=b,zi(b)):ae=null}break t}}ve=0,pt=null,Tl(e,t,i,5);break;case 6:ve=0,pt=null,Tl(e,t,i,6);break;case 8:Qs(),Ue=6;break e;default:throw Error(f(462))}}Ym();break}catch(S){Ed(e,S)}while(!0);return Gt=Da=null,w.H=l,w.A=n,be=a,ae!==null?0:(Ee=null,ie=0,Jn(),Ue)}function Ym(){for(;ae!==null&&!lh();)Cd(ae)}function Cd(e){var t=td(e.alternate,e,ea);e.memoizedProps=e.pendingProps,t===null?zi(e):ae=t}function Md(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Jc(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Jc(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:os(t);default:ld(a,t),t=ae=zr(t,ea),t=td(a,t,ea)}e.memoizedProps=e.pendingProps,t===null?zi(e):ae=t}function Tl(e,t,a,l){Gt=Da=null,os(t),yl=null,Pl=0;var n=t.return;try{if(Sm(e,n,t,a,ie)){Ue=1,pi(e,Nt(a,e.current)),ae=null;return}}catch(i){if(n!==null)throw ae=n,i;Ue=1,pi(e,Nt(a,e.current)),ae=null;return}t.flags&32768?(re||l===1?e=!0:Sl||(ie&536870912)!==0?e=!1:(ba=e=!0,(l===2||l===9||l===3||l===6)&&(l=yt.current,l!==null&&l.tag===13&&(l.flags|=16384))),_d(t,e)):zi(t)}function zi(e){var t=e;do{if((t.flags&32768)!==0){_d(t,ba);return}e=t.return;var a=Am(t.alternate,t,ea);if(a!==null){ae=a;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);Ue===0&&(Ue=5)}function _d(e,t){do{var a=Tm(e.alternate,e);if(a!==null){a.flags&=32767,ae=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=a}while(e!==null);Ue=6,ae=null}function Yd(e,t,a,l,n,i,s,o,d){e.cancelPendingCommit=null;do Ci();while(Ie!==0);if((be&6)!==0)throw Error(f(327));if(t!==null){if(t===e.current)throw Error(f(177));if(i=t.lanes|t.childLanes,i|=Uu,hh(e,a,i,s,o,d),e===Ee&&(ae=Ee=null,ie=0),jl=t,xa=e,ta=a,Is=i,Gs=n,Nd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Rm(_n,function(){return Hd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=w.T,w.T=null,n=U.p,U.p=2,s=be,be|=4;try{Em(e,t,a)}finally{be=s,U.p=n,w.T=l}}Ie=1,Ud(),Od(),Dd()}}function Ud(){if(Ie===1){Ie=0;var e=xa,t=jl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var l=U.p;U.p=2;var n=be;be|=4;try{yd(t,e);var i=io,s=wr(e.containerInfo),o=i.focusedElem,d=i.selectionRange;if(s!==o&&o&&o.ownerDocument&&vr(o.ownerDocument.documentElement,o)){if(d!==null&&zu(o)){var b=d.start,S=d.end;if(S===void 0&&(S=b),"selectionStart"in o)o.selectionStart=b,o.selectionEnd=Math.min(S,o.value.length);else{var T=o.ownerDocument||document,g=T&&T.defaultView||window;if(g.getSelection){var v=g.getSelection(),V=o.textContent.length,K=Math.min(d.start,V),je=d.end===void 0?K:Math.min(d.end,V);!v.extend&&K>je&&(s=je,je=K,K=s);var m=xr(o,K),h=xr(o,je);if(m&&h&&(v.rangeCount!==1||v.anchorNode!==m.node||v.anchorOffset!==m.offset||v.focusNode!==h.node||v.focusOffset!==h.offset)){var y=T.createRange();y.setStart(m.node,m.offset),v.removeAllRanges(),K>je?(v.addRange(y),v.extend(h.node,h.offset)):(y.setEnd(h.node,h.offset),v.addRange(y))}}}}for(T=[],v=o;v=v.parentNode;)v.nodeType===1&&T.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<T.length;o++){var j=T[o];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Ii=!!no,io=no=null}finally{be=n,U.p=l,w.T=a}}e.current=t,Ie=2}}function Od(){if(Ie===2){Ie=0;var e=xa,t=jl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var l=U.p;U.p=2;var n=be;be|=4;try{cd(e,t.alternate,t)}finally{be=n,U.p=l,w.T=a}}Ie=3}}function Dd(){if(Ie===4||Ie===3){Ie=0,nh();var e=xa,t=jl,a=ta,l=Nd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ie=5:(Ie=0,jl=xa=null,Rd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ga=null),du(a),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=w.T,n=U.p,U.p=2,w.T=null;try{for(var i=e.onRecoverableError,s=0;s<l.length;s++){var o=l[s];i(o.value,{componentStack:o.stack})}}finally{w.T=t,U.p=n}}(ta&3)!==0&&Ci(),Ot(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Xs?pn++:(pn=0,Xs=e):pn=0,gn(0)}}function Rd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$l(t)))}function Ci(){return Ud(),Od(),Dd(),Hd()}function Hd(){if(Ie!==5)return!1;var e=xa,t=Is;Is=0;var a=du(ta),l=w.T,n=U.p;try{U.p=32>a?32:a,w.T=null,a=Gs,Gs=null;var i=xa,s=ta;if(Ie=0,jl=xa=null,ta=0,(be&6)!==0)throw Error(f(331));var o=be;if(be|=4,vd(i.current),pd(i,i.current,s,a),be=o,gn(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Ul,i)}catch{}return!0}finally{U.p=n,w.T=l,Rd(e,t)}}function qd(e,t,a){t=Nt(a,t),t=Ns(e.stateNode,t,2),e=fa(e,t,2),e!==null&&(Dl(e,2),Ot(e))}function we(e,t,a){if(e.tag===3)qd(e,e,a);else for(;t!==null;){if(t.tag===3){qd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ga===null||!ga.has(l))){e=Nt(a,e),a=Vc(2),l=fa(t,a,2),l!==null&&(Lc(a,l,t,e),Dl(l,2),Ot(l));break}}t=t.return}}function Ks(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new zm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(qs=!0,n.add(a),e=Um.bind(null,e,t,a),t.then(e,e))}function Um(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ee===e&&(ie&a)===a&&(Ue===4||Ue===3&&(ie&62914560)===ie&&300>ct()-Ai?(be&2)===0&&Al(e,0):Vs|=a,Nl===ie&&(Nl=0)),Ot(e)}function Vd(e,t){t===0&&(t=Uo()),e=Ya(e,t),e!==null&&(Dl(e,t),Ot(e))}function Om(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vd(e,a)}function Dm(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(t),Vd(e,a)}function Rm(e,t){return su(e,t)}var Mi=null,El=null,Js=!1,_i=!1,Fs=!1,wa=0;function Ot(e){e!==El&&e.next===null&&(El===null?Mi=El=e:El=El.next=e),_i=!0,Js||(Js=!0,qm())}function gn(e,t){if(!Fs&&_i){Fs=!0;do for(var a=!1,l=Mi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var s=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-ft(42|e)+1)-1,i&=n&~(s&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Xd(l,i))}else i=ie,i=Dn(l,l===Ee?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ol(l,i)||(a=!0,Xd(l,i));l=l.next}while(a);Fs=!1}}function Hm(){Ld()}function Ld(){_i=Js=!1;var e=0;wa!==0&&Fm()&&(e=wa);for(var t=ct(),a=null,l=Mi;l!==null;){var n=l.next,i=Id(l,t);i===0?(l.next=null,a===null?Mi=n:a.next=n,n===null&&(El=a)):(a=l,(e!==0||(i&3)!==0)&&(_i=!0)),l=n}Ie!==0&&Ie!==5||gn(e),wa!==0&&(wa=0)}function Id(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-ft(i),o=1<<s,d=n[s];d===-1?((o&a)===0||(o&l)!==0)&&(n[s]=fh(o,t)):d<=t&&(e.expiredLanes|=o),i&=~o}if(t=Ee,a=ie,a=Dn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ou(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ol(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ou(l),du(a)){case 2:case 8:a=_o;break;case 32:a=_n;break;case 268435456:a=Yo;break;default:a=_n}return l=Gd.bind(null,e),a=su(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ou(l),e.callbackPriority=2,e.callbackNode=null,2}function Gd(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ci()&&e.callbackNode!==a)return null;var l=ie;return l=Dn(e,e===Ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ad(e,l,t),Id(e,ct()),e.callbackNode!=null&&e.callbackNode===a?Gd.bind(null,e):null)}function Xd(e,t){if(Ci())return null;Ad(e,t,!0)}function qm(){Wm(function(){(be&6)!==0?su(Mo,Hm):Ld()})}function $s(){if(wa===0){var e=fl;e===0&&(e=Yn,Yn<<=1,(Yn&261888)===0&&(Yn=256)),wa=e}return wa}function Qd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vn(""+e)}function Zd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Vm(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Qd((n[lt]||null).action),s=l.submitter;s&&(t=(t=s[lt]||null)?Qd(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var o=new Xn("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(wa!==0){var d=s?Zd(n,s):new FormData(n);ps(a,{pending:!0,data:d,method:n.method,action:i},null,d)}}else typeof i=="function"&&(o.preventDefault(),d=s?Zd(n,s):new FormData(n),ps(a,{pending:!0,data:d,method:n.method,action:i},i,d))},currentTarget:n}]})}}for(var Ws=0;Ws<Yu.length;Ws++){var Ps=Yu[Ws],Lm=Ps.toLowerCase(),Im=Ps[0].toUpperCase()+Ps.slice(1);zt(Lm,"on"+Im)}zt(jr,"onAnimationEnd"),zt(Ar,"onAnimationIteration"),zt(Tr,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(im,"onTransitionRun"),zt(um,"onTransitionStart"),zt(sm,"onTransitionCancel"),zt(Er,"onTransitionEnd"),Wa("onMouseEnter",["mouseout","mouseover"]),Wa("onMouseLeave",["mouseout","mouseover"]),Wa("onPointerEnter",["pointerout","pointerover"]),Wa("onPointerLeave",["pointerout","pointerover"]),za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),za("onBeforeInput",["compositionend","keypress","textInput","paste"]),za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xn));function Kd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var s=l.length-1;0<=s;s--){var o=l[s],d=o.instance,b=o.currentTarget;if(o=o.listener,d!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=b;try{i(n)}catch(S){Kn(S)}n.currentTarget=null,i=d}else for(s=0;s<l.length;s++){if(o=l[s],d=o.instance,b=o.currentTarget,o=o.listener,d!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=b;try{i(n)}catch(S){Kn(S)}n.currentTarget=null,i=d}}}}function le(e,t){var a=t[fu];a===void 0&&(a=t[fu]=new Set);var l=e+"__bubble";a.has(l)||(Jd(t,e,2,!1),a.add(l))}function eo(e,t,a){var l=0;t&&(l|=4),Jd(a,e,l,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function to(e){if(!e[Yi]){e[Yi]=!0,Lo.forEach(function(a){a!=="selectionchange"&&(Gm.has(a)||eo(a,!1,e),eo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,eo("selectionchange",!1,t))}}function Jd(e,t,a,l){switch(Af(t)){case 2:var n=g0;break;case 8:n=x0;break;default:n=po}a=n.bind(null,t,a,e),n=void 0,!wu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function ao(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var o=l.stateNode.containerInfo;if(o===n)break;if(s===4)for(s=l.return;s!==null;){var d=s.tag;if((d===3||d===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;o!==null;){if(s=Ja(o),s===null)return;if(d=s.tag,d===5||d===6||d===26||d===27){l=i=s;continue e}o=o.parentNode}}l=l.return}er(function(){var b=i,S=xu(a),T=[];e:{var g=kr.get(e);if(g!==void 0){var v=Xn,V=e;switch(e){case"keypress":if(In(a)===0)break e;case"keydown":case"keyup":v=Dh;break;case"focusin":V="focus",v=Au;break;case"focusout":V="blur",v=Au;break;case"beforeblur":case"afterblur":v=Au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=lr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=qh;break;case jr:case Ar:case Tr:v=kh;break;case Er:v=Lh;break;case"scroll":case"scrollend":v=Nh;break;case"wheel":v=Gh;break;case"copy":case"cut":case"paste":v=zh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ir;break;case"toggle":case"beforetoggle":v=Qh}var K=(t&4)!==0,je=!K&&(e==="scroll"||e==="scrollend"),m=K?g!==null?g+"Capture":null:g;K=[];for(var h=b,y;h!==null;){var j=h;if(y=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||y===null||m===null||(j=ql(h,m),j!=null&&K.push(vn(h,j,y))),je)break;h=h.return}0<K.length&&(g=new v(g,V,null,a,S),T.push({event:g,listeners:K}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&a!==gu&&(V=a.relatedTarget||a.fromElement)&&(Ja(V)||V[Ka]))break e;if((v||g)&&(g=S.window===S?S:(g=S.ownerDocument)?g.defaultView||g.parentWindow:window,v?(V=a.relatedTarget||a.toElement,v=b,V=V?Ja(V):null,V!==null&&(je=M(V),K=V.tag,V!==je||K!==5&&K!==27&&K!==6)&&(V=null)):(v=null,V=b),v!==V)){if(K=lr,j="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(K=ir,j="onPointerLeave",m="onPointerEnter",h="pointer"),je=v==null?g:Hl(v),y=V==null?g:Hl(V),g=new K(j,h+"leave",v,a,S),g.target=je,g.relatedTarget=y,j=null,Ja(S)===b&&(K=new K(m,h+"enter",V,a,S),K.target=y,K.relatedTarget=je,j=K),je=j,v&&V)t:{for(K=Xm,m=v,h=V,y=0,j=m;j;j=K(j))y++;j=0;for(var X=h;X;X=K(X))j++;for(;0<y-j;)m=K(m),y--;for(;0<j-y;)h=K(h),j--;for(;y--;){if(m===h||h!==null&&m===h.alternate){K=m;break t}m=K(m),h=K(h)}K=null}else K=null;v!==null&&Fd(T,g,v,K,!1),V!==null&&je!==null&&Fd(T,je,V,K,!0)}}e:{if(g=b?Hl(b):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var de=hr;else if(dr(g))if(mr)de=am;else{de=em;var L=Ph}else v=g.nodeName,!v||v.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?b&&pu(b.elementType)&&(de=hr):de=tm;if(de&&(de=de(e,b))){fr(T,de,a,S);break e}L&&L(e,g,b),e==="focusout"&&b&&g.type==="number"&&b.memoizedProps.value!=null&&bu(g,"number",g.value)}switch(L=b?Hl(b):window,e){case"focusin":(dr(L)||L.contentEditable==="true")&&(nl=L,Cu=b,Kl=null);break;case"focusout":Kl=Cu=nl=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Sr(T,a,S);break;case"selectionchange":if(nm)break;case"keydown":case"keyup":Sr(T,a,S)}var ee;if(Eu)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else ll?rr(e,a)&&(ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(ur&&a.locale!=="ko"&&(ll||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&ll&&(ee=tr()):(ia=S,Su="value"in ia?ia.value:ia.textContent,ll=!0)),L=Ui(b,ue),0<L.length&&(ue=new nr(ue,e,null,a,S),T.push({event:ue,listeners:L}),ee?ue.data=ee:(ee=cr(a),ee!==null&&(ue.data=ee)))),(ee=Kh?Jh(e,a):Fh(e,a))&&(ue=Ui(b,"onBeforeInput"),0<ue.length&&(L=new nr("onBeforeInput","beforeinput",null,a,S),T.push({event:L,listeners:ue}),L.data=ee)),Vm(T,e,b,a,S)}Kd(T,t)})}function vn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ui(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=ql(e,a),n!=null&&l.unshift(vn(e,n,i)),n=ql(e,t),n!=null&&l.push(vn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Xm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fd(e,t,a,l,n){for(var i=t._reactName,s=[];a!==null&&a!==l;){var o=a,d=o.alternate,b=o.stateNode;if(o=o.tag,d!==null&&d===l)break;o!==5&&o!==26&&o!==27||b===null||(d=b,n?(b=ql(a,i),b!=null&&s.unshift(vn(a,b,d))):n||(b=ql(a,i),b!=null&&s.push(vn(a,b,d)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Qm=/\r\n?/g,Zm=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(Qm,`
`).replace(Zm,"")}function Wd(e,t){return t=$d(t),$d(e)===t}function Ne(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||el(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&el(e,""+l);break;case"className":Hn(e,"class",l);break;case"tabIndex":Hn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Hn(e,a,l);break;case"style":Wo(e,l,i);break;case"data":if(t!=="object"){Hn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Vn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ne(e,t,"name",n.name,n,null),Ne(e,t,"formEncType",n.formEncType,n,null),Ne(e,t,"formMethod",n.formMethod,n,null),Ne(e,t,"formTarget",n.formTarget,n,null)):(Ne(e,t,"encType",n.encType,n,null),Ne(e,t,"method",n.method,n,null),Ne(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Vn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=qt);break;case"onScroll":l!=null&&le("scroll",e);break;case"onScrollEnd":l!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Vn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":le("beforetoggle",e),le("toggle",e),Rn(e,"popover",l);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Rn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wh.get(a)||a,Rn(e,a,l))}}function lo(e,t,a,l,n,i){switch(a){case"style":Wo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"children":typeof l=="string"?el(e,l):(typeof l=="number"||typeof l=="bigint")&&el(e,""+l);break;case"onScroll":l!=null&&le("scroll",e);break;case"onScrollEnd":l!=null&&le("scrollend",e);break;case"onClick":l!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Io.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[lt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Rn(e,a,l)}}}function $e(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:Ne(e,t,i,s,a,null)}}n&&Ne(e,t,"srcSet",a.srcSet,a,null),l&&Ne(e,t,"src",a.src,a,null);return;case"input":le("invalid",e);var o=i=s=n=null,d=null,b=null;for(l in a)if(a.hasOwnProperty(l)){var S=a[l];if(S!=null)switch(l){case"name":n=S;break;case"type":s=S;break;case"checked":d=S;break;case"defaultChecked":b=S;break;case"value":i=S;break;case"defaultValue":o=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(f(137,t));break;default:Ne(e,t,l,S,a,null)}}Ko(e,i,o,d,b,s,n,!1);return;case"select":le("invalid",e),l=s=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:Ne(e,t,n,o,a,null)}t=i,a=s,e.multiple=!!l,t!=null?Pa(e,!!l,t,!1):a!=null&&Pa(e,!!l,a,!0);return;case"textarea":le("invalid",e),i=n=l=null;for(s in a)if(a.hasOwnProperty(s)&&(o=a[s],o!=null))switch(s){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(f(91));break;default:Ne(e,t,s,o,a,null)}Fo(e,l,n,i);return;case"option":for(d in a)if(a.hasOwnProperty(d)&&(l=a[d],l!=null))switch(d){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ne(e,t,d,l,a,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(l=0;l<xn.length;l++)le(xn[l],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:Ne(e,t,b,l,a,null)}return;default:if(pu(t)){for(S in a)a.hasOwnProperty(S)&&(l=a[S],l!==void 0&&lo(e,t,S,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&Ne(e,t,o,l,a,null))}function Km(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,o=null,d=null,b=null,S=null;for(v in a){var T=a[v];if(a.hasOwnProperty(v)&&T!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":d=T;default:l.hasOwnProperty(v)||Ne(e,t,v,null,l,T)}}for(var g in l){var v=l[g];if(T=a[g],l.hasOwnProperty(g)&&(v!=null||T!=null))switch(g){case"type":i=v;break;case"name":n=v;break;case"checked":b=v;break;case"defaultChecked":S=v;break;case"value":s=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(f(137,t));break;default:v!==T&&Ne(e,t,g,v,l,T)}}yu(e,s,o,d,b,S,i,n);return;case"select":v=s=o=g=null;for(i in a)if(d=a[i],a.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":v=d;default:l.hasOwnProperty(i)||Ne(e,t,i,null,l,d)}for(n in l)if(i=l[n],d=a[n],l.hasOwnProperty(n)&&(i!=null||d!=null))switch(n){case"value":g=i;break;case"defaultValue":o=i;break;case"multiple":s=i;default:i!==d&&Ne(e,t,n,i,l,d)}t=o,a=s,l=v,g!=null?Pa(e,!!a,g,!1):!!l!=!!a&&(t!=null?Pa(e,!!a,t,!0):Pa(e,!!a,a?[]:"",!1));return;case"textarea":v=g=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ne(e,t,o,null,l,n)}for(s in l)if(n=l[s],i=a[s],l.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":g=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(f(91));break;default:n!==i&&Ne(e,t,s,n,l,i)}Jo(e,g,v);return;case"option":for(var V in a)if(g=a[V],a.hasOwnProperty(V)&&g!=null&&!l.hasOwnProperty(V))switch(V){case"selected":e.selected=!1;break;default:Ne(e,t,V,null,l,g)}for(d in l)if(g=l[d],v=a[d],l.hasOwnProperty(d)&&g!==v&&(g!=null||v!=null))switch(d){case"selected":e.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:Ne(e,t,d,g,l,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)g=a[K],a.hasOwnProperty(K)&&g!=null&&!l.hasOwnProperty(K)&&Ne(e,t,K,null,l,g);for(b in l)if(g=l[b],v=a[b],l.hasOwnProperty(b)&&g!==v&&(g!=null||v!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(f(137,t));break;default:Ne(e,t,b,g,l,v)}return;default:if(pu(t)){for(var je in a)g=a[je],a.hasOwnProperty(je)&&g!==void 0&&!l.hasOwnProperty(je)&&lo(e,t,je,void 0,l,g);for(S in l)g=l[S],v=a[S],!l.hasOwnProperty(S)||g===v||g===void 0&&v===void 0||lo(e,t,S,g,l,v);return}}for(var m in a)g=a[m],a.hasOwnProperty(m)&&g!=null&&!l.hasOwnProperty(m)&&Ne(e,t,m,null,l,g);for(T in l)g=l[T],v=a[T],!l.hasOwnProperty(T)||g===v||g==null&&v==null||Ne(e,t,T,g,l,v)}function Pd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,s=n.initiatorType,o=n.duration;if(i&&o&&Pd(s)){for(s=0,o=n.responseEnd,l+=1;l<a.length;l++){var d=a[l],b=d.startTime;if(b>o)break;var S=d.transferSize,T=d.initiatorType;S&&Pd(T)&&(d=d.responseEnd,s+=S*(d<o?1:(o-b)/(d-b)))}if(--l,t+=8*(i+s)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var no=null,io=null;function Oi(e){return e.nodeType===9?e:e.ownerDocument}function ef(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function uo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var so=null;function Fm(){var e=window.event;return e&&e.type==="popstate"?e===so?!1:(so=e,!0):(so=null,!1)}var af=typeof setTimeout=="function"?setTimeout:void 0,$m=typeof clearTimeout=="function"?clearTimeout:void 0,lf=typeof Promise=="function"?Promise:void 0,Wm=typeof queueMicrotask=="function"?queueMicrotask:typeof lf<"u"?function(e){return lf.resolve(null).then(e).catch(Pm)}:af;function Pm(e){setTimeout(function(){throw e})}function Sa(e){return e==="head"}function nf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Cl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")wn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,wn(a);for(var i=a.firstChild;i;){var s=i.nextSibling,o=i.nodeName;i[Rl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&wn(e.ownerDocument.body);a=n}while(a);Cl(t)}function uf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function oo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":oo(a),hu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function e0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Rl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function t0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=kt(e.nextSibling),e===null))return null;return e}function sf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=kt(e.nextSibling),e===null))return null;return e}function ro(e){return e.data==="$?"||e.data==="$~"}function co(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function a0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var fo=null;function of(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return kt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function rf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function cf(e,t,a){switch(t=Oi(a),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function wn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hu(e)}var Bt=new Map,df=new Set;function Di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=U.d;U.d={f:l0,r:n0,D:i0,C:u0,L:s0,m:o0,X:c0,S:r0,M:d0};function l0(){var e=aa.f(),t=ki();return e||t}function n0(e){var t=Fa(e);t!==null&&t.tag===5&&t.type==="form"?Ec(t):aa.r(e)}var kl=typeof document>"u"?null:document;function ff(e,t,a){var l=kl;if(l&&typeof t=="string"&&t){var n=wt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),df.has(n)||(df.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),$e(t,"link",e),Ge(t),l.head.appendChild(t)))}}function i0(e){aa.D(e),ff("dns-prefetch",e,null)}function u0(e,t){aa.C(e,t),ff("preconnect",e,t)}function s0(e,t,a){aa.L(e,t,a);var l=kl;if(l&&e&&t){var n='link[rel="preload"][as="'+wt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+wt(a.imageSizes)+'"]')):n+='[href="'+wt(e)+'"]';var i=n;switch(t){case"style":i=Bl(e);break;case"script":i=zl(e)}Bt.has(i)||(e=C({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Bt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Sn(i))||t==="script"&&l.querySelector(Nn(i))||(t=l.createElement("link"),$e(t,"link",e),Ge(t),l.head.appendChild(t)))}}function o0(e,t){aa.m(e,t);var a=kl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+wt(l)+'"][href="'+wt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=zl(e)}if(!Bt.has(i)&&(e=C({rel:"modulepreload",href:e},t),Bt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Nn(i)))return}l=a.createElement("link"),$e(l,"link",e),Ge(l),a.head.appendChild(l)}}}function r0(e,t,a){aa.S(e,t,a);var l=kl;if(l&&e){var n=$a(l).hoistableStyles,i=Bl(e);t=t||"default";var s=n.get(i);if(!s){var o={loading:0,preload:null};if(s=l.querySelector(Sn(i)))o.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Bt.get(i))&&ho(e,a);var d=s=l.createElement("link");Ge(d),$e(d,"link",e),d._p=new Promise(function(b,S){d.onload=b,d.onerror=S}),d.addEventListener("load",function(){o.loading|=1}),d.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Ri(s,t,l)}s={type:"stylesheet",instance:s,count:1,state:o},n.set(i,s)}}}function c0(e,t){aa.X(e,t);var a=kl;if(a&&e){var l=$a(a).hoistableScripts,n=zl(e),i=l.get(n);i||(i=a.querySelector(Nn(n)),i||(e=C({src:e,async:!0},t),(t=Bt.get(n))&&mo(e,t),i=a.createElement("script"),Ge(i),$e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function d0(e,t){aa.M(e,t);var a=kl;if(a&&e){var l=$a(a).hoistableScripts,n=zl(e),i=l.get(n);i||(i=a.querySelector(Nn(n)),i||(e=C({src:e,async:!0,type:"module"},t),(t=Bt.get(n))&&mo(e,t),i=a.createElement("script"),Ge(i),$e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function hf(e,t,a,l){var n=(n=te.current)?Di(n):null;if(!n)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Bl(a.href),a=$a(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Bl(a.href);var i=$a(n).hoistableStyles,s=i.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=n.querySelector(Sn(e)))&&!i._p&&(s.instance=i,s.state.loading=5),Bt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Bt.set(e,a),i||f0(n,e,a,s.state))),t&&l===null)throw Error(f(528,""));return s}if(t&&l!==null)throw Error(f(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=zl(a),a=$a(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function Bl(e){return'href="'+wt(e)+'"'}function Sn(e){return'link[rel="stylesheet"]['+e+"]"}function mf(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function f0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),$e(t,"link",a),Ge(t),e.head.appendChild(t))}function zl(e){return'[src="'+wt(e)+'"]'}function Nn(e){return"script[async]"+e}function yf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+wt(a.href)+'"]');if(l)return t.instance=l,Ge(l),l;var n=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ge(l),$e(l,"style",n),Ri(l,a.precedence,e),t.instance=l;case"stylesheet":n=Bl(a.href);var i=e.querySelector(Sn(n));if(i)return t.state.loading|=4,t.instance=i,Ge(i),i;l=mf(a),(n=Bt.get(n))&&ho(l,n),i=(e.ownerDocument||e).createElement("link"),Ge(i);var s=i;return s._p=new Promise(function(o,d){s.onload=o,s.onerror=d}),$e(i,"link",l),t.state.loading|=4,Ri(i,a.precedence,e),t.instance=i;case"script":return i=zl(a.src),(n=e.querySelector(Nn(i)))?(t.instance=n,Ge(n),n):(l=a,(n=Bt.get(i))&&(l=C({},a),mo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ge(n),$e(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ri(l,a.precedence,e));return t.instance}function Ri(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,s=0;s<l.length;s++){var o=l[s];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ho(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function mo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hi=null;function bf(e,t,a){if(Hi===null){var l=new Map,n=Hi=new Map;n.set(a,l)}else n=Hi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Rl]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var o=l.get(s);o?o.push(i):l.set(s,[i])}}return l}function pf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function h0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function m0(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Bl(l.href),i=t.querySelector(Sn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=qi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ge(i);return}i=t.ownerDocument||t,l=mf(l),(n=Bt.get(n))&&ho(l,n),i=i.createElement("link"),Ge(i);var s=i;s._p=new Promise(function(o,d){s.onload=o,s.onerror=d}),$e(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=qi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var yo=0;function y0(e,t){return e.stylesheets&&e.count===0&&Li(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Li(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&yo===0&&(yo=62500*Jm());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Li(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>yo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function qi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Li(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vi=null;function Li(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vi=new Map,t.forEach(b0,e),Vi=null,qi.call(e))}function b0(e,t){if(!(t.state.loading&4)){var a=Vi.get(e);if(a)var l=a.get(null);else{a=new Map,Vi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),l=s)}l&&a.set(null,l)}n=t.instance,s=n.getAttribute("data-precedence"),i=a.get(s)||l,i===l&&a.set(null,n),a.set(s,n),this.count++,l=qi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var jn={$$typeof:he,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function p0(e,t,a,l,n,i,s,o,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ru(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.hiddenUpdates=ru(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function xf(e,t,a,l,n,i,s,o,d,b,S,T){return e=new p0(e,t,a,s,d,b,S,T,o),t=1,i===!0&&(t|=24),i=mt(3,null,null,t),e.current=i,i.stateNode=e,t=Zu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},$u(i),e}function vf(e){return e?(e=sl,e):sl}function wf(e,t,a,l,n,i){n=vf(n),l.context===null?l.context=n:l.pendingContext=n,l=da(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=fa(e,l,t),a!==null&&(rt(a,e,t),tn(a,e,t))}function Sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function bo(e,t){Sf(e,t),(e=e.alternate)&&Sf(e,t)}function Nf(e){if(e.tag===13||e.tag===31){var t=Ya(e,67108864);t!==null&&rt(t,e,67108864),bo(e,67108864)}}function jf(e){if(e.tag===13||e.tag===31){var t=xt();t=cu(t);var a=Ya(e,t);a!==null&&rt(a,e,t),bo(e,t)}}var Ii=!0;function g0(e,t,a,l){var n=w.T;w.T=null;var i=U.p;try{U.p=2,po(e,t,a,l)}finally{U.p=i,w.T=n}}function x0(e,t,a,l){var n=w.T;w.T=null;var i=U.p;try{U.p=8,po(e,t,a,l)}finally{U.p=i,w.T=n}}function po(e,t,a,l){if(Ii){var n=go(l);if(n===null)ao(e,t,l,Gi,a),Tf(e,l);else if(w0(n,e,t,a,l))l.stopPropagation();else if(Tf(e,l),t&4&&-1<v0.indexOf(e)){for(;n!==null;){var i=Fa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ba(i.pendingLanes);if(s!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var d=1<<31-ft(s);o.entanglements[1]|=d,s&=~d}Ot(i),(be&6)===0&&(Ti=ct()+500,gn(0))}}break;case 31:case 13:o=Ya(i,2),o!==null&&rt(o,i,2),ki(),bo(i,2)}if(i=go(l),i===null&&ao(e,t,l,Gi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else ao(e,t,l,null,a)}}function go(e){return e=xu(e),xo(e)}var Gi=null;function xo(e){if(Gi=null,e=Ja(e),e!==null){var t=M(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Y(t),e!==null)return e;e=null}else if(a===31){if(e=z(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gi=e,null}function Af(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ih()){case Mo:return 2;case _o:return 8;case _n:case uh:return 32;case Yo:return 268435456;default:return 32}default:return 32}}var vo=!1,Na=null,ja=null,Aa=null,An=new Map,Tn=new Map,Ta=[],v0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tf(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(t.pointerId)}}function En(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Fa(t),t!==null&&Nf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function w0(e,t,a,l,n){switch(t){case"focusin":return Na=En(Na,e,t,a,l,n),!0;case"dragenter":return ja=En(ja,e,t,a,l,n),!0;case"mouseover":return Aa=En(Aa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return An.set(i,En(An.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Tn.set(i,En(Tn.get(i)||null,e,t,a,l,n)),!0}return!1}function Ef(e){var t=Ja(e.target);if(t!==null){var a=M(t);if(a!==null){if(t=a.tag,t===13){if(t=Y(a),t!==null){e.blockedOn=t,qo(e.priority,function(){jf(a)});return}}else if(t===31){if(t=z(a),t!==null){e.blockedOn=t,qo(e.priority,function(){jf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=go(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);gu=l,a.target.dispatchEvent(l),gu=null}else return t=Fa(a),t!==null&&Nf(t),e.blockedOn=a,!1;t.shift()}return!0}function kf(e,t,a){Xi(e)&&a.delete(t)}function S0(){vo=!1,Na!==null&&Xi(Na)&&(Na=null),ja!==null&&Xi(ja)&&(ja=null),Aa!==null&&Xi(Aa)&&(Aa=null),An.forEach(kf),Tn.forEach(kf)}function Qi(e,t){e.blockedOn===t&&(e.blockedOn=null,vo||(vo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,S0)))}var Zi=null;function Bf(e){Zi!==e&&(Zi=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Zi===e&&(Zi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(xo(l||a)===null)continue;break}var i=Fa(a);i!==null&&(e.splice(t,3),t-=3,ps(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Cl(e){function t(d){return Qi(d,e)}Na!==null&&Qi(Na,e),ja!==null&&Qi(ja,e),Aa!==null&&Qi(Aa,e),An.forEach(t),Tn.forEach(t);for(var a=0;a<Ta.length;a++){var l=Ta[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)Ef(a),a.blockedOn===null&&Ta.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],s=n[lt]||null;if(typeof i=="function")s||Bf(a);else if(s){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[lt]||null)o=s.formAction;else if(xo(n)!==null)continue}else o=s.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),Bf(a)}}}function zf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function wo(e){this._internalRoot=e}Ki.prototype.render=wo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var a=t.current,l=xt();wf(a,l,e,t,null,null)},Ki.prototype.unmount=wo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wf(e.current,2,null,e,null,null),ki(),t[Ka]=null}};function Ki(e){this._internalRoot=e}Ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ho();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ta.length&&t!==0&&t<Ta[a].priority;a++);Ta.splice(a,0,e),a===0&&Ef(e)}};var Cf=N.version;if(Cf!=="19.2.8")throw Error(f(527,Cf,"19.2.8"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=x(t),e=e!==null?H(e):null,e=e===null?null:e.stateNode,e};var N0={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{Ul=Ji.inject(N0),dt=Ji}catch{}}return Bn.createRoot=function(e,t){if(!k(e))throw Error(f(299));var a=!1,l="",n=Dc,i=Rc,s=Hc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=xf(e,1,!1,null,null,a,l,null,n,i,s,zf),e[Ka]=t.current,to(e),new wo(t)},Bn.hydrateRoot=function(e,t,a){if(!k(e))throw Error(f(299));var l=!1,n="",i=Dc,s=Rc,o=Hc,d=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(d=a.formState)),t=xf(e,1,!0,t,a??null,l,n,d,i,s,o,zf),t.context=vf(null),a=t.current,l=xt(),l=cu(l),n=da(l),n.callback=null,fa(a,n,l),a=l,t.current.lanes=a,Dl(t,a),Ot(t),e[Ka]=t.current,to(e),new Ki(t)},Bn.version="19.2.8",Bn}var Vf;function _0(){if(Vf)return jo.exports;Vf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(N){console.error(N)}}return r(),jo.exports=M0(),jo.exports}var Y0=_0();const zn=[{id:"MPLgPPy9Sjs",title:"Poison Shot By Shot",artist:"Dom-I-NATE",duration:"6:28",durationSeconds:388,index:1,thumbnail:"https://i.ytimg.com/vi/MPLgPPy9Sjs/hqdefault.jpg",youtubeUrl:"https://youtu.be/MPLgPPy9Sjs?si=C7TK4fLAwcrYkgnN",category:"rock",tags:["Rock","Epic","Anthem"],description:"The featured single. A haunting build-up tracing toxic cycles, betrayal, and relentless raw guitars.",featuredLyrics:"You came in sweet / All soft at the seams / Said you saw my wreck / And you knew how to redeem..."},{id:"fBBwdLTJMVE",title:"Super Pessimistic (Guitar Riffs Remix)",artist:"DomInNATEly",duration:"4:01",durationSeconds:241,index:2,thumbnail:"https://i.ytimg.com/vi/fBBwdLTJMVE/hqdefault.jpg",youtubeUrl:"https://youtu.be/fBBwdLTJMVE",category:"remix",tags:["Remix","Alt Rock","Heavy Riffs"],description:"High-energy reworked version loaded with heavy electric overdrive and driving rhythmic hooks.",featuredLyrics:"Heavy riffs collide with sharp emotional dissonance in this amplified anthem."},{id:"vohyDAV8PpI",title:"You Played the Wounded Bird",artist:"DomInNATEly",duration:"3:33",durationSeconds:213,index:3,thumbnail:"https://i.ytimg.com/vi/vohyDAV8PpI/hqdefault.jpg",youtubeUrl:"https://youtu.be/vohyDAV8PpI",category:"rock",tags:["Hard Rock","Dark","Story"],description:"Intense alt-rock confession exploring emotional manipulation and playing the martyr in a relationship.",featuredLyrics:"I played the victim in a horrible place / I knew you'd come running to be my shield..."},{id:"ynfsntAvAYU",title:"Pessimistic Bias",artist:"DOM-I-Nate",duration:"3:59",durationSeconds:239,index:4,thumbnail:"https://i.ytimg.com/vi/ynfsntAvAYU/hqdefault.jpg",youtubeUrl:"https://youtu.be/ynfsntAvAYU",category:"alt",tags:["Psychological","Grunge","Raw"],description:"Grungy introspective track examining self-fulfilling negative thoughts and distorted expectations.",featuredLyrics:"Caught in a mirror of anticipation where every bad omen turns to gold."},{id:"Dgvk00dBQ1Y",title:"Bittersweet Echos",artist:"Dom-I-Nate",duration:"3:17",durationSeconds:197,index:5,thumbnail:"https://i.ytimg.com/vi/Dgvk00dBQ1Y/hqdefault.jpg",youtubeUrl:"https://youtu.be/Dgvk00dBQ1Y",category:"rock",tags:["Melodic Rock","Echo","Vocal"],description:"Atmospheric guitars weaving nostalgic echoes of past relationships that refuse to fade.",featuredLyrics:"Reverberating notes of what could have been linger in the quiet aftermath."},{id:"BcCaAPSLgVg",title:"You'd Rather",artist:"DomInNATEly",duration:"3:53",durationSeconds:233,index:6,thumbnail:"https://i.ytimg.com/vi/BcCaAPSLgVg/hqdefault.jpg",youtubeUrl:"https://youtu.be/BcCaAPSLgVg",category:"alt",tags:["Alt Rock","Direct","Heavy"],description:"Punchy vocal deliveries confronting choices, avoidance, and unspoken boundaries.",featuredLyrics:"When the line is drawn, would you rather hide or face the fire head on?"},{id:"HV2GfTi2-mI",title:"We MUSK go to MARS!",artist:"DomInNATEly",duration:"4:47",durationSeconds:287,index:7,thumbnail:"https://i.ytimg.com/vi/HV2GfTi2-mI/hqdefault.jpg",youtubeUrl:"https://youtu.be/HV2GfTi2-mI",category:"anthem",tags:["Sci-Fi Rock","One-Man Band","Concept"],description:"A satirical sci-fi rock odyssey about interstellar colonization, billionaires, and leaving Earth behind.",featuredLyrics:"Countdowns, booster engines, and eccentric dreams of red dust horizons."},{id:"C4FRocguOgA",title:"Sweet at First (Live)",artist:"DomInNATEly",duration:"4:40",durationSeconds:280,index:8,thumbnail:"https://i.ytimg.com/vi/C4FRocguOgA/hqdefault.jpg",youtubeUrl:"https://youtu.be/C4FRocguOgA",category:"acoustic",tags:["Live","Raw Emotion","Stage"],description:"Captured live with blistering dynamics—starts tender and unravels into passionate rock fervor.",featuredLyrics:"It starts with sugar and velvet smiles before the sharp edge catches light."},{id:"Tnz8crSx-cM",title:"I Won't Give In",artist:"DomInNATEly",duration:"2:12",durationSeconds:132,index:9,thumbnail:"https://i.ytimg.com/vi/Tnz8crSx-cM/hqdefault.jpg",youtubeUrl:"https://youtu.be/Tnz8crSx-cM",category:"rock",tags:["Punk Rock","Defiant","Fast"],description:"Short, fierce punk-rock defiance with driving tempo and relentless grit.",featuredLyrics:"Stand firm against the pressure. No surrender, no compromise."},{id:"57aqyr_8pio",title:"Chasing Things",artist:"DomInNATEly",duration:"2:12",durationSeconds:132,index:10,thumbnail:"https://i.ytimg.com/vi/57aqyr_8pio/hqdefault.jpg",youtubeUrl:"https://youtu.be/57aqyr_8pio",category:"alt",tags:["Fast Pace","Indie Rock","Groove"],description:"Upbeat rhythmic groove about running after fleeting illusions and hollow pursuits.",featuredLyrics:"Running circles in the dust chasing shadows that evaporate by dawn."},{id:"BwIhLd5Zo9U",title:"I'm A Dom, Your My Sub!",artist:"DomInNATEly",duration:"2:12",durationSeconds:132,index:11,thumbnail:"https://i.ytimg.com/vi/BwIhLd5Zo9U/hqdefault.jpg",youtubeUrl:"https://youtu.be/BwIhLd5Zo9U",category:"rock",tags:["Bold","Wordplay","Attitude"],description:"Playful yet aggressive wordplay track embodying the DomInNATEly rock persona and swagger.",featuredLyrics:"Commanding rhythm and brazen guitar lines flipping the script."},{id:"t8zv9_NNdps",title:"You Jinxed Us",artist:"Dom-I-NATE",duration:"2:51",durationSeconds:171,index:12,thumbnail:"https://i.ytimg.com/vi/t8zv9_NNdps/hqdefault.jpg",youtubeUrl:"https://youtu.be/t8zv9_NNdps",category:"duet",tags:["Duet Style","Heartbreak","Superstition"],description:"Soulful alt-rock ballad on fragile romance, superstitions, and premature declarations.",featuredLyrics:"You said forever too loud and shattered the spell before we even started."},{id:"9lmCALdX0f8",title:"Crazy Can be So much Fun",artist:"Dom-I-NATE",duration:"2:44",durationSeconds:164,index:13,thumbnail:"https://i.ytimg.com/vi/9lmCALdX0f8/hqdefault.jpg",youtubeUrl:"https://youtu.be/9lmCALdX0f8",category:"rock",tags:["Wild","Garage Rock","Fun"],description:"A chaotic, cheerful garage rock romp celebrating the unpredictable and eccentric sides of life.",featuredLyrics:"Toss out the rulebook and turn the distortion up to eleven."},{id:"DgxXDwDDdpw",title:"I'm making music? Ironic AF!",artist:"DomInNATEly",duration:"3:31",durationSeconds:211,index:14,thumbnail:"https://i.ytimg.com/vi/DgxXDwDDdpw/hqdefault.jpg",youtubeUrl:"https://youtu.be/DgxXDwDDdpw",category:"alt",tags:["Meta","Self-Aware","Experimental"],description:"An honest, self-aware personal monologue song reflecting on unexpected creative awakenings.",featuredLyrics:"Never planned to write chords or hold the mic, but here the song stands."},{id:"sx_f6KVmWmQ",title:"Her Leather Facade",artist:'Nate "Dom-I-Nater"',duration:"3:17",durationSeconds:197,index:15,thumbnail:"https://i.ytimg.com/vi/sx_f6KVmWmQ/hqdefault.jpg",youtubeUrl:"https://youtu.be/sx_f6KVmWmQ",category:"rock",tags:["Hard Rock","Tough Exterior","Vulnerable"],description:"Heavy riff-laden tribute to guarded hearts, tough leather jackets, and hidden vulnerabilities.",featuredLyrics:"Behind the studs and zipper collar lies a fortress waiting to crumble."},{id:"zfFmOk1IfGA",title:"“Please forget me” (Cover)",artist:"Dom-I-NATE",duration:"8:25",durationSeconds:505,index:16,thumbnail:"https://i.ytimg.com/vi/zfFmOk1IfGA/hqdefault.jpg",youtubeUrl:"https://youtu.be/zfFmOk1IfGA",category:"acoustic",tags:["Epic Length","Cover","Soulful"],description:"An extended 8-minute emotional opus and reinterpretation with shifting acoustic & electric movements.",featuredLyrics:"An expansive eight-minute voyage through remorse, memory, and final farewells."},{id:"nZRBsja135c",title:"Hard Drives to Motherboards",artist:"Nate (Dom-I-NATEr)",duration:"1:25",durationSeconds:85,index:17,thumbnail:"https://i.ytimg.com/vi/nZRBsja135c/hqdefault.jpg",youtubeUrl:"https://youtu.be/nZRBsja135c",category:"alt",tags:["Cyber Punk","Short & Sharp","Outro"],description:"Punchy electro-rock synthesis bridging digital circuit boards and raw organic guitar licks.",featuredLyrics:"Binary signals pulsing through speaker wire at lightning velocity."}],If="https://youtu.be/MPLgPPy9Sjs?si=C7TK4fLAwcrYkgnN",U0="https://www.youtube.com/@DomInNATEly",Pe={id:"26af3597-73d4-491c-a9b3-aac9a0d55c82",name:"DomInNATEly Top Hits",description:"Thanks for Listening, My TikTok Is @dom_i_nater",cover:"https://cdn2.suno.ai/image_large_ba1c3c00-6547-4e96-afe1-1566dca7b876.jpeg",user_display_name:"Nate M. AKA  (@DomInNATEly)",user_handle:"dominnately",tiktok_handle:"@dom_i_nater",url:"https://suno.com/playlist/26af3597-73d4-491c-a9b3-aac9a0d55c82",totalTracks:20,totalDurationSeconds:5182},Cn=[{id:"0028ed1b-8e30-4fb7-bda5-13e933cec42f",title:"Poison Shot By Shot",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:1,image:"https://cdn2.suno.ai/24ba0796-195f-4346-9646-95a2a1069e17.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/0028ed1b-8e30-4fb7-bda5-13e933cec42f.m4a",videoUrl:"https://cdn1.suno.ai/0028ed1b-8e30-4fb7-bda5-13e933cec42f.mp4",embedUrl:"https://suno.com/embed/0028ed1b-8e30-4fb7-bda5-13e933cec42f",sunoUrl:"https://suno.com/song/0028ed1b-8e30-4fb7-bda5-13e933cec42f",duration:387.9,durationFormatted:"6:27",tags:[],lyrics:`**[Male Vocals – Verse 1]**
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
There's nothing but shadows and smoke in the air`},{id:"ae67baac-578e-4b4b-96ad-49c06909fc7b",title:"I Never Bled Someone the Way You Do",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:7,image:"https://cdn2.suno.ai/e7b7b9a7-ea57-49e4-8cb7-226ef9db8a6a.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/ae67baac-578e-4b4b-96ad-49c06909fc7b.m4a",videoUrl:"https://cdn1.suno.ai/ae67baac-578e-4b4b-96ad-49c06909fc7b.mp4",embedUrl:"https://suno.com/embed/ae67baac-578e-4b4b-96ad-49c06909fc7b",sunoUrl:"https://suno.com/song/ae67baac-578e-4b4b-96ad-49c06909fc7b",duration:225,durationFormatted:"3:45",tags:[],lyrics:`[Verse 1]

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
we’ll be alright`},{id:"ca0198c0-3507-4fc9-a576-9445317c1e14",title:"Bad Brina knows how to Win",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:10,image:"https://cdn2.suno.ai/f4eaff63-a732-44a3-a4f3-fe8fd5049042.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/ca0198c0-3507-4fc9-a576-9445317c1e14.m4a",videoUrl:"https://cdn1.suno.ai/ca0198c0-3507-4fc9-a576-9445317c1e14.mp4",embedUrl:"https://suno.com/embed/ca0198c0-3507-4fc9-a576-9445317c1e14",sunoUrl:"https://suno.com/song/ca0198c0-3507-4fc9-a576-9445317c1e14",duration:190.4,durationFormatted:"3:10",tags:[],lyrics:`[singer A (female Voice) ]
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
I wasn't your soulmate, I was acting like a leech`}];/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),D0=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(N,E,f)=>f?f.toUpperCase():E.toLowerCase()),Lf=r=>{const N=D0(r);return N.charAt(0).toUpperCase()+N.slice(1)},Gf=(...r)=>r.filter((N,E,f)=>!!N&&N.trim()!==""&&f.indexOf(N)===E).join(" ").trim(),R0=r=>{for(const N in r)if(N.startsWith("aria-")||N==="role"||N==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var H0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=R.forwardRef(({color:r="currentColor",size:N=24,strokeWidth:E=2,absoluteStrokeWidth:f,className:k="",children:M,iconNode:Y,...z},_)=>R.createElement("svg",{ref:_,...H0,width:N,height:N,stroke:r,strokeWidth:f?Number(E)*24/Number(N):E,className:Gf("lucide",k),...!M&&!R0(z)&&{"aria-hidden":"true"},...z},[...Y.map(([x,H])=>R.createElement(x,H)),...Array.isArray(M)?M:[M]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=(r,N)=>{const E=R.forwardRef(({className:f,...k},M)=>R.createElement(q0,{ref:M,iconNode:N,className:Gf(`lucide-${O0(Lf(r))}`,`lucide-${r}`,f),...k}));return E.displayName=Lf(r),E};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Fi=xe("check",V0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],I0=xe("chevron-down",L0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],X0=xe("chevron-up",G0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Xf=xe("clock",Q0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],$i=xe("copy",Z0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],Qf=xe("disc-3",K0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],F0=xe("disc",J0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Dt=xe("external-link",$0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Wi=xe("file-text",W0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],ey=xe("flame",P0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Zf=xe("layout-grid",ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Kf=xe("list",ay);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],Jf=xe("music-2",ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Pi=xe("music",ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Za=xe("pause",iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Rt=xe("play",uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],Ff=xe("repeat",sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],$f=xe("search",oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],cy=xe("send",ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],at=xe("share-2",dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],tu=xe("shuffle",fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],Wf=xe("skip-back",hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Pf=xe("skip-forward",my);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],au=xe("sparkles",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],Ml=xe("tv",by);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],gy=xe("video",py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],eh=xe("volume-2",xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],th=xe("volume-x",vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_l=xe("x",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Bo=xe("youtube",Sy),Ny=({isDarkMode:r,onToggleDarkMode:N,trackCount:E,onQuickShareAll:f})=>u.jsx("header",{id:"main-header",className:`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${r?"bg-black/40 border-white/10 text-white":"bg-white/80 border-neutral-200 text-neutral-900"}`,children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[u.jsxs("div",{className:"flex flex-col",children:[u.jsxs("h1",{className:"text-2xl sm:text-3xl md:text-4xl tracking-tighter leading-none select-none",children:[u.jsx("span",{className:"font-black",children:"D"}),u.jsx("span",{className:"font-light opacity-80",children:"o"}),u.jsx("span",{className:"font-medium opacity-90",children:"m"}),u.jsx("span",{className:"font-black text-cyan-400",children:"I"}),u.jsx("span",{className:"font-light opacity-80",children:"n"}),u.jsx("span",{className:"font-black bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent",children:"NATE"}),u.jsx("span",{className:"font-light opacity-80",children:"l"}),u.jsx("span",{className:"font-medium opacity-90",children:"y"})]}),u.jsx("p",{className:"text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold mt-0.5",children:"Official Gallery"})]}),u.jsxs("span",{className:`hidden md:inline-flex px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${r?"bg-white/5 border-white/10 text-cyan-300":"bg-cyan-50 border-cyan-200 text-cyan-700"}`,children:[E," Tracks"]})]}),u.jsxs("div",{className:"flex items-center gap-3 sm:gap-6",children:[u.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[u.jsxs("a",{id:"youtube-channel-link",href:U0,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Visit DomInNATEly on YouTube",children:[u.jsx(Qf,{className:"w-3.5 h-3.5 text-cyan-400 animate-spin",style:{animationDuration:"6s"}}),u.jsx("span",{className:"hidden lg:inline",children:"Channel"}),u.jsx(Dt,{className:"w-3 h-3 opacity-60"})]}),u.jsxs("a",{id:"youtube-playlist-link",href:If,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Open original playlist on YouTube",children:[u.jsx(Jf,{className:"w-3.5 h-3.5 text-purple-400"}),u.jsx("span",{className:"hidden lg:inline",children:"Playlist"}),u.jsx(Dt,{className:"w-3 h-3 opacity-60"})]})]}),f&&u.jsxs("button",{id:"share-gallery-btn",onClick:f,className:`p-2 sm:px-3 sm:py-1.5 rounded-full border text-xs font-semibold tracking-wider inline-flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600"}`,title:"Share Gallery","aria-label":"Share DomInNATEly Music Gallery",children:[u.jsx(at,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{className:"hidden md:inline uppercase text-[11px]",children:"Share"})]}),u.jsxs("div",{className:`flex items-center gap-2.5 sm:gap-3 border-l pl-3 sm:pl-5 ${r?"border-white/10":"border-neutral-200"}`,children:[u.jsx("button",{id:"dark-mode-toggle",onClick:N,className:`w-10 h-6 rounded-full relative flex items-center px-0.5 transition-colors focus:outline-hidden ${r?"bg-cyan-500":"bg-neutral-300"}`,title:r?"Switch to Light Mode":"Switch to Dark Mode","aria-label":r?"Switch to Light Mode":"Switch to Dark Mode",children:u.jsx("div",{className:`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${r?"translate-x-4":"translate-x-0"}`})}),u.jsx("span",{className:`text-[10px] uppercase font-bold tracking-wider hidden sm:inline ${r?"text-white/80":"text-neutral-700"}`,children:r?"Dark Mode":"Light Mode"})]})]})]})}),jy=({track:r,isPlaying:N,isCurrentTrack:E,onPlay:f,onOpenShare:k,onOpenDetails:M,isDarkMode:Y})=>u.jsxs("div",{id:`track-card-${r.id}`,className:`group rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden relative ${E?Y?"bg-white/10 border-cyan-400/80 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400/40":"bg-cyan-50/40 border-cyan-500 shadow-md ring-1 ring-cyan-400/30":Y?"bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15 shadow-sm hover:shadow-md":"bg-white hover:bg-neutral-50/90 border-neutral-200 hover:border-neutral-300 shadow-xs hover:shadow-sm"}`,children:[u.jsxs("div",{className:"relative aspect-video w-full overflow-hidden bg-black",children:[u.jsx("img",{src:r.thumbnail,alt:r.title,loading:"lazy",referrerPolicy:"no-referrer",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"}),u.jsxs("div",{className:"absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none",children:[u.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white shadow-md",children:r.index.toString().padStart(2,"0")}),u.jsxs("span",{className:"px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-black/80 backdrop-blur-xs text-cyan-400 border border-white/10 flex items-center gap-1.5 shadow-xs",children:[u.jsx(Xf,{className:"w-3 h-3 text-cyan-400"}),r.duration]})]}),u.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:u.jsx("button",{id:`play-btn-${r.id}`,onClick:z=>{z.stopPropagation(),f(r)},className:`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform active:scale-95 ${E&&N?"bg-cyan-400 text-black scale-100 ring-4 ring-cyan-400/40 font-bold":"bg-white/90 hover:bg-white text-black backdrop-blur-sm group-hover:scale-110 shadow-lg"}`,"aria-label":E&&N?`Pause ${r.title}`:`Play ${r.title}`,children:E&&N?u.jsx(Za,{className:"w-5 h-5 fill-current"}):u.jsx(Rt,{className:"w-5 h-5 fill-current translate-x-0.5"})})}),E&&N&&u.jsxs("div",{className:"absolute bottom-2.5 left-2.5 flex items-end gap-1 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs border border-cyan-400/40",children:[u.jsx("span",{className:"w-1 bg-cyan-400 rounded-full animate-eq-1"}),u.jsx("span",{className:"w-1 bg-cyan-300 rounded-full animate-eq-2"}),u.jsx("span",{className:"w-1 bg-purple-400 rounded-full animate-eq-3"}),u.jsx("span",{className:"w-1 bg-cyan-400 rounded-full animate-eq-4"}),u.jsx("span",{className:"text-[10px] font-mono text-cyan-300 ml-1 font-bold uppercase tracking-wider",children:"Playing"})]})]}),u.jsxs("div",{className:"p-4 sm:p-5 flex-1 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between gap-2 mb-1.5",children:[u.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-cyan-400 truncate",children:r.artist}),u.jsx("span",{className:`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${Y?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-300 text-neutral-600"}`,children:r.category})]}),u.jsx("h3",{onClick:()=>M&&M(r),className:`text-base font-bold line-clamp-1 cursor-pointer transition-colors ${E?Y?"text-cyan-400":"text-cyan-700":Y?"text-white hover:text-cyan-400":"text-neutral-900 hover:text-cyan-700"}`,title:r.title,children:r.title}),u.jsx("p",{className:"text-xs text-white/50 italic mt-0.5",children:"DomInNATEly Originals"}),r.featuredLyrics&&u.jsxs("p",{className:`mt-2 text-xs italic line-clamp-2 leading-relaxed ${Y?"text-white/60":"text-neutral-600"}`,children:["“",r.featuredLyrics,"”"]}),u.jsx("div",{className:"mt-3 flex flex-wrap gap-1",children:r.tags.map(z=>u.jsxs("span",{className:`text-[10px] font-medium px-2 py-0.5 rounded-md ${Y?"bg-white/5 text-white/50 border border-white/5":"bg-neutral-100 text-neutral-600"}`,children:["#",z]},z))})]}),u.jsxs("div",{className:`mt-4 pt-3.5 border-t flex items-center justify-between gap-2 ${Y?"border-white/10":"border-neutral-200"}`,children:[u.jsx("button",{id:`card-play-toggle-${r.id}`,onClick:()=>f(r),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${E&&N?"bg-cyan-500 text-black font-bold":Y?"bg-white/5 hover:bg-white/10 text-white border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-800"}`,children:E&&N?u.jsxs(u.Fragment,{children:[u.jsx(Za,{className:"w-3.5 h-3.5 fill-current"}),u.jsx("span",{children:"Pause"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Rt,{className:"w-3.5 h-3.5 fill-current"}),u.jsx("span",{children:"Play"})]})}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx("a",{id:`quick-x-share-${r.id}`,href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Listening to "${r.title}" by DomInNATEly 🔥`)}&url=${encodeURIComponent(r.youtubeUrl)}`,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${Y?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-black hover:bg-neutral-200"}`,title:"Share on X","aria-label":`Share ${r.title} on X`,children:u.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),u.jsx("a",{id:`quick-fb-share-${r.id}`,href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(r.youtubeUrl)}`,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${Y?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-[#1877F2] hover:bg-neutral-200"}`,title:"Share on Facebook","aria-label":`Share ${r.title} on Facebook`,children:u.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),u.jsx("a",{id:`card-youtube-link-${r.id}`,href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${Y?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-[#FF0000] hover:bg-neutral-200"}`,title:"Watch Video on YouTube","aria-label":`Watch ${r.title} on YouTube`,children:u.jsx(Bo,{className:"w-3.5 h-3.5 fill-current"})}),u.jsx("button",{id:`open-share-modal-${r.id}`,onClick:()=>k(r),className:`p-1.5 rounded-md transition-colors ${Y?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200"}`,title:"More Share Options (WhatsApp, Reddit, Copy Link, etc.)","aria-label":`Share ${r.title}`,children:u.jsx(at,{className:"w-3.5 h-3.5"})})]})]})]})]}),Ay=({searchQuery:r,onSearchChange:N,sortField:E,onSortChange:f,selectedCategory:k,onCategoryChange:M,totalResults:Y,isDarkMode:z})=>{const _=[{id:"all",label:"All Tracks"},{id:"rock",label:"Rock & Riffs"},{id:"remix",label:"Remixes"},{id:"acoustic",label:"Acoustic / Live"},{id:"duet",label:"Duets"},{id:"alt",label:"Alt / Concept"}],x=[{id:"playlist",label:"Playlist Order (#01 - #17)"},{id:"newest",label:"Reverse Order (#17 - #01)"},{id:"duration-desc",label:"Duration (Longest First)"},{id:"duration-asc",label:"Duration (Shortest First)"},{id:"title-asc",label:"Title (A → Z)"},{id:"title-desc",label:"Title (Z → A)"}],H=r.trim()!==""||k!=="all"||E!=="playlist";return u.jsxs("div",{id:"sorting-filter-panel",className:`rounded-2xl border p-4 sm:p-5 mb-6 backdrop-blur-md transition-all ${z?"bg-white/5 border-white/10 shadow-xl shadow-black/40":"bg-white/90 border-neutral-200 shadow-sm"}`,children:[u.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-3.5",children:[u.jsxs("div",{className:"relative flex-1",children:[u.jsx($f,{className:`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${z?"text-white/40":"text-neutral-400"}`}),u.jsx("input",{id:"track-search-input",type:"text",placeholder:"Search tracks, lyrics, or styles...",value:r,onChange:C=>N(C.target.value),className:`w-full pl-9 pr-9 py-2 rounded-xl text-xs sm:text-sm border focus:outline-hidden transition-all ${z?"bg-black/50 border-white/10 text-white placeholder-white/40 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/40":"bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600/30"}`}),r&&u.jsx("button",{onClick:()=>N(""),className:`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md ${z?"text-white/40 hover:text-white":"text-neutral-500 hover:text-neutral-900"}`,title:"Clear search",children:u.jsx(_l,{className:"w-3.5 h-3.5"})})]}),u.jsxs("div",{className:`flex items-center px-3 py-1.5 rounded-full border transition-all ${z?"bg-white/5 border-white/10 text-white":"bg-neutral-100 border-neutral-300 text-neutral-800"}`,children:[u.jsx("span",{className:`text-[10px] sm:text-xs font-bold mr-2 uppercase tracking-wider ${z?"text-white/50":"text-neutral-500"}`,children:"SORT BY:"}),u.jsx("select",{id:"track-sort-select",value:E,onChange:C=>f(C.target.value),className:`bg-transparent text-xs outline-hidden cursor-pointer font-bold uppercase tracking-wider ${z?"text-cyan-400":"text-cyan-700"}`,children:x.map(C=>u.jsx("option",{value:C.id,className:z?"bg-[#0a0a0a] text-white":"bg-white text-neutral-900",children:C.label},C.id))})]})]}),u.jsxs("div",{className:`mt-4 pt-3.5 border-t flex flex-wrap items-center justify-between gap-2.5 ${z?"border-white/10":"border-neutral-200"}`,children:[u.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar",children:_.map(C=>{const G=k===C.id;return u.jsx("button",{id:`filter-pill-${C.id}`,onClick:()=>M(C.id),className:`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${G?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":z?"bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20":"bg-neutral-100 border border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400"}`,children:C.label},C.id)})}),u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono",children:[u.jsxs("span",{className:z?"text-cyan-400 font-bold":"text-cyan-700 font-bold",children:[Y," ",Y===1?"TRACK":"TRACKS"]}),H&&u.jsx("button",{id:"reset-filters-btn",onClick:()=>{N(""),M("all"),f("playlist")},className:`underline text-[11px] uppercase tracking-wider ml-2 transition-colors ${z?"text-white/50 hover:text-white":"text-neutral-500 hover:text-black"}`,children:"Reset"})]})]})]})};class Ty{constructor(){this.activePlayer=null,this.listeners=[]}setActivePlayer(N){this.activePlayer!==N&&(this.activePlayer=N,this.notifyListeners())}getActivePlayer(){return this.activePlayer}subscribe(N){return this.listeners.push(N),N(this.activePlayer),()=>{this.listeners=this.listeners.filter(E=>E!==N)}}notifyListeners(){this.listeners.forEach(N=>{try{N(this.activePlayer)}catch(E){console.error("PlayerManager listener error:",E)}})}}const eu=new Ty,Ey=({currentTrack:r,playlist:N,onTrackChange:E,onOpenShare:f,isDarkMode:k,isPlaying:M,setIsPlaying:Y})=>{const[z,_]=R.useState(0),[x,H]=R.useState(0),[C,G]=R.useState(80),[ne,J]=R.useState(!1),[F,Ae]=R.useState(!1),[pe,Me]=R.useState(!1),[he,ke]=R.useState(!1),[ce,Te]=R.useState(!1),B=R.useRef(null),O=R.useRef(null),I=R.useRef(!1),Q=R.useRef(null),_e="youtube-player-container";R.useEffect(()=>{M&&eu.setActivePlayer("youtube")},[M]),R.useEffect(()=>eu.subscribe(p=>{if(p==="suno"&&M&&(Y(!1),B.current&&typeof B.current.pauseVideo=="function"))try{B.current.pauseVideo()}catch{}}),[M,Y]);const q=c=>{if(isNaN(c)||c<0)return"0:00";const p=Math.floor(c/60),A=Math.floor(c%60);return`${p}:${A<10?"0":""}${A}`},se=R.useCallback(()=>{if(!r||N.length===0)return;if(F){const A=Math.floor(Math.random()*N.length);E(N[A]);return}const p=(N.findIndex(A=>A.id===r.id)+1)%N.length;E(N[p])},[r,N,F,E]),me=R.useCallback(()=>{if(!r||N.length===0)return;if(z>4&&B.current&&typeof B.current.seekTo=="function")try{B.current.seekTo(0,!0),_(0);return}catch{}const p=(N.findIndex(A=>A.id===r.id)-1+N.length)%N.length;E(N[p])},[r,N,z,E]);R.useEffect(()=>{var c;if(!window.YT&&!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){const A=document.createElement("script");A.src="https://www.youtube.com/iframe_api";const D=document.getElementsByTagName("script")[0];(c=D==null?void 0:D.parentNode)==null||c.insertBefore(A,D)}},[]),R.useEffect(()=>{if(!r)return;if(B.current&&I.current){if(typeof B.current.loadVideoById=="function")try{M?B.current.loadVideoById(r.id):typeof B.current.cueVideoById=="function"?B.current.cueVideoById(r.id):B.current.loadVideoById(r.id)}catch(p){console.warn("Error loading video by ID:",p)}return}Q.current=r.id;const c=()=>{if(!document.getElementById(_e)){setTimeout(c,100);return}if(!window.YT||!window.YT.Player){setTimeout(c,100);return}if(!B.current)try{B.current=new window.YT.Player(_e,{height:"100%",width:"100%",videoId:r.id,playerVars:{autoplay:M?1:0,controls:1,modestbranding:1,rel:0,origin:window.location.origin},events:{onReady:A=>{if(I.current=!0,typeof A.target.setVolume=="function"&&A.target.setVolume(C),Q.current&&Q.current!==r.id){const D=Q.current;Q.current=null,typeof A.target.loadVideoById=="function"&&(A.target.loadVideoById(D),Y(!0))}else M&&typeof A.target.playVideo=="function"&&A.target.playVideo()},onStateChange:A=>{if(A.data===1){if(Y(!0),B.current&&typeof B.current.getDuration=="function"){const D=B.current.getDuration();D&&D>0&&H(D)}}else A.data===2?Y(!1):A.data===0&&(pe?(B.current&&typeof B.current.seekTo=="function"&&B.current.seekTo(0),B.current&&typeof B.current.playVideo=="function"&&B.current.playVideo()):se())},onError:A=>{console.warn("YouTube Player event error:",A)}}})}catch(A){console.warn("Error instantiating YT.Player:",A)}};c()},[r==null?void 0:r.id]),R.useEffect(()=>{if(!(!I.current||!B.current))try{M&&typeof B.current.playVideo=="function"?B.current.playVideo():!M&&typeof B.current.pauseVideo=="function"&&B.current.pauseVideo()}catch(c){console.warn("Error syncing playback state:",c)}},[M]),R.useEffect(()=>(M?O.current=setInterval(()=>{if(B.current&&typeof B.current.getCurrentTime=="function")try{const c=B.current.getCurrentTime();if(c!==void 0&&!isNaN(c)&&_(c),typeof B.current.getDuration=="function"){const p=B.current.getDuration();p&&p>0&&H(p)}}catch{}},500):clearInterval(O.current),()=>clearInterval(O.current)),[M]),R.useEffect(()=>()=>{if(clearInterval(O.current),B.current&&typeof B.current.destroy=="function")try{B.current.destroy()}catch{}B.current=null,I.current=!1},[]);const Qe=()=>{if(!B.current||!I.current){Y(!M);return}try{M?(typeof B.current.pauseVideo=="function"&&B.current.pauseVideo(),Y(!1)):(typeof B.current.playVideo=="function"&&B.current.playVideo(),Y(!0))}catch(c){console.warn("Error toggling playback:",c),Y(!M)}},w=c=>{const p=parseFloat(c.target.value);if(_(p),B.current&&typeof B.current.seekTo=="function")try{B.current.seekTo(p,!0)}catch(A){console.warn("Error seeking:",A)}},U=c=>{const p=parseInt(c.target.value,10);if(G(p),B.current&&typeof B.current.setVolume=="function")try{B.current.setVolume(p),p===0?(J(!0),typeof B.current.mute=="function"&&B.current.mute()):ne&&(J(!1),typeof B.current.unMute=="function"&&B.current.unMute())}catch(A){console.warn("Error setting volume:",A)}},Z=()=>{if(B.current)try{ne?(typeof B.current.unMute=="function"&&B.current.unMute(),J(!1),typeof B.current.setVolume=="function"&&B.current.setVolume(C||50)):(typeof B.current.mute=="function"&&B.current.mute(),J(!0))}catch(c){console.warn("Error toggling mute:",c)}};if(!r)return null;const oe=x||r.durationSeconds||180,ye=oe>0?z/oe*100:0;return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300 ${he?"opacity-100 pointer-events-auto visible":"opacity-0 pointer-events-none invisible"}`,onClick:()=>ke(!1),children:u.jsxs("div",{className:"relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col",onClick:c=>c.stopPropagation(),children:[u.jsxs("div",{className:"p-3 bg-neutral-950/90 border-b border-white/10 flex items-center justify-between text-xs",children:[u.jsxs("span",{className:"font-bold text-white truncate max-w-[80%]",children:[r.title," — ",r.artist]}),u.jsx("button",{onClick:()=>ke(!1),className:"px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-semibold transition-colors",children:"Close Video Mode"})]}),u.jsx("div",{className:"flex-1 w-full h-full relative",children:u.jsx("div",{id:_e,className:"w-full h-full"})})]})}),u.jsxs("div",{id:"persistent-audio-player",className:`fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-xl shadow-2xl transition-all duration-300 ${k?"bg-black/95 border-white/10 text-white":"bg-white/95 border-neutral-200 text-neutral-900"}`,children:[u.jsxs("div",{className:"relative w-full h-1.5 group cursor-pointer bg-white/10",children:[u.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all pointer-events-none relative",style:{width:`${ye}%`},children:u.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg shadow-cyan-500/50 scale-0 group-hover:scale-100 transition-transform"})}),u.jsx("input",{id:"audio-progress-bar",type:"range",min:"0",max:oe,step:"1",value:z,onChange:w,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer","aria-label":"Seek track"})]}),u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-8 py-3",children:u.jsxs("div",{className:"flex items-center justify-between gap-4 sm:gap-8",children:[u.jsxs("div",{className:"flex items-center gap-3.5 min-w-0 max-w-[40%] sm:max-w-[28%]",children:[u.jsxs("div",{className:"relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-md bg-black",children:[u.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),M&&u.jsx("div",{className:"absolute inset-0 bg-black/50 flex items-center justify-center",children:u.jsxs("div",{className:"flex items-end gap-0.5 h-3",children:[u.jsx("span",{className:"w-0.5 bg-cyan-400 animate-eq-1"}),u.jsx("span",{className:"w-0.5 bg-cyan-300 animate-eq-2"}),u.jsx("span",{className:"w-0.5 bg-purple-400 animate-eq-3"})]})})]}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("h4",{className:"text-xs sm:text-sm font-bold truncate leading-tight hover:text-cyan-400 transition-colors",children:r.title}),u.jsxs("p",{className:`text-[11px] sm:text-xs truncate ${k?"text-white/50":"text-neutral-500"}`,children:[r.artist," • ",u.jsxs("span",{className:"font-mono text-cyan-400",children:["#",r.index.toString().padStart(2,"0")]})]})]})]}),u.jsxs("div",{className:"flex flex-col items-center justify-center gap-1.5 flex-1 max-w-md",children:[u.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[u.jsx("button",{id:"player-shuffle-btn",onClick:()=>Ae(!F),className:`p-1.5 rounded-full transition-colors hidden sm:block ${F?"text-cyan-400 font-bold":k?"text-white/40 hover:text-white":"text-neutral-400 hover:text-black"}`,title:F?"Shuffle Active":"Enable Shuffle","aria-label":"Shuffle",children:u.jsx(tu,{className:"w-4 h-4"})}),u.jsx("button",{id:"player-prev-btn",onClick:me,className:`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${k?"text-white hover:text-cyan-400":"text-neutral-700 hover:text-black"}`,title:"Previous Track","aria-label":"Previous Track",children:u.jsx(Wf,{className:"w-5 h-5 fill-current"})}),u.jsx("button",{id:"player-play-pause-btn",onClick:Qe,className:"w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black hover:bg-cyan-300 flex items-center justify-center font-bold text-xl shadow-xl hover:scale-105 active:scale-95 transition-all",title:M?"Pause":"Play","aria-label":M?"Pause":"Play",children:M?u.jsx(Za,{className:"w-5 h-5 fill-current"}):u.jsx(Rt,{className:"w-5 h-5 fill-current translate-x-0.5"})}),u.jsx("button",{id:"player-next-btn",onClick:se,className:`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${k?"text-white hover:text-cyan-400":"text-neutral-700 hover:text-black"}`,title:"Next Track","aria-label":"Next Track",children:u.jsx(Pf,{className:"w-5 h-5 fill-current"})}),u.jsx("button",{id:"player-repeat-btn",onClick:()=>Me(!pe),className:`p-1.5 rounded-full transition-colors hidden sm:block ${pe?"text-cyan-400 font-bold":k?"text-white/40 hover:text-white":"text-neutral-400 hover:text-black"}`,title:pe?"Repeat Active":"Enable Repeat","aria-label":"Repeat",children:u.jsx(Ff,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold",children:[u.jsx("span",{className:"text-cyan-400",children:q(z)}),u.jsx("span",{className:"text-white/30",children:"/"}),u.jsx("span",{className:k?"text-white/40":"text-neutral-400",children:q(oe)})]})]}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[u.jsxs("div",{className:"hidden md:flex items-center gap-2.5 w-36 lg:w-48",children:[u.jsx("span",{className:`text-[10px] font-bold tracking-wider ${k?"text-white/40":"text-neutral-400"}`,children:"VOL"}),u.jsx("button",{onClick:Z,className:`p-1 rounded-md transition-colors ${k?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,"aria-label":ne?"Unmute":"Mute",children:ne||C===0?u.jsx(th,{className:"w-3.5 h-3.5 text-cyan-400"}):u.jsx(eh,{className:"w-3.5 h-3.5"})}),u.jsx("div",{className:"flex-1 flex items-center",children:u.jsx("input",{id:"player-volume-slider",type:"range",min:"0",max:"100",value:ne?0:C,onChange:U,className:"w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-400","aria-label":"Volume slider"})})]}),u.jsxs("button",{id:"player-video-modal-btn",onClick:()=>ke(!he),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${he?"bg-cyan-500 border-cyan-400 text-black font-bold":k?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Open Video View","aria-label":"Toggle Video Mode",children:[u.jsx(Ml,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{className:"hidden lg:inline text-[11px] uppercase tracking-wider",children:"Video"})]}),u.jsxs("button",{id:"player-share-current-btn",onClick:()=>f(r),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${k?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black hover:bg-neutral-200"}`,title:"Share Song","aria-label":"Share current song",children:[u.jsx(at,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{className:"hidden sm:inline text-[11px] uppercase tracking-wider",children:"Share"})]})]})]})})]})]})},ky=({track:r,isOpen:N,onClose:E,isDarkMode:f})=>{const[k,M]=R.useState(!1);if(!N||!r)return null;const Y=typeof window<"u"?window.location.href:"",z=r.youtubeUrl||Y,_=`Check out "${r.title}" by DomInNATEly! 🎸🔥`,x=async()=>{try{navigator.clipboard&&(await navigator.clipboard.writeText(z),M(!0),setTimeout(()=>M(!1),2500))}catch{const F=document.createElement("textarea");F.value=z,document.body.appendChild(F),F.select(),document.execCommand("copy"),document.body.removeChild(F),M(!0),setTimeout(()=>M(!1),2500)}},H=async()=>{if(navigator.share)try{await navigator.share({title:`${r.title} - DomInNATEly`,text:_,url:z})}catch{}},C=encodeURIComponent(z),G=encodeURIComponent(`${_} ${z}`),ne=encodeURIComponent(`${r.title} - DomInNATEly`),J=[{name:"X (Twitter)",url:`https://twitter.com/intent/tweet?text=${G}`,color:"bg-black text-white hover:bg-neutral-800 border-neutral-700",icon:u.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})},{name:"Facebook",url:`https://www.facebook.com/sharer/sharer.php?u=${C}`,color:"bg-[#1877F2] text-white hover:bg-[#166fe5] border-transparent",icon:u.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})},{name:"WhatsApp",url:`https://api.whatsapp.com/send?text=${G}`,color:"bg-[#25D366] text-white hover:bg-[#20ba59] border-transparent",icon:u.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"})})},{name:"Reddit",url:`https://reddit.com/submit?url=${C}&title=${ne}`,color:"bg-[#FF4500] text-white hover:bg-[#e03d00] border-transparent",icon:u.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"})})},{name:"Telegram",url:`https://t.me/share/url?url=${C}&text=${G}`,color:"bg-[#229ED9] text-white hover:bg-[#1f8ec4] border-transparent",icon:u.jsx(cy,{className:"w-4 h-4 fill-current"})}];return u.jsx("div",{id:"share-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity",onClick:E,children:u.jsxs("div",{id:"share-modal-container",className:`w-full max-w-md rounded-2xl border shadow-2xl p-6 relative transition-all ${f?"bg-[#0a0a0a] border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:F=>F.stopPropagation(),children:[u.jsx("button",{id:"close-share-modal",onClick:E,className:`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${f?"text-white/40 hover:text-white hover:bg-white/10":"text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"}`,"aria-label":"Close modal",children:u.jsx(_l,{className:"w-5 h-5"})}),u.jsxs("div",{className:"flex items-start gap-3.5 mb-5",children:[u.jsx("div",{className:"relative w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-black shadow-md",children:u.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"})}),u.jsxs("div",{className:"min-w-0 flex-1 pr-6",children:[u.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-cyan-400 font-bold uppercase tracking-wider mb-0.5",children:[u.jsx(at,{className:"w-3.5 h-3.5"}),"Share Track"]}),u.jsx("h3",{className:"font-bold text-base leading-snug truncate",children:r.title}),u.jsxs("p",{className:`text-xs ${f?"text-white/50":"text-neutral-500"}`,children:["by ",u.jsx("span",{className:"font-medium text-cyan-400",children:r.artist})," • ",r.duration]})]})]}),u.jsxs("div",{className:"mb-5",children:[u.jsx("label",{className:`block text-xs font-bold uppercase tracking-wider mb-1.5 ${f?"text-white/50":"text-neutral-600"}`,children:"Track Link"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{id:"share-link-input",type:"text",readOnly:!0,value:z,className:`flex-1 text-xs px-3 py-2.5 rounded-xl border font-mono truncate focus:outline-hidden ${f?"bg-black/60 border-white/10 text-cyan-300":"bg-neutral-50 border-neutral-300 text-neutral-800"}`}),u.jsx("button",{id:"copy-track-link-btn",onClick:x,className:`px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shrink-0 ${k?"bg-emerald-500 text-black":"bg-cyan-500 hover:bg-cyan-400 text-black shadow-md shadow-cyan-500/20"}`,children:k?u.jsxs(u.Fragment,{children:[u.jsx(Fi,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Copied"})]}):u.jsxs(u.Fragment,{children:[u.jsx($i,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Copy"})]})})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:`block text-xs font-bold uppercase tracking-wider mb-2.5 ${f?"text-white/50":"text-neutral-600"}`,children:"Share on Social Networks"}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5",children:[J.map(F=>u.jsxs("a",{href:F.url,target:"_blank",rel:"noopener noreferrer",className:`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border shadow-xs transition-transform active:scale-95 ${F.color}`,children:[F.icon,u.jsx("span",{children:F.name})]},F.name)),u.jsxs("a",{href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FF0000] text-white hover:bg-[#d90000] shadow-xs active:scale-95 transition-transform",children:[u.jsx(Bo,{className:"w-4 h-4 fill-current"}),u.jsx("span",{children:"YouTube"})]})]})]}),typeof navigator<"u"&&"share"in navigator&&u.jsx("div",{className:"mt-4 pt-4 border-t border-white/10",children:u.jsxs("button",{id:"native-device-share-btn",onClick:H,className:`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all ${f?"bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-cyan-400":"bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"}`,children:[u.jsx(at,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"Open Device Share Sheet"})]})})]})})},By=({track:r,isOpen:N,onClose:E,isPlaying:f,isCurrentTrack:k,onPlay:M,onOpenShare:Y,isDarkMode:z})=>!N||!r?null:u.jsx("div",{id:"track-detail-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md",onClick:E,children:u.jsxs("div",{id:"track-detail-container",className:`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden transition-all relative ${z?"bg-[#0a0a0a] border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:_=>_.stopPropagation(),children:[u.jsx("button",{id:"close-track-detail-btn",onClick:E,className:"absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white border border-white/10 backdrop-blur-sm transition-colors","aria-label":"Close track details",children:u.jsx(_l,{className:"w-5 h-5"})}),u.jsxs("div",{className:"relative aspect-video w-full bg-black",children:[u.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"}),u.jsxs("div",{className:"absolute bottom-4 left-6 flex items-center gap-3",children:[u.jsx("button",{onClick:()=>M(r),className:"w-12 h-12 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center shadow-xl shadow-cyan-950/60 font-bold transform active:scale-95 transition-transform",children:k&&f?u.jsx(Za,{className:"w-5 h-5 fill-current"}):u.jsx(Rt,{className:"w-5 h-5 fill-current translate-x-0.5"})}),u.jsxs("div",{children:[u.jsxs("span",{className:"text-xs uppercase font-mono font-bold text-cyan-400",children:["Track #",r.index.toString().padStart(2,"0")]}),u.jsx("h2",{className:"text-xl font-bold leading-tight drop-shadow-md text-white",children:r.title})]})]})]}),u.jsxs("div",{className:"p-6",children:[u.jsxs("div",{className:`flex items-center justify-between gap-4 pb-4 border-b ${z?"border-white/10":"border-neutral-200"}`,children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-xs text-white/40",children:"Artist / Band"}),u.jsx("p",{className:"text-sm font-bold text-cyan-400",children:r.artist})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-xs text-white/40",children:"Duration"}),u.jsxs("p",{className:"text-sm font-mono font-semibold flex items-center gap-1 text-cyan-400",children:[u.jsx(Xf,{className:"w-3.5 h-3.5"}),r.duration]})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-xs text-white/40",children:"Category"}),u.jsx("p",{className:"text-sm font-semibold capitalize text-white/90",children:r.category})]})]}),r.description&&u.jsxs("div",{className:"mt-4",children:[u.jsx("h4",{className:"text-xs uppercase font-semibold tracking-wider text-white/40 mb-1.5",children:"Track Background"}),u.jsx("p",{className:`text-sm leading-relaxed ${z?"text-white/70":"text-neutral-700"}`,children:r.description})]}),r.featuredLyrics&&u.jsxs("div",{className:`mt-4 p-4 rounded-2xl border ${z?"bg-white/5 border-white/10":"bg-neutral-50 border-neutral-200"}`,children:[u.jsxs("h4",{className:"text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 mb-1.5 flex items-center gap-1.5",children:[u.jsx(Pi,{className:"w-3.5 h-3.5"}),"Featured Lyrics Snippet"]}),u.jsxs("p",{className:"text-sm italic leading-relaxed font-serif opacity-90",children:["“",r.featuredLyrics,"”"]})]}),u.jsxs("div",{className:"mt-6 flex items-center gap-3",children:[u.jsxs("button",{onClick:()=>Y(r),className:"flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95",children:[u.jsx(at,{className:"w-4 h-4"}),u.jsx("span",{children:"Share Song"})]}),u.jsxs("a",{href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:`py-2.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${z?"bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-cyan-400":"bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"}`,children:[u.jsx(Bo,{className:"w-4 h-4 text-[#FF0000]"}),u.jsx("span",{children:"Watch on YouTube"})]})]})]})]})}),zy=({track:r,isPlaying:N,isCurrentTrack:E,onPlay:f,onOpenLyrics:k,onOpenEmbed:M,onOpenShare:Y,isDarkMode:z})=>{const x=(H=>H&&H.split(`
`).map(G=>G.trim()).filter(G=>G&&!G.startsWith("[")&&!G.startsWith("**[")).slice(0,2).join(" / ")||null)(r.lyrics);return u.jsxs("div",{id:`suno-track-card-${r.id}`,className:`group relative rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden ${E?z?"bg-white/[0.08] border-cyan-500/50 shadow-lg shadow-cyan-500/10":"bg-cyan-50/70 border-cyan-400 shadow-md":z?"bg-neutral-900/60 border-white/5 hover:border-white/20 hover:bg-neutral-900/90":"bg-white border-neutral-200 hover:border-neutral-300 shadow-sm"}`,children:[u.jsxs("div",{onClick:()=>f(r),className:"relative aspect-square w-full overflow-hidden bg-neutral-950 cursor-pointer",children:[u.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",loading:"lazy",crossOrigin:"anonymous"}),u.jsxs("div",{className:"absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white font-mono text-[11px] font-bold border border-white/10",children:["#",r.index]}),u.jsx("div",{className:"absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-cyan-300 font-mono text-[11px] font-bold border border-white/10",children:r.durationFormatted}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity"}),u.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:u.jsx("button",{type:"button",onClick:H=>{H.stopPropagation(),f(r)},"aria-label":E&&N?"Pause track":"Play track",className:`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all transform duration-300 active:scale-95 ${E&&N?"bg-cyan-400 text-black shadow-cyan-500/50 scale-105 ring-4 ring-cyan-400/40":"bg-white/90 text-black hover:bg-cyan-400 opacity-90 group-hover:opacity-100 group-hover:scale-110 shadow-lg"}`,children:E&&N?u.jsx(Za,{className:"w-6 h-6 fill-current"}):u.jsx(Rt,{className:"w-6 h-6 fill-current translate-x-0.5"})})}),E&&N&&u.jsxs("div",{className:"absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-400/40 flex items-center gap-1",children:[u.jsx("div",{className:"w-1 h-3 bg-cyan-400 animate-pulse"}),u.jsx("div",{className:"w-1 h-4 bg-cyan-400 animate-pulse delay-75"}),u.jsx("div",{className:"w-1 h-2 bg-cyan-400 animate-pulse delay-150"}),u.jsx("span",{className:"text-[10px] font-mono font-bold text-cyan-300 ml-1 uppercase",children:"Playing"})]})]}),u.jsxs("div",{className:"p-4 sm:p-5 flex-1 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"flex items-start justify-between gap-2",children:u.jsx("h3",{onClick:()=>f(r),className:"font-bold text-sm sm:text-base leading-snug hover:text-cyan-400 cursor-pointer line-clamp-2 transition-colors",children:r.title})}),u.jsxs("p",{className:"text-xs text-cyan-400/90 font-mono mt-1 flex items-center gap-1.5",children:[u.jsxs("span",{children:["@",r.handle]}),u.jsx("span",{className:"opacity-40",children:"•"}),u.jsx("span",{className:"opacity-75",children:"Suno v4.5"})]}),x&&u.jsxs("div",{onClick:()=>k(r),className:`mt-3 p-2.5 rounded-lg text-xs italic line-clamp-2 border transition-colors cursor-pointer ${z?"bg-white/5 border-white/5 text-white/70 hover:border-cyan-400/30 hover:text-white":"bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-cyan-500/40"}`,children:['"',x,'..."']}),r.tags&&r.tags.length>0&&u.jsx("div",{className:"flex flex-wrap gap-1 mt-3",children:r.tags.slice(0,3).map((H,C)=>u.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-md font-mono border ${z?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-200 text-neutral-600"}`,children:H},C))})]}),u.jsxs("div",{className:"pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("button",{onClick:()=>k(r),className:`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 border transition-colors ${z?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"View full lyrics",children:[u.jsx(Wi,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"Lyrics"})]}),u.jsx("button",{onClick:()=>M(r),className:`p-1.5 rounded-md text-xs font-semibold border transition-colors ${z?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Open Suno player / video",children:u.jsx(Ml,{className:"w-3.5 h-3.5 text-cyan-400"})}),u.jsx("button",{onClick:()=>Y(r),className:`p-1.5 rounded-md text-xs border transition-colors ${z?"bg-white/5 border-white/10 text-white/70 hover:text-white":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Share track",children:u.jsx(at,{className:"w-3.5 h-3.5"})})]}),u.jsxs("a",{href:r.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:"text-[11px] font-mono text-cyan-400 hover:underline flex items-center gap-1",title:"View on Suno.com",children:[u.jsx("span",{children:"Suno"}),u.jsx(Dt,{className:"w-3 h-3"})]})]})]})]})},Cy=({currentTrack:r,playlist:N,onTrackChange:E,onOpenShare:f,onOpenLyrics:k,onOpenEmbed:M,isDarkMode:Y,isPlaying:z,setIsPlaying:_})=>{const x=R.useRef(null),[H,C]=R.useState(0),[G,ne]=R.useState((r==null?void 0:r.duration)||0),[J,F]=R.useState(85),[Ae,pe]=R.useState(!1),[Me,he]=R.useState(!1),[ke,ce]=R.useState(!1),[Te,B]=R.useState(!1),[O,I]=R.useState(!1),Q=R.useRef(null);R.useEffect(()=>{z&&eu.setActivePlayer("suno")},[z]),R.useEffect(()=>eu.subscribe(p=>{p==="youtube"&&z&&(_(!1),x.current&&x.current.pause())}),[z,_]);const _e=c=>{if(isNaN(c)||c<0)return"0:00";const p=Math.floor(c/60),A=Math.floor(c%60);return`${p}:${A<10?"0":""}${A}`},q=R.useCallback(()=>{if(!(!r||N.length===0))if(Me){const c=N.filter(A=>A.id!==r.id),p=Math.floor(Math.random()*(c.length||1));E(c[p]||N[0])}else{const p=(N.findIndex(A=>A.id===r.id)+1)%N.length;E(N[p])}},[r,N,Me,E]),se=R.useCallback(()=>{if(!r||N.length===0)return;if(H>4&&x.current){x.current.currentTime=0,C(0);return}const p=(N.findIndex(A=>A.id===r.id)-1+N.length)%N.length;E(N[p])},[r,N,H,E]);R.useEffect(()=>(Q.current&&(clearInterval(Q.current),Q.current=null),z&&(Q.current=setInterval(()=>{C(c=>{const p=G||(r==null?void 0:r.duration)||180;return c>=p?(q(),0):c+1})},1e3)),()=>{Q.current&&clearInterval(Q.current)}),[z,G,r,q]),R.useEffect(()=>{if(!r||!x.current)return;const c=x.current;I(!1);const p=encodeURI(r.audioUrl||"");c.src=p,c.load(),C(0),ne(r.duration||180),z&&c.play().catch(A=>{console.warn("Audio stream playback restricted/blocked, using simulated sync player:",A),I(!0)})},[r==null?void 0:r.id,r==null?void 0:r.audioUrl]),R.useEffect(()=>{x.current&&(z?O||x.current.play().catch(c=>{console.warn("Audio resume failed:",c),I(!0)}):x.current.pause())},[z,O]),R.useEffect(()=>{x.current&&(x.current.volume=Ae?0:J/100)},[J,Ae]);const me=()=>{_(!z)},Qe=c=>{const p=parseFloat(c.target.value);C(p),x.current&&(x.current.currentTime=p)},w=c=>{const p=parseInt(c.target.value,10);F(p),p===0?pe(!0):Ae&&pe(!1)},U=()=>{pe(!Ae)},Z=()=>{x.current&&C(x.current.currentTime)},oe=()=>{x.current&&x.current.duration&&ne(x.current.duration)},ye=()=>{ke?x.current&&(x.current.currentTime=0,x.current.play()):q()};return r?u.jsxs(u.Fragment,{children:[u.jsx("audio",{ref:x,onTimeUpdate:Z,onLoadedMetadata:oe,onEnded:ye,onError:()=>I(!0),onStalled:()=>I(!0),onCanPlay:()=>I(!1),preload:"auto"}),u.jsx("div",{id:"suno-audio-player-bar",className:`fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-xl transition-all duration-300 ${Y?"bg-neutral-950/95 border-white/10 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.8)]":"bg-white/95 border-neutral-200 text-neutral-900 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]"}`,children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3",children:[u.jsxs("div",{className:"w-full flex items-center gap-2 mb-2",children:[u.jsx("span",{className:"text-[11px] font-mono opacity-60 w-9 text-right select-none",children:_e(H)}),u.jsx("div",{className:"relative flex-1 group flex items-center h-4 cursor-pointer",children:u.jsx("input",{id:"suno-player-scrubber",type:"range",min:"0",max:G>0?G:100,step:"0.1",value:H,onChange:Qe,className:"w-full h-1.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"})}),u.jsx("span",{className:"text-[11px] font-mono opacity-60 w-9 select-none",children:_e(G)})]}),u.jsxs("div",{className:"flex items-center justify-between gap-2 sm:gap-4",children:[u.jsxs("div",{className:"flex items-center gap-3 min-w-0 max-w-[45%] sm:max-w-[30%]",children:[u.jsxs("div",{className:"relative flex-shrink-0 group",children:[u.jsx("img",{src:r.image,alt:r.title,className:"w-11 h-11 sm:w-13 sm:h-13 rounded-xl object-cover shadow-md border border-white/10",crossOrigin:"anonymous"}),u.jsx("button",{onClick:()=>M(r),className:"absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",title:"Watch Video / Embed",children:u.jsx(Ml,{className:"w-4 h-4 text-cyan-400"})})]}),u.jsxs("div",{className:"min-w-0 flex flex-col",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"font-bold text-xs sm:text-sm truncate tracking-tight",children:r.title}),u.jsx("span",{className:"hidden md:inline px-1.5 py-0.5 rounded text-[9px] font-mono uppercase font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",children:"Suno"})]}),u.jsx("div",{className:"flex items-center gap-2 text-[11px] opacity-75 truncate",children:u.jsx("span",{className:"truncate",children:r.artist})})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-3",children:[u.jsx("button",{id:"suno-player-shuffle-btn",onClick:()=>he(!Me),className:`p-1.5 sm:p-2 rounded-full transition-colors ${Me?"text-cyan-400":"opacity-40 hover:opacity-100"}`,title:"Toggle Shuffle",children:u.jsx(tu,{className:"w-4 h-4"})}),u.jsx("button",{id:"suno-player-prev-btn",onClick:se,className:"p-1.5 sm:p-2 rounded-full hover:bg-white/10 transition-colors",title:"Previous Track",children:u.jsx(Wf,{className:"w-5 h-5 fill-current"})}),u.jsx("button",{id:"suno-player-play-pause-btn",onClick:me,className:"p-2.5 sm:p-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black shadow-lg shadow-cyan-400/25 transition-transform active:scale-95",title:z?"Pause":"Play",children:z?u.jsx(Za,{className:"w-5 h-5 fill-current"}):u.jsx(Rt,{className:"w-5 h-5 fill-current translate-x-0.5"})}),u.jsx("button",{id:"suno-player-next-btn",onClick:q,className:"p-1.5 sm:p-2 rounded-full hover:bg-white/10 transition-colors",title:"Next Track",children:u.jsx(Pf,{className:"w-5 h-5 fill-current"})}),u.jsx("button",{id:"suno-player-repeat-btn",onClick:()=>ce(!ke),className:`p-1.5 sm:p-2 rounded-full transition-colors ${ke?"text-cyan-400":"opacity-40 hover:opacity-100"}`,title:"Repeat Current Track",children:u.jsx(Ff,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[u.jsxs("button",{onClick:()=>k(r),className:`px-2.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${Y?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"View Full Lyrics",children:[u.jsx(Wi,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{className:"hidden md:inline",children:"Lyrics"})]}),u.jsxs("button",{onClick:()=>M(r),className:`p-2 rounded-lg border transition-colors hidden sm:flex items-center gap-1.5 text-xs font-semibold ${Y?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Open Video / Embed Player",children:[u.jsx(Ml,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{className:"hidden lg:inline",children:"Video"})]}),u.jsx("button",{onClick:()=>f(r),className:`p-2 rounded-lg border transition-colors hidden sm:flex ${Y?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Share track",children:u.jsx(at,{className:"w-3.5 h-3.5"})}),u.jsxs("div",{className:"hidden lg:flex items-center gap-2 pl-2 border-l border-white/10",children:[u.jsx("button",{onClick:U,className:"opacity-70 hover:opacity-100",children:Ae||J===0?u.jsx(th,{className:"w-4 h-4 text-rose-400"}):u.jsx(eh,{className:"w-4 h-4 text-cyan-400"})}),u.jsx("input",{id:"suno-player-volume",type:"range",min:"0",max:"100",value:Ae?0:J,onChange:w,className:"w-18 h-1.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-cyan-400"})]}),u.jsx("button",{onClick:()=>B(!Te),className:"p-1.5 rounded-md hover:bg-white/10 sm:hidden",children:Te?u.jsx(I0,{className:"w-4 h-4"}):u.jsx(X0,{className:"w-4 h-4"})})]})]}),Te&&u.jsxs("div",{className:"mt-3 pt-3 border-t border-white/10 flex sm:hidden items-center justify-around text-xs",children:[u.jsxs("button",{onClick:()=>k(r),className:"flex items-center gap-1.5 text-cyan-400 font-medium",children:[u.jsx(Wi,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Lyrics"})]}),u.jsxs("button",{onClick:()=>M(r),className:"flex items-center gap-1.5 text-white/80 font-medium",children:[u.jsx(Ml,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Watch Video"})]}),u.jsxs("button",{onClick:()=>f(r),className:"flex items-center gap-1.5 text-white/80 font-medium",children:[u.jsx(at,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Share"})]}),u.jsxs("a",{href:r.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 text-white/60 font-medium",children:[u.jsx(Dt,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Suno"})]})]})]})})]}):null},My=({track:r,onClose:N,isDarkMode:E,onPlayTrack:f,isPlaying:k,isCurrentTrack:M})=>{const[Y,z]=R.useState(!1);if(!r)return null;const _=()=>{navigator.clipboard.writeText(r.lyrics||""),z(!0),setTimeout(()=>z(!1),2e3)},x=H=>{if(!H||H.trim()==="")return u.jsx("div",{className:"py-12 text-center text-sm opacity-60",children:"Instrumental or no written lyrics provided for this track."});const C=H.split(`
`);return u.jsx("div",{className:"space-y-2 font-mono text-xs sm:text-sm leading-relaxed",children:C.map((G,ne)=>{const J=G.trim(),F=J.startsWith("**[")||J.startsWith("[")||J.endsWith("]**")||J.endsWith("]"),Ae=J.startsWith("*")&&J.endsWith("*");return F?u.jsx("div",{className:"pt-3 pb-1 text-cyan-400 font-bold tracking-wider uppercase text-[11px] sm:text-xs",children:J.replace(/\*\*/g,"")},ne):J?u.jsx("div",{className:`${Ae?"italic opacity-80":E?"text-white/90":"text-neutral-800"}`,children:J.replace(/\*\*/g,"").replace(/\*/g,"")},ne):u.jsx("div",{className:"h-2"},ne)})})};return u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity",onClick:N,children:u.jsxs("div",{className:`relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl border overflow-hidden ${E?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:H=>H.stopPropagation(),children:[u.jsxs("div",{className:`p-4 sm:p-5 border-b flex items-center justify-between gap-4 ${E?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[u.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[u.jsx("img",{src:r.image,alt:r.title,className:"w-12 h-12 rounded-lg object-cover shadow border border-white/10",crossOrigin:"anonymous"}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("h3",{className:"font-bold text-base sm:text-lg truncate tracking-tight",children:r.title}),u.jsxs("p",{className:"text-xs text-cyan-400 font-medium truncate",children:[r.artist," • ",r.durationFormatted]})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("button",{onClick:_,className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${E?"bg-white/5 border-white/10 hover:bg-white/10 text-white/80":"bg-white border-neutral-300 hover:bg-neutral-100 text-neutral-700"}`,title:"Copy Lyrics",children:[Y?u.jsx(Fi,{className:"w-3.5 h-3.5 text-emerald-400"}):u.jsx($i,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:Y?"Copied":"Copy"})]}),u.jsxs("a",{href:r.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${E?"bg-white/5 border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 text-white/80":"bg-white border-neutral-300 hover:text-cyan-600 text-neutral-700"}`,title:"Open on Suno.com",children:[u.jsx("span",{className:"hidden sm:inline",children:"Suno"}),u.jsx(Dt,{className:"w-3.5 h-3.5"})]}),u.jsx("button",{onClick:N,className:`p-2 rounded-lg transition-colors ${E?"hover:bg-white/10 text-white/70":"hover:bg-neutral-200 text-neutral-600"}`,"aria-label":"Close",children:u.jsx(_l,{className:"w-5 h-5"})})]})]}),r.tags&&r.tags.length>0&&u.jsxs("div",{className:`px-5 py-2.5 border-b flex flex-wrap gap-1.5 text-[11px] ${E?"border-white/5 bg-black/40":"border-neutral-100 bg-neutral-100/50"}`,children:[u.jsx("span",{className:"opacity-50 uppercase tracking-wider text-[10px] self-center mr-1 font-mono",children:"Styles:"}),r.tags.map((H,C)=>u.jsx("span",{className:`px-2 py-0.5 rounded-full border ${E?"bg-white/5 border-white/10 text-white/80":"bg-white border-neutral-200 text-neutral-700"}`,children:H},C))]}),u.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 custom-scrollbar",children:x(r.lyrics)}),u.jsxs("div",{className:`p-4 border-t flex items-center justify-between gap-3 text-xs ${E?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[u.jsxs("div",{className:"flex items-center gap-2 text-white/50 text-[11px]",children:[u.jsx(au,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"AI-generated vocals and production via Suno v4.5"})]}),f&&u.jsxs("button",{onClick:()=>f(r),className:"px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20",children:[u.jsx(Jf,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:M&&k?"Pause Audio":"Play Audio"})]})]})]})})},_y=({track:r,onClose:N,isDarkMode:E})=>{const[f,k]=R.useState("embed");return r?u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all",onClick:N,children:u.jsxs("div",{className:`relative w-full max-w-3xl flex flex-col rounded-2xl shadow-2xl border overflow-hidden ${E?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:M=>M.stopPropagation(),children:[u.jsxs("div",{className:`p-4 border-b flex items-center justify-between gap-3 ${E?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[u.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[u.jsx("div",{className:"w-9 h-9 rounded-lg overflow-hidden border border-white/10 flex-shrink-0",children:u.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover"})}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("h3",{className:"font-bold text-sm sm:text-base truncate tracking-tight",children:r.title}),u.jsx("p",{className:"text-[11px] text-cyan-400 font-mono truncate",children:r.artist})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("div",{className:`flex items-center p-1 rounded-lg border text-xs font-semibold ${E?"bg-black/50 border-white/10":"bg-neutral-100 border-neutral-300"}`,children:[u.jsxs("button",{onClick:()=>k("embed"),className:`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${f==="embed"?"bg-cyan-500 text-black font-bold shadow-sm":E?"text-white/70 hover:text-white":"text-neutral-600 hover:text-black"}`,children:[u.jsx(Qf,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Suno Embed"})]}),u.jsxs("button",{onClick:()=>k("video"),className:`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${f==="video"?"bg-cyan-500 text-black font-bold shadow-sm":E?"text-white/70 hover:text-white":"text-neutral-600 hover:text-black"}`,children:[u.jsx(gy,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Video MP4"})]})]}),u.jsx("a",{href:r.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${E?"bg-white/5 border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 text-white/80":"bg-white border-neutral-300 hover:text-cyan-600 text-neutral-700"}`,title:"Open song on Suno",children:u.jsx(Dt,{className:"w-3.5 h-3.5"})}),u.jsx("button",{onClick:N,className:`p-2 rounded-lg transition-colors ${E?"hover:bg-white/10 text-white/70":"hover:bg-neutral-200 text-neutral-600"}`,"aria-label":"Close",children:u.jsx(_l,{className:"w-5 h-5"})})]})]}),u.jsx("div",{className:"relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden",children:f==="embed"?u.jsx("iframe",{src:encodeURI(r.embedUrl||""),title:`Suno Embed - ${r.title}`,className:"w-full h-full border-0",allow:"autoplay",loading:"lazy"}):u.jsx("video",{src:encodeURI(r.videoUrl||""),controls:!0,autoPlay:!0,className:"w-full h-full object-contain",poster:r.image})}),u.jsxs("div",{className:`p-3.5 border-t flex items-center justify-between text-xs ${E?"border-white/10 bg-white/5 text-white/60":"border-neutral-200 bg-neutral-50 text-neutral-600"}`,children:[u.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[u.jsx(au,{className:"w-3 h-3 text-cyan-400"}),u.jsx("span",{children:"Interactive player hosted by Suno.ai"})]}),u.jsxs("a",{href:"https://suno.com/playlist/26af3597-73d4-491c-a9b3-aac9a0d55c82",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-400 underline underline-offset-2 flex items-center gap-1 font-mono text-[11px]",children:[u.jsx("span",{children:"DomInNATEly Top Hits Playlist"}),u.jsx(Dt,{className:"w-3 h-3"})]})]})]})}):null},Yy=({track:r,isOpen:N,onClose:E,isDarkMode:f})=>{const[k,M]=R.useState(!1),[Y,z]=R.useState(!1);if(!N)return null;const _=r?r.sunoUrl:Pe.url,x=r?r.title:Pe.name,H=r?r.artist:`Curated playlist by ${Pe.user_display_name}`,C=async()=>{try{await navigator.clipboard.writeText(_),M(!0),setTimeout(()=>M(!1),2e3)}catch{}},G=async()=>{try{await navigator.clipboard.writeText(Pe.url),z(!0),setTimeout(()=>z(!1),2e3)}catch{}},ne=async()=>{if(navigator.share)try{await navigator.share({title:`${x} - DomInNATEly`,text:`Listen to "${x}" on Suno!`,url:_})}catch{}};return u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity",onClick:E,children:u.jsxs("div",{className:`relative w-full max-w-md rounded-2xl p-6 shadow-2xl border ${f?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:J=>J.stopPropagation(),children:[u.jsxs("div",{className:"flex items-start justify-between mb-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",children:u.jsx(at,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-base",children:r?"Share Track":"Share Playlist"}),u.jsx("p",{className:"text-xs opacity-60",children:"Spread the sound of DomInNATEly"})]})]}),u.jsx("button",{onClick:E,className:"p-1 rounded-lg hover:bg-white/10 transition-colors opacity-70 hover:opacity-100",children:u.jsx(_l,{className:"w-5 h-5"})})]}),u.jsxs("div",{className:`p-3 rounded-xl border flex items-center gap-3 mb-5 ${f?"bg-white/5 border-white/10":"bg-neutral-50 border-neutral-200"}`,children:[u.jsx("img",{src:r?r.image:Pe.cover,alt:x,className:"w-12 h-12 rounded-lg object-cover border border-white/10"}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("h4",{className:"font-bold text-sm truncate",children:x}),u.jsx("p",{className:"text-xs text-cyan-400 truncate",children:H})]})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-[11px] font-mono uppercase tracking-wider opacity-60 block mb-1.5",children:r?"Track Suno Link":"Playlist Suno Link"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"text",readOnly:!0,value:_,className:`flex-1 px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${f?"bg-neutral-900 border-white/10 text-white/90":"bg-neutral-100 border-neutral-300 text-neutral-800"}`}),u.jsxs("button",{onClick:C,className:"px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20",children:[k?u.jsx(Fi,{className:"w-4 h-4 text-black"}):u.jsx($i,{className:"w-4 h-4"}),u.jsx("span",{children:k?"Copied":"Copy"})]})]})]}),r&&u.jsxs("div",{children:[u.jsx("label",{className:"text-[11px] font-mono uppercase tracking-wider opacity-60 block mb-1.5",children:"DomInNATEly Top Hits Playlist Link"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"text",readOnly:!0,value:Pe.url,className:`flex-1 px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${f?"bg-neutral-900 border-white/10 text-white/90":"bg-neutral-100 border-neutral-300 text-neutral-800"}`}),u.jsxs("button",{onClick:G,className:`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${f?"bg-white/5 border-white/10 text-white hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[Y?u.jsx(Fi,{className:"w-4 h-4 text-emerald-400"}):u.jsx($i,{className:"w-4 h-4"}),u.jsx("span",{children:Y?"Copied":"Copy"})]})]})]})]}),typeof navigator<"u"&&"share"in navigator&&u.jsxs("button",{onClick:ne,className:"w-full mt-4 py-2.5 rounded-xl border border-white/15 hover:border-cyan-400/50 flex items-center justify-center gap-2 text-xs font-bold transition-all",children:[u.jsx(at,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:"Open System Share Menu"})]}),u.jsxs("div",{className:"mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs",children:[u.jsxs("a",{href:Pe.url,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-[11px]",children:[u.jsx("span",{children:"Open Playlist on Suno"}),u.jsx(Dt,{className:"w-3 h-3"})]}),u.jsx("button",{onClick:E,className:"opacity-60 hover:opacity-100 text-xs",children:"Close"})]})]})})},Uy=({isDarkMode:r,currentTrack:N,isPlaying:E,onPlayTrack:f,onTogglePlayPause:k,onTrackChange:M})=>{const[Y,z]=R.useState(""),[_,x]=R.useState("all"),[H,C]=R.useState("index"),[G,ne]=R.useState("grid"),[J,F]=R.useState(null),[Ae,pe]=R.useState(null),[Me,he]=R.useState(null),ke=R.useMemo(()=>[{id:"all",label:"All Tracks"},{id:"rock",label:"Rock & Alt Pop"},{id:"hip-hop",label:"Rap & Hip-Hop"},{id:"trap",label:"Trap & Dubstep"},{id:"duet",label:"Duets"},{id:"ballad",label:"Ballads"}],[]),ce=R.useMemo(()=>{let O=[...Cn];if(Y.trim()!==""){const I=Y.toLowerCase().trim();O=O.filter(Q=>Q.title.toLowerCase().includes(I)||Q.artist.toLowerCase().includes(I)||Q.tags.some(_e=>_e.toLowerCase().includes(I))||Q.lyrics.toLowerCase().includes(I))}return _!=="all"&&(O=O.filter(I=>{const Q=(I.tags.join(" ")+" "+I.title+" "+I.lyrics).toLowerCase();return _==="rock"?Q.includes("rock")||Q.includes("pop")||Q.includes("punk"):_==="hip-hop"?Q.includes("rap")||Q.includes("hip-hop")||Q.includes("hip hop"):_==="trap"?Q.includes("trap")||Q.includes("dubstep")||Q.includes("halftime"):_==="duet"?Q.includes("duet")||Q.includes("female vocals"):_==="ballad"?Q.includes("ballad")||Q.includes("acoustic")||Q.includes("piano"):!0})),O.sort((I,Q)=>H==="title"?I.title.localeCompare(Q.title):H==="duration-desc"?Q.duration-I.duration:H==="duration-asc"?I.duration-Q.duration:I.index-Q.index),O},[Y,_,H]),Te=()=>{ce.length>0&&f(ce[0])},B=()=>{if(ce.length>0){const O=Math.floor(Math.random()*ce.length);f(ce[O])}};return u.jsxs("div",{className:"w-full flex flex-col",children:[u.jsxs("section",{id:"suno-hero-banner",className:`relative overflow-hidden rounded-3xl border mb-8 p-6 sm:p-8 md:p-10 transition-colors ${r?"bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 border-white/10 shadow-2xl":"bg-gradient-to-br from-cyan-50/80 via-white to-neutral-100 border-neutral-200 shadow-lg"}`,children:[u.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"}),u.jsx("div",{className:"absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"}),u.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8",children:[u.jsxs("div",{className:"relative flex-shrink-0 group",children:[u.jsx("div",{className:"w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-neutral-900",children:u.jsx("img",{src:Pe.cover,alt:Pe.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",crossOrigin:"anonymous"})}),u.jsxs("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-black font-mono font-bold text-[10px] tracking-wider uppercase shadow-lg shadow-cyan-500/30 flex items-center gap-1.5 whitespace-nowrap",children:[u.jsx(ey,{className:"w-3 h-3 fill-current"}),u.jsx("span",{children:"Suno Top Hits"})]})]}),u.jsxs("div",{className:"flex-1 text-center md:text-left flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3",children:[u.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-cyan-400/15 text-cyan-400 border border-cyan-400/30 flex items-center gap-1.5",children:[u.jsx(au,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Suno Playlist"})]}),u.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:"20 Curated Tracks"}),u.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:"1 hr 26 min"})]}),u.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight",children:Pe.name}),u.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium",children:[u.jsx("span",{className:"text-cyan-400 font-bold",children:Pe.user_display_name}),u.jsx("span",{className:"opacity-40",children:"•"}),u.jsxs("span",{className:"font-mono text-xs opacity-75",children:["@",Pe.user_handle]}),u.jsx("span",{className:"opacity-40",children:"•"}),u.jsxs("a",{href:`https://www.tiktok.com/${Pe.tiktok_handle}`,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[u.jsxs("span",{children:["TikTok: ",Pe.tiktok_handle]}),u.jsx(Dt,{className:"w-3 h-3"})]})]}),u.jsxs("p",{className:`mt-3 text-sm max-w-2xl leading-relaxed ${r?"text-white/70":"text-neutral-600"}`,children:[Pe.description,". Stream the official Suno AI audio collection featuring high-fidelity guitars, dual vocal anthems, hard-hitting trap beats, and psychological lyricism."]})]}),u.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3",children:[u.jsxs("button",{id:"suno-play-all-btn",onClick:Te,className:"px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-400/25 transition-transform active:scale-95",children:[u.jsx(Rt,{className:"w-4 h-4 fill-current"}),u.jsx("span",{children:"Play All"})]}),u.jsxs("button",{id:"suno-shuffle-all-btn",onClick:B,className:`px-4 py-2.5 rounded-full border text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[u.jsx(tu,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:"Shuffle"})]}),u.jsxs("a",{id:"suno-open-official-btn",href:Pe.url,target:"_blank",rel:"noopener noreferrer",className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[u.jsx("span",{children:"Open on Suno"}),u.jsx(Dt,{className:"w-3.5 h-3.5 opacity-70"})]}),u.jsx("button",{onClick:()=>he(null),className:`p-2.5 rounded-full border transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,title:"Share Playlist",children:u.jsx(at,{className:"w-4 h-4"})})]})]})]})]}),u.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6",children:[u.jsxs("div",{className:"relative flex-1 max-w-md",children:[u.jsx($f,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50"}),u.jsx("input",{id:"suno-search-input",type:"text",placeholder:"Search Suno tracks, lyrics, styles...",value:Y,onChange:O=>z(O.target.value),className:`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none transition-colors ${r?"bg-neutral-900 border-white/10 text-white placeholder-white/40 focus:border-cyan-400/60":"bg-white border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-cyan-500"}`})]}),u.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-3",children:[u.jsxs("select",{id:"suno-sort-select",value:H,onChange:O=>C(O.target.value),className:`px-3 py-2 rounded-xl text-xs font-semibold border focus:outline-none cursor-pointer ${r?"bg-neutral-900 border-white/10 text-white":"bg-white border-neutral-300 text-neutral-800"}`,children:[u.jsx("option",{value:"index",children:"Tracklist Order (#1 - #20)"}),u.jsx("option",{value:"title",children:"Title (A to Z)"}),u.jsx("option",{value:"duration-desc",children:"Duration (Longest first)"}),u.jsx("option",{value:"duration-asc",children:"Duration (Shortest first)"})]}),u.jsxs("div",{className:`flex items-center p-1 rounded-xl border ${r?"border-white/10 bg-white/5":"border-neutral-300 bg-neutral-100"}`,children:[u.jsxs("button",{id:"suno-view-grid",onClick:()=>ne("grid"),className:`p-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${G==="grid"?"bg-cyan-500 text-black shadow-sm":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"Grid View",children:[u.jsx(Zf,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"Grid"})]}),u.jsxs("button",{id:"suno-view-list",onClick:()=>ne("list"),className:`p-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${G==="list"?"bg-cyan-500 text-black shadow-sm":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"List View",children:[u.jsx(Kf,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"List"})]})]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-3 mb-6 custom-scrollbar",children:[ke.map(O=>u.jsx("button",{id:`suno-filter-tag-${O.id}`,onClick:()=>x(O.id),className:`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${_===O.id?"bg-cyan-500 text-black border-cyan-400 font-bold shadow-md shadow-cyan-500/20":r?"bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white":"bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100"}`,children:O.label},O.id)),u.jsxs("span",{className:"text-[11px] font-mono opacity-50 ml-auto whitespace-nowrap",children:["Showing ",ce.length," of ",Cn.length," tracks"]})]}),ce.length>0?G==="grid"?u.jsx("div",{id:"suno-tracks-grid",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:ce.map(O=>u.jsx(zy,{track:O,isPlaying:E,isCurrentTrack:(N==null?void 0:N.id)===O.id,onPlay:I=>f(I),onOpenLyrics:I=>F(I),onOpenEmbed:I=>pe(I),onOpenShare:I=>he(I),isDarkMode:r},O.id))}):u.jsxs("div",{id:"suno-tracks-list",className:"flex flex-col gap-2.5",children:[u.jsxs("div",{className:`grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 ${r?"text-white/40":"text-neutral-500"}`,children:[u.jsx("div",{className:"col-span-1 text-center",children:"#"}),u.jsx("div",{className:"col-span-6 sm:col-span-5",children:"Track Info"}),u.jsx("div",{className:"hidden sm:block sm:col-span-3",children:"Style / Genre"}),u.jsx("div",{className:"col-span-3 sm:col-span-2 text-right sm:text-left",children:"Duration"}),u.jsx("div",{className:"col-span-2 sm:col-span-1 text-right",children:"Actions"})]}),ce.map(O=>{const I=(N==null?void 0:N.id)===O.id;return u.jsxs("div",{id:`suno-list-item-${O.id}`,className:`group p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${I?r?"bg-cyan-950/40 border-cyan-500/40 text-cyan-300":"bg-cyan-50 border-cyan-300 text-cyan-900":r?"bg-neutral-900/50 border-white/5 hover:border-white/15 hover:bg-neutral-900":"bg-white border-neutral-200 hover:border-neutral-300 shadow-sm"}`,children:[u.jsxs("div",{onClick:()=>f(O),className:"grid grid-cols-12 items-center flex-1 min-w-0",children:[u.jsx("div",{className:"col-span-1 flex items-center justify-center font-mono text-xs opacity-60",children:I&&E?u.jsx("div",{className:"w-3 h-3 rounded-full bg-cyan-400 animate-ping"}):u.jsx("span",{children:O.index})}),u.jsxs("div",{className:"col-span-6 sm:col-span-5 flex items-center gap-3 min-w-0 pr-3",children:[u.jsxs("div",{className:"relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900",children:[u.jsx("img",{src:O.image,alt:O.title,className:"w-full h-full object-cover",crossOrigin:"anonymous"}),u.jsx("div",{className:"absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:u.jsx(Rt,{className:"w-3.5 h-3.5 fill-white text-white"})})]}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("h4",{className:"font-bold text-xs sm:text-sm truncate",children:O.title}),u.jsxs("p",{className:"text-[11px] opacity-60 truncate",children:["@",O.handle]})]})]}),u.jsx("div",{className:"hidden sm:flex sm:col-span-3 items-center gap-1 pr-3 overflow-hidden",children:O.tags&&O.tags.length>0?O.tags.slice(0,2).map((Q,_e)=>u.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded font-mono truncate border border-white/10 opacity-70",children:Q},_e)):u.jsx("span",{className:"text-[10px] opacity-40 italic",children:"Suno v4.5"})}),u.jsx("div",{className:"col-span-3 sm:col-span-2 text-right sm:text-left font-mono text-xs opacity-75",children:O.durationFormatted})]}),u.jsxs("div",{className:"flex items-center gap-1.5 ml-2",children:[u.jsx("button",{onClick:Q=>{Q.stopPropagation(),F(O)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Lyrics",children:u.jsx(Wi,{className:"w-3.5 h-3.5"})}),u.jsx("button",{onClick:Q=>{Q.stopPropagation(),pe(O)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Watch Video",children:u.jsx(Ml,{className:"w-3.5 h-3.5"})}),u.jsx("button",{onClick:Q=>{Q.stopPropagation(),he(O)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Share",children:u.jsx(at,{className:"w-3.5 h-3.5"})})]})]},O.id)})]}):u.jsxs("div",{className:"py-20 text-center rounded-2xl border border-dashed border-white/15 my-6",children:[u.jsx(Pi,{className:"w-10 h-10 mx-auto text-cyan-400/50 mb-3"}),u.jsxs("p",{className:"font-bold text-base",children:['No tracks found matching "',Y,'"']}),u.jsx("p",{className:"text-xs opacity-60 mt-1",children:'Try clearing your search query or selecting "All Tracks"'}),u.jsx("button",{onClick:()=>{z(""),x("all")},className:"mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold",children:"Reset Filters"})]}),N&&u.jsx(Cy,{currentTrack:N,playlist:ce.length>0?ce:Cn,onTrackChange:M,onOpenShare:O=>he(O),onOpenLyrics:O=>F(O),onOpenEmbed:O=>pe(O),isDarkMode:r,isPlaying:E,setIsPlaying:O=>{O!==E&&k()}}),u.jsx(My,{track:J,onClose:()=>F(null),isDarkMode:r,onPlayTrack:O=>f(O),isPlaying:E,isCurrentTrack:(N==null?void 0:N.id)===(J==null?void 0:J.id)}),u.jsx(_y,{track:Ae,onClose:()=>pe(null),isDarkMode:r}),u.jsx(Yy,{track:Me,isOpen:!!(Me||Me===null&&!1),onClose:()=>he(null),isDarkMode:r})]})};function Oy(){const[r,N]=R.useState(()=>{if(typeof window<"u"){const q=localStorage.getItem("dominnately_theme");return q?q==="dark":!0}return!0}),[E,f]=R.useState("youtube"),[k,M]=R.useState(zn[0]),[Y,z]=R.useState(!1),[_,x]=R.useState(Cn[0]),[H,C]=R.useState(!1),[G,ne]=R.useState(""),[J,F]=R.useState("playlist"),[Ae,pe]=R.useState("all"),[Me,he]=R.useState("grid"),[ke,ce]=R.useState(null),[Te,B]=R.useState(null);R.useEffect(()=>{localStorage.setItem("dominnately_theme",r?"dark":"light"),r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]);const O=q=>{(k==null?void 0:k.id)===q.id?z(!Y):(M(q),z(!0))},I=R.useMemo(()=>{let q=[...zn];if(G.trim()!==""){const se=G.toLowerCase().trim();q=q.filter(me=>me.title.toLowerCase().includes(se)||me.artist.toLowerCase().includes(se)||me.featuredLyrics&&me.featuredLyrics.toLowerCase().includes(se)||me.tags.some(Qe=>Qe.toLowerCase().includes(se))||me.description&&me.description.toLowerCase().includes(se))}return Ae!=="all"&&(q=q.filter(se=>se.category===Ae)),q.sort((se,me)=>{switch(J){case"playlist":return se.index-me.index;case"newest":return me.index-se.index;case"duration-desc":return me.durationSeconds-se.durationSeconds;case"duration-asc":return se.durationSeconds-me.durationSeconds;case"title-asc":return se.title.localeCompare(me.title);case"title-desc":return me.title.localeCompare(se.title);default:return se.index-me.index}}),q},[G,Ae,J]),Q=()=>{I.length>0&&(M(I[0]),z(!0))},_e=()=>{if(I.length>0){const q=Math.floor(Math.random()*I.length);M(I[q]),z(!0)}};return u.jsxs("div",{className:`min-h-screen font-outfit transition-colors duration-200 flex flex-col ${r?"bg-[#050505] text-white":"bg-neutral-50 text-neutral-900"}`,children:[u.jsx(Ny,{isDarkMode:r,onToggleDarkMode:()=>N(!r),trackCount:E==="suno"?Cn.length:zn.length,onQuickShareAll:()=>ce(k||zn[0])}),u.jsxs("main",{className:"flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-36",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-6",children:[u.jsxs("button",{id:"tab-youtube-gallery",onClick:()=>{f("youtube"),H&&C(!1)},className:`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all border shadow-sm ${E==="youtube"?"bg-cyan-500 text-black border-cyan-400 shadow-cyan-500/25 ring-2 ring-cyan-400/40":r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[u.jsx(F0,{className:"w-4 h-4"}),u.jsx("span",{children:"YouTube Audio Gallery"})]}),u.jsxs("button",{id:"tab-suno-playlist",onClick:()=>{f("suno"),Y&&z(!1)},className:`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all border shadow-sm ${E==="suno"?"bg-cyan-500 text-black border-cyan-400 shadow-cyan-500/25 ring-2 ring-cyan-400/40":r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[u.jsx(au,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:"Suno AI Playlist (20 Tracks)"})]})]}),E==="suno"?u.jsx(Uy,{isDarkMode:r,currentTrack:_,isPlaying:H,onPlayTrack:q=>{(_==null?void 0:_.id)===q.id?C(!H):(x(q),C(!0))},onTogglePlayPause:()=>C(!H),onTrackChange:q=>{x(q),C(!0)}}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-5",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsxs("button",{id:"play-all-tracks-btn",onClick:Q,className:"px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all active:scale-95",children:[u.jsx(Rt,{className:"w-3.5 h-3.5 fill-current"}),u.jsx("span",{children:"Play All"})]}),u.jsxs("button",{id:"shuffle-all-tracks-btn",onClick:_e,className:`px-3.5 py-2 rounded-full border text-xs sm:text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[u.jsx(tu,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"Shuffle"})]})]}),u.jsxs("div",{className:`flex items-center gap-1.5 p-1 rounded-full border ${r?"border-white/10 bg-white/5":"border-neutral-300 bg-neutral-100"}`,children:[u.jsxs("button",{id:"view-mode-grid",onClick:()=>he("grid"),className:`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${Me==="grid"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"Grid View","aria-label":"Grid View",children:[u.jsx(Zf,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"Grid"})]}),u.jsxs("button",{id:"view-mode-list",onClick:()=>he("list"),className:`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${Me==="list"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"List View","aria-label":"List View",children:[u.jsx(Kf,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"List"})]})]})]}),u.jsx(Ay,{searchQuery:G,onSearchChange:ne,sortField:J,onSortChange:F,selectedCategory:Ae,onCategoryChange:pe,totalResults:I.length,isDarkMode:r}),u.jsxs("div",{className:"xl:grid xl:grid-cols-12 xl:gap-8 items-start",children:[u.jsx("div",{className:"xl:col-span-8",children:I.length>0?Me==="grid"?u.jsx("div",{id:"tracks-grid-container",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:I.map(q=>u.jsx(jy,{track:q,isPlaying:Y,isCurrentTrack:(k==null?void 0:k.id)===q.id,onPlay:O,onOpenShare:se=>ce(se),onOpenDetails:se=>B(se),isDarkMode:r},q.id))}):u.jsxs("div",{id:"tracks-list-container",className:"flex flex-col gap-2.5",children:[u.jsxs("div",{className:`grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 ${r?"text-white/40":"text-neutral-500"}`,children:[u.jsx("div",{className:"col-span-7 sm:col-span-6",children:"Track Info"}),u.jsx("div",{className:"hidden sm:block sm:col-span-3",children:"Category"}),u.jsx("div",{className:"col-span-3 sm:col-span-2",children:"Duration"}),u.jsx("div",{className:"col-span-2 sm:col-span-1 text-right",children:"Share"})]}),I.map(q=>{const se=(k==null?void 0:k.id)===q.id;return u.jsx("div",{id:`track-list-item-${q.id}`,onClick:()=>O(q),className:`group p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${se?r?"bg-white/10 border-cyan-400/80 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-400/30":"bg-cyan-50/50 border-cyan-400 text-cyan-900 shadow-xs":r?"bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15 text-white":"bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-900 shadow-xs"}`,children:u.jsxs("div",{className:"grid grid-cols-12 w-full items-center gap-2",children:[u.jsxs("div",{className:"col-span-7 sm:col-span-6 flex items-center gap-3 min-w-0",children:[u.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-xs",children:q.index.toString().padStart(2,"0")}),u.jsx("img",{src:q.thumbnail,alt:q.title,className:"w-12 h-8 rounded-lg object-cover border border-white/10 shrink-0 hidden sm:block",referrerPolicy:"no-referrer"}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("h4",{className:`font-bold text-xs sm:text-sm truncate transition-colors ${se?"text-cyan-400":"group-hover:text-cyan-400"}`,children:q.title}),u.jsx("p",{className:`text-[11px] truncate ${r?"text-white/50":"text-neutral-500"}`,children:q.artist})]})]}),u.jsx("div",{className:"hidden sm:block sm:col-span-3",children:u.jsx("span",{className:`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${r?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-300 text-neutral-600"}`,children:q.category})}),u.jsx("div",{className:"col-span-3 sm:col-span-2",children:u.jsx("span",{className:"text-xs font-mono text-cyan-400 font-bold",children:q.duration})}),u.jsx("div",{className:"col-span-2 sm:col-span-1 flex items-center justify-end gap-1",children:u.jsx("button",{id:`list-share-btn-${q.id}`,onClick:me=>{me.stopPropagation(),ce(q)},className:`p-1.5 rounded-md transition-colors ${r?"text-white/50 hover:text-cyan-400 hover:bg-white/10":"text-neutral-500 hover:text-black hover:bg-neutral-200"}`,title:"Share Track","aria-label":`Share ${q.title}`,children:u.jsx(at,{className:"w-3.5 h-3.5"})})})]})},q.id)})]}):u.jsxs("div",{id:"empty-tracks-state",className:`rounded-2xl border p-12 text-center my-6 backdrop-blur-md ${r?"bg-white/5 border-white/10":"bg-white border-neutral-200"}`,children:[u.jsx(Pi,{className:"w-10 h-10 mx-auto mb-3 text-cyan-400 opacity-80"}),u.jsx("h3",{className:"text-base font-bold",children:"No tracks matched your search"}),u.jsx("p",{className:`text-xs mt-1 max-w-sm mx-auto ${r?"text-white/50":"text-neutral-600"}`,children:'Try clearing your search query or selecting "All Tracks" to view the complete catalog.'}),u.jsx("button",{onClick:()=>{ne(""),pe("all"),F("playlist")},className:"mt-4 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider transition-all",children:"Reset Filters"})]})}),u.jsx("aside",{className:"hidden xl:block xl:col-span-4 sticky top-24",children:u.jsxs("div",{id:"immersive-now-playing-stage",className:`rounded-3xl border p-6 flex flex-col items-center justify-center backdrop-blur-xl transition-all shadow-2xl relative overflow-hidden ${r?"bg-black/40 border-white/10 text-white":"bg-white/90 border-neutral-200 text-neutral-900"}`,children:[u.jsx("div",{className:"absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/15 blur-[60px] rounded-full pointer-events-none animate-pulse"}),u.jsx("div",{className:"absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600/15 blur-[60px] rounded-full pointer-events-none"}),u.jsxs("div",{className:"relative w-full aspect-square mb-6 group",children:[u.jsx("div",{className:"absolute inset-0 bg-cyan-500/20 blur-[50px] rounded-full animate-pulse pointer-events-none"}),u.jsxs("div",{className:"relative z-10 w-full h-full bg-gradient-to-br from-neutral-800 to-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center",children:[u.jsx("img",{src:k.thumbnail,alt:k.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),u.jsx("div",{className:"absolute bottom-3 right-3 text-2xl font-black text-white/25 font-mono tracking-widest pointer-events-none drop-shadow-md",children:"D-LY"}),u.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:u.jsx("button",{onClick:()=>z(!Y),className:"w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-xl hover:scale-105 transition-transform","aria-label":"Toggle playback",children:Y?u.jsx(Za,{className:"w-6 h-6 fill-current"}):u.jsx(Rt,{className:"w-6 h-6 fill-current translate-x-0.5"})})})]})]}),u.jsxs("div",{className:"text-center w-full",children:[u.jsx("h2",{className:"text-xl font-black mb-1 tracking-tight truncate",title:k.title,children:k.title}),u.jsxs("p",{className:"text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4",children:[Y?"Now Playing":"Selected Track"," • #",k.index.toString().padStart(2,"0")]}),u.jsxs("div",{className:"flex gap-1 justify-center items-end h-8 mb-4",children:[u.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${Y?"h-[60%] animate-eq-1":"h-[25%]"}`}),u.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${Y?"h-[90%] animate-eq-2":"h-[40%]"}`}),u.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${Y?"h-[40%] animate-eq-3":"h-[20%]"}`}),u.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${Y?"h-[70%] animate-eq-4":"h-[35%]"}`}),u.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${Y?"h-[30%] animate-eq-2":"h-[15%]"}`})]}),k.featuredLyrics&&u.jsxs("p",{className:"text-xs italic text-white/60 mb-5 line-clamp-2 px-2",children:["“",k.featuredLyrics,"”"]}),u.jsxs("div",{className:"flex items-center justify-center gap-2",children:[u.jsxs("button",{onClick:()=>ce(k),className:"px-4 py-2 rounded-full bg-white/10 hover:bg-cyan-500 hover:text-black text-white border border-white/10 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all",children:[u.jsx(at,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Share Track"})]}),u.jsxs("button",{onClick:()=>B(k),className:"px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all",children:[u.jsx(Pi,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"Details"})]})]})]})]})})]})]}),u.jsxs("footer",{id:"music-gallery-footer",className:`mt-16 pt-8 border-t text-center text-xs ${r?"border-white/10 text-white/50":"border-neutral-200 text-neutral-500"}`,children:[u.jsx("p",{className:"font-bold text-sm mb-1 tracking-wider text-cyan-400 uppercase font-mono",children:"DomInNATEly"}),u.jsxs("p",{children:["Official Music Archive & Player • Based on the playlist"," ",u.jsx("a",{href:If,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline",children:"DomInNATEly's Music"})]}),u.jsx("p",{className:"mt-2 text-[11px] opacity-75",children:"All songs written & performed by DomInNATEly / Dom-I-NATE. Audio powered by YouTube Media Integration."})]})]}),u.jsx(Ey,{currentTrack:k,playlist:I.length>0?I:zn,onTrackChange:q=>{M(q),z(!0)},onOpenShare:q=>ce(q),isDarkMode:r,isPlaying:Y,setIsPlaying:z}),u.jsx(ky,{track:ke,isOpen:!!ke,onClose:()=>ce(null),isDarkMode:r}),u.jsx(By,{track:Te,isOpen:!!Te,onClose:()=>B(null),isPlaying:Y,isCurrentTrack:(k==null?void 0:k.id)===(Te==null?void 0:Te.id),onPlay:O,onOpenShare:q=>ce(q),isDarkMode:r})]})}Y0.createRoot(document.getElementById("root")).render(u.jsx(R.StrictMode,{children:u.jsx(Oy,{})}));
