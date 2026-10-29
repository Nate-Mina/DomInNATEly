(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))d(O);new MutationObserver(O=>{for(const H of O)if(H.type==="childList")for(const b of H.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&d(b)}).observe(document,{childList:!0,subtree:!0});function I(O){const H={};return O.integrity&&(H.integrity=O.integrity),O.referrerPolicy&&(H.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?H.credentials="include":O.crossOrigin==="anonymous"?H.credentials="omit":H.credentials="same-origin",H}function d(O){if(O.ep)return;O.ep=!0;const H=I(O);fetch(O.href,H)}})();var Dr={exports:{}},no={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function Yy(){if(Zh)return no;Zh=1;var r=Symbol.for("react.transitional.element"),x=Symbol.for("react.fragment");function I(d,O,H){var b=null;if(H!==void 0&&(b=""+H),O.key!==void 0&&(b=""+O.key),"key"in O){H={};for(var _ in O)_!=="key"&&(H[_]=O[_])}else H=O;return O=H.ref,{$$typeof:r,type:d,key:b,ref:O!==void 0?O:null,props:H}}return no.Fragment=x,no.jsx=I,no.jsxs=I,no}var Kh;function By(){return Kh||(Kh=1,Dr.exports=Yy()),Dr.exports}var i=By(),qr={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function My(){if(Jh)return ie;Jh=1;var r=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),b=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),V=Symbol.for("react.activity"),R=Symbol.iterator;function J(h){return h===null||typeof h!="object"?null:(h=R&&h[R]||h["@@iterator"],typeof h=="function"?h:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,be={};function ze(h,S,y){this.props=h,this.context=S,this.refs=be,this.updater=y||le}ze.prototype.isReactComponent={},ze.prototype.setState=function(h,S){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,S,"setState")},ze.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function Ue(){}Ue.prototype=ze.prototype;function re(h,S,y){this.props=h,this.context=S,this.refs=be,this.updater=y||le}var Ve=re.prototype=new Ue;Ve.constructor=re,D(Ve,ze.prototype),Ve.isPureReactComponent=!0;var Be=Array.isArray;function we(){}var $={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function He(h,S,y){var B=y.ref;return{$$typeof:r,type:h,key:S,ref:B!==void 0?B:null,props:y}}function Q(h,S){return He(h.type,S,h.props)}function Z(h){return typeof h=="object"&&h!==null&&h.$$typeof===r}function X(h){var S={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(y){return S[y]})}var at=/\/+/g;function nt(h,S){return typeof h=="object"&&h!==null&&h.key!=null?X(""+h.key):S.toString(36)}function qe(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(we,we):(h.status="pending",h.then(function(S){h.status==="pending"&&(h.status="fulfilled",h.value=S)},function(S){h.status==="pending"&&(h.status="rejected",h.reason=S)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function j(h,S,y,B,q){var ne=typeof h;(ne==="undefined"||ne==="boolean")&&(h=null);var oe=!1;if(h===null)oe=!0;else switch(ne){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(h.$$typeof){case r:case x:oe=!0;break;case G:return oe=h._init,j(oe(h._payload),S,y,B,q)}}if(oe)return q=q(h),oe=B===""?"."+nt(h,0):B,Be(q)?(y="",oe!=null&&(y=oe.replace(at,"$&/")+"/"),j(q,S,y,"",function(Tt){return Tt})):q!=null&&(Z(q)&&(q=Q(q,y+(q.key==null||h&&h.key===q.key?"":(""+q.key).replace(at,"$&/")+"/")+oe)),S.push(q)),1;oe=0;var Ge=B===""?".":B+":";if(Be(h))for(var Ne=0;Ne<h.length;Ne++)B=h[Ne],ne=Ge+nt(B,Ne),oe+=j(B,S,y,ne,q);else if(Ne=J(h),typeof Ne=="function")for(h=Ne.call(h),Ne=0;!(B=h.next()).done;)B=B.value,ne=Ge+nt(B,Ne++),oe+=j(B,S,y,ne,q);else if(ne==="object"){if(typeof h.then=="function")return j(qe(h),S,y,B,q);throw S=String(h),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return oe}function C(h,S,y){if(h==null)return h;var B=[],q=0;return j(h,B,"","",function(ne){return S.call(y,ne,q++)}),B}function L(h){if(h._status===-1){var S=h._result;S=S(),S.then(function(y){(h._status===0||h._status===-1)&&(h._status=1,h._result=y)},function(y){(h._status===0||h._status===-1)&&(h._status=2,h._result=y)}),h._status===-1&&(h._status=0,h._result=S)}if(h._status===1)return h._result.default;throw h._result}var te=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},ae={map:C,forEach:function(h,S,y){C(h,function(){S.apply(this,arguments)},y)},count:function(h){var S=0;return C(h,function(){S++}),S},toArray:function(h){return C(h,function(S){return S})||[]},only:function(h){if(!Z(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return ie.Activity=V,ie.Children=ae,ie.Component=ze,ie.Fragment=I,ie.Profiler=O,ie.PureComponent=re,ie.StrictMode=d,ie.Suspense=N,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,ie.__COMPILER_RUNTIME={__proto__:null,c:function(h){return $.H.useMemoCache(h)}},ie.cache=function(h){return function(){return h.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(h,S,y){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var B=D({},h.props),q=h.key;if(S!=null)for(ne in S.key!==void 0&&(q=""+S.key),S)!ce.call(S,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&S.ref===void 0||(B[ne]=S[ne]);var ne=arguments.length-2;if(ne===1)B.children=y;else if(1<ne){for(var oe=Array(ne),Ge=0;Ge<ne;Ge++)oe[Ge]=arguments[Ge+2];B.children=oe}return He(h.type,q,B)},ie.createContext=function(h){return h={$$typeof:b,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:H,_context:h},h},ie.createElement=function(h,S,y){var B,q={},ne=null;if(S!=null)for(B in S.key!==void 0&&(ne=""+S.key),S)ce.call(S,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(q[B]=S[B]);var oe=arguments.length-2;if(oe===1)q.children=y;else if(1<oe){for(var Ge=Array(oe),Ne=0;Ne<oe;Ne++)Ge[Ne]=arguments[Ne+2];q.children=Ge}if(h&&h.defaultProps)for(B in oe=h.defaultProps,oe)q[B]===void 0&&(q[B]=oe[B]);return He(h,ne,q)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(h){return{$$typeof:_,render:h}},ie.isValidElement=Z,ie.lazy=function(h){return{$$typeof:G,_payload:{_status:-1,_result:h},_init:L}},ie.memo=function(h,S){return{$$typeof:v,type:h,compare:S===void 0?null:S}},ie.startTransition=function(h){var S=$.T,y={};$.T=y;try{var B=h(),q=$.S;q!==null&&q(y,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(we,te)}catch(ne){te(ne)}finally{S!==null&&y.types!==null&&(S.types=y.types),$.T=S}},ie.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},ie.use=function(h){return $.H.use(h)},ie.useActionState=function(h,S,y){return $.H.useActionState(h,S,y)},ie.useCallback=function(h,S){return $.H.useCallback(h,S)},ie.useContext=function(h){return $.H.useContext(h)},ie.useDebugValue=function(){},ie.useDeferredValue=function(h,S){return $.H.useDeferredValue(h,S)},ie.useEffect=function(h,S){return $.H.useEffect(h,S)},ie.useEffectEvent=function(h){return $.H.useEffectEvent(h)},ie.useId=function(){return $.H.useId()},ie.useImperativeHandle=function(h,S,y){return $.H.useImperativeHandle(h,S,y)},ie.useInsertionEffect=function(h,S){return $.H.useInsertionEffect(h,S)},ie.useLayoutEffect=function(h,S){return $.H.useLayoutEffect(h,S)},ie.useMemo=function(h,S){return $.H.useMemo(h,S)},ie.useOptimistic=function(h,S){return $.H.useOptimistic(h,S)},ie.useReducer=function(h,S,y){return $.H.useReducer(h,S,y)},ie.useRef=function(h){return $.H.useRef(h)},ie.useState=function(h){return $.H.useState(h)},ie.useSyncExternalStore=function(h,S,y){return $.H.useSyncExternalStore(h,S,y)},ie.useTransition=function(){return $.H.useTransition()},ie.version="19.2.8",ie}var $h;function Zr(){return $h||($h=1,qr.exports=My()),qr.exports}var E=Zr(),Lr={exports:{}},lo={},Gr={exports:{}},Xr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function Cy(){return Ph||(Ph=1,(function(r){function x(j,C){var L=j.length;j.push(C);e:for(;0<L;){var te=L-1>>>1,ae=j[te];if(0<O(ae,C))j[te]=C,j[L]=ae,L=te;else break e}}function I(j){return j.length===0?null:j[0]}function d(j){if(j.length===0)return null;var C=j[0],L=j.pop();if(L!==C){j[0]=L;e:for(var te=0,ae=j.length,h=ae>>>1;te<h;){var S=2*(te+1)-1,y=j[S],B=S+1,q=j[B];if(0>O(y,L))B<ae&&0>O(q,y)?(j[te]=q,j[B]=L,te=B):(j[te]=y,j[S]=L,te=S);else if(B<ae&&0>O(q,L))j[te]=q,j[B]=L,te=B;else break e}}return C}function O(j,C){var L=j.sortIndex-C.sortIndex;return L!==0?L:j.id-C.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var H=performance;r.unstable_now=function(){return H.now()}}else{var b=Date,_=b.now();r.unstable_now=function(){return b.now()-_}}var N=[],v=[],G=1,V=null,R=3,J=!1,le=!1,D=!1,be=!1,ze=typeof setTimeout=="function"?setTimeout:null,Ue=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function Ve(j){for(var C=I(v);C!==null;){if(C.callback===null)d(v);else if(C.startTime<=j)d(v),C.sortIndex=C.expirationTime,x(N,C);else break;C=I(v)}}function Be(j){if(D=!1,Ve(j),!le)if(I(N)!==null)le=!0,we||(we=!0,X());else{var C=I(v);C!==null&&qe(Be,C.startTime-j)}}var we=!1,$=-1,ce=5,He=-1;function Q(){return be?!0:!(r.unstable_now()-He<ce)}function Z(){if(be=!1,we){var j=r.unstable_now();He=j;var C=!0;try{e:{le=!1,D&&(D=!1,Ue($),$=-1),J=!0;var L=R;try{t:{for(Ve(j),V=I(N);V!==null&&!(V.expirationTime>j&&Q());){var te=V.callback;if(typeof te=="function"){V.callback=null,R=V.priorityLevel;var ae=te(V.expirationTime<=j);if(j=r.unstable_now(),typeof ae=="function"){V.callback=ae,Ve(j),C=!0;break t}V===I(N)&&d(N),Ve(j)}else d(N);V=I(N)}if(V!==null)C=!0;else{var h=I(v);h!==null&&qe(Be,h.startTime-j),C=!1}}break e}finally{V=null,R=L,J=!1}C=void 0}}finally{C?X():we=!1}}}var X;if(typeof re=="function")X=function(){re(Z)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,nt=at.port2;at.port1.onmessage=Z,X=function(){nt.postMessage(null)}}else X=function(){ze(Z,0)};function qe(j,C){$=ze(function(){j(r.unstable_now())},C)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_next=function(j){switch(R){case 1:case 2:case 3:var C=3;break;default:C=R}var L=R;R=C;try{return j()}finally{R=L}},r.unstable_requestPaint=function(){be=!0},r.unstable_runWithPriority=function(j,C){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var L=R;R=j;try{return C()}finally{R=L}},r.unstable_scheduleCallback=function(j,C,L){var te=r.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?te+L:te):L=te,j){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=L+ae,j={id:G++,callback:C,priorityLevel:j,startTime:L,expirationTime:ae,sortIndex:-1},L>te?(j.sortIndex=L,x(v,j),I(N)===null&&j===I(v)&&(D?(Ue($),$=-1):D=!0,qe(Be,L-te))):(j.sortIndex=ae,x(N,j),le||J||(le=!0,we||(we=!0,X()))),j},r.unstable_shouldYield=Q,r.unstable_wrapCallback=function(j){var C=R;return function(){var L=R;R=C;try{return j.apply(this,arguments)}finally{R=L}}}})(Xr)),Xr}var ef;function zy(){return ef||(ef=1,Gr.exports=Cy()),Gr.exports}var Wr={exports:{}},gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf;function Uy(){if(tf)return gt;tf=1;var r=Zr();function x(N){var v="https://react.dev/errors/"+N;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var G=2;G<arguments.length;G++)v+="&args[]="+encodeURIComponent(arguments[G])}return"Minified React error #"+N+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function I(){}var d={d:{f:I,r:function(){throw Error(x(522))},D:I,C:I,L:I,m:I,X:I,S:I,M:I},p:0,findDOMNode:null},O=Symbol.for("react.portal");function H(N,v,G){var V=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:V==null?null:""+V,children:N,containerInfo:v,implementation:G}}var b=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(N,v){if(N==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,gt.createPortal=function(N,v){var G=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(x(299));return H(N,v,null,G)},gt.flushSync=function(N){var v=b.T,G=d.p;try{if(b.T=null,d.p=2,N)return N()}finally{b.T=v,d.p=G,d.d.f()}},gt.preconnect=function(N,v){typeof N=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,d.d.C(N,v))},gt.prefetchDNS=function(N){typeof N=="string"&&d.d.D(N)},gt.preinit=function(N,v){if(typeof N=="string"&&v&&typeof v.as=="string"){var G=v.as,V=_(G,v.crossOrigin),R=typeof v.integrity=="string"?v.integrity:void 0,J=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;G==="style"?d.d.S(N,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:V,integrity:R,fetchPriority:J}):G==="script"&&d.d.X(N,{crossOrigin:V,integrity:R,fetchPriority:J,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},gt.preinitModule=function(N,v){if(typeof N=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var G=_(v.as,v.crossOrigin);d.d.M(N,{crossOrigin:G,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&d.d.M(N)},gt.preload=function(N,v){if(typeof N=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var G=v.as,V=_(G,v.crossOrigin);d.d.L(N,G,{crossOrigin:V,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},gt.preloadModule=function(N,v){if(typeof N=="string")if(v){var G=_(v.as,v.crossOrigin);d.d.m(N,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:G,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else d.d.m(N)},gt.requestFormReset=function(N){d.d.r(N)},gt.unstable_batchedUpdates=function(N,v){return N(v)},gt.useFormState=function(N,v,G){return b.H.useFormState(N,v,G)},gt.useFormStatus=function(){return b.H.useHostTransitionStatus()},gt.version="19.2.8",gt}var af;function Vy(){if(af)return Wr.exports;af=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(x){console.error(x)}}return r(),Wr.exports=Uy(),Wr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function _y(){if(nf)return lo;nf=1;var r=zy(),x=Zr(),I=Vy();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function H(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function N(e){if(H(e)!==e)throw Error(d(188))}function v(e){var t=e.alternate;if(!t){if(t=H(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var o=l.alternate;if(o===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===a)return N(l),e;if(o===n)return N(l),t;o=o.sibling}throw Error(d(188))}if(a.return!==n.return)a=l,n=o;else{for(var s=!1,u=l.child;u;){if(u===a){s=!0,a=l,n=o;break}if(u===n){s=!0,n=l,a=o;break}u=u.sibling}if(!s){for(u=o.child;u;){if(u===a){s=!0,a=o,n=l;break}if(u===n){s=!0,n=o,a=l;break}u=u.sibling}if(!s)throw Error(d(189))}}if(a.alternate!==n)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function G(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=G(e),t!==null)return t;e=e.sibling}return null}var V=Object.assign,R=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),le=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),Ue=Symbol.for("react.consumer"),re=Symbol.for("react.context"),Ve=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),He=Symbol.for("react.activity"),Q=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case ze:return"Profiler";case be:return"StrictMode";case Be:return"Suspense";case we:return"SuspenseList";case He:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case le:return"Portal";case re:return e.displayName||"Context";case Ue:return(e._context.displayName||"Context")+".Consumer";case Ve:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:nt(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return nt(e(t))}catch{}}return null}var qe=Array.isArray,j=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=I.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},te=[],ae=-1;function h(e){return{current:e}}function S(e){0>ae||(e.current=te[ae],te[ae]=null,ae--)}function y(e,t){ae++,te[ae]=e.current,e.current=t}var B=h(null),q=h(null),ne=h(null),oe=h(null);function Ge(e,t){switch(y(ne,t),y(q,e),y(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bh(t),e=wh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(B),y(B,e)}function Ne(){S(B),S(q),S(ne)}function Tt(e){e.memoizedState!==null&&y(oe,e);var t=B.current,a=wh(t,e.type);t!==a&&(y(q,e),y(B,a))}function sa(e){q.current===e&&(S(B),S(q)),oe.current===e&&(S(oe),Pl._currentValue=L)}var Re,_t;function Me(e){if(Re===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Re=t&&t[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Re+e+_t}var ra=!1;function Kt(e,t){if(!e||ra)return"";ra=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(k){var w=k}Reflect.construct(e,[],M)}else{try{M.call()}catch(k){w=k}e.call(M.prototype)}}else{try{throw Error()}catch(k){w=k}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(k){if(k&&w&&typeof k.stack=="string")return[k.stack,w.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),s=o[0],u=o[1];if(s&&u){var c=s.split(`
`),p=u.split(`
`);for(l=n=0;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;for(;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;if(n===c.length||l===p.length)for(n=c.length-1,l=p.length-1;1<=n&&0<=l&&c[n]!==p[l];)l--;for(;1<=n&&0<=l;n--,l--)if(c[n]!==p[l]){if(n!==1||l!==1)do if(n--,l--,0>l||c[n]!==p[l]){var A=`
`+c[n].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=n&&0<=l);break}}}finally{ra=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Me(a):""}function ln(e,t){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me("Lazy");case 13:return e.child!==t&&t!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return Kt(e.type,!1);case 11:return Kt(e.type.render,!1);case 1:return Kt(e.type,!0);case 31:return Me("Activity");default:return""}}function Y(e){try{var t="",a=null;do t+=ln(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var K=Object.prototype.hasOwnProperty,pe=r.unstable_scheduleCallback,Jt=r.unstable_cancelCallback,Je=r.unstable_shouldYield,so=r.unstable_requestPaint,ft=r.unstable_now,on=r.unstable_getCurrentPriorityLevel,In=r.unstable_ImmediatePriority,An=r.unstable_UserBlockingPriority,Ya=r.unstable_NormalPriority,Ai=r.unstable_LowPriority,ro=r.unstable_IdlePriority,Si=r.log,uo=r.unstable_setDisableYieldValue,Ba=null,mt=null;function Ot(e){if(typeof Si=="function"&&uo(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Ba,e)}catch{}}var ot=Math.clz32?Math.clz32:U,Ti=Math.log,Ei=Math.LN2;function U(e){return e>>>=0,e===0?32:31-(Ti(e)/Ei|0)|0}var z=256,de=262144,Se=4194304;function yt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $t(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var u=n&134217727;return u!==0?(n=u&~o,n!==0?l=yt(n):(s&=u,s!==0?l=yt(s):a||(a=u&~e,a!==0&&(l=yt(a))))):(u=n&~o,u!==0?l=yt(u):s!==0?l=yt(s):a||(a=n&~e,a!==0&&(l=yt(a)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:l}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ht(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fl(){var e=Se;return Se<<=1,(Se&62914560)===0&&(Se=4194304),e}function Sn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ua(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pr(e,t,a,n,l,o){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,c=e.expirationTimes,p=e.hiddenUpdates;for(a=s&~a;0<a;){var A=31-ot(a),M=1<<A;u[A]=0,c[A]=-1;var w=p[A];if(w!==null)for(p[A]=null,A=0;A<w.length;A++){var k=w[A];k!==null&&(k.lane&=-536870913)}a&=~M}n!==0&&eu(e,n,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~t))}function eu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ot(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function tu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-ot(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function au(e,t){var a=t&-t;return a=(a&42)!==0?1:Yi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Yi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nu(){var e=C.p;return e!==0?e:(e=window.event,e===void 0?32:qh(e.type))}function lu(e,t){var a=C.p;try{return C.p=e,t()}finally{C.p=a}}var Ma=Math.random().toString(36).slice(2),rt="__reactFiber$"+Ma,vt="__reactProps$"+Ma,Tn="__reactContainer$"+Ma,Mi="__reactEvents$"+Ma,wf="__reactListeners$"+Ma,vf="__reactHandles$"+Ma,ou="__reactResources$"+Ma,ml="__reactMarker$"+Ma;function Ci(e){delete e[rt],delete e[vt],delete e[Mi],delete e[wf],delete e[vf]}function En(e){var t=e[rt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Tn]||a[rt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ah(e);e!==null;){if(a=e[rt])return a;e=Ah(e)}return t}e=a,a=e.parentNode}return null}function Yn(e){if(e=e[rt]||e[Tn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Bn(e){var t=e[ou];return t||(t=e[ou]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function it(e){e[ml]=!0}var iu=new Set,su={};function sn(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for(su[e]=t,e=0;e<t.length;e++)iu.add(t[e])}var xf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ru={},uu={};function kf(e){return K.call(uu,e)?!0:K.call(ru,e)?!1:xf.test(e)?uu[e]=!0:(ru[e]=!0,!1)}function co(e,t,a){if(kf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ho(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ca(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jf(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zi(e){if(!e._valueTracker){var t=cu(e)?"checked":"value";e._valueTracker=jf(e,t,""+e[t])}}function du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=cu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nf=/[\n"\\]/g;function Dt(e){return e.replace(Nf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ui(e,t,a,n,l,o,s,u){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Rt(t)):e.value!==""+Rt(t)&&(e.value=""+Rt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Vi(e,s,Rt(t)):a!=null?Vi(e,s,Rt(a)):n!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Rt(u):e.removeAttribute("name")}function hu(e,t,a,n,l,o,s,u){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){zi(e);return}a=a!=null?""+Rt(a):"",t=t!=null?""+Rt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=u?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),zi(e)}function Vi(e,t,a){t==="number"&&fo(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Cn(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Rt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function fu(e,t,a){if(t!=null&&(t=""+Rt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Rt(a):""}function mu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(d(92));if(qe(n)){if(1<n.length)throw Error(d(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Rt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),zi(e)}function zn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var If=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||If.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function gu(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&yu(e,l,n)}else for(var o in t)t.hasOwnProperty(o)&&yu(e,o,t[o])}function _i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Af=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mo(e){return Sf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function da(){}var Oi=null;function Hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Un=null,Vn=null;function pu(e){var t=Yn(e);if(t&&(e=t.stateNode)){var a=e[vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ui(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Dt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[vt]||null;if(!l)throw Error(d(90));Ui(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&du(n)}break e;case"textarea":fu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Cn(e,!!a.multiple,t,!1)}}}var Ri=!1;function bu(e,t,a){if(Ri)return e(t,a);Ri=!0;try{var n=e(t);return n}finally{if(Ri=!1,(Un!==null||Vn!==null)&&(ti(),Un&&(t=Un,e=Vn,Vn=Un=null,pu(t),e)))for(t=0;t<e.length;t++)pu(e[t])}}function gl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[vt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Di=!1;if(ha)try{var pl={};Object.defineProperty(pl,"passive",{get:function(){Di=!0}}),window.addEventListener("test",pl,pl),window.removeEventListener("test",pl,pl)}catch{Di=!1}var Ca=null,qi=null,yo=null;function wu(){if(yo)return yo;var e,t=qi,a=t.length,n,l="value"in Ca?Ca.value:Ca.textContent,o=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[o-n];n++);return yo=l.slice(e,1<n?1-n:void 0)}function go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function vu(){return!1}function xt(e){function t(a,n,l,o,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?po:vu,this.isPropagationStopped=vu,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=xt(rn),bl=V({},rn,{view:0,detail:0}),Tf=xt(bl),Li,Gi,wl,wo=V({},bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wl&&(wl&&e.type==="mousemove"?(Li=e.screenX-wl.screenX,Gi=e.screenY-wl.screenY):Gi=Li=0,wl=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Gi}}),xu=xt(wo),Ef=V({},wo,{dataTransfer:0}),Yf=xt(Ef),Bf=V({},bl,{relatedTarget:0}),Xi=xt(Bf),Mf=V({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cf=xt(Mf),zf=V({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uf=xt(zf),Vf=V({},rn,{data:0}),ku=xt(Vf),_f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Of={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hf[e])?!!t[e]:!1}function Wi(){return Rf}var Df=V({},bl,{key:function(e){if(e.key){var t=_f[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Of[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wi,charCode:function(e){return e.type==="keypress"?go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qf=xt(Df),Lf=V({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ju=xt(Lf),Gf=V({},bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wi}),Xf=xt(Gf),Wf=V({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qf=xt(Wf),Ff=V({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zf=xt(Ff),Kf=V({},rn,{newState:0,oldState:0}),Jf=xt(Kf),$f=[9,13,27,32],Qi=ha&&"CompositionEvent"in window,vl=null;ha&&"documentMode"in document&&(vl=document.documentMode);var Pf=ha&&"TextEvent"in window&&!vl,Nu=ha&&(!Qi||vl&&8<vl&&11>=vl),Iu=" ",Au=!1;function Su(e,t){switch(e){case"keyup":return $f.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function em(e,t){switch(e){case"compositionend":return Tu(t);case"keypress":return t.which!==32?null:(Au=!0,Iu);case"textInput":return e=t.data,e===Iu&&Au?null:e;default:return null}}function tm(e,t){if(_n)return e==="compositionend"||!Qi&&Su(e,t)?(e=wu(),yo=qi=Ca=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nu&&t.locale!=="ko"?null:t.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!am[e.type]:t==="textarea"}function Yu(e,t,a,n){Un?Vn?Vn.push(n):Vn=[n]:Un=n,t=ri(t,"onChange"),0<t.length&&(a=new bo("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var xl=null,kl=null;function nm(e){hh(e,0)}function vo(e){var t=yl(e);if(du(t))return e}function Bu(e,t){if(e==="change")return t}var Mu=!1;if(ha){var Fi;if(ha){var Zi="oninput"in document;if(!Zi){var Cu=document.createElement("div");Cu.setAttribute("oninput","return;"),Zi=typeof Cu.oninput=="function"}Fi=Zi}else Fi=!1;Mu=Fi&&(!document.documentMode||9<document.documentMode)}function zu(){xl&&(xl.detachEvent("onpropertychange",Uu),kl=xl=null)}function Uu(e){if(e.propertyName==="value"&&vo(kl)){var t=[];Yu(t,kl,e,Hi(e)),bu(nm,t)}}function lm(e,t,a){e==="focusin"?(zu(),xl=t,kl=a,xl.attachEvent("onpropertychange",Uu)):e==="focusout"&&zu()}function om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vo(kl)}function im(e,t){if(e==="click")return vo(t)}function sm(e,t){if(e==="input"||e==="change")return vo(t)}function rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:rm;function jl(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!K.call(t,l)||!Et(e[l],t[l]))return!1}return!0}function Vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _u(e,t){var a=Vu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vu(a)}}function Ou(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ou(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=fo(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=fo(e.document)}return t}function Ki(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var um=ha&&"documentMode"in document&&11>=document.documentMode,On=null,Ji=null,Nl=null,$i=!1;function Ru(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$i||On==null||On!==fo(n)||(n=On,"selectionStart"in n&&Ki(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Nl&&jl(Nl,n)||(Nl=n,n=ri(Ji,"onSelect"),0<n.length&&(t=new bo("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=On)))}function un(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Hn={animationend:un("Animation","AnimationEnd"),animationiteration:un("Animation","AnimationIteration"),animationstart:un("Animation","AnimationStart"),transitionrun:un("Transition","TransitionRun"),transitionstart:un("Transition","TransitionStart"),transitioncancel:un("Transition","TransitionCancel"),transitionend:un("Transition","TransitionEnd")},Pi={},Du={};ha&&(Du=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function cn(e){if(Pi[e])return Pi[e];if(!Hn[e])return e;var t=Hn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Du)return Pi[e]=t[a];return e}var qu=cn("animationend"),Lu=cn("animationiteration"),Gu=cn("animationstart"),cm=cn("transitionrun"),dm=cn("transitionstart"),hm=cn("transitioncancel"),Xu=cn("transitionend"),Wu=new Map,es="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");es.push("scrollEnd");function Pt(e,t){Wu.set(e,t),sn(t,[e])}var xo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qt=[],Rn=0,ts=0;function ko(){for(var e=Rn,t=ts=Rn=0;t<e;){var a=qt[t];qt[t++]=null;var n=qt[t];qt[t++]=null;var l=qt[t];qt[t++]=null;var o=qt[t];if(qt[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}o!==0&&Qu(a,l,o)}}function jo(e,t,a,n){qt[Rn++]=e,qt[Rn++]=t,qt[Rn++]=a,qt[Rn++]=n,ts|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function as(e,t,a,n){return jo(e,t,a,n),No(e)}function dn(e,t){return jo(e,null,null,t),No(e)}function Qu(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-ot(a),e=o.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),o):null}function No(e){if(50<Wl)throw Wl=0,dr=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Dn={};function fm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(e,t,a,n){return new fm(e,t,a,n)}function ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fa(e,t){var a=e.alternate;return a===null?(a=Yt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Fu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Io(e,t,a,n,l,o){var s=0;if(n=e,typeof e=="function")ns(e)&&(s=1);else if(typeof e=="string")s=by(e,a,B.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case He:return e=Yt(31,a,t,l),e.elementType=He,e.lanes=o,e;case D:return hn(a.children,l,o,t);case be:s=8,l|=24;break;case ze:return e=Yt(12,a,t,l|2),e.elementType=ze,e.lanes=o,e;case Be:return e=Yt(13,a,t,l),e.elementType=Be,e.lanes=o,e;case we:return e=Yt(19,a,t,l),e.elementType=we,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case re:s=10;break e;case Ue:s=9;break e;case Ve:s=11;break e;case $:s=14;break e;case ce:s=16,n=null;break e}s=29,a=Error(d(130,e===null?"null":typeof e,"")),n=null}return t=Yt(s,a,t,l),t.elementType=e,t.type=n,t.lanes=o,t}function hn(e,t,a,n){return e=Yt(7,e,n,t),e.lanes=a,e}function ls(e,t,a){return e=Yt(6,e,null,t),e.lanes=a,e}function Zu(e){var t=Yt(18,null,null,0);return t.stateNode=e,t}function os(e,t,a){return t=Yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ku=new WeakMap;function Lt(e,t){if(typeof e=="object"&&e!==null){var a=Ku.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Y(t)},Ku.set(e,t),t)}return{value:e,source:t,stack:Y(t)}}var qn=[],Ln=0,Ao=null,Il=0,Gt=[],Xt=0,za=null,na=1,la="";function ma(e,t){qn[Ln++]=Il,qn[Ln++]=Ao,Ao=e,Il=t}function Ju(e,t,a){Gt[Xt++]=na,Gt[Xt++]=la,Gt[Xt++]=za,za=e;var n=na;e=la;var l=32-ot(n)-1;n&=~(1<<l),a+=1;var o=32-ot(t)+l;if(30<o){var s=l-l%5;o=(n&(1<<s)-1).toString(32),n>>=s,l-=s,na=1<<32-ot(t)+l|a<<l|n,la=o+e}else na=1<<o|a<<l|n,la=e}function is(e){e.return!==null&&(ma(e,1),Ju(e,1,0))}function ss(e){for(;e===Ao;)Ao=qn[--Ln],qn[Ln]=null,Il=qn[--Ln],qn[Ln]=null;for(;e===za;)za=Gt[--Xt],Gt[Xt]=null,la=Gt[--Xt],Gt[Xt]=null,na=Gt[--Xt],Gt[Xt]=null}function $u(e,t){Gt[Xt++]=na,Gt[Xt++]=la,Gt[Xt++]=za,na=t.id,la=t.overflow,za=e}var ut=null,_e=null,ge=!1,Ua=null,Wt=!1,rs=Error(d(519));function Va(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Al(Lt(t,e)),rs}function Pu(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[rt]=e,t[vt]=n,a){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(a=0;a<Fl.length;a++)fe(Fl[a],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),hu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),mu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||gh(t.textContent,a)?(n.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),n.onScroll!=null&&fe("scroll",t),n.onScrollEnd!=null&&fe("scrollend",t),n.onClick!=null&&(t.onclick=da),t=!0):t=!1,t||Va(e,!0)}function ec(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:ut=ut.return}}function Gn(e){if(e!==ut)return!1;if(!ge)return ec(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ar(e.type,e.memoizedProps)),a=!a),a&&_e&&Va(e),ec(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));_e=Ih(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));_e=Ih(e)}else t===27?(t=_e,Ka(e.type)?(e=Br,Br=null,_e=e):_e=t):_e=ut?Ft(e.stateNode.nextSibling):null;return!0}function fn(){_e=ut=null,ge=!1}function us(){var e=Ua;return e!==null&&(It===null?It=e:It.push.apply(It,e),Ua=null),e}function Al(e){Ua===null?Ua=[e]:Ua.push(e)}var cs=h(null),mn=null,ya=null;function _a(e,t,a){y(cs,t._currentValue),t._currentValue=a}function ga(e){e._currentValue=cs.current,S(cs)}function ds(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function hs(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var s=l.child;o=o.firstContext;e:for(;o!==null;){var u=o;o=l;for(var c=0;c<t.length;c++)if(u.context===t[c]){o.lanes|=a,u=o.alternate,u!==null&&(u.lanes|=a),ds(o.return,a,e),n||(s=null);break e}o=u.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(d(341));s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),ds(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function Xn(e,t,a,n){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var u=l.type;Et(l.pendingProps.value,s.value)||(e!==null?e.push(u):e=[u])}}else if(l===oe.current){if(s=l.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Pl):e=[Pl])}l=l.return}e!==null&&hs(t,e,a,n),t.flags|=262144}function So(e){for(e=e.firstContext;e!==null;){if(!Et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yn(e){mn=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return tc(mn,e)}function To(e,t){return mn===null&&yn(e),tc(e,t)}function tc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ya===null){if(e===null)throw Error(d(308));ya=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ya=ya.next=t;return a}var mm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ym=r.unstable_scheduleCallback,gm=r.unstable_NormalPriority,$e={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fs(){return{controller:new mm,data:new Map,refCount:0}}function Sl(e){e.refCount--,e.refCount===0&&ym(gm,function(){e.controller.abort()})}var Tl=null,ms=0,Wn=0,Qn=null;function pm(e,t){if(Tl===null){var a=Tl=[];ms=0,Wn=pr(),Qn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ms++,t.then(ac,ac),t}function ac(){if(--ms===0&&Tl!==null){Qn!==null&&(Qn.status="fulfilled");var e=Tl;Tl=null,Wn=0,Qn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var nc=j.S;j.S=function(e,t){Rd=ft(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&pm(e,t),nc!==null&&nc(e,t)};var gn=h(null);function ys(){var e=gn.current;return e!==null?e:Ce.pooledCache}function Eo(e,t){t===null?y(gn,gn.current):y(gn,t.pool)}function lc(){var e=ys();return e===null?null:{parent:$e._currentValue,pool:e}}var Fn=Error(d(460)),gs=Error(d(474)),Yo=Error(d(542)),Bo={then:function(){}};function oc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ic(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(da,da),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,rc(e),e;default:if(typeof t.status=="string")t.then(da,da);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,rc(e),e}throw bn=t,Fn}}function pn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(bn=a,Fn):a}}var bn=null;function sc(){if(bn===null)throw Error(d(459));var e=bn;return bn=null,e}function rc(e){if(e===Fn||e===Yo)throw Error(d(483))}var Zn=null,El=0;function Mo(e){var t=El;return El+=1,Zn===null&&(Zn=[]),ic(Zn,e,t)}function Yl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Co(e,t){throw t.$$typeof===R?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function uc(e){function t(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function a(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function n(m){for(var f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function l(m,f){return m=fa(m,f),m.index=0,m.sibling=null,m}function o(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=67108866,f):g):(m.flags|=67108866,f)):(m.flags|=1048576,f)}function s(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function u(m,f,g,T){return f===null||f.tag!==6?(f=ls(g,m.mode,T),f.return=m,f):(f=l(f,g),f.return=m,f)}function c(m,f,g,T){var P=g.type;return P===D?A(m,f,g.props.children,T,g.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ce&&pn(P)===f.type)?(f=l(f,g.props),Yl(f,g),f.return=m,f):(f=Io(g.type,g.key,g.props,null,m.mode,T),Yl(f,g),f.return=m,f)}function p(m,f,g,T){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=os(g,m.mode,T),f.return=m,f):(f=l(f,g.children||[]),f.return=m,f)}function A(m,f,g,T,P){return f===null||f.tag!==7?(f=hn(g,m.mode,T,P),f.return=m,f):(f=l(f,g),f.return=m,f)}function M(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=ls(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case J:return g=Io(f.type,f.key,f.props,null,m.mode,g),Yl(g,f),g.return=m,g;case le:return f=os(f,m.mode,g),f.return=m,f;case ce:return f=pn(f),M(m,f,g)}if(qe(f)||X(f))return f=hn(f,m.mode,g,null),f.return=m,f;if(typeof f.then=="function")return M(m,Mo(f),g);if(f.$$typeof===re)return M(m,To(m,f),g);Co(m,f)}return null}function w(m,f,g,T){var P=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return P!==null?null:u(m,f,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case J:return g.key===P?c(m,f,g,T):null;case le:return g.key===P?p(m,f,g,T):null;case ce:return g=pn(g),w(m,f,g,T)}if(qe(g)||X(g))return P!==null?null:A(m,f,g,T,null);if(typeof g.then=="function")return w(m,f,Mo(g),T);if(g.$$typeof===re)return w(m,f,To(m,g),T);Co(m,g)}return null}function k(m,f,g,T,P){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return m=m.get(g)||null,u(f,m,""+T,P);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case J:return m=m.get(T.key===null?g:T.key)||null,c(f,m,T,P);case le:return m=m.get(T.key===null?g:T.key)||null,p(f,m,T,P);case ce:return T=pn(T),k(m,f,g,T,P)}if(qe(T)||X(T))return m=m.get(g)||null,A(f,m,T,P,null);if(typeof T.then=="function")return k(m,f,g,Mo(T),P);if(T.$$typeof===re)return k(m,f,g,To(f,T),P);Co(f,T)}return null}function W(m,f,g,T){for(var P=null,ve=null,F=f,ue=f=0,ye=null;F!==null&&ue<g.length;ue++){F.index>ue?(ye=F,F=null):ye=F.sibling;var xe=w(m,F,g[ue],T);if(xe===null){F===null&&(F=ye);break}e&&F&&xe.alternate===null&&t(m,F),f=o(xe,f,ue),ve===null?P=xe:ve.sibling=xe,ve=xe,F=ye}if(ue===g.length)return a(m,F),ge&&ma(m,ue),P;if(F===null){for(;ue<g.length;ue++)F=M(m,g[ue],T),F!==null&&(f=o(F,f,ue),ve===null?P=F:ve.sibling=F,ve=F);return ge&&ma(m,ue),P}for(F=n(F);ue<g.length;ue++)ye=k(F,m,ue,g[ue],T),ye!==null&&(e&&ye.alternate!==null&&F.delete(ye.key===null?ue:ye.key),f=o(ye,f,ue),ve===null?P=ye:ve.sibling=ye,ve=ye);return e&&F.forEach(function(tn){return t(m,tn)}),ge&&ma(m,ue),P}function ee(m,f,g,T){if(g==null)throw Error(d(151));for(var P=null,ve=null,F=f,ue=f=0,ye=null,xe=g.next();F!==null&&!xe.done;ue++,xe=g.next()){F.index>ue?(ye=F,F=null):ye=F.sibling;var tn=w(m,F,xe.value,T);if(tn===null){F===null&&(F=ye);break}e&&F&&tn.alternate===null&&t(m,F),f=o(tn,f,ue),ve===null?P=tn:ve.sibling=tn,ve=tn,F=ye}if(xe.done)return a(m,F),ge&&ma(m,ue),P;if(F===null){for(;!xe.done;ue++,xe=g.next())xe=M(m,xe.value,T),xe!==null&&(f=o(xe,f,ue),ve===null?P=xe:ve.sibling=xe,ve=xe);return ge&&ma(m,ue),P}for(F=n(F);!xe.done;ue++,xe=g.next())xe=k(F,m,ue,xe.value,T),xe!==null&&(e&&xe.alternate!==null&&F.delete(xe.key===null?ue:xe.key),f=o(xe,f,ue),ve===null?P=xe:ve.sibling=xe,ve=xe);return e&&F.forEach(function(Ey){return t(m,Ey)}),ge&&ma(m,ue),P}function Ye(m,f,g,T){if(typeof g=="object"&&g!==null&&g.type===D&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case J:e:{for(var P=g.key;f!==null;){if(f.key===P){if(P=g.type,P===D){if(f.tag===7){a(m,f.sibling),T=l(f,g.props.children),T.return=m,m=T;break e}}else if(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ce&&pn(P)===f.type){a(m,f.sibling),T=l(f,g.props),Yl(T,g),T.return=m,m=T;break e}a(m,f);break}else t(m,f);f=f.sibling}g.type===D?(T=hn(g.props.children,m.mode,T,g.key),T.return=m,m=T):(T=Io(g.type,g.key,g.props,null,m.mode,T),Yl(T,g),T.return=m,m=T)}return s(m);case le:e:{for(P=g.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){a(m,f.sibling),T=l(f,g.children||[]),T.return=m,m=T;break e}else{a(m,f);break}else t(m,f);f=f.sibling}T=os(g,m.mode,T),T.return=m,m=T}return s(m);case ce:return g=pn(g),Ye(m,f,g,T)}if(qe(g))return W(m,f,g,T);if(X(g)){if(P=X(g),typeof P!="function")throw Error(d(150));return g=P.call(g),ee(m,f,g,T)}if(typeof g.then=="function")return Ye(m,f,Mo(g),T);if(g.$$typeof===re)return Ye(m,f,To(m,g),T);Co(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,f!==null&&f.tag===6?(a(m,f.sibling),T=l(f,g),T.return=m,m=T):(a(m,f),T=ls(g,m.mode,T),T.return=m,m=T),s(m)):a(m,f)}return function(m,f,g,T){try{El=0;var P=Ye(m,f,g,T);return Zn=null,P}catch(F){if(F===Fn||F===Yo)throw F;var ve=Yt(29,F,null,m.mode);return ve.lanes=T,ve.return=m,ve}finally{}}}var wn=uc(!0),cc=uc(!1),Oa=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ra(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(je&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=No(e),Qu(e,null,a),t}return jo(e,n,t,a),No(e)}function Bl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,tu(e,a)}}function ws(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?l=o=s:o=o.next=s,a=a.next}while(a!==null);o===null?l=o=t:o=o.next=t}else l=o=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var vs=!1;function Ml(){if(vs){var e=Qn;if(e!==null)throw e}}function Cl(e,t,a,n){vs=!1;var l=e.updateQueue;Oa=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var c=u,p=c.next;c.next=null,s===null?o=p:s.next=p,s=c;var A=e.alternate;A!==null&&(A=A.updateQueue,u=A.lastBaseUpdate,u!==s&&(u===null?A.firstBaseUpdate=p:u.next=p,A.lastBaseUpdate=c))}if(o!==null){var M=l.baseState;s=0,A=p=c=null,u=o;do{var w=u.lane&-536870913,k=w!==u.lane;if(k?(me&w)===w:(n&w)===w){w!==0&&w===Wn&&(vs=!0),A!==null&&(A=A.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var W=e,ee=u;w=t;var Ye=a;switch(ee.tag){case 1:if(W=ee.payload,typeof W=="function"){M=W.call(Ye,M,w);break e}M=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ee.payload,w=typeof W=="function"?W.call(Ye,M,w):W,w==null)break e;M=V({},M,w);break e;case 2:Oa=!0}}w=u.callback,w!==null&&(e.flags|=64,k&&(e.flags|=8192),k=l.callbacks,k===null?l.callbacks=[w]:k.push(w))}else k={lane:w,tag:u.tag,payload:u.payload,callback:u.callback,next:null},A===null?(p=A=k,c=M):A=A.next=k,s|=w;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;k=u,u=k.next,k.next=null,l.lastBaseUpdate=k,l.shared.pending=null}}while(!0);A===null&&(c=M),l.baseState=c,l.firstBaseUpdate=p,l.lastBaseUpdate=A,o===null&&(l.shared.lanes=0),Xa|=s,e.lanes=s,e.memoizedState=M}}function dc(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function hc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)dc(a[e],t)}var Kn=h(null),zo=h(0);function fc(e,t){e=Ia,y(zo,e),y(Kn,t),Ia=e|t.baseLanes}function xs(){y(zo,Ia),y(Kn,Kn.current)}function ks(){Ia=zo.current,S(Kn),S(zo)}var Bt=h(null),Qt=null;function Da(e){var t=e.alternate;y(Fe,Fe.current&1),y(Bt,e),Qt===null&&(t===null||Kn.current!==null||t.memoizedState!==null)&&(Qt=e)}function js(e){y(Fe,Fe.current),y(Bt,e),Qt===null&&(Qt=e)}function mc(e){e.tag===22?(y(Fe,Fe.current),y(Bt,e),Qt===null&&(Qt=e)):qa()}function qa(){y(Fe,Fe.current),y(Bt,Bt.current)}function Mt(e){S(Bt),Qt===e&&(Qt=null),S(Fe)}var Fe=h(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Er(a)||Yr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pa=0,se=null,Te=null,Pe=null,Vo=!1,Jn=!1,vn=!1,_o=0,zl=0,$n=null,wm=0;function Xe(){throw Error(d(321))}function Ns(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Et(e[a],t[a]))return!1;return!0}function Is(e,t,a,n,l,o){return pa=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Jc:Rs,vn=!1,o=a(n,l),vn=!1,Jn&&(o=gc(t,a,n,l)),yc(e),o}function yc(e){j.H=_l;var t=Te!==null&&Te.next!==null;if(pa=0,Pe=Te=se=null,Vo=!1,zl=0,$n=null,t)throw Error(d(300));e===null||et||(e=e.dependencies,e!==null&&So(e)&&(et=!0))}function gc(e,t,a,n){se=e;var l=0;do{if(Jn&&($n=null),zl=0,Jn=!1,25<=l)throw Error(d(301));if(l+=1,Pe=Te=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}j.H=$c,o=t(a,n)}while(Jn);return o}function vm(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?Ul(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(se.flags|=1024),t}function As(){var e=_o!==0;return _o=0,e}function Ss(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ts(e){if(Vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Vo=!1}pa=0,Pe=Te=se=null,Jn=!1,zl=_o=0,$n=null}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?se.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function Ze(){if(Te===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Pe===null?se.memoizedState:Pe.next;if(t!==null)Pe=t,Te=e;else{if(e===null)throw se.alternate===null?Error(d(467)):Error(d(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Pe===null?se.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ul(e){var t=zl;return zl+=1,$n===null&&($n=[]),e=ic($n,e,t),t=se,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Jc:Rs),e}function Ho(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ul(e);if(e.$$typeof===re)return ct(e)}throw Error(d(438,String(e)))}function Es(e){var t=null,a=se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=se.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Oo(),se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Q;return t.index++,a}function ba(e,t){return typeof t=="function"?t(e):t}function Ro(e){var t=Ze();return Ys(t,Te,e)}function Ys(e,t,a){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=a;var l=e.baseQueue,o=n.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}t.baseQueue=l=o,n.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var u=s=null,c=null,p=t,A=!1;do{var M=p.lane&-536870913;if(M!==p.lane?(me&M)===M:(pa&M)===M){var w=p.revertLane;if(w===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),M===Wn&&(A=!0);else if((pa&w)===w){p=p.next,w===Wn&&(A=!0);continue}else M={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(u=c=M,s=o):c=c.next=M,se.lanes|=w,Xa|=w;M=p.action,vn&&a(o,M),o=p.hasEagerState?p.eagerState:a(o,M)}else w={lane:M,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(u=c=w,s=o):c=c.next=w,se.lanes|=M,Xa|=M;p=p.next}while(p!==null&&p!==t);if(c===null?s=o:c.next=u,!Et(o,e.memoizedState)&&(et=!0,A&&(a=Qn,a!==null)))throw a;e.memoizedState=o,e.baseState=s,e.baseQueue=c,n.lastRenderedState=o}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Bs(e){var t=Ze(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,o=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);Et(o,t.memoizedState)||(et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function pc(e,t,a){var n=se,l=Ze(),o=ge;if(o){if(a===void 0)throw Error(d(407));a=a()}else a=t();var s=!Et((Te||l).memoizedState,a);if(s&&(l.memoizedState=a,et=!0),l=l.queue,zs(vc.bind(null,n,l,e),[e]),l.getSnapshot!==t||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Pn(9,{destroy:void 0},wc.bind(null,n,l,a,t),null),Ce===null)throw Error(d(349));o||(pa&127)!==0||bc(n,t,a)}return a}function bc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=se.updateQueue,t===null?(t=Oo(),se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function wc(e,t,a,n){t.value=a,t.getSnapshot=n,xc(t)&&kc(e)}function vc(e,t,a){return a(function(){xc(t)&&kc(e)})}function xc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Et(e,a)}catch{return!0}}function kc(e){var t=dn(e,2);t!==null&&At(t,e,2)}function Ms(e){var t=pt();if(typeof e=="function"){var a=e;if(e=a(),vn){Ot(!0);try{a()}finally{Ot(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t}function jc(e,t,a,n){return e.baseState=a,Ys(e,Te,typeof n=="function"?n:ba)}function xm(e,t,a,n,l){if(Lo(e))throw Error(d(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};j.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,Nc(t,o)):(o.next=a.next,t.pending=a.next=o)}}function Nc(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var o=j.T,s={};j.T=s;try{var u=a(l,n),c=j.S;c!==null&&c(s,u),Ic(e,t,u)}catch(p){Cs(e,t,p)}finally{o!==null&&s.types!==null&&(o.types=s.types),j.T=o}}else try{o=a(l,n),Ic(e,t,o)}catch(p){Cs(e,t,p)}}function Ic(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Ac(e,t,n)},function(n){return Cs(e,t,n)}):Ac(e,t,a)}function Ac(e,t,a){t.status="fulfilled",t.value=a,Sc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Nc(e,a)))}function Cs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Sc(t),t=t.next;while(t!==n)}e.action=null}function Sc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Tc(e,t){return t}function Ec(e,t){if(ge){var a=Ce.formState;if(a!==null){e:{var n=se;if(ge){if(_e){t:{for(var l=_e,o=Wt;l.nodeType!==8;){if(!o){l=null;break t}if(l=Ft(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){_e=Ft(l.nextSibling),n=l.data==="F!";break e}}Va(n)}n=!1}n&&(t=a[0])}}return a=pt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tc,lastRenderedState:t},a.queue=n,a=Fc.bind(null,se,n),n.dispatch=a,n=Ms(!1),o=Hs.bind(null,se,!1,n.queue),n=pt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=xm.bind(null,se,l,o,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Yc(e){var t=Ze();return Bc(t,Te,e)}function Bc(e,t,a){if(t=Ys(e,t,Tc)[0],e=Ro(ba)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Ul(t)}catch(s){throw s===Fn?Yo:s}else n=t;t=Ze();var l=t.queue,o=l.dispatch;return a!==t.memoizedState&&(se.flags|=2048,Pn(9,{destroy:void 0},km.bind(null,l,a),null)),[n,o,e]}function km(e,t){e.action=t}function Mc(e){var t=Ze(),a=Te;if(a!==null)return Bc(t,a,e);Ze(),t=t.memoizedState,a=Ze();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Pn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=se.updateQueue,t===null&&(t=Oo(),se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Cc(){return Ze().memoizedState}function Do(e,t,a,n){var l=pt();se.flags|=e,l.memoizedState=Pn(1|t,{destroy:void 0},a,n===void 0?null:n)}function qo(e,t,a,n){var l=Ze();n=n===void 0?null:n;var o=l.memoizedState.inst;Te!==null&&n!==null&&Ns(n,Te.memoizedState.deps)?l.memoizedState=Pn(t,o,a,n):(se.flags|=e,l.memoizedState=Pn(1|t,o,a,n))}function zc(e,t){Do(8390656,8,e,t)}function zs(e,t){qo(2048,8,e,t)}function jm(e){se.flags|=4;var t=se.updateQueue;if(t===null)t=Oo(),se.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Uc(e){var t=Ze().memoizedState;return jm({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function Vc(e,t){return qo(4,2,e,t)}function _c(e,t){return qo(4,4,e,t)}function Oc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hc(e,t,a){a=a!=null?a.concat([e]):null,qo(4,4,Oc.bind(null,t,e),a)}function Us(){}function Rc(e,t){var a=Ze();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Ns(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Dc(e,t){var a=Ze();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Ns(t,n[1]))return n[0];if(n=e(),vn){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[n,t],n}function Vs(e,t,a){return a===void 0||(pa&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=qd(),se.lanes|=e,Xa|=e,a)}function qc(e,t,a,n){return Et(a,t)?a:Kn.current!==null?(e=Vs(e,a,n),Et(e,t)||(et=!0),e):(pa&42)===0||(pa&1073741824)!==0&&(me&261930)===0?(et=!0,e.memoizedState=a):(e=qd(),se.lanes|=e,Xa|=e,t)}function Lc(e,t,a,n,l){var o=C.p;C.p=o!==0&&8>o?o:8;var s=j.T,u={};j.T=u,Hs(e,!1,t,a);try{var c=l(),p=j.S;if(p!==null&&p(u,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var A=bm(c,n);Vl(e,t,A,Ut(e))}else Vl(e,t,n,Ut(e))}catch(M){Vl(e,t,{then:function(){},status:"rejected",reason:M},Ut())}finally{C.p=o,s!==null&&u.types!==null&&(s.types=u.types),j.T=s}}function Nm(){}function _s(e,t,a,n){if(e.tag!==5)throw Error(d(476));var l=Gc(e).queue;Lc(e,l,t,L,a===null?Nm:function(){return Xc(e),a(n)})}function Gc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:L},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xc(e){var t=Gc(e);t.next===null&&(t=e.alternate.memoizedState),Vl(e,t.next.queue,{},Ut())}function Os(){return ct(Pl)}function Wc(){return Ze().memoizedState}function Qc(){return Ze().memoizedState}function Im(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ut();e=Ha(a);var n=Ra(t,e,a);n!==null&&(At(n,t,a),Bl(n,t,a)),t={cache:fs()},e.payload=t;return}t=t.return}}function Am(e,t,a){var n=Ut();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Lo(e)?Zc(t,a):(a=as(e,t,a,n),a!==null&&(At(a,e,n),Kc(a,t,n)))}function Fc(e,t,a){var n=Ut();Vl(e,t,a,n)}function Vl(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lo(e))Zc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,u=o(s,a);if(l.hasEagerState=!0,l.eagerState=u,Et(u,s))return jo(e,t,l,0),Ce===null&&ko(),!1}catch{}finally{}if(a=as(e,t,l,n),a!==null)return At(a,e,n),Kc(a,t,n),!0}return!1}function Hs(e,t,a,n){if(n={lane:2,revertLane:pr(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Lo(e)){if(t)throw Error(d(479))}else t=as(e,a,n,2),t!==null&&At(t,e,2)}function Lo(e){var t=e.alternate;return e===se||t!==null&&t===se}function Zc(e,t){Jn=Vo=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Kc(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,tu(e,a)}}var _l={readContext:ct,use:Ho,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};_l.useEffectEvent=Xe;var Jc={readContext:ct,use:Ho,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:zc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Do(4194308,4,Oc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){Do(4,2,e,t)},useMemo:function(e,t){var a=pt();t=t===void 0?null:t;var n=e();if(vn){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=pt();if(a!==void 0){var l=a(t);if(vn){Ot(!0);try{a(t)}finally{Ot(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Am.bind(null,se,e),[n.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ms(e);var t=e.queue,a=Fc.bind(null,se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Us,useDeferredValue:function(e,t){var a=pt();return Vs(a,e,t)},useTransition:function(){var e=Ms(!1);return e=Lc.bind(null,se,e.queue,!0,!1),pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=se,l=pt();if(ge){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),Ce===null)throw Error(d(349));(me&127)!==0||bc(n,t,a)}l.memoizedState=a;var o={value:a,getSnapshot:t};return l.queue=o,zc(vc.bind(null,n,o,e),[e]),n.flags|=2048,Pn(9,{destroy:void 0},wc.bind(null,n,o,a,t),null),a},useId:function(){var e=pt(),t=Ce.identifierPrefix;if(ge){var a=la,n=na;a=(n&~(1<<32-ot(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=_o++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=wm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:Ec,useActionState:Ec,useOptimistic:function(e){var t=pt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Hs.bind(null,se,!0,a),a.dispatch=t,[e,t]},useMemoCache:Es,useCacheRefresh:function(){return pt().memoizedState=Im.bind(null,se)},useEffectEvent:function(e){var t=pt(),a={impl:e};return t.memoizedState=a,function(){if((je&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},Rs={readContext:ct,use:Ho,useCallback:Rc,useContext:ct,useEffect:zs,useImperativeHandle:Hc,useInsertionEffect:Vc,useLayoutEffect:_c,useMemo:Dc,useReducer:Ro,useRef:Cc,useState:function(){return Ro(ba)},useDebugValue:Us,useDeferredValue:function(e,t){var a=Ze();return qc(a,Te.memoizedState,e,t)},useTransition:function(){var e=Ro(ba)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Ul(e),t]},useSyncExternalStore:pc,useId:Wc,useHostTransitionStatus:Os,useFormState:Yc,useActionState:Yc,useOptimistic:function(e,t){var a=Ze();return jc(a,Te,e,t)},useMemoCache:Es,useCacheRefresh:Qc};Rs.useEffectEvent=Uc;var $c={readContext:ct,use:Ho,useCallback:Rc,useContext:ct,useEffect:zs,useImperativeHandle:Hc,useInsertionEffect:Vc,useLayoutEffect:_c,useMemo:Dc,useReducer:Bs,useRef:Cc,useState:function(){return Bs(ba)},useDebugValue:Us,useDeferredValue:function(e,t){var a=Ze();return Te===null?Vs(a,e,t):qc(a,Te.memoizedState,e,t)},useTransition:function(){var e=Bs(ba)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Ul(e),t]},useSyncExternalStore:pc,useId:Wc,useHostTransitionStatus:Os,useFormState:Mc,useActionState:Mc,useOptimistic:function(e,t){var a=Ze();return Te!==null?jc(a,Te,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Es,useCacheRefresh:Qc};$c.useEffectEvent=Uc;function Ds(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:V({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var qs={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Ut(),l=Ha(n);l.payload=t,a!=null&&(l.callback=a),t=Ra(e,l,n),t!==null&&(At(t,e,n),Bl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Ut(),l=Ha(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ra(e,l,n),t!==null&&(At(t,e,n),Bl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ut(),n=Ha(a);n.tag=2,t!=null&&(n.callback=t),t=Ra(e,n,a),t!==null&&(At(t,e,a),Bl(t,e,a))}};function Pc(e,t,a,n,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!jl(a,n)||!jl(l,o):!0}function ed(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function xn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=V({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function td(e){xo(e)}function ad(e){console.error(e)}function nd(e){xo(e)}function Go(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function ld(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ls(e,t,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Go(e,t)},a}function od(e){return e=Ha(e),e.tag=3,e}function id(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var o=n.value;e.payload=function(){return l(o)},e.callback=function(){ld(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){ld(t,a,n),typeof l!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})})}function Sm(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Xn(t,a,l,!0),a=Bt.current,a!==null){switch(a.tag){case 31:case 13:return Qt===null?ai():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Bo?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),mr(e,n,l)),!1;case 22:return a.flags|=65536,n===Bo?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),mr(e,n,l)),!1}throw Error(d(435,a.tag))}return mr(e,n,l),ai(),!1}if(ge)return t=Bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==rs&&(e=Error(d(422),{cause:n}),Al(Lt(e,a)))):(n!==rs&&(t=Error(d(423),{cause:n}),Al(Lt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Lt(n,a),l=Ls(e.stateNode,n,l),ws(e,l),We!==4&&(We=2)),!1;var o=Error(d(520),{cause:n});if(o=Lt(o,a),Xl===null?Xl=[o]:Xl.push(o),We!==4&&(We=2),t===null)return!0;n=Lt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Ls(a.stateNode,n,e),ws(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))))return a.flags|=65536,l&=-l,a.lanes|=l,l=od(l),id(l,e,a,n),ws(a,l),!1}a=a.return}while(a!==null);return!1}var Gs=Error(d(461)),et=!1;function dt(e,t,a,n){t.child=e===null?cc(t,null,a,n):wn(t,e.child,a,n)}function sd(e,t,a,n,l){a=a.render;var o=t.ref;if("ref"in n){var s={};for(var u in n)u!=="ref"&&(s[u]=n[u])}else s=n;return yn(t),n=Is(e,t,a,s,o,l),u=As(),e!==null&&!et?(Ss(e,t,l),wa(e,t,l)):(ge&&u&&is(t),t.flags|=1,dt(e,t,n,l),t.child)}function rd(e,t,a,n,l){if(e===null){var o=a.type;return typeof o=="function"&&!ns(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,ud(e,t,o,n,l)):(e=Io(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!$s(e,l)){var s=o.memoizedProps;if(a=a.compare,a=a!==null?a:jl,a(s,n)&&e.ref===t.ref)return wa(e,t,l)}return t.flags|=1,e=fa(o,n),e.ref=t.ref,e.return=t,t.child=e}function ud(e,t,a,n,l){if(e!==null){var o=e.memoizedProps;if(jl(o,n)&&e.ref===t.ref)if(et=!1,t.pendingProps=n=o,$s(e,l))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,wa(e,t,l)}return Xs(e,t,a,n,l)}function cd(e,t,a,n){var l=n.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~o}else n=0,t.child=null;return dd(e,t,o,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Eo(t,o!==null?o.cachePool:null),o!==null?fc(t,o):xs(),mc(t);else return n=t.lanes=536870912,dd(e,t,o!==null?o.baseLanes|a:a,a,n)}else o!==null?(Eo(t,o.cachePool),fc(t,o),qa(),t.memoizedState=null):(e!==null&&Eo(t,null),xs(),qa());return dt(e,t,l,a),t.child}function Ol(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dd(e,t,a,n,l){var o=ys();return o=o===null?null:{parent:$e._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&Eo(t,null),xs(),mc(t),e!==null&&Xn(e,t,n,!0),t.childLanes=l,null}function Xo(e,t){return t=Qo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hd(e,t,a){return wn(t,e.child,null,a),e=Xo(t,t.pendingProps),e.flags|=2,Mt(t),t.memoizedState=null,e}function Tm(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(n.mode==="hidden")return e=Xo(t,n),t.lanes=536870912,Ol(null,e);if(js(t),(e=_e)?(e=Nh(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:na,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Zu(e),a.return=t,t.child=a,ut=t,_e=null)):e=null,e===null)throw Va(t);return t.lanes=536870912,null}return Xo(t,n)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(js(t),l)if(t.flags&256)t.flags&=-257,t=hd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(et||Xn(e,t,a,!1),l=(a&e.childLanes)!==0,et||l){if(n=Ce,n!==null&&(s=au(n,a),s!==0&&s!==o.retryLane))throw o.retryLane=s,dn(e,s),At(n,e,s),Gs;ai(),t=hd(e,t,a)}else e=o.treeContext,_e=Ft(s.nextSibling),ut=t,ge=!0,Ua=null,Wt=!1,e!==null&&$u(t,e),t=Xo(t,n),t.flags|=4096;return t}return e=fa(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Wo(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Xs(e,t,a,n,l){return yn(t),a=Is(e,t,a,n,void 0,l),n=As(),e!==null&&!et?(Ss(e,t,l),wa(e,t,l)):(ge&&n&&is(t),t.flags|=1,dt(e,t,a,l),t.child)}function fd(e,t,a,n,l,o){return yn(t),t.updateQueue=null,a=gc(t,n,a,l),yc(e),n=As(),e!==null&&!et?(Ss(e,t,o),wa(e,t,o)):(ge&&n&&is(t),t.flags|=1,dt(e,t,a,o),t.child)}function md(e,t,a,n,l){if(yn(t),t.stateNode===null){var o=Dn,s=a.contextType;typeof s=="object"&&s!==null&&(o=ct(s)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=qs,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},ps(t),s=a.contextType,o.context=typeof s=="object"&&s!==null?ct(s):Dn,o.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Ds(t,a,s,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&qs.enqueueReplaceState(o,o.state,null),Cl(t,n,o,l),Ml(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var u=t.memoizedProps,c=xn(a,u);o.props=c;var p=o.context,A=a.contextType;s=Dn,typeof A=="object"&&A!==null&&(s=ct(A));var M=a.getDerivedStateFromProps;A=typeof M=="function"||typeof o.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,A||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u||p!==s)&&ed(t,o,n,s),Oa=!1;var w=t.memoizedState;o.state=w,Cl(t,n,o,l),Ml(),p=t.memoizedState,u||w!==p||Oa?(typeof M=="function"&&(Ds(t,a,M,n),p=t.memoizedState),(c=Oa||Pc(t,a,c,n,w,p,s))?(A||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=p),o.props=n,o.state=p,o.context=s,n=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,bs(e,t),s=t.memoizedProps,A=xn(a,s),o.props=A,M=t.pendingProps,w=o.context,p=a.contextType,c=Dn,typeof p=="object"&&p!==null&&(c=ct(p)),u=a.getDerivedStateFromProps,(p=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==M||w!==c)&&ed(t,o,n,c),Oa=!1,w=t.memoizedState,o.state=w,Cl(t,n,o,l),Ml();var k=t.memoizedState;s!==M||w!==k||Oa||e!==null&&e.dependencies!==null&&So(e.dependencies)?(typeof u=="function"&&(Ds(t,a,u,n),k=t.memoizedState),(A=Oa||Pc(t,a,A,n,w,k,c)||e!==null&&e.dependencies!==null&&So(e.dependencies))?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,k,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,k,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),o.props=n,o.state=k,o.context=c,n=A):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,Wo(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=wn(t,e.child,null,l),t.child=wn(t,null,a,l)):dt(e,t,a,l),t.memoizedState=o.state,e=t.child):e=wa(e,t,l),e}function yd(e,t,a,n){return fn(),t.flags|=256,dt(e,t,a,n),t.child}var Ws={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qs(e){return{baseLanes:e,cachePool:lc()}}function Fs(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=zt),e}function gd(e,t,a){var n=t.pendingProps,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(l?Da(t):qa(),(e=_e)?(e=Nh(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:na,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Zu(e),a.return=t,t.child=a,ut=t,_e=null)):e=null,e===null)throw Va(t);return Yr(e)?t.lanes=32:t.lanes=536870912,null}var u=n.children;return n=n.fallback,l?(qa(),l=t.mode,u=Qo({mode:"hidden",children:u},l),n=hn(n,l,a,null),u.return=t,n.return=t,u.sibling=n,t.child=u,n=t.child,n.memoizedState=Qs(a),n.childLanes=Fs(e,s,a),t.memoizedState=Ws,Ol(null,n)):(Da(t),Zs(t,u))}var c=e.memoizedState;if(c!==null&&(u=c.dehydrated,u!==null)){if(o)t.flags&256?(Da(t),t.flags&=-257,t=Ks(e,t,a)):t.memoizedState!==null?(qa(),t.child=e.child,t.flags|=128,t=null):(qa(),u=n.fallback,l=t.mode,n=Qo({mode:"visible",children:n.children},l),u=hn(u,l,a,null),u.flags|=2,n.return=t,u.return=t,n.sibling=u,t.child=n,wn(t,e.child,null,a),n=t.child,n.memoizedState=Qs(a),n.childLanes=Fs(e,s,a),t.memoizedState=Ws,t=Ol(null,n));else if(Da(t),Yr(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var p=s.dgst;s=p,n=Error(d(419)),n.stack="",n.digest=s,Al({value:n,source:null,stack:null}),t=Ks(e,t,a)}else if(et||Xn(e,t,a,!1),s=(a&e.childLanes)!==0,et||s){if(s=Ce,s!==null&&(n=au(s,a),n!==0&&n!==c.retryLane))throw c.retryLane=n,dn(e,n),At(s,e,n),Gs;Er(u)||ai(),t=Ks(e,t,a)}else Er(u)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,_e=Ft(u.nextSibling),ut=t,ge=!0,Ua=null,Wt=!1,e!==null&&$u(t,e),t=Zs(t,n.children),t.flags|=4096);return t}return l?(qa(),u=n.fallback,l=t.mode,c=e.child,p=c.sibling,n=fa(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&65011712,p!==null?u=fa(p,u):(u=hn(u,l,a,null),u.flags|=2),u.return=t,n.return=t,n.sibling=u,t.child=n,Ol(null,n),n=t.child,u=e.child.memoizedState,u===null?u=Qs(a):(l=u.cachePool,l!==null?(c=$e._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=lc(),u={baseLanes:u.baseLanes|a,cachePool:l}),n.memoizedState=u,n.childLanes=Fs(e,s,a),t.memoizedState=Ws,Ol(e.child,n)):(Da(t),a=e.child,e=a.sibling,a=fa(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Zs(e,t){return t=Qo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Qo(e,t){return e=Yt(22,e,null,t),e.lanes=0,e}function Ks(e,t,a){return wn(t,e.child,null,a),e=Zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ds(e.return,t,a)}function Js(e,t,a,n,l,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=l,s.treeForkCount=o)}function bd(e,t,a){var n=t.pendingProps,l=n.revealOrder,o=n.tail;n=n.children;var s=Fe.current,u=(s&2)!==0;if(u?(s=s&1|2,t.flags|=128):s&=1,y(Fe,s),dt(e,t,n,a),n=ge?Il:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pd(e,a,t);else if(e.tag===19)pd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Uo(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Js(t,!1,l,a,o,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Uo(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Js(t,!0,a,null,o,n);break;case"together":Js(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function wa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Xa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Xn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=fa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=fa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function $s(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&So(e)))}function Em(e,t,a){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),_a(t,$e,e.memoizedState.cache),fn();break;case 27:case 5:Tt(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:_a(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,js(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Da(t),t.flags|=128,null):(a&t.child.childLanes)!==0?gd(e,t,a):(Da(t),e=wa(e,t,a),e!==null?e.sibling:null);Da(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Xn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return bd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),y(Fe,Fe.current),n)break;return null;case 22:return t.lanes=0,cd(e,t,a,t.pendingProps);case 24:_a(t,$e,e.memoizedState.cache)}return wa(e,t,a)}function wd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!$s(e,a)&&(t.flags&128)===0)return et=!1,Em(e,t,a);et=(e.flags&131072)!==0}else et=!1,ge&&(t.flags&1048576)!==0&&Ju(t,Il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=pn(t.elementType),t.type=e,typeof e=="function")ns(e)?(n=xn(e,n),t.tag=1,t=md(null,t,e,n,a)):(t.tag=0,t=Xs(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===Ve){t.tag=11,t=sd(null,t,e,n,a);break e}else if(l===$){t.tag=14,t=rd(null,t,e,n,a);break e}}throw t=nt(e)||e,Error(d(306,t,""))}}return t;case 0:return Xs(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=xn(n,t.pendingProps),md(e,t,n,l,a);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(d(387));n=t.pendingProps;var o=t.memoizedState;l=o.element,bs(e,t),Cl(t,n,null,a);var s=t.memoizedState;if(n=s.cache,_a(t,$e,n),n!==o.cache&&hs(t,[$e],a,!0),Ml(),n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yd(e,t,n,a);break e}else if(n!==l){l=Lt(Error(d(424)),t),Al(l),t=yd(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=Ft(e.firstChild),ut=t,ge=!0,Ua=null,Wt=!0,a=cc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fn(),n===l){t=wa(e,t,a);break e}dt(e,t,n,a)}t=t.child}return t;case 26:return Wo(e,t),e===null?(a=Yh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,n=ui(ne.current).createElement(a),n[rt]=t,n[vt]=e,ht(n,a,e),it(n),t.stateNode=n):t.memoizedState=Yh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Tt(t),e===null&&ge&&(n=t.stateNode=Sh(t.type,t.pendingProps,ne.current),ut=t,Wt=!0,l=_e,Ka(t.type)?(Br=l,_e=Ft(n.firstChild)):_e=l),dt(e,t,t.pendingProps.children,a),Wo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((l=n=_e)&&(n=oy(n,t.type,t.pendingProps,Wt),n!==null?(t.stateNode=n,ut=t,_e=Ft(n.firstChild),Wt=!1,l=!0):l=!1),l||Va(t)),Tt(t),l=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,n=o.children,Ar(l,o)?n=null:s!==null&&Ar(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=Is(e,t,vm,null,null,a),Pl._currentValue=l),Wo(e,t),dt(e,t,n,a),t.child;case 6:return e===null&&ge&&((e=a=_e)&&(a=iy(a,t.pendingProps,Wt),a!==null?(t.stateNode=a,ut=t,_e=null,e=!0):e=!1),e||Va(t)),null;case 13:return gd(e,t,a);case 4:return Ge(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=wn(t,null,n,a):dt(e,t,n,a),t.child;case 11:return sd(e,t,t.type,t.pendingProps,a);case 7:return dt(e,t,t.pendingProps,a),t.child;case 8:return dt(e,t,t.pendingProps.children,a),t.child;case 12:return dt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,_a(t,t.type,n.value),dt(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,yn(t),l=ct(l),n=n(l),t.flags|=1,dt(e,t,n,a),t.child;case 14:return rd(e,t,t.type,t.pendingProps,a);case 15:return ud(e,t,t.type,t.pendingProps,a);case 19:return bd(e,t,a);case 31:return Tm(e,t,a);case 22:return cd(e,t,a,t.pendingProps);case 24:return yn(t),n=ct($e),e===null?(l=ys(),l===null&&(l=Ce,o=fs(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=a),l=o),t.memoizedState={parent:n,cache:l},ps(t),_a(t,$e,l)):((e.lanes&a)!==0&&(bs(e,t),Cl(t,null,null,a),Ml()),l=e.memoizedState,o=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),_a(t,$e,n)):(n=o.cache,_a(t,$e,n),n!==l.cache&&hs(t,[$e],a,!0))),dt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function va(e){e.flags|=4}function Ps(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Wd())e.flags|=8192;else throw bn=Bo,gs}else e.flags&=-16777217}function vd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Uh(t))if(Wd())e.flags|=8192;else throw bn=Bo,gs}function Fo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fl():536870912,e.lanes|=t,nl|=t)}function Hl(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Ym(e,t,a){var n=t.pendingProps;switch(ss(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ga($e),Ne(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gn(t)?va(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,us())),Oe(t),null;case 26:var l=t.type,o=t.memoizedState;return e===null?(va(t),o!==null?(Oe(t),vd(t,o)):(Oe(t),Ps(t,l,null,n,a))):o?o!==e.memoizedState?(va(t),Oe(t),vd(t,o)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&va(t),Oe(t),Ps(t,l,e,n,a)),null;case 27:if(sa(t),a=ne.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&va(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Oe(t),null}e=B.current,Gn(t)?Pu(t):(e=Sh(l,n,a),t.stateNode=e,va(t))}return Oe(t),null;case 5:if(sa(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&va(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Oe(t),null}if(o=B.current,Gn(t))Pu(t);else{var s=ui(ne.current);switch(o){case 1:o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=s.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?s.createElement(l,{is:n.is}):s.createElement(l)}}o[rt]=t,o[vt]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;e:switch(ht(o,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&va(t)}}return Oe(t),Ps(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&va(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(e=ne.current,Gn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=ut,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[rt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||gh(e.nodeValue,a)),e||Va(t,!0)}else e=ui(e).createTextNode(n),e[rt]=t,t.stateNode=e}return Oe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Gn(t),a!==null){if(e===null){if(!n)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[rt]=t}else fn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else a=us(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Mt(t),t):(Mt(t),null);if((t.flags&128)!==0)throw Error(d(558))}return Oe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Gn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(d(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(d(317));l[rt]=t}else fn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),l=!1}else l=us(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Mt(t),t):(Mt(t),null)}return Mt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Fo(t,t.updateQueue),Oe(t),null);case 4:return Ne(),e===null&&xr(t.stateNode.containerInfo),Oe(t),null;case 10:return ga(t.type),Oe(t),null;case 19:if(S(Fe),n=t.memoizedState,n===null)return Oe(t),null;if(l=(t.flags&128)!==0,o=n.rendering,o===null)if(l)Hl(n,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Uo(e),o!==null){for(t.flags|=128,Hl(n,!1),e=o.updateQueue,t.updateQueue=e,Fo(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Fu(a,e),a=a.sibling;return y(Fe,Fe.current&1|2),ge&&ma(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&ft()>Po&&(t.flags|=128,l=!0,Hl(n,!1),t.lanes=4194304)}else{if(!l)if(e=Uo(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Fo(t,e),Hl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!ge)return Oe(t),null}else 2*ft()-n.renderingStartTime>Po&&a!==536870912&&(t.flags|=128,l=!0,Hl(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(e=n.last,e!==null?e.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ft(),e.sibling=null,a=Fe.current,y(Fe,l?a&1|2:a&1),ge&&ma(t,n.treeForkCount),e):(Oe(t),null);case 22:case 23:return Mt(t),ks(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),a=t.updateQueue,a!==null&&Fo(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&S(gn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ga($e),Oe(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Bm(e,t){switch(ss(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ga($e),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return sa(t),null;case 31:if(t.memoizedState!==null){if(Mt(t),t.alternate===null)throw Error(d(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return S(Fe),null;case 4:return Ne(),null;case 10:return ga(t.type),null;case 22:case 23:return Mt(t),ks(),e!==null&&S(gn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ga($e),null;case 25:return null;default:return null}}function xd(e,t){switch(ss(t),t.tag){case 3:ga($e),Ne();break;case 26:case 27:case 5:sa(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&Mt(t);break;case 13:Mt(t);break;case 19:S(Fe);break;case 10:ga(t.type);break;case 22:case 23:Mt(t),ks(),e!==null&&S(gn);break;case 24:ga($e)}}function Rl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var o=a.create,s=a.inst;n=o(),s.destroy=n}a=a.next}while(a!==l)}}catch(u){Ae(t,t.return,u)}}function La(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){var s=n.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,l=t;var c=a,p=u;try{p()}catch(A){Ae(l,c,A)}}}n=n.next}while(n!==o)}}catch(A){Ae(t,t.return,A)}}function kd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{hc(t,a)}catch(n){Ae(e,e.return,n)}}}function jd(e,t,a){a.props=xn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ae(e,t,n)}}function Dl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){Ae(e,t,l)}}function oa(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){Ae(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ae(e,t,l)}else a.current=null}function Nd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){Ae(e,e.return,l)}}function er(e,t,a){try{var n=e.stateNode;Pm(n,e.type,a,t),n[vt]=t}catch(l){Ae(e,e.return,l)}}function Id(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ka(e.type)||e.tag===4}function tr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ar(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=da));else if(n!==4&&(n===27&&Ka(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ar(e,t,a),e=e.sibling;e!==null;)ar(e,t,a),e=e.sibling}function Zo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zo(e,t,a),e=e.sibling;e!==null;)Zo(e,t,a),e=e.sibling}function Ad(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ht(t,n,a),t[rt]=e,t[vt]=a}catch(o){Ae(e,e.return,o)}}var xa=!1,tt=!1,nr=!1,Sd=typeof WeakSet=="function"?WeakSet:Set,st=null;function Mm(e,t){if(e=e.containerInfo,Nr=gi,e=Hu(e),Ki(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var s=0,u=-1,c=-1,p=0,A=0,M=e,w=null;t:for(;;){for(var k;M!==a||l!==0&&M.nodeType!==3||(u=s+l),M!==o||n!==0&&M.nodeType!==3||(c=s+n),M.nodeType===3&&(s+=M.nodeValue.length),(k=M.firstChild)!==null;)w=M,M=k;for(;;){if(M===e)break t;if(w===a&&++p===l&&(u=s),w===o&&++A===n&&(c=s),(k=M.nextSibling)!==null)break;M=w,w=M.parentNode}M=k}a=u===-1||c===-1?null:{start:u,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ir={focusedElem:e,selectionRange:a},gi=!1,st=t;st!==null;)if(t=st,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,st=e;else for(;st!==null;){switch(t=st,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,l=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var W=xn(a.type,l);e=n.getSnapshotBeforeUpdate(W,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ae(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Tr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Tr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,st=e;break}st=t.return}}function Td(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ja(e,a),n&4&&Rl(5,a);break;case 1:if(ja(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){Ae(a,a.return,s)}else{var l=xn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Ae(a,a.return,s)}}n&64&&kd(a),n&512&&Dl(a,a.return);break;case 3:if(ja(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{hc(e,t)}catch(s){Ae(a,a.return,s)}}break;case 27:t===null&&n&4&&Ad(a);case 26:case 5:ja(e,a),t===null&&n&4&&Nd(a),n&512&&Dl(a,a.return);break;case 12:ja(e,a);break;case 31:ja(e,a),n&4&&Bd(e,a);break;case 13:ja(e,a),n&4&&Md(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Dm.bind(null,a),sy(e,a))));break;case 22:if(n=a.memoizedState!==null||xa,!n){t=t!==null&&t.memoizedState!==null||tt,l=xa;var o=tt;xa=n,(tt=t)&&!o?Na(e,a,(a.subtreeFlags&8772)!==0):ja(e,a),xa=l,tt=o}break;case 30:break;default:ja(e,a)}}function Ed(e){var t=e.alternate;t!==null&&(e.alternate=null,Ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ci(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,kt=!1;function ka(e,t,a){for(a=a.child;a!==null;)Yd(e,t,a),a=a.sibling}function Yd(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Ba,a)}catch{}switch(a.tag){case 26:tt||oa(a,t),ka(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tt||oa(a,t);var n=De,l=kt;Ka(a.type)&&(De=a.stateNode,kt=!1),ka(e,t,a),Kl(a.stateNode),De=n,kt=l;break;case 5:tt||oa(a,t);case 6:if(n=De,l=kt,De=null,ka(e,t,a),De=n,kt=l,De!==null)if(kt)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(a.stateNode)}catch(o){Ae(a,t,o)}else try{De.removeChild(a.stateNode)}catch(o){Ae(a,t,o)}break;case 18:De!==null&&(kt?(e=De,kh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),dl(e)):kh(De,a.stateNode));break;case 4:n=De,l=kt,De=a.stateNode.containerInfo,kt=!0,ka(e,t,a),De=n,kt=l;break;case 0:case 11:case 14:case 15:La(2,a,t),tt||La(4,a,t),ka(e,t,a);break;case 1:tt||(oa(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&jd(a,t,n)),ka(e,t,a);break;case 21:ka(e,t,a);break;case 22:tt=(n=tt)||a.memoizedState!==null,ka(e,t,a),tt=n;break;default:ka(e,t,a)}}function Bd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{dl(e)}catch(a){Ae(t,t.return,a)}}}function Md(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{dl(e)}catch(a){Ae(t,t.return,a)}}function Cm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Sd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Sd),t;default:throw Error(d(435,e.tag))}}function Ko(e,t){var a=Cm(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=qm.bind(null,e,n);n.then(l,l)}})}function jt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],o=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 27:if(Ka(u.type)){De=u.stateNode,kt=!1;break e}break;case 5:De=u.stateNode,kt=!1;break e;case 3:case 4:De=u.stateNode.containerInfo,kt=!0;break e}u=u.return}if(De===null)throw Error(d(160));Yd(o,s,l),De=null,kt=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Cd(t,e),t=t.sibling}var ea=null;function Cd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jt(t,e),Nt(e),n&4&&(La(3,e,e.return),Rl(3,e),La(5,e,e.return));break;case 1:jt(t,e),Nt(e),n&512&&(tt||a===null||oa(a,a.return)),n&64&&xa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=ea;if(jt(t,e),Nt(e),n&512&&(tt||a===null||oa(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":o=l.getElementsByTagName("title")[0],(!o||o[ml]||o[rt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(n),l.head.insertBefore(o,l.querySelector("head > title"))),ht(o,n,a),o[rt]=e,it(o),n=o;break e;case"link":var s=Ch("link","href",l).get(n+(a.href||""));if(s){for(var u=0;u<s.length;u++)if(o=s[u],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(u,1);break t}}o=l.createElement(n),ht(o,n,a),l.head.appendChild(o);break;case"meta":if(s=Ch("meta","content",l).get(n+(a.content||""))){for(u=0;u<s.length;u++)if(o=s[u],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(u,1);break t}}o=l.createElement(n),ht(o,n,a),l.head.appendChild(o);break;default:throw Error(d(468,n))}o[rt]=e,it(o),n=o}e.stateNode=n}else zh(l,e.type,e.stateNode);else e.stateNode=Mh(l,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?zh(l,e.type,e.stateNode):Mh(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&er(e,e.memoizedProps,a.memoizedProps)}break;case 27:jt(t,e),Nt(e),n&512&&(tt||a===null||oa(a,a.return)),a!==null&&n&4&&er(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jt(t,e),Nt(e),n&512&&(tt||a===null||oa(a,a.return)),e.flags&32){l=e.stateNode;try{zn(l,"")}catch(W){Ae(e,e.return,W)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,er(e,l,a!==null?a.memoizedProps:l)),n&1024&&(nr=!0);break;case 6:if(jt(t,e),Nt(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(W){Ae(e,e.return,W)}}break;case 3:if(hi=null,l=ea,ea=ci(t.containerInfo),jt(t,e),ea=l,Nt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{dl(t.containerInfo)}catch(W){Ae(e,e.return,W)}nr&&(nr=!1,zd(e));break;case 4:n=ea,ea=ci(e.stateNode.containerInfo),jt(t,e),Nt(e),ea=n;break;case 12:jt(t,e),Nt(e);break;case 31:jt(t,e),Nt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ko(e,n)));break;case 13:jt(t,e),Nt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($o=ft()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ko(e,n)));break;case 22:l=e.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,p=xa,A=tt;if(xa=p||l,tt=A||c,jt(t,e),tt=A,xa=p,Nt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||c||xa||tt||kn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(o=c.stateNode,l)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=c.stateNode;var M=c.memoizedProps.style,w=M!=null&&M.hasOwnProperty("display")?M.display:null;u.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(W){Ae(c,c.return,W)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(W){Ae(c,c.return,W)}}}else if(t.tag===18){if(a===null){c=t;try{var k=c.stateNode;l?jh(k,!0):jh(c.stateNode,!1)}catch(W){Ae(c,c.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ko(e,a))));break;case 19:jt(t,e),Nt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ko(e,n)));break;case 30:break;case 21:break;default:jt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Id(n)){a=n;break}n=n.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var l=a.stateNode,o=tr(e);Zo(e,o,l);break;case 5:var s=a.stateNode;a.flags&32&&(zn(s,""),a.flags&=-33);var u=tr(e);Zo(e,u,s);break;case 3:case 4:var c=a.stateNode.containerInfo,p=tr(e);ar(e,p,c);break;default:throw Error(d(161))}}catch(A){Ae(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ja(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Td(e,t.alternate,t),t=t.sibling}function kn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:La(4,t,t.return),kn(t);break;case 1:oa(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&jd(t,t.return,a),kn(t);break;case 27:Kl(t.stateNode);case 26:case 5:oa(t,t.return),kn(t);break;case 22:t.memoizedState===null&&kn(t);break;case 30:kn(t);break;default:kn(t)}e=e.sibling}}function Na(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,o=t,s=o.flags;switch(o.tag){case 0:case 11:case 15:Na(l,o,a),Rl(4,o);break;case 1:if(Na(l,o,a),n=o,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(p){Ae(n,n.return,p)}if(n=o,l=n.updateQueue,l!==null){var u=n.stateNode;try{var c=l.shared.hiddenCallbacks;if(c!==null)for(l.shared.hiddenCallbacks=null,l=0;l<c.length;l++)dc(c[l],u)}catch(p){Ae(n,n.return,p)}}a&&s&64&&kd(o),Dl(o,o.return);break;case 27:Ad(o);case 26:case 5:Na(l,o,a),a&&n===null&&s&4&&Nd(o),Dl(o,o.return);break;case 12:Na(l,o,a);break;case 31:Na(l,o,a),a&&s&4&&Bd(l,o);break;case 13:Na(l,o,a),a&&s&4&&Md(l,o);break;case 22:o.memoizedState===null&&Na(l,o,a),Dl(o,o.return);break;case 30:break;default:Na(l,o,a)}t=t.sibling}}function lr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Sl(a))}function or(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sl(e))}function ta(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ud(e,t,a,n),t=t.sibling}function Ud(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:ta(e,t,a,n),l&2048&&Rl(9,t);break;case 1:ta(e,t,a,n);break;case 3:ta(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sl(e)));break;case 12:if(l&2048){ta(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,s=o.id,u=o.onPostCommit;typeof u=="function"&&u(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){Ae(t,t.return,c)}}else ta(e,t,a,n);break;case 31:ta(e,t,a,n);break;case 13:ta(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState!==null?o._visibility&2?ta(e,t,a,n):ql(e,t):o._visibility&2?ta(e,t,a,n):(o._visibility|=2,el(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&lr(s,t);break;case 24:ta(e,t,a,n),l&2048&&or(t.alternate,t);break;default:ta(e,t,a,n)}}function el(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,s=t,u=a,c=n,p=s.flags;switch(s.tag){case 0:case 11:case 15:el(o,s,u,c,l),Rl(8,s);break;case 23:break;case 22:var A=s.stateNode;s.memoizedState!==null?A._visibility&2?el(o,s,u,c,l):ql(o,s):(A._visibility|=2,el(o,s,u,c,l)),l&&p&2048&&lr(s.alternate,s);break;case 24:el(o,s,u,c,l),l&&p&2048&&or(s.alternate,s);break;default:el(o,s,u,c,l)}t=t.sibling}}function ql(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:ql(a,n),l&2048&&lr(n.alternate,n);break;case 24:ql(a,n),l&2048&&or(n.alternate,n);break;default:ql(a,n)}t=t.sibling}}var Ll=8192;function tl(e,t,a){if(e.subtreeFlags&Ll)for(e=e.child;e!==null;)Vd(e,t,a),e=e.sibling}function Vd(e,t,a){switch(e.tag){case 26:tl(e,t,a),e.flags&Ll&&e.memoizedState!==null&&wy(a,ea,e.memoizedState,e.memoizedProps);break;case 5:tl(e,t,a);break;case 3:case 4:var n=ea;ea=ci(e.stateNode.containerInfo),tl(e,t,a),ea=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ll,Ll=16777216,tl(e,t,a),Ll=n):tl(e,t,a));break;default:tl(e,t,a)}}function _d(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];st=n,Hd(n,e)}_d(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Od(e),e=e.sibling}function Od(e){switch(e.tag){case 0:case 11:case 15:Gl(e),e.flags&2048&&La(9,e,e.return);break;case 3:Gl(e);break;case 12:Gl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jo(e)):Gl(e);break;default:Gl(e)}}function Jo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];st=n,Hd(n,e)}_d(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:La(8,t,t.return),Jo(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Jo(t));break;default:Jo(t)}e=e.sibling}}function Hd(e,t){for(;st!==null;){var a=st;switch(a.tag){case 0:case 11:case 15:La(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Sl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,st=n;else e:for(a=e;st!==null;){n=st;var l=n.sibling,o=n.return;if(Ed(n),n===a){st=null;break e}if(l!==null){l.return=o,st=l;break e}st=o}}}var zm={getCacheForType:function(e){var t=ct($e),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ct($e).controller.signal}},Um=typeof WeakMap=="function"?WeakMap:Map,je=0,Ce=null,he=null,me=0,Ie=0,Ct=null,Ga=!1,al=!1,ir=!1,Ia=0,We=0,Xa=0,jn=0,sr=0,zt=0,nl=0,Xl=null,It=null,rr=!1,$o=0,Rd=0,Po=1/0,ei=null,Wa=null,lt=0,Qa=null,ll=null,Aa=0,ur=0,cr=null,Dd=null,Wl=0,dr=null;function Ut(){return(je&2)!==0&&me!==0?me&-me:j.T!==null?pr():nu()}function qd(){if(zt===0)if((me&536870912)===0||ge){var e=de;de<<=1,(de&3932160)===0&&(de=262144),zt=e}else zt=536870912;return e=Bt.current,e!==null&&(e.flags|=32),zt}function At(e,t,a){(e===Ce&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(ol(e,0),Fa(e,me,zt,!1)),ua(e,a),((je&2)===0||e!==Ce)&&(e===Ce&&((je&2)===0&&(jn|=a),We===4&&Fa(e,me,zt,!1)),ia(e))}function Ld(e,t,a){if((je&6)!==0)throw Error(d(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Qe(e,t),l=n?Om(e,t):fr(e,t,!0),o=n;do{if(l===0){al&&!n&&Fa(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!Vm(a)){l=fr(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var u=e;l=Xl;var c=u.current.memoizedState.isDehydrated;if(c&&(ol(u,s).flags|=256),s=fr(u,s,!1),s!==2){if(ir&&!c){u.errorRecoveryDisabledLanes|=o,jn|=o,l=4;break e}o=It,It=l,o!==null&&(It===null?It=o:It.push.apply(It,o))}l=s}if(o=!1,l!==2)continue}}if(l===1){ol(e,0),Fa(e,t,0,!0);break}e:{switch(n=e,o=l,o){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:Fa(n,t,zt,!Ga);break e;case 2:It=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(l=$o+300-ft(),10<l)){if(Fa(n,t,zt,!Ga),$t(n,0,!0)!==0)break e;Aa=t,n.timeoutHandle=vh(Gd.bind(null,n,a,It,ei,rr,t,zt,jn,nl,Ga,o,"Throttled",-0,0),l);break e}Gd(n,a,It,ei,rr,t,zt,jn,nl,Ga,o,null,-0,0)}}break}while(!0);ia(e)}function Gd(e,t,a,n,l,o,s,u,c,p,A,M,w,k){if(e.timeoutHandle=-1,M=t.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},Vd(t,o,M);var W=(o&62914560)===o?$o-ft():(o&4194048)===o?Rd-ft():0;if(W=vy(M,W),W!==null){Aa=o,e.cancelPendingCommit=W($d.bind(null,e,t,o,a,n,l,s,u,c,A,M,null,w,k)),Fa(e,o,s,!p);return}}$d(e,t,o,a,n,l,s,u,c)}function Vm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],o=l.getSnapshot;l=l.value;try{if(!Et(o(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fa(e,t,a,n){t&=~sr,t&=~jn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var o=31-ot(l),s=1<<o;n[o]=-1,l&=~s}a!==0&&eu(e,a,t)}function ti(){return(je&6)===0?(Ql(0),!1):!0}function hr(){if(he!==null){if(Ie===0)var e=he.return;else e=he,ya=mn=null,Ts(e),Zn=null,El=0,e=he;for(;e!==null;)xd(e.alternate,e),e=e.return;he=null}}function ol(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ay(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Aa=0,hr(),Ce=e,he=a=fa(e.current,null),me=t,Ie=0,Ct=null,Ga=!1,al=Qe(e,t),ir=!1,nl=zt=sr=jn=Xa=We=0,It=Xl=null,rr=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-ot(n),o=1<<l;t|=e[l],n&=~o}return Ia=t,ko(),a}function Xd(e,t){se=null,j.H=_l,t===Fn||t===Yo?(t=sc(),Ie=3):t===gs?(t=sc(),Ie=4):Ie=t===Gs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ct=t,he===null&&(We=1,Go(e,Lt(t,e.current)))}function Wd(){var e=Bt.current;return e===null?!0:(me&4194048)===me?Qt===null:(me&62914560)===me||(me&536870912)!==0?e===Qt:!1}function Qd(){var e=j.H;return j.H=_l,e===null?_l:e}function Fd(){var e=j.A;return j.A=zm,e}function ai(){We=4,Ga||(me&4194048)!==me&&Bt.current!==null||(al=!0),(Xa&134217727)===0&&(jn&134217727)===0||Ce===null||Fa(Ce,me,zt,!1)}function fr(e,t,a){var n=je;je|=2;var l=Qd(),o=Fd();(Ce!==e||me!==t)&&(ei=null,ol(e,t)),t=!1;var s=We;e:do try{if(Ie!==0&&he!==null){var u=he,c=Ct;switch(Ie){case 8:hr(),s=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(t=!0);var p=Ie;if(Ie=0,Ct=null,il(e,u,c,p),a&&al){s=0;break e}break;default:p=Ie,Ie=0,Ct=null,il(e,u,c,p)}}_m(),s=We;break}catch(A){Xd(e,A)}while(!0);return t&&e.shellSuspendCounter++,ya=mn=null,je=n,j.H=l,j.A=o,he===null&&(Ce=null,me=0,ko()),s}function _m(){for(;he!==null;)Zd(he)}function Om(e,t){var a=je;je|=2;var n=Qd(),l=Fd();Ce!==e||me!==t?(ei=null,Po=ft()+500,ol(e,t)):al=Qe(e,t);e:do try{if(Ie!==0&&he!==null){t=he;var o=Ct;t:switch(Ie){case 1:Ie=0,Ct=null,il(e,t,o,1);break;case 2:case 9:if(oc(o)){Ie=0,Ct=null,Kd(t);break}t=function(){Ie!==2&&Ie!==9||Ce!==e||(Ie=7),ia(e)},o.then(t,t);break e;case 3:Ie=7;break e;case 4:Ie=5;break e;case 7:oc(o)?(Ie=0,Ct=null,Kd(t)):(Ie=0,Ct=null,il(e,t,o,7));break;case 5:var s=null;switch(he.tag){case 26:s=he.memoizedState;case 5:case 27:var u=he;if(s?Uh(s):u.stateNode.complete){Ie=0,Ct=null;var c=u.sibling;if(c!==null)he=c;else{var p=u.return;p!==null?(he=p,ni(p)):he=null}break t}}Ie=0,Ct=null,il(e,t,o,5);break;case 6:Ie=0,Ct=null,il(e,t,o,6);break;case 8:hr(),We=6;break e;default:throw Error(d(462))}}Hm();break}catch(A){Xd(e,A)}while(!0);return ya=mn=null,j.H=n,j.A=l,je=a,he!==null?0:(Ce=null,me=0,ko(),We)}function Hm(){for(;he!==null&&!Je();)Zd(he)}function Zd(e){var t=wd(e.alternate,e,Ia);e.memoizedProps=e.pendingProps,t===null?ni(e):he=t}function Kd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=fd(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=fd(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:Ts(t);default:xd(a,t),t=he=Fu(t,Ia),t=wd(a,t,Ia)}e.memoizedProps=e.pendingProps,t===null?ni(e):he=t}function il(e,t,a,n){ya=mn=null,Ts(t),Zn=null,El=0;var l=t.return;try{if(Sm(e,l,t,a,me)){We=1,Go(e,Lt(a,e.current)),he=null;return}}catch(o){if(l!==null)throw he=l,o;We=1,Go(e,Lt(a,e.current)),he=null;return}t.flags&32768?(ge||n===1?e=!0:al||(me&536870912)!==0?e=!1:(Ga=e=!0,(n===2||n===9||n===3||n===6)&&(n=Bt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Jd(t,e)):ni(t)}function ni(e){var t=e;do{if((t.flags&32768)!==0){Jd(t,Ga);return}e=t.return;var a=Ym(t.alternate,t,Ia);if(a!==null){he=a;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);We===0&&(We=5)}function Jd(e,t){do{var a=Bm(e.alternate,e);if(a!==null){a.flags&=32767,he=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){he=e;return}he=e=a}while(e!==null);We=6,he=null}function $d(e,t,a,n,l,o,s,u,c){e.cancelPendingCommit=null;do li();while(lt!==0);if((je&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(o=t.lanes|t.childLanes,o|=ts,Pr(e,a,o,s,u,c),e===Ce&&(he=Ce=null,me=0),ll=t,Qa=e,Aa=a,ur=o,cr=l,Dd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Lm(Ya,function(){return nh(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=j.T,j.T=null,l=C.p,C.p=2,s=je,je|=4;try{Mm(e,t,a)}finally{je=s,C.p=l,j.T=n}}lt=1,Pd(),eh(),th()}}function Pd(){if(lt===1){lt=0;var e=Qa,t=ll,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var n=C.p;C.p=2;var l=je;je|=4;try{Cd(t,e);var o=Ir,s=Hu(e.containerInfo),u=o.focusedElem,c=o.selectionRange;if(s!==u&&u&&u.ownerDocument&&Ou(u.ownerDocument.documentElement,u)){if(c!==null&&Ki(u)){var p=c.start,A=c.end;if(A===void 0&&(A=p),"selectionStart"in u)u.selectionStart=p,u.selectionEnd=Math.min(A,u.value.length);else{var M=u.ownerDocument||document,w=M&&M.defaultView||window;if(w.getSelection){var k=w.getSelection(),W=u.textContent.length,ee=Math.min(c.start,W),Ye=c.end===void 0?ee:Math.min(c.end,W);!k.extend&&ee>Ye&&(s=Ye,Ye=ee,ee=s);var m=_u(u,ee),f=_u(u,Ye);if(m&&f&&(k.rangeCount!==1||k.anchorNode!==m.node||k.anchorOffset!==m.offset||k.focusNode!==f.node||k.focusOffset!==f.offset)){var g=M.createRange();g.setStart(m.node,m.offset),k.removeAllRanges(),ee>Ye?(k.addRange(g),k.extend(f.node,f.offset)):(g.setEnd(f.node,f.offset),k.addRange(g))}}}}for(M=[],k=u;k=k.parentNode;)k.nodeType===1&&M.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<M.length;u++){var T=M[u];T.element.scrollLeft=T.left,T.element.scrollTop=T.top}}gi=!!Nr,Ir=Nr=null}finally{je=l,C.p=n,j.T=a}}e.current=t,lt=2}}function eh(){if(lt===2){lt=0;var e=Qa,t=ll,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var n=C.p;C.p=2;var l=je;je|=4;try{Td(e,t.alternate,t)}finally{je=l,C.p=n,j.T=a}}lt=3}}function th(){if(lt===4||lt===3){lt=0,so();var e=Qa,t=ll,a=Aa,n=Dd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?lt=5:(lt=0,ll=Qa=null,ah(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Wa=null),Bi(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Ba,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=j.T,l=C.p,C.p=2,j.T=null;try{for(var o=e.onRecoverableError,s=0;s<n.length;s++){var u=n[s];o(u.value,{componentStack:u.stack})}}finally{j.T=t,C.p=l}}(Aa&3)!==0&&li(),ia(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===dr?Wl++:(Wl=0,dr=e):Wl=0,Ql(0)}}function ah(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Sl(t)))}function li(){return Pd(),eh(),th(),nh()}function nh(){if(lt!==5)return!1;var e=Qa,t=ur;ur=0;var a=Bi(Aa),n=j.T,l=C.p;try{C.p=32>a?32:a,j.T=null,a=cr,cr=null;var o=Qa,s=Aa;if(lt=0,ll=Qa=null,Aa=0,(je&6)!==0)throw Error(d(331));var u=je;if(je|=4,Od(o.current),Ud(o,o.current,s,a),je=u,Ql(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Ba,o)}catch{}return!0}finally{C.p=l,j.T=n,ah(e,t)}}function lh(e,t,a){t=Lt(a,t),t=Ls(e.stateNode,t,2),e=Ra(e,t,2),e!==null&&(ua(e,2),ia(e))}function Ae(e,t,a){if(e.tag===3)lh(e,e,a);else for(;t!==null;){if(t.tag===3){lh(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Wa===null||!Wa.has(n))){e=Lt(a,e),a=od(2),n=Ra(t,a,2),n!==null&&(id(a,n,t,e),ua(n,2),ia(n));break}}t=t.return}}function mr(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Um;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(ir=!0,l.add(a),e=Rm.bind(null,e,t,a),t.then(e,e))}function Rm(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(me&a)===a&&(We===4||We===3&&(me&62914560)===me&&300>ft()-$o?(je&2)===0&&ol(e,0):sr|=a,nl===me&&(nl=0)),ia(e)}function oh(e,t){t===0&&(t=fl()),e=dn(e,t),e!==null&&(ua(e,t),ia(e))}function Dm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),oh(e,a)}function qm(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(t),oh(e,a)}function Lm(e,t){return pe(e,t)}var oi=null,sl=null,yr=!1,ii=!1,gr=!1,Za=0;function ia(e){e!==sl&&e.next===null&&(sl===null?oi=sl=e:sl=sl.next=e),ii=!0,yr||(yr=!0,Xm())}function Ql(e,t){if(!gr&&ii){gr=!0;do for(var a=!1,n=oi;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var o=0;else{var s=n.suspendedLanes,u=n.pingedLanes;o=(1<<31-ot(42|e)+1)-1,o&=l&~(s&~u),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,uh(n,o))}else o=me,o=$t(n,n===Ce?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||Qe(n,o)||(a=!0,uh(n,o));n=n.next}while(a);gr=!1}}function Gm(){ih()}function ih(){ii=yr=!1;var e=0;Za!==0&&ty()&&(e=Za);for(var t=ft(),a=null,n=oi;n!==null;){var l=n.next,o=sh(n,t);o===0?(n.next=null,a===null?oi=l:a.next=l,l===null&&(sl=a)):(a=n,(e!==0||(o&3)!==0)&&(ii=!0)),n=l}lt!==0&&lt!==5||Ql(e),Za!==0&&(Za=0)}function sh(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-ot(o),u=1<<s,c=l[s];c===-1?((u&a)===0||(u&n)!==0)&&(l[s]=Ht(u,t)):c<=t&&(e.expiredLanes|=u),o&=~u}if(t=Ce,a=me,a=$t(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Jt(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Qe(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Jt(n),Bi(a)){case 2:case 8:a=An;break;case 32:a=Ya;break;case 268435456:a=ro;break;default:a=Ya}return n=rh.bind(null,e),a=pe(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Jt(n),e.callbackPriority=2,e.callbackNode=null,2}function rh(e,t){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(li()&&e.callbackNode!==a)return null;var n=me;return n=$t(e,e===Ce?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Ld(e,n,t),sh(e,ft()),e.callbackNode!=null&&e.callbackNode===a?rh.bind(null,e):null)}function uh(e,t){if(li())return null;Ld(e,t,!0)}function Xm(){ny(function(){(je&6)!==0?pe(In,Gm):ih()})}function pr(){if(Za===0){var e=Wn;e===0&&(e=z,z<<=1,(z&261888)===0&&(z=256)),Za=e}return Za}function ch(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mo(""+e)}function dh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Wm(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var o=ch((l[vt]||null).action),s=n.submitter;s&&(t=(t=s[vt]||null)?ch(t.formAction):s.getAttribute("formAction"),t!==null&&(o=t,s=null));var u=new bo("action","action",null,n,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Za!==0){var c=s?dh(l,s):new FormData(l);_s(a,{pending:!0,data:c,method:l.method,action:o},null,c)}}else typeof o=="function"&&(u.preventDefault(),c=s?dh(l,s):new FormData(l),_s(a,{pending:!0,data:c,method:l.method,action:o},o,c))},currentTarget:l}]})}}for(var br=0;br<es.length;br++){var wr=es[br],Qm=wr.toLowerCase(),Fm=wr[0].toUpperCase()+wr.slice(1);Pt(Qm,"on"+Fm)}Pt(qu,"onAnimationEnd"),Pt(Lu,"onAnimationIteration"),Pt(Gu,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(cm,"onTransitionRun"),Pt(dm,"onTransitionStart"),Pt(hm,"onTransitionCancel"),Pt(Xu,"onTransitionEnd"),Mn("onMouseEnter",["mouseout","mouseover"]),Mn("onMouseLeave",["mouseout","mouseover"]),Mn("onPointerEnter",["pointerout","pointerover"]),Mn("onPointerLeave",["pointerout","pointerover"]),sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));function hh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var u=n[s],c=u.instance,p=u.currentTarget;if(u=u.listener,c!==o&&l.isPropagationStopped())break e;o=u,l.currentTarget=p;try{o(l)}catch(A){xo(A)}l.currentTarget=null,o=c}else for(s=0;s<n.length;s++){if(u=n[s],c=u.instance,p=u.currentTarget,u=u.listener,c!==o&&l.isPropagationStopped())break e;o=u,l.currentTarget=p;try{o(l)}catch(A){xo(A)}l.currentTarget=null,o=c}}}}function fe(e,t){var a=t[Mi];a===void 0&&(a=t[Mi]=new Set);var n=e+"__bubble";a.has(n)||(fh(t,e,2,!1),a.add(n))}function vr(e,t,a){var n=0;t&&(n|=4),fh(a,e,n,t)}var si="_reactListening"+Math.random().toString(36).slice(2);function xr(e){if(!e[si]){e[si]=!0,iu.forEach(function(a){a!=="selectionchange"&&(Zm.has(a)||vr(a,!1,e),vr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[si]||(t[si]=!0,vr("selectionchange",!1,t))}}function fh(e,t,a,n){switch(qh(t)){case 2:var l=jy;break;case 8:l=Ny;break;default:l=Vr}a=l.bind(null,t,a,e),l=void 0,!Di||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function kr(e,t,a,n,l){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var u=n.stateNode.containerInfo;if(u===l)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;u!==null;){if(s=En(u),s===null)return;if(c=s.tag,c===5||c===6||c===26||c===27){n=o=s;continue e}u=u.parentNode}}n=n.return}bu(function(){var p=o,A=Hi(a),M=[];e:{var w=Wu.get(e);if(w!==void 0){var k=bo,W=e;switch(e){case"keypress":if(go(a)===0)break e;case"keydown":case"keyup":k=qf;break;case"focusin":W="focus",k=Xi;break;case"focusout":W="blur",k=Xi;break;case"beforeblur":case"afterblur":k=Xi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Xf;break;case qu:case Lu:case Gu:k=Cf;break;case Xu:k=Qf;break;case"scroll":case"scrollend":k=Tf;break;case"wheel":k=Zf;break;case"copy":case"cut":case"paste":k=Uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ju;break;case"toggle":case"beforetoggle":k=Jf}var ee=(t&4)!==0,Ye=!ee&&(e==="scroll"||e==="scrollend"),m=ee?w!==null?w+"Capture":null:w;ee=[];for(var f=p,g;f!==null;){var T=f;if(g=T.stateNode,T=T.tag,T!==5&&T!==26&&T!==27||g===null||m===null||(T=gl(f,m),T!=null&&ee.push(Zl(f,T,g))),Ye)break;f=f.return}0<ee.length&&(w=new k(w,W,null,a,A),M.push({event:w,listeners:ee}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",w&&a!==Oi&&(W=a.relatedTarget||a.fromElement)&&(En(W)||W[Tn]))break e;if((k||w)&&(w=A.window===A?A:(w=A.ownerDocument)?w.defaultView||w.parentWindow:window,k?(W=a.relatedTarget||a.toElement,k=p,W=W?En(W):null,W!==null&&(Ye=H(W),ee=W.tag,W!==Ye||ee!==5&&ee!==27&&ee!==6)&&(W=null)):(k=null,W=p),k!==W)){if(ee=xu,T="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(ee=ju,T="onPointerLeave",m="onPointerEnter",f="pointer"),Ye=k==null?w:yl(k),g=W==null?w:yl(W),w=new ee(T,f+"leave",k,a,A),w.target=Ye,w.relatedTarget=g,T=null,En(A)===p&&(ee=new ee(m,f+"enter",W,a,A),ee.target=g,ee.relatedTarget=Ye,T=ee),Ye=T,k&&W)t:{for(ee=Km,m=k,f=W,g=0,T=m;T;T=ee(T))g++;T=0;for(var P=f;P;P=ee(P))T++;for(;0<g-T;)m=ee(m),g--;for(;0<T-g;)f=ee(f),T--;for(;g--;){if(m===f||f!==null&&m===f.alternate){ee=m;break t}m=ee(m),f=ee(f)}ee=null}else ee=null;k!==null&&mh(M,w,k,ee,!1),W!==null&&Ye!==null&&mh(M,Ye,W,ee,!0)}}e:{if(w=p?yl(p):window,k=w.nodeName&&w.nodeName.toLowerCase(),k==="select"||k==="input"&&w.type==="file")var ve=Bu;else if(Eu(w))if(Mu)ve=sm;else{ve=om;var F=lm}else k=w.nodeName,!k||k.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?p&&_i(p.elementType)&&(ve=Bu):ve=im;if(ve&&(ve=ve(e,p))){Yu(M,ve,a,A);break e}F&&F(e,w,p),e==="focusout"&&p&&w.type==="number"&&p.memoizedProps.value!=null&&Vi(w,"number",w.value)}switch(F=p?yl(p):window,e){case"focusin":(Eu(F)||F.contentEditable==="true")&&(On=F,Ji=p,Nl=null);break;case"focusout":Nl=Ji=On=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,Ru(M,a,A);break;case"selectionchange":if(um)break;case"keydown":case"keyup":Ru(M,a,A)}var ue;if(Qi)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else _n?Su(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Nu&&a.locale!=="ko"&&(_n||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&_n&&(ue=wu()):(Ca=A,qi="value"in Ca?Ca.value:Ca.textContent,_n=!0)),F=ri(p,ye),0<F.length&&(ye=new ku(ye,e,null,a,A),M.push({event:ye,listeners:F}),ue?ye.data=ue:(ue=Tu(a),ue!==null&&(ye.data=ue)))),(ue=Pf?em(e,a):tm(e,a))&&(ye=ri(p,"onBeforeInput"),0<ye.length&&(F=new ku("onBeforeInput","beforeinput",null,a,A),M.push({event:F,listeners:ye}),F.data=ue)),Wm(M,e,p,a,A)}hh(M,t)})}function Zl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ri(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=gl(e,a),l!=null&&n.unshift(Zl(e,l,o)),l=gl(e,t),l!=null&&n.push(Zl(e,l,o))),e.tag===3)return n;e=e.return}return[]}function Km(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mh(e,t,a,n,l){for(var o=t._reactName,s=[];a!==null&&a!==n;){var u=a,c=u.alternate,p=u.stateNode;if(u=u.tag,c!==null&&c===n)break;u!==5&&u!==26&&u!==27||p===null||(c=p,l?(p=gl(a,o),p!=null&&s.unshift(Zl(a,p,c))):l||(p=gl(a,o),p!=null&&s.push(Zl(a,p,c)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Jm=/\r\n?/g,$m=/\u0000|\uFFFD/g;function yh(e){return(typeof e=="string"?e:""+e).replace(Jm,`
`).replace($m,"")}function gh(e,t){return t=yh(t),yh(e)===t}function Ee(e,t,a,n,l,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||zn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&zn(e,""+n);break;case"className":ho(e,"class",n);break;case"tabIndex":ho(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ho(e,a,n);break;case"style":gu(e,n,o);break;case"data":if(t!=="object"){ho(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=mo(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",l.name,l,null),Ee(e,t,"formEncType",l.formEncType,l,null),Ee(e,t,"formMethod",l.formMethod,l,null),Ee(e,t,"formTarget",l.formTarget,l,null)):(Ee(e,t,"encType",l.encType,l,null),Ee(e,t,"method",l.method,l,null),Ee(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=mo(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=da);break;case"onScroll":n!=null&&fe("scroll",e);break;case"onScrollEnd":n!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=mo(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":fe("beforetoggle",e),fe("toggle",e),co(e,"popover",n);break;case"xlinkActuate":ca(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ca(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ca(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ca(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ca(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ca(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ca(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ca(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ca(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":co(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Af.get(a)||a,co(e,a,n))}}function jr(e,t,a,n,l,o){switch(a){case"style":gu(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof n=="string"?zn(e,n):(typeof n=="number"||typeof n=="bigint")&&zn(e,""+n);break;case"onScroll":n!=null&&fe("scroll",e);break;case"onScrollEnd":n!=null&&fe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!su.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),o=e[vt]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):co(e,a,n)}}}function ht(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var n=!1,l=!1,o;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];if(s!=null)switch(o){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ee(e,t,o,s,a,null)}}l&&Ee(e,t,"srcSet",a.srcSet,a,null),n&&Ee(e,t,"src",a.src,a,null);return;case"input":fe("invalid",e);var u=o=s=l=null,c=null,p=null;for(n in a)if(a.hasOwnProperty(n)){var A=a[n];if(A!=null)switch(n){case"name":l=A;break;case"type":s=A;break;case"checked":c=A;break;case"defaultChecked":p=A;break;case"value":o=A;break;case"defaultValue":u=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(d(137,t));break;default:Ee(e,t,n,A,a,null)}}hu(e,o,u,c,p,s,l,!1);return;case"select":fe("invalid",e),n=s=o=null;for(l in a)if(a.hasOwnProperty(l)&&(u=a[l],u!=null))switch(l){case"value":o=u;break;case"defaultValue":s=u;break;case"multiple":n=u;default:Ee(e,t,l,u,a,null)}t=o,a=s,e.multiple=!!n,t!=null?Cn(e,!!n,t,!1):a!=null&&Cn(e,!!n,a,!0);return;case"textarea":fe("invalid",e),o=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(u=a[s],u!=null))switch(s){case"value":n=u;break;case"defaultValue":l=u;break;case"children":o=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:Ee(e,t,s,u,a,null)}mu(e,n,l,o);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(n=a[c],n!=null))switch(c){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ee(e,t,c,n,a,null)}return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(n=0;n<Fl.length;n++)fe(Fl[n],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(n=a[p],n!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ee(e,t,p,n,a,null)}return;default:if(_i(t)){for(A in a)a.hasOwnProperty(A)&&(n=a[A],n!==void 0&&jr(e,t,A,n,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(n=a[u],n!=null&&Ee(e,t,u,n,a,null))}function Pm(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,s=null,u=null,c=null,p=null,A=null;for(k in a){var M=a[k];if(a.hasOwnProperty(k)&&M!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":c=M;default:n.hasOwnProperty(k)||Ee(e,t,k,null,n,M)}}for(var w in n){var k=n[w];if(M=a[w],n.hasOwnProperty(w)&&(k!=null||M!=null))switch(w){case"type":o=k;break;case"name":l=k;break;case"checked":p=k;break;case"defaultChecked":A=k;break;case"value":s=k;break;case"defaultValue":u=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(d(137,t));break;default:k!==M&&Ee(e,t,w,k,n,M)}}Ui(e,s,u,c,p,A,o,l);return;case"select":k=s=u=w=null;for(o in a)if(c=a[o],a.hasOwnProperty(o)&&c!=null)switch(o){case"value":break;case"multiple":k=c;default:n.hasOwnProperty(o)||Ee(e,t,o,null,n,c)}for(l in n)if(o=n[l],c=a[l],n.hasOwnProperty(l)&&(o!=null||c!=null))switch(l){case"value":w=o;break;case"defaultValue":u=o;break;case"multiple":s=o;default:o!==c&&Ee(e,t,l,o,n,c)}t=u,a=s,n=k,w!=null?Cn(e,!!a,w,!1):!!n!=!!a&&(t!=null?Cn(e,!!a,t,!0):Cn(e,!!a,a?[]:"",!1));return;case"textarea":k=w=null;for(u in a)if(l=a[u],a.hasOwnProperty(u)&&l!=null&&!n.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Ee(e,t,u,null,n,l)}for(s in n)if(l=n[s],o=a[s],n.hasOwnProperty(s)&&(l!=null||o!=null))switch(s){case"value":w=l;break;case"defaultValue":k=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(d(91));break;default:l!==o&&Ee(e,t,s,l,n,o)}fu(e,w,k);return;case"option":for(var W in a)if(w=a[W],a.hasOwnProperty(W)&&w!=null&&!n.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:Ee(e,t,W,null,n,w)}for(c in n)if(w=n[c],k=a[c],n.hasOwnProperty(c)&&w!==k&&(w!=null||k!=null))switch(c){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Ee(e,t,c,w,n,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)w=a[ee],a.hasOwnProperty(ee)&&w!=null&&!n.hasOwnProperty(ee)&&Ee(e,t,ee,null,n,w);for(p in n)if(w=n[p],k=a[p],n.hasOwnProperty(p)&&w!==k&&(w!=null||k!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(d(137,t));break;default:Ee(e,t,p,w,n,k)}return;default:if(_i(t)){for(var Ye in a)w=a[Ye],a.hasOwnProperty(Ye)&&w!==void 0&&!n.hasOwnProperty(Ye)&&jr(e,t,Ye,void 0,n,w);for(A in n)w=n[A],k=a[A],!n.hasOwnProperty(A)||w===k||w===void 0&&k===void 0||jr(e,t,A,w,n,k);return}}for(var m in a)w=a[m],a.hasOwnProperty(m)&&w!=null&&!n.hasOwnProperty(m)&&Ee(e,t,m,null,n,w);for(M in n)w=n[M],k=a[M],!n.hasOwnProperty(M)||w===k||w==null&&k==null||Ee(e,t,M,w,n,k)}function ph(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ey(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],o=l.transferSize,s=l.initiatorType,u=l.duration;if(o&&u&&ph(s)){for(s=0,u=l.responseEnd,n+=1;n<a.length;n++){var c=a[n],p=c.startTime;if(p>u)break;var A=c.transferSize,M=c.initiatorType;A&&ph(M)&&(c=c.responseEnd,s+=A*(c<u?1:(u-p)/(c-p)))}if(--n,t+=8*(o+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nr=null,Ir=null;function ui(e){return e.nodeType===9?e:e.ownerDocument}function bh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ar(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sr=null;function ty(){var e=window.event;return e&&e.type==="popstate"?e===Sr?!1:(Sr=e,!0):(Sr=null,!1)}var vh=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(e){return xh.resolve(null).then(e).catch(ly)}:vh;function ly(e){setTimeout(function(){throw e})}function Ka(e){return e==="head"}function kh(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),dl(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Kl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Kl(a);for(var o=a.firstChild;o;){var s=o.nextSibling,u=o.nodeName;o[ml]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=s}}else a==="body"&&Kl(e.ownerDocument.body);a=l}while(a);dl(t)}function jh(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Tr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tr(a),Ci(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function oy(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[ml])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Ft(e.nextSibling),e===null)break}return null}function iy(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ft(e.nextSibling),e===null))return null;return e}function Nh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ft(e.nextSibling),e===null))return null;return e}function Er(e){return e.data==="$?"||e.data==="$~"}function Yr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function sy(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Br=null;function Ih(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ft(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ah(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Sh(e,t,a){switch(t=ui(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Kl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ci(e)}var Zt=new Map,Th=new Set;function ci(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sa=C.d;C.d={f:ry,r:uy,D:cy,C:dy,L:hy,m:fy,X:yy,S:my,M:gy};function ry(){var e=Sa.f(),t=ti();return e||t}function uy(e){var t=Yn(e);t!==null&&t.tag===5&&t.type==="form"?Xc(t):Sa.r(e)}var rl=typeof document>"u"?null:document;function Eh(e,t,a){var n=rl;if(n&&typeof t=="string"&&t){var l=Dt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Th.has(l)||(Th.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),ht(t,"link",e),it(t),n.head.appendChild(t)))}}function cy(e){Sa.D(e),Eh("dns-prefetch",e,null)}function dy(e,t){Sa.C(e,t),Eh("preconnect",e,t)}function hy(e,t,a){Sa.L(e,t,a);var n=rl;if(n&&e&&t){var l='link[rel="preload"][as="'+Dt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Dt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Dt(a.imageSizes)+'"]')):l+='[href="'+Dt(e)+'"]';var o=l;switch(t){case"style":o=ul(e);break;case"script":o=cl(e)}Zt.has(o)||(e=V({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Zt.set(o,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(Jl(o))||t==="script"&&n.querySelector($l(o))||(t=n.createElement("link"),ht(t,"link",e),it(t),n.head.appendChild(t)))}}function fy(e,t){Sa.m(e,t);var a=rl;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Dt(n)+'"][href="'+Dt(e)+'"]',o=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=cl(e)}if(!Zt.has(o)&&(e=V({rel:"modulepreload",href:e},t),Zt.set(o,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($l(o)))return}n=a.createElement("link"),ht(n,"link",e),it(n),a.head.appendChild(n)}}}function my(e,t,a){Sa.S(e,t,a);var n=rl;if(n&&e){var l=Bn(n).hoistableStyles,o=ul(e);t=t||"default";var s=l.get(o);if(!s){var u={loading:0,preload:null};if(s=n.querySelector(Jl(o)))u.loading=5;else{e=V({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Zt.get(o))&&Mr(e,a);var c=s=n.createElement("link");it(c),ht(c,"link",e),c._p=new Promise(function(p,A){c.onload=p,c.onerror=A}),c.addEventListener("load",function(){u.loading|=1}),c.addEventListener("error",function(){u.loading|=2}),u.loading|=4,di(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:u},l.set(o,s)}}}function yy(e,t){Sa.X(e,t);var a=rl;if(a&&e){var n=Bn(a).hoistableScripts,l=cl(e),o=n.get(l);o||(o=a.querySelector($l(l)),o||(e=V({src:e,async:!0},t),(t=Zt.get(l))&&Cr(e,t),o=a.createElement("script"),it(o),ht(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function gy(e,t){Sa.M(e,t);var a=rl;if(a&&e){var n=Bn(a).hoistableScripts,l=cl(e),o=n.get(l);o||(o=a.querySelector($l(l)),o||(e=V({src:e,async:!0,type:"module"},t),(t=Zt.get(l))&&Cr(e,t),o=a.createElement("script"),it(o),ht(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function Yh(e,t,a,n){var l=(l=ne.current)?ci(l):null;if(!l)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=ul(a.href),a=Bn(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ul(a.href);var o=Bn(l).hoistableStyles,s=o.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=l.querySelector(Jl(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Zt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Zt.set(e,a),o||py(l,e,a,s.state))),t&&n===null)throw Error(d(528,""));return s}if(t&&n!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=cl(a),a=Bn(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ul(e){return'href="'+Dt(e)+'"'}function Jl(e){return'link[rel="stylesheet"]['+e+"]"}function Bh(e){return V({},e,{"data-precedence":e.precedence,precedence:null})}function py(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ht(t,"link",a),it(t),e.head.appendChild(t))}function cl(e){return'[src="'+Dt(e)+'"]'}function $l(e){return"script[async]"+e}function Mh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Dt(a.href)+'"]');if(n)return t.instance=n,it(n),n;var l=V({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),it(n),ht(n,"style",l),di(n,a.precedence,e),t.instance=n;case"stylesheet":l=ul(a.href);var o=e.querySelector(Jl(l));if(o)return t.state.loading|=4,t.instance=o,it(o),o;n=Bh(a),(l=Zt.get(l))&&Mr(n,l),o=(e.ownerDocument||e).createElement("link"),it(o);var s=o;return s._p=new Promise(function(u,c){s.onload=u,s.onerror=c}),ht(o,"link",n),t.state.loading|=4,di(o,a.precedence,e),t.instance=o;case"script":return o=cl(a.src),(l=e.querySelector($l(o)))?(t.instance=l,it(l),l):(n=a,(l=Zt.get(o))&&(n=V({},a),Cr(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),it(l),ht(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,di(n,a.precedence,e));return t.instance}function di(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,o=l,s=0;s<n.length;s++){var u=n[s];if(u.dataset.precedence===t)o=u;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Mr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Cr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hi=null;function Ch(e,t,a){if(hi===null){var n=new Map,l=hi=new Map;l.set(a,n)}else l=hi,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var o=a[l];if(!(o[ml]||o[rt]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(t)||"";s=e+s;var u=n.get(s);u?u.push(o):n.set(s,[o])}}return n}function zh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function by(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Uh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wy(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=ul(n.href),o=t.querySelector(Jl(l));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=fi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,it(o);return}o=t.ownerDocument||t,n=Bh(n),(l=Zt.get(l))&&Mr(n,l),o=o.createElement("link"),it(o);var s=o;s._p=new Promise(function(u,c){s.onload=u,s.onerror=c}),ht(o,"link",n),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var zr=0;function vy(e,t){return e.stylesheets&&e.count===0&&yi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&yi(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&zr===0&&(zr=62500*ey());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yi(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>zr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function fi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mi=null;function yi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mi=new Map,t.forEach(xy,e),mi=null,fi.call(e))}function xy(e,t){if(!(t.state.loading&4)){var a=mi.get(e);if(a)var n=a.get(null);else{a=new Map,mi.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var s=l[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),o=a.get(s)||n,o===n&&a.set(null,l),a.set(s,l),this.count++,n=fi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Pl={$$typeof:re,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function ky(e,t,a,n,l,o,s,u,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sn(0),this.hiddenUpdates=Sn(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Vh(e,t,a,n,l,o,s,u,c,p,A,M){return e=new ky(e,t,a,s,c,p,A,M,u),t=1,o===!0&&(t|=24),o=Yt(3,null,null,t),e.current=o,o.stateNode=e,t=fs(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},ps(o),e}function _h(e){return e?(e=Dn,e):Dn}function Oh(e,t,a,n,l,o){l=_h(l),n.context===null?n.context=l:n.pendingContext=l,n=Ha(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=Ra(e,n,t),a!==null&&(At(a,e,t),Bl(a,e,t))}function Hh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ur(e,t){Hh(e,t),(e=e.alternate)&&Hh(e,t)}function Rh(e){if(e.tag===13||e.tag===31){var t=dn(e,67108864);t!==null&&At(t,e,67108864),Ur(e,67108864)}}function Dh(e){if(e.tag===13||e.tag===31){var t=Ut();t=Yi(t);var a=dn(e,t);a!==null&&At(a,e,t),Ur(e,t)}}var gi=!0;function jy(e,t,a,n){var l=j.T;j.T=null;var o=C.p;try{C.p=2,Vr(e,t,a,n)}finally{C.p=o,j.T=l}}function Ny(e,t,a,n){var l=j.T;j.T=null;var o=C.p;try{C.p=8,Vr(e,t,a,n)}finally{C.p=o,j.T=l}}function Vr(e,t,a,n){if(gi){var l=_r(n);if(l===null)kr(e,t,n,pi,a),Lh(e,n);else if(Ay(l,e,t,a,n))n.stopPropagation();else if(Lh(e,n),t&4&&-1<Iy.indexOf(e)){for(;l!==null;){var o=Yn(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=yt(o.pendingLanes);if(s!==0){var u=o;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var c=1<<31-ot(s);u.entanglements[1]|=c,s&=~c}ia(o),(je&6)===0&&(Po=ft()+500,Ql(0))}}break;case 31:case 13:u=dn(o,2),u!==null&&At(u,o,2),ti(),Ur(o,2)}if(o=_r(n),o===null&&kr(e,t,n,pi,a),o===l)break;l=o}l!==null&&n.stopPropagation()}else kr(e,t,n,null,a)}}function _r(e){return e=Hi(e),Or(e)}var pi=null;function Or(e){if(pi=null,e=En(e),e!==null){var t=H(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===31){if(e=_(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pi=e,null}function qh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(on()){case In:return 2;case An:return 8;case Ya:case Ai:return 32;case ro:return 268435456;default:return 32}default:return 32}}var Hr=!1,Ja=null,$a=null,Pa=null,eo=new Map,to=new Map,en=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lh(e,t){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(t.pointerId)}}function ao(e,t,a,n,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Yn(t),t!==null&&Rh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ay(e,t,a,n,l){switch(t){case"focusin":return Ja=ao(Ja,e,t,a,n,l),!0;case"dragenter":return $a=ao($a,e,t,a,n,l),!0;case"mouseover":return Pa=ao(Pa,e,t,a,n,l),!0;case"pointerover":var o=l.pointerId;return eo.set(o,ao(eo.get(o)||null,e,t,a,n,l)),!0;case"gotpointercapture":return o=l.pointerId,to.set(o,ao(to.get(o)||null,e,t,a,n,l)),!0}return!1}function Gh(e){var t=En(e.target);if(t!==null){var a=H(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,lu(e.priority,function(){Dh(a)});return}}else if(t===31){if(t=_(a),t!==null){e.blockedOn=t,lu(e.priority,function(){Dh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=_r(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Oi=n,a.target.dispatchEvent(n),Oi=null}else return t=Yn(a),t!==null&&Rh(t),e.blockedOn=a,!1;t.shift()}return!0}function Xh(e,t,a){bi(e)&&a.delete(t)}function Sy(){Hr=!1,Ja!==null&&bi(Ja)&&(Ja=null),$a!==null&&bi($a)&&($a=null),Pa!==null&&bi(Pa)&&(Pa=null),eo.forEach(Xh),to.forEach(Xh)}function wi(e,t){e.blockedOn===t&&(e.blockedOn=null,Hr||(Hr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Sy)))}var vi=null;function Wh(e){vi!==e&&(vi=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vi===e&&(vi=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Or(n||a)===null)continue;break}var o=Yn(a);o!==null&&(e.splice(t,3),t-=3,_s(o,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function dl(e){function t(c){return wi(c,e)}Ja!==null&&wi(Ja,e),$a!==null&&wi($a,e),Pa!==null&&wi(Pa,e),eo.forEach(t),to.forEach(t);for(var a=0;a<en.length;a++){var n=en[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<en.length&&(a=en[0],a.blockedOn===null);)Gh(a),a.blockedOn===null&&en.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],o=a[n+1],s=l[vt]||null;if(typeof o=="function")s||Wh(a);else if(s){var u=null;if(o&&o.hasAttribute("formAction")){if(l=o,s=o[vt]||null)u=s.formAction;else if(Or(l)!==null)continue}else u=s.action;typeof u=="function"?a[n+1]=u:(a.splice(n,3),n-=3),Wh(a)}}}function Qh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Rr(e){this._internalRoot=e}xi.prototype.render=Rr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,n=Ut();Oh(a,n,e,t,null,null)},xi.prototype.unmount=Rr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Oh(e.current,2,null,e,null,null),ti(),t[Tn]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=nu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<en.length&&t!==0&&t<en[a].priority;a++);en.splice(a,0,e),a===0&&Gh(e)}};var Fh=x.version;if(Fh!=="19.2.8")throw Error(d(527,Fh,"19.2.8"));C.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=v(t),e=e!==null?G(e):null,e=e===null?null:e.stateNode,e};var Ty={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{Ba=ki.inject(Ty),mt=ki}catch{}}return lo.createRoot=function(e,t){if(!O(e))throw Error(d(299));var a=!1,n="",l=td,o=ad,s=nd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Vh(e,1,!1,null,null,a,n,null,l,o,s,Qh),e[Tn]=t.current,xr(e),new Rr(t)},lo.hydrateRoot=function(e,t,a){if(!O(e))throw Error(d(299));var n=!1,l="",o=td,s=ad,u=nd,c=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),t=Vh(e,1,!0,t,a??null,n,l,c,o,s,u,Qh),t.context=_h(null),a=t.current,n=Ut(),n=Yi(n),l=Ha(n),l.callback=null,Ra(a,l,n),a=n,t.current.lanes=a,ua(t,a),ia(t),e[Tn]=t.current,xr(e),new xi(t)},lo.version="19.2.8",lo}var lf;function Oy(){if(lf)return Lr.exports;lf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(x){console.error(x)}}return r(),Lr.exports=_y(),Lr.exports}var Hy=Oy();const wt={id:"26af3597-73d4-491c-a9b3-aac9a0d55c82",name:"DomInNATEly Top Hits",description:`Thanks for Listening, My TikTok Is @DomInNATEly
same for insta and snap`,cover:"https://cdn2.suno.ai/image_large_9a613a1e-afde-4f8c-ade1-92f25a841205.jpeg",user_display_name:"Nate M. AKA  (@DomInNATEly)",user_handle:"dominnately",tiktok_handle:"@DomInNATEly",url:"https://suno.com/playlist/26af3597-73d4-491c-a9b3-aac9a0d55c82",totalTracks:48,totalDurationSeconds:13383},bt=[{id:"80501057-4d2b-4451-8805-d03190d5b5f0",title:"I Want You Back, But I hate That I Do!",artist:"Nate M. AKA  (@DomInNATEly)",handle:"dominnately",index:1,image:"https://cdn2.suno.ai/ad021751-7ecf-4ce8-b673-c4baf9f4f25b.jpeg",audioUrl:"https://d2lwuy8qc234o3.cloudfront.net/1/clip/80501057-4d2b-4451-8805-d03190d5b5f0.m4a",videoUrl:"https://cdn1.suno.ai/80501057-4d2b-4451-8805-d03190d5b5f0.mp4",embedUrl:"https://suno.com/embed/80501057-4d2b-4451-8805-d03190d5b5f0",sunoUrl:"https://suno.com/song/80501057-4d2b-4451-8805-d03190d5b5f0",duration:186,durationFormatted:"3:06",tags:["alt-drill","alt-pop","melodic rap"],lyrics:`[Verse 1]
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

**[Outro]**`}],Ke=r=>{const x=bt.find(I=>{if(I.id===r)return!0;const d=r.toLowerCase().replace(/[^a-z0-9]/g,""),O=I.title.toLowerCase().replace(/[^a-z0-9]/g,"");return O.includes(d)||d.includes(O)});return(x==null?void 0:x.lyrics)||""},Qr={MPLgPPy9Sjs:Ke("Poison Shot By Shot"),BCY7C34diZk:Ke("Don't Betray me")||Ke("I Never Bled Someone the Way You Do"),"9qx6tz-NyKY":Ke("You questioned my motives")||Ke("You'd Rather!"),fBBwdLTJMVE:Ke("Super Pessimistic! (Experimental remix)"),r6BibuJXzEw:Ke("I Practiced being Hurt")||Ke("HURT ME"),PZtOJku0f_g:Ke("Cluster B Storm"),Szoqqqy0KkU:Ke("I Want You Back, But I hate That I Do!"),vohyDAV8PpI:Ke("You Played The Wounded Bird"),BcCaAPSLgVg:Ke("You'd Rather!"),XpnTmJ6WCmw:Ke("pessimistic girl")||Ke("Pessimistic Bias"),"HV2GfTi2-mI":Ke("We MUSK go to MARS!"),osGORpTfs0I:Ke("DON'T MISS IT"),Dgvk00dBQ1Y:Ke("The Doubts Between the Seams"),"9lmCALdX0f8":Ke("Bad Brina knows how to Win"),sx_f6KVmWmQ:Ke("Saints and Schemes"),t8zv9_NNdps:Ke("cages that I couldn't even see(RAP}")||Ke("Poison Shot By Shot")};function Kr(r){if(!r)return"";if("lyrics"in r&&r.lyrics&&r.lyrics.trim().length>30)return r.lyrics;if(r.id&&Qr[r.id])return Qr[r.id];const x=(r.title||"").toLowerCase().replace(/[^a-z0-9]/g,"");if(x){const I=bt.find(d=>{const O=d.title.toLowerCase().replace(/[^a-z0-9]/g,"");return O.includes(x)||x.includes(O)});if(I&&I.lyrics)return I.lyrics}return"featuredLyrics"in r&&r.featuredLyrics?r.featuredLyrics:""}const Ry=[{id:"MPLgPPy9Sjs",title:"Poison Shot By Shot",artist:"Dom-I-NATE",duration:"6:28",durationSeconds:388,index:1,thumbnail:"https://i.ytimg.com/vi/MPLgPPy9Sjs/hqdefault.jpg",youtubeUrl:"https://youtu.be/MPLgPPy9Sjs?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Rock","Epic","Anthem"],description:"The featured single. A haunting build-up tracing toxic cycles, betrayal, and relentless raw guitars.",featuredLyrics:"You came in sweet / All soft at the seams / Said you saw my wreck / And you knew how to redeem..."},{id:"BCY7C34diZk",title:"I Begged You Don't Betray Me",artist:"DomInNATEly",duration:"4:55",durationSeconds:295,index:2,thumbnail:"https://i.ytimg.com/vi/BCY7C34diZk/hqdefault.jpg",youtubeUrl:"https://youtu.be/BCY7C34diZk?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Alt Rock","Vulnerable","Emotional Build","Guitar Driven"],description:"An impassioned, desperate alt-rock plea confronting broken trust and the agony of repeated betrayal.",featuredLyrics:"I pleaded for honesty when the ground started shaking beneath us."},{id:"9qx6tz-NyKY",title:"You Questioned My Motives",artist:"DomInNATEly",duration:"4:13",durationSeconds:253,index:3,thumbnail:"https://i.ytimg.com/vi/9qx6tz-NyKY/hqdefault.jpg",youtubeUrl:"https://youtu.be/9qx6tz-NyKY?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"alt",tags:["Introspective","Raw Emotion","Alt Rock","Distortion"],description:"A hard-hitting confrontation challenging unfair accusations and the pain of having pure intentions doubted.",featuredLyrics:"You twisted every gesture into an interrogation under cold fluorescent lights."},{id:"fBBwdLTJMVE",title:"Super Pessimistic (Guitar Riffs Remix)",artist:"DomInNATEly",duration:"4:01",durationSeconds:241,index:4,thumbnail:"https://i.ytimg.com/vi/fBBwdLTJMVE/hqdefault.jpg",youtubeUrl:"https://youtu.be/fBBwdLTJMVE?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"remix",tags:["Remix","Alt Rock","Heavy Riffs"],description:"High-energy reworked version loaded with heavy electric overdrive and driving rhythmic hooks.",featuredLyrics:"Heavy riffs collide with sharp emotional dissonance in this amplified anthem."},{id:"r6BibuJXzEw",title:"I Practiced Being Hurt",artist:"DomInNATEly",duration:"4:02",durationSeconds:242,index:5,thumbnail:"https://i.ytimg.com/vi/r6BibuJXzEw/hqdefault.jpg",youtubeUrl:"https://youtu.be/r6BibuJXzEw?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Melodic Rock","Vulnerability","Heartbreak","Anthem"],description:"A poignant reflection on emotional armor and conditioning oneself to endure heartache.",featuredLyrics:"Bracing for impact until feeling numb felt like second nature."},{id:"PZtOJku0f_g",title:"Cluster B Storm",artist:"DomInNATEly",duration:"5:04",durationSeconds:304,index:6,thumbnail:"https://i.ytimg.com/vi/PZtOJku0f_g/hqdefault.jpg",youtubeUrl:"https://youtu.be/PZtOJku0f_g?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Psychological Rock","Intense","Dark Rock","Epic"],description:"An intense, dark rock odyssey exploring turbulent psychological dynamics and chaotic relational storms.",featuredLyrics:"Caught in the eye of a psychological whirlwind with no shelter in sight."},{id:"Szoqqqy0KkU",title:"I Want You Back, But I Hate that I Do",artist:"DomInNATEly",duration:"3:19",durationSeconds:199,index:7,thumbnail:"https://i.ytimg.com/vi/Szoqqqy0KkU/hqdefault.jpg",youtubeUrl:"https://youtu.be/Szoqqqy0KkU?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Alt Rock","Breakup Anthem","Raw Guitars","Single"],description:"A fiery, conflicted rock single confronting the paradox of missing an abusive ex while hating the manipulation and emotional toll.",featuredLyrics:"I want you back (but I hate that I do) / Every road I take loops back to you / You wore kindness like a loaded trick / And you loved it best when I came back..."},{id:"vohyDAV8PpI",title:"You Played the Wounded Bird",artist:"DomInNATEly",duration:"3:33",durationSeconds:213,index:8,thumbnail:"https://i.ytimg.com/vi/vohyDAV8PpI/hqdefault.jpg",youtubeUrl:"https://youtu.be/vohyDAV8PpI?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Hard Rock","Dark","Story"],description:"Intense alt-rock confession exploring emotional manipulation and playing the martyr in a relationship.",featuredLyrics:"I played the victim in a horrible place / I knew you'd come running to be my shield..."},{id:"BcCaAPSLgVg",title:"You'd Rather",artist:"DomInNATEly",duration:"3:53",durationSeconds:233,index:9,thumbnail:"https://i.ytimg.com/vi/BcCaAPSLgVg/hqdefault.jpg",youtubeUrl:"https://youtu.be/BcCaAPSLgVg?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"alt",tags:["Alt Rock","Direct","Heavy"],description:"Punchy vocal deliveries confronting choices, avoidance, and unspoken boundaries.",featuredLyrics:"When the line is drawn, would you rather hide or face the fire head on?"},{id:"XpnTmJ6WCmw",title:"Pessimistic Girl",artist:"DomInNATEly",duration:"3:49",durationSeconds:229,index:10,thumbnail:"https://i.ytimg.com/vi/XpnTmJ6WCmw/hqdefault.jpg",youtubeUrl:"https://youtu.be/XpnTmJ6WCmw?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"alt",tags:["Alt Rock","Indie Rock","Cynical Romance","Rhythm"],description:"Driving melodic rock examining cynical defenses, emotional barriers, and self-fulfilling doubt.",featuredLyrics:"Expecting rain before the clouds even gather in the sky."},{id:"HV2GfTi2-mI",title:"We MUSK go to MARS!",artist:"DomInNATEly",duration:"4:47",durationSeconds:287,index:11,thumbnail:"https://i.ytimg.com/vi/HV2GfTi2-mI/hqdefault.jpg",youtubeUrl:"https://youtu.be/HV2GfTi2-mI?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"anthem",tags:["Sci-Fi Rock","One-Man Band","Concept"],description:"A satirical sci-fi rock odyssey about interstellar colonization, billionaires, and leaving Earth behind.",featuredLyrics:"Countdowns, booster engines, and eccentric dreams of red dust horizons."},{id:"osGORpTfs0I",title:"Take the Chance",artist:"Dom-I-NATE",duration:"4:10",durationSeconds:250,index:12,thumbnail:"https://i.ytimg.com/vi/osGORpTfs0I/hqdefault.jpg",youtubeUrl:"https://youtu.be/osGORpTfs0I?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Uplifting Rock","Driving Beat","Guitar Solo","Hope"],description:"Inspiring rock anthem urging listeners to take bold leaps into the unknown despite lingering fear.",featuredLyrics:"Step to the ledge and feel the rush when hesitation fades away."},{id:"Dgvk00dBQ1Y",title:"Bittersweet Echos",artist:"Dom-I-Nate",duration:"3:17",durationSeconds:197,index:13,thumbnail:"https://i.ytimg.com/vi/Dgvk00dBQ1Y/hqdefault.jpg",youtubeUrl:"https://youtu.be/Dgvk00dBQ1Y?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Melodic Rock","Echo","Vocal"],description:"Atmospheric guitars weaving nostalgic echoes of past relationships that refuse to fade.",featuredLyrics:"Reverberating notes of what could have been linger in the quiet aftermath."},{id:"9lmCALdX0f8",title:"Crazy Can be So much Fun",artist:"Dom-I-NATE",duration:"2:44",durationSeconds:164,index:14,thumbnail:"https://i.ytimg.com/vi/9lmCALdX0f8/hqdefault.jpg",youtubeUrl:"https://youtu.be/9lmCALdX0f8?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Wild","Garage Rock","Fun"],description:"A chaotic, cheerful garage rock romp celebrating the unpredictable and eccentric sides of life.",featuredLyrics:"Toss out the rulebook and turn the distortion up to eleven."},{id:"sx_f6KVmWmQ",title:"Her Leather Facade",artist:'Nate "Dom-I-Nater"',duration:"3:17",durationSeconds:197,index:15,thumbnail:"https://i.ytimg.com/vi/sx_f6KVmWmQ/hqdefault.jpg",youtubeUrl:"https://youtu.be/sx_f6KVmWmQ?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"rock",tags:["Hard Rock","Tough Exterior","Vulnerable"],description:"Heavy riff-laden tribute to guarded hearts, tough leather jackets, and hidden vulnerabilities.",featuredLyrics:"Behind the studs and zipper collar lies a fortress waiting to crumble."},{id:"t8zv9_NNdps",title:"You Jinxed Us",artist:"Dom-I-NATE",duration:"2:51",durationSeconds:171,index:16,thumbnail:"https://i.ytimg.com/vi/t8zv9_NNdps/hqdefault.jpg",youtubeUrl:"https://youtu.be/t8zv9_NNdps?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH",category:"duet",tags:["Duet Style","Heartbreak","Superstition"],description:"Soulful alt-rock ballad on fragile romance, superstitions, and premature declarations.",featuredLyrics:"You said forever too loud and shattered the spell before we even started."}],St=Ry.map(r=>({...r,lyrics:Qr[r.id]||r.featuredLyrics||""})),Dy="https://youtube.com/playlist?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH&si=m-pggLDCyI2ogv_c",qy="https://www.youtube.com/@DomInNATEly",Ta={name:"DomInNATEly's Music",description:"Official YouTube audio and video catalogue by DomInNATEly featuring heavy guitar riffs, melodic ballads, and conceptual alt-rock.",channel:"DomInNATEly",channelUrl:"https://www.youtube.com/@DomInNATEly",playlistUrl:"https://youtube.com/playlist?list=PLcnHmqF3gRltqGbFV9159hzav6eVGVwaH&si=m-pggLDCyI2ogv_c",totalDurationFormatted:"1 hr 4 min",cover:"https://i.ytimg.com/vi/MPLgPPy9Sjs/hqdefault.jpg"},of=r=>({id:r.id,title:r.title,artist:r.artist,duration:r.durationFormatted,durationSeconds:r.duration,index:r.index,thumbnail:r.image,youtubeUrl:r.sunoUrl,category:"alt",tags:r.tags,description:`Suno AI Track • @${r.handle}`,featuredLyrics:r.lyrics,lyrics:r.lyrics,audioUrl:r.videoUrl||r.audioUrl,videoUrl:r.videoUrl,embedUrl:r.embedUrl,sunoUrl:r.sunoUrl,isSuno:!0});/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(x,I,d)=>d?d.toUpperCase():I.toLowerCase()),sf=r=>{const x=Gy(r);return x.charAt(0).toUpperCase()+x.slice(1)},uf=(...r)=>r.filter((x,I,d)=>!!x&&x.trim()!==""&&d.indexOf(x)===I).join(" ").trim(),Xy=r=>{for(const x in r)if(x.startsWith("aria-")||x==="role"||x==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=E.forwardRef(({color:r="currentColor",size:x=24,strokeWidth:I=2,absoluteStrokeWidth:d,className:O="",children:H,iconNode:b,..._},N)=>E.createElement("svg",{ref:N,...Wy,width:x,height:x,stroke:r,strokeWidth:d?Number(I)*24/Number(x):I,className:uf("lucide",O),...!H&&!Xy(_)&&{"aria-hidden":"true"},..._},[...b.map(([v,G])=>E.createElement(v,G)),...Array.isArray(H)?H:[H]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=(r,x)=>{const I=E.forwardRef(({className:d,...O},H)=>E.createElement(Qy,{ref:H,iconNode:x,className:uf(`lucide-${Ly(sf(r))}`,`lucide-${r}`,d),...O}));return I.displayName=sf(r),I};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Zy=ke("bell",Fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],oo=ke("check",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],cf=ke("clock",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],io=ke("copy",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],df=ke("disc-3",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],hl=ke("disc",eg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Le=ke("external-link",tg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],an=ke("file-text",ag);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],hf=ke("flame",ng);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],ff=ke("heart",lg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],mf=ke("layout-grid",og);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],rf=ke("list-music",ig);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],yf=ke("list",sg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],Jr=ke("music-2",rg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Fr=ke("music",ug);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Nn=ke("pause",cg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],aa=ke("play",dg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],fg=ke("repeat",hg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],gf=ke("search",mg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],gg=ke("send",yg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Vt=ke("share-2",pg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],ji=ke("shuffle",bg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],vg=ke("skip-back",wg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],kg=ke("skip-forward",xg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ea=ke("sparkles",jg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],Ni=ke("tv",Ng);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ag=ke("user",Ig);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Tg=ke("video",Sg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Yg=ke("volume-2",Eg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Mg=ke("volume-x",Bg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nn=ke("x",Cg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Ii=ke("youtube",zg),pf=[{id:"tiktok",name:"TikTok",label:"Follow on TikTok",url:"https://tiktok.com/@domInNATEly",handle:"@domInNATEly",icon:"🎵",color:"from-pink-500/20 to-cyan-500/20 text-pink-400 border-pink-500/30 hover:border-pink-400",actionText:"Follow & Like"},{id:"youtube",name:"YouTube",label:"Subscribe on YouTube",url:"https://www.youtube.com/@DomInNATEly",handle:"@DomInNATEly",icon:"▶️",color:"from-red-600/20 to-red-500/10 text-red-400 border-red-500/30 hover:border-red-400",actionText:"Subscribe & Like"},{id:"github",name:"GitHub",label:"Check on GitHub",url:"https://github.com/Nate-Mina",handle:"Nate-Mina",icon:"🐙",color:"from-purple-500/20 to-neutral-700/20 text-purple-300 border-purple-500/30 hover:border-purple-400",actionText:"Star & Follow"},{id:"facebook",name:"Facebook",label:"Connect on Facebook",url:"https://facebook.com/NateMina",handle:"NateMina",icon:"👍",color:"from-blue-600/20 to-indigo-600/20 text-blue-400 border-blue-500/30 hover:border-blue-400",actionText:"Connect"},{id:"linkedin",name:"LinkedIn",label:"Connect on LinkedIn",url:"https://www.linkedin.com/in/dominnately/",handle:"dominnately",icon:"💼",color:"from-sky-600/20 to-cyan-600/20 text-sky-400 border-sky-500/30 hover:border-sky-400",actionText:"Connect"},{id:"portfolio",name:"About Me",label:"Visit Portfolio & CV",url:"https://nate-mina.github.io/Portfolio-CV/",handle:"nate-mina.github.io",icon:"👤",color:"from-cyan-500/20 to-teal-500/20 text-cyan-300 border-cyan-500/30 hover:border-cyan-400",actionText:"View CV"}],Ug="https://nate-mina.github.io/Portfolio-CV/",Vg=({isDarkMode:r,onToggleDarkMode:x,trackCount:I,onQuickShareAll:d})=>i.jsx("header",{id:"main-header",className:`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${r?"bg-black/40 border-white/10 text-white":"bg-white/80 border-neutral-200 text-neutral-900"}`,children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[i.jsxs("div",{className:"flex flex-col",children:[i.jsxs("h1",{className:"text-2xl sm:text-3xl md:text-4xl tracking-tighter leading-none select-none",children:[i.jsx("span",{className:"font-black",children:"D"}),i.jsx("span",{className:"font-light opacity-80",children:"o"}),i.jsx("span",{className:"font-medium opacity-90",children:"m"}),i.jsx("span",{className:"font-black text-cyan-400",children:"I"}),i.jsx("span",{className:"font-light opacity-80",children:"n"}),i.jsx("span",{className:"font-black bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent",children:"NATE"}),i.jsx("span",{className:"font-light opacity-80",children:"l"}),i.jsx("span",{className:"font-medium opacity-90",children:"y"})]}),i.jsx("p",{className:"text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold mt-0.5",children:"Official Gallery"})]}),i.jsxs("span",{className:`hidden md:inline-flex px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${r?"bg-white/5 border-white/10 text-cyan-300":"bg-cyan-50 border-cyan-200 text-cyan-700"}`,children:[I," Tracks"]})]}),i.jsxs("div",{className:"flex items-center gap-2 sm:gap-4 md:gap-6",children:[i.jsxs("a",{id:"about-me-header-link",href:Ug,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold tracking-wider uppercase transition-all shadow-xs ${r?"bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-teal-500/20 border-cyan-400/50 text-cyan-300 hover:text-white hover:bg-cyan-500/30 hover:border-cyan-300 hover:shadow-cyan-500/20":"bg-cyan-50 border-cyan-400 text-cyan-800 hover:bg-cyan-100 hover:text-cyan-950"}`,title:"About Me - Nate Mina Portfolio & CV",children:[i.jsx(Ag,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"About Me"}),i.jsx(Le,{className:"w-3 h-3 opacity-60"})]}),i.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[i.jsxs("a",{id:"youtube-channel-link",href:qy,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Visit DomInNATEly on YouTube",children:[i.jsx(df,{className:"w-3.5 h-3.5 text-cyan-400 animate-spin",style:{animationDuration:"6s"}}),i.jsx("span",{className:"hidden lg:inline",children:"YT Channel"}),i.jsx(Le,{className:"w-3 h-3 opacity-60"})]}),i.jsxs("a",{id:"youtube-playlist-link",href:Dy,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Open DomInNATEly official playlists on YouTube",children:[i.jsx(Jr,{className:"w-3.5 h-3.5 text-red-500"}),i.jsx("span",{className:"hidden lg:inline",children:"YT Playlists"}),i.jsx(Le,{className:"w-3 h-3 opacity-60"})]}),i.jsxs("a",{id:"tiktok-header-link",href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-pink-400 hover:border-pink-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-pink-600 hover:bg-neutral-200"}`,title:"Follow @domInNATEly on TikTok",children:[i.jsx("span",{className:"text-xs",children:"🎵"}),i.jsx("span",{className:"hidden lg:inline",children:"TikTok"}),i.jsx(Le,{className:"w-3 h-3 opacity-60"})]}),i.jsxs("a",{id:"suno-playlist-header-link",href:wt.url,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600 hover:bg-neutral-200"}`,title:"Open official DomInNATEly playlist on Suno",children:[i.jsx(Ea,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden lg:inline",children:"Suno Playlist"}),i.jsx(Le,{className:"w-3 h-3 opacity-60"})]})]}),d&&i.jsxs("button",{id:"share-gallery-btn",onClick:d,className:`p-2 sm:px-3 sm:py-1.5 rounded-full border text-xs font-semibold tracking-wider inline-flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-cyan-600"}`,title:"Share Gallery","aria-label":"Share DomInNATEly Music Gallery",children:[i.jsx(Vt,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden md:inline uppercase text-[11px]",children:"Share"})]}),i.jsxs("div",{className:`flex items-center gap-2.5 sm:gap-3 border-l pl-3 sm:pl-5 ${r?"border-white/10":"border-neutral-200"}`,children:[i.jsx("button",{id:"dark-mode-toggle",onClick:x,className:`w-10 h-6 rounded-full relative flex items-center px-0.5 transition-colors focus:outline-hidden ${r?"bg-cyan-500":"bg-neutral-300"}`,title:r?"Switch to Light Mode":"Switch to Dark Mode","aria-label":r?"Switch to Light Mode":"Switch to Dark Mode",children:i.jsx("div",{className:`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${r?"translate-x-4":"translate-x-0"}`})}),i.jsx("span",{className:`text-[10px] uppercase font-bold tracking-wider hidden sm:inline ${r?"text-white/80":"text-neutral-700"}`,children:r?"Dark Mode":"Light Mode"})]})]})]})}),_g=({track:r,isPlaying:x,isCurrentTrack:I,onPlay:d,onOpenShare:O,onOpenDetails:H,onOpenLyrics:b,isDarkMode:_})=>i.jsxs("div",{id:`track-card-${r.id}`,className:`group rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden relative ${I?_?"bg-white/10 border-cyan-400/80 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400/40":"bg-cyan-50/40 border-cyan-500 shadow-md ring-1 ring-cyan-400/30":_?"bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15 shadow-sm hover:shadow-md":"bg-white hover:bg-neutral-50/90 border-neutral-200 hover:border-neutral-300 shadow-xs hover:shadow-sm"}`,children:[i.jsxs("div",{className:"relative aspect-video w-full overflow-hidden bg-black",children:[i.jsx("img",{src:r.thumbnail,alt:r.title,loading:"lazy",referrerPolicy:"no-referrer",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"}),i.jsxs("div",{className:"absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white shadow-md",children:r.index.toString().padStart(2,"0")}),i.jsxs("span",{className:"px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-black/80 backdrop-blur-xs text-cyan-400 border border-white/10 flex items-center gap-1.5 shadow-xs",children:[i.jsx(cf,{className:"w-3 h-3 text-cyan-400"}),r.duration]})]}),i.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:i.jsx("button",{id:`play-btn-${r.id}`,onClick:N=>{N.stopPropagation(),d(r)},className:`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform active:scale-95 ${I&&x?"bg-cyan-400 text-black scale-100 ring-4 ring-cyan-400/40 font-bold":"bg-white/90 hover:bg-white text-black backdrop-blur-sm group-hover:scale-110 shadow-lg"}`,"aria-label":I&&x?`Pause ${r.title}`:`Play ${r.title}`,children:I&&x?i.jsx(Nn,{className:"w-5 h-5 fill-current"}):i.jsx(aa,{className:"w-5 h-5 fill-current translate-x-0.5"})})}),I&&x&&i.jsxs("div",{className:"absolute bottom-2.5 left-2.5 flex items-end gap-1 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs border border-cyan-400/40",children:[i.jsx("span",{className:"w-1 bg-cyan-400 rounded-full animate-eq-1"}),i.jsx("span",{className:"w-1 bg-cyan-300 rounded-full animate-eq-2"}),i.jsx("span",{className:"w-1 bg-purple-400 rounded-full animate-eq-3"}),i.jsx("span",{className:"w-1 bg-cyan-400 rounded-full animate-eq-4"}),i.jsx("span",{className:"text-[10px] font-mono text-cyan-300 ml-1 font-bold uppercase tracking-wider",children:"Playing"})]})]}),i.jsxs("div",{className:"p-3.5 sm:p-4 flex-1 flex flex-col justify-between",children:[i.jsx("div",{children:i.jsx("h3",{onClick:()=>d(r),className:`text-sm sm:text-base font-bold line-clamp-1 cursor-pointer transition-colors ${I?_?"text-cyan-400":"text-cyan-700":_?"text-white hover:text-cyan-400":"text-neutral-900 hover:text-cyan-700"}`,title:r.title,children:r.title})}),i.jsxs("div",{className:`mt-4 pt-3.5 border-t flex items-center justify-between gap-2 ${_?"border-white/10":"border-neutral-200"}`,children:[i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("button",{id:`card-play-toggle-${r.id}`,onClick:()=>d(r),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${I&&x?"bg-cyan-500 text-black font-bold":_?"bg-white/5 hover:bg-white/10 text-white border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-800"}`,children:I&&x?i.jsxs(i.Fragment,{children:[i.jsx(Nn,{className:"w-3.5 h-3.5 fill-current"}),i.jsx("span",{children:"Pause"})]}):i.jsxs(i.Fragment,{children:[i.jsx(aa,{className:"w-3.5 h-3.5 fill-current"}),i.jsx("span",{children:"Play"})]})}),b&&i.jsxs("button",{id:`card-lyrics-btn-${r.id}`,onClick:N=>{N.stopPropagation(),b(r)},className:`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${_?"bg-white/5 hover:bg-white/10 text-white/80 hover:text-cyan-400 border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-700"}`,title:"View Full Lyrics","aria-label":`View lyrics for ${r.title}`,children:[i.jsx(an,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden sm:inline",children:"Lyrics"})]})]}),i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx("a",{id:`quick-x-share-${r.id}`,href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Listening to "${r.title}" by DomInNATEly 🔥`)}&url=${encodeURIComponent(r.youtubeUrl)}`,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${_?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-black hover:bg-neutral-200"}`,title:"Share on X","aria-label":`Share ${r.title} on X`,children:i.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),i.jsx("a",{id:`quick-fb-share-${r.id}`,href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(r.youtubeUrl)}`,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${_?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-[#1877F2] hover:bg-neutral-200"}`,title:"Share on Facebook","aria-label":`Share ${r.title} on Facebook`,children:i.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),i.jsx("a",{id:`card-youtube-link-${r.id}`,href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:`p-1.5 rounded-md transition-colors ${_?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-[#FF0000] hover:bg-neutral-200"}`,title:"Watch Video on YouTube","aria-label":`Watch ${r.title} on YouTube`,children:i.jsx(Ii,{className:"w-3.5 h-3.5 fill-current"})}),i.jsx("button",{id:`open-share-modal-${r.id}`,onClick:()=>O(r),className:`p-1.5 rounded-md transition-colors ${_?"text-white/60 hover:text-cyan-400 hover:bg-white/10":"text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200"}`,title:"More Share Options (WhatsApp, Reddit, Copy Link, etc.)","aria-label":`Share ${r.title}`,children:i.jsx(Vt,{className:"w-3.5 h-3.5"})})]})]})]})]}),Og=({searchQuery:r,onSearchChange:x,sortField:I,onSortChange:d,selectedCategory:O,onCategoryChange:H,totalResults:b,totalTracks:_=16,isDarkMode:N})=>{const v=[{id:"all",label:"All Tracks"},{id:"rock",label:"Rock & Riffs"},{id:"remix",label:"Remixes"},{id:"acoustic",label:"Acoustic / Live"},{id:"duet",label:"Duets"},{id:"alt",label:"Alt / Concept"}],G=_.toString().padStart(2,"0"),V=[{id:"playlist",label:`Playlist Order (#01 - #${G})`},{id:"newest",label:`Reverse Order (#${G} - #01)`},{id:"duration-desc",label:"Duration (Longest First)"},{id:"duration-asc",label:"Duration (Shortest First)"},{id:"title-asc",label:"Title (A → Z)"},{id:"title-desc",label:"Title (Z → A)"}],R=r.trim()!==""||O!=="all"||I!=="playlist";return i.jsxs("div",{id:"sorting-filter-panel",className:`rounded-2xl border p-4 sm:p-5 mb-6 backdrop-blur-md transition-all ${N?"bg-white/5 border-white/10 shadow-xl shadow-black/40":"bg-white/90 border-neutral-200 shadow-sm"}`,children:[i.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-3.5",children:[i.jsxs("div",{className:"relative flex-1",children:[i.jsx(gf,{className:`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${N?"text-white/40":"text-neutral-400"}`}),i.jsx("input",{id:"track-search-input",type:"text",placeholder:"Search tracks, lyrics, or styles...",value:r,onChange:J=>x(J.target.value),className:`w-full pl-9 pr-9 py-2 rounded-xl text-xs sm:text-sm border focus:outline-hidden transition-all ${N?"bg-black/50 border-white/10 text-white placeholder-white/40 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/40":"bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600/30"}`}),r&&i.jsx("button",{onClick:()=>x(""),className:`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md ${N?"text-white/40 hover:text-white":"text-neutral-500 hover:text-neutral-900"}`,title:"Clear search",children:i.jsx(nn,{className:"w-3.5 h-3.5"})})]}),i.jsxs("div",{className:`flex items-center px-3 py-1.5 rounded-full border transition-all ${N?"bg-white/5 border-white/10 text-white":"bg-neutral-100 border-neutral-300 text-neutral-800"}`,children:[i.jsx("span",{className:`text-[10px] sm:text-xs font-bold mr-2 uppercase tracking-wider ${N?"text-white/50":"text-neutral-500"}`,children:"SORT BY:"}),i.jsx("select",{id:"track-sort-select",value:I,onChange:J=>d(J.target.value),className:`bg-transparent text-xs outline-hidden cursor-pointer font-bold uppercase tracking-wider ${N?"text-cyan-400":"text-cyan-700"}`,children:V.map(J=>i.jsx("option",{value:J.id,className:N?"bg-[#0a0a0a] text-white":"bg-white text-neutral-900",children:J.label},J.id))})]})]}),i.jsxs("div",{className:`mt-4 pt-3.5 border-t flex flex-wrap items-center justify-between gap-2.5 ${N?"border-white/10":"border-neutral-200"}`,children:[i.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar",children:v.map(J=>{const le=O===J.id;return i.jsx("button",{id:`filter-pill-${J.id}`,onClick:()=>H(J.id),className:`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${le?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":N?"bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20":"bg-neutral-100 border border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400"}`,children:J.label},J.id)})}),i.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono",children:[i.jsxs("span",{className:N?"text-cyan-400 font-bold":"text-cyan-700 font-bold",children:[b," ",b===1?"TRACK":"TRACKS"]}),R&&i.jsx("button",{id:"reset-filters-btn",onClick:()=>{x(""),H("all"),d("playlist")},className:`underline text-[11px] uppercase tracking-wider ml-2 transition-colors ${N?"text-white/50 hover:text-white":"text-neutral-500 hover:text-black"}`,children:"Reset"})]})]})]})},Hg=({currentTrack:r,playlist:x,onTrackChange:I,onOpenShare:d,onOpenLyrics:O,isDarkMode:H,isPlaying:b,setIsPlaying:_,allPlaylists:N,onSwitchPlaylist:v,currentPlaylistType:G="youtube",disableInternalPlayback:V=!1,externalCurrentTime:R,externalDuration:J,onSeekTo:le,onVolumeChange:D,externalVolume:be,externalIsMuted:ze})=>{const[Ue,re]=E.useState(0),[Ve,Be]=E.useState(0),[we,$]=E.useState(80),[ce,He]=E.useState(!1),[Q,Z]=E.useState(!1),[X,at]=E.useState(!1),[nt,qe]=E.useState(!1),[j,C]=E.useState(!1),[L,te]=E.useState("current"),ae=E.useMemo(()=>L==="youtube"&&(N!=null&&N.youtube)?N.youtube:L==="suno"&&(N!=null&&N.suno)?N.suno:x,[L,N,x]),[h,S]=E.useState(!1),y=E.useRef(null),B=E.useRef(null),q=E.useRef(null),ne=E.useRef(null),oe=E.useRef(null),Ge=E.useRef(null),Ne=E.useRef(!1),Tt=E.useRef(null),sa="youtube-player-container",Re=E.useRef(0),_t=E.useRef(0),Me=E.useRef(X);Me.current=X;const ra=E.useRef(Q);ra.current=Q;const Kt=E.useRef(_);Kt.current=_;const ln=E.useRef(b);ln.current=b;const Y=E.useRef(we);Y.current=we;const K=E.useRef(ce);K.current=ce;const pe=E.useRef(I);pe.current=I;const Jt=E.useRef(x);Jt.current=x,E.useEffect(()=>{be!==void 0&&($(be),Y.current=be)},[be]),E.useEffect(()=>{ze!==void 0&&(He(ze),K.current=ze)},[ze]);const Je=!!(r!=null&&r.audioUrl||r!=null&&r.isSuno),so=U=>{if(isNaN(U)||U<0)return"0:00";const z=Math.floor(U/60),de=Math.floor(U%60);return`${z}:${de<10?"0":""}${de}`},ft=E.useCallback(()=>{const U=Jt.current;if(!r||U.length===0)return;if(ra.current){const Se=Math.floor(Math.random()*U.length);pe.current(U[Se]);return}const de=(U.findIndex(Se=>Se.id===r.id)+1)%U.length;pe.current(U[de])},[r==null?void 0:r.id]),on=E.useRef(ft);on.current=ft,E.useCallback(()=>{const U=Jt.current;if(!r||U.length===0)return;if(Re.current>4){if(Je&&B.current){B.current.currentTime=0,Re.current=0,re(0);return}if(y.current&&typeof y.current.seekTo=="function")try{y.current.seekTo(0,!0),Re.current=0,re(0);return}catch{}}const de=(U.findIndex(Se=>Se.id===r.id)-1+U.length)%U.length;pe.current(U[de])},[r==null?void 0:r.id,Je]),E.useEffect(()=>{if(r){if(V){if(B.current&&B.current.pause(),q.current&&q.current.pause(),y.current&&typeof y.current.pauseVideo=="function")try{y.current.pauseVideo()}catch{}return}if(Je){if(y.current&&typeof y.current.pauseVideo=="function")try{y.current.pauseVideo()}catch{}const U=r.audioUrl||r.videoUrl||"";B.current&&(B.current.src=U?encodeURI(U):"",B.current.volume=ce?0:(we||80)/100,B.current.muted=ce,B.current.load(),re(0),Be(r.durationSeconds||180),b&&B.current.play().catch(z=>{console.warn("Audio auto-play notice:",z)})),q.current&&(q.current.volume=ce?0:(we||80)/100,q.current.muted=ce,b&&q.current.play().catch(()=>{}));return}B.current&&B.current.pause(),q.current&&q.current.pause()}},[r==null?void 0:r.id,Je]),E.useEffect(()=>{var U;if(!window.YT&&!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){const de=document.createElement("script");de.src="https://www.youtube.com/iframe_api";const Se=document.getElementsByTagName("script")[0];(U=Se==null?void 0:Se.parentNode)==null||U.insertBefore(de,Se)}},[]),E.useEffect(()=>{if(!r||Je||V)return;if(y.current&&Ne.current){if(typeof y.current.loadVideoById=="function")try{b?y.current.loadVideoById(r.id):typeof y.current.cueVideoById=="function"?y.current.cueVideoById(r.id):y.current.loadVideoById(r.id)}catch(Se){console.warn("Error loading video by ID:",Se)}return}Tt.current=r.id,oe.current&&(clearTimeout(oe.current),oe.current=null);let U=0;const z=50,de=()=>{const Se=Ge.current||document.getElementById(sa);if(!Se){U++<z&&(oe.current=setTimeout(de,100));return}if(!window.YT||!window.YT.Player){U++<z&&(oe.current=setTimeout(de,100));return}if(!y.current)try{Se.innerHTML="";const yt=document.createElement("div");yt.style.width="100%",yt.style.height="100%",Se.appendChild(yt);const $t=typeof window<"u"&&window.location.origin&&window.location.origin!=="null"?window.location.origin:void 0;y.current=new window.YT.Player(yt,{height:"100%",width:"100%",videoId:r.id,playerVars:{autoplay:b?1:0,controls:1,modestbranding:1,rel:0,enablejsapi:1,...$t?{origin:$t}:{}},events:{onReady:Qe=>{var Ht,fl,Sn;if(Ne.current=!0,typeof((Ht=Qe.target)==null?void 0:Ht.setVolume)=="function")try{Qe.target.setVolume(we)}catch{}if(Tt.current&&Tt.current!==r.id){const ua=Tt.current;if(Tt.current=null,typeof((fl=Qe.target)==null?void 0:fl.loadVideoById)=="function")try{Qe.target.loadVideoById(ua),setTimeout(()=>{Kt.current(!0)},0)}catch{}}else if(ln.current&&typeof((Sn=Qe.target)==null?void 0:Sn.playVideo)=="function")try{Qe.target.playVideo()}catch{}},onStateChange:Qe=>{if(Qe.data===1){if(setTimeout(()=>{Kt.current(!0)},0),y.current&&typeof y.current.getDuration=="function")try{const Ht=y.current.getDuration();Ht&&Ht>0&&(_t.current=Ht,Be(Ht))}catch{}}else if(Qe.data===2)setTimeout(()=>{Kt.current(!1)},0);else if(Qe.data===0)if(Me.current){if(y.current&&typeof y.current.seekTo=="function")try{y.current.seekTo(0)}catch{}if(y.current&&typeof y.current.playVideo=="function")try{y.current.playVideo()}catch{}}else setTimeout(()=>{on.current()},0)},onError:Qe=>{console.warn("YouTube Player event notice:",Qe)}}})}catch(yt){console.warn("Error instantiating YT.Player:",yt)}};return de(),()=>{oe.current&&(clearTimeout(oe.current),oe.current=null)}},[r==null?void 0:r.id,Je]),E.useEffect(()=>{if(V){if(B.current&&B.current.pause(),q.current&&q.current.pause(),y.current&&typeof y.current.pauseVideo=="function")try{y.current.pauseVideo()}catch{}return}if(Je){if(!B.current)return;b?B.current.play().catch(U=>{console.warn("Audio play notice:",U)}):B.current.pause();return}if(!(!Ne.current||!y.current))try{b&&typeof y.current.playVideo=="function"?y.current.playVideo():!b&&typeof y.current.pauseVideo=="function"&&y.current.pauseVideo()}catch(U){console.warn("Error syncing playback state:",U)}},[b,Je,V]),E.useEffect(()=>(b?ne.current=setInterval(()=>{if(Je){if(q.current&&!q.current.paused){const U=q.current.currentTime;U!==void 0&&!isNaN(U)&&(Re.current=U,re(U));const z=q.current.duration;z&&!isNaN(z)&&z>0&&(_t.current=z,Be(z))}else if(B.current&&!B.current.paused){const U=B.current.currentTime;U!==void 0&&!isNaN(U)&&(Re.current=U,re(U));const z=B.current.duration;z&&!isNaN(z)&&z>0&&(_t.current=z,Be(z))}else{const U=_t.current||(r==null?void 0:r.durationSeconds)||180;Re.current>=U?(Re.current=0,re(0),setTimeout(()=>{on.current()},0)):(Re.current+=1,re(Re.current))}return}if(y.current&&typeof y.current.getCurrentTime=="function")try{const U=y.current.getCurrentTime();if(U!==void 0&&!isNaN(U)&&(Re.current=U,re(U)),typeof y.current.getDuration=="function"){const z=y.current.getDuration();z&&z>0&&(_t.current=z,Be(z))}}catch{}},500):clearInterval(ne.current),()=>clearInterval(ne.current)),[b,Je,r==null?void 0:r.id]),E.useEffect(()=>()=>{if(clearInterval(ne.current),y.current&&typeof y.current.destroy=="function")try{y.current.destroy()}catch{}y.current=null,Ne.current=!1,B.current&&B.current.pause(),q.current&&q.current.pause()},[]);const In=E.useCallback(()=>{if(x.length===0)return;if(!r){I(x[0]);return}const U=x.findIndex(de=>de.id===r.id),z=U===-1||U>=x.length-1?0:U+1;I(x[z])},[r,x,I]),An=E.useCallback(()=>{if(x.length===0)return;if(!r){I(x[x.length-1]);return}const U=x.findIndex(de=>de.id===r.id),z=U<=0?x.length-1:U-1;I(x[z])},[r,x,I]),Ya=E.useCallback(()=>{if(!r&&x.length>0){I(x[0]);return}if(V){_(!b);return}if(Je){if(!B.current){_(!b);return}b?(B.current.pause(),_(!1)):(B.current.play().catch(U=>{console.warn("Audio play error:",U)}),_(!0));return}if(!y.current||!Ne.current){_(!b);return}try{b?(typeof y.current.pauseVideo=="function"&&y.current.pauseVideo(),_(!1)):(typeof y.current.playVideo=="function"&&y.current.playVideo(),_(!0))}catch(U){console.warn("Error toggling playback:",U),_(!b)}},[r,x,Je,b,_,I]),Ai=U=>{const z=parseFloat(U.target.value);if(re(z),V){le==null||le(z);return}if(Je){B.current&&(B.current.currentTime=z),q.current&&(q.current.currentTime=z);return}if(y.current&&typeof y.current.seekTo=="function")try{y.current.seekTo(z,!0)}catch(de){console.warn("Error seeking:",de)}},ro=U=>{const z=parseInt(U.target.value,10);$(z);const de=z===0?!0:ce;if(z===0&&!ce?He(!0):z>0&&ce&&He(!1),D==null||D(z,de),!V){if(Je){B.current&&(B.current.volume=de?0:z/100),q.current&&(q.current.volume=de?0:z/100);return}if(y.current&&typeof y.current.setVolume=="function")try{y.current.setVolume(z),z===0?typeof y.current.mute=="function"&&y.current.mute():ce&&typeof y.current.unMute=="function"&&y.current.unMute()}catch(Se){console.warn("Error setting volume:",Se)}}},Si=()=>{const U=!ce;if(He(U),D==null||D(we,U),!V){if(Je){B.current&&(B.current.muted=U),q.current&&(q.current.muted=U);return}if(y.current)try{U?typeof y.current.mute=="function"&&y.current.mute():(typeof y.current.unMute=="function"&&y.current.unMute(),typeof y.current.setVolume=="function"&&y.current.setVolume(we||50))}catch(z){console.warn("Error toggling mute:",z)}}},uo=E.useRef(Ya);uo.current=Ya;const Ba=E.useRef(In);Ba.current=In;const mt=E.useRef(An);if(mt.current=An,E.useEffect(()=>{const U=z=>{if(z.altKey||z.ctrlKey||z.metaKey)return;const de=z.target;if(de){const Se=de.tagName?de.tagName.toUpperCase():"",yt=de.isContentEditable,$t=Se==="INPUT",Qe=$t?de.type.toLowerCase():"";if(Se==="TEXTAREA"||Se==="SELECT"||yt||$t&&!["range","button","checkbox","radio"].includes(Qe)||$t&&Qe==="range"&&(z.key==="ArrowLeft"||z.key==="ArrowRight"||z.key==="ArrowUp"||z.key==="ArrowDown"||z.code==="ArrowLeft"||z.code==="ArrowRight"||z.code==="ArrowUp"||z.code==="ArrowDown"))return}if(z.key===" "||z.code==="Space"||z.key==="Spacebar"){z.preventDefault(),uo.current();return}if(z.key==="ArrowLeft"||z.code==="ArrowLeft"||z.key==="Left"||z.key==="ArrowUp"||z.code==="ArrowUp"||z.key==="Up"){z.preventDefault(),mt.current();return}if(z.key==="ArrowRight"||z.code==="ArrowRight"||z.key==="Right"||z.key==="ArrowDown"||z.code==="ArrowDown"||z.key==="Down"){z.preventDefault(),Ba.current();return}};return window.addEventListener("keydown",U),()=>{window.removeEventListener("keydown",U)}},[]),!r)return null;const Ot=V&&R!==void 0?R:Ue,ot=V&&J&&J>0?J:Ve||r.durationSeconds||180,Ti=ot>0?Math.min(100,Math.max(0,Ot/ot*100)):0,Ei=i.jsxs("div",{className:"w-full h-full relative bg-black flex items-center justify-center overflow-hidden rounded-2xl",children:[Je?r.videoUrl?i.jsx("video",{ref:q,src:encodeURI(r.videoUrl),controls:!0,autoPlay:!0,playsInline:!0,muted:ce,className:"w-full h-full object-contain bg-black",onTimeUpdate:U=>{const z=U.currentTarget.currentTime;isNaN(z)||re(z)},onLoadedMetadata:U=>{const z=U.currentTarget.duration;z&&!isNaN(z)&&z>0&&Be(z)},onEnded:()=>{Me.current?q.current&&(q.current.currentTime=0,q.current.play().catch(()=>{})):setTimeout(()=>{on.current()},0)}}):i.jsx("iframe",{src:encodeURI(r.embedUrl||r.youtubeUrl||""),title:`Suno Embed - ${r.title}`,className:"w-full h-full border-0",allow:"autoplay"}):null,i.jsx("div",{ref:Ge,id:sa,className:`w-full h-full min-h-[220px] ${Je?"hidden":""}`})]});return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300 ${nt?"opacity-100 pointer-events-auto visible":"opacity-0 pointer-events-none invisible"}`,onClick:()=>qe(!1),children:i.jsxs("div",{className:`relative w-full ${Je?"max-w-sm sm:max-w-[380px] aspect-[9/16] max-h-[90vh]":"max-w-3xl aspect-video"} bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col transition-all duration-300`,onClick:U=>U.stopPropagation(),children:[i.jsxs("div",{className:"p-3 bg-neutral-950/90 border-b border-white/10 flex items-center justify-between text-xs",children:[i.jsxs("span",{className:"font-bold text-white truncate max-w-[80%]",children:[r.title," — ",r.artist]}),i.jsx("button",{onClick:()=>qe(!1),className:"px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-semibold transition-colors",children:"Close Video Mode"})]}),i.jsx("div",{className:"flex-1 w-full h-full relative",children:Ei})]})}),i.jsx("audio",{ref:B,crossOrigin:"anonymous",onError:()=>{B.current&&(r!=null&&r.videoUrl)&&B.current.src!==r.videoUrl&&(B.current.src=r.videoUrl,B.current.load(),b&&B.current.play().catch(()=>{}))},onTimeUpdate:U=>{const z=U.currentTarget.currentTime;isNaN(z)||re(z)},onLoadedMetadata:U=>{const z=U.currentTarget.duration;z&&!isNaN(z)&&z>0&&Be(z)},onEnded:()=>{Me.current?B.current&&(B.current.currentTime=0,B.current.play().catch(()=>{})):setTimeout(()=>{on.current()},0)},preload:"auto"}),i.jsxs("div",{id:"persistent-audio-player",className:`fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-xl shadow-2xl transition-all duration-300 ${H?"bg-black/95 border-white/10 text-white":"bg-white/95 border-neutral-200 text-neutral-900"}`,children:[i.jsxs("div",{className:"relative w-full h-1.5 group cursor-pointer bg-white/10",children:[i.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all pointer-events-none relative",style:{width:`${Ti}%`},children:i.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg shadow-cyan-500/50 scale-0 group-hover:scale-100 transition-transform"})}),i.jsx("input",{id:"audio-progress-bar",type:"range",min:"0",max:ot,step:"0.1",value:Ot,onChange:Ai,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer","aria-label":"Seek track"})]}),i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-8 py-3",children:i.jsxs("div",{className:"flex items-center justify-between gap-4 sm:gap-8",children:[i.jsxs("div",{className:"flex items-center gap-3.5 min-w-0 max-w-[40%] sm:max-w-[28%]",children:[i.jsxs("div",{className:"relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-md bg-black",children:[i.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),b&&i.jsx("div",{className:"absolute inset-0 bg-black/50 flex items-center justify-center",children:i.jsxs("div",{className:"flex items-end gap-0.5 h-3",children:[i.jsx("span",{className:"w-0.5 bg-cyan-400 animate-eq-1"}),i.jsx("span",{className:"w-0.5 bg-cyan-300 animate-eq-2"}),i.jsx("span",{className:"w-0.5 bg-purple-400 animate-eq-3"})]})})]}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h4",{className:"text-xs sm:text-sm font-bold truncate leading-tight hover:text-cyan-400 transition-colors",children:r.title}),i.jsxs("p",{className:`text-[11px] sm:text-xs truncate ${H?"text-white/50":"text-neutral-500"}`,children:[r.artist," • ",i.jsxs("span",{className:"font-mono text-cyan-400",children:["#",r.index.toString().padStart(2,"0")]})]})]})]}),i.jsxs("div",{className:"flex flex-col items-center justify-center gap-1.5 flex-1 max-w-md",children:[i.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[i.jsx("button",{id:"player-shuffle-btn",onClick:()=>Z(!Q),className:`p-1.5 rounded-full transition-colors hidden sm:block ${Q?"text-cyan-400 font-bold":H?"text-white/40 hover:text-white":"text-neutral-400 hover:text-black"}`,title:Q?"Shuffle Active":"Enable Shuffle","aria-label":"Shuffle",children:i.jsx(ji,{className:"w-4 h-4"})}),i.jsx("button",{id:"player-prev-btn",onClick:An,className:`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${H?"text-white hover:text-cyan-400":"text-neutral-700 hover:text-black"}`,title:"Previous Track (←)","aria-label":"Previous Track",children:i.jsx(vg,{className:"w-5 h-5 fill-current"})}),i.jsx("button",{id:"player-play-pause-btn",onClick:Ya,className:"w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black hover:bg-cyan-300 flex items-center justify-center font-bold text-xl shadow-xl hover:scale-105 active:scale-95 transition-all",title:b?"Pause (Space)":"Play (Space)","aria-label":b?"Pause":"Play",children:b?i.jsx(Nn,{className:"w-5 h-5 fill-current"}):i.jsx(aa,{className:"w-5 h-5 fill-current translate-x-0.5"})}),i.jsx("button",{id:"player-next-btn",onClick:In,className:`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${H?"text-white hover:text-cyan-400":"text-neutral-700 hover:text-black"}`,title:"Next Track (→)","aria-label":"Next Track",children:i.jsx(kg,{className:"w-5 h-5 fill-current"})}),i.jsx("button",{id:"player-repeat-btn",onClick:()=>at(!X),className:`p-1.5 rounded-full transition-colors hidden sm:block ${X?"text-cyan-400 font-bold":H?"text-white/40 hover:text-white":"text-neutral-400 hover:text-black"}`,title:X?"Repeat Active":"Enable Repeat","aria-label":"Repeat",children:i.jsx(fg,{className:"w-4 h-4"})})]}),i.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold",children:[i.jsx("span",{className:"text-cyan-400",children:so(Ot)}),i.jsx("span",{className:"text-white/30",children:"/"}),i.jsx("span",{className:H?"text-white/40":"text-neutral-400",children:so(ot)}),i.jsxs("span",{className:"hidden lg:inline-flex items-center gap-1 text-[10px] text-white/40 font-normal ml-2",children:[i.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[9px] font-mono",children:"Space"}),i.jsx("span",{children:"Play"}),i.jsx("span",{className:"text-white/20",children:"•"}),i.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[9px] font-mono",children:"←"}),i.jsx("kbd",{className:"px-1 py-0.5 rounded bg-white/10 text-white/70 border border-white/10 text-[9px] font-mono",children:"→"}),i.jsx("span",{children:"Tracks"})]})]})]}),i.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[i.jsxs("div",{className:"hidden md:flex items-center gap-2.5 w-36 lg:w-48",children:[i.jsx("span",{className:`text-[10px] font-bold tracking-wider ${H?"text-white/40":"text-neutral-400"}`,children:"VOL"}),i.jsx("button",{onClick:Si,className:`p-1 rounded-md transition-colors ${H?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,"aria-label":ce?"Unmute":"Mute",children:ce||we===0?i.jsx(Mg,{className:"w-3.5 h-3.5 text-cyan-400"}):i.jsx(Yg,{className:"w-3.5 h-3.5"})}),i.jsx("div",{className:"flex-1 flex items-center",children:i.jsx("input",{id:"player-volume-slider",type:"range",min:"0",max:"100",value:ce?0:we,onChange:ro,className:"w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-400","aria-label":"Volume slider"})})]}),i.jsxs("button",{id:"player-queue-modal-btn",onClick:()=>C(!j),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${j?"bg-cyan-500 border-cyan-400 text-black font-bold shadow-lg shadow-cyan-500/25":H?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Playlist Queue & Up Next","aria-label":"Toggle Playlist Queue",children:[i.jsx(rf,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden sm:inline text-[11px] uppercase tracking-wider",children:"Queue"}),i.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-400/20 text-cyan-300 font-mono",children:ae.length})]}),i.jsxs("button",{id:"player-video-modal-btn",onClick:()=>qe(!nt),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${nt?"bg-cyan-500 border-cyan-400 text-black font-bold":H?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"Open Video View","aria-label":"Toggle Video Mode",children:[i.jsx(Ni,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden lg:inline text-[11px] uppercase tracking-wider",children:"Video"})]}),O&&i.jsxs("button",{id:"player-lyrics-btn",onClick:()=>O(r),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${H?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200"}`,title:"View Full Lyrics","aria-label":"View Full Song Lyrics",children:[i.jsx(an,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden lg:inline text-[11px] uppercase tracking-wider",children:"Lyrics"})]}),i.jsxs("button",{id:"player-share-current-btn",onClick:()=>d(r),className:`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${H?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black hover:bg-neutral-200"}`,title:"Share Song","aria-label":"Share current song",children:[i.jsx(Vt,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"hidden sm:inline text-[11px] uppercase tracking-wider",children:"Share"})]})]})]})})]}),j&&i.jsxs("div",{id:"player-queue-drawer",className:`fixed bottom-24 sm:bottom-28 right-2 sm:right-6 w-[calc(100vw-16px)] sm:w-96 md:w-[420px] max-h-[70vh] z-50 rounded-2xl border shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden transition-all ${H?"bg-neutral-950/95 border-white/15 text-white shadow-cyan-950/40":"bg-white/95 border-neutral-200 text-neutral-900 shadow-xl"}`,children:[i.jsxs("div",{className:"p-3.5 sm:p-4 border-b border-white/10 flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(rf,{className:"w-4 h-4 text-cyan-400"}),i.jsx("h3",{className:"font-bold text-sm tracking-wide",children:"Playlist Queue"}),i.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold",children:[ae.length," Songs"]})]}),i.jsx("button",{onClick:()=>C(!1),className:`p-1.5 rounded-full hover:bg-white/10 transition-colors ${H?"text-white/60 hover:text-white":"text-neutral-500 hover:text-neutral-900"}`,"aria-label":"Close Queue",children:i.jsx(nn,{className:"w-4 h-4"})})]}),i.jsxs("div",{className:"p-2 border-b border-white/10 flex items-center gap-1.5 bg-black/20 text-xs",children:[i.jsxs("button",{onClick:()=>te("current"),className:`flex-1 py-1.5 px-2 rounded-lg font-semibold text-center transition-all ${L==="current"?"bg-cyan-500 text-black font-bold shadow-sm":H?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:["Current (",x.length,")"]}),(N==null?void 0:N.youtube)&&i.jsxs("button",{onClick:()=>{te("youtube"),v&&v("youtube")},className:`flex-1 py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${L==="youtube"?"bg-cyan-500 text-black font-bold shadow-sm":H?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:[i.jsx(hl,{className:"w-3 h-3 text-red-500"}),i.jsxs("span",{children:["YouTube (",N.youtube.length,")"]})]}),(N==null?void 0:N.suno)&&i.jsxs("button",{onClick:()=>{te("suno"),v&&v("suno")},className:`flex-1 py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${L==="suno"?"bg-cyan-500 text-black font-bold shadow-sm":H?"text-white/70 hover:bg-white/5":"text-neutral-600 hover:bg-neutral-100"}`,children:[i.jsx(Ea,{className:"w-3 h-3 text-cyan-400"}),i.jsxs("span",{children:["Suno (",N.suno.length,")"]})]})]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 max-h-[50vh] divide-y divide-white/5",children:ae.map((U,z)=>{const de=(r==null?void 0:r.id)===U.id;return i.jsxs("div",{onClick:()=>{I(U),_(!0)},className:`p-2 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition-all ${de?H?"bg-cyan-500/20 border border-cyan-400/40 text-white shadow-sm":"bg-cyan-50 border border-cyan-300 text-cyan-950 font-medium":H?"hover:bg-white/5 text-white/80 hover:text-white":"hover:bg-neutral-100 text-neutral-800"}`,children:[i.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[i.jsx("span",{className:"font-mono text-[10px] opacity-40 w-4 text-center shrink-0",children:de?i.jsx("span",{className:"text-cyan-400 font-bold",children:"▶"}):(U.index||z+1).toString().padStart(2,"0")}),i.jsx("div",{className:"w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-neutral-900",children:i.jsx("img",{src:U.thumbnail,alt:U.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"})}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("p",{className:"text-xs font-bold truncate leading-tight",children:U.title}),i.jsx("p",{className:`text-[10px] truncate ${H?"text-white/50":"text-neutral-500"}`,children:U.artist})]})]}),i.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[de&&b&&i.jsxs("div",{className:"flex items-end gap-0.5 h-2.5",children:[i.jsx("span",{className:"w-0.5 bg-cyan-400 animate-eq-1"}),i.jsx("span",{className:"w-0.5 bg-cyan-300 animate-eq-2"}),i.jsx("span",{className:"w-0.5 bg-purple-400 animate-eq-3"})]}),i.jsx("span",{className:"font-mono text-[10px] opacity-60",children:U.duration})]})]},`${U.id}-${z}`)})})]})]})},Rg=({track:r,isOpen:x,onClose:I,isDarkMode:d})=>{const[O,H]=E.useState(!1);if(!x||!r)return null;const b=typeof window<"u"?window.location.href:"",_=r.youtubeUrl||b,N=`Check out "${r.title}" by DomInNATEly! 🎸🔥`,v=async()=>{try{navigator.clipboard&&(await navigator.clipboard.writeText(_),H(!0),setTimeout(()=>H(!1),2500))}catch{const D=document.createElement("textarea");D.value=_,document.body.appendChild(D),D.select(),document.execCommand("copy"),document.body.removeChild(D),H(!0),setTimeout(()=>H(!1),2500)}},G=async()=>{if(navigator.share)try{await navigator.share({title:`${r.title} - DomInNATEly`,text:N,url:_})}catch{}},V=encodeURIComponent(_),R=encodeURIComponent(`${N} ${_}`),J=encodeURIComponent(`${r.title} - DomInNATEly`),le=[{name:"X (Twitter)",url:`https://twitter.com/intent/tweet?text=${R}`,color:"bg-black text-white hover:bg-neutral-800 border-neutral-700",icon:i.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})},{name:"Facebook",url:`https://www.facebook.com/sharer/sharer.php?u=${V}`,color:"bg-[#1877F2] text-white hover:bg-[#166fe5] border-transparent",icon:i.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})},{name:"WhatsApp",url:`https://api.whatsapp.com/send?text=${R}`,color:"bg-[#25D366] text-white hover:bg-[#20ba59] border-transparent",icon:i.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"})})},{name:"Reddit",url:`https://reddit.com/submit?url=${V}&title=${J}`,color:"bg-[#FF4500] text-white hover:bg-[#e03d00] border-transparent",icon:i.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"})})},{name:"Telegram",url:`https://t.me/share/url?url=${V}&text=${R}`,color:"bg-[#229ED9] text-white hover:bg-[#1f8ec4] border-transparent",icon:i.jsx(gg,{className:"w-4 h-4 fill-current"})}];return i.jsx("div",{id:"share-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity",onClick:I,children:i.jsxs("div",{id:"share-modal-container",className:`w-full max-w-md rounded-2xl border shadow-2xl p-6 relative transition-all ${d?"bg-[#0a0a0a] border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:D=>D.stopPropagation(),children:[i.jsx("button",{id:"close-share-modal",onClick:I,className:`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${d?"text-white/40 hover:text-white hover:bg-white/10":"text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"}`,"aria-label":"Close modal",children:i.jsx(nn,{className:"w-5 h-5"})}),i.jsxs("div",{className:"flex items-start gap-3.5 mb-5",children:[i.jsx("div",{className:"relative w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-black shadow-md",children:i.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"})}),i.jsxs("div",{className:"min-w-0 flex-1 pr-6",children:[i.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-cyan-400 font-bold uppercase tracking-wider mb-0.5",children:[i.jsx(Vt,{className:"w-3.5 h-3.5"}),"Share Track"]}),i.jsx("h3",{className:"font-bold text-base leading-snug truncate",children:r.title}),i.jsxs("p",{className:`text-xs ${d?"text-white/50":"text-neutral-500"}`,children:["by ",i.jsx("span",{className:"font-medium text-cyan-400",children:r.artist})," • ",r.duration]})]})]}),i.jsxs("div",{className:"mb-5",children:[i.jsx("label",{className:`block text-xs font-bold uppercase tracking-wider mb-1.5 ${d?"text-white/50":"text-neutral-600"}`,children:"Track Link"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("input",{id:"share-link-input",type:"text",readOnly:!0,value:_,className:`flex-1 text-xs px-3 py-2.5 rounded-xl border font-mono truncate focus:outline-hidden ${d?"bg-black/60 border-white/10 text-cyan-300":"bg-neutral-50 border-neutral-300 text-neutral-800"}`}),i.jsx("button",{id:"copy-track-link-btn",onClick:v,className:`px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shrink-0 ${O?"bg-emerald-500 text-black":"bg-cyan-500 hover:bg-cyan-400 text-black shadow-md shadow-cyan-500/20"}`,children:O?i.jsxs(i.Fragment,{children:[i.jsx(oo,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Copied"})]}):i.jsxs(i.Fragment,{children:[i.jsx(io,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Copy"})]})})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-xs font-bold uppercase tracking-wider mb-2.5 ${d?"text-white/50":"text-neutral-600"}`,children:"Share on Social Networks"}),i.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5",children:[le.map(D=>i.jsxs("a",{href:D.url,target:"_blank",rel:"noopener noreferrer",className:`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border shadow-xs transition-transform active:scale-95 ${D.color}`,children:[D.icon,i.jsx("span",{children:D.name})]},D.name)),i.jsxs("a",{href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FF0000] text-white hover:bg-[#d90000] shadow-xs active:scale-95 transition-transform",children:[i.jsx(Ii,{className:"w-4 h-4 fill-current"}),i.jsx("span",{children:"YouTube"})]})]})]}),typeof navigator<"u"&&"share"in navigator&&i.jsx("div",{className:"mt-4 pt-4 border-t border-white/10",children:i.jsxs("button",{id:"native-device-share-btn",onClick:G,className:`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all ${d?"bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-cyan-400":"bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"}`,children:[i.jsx(Vt,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"Open Device Share Sheet"})]})})]})})},$r=({lyrics:r,title:x,artist:I,isDarkMode:d,maxHeight:O="max-h-[360px]",compact:H=!1})=>{const[b,_]=E.useState(!1),N=()=>{r&&(navigator.clipboard.writeText(r),_(!0),setTimeout(()=>_(!1),2e3))};if(!r||r.trim()==="")return i.jsxs("div",{className:"py-10 text-center text-xs opacity-60 flex flex-col items-center justify-center gap-2",children:[i.jsx(an,{className:"w-6 h-6 opacity-40 text-cyan-400"}),i.jsx("p",{children:"No written lyrics available for this track."})]});const v=r.split(`
`);return i.jsxs("div",{className:"w-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(an,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-cyan-400 font-mono",children:"Full Song Lyrics"})]}),i.jsx("button",{onClick:N,className:`px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1.5 transition-all ${b?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":d?"bg-white/5 hover:bg-white/10 text-white/80 border border-white/10":"bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300"}`,title:"Copy lyrics to clipboard","aria-label":"Copy lyrics",children:b?i.jsxs(i.Fragment,{children:[i.jsx(oo,{className:"w-3 h-3 text-emerald-400"}),i.jsx("span",{children:"Copied!"})]}):i.jsxs(i.Fragment,{children:[i.jsx(io,{className:"w-3 h-3 opacity-70"}),i.jsx("span",{children:"Copy"})]})})]}),i.jsx("div",{className:`overflow-y-auto pr-2 space-y-2 ${O} custom-scrollbar font-mono ${H?"text-[11px] leading-relaxed":"text-xs sm:text-sm leading-relaxed"}`,children:v.map((G,V)=>{const R=G.trim();if(!R)return i.jsx("div",{className:"h-2"},V);if(R.startsWith("**[")||R.startsWith("[")||R.endsWith("]**")||R.endsWith("]")){const le=R.replace(/\*\*/g,"");return i.jsx("div",{className:"pt-2 pb-0.5 text-cyan-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs",children:i.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 inline-block",children:le})},V)}return i.jsx("p",{className:`${d?"text-white/80":"text-neutral-800"} hover:text-cyan-300 transition-colors select-text`,children:R},V)})})]})},Dg=({track:r,isOpen:x,onClose:I,isPlaying:d,isCurrentTrack:O,onPlay:H,onOpenShare:b,isDarkMode:_})=>!x||!r?null:i.jsx("div",{id:"track-detail-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md",onClick:I,children:i.jsxs("div",{id:"track-detail-container",className:`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden transition-all relative ${_?"bg-[#0a0a0a] border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:N=>N.stopPropagation(),children:[i.jsx("button",{id:"close-track-detail-btn",onClick:I,className:"absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white border border-white/10 backdrop-blur-sm transition-colors","aria-label":"Close track details",children:i.jsx(nn,{className:"w-5 h-5"})}),i.jsxs("div",{className:"relative aspect-video w-full bg-black",children:[i.jsx("img",{src:r.thumbnail,alt:r.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"}),i.jsxs("div",{className:"absolute bottom-4 left-6 flex items-center gap-3",children:[i.jsx("button",{onClick:()=>H(r),className:"w-12 h-12 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center shadow-xl shadow-cyan-950/60 font-bold transform active:scale-95 transition-transform",children:O&&d?i.jsx(Nn,{className:"w-5 h-5 fill-current"}):i.jsx(aa,{className:"w-5 h-5 fill-current translate-x-0.5"})}),i.jsxs("div",{children:[i.jsxs("span",{className:"text-xs uppercase font-mono font-bold text-cyan-400",children:["Track #",r.index.toString().padStart(2,"0")]}),i.jsx("h2",{className:"text-xl font-bold leading-tight drop-shadow-md text-white",children:r.title})]})]})]}),i.jsxs("div",{className:"p-6",children:[i.jsxs("div",{className:`flex items-center justify-between gap-4 pb-4 border-b ${_?"border-white/10":"border-neutral-200"}`,children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-white/40",children:"Artist / Band"}),i.jsx("p",{className:"text-sm font-bold text-cyan-400",children:r.artist})]}),i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-white/40",children:"Duration"}),i.jsxs("p",{className:"text-sm font-mono font-semibold flex items-center gap-1 text-cyan-400",children:[i.jsx(cf,{className:"w-3.5 h-3.5"}),r.duration]})]}),i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-white/40",children:"Category"}),i.jsx("p",{className:"text-sm font-semibold capitalize text-white/90",children:r.category})]})]}),r.description&&i.jsxs("div",{className:"mt-4",children:[i.jsx("h4",{className:"text-xs uppercase font-semibold tracking-wider text-white/40 mb-1.5",children:"Track Background"}),i.jsx("p",{className:`text-sm leading-relaxed ${_?"text-white/70":"text-neutral-700"}`,children:r.description})]}),i.jsx("div",{className:`mt-4 p-4 rounded-2xl border ${_?"bg-white/5 border-white/10":"bg-neutral-50 border-neutral-200"}`,children:i.jsx($r,{lyrics:Kr(r),title:r.title,artist:r.artist,isDarkMode:_,maxHeight:"max-h-[280px]"})}),i.jsxs("div",{className:"mt-6 flex items-center gap-3",children:[i.jsxs("button",{onClick:()=>b(r),className:"flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95",children:[i.jsx(Vt,{className:"w-4 h-4"}),i.jsx("span",{children:"Share Song"})]}),i.jsxs("a",{href:r.youtubeUrl,target:"_blank",rel:"noopener noreferrer",className:`py-2.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${_?"bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-cyan-400":"bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"}`,children:[i.jsx(Ii,{className:"w-4 h-4 text-[#FF0000]"}),i.jsx("span",{children:"Watch on YouTube"})]})]})]})]})}),qg=({track:r,isOpen:x,onClose:I,isDarkMode:d,isPlaying:O=!1,isCurrentTrack:H=!1,onPlay:b,onOpenShare:_})=>{if(!x||!r)return null;const N=Kr(r),v="thumbnail"in r?r.thumbnail:r.image;return i.jsx("div",{id:"lyrics-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300",onClick:I,children:i.jsxs("div",{id:"lyrics-modal-container",className:`relative w-full max-w-2xl max-h-[85vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden transition-all ${d?"bg-neutral-950/95 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:G=>G.stopPropagation(),children:[i.jsxs("div",{className:"p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-3 bg-black/30",children:[i.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[v&&i.jsx("img",{src:v,alt:r.title,className:"w-12 h-12 rounded-xl object-cover shrink-0 border border-white/10 shadow-md",referrerPolicy:"no-referrer"}),i.jsxs("div",{className:"min-w-0",children:[i.jsxs("span",{className:"text-[10px] font-mono uppercase font-bold text-cyan-400",children:["Track #",r.index," • ","isSuno"in r&&r.isSuno?"Suno AI Collection":"YouTube Media"]}),i.jsx("h3",{className:"text-base sm:text-lg font-black truncate leading-tight",children:r.title}),i.jsx("p",{className:`text-xs truncate ${d?"text-white/60":"text-neutral-500"}`,children:r.artist})]})]}),i.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[b&&i.jsx("button",{onClick:()=>b(r),className:"w-10 h-10 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center font-bold shadow-md transition-all transform active:scale-95",title:H&&O?"Pause":"Play","aria-label":H&&O?"Pause":"Play",children:H&&O?i.jsx(Nn,{className:"w-4 h-4 fill-current"}):i.jsx(aa,{className:"w-4 h-4 fill-current translate-x-0.5"})}),i.jsx("button",{onClick:I,className:"p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors","aria-label":"Close lyrics modal",children:i.jsx(nn,{className:"w-4 h-4"})})]})]}),i.jsx("div",{className:"p-4 sm:p-6 overflow-y-auto flex-1 custom-scrollbar",children:i.jsx($r,{lyrics:N,title:r.title,artist:r.artist,isDarkMode:d,maxHeight:"max-h-[50vh]"})}),i.jsxs("div",{className:"p-3.5 sm:p-4 border-t border-white/10 bg-black/40 flex items-center justify-between gap-3 text-xs",children:[i.jsxs("div",{className:"flex items-center gap-1.5 text-white/50 text-[11px] font-mono",children:[i.jsx(Jr,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"DomInNATEly Official Lyrics"})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[_&&i.jsxs("button",{onClick:()=>_(r),className:"px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-all",children:[i.jsx(Vt,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"Share"})]}),i.jsx("button",{onClick:I,className:"px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all",children:"Done"})]})]})]})})},Lg=({track:r,isPlaying:x,isCurrentTrack:I,onPlay:d,isDarkMode:O})=>i.jsxs("div",{id:`suno-track-card-${r.id}`,className:`group relative rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden ${I?O?"bg-white/[0.08] border-cyan-500/50 shadow-lg shadow-cyan-500/10":"bg-cyan-50/70 border-cyan-400 shadow-md":O?"bg-neutral-900/60 border-white/5 hover:border-white/20 hover:bg-neutral-900/90":"bg-white border-neutral-200 hover:border-neutral-300 shadow-sm"}`,children:[i.jsxs("div",{onClick:()=>d(r),className:"relative aspect-square w-full overflow-hidden bg-neutral-950 cursor-pointer",children:[i.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",loading:"lazy"}),i.jsxs("div",{className:"absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white font-mono text-[11px] font-bold border border-white/10",children:["#",r.index]}),i.jsx("div",{className:"absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-cyan-300 font-mono text-[11px] font-bold border border-white/10",children:r.durationFormatted}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity"}),i.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:i.jsx("button",{type:"button",onClick:H=>{H.stopPropagation(),d(r)},"aria-label":I&&x?"Pause track":"Play track",className:`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all transform duration-300 active:scale-95 ${I&&x?"bg-cyan-400 text-black shadow-cyan-500/50 scale-105 ring-4 ring-cyan-400/40":"bg-white/90 text-black hover:bg-cyan-400 opacity-90 group-hover:opacity-100 group-hover:scale-110 shadow-lg"}`,children:I&&x?i.jsx(Nn,{className:"w-6 h-6 fill-current"}):i.jsx(aa,{className:"w-6 h-6 fill-current translate-x-0.5"})})}),I&&x&&i.jsxs("div",{className:"absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-400/40 flex items-center gap-1",children:[i.jsx("div",{className:"w-1 h-3 bg-cyan-400 animate-pulse"}),i.jsx("div",{className:"w-1 h-4 bg-cyan-400 animate-pulse delay-75"}),i.jsx("div",{className:"w-1 h-2 bg-cyan-400 animate-pulse delay-150"}),i.jsx("span",{className:"text-[10px] font-mono font-bold text-cyan-300 ml-1 uppercase",children:"Playing"})]})]}),i.jsx("div",{onClick:()=>d(r),className:"p-3.5 sm:p-4 cursor-pointer",children:i.jsx("h3",{className:`font-bold text-sm sm:text-base leading-snug line-clamp-1 transition-colors ${I?O?"text-cyan-400":"text-cyan-600":O?"text-white hover:text-cyan-400":"text-neutral-900 hover:text-cyan-600"}`,title:r.title,children:r.title})})]}),Gg=({track:r,onClose:x,isDarkMode:I,onPlayTrack:d,isPlaying:O,isCurrentTrack:H})=>{const[b,_]=E.useState(!1);if(!r)return null;const N=()=>{navigator.clipboard.writeText(r.lyrics||""),_(!0),setTimeout(()=>_(!1),2e3)},v=G=>{if(!G||G.trim()==="")return i.jsx("div",{className:"py-12 text-center text-sm opacity-60",children:"Instrumental or no written lyrics provided for this track."});const V=G.split(`
`);return i.jsx("div",{className:"space-y-2 font-mono text-xs sm:text-sm leading-relaxed",children:V.map((R,J)=>{const le=R.trim(),D=le.startsWith("**[")||le.startsWith("[")||le.endsWith("]**")||le.endsWith("]"),be=le.startsWith("*")&&le.endsWith("*");return D?i.jsx("div",{className:"pt-3 pb-1 text-cyan-400 font-bold tracking-wider uppercase text-[11px] sm:text-xs",children:le.replace(/\*\*/g,"")},J):le?i.jsx("div",{className:`${be?"italic opacity-80":I?"text-white/90":"text-neutral-800"}`,children:le.replace(/\*\*/g,"").replace(/\*/g,"")},J):i.jsx("div",{className:"h-2"},J)})})};return i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity",onClick:x,children:i.jsxs("div",{className:`relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl border overflow-hidden ${I?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:G=>G.stopPropagation(),children:[i.jsxs("div",{className:`p-4 sm:p-5 border-b flex items-center justify-between gap-4 ${I?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[i.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[i.jsx("img",{src:r.image,alt:r.title,className:"w-12 h-12 rounded-lg object-cover shadow border border-white/10"}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h3",{className:"font-bold text-base sm:text-lg truncate tracking-tight",children:r.title}),i.jsxs("p",{className:"text-xs text-cyan-400 font-medium truncate",children:[r.artist," • ",r.durationFormatted]})]})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsxs("button",{onClick:N,className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${I?"bg-white/5 border-white/10 hover:bg-white/10 text-white/80":"bg-white border-neutral-300 hover:bg-neutral-100 text-neutral-700"}`,title:"Copy Lyrics",children:[b?i.jsx(oo,{className:"w-3.5 h-3.5 text-emerald-400"}):i.jsx(io,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:b?"Copied":"Copy"})]}),i.jsxs("a",{href:r.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${I?"bg-white/5 border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 text-white/80":"bg-white border-neutral-300 hover:text-cyan-600 text-neutral-700"}`,title:"Open on Suno.com",children:[i.jsx("span",{className:"hidden sm:inline",children:"Suno"}),i.jsx(Le,{className:"w-3.5 h-3.5"})]}),i.jsx("button",{onClick:x,className:`p-2 rounded-lg transition-colors ${I?"hover:bg-white/10 text-white/70":"hover:bg-neutral-200 text-neutral-600"}`,"aria-label":"Close",children:i.jsx(nn,{className:"w-5 h-5"})})]})]}),r.tags&&r.tags.length>0&&i.jsxs("div",{className:`px-5 py-2.5 border-b flex flex-wrap gap-1.5 text-[11px] ${I?"border-white/5 bg-black/40":"border-neutral-100 bg-neutral-100/50"}`,children:[i.jsx("span",{className:"opacity-50 uppercase tracking-wider text-[10px] self-center mr-1 font-mono",children:"Styles:"}),r.tags.map((G,V)=>i.jsx("span",{className:`px-2 py-0.5 rounded-full border ${I?"bg-white/5 border-white/10 text-white/80":"bg-white border-neutral-200 text-neutral-700"}`,children:G},V))]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 custom-scrollbar",children:v(r.lyrics)}),i.jsxs("div",{className:`p-4 border-t flex items-center justify-between gap-3 text-xs ${I?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[i.jsxs("div",{className:"flex items-center gap-2 text-white/50 text-[11px]",children:[i.jsx(Ea,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"AI-generated vocals and production via Suno v4.5"})]}),d&&i.jsxs("button",{onClick:()=>d(r),className:"px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20",children:[i.jsx(Jr,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:H&&O?"Pause Audio":"Play Audio"})]})]})]})})},Xg=({track:r,onClose:x,isDarkMode:I})=>{const[d,O]=E.useState("embed");return r?i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all",onClick:x,children:i.jsxs("div",{className:`relative w-full max-w-sm sm:max-w-[390px] flex flex-col rounded-2xl shadow-2xl border overflow-hidden max-h-[95vh] ${I?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:H=>H.stopPropagation(),children:[i.jsxs("div",{className:`p-4 border-b flex items-center justify-between gap-3 ${I?"border-white/10 bg-white/5":"border-neutral-200 bg-neutral-50"}`,children:[i.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[i.jsx("div",{className:"w-9 h-9 rounded-lg overflow-hidden border border-white/10 flex-shrink-0",children:i.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover"})}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h3",{className:"font-bold text-sm sm:text-base truncate tracking-tight",children:r.title}),i.jsx("p",{className:"text-[11px] text-cyan-400 font-mono truncate",children:r.artist})]})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsxs("div",{className:`flex items-center p-1 rounded-lg border text-xs font-semibold ${I?"bg-black/50 border-white/10":"bg-neutral-100 border-neutral-300"}`,children:[i.jsxs("button",{onClick:()=>O("embed"),className:`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${d==="embed"?"bg-cyan-500 text-black font-bold shadow-sm":I?"text-white/70 hover:text-white":"text-neutral-600 hover:text-black"}`,children:[i.jsx(df,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Suno Embed"})]}),i.jsxs("button",{onClick:()=>O("video"),className:`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${d==="video"?"bg-cyan-500 text-black font-bold shadow-sm":I?"text-white/70 hover:text-white":"text-neutral-600 hover:text-black"}`,children:[i.jsx(Tg,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Video MP4"})]})]}),i.jsx("a",{href:r.sunoUrl,target:"_blank",rel:"noopener noreferrer",className:`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${I?"bg-white/5 border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 text-white/80":"bg-white border-neutral-300 hover:text-cyan-600 text-neutral-700"}`,title:"Open song on Suno",children:i.jsx(Le,{className:"w-3.5 h-3.5"})}),i.jsx("button",{onClick:x,className:`p-2 rounded-lg transition-colors ${I?"hover:bg-white/10 text-white/70":"hover:bg-neutral-200 text-neutral-600"}`,"aria-label":"Close",children:i.jsx(nn,{className:"w-5 h-5"})})]})]}),i.jsx("div",{className:"relative w-full aspect-[9/16] max-h-[72vh] bg-black flex items-center justify-center overflow-hidden",children:d==="embed"?i.jsx("iframe",{src:encodeURI(r.embedUrl||""),title:`Suno Embed - ${r.title}`,className:"w-full h-full border-0",allow:"autoplay",loading:"lazy"}):i.jsx("video",{src:encodeURI(r.videoUrl||""),controls:!0,autoPlay:!0,playsInline:!0,className:"w-full h-full object-cover bg-black",poster:r.image})}),i.jsxs("div",{className:`p-3.5 border-t flex items-center justify-between text-xs ${I?"border-white/10 bg-white/5 text-white/60":"border-neutral-200 bg-neutral-50 text-neutral-600"}`,children:[i.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[i.jsx(Ea,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"Interactive player hosted by Suno.ai"})]}),i.jsxs("a",{href:"https://suno.com/playlist/26af3597-73d4-491c-a9b3-aac9a0d55c82",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-400 underline underline-offset-2 flex items-center gap-1 font-mono text-[11px]",children:[i.jsx("span",{children:"DomInNATEly Top Hits Playlist"}),i.jsx(Le,{className:"w-3 h-3"})]})]})]})}):null},Wg=({track:r,isOpen:x,onClose:I,isDarkMode:d})=>{const[O,H]=E.useState(!1),[b,_]=E.useState(!1);if(!x)return null;const N=r?r.sunoUrl:wt.url,v=r?r.title:wt.name,G=r?r.artist:`Curated playlist by ${wt.user_display_name}`,V=async()=>{try{await navigator.clipboard.writeText(N),H(!0),setTimeout(()=>H(!1),2e3)}catch{}},R=async()=>{try{await navigator.clipboard.writeText(wt.url),_(!0),setTimeout(()=>_(!1),2e3)}catch{}},J=async()=>{if(navigator.share)try{await navigator.share({title:`${v} - DomInNATEly`,text:`Listen to "${v}" on Suno!`,url:N})}catch{}};return i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity",onClick:I,children:i.jsxs("div",{className:`relative w-full max-w-md rounded-2xl p-6 shadow-2xl border ${d?"bg-neutral-950 border-white/10 text-white":"bg-white border-neutral-200 text-neutral-900"}`,onClick:le=>le.stopPropagation(),children:[i.jsxs("div",{className:"flex items-start justify-between mb-4",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",children:i.jsx(Vt,{className:"w-5 h-5"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-bold text-base",children:r?"Share Track":"Share Playlist"}),i.jsx("p",{className:"text-xs opacity-60",children:"Spread the sound of DomInNATEly"})]})]}),i.jsx("button",{onClick:I,className:"p-1 rounded-lg hover:bg-white/10 transition-colors opacity-70 hover:opacity-100",children:i.jsx(nn,{className:"w-5 h-5"})})]}),i.jsxs("div",{className:`p-3 rounded-xl border flex items-center gap-3 mb-5 ${d?"bg-white/5 border-white/10":"bg-neutral-50 border-neutral-200"}`,children:[i.jsx("img",{src:r?r.image:wt.cover,alt:v,className:"w-12 h-12 rounded-lg object-cover border border-white/10"}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsx("h4",{className:"font-bold text-sm truncate",children:v}),i.jsx("p",{className:"text-xs text-cyan-400 truncate",children:G})]})]}),i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{children:[i.jsx("label",{className:"text-[11px] font-mono uppercase tracking-wider opacity-60 block mb-1.5",children:r?"Track Suno Link":"Playlist Suno Link"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("input",{type:"text",readOnly:!0,value:N,className:`flex-1 px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${d?"bg-neutral-900 border-white/10 text-white/90":"bg-neutral-100 border-neutral-300 text-neutral-800"}`}),i.jsxs("button",{onClick:V,className:"px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20",children:[O?i.jsx(oo,{className:"w-4 h-4 text-black"}):i.jsx(io,{className:"w-4 h-4"}),i.jsx("span",{children:O?"Copied":"Copy"})]})]})]}),r&&i.jsxs("div",{children:[i.jsx("label",{className:"text-[11px] font-mono uppercase tracking-wider opacity-60 block mb-1.5",children:"DomInNATEly Top Hits Playlist Link"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("input",{type:"text",readOnly:!0,value:wt.url,className:`flex-1 px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none ${d?"bg-neutral-900 border-white/10 text-white/90":"bg-neutral-100 border-neutral-300 text-neutral-800"}`}),i.jsxs("button",{onClick:R,className:`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${d?"bg-white/5 border-white/10 text-white hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[b?i.jsx(oo,{className:"w-4 h-4 text-emerald-400"}):i.jsx(io,{className:"w-4 h-4"}),i.jsx("span",{children:b?"Copied":"Copy"})]})]})]})]}),typeof navigator<"u"&&"share"in navigator&&i.jsxs("button",{onClick:J,className:"w-full mt-4 py-2.5 rounded-xl border border-white/15 hover:border-cyan-400/50 flex items-center justify-center gap-2 text-xs font-bold transition-all",children:[i.jsx(Vt,{className:"w-4 h-4 text-cyan-400"}),i.jsx("span",{children:"Open System Share Menu"})]}),i.jsxs("div",{className:"mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs",children:[i.jsxs("a",{href:wt.url,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-[11px]",children:[i.jsx("span",{children:"Open Playlist on Suno"}),i.jsx(Le,{className:"w-3 h-3"})]}),i.jsx("button",{onClick:I,className:"opacity-60 hover:opacity-100 text-xs",children:"Close"})]})]})})},bf=({isDarkMode:r})=>i.jsxs("div",{id:"social-subscribe-banner",className:`relative overflow-hidden rounded-2xl border p-4 sm:p-5 mb-7 transition-all ${r?"bg-gradient-to-r from-neutral-900/90 via-black to-neutral-900/90 border-cyan-500/20 shadow-xl":"bg-gradient-to-r from-cyan-50/80 via-white to-pink-50/80 border-cyan-200/80 shadow-md"}`,children:[i.jsx("div",{className:"absolute top-0 right-1/4 w-72 h-36 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"}),i.jsx("div",{className:"absolute bottom-0 left-1/4 w-72 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[i.jsxs("div",{className:"flex items-start sm:items-center gap-3",children:[i.jsx("div",{className:`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border shadow-inner ${r?"bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border-white/10 text-cyan-400":"bg-cyan-100 border-cyan-200 text-cyan-600"}`,children:i.jsx(ff,{className:"w-5 h-5 text-red-500 fill-red-500 animate-pulse"})}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsxs("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1",children:[i.jsx(Ea,{className:"w-3.5 h-3.5"}),"Support the Music"]}),i.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded-full border ${r?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-200 text-neutral-600"}`,children:"Official Channels"})]}),i.jsxs("h3",{className:"text-base sm:text-lg font-black tracking-tight leading-snug mt-0.5",children:["Please Like & Subscribe to my"," ",i.jsx("a",{href:"https://www.youtube.com/@DomInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-red-500 hover:underline inline-flex items-center gap-0.5",children:"YouTube"})," ","and"," ",i.jsx("a",{href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-pink-400 hover:underline inline-flex items-center gap-0.5",children:"TikTok"})," ","channel!"]}),i.jsx("p",{className:`text-xs mt-0.5 ${r?"text-white/65":"text-neutral-600"}`,children:"Stream music, drop a like on videos, follow for upcoming track drops & connect across socials!"})]})]}),i.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[i.jsxs("a",{id:"cta-youtube-subscribe",href:"https://www.youtube.com/@DomInNATEly?sub_confirmation=1",target:"_blank",rel:"noopener noreferrer",className:"group px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white flex items-center gap-1.5 shadow-md shadow-red-600/25 transition-transform active:scale-95 shrink-0",title:"Subscribe to DomInNATEly on YouTube",children:[i.jsx(Zy,{className:"w-3.5 h-3.5 fill-current group-hover:rotate-12 transition-transform"}),i.jsx("span",{children:"Subscribe YT"}),i.jsx(Le,{className:"w-3 h-3 opacity-70"})]}),i.jsxs("a",{id:"cta-tiktok-follow",href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:"group px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white flex items-center gap-1.5 shadow-md shadow-pink-600/25 transition-transform active:scale-95 shrink-0",title:"Follow DomInNATEly on TikTok",children:[i.jsx("span",{className:"text-sm",children:"🎵"}),i.jsx("span",{children:"Follow TikTok"}),i.jsx(Le,{className:"w-3 h-3 opacity-70"})]}),i.jsx("div",{className:"flex flex-wrap items-center gap-1.5 pt-1 lg:pt-0",children:pf.map(x=>i.jsxs("a",{id:`social-link-${x.id}`,href:x.url,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-300 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100 hover:text-cyan-700"}`,title:`${x.label}: ${x.url}`,children:[i.jsx("span",{className:"text-xs",children:x.icon}),i.jsx("span",{className:"font-semibold text-[11px]",children:x.name}),i.jsx(Le,{className:"w-2.5 h-2.5 opacity-50"})]},x.id))})]})]})]}),Qg=({isDarkMode:r,currentTrack:x,isPlaying:I,onPlayTrack:d,onTogglePlayPause:O,onTrackChange:H,onSwitchToYouTube:b})=>{const[_,N]=E.useState(""),[v,G]=E.useState("all"),[V,R]=E.useState("index"),[J,le]=E.useState("grid"),[D,be]=E.useState(null),[ze,Ue]=E.useState(null),[re,Ve]=E.useState(null),Be=E.useMemo(()=>[{id:"all",label:"All Tracks"},{id:"alt-drill",label:"Alt-Drill & Trap"},{id:"rock",label:"Rock & Alt Pop"},{id:"hip-hop",label:"Rap & Hip-Hop"},{id:"duet",label:"Duets"},{id:"ballad",label:"Ballads & Acoustic"}],[]),we=E.useMemo(()=>{const Q=wt.totalDurationSeconds,Z=Math.floor(Q/3600),X=Math.floor(Q%3600/60);return`${Z} hr ${X} min`},[]),$=E.useMemo(()=>{let Q=[...bt];if(_.trim()!==""){const Z=_.toLowerCase().trim();Q=Q.filter(X=>X.title.toLowerCase().includes(Z)||X.artist.toLowerCase().includes(Z)||X.tags.some(at=>at.toLowerCase().includes(Z))||X.lyrics.toLowerCase().includes(Z))}return v!=="all"&&(Q=Q.filter(Z=>{const X=(Z.tags.join(" ")+" "+Z.title+" "+Z.lyrics).toLowerCase();return v==="alt-drill"?X.includes("drill")||X.includes("trap")||X.includes("dubstep"):v==="rock"?X.includes("rock")||X.includes("pop")||X.includes("punk"):v==="hip-hop"?X.includes("rap")||X.includes("hip-hop")||X.includes("hip hop"):v==="duet"?X.includes("duet")||X.includes("female vocals"):v==="ballad"?X.includes("ballad")||X.includes("acoustic")||X.includes("piano"):!0})),Q.sort((Z,X)=>V==="title"?Z.title.localeCompare(X.title):V==="duration-desc"?X.duration-Z.duration:V==="duration-asc"?Z.duration-X.duration:Z.index-X.index),Q},[_,v,V]),ce=()=>{$.length>0&&d($[0])},He=()=>{if($.length>0){const Q=Math.floor(Math.random()*$.length);d($[Q])}};return i.jsxs("div",{className:"w-full flex flex-col",children:[i.jsxs("section",{id:"suno-hero-banner",className:`relative overflow-hidden rounded-3xl border mb-8 p-6 sm:p-8 md:p-10 transition-colors ${r?"bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 border-white/10 shadow-2xl":"bg-gradient-to-br from-cyan-50/80 via-white to-neutral-100 border-neutral-200 shadow-lg"}`,children:[i.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"}),i.jsx("div",{className:"absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8",children:[i.jsxs("div",{className:"relative flex-shrink-0 group",children:[i.jsx("div",{className:"w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-neutral-900",children:i.jsx("img",{src:wt.cover,alt:wt.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),i.jsxs("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-black font-mono font-bold text-[10px] tracking-wider uppercase shadow-lg shadow-cyan-500/30 flex items-center gap-1.5 whitespace-nowrap",children:[i.jsx(hf,{className:"w-3 h-3 fill-current"}),i.jsx("span",{children:"Suno Top Hits"})]})]}),i.jsxs("div",{className:"flex-1 text-center md:text-left flex flex-col justify-between",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3",children:[i.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-cyan-400/15 text-cyan-400 border border-cyan-400/30 flex items-center gap-1.5",children:[i.jsx(Ea,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Suno Playlist"})]}),i.jsxs("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:[bt.length," Official Tracks"]}),i.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:we})]}),i.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight",children:wt.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium",children:[i.jsx("span",{className:"text-cyan-400 font-bold",children:wt.user_display_name}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-pink-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"🎵 TikTok: @domInNATEly"}),i.jsx(Le,{className:"w-3 h-3"})]}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:"https://www.youtube.com/@DomInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-red-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"▶️ YouTube: @DomInNATEly"}),i.jsx(Le,{className:"w-3 h-3"})]}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:"https://nate-mina.github.io/Portfolio-CV/",target:"_blank",rel:"noopener noreferrer",className:"text-cyan-300 hover:underline flex items-center gap-1 font-mono text-xs",title:"About Nate Mina - Portfolio & CV",children:[i.jsx("span",{children:"👤 About Me"}),i.jsx(Le,{className:"w-3 h-3"})]})]}),i.jsxs("p",{className:`mt-3 text-sm max-w-2xl leading-relaxed ${r?"text-white/70":"text-neutral-600"}`,children:[wt.description,". Stream the official Suno AI audio collection featuring high-fidelity guitars, dual vocal anthems, hard-hitting trap beats, and psychological lyricism."]})]}),i.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3",children:[i.jsxs("button",{id:"suno-play-all-btn",onClick:ce,className:"px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-400/25 transition-transform active:scale-95",children:[i.jsx(aa,{className:"w-4 h-4 fill-current"}),i.jsx("span",{children:"Play All"})]}),i.jsxs("button",{id:"suno-shuffle-all-btn",onClick:He,className:`px-4 py-2.5 rounded-full border text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(ji,{className:"w-4 h-4 text-cyan-400"}),i.jsx("span",{children:"Shuffle"})]}),i.jsxs("a",{id:"suno-open-official-btn",href:wt.url,target:"_blank",rel:"noopener noreferrer",className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[i.jsx("span",{children:"Open on Suno"}),i.jsx(Le,{className:"w-3.5 h-3.5 opacity-70"})]}),b&&i.jsxs("button",{id:"switch-to-youtube-hero-btn",onClick:b,className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-red-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-red-700 hover:bg-neutral-200"}`,children:[i.jsx(hl,{className:"w-4 h-4 text-red-500"}),i.jsxs("span",{children:["Switch to YouTube Gallery (",St.length,")"]})]}),i.jsx("button",{onClick:()=>Ve(null),className:`p-2.5 rounded-full border transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,title:"Share Playlist",children:i.jsx(Vt,{className:"w-4 h-4"})})]})]})]})]}),i.jsx(bf,{isDarkMode:r}),i.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6",children:[i.jsxs("div",{className:"relative flex-1 max-w-md",children:[i.jsx(gf,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50"}),i.jsx("input",{id:"suno-search-input",type:"text",placeholder:"Search Suno tracks, lyrics, styles...",value:_,onChange:Q=>N(Q.target.value),className:`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none transition-colors ${r?"bg-neutral-900 border-white/10 text-white placeholder-white/40 focus:border-cyan-400/60":"bg-white border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-cyan-500"}`})]}),i.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-3",children:[i.jsxs("select",{id:"suno-sort-select",value:V,onChange:Q=>R(Q.target.value),className:`px-3 py-2 rounded-xl text-xs font-semibold border focus:outline-none cursor-pointer ${r?"bg-neutral-900 border-white/10 text-white":"bg-white border-neutral-300 text-neutral-800"}`,children:[i.jsxs("option",{value:"index",children:["Tracklist Order (#1 - #",bt.length,")"]}),i.jsx("option",{value:"title",children:"Title (A to Z)"}),i.jsx("option",{value:"duration-desc",children:"Duration (Longest first)"}),i.jsx("option",{value:"duration-asc",children:"Duration (Shortest first)"})]}),i.jsxs("div",{className:`flex items-center p-1 rounded-xl border ${r?"border-white/10 bg-white/5":"border-neutral-300 bg-neutral-100"}`,children:[i.jsxs("button",{id:"suno-view-grid",onClick:()=>le("grid"),className:`p-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${J==="grid"?"bg-cyan-500 text-black shadow-sm":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"Grid View",children:[i.jsx(mf,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:"Grid"})]}),i.jsxs("button",{id:"suno-view-list",onClick:()=>le("list"),className:`p-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${J==="list"?"bg-cyan-500 text-black shadow-sm":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"List View",children:[i.jsx(yf,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:"List"})]})]})]})]}),i.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-3 mb-6 custom-scrollbar",children:[Be.map(Q=>i.jsx("button",{id:`suno-filter-tag-${Q.id}`,onClick:()=>G(Q.id),className:`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${v===Q.id?"bg-cyan-500 text-black border-cyan-400 font-bold shadow-md shadow-cyan-500/20":r?"bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white":"bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100"}`,children:Q.label},Q.id)),i.jsxs("span",{className:"text-[11px] font-mono opacity-50 ml-auto whitespace-nowrap",children:["Showing ",$.length," of ",bt.length," tracks"]})]}),$.length>0?J==="grid"?i.jsx("div",{id:"suno-tracks-grid",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:$.map(Q=>i.jsx(Lg,{track:Q,isPlaying:I,isCurrentTrack:(x==null?void 0:x.id)===Q.id,onPlay:Z=>d(Z),onOpenLyrics:Z=>be(Z),onOpenEmbed:Z=>Ue(Z),onOpenShare:Z=>Ve(Z),isDarkMode:r},`${Q.id}-${Q.index}`))}):i.jsxs("div",{id:"suno-tracks-list",className:"flex flex-col gap-2.5",children:[i.jsxs("div",{className:`grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 ${r?"text-white/40":"text-neutral-500"}`,children:[i.jsx("div",{className:"col-span-1 text-center",children:"#"}),i.jsx("div",{className:"col-span-8 sm:col-span-9",children:"Track Name"}),i.jsx("div",{className:"col-span-3 sm:col-span-2 text-right",children:"Duration"})]}),$.map(Q=>{const Z=(x==null?void 0:x.id)===Q.id;return i.jsxs("div",{id:`suno-list-item-${Q.id}`,onClick:()=>d(Q),className:`group p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${Z?r?"bg-cyan-950/40 border-cyan-500/40 text-cyan-300":"bg-cyan-50 border-cyan-300 text-cyan-900":r?"bg-neutral-900/50 border-white/5 hover:border-white/15 hover:bg-neutral-900":"bg-white border-neutral-200 hover:border-neutral-300 shadow-sm"}`,children:[i.jsxs("div",{className:"grid grid-cols-12 items-center flex-1 min-w-0",children:[i.jsx("div",{className:"col-span-1 flex items-center justify-center font-mono text-xs opacity-60",children:Z&&I?i.jsx("div",{className:"w-3 h-3 rounded-full bg-cyan-400 animate-ping"}):i.jsx("span",{children:Q.index})}),i.jsxs("div",{className:"col-span-8 sm:col-span-9 flex items-center gap-3 min-w-0 pr-3",children:[i.jsxs("div",{className:"relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900",children:[i.jsx("img",{src:Q.image,alt:Q.title,className:"w-full h-full object-cover"}),i.jsx("div",{className:"absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:i.jsx(aa,{className:"w-3.5 h-3.5 fill-white text-white"})})]}),i.jsx("div",{className:"min-w-0",children:i.jsx("h4",{className:`font-bold text-xs sm:text-sm truncate transition-colors ${Z?"text-cyan-400":"group-hover:text-cyan-400"}`,children:Q.title})})]}),i.jsx("div",{className:"col-span-3 sm:col-span-2 text-right font-mono text-xs opacity-75",children:Q.durationFormatted})]}),i.jsxs("div",{className:"flex items-center gap-1.5 ml-2",children:[i.jsx("button",{onClick:X=>{X.stopPropagation(),be(Q)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Lyrics",children:i.jsx(an,{className:"w-3.5 h-3.5"})}),i.jsx("button",{onClick:X=>{X.stopPropagation(),Ue(Q)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Watch Video",children:i.jsx(Ni,{className:"w-3.5 h-3.5"})}),i.jsx("button",{onClick:X=>{X.stopPropagation(),Ve(Q)},className:"p-1.5 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors",title:"Share",children:i.jsx(Vt,{className:"w-3.5 h-3.5"})})]})]},`${Q.id}-${Q.index}`)})]}):i.jsxs("div",{className:"py-20 text-center rounded-2xl border border-dashed border-white/15 my-6",children:[i.jsx(Fr,{className:"w-10 h-10 mx-auto text-cyan-400/50 mb-3"}),i.jsxs("p",{className:"font-bold text-base",children:['No tracks found matching "',_,'"']}),i.jsx("p",{className:"text-xs opacity-60 mt-1",children:'Try clearing your search query or selecting "All Tracks"'}),i.jsx("button",{onClick:()=>{N(""),G("all")},className:"mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold",children:"Reset Filters"})]}),i.jsx(Gg,{track:D,onClose:()=>be(null),isDarkMode:r,onPlayTrack:Q=>d(Q),isPlaying:I,isCurrentTrack:(x==null?void 0:x.id)===(D==null?void 0:D.id)}),i.jsx(Xg,{track:ze,onClose:()=>Ue(null),isDarkMode:r}),i.jsx(Wg,{track:re,isOpen:!!(re||re===null&&!1),onClose:()=>Ve(null),isDarkMode:r})]})},Fg=({track:r,isPlaying:x,onPlay:I,onPause:d,onEnded:O,isDarkMode:H,volume:b=80,isMuted:_=!1,size:N="sm",onTimeUpdate:v,seekTarget:G,onSeekHandled:V})=>{const R=!!("isSuno"in r?r.isSuno:r.audioUrl||r.videoUrl),J=E.useRef(null),le=E.useRef(null),D=E.useRef(null),be=E.useRef(!1),ze=E.useRef(null),Ue=E.useRef(!1),re=E.useRef(x);re.current=x;const Ve=E.useRef(r.id);Ve.current=r.id;const Be=E.useRef(r);Be.current=r;const we=E.useRef(b);we.current=b;const $=E.useRef(_);$.current=_;const ce=E.useRef(I);ce.current=I;const He=E.useRef(d);He.current=d;const Q=E.useRef(O);Q.current=O;const Z=E.useRef(v);Z.current=v;const X=C=>{if(!D.current||!be.current){Ue.current=!0,ze.current=C;return}try{typeof D.current.loadVideoById=="function"&&D.current.loadVideoById(C),typeof D.current.playVideo=="function"&&D.current.playVideo()}catch(L){console.warn("Error playing YouTube track:",L)}},at=()=>{if(Ue.current=!1,!(!D.current||!be.current))try{typeof D.current.pauseVideo=="function"&&D.current.pauseVideo()}catch{}};E.useEffect(()=>{if(R)return;let C=0,L=null;const te=()=>{if(!window.YT||!window.YT.Player){C++<60&&(L=setTimeout(te,100));return}const ae=le.current;if(!ae)return;ae.innerHTML="";const h=document.createElement("div");h.id="yt-showcase-player-slot",h.style.width="100%",h.style.height="100%",ae.appendChild(h);const S=typeof window<"u"&&window.location.origin&&window.location.origin!=="null"?window.location.origin:void 0;try{D.current=new window.YT.Player(h,{height:"100%",width:"100%",videoId:r.id,playerVars:{autoplay:re.current?1:0,controls:1,rel:0,modestbranding:1,playsinline:1,enablejsapi:1,...S?{origin:S}:{}},events:{onReady:y=>{be.current=!0;try{$.current?y.target.mute():(y.target.unMute(),y.target.setVolume(we.current));const B=ze.current||Ve.current;ze.current=null,re.current||Ue.current?(Ue.current=!1,typeof y.target.loadVideoById=="function"&&y.target.loadVideoById(B),typeof y.target.playVideo=="function"&&y.target.playVideo()):typeof y.target.cueVideoById=="function"&&y.target.cueVideoById(B)}catch(B){console.warn("onReady setup notice:",B)}},onStateChange:y=>{var B,q,ne;if(y.data===1){if(ce.current(Be.current),typeof((B=y.target)==null?void 0:B.getDuration)=="function"){const oe=y.target.getDuration(),Ge=y.target.getCurrentTime?y.target.getCurrentTime():0;oe&&oe>0&&((q=Z.current)==null||q.call(Z,Ge,oe))}}else y.data===2?He.current():y.data===0&&((ne=Q.current)==null||ne.call(Q))},onError:y=>{console.warn("YouTube player showcase event notice:",y)}}})}catch(y){console.warn("Error setting up YouTube showcase player:",y)}};if(window.YT&&window.YT.Player)te();else{const ae=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{ae&&ae(),te()},te()}return()=>{if(L&&clearTimeout(L),D.current&&typeof D.current.destroy=="function")try{D.current.destroy()}catch{}D.current=null,be.current=!1}},[R]),E.useEffect(()=>{if(!R)if(x)X(r.id);else if(D.current&&be.current&&typeof D.current.cueVideoById=="function")try{D.current.cueVideoById(r.id)}catch{}else ze.current=r.id},[r.id,R]),E.useEffect(()=>{R||(x?X(r.id):at())},[x,R]),E.useEffect(()=>{if(!R&&D.current&&be.current)try{_&&typeof D.current.mute=="function"?D.current.mute():!_&&typeof D.current.unMute=="function"&&(D.current.unMute(),typeof D.current.setVolume=="function"&&D.current.setVolume(b))}catch{}},[b,_,R]),E.useEffect(()=>{if(R)return;let C=null;return x&&(C=setInterval(()=>{var L;if(D.current&&be.current&&typeof D.current.getCurrentTime=="function")try{const te=D.current.getCurrentTime(),ae=typeof D.current.getDuration=="function"?D.current.getDuration():0;te!==void 0&&!isNaN(te)&&((L=Z.current)==null||L.call(Z,te,ae||0))}catch{}},250)),()=>{C&&clearInterval(C)}},[R,x]),E.useEffect(()=>{R&&J.current&&(x?J.current.play().catch(C=>{console.warn("Suno video autoplay notice:",C)}):J.current.pause())},[x,R,r.id]),E.useEffect(()=>{R&&J.current&&(J.current.volume=_?0:b/100,J.current.muted=_)},[b,_,R]),E.useEffect(()=>{if(G!=null){if(R)J.current&&(J.current.currentTime=G,V==null||V());else if(D.current&&be.current&&typeof D.current.seekTo=="function")try{D.current.seekTo(G,!0),V==null||V()}catch{}}},[G,R,V]);const nt="thumbnail"in r?r.thumbnail:r.image,qe="videoUrl"in r&&r.videoUrl?r.videoUrl:"audioUrl"in r&&r.audioUrl?r.audioUrl:`https://cdn1.suno.ai/${r.id}.mp4`,j=N==="sm"?"max-w-[270px]":N==="md"?"max-w-[320px]":"max-w-[370px]";return i.jsx("div",{className:`relative w-full ${R?`aspect-[9/16] ${j} mx-auto`:"aspect-video"} rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl group transition-all duration-300`,children:R?i.jsxs("div",{className:"relative w-full h-full bg-black flex items-center justify-center",children:[i.jsx("video",{ref:J,src:qe,poster:nt,controls:!0,autoPlay:x,playsInline:!0,preload:"auto",className:"w-full h-full object-cover bg-black",onTimeUpdate:C=>{var ae;const L=C.currentTarget.currentTime,te=C.currentTarget.duration;isNaN(L)||(ae=Z.current)==null||ae.call(Z,L,isNaN(te)?0:te)},onLoadedMetadata:C=>{var te;const L=C.currentTarget.duration;L&&!isNaN(L)&&((te=Z.current)==null||te.call(Z,0,L))},onPlay:()=>{x||I(r)},onPause:()=>{x&&d()},onEnded:()=>{O&&O()},onError:C=>{console.warn("Suno video playback error:",C)}},`suno-video-${r.id}`),i.jsxs("div",{className:"absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300 font-bold pointer-events-none flex items-center gap-1 z-10",children:[i.jsx(Ea,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"Suno 9:16 Player"})]})]}):i.jsxs("div",{className:"relative w-full h-full bg-black",children:[i.jsx("div",{ref:le,className:"w-full h-full absolute inset-0 bg-black"}),i.jsxs("div",{className:"absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300 font-bold pointer-events-none flex items-center gap-1 z-10",children:[i.jsx(Ni,{className:"w-3 h-3 text-cyan-400"}),i.jsx("span",{children:"HD Music Video"})]})]})})},Zg=({isDarkMode:r})=>i.jsx("footer",{id:"site-social-footer",className:`mt-16 pt-10 pb-8 border-t transition-colors ${r?"border-white/10 bg-black/40":"border-neutral-200 bg-neutral-100/60"}`,children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6",children:[i.jsxs("div",{className:"text-center md:text-left",children:[i.jsxs("div",{className:"flex items-center justify-center md:justify-start gap-2 mb-1.5",children:[i.jsx("span",{className:"font-black text-lg tracking-wider",children:"DomInNATEly"}),i.jsx("span",{className:"text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-bold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20",children:"Official Artist Hub"})]}),i.jsx("p",{className:`text-xs max-w-md ${r?"text-white/60":"text-neutral-600"}`,children:"Please like and subscribe to my YouTube and TikTok channels to support the music and stay updated on every new release!"})]}),i.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2.5",children:[i.jsxs("a",{id:"footer-youtube-link",href:"https://www.youtube.com/@DomInNATEly?sub_confirmation=1",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-md shadow-red-600/20",children:[i.jsx(Ii,{className:"w-3.5 h-3.5 fill-current"}),i.jsx("span",{children:"YouTube Channel"}),i.jsx(Le,{className:"w-3 h-3 opacity-70"})]}),pf.map(x=>i.jsxs("a",{id:`footer-social-${x.id}`,href:x.url,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-200 hover:text-cyan-600"}`,title:x.label,children:[i.jsx("span",{children:x.icon}),i.jsx("span",{children:x.name}),i.jsx(Le,{className:"w-2.5 h-2.5 opacity-50"})]},x.id))]})]}),i.jsxs("div",{className:`mt-8 pt-4 border-t flex flex-col sm:flex-row items-center justify-between text-[11px] gap-2 ${r?"border-white/5 text-white/40":"border-neutral-200 text-neutral-500"}`,children:[i.jsxs("div",{children:["© ",new Date().getFullYear()," DomInNATEly. Built for fans, listeners, and creators."]}),i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx("span",{children:"Made with passion for high-energy alt-rock & storytelling"}),i.jsx(ff,{className:"w-3 h-3 text-red-500 fill-red-500 inline"})]})]})]})});function Kg(){const[r,x]=E.useState(()=>{var Y;if(typeof window<"u")try{const K=(Y=window.localStorage)==null?void 0:Y.getItem("dominnately_theme");if(K)return K==="dark"}catch{return!0}return!0}),[I,d]=E.useState("youtube"),[O,H]=E.useState(()=>typeof window<"u"?window.innerWidth>=1280:!1);E.useEffect(()=>{const Y=()=>{H(window.innerWidth>=1280)};return window.addEventListener("resize",Y),()=>window.removeEventListener("resize",Y)},[]);const[b,_]=E.useState(St[0]||null),[N,v]=E.useState(!1),[G,V]=E.useState("video"),[R,J]=E.useState(()=>{try{const Y=localStorage.getItem("dominately_stage_size");if(Y==="sm"||Y==="md"||Y==="lg")return Y}catch{}return"sm"}),le=Y=>{J(Y);try{localStorage.setItem("dominately_stage_size",Y)}catch{}},[D,be]=E.useState(bt[0]||null),[ze,Ue]=E.useState(!1),[re,Ve]=E.useState(""),[Be,we]=E.useState("playlist"),[$,ce]=E.useState("all"),[He,Q]=E.useState("grid"),[Z,X]=E.useState(null),[at,nt]=E.useState(null),[qe,j]=E.useState(null);E.useEffect(()=>{var Y;try{(Y=window.localStorage)==null||Y.setItem("dominnately_theme",r?"dark":"light")}catch{}r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]);const C=E.useMemo(()=>bt.map(of),[]),L=E.useMemo(()=>b!=null&&b.isSuno&&bt.find(Y=>Y.id===b.id)||D,[b,D]),[te,ae]=E.useState(0),[h,S]=E.useState(0),[y,B]=E.useState(null),[q,ne]=E.useState(80),[oe,Ge]=E.useState(!1),Ne=(Y,K)=>{ae(Y),K>0&&S(K)},Tt=Y=>{ae(Y),B(Y)},sa=(Y,K)=>{ne(Y),Ge(K)},Re=Y=>{(b==null?void 0:b.id)===Y.id?v(!N):(_(Y),v(!0),ae(0),S(Y.durationSeconds||0))},_t=Y=>{be(Y);const K=of(Y);(b==null?void 0:b.id)===K.id?(v(!N),Ue(!N)):(_(K),v(!0),Ue(!0),ae(0),S(K.durationSeconds||0))},Me=E.useMemo(()=>{let Y=[...St];if(re.trim()!==""){const K=re.toLowerCase().trim();Y=Y.filter(pe=>pe.title.toLowerCase().includes(K)||pe.artist.toLowerCase().includes(K)||pe.featuredLyrics&&pe.featuredLyrics.toLowerCase().includes(K)||pe.tags.some(Jt=>Jt.toLowerCase().includes(K))||pe.description&&pe.description.toLowerCase().includes(K))}return $!=="all"&&(Y=Y.filter(K=>K.category===$)),Y.sort((K,pe)=>{switch(Be){case"playlist":return K.index-pe.index;case"newest":return pe.index-K.index;case"duration-desc":return pe.durationSeconds-K.durationSeconds;case"duration-asc":return K.durationSeconds-pe.durationSeconds;case"title-asc":return K.title.localeCompare(pe.title);case"title-desc":return pe.title.localeCompare(K.title);default:return K.index-pe.index}}),Y},[re,$,Be]),ra=E.useMemo(()=>I==="suno"||b!=null&&b.isSuno?C:Me.length>0?Me:St,[I,b==null?void 0:b.isSuno,C,Me]),Kt=()=>{Me.length>0&&(_(Me[0]),v(!0))},ln=()=>{if(Me.length>0){const Y=Math.floor(Math.random()*Me.length);_(Me[Y]),v(!0)}};return i.jsxs("div",{className:`min-h-screen font-outfit transition-colors duration-200 flex flex-col ${r?"bg-[#050505] text-white":"bg-neutral-50 text-neutral-900"}`,children:[i.jsx(Vg,{isDarkMode:r,onToggleDarkMode:()=>x(!r),trackCount:I==="suno"?bt.length:St.length,onQuickShareAll:()=>X(b||St[0])}),i.jsxs("main",{className:"flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-36",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-6",children:[i.jsxs("button",{id:"tab-youtube-gallery",onClick:()=>{d("youtube")},className:`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all border shadow-sm ${I==="youtube"?"bg-cyan-500 text-black border-cyan-400 shadow-cyan-500/25 ring-2 ring-cyan-400/40":r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(hl,{className:"w-4 h-4"}),i.jsxs("span",{children:["YouTube Audio Gallery (",St.length," Tracks)"]})]}),i.jsxs("button",{id:"tab-suno-playlist",onClick:()=>{d("suno")},className:`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all border shadow-sm ${I==="suno"?"bg-cyan-500 text-black border-cyan-400 shadow-cyan-500/25 ring-2 ring-cyan-400/40":r?"bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-cyan-400":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(Ea,{className:"w-4 h-4 text-cyan-400"}),i.jsxs("span",{children:["Suno AI Playlist (",bt.length," Tracks)"]})]})]}),i.jsxs("div",{className:"xl:grid xl:grid-cols-12 xl:gap-8 items-start",children:[i.jsx("div",{className:R==="sm"?"xl:col-span-8 2xl:col-span-9 transition-all duration-300":R==="md"?"xl:col-span-7 2xl:col-span-8 transition-all duration-300":"xl:col-span-6 transition-all duration-300",children:I==="suno"?i.jsx(Qg,{isDarkMode:r,currentTrack:L,isPlaying:N&&!!(b!=null&&b.isSuno),onPlayTrack:_t,onTogglePlayPause:()=>{v(!N),Ue(!N)},onTrackChange:_t,onSwitchToYouTube:()=>d("youtube")}):i.jsxs(i.Fragment,{children:[i.jsxs("section",{id:"youtube-hero-banner",className:`relative overflow-hidden rounded-3xl border mb-8 p-6 sm:p-8 md:p-10 transition-colors ${r?"bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 border-white/10 shadow-2xl":"bg-gradient-to-br from-red-50/70 via-white to-neutral-100 border-neutral-200 shadow-lg"}`,children:[i.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none"}),i.jsx("div",{className:"absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8",children:[i.jsxs("div",{className:"relative flex-shrink-0 group",children:[i.jsx("div",{className:"w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-neutral-900",children:i.jsx("img",{src:Ta.cover,alt:Ta.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),i.jsxs("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-red-600 text-white font-mono font-bold text-[10px] tracking-wider uppercase shadow-lg shadow-red-600/30 flex items-center gap-1.5 whitespace-nowrap",children:[i.jsx(hf,{className:"w-3 h-3 fill-current"}),i.jsx("span",{children:"YouTube Top Hits"})]})]}),i.jsxs("div",{className:"flex-1 text-center md:text-left flex flex-col justify-between",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3",children:[i.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-red-500/15 text-red-400 border border-red-500/30 flex items-center gap-1.5",children:[i.jsx(hl,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Official YouTube Playlist"})]}),i.jsxs("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:[St.length," Recorded Tracks"]}),i.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono border ${r?"bg-white/5 border-white/10 text-white/70":"bg-neutral-100 border-neutral-300 text-neutral-700"}`,children:Ta.totalDurationFormatted})]}),i.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight",children:Ta.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium",children:[i.jsx("span",{className:"text-cyan-400 font-bold",children:Ta.channel}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:Ta.channelUrl,target:"_blank",rel:"noopener noreferrer",className:"text-red-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"▶️ YouTube: @DomInNATEly"}),i.jsx(Le,{className:"w-3 h-3"})]}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:"https://tiktok.com/@domInNATEly",target:"_blank",rel:"noopener noreferrer",className:"text-pink-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"🎵 TikTok: @domInNATEly"}),i.jsx(Le,{className:"w-3 h-3"})]}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:"https://nate-mina.github.io/Portfolio-CV/",target:"_blank",rel:"noopener noreferrer",className:"text-cyan-300 hover:underline flex items-center gap-1 font-mono text-xs",title:"About Nate Mina - Portfolio & CV",children:[i.jsx("span",{children:"👤 About Me"}),i.jsx(Le,{className:"w-3 h-3"})]}),i.jsx("span",{className:"opacity-40",children:"•"}),i.jsxs("a",{href:Ta.playlistUrl,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline flex items-center gap-1 font-mono text-xs",children:[i.jsx("span",{children:"Open Playlist on YouTube"}),i.jsx(Le,{className:"w-3 h-3"})]})]}),i.jsxs("p",{className:`mt-3 text-sm max-w-2xl leading-relaxed ${r?"text-white/70":"text-neutral-600"}`,children:[Ta.description," Full-length studio recordings, explosive remixes, and introspective anthems."]})]}),i.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3",children:[i.jsxs("button",{id:"youtube-hero-play-all-btn",onClick:Kt,className:"px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-400/25 transition-transform active:scale-95",children:[i.jsx(aa,{className:"w-4 h-4 fill-current"}),i.jsxs("span",{children:["Play All (",St.length,")"]})]}),i.jsxs("button",{id:"youtube-hero-shuffle-btn",onClick:ln,className:`px-4 py-2.5 rounded-full border text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(ji,{className:"w-4 h-4 text-cyan-400"}),i.jsx("span",{children:"Shuffle"})]}),i.jsxs("a",{id:"youtube-open-official-btn",href:Ta.playlistUrl,target:"_blank",rel:"noopener noreferrer",className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-white/80 hover:text-red-400 hover:border-red-400/40 hover:bg-white/10":"bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100"}`,children:[i.jsx(hl,{className:"w-4 h-4 text-red-500"}),i.jsx("span",{children:"Open YouTube Playlist"}),i.jsx(Le,{className:"w-3.5 h-3.5 opacity-60"})]}),i.jsxs("button",{id:"switch-to-suno-hero-btn",onClick:()=>d("suno"),className:`px-4 py-2.5 rounded-full border text-sm font-semibold flex items-center gap-1.5 transition-all ${r?"bg-white/5 border-white/10 text-cyan-400 hover:bg-white/10":"bg-neutral-100 border-neutral-300 text-cyan-700 hover:bg-neutral-200"}`,children:[i.jsx(Ea,{className:"w-4 h-4"}),i.jsxs("span",{children:["Switch to Suno Playlist (",bt.length,")"]})]})]})]})]})]}),i.jsx(bf,{isDarkMode:r}),i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-5",children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsxs("button",{id:"play-all-tracks-btn",onClick:Kt,className:"px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all active:scale-95",children:[i.jsx(aa,{className:"w-3.5 h-3.5 fill-current"}),i.jsx("span",{children:"Play All"})]}),i.jsxs("button",{id:"shuffle-all-tracks-btn",onClick:ln,className:`px-3.5 py-2 rounded-full border text-xs sm:text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${r?"bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40":"bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"}`,children:[i.jsx(ji,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"Shuffle"})]})]}),i.jsxs("div",{className:`flex items-center gap-1.5 p-1 rounded-full border ${r?"border-white/10 bg-white/5":"border-neutral-300 bg-neutral-100"}`,children:[i.jsxs("button",{id:"view-mode-grid",onClick:()=>Q("grid"),className:`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${He==="grid"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"Grid View","aria-label":"Grid View",children:[i.jsx(mf,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:"Grid"})]}),i.jsxs("button",{id:"view-mode-list",onClick:()=>Q("list"),className:`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${He==="list"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":r?"text-white/60 hover:text-white":"text-neutral-600 hover:text-black"}`,title:"List View","aria-label":"List View",children:[i.jsx(yf,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:"List"})]})]})]}),i.jsx(Og,{searchQuery:re,onSearchChange:Ve,sortField:Be,onSortChange:we,selectedCategory:$,onCategoryChange:ce,totalResults:Me.length,totalTracks:St.length,isDarkMode:r}),Me.length>0?He==="grid"?i.jsx("div",{id:"tracks-grid-container",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:Me.map(Y=>i.jsx(_g,{track:Y,isPlaying:N,isCurrentTrack:(b==null?void 0:b.id)===Y.id,onPlay:Re,onOpenShare:K=>X(K),onOpenDetails:K=>nt(K),onOpenLyrics:K=>j(K),isDarkMode:r},`${Y.id}-${Y.index}`))}):i.jsxs("div",{id:"tracks-list-container",className:"flex flex-col gap-2.5",children:[i.jsxs("div",{className:`grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 ${r?"text-white/40":"text-neutral-500"}`,children:[i.jsx("div",{className:"col-span-7 sm:col-span-6",children:"Track Info"}),i.jsx("div",{className:"hidden sm:block sm:col-span-3",children:"Category"}),i.jsx("div",{className:"col-span-3 sm:col-span-2",children:"Duration"}),i.jsx("div",{className:"col-span-2 sm:col-span-1 text-right",children:"Share"})]}),Me.map(Y=>{const K=(b==null?void 0:b.id)===Y.id;return i.jsx("div",{id:`track-list-item-${Y.id}`,onClick:()=>Re(Y),className:`group p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${K?r?"bg-white/10 border-cyan-400/80 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-400/30":"bg-cyan-50/50 border-cyan-400 text-cyan-900 shadow-xs":r?"bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15 text-white":"bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-900 shadow-xs"}`,children:i.jsxs("div",{className:"grid grid-cols-12 w-full items-center gap-2",children:[i.jsxs("div",{className:"col-span-7 sm:col-span-6 flex items-center gap-3 min-w-0",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-xs",children:Y.index.toString().padStart(2,"0")}),i.jsx("img",{src:Y.thumbnail,alt:Y.title,className:"w-12 h-8 rounded-lg object-cover border border-white/10 shrink-0 hidden sm:block",referrerPolicy:"no-referrer"}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h4",{className:`font-bold text-xs sm:text-sm truncate transition-colors ${K?"text-cyan-400":"group-hover:text-cyan-400"}`,children:Y.title}),i.jsx("p",{className:`text-[11px] truncate ${r?"text-white/50":"text-neutral-500"}`,children:Y.artist})]})]}),i.jsx("div",{className:"hidden sm:block sm:col-span-3",children:i.jsx("span",{className:`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${r?"bg-white/5 border-white/10 text-white/60":"bg-neutral-100 border-neutral-300 text-neutral-600"}`,children:Y.category})}),i.jsx("div",{className:"col-span-3 sm:col-span-2",children:i.jsx("span",{className:"text-xs font-mono text-cyan-400 font-bold",children:Y.duration})}),i.jsxs("div",{className:"col-span-2 sm:col-span-1 flex items-center justify-end gap-1",children:[i.jsx("button",{id:`list-lyrics-btn-${Y.id}`,onClick:pe=>{pe.stopPropagation(),j(Y)},className:`p-1.5 rounded-md transition-colors ${r?"text-white/50 hover:text-cyan-400 hover:bg-white/10":"text-neutral-500 hover:text-black hover:bg-neutral-200"}`,title:"View Full Lyrics","aria-label":`View lyrics for ${Y.title}`,children:i.jsx(an,{className:"w-3.5 h-3.5"})}),i.jsx("button",{id:`list-share-btn-${Y.id}`,onClick:pe=>{pe.stopPropagation(),X(Y)},className:`p-1.5 rounded-md transition-colors ${r?"text-white/50 hover:text-cyan-400 hover:bg-white/10":"text-neutral-500 hover:text-black hover:bg-neutral-200"}`,title:"Share Track","aria-label":`Share ${Y.title}`,children:i.jsx(Vt,{className:"w-3.5 h-3.5"})})]})]})},`${Y.id}-${Y.index}`)})]}):i.jsxs("div",{id:"empty-tracks-state",className:`rounded-2xl border p-12 text-center my-6 backdrop-blur-md ${r?"bg-white/5 border-white/10":"bg-white border-neutral-200"}`,children:[i.jsx(Fr,{className:"w-10 h-10 mx-auto mb-3 text-cyan-400 opacity-80"}),i.jsx("h3",{className:"text-base font-bold",children:"No tracks matched your search"}),i.jsx("p",{className:`text-xs mt-1 max-w-sm mx-auto ${r?"text-white/50":"text-neutral-600"}`,children:'Try clearing your search query or selecting "All Tracks" to view the complete catalog.'}),i.jsx("button",{onClick:()=>{Ve(""),ce("all"),we("playlist")},className:"mt-4 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider transition-all",children:"Reset Filters"})]})]})}),(()=>{const Y=b||(I==="suno"?C[0]:St[0]);return Y?i.jsx("aside",{className:`hidden xl:block ${R==="sm"?"xl:col-span-4 2xl:col-span-3":R==="md"?"xl:col-span-5 2xl:col-span-4":"xl:col-span-6"} sticky top-24 transition-all duration-300 flex justify-end`,children:i.jsxs("div",{id:"immersive-now-playing-stage",className:`w-full rounded-3xl border ${R==="sm"?"p-3.5 sm:p-4 max-w-[320px]":R==="md"?"p-4 sm:p-5 max-w-[400px]":"p-5 sm:p-6 max-w-[490px]"} ml-auto flex flex-col items-center justify-center backdrop-blur-xl transition-all shadow-2xl relative overflow-hidden ${r?"bg-black/60 border-white/10 text-white":"bg-white/95 border-neutral-200 text-neutral-900"}`,children:[i.jsx("div",{className:"absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/15 blur-[60px] rounded-full pointer-events-none animate-pulse"}),i.jsx("div",{className:"absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600/15 blur-[60px] rounded-full pointer-events-none"}),i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 w-full mb-3 z-20",children:[i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("span",{className:`w-2 h-2 rounded-full ${N?"bg-cyan-400 animate-ping":"bg-white/30"}`}),i.jsx("span",{className:"text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-cyan-400",children:N?"Live Stage":"Now Playing"})]}),i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsxs("div",{className:"flex items-center bg-black/50 p-0.5 rounded-xl border border-white/10 text-xs",children:[i.jsxs("button",{onClick:()=>V("video"),className:`px-2 py-1 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${G==="video"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/25":"text-white/60 hover:text-white"}`,title:"Watch Music Video",children:[i.jsx(Ni,{className:"w-3 h-3"}),i.jsx("span",{className:R==="sm"?"hidden sm:inline text-[11px]":"text-xs",children:"Video"})]}),i.jsxs("button",{onClick:()=>V("lyrics"),className:`px-2 py-1 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${G==="lyrics"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/25":"text-white/60 hover:text-white"}`,title:"View Full Lyrics",children:[i.jsx(an,{className:"w-3 h-3"}),i.jsx("span",{className:R==="sm"?"hidden sm:inline text-[11px]":"text-xs",children:"Lyrics"})]}),i.jsxs("button",{onClick:()=>V("artwork"),className:`px-2 py-1 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${G==="artwork"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/25":"text-white/60 hover:text-white"}`,title:"View Album Art",children:[i.jsx(hl,{className:"w-3 h-3"}),i.jsx("span",{className:R==="sm"?"hidden sm:inline text-[11px]":"text-xs",children:"Art"})]})]}),i.jsxs("div",{className:"flex items-center bg-black/50 p-0.5 rounded-xl border border-white/10",title:"Adjust player size & right positioning",children:[i.jsx("button",{onClick:()=>le("sm"),className:`px-1.5 py-0.5 rounded-lg text-[10px] font-mono font-bold transition-all ${R==="sm"?"bg-cyan-500 text-black shadow-sm font-black":"text-white/50 hover:text-white"}`,title:"Compact (Smaller & further right)","aria-label":"Set player size to small",children:"S"}),i.jsx("button",{onClick:()=>le("md"),className:`px-1.5 py-0.5 rounded-lg text-[10px] font-mono font-bold transition-all ${R==="md"?"bg-cyan-500 text-black shadow-sm font-black":"text-white/50 hover:text-white"}`,title:"Medium player size","aria-label":"Set player size to medium",children:"M"}),i.jsx("button",{onClick:()=>le("lg"),className:`px-1.5 py-0.5 rounded-lg text-[10px] font-mono font-bold transition-all ${R==="lg"?"bg-cyan-500 text-black shadow-sm font-black":"text-white/50 hover:text-white"}`,title:"Large expanded player size","aria-label":"Set player size to large",children:"L"})]})]})]}),i.jsxs("div",{className:"relative w-full mb-3.5 z-10",children:[i.jsx("div",{className:G==="video"?"block":"hidden",children:i.jsx(Fg,{track:Y,isPlaying:N&&(b==null?void 0:b.id)===Y.id,onPlay:K=>{(b==null?void 0:b.id)===K.id?v(!0):Re(K)},onPause:()=>v(!1),onEnded:()=>{const K=ra,pe=K.findIndex(Jt=>Jt.id===Y.id);pe!==-1&&pe<K.length-1?Re(K[pe+1]):K.length>0&&Re(K[0])},isDarkMode:r,size:R,volume:q,isMuted:oe,onTimeUpdate:Ne,seekTarget:y,onSeekHandled:()=>B(null)})}),G==="lyrics"&&i.jsx("div",{className:"w-full p-3.5 rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-md shadow-xl",children:i.jsx($r,{lyrics:Kr(Y),title:Y.title,artist:Y.artist,isDarkMode:r,maxHeight:"max-h-[440px]"})}),G==="artwork"&&i.jsxs("div",{className:"relative w-full aspect-square group",children:[i.jsx("div",{className:"absolute inset-0 bg-cyan-500/20 blur-[50px] rounded-full animate-pulse pointer-events-none"}),i.jsxs("div",{className:"relative z-10 w-full h-full bg-gradient-to-br from-neutral-800 to-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center",children:[i.jsx("img",{src:Y.thumbnail,alt:Y.title,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"}),i.jsx("div",{className:"absolute bottom-3 right-3 text-2xl font-black text-white/25 font-mono tracking-widest pointer-events-none drop-shadow-md",children:"D-LY"}),i.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:i.jsx("button",{onClick:()=>{(b==null?void 0:b.id)===Y.id?v(!N):Re(Y)},className:"w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-xl hover:scale-105 transition-transform","aria-label":"Toggle playback",children:N&&(b==null?void 0:b.id)===Y.id?i.jsx(Nn,{className:"w-6 h-6 fill-current"}):i.jsx(aa,{className:"w-6 h-6 fill-current translate-x-0.5"})})})]})]})]}),i.jsxs("div",{className:"text-center w-full z-10",children:[i.jsx("h2",{className:`${R==="sm"?"text-base font-extrabold":"text-xl font-black"} mb-1 tracking-tight truncate hover:text-cyan-400 transition-colors`,title:Y.title,children:Y.title}),i.jsxs("p",{className:`text-cyan-400 ${R==="sm"?"text-[10px]":"text-xs"} font-bold tracking-widest uppercase mb-2.5`,children:[N&&(b==null?void 0:b.id)===Y.id?"Now Playing":"Selected Track"," • #",Y.index.toString().padStart(2,"0")]}),i.jsxs("div",{className:`flex gap-1 justify-center items-end ${R==="sm"?"h-5 mb-3":"h-7 mb-4"}`,children:[i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${N&&(b==null?void 0:b.id)===Y.id?"h-[60%] animate-eq-1":"h-[25%]"}`}),i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${N&&(b==null?void 0:b.id)===Y.id?"h-[90%] animate-eq-2":"h-[40%]"}`}),i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${N&&(b==null?void 0:b.id)===Y.id?"h-[40%] animate-eq-3":"h-[20%]"}`}),i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${N&&(b==null?void 0:b.id)===Y.id?"h-[70%] animate-eq-4":"h-[35%]"}`}),i.jsx("div",{className:`w-1 bg-cyan-500 rounded-full ${N&&(b==null?void 0:b.id)===Y.id?"h-[30%] animate-eq-2":"h-[15%]"}`})]}),i.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-1.5 sm:gap-2",children:[i.jsxs("button",{onClick:()=>j(Y),className:`px-3 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black ${R==="sm"?"text-[11px]":"text-xs"} font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all active:scale-95`,title:"View Full Lyrics in Modal",children:[i.jsx(an,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Lyrics"})]}),i.jsxs("button",{onClick:()=>X(Y),className:`px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 ${R==="sm"?"text-[11px]":"text-xs"} font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all`,children:[i.jsx(Vt,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Share"})]}),i.jsxs("button",{onClick:()=>nt(Y),className:`px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 ${R==="sm"?"text-[11px]":"text-xs"} font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all`,children:[i.jsx(Fr,{className:"w-3.5 h-3.5 text-cyan-400"}),i.jsx("span",{children:"Story"})]})]})]})]})}):null})()]}),i.jsx(Zg,{isDarkMode:r})]}),i.jsx(Hg,{currentTrack:b,playlist:ra,allPlaylists:{youtube:Me.length>0?Me:St,suno:C},onSwitchPlaylist:Y=>{d(Y),Y==="suno"&&bt.length>0?_t(bt[0]):Y==="youtube"&&St.length>0&&Re(St[0])},currentPlaylistType:b!=null&&b.isSuno?"suno":"youtube",onTrackChange:Y=>{if(_(Y),v(!0),ae(0),S(Y.durationSeconds||0),Y.isSuno){const K=bt.find(pe=>pe.id===Y.id);K&&(be(K),Ue(!0))}else Ue(!1)},onOpenShare:Y=>X(Y),onOpenLyrics:Y=>j(Y),disableInternalPlayback:O,externalCurrentTime:te,externalDuration:h,onSeekTo:Tt,onVolumeChange:sa,externalVolume:q,externalIsMuted:oe,isDarkMode:r,isPlaying:N,setIsPlaying:Y=>{v(Y),b!=null&&b.isSuno&&Ue(Y)}}),i.jsx(Rg,{track:Z,isOpen:!!Z,onClose:()=>X(null),isDarkMode:r}),i.jsx(Dg,{track:at,isOpen:!!at,onClose:()=>nt(null),isPlaying:N,isCurrentTrack:(b==null?void 0:b.id)===(at==null?void 0:at.id),onPlay:Re,onOpenShare:Y=>X(Y),isDarkMode:r}),i.jsx(qg,{track:qe,isOpen:!!qe,onClose:()=>j(null),isDarkMode:r,isPlaying:N,isCurrentTrack:(b==null?void 0:b.id)===(qe==null?void 0:qe.id),onPlay:Re,onOpenShare:Y=>X(Y)})]})}typeof window<"u"&&(window.addEventListener("error",r=>{if(!r.message||r.message==="Script error."||r.filename&&(r.filename.includes("youtube.com")||r.filename.includes("suno.ai")))return r.preventDefault(),!0}),window.addEventListener("unhandledrejection",r=>{var x,I;if(r.reason){const d=((x=r.reason)==null?void 0:x.name)||"",O=String(((I=r.reason)==null?void 0:I.message)||r.reason||"");if(d==="AbortError"||d==="NotAllowedError"||O.includes("play()")||O.includes("interact")){r.preventDefault();return}}r.reason||r.preventDefault()}));Hy.createRoot(document.getElementById("root")).render(i.jsx(E.StrictMode,{children:i.jsx(Kg,{})}));
