(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const z of document.querySelectorAll('link[rel="modulepreload"]'))d(z);new MutationObserver(z=>{for(const M of z)if(M.type==="childList")for(const v of M.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function I(z){const M={};return z.integrity&&(M.integrity=z.integrity),z.referrerPolicy&&(M.referrerPolicy=z.referrerPolicy),z.crossOrigin==="use-credentials"?M.credentials="include":z.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function d(z){if(z.ep)return;z.ep=!0;const M=I(z);fetch(z.href,M)}})();var Vr={exports:{}},Jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function By(){if(Gh)return Jl;Gh=1;var r=Symbol.for("react.transitional.element"),b=Symbol.for("react.fragment");function I(d,z,M){var v=null;if(M!==void 0&&(v=""+M),z.key!==void 0&&(v=""+z.key),"key"in z){M={};for(var C in z)C!=="key"&&(M[C]=z[C])}else M=z;return z=M.ref,{$$typeof:r,type:d,key:v,ref:z!==void 0?z:null,props:M}}return Jl.Fragment=b,Jl.jsx=I,Jl.jsxs=I,Jl}var Fh;function Yy(){return Fh||(Fh=1,Vr.exports=By()),Vr.exports}var i=Yy(),_r={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function My(){if(Wh)return oe;Wh=1;var r=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),v=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),F=Symbol.iterator;function te(h){return h===null||typeof h!="object"?null:(h=F&&h[F]||h["@@iterator"],typeof h=="function"?h:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ae=Object.assign,Ne={};function Be(h,T,D){this.props=h,this.context=T,this.refs=Ne,this.updater=D||P}Be.prototype.isReactComponent={},Be.prototype.setState=function(h,T){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,T,"setState")},Be.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function Ve(){}Ve.prototype=Be.prototype;function re(h,T,D){this.props=h,this.context=T,this.refs=Ne,this.updater=D||P}var Ae=re.prototype=new Ve;Ae.constructor=re,ae(Ae,Be.prototype),Ae.isPureReactComponent=!0;var Ye=Array.isArray;function _e(){}var Z={H:null,A:null,T:null,S:null},Oe=Object.prototype.hasOwnProperty;function Le(h,T,D){var L=D.ref;return{$$typeof:r,type:h,key:T,ref:L!==void 0?L:null,props:D}}function K(h,T){return Le(h.type,T,h.props)}function le(h){return typeof h=="object"&&h!==null&&h.$$typeof===r}function Q(h){var T={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(D){return T[D]})}var Me=/\/+/g;function Pe(h,T){return typeof h=="object"&&h!==null&&h.key!=null?Q(""+h.key):T.toString(36)}function He(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(_e,_e):(h.status="pending",h.then(function(T){h.status==="pending"&&(h.status="fulfilled",h.value=T)},function(T){h.status==="pending"&&(h.status="rejected",h.reason=T)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function N(h,T,D,L,x){var V=typeof h;(V==="undefined"||V==="boolean")&&(h=null);var q=!1;if(h===null)q=!0;else switch(V){case"bigint":case"string":case"number":q=!0;break;case"object":switch(h.$$typeof){case r:case b:q=!0;break;case G:return q=h._init,N(q(h._payload),T,D,L,x)}}if(q)return x=x(h),q=L===""?"."+Pe(h,0):L,Ye(x)?(D="",q!=null&&(D=q.replace(Me,"$&/")+"/"),N(x,T,D,"",function(Qt){return Qt})):x!=null&&(le(x)&&(x=K(x,D+(x.key==null||h&&h.key===x.key?"":(""+x.key).replace(Me,"$&/")+"/")+q)),T.push(x)),1;q=0;var Ce=L===""?".":L+":";if(Ye(h))for(var Ie=0;Ie<h.length;Ie++)L=h[Ie],V=Ce+Pe(L,Ie),q+=N(L,T,D,V,x);else if(Ie=te(h),typeof Ie=="function")for(h=Ie.call(h),Ie=0;!(L=h.next()).done;)L=L.value,V=Ce+Pe(L,Ie++),q+=N(L,T,D,V,x);else if(V==="object"){if(typeof h.then=="function")return N(He(h),T,D,L,x);throw T=String(h),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return q}function H(h,T,D){if(h==null)return h;var L=[],x=0;return N(h,L,"","",function(V){return T.call(D,V,x++)}),L}function S(h){if(h._status===-1){var T=h._result;T=T(),T.then(function(D){(h._status===0||h._status===-1)&&(h._status=1,h._result=D)},function(D){(h._status===0||h._status===-1)&&(h._status=2,h._result=D)}),h._status===-1&&(h._status=0,h._result=T)}if(h._status===1)return h._result.default;throw h._result}var R=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},J={map:H,forEach:function(h,T,D){H(h,function(){T.apply(this,arguments)},D)},count:function(h){var T=0;return H(h,function(){T++}),T},toArray:function(h){return H(h,function(T){return T})||[]},only:function(h){if(!le(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return oe.Activity=U,oe.Children=J,oe.Component=Be,oe.Fragment=I,oe.Profiler=z,oe.PureComponent=re,oe.StrictMode=d,oe.Suspense=j,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,oe.__COMPILER_RUNTIME={__proto__:null,c:function(h){return Z.H.useMemoCache(h)}},oe.cache=function(h){return function(){return h.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(h,T,D){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var L=ae({},h.props),x=h.key;if(T!=null)for(V in T.key!==void 0&&(x=""+T.key),T)!Oe.call(T,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&T.ref===void 0||(L[V]=T[V]);var V=arguments.length-2;if(V===1)L.children=D;else if(1<V){for(var q=Array(V),Ce=0;Ce<V;Ce++)q[Ce]=arguments[Ce+2];L.children=q}return Le(h.type,x,L)},oe.createContext=function(h){return h={$$typeof:v,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:M,_context:h},h},oe.createElement=function(h,T,D){var L,x={},V=null;if(T!=null)for(L in T.key!==void 0&&(V=""+T.key),T)Oe.call(T,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(x[L]=T[L]);var q=arguments.length-2;if(q===1)x.children=D;else if(1<q){for(var Ce=Array(q),Ie=0;Ie<q;Ie++)Ce[Ie]=arguments[Ie+2];x.children=Ce}if(h&&h.defaultProps)for(L in q=h.defaultProps,q)x[L]===void 0&&(x[L]=q[L]);return Le(h,V,x)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(h){return{$$typeof:C,render:h}},oe.isValidElement=le,oe.lazy=function(h){return{$$typeof:G,_payload:{_status:-1,_result:h},_init:S}},oe.memo=function(h,T){return{$$typeof:p,type:h,compare:T===void 0?null:T}},oe.startTransition=function(h){var T=Z.T,D={};Z.T=D;try{var L=h(),x=Z.S;x!==null&&x(D,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(_e,R)}catch(V){R(V)}finally{T!==null&&D.types!==null&&(T.types=D.types),Z.T=T}},oe.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},oe.use=function(h){return Z.H.use(h)},oe.useActionState=function(h,T,D){return Z.H.useActionState(h,T,D)},oe.useCallback=function(h,T){return Z.H.useCallback(h,T)},oe.useContext=function(h){return Z.H.useContext(h)},oe.useDebugValue=function(){},oe.useDeferredValue=function(h,T){return Z.H.useDeferredValue(h,T)},oe.useEffect=function(h,T){return Z.H.useEffect(h,T)},oe.useEffectEvent=function(h){return Z.H.useEffectEvent(h)},oe.useId=function(){return Z.H.useId()},oe.useImperativeHandle=function(h,T,D){return Z.H.useImperativeHandle(h,T,D)},oe.useInsertionEffect=function(h,T){return Z.H.useInsertionEffect(h,T)},oe.useLayoutEffect=function(h,T){return Z.H.useLayoutEffect(h,T)},oe.useMemo=function(h,T){return Z.H.useMemo(h,T)},oe.useOptimistic=function(h,T){return Z.H.useOptimistic(h,T)},oe.useReducer=function(h,T,D){return Z.H.useReducer(h,T,D)},oe.useRef=function(h){return Z.H.useRef(h)},oe.useState=function(h){return Z.H.useState(h)},oe.useSyncExternalStore=function(h,T,D){return Z.H.useSyncExternalStore(h,T,D)},oe.useTransition=function(){return Z.H.useTransition()},oe.version="19.2.8",oe}var Xh;function Gr(){return Xh||(Xh=1,_r.exports=My()),_r.exports}var O=Gr(),Or={exports:{}},$l={},Hr={exports:{}},Dr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function Cy(){return Qh||(Qh=1,(function(r){function b(N,H){var S=N.length;N.push(H);e:for(;0<S;){var R=S-1>>>1,J=N[R];if(0<z(J,H))N[R]=H,N[S]=J,S=R;else break e}}function I(N){return N.length===0?null:N[0]}function d(N){if(N.length===0)return null;var H=N[0],S=N.pop();if(S!==H){N[0]=S;e:for(var R=0,J=N.length,h=J>>>1;R<h;){var T=2*(R+1)-1,D=N[T],L=T+1,x=N[L];if(0>z(D,S))L<J&&0>z(x,D)?(N[R]=x,N[L]=S,R=L):(N[R]=D,N[T]=S,R=T);else if(L<J&&0>z(x,S))N[R]=x,N[L]=S,R=L;else break e}}return H}function z(N,H){var S=N.sortIndex-H.sortIndex;return S!==0?S:N.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;r.unstable_now=function(){return M.now()}}else{var v=Date,C=v.now();r.unstable_now=function(){return v.now()-C}}var j=[],p=[],G=1,U=null,F=3,te=!1,P=!1,ae=!1,Ne=!1,Be=typeof setTimeout=="function"?setTimeout:null,Ve=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function Ae(N){for(var H=I(p);H!==null;){if(H.callback===null)d(p);else if(H.startTime<=N)d(p),H.sortIndex=H.expirationTime,b(j,H);else break;H=I(p)}}function Ye(N){if(ae=!1,Ae(N),!P)if(I(j)!==null)P=!0,_e||(_e=!0,Q());else{var H=I(p);H!==null&&He(Ye,H.startTime-N)}}var _e=!1,Z=-1,Oe=5,Le=-1;function K(){return Ne?!0:!(r.unstable_now()-Le<Oe)}function le(){if(Ne=!1,_e){var N=r.unstable_now();Le=N;var H=!0;try{e:{P=!1,ae&&(ae=!1,Ve(Z),Z=-1),te=!0;var S=F;try{t:{for(Ae(N),U=I(j);U!==null&&!(U.expirationTime>N&&K());){var R=U.callback;if(typeof R=="function"){U.callback=null,F=U.priorityLevel;var J=R(U.expirationTime<=N);if(N=r.unstable_now(),typeof J=="function"){U.callback=J,Ae(N),H=!0;break t}U===I(j)&&d(j),Ae(N)}else d(j);U=I(j)}if(U!==null)H=!0;else{var h=I(p);h!==null&&He(Ye,h.startTime-N),H=!1}}break e}finally{U=null,F=S,te=!1}H=void 0}}finally{H?Q():_e=!1}}}var Q;if(typeof re=="function")Q=function(){re(le)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,Pe=Me.port2;Me.port1.onmessage=le,Q=function(){Pe.postMessage(null)}}else Q=function(){Be(le,0)};function He(N,H){Z=Be(function(){N(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return F},r.unstable_next=function(N){switch(F){case 1:case 2:case 3:var H=3;break;default:H=F}var S=F;F=H;try{return N()}finally{F=S}},r.unstable_requestPaint=function(){Ne=!0},r.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var S=F;F=N;try{return H()}finally{F=S}},r.unstable_scheduleCallback=function(N,H,S){var R=r.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?R+S:R):S=R,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=S+J,N={id:G++,callback:H,priorityLevel:N,startTime:S,expirationTime:J,sortIndex:-1},S>R?(N.sortIndex=S,b(p,N),I(j)===null&&N===I(p)&&(ae?(Ve(Z),Z=-1):ae=!0,He(Ye,S-R))):(N.sortIndex=J,b(j,N),P||te||(P=!0,_e||(_e=!0,Q()))),N},r.unstable_shouldYield=K,r.unstable_wrapCallback=function(N){var H=F;return function(){var S=F;F=H;try{return N.apply(this,arguments)}finally{F=S}}}})(Dr)),Dr}var Zh;function zy(){return Zh||(Zh=1,Hr.exports=Cy()),Hr.exports}var qr={exports:{}},it={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function Uy(){if(Kh)return it;Kh=1;var r=Gr();function b(j){var p="https://react.dev/errors/"+j;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var G=2;G<arguments.length;G++)p+="&args[]="+encodeURIComponent(arguments[G])}return"Minified React error #"+j+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function I(){}var d={d:{f:I,r:function(){throw Error(b(522))},D:I,C:I,L:I,m:I,X:I,S:I,M:I},p:0,findDOMNode:null},z=Symbol.for("react.portal");function M(j,p,G){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:U==null?null:""+U,children:j,containerInfo:p,implementation:G}}var v=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(j,p){if(j==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,it.createPortal=function(j,p){var G=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(b(299));return M(j,p,null,G)},it.flushSync=function(j){var p=v.T,G=d.p;try{if(v.T=null,d.p=2,j)return j()}finally{v.T=p,d.p=G,d.d.f()}},it.preconnect=function(j,p){typeof j=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,d.d.C(j,p))},it.prefetchDNS=function(j){typeof j=="string"&&d.d.D(j)},it.preinit=function(j,p){if(typeof j=="string"&&p&&typeof p.as=="string"){var G=p.as,U=C(G,p.crossOrigin),F=typeof p.integrity=="string"?p.integrity:void 0,te=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;G==="style"?d.d.S(j,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:U,integrity:F,fetchPriority:te}):G==="script"&&d.d.X(j,{crossOrigin:U,integrity:F,fetchPriority:te,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},it.preinitModule=function(j,p){if(typeof j=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var G=C(p.as,p.crossOrigin);d.d.M(j,{crossOrigin:G,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&d.d.M(j)},it.preload=function(j,p){if(typeof j=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var G=p.as,U=C(G,p.crossOrigin);d.d.L(j,G,{crossOrigin:U,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},it.preloadModule=function(j,p){if(typeof j=="string")if(p){var G=C(p.as,p.crossOrigin);d.d.m(j,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:G,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else d.d.m(j)},it.requestFormReset=function(j){d.d.r(j)},it.unstable_batchedUpdates=function(j,p){return j(p)},it.useFormState=function(j,p,G){return v.H.useFormState(j,p,G)},it.useFormStatus=function(){return v.H.useHostTransitionStatus()},it.version="19.2.8",it}var Jh;function Vy(){if(Jh)return qr.exports;Jh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(b){console.error(b)}}return r(),qr.exports=Uy(),qr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function _y(){if($h)return $l;$h=1;var r=zy(),b=Gr(),I=Vy();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function z(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function M(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(M(e)!==e)throw Error(d(188))}function p(e){var t=e.alternate;if(!t){if(t=M(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var o=l.alternate;if(o===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===a)return j(l),e;if(o===n)return j(l),t;o=o.sibling}throw Error(d(188))}if(a.return!==n.return)a=l,n=o;else{for(var s=!1,u=l.child;u;){if(u===a){s=!0,a=l,n=o;break}if(u===n){s=!0,n=l,a=o;break}u=u.sibling}if(!s){for(u=o.child;u;){if(u===a){s=!0,a=o,n=l;break}if(u===n){s=!0,n=o,a=l;break}u=u.sibling}if(!s)throw Error(d(189))}}if(a.alternate!==n)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function G(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=G(e),t!==null)return t;e=e.sibling}return null}var U=Object.assign,F=Symbol.for("react.element"),te=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),Be=Symbol.for("react.profiler"),Ve=Symbol.for("react.consumer"),re=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),Ye=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Le=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Symbol.for("react.client.reference");function Pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ae:return"Fragment";case Be:return"Profiler";case Ne:return"StrictMode";case Ye:return"Suspense";case _e:return"SuspenseList";case Le:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case re:return e.displayName||"Context";case Ve:return(e._context.displayName||"Context")+".Consumer";case Ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:Pe(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return Pe(e(t))}catch{}}return null}var He=Array.isArray,N=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=I.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,S={pending:!1,data:null,method:null,action:null},R=[],J=-1;function h(e){return{current:e}}function T(e){0>J||(e.current=R[J],R[J]=null,J--)}function D(e,t){J++,R[J]=e.current,e.current=t}var L=h(null),x=h(null),V=h(null),q=h(null);function Ce(e,t){switch(D(V,t),D(x,e),D(L,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mh(t),e=fh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(L),D(L,e)}function Ie(){T(L),T(x),T(V)}function Qt(e){e.memoizedState!==null&&D(q,e);var t=L.current,a=fh(t,e.type);t!==a&&(D(x,e),D(L,a))}function pa(e){x.current===e&&(T(L),T(x)),q.current===e&&(T(q),Xl._currentValue=S)}var Wa,ao;function Zt(e){if(Wa===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Wa=t&&t[1]||"",ao=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wa+e+ao}var el=!1;function mn(e,t){if(!e||el)return"";el=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(k){var w=k}Reflect.construct(e,[],B)}else{try{B.call()}catch(k){w=k}e.call(B.prototype)}}else{try{throw Error()}catch(k){w=k}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(k){if(k&&w&&typeof k.stack=="string")return[k.stack,w.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),s=o[0],u=o[1];if(s&&u){var c=s.split(`
`),g=u.split(`
`);for(l=n=0;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;for(;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;if(n===c.length||l===g.length)for(n=c.length-1,l=g.length-1;1<=n&&0<=l&&c[n]!==g[l];)l--;for(;1<=n&&0<=l;n--,l--)if(c[n]!==g[l]){if(n!==1||l!==1)do if(n--,l--,0>l||c[n]!==g[l]){var A=`
`+c[n].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=n&&0<=l);break}}}finally{el=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Zt(a):""}function no(e,t){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return e.child!==t&&t!==null?Zt("Suspense Fallback"):Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return mn(e.type,!1);case 11:return mn(e.type.render,!1);case 1:return mn(e.type,!0);case 31:return Zt("Activity");default:return""}}function tl(e){try{var t="",a=null;do t+=no(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ba=Object.prototype.hasOwnProperty,al=r.unstable_scheduleCallback,nl=r.unstable_cancelCallback,_=r.unstable_shouldYield,Y=r.unstable_requestPaint,ne=r.unstable_now,ot=r.unstable_getCurrentPriorityLevel,Ht=r.unstable_ImmediatePriority,Kt=r.unstable_UserBlockingPriority,Ge=r.unstable_NormalPriority,Dt=r.unstable_LowPriority,ll=r.unstable_IdlePriority,lo=r.log,ol=r.unstable_setDisableYieldValue,fn=null,bt=null;function wa(e){if(typeof lo=="function"&&ol(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(fn,e)}catch{}}var wt=Math.clz32?Math.clz32:ym,mm=Math.log,fm=Math.LN2;function ym(e){return e>>>=0,e===0?32:31-(mm(e)/fm|0)|0}var oo=256,io=262144,so=4194304;function Xa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ro(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var u=n&134217727;return u!==0?(n=u&~o,n!==0?l=Xa(n):(s&=u,s!==0?l=Xa(s):a||(a=u&~e,a!==0&&(l=Xa(a))))):(u=n&~o,u!==0?l=Xa(u):s!==0?l=Xa(s):a||(a=n&~e,a!==0&&(l=Xa(a)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:l}function il(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qr(){var e=so;return so<<=1,(so&62914560)===0&&(so=4194304),e}function ji(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function sl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pm(e,t,a,n,l,o){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,c=e.expirationTimes,g=e.hiddenUpdates;for(a=s&~a;0<a;){var A=31-wt(a),B=1<<A;u[A]=0,c[A]=-1;var w=g[A];if(w!==null)for(g[A]=null,A=0;A<w.length;A++){var k=w[A];k!==null&&(k.lane&=-536870913)}a&=~B}n!==0&&Zr(e,n,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~t))}function Zr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-wt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Kr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-wt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function Jr(e,t){var a=t&-t;return a=(a&42)!==0?1:Ni(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ni(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ai(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $r(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:_h(e.type))}function Pr(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var va=Math.random().toString(36).slice(2),et="__reactFiber$"+va,ct="__reactProps$"+va,yn="__reactContainer$"+va,Si="__reactEvents$"+va,bm="__reactListeners$"+va,wm="__reactHandles$"+va,eu="__reactResources$"+va,rl="__reactMarker$"+va;function Ti(e){delete e[et],delete e[ct],delete e[Si],delete e[bm],delete e[wm]}function gn(e){var t=e[et];if(t)return t;for(var a=e.parentNode;a;){if(t=a[yn]||a[et]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=xh(e);e!==null;){if(a=e[et])return a;e=xh(e)}return t}e=a,a=e.parentNode}return null}function pn(e){if(e=e[et]||e[yn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ul(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function bn(e){var t=e[eu];return t||(t=e[eu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[rl]=!0}var tu=new Set,au={};function Qa(e,t){wn(e,t),wn(e+"Capture",t)}function wn(e,t){for(au[e]=t,e=0;e<t.length;e++)tu.add(t[e])}var vm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nu={},lu={};function xm(e){return ba.call(lu,e)?!0:ba.call(nu,e)?!1:vm.test(e)?lu[e]=!0:(nu[e]=!0,!1)}function uo(e,t,a){if(xm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function co(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Jt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function km(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ei(e){if(!e._valueTracker){var t=ou(e)?"checked":"value";e._valueTracker=km(e,t,""+e[t])}}function iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=ou(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Im=/[\n"\\]/g;function Et(e){return e.replace(Im,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Bi(e,t,a,n,l,o,s,u){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Yi(e,s,Tt(t)):a!=null?Yi(e,s,Tt(a)):n!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Tt(u):e.removeAttribute("name")}function su(e,t,a,n,l,o,s,u){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Ei(e);return}a=a!=null?""+Tt(a):"",t=t!=null?""+Tt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=u?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Ei(e)}function Yi(e,t,a){t==="number"&&ho(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function vn(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Tt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ru(e,t,a){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Tt(a):""}function uu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(d(92));if(He(n)){if(1<n.length)throw Error(d(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Tt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Ei(e)}function xn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var jm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||jm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function du(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&cu(e,l,n)}else for(var o in t)t.hasOwnProperty(o)&&cu(e,o,t[o])}function Mi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Am=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mo(e){return Am.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $t(){}var Ci=null;function zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kn=null,In=null;function hu(e){var t=pn(e);if(t&&(e=t.stateNode)){var a=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Bi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[ct]||null;if(!l)throw Error(d(90));Bi(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&iu(n)}break e;case"textarea":ru(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&vn(e,!!a.multiple,t,!1)}}}var Ui=!1;function mu(e,t,a){if(Ui)return e(t,a);Ui=!0;try{var n=e(t);return n}finally{if(Ui=!1,(kn!==null||In!==null)&&(ei(),kn&&(t=kn,e=In,In=kn=null,hu(t),e)))for(t=0;t<e.length;t++)hu(e[t])}}function cl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ct]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vi=!1;if(Pt)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{Vi=!1}var xa=null,_i=null,fo=null;function fu(){if(fo)return fo;var e,t=_i,a=t.length,n,l="value"in xa?xa.value:xa.textContent,o=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[o-n];n++);return fo=l.slice(e,1<n?1-n:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function yu(){return!1}function dt(e){function t(a,n,l,o,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?go:yu,this.isPropagationStopped=yu,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},po=dt(Za),hl=U({},Za,{view:0,detail:0}),Sm=dt(hl),Oi,Hi,ml,bo=U({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ml&&(ml&&e.type==="mousemove"?(Oi=e.screenX-ml.screenX,Hi=e.screenY-ml.screenY):Hi=Oi=0,ml=e),Oi)},movementY:function(e){return"movementY"in e?e.movementY:Hi}}),gu=dt(bo),Tm=U({},bo,{dataTransfer:0}),Em=dt(Tm),Bm=U({},hl,{relatedTarget:0}),Di=dt(Bm),Ym=U({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Mm=dt(Ym),Cm=U({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zm=dt(Cm),Um=U({},Za,{data:0}),pu=dt(Um),Vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_m={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Om[e])?!!t[e]:!1}function qi(){return Hm}var Dm=U({},hl,{key:function(e){if(e.key){var t=Vm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_m[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qi,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qm=dt(Dm),Rm=U({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=dt(Rm),Lm=U({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qi}),Gm=dt(Lm),Fm=U({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wm=dt(Fm),Xm=U({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qm=dt(Xm),Zm=U({},Za,{newState:0,oldState:0}),Km=dt(Zm),Jm=[9,13,27,32],Ri=Pt&&"CompositionEvent"in window,fl=null;Pt&&"documentMode"in document&&(fl=document.documentMode);var $m=Pt&&"TextEvent"in window&&!fl,wu=Pt&&(!Ri||fl&&8<fl&&11>=fl),vu=" ",xu=!1;function ku(e,t){switch(e){case"keyup":return Jm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function Pm(e,t){switch(e){case"compositionend":return Iu(t);case"keypress":return t.which!==32?null:(xu=!0,vu);case"textInput":return e=t.data,e===vu&&xu?null:e;default:return null}}function ef(e,t){if(jn)return e==="compositionend"||!Ri&&ku(e,t)?(e=fu(),fo=_i=xa=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wu&&t.locale!=="ko"?null:t.data;default:return null}}var tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tf[e.type]:t==="textarea"}function Nu(e,t,a,n){kn?In?In.push(n):In=[n]:kn=n,t=si(t,"onChange"),0<t.length&&(a=new po("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var yl=null,gl=null;function af(e){sh(e,0)}function wo(e){var t=ul(e);if(iu(t))return e}function Au(e,t){if(e==="change")return t}var Su=!1;if(Pt){var Li;if(Pt){var Gi="oninput"in document;if(!Gi){var Tu=document.createElement("div");Tu.setAttribute("oninput","return;"),Gi=typeof Tu.oninput=="function"}Li=Gi}else Li=!1;Su=Li&&(!document.documentMode||9<document.documentMode)}function Eu(){yl&&(yl.detachEvent("onpropertychange",Bu),gl=yl=null)}function Bu(e){if(e.propertyName==="value"&&wo(gl)){var t=[];Nu(t,gl,e,zi(e)),mu(af,t)}}function nf(e,t,a){e==="focusin"?(Eu(),yl=t,gl=a,yl.attachEvent("onpropertychange",Bu)):e==="focusout"&&Eu()}function lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(gl)}function of(e,t){if(e==="click")return wo(t)}function sf(e,t){if(e==="input"||e==="change")return wo(t)}function rf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:rf;function pl(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!ba.call(t,l)||!vt(e[l],t[l]))return!1}return!0}function Yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mu(e,t){var a=Yu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yu(a)}}function Cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ho(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ho(e.document)}return t}function Fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var uf=Pt&&"documentMode"in document&&11>=document.documentMode,Nn=null,Wi=null,bl=null,Xi=!1;function Uu(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xi||Nn==null||Nn!==ho(n)||(n=Nn,"selectionStart"in n&&Fi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),bl&&pl(bl,n)||(bl=n,n=si(Wi,"onSelect"),0<n.length&&(t=new po("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Nn)))}function Ka(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var An={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},Qi={},Vu={};Pt&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Ja(e){if(Qi[e])return Qi[e];if(!An[e])return e;var t=An[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Vu)return Qi[e]=t[a];return e}var _u=Ja("animationend"),Ou=Ja("animationiteration"),Hu=Ja("animationstart"),cf=Ja("transitionrun"),df=Ja("transitionstart"),hf=Ja("transitioncancel"),Du=Ja("transitionend"),qu=new Map,Zi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zi.push("scrollEnd");function qt(e,t){qu.set(e,t),Qa(t,[e])}var vo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Bt=[],Sn=0,Ki=0;function xo(){for(var e=Sn,t=Ki=Sn=0;t<e;){var a=Bt[t];Bt[t++]=null;var n=Bt[t];Bt[t++]=null;var l=Bt[t];Bt[t++]=null;var o=Bt[t];if(Bt[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}o!==0&&Ru(a,l,o)}}function ko(e,t,a,n){Bt[Sn++]=e,Bt[Sn++]=t,Bt[Sn++]=a,Bt[Sn++]=n,Ki|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ji(e,t,a,n){return ko(e,t,a,n),Io(e)}function $a(e,t){return ko(e,null,null,t),Io(e)}function Ru(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-wt(a),e=o.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),o):null}function Io(e){if(50<Dl)throw Dl=0,ir=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Tn={};function mf(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,a,n){return new mf(e,t,a,n)}function $i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,t){var a=e.alternate;return a===null?(a=xt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function jo(e,t,a,n,l,o){var s=0;if(n=e,typeof e=="function")$i(e)&&(s=1);else if(typeof e=="string")s=by(e,a,L.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Le:return e=xt(31,a,t,l),e.elementType=Le,e.lanes=o,e;case ae:return Pa(a.children,l,o,t);case Ne:s=8,l|=24;break;case Be:return e=xt(12,a,t,l|2),e.elementType=Be,e.lanes=o,e;case Ye:return e=xt(13,a,t,l),e.elementType=Ye,e.lanes=o,e;case _e:return e=xt(19,a,t,l),e.elementType=_e,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case re:s=10;break e;case Ve:s=9;break e;case Ae:s=11;break e;case Z:s=14;break e;case Oe:s=16,n=null;break e}s=29,a=Error(d(130,e===null?"null":typeof e,"")),n=null}return t=xt(s,a,t,l),t.elementType=e,t.type=n,t.lanes=o,t}function Pa(e,t,a,n){return e=xt(7,e,n,t),e.lanes=a,e}function Pi(e,t,a){return e=xt(6,e,null,t),e.lanes=a,e}function Gu(e){var t=xt(18,null,null,0);return t.stateNode=e,t}function es(e,t,a){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fu=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var a=Fu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:tl(t)},Fu.set(e,t),t)}return{value:e,source:t,stack:tl(t)}}var En=[],Bn=0,No=null,wl=0,Mt=[],Ct=0,ka=null,Gt=1,Ft="";function ta(e,t){En[Bn++]=wl,En[Bn++]=No,No=e,wl=t}function Wu(e,t,a){Mt[Ct++]=Gt,Mt[Ct++]=Ft,Mt[Ct++]=ka,ka=e;var n=Gt;e=Ft;var l=32-wt(n)-1;n&=~(1<<l),a+=1;var o=32-wt(t)+l;if(30<o){var s=l-l%5;o=(n&(1<<s)-1).toString(32),n>>=s,l-=s,Gt=1<<32-wt(t)+l|a<<l|n,Ft=o+e}else Gt=1<<o|a<<l|n,Ft=e}function ts(e){e.return!==null&&(ta(e,1),Wu(e,1,0))}function as(e){for(;e===No;)No=En[--Bn],En[Bn]=null,wl=En[--Bn],En[Bn]=null;for(;e===ka;)ka=Mt[--Ct],Mt[Ct]=null,Ft=Mt[--Ct],Mt[Ct]=null,Gt=Mt[--Ct],Mt[Ct]=null}function Xu(e,t){Mt[Ct++]=Gt,Mt[Ct++]=Ft,Mt[Ct++]=ka,Gt=t.id,Ft=t.overflow,ka=e}var tt=null,Se=null,me=!1,Ia=null,zt=!1,ns=Error(d(519));function ja(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vl(Yt(t,e)),ns}function Qu(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[et]=e,t[ct]=n,a){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(a=0;a<Rl.length;a++)ce(Rl[a],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),su(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),uu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||dh(t.textContent,a)?(n.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),n.onScroll!=null&&ce("scroll",t),n.onScrollEnd!=null&&ce("scrollend",t),n.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||ja(e,!0)}function Zu(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:zt=!1;return;case 27:case 3:zt=!0;return;default:tt=tt.return}}function Yn(e){if(e!==tt)return!1;if(!me)return Zu(e),me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xr(e.type,e.memoizedProps)),a=!a),a&&Se&&ja(e),Zu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Se=vh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Se=vh(e)}else t===27?(t=Se,Oa(e.type)?(e=Ar,Ar=null,Se=e):Se=t):Se=tt?Vt(e.stateNode.nextSibling):null;return!0}function en(){Se=tt=null,me=!1}function ls(){var e=Ia;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),Ia=null),e}function vl(e){Ia===null?Ia=[e]:Ia.push(e)}var os=h(null),tn=null,aa=null;function Na(e,t,a){D(os,t._currentValue),t._currentValue=a}function na(e){e._currentValue=os.current,T(os)}function is(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function ss(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var s=l.child;o=o.firstContext;e:for(;o!==null;){var u=o;o=l;for(var c=0;c<t.length;c++)if(u.context===t[c]){o.lanes|=a,u=o.alternate,u!==null&&(u.lanes|=a),is(o.return,a,e),n||(s=null);break e}o=u.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(d(341));s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),is(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function Mn(e,t,a,n){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var u=l.type;vt(l.pendingProps.value,s.value)||(e!==null?e.push(u):e=[u])}}else if(l===q.current){if(s=l.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Xl):e=[Xl])}l=l.return}e!==null&&ss(t,e,a,n),t.flags|=262144}function Ao(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function an(e){tn=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return Ku(tn,e)}function So(e,t){return tn===null&&an(e),Ku(e,t)}function Ku(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(d(308));aa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else aa=aa.next=t;return a}var ff=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},yf=r.unstable_scheduleCallback,gf=r.unstable_NormalPriority,Fe={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rs(){return{controller:new ff,data:new Map,refCount:0}}function xl(e){e.refCount--,e.refCount===0&&yf(gf,function(){e.controller.abort()})}var kl=null,us=0,Cn=0,zn=null;function pf(e,t){if(kl===null){var a=kl=[];us=0,Cn=hr(),zn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return us++,t.then(Ju,Ju),t}function Ju(){if(--us===0&&kl!==null){zn!==null&&(zn.status="fulfilled");var e=kl;kl=null,Cn=0,zn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bf(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var $u=N.S;N.S=function(e,t){Ud=ne(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&pf(e,t),$u!==null&&$u(e,t)};var nn=h(null);function cs(){var e=nn.current;return e!==null?e:je.pooledCache}function To(e,t){t===null?D(nn,nn.current):D(nn,t.pool)}function Pu(){var e=cs();return e===null?null:{parent:Fe._currentValue,pool:e}}var Un=Error(d(460)),ds=Error(d(474)),Eo=Error(d(542)),Bo={then:function(){}};function ec(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then($t,$t),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nc(e),e;default:if(typeof t.status=="string")t.then($t,$t);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nc(e),e}throw on=t,Un}}function ln(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(on=a,Un):a}}var on=null;function ac(){if(on===null)throw Error(d(459));var e=on;return on=null,e}function nc(e){if(e===Un||e===Eo)throw Error(d(483))}var Vn=null,Il=0;function Yo(e){var t=Il;return Il+=1,Vn===null&&(Vn=[]),tc(Vn,e,t)}function jl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Mo(e,t){throw t.$$typeof===F?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function lc(e){function t(f,m){if(e){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function a(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function n(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function l(f,m){return f=ea(f,m),f.index=0,f.sibling=null,f}function o(f,m,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=67108866,m):y):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function s(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function u(f,m,y,E){return m===null||m.tag!==6?(m=Pi(y,f.mode,E),m.return=f,m):(m=l(m,y),m.return=f,m)}function c(f,m,y,E){var $=y.type;return $===ae?A(f,m,y.props.children,E,y.key):m!==null&&(m.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Oe&&ln($)===m.type)?(m=l(m,y.props),jl(m,y),m.return=f,m):(m=jo(y.type,y.key,y.props,null,f.mode,E),jl(m,y),m.return=f,m)}function g(f,m,y,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=es(y,f.mode,E),m.return=f,m):(m=l(m,y.children||[]),m.return=f,m)}function A(f,m,y,E,$){return m===null||m.tag!==7?(m=Pa(y,f.mode,E,$),m.return=f,m):(m=l(m,y),m.return=f,m)}function B(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Pi(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case te:return y=jo(m.type,m.key,m.props,null,f.mode,y),jl(y,m),y.return=f,y;case P:return m=es(m,f.mode,y),m.return=f,m;case Oe:return m=ln(m),B(f,m,y)}if(He(m)||Q(m))return m=Pa(m,f.mode,y,null),m.return=f,m;if(typeof m.then=="function")return B(f,Yo(m),y);if(m.$$typeof===re)return B(f,So(f,m),y);Mo(f,m)}return null}function w(f,m,y,E){var $=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return $!==null?null:u(f,m,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case te:return y.key===$?c(f,m,y,E):null;case P:return y.key===$?g(f,m,y,E):null;case Oe:return y=ln(y),w(f,m,y,E)}if(He(y)||Q(y))return $!==null?null:A(f,m,y,E,null);if(typeof y.then=="function")return w(f,m,Yo(y),E);if(y.$$typeof===re)return w(f,m,So(f,y),E);Mo(f,y)}return null}function k(f,m,y,E,$){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return f=f.get(y)||null,u(m,f,""+E,$);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case te:return f=f.get(E.key===null?y:E.key)||null,c(m,f,E,$);case P:return f=f.get(E.key===null?y:E.key)||null,g(m,f,E,$);case Oe:return E=ln(E),k(f,m,y,E,$)}if(He(E)||Q(E))return f=f.get(y)||null,A(m,f,E,$,null);if(typeof E.then=="function")return k(f,m,y,Yo(E),$);if(E.$$typeof===re)return k(f,m,y,So(m,E),$);Mo(m,E)}return null}function W(f,m,y,E){for(var $=null,fe=null,X=m,se=m=0,he=null;X!==null&&se<y.length;se++){X.index>se?(he=X,X=null):he=X.sibling;var ye=w(f,X,y[se],E);if(ye===null){X===null&&(X=he);break}e&&X&&ye.alternate===null&&t(f,X),m=o(ye,m,se),fe===null?$=ye:fe.sibling=ye,fe=ye,X=he}if(se===y.length)return a(f,X),me&&ta(f,se),$;if(X===null){for(;se<y.length;se++)X=B(f,y[se],E),X!==null&&(m=o(X,m,se),fe===null?$=X:fe.sibling=X,fe=X);return me&&ta(f,se),$}for(X=n(X);se<y.length;se++)he=k(X,f,se,y[se],E),he!==null&&(e&&he.alternate!==null&&X.delete(he.key===null?se:he.key),m=o(he,m,se),fe===null?$=he:fe.sibling=he,fe=he);return e&&X.forEach(function(La){return t(f,La)}),me&&ta(f,se),$}function ee(f,m,y,E){if(y==null)throw Error(d(151));for(var $=null,fe=null,X=m,se=m=0,he=null,ye=y.next();X!==null&&!ye.done;se++,ye=y.next()){X.index>se?(he=X,X=null):he=X.sibling;var La=w(f,X,ye.value,E);if(La===null){X===null&&(X=he);break}e&&X&&La.alternate===null&&t(f,X),m=o(La,m,se),fe===null?$=La:fe.sibling=La,fe=La,X=he}if(ye.done)return a(f,X),me&&ta(f,se),$;if(X===null){for(;!ye.done;se++,ye=y.next())ye=B(f,ye.value,E),ye!==null&&(m=o(ye,m,se),fe===null?$=ye:fe.sibling=ye,fe=ye);return me&&ta(f,se),$}for(X=n(X);!ye.done;se++,ye=y.next())ye=k(X,f,se,ye.value,E),ye!==null&&(e&&ye.alternate!==null&&X.delete(ye.key===null?se:ye.key),m=o(ye,m,se),fe===null?$=ye:fe.sibling=ye,fe=ye);return e&&X.forEach(function(Ey){return t(f,Ey)}),me&&ta(f,se),$}function ke(f,m,y,E){if(typeof y=="object"&&y!==null&&y.type===ae&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case te:e:{for(var $=y.key;m!==null;){if(m.key===$){if($=y.type,$===ae){if(m.tag===7){a(f,m.sibling),E=l(m,y.props.children),E.return=f,f=E;break e}}else if(m.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Oe&&ln($)===m.type){a(f,m.sibling),E=l(m,y.props),jl(E,y),E.return=f,f=E;break e}a(f,m);break}else t(f,m);m=m.sibling}y.type===ae?(E=Pa(y.props.children,f.mode,E,y.key),E.return=f,f=E):(E=jo(y.type,y.key,y.props,null,f.mode,E),jl(E,y),E.return=f,f=E)}return s(f);case P:e:{for($=y.key;m!==null;){if(m.key===$)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){a(f,m.sibling),E=l(m,y.children||[]),E.return=f,f=E;break e}else{a(f,m);break}else t(f,m);m=m.sibling}E=es(y,f.mode,E),E.return=f,f=E}return s(f);case Oe:return y=ln(y),ke(f,m,y,E)}if(He(y))return W(f,m,y,E);if(Q(y)){if($=Q(y),typeof $!="function")throw Error(d(150));return y=$.call(y),ee(f,m,y,E)}if(typeof y.then=="function")return ke(f,m,Yo(y),E);if(y.$$typeof===re)return ke(f,m,So(f,y),E);Mo(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,m!==null&&m.tag===6?(a(f,m.sibling),E=l(m,y),E.return=f,f=E):(a(f,m),E=Pi(y,f.mode,E),E.return=f,f=E),s(f)):a(f,m)}return function(f,m,y,E){try{Il=0;var $=ke(f,m,y,E);return Vn=null,$}catch(X){if(X===Un||X===Eo)throw X;var fe=xt(29,X,null,f.mode);return fe.lanes=E,fe.return=f,fe}finally{}}}var sn=lc(!0),oc=lc(!1),Aa=!1;function hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ms(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ge&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Io(e),Ru(e,null,a),t}return ko(e,n,t,a),Io(e)}function Nl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Kr(e,a)}}function fs(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?l=o=s:o=o.next=s,a=a.next}while(a!==null);o===null?l=o=t:o=o.next=t}else l=o=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ys=!1;function Al(){if(ys){var e=zn;if(e!==null)throw e}}function Sl(e,t,a,n){ys=!1;var l=e.updateQueue;Aa=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var c=u,g=c.next;c.next=null,s===null?o=g:s.next=g,s=c;var A=e.alternate;A!==null&&(A=A.updateQueue,u=A.lastBaseUpdate,u!==s&&(u===null?A.firstBaseUpdate=g:u.next=g,A.lastBaseUpdate=c))}if(o!==null){var B=l.baseState;s=0,A=g=c=null,u=o;do{var w=u.lane&-536870913,k=w!==u.lane;if(k?(de&w)===w:(n&w)===w){w!==0&&w===Cn&&(ys=!0),A!==null&&(A=A.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var W=e,ee=u;w=t;var ke=a;switch(ee.tag){case 1:if(W=ee.payload,typeof W=="function"){B=W.call(ke,B,w);break e}B=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ee.payload,w=typeof W=="function"?W.call(ke,B,w):W,w==null)break e;B=U({},B,w);break e;case 2:Aa=!0}}w=u.callback,w!==null&&(e.flags|=64,k&&(e.flags|=8192),k=l.callbacks,k===null?l.callbacks=[w]:k.push(w))}else k={lane:w,tag:u.tag,payload:u.payload,callback:u.callback,next:null},A===null?(g=A=k,c=B):A=A.next=k,s|=w;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;k=u,u=k.next,k.next=null,l.lastBaseUpdate=k,l.shared.pending=null}}while(!0);A===null&&(c=B),l.baseState=c,l.firstBaseUpdate=g,l.lastBaseUpdate=A,o===null&&(l.shared.lanes=0),Ca|=s,e.lanes=s,e.memoizedState=B}}function ic(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function sc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ic(a[e],t)}var _n=h(null),Co=h(0);function rc(e,t){e=ha,D(Co,e),D(_n,t),ha=e|t.baseLanes}function gs(){D(Co,ha),D(_n,_n.current)}function ps(){ha=Co.current,T(_n),T(Co)}var kt=h(null),Ut=null;function Ea(e){var t=e.alternate;D(De,De.current&1),D(kt,e),Ut===null&&(t===null||_n.current!==null||t.memoizedState!==null)&&(Ut=e)}function bs(e){D(De,De.current),D(kt,e),Ut===null&&(Ut=e)}function uc(e){e.tag===22?(D(De,De.current),D(kt,e),Ut===null&&(Ut=e)):Ba()}function Ba(){D(De,De.current),D(kt,kt.current)}function It(e){T(kt),Ut===e&&(Ut=null),T(De)}var De=h(0);function zo(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jr(a)||Nr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var la=0,ie=null,ve=null,We=null,Uo=!1,On=!1,rn=!1,Vo=0,Tl=0,Hn=null,wf=0;function ze(){throw Error(d(321))}function ws(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!vt(e[a],t[a]))return!1;return!0}function vs(e,t,a,n,l,o){return la=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Wc:Us,rn=!1,o=a(n,l),rn=!1,On&&(o=dc(t,a,n,l)),cc(e),o}function cc(e){N.H=Yl;var t=ve!==null&&ve.next!==null;if(la=0,We=ve=ie=null,Uo=!1,Tl=0,Hn=null,t)throw Error(d(300));e===null||Xe||(e=e.dependencies,e!==null&&Ao(e)&&(Xe=!0))}function dc(e,t,a,n){ie=e;var l=0;do{if(On&&(Hn=null),Tl=0,On=!1,25<=l)throw Error(d(301));if(l+=1,We=ve=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}N.H=Xc,o=t(a,n)}while(On);return o}function vf(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?El(t):t,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(ie.flags|=1024),t}function xs(){var e=Vo!==0;return Vo=0,e}function ks(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Is(e){if(Uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Uo=!1}la=0,We=ve=ie=null,On=!1,Tl=Vo=0,Hn=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ie.memoizedState=We=e:We=We.next=e,We}function qe(){if(ve===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=We===null?ie.memoizedState:We.next;if(t!==null)We=t,ve=e;else{if(e===null)throw ie.alternate===null?Error(d(467)):Error(d(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},We===null?ie.memoizedState=We=e:We=We.next=e}return We}function _o(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function El(e){var t=Tl;return Tl+=1,Hn===null&&(Hn=[]),e=tc(Hn,e,t),t=ie,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Wc:Us),e}function Oo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return El(e);if(e.$$typeof===re)return at(e)}throw Error(d(438,String(e)))}function js(e){var t=null,a=ie.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ie.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=_o(),ie.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=K;return t.index++,a}function oa(e,t){return typeof t=="function"?t(e):t}function Ho(e){var t=qe();return Ns(t,ve,e)}function Ns(e,t,a){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=a;var l=e.baseQueue,o=n.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}t.baseQueue=l=o,n.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var u=s=null,c=null,g=t,A=!1;do{var B=g.lane&-536870913;if(B!==g.lane?(de&B)===B:(la&B)===B){var w=g.revertLane;if(w===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),B===Cn&&(A=!0);else if((la&w)===w){g=g.next,w===Cn&&(A=!0);continue}else B={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(u=c=B,s=o):c=c.next=B,ie.lanes|=w,Ca|=w;B=g.action,rn&&a(o,B),o=g.hasEagerState?g.eagerState:a(o,B)}else w={lane:B,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(u=c=w,s=o):c=c.next=w,ie.lanes|=B,Ca|=B;g=g.next}while(g!==null&&g!==t);if(c===null?s=o:c.next=u,!vt(o,e.memoizedState)&&(Xe=!0,A&&(a=zn,a!==null)))throw a;e.memoizedState=o,e.baseState=s,e.baseQueue=c,n.lastRenderedState=o}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function As(e){var t=qe(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,o=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);vt(o,t.memoizedState)||(Xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function hc(e,t,a){var n=ie,l=qe(),o=me;if(o){if(a===void 0)throw Error(d(407));a=a()}else a=t();var s=!vt((ve||l).memoizedState,a);if(s&&(l.memoizedState=a,Xe=!0),l=l.queue,Es(yc.bind(null,n,l,e),[e]),l.getSnapshot!==t||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Dn(9,{destroy:void 0},fc.bind(null,n,l,a,t),null),je===null)throw Error(d(349));o||(la&127)!==0||mc(n,t,a)}return a}function mc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ie.updateQueue,t===null?(t=_o(),ie.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function fc(e,t,a,n){t.value=a,t.getSnapshot=n,gc(t)&&pc(e)}function yc(e,t,a){return a(function(){gc(t)&&pc(e)})}function gc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!vt(e,a)}catch{return!0}}function pc(e){var t=$a(e,2);t!==null&&gt(t,e,2)}function Ss(e){var t=st();if(typeof e=="function"){var a=e;if(e=a(),rn){wa(!0);try{a()}finally{wa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},t}function bc(e,t,a,n){return e.baseState=a,Ns(e,ve,typeof n=="function"?n:oa)}function xf(e,t,a,n,l){if(Ro(e))throw Error(d(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};N.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,wc(t,o)):(o.next=a.next,t.pending=a.next=o)}}function wc(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var o=N.T,s={};N.T=s;try{var u=a(l,n),c=N.S;c!==null&&c(s,u),vc(e,t,u)}catch(g){Ts(e,t,g)}finally{o!==null&&s.types!==null&&(o.types=s.types),N.T=o}}else try{o=a(l,n),vc(e,t,o)}catch(g){Ts(e,t,g)}}function vc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){xc(e,t,n)},function(n){return Ts(e,t,n)}):xc(e,t,a)}function xc(e,t,a){t.status="fulfilled",t.value=a,kc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,wc(e,a)))}function Ts(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,kc(t),t=t.next;while(t!==n)}e.action=null}function kc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ic(e,t){return t}function jc(e,t){if(me){var a=je.formState;if(a!==null){e:{var n=ie;if(me){if(Se){t:{for(var l=Se,o=zt;l.nodeType!==8;){if(!o){l=null;break t}if(l=Vt(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){Se=Vt(l.nextSibling),n=l.data==="F!";break e}}ja(n)}n=!1}n&&(t=a[0])}}return a=st(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ic,lastRenderedState:t},a.queue=n,a=Lc.bind(null,ie,n),n.dispatch=a,n=Ss(!1),o=zs.bind(null,ie,!1,n.queue),n=st(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=xf.bind(null,ie,l,o,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Nc(e){var t=qe();return Ac(t,ve,e)}function Ac(e,t,a){if(t=Ns(e,t,Ic)[0],e=Ho(oa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=El(t)}catch(s){throw s===Un?Eo:s}else n=t;t=qe();var l=t.queue,o=l.dispatch;return a!==t.memoizedState&&(ie.flags|=2048,Dn(9,{destroy:void 0},kf.bind(null,l,a),null)),[n,o,e]}function kf(e,t){e.action=t}function Sc(e){var t=qe(),a=ve;if(a!==null)return Ac(t,a,e);qe(),t=t.memoizedState,a=qe();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Dn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ie.updateQueue,t===null&&(t=_o(),ie.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Tc(){return qe().memoizedState}function Do(e,t,a,n){var l=st();ie.flags|=e,l.memoizedState=Dn(1|t,{destroy:void 0},a,n===void 0?null:n)}function qo(e,t,a,n){var l=qe();n=n===void 0?null:n;var o=l.memoizedState.inst;ve!==null&&n!==null&&ws(n,ve.memoizedState.deps)?l.memoizedState=Dn(t,o,a,n):(ie.flags|=e,l.memoizedState=Dn(1|t,o,a,n))}function Ec(e,t){Do(8390656,8,e,t)}function Es(e,t){qo(2048,8,e,t)}function If(e){ie.flags|=4;var t=ie.updateQueue;if(t===null)t=_o(),ie.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Bc(e){var t=qe().memoizedState;return If({ref:t,nextImpl:e}),function(){if((ge&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function Yc(e,t){return qo(4,2,e,t)}function Mc(e,t){return qo(4,4,e,t)}function Cc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zc(e,t,a){a=a!=null?a.concat([e]):null,qo(4,4,Cc.bind(null,t,e),a)}function Bs(){}function Uc(e,t){var a=qe();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&ws(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Vc(e,t){var a=qe();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&ws(t,n[1]))return n[0];if(n=e(),rn){wa(!0);try{e()}finally{wa(!1)}}return a.memoizedState=[n,t],n}function Ys(e,t,a){return a===void 0||(la&1073741824)!==0&&(de&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=_d(),ie.lanes|=e,Ca|=e,a)}function _c(e,t,a,n){return vt(a,t)?a:_n.current!==null?(e=Ys(e,a,n),vt(e,t)||(Xe=!0),e):(la&42)===0||(la&1073741824)!==0&&(de&261930)===0?(Xe=!0,e.memoizedState=a):(e=_d(),ie.lanes|=e,Ca|=e,t)}function Oc(e,t,a,n,l){var o=H.p;H.p=o!==0&&8>o?o:8;var s=N.T,u={};N.T=u,zs(e,!1,t,a);try{var c=l(),g=N.S;if(g!==null&&g(u,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var A=bf(c,n);Bl(e,t,A,At(e))}else Bl(e,t,n,At(e))}catch(B){Bl(e,t,{then:function(){},status:"rejected",reason:B},At())}finally{H.p=o,s!==null&&u.types!==null&&(s.types=u.types),N.T=s}}function jf(){}function Ms(e,t,a,n){if(e.tag!==5)throw Error(d(476));var l=Hc(e).queue;Oc(e,l,t,S,a===null?jf:function(){return Dc(e),a(n)})}function Hc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:S,baseState:S,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:S},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dc(e){var t=Hc(e);t.next===null&&(t=e.alternate.memoizedState),Bl(e,t.next.queue,{},At())}function Cs(){return at(Xl)}function qc(){return qe().memoizedState}function Rc(){return qe().memoizedState}function Nf(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=At();e=Sa(a);var n=Ta(t,e,a);n!==null&&(gt(n,t,a),Nl(n,t,a)),t={cache:rs()},e.payload=t;return}t=t.return}}function Af(e,t,a){var n=At();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ro(e)?Gc(t,a):(a=Ji(e,t,a,n),a!==null&&(gt(a,e,n),Fc(a,t,n)))}function Lc(e,t,a){var n=At();Bl(e,t,a,n)}function Bl(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ro(e))Gc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,u=o(s,a);if(l.hasEagerState=!0,l.eagerState=u,vt(u,s))return ko(e,t,l,0),je===null&&xo(),!1}catch{}finally{}if(a=Ji(e,t,l,n),a!==null)return gt(a,e,n),Fc(a,t,n),!0}return!1}function zs(e,t,a,n){if(n={lane:2,revertLane:hr(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ro(e)){if(t)throw Error(d(479))}else t=Ji(e,a,n,2),t!==null&&gt(t,e,2)}function Ro(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Gc(e,t){On=Uo=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Fc(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Kr(e,a)}}var Yl={readContext:at,use:Oo,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze};Yl.useEffectEvent=ze;var Wc={readContext:at,use:Oo,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Ec,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Do(4194308,4,Cc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){Do(4,2,e,t)},useMemo:function(e,t){var a=st();t=t===void 0?null:t;var n=e();if(rn){wa(!0);try{e()}finally{wa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=st();if(a!==void 0){var l=a(t);if(rn){wa(!0);try{a(t)}finally{wa(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Af.bind(null,ie,e),[n.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Ss(e);var t=e.queue,a=Lc.bind(null,ie,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Bs,useDeferredValue:function(e,t){var a=st();return Ys(a,e,t)},useTransition:function(){var e=Ss(!1);return e=Oc.bind(null,ie,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ie,l=st();if(me){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),je===null)throw Error(d(349));(de&127)!==0||mc(n,t,a)}l.memoizedState=a;var o={value:a,getSnapshot:t};return l.queue=o,Ec(yc.bind(null,n,o,e),[e]),n.flags|=2048,Dn(9,{destroy:void 0},fc.bind(null,n,o,a,t),null),a},useId:function(){var e=st(),t=je.identifierPrefix;if(me){var a=Ft,n=Gt;a=(n&~(1<<32-wt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Vo++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=wf++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Cs,useFormState:jc,useActionState:jc,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=zs.bind(null,ie,!0,a),a.dispatch=t,[e,t]},useMemoCache:js,useCacheRefresh:function(){return st().memoizedState=Nf.bind(null,ie)},useEffectEvent:function(e){var t=st(),a={impl:e};return t.memoizedState=a,function(){if((ge&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},Us={readContext:at,use:Oo,useCallback:Uc,useContext:at,useEffect:Es,useImperativeHandle:zc,useInsertionEffect:Yc,useLayoutEffect:Mc,useMemo:Vc,useReducer:Ho,useRef:Tc,useState:function(){return Ho(oa)},useDebugValue:Bs,useDeferredValue:function(e,t){var a=qe();return _c(a,ve.memoizedState,e,t)},useTransition:function(){var e=Ho(oa)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:El(e),t]},useSyncExternalStore:hc,useId:qc,useHostTransitionStatus:Cs,useFormState:Nc,useActionState:Nc,useOptimistic:function(e,t){var a=qe();return bc(a,ve,e,t)},useMemoCache:js,useCacheRefresh:Rc};Us.useEffectEvent=Bc;var Xc={readContext:at,use:Oo,useCallback:Uc,useContext:at,useEffect:Es,useImperativeHandle:zc,useInsertionEffect:Yc,useLayoutEffect:Mc,useMemo:Vc,useReducer:As,useRef:Tc,useState:function(){return As(oa)},useDebugValue:Bs,useDeferredValue:function(e,t){var a=qe();return ve===null?Ys(a,e,t):_c(a,ve.memoizedState,e,t)},useTransition:function(){var e=As(oa)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:El(e),t]},useSyncExternalStore:hc,useId:qc,useHostTransitionStatus:Cs,useFormState:Sc,useActionState:Sc,useOptimistic:function(e,t){var a=qe();return ve!==null?bc(a,ve,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:js,useCacheRefresh:Rc};Xc.useEffectEvent=Bc;function Vs(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:U({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var _s={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=At(),l=Sa(n);l.payload=t,a!=null&&(l.callback=a),t=Ta(e,l,n),t!==null&&(gt(t,e,n),Nl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=At(),l=Sa(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ta(e,l,n),t!==null&&(gt(t,e,n),Nl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=At(),n=Sa(a);n.tag=2,t!=null&&(n.callback=t),t=Ta(e,n,a),t!==null&&(gt(t,e,a),Nl(t,e,a))}};function Qc(e,t,a,n,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!pl(a,n)||!pl(l,o):!0}function Zc(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&_s.enqueueReplaceState(t,t.state,null)}function un(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=U({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Kc(e){vo(e)}function Jc(e){console.error(e)}function $c(e){vo(e)}function Lo(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Pc(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Os(e,t,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Lo(e,t)},a}function ed(e){return e=Sa(e),e.tag=3,e}function td(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var o=n.value;e.payload=function(){return l(o)},e.callback=function(){Pc(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Pc(t,a,n),typeof l!="function"&&(za===null?za=new Set([this]):za.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})})}function Sf(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Mn(t,a,l,!0),a=kt.current,a!==null){switch(a.tag){case 31:case 13:return Ut===null?ti():a.alternate===null&&Ue===0&&(Ue=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Bo?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),ur(e,n,l)),!1;case 22:return a.flags|=65536,n===Bo?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),ur(e,n,l)),!1}throw Error(d(435,a.tag))}return ur(e,n,l),ti(),!1}if(me)return t=kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==ns&&(e=Error(d(422),{cause:n}),vl(Yt(e,a)))):(n!==ns&&(t=Error(d(423),{cause:n}),vl(Yt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Yt(n,a),l=Os(e.stateNode,n,l),fs(e,l),Ue!==4&&(Ue=2)),!1;var o=Error(d(520),{cause:n});if(o=Yt(o,a),Hl===null?Hl=[o]:Hl.push(o),Ue!==4&&(Ue=2),t===null)return!0;n=Yt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Os(a.stateNode,n,e),fs(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(za===null||!za.has(o))))return a.flags|=65536,l&=-l,a.lanes|=l,l=ed(l),td(l,e,a,n),fs(a,l),!1}a=a.return}while(a!==null);return!1}var Hs=Error(d(461)),Xe=!1;function nt(e,t,a,n){t.child=e===null?oc(t,null,a,n):sn(t,e.child,a,n)}function ad(e,t,a,n,l){a=a.render;var o=t.ref;if("ref"in n){var s={};for(var u in n)u!=="ref"&&(s[u]=n[u])}else s=n;return an(t),n=vs(e,t,a,s,o,l),u=xs(),e!==null&&!Xe?(ks(e,t,l),ia(e,t,l)):(me&&u&&ts(t),t.flags|=1,nt(e,t,n,l),t.child)}function nd(e,t,a,n,l){if(e===null){var o=a.type;return typeof o=="function"&&!$i(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,ld(e,t,o,n,l)):(e=jo(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Xs(e,l)){var s=o.memoizedProps;if(a=a.compare,a=a!==null?a:pl,a(s,n)&&e.ref===t.ref)return ia(e,t,l)}return t.flags|=1,e=ea(o,n),e.ref=t.ref,e.return=t,t.child=e}function ld(e,t,a,n,l){if(e!==null){var o=e.memoizedProps;if(pl(o,n)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=n=o,Xs(e,l))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,ia(e,t,l)}return Ds(e,t,a,n,l)}function od(e,t,a,n){var l=n.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~o}else n=0,t.child=null;return id(e,t,o,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&To(t,o!==null?o.cachePool:null),o!==null?rc(t,o):gs(),uc(t);else return n=t.lanes=536870912,id(e,t,o!==null?o.baseLanes|a:a,a,n)}else o!==null?(To(t,o.cachePool),rc(t,o),Ba(),t.memoizedState=null):(e!==null&&To(t,null),gs(),Ba());return nt(e,t,l,a),t.child}function Ml(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function id(e,t,a,n,l){var o=cs();return o=o===null?null:{parent:Fe._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&To(t,null),gs(),uc(t),e!==null&&Mn(e,t,n,!0),t.childLanes=l,null}function Go(e,t){return t=Wo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sd(e,t,a){return sn(t,e.child,null,a),e=Go(t,t.pendingProps),e.flags|=2,It(t),t.memoizedState=null,e}function Tf(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(me){if(n.mode==="hidden")return e=Go(t,n),t.lanes=536870912,Ml(null,e);if(bs(t),(e=Se)?(e=wh(e,zt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ka!==null?{id:Gt,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},a=Gu(e),a.return=t,t.child=a,tt=t,Se=null)):e=null,e===null)throw ja(t);return t.lanes=536870912,null}return Go(t,n)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(bs(t),l)if(t.flags&256)t.flags&=-257,t=sd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Xe||Mn(e,t,a,!1),l=(a&e.childLanes)!==0,Xe||l){if(n=je,n!==null&&(s=Jr(n,a),s!==0&&s!==o.retryLane))throw o.retryLane=s,$a(e,s),gt(n,e,s),Hs;ti(),t=sd(e,t,a)}else e=o.treeContext,Se=Vt(s.nextSibling),tt=t,me=!0,Ia=null,zt=!1,e!==null&&Xu(t,e),t=Go(t,n),t.flags|=4096;return t}return e=ea(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fo(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ds(e,t,a,n,l){return an(t),a=vs(e,t,a,n,void 0,l),n=xs(),e!==null&&!Xe?(ks(e,t,l),ia(e,t,l)):(me&&n&&ts(t),t.flags|=1,nt(e,t,a,l),t.child)}function rd(e,t,a,n,l,o){return an(t),t.updateQueue=null,a=dc(t,n,a,l),cc(e),n=xs(),e!==null&&!Xe?(ks(e,t,o),ia(e,t,o)):(me&&n&&ts(t),t.flags|=1,nt(e,t,a,o),t.child)}function ud(e,t,a,n,l){if(an(t),t.stateNode===null){var o=Tn,s=a.contextType;typeof s=="object"&&s!==null&&(o=at(s)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=_s,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},hs(t),s=a.contextType,o.context=typeof s=="object"&&s!==null?at(s):Tn,o.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Vs(t,a,s,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&_s.enqueueReplaceState(o,o.state,null),Sl(t,n,o,l),Al(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var u=t.memoizedProps,c=un(a,u);o.props=c;var g=o.context,A=a.contextType;s=Tn,typeof A=="object"&&A!==null&&(s=at(A));var B=a.getDerivedStateFromProps;A=typeof B=="function"||typeof o.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,A||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u||g!==s)&&Zc(t,o,n,s),Aa=!1;var w=t.memoizedState;o.state=w,Sl(t,n,o,l),Al(),g=t.memoizedState,u||w!==g||Aa?(typeof B=="function"&&(Vs(t,a,B,n),g=t.memoizedState),(c=Aa||Qc(t,a,c,n,w,g,s))?(A||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=g),o.props=n,o.state=g,o.context=s,n=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,ms(e,t),s=t.memoizedProps,A=un(a,s),o.props=A,B=t.pendingProps,w=o.context,g=a.contextType,c=Tn,typeof g=="object"&&g!==null&&(c=at(g)),u=a.getDerivedStateFromProps,(g=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==B||w!==c)&&Zc(t,o,n,c),Aa=!1,w=t.memoizedState,o.state=w,Sl(t,n,o,l),Al();var k=t.memoizedState;s!==B||w!==k||Aa||e!==null&&e.dependencies!==null&&Ao(e.dependencies)?(typeof u=="function"&&(Vs(t,a,u,n),k=t.memoizedState),(A=Aa||Qc(t,a,A,n,w,k,c)||e!==null&&e.dependencies!==null&&Ao(e.dependencies))?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,k,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,k,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),o.props=n,o.state=k,o.context=c,n=A):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,Fo(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=sn(t,e.child,null,l),t.child=sn(t,null,a,l)):nt(e,t,a,l),t.memoizedState=o.state,e=t.child):e=ia(e,t,l),e}function cd(e,t,a,n){return en(),t.flags|=256,nt(e,t,a,n),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rs(e){return{baseLanes:e,cachePool:Pu()}}function Ls(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Nt),e}function dd(e,t,a){var n=t.pendingProps,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(l?Ea(t):Ba(),(e=Se)?(e=wh(e,zt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ka!==null?{id:Gt,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},a=Gu(e),a.return=t,t.child=a,tt=t,Se=null)):e=null,e===null)throw ja(t);return Nr(e)?t.lanes=32:t.lanes=536870912,null}var u=n.children;return n=n.fallback,l?(Ba(),l=t.mode,u=Wo({mode:"hidden",children:u},l),n=Pa(n,l,a,null),u.return=t,n.return=t,u.sibling=n,t.child=u,n=t.child,n.memoizedState=Rs(a),n.childLanes=Ls(e,s,a),t.memoizedState=qs,Ml(null,n)):(Ea(t),Gs(t,u))}var c=e.memoizedState;if(c!==null&&(u=c.dehydrated,u!==null)){if(o)t.flags&256?(Ea(t),t.flags&=-257,t=Fs(e,t,a)):t.memoizedState!==null?(Ba(),t.child=e.child,t.flags|=128,t=null):(Ba(),u=n.fallback,l=t.mode,n=Wo({mode:"visible",children:n.children},l),u=Pa(u,l,a,null),u.flags|=2,n.return=t,u.return=t,n.sibling=u,t.child=n,sn(t,e.child,null,a),n=t.child,n.memoizedState=Rs(a),n.childLanes=Ls(e,s,a),t.memoizedState=qs,t=Ml(null,n));else if(Ea(t),Nr(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var g=s.dgst;s=g,n=Error(d(419)),n.stack="",n.digest=s,vl({value:n,source:null,stack:null}),t=Fs(e,t,a)}else if(Xe||Mn(e,t,a,!1),s=(a&e.childLanes)!==0,Xe||s){if(s=je,s!==null&&(n=Jr(s,a),n!==0&&n!==c.retryLane))throw c.retryLane=n,$a(e,n),gt(s,e,n),Hs;jr(u)||ti(),t=Fs(e,t,a)}else jr(u)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,Se=Vt(u.nextSibling),tt=t,me=!0,Ia=null,zt=!1,e!==null&&Xu(t,e),t=Gs(t,n.children),t.flags|=4096);return t}return l?(Ba(),u=n.fallback,l=t.mode,c=e.child,g=c.sibling,n=ea(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&65011712,g!==null?u=ea(g,u):(u=Pa(u,l,a,null),u.flags|=2),u.return=t,n.return=t,n.sibling=u,t.child=n,Ml(null,n),n=t.child,u=e.child.memoizedState,u===null?u=Rs(a):(l=u.cachePool,l!==null?(c=Fe._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Pu(),u={baseLanes:u.baseLanes|a,cachePool:l}),n.memoizedState=u,n.childLanes=Ls(e,s,a),t.memoizedState=qs,Ml(e.child,n)):(Ea(t),a=e.child,e=a.sibling,a=ea(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Gs(e,t){return t=Wo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Wo(e,t){return e=xt(22,e,null,t),e.lanes=0,e}function Fs(e,t,a){return sn(t,e.child,null,a),e=Gs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),is(e.return,t,a)}function Ws(e,t,a,n,l,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=l,s.treeForkCount=o)}function md(e,t,a){var n=t.pendingProps,l=n.revealOrder,o=n.tail;n=n.children;var s=De.current,u=(s&2)!==0;if(u?(s=s&1|2,t.flags|=128):s&=1,D(De,s),nt(e,t,n,a),n=me?wl:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hd(e,a,t);else if(e.tag===19)hd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&zo(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Ws(t,!1,l,a,o,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&zo(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Ws(t,!0,a,null,o,n);break;case"together":Ws(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function ia(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Mn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=ea(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ea(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Xs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ao(e)))}function Ef(e,t,a){switch(t.tag){case 3:Ce(t,t.stateNode.containerInfo),Na(t,Fe,e.memoizedState.cache),en();break;case 27:case 5:Qt(t);break;case 4:Ce(t,t.stateNode.containerInfo);break;case 10:Na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,bs(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ea(t),t.flags|=128,null):(a&t.child.childLanes)!==0?dd(e,t,a):(Ea(t),e=ia(e,t,a),e!==null?e.sibling:null);Ea(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Mn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return md(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(De,De.current),n)break;return null;case 22:return t.lanes=0,od(e,t,a,t.pendingProps);case 24:Na(t,Fe,e.memoizedState.cache)}return ia(e,t,a)}function fd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Xs(e,a)&&(t.flags&128)===0)return Xe=!1,Ef(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,me&&(t.flags&1048576)!==0&&Wu(t,wl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=ln(t.elementType),t.type=e,typeof e=="function")$i(e)?(n=un(e,n),t.tag=1,t=ud(null,t,e,n,a)):(t.tag=0,t=Ds(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===Ae){t.tag=11,t=ad(null,t,e,n,a);break e}else if(l===Z){t.tag=14,t=nd(null,t,e,n,a);break e}}throw t=Pe(e)||e,Error(d(306,t,""))}}return t;case 0:return Ds(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=un(n,t.pendingProps),ud(e,t,n,l,a);case 3:e:{if(Ce(t,t.stateNode.containerInfo),e===null)throw Error(d(387));n=t.pendingProps;var o=t.memoizedState;l=o.element,ms(e,t),Sl(t,n,null,a);var s=t.memoizedState;if(n=s.cache,Na(t,Fe,n),n!==o.cache&&ss(t,[Fe],a,!0),Al(),n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=cd(e,t,n,a);break e}else if(n!==l){l=Yt(Error(d(424)),t),vl(l),t=cd(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Se=Vt(e.firstChild),tt=t,me=!0,Ia=null,zt=!0,a=oc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(en(),n===l){t=ia(e,t,a);break e}nt(e,t,n,a)}t=t.child}return t;case 26:return Fo(e,t),e===null?(a=Nh(t.type,null,t.pendingProps,null))?t.memoizedState=a:me||(a=t.type,e=t.pendingProps,n=ri(V.current).createElement(a),n[et]=t,n[ct]=e,lt(n,a,e),Je(n),t.stateNode=n):t.memoizedState=Nh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Qt(t),e===null&&me&&(n=t.stateNode=kh(t.type,t.pendingProps,V.current),tt=t,zt=!0,l=Se,Oa(t.type)?(Ar=l,Se=Vt(n.firstChild)):Se=l),nt(e,t,t.pendingProps.children,a),Fo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((l=n=Se)&&(n=oy(n,t.type,t.pendingProps,zt),n!==null?(t.stateNode=n,tt=t,Se=Vt(n.firstChild),zt=!1,l=!0):l=!1),l||ja(t)),Qt(t),l=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,n=o.children,xr(l,o)?n=null:s!==null&&xr(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=vs(e,t,vf,null,null,a),Xl._currentValue=l),Fo(e,t),nt(e,t,n,a),t.child;case 6:return e===null&&me&&((e=a=Se)&&(a=iy(a,t.pendingProps,zt),a!==null?(t.stateNode=a,tt=t,Se=null,e=!0):e=!1),e||ja(t)),null;case 13:return dd(e,t,a);case 4:return Ce(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=sn(t,null,n,a):nt(e,t,n,a),t.child;case 11:return ad(e,t,t.type,t.pendingProps,a);case 7:return nt(e,t,t.pendingProps,a),t.child;case 8:return nt(e,t,t.pendingProps.children,a),t.child;case 12:return nt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Na(t,t.type,n.value),nt(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,an(t),l=at(l),n=n(l),t.flags|=1,nt(e,t,n,a),t.child;case 14:return nd(e,t,t.type,t.pendingProps,a);case 15:return ld(e,t,t.type,t.pendingProps,a);case 19:return md(e,t,a);case 31:return Tf(e,t,a);case 22:return od(e,t,a,t.pendingProps);case 24:return an(t),n=at(Fe),e===null?(l=cs(),l===null&&(l=je,o=rs(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=a),l=o),t.memoizedState={parent:n,cache:l},hs(t),Na(t,Fe,l)):((e.lanes&a)!==0&&(ms(e,t),Sl(t,null,null,a),Al()),l=e.memoizedState,o=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Na(t,Fe,n)):(n=o.cache,Na(t,Fe,n),n!==l.cache&&ss(t,[Fe],a,!0))),nt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function sa(e){e.flags|=4}function Qs(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(qd())e.flags|=8192;else throw on=Bo,ds}else e.flags&=-16777217}function yd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bh(t))if(qd())e.flags|=8192;else throw on=Bo,ds}function Xo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Qr():536870912,e.lanes|=t,Gn|=t)}function Cl(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Bf(e,t,a){var n=t.pendingProps;switch(as(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(Fe),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Yn(t)?sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ls())),Te(t),null;case 26:var l=t.type,o=t.memoizedState;return e===null?(sa(t),o!==null?(Te(t),yd(t,o)):(Te(t),Qs(t,l,null,n,a))):o?o!==e.memoizedState?(sa(t),Te(t),yd(t,o)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&sa(t),Te(t),Qs(t,l,e,n,a)),null;case 27:if(pa(t),a=V.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&sa(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Te(t),null}e=L.current,Yn(t)?Qu(t):(e=kh(l,n,a),t.stateNode=e,sa(t))}return Te(t),null;case 5:if(pa(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&sa(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Te(t),null}if(o=L.current,Yn(t))Qu(t);else{var s=ri(V.current);switch(o){case 1:o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=s.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?s.createElement(l,{is:n.is}):s.createElement(l)}}o[et]=t,o[ct]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;e:switch(lt(o,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&sa(t)}}return Te(t),Qs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&sa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(e=V.current,Yn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=tt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[et]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||dh(e.nodeValue,a)),e||ja(t,!0)}else e=ri(e).createTextNode(n),e[et]=t,t.stateNode=e}return Te(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Yn(t),a!==null){if(e===null){if(!n)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[et]=t}else en(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else a=ls(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(It(t),t):(It(t),null);if((t.flags&128)!==0)throw Error(d(558))}return Te(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Yn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(d(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(d(317));l[et]=t}else en(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),l=!1}else l=ls(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(It(t),t):(It(t),null)}return It(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Xo(t,t.updateQueue),Te(t),null);case 4:return Ie(),e===null&&gr(t.stateNode.containerInfo),Te(t),null;case 10:return na(t.type),Te(t),null;case 19:if(T(De),n=t.memoizedState,n===null)return Te(t),null;if(l=(t.flags&128)!==0,o=n.rendering,o===null)if(l)Cl(n,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=zo(e),o!==null){for(t.flags|=128,Cl(n,!1),e=o.updateQueue,t.updateQueue=e,Xo(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Lu(a,e),a=a.sibling;return D(De,De.current&1|2),me&&ta(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&ne()>$o&&(t.flags|=128,l=!0,Cl(n,!1),t.lanes=4194304)}else{if(!l)if(e=zo(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Xo(t,e),Cl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!me)return Te(t),null}else 2*ne()-n.renderingStartTime>$o&&a!==536870912&&(t.flags|=128,l=!0,Cl(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(e=n.last,e!==null?e.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ne(),e.sibling=null,a=De.current,D(De,l?a&1|2:a&1),me&&ta(t,n.treeForkCount),e):(Te(t),null);case 22:case 23:return It(t),ps(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),a=t.updateQueue,a!==null&&Xo(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&T(nn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),na(Fe),Te(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Yf(e,t){switch(as(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(Fe),Ie(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pa(t),null;case 31:if(t.memoizedState!==null){if(It(t),t.alternate===null)throw Error(d(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(It(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(De),null;case 4:return Ie(),null;case 10:return na(t.type),null;case 22:case 23:return It(t),ps(),e!==null&&T(nn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(Fe),null;case 25:return null;default:return null}}function gd(e,t){switch(as(t),t.tag){case 3:na(Fe),Ie();break;case 26:case 27:case 5:pa(t);break;case 4:Ie();break;case 31:t.memoizedState!==null&&It(t);break;case 13:It(t);break;case 19:T(De);break;case 10:na(t.type);break;case 22:case 23:It(t),ps(),e!==null&&T(nn);break;case 24:na(Fe)}}function zl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var o=a.create,s=a.inst;n=o(),s.destroy=n}a=a.next}while(a!==l)}}catch(u){we(t,t.return,u)}}function Ya(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){var s=n.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,l=t;var c=a,g=u;try{g()}catch(A){we(l,c,A)}}}n=n.next}while(n!==o)}}catch(A){we(t,t.return,A)}}function pd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{sc(t,a)}catch(n){we(e,e.return,n)}}}function bd(e,t,a){a.props=un(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){we(e,t,n)}}function Ul(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){we(e,t,l)}}function Wt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){we(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){we(e,t,l)}else a.current=null}function wd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){we(e,e.return,l)}}function Zs(e,t,a){try{var n=e.stateNode;Pf(n,e.type,a,t),n[ct]=t}catch(l){we(e,e.return,l)}}function vd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function Ks(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Js(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=$t));else if(n!==4&&(n===27&&Oa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Js(e,t,a),e=e.sibling;e!==null;)Js(e,t,a),e=e.sibling}function Qo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Qo(e,t,a),e=e.sibling;e!==null;)Qo(e,t,a),e=e.sibling}function xd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);lt(t,n,a),t[et]=e,t[ct]=a}catch(o){we(e,e.return,o)}}var ra=!1,Qe=!1,$s=!1,kd=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Mf(e,t){if(e=e.containerInfo,wr=yi,e=zu(e),Fi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var s=0,u=-1,c=-1,g=0,A=0,B=e,w=null;t:for(;;){for(var k;B!==a||l!==0&&B.nodeType!==3||(u=s+l),B!==o||n!==0&&B.nodeType!==3||(c=s+n),B.nodeType===3&&(s+=B.nodeValue.length),(k=B.firstChild)!==null;)w=B,B=k;for(;;){if(B===e)break t;if(w===a&&++g===l&&(u=s),w===o&&++A===n&&(c=s),(k=B.nextSibling)!==null)break;B=w,w=B.parentNode}B=k}a=u===-1||c===-1?null:{start:u,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(vr={focusedElem:e,selectionRange:a},yi=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,l=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var W=un(a.type,l);e=n.getSnapshotBeforeUpdate(W,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(ee){we(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ir(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ir(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function Id(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),n&4&&zl(5,a);break;case 1:if(ca(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){we(a,a.return,s)}else{var l=un(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){we(a,a.return,s)}}n&64&&pd(a),n&512&&Ul(a,a.return);break;case 3:if(ca(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{sc(e,t)}catch(s){we(a,a.return,s)}}break;case 27:t===null&&n&4&&xd(a);case 26:case 5:ca(e,a),t===null&&n&4&&wd(a),n&512&&Ul(a,a.return);break;case 12:ca(e,a);break;case 31:ca(e,a),n&4&&Ad(e,a);break;case 13:ca(e,a),n&4&&Sd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=qf.bind(null,a),sy(e,a))));break;case 22:if(n=a.memoizedState!==null||ra,!n){t=t!==null&&t.memoizedState!==null||Qe,l=ra;var o=Qe;ra=n,(Qe=t)&&!o?da(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),ra=l,Qe=o}break;case 30:break;default:ca(e,a)}}function jd(e){var t=e.alternate;t!==null&&(e.alternate=null,jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ti(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,ht=!1;function ua(e,t,a){for(a=a.child;a!==null;)Nd(e,t,a),a=a.sibling}function Nd(e,t,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(fn,a)}catch{}switch(a.tag){case 26:Qe||Wt(a,t),ua(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||Wt(a,t);var n=Ee,l=ht;Oa(a.type)&&(Ee=a.stateNode,ht=!1),ua(e,t,a),Gl(a.stateNode),Ee=n,ht=l;break;case 5:Qe||Wt(a,t);case 6:if(n=Ee,l=ht,Ee=null,ua(e,t,a),Ee=n,ht=l,Ee!==null)if(ht)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(a.stateNode)}catch(o){we(a,t,o)}else try{Ee.removeChild(a.stateNode)}catch(o){we(a,t,o)}break;case 18:Ee!==null&&(ht?(e=Ee,ph(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$n(e)):ph(Ee,a.stateNode));break;case 4:n=Ee,l=ht,Ee=a.stateNode.containerInfo,ht=!0,ua(e,t,a),Ee=n,ht=l;break;case 0:case 11:case 14:case 15:Ya(2,a,t),Qe||Ya(4,a,t),ua(e,t,a);break;case 1:Qe||(Wt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&bd(a,t,n)),ua(e,t,a);break;case 21:ua(e,t,a);break;case 22:Qe=(n=Qe)||a.memoizedState!==null,ua(e,t,a),Qe=n;break;default:ua(e,t,a)}}function Ad(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$n(e)}catch(a){we(t,t.return,a)}}}function Sd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$n(e)}catch(a){we(t,t.return,a)}}function Cf(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new kd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new kd),t;default:throw Error(d(435,e.tag))}}function Zo(e,t){var a=Cf(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=Rf.bind(null,e,n);n.then(l,l)}})}function mt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],o=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 27:if(Oa(u.type)){Ee=u.stateNode,ht=!1;break e}break;case 5:Ee=u.stateNode,ht=!1;break e;case 3:case 4:Ee=u.stateNode.containerInfo,ht=!0;break e}u=u.return}if(Ee===null)throw Error(d(160));Nd(o,s,l),Ee=null,ht=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Td(t,e),t=t.sibling}var Rt=null;function Td(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),ft(e),n&4&&(Ya(3,e,e.return),zl(3,e),Ya(5,e,e.return));break;case 1:mt(t,e),ft(e),n&512&&(Qe||a===null||Wt(a,a.return)),n&64&&ra&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Rt;if(mt(t,e),ft(e),n&512&&(Qe||a===null||Wt(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":o=l.getElementsByTagName("title")[0],(!o||o[rl]||o[et]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(n),l.head.insertBefore(o,l.querySelector("head > title"))),lt(o,n,a),o[et]=e,Je(o),n=o;break e;case"link":var s=Th("link","href",l).get(n+(a.href||""));if(s){for(var u=0;u<s.length;u++)if(o=s[u],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(u,1);break t}}o=l.createElement(n),lt(o,n,a),l.head.appendChild(o);break;case"meta":if(s=Th("meta","content",l).get(n+(a.content||""))){for(u=0;u<s.length;u++)if(o=s[u],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(u,1);break t}}o=l.createElement(n),lt(o,n,a),l.head.appendChild(o);break;default:throw Error(d(468,n))}o[et]=e,Je(o),n=o}e.stateNode=n}else Eh(l,e.type,e.stateNode);else e.stateNode=Sh(l,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?Eh(l,e.type,e.stateNode):Sh(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Zs(e,e.memoizedProps,a.memoizedProps)}break;case 27:mt(t,e),ft(e),n&512&&(Qe||a===null||Wt(a,a.return)),a!==null&&n&4&&Zs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mt(t,e),ft(e),n&512&&(Qe||a===null||Wt(a,a.return)),e.flags&32){l=e.stateNode;try{xn(l,"")}catch(W){we(e,e.return,W)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Zs(e,l,a!==null?a.memoizedProps:l)),n&1024&&($s=!0);break;case 6:if(mt(t,e),ft(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(W){we(e,e.return,W)}}break;case 3:if(di=null,l=Rt,Rt=ui(t.containerInfo),mt(t,e),Rt=l,ft(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(W){we(e,e.return,W)}$s&&($s=!1,Ed(e));break;case 4:n=Rt,Rt=ui(e.stateNode.containerInfo),mt(t,e),ft(e),Rt=n;break;case 12:mt(t,e),ft(e);break;case 31:mt(t,e),ft(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Zo(e,n)));break;case 13:mt(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jo=ne()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Zo(e,n)));break;case 22:l=e.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,g=ra,A=Qe;if(ra=g||l,Qe=A||c,mt(t,e),Qe=A,ra=g,ft(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||c||ra||Qe||cn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(o=c.stateNode,l)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=c.stateNode;var B=c.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null;u.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(W){we(c,c.return,W)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(W){we(c,c.return,W)}}}else if(t.tag===18){if(a===null){c=t;try{var k=c.stateNode;l?bh(k,!0):bh(c.stateNode,!1)}catch(W){we(c,c.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Zo(e,a))));break;case 19:mt(t,e),ft(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Zo(e,n)));break;case 30:break;case 21:break;default:mt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(vd(n)){a=n;break}n=n.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var l=a.stateNode,o=Ks(e);Qo(e,o,l);break;case 5:var s=a.stateNode;a.flags&32&&(xn(s,""),a.flags&=-33);var u=Ks(e);Qo(e,u,s);break;case 3:case 4:var c=a.stateNode.containerInfo,g=Ks(e);Js(e,g,c);break;default:throw Error(d(161))}}catch(A){we(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ed(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ed(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ca(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Id(e,t.alternate,t),t=t.sibling}function cn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ya(4,t,t.return),cn(t);break;case 1:Wt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&bd(t,t.return,a),cn(t);break;case 27:Gl(t.stateNode);case 26:case 5:Wt(t,t.return),cn(t);break;case 22:t.memoizedState===null&&cn(t);break;case 30:cn(t);break;default:cn(t)}e=e.sibling}}function da(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,o=t,s=o.flags;switch(o.tag){case 0:case 11:case 15:da(l,o,a),zl(4,o);break;case 1:if(da(l,o,a),n=o,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(g){we(n,n.return,g)}if(n=o,l=n.updateQueue,l!==null){var u=n.stateNode;try{var c=l.shared.hiddenCallbacks;if(c!==null)for(l.shared.hiddenCallbacks=null,l=0;l<c.length;l++)ic(c[l],u)}catch(g){we(n,n.return,g)}}a&&s&64&&pd(o),Ul(o,o.return);break;case 27:xd(o);case 26:case 5:da(l,o,a),a&&n===null&&s&4&&wd(o),Ul(o,o.return);break;case 12:da(l,o,a);break;case 31:da(l,o,a),a&&s&4&&Ad(l,o);break;case 13:da(l,o,a),a&&s&4&&Sd(l,o);break;case 22:o.memoizedState===null&&da(l,o,a),Ul(o,o.return);break;case 30:break;default:da(l,o,a)}t=t.sibling}}function Ps(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&xl(a))}function er(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xl(e))}function Lt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bd(e,t,a,n),t=t.sibling}function Bd(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,a,n),l&2048&&zl(9,t);break;case 1:Lt(e,t,a,n);break;case 3:Lt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xl(e)));break;case 12:if(l&2048){Lt(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,s=o.id,u=o.onPostCommit;typeof u=="function"&&u(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){we(t,t.return,c)}}else Lt(e,t,a,n);break;case 31:Lt(e,t,a,n);break;case 13:Lt(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState!==null?o._visibility&2?Lt(e,t,a,n):Vl(e,t):o._visibility&2?Lt(e,t,a,n):(o._visibility|=2,qn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Ps(s,t);break;case 24:Lt(e,t,a,n),l&2048&&er(t.alternate,t);break;default:Lt(e,t,a,n)}}function qn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,s=t,u=a,c=n,g=s.flags;switch(s.tag){case 0:case 11:case 15:qn(o,s,u,c,l),zl(8,s);break;case 23:break;case 22:var A=s.stateNode;s.memoizedState!==null?A._visibility&2?qn(o,s,u,c,l):Vl(o,s):(A._visibility|=2,qn(o,s,u,c,l)),l&&g&2048&&Ps(s.alternate,s);break;case 24:qn(o,s,u,c,l),l&&g&2048&&er(s.alternate,s);break;default:qn(o,s,u,c,l)}t=t.sibling}}function Vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:Vl(a,n),l&2048&&Ps(n.alternate,n);break;case 24:Vl(a,n),l&2048&&er(n.alternate,n);break;default:Vl(a,n)}t=t.sibling}}var _l=8192;function Rn(e,t,a){if(e.subtreeFlags&_l)for(e=e.child;e!==null;)Yd(e,t,a),e=e.sibling}function Yd(e,t,a){switch(e.tag){case 26:Rn(e,t,a),e.flags&_l&&e.memoizedState!==null&&wy(a,Rt,e.memoizedState,e.memoizedProps);break;case 5:Rn(e,t,a);break;case 3:case 4:var n=Rt;Rt=ui(e.stateNode.containerInfo),Rn(e,t,a),Rt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=_l,_l=16777216,Rn(e,t,a),_l=n):Rn(e,t,a));break;default:Rn(e,t,a)}}function Md(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ol(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];$e=n,zd(n,e)}Md(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cd(e),e=e.sibling}function Cd(e){switch(e.tag){case 0:case 11:case 15:Ol(e),e.flags&2048&&Ya(9,e,e.return);break;case 3:Ol(e);break;case 12:Ol(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ko(e)):Ol(e);break;default:Ol(e)}}function Ko(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];$e=n,zd(n,e)}Md(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ya(8,t,t.return),Ko(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ko(t));break;default:Ko(t)}e=e.sibling}}function zd(e,t){for(;$e!==null;){var a=$e;switch(a.tag){case 0:case 11:case 15:Ya(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:xl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,$e=n;else e:for(a=e;$e!==null;){n=$e;var l=n.sibling,o=n.return;if(jd(n),n===a){$e=null;break e}if(l!==null){l.return=o,$e=l;break e}$e=o}}}var zf={getCacheForType:function(e){var t=at(Fe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return at(Fe).controller.signal}},Uf=typeof WeakMap=="function"?WeakMap:Map,ge=0,je=null,ue=null,de=0,be=0,jt=null,Ma=!1,Ln=!1,tr=!1,ha=0,Ue=0,Ca=0,dn=0,ar=0,Nt=0,Gn=0,Hl=null,yt=null,nr=!1,Jo=0,Ud=0,$o=1/0,Po=null,za=null,Ke=0,Ua=null,Fn=null,ma=0,lr=0,or=null,Vd=null,Dl=0,ir=null;function At(){return(ge&2)!==0&&de!==0?de&-de:N.T!==null?hr():$r()}function _d(){if(Nt===0)if((de&536870912)===0||me){var e=io;io<<=1,(io&3932160)===0&&(io=262144),Nt=e}else Nt=536870912;return e=kt.current,e!==null&&(e.flags|=32),Nt}function gt(e,t,a){(e===je&&(be===2||be===9)||e.cancelPendingCommit!==null)&&(Wn(e,0),Va(e,de,Nt,!1)),sl(e,a),((ge&2)===0||e!==je)&&(e===je&&((ge&2)===0&&(dn|=a),Ue===4&&Va(e,de,Nt,!1)),Xt(e))}function Od(e,t,a){if((ge&6)!==0)throw Error(d(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||il(e,t),l=n?Of(e,t):rr(e,t,!0),o=n;do{if(l===0){Ln&&!n&&Va(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!Vf(a)){l=rr(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var u=e;l=Hl;var c=u.current.memoizedState.isDehydrated;if(c&&(Wn(u,s).flags|=256),s=rr(u,s,!1),s!==2){if(tr&&!c){u.errorRecoveryDisabledLanes|=o,dn|=o,l=4;break e}o=yt,yt=l,o!==null&&(yt===null?yt=o:yt.push.apply(yt,o))}l=s}if(o=!1,l!==2)continue}}if(l===1){Wn(e,0),Va(e,t,0,!0);break}e:{switch(n=e,o=l,o){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:Va(n,t,Nt,!Ma);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(l=Jo+300-ne(),10<l)){if(Va(n,t,Nt,!Ma),ro(n,0,!0)!==0)break e;ma=t,n.timeoutHandle=yh(Hd.bind(null,n,a,yt,Po,nr,t,Nt,dn,Gn,Ma,o,"Throttled",-0,0),l);break e}Hd(n,a,yt,Po,nr,t,Nt,dn,Gn,Ma,o,null,-0,0)}}break}while(!0);Xt(e)}function Hd(e,t,a,n,l,o,s,u,c,g,A,B,w,k){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Yd(t,o,B);var W=(o&62914560)===o?Jo-ne():(o&4194048)===o?Ud-ne():0;if(W=vy(B,W),W!==null){ma=o,e.cancelPendingCommit=W(Xd.bind(null,e,t,o,a,n,l,s,u,c,A,B,null,w,k)),Va(e,o,s,!g);return}}Xd(e,t,o,a,n,l,s,u,c)}function Vf(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],o=l.getSnapshot;l=l.value;try{if(!vt(o(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Va(e,t,a,n){t&=~ar,t&=~dn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var o=31-wt(l),s=1<<o;n[o]=-1,l&=~s}a!==0&&Zr(e,a,t)}function ei(){return(ge&6)===0?(ql(0),!1):!0}function sr(){if(ue!==null){if(be===0)var e=ue.return;else e=ue,aa=tn=null,Is(e),Vn=null,Il=0,e=ue;for(;e!==null;)gd(e.alternate,e),e=e.return;ue=null}}function Wn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ay(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ma=0,sr(),je=e,ue=a=ea(e.current,null),de=t,be=0,jt=null,Ma=!1,Ln=il(e,t),tr=!1,Gn=Nt=ar=dn=Ca=Ue=0,yt=Hl=null,nr=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-wt(n),o=1<<l;t|=e[l],n&=~o}return ha=t,xo(),a}function Dd(e,t){ie=null,N.H=Yl,t===Un||t===Eo?(t=ac(),be=3):t===ds?(t=ac(),be=4):be=t===Hs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,ue===null&&(Ue=1,Lo(e,Yt(t,e.current)))}function qd(){var e=kt.current;return e===null?!0:(de&4194048)===de?Ut===null:(de&62914560)===de||(de&536870912)!==0?e===Ut:!1}function Rd(){var e=N.H;return N.H=Yl,e===null?Yl:e}function Ld(){var e=N.A;return N.A=zf,e}function ti(){Ue=4,Ma||(de&4194048)!==de&&kt.current!==null||(Ln=!0),(Ca&134217727)===0&&(dn&134217727)===0||je===null||Va(je,de,Nt,!1)}function rr(e,t,a){var n=ge;ge|=2;var l=Rd(),o=Ld();(je!==e||de!==t)&&(Po=null,Wn(e,t)),t=!1;var s=Ue;e:do try{if(be!==0&&ue!==null){var u=ue,c=jt;switch(be){case 8:sr(),s=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(t=!0);var g=be;if(be=0,jt=null,Xn(e,u,c,g),a&&Ln){s=0;break e}break;default:g=be,be=0,jt=null,Xn(e,u,c,g)}}_f(),s=Ue;break}catch(A){Dd(e,A)}while(!0);return t&&e.shellSuspendCounter++,aa=tn=null,ge=n,N.H=l,N.A=o,ue===null&&(je=null,de=0,xo()),s}function _f(){for(;ue!==null;)Gd(ue)}function Of(e,t){var a=ge;ge|=2;var n=Rd(),l=Ld();je!==e||de!==t?(Po=null,$o=ne()+500,Wn(e,t)):Ln=il(e,t);e:do try{if(be!==0&&ue!==null){t=ue;var o=jt;t:switch(be){case 1:be=0,jt=null,Xn(e,t,o,1);break;case 2:case 9:if(ec(o)){be=0,jt=null,Fd(t);break}t=function(){be!==2&&be!==9||je!==e||(be=7),Xt(e)},o.then(t,t);break e;case 3:be=7;break e;case 4:be=5;break e;case 7:ec(o)?(be=0,jt=null,Fd(t)):(be=0,jt=null,Xn(e,t,o,7));break;case 5:var s=null;switch(ue.tag){case 26:s=ue.memoizedState;case 5:case 27:var u=ue;if(s?Bh(s):u.stateNode.complete){be=0,jt=null;var c=u.sibling;if(c!==null)ue=c;else{var g=u.return;g!==null?(ue=g,ai(g)):ue=null}break t}}be=0,jt=null,Xn(e,t,o,5);break;case 6:be=0,jt=null,Xn(e,t,o,6);break;case 8:sr(),Ue=6;break e;default:throw Error(d(462))}}Hf();break}catch(A){Dd(e,A)}while(!0);return aa=tn=null,N.H=n,N.A=l,ge=a,ue!==null?0:(je=null,de=0,xo(),Ue)}function Hf(){for(;ue!==null&&!_();)Gd(ue)}function Gd(e){var t=fd(e.alternate,e,ha);e.memoizedProps=e.pendingProps,t===null?ai(e):ue=t}function Fd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=rd(a,t,t.pendingProps,t.type,void 0,de);break;case 11:t=rd(a,t,t.pendingProps,t.type.render,t.ref,de);break;case 5:Is(t);default:gd(a,t),t=ue=Lu(t,ha),t=fd(a,t,ha)}e.memoizedProps=e.pendingProps,t===null?ai(e):ue=t}function Xn(e,t,a,n){aa=tn=null,Is(t),Vn=null,Il=0;var l=t.return;try{if(Sf(e,l,t,a,de)){Ue=1,Lo(e,Yt(a,e.current)),ue=null;return}}catch(o){if(l!==null)throw ue=l,o;Ue=1,Lo(e,Yt(a,e.current)),ue=null;return}t.flags&32768?(me||n===1?e=!0:Ln||(de&536870912)!==0?e=!1:(Ma=e=!0,(n===2||n===9||n===3||n===6)&&(n=kt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Wd(t,e)):ai(t)}function ai(e){var t=e;do{if((t.flags&32768)!==0){Wd(t,Ma);return}e=t.return;var a=Bf(t.alternate,t,ha);if(a!==null){ue=a;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Ue===0&&(Ue=5)}function Wd(e,t){do{var a=Yf(e.alternate,e);if(a!==null){a.flags&=32767,ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=a}while(e!==null);Ue=6,ue=null}function Xd(e,t,a,n,l,o,s,u,c){e.cancelPendingCommit=null;do ni();while(Ke!==0);if((ge&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(o=t.lanes|t.childLanes,o|=Ki,pm(e,a,o,s,u,c),e===je&&(ue=je=null,de=0),Fn=t,Ua=e,ma=a,lr=o,or=l,Vd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Lf(Ge,function(){return $d(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null,l=H.p,H.p=2,s=ge,ge|=4;try{Mf(e,t,a)}finally{ge=s,H.p=l,N.T=n}}Ke=1,Qd(),Zd(),Kd()}}function Qd(){if(Ke===1){Ke=0;var e=Ua,t=Fn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var n=H.p;H.p=2;var l=ge;ge|=4;try{Td(t,e);var o=vr,s=zu(e.containerInfo),u=o.focusedElem,c=o.selectionRange;if(s!==u&&u&&u.ownerDocument&&Cu(u.ownerDocument.documentElement,u)){if(c!==null&&Fi(u)){var g=c.start,A=c.end;if(A===void 0&&(A=g),"selectionStart"in u)u.selectionStart=g,u.selectionEnd=Math.min(A,u.value.length);else{var B=u.ownerDocument||document,w=B&&B.defaultView||window;if(w.getSelection){var k=w.getSelection(),W=u.textContent.length,ee=Math.min(c.start,W),ke=c.end===void 0?ee:Math.min(c.end,W);!k.extend&&ee>ke&&(s=ke,ke=ee,ee=s);var f=Mu(u,ee),m=Mu(u,ke);if(f&&m&&(k.rangeCount!==1||k.anchorNode!==f.node||k.anchorOffset!==f.offset||k.focusNode!==m.node||k.focusOffset!==m.offset)){var y=B.createRange();y.setStart(f.node,f.offset),k.removeAllRanges(),ee>ke?(k.addRange(y),k.extend(m.node,m.offset)):(y.setEnd(m.node,m.offset),k.addRange(y))}}}}for(B=[],k=u;k=k.parentNode;)k.nodeType===1&&B.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<B.length;u++){var E=B[u];E.element.scrollLeft=E.left,E.element.scrollTop=E.top}}yi=!!wr,vr=wr=null}finally{ge=l,H.p=n,N.T=a}}e.current=t,Ke=2}}function Zd(){if(Ke===2){Ke=0;var e=Ua,t=Fn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var n=H.p;H.p=2;var l=ge;ge|=4;try{Id(e,t.alternate,t)}finally{ge=l,H.p=n,N.T=a}}Ke=3}}function Kd(){if(Ke===4||Ke===3){Ke=0,Y();var e=Ua,t=Fn,a=ma,n=Vd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Fn=Ua=null,Jd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(za=null),Ai(a),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(fn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=N.T,l=H.p,H.p=2,N.T=null;try{for(var o=e.onRecoverableError,s=0;s<n.length;s++){var u=n[s];o(u.value,{componentStack:u.stack})}}finally{N.T=t,H.p=l}}(ma&3)!==0&&ni(),Xt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===ir?Dl++:(Dl=0,ir=e):Dl=0,ql(0)}}function Jd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,xl(t)))}function ni(){return Qd(),Zd(),Kd(),$d()}function $d(){if(Ke!==5)return!1;var e=Ua,t=lr;lr=0;var a=Ai(ma),n=N.T,l=H.p;try{H.p=32>a?32:a,N.T=null,a=or,or=null;var o=Ua,s=ma;if(Ke=0,Fn=Ua=null,ma=0,(ge&6)!==0)throw Error(d(331));var u=ge;if(ge|=4,Cd(o.current),Bd(o,o.current,s,a),ge=u,ql(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(fn,o)}catch{}return!0}finally{H.p=l,N.T=n,Jd(e,t)}}function Pd(e,t,a){t=Yt(a,t),t=Os(e.stateNode,t,2),e=Ta(e,t,2),e!==null&&(sl(e,2),Xt(e))}function we(e,t,a){if(e.tag===3)Pd(e,e,a);else for(;t!==null;){if(t.tag===3){Pd(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(za===null||!za.has(n))){e=Yt(a,e),a=ed(2),n=Ta(t,a,2),n!==null&&(td(a,n,t,e),sl(n,2),Xt(n));break}}t=t.return}}function ur(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Uf;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(tr=!0,l.add(a),e=Df.bind(null,e,t,a),t.then(e,e))}function Df(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(de&a)===a&&(Ue===4||Ue===3&&(de&62914560)===de&&300>ne()-Jo?(ge&2)===0&&Wn(e,0):ar|=a,Gn===de&&(Gn=0)),Xt(e)}function eh(e,t){t===0&&(t=Qr()),e=$a(e,t),e!==null&&(sl(e,t),Xt(e))}function qf(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),eh(e,a)}function Rf(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(t),eh(e,a)}function Lf(e,t){return al(e,t)}var li=null,Qn=null,cr=!1,oi=!1,dr=!1,_a=0;function Xt(e){e!==Qn&&e.next===null&&(Qn===null?li=Qn=e:Qn=Qn.next=e),oi=!0,cr||(cr=!0,Ff())}function ql(e,t){if(!dr&&oi){dr=!0;do for(var a=!1,n=li;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var o=0;else{var s=n.suspendedLanes,u=n.pingedLanes;o=(1<<31-wt(42|e)+1)-1,o&=l&~(s&~u),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,lh(n,o))}else o=de,o=ro(n,n===je?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||il(n,o)||(a=!0,lh(n,o));n=n.next}while(a);dr=!1}}function Gf(){th()}function th(){oi=cr=!1;var e=0;_a!==0&&ty()&&(e=_a);for(var t=ne(),a=null,n=li;n!==null;){var l=n.next,o=ah(n,t);o===0?(n.next=null,a===null?li=l:a.next=l,l===null&&(Qn=a)):(a=n,(e!==0||(o&3)!==0)&&(oi=!0)),n=l}Ke!==0&&Ke!==5||ql(e),_a!==0&&(_a=0)}function ah(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-wt(o),u=1<<s,c=l[s];c===-1?((u&a)===0||(u&n)!==0)&&(l[s]=gm(u,t)):c<=t&&(e.expiredLanes|=u),o&=~u}if(t=je,a=de,a=ro(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(be===2||be===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&nl(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||il(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&nl(n),Ai(a)){case 2:case 8:a=Kt;break;case 32:a=Ge;break;case 268435456:a=ll;break;default:a=Ge}return n=nh.bind(null,e),a=al(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&nl(n),e.callbackPriority=2,e.callbackNode=null,2}function nh(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ni()&&e.callbackNode!==a)return null;var n=de;return n=ro(e,e===je?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Od(e,n,t),ah(e,ne()),e.callbackNode!=null&&e.callbackNode===a?nh.bind(null,e):null)}function lh(e,t){if(ni())return null;Od(e,t,!0)}function Ff(){ny(function(){(ge&6)!==0?al(Ht,Gf):th()})}function hr(){if(_a===0){var e=Cn;e===0&&(e=oo,oo<<=1,(oo&261888)===0&&(oo=256)),_a=e}return _a}function oh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mo(""+e)}function ih(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Wf(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var o=oh((l[ct]||null).action),s=n.submitter;s&&(t=(t=s[ct]||null)?oh(t.formAction):s.getAttribute("formAction"),t!==null&&(o=t,s=null));var u=new po("action","action",null,n,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(_a!==0){var c=s?ih(l,s):new FormData(l);Ms(a,{pending:!0,data:c,method:l.method,action:o},null,c)}}else typeof o=="function"&&(u.preventDefault(),c=s?ih(l,s):new FormData(l),Ms(a,{pending:!0,data:c,method:l.method,action:o},o,c))},currentTarget:l}]})}}for(var mr=0;mr<Zi.length;mr++){var fr=Zi[mr],Xf=fr.toLowerCase(),Qf=fr[0].toUpperCase()+fr.slice(1);qt(Xf,"on"+Qf)}qt(_u,"onAnimationEnd"),qt(Ou,"onAnimationIteration"),qt(Hu,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(cf,"onTransitionRun"),qt(df,"onTransitionStart"),qt(hf,"onTransitionCancel"),qt(Du,"onTransitionEnd"),wn("onMouseEnter",["mouseout","mouseover"]),wn("onMouseLeave",["mouseout","mouseover"]),wn("onPointerEnter",["pointerout","pointerover"]),wn("onPointerLeave",["pointerout","pointerover"]),Qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function sh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var u=n[s],c=u.instance,g=u.currentTarget;if(u=u.listener,c!==o&&l.isPropagationStopped())break e;o=u,l.currentTarget=g;try{o(l)}catch(A){vo(A)}l.currentTarget=null,o=c}else for(s=0;s<n.length;s++){if(u=n[s],c=u.instance,g=u.currentTarget,u=u.listener,c!==o&&l.isPropagationStopped())break e;o=u,l.currentTarget=g;try{o(l)}catch(A){vo(A)}l.currentTarget=null,o=c}}}}function ce(e,t){var a=t[Si];a===void 0&&(a=t[Si]=new Set);var n=e+"__bubble";a.has(n)||(rh(t,e,2,!1),a.add(n))}function yr(e,t,a){var n=0;t&&(n|=4),rh(a,e,n,t)}var ii="_reactListening"+Math.random().toString(36).slice(2);function gr(e){if(!e[ii]){e[ii]=!0,tu.forEach(function(a){a!=="selectionchange"&&(Zf.has(a)||yr(a,!1,e),yr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ii]||(t[ii]=!0,yr("selectionchange",!1,t))}}function rh(e,t,a,n){switch(_h(t)){case 2:var l=Iy;break;case 8:l=jy;break;default:l=Yr}a=l.bind(null,t,a,e),l=void 0,!Vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function pr(e,t,a,n,l){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var u=n.stateNode.containerInfo;if(u===l)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;u!==null;){if(s=gn(u),s===null)return;if(c=s.tag,c===5||c===6||c===26||c===27){n=o=s;continue e}u=u.parentNode}}n=n.return}mu(function(){var g=o,A=zi(a),B=[];e:{var w=qu.get(e);if(w!==void 0){var k=po,W=e;switch(e){case"keypress":if(yo(a)===0)break e;case"keydown":case"keyup":k=qm;break;case"focusin":W="focus",k=Di;break;case"focusout":W="blur",k=Di;break;case"beforeblur":case"afterblur":k=Di;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Gm;break;case _u:case Ou:case Hu:k=Mm;break;case Du:k=Wm;break;case"scroll":case"scrollend":k=Sm;break;case"wheel":k=Qm;break;case"copy":case"cut":case"paste":k=zm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=bu;break;case"toggle":case"beforetoggle":k=Km}var ee=(t&4)!==0,ke=!ee&&(e==="scroll"||e==="scrollend"),f=ee?w!==null?w+"Capture":null:w;ee=[];for(var m=g,y;m!==null;){var E=m;if(y=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||y===null||f===null||(E=cl(m,f),E!=null&&ee.push(Ll(m,E,y))),ke)break;m=m.return}0<ee.length&&(w=new k(w,W,null,a,A),B.push({event:w,listeners:ee}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",w&&a!==Ci&&(W=a.relatedTarget||a.fromElement)&&(gn(W)||W[yn]))break e;if((k||w)&&(w=A.window===A?A:(w=A.ownerDocument)?w.defaultView||w.parentWindow:window,k?(W=a.relatedTarget||a.toElement,k=g,W=W?gn(W):null,W!==null&&(ke=M(W),ee=W.tag,W!==ke||ee!==5&&ee!==27&&ee!==6)&&(W=null)):(k=null,W=g),k!==W)){if(ee=gu,E="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(ee=bu,E="onPointerLeave",f="onPointerEnter",m="pointer"),ke=k==null?w:ul(k),y=W==null?w:ul(W),w=new ee(E,m+"leave",k,a,A),w.target=ke,w.relatedTarget=y,E=null,gn(A)===g&&(ee=new ee(f,m+"enter",W,a,A),ee.target=y,ee.relatedTarget=ke,E=ee),ke=E,k&&W)t:{for(ee=Kf,f=k,m=W,y=0,E=f;E;E=ee(E))y++;E=0;for(var $=m;$;$=ee($))E++;for(;0<y-E;)f=ee(f),y--;for(;0<E-y;)m=ee(m),E--;for(;y--;){if(f===m||m!==null&&f===m.alternate){ee=f;break t}f=ee(f),m=ee(m)}ee=null}else ee=null;k!==null&&uh(B,w,k,ee,!1),W!==null&&ke!==null&&uh(B,ke,W,ee,!0)}}e:{if(w=g?ul(g):window,k=w.nodeName&&w.nodeName.toLowerCase(),k==="select"||k==="input"&&w.type==="file")var fe=Au;else if(ju(w))if(Su)fe=sf;else{fe=lf;var X=nf}else k=w.nodeName,!k||k.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?g&&Mi(g.elementType)&&(fe=Au):fe=of;if(fe&&(fe=fe(e,g))){Nu(B,fe,a,A);break e}X&&X(e,w,g),e==="focusout"&&g&&w.type==="number"&&g.memoizedProps.value!=null&&Yi(w,"number",w.value)}switch(X=g?ul(g):window,e){case"focusin":(ju(X)||X.contentEditable==="true")&&(Nn=X,Wi=g,bl=null);break;case"focusout":bl=Wi=Nn=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,Uu(B,a,A);break;case"selectionchange":if(uf)break;case"keydown":case"keyup":Uu(B,a,A)}var se;if(Ri)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else jn?ku(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(wu&&a.locale!=="ko"&&(jn||he!=="onCompositionStart"?he==="onCompositionEnd"&&jn&&(se=fu()):(xa=A,_i="value"in xa?xa.value:xa.textContent,jn=!0)),X=si(g,he),0<X.length&&(he=new pu(he,e,null,a,A),B.push({event:he,listeners:X}),se?he.data=se:(se=Iu(a),se!==null&&(he.data=se)))),(se=$m?Pm(e,a):ef(e,a))&&(he=si(g,"onBeforeInput"),0<he.length&&(X=new pu("onBeforeInput","beforeinput",null,a,A),B.push({event:X,listeners:he}),X.data=se)),Wf(B,e,g,a,A)}sh(B,t)})}function Ll(e,t,a){return{instance:e,listener:t,currentTarget:a}}function si(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=cl(e,a),l!=null&&n.unshift(Ll(e,l,o)),l=cl(e,t),l!=null&&n.push(Ll(e,l,o))),e.tag===3)return n;e=e.return}return[]}function Kf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function uh(e,t,a,n,l){for(var o=t._reactName,s=[];a!==null&&a!==n;){var u=a,c=u.alternate,g=u.stateNode;if(u=u.tag,c!==null&&c===n)break;u!==5&&u!==26&&u!==27||g===null||(c=g,l?(g=cl(a,o),g!=null&&s.unshift(Ll(a,g,c))):l||(g=cl(a,o),g!=null&&s.push(Ll(a,g,c)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Jf=/\r\n?/g,$f=/\u0000|\uFFFD/g;function ch(e){return(typeof e=="string"?e:""+e).replace(Jf,`
`).replace($f,"")}function dh(e,t){return t=ch(t),ch(e)===t}function xe(e,t,a,n,l,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||xn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&xn(e,""+n);break;case"className":co(e,"class",n);break;case"tabIndex":co(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":co(e,a,n);break;case"style":du(e,n,o);break;case"data":if(t!=="object"){co(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=mo(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&xe(e,t,"name",l.name,l,null),xe(e,t,"formEncType",l.formEncType,l,null),xe(e,t,"formMethod",l.formMethod,l,null),xe(e,t,"formTarget",l.formTarget,l,null)):(xe(e,t,"encType",l.encType,l,null),xe(e,t,"method",l.method,l,null),xe(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=mo(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=$t);break;case"onScroll":n!=null&&ce("scroll",e);break;case"onScrollEnd":n!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=mo(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ce("beforetoggle",e),ce("toggle",e),uo(e,"popover",n);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":uo(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nm.get(a)||a,uo(e,a,n))}}function br(e,t,a,n,l,o){switch(a){case"style":du(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof n=="string"?xn(e,n):(typeof n=="number"||typeof n=="bigint")&&xn(e,""+n);break;case"onScroll":n!=null&&ce("scroll",e);break;case"onScrollEnd":n!=null&&ce("scrollend",e);break;case"onClick":n!=null&&(e.onclick=$t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!au.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),o=e[ct]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):uo(e,a,n)}}}function lt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var n=!1,l=!1,o;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];if(s!=null)switch(o){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:xe(e,t,o,s,a,null)}}l&&xe(e,t,"srcSet",a.srcSet,a,null),n&&xe(e,t,"src",a.src,a,null);return;case"input":ce("invalid",e);var u=o=s=l=null,c=null,g=null;for(n in a)if(a.hasOwnProperty(n)){var A=a[n];if(A!=null)switch(n){case"name":l=A;break;case"type":s=A;break;case"checked":c=A;break;case"defaultChecked":g=A;break;case"value":o=A;break;case"defaultValue":u=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(d(137,t));break;default:xe(e,t,n,A,a,null)}}su(e,o,u,c,g,s,l,!1);return;case"select":ce("invalid",e),n=s=o=null;for(l in a)if(a.hasOwnProperty(l)&&(u=a[l],u!=null))switch(l){case"value":o=u;break;case"defaultValue":s=u;break;case"multiple":n=u;default:xe(e,t,l,u,a,null)}t=o,a=s,e.multiple=!!n,t!=null?vn(e,!!n,t,!1):a!=null&&vn(e,!!n,a,!0);return;case"textarea":ce("invalid",e),o=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(u=a[s],u!=null))switch(s){case"value":n=u;break;case"defaultValue":l=u;break;case"children":o=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:xe(e,t,s,u,a,null)}uu(e,n,l,o);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(n=a[c],n!=null))switch(c){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:xe(e,t,c,n,a,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(n=0;n<Rl.length;n++)ce(Rl[n],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(n=a[g],n!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:xe(e,t,g,n,a,null)}return;default:if(Mi(t)){for(A in a)a.hasOwnProperty(A)&&(n=a[A],n!==void 0&&br(e,t,A,n,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(n=a[u],n!=null&&xe(e,t,u,n,a,null))}function Pf(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,s=null,u=null,c=null,g=null,A=null;for(k in a){var B=a[k];if(a.hasOwnProperty(k)&&B!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":c=B;default:n.hasOwnProperty(k)||xe(e,t,k,null,n,B)}}for(var w in n){var k=n[w];if(B=a[w],n.hasOwnProperty(w)&&(k!=null||B!=null))switch(w){case"type":o=k;break;case"name":l=k;break;case"checked":g=k;break;case"defaultChecked":A=k;break;case"value":s=k;break;case"defaultValue":u=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(d(137,t));break;default:k!==B&&xe(e,t,w,k,n,B)}}Bi(e,s,u,c,g,A,o,l);return;case"select":k=s=u=w=null;for(o in a)if(c=a[o],a.hasOwnProperty(o)&&c!=null)switch(o){case"value":break;case"multiple":k=c;default:n.hasOwnProperty(o)||xe(e,t,o,null,n,c)}for(l in n)if(o=n[l],c=a[l],n.hasOwnProperty(l)&&(o!=null||c!=null))switch(l){case"value":w=o;break;case"defaultValue":u=o;break;case"multiple":s=o;default:o!==c&&xe(e,t,l,o,n,c)}t=u,a=s,n=k,w!=null?vn(e,!!a,w,!1):!!n!=!!a&&(t!=null?vn(e,!!a,t,!0):vn(e,!!a,a?[]:"",!1));return;case"textarea":k=w=null;for(u in a)if(l=a[u],a.hasOwnProperty(u)&&l!=null&&!n.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:xe(e,t,u,null,n,l)}for(s in n)if(l=n[s],o=a[s],n.hasOwnProperty(s)&&(l!=null||o!=null))switch(s){case"value":w=l;break;case"defaultValue":k=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(d(91));break;default:l!==o&&xe(e,t,s,l,n,o)}ru(e,w,k);return;case"option":for(var W in a)if(w=a[W],a.hasOwnProperty(W)&&w!=null&&!n.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:xe(e,t,W,null,n,w)}for(c in n)if(w=n[c],k=a[c],n.hasOwnProperty(c)&&w!==k&&(w!=null||k!=null))switch(c){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:xe(e,t,c,w,n,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)w=a[ee],a.hasOwnProperty(ee)&&w!=null&&!n.hasOwnProperty(ee)&&xe(e,t,ee,null,n,w);for(g in n)if(w=n[g],k=a[g],n.hasOwnProperty(g)&&w!==k&&(w!=null||k!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(d(137,t));break;default:xe(e,t,g,w,n,k)}return;default:if(Mi(t)){for(var ke in a)w=a[ke],a.hasOwnProperty(ke)&&w!==void 0&&!n.hasOwnProperty(ke)&&br(e,t,ke,void 0,n,w);for(A in n)w=n[A],k=a[A],!n.hasOwnProperty(A)||w===k||w===void 0&&k===void 0||br(e,t,A,w,n,k);return}}for(var f in a)w=a[f],a.hasOwnProperty(f)&&w!=null&&!n.hasOwnProperty(f)&&xe(e,t,f,null,n,w);for(B in n)w=n[B],k=a[B],!n.hasOwnProperty(B)||w===k||w==null&&k==null||xe(e,t,B,w,n,k)}function hh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ey(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],o=l.transferSize,s=l.initiatorType,u=l.duration;if(o&&u&&hh(s)){for(s=0,u=l.responseEnd,n+=1;n<a.length;n++){var c=a[n],g=c.startTime;if(g>u)break;var A=c.transferSize,B=c.initiatorType;A&&hh(B)&&(c=c.responseEnd,s+=A*(c<u?1:(u-g)/(c-g)))}if(--n,t+=8*(o+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wr=null,vr=null;function ri(e){return e.nodeType===9?e:e.ownerDocument}function mh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function xr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kr=null;function ty(){var e=window.event;return e&&e.type==="popstate"?e===kr?!1:(kr=e,!0):(kr=null,!1)}var yh=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(e){return gh.resolve(null).then(e).catch(ly)}:yh;function ly(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function ph(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),$n(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Gl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Gl(a);for(var o=a.firstChild;o;){var s=o.nextSibling,u=o.nodeName;o[rl]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=s}}else a==="body"&&Gl(e.ownerDocument.body);a=l}while(a);$n(t)}function bh(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Ir(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ir(a),Ti(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function oy(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[rl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function iy(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Vt(e.nextSibling),e===null))return null;return e}function wh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function jr(e){return e.data==="$?"||e.data==="$~"}function Nr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function sy(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ar=null;function vh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Vt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function xh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function kh(e,t,a){switch(t=ri(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Gl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ti(e)}var _t=new Map,Ih=new Set;function ui(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=H.d;H.d={f:ry,r:uy,D:cy,C:dy,L:hy,m:my,X:yy,S:fy,M:gy};function ry(){var e=fa.f(),t=ei();return e||t}function uy(e){var t=pn(e);t!==null&&t.tag===5&&t.type==="form"?Dc(t):fa.r(e)}var Zn=typeof document>"u"?null:document;function jh(e,t,a){var n=Zn;if(n&&typeof t=="string"&&t){var l=Et(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Ih.has(l)||(Ih.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),lt(t,"link",e),Je(t),n.head.appendChild(t)))}}function cy(e){fa.D(e),jh("dns-prefetch",e,null)}function dy(e,t){fa.C(e,t),jh("preconnect",e,t)}function hy(e,t,a){fa.L(e,t,a);var n=Zn;if(n&&e&&t){var l='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Et(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Et(a.imageSizes)+'"]')):l+='[href="'+Et(e)+'"]';var o=l;switch(t){case"style":o=Kn(e);break;case"script":o=Jn(e)}_t.has(o)||(e=U({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),_t.set(o,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(Fl(o))||t==="script"&&n.querySelector(Wl(o))||(t=n.createElement("link"),lt(t,"link",e),Je(t),n.head.appendChild(t)))}}function my(e,t){fa.m(e,t);var a=Zn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Et(n)+'"][href="'+Et(e)+'"]',o=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Jn(e)}if(!_t.has(o)&&(e=U({rel:"modulepreload",href:e},t),_t.set(o,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wl(o)))return}n=a.createElement("link"),lt(n,"link",e),Je(n),a.head.appendChild(n)}}}function fy(e,t,a){fa.S(e,t,a);var n=Zn;if(n&&e){var l=bn(n).hoistableStyles,o=Kn(e);t=t||"default";var s=l.get(o);if(!s){var u={loading:0,preload:null};if(s=n.querySelector(Fl(o)))u.loading=5;else{e=U({rel:"stylesheet",href:e,"data-precedence":t},a),(a=_t.get(o))&&Sr(e,a);var c=s=n.createElement("link");Je(c),lt(c,"link",e),c._p=new Promise(function(g,A){c.onload=g,c.onerror=A}),c.addEventListener("load",function(){u.loading|=1}),c.addEventListener("error",function(){u.loading|=2}),u.loading|=4,ci(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:u},l.set(o,s)}}}function yy(e,t){fa.X(e,t);var a=Zn;if(a&&e){var n=bn(a).hoistableScripts,l=Jn(e),o=n.get(l);o||(o=a.querySelector(Wl(l)),o||(e=U({src:e,async:!0},t),(t=_t.get(l))&&Tr(e,t),o=a.createElement("script"),Je(o),lt(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function gy(e,t){fa.M(e,t);var a=Zn;if(a&&e){var n=bn(a).hoistableScripts,l=Jn(e),o=n.get(l);o||(o=a.querySelector(Wl(l)),o||(e=U({src:e,async:!0,type:"module"},t),(t=_t.get(l))&&Tr(e,t),o=a.createElement("script"),Je(o),lt(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function Nh(e,t,a,n){var l=(l=V.current)?ui(l):null;if(!l)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Kn(a.href),a=bn(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Kn(a.href);var o=bn(l).hoistableStyles,s=o.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=l.querySelector(Fl(e)))&&!o._p&&(s.instance=o,s.state.loading=5),_t.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_t.set(e,a),o||py(l,e,a,s.state))),t&&n===null)throw Error(d(528,""));return s}if(t&&n!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Jn(a),a=bn(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Kn(e){return'href="'+Et(e)+'"'}function Fl(e){return'link[rel="stylesheet"]['+e+"]"}function Ah(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function py(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),lt(t,"link",a),Je(t),e.head.appendChild(t))}function Jn(e){return'[src="'+Et(e)+'"]'}function Wl(e){return"script[async]"+e}function Sh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Et(a.href)+'"]');if(n)return t.instance=n,Je(n),n;var l=U({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Je(n),lt(n,"style",l),ci(n,a.precedence,e),t.instance=n;case"stylesheet":l=Kn(a.href);var o=e.querySelector(Fl(l));if(o)return t.state.loading|=4,t.instance=o,Je(o),o;n=Ah(a),(l=_t.get(l))&&Sr(n,l),o=(e.ownerDocument||e).createElement("link"),Je(o);var s=o;return s._p=new Promise(function(u,c){s.onload=u,s.onerror=c}),lt(o,"link",n),t.state.loading|=4,ci(o,a.precedence,e),t.instance=o;case"script":return o=Jn(a.src),(l=e.querySelector(Wl(o)))?(t.instance=l,Je(l),l):(n=a,(l=_t.get(o))&&(n=U({},a),Tr(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Je(l),lt(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,ci(n,a.precedence,e));return t.instance}function ci(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,o=l,s=0;s<n.length;s++){var u=n[s];if(u.dataset.precedence===t)o=u;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Sr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Tr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var di=null;function Th(e,t,a){if(di===null){var n=new Map,l=di=new Map;l.set(a,n)}else l=di,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var o=a[l];if(!(o[rl]||o[et]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(t)||"";s=e+s;var u=n.get(s);u?u.push(o):n.set(s,[o])}}return n}function Eh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function by(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Bh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wy(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Kn(n.href),o=t.querySelector(Fl(l));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=hi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,Je(o);return}o=t.ownerDocument||t,n=Ah(n),(l=_t.get(l))&&Sr(n,l),o=o.createElement("link"),Je(o);var s=o;s._p=new Promise(function(u,c){s.onload=u,s.onerror=c}),lt(o,"link",n),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Er=0;function vy(e,t){return e.stylesheets&&e.count===0&&fi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&fi(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Er===0&&(Er=62500*ey());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fi(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Er?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function hi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mi=null;function fi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mi=new Map,t.forEach(xy,e),mi=null,hi.call(e))}function xy(e,t){if(!(t.state.loading&4)){var a=mi.get(e);if(a)var n=a.get(null);else{a=new Map,mi.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var s=l[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),o=a.get(s)||n,o===n&&a.set(null,l),a.set(s,l),this.count++,n=hi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Xl={$$typeof:re,Provider:null,Consumer:null,_currentValue:S,_currentValue2:S,_threadCount:0};function ky(e,t,a,n,l,o,s,u,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ji(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.hiddenUpdates=ji(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Yh(e,t,a,n,l,o,s,u,c,g,A,B){return e=new ky(e,t,a,s,c,g,A,B,u),t=1,o===!0&&(t|=24),o=xt(3,null,null,t),e.current=o,o.stateNode=e,t=rs(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},hs(o),e}function Mh(e){return e?(e=Tn,e):Tn}function Ch(e,t,a,n,l,o){l=Mh(l),n.context===null?n.context=l:n.pendingContext=l,n=Sa(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=Ta(e,n,t),a!==null&&(gt(a,e,t),Nl(a,e,t))}function zh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Br(e,t){zh(e,t),(e=e.alternate)&&zh(e,t)}function Uh(e){if(e.tag===13||e.tag===31){var t=$a(e,67108864);t!==null&&gt(t,e,67108864),Br(e,67108864)}}function Vh(e){if(e.tag===13||e.tag===31){var t=At();t=Ni(t);var a=$a(e,t);a!==null&&gt(a,e,t),Br(e,t)}}var yi=!0;function Iy(e,t,a,n){var l=N.T;N.T=null;var o=H.p;try{H.p=2,Yr(e,t,a,n)}finally{H.p=o,N.T=l}}function jy(e,t,a,n){var l=N.T;N.T=null;var o=H.p;try{H.p=8,Yr(e,t,a,n)}finally{H.p=o,N.T=l}}function Yr(e,t,a,n){if(yi){var l=Mr(n);if(l===null)pr(e,t,n,gi,a),Oh(e,n);else if(Ay(l,e,t,a,n))n.stopPropagation();else if(Oh(e,n),t&4&&-1<Ny.indexOf(e)){for(;l!==null;){var o=pn(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=Xa(o.pendingLanes);if(s!==0){var u=o;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var c=1<<31-wt(s);u.entanglements[1]|=c,s&=~c}Xt(o),(ge&6)===0&&($o=ne()+500,ql(0))}}break;case 31:case 13:u=$a(o,2),u!==null&&gt(u,o,2),ei(),Br(o,2)}if(o=Mr(n),o===null&&pr(e,t,n,gi,a),o===l)break;l=o}l!==null&&n.stopPropagation()}else pr(e,t,n,null,a)}}function Mr(e){return e=zi(e),Cr(e)}var gi=null;function Cr(e){if(gi=null,e=gn(e),e!==null){var t=M(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===31){if(e=C(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return gi=e,null}function _h(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ot()){case Ht:return 2;case Kt:return 8;case Ge:case Dt:return 32;case ll:return 268435456;default:return 32}default:return 32}}var zr=!1,Ha=null,Da=null,qa=null,Ql=new Map,Zl=new Map,Ra=[],Ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Oh(e,t){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Ql.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(t.pointerId)}}function Kl(e,t,a,n,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[l]},t!==null&&(t=pn(t),t!==null&&Uh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ay(e,t,a,n,l){switch(t){case"focusin":return Ha=Kl(Ha,e,t,a,n,l),!0;case"dragenter":return Da=Kl(Da,e,t,a,n,l),!0;case"mouseover":return qa=Kl(qa,e,t,a,n,l),!0;case"pointerover":var o=l.pointerId;return Ql.set(o,Kl(Ql.get(o)||null,e,t,a,n,l)),!0;case"gotpointercapture":return o=l.pointerId,Zl.set(o,Kl(Zl.get(o)||null,e,t,a,n,l)),!0}return!1}function Hh(e){var t=gn(e.target);if(t!==null){var a=M(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,Pr(e.priority,function(){Vh(a)});return}}else if(t===31){if(t=C(a),t!==null){e.blockedOn=t,Pr(e.priority,function(){Vh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Mr(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ci=n,a.target.dispatchEvent(n),Ci=null}else return t=pn(a),t!==null&&Uh(t),e.blockedOn=a,!1;t.shift()}return!0}function Dh(e,t,a){pi(e)&&a.delete(t)}function Sy(){zr=!1,Ha!==null&&pi(Ha)&&(Ha=null),Da!==null&&pi(Da)&&(Da=null),qa!==null&&pi(qa)&&(qa=null),Ql.forEach(Dh),Zl.forEach(Dh)}function bi(e,t){e.blockedOn===t&&(e.blockedOn=null,zr||(zr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Sy)))}var wi=null;function qh(e){wi!==e&&(wi=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){wi===e&&(wi=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Cr(n||a)===null)continue;break}var o=pn(a);o!==null&&(e.splice(t,3),t-=3,Ms(o,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function $n(e){function t(c){return bi(c,e)}Ha!==null&&bi(Ha,e),Da!==null&&bi(Da,e),qa!==null&&bi(qa,e),Ql.forEach(t),Zl.forEach(t);for(var a=0;a<Ra.length;a++){var n=Ra[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Hh(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],o=a[n+1],s=l[ct]||null;if(typeof o=="function")s||qh(a);else if(s){var u=null;if(o&&o.hasAttribute("formAction")){if(l=o,s=o[ct]||null)u=s.formAction;else if(Cr(l)!==null)continue}else u=s.action;typeof u=="function"?a[n+1]=u:(a.splice(n,3),n-=3),qh(a)}}}function Rh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ur(e){this._internalRoot=e}vi.prototype.render=Ur.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,n=At();Ch(a,n,e,t,null,null)},vi.prototype.unmount=Ur.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ch(e.current,2,null,e,null,null),ei(),t[yn]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=$r();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ra.length&&t!==0&&t<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&Hh(e)}};var Lh=b.version;if(Lh!=="19.2.8")throw Error(d(527,Lh,"19.2.8"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=p(t),e=e!==null?G(e):null,e=e===null?null:e.stateNode,e};var Ty={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xi.isDisabled&&xi.supportsFiber)try{fn=xi.inject(Ty),bt=xi}catch{}}return $l.createRoot=function(e,t){if(!z(e))throw Error(d(299));var a=!1,n="",l=Kc,o=Jc,s=$c;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Yh(e,1,!1,null,null,a,n,null,l,o,s,Rh),e[yn]=t.current,gr(e),new Ur(t)},$l.hydrateRoot=function(e,t,a){if(!z(e))throw Error(d(299));var n=!1,l="",o=Kc,s=Jc,u=$c,c=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),t=Yh(e,1,!0,t,a??null,n,l,c,o,s,u,Rh),t.context=Mh(null),a=t.current,n=At(),n=Ni(n),l=Sa(n),l.callback=null,Ta(a,l,n),a=n,t.current.lanes=a,sl(t,a),Xt(t),e[yn]=t.current,gr(e),new vi(t)},$l.version="19.2.8",$l}var Ph;function Oy(){if(Ph)return Or.exports;Ph=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(b){console.error(b)}}return r(),Or.exports=_y(),Or.exports}var Hy=Oy();const ut={id:"26af3597-73d4-491c-a9b3-aac9a0d55c82",name:"DomInNATEly Top Hits",description:"Official Suno AI curated collection of 50 high-energy rock anthems, alt-drill odysseys, trap crossovers, introspective ballads, and spoken-word dialogues. TikTok: @DomInNATEly",cover:"https://cdn2.suno.ai/image_large_9a613a1e-afde-4f8c-ade1-92f25a841205.jpeg",user_display_name:"Nate M. AKA  (@DomInNATEly)",user_handle:"dominnately",tiktok_handle:"@DomInNATEly",url:"https://suno.com/playlist/26af3597-73d4-491c-a9b3-aac9a0d55c82",totalTracks:50,totalDurationSeconds:13965},rt=[{id:"0028ed1b-8e30-4fb7-bda5-13e933cec42f",title:"Poison Shot By Shot",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:1,image:"https://cdn2.suno.ai/24ba0796-195f-4346-9646-95a2a1069e17.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/0028ed1b-8e30-4fb7-bda5-13e933cec42f.m4a",videoUrl:"https://cdn1.suno.ai/0028ed1b-8e30-4fb7-bda5-13e933cec42f.mp4",embedUrl:"https://suno.com/embed/0028ed1b-8e30-4fb7-bda5-13e933cec42f",sunoUrl:"https://suno.com/song/0028ed1b-8e30-4fb7-bda5-13e933cec42f",duration:387.9,durationFormatted:"6:27",tags:["Rock","Heartbreak","R&B"],lyrics:`[Male Vocals]
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
I wasn't your soulmate, I was acting like a leech`},{id:"80501057-4d2b-4451-8805-d03190d5b5f0",title:"I Want You Back, But I hate That I Do!",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:2,image:"https://cdn2.suno.ai/712caaae-2012-42bf-87c1-bee31d9982b9.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/80501057-4d2b-4451-8805-d03190d5b5f0.m4a",videoUrl:"https://cdn1.suno.ai/80501057-4d2b-4451-8805-d03190d5b5f0.mp4",embedUrl:"https://suno.com/embed/80501057-4d2b-4451-8805-d03190d5b5f0",sunoUrl:"https://suno.com/song/80501057-4d2b-4451-8805-d03190d5b5f0",duration:186,durationFormatted:"3:06",tags:["alt-drill: distorted electric-guitar loop and crisp drill drums with sharp hi-hats and sliding 808s; low male Auto-Tune melodic rap","hypnotic short-bar cadence","chopped dark vocal-sample hook repeating “I want you back","” shouted chaotic bridge; cold late-night mix","industrial grit","tape saturation","plate reverb","distorted indie-pop texture","dual-register vocal doubles; laid-back Brooklyn drill bounce at a slow pocket"],lyrics:`[Verse 1]
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
I want you back — and it wrecks me to look.`},{id:"5db33f1c-b785-4176-81e4-5d899c2bbdf7",title:"And I begged you, Don't Betray me 2.0",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:3,image:"https://cdn2.suno.ai/ebff25bf-e6af-4164-99b0-b81fab135828.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/5db33f1c-b785-4176-81e4-5d899c2bbdf7.m4a",videoUrl:"https://cdn1.suno.ai/5db33f1c-b785-4176-81e4-5d899c2bbdf7.mp4",embedUrl:"https://suno.com/embed/5db33f1c-b785-4176-81e4-5d899c2bbdf7",sunoUrl:"https://suno.com/song/5db33f1c-b785-4176-81e4-5d899c2bbdf7",duration:294.8,durationFormatted:"4:54",tags:["Hip Hop with Trap influence","rapidly building studio production with heavy 808s","ticking clock","low ambient drone","rising cinematic strings","clean guitar arpeggios","steady bass","distorted guitars","soft organ","acoustic guitar","rapid snare-roll momentum","breathless tightly compressed male vocals","sharp rhythmic punchlines","high-energy ad libs","and an aggressive triumphant chantable hook"],lyrics:`It was June when you arrived like a bird with a broken wing

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

**[Outro]**`},{id:"c1704899-4de4-42a0-a67c-8b0c1f59431e",title:"I Practiced being Hurt 2.0",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:4,image:"https://cdn2.suno.ai/90e45d54-620e-475e-80b7-666c98a9471b.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/c1704899-4de4-42a0-a67c-8b0c1f59431e.m4a",videoUrl:"https://cdn1.suno.ai/c1704899-4de4-42a0-a67c-8b0c1f59431e.mp4",embedUrl:"https://suno.com/embed/c1704899-4de4-42a0-a67c-8b0c1f59431e",sunoUrl:"https://suno.com/song/c1704899-4de4-42a0-a67c-8b0c1f59431e",duration:270.8,durationFormatted:"4:30",tags:["Alt-drill with tape saturation","plate reverb","ambient feedback","and distorted indie-pop grit; alternating low male and female voices deliver clean Auto-Tuned melodic rap with dual-register doubles","then a sharply delivered chaotic bridge; distorted electric-guitar loop leads over clean arpeggios","ringing chimes","piano","acoustic chords","crisp drums","sharp hi-hats","sliding 808s","and a chopped dark vocal-sample hook; tense midtempo drill pulse."],lyrics:`[Male Vocals]
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
No... that does not make it harmless.`},{id:"cb27be40-3419-43f7-8990-c22e49dc719b",title:"Toxic",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:5,image:"https://cdn2.suno.ai/56d3f87d-0ad4-4a7a-83d9-db2d265761c2.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/cb27be40-3419-43f7-8990-c22e49dc719b.m4a",videoUrl:"https://cdn1.suno.ai/cb27be40-3419-43f7-8990-c22e49dc719b.mp4",embedUrl:"https://suno.com/embed/cb27be40-3419-43f7-8990-c22e49dc719b",sunoUrl:"https://suno.com/song/cb27be40-3419-43f7-8990-c22e49dc719b",duration:211.4,durationFormatted:"3:31",tags:["Hip Hop","Rap","Hardcore Hip Hop","Midwest Hip Hop laid back hip hop hypnotic acoustic guitar loop mid tempo 808 beat cynical half sung half rapped vocals melancholic piano accent hip hop rap midwest hip hop"],lyrics:`Verse 1

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
To find another way.`},{id:"5de6920f-ab82-4db1-b8df-9bac639de6dd",title:"Good Luck, GoodBye",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:6,image:"https://cdn2.suno.ai/27230293-e65e-4ce9-977b-a9ddb28cdd54.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/5de6920f-ab82-4db1-b8df-9bac639de6dd.m4a",videoUrl:"https://cdn1.suno.ai/5de6920f-ab82-4db1-b8df-9bac639de6dd.mp4",embedUrl:"https://suno.com/embed/5de6920f-ab82-4db1-b8df-9bac639de6dd",sunoUrl:"https://suno.com/song/5de6920f-ab82-4db1-b8df-9bac639de6dd",duration:329.6,durationFormatted:"5:29",tags:["alt-drill","distorted electric-guitar loop","soft piano","crisp drill drums with sharp hi-hats and sliding 808s; low male Auto-Tune melodic rap with a hypnotic short-bar cadence","cold late-night mix","industrial grit","tape saturation","plate reverb","distorted indie-pop texture","laid-back Brooklyn drill bounce at a slow pocket"],lyrics:`[Intro — Soft Piano / Distant Vocals]
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
Goodbye... 🖤`},{id:"b4bc2b00-d0ea-47bb-9c82-8771ce0acac1",title:"You questioned my motives",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:7,image:"https://cdn2.suno.ai/fbad61b0-646f-44f2-8c50-863b33f4ac97.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/b4bc2b00-d0ea-47bb-9c82-8771ce0acac1.m4a",videoUrl:"https://cdn1.suno.ai/b4bc2b00-d0ea-47bb-9c82-8771ce0acac1.mp4",embedUrl:"https://suno.com/embed/b4bc2b00-d0ea-47bb-9c82-8771ce0acac1",sunoUrl:"https://suno.com/song/b4bc2b00-d0ea-47bb-9c82-8771ce0acac1",duration:252.7,durationFormatted:"4:12",tags:["dark alt-pop with industrial hip-hop","tape-saturated and clipped parallel compression under a wide stereo chorus and plate reverb; tense 96 BPM pulse; distorted guitar","palm-muted power chords","analog synth bass","drum-machine snaps and glitch vocal chops; male spoken-word lead with female ad-libs","tightening into a brittle duet"],lyrics:`[Verse 1]
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
Then you pull away.`},{id:"72aba4ee-f1a7-42bb-91e3-07572b31ec39",title:"Psychological Projection",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:8,image:"https://cdn2.suno.ai/image_large_72aba4ee-f1a7-42bb-91e3-07572b31ec39.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/72aba4ee-f1a7-42bb-91e3-07572b31ec39.m4a",videoUrl:"https://cdn1.suno.ai/72aba4ee-f1a7-42bb-91e3-07572b31ec39.mp4",embedUrl:"https://suno.com/embed/72aba4ee-f1a7-42bb-91e3-07572b31ec39",sunoUrl:"https://suno.com/song/72aba4ee-f1a7-42bb-91e3-07572b31ec39",duration:305.6,durationFormatted:"5:05",tags:["alt-drill","slow-pocket laid-back drill bounce; low male Auto-Tune melodic rap with dual-register doubles and alternating female perspective","sharply delivered bridge and softly spoken female outro; cold late-night mix with tape saturation","plate reverb","ambient feedback","distorted indie-pop texture and chopped dark vocal-sample hook; distorted electric-guitar loop","intimate clean guitar arpeggio","ringing guitar chimes","piano and acoustic chords over crisp drill drums","sharp hi-hats","sliding 808s","dark heavy bass pulse and pounding drums","building from restrained verses into a chaotic bridge and explosive final chorus"],lyrics:`**[Intro]**

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

[acoustic chord rings out and fades]`},{id:"8c7ca22e-f29d-452d-a1a1-d21d8c19ab44",title:"Don't Let Me Go",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:9,image:"https://cdn2.suno.ai/image_large_8c7ca22e-f29d-452d-a1a1-d21d8c19ab44.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/8c7ca22e-f29d-452d-a1a1-d21d8c19ab44.m4a",videoUrl:"https://cdn1.suno.ai/8c7ca22e-f29d-452d-a1a1-d21d8c19ab44.mp4",embedUrl:"https://suno.com/embed/8c7ca22e-f29d-452d-a1a1-d21d8c19ab44",sunoUrl:"https://suno.com/song/8c7ca22e-f29d-452d-a1a1-d21d8c19ab44",duration:329.8,durationFormatted:"5:29",tags:["Alt-drill with a cold late-night mix","tape saturation","plate reverb","and distorted indie-pop grit; laid-back Brooklyn drill bounce in a slow pocket; low male Auto-Tune melodic rap with hypnotic short-bar phrasing","widening into a huge melodic-rock chorus and a half-time screamed breakdown; distorted electric-guitar loop","crisp drill drums","sharp hi-hats","sliding 808s","and feedback."],lyrics:`[INTRO — whispered / filtered]
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
another door.`},{id:"6c442496-4e41-4c18-ad04-1e1bd03ca5c4",title:"Poison Shot By Shot V3 Jazz",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:10,image:"https://cdn2.suno.ai/0f14125c-668d-4781-9ce3-bdca20320103.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/6c442496-4e41-4c18-ad04-1e1bd03ca5c4.m4a",videoUrl:"https://cdn1.suno.ai/6c442496-4e41-4c18-ad04-1e1bd03ca5c4.mp4",embedUrl:"https://suno.com/embed/6c442496-4e41-4c18-ad04-1e1bd03ca5c4",sunoUrl:"https://suno.com/song/6c442496-4e41-4c18-ad04-1e1bd03ca5c4",duration:391.9,durationFormatted:"6:31",tags:["alt-drill","jazz-rock"],lyrics:`[Male vocals]
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
[End]

[female vocals]
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
[female vocals]
I was never gentle
I was just better at the act
And I liked how easy it was to watch you crack.`},{id:"427fba31-e531-49ff-8540-19e1cf95905b",title:"Super Pessimistic! (Experimental remix)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:11,image:"https://cdn2.suno.ai/22bd11ac-ecae-47a8-b4f9-c4307f31be80.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/427fba31-e531-49ff-8540-19e1cf95905b.m4a",videoUrl:"https://cdn1.suno.ai/427fba31-e531-49ff-8540-19e1cf95905b.mp4",embedUrl:"https://suno.com/embed/427fba31-e531-49ff-8540-19e1cf95905b",sunoUrl:"https://suno.com/song/427fba31-e531-49ff-8540-19e1cf95905b",duration:240.1,durationFormatted:"4:00",tags:["alt pop","pop punk","breakup anthem","male female","distorted electric guitars","palm-muted power chords","syncopated 808s","chopped vocal hooks","punchy snare cracks","sub bass drops","gang shouts","plate reverb","parallel compression","wide stereo chorus","142 BPM","halftime pre-chorus","bitter defiance","chant hook"],lyrics:`[singer A]
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
You're super pessimistic`},{id:"d9f75453-1a69-49f9-8e86-fcd935b2c39a",title:"I can't turn it off",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:12,image:"https://cdn2.suno.ai/021ffb5d-3224-4112-af09-c90f2d7cadf7.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/d9f75453-1a69-49f9-8e86-fcd935b2c39a.m4a",videoUrl:"https://cdn1.suno.ai/d9f75453-1a69-49f9-8e86-fcd935b2c39a.mp4",embedUrl:"https://suno.com/embed/d9f75453-1a69-49f9-8e86-fcd935b2c39a",sunoUrl:"https://suno.com/song/d9f75453-1a69-49f9-8e86-fcd935b2c39a",duration:252.4,durationFormatted:"4:12",tags:["Alt-drill with low male Auto-Tuned melodic-pop vocals in hypnotic short-bar cadence","shaped from the user's own recorded voice; industrial grit","tape saturation","plate reverb and distorted indie-pop texture; distorted electric-guitar loop over crisp drill drums","sharp hi-hats and sliding 808s; slow-pocket Brooklyn bounce with a laid-back swing","cold late-night feel."],lyrics:`[Intro]
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
Yeah. We're done here.`},{id:"d6c27009-4035-45ed-81ae-8061fbdeae82",title:"Cluster B Storm",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:13,image:"https://cdn2.suno.ai/c33b8cc9-742e-4cd9-b50a-9142f49e8641.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/d6c27009-4035-45ed-81ae-8061fbdeae82.m4a",videoUrl:"https://cdn1.suno.ai/d6c27009-4035-45ed-81ae-8061fbdeae82.mp4",embedUrl:"https://suno.com/embed/d6c27009-4035-45ed-81ae-8061fbdeae82",sunoUrl:"https://suno.com/song/d6c27009-4035-45ed-81ae-8061fbdeae82",duration:303.8,durationFormatted:"5:03",tags:["Hip hop with R&B","pop","trap hip hop","and melodic rap elements; polished atmospheric synth pads","cinematic strings","ticking clock","and low ambient drone over crisp trap-inspired percussion; mid-tempo groove with rapid-fire","explosive releases; professional studio mix; smooth soulful male vocals shift from intimate conversational verses to breathless rapid-fire bridge delivery and aggressive","towering triumphant hooks."],lyrics:`[Intro]
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
And it’s mine.`},{id:"f2063bc8-cde6-441f-b406-6fd94f63fb5e",title:"SHUT THE DEADBOLT",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:14,image:"https://cdn2.suno.ai/image_large_f2063bc8-cde6-441f-b406-6fd94f63fb5e.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/f2063bc8-cde6-441f-b406-6fd94f63fb5e.m4a",videoUrl:"https://cdn1.suno.ai/f2063bc8-cde6-441f-b406-6fd94f63fb5e.mp4",embedUrl:"https://suno.com/embed/f2063bc8-cde6-441f-b406-6fd94f63fb5e",sunoUrl:"https://suno.com/song/f2063bc8-cde6-441f-b406-6fd94f63fb5e",duration:176,durationFormatted:"2:55",tags:["Hip Hop with Trap production","sidechained 808s with controlled saturation","high-energy male vocals","clipped rhythmic punchlines","sharp ad-libs","tense minor-key synths","tight hi-hats","and a chantable chorus with stacked vocal emphasis."],lyrics:`[Verse]
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
Like a package that nobody’s bold enough to unfold`},{id:"3e6a6896-4a3e-40f5-971c-fb7931c46a28",title:"pessimistic girl",artist:"Nate M (Main acct @DomInNATEly)",handle:"techyneiche",index:15,image:"https://cdn2.suno.ai/6643bdaa-0cc1-47fc-b13e-a618e6789ec4.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/3e6a6896-4a3e-40f5-971c-fb7931c46a28.m4a",videoUrl:"https://cdn1.suno.ai/3e6a6896-4a3e-40f5-971c-fb7931c46a28.mp4",embedUrl:"https://suno.com/embed/3e6a6896-4a3e-40f5-971c-fb7931c46a28",sunoUrl:"https://suno.com/song/3e6a6896-4a3e-40f5-971c-fb7931c46a28",duration:228,durationFormatted:"3:48",tags:["Indie pop with a lo-fi aesthetic","clean electric guitar carrying syncopated chords with slight chorus","warm rounded melodic bass","tight dry snare and soft kick steady backbeat at 95 BPM in G major","relaxed melodic male vocals with subtle double-tracking"],lyrics:`[Intro]
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
Always taking.`},{id:"899d8586-21ca-461c-aede-0b56e3bb81fa",title:"It was all projection!",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:16,image:"https://cdn2.suno.ai/video_gen_93b4361f-836c-410e-a0fc-69a7a7f87b58_video_upload_93b4361f-836c-410e-a0fc-69a7a7f87b58_cover_snapshot_0s_1789413839_image.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/899d8586-21ca-461c-aede-0b56e3bb81fa.m4a",videoUrl:"https://cdn1.suno.ai/899d8586-21ca-461c-aede-0b56e3bb81fa.mp4",embedUrl:"https://suno.com/embed/899d8586-21ca-461c-aede-0b56e3bb81fa",sunoUrl:"https://suno.com/song/899d8586-21ca-461c-aede-0b56e3bb81fa",duration:307.2,durationFormatted:"5:07",tags:["Synth-pop electronica","breathy earnest male lead alternating with softly spoken female vocals and layered pitch-shifted harmonies","analog synth arpeggios","clean guitar arpeggio","distorted guitars","guitar chimes","glockenspiel","piano","acoustic guitar","warm basslines and programmed drums","light airy nostalgic production with swelling guitar layers and ambient tails","buoyant midtempo electronic pulse"],lyrics:`**[Intro]**
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
[acoustic chord rings out and fades]`},{id:"d26f6282-dbcc-4769-bf4e-3eb7c5a2cb45",title:"You came in sweet(remastered)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:17,image:"https://cdn2.suno.ai/17ff6dac-cf71-4661-9ea8-2253d9749977.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/d26f6282-dbcc-4769-bf4e-3eb7c5a2cb45.m4a",videoUrl:"https://cdn1.suno.ai/d26f6282-dbcc-4769-bf4e-3eb7c5a2cb45.mp4",embedUrl:"https://suno.com/embed/d26f6282-dbcc-4769-bf4e-3eb7c5a2cb45",sunoUrl:"https://suno.com/song/d26f6282-dbcc-4769-bf4e-3eb7c5a2cb45",duration:332.8,durationFormatted:"5:32",tags:["Rock","a midtempo R&B backbeat with a steady kick-snare pulse and tambourine marking the backbeat; close","raw male and female vocals trade verses","then join in a forceful chorus; wide doubled guitar tracks with saturated amplifiers surround acoustic drums","guitars spreading broad across the mix."],lyrics:`[Male vocals]
You came in sweet
All soft at the seams
You saw my ex use and hurt me
Said you felt bad for me

[Male Vocals]
Hello Hudson corner store
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
Caused by sociopathic exes
Now you're scared of me
But I ain't got no Tommy gun
And no malevolent motives
But you Keep me on defense
And make me try harder
While you hide your guilty actions
You came in sweet
please can I get her back

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
the flip and say "I'm becoming abusive... you're too good for me... you should walk away"*
Reverse-psychology performance designed to make me stay.
Then the gifts I gave became demands
You wore down my peace, wore down my sanity
You lived in a different world, rewriting reality
And I was already warned, so I should've seen it earlier
When the kind act cracked
While you were smoking crack
You weren't saving me
You were dragging me back

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

[Female vocals]
I wore that halo
Like a stolen crown
Used your four walls for shelter
While I burned them all down
I wasn't saving you
I was breaking you down.

[Male Vocals]
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
Now I see the ego syntonic pleasure in the worst
You flip the script, you DARVO, you tell them I’m the pain
Using emotional torture for your financial gain
You smear my name to ashes, saying im a monster and everything else you can invent. 
Said I don't know how to love,
but that was just a projection of what you couldn't do!
While you wear that heavy halo you borrowed from above
Sweet at first...
But you were playing for the kill.



[Female Vocals]
I played the vulnerable victim, spinning you my web
A quiet, soft illusion to keep me in your head
I told my ex stay quiet, to never speak a word
So I could keep your wallet open while playing wounded bird. I gave you little "truth-lies," said you were too good for me, So when the whole thing shattered, you’d take accountability.
I didn't want your healing, I didn't want a cure
I wanted you dependent, isolated, and unsure
I bent every single room, made you the villain of the play
Smeared your reputation before you had a say
I watched you lose your footing, watched you hollow out inside
And the relief I felt in breaking you was something I couldn't hide
I took your empathy and turned it to a leash
I wasn't your soulmate, I was acting like a leech.
But now I reconsider and I see your love
So unconditional
I’m sorry for smearing your name
And the poison I left behind
I’ll try to change and heal what’s real.
[End]`},{id:"b2c21b30-f19b-4614-9955-495b2aaaf94f",title:"Sweet at Last (Her Confession)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:18,image:"https://cdn2.suno.ai/5281521b-54aa-4818-9258-92e1eb00971f.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/b2c21b30-f19b-4614-9955-495b2aaaf94f.m4a",videoUrl:"https://cdn1.suno.ai/b2c21b30-f19b-4614-9955-495b2aaaf94f.mp4",embedUrl:"https://suno.com/embed/b2c21b30-f19b-4614-9955-495b2aaaf94f",sunoUrl:"https://suno.com/song/b2c21b30-f19b-4614-9955-495b2aaaf94f",duration:260,durationFormatted:"4:20",tags:["Industrial hip-hop alt-pop with distorted electric guitar in palm-muted power chords","analog synth bass","drum-machine snaps and glitch vocal chops; tense 96 BPM pulse; female lead in a spoken-word cadence with female adlibs; tape saturation","clipped parallel compression","wide stereo chorus and plate reverb."],lyrics:`[Verse 1]
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
Can I learn to be real at last?`},{id:"e9ed713f-de0e-4ec2-941f-11bfd6008657",title:"Good Luck, GoodBye",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:19,image:"https://cdn2.suno.ai/05557eb2-d6de-4203-ba41-e3d3ca9a2b25.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/e9ed713f-de0e-4ec2-941f-11bfd6008657.m4a",videoUrl:"https://cdn1.suno.ai/e9ed713f-de0e-4ec2-941f-11bfd6008657.mp4",embedUrl:"https://suno.com/embed/e9ed713f-de0e-4ec2-941f-11bfd6008657",sunoUrl:"https://suno.com/song/e9ed713f-de0e-4ec2-941f-11bfd6008657",duration:318,durationFormatted:"5:18",tags:["Alt-drill with a cold late-night mix","industrial grit","tape saturation","plate reverb","and distorted indie-pop texture; laid-back Brooklyn drill bounce in a slow pocket","led by a distorted electric-guitar loop over soft piano","crisp drill drums","sharp hi-hats","and sliding 808s; low male Auto-Tuned melodic rap in hypnotic short bars","dual-register vocal doubles","melodic chorus","rap verses","and a shouted chaotic bridge."],lyrics:`[Intro — Soft Piano / Distant Vocals]
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
Goodbye... 🖤`},{id:"6338e119-6d75-49b9-8ac3-861f2cb45f18",title:"Pessimistic Bias",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:20,image:"https://cdn2.suno.ai/image_large_6338e119-6d75-49b9-8ac3-861f2cb45f18.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/6338e119-6d75-49b9-8ac3-861f2cb45f18.m4a",videoUrl:"https://cdn1.suno.ai/6338e119-6d75-49b9-8ac3-861f2cb45f18.mp4",embedUrl:"https://suno.com/embed/6338e119-6d75-49b9-8ac3-861f2cb45f18",sunoUrl:"https://suno.com/song/6338e119-6d75-49b9-8ac3-861f2cb45f18",duration:242.4,durationFormatted:"4:02",tags:["Alt-drill with low male Auto-Tuned melodic rap","dual-register doubles","alternating male and female perspectives","sharply delivered bridge","softly spoken female outro; slow-pocket laid-back drill bounce","chaotic bridge into explosive final chorus; cold late-night mix with tape saturation","plate reverb","ambient feedback","distorted indie-pop texture; distorted electric-guitar loop","crisp drill drums","sharp hi-hats","sliding 808s","intimate clean guitar arpeggio","dark heavy bass pulse","ringing guitar chimes","piano","acoustic chords","chopped dark vocal-sample hook."],lyrics:`[Verse 1]
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
Let yourself be vulnerable like I did, I crossed that line`},{id:"ae67baac-578e-4b4b-96ad-49c06909fc7b",title:"I Never Bled Someone the Way You Do",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:21,image:"https://cdn2.suno.ai/e7b7b9a7-ea57-49e4-8cb7-226ef9db8a6a.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/ae67baac-578e-4b4b-96ad-49c06909fc7b.m4a",videoUrl:"https://cdn1.suno.ai/ae67baac-578e-4b4b-96ad-49c06909fc7b.mp4",embedUrl:"https://suno.com/embed/ae67baac-578e-4b4b-96ad-49c06909fc7b",sunoUrl:"https://suno.com/song/ae67baac-578e-4b4b-96ad-49c06909fc7b",duration:225,durationFormatted:"3:45",tags:[],lyrics:`[Verse 1]

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

[feedback fade out]`},{id:"f754f23c-36fa-4ecc-aba1-67bd39a425ad",title:"HURT ME, That's what you wanted!",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:22,image:"https://cdn2.suno.ai/image_large_f754f23c-36fa-4ecc-aba1-67bd39a425ad.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/f754f23c-36fa-4ecc-aba1-67bd39a425ad.m4a",videoUrl:"https://cdn1.suno.ai/f754f23c-36fa-4ecc-aba1-67bd39a425ad.mp4",embedUrl:"https://suno.com/embed/f754f23c-36fa-4ecc-aba1-67bd39a425ad",sunoUrl:"https://suno.com/song/f754f23c-36fa-4ecc-aba1-67bd39a425ad",duration:275.6,durationFormatted:"4:35",tags:["dark alt-pop","industrial hip-hop","funk rock","theatrical spoken word","dual-register vocals","accusatory female lead","distorted electric guitar","palm-muted riffs","finger-picked acoustic guitar","chiptune accents","glitch edits","boom bap drums","syncopated funk bass","tape saturation","gated snare","plate reverb","92 BPM","swung backbeat","anxious defiance"],lyrics:`[Verse]
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
Like something we both agreed to leave unread`},{id:"661db0bb-3e0a-4b31-b3b0-850ffcb5deea",title:"Numb Enough",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:23,image:"https://cdn2.suno.ai/47e8ea23-ec25-43cc-b6da-e8d175cfbabd.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/661db0bb-3e0a-4b31-b3b0-850ffcb5deea.m4a",videoUrl:"https://cdn1.suno.ai/661db0bb-3e0a-4b31-b3b0-850ffcb5deea.mp4",embedUrl:"https://suno.com/embed/661db0bb-3e0a-4b31-b3b0-850ffcb5deea",sunoUrl:"https://suno.com/song/661db0bb-3e0a-4b31-b3b0-850ffcb5deea",duration:300,durationFormatted:"5:00",tags:["Alt-drill with Brooklyn drill bounce","cold late-night mix","tape saturation","and distorted indie-pop grit; low male Auto-Tune melodic rap with hypnotic short-bar phrasing","opening into a huge melodic-rock chorus and half-time screamed breakdown; slow-pocket laid-back bounce; distorted electric-guitar loop","crisp drill drums","sharp hi-hats","sliding 808s."],lyrics:`[Intro]
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

[END]`},{id:"41b04c34-8a76-4283-b8fc-3c8996e88f70",title:"You Played The Wounded Bird",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:24,image:"https://cdn2.suno.ai/61e4714e-9de1-42c6-9536-3d9977035df5.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/41b04c34-8a76-4283-b8fc-3c8996e88f70.m4a",videoUrl:"https://cdn1.suno.ai/41b04c34-8a76-4283-b8fc-3c8996e88f70.mp4",embedUrl:"https://suno.com/embed/41b04c34-8a76-4283-b8fc-3c8996e88f70",sunoUrl:"https://suno.com/song/41b04c34-8a76-4283-b8fc-3c8996e88f70",duration:212.3,durationFormatted:"3:32",tags:["midwest hip-hop","hardcore hip-hop"],lyrics:`[Male Vocals – Verse 1 (The Hook)]
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
There's nothing but shadows and smoke in the air`},{id:"af250b99-1d45-469f-bf81-1248a4a33761",title:"You'd Rather!",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:25,image:"https://cdn2.suno.ai/a972fc4d-2992-42c3-9e5d-7c6b8d487a61.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/af250b99-1d45-469f-bf81-1248a4a33761.m4a",videoUrl:"https://cdn1.suno.ai/af250b99-1d45-469f-bf81-1248a4a33761.mp4",embedUrl:"https://suno.com/embed/af250b99-1d45-469f-bf81-1248a4a33761",sunoUrl:"https://suno.com/song/af250b99-1d45-469f-bf81-1248a4a33761",duration:232.4,durationFormatted:"3:52",tags:["House-pop with rock grit and funky guitar chops","four-on-the-floor kick and syncopated bass driving a tense groove; verse stays stripped to clipped drums","muted bass","and sarcastic vocal phrasing","pre-chorus opens with rising synths and handclap lift","chorus hits with stacked gang vocals and a big hook over crunchy guitars. Bridge drops to half-time with filtered piano and spoken sneer","then final chorus adds octave jumps","crowd chants","and bright white-noise risers. Lead vocal is intimate and taunting","with doubled hooks","delay throws on key insults","and ad-lib replies. Wide","punchy","glossy mix with sharp top-end.","alternative pop","rock","pop","funk","techno"],lyrics:`[Verse 1]
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
Than let me prove I never lied to you`},{id:"f71b6796-85e1-4673-8fa5-6e820acaa02a",title:"Numb Enough",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:26,image:"https://cdn2.suno.ai/b532bc67-85e8-4b8d-9a77-8cac884bfa85.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/f71b6796-85e1-4673-8fa5-6e820acaa02a.m4a",videoUrl:"https://cdn1.suno.ai/f71b6796-85e1-4673-8fa5-6e820acaa02a.mp4",embedUrl:"https://suno.com/embed/f71b6796-85e1-4673-8fa5-6e820acaa02a",sunoUrl:"https://suno.com/song/f71b6796-85e1-4673-8fa5-6e820acaa02a",duration:267.6,durationFormatted:"4:27",tags:["Alt-drill with Brooklyn drill bounce","cold late-night mix","tape saturation","plate reverb","and distorted indie-pop grit; low male Auto-Tune melodic rap with hypnotic short-bar phrasing","opening into a huge melodic-rock chorus and half-time screamed breakdown; slow-pocket laid-back bounce; distorted electric-guitar loop","crisp drill drums","sharp hi-hats","sliding 808s","and feedback."],lyrics:`[Intro]
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
I know one day this boy gon’ fuck us up
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
I know one day this boy gon’ fuck us up
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

[Outro / Final Hook]
I keep prayin', “God, please let it be enough”
Before this speedball in these veins fucks both of us up
I see the change every time she use
Look in her face, know what I’m 'bout to lose
Still got the bun, but its like she can't ever get enough
I’m staying back with her, hoping she will choose life over the high.
Love in my hands, but the drugs make her choose`},{id:"86e9d432-d455-4edc-aea9-1bb9e1419872",title:"Run Your Script",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:27,image:"https://cdn2.suno.ai/7a1ee50e-77f1-4e6e-a133-304476129820.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/86e9d432-d455-4edc-aea9-1bb9e1419872.m4a",videoUrl:"https://cdn1.suno.ai/86e9d432-d455-4edc-aea9-1bb9e1419872.mp4",embedUrl:"https://suno.com/embed/86e9d432-d455-4edc-aea9-1bb9e1419872",sunoUrl:"https://suno.com/song/86e9d432-d455-4edc-aea9-1bb9e1419872",duration:392.7,durationFormatted:"6:32",tags:["Pop rock in G major at 120 BPM. The arrangement features a clean electric guitar playing arpeggiated chords","a grand piano","and a driving drum kit with a prominent snare. A melodic bass guitar follows the chord progression. The track features alternating male lead vocals that are clean never screaming. The production uses light reverb on the vocals and a crisp","modern mix with clear separation between the mid-range piano and the high-frequency guitar strums."],lyrics:`[Verse 1]

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

[feedback fade out]`},{id:"4e1768a1-c297-40ab-89a9-cd79009f0e9c",title:"Unconditionally IN LOVE",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:28,image:"https://cdn2.suno.ai/image_large_2da9d1ee-df2d-4c3b-ae83-41f9df8dd5b6.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/4e1768a1-c297-40ab-89a9-cd79009f0e9c.m4a",videoUrl:"https://cdn1.suno.ai/4e1768a1-c297-40ab-89a9-cd79009f0e9c.mp4",embedUrl:"https://suno.com/embed/4e1768a1-c297-40ab-89a9-cd79009f0e9c",sunoUrl:"https://suno.com/song/4e1768a1-c297-40ab-89a9-cd79009f0e9c",duration:370,durationFormatted:"6:10",tags:["dark melancholic indie pop","warm acoustic rhythm","clean electric guitar lead","steady driving drums","melodic bassline","conversational introspective male vocal","dynamic crescendo","115 bpm"],lyrics:`[Intro: Soft acoustic guitar strumming, quiet room sound, subtle rim-click]

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
[End]`},{id:"865fb7f8-83b4-4ac5-83e9-738a6f660a52",title:"Abusive Psychological Diagnosis",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:29,image:"https://cdn2.suno.ai/image_large_8f149960-2d0f-496f-9506-68dd271f25ac.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/865fb7f8-83b4-4ac5-83e9-738a6f660a52.m4a",videoUrl:"https://cdn1.suno.ai/865fb7f8-83b4-4ac5-83e9-738a6f660a52.mp4",embedUrl:"https://suno.com/embed/865fb7f8-83b4-4ac5-83e9-738a6f660a52",sunoUrl:"https://suno.com/song/865fb7f8-83b4-4ac5-83e9-738a6f660a52",duration:291.6,durationFormatted:"4:51",tags:["alt-drill","low male Auto-Tune melodic rap with hypnotic short-bar cadence","alternating female first-person passages","dual-register vocal doubles","shouted chaotic bridge","softly spoken female outro; distorted electric-guitar loop","crisp drill drums","sharp hi-hats","sliding 808s","intimate clean-guitar arpeggio","dark bass pulse","ringing chimes","fading piano","ambient feedback","trailing acoustic chords; slow-pocket laid-back Brooklyn drill bounce with dynamic crescendo; cold late-night mix","industrial grit","tape saturation","plate reverb","chopped dark vocal-sample hook repeating “I want you back","” distorted indie-pop texture"],lyrics:`[Intro]

[intimate clean guitar arpeggio, dark heavy bass pulse, steady drumbeat]

[Male Vocals – Verse 1]

You arrived with a saccharine prelude, claiming love bore no fee
Love-bombed me swiftly, establishing traps of transactional ice
You lived in my four walls, yet questioned every gesture of care
Asking *"What's the angle? What's the catch?"* whenever I was there
Incalculable times I walked into "The Office," seeking your domain
Only to meet icy rejection, public coldness, and disdain
Zero PDA in the light—you pushed my hand away
Playing the wounded bird so the crowd would pity you each day
Calculated isolation to make the public feel your grief
So they’d hand you free handouts and offer instant relief

[Female Vocals]
I weaponized fake altruism to mask my covert, vulnerable core
Playing the fragile, wounded bird to open every pity-driven door
Used you for substances just to keep withdrawal off my face
Withholding public affection so they'd think I was alone in my place—
Faking single-woman hardship so the handouts and sympathy would flow
Turning covert vulnerable narcissism into a lucrative public show
Whispering *"I'm becoming abusive"* as a reverse psychology test
Mobilizing my flying monkeys, launching slanders to destroy the rest
Driven by Machiavellian plots, narcissism, and psychopathy
A full Dark Triad fusion, wrapped in dramatic Cluster B

[Male Vocals]
Every preposterous allegation you directed at my name
Was a diagnostic mirror of your own clandestine game!
You labeled me paranoid, accused me of covert deceit
While executing insidious betrayals in total secrecy!

[Male Vocals]
It was pure psychological projection! A weaponized display!
You deployed flying monkeys to destroy me along the way!
I frequented "The Office" merely to endure your surgical knife
While you weaponized horrific slander to dismantle my entire life!

[Female Vocals]
It was pure psychological projection! Every falsehood I assigned!
I mapped my own hidden guilt onto your unblemished mind!
I proclaimed you toxic to keep you perpetually on defense
Hiding my malignant reality behind a sanctimonious fence!

[Male Vocals ]
You claimed my affection was absent, though my devotion was absolute
You feigned affection yourself, rendering my reality moot
Fake altruism was your armor, covert vulnerability your shield
Extorting public pity while my suffering was concealed
Borderline instability, histrionic flare, antisocial heart
Narcissistic grandiosity dismantling me from the start
You accused me of every grotesque crime your mind could construct—
A voyeur, a cheater, a predator—while you managed the conduct!

[Female Vocals]
I recognized your profound devotion—it was blindingly clear
I used your shelter and drugs to keep the sickness out of here
I denied you public affection so the world saw me alone
Harvesting their pity while I bled you to the bone
My covert vulnerable narcissism fed on playing the victimized soul
Using fake altruism and wounded-bird acts to keep total control
Machiavellian schemes for long-term control and strategic gain
Unhinged psychopathy extracting your life force to cover my pain

[Bridge – Dynamic Duet]

[dynamic crescendo, ringing guitar chimes, pounding drums]

[Male Vocals]
How many times did I stand at "The Office" door
Seeking the woman who lived with me, only left on the floor?
Playing the wounded bird just to beg for public aid
Slandered to the crowd while you played the victimized maid!

[Female Vocals]
I derived an egosyntonic thrill from watching your dignity faint
Extracted your empathy and resources to fuel my own pride
Leaving you utterly depleted while I stayed sanctified

[Male Vocals]
It was pure psychological projection! A weaponized display!
You deployed flying monkeys to destroy me along the way!
I frequented "The Office" merely to endure your surgical knife
While you weaponized horrific slander to dismantle my entire life!

[Female Vocals]

It was pure psychological projection! Every falsehood I assigned!
I mapped my own hidden guilt onto your unblemished mind!
I was sweet at the onset, now revealed as the ultimate curse— A communal parasite leaving your soul utterly adverse!

[Outro]
[fading piano, ambient feedback, trailing acoustic chords]
[Male Vocals]
Walked into "The Office" one final time...
Now I perceive the mirror behind every engineered crime.

[Female Vocals]
[softly spoken]
Fake altruism, a wounded bird in the light...
Dark Triad, Cluster B... hiding who we really were in the night.
[acoustic chord rings out and fades]`},{id:"cc7834cd-0b1a-4e7c-8a7a-e2cb94dcb5bf",title:"You came in sweet (TRAP)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:30,image:"https://cdn2.suno.ai/image_large_cc7834cd-0b1a-4e7c-8a7a-e2cb94dcb5bf.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/cc7834cd-0b1a-4e7c-8a7a-e2cb94dcb5bf.m4a",videoUrl:"https://cdn1.suno.ai/cc7834cd-0b1a-4e7c-8a7a-e2cb94dcb5bf.mp4",embedUrl:"https://suno.com/embed/cc7834cd-0b1a-4e7c-8a7a-e2cb94dcb5bf",sunoUrl:"https://suno.com/song/cc7834cd-0b1a-4e7c-8a7a-e2cb94dcb5bf",duration:151.1,durationFormatted:"2:31",tags:["Hip Hop Trap with alternating male and female vocals","high-energy trap flow","tight kick-to-808 sidechain","heavy sub impact","crisp punchline-driven drums","sharp hi-hat rolls","urgent ad-libs","and a catchy chantable chorus hook"],lyrics:`[Male vocals]
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
[End]`},{id:"48cb63f3-ed17-4696-be79-ac38af54597e",title:"The Zeigarnik Effect",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:31,image:"https://cdn2.suno.ai/cc85121c-6b9d-4ce2-ae91-b30cf3aac289.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/48cb63f3-ed17-4696-be79-ac38af54597e.m4a",videoUrl:"https://cdn1.suno.ai/48cb63f3-ed17-4696-be79-ac38af54597e.mp4",embedUrl:"https://suno.com/embed/48cb63f3-ed17-4696-be79-ac38af54597e",sunoUrl:"https://suno.com/song/48cb63f3-ed17-4696-be79-ac38af54597e",duration:120,durationFormatted:"1:59",tags:["trap","dubstep","halftime beat","140 BPM","wobble sub-bass","syncopated 808s","distorted snare","glitch drum fills","male female duet","chopped vocal hooks","call-and-response chorus","detuned synth stabs","sawtooth lead","sidechain pumping","parallel saturation","wide stereo bass","sparse verse drops","explosive pre-chorus lift","combative swagger","playful defiance"],lyrics:`(Male Voice) I ran the numbers, tracked the patterns of the sinkholes you create. Engineering every talk so we could bypass all this weight. I was your biological home, the regulator for your storm. But you treated my loyalty like a chain instead of somewhere warm.
(Female Voice) I’m "pissy when I miss it," and the withdrawal is all I really know. I told them not to talk to you—I couldn't let my money go. Your 8K love was engulfment, a fire trying to swallow me whole. So I flipped the "nuclear option" just to keep my own control.
(Chorus - Duet) It’s the Zeigarnik effect, a page ripped out before the end. An open loop in the machine that I can no longer defend. High-voltage current trying to power a low-voltage light. We’re just two different operating systems crashing in the night.
(Male Voice) I’m dimming my empathy now, letting the Supernova rise. I see your pessimistic bias and the "hero" in your lies. I’m adopting the CBR model—Cold, Rational, and Bottom-line. Because loving your potential was never going to fix your design.
(Female Voice) I’ll villainize your kindness, say you tried to lock me in a cell. Believing you’re the monster makes it easier to say farewell. I’ve entered the relief stage, breathing air that’s thin and gray. While I’m reaching for your phantom limb every single day.
(Outro - Duet) I’m taking back my oxygen; I’m closing the loop on my own. Respecting myself more than the ghost of the version you’ve shown. One is finding sovereignty in the silence and the truth. The other is just an unfinished story, a glitch from a broken youth.`},{id:"a2132ab0-c8c0-49c8-835c-555eabc3b9ce",title:"Barly Maybe Saby DON'T MISS IT",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:32,image:"https://cdn2.suno.ai/image_large_f78e7ed2-fa71-4b39-84f8-8b6d6cd3687d.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/a2132ab0-c8c0-49c8-835c-555eabc3b9ce.m4a",videoUrl:"https://cdn1.suno.ai/a2132ab0-c8c0-49c8-835c-555eabc3b9ce.mp4",embedUrl:"https://suno.com/embed/a2132ab0-c8c0-49c8-835c-555eabc3b9ce",sunoUrl:"https://suno.com/song/a2132ab0-c8c0-49c8-835c-555eabc3b9ce",duration:221,durationFormatted:"3:41",tags:["alt pop","pop punk","breakup anthem","male female","distorted electric guitars","palm-muted power chords","syncopated 808s","chopped vocal hooks","punchy snare cracks","sub bass drops","gang shouts","plate reverb","parallel compression","wide stereo chorus","142 BPM","halftime pre-chorus","bitter defiance","chant hook"],lyrics:`[singer A]
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
we’ll be alright`},{id:"aace513a-bfd9-4a16-88b1-f67aa210fbbf",title:"It was all Projection(Elton John)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:33,image:"https://cdn2.suno.ai/video_gen_121136d0-cbc2-4f80-bead-2e2a92714724_video_upload_121136d0-cbc2-4f80-bead-2e2a92714724_cover_snapshot_0s_1789411913_image.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/aace513a-bfd9-4a16-88b1-f67aa210fbbf.m4a",videoUrl:"https://cdn1.suno.ai/aace513a-bfd9-4a16-88b1-f67aa210fbbf.mp4",embedUrl:"https://suno.com/embed/aace513a-bfd9-4a16-88b1-f67aa210fbbf",sunoUrl:"https://suno.com/song/aace513a-bfd9-4a16-88b1-f67aa210fbbf",duration:358.8,durationFormatted:"5:58",tags:["Rock","Pop with a steady rhythmic percussion pulse; alternating male and female vocals","accusatory theatrical leads with soaring gospel-influenced backing vocals","intimate verses and explosive duet choruses; grand piano with melodic syncopated chords","ringing clean-guitar chimes","distorted guitars","bass","drums","acoustic guitar","ambient feedback","lush orchestral strings; classic 70s rock ballad production with baroque-pop voicings","plate reverb","tape saturation","chopped vocal hooks","gang-shout accents","and dramatic dynamic shifts."],lyrics:`**[Intro]**
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
[acoustic chord rings out and fades]`},{id:"5edcbaec-49b4-4b9a-bffe-96c26cb0e019",title:"Poison shot by shot(Vocal Clean Remix)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:34,image:"https://cdn2.suno.ai/64713d9a-b85f-4345-a523-2e80515bb120.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/5edcbaec-49b4-4b9a-bffe-96c26cb0e019.m4a",videoUrl:"https://cdn1.suno.ai/5edcbaec-49b4-4b9a-bffe-96c26cb0e019.mp4",embedUrl:"https://suno.com/embed/5edcbaec-49b4-4b9a-bffe-96c26cb0e019",sunoUrl:"https://suno.com/song/5edcbaec-49b4-4b9a-bffe-96c26cb0e019",duration:360.5,durationFormatted:"6:00",tags:["deathcab for cutie","the script"],lyrics:`**[Male Vocals – Verse 1]**
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
I wasn't your soulmate, I was acting like a leech`},{id:"45517b9a-5ab2-4e6d-842e-4a1452ec9547",title:"A B C's of Addiction",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:35,image:"https://cdn2.suno.ai/2d60da41-39ef-42f0-b39f-c03c3efbc5bb.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/45517b9a-5ab2-4e6d-842e-4a1452ec9547.m4a",videoUrl:"https://cdn1.suno.ai/45517b9a-5ab2-4e6d-842e-4a1452ec9547.mp4",embedUrl:"https://suno.com/embed/45517b9a-5ab2-4e6d-842e-4a1452ec9547",sunoUrl:"https://suno.com/song/45517b9a-5ab2-4e6d-842e-4a1452ec9547",duration:286.8,durationFormatted:"4:46",tags:["dark alt-pop","minimalist sub bass","breathy whispered vocals","intimate close-mic delivery","eerie synths","heavy 808s","slow tempo","dark room atmosphere",`ASMR sound design

Vocals: breathy whispered vocals`,"intimate close-mic delivery","hushed flow","soft falsetto",`layered vocal harmonies

Production: minimalist sub bass`,"heavy 808s","distorted bass drop","eerie synths",`room silence

Vibe: dark alt-pop`,"haunting atmosphere","melancholic","ASMR sound design"],lyrics:`[Intro: Dark Synth & Heavy Breath]
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

[End]`},{id:"ba1c3c00-6547-4e96-afe1-1566dca7b876",title:"cages that I couldn't even see(RAP}",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:36,image:"https://cdn2.suno.ai/ba1c3c00-6547-4e96-afe1-1566dca7b876_1e96e170.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/ba1c3c00-6547-4e96-afe1-1566dca7b876.m4a",videoUrl:"https://cdn1.suno.ai/ba1c3c00-6547-4e96-afe1-1566dca7b876.mp4",embedUrl:"https://suno.com/embed/ba1c3c00-6547-4e96-afe1-1566dca7b876",sunoUrl:"https://suno.com/song/ba1c3c00-6547-4e96-afe1-1566dca7b876",duration:274.3,durationFormatted:"4:34",tags:["hardcore cinematic hip hop aggressive male rap vocal high speed technical flow dense internal rhymes rapid fire delivery powerful punchlines intense emotional performance dark orchestral trap beat heavy 808 bass sharp snare hits dramatic strings cinematic drums underground battle rap energy modern Hip Hop","Rap","Hardcore Hip Hop","Midwest Hip Hop inspired intensity rebellious attitude energetic hook dynamic vocal switches fast verses with explosive chorus stadium sized sound professional studio production 2000s hardcore rap influence mixed with modern trap"],lyrics:`**[Male Vocals – Verse 1]**
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
I wasn't your soulmate, I was acting like a leech`},{id:"ade85e2d-c891-42bc-8dbf-8768b475d101",title:"The Doubts Between the Seams",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:37,image:"https://cdn2.suno.ai/image_large_ade85e2d-c891-42bc-8dbf-8768b475d101.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/ade85e2d-c891-42bc-8dbf-8768b475d101.m4a",videoUrl:"https://cdn1.suno.ai/ade85e2d-c891-42bc-8dbf-8768b475d101.mp4",embedUrl:"https://suno.com/embed/ade85e2d-c891-42bc-8dbf-8768b475d101",sunoUrl:"https://suno.com/song/ade85e2d-c891-42bc-8dbf-8768b475d101",duration:238.4,durationFormatted:"3:58",tags:["a duet","dubstep","trap"],lyrics:`[Verse 1]
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
And you keep on missing out`},{id:"be1b836f-aee0-406a-adfb-c1e5b4788078",title:"We MUSK go to MARS!",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:38,image:"https://cdn2.suno.ai/7cb8ec5e-b82c-492e-8136-edec0b448966.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/be1b836f-aee0-406a-adfb-c1e5b4788078.m4a",videoUrl:"https://cdn1.suno.ai/be1b836f-aee0-406a-adfb-c1e5b4788078.mp4",embedUrl:"https://suno.com/embed/be1b836f-aee0-406a-adfb-c1e5b4788078",sunoUrl:"https://suno.com/song/be1b836f-aee0-406a-adfb-c1e5b4788078",duration:286,durationFormatted:"4:46",tags:["dark alt-pop","industrial hip-hop","96 BPM","male and female vocals","spoken-word cadence","distorted electric guitar","analog synth bass","glitch vocal chops","drum machine snaps","palm-muted power chords","tape saturation","clipped parallel compression","wide stereo chorus","plate reverb","anxious defiance","bittersweet release"],lyrics:`Yeah SpaceX
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
It’s a launch you can see in real life`},{id:"018cff53-c1ec-4f4a-bace-e7ea89f9ce3d",title:"ABCs",artist:"NATE M. ancillary capillary",handle:"furtheraptitudes",index:39,image:"https://cdn2.suno.ai/image_large_018cff53-c1ec-4f4a-bace-e7ea89f9ce3d.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/018cff53-c1ec-4f4a-bace-e7ea89f9ce3d.m4a",videoUrl:"https://cdn1.suno.ai/018cff53-c1ec-4f4a-bace-e7ea89f9ce3d.mp4",embedUrl:"https://suno.com/embed/018cff53-c1ec-4f4a-bace-e7ea89f9ce3d",sunoUrl:"https://suno.com/song/018cff53-c1ec-4f4a-bace-e7ea89f9ce3d",duration:270,durationFormatted:"4:30",tags:["dark alt pop minimal bass heavy production quirky rhythmic synth breathy and whispered vocal delivery deadpan spoken word verses staccato cadence distorted sub bass hits sharp asmr style percussion hauntingly intimate atmosphere Pop","Electropop","Indie Pop","Alternative Pop style"],lyrics:`This is the A B C's of Addiction,


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

[End]`},{id:"e5c5ba9d-7215-41bd-a626-28a93415eb3d",title:"Easier To Believe The Hurt",artist:"Dom-I-NATE",handle:"domnate",index:40,image:"https://cdn2.suno.ai/image_large_e5c5ba9d-7215-41bd-a626-28a93415eb3d.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/e5c5ba9d-7215-41bd-a626-28a93415eb3d.m4a",videoUrl:"https://cdn1.suno.ai/e5c5ba9d-7215-41bd-a626-28a93415eb3d.mp4",embedUrl:"https://suno.com/embed/e5c5ba9d-7215-41bd-a626-28a93415eb3d",sunoUrl:"https://suno.com/song/e5c5ba9d-7215-41bd-a626-28a93415eb3d",duration:229.5,durationFormatted:"3:49",tags:["Intimate acoustic ballad with male vocals; close-mic’d fingerpicked guitar and soft piano chords. Verses stay hushed","almost spoken","with subtle pads in the background. Chorus swells with warm harmonies and a gentle kick","lifting the emotion. Bridge strips back to almost solo vocal","then returns with layered vocals for a tender","cinematic finish.","romantic","male vocals"],lyrics:`[Verse 1]
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
Come lay your head on the safer side tonight`},{id:"9ca6c3d7-7e54-497f-9638-98892a4bc68d",title:"Saints and Schemes",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:41,image:"https://cdn2.suno.ai/image_large_9ca6c3d7-7e54-497f-9638-98892a4bc68d.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/9ca6c3d7-7e54-497f-9638-98892a4bc68d.m4a",videoUrl:"https://cdn1.suno.ai/9ca6c3d7-7e54-497f-9638-98892a4bc68d.mp4",embedUrl:"https://suno.com/embed/9ca6c3d7-7e54-497f-9638-98892a4bc68d",sunoUrl:"https://suno.com/song/9ca6c3d7-7e54-497f-9638-98892a4bc68d",duration:300.4,durationFormatted:"5:00",tags:["Dark alt-pop and indie-rock hybrid with brooding synth pads","reverb-soaked clean guitars","and tight","syncopated drums. Verses sit in a low","intimate register with fast","rhythmic phrasing","while choruses open into soaring","layered vocal hooks. Bass is warm but slightly overdriven","pulsing around a sparse kick and snare groove. Subtle glitch textures and reversed guitar swells create an anxious","cinematic atmosphere. Dynamics swell from hushed confessions to explosive","distorted climaxes","blending melodic female leads with edgy male responses. Mid-tempo","4/4 time","minor key with tense modal inflections and occasional unexpected chord shifts for psychological unease."],lyrics:`[Verse 1 - Female Vocal]
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
(Both, whispered) Feeding on the soft parts you taught me to bleed (ABAB)`},{id:"a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60",title:"Poison shot by shot (Piano Soft Vocals)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:42,image:"https://cdn2.suno.ai/d2d6cd4c-5d47-4238-9eaf-19444861b06a.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60.m4a",videoUrl:"https://cdn1.suno.ai/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60.mp4",embedUrl:"https://suno.com/embed/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60",sunoUrl:"https://suno.com/song/a5004c9a-2a17-4f4c-b38f-a7cc98ecdf60",duration:360.5,durationFormatted:"6:00",tags:["Pop rock duet in G major at 120 BPM. The arrangement features a clean electric guitar playing arpeggiated chords","a grand piano","and a driving drum kit with a prominent snare. A melodic bass guitar follows the chord progression. The track features alternating male and female lead vocals that harmonize during the choruses. The production uses light reverb on the vocals and a crisp","modern mix with clear separation between the mid-range piano and the high-frequency guitar strums."],lyrics:`[Intro]
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
[piano fades out]`},{id:"aacdde92-a133-4df4-85ae-04a9933c5bba",title:"We MUSK go to MARS!",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:43,image:"https://cdn2.suno.ai/f1f81ee4-b999-4b52-9b9e-9bd0b6366be9.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/aacdde92-a133-4df4-85ae-04a9933c5bba.m4a",videoUrl:"https://cdn1.suno.ai/aacdde92-a133-4df4-85ae-04a9933c5bba.mp4",embedUrl:"https://suno.com/embed/aacdde92-a133-4df4-85ae-04a9933c5bba",sunoUrl:"https://suno.com/song/aacdde92-a133-4df4-85ae-04a9933c5bba",duration:243.9,durationFormatted:"4:03",tags:["dark alt-pop","industrial hip-hop","96 BPM","male and female vocals","spoken-word cadence","distorted electric guitar","analog synth bass","glitch vocal chops","drum machine snaps","palm-muted power chords","tape saturation","clipped parallel compression","wide stereo chorus","plate reverb","anxious defiance","bittersweet release"],lyrics:`Yeah SpaceX
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
Yeah, We Musk Go To MARS.`},{id:"707e9182-ca4c-44e9-983e-dbc5ae8b3a09",title:"Braune Augen",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:44,image:"https://cdn2.suno.ai/image_large_707e9182-ca4c-44e9-983e-dbc5ae8b3a09.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/707e9182-ca4c-44e9-983e-dbc5ae8b3a09.m4a",videoUrl:"https://cdn1.suno.ai/707e9182-ca4c-44e9-983e-dbc5ae8b3a09.mp4",embedUrl:"https://suno.com/embed/707e9182-ca4c-44e9-983e-dbc5ae8b3a09",sunoUrl:"https://suno.com/song/707e9182-ca4c-44e9-983e-dbc5ae8b3a09",duration:349.5,durationFormatted:"5:49",tags:["Style German Street Rap Emotional Hip Hop Modern Boom Bap Dark Trap Soul 84 BPM Raw Emotional Melancholic Cinematic Deep raspy male voice Honest storytelling Spoken intro Confident flow Emotional delivery Natural vocals Minimal autotune Powerful melodic hook Layered backing vocals Emotional ad libs Heavy 808 bass Punchy kick Hard snare Dark piano Ambient pads Orchestral strings Soft guitar textures Haunting choir Atmospheric vocal chops Theme Blue eyes First love Longing Heartbreak Memories Sleepless nights Regret Obsession Loyalty Pain Letting go without closure Broken trust Real emotions No happy ending Dense multisyllabic rhyme schemes Internal rhymes Strong punchlines Dynamic transitions Studio quality Massive low end Wide stereo Warm analog character Crystal clear mix Authentic German street rap No pop No EDM No commercial sound No live audience No crowd noise No concert ambience Deep emotional atmosphere Unforgettable chorus Raw soul Pain driven lyrics"],lyrics:`TITEL: Braune Augen

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

Gedanke bleiben.`},{id:"a692b3ba-1cbf-45a7-ad62-8ee524fa76a4",title:"Poison Shot By Shot (Spanish)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:45,image:"https://cdn2.suno.ai/image_large_a692b3ba-1cbf-45a7-ad62-8ee524fa76a4.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/a692b3ba-1cbf-45a7-ad62-8ee524fa76a4.m4a",videoUrl:"https://cdn1.suno.ai/a692b3ba-1cbf-45a7-ad62-8ee524fa76a4.mp4",embedUrl:"https://suno.com/embed/a692b3ba-1cbf-45a7-ad62-8ee524fa76a4",sunoUrl:"https://suno.com/song/a692b3ba-1cbf-45a7-ad62-8ee524fa76a4",duration:254.8,durationFormatted:"4:14",tags:[],lyrics:`[Voz Masculina – Verso 1]
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
No era tu alma gemela... era la sanguijuela que te marea.`},{id:"ca0198c0-3507-4fc9-a576-9445317c1e14",title:"Bad Brina knows how to Win",artist:"Nate M. AKA DomInNATEly",handle:"dom_innately",index:46,image:"https://cdn2.suno.ai/f4eaff63-a732-44a3-a4f3-fe8fd5049042.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/ca0198c0-3507-4fc9-a576-9445317c1e14.m4a",videoUrl:"https://cdn1.suno.ai/ca0198c0-3507-4fc9-a576-9445317c1e14.mp4",embedUrl:"https://suno.com/embed/ca0198c0-3507-4fc9-a576-9445317c1e14",sunoUrl:"https://suno.com/song/ca0198c0-3507-4fc9-a576-9445317c1e14",duration:190.4,durationFormatted:"3:10",tags:[],lyrics:`[singer A (female Voice) ]
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
I woke up Sore yet I'm asking for more, Babe you best Get me a boy and a girl or i swear, I tell the police whats on your computer, but you say, Who cares, I've got nothing to hide?  I say Haha cuz you don't know what I downloaded on your computer last night.. So now you better live in fright, Before those screenshots come to light,  they'll have you locked up tight.`},{id:"63158df4-507c-403e-b6ed-40d272a1005f",title:"Communal Narcissist",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:47,image:"https://cdn2.suno.ai/video_gen_830a9827-d93a-42af-a66e-98de6c779eff_video_upload_830a9827-d93a-42af-a66e-98de6c779eff_cover_snapshot_0s_1791486110_image.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/63158df4-507c-403e-b6ed-40d272a1005f.m4a",videoUrl:"https://cdn1.suno.ai/63158df4-507c-403e-b6ed-40d272a1005f.mp4",embedUrl:"https://suno.com/embed/63158df4-507c-403e-b6ed-40d272a1005f",sunoUrl:"https://suno.com/song/63158df4-507c-403e-b6ed-40d272a1005f",duration:212.8,durationFormatted:"3:32",tags:["Hardcore Midwest hip hop with close-mic vocal layering","heavy 808 drops","and a dry","weighty mix; laid-back mid-tempo groove with sharp staccato bursts at peak intensity; deep low male voice","hypnotic half-sung","half-rapped cadence with restrained autotune; looping picked acoustic guitar","melancholic piano accents","and dense chorus layers."],lyrics:`[Intro]
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
Sovereign and free.`},{id:"b9a539e0-e5f8-474b-beaa-9b901ad49720",title:"It was all projection(OWL)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:48,image:"https://cdn2.suno.ai/video_gen_93b4361f-836c-410e-a0fc-69a7a7f87b58_video_upload_93b4361f-836c-410e-a0fc-69a7a7f87b58_cover_snapshot_0s_1789413839_image.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/b9a539e0-e5f8-474b-beaa-9b901ad49720.m4a",videoUrl:"https://cdn1.suno.ai/b9a539e0-e5f8-474b-beaa-9b901ad49720.mp4",embedUrl:"https://suno.com/embed/b9a539e0-e5f8-474b-beaa-9b901ad49720",sunoUrl:"https://suno.com/song/b9a539e0-e5f8-474b-beaa-9b901ad49720",duration:335.9,durationFormatted:"5:35",tags:["Synth-pop electronica with breathy earnest male lead and contrasting female vocal","layered pitch-shifted harmonies","analog synth arpeggios","glockenspiel accents","clean guitar arpeggios","distorted guitars","ringing chimes","piano","acoustic chords","warm basslines","buoyant midtempo electronic pulse with steady programmed drums","light airy nostalgic production swelling into an explosive final chorus"],lyrics:`**[Intro]**
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
[acoustic chord rings out and fades]`},{id:"50e807f4-c869-46b4-af94-2d46a29dc479",title:"Cluster B-Storm",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:49,image:"https://cdn2.suno.ai/f3439aa2-3421-4e7b-90cd-aede194ba11d.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/50e807f4-c869-46b4-af94-2d46a29dc479.m4a",videoUrl:"https://cdn1.suno.ai/50e807f4-c869-46b4-af94-2d46a29dc479.mp4",embedUrl:"https://suno.com/embed/50e807f4-c869-46b4-af94-2d46a29dc479",sunoUrl:"https://suno.com/song/50e807f4-c869-46b4-af94-2d46a29dc479",duration:296.4,durationFormatted:"4:56",tags:["alt-drill: distorted electric-guitar loop and crisp drill drums with sharp hi-hats and sliding 808s; low male Auto-Tune melodic rap","hypnotic short-bar cadence","chopped dark vocal-sample hook repeating “I want you back","” shouted chaotic bridge; cold late-night mix","industrial grit","tape saturation","plate reverb","distorted indie-pop texture","dual-register vocal doubles; laid-back Brooklyn drill bounce at a slow pocket"],lyrics:`[Intro]
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
And it’s mine.`},{id:"38a0e5e0-201b-451c-b2e7-e2dfa83a9489",title:"Cluster B Storm(Elton Johns style)",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:50,image:"https://cdn2.suno.ai/01aa20f3-e4dc-4974-8ba2-15160a2bb73a.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/38a0e5e0-201b-451c-b2e7-e2dfa83a9489.m4a",videoUrl:"https://cdn1.suno.ai/38a0e5e0-201b-451c-b2e7-e2dfa83a9489.mp4",embedUrl:"https://suno.com/embed/38a0e5e0-201b-451c-b2e7-e2dfa83a9489",sunoUrl:"https://suno.com/song/38a0e5e0-201b-451c-b2e7-e2dfa83a9489",duration:435.6,durationFormatted:"7:15",tags:["70s glam rock baroque pop ballad","male theatrical emotive lead with soaring gospel-influenced backing vocals","classic tape saturation and warm analog compression","syncopated grand piano chords","lush orchestral strings","ringing clean guitar chimes","clean arpeggiated riff","steady bass drive","subdued acoustic guitar","pounding drums and steady snare","midtempo syncopated rock pulse with intimate verses","swelling pre-choruses and explosive anthemic choruses"],lyrics:`It was June when you arrived like a bird with a broken wing

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

**[Outro]**`}],Re=r=>{const b=rt.find(I=>{if(I.id===r)return!0;const d=r.toLowerCase().replace(/[^a-z0-9]/g,""),z=I.title.toLowerCase().replace(/[^a-z0-9]/g,"");return z.includes(d)||d.includes(z)});return(b==null?void 0:b.lyrics)||""},Rr={MPLgPPy9Sjs:Re("Poison Shot By Shot"),BCY7C34diZk:Re("Don't Betray me")||Re("I Never Bled Someone the Way You Do"),"9qx6tz-NyKY":Re("You questioned my motives")||Re("You'd Rather!"),fBBwdLTJMVE:Re("Super Pessimistic! (Experimental remix)"),r6BibuJXzEw:Re("I Practiced being Hurt")||Re("HURT ME"),PZtOJku0f_g:Re("Cluster B Storm"),Szoqqqy0KkU:Re("I Want You Back, But I hate That I Do!"),vohyDAV8PpI:Re("You Played The Wounded Bird"),BcCaAPSLgVg:Re("You'd Rather!"),XpnTmJ6WCmw:Re("pessimistic girl")||Re("Pessimistic Bias"),"HV2GfTi2-mI":Re("We MUSK go to MARS!"),osGORpTfs0I:Re("DON'T MISS IT"),Dgvk00dBQ1Y:Re("The Doubts Between the Seams"),"9lmCALdX0f8":Re("Bad Brina knows how to Win"),sx_f6KVmWmQ:Re("Saints and Schemes"),t8zv9_NNdps:Re("cages that I couldn't even see(RAP}")||Re("Poison Shot By Shot")};function Fr(r){if(!r)return"";if("lyrics"in r&&r.lyrics&&r.lyrics.trim().length>30)return r.lyrics;if(r.id&&Rr[r.id])return Rr[r.id];const b=(r.title||"").toLowerCase().replace(/[^a-z0-9]/g,"");if(b){const I=rt.find(d=>{const z=d.title.toLowerCase().replace(/[^a-z0-9]/g,"");return z.includes(b)||b.includes(z)});if(I&&I.lyrics)return I.lyrics}return"featuredLyrics"in r&&r.featuredLyrics?r.featuredLyrics:""}const Dy=[{id:"MPLgPPy9Sjs",title:"Poison Shot By Shot",artist:"Dom-I-NATE",duration:"6:28",durationSeconds:388,index:1,thumbnail:"https://i.ytimg.com/vi/MPLgPPy9Sjs/hqdefault.jpg",youtubeUrl:"https://youtu.be/MPLgPPy9Sjs?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Rock","Epic","Anthem"],description:"The featured single. A haunting build-up tracing toxic cycles, betrayal, and relentless raw guitars.",featuredLyrics:"You came in sweet / All soft at the seams / Said you saw my wreck / And you knew how to redeem..."},{id:"BCY7C34diZk",title:"I Begged You Don't Betray Me",artist:"DomInNATEly",duration:"4:55",durationSeconds:295,index:2,thumbnail:"https://i.ytimg.com/vi/BCY7C34diZk/hqdefault.jpg",youtubeUrl:"https://youtu.be/BCY7C34diZk?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Alt Rock","Vulnerable","Emotional Build","Guitar Driven"],description:"An impassioned, desperate alt-rock plea confronting broken trust and the agony of repeated betrayal.",featuredLyrics:"I pleaded for honesty when the ground started shaking beneath us."},{id:"9qx6tz-NyKY",title:"You Questioned My Motives",artist:"DomInNATEly",duration:"4:13",durationSeconds:253,index:3,thumbnail:"https://i.ytimg.com/vi/9qx6tz-NyKY/hqdefault.jpg",youtubeUrl:"https://youtu.be/9qx6tz-NyKY?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"alt",tags:["Introspective","Raw Emotion","Alt Rock","Distortion"],description:"A hard-hitting confrontation challenging unfair accusations and the pain of having pure intentions doubted.",featuredLyrics:"You twisted every gesture into an interrogation under cold fluorescent lights."},{id:"fBBwdLTJMVE",title:"Super Pessimistic (Guitar Riffs Remix)",artist:"DomInNATEly",duration:"4:01",durationSeconds:241,index:4,thumbnail:"https://i.ytimg.com/vi/fBBwdLTJMVE/hqdefault.jpg",youtubeUrl:"https://youtu.be/fBBwdLTJMVE?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"remix",tags:["Remix","Alt Rock","Heavy Riffs"],description:"High-energy reworked version loaded with heavy electric overdrive and driving rhythmic hooks.",featuredLyrics:"Heavy riffs collide with sharp emotional dissonance in this amplified anthem."},{id:"r6BibuJXzEw",title:"I Practiced Being Hurt",artist:"DomInNATEly",duration:"4:02",durationSeconds:242,index:5,thumbnail:"https://i.ytimg.com/vi/r6BibuJXzEw/hqdefault.jpg",youtubeUrl:"https://youtu.be/r6BibuJXzEw?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Melodic Rock","Vulnerability","Heartbreak","Anthem"],description:"A poignant reflection on emotional armor and conditioning oneself to endure heartache.",featuredLyrics:"Bracing for impact until feeling numb felt like second nature."},{id:"PZtOJku0f_g",title:"Cluster B Storm",artist:"DomInNATEly",duration:"5:04",durationSeconds:304,index:6,thumbnail:"https://i.ytimg.com/vi/PZtOJku0f_g/hqdefault.jpg",youtubeUrl:"https://youtu.be/PZtOJku0f_g?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Psychological Rock","Intense","Dark Rock","Epic"],description:"An intense, dark rock odyssey exploring turbulent psychological dynamics and chaotic relational storms.",featuredLyrics:"Caught in the eye of a psychological whirlwind with no shelter in sight."},{id:"Szoqqqy0KkU",title:"I Want You Back, But I Hate that I Do",artist:"DomInNATEly",duration:"3:19",durationSeconds:199,index:7,thumbnail:"https://i.ytimg.com/vi/Szoqqqy0KkU/hqdefault.jpg",youtubeUrl:"https://youtu.be/Szoqqqy0KkU?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Alt Rock","Breakup Anthem","Raw Guitars","Single"],description:"A fiery, conflicted rock single confronting the paradox of missing an abusive ex while hating the manipulation and emotional toll.",featuredLyrics:"I want you back (but I hate that I do) / Every road I take loops back to you / You wore kindness like a loaded trick / And you loved it best when I came back..."},{id:"vohyDAV8PpI",title:"You Played the Wounded Bird",artist:"DomInNATEly",duration:"3:33",durationSeconds:213,index:8,thumbnail:"https://i.ytimg.com/vi/vohyDAV8PpI/hqdefault.jpg",youtubeUrl:"https://youtu.be/vohyDAV8PpI?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Hard Rock","Dark","Story"],description:"Intense alt-rock confession exploring emotional manipulation and playing the martyr in a relationship.",featuredLyrics:"I played the victim in a horrible place / I knew you'd come running to be my shield..."},{id:"BcCaAPSLgVg",title:"You'd Rather",artist:"DomInNATEly",duration:"3:53",durationSeconds:233,index:9,thumbnail:"https://i.ytimg.com/vi/BcCaAPSLgVg/hqdefault.jpg",youtubeUrl:"https://youtu.be/BcCaAPSLgVg?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"alt",tags:["Alt Rock","Direct","Heavy"],description:"Punchy vocal deliveries confronting choices, avoidance, and unspoken boundaries.",featuredLyrics:"When the line is drawn, would you rather hide or face the fire head on?"},{id:"XpnTmJ6WCmw",title:"Pessimistic Girl",artist:"DomInNATEly",duration:"3:49",durationSeconds:229,index:10,thumbnail:"https://i.ytimg.com/vi/XpnTmJ6WCmw/hqdefault.jpg",youtubeUrl:"https://youtu.be/XpnTmJ6WCmw?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"alt",tags:["Alt Rock","Indie Rock","Cynical Romance","Rhythm"],description:"Driving melodic rock examining cynical defenses, emotional barriers, and self-fulfilling doubt.",featuredLyrics:"Expecting rain before the clouds even gather in the sky."},{id:"HV2GfTi2-mI",title:"We MUSK go to MARS!",artist:"DomInNATEly",duration:"4:47",durationSeconds:287,index:11,thumbnail:"https://i.ytimg.com/vi/HV2GfTi2-mI/hqdefault.jpg",youtubeUrl:"https://youtu.be/HV2GfTi2-mI?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"anthem",tags:["Sci-Fi Rock","One-Man Band","Concept"],description:"A satirical sci-fi rock odyssey about interstellar colonization, billionaires, and leaving Earth behind.",featuredLyrics:"Countdowns, booster engines, and eccentric dreams of red dust horizons."},{id:"osGORpTfs0I",title:"Take the Chance",artist:"Dom-I-NATE",duration:"4:10",durationSeconds:250,index:12,thumbnail:"https://i.ytimg.com/vi/osGORpTfs0I/hqdefault.jpg",youtubeUrl:"https://youtu.be/osGORpTfs0I?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Uplifting Rock","Driving Beat","Guitar Solo","Hope"],description:"Inspiring rock anthem urging listeners to take bold leaps into the unknown despite lingering fear.",featuredLyrics:"Step to the ledge and feel the rush when hesitation fades away."},{id:"Dgvk00dBQ1Y",title:"Bittersweet Echos",artist:"Dom-I-Nate",duration:"3:17",durationSeconds:197,index:13,thumbnail:"https://i.ytimg.com/vi/Dgvk00dBQ1Y/hqdefault.jpg",youtubeUrl:"https://youtu.be/Dgvk00dBQ1Y?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Melodic Rock","Echo","Vocal"],description:"Atmospheric guitars weaving nostalgic echoes of past relationships that refuse to fade.",featuredLyrics:"Reverberating notes of what could have been linger in the quiet aftermath."},{id:"9lmCALdX0f8",title:"Crazy Can be So much Fun",artist:"Dom-I-NATE",duration:"2:44",durationSeconds:164,index:14,thumbnail:"https://i.ytimg.com/vi/9lmCALdX0f8/hqdefault.jpg",youtubeUrl:"https://youtu.be/9lmCALdX0f8?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Wild","Garage Rock","Fun"],description:"A chaotic, cheerful garage rock romp celebrating the unpredictable and eccentric sides of life.",featuredLyrics:"Toss out the rulebook and turn the distortion up to eleven."},{id:"sx_f6KVmWmQ",title:"Her Leather Facade",artist:'Nate "Dom-I-Nater"',duration:"3:17",durationSeconds:197,index:15,thumbnail:"https://i.ytimg.com/vi/sx_f6KVmWmQ/hqdefault.jpg",youtubeUrl:"https://youtu.be/sx_f6KVmWmQ?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Hard Rock","Tough Exterior","Vulnerable"],description:"Heavy riff-laden tribute to guarded hearts, tough leather jackets, and hidden vulnerabilities.",featuredLyrics:"Behind the studs and zipper collar lies a fortress waiting to crumble."},{id:"t8zv9_NNdps",title:"You Jinxed Us",artist:"Dom-I-NATE",duration:"2:51",durationSeconds:171,index:16,thumbnail:"https://i.ytimg.com/vi/t8zv9_NNdps/hqdefault.jpg",youtubeUrl:"https://youtu.be/t8zv9_NNdps?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"duet",tags:["Duet Style","Heartbreak","Superstition"],description:"Soulful alt-rock ballad on fragile romance, superstitions, and premature declarations.",featuredLyrics:"You said forever too loud and shattered the spell before we even started."}],pt=Dy.map(r=>({...r,lyrics:Rr[r.id]||r.featuredLyrics||""})),qy="https://youtube.com/playlist?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH&si=m-pggLDCyI2ogv_c",Ry="https://www.youtube.com/@DomInNATEly",ya={name:"DomInNATEly's Music",description:"Official YouTube audio and video catalogue by DomInNATEly featuring heavy guitar riffs, melodic ballads, and conceptual alt-rock.",channel:"DomInNATEly",channelUrl:"https://www.youtube.com/@DomInNATEly",playlistUrl:"https://youtube.com/playlist?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH&si=m-pggLDCyI2ogv_c",totalDurationFormatted:"1 hr 4 min",cover:"https://i.ytimg.com/vi/MPLgPPy9Sjs/hqdefault.jpg"},em=r=>({id:r.id,title:r.title,artist:r.artist,duration:r.durationFormatted,durationSeconds:r.duration,index:r.index,thumbnail:r.image,youtubeUrl:r.sunoUrl,category:"alt",tags:r.tags,description:`Suno AI Track • @${r.handle}`,featuredLyrics:r.lyrics,lyrics:r.lyrics,audioUrl:r.videoUrl||r.audioUrl,videoUrl:r.videoUrl,embedUrl:r.embedUrl,sunoUrl:r.sunoUrl,isSuno:!0});/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(b,I,d)=>d?d.toUpperCase():I.toLowerCase()),tm=r=>{const b=Gy(r);return b.charAt(0).toUpperCase()+b.slice(1)},nm=(...r)=>r.filter((b,I,d)=>!!b&&b.trim()!==""&&d.indexOf(b)===I).join(" ").trim(),Fy=r=>{for(const b in r)if(b.startsWith("aria-")||b==="role"||b==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=O.forwardRef(({color:r="currentColor",size:b=24,strokeWidth:I=2,absoluteStrokeWidth:d,className:z="",children:M,iconNode:v,...C},j)=>O.createElement("svg",{ref:j,...Wy,width:b,height:b,stroke:r,strokeWidth:d?Number(I)*24/Number(b):I,className:nm("lucide",z),...!M&&!Fy(C)&&{"aria-hidden":"true"},...C},[...v.map(([p,G])=>O.createElement(p,G)),...Array.isArray(M)?M:[M]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=(r,b)=>{const I=O.forwardRef(({className:d,...z},M)=>O.createElement(Xy,{ref:M,iconNode:b,className:nm(`lucide-${Ly(tm(r))}`,`lucide-${r}`,d),...z}));return I.displayName=tm(r),I};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Zy=pe("bell",Qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Pl=pe("check",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],lm=pe("clock",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],eo=pe("copy",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],om=pe("disc-3",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Pn=pe("disc",eg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ze=pe("external-link",tg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ga=pe("file-text",ag);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],im=pe("flame",ng);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],sm=pe("heart",lg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],rm=pe("layout-grid",og);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],am=pe("list-music",ig);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],um=pe("list",sg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],Wr=pe("music-2",rg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Lr=pe("music",ug);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],hn=pe("pause",cg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ot=pe("play",dg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],mg=pe("repeat",hg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],cm=pe("search",fg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],gg=pe("send",yg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],St=pe("share-2",pg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],ki=pe("shuffle",bg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],vg=pe("skip-back",wg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],kg=pe("skip-forward",xg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ga=pe("sparkles",Ig);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],to=pe("tv",jg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Ag=pe("video",Ng);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Tg=pe("volume-2",Sg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Bg=pe("volume-x",Eg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fa=pe("x",Yg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Ii=pe("youtube",Mg),Cg=({isDarkMode:r,onToggleDarkMode:b,trackCount:I,onQuickShareAll:d})=>i.jsx("header",{id:"main-header",className:`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${r?"bg-black/40 border-white/10 text-white":"bg-white/80 border-neutral-200 text-neutral-900"}`,children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[i.jsxs("div",{className:"flex flex-col",children:[i.jsxs("h1",{className:"text-2xl sm:text-3xl md:text-4xl tracking-tighter leading-none select-none",children:[i.jsx("span",{className:"font-black",children:"D"}),i.jsx("span",{className:"font-light opacity-80",children:"o"}),i.jsx("span",{className:"font-medium opacity-90",children:"m"}),i.jsx("span",{className:"font-black text-cyan-400",children:"I"}),i.jsx("span",{className:"font-light opacity-80",children:"n"}),i.jsx("span",{className:"font-black bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent",children:"NATE"}),i.jsx("span",{className:"font-light opacity-80",children:"l"}),i.jsx("span",{className:"font-medium opacity-90",children:"y"})]}),i.jsx("p",{className:"text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold mt-0.5",children:"Official Gallery"})]}),i.jsxs("span",{className:`hidden md:inline-flex px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${r?"bg-white/5 border-white/10 text-cyan-300":"bg-cyan-50 border-cyan-200 text-cyan-700"}`,children:[I," Tracks"]})]}),i.jsxs("div",{className:"flex items-center gap-3 sm:gap-6",children:[i.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[i.jsxs("a",{id:"youtube-channel-link",href:Ry,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Visit DomInNATEly on YouTube",children:[i.jsx(om,{className:"w-3.5 h-3.5 text-cyan-400 animate-spin",style:{animationDuration:"6s"}}),i.jsx("span",{className:"hidden lg:inline",children:"YT Channel"}),i.jsx(Ze,{className:"w-3 h-3 opacity-60"})]}),i.jsxs("a",{id:"youtube-playlist-link",href:qy,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Open DomInNATEly official playlists on YouTube",children:[i.jsx(Wr,{className:"w-3.5 h-3.5 text-red-500"}),i.jsx("span",{className:"hidden lg:inline",children:"YT Playlists"}),i.jsx(Ze,{className:"w-3 h-3 opacity-60"})]}),i.jsxs("a",{id:"tiktok-header-link",href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-pink-400 hover:border-pink-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-pink-600 hover:bg-neutral-200"}`,title:"Follow @domInNATEly on TikTok",children:[i.jsx("span",{className:"text-xs",children:"🎵"}),i.jsx("span",{className:"hidden lg:inline",children:"TikTok"}),i.jsx(Ze,{className:"w-3 h-3 opacity-60"})]}),i.jsxs("a",{id:"suno-playlist-header-link",href:ut.url,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Open official DomInNATEly playlist on Suno",children:[i.jsx(ga,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden lg:inline",children:"Suno Playlist"}),i.jsx(Ze,{className:"w-3 h-3 opacity-60"})]})]}),d&&i.jsxs("button",{id:"share-gallery-btn",onClick:d,className:`p-2 sm:px-3 sm:py-1.5 rounded-full border text-xs font-semibold tracking-wider inline-flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600"}`,title:"Share Gallery","aria-label":"Share DomInNATEly Music Gallery",children:[i.jsx(St,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden md:inline uppercase text-[11px]",children:"Share"})]}),i.jsxs("div",{className:`flex items-center gap-2.5 sm:gap-3 border-l pl-3 sm:pl-5 ${r?"border-white/10":"border-neutral-200"}`,children:[i.jsx("button",{id:"dark-mode-toggle",onClick:b,className:`w-10 h-6 rounded-full relative flex items-center px-0.5 transition-colors focus:outline-hidden ${r?"bg-cyan-500":"bg-neutral-300"}`,title:r?"Switch to Light Mode":"Switch to Dark Mode","aria-label":r?"Switch to Light Mode":"Switch to Dark Mode",children:i.jsx("div",{className:`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${r?"translate-x-4":"translate-x-0"}`})}),i.jsx("span",{className:`text-[10px] uppercase font-bold tracking-wider hidden sm:inline ${r?"text-white/80":"text-neutral-700"}`,children:r?"Dark Mode":"Light Mode"})]})]})]})}),zg=({track:r,isPlaying:b,isCurrentTrack:I,onPlay:d,onOpenShare:z,onOpenDetails:M,onOpenLyrics:v,isDarkMode:C})=>i.jsxs("div",{id:`track-card-${r.id}`,className:`group rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden relative ${I?C?"bg-white/10 border-cyan-400/80 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400/40":"bg-cyan-50/40 border-cyan-500 shadow-md ring-1 ring-cyan-400/30":C?"bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15 shadow-sm hover:shadow-md":"bg-white hover:bg-neutral-50/90 border-neutral-200 hover:border-neutral-300 shadow-xs hover:shadow-sm"}`,children:[i.jsxs("div",{className:"relative aspect-video w-full overflow-hidden bg-black",children:[i.jsx("img",{src:r.thumbnail,alt:r.title,loading:"lazy",referrerPolicy:"no-referrer",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"}),i.jsxs("div",{className:"absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white shadow-md",children:r.index.toString().padStart(2,"0")}),i.jsxs("span",{className:"px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-black/80 backdrop-blur-xs text-cyan-400 border border-white/10 flex items-center gap-1.5 shadow-xs",children:[i.jsx(lm,{className:"w-3 h-3 text-cyan-400"}),r.duration]})]}),i.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:i.jsx("button",{id:`play-btn-${r.id}`,onClick:j=>{j.stopPropagation(),d(r)},className:`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform active:scale-95 ${I&&b?"bg-cyan-400 text-black scale-100 ring-4 ring-cyan-400/40 font-bold":"bg-white/90 hover:bg-white text-black backdrop-blur-sm group-hover:scale-110 shadow-lg"}`,"aria-label":I&&b?`Pause ${r.title}`:`Play ${r.title}`,children:I&&b?i.jsx(hn,{className:"w-5 h-5 fill-current"}):i.jsx(Ot,{className:"w-5 h-5 fill-current translate-x-0.5"})})}),I&&b&&i.jsxs("div",{className:"absolute bottom-2.5 left-2.5 flex items-end gap-1 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs border border-cyan-400/40",children:[i.jsx("span",{className:"w-1 bg-cyan-400 rounded-full animate-eq-1"}),i.jsx("span",{className:"w-1 bg-cyan-300 rounded-full animate-eq-2"}),i.jsx("span",{className:"w-1 bg-purple-400 rounded-full animate-eq-3"}),i.jsx("span",{className:"w-1 bg-cyan-400 rounded-full animate-eq-4"}),i.jsx("span",{className:"text-[10px] font-mono text-cyan-300 ml-1 font-bold uppercase tracking-wider",children:"Playing"})]})]}),i.jsxs("div",{className:"p-3.5 sm:p-4 flex-1 flex flex-col justify-between",children:[i.jsx("div",{children:i.jsx("h3",{onClick:()=>d(r),className:`text-sm sm:text-base font-bold line-clamp-1 cursor-pointer transition-colors ${I?C?"text-cyan-400":"text-cyan-700":C?"text-white hover:text-cyan-400":"text-neutral-900 hover:text-cyan-700"}`,title:r.title,children:r.title})}),i.jsxs("div",{className:`mt-4 pt-3.5 border-t flex items-center justify-between gap-2 ${C?"border-white/10":"border-neutral-200"}`,children:[i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("button",{id:`card-play-toggle-${r.id}`,onClick:()=>d(r),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${I&&b?"bg-cyan-500 text-black font-bold":C?"bg-white/5 hover:bg-white/10 text-white border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-800"}`,children:I&&b?i.jsxs(i.Fragment,{children:[i.jsx(hn,{className:"w-3.5 h-3.5 fill-current"}),i.jsx("span",{children:"Pause"})]}):i.jsxs(i.Fragment,{children:[i.jsx(Ot,{className:"w-3.5 h-3.5 fill-current"}),i.jsx("span",{children:"Play"})]})}),v&&i.jsxs("button",{id:`card-lyrics-btn-${r.id}`,onClick:j=>{j.stopPropagation(),v(r)},className:`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${C?"bg-white/5 hover:bg-white/10 text-white/80 hover:text-cyan-400 border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-700"}`,title:"View Full Lyrics","aria-label":`View lyrics for ${r.title}`,children:[i.jsx(Ga,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden sm:inline",children:"Lyrics"})]})]}),i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx("a",{id:`quick-x-share-${r.id}`,href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Listening to "${r.title}" by DomInNATEly 🔥`)}&url=${encodeURIComponent(r.youtubeUrl)}`,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${C?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-black hover:bg-neutral-200"}`,title:"Share on X","aria-label":`Share ${r.title} on X`,children:i.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),i.jsx("a",{id:`quick-fb-share-${r.id}`,href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(r.youtubeUrl)}`,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${C?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-[#1877F2] hover:bg-neutral-200"}`,title:"Share on Facebook","aria-label":`Share ${r.title} on Facebook`,children:i.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),i.jsx("a",{id:`card-youtube-link-${r.id}`,href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${C?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-[#FF0000] hover:bg-neutral-200"}`,title:"Watch Video on YouTube","aria-label":`Watch ${r.title} on YouTube`,children:i.jsx(Ii,{className:"w-3.5 h-3.5 fill-current"})}),i.jsx("button",{id:`open-share-modal-${r.id}`,onClick:()=>z(r),className:`p-1.5 rounded-md transition-colors ${C?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200"}`,title:"More Share Options (WhatsApp, Reddit, Copy Link, etc.)","aria-label":`Share ${r.title}`,children:i.jsx(St,{className:"w-3.5 h-3.5"})})]})]})]})]}),Ug=({searchQuery:r,onSearchChange:b,sortField:I,onSortChange:d,selectedCategory:z,onCategoryChange:M,totalResults:v,totalTracks:C=16,isDarkMode:j})=>{const p=[{id:"all",label:"All Tracks"},{id:"rock",label:"Rock & Riffs"},{id:"remix",label:"Remixes"},{id:"acoustic",label:"Acoustic / Live"},{id:"duet",label:"Duets"},{id:"alt",label:"Alt / Concept"}],G=C.toString().padStart(2,"0"),U=[{id:"playlist",label:`Playlist Order (#01 - #${G})`},{id:"newest",label:`Reverse Order (#${G} - #01)`},{id:"duration-desc",label:"Duration (Longest First)"},{id:"duration-asc",label:"Duration (Shortest First)"},{id:"title-asc",label:"Title (A → Z)"},{id:"title-desc",label:"Title (Z → A)"}],F=r.trim()!==""||z!=="all"||I!=="playlist";return i.jsxs("div",{id:"sorting-filter-panel",className:`rounded-2xl border p-4 sm:p-5 mb-6 backdrop-blur-md transition-all ${j?"bg-white/5 border-white/10 shadow-xl shadow-black/40":"bg-white/90 border-neutral-200 shadow-sm"}`,children:[i.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-3.5",children:[i.jsxs("div",{className:"relative flex-1",children:[i.jsx(cm,{className:`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${j?"text-white/40":"text-neutral-400"}`}),i.jsx("input",{id:"track-search-input",type:"text",placeholder:"Search tracks, lyrics, or styles...",value:r,onChange:te=>b(te.target.value),className:`w-full pl-9 pr-9 py-2 rounded-xl text-xs sm:text-sm border focus:outline-hidden transition-all ${j?"bg-black/50 border-white/10 text-white placeholder-white/40 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/40":"bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600/30"}`}),r&&i.jsx("button",{onClick:()=>b(""),className:`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md ${j?"text-white/40 hover:text-white":"text-neutral-500 hover:text-neutral-900"}`,title:"Clear search",children:i.jsx(Fa,{className:"w-3.5 h-3.5"})})]}),i.jsxs("div",{className:`flex items-center px-3 py-1.5 rounded-full border transition-all ${j?"bg-white/5 border-white/10 text-white":"bg-neutral-100 border-neutral-300 text-neutral-800"}`,children:[i.jsx("span",{className:`text-[10px] sm:text-xs font-bold mr-2 uppercase tracking-wider ${j?"text-white/50":"text-neutral-500"}`,children:"SORT BY:"}),i.jsx("select",{id:"track-sort-select",value:I,onChange:te=>d(te.target.value),className:`bg-transparent text-xs outline-hidden cursor-pointer font-bold uppercase tracking-wider ${j?"text-cyan-400":"text-cyan-700"}`,children:U.map(te=>i.jsx("option",{value:te.id,className:j?"bg-[#0a0a0a] text-white":"bg-white text-neutral-900",children:te.label},te.id))})]})]}),i.jsxs("div",{className:`mt-4 pt-3.5 border-t flex flex-wrap items-center justify-between gap-2.5 ${j?"border-white/10":"border-neutral-200"}`,children:[i.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar",children:p.map(te=>{const P=z===te.id;return i.jsx("button",{id:`filter-pill-${te.id}`,onClick:()=>M(te.id),className:`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${P?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":j?"bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20":"bg-neutral-100 border border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400"}`,children:te.label},te.id)})}),i.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono",children:[i.jsxs("span",{className:j?"text-cyan-400 font-bold":"text-cyan-700 font-bold",children:[v," ",v===1?"TRACK":"TRACKS"]}),F&&i.jsx("button",{id:"reset-filters-btn",onClick:()=>{b(""),M("all"),d("playlist")},className:`underline text-[11px] uppercase tracking-wider ml-2 transition-colors ${j?"text-white/50 hover:text-white":"text-neutral-500 hover:text-black"}`,children:"Reset"})]})]})]})},Vg=({currentTrack:r,playlist:b,onTrackChange:I,onOpenShare:d,onOpenLyrics:z,isDarkMode:M,isPlaying:v,setIsPlaying:C,allPlaylists:j,onSwitchPlaylist:p,currentPlaylistType:G="youtube",disableInternalPlayback:U=!1,onVolumeChange:F})=>{const[te,P]=O.useState(0),[ae,Ne]=O.useState(0),[Be,Ve]=O.useState(80),[re,Ae]=O.useState(!1),[Ye,_e]=O.useState(!1),[Z,Oe]=O.useState(!1),[Le,K]=O.useState(!1),[le,Q]=O.useState(!1),[Me,Pe]=O.useState("current"),He=O.useMemo(()=>Me==="youtube"&&(j!=null&&j.youtube)?j.youtube:Me==="suno"&&(j!=null&&j.suno)?j.suno:b,[Me,j,b]),[N,H]=O.useState(!1),S=O.useRef(null),R=O.useRef(null),J=O.useRef(null),h=O.useRef(null),T=O.useRef(null),D=O.useRef(null),L=O.useRef(!1),x=O.useRef(null),V="youtube-player-container",q=!!(r!=null&&r.audioUrl||r!=null&&r.isSuno),Ce=_=>{if(isNaN(_)||_<0)return"0:00";const Y=Math.floor(_/60),ne=Math.floor(_%60);return`${Y}:${ne<10?"0":""}${ne}`},Ie=O.useCallback(()=>{if(!r||b.length===0)return;if(Ye){const ne=Math.floor(Math.random()*b.length);I(b[ne]);return}const Y=(b.findIndex(ne=>ne.id===r.id)+1)%b.length;I(b[Y])},[r,b,Ye,I]);O.useCallback(()=>{if(!r||b.length===0)return;if(te>4){if(q&&R.current){R.current.currentTime=0,P(0);return}if(S.current&&typeof S.current.seekTo=="function")try{S.current.seekTo(0,!0),P(0);return}catch{}}const Y=(b.findIndex(ne=>ne.id===r.id)-1+b.length)%b.length;I(b[Y])},[r,b,te,q,I]),O.useEffect(()=>{if(r){if(U){if(R.current&&R.current.pause(),J.current&&J.current.pause(),S.current&&typeof S.current.pauseVideo=="function")try{S.current.pauseVideo()}catch{}return}if(q){if(S.current&&typeof S.current.pauseVideo=="function")try{S.current.pauseVideo()}catch{}const _=r.audioUrl||r.videoUrl||"";R.current&&(R.current.src=_?encodeURI(_):"",R.current.volume=re?0:(Be||80)/100,R.current.muted=re,R.current.load(),P(0),Ne(r.durationSeconds||180),v&&R.current.play().catch(Y=>{console.warn("Audio auto-play notice:",Y)})),J.current&&(J.current.volume=re?0:(Be||80)/100,J.current.muted=re,v&&J.current.play().catch(()=>{}));return}R.current&&R.current.pause(),J.current&&J.current.pause()}},[r==null?void 0:r.id,q]),O.useEffect(()=>{var _;if(!window.YT&&!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){const ne=document.createElement("script");ne.src="https://www.youtube.com/iframe_api";const ot=document.getElementsByTagName("script")[0];(_=ot==null?void 0:ot.parentNode)==null||_.insertBefore(ne,ot)}},[]),O.useEffect(()=>{if(!r||q||U)return;if(S.current&&L.current){if(typeof S.current.loadVideoById=="function")try{v?S.current.loadVideoById(r.id):typeof S.current.cueVideoById=="function"?S.current.cueVideoById(r.id):S.current.loadVideoById(r.id)}catch(ot){console.warn("Error loading video by ID:",ot)}return}x.current=r.id,T.current&&(clearTimeout(T.current),T.current=null);let _=0;const Y=50,ne=()=>{const ot=D.current||document.getElementById(V);if(!ot){_++<Y&&(T.current=setTimeout(ne,100));return}if(!window.YT||!window.YT.Player){_++<Y&&(T.current=setTimeout(ne,100));return}if(!S.current)try{ot.innerHTML="";const Ht=document.createElement("div");Ht.style.width="100%",Ht.style.height="100%",ot.appendChild(Ht);const Kt=typeof window<"u"&&window.location.origin&&window.location.origin!=="null"?window.location.origin:void 0;S.current=new window.YT.Player(Ht,{height:"100%",width:"100%",videoId:r.id,playerVars:{autoplay:v?1:0,controls:1,modestbranding:1,rel:0,enablejsapi:1,...Kt?{origin:Kt}:{}},events:{onReady:Ge=>{var Dt,ll,lo;if(L.current=!0,typeof((Dt=Ge.target)==null?void 0:Dt.setVolume)=="function")try{Ge.target.setVolume(Be)}catch{}if(x.current&&x.current!==r.id){const ol=x.current;if(x.current=null,typeof((ll=Ge.target)==null?void 0:ll.loadVideoById)=="function")try{Ge.target.loadVideoById(ol),C(!0)}catch{}}else if(v&&typeof((lo=Ge.target)==null?void 0:lo.playVideo)=="function")try{Ge.target.playVideo()}catch{}},onStateChange:Ge=>{if(Ge.data===1){if(C(!0),S.current&&typeof S.current.getDuration=="function")try{const Dt=S.current.getDuration();Dt&&Dt>0&&Ne(Dt)}catch{}}else if(Ge.data===2)C(!1);else if(Ge.data===0)if(Z){if(S.current&&typeof S.current.seekTo=="function")try{S.current.seekTo(0)}catch{}if(S.current&&typeof S.current.playVideo=="function")try{S.current.playVideo()}catch{}}else Ie()},onError:Ge=>{console.warn("YouTube Player event notice:",Ge)}}})}catch(Ht){console.warn("Error instantiating YT.Player:",Ht)}};return ne(),()=>{T.current&&(clearTimeout(T.current),T.current=null)}},[r==null?void 0:r.id,q]),O.useEffect(()=>{if(U){if(R.current&&R.current.pause(),J.current&&J.current.pause(),S.current&&typeof S.current.pauseVideo=="function")try{S.current.pauseVideo()}catch{}return}if(q){if(!R.current)return;v?R.current.play().catch(_=>{console.warn("Audio play notice:",_)}):R.current.pause();return}if(!(!L.current||!S.current))try{v&&typeof S.current.playVideo=="function"?S.current.playVideo():!v&&typeof S.current.pauseVideo=="function"&&S.current.pauseVideo()}catch(_){console.warn("Error syncing playback state:",_)}},[v,q,U]),O.useEffect(()=>(v?h.current=setInterval(()=>{if(q){if(J.current&&!J.current.paused){const _=J.current.currentTime;_!==void 0&&!isNaN(_)&&P(_);const Y=J.current.duration;Y&&!isNaN(Y)&&Y>0&&Ne(Y)}else if(R.current&&!R.current.paused){const _=R.current.currentTime;_!==void 0&&!isNaN(_)&&P(_);const Y=R.current.duration;Y&&!isNaN(Y)&&Y>0&&Ne(Y)}else P(_=>{const Y=ae||(r==null?void 0:r.durationSeconds)||180;return _>=Y?(Ie(),0):_+1});return}if(S.current&&typeof S.current.getCurrentTime=="function")try{const _=S.current.getCurrentTime();if(_!==void 0&&!isNaN(_)&&P(_),typeof S.current.getDuration=="function"){const Y=S.current.getDuration();Y&&Y>0&&Ne(Y)}}catch{}},500):clearInterval(h.current),()=>clearInterval(h.current)),[v,q,ae,r==null?void 0:r.durationSeconds,Ie]),O.useEffect(()=>()=>{if(clearInterval(h.current),S.current&&typeof S.current.destroy=="function")try{S.current.destroy()}catch{}S.current=null,L.current=!1,R.current&&R.current.pause(),J.current&&J.current.pause()},[]);const Qt=O.useCallback(()=>{if(b.length===0)return;if(!r){I(b[0]);return}const _=b.findIndex(ne=>ne.id===r.id),Y=_===-1||_>=b.length-1?0:_+1;I(b[Y])},[r,b,I]),pa=O.useCallback(()=>{if(b.length===0)return;if(!r){I(b[b.length-1]);return}const _=b.findIndex(ne=>ne.id===r.id),Y=_<=0?b.length-1:_-1;I(b[Y])},[r,b,I]),Wa=O.useCallback(()=>{if(!r&&b.length>0){I(b[0]);return}if(U){C(!v);return}if(q){if(!R.current){C(!v);return}v?(R.current.pause(),C(!1)):(R.current.play().catch(_=>{console.warn("Audio play error:",_)}),C(!0));return}if(!S.current||!L.current){C(!v);return}try{v?(typeof S.current.pauseVideo=="function"&&S.current.pauseVideo(),C(!1)):(typeof S.current.playVideo=="function"&&S.current.playVideo(),C(!0))}catch(_){console.warn("Error toggling playback:",_),C(!v)}},[r,b,q,v,C,I]),ao=_=>{const Y=parseFloat(_.target.value);if(P(Y),q){R.current&&(R.current.currentTime=Y),J.current&&(J.current.currentTime=Y);return}if(S.current&&typeof S.current.seekTo=="function")try{S.current.seekTo(Y,!0)}catch(ne){console.warn("Error seeking:",ne)}},Zt=_=>{const Y=parseInt(_.target.value,10);if(Ve(Y),q){R.current&&(R.current.volume=re?0:Y/100),J.current&&(J.current.volume=re?0:Y/100);return}if(S.current&&typeof S.current.setVolume=="function")try{S.current.setVolume(Y),Y===0?(Ae(!0),typeof S.current.mute=="function"&&S.current.mute()):re&&(Ae(!1),typeof S.current.unMute=="function"&&S.current.unMute())}catch(ne){console.warn("Error setting volume:",ne)}},el=()=>{if(q){const _=!re;Ae(_),R.current&&(R.current.muted=_),J.current&&(J.current.muted=_);return}if(S.current)try{re?(typeof S.current.unMute=="function"&&S.current.unMute(),Ae(!1),typeof S.current.setVolume=="function"&&S.current.setVolume(Be||50)):(typeof S.current.mute=="function"&&S.current.mute(),Ae(!0))}catch(_){console.warn("Error toggling mute:",_)}},mn=O.useRef(Wa);mn.current=Wa;const no=O.useRef(Qt);no.current=Qt;const tl=O.useRef(pa);if(tl.current=pa,O.useEffect(()=>{const _=Y=>{if(Y.altKey||Y.ctrlKey||Y.metaKey)return;const ne=Y.target;if(ne){const ot=ne.tagName?ne.tagName.toUpperCase():"",Ht=ne.isContentEditable,Kt=ot==="INPUT",Ge=Kt?ne.type.toLowerCase():"";if(ot==="TEXTAREA"||ot==="SELECT"||Ht||Kt&&!["range","button","checkbox","radio"].includes(Ge)||Kt&&Ge==="range"&&(Y.key==="ArrowLeft"||Y.key==="ArrowRight"||Y.key==="ArrowUp"||Y.key==="ArrowDown"||Y.code==="ArrowLeft"||Y.code==="ArrowRight"||Y.code==="ArrowUp"||Y.code==="ArrowDown"))return}if(Y.key===" "||Y.code==="Space"||Y.key==="Spacebar"){Y.preventDefault(),mn.current();return}if(Y.key==="ArrowLeft"||Y.code==="ArrowLeft"||Y.key==="Left"||Y.key==="ArrowUp"||Y.code==="ArrowUp"||Y.key==="Up"){Y.preventDefault(),tl.current();return}if(Y.key==="ArrowRight"||Y.code==="ArrowRight"||Y.key==="Right"||Y.key==="ArrowDown"||Y.code==="ArrowDown"||Y.key==="Down"){Y.preventDefault(),no.current();return}};return window.addEventListener("keydown",_),()=>{window.removeEventListener("keydown",_)}},[]),!r)return null;const ba=ae||r.durationSeconds||180,al=ba>0?te/ba*100:0,nl=i.jsxs("div",{className:"w-full h-full relative bg-black flex items-center justify-center overflow-hidden rounded-2xl",children:[q?r.videoUrl?i.jsx("video",{ref:J,src:encodeURI(r.videoUrl),controls:!0,autoPlay:!0,playsInline:!0,muted:re,className:"w-full h-full object-contain bg-black",onTimeUpdate:_=>{const Y=_.currentTarget.currentTime;isNaN(Y)||P(Y)},onLoadedMetadata:_=>{const Y=_.currentTarget.duration;Y&&!isNaN(Y)&&Y>0&&Ne(Y)},onEnded:()=>{Z?J.current&&(J.current.currentTime=0,J.current.play().catch(()=>{})):Ie()}}):i.jsx("iframe",{src:encodeURI(r.embedUrl||r.youtubeUrl||""),title:`Suno Embed - ${r.title}`,className:"w-full h-full border-0",allow:"autoplay"}):null,i.jsx("div",{ref:D,id:V,className:`w-full h-full min-h-[220px] ${q?"hidden":""}`})]});return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300 ${Le?"opacity-100 pointer-events-auto visible":"opacity-0 pointer-events-none invisible"}`,onClick:()=>K(!1),children:i.jsxs("div",{className:`relative w-full ${q?"max-w-sm sm:max-w-[380px] aspect-[9/16] max-h-[90vh]":"max-w-3xl aspect-video"} bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col transition-all duration-300`,onClick:_=>_.stopPropagation(),children:[i.jsxs("div",{className:"p-3 bg-neutral-950/90 border-b border-white/10 flex items-center justify-between text-xs",children:[i.jsxs("span",{className:"font-bold text-white truncate max-w-[80%]",children:[r.title," — ",r.artist]}),i.jsx("button",{onClick:()=>K(!1),className:"px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-semibold transition-colors",children:"Close Video Mode"})]}),i.jsx("div",{className:"flex-1 w-full h-full relative",children:nl})]})}),i.jsx("audio",{ref:R,crossOrigin:"anonymous",onError:()=>{R.current&&(r!=null&&r.videoUrl)&&R.current.src!==r.videoUrl&&(R.current.src=r.videoUrl,R.current.load(),v&&R.current.play().catch(()=>{}))},onTimeUpdate:_=>{const Y=_.currentTarget.currentTime;isNaN(Y)||P(Y)},onLoadedMetadata:_=>{const Y=_.currentTarget.duration;Y&&!isNaN(Y)&&Y>0&&Ne(Y)},onEnded:()=>{Z?R.current&&(R.current.currentTime=0,R.current.play().catch(()=>{})):Ie()},preload:"auto"}),i.jsxs("div",{id:"persistent-audio-player",className:`fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-xl shadow-2xl transition-all duration-300 ${M?"bg-black/95 border-white/10 text-white":"bg-white/95 border-neutral-200 text-neutral-900"}`,children:[i.jsxs("div",{className:"relative w-full h-1.5 group cursor-pointer bg-white/10",children:[i.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all pointer-events-none relative",style:{width:`${al}%`},children:i.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg shadow-cyan-500/50 scale-0 group-hover:scale-100 transition-transform"})}),i.jsx("input",{id:"audio-progress-bar",type:"range",min:"0",max:ba,step:"1",value:te,onChange:ao,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer","aria-label":"Seek track"})]}),i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-8 py-3",children:i.jsxs("div",{className:"flex items-center justify-between gap-4 sm:gap-8",children:[i.jsxs("div",{className:"flex items-center gap-3.5 min-w-0 max-w-[40%] sm:max-w-[28%]",children:[i.jsxs("div",{className:"relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-md bg-black",children:[i.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),v&&i.jsx("div",{className:"absolute inset-0 bg-black/50 flex items-center justify-center",children:i.jsxs("div",{className:"flex items-end gap-0.5 h-3",children:[i.jsx("span",{className:"w-0.5 bg-cyan-400 animate-eq-1"}),i.jsx("span",{className:"w-0.5 bg-cyan-300 animate-eq-2"}),i.jsx("span",{className:"w-0.5 bg-purple-400 animate-eq-3"})]})})]}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h4",{className:"text-xs sm:text-sm font-bold truncate leading-tight hover:text-cyan-400 transition-colors",children:r.title}),i.jsxs("p",{className:`text-[11px] sm:text-xs truncate ${M?"text-white/50":"text-neutral-500"}`,children:[r.artist," • ",i.jsxs("span",{className:"font-mono text-cyan-400",children:["#",r.index.toString().padStart(2,"0")]})]})]})]}),i.jsxs("div",{className:"flex flex-col items-center justify-center gap-1.5 flex-1 max-w-md",children:[i.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[i.jsx("button",{id:"player-shuffle-btn",onClick:()=>_e(!Ye),className:`p-1.5 rounded-full transition-colors hidden sm:block ${Ye?"text-cyan-400 font-bold":M?"text-white/40 hover:text-white":"text-neutral-400 hover:text-black"}`,title:Ye?"Shuffle Active":"Enable Shuffle","aria-label":"Shuffle",children:i.jsx(ki,{className:"w-4 h-4"})}),i.jsx("button",{id:"player-prev-btn",onClick:pa,className:`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${M?"text-white hover:text-cyan-400":"text-neutral-700 hover:text-black"}`,title:"Previous Track (←)","aria-label":"Previous Track",children:i.jsx(vg,{className:"w-5 h-5 fill-current"})}),i.jsx("button",{id:"player-play-pause-btn",onClick:Wa,className:"w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black hover:bg-cyan-300 flex items-center justify-center font-bold text-xl shadow-xl hover:scale-105 active:scale-95 transition-all",title:v?"Pause (Space)":"Play (Space)","aria-label":v?"Pause":"Play",children:v?i.jsx(hn,{className:"w-5 h-5 fill-current"}):i.jsx(Ot,{className:"w-5 h-5 fill-current translate-x-0.5"})}),i.jsx("button",{id:"player-next-btn",onClick:Qt,className:`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${M?"text-white hover:text-cyan-400":"text-neutral-700 hover:text-black"}`,title:"Next Track (→)","aria-label":"Next Track",children:i.jsx(kg,{className:"w-5 h-5 fill-current"})}),i.jsx("button",{id:"player-repeat-btn",onClick:()=>Oe(!Z),className:`p-1.5 rounded-full transition-colors hidden sm:block ${Z?"text-cyan-400 font-bold":M?"text-white/40 hover:text-white":"text-neutral-400 hover:text-black"}`,title:Z?"Repeat Active":"Enable Repeat","aria-label":"Repeat",children:i.jsx(mg,{className:"w-4 h-4"})})]}),i.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold",children:[i.jsx("span",{className:"text-cyan-400",children:Ce(te)}),i.jsx("span",{className:"text-white/30",children:"/"}),i.jsx("span",{className:M?"text-white/40":"text-neutral-400",children:Ce(ba)}),i.jsxs("span",{className:"hidden lg:inline-flex items-center gap-1 text-[10px] text-white/40 font-normal ml-2",children:[i.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[9px] font-mono",children:"Space"}),i.jsx("span",{children:"Play"}),i.jsx("span",{className:"text-white/20",children:"•"}),i.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[9px] font-mono",children:"←"}),i.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[9px] font-mono",children:"→"}),i.jsx("span",{children:"Tracks"})]})]})]}),i.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[i.jsxs("div",{className:"hidden md:flex items-center gap-2.5 w-36 lg:w-48",children:[i.jsx("span",{className:`text-[10px] font-bold tracking-wider ${M?"text-white/40":"text-neutral-400"}`,children:"VOL"}),i.jsx("button",{onClick:el,className:`p-1 rounded-md transition-colors ${M?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,"aria-label":re?"Unmute":"Mute",children:re||Be===0?i.jsx(Bg,{className:"w-3.5 h-3.5 text-cyan-400"}):i.jsx(Tg,{className:"w-3.5 h-3.5"})}),i.jsx("div",{className:"flex-1 flex items-center",children:i.jsx("input",{id:"player-volume-slider",type:"range",min:"0",max:"100",value:re?0:Be,onChange:Zt,className:"w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-400","aria-label":"Volume slider"})})]}),i.jsxs("button",{id:"player-queue-modal-btn",onClick:()=>Q(!le),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${le?"bg-cyan-500 border-cyan-400 text-black font-bold shadow-lg shadow-cyan-500/25":M?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Playlist Queue & Up Next","aria-label":"Toggle Playlist Queue",children:[i.jsx(am,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden sm:inline text-[11px] uppercase tracking-wider",children:"Queue"}),i.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-400/20 text-cyan-300 font-mono",children:He.length})]}),i.jsxs("button",{id:"player-video-modal-btn",onClick:()=>K(!Le),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${Le?"bg-cyan-500 border-cyan-400 text-black font-bold":M?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Open Video View","aria-label":"Toggle Video Mode",children:[i.jsx(to,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden lg:inline text-[11px] uppercase tracking-wider",children:"Video"})]}),z&&i.jsxs("button",{id:"player-lyrics-btn",onClick:()=>z(r),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${M?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"View Full Lyrics","aria-label":"View Full Song Lyrics",children:[i.jsx(Ga,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden lg:inline text-[11px] uppercase tracking-wider",children:"Lyrics"})]}),i.jsxs("button",{id:"player-share-current-btn",onClick:()=>d(r),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${M?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black hover:bg-neutral-200"}`,title:"Share Song","aria-label":"Share current song",children:[i.jsx(St,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden sm:inline text-[11px] uppercase tracking-wider",children:"Share"})]})]})]})})]}),le&&i.jsxs("div",{id:"player-queue-drawer",className:`fixed bottom-24 sm:bottom-28 right-2 sm:right-6 w-[calc(100vw-16px)] sm:w-96 md:w-[420px] max-h-[70vh] z-50 rounded-2xl border shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden transition-all ${M?"bg-neutral-950/95 border-white/15 text-white shadow-cyan-950/40":"bg-white/95 border-neutral-200 text-neutral-900 shadow-xl"}`,children:[i.jsxs("div",{className:"p-3.5 sm:p-4 border-b border-white/10 flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(am,{className:"w-4 h-4 text-cyan-400"}),i.jsx("h3",{className:"font-bold text-sm tracking-wide",children:"Playlist Queue"}),i.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold",children:[He.length," Songs"]})]}),i.jsx("button",{onClick:()=>Q(!1),className:`p-1.5 rounded-full hover:bg-white/10 transition-colors ${M?"text-white/60 hover:text-white":"text-neutral-500 hover:text-neutral-900"}`,"aria-label":"Close Queue",children:i.jsx(Fa,{className:"w-4 h-4"})})]}),i.jsxs("div",{className:"p-2 border-b border-white/10 flex items-center gap-1.5 bg-black/20 text-xs",children:[i.jsxs("button",{onClick:()=>Pe("current"),className:`flex-1 py-1.5 px-2 rounded-lg font-semibold text-center transition-all ${Me==="current"?"bg-cyan-500 text-black font-bold shadow-sm":M?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:["Current (",b.length,")"]}),(j==null?void 0:j.youtube)&&i.jsxs("button",{onClick:()=>{Pe("youtube"),p&&p("youtube")},className:`flex-1 py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${Me==="youtube"?"bg-cyan-500 text-black font-bold shadow-sm":M?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:[i.jsx(Pn,{className:"w-3 h-3 text-red-500"}),i.jsxs("span",{children:["YouTube (",j.youtube.length,")"]})]}),(j==null?void 0:j.suno)&&i.jsxs("button",{onClick:()=>{Pe("suno"),p&&p("suno")},className:`flex-1 py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${Me==="suno"?"bg-cyan-500 text-black font-bold shadow-sm":M?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:[i.jsx(ga,{className:"w-3 h-3 text-cyan-400"}),i.jsxs("span",{children:["Suno (",j.suno.length,")"]})]})]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 max-h-[50vh] divide-y divide-white/5",children:He.map((_,Y)=>{const ne=(r==null?void 0:r.id)===_.id;return i.jsxs("div",{onClick:()=>{I(_),C(!0)},className:`p-2 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition-all ${ne?M?"bg-cyan-500/20 border border-cyan-400/40 text-white shadow-sm":"bg-cyan-50 border border-cyan-300 text-cyan-950 font-medium":M?"hover:bg-white/5 text-white/80 hover:text-white":"hover:bg-neutral-100 text-neutral-800"}`,children:[i.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[i.jsx("span",{className:"font-mono text-[10px] opacity-40 w-4 text-center shrink-0",children:ne?i.jsx("span",{className:"text-cyan-400 font-bold",children:"▶"}):(_.index||Y+1).toString().padStart(2,"0")}),i.jsx("div",{className:"w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-neutral-900",children:i.jsx("img",{src:_.thumbnail,alt:_.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"})}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("p",{className:"text-xs font-bold truncate leading-tight",children:_.title}),i.jsx("p",{className:`text-[10px] truncate ${M?"text-white/50":"text-neutral-500"}`,children:_.artist})]})]}),i.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[ne&&v&&i.jsxs("div",{className:"flex items-end gap-0.5 h-2.5",children:[i.jsx("span",{className:"w-0.5 bg-cyan-400 animate-eq-1"}),i.jsx("span",{className:"w-0.5 bg-cyan-300 animate-eq-2"}),i.jsx("span",{className:"w-0.5 bg-purple-400 animate-eq-3"})]}),i.jsx("span",{className:"font-mono text-[10px] opacity-60",children:_.duration})]})]},`${_.id}-${Y}`)})})]})]})},_g=({track:r,isOpen:b,onClose:I,isDarkMode:d})=>{const[z,M]=O.useState(!1);if(!b||!r)return null;const v=typeof window<"u"?window.location.href:"",C=r.youtubeUrl||v,j=`Check out "${r.title}" by DomInNATEly! 🎸🔥`,p=async()=>{try{navigator.clipboard&&(await navigator.clipboard.writeText(C),M(!0),setTimeout(()=>M(!1),2500))}catch{const ae=document.createElement("textarea");ae.value=C,document.body.appendChild(ae),ae.select(),document.execCommand("copy"),document.body.removeChild(ae),M(!0),setTimeout(()=>M(!1),2500)}},G=async()=>{if(navigator.share)try{await navigator.share({title:`${r.title} - DomInNATEly`,text:j,url:C})}catch{}},U=encodeURIComponent(C),F=encodeURIComponent(`${j} ${C}`),te=encodeURIComponent(`${r.title} - DomInNATEly`),P=[{name:"X (Twitter)",url:`https://twitter.com/intent/tweet?text=${F}`,color:"bg-black text-white hover:bg-neutral-800 border-neutral-700",icon:i.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})},{name:"Facebook",url:`https://www.facebook.com/sharer/sharer.php?u=${U}`,color:"bg-[#1877F2] text-white hover:bg-[#166fe5] border-transparent",icon:i.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})},{name:"WhatsApp",url:`https://api.whatsapp.com/send?text=${F}`,color:"bg-[#25D366] text-white hover:bg-[#20ba59] border-transparent",icon:i.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"})})},{name:"Reddit",url:`https://reddit.com/submit?url=${U}&title=${te}`,color:"bg-[#FF4500] text-white hover:bg-[#e03d00] border-transparent",icon:i.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"})})},{name:"Telegram",url:`https://t.me/share/url?url=${U}&text=${F}`,color:"bg-[#229ED9] text-white hover:bg-[#1f8ec4] border-transparent",icon:i.jsx(gg,{className:"w-4 h-4 fill-current"})}];return i.jsx("div",{id:"share-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity",onClick:I,children:i.jsxs("div",{id:"share-modal-container",className:`w-full max-w-md rounded-2xl border shadow-2xl p-6 relative transition-all ${d?"bg-[#0a0a0a] border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:ae=>ae.stopPropagation(),children:[i.jsx("button",{id:"close-share-modal",onClick:I,className:`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${d?"text-white/40 hover:text-white hover:bg-white/10":"text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"}`,"aria-label":"Close modal",children:i.jsx(Fa,{className:"w-5 h-5"})}),i.jsxs("div",{className:"flex items-start gap-3.5 mb-5",children:[i.jsx("div",{className:"relative w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-black shadow-md",children:i.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"})}),i.jsxs("div",{className:"min-w-0 flex-1 pr-6",children:[i.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-cyan-400 font-bold uppercase tracking-wider mb-0.5",children:[i.jsx(St,{className:"w-3.5 h-3.5"}),"Share Track"]}),i.jsx("h3",{className:"font-bold text-base leading-snug truncate",children:r.title}),i.jsxs("p",{className:`text-xs ${d?"text-white/50":"text-neutral-500"}`,children:["by ",i.jsx("span",{className:"font-medium text-cyan-400",children:r.artist})," • ",r.duration]})]})]}),i.jsxs("div",{className:"mb-5",children:[i.jsx("label",{className:`block text-xs font-bold uppercase tracking-wider mb-1.5 ${d?"text-white/50":"text-neutral-600"}`,children:"Track Link"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("input",{id:"share-link-input",type:"text",readOnly:!0,value:C,className:`flex-1 text-xs px-3 py-2.5 rounded-xl border font-mono truncate focus:outline-hidden ${d?"bg-black/60 border-white/10 text-cyan-300":"bg-neutral-50 border-neutral-300 text-neutral-800"}`}),i.jsx("button",{id:"copy-track-link-btn",onClick:p,className:`px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shrink-0 ${z?"bg-emerald-500 text-black":"bg-cyan-500 hover:bg-cyan-400 text-black shadow-md shadow-cyan-500/20"}`,children:z?i.jsxs(i.Fragment,{children:[i.jsx(Pl,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Copied"})]}):i.jsxs(i.Fragment,{children:[i.jsx(eo,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Copy"})]})})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-xs font-bold uppercase tracking-wider mb-2.5 ${d?"text-white/50":"text-neutral-600"}`,children:"Share on Social Networks"}),i.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5",children:[P.map(ae=>i.jsxs("a",{href:ae.url,target:"_blank",rel:"noopener noreferrer",className:`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border shadow-xs transition-transform active:scale-95 ${ae.color}`,children:[ae.icon,i.jsx("span",{children:ae.name})]},ae.name)),i.jsxs("a",{href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FF0000] text-white hover:bg-[#d90000] shadow-xs active:scale-95 transition-transform",children:[i.jsx(Ii,{className:"w-4 h-4 fill-current"}),i.jsx("span",{children:"YouTube"})]})]})]}),typeof navigator<"u"&&"share"in navigator&&i.jsx("div",{className:"mt-4 pt-4 border-t border-white/10",children:i.jsxs("button",{id:"native-device-share-btn",onClick:G,className:`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all ${d?"bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-cyan-400":"bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"}`,children:[i.jsx(St,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"Open Device Share Sheet"})]})})]})})},Xr=({lyrics:r,title:b,artist:I,isDarkMode:d,maxHeight:z="max-h-[360px]",compact:M=!1})=>{const[v,C]=O.useState(!1),j=()=>{r&&(navigator.clipboard.writeText(r),C(!0),setTimeout(()=>C(!1),2e3))};if(!r||r.trim()==="")return i.jsxs("div",{className:"py-10 text-center text-xs opacity-60 flex flex-col items-center justify-center gap-2",children:[i.jsx(Ga,{className:"w-6 h-6 opacity-40 text-cyan-400"}),i.jsx("p",{children:"No written lyrics available for this track."})]});const p=r.split(`
`);return i.jsxs("div",{className:"w-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Ga,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-cyan-400 font-mono",children:"Full Song Lyrics"})]}),i.jsx("button",{onClick:j,className:`px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1.5 transition-all ${v?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":d?"bg-white/5 hover:bg-white/10 text-white/80 border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300"}`,title:"Copy lyrics to clipboard","aria-label":"Copy lyrics",children:v?i.jsxs(i.Fragment,{children:[i.jsx(Pl,{className:"w-3 h-3 text-emerald-400"}),i.jsx("span",{children:"Copied!"})]}):i.jsxs(i.Fragment,{children:[i.jsx(eo,{className:"w-3 h-3 opacity-70"}),i.jsx("span",{children:"Copy"})]})})]}),i.jsx("div",{className:`overflow-y-auto pr-2 space-y-2 ${z} custom-scrollbar font-mono ${M?"text-[11px] leading-relaxed":"text-xs sm:text-sm leading-relaxed"}`,children:p.map((G,U)=>{const F=G.trim();if(!F)return i.jsx("div",{className:"h-2"},U);if(F.startsWith("**[")||F.startsWith("[")||F.endsWith("]**")||F.endsWith("]")){const P=F.replace(/\*\*/g,"");return i.jsx("div",{className:"pt-2 pb-0.5 text-cyan-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs",children:i.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 inline-block",children:P})},U)}return i.jsx("p",{className:`${d?"text-white/80":"text-neutral-800"} hover:text-cyan-300 transition-colors select-text`,children:F},U)})})]})},Og=({track:r,isOpen:b,onClose:I,isPlaying:d,isCurrentTrack:z,onPlay:M,onOpenShare:v,isDarkMode:C})=>!b||!r?null:i.jsx("div",{id:"track-detail-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md",onClick:I,children:i.jsxs("div",{id:"track-detail-container",className:`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden transition-all relative ${C?"bg-[#0a0a0a] border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:j=>j.stopPropagation(),children:[i.jsx("button",{id:"close-track-detail-btn",onClick:I,className:"absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white border border-white/10 backdrop-blur-sm transition-colors","aria-label":"Close track details",children:i.jsx(Fa,{className:"w-5 h-5"})}),i.jsxs("div",{className:"relative aspect-video w-full bg-black",children:[i.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"}),i.jsxs("div",{className:"absolute bottom-4 left-6 flex items-center gap-3",children:[i.jsx("button",{onClick:()=>M(r),className:"w-12 h-12 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center shadow-xl shadow-cyan-950/60 font-bold transform active:scale-95 transition-transform",children:z&&d?i.jsx(hn,{className:"w-5 h-5 fill-current"}):i.jsx(Ot,{className:"w-5 h-5 fill-current translate-x-0.5"})}),i.jsxs("div",{children:[i.jsxs("span",{className:"text-xs uppercase font-mono font-bold text-cyan-400",children:["Track #",r.index.toString().padStart(2,"0")]}),i.jsx("h2",{className:"text-xl font-bold leading-tight drop-shadow-md text-white",children:r.title})]})]})]}),i.jsxs("div",{className:"p-6",children:[i.jsxs("div",{className:`flex items-center justify-between gap-4 pb-4 border-b ${C?"border-white/10":"border-neutral-200"}`,children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-white/40",children:"Artist / Band"}),i.jsx("p",{className:"text-sm font-bold text-cyan-400",children:r.artist})]}),i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-white/40",children:"Duration"}),i.jsxs("p",{className:"text-sm font-mono font-semibold flex items-center gap-1 text-cyan-400",children:[i.jsx(lm,{className:"w-3.5 h-3.5"}),r.duration]})]}),i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-white/40",children:"Category"}),i.jsx("p",{className:"text-sm font-semibold capitalize text-white/90",children:r.category})]})]}),r.description&&i.jsxs("div",{className:"mt-4",children:[i.jsx("h4",{className:"text-xs uppercase font-semibold tracking-wider text-white/40 mb-1.5",children:"Track Background"}),i.jsx("p",{className:`text-sm leading-relaxed ${C?"text-white/70":"text-neutral-700"}`,children:r.description})]}),i.jsx("div",{className:`mt-4 p-4 rounded-2xl border ${C?"bg-white/5 border-white/10":"bg-neutral-50 border-neutral-200"}`,children:i.jsx(Xr,{lyrics:Fr(r),title:r.title,artist:r.artist,isDarkMode:C,maxHeight:"max-h-[280px]"})}),i.jsxs("div",{className:"mt-6 flex items-center gap-3",children:[i.jsxs("button",{onClick:()=>v(r),className:"flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95",children:[i.jsx(St,{className:"w-4 h-4"}),i.jsx("span",{children:"Share Song"})]}),i.jsxs("a",{href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:`py-2.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${C?"bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-cyan-400":"bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"}`,children:[i.jsx(Ii,{className:"w-4 h-4 text-[#FF0000]"}),i.jsx("span",{children:"Watch on YouTube"})]})]})]})]})}),Hg=({track:r,isOpen:b,onClose:I,isDarkMode:d,isPlaying:z=!1,isCurrentTrack:M=!1,onPlay:v,onOpenShare:C})=>{if(!b||!r)return null;const j=Fr(r),p="thumbnail"in r?r.thumbnail:r.image;return i.jsx("div",{id:"lyrics-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300",onClick:I,children:i.jsxs("div",{id:"lyrics-modal-container",className:`relative w-full max-w-2xl max-h-[85vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden transition-all ${d?"bg-neutral-950/95 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:G=>G.stopPropagation(),children:[i.jsxs("div",{className:"p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-3 bg-black/30",children:[i.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[p&&i.jsx("img",{src:p,alt:r.title,className:"w-12 h-12 rounded-xl object-cover shrink-0 border border-white/10 shadow-md",referrerPolicy:"no-referrer"}),i.jsxs("div",{className:"min-w-0",children:[i.jsxs("span",{className:"text-[10px] font-mono uppercase font-bold text-cyan-400",children:["Track #",r.index," • ","isSuno"in r&&r.isSuno?"Suno AI Collection":"YouTube Media"]}),i.jsx("h3",{className:"text-base sm:text-lg font-black truncate leading-tight",children:r.title}),i.jsx("p",{className:`text-xs truncate ${d?"text-white/60":"text-neutral-500"}`,children:r.artist})]})]}),i.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[v&&i.jsx("button",{onClick:()=>v(r),className:"w-10 h-10 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center font-bold shadow-md transition-all transform active:scale-95",title:M&&z?"Pause":"Play","aria-label":M&&z?"Pause":"Play",children:M&&z?i.jsx(hn,{className:"w-4 h-4 fill-current"}):i.jsx(Ot,{className:"w-4 h-4 fill-current translate-x-0.5"})}),i.jsx("button",{onClick:I,className:"p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors","aria-label":"Close lyrics modal",children:i.jsx(Fa,{className:"w-4 h-4"})})]})]}),i.jsx("div",{className:"p-4 sm:p-6 overflow-y-auto flex-1 custom-scrollbar",children:i.jsx(Xr,{lyrics:j,title:r.title,artist:r.artist,isDarkMode:d,maxHeight:"max-h-[50vh]"})}),i.jsxs("div",{className:"p-3.5 sm:p-4 border-t border-white/10 bg-black/40 flex items-center justify-between gap-3 text-xs",children:[i.jsxs("div",{className:"flex items-center gap-1.5 text-white/50 text-[11px] font-mono",children:[i.jsx(Wr,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"DomInNATEly Official Lyrics"})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[C&&i.jsxs("button",{onClick:()=>C(r),className:"px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-all",children:[i.jsx(St,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"Share"})]}),i.jsx("button",{onClick:I,className:"px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all",children:"Done"})]})]})]})})},Dg=({track:r,isPlaying:b,isCurrentTrack:I,onPlay:d,isDarkMode:z})=>i.jsxs("div",{id:`suno-track-card-${r.id}`,className:`group relative rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden ${I?z?"bg-white/[0.08] border-cyan-500/50 shadow-lg shadow-cyan-500/10":"bg-cyan-50/70 border-cyan-400 shadow-md":z?"bg-neutral-900/60 border-white/5 hover:border-white/20 hover:bg-neutral-900/90":"bg-white border-neutral-200 hover:border-neutral-300 shadow-sm"}`,children:[i.jsxs("div",{onClick:()=>d(r),className:"relative aspect-square w-full overflow-hidden bg-neutral-950 cursor-pointer",children:[i.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",loading:"lazy"}),i.jsxs("div",{className:"absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white font-mono text-[11px] font-bold border border-white/10",children:["#",r.index]}),i.jsx("div",{className:"absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-cyan-300 font-mono text-[11px] font-bold border border-white/10",children:r.durationFormatted}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity"}),i.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:i.jsx("button",{type:"button",onClick:M=>{M.stopPropagation(),d(r)},"aria-label":I&&b?"Pause track":"Play track",className:`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all transform duration-300 active:scale-95 ${I&&b?"bg-cyan-400 text-black shadow-cyan-500/50 scale-105 ring-4 ring-cyan-400/40":"bg-white/90 text-black hover:bg-cyan-400 opacity-90 group-hover:opacity-100 group-hover:scale-110 shadow-lg"}`,children:I&&b?i.jsx(hn,{className:"w-6 h-6 fill-current"}):i.jsx(Ot,{className:"w-6 h-6 fill-current translate-x-0.5"})})}),I&&b&&i.jsxs("div",{className:"absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-400/40 flex items-center gap-1",children:[i.jsx("div",{className:"w-1 h-3 bg-cyan-400 animate-pulse"}),i.jsx("div",{className:"w-1 h-4 bg-cyan-400 animate-pulse delay-75"}),i.jsx("div",{className:"w-1 h-2 bg-cyan-400 animate-pulse delay-150"}),i.jsx("span",{className:"text-[10px] font-mono font-bold text-cyan-300 ml-1 uppercase",children:"Playing"})]})]}),i.jsx("div",{onClick:()=>d(r),className:"p-3.5 sm:p-4 cursor-pointer",children:i.jsx("h3",{className:`font-bold text-sm sm:text-base leading-snug line-clamp-1 transition-colors ${I?z?"text-cyan-400":"text-cyan-600":z?"text-white hover:text-cyan-400":"text-neutral-900 hover:text-cyan-600"}`,title:r.title,children:r.title})})]}),qg=({track:r,onClose:b,isDarkMode:I,onPlayTrack:d,isPlaying:z,isCurrentTrack:M})=>{const[v,C]=O.useState(!1);if(!r)return null;const j=()=>{navigator.clipboard.writeText(r.lyrics||""),C(!0),setTimeout(()=>C(!1),2e3)},p=G=>{if(!G||G.trim()==="")return i.jsx("div",{className:"py-12 text-center text-sm opacity-60",children:"Instrumental or no written lyrics provided for this track."});const U=G.split(`
`);return i.jsx("div",{className:"space-y-2 font-mono text-xs sm:text-sm leading-relaxed",children:U.map((F,te)=>{const P=F.trim(),ae=P.startsWith("**[")||P.startsWith("[")||P.endsWith("]**")||P.endsWith("]"),Ne=P.startsWith("*")&&P.endsWith("*");return ae?i.jsx("div",{className:"pt-3 pb-1 text-cyan-400 font-bold tracking-wider uppercase text-[11px] sm:text-xs",children:P.replace(/\*\*/g,"")},te):P?i.jsx("div",{className:`${Ne?"italic opacity-80":I?"text-white/90":"text-neutral-800"}`,children:P.replace(/\*\*/g,"").replace(/\*/g,"")},te):i.jsx("div",{className:"h-2"},te)})})};return i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity",onClick:b,children:i.jsxs("div",{className:`relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl border overflow-hidden ${I?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:G=>G.stopPropagation(),children:[i.jsxs("div",{className:`p-4 sm:p-5 border-b flex items-center justify-between gap-4 ${I?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[i.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[i.jsx("img",{src:r.image,alt:r.title,className:"w-12 h-12 rounded-lg object-cover shadow border border-white/10"}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h3",{className:"font-bold text-base sm:text-lg truncate tracking-tight",children:r.title}),i.jsxs("p",{className:"text-xs text-cyan-400 font-medium truncate",children:[r.artist," • ",r.durationFormatted]})]})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsxs("button",{onClick:j,className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${I?"bg-white/5 border-white/10 hover:bg-white/10 text-white/80":"bg-white border-neutral-300 hover:bg-neutral-100 text-neutral-700"}`,title:"Copy Lyrics",children:[v?i.jsx(Pl,{className:"w-3.5 h-3.5 text-emerald-400"}):i.jsx(eo,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:v?"Copied":"Copy"})]}),i.jsxs("a",{href:r.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${I?"bg-white/5 border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 text-white/80":"bg-white border-neutral-300 hover:text-cyan-600 text-neutral-700"}`,title:"Open on Suno.com",children:[i.jsx("span",{className:"hidden sm:inline",children:"Suno"}),i.jsx(Ze,{className:"w-3.5 h-3.5"})]}),i.jsx("button",{onClick:b,className:`p-2 rounded-lg transition-colors ${I?"hover:bg-white/10 text-white/70":"hover:bg-neutral-200 text-neutral-600"}`,"aria-label":"Close",children:i.jsx(Fa,{className:"w-5 h-5"})})]})]}),r.tags&&r.tags.length>0&&i.jsxs("div",{className:`px-5 py-2.5 border-b flex flex-wrap gap-1.5 text-[11px] ${I?"border-white/5 bg-black/40":"border-neutral-100 bg-neutral-100/50"}`,children:[i.jsx("span",{className:"opacity-50 uppercase tracking-wider text-[10px] self-center mr-1 font-mono",children:"Styles:"}),r.tags.map((G,U)=>i.jsx("span",{className:`px-2 py-0.5 rounded-full border ${I?"bg-white/5 border-white/10 text-white/80":"bg-white border-neutral-200 text-neutral-700"}`,children:G},U))]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 custom-scrollbar",children:p(r.lyrics)}),i.jsxs("div",{className:`p-4 border-t flex items-center justify-between gap-3 text-xs ${I?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[i.jsxs("div",{className:"flex items-center gap-2 text-white/50 text-[11px]",children:[i.jsx(ga,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"AI-generated vocals and production via Suno v4.5"})]}),d&&i.jsxs("button",{onClick:()=>d(r),className:"px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20",children:[i.jsx(Wr,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:M&&z?"Pause Audio":"Play Audio"})]})]})]})})},Rg=({track:r,onClose:b,isDarkMode:I})=>{const[d,z]=O.useState("embed");return r?i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all",onClick:b,children:i.jsxs("div",{className:`relative w-full max-w-sm sm:max-w-[390px] flex flex-col rounded-2xl shadow-2xl border overflow-hidden max-h-[95vh] ${I?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:M=>M.stopPropagation(),children:[i.jsxs("div",{className:`p-4 border-b flex items-center justify-between gap-3 ${I?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[i.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[i.jsx("div",{className:"w-9 h-9 rounded-lg overflow-hidden border border-white/10 flex-shrink-0",children:i.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover"})}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h3",{className:"font-bold text-sm sm:text-base truncate tracking-tight",children:r.title}),i.jsx("p",{className:"text-[11px] text-cyan-400 font-mono truncate",children:r.artist})]})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsxs("div",{className:`flex items-center p-1 rounded-lg border text-xs font-semibold ${I?"bg-black/50 border-white/10":"bg-neutral-100 border-neutral-300"}`,children:[i.jsxs("button",{onClick:()=>z("embed"),className:`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${d==="embed"?"bg-cyan-500 text-black font-bold shadow-sm":I?"text-white/70 hover:text-white":"text-neutral-600 hover:text-black"}`,children:[i.jsx(om,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Suno Embed"})]}),i.jsxs("button",{onClick:()=>z("video"),className:`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${d==="video"?"bg-cyan-500 text-black font-bold shadow-sm":I?"text-white/70 hover:text-white":"text-neutral-600 hover:text-black"}`,children:[i.jsx(Ag,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Video MP4"})]})]}),i.jsx("a",{href:r.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${I?"bg-white/5 border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 text-white/80":"bg-white border-neutral-300 hover:text-cyan-600 text-neutral-700"}`,title:"Open song on Suno",children:i.jsx(Ze,{className:"w-3.5 h-3.5"})}),i.jsx("button",{onClick:b,className:`p-2 rounded-lg transition-colors ${I?"hover:bg-white/10 text-white/70":"hover:bg-neutral-200 text-neutral-600"}`,"aria-label":"Close",children:i.jsx(Fa,{className:"w-5 h-5"})})]})]}),i.jsx("div",{className:"relative w-full aspect-[9/16] max-h-[72vh] bg-black flex items-center justify-center overflow-hidden",children:d==="embed"?i.jsx("iframe",{src:encodeURI(r.embedUrl||""),title:`Suno Embed - ${r.title}`,className:"w-full h-full border-0",allow:"autoplay",loading:"lazy"}):i.jsx("video",{src:encodeURI(r.videoUrl||""),controls:!0,autoPlay:!0,playsInline:!0,className:"w-full h-full object-cover bg-black",poster:r.image})}),i.jsxs("div",{className:`p-3.5 border-t flex items-center justify-between text-xs ${I?"border-white/10 bg-white/5 text-white/60":"border-neutral-200 bg-neutral-50 text-neutral-600"}`,children:[i.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[i.jsx(ga,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"Interactive player hosted by Suno.ai"})]}),i.jsxs("a",{href:"https://suno.com/playlist/26af3597-73d4-491c-a9b3-aac9a0d55c82",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-400 underline underline-offset-2 flex items-center gap-1 font-mono text-[11px]",children:[i.jsx("span",{children:"DomInNATEly Top Hits Playlist"}),i.jsx(Ze,{className:"w-3 h-3"})]})]})]})}):null},Lg=({track:r,isOpen:b,onClose:I,isDarkMode:d})=>{const[z,M]=O.useState(!1),[v,C]=O.useState(!1);if(!b)return null;const j=r?r.sunoUrl:ut.url,p=r?r.title:ut.name,G=r?r.artist:`Curated playlist by ${ut.user_display_name}`,U=async()=>{try{await navigator.clipboard.writeText(j),M(!0),setTimeout(()=>M(!1),2e3)}catch{}},F=async()=>{try{await navigator.clipboard.writeText(ut.url),C(!0),setTimeout(()=>C(!1),2e3)}catch{}},te=async()=>{if(navigator.share)try{await navigator.share({title:`${p} - DomInNATEly`,text:`Listen to "${p}" on Suno!`,url:j})}catch{}};return i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity",onClick:I,children:i.jsxs("div",{className:`relative w-full max-w-md rounded-2xl p-6 shadow-2xl border ${d?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:P=>P.stopPropagation(),children:[i.jsxs("div",{className:"flex items-start justify-between mb-4",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",children:i.jsx(St,{className:"w-5 h-5"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-base",children:r?"Share Track":"Share Playlist"}),i.jsx("p",{className:"text-xs opacity-60",children:"Spread the sound of DomInNATEly"})]})]}),i.jsx("button",{onClick:I,className:"p-1 rounded-lg hover:bg-white/10 transition-colors opacity-70 hover:opacity-100",children:i.jsx(Fa,{className:"w-5 h-5"})})]}),i.jsxs("div",{className:`p-3 rounded-xl border flex items-center gap-3 mb-5 ${d?"bg-white/5 border-white/10":"bg-neutral-50 border-neutral-200"}`,children:[i.jsx("img",{src:r?r.image:ut.cover,alt:p,className:"w-12 h-12 rounded-lg object-cover border border-white/10"}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsx("h4",{className:"font-bold text-sm truncate",children:p}),i.jsx("p",{className:"text-xs text-cyan-400 truncate",children:G})]})]}),i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{children:[i.jsx("label",{className:"text-[11px] font-mono uppercase tracking-wider opacity-60 block mb-1.5",children:r?"Track Suno Link":"Playlist Suno Link"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("input",{type:"text",readOnly:!0,value:j,className:`flex-1 px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${d?"bg-neutral-900 border-white/10 text-white/90":"bg-neutral-100 border-neutral-300 text-neutral-800"}`}),i.jsxs("button",{onClick:U,className:"px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20",children:[z?i.jsx(Pl,{className:"w-4 h-4 text-black"}):i.jsx(eo,{className:"w-4 h-4"}),i.jsx("span",{children:z?"Copied":"Copy"})]})]})]}),r&&i.jsxs("div",{children:[i.jsx("label",{className:"text-[11px] font-mono uppercase tracking-wider opacity-60 block mb-1.5",children:"DomInNATEly Top Hits Playlist Link"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("input",{type:"text",readOnly:!0,value:ut.url,className:`flex-1 px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${d?"bg-neutral-900 border-white/10 text-white/90":"bg-neutral-100 border-neutral-300 text-neutral-800"}`}),i.jsxs("button",{onClick:F,className:`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${d?"bg-white/5 border-white/10 text-white hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[v?i.jsx(Pl,{className:"w-4 h-4 text-emerald-400"}):i.jsx(eo,{className:"w-4 h-4"}),i.jsx("span",{children:v?"Copied":"Copy"})]})]})]})]}),typeof navigator<"u"&&"share"in navigator&&i.jsxs("button",{onClick:te,className:"w-full mt-4 py-2.5 rounded-xl border border-white/15 hover:border-cyan-400/50 flex items-center justify-center gap-2 text-xs font-bold transition-all",children:[i.jsx(St,{className:"w-4 h-4 text-cyan-400"}),i.jsx("span",{children:"Open System Share Menu"})]}),i.jsxs("div",{className:"mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs",children:[i.jsxs("a",{href:ut.url,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-[11px]",children:[i.jsx("span",{children:"Open Playlist on Suno"}),i.jsx(Ze,{className:"w-3 h-3"})]}),i.jsx("button",{onClick:I,className:"opacity-60 hover:opacity-100 text-xs",children:"Close"})]})]})})},dm=[{id:"tiktok",name:"TikTok",label:"Follow on TikTok",url:"https://tiktok.com/@domInNATEly",handle:"@domInNATEly",icon:"🎵",color:"from-pink-500/20 to-cyan-500/20 text-pink-400 border-pink-500/30 hover:border-pink-400",actionText:"Follow & Like"},{id:"youtube",name:"YouTube",label:"Subscribe on YouTube",url:"https://www.youtube.com/@DomInNATEly",handle:"@DomInNATEly",icon:"▶️",color:"from-red-600/20 to-red-500/10 text-red-400 border-red-500/30 hover:border-red-400",actionText:"Subscribe & Like"},{id:"github",name:"GitHub",label:"Check on GitHub",url:"https://github.com/Nate-Mina",handle:"Nate-Mina",icon:"🐙",color:"from-purple-500/20 to-neutral-700/20 text-purple-300 border-purple-500/30 hover:border-purple-400",actionText:"Star & Follow"},{id:"facebook",name:"Facebook",label:"Connect on Facebook",url:"https://facebook.com/NateMina",handle:"NateMina",icon:"👍",color:"from-blue-600/20 to-indigo-600/20 text-blue-400 border-blue-500/30 hover:border-blue-400",actionText:"Connect"},{id:"linkedin",name:"LinkedIn",label:"Connect on LinkedIn",url:"https://www.linkedin.com/in/dominnately/",handle:"dominnately",icon:"💼",color:"from-sky-600/20 to-cyan-600/20 text-sky-400 border-sky-500/30 hover:border-sky-400",actionText:"Connect"}],hm=({isDarkMode:r})=>i.jsxs("div",{id:"social-subscribe-banner",className:`relative overflow-hidden rounded-2xl border p-4 sm:p-5 mb-7 transition-all ${r?"bg-gradient-to-r from-neutral-900/90 via-black to-neutral-900/90 border-cyan-500/20 shadow-xl":"bg-gradient-to-r from-cyan-50/80 via-white to-pink-50/80 border-cyan-200/80 shadow-md"}`,children:[i.jsx("div",{className:"absolute top-0 right-1/4 w-72 h-36 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"}),i.jsx("div",{className:"absolute bottom-0 left-1/4 w-72 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[i.jsxs("div",{className:"flex items-start sm:items-center gap-3",children:[i.jsx("div",{className:`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border shadow-inner ${r?"bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border-white/10 text-cyan-400":"bg-cyan-100 border-cyan-200 text-cyan-600"}`,children:i.jsx(sm,{className:"w-5 h-5 text-red-500 fill-red-500 animate-pulse"})}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsxs("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1",children:[i.jsx(ga,{className:"w-3.5 h-3.5"}),"Support the Music"]}),i.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded-full border ${r?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-200 text-neutral-600"}`,children:"Official Channels"})]}),i.jsxs("h3",{className:"text-base sm:text-lg font-black tracking-tight leading-snug mt-0.5",children:["Please Like & Subscribe to my"," ",i.jsx("a",{href:"https://www.youtube.com/@DomInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-red-500 hover:underline inline-flex items-center gap-0.5",children:"YouTube"})," ","and"," ",i.jsx("a",{href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-pink-400 hover:underline inline-flex items-center gap-0.5",children:"TikTok"})," ","channel!"]}),i.jsx("p",{className:`text-xs mt-0.5 ${r?"text-white/65":"text-neutral-600"}`,children:"Stream music, drop a like on videos, follow for upcoming track drops & connect across socials!"})]})]}),i.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[i.jsxs("a",{id:"cta-youtube-subscribe",href:"https://www.youtube.com/@DomInNATEly?sub_confirmation=1",target:"_blank",rel:"noopener noreferrer",className:"group px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white flex items-center gap-1.5 shadow-md shadow-red-600/25 transition-transform active:scale-95 shrink-0",title:"Subscribe to DomInNATEly on YouTube",children:[i.jsx(Zy,{className:"w-3.5 h-3.5 fill-current group-hover:rotate-12 transition-transform"}),i.jsx("span",{children:"Subscribe YT"}),i.jsx(Ze,{className:"w-3 h-3 opacity-70"})]}),i.jsxs("a",{id:"cta-tiktok-follow",href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:"group px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white flex items-center gap-1.5 shadow-md shadow-pink-600/25 transition-transform active:scale-95 shrink-0",title:"Follow DomInNATEly on TikTok",children:[i.jsx("span",{className:"text-sm",children:"🎵"}),i.jsx("span",{children:"Follow TikTok"}),i.jsx(Ze,{className:"w-3 h-3 opacity-70"})]}),i.jsx("div",{className:"flex flex-wrap items-center gap-1.5 pt-1 lg:pt-0",children:dm.map(b=>i.jsxs("a",{id:`social-link-${b.id}`,href:b.url,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-300 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100 hover:text-cyan-700"}`,title:`${b.label}: ${b.url}`,children:[i.jsx("span",{className:"text-xs",children:b.icon}),i.jsx("span",{className:"font-semibold text-[11px]",children:b.name}),i.jsx(Ze,{className:"w-2.5 h-2.5 opacity-50"})]},b.id))})]})]})]}),Gg=({isDarkMode:r,currentTrack:b,isPlaying:I,onPlayTrack:d,onTogglePlayPause:z,onTrackChange:M,onSwitchToYouTube:v})=>{const[C,j]=O.useState(""),[p,G]=O.useState("all"),[U,F]=O.useState("index"),[te,P]=O.useState("grid"),[ae,Ne]=O.useState(null),[Be,Ve]=O.useState(null),[re,Ae]=O.useState(null),Ye=O.useMemo(()=>[{id:"all",label:"All Tracks"},{id:"alt-drill",label:"Alt-Drill & Trap"},{id:"rock",label:"Rock & Alt Pop"},{id:"hip-hop",label:"Rap & Hip-Hop"},{id:"duet",label:"Duets"},{id:"ballad",label:"Ballads & Acoustic"}],[]),_e=O.useMemo(()=>{const K=ut.totalDurationSeconds,le=Math.floor(K/3600),Q=Math.floor(K%3600/60);return`${le} hr ${Q} min`},[]),Z=O.useMemo(()=>{let K=[...rt];if(C.trim()!==""){const le=C.toLowerCase().trim();K=K.filter(Q=>Q.title.toLowerCase().includes(le)||Q.artist.toLowerCase().includes(le)||Q.tags.some(Me=>Me.toLowerCase().includes(le))||Q.lyrics.toLowerCase().includes(le))}return p!=="all"&&(K=K.filter(le=>{const Q=(le.tags.join(" ")+" "+le.title+" "+le.lyrics).toLowerCase();return p==="alt-drill"?Q.includes("drill")||Q.includes("trap")||Q.includes("dubstep"):p==="rock"?Q.includes("rock")||Q.includes("pop")||Q.includes("punk"):p==="hip-hop"?Q.includes("rap")||Q.includes("hip-hop")||Q.includes("hip hop"):p==="duet"?Q.includes("duet")||Q.includes("female vocals"):p==="ballad"?Q.includes("ballad")||Q.includes("acoustic")||Q.includes("piano"):!0})),K.sort((le,Q)=>U==="title"?le.title.localeCompare(Q.title):U==="duration-desc"?Q.duration-le.duration:U==="duration-asc"?le.duration-Q.duration:le.index-Q.index),K},[C,p,U]),Oe=()=>{Z.length>0&&d(Z[0])},Le=()=>{if(Z.length>0){const K=Math.floor(Math.random()*Z.length);d(Z[K])}};return i.jsxs("div",{className:"w-full flex flex-col",children:[i.jsxs("section",{id:"suno-hero-banner",className:`relative overflow-hidden rounded-3xl border mb-8 p-6 sm:p-8 md:p-10 transition-colors ${r?"bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 border-white/10 shadow-2xl":"bg-gradient-to-br from-cyan-50/80 via-white to-neutral-100 border-neutral-200 shadow-lg"}`,children:[i.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"}),i.jsx("div",{className:"absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8",children:[i.jsxs("div",{className:"relative flex-shrink-0 group",children:[i.jsx("div",{className:"w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-neutral-900",children:i.jsx("img",{src:ut.cover,alt:ut.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),i.jsxs("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-black font-mono font-bold text-[10px] tracking-wider uppercase shadow-lg shadow-cyan-500/30 flex items-center gap-1.5 whitespace-nowrap",children:[i.jsx(im,{className:"w-3 h-3 fill-current"}),i.jsx("span",{children:"Suno Top Hits"})]})]}),i.jsxs("div",{className:"flex-1 text-center md:text-left flex flex-col justify-between",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3",children:[i.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-cyan-400/15 text-cyan-400 border border-cyan-400/30 flex items-center gap-1.5",children:[i.jsx(ga,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Suno Playlist"})]}),i.jsxs("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:[rt.length," Official Tracks"]}),i.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:_e})]}),i.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight",children:ut.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium",children:[i.jsx("span",{className:"text-cyan-400 font-bold",children:ut.user_display_name}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-pink-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"🎵 TikTok: @domInNATEly"}),i.jsx(Ze,{className:"w-3 h-3"})]}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:"https://www.youtube.com/@DomInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-red-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"▶️ YouTube: @DomInNATEly"}),i.jsx(Ze,{className:"w-3 h-3"})]})]}),i.jsxs("p",{className:`mt-3 text-sm max-w-2xl leading-relaxed ${r?"text-white/70":"text-neutral-600"}`,children:[ut.description,". Stream the official Suno AI audio collection featuring high-fidelity guitars, dual vocal anthems, hard-hitting trap beats, and psychological lyricism."]})]}),i.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3",children:[i.jsxs("button",{id:"suno-play-all-btn",onClick:Oe,className:"px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-400/25 transition-transform active:scale-95",children:[i.jsx(Ot,{className:"w-4 h-4 fill-current"}),i.jsx("span",{children:"Play All"})]}),i.jsxs("button",{id:"suno-shuffle-all-btn",onClick:Le,className:`px-4 py-2.5 rounded-full border text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(ki,{className:"w-4 h-4 text-cyan-400"}),i.jsx("span",{children:"Shuffle"})]}),i.jsxs("a",{id:"suno-open-official-btn",href:ut.url,target:"_blank",rel:"noopener noreferrer",className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[i.jsx("span",{children:"Open on Suno"}),i.jsx(Ze,{className:"w-3.5 h-3.5 opacity-70"})]}),v&&i.jsxs("button",{id:"switch-to-youtube-hero-btn",onClick:v,className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-red-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-red-700 hover:bg-neutral-200"}`,children:[i.jsx(Pn,{className:"w-4 h-4 text-red-500"}),i.jsxs("span",{children:["Switch to YouTube Gallery (",pt.length,")"]})]}),i.jsx("button",{onClick:()=>Ae(null),className:`p-2.5 rounded-full border transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,title:"Share Playlist",children:i.jsx(St,{className:"w-4 h-4"})})]})]})]})]}),i.jsx(hm,{isDarkMode:r}),i.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6",children:[i.jsxs("div",{className:"relative flex-1 max-w-md",children:[i.jsx(cm,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50"}),i.jsx("input",{id:"suno-search-input",type:"text",placeholder:"Search Suno tracks, lyrics, styles...",value:C,onChange:K=>j(K.target.value),className:`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none transition-colors ${r?"bg-neutral-900 border-white/10 text-white placeholder-white/40 focus:border-cyan-400/60":"bg-white border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-cyan-500"}`})]}),i.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-3",children:[i.jsxs("select",{id:"suno-sort-select",value:U,onChange:K=>F(K.target.value),className:`px-3 py-2 rounded-xl text-xs font-semibold border focus:outline-none cursor-pointer ${r?"bg-neutral-900 border-white/10 text-white":"bg-white border-neutral-300 text-neutral-800"}`,children:[i.jsxs("option",{value:"index",children:["Tracklist Order (#1 - #",rt.length,")"]}),i.jsx("option",{value:"title",children:"Title (A to Z)"}),i.jsx("option",{value:"duration-desc",children:"Duration (Longest first)"}),i.jsx("option",{value:"duration-asc",children:"Duration (Shortest first)"})]}),i.jsxs("div",{className:`flex items-center p-1 rounded-xl border ${r?"border-white/10 bg-white/5":"border-neutral-300 bg-neutral-100"}`,children:[i.jsxs("button",{id:"suno-view-grid",onClick:()=>P("grid"),className:`p-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${te==="grid"?"bg-cyan-500 text-black shadow-sm":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"Grid View",children:[i.jsx(rm,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:"Grid"})]}),i.jsxs("button",{id:"suno-view-list",onClick:()=>P("list"),className:`p-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${te==="list"?"bg-cyan-500 text-black shadow-sm":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"List View",children:[i.jsx(um,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:"List"})]})]})]})]}),i.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-3 mb-6 custom-scrollbar",children:[Ye.map(K=>i.jsx("button",{id:`suno-filter-tag-${K.id}`,onClick:()=>G(K.id),className:`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${p===K.id?"bg-cyan-500 text-black border-cyan-400 font-bold shadow-md shadow-cyan-500/20":r?"bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white":"bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100"}`,children:K.label},K.id)),i.jsxs("span",{className:"text-[11px] font-mono opacity-50 ml-auto whitespace-nowrap",children:["Showing ",Z.length," of ",rt.length," tracks"]})]}),Z.length>0?te==="grid"?i.jsx("div",{id:"suno-tracks-grid",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:Z.map(K=>i.jsx(Dg,{track:K,isPlaying:I,isCurrentTrack:(b==null?void 0:b.id)===K.id,onPlay:le=>d(le),onOpenLyrics:le=>Ne(le),onOpenEmbed:le=>Ve(le),onOpenShare:le=>Ae(le),isDarkMode:r},`${K.id}-${K.index}`))}):i.jsxs("div",{id:"suno-tracks-list",className:"flex flex-col gap-2.5",children:[i.jsxs("div",{className:`grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 ${r?"text-white/40":"text-neutral-500"}`,children:[i.jsx("div",{className:"col-span-1 text-center",children:"#"}),i.jsx("div",{className:"col-span-8 sm:col-span-9",children:"Track Name"}),i.jsx("div",{className:"col-span-3 sm:col-span-2 text-right",children:"Duration"})]}),Z.map(K=>{const le=(b==null?void 0:b.id)===K.id;return i.jsxs("div",{id:`suno-list-item-${K.id}`,onClick:()=>d(K),className:`group p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${le?r?"bg-cyan-950/40 border-cyan-500/40 text-cyan-300":"bg-cyan-50 border-cyan-300 text-cyan-900":r?"bg-neutral-900/50 border-white/5 hover:border-white/15 hover:bg-neutral-900":"bg-white border-neutral-200 hover:border-neutral-300 shadow-sm"}`,children:[i.jsxs("div",{className:"grid grid-cols-12 items-center flex-1 min-w-0",children:[i.jsx("div",{className:"col-span-1 flex items-center justify-center font-mono text-xs opacity-60",children:le&&I?i.jsx("div",{className:"w-3 h-3 rounded-full bg-cyan-400 animate-ping"}):i.jsx("span",{children:K.index})}),i.jsxs("div",{className:"col-span-8 sm:col-span-9 flex items-center gap-3 min-w-0 pr-3",children:[i.jsxs("div",{className:"relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900",children:[i.jsx("img",{src:K.image,alt:K.title,className:"w-full h-full object-cover"}),i.jsx("div",{className:"absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:i.jsx(Ot,{className:"w-3.5 h-3.5 fill-white text-white"})})]}),i.jsx("div",{className:"min-w-0",children:i.jsx("h4",{className:`font-bold text-xs sm:text-sm truncate transition-colors ${le?"text-cyan-400":"group-hover:text-cyan-400"}`,children:K.title})})]}),i.jsx("div",{className:"col-span-3 sm:col-span-2 text-right font-mono text-xs opacity-75",children:K.durationFormatted})]}),i.jsxs("div",{className:"flex items-center gap-1.5 ml-2",children:[i.jsx("button",{onClick:Q=>{Q.stopPropagation(),Ne(K)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Lyrics",children:i.jsx(Ga,{className:"w-3.5 h-3.5"})}),i.jsx("button",{onClick:Q=>{Q.stopPropagation(),Ve(K)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Watch Video",children:i.jsx(to,{className:"w-3.5 h-3.5"})}),i.jsx("button",{onClick:Q=>{Q.stopPropagation(),Ae(K)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Share",children:i.jsx(St,{className:"w-3.5 h-3.5"})})]})]},`${K.id}-${K.index}`)})]}):i.jsxs("div",{className:"py-20 text-center rounded-2xl border border-dashed border-white/15 my-6",children:[i.jsx(Lr,{className:"w-10 h-10 mx-auto text-cyan-400/50 mb-3"}),i.jsxs("p",{className:"font-bold text-base",children:['No tracks found matching "',C,'"']}),i.jsx("p",{className:"text-xs opacity-60 mt-1",children:'Try clearing your search query or selecting "All Tracks"'}),i.jsx("button",{onClick:()=>{j(""),G("all")},className:"mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold",children:"Reset Filters"})]}),i.jsx(qg,{track:ae,onClose:()=>Ne(null),isDarkMode:r,onPlayTrack:K=>d(K),isPlaying:I,isCurrentTrack:(b==null?void 0:b.id)===(ae==null?void 0:ae.id)}),i.jsx(Rg,{track:Be,onClose:()=>Ve(null),isDarkMode:r}),i.jsx(Lg,{track:re,isOpen:!!(re||re===null&&!1),onClose:()=>Ae(null),isDarkMode:r})]})},Fg=({track:r,isPlaying:b,onPlay:I,onPause:d,onEnded:z,isDarkMode:M,volume:v=80,isMuted:C=!1,size:j="sm"})=>{const p=!!("isSuno"in r?r.isSuno:r.audioUrl||r.videoUrl),G=O.useRef(null),U=O.useRef(null);O.useEffect(()=>{p&&G.current&&(b?G.current.play().catch(ae=>{console.warn("Suno video autoplay notice:",ae)}):G.current.pause())},[b,p,r.id]),O.useEffect(()=>{p&&G.current&&(G.current.volume=C?0:v/100,G.current.muted=C)},[v,C,p]),O.useEffect(()=>{if(!p&&U.current&&U.current.contentWindow&&b)try{C?U.current.contentWindow.postMessage('{"event":"command","func":"mute","args":""}',"*"):(U.current.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}',"*"),U.current.contentWindow.postMessage(JSON.stringify({event:"command",func:"setVolume",args:[v]}),"*"))}catch{}},[v,C,p,b]);const F="thumbnail"in r?r.thumbnail:r.image,te="videoUrl"in r&&r.videoUrl?r.videoUrl:"audioUrl"in r&&r.audioUrl?r.audioUrl:`https://cdn1.suno.ai/${r.id}.mp4`,P=j==="sm"?"max-w-[270px]":j==="md"?"max-w-[320px]":"max-w-[370px]";return i.jsx("div",{className:`relative w-full ${p?`aspect-[9/16] ${P} mx-auto`:"aspect-video"} rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl group transition-all duration-300`,children:p?i.jsxs("div",{className:"relative w-full h-full bg-black flex items-center justify-center",children:[i.jsx("video",{ref:G,src:te,poster:F,controls:!0,autoPlay:b,playsInline:!0,preload:"auto",className:"w-full h-full object-cover bg-black",onPlay:()=>{b||I(r)},onPause:()=>{b&&d()},onEnded:()=>{z&&z()},onError:ae=>{console.warn("Suno video playback error:",ae)}},`suno-video-${r.id}`),i.jsxs("div",{className:"absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300 font-bold pointer-events-none flex items-center gap-1 z-10",children:[i.jsx(ga,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"Suno 9:16 Player"})]})]}):i.jsxs("div",{className:"relative w-full h-full bg-black",children:[b?i.jsx("div",{className:"w-full h-full relative",children:i.jsx("iframe",{ref:U,src:`https://www.youtube-nocookie.com/embed/${r.id}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&playsinline=1`,title:`Music Video - ${r.title}`,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},`yt-iframe-${r.id}`)}):i.jsxs("div",{className:"relative w-full h-full",children:[i.jsx("img",{src:F,alt:r.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",referrerPolicy:"no-referrer"}),i.jsxs("div",{className:"absolute inset-0 bg-black/45 backdrop-blur-[1px] flex flex-col items-center justify-center p-4",children:[i.jsx("button",{id:"showcase-play-video-btn",onClick:()=>I(r),className:"w-16 h-16 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all ring-4 ring-cyan-400/40 mb-2","aria-label":"Play music video",title:"Play video",children:i.jsx(Ot,{className:"w-7 h-7 fill-current translate-x-0.5"})}),i.jsxs("div",{className:"flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-[11px] font-mono font-bold text-white tracking-wider",children:[i.jsx(to,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"WATCH MUSIC VIDEO"})]})]})]}),i.jsxs("div",{className:"absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300 font-bold pointer-events-none flex items-center gap-1 z-10",children:[i.jsx(to,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"HD Music Video"})]})]})})},Wg=({isDarkMode:r})=>i.jsx("footer",{id:"site-social-footer",className:`mt-16 pt-10 pb-8 border-t transition-colors ${r?"border-white/10 bg-black/40":"border-neutral-200 bg-neutral-100/60"}`,children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6",children:[i.jsxs("div",{className:"text-center md:text-left",children:[i.jsxs("div",{className:"flex items-center justify-center md:justify-start gap-2 mb-1.5",children:[i.jsx("span",{className:"font-black text-lg tracking-wider",children:"DomInNATEly"}),i.jsx("span",{className:"text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-bold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20",children:"Official Artist Hub"})]}),i.jsx("p",{className:`text-xs max-w-md ${r?"text-white/60":"text-neutral-600"}`,children:"Please like and subscribe to my YouTube and TikTok channels to support the music and stay updated on every new release!"})]}),i.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2.5",children:[i.jsxs("a",{id:"footer-youtube-link",href:"https://www.youtube.com/@DomInNATEly?sub_confirmation=1",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-md shadow-red-600/20",children:[i.jsx(Ii,{className:"w-3.5 h-3.5 fill-current"}),i.jsx("span",{children:"YouTube Channel"}),i.jsx(Ze,{className:"w-3 h-3 opacity-70"})]}),dm.map(b=>i.jsxs("a",{id:`footer-social-${b.id}`,href:b.url,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-200 hover:text-cyan-600"}`,title:b.label,children:[i.jsx("span",{children:b.icon}),i.jsx("span",{children:b.name}),i.jsx(Ze,{className:"w-2.5 h-2.5 opacity-50"})]},b.id))]})]}),i.jsxs("div",{className:`mt-8 pt-4 border-t flex flex-col sm:flex-row items-center justify-between text-[11px] gap-2 ${r?"border-white/5 text-white/40":"border-neutral-200 text-neutral-500"}`,children:[i.jsxs("div",{children:["© ",new Date().getFullYear()," DomInNATEly. Built for fans, listeners, and creators."]}),i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx("span",{children:"Made with passion for high-energy alt-rock & storytelling"}),i.jsx(sm,{className:"w-3 h-3 text-red-500 fill-red-500 inline"})]})]})]})});function Xg(){const[r,b]=O.useState(()=>{var x;if(typeof window<"u")try{const V=(x=window.localStorage)==null?void 0:x.getItem("dominnately_theme");if(V)return V==="dark"}catch{return!0}return!0}),[I,d]=O.useState("youtube"),[z,M]=O.useState(()=>typeof window<"u"?window.innerWidth>=1280:!1);O.useEffect(()=>{const x=()=>{M(window.innerWidth>=1280)};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const[v,C]=O.useState(pt[0]||null),[j,p]=O.useState(!1),[G,U]=O.useState("video"),[F,te]=O.useState(()=>{try{const x=localStorage.getItem("dominately_stage_size");if(x==="sm"||x==="md"||x==="lg")return x}catch{}return"sm"}),P=x=>{te(x);try{localStorage.setItem("dominately_stage_size",x)}catch{}},[ae,Ne]=O.useState(rt[0]||null),[Be,Ve]=O.useState(!1),[re,Ae]=O.useState(""),[Ye,_e]=O.useState("playlist"),[Z,Oe]=O.useState("all"),[Le,K]=O.useState("grid"),[le,Q]=O.useState(null),[Me,Pe]=O.useState(null),[He,N]=O.useState(null);O.useEffect(()=>{var x;try{(x=window.localStorage)==null||x.setItem("dominnately_theme",r?"dark":"light")}catch{}r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]);const H=O.useMemo(()=>rt.map(em),[]),S=x=>{(v==null?void 0:v.id)===x.id?p(!j):(C(x),p(!0))},R=x=>{Ne(x);const V=em(x);(v==null?void 0:v.id)===V.id?(p(!j),Ve(!j)):(C(V),p(!0),Ve(!0))},J=O.useMemo(()=>v!=null&&v.isSuno&&rt.find(x=>x.id===v.id)||ae,[v,ae]),h=O.useMemo(()=>{let x=[...pt];if(re.trim()!==""){const V=re.toLowerCase().trim();x=x.filter(q=>q.title.toLowerCase().includes(V)||q.artist.toLowerCase().includes(V)||q.featuredLyrics&&q.featuredLyrics.toLowerCase().includes(V)||q.tags.some(Ce=>Ce.toLowerCase().includes(V))||q.description&&q.description.toLowerCase().includes(V))}return Z!=="all"&&(x=x.filter(V=>V.category===Z)),x.sort((V,q)=>{switch(Ye){case"playlist":return V.index-q.index;case"newest":return q.index-V.index;case"duration-desc":return q.durationSeconds-V.durationSeconds;case"duration-asc":return V.durationSeconds-q.durationSeconds;case"title-asc":return V.title.localeCompare(q.title);case"title-desc":return q.title.localeCompare(V.title);default:return V.index-q.index}}),x},[re,Z,Ye]),T=O.useMemo(()=>I==="suno"||v!=null&&v.isSuno?H:h.length>0?h:pt,[I,v==null?void 0:v.isSuno,H,h]),D=()=>{h.length>0&&(C(h[0]),p(!0))},L=()=>{if(h.length>0){const x=Math.floor(Math.random()*h.length);C(h[x]),p(!0)}};return i.jsxs("div",{className:`min-h-screen font-outfit transition-colors duration-200 flex flex-col ${r?"bg-[#050505] text-white":"bg-neutral-50 text-neutral-900"}`,children:[i.jsx(Cg,{isDarkMode:r,onToggleDarkMode:()=>b(!r),trackCount:I==="suno"?rt.length:pt.length,onQuickShareAll:()=>Q(v||pt[0])}),i.jsxs("main",{className:"flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-36",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-6",children:[i.jsxs("button",{id:"tab-youtube-gallery",onClick:()=>{d("youtube")},className:`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all border shadow-sm ${I==="youtube"?"bg-cyan-500 text-black border-cyan-400 shadow-cyan-500/25 ring-2 ring-cyan-400/40":r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(Pn,{className:"w-4 h-4"}),i.jsxs("span",{children:["YouTube Audio Gallery (",pt.length," Tracks)"]})]}),i.jsxs("button",{id:"tab-suno-playlist",onClick:()=>{d("suno")},className:`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all border shadow-sm ${I==="suno"?"bg-cyan-500 text-black border-cyan-400 shadow-cyan-500/25 ring-2 ring-cyan-400/40":r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(ga,{className:"w-4 h-4 text-cyan-400"}),i.jsxs("span",{children:["Suno AI Playlist (",rt.length," Tracks)"]})]})]}),i.jsxs("div",{className:"xl:grid xl:grid-cols-12 xl:gap-8 items-start",children:[i.jsx("div",{className:F==="sm"?"xl:col-span-8 2xl:col-span-9 transition-all duration-300":F==="md"?"xl:col-span-7 2xl:col-span-8 transition-all duration-300":"xl:col-span-6 transition-all duration-300",children:I==="suno"?i.jsx(Gg,{isDarkMode:r,currentTrack:J,isPlaying:j&&!!(v!=null&&v.isSuno),onPlayTrack:R,onTogglePlayPause:()=>{p(!j),Ve(!j)},onTrackChange:R,onSwitchToYouTube:()=>d("youtube")}):i.jsxs(i.Fragment,{children:[i.jsxs("section",{id:"youtube-hero-banner",className:`relative overflow-hidden rounded-3xl border mb-8 p-6 sm:p-8 md:p-10 transition-colors ${r?"bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 border-white/10 shadow-2xl":"bg-gradient-to-br from-red-50/70 via-white to-neutral-100 border-neutral-200 shadow-lg"}`,children:[i.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none"}),i.jsx("div",{className:"absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8",children:[i.jsxs("div",{className:"relative flex-shrink-0 group",children:[i.jsx("div",{className:"w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-neutral-900",children:i.jsx("img",{src:ya.cover,alt:ya.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),i.jsxs("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-red-600 text-white font-mono font-bold text-[10px] tracking-wider uppercase shadow-lg shadow-red-600/30 flex items-center gap-1.5 whitespace-nowrap",children:[i.jsx(im,{className:"w-3 h-3 fill-current"}),i.jsx("span",{children:"YouTube Top Hits"})]})]}),i.jsxs("div",{className:"flex-1 text-center md:text-left flex flex-col justify-between",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3",children:[i.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-red-500/15 text-red-400 border border-red-500/30 flex items-center gap-1.5",children:[i.jsx(Pn,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Official YouTube Playlist"})]}),i.jsxs("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:[pt.length," Recorded Tracks"]}),i.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:ya.totalDurationFormatted})]}),i.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight",children:ya.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium",children:[i.jsx("span",{className:"text-cyan-400 font-bold",children:ya.channel}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:ya.channelUrl,target:"_blank",rel:"noopener noreferrer",className:"text-red-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"▶️ YouTube: @DomInNATEly"}),i.jsx(Ze,{className:"w-3 h-3"})]}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-pink-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"🎵 TikTok: @domInNATEly"}),i.jsx(Ze,{className:"w-3 h-3"})]}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:ya.playlistUrl,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"Open Playlist on YouTube"}),i.jsx(Ze,{className:"w-3 h-3"})]})]}),i.jsxs("p",{className:`mt-3 text-sm max-w-2xl leading-relaxed ${r?"text-white/70":"text-neutral-600"}`,children:[ya.description," Full-length studio recordings, explosive remixes, and introspective anthems."]})]}),i.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3",children:[i.jsxs("button",{id:"youtube-hero-play-all-btn",onClick:D,className:"px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-400/25 transition-transform active:scale-95",children:[i.jsx(Ot,{className:"w-4 h-4 fill-current"}),i.jsxs("span",{children:["Play All (",pt.length,")"]})]}),i.jsxs("button",{id:"youtube-hero-shuffle-btn",onClick:L,className:`px-4 py-2.5 rounded-full border text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(ki,{className:"w-4 h-4 text-cyan-400"}),i.jsx("span",{children:"Shuffle"})]}),i.jsxs("a",{id:"youtube-open-official-btn",href:ya.playlistUrl,target:"_blank",rel:"noopener noreferrer",className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-red-400 hover:border-red-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[i.jsx(Pn,{className:"w-4 h-4 text-red-500"}),i.jsx("span",{children:"Open YouTube Playlist"}),i.jsx(Ze,{className:"w-3.5 h-3.5 opacity-60"})]}),i.jsxs("button",{id:"switch-to-suno-hero-btn",onClick:()=>d("suno"),className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-cyan-700 hover:bg-neutral-200"}`,children:[i.jsx(ga,{className:"w-4 h-4"}),i.jsxs("span",{children:["Switch to Suno Playlist (",rt.length,")"]})]})]})]})]})]}),i.jsx(hm,{isDarkMode:r}),i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-5",children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsxs("button",{id:"play-all-tracks-btn",onClick:D,className:"px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all active:scale-95",children:[i.jsx(Ot,{className:"w-3.5 h-3.5 fill-current"}),i.jsx("span",{children:"Play All"})]}),i.jsxs("button",{id:"shuffle-all-tracks-btn",onClick:L,className:`px-3.5 py-2 rounded-full border text-xs sm:text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(ki,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"Shuffle"})]})]}),i.jsxs("div",{className:`flex items-center gap-1.5 p-1 rounded-full border ${r?"border-white/10 bg-white/5":"border-neutral-300 bg-neutral-100"}`,children:[i.jsxs("button",{id:"view-mode-grid",onClick:()=>K("grid"),className:`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${Le==="grid"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"Grid View","aria-label":"Grid View",children:[i.jsx(rm,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:"Grid"})]}),i.jsxs("button",{id:"view-mode-list",onClick:()=>K("list"),className:`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${Le==="list"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"List View","aria-label":"List View",children:[i.jsx(um,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:"List"})]})]})]}),i.jsx(Ug,{searchQuery:re,onSearchChange:Ae,sortField:Ye,onSortChange:_e,selectedCategory:Z,onCategoryChange:Oe,totalResults:h.length,totalTracks:pt.length,isDarkMode:r}),h.length>0?Le==="grid"?i.jsx("div",{id:"tracks-grid-container",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:h.map(x=>i.jsx(zg,{track:x,isPlaying:j,isCurrentTrack:(v==null?void 0:v.id)===x.id,onPlay:S,onOpenShare:V=>Q(V),onOpenDetails:V=>Pe(V),onOpenLyrics:V=>N(V),isDarkMode:r},`${x.id}-${x.index}`))}):i.jsxs("div",{id:"tracks-list-container",className:"flex flex-col gap-2.5",children:[i.jsxs("div",{className:`grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 ${r?"text-white/40":"text-neutral-500"}`,children:[i.jsx("div",{className:"col-span-7 sm:col-span-6",children:"Track Info"}),i.jsx("div",{className:"hidden sm:block sm:col-span-3",children:"Category"}),i.jsx("div",{className:"col-span-3 sm:col-span-2",children:"Duration"}),i.jsx("div",{className:"col-span-2 sm:col-span-1 text-right",children:"Share"})]}),h.map(x=>{const V=(v==null?void 0:v.id)===x.id;return i.jsx("div",{id:`track-list-item-${x.id}`,onClick:()=>S(x),className:`group p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${V?r?"bg-white/10 border-cyan-400/80 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-400/30":"bg-cyan-50/50 border-cyan-400 text-cyan-900 shadow-xs":r?"bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15 text-white":"bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-900 shadow-xs"}`,children:i.jsxs("div",{className:"grid grid-cols-12 w-full items-center gap-2",children:[i.jsxs("div",{className:"col-span-7 sm:col-span-6 flex items-center gap-3 min-w-0",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-xs",children:x.index.toString().padStart(2,"0")}),i.jsx("img",{src:x.thumbnail,alt:x.title,className:"w-12 h-8 rounded-lg object-cover border border-white/10 shrink-0 hidden sm:block",referrerPolicy:"no-referrer"}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h4",{className:`font-bold text-xs sm:text-sm truncate transition-colors ${V?"text-cyan-400":"group-hover:text-cyan-400"}`,children:x.title}),i.jsx("p",{className:`text-[11px] truncate ${r?"text-white/50":"text-neutral-500"}`,children:x.artist})]})]}),i.jsx("div",{className:"hidden sm:block sm:col-span-3",children:i.jsx("span",{className:`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${r?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-300 text-neutral-600"}`,children:x.category})}),i.jsx("div",{className:"col-span-3 sm:col-span-2",children:i.jsx("span",{className:"text-xs font-mono text-cyan-400 font-bold",children:x.duration})}),i.jsxs("div",{className:"col-span-2 sm:col-span-1 flex items-center justify-end gap-1",children:[i.jsx("button",{id:`list-lyrics-btn-${x.id}`,onClick:q=>{q.stopPropagation(),N(x)},className:`p-1.5 rounded-md transition-colors ${r?"text-white/50 hover:text-cyan-400 hover:bg-white/10":"text-neutral-500 hover:text-black hover:bg-neutral-200"}`,title:"View Full Lyrics","aria-label":`View lyrics for ${x.title}`,children:i.jsx(Ga,{className:"w-3.5 h-3.5"})}),i.jsx("button",{id:`list-share-btn-${x.id}`,onClick:q=>{q.stopPropagation(),Q(x)},className:`p-1.5 rounded-md transition-colors ${r?"text-white/50 hover:text-cyan-400 hover:bg-white/10":"text-neutral-500 hover:text-black hover:bg-neutral-200"}`,title:"Share Track","aria-label":`Share ${x.title}`,children:i.jsx(St,{className:"w-3.5 h-3.5"})})]})]})},`${x.id}-${x.index}`)})]}):i.jsxs("div",{id:"empty-tracks-state",className:`rounded-2xl border p-12 text-center my-6 backdrop-blur-md ${r?"bg-white/5 border-white/10":"bg-white border-neutral-200"}`,children:[i.jsx(Lr,{className:"w-10 h-10 mx-auto mb-3 text-cyan-400 opacity-80"}),i.jsx("h3",{className:"text-base font-bold",children:"No tracks matched your search"}),i.jsx("p",{className:`text-xs mt-1 max-w-sm mx-auto ${r?"text-white/50":"text-neutral-600"}`,children:'Try clearing your search query or selecting "All Tracks" to view the complete catalog.'}),i.jsx("button",{onClick:()=>{Ae(""),Oe("all"),_e("playlist")},className:"mt-4 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider transition-all",children:"Reset Filters"})]})]})}),(()=>{const x=v||(I==="suno"?H[0]:pt[0]);return x?i.jsx("aside",{className:`hidden xl:block ${F==="sm"?"xl:col-span-4 2xl:col-span-3":F==="md"?"xl:col-span-5 2xl:col-span-4":"xl:col-span-6"} sticky top-24 transition-all duration-300 flex justify-end`,children:i.jsxs("div",{id:"immersive-now-playing-stage",className:`w-full rounded-3xl border ${F==="sm"?"p-3.5 sm:p-4 max-w-[320px]":F==="md"?"p-4 sm:p-5 max-w-[400px]":"p-5 sm:p-6 max-w-[490px]"} ml-auto flex flex-col items-center justify-center backdrop-blur-xl transition-all shadow-2xl relative overflow-hidden ${r?"bg-black/60 border-white/10 text-white":"bg-white/95 border-neutral-200 text-neutral-900"}`,children:[i.jsx("div",{className:"absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/15 blur-[60px] rounded-full pointer-events-none animate-pulse"}),i.jsx("div",{className:"absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600/15 blur-[60px] rounded-full pointer-events-none"}),i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 w-full mb-3 z-20",children:[i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("span",{className:`w-2 h-2 rounded-full ${j?"bg-cyan-400 animate-ping":"bg-white/30"}`}),i.jsx("span",{className:"text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-cyan-400",children:j?"Live Stage":"Now Playing"})]}),i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsxs("div",{className:"flex items-center bg-black/50 p-0.5 rounded-xl border border-white/10 text-xs",children:[i.jsxs("button",{onClick:()=>U("video"),className:`px-2 py-1 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${G==="video"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/25":"text-white/60 hover:text-white"}`,title:"Watch Music Video",children:[i.jsx(to,{className:"w-3 h-3"}),i.jsx("span",{className:F==="sm"?"hidden sm:inline text-[11px]":"text-xs",children:"Video"})]}),i.jsxs("button",{onClick:()=>U("lyrics"),className:`px-2 py-1 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${G==="lyrics"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/25":"text-white/60 hover:text-white"}`,title:"View Full Lyrics",children:[i.jsx(Ga,{className:"w-3 h-3"}),i.jsx("span",{className:F==="sm"?"hidden sm:inline text-[11px]":"text-xs",children:"Lyrics"})]}),i.jsxs("button",{onClick:()=>U("artwork"),className:`px-2 py-1 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${G==="artwork"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/25":"text-white/60 hover:text-white"}`,title:"View Album Art",children:[i.jsx(Pn,{className:"w-3 h-3"}),i.jsx("span",{className:F==="sm"?"hidden sm:inline text-[11px]":"text-xs",children:"Art"})]})]}),i.jsxs("div",{className:"flex items-center bg-black/50 p-0.5 rounded-xl border border-white/10",title:"Adjust player size & right positioning",children:[i.jsx("button",{onClick:()=>P("sm"),className:`px-1.5 py-0.5 rounded-lg text-[10px] font-mono font-bold transition-all ${F==="sm"?"bg-cyan-500 text-black shadow-sm font-black":"text-white/50 hover:text-white"}`,title:"Compact (Smaller & further right)","aria-label":"Set player size to small",children:"S"}),i.jsx("button",{onClick:()=>P("md"),className:`px-1.5 py-0.5 rounded-lg text-[10px] font-mono font-bold transition-all ${F==="md"?"bg-cyan-500 text-black shadow-sm font-black":"text-white/50 hover:text-white"}`,title:"Medium player size","aria-label":"Set player size to medium",children:"M"}),i.jsx("button",{onClick:()=>P("lg"),className:`px-1.5 py-0.5 rounded-lg text-[10px] font-mono font-bold transition-all ${F==="lg"?"bg-cyan-500 text-black shadow-sm font-black":"text-white/50 hover:text-white"}`,title:"Large expanded player size","aria-label":"Set player size to large",children:"L"})]})]})]}),i.jsxs("div",{className:"relative w-full mb-3.5 z-10",children:[i.jsx("div",{className:G==="video"?"block":"hidden",children:i.jsx(Fg,{track:x,isPlaying:j&&(v==null?void 0:v.id)===x.id,onPlay:V=>{(v==null?void 0:v.id)===V.id?p(!0):S(V)},onPause:()=>p(!1),onEnded:()=>{const V=T,q=V.findIndex(Ce=>Ce.id===x.id);q!==-1&&q<V.length-1?S(V[q+1]):V.length>0&&S(V[0])},isDarkMode:r,size:F})}),G==="lyrics"&&i.jsx("div",{className:"w-full p-3.5 rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-md shadow-xl",children:i.jsx(Xr,{lyrics:Fr(x),title:x.title,artist:x.artist,isDarkMode:r,maxHeight:"max-h-[440px]"})}),G==="artwork"&&i.jsxs("div",{className:"relative w-full aspect-square group",children:[i.jsx("div",{className:"absolute inset-0 bg-cyan-500/20 blur-[50px] rounded-full animate-pulse pointer-events-none"}),i.jsxs("div",{className:"relative z-10 w-full h-full bg-gradient-to-br from-neutral-800 to-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center",children:[i.jsx("img",{src:x.thumbnail,alt:x.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),i.jsx("div",{className:"absolute bottom-3 right-3 text-2xl font-black text-white/25 font-mono tracking-widest pointer-events-none drop-shadow-md",children:"D-LY"}),i.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:i.jsx("button",{onClick:()=>{(v==null?void 0:v.id)===x.id?p(!j):S(x)},className:"w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-xl hover:scale-105 transition-transform","aria-label":"Toggle playback",children:j&&(v==null?void 0:v.id)===x.id?i.jsx(hn,{className:"w-6 h-6 fill-current"}):i.jsx(Ot,{className:"w-6 h-6 fill-current translate-x-0.5"})})})]})]})]}),i.jsxs("div",{className:"text-center w-full z-10",children:[i.jsx("h2",{className:`${F==="sm"?"text-base font-extrabold":"text-xl font-black"} mb-1 tracking-tight truncate hover:text-cyan-400 transition-colors`,title:x.title,children:x.title}),i.jsxs("p",{className:`text-cyan-400 ${F==="sm"?"text-[10px]":"text-xs"} font-bold tracking-widest uppercase mb-2.5`,children:[j&&(v==null?void 0:v.id)===x.id?"Now Playing":"Selected Track"," • #",x.index.toString().padStart(2,"0")]}),i.jsxs("div",{className:`flex gap-1 justify-center items-end ${F==="sm"?"h-5 mb-3":"h-7 mb-4"}`,children:[i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${j&&(v==null?void 0:v.id)===x.id?"h-[60%] animate-eq-1":"h-[25%]"}`}),i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${j&&(v==null?void 0:v.id)===x.id?"h-[90%] animate-eq-2":"h-[40%]"}`}),i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${j&&(v==null?void 0:v.id)===x.id?"h-[40%] animate-eq-3":"h-[20%]"}`}),i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${j&&(v==null?void 0:v.id)===x.id?"h-[70%] animate-eq-4":"h-[35%]"}`}),i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${j&&(v==null?void 0:v.id)===x.id?"h-[30%] animate-eq-2":"h-[15%]"}`})]}),i.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-1.5 sm:gap-2",children:[i.jsxs("button",{onClick:()=>N(x),className:`px-3 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black ${F==="sm"?"text-[11px]":"text-xs"} font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all active:scale-95`,title:"View Full Lyrics in Modal",children:[i.jsx(Ga,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Lyrics"})]}),i.jsxs("button",{onClick:()=>Q(x),className:`px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 ${F==="sm"?"text-[11px]":"text-xs"} font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all`,children:[i.jsx(St,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Share"})]}),i.jsxs("button",{onClick:()=>Pe(x),className:`px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 ${F==="sm"?"text-[11px]":"text-xs"} font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all`,children:[i.jsx(Lr,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"Story"})]})]})]})]})}):null})()]}),i.jsx(Wg,{isDarkMode:r})]}),i.jsx(Vg,{currentTrack:v,playlist:T,allPlaylists:{youtube:h.length>0?h:pt,suno:H},onSwitchPlaylist:x=>{d(x),x==="suno"&&rt.length>0?R(rt[0]):x==="youtube"&&pt.length>0&&S(pt[0])},currentPlaylistType:v!=null&&v.isSuno?"suno":"youtube",onTrackChange:x=>{if(C(x),p(!0),x.isSuno){const V=rt.find(q=>q.id===x.id);V&&(Ne(V),Ve(!0))}else Ve(!1)},onOpenShare:x=>Q(x),onOpenLyrics:x=>N(x),disableInternalPlayback:z,isDarkMode:r,isPlaying:j,setIsPlaying:x=>{p(x),v!=null&&v.isSuno&&Ve(x)}}),i.jsx(_g,{track:le,isOpen:!!le,onClose:()=>Q(null),isDarkMode:r}),i.jsx(Og,{track:Me,isOpen:!!Me,onClose:()=>Pe(null),isPlaying:j,isCurrentTrack:(v==null?void 0:v.id)===(Me==null?void 0:Me.id),onPlay:S,onOpenShare:x=>Q(x),isDarkMode:r}),i.jsx(Hg,{track:He,isOpen:!!He,onClose:()=>N(null),isDarkMode:r,isPlaying:j,isCurrentTrack:(v==null?void 0:v.id)===(He==null?void 0:He.id),onPlay:S,onOpenShare:x=>Q(x)})]})}typeof window<"u"&&(window.addEventListener("error",r=>{if(!r.message||r.message==="Script error."||r.filename&&(r.filename.includes("youtube.com")||r.filename.includes("suno.ai")))return r.preventDefault(),!0}),window.addEventListener("unhandledrejection",r=>{var b,I;if(r.reason){const d=((b=r.reason)==null?void 0:b.name)||"",z=String(((I=r.reason)==null?void 0:I.message)||r.reason||"");if(d==="AbortError"||d==="NotAllowedError"||z.includes("play()")||z.includes("interact")){r.preventDefault();return}}r.reason||r.preventDefault()}));Hy.createRoot(document.getElementById("root")).render(i.jsx(O.StrictMode,{children:i.jsx(Xg,{})}));
