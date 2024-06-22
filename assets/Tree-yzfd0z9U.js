import{e as de,j as g,k as fn,q as me,bv as Hn,bB as qn,ar as Vn,l as B,as as Xe,h as $,n as Gn,aN as M,o as Wn,bO as Xn,bA as hn,aO as Yn,c as P,a as Q,b as F,aR as an,d as be,av as ke,bw as Qn,u as Jn,bL as Zn,f as gn,bD as et,P as Ce,t as C,ac as Fe,y as Oe,ap as Be,aD as Ke,an as z,p as nt,aA as Ye,i as tt,s as rn,bP as dn}from"./index-DNQY-kEr.js";import{_ as lt}from"./Checkbox-Bb9_ewGo.js";import{h as Ie,c as ot,f as sn,a as it}from"./create-DkGA0g8u.js";import{_ as cn,V as at}from"./Select-DE0V0fNc.js";function vn(e){return typeof e=="string"?`s-${e}`:`n-${e}`}const rt=de({name:"Switcher",render(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},g("path",{d:"M12 8l10 8l-10 8z"}))}}),yn=fn("n-tree-select"),De=fn("n-tree"),dt=de({name:"NTreeSwitcher",props:{clsPrefix:{type:String,required:!0},indent:{type:Number,required:!0},expanded:Boolean,selected:Boolean,hide:Boolean,loading:Boolean,onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{renderSwitcherIconRef:l}=me(De,null);return()=>{const{clsPrefix:c,expanded:u,hide:s,indent:r,onClick:b}=e;return g("span",{"data-switcher":!0,class:[`${c}-tree-node-switcher`,u&&`${c}-tree-node-switcher--expanded`,s&&`${c}-tree-node-switcher--hide`],style:{width:`${r}px`},onClick:b},g("div",{class:`${c}-tree-node-switcher__icon`},g(Hn,null,{default:()=>{if(e.loading)return g(qn,{clsPrefix:c,key:"loading",radius:85,strokeWidth:20});const{value:k}=l;return k?k({expanded:e.expanded,selected:e.selected,option:e.tmNode.rawNode}):g(Vn,{clsPrefix:c,key:"switcher"},{default:()=>g(rt,null)})}})))}}}),st=de({name:"NTreeNodeCheckbox",props:{clsPrefix:{type:String,required:!0},indent:{type:Number,required:!0},right:Boolean,focusable:Boolean,disabled:Boolean,checked:Boolean,indeterminate:Boolean,onCheck:Function},setup(e){const l=me(De);function c(s){const{onCheck:r}=e;r&&r(s)}function u(s){c(s)}return{handleUpdateValue:u,mergedTheme:l.mergedThemeRef}},render(){const{clsPrefix:e,mergedTheme:l,checked:c,indeterminate:u,disabled:s,focusable:r,indent:b,handleUpdateValue:k}=this;return g("span",{class:[`${e}-tree-node-checkbox`,this.right&&`${e}-tree-node-checkbox--right`],style:{width:`${b}px`},"data-checkbox":!0},g(lt,{focusable:r,disabled:s,theme:l.peers.Checkbox,themeOverrides:l.peerOverrides.Checkbox,checked:c,indeterminate:u,onUpdateChecked:k}))}}),ct=de({name:"TreeNodeContent",props:{clsPrefix:{type:String,required:!0},disabled:Boolean,checked:Boolean,selected:Boolean,onClick:Function,onDragstart:Function,tmNode:{type:Object,required:!0},nodeProps:Object},setup(e){const{renderLabelRef:l,renderPrefixRef:c,renderSuffixRef:u,labelFieldRef:s}=me(De),r=B(null);function b(y){const{onClick:m}=e;m&&m(y)}function k(y){b(y)}return{selfRef:r,renderLabel:l,renderPrefix:c,renderSuffix:u,labelField:s,handleClick:k}},render(){const{clsPrefix:e,labelField:l,nodeProps:c,checked:u=!1,selected:s=!1,renderLabel:r,renderPrefix:b,renderSuffix:k,handleClick:y,onDragstart:m,tmNode:{rawNode:v,rawNode:{prefix:E,suffix:x,[l]:T}}}=this;return g("span",Object.assign({},c,{ref:"selfRef",class:[`${e}-tree-node-content`,c==null?void 0:c.class],onClick:y,draggable:m===void 0?void 0:!0,onDragstart:m}),b||E?g("div",{class:`${e}-tree-node-content__prefix`},b?b({option:v,selected:s,checked:u}):Xe(E)):null,g("div",{class:`${e}-tree-node-content__text`},r?r({option:v,selected:s,checked:u}):Xe(T)),k||x?g("div",{class:`${e}-tree-node-content__suffix`},k?k({option:v,selected:s,checked:u}):Xe(x)):null)}});function un({position:e,offsetLevel:l,indent:c,el:u}){const s={position:"absolute",boxSizing:"border-box",right:0};if(e==="inside")s.left=0,s.top=0,s.bottom=0,s.borderRadius="inherit",s.boxShadow="inset 0 0 0 2px var(--n-drop-mark-color)";else{const r=e==="before"?"top":"bottom";s[r]=0,s.left=`${u.offsetLeft+6-l*c}px`,s.height="2px",s.backgroundColor="var(--n-drop-mark-color)",s.transformOrigin=r,s.borderRadius="1px",s.transform=e==="before"?"translateY(-4px)":"translateY(4px)"}return g("div",{style:s})}function ut({dropPosition:e,node:l}){return l.isLeaf===!1||l.children?!0:e!=="inside"}function ft(e){return $(()=>e.leafOnly?"child":e.checkStrategy)}function oe(e,l){return!!e.rawNode[l]}function bn(e,l,c,u){e==null||e.forEach(s=>{c(s),bn(s[l],l,c,u),u(s)})}function ht(e,l,c,u,s){const r=new Set,b=new Set,k=[];return bn(e,u,y=>{if(k.push(y),s(l,y)){b.add(y[c]);for(let m=k.length-2;m>=0;--m)if(!r.has(k[m][c]))r.add(k[m][c]);else return}},()=>{k.pop()}),{expandedKeys:Array.from(r),highlightKeySet:b}}if(Gn&&Image){const e=new Image;e.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}function gt(e,l,c,u,s){const r=new Set,b=new Set,k=new Set,y=[],m=[],v=[];function E(T){T.forEach(p=>{if(v.push(p),l(c,p)){r.add(p[u]),k.add(p[u]);for(let h=v.length-2;h>=0;--h){const f=v[h][u];if(!b.has(f))b.add(f),r.has(f)&&r.delete(f);else break}}const w=p[s];w&&E(w),v.pop()})}E(e);function x(T,p){T.forEach(w=>{const h=w[u],f=r.has(h),K=b.has(h);if(!f&&!K)return;const D=w[s];if(D)if(f)p.push(w);else{y.push(h);const _=Object.assign(Object.assign({},w),{[s]:[]});p.push(_),x(D,_[s])}else p.push(w)})}return x(e,m),{filteredTree:m,highlightKeySet:k,expandedKeys:y}}const kn=de({name:"TreeNode",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const l=me(De),{droppingNodeParentRef:c,droppingMouseNodeRef:u,draggingNodeRef:s,droppingPositionRef:r,droppingOffsetLevelRef:b,nodePropsRef:k,indentRef:y,blockLineRef:m,checkboxPlacementRef:v,checkOnClickRef:E,disabledFieldRef:x,showLineRef:T,renderSwitcherIconRef:p,overrideDefaultNodeClickBehaviorRef:w}=l,h=M(()=>!!e.tmNode.rawNode.checkboxDisabled),f=M(()=>oe(e.tmNode,x.value)),K=M(()=>l.disabledRef.value||f.value),D=$(()=>{const{value:i}=k;if(i)return i({option:e.tmNode.rawNode})}),_=B(null),J={value:null};Wn(()=>{J.value=_.value.$el});function Z(){const i=()=>{const{tmNode:N}=e;if(!N.isLeaf&&!N.shallowLoaded){if(!l.loadingKeysRef.value.has(N.key))l.loadingKeysRef.value.add(N.key);else return;const{onLoadRef:{value:L}}=l;L&&L(N.rawNode).then(O=>{O!==!1&&l.handleSwitcherClick(N)}).finally(()=>{l.loadingKeysRef.value.delete(N.key)})}else l.handleSwitcherClick(N)};p.value?setTimeout(i,0):i()}const se=M(()=>!f.value&&l.selectableRef.value&&(l.internalTreeSelect?l.mergedCheckStrategyRef.value!=="child"||l.multipleRef.value&&l.cascadeRef.value||e.tmNode.isLeaf:!0)),ie=M(()=>l.checkableRef.value&&(l.cascadeRef.value||l.mergedCheckStrategyRef.value!=="child"||e.tmNode.isLeaf)),xe=M(()=>l.displayedCheckedKeysRef.value.includes(e.tmNode.key)),ae=M(()=>{const{value:i}=ie;if(!i)return!1;const{value:N}=E,{tmNode:L}=e;return typeof N=="boolean"?!L.disabled&&N:N(e.tmNode.rawNode)});function we(i){const{value:N}=l.expandOnClickRef,{value:L}=se,{value:O}=ae;if(!L&&!N&&!O||Ie(i,"checkbox")||Ie(i,"switcher"))return;const{tmNode:U}=e;L&&l.handleSelect(U),N&&!U.isLeaf&&Z(),O&&ee(!xe.value)}function Ne(i){var N,L;if(!(Ie(i,"checkbox")||Ie(i,"switcher"))){if(!K.value){const O=w.value;let U=!1;if(O)switch(O({option:e.tmNode.rawNode})){case"toggleCheck":U=!0,ee(!xe.value);break;case"toggleSelect":U=!0,l.handleSelect(e.tmNode);break;case"toggleExpand":U=!0,Z(),U=!0;break;case"none":U=!0,U=!0;return}U||we(i)}(L=(N=D.value)===null||N===void 0?void 0:N.onClick)===null||L===void 0||L.call(N,i)}}function _e(i){m.value||Ne(i)}function V(i){m.value&&Ne(i)}function ee(i){l.handleCheck(e.tmNode,i)}function ne(i){l.handleDragStart({event:i,node:e.tmNode})}function $e(i){i.currentTarget===i.target&&l.handleDragEnter({event:i,node:e.tmNode})}function X(i){i.preventDefault(),l.handleDragOver({event:i,node:e.tmNode})}function te(i){l.handleDragEnd({event:i,node:e.tmNode})}function pe(i){i.currentTarget===i.target&&l.handleDragLeave({event:i,node:e.tmNode})}function Ue(i){i.preventDefault(),r.value!==null&&l.handleDrop({event:i,node:e.tmNode,dropPosition:r.value})}const Me=$(()=>{const{clsPrefix:i}=e,{value:N}=y;if(T.value){const L=[];let O=e.tmNode.parent;for(;O;)O.isLastChild?L.push(g("div",{class:`${i}-tree-node-indent`},g("div",{style:{width:`${N}px`}}))):L.push(g("div",{class:[`${i}-tree-node-indent`,`${i}-tree-node-indent--show-line`]},g("div",{style:{width:`${N}px`}}))),O=O.parent;return L.reverse()}else return Xn(e.tmNode.level,g("div",{class:`${e.clsPrefix}-tree-node-indent`},g("div",{style:{width:`${N}px`}})))});return{showDropMark:M(()=>{const{value:i}=s;if(!i)return;const{value:N}=r;if(!N)return;const{value:L}=u;if(!L)return;const{tmNode:O}=e;return O.key===L.key}),showDropMarkAsParent:M(()=>{const{value:i}=c;if(!i)return!1;const{tmNode:N}=e,{value:L}=r;return L==="before"||L==="after"?i.key===N.key:!1}),pending:M(()=>l.pendingNodeKeyRef.value===e.tmNode.key),loading:M(()=>l.loadingKeysRef.value.has(e.tmNode.key)),highlight:M(()=>{var i;return(i=l.highlightKeySetRef.value)===null||i===void 0?void 0:i.has(e.tmNode.key)}),checked:xe,indeterminate:M(()=>l.displayedIndeterminateKeysRef.value.includes(e.tmNode.key)),selected:M(()=>l.mergedSelectedKeysRef.value.includes(e.tmNode.key)),expanded:M(()=>l.mergedExpandedKeysRef.value.includes(e.tmNode.key)),disabled:K,checkable:ie,mergedCheckOnClick:ae,checkboxDisabled:h,selectable:se,expandOnClick:l.expandOnClickRef,internalScrollable:l.internalScrollableRef,draggable:l.draggableRef,blockLine:m,nodeProps:D,checkboxFocusable:l.internalCheckboxFocusableRef,droppingPosition:r,droppingOffsetLevel:b,indent:y,checkboxPlacement:v,showLine:T,contentInstRef:_,contentElRef:J,indentNodes:Me,handleCheck:ee,handleDrop:Ue,handleDragStart:ne,handleDragEnter:$e,handleDragOver:X,handleDragEnd:te,handleDragLeave:pe,handleLineClick:V,handleContentClick:_e,handleSwitcherClick:Z}},render(){const{tmNode:e,clsPrefix:l,checkable:c,expandOnClick:u,selectable:s,selected:r,checked:b,highlight:k,draggable:y,blockLine:m,indent:v,indentNodes:E,disabled:x,pending:T,internalScrollable:p,nodeProps:w,checkboxPlacement:h}=this,f=y&&!x?{onDragenter:this.handleDragEnter,onDragleave:this.handleDragLeave,onDragend:this.handleDragEnd,onDrop:this.handleDrop,onDragover:this.handleDragOver}:void 0,K=p?vn(e.key):void 0,D=h==="right",_=c?g(st,{indent:v,right:D,focusable:this.checkboxFocusable,disabled:x||this.checkboxDisabled,clsPrefix:l,checked:this.checked,indeterminate:this.indeterminate,onCheck:this.handleCheck}):null;return g("div",Object.assign({class:`${l}-tree-node-wrapper`},f),g("div",Object.assign({},m?w:void 0,{class:[`${l}-tree-node`,{[`${l}-tree-node--selected`]:r,[`${l}-tree-node--checkable`]:c,[`${l}-tree-node--highlight`]:k,[`${l}-tree-node--pending`]:T,[`${l}-tree-node--disabled`]:x,[`${l}-tree-node--selectable`]:s,[`${l}-tree-node--clickable`]:s||u||this.mergedCheckOnClick},w==null?void 0:w.class],"data-key":K,draggable:y&&m,onClick:this.handleLineClick,onDragstart:y&&m&&!x?this.handleDragStart:void 0}),E,e.isLeaf&&this.showLine?g("div",{class:[`${l}-tree-node-indent`,`${l}-tree-node-indent--show-line`,e.isLeaf&&`${l}-tree-node-indent--is-leaf`,e.isLastChild&&`${l}-tree-node-indent--last-child`]},g("div",{style:{width:`${v}px`}})):g(dt,{clsPrefix:l,expanded:this.expanded,selected:r,loading:this.loading,hide:e.isLeaf,tmNode:this.tmNode,indent:v,onClick:this.handleSwitcherClick}),D?null:_,g(ct,{ref:"contentInstRef",clsPrefix:l,checked:b,selected:r,onClick:this.handleContentClick,nodeProps:m?void 0:w,onDragstart:y&&!m&&!x?this.handleDragStart:void 0,tmNode:e}),y?this.showDropMark?un({el:this.contentElRef.value,position:this.droppingPosition,offsetLevel:this.droppingOffsetLevel,indent:v}):this.showDropMarkAsParent?un({el:this.contentElRef.value,position:"inside",offsetLevel:this.droppingOffsetLevel,indent:v}):null:null,D?_:null))}});function vt({props:e,fNodesRef:l,mergedExpandedKeysRef:c,mergedSelectedKeysRef:u,mergedCheckedKeysRef:s,handleCheck:r,handleSelect:b,handleSwitcherClick:k}){const{value:y}=u,m=me(yn,null),v=m?m.pendingNodeKeyRef:B(y.length?y[y.length-1]:null);function E(x){var T;if(!e.keyboard)return{enterBehavior:null};const{value:p}=v;let w=null;if(p===null){if((x.key==="ArrowDown"||x.key==="ArrowUp")&&x.preventDefault(),["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(x.key)&&p===null){const{value:h}=l;let f=0;for(;f<h.length;){if(!h[f].disabled){v.value=h[f].key;break}f+=1}}}else{const{value:h}=l;let f=h.findIndex(K=>K.key===p);if(!~f)return{enterBehavior:null};if(x.key==="Enter"){const K=h[f];switch(w=((T=e.overrideDefaultNodeClickBehavior)===null||T===void 0?void 0:T.call(e,{option:K.rawNode}))||null,w){case"toggleCheck":r(K,!s.value.includes(K.key));break;case"toggleSelect":b(K);break;case"toggleExpand":k(K);break;case"none":break;case"default":default:w="default",b(K)}}else if(x.key==="ArrowDown")for(x.preventDefault(),f+=1;f<h.length;){if(!h[f].disabled){v.value=h[f].key;break}f+=1}else if(x.key==="ArrowUp")for(x.preventDefault(),f-=1;f>=0;){if(!h[f].disabled){v.value=h[f].key;break}f-=1}else if(x.key==="ArrowLeft"){const K=h[f];if(K.isLeaf||!c.value.includes(p)){const D=K.getParent();D&&(v.value=D.key)}else k(K)}else if(x.key==="ArrowRight"){const K=h[f];if(K.isLeaf)return{enterBehavior:null};if(!c.value.includes(p))k(K);else for(f+=1;f<h.length;){if(!h[f].disabled){v.value=h[f].key;break}f+=1}}}return{enterBehavior:w}}return{pendingNodeKeyRef:v,handleKeydown:E}}const yt=de({name:"TreeMotionWrapper",props:{clsPrefix:{type:String,required:!0},height:Number,nodes:{type:Array,required:!0},mode:{type:String,required:!0},onAfterEnter:{type:Function,required:!0}},render(){const{clsPrefix:e}=this;return g(Yn,{onAfterEnter:this.onAfterEnter,appear:!0,reverse:this.mode==="collapse"},{default:()=>g("div",{class:[`${e}-tree-motion-wrapper`,`${e}-tree-motion-wrapper--${this.mode}`],style:{height:hn(this.height)}},this.nodes.map(l=>g(kn,{clsPrefix:e,tmNode:l})))})}}),Qe=Qn(),bt=P("tree",`
 font-size: var(--n-font-size);
 outline: none;
`,[Q("ul, li",`
 margin: 0;
 padding: 0;
 list-style: none;
 `),Q(">",[P("tree-node",[Q("&:first-child","margin-top: 0;")])]),P("tree-motion-wrapper",[F("expand",[an({duration:"0.2s"})]),F("collapse",[an({duration:"0.2s",reverse:!0})])]),P("tree-node-wrapper",`
 box-sizing: border-box;
 padding: var(--n-node-wrapper-padding);
 `),P("tree-node",`
 transform: translate3d(0,0,0);
 position: relative;
 display: flex;
 border-radius: var(--n-node-border-radius);
 transition: background-color .3s var(--n-bezier);
 `,[F("highlight",[P("tree-node-content",[be("text","border-bottom-color: var(--n-node-text-color-disabled);")])]),F("disabled",[P("tree-node-content",`
 color: var(--n-node-text-color-disabled);
 cursor: not-allowed;
 `)]),ke("disabled",[F("clickable",[P("tree-node-content",`
 cursor: pointer;
 `)])])]),F("block-node",[P("tree-node-content",`
 flex: 1;
 min-width: 0;
 `)]),ke("block-line",[P("tree-node",[ke("disabled",[P("tree-node-content",[Q("&:hover","background: var(--n-node-color-hover);")]),F("selectable",[P("tree-node-content",[Q("&:active","background: var(--n-node-color-pressed);")])]),F("pending",[P("tree-node-content",`
 background: var(--n-node-color-hover);
 `)]),F("selected",[P("tree-node-content","background: var(--n-node-color-active);")])]),F("selected",[P("tree-node-content","background: var(--n-node-color-active);")])])]),F("block-line",[P("tree-node",[ke("disabled",[Q("&:hover","background: var(--n-node-color-hover);"),F("pending",`
 background: var(--n-node-color-hover);
 `),F("selectable",[ke("selected",[Q("&:active","background: var(--n-node-color-pressed);")])]),F("selected","background: var(--n-node-color-active);")]),F("selected","background: var(--n-node-color-active);"),F("disabled",`
 cursor: not-allowed;
 `)])]),P("tree-node-indent",`
 flex-grow: 0;
 flex-shrink: 0;
 `,[F("show-line","position: relative",[Q("&::before",`
 position: absolute;
 left: 50%;
 border-left: 1px solid var(--n-line-color);
 transition: border-color .3s var(--n-bezier);
 transform: translate(-50%);
 content: "";
 top: var(--n-line-offset-top);
 bottom: var(--n-line-offset-bottom);
 `),F("last-child",[Q("&::before",`
 bottom: 50%;
 `)]),F("is-leaf",[Q("&::after",`
 position: absolute;
 content: "";
 left: calc(50% + 0.5px);
 right: 0;
 bottom: 50%;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-line-color);
 `)])]),ke("show-line","height: 0;")]),P("tree-node-switcher",`
 cursor: pointer;
 display: inline-flex;
 flex-shrink: 0;
 height: var(--n-node-content-height);
 align-items: center;
 justify-content: center;
 transition: transform .15s var(--n-bezier);
 vertical-align: bottom;
 `,[be("icon",`
 position: relative;
 height: 14px;
 width: 14px;
 display: flex;
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 font-size: 14px;
 `,[P("icon",[Qe]),P("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[Qe]),P("base-icon",[Qe])]),F("hide","visibility: hidden;"),F("expanded","transform: rotate(90deg);")]),P("tree-node-checkbox",`
 display: inline-flex;
 height: var(--n-node-content-height);
 vertical-align: bottom;
 align-items: center;
 justify-content: center;
 `),P("tree-node-content",`
 user-select: none;
 position: relative;
 display: inline-flex;
 align-items: center;
 min-height: var(--n-node-content-height);
 box-sizing: border-box;
 line-height: var(--n-line-height);
 vertical-align: bottom;
 padding: 0 6px 0 4px;
 cursor: default;
 border-radius: var(--n-node-border-radius);
 color: var(--n-node-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Q("&:last-child","margin-bottom: 0;"),be("prefix",`
 display: inline-flex;
 margin-right: 8px;
 `),be("text",`
 border-bottom: 1px solid #0000;
 transition: border-color .3s var(--n-bezier);
 flex-grow: 1;
 max-width: 100%;
 `),be("suffix",`
 display: inline-flex;
 `)]),be("empty","margin: auto;")]);var kt=function(e,l,c,u){function s(r){return r instanceof c?r:new c(function(b){b(r)})}return new(c||(c=Promise))(function(r,b){function k(v){try{m(u.next(v))}catch(E){b(E)}}function y(v){try{m(u.throw(v))}catch(E){b(E)}}function m(v){v.done?r(v.value):s(v.value).then(k,y)}m((u=u.apply(e,[])).next())})};function mt(e,l,c,u){return{getIsGroup(){return!1},getKey(r){return r[e]},getChildren:u||(r=>r[l]),getDisabled(r){return!!(r[c]||r.checkboxDisabled)}}}const xt={allowCheckingNotLoaded:Boolean,filter:Function,defaultExpandAll:Boolean,expandedKeys:Array,keyField:{type:String,default:"key"},labelField:{type:String,default:"label"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandedKeys:{type:Array,default:()=>[]},indeterminateKeys:Array,renderSwitcherIcon:Function,onUpdateIndeterminateKeys:[Function,Array],"onUpdate:indeterminateKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],"onUpdate:expandedKeys":[Function,Array],overrideDefaultNodeClickBehavior:Function},wt=Object.assign(Object.assign(Object.assign(Object.assign({},gn.props),{accordion:Boolean,showIrrelevantNodes:{type:Boolean,default:!0},data:{type:Array,default:()=>[]},expandOnDragenter:{type:Boolean,default:!0},expandOnClick:Boolean,checkOnClick:{type:[Boolean,Function],default:!1},cancelable:{type:Boolean,default:!0},checkable:Boolean,draggable:Boolean,blockNode:Boolean,blockLine:Boolean,showLine:Boolean,disabled:Boolean,checkedKeys:Array,defaultCheckedKeys:{type:Array,default:()=>[]},selectedKeys:Array,defaultSelectedKeys:{type:Array,default:()=>[]},multiple:Boolean,pattern:{type:String,default:""},onLoad:Function,cascade:Boolean,selectable:{type:Boolean,default:!0},scrollbarProps:Object,indent:{type:Number,default:24},allowDrop:{type:Function,default:ut},animated:{type:Boolean,default:!0},checkboxPlacement:{type:String,default:"left"},virtualScroll:Boolean,watchProps:Array,renderLabel:Function,renderPrefix:Function,renderSuffix:Function,nodeProps:Function,keyboard:{type:Boolean,default:!0},getChildren:Function,onDragenter:[Function,Array],onDragleave:[Function,Array],onDragend:[Function,Array],onDragstart:[Function,Array],onDragover:[Function,Array],onDrop:[Function,Array],onUpdateCheckedKeys:[Function,Array],"onUpdate:checkedKeys":[Function,Array],onUpdateSelectedKeys:[Function,Array],"onUpdate:selectedKeys":[Function,Array]}),xt),{internalTreeSelect:Boolean,internalScrollable:Boolean,internalScrollablePadding:String,internalRenderEmpty:Function,internalHighlightKeySet:Object,internalUnifySelectCheck:Boolean,internalCheckboxFocusable:{type:Boolean,default:!0},internalFocusable:{type:Boolean,default:!0},checkStrategy:{type:String,default:"all"},leafOnly:Boolean}),Ct=de({name:"Tree",props:wt,setup(e){const{mergedClsPrefixRef:l,inlineThemeDisabled:c,mergedRtlRef:u}=Jn(e),s=Zn("Tree",u,l),r=gn("Tree","-tree",bt,et,e,l),b=B(null),k=B(null),y=B(null);function m(){var n;return(n=y.value)===null||n===void 0?void 0:n.listElRef}function v(){var n;return(n=y.value)===null||n===void 0?void 0:n.itemsElRef}const E=$(()=>{const{filter:n}=e;if(n)return n;const{labelField:t}=e;return(o,a)=>{if(!o.length)return!0;const d=a[t];return typeof d=="string"?d.toLowerCase().includes(o.toLowerCase()):!1}}),x=$(()=>{const{pattern:n}=e;return n?!n.length||!E.value?{filteredTree:e.data,highlightKeySet:null,expandedKeys:void 0}:gt(e.data,E.value,n,e.keyField,e.childrenField):{filteredTree:e.data,highlightKeySet:null,expandedKeys:void 0}}),T=$(()=>ot(e.showIrrelevantNodes?e.data:x.value.filteredTree,mt(e.keyField,e.childrenField,e.disabledField,e.getChildren))),p=me(yn,null),w=e.internalTreeSelect?p.dataTreeMate:T,{watchProps:h}=e,f=B([]);h!=null&&h.includes("defaultCheckedKeys")?Ce(()=>{f.value=e.defaultCheckedKeys}):f.value=e.defaultCheckedKeys;const K=C(e,"checkedKeys"),D=Fe(K,f),_=$(()=>w.value.getCheckedKeys(D.value,{cascade:e.cascade,allowNotLoaded:e.allowCheckingNotLoaded})),J=ft(e),Z=$(()=>_.value.checkedKeys),se=$(()=>{const{indeterminateKeys:n}=e;return n!==void 0?n:_.value.indeterminateKeys}),ie=B([]);h!=null&&h.includes("defaultSelectedKeys")?Ce(()=>{ie.value=e.defaultSelectedKeys}):ie.value=e.defaultSelectedKeys;const xe=C(e,"selectedKeys"),ae=Fe(xe,ie),we=B([]),Ne=n=>{we.value=e.defaultExpandAll?w.value.getNonLeafKeys():n===void 0?e.defaultExpandedKeys:n};h!=null&&h.includes("defaultExpandedKeys")?Ce(()=>{Ne(void 0)}):Ce(()=>{Ne(e.defaultExpandedKeys)});const _e=C(e,"expandedKeys"),V=Fe(_e,we),ee=$(()=>T.value.getFlattenedNodes(V.value)),{pendingNodeKeyRef:ne,handleKeydown:$e}=vt({props:e,mergedCheckedKeysRef:D,mergedSelectedKeysRef:ae,fNodesRef:ee,mergedExpandedKeysRef:V,handleCheck:Ve,handleSelect:Ge,handleSwitcherClick:en});let X=null,te=null;const pe=B(new Set),Ue=$(()=>e.internalHighlightKeySet||x.value.highlightKeySet),Me=Fe(Ue,pe),i=B(new Set),N=$(()=>V.value.filter(n=>!i.value.has(n)));let L=0;const O=B(null),U=B(null),Le=B(null),Te=B(null),Ae=B(0),mn=$(()=>{const{value:n}=U;return n?n.parent:null});let je=!1;Oe(C(e,"data"),()=>{je=!0,Be(()=>{je=!1}),i.value.clear(),ne.value=null,Se()},{deep:!1});let ze=!1;const He=()=>{ze=!0,Be(()=>{ze=!1})};let Re;Oe(C(e,"pattern"),(n,t)=>{if(e.showIrrelevantNodes)if(Re=void 0,n){const{expandedKeys:o,highlightKeySet:a}=ht(e.data,e.pattern,e.keyField,e.childrenField,E.value);pe.value=a,He(),ue(o,H(o),{node:null,action:"filter"})}else pe.value=new Set;else if(!n.length)Re!==void 0&&(He(),ue(Re,H(Re),{node:null,action:"filter"}));else{t.length||(Re=V.value);const{expandedKeys:o}=x.value;o!==void 0&&(He(),ue(o,H(o),{node:null,action:"filter"}))}});function Je(n){return kt(this,void 0,void 0,function*(){const{onLoad:t}=e;if(!t){yield Promise.resolve();return}const{value:o}=i;if(!o.has(n.key)){o.add(n.key);try{(yield t(n.rawNode))===!1&&fe()}catch(a){console.error(a),fe()}o.delete(n.key)}})}Ce(()=>{var n;const{value:t}=T;if(!t)return;const{getNode:o}=t;(n=V.value)===null||n===void 0||n.forEach(a=>{const d=o(a);d&&!d.shallowLoaded&&Je(d)})});const ce=B(!1),le=B([]);Oe(N,(n,t)=>{if(!e.animated||ze){Be(Pe);return}if(je)return;const o=Ke(r.value.self.nodeHeight),a=new Set(t);let d=null,A=null;for(const S of n)if(!a.has(S)){if(d!==null)return;d=S}const j=new Set(n);for(const S of t)if(!j.has(S)){if(A!==null)return;A=S}if(d===null&&A===null)return;const{virtualScroll:q}=e,ge=(q?y.value.listElRef:b.value).offsetHeight,ve=Math.ceil(ge/o)+1;let G;if(d!==null&&(G=t),A!==null&&(G===void 0?G=n:G=G.filter(S=>S!==A)),ce.value=!0,le.value=T.value.getFlattenedNodes(G),d!==null){const S=le.value.findIndex(W=>W.key===d);if(~S){const W=le.value[S].children;if(W){const Y=sn(W,n);le.value.splice(S+1,0,{__motion:!0,mode:"expand",height:q?Y.length*o:void 0,nodes:q?Y.slice(0,ve):Y})}}}if(A!==null){const S=le.value.findIndex(W=>W.key===A);if(~S){const W=le.value[S].children;if(!W)return;ce.value=!0;const Y=sn(W,n);le.value.splice(S+1,0,{__motion:!0,mode:"collapse",height:q?Y.length*o:void 0,nodes:q?Y.slice(0,ve):Y})}}});const xn=$(()=>it(ee.value)),wn=$(()=>ce.value?le.value:ee.value);function Pe(){const{value:n}=k;n&&n.sync()}function Nn(){ce.value=!1,e.virtualScroll&&Be(Pe)}function H(n){const{getNode:t}=w.value;return n.map(o=>{var a;return((a=t(o))===null||a===void 0?void 0:a.rawNode)||null})}function ue(n,t,o){const{"onUpdate:expandedKeys":a,onUpdateExpandedKeys:d}=e;we.value=n,a&&z(a,n,t,o),d&&z(d,n,t,o)}function Ze(n,t,o){const{"onUpdate:checkedKeys":a,onUpdateCheckedKeys:d}=e;f.value=n,d&&z(d,n,t,o),a&&z(a,n,t,o)}function pn(n,t){const{"onUpdate:indeterminateKeys":o,onUpdateIndeterminateKeys:a}=e;o&&z(o,n,t),a&&z(a,n,t)}function qe(n,t,o){const{"onUpdate:selectedKeys":a,onUpdateSelectedKeys:d}=e;ie.value=n,d&&z(d,n,t,o),a&&z(a,n,t,o)}function Rn(n){const{onDragenter:t}=e;t&&z(t,n)}function Sn(n){const{onDragleave:t}=e;t&&z(t,n)}function Cn(n){const{onDragend:t}=e;t&&z(t,n)}function Kn(n){const{onDragstart:t}=e;t&&z(t,n)}function Dn(n){const{onDragover:t}=e;t&&z(t,n)}function Ln(n){const{onDrop:t}=e;t&&z(t,n)}function Se(){Tn(),re()}function Tn(){O.value=null}function re(){Ae.value=0,U.value=null,Le.value=null,Te.value=null,fe()}function fe(){X&&(window.clearTimeout(X),X=null),te=null}function Ve(n,t){if(e.disabled||oe(n,e.disabledField))return;if(e.internalUnifySelectCheck&&!e.multiple){Ge(n);return}const o=t?"check":"uncheck",{checkedKeys:a,indeterminateKeys:d}=w.value[o](n.key,Z.value,{cascade:e.cascade,checkStrategy:J.value,allowNotLoaded:e.allowCheckingNotLoaded});Ze(a,H(a),{node:n.rawNode,action:o}),pn(d,H(d))}function An(n){if(e.disabled)return;const{key:t}=n,{value:o}=V,a=o.findIndex(d=>d===t);if(~a){const d=Array.from(o);d.splice(a,1),ue(d,H(d),{node:n.rawNode,action:"collapse"})}else{const d=T.value.getNode(t);if(!d||d.isLeaf)return;let A;if(e.accordion){const j=new Set(n.siblings.map(({key:q})=>q));A=o.filter(q=>!j.has(q)),A.push(t)}else A=o.concat(t);ue(A,H(A),{node:n.rawNode,action:"expand"})}}function en(n){e.disabled||ce.value||An(n)}function Ge(n){if(!(e.disabled||!e.selectable)){if(ne.value=n.key,e.internalUnifySelectCheck){const{value:{checkedKeys:t,indeterminateKeys:o}}=_;e.multiple?Ve(n,!(t.includes(n.key)||o.includes(n.key))):Ze([n.key],H([n.key]),{node:n.rawNode,action:"check"})}if(e.multiple){const t=Array.from(ae.value),o=t.findIndex(a=>a===n.key);~o?e.cancelable&&t.splice(o,1):~o||t.push(n.key),qe(t,H(t),{node:n.rawNode,action:~o?"unselect":"select"})}else ae.value.includes(n.key)?e.cancelable&&qe([],[],{node:n.rawNode,action:"unselect"}):qe([n.key],H([n.key]),{node:n.rawNode,action:"select"})}}function Pn(n){if(X&&(window.clearTimeout(X),X=null),n.isLeaf)return;te=n.key;const t=()=>{if(te!==n.key)return;const{value:o}=Le;if(o&&o.key===n.key&&!V.value.includes(n.key)){const a=V.value.concat(n.key);ue(a,H(a),{node:n.rawNode,action:"expand"})}X=null,te=null};n.shallowLoaded?X=window.setTimeout(()=>{t()},1e3):X=window.setTimeout(()=>{Je(n).then(()=>{t()})},1e3)}function En({event:n,node:t}){!e.draggable||e.disabled||oe(t,e.disabledField)||(nn({event:n,node:t},!1),Rn({event:n,node:t.rawNode}))}function Fn({event:n,node:t}){!e.draggable||e.disabled||oe(t,e.disabledField)||Sn({event:n,node:t.rawNode})}function On(n){n.target===n.currentTarget&&re()}function Bn({event:n,node:t}){Se(),!(!e.draggable||e.disabled||oe(t,e.disabledField))&&Cn({event:n,node:t.rawNode})}function In({event:n,node:t}){!e.draggable||e.disabled||oe(t,e.disabledField)||(L=n.clientX,O.value=t,Kn({event:n,node:t.rawNode}))}function nn({event:n,node:t},o=!0){var a;if(!e.draggable||e.disabled||oe(t,e.disabledField))return;const{value:d}=O;if(!d)return;const{allowDrop:A,indent:j}=e;o&&Dn({event:n,node:t.rawNode});const q=n.currentTarget,{height:ge,top:ve}=q.getBoundingClientRect(),G=n.clientY-ve;let S;A({node:t.rawNode,dropPosition:"inside",phase:"drag"})?G<=8?S="before":G>=ge-8?S="after":S="inside":G<=ge/2?S="before":S="after";const{value:Y}=xn;let R,I;const ye=Y(t.key);if(ye===null){re();return}let Ee=!1;S==="inside"?(R=t,I="inside"):S==="before"?t.isFirstChild?(R=t,I="before"):(R=ee.value[ye-1],I="after"):(R=t,I="after"),!R.isLeaf&&V.value.includes(R.key)&&(Ee=!0,I==="after"&&(R=ee.value[ye+1],R?I="before":(R=t,I="inside")));const ln=R;if(Le.value=ln,!Ee&&d.isLastChild&&d.key===R.key&&(I="after"),I==="after"){let on=L-n.clientX,We=0;for(;on>=j/2&&R.parent!==null&&R.isLastChild&&We<1;)on-=j,We+=1,R=R.parent;Ae.value=We}else Ae.value=0;if((d.contains(R)||I==="inside"&&((a=d.parent)===null||a===void 0?void 0:a.key)===R.key)&&!(d.key===ln.key&&d.key===R.key)){re();return}if(!A({node:R.rawNode,dropPosition:I,phase:"drag"})){re();return}if(d.key===R.key)fe();else if(te!==R.key)if(I==="inside"){if(e.expandOnDragenter){if(Pn(R),!R.shallowLoaded&&te!==R.key){Se();return}}else if(!R.shallowLoaded){Se();return}}else fe();else I!=="inside"&&fe();Te.value=I,U.value=R}function _n({event:n,node:t,dropPosition:o}){if(!e.draggable||e.disabled||oe(t,e.disabledField))return;const{value:a}=O,{value:d}=U,{value:A}=Te;if(!(!a||!d||!A)&&e.allowDrop({node:d.rawNode,dropPosition:A,phase:"drag"})&&a.key!==d.key){if(A==="before"){const j=a.getNext({includeDisabled:!0});if(j&&j.key===d.key){re();return}}if(A==="after"){const j=a.getPrev({includeDisabled:!0});if(j&&j.key===d.key){re();return}}Ln({event:n,node:d.rawNode,dragNode:a.rawNode,dropPosition:o}),Se()}}function $n(){Pe()}function Un(){Pe()}function Mn(n){var t;if(e.virtualScroll||e.internalScrollable){const{value:o}=k;if(!((t=o==null?void 0:o.containerRef)===null||t===void 0)&&t.contains(n.relatedTarget))return;ne.value=null}else{const{value:o}=b;if(o!=null&&o.contains(n.relatedTarget))return;ne.value=null}}Oe(ne,n=>{var t,o;if(n!==null){if(e.virtualScroll)(t=y.value)===null||t===void 0||t.scrollTo({key:n});else if(e.internalScrollable){const{value:a}=k;if(a===null)return;const d=(o=a.contentRef)===null||o===void 0?void 0:o.querySelector(`[data-key="${vn(n)}"]`);if(!d)return;a.scrollTo({el:d})}}}),nt(De,{loadingKeysRef:i,highlightKeySetRef:Me,displayedCheckedKeysRef:Z,displayedIndeterminateKeysRef:se,mergedSelectedKeysRef:ae,mergedExpandedKeysRef:V,mergedThemeRef:r,mergedCheckStrategyRef:J,nodePropsRef:C(e,"nodeProps"),disabledRef:C(e,"disabled"),checkableRef:C(e,"checkable"),selectableRef:C(e,"selectable"),expandOnClickRef:C(e,"expandOnClick"),onLoadRef:C(e,"onLoad"),draggableRef:C(e,"draggable"),blockLineRef:C(e,"blockLine"),indentRef:C(e,"indent"),cascadeRef:C(e,"cascade"),checkOnClickRef:C(e,"checkOnClick"),checkboxPlacementRef:e.checkboxPlacement,droppingMouseNodeRef:Le,droppingNodeParentRef:mn,draggingNodeRef:O,droppingPositionRef:Te,droppingOffsetLevelRef:Ae,fNodesRef:ee,pendingNodeKeyRef:ne,showLineRef:C(e,"showLine"),disabledFieldRef:C(e,"disabledField"),internalScrollableRef:C(e,"internalScrollable"),internalCheckboxFocusableRef:C(e,"internalCheckboxFocusable"),internalTreeSelect:e.internalTreeSelect,renderLabelRef:C(e,"renderLabel"),renderPrefixRef:C(e,"renderPrefix"),renderSuffixRef:C(e,"renderSuffix"),renderSwitcherIconRef:C(e,"renderSwitcherIcon"),labelFieldRef:C(e,"labelField"),multipleRef:C(e,"multiple"),overrideDefaultNodeClickBehaviorRef:C(e,"overrideDefaultNodeClickBehavior"),handleSwitcherClick:en,handleDragEnd:Bn,handleDragEnter:En,handleDragLeave:Fn,handleDragStart:In,handleDrop:_n,handleDragOver:nn,handleSelect:Ge,handleCheck:Ve});function jn(n,t){var o,a;typeof n=="number"?(o=y.value)===null||o===void 0||o.scrollTo(n,t||0):(a=y.value)===null||a===void 0||a.scrollTo(n)}const zn={handleKeydown:$e,scrollTo:jn,getCheckedData:()=>{if(!e.checkable)return{keys:[],options:[]};const{checkedKeys:n}=_.value;return{keys:n,options:H(n)}},getIndeterminateData:()=>{if(!e.checkable)return{keys:[],options:[]};const{indeterminateKeys:n}=_.value;return{keys:n,options:H(n)}}},tn=$(()=>{const{common:{cubicBezierEaseInOut:n},self:{fontSize:t,nodeBorderRadius:o,nodeColorHover:a,nodeColorPressed:d,nodeColorActive:A,arrowColor:j,loadingColor:q,nodeTextColor:ge,nodeTextColorDisabled:ve,dropMarkColor:G,nodeWrapperPadding:S,nodeHeight:W,lineHeight:Y,lineColor:R}}=r.value,I=Ye(S,"top"),ye=Ye(S,"bottom"),Ee=hn(Ke(W)-Ke(I)-Ke(ye));return{"--n-arrow-color":j,"--n-loading-color":q,"--n-bezier":n,"--n-font-size":t,"--n-node-border-radius":o,"--n-node-color-active":A,"--n-node-color-hover":a,"--n-node-color-pressed":d,"--n-node-text-color":ge,"--n-node-text-color-disabled":ve,"--n-drop-mark-color":G,"--n-node-wrapper-padding":S,"--n-line-offset-top":`-${I}`,"--n-line-offset-bottom":`-${ye}`,"--n-node-content-height":Ee,"--n-line-height":Y,"--n-line-color":R}}),he=c?tt("tree",void 0,tn,e):void 0;return Object.assign(Object.assign({},zn),{mergedClsPrefix:l,mergedTheme:r,rtlEnabled:s,fNodes:wn,aip:ce,selfElRef:b,virtualListInstRef:y,scrollbarInstRef:k,handleFocusout:Mn,handleDragLeaveTree:On,handleScroll:$n,getScrollContainer:m,getScrollContent:v,handleAfterEnter:Nn,handleResize:Un,cssVars:c?void 0:tn,themeClass:he==null?void 0:he.themeClass,onRender:he==null?void 0:he.onRender})},render(){var e;const{fNodes:l,internalRenderEmpty:c}=this;if(!l.length&&c)return c();const{mergedClsPrefix:u,blockNode:s,blockLine:r,draggable:b,disabled:k,internalFocusable:y,checkable:m,handleKeydown:v,rtlEnabled:E,handleFocusout:x,scrollbarProps:T}=this,p=y&&!k,w=p?"0":void 0,h=[`${u}-tree`,E&&`${u}-tree--rtl`,m&&`${u}-tree--checkable`,(r||s)&&`${u}-tree--block-node`,r&&`${u}-tree--block-line`],f=D=>"__motion"in D?g(yt,{height:D.height,nodes:D.nodes,clsPrefix:u,mode:D.mode,onAfterEnter:this.handleAfterEnter}):g(kn,{key:D.key,tmNode:D,clsPrefix:u});if(this.virtualScroll){const{mergedTheme:D,internalScrollablePadding:_}=this,J=Ye(_||"0");return g(dn,Object.assign({},T,{ref:"scrollbarInstRef",onDragleave:b?this.handleDragLeaveTree:void 0,container:this.getScrollContainer,content:this.getScrollContent,class:h,theme:D.peers.Scrollbar,themeOverrides:D.peerOverrides.Scrollbar,tabindex:w,onKeydown:p?v:void 0,onFocusout:p?x:void 0}),{default:()=>{var Z;return(Z=this.onRender)===null||Z===void 0||Z.call(this),l.length?g(at,{ref:"virtualListInstRef",items:this.fNodes,itemSize:Ke(D.self.nodeHeight),ignoreItemResize:this.aip,paddingTop:J.top,paddingBottom:J.bottom,class:this.themeClass,style:[this.cssVars,{paddingLeft:J.left,paddingRight:J.right}],onScroll:this.handleScroll,onResize:this.handleResize,showScrollbar:!1,itemResizable:!0},{default:({item:se})=>f(se)}):rn(this.$slots.empty,()=>[g(cn,{class:`${u}-tree__empty`,theme:this.mergedTheme.peers.Empty,themeOverrides:this.mergedTheme.peerOverrides.Empty})])}})}const{internalScrollable:K}=this;return h.push(this.themeClass),(e=this.onRender)===null||e===void 0||e.call(this),K?g(dn,Object.assign({},T,{class:h,tabindex:w,onKeydown:p?v:void 0,onFocusout:p?x:void 0,style:this.cssVars,contentStyle:{padding:this.internalScrollablePadding}}),{default:()=>g("div",{onDragleave:b?this.handleDragLeaveTree:void 0,ref:"selfElRef"},this.fNodes.map(f))}):g("div",{class:h,tabindex:w,ref:"selfElRef",style:this.cssVars,onKeydown:p?v:void 0,onFocusout:p?x:void 0,onDragleave:b?this.handleDragLeaveTree:void 0},l.length?l.map(f):rn(this.$slots.empty,()=>[g(cn,{class:`${u}-tree__empty`,theme:this.mergedTheme.peers.Empty,themeOverrides:this.mergedTheme.peerOverrides.Empty})]))}});export{Ct as _,xt as a,mt as c,yn as t,ft as u};
