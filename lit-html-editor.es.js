var t=Object.defineProperty,e=Object.defineProperties,i=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(e,i,r)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,a=(t,e)=>{for(var i in e||(e={}))s.call(e,i)&&n(t,i,e[i]);if(r)for(var i of r(e))o.call(e,i)&&n(t,i,e[i]);return t},c=(t,r)=>e(t,i(r))
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const l=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d=Symbol(),p=new Map;class h{constructor(t,e){if(this._$cssResult$=!0,e!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=p.get(this.cssText);return l&&void 0===t&&(p.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const u=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new h(i,d)},m=l?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new h("string"==typeof t?t:t+"",d))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var f,v;const y={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(r){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:g};class b extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Eh(i,e);void 0!==r&&(this._$Eu.set(r,i),t.push(r))})),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(m(t))}else void 0!==t&&e.push(m(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i=e,r=this.constructor.elementStyles,l?i.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((t=>{const e=document.createElement("style"),r=window.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=t.cssText,i.appendChild(e)})),e;var i,r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=_){var r,s;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(s=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==s?s:y.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(t,e){var i,r,s;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),a=t.converter,c=null!==(s=null!==(r=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==s?s:y.fromAttribute;this._$Ei=n,this[n]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$ET()}catch(r){throw e=!1,this._$ET(),r}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var S,w;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null===(f=globalThis.reactiveElementPolyfillSupport)||void 0===f||f.call(globalThis,{ReactiveElement:b}),(null!==(v=globalThis.reactiveElementVersions)&&void 0!==v?v:globalThis.reactiveElementVersions=[]).push("1.0.0");const A=globalThis.trustedTypes,$=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,P=`lit$${(Math.random()+"").slice(9)}$`,C="?"+P,E=`<${C}>`,x=document,T=(t="")=>x.createComment(t),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,U=/>/g,H=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,M=/'/g,I=/"/g,z=/^(?:script|style|textarea)$/i,F=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),V=new WeakMap,L=x.createTreeWalker(x,129,null,!1);class j{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,o=0;const n=t.length-1,a=this.parts,[c,l]=((t,e)=>{const i=t.length-1,r=[];let s,o=2===e?"<svg>":"",n=O;for(let c=0;c<i;c++){const e=t[c];let i,a,l=-1,d=0;for(;d<e.length&&(n.lastIndex=d,a=n.exec(e),null!==a);)d=n.lastIndex,n===O?"!--"===a[1]?n=N:void 0!==a[1]?n=U:void 0!==a[2]?(z.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=H):void 0!==a[3]&&(n=H):n===H?">"===a[0]?(n=null!=s?s:O,l=-1):void 0===a[1]?l=-2:(l=n.lastIndex-a[2].length,i=a[1],n=void 0===a[3]?H:'"'===a[3]?I:M):n===I||n===M?n=H:n===N||n===U?n=O:(n=H,s=void 0);const p=n===H&&t[c+1].startsWith("/>")?" ":"";o+=n===O?e+E:l>=0?(r.push(i),e.slice(0,l)+"$lit$"+e.slice(l)+P+p):e+P+(-2===l?(r.push(void 0),c):p)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==$?$.createHTML(a):a,r]})(t,e);if(this.el=j.createElement(c,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=L.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(P)){const i=l[o++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(P),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?X:"@"===e[1]?Y:W})}else a.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(z.test(r.tagName)){const t=r.textContent.split(P),e=t.length-1;if(e>0){r.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],T()),L.nextNode(),a.push({type:2,index:++s});r.append(t[e],T())}}}else if(8===r.nodeType)if(r.data===C)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(P,t+1));)a.push({type:7,index:s}),t+=P.length-1}s++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,r){var s,o,n,a;if(e===F)return e;let c=void 0!==r?null===(s=i._$Cl)||void 0===s?void 0:s[r]:i._$Cu;const l=R(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,i,r)),void 0!==r?(null!==(n=(a=i)._$Cl)&&void 0!==n?n:a._$Cl=[])[r]=c:i._$Cu=c),void 0!==c&&(e=B(t,c._$AS(t,e.values),c,r)),e}class q{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:r}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);L.currentNode=s;let o=L.nextNode(),n=0,a=0,c=r[0];for(;void 0!==c;){if(n===c.index){let e;2===c.type?e=new G(o,o.nextSibling,this,t):1===c.type?e=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(e=new Z(o,this,t)),this.v.push(e),c=r[++a]}n!==(null==c?void 0:c.index)&&(o=L.nextNode(),n++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,r){var s;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cg=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),R(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==F&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return k(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==D&&R(this._$AH)?this._$AA.nextSibling.data=t:this.S(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=j.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new q(s,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new j(t)),e}M(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new G(this.A(T()),this.A(T()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class W{constructor(t,e,i,r,s){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const s=this.strings;let o=!1;if(void 0===s)t=B(this,t,e,0),o=!R(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const r=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=B(this,r[i+n],e,n),a===F&&(a=this._$AH[n]),o||(o=!R(a)||a!==this._$AH[n]),a===D?t=D:t!==D&&(t+=(null!=a?a:"")+s[n+1]),this._$AH[n]=a}o&&!r&&this.k(t)}k(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends W{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===D?void 0:t}}class X extends W{constructor(){super(...arguments),this.type=4}k(t){t&&t!==D?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Y extends W{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:D)===F)return;const r=this._$AH,s=t===D&&r!==D||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==D&&(r===D||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,Q;null===(S=globalThis.litHtmlPolyfillSupport)||void 0===S||S.call(globalThis,j,G),(null!==(w=globalThis.litHtmlVersions)&&void 0!==w?w:globalThis.litHtmlVersions=[]).push("2.0.0");const tt=globalThis.trustedTypes,et=tt?tt.createPolicy("lit-html",{createHTML:t=>t}):void 0,it=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+it,st=`<${rt}>`,ot=document,nt=(t="")=>ot.createComment(t),at=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ct=Array.isArray,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,pt=/>/g,ht=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ut=/'/g,mt=/"/g,ft=/^(?:script|style|textarea)$/i,vt=(St=1,(t,...e)=>({_$litType$:St,strings:t,values:e})),yt=Symbol.for("lit-noChange"),gt=Symbol.for("lit-nothing"),_t=new WeakMap,bt=ot.createTreeWalker(ot,129,null,!1);var St,wt,At,$t;class Pt{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,o=0;const n=t.length-1,a=this.parts,[c,l]=((t,e)=>{const i=t.length-1,r=[];let s,o=2===e?"<svg>":"",n=lt;for(let c=0;c<i;c++){const e=t[c];let i,a,l=-1,d=0;for(;d<e.length&&(n.lastIndex=d,a=n.exec(e),null!==a);)d=n.lastIndex,n===lt?"!--"===a[1]?n=dt:void 0!==a[1]?n=pt:void 0!==a[2]?(ft.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=ht):void 0!==a[3]&&(n=ht):n===ht?">"===a[0]?(n=null!=s?s:lt,l=-1):void 0===a[1]?l=-2:(l=n.lastIndex-a[2].length,i=a[1],n=void 0===a[3]?ht:'"'===a[3]?mt:ut):n===mt||n===ut?n=ht:n===dt||n===pt?n=lt:(n=ht,s=void 0);const p=n===ht&&t[c+1].startsWith("/>")?" ":"";o+=n===lt?e+st:l>=0?(r.push(i),e.slice(0,l)+"$lit$"+e.slice(l)+it+p):e+it+(-2===l?(r.push(void 0),c):p)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==et?et.createHTML(a):a,r]})(t,e);if(this.el=Pt.createElement(c,i),bt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=bt.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(it)){const i=l[o++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(it),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?Rt:"?"===e[1]?kt:"@"===e[1]?Ot:Tt})}else a.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(ft.test(r.tagName)){const t=r.textContent.split(it),e=t.length-1;if(e>0){r.textContent=tt?tt.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],nt()),bt.nextNode(),a.push({type:2,index:++s});r.append(t[e],nt())}}}else if(8===r.nodeType)if(r.data===rt)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(it,t+1));)a.push({type:7,index:s}),t+=it.length-1}s++}}static createElement(t,e){const i=ot.createElement("template");return i.innerHTML=t,i}}function Ct(t,e,i=t,r){var s,o,n,a;if(e===yt)return e;let c=void 0!==r?null===(s=i._$Cl)||void 0===s?void 0:s[r]:i._$Cu;const l=at(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,i,r)),void 0!==r?(null!==(n=(a=i)._$Cl)&&void 0!==n?n:a._$Cl=[])[r]=c:i._$Cu=c),void 0!==c&&(e=Ct(t,c._$AS(t,e.values),c,r)),e}class Et{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:r}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:ot).importNode(i,!0);bt.currentNode=s;let o=bt.nextNode(),n=0,a=0,c=r[0];for(;void 0!==c;){if(n===c.index){let e;2===c.type?e=new xt(o,o.nextSibling,this,t):1===c.type?e=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(e=new Nt(o,this,t)),this.v.push(e),c=r[++a]}n!==(null==c?void 0:c.index)&&(o=bt.nextNode(),n++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class xt{constructor(t,e,i,r){var s;this.type=2,this._$AH=gt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cg=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ct(this,t,e),at(t)?t===gt||null==t||""===t?(this._$AH!==gt&&this._$AR(),this._$AH=gt):t!==this._$AH&&t!==yt&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return ct(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==gt&&at(this._$AH)?this._$AA.nextSibling.data=t:this.S(ot.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Pt.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new Et(s,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=_t.get(t.strings);return void 0===e&&_t.set(t.strings,e=new Pt(t)),e}M(t){ct(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new xt(this.A(nt()),this.A(nt()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Tt{constructor(t,e,i,r,s){this.type=1,this._$AH=gt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=gt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const s=this.strings;let o=!1;if(void 0===s)t=Ct(this,t,e,0),o=!at(t)||t!==this._$AH&&t!==yt,o&&(this._$AH=t);else{const r=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=Ct(this,r[i+n],e,n),a===yt&&(a=this._$AH[n]),o||(o=!at(a)||a!==this._$AH[n]),a===gt?t=gt:t!==gt&&(t+=(null!=a?a:"")+s[n+1]),this._$AH[n]=a}o&&!r&&this.k(t)}k(t){t===gt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Rt extends Tt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===gt?void 0:t}}class kt extends Tt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==gt?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Ot extends Tt{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Ct(this,t,e,0))&&void 0!==i?i:gt)===yt)return;const r=this._$AH,s=t===gt&&r!==gt||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==gt&&(r===gt||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ct(this,t)}}null===(K=globalThis.litHtmlPolyfillSupport)||void 0===K||K.call(globalThis,Pt,xt),(null!==(Q=globalThis.litHtmlVersions)&&void 0!==Q?Q:globalThis.litHtmlVersions=[]).push("2.0.0");class Ut extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var r,s;const o=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let n=o._$litPart$;if(void 0===n){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=n=new xt(e.insertBefore(nt(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return yt}}Ut.finalized=!0,Ut._$litElement$=!0,null===(wt=globalThis.litElementHydrateSupport)||void 0===wt||wt.call(globalThis,{LitElement:Ut}),null===(At=globalThis.litElementPolyfillSupport)||void 0===At||At.call(globalThis,{LitElement:Ut}),(null!==($t=globalThis.litElementVersions)&&void 0!==$t?$t:globalThis.litElementVersions=[]).push("3.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ht=t=>e=>{return"function"==typeof e?(i=t,r=e,window.customElements.define(i,r),r):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i,r},Mt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?c(a({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function It(t){return(e,i)=>{return void 0!==i?(r=t,s=i,void e.constructor.createProperty(s,r)):Mt(t,e);var r,s}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function zt(t,e){return(({finisher:t,descriptor:e})=>(i,r)=>{var s;if(void 0===r){const r=null!==(s=i.originalKey)&&void 0!==s?s:i.key,o=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:c(a({},i),{key:r});return null!=t&&(o.finisher=function(e){t(e,r)}),o}{const s=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(s,r)}})({descriptor:i=>{const r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}const Ft=It({type:Object,hasChanged:()=>!0});function Dt(){const t=new Set(["Arial","Arial Black","Bahnschrift","Calibri","Cambria","Cambria Math","Candara","Comic Sans MS","Consolas","Constantia","Corbel","Courier New","Ebrima","Franklin Gothic Medium","Gabriola","Gadugi","Georgia","HoloLens MDL2 Assets","Impact","Ink Free","Javanese Text","Leelawadee UI","Lucida Console","Lucida Sans Unicode","Malgun Gothic","Marlett","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Sans Serif","Microsoft Tai Le","Microsoft YaHei","Microsoft Yi Baiti","MingLiU-ExtB","Mongolian Baiti","MS Gothic","MV Boli","Myanmar Text","Nirmala UI","Palatino Linotype","Segoe MDL2 Assets","Segoe Print","Segoe Script","Segoe UI","Segoe UI Historic","Segoe UI Emoji","Segoe UI Symbol","SimSun","Sitka","Sylfaen","Symbol","Tahoma","Times New Roman","Trebuchet MS","Verdana","Webdings","Wingdings","Yu Gothic","American Typewriter","Andale Mono","Arial","Arial Black","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Avenir","Avenir Next","Avenir Next Condensed","Baskerville","Big Caslon","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bradley Hand","Brush Script MT","Chalkboard","Chalkboard SE","Chalkduster","Charter","Cochin","Comic Sans MS","Copperplate","Courier","Courier New","Didot","DIN Alternate","DIN Condensed","Futura","Geneva","Georgia","Gill Sans","Helvetica","Helvetica Neue","Herculanum","Hoefler Text","Impact","Lucida Grande","Luminari","Marker Felt","Menlo","Microsoft Sans Serif","Monaco","Noteworthy","Optima","Palatino","Papyrus","Phosphate","Rockwell","Savoye LET","SignPainter","Skia","Snell Roundhand","Tahoma","Times","Times New Roman","Trattatello","Trebuchet MS","Verdana","Zapfino"].sort()),e=new Set;for(const i of t.values())document.fonts.check(`12px "${i}"`)&&e.add(i);return e.values()}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Vt=function(t,e){return(Vt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)};var Lt=function(){return(Lt=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};function jt(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const Bt="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,qt=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},Gt=`{{lit-${String(Math.random()).slice(2)}}}`,Wt=`\x3c!--${Gt}--\x3e`,Jt=new RegExp(`${Gt}|${Wt}`);class Xt{constructor(t,e){this.parts=[],this.element=e;const i=[],r=[],s=document.createTreeWalker(e.content,133,null,!1);let o=0,n=-1,a=0;const{strings:c,values:{length:l}}=t;for(;a<l;){const t=s.nextNode();if(null!==t){if(n++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let r=0;for(let t=0;t<i;t++)Yt(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=c[a],i=Qt.exec(e)[2],r=i.toLowerCase()+"$lit$",s=t.getAttribute(r);t.removeAttribute(r);const o=s.split(Jt);this.parts.push({type:"attribute",index:n,name:i,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(Gt)>=0){const r=t.parentNode,s=e.split(Jt),o=s.length-1;for(let e=0;e<o;e++){let i,o=s[e];if(""===o)i=Kt();else{const t=Qt.exec(o);null!==t&&Yt(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(o)}r.insertBefore(i,t),this.parts.push({type:"node",index:++n})}""===s[o]?(r.insertBefore(Kt(),t),i.push(t)):t.data=s[o],a+=o}}else if(8===t.nodeType)if(t.data===Gt){const e=t.parentNode;null!==t.previousSibling&&n!==o||(n++,e.insertBefore(Kt(),t)),o=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(i.push(t),n--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(Gt,e+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=r.pop()}for(const d of i)d.parentNode.removeChild(d)}}const Yt=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},Zt=t=>-1!==t.index,Kt=()=>document.createComment(""),Qt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function te(t,e){const{element:{content:i},parts:r}=t,s=document.createTreeWalker(i,133,null,!1);let o=ie(r),n=r[o],a=-1,c=0;const l=[];let d=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==n&&n.index===a;)n.index=null!==d?-1:n.index-c,o=ie(r,o),n=r[o]}l.forEach((t=>t.parentNode.removeChild(t)))}const ee=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},ie=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(Zt(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const re=new WeakMap,se=t=>(...e)=>{const i=t(...e);return re.set(i,!0),i},oe=t=>"function"==typeof t&&re.has(t),ne={},ae={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class ce{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const i of this.__parts)void 0!==i&&i.commit()}_clone(){const t=Bt?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let s,o=0,n=0,a=r.nextNode();for(;o<i.length;)if(s=i[o],Zt(s)){for(;n<s.index;)n++,"TEMPLATE"===a.nodeName&&(e.push(a),r.currentNode=a.content),null===(a=r.nextNode())&&(r.currentNode=e.pop(),a=r.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return Bt&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const le=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),de=` ${Gt} `;class pe{constructor(t,e,i,r){this.strings=t,this.values=e,this.type=i,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],s=t.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===t.indexOf("--\x3e",s+1);const o=Qt.exec(t);e+=null===o?t+(i?de:Wt):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+Gt}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==le&&(e=le.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const he=t=>null===t||!("object"==typeof t||"function"==typeof t),ue=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class me{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let r=0;r<i.length-1;r++)this.parts[r]=this._createPart()}_createPart(){return new fe(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!ue(t))return t}let r="";for(let s=0;s<e;s++){r+=t[s];const e=i[s];if(void 0!==e){const t=e.value;if(he(t)||!ue(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class fe{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===ne||he(t)&&t===this.value||(this.value=t,oe(t)||(this.committer.dirty=!0))}commit(){for(;oe(this.value);){const t=this.value;this.value=ne,t(this)}this.value!==ne&&this.committer.commit()}}class ve{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Kt()),this.endNode=t.appendChild(Kt())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Kt()),t.__insert(this.endNode=Kt())}insertAfterPart(t){t.__insert(this.startNode=Kt()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;oe(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=ne,t(this)}const t=this.__pendingValue;t!==ne&&(he(t)?t!==this.value&&this.__commitText(t):t instanceof pe?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):ue(t)?this.__commitIterable(t):t===ae?(this.value=ae,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof ce&&this.value.template===e)this.value.update(t.values);else{const i=new ce(e,t.processor,this.options),r=i._clone();i.update(t.values),this.__commitNode(r),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,r=0;for(const s of t)i=e[r],void 0===i&&(i=new ve(this.options),e.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(e[r-1])),i.setValue(s),i.commit(),r++;r<e.length&&(e.length=r,this.clear(i&&i.endNode))}clear(t=this.startNode){qt(this.startNode.parentNode,t.nextSibling,this.endNode)}}class ye{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;oe(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=ne,t(this)}if(this.__pendingValue===ne)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=ne}}class ge extends me{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new _e(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class _e extends fe{}let be=!1;(()=>{try{const t={get capture(){return be=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class Se{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;oe(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=ne,t(this)}if(this.__pendingValue===ne)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=we(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=ne}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const we=t=>t&&(be?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function Ae(t){let e=$e.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$e.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(Gt);return i=e.keyString.get(r),void 0===i&&(i=new Xt(t,t.getTemplateElement()),e.keyString.set(r,i)),e.stringsArray.set(t.strings,i),i}const $e=new Map,Pe=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ce=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,r){const s=e[0];if("."===s){return new ge(t,e.slice(1),i).parts}if("@"===s)return[new Se(t,e.slice(1),r.eventContext)];if("?"===s)return[new ye(t,e.slice(1),i)];return new me(t,e,i).parts}handleTextExpression(t){return new ve(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const Ee=(t,...e)=>new pe(t,e,"html",Ce)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,xe=(t,e)=>`${t}--${e}`;let Te=!0;void 0===window.ShadyCSS?Te=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Te=!1);const Re=t=>e=>{const i=xe(e.type,t);let r=$e.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},$e.set(i,r));let s=r.stringsArray.get(e.strings);if(void 0!==s)return s;const o=e.strings.join(Gt);if(s=r.keyString.get(o),void 0===s){const i=e.getTemplateElement();Te&&window.ShadyCSS.prepareTemplateDom(i,t),s=new Xt(e,i),r.keyString.set(o,s)}return r.stringsArray.set(e.strings,s),s},ke=["html","svg"],Oe=new Set,Ne=(t,e,i)=>{Oe.add(t);const r=i?i.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:o}=s;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,t);const n=document.createElement("style");for(let l=0;l<o;l++){const t=s[l];t.parentNode.removeChild(t),n.textContent+=t.textContent}(t=>{ke.forEach((e=>{const i=$e.get(xe(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),te(t,i)}))}))})(t);const a=r.content;i?function(t,e,i=null){const{element:{content:r},parts:s}=t;if(null==i)return void r.appendChild(e);const o=document.createTreeWalker(r,133,null,!1);let n=ie(s),a=0,c=-1;for(;o.nextNode();)for(c++,o.currentNode===i&&(a=ee(e),i.parentNode.insertBefore(e,i));-1!==n&&s[n].index===c;){if(a>0){for(;-1!==n;)s[n].index+=a,n=ie(s,n);return}n=ie(s,n)}}(i,n,a.firstChild):a.insertBefore(n,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(n,a.firstChild);const t=new Set;t.add(n),te(i,t)}},Ue=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,s=Pe.has(e),o=Te&&11===e.nodeType&&!!e.host,n=o&&!Oe.has(r),a=n?document.createDocumentFragment():e;if(((t,e,i)=>{let r=Pe.get(e);void 0===r&&(qt(e,e.firstChild),Pe.set(e,r=new ve(Object.assign({templateFactory:Ae},i))),r.appendInto(e)),r.setValue(t),r.commit()})(t,a,Object.assign({templateFactory:Re(r)},i)),n){const t=Pe.get(a);Pe.delete(a);const i=t.value instanceof ce?t.value.template:void 0;Ne(r,a,i),qt(e,e.firstChild),e.appendChild(a),Pe.set(e,t)}!s&&o&&window.ShadyCSS.styleElement(e.host)};window.JSCompiler_renameProperty=(t,e)=>t;const He={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Me=(t,e)=>e!==t&&(e==e||t==t),Ie={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:Me};class ze extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const r=this._attributeNameForProperty(i,e);void 0!==r&&(this._attributeToPropertyMap.set(r,i),t.push(r))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=Ie){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdateInternal(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Ie}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=Me){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,r=e.converter||He,s="function"==typeof r?r:r.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,r=e.converter;return(r&&r.toAttribute||He.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Ie){const r=this.constructor,s=r._attributeNameForProperty(t,i);if(void 0!==s){const t=r._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(t);if(void 0!==r){const t=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let r=!0;if(void 0!==t){const s=this.constructor;i=i||s.getPropertyOptions(t),s._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}ze.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Fe=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function De(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Fe(t,e)}const Ve=(t,e,i)=>{Object.defineProperty(e,i,t)},Le=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function je(t){return(e,i)=>void 0!==i?((t,e,i)=>{Object.assign(e[i],t)})(t,e,i):((t,e)=>Object.assign(Object.assign({},e),{finisher(i){Object.assign(i.prototype[e.key],t)}}))(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Be=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qe=Symbol();class Ge{constructor(t,e){if(e!==qe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Be?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const We={};class Je extends ze{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),r=[];i.forEach((t=>r.unshift(t))),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Be){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new Ge(String(e),qe)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Be?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==We&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return We}}Je.finalized=!0,Je.render=Ue,window.JSCompiler_renameProperty=(t,e)=>t;const Xe={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Ye=(t,e)=>e!==t&&(e==e||t==t),Ze={attribute:!0,type:String,converter:Xe,reflect:!1,hasChanged:Ye};class Ke extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const r=this._attributeNameForProperty(i,e);void 0!==r&&(this._attributeToPropertyMap.set(r,i),t.push(r))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=Ze){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdateInternal(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Ze}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=Ye){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,r=e.converter||Xe,s="function"==typeof r?r:r.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,r=e.converter;return(r&&r.toAttribute||Xe.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Ze){const r=this.constructor,s=r._attributeNameForProperty(t,i);if(void 0!==s){const t=r._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(t);if(void 0!==r){const t=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let r=!0;if(void 0!==t){const s=this.constructor;i=i||s.getPropertyOptions(t),s._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Ke.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Qe=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ti(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Qe(t,e)}function ei(t){return ti({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}const ii=(t,e,i)=>{Object.defineProperty(e,i,t)},ri=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t})
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,si=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oi=Symbol();class ni{constructor(t,e){if(e!==oi)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(si?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ai={};class ci extends Ke{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),r=[];i.forEach((t=>r.unshift(t))),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!si){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new ni(String(e),oi)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?si?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==ai&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return ai}}ci.finalized=!0,ci.render=Ue,window.JSCompiler_renameProperty=(t,e)=>t;const li={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},di=(t,e)=>e!==t&&(e==e||t==t),pi={attribute:!0,type:String,converter:li,reflect:!1,hasChanged:di};class hi extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const r=this._attributeNameForProperty(i,e);void 0!==r&&(this._attributeToPropertyMap.set(r,i),t.push(r))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=pi){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdateInternal(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||pi}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=di){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,r=e.converter||li,s="function"==typeof r?r:r.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,r=e.converter;return(r&&r.toAttribute||li.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=pi){const r=this.constructor,s=r._attributeNameForProperty(t,i);if(void 0!==s){const t=r._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(t);if(void 0!==r){const t=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let r=!0;if(void 0!==t){const s=this.constructor;i=i||s.getPropertyOptions(t),s._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}hi.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ui=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mi=Symbol();class fi{constructor(t,e){if(e!==mi)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(ui?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const vi={};class yi extends hi{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),r=[];i.forEach((t=>r.unshift(t))),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!ui){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new fi(String(e),mi)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ui?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==vi&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return vi}}yi.finalized=!0,yi.render=Ue;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const gi=()=>{},_i={get passive(){return!1}};document.addEventListener("x",gi,_i),document.removeEventListener("x",gi);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class bi extends yi{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Si=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),wi={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Ai={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},$i={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Pi=["touchstart","pointerdown","mousedown","keydown"],Ci=["touchend","pointerup","mouseup","contextmenu"],Ei=[],xi=function(t){function e(i){var r=t.call(this,Lt(Lt({},e.defaultAdapter),i))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(t){return r.activate_(t)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}Vt(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return wi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ai},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return $i},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple_();if(this.registerRootHandlers_(i),i){var r=e.cssClasses,s=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(s),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,r=i.ROOT,s=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(r),t.adapter.removeClass(s),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(Pi.forEach((function(t){e.adapter.registerInteractionHandler(t,e.activateHandler_)})),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):Ci.forEach((function(t){e.adapter.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;Pi.forEach((function(e){t.adapter.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),Ci.forEach((function(e){t.adapter.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,i=e.strings;Object.keys(i).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter.updateCssVariable(i[e],null)}))},e.prototype.activate_=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var r=this.previousActivationEvent_;if(!(r&&void 0!==t&&r.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&Ei.length>0&&Ei.some((function(t){return e.adapter.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(Ei.push(t.target),this.registerDeactivationHandlers_(t)),i.wasElementMadeActive=this.checkElementMadeActive_(t),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){Ei=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive_(t),i.wasElementMadeActive&&e.animateActivation_()),i.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,i=e.strings,r=i.VAR_FG_TRANSLATE_START,s=i.VAR_FG_TRANSLATE_END,o=e.cssClasses,n=o.FG_DEACTIVATION,a=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var l="",d="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates_(),h=p.startPoint,u=p.endPoint;l=h.x+"px, "+h.y+"px",d=u.x+"px, "+u.y+"px"}this.adapter.updateCssVariable(r,l),this.adapter.updateCssVariable(s,d),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(n),this.adapter.computeBoundingRect(),this.adapter.addClass(a),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),c)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,i=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var r,s,o=e.x,n=e.y,a=o+i.left,c=n+i.top;if("touchstart"===t.type){var l=t;r=l.changedTouches[0].pageX-a,s=l.changedTouches[0].pageY-c}else{var d=t;r=d.pageX-a,s=d.pageY-c}return{x:r,y:s}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,r=this.activationState_,s=r.hasDeactivationUXRun,o=r.isActivated;(s||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter.removeClass(i)}),$i.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var i=Lt({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(i)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(i),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter.computeBoundingRect();var i=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter.isUnbounded()?i:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING;var r=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize_=r-1:this.initialSize_=r,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,i=t.VAR_FG_SIZE,r=t.VAR_LEFT,s=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize_+"px"),this.adapter.updateCssVariable(o,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(r,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(s,this.unboundedCoords_.top+"px"))},e}(Si);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Ti{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const i of e)this.classes.add(i)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach((e=>t+=e+" ")),this.element.setAttribute("class",t)}}}const Ri=new WeakMap,ki=se((t=>e=>{if(!(e instanceof fe)||e instanceof _e||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:r}=i;let s=Ri.get(e);void 0===s&&(r.setAttribute("class",i.strings.join(" ")),Ri.set(e,s=new Set));const o=r.classList||new Ti(r);s.forEach((e=>{e in t||(o.remove(e),s.delete(e))}));for(const n in t){const e=t[n];e!=s.has(n)&&(e?(o.add(n),s.add(n)):(o.remove(n),s.delete(n)))}"function"==typeof o.commit&&o.commit()})),Oi=new WeakMap,Ni=se((t=>e=>{if(!(e instanceof fe)||e instanceof _e||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:r}=i.element;let s=Oi.get(e);void 0===s&&(r.cssText=i.strings.join(" "),Oi.set(e,s=new Set)),s.forEach((e=>{e in t||(s.delete(e),-1===e.indexOf("-")?r[e]=null:r.removeProperty(e))}));for(const o in t)s.add(o),-1===o.indexOf("-")?r[o]=t[o]:r.setProperty(o,t[o])}));class Ui extends bi{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=xi}get isActive(){return t=this.parentElement||this,e=":active",(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var t,e;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(t,e)=>{switch(t){case"--mdc-ripple-fg-scale":this.fgScale=e;break;case"--mdc-ripple-fg-size":this.fgSize=e;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=e;break;case"--mdc-ripple-fg-translate-start":this.translateStart=e;break;case"--mdc-ripple-left":this.leftPos=e;break;case"--mdc-ripple-top":this.topPos=e}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(t){this.waitForFoundation((()=>{this.mdcFoundation.activate(t)}))}endPress(){this.waitForFoundation((()=>{this.mdcFoundation.deactivate()}))}startFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleFocus()}))}endFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleBlur()}))}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(t){this.mdcFoundation?t():this.updateComplete.then(t)}update(t){t.has("disabled")&&this.disabled&&this.endHover(),super.update(t)}render(){const t=this.activated&&(this.primary||!this.accent),e=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":t,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":e,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded};return Ee`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${ki(i)}"
          style="${Ni({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}var Hi,Mi;jt([(Hi=".mdc-ripple-surface",(t,e)=>{const i={get(){return this.renderRoot.querySelector(Hi)},enumerable:!0,configurable:!0};if(Mi){const t="symbol"==typeof e?Symbol():`__${e}`;i.get=function(){return void 0===this[t]&&(this[t]=this.renderRoot.querySelector(Hi)),this[t]}}return void 0!==e?ii(i,t,e):ri(i,t)})],Ui.prototype,"mdcRoot",void 0),jt([ti({type:Boolean})],Ui.prototype,"primary",void 0),jt([ti({type:Boolean})],Ui.prototype,"accent",void 0),jt([ti({type:Boolean})],Ui.prototype,"unbounded",void 0),jt([ti({type:Boolean})],Ui.prototype,"disabled",void 0),jt([ti({type:Boolean})],Ui.prototype,"activated",void 0),jt([ti({type:Boolean})],Ui.prototype,"selected",void 0),jt([ei()],Ui.prototype,"hovering",void 0),jt([ei()],Ui.prototype,"bgFocused",void 0),jt([ei()],Ui.prototype,"fgActivation",void 0),jt([ei()],Ui.prototype,"fgDeactivation",void 0),jt([ei()],Ui.prototype,"fgScale",void 0),jt([ei()],Ui.prototype,"fgSize",void 0),jt([ei()],Ui.prototype,"translateStart",void 0),jt([ei()],Ui.prototype,"translateEnd",void 0),jt([ei()],Ui.prototype,"leftPos",void 0),jt([ei()],Ui.prototype,"topPos",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Ii=((t,...e)=>{const i=e.reduce(((e,i,r)=>e+(t=>{if(t instanceof ni)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1]),t[0]);return new ni(i,oi)})`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}`;let zi=class extends Ui{};var Fi,Di;zi.styles=Ii,zi=jt([(Fi="mwc-ripple",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(Fi,t):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(Fi,t))],zi);
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class Vi{constructor(t){this.startPress=e=>{t().then((t=>{t&&t.startPress(e)}))},this.endPress=()=>{t().then((t=>{t&&t.endPress()}))},this.startFocus=()=>{t().then((t=>{t&&t.startFocus()}))},this.endFocus=()=>{t().then((t=>{t&&t.endFocus()}))},this.startHover=()=>{t().then((t=>{t&&t.startHover()}))},this.endHover=()=>{t().then((t=>{t&&t.endHover()}))}}}class Li extends Je{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new Vi((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderRipple(){return this.shouldRenderRipple?Ee`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}render(){return Ee`<button
        class="mdc-icon-button"
        aria-label="${this.ariaLabel||this.icon}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}jt([De({type:Boolean,reflect:!0})],Li.prototype,"disabled",void 0),jt([De({type:String})],Li.prototype,"icon",void 0),jt([function(t,e,i){if(void 0!==e)
/**
@license
Copyright 2021 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
return function(t,e,i){const r=t.constructor;if(!i){const t=`__${e}`;if(!(i=r.getPropertyDescriptor(e,t)))throw new Error("@ariaProperty must be used after a @property decorator")}const s=i;let o="";if(!s.set)throw new Error(`@ariaProperty requires a setter for ${e}`);const n={configurable:!0,enumerable:!0,set(t){if(""===o){const t=r.getPropertyOptions(e);o=t.attribute}this.hasAttribute(o)&&this.removeAttribute(o),s.set.call(this,t)}};return s.get&&(n.get=function(){return s.get.call(this)}),n}(t,e,i);throw new Error("@ariaProperty only supports TypeScript Decorators")},De({type:String,attribute:"aria-label"})],Li.prototype,"ariaLabel",void 0),jt([function(t,e){return(i,r)=>{const s={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof r?Symbol():`__${r}`;s.get=function(){return void 0===this[e]&&(this[e]=this.renderRoot.querySelector(t)),this[e]}}return void 0!==r?Ve(s,i,r):Le(s,i)}}("button")],Li.prototype,"buttonElement",void 0),jt([function(t){return(e,i)=>{const r={async get(){return await this.updateComplete,this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==i?Ve(r,e,i):Le(r,e)}}("mwc-ripple")],Li.prototype,"ripple",void 0),jt([De({attribute:!1,hasChanged:null==Di?void 0:Di.hasChanged})],Li.prototype,"shouldRenderRipple",void 0),jt([je({passive:!0})],Li.prototype,"handleRippleMouseDown",null),jt([je({passive:!0})],Li.prototype,"handleRippleTouchStart",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const ji=((t,...e)=>{const i=e.reduce(((e,i,r)=>e+(t=>{if(t instanceof Ge)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1]),t[0]);return new Ge(i,qe)})`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let Bi=class extends Li{};Bi.styles=ji,Bi=jt([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e))("mwc-icon-button")],Bi);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const qi=u`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Gi=class extends Ut{render(){return vt`<span><slot></slot></span>`}};Gi.styles=[qi],Gi=jt([Ht("mwc-icon")],Gi);var Wi=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,Xi=(t,e,i,r)=>{for(var s,o=r>1?void 0:r?Ji(e,i):e,n=t.length-1;n>=0;n--)(s=t[n])&&(o=(r?s(e,i,o):s(o))||o);return r&&o&&Wi(e,i,o),o};let Yi=class extends Ut{constructor(){super(...arguments),this.command="",this.icon="info",this.active=!1,this.values=[]}render(){const{icon:t,command:e,value:i,active:r,values:s}=this,o=s.length>0;return vt`<section>
      ${o?vt` <mwc-icon>${t}</mwc-icon>
            <select
              @change=${t=>{const i=t.target.value;"--"===i?Zi("removeFormat",void 0):Zi(e,i)}}
            >
              ${s.map((t=>vt`<option value=${t.value} ?selected=${t.value===i}>
                    ${t.name}
                  </option>`))}
            </select>`:vt`<mwc-icon-button
            ?active="${r}"
            icon=${t}
            @click=${()=>{e?Zi(e,i):this.dispatchEvent(new Event("action",{bubbles:!0,composed:!0}))}}
          ></mwc-icon-button>`}
      <div><slot></slot></div>
    </section>`}};function Zi(t,e){document.execCommand(t,!0,e)}Yi.styles=u`
    * {
      --mdc-icon-size: var(--icon-size);
      --mdc-icon-button-size: var(--icon-size);
    }
    section {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    section * {
      margin: 2px;
    }
    mwc-icon-button[active] {
      color: var(--rich-action-active-color);
    }
    mwc-icon {
      cursor: pointer;
    }
  `,Xi([It({type:String})],Yi.prototype,"command",2),Xi([It({type:String})],Yi.prototype,"value",2),Xi([It({type:String})],Yi.prototype,"icon",2),Xi([It({type:Boolean})],Yi.prototype,"active",2),Xi([It({type:Array,hasChanged:()=>!0})],Yi.prototype,"values",2),Yi=Xi([Ht("rich-action")],Yi);var Ki=Object.defineProperty,Qi=Object.getOwnPropertyDescriptor,tr=(t,e,i,r)=>{for(var s,o=r>1?void 0:r?Qi(e,i):e,n=t.length-1;n>=0;n--)(s=t[n])&&(o=(r?s(e,i,o):s(o))||o);return r&&o&&Ki(e,i,o),o};let er=class extends Ut{constructor(){super(...arguments),this.selection=null}render(){const t=this.getTags();return vt`<header>
      <rich-action icon="format_clear" command="removeFormat"></rich-action>
      <rich-action
        icon="format_bold"
        command="bold"
        ?active=${t.includes("b")}
      ></rich-action>
      <rich-action
        icon="format_italic"
        command="italic"
        ?active=${t.includes("i")}
      ></rich-action>
      <rich-action
        icon="format_underlined"
        command="underline"
        ?active=${t.includes("u")}
      ></rich-action>
      <rich-action icon="format_align_left" command="justifyleft"></rich-action>
      <rich-action
        icon="format_align_center"
        command="justifycenter"
      ></rich-action>
      <rich-action
        icon="format_align_right"
        command="justifyright"
      ></rich-action>
      <rich-action
        icon="format_list_numbered"
        command="insertorderedlist"
        ?active=${t.includes("ol")}
      ></rich-action>
      <rich-action
        icon="format_list_bulleted"
        command="insertunorderedlist"
        ?active=${t.includes("ul")}
      ></rich-action>
      <rich-action
        icon="format_quote"
        command="formatblock"
        value="blockquote"
      ></rich-action>
      <rich-action
        icon="format_indent_decrease"
        command="outdent"
      ></rich-action>
      <rich-action icon="format_indent_increase" command="indent"></rich-action>
      <rich-action
        icon="add_link"
        ?active=${t.includes("a")}
        @action=${()=>{const t=prompt("Write the URL here","https://");t&&t.match(/^(http|https):\/\/[^ "]+$/)&&Zi("createlink",t)}}
      >
      </rich-action>
      <rich-action
        icon="link_off"
        ?active=${t.includes("a")}
        command="unlink"
      >
      </rich-action>
      <rich-action
        icon="format_color_text"
        @action=${()=>this.fgColorInput.click()}
      >
        <input
          type="color"
          id="fg-color"
          @input=${t=>{Zi("forecolor",t.target.value)}}
        />
      </rich-action>
      <rich-action
        icon="border_color"
        @action=${()=>this.bdColorInput.click()}
      >
        <input
          type="color"
          id="bd-color"
          @input=${t=>{Zi("backcolor",t.target.value)}}
        />
      </rich-action>
      <rich-action
        icon="title"
        command="formatblock"
        .values=${[{name:"Normal Text",value:"--"},{name:"Heading 1",value:"h1"},{name:"Heading 2",value:"h2"},{name:"Heading 3",value:"h3"},{name:"Heading 4",value:"h4"},{name:"Heading 5",value:"h5"},{name:"Heading 6",value:"h6"},{name:"Paragraph",value:"p"},{name:"Pre-Formatted",value:"pre"}]}
      ></rich-action>
      <rich-action
        icon="text_format"
        command="fontname"
        .values=${[{name:"Font Name",value:"--"},...Array.from(Dt()).map((t=>({name:t,value:t})))]}
      ></rich-action>
      <rich-action
        icon="format_size"
        command="fontsize"
        .values=${[{name:"Font Size",value:"--"},{name:"Very Small",value:"1"},{name:"Small",value:"2"},{name:"Normal",value:"3"},{name:"Medium Large",value:"4"},{name:"Large",value:"5"},{name:"Very Large",value:"6"},{name:"Maximum",value:"7"}]}
      ></rich-action>
      <rich-action icon="undo" command="undo"></rich-action>
      <rich-action icon="redo" command="redo"></rich-action>
      <rich-action icon="content_cut" command="cut"></rich-action>
      <rich-action icon="content_copy" command="copy"></rich-action>
      <rich-action icon="content_paste" command="paste"></rich-action>
      <rich-action
        icon="file_upload"
        @action=${async()=>{if("showOpenFilePicker"in window){const[t]=await window.showOpenFilePicker();if(this.fileHandle=t,t){const e=await t.getFile(),i=await e.text();this.dispatchEvent(new CustomEvent("set-content",{detail:i,bubbles:!0,composed:!0}))}}else{const t=document.createElement("input");t.type="file",t.click(),t.onchange=async()=>{const e=t.files[0];if(e){const t=new FileReader;t.onload=()=>{const e=t.result;this.dispatchEvent(new CustomEvent("set-content",{detail:e,bubbles:!0,composed:!0}))},t.readAsText(e)}}}}}
      ></rich-action>
      <rich-action
        icon="file_download"
        @action=${async()=>{const t=this.node.innerHTML;if(this.fileHandle){const e=await this.fileHandle.createWritable();await e.write(["<!DOCTYPE html>",'<html lang="en">',"  <head> </head>",`  <body>${t}</body>`,"</html>"].join("\n")),await e.close()}else{const e=window.URL.createObjectURL(new Blob([t],{type:"text/html"})),i=document.createElement("a");i.href=e,i.download="index.html",i.click()}}}
      ></rich-action>
    </header>`}getTags(){var t;const{selection:e}=this;let i=[];if(e)if("Range"===e.type){let t=null==e?void 0:e.baseNode;if(t){const e=()=>{var e,r;const s=null==(r=null==(e=null==t?void 0:t.tagName)?void 0:e.toLowerCase())?void 0:r.trim();s&&i.push(s)};for(;null!=t;)e(),t=null==t?void 0:t.parentNode}i.pop()}else{const e=(null==(t=this.selection)?void 0:t.toString())||"";i=(e.match(/<[^>]+>/g)||[]).filter((t=>!t.startsWith("</"))).map((t=>t.replace(/<|>/g,"")))}return i}};er.styles=u`
    header {
      width: 100%;
      color: var(--rich-color);
      display: flex;
      flex-direction: row;
    }
    input[type="color"] {
      -webkit-appearance: none;
      border: none;
      width: var(--icon-size);
      height: var(--icon-size);
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
      border: none;
    }
  `,tr([Ft],er.prototype,"selection",2),tr([zt("#fg-color")],er.prototype,"fgColorInput",2),tr([zt("#bd-color")],er.prototype,"bdColorInput",2),tr([function(t){return It(c(a({},t),{state:!0}))}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */()],er.prototype,"fileHandle",2),tr([It({type:Object,hasChanged:()=>!0})],er.prototype,"node",2),er=tr([Ht("rich-toolbar")],er);var ir=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,sr=(t,e,i,r)=>{for(var s,o=r>1?void 0:r?rr(e,i):e,n=t.length-1;n>=0;n--)(s=t[n])&&(o=(r?s(e,i,o):s(o))||o);return r&&o&&ir(e,i,o),o};let or=class extends Ut{constructor(){super(...arguments),this.readonly=!1}render(){const{readonly:t,node:e}=this;return vt`<article
      id="content"
      contenteditable=${t?"false":"true"}
      @input=${()=>this.updateSelection()}
    >
      ${e}
    </article>`}updateSelection(){var t;const e=((null==(t=this.shadowRoot)?void 0:t.getSelection)?this.shadowRoot.getSelection():null)||document.getSelection()||window.getSelection();this.dispatchEvent(new CustomEvent("selection",{detail:e,bubbles:!0,composed:!0}))}firstUpdated(){document.execCommand("defaultParagraphSeparator",!1,"br"),document.addEventListener("selectionchange",(()=>{this.updateSelection()})),window.addEventListener("selectionchange",(()=>{this.updateSelection()})),document.addEventListener("keydown",(()=>{this.updateSelection()}))}};or.styles=u`
    article {
      padding: var(--rich-padding);
      width: calc(100% - var(--rich-padding) * 2);
      height: calc(100% - var(--rich-padding) * 2);
    }

    article[contenteditable="true"] {
      border: none;
      outline: none;
    }
  `,sr([zt("#content")],or.prototype,"content",2),sr([It({type:Boolean})],or.prototype,"readonly",2),sr([It({type:Object,hasChanged:()=>!0})],or.prototype,"node",2),or=sr([Ht("rich-viewer")],or);var nr=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,cr=(t,e,i,r)=>{for(var s,o=r>1?void 0:r?ar(e,i):e,n=t.length-1;n>=0;n--)(s=t[n])&&(o=(r?s(e,i,o):s(o))||o);return r&&o&&nr(e,i,o),o};let lr=class extends Ut{constructor(){super(...arguments),this.selection=null,this.readonly=!1,this.node=document.createElement("div")}render(){const{selection:t,readonly:e,node:i}=this;return vt`<main>
      <rich-toolbar
        .selection=${t}
        .node=${i}
        @set-content=${t=>{var e;const i=t,r=(new DOMParser).parseFromString(i.detail,"text/html").querySelector("body");this.node.innerHTML=null!=(e=null==r?void 0:r.innerHTML)?e:"",this.requestUpdate()}}
      ></rich-toolbar>
      <rich-viewer
        ?readonly=${e}
        @selection=${t=>{const e=t;this.selection=e.detail}}
        .node=${i}
      >
      </rich-viewer>
    </main>`}firstUpdated(){const t=this.children;if(t.length>0){const e=t[0];if("TEMPLATE"===e.tagName){const t=e.innerHTML.trim();t.length>0&&(this.node.innerHTML=t,this.requestUpdate())}}}};lr.styles=u`
    :host {
      --rich-color: black;
      --rich-background: white;
      --rich-action-active-color: red;
      --icon-size: 24px;
      --rich-padding: 8px;
    }
    main {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: 1fr auto;
      grid-template-columns: 1fr;
      grid-template-areas:
        "viewer"
        "toolbar";
    }

    rich-toolbar {
      grid-area: toolbar;
      width: 100%;
      overflow-x: auto;
      background-color: var(--rich-background);
      color: var(--rich-color);
      border-top: 1px solid var(--rich-color);
    }

    rich-viewer {
      grid-area: viewer;
      flex: 1;
      width: 100%;
      overflow-y: auto;
      background-color: var(--rich-background);
      color: var(--rich-color);
    }

    @media (hover: hover) and (pointer: fine) {
      main {
        grid-template-rows: auto 1fr;
        grid-template-areas:
          "toolbar"
          "viewer";
      }
      rich-toolbar {
        border-top: none;
        border-bottom: 1px solid var(--rich-color);
      }
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --rich-background: black;
        --rich-color: white;
      }
    }
  `,cr([Ft],lr.prototype,"selection",2),cr([It({type:Boolean})],lr.prototype,"readonly",2),cr([It({type:Object,hasChanged:()=>!0})],lr.prototype,"node",2),lr=cr([Ht("rich-text")],lr);
