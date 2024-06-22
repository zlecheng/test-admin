import{e as M,j as v,aB as We,k as ee,q as L,h as b,p as G,as as V,G as de,ar as Ze,l as $,aN as le,aO as Je,aM as Qe,aP as ne,aQ as ue,a as C,c as g,b as S,d as f,av as U,aR as Xe,u as Ye,f as Re,aS as eo,P as _e,t as ye,ac as ze,ax as oo,an as O,i as to,aT as no,aC as ro,aU as Se,aV as Ae,aW as io,z as E,A as X,B as T,J as B,I as F,D as re,C as z,aX as lo,F as q,H as ao,K as Pe,E as Y,aY as co,aZ as ae,a_ as so,ao as uo,v as Ne,x as ke,aI as vo,aK as mo,L as ve,a$ as ho,al as po,aE as fo,w as go,y as xo,ap as bo,b0 as Co}from"./index-k9ku2iOX.js";import{r as _o,s as yo,_ as He,a as zo}from"./Dropdown-Dlm6aciY.js";import{_ as wo}from"./Avatar-CnVXcLMY.js";import{_ as Io}from"./plugin-vueexport-helper-DlAUqK2U.js";import{c as ie,V as Ro}from"./create-6Nsgmbg3.js";const So=M({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ao=M({name:"RadioButton",props:_o,setup:yo,render(){const{mergedClsPrefix:e}=this;return v("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},v("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),v("div",{class:`${e}-radio-button__state-border`}),We(this.$slots.default,r=>!r&&!this.label?null:v("div",{ref:"labelRef",class:`${e}-radio__label`},r||this.label)))}}),Po=ee("n-layout-sider"),W=ee("n-menu"),me=ee("n-submenu"),he=ee("n-menu-item-group"),Q=8;function pe(e){const r=L(W),{props:t,mergedCollapsedRef:l}=r,a=L(me,null),c=L(he,null),s=b(()=>t.mode==="horizontal"),u=b(()=>s.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),i=b(()=>{var m;return Math.max((m=t.collapsedIconSize)!==null&&m!==void 0?m:t.iconSize,t.iconSize)}),x=b(()=>{var m;return!s.value&&e.root&&l.value&&(m=t.collapsedIconSize)!==null&&m!==void 0?m:t.iconSize}),R=b(()=>{if(s.value)return;const{collapsedWidth:m,indent:I,rootIndent:y}=t,{root:P,isGroup:N}=e,H=y===void 0?I:y;return P?l.value?m/2-i.value/2:H:c&&typeof c.paddingLeftRef.value=="number"?I/2+c.paddingLeftRef.value:a&&typeof a.paddingLeftRef.value=="number"?(N?I/2:I)+a.paddingLeftRef.value:0}),w=b(()=>{const{collapsedWidth:m,indent:I,rootIndent:y}=t,{value:P}=i,{root:N}=e;return s.value||!N||!l.value?Q:(y===void 0?I:y)+P+Q-(m+P)/2});return{dropdownPlacement:u,activeIconSize:x,maxIconSize:i,paddingLeft:R,iconMarginRight:w,NMenu:r,NSubmenu:a}}const fe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},$e=Object.assign(Object.assign({},fe),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),No=M({name:"MenuOptionGroup",props:$e,setup(e){G(me,null);const r=pe(e);G(he,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:t,props:l}=L(W);return function(){const{value:a}=t,c=r.paddingLeft.value,{nodeProps:s}=l,u=s==null?void 0:s(e.tmNode.rawNode);return v("div",{class:`${a}-menu-item-group`,role:"group"},v("div",Object.assign({},u,{class:[`${a}-menu-item-group-title`,u==null?void 0:u.class],style:[(u==null?void 0:u.style)||"",c!==void 0?`padding-left: ${c}px;`:""]}),V(e.title),e.extra?v(de,null," ",V(e.extra)):null),v("div",null,e.tmNodes.map(i=>ge(i,l))))}}}),Te=M({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:r}=L(W);return{menuProps:r,style:b(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:b(()=>{const{maxIconSize:t,activeIconSize:l,iconMarginRight:a}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${l}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:t,renderLabel:l,renderExtra:a,expandIcon:c}}=this,s=t?t(r.rawNode):V(this.icon);return v("div",{onClick:u=>{var i;(i=this.onClick)===null||i===void 0||i.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:l?l(r.rawNode):V(this.title),this.extra||a?v("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(r.rawNode):V(this.extra)):null),this.showArrow?v(Ze,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>c?c(r.rawNode):v(So,null)}):null)}}),Ee=Object.assign(Object.assign({},fe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),ce=M({name:"Submenu",props:Ee,setup(e){const r=pe(e),{NMenu:t,NSubmenu:l}=r,{props:a,mergedCollapsedRef:c,mergedThemeRef:s}=t,u=b(()=>{const{disabled:m}=e;return l!=null&&l.mergedDisabledRef.value||a.disabled?!0:m}),i=$(!1);G(me,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:u}),G(he,null);function x(){const{onClick:m}=e;m&&m()}function R(){u.value||(c.value||t.toggleExpand(e.internalKey),x())}function w(m){i.value=m}return{menuProps:a,mergedTheme:s,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:i,paddingLeft:r.paddingLeft,mergedDisabled:u,mergedValue:t.mergedValueRef,childActive:le(()=>{var m;return(m=e.virtualChildActive)!==null&&m!==void 0?m:t.activePathRef.value.includes(e.internalKey)}),collapsed:b(()=>a.mode==="horizontal"?!1:c.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!u.value&&(a.mode==="horizontal"||c.value)),handlePopoverShowChange:w,handleClick:R}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:t,renderLabel:l}}=this,a=()=>{const{isHorizontal:s,paddingLeft:u,collapsed:i,mergedDisabled:x,maxIconSize:R,activeIconSize:w,title:m,childActive:I,icon:y,handleClick:P,menuProps:{nodeProps:N},dropdownShow:H,iconMarginRight:j,tmNode:A,mergedClsPrefix:D,isEllipsisPlaceholder:oe,extra:Z}=this,k=N==null?void 0:N(A.rawNode);return v("div",Object.assign({},k,{class:[`${D}-menu-item`,k==null?void 0:k.class],role:"menuitem"}),v(Te,{tmNode:A,paddingLeft:u,collapsed:i,disabled:x,iconMarginRight:j,maxIconSize:R,activeIconSize:w,title:m,extra:Z,showArrow:!s,childActive:I,clsPrefix:D,icon:y,hover:H,onClick:P,isEllipsisPlaceholder:oe}))},c=()=>v(Je,null,{default:()=>{const{tmNodes:s,collapsed:u}=this;return u?null:v("div",{class:`${r}-submenu-children`,role:"menu"},s.map(i=>ge(i,this.menuProps)))}});return this.root?v(He,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:l}),{default:()=>v("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},a(),this.isHorizontal?null:c())}):v("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},a(),c())}}),Fe=Object.assign(Object.assign({},fe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),ko=M({name:"MenuOption",props:Fe,setup(e){const r=pe(e),{NSubmenu:t,NMenu:l}=r,{props:a,mergedClsPrefixRef:c,mergedCollapsedRef:s}=l,u=t?t.mergedDisabledRef:{value:!1},i=b(()=>u.value||e.disabled);function x(w){const{onClick:m}=e;m&&m(w)}function R(w){i.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),x(w))}return{mergedClsPrefix:c,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:a,dropdownEnabled:le(()=>e.root&&s.value&&a.mode!=="horizontal"&&!i.value),selected:le(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:i,handleClick:R}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:t,menuProps:{renderLabel:l,nodeProps:a}}=this,c=a==null?void 0:a(t.rawNode);return v("div",Object.assign({},c,{role:"menuitem",class:[`${e}-menu-item`,c==null?void 0:c.class]}),v(Qe,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(t.rawNode):V(this.title),trigger:()=>v(Te,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Ho=M({name:"MenuDivider",setup(){const e=L(W),{mergedClsPrefixRef:r,isHorizontalRef:t}=e;return()=>t.value?null:v("div",{class:`${r.value}-menu-divider`})}}),$o=ue($e),To=ue(Fe),Eo=ue(Ee);function se(e){return e.type==="divider"||e.type==="render"}function Fo(e){return e.type==="divider"}function ge(e,r){const{rawNode:t}=e,{show:l}=t;if(l===!1)return null;if(se(t))return Fo(t)?v(Ho,Object.assign({key:e.key},t.props)):null;const{labelField:a}=r,{key:c,level:s,isGroup:u}=e,i=Object.assign(Object.assign({},t),{title:t.title||t[a],extra:t.titleExtra||t.extra,key:c,internalKey:c,level:s,root:s===0,isGroup:u});return e.children?e.isGroup?v(No,ne(i,$o,{tmNode:e,tmNodes:e.children,key:c})):v(ce,ne(i,Eo,{key:c,rawNodes:t[r.childrenField],tmNodes:e.children,tmNode:e})):v(ko,ne(i,To,{key:c,tmNode:e}))}const we=[C("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
 color: var(--n-arrow-color-hover);
 `),f("icon",`
 color: var(--n-item-icon-color-hover);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),f("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ie=[f("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Mo=C([g("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[S("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[g("submenu","margin: 0;"),g("menu-item","margin: 0;"),g("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[C("&::before","display: none;"),S("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),g("menu-item-content",[S("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),S("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),f("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),U("disabled",[U("selected, child-active",[C("&:focus-within",Ie)]),S("selected",[K(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),S("child-active",[K(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),K("border-bottom: 2px solid var(--n-border-color-horizontal);",Ie)]),g("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),U("responsive",[g("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),S("collapsed",[g("menu-item-content",[S("selected",[C("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),g("menu-item-content-header","opacity: 0;"),f("arrow","opacity: 0;"),f("icon","color: var(--n-item-icon-color-collapsed);")])]),g("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),g("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("> *","z-index: 1;"),C("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),S("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),S("collapsed",[f("arrow","transform: rotate(0);")]),S("selected",[C("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[C("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),S("child-active",[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[C("a",`
 color: var(--n-item-text-color-child-active);
 `),f("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),f("arrow",`
 color: var(--n-arrow-color-child-active);
 `),f("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),U("disabled",[U("selected, child-active",[C("&:focus-within",we)]),S("selected",[K(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),S("child-active",[K(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),S("selected",[K(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),K(null,we)]),f("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),f("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),g("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[C("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[C("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),f("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),g("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[g("menu-item-content",`
 height: var(--n-item-height);
 `),g("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Xe({duration:".2s"})])]),g("menu-item-group",[g("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),g("menu-tooltip",[C("a",`
 color: inherit;
 text-decoration: none;
 `)]),g("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function K(e,r){return[S("hover",e,r),C("&:hover",e,r)]}const Oo=Object.assign(Object.assign({},Re.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Ko=M({name:"Menu",props:Oo,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t}=Ye(e),l=Re("Menu","-menu",Mo,eo,e,r),a=L(Po,null),c=b(()=>{var d;const{collapsed:p}=e;if(p!==void 0)return p;if(a){const{collapseModeRef:o,collapsedRef:h}=a;if(o.value==="width")return(d=h.value)!==null&&d!==void 0?d:!1}return!1}),s=b(()=>{const{keyField:d,childrenField:p,disabledField:o}=e;return ie(e.items||e.options,{getIgnored(h){return se(h)},getChildren(h){return h[p]},getDisabled(h){return h[o]},getKey(h){var _;return(_=h[d])!==null&&_!==void 0?_:h.name}})}),u=b(()=>new Set(s.value.treeNodes.map(d=>d.key))),{watchProps:i}=e,x=$(null);i!=null&&i.includes("defaultValue")?_e(()=>{x.value=e.defaultValue}):x.value=e.defaultValue;const R=ye(e,"value"),w=ze(R,x),m=$([]),I=()=>{m.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(w.value,{includeSelf:!1}).keyPath};i!=null&&i.includes("defaultExpandedKeys")?_e(I):I();const y=oo(e,["expandedNames","expandedKeys"]),P=ze(y,m),N=b(()=>s.value.treeNodes),H=b(()=>s.value.getPath(w.value).keyPath);G(W,{props:e,mergedCollapsedRef:c,mergedThemeRef:l,mergedValueRef:w,mergedExpandedKeysRef:P,activePathRef:H,mergedClsPrefixRef:r,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:ye(e,"inverted"),doSelect:j,toggleExpand:D});function j(d,p){const{"onUpdate:value":o,onUpdateValue:h,onSelect:_}=e;h&&O(h,d,p),o&&O(o,d,p),_&&O(_,d,p),x.value=d}function A(d){const{"onUpdate:expandedKeys":p,onUpdateExpandedKeys:o,onExpandedNamesChange:h,onOpenNamesChange:_}=e;p&&O(p,d),o&&O(o,d),h&&O(h,d),_&&O(_,d),m.value=d}function D(d){const p=Array.from(P.value),o=p.findIndex(h=>h===d);if(~o)p.splice(o,1);else{if(e.accordion&&u.value.has(d)){const h=p.findIndex(_=>u.value.has(_));h>-1&&p.splice(h,1)}p.push(d)}A(p)}const oe=d=>{const p=s.value.getPath(d??w.value,{includeSelf:!1}).keyPath;if(!p.length)return;const o=Array.from(P.value),h=new Set([...o,...p]);e.accordion&&u.value.forEach(_=>{h.has(_)&&!p.includes(_)&&h.delete(_)}),A(Array.from(h))},Z=b(()=>{const{inverted:d}=e,{common:{cubicBezierEaseInOut:p},self:o}=l.value,{borderRadius:h,borderColorHorizontal:_,fontSize:Ue,itemHeight:Ge,dividerColor:qe}=o,n={"--n-divider-color":qe,"--n-bezier":p,"--n-font-size":Ue,"--n-border-color-horizontal":_,"--n-border-radius":h,"--n-item-height":Ge};return d?(n["--n-group-text-color"]=o.groupTextColorInverted,n["--n-color"]=o.colorInverted,n["--n-item-text-color"]=o.itemTextColorInverted,n["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,n["--n-item-text-color-active"]=o.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=o.itemIconColorInverted,n["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=o.arrowColorInverted,n["--n-arrow-color-hover"]=o.arrowColorHoverInverted,n["--n-arrow-color-active"]=o.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=o.itemColorHoverInverted,n["--n-item-color-active"]=o.itemColorActiveInverted,n["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=o.groupTextColor,n["--n-color"]=o.color,n["--n-item-text-color"]=o.itemTextColor,n["--n-item-text-color-hover"]=o.itemTextColorHover,n["--n-item-text-color-active"]=o.itemTextColorActive,n["--n-item-text-color-child-active"]=o.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,n["--n-item-icon-color"]=o.itemIconColor,n["--n-item-icon-color-hover"]=o.itemIconColorHover,n["--n-item-icon-color-active"]=o.itemIconColorActive,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=o.arrowColor,n["--n-arrow-color-hover"]=o.arrowColorHover,n["--n-arrow-color-active"]=o.arrowColorActive,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,n["--n-arrow-color-child-active"]=o.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,n["--n-item-color-hover"]=o.itemColorHover,n["--n-item-color-active"]=o.itemColorActive,n["--n-item-color-active-hover"]=o.itemColorActiveHover,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),n}),k=t?to("menu",b(()=>e.inverted?"a":"b"),Z,e):void 0,te=no(),xe=$(null),Me=$(null);let be=!0;const Ce=()=>{var d;be?be=!1:(d=xe.value)===null||d===void 0||d.sync({showAllItemsBeforeCalculate:!0})};function Oe(){return document.getElementById(te)}const J=$(-1);function Ke(d){J.value=e.options.length-d}function Le(d){d||(J.value=-1)}const Be=b(()=>{const d=J.value;return{children:d===-1?[]:e.options.slice(d)}}),je=b(()=>{const{childrenField:d,disabledField:p,keyField:o}=e;return ie([Be.value],{getIgnored(h){return se(h)},getChildren(h){return h[d]},getDisabled(h){return h[p]},getKey(h){var _;return(_=h[o])!==null&&_!==void 0?_:h.name}})}),Ve=b(()=>ie([{}]).treeNodes[0]);function De(){var d;if(J.value===-1)return v(ce,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Ve.value,domId:te,isEllipsisPlaceholder:!0});const p=je.value.treeNodes[0],o=H.value,h=!!(!((d=p.children)===null||d===void 0)&&d.some(_=>o.includes(_.key)));return v(ce,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:h,tmNode:p,domId:te,rawNodes:p.rawNode.children||[],tmNodes:p.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:r,controlledExpandedKeys:y,uncontrolledExpanededKeys:m,mergedExpandedKeys:P,uncontrolledValue:x,mergedValue:w,activePath:H,tmNodes:N,mergedTheme:l,mergedCollapsed:c,cssVars:t?void 0:Z,themeClass:k==null?void 0:k.themeClass,overflowRef:xe,counterRef:Me,updateCounter:()=>{},onResize:Ce,onUpdateOverflow:Le,onUpdateCount:Ke,renderCounter:De,getCounter:Oe,onRender:k==null?void 0:k.onRender,showOption:oe,deriveResponsiveState:Ce}},render(){const{mergedClsPrefix:e,mode:r,themeClass:t,onRender:l}=this;l==null||l();const a=()=>this.tmNodes.map(i=>ge(i,this.$props)),s=r==="horizontal"&&this.responsive,u=()=>v("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${r}`,s&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},s?v(Ro,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:a,counter:this.renderCounter}):a());return s?v(ro,{onResize:this.onResize},{default:u}):u()}}),Lo={class:"flex"},Bo={__name:"RoleSelect",setup(e,{expose:r}){var w,m;const t=Se(),l=Ae(),a=$(t.roles||[]),c=$(((w=t.currentRole)==null?void 0:w.code)??((m=a.value[0])==null?void 0:m.code)??""),[s,u]=io();function i(I){var y;(y=s.value)==null||y.open({...I})}async function x(){var I;try{u.value=!0;const{data:y}=await ae.switchCurrentRole(c.value);await l.switchCurrentRole(y),u.value=!1,$message.success("切换成功"),(I=s.value)==null||I.handleOk()}catch(y){return console.error(y),u.value=!1,!1}}async function R(){var I;await ae.logout(),l.logout(),(I=s.value)==null||I.close(),$message.success("已退出登录")}return r({open:i}),(I,y)=>{const P=Ao,N=so,H=zo,j=uo;return E(),X(z(co),{ref_key:"modalRef",ref:s,title:"请选择角色",width:"360px",class:"p-12"},{footer:T(()=>{var A;return[B("div",Lo,[F(j,{class:"flex-1",size:"large",onClick:y[1]||(y[1]=D=>R())},{default:T(()=>[re(" 退出登录 ")]),_:1}),F(j,{loading:z(u),class:"ml-20 flex-1",type:"primary",size:"large",disabled:((A=z(t).currentRole)==null?void 0:A.code)===z(c),onClick:x},{default:T(()=>[re(" 确认 ")]),_:1},8,["loading","disabled"])])]}),default:T(()=>[F(H,{value:z(c),"onUpdate:value":y[0]||(y[0]=A=>lo(c)?c.value=A:null),class:"cus-scroll-y max-h-420 w-full py-16"},{default:T(()=>[F(N,{vertical:"",size:24,class:"mx-12"},{default:T(()=>[(E(!0),q(de,null,ao(z(a),A=>(E(),X(P,{key:A.id,class:Pe(["h-36 w-full text-center text-16 leading-36",{"bg-primary! color-white!":A.code===z(c)}]),value:A.code},{default:T(()=>[re(Y(A.name),1)]),_:2},1032,["class","value"]))),128))]),_:1})]),_:1},8,["value"])]),_:1},512)}}},jo={class:"flex cursor-pointer items-center"},Vo={key:0,class:"ml-12 flex-col flex-shrink-0 items-center"},Do={class:"text-14"},Uo={class:"text-12 opacity-50"},rt={__name:"UserAvatar",setup(e){const r=Ne(),t=Se(),l=Ae(),a=ke(),c=vo([{label:"个人资料",key:"profile",icon:()=>v("i",{class:"i-material-symbols:person-outline text-14"}),show:b(()=>{var i;return(i=a.accessRoutes)==null?void 0:i.some(x=>x.path==="/profile")})},{label:"切换角色",key:"toggleRole",icon:()=>v("i",{class:"i-basil:exchange-solid text-14"}),show:b(()=>t.roles.length>1)},{label:"退出登录",key:"logout",icon:()=>v("i",{class:"i-mdi:exit-to-app text-14"})}]),s=$(null);function u(i){var x;switch(i){case"profile":r.push("/profile");break;case"toggleRole":(x=s.value)==null||x.open({onOk(){location.reload()}});break;case"logout":$dialog.confirm({title:"提示",type:"info",content:"确认退出？",async confirm(){try{await ae.logout()}catch(R){console.error(R)}l.logout(),$message.success("已退出登录")}});break}}return(i,x)=>{const R=wo,w=He;return E(),q(de,null,[F(w,{options:z(c),onSelect:u},{default:T(()=>{var m;return[B("div",jo,[F(R,{round:"",size:36,src:z(t).avatar},null,8,["src"]),z(t).userInfo?(E(),q("div",Vo,[B("span",Do,Y(z(t).nickName??z(t).username),1),B("span",Uo,"["+Y((m=z(t).currentRole)==null?void 0:m.name)+"]",1)])):mo("",!0)])]}),_:1},8,["options"]),F(z(Bo),{ref_key:"roleSelectRef",ref:s},null,512)],64)}}},it={__name:"MenuCollapse",setup(e){const r=ve();return(t,l)=>(E(),q("div",{class:"f-c-c cursor-pointer rounded-4 p-6 text-22 transition-all-300 auto-bg-hover",onClick:l[0]||(l[0]=(...a)=>z(r).switchCollapsed&&z(r).switchCollapsed(...a))},[B("i",{class:Pe(z(r).collapsed?"i-line-md-menu-unfold-left":"i-line-md-menu-fold-left")},null,2)]))}},Go="/test-admin/assets/isme-D6AR05SU.png",qo={},Wo={class:"h-40 w-40 rounded-4 bg-primary p-1/100"},Zo=B("img",{src:Go,alt:"Logo"},null,-1),Jo=[Zo];function Qo(e,r){return E(),q("div",Wo,Jo)}const Xo=Io(qo,[["render",Qo]]),lt={__name:"SideLogo",setup(e){const r="Panda",t=ve();return(l,a)=>{const c=Xo,s=ho("router-link");return E(),X(s,{class:"h-60 f-c-c",to:"/"},{default:T(()=>[F(c),po(B("h2",{class:"ml-10 max-w-140 flex-shrink-0 text-16 color-primary font-bold"},Y(z(r)),513),[[fo,!z(t).collapsed]])]),_:1})}}},at={__name:"SideMenu",setup(e){const r=Ne(),t=go(),l=ve(),a=ke(),c=b(()=>{var i;return((i=t.meta)==null?void 0:i.parentKey)||t.name}),s=$(null);xo(t,async()=>{var i;await bo(),(i=s.value)==null||i.showOption()});function u(i,x){Co(x.originPath)?$dialog.confirm({type:"info",title:"请选择打开方式",positiveText:"外链打开",negativeText:"在本站内嵌打开",confirm(){window.open(x.originPath)},cancel:()=>{r.push(x.path)}}):r.push(x.path)}return(i,x)=>{const R=Ko;return E(),X(R,{ref_key:"menu",ref:s,class:"side-menu",accordion:"",indent:18,"collapsed-icon-size":22,"collapsed-width":64,collapsed:z(l).collapsed,options:z(a).menus,value:z(c),"onUpdate:value":u},null,8,["collapsed","options","value"])}}};export{lt as _,at as a,it as b,rt as c};
