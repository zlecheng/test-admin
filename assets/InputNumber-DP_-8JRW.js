import{e as re,j as u,bj as Me,bk as Te,bJ as Se,bK as Pe,a as De,c as J,u as Ce,f as le,aa as _e,l as N,t as Fe,ac as Oe,aN as g,y as Ae,bL as ke,h as Ue,Y as $e,aB as X,a2 as Y,s as q,ar as Q,bM as Z,an as I,ap as Ee}from"./index-FSu8gHql.js";import{u as Le}from"./Eye-Dze2fAu3.js";import{_ as He}from"./Input-jCXheb0X.js";import{A as je}from"./Add-Bekniv5s.js";const ze=re({name:"Remove",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),Ge=n=>{const{textColorDisabled:i}=n;return{iconColorDisabled:i}},Ke=Me({name:"InputNumber",common:Te,peers:{Button:Se,Input:Pe},self:Ge});function We(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function Je(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function L(n){return n==null?!0:!Number.isNaN(n)}function ee(n,i){return n==null?"":i===void 0?String(n):n.toFixed(i)}function H(n){if(n===null)return null;if(typeof n=="number")return n;{const i=Number(n);return Number.isNaN(i)?null:i}}const Xe=De([J("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),J("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),ne=800,te=100,Ye=Object.assign(Object.assign({},le.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},inputProps:Object,readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),nn=re({name:"InputNumber",props:Ye,setup(n){const{mergedBorderedRef:i,mergedClsPrefixRef:p,mergedRtlRef:P}=Ce(n),a=le("InputNumber","-input-number",Xe,Ke,n,p),{localeRef:v}=Le("InputNumber"),R=_e(n),{mergedSizeRef:ie,mergedDisabledRef:ue,mergedStatusRef:ae}=R,d=N(null),j=N(null),z=N(null),D=N(n.defaultValue),oe=Fe(n,"value"),f=Oe(oe,D),h=N(""),C=e=>{const t=String(e).split(".")[1];return t?t.length:0},se=e=>{const t=[n.min,n.max,n.step,e].map(r=>r===void 0?0:C(r));return Math.max(...t)},de=g(()=>{const{placeholder:e}=n;return e!==void 0?e:v.value.placeholder}),M=g(()=>{const e=H(n.step);return e!==null?e===0?1:Math.abs(e):1}),G=g(()=>{const e=H(n.min);return e!==null?e:null}),K=g(()=>{const e=H(n.max);return e!==null?e:null}),V=e=>{const{value:t}=f;if(e===t){b();return}const{"onUpdate:value":r,onUpdateValue:l,onChange:s}=n,{nTriggerFormInput:c,nTriggerFormChange:x}=R;s&&I(s,e),l&&I(l,e),r&&I(r,e),D.value=e,c(),x()},o=({offset:e,doUpdateIfValid:t,fixPrecision:r,isInputing:l})=>{const{value:s}=h;if(l&&Je(s))return!1;const c=(n.parse||We)(s);if(c===null)return t&&V(null),null;if(L(c)){const x=C(c),{precision:B}=n;if(B!==void 0&&B<x&&!r)return!1;let m=parseFloat((c+e).toFixed(B??se(c)));if(L(m)){const{value:$}=K,{value:E}=G;if($!==null&&m>$){if(!t||l)return!1;m=$}if(E!==null&&m<E){if(!t||l)return!1;m=E}return n.validator&&!n.validator(m)?!1:(t&&V(m),m)}}return!1},b=()=>{const{value:e}=f;if(L(e)){const{format:t,precision:r}=n;t?h.value=t(e):e===null||r===void 0||C(e)>r?h.value=ee(e,void 0):h.value=ee(e,r)}else h.value=String(e)};b();const fe=g(()=>o({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),_=g(()=>{const{value:e}=f;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),F=g(()=>{const{value:e}=f;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function ce(e){const{onFocus:t}=n,{nTriggerFormFocus:r}=R;t&&I(t,e),r()}function me(e){var t,r;if(e.target===((t=d.value)===null||t===void 0?void 0:t.wrapperElRef))return;const l=o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(l!==!1){const x=(r=d.value)===null||r===void 0?void 0:r.inputElRef;x&&(x.value=String(l||"")),f.value===l&&b()}else b();const{onBlur:s}=n,{nTriggerFormBlur:c}=R;s&&I(s,e),c(),Ee(()=>{b()})}function ve(e){const{onClear:t}=n;t&&I(t,e)}function O(){const{value:e}=F;if(!e){U();return}const{value:t}=f;if(t===null)n.validator||V(W());else{const{value:r}=M;o({offset:r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function A(){const{value:e}=_;if(!e){k();return}const{value:t}=f;if(t===null)n.validator||V(W());else{const{value:r}=M;o({offset:-r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const he=ce,ge=me;function W(){if(n.validator)return null;const{value:e}=G,{value:t}=K;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function pe(e){ve(e),V(null)}function be(e){var t,r,l;!((t=z.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((r=j.value)===null||r===void 0)&&r.$el.contains(e.target)&&e.preventDefault(),(l=d.value)===null||l===void 0||l.activate()}let y=null,w=null,T=null;function k(){T&&(window.clearTimeout(T),T=null),y&&(window.clearInterval(y),y=null)}function U(){S&&(window.clearTimeout(S),S=null),w&&(window.clearInterval(w),w=null)}function xe(){k(),T=window.setTimeout(()=>{y=window.setInterval(()=>{A()},te)},ne),Y("mouseup",document,k,{once:!0})}let S=null;function Ie(){U(),S=window.setTimeout(()=>{w=window.setInterval(()=>{O()},te)},ne),Y("mouseup",document,U,{once:!0})}const Ve=()=>{w||O()},ye=()=>{y||A()};function we(e){var t,r;if(e.key==="Enter"){if(e.target===((t=d.value)===null||t===void 0?void 0:t.wrapperElRef))return;o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((r=d.value)===null||r===void 0||r.deactivate())}else if(e.key==="ArrowUp"){if(!F.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&O()}else if(e.key==="ArrowDown"){if(!_.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&A()}}function Be(e){h.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&o({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Ae(f,()=>{b()});const Ne={focus:()=>{var e;return(e=d.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=d.value)===null||e===void 0?void 0:e.blur()},select:()=>{var e;return(e=d.value)===null||e===void 0?void 0:e.select()}},Re=ke("InputNumber",P,p);return Object.assign(Object.assign({},Ne),{rtlEnabled:Re,inputInstRef:d,minusButtonInstRef:j,addButtonInstRef:z,mergedClsPrefix:p,mergedBordered:i,uncontrolledValue:D,mergedValue:f,mergedPlaceholder:de,displayedValueInvalid:fe,mergedSize:ie,mergedDisabled:ue,displayedValue:h,addable:F,minusable:_,mergedStatus:ae,handleFocus:he,handleBlur:ge,handleClear:pe,handleMouseDown:be,handleAddClick:Ve,handleMinusClick:ye,handleAddMousedown:Ie,handleMinusMousedown:xe,handleKeyDown:we,handleUpdateDisplayedValue:Be,mergedTheme:a,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:Ue(()=>{const{self:{iconColorDisabled:e}}=a.value,[t,r,l,s]=$e(e);return{textColorTextDisabled:`rgb(${t}, ${r}, ${l})`,opacityDisabled:`${s}`}})})},render(){const{mergedClsPrefix:n,$slots:i}=this,p=()=>u(Z,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>q(i["minus-icon"],()=>[u(Q,{clsPrefix:n},{default:()=>u(ze,null)})])}),P=()=>u(Z,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>q(i["add-icon"],()=>[u(Q,{clsPrefix:n},{default:()=>u(je,null)})])});return u("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},u(He,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,inputProps:this.inputProps,internalLoadingBeforeSuffix:!0},{prefix:()=>{var a;return this.showButton&&this.buttonPlacement==="both"?[p(),X(i.prefix,v=>v?u("span",{class:`${n}-input-number-prefix`},v):null)]:(a=i.prefix)===null||a===void 0?void 0:a.call(i)},suffix:()=>{var a;return this.showButton?[X(i.suffix,v=>v?u("span",{class:`${n}-input-number-suffix`},v):null),this.buttonPlacement==="right"?p():null,P()]:(a=i.suffix)===null||a===void 0?void 0:a.call(i)}}))}});export{nn as _};
