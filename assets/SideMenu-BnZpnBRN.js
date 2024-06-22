import{e as F,j as v,aB as We,k as ee,q as L,h as b,p as G,as as j,G as de,ar as Ze,l as $,aN as le,aO as Je,aM as Qe,aP as ne,aQ as ue,a as C,c as g,b as S,d as f,av as U,aR as Xe,u as Ye,f as Re,aS as eo,P as ye,t as ze,ac as _e,ax as oo,an as M,i as to,aT as no,aC as ro,aU as Se,aV as Ae,aW as io,z as T,A as Q,B as E,J as V,I as K,D as re,C as _,aX as lo,F as X,H as ao,K as Ne,E as Y,aY as co,aZ as ae,a_ as so,ao as uo,v as Pe,x as ke,aI as vo,aK as mo,L as ve,a$ as ho,al as po,aE as fo,w as go,y as xo,ap as bo,b0 as Co}from"./index-DNQY-kEr.js";import{r as yo,s as zo,_ as He,a as _o}from"./Dropdown-CRpryC9n.js";import{_ as wo}from"./Avatar-DKJYQ91V.js";import{c as ie,V as Io}from"./create-DkGA0g8u.js";const Ro=F({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),So=F({name:"RadioButton",props:yo,setup:zo,render(){const{mergedClsPrefix:e}=this;return v("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},v("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),v("div",{class:`${e}-radio-button__state-border`}),We(this.$slots.default,r=>!r&&!this.label?null:v("div",{ref:"labelRef",class:`${e}-radio__label`},r||this.label)))}}),Ao=ee("n-layout-sider"),q=ee("n-menu"),me=ee("n-submenu"),he=ee("n-menu-item-group"),J=8;function pe(e){const r=L(q),{props:t,mergedCollapsedRef:l}=r,a=L(me,null),c=L(he,null),d=b(()=>t.mode==="horizontal"),u=b(()=>d.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),i=b(()=>{var m;return Math.max((m=t.collapsedIconSize)!==null&&m!==void 0?m:t.iconSize,t.iconSize)}),x=b(()=>{var m;return!d.value&&e.root&&l.value&&(m=t.collapsedIconSize)!==null&&m!==void 0?m:t.iconSize}),R=b(()=>{if(d.value)return;const{collapsedWidth:m,indent:I,rootIndent:z}=t,{root:N,isGroup:P}=e,H=z===void 0?I:z;return N?l.value?m/2-i.value/2:H:c&&typeof c.paddingLeftRef.value=="number"?I/2+c.paddingLeftRef.value:a&&typeof a.paddingLeftRef.value=="number"?(P?I/2:I)+a.paddingLeftRef.value:0}),w=b(()=>{const{collapsedWidth:m,indent:I,rootIndent:z}=t,{value:N}=i,{root:P}=e;return d.value||!P||!l.value?J:(z===void 0?I:z)+N+J-(m+N)/2});return{dropdownPlacement:u,activeIconSize:x,maxIconSize:i,paddingLeft:R,iconMarginRight:w,NMenu:r,NSubmenu:a}}const fe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},$e=Object.assign(Object.assign({},fe),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),No=F({name:"MenuOptionGroup",props:$e,setup(e){G(me,null);const r=pe(e);G(he,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:t,props:l}=L(q);return function(){const{value:a}=t,c=r.paddingLeft.value,{nodeProps:d}=l,u=d==null?void 0:d(e.tmNode.rawNode);return v("div",{class:`${a}-menu-item-group`,role:"group"},v("div",Object.assign({},u,{class:[`${a}-menu-item-group-title`,u==null?void 0:u.class],style:[(u==null?void 0:u.style)||"",c!==void 0?`padding-left: ${c}px;`:""]}),j(e.title),e.extra?v(de,null," ",j(e.extra)):null),v("div",null,e.tmNodes.map(i=>ge(i,l))))}}}),Ee=F({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:r}=L(q);return{menuProps:r,style:b(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:b(()=>{const{maxIconSize:t,activeIconSize:l,iconMarginRight:a}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${l}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:t,renderLabel:l,renderExtra:a,expandIcon:c}}=this,d=t?t(r.rawNode):j(this.icon);return v("div",{onClick:u=>{var i;(i=this.onClick)===null||i===void 0||i.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:l?l(r.rawNode):j(this.title),this.extra||a?v("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(r.rawNode):j(this.extra)):null),this.showArrow?v(Ze,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>c?c(r.rawNode):v(Ro,null)}):null)}}),Te=Object.assign(Object.assign({},fe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),ce=F({name:"Submenu",props:Te,setup(e){const r=pe(e),{NMenu:t,NSubmenu:l}=r,{props:a,mergedCollapsedRef:c,mergedThemeRef:d}=t,u=b(()=>{const{disabled:m}=e;return l!=null&&l.mergedDisabledRef.value||a.disabled?!0:m}),i=$(!1);G(me,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:u}),G(he,null);function x(){const{onClick:m}=e;m&&m()}function R(){u.value||(c.value||t.toggleExpand(e.internalKey),x())}function w(m){i.value=m}return{menuProps:a,mergedTheme:d,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:i,paddingLeft:r.paddingLeft,mergedDisabled:u,mergedValue:t.mergedValueRef,childActive:le(()=>{var m;return(m=e.virtualChildActive)!==null&&m!==void 0?m:t.activePathRef.value.includes(e.internalKey)}),collapsed:b(()=>a.mode==="horizontal"?!1:c.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!u.value&&(a.mode==="horizontal"||c.value)),handlePopoverShowChange:w,handleClick:R}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:t,renderLabel:l}}=this,a=()=>{const{isHorizontal:d,paddingLeft:u,collapsed:i,mergedDisabled:x,maxIconSize:R,activeIconSize:w,title:m,childActive:I,icon:z,handleClick:N,menuProps:{nodeProps:P},dropdownShow:H,iconMarginRight:B,tmNode:A,mergedClsPrefix:D,isEllipsisPlaceholder:oe,extra:W}=this,k=P==null?void 0:P(A.rawNode);return v("div",Object.assign({},k,{class:[`${D}-menu-item`,k==null?void 0:k.class],role:"menuitem"}),v(Ee,{tmNode:A,paddingLeft:u,collapsed:i,disabled:x,iconMarginRight:B,maxIconSize:R,activeIconSize:w,title:m,extra:W,showArrow:!d,childActive:I,clsPrefix:D,icon:z,hover:H,onClick:N,isEllipsisPlaceholder:oe}))},c=()=>v(Je,null,{default:()=>{const{tmNodes:d,collapsed:u}=this;return u?null:v("div",{class:`${r}-submenu-children`,role:"menu"},d.map(i=>ge(i,this.menuProps)))}});return this.root?v(He,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:l}),{default:()=>v("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},a(),this.isHorizontal?null:c())}):v("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},a(),c())}}),Fe=Object.assign(Object.assign({},fe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Po=F({name:"MenuOption",props:Fe,setup(e){const r=pe(e),{NSubmenu:t,NMenu:l}=r,{props:a,mergedClsPrefixRef:c,mergedCollapsedRef:d}=l,u=t?t.mergedDisabledRef:{value:!1},i=b(()=>u.value||e.disabled);function x(w){const{onClick:m}=e;m&&m(w)}function R(w){i.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),x(w))}return{mergedClsPrefix:c,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:a,dropdownEnabled:le(()=>e.root&&d.value&&a.mode!=="horizontal"&&!i.value),selected:le(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:i,handleClick:R}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:t,menuProps:{renderLabel:l,nodeProps:a}}=this,c=a==null?void 0:a(t.rawNode);return v("div",Object.assign({},c,{role:"menuitem",class:[`${e}-menu-item`,c==null?void 0:c.class]}),v(Qe,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(t.rawNode):j(this.title),trigger:()=>v(Ee,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),ko=F({name:"MenuDivider",setup(){const e=L(q),{mergedClsPrefixRef:r,isHorizontalRef:t}=e;return()=>t.value?null:v("div",{class:`${r.value}-menu-divider`})}}),Ho=ue($e),$o=ue(Fe),Eo=ue(Te);function se(e){return e.type==="divider"||e.type==="render"}function To(e){return e.type==="divider"}function ge(e,r){const{rawNode:t}=e,{show:l}=t;if(l===!1)return null;if(se(t))return To(t)?v(ko,Object.assign({key:e.key},t.props)):null;const{labelField:a}=r,{key:c,level:d,isGroup:u}=e,i=Object.assign(Object.assign({},t),{title:t.title||t[a],extra:t.titleExtra||t.extra,key:c,internalKey:c,level:d,root:d===0,isGroup:u});return e.children?e.isGroup?v(No,ne(i,Ho,{tmNode:e,tmNodes:e.children,key:c})):v(ce,ne(i,Eo,{key:c,rawNodes:t[r.childrenField],tmNodes:e.children,tmNode:e})):v(Po,ne(i,$o,{key:c,tmNode:e}))}const we=[C("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
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
 `)])],Fo=C([g("menu",`
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
 `)]),U("disabled",[U("selected, child-active",[C("&:focus-within",Ie)]),S("selected",[O(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),S("child-active",[O(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),O("border-bottom: 2px solid var(--n-border-color-horizontal);",Ie)]),g("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),U("responsive",[g("menu-item-content-header",`
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
 `)]),U("disabled",[U("selected, child-active",[C("&:focus-within",we)]),S("selected",[O(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),S("child-active",[O(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),S("selected",[O(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),O(null,we)]),f("icon",`
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
 `)]);function O(e,r){return[S("hover",e,r),C("&:hover",e,r)]}const Mo=Object.assign(Object.assign({},Re.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Oo=F({name:"Menu",props:Mo,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t}=Ye(e),l=Re("Menu","-menu",Fo,eo,e,r),a=L(Ao,null),c=b(()=>{var s;const{collapsed:p}=e;if(p!==void 0)return p;if(a){const{collapseModeRef:o,collapsedRef:h}=a;if(o.value==="width")return(s=h.value)!==null&&s!==void 0?s:!1}return!1}),d=b(()=>{const{keyField:s,childrenField:p,disabledField:o}=e;return ie(e.items||e.options,{getIgnored(h){return se(h)},getChildren(h){return h[p]},getDisabled(h){return h[o]},getKey(h){var y;return(y=h[s])!==null&&y!==void 0?y:h.name}})}),u=b(()=>new Set(d.value.treeNodes.map(s=>s.key))),{watchProps:i}=e,x=$(null);i!=null&&i.includes("defaultValue")?ye(()=>{x.value=e.defaultValue}):x.value=e.defaultValue;const R=ze(e,"value"),w=_e(R,x),m=$([]),I=()=>{m.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(w.value,{includeSelf:!1}).keyPath};i!=null&&i.includes("defaultExpandedKeys")?ye(I):I();const z=oo(e,["expandedNames","expandedKeys"]),N=_e(z,m),P=b(()=>d.value.treeNodes),H=b(()=>d.value.getPath(w.value).keyPath);G(q,{props:e,mergedCollapsedRef:c,mergedThemeRef:l,mergedValueRef:w,mergedExpandedKeysRef:N,activePathRef:H,mergedClsPrefixRef:r,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:ze(e,"inverted"),doSelect:B,toggleExpand:D});function B(s,p){const{"onUpdate:value":o,onUpdateValue:h,onSelect:y}=e;h&&M(h,s,p),o&&M(o,s,p),y&&M(y,s,p),x.value=s}function A(s){const{"onUpdate:expandedKeys":p,onUpdateExpandedKeys:o,onExpandedNamesChange:h,onOpenNamesChange:y}=e;p&&M(p,s),o&&M(o,s),h&&M(h,s),y&&M(y,s),m.value=s}function D(s){const p=Array.from(N.value),o=p.findIndex(h=>h===s);if(~o)p.splice(o,1);else{if(e.accordion&&u.value.has(s)){const h=p.findIndex(y=>u.value.has(y));h>-1&&p.splice(h,1)}p.push(s)}A(p)}const oe=s=>{const p=d.value.getPath(s??w.value,{includeSelf:!1}).keyPath;if(!p.length)return;const o=Array.from(N.value),h=new Set([...o,...p]);e.accordion&&u.value.forEach(y=>{h.has(y)&&!p.includes(y)&&h.delete(y)}),A(Array.from(h))},W=b(()=>{const{inverted:s}=e,{common:{cubicBezierEaseInOut:p},self:o}=l.value,{borderRadius:h,borderColorHorizontal:y,fontSize:Ue,itemHeight:Ge,dividerColor:qe}=o,n={"--n-divider-color":qe,"--n-bezier":p,"--n-font-size":Ue,"--n-border-color-horizontal":y,"--n-border-radius":h,"--n-item-height":Ge};return s?(n["--n-group-text-color"]=o.groupTextColorInverted,n["--n-color"]=o.colorInverted,n["--n-item-text-color"]=o.itemTextColorInverted,n["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,n["--n-item-text-color-active"]=o.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=o.itemIconColorInverted,n["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=o.arrowColorInverted,n["--n-arrow-color-hover"]=o.arrowColorHoverInverted,n["--n-arrow-color-active"]=o.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=o.itemColorHoverInverted,n["--n-item-color-active"]=o.itemColorActiveInverted,n["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=o.groupTextColor,n["--n-color"]=o.color,n["--n-item-text-color"]=o.itemTextColor,n["--n-item-text-color-hover"]=o.itemTextColorHover,n["--n-item-text-color-active"]=o.itemTextColorActive,n["--n-item-text-color-child-active"]=o.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,n["--n-item-icon-color"]=o.itemIconColor,n["--n-item-icon-color-hover"]=o.itemIconColorHover,n["--n-item-icon-color-active"]=o.itemIconColorActive,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=o.arrowColor,n["--n-arrow-color-hover"]=o.arrowColorHover,n["--n-arrow-color-active"]=o.arrowColorActive,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,n["--n-arrow-color-child-active"]=o.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,n["--n-item-color-hover"]=o.itemColorHover,n["--n-item-color-active"]=o.itemColorActive,n["--n-item-color-active-hover"]=o.itemColorActiveHover,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),n}),k=t?to("menu",b(()=>e.inverted?"a":"b"),W,e):void 0,te=no(),xe=$(null),Me=$(null);let be=!0;const Ce=()=>{var s;be?be=!1:(s=xe.value)===null||s===void 0||s.sync({showAllItemsBeforeCalculate:!0})};function Oe(){return document.getElementById(te)}const Z=$(-1);function Ke(s){Z.value=e.options.length-s}function Le(s){s||(Z.value=-1)}const Be=b(()=>{const s=Z.value;return{children:s===-1?[]:e.options.slice(s)}}),je=b(()=>{const{childrenField:s,disabledField:p,keyField:o}=e;return ie([Be.value],{getIgnored(h){return se(h)},getChildren(h){return h[s]},getDisabled(h){return h[p]},getKey(h){var y;return(y=h[o])!==null&&y!==void 0?y:h.name}})}),Ve=b(()=>ie([{}]).treeNodes[0]);function De(){var s;if(Z.value===-1)return v(ce,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Ve.value,domId:te,isEllipsisPlaceholder:!0});const p=je.value.treeNodes[0],o=H.value,h=!!(!((s=p.children)===null||s===void 0)&&s.some(y=>o.includes(y.key)));return v(ce,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:h,tmNode:p,domId:te,rawNodes:p.rawNode.children||[],tmNodes:p.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:r,controlledExpandedKeys:z,uncontrolledExpanededKeys:m,mergedExpandedKeys:N,uncontrolledValue:x,mergedValue:w,activePath:H,tmNodes:P,mergedTheme:l,mergedCollapsed:c,cssVars:t?void 0:W,themeClass:k==null?void 0:k.themeClass,overflowRef:xe,counterRef:Me,updateCounter:()=>{},onResize:Ce,onUpdateOverflow:Le,onUpdateCount:Ke,renderCounter:De,getCounter:Oe,onRender:k==null?void 0:k.onRender,showOption:oe,deriveResponsiveState:Ce}},render(){const{mergedClsPrefix:e,mode:r,themeClass:t,onRender:l}=this;l==null||l();const a=()=>this.tmNodes.map(i=>ge(i,this.$props)),d=r==="horizontal"&&this.responsive,u=()=>v("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${r}`,d&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},d?v(Io,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:a,counter:this.renderCounter}):a());return d?v(ro,{onResize:this.onResize},{default:u}):u()}}),Ko={class:"flex"},Lo={__name:"RoleSelect",setup(e,{expose:r}){var w,m;const t=Se(),l=Ae(),a=$(t.roles||[]),c=$(((w=t.currentRole)==null?void 0:w.code)??((m=a.value[0])==null?void 0:m.code)??""),[d,u]=io();function i(I){var z;(z=d.value)==null||z.open({...I})}async function x(){var I;try{u.value=!0;const{data:z}=await ae.switchCurrentRole(c.value);await l.switchCurrentRole(z),u.value=!1,$message.success("切换成功"),(I=d.value)==null||I.handleOk()}catch(z){return console.error(z),u.value=!1,!1}}async function R(){var I;await ae.logout(),l.logout(),(I=d.value)==null||I.close(),$message.success("已退出登录")}return r({open:i}),(I,z)=>{const N=So,P=so,H=_o,B=uo;return T(),Q(_(co),{ref_key:"modalRef",ref:d,title:"请选择角色",width:"360px",class:"p-12"},{footer:E(()=>{var A;return[V("div",Ko,[K(B,{class:"flex-1",size:"large",onClick:z[1]||(z[1]=D=>R())},{default:E(()=>[re(" 退出登录 ")]),_:1}),K(B,{loading:_(u),class:"ml-20 flex-1",type:"primary",size:"large",disabled:((A=_(t).currentRole)==null?void 0:A.code)===_(c),onClick:x},{default:E(()=>[re(" 确认 ")]),_:1},8,["loading","disabled"])])]}),default:E(()=>[K(H,{value:_(c),"onUpdate:value":z[0]||(z[0]=A=>lo(c)?c.value=A:null),class:"cus-scroll-y max-h-420 w-full py-16"},{default:E(()=>[K(P,{vertical:"",size:24,class:"mx-12"},{default:E(()=>[(T(!0),X(de,null,ao(_(a),A=>(T(),Q(N,{key:A.id,class:Ne(["h-36 w-full text-center text-16 leading-36",{"bg-primary! color-white!":A.code===_(c)}]),value:A.code},{default:E(()=>[re(Y(A.name),1)]),_:2},1032,["class","value"]))),128))]),_:1})]),_:1},8,["value"])]),_:1},512)}}},Bo={class:"flex cursor-pointer items-center"},jo={key:0,class:"ml-12 flex-col flex-shrink-0 items-center"},Vo={class:"text-14"},Do={class:"text-12 opacity-50"},Zo={__name:"UserAvatar",setup(e){const r=Pe(),t=Se(),l=Ae(),a=ke(),c=vo([{label:"个人资料",key:"profile",icon:()=>v("i",{class:"i-material-symbols:person-outline text-14"}),show:b(()=>{var i;return(i=a.accessRoutes)==null?void 0:i.some(x=>x.path==="/profile")})},{label:"切换角色",key:"toggleRole",icon:()=>v("i",{class:"i-basil:exchange-solid text-14"}),show:b(()=>t.roles.length>1)},{label:"退出登录",key:"logout",icon:()=>v("i",{class:"i-mdi:exit-to-app text-14"})}]),d=$(null);function u(i){var x;switch(i){case"profile":r.push("/profile");break;case"toggleRole":(x=d.value)==null||x.open({onOk(){location.reload()}});break;case"logout":$dialog.confirm({title:"提示",type:"info",content:"确认退出？",async confirm(){try{await ae.logout()}catch(R){console.error(R)}l.logout(),$message.success("已退出登录")}});break}}return(i,x)=>{const R=wo,w=He;return T(),X(de,null,[K(w,{options:_(c),onSelect:u},{default:E(()=>{var m;return[V("div",Bo,[K(R,{round:"",size:36,src:_(t).avatar},null,8,["src"]),_(t).userInfo?(T(),X("div",jo,[V("span",Vo,Y(_(t).nickName??_(t).username),1),V("span",Do,"["+Y((m=_(t).currentRole)==null?void 0:m.name)+"]",1)])):mo("",!0)])]}),_:1},8,["options"]),K(_(Lo),{ref_key:"roleSelectRef",ref:d},null,512)],64)}}},Jo={__name:"MenuCollapse",setup(e){const r=ve();return(t,l)=>(T(),X("div",{class:"f-c-c cursor-pointer rounded-4 p-6 text-22 transition-all-300 auto-bg-hover",onClick:l[0]||(l[0]=(...a)=>_(r).switchCollapsed&&_(r).switchCollapsed(...a))},[V("i",{class:Ne(_(r).collapsed?"i-line-md-menu-unfold-left":"i-line-md-menu-fold-left")},null,2)]))}},Qo={__name:"SideLogo",setup(e){const r="思钱想厚",t=ve();return(l,a)=>{const c=ho("router-link");return T(),Q(c,{class:"h-60 f-c-c",to:"/"},{default:E(()=>[po(V("h2",{class:"ml-10 max-w-140 flex-shrink-0 text-16 color-primary font-bold"},Y(_(r)),513),[[fo,!_(t).collapsed]])]),_:1})}}},Xo={__name:"SideMenu",setup(e){const r=Pe(),t=go(),l=ve(),a=ke(),c=b(()=>{var i;return((i=t.meta)==null?void 0:i.parentKey)||t.name}),d=$(null);xo(t,async()=>{var i;await bo(),(i=d.value)==null||i.showOption()});function u(i,x){Co(x.originPath)?$dialog.confirm({type:"info",title:"请选择打开方式",positiveText:"外链打开",negativeText:"在本站内嵌打开",confirm(){window.open(x.originPath)},cancel:()=>{r.push(x.path)}}):r.push(x.path)}return(i,x)=>{const R=Oo;return T(),Q(R,{ref_key:"menu",ref:d,class:"side-menu",accordion:"",indent:18,"collapsed-icon-size":22,"collapsed-width":64,collapsed:_(l).collapsed,options:_(a).menus,value:_(c),"onUpdate:value":u},null,8,["collapsed","options","value"])}}};export{Qo as _,Xo as a,Jo as b,Zo as c};
