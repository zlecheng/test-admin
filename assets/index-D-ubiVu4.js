import{_ as L}from"./CommonPage-D-IPf08m.js";import M from"./MenuTree-D7eT0YT3.js";import{a as C,_ as A}from"./ResAddOrEdit-DzbMZlWd.js";import{a as O,c as k,bm as W,b as P,e as K,u as U,f as E,bz as q,h as B,bA as F,ad as H,i as X,ax as G,l as x,P as J,j as d,bB as Y,ak as Q,y as Z,ap as ee,z,A as V,B as l,J as y,I as o,C as n,aX as te,F as R,G as ne,E as m,ao as w,D as p,K as se}from"./index-DNQY-kEr.js";import{_ as ie}from"./index-B6MhW7V3.js";import{_ as ae,a as oe}from"./DescriptionsItem-BodBqnpN.js";import{_ as le}from"./Select-DE0V0fNc.js";import{N as re}from"./Switch-B8c6UR-y.js";import"./AppCard-Bezl2fFY.js";import"./Tree-yzfd0z9U.js";import"./Checkbox-Bb9_ewGo.js";import"./create-DkGA0g8u.js";import"./Input-Czao590z.js";import"./Eye-5JV190Nb.js";import"./ismeicons-CUZYZBf_.js";import"./QuestionLabel-ZE97O9tD.js";import"./useForm-BgFGmrJ_.js";import"./InputNumber-Bcn_07pz.js";import"./Add-M9_S3mPK.js";import"./Dropdown-CRpryC9n.js";import"./download-sglA049O.js";import"./Tag-CUIrpqOD.js";const ce=O([O("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),k("spin-container",`
 position: relative;
 `,[k("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[W()])]),k("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),k("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[P("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),k("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),k("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[P("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),de={small:20,medium:18,large:16},ue=Object.assign(Object.assign({},E.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),me=K({name:"Spin",props:ue,setup(r){const{mergedClsPrefixRef:f,inlineThemeDisabled:a}=U(r),i=E("Spin","-spin",ce,q,r,f),t=B(()=>{const{size:c}=r,{common:{cubicBezierEaseInOut:v},self:g}=i.value,{opacitySpinning:$,color:S,textColor:e}=g,s=typeof c=="number"?F(c):g[H("size",c)];return{"--n-bezier":v,"--n-opacity-spinning":$,"--n-size":s,"--n-color":S,"--n-text-color":e}}),u=a?X("spin",B(()=>{const{size:c}=r;return typeof c=="number"?String(c):c[0]}),t,r):void 0,_=G(r,["spinning","show"]),b=x(!1);return J(c=>{let v;if(_.value){const{delay:g}=r;if(g){v=window.setTimeout(()=>{b.value=!0},g),c(()=>{clearTimeout(v)});return}}b.value=_.value}),{mergedClsPrefix:f,active:b,mergedStrokeWidth:B(()=>{const{strokeWidth:c}=r;if(c!==void 0)return c;const{size:v}=r;return de[typeof v=="number"?"medium":v]}),cssVars:a?void 0:t,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var r,f;const{$slots:a,mergedClsPrefix:i,description:t}=this,u=a.icon&&this.rotate,_=(t||a.description)&&d("div",{class:`${i}-spin-description`},t||((r=a.description)===null||r===void 0?void 0:r.call(a))),b=a.icon?d("div",{class:[`${i}-spin-body`,this.themeClass]},d("div",{class:[`${i}-spin`,u&&`${i}-spin--rotate`],style:a.default?"":this.cssVars},a.icon()),_):d("div",{class:[`${i}-spin-body`,this.themeClass]},d(Y,{clsPrefix:i,style:a.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${i}-spin`}),_);return(f=this.onRender)===null||f===void 0||f.call(this),a.default?d("div",{class:[`${i}-spin-container`,this.themeClass],style:this.cssVars},d("div",{class:[`${i}-spin-content`,this.active&&`${i}-spin-content--spinning`,this.contentClass],style:this.contentStyle},a),d(Q,{name:"fade-in-transition"},{default:()=>this.active?b:null})):b}}),pe={class:"flex"},fe={class:"ml-40 w-0 flex-1"},_e={class:"flex justify-between"},he={class:"mb-12"},ye=y("i",{class:"i-material-symbols:edit-outline mr-4 text-14"},null,-1),ve={key:0,class:"flex items-center"},be={class:"opacity-50"},ge={key:1},ke={class:"mt-32 flex justify-between"},xe=y("h3",{class:"mb-12"}," 按钮 ",-1),ze=y("i",{class:"i-fe:plus mr-4 text-14"},null,-1),Fe={__name:"index",setup(r){const f=x([]),a=x(!1),i=x(null),t=x(null);async function u(e){if((e==null?void 0:e.type)==="BUTTON"){i.value.handleSearch();return}a.value=!0;const s=await C.getMenuTree();f.value=(s==null?void 0:s.data)||[],a.value=!1,e&&(t.value=e)}u();const _=x(null);function b(e={}){var s;(s=_.value)==null||s.handleOpen({action:"edit",title:`编辑菜单 - ${e.name}`,row:e,okText:"保存"})}const c=[{title:"名称",key:"name"},{title:"编码",key:"code"},{title:"状态",key:"enable",render:e=>d(re,{size:"small",rubberBand:!1,value:e.enable,loading:!!e.enableLoading,onUpdateValue:()=>S(e)},{checked:()=>"启用",unchecked:()=>"停用"})},{title:"操作",key:"actions",width:320,align:"right",fixed:"right",render(e){return[d(w,{size:"small",type:"primary",style:"margin-left: 12px;",onClick:()=>g(e)},{default:()=>"编辑",icon:()=>d("i",{class:"i-material-symbols:edit-outline text-14"})}),d(w,{size:"small",type:"error",style:"margin-left: 12px;",onClick:()=>$(e.id)},{default:()=>"删除",icon:()=>d("i",{class:"i-material-symbols:delete-outline text-14"})})]}}];Z(()=>t.value,async e=>{await ee(),e&&i.value.handleSearch()});function v(){var e;(e=_.value)==null||e.handleOpen({action:"add",title:"新增按钮",row:{type:"BUTTON",parentId:t.value.id},okText:"保存"})}function g(e){var s;(s=_.value)==null||s.handleOpen({action:"edit",title:`编辑按钮 - ${e.name}`,row:e,okText:"保存"})}function $(e){const s=$dialog.warning({content:"确定删除？",title:"提示",positiveText:"确定",negativeText:"取消",async onPositiveClick(){try{s.loading=!0,await C.deletePermission(e),$message.success("删除成功"),i.value.handleSearch(),s.loading=!1}catch{s.loading=!1}}})}async function S(e){var s;try{e.enableLoading=!0,await C.savePermission(e.id,{enable:!e.enable}),$message.success("操作成功"),(s=i.value)==null||s.handleSearch(),e.enableLoading=!1}catch{e.enableLoading=!1}}return(e,s)=>{const T=me,h=ae,j=oe,D=le,I=L;return z(),V(I,null,{default:l(()=>[y("div",pe,[o(T,{size:"small",show:n(a)},{default:l(()=>[o(M,{currentMenu:n(t),"onUpdate:currentMenu":s[0]||(s[0]=N=>te(t)?t.value=N:null),class:"w-320 shrink-0","tree-data":n(f),onRefresh:u},null,8,["currentMenu","tree-data"])]),_:1},8,["show"]),y("div",fe,[n(t)?(z(),R(ne,{key:0},[y("div",_e,[y("h3",he,m(n(t).name),1),o(n(w),{size:"small",type:"primary",onClick:s[1]||(s[1]=N=>b(n(t)))},{default:l(()=>[ye,p(" 编辑 ")]),_:1})]),o(j,{"label-placement":"left",bordered:"",column:2},{default:l(()=>[o(h,{label:"编码"},{default:l(()=>[p(m(n(t).code),1)]),_:1}),o(h,{label:"名称"},{default:l(()=>[p(m(n(t).name),1)]),_:1}),o(h,{label:"路由地址"},{default:l(()=>[p(m(n(t).path??"--"),1)]),_:1}),o(h,{label:"组件路径"},{default:l(()=>[p(m(n(t).component??"--"),1)]),_:1}),o(h,{label:"菜单图标"},{default:l(()=>[n(t).icon?(z(),R("span",ve,[y("i",{class:se(`${n(t).icon}?mask text-22 mr-8`)},null,2),y("span",be,m(n(t).icon),1)])):(z(),R("span",ge,"无"))]),_:1}),o(h,{label:"layout"},{default:l(()=>[p(m(n(t).layout||"跟随系统"),1)]),_:1}),o(h,{label:"是否显示"},{default:l(()=>[p(m(n(t).show?"是":"否"),1)]),_:1}),o(h,{label:"是否启用"},{default:l(()=>[p(m(n(t).enable?"是":"否"),1)]),_:1}),o(h,{label:"KeepAlive"},{default:l(()=>[p(m(n(t).keepAlive?"是":"否"),1)]),_:1}),o(h,{label:"排序"},{default:l(()=>[p(m(n(t).order??"--"),1)]),_:1})]),_:1}),y("div",ke,[xe,o(n(w),{size:"small",type:"primary",onClick:v},{default:l(()=>[ze,p(" 新增 ")]),_:1})]),o(n(ie),{ref_key:"$table",ref:i,columns:c,"scroll-x":-1,"get-data":n(C).getButtons,"query-items":{parentId:n(t).id}},null,8,["get-data","query-items"])],64)):(z(),V(D,{key:1,class:"h-450 f-c-c",size:"large",description:"请选择菜单查看详情"}))])]),o(A,{ref_key:"modalRef",ref:_,menus:n(f),onRefresh:u},null,8,["menus"])]),_:1})}}};export{Fe as default};
