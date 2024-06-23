import{e as X,l as P,Q as ia,R as la,j as s,S as vt,T as sa,U as We,V as da,c as d,a as S,d as $,u as bt,W as ca,X as le,Y as te,Z as se,_ as pe,$ as ae,a0 as xe,a1 as fe,a2 as ye,a3 as we,h as O,k as _t,q as pt,P as ft,a4 as ze,a5 as nt,a6 as ot,a7 as it,a8 as ua,a9 as ba,b as m,aa as pa,f as Ne,ab as fa,p as $t,t as q,ac as lt,y as Le,ad as K,i as zt,ae as ha,af as st,ag as va,ah as ga,ai as ma,aj as xa,ak as ya,al as Pt,am as wa,an as ie,ao as Be,ap as Pe,aq as Sa,G as Tt,ar as Ca,as as ka,at as Ra,au as _a,av as $a,aw as za,ax as gt,ay as Qe,o as Pa,az as Ta,aA as De,aB as mt,aC as et,aD as Aa,aE as Ua,aF as Ma,aG as Ia,aH as At,w as Ba,z as me,A as Fe,C as j,v as Da,aI as Va,F as xt,I as Ut,B as Oe,H as Ea,aJ as La,D as Mt,E as Ha,aK as Wa,L as Fa,aL as Oa,aM as ja}from"./index-BofSZpyf.js";import{_ as Na}from"./Dropdown-Bc0SF6KC.js";import"./SideMenu-B3cpYi5a.js";import{_ as qa}from"./plugin-vueexport-helper-DlAUqK2U.js";import{A as Xa}from"./Add-Dbtpm1RG.js";import{_ as Ga}from"./Input-BE5seNXq.js";import{u as Ka}from"./Eye-DgZ31vnW.js";function It(e,t,a){t/=100,a/=100;const r=t*Math.min(a,1-a)+a;return[e,r?(2-2*a/r)*100:0,r*100]}function He(e,t,a){t/=100,a/=100;const r=a-a*t/2,n=Math.min(r,1-r);return[e,n?(a-r)/n*100:0,r*100]}function oe(e,t,a){t/=100,a/=100;let r=(n,l=(n+e/60)%6)=>a-a*t*Math.max(Math.min(l,4-l,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function dt(e,t,a){e/=255,t/=255,a/=255;let r=Math.max(e,t,a),n=r-Math.min(e,t,a),l=n&&(r==e?(t-a)/n:r==t?2+(a-e)/n:4+(e-t)/n);return[60*(l<0?l+6:l),r&&n/r*100,r*100]}function ct(e,t,a){e/=255,t/=255,a/=255;let r=Math.max(e,t,a),n=r-Math.min(e,t,a),l=1-Math.abs(r+r-n-1),u=n&&(r==e?(t-a)/n:r==t?2+(a-e)/n:4+(e-t)/n);return[60*(u<0?u+6:u),l?n/l*100:0,(r+r-n)*50]}function ut(e,t,a){t/=100,a/=100;let r=t*Math.min(a,1-a),n=(l,u=(l+e/30)%12)=>a-r*Math.max(Math.min(u-3,9-u,1),-1);return[n(0)*255,n(8)*255,n(4)*255]}const Ya=vt(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[vt("&::-webkit-scrollbar",{width:0,height:0})]),Za=X({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=P(null);function t(n){!(n.currentTarget.offsetWidth<n.currentTarget.scrollWidth)||n.deltaY===0||(n.currentTarget.scrollLeft+=n.deltaY+n.deltaX,n.preventDefault())}const a=ia();return Ya.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:la,ssr:a}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...n){var l;(l=e.value)===null||l===void 0||l.scrollTo(...n)}})},render(){return s("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Ja=/\s/;function Qa(e){for(var t=e.length;t--&&Ja.test(e.charAt(t)););return t}var er=/^\s+/;function tr(e){return e&&e.slice(0,Qa(e)+1).replace(er,"")}var yt=NaN,ar=/^[-+]0x[0-9a-f]+$/i,rr=/^0b[01]+$/i,nr=/^0o[0-7]+$/i,or=parseInt;function wt(e){if(typeof e=="number")return e;if(sa(e))return yt;if(We(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=We(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=tr(e);var a=rr.test(e);return a||nr.test(e)?or(e.slice(2),a?2:8):ar.test(e)?yt:+e}var tt=function(){return da.Date.now()},ir="Expected a function",lr=Math.max,sr=Math.min;function dr(e,t,a){var r,n,l,u,b,h,x=0,g=!1,k=!1,z=!0;if(typeof e!="function")throw new TypeError(ir);t=wt(t)||0,We(a)&&(g=!!a.leading,k="maxWait"in a,l=k?lr(wt(a.maxWait)||0,t):l,z="trailing"in a?!!a.trailing:z);function w(v){var V=r,D=n;return r=n=void 0,x=v,u=e.apply(D,V),u}function T(v){return x=v,b=setTimeout(_,t),g?w(v):u}function M(v){var V=v-h,D=v-x,F=t-V;return k?sr(F,l-D):F}function E(v){var V=v-h,D=v-x;return h===void 0||V>=t||V<0||k&&D>=l}function _(){var v=tt();if(E(v))return U(v);b=setTimeout(_,M(v))}function U(v){return b=void 0,z&&r?w(v):(r=n=void 0,u)}function W(){b!==void 0&&clearTimeout(b),x=0,r=h=n=b=void 0}function L(){return b===void 0?u:U(tt())}function R(){var v=tt(),V=E(v);if(r=arguments,n=this,h=v,V){if(b===void 0)return T(h);if(k)return clearTimeout(b),b=setTimeout(_,t),w(h)}return b===void 0&&(b=setTimeout(_,t)),u}return R.cancel=W,R.flush=L,R}var cr="Expected a function";function at(e,t,a){var r=!0,n=!0;if(typeof e!="function")throw new TypeError(cr);return We(a)&&(r="leading"in a?!!a.leading:r,n="trailing"in a?!!a.trailing:n),dr(e,t,{leading:r,maxWait:t,trailing:n})}const ur=d("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[S(">",[d("input",[S("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),S("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),d("button",[S("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[$("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),S("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[$("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),S("*",[S("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[S(">",[d("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),d("base-selection",[d("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),d("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),$("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),S("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[S(">",[d("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),d("base-selection",[d("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),d("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),$("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),br={},pr=X({name:"InputGroup",props:br,setup(e){const{mergedClsPrefixRef:t}=bt(e);return ca("-input-group",ur,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:`${e}-input-group`},this.$slots)}});function fr(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Te(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function hr(e){return e=Math.round(e),e>=360?359:e<0?0:e}function vr(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const gr={rgb:{hex(e){return le(te(e))},hsl(e){const[t,a,r,n]=te(e);return se([...ct(t,a,r),n])},hsv(e){const[t,a,r,n]=te(e);return pe([...dt(t,a,r),n])}},hex:{rgb(e){return ae(te(e))},hsl(e){const[t,a,r,n]=te(e);return se([...ct(t,a,r),n])},hsv(e){const[t,a,r,n]=te(e);return pe([...dt(t,a,r),n])}},hsl:{hex(e){const[t,a,r,n]=xe(e);return le([...ut(t,a,r),n])},rgb(e){const[t,a,r,n]=xe(e);return ae([...ut(t,a,r),n])},hsv(e){const[t,a,r,n]=xe(e);return pe([...It(t,a,r),n])}},hsv:{hex(e){const[t,a,r,n]=fe(e);return le([...oe(t,a,r),n])},rgb(e){const[t,a,r,n]=fe(e);return ae([...oe(t,a,r),n])},hsl(e){const[t,a,r,n]=fe(e);return se([...He(t,a,r),n])}}};function Bt(e,t,a){return a=a||Te(e),a?a===t?e:gr[a][t](e):null}const ge="12px",mr=12,ue="6px",xr=6,yr="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",wr=X({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=P(null);function a(l){t.value&&(ye("mousemove",document,r),ye("mouseup",document,n),r(l))}function r(l){const{value:u}=t;if(!u)return;const{width:b,left:h}=u.getBoundingClientRect(),x=hr((l.clientX-h-xr)/(b-mr)*360);e.onUpdateHue(x)}function n(){var l;we("mousemove",document,r),we("mouseup",document,n),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,handleMouseDown:a}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-slider`,style:{height:ge,borderRadius:ue}},s("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:yr,height:ge,borderRadius:ue,position:"relative"},onMousedown:this.handleMouseDown},s("div",{style:{position:"absolute",left:ue,right:ue,top:0,bottom:0}},s("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${ue})`,borderRadius:ue,width:ge,height:ge}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:ue,width:ge,height:ge}})))))}}),$e="12px",Sr=12,be="6px",Cr=X({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=P(null);function a(l){!t.value||!e.rgba||(ye("mousemove",document,r),ye("mouseup",document,n),r(l))}function r(l){const{value:u}=t;if(!u)return;const{width:b,left:h}=u.getBoundingClientRect(),x=(l.clientX-h)/(b-Sr);e.onUpdateAlpha(vr(x))}function n(){var l;we("mousemove",document,r),we("mouseup",document,n),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,railBackgroundImage:O(()=>{const{rgba:l}=e;return l?`linear-gradient(to right, rgba(${l[0]}, ${l[1]}, ${l[2]}, 0) 0%, rgba(${l[0]}, ${l[1]}, ${l[2]}, 1) 100%)`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:$e,borderRadius:be},onMousedown:this.handleMouseDown},s("div",{style:{borderRadius:be,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},s("div",{class:`${e}-color-picker-checkboard`}),s("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&s("div",{style:{position:"absolute",left:be,right:be,top:0,bottom:0}},s("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${be})`,borderRadius:be,width:$e,height:$e}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:ae(this.rgba),borderRadius:be,width:$e,height:$e}}))))}}),Ve="12px",Ee="6px",kr=X({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=P(null);function a(l){t.value&&(ye("mousemove",document,r),ye("mouseup",document,n),r(l))}function r(l){const{value:u}=t;if(!u)return;const{width:b,height:h,left:x,bottom:g}=u.getBoundingClientRect(),k=(g-l.clientY)/h,z=(l.clientX-x)/b,w=100*(z>1?1:z<0?0:z),T=100*(k>1?1:k<0?0:k);e.onUpdateSV(w,T)}function n(){var l;we("mousemove",document,r),we("mouseup",document,n),(l=e.onComplete)===null||l===void 0||l.call(e)}return{palleteRef:t,handleColor:O(()=>{const{rgba:l}=e;return l?`rgb(${l[0]}, ${l[1]}, ${l[2]})`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},s("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),s("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&s("div",{class:`${e}-color-picker-handle`,style:{width:Ve,height:Ve,borderRadius:Ee,left:`calc(${this.displayedSv[0]}% - ${Ee})`,bottom:`calc(${this.displayedSv[1]}% - ${Ee})`}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Ee,width:Ve,height:Ve}})))}}),ht=_t("n-color-picker");function Rr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function _r(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function $r(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function zr(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Pr(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const Tr={paddingSmall:"0 4px"},St=X({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=P(""),{themeRef:a}=pt(ht,null);ft(()=>{t.value=r()});function r(){const{value:u}=e;if(u===null)return"";const{label:b}=e;return b==="HEX"?u:b==="A"?`${Math.floor(u*100)}%`:String(Math.floor(u))}function n(u){t.value=u}function l(u){let b,h;switch(e.label){case"HEX":h=zr(u),h&&e.onUpdateValue(u),t.value=r();break;case"H":b=_r(u),b===!1?t.value=r():e.onUpdateValue(b);break;case"S":case"L":case"V":b=$r(u),b===!1?t.value=r():e.onUpdateValue(b);break;case"A":b=Pr(u),b===!1?t.value=r():e.onUpdateValue(b);break;case"R":case"G":case"B":b=Rr(u),b===!1?t.value=r():e.onUpdateValue(b);break}}return{mergedTheme:a,inputValue:t,handleInputChange:l,handleInputUpdateValue:n}},render(){const{mergedTheme:e}=this;return s(Ga,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Tr,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Ar=X({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,a){const{showAlpha:r}=e;if(e.mode==="hex"){e.onUpdateValue((r?le:ze)(a));return}let n;switch(e.valueArr===null?n=[0,0,0,0]:n=Array.from(e.valueArr),e.mode){case"hsv":n[t]=a,e.onUpdateValue((r?pe:it)(n));break;case"rgb":n[t]=a,e.onUpdateValue((r?ae:ot)(n));break;case"hsl":n[t]=a,e.onUpdateValue((r?se:nt)(n));break}}}},render(){const{clsPrefix:e,modes:t}=this;return s("div",{class:`${e}-color-picker-input`},s("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),s(pr,null,{default:()=>{const{mode:a,valueArr:r,showAlpha:n}=this;if(a==="hex"){let l=null;try{l=r===null?null:(n?le:ze)(r)}catch{}return s(St,{label:"HEX",showAlpha:n,value:l,onUpdateValue:u=>{this.handleUnitUpdateValue(0,u)}})}return(a+(n?"a":"")).split("").map((l,u)=>s(St,{label:l.toUpperCase(),value:r===null?null:r[u],onUpdateValue:b=>{this.handleUnitUpdateValue(u,b)}}))}}))}}),Ur=X({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:a}=pt(ht,null);return()=>{const{hsla:r,value:n,clsPrefix:l,onClick:u,disabled:b}=e,h=t.label||a.value;return s("div",{class:[`${l}-color-picker-trigger`,b&&`${l}-color-picker-trigger--disabled`],onClick:b?void 0:u},s("div",{class:`${l}-color-picker-trigger__fill`},s("div",{class:`${l}-color-picker-checkboard`}),s("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:r?se(r):""}}),n&&r?s("div",{class:`${l}-color-picker-trigger__value`,style:{color:r[2]>50||r[3]<.5?"black":"white"}},h?h(n):n):null))}}});function Mr(e,t){if(t==="hsv"){const[a,r,n,l]=fe(e);return ae([...oe(a,r,n),l])}return e}function Ir(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const Br=X({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=O(()=>e.swatches.map(l=>{const u=Te(l);return{value:l,mode:u,legalValue:Mr(l,u)}}));function a(l){const{mode:u}=e;let{value:b,mode:h}=l;return h||(h="hex",/^[a-zA-Z]+$/.test(b)?b=Ir(b):(ua("color-picker",`color ${b} in swatches is invalid.`),b="#000000")),h===u?b:Bt(b,u,h)}function r(l){e.onUpdateColor(a(l))}function n(l,u){l.key==="Enter"&&r(u)}return{parsedSwatchesRef:t,handleSwatchSelect:r,handleSwatchKeyDown:n}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>s("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:a=>{this.handleSwatchKeyDown(a,t)}},s("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Dr=X({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=Te(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(a){var r;const n=a.target.value;(r=e.onUpdateColor)===null||r===void 0||r.call(e,Bt(n.toUpperCase(),e.mode,"hex")),a.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-preview__preview`},s("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),s("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Vr=S([d("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),d("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[ba(),d("input",`
 text-align: center;
 `)]),d("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[S("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),d("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[$("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),S("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),d("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[$("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),d("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[$("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[m("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),d("color-picker-preview",`
 display: flex;
 `,[$("sliders",`
 flex: 1 0 auto;
 `),$("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),$("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),$("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),d("color-picker-input",`
 display: flex;
 align-items: center;
 `,[d("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),$("mode",`
 width: 72px;
 text-align: center;
 `)]),d("color-picker-control",`
 padding: 12px;
 `),d("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[d("button","margin-left: 8px;")]),d("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[$("value",`
 white-space: nowrap;
 position: relative;
 `),$("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),m("disabled","cursor: not-allowed"),d("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[S("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),d("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[d("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[$("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),S("&:focus",`
 outline: none;
 `,[$("fill",[S("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Er=Object.assign(Object.assign({},Ne.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:st.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Lr=X({name:"ColorPicker",props:Er,setup(e,{slots:t}){const a=P(null);let r=null;const n=pa(e),{mergedSizeRef:l,mergedDisabledRef:u}=n,{localeRef:b}=Ka("global"),{mergedClsPrefixRef:h,namespaceRef:x,inlineThemeDisabled:g}=bt(e),k=Ne("ColorPicker","-color-picker",Vr,fa,e,h);$t(ht,{themeRef:k,renderLabelRef:q(e,"renderLabel"),colorPickerSlots:t});const z=P(e.defaultShow),w=lt(q(e,"show"),z);function T(c){const{onUpdateShow:y,"onUpdate:show":o}=e;y&&ie(y,c),o&&ie(o,c),z.value=c}const{defaultValue:M}=e,E=P(M===void 0?fr(e.modes,e.showAlpha):M),_=lt(q(e,"value"),E),U=P([_.value]),W=P(0),L=O(()=>Te(_.value)),{modes:R}=e,v=P(Te(_.value)||R[0]||"rgb");function V(){const{modes:c}=e,{value:y}=v,o=c.findIndex(i=>i===y);~o?v.value=c[(o+1)%c.length]:v.value="rgb"}let D,F,Q,Y,Z,N,G,B;const de=O(()=>{const{value:c}=_;if(!c)return null;switch(L.value){case"hsv":return fe(c);case"hsl":return[D,F,Q,B]=xe(c),[...It(D,F,Q),B];case"rgb":case"hex":return[Z,N,G,B]=te(c),[...dt(Z,N,G),B]}}),ee=O(()=>{const{value:c}=_;if(!c)return null;switch(L.value){case"rgb":case"hex":return te(c);case"hsv":return[D,F,Y,B]=fe(c),[...oe(D,F,Y),B];case"hsl":return[D,F,Q,B]=xe(c),[...ut(D,F,Q),B]}}),Se=O(()=>{const{value:c}=_;if(!c)return null;switch(L.value){case"hsl":return xe(c);case"hsv":return[D,F,Y,B]=fe(c),[...He(D,F,Y),B];case"rgb":case"hex":return[Z,N,G,B]=te(c),[...ct(Z,N,G),B]}}),Ae=O(()=>{switch(v.value){case"rgb":case"hex":return ee.value;case"hsv":return de.value;case"hsl":return Se.value}}),ce=P(0),Ce=P(1),ke=P([0,0]);function qe(c,y){const{value:o}=de,i=ce.value,p=o?o[3]:1;ke.value=[c,y];const{showAlpha:f}=e;switch(v.value){case"hsv":I((f?pe:it)([i,c,y,p]),"cursor");break;case"hsl":I((f?se:nt)([...He(i,c,y),p]),"cursor");break;case"rgb":I((f?ae:ot)([...oe(i,c,y),p]),"cursor");break;case"hex":I((f?le:ze)([...oe(i,c,y),p]),"cursor");break}}function Ue(c){ce.value=c;const{value:y}=de;if(!y)return;const[,o,i,p]=y,{showAlpha:f}=e;switch(v.value){case"hsv":I((f?pe:it)([c,o,i,p]),"cursor");break;case"rgb":I((f?ae:ot)([...oe(c,o,i),p]),"cursor");break;case"hex":I((f?le:ze)([...oe(c,o,i),p]),"cursor");break;case"hsl":I((f?se:nt)([...He(c,o,i),p]),"cursor");break}}function re(c){switch(v.value){case"hsv":[D,F,Y]=de.value,I(pe([D,F,Y,c]),"cursor");break;case"rgb":[Z,N,G]=ee.value,I(ae([Z,N,G,c]),"cursor");break;case"hex":[Z,N,G]=ee.value,I(le([Z,N,G,c]),"cursor");break;case"hsl":[D,F,Q]=Se.value,I(se([D,F,Q,c]),"cursor");break}Ce.value=c}function I(c,y){y==="cursor"?r=c:r=null;const{nTriggerFormChange:o,nTriggerFormInput:i}=n,{onUpdateValue:p,"onUpdate:value":f}=e;p&&ie(p,c),f&&ie(f,c),o(),i(),E.value=c}function Me(c){I(c,"input"),Pe(ne)}function ne(c=!0){const{value:y}=_;if(y){const{nTriggerFormChange:o,nTriggerFormInput:i}=n,{onComplete:p}=e;p&&p(y);const{value:f}=U,{value:C}=W;c&&(f.splice(C+1,f.length,y),W.value=C+1),o(),i()}}function Xe(){const{value:c}=W;c-1<0||(I(U.value[c-1],"input"),ne(!1),W.value=c-1)}function he(){const{value:c}=W;c<0||c+1>=U.value.length||(I(U.value[c+1],"input"),ne(!1),W.value=c+1)}function Ge(){I(null,"input"),T(!1)}function Ke(){const{value:c}=_,{onConfirm:y}=e;y&&y(c),T(!1)}const Ye=O(()=>W.value>=1),Re=O(()=>{const{value:c}=U;return c.length>1&&W.value<c.length-1});Le(w,c=>{c||(U.value=[_.value],W.value=0)}),ft(()=>{if(!(r&&r===_.value)){const{value:c}=de;c&&(ce.value=c[0],Ce.value=c[3],ke.value=[c[1],c[2]])}r=null});const _e=O(()=>{const{value:c}=l,{common:{cubicBezierEaseInOut:y},self:{textColor:o,color:i,panelFontSize:p,boxShadow:f,border:C,borderRadius:A,dividerColor:H,[K("height",c)]:ve,[K("fontSize",c)]:Je}}=k.value;return{"--n-bezier":y,"--n-text-color":o,"--n-color":i,"--n-panel-font-size":p,"--n-font-size":Je,"--n-box-shadow":f,"--n-border":C,"--n-border-radius":A,"--n-height":ve,"--n-divider-color":H}}),J=g?zt("color-picker",O(()=>l.value[0]),_e,e):void 0;function Ze(){var c;const{value:y}=ee,{value:o}=ce,{internalActions:i,modes:p,actions:f}=e,{value:C}=k,{value:A}=h;return s("div",{class:[`${A}-color-picker-panel`,J==null?void 0:J.themeClass.value],onDragstart:H=>{H.preventDefault()},style:g?void 0:_e.value},s("div",{class:`${A}-color-picker-control`},s(kr,{clsPrefix:A,rgba:y,displayedHue:o,displayedSv:ke.value,onUpdateSV:qe,onComplete:ne}),s("div",{class:`${A}-color-picker-preview`},s("div",{class:`${A}-color-picker-preview__sliders`},s(wr,{clsPrefix:A,hue:o,onUpdateHue:Ue,onComplete:ne}),e.showAlpha?s(Cr,{clsPrefix:A,rgba:y,alpha:Ce.value,onUpdateAlpha:re,onComplete:ne}):null),e.showPreview?s(Dr,{clsPrefix:A,mode:v.value,color:ee.value&&ze(ee.value),onUpdateColor:H=>{I(H,"input")}}):null),s(Ar,{clsPrefix:A,showAlpha:e.showAlpha,mode:v.value,modes:p,onUpdateMode:V,value:_.value,valueArr:Ae.value,onUpdateValue:Me}),((c=e.swatches)===null||c===void 0?void 0:c.length)&&s(Br,{clsPrefix:A,mode:v.value,swatches:e.swatches,onUpdateColor:H=>{I(H,"input")}})),f!=null&&f.length?s("div",{class:`${A}-color-picker-action`},f.includes("confirm")&&s(Be,{size:"small",onClick:Ke,theme:C.peers.Button,themeOverrides:C.peerOverrides.Button},{default:()=>b.value.confirm}),f.includes("clear")&&s(Be,{size:"small",onClick:Ge,disabled:!_.value,theme:C.peers.Button,themeOverrides:C.peerOverrides.Button},{default:()=>b.value.clear})):null,t.action?s("div",{class:`${A}-color-picker-action`},{default:t.action}):i?s("div",{class:`${A}-color-picker-action`},i.includes("undo")&&s(Be,{size:"small",onClick:Xe,disabled:!Ye.value,theme:C.peers.Button,themeOverrides:C.peerOverrides.Button},{default:()=>b.value.undo}),i.includes("redo")&&s(Be,{size:"small",onClick:he,disabled:!Re.value,theme:C.peers.Button,themeOverrides:C.peerOverrides.Button},{default:()=>b.value.redo})):null)}return{mergedClsPrefix:h,namespace:x,selfRef:a,hsla:Se,rgba:ee,mergedShow:w,mergedDisabled:u,isMounted:ha(),adjustedTo:st(e),mergedValue:_,handleTriggerClick(){T(!0)},handleClickOutside(c){var y;!((y=a.value)===null||y===void 0)&&y.contains(va(c))||T(!1)},renderPanel:Ze,cssVars:g?void 0:_e,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:a}=this;return a==null||a(),s("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},s(ga,null,{default:()=>[s(ma,null,{default:()=>s(Ur,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),s(xa,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===st.tdkey,to:this.adjustedTo},{default:()=>s(ya,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Pt(this.renderPanel(),[[wa,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Dt=_t("n-tabs"),Hr={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Wr=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},_a(Hr,["displayDirective"])),je=X({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Wr,setup(e){const{mergedClsPrefixRef:t,valueRef:a,typeRef:r,closableRef:n,tabStyleRef:l,addTabStyleRef:u,tabClassRef:b,addTabClassRef:h,tabChangeIdRef:x,onBeforeLeaveRef:g,triggerRef:k,handleAdd:z,activateTab:w,handleClose:T}=pt(Dt);return{trigger:k,mergedClosable:O(()=>{if(e.internalAddable)return!1;const{closable:M}=e;return M===void 0?n.value:M}),style:l,addStyle:u,tabClass:b,addTabClass:h,clsPrefix:t,value:a,type:r,handleClose(M){M.stopPropagation(),!e.disabled&&T(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){z();return}const{name:M}=e,E=++x.id;if(M!==a.value){const{value:_}=g;_?Promise.resolve(_(e.name,a.value)).then(U=>{U&&x.id===E&&w(M)}):w(M)}}}},render(){const{internalAddable:e,clsPrefix:t,name:a,disabled:r,label:n,tab:l,value:u,mergedClosable:b,trigger:h,$slots:{default:x}}=this,g=n??l;return s("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?s("div",{class:`${t}-tabs-tab-pad`}):null,s("div",Object.assign({key:a,"data-name":a,"data-disabled":r?!0:void 0},Sa({class:[`${t}-tabs-tab`,u===a&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,b&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:h==="click"?this.activateTab:void 0,onMouseenter:h==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),s("span",{class:`${t}-tabs-tab__label`},e?s(Tt,null,s("div",{class:`${t}-tabs-tab__height-placeholder`}," "),s(Ca,{clsPrefix:t},{default:()=>s(Xa,null)})):x?x():typeof g=="object"?g:ka(g??a)),b&&this.type==="card"?s(Ra,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),Fr=d("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[m("segment-type",[d("tabs-rail",[S("&.transition-disabled",[d("tabs-capsule",`
 transition: none;
 `)])])]),m("top",[d("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),m("left",[d("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),m("left, right",`
 flex-direction: row;
 `,[d("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),d("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),m("right",`
 flex-direction: row-reverse;
 `,[d("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),d("tabs-bar",`
 left: 0;
 `)]),m("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[d("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),d("tabs-bar",`
 top: 0;
 `)]),d("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[d("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),d("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[d("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[m("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),S("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),m("flex",[d("tabs-nav",`
 width: 100%;
 position: relative;
 `,[d("tabs-wrapper",`
 width: 100%;
 `,[d("tabs-tab",`
 margin-right: 0;
 `)])])]),d("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[$("prefix, suffix",`
 display: flex;
 align-items: center;
 `),$("prefix","padding-right: 16px;"),$("suffix","padding-left: 16px;")]),m("top, bottom",[d("tabs-nav-scroll-wrapper",[S("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),S("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),m("shadow-start",[S("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),m("shadow-end",[S("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),m("left, right",[d("tabs-nav-scroll-content",`
 flex-direction: column;
 `),d("tabs-nav-scroll-wrapper",[S("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),S("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),m("shadow-start",[S("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),m("shadow-end",[S("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),d("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[d("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[S("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),S("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),d("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),d("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),d("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),d("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[m("disabled",{cursor:"not-allowed"}),$("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),$("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),d("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[S("&.transition-disabled",`
 transition: none;
 `),m("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),d("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),d("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[S("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),S("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),S("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),S("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),S("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),d("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),m("line-type, bar-type",[d("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[S("&:hover",{color:"var(--n-tab-text-color-hover)"}),m("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),m("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),d("tabs-nav",[m("line-type",[m("top",[$("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),d("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),d("tabs-bar",`
 bottom: -1px;
 `)]),m("left",[$("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),d("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),d("tabs-bar",`
 right: -1px;
 `)]),m("right",[$("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),d("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),d("tabs-bar",`
 left: -1px;
 `)]),m("bottom",[$("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),d("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),d("tabs-bar",`
 top: -1px;
 `)]),$("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),d("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),d("tabs-bar",`
 border-radius: 0;
 `)]),m("card-type",[$("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),d("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),d("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),d("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[m("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[$("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),$a("disabled",[S("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),m("closable","padding-right: 8px;"),m("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),m("disabled","color: var(--n-tab-text-color-disabled);")]),d("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),m("left, right",[d("tabs-wrapper",`
 flex-direction: column;
 `,[d("tabs-tab-wrapper",`
 flex-direction: column;
 `,[d("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),m("top",[m("card-type",[d("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[m("active",`
 border-bottom: 1px solid #0000;
 `)]),d("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),d("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),m("left",[m("card-type",[d("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[m("active",`
 border-right: 1px solid #0000;
 `)]),d("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),d("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),m("right",[m("card-type",[d("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[m("active",`
 border-left: 1px solid #0000;
 `)]),d("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),d("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),m("bottom",[m("card-type",[d("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[m("active",`
 border-top: 1px solid #0000;
 `)]),d("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),d("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Or=Object.assign(Object.assign({},Ne.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),jr=X({name:"Tabs",props:Or,setup(e,{slots:t}){var a,r,n,l;const{mergedClsPrefixRef:u,inlineThemeDisabled:b}=bt(e),h=Ne("Tabs","-tabs",Fr,za,e,u),x=P(null),g=P(null),k=P(null),z=P(null),w=P(null),T=P(null),M=P(!0),E=P(!0),_=gt(e,["labelSize","size"]),U=gt(e,["activeName","value"]),W=P((r=(a=U.value)!==null&&a!==void 0?a:e.defaultValue)!==null&&r!==void 0?r:t.default?(l=(n=Qe(t.default())[0])===null||n===void 0?void 0:n.props)===null||l===void 0?void 0:l.name:null),L=lt(U,W),R={id:0},v=O(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Le(L,()=>{R.id=0,Y(),Z()});function V(){var o;const{value:i}=L;return i===null?null:(o=x.value)===null||o===void 0?void 0:o.querySelector(`[data-name="${i}"]`)}function D(o){if(e.type==="card")return;const{value:i}=g;if(!i)return;const p=i.style.opacity==="0";if(o){const f=`${u.value}-tabs-bar--disabled`,{barWidth:C,placement:A}=e;if(o.dataset.disabled==="true"?i.classList.add(f):i.classList.remove(f),["top","bottom"].includes(A)){if(Q(["top","maxHeight","height"]),typeof C=="number"&&o.offsetWidth>=C){const H=Math.floor((o.offsetWidth-C)/2)+o.offsetLeft;i.style.left=`${H}px`,i.style.maxWidth=`${C}px`}else i.style.left=`${o.offsetLeft}px`,i.style.maxWidth=`${o.offsetWidth}px`;i.style.width="8192px",p&&(i.style.transition="none"),i.offsetWidth,p&&(i.style.transition="",i.style.opacity="1")}else{if(Q(["left","maxWidth","width"]),typeof C=="number"&&o.offsetHeight>=C){const H=Math.floor((o.offsetHeight-C)/2)+o.offsetTop;i.style.top=`${H}px`,i.style.maxHeight=`${C}px`}else i.style.top=`${o.offsetTop}px`,i.style.maxHeight=`${o.offsetHeight}px`;i.style.height="8192px",p&&(i.style.transition="none"),i.offsetHeight,p&&(i.style.transition="",i.style.opacity="1")}}}function F(){if(e.type==="card")return;const{value:o}=g;o&&(o.style.opacity="0")}function Q(o){const{value:i}=g;if(i)for(const p of o)i.style[p]=""}function Y(){if(e.type==="card")return;const o=V();o?D(o):F()}function Z(o){var i;const p=(i=w.value)===null||i===void 0?void 0:i.$el;if(!p)return;const f=V();if(!f)return;const{scrollLeft:C,offsetWidth:A}=p,{offsetLeft:H,offsetWidth:ve}=f;C>H?p.scrollTo({top:0,left:H,behavior:"smooth"}):H+ve>C+A&&p.scrollTo({top:0,left:H+ve-A,behavior:"smooth"})}const N=P(null);let G=0,B=null;function de(o){const i=N.value;if(i){G=o.getBoundingClientRect().height;const p=`${G}px`,f=()=>{i.style.height=p,i.style.maxHeight=p};B?(f(),B(),B=null):B=f}}function ee(o){const i=N.value;if(i){const p=o.getBoundingClientRect().height,f=()=>{document.body.offsetHeight,i.style.maxHeight=`${p}px`,i.style.height=`${Math.max(G,p)}px`};B?(B(),B=null,f()):B=f}}function Se(){const o=N.value;if(o){o.style.maxHeight="",o.style.height="";const{paneWrapperStyle:i}=e;if(typeof i=="string")o.style.cssText=i;else if(i){const{maxHeight:p,height:f}=i;p!==void 0&&(o.style.maxHeight=p),f!==void 0&&(o.style.height=f)}}}const Ae={value:[]},ce=P("next");function Ce(o){const i=L.value;let p="next";for(const f of Ae.value){if(f===i)break;if(f===o){p="prev";break}}ce.value=p,ke(o)}function ke(o){const{onActiveNameChange:i,onUpdateValue:p,"onUpdate:value":f}=e;i&&ie(i,o),p&&ie(p,o),f&&ie(f,o),W.value=o}function qe(o){const{onClose:i}=e;i&&ie(i,o)}function Ue(){const{value:o}=g;if(!o)return;const i="transition-disabled";o.classList.add(i),Y(),o.classList.remove(i)}const re=P(null);function I({transitionDisabled:o}){const i=x.value;if(!i)return;o&&i.classList.add("transition-disabled");const p=V();p&&re.value&&(re.value.style.width=`${p.offsetWidth}px`,re.value.style.height=`${p.offsetHeight}px`,re.value.style.transform=`translateX(${p.offsetLeft-Aa(getComputedStyle(i).paddingLeft)}px)`,o&&re.value.offsetWidth),o&&i.classList.remove("transition-disabled")}Le([L],()=>{e.type==="segment"&&Pe(()=>{I({transitionDisabled:!1})})}),Pa(()=>{e.type==="segment"&&I({transitionDisabled:!0})});let Me=0;function ne(o){var i;if(o.contentRect.width===0&&o.contentRect.height===0||Me===o.contentRect.width)return;Me=o.contentRect.width;const{type:p}=e;if((p==="line"||p==="bar")&&Ue(),p!=="segment"){const{placement:f}=e;Re((f==="top"||f==="bottom"?(i=w.value)===null||i===void 0?void 0:i.$el:T.value)||null)}}const Xe=at(ne,64);Le([()=>e.justifyContent,()=>e.size],()=>{Pe(()=>{const{type:o}=e;(o==="line"||o==="bar")&&Ue()})});const he=P(!1);function Ge(o){var i;const{target:p,contentRect:{width:f}}=o,C=p.parentElement.offsetWidth;if(!he.value)C<f&&(he.value=!0);else{const{value:A}=z;if(!A)return;C-f>A.$el.offsetWidth&&(he.value=!1)}Re(((i=w.value)===null||i===void 0?void 0:i.$el)||null)}const Ke=at(Ge,64);function Ye(){const{onAdd:o}=e;o&&o(),Pe(()=>{const i=V(),{value:p}=w;!i||!p||p.scrollTo({left:i.offsetLeft,top:0,behavior:"smooth"})})}function Re(o){if(!o)return;const{placement:i}=e;if(i==="top"||i==="bottom"){const{scrollLeft:p,scrollWidth:f,offsetWidth:C}=o;M.value=p<=0,E.value=p+C>=f}else{const{scrollTop:p,scrollHeight:f,offsetHeight:C}=o;M.value=p<=0,E.value=p+C>=f}}const _e=at(o=>{Re(o.target)},64);$t(Dt,{triggerRef:q(e,"trigger"),tabStyleRef:q(e,"tabStyle"),tabClassRef:q(e,"tabClass"),addTabStyleRef:q(e,"addTabStyle"),addTabClassRef:q(e,"addTabClass"),paneClassRef:q(e,"paneClass"),paneStyleRef:q(e,"paneStyle"),mergedClsPrefixRef:u,typeRef:q(e,"type"),closableRef:q(e,"closable"),valueRef:L,tabChangeIdRef:R,onBeforeLeaveRef:q(e,"onBeforeLeave"),activateTab:Ce,handleClose:qe,handleAdd:Ye}),Ta(()=>{Y(),Z()}),ft(()=>{const{value:o}=k;if(!o)return;const{value:i}=u,p=`${i}-tabs-nav-scroll-wrapper--shadow-start`,f=`${i}-tabs-nav-scroll-wrapper--shadow-end`;M.value?o.classList.remove(p):o.classList.add(p),E.value?o.classList.remove(f):o.classList.add(f)});const J={syncBarPosition:()=>{Y()}},Ze=()=>{I({transitionDisabled:!0})},c=O(()=>{const{value:o}=_,{type:i}=e,p={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[i],f=`${o}${p}`,{self:{barColor:C,closeIconColor:A,closeIconColorHover:H,closeIconColorPressed:ve,tabColor:Je,tabBorderColor:Vt,paneTextColor:Et,tabFontWeight:Lt,tabBorderRadius:Ht,tabFontWeightActive:Wt,colorSegment:Ft,fontWeightStrong:Ot,tabColorSegment:jt,closeSize:Nt,closeIconSize:qt,closeColorHover:Xt,closeColorPressed:Gt,closeBorderRadius:Kt,[K("panePadding",o)]:Ie,[K("tabPadding",f)]:Yt,[K("tabPaddingVertical",f)]:Zt,[K("tabGap",f)]:Jt,[K("tabGap",`${f}Vertical`)]:Qt,[K("tabTextColor",i)]:ea,[K("tabTextColorActive",i)]:ta,[K("tabTextColorHover",i)]:aa,[K("tabTextColorDisabled",i)]:ra,[K("tabFontSize",o)]:na},common:{cubicBezierEaseInOut:oa}}=h.value;return{"--n-bezier":oa,"--n-color-segment":Ft,"--n-bar-color":C,"--n-tab-font-size":na,"--n-tab-text-color":ea,"--n-tab-text-color-active":ta,"--n-tab-text-color-disabled":ra,"--n-tab-text-color-hover":aa,"--n-pane-text-color":Et,"--n-tab-border-color":Vt,"--n-tab-border-radius":Ht,"--n-close-size":Nt,"--n-close-icon-size":qt,"--n-close-color-hover":Xt,"--n-close-color-pressed":Gt,"--n-close-border-radius":Kt,"--n-close-icon-color":A,"--n-close-icon-color-hover":H,"--n-close-icon-color-pressed":ve,"--n-tab-color":Je,"--n-tab-font-weight":Lt,"--n-tab-font-weight-active":Wt,"--n-tab-padding":Yt,"--n-tab-padding-vertical":Zt,"--n-tab-gap":Jt,"--n-tab-gap-vertical":Qt,"--n-pane-padding-left":De(Ie,"left"),"--n-pane-padding-right":De(Ie,"right"),"--n-pane-padding-top":De(Ie,"top"),"--n-pane-padding-bottom":De(Ie,"bottom"),"--n-font-weight-strong":Ot,"--n-tab-color-segment":jt}}),y=b?zt("tabs",O(()=>`${_.value[0]}${e.type[0]}`),c,e):void 0;return Object.assign({mergedClsPrefix:u,mergedValue:L,renderedNames:new Set,segmentCapsuleElRef:re,tabsPaneWrapperRef:N,tabsElRef:x,barElRef:g,addTabInstRef:z,xScrollInstRef:w,scrollWrapperElRef:k,addTabFixed:he,tabWrapperStyle:v,handleNavResize:Xe,mergedSize:_,handleScroll:_e,handleTabsResize:Ke,cssVars:b?void 0:c,themeClass:y==null?void 0:y.themeClass,animationDirection:ce,renderNameListRef:Ae,yScrollElRef:T,handleSegmentResize:Ze,onAnimationBeforeLeave:de,onAnimationEnter:ee,onAnimationAfterEnter:Se,onRender:y==null?void 0:y.onRender},J)},render(){const{mergedClsPrefix:e,type:t,placement:a,addTabFixed:r,addable:n,mergedSize:l,renderNameListRef:u,onRender:b,paneWrapperClass:h,paneWrapperStyle:x,$slots:{default:g,prefix:k,suffix:z}}=this;b==null||b();const w=g?Qe(g()).filter(R=>R.type.__TAB_PANE__===!0):[],T=g?Qe(g()).filter(R=>R.type.__TAB__===!0):[],M=!T.length,E=t==="card",_=t==="segment",U=!E&&!_&&this.justifyContent;u.value=[];const W=()=>{const R=s("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},U?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),M?w.map((v,V)=>(u.value.push(v.props.name),rt(s(je,Object.assign({},v.props,{internalCreatedByPane:!0,internalLeftPadded:V!==0&&(!U||U==="center"||U==="start"||U==="end")}),v.children?{default:v.children.tab}:void 0)))):T.map((v,V)=>(u.value.push(v.props.name),rt(V!==0&&!U?Rt(v):v))),!r&&n&&E?kt(n,(M?w.length:T.length)!==0):null,U?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return s("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},E&&n?s(et,{onResize:this.handleTabsResize},{default:()=>R}):R,E?s("div",{class:`${e}-tabs-pad`}):null,E?null:s("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},L=_?"top":a;return s("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${l}-size`,U&&`${e}-tabs--flex`,`${e}-tabs--${L}`],style:this.cssVars},s("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${L}`,`${e}-tabs-nav`]},mt(k,R=>R&&s("div",{class:`${e}-tabs-nav__prefix`},R)),_?s(et,{onResize:this.handleSegmentResize},{default:()=>s("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},s("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},s("div",{class:`${e}-tabs-wrapper`},s("div",{class:`${e}-tabs-tab`}))),M?w.map((R,v)=>(u.value.push(R.props.name),s(je,Object.assign({},R.props,{internalCreatedByPane:!0,internalLeftPadded:v!==0}),R.children?{default:R.children.tab}:void 0))):T.map((R,v)=>(u.value.push(R.props.name),v===0?R:Rt(R))))}):s(et,{onResize:this.handleNavResize},{default:()=>s("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(L)?s(Za,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:W}):s("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},W()))}),r&&n&&E?kt(n,!0):null,mt(z,R=>R&&s("div",{class:`${e}-tabs-nav__suffix`},R))),M&&(this.animated&&(L==="top"||L==="bottom")?s("div",{ref:"tabsPaneWrapperRef",style:x,class:[`${e}-tabs-pane-wrapper`,h]},Ct(w,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ct(w,this.mergedValue,this.renderedNames)))}});function Ct(e,t,a,r,n,l,u){const b=[];return e.forEach(h=>{const{name:x,displayDirective:g,"display-directive":k}=h.props,z=T=>g===T||k===T,w=t===x;if(h.key!==void 0&&(h.key=x),w||z("show")||z("show:lazy")&&a.has(x)){a.has(x)||a.add(x);const T=!z("if");b.push(T?Pt(h,[[Ua,w]]):h)}}),u?s(Ma,{name:`${u}-transition`,onBeforeLeave:r,onEnter:n,onAfterEnter:l},{default:()=>b}):b}function kt(e,t){return s(je,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function Rt(e){const t=Ia(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function rt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const Nr={__name:"ContextMenu",props:{show:{type:Boolean,default:!1},currentPath:{type:String,default:""},x:{type:Number,default:0},y:{type:Number,default:0}},emits:["update:show"],setup(e,{emit:t}){const a=e,r=t,n=At(),l=O(()=>[{label:"重新加载",key:"reload",disabled:a.currentPath!==n.activeTab,icon:()=>s("i",{class:"i-mdi:refresh text-14"})},{label:"关闭",key:"close",disabled:n.tabs.length<=1,icon:()=>s("i",{class:"i-mdi:close text-14"})},{label:"关闭其他",key:"close-other",disabled:n.tabs.length<=1,icon:()=>s("i",{class:"i-mdi:arrow-expand-horizontal text-14"})},{label:"关闭左侧",key:"close-left",disabled:n.tabs.length<=1||a.currentPath===n.tabs[0].path,icon:()=>s("i",{class:"i-mdi:arrow-expand-left text-14"})},{label:"关闭右侧",key:"close-right",disabled:n.tabs.length<=1||a.currentPath===n.tabs[n.tabs.length-1].path,icon:()=>s("i",{class:"i-mdi:arrow-expand-right text-14"})}]),u=Ba(),b=new Map([["reload",()=>{var g;n.reloadTab(u.fullPath,(g=u.meta)==null?void 0:g.keepAlive)}],["close",()=>{n.removeTab(a.currentPath)}],["close-other",()=>{n.removeOther(a.currentPath)}],["close-left",()=>{n.removeLeft(a.currentPath)}],["close-right",()=>{n.removeRight(a.currentPath)}]]);function h(){r("update:show",!1)}function x(g){const k=b.get(g);k&&k(),h()}return(g,k)=>{const z=Na;return me(),Fe(z,{show:e.show,options:j(l),x:e.x,y:e.y,placement:"bottom-start",onClickoutside:h,onSelect:x},null,8,["show","options","x","y"])}}},qr={__name:"index",setup(e){const t=Da(),a=At(),r=Va({show:!1,x:0,y:0,currentPath:""});function n(x){a.setActiveTab(x),t.push(x)}function l(){r.show=!0}function u(){r.show=!1}function b(x,g,k){Object.assign(r,{x,y:g,currentPath:k})}async function h(x,g){const{clientX:k,clientY:z}=x;u(),b(k,z,g.path),await Pe(),l()}return(x,g)=>{const k=je,z=jr;return me(),xt("div",null,[Ut(z,{value:j(a).activeTab,closable:j(a).tabs.length>1,type:"card",onClose:g[0]||(g[0]=w=>j(a).removeTab(w))},{default:Oe(()=>[(me(!0),xt(Tt,null,Ea(j(a).tabs,w=>(me(),Fe(k,{key:w.path,name:w.path,onClick:T=>n(w.path),onContextmenu:La(T=>h(T,w),["prevent"])},{default:Oe(()=>[Mt(Ha(w.title),1)]),_:2},1032,["name","onClick","onContextmenu"]))),128))]),_:1},8,["value","closable"]),j(r).show?(me(),Fe(Nr,{key:0,show:j(r).show,"onUpdate:show":g[1]||(g[1]=w=>j(r).show=w),"current-path":j(r).currentPath,x:j(r).x,y:j(r).y},null,8,["show","current-path","x","y"])):Wa("",!0)])}}},en=qa(qr,[["__scopeId","data-v-0657f20f"]]),tn={__name:"ThemeSetting",setup(e){const t=Fa(),a=Object.entries(Oa()).map(([,r])=>r.primary);return(r,n)=>{const l=Lr,u=ja;return me(),Fe(u,{trigger:"hover"},{trigger:Oe(()=>[Ut(l,{class:"mr-16 h-32 w-32",value:j(t).primaryColor,swatches:j(a),"on-update:value":b=>j(t).setPrimaryColor(b),"render-label":()=>""},null,8,["value","swatches","on-update:value"])]),default:Oe(()=>[Mt(" 设置主题色 ")]),_:1})}}};export{en as A,tn as _};
