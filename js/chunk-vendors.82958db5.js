"use strict";(self["webpackChunksample2"]=self["webpackChunksample2"]||[]).push([[504],{5792:function(){},2936:function(){},5524:function(){},4046:function(e,t,n){n.d(t,{Am:function(){return L},FA:function(){return D},Fy:function(){return w},I9:function(){return B},Im:function(){return P},Ku:function(){return z},T9:function(){return g},Tj:function(){return v},Uj:function(){return l},XA:function(){return y},ZQ:function(){return S},bD:function(){return N},cY:function(){return b},eX:function(){return A},g:function(){return R},hp:function(){return W},jZ:function(){return _},lT:function(){return x},lV:function(){return k},nr:function(){return I},sr:function(){return C},tD:function(){return j},u:function(){return u},yU:function(){return m},zW:function(){return T}});n(4114),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],a=e[n++],s=e[n++],l=((7&o)<<18|(63&i)<<12|(63&a)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,a=i?e[o+1]:0,s=o+2<e.length,l=s?e[o+2]:0,u=t>>2,c=(3&t)<<4|a>>4;let d=(15&a)<<2|l>>6,h=63&l;s||(h=64,i||(d=64)),r.push(n[u],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,s=i?n[e.charAt(o)]:0;++o;const l=o<e.length,u=l?n[e.charAt(o)]:64;++o;const c=o<e.length,d=c?n[e.charAt(o)]:64;if(++o,null==t||null==s||null==u||null==d)throw new a;const h=t<<2|s>>4;if(r.push(h),64!==u){const e=s<<4&240|u>>2;if(r.push(e),64!==d){const e=u<<6&192|d;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(e){const t=r(e);return i.encodeByteArray(t,!0)},l=function(e){return s(e).replace(/\./g,"")},u=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>c().__FIREBASE_DEFAULTS__,h=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return d()||h()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},v=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=v(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},g=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",o=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),s="";return[l(JSON.stringify(n)),l(JSON.stringify(a)),s].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function E(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function C(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function k(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function x(){const e=S();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function I(){return!E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){try{return"object"===typeof indexedDB}catch(e){return!1}}function A(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F="FirebaseError";class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=F,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?O(o,n):"Error",a=`${this.serviceName}: ${i} (${r}).`,s=new R(r,a,n);return s}}function O(e,t){return e.replace(V,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const V=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(M(n)&&M(i)){if(!N(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function M(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function B(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function W(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){const n=new $(e,t);return n.subscribe.bind(n)}class ${constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=U(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=K),void 0===r.error&&(r.error=K),void 0===r.complete&&(r.complete=K);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function U(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){return e&&e._delegate?e._delegate:e}},144:function(e,t,n){n.d(t,{C4:function(){return b},EW:function(){return Fe},Gc:function(){return ye},IG:function(){return xe},IJ:function(){return Pe},KR:function(){return Ve},Kh:function(){return ge},Pr:function(){return We},QW:function(){return je},R1:function(){return Le},X2:function(){return d},bl:function(){return w},fE:function(){return Ee},g8:function(){return Se},hZ:function(){return R},i9:function(){return Oe},jr:function(){return c},ju:function(){return Ce},lW:function(){return Ke},o5:function(){return u},tB:function(){return be},u4:function(){return F},uY:function(){return s},ux:function(){return ke},yC:function(){return a}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4232);let o,i;class a{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=o,!e&&o&&(this.index=(o.scopes||(o.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=o;try{return o=this,e()}finally{o=t}}else 0}on(){o=this}off(){o=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function s(e){return new a(e)}function l(e,t=o){t&&t.active&&t.effects.push(e)}function u(){return o}function c(e){o&&o.cleanups.push(e)}class d{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,l(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,b();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(h(t.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),w()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=m,t=i;try{return m=!0,i=this,this._runnings++,f(this),this.fn()}finally{p(this),this._runnings--,i=t,m=e}}stop(){this.active&&(f(this),p(this),this.onStop&&this.onStop(),this.active=!1)}}function h(e){return e.value}function f(e){e._trackId++,e._depsLength=0}function p(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)v(e.deps[t],e);e.deps.length=e._depsLength}}function v(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let m=!0,g=0;const y=[];function b(){y.push(m),m=!1}function w(){const e=y.pop();m=void 0===e||e}function S(){g++}function _(){g--;while(!g&&C.length)C.shift()()}function E(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&v(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const C=[];function k(e,t,n){S();for(const r of e.keys()){let n;r._dirtyLevel<t&&(null!=n?n:n=e.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=t),r._shouldSchedule&&(null!=n?n:n=e.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&C.push(r.scheduler)))}_()}const x=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},I=new WeakMap,T=Symbol(""),A=Symbol("");function F(e,t,n){if(m&&i){let t=I.get(e);t||I.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=x((()=>t.delete(n)))),E(i,r,void 0)}}function R(e,t,n,o,i,a){const s=I.get(e);if(!s)return;let l=[];if("clear"===t)l=[...s.values()];else if("length"===n&&(0,r.cy)(e)){const e=Number(o);s.forEach(((t,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=e)&&l.push(t)}))}else switch(void 0!==n&&l.push(s.get(n)),t){case"add":(0,r.cy)(e)?(0,r.yI)(n)&&l.push(s.get("length")):(l.push(s.get(T)),(0,r.CE)(e)&&l.push(s.get(A)));break;case"delete":(0,r.cy)(e)||(l.push(s.get(T)),(0,r.CE)(e)&&l.push(s.get(A)));break;case"set":(0,r.CE)(e)&&l.push(s.get(T));break}S();for(const r of l)r&&k(r,4,void 0);_()}function D(e,t){const n=I.get(e);return n&&n.get(t)}const O=(0,r.pD)("__proto__,__v_isRef,__isVue"),V=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm)),P=N();function N(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=ke(this);for(let t=0,o=this.length;t<o;t++)F(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(ke)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){b(),S();const n=ke(this)[t].apply(this,e);return _(),w(),n}})),e}function M(e){(0,r.Bm)(e)||(e=String(e));const t=ke(this);return F(t,"has",e),t.hasOwnProperty(e)}class L{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const o=this._isReadonly,i=this._isShallow;if("__v_isReactive"===t)return!o;if("__v_isReadonly"===t)return o;if("__v_isShallow"===t)return i;if("__v_raw"===t)return n===(o?i?pe:fe:i?he:de).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const a=(0,r.cy)(e);if(!o){if(a&&(0,r.$3)(P,t))return Reflect.get(P,t,n);if("hasOwnProperty"===t)return M}const s=Reflect.get(e,t,n);return((0,r.Bm)(t)?V.has(t):O(t))?s:(o||F(e,"get",t),i?s:Oe(s)?a&&(0,r.yI)(t)?s:s.value:(0,r.Gv)(s)?o?be(s):ge(s):s)}}class B extends L{constructor(e=!1){super(!1,e)}set(e,t,n,o){let i=e[t];if(!this._isShallow){const t=_e(i);if(Ee(n)||_e(n)||(i=ke(i),n=ke(n)),!(0,r.cy)(e)&&Oe(i)&&!Oe(n))return!t&&(i.value=n,!0)}const a=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),s=Reflect.set(e,t,n,o);return e===ke(o)&&(a?(0,r.$H)(n,i)&&R(e,"set",t,n,i):R(e,"add",t,n)),s}deleteProperty(e,t){const n=(0,r.$3)(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&R(e,"delete",t,void 0,o),i}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&V.has(t)||F(e,"has",t),n}ownKeys(e){return F(e,"iterate",(0,r.cy)(e)?"length":T),Reflect.ownKeys(e)}}class W extends L{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const j=new B,$=new W,U=new B(!0),K=e=>e,z=e=>Reflect.getPrototypeOf(e);function q(e,t,n=!1,o=!1){e=e["__v_raw"];const i=ke(e),a=ke(t);n||((0,r.$H)(t,a)&&F(i,"get",t),F(i,"get",a));const{has:s}=z(i),l=o?K:n?Te:Ie;return s.call(i,t)?l(e.get(t)):s.call(i,a)?l(e.get(a)):void(e!==i&&e.get(t))}function H(e,t=!1){const n=this["__v_raw"],o=ke(n),i=ke(e);return t||((0,r.$H)(e,i)&&F(o,"has",e),F(o,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function G(e,t=!1){return e=e["__v_raw"],!t&&F(ke(e),"iterate",T),Reflect.get(e,"size",e)}function X(e){e=ke(e);const t=ke(this),n=z(t),r=n.has.call(t,e);return r||(t.add(e),R(t,"add",e,e)),this}function Y(e,t){t=ke(t);const n=ke(this),{has:o,get:i}=z(n);let a=o.call(n,e);a||(e=ke(e),a=o.call(n,e));const s=i.call(n,e);return n.set(e,t),a?(0,r.$H)(t,s)&&R(n,"set",e,t,s):R(n,"add",e,t),this}function Q(e){const t=ke(this),{has:n,get:r}=z(t);let o=n.call(t,e);o||(e=ke(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,a=t.delete(e);return o&&R(t,"delete",e,void 0,i),a}function J(){const e=ke(this),t=0!==e.size,n=void 0,r=e.clear();return t&&R(e,"clear",void 0,void 0,n),r}function Z(e,t){return function(n,r){const o=this,i=o["__v_raw"],a=ke(i),s=t?K:e?Te:Ie;return!e&&F(a,"iterate",T),i.forEach(((e,t)=>n.call(r,s(e),s(t),o)))}}function ee(e,t,n){return function(...o){const i=this["__v_raw"],a=ke(i),s=(0,r.CE)(a),l="entries"===e||e===Symbol.iterator&&s,u="keys"===e&&s,c=i[e](...o),d=n?K:t?Te:Ie;return!t&&F(a,"iterate",u?A:T),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:l?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function te(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function ne(){const e={get(e){return q(this,e)},get size(){return G(this)},has:H,add:X,set:Y,delete:Q,clear:J,forEach:Z(!1,!1)},t={get(e){return q(this,e,!1,!0)},get size(){return G(this)},has:H,add:X,set:Y,delete:Q,clear:J,forEach:Z(!1,!0)},n={get(e){return q(this,e,!0)},get size(){return G(this,!0)},has(e){return H.call(this,e,!0)},add:te("add"),set:te("set"),delete:te("delete"),clear:te("clear"),forEach:Z(!0,!1)},r={get(e){return q(this,e,!0,!0)},get size(){return G(this,!0)},has(e){return H.call(this,e,!0)},add:te("add"),set:te("set"),delete:te("delete"),clear:te("clear"),forEach:Z(!0,!0)},o=["keys","values","entries",Symbol.iterator];return o.forEach((o=>{e[o]=ee(o,!1,!1),n[o]=ee(o,!0,!1),t[o]=ee(o,!1,!0),r[o]=ee(o,!0,!0)})),[e,n,t,r]}const[re,oe,ie,ae]=ne();function se(e,t){const n=t?e?ae:ie:e?oe:re;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get((0,r.$3)(n,o)&&o in t?n:t,o,i)}const le={get:se(!1,!1)},ue={get:se(!1,!0)},ce={get:se(!0,!1)};const de=new WeakMap,he=new WeakMap,fe=new WeakMap,pe=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function me(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve((0,r.Zf)(e))}function ge(e){return _e(e)?e:we(e,!1,j,le,de)}function ye(e){return we(e,!1,U,ue,he)}function be(e){return we(e,!0,$,ce,fe)}function we(e,t,n,o,i){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const a=i.get(e);if(a)return a;const s=me(e);if(0===s)return e;const l=new Proxy(e,2===s?o:n);return i.set(e,l),l}function Se(e){return _e(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function _e(e){return!(!e||!e["__v_isReadonly"])}function Ee(e){return!(!e||!e["__v_isShallow"])}function Ce(e){return!!e&&!!e["__v_raw"]}function ke(e){const t=e&&e["__v_raw"];return t?ke(t):e}function xe(e){return Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Ie=e=>(0,r.Gv)(e)?ge(e):e,Te=e=>(0,r.Gv)(e)?be(e):e;class Ae{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new d((()=>e(this._value)),(()=>De(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=ke(this);return e._cacheable&&!e.effect.dirty||!(0,r.$H)(e._value,e._value=e.effect.run())||De(e,4),Re(e),e.effect._dirtyLevel>=2&&De(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Fe(e,t,n=!1){let o,i;const a=(0,r.Tn)(e);a?(o=e,i=r.tE):(o=e.get,i=e.set);const s=new Ae(o,i,a||!i,n);return s}function Re(e){var t;m&&i&&(e=ke(e),E(i,null!=(t=e.dep)?t:e.dep=x((()=>e.dep=void 0),e instanceof Ae?e:void 0),void 0))}function De(e,t=4,n){e=ke(e);const r=e.dep;r&&k(r,t,void 0)}function Oe(e){return!(!e||!0!==e.__v_isRef)}function Ve(e){return Ne(e,!1)}function Pe(e){return Ne(e,!0)}function Ne(e,t){return Oe(e)?e:new Me(e,t)}class Me{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ke(e),this._value=t?e:Ie(e)}get value(){return Re(this),this._value}set value(e){const t=this.__v_isShallow||Ee(e)||_e(e);e=t?e:ke(e),(0,r.$H)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ie(e),De(this,4,e))}}function Le(e){return Oe(e)?e.value:e}const Be={get:(e,t,n)=>Le(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Oe(o)&&!Oe(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function We(e){return Se(e)?e:new Proxy(e,Be)}function je(e){const t=(0,r.cy)(e)?new Array(e.length):{};for(const n in e)t[n]=ze(e,n);return t}class $e{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return D(ke(this._object),this._key)}}class Ue{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Ke(e,t,n){return Oe(e)?e:(0,r.Tn)(e)?new Ue(e):(0,r.Gv)(e)&&arguments.length>1?ze(e,t,n):Ve(e)}function ze(e,t,n){const r=e[t];return Oe(r)?r:new $e(e,t,n)}},6768:function(e,t,n){n.d(t,{$u:function(){return Je},$y:function(){return X},CE:function(){return Fn},Df:function(){return Ne},E3:function(){return Wn},EW:function(){return mr},EY:function(){return wn},FK:function(){return bn},Gt:function(){return Ft},Gy:function(){return xe},Ic:function(){return Qe},Im:function(){return gn},K9:function(){return en},KC:function(){return Xe},Lk:function(){return Nn},MZ:function(){return Pe},Mw:function(){return Sn},OW:function(){return De},Q3:function(){return $n},QP:function(){return Te},Qi:function(){return P},R8:function(){return br},WQ:function(){return Rt},Wv:function(){return Rn},Y4:function(){return $e},bF:function(){return Mn},bo:function(){return _e},dY:function(){return y},eW:function(){return jn},g2:function(){return H},gN:function(){return Y},h:function(){return gr},hi:function(){return et},jt:function(){return N},k6:function(){return M},n:function(){return je},nI:function(){return Jn},nT:function(){return ve},pI:function(){return it},pM:function(){return Me},pR:function(){return Fe},qL:function(){return a},sV:function(){return Ye},tY:function(){return ne},uX:function(){return kn},v6:function(){return qn},vv:function(){return Dn},wB:function(){return ge},xo:function(){return Ze}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(144),o=n(4232);function i(e,t,n,r){try{return r?e(...r):e()}catch(o){s(o,t,n)}}function a(e,t,n,r){if((0,o.Tn)(e)){const a=i(e,t,n,r);return a&&(0,o.yL)(a)&&a.catch((e=>{s(e,t,n)})),a}if((0,o.cy)(e)){const o=[];for(let i=0;i<e.length;i++)o.push(a(e[i],t,n,r));return o}}function s(e,t,n,o=!0){const a=t?t.vnode:null;if(t){let o=t.parent;const a=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;while(o){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,a,s))return;o=o.parent}const l=t.appContext.config.errorHandler;if(l)return(0,r.C4)(),i(l,null,10,[e,a,s]),void(0,r.bl)()}l(e,n,a,o)}function l(e,t,n,r=!0){console.error(e)}let u=!1,c=!1;const d=[];let h=0;const f=[];let p=null,v=0;const m=Promise.resolve();let g=null;function y(e){const t=g||m;return e?t.then(this?e.bind(this):e):t}function b(e){let t=h+1,n=d.length;while(t<n){const r=t+n>>>1,o=d[r],i=x(o);i<e||i===e&&o.pre?t=r+1:n=r}return t}function w(e){d.length&&d.includes(e,u&&e.allowRecurse?h+1:h)||(null==e.id?d.push(e):d.splice(b(e.id),0,e),S())}function S(){u||c||(c=!0,g=m.then(T))}function _(e){const t=d.indexOf(e);t>h&&d.splice(t,1)}function E(e){(0,o.cy)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?v+1:v)||f.push(e),S()}function C(e,t,n=(u?h+1:0)){for(0;n<d.length;n++){const t=d[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,d.splice(n,1),n--,t()}}}function k(e){if(f.length){const e=[...new Set(f)].sort(((e,t)=>x(e)-x(t)));if(f.length=0,p)return void p.push(...e);for(p=e,v=0;v<p.length;v++)p[v]();p=null,v=0}}const x=e=>null==e.id?1/0:e.id,I=(e,t)=>{const n=x(e)-x(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function T(e){c=!1,u=!0,d.sort(I);o.tE;try{for(h=0;h<d.length;h++){const e=d[h];e&&!1!==e.active&&i(e,null,14)}}finally{h=0,d.length=0,k(e),u=!1,g=null,(d.length||f.length)&&T(e)}}function A(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||o.MZ;let i=n;const s=t.startsWith("update:"),l=s&&t.slice(7);if(l&&l in r){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:a}=r[e]||o.MZ;a&&(i=n.map((e=>(0,o.Kg)(e)?e.trim():e))),t&&(i=n.map(o.bB))}let u;let c=r[u=(0,o.rU)(t)]||r[u=(0,o.rU)((0,o.PT)(t))];!c&&s&&(c=r[u=(0,o.rU)((0,o.Tg)(t))]),c&&a(c,e,6,i);const d=r[u+"Once"];if(d){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,a(d,e,6,i)}}function F(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const a=e.emits;let s={},l=!1;if(!(0,o.Tn)(e)){const r=e=>{const n=F(e,t,!0);n&&(l=!0,(0,o.X$)(s,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return a||l?((0,o.cy)(a)?a.forEach((e=>s[e]=null)):(0,o.X$)(s,a),(0,o.Gv)(e)&&r.set(e,s),s):((0,o.Gv)(e)&&r.set(e,null),null)}function R(e,t){return!(!e||!(0,o.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,o.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,o.$3)(e,(0,o.Tg)(t))||(0,o.$3)(e,t))}let D=null,O=null;function V(e){const t=D;return D=e,O=e&&e.type.__scopeId||null,t}function P(e){O=e}function N(){O=null}function M(e,t=D,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Tn(-1);const o=V(t);let i;try{i=e(...n)}finally{V(o),r._d&&Tn(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function L(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:l,attrs:u,emit:c,render:d,renderCache:h,props:f,data:p,setupState:v,ctx:m,inheritAttrs:g}=e,y=V(e);let b,w;try{if(4&n.shapeFlag){const e=i||r,t=e;b=Un(d.call(t,e,h,f,v,p,m)),w=u}else{const e=t;0,b=Un(e.length>1?e(f,{attrs:u,slots:l,emit:c}):e(f,null)),w=t.props?u:W(u)}}catch(_){En.length=0,s(_,e,1),b=Mn(Sn)}let S=b;if(w&&!1!==g){const e=Object.keys(w),{shapeFlag:t}=S;e.length&&7&t&&(a&&e.some(o.CP)&&(w=j(w,a)),S=Wn(S,w,!1,!0))}return n.dirs&&(S=Wn(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),b=S,V(y),b}function B(e,t=!0){let n;for(let r=0;r<e.length;r++){const t=e[r];if(!Dn(t))return;if(t.type!==Sn||"v-if"===t.children){if(n)return;n=t}}return n}const W=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,o.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},j=(e,t)=>{const n={};for(const r in e)(0,o.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function $(e,t,n){const{props:r,children:o,component:i}=e,{props:a,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!o&&!s||s&&s.$stable)||r!==a&&(r?!a||U(r,a,u):!!a);if(1024&l)return!0;if(16&l)return r?U(r,a,u):!!a;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(a[n]!==r[n]&&!R(u,n))return!0}}return!1}function U(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!R(n,i))return!0}return!1}function K({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const z="components",q="directives";function H(e,t){return Q(z,e,!0,t)||e}const G=Symbol.for("v-ndc");function X(e){return(0,o.Kg)(e)?Q(z,e,!1)||e:e||G}function Y(e){return Q(q,e)}function Q(e,t,n=!0,r=!1){const i=D||Qn;if(i){const n=i.type;if(e===z){const e=pr(n,!1);if(e&&(e===t||e===(0,o.PT)(t)||e===(0,o.ZH)((0,o.PT)(t))))return n}const a=J(i[e]||n[e],t)||J(i.appContext[e],t);return!a&&r?n:a}}function J(e,t){return e&&(e[t]||e[(0,o.PT)(t)]||e[(0,o.ZH)((0,o.PT)(t))])}const Z=e=>e.__isSuspense;let ee=0;const te={name:"Suspense",__isSuspense:!0,process(e,t,n,r,o,i,a,s,l,u){if(null==e)oe(t,n,r,o,i,a,s,l,u);else{if(i&&i.deps>0&&!e.suspense.isInFallback)return t.suspense=e.suspense,t.suspense.vnode=t,void(t.el=e.el);ie(e,t,n,r,o,a,s,l,u)}},hydrate:se,create:ae,normalize:le},ne=te;function re(e,t){const n=e.props&&e.props[t];(0,o.Tn)(n)&&n()}function oe(e,t,n,r,o,i,a,s,l){const{p:u,o:{createElement:c}}=l,d=c("div"),h=e.suspense=ae(e,o,r,t,d,n,i,a,s,l);u(null,h.pendingBranch=e.ssContent,d,null,r,h,i,a),h.deps>0?(re(e,"onPending"),re(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,i,a),de(h,e.ssFallback)):h.resolve(!1,!0)}function ie(e,t,n,r,o,i,a,s,{p:l,um:u,o:{createElement:c}}){const d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;const h=t.ssContent,f=t.ssFallback,{activeBranch:p,pendingBranch:v,isInFallback:m,isHydrating:g}=d;if(v)d.pendingBranch=h,On(h,v)?(l(v,h,d.hiddenContainer,null,o,d,i,a,s),d.deps<=0?d.resolve():m&&(g||(l(p,f,n,r,o,null,i,a,s),de(d,f)))):(d.pendingId=ee++,g?(d.isHydrating=!1,d.activeBranch=v):u(v,o,d),d.deps=0,d.effects.length=0,d.hiddenContainer=c("div"),m?(l(null,h,d.hiddenContainer,null,o,d,i,a,s),d.deps<=0?d.resolve():(l(p,f,n,r,o,null,i,a,s),de(d,f))):p&&On(h,p)?(l(p,h,n,r,o,d,i,a,s),d.resolve(!0)):(l(null,h,d.hiddenContainer,null,o,d,i,a,s),d.deps<=0&&d.resolve()));else if(p&&On(h,p))l(p,h,n,r,o,d,i,a,s),de(d,h);else if(re(t,"onPending"),d.pendingBranch=h,512&h.shapeFlag?d.pendingId=h.component.suspenseId:d.pendingId=ee++,l(null,h,d.hiddenContainer,null,o,d,i,a,s),d.deps<=0)d.resolve();else{const{timeout:e,pendingId:t}=d;e>0?setTimeout((()=>{d.pendingId===t&&d.fallback(f)}),e):0===e&&d.fallback(f)}}function ae(e,t,n,r,i,a,l,u,c,d,h=!1){const{p:f,m:p,um:v,n:m,o:{parentNode:g,remove:y}}=d;let b;const w=he(e);w&&t&&t.pendingBranch&&(b=t.pendingId,t.deps++);const S=e.props?(0,o.Ro)(e.props.timeout):void 0;const _=a,C={vnode:e,parent:t,parentComponent:n,namespace:l,container:r,hiddenContainer:i,deps:0,pendingId:ee++,timeout:"number"===typeof S?S:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(e=!1,n=!1){const{vnode:r,activeBranch:o,pendingBranch:i,pendingId:s,effects:l,parentComponent:u,container:c}=C;let d=!1;C.isHydrating?C.isHydrating=!1:e||(d=o&&i.transition&&"out-in"===i.transition.mode,d&&(o.transition.afterLeave=()=>{s===C.pendingId&&(p(i,c,a===_?m(o):a,0),E(l))}),o&&(g(o.el)!==C.hiddenContainer&&(a=m(o)),v(o,u,C,!0)),d||p(i,c,a,0)),de(C,i),C.pendingBranch=null,C.isInFallback=!1;let h=C.parent,f=!1;while(h){if(h.pendingBranch){h.effects.push(...l),f=!0;break}h=h.parent}f||d||E(l),C.effects=[],w&&t&&t.pendingBranch&&b===t.pendingId&&(t.deps--,0!==t.deps||n||t.resolve()),re(r,"onResolve")},fallback(e){if(!C.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:r,container:o,namespace:i}=C;re(t,"onFallback");const a=m(n),s=()=>{C.isInFallback&&(f(null,e,o,a,r,null,i,u,c),de(C,e))},l=e.transition&&"out-in"===e.transition.mode;l&&(n.transition.afterLeave=s),C.isInFallback=!0,v(n,r,null,!0),l||s()},move(e,t,n){C.activeBranch&&p(C.activeBranch,e,t,n),C.container=e},next(){return C.activeBranch&&m(C.activeBranch)},registerDep(e,t){const n=!!C.pendingBranch;n&&C.deps++;const r=e.vnode.el;e.asyncDep.catch((t=>{s(t,e,0)})).then((o=>{if(e.isUnmounted||C.isUnmounted||C.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:i}=e;ur(e,o,!1),r&&(i.el=r);const a=!r&&e.subTree.el;t(e,i,g(r||e.subTree.el),r?null:m(e.subTree),C,l,c),a&&y(a),K(e,i.el),n&&0===--C.deps&&C.resolve()}))},unmount(e,t){C.isUnmounted=!0,C.activeBranch&&v(C.activeBranch,n,e,t),C.pendingBranch&&v(C.pendingBranch,n,e,t)}};return C}function se(e,t,n,r,o,i,a,s,l){const u=t.suspense=ae(t,r,n,e.parentNode,document.createElement("div"),null,o,i,a,s,!0),c=l(e,u.pendingBranch=t.ssContent,n,u,i,a);return 0===u.deps&&u.resolve(!1,!0),c}function le(e){const{shapeFlag:t,children:n}=e,r=32&t;e.ssContent=ue(r?n.default:n),e.ssFallback=r?ue(n.fallback):Mn(Sn)}function ue(e){let t;if((0,o.Tn)(e)){const n=In&&e._c;n&&(e._d=!1,kn()),e=e(),n&&(e._d=!0,t=Cn,xn())}if((0,o.cy)(e)){const t=B(e);0,e=t}return e=Un(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function ce(e,t){t&&t.pendingBranch?(0,o.cy)(e)?t.effects.push(...e):t.effects.push(e):E(e)}function de(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let o=t.el;while(!o&&t.component)t=t.component.subTree,o=t.el;n.el=o,r&&r.subTree===n&&(r.vnode.el=o,K(r,o))}function he(e){const t=e.props&&e.props.suspensible;return null!=t&&!1!==t}const fe=Symbol.for("v-scx"),pe=()=>{{const e=Rt(fe);return e}};function ve(e,t){return ye(e,null,t)}const me={};function ge(e,t,n){return ye(e,t,n)}function ye(e,t,{immediate:n,deep:s,flush:l,once:u,onTrack:c,onTrigger:d}=o.MZ){if(t&&u){const e=t;t=(...t)=>{e(...t),x()}}const h=Qn,f=e=>!0===s?e:Se(e,!1===s?1:void 0);let p,v,m=!1,g=!1;if((0,r.i9)(e)?(p=()=>e.value,m=(0,r.fE)(e)):(0,r.g8)(e)?(p=()=>f(e),m=!0):(0,o.cy)(e)?(g=!0,m=e.some((e=>(0,r.g8)(e)||(0,r.fE)(e))),p=()=>e.map((e=>(0,r.i9)(e)?e.value:(0,r.g8)(e)?f(e):(0,o.Tn)(e)?i(e,h,2):void 0))):p=(0,o.Tn)(e)?t?()=>i(e,h,2):()=>(v&&v(),a(e,h,3,[b])):o.tE,t&&s){const e=p;p=()=>Se(e())}let y,b=e=>{v=C.onStop=()=>{i(e,h,4),v=C.onStop=void 0}};if(ar){if(b=o.tE,t?n&&a(t,h,3,[p(),g?[]:void 0,b]):p(),"sync"!==l)return o.tE;{const e=pe();y=e.__watcherHandles||(e.__watcherHandles=[])}}let S=g?new Array(e.length).fill(me):me;const _=()=>{if(C.active&&C.dirty)if(t){const e=C.run();(s||m||(g?e.some(((e,t)=>(0,o.$H)(e,S[t]))):(0,o.$H)(e,S)))&&(v&&v(),a(t,h,3,[e,S===me?void 0:g&&S[0]===me?[]:S,b]),S=e)}else C.run()};let E;_.allowRecurse=!!t,"sync"===l?E=_:"post"===l?E=()=>Zt(_,h&&h.suspense):(_.pre=!0,h&&(_.id=h.uid),E=()=>w(_));const C=new r.X2(p,o.tE,E),k=(0,r.o5)(),x=()=>{C.stop(),k&&(0,o.TF)(k.effects,C)};return t?n?_():S=C.run():"post"===l?Zt(C.run.bind(C),h&&h.suspense):C.run(),y&&y.push(x),x}function be(e,t,n){const r=this.proxy,i=(0,o.Kg)(e)?e.includes(".")?we(r,e):()=>r[e]:e.bind(r,r);let a;(0,o.Tn)(t)?a=t:(a=t.handler,n=t);const s=tr(this),l=ye(i,a.bind(r),n);return s(),l}function we(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Se(e,t=1/0,n){if(t<=0||!(0,o.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,(0,r.i9)(e))Se(e.value,t,n);else if((0,o.cy)(e))for(let r=0;r<e.length;r++)Se(e[r],t,n);else if((0,o.vM)(e)||(0,o.CE)(e))e.forEach((e=>{Se(e,t,n)}));else if((0,o.Qd)(e))for(const r in e)Se(e[r],t,n);return e}function _e(e,t){if(null===D)return e;const n=fr(D)||D.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[e,a,s,l=o.MZ]=t[i];e&&((0,o.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&Se(a),r.push({dir:e,instance:n,value:a,oldValue:void 0,arg:s,modifiers:l}))}return e}function Ee(e,t,n,o){const i=e.dirs,s=t&&t.dirs;for(let l=0;l<i.length;l++){const u=i[l];s&&(u.oldValue=s[l].value);let c=u.dir[o];c&&((0,r.C4)(),a(c,n,8,[e.el,u,e,t]),(0,r.bl)())}}const Ce=Symbol("_leaveCb"),ke=Symbol("_enterCb");function xe(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ye((()=>{e.isMounted=!0})),Ze((()=>{e.isUnmounting=!0})),e}const Ie=[Function,Array],Te={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ie,onEnter:Ie,onAfterEnter:Ie,onEnterCancelled:Ie,onBeforeLeave:Ie,onLeave:Ie,onAfterLeave:Ie,onLeaveCancelled:Ie,onBeforeAppear:Ie,onAppear:Ie,onAfterAppear:Ie,onAppearCancelled:Ie},Ae={name:"BaseTransition",props:Te,setup(e,{slots:t}){const n=Jn(),o=xe();return()=>{const i=t.default&&Ne(t.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){let e=!1;for(const t of i)if(t.type!==Sn){0,a=t,e=!0;break}}const s=(0,r.ux)(e),{mode:l}=s;if(o.isLeaving)return Oe(a);const u=Ve(a);if(!u)return Oe(a);const c=De(u,s,o,n);Pe(u,c);const d=n.subTree,h=d&&Ve(d);if(h&&h.type!==Sn&&!On(u,h)){const e=De(h,s,o,n);if(Pe(h,e),"out-in"===l&&u.type!==Sn)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},Oe(a);"in-out"===l&&u.type!==Sn&&(e.delayLeave=(e,t,n)=>{const r=Re(o,h);r[String(h.key)]=h,e[Ce]=()=>{t(),e[Ce]=void 0,delete c.delayedLeave},c.delayedLeave=n})}return a}}},Fe=Ae;function Re(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function De(e,t,n,r){const{appear:i,mode:s,persisted:l=!1,onBeforeEnter:u,onEnter:c,onAfterEnter:d,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:v,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=t,S=String(e.key),_=Re(n,e),E=(e,t)=>{e&&a(e,r,9,t)},C=(e,t)=>{const n=t[1];E(e,t),(0,o.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},k={mode:s,persisted:l,beforeEnter(t){let r=u;if(!n.isMounted){if(!i)return;r=g||u}t[Ce]&&t[Ce](!0);const o=_[S];o&&On(e,o)&&o.el[Ce]&&o.el[Ce](),E(r,[t])},enter(e){let t=c,r=d,o=h;if(!n.isMounted){if(!i)return;t=y||c,r=b||d,o=w||h}let a=!1;const s=e[ke]=t=>{a||(a=!0,E(t?o:r,[e]),k.delayedLeave&&k.delayedLeave(),e[ke]=void 0)};t?C(t,[e,s]):s()},leave(t,r){const o=String(e.key);if(t[ke]&&t[ke](!0),n.isUnmounting)return r();E(f,[t]);let i=!1;const a=t[Ce]=n=>{i||(i=!0,r(),E(n?m:v,[t]),t[Ce]=void 0,_[o]===e&&delete _[o])};_[o]=e,p?C(p,[t,a]):a()},clone(e){return De(e,t,n,r)}};return k}function Oe(e){if(Be(e))return e=Wn(e),e.children=null,e}function Ve(e){if(!Be(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&(0,o.Tn)(n.default))return n.default()}}function Pe(e,t){6&e.shapeFlag&&e.component?Pe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ne(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let a=e[i];const s=null==n?a.key:String(n)+String(null!=a.key?a.key:i);a.type===bn?(128&a.patchFlag&&o++,r=r.concat(Ne(a.children,t,s))):(t||a.type!==Sn)&&r.push(null!=s?Wn(a,{key:s}):a)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function Me(e,t){return(0,o.Tn)(e)?(()=>(0,o.X$)({name:e.name},t,{setup:e}))():e}const Le=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Be=e=>e.type.__isKeepAlive;RegExp,RegExp;function We(e,t){return(0,o.cy)(e)?e.some((e=>We(e,t))):(0,o.Kg)(e)?e.split(",").includes(t):!!(0,o.gd)(e)&&e.test(t)}function je(e,t){Ue(e,"a",t)}function $e(e,t){Ue(e,"da",t)}function Ue(e,t,n=Qn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(He(t,r,n),n){let e=n.parent;while(e&&e.parent)Be(e.parent.vnode)&&Ke(r,t,n,e),e=e.parent}}function Ke(e,t,n,r){const i=He(t,e,r,!0);et((()=>{(0,o.TF)(r[t],i)}),n)}function ze(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function qe(e){return 128&e.shapeFlag?e.ssContent:e}function He(e,t,n=Qn,o=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;(0,r.C4)();const i=tr(n),s=a(t,n,e,o);return i(),(0,r.bl)(),s});return o?i.unshift(s):i.push(s),s}}const Ge=e=>(t,n=Qn)=>(!ar||"sp"===e)&&He(e,((...e)=>t(...e)),n),Xe=Ge("bm"),Ye=Ge("m"),Qe=Ge("bu"),Je=Ge("u"),Ze=Ge("bum"),et=Ge("um"),tt=Ge("sp"),nt=Ge("rtg"),rt=Ge("rtc");function ot(e,t=Qn){He("ec",e,t)}function it(e,t,n,r){let i;const a=n&&n[r];if((0,o.cy)(e)||(0,o.Kg)(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,a&&a[n])}else if("number"===typeof e){0,i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if((0,o.Gv)(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,a&&a[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}const at=e=>e?rr(e)?fr(e)||e.proxy:at(e.parent):null,st=(0,o.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>at(e.parent),$root:e=>at(e.root),$emit:e=>e.emit,$options:e=>mt(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,w(e.update)}),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>be.bind(e)}),lt=(e,t)=>e!==o.MZ&&!e.__isScriptSetup&&(0,o.$3)(e,t),ut={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:i,data:a,props:s,accessCache:l,type:u,appContext:c}=e;let d;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return i[t];case 2:return a[t];case 4:return n[t];case 3:return s[t]}else{if(lt(i,t))return l[t]=1,i[t];if(a!==o.MZ&&(0,o.$3)(a,t))return l[t]=2,a[t];if((d=e.propsOptions[0])&&(0,o.$3)(d,t))return l[t]=3,s[t];if(n!==o.MZ&&(0,o.$3)(n,t))return l[t]=4,n[t];dt&&(l[t]=0)}}const h=st[t];let f,p;return h?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),h(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==o.MZ&&(0,o.$3)(n,t)?(l[t]=4,n[t]):(p=c.config.globalProperties,(0,o.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return lt(i,t)?(i[t]=n,!0):r!==o.MZ&&(0,o.$3)(r,t)?(r[t]=n,!0):!(0,o.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(a[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},s){let l;return!!n[s]||e!==o.MZ&&(0,o.$3)(e,s)||lt(t,s)||(l=a[0])&&(0,o.$3)(l,s)||(0,o.$3)(r,s)||(0,o.$3)(st,s)||(0,o.$3)(i.config.globalProperties,s)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,o.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ct(e){return(0,o.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let dt=!0;function ht(e){const t=mt(e),n=e.proxy,i=e.ctx;dt=!1,t.beforeCreate&&pt(t.beforeCreate,e,"bc");const{data:a,computed:s,methods:l,watch:u,provide:c,inject:d,created:h,beforeMount:f,mounted:p,beforeUpdate:v,updated:m,activated:g,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:S,unmounted:_,render:E,renderTracked:C,renderTriggered:k,errorCaptured:x,serverPrefetch:I,expose:T,inheritAttrs:A,components:F,directives:R,filters:D}=t,O=null;if(d&&ft(d,i,O),l)for(const r in l){const e=l[r];(0,o.Tn)(e)&&(i[r]=e.bind(n))}if(a){0;const t=a.call(n,n);0,(0,o.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(dt=!0,s)for(const r in s){const e=s[r],t=(0,o.Tn)(e)?e.bind(n,n):(0,o.Tn)(e.get)?e.get.bind(n,n):o.tE;0;const a=!(0,o.Tn)(e)&&(0,o.Tn)(e.set)?e.set.bind(n):o.tE,l=mr({get:t,set:a});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(u)for(const r in u)vt(u[r],i,n,r);if(c){const e=(0,o.Tn)(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{Ft(t,e[t])}))}function V(e,t){(0,o.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&pt(h,e,"c"),V(Xe,f),V(Ye,p),V(Qe,v),V(Je,m),V(je,g),V($e,y),V(ot,x),V(rt,C),V(nt,k),V(Ze,w),V(et,_),V(tt,I),(0,o.cy)(T))if(T.length){const t=e.exposed||(e.exposed={});T.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===o.tE&&(e.render=E),null!=A&&(e.inheritAttrs=A),F&&(e.components=F),R&&(e.directives=R)}function ft(e,t,n=o.tE){(0,o.cy)(e)&&(e=St(e));for(const i in e){const n=e[i];let a;a=(0,o.Gv)(n)?"default"in n?Rt(n.from||i,n.default,!0):Rt(n.from||i):Rt(n),(0,r.i9)(a)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[i]=a}}function pt(e,t,n){a((0,o.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function vt(e,t,n,r){const i=r.includes(".")?we(n,r):()=>n[r];if((0,o.Kg)(e)){const n=t[e];(0,o.Tn)(n)&&ge(i,n)}else if((0,o.Tn)(e))ge(i,e.bind(n));else if((0,o.Gv)(e))if((0,o.cy)(e))e.forEach((e=>vt(e,t,n,r)));else{const r=(0,o.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,o.Tn)(r)&&ge(i,r,e)}else 0}function mt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,l=a.get(t);let u;return l?u=l:i.length||n||r?(u={},i.length&&i.forEach((e=>gt(u,e,s,!0))),gt(u,t,s)):u=t,(0,o.Gv)(t)&&a.set(t,u),u}function gt(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&gt(e,i,n,!0),o&&o.forEach((t=>gt(e,t,n,!0)));for(const a in t)if(r&&"expose"===a);else{const r=yt[a]||n&&n[a];e[a]=r?r(e[a],t[a]):t[a]}return e}const yt={data:bt,props:Ct,emits:Ct,methods:Et,computed:Et,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:Et,directives:Et,watch:kt,provide:bt,inject:wt};function bt(e,t){return t?e?function(){return(0,o.X$)((0,o.Tn)(e)?e.call(this,this):e,(0,o.Tn)(t)?t.call(this,this):t)}:t:e}function wt(e,t){return Et(St(e),St(t))}function St(e){if((0,o.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _t(e,t){return e?[...new Set([].concat(e,t))]:t}function Et(e,t){return e?(0,o.X$)(Object.create(null),e,t):t}function Ct(e,t){return e?(0,o.cy)(e)&&(0,o.cy)(t)?[...new Set([...e,...t])]:(0,o.X$)(Object.create(null),ct(e),ct(null!=t?t:{})):t}function kt(e,t){if(!e)return t;if(!t)return e;const n=(0,o.X$)(Object.create(null),e);for(const r in t)n[r]=_t(e[r],t[r]);return n}function xt(){return{app:null,config:{isNativeTag:o.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let It=0;function Tt(e,t){return function(n,r=null){(0,o.Tn)(n)||(n=(0,o.X$)({},n)),null==r||(0,o.Gv)(r)||(r=null);const i=xt(),a=new WeakSet;let s=!1;const l=i.app={_uid:It++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:yr,get config(){return i.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,o.Tn)(e.install)?(a.add(e),e.install(l,...t)):(0,o.Tn)(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(o,a,u){if(!s){0;const c=Mn(n,r);return c.appContext=i,!0===u?u="svg":!1===u&&(u=void 0),a&&t?t(c,o):e(c,o,u),s=!0,l._container=o,o.__vue_app__=l,fr(c.component)||c.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){const t=At;At=l;try{return e()}finally{At=t}}};return l}}let At=null;function Ft(e,t){if(Qn){let n=Qn.provides;const r=Qn.parent&&Qn.parent.provides;r===n&&(n=Qn.provides=Object.create(r)),n[e]=t}else 0}function Rt(e,t,n=!1){const r=Qn||D;if(r||At){const i=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:At._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,o.Tn)(t)?t.call(r&&r.proxy):t}else 0}const Dt={},Ot=()=>Object.create(Dt),Vt=e=>Object.getPrototypeOf(e)===Dt;function Pt(e,t,n,o=!1){const i={},a=Ot();e.propsDefaults=Object.create(null),Mt(e,t,i,a);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=o?i:(0,r.Gc)(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Nt(e,t,n,i){const{props:a,attrs:s,vnode:{patchFlag:l}}=e,u=(0,r.ux)(a),[c]=e.propsOptions;let d=!1;if(!(i||l>0)||16&l){let r;Mt(e,t,a,s)&&(d=!0);for(const i in u)t&&((0,o.$3)(t,i)||(r=(0,o.Tg)(i))!==i&&(0,o.$3)(t,r))||(c?!n||void 0===n[i]&&void 0===n[r]||(a[i]=Lt(c,u,i,void 0,e,!0)):delete a[i]);if(s!==u)for(const e in s)t&&(0,o.$3)(t,e)||(delete s[e],d=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(R(e.emitsOptions,i))continue;const l=t[i];if(c)if((0,o.$3)(s,i))l!==s[i]&&(s[i]=l,d=!0);else{const t=(0,o.PT)(i);a[t]=Lt(c,u,t,l,e,!1)}else l!==s[i]&&(s[i]=l,d=!0)}}d&&(0,r.hZ)(e.attrs,"set","")}function Mt(e,t,n,i){const[a,s]=e.propsOptions;let l,u=!1;if(t)for(let r in t){if((0,o.SU)(r))continue;const c=t[r];let d;a&&(0,o.$3)(a,d=(0,o.PT)(r))?s&&s.includes(d)?(l||(l={}))[d]=c:n[d]=c:R(e.emitsOptions,r)||r in i&&c===i[r]||(i[r]=c,u=!0)}if(s){const t=(0,r.ux)(n),i=l||o.MZ;for(let r=0;r<s.length;r++){const l=s[r];n[l]=Lt(a,t,l,i[l],e,!(0,o.$3)(i,l))}}return u}function Lt(e,t,n,r,i,a){const s=e[n];if(null!=s){const e=(0,o.$3)(s,"default");if(e&&void 0===r){const e=s.default;if(s.type!==Function&&!s.skipFactory&&(0,o.Tn)(e)){const{propsDefaults:o}=i;if(n in o)r=o[n];else{const a=tr(i);r=o[n]=e.call(null,t),a()}}else r=e}s[0]&&(a&&!e?r=!1:!s[1]||""!==r&&r!==(0,o.Tg)(n)||(r=!0))}return r}function Bt(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,s={},l=[];let u=!1;if(!(0,o.Tn)(e)){const r=e=>{u=!0;const[n,r]=Bt(e,t,!0);(0,o.X$)(s,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!u)return(0,o.Gv)(e)&&r.set(e,o.Oj),o.Oj;if((0,o.cy)(a))for(let d=0;d<a.length;d++){0;const e=(0,o.PT)(a[d]);Wt(e)&&(s[e]=o.MZ)}else if(a){0;for(const e in a){const t=(0,o.PT)(e);if(Wt(t)){const n=a[e],r=s[t]=(0,o.cy)(n)||(0,o.Tn)(n)?{type:n}:(0,o.X$)({},n);if(r){const e=Ut(Boolean,r.type),n=Ut(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,o.$3)(r,"default"))&&l.push(t)}}}}const c=[s,l];return(0,o.Gv)(e)&&r.set(e,c),c}function Wt(e){return"$"!==e[0]&&!(0,o.SU)(e)}function jt(e){if(null===e)return"null";if("function"===typeof e)return e.name||"";if("object"===typeof e){const t=e.constructor&&e.constructor.name;return t||""}return""}function $t(e,t){return jt(e)===jt(t)}function Ut(e,t){return(0,o.cy)(t)?t.findIndex((t=>$t(t,e))):(0,o.Tn)(t)&&$t(t,e)?0:-1}const Kt=e=>"_"===e[0]||"$stable"===e,zt=e=>(0,o.cy)(e)?e.map(Un):[Un(e)],qt=(e,t,n)=>{if(t._n)return t;const r=M(((...e)=>zt(t(...e))),n);return r._c=!1,r},Ht=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Kt(i))continue;const n=e[i];if((0,o.Tn)(n))t[i]=qt(i,n,r);else if(null!=n){0;const e=zt(n);t[i]=()=>e}}},Gt=(e,t)=>{const n=zt(t);e.slots.default=()=>n},Xt=(e,t)=>{const n=e.slots=Ot();if(32&e.vnode.shapeFlag){const e=t._;e?((0,o.X$)(n,t),(0,o.yQ)(n,"_",e,!0)):Ht(t,n)}else t&&Gt(e,t)},Yt=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,s=o.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?a=!1:((0,o.X$)(i,t),n||1!==e||delete i._):(a=!t.$stable,Ht(t,i)),s=t}else t&&(Gt(e,t),s={default:1});if(a)for(const o in i)Kt(o)||null!=s[o]||delete i[o]};function Qt(e,t,n,a,s=!1){if((0,o.cy)(e))return void e.forEach(((e,r)=>Qt(e,t&&((0,o.cy)(t)?t[r]:t),n,a,s)));if(Le(a)&&!s)return;const l=4&a.shapeFlag?fr(a.component)||a.component.proxy:a.el,u=s?null:l,{i:c,r:d}=e;const h=t&&t.r,f=c.refs===o.MZ?c.refs={}:c.refs,p=c.setupState;if(null!=h&&h!==d&&((0,o.Kg)(h)?(f[h]=null,(0,o.$3)(p,h)&&(p[h]=null)):(0,r.i9)(h)&&(h.value=null)),(0,o.Tn)(d))i(d,c,12,[u,f]);else{const t=(0,o.Kg)(d),i=(0,r.i9)(d);if(t||i){const r=()=>{if(e.f){const n=t?(0,o.$3)(p,d)?p[d]:f[d]:d.value;s?(0,o.cy)(n)&&(0,o.TF)(n,l):(0,o.cy)(n)?n.includes(l)||n.push(l):t?(f[d]=[l],(0,o.$3)(p,d)&&(p[d]=f[d])):(d.value=[l],e.k&&(f[e.k]=d.value))}else t?(f[d]=u,(0,o.$3)(p,d)&&(p[d]=u)):i&&(d.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,Zt(r,n)):r()}else 0}}function Jt(){}const Zt=ce;function en(e){return tn(e)}function tn(e,t){Jt();const n=(0,o.We)();n.__VUE__=!0;const{insert:i,remove:a,patchProp:s,createElement:l,createText:u,createComment:c,setText:d,setElementText:h,parentNode:f,nextSibling:p,setScopeId:v=o.tE,insertStaticContent:m}=e,g=(e,t,n,r=null,o=null,i=null,a=void 0,s=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!On(e,t)&&(r=J(e),H(e,o,i,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:u,ref:c,shapeFlag:d}=t;switch(u){case wn:y(e,t,n,r);break;case Sn:b(e,t,n,r);break;case _n:null==e&&S(t,n,r,a);break;case bn:V(e,t,n,r,o,i,a,s,l);break;default:1&d?I(e,t,n,r,o,i,a,s,l):6&d?P(e,t,n,r,o,i,a,s,l):(64&d||128&d)&&u.process(e,t,n,r,o,i,a,s,l,te)}null!=c&&o&&Qt(c,e&&e.ref,i,t||e,!t)},y=(e,t,n,r)=>{if(null==e)i(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},b=(e,t,n,r)=>{null==e?i(t.el=c(t.children||""),n,r):t.el=e.el},S=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=p(e),i(e,n,r),e=o;i(t,n,r)},x=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),a(e),e=n;a(t)},I=(e,t,n,r,o,i,a,s,l)=>{"svg"===t.type?a="svg":"math"===t.type&&(a="mathml"),null==e?T(t,n,r,o,i,a,s,l):R(e,t,o,i,a,s,l)},T=(e,t,n,r,a,u,c,d)=>{let f,p;const{props:v,shapeFlag:m,transition:g,dirs:y}=e;if(f=e.el=l(e.type,u,v&&v.is,v),8&m?h(f,e.children):16&m&&F(e.children,f,null,r,a,nn(e,u),c,d),y&&Ee(e,null,r,"created"),A(f,e,e.scopeId,c,r),v){for(const t in v)"value"===t||(0,o.SU)(t)||s(f,t,null,v[t],u,e.children,r,a,Q);"value"in v&&s(f,"value",null,v.value,u),(p=v.onVnodeBeforeMount)&&Hn(p,r,e)}y&&Ee(e,null,r,"beforeMount");const b=on(a,g);b&&g.beforeEnter(f),i(f,t,n),((p=v&&v.onVnodeMounted)||b||y)&&Zt((()=>{p&&Hn(p,r,e),b&&g.enter(f),y&&Ee(e,null,r,"mounted")}),a)},A=(e,t,n,r,o)=>{if(n&&v(e,n),r)for(let i=0;i<r.length;i++)v(e,r[i]);if(o){let n=o.subTree;if(t===n){const t=o.vnode;A(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},F=(e,t,n,r,o,i,a,s,l=0)=>{for(let u=l;u<e.length;u++){const l=e[u]=s?Kn(e[u]):Un(e[u]);g(null,l,t,n,r,o,i,a,s)}},R=(e,t,n,r,i,a,l)=>{const u=t.el=e.el;let{patchFlag:c,dynamicChildren:d,dirs:f}=t;c|=16&e.patchFlag;const p=e.props||o.MZ,v=t.props||o.MZ;let m;if(n&&rn(n,!1),(m=v.onVnodeBeforeUpdate)&&Hn(m,n,t,e),f&&Ee(t,e,n,"beforeUpdate"),n&&rn(n,!0),d?D(e.dynamicChildren,d,u,n,r,nn(t,i),a):l||j(e,t,u,null,n,r,nn(t,i),a,!1),c>0){if(16&c)O(u,t,p,v,n,r,i);else if(2&c&&p.class!==v.class&&s(u,"class",null,v.class,i),4&c&&s(u,"style",p.style,v.style,i),8&c){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const a=o[t],l=p[a],c=v[a];c===l&&"value"!==a||s(u,a,l,c,i,e.children,n,r,Q)}}1&c&&e.children!==t.children&&h(u,t.children)}else l||null!=d||O(u,t,p,v,n,r,i);((m=v.onVnodeUpdated)||f)&&Zt((()=>{m&&Hn(m,n,t,e),f&&Ee(t,e,n,"updated")}),r)},D=(e,t,n,r,o,i,a)=>{for(let s=0;s<t.length;s++){const l=e[s],u=t[s],c=l.el&&(l.type===bn||!On(l,u)||70&l.shapeFlag)?f(l.el):n;g(l,u,c,null,r,o,i,a,!0)}},O=(e,t,n,r,i,a,l)=>{if(n!==r){if(n!==o.MZ)for(const u in n)(0,o.SU)(u)||u in r||s(e,u,n[u],null,l,t.children,i,a,Q);for(const u in r){if((0,o.SU)(u))continue;const c=r[u],d=n[u];c!==d&&"value"!==u&&s(e,u,d,c,l,t.children,i,a,Q)}"value"in r&&s(e,"value",n.value,r.value,l)}},V=(e,t,n,r,o,a,s,l,c)=>{const d=t.el=e?e.el:u(""),h=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:v}=t;v&&(l=l?l.concat(v):v),null==e?(i(d,n,r),i(h,n,r),F(t.children||[],n,h,o,a,s,l,c)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,o,a,s,l),(null!=t.key||o&&t===o.subTree)&&an(e,t,!0)):j(e,t,n,h,o,a,s,l,c)},P=(e,t,n,r,o,i,a,s,l)=>{t.slotScopeIds=s,null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,a,l):N(t,n,r,o,i,a,l):M(e,t,l)},N=(e,t,n,r,o,i,a)=>{const s=e.component=Yn(e,r,o);if(Be(e)&&(s.ctx.renderer=te),sr(s),s.asyncDep){if(o&&o.registerDep(s,B),!e.el){const e=s.subTree=Mn(Sn);b(null,e,t,n)}}else B(s,e,t,n,o,i,a)},M=(e,t,n)=>{const r=t.component=e.component;if($(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void W(r,t,n);r.next=t,_(r.update),r.effect.dirty=!0,r.update()}else t.el=e.el,r.vnode=t},B=(e,t,n,i,a,s,l)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:i,vnode:c}=e;{const n=ln(e);if(n)return t&&(t.el=c.el,W(e,t,l)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let d,h=t;0,rn(e,!1),t?(t.el=c.el,W(e,t,l)):t=c,n&&(0,o.DY)(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Hn(d,i,t,c),rn(e,!0);const p=L(e);0;const v=e.subTree;e.subTree=p,g(v,p,f(v.el),J(v),e,a,s),t.el=p.el,null===h&&K(e,p.el),r&&Zt(r,a),(d=t.props&&t.props.onVnodeUpdated)&&Zt((()=>Hn(d,i,t,c)),a)}else{let r;const{el:l,props:u}=t,{bm:c,m:d,parent:h}=e,f=Le(t);if(rn(e,!1),c&&(0,o.DY)(c),!f&&(r=u&&u.onVnodeBeforeMount)&&Hn(r,h,t),rn(e,!0),l&&re){const n=()=>{e.subTree=L(e),re(l,e.subTree,e,a,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=L(e);0,g(null,r,n,i,e,a,s),t.el=r.el}if(d&&Zt(d,a),!f&&(r=u&&u.onVnodeMounted)){const e=t;Zt((()=>Hn(r,h,e)),a)}(256&t.shapeFlag||h&&Le(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&Zt(e.a,a),e.isMounted=!0,t=n=i=null}},c=e.effect=new r.X2(u,o.tE,(()=>w(d)),e.scope),d=e.update=()=>{c.dirty&&c.run()};d.id=e.uid,rn(e,!0),d()},W=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,Nt(e,t.props,o,n),Yt(e,t.children,n),(0,r.C4)(),C(e),(0,r.bl)()},j=(e,t,n,r,o,i,a,s,l=!1)=>{const u=e&&e.children,c=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(u,d,n,r,o,i,a,s,l);if(256&f)return void U(u,d,n,r,o,i,a,s,l)}8&p?(16&c&&Q(u,o,i),d!==u&&h(n,d)):16&c?16&p?z(u,d,n,r,o,i,a,s,l):Q(u,o,i,!0):(8&c&&h(n,""),16&p&&F(d,n,r,o,i,a,s,l))},U=(e,t,n,r,i,a,s,l,u)=>{e=e||o.Oj,t=t||o.Oj;const c=e.length,d=t.length,h=Math.min(c,d);let f;for(f=0;f<h;f++){const r=t[f]=u?Kn(t[f]):Un(t[f]);g(e[f],r,n,null,i,a,s,l,u)}c>d?Q(e,i,a,!0,!1,h):F(t,n,r,i,a,s,l,u,h)},z=(e,t,n,r,i,a,s,l,u)=>{let c=0;const d=t.length;let h=e.length-1,f=d-1;while(c<=h&&c<=f){const r=e[c],o=t[c]=u?Kn(t[c]):Un(t[c]);if(!On(r,o))break;g(r,o,n,null,i,a,s,l,u),c++}while(c<=h&&c<=f){const r=e[h],o=t[f]=u?Kn(t[f]):Un(t[f]);if(!On(r,o))break;g(r,o,n,null,i,a,s,l,u),h--,f--}if(c>h){if(c<=f){const e=f+1,o=e<d?t[e].el:r;while(c<=f)g(null,t[c]=u?Kn(t[c]):Un(t[c]),n,o,i,a,s,l,u),c++}}else if(c>f)while(c<=h)H(e[c],i,a,!0),c++;else{const p=c,v=c,m=new Map;for(c=v;c<=f;c++){const e=t[c]=u?Kn(t[c]):Un(t[c]);null!=e.key&&m.set(e.key,c)}let y,b=0;const w=f-v+1;let S=!1,_=0;const E=new Array(w);for(c=0;c<w;c++)E[c]=0;for(c=p;c<=h;c++){const r=e[c];if(b>=w){H(r,i,a,!0);continue}let o;if(null!=r.key)o=m.get(r.key);else for(y=v;y<=f;y++)if(0===E[y-v]&&On(r,t[y])){o=y;break}void 0===o?H(r,i,a,!0):(E[o-v]=c+1,o>=_?_=o:S=!0,g(r,t[o],n,null,i,a,s,l,u),b++)}const C=S?sn(E):o.Oj;for(y=C.length-1,c=w-1;c>=0;c--){const e=v+c,o=t[e],h=e+1<d?t[e+1].el:r;0===E[c]?g(null,o,n,h,i,a,s,l,u):S&&(y<0||c!==C[y]?q(o,n,h,2):y--)}}},q=(e,t,n,r,o=null)=>{const{el:a,type:s,transition:l,children:u,shapeFlag:c}=e;if(6&c)return void q(e.component.subTree,t,n,r);if(128&c)return void e.suspense.move(t,n,r);if(64&c)return void s.move(e,t,n,te);if(s===bn){i(a,t,n);for(let e=0;e<u.length;e++)q(u[e],t,n,r);return void i(e.anchor,t,n)}if(s===_n)return void E(e,t,n);const d=2!==r&&1&c&&l;if(d)if(0===r)l.beforeEnter(a),i(a,t,n),Zt((()=>l.enter(a)),o);else{const{leave:e,delayLeave:r,afterLeave:o}=l,s=()=>i(a,t,n),u=()=>{e(a,(()=>{s(),o&&o()}))};r?r(a,s,u):u()}else i(a,t,n)},H=(e,t,n,r=!1,o=!1)=>{const{type:i,props:a,ref:s,children:l,dynamicChildren:u,shapeFlag:c,patchFlag:d,dirs:h}=e;if(null!=s&&Qt(s,null,n,e,!0),256&c)return void t.ctx.deactivate(e);const f=1&c&&h,p=!Le(e);let v;if(p&&(v=a&&a.onVnodeBeforeUnmount)&&Hn(v,t,e),6&c)Y(e.component,n,r);else{if(128&c)return void e.suspense.unmount(n,r);f&&Ee(e,null,t,"beforeUnmount"),64&c?e.type.remove(e,t,n,o,te,r):u&&(i!==bn||d>0&&64&d)?Q(u,t,n,!1,!0):(i===bn&&384&d||!o&&16&c)&&Q(l,t,n),r&&G(e)}(p&&(v=a&&a.onVnodeUnmounted)||f)&&Zt((()=>{v&&Hn(v,t,e),f&&Ee(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===bn)return void X(n,r);if(t===_n)return void x(e);const i=()=>{a(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,a=()=>t(n,i);r?r(e.el,i,a):a()}else i()},X=(e,t)=>{let n;while(e!==t)n=p(e),a(e),e=n;a(t)},Y=(e,t,n)=>{const{bum:r,scope:i,update:a,subTree:s,um:l}=e;r&&(0,o.DY)(r),i.stop(),a&&(a.active=!1,H(s,e,t,n)),l&&Zt(l,t),Zt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,o=!1,i=0)=>{for(let a=i;a<e.length;a++)H(e[a],t,n,r,o)},J=e=>6&e.shapeFlag?J(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el);let Z=!1;const ee=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),Z||(Z=!0,C(),k(),Z=!1),t._vnode=e},te={p:g,um:H,m:q,r:G,mt:N,mc:F,pc:j,pbc:D,n:J,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:Tt(ee,ne)}}function nn({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function rn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function on(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function an(e,t,n=!1){const r=e.children,i=t.children;if((0,o.cy)(r)&&(0,o.cy)(i))for(let o=0;o<r.length;o++){const e=r[o];let t=i[o];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[o]=Kn(i[o]),t.el=e.el),n||an(e,t)),t.type===wn&&(t.el=e.el)}}function sn(e){const t=e.slice(),n=[0];let r,o,i,a,s;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(o=n[n.length-1],e[o]<l){t[r]=o,n.push(r);continue}i=0,a=n.length-1;while(i<a)s=i+a>>1,e[n[s]]<l?i=s+1:a=s;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,a=n[i-1];while(i-- >0)n[i]=a,a=t[a];return n}function ln(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ln(t)}const un=e=>e.__isTeleport,cn=e=>e&&(e.disabled||""===e.disabled),dn=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,hn=e=>"function"===typeof MathMLElement&&e instanceof MathMLElement,fn=(e,t)=>{const n=e&&e.to;if((0,o.Kg)(n)){if(t){const e=t(n);return e}return null}return n},pn={name:"Teleport",__isTeleport:!0,process(e,t,n,r,o,i,a,s,l,u){const{mc:c,pc:d,pbc:h,o:{insert:f,querySelector:p,createText:v,createComment:m}}=u,g=cn(t.props);let{shapeFlag:y,children:b,dynamicChildren:w}=t;if(null==e){const e=t.el=v(""),u=t.anchor=v("");f(e,n,r),f(u,n,r);const d=t.target=fn(t.props,p),h=t.targetAnchor=v("");d&&(f(h,d),"svg"===a||dn(d)?a="svg":("mathml"===a||hn(d))&&(a="mathml"));const m=(e,t)=>{16&y&&c(b,e,t,o,i,a,s,l)};g?m(n,u):d&&m(d,h)}else{t.el=e.el;const r=t.anchor=e.anchor,c=t.target=e.target,f=t.targetAnchor=e.targetAnchor,v=cn(e.props),m=v?n:c,y=v?r:f;if("svg"===a||dn(c)?a="svg":("mathml"===a||hn(c))&&(a="mathml"),w?(h(e.dynamicChildren,w,m,o,i,a,s),an(e,t,!0)):l||d(e,t,m,y,o,i,a,s,!1),g)v?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):vn(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=fn(t.props,p);e&&vn(t,e,null,u,0)}else v&&vn(t,c,f,u,1)}yn(t)},remove(e,t,n,r,{um:o,o:{remove:i}},a){const{shapeFlag:s,children:l,anchor:u,targetAnchor:c,target:d,props:h}=e;if(d&&i(c),a&&i(u),16&s){const e=a||!cn(h);for(let r=0;r<l.length;r++){const i=l[r];o(i,t,n,e,!!i.dynamicChildren)}}},move:vn,hydrate:mn};function vn(e,t,n,{o:{insert:r},m:o},i=2){0===i&&r(e.targetAnchor,t,n);const{el:a,anchor:s,shapeFlag:l,children:u,props:c}=e,d=2===i;if(d&&r(a,t,n),(!d||cn(c))&&16&l)for(let h=0;h<u.length;h++)o(u[h],t,n,2);d&&r(s,t,n)}function mn(e,t,n,r,o,i,{o:{nextSibling:a,parentNode:s,querySelector:l}},u){const c=t.target=fn(t.props,l);if(c){const l=c._lpa||c.firstChild;if(16&t.shapeFlag)if(cn(t.props))t.anchor=u(a(e),t,s(e),n,r,o,i),t.targetAnchor=l;else{t.anchor=a(e);let s=l;while(s)if(s=a(s),s&&8===s.nodeType&&"teleport anchor"===s.data){t.targetAnchor=s,c._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(l,t,c,n,r,o,i)}yn(t)}return t.anchor&&a(t.anchor)}const gn=pn;function yn(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;while(n&&n!==e.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const bn=Symbol.for("v-fgt"),wn=Symbol.for("v-txt"),Sn=Symbol.for("v-cmt"),_n=Symbol.for("v-stc"),En=[];let Cn=null;function kn(e=!1){En.push(Cn=e?null:[])}function xn(){En.pop(),Cn=En[En.length-1]||null}let In=1;function Tn(e){In+=e}function An(e){return e.dynamicChildren=In>0?Cn||o.Oj:null,xn(),In>0&&Cn&&Cn.push(e),e}function Fn(e,t,n,r,o,i){return An(Nn(e,t,n,r,o,i,!0))}function Rn(e,t,n,r,o){return An(Mn(e,t,n,r,o,!0))}function Dn(e){return!!e&&!0===e.__v_isVNode}function On(e,t){return e.type===t.type&&e.key===t.key}const Vn=({key:e})=>null!=e?e:null,Pn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,o.Kg)(e)||(0,r.i9)(e)||(0,o.Tn)(e)?{i:D,r:e,k:t,f:!!n}:e:null);function Nn(e,t=null,n=null,r=0,i=null,a=(e===bn?0:1),s=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vn(t),ref:t&&Pn(t),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:D};return l?(zn(u,n),128&a&&e.normalize(u)):n&&(u.shapeFlag|=(0,o.Kg)(n)?8:16),In>0&&!s&&Cn&&(u.patchFlag>0||6&a)&&32!==u.patchFlag&&Cn.push(u),u}const Mn=Ln;function Ln(e,t=null,n=null,i=0,a=null,s=!1){if(e&&e!==G||(e=Sn),Dn(e)){const r=Wn(e,t,!0);return n&&zn(r,n),In>0&&!s&&Cn&&(6&r.shapeFlag?Cn[Cn.indexOf(e)]=r:Cn.push(r)),r.patchFlag|=-2,r}if(vr(e)&&(e=e.__vccOpts),t){t=Bn(t);let{class:e,style:n}=t;e&&!(0,o.Kg)(e)&&(t.class=(0,o.C4)(e)),(0,o.Gv)(n)&&((0,r.ju)(n)&&!(0,o.cy)(n)&&(n=(0,o.X$)({},n)),t.style=(0,o.Tr)(n))}const l=(0,o.Kg)(e)?1:Z(e)?128:un(e)?64:(0,o.Gv)(e)?4:(0,o.Tn)(e)?2:0;return Nn(e,t,n,i,a,l,s,!0)}function Bn(e){return e?(0,r.ju)(e)||Vt(e)?(0,o.X$)({},e):e:null}function Wn(e,t,n=!1,r=!1){const{props:i,ref:a,patchFlag:s,children:l,transition:u}=e,c=t?qn(i||{},t):i,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Vn(c),ref:t&&t.ref?n&&a?(0,o.cy)(a)?a.concat(Pn(t)):[a,Pn(t)]:Pn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==bn?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wn(e.ssContent),ssFallback:e.ssFallback&&Wn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&(d.transition=u.clone(d)),d}function jn(e=" ",t=0){return Mn(wn,null,e,t)}function $n(e="",t=!1){return t?(kn(),Rn(Sn,null,e)):Mn(Sn,null,e)}function Un(e){return null==e||"boolean"===typeof e?Mn(Sn):(0,o.cy)(e)?Mn(bn,null,e.slice()):"object"===typeof e?Kn(e):Mn(wn,null,String(e))}function Kn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Wn(e)}function zn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,o.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),zn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Vt(t)?3===r&&D&&(1===D.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=D}}else(0,o.Tn)(t)?(t={default:t,_ctx:D},n=32):(t=String(t),64&r?(n=16,t=[jn(t)]):n=8);e.children=t,e.shapeFlag|=n}function qn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,o.C4)([t.class,r.class]));else if("style"===e)t.style=(0,o.Tr)([t.style,r.style]);else if((0,o.Mp)(e)){const n=t[e],i=r[e];!i||n===i||(0,o.cy)(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function Hn(e,t,n,r=null){a(e,t,7,[n,r])}const Gn=xt();let Xn=0;function Yn(e,t,n){const i=e.type,a=(t?t.appContext:e.appContext)||Gn,s={uid:Xn++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bt(i,a),emitsOptions:F(i,a),emit:null,emitted:null,propsDefaults:o.MZ,inheritAttrs:i.inheritAttrs,ctx:o.MZ,data:o.MZ,props:o.MZ,attrs:o.MZ,slots:o.MZ,refs:o.MZ,setupState:o.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=A.bind(null,s),e.ce&&e.ce(s),s}let Qn=null;const Jn=()=>Qn||D;let Zn,er;{const e=(0,o.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};Zn=t("__VUE_INSTANCE_SETTERS__",(e=>Qn=e)),er=t("__VUE_SSR_SETTERS__",(e=>ar=e))}const tr=e=>{const t=Qn;return Zn(e),e.scope.on(),()=>{e.scope.off(),Zn(t)}},nr=()=>{Qn&&Qn.scope.off(),Zn(null)};function rr(e){return 4&e.vnode.shapeFlag}let or,ir,ar=!1;function sr(e,t=!1){t&&er(t);const{props:n,children:r}=e.vnode,o=rr(e);Pt(e,n,o,t),Xt(e,r);const i=o?lr(e,t):void 0;return t&&er(!1),i}function lr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ut);const{setup:a}=n;if(a){const n=e.setupContext=a.length>1?hr(e):null,l=tr(e);(0,r.C4)();const u=i(a,e,0,[e.props,n]);if((0,r.bl)(),l(),(0,o.yL)(u)){if(u.then(nr,nr),t)return u.then((n=>{ur(e,n,t)})).catch((t=>{s(t,e,0)}));e.asyncDep=u}else ur(e,u,t)}else cr(e,t)}function ur(e,t,n){(0,o.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,o.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),cr(e,n)}function cr(e,t,n){const i=e.type;if(!e.render){if(!t&&or&&!i.render){const t=i.template||mt(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:s}=i,l=(0,o.X$)((0,o.X$)({isCustomElement:n,delimiters:a},r),s);i.render=or(t,l)}}e.render=i.render||o.tE,ir&&ir(e)}{const t=tr(e);(0,r.C4)();try{ht(e)}finally{(0,r.bl)(),t()}}}const dr={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function hr(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,dr),slots:e.slots,emit:e.emit,expose:t}}function fr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in st?st[n](e):void 0},has(e,t){return t in e||t in st}}))}function pr(e,t=!0){return(0,o.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function vr(e){return(0,o.Tn)(e)&&"__vccOpts"in e}const mr=(e,t)=>{const n=(0,r.EW)(e,t,ar);return n};function gr(e,t,n){const r=arguments.length;return 2===r?(0,o.Gv)(t)&&!(0,o.cy)(t)?Dn(t)?Mn(e,null,[t]):Mn(e,t):Mn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Dn(n)&&(n=[n]),Mn(e,t,n))}const yr="3.4.27",br=o.tE},5130:function(e,t,n){n.d(t,{D$:function(){return Ce},Ef:function(){return Ae},F:function(){return he},Jo:function(){return Se},XX:function(){return Te},aG:function(){return V},eB:function(){return p}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),o=n(4232),i=n(144);
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const a="http://www.w3.org/2000/svg",s="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,u=l&&l.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o="svg"===t?l.createElementNS(a,e):"mathml"===t?l.createElementNS(s,e):l.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:e=>l.createTextNode(e),createComment:e=>l.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>l.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const a=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling)){while(1)if(t.insertBefore(o.cloneNode(!0),n),o===i||!(o=o.nextSibling))break}else{u.innerHTML="svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e;const o=u.content;if("svg"===r||"mathml"===r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},d="transition",h="animation",f=Symbol("_vtc"),p=(e,{slots:t})=>(0,r.h)(r.pR,b(e),t);p.displayName="Transition";const v={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,o.X$)({},r.QP,v),g=(e,t=[])=>{(0,o.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},y=e=>!!e&&((0,o.cy)(e)?e.some((e=>e.length>1)):e.length>1);function b(e){const t={};for(const o in e)o in v||(t[o]=e[o]);if(!1===e.css)return t;const{name:n="v",type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=a,appearActiveClass:c=s,appearToClass:d=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=w(i),b=m&&m[0],S=m&&m[1],{onBeforeEnter:k,onEnter:I,onEnterCancelled:T,onLeave:A,onLeaveCancelled:R,onBeforeAppear:D=k,onAppear:O=I,onAppearCancelled:V=T}=t,P=(e,t,n)=>{E(e,t?d:l),E(e,t?c:s),n&&n()},N=(e,t)=>{e._isLeaving=!1,E(e,h),E(e,p),E(e,f),t&&t()},M=e=>(t,n)=>{const o=e?O:I,i=()=>P(t,e,n);g(o,[t,i]),C((()=>{E(t,e?u:a),_(t,e?d:l),y(o)||x(t,r,b,i)}))};return(0,o.X$)(t,{onBeforeEnter(e){g(k,[e]),_(e,a),_(e,s)},onBeforeAppear(e){g(D,[e]),_(e,u),_(e,c)},onEnter:M(!1),onAppear:M(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>N(e,t);_(e,h),_(e,f),F(),C((()=>{e._isLeaving&&(E(e,h),_(e,p),y(A)||x(e,r,S,n))})),g(A,[e,n])},onEnterCancelled(e){P(e,!1),g(T,[e])},onAppearCancelled(e){P(e,!0),g(V,[e])},onLeaveCancelled(e){N(e),g(R,[e])}})}function w(e){if(null==e)return null;if((0,o.Gv)(e))return[S(e.enter),S(e.leave)];{const t=S(e);return[t,t]}}function S(e){const t=(0,o.Ro)(e);return t}function _(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[f]||(e[f]=new Set)).add(t)}function E(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[f];n&&(n.delete(t),n.size||(e[f]=void 0))}function C(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let k=0;function x(e,t,n,r){const o=e._endId=++k,i=()=>{o===e._endId&&r()};if(n)return setTimeout(i,n);const{type:a,timeout:s,propCount:l}=I(e,t);if(!a)return r();const u=a+"end";let c=0;const d=()=>{e.removeEventListener(u,h),i()},h=t=>{t.target===e&&++c>=l&&d()};setTimeout((()=>{c<l&&d()}),s+1),e.addEventListener(u,h)}function I(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r(`${d}Delay`),i=r(`${d}Duration`),a=T(o,i),s=r(`${h}Delay`),l=r(`${h}Duration`),u=T(s,l);let c=null,f=0,p=0;t===d?a>0&&(c=d,f=a,p=i.length):t===h?u>0&&(c=h,f=u,p=l.length):(f=Math.max(a,u),c=f>0?a>u?d:h:null,p=c?c===d?i.length:l.length:0);const v=c===d&&/\b(transform|all)(,|$)/.test(r(`${d}Property`).toString());return{type:c,timeout:f,propCount:p,hasTransform:v}}function T(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>A(t)+A(e[n]))))}function A(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function F(){return document.body.offsetHeight}function R(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const D=Symbol("_vod"),O=Symbol("_vsh"),V={beforeMount(e,{value:t},{transition:n}){e[D]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):P(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),P(e,!0),r.enter(e)):r.leave(e,(()=>{P(e,!1)})):P(e,t))},beforeUnmount(e,{value:t}){P(e,t)}};function P(e,t){e.style.display=t?e[D]:"none",e[O]=!t}const N=Symbol("");const M=/(^|;)\s*display\s*:/;function L(e,t,n){const r=e.style,i=(0,o.Kg)(n);let a=!1;if(n&&!i){if(t)if((0,o.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&W(r,t,"")}else for(const e in t)null==n[e]&&W(r,e,"");for(const e in n)"display"===e&&(a=!0),W(r,e,n[e])}else if(i){if(t!==n){const e=r[N];e&&(n+=";"+e),r.cssText=n,a=M.test(n)}}else t&&e.removeAttribute("style");D in e&&(e[D]=a?r.display:"",e[O]&&(r.display="none"))}const B=/\s*!important$/;function W(e,t,n){if((0,o.cy)(n))n.forEach((n=>W(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=U(e,t);B.test(n)?e.setProperty((0,o.Tg)(r),n.replace(B,""),"important"):e[r]=n}}const j=["Webkit","Moz","ms"],$={};function U(e,t){const n=$[t];if(n)return n;let r=(0,o.PT)(t);if("filter"!==r&&r in e)return $[t]=r;r=(0,o.ZH)(r);for(let o=0;o<j.length;o++){const n=j[o]+r;if(n in e)return $[t]=n}return t}const K="http://www.w3.org/1999/xlink";function z(e,t,n,r,i){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(K,t.slice(6,t.length)):e.setAttributeNS(K,t,n);else{const r=(0,o.J$)(t);null==n||r&&!(0,o.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function q(e,t,n,r,i,a,s){if("innerHTML"===t||"textContent"===t)return r&&s(r,i,a),void(e[t]=null==n?"":n);const l=e.tagName;if("value"===t&&"PROGRESS"!==l&&!l.includes("-")){const r="OPTION"===l?e.getAttribute("value")||"":e.value,o=null==n?"":n;return r===o&&"_value"in e||(e.value=o),null==n&&e.removeAttribute(t),void(e._value=n)}let u=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,o.Y2)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{e[t]=n}catch(c){0}u&&e.removeAttribute(t)}function H(e,t,n,r){e.addEventListener(t,n,r)}function G(e,t,n,r){e.removeEventListener(t,n,r)}const X=Symbol("_vei");function Y(e,t,n,r,o=null){const i=e[X]||(e[X]={}),a=i[t];if(r&&a)a.value=r;else{const[n,s]=J(t);if(r){const a=i[t]=ne(r,o);H(e,n,a,s)}else a&&(G(e,n,a,s),i[t]=void 0)}}const Q=/(?:Once|Passive|Capture)$/;function J(e){let t;if(Q.test(e)){let n;t={};while(n=e.match(Q))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,o.Tg)(e.slice(2));return[n,t]}let Z=0;const ee=Promise.resolve(),te=()=>Z||(ee.then((()=>Z=0)),Z=Date.now());function ne(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(re(e,n.value),t,5,[e])};return n.value=e,n.attached=te(),n}function re(e,t){if((0,o.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const oe=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ie=(e,t,n,r,i,a,s,l,u)=>{const c="svg"===i;"class"===t?R(e,r,c):"style"===t?L(e,n,r):(0,o.Mp)(t)?(0,o.CP)(t)||Y(e,t,n,r,s):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ae(e,t,r,c))?q(e,t,r,a,s,l,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),z(e,t,r,c))};function ae(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&oe(t)&&(0,o.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!oe(t)||!(0,o.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const se=new WeakMap,le=new WeakMap,ue=Symbol("_moveCb"),ce=Symbol("_enterCb"),de={name:"TransitionGroup",props:(0,o.X$)({},m,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.nI)(),o=(0,r.Gy)();let a,s;return(0,r.$u)((()=>{if(!a.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!me(a[0].el,n.vnode.el,t))return;a.forEach(fe),a.forEach(pe);const r=a.filter(ve);F(),r.forEach((e=>{const n=e.el,r=n.style;_(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const o=n[ue]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",o),n[ue]=null,E(n,t))};n.addEventListener("transitionend",o)}))})),()=>{const l=(0,i.ux)(e),u=b(l);let c=l.tag||r.FK;if(a=[],s)for(let e=0;e<s.length;e++){const t=s[e];t.el&&t.el instanceof Element&&(a.push(t),(0,r.MZ)(t,(0,r.OW)(t,u,o,n)),se.set(t,t.el.getBoundingClientRect()))}s=t.default?(0,r.Df)(t.default()):[];for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&(0,r.MZ)(t,(0,r.OW)(t,u,o,n))}return(0,r.bF)(c,null,s)}}};de.props;const he=de;function fe(e){const t=e.el;t[ue]&&t[ue](),t[ce]&&t[ce]()}function pe(e){le.set(e,e.el.getBoundingClientRect())}function ve(e){const t=se.get(e),n=le.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${o}px)`,t.transitionDuration="0s",e}}function me(e,t,n){const r=e.cloneNode(),o=e[f];o&&o.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:a}=I(r);return i.removeChild(r),a}const ge=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,o.cy)(t)?e=>(0,o.DY)(t,e):t};function ye(e){e.target.composing=!0}function be(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const we=Symbol("_assign"),Se={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[we]=ge(i);const a=r||i.props&&"number"===i.props.type;H(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),a&&(r=(0,o.bB)(r)),e[we](r)})),n&&H(e,"change",(()=>{e.value=e.value.trim()})),t||(H(e,"compositionstart",ye),H(e,"compositionend",be),H(e,"change",be))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},a){if(e[we]=ge(a),e.composing)return;const s=!i&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,o.bB)(e.value),l=null==t?"":t;if(s!==l){if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===l)return}e.value=l}}};const _e=["ctrl","shift","alt","meta"],Ee={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>_e.some((n=>e[`${n}Key`]&&!t.includes(n)))},Ce=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=Ee[t[e]];if(r&&r(n,t))return}return e(n,...r)})},ke=(0,o.X$)({patchProp:ie},c);let xe;function Ie(){return xe||(xe=(0,r.K9)(ke))}const Te=(...e)=>{Ie().render(...e)},Ae=(...e)=>{const t=Ie().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Re(e);if(!r)return;const i=t._component;(0,o.Tn)(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,Fe(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function Fe(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function Re(e){if((0,o.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){n.d(t,{$3:function(){return f},$H:function(){return M},BH:function(){return z},BX:function(){return ne},Bm:function(){return S},C4:function(){return Q},CE:function(){return v},CP:function(){return u},DY:function(){return L},Gv:function(){return _},J$:function(){return Z},Kg:function(){return w},MZ:function(){return o},Mp:function(){return l},NO:function(){return s},Oj:function(){return i},PT:function(){return D},Qd:function(){return I},Ro:function(){return j},SU:function(){return A},TF:function(){return d},Tg:function(){return V},Tn:function(){return b},Tr:function(){return q},We:function(){return U},X$:function(){return c},Y2:function(){return ee},ZH:function(){return P},Zf:function(){return x},bB:function(){return W},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return N},tE:function(){return a},u3:function(){return re},vM:function(){return m},v_:function(){return oe},yI:function(){return T},yL:function(){return E},yQ:function(){return B}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}const o={},i=[],a=()=>{},s=()=>!1,l=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),c=Object.assign,d=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},h=Object.prototype.hasOwnProperty,f=(e,t)=>h.call(e,t),p=Array.isArray,v=e=>"[object Map]"===k(e),m=e=>"[object Set]"===k(e),g=e=>"[object Date]"===k(e),y=e=>"[object RegExp]"===k(e),b=e=>"function"===typeof e,w=e=>"string"===typeof e,S=e=>"symbol"===typeof e,_=e=>null!==e&&"object"===typeof e,E=e=>(_(e)||b(e))&&b(e.then)&&b(e.catch),C=Object.prototype.toString,k=e=>C.call(e),x=e=>k(e).slice(8,-1),I=e=>"[object Object]"===k(e),T=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,A=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),F=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},R=/-(\w)/g,D=F((e=>e.replace(R,((e,t)=>t?t.toUpperCase():"")))),O=/\B([A-Z])/g,V=F((e=>e.replace(O,"-$1").toLowerCase())),P=F((e=>e.charAt(0).toUpperCase()+e.slice(1))),N=F((e=>{const t=e?`on${P(e)}`:"";return t})),M=(e,t)=>!Object.is(e,t),L=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},B=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},W=e=>{const t=parseFloat(e);return isNaN(t)?e:t},j=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let $;const U=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const K="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",z=r(K);function q(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=w(r)?Y(r):q(r);if(o)for(const e in o)t[e]=o[e]}return t}if(w(e)||_(e))return e}const H=/;(?![^(]*\))/g,G=/:([^]+)/,X=/\/\*[^]*?\*\//g;function Y(e){const t={};return e.replace(X,"").split(H).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Q(e){let t="";if(w(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=Q(e[n]);r&&(t+=r+" ")}else if(_(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=g(e),r=g(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=S(e),r=S(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=_(e),r=_(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const oe=e=>w(e)?e:null==e?"":p(e)||_(e)&&(e.toString===C||!b(e.toString))?JSON.stringify(e,ie,2):String(e),ie=(e,t)=>t&&t.__v_isRef?ie(e,t.value):v(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:S(t)?ae(t):!_(t)||p(t)||I(t)?t:String(t),ae=(e,t="")=>{var n;return S(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},1241:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},782:function(e,t,n){n.d(t,{y$:function(){return ee}});n(4114);var r=n(6768),o=n(144);function i(){return a().__VUE_DEVTOOLS_GLOBAL_HOOK__}function a(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof globalThis?globalThis:{}}const s="function"===typeof Proxy,l="devtools-plugin:setup",u="plugin:settings:set";let c,d;function h(){var e;return void 0!==c||("undefined"!==typeof window&&window.performance?(c=!0,d=window.performance):"undefined"!==typeof globalThis&&(null===(e=globalThis.perf_hooks)||void 0===e?void 0:e.performance)?(c=!0,d=globalThis.perf_hooks.performance):c=!1),c}function f(){return h()?d.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const a in e.settings){const t=e.settings[a];n[a]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let o=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(o,t)}catch(i){}this.fallbacks={getSettings(){return o},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(i){}o=e},now(){return f()}},t&&t.on(u,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function v(e,t){const n=e,r=a(),o=i(),u=s&&n.enableEarlyProxy;if(!o||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const e=u?new p(n,o):null,i=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else o.emit(l,e,t)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var m="store";function g(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function y(e){return null!==e&&"object"===typeof e}function b(e){return e&&"function"===typeof e.then}function w(e,t){return function(){return e(t)}}function S(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function _(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;C(e,n,[],e._modules.root,!0),E(e,n,t)}function E(e,t,n){var i=e._state,a=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,l={},u={},c=(0,o.uY)(!0);c.run((function(){g(s,(function(t,n){l[n]=w(t,e),u[n]=(0,r.EW)((function(){return l[n]()})),Object.defineProperty(e.getters,n,{get:function(){return u[n].value},enumerable:!0})}))})),e._state=(0,o.Kh)({data:t}),e._scope=c,e.strict&&F(e),i&&n&&e._withCommit((function(){i.data=null})),a&&a.stop()}function C(e,t,n,r,o){var i=!n.length,a=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[a],e._modulesNamespaceMap[a]=r),!i&&!o){var s=R(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){s[l]=r.state}))}var u=r.context=k(e,a,n);r.forEachMutation((function(t,n){var r=a+n;I(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:a+n,o=t.handler||t;T(e,r,o,u)})),r.forEachGetter((function(t,n){var r=a+n;A(e,r,t,u)})),r.forEachChild((function(r,i){C(e,t,n.concat(i),r,o)}))}function k(e,t,n){var r=""===t,o={dispatch:r?e.dispatch:function(n,r,o){var i=D(n,r,o),a=i.payload,s=i.options,l=i.type;return s&&s.root||(l=t+l),e.dispatch(l,a)},commit:r?e.commit:function(n,r,o){var i=D(n,r,o),a=i.payload,s=i.options,l=i.type;s&&s.root||(l=t+l),e.commit(l,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return e.getters}:function(){return x(e,t)}},state:{get:function(){return R(e.state,n)}}}),o}function x(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(o){if(o.slice(0,r)===t){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[o]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function I(e,t,n,r){var o=e._mutations[t]||(e._mutations[t]=[]);o.push((function(t){n.call(e,r.state,t)}))}function T(e,t,n,r){var o=e._actions[t]||(e._actions[t]=[]);o.push((function(t){var o=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return b(o)||(o=Promise.resolve(o)),e._devtoolHook?o.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):o}))}function A(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function F(e){(0,r.wB)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function R(e,t){return t.reduce((function(e,t){return e[t]}),e)}function D(e,t,n){return y(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var O="vuex bindings",V="vuex:mutations",P="vuex:actions",N="vuex",M=0;function L(e,t){v({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[O]},(function(n){n.addTimelineLayer({id:V,label:"Vuex Mutations",color:B}),n.addTimelineLayer({id:P,label:"Vuex Actions",color:B}),n.addInspector({id:N,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===N)if(n.filter){var r=[];z(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[K(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===N){var r=n.nodeId;x(t,r),n.state=q(G(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===N){var r=n.nodeId,o=n.path;"root"!==r&&(o=r.split("/").filter(Boolean).concat(o)),t._withCommit((function(){n.set(t._state.data,o,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(N),n.sendInspectorState(N),n.addTimelineEvent({layerId:V,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=M++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:P,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},o=Date.now()-e._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var B=8702998,W=6710886,j=16777215,$={label:"namespaced",textColor:j,backgroundColor:W};function U(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function K(e,t){return{id:t||"root",label:U(t),tags:e.namespaced?[$]:[],children:Object.keys(e._children).map((function(n){return K(e._children[n],t+n+"/")}))}}function z(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[$]:[]}),Object.keys(t._children).forEach((function(o){z(e,t._children[o],n,r+o+"/")}))}function q(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),o={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var i=H(t);o.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?U(e):e,editable:!1,value:X((function(){return i[e]}))}}))}return o}function H(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var o=t,i=r.pop();r.forEach((function(e){o[e]||(o[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),o=o[e]._custom.value})),o[i]=X((function(){return e[n]}))}else t[n]=X((function(){return e[n]}))})),t}function G(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,o){var i=e[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+t+'".');return o===n.length-1?i:i._children}),"root"===t?e:e.root._children)}function X(e){try{return e()}catch(t){return t}}var Y=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},Q={namespaced:{configurable:!0}};Q.namespaced.get=function(){return!!this._rawModule.namespaced},Y.prototype.addChild=function(e,t){this._children[e]=t},Y.prototype.removeChild=function(e){delete this._children[e]},Y.prototype.getChild=function(e){return this._children[e]},Y.prototype.hasChild=function(e){return e in this._children},Y.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Y.prototype.forEachChild=function(e){g(this._children,e)},Y.prototype.forEachGetter=function(e){this._rawModule.getters&&g(this._rawModule.getters,e)},Y.prototype.forEachAction=function(e){this._rawModule.actions&&g(this._rawModule.actions,e)},Y.prototype.forEachMutation=function(e){this._rawModule.mutations&&g(this._rawModule.mutations,e)},Object.defineProperties(Y.prototype,Q);var J=function(e){this.register([],e,!1)};function Z(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;Z(e.concat(r),t.getChild(r),n.modules[r])}}J.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},J.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},J.prototype.update=function(e){Z([],this.root,e)},J.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var o=new Y(t,n);if(0===e.length)this.root=o;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],o)}t.modules&&g(t.modules,(function(t,o){r.register(e.concat(o),t,n)}))},J.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},J.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var o=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new J(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=o;var i=this,a=this,s=a.dispatch,l=a.commit;this.dispatch=function(e,t){return s.call(i,e,t)},this.commit=function(e,t,n){return l.call(i,e,t,n)},this.strict=r;var u=this._modules.root.state;C(this,u,[],this._modules.root),E(this,u),n.forEach((function(e){return e(t)}))},ne={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||m,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&L(e,this)},ne.state.get=function(){return this._state.data},ne.state.set=function(e){0},te.prototype.commit=function(e,t,n){var r=this,o=D(e,t,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),l=this._mutations[i];l&&(this._withCommit((function(){l.forEach((function(e){e(a)}))})),this._subscribers.slice().forEach((function(e){return e(s,r.state)})))},te.prototype.dispatch=function(e,t){var n=this,r=D(e,t),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(a,n.state)}))}catch(u){0}var l=s.length>1?Promise.all(s.map((function(e){return e(i)}))):s[0](i);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(a,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(a,n.state,e)}))}catch(u){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return S(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return S(n,this._actionSubscribers,t)},te.prototype.watch=function(e,t,n){var o=this;return(0,r.wB)((function(){return e(o.state,o.getters)}),t,Object.assign({},n))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),C(this,this.state,e,this._modules.get(e),n.preserveState),E(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=R(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),_(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),_(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,ne);ie((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ae(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,t,n):t[o]},n[r].vuex=!0})),n})),ie((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var i=ae(this.$store,"mapMutations",e);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n})),ie((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,o=t.val;o=e+o,n[r]=function(){if(!e||ae(this.$store,"mapGetters",e))return this.$store.getters[o]},n[r].vuex=!0})),n})),ie((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var i=ae(this.$store,"mapActions",e);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n}));function re(e){return oe(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function oe(e){return Array.isArray(e)||y(e)}function ie(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ae(e,t,n){var r=e._modulesNamespaceMap[n];return r}},9306:function(e,t,n){var r=n(4901),o=n(6823),i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not a function")}},3506:function(e,t,n){var r=n(3925),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw new i("Can't set "+o(e)+" as a prototype")}},7080:function(e,t,n){var r=n(4402).has;e.exports=function(e){return r(e),e}},679:function(e,t,n){var r=n(1625),o=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new o("Incorrect invocation")}},8551:function(e,t,n){var r=n(34),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not an object")}},7811:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(e,t,n){var r=n(6706),o=n(4576),i=TypeError;e.exports=r(ArrayBuffer.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==o(e))throw new i("ArrayBuffer expected");return e.byteLength}},3238:function(e,t,n){var r=n(9504),o=n(7394),i=r(ArrayBuffer.prototype.slice);e.exports=function(e){if(0!==o(e))return!1;try{return i(e,0,0),!1}catch(t){return!0}}},5636:function(e,t,n){var r=n(4475),o=n(9504),i=n(6706),a=n(7696),s=n(3238),l=n(7394),u=n(4483),c=n(1548),d=r.structuredClone,h=r.ArrayBuffer,f=r.DataView,p=r.TypeError,v=Math.min,m=h.prototype,g=f.prototype,y=o(m.slice),b=i(m,"resizable","get"),w=i(m,"maxByteLength","get"),S=o(g.getInt8),_=o(g.setInt8);e.exports=(c||u)&&function(e,t,n){var r,o=l(e),i=void 0===t?o:a(t),m=!b||!b(e);if(s(e))throw new p("ArrayBuffer is detached");if(c&&(e=d(e,{transfer:[e]}),o===i&&(n||m)))return e;if(o>=i&&(!n||m))r=y(e,0,i);else{var g=n&&!m&&w?{maxByteLength:w(e)}:void 0;r=new h(i,g);for(var E=new f(e),C=new f(r),k=v(i,o),x=0;x<k;x++)_(C,x,S(E,x))}return c||u(e),r}},4644:function(e,t,n){var r,o,i,a=n(7811),s=n(3724),l=n(4475),u=n(4901),c=n(34),d=n(9297),h=n(6955),f=n(6823),p=n(6699),v=n(6840),m=n(2106),g=n(1625),y=n(2787),b=n(2967),w=n(8227),S=n(3392),_=n(1181),E=_.enforce,C=_.get,k=l.Int8Array,x=k&&k.prototype,I=l.Uint8ClampedArray,T=I&&I.prototype,A=k&&y(k),F=x&&y(x),R=Object.prototype,D=l.TypeError,O=w("toStringTag"),V=S("TYPED_ARRAY_TAG"),P="TypedArrayConstructor",N=a&&!!b&&"Opera"!==h(l.opera),M=!1,L={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},B={BigInt64Array:8,BigUint64Array:8},W=function(e){if(!c(e))return!1;var t=h(e);return"DataView"===t||d(L,t)||d(B,t)},j=function(e){var t=y(e);if(c(t)){var n=C(t);return n&&d(n,P)?n[P]:j(t)}},$=function(e){if(!c(e))return!1;var t=h(e);return d(L,t)||d(B,t)},U=function(e){if($(e))return e;throw new D("Target is not a typed array")},K=function(e){if(u(e)&&(!b||g(A,e)))return e;throw new D(f(e)+" is not a typed array constructor")},z=function(e,t,n,r){if(s){if(n)for(var o in L){var i=l[o];if(i&&d(i.prototype,e))try{delete i.prototype[e]}catch(a){try{i.prototype[e]=t}catch(u){}}}F[e]&&!n||v(F,e,n?t:N&&x[e]||t,r)}},q=function(e,t,n){var r,o;if(s){if(b){if(n)for(r in L)if(o=l[r],o&&d(o,e))try{delete o[e]}catch(i){}if(A[e]&&!n)return;try{return v(A,e,n?t:N&&A[e]||t)}catch(i){}}for(r in L)o=l[r],!o||o[e]&&!n||v(o,e,t)}};for(r in L)o=l[r],i=o&&o.prototype,i?E(i)[P]=o:N=!1;for(r in B)o=l[r],i=o&&o.prototype,i&&(E(i)[P]=o);if((!N||!u(A)||A===Function.prototype)&&(A=function(){throw new D("Incorrect invocation")},N))for(r in L)l[r]&&b(l[r],A);if((!N||!F||F===R)&&(F=A.prototype,N))for(r in L)l[r]&&b(l[r].prototype,F);if(N&&y(T)!==F&&b(T,F),s&&!d(F,O))for(r in M=!0,m(F,O,{configurable:!0,get:function(){return c(this)?this[V]:void 0}}),L)l[r]&&p(l[r],V,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:N,TYPED_ARRAY_TAG:M&&V,aTypedArray:U,aTypedArrayConstructor:K,exportTypedArrayMethod:z,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:j,isView:W,isTypedArray:$,TypedArray:A,TypedArrayPrototype:F}},5370:function(e,t,n){var r=n(6198);e.exports=function(e,t,n){var o=0,i=arguments.length>2?n:r(t),a=new e(i);while(i>o)a[o]=t[o++];return a}},9617:function(e,t,n){var r=n(5397),o=n(5610),i=n(6198),a=function(e){return function(t,n,a){var s=r(t),l=i(s);if(0===l)return!e&&-1;var u,c=o(a,l);if(e&&n!==n){while(l>c)if(u=s[c++],u!==u)return!0}else for(;l>c;c++)if((e||c in s)&&s[c]===n)return e||c||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},4527:function(e,t,n){var r=n(3724),o=n(4376),i=TypeError,a=Object.getOwnPropertyDescriptor,s=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=s?function(e,t){if(o(e)&&!a(e,"length").writable)throw new i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7628:function(e,t,n){var r=n(6198);e.exports=function(e,t){for(var n=r(e),o=new t(n),i=0;i<n;i++)o[i]=e[n-i-1];return o}},9928:function(e,t,n){var r=n(6198),o=n(1291),i=RangeError;e.exports=function(e,t,n,a){var s=r(e),l=o(n),u=l<0?s+l:l;if(u>=s||u<0)throw new i("Incorrect index");for(var c=new t(s),d=0;d<s;d++)c[d]=d===u?a:e[d];return c}},4576:function(e,t,n){var r=n(9504),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},6955:function(e,t,n){var r=n(2140),o=n(4901),i=n(4576),a=n(8227),s=a("toStringTag"),l=Object,u="Arguments"===i(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=l(e),s))?n:u?i(t):"Object"===(r=i(t))&&o(t.callee)?"Arguments":r}},7740:function(e,t,n){var r=n(9297),o=n(5031),i=n(7347),a=n(4913);e.exports=function(e,t,n){for(var s=o(t),l=a.f,u=i.f,c=0;c<s.length;c++){var d=s[c];r(e,d)||n&&r(n,d)||l(e,d,u(t,d))}}},2211:function(e,t,n){var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},6699:function(e,t,n){var r=n(3724),o=n(4913),i=n(6980);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},4659:function(e,t,n){var r=n(3724),o=n(4913),i=n(6980);e.exports=function(e,t,n){r?o.f(e,t,i(0,n)):e[t]=n}},2106:function(e,t,n){var r=n(283),o=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},6840:function(e,t,n){var r=n(4901),o=n(4913),i=n(283),a=n(9433);e.exports=function(e,t,n,s){s||(s={});var l=s.enumerable,u=void 0!==s.name?s.name:t;if(r(n)&&i(n,u,s),s.global)l?e[t]=n:a(t,n);else{try{s.unsafe?e[t]&&(l=!0):delete e[t]}catch(c){}l?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return e}},9433:function(e,t,n){var r=n(4475),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(e,t,n){var r,o,i,a,s=n(4475),l=n(9714),u=n(1548),c=s.structuredClone,d=s.ArrayBuffer,h=s.MessageChannel,f=!1;if(u)f=function(e){c(e,{transfer:[e]})};else if(d)try{h||(r=l("worker_threads"),r&&(h=r.MessageChannel)),h&&(o=new h,i=new d(2),a=function(e){o.port1.postMessage(null,[e])},2===i.byteLength&&(a(i),0===i.byteLength&&(f=a)))}catch(p){}e.exports=f},4055:function(e,t,n){var r=n(4475),o=n(34),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7290:function(e,t,n){var r=n(516),o=n(9088);e.exports=!r&&!o&&"object"==typeof window&&"object"==typeof document},516:function(e){e.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},9088:function(e,t,n){var r=n(4475),o=n(4576);e.exports="process"===o(r.process)},9392:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(e,t,n){var r,o,i=n(4475),a=n(9392),s=i.process,l=i.Deno,u=s&&s.versions||l&&l.version,c=u&&u.v8;c&&(r=c.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(e,t,n){var r=n(9504),o=Error,i=r("".replace),a=function(e){return String(new o(e).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,l=s.test(a);e.exports=function(e,t){if(l&&"string"==typeof e&&!o.prepareStackTrace)while(t--)e=i(e,s,"");return e}},6249:function(e,t,n){var r=n(9039),o=n(6980);e.exports=!r((function(){var e=new Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",o(1,7)),7!==e.stack)}))},6518:function(e,t,n){var r=n(4475),o=n(7347).f,i=n(6699),a=n(6840),s=n(9433),l=n(7740),u=n(2796);e.exports=function(e,t){var n,c,d,h,f,p,v=e.target,m=e.global,g=e.stat;if(c=m?r:g?r[v]||s(v,{}):r[v]&&r[v].prototype,c)for(d in t){if(f=t[d],e.dontCallGetSet?(p=o(c,d),h=p&&p.value):h=c[d],n=u(m?d:v+(g?".":"#")+d,e.forced),!n&&void 0!==h){if(typeof f==typeof h)continue;l(f,h)}(e.sham||h&&h.sham)&&i(f,"sham",!0),a(c,d,f,e)}}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},6080:function(e,t,n){var r=n(7476),o=n(9306),i=n(616),a=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?a(e,t):function(){return e.apply(t,arguments)}}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){var r=n(616),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},350:function(e,t,n){var r=n(3724),o=n(9297),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,s=o(i,"name"),l=s&&"something"===function(){}.name,u=s&&(!r||r&&a(i,"name").configurable);e.exports={EXISTS:s,PROPER:l,CONFIGURABLE:u}},6706:function(e,t,n){var r=n(9504),o=n(9306);e.exports=function(e,t,n){try{return r(o(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(i){}}},7476:function(e,t,n){var r=n(4576),o=n(9504);e.exports=function(e){if("Function"===r(e))return o(e)}},9504:function(e,t,n){var r=n(616),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);e.exports=r?a:function(e){return function(){return i.apply(e,arguments)}}},7751:function(e,t,n){var r=n(4475),o=n(4901),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},1767:function(e){e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},851:function(e,t,n){var r=n(6955),o=n(5966),i=n(4117),a=n(6269),s=n(8227),l=s("iterator");e.exports=function(e){if(!i(e))return o(e,l)||o(e,"@@iterator")||a[r(e)]}},81:function(e,t,n){var r=n(9565),o=n(9306),i=n(8551),a=n(6823),s=n(851),l=TypeError;e.exports=function(e,t){var n=arguments.length<2?s(e):t;if(o(n))return i(r(n,e));throw new l(a(e)+" is not iterable")}},5966:function(e,t,n){var r=n(9306),o=n(4117);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},3789:function(e,t,n){var r=n(9306),o=n(8551),i=n(9565),a=n(1291),s=n(1767),l="Invalid size",u=RangeError,c=TypeError,d=Math.max,h=function(e,t){this.set=e,this.size=d(t,0),this.has=r(e.has),this.keys=r(e.keys)};h.prototype={getIterator:function(){return s(o(i(this.keys,this.set)))},includes:function(e){return i(this.has,this.set,e)}},e.exports=function(e){o(e);var t=+e.size;if(t!==t)throw new c(l);var n=a(t);if(n<0)throw new u(l);return new h(e,n)}},4475:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),o=n(8981),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},421:function(e){e.exports={}},5917:function(e,t,n){var r=n(3724),o=n(9039),i=n(4055);e.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){var r=n(9504),o=n(9039),i=n(4576),a=Object,s=r("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"===i(e)?s(e,""):a(e)}:a},3167:function(e,t,n){var r=n(4901),o=n(34),i=n(2967);e.exports=function(e,t,n){var a,s;return i&&r(a=t.constructor)&&a!==n&&o(s=a.prototype)&&s!==n.prototype&&i(e,s),e}},3706:function(e,t,n){var r=n(9504),o=n(4901),i=n(7629),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return a(e)}),e.exports=i.inspectSource},1181:function(e,t,n){var r,o,i,a=n(8622),s=n(4475),l=n(34),u=n(6699),c=n(9297),d=n(7629),h=n(6119),f=n(421),p="Object already initialized",v=s.TypeError,m=s.WeakMap,g=function(e){return i(e)?o(e):r(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw new v("Incompatible receiver, "+e+" required");return n}};if(a||d.state){var b=d.state||(d.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw new v(p);return t.facade=e,b.set(e,t),t},o=function(e){return b.get(e)||{}},i=function(e){return b.has(e)}}else{var w=h("state");f[w]=!0,r=function(e,t){if(c(e,w))throw new v(p);return t.facade=e,u(e,w,t),t},o=function(e){return c(e,w)?e[w]:{}},i=function(e){return c(e,w)}}e.exports={set:r,get:o,has:i,enforce:g,getterFor:y}},4209:function(e,t,n){var r=n(8227),o=n(6269),i=r("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||a[i]===e)}},4376:function(e,t,n){var r=n(4576);e.exports=Array.isArray||function(e){return"Array"===r(e)}},1108:function(e,t,n){var r=n(6955);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},3517:function(e,t,n){var r=n(9504),o=n(9039),i=n(4901),a=n(6955),s=n(7751),l=n(3706),u=function(){},c=s("Reflect","construct"),d=/^\s*(?:class|function)\b/,h=r(d.exec),f=!d.test(u),p=function(e){if(!i(e))return!1;try{return c(u,[],e),!0}catch(t){return!1}},v=function(e){if(!i(e))return!1;switch(a(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return f||!!h(d,l(e))}catch(t){return!0}};v.sham=!0,e.exports=!c||o((function(){var e;return p(p.call)||!p(Object)||!p((function(){e=!0}))||e}))?v:p},2796:function(e,t,n){var r=n(9039),o=n(4901),i=/#|\.prototype\./,a=function(e,t){var n=l[s(e)];return n===c||n!==u&&(o(t)?r(t):!!t)},s=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},l=a.data={},u=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},4117:function(e){e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){e.exports=!1},757:function(e,t,n){var r=n(7751),o=n(4901),i=n(1625),a=n(7040),s=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,s(e))}},507:function(e,t,n){var r=n(9565);e.exports=function(e,t,n){var o,i,a=n?e:e.iterator,s=e.next;while(!(o=r(s,a)).done)if(i=t(o.value),void 0!==i)return i}},2652:function(e,t,n){var r=n(6080),o=n(9565),i=n(8551),a=n(6823),s=n(4209),l=n(6198),u=n(1625),c=n(81),d=n(851),h=n(9539),f=TypeError,p=function(e,t){this.stopped=e,this.result=t},v=p.prototype;e.exports=function(e,t,n){var m,g,y,b,w,S,_,E=n&&n.that,C=!(!n||!n.AS_ENTRIES),k=!(!n||!n.IS_RECORD),x=!(!n||!n.IS_ITERATOR),I=!(!n||!n.INTERRUPTED),T=r(t,E),A=function(e){return m&&h(m,"normal",e),new p(!0,e)},F=function(e){return C?(i(e),I?T(e[0],e[1],A):T(e[0],e[1])):I?T(e,A):T(e)};if(k)m=e.iterator;else if(x)m=e;else{if(g=d(e),!g)throw new f(a(e)+" is not iterable");if(s(g)){for(y=0,b=l(e);b>y;y++)if(w=F(e[y]),w&&u(v,w))return w;return new p(!1)}m=c(e,g)}S=k?e.next:m.next;while(!(_=o(S,m)).done){try{w=F(_.value)}catch(R){h(m,"throw",R)}if("object"==typeof w&&w&&u(v,w))return w}return new p(!1)}},9539:function(e,t,n){var r=n(9565),o=n(8551),i=n(5966);e.exports=function(e,t,n){var a,s;o(e);try{if(a=i(e,"return"),!a){if("throw"===t)throw n;return n}a=r(a,e)}catch(l){s=!0,a=l}if("throw"===t)throw n;if(s)throw a;return o(a),n}},6269:function(e){e.exports={}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){var r=n(9504),o=n(9039),i=n(4901),a=n(9297),s=n(3724),l=n(350).CONFIGURABLE,u=n(3706),c=n(1181),d=c.enforce,h=c.get,f=String,p=Object.defineProperty,v=r("".slice),m=r("".replace),g=r([].join),y=s&&!o((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===v(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!a(e,"name")||l&&e.name!==t)&&(s?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&a(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?s&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=d(e);return a(r,"source")||(r.source=g(b,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return i(this)&&h(this).source||u(this)}),"toString")},2248:function(e,t,n){var r=n(9504),o=Map.prototype;e.exports={Map:Map,set:r(o.set),get:r(o.get),has:r(o.has),remove:r(o["delete"]),proto:o}},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2603:function(e,t,n){var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},4913:function(e,t,n){var r=n(3724),o=n(5917),i=n(8686),a=n(8551),s=n(6969),l=TypeError,u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",f="writable";t.f=r?i?function(e,t,n){if(a(e),t=s(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=c(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:d in n?n[d]:r[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=s(t),a(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){var r=n(3724),o=n(9565),i=n(8773),a=n(6980),s=n(5397),l=n(6969),u=n(9297),c=n(5917),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=s(e),t=l(t),c)try{return d(e,t)}catch(n){}if(u(e,t))return a(!o(i.f,e,t),e[t])}},8480:function(e,t,n){var r=n(1828),o=n(8727),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},3717:function(e,t){t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){var r=n(9297),o=n(4901),i=n(8981),a=n(6119),s=n(2211),l=a("IE_PROTO"),u=Object,c=u.prototype;e.exports=s?u.getPrototypeOf:function(e){var t=i(e);if(r(t,l))return t[l];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof u?c:null}},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),o=n(9297),i=n(5397),a=n(9617).indexOf,s=n(421),l=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,c=[];for(n in r)!o(s,n)&&o(r,n)&&l(c,n);while(t.length>u)o(r,n=t[u++])&&(~a(c,n)||l(c,n));return c}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){var r=n(6706),o=n(34),i=n(7750),a=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),a(r),o(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(e,t,n){var r=n(9565),o=n(4901),i=n(34),a=TypeError;e.exports=function(e,t){var n,s;if("string"===t&&o(n=e.toString)&&!i(s=r(n,e)))return s;if(o(n=e.valueOf)&&!i(s=r(n,e)))return s;if("string"!==t&&o(n=e.toString)&&!i(s=r(n,e)))return s;throw new a("Can't convert object to primitive value")}},5031:function(e,t,n){var r=n(7751),o=n(9504),i=n(8480),a=n(3717),s=n(8551),l=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(s(e)),n=a.f;return n?l(t,n(e)):t}},7979:function(e,t,n){var r=n(8551);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},1034:function(e,t,n){var r=n(9565),o=n(9297),i=n(1625),a=n(7979),s=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in s||o(e,"flags")||!i(s,e)?t:r(a,e)}},7750:function(e,t,n){var r=n(4117),o=TypeError;e.exports=function(e){if(r(e))throw new o("Can't call method on "+e);return e}},9286:function(e,t,n){var r=n(4402),o=n(8469),i=r.Set,a=r.add;e.exports=function(e){var t=new i;return o(e,(function(e){a(t,e)})),t}},3440:function(e,t,n){var r=n(7080),o=n(4402),i=n(9286),a=n(5170),s=n(3789),l=n(8469),u=n(507),c=o.has,d=o.remove;e.exports=function(e){var t=r(this),n=s(e),o=i(t);return a(t)<=n.size?l(t,(function(e){n.includes(e)&&d(o,e)})):u(n.getIterator(),(function(e){c(t,e)&&d(o,e)})),o}},4402:function(e,t,n){var r=n(9504),o=Set.prototype;e.exports={Set:Set,add:r(o.add),has:r(o.has),remove:r(o["delete"]),proto:o}},8750:function(e,t,n){var r=n(7080),o=n(4402),i=n(5170),a=n(3789),s=n(8469),l=n(507),u=o.Set,c=o.add,d=o.has;e.exports=function(e){var t=r(this),n=a(e),o=new u;return i(t)>n.size?l(n.getIterator(),(function(e){d(t,e)&&c(o,e)})):s(t,(function(e){n.includes(e)&&c(o,e)})),o}},4449:function(e,t,n){var r=n(7080),o=n(4402).has,i=n(5170),a=n(3789),s=n(8469),l=n(507),u=n(9539);e.exports=function(e){var t=r(this),n=a(e);if(i(t)<=n.size)return!1!==s(t,(function(e){if(n.includes(e))return!1}),!0);var c=n.getIterator();return!1!==l(c,(function(e){if(o(t,e))return u(c,"normal",!1)}))}},3838:function(e,t,n){var r=n(7080),o=n(5170),i=n(8469),a=n(3789);e.exports=function(e){var t=r(this),n=a(e);return!(o(t)>n.size)&&!1!==i(t,(function(e){if(!n.includes(e))return!1}),!0)}},8527:function(e,t,n){var r=n(7080),o=n(4402).has,i=n(5170),a=n(3789),s=n(507),l=n(9539);e.exports=function(e){var t=r(this),n=a(e);if(i(t)<n.size)return!1;var u=n.getIterator();return!1!==s(u,(function(e){if(!o(t,e))return l(u,"normal",!1)}))}},8469:function(e,t,n){var r=n(9504),o=n(507),i=n(4402),a=i.Set,s=i.proto,l=r(s.forEach),u=r(s.keys),c=u(new a).next;e.exports=function(e,t,n){return n?o({iterator:u(e),next:c},t):l(e,t)}},4916:function(e,t,n){var r=n(7751),o=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};e.exports=function(e){var t=r("Set");try{(new t)[e](o(0));try{return(new t)[e](o(-1)),!1}catch(n){return!0}}catch(i){return!1}}},5170:function(e,t,n){var r=n(6706),o=n(4402);e.exports=r(o.proto,"size","get")||function(e){return e.size}},3650:function(e,t,n){var r=n(7080),o=n(4402),i=n(9286),a=n(3789),s=n(507),l=o.add,u=o.has,c=o.remove;e.exports=function(e){var t=r(this),n=a(e).getIterator(),o=i(t);return s(n,(function(e){u(t,e)?c(o,e):l(o,e)})),o}},4204:function(e,t,n){var r=n(7080),o=n(4402).add,i=n(9286),a=n(3789),s=n(507);e.exports=function(e){var t=r(this),n=a(e).getIterator(),l=i(t);return s(n,(function(e){o(l,e)})),l}},6119:function(e,t,n){var r=n(5745),o=n(3392),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},7629:function(e,t,n){var r=n(6395),o=n(4475),i=n(9433),a="__core-js_shared__",s=e.exports=o[a]||i(a,{});(s.versions||(s.versions=[])).push({version:"3.37.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},1548:function(e,t,n){var r=n(4475),o=n(9039),i=n(7388),a=n(7290),s=n(516),l=n(9088),u=r.structuredClone;e.exports=!!u&&!o((function(){if(s&&i>92||l&&i>94||a&&i>97)return!1;var e=new ArrayBuffer(8),t=u(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength}))},4495:function(e,t,n){var r=n(7388),o=n(9039),i=n(4475),a=i.String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol("symbol detection");return!a(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){var r=n(1291),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5854:function(e,t,n){var r=n(2777),o=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new o("Can't convert number to bigint");return BigInt(t)}},7696:function(e,t,n){var r=n(1291),o=n(8014),i=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=o(t);if(t!==n)throw new i("Wrong length or index");return n}},5397:function(e,t,n){var r=n(7055),o=n(7750);e.exports=function(e){return r(o(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),o=Math.min;e.exports=function(e){var t=r(e);return t>0?o(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),o=Object;e.exports=function(e){return o(r(e))}},2777:function(e,t,n){var r=n(9565),o=n(34),i=n(757),a=n(5966),s=n(4270),l=n(8227),u=TypeError,c=l("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,l=a(e,c);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!o(n)||i(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),s(e,t)}},6969:function(e,t,n){var r=n(2777),o=n(757);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},2140:function(e,t,n){var r=n(8227),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},655:function(e,t,n){var r=n(6955),o=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},9714:function(e,t,n){var r=n(9088);e.exports=function(e){try{if(r)return Function('return require("'+e+'")')()}catch(t){}}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),o=n(9039);e.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){var r=n(4475),o=n(4901),i=r.WeakMap;e.exports=o(i)&&/native code/.test(String(i))},8227:function(e,t,n){var r=n(4475),o=n(5745),i=n(9297),a=n(3392),s=n(4495),l=n(7040),u=r.Symbol,c=o("wks"),d=l?u["for"]||u:u&&u.withoutSetter||a;e.exports=function(e){return i(c,e)||(c[e]=s&&i(u,e)?u[e]:d("Symbol."+e)),c[e]}},6573:function(e,t,n){var r=n(3724),o=n(2106),i=n(3238),a=ArrayBuffer.prototype;r&&!("detached"in a)&&o(a,"detached",{configurable:!0,get:function(){return i(this)}})},7936:function(e,t,n){var r=n(6518),o=n(5636);o&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return o(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(e,t,n){var r=n(6518),o=n(5636);o&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return o(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(e,t,n){var r=n(6518),o=n(8981),i=n(6198),a=n(4527),s=n(6837),l=n(9039),u=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=u||!c();r({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=o(this),n=i(t),r=arguments.length;s(n+r);for(var l=0;l<r;l++)t[n]=arguments[l],n++;return a(t,n),n}})},7642:function(e,t,n){var r=n(6518),o=n(3440),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("difference")},{difference:o})},8004:function(e,t,n){var r=n(6518),o=n(9039),i=n(8750),a=n(4916),s=!a("intersection")||o((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:s},{intersection:i})},3853:function(e,t,n){var r=n(6518),o=n(4449),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isDisjointFrom")},{isDisjointFrom:o})},5876:function(e,t,n){var r=n(6518),o=n(3838),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isSubsetOf")},{isSubsetOf:o})},2475:function(e,t,n){var r=n(6518),o=n(8527),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isSupersetOf")},{isSupersetOf:o})},5024:function(e,t,n){var r=n(6518),o=n(3650),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("symmetricDifference")},{symmetricDifference:o})},1698:function(e,t,n){var r=n(6518),o=n(4204),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("union")},{union:o})},7467:function(e,t,n){var r=n(7628),o=n(4644),i=o.aTypedArray,a=o.exportTypedArrayMethod,s=o.getTypedArrayConstructor;a("toReversed",(function(){return r(i(this),s(this))}))},4732:function(e,t,n){var r=n(4644),o=n(9504),i=n(9306),a=n(5370),s=r.aTypedArray,l=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,c=o(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&i(e);var t=s(this),n=a(l(t),t);return c(n,e)}))},9577:function(e,t,n){var r=n(9928),o=n(4644),i=n(1108),a=n(1291),s=n(5854),l=o.aTypedArray,u=o.getTypedArrayConstructor,c=o.exportTypedArrayMethod,d=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();c("with",{with:function(e,t){var n=l(this),o=a(e),c=i(n)?s(t):+t;return r(n,u(n),o,c)}}["with"],!d)},3375:function(e,t,n){n(7642)},9225:function(e,t,n){n(8004)},3972:function(e,t,n){n(3853)},9209:function(e,t,n){n(5876)},5714:function(e,t,n){n(2475)},7561:function(e,t,n){n(5024)},6197:function(e,t,n){n(1698)},4979:function(e,t,n){var r=n(6518),o=n(4475),i=n(7751),a=n(6980),s=n(4913).f,l=n(9297),u=n(679),c=n(3167),d=n(2603),h=n(5002),f=n(6193),p=n(3724),v=n(6395),m="DOMException",g=i("Error"),y=i(m),b=function(){u(this,w);var e=arguments.length,t=d(e<1?void 0:arguments[0]),n=d(e<2?void 0:arguments[1],"Error"),r=new y(t,n),o=new g(t);return o.name=m,s(r,"stack",a(1,f(o.stack,1))),c(r,this,b),r},w=b.prototype=y.prototype,S="stack"in new g(m),_="stack"in new y(1,2),E=y&&p&&Object.getOwnPropertyDescriptor(o,m),C=!!E&&!(E.writable&&E.configurable),k=S&&!C&&!_;r({global:!0,constructor:!0,forced:v||k},{DOMException:k?b:y});var x=i(m),I=x.prototype;if(I.constructor!==x)for(var T in v||s(I,"constructor",a(1,x)),h)if(l(h,T)){var A=h[T],F=A.s;l(x,F)||s(x,F,a(6,A.c))}},1678:function(e,t,n){var r=n(6395),o=n(6518),i=n(4475),a=n(7751),s=n(9504),l=n(9039),u=n(3392),c=n(4901),d=n(3517),h=n(4117),f=n(34),p=n(757),v=n(2652),m=n(8551),g=n(6955),y=n(9297),b=n(4659),w=n(6699),S=n(6198),_=n(2812),E=n(1034),C=n(2248),k=n(4402),x=n(8469),I=n(4483),T=n(6249),A=n(1548),F=i.Object,R=i.Array,D=i.Date,O=i.Error,V=i.TypeError,P=i.PerformanceMark,N=a("DOMException"),M=C.Map,L=C.has,B=C.get,W=C.set,j=k.Set,$=k.add,U=k.has,K=a("Object","keys"),z=s([].push),q=s((!0).valueOf),H=s(1..valueOf),G=s("".valueOf),X=s(D.prototype.getTime),Y=u("structuredClone"),Q="DataCloneError",J="Transferring",Z=function(e){return!l((function(){var t=new i.Set([7]),n=e(t),r=e(F(7));return n===t||!n.has(7)||!f(r)||7!==+r}))&&e},ee=function(e,t){return!l((function(){var n=new t,r=e({a:n,b:n});return!(r&&r.a===r.b&&r.a instanceof t&&r.a.stack===n.stack)}))},te=function(e){return!l((function(){var t=e(new i.AggregateError([1],Y,{cause:3}));return"AggregateError"!==t.name||1!==t.errors[0]||t.message!==Y||3!==t.cause}))},ne=i.structuredClone,re=r||!ee(ne,O)||!ee(ne,N)||!te(ne),oe=!ne&&Z((function(e){return new P(Y,{detail:e}).detail})),ie=Z(ne)||oe,ae=function(e){throw new N("Uncloneable type: "+e,Q)},se=function(e,t){throw new N((t||"Cloning")+" of "+e+" cannot be properly polyfilled in this engine",Q)},le=function(e,t){return ie||se(t),ie(e)},ue=function(){var e;try{e=new i.DataTransfer}catch(t){try{e=new i.ClipboardEvent("").clipboardData}catch(n){}}return e&&e.items&&e.files?e:null},ce=function(e,t,n){if(L(t,e))return B(t,e);var r,o,a,s,l,u,d=n||g(e);if("SharedArrayBuffer"===d)r=ie?ie(e):e;else{var h=i.DataView;h||c(e.slice)||se("ArrayBuffer");try{if(c(e.slice)&&!e.resizable)r=e.slice(0);else{o=e.byteLength,a="maxByteLength"in e?{maxByteLength:e.maxByteLength}:void 0,r=new ArrayBuffer(o,a),s=new h(e),l=new h(r);for(u=0;u<o;u++)l.setUint8(u,s.getUint8(u))}}catch(f){throw new N("ArrayBuffer is detached",Q)}}return W(t,e,r),r},de=function(e,t,n,r,o){var a=i[t];return f(a)||se(t),new a(ce(e.buffer,o),n,r)},he=function(e,t){if(p(e)&&ae("Symbol"),!f(e))return e;if(t){if(L(t,e))return B(t,e)}else t=new M;var n,r,o,s,l,u,d,h,v=g(e);switch(v){case"Array":o=R(S(e));break;case"Object":o={};break;case"Map":o=new M;break;case"Set":o=new j;break;case"RegExp":o=new RegExp(e.source,E(e));break;case"Error":switch(r=e.name,r){case"AggregateError":o=new(a(r))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":o=new(a(r));break;case"CompileError":case"LinkError":case"RuntimeError":o=new(a("WebAssembly",r));break;default:o=new O}break;case"DOMException":o=new N(e.message,e.name);break;case"ArrayBuffer":case"SharedArrayBuffer":o=ce(e,t,v);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":u="DataView"===v?e.byteLength:e.length,o=de(e,v,e.byteOffset,u,t);break;case"DOMQuad":try{o=new DOMQuad(he(e.p1,t),he(e.p2,t),he(e.p3,t),he(e.p4,t))}catch(m){o=le(e,v)}break;case"File":if(ie)try{o=ie(e),g(o)!==v&&(o=void 0)}catch(m){}if(!o)try{o=new File([e],e.name,e)}catch(m){}o||se(v);break;case"FileList":if(s=ue(),s){for(l=0,u=S(e);l<u;l++)s.items.add(he(e[l],t));o=s.files}else o=le(e,v);break;case"ImageData":try{o=new ImageData(he(e.data,t),e.width,e.height,{colorSpace:e.colorSpace})}catch(m){o=le(e,v)}break;default:if(ie)o=ie(e);else switch(v){case"BigInt":o=F(e.valueOf());break;case"Boolean":o=F(q(e));break;case"Number":o=F(H(e));break;case"String":o=F(G(e));break;case"Date":o=new D(X(e));break;case"Blob":try{o=e.slice(0,e.size,e.type)}catch(m){se(v)}break;case"DOMPoint":case"DOMPointReadOnly":n=i[v];try{o=n.fromPoint?n.fromPoint(e):new n(e.x,e.y,e.z,e.w)}catch(m){se(v)}break;case"DOMRect":case"DOMRectReadOnly":n=i[v];try{o=n.fromRect?n.fromRect(e):new n(e.x,e.y,e.width,e.height)}catch(m){se(v)}break;case"DOMMatrix":case"DOMMatrixReadOnly":n=i[v];try{o=n.fromMatrix?n.fromMatrix(e):new n(e)}catch(m){se(v)}break;case"AudioData":case"VideoFrame":c(e.clone)||se(v);try{o=e.clone()}catch(m){ae(v)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":se(v);default:ae(v)}}switch(W(t,e,o),v){case"Array":case"Object":for(d=K(e),l=0,u=S(d);l<u;l++)h=d[l],b(o,h,he(e[h],t));break;case"Map":e.forEach((function(e,n){W(o,he(n,t),he(e,t))}));break;case"Set":e.forEach((function(e){$(o,he(e,t))}));break;case"Error":w(o,"message",he(e.message,t)),y(e,"cause")&&w(o,"cause",he(e.cause,t)),"AggregateError"===r?o.errors=he(e.errors,t):"SuppressedError"===r&&(o.error=he(e.error,t),o.suppressed=he(e.suppressed,t));case"DOMException":T&&w(o,"stack",he(e.stack,t))}return o},fe=function(e,t){if(!f(e))throw new V("Transfer option cannot be converted to a sequence");var n=[];v(e,(function(e){z(n,m(e))}));var r,o,a,s,l,u,h=0,p=S(n),y=new j;while(h<p){if(r=n[h++],o=g(r),"ArrayBuffer"===o?U(y,r):L(t,r))throw new N("Duplicate transferable",Q);if("ArrayBuffer"!==o){if(A)s=ne(r,{transfer:[r]});else switch(o){case"ImageBitmap":a=i.OffscreenCanvas,d(a)||se(o,J);try{l=new a(r.width,r.height),u=l.getContext("bitmaprenderer"),u.transferFromImageBitmap(r),s=l.transferToImageBitmap()}catch(b){}break;case"AudioData":case"VideoFrame":c(r.clone)&&c(r.close)||se(o,J);try{s=r.clone(),r.close()}catch(b){}break;case"MediaSourceHandle":case"MessagePort":case"OffscreenCanvas":case"ReadableStream":case"TransformStream":case"WritableStream":se(o,J)}if(void 0===s)throw new N("This object cannot be transferred: "+o,Q);W(t,r,s)}else $(y,r)}return y},pe=function(e){x(e,(function(e){A?ie(e,{transfer:[e]}):c(e.transfer)?e.transfer():I?I(e):se("ArrayBuffer",J)}))};o({global:!0,enumerable:!0,sham:!A,forced:re},{structuredClone:function(e){var t,n,r=_(arguments.length,1)>1&&!h(arguments[1])?m(arguments[1]):void 0,o=r?r.transfer:void 0;void 0!==o&&(t=new M,n=fe(o,t));var i=he(e,t);return n&&pe(n),i}})},6984:function(e,t,n){var r=n(6840),o=n(9504),i=n(655),a=n(2812),s=URLSearchParams,l=s.prototype,u=o(l.append),c=o(l["delete"]),d=o(l.forEach),h=o([].push),f=new s("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(l,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return c(this,e);var r=[];d(this,(function(e,t){h(r,{key:t,value:e})})),a(t,1);var o,s=i(e),l=i(n),f=0,p=0,v=!1,m=r.length;while(f<m)o=r[f++],v||o.key===s?(v=!0,c(this,o.key)):p++;while(p<m)o=r[p++],o.key===s&&o.value===l||u(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){var r=n(6840),o=n(9504),i=n(655),a=n(2812),s=URLSearchParams,l=s.prototype,u=o(l.getAll),c=o(l.has),d=new s("a=1");!d.has("a",2)&&d.has("a",void 0)||r(l,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return c(this,e);var r=u(this,e);a(t,1);var o=i(n),s=0;while(s<r.length)if(r[s++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){var r=n(3724),o=n(9504),i=n(2106),a=URLSearchParams.prototype,s=o(a.forEach);r&&!("size"in a)&&i(a,"size",{get:function(){var e=0;return s(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3405:function(e,t,n){n.d(t,{MF:function(){return ye},j6:function(){return fe},xZ:function(){return pe},om:function(){return he},Sx:function(){return we},Wp:function(){return be},KO:function(){return Se}});n(4114);var r=n(852),o=n(1363),i=n(4046);n(4979);const a=(e,t)=>t.some((t=>e instanceof t));let s,l;function u(){return s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,h=new WeakMap,f=new WeakMap,p=new WeakMap,v=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(_(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),v.set(t,e),t}function g(e){if(h.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));h.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?c().includes(e)?function(...t){return e.apply(E(this),t),_(d.get(this))}:function(...t){return _(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),_(r)}}function S(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&g(e),a(e,u())?new Proxy(e,y):e)}function _(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=S(e);return t!==e&&(p.set(e,t),v.set(t,e)),t}const E=e=>v.get(e);function C(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(e,t),s=_(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(_(a.result),e.oldVersion,e.newVersion,_(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}const k=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],I=new Map;function T(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(I.get(t))return I.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!k.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&i.done]))[0]};return I.set(t,i),i}b((e=>({...e,get:(t,n,r)=>T(t,n)||e.get(t,n,r),has:(t,n)=>!!T(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(F(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function F(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",D="0.10.3",O=new o.Vy("@firebase/app"),V="@firebase/app-compat",P="@firebase/analytics-compat",N="@firebase/analytics",M="@firebase/app-check-compat",L="@firebase/app-check",B="@firebase/auth",W="@firebase/auth-compat",j="@firebase/database",$="@firebase/database-compat",U="@firebase/functions",K="@firebase/functions-compat",z="@firebase/installations",q="@firebase/installations-compat",H="@firebase/messaging",G="@firebase/messaging-compat",X="@firebase/performance",Y="@firebase/performance-compat",Q="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/vertexai-preview",re="@firebase/firestore-compat",oe="firebase",ie="10.12.0",ae="[DEFAULT]",se={[R]:"fire-core",[V]:"fire-core-compat",[N]:"fire-analytics",[P]:"fire-analytics-compat",[L]:"fire-app-check",[M]:"fire-app-check-compat",[B]:"fire-auth",[W]:"fire-auth-compat",[j]:"fire-rtdb",[$]:"fire-rtdb-compat",[U]:"fire-fn",[K]:"fire-fn-compat",[z]:"fire-iid",[q]:"fire-iid-compat",[H]:"fire-fcm",[G]:"fire-fcm-compat",[X]:"fire-perf",[Y]:"fire-perf-compat",[Q]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[re]:"fire-fst-compat",[ne]:"fire-vertex","fire-js":"fire-js",[oe]:"fire-js-all"},le=new Map,ue=new Map,ce=new Map;function de(e,t){try{e.container.addComponent(t)}catch(n){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function he(e){const t=e.name;if(ce.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of le.values())de(n,e);for(const n of ue.values())de(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function pe(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ve={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},me=new i.FA("app","Firebase",ve);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ye=ie;function be(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const o=Object.assign({name:ae,automaticDataCollectionEnabled:!1},t),a=o.name;if("string"!==typeof a||!a)throw me.create("bad-app-name",{appName:String(a)});if(n||(n=(0,i.T9)()),!n)throw me.create("no-options");const s=le.get(a);if(s){if((0,i.bD)(n,s.options)&&(0,i.bD)(o,s.config))return s;throw me.create("duplicate-app",{appName:a})}const l=new r.h1(a);for(const r of ce.values())l.addComponent(r);const u=new ge(n,o,l);return le.set(a,u),u}function we(e=ae){const t=le.get(e);if(!t&&e===ae&&(0,i.T9)())return be();if(!t)throw me.create("no-app",{appName:e});return t}function Se(e,t,n){var o;let i=null!==(o=se[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${i}" with version "${t}":`];return a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void O.warn(e.join(" "))}he(new r.uA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e="firebase-heartbeat-database",Ee=1,Ce="firebase-heartbeat-store";let ke=null;function xe(){return ke||(ke=C(_e,Ee,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ce)}catch(n){console.warn(n)}}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),ke}async function Ie(e){try{const t=await xe(),n=t.transaction(Ce),r=await n.objectStore(Ce).get(Ae(e));return await n.done,r}catch(t){if(t instanceof i.g)O.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});O.warn(e.message)}}}async function Te(e,t){try{const n=await xe(),r=n.transaction(Ce,"readwrite"),o=r.objectStore(Ce);await o.put(t,Ae(e)),await r.done}catch(n){if(n instanceof i.g)O.warn(n.message);else{const e=me.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});O.warn(e.message)}}}function Ae(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=1024,Re=2592e6;class De{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),o=Oe();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==o&&!this._heartbeatsCache.heartbeats.some((e=>e.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Re})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Oe(),{heartbeatsToSend:n,unsentEntries:r}=Ve(this._heartbeatsCache.heartbeats),o=(0,i.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Oe(){const e=new Date;return e.toISOString().substring(0,10)}function Ve(e,t=Fe){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),Ne(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ne(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.zW)()&&(0,i.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ie(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ne(e){return(0,i.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){he(new r.uA("platform-logger",(e=>new A(e)),"PRIVATE")),he(new r.uA("heartbeat",(e=>new De(e)),"PRIVATE")),Se(R,D,e),Se(R,D,"esm2017"),Se("fire-js","")}Me("")},852:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return o}});n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4046);class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(e){return e===i?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){n.d(t,{$b:function(){return o},Vy:function(){return u}});n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},a=o.INFO,s={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=s[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}},4373:function(e,t,n){n.d(t,{A:function(){return fn}});var r={};n.r(r),n.d(r,{hasBrowserEnv:function(){return Ne},hasStandardBrowserEnv:function(){return Me},hasStandardBrowserWebWorkerEnv:function(){return Le},origin:function(){return Be}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577);function o(e,t){return function(){return e.apply(t,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:a}=Object,s=(e=>t=>{const n=i.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),l=e=>(e=e.toLowerCase(),t=>s(t)===e),u=e=>t=>typeof t===e,{isArray:c}=Array,d=u("undefined");function h(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const f=l("ArrayBuffer");function p(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t}const v=u("string"),m=u("function"),g=u("number"),y=e=>null!==e&&"object"===typeof e,b=e=>!0===e||!1===e,w=e=>{if("object"!==s(e))return!1;const t=a(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},S=l("Date"),_=l("File"),E=l("Blob"),C=l("FileList"),k=e=>y(e)&&m(e.pipe),x=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=s(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},I=l("URLSearchParams"),[T,A,F,R]=["ReadableStream","Request","Response","Headers"].map(l),D=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function O(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,o;if("object"!==typeof e&&(e=[e]),c(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(r=0;r<i;r++)a=o[r],t.call(null,e[a],a,e)}}function V(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;while(o-- >0)if(r=n[o],t===r.toLowerCase())return r;return null}const P=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),N=e=>!d(e)&&e!==P;function M(){const{caseless:e}=N(this)&&this||{},t={},n=(n,r)=>{const o=e&&V(t,r)||r;w(t[o])&&w(n)?t[o]=M(t[o],n):w(n)?t[o]=M({},n):c(n)?t[o]=n.slice():t[o]=n};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&O(arguments[r],n);return t}const L=(e,t,n,{allOwnKeys:r}={})=>(O(t,((t,r)=>{n&&m(t)?e[r]=o(t,n):e[r]=t}),{allOwnKeys:r}),e),B=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),W=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},j=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},null==e)return t;do{o=Object.getOwnPropertyNames(e),i=o.length;while(i-- >0)s=o[i],r&&!r(s,e,t)||l[s]||(t[s]=e[s],l[s]=!0);e=!1!==n&&a(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},$=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},U=e=>{if(!e)return null;if(c(e))return e;let t=e.length;if(!g(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},K=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&a(Uint8Array)),z=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let o;while((o=r.next())&&!o.done){const n=o.value;t.call(e,n[0],n[1])}},q=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},H=l("HTMLFormElement"),G=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),X=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Y=l("RegExp"),Q=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};O(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},J=e=>{Q(e,((t,n)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},Z=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return c(e)?r(e):r(String(e).split(t)),n},ee=()=>{},te=(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,ne="abcdefghijklmnopqrstuvwxyz",re="0123456789",oe={DIGIT:re,ALPHA:ne,ALPHA_DIGIT:ne+ne.toUpperCase()+re},ie=(e=16,t=oe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;while(e--)n+=t[Math.random()*r|0];return n};function ae(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const se=e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=c(e)?[]:{};return O(e,((e,t)=>{const i=n(e,r+1);!d(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},le=l("AsyncFunction"),ue=e=>e&&(y(e)||m(e))&&m(e.then)&&m(e.catch);var ce={isArray:c,isArrayBuffer:f,isBuffer:h,isFormData:x,isArrayBufferView:p,isString:v,isNumber:g,isBoolean:b,isObject:y,isPlainObject:w,isReadableStream:T,isRequest:A,isResponse:F,isHeaders:R,isUndefined:d,isDate:S,isFile:_,isBlob:E,isRegExp:Y,isFunction:m,isStream:k,isURLSearchParams:I,isTypedArray:K,isFileList:C,forEach:O,merge:M,extend:L,trim:D,stripBOM:B,inherits:W,toFlatObject:j,kindOf:s,kindOfTest:l,endsWith:$,toArray:U,forEachEntry:z,matchAll:q,isHTMLForm:H,hasOwnProperty:X,hasOwnProp:X,reduceDescriptors:Q,freezeMethods:J,toObjectSet:Z,toCamelCase:G,noop:ee,toFiniteNumber:te,findKey:V,global:P,isContextDefined:N,ALPHABET:oe,generateString:ie,isSpecCompliantForm:ae,toJSONObject:se,isAsyncFn:le,isThenable:ue};function de(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}ce.inherits(de,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ce.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const he=de.prototype,fe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{fe[e]={value:e}})),Object.defineProperties(de,fe),Object.defineProperty(he,"isAxiosError",{value:!0}),de.from=(e,t,n,r,o,i)=>{const a=Object.create(he);return ce.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),de.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};var pe=de,ve=null;function me(e){return ce.isPlainObject(e)||ce.isArray(e)}function ge(e){return ce.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,n){return e?e.concat(t).map((function(e,t){return e=ge(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function be(e){return ce.isArray(e)&&!e.some(me)}const we=ce.toFlatObject(ce,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Se(e,t,n){if(!ce.isObject(e))throw new TypeError("target must be an object");t=t||new(ve||FormData),n=ce.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!ce.isUndefined(t[e])}));const r=n.metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,s=n.Blob||"undefined"!==typeof Blob&&Blob,l=s&&ce.isSpecCompliantForm(t);if(!ce.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(ce.isDate(e))return e.toISOString();if(!l&&ce.isBlob(e))throw new pe("Blob is not supported. Use a Buffer instead.");return ce.isArrayBuffer(e)||ce.isTypedArray(e)?l&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,o){let s=e;if(e&&!o&&"object"===typeof e)if(ce.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(ce.isArray(e)&&be(e)||(ce.isFileList(e)||ce.endsWith(n,"[]"))&&(s=ce.toArray(e)))return n=ge(n),s.forEach((function(e,r){!ce.isUndefined(e)&&null!==e&&t.append(!0===a?ye([n],r,i):null===a?n:n+"[]",u(e))})),!1;return!!me(e)||(t.append(ye(o,n,i),u(e)),!1)}const d=[],h=Object.assign(we,{defaultVisitor:c,convertValue:u,isVisitable:me});function f(e,n){if(!ce.isUndefined(e)){if(-1!==d.indexOf(e))throw Error("Circular reference detected in "+n.join("."));d.push(e),ce.forEach(e,(function(e,r){const i=!(ce.isUndefined(e)||null===e)&&o.call(t,e,ce.isString(r)?r.trim():r,n,h);!0===i&&f(e,n?n.concat(r):[r])})),d.pop()}}if(!ce.isObject(e))throw new TypeError("data must be an object");return f(e),t}var _e=Se;function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ce(e,t){this._pairs=[],e&&_e(e,this,t)}const ke=Ce.prototype;ke.append=function(e,t){this._pairs.push([e,t])},ke.toString=function(e){const t=e?function(t){return e.call(this,t,Ee)}:Ee;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var xe=Ce;function Ie(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Te(e,t,n){if(!t)return e;const r=n&&n.encode||Ie,o=n&&n.serialize;let i;if(i=o?o(t,n):ce.isURLSearchParams(t)?t.toString():new xe(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}class Ae{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ce.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var Fe=Ae,Re={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},De=(n(6984),n(7566),n(8721),"undefined"!==typeof URLSearchParams?URLSearchParams:xe),Oe="undefined"!==typeof FormData?FormData:null,Ve="undefined"!==typeof Blob?Blob:null,Pe={isBrowser:!0,classes:{URLSearchParams:De,FormData:Oe,Blob:Ve},protocols:["http","https","file","blob","url","data"]};const Ne="undefined"!==typeof window&&"undefined"!==typeof document,Me=(e=>Ne&&["ReactNative","NativeScript","NS"].indexOf(e)<0)("undefined"!==typeof navigator&&navigator.product),Le=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)(),Be=Ne&&window.location.href||"http://localhost";var We={...r,...Pe};function je(e,t){return _e(e,new We.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return We.isNode&&ce.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function $e(e){return ce.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Ue(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Ke(e){function t(e,n,r,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),s=o>=e.length;if(i=!i&&ce.isArray(r)?r.length:i,s)return ce.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!a;r[i]&&ce.isObject(r[i])||(r[i]=[]);const l=t(e,n,r[i],o);return l&&ce.isArray(r[i])&&(r[i]=Ue(r[i])),!a}if(ce.isFormData(e)&&ce.isFunction(e.entries)){const n={};return ce.forEachEntry(e,((e,r)=>{t($e(e),r,n,0)})),n}return null}var ze=Ke;function qe(e,t,n){if(ce.isString(e))try{return(t||JSON.parse)(e),ce.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const He={transitional:Re,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=ce.isObject(e);o&&ce.isHTMLForm(e)&&(e=new FormData(e));const i=ce.isFormData(e);if(i)return r?JSON.stringify(ze(e)):e;if(ce.isArrayBuffer(e)||ce.isBuffer(e)||ce.isStream(e)||ce.isFile(e)||ce.isBlob(e)||ce.isReadableStream(e))return e;if(ce.isArrayBufferView(e))return e.buffer;if(ce.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return je(e,this.formSerializer).toString();if((a=ce.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return _e(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),qe(e)):e}],transformResponse:[function(e){const t=this.transitional||He.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(ce.isResponse(e)||ce.isReadableStream(e))return e;if(e&&ce.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,i=!n&&r;try{return JSON.parse(e)}catch(o){if(i){if("SyntaxError"===o.name)throw pe.from(o,pe.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:We.classes.FormData,Blob:We.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ce.forEach(["delete","get","head","post","put","patch"],(e=>{He.headers[e]={}}));var Ge=He;const Xe=ce.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ye=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&Xe[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const Qe=Symbol("internals");function Je(e){return e&&String(e).trim().toLowerCase()}function Ze(e){return!1===e||null==e?e:ce.isArray(e)?e.map(Ze):String(e)}function et(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}const tt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function nt(e,t,n,r,o){return ce.isFunction(r)?r.call(this,t,n):(o&&(t=n),ce.isString(t)?ce.isString(r)?-1!==t.indexOf(r):ce.isRegExp(r)?r.test(t):void 0:void 0)}function rt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function ot(e,t){const n=ce.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}class it{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=Je(t);if(!o)throw new Error("header name must be a non-empty string");const i=ce.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=Ze(e))}const i=(e,t)=>ce.forEach(e,((e,n)=>o(e,n,t)));if(ce.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(ce.isString(e)&&(e=e.trim())&&!tt(e))i(Ye(e),t);else if(ce.isHeaders(e))for(const[a,s]of e.entries())o(s,a,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=Je(e),e){const n=ce.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return et(e);if(ce.isFunction(t))return t.call(this,e,n);if(ce.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Je(e),e){const n=ce.findKey(this,e);return!(!n||void 0===this[n]||t&&!nt(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=Je(e),e){const o=ce.findKey(n,e);!o||t&&!nt(n,n[o],o,t)||(delete n[o],r=!0)}}return ce.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const o=t[n];e&&!nt(this,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return ce.forEach(this,((r,o)=>{const i=ce.findKey(n,o);if(i)return t[i]=Ze(r),void delete t[o];const a=e?rt(o):String(o).trim();a!==o&&delete t[o],t[a]=Ze(r),n[a]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ce.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&ce.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[Qe]=this[Qe]={accessors:{}},n=t.accessors,r=this.prototype;function o(e){const t=Je(e);n[t]||(ot(r,e),n[t]=!0)}return ce.isArray(e)?e.forEach(o):o(e),this}}it.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ce.reduceDescriptors(it.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),ce.freezeMethods(it);var at=it;function st(e,t){const n=this||Ge,r=t||n,o=at.from(r.headers);let i=r.data;return ce.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function lt(e){return!(!e||!e.__CANCEL__)}function ut(e,t,n){pe.call(this,null==e?"canceled":e,pe.ERR_CANCELED,t,n),this.name="CanceledError"}ce.inherits(ut,pe,{__CANCEL__:!0});var ct=ut;function dt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new pe("Request failed with status code "+n.status,[pe.ERR_BAD_REQUEST,pe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}function ht(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ft(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),u=r[a];o||(o=l),n[i]=s,r[i]=l;let c=a,d=0;while(c!==i)d+=n[c++],c%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),l-o<t)return;const h=u&&l-u;return h?Math.round(1e3*d/h):void 0}}var pt=ft;function vt(e,t){let n=0;const r=1e3/t;let o=null;return function(){const t=!0===this,i=Date.now();if(t||i-n>r)return o&&(clearTimeout(o),o=null),n=i,e.apply(null,arguments);o||(o=setTimeout((()=>(o=null,n=Date.now(),e.apply(null,arguments))),r-(i-n)))}}var mt=vt,gt=(e,t,n=3)=>{let r=0;const o=pt(50,250);return mt((n=>{const i=n.loaded,a=n.lengthComputable?n.total:void 0,s=i-r,l=o(s),u=i<=a;r=i;const c={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-i)/l:void 0,event:n,lengthComputable:null!=a};c[t?"download":"upload"]=!0,e(c)}),n)},yt=(n(4979),We.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=ce.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}()),bt=We.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];ce.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),ce.isString(r)&&a.push("path="+r),ce.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function wt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function St(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function _t(e,t){return e&&!wt(t)?St(e,t):t}const Et=e=>e instanceof at?{...e}:e;function Ct(e,t){t=t||{};const n={};function r(e,t,n){return ce.isPlainObject(e)&&ce.isPlainObject(t)?ce.merge.call({caseless:n},e,t):ce.isPlainObject(t)?ce.merge({},t):ce.isArray(t)?t.slice():t}function o(e,t,n){return ce.isUndefined(t)?ce.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!ce.isUndefined(t))return r(void 0,t)}function a(e,t){return ce.isUndefined(t)?ce.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t)=>o(Et(e),Et(t),!0)};return ce.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=l[r]||o,a=i(e[r],t[r],r);ce.isUndefined(a)&&i!==s||(n[r]=a)})),n}var kt=e=>{const t=Ct({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:s,auth:l}=t;if(t.headers=s=at.from(s),t.url=Te(_t(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),ce.isFormData(r))if(We.hasStandardBrowserEnv||We.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(n=s.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(We.hasStandardBrowserEnv&&(o&&ce.isFunction(o)&&(o=o(t)),o||!1!==o&&yt(t.url))){const e=i&&a&&bt.read(a);e&&s.set(i,e)}return t};const xt="undefined"!==typeof XMLHttpRequest;var It=xt&&function(e){return new Promise((function(t,n){const r=kt(e);let o=r.data;const i=at.from(r.headers).normalize();let a,{responseType:s}=r;function l(){r.cancelToken&&r.cancelToken.unsubscribe(a),r.signal&&r.signal.removeEventListener("abort",a)}let u=new XMLHttpRequest;function c(){if(!u)return;const r=at.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),o=s&&"text"!==s&&"json"!==s?u.response:u.responseText,i={data:o,status:u.status,statusText:u.statusText,headers:r,config:e,request:u};dt((function(e){t(e),l()}),(function(e){n(e),l()}),i),u=null}u.open(r.method.toUpperCase(),r.url,!0),u.timeout=r.timeout,"onloadend"in u?u.onloadend=c:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(c)},u.onabort=function(){u&&(n(new pe("Request aborted",pe.ECONNABORTED,r,u)),u=null)},u.onerror=function(){n(new pe("Network Error",pe.ERR_NETWORK,r,u)),u=null},u.ontimeout=function(){let e=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const t=r.transitional||Re;r.timeoutErrorMessage&&(e=r.timeoutErrorMessage),n(new pe(e,t.clarifyTimeoutError?pe.ETIMEDOUT:pe.ECONNABORTED,r,u)),u=null},void 0===o&&i.setContentType(null),"setRequestHeader"in u&&ce.forEach(i.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),ce.isUndefined(r.withCredentials)||(u.withCredentials=!!r.withCredentials),s&&"json"!==s&&(u.responseType=r.responseType),"function"===typeof r.onDownloadProgress&&u.addEventListener("progress",gt(r.onDownloadProgress,!0)),"function"===typeof r.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",gt(r.onUploadProgress)),(r.cancelToken||r.signal)&&(a=t=>{u&&(n(!t||t.type?new ct(null,e,u):t),u.abort(),u=null)},r.cancelToken&&r.cancelToken.subscribe(a),r.signal&&(r.signal.aborted?a():r.signal.addEventListener("abort",a)));const d=ht(r.url);d&&-1===We.protocols.indexOf(d)?n(new pe("Unsupported protocol "+d+":",pe.ERR_BAD_REQUEST,e)):u.send(o||null)}))};const Tt=(e,t)=>{let n,r=new AbortController;const o=function(e){if(!n){n=!0,a();const t=e instanceof Error?e:this.reason;r.abort(t instanceof pe?t:new ct(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{o(new pe(`timeout ${t} of ms exceeded`,pe.ETIMEDOUT))}),t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e&&(e.removeEventListener?e.removeEventListener("abort",o):e.unsubscribe(o))})),e=null)};e.forEach((e=>e&&e.addEventListener&&e.addEventListener("abort",o)));const{signal:s}=r;return s.unsubscribe=a,[s,()=>{i&&clearTimeout(i),i=null}]};var At=Tt;const Ft=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;while(o<n)r=o+t,yield e.slice(o,r),o=r},Rt=async function*(e,t,n){for await(const r of e)yield*Ft(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Dt=(e,t,n,r,o)=>{const i=Rt(e,t,o);let a=0;return new ReadableStream({type:"bytes",async pull(e){const{done:t,value:o}=await i.next();if(t)return e.close(),void r();let s=o.byteLength;n&&n(a+=s),e.enqueue(new Uint8Array(o))},cancel(e){return r(e),i.return()}},{highWaterMark:2})},Ot=(e,t)=>{const n=null!=e;return r=>setTimeout((()=>t({lengthComputable:n,total:e,loaded:r})))},Vt="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Pt=Vt&&"function"===typeof ReadableStream,Nt=Vt&&("function"===typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Mt=Pt&&(()=>{let e=!1;const t=new Request(We.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Lt=65536,Bt=Pt&&!!(()=>{try{return ce.isReadableStream(new Response("").body)}catch(e){}})(),Wt={stream:Bt&&(e=>e.body)};Vt&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach((t=>{!Wt[t]&&(Wt[t]=ce.isFunction(e[t])?e=>e[t]():(e,n)=>{throw new pe(`Response type '${t}' is not supported`,pe.ERR_NOT_SUPPORT,n)})}))})(new Response);const jt=async e=>null==e?0:ce.isBlob(e)?e.size:ce.isSpecCompliantForm(e)?(await new Request(e).arrayBuffer()).byteLength:ce.isArrayBufferView(e)?e.byteLength:(ce.isURLSearchParams(e)&&(e+=""),ce.isString(e)?(await Nt(e)).byteLength:void 0),$t=async(e,t)=>{const n=ce.toFiniteNumber(e.getContentLength());return null==n?jt(t):n};var Ut=Vt&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:h}=kt(e);u=u?(u+"").toLowerCase():"text";let f,p,[v,m]=o||i||a?At([o,i],a):[];const g=()=>{!f&&setTimeout((()=>{v&&v.unsubscribe()})),f=!0};let y;try{if(l&&Mt&&"get"!==n&&"head"!==n&&0!==(y=await $t(c,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});ce.isFormData(r)&&(e=n.headers.get("content-type"))&&c.setContentType(e),n.body&&(r=Dt(n.body,Lt,Ot(y,gt(l)),null,Nt))}ce.isString(d)||(d=d?"cors":"omit"),p=new Request(t,{...h,signal:v,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:d});let o=await fetch(p);const i=Bt&&("stream"===u||"response"===u);if(Bt&&(s||i)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=o[t]}));const t=ce.toFiniteNumber(o.headers.get("content-length"));o=new Response(Dt(o.body,Lt,s&&Ot(t,gt(s,!0)),i&&g,Nt),e)}u=u||"text";let a=await Wt[ce.findKey(Wt,u)||"text"](o,e);return!i&&g(),m&&m(),await new Promise(((t,n)=>{dt(t,n,{data:a,headers:at.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:p})}))}catch(b){if(g(),b&&"TypeError"===b.name&&/fetch/i.test(b.message))throw Object.assign(new pe("Network Error",pe.ERR_NETWORK,e,p),{cause:b.cause||b});throw pe.from(b,b&&b.code,e,p)}});const Kt={http:ve,xhr:It,fetch:Ut};ce.forEach(Kt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const zt=e=>`- ${e}`,qt=e=>ce.isFunction(e)||null===e||!1===e;var Ht={getAdapter:e=>{e=ce.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!qt(n)&&(r=Kt[(t=String(n)).toLowerCase()],void 0===r))throw new pe(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(zt).join("\n"):" "+zt(e[0]):"as no adapter specified";throw new pe("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:Kt};function Gt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ct(null,e)}function Xt(e){Gt(e),e.headers=at.from(e.headers),e.data=st.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=Ht.getAdapter(e.adapter||Ge.adapter);return t(e).then((function(t){return Gt(e),t.data=st.call(e,e.transformResponse,t),t.headers=at.from(t.headers),t}),(function(t){return lt(t)||(Gt(e),t&&t.response&&(t.response.data=st.call(e,e.transformResponse,t.response),t.response.headers=at.from(t.response.headers))),Promise.reject(t)}))}const Yt="1.7.2",Qt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Qt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Jt={};function Zt(e,t,n){if("object"!==typeof e)throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;while(o-- >0){const i=r[o],a=t[i];if(a){const t=e[i],n=void 0===t||a(t,i,e);if(!0!==n)throw new pe("option "+i+" must be "+n,pe.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new pe("Unknown option "+i,pe.ERR_BAD_OPTION)}}Qt.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Yt+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new pe(r(o," has been removed"+(t?" in "+t:"")),pe.ERR_DEPRECATED);return t&&!Jt[o]&&(Jt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var en={assertOptions:Zt,validators:Qt};const tn=en.validators;class nn{constructor(e){this.defaults=e,this.interceptors={request:new Fe,response:new Fe}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=Ct(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&en.assertOptions(n,{silentJSONParsing:tn.transitional(tn.boolean),forcedJSONParsing:tn.transitional(tn.boolean),clarifyTimeoutError:tn.transitional(tn.boolean)},!1),null!=r&&(ce.isFunction(r)?t.paramsSerializer={serialize:r}:en.assertOptions(r,{encode:tn.function,serialize:tn.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&ce.merge(o.common,o[t.method]);o&&ce.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=at.concat(i,o);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const l=[];let u;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let c,d=0;if(!s){const e=[Xt.bind(this),void 0];e.unshift.apply(e,a),e.push.apply(e,l),c=e.length,u=Promise.resolve(t);while(d<c)u=u.then(e[d++],e[d++]);return u}c=a.length;let h=t;d=0;while(d<c){const e=a[d++],t=a[d++];try{h=e(h)}catch(f){t.call(this,f);break}}try{u=Xt.call(this,h)}catch(f){return Promise.reject(f)}d=0,c=l.length;while(d<c)u=u.then(l[d++],l[d++]);return u}getUri(e){e=Ct(this.defaults,e);const t=_t(e.baseURL,e.url);return Te(t,e.params,e.paramsSerializer)}}ce.forEach(["delete","get","head","options"],(function(e){nn.prototype[e]=function(t,n){return this.request(Ct(n||{},{method:e,url:t,data:(n||{}).data}))}})),ce.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ct(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}nn.prototype[e]=t(),nn.prototype[e+"Form"]=t(!0)}));var rn=nn;class on{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new ct(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new on((function(t){e=t}));return{token:t,cancel:e}}}var an=on;function sn(e){return function(t){return e.apply(null,t)}}function ln(e){return ce.isObject(e)&&!0===e.isAxiosError}const un={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(un).forEach((([e,t])=>{un[t]=e}));var cn=un;function dn(e){const t=new rn(e),n=o(rn.prototype.request,t);return ce.extend(n,rn.prototype,t,{allOwnKeys:!0}),ce.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return dn(Ct(e,t))},n}const hn=dn(Ge);hn.Axios=rn,hn.CanceledError=ct,hn.CancelToken=an,hn.isCancel=lt,hn.VERSION=Yt,hn.toFormData=_e,hn.AxiosError=pe,hn.Cancel=hn.CanceledError,hn.all=function(e){return Promise.all(e)},hn.spread=sn,hn.isAxiosError=ln,hn.mergeConfig=Ct,hn.AxiosHeaders=at,hn.formToJSON=e=>ze(ce.isHTMLForm(e)?new FormData(e):e),hn.getAdapter=Ht.getAdapter,hn.HttpStatusCode=cn,hn.default=hn;var fn=hn},6400:function(e,t,n){n.d(t,{Wp:function(){return r.Wp}});var r=n(3405),o="firebase",i="10.12.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(o,i,"app")},2126:function(e,t,n){n.d(t,{eJ:function(){return Bt},xI:function(){return Jr},hg:function(){return Ut},J1:function(){return Lt},x9:function(){return Wt},CI:function(){return Kt}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(6984),n(7566),n(8721);var r=n(3405),o=n(4046),i=n(1363);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=n(852);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=l,c=new o.FA("auth","Firebase",l()),d=new i.Vy("@firebase/auth");function h(e,...t){d.logLevel<=i.$b.WARN&&d.warn(`Auth (${r.MF}): ${e}`,...t)}function f(e,...t){d.logLevel<=i.$b.ERROR&&d.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw y(e,...t)}function v(e,...t){return y(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},u()),{[t]:n}),i=new o.FA("auth","Firebase",r);return i.create(t,{appName:e.name})}function g(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function b(e,t,...n){if(!e)throw y(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function S(e,t){e||w(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,o.sr)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.shortDelay=e,this.longDelay=t,S(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,o.jZ)()||(0,o.lV)()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){S(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},R=new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function O(e,t,n,r,i={}){return V(e,i,(async()=>{let i={},a={};r&&("GET"===t?a=r:i={body:JSON.stringify(r)});const s=(0,o.Am)(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),A.fetch()(N(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},i))}))}async function V(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},F),t);try{const t=new L(e),o=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await o.json();if("needConfirmation"in i)throw B(e,"account-exists-with-different-credential",i);if(o.ok&&!("errorMessage"in i))return i;{const t=o.ok?i.errorMessage:i.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw B(e,"user-disabled",i);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw m(e,s,a);p(e,s)}}catch(i){if(i instanceof o.g)throw i;p(e,"network-request-failed",{message:String(i)})}}async function P(e,t,n,r,o={}){const i=await O(e,t,n,r,o);return"mfaPendingCredential"in i&&p(e,"multi-factor-auth-required",{_serverResponse:i}),i}function N(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?T(e.config,o):`${e.config.apiScheme}://${o}`}function M(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class L{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(v(this.auth,"network-request-failed"))),R.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=v(e,t,r);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){return void 0!==e&&void 0!==e.enterprise}class j{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return M(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return O(e,"GET","/v2/recaptchaConfig",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return O(e,"POST","/v1/accounts:delete",t)}async function K(e,t){return O(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t=!1){const n=(0,o.Ku)(e),r=await n.getIdToken(t),i=G(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"===typeof i.firebase?i.firebase:void 0,s=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:i,token:r,authTime:z(H(i.auth_time)),issuedAtTime:z(H(i.iat)),expirationTime:z(H(i.exp)),signInProvider:s||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function G(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,o.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(i){return f("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function X(e){const t=G(e);return b(t,"internal-error"),b("undefined"!==typeof t.exp,"internal-error"),b("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof o.g&&Q(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Q({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){var t;const n=e.auth,r=await e.getIdToken(),o=await Y(e,K(n,{idToken:r}));b(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const a=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?re(i.providerUserInfo):[],s=ne(e.providerData,a),l=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length),c=!!l&&u,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Z(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function te(e){const t=(0,o.Ku)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ne(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function re(e){return e.map((e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const n=await V(e,{},(async()=>{const n=(0,o.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=N(e,r,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(a,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ie(e,t){return O(e,"POST","/v2/accounts:revokeToken",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b("undefined"!==typeof e.idToken,"internal-error"),b("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){b(0!==e.length,"internal-error");const t=X(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await oe(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new ae;return n&&(b("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(b("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(b("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t){b("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class le{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Z(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Y(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return te(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(g(this.auth));const e=await this.getIdToken();return await Y(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,a,s,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,v=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:S,providerData:_,stsTokenManager:E}=t;b(y&&E,e,"internal-error");const C=ae.fromJSON(this.name,E);b("string"===typeof y,e,"internal-error"),se(c,e.name),se(d,e.name),b("boolean"===typeof w,e,"internal-error"),b("boolean"===typeof S,e,"internal-error"),se(h,e.name),se(f,e.name),se(p,e.name),se(v,e.name),se(m,e.name),se(g,e.name);const k=new le({uid:y,auth:e,email:d,emailVerified:w,displayName:c,isAnonymous:S,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:C,createdAt:m,lastLoginAt:g});return _&&Array.isArray(_)&&(k.providerData=_.map((e=>Object.assign({},e)))),v&&(k._redirectEventId=v),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new ae;r.updateFromServerResponse(t);const o=new le({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(o),o}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];b(void 0!==r.localId,"internal-error");const o=void 0!==r.providerUserInfo?re(r.providerUserInfo):[],i=!(r.email&&r.passwordHash)&&!(null===o||void 0===o?void 0:o.length),a=new ae;a.updateFromIdToken(n);const s=new le({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:i}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Z(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===o||void 0===o?void 0:o.length)};return Object.assign(s,l),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Map;function ce(e){S(e instanceof Function,"Expected a class definition");let t=ue.get(e);return t?(S(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ue.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const he=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,o),this.fullPersistenceKey=fe("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(ce(he),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=r[0]||ce(he);const i=fe(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const t=await u._get(i);if(t){const n=le._fromJSON(e,t);u!==o&&(a=n),o=u;break}}catch(l){}const s=r.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&s.length?(o=s[0],a&&await o._set(i,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(i)}catch(l){}}))),new pe(o,e,n)):new pe(o,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Se(t))return"Blackberry";if(_e(t))return"Webos";if(ge(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function me(e=(0,o.ZQ)()){return/firefox\//i.test(e)}function ge(e=(0,o.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=(0,o.ZQ)()){return/crios\//i.test(e)}function be(e=(0,o.ZQ)()){return/iemobile/i.test(e)}function we(e=(0,o.ZQ)()){return/android/i.test(e)}function Se(e=(0,o.ZQ)()){return/blackberry/i.test(e)}function _e(e=(0,o.ZQ)()){return/webos/i.test(e)}function Ee(e=(0,o.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ce(e=(0,o.ZQ)()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ke(){return(0,o.lT)()&&10===document.documentMode}function xe(e=(0,o.ZQ)()){return Ee(e)||we(e)||_e(e)||Se(e)||/windows phone/i.test(e)||be(e)}function Ie(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t=[]){let n;switch(e){case"Browser":n=ve((0,o.ZQ)());break;case"Worker":n=`${ve((0,o.ZQ)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(o){r(o)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t={}){return O(e,"GET","/v2/passwordPolicy",D(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=6;class De{constructor(e){var t,n,r,o;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=i.minPasswordLength)&&void 0!==t?t:Re,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),void 0!==i.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),void 0!==i.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),void 0!==i.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),void 0!==i.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(o=e.forceUpgradeOnSignin)&&void 0!==o&&o,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,o,i,a;const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(n=s.meetsMaxPasswordLength)||void 0===n||n),s.isValid&&(s.isValid=null===(r=s.containsLowercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(o=s.containsUppercaseLetter)||void 0===o||o),s.isValid&&(s.isValid=null===(i=s.containsNumericCharacter)||void 0===i||i),s.isValid&&(s.isValid=null===(a=s.containsNonAlphanumericCharacter)||void 0===a||a),s}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.beforeStateQueue=new Ae(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ce(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await K(this,{idToken:e}),n=await le._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let o=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===o||void 0===o?void 0:o._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==r||!(null===a||void 0===a?void 0:a.user)||(o=a.user,i=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(o)}catch(a){o=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(a)))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(g(this));const t=e?(0,o.Ku)(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(g(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(g(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ce(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fe(this),t=new De(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new o.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await ie(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ce(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[ce(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t);let i=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(a,this,"internal-error"),a.then((()=>{i||o(this.currentUser)})),"function"===typeof t){const o=e.addObserver(t,n,r);return()=>{i=!0,o()}}{const n=e.addObserver(t);return()=>{i=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Te(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&h(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Ve(e){return(0,o.Ku)(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,o.tD)((e=>this.observer=e))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ne={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Me(e){Ne=e}function Le(e){return Ne.loadJS(e)}function Be(){return Ne.recaptchaEnterpriseScript}function We(){return Ne.gapiScript}function je(e){return`__${e}${Math.floor(1e6*Math.random())}`}const $e="recaptcha-enterprise",Ue="NO_RECAPTCHA";class Ke{constructor(e){this.type=$e,this.auth=Ve(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{$(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new j(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const o=window.grecaptcha;W(o)?o.enterprise.ready((()=>{o.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Ue)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,o)=>{n(this.auth).then((n=>{if(!t&&W(window.grecaptcha))r(n,e,o);else{if("undefined"===typeof window)return void o(new Error("RecaptchaVerifier is only supported in browser"));let t=Be();0!==t.length&&(t+=n),Le(t).then((()=>{r(n,e,o)})).catch((e=>{o(e)}))}})).catch((e=>{o(e)}))}))}}async function ze(e,t,n,r=!1){const o=new Ke(e);let i;try{i=await o.verify(n)}catch(s){i=await o.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function qe(e,t,n,r){var o;if(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ze(e,t,n,"getOobCode"===n);return r(e,o)}return r(e,t).catch((async o=>{if("auth/missing-recaptcha-token"===o.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ze(e,t,n,"getOobCode"===n);return r(e,o)}return Promise.reject(o)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,o.bD)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const i=n.initialize({options:t});return i}function Ge(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ce);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Xe(e,t,n){const r=Ve(e);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!!(null===n||void 0===n?void 0:n.disableWarnings),i=Ye(t),{host:a,port:s}=Qe(t),l=null===s?"":`:${s}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||Ze()}function Ye(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Qe(e){const t=Ye(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const e=o[1];return{host:e,port:Je(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Je(t)}}}function Je(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return O(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nt(e,t){return P(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}async function rt(e,t){return O(e,"POST","/v1/accounts:sendOobCode",D(e,t))}async function ot(e,t){return rt(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function at(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends et{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new st(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new st(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qe(e,t,"signInWithPassword",nt);case"emailLink":return it(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qe(e,n,"signUpPassword",tt);case"emailLink":return at(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t){return P(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="http://localhost";class ct extends et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=a(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new ct(n,r);return i.idToken=o.idToken||void 0,i.accessToken=o.accessToken||void 0,i.secret=o.secret,i.nonce=o.nonce,i.pendingToken=o.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return lt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,lt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lt(e,t)}buildRequest(){const e={requestUri:ut,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,o.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t){return O(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function ht(e,t){return P(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function ft(e,t){const n=await P(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}const pt={["USER_NOT_FOUND"]:"user-not-found"};async function vt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return P(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),pt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new mt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new mt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ht(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ft(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return vt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new mt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yt(e){const t=(0,o.I9)((0,o.hp)(e))["link"],n=t?(0,o.I9)((0,o.hp)(t))["deep_link_id"]:null,r=(0,o.I9)((0,o.hp)(e))["deep_link_id"],i=r?(0,o.I9)((0,o.hp)(r))["link"]:null;return i||r||n||t||e}class bt{constructor(e){var t,n,r,i,a,s;const l=(0,o.I9)((0,o.hp)(e)),u=null!==(t=l["apiKey"])&&void 0!==t?t:null,c=null!==(n=l["oobCode"])&&void 0!==n?n:null,d=gt(null!==(r=l["mode"])&&void 0!==r?r:null);b(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=null!==(i=l["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(a=l["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(s=l["tenantId"])&&void 0!==s?s:null}static parseLink(e){const t=yt(e);try{return new bt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(){this.providerId=wt.PROVIDER_ID}static credential(e,t){return st._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=bt.parseLink(t);return b(n,"argument-error"),st._fromEmailAndCode(e,n.code,n.tenantId)}}wt.PROVIDER_ID="password",wt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",wt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends St{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends _t{constructor(){super("facebook.com")}static credential(e){return ct._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch(t){return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com",Et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends _t{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ct._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ct.credential(t,n)}catch(r){return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com",Ct.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends _t{constructor(){super("github.com")}static credential(e){return ct._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch(t){return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com",kt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt extends _t{constructor(){super("twitter.com")}static credential(e,t){return ct._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return xt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function It(e,t){return P(e,"POST","/v1/accounts:signUp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.TWITTER_SIGN_IN_METHOD="twitter.com",xt.PROVIDER_ID="twitter.com";class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await le._fromIdTokenResponse(e,n,r),i=At(n),a=new Tt({user:o,providerId:i,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=At(n);return new Tt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function At(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft extends o.g{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ft.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ft(e,t,n,r)}}function Rt(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ft._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t,n=!1){const r=await Y(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Tt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(e,t,n=!1){const{auth:o}=e;if((0,r.xZ)(o.app))return Promise.reject(g(o));const i="reauthenticate";try{const r=await Y(e,Rt(o,i,t,e),n);b(r.idToken,o,"internal-error");const a=G(r.idToken);b(a,o,"internal-error");const{sub:s}=a;return b(e.uid===s,o,"user-mismatch"),Tt._forOperation(e,i,r)}catch(a){throw"auth/user-not-found"===(null===a||void 0===a?void 0:a.code)&&p(o,"user-mismatch"),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(g(e));const o="signIn",i=await Rt(e,o,t),a=await Tt._fromIdTokenResponse(e,o,i);return n||await e._updateCurrentUser(a.user),a}async function Pt(e,t){return Vt(Ve(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(e,t,n){var r;b((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),b("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(b(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(b(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(e){const t=Ve(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Lt(e,t,n){const r=Ve(e),o={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&Nt(r,o,n),await qe(r,o,"getOobCode",ot)}async function Bt(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(g(e));const o=Ve(e),i={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},a=qe(o,i,"signUpPassword",It),s=await a.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Mt(e),t})),l=await Tt._fromIdTokenResponse(o,"signIn",s);return await o._updateCurrentUser(l.user),l}function Wt(e,t,n){return(0,r.xZ)(e.app)?Promise.reject(g(e)):Pt((0,o.Ku)(e),wt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Mt(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e,t,n,r){return(0,o.Ku)(e).onIdTokenChanged(t,n,r)}function $t(e,t,n){return(0,o.Ku)(e).beforeAuthStateChanged(t,n)}function Ut(e,t,n,r){return(0,o.Ku)(e).onAuthStateChanged(t,n,r)}function Kt(e){return(0,o.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function qt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}function Ht(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function Gt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const Xt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xt,"1"),this.storage.removeItem(Xt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){const e=(0,o.ZQ)();return ge(e)||Ee(e)}const Jt=1e3,Zt=10;class en extends Yt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Qt()&&Ie(),this.fallbackToPolling=xe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);ke()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Zt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Jt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}en.type="LOCAL";const tn=en;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Yt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nn.type="SESSION";const rn=nn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new an(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(i).map((async e=>e(t.origin,o))),s=await on(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.receivers=[];class ln{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise(((a,s)=>{const l=sn("",20);r.port1.start();const u=setTimeout((()=>{s(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),o=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),a(t.data.response);break;default:clearTimeout(u),clearTimeout(o),s(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function cn(e){un().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return"undefined"!==typeof un()["WorkerGlobalScope"]&&"function"===typeof un()["importScripts"]}async function hn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function fn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function pn(){return dn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="firebaseLocalStorageDb",mn=1,gn="firebaseLocalStorage",yn="fbase_key";class bn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function wn(e,t){return e.transaction([gn],t?"readwrite":"readonly").objectStore(gn)}function Sn(){const e=indexedDB.deleteDatabase(vn);return new bn(e).toPromise()}function _n(){const e=indexedDB.open(vn,mn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(gn,{keyPath:yn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(gn)?t(n):(n.close(),await Sn(),t(await _n()))}))}))}async function En(e,t,n){const r=wn(e,!0).put({[yn]:t,value:n});return new bn(r).toPromise()}async function Cn(e,t){const n=wn(e,!1).get(t),r=await new bn(n).toPromise();return void 0===r?null:r.value}function kn(e,t){const n=wn(e,!0).delete(t);return new bn(n).toPromise()}const xn=800,In=3;class Tn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await _n()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>In)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=an._getInstance(pn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await hn(),!this.activeServiceWorker)return;this.sender=new ln(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&fn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _n();return await En(e,Xt,"1"),await kn(e,Xt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>En(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Cn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>kn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=wn(e,!1).getAll();return new bn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),xn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Tn.type="LOCAL";const An=Tn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function Rn(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}function Dn(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
je("rcb"),new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const On="recaptcha";async function Vn(e,t,n){var r;const o=await n.verify();try{let i;if(b("string"===typeof o,e,"argument-error"),b(n.type===On,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){b("enroll"===t.type,e,"internal-error");const n=await zt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{b("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;b(n,e,"missing-multi-factor-info");const a=await Fn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await dt(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn{constructor(e){this.providerId=Pn.PROVIDER_ID,this.auth=Ve(e)}verifyPhoneNumber(e,t){return Vn(this.auth,e,(0,o.Ku)(t))}static credential(e,t){return mt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pn.credentialFromTaggedObject(t)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?mt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nn(e,t){return t?ce(t):(b(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn.PROVIDER_ID="phone",Pn.PHONE_SIGN_IN_METHOD="phone";class Mn extends et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ln(e){return Vt(e.auth,new Mn(e),e.bypassAuthState)}function Bn(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),Ot(n,new Mn(e),e.bypassAuthState)}async function Wn(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),Dt(n,new Mn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:a}=e;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ln;case"linkViaPopup":case"linkViaRedirect":return Wn;case"reauthViaPopup":case"reauthViaRedirect":return Bn;default:p(this.auth,"internal-error")}}resolve(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new I(2e3,1e4);class Un extends jn{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){S(1===this.filter.length,"Popup operations only handle one event");const e=sn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(v(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,$n.get())};e()}}Un.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kn="pendingRedirect",zn=new Map;class qn extends jn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=zn.get(this.auth._key());if(!e){try{const t=await Hn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}zn.set(this.auth._key(),e)}return this.bypassAuthState||zn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hn(e,t){const n=Yn(t),r=Xn(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function Gn(e,t){zn.set(e._key(),t)}function Xn(e){return ce(e._redirectPersistence)}function Yn(e){return fe(Kn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(g(e));const o=Ve(e),i=Nn(o,t),a=new qn(o,i,n),s=await a.execute();return s&&!n&&(delete s.user._redirectEventId,await o._persistUserIfCurrent(s.user),await o._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jn=6e5;class Zn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!nr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!tr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(v(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jn&&this.cachedEventUids.clear(),this.cachedEventUids.has(er(e))}saveEventToCache(e){this.cachedEventUids.add(er(e)),this.lastProcessedEventTime=Date.now()}}function er(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function tr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function nr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(e,t={}){return O(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ir=/^https?/;async function ar(e){if(e.config.emulator)return;const{authorizedDomains:t}=await rr(e);for(const r of t)try{if(sr(r))return}catch(n){}p(e,"unauthorized-domain")}function sr(e){const t=_(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!ir.test(n))return!1;if(or.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new I(3e4,6e4);function ur(){const e=un().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function cr(e){return new Promise(((t,n)=>{var r,o,i;function a(){ur(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ur(),n(v(e,"network-request-failed"))},timeout:lr.get()})}if(null===(o=null===(r=un().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=un().gapi)||void 0===i?void 0:i.load)){const t=je("iframefcb");return un()[t]=()=>{gapi.load?a():n(v(e,"network-request-failed"))},Le(`${We()}?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw dr=null,e}))}let dr=null;function hr(e){return dr=dr||cr(e),dr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new I(5e3,15e3),pr="__/auth/iframe",vr="emulator/auth/iframe",mr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yr(e){const t=e.config;b(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?T(t,vr):`https://${e.config.authDomain}/${pr}`,i={apiKey:t.apiKey,appName:e.name,v:r.MF},a=gr.get(e.config.apiHost);a&&(i.eid=a);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${(0,o.Am)(i).slice(1)}`}async function br(e){const t=await hr(e),n=un().gapi;return b(n,e,"internal-error"),t.open({where:document.body,url:yr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=v(e,"network-request-failed"),i=un().setTimeout((()=>{r(o)}),fr.get());function a(){un().clearTimeout(i),n(t)}t.ping(a).then(a,(()=>{r(o)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sr=500,_r=600,Er="_blank",Cr="http://localhost";class kr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function xr(e,t,n,r=Sr,i=_r){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},wr),{width:r.toString(),height:i.toString(),top:a,left:s}),c=(0,o.ZQ)().toLowerCase();n&&(l=ye(c)?Er:n),me(c)&&(t=t||Cr,u.scrollbars="yes");const d=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ce(c)&&"_self"!==l)return Ir(t||"",l),new kr(null);const h=window.open(t||"",l,d);b(h,e,"popup-blocked");try{h.focus()}catch(f){}return new kr(h)}function Ir(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="__/auth/handler",Ar="emulator/auth/handler",Fr=encodeURIComponent("fac");async function Rr(e,t,n,i,a,s){b(e.config.authDomain,e,"auth-domain-config-required"),b(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:r.MF,eventId:a};if(t instanceof St){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,o.Im)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))l[e]=t}if(t instanceof _t){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const u=l;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const c=await e._getAppCheckToken(),d=c?`#${Fr}=${encodeURIComponent(c)}`:"";return`${Dr(e)}?${(0,o.Am)(u).slice(1)}${d}`}function Dr({config:e}){return e.emulator?T(e,Ar):`https://${e.authDomain}/${Tr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="webStorageSupport";class Vr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rn,this._completeRedirectFn=Qn,this._overrideRedirectResult=Gn}async _openPopup(e,t,n,r){var o;S(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Rr(e,t,n,_(),r);return xr(e,i,sn())}async _openRedirect(e,t,n,r){await this._originValidation(e);const o=await Rr(e,t,n,_(),r);return cn(o),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(S(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await br(e),n=new Zn(e);return t.register("authEvent",(t=>{b(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Or,{type:Or},(n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Or];void 0!==o&&t(!!o),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ar(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xe()||ge()||Ee()}}const Pr=Vr;class Nr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class Mr extends Nr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Mr(e)}_finalizeEnroll(e,t,n){return qt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Rn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Lr{constructor(){}static assertion(e){return Mr._fromCredential(e)}}Lr.FACTOR_ID="phone";class Br{static assertionForEnrollment(e,t){return Wr._fromSecret(e,t)}static assertionForSignIn(e,t){return Wr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;b("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Ht(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return jr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Br.FACTOR_ID="totp";class Wr extends Nr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Wr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Wr(t,e)}async _finalizeEnroll(e,t,n){return b("undefined"!==typeof this.secret,e,"argument-error"),Gt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){b(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Dn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class jr{constructor(e,t,n,r,o,i,a){this.sessionInfo=i,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(e,t){return new jr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return($r(e)||$r(t))&&(r=!0),r&&($r(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),$r(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function $r(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Ur="@firebase/auth",Kr="1.7.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hr(e){(0,r.om)(new s.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:a,authDomain:s}=r.options;b(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Te(e)},u=new Oe(r,o,i,l);return Ge(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new s.uA("auth-internal",(e=>{const t=Ve(e.getProvider("auth").getImmediate());return(e=>new zr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Ur,Kr,qr(e)),(0,r.KO)(Ur,Kr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=300,Xr=(0,o.XA)("authIdTokenMaxAge")||Gr;let Yr=null;const Qr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Xr)return;const o=null===n||void 0===n?void 0:n.token;Yr!==o&&(Yr=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Jr(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=He(e,{popupRedirectResolver:Pr,persistence:[An,tn,rn]}),i=(0,o.XA)("authTokenSyncURL");if(i&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(i,location.origin);if(location.origin===e.origin){const t=Qr(e.toString());$t(n,t,(()=>t(n.currentUser))),jt(n,(e=>t(e)))}}const a=(0,o.Tj)("auth");return a&&Xe(n,`http://${a}`),n}function Zr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Me({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=v("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Zr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Hr("Browser")},7617:function(e,t,n){n.d(t,{gS:function(){return Qs},rJ:function(){return Ka},kd:function(){return Ys},H9:function(){return za},x7:function(){return zs},GG:function(){return Hs},aU:function(){return Ga},My:function(){return Vs},P:function(){return As},O5:function(){return el},BN:function(){return Gs},mZ:function(){return Xs},_M:function(){return Rs}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4979);var r,o,i=n(3405),a=n(852),s=n(1363),l=n(4046),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},c={};(function(){var e;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function t(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var o=Array(arguments.length-2),i=2;i<arguments.length;i++)o[i-2]=arguments[i];return t.prototype[n].apply(e,o)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function a(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var o=0;16>o;++o)r[o]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(o=0;16>o;++o)r[o]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],o=e.g[2];var i=e.g[3],a=t+(i^n&(o^i))+r[0]+3614090360&4294967295;t=n+(a<<7&4294967295|a>>>25),a=i+(o^t&(n^o))+r[1]+3905402710&4294967295,i=t+(a<<12&4294967295|a>>>20),a=o+(n^i&(t^n))+r[2]+606105819&4294967295,o=i+(a<<17&4294967295|a>>>15),a=n+(t^o&(i^t))+r[3]+3250441966&4294967295,n=o+(a<<22&4294967295|a>>>10),a=t+(i^n&(o^i))+r[4]+4118548399&4294967295,t=n+(a<<7&4294967295|a>>>25),a=i+(o^t&(n^o))+r[5]+1200080426&4294967295,i=t+(a<<12&4294967295|a>>>20),a=o+(n^i&(t^n))+r[6]+2821735955&4294967295,o=i+(a<<17&4294967295|a>>>15),a=n+(t^o&(i^t))+r[7]+4249261313&4294967295,n=o+(a<<22&4294967295|a>>>10),a=t+(i^n&(o^i))+r[8]+1770035416&4294967295,t=n+(a<<7&4294967295|a>>>25),a=i+(o^t&(n^o))+r[9]+2336552879&4294967295,i=t+(a<<12&4294967295|a>>>20),a=o+(n^i&(t^n))+r[10]+4294925233&4294967295,o=i+(a<<17&4294967295|a>>>15),a=n+(t^o&(i^t))+r[11]+2304563134&4294967295,n=o+(a<<22&4294967295|a>>>10),a=t+(i^n&(o^i))+r[12]+1804603682&4294967295,t=n+(a<<7&4294967295|a>>>25),a=i+(o^t&(n^o))+r[13]+4254626195&4294967295,i=t+(a<<12&4294967295|a>>>20),a=o+(n^i&(t^n))+r[14]+2792965006&4294967295,o=i+(a<<17&4294967295|a>>>15),a=n+(t^o&(i^t))+r[15]+1236535329&4294967295,n=o+(a<<22&4294967295|a>>>10),a=t+(o^i&(n^o))+r[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=i+(n^o&(t^n))+r[6]+3225465664&4294967295,i=t+(a<<9&4294967295|a>>>23),a=o+(t^n&(i^t))+r[11]+643717713&4294967295,o=i+(a<<14&4294967295|a>>>18),a=n+(i^t&(o^i))+r[0]+3921069994&4294967295,n=o+(a<<20&4294967295|a>>>12),a=t+(o^i&(n^o))+r[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=i+(n^o&(t^n))+r[10]+38016083&4294967295,i=t+(a<<9&4294967295|a>>>23),a=o+(t^n&(i^t))+r[15]+3634488961&4294967295,o=i+(a<<14&4294967295|a>>>18),a=n+(i^t&(o^i))+r[4]+3889429448&4294967295,n=o+(a<<20&4294967295|a>>>12),a=t+(o^i&(n^o))+r[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=i+(n^o&(t^n))+r[14]+3275163606&4294967295,i=t+(a<<9&4294967295|a>>>23),a=o+(t^n&(i^t))+r[3]+4107603335&4294967295,o=i+(a<<14&4294967295|a>>>18),a=n+(i^t&(o^i))+r[8]+1163531501&4294967295,n=o+(a<<20&4294967295|a>>>12),a=t+(o^i&(n^o))+r[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=i+(n^o&(t^n))+r[2]+4243563512&4294967295,i=t+(a<<9&4294967295|a>>>23),a=o+(t^n&(i^t))+r[7]+1735328473&4294967295,o=i+(a<<14&4294967295|a>>>18),a=n+(i^t&(o^i))+r[12]+2368359562&4294967295,n=o+(a<<20&4294967295|a>>>12),a=t+(n^o^i)+r[5]+4294588738&4294967295,t=n+(a<<4&4294967295|a>>>28),a=i+(t^n^o)+r[8]+2272392833&4294967295,i=t+(a<<11&4294967295|a>>>21),a=o+(i^t^n)+r[11]+1839030562&4294967295,o=i+(a<<16&4294967295|a>>>16),a=n+(o^i^t)+r[14]+4259657740&4294967295,n=o+(a<<23&4294967295|a>>>9),a=t+(n^o^i)+r[1]+2763975236&4294967295,t=n+(a<<4&4294967295|a>>>28),a=i+(t^n^o)+r[4]+1272893353&4294967295,i=t+(a<<11&4294967295|a>>>21),a=o+(i^t^n)+r[7]+4139469664&4294967295,o=i+(a<<16&4294967295|a>>>16),a=n+(o^i^t)+r[10]+3200236656&4294967295,n=o+(a<<23&4294967295|a>>>9),a=t+(n^o^i)+r[13]+681279174&4294967295,t=n+(a<<4&4294967295|a>>>28),a=i+(t^n^o)+r[0]+3936430074&4294967295,i=t+(a<<11&4294967295|a>>>21),a=o+(i^t^n)+r[3]+3572445317&4294967295,o=i+(a<<16&4294967295|a>>>16),a=n+(o^i^t)+r[6]+76029189&4294967295,n=o+(a<<23&4294967295|a>>>9),a=t+(n^o^i)+r[9]+3654602809&4294967295,t=n+(a<<4&4294967295|a>>>28),a=i+(t^n^o)+r[12]+3873151461&4294967295,i=t+(a<<11&4294967295|a>>>21),a=o+(i^t^n)+r[15]+530742520&4294967295,o=i+(a<<16&4294967295|a>>>16),a=n+(o^i^t)+r[2]+3299628645&4294967295,n=o+(a<<23&4294967295|a>>>9),a=t+(o^(n|~i))+r[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=i+(n^(t|~o))+r[7]+1126891415&4294967295,i=t+(a<<10&4294967295|a>>>22),a=o+(t^(i|~n))+r[14]+2878612391&4294967295,o=i+(a<<15&4294967295|a>>>17),a=n+(i^(o|~t))+r[5]+4237533241&4294967295,n=o+(a<<21&4294967295|a>>>11),a=t+(o^(n|~i))+r[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=i+(n^(t|~o))+r[3]+2399980690&4294967295,i=t+(a<<10&4294967295|a>>>22),a=o+(t^(i|~n))+r[10]+4293915773&4294967295,o=i+(a<<15&4294967295|a>>>17),a=n+(i^(o|~t))+r[1]+2240044497&4294967295,n=o+(a<<21&4294967295|a>>>11),a=t+(o^(n|~i))+r[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=i+(n^(t|~o))+r[15]+4264355552&4294967295,i=t+(a<<10&4294967295|a>>>22),a=o+(t^(i|~n))+r[6]+2734768916&4294967295,o=i+(a<<15&4294967295|a>>>17),a=n+(i^(o|~t))+r[13]+1309151649&4294967295,n=o+(a<<21&4294967295|a>>>11),a=t+(o^(n|~i))+r[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=i+(n^(t|~o))+r[11]+3174756917&4294967295,i=t+(a<<10&4294967295|a>>>22),a=o+(t^(i|~n))+r[2]+718787259&4294967295,o=i+(a<<15&4294967295|a>>>17),a=n+(i^(o|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(o+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+o&4294967295,e.g[3]=e.g[3]+i&4294967295}function s(e,t){var n=u;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}function l(e,t){this.h=t;for(var n=[],r=!0,o=e.length-1;0<=o;o--){var i=0|e[o];r&&i==t||(n[o]=i,r=!1)}this.g=n}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.B,o=this.h,i=0;i<t;){if(0==o)for(;i<=n;)a(this,e,i),i+=this.blockSize;if("string"===typeof e){for(;i<t;)if(r[o++]=e.charCodeAt(i++),o==this.blockSize){a(this,r),o=0;break}}else for(;i<t;)if(r[o++]=e[i++],o==this.blockSize){a(this,r),o=0;break}}this.h=o,this.o+=t},i.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var u={};function d(e){return-128<=e&&128>e?s(e,(function(e){return new l([0|e],0>e?-1:0)})):new l([0|e],0>e?-1:0)}function h(e){if(isNaN(e)||!isFinite(e))return p;if(0>e)return b(h(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new l(t,0)}function f(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return b(f(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=h(Math.pow(t,8)),r=p,o=0;o<e.length;o+=8){var i=Math.min(8,e.length-o),a=parseInt(e.substring(o,o+i),t);8>i?(i=h(Math.pow(t,i)),r=r.j(i).add(h(a))):(r=r.j(n),r=r.add(h(a)))}return r}var p=d(0),v=d(1),m=d(16777216);function g(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function y(e){return-1==e.h}function b(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new l(n,~e.h).add(v)}function w(e,t){return e.add(b(t))}function S(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function _(e,t){this.g=e,this.h=t}function E(e,t){if(g(t))throw Error("division by zero");if(g(e))return new _(p,p);if(y(e))return t=E(b(e),t),new _(b(t.g),b(t.h));if(y(t))return t=E(e,b(t)),new _(b(t.g),t.h);if(30<e.g.length){if(y(e)||y(t))throw Error("slowDivide_ only works with positive integers.");for(var n=v,r=t;0>=r.l(e);)n=C(n),r=C(r);var o=k(n,1),i=k(r,1);for(r=k(r,2),n=k(n,2);!g(r);){var a=i.add(r);0>=a.l(e)&&(o=o.add(n),i=a),r=k(r,1),n=k(n,1)}return t=w(e,o.j(t)),new _(o,t)}for(o=p;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=h(n),a=i.j(t);y(a)||0<a.l(e);)n-=r,i=h(n),a=i.j(t);g(i)&&(i=v),o=o.add(i),e=w(e,a)}return new _(o,e)}function C(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new l(n,e.h)}function k(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,o=[],i=0;i<r;i++)o[i]=0<t?e.i(i+n)>>>t|e.i(i+n+1)<<32-t:e.i(i+n);return new l(o,e.h)}e=l.prototype,e.m=function(){if(y(this))return-b(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(g(this))return"0";if(y(this))return"-"+b(this).toString(e);for(var t=h(Math.pow(e,6)),n=this,r="";;){var o=E(n,t).g;n=w(n,o.j(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=o,g(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return e=w(this,e),y(e)?-1:g(e)?0:1},e.abs=function(){return y(this)?b(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,o=0;o<=t;o++){var i=r+(65535&this.i(o))+(65535&e.i(o)),a=(i>>>16)+(this.i(o)>>>16)+(e.i(o)>>>16);r=a>>>16,i&=65535,a&=65535,n[o]=a<<16|i}return new l(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(g(this)||g(e))return p;if(y(this))return y(e)?b(this).j(b(e)):b(b(this).j(e));if(y(e))return b(this.j(b(e)));if(0>this.l(m)&&0>e.l(m))return h(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var o=0;o<e.g.length;o++){var i=this.i(r)>>>16,a=65535&this.i(r),s=e.i(o)>>>16,u=65535&e.i(o);n[2*r+2*o]+=a*u,S(n,2*r+2*o),n[2*r+2*o+1]+=i*u,S(n,2*r+2*o+1),n[2*r+2*o+1]+=a*s,S(n,2*r+2*o+1),n[2*r+2*o+2]+=i*s,S(n,2*r+2*o+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new l(n,0)},e.A=function(e){return E(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new l(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new l(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new l(n,this.h^e.h)},i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,o=c.Md5=i,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=h,l.fromString=f,r=c.Integer=l}).apply("undefined"!==typeof u?u:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var d,h,f,p,v,m,g,y,b,w="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},S={};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};function n(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof w&&w];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function o(e,n){if(n)e:{var o=r;e=e.split(".");for(var i=0;i<e.length-1;i++){var a=e[i];if(!(a in o))break e;o=o[a]}e=e[e.length-1],i=o[e],n=n(i),n!=i&&null!=n&&t(o,e,{configurable:!0,writable:!0,value:n})}}function i(e,t){e instanceof String&&(e+="");var n=0,r=!1,o={next:function(){if(!r&&n<e.length){var o=n++;return{value:t(o,e[o]),done:!1}}return r=!0,{done:!0,value:void 0}}};return o[Symbol.iterator]=function(){return o},o}o("Array.prototype.values",(function(e){return e||function(){return i(this,(function(e,t){return t}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var a=a||{},s=this||self;function l(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function u(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function c(e,t,n){return e.call.apply(e.bind,arguments)}function _(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function E(e,t,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?c:_,E.apply(null,arguments)}function k(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function x(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var o=Array(arguments.length-2),i=2;i<arguments.length;i++)o[i-2]=arguments[i];return t.prototype[n].apply(e,o)}}function I(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function T(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(l(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let o=0;o<r;o++)e[n+o]=t[o]}else e.push(t)}}class A{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function F(e){return/^[\s\xa0]*$/.test(e)}function R(){var e=s.navigator;return e&&(e=e.userAgent)?e:""}function D(e){return D[" "](e),e}D[" "]=function(){};var O=-1!=R().indexOf("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&-1==R().indexOf("Edge"))&&!(-1!=R().indexOf("Trident")||-1!=R().indexOf("MSIE"))&&-1==R().indexOf("Edge");function V(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function P(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function N(e){const t={};for(const n in e)t[n]=e[n];return t}const M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(e,t){let n,r;for(let o=1;o<arguments.length;o++){for(n in r=arguments[o],r)e[n]=r[n];for(let t=0;t<M.length;t++)n=M[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function B(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function W(e){s.setTimeout((()=>{throw e}),0)}function j(){var e=H;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ${constructor(){this.h=this.g=null}add(e,t){const n=U.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var U=new A((()=>new K),(e=>e.reset()));class K{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let z,q=!1,H=new $,G=()=>{const e=s.Promise.resolve(void 0);z=()=>{e.then(X)}};var X=()=>{for(var e;e=j();){try{e.h.call(e.g)}catch(n){W(n)}var t=U;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}q=!1};function Y(){this.s=this.s,this.C=this.C}function Q(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},Q.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};s.addEventListener("test",e,t),s.removeEventListener("test",e,t)}catch(n){}return e}();function Z(e,t){if(Q.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(O){e:{try{D(t.nodeName);var o=!0;break e}catch(i){}o=!1}o||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.aa.h.call(this)}}x(Z,Q);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,o){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=o,this.key=++ne,this.da=this.fa=!1}function oe(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ie(e){this.src=e,this.g={},this.h=0}function ae(e,t){var n=t.type;if(n in e.g){var r,o=e.g[n],i=Array.prototype.indexOf.call(o,t,void 0);(r=0<=i)&&Array.prototype.splice.call(o,i,1),r&&(oe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function se(e,t,n,r){for(var o=0;o<e.length;++o){var i=e[o];if(!i.da&&i.listener==t&&i.capture==!!n&&i.ha==r)return o}return-1}ie.prototype.add=function(e,t,n,r,o){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var a=se(e,t,r,o);return-1<a?(t=e[a],n||(t.fa=!1)):(t=new re(t,this.src,i,!!r,o),t.fa=n,e.push(t)),t};var le="closure_lm_"+(1e6*Math.random()|0),ue={};function ce(e,t,n,r,o){if(r&&r.once)return fe(e,t,n,r,o);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ce(e,t[i],n,r,o);return null}return n=we(n),e&&e[te]?e.K(t,n,u(r)?!!r.capture:!!r,o):de(e,t,n,!1,r,o)}function de(e,t,n,r,o,i){if(!t)throw Error("Invalid event type");var a=u(o)?!!o.capture:!!o,s=ye(e);if(s||(e[le]=s=new ie(e)),n=s.add(t,n,r,a,i),n.proxy)return n;if(r=he(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)J||(o=a),void 0===o&&(o=!1),e.addEventListener(t.toString(),r,o);else if(e.attachEvent)e.attachEvent(me(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function he(){function e(n){return t.call(e.src,e.listener,n)}const t=ge;return e}function fe(e,t,n,r,o){if(Array.isArray(t)){for(var i=0;i<t.length;i++)fe(e,t[i],n,r,o);return null}return n=we(n),e&&e[te]?e.L(t,n,u(r)?!!r.capture:!!r,o):de(e,t,n,!0,r,o)}function pe(e,t,n,r,o){if(Array.isArray(t))for(var i=0;i<t.length;i++)pe(e,t[i],n,r,o);else r=u(r)?!!r.capture:!!r,n=we(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=se(i,n,r,o),-1<n&&(oe(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=ye(e))&&(t=e.g[t.toString()],e=-1,t&&(e=se(t,n,r,o)),(n=-1<e?t[e]:null)&&ve(n))}function ve(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[te])ae(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(me(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ye(t))?(ae(n,e),0==n.h&&(n.src=null,t[le]=null)):oe(e)}}}function me(e){return e in ue?ue[e]:ue[e]="on"+e}function ge(e,t){if(e.da)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&ve(e),e=n.call(r,t)}return e}function ye(e){return e=e[le],e instanceof ie?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"===typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function Se(){Y.call(this),this.i=new ie(this),this.M=this,this.F=null}function _e(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"===typeof t)t=new Q(t,e);else if(t instanceof Q)t.target=t.target||e;else{var o=t;t=new Q(r,e),L(t,o)}if(o=!0,n)for(var i=n.length-1;0<=i;i--){var a=t.g=n[i];o=Ee(a,r,!0,t)&&o}if(a=t.g=e,o=Ee(a,r,!0,t)&&o,o=Ee(a,r,!1,t)&&o,n)for(i=0;i<n.length;i++)a=t.g=n[i],o=Ee(a,r,!1,t)&&o}function Ee(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var o=!0,i=0;i<t.length;++i){var a=t[i];if(a&&!a.da&&a.capture==n){var s=a.listener,l=a.ha||a.src;a.fa&&ae(e.i,a),o=!1!==s.call(l,r)&&o}}return o&&!r.defaultPrevented}function Ce(e,t,n){if("function"===typeof e)n&&(e=E(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=E(e.handleEvent,e)}return 2147483647<Number(t)?-1:s.setTimeout(e,t||0)}function ke(e){e.g=Ce((()=>{e.g=null,e.i&&(e.i=!1,ke(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}x(Se,Y),Se.prototype[te]=!0,Se.prototype.removeEventListener=function(e,t,n,r){pe(this,e,t,n,r)},Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oe(n[r]);delete t.g[e],t.h--}}this.F=null},Se.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Se.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class xe extends Y{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ke(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ie(e){Y.call(this),this.h=e,this.g={}}x(Ie,Y);var Te=[];function Ae(e){V(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ve(e)}),e),e.g={}}Ie.prototype.N=function(){Ie.aa.N.call(this),Ae(this)},Ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fe=s.JSON.stringify,Re=s.JSON.parse,De=class{stringify(e){return s.JSON.stringify(e,void 0)}parse(e){return s.JSON.parse(e,void 0)}};function Oe(){}function Ve(e){return e.h||(e.h=e.i())}function Pe(){}Oe.prototype.h=null;var Ne={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Me(){Q.call(this,"d")}function Le(){Q.call(this,"c")}x(Me,Q),x(Le,Q);var Be={},We=null;function je(){return We=We||new Se}function $e(e){Q.call(this,Be.La,e)}function Ue(e){const t=je();_e(t,new $e(t))}function Ke(e,t){Q.call(this,Be.STAT_EVENT,e),this.stat=t}function ze(e){const t=je();_e(t,new Ke(t,e))}function qe(e,t){Q.call(this,Be.Ma,e),this.size=t}function He(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return s.setTimeout((function(){e()}),t)}function Ge(){this.g=!0}function Xe(e,t,n,r,o,i){e.info((function(){if(e.g)if(i)for(var a="",s=i.split("&"),l=0;l<s.length;l++){var u=s[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");a=2<=d.length&&"type"==d[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=i;return"XMLHTTP REQ ("+r+") [attempt "+o+"]: "+t+"\n"+n+"\n"+a}))}function Ye(e,t,n,r,o,i,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+o+"]: "+t+"\n"+n+"\n"+i+" "+a}))}function Qe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Ze(e,n)+(r?" "+r:"")}))}function Je(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Ze(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var o=r[1];if(Array.isArray(o)&&!(1>o.length)){var i=o[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var a=1;a<o.length;a++)o[a]=""}}}return Fe(n)}catch(s){return t}}Be.La="serverreachability",x($e,Q),Be.STAT_EVENT="statevent",x(Ke,Q),Be.Ma="timingevent",x(qe,Q),Ge.prototype.xa=function(){this.g=!1},Ge.prototype.info=function(){};var et,tt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function rt(){}function ot(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new Ie(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new it}function it(){this.i=null,this.g="",this.h=!1}x(rt,Oe),rt.prototype.g=function(){return new XMLHttpRequest},rt.prototype.i=function(){return{}},et=new rt;var at={},st={};function lt(e,t,n){e.L=1,e.v=Mt(Dt(t)),e.m=n,e.P=!0,ut(e,null)}function ut(e,t){e.F=Date.now(),ht(e),e.A=Dt(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Yt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new it,e.g=Un(e.j,n?t:null,!e.m),0<e.O&&(e.M=new xe(E(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var o="readystatechange";Array.isArray(o)||(o&&(Te[0]=o.toString()),o=Te);for(var i=0;i<o.length;i++){var a=ce(n,o[i],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?N(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ue(),Xe(e.i,e.u,e.A,e.l,e.R,e.m)}function ct(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function dt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?st:(n=Number(t.substring(n,r)),isNaN(n)?at:(r+=1,r+n>t.length?st:(t=t.slice(r,r+n),e.C=r+n,t)))}function ht(e){e.S=Date.now()+e.I,ft(e,e.I)}function ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=He(E(e.ba,e),t)}function pt(e){e.B&&(s.clearTimeout(e.B),e.B=null)}function vt(e){0==e.j.G||e.J||Ln(e.j,e)}function mt(e){pt(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,Ae(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function gt(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||_t(n.h,e)))if(!e.K&&_t(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var o=r;if(0==o[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Mn(n),xn(n)}Vn(n),ze(18)}}else n.za=o[1],0<n.za-n.T&&37500>o[2]&&n.F&&0==n.v&&!n.C&&(n.C=He(E(n.Za,n),6e3));if(1>=St(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else Wn(n,11)}else if((e.K||n.g==e)&&Mn(n),!F(t))for(o=n.Da.g.parse(t),t=0;t<o.length;t++){let u=o[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const o=u[4];null!=o&&(n.Aa=o,n.j.info("SVER="+n.Aa));const c=u[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Et(i,i.h),i.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,Nt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var a=e;if(r.qa=$n(r,r.J?r.ia:null,r.W),a.K){Ct(r.h,a);var s=a,l=r.L;l&&(s.I=l),s.B&&(pt(s),ht(s)),r.g=a}else On(r);0<n.i.length&&Tn(n)}else"stop"!=u[0]&&"close"!=u[0]||Wn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Wn(n,7):kn(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ue(4)}catch(u){}}ot.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==wn(e)?t.j():this.Y(e)},ot.prototype.Y=function(e){try{if(e==this.g)e:{const h=wn(this.g);var t=this.g.Ba();const f=this.g.Z();if(!(3>h)&&(3!=h||this.g&&(this.h.h||this.g.oa()||Sn(this.g)))){this.J||4!=h||7==t||Ue(8==t||0>=f?3:2),pt(this);var n=this.g.Z();this.X=n;t:if(ct(this)){var r=Sn(this.g);e="";var o=r.length,i=4==wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){mt(this),vt(this);var a="";break t}this.h.i=new s.TextDecoder}for(t=0;t<o;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(i&&t==o-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,Ye(this.i,this.u,this.A,this.l,this.R,h,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(l)){var c=l;break t}}c=null}if(!(n=c)){this.o=!1,this.s=3,ze(12),mt(this),vt(this);break e}Qe(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gt(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=dt(this,a),e==st){4==h&&(this.s=4,ze(14),n=!1),Qe(this.i,this.l,null,"[Incomplete Response]");break}if(e==at){this.s=4,ze(15),Qe(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Qe(this.i,this.l,e,null),gt(this,e)}if(ct(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=h||0!=a.length||this.h.h||(this.s=1,ze(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.ba&&!d.M&&(d.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),Pn(d),d.M=!0,ze(11))}}else Qe(this.i,this.l,a,"[Invalid Chunked Response]"),mt(this),vt(this)}else Qe(this.i,this.l,a,null),gt(this,a);4==h&&mt(this),this.o&&!this.J&&(4==h?Ln(this.j,this):(this.o=!1,ht(this)))}else _n(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),mt(this),vt(this)}}}catch(h){}},ot.prototype.cancel=function(){this.J=!0,mt(this)},ot.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(Je(this.i,this.A),2!=this.L&&(Ue(),ze(17)),mt(this),this.s=2,vt(this)):ft(this,this.S-e)};var yt=class{constructor(e,t){this.g=e,this.map=t}};function bt(e){this.l=e||10,s.PerformanceNavigationTiming?(e=s.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function St(e){return e.h?1:e.g?e.g.size:0}function _t(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Et(e,t){e.g?e.g.add(t):e.h=t}function Ct(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function kt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return I(e.i)}function xt(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(l(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function It(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(l(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(l(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=It(e),r=xt(e),o=r.length,i=0;i<o;i++)t.call(void 0,r[i],n&&n[i],e)}bt.prototype.cancel=function(){if(this.i=kt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var At=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ft(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),o=null;if(0<=r){var i=e[n].substring(0,r);o=e[n].substring(r+1)}else i=e[n];t(i,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}function Rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof Rt){this.h=e.h,Ot(this,e.j),this.o=e.o,this.g=e.g,Vt(this,e.s),this.l=e.l;var t=e.i,n=new qt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Pt(this,n),this.m=e.m}else e&&(t=String(e).match(At))?(this.h=!1,Ot(this,t[1]||"",!0),this.o=Lt(t[2]||""),this.g=Lt(t[3]||"",!0),Vt(this,t[4]),this.l=Lt(t[5]||"",!0),Pt(this,t[6]||"",!0),this.m=Lt(t[7]||"")):(this.h=!1,this.i=new qt(null,this.h))}function Dt(e){return new Rt(e)}function Ot(e,t,n){e.j=n?Lt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Vt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function Pt(e,t,n){t instanceof qt?(e.i=t,Jt(e.i,e.h)):(n||(t=Bt(t,Kt)),e.i=new qt(t,e.h))}function Nt(e,t,n){e.i.set(t,n)}function Mt(e){return Nt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Lt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Bt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Wt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Wt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Bt(t,jt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(Bt(t,jt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Bt(n,"/"==n.charAt(0)?Ut:$t,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",Bt(n,zt)),e.join("")};var jt=/[#\/\?@]/g,$t=/[#\?:]/g,Ut=/[#\?]/g,Kt=/[#\?@]/g,zt=/#/g;function qt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ht(e){e.g||(e.g=new Map,e.h=0,e.i&&Ft(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Gt(e,t){Ht(e),t=Qt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Xt(e,t){return Ht(e),t=Qt(e,t),e.g.has(t)}function Yt(e,t,n){Gt(e,t),0<n.length&&(e.i=null,e.g.set(Qt(e,t),I(n)),e.h+=n.length)}function Qt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Jt(e,t){t&&!e.j&&(Ht(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Gt(this,t),Yt(this,n,e))}),e)),e.j=t}function Zt(e,t){const n=new Ge;if(s.Image){const r=new Image;r.onload=k(tn,n,"TestLoadImage: loaded",!0,t,r),r.onerror=k(tn,n,"TestLoadImage: error",!1,t,r),r.onabort=k(tn,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=k(tn,n,"TestLoadImage: timeout",!1,t,r),s.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function en(e,t){const n=new Ge,r=new AbortController,o=setTimeout((()=>{r.abort(),tn(n,"TestPingServer: timeout",!1,t)}),1e4);fetch(e,{signal:r.signal}).then((e=>{clearTimeout(o),e.ok?tn(n,"TestPingServer: ok",!0,t):tn(n,"TestPingServer: server error",!1,t)})).catch((()=>{clearTimeout(o),tn(n,"TestPingServer: error",!1,t)}))}function tn(e,t,n,r,o){try{o&&(o.onload=null,o.onerror=null,o.onabort=null,o.ontimeout=null),r(n)}catch(i){}}function nn(){this.g=new De}function rn(e,t,n){const r=n||"";try{Tt(e,(function(e,n){let o=e;u(e)&&(o=Fe(e)),t.push(r+n+"="+encodeURIComponent(o))}))}catch(o){throw t.push(r+"type="+encodeURIComponent("_badmap")),o}}function on(e){this.l=e.Ub||null,this.j=e.eb||!1}function an(e,t){Se.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function sn(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function ln(e){e.readyState=4,e.l=null,e.j=null,e.v=null,un(e)}function un(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function cn(e){let t="";return V(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function dn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=cn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Nt(e,t,n))}function hn(e){Se.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}e=qt.prototype,e.add=function(e,t){Ht(this),this.i=null,e=Qt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){Ht(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){Ht(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const o=e[r];for(let e=0;e<o.length;e++)n.push(t[r])}return n},e.V=function(e){Ht(this);let t=[];if("string"===typeof e)Xt(this,e)&&(t=t.concat(this.g.get(Qt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return Ht(this),this.i=null,e=Qt(this,e),Xt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=this.V(e),0<e.length?String(e[0]):t):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),a=this.V(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")},x(on,Oe),on.prototype.g=function(){return new an(this.l,this.j)},on.prototype.i=function(e){return function(){return e}}({}),x(an,Se),e=an.prototype,e.open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,un(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||s).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ln(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof s.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sn(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ln(this):un(this),3==this.readyState&&sn(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,ln(this))},e.Qa=function(e){this.g&&(this.response=e,ln(this))},e.ga=function(){this.g&&ln(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(an.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),x(hn,Se);var fn=/^https?$/i,pn=["POST","PUT"];function vn(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,mn(e),yn(e)}function mn(e){e.A||(e.A=!0,_e(e,"complete"),_e(e,"error"))}function gn(e){if(e.h&&"undefined"!=typeof a&&(!e.v[1]||4!=wn(e)||2!=e.Z()))if(e.u&&4==wn(e))Ce(e.Ea,0,e);else if(_e(e,"readystatechange"),4==wn(e)){e.h=!1;try{const a=e.Z();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var o=String(e.D).match(At)[1]||null;!o&&s.self&&s.self.location&&(o=s.self.location.protocol.slice(0,-1)),r=!fn.test(o?o.toLowerCase():"")}n=r}if(n)_e(e,"complete"),_e(e,"success");else{e.m=6;try{var i=2<wn(e)?e.g.statusText:""}catch(l){i=""}e.l=i+" ["+e.Z()+"]",mn(e)}}finally{yn(e)}}}function yn(e,t){if(e.g){bn(e);const r=e.g,o=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||_e(e,"ready");try{r.onreadystatechange=o}catch(n){}}}function bn(e){e.I&&(s.clearTimeout(e.I),e.I=null)}function wn(e){return e.g?e.g.readyState:0}function Sn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(C){return null}}function _n(e){const t={};e=(e.g&&2<=wn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(F(e[r]))continue;var n=B(e[r]);const o=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const i=t[o]||[];t[o]=i,i.push(n)}P(t,(function(e){return e.join(", ")}))}function En(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Cn(e){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=En("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=En("baseRetryDelayMs",5e3,e),this.cb=En("retryDelaySeedMs",1e4,e),this.Wa=En("forwardChannelMaxRetries",2,e),this.wa=En("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new bt(e&&e.concurrentRequestLimit),this.Da=new nn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function kn(e){if(In(e),3==e.G){var t=e.U++,n=Dt(e.I);if(Nt(n,"SID",e.K),Nt(n,"RID",t),Nt(n,"TYPE","terminate"),Rn(e,n),t=new ot(e,e.j,t),t.L=2,t.v=Mt(Dt(n)),n=!1,s.navigator&&s.navigator.sendBeacon)try{n=s.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&s.Image&&((new Image).src=t.v,n=!0),n||(t.g=Un(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ht(t)}jn(e)}function xn(e){e.g&&(Pn(e),e.g.cancel(),e.g=null)}function In(e){xn(e),e.u&&(s.clearTimeout(e.u),e.u=null),Mn(e),e.h.cancel(),e.s&&("number"===typeof e.s&&s.clearTimeout(e.s),e.s=null)}function Tn(e){if(!wt(e.h)&&!e.s){e.s=!0;var t=e.Ga;z||G(),q||(z(),q=!0),H.add(t,e),e.B=0}}function An(e,t){return!(St(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa))&&(e.s=He(E(e.Ga,e,t),Bn(e,e.B)),e.B++,!0))}function Fn(e,t){var n;n=t?t.l:e.U++;const r=Dt(e.I);Nt(r,"SID",e.K),Nt(r,"RID",n),Nt(r,"AID",e.T),Rn(e,r),e.m&&e.o&&dn(r,e.m,e.o),n=new ot(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Dn(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Et(e.h,n),lt(n,r,t)}function Rn(e,t){e.H&&V(e.H,(function(e,n){Nt(t,n,e)})),e.l&&Tt({},(function(e,n){Nt(t,n,e)}))}function Dn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?E(e.l.Na,e.l,e):null;e:{var o=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=o[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let a=!0;for(let s=0;s<n;s++){let n=o[s].g;const l=o[s].map;if(n-=t,0>n)t=Math.max(0,o[s].g-100),a=!1;else try{rn(l,e,"req"+n+"_")}catch(i){r&&r(l)}}if(a){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function On(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;z||G(),q||(z(),q=!0),H.add(t,e),e.v=0}}function Vn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=He(E(e.Fa,e),Bn(e,e.v)),e.v++,!0)}function Pn(e){null!=e.A&&(s.clearTimeout(e.A),e.A=null)}function Nn(e){e.g=new ot(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=Dt(e.qa);Nt(t,"RID","rpc"),Nt(t,"SID",e.K),Nt(t,"AID",e.T),Nt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&Nt(t,"TO",e.ja),Nt(t,"TYPE","xmlhttp"),Rn(e,t),e.m&&e.o&&dn(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=Mt(Dt(t)),n.m=null,n.P=!0,ut(n,e)}function Mn(e){null!=e.C&&(s.clearTimeout(e.C),e.C=null)}function Ln(e,t){var n=null;if(e.g==t){Mn(e),Pn(e),e.g=null;var r=2}else{if(!_t(e.h,t))return;n=t.D,Ct(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var o=e.B;r=je(),_e(r,new qe(r,n)),Tn(e)}else On(e);else if(o=t.s,3==o||0==o&&0<t.X||!(1==r&&An(e,t)||2==r&&Vn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),o){case 1:Wn(e,5);break;case 4:Wn(e,10);break;case 3:Wn(e,6);break;default:Wn(e,2)}}function Bn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function Wn(e,t){if(e.j.info("Error code "+t),2==t){var n=E(e.fb,e),r=e.Xa;const t=!r;r=new Rt(r||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||Ot(r,"https"),Mt(r),t?Zt(r.toString(),n):en(r.toString(),n)}else ze(2);e.G=0,e.l&&e.l.sa(t),jn(e),In(e)}function jn(e){if(e.G=0,e.ka=[],e.l){const t=kt(e.h);0==t.length&&0==e.i.length||(T(e.ka,t),T(e.ka,e.i),e.h.i.length=0,I(e.i),e.i.length=0),e.l.ra()}}function $n(e,t,n){var r=n instanceof Rt?Dt(n):new Rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Vt(r,r.s);else{var o=s.location;r=o.protocol,t=t?t+"."+o.hostname:o.hostname,o=+o.port;var i=new Rt(null);r&&Ot(i,r),t&&(i.g=t),o&&Vt(i,o),n&&(i.l=n),r=i}return n=e.D,t=e.ya,n&&t&&Nt(r,n,t),Nt(r,"VER",e.la),Rn(e,r),r}function Un(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ca&&!e.pa?new hn(new on({eb:n})):new hn(e.pa),t.Ha(e.J),t}function Kn(){}function zn(){}function qn(e,t){Se.call(this),this.g=new Cn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!F(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!F(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Xn(this)}function Hn(e){Me.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Gn(){Le.call(this),this.status=1}function Xn(e){this.g=e}e=hn.prototype,e.Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():et.g(),this.v=this.o?Ve(this.o):Ve(et),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(i){return void vn(this,i)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var o in r)n.set(o,r[o]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),o=s.FormData&&e instanceof s.FormData,!(0<=Array.prototype.indexOf.call(pn,t,void 0))||r||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[a,s]of n)this.g.setRequestHeader(a,s);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bn(this),this.u=!0,this.g.send(e),this.u=!1}catch(i){vn(this,i)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,_e(this,"complete"),_e(this,"abort"),yn(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),hn.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?gn(this):this.bb())},e.bb=function(){gn(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Re(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},e=Cn.prototype,e.la=8,e.G=1,e.connect=function(e,t,n,r){ze(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=$n(this,null,this.W),Tn(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const o=new ot(this,this.j,e);let i=this.o;if(this.S&&(i?(i=N(i),L(i,this.S)):i=this.S),null!==this.m||this.O||(o.H=i,i=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Dn(this,o,t),n=Dt(this.I),Nt(n,"RID",e),Nt(n,"CVER",22),this.D&&Nt(n,"X-HTTP-Session-Id",this.D),Rn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(cn(i)))+"&"+t:this.m&&dn(n,this.m,i)),Et(this.h,o),this.Ua&&Nt(n,"TYPE","init"),this.P?(Nt(n,"$req",t),Nt(n,"SID","null"),o.T=!0,lt(o,n,null)):lt(o,n,t),this.G=2}}else 3==this.G&&(e?Fn(this,e):0==this.i.length||wt(this.h)||Fn(this))},e.Fa=function(){if(this.u=null,Nn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=He(E(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),xn(this),Nn(this))},e.Za=function(){null!=this.C&&(this.C=null,xn(this),Vn(this),ze(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},e=Kn.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},zn.prototype.g=function(e,t){return new qn(e,t)},x(qn,Se),qn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qn.prototype.close=function(){kn(this.g)},qn.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.u&&(n={},n.__data__=Fe(e),e=n);t.i.push(new yt(t.Ya++,e)),3==t.G&&Tn(t)},qn.prototype.N=function(){this.g.l=null,delete this.j,kn(this.g),delete this.g,qn.aa.N.call(this)},x(Hn,Me),x(Gn,Le),x(Xn,Kn),Xn.prototype.ua=function(){_e(this.g,"a")},Xn.prototype.ta=function(e){_e(this.g,new Hn(e))},Xn.prototype.sa=function(e){_e(this.g,new Gn)},Xn.prototype.ra=function(){_e(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,qn.prototype.send=qn.prototype.o,qn.prototype.open=qn.prototype.m,qn.prototype.close=qn.prototype.close,b=S.createWebChannelTransport=function(){return new zn},y=S.getStatEventTarget=function(){return je()},g=S.Event=Be,m=S.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tt.NO_ERROR=0,tt.TIMEOUT=8,tt.HTTP_ERROR=6,v=S.ErrorCode=tt,nt.COMPLETE="complete",p=S.EventType=nt,Pe.EventType=Ne,Ne.OPEN="a",Ne.CLOSE="b",Ne.ERROR="c",Ne.MESSAGE="d",Se.prototype.listen=Se.prototype.K,f=S.WebChannel=Pe,h=S.FetchXmlHttpFactory=on,hn.prototype.listenOnce=hn.prototype.L,hn.prototype.getLastError=hn.prototype.Ka,hn.prototype.getLastErrorCode=hn.prototype.Ba,hn.prototype.getStatus=hn.prototype.Z,hn.prototype.getResponseJson=hn.prototype.Oa,hn.prototype.getResponseText=hn.prototype.oa,hn.prototype.send=hn.prototype.ea,hn.prototype.setWithCredentials=hn.prototype.Ha,d=S.XhrIo=hn}).apply("undefined"!==typeof w?w:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const _="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}E.UNAUTHENTICATED=new E(null),E.GOOGLE_CREDENTIALS=new E("google-credentials-uid"),E.FIRST_PARTY=new E("first-party-uid"),E.MOCK_USER=new E("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let C="10.12.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new s.Vy("@firebase/firestore");function x(){return k.logLevel}function I(e,...t){if(k.logLevel<=s.$b.DEBUG){const n=t.map(F);k.debug(`Firestore (${C}): ${e}`,...n)}}function T(e,...t){if(k.logLevel<=s.$b.ERROR){const n=t.map(F);k.error(`Firestore (${C}): ${e}`,...n)}}function A(e,...t){if(k.logLevel<=s.$b.WARN){const n=t.map(F);k.warn(`Firestore (${C}): ${e}`,...n)}}function F(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e="Unexpected state"){const t=`FIRESTORE (${C}) INTERNAL ASSERTION FAILED: `+e;throw T(t),new Error(t)}function D(e,t){e||R()}function O(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends l.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(E.UNAUTHENTICATED)))}shutdown(){}}class B{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class W{constructor(e){this.t=e,this.currentUser=E.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let o=new N;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new N,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=o;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new N)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(D("string"==typeof t.accessToken),new M(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return D(null===e||"string"==typeof e),new E(e)}}class j{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=E.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ${constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new j(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(E.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class U{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,I("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(D("string"==typeof e.token),this.R=e.token,new U(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=z(40);for(let o=0;o<r.length;++o)n.length<20&&r[o]<t&&(n+=e.charAt(r[o]%e.length))}return n}}function H(e,t){return e<t?-1:e>t?1:0}function G(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new P(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new P(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new P(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return X.fromMillis(Date.now())}static fromDate(e){return X.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new X(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new X(0,0))}static max(){return new Y(new X(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n){void 0===t?t=0:t>e.length&&R(),void 0===n?n=e.length-t:n>e.length-t&&R(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Q.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Q?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),o=t.get(r);if(n<o)return-1;if(n>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class J extends Q{construct(e,t,n){return new J(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new P(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const Z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ee extends Q{construct(e,t,n){return new ee(e,t,n)}static isValidIdentifier(e){return Z.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ee.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ee(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const o=()=>{if(0===n.length)throw new P(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new P(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new P(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(o(),r++)}if(o(),i)throw new P(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ee(t)}static emptyPath(){return new ee([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(J.fromString(e))}static fromName(e){return new te(J.fromString(e).popFirst(5))}static empty(){return new te(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===J.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new J(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}ne.UNKNOWN_ID=-1;function re(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,o=Y.fromTimestamp(1e9===r?new X(n+1,0):new X(n,r));return new ie(o,te.empty(),t)}function oe(e){return new ie(e.readTime,e.key,-1)}class ie{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ie(Y.min(),te.empty(),-1)}static max(){return new ie(Y.max(),te.empty(),-1)}}function ae(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=te.comparator(e.documentKey,t.documentKey),0!==n?n:H(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const se="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class le{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(e){if(e.code!==V.FAILED_PRECONDITION||e.message!==se)throw e;I("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ce(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ce?t:ce.resolve(t)}catch(e){return ce.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ce.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ce.reject(t)}static resolve(e){return new ce(((t,n)=>{t(e)}))}static reject(e){return new ce(((t,n)=>{n(e)}))}static waitFor(e){return new ce(((t,n)=>{let r=0,o=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++o,i&&o===r&&t()}),(e=>n(e)))})),i=!0,o===r&&t()}))}static or(e){let t=ce.resolve(!1);for(const n of e)t=t.next((e=>e?ce.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new ce(((n,r)=>{const o=e.length,i=new Array(o);let a=0;for(let s=0;s<o;s++){const l=s;t(e[l]).next((e=>{i[l]=e,++a,a===o&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new ce(((n,r)=>{const o=()=>{!0===e()?t().next((()=>{o()}),r):n()};o()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function he(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function pe(e){return null==e}function ve(e){return 0===e&&1/e==-1/0}function me(e){return"number"==typeof e&&Number.isInteger(e)&&!ve(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe.oe=-1;const ge=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ye=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],be=ye;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function we(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Se(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _e(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.comparator=e,this.root=t||ke.EMPTY}insert(e,t){return new Ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ce(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ce(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ce(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ce(this.root,e,this.comparator,!0)}}class Ce{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(0===o){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,t,n,r,o){this.key=e,this.value=t,this.color=null!=n?n:ke.RED,this.left=null!=r?r:ke.EMPTY,this.right=null!=o?o:ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,o){return new ke(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=o?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const o=n(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===o?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ke.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw R();if(this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1,ke.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(e,t,n,r,o){return this}insert(e,t,n){return new ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ie(this.data.getIterator())}getIteratorFrom(e){return new Ie(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof xe))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class Ie{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{constructor(e){this.fields=e,e.sort(ee.comparator)}static empty(){return new Te([])}unionWith(e){let t=new xe(ee.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Te(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return G(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ae("Invalid base64 string: "+e):e}}(e);return new Fe(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const Re=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function De(e){if(D(!!e),"string"==typeof e){let t=0;const n=Re.exec(e);if(D(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Oe(e.seconds),nanos:Oe(e.nanos)}}function Oe(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ve(e){return"string"==typeof e?Fe.fromBase64String(e):Fe.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ne(e){const t=e.mapValue.fields.__previous_value__;return Pe(t)?Ne(t):t}function Me(e){const t=De(e.mapValue.fields.__local_write_time__.timestampValue);return new X(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,n,r,o,i,a,s,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=o,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.longPollingOptions=s,this.useFetchStreams=l}}class Be{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Be("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Be&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function je(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Pe(e)?4:tt(e)?9007199254740991:10:R()}function $e(e,t){if(e===t)return!0;const n=je(e);if(n!==je(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Me(e).isEqual(Me(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=De(e.timestampValue),r=De(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ve(e.bytesValue).isEqual(Ve(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Oe(e.geoPointValue.latitude)===Oe(t.geoPointValue.latitude)&&Oe(e.geoPointValue.longitude)===Oe(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Oe(e.integerValue)===Oe(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Oe(e.doubleValue),r=Oe(t.doubleValue);return n===r?ve(n)===ve(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return G(e.arrayValue.values||[],t.arrayValue.values||[],$e);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(we(n)!==we(r))return!1;for(const o in n)if(n.hasOwnProperty(o)&&(void 0===r[o]||!$e(n[o],r[o])))return!1;return!0}(e,t);default:return R()}}function Ue(e,t){return void 0!==(e.values||[]).find((e=>$e(e,t)))}function Ke(e,t){if(e===t)return 0;const n=je(e),r=je(t);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Oe(e.integerValue||e.doubleValue),r=Oe(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ze(e.timestampValue,t.timestampValue);case 4:return ze(Me(e),Me(t));case 5:return H(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ve(e),r=Ve(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let o=0;o<n.length&&o<r.length;o++){const e=H(n[o],r[o]);if(0!==e)return e}return H(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=H(Oe(e.latitude),Oe(t.latitude));return 0!==n?n:H(Oe(e.longitude),Oe(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let o=0;o<n.length&&o<r.length;++o){const e=Ke(n[o],r[o]);if(e)return e}return H(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===We.mapValue&&t===We.mapValue)return 0;if(e===We.mapValue)return 1;if(t===We.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),o=t.fields||{},i=Object.keys(o);r.sort(),i.sort();for(let a=0;a<r.length&&a<i.length;++a){const e=H(r[a],i[a]);if(0!==e)return e;const t=Ke(n[r[a]],o[i[a]]);if(0!==t)return t}return H(r.length,i.length)}(e.mapValue,t.mapValue);default:throw R()}}function ze(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return H(e,t);const n=De(e),r=De(t),o=H(n.seconds,r.seconds);return 0!==o?o:H(n.nanos,r.nanos)}function qe(e){return He(e)}function He(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=De(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Ve(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return te.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=He(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const o of t)r?r=!1:n+=",",n+=`${o}:${He(e.fields[o])}`;return n+"}"}(e.mapValue):R()}function Ge(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Xe(e){return!!e&&"integerValue"in e}function Ye(e){return!!e&&"arrayValue"in e}function Qe(e){return!!e&&"nullValue"in e}function Je(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ze(e){return!!e&&"mapValue"in e}function et(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Se(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=et(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=et(e.arrayValue.values[n]);return t}return Object.assign({},e)}function tt(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ze(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=et(t)}setAll(e){let t=ee.emptyPath(),n={},r=[];e.forEach(((e,o)=>{if(!t.isImmediateParentOf(o)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=o.popLast()}e?n[o.lastSegment()]=et(e):r.push(o.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,n,r)}delete(e){const t=this.field(e.popLast());Ze(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $e(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ze(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Se(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new nt(et(this.value))}}function rt(e){const t=[];return Se(e.fields,((e,n)=>{const r=new ee([e]);if(Ze(n)){const e=rt(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Te(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ot{constructor(e,t,n,r,o,i,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=o,this.data=i,this.documentState=a}static newInvalidDocument(e){return new ot(e,0,Y.min(),Y.min(),Y.min(),nt.empty(),0)}static newFoundDocument(e,t,n,r){return new ot(e,1,t,Y.min(),n,r,0)}static newNoDocument(e,t){return new ot(e,2,t,Y.min(),Y.min(),nt.empty(),0)}static newUnknownDocument(e,t){return new ot(e,3,t,Y.min(),Y.min(),nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.position=e,this.inclusive=t}}function at(e,t,n){let r=0;for(let o=0;o<e.position.length;o++){const i=t[o],a=e.position[o];if(r=i.field.isKeyField()?te.comparator(te.fromName(a.referenceValue),n.key):Ke(a,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function st(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!$e(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t="asc"){this.field=e,this.dir=t}}function ut(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{}class dt extends ct{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new bt(e,t,n):"array-contains"===t?new Et(e,n):"in"===t?new Ct(e,n):"not-in"===t?new kt(e,n):"array-contains-any"===t?new xt(e,n):new dt(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new wt(e,n):new St(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ke(t,this.value)):null!==t&&je(this.value)===je(t)&&this.matchesComparison(Ke(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends ct{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ht(e,t)}matches(e){return ft(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ft(e){return"and"===e.op}function pt(e){return vt(e)&&ft(e)}function vt(e){for(const t of e.filters)if(t instanceof ht)return!1;return!0}function mt(e){if(e instanceof dt)return e.field.canonicalString()+e.op.toString()+qe(e.value);if(pt(e))return e.filters.map((e=>mt(e))).join(",");{const t=e.filters.map((e=>mt(e))).join(",");return`${e.op}(${t})`}}function gt(e,t){return e instanceof dt?function(e,t){return t instanceof dt&&e.op===t.op&&e.field.isEqual(t.field)&&$e(e.value,t.value)}(e,t):e instanceof ht?function(e,t){return t instanceof ht&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&gt(n,t.filters[r])),!0)}(e,t):void R()}function yt(e){return e instanceof dt?function(e){return`${e.field.canonicalString()} ${e.op} ${qe(e.value)}`}(e):e instanceof ht?function(e){return e.op.toString()+" {"+e.getFilters().map(yt).join(" ,")+"}"}(e):"Filter"}class bt extends dt{constructor(e,t,n){super(e,t,n),this.key=te.fromName(n.referenceValue)}matches(e){const t=te.comparator(e.key,this.key);return this.matchesComparison(t)}}class wt extends dt{constructor(e,t){super(e,"in",t),this.keys=_t("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class St extends dt{constructor(e,t){super(e,"not-in",t),this.keys=_t("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function _t(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>te.fromName(e.referenceValue)))}class Et extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ye(t)&&Ue(t.arrayValue,this.value)}}class Ct extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Ue(this.value.arrayValue,t)}}class kt extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ue(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Ue(this.value.arrayValue,t)}}class xt extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ye(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Ue(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t=null,n=[],r=[],o=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=o,this.startAt=i,this.endAt=a,this.ue=null}}function Tt(e,t=null,n=[],r=[],o=null,i=null,a=null){return new It(e,t,n,r,o,i,a)}function At(e){const t=O(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>mt(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),pe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>qe(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>qe(e))).join(",")),t.ue=e}return t.ue}function Ft(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ut(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!gt(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!st(e.startAt,t.startAt)&&st(e.endAt,t.endAt)}function Rt(e){return te.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{constructor(e,t=null,n=[],r=[],o=null,i="F",a=null,s=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=o,this.limitType=i,this.startAt=a,this.endAt=s,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ot(e,t,n,r,o,i,a,s){return new Dt(e,t,n,r,o,i,a,s)}function Vt(e){return new Dt(e)}function Pt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Nt(e){return null!==e.collectionGroup}function Mt(e){const t=O(e);if(null===t.ce){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new xe(ee.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new lt(r,n))})),e.has(ee.keyField().canonicalString())||t.ce.push(new lt(ee.keyField(),n))}return t.ce}function Lt(e){const t=O(e);return t.le||(t.le=Bt(t,Mt(e))),t.le}function Bt(e,t){if("F"===e.limitType)return Tt(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new lt(e.field,t)}));const n=e.endAt?new it(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new it(e.startAt.position,e.startAt.inclusive):null;return Tt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Wt(e,t){const n=e.filters.concat([t]);return new Dt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function jt(e,t,n){return new Dt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function $t(e,t){return Ft(Lt(e),Lt(t))&&e.limitType===t.limitType}function Ut(e){return`${At(Lt(e))}|lt:${e.limitType}`}function Kt(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>yt(e))).join(", ")}]`),pe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>qe(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>qe(e))).join(",")),`Target(${t})`}(Lt(e))}; limitType=${e.limitType})`}function zt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):te.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Mt(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=at(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Mt(e),t))&&!(e.endAt&&!function(e,t,n){const r=at(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Mt(e),t))}(e,t)}function qt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ht(e){return(t,n)=>{let r=!1;for(const o of Mt(e)){const e=Gt(o,t,n);if(0!==e)return e;r=r||o.field.isKeyField()}return 0}}function Gt(e,t,n){const r=e.field.isKeyField()?te.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),o=n.data.field(e);return null!==r&&null!==o?Ke(r,o):R()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,o]of n)if(this.equalsFn(r,e))return o}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Se(this.inner,((t,n)=>{for(const[r,o]of n)e(r,o)}))}isEmpty(){return _e(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new Ee(te.comparator);function Qt(){return Yt}const Jt=new Ee(te.comparator);function Zt(...e){let t=Jt;for(const n of e)t=t.insert(n.key,n);return t}function en(e){let t=Jt;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function tn(){return rn()}function nn(){return rn()}function rn(){return new Xt((e=>e.toString()),((e,t)=>e.isEqual(t)))}const on=new Ee(te.comparator),an=new xe(te.comparator);function sn(...e){let t=an;for(const n of e)t=t.add(n);return t}const ln=new xe(H);function un(){return ln}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ve(t)?"-0":t}}function dn(e){return{integerValue:""+e}}function hn(e,t){return me(t)?dn(t):cn(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this._=void 0}}function pn(e,t,n){return e instanceof gn?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Pe(t)&&(t=Ne(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof yn?bn(e,t):e instanceof wn?Sn(e,t):function(e,t){const n=mn(e,t),r=En(n)+En(e.Pe);return Xe(n)&&Xe(e.Pe)?dn(r):cn(e.serializer,r)}(e,t)}function vn(e,t,n){return e instanceof yn?bn(e,t):e instanceof wn?Sn(e,t):n}function mn(e,t){return e instanceof _n?function(e){return Xe(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class gn extends fn{}class yn extends fn{constructor(e){super(),this.elements=e}}function bn(e,t){const n=Cn(t);for(const r of e.elements)n.some((e=>$e(e,r)))||n.push(r);return{arrayValue:{values:n}}}class wn extends fn{constructor(e){super(),this.elements=e}}function Sn(e,t){let n=Cn(t);for(const r of e.elements)n=n.filter((e=>!$e(e,r)));return{arrayValue:{values:n}}}class _n extends fn{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function En(e){return Oe(e.integerValue||e.doubleValue)}function Cn(e){return Ye(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.field=e,this.transform=t}}function xn(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof yn&&t instanceof yn||e instanceof wn&&t instanceof wn?G(e.elements,t.elements,$e):e instanceof _n&&t instanceof _n?$e(e.Pe,t.Pe):e instanceof gn&&t instanceof gn}(e.transform,t.transform)}class In{constructor(e,t){this.version=e,this.transformResults=t}}class Tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function An(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Fn{}function Rn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new jn(e.key,Tn.none()):new Nn(e.key,e.data,Tn.none());{const n=e.data,r=nt.empty();let o=new xe(ee.comparator);for(let e of t.fields)if(!o.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),o=o.add(e)}return new Mn(e.key,r,new Te(o.toArray()),Tn.none())}}function Dn(e,t,n){e instanceof Nn?function(e,t,n){const r=e.value.clone(),o=Bn(e.fieldTransforms,t,n.transformResults);r.setAll(o),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Mn?function(e,t,n){if(!An(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Bn(e.fieldTransforms,t,n.transformResults),o=t.data;o.setAll(Ln(e)),o.setAll(r),t.convertToFoundDocument(n.version,o).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function On(e,t,n,r){return e instanceof Nn?function(e,t,n,r){if(!An(e.precondition,t))return n;const o=e.value.clone(),i=Wn(e.fieldTransforms,r,t);return o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null}(e,t,n,r):e instanceof Mn?function(e,t,n,r){if(!An(e.precondition,t))return n;const o=Wn(e.fieldTransforms,r,t),i=t.data;return i.setAll(Ln(e)),i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return An(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Vn(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),o=mn(r.transform,e||null);null!=o&&(null===n&&(n=nt.empty()),n.set(r.field,o))}return n||null}function Pn(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&G(e,t,((e,t)=>xn(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Nn extends Fn{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Mn extends Fn{constructor(e,t,n,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ln(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Bn(e,t,n){const r=new Map;D(e.length===n.length);for(let o=0;o<n.length;o++){const i=e[o],a=i.transform,s=t.data.field(i.field);r.set(i.field,vn(a,s,n[o]))}return r}function Wn(e,t,n){const r=new Map;for(const o of e){const e=o.transform,i=n.data.field(o.field);r.set(o.field,pn(e,i,t))}return r}class jn extends Fn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $n extends Fn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Dn(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=On(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=On(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=nn();return this.mutations.forEach((r=>{const o=e.get(r.key),i=o.overlayedDocument;let a=this.applyToLocalView(i,o.mutatedFields);a=t.has(r.key)?null:a;const s=Rn(i,a);null!==s&&n.set(r.key,s),i.isValidDocument()||i.convertToNoDocument(Y.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),sn())}isEqual(e){return this.batchId===e.batchId&&G(this.mutations,e.mutations,((e,t)=>Pn(e,t)))&&G(this.baseMutations,e.baseMutations,((e,t)=>Pn(e,t)))}}class Kn{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){D(e.mutations.length===n.length);let r=function(){return on}();const o=e.mutations;for(let i=0;i<o.length;i++)r=r.insert(o[i].key,n[i].version);return new Kn(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qn{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hn,Gn;function Xn(e){switch(e){default:return R();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Yn(e){if(void 0===e)return T("GRPC error has no .code"),V.UNKNOWN;switch(e){case Hn.OK:return V.OK;case Hn.CANCELLED:return V.CANCELLED;case Hn.UNKNOWN:return V.UNKNOWN;case Hn.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Hn.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Hn.INTERNAL:return V.INTERNAL;case Hn.UNAVAILABLE:return V.UNAVAILABLE;case Hn.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Hn.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Hn.NOT_FOUND:return V.NOT_FOUND;case Hn.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Hn.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Hn.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Hn.ABORTED:return V.ABORTED;case Hn.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Hn.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Hn.DATA_LOSS:return V.DATA_LOSS;default:return R()}}(Gn=Hn||(Hn={}))[Gn.OK=0]="OK",Gn[Gn.CANCELLED=1]="CANCELLED",Gn[Gn.UNKNOWN=2]="UNKNOWN",Gn[Gn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Gn[Gn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Gn[Gn.NOT_FOUND=5]="NOT_FOUND",Gn[Gn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Gn[Gn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Gn[Gn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Gn[Gn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Gn[Gn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Gn[Gn.ABORTED=10]="ABORTED",Gn[Gn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Gn[Gn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Gn[Gn.INTERNAL=13]="INTERNAL",Gn[Gn.UNAVAILABLE=14]="UNAVAILABLE",Gn[Gn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qn=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new r([4294967295,4294967295],0);function er(e){const t=Jn().encode(e),n=new o;return n.update(t),new Uint8Array(n.digest())}function tr(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),o=t.getUint32(4,!0),i=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new r([n,o],0),new r([i,a],0)]}class nr{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new rr(`Invalid padding: ${t}`);if(n<0)throw new rr(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new rr(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new rr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=r.fromNumber(this.Ie)}Ee(e,t,n){let o=e.add(t.multiply(r.fromNumber(n)));return 1===o.compare(Zn)&&(o=new r([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=er(e),[n,r]=tr(t);for(let o=0;o<this.hashCount;o++){const e=this.Ee(n,r,o);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),i=new nr(o,r,t);return n.forEach((e=>i.insert(e))),i}insert(e){if(0===this.Ie)return;const t=er(e),[n,r]=tr(t);for(let o=0;o<this.hashCount;o++){const e=this.Ee(n,r,o);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class rr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,n,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ir.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new or(Y.min(),r,new Ee(H),Qt(),sn())}}class ir{constructor(e,t,n,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ir(n,t,sn(),sn(),sn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class sr{constructor(e,t){this.targetId=e,this.me=t}}class lr{constructor(e,t,n=Fe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ur{constructor(){this.fe=0,this.ge=hr(),this.pe=Fe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=sn(),t=sn(),n=sn();return this.ge.forEach(((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:R()}})),new ir(this.pe,this.ye,e,t,n)}ve(){this.we=!1,this.ge=hr()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,D(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class cr{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qt(),this.qe=dr(),this.Qe=new Ee(H)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:R()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const o=r.target;if(Rt(o))if(0===n){const e=new te(o.path);this.Ue(t,e,ot.newNoDocument(e,Y.min()))}else D(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),o=n?this.Xe(n,e,r):1;if(0!==o){this.je(t);const e=2===o?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}null==Qn||Qn.et(function(e,t,n,r,o){var i,a,s,l,u,c;const d={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},h=t.unchangedNames;return h&&(d.bloomFilter={applied:0===o,hashCount:null!==(i=null==h?void 0:h.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(l=null===(s=null===(a=null==h?void 0:h.bits)||void 0===a?void 0:a.bitmap)||void 0===s?void 0:s.length)&&void 0!==l?l:0,padding:null!==(c=null===(u=null==h?void 0:h.bits)||void 0===u?void 0:u.padding)&&void 0!==c?c:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),d}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e.me,this.Le.tt(),n,o))}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:o=0}=t;let i,a;try{i=Ve(n).toUint8Array()}catch(e){if(e instanceof Ae)return A("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{a=new nr(i,r,o)}catch(e){return A(e instanceof rr?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===a.Ie?null:a}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const o=this.Le.tt(),i=`projects/${o.projectId}/databases/${o.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.Ue(t,n,null),r++)})),r}rt(e){const t=new Map;this.Be.forEach(((n,r)=>{const o=this.Je(r);if(o){if(n.current&&Rt(o.target)){const t=new te(o.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,ot.newNoDocument(t,e))}n.be&&(t.set(r,n.Ce()),n.ve())}}));let n=sn();this.qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new or(e,t,this.Qe,this.ke,n);return this.ke=Qt(),this.qe=dr(),this.Qe=new Ee(H),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ur,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new xe(H),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||I("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ur),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function dr(){return new Ee(te.comparator)}function hr(){return new Ee(te.comparator)}const fr=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),pr=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),vr=(()=>{const e={and:"AND",or:"OR"};return e})();class mr{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function gr(e,t){return e.useProto3Json||pe(t)?t:{value:t}}function yr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function br(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function wr(e,t){return yr(e,t.toTimestamp())}function Sr(e){return D(!!e),Y.fromTimestamp(function(e){const t=De(e);return new X(t.seconds,t.nanos)}(e))}function _r(e,t){return Er(e,t).canonicalString()}function Er(e,t){const n=function(e){return new J(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function Cr(e){const t=J.fromString(e);return D(Hr(t)),t}function kr(e,t){return _r(e.databaseId,t.path)}function xr(e,t){const n=Cr(t);if(n.get(1)!==e.databaseId.projectId)throw new P(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new P(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new te(Fr(n))}function Ir(e,t){return _r(e.databaseId,t)}function Tr(e){const t=Cr(e);return 4===t.length?J.emptyPath():Fr(t)}function Ar(e){return new J(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Fr(e){return D(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Rr(e,t,n){return{name:kr(e,t),fields:n.value.mapValue.fields}}function Dr(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:R()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],i=function(e,t){return e.useProto3Json?(D(void 0===t||"string"==typeof t),Fe.fromBase64String(t||"")):(D(void 0===t||t instanceof Buffer||t instanceof Uint8Array),Fe.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,s=a&&function(e){const t=void 0===e.code?V.UNKNOWN:Yn(e.code);return new P(t,e.message||"")}(a);n=new lr(r,o,i,s||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const o=xr(e,r.document.name),i=Sr(r.document.updateTime),a=r.document.createTime?Sr(r.document.createTime):Y.min(),s=new nt({mapValue:{fields:r.document.fields}}),l=ot.newFoundDocument(o,i,a,s),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ar(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const o=xr(e,r.document),i=r.readTime?Sr(r.readTime):Y.min(),a=ot.newNoDocument(o,i),s=r.removedTargetIds||[];n=new ar([],s,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const o=xr(e,r.document),i=r.removedTargetIds||[];n=new ar([],i,o,null)}else{if(!("filter"in t))return R();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:o}=e,i=new qn(r,o),a=e.targetId;n=new sr(a,i)}}return n}function Or(e,t){let n;if(t instanceof Nn)n={update:Rr(e,t.key,t.value)};else if(t instanceof jn)n={delete:kr(e,t.key)};else if(t instanceof Mn)n={update:Rr(e,t.key,t.data),updateMask:qr(t.fieldMask)};else{if(!(t instanceof $n))return R();n={verify:kr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof gn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof yn)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wn)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof _n)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw R()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:wr(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:R()}(e,t.precondition)),n}function Vr(e,t){return e&&e.length>0?(D(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Sr(e.updateTime):Sr(t);return n.isEqual(Y.min())&&(n=Sr(t)),new In(n,e.transformResults||[])}(e,t)))):[]}function Pr(e,t){return{documents:[Ir(e,t.path)]}}function Nr(e,t){const n={structuredQuery:{}},r=t.path;let o;null!==t.collectionGroup?(o=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ir(e,o);const i=function(e){if(0!==e.length)return zr(ht.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Ur(e.field),direction:Wr(e.dir)}}(e)))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const s=gr(e,t.limit);return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:o}}function Mr(e){let t=Tr(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){D(1===r);const e=n.from[0];e.allDescendants?o=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=Br(e);return t instanceof ht&&pt(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=function(e){return e.map((e=>function(e){return new lt(Kr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let s=null;n.limit&&(s=function(e){let t;return t="object"==typeof e?e.value:e,pe(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new it(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new it(n,t)}(n.endAt)),Ot(t,o,a,i,s,"F",l,u)}function Lr(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function Br(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Kr(e.unaryFilter.field);return dt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Kr(e.unaryFilter.field);return dt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Kr(e.unaryFilter.field);return dt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Kr(e.unaryFilter.field);return dt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(e):void 0!==e.fieldFilter?function(e){return dt.create(Kr(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return ht.create(e.compositeFilter.filters.map((e=>Br(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return R()}}(e.compositeFilter.op))}(e):R()}function Wr(e){return fr[e]}function jr(e){return pr[e]}function $r(e){return vr[e]}function Ur(e){return{fieldPath:e.canonicalString()}}function Kr(e){return ee.fromServerFormat(e.fieldPath)}function zr(e){return e instanceof dt?function(e){if("=="===e.op){if(Je(e.value))return{unaryFilter:{field:Ur(e.field),op:"IS_NAN"}};if(Qe(e.value))return{unaryFilter:{field:Ur(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Je(e.value))return{unaryFilter:{field:Ur(e.field),op:"IS_NOT_NAN"}};if(Qe(e.value))return{unaryFilter:{field:Ur(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(e.field),op:jr(e.op),value:e.value}}}(e):e instanceof ht?function(e){const t=e.getFilters().map((e=>zr(e)));return 1===t.length?t[0]:{compositeFilter:{op:$r(e.op),filters:t}}}(e):R()}function qr(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Hr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t,n,r,o=Y.min(),i=Y.min(),a=Fe.EMPTY_BYTE_STRING,s=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a,this.expectedCount=s}withSequenceNumber(e){return new Gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.ct=e}}function Yr(e){const t=Mr({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?jt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(Oe(e.integerValue));else if("doubleValue"in e){const n=Oe(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),ve(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Et(t,20),"string"==typeof n&&(n=De(n)),t.At(`${n.seconds||""}`),t.dt(n.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(Ve(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?tt(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):R()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const r of Object.keys(n))this.Rt(r,t),this.It(n[r],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const r of n)this.It(r,t)}gt(e,t){this.Et(t,37),te.fromName(e).path.forEach((e=>{this.Et(t,60),this.St(e,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}Qr.bt=new Qr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr{constructor(){this._n=new Zr}addToCollectionParentIndex(e,t){return this._n.add(t),ce.resolve()}getCollectionParents(e,t){return ce.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return ce.resolve()}deleteFieldIndex(e,t){return ce.resolve()}deleteAllFieldIndexes(e){return ce.resolve()}createTargetIndexes(e,t){return ce.resolve()}getDocumentsMatchingTarget(e,t){return ce.resolve(null)}getIndexType(e,t){return ce.resolve(0)}getFieldIndexes(e,t){return ce.resolve([])}getNextCollectionGroupToUpdate(e){return ce.resolve(null)}getMinOffset(e,t){return ce.resolve(ie.min())}getMinOffsetFromCollectionGroup(e,t){return ce.resolve(ie.min())}updateCollectionGroup(e,t,n){return ce.resolve()}updateIndexEntries(e,t){return ce.resolve()}}class Zr{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new xe(J.comparator),o=!r.has(n);return this.index[t]=r.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new xe(J.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class eo{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new eo(e,eo.DEFAULT_COLLECTION_PERCENTILE,eo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */eo.DEFAULT_COLLECTION_PERCENTILE=10,eo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,eo.DEFAULT=new eo(41943040,eo.DEFAULT_COLLECTION_PERCENTILE,eo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),eo.DISABLED=new eo(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class to{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new to(0)}static Ln(){return new to(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(){this.changes=new Xt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ce.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&On(n.mutation,e,Te.empty(),X.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,sn()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=sn()){const r=tn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Zt();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=tn();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,sn())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let o=Qt();const i=rn(),a=function(){return rn()}();return t.forEach(((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof Mn)?o=o.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),On(a.mutation,t,a.mutation.getFieldMask(),X.now())):i.set(t.key,Te.empty())})),this.recalculateAndSaveOverlays(e,o).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new ro(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=rn();let r=new Ee(((e,t)=>e-t)),o=sn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const o of e)o.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let a=n.get(e)||Te.empty();a=o.applyToLocalView(i,a),n.set(e,a);const s=(r.get(o.batchId)||sn()).add(e);r=r.insert(o.batchId,s)}))})).next((()=>{const i=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),s=r.key,l=r.value,u=nn();l.forEach((e=>{if(!o.has(e)){const r=Rn(t.get(e),n.get(e));null!==r&&u.set(e,r),o=o.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,s,u))}return ce.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return te.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Nt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((o=>{const i=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-o.size):ce.resolve(tn());let a=-1,s=o;return i.next((t=>ce.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),o.get(t)?ce.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{s=s.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,o))).next((()=>this.computeViews(e,s,t,sn()))).next((e=>({batchId:a,changes:en(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new te(t)).next((e=>{let t=Zt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const o=t.collectionGroup;let i=Zt();return this.indexManager.getCollectionParents(e,o).next((a=>ce.forEach(a,(a=>{const s=function(e,t){return new Dt(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,a.child(o));return this.getDocumentsMatchingCollectionQuery(e,s,n,r).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(o=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,o,r)))).next((e=>{o.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,ot.newInvalidDocument(r)))}));let n=Zt();return e.forEach(((e,r)=>{const i=o.get(e);void 0!==i&&On(i.mutation,r,Te.empty(),X.now()),zt(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return ce.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Sr(e.createTime)}}(t)),ce.resolve()}getNamedQuery(e,t){return ce.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(e){return{name:e.name,query:Yr(e.bundledQuery),readTime:Sr(e.readTime)}}(t)),ce.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.overlays=new Ee(te.comparator),this.hr=new Map}getOverlay(e,t){return ce.resolve(this.overlays.get(t))}getOverlays(e,t){const n=tn();return ce.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),ce.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.hr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.hr.delete(n)),ce.resolve()}getOverlaysForCollection(e,t,n){const r=tn(),o=t.length+1,i=new te(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){const e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===o&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ce.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let o=new Ee(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=o.get(e.largestBatchId);null===t&&(t=tn(),o=o.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=tn(),s=o.getIterator();for(;s.hasNext();)if(s.getNext().value.forEach(((e,t)=>a.set(e,t))),a.size()>=r)break;return ce.resolve(a)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new zn(t,n));let o=this.hr.get(t);void 0===o&&(o=sn(),this.hr.set(t,o)),this.hr.set(t,o.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.Pr=new xe(lo.Ir),this.Tr=new xe(lo.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const n=new lo(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ar(new lo(e,t))}Rr(e,t){e.forEach((e=>this.removeReference(e,t)))}Vr(e){const t=new te(new J([])),n=new lo(t,e),r=new lo(t,e+1),o=[];return this.Tr.forEachInRange([n,r],(e=>{this.Ar(e),o.push(e.key)})),o}mr(){this.Pr.forEach((e=>this.Ar(e)))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new te(new J([])),n=new lo(t,e),r=new lo(t,e+1);let o=sn();return this.Tr.forEachInRange([n,r],(e=>{o=o.add(e.key)})),o}containsKey(e){const t=new lo(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class lo{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return te.comparator(e.key,t.key)||H(e.pr,t.pr)}static Er(e,t){return H(e.pr,t.pr)||te.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new xe(lo.Ir)}checkEmpty(e){return ce.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Un(o,t,n,r);this.mutationQueue.push(i);for(const a of r)this.wr=this.wr.add(new lo(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return ce.resolve(i)}lookupMutationBatch(e,t){return ce.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.br(n),o=r<0?0:r;return ce.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return ce.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return ce.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new lo(t,0),r=new lo(t,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([n,r],(e=>{const t=this.Sr(e.pr);o.push(t)})),ce.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new xe(H);return t.forEach((e=>{const t=new lo(e,0),r=new lo(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],(e=>{n=n.add(e.pr)}))})),ce.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let o=n;te.isDocumentKey(o)||(o=o.child(""));const i=new lo(new te(o),0);let a=new xe(H);return this.wr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.pr)),!0)}),i),ce.resolve(this.Dr(a))}Dr(e){const t=[];return e.forEach((e=>{const n=this.Sr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){D(0===this.Cr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return ce.forEach(t.mutations,(r=>{const o=new lo(r.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.wr=n}))}Mn(e){}containsKey(e,t){const n=new lo(t,0),r=this.wr.firstAfterOrEqual(n);return ce.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ce.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.vr=e,this.docs=function(){return new Ee(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),o=r?r.size:0,i=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ce.resolve(n?n.document.mutableCopy():ot.newInvalidDocument(t))}getEntries(e,t){let n=Qt();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ot.newInvalidDocument(e))})),ce.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let o=Qt();const i=t.path,a=new te(i.child("")),s=this.docs.getIteratorFrom(a);for(;s.hasNext();){const{key:e,value:{document:a}}=s.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||ae(oe(a),n)<=0||(r.has(a.key)||zt(t,a))&&(o=o.insert(a.key,a.mutableCopy()))}return ce.resolve(o)}getAllFromCollectionGroup(e,t,n,r){R()}Fr(e,t){return ce.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ho(this)}getSize(e){return ce.resolve(this.size)}}class ho extends no{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)})),ce.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.persistence=e,this.Mr=new Xt((e=>At(e)),Ft),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new so,this.targetCount=0,this.Lr=to.Nn()}forEachTarget(e,t){return this.Mr.forEach(((e,n)=>t(n))),ce.resolve()}getLastRemoteSnapshotVersion(e){return ce.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ce.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),ce.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),ce.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new to(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,ce.resolve()}updateTargetData(e,t){return this.qn(t),ce.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,ce.resolve()}removeTargets(e,t,n){let r=0;const o=[];return this.Mr.forEach(((i,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Mr.delete(i),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),ce.waitFor(o).next((()=>r))}getTargetCount(e){return ce.resolve(this.targetCount)}getTargetData(e,t){const n=this.Mr.get(t)||null;return ce.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),ce.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach((t=>{o.push(r.markPotentiallyOrphaned(e,t))})),ce.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),ce.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Nr.gr(t);return ce.resolve(n)}containsKey(e,t){return ce.resolve(this.Nr.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this.Br={},this.overlays={},this.kr=new fe(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new fo(this),this.indexManager=new Jr,this.remoteDocumentCache=function(e){return new co(e)}((e=>this.referenceDelegate.Kr(e))),this.serializer=new Xr(t),this.$r=new io(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ao,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new uo(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){I("MemoryPersistence","Starting transaction:",e);const r=new vo(this.kr.next());return this.referenceDelegate.Ur(),n(r).next((e=>this.referenceDelegate.Wr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gr(e,t){return ce.or(Object.values(this.Br).map((n=>()=>n.containsKey(e,t))))}}class vo extends le{constructor(e){super(),this.currentSequenceNumber=e}}class mo{constructor(e){this.persistence=e,this.zr=new so,this.jr=null}static Hr(e){return new mo(e)}get Jr(){if(this.jr)return this.jr;throw R()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),ce.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),ce.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),ce.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach((e=>this.Jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ce.forEach(this.Jr,(n=>{const r=te.fromPath(n);return this.Yr(e,r).next((e=>{e||t.removeEntry(r,Y.min())}))})).next((()=>(this.jr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yr(e,t).next((e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())}))}Kr(e){return 0}Yr(e,t){return ce.or([()=>ce.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class go{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}static Ki(e,t){let n=sn(),r=sn();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new go(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return(0,l.nr)()?8:de((0,l.ZQ)())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){const o={result:null};return this.ji(e,t).next((e=>{o.result=e})).next((()=>{if(!o.result)return this.Hi(e,t,r,n).next((e=>{o.result=e}))})).next((()=>{if(o.result)return;const n=new yo;return this.Ji(e,t,n).next((r=>{if(o.result=r,this.Ui)return this.Yi(e,t,n,r.size)}))})).next((()=>o.result))}Yi(e,t,n,r){return n.documentReadCount<this.Wi?(x()<=s.$b.DEBUG&&I("QueryEngine","SDK will not create cache indexes for query:",Kt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),ce.resolve()):(x()<=s.$b.DEBUG&&I("QueryEngine","Query:",Kt(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(x()<=s.$b.DEBUG&&I("QueryEngine","The SDK decides to create cache indexes for query:",Kt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Lt(t))):ce.resolve())}ji(e,t){if(Pt(t))return ce.resolve(null);let n=Lt(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=jt(t,null,"F"),n=Lt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const o=sn(...r);return this.zi.getDocuments(e,o).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.Zi(t,r);return this.Xi(t,i,o,n.readTime)?this.ji(e,jt(t,null,"F")):this.es(e,i,t,n)}))))})))))}Hi(e,t,n,r){return Pt(t)||r.isEqual(Y.min())?ce.resolve(null):this.zi.getDocuments(e,n).next((o=>{const i=this.Zi(t,o);return this.Xi(t,i,n,r)?ce.resolve(null):(x()<=s.$b.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kt(t)),this.es(e,i,t,re(r,-1)).next((e=>e)))}))}Zi(e,t){let n=new xe(Ht(e));return t.forEach(((t,r)=>{zt(e,r)&&(n=n.add(r))})),n}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const o="F"===e.limitType?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Ji(e,t,n){return x()<=s.$b.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",Kt(t)),this.zi.getDocumentsMatchingQuery(e,t,ie.min(),n)}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new Ee(H),this.rs=new Xt((e=>At(e)),Ft),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oo(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ns)))}}function So(e,t,n,r){return new wo(e,t,n,r)}async function _o(e,t){const n=O(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((o=>(r=o,n._s(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const o=[],i=[];let a=sn();for(const e of r){o.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next((e=>({us:e,removedBatchIds:o,addedBatchIds:i})))}))}))}function Eo(e,t){const n=O(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),o=n.os.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const o=n.batch,i=o.keys();let a=ce.resolve();return i.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);D(null!==i),t.version.compareTo(i)<0&&(o.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,o)))}(n,e,t,o).next((()=>o.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=sn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Co(e){const t=O(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Qr.getLastRemoteSnapshotVersion(e)))}function ko(e,t){const n=O(e),r=t.snapshotVersion;let o=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.os.newChangeBuffer({trackRemovals:!0});o=n.ns;const a=[];t.targetChanges.forEach(((i,s)=>{const l=o.get(s);if(!l)return;a.push(n.Qr.removeMatchingKeys(e,i.removedDocuments,s).next((()=>n.Qr.addMatchingKeys(e,i.addedDocuments,s))));let u=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(s)?u=u.withResumeToken(Fe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),o=o.insert(s,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,u,i)&&a.push(n.Qr.updateTargetData(e,u))}));let s=Qt(),l=sn();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),a.push(xo(e,i,t.documentUpdates).next((e=>{s=e.cs,l=e.ls}))),!r.isEqual(Y.min())){const t=n.Qr.getLastRemoteSnapshotVersion(e).next((t=>n.Qr.setTargetsMetadata(e,e.currentSequenceNumber,r)));a.push(t)}return ce.waitFor(a).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,s,l))).next((()=>s))})).then((e=>(n.ns=o,e)))}function xo(e,t,n){let r=sn(),o=sn();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Qt();return n.forEach(((n,i)=>{const a=e.get(n);i.isFoundDocument()!==a.isFoundDocument()&&(o=o.add(n)),i.isNoDocument()&&i.version.isEqual(Y.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!a.isValidDocument()||i.version.compareTo(a.version)>0||0===i.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):I("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",i.version)})),{cs:r,ls:o}}))}function Io(e,t){const n=O(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function To(e,t){const n=O(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Qr.getTargetData(e,t).next((o=>o?(r=o,ce.resolve(r)):n.Qr.allocateTargetId(e).next((o=>(r=new Gr(t,o,"TargetPurposeListen",e.currentSequenceNumber),n.Qr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ns.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ns=n.ns.insert(e.targetId,e),n.rs.set(t,e.targetId)),e}))}async function Ao(e,t,n){const r=O(e),o=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,o)))}catch(e){if(!he(e))throw e;I("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ns=r.ns.remove(t),r.rs.delete(o.target)}function Fo(e,t,n){const r=O(e);let o=Y.min(),i=sn();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=O(e),o=r.rs.get(n);return void 0!==o?ce.resolve(r.ns.get(o)):r.Qr.getTargetData(t,n)}(r,e,Lt(t)).next((t=>{if(t)return o=t.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.ts.getDocumentsMatchingQuery(e,t,n?o:Y.min(),n?i:sn()))).next((e=>(Ro(r,qt(t),e),{documents:e,hs:i})))))}function Ro(e,t,n){let r=e.ss.get(t)||Y.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.ss.set(t,r)}class Do{constructor(){this.activeTargetIds=un()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Oo{constructor(){this.no=new Do,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Do,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{io(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){I("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No=null;function Mo(){return null===No?No=function(){return 268435456+Math.round(2147483648*Math.random())}():No++,"0x"+No.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Lo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="WebChannelConnection";class jo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.wo=t+"://"+e.host,this.So=`projects/${n}/databases/${r}`,this.bo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Do(){return!1}Co(e,t,n,r,o){const i=Mo(),a=this.vo(e,t.toUriEncodedString());I("RestConnection",`Sending RPC '${e}' ${i}:`,a,n);const s={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(s,r,o),this.Mo(e,a,s,n).then((t=>(I("RestConnection",`Received RPC '${e}' ${i}: `,t),t)),(t=>{throw A("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",n),t}))}xo(e,t,n,r,o,i){return this.Co(e,t,n,r,o)}Fo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+C}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}vo(e,t){const n=Lo[e];return`${this.wo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,n,r){const o=Mo();return new Promise(((i,a)=>{const s=new d;s.setWithCredentials(!0),s.listenOnce(p.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case v.NO_ERROR:const t=s.getResponseJson();I(Wo,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(t)),i(t);break;case v.TIMEOUT:I(Wo,`RPC '${e}' ${o} timed out`),a(new P(V.DEADLINE_EXCEEDED,"Request time out"));break;case v.HTTP_ERROR:const n=s.getStatus();if(I(Wo,`RPC '${e}' ${o} failed with status:`,n,"response text:",s.getResponseText()),n>0){let e=s.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(t)>=0?t:V.UNKNOWN}(t.status);a(new P(e,t.message))}else a(new P(V.UNKNOWN,"Server responded with status "+s.getStatus()))}else a(new P(V.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{I(Wo,`RPC '${e}' ${o} completed.`)}}));const l=JSON.stringify(r);I(Wo,`RPC '${e}' ${o} sending request:`,r),s.send(t,"POST",l,n,15)}))}Oo(e,t,n){const r=Mo(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=b(),a=y(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(s.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(s.xmlHttpFactory=new h({})),this.Fo(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;const u=o.join("");I(Wo,`Creating RPC '${e}' stream ${r}: ${u}`,s);const c=i.createWebChannel(u,s);let d=!1,p=!1;const v=new Bo({lo:t=>{p?I(Wo,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(I(Wo,`Opening RPC '${e}' stream ${r} transport.`),c.open(),d=!0),I(Wo,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},ho:()=>c.close()}),w=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return w(c,f.EventType.OPEN,(()=>{p||(I(Wo,`RPC '${e}' stream ${r} transport opened.`),v.mo())})),w(c,f.EventType.CLOSE,(()=>{p||(p=!0,I(Wo,`RPC '${e}' stream ${r} transport closed`),v.po())})),w(c,f.EventType.ERROR,(t=>{p||(p=!0,A(Wo,`RPC '${e}' stream ${r} transport errored:`,t),v.po(new P(V.UNAVAILABLE,"The operation could not be completed")))})),w(c,f.EventType.MESSAGE,(t=>{var n;if(!p){const o=t.data[0];D(!!o);const i=o,a=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(a){I(Wo,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=Hn[e];if(void 0!==t)return Yn(t)}(t),o=a.message;void 0===n&&(n=V.INTERNAL,o="Unknown error status: "+t+" with message "+a.message),p=!0,v.po(new P(n,o)),c.close()}else I(Wo,`RPC '${e}' stream ${r} received:`,o),v.yo(o)}})),w(a,g.STAT_EVENT,(t=>{t.stat===m.PROXY?I(Wo,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===m.NOPROXY&&I(Wo,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{v.fo()}),0),v}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(e){return new mr(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t,n=1e3,r=1.5,o=6e4){this.oi=e,this.timerId=t,this.No=n,this.Lo=r,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),r=Math.max(0,t-n);r>0&&I("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,r,(()=>(this.Qo=Date.now(),e()))),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){null!==this.qo&&(this.qo.skipDelay(),this.qo=null)}cancel(){null!==this.qo&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t,n,r,o,i,a,s){this.oi=e,this.Go=n,this.zo=r,this.connection=o,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=s,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Ko(e,t)}Zo(){return 1===this.state||5===this.state||this.Xo()}Xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&null===this.Ho&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,(()=>this.r_())))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,4!==e?this.Yo.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(T(t.toString()),T("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===V.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.jo===t&&this.u_(e,n)}),(t=>{e((()=>{const e=new P(V.UNKNOWN,"Fetching auth token failed: "+t.message);return this.c_(e)}))}))}u_(e,t){const n=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po((()=>{n((()=>this.listener.Po()))})),this.stream.To((()=>{n((()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,(()=>(this.Xo()&&(this.state=3),Promise.resolve()))),this.listener.To())))})),this.stream.Ao((e=>{n((()=>this.c_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}e_(){this.state=5,this.Yo.$o((async()=>{this.state=0,this.start()}))}c_(e){return I("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget((()=>this.jo===e?t():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qo extends zo{constructor(e,t,n,r,o,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=o}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=Dr(this.serializer,e),n=function(e){if(!("targetChange"in e))return Y.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Y.min():t.readTime?Sr(t.readTime):Y.min()}(e);return this.listener.h_(t,n)}P_(e){const t={};t.database=Ar(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Rt(r)?{documents:Pr(e,r)}:{query:Nr(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=br(e,t.resumeToken);const r=gr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Y.min())>0){n.readTime=yr(e,t.snapshotVersion.toTimestamp());const r=gr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=Lr(this.serializer,e);n&&(t.labels=n),this.i_(t)}I_(e){const t={};t.database=Ar(this.serializer),t.removeTarget=e,this.i_(t)}}class Ho extends zo{constructor(e,t,n,r,o,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(D(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=Vr(e.writeResults,e.commitTime),n=Sr(e.commitTime);return this.listener.A_(n,t)}return D(!e.writeResults||0===e.writeResults.length),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Ar(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Or(this.serializer,e)))};this.i_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.m_=!1}f_(){if(this.m_)throw new P(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,n,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,i])=>this.connection.Co(e,Er(t,n),r,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new P(V.UNKNOWN,e.toString())}))}xo(e,t,n,r,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.xo(e,Er(t,n),r,i,a,o))).catch((e=>{throw"FirebaseError"===e.name?(e.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new P(V.UNKNOWN,e.toString())}))}terminate(){this.m_=!0,this.connection.terminate()}}class Xo{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){0===this.g_&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve()))))}D_(e){"Online"===this.state?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,"Online"===e&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(T(t),this.y_=!1):I("OnlineStateTracker",t)}C_(){null!==this.p_&&(this.p_.cancel(),this.p_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t,n,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io((e=>{n.enqueueAndForget((async()=>{ii(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=O(e);t.M_.add(4),await Jo(t),t.N_.set("Unknown"),t.M_.delete(4),await Qo(t)}(this))}))})),this.N_=new Xo(n,r)}}async function Qo(e){if(ii(e))for(const t of e.x_)await t(!0)}async function Jo(e){for(const t of e.x_)await t(!1)}function Zo(e,t){const n=O(e);n.F_.has(t.targetId)||(n.F_.set(t.targetId,t),oi(n)?ri(n):Ci(n).Xo()&&ti(n,t))}function ei(e,t){const n=O(e),r=Ci(n);n.F_.delete(t),r.Xo()&&ni(n,t),0===n.F_.size&&(r.Xo()?r.n_():ii(n)&&n.N_.set("Unknown"))}function ti(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Y.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ci(e).P_(t)}function ni(e,t){e.L_.xe(t),Ci(e).I_(t)}function ri(e){e.L_=new cr({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),Ci(e).start(),e.N_.w_()}function oi(e){return ii(e)&&!Ci(e).Zo()&&e.F_.size>0}function ii(e){return 0===O(e).M_.size}function ai(e){e.L_=void 0}async function si(e){e.N_.set("Online")}async function li(e){e.F_.forEach(((t,n)=>{ti(e,t)}))}async function ui(e,t){ai(e),oi(e)?(e.N_.D_(t),ri(e)):e.N_.set("Unknown")}async function ci(e,t,n){if(e.N_.set("Online"),t instanceof lr&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.F_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.F_.delete(r),e.L_.removeTarget(r))}(e,t)}catch(n){I("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await di(e,n)}else if(t instanceof ar?e.L_.Ke(t):t instanceof sr?e.L_.He(t):e.L_.We(t),!n.isEqual(Y.min()))try{const t=await Co(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.L_.rt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const o=e.F_.get(r);o&&e.F_.set(r,o.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.F_.get(t);if(!r)return;e.F_.set(t,r.withResumeToken(Fe.EMPTY_BYTE_STRING,r.snapshotVersion)),ni(e,t);const o=new Gr(r.target,t,n,r.sequenceNumber);ti(e,o)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){I("RemoteStore","Failed to raise snapshot:",t),await di(e,t)}}async function di(e,t,n){if(!he(t))throw t;e.M_.add(1),await Jo(e),e.N_.set("Offline"),n||(n=()=>Co(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{I("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await Qo(e)}))}function hi(e,t){return t().catch((n=>di(e,n,t)))}async function fi(e){const t=O(e),n=ki(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;pi(t);)try{const e=await Io(t.localStore,r);if(null===e){0===t.v_.length&&n.n_();break}r=e.batchId,vi(t,e)}catch(e){await di(t,e)}mi(t)&&gi(t)}function pi(e){return ii(e)&&e.v_.length<10}function vi(e,t){e.v_.push(t);const n=ki(e);n.Xo()&&n.E_&&n.d_(t.mutations)}function mi(e){return ii(e)&&!ki(e).Zo()&&e.v_.length>0}function gi(e){ki(e).start()}async function yi(e){ki(e).V_()}async function bi(e){const t=ki(e);for(const n of e.v_)t.d_(n.mutations)}async function wi(e,t,n){const r=e.v_.shift(),o=Kn.from(r,t,n);await hi(e,(()=>e.remoteSyncer.applySuccessfulWrite(o))),await fi(e)}async function Si(e,t){t&&ki(e).E_&&await async function(e,t){if(function(e){return Xn(e)&&e!==V.ABORTED}(t.code)){const n=e.v_.shift();ki(e).t_(),await hi(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await fi(e)}}(e,t),mi(e)&&gi(e)}async function _i(e,t){const n=O(e);n.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");const r=ii(n);n.M_.add(3),await Jo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.M_.delete(3),await Qo(n)}async function Ei(e,t){const n=O(e);t?(n.M_.delete(2),await Qo(n)):t||(n.M_.add(2),await Jo(n),n.N_.set("Unknown"))}function Ci(e){return e.B_||(e.B_=function(e,t,n){const r=O(e);return r.f_(),new qo(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Po:si.bind(null,e),To:li.bind(null,e),Ao:ui.bind(null,e),h_:ci.bind(null,e)}),e.x_.push((async t=>{t?(e.B_.t_(),oi(e)?ri(e):e.N_.set("Unknown")):(await e.B_.stop(),ai(e))}))),e.B_}function ki(e){return e.k_||(e.k_=function(e,t,n){const r=O(e);return r.f_(),new Ho(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Po:()=>Promise.resolve(),To:yi.bind(null,e),Ao:Si.bind(null,e),R_:bi.bind(null,e),A_:wi.bind(null,e)}),e.x_.push((async t=>{t?(e.k_.t_(),await fi(e)):(await e.k_.stop(),e.v_.length>0&&(I("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))}))),e.k_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xi{constructor(e,t,n,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=o,this.deferred=new N,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,o){const i=Date.now()+n,a=new xi(e,t,i,r,o);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new P(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ii(e,t){if(T("AsyncQueue",`${t}: ${e}`),he(e))return new P(V.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.comparator=e?(t,n)=>e(t,n)||te.comparator(t.key,n.key):(e,t)=>te.comparator(e.key,t.key),this.keyedMap=Zt(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Ti(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ti))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Ti;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.q_=new Ee(te.comparator)}track(e){const t=e.doc.key,n=this.q_.get(t);n?0!==e.type&&3===n.type?this.q_=this.q_.insert(t,e):3===e.type&&1!==n.type?this.q_=this.q_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.q_=this.q_.remove(t):1===e.type&&2===n.type?this.q_=this.q_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):R():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Fi{constructor(e,t,n,r,o,i,a,s,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=o,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=s,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,o){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Fi(e,t,Ti.emptySet(t),i,n,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$t(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some((e=>e.G_()))}}class Di{constructor(){this.queries=new Xt((e=>Ut(e)),$t),this.onlineState="Unknown",this.z_=new Set}}async function Oi(e,t){const n=O(e);let r=3;const o=t.query;let i=n.queries.get(o);i?!i.W_()&&t.G_()&&(r=2):(i=new Ri,r=t.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(o,!0);break;case 1:i.K_=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(e){const n=Ii(e,`Initialization of query '${Kt(t.query)}' failed`);return void t.onError(n)}n.queries.set(o,i),i.U_.push(t),t.j_(n.onlineState),i.K_&&t.H_(i.K_)&&Mi(n)}async function Vi(e,t){const n=O(e),r=t.query;let o=3;const i=n.queries.get(r);if(i){const e=i.U_.indexOf(t);e>=0&&(i.U_.splice(e,1),0===i.U_.length?o=t.G_()?0:1:!i.W_()&&t.G_()&&(o=2))}switch(o){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Pi(e,t){const n=O(e);let r=!1;for(const o of t){const e=o.query,t=n.queries.get(e);if(t){for(const e of t.U_)e.H_(o)&&(r=!0);t.K_=o}}r&&Mi(n)}function Ni(e,t,n){const r=O(e),o=r.queries.get(t);if(o)for(const i of o.U_)i.onError(n);r.queries.delete(t)}function Mi(e){e.z_.forEach((e=>{e.next()}))}var Li,Bi;(Bi=Li||(Li={})).J_="default",Bi.Cache="cache";class Wi{constructor(e,t,n){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Fi(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache)return!0;if(!this.G_())return!0;const n="Offline"!==t;return(!this.options.ra||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}na(e){e=Fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Li.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ji{constructor(e){this.key=e}}class $i{constructor(e){this.key=e}}class Ui{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=sn(),this.mutatedKeys=sn(),this.Ia=Ht(e),this.Ta=new Ti(this.Ia)}get Ea(){return this.la}da(e,t){const n=t?t.Aa:new Ai,r=t?t.Ta:this.Ta;let o=t?t.mutatedKeys:this.mutatedKeys,i=r,a=!1;const s="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=zt(this.query,t)?t:null,d=!!u&&this.mutatedKeys.has(u.key),h=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?d!==h&&(n.track({type:3,doc:c}),f=!0):this.Ra(u,c)||(n.track({type:2,doc:c}),f=!0,(s&&this.Ia(c,s)>0||l&&this.Ia(c,l)<0)&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(s||l)&&(a=!0)),f&&(c?(i=i.add(c),o=h?o.add(e):o.delete(e)):(i=i.delete(e),o=o.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),o=o.delete(e.key),n.track({type:1,doc:e})}return{Ta:i,Aa:n,Xi:a,mutatedKeys:o}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const o=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const i=e.Aa.Q_();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ia(e.doc,t.doc))),this.Va(n),r=null!=r&&r;const a=t&&!r?this.ma():[],s=0===this.Pa.size&&this.current&&!r?1:0,l=s!==this.ha;return this.ha=s,0!==i.length||l?{snapshot:new Fi(this.query,e.Ta,o,i,e.mutatedKeys,0===s,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Ai,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach((e=>this.la=this.la.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.la=this.la.delete(e))),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=sn(),this.Ta.forEach((e=>{this.ga(e.key)&&(this.Pa=this.Pa.add(e.key))}));const t=[];return e.forEach((e=>{this.Pa.has(e)||t.push(new $i(e))})),this.Pa.forEach((n=>{e.has(n)||t.push(new ji(n))})),t}pa(e){this.la=e.hs,this.Pa=sn();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Fi.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,0===this.ha,this.hasCachedResults)}}class Ki{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class zi{constructor(e){this.key=e,this.wa=!1}}class qi{constructor(e,t,n,r,o,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=i,this.Sa={},this.ba=new Xt((e=>Ut(e)),$t),this.Da=new Map,this.Ca=new Set,this.va=new Ee(te.comparator),this.Fa=new Map,this.Ma=new so,this.xa={},this.Oa=new Map,this.Na=to.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return!0===this.La}}async function Hi(e,t,n=!0){const r=va(e);let o;const i=r.ba.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),o=i.view.ya()):o=await Xi(r,t,n,!0),o}async function Gi(e,t){const n=va(e);await Xi(n,t,!0,!1)}async function Xi(e,t,n,r){const o=await To(e.localStore,Lt(t)),i=o.targetId,a=n?e.sharedClientState.addLocalQueryTarget(i):"not-current";let s;return r&&(s=await Yi(e,t,i,"current"===a,o.resumeToken)),e.isPrimaryClient&&n&&Zo(e.remoteStore,o),s}async function Yi(e,t,n,r,o){e.Ba=(t,n,r)=>async function(e,t,n,r){let o=t.view.da(n);o.Xi&&(o=await Fo(e.localStore,t.query,!1).then((({documents:e})=>t.view.da(e,o))));const i=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),s=t.view.applyChanges(o,e.isPrimaryClient,i,a);return ua(e,t.targetId,s.fa),s.snapshot}(e,t,n,r);const i=await Fo(e.localStore,t,!0),a=new Ui(t,i.hs),s=a.da(i.documents),l=ir.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,o),u=a.applyChanges(s,e.isPrimaryClient,l);ua(e,n,u.fa);const c=new Ki(t,n,a);return e.ba.set(t,c),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),u.snapshot}async function Qi(e,t,n){const r=O(e),o=r.ba.get(t),i=r.Da.get(o.targetId);if(i.length>1)return r.Da.set(o.targetId,i.filter((e=>!$t(e,t)))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Ao(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),n&&ei(r.remoteStore,o.targetId),sa(r,o.targetId)})).catch(ue)):(sa(r,o.targetId),await Ao(r.localStore,o.targetId,!0))}async function Ji(e,t){const n=O(e),r=n.ba.get(t),o=n.Da.get(r.targetId);n.isPrimaryClient&&1===o.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ei(n.remoteStore,r.targetId))}async function Zi(e,t,n){const r=ma(e);try{const e=await function(e,t){const n=O(e),r=X.now(),o=t.reduce(((e,t)=>e.add(t.key)),sn());let i,a;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let s=Qt(),l=sn();return n.os.getEntries(e,o).next((e=>{s=e,s.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,s))).next((o=>{i=o;const a=[];for(const e of t){const t=Vn(e,i.get(e.key).overlayedDocument);null!=t&&a.push(new Mn(e.key,t,rt(t.value.mapValue),Tn.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)})).next((t=>{a=t;const r=t.applyToLocalDocumentSet(i,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:a.batchId,changes:en(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.xa[e.currentUser.toKey()];r||(r=new Ee(H)),r=r.insert(t,n),e.xa[e.currentUser.toKey()]=r}(r,e.batchId,n),await ha(r,e.changes),await fi(r.remoteStore)}catch(e){const t=Ii(e,"Failed to persist write");n.reject(t)}}async function ea(e,t){const n=O(e);try{const e=await ko(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Fa.get(t);r&&(D(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.wa=!0:e.modifiedDocuments.size>0?D(r.wa):e.removedDocuments.size>0&&(D(r.wa),r.wa=!1))})),await ha(n,e,t)}catch(e){await ue(e)}}function ta(e,t,n){const r=O(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ba.forEach(((n,r)=>{const o=r.view.j_(t);o.snapshot&&e.push(o.snapshot)})),function(e,t){const n=O(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const o of n.U_)o.j_(t)&&(r=!0)})),r&&Mi(n)}(r.eventManager,t),e.length&&r.Sa.h_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function na(e,t,n){const r=O(e);r.sharedClientState.updateQueryState(t,"rejected",n);const o=r.Fa.get(t),i=o&&o.key;if(i){let e=new Ee(te.comparator);e=e.insert(i,ot.newNoDocument(i,Y.min()));const n=sn().add(i),o=new or(Y.min(),new Map,new Ee(H),e,n);await ea(r,o),r.va=r.va.remove(i),r.Fa.delete(t),da(r)}else await Ao(r.localStore,t,!1).then((()=>sa(r,t,n))).catch(ue)}async function ra(e,t){const n=O(e),r=t.batch.batchId;try{const e=await Eo(n.localStore,t);aa(n,r,null),ia(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ha(n,e)}catch(e){await ue(e)}}async function oa(e,t,n){const r=O(e);try{const e=await function(e,t){const n=O(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(D(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);aa(r,t,n),ia(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ha(r,e)}catch(n){await ue(n)}}function ia(e,t){(e.Oa.get(t)||[]).forEach((e=>{e.resolve()})),e.Oa.delete(t)}function aa(e,t,n){const r=O(e);let o=r.xa[r.currentUser.toKey()];if(o){const e=o.get(t);e&&(n?e.reject(n):e.resolve(),o=o.remove(t)),r.xa[r.currentUser.toKey()]=o}}function sa(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Da.get(t))e.ba.delete(r),n&&e.Sa.ka(r,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Vr(t).forEach((t=>{e.Ma.containsKey(t)||la(e,t)}))}function la(e,t){e.Ca.delete(t.path.canonicalString());const n=e.va.get(t);null!==n&&(ei(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),da(e))}function ua(e,t,n){for(const r of n)r instanceof ji?(e.Ma.addReference(r.key,t),ca(e,r)):r instanceof $i?(I("SyncEngine","Document no longer in limbo: "+r.key),e.Ma.removeReference(r.key,t),e.Ma.containsKey(r.key)||la(e,r.key)):R()}function ca(e,t){const n=t.key,r=n.path.canonicalString();e.va.get(n)||e.Ca.has(r)||(I("SyncEngine","New document in limbo: "+n),e.Ca.add(r),da(e))}function da(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){const t=e.Ca.values().next().value;e.Ca.delete(t);const n=new te(J.fromString(t)),r=e.Na.next();e.Fa.set(r,new zi(n)),e.va=e.va.insert(n,r),Zo(e.remoteStore,new Gr(Lt(Vt(n.path)),r,"TargetPurposeLimboResolution",fe.oe))}}async function ha(e,t,n){const r=O(e),o=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach(((e,s)=>{a.push(r.Ba(s,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(s.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){o.push(e);const t=go.Ki(s.targetId,e);i.push(t)}})))})),await Promise.all(a),r.Sa.h_(o),await async function(e,t){const n=O(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ce.forEach(t,(t=>ce.forEach(t.qi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>ce.forEach(t.Qi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!he(e))throw e;I("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ns.get(e),r=t.snapshotVersion,o=t.withLastLimboFreeSnapshotVersion(r);n.ns=n.ns.insert(e,o)}}}(r.localStore,i))}async function fa(e,t){const n=O(e);if(!n.currentUser.isEqual(t)){I("SyncEngine","User change. New user:",t.toKey());const e=await _o(n.localStore,t);n.currentUser=t,function(e,t){e.Oa.forEach((e=>{e.forEach((e=>{e.reject(new P(V.CANCELLED,t))}))})),e.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ha(n,e.us)}}function pa(e,t){const n=O(e),r=n.Fa.get(t);if(r&&r.wa)return sn().add(r.key);{let e=sn();const r=n.Da.get(t);if(!r)return e;for(const t of r){const r=n.ba.get(t);e=e.unionWith(r.view.Ea)}return e}}function va(e){const t=O(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ea.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pa.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=na.bind(null,t),t.Sa.h_=Pi.bind(null,t.eventManager),t.Sa.ka=Ni.bind(null,t.eventManager),t}function ma(e){const t=O(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ra.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=oa.bind(null,t),t}class ga{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Uo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return So(this.persistence,new bo,e.initialUser,this.serializer)}createPersistence(e){return new po(mo.Hr,this.serializer)}createSharedClientState(e){return new Oo}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ya{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ta(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=fa.bind(null,this.syncEngine),await Ei(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Di}()}createDatastore(e){const t=Uo(e.databaseInfo.databaseId),n=function(e){return new jo(e)}(e.databaseInfo);return function(e,t,n,r){return new Go(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,o){return new Yo(e,t,n,r,o)}(this.localStore,this.datastore,e.asyncQueue,(e=>ta(this.syncEngine,e,0)),function(){return Po.D()?new Po:new Vo}())}createSyncEngine(e,t){return function(e,t,n,r,o,i,a){const s=new qi(e,t,n,r,o,i);return a&&(s.La=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){const t=O(e);I("RemoteStore","RemoteStore shutting down."),t.M_.add(5),await Jo(t),t.O_.shutdown(),t.N_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):T("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wa{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=E.UNAUTHENTICATED,this.clientId=q.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{I("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(I("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new N;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ii(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Sa(e,t){e.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await _o(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function _a(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ca(e);I("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>_i(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>_i(t.remoteStore,n))),e._onlineComponents=t}function Ea(e){return"FirebaseError"===e.name?e.code===V.FAILED_PRECONDITION||e.code===V.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Ca(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){I("FirestoreClient","Using user provided OfflineComponentProvider");try{await Sa(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Ea(n))throw n;A("Error using user provided cache. Falling back to memory cache: "+n),await Sa(e,new ga)}}else I("FirestoreClient","Using default OfflineComponentProvider"),await Sa(e,new ga);return e._offlineComponents}async function ka(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(I("FirestoreClient","Using user provided OnlineComponentProvider"),await _a(e,e._uninitializedComponentsProvider._online)):(I("FirestoreClient","Using default OnlineComponentProvider"),await _a(e,new ya))),e._onlineComponents}function xa(e){return ka(e).then((e=>e.syncEngine))}async function Ia(e){const t=await ka(e),n=t.eventManager;return n.onListen=Hi.bind(null,t.syncEngine),n.onUnlisten=Qi.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Gi.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Ji.bind(null,t.syncEngine),n}function Ta(e,t,n={}){const r=new N;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,o){const i=new ba({next:i=>{t.enqueueAndForget((()=>Vi(e,a)));const s=i.docs.has(n);!s&&i.fromCache?o.reject(new P(V.UNAVAILABLE,"Failed to get document because the client is offline.")):s&&i.fromCache&&r&&"server"===r.source?o.reject(new P(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):o.resolve(i)},error:e=>o.reject(e)}),a=new Wi(Vt(n.path),i,{includeMetadataChanges:!0,ra:!0});return Oi(e,a)}(await Ia(e),e.asyncQueue,t,n,r))),r.promise}function Aa(e,t,n={}){const r=new N;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,o){const i=new ba({next:n=>{t.enqueueAndForget((()=>Vi(e,a))),n.fromCache&&"server"===r.source?o.reject(new P(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(n)},error:e=>o.reject(e)}),a=new Wi(n,i,{includeMetadataChanges:!0,ra:!0});return Oi(e,a)}(await Ia(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fa(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ra=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(e,t,n){if(!n)throw new P(V.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Oa(e,t,n,r){if(!0===t&&!0===r)throw new P(V.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Va(e){if(!te.isDocumentKey(e))throw new P(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Pa(e){if(te.isDocumentKey(e))throw new P(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Na(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":R()}function Ma(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new P(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Na(e);throw new P(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class La{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new P(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new P(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Oa("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fa(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new P(V.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new P(V.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new P(V.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ba{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new La({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new P(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new La(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new L;switch(e.type){case"firstParty":return new $(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new P(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ra.get(e);t&&(I("ComponentProvider","Removing Datastore"),Ra.delete(e),t.terminate())}(this),Promise.resolve()}}function Wa(e,t,n,r={}){var o;const i=(e=Ma(e,Ba))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==a&&A("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=E.MOCK_USER;else{t=(0,l.Fy)(r.mockUserToken,null===(o=e._app)||void 0===o?void 0:o.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new P(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new E(i)}e._authCredentials=new B(new M(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ja(this.firestore,e,this._query)}}class $a{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ua(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $a(this.firestore,e,this._key)}}class Ua extends ja{constructor(e,t,n){super(e,t,Vt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $a(this.firestore,null,new te(e))}withConverter(e){return new Ua(this.firestore,e,this._path)}}function Ka(e,t,...n){if(e=(0,l.Ku)(e),Da("collection","path",t),e instanceof Ba){const r=J.fromString(t,...n);return Pa(r),new Ua(e,null,r)}{if(!(e instanceof $a||e instanceof Ua))throw new P(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(J.fromString(t,...n));return Pa(r),new Ua(e.firestore,null,r)}}function za(e,t,...n){if(e=(0,l.Ku)(e),1===arguments.length&&(t=q.newId()),Da("doc","path",t),e instanceof Ba){const r=J.fromString(t,...n);return Va(r),new $a(e,null,new te(r))}{if(!(e instanceof $a||e instanceof Ua))throw new P(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(J.fromString(t,...n));return Va(r),new $a(e.firestore,e instanceof Ua?e.converter:null,new te(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Ko(this,"async_queue_retry"),this.hu=()=>{const e=$o();e&&I("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const e=$o();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=$o();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise((()=>{}));const t=new N;return this.Iu((()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.su.push(e),this.Tu())))}async Tu(){if(0!==this.su.length){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!he(e))throw e;I("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o((()=>this.Tu()))}}Iu(e){const t=this.iu.then((()=>(this.uu=!0,e().catch((e=>{this.au=e,this.uu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw T("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.uu=!1,e))))));return this.iu=t,t}enqueueAfterDelay(e,t,n){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const r=xi.createAndSchedule(this,e,t,n,(e=>this.Eu(e)));return this._u.push(r),r}Pu(){this.au&&R()}verifyOperationInProgress(){}async du(){let e;do{e=this.iu,await e}while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then((()=>{this._u.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this._u)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.du()}))}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class Ha extends Ba{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new qa}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ya(this),this._firestoreClient.terminate()}}function Ga(e,t){const n="object"==typeof e?e:(0,i.Sx)(),r="string"==typeof e?e:t||"(default)",o=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const e=(0,l.yU)("firestore");e&&Wa(o,...e)}return o}function Xa(e){return e._firestoreClient||Ya(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ya(e){var t,n,r;const o=e._freezeSettings(),i=function(e,t,n,r){return new Le(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Fa(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,o);e._firestoreClient=new wa(e._authCredentials,e._appCheckCredentials,e._queue,i),(null===(n=o.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qa(Fe.fromBase64String(e))}catch(e){throw new P(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Qa(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new P(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Za{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new P(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new P(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=/^__.*__$/;class ns{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Mn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nn(e,this.data,t,this.fieldTransforms)}}class rs{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Mn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function os(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class is{constructor(e,t,n,r,o,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===o&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=i||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new is(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.gu({path:n,yu:!1});return r.wu(e),r}Su(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.gu({path:n,yu:!1});return r.mu(),r}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Ss(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(0===e.length)throw this.Du("Document fields must not be empty");if(os(this.fu)&&ts.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class as{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Uo(e)}Fu(e,t,n,r=!1){return new is({fu:e,methodName:t,vu:n,path:ee.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ss(e){const t=e._freezeSettings(),n=Uo(e._databaseId);return new as(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ls(e,t,n,r,o,i={}){const a=e.Fu(i.merge||i.mergeFields?2:0,t,n,o);gs("Data must be an object, but it was:",a,r);const s=vs(r,a);let l,u;if(i.merge)l=new Te(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const o=ys(t,r,n);if(!a.contains(o))throw new P(V.INVALID_ARGUMENT,`Field '${o}' is specified in your field mask but missing from your input data.`);_s(e,o)||e.push(o)}l=new Te(e),u=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=a.fieldTransforms;return new ns(new nt(s),l,u)}class us extends Za{_toFieldTransform(e){if(2!==e.fu)throw 1===e.fu?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof us}}class cs extends Za{_toFieldTransform(e){return new kn(e.path,new gn)}isEqual(e){return e instanceof cs}}function ds(e,t,n,r){const o=e.Fu(1,t,n);gs("Data must be an object, but it was:",o,r);const i=[],a=nt.empty();Se(r,((e,r)=>{const s=ws(t,e,n);r=(0,l.Ku)(r);const u=o.Su(s);if(r instanceof us)i.push(s);else{const e=ps(r,u);null!=e&&(i.push(s),a.set(s,e))}}));const s=new Te(i);return new rs(a,s,o.fieldTransforms)}function hs(e,t,n,r,o,i){const a=e.Fu(1,t,n),s=[ys(t,r,n)],u=[o];if(i.length%2!=0)throw new P(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let l=0;l<i.length;l+=2)s.push(ys(t,i[l])),u.push(i[l+1]);const c=[],d=nt.empty();for(let f=s.length-1;f>=0;--f)if(!_s(c,s[f])){const e=s[f];let t=u[f];t=(0,l.Ku)(t);const n=a.Su(e);if(t instanceof us)c.push(e);else{const r=ps(t,n);null!=r&&(c.push(e),d.set(e,r))}}const h=new Te(c);return new rs(d,h,a.fieldTransforms)}function fs(e,t,n,r=!1){return ps(n,e.Fu(r?4:3,t))}function ps(e,t){if(ms(e=(0,l.Ku)(e)))return gs("Unsupported field value:",t,e),vs(e,t);if(e instanceof Za)return function(e,t){if(!os(t.fu))throw t.Du(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Du(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&4!==t.fu)throw t.Du("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const o of e){let e=ps(o,t.bu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,l.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return hn(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=X.fromDate(e);return{timestampValue:yr(t.serializer,n)}}if(e instanceof X){const n=new X(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:yr(t.serializer,n)}}if(e instanceof es)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Qa)return{bytesValue:br(t.serializer,e._byteString)};if(e instanceof $a){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Du(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:_r(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Du(`Unsupported field value: ${Na(e)}`)}(e,t)}function vs(e,t){const n={};return _e(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(e,((e,r)=>{const o=ps(r,t.pu(e));null!=o&&(n[e]=o)})),{mapValue:{fields:n}}}function ms(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof X||e instanceof es||e instanceof Qa||e instanceof $a||e instanceof Za)}function gs(e,t,n){if(!ms(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Na(n);throw"an object"===r?t.Du(e+" a custom object"):t.Du(e+" "+r)}}function ys(e,t,n){if((t=(0,l.Ku)(t))instanceof Ja)return t._internalPath;if("string"==typeof t)return ws(e,t);throw Ss("Field path arguments must be of type string or ",e,!1,void 0,n)}const bs=new RegExp("[~\\*/\\[\\]]");function ws(e,t,n){if(t.search(bs)>=0)throw Ss(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ja(...t.split("."))._internalPath}catch(r){throw Ss(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ss(e,t,n,r,o){const i=r&&!r.isEmpty(),a=void 0!==o;let s=`Function ${t}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${o}`),l+=")"),new P(V.INVALID_ARGUMENT,s+e+l)}function _s(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t,n,r,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new $a(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Cs(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ks("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Cs extends Es{data(){return super.data()}}function ks(e,t){return"string"==typeof t?ws(e,t):t instanceof Ja?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new P(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Is{}class Ts extends Is{}function As(e,t,...n){let r=[];t instanceof Is&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Ds)).length,n=e.filter((e=>e instanceof Fs)).length;if(t>1||t>0&&n>0)throw new P(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const o of r)e=o._apply(e);return e}class Fs extends Ts{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Fs(e,t,n)}_apply(e){const t=this._parse(e);return Ms(e._query,t),new ja(e.firestore,e.converter,Wt(e._query,t))}_parse(e){const t=ss(e.firestore),n=function(e,t,n,r,o,i,a){let s;if(o.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new P(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Ns(a,i);const t=[];for(const n of a)t.push(Ps(r,e,n));s={arrayValue:{values:t}}}else s=Ps(r,e,a)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Ns(a,i),s=fs(n,t,a,"in"===i||"not-in"===i);return dt.create(o,i,s)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Rs(e,t,n){const r=t,o=ks("where",e);return Fs._create(o,r,n)}class Ds extends Is{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ds(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:ht.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const o of r)Ms(n,o),n=Wt(n,o)}(e._query,t),new ja(e.firestore,e.converter,Wt(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Os extends Ts{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Os(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new P(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new P(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new lt(t,n)}(e._query,this._field,this._direction);return new ja(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Dt(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Vs(e,t="asc"){const n=t,r=ks("orderBy",e);return Os._create(r,n)}function Ps(e,t,n){if("string"==typeof(n=(0,l.Ku)(n))){if(""===n)throw new P(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nt(t)&&-1!==n.indexOf("/"))throw new P(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(J.fromString(n));if(!te.isDocumentKey(r))throw new P(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ge(e,new te(r))}if(n instanceof $a)return Ge(e,n._key);throw new P(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Na(n)}.`)}function Ns(e,t){if(!Array.isArray(e)||0===e.length)throw new P(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ms(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new P(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new P(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Ls{convertValue(e,t="none"){switch(je(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ve(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw R()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Se(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new es(Oe(e.latitude),Oe(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ne(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Me(e));default:return null}}convertTimestamp(e){const t=De(e);return new X(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=J.fromString(e);D(Hr(n));const r=new Be(n.get(1),n.get(3)),o=new te(n.popFirst(5));return r.isEqual(t)||T(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ws{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class js extends Es{constructor(e,t,n,r,o,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $s(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ks("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class $s extends js{data(e={}){return super.data(e)}}class Us{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ws(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new $s(this._firestore,this._userDataWriter,n.key,n,new Ws(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new P(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new $s(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Ws(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new $s(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Ws(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let o=-1,i=-1;return 0!==t.type&&(o=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:Ks(t.type),doc:r,oldIndex:o,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ks(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zs(e){e=Ma(e,$a);const t=Ma(e.firestore,Ha);return Ta(Xa(t),e._key).then((n=>Zs(t,e,n)))}class qs extends Ls{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qa(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $a(this.firestore,null,t)}}function Hs(e){e=Ma(e,ja);const t=Ma(e.firestore,Ha),n=Xa(t),r=new qs(t);return xs(e._query),Aa(n,e._query).then((n=>new Us(t,r,e,n)))}function Gs(e,t,n){e=Ma(e,$a);const r=Ma(e.firestore,Ha),o=Bs(e.converter,t,n);return Js(r,[ls(ss(r),"setDoc",e._key,o,null!==e.converter,n).toMutation(e._key,Tn.none())])}function Xs(e,t,n,...r){e=Ma(e,$a);const o=Ma(e.firestore,Ha),i=ss(o);let a;return a="string"==typeof(t=(0,l.Ku)(t))||t instanceof Ja?hs(i,"updateDoc",e._key,t,n,r):ds(i,"updateDoc",e._key,t),Js(o,[a.toMutation(e._key,Tn.exists(!0))])}function Ys(e){return Js(Ma(e.firestore,Ha),[new jn(e._key,Tn.none())])}function Qs(e,t){const n=Ma(e.firestore,Ha),r=za(e),o=Bs(e.converter,t);return Js(n,[ls(ss(e.firestore),"addDoc",r._key,o,null!==e.converter,{}).toMutation(r._key,Tn.exists(!1))]).then((()=>r))}function Js(e,t){return function(e,t){const n=new N;return e.asyncQueue.enqueueAndForget((async()=>Zi(await xa(e),t,n))),n.promise}(Xa(e),t)}function Zs(e,t,n){const r=n.docs.get(t._key),o=new qs(e);return new js(e,o,t._key,r,new Ws(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(){return new cs("serverTimestamp")}new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){C=e}(i.MF),(0,i.om)(new a.uA("firestore",((e,{instanceIdentifier:n,options:r})=>{const o=e.getProvider("app").getImmediate(),i=new Ha(new W(e.getProvider("auth-internal")),new K(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new P(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Be(e.options.projectId,t)}(o,n),o);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(_,"4.6.2",e),(0,i.KO)(_,"4.6.2","esm2017")}()},1387:function(e,t,n){n.d(t,{LA:function(){return ae},aE:function(){return tt},rd:function(){return rt}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),o=n(144);
/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
const r=2.4,o=.2126729,i=.7151522,a=.072175,s=.55,l=.58,u=.57,c=.62,d=.03,h=1.45,f=5e-4,p=1.25,v=1.25,m=.078,g=12.82051282051282,y=.06,b=.001;function w(e,t){const n=(e.r/255)**r,w=(e.g/255)**r,S=(e.b/255)**r,_=(t.r/255)**r,E=(t.g/255)**r,C=(t.b/255)**r;let k,x=n*o+w*i+S*a,I=_*o+E*i+C*a;if(x<=d&&(x+=(d-x)**h),I<=d&&(I+=(d-I)**h),Math.abs(I-x)<f)return 0;if(I>x){const e=(I**s-x**l)*p;k=e<b?0:e<m?e-e*g*y:e-y}else{const e=(I**c-x**u)*v;k=e>-b?0:e>-m?e-e*g*y:e+y}return 100*k}var S=n(7354),_=n(9094);const E=.20689655172413793,C=e=>e>E**3?Math.cbrt(e):e/(3*E**2)+4/29,k=e=>e>E?e**3:3*E**2*(e-4/29);function x(e){const t=C,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function I(e){const t=k,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}const T=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],A=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,F=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],R=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function D(e){const t=Array(3),n=A,r=T;for(let o=0;o<3;++o)t[o]=Math.round(255*(0,_.qE)(n(r[o][0]*e[0]+r[o][1]*e[1]+r[o][2]*e[2])));return{r:t[0],g:t[1],b:t[2]}}function O(e){let{r:t,g:n,b:r}=e;const o=[0,0,0],i=R,a=F;t=i(t/255),n=i(n/255),r=i(r/255);for(let s=0;s<3;++s)o[s]=a[s][0]*t+a[s][1]*n+a[s][2]*r;return o}function V(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function P(e){return V(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const N=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,M={rgb:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),rgba:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),hsl:(e,t,n,r)=>W({h:e,s:t,l:n,a:r}),hsla:(e,t,n,r)=>W({h:e,s:t,l:n,a:r}),hsv:(e,t,n,r)=>B({h:e,s:t,v:n,a:r}),hsva:(e,t,n,r)=>B({h:e,s:t,v:n,a:r})};function L(e){if("number"===typeof e)return(isNaN(e)||e<0||e>16777215)&&(0,S.OP)(`'${e}' is not a valid hex color`),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e};if("string"===typeof e&&N.test(e)){const{groups:t}=e.match(N),{fn:n,values:r}=t,o=r.split(/,\s*/).map((e=>e.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(e)/100:parseFloat(e)));return M[n](...o)}if("string"===typeof e){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map((e=>e+e)).join(""):[6,8].includes(t.length)||(0,S.OP)(`'${e}' is not a valid hex(a) color`);const n=parseInt(t,16);return(isNaN(n)||n<0||n>4294967295)&&(0,S.OP)(`'${e}' is not a valid hex(a) color`),G(t)}if("object"===typeof e){if((0,_.zy)(e,["r","g","b"]))return e;if((0,_.zy)(e,["h","s","l"]))return B(U(e));if((0,_.zy)(e,["h","s","v"]))return B(e)}throw new TypeError(`Invalid color: ${null==e?e:String(e)||e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function B(e){const{h:t,s:n,v:r,a:o}=e,i=e=>{const o=(e+t/60)%6;return r-r*n*Math.max(Math.min(o,4-o,1),0)},a=[i(5),i(3),i(1)].map((e=>Math.round(255*e)));return{r:a[0],g:a[1],b:a[2],a:o}}function W(e){return B(U(e))}function j(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,r=e.b/255,o=Math.max(t,n,r),i=Math.min(t,n,r);let a=0;o!==i&&(o===t?a=60*(0+(n-r)/(o-i)):o===n?a=60*(2+(r-t)/(o-i)):o===r&&(a=60*(4+(t-n)/(o-i)))),a<0&&(a+=360);const s=0===o?0:(o-i)/o,l=[a,s,o];return{h:l[0],s:l[1],v:l[2],a:e.a}}function $(e){const{h:t,s:n,v:r,a:o}=e,i=r-r*n/2,a=1===i||0===i?0:(r-i)/Math.min(i,1-i);return{h:t,s:a,l:i,a:o}}function U(e){const{h:t,s:n,l:r,a:o}=e,i=r+n*Math.min(r,1-r),a=0===i?0:2-2*r/i;return{h:t,s:a,v:i,a:o}}function K(e){let{r:t,g:n,b:r,a:o}=e;return void 0===o?`rgb(${t}, ${n}, ${r})`:`rgba(${t}, ${n}, ${r}, ${o})`}function z(e){return K(B(e))}function q(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function H(e){let{r:t,g:n,b:r,a:o}=e;return`#${[q(t),q(n),q(r),void 0!==o?q(Math.round(255*o)):""].join("")}`}function G(e){e=Q(e);let[t,n,r,o]=(0,_.iv)(e,2).map((e=>parseInt(e,16)));return o=void 0===o?o:o/255,{r:t,g:n,b:r,a:o}}function X(e){const t=G(e);return j(t)}function Y(e){return H(B(e))}function Q(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),3!==e.length&&4!==e.length||(e=e.split("").map((e=>e+e)).join("")),6!==e.length&&(e=(0,_.f)((0,_.f)(e,6),8,"F")),e}function J(e,t){const n=x(O(e));return n[0]=n[0]+10*t,D(I(n))}function Z(e,t){const n=x(O(e));return n[0]=n[0]-10*t,D(I(n))}function ee(e){const t=L(e);return O(t)[1]}function te(e,t){const n=ee(e),r=ee(t),o=Math.max(n,r),i=Math.min(n,r);return(o+.05)/(i+.05)}function ne(e){const t=Math.abs(w(L(0),L(e))),n=Math.abs(w(L(16777215),L(e)));return n>Math.min(t,50)?"#fff":"#000"}},7354:function(e,t,n){n.d(t,{CI:function(){return a},OP:function(){return o},yA:function(){return i}});var r=n(6768);function o(e){(0,r.R8)(`Vuetify: ${e}`)}function i(e){(0,r.R8)(`Vuetify error: ${e}`)}function a(e,t){t=Array.isArray(t)?t.slice(0,-1).map((e=>`'${e}'`)).join(", ")+` or '${t.at(-1)}'`:`'${t}'`,(0,r.R8)(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`)}},2586:function(e,t,n){n.d(t,{G:function(){return s}});var r=n(9262),o=n(4232),i=n(6768),a=n(1247);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return(0,a.RW)()({name:n??(0,o.ZH)((0,o.PT)(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...(0,r.u)()},setup(t,n){let{slots:r}=n;return()=>(0,i.h)(t.tag,{class:[e,t.class],style:t.style},r.default?.())}})}},1247:function(e,t,n){n.d(t,{RW:function(){return u},cq:function(){return c},pM:function(){return l}});var r=n(2858),o=n(6768),i=n(7354),a=n(9094),s=n(4587);function l(e){if(e._setup=e._setup??e.setup,!e.name)return(0,i.OP)("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){e.props=(0,s.j)(e.props??{},e.name)();const t=Object.keys(e.props).filter((e=>"class"!==e&&"style"!==e));e.filterProps=function(e){return(0,a.Up)(e,t)},e.props._as=String,e.setup=function(t,n){const o=(0,r.Y8)();if(!o.value)return e._setup(t,n);const{props:i,provideSubDefaults:a}=(0,r.bL)(t,t._as??e.name,o),s=e._setup(i,n);return a(),s}}return e}function u(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return t=>(e?l:o.pM)(t)}function c(e,t){return t.props=e,t}},1884:function(e,t,n){n.d(t,{B2:function(){return r},S8:function(){return o},z3:function(){return i}});const r="cubic-bezier(0.4, 0, 0.2, 1)",o="cubic-bezier(0.0, 0, 0.2, 1)",i="cubic-bezier(0.4, 0, 1, 1)"},7861:function(e,t,n){n.d(t,{MR:function(){return a},nI:function(){return i},v6:function(){return u}});var r=n(6768),o=n(9094);function i(e,t){const n=(0,r.nI)();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables";const t=i(e).type;return(0,o.fX)(t?.aliasName||t?.name)}let s=0,l=new WeakMap;function u(){const e=i("getUid");if(l.has(e))return l.get(e);{const t=s++;return l.set(e,t),t}}u.reset=()=>{s=0,l=new WeakMap}},5318:function(e,t,n){n.d(t,{D_:function(){return i},Rd:function(){return o},mH:function(){return r}});n(4114);function r(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];while(e){if(t?a(e):i(e))return e;e=e.parentElement}return document.scrollingElement}function o(e,t){const n=[];if(t&&e&&!t.contains(e))return n;while(e){if(i(e)&&n.push(e),e===t)break;e=e.parentElement}return n}function i(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return"scroll"===t.overflowY||"auto"===t.overflowY&&e.scrollHeight>e.clientHeight}function a(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}},6993:function(e,t,n){n.d(t,{ZK:function(){return r},o$:function(){return a},tB:function(){return o},vd:function(){return i}});const r="undefined"!==typeof window,o=r&&"IntersectionObserver"in window,i=r&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),a=r&&"EyeDropper"in window},9094:function(e,t,n){n.d(t,{$m:function(){return M},Ai:function(){return k},B5:function(){return se},BN:function(){return V},CF:function(){return B},CZ:function(){return G},D9:function(){return $},Dg:function(){return g},Gv:function(){return y},HP:function(){return _},Im:function(){return ie},K7:function(){return S},Mp:function(){return A},OW:function(){return ne},P:function(){return te},Pv:function(){return D},Sd:function(){return m},T4:function(){return le},TD:function(){return v},Up:function(){return C},_p:function(){return b},bD:function(){return f},bq:function(){return oe},cJ:function(){return x},e9:function(){return U},eX:function(){return re},e_:function(){return X},eq:function(){return J},f:function(){return L},fX:function(){return K},hA:function(){return j},if:function(){return z},iv:function(){return W},j6:function(){return I},jF:function(){return de},lQ:function(){return ae},lm:function(){return ee},m:function(){return he},mK:function(){return Q},no:function(){return p},ph:function(){return O},qE:function(){return N},sg:function(){return P},uA:function(){return ce},uP:function(){return w},uR:function(){return Z},v6:function(){return ue},yc:function(){return Y},zy:function(){return E}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(144),o=n(6768),i=n(4232),a=n(6993);function s(e,t,n){l(e,t),t.set(e,n)}function l(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function u(e,t,n){return e.set(d(e,t),n),n}function c(e,t){return e.get(d(e,t))}function d(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function h(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let o=0;o<r;o++){if(null==e)return n;e=e[t[o]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function f(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>f(e[n],t[n])))}function p(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),h(e,t.split("."),n)):n}function v(e,t,n){if(!0===t)return void 0===e?n:e;if(null==t||"boolean"===typeof t)return n;if(e!==Object(e)){if("function"!==typeof t)return n;const r=t(e,n);return"undefined"===typeof r?n:r}if("string"===typeof t)return p(e,t,n);if(Array.isArray(t))return h(e,t,n);if("function"!==typeof t)return n;const r=t(e,n);return"undefined"===typeof r?n:r}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},((e,n)=>t+n))}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function y(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function b(e){if(e&&"$el"in e){const t=e.$el;return t?.nodeType===Node.TEXT_NODE?t.nextElementSibling:t}return e}const w=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),S=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function _(e){return Object.keys(e)}function E(e,t){return t.every((t=>e.hasOwnProperty(t)))}function C(e,t){const n={},r=new Set(Object.keys(e));for(const o of t)r.has(o)&&(n[o]=e[o]);return n}function k(e,t,n){const r=Object.create(null),o=Object.create(null);for(const i in e)t.some((e=>e instanceof RegExp?e.test(i):e===i))&&!n?.some((e=>e===i))?r[i]=e[i]:o[i]=e[i];return[r,o]}function x(e,t){const n={...e};return t.forEach((e=>delete n[e])),n}function I(e,t){const n={};return t.forEach((t=>n[t]=e[t])),n}const T=/^on[^a-z]/,A=e=>T.test(e),F=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],R=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function D(e){return e.isComposing&&R.includes(e.key)}function O(e){const[t,n]=k(e,[T]),r=x(t,F),[o,i]=k(n,["class","style","id",/^data-/]);return Object.assign(o,t),Object.assign(i,r),[o,i]}function V(e){return null==e?[]:Array.isArray(e)?e:[e]}function P(e,t){let n=0;const o=function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];clearTimeout(n),n=setTimeout((()=>e(...i)),(0,r.R1)(t))};return o.clear=()=>{clearTimeout(n)},o.immediate=e,o}function N(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(t,Math.min(n,e))}function M(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function L(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function B(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return n.repeat(Math.max(0,t-e.length))+e}function W(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n=[];let r=0;while(r<e.length)n.push(e.substr(r,t)),r+=t;return n}function j(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(e<t)return`${e} B`;const n=1024===t?["Ki","Mi","Gi"]:["k","M","G"];let r=-1;while(Math.abs(e)>=t&&r<n.length-1)e/=t,++r;return`${e.toFixed(1)} ${n[r]}B`}function $(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const o in e)r[o]=e[o];for(const o in t){const i=e[o],a=t[o];y(i)&&y(a)?r[o]=$(i,a,n):Array.isArray(i)&&Array.isArray(a)&&n?r[o]=n(i,a):r[o]=a}return r}function U(e){return e.map((e=>e.type===o.FK?U(e.children):e)).flat()}function K(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(K.cache.has(e))return K.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return K.cache.set(e,t),t}function z(e,t){if(!t||"object"!==typeof t)return[];if(Array.isArray(t))return t.map((t=>z(e,t))).flat(1);if(Array.isArray(t.children))return t.children.map((t=>z(e,t))).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return z(e,t.component.subTree).flat(1)}return[]}K.cache=new Map;var q=new WeakMap,H=new WeakMap;class G{constructor(e){s(this,q,[]),s(this,H,0),this.size=e}push(e){c(q,this)[c(H,this)]=e,u(H,this,(c(H,this)+1)%this.size)}values(){return c(q,this).slice(c(H,this)).concat(c(q,this).slice(0,c(H,this)))}}function X(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function Y(e){const t=(0,r.Kh)({}),n=(0,o.EW)(e);return(0,o.nT)((()=>{for(const e in n.value)t[e]=n.value[e]}),{flush:"sync"}),(0,r.QW)(t)}function Q(e,t){return e.includes(t)}function J(e){return e[2].toLowerCase()+e.slice(3)}const Z=()=>[Function,Array];function ee(e,t){return t="on"+(0,i.ZH)(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function te(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Array.isArray(e))for(const o of e)o(...n);else"function"===typeof e&&e(...n)}function ne(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map((e=>`${e}${t?':not([tabindex="-1"])':""}:not([disabled])`)).join(", ");return[...e.querySelectorAll(n)]}function re(e,t,n){let r,o=e.indexOf(document.activeElement);const i="next"===t?1:-1;do{o+=i,r=e[o]}while((!r||null==r.offsetParent||!(n?.(r)??1))&&o<e.length&&o>=0);return r}function oe(e,t){const n=ne(e);if(t)if("first"===t)n[0]?.focus();else if("last"===t)n.at(-1)?.focus();else if("number"===typeof t)n[t]?.focus();else{const r=re(n,t);r?r.focus():oe(e,"next"===t?"first":"last")}else e!==document.activeElement&&e.contains(document.activeElement)||n[0]?.focus()}function ie(e){return null===e||void 0===e||"string"===typeof e&&""===e.trim()}function ae(){}function se(e,t){const n=a.ZK&&"undefined"!==typeof CSS&&"undefined"!==typeof CSS.supports&&CSS.supports(`selector(${t})`);if(!n)return null;try{return!!e&&e.matches(t)}catch(r){return null}}function le(e){return e.some((e=>!(0,o.vv)(e)||e.type!==o.Mw&&(e.type!==o.FK||le(e.children))))?e:null}function ue(e,t){if(!a.ZK||0===e)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}function ce(e,t){const n=(0,r.IJ)();return(0,o.nT)((()=>{n.value=e()}),{flush:"sync",...t}),(0,r.tB)(n)}function de(e,t){const n=e.clientX,r=e.clientY,o=t.getBoundingClientRect(),i=o.left,a=o.top,s=o.right,l=o.bottom;return n>=i&&n<=s&&r>=a&&r<=l}function he(){const e=(0,r.IJ)(),t=t=>{e.value=t};return Object.defineProperty(t,"value",{enumerable:!0,get:()=>e.value,set:t=>e.value=t}),Object.defineProperty(t,"el",{enumerable:!0,get:()=>b(e.value)}),t}},4587:function(e,t,n){function r(e,t){return n=>Object.keys(e).reduce(((r,o)=>{const i="object"===typeof e[o]&&null!=e[o]&&!Array.isArray(e[o]),a=i?e[o]:{type:e[o]};return r[o]=n&&o in n?{...a,default:n[o]}:a,t&&!r[o].source&&(r[o].source=t),r}),{})}n.d(t,{j:function(){return r}})},4600:function(e,t,n){n.d(t,{C:function(){return o}});var r=n(7861);function o(e){const t=(0,r.nI)("useRender");t.render=e}}}]);
//# sourceMappingURL=chunk-vendors.82958db5.js.map