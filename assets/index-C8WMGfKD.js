import{c as k,a as v,b as F,d as $,e as D,u as H,f as E,g as N,p as O,t as M,h as R,i as K,j as C,k as q,l as I,o as G,m as J,n as U,q as Q,s as X,v as Y,w as Z,x as W,y as ee,z as x,A as B,B as z,C as i,D as T,E as P,F as S,G as A,H as re,I as f,J as p,K as w,L as j,M as te,N as oe,O as ne,r as se}from"./index-k9ku2iOX.js";import{_ as ae,a as ie,b as ce,c as le}from"./SideMenu-CzW15M4G.js";import{_ as me}from"./AppCard-CSYaoVCd.js";import{_ as ue,A as de}from"./ThemeSetting-CeDgUUOO.js";import{_ as pe}from"./Dropdown-Dlm6aciY.js";import"./Avatar-CnVXcLMY.js";import"./utils-DFVxQgF6.js";import"./Tag-DZU47IEJ.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./create-6Nsgmbg3.js";import"./Add-B2mkh17A.js";import"./Input-Cz6N3a4s.js";import"./Eye-G5B5x8tr.js";const fe=k("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[v("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),v("a",`
 color: inherit;
 text-decoration: inherit;
 `),k("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[k("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),v("&:not(:last-child)",[F("clickable",[$("link",`
 cursor: pointer;
 `,[v("&:hover",`
 background-color: var(--n-item-color-hover);
 `),v("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),$("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[v("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[k("icon",`
 color: var(--n-item-text-color-hover);
 `)]),v("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[k("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),$("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),v("&:last-child",[$("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[k("icon",`
 color: var(--n-item-text-color-active);
 `)]),$("separator",`
 display: none;
 `)])])]),V=q("n-breadcrumb"),he=Object.assign(Object.assign({},E.props),{separator:{type:String,default:"/"}}),_e=D({name:"Breadcrumb",props:he,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=H(e),m=E("Breadcrumb","-breadcrumb",fe,N,e,o);O(V,{separatorRef:M(e,"separator"),mergedClsPrefixRef:o});const c=R(()=>{const{common:{cubicBezierEaseInOut:u},self:{separatorColor:d,itemTextColor:n,itemTextColorHover:r,itemTextColorPressed:a,itemTextColorActive:l,fontSize:_,fontWeightActive:h,itemBorderRadius:g,itemColorHover:b,itemColorPressed:y,itemLineHeight:L}}=m.value;return{"--n-font-size":_,"--n-bezier":u,"--n-item-text-color":n,"--n-item-text-color-hover":r,"--n-item-text-color-pressed":a,"--n-item-text-color-active":l,"--n-separator-color":d,"--n-item-color-hover":b,"--n-item-color-pressed":y,"--n-item-border-radius":g,"--n-font-weight-active":h,"--n-item-line-height":L}}),s=t?K("breadcrumb",void 0,c,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:c,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),C("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},C("ul",null,this.$slots))}}),be=(e=U?window:null)=>{const o=()=>{const{hash:c,host:s,hostname:u,href:d,origin:n,pathname:r,port:a,protocol:l,search:_}=(e==null?void 0:e.location)||{};return{hash:c,host:s,hostname:u,href:d,origin:n,pathname:r,port:a,protocol:l,search:_}},t=()=>{m.value=o()},m=I(o());return G(()=>{e&&(e.addEventListener("popstate",t),e.addEventListener("hashchange",t))}),J(()=>{e&&(e.removeEventListener("popstate",t),e.removeEventListener("hashchange",t))}),m},ve={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},ge=D({name:"BreadcrumbItem",props:ve,setup(e,{slots:o}){const t=Q(V,null);if(!t)return()=>null;const{separatorRef:m,mergedClsPrefixRef:c}=t,s=be(),u=R(()=>e.href?"a":"span"),d=R(()=>s.value.href===e.href?"location":null);return()=>{const{value:n}=c;return C("li",{class:[`${n}-breadcrumb-item`,e.clickable&&`${n}-breadcrumb-item--clickable`]},C(u.value,{class:`${n}-breadcrumb-item__link`,"aria-current":d.value,href:e.href,onClick:e.onClick},o),C("span",{class:`${n}-breadcrumb-item__separator`,"aria-hidden":"true"},X(o.separator,()=>{var r;return[(r=e.separator)!==null&&r!==void 0?r:m.value]})))}}}),xe={class:"flex items-center"},ke={__name:"BreadCrumb",setup(e){const o=Y(),t=Z(),m=W(),c=I([]);ee(()=>t.name,r=>{c.value=s(m.permissions,r)},{immediate:!0});function s(r,a,l=[]){var _;for(const h of r){if(h.code===a)return[...l,h];if((_=h.children)!=null&&_.length){const g=s(h.children,a,[...l,h]);if(g)return g}}return null}function u(r){r.path&&r.code!==t.name&&o.push(r.path)}function d(r=[]){return r.filter(a=>a.show).map(a=>({label:a.name,key:a.code,icon:()=>C("i",{class:a.icon})}))}function n(r){r&&r!==t.name&&o.push({name:r})}return(r,a)=>{const l=ge,_=pe,h=_e;return x(),B(h,null,{default:z(()=>{var g;return[(g=i(c))!=null&&g.length?(x(!0),S(A,{key:1},re(i(c),(b,y)=>(x(),B(l,{key:b.code,clickable:!!b.path,onClick:L=>u(b)},{default:z(()=>[f(_,{options:y<i(c).length-1?d(b.children):[],onSelect:n},{default:z(()=>[p("div",xe,[p("i",{class:w([b.icon,"mr-8"])},null,2),T(" "+P(b.name),1)])]),_:2},1032,["options"])]),_:2},1032,["clickable","onClick"]))),128)):(x(),B(l,{key:0,clickable:!1},{default:z(()=>[T(P(i(t).meta.title),1)]),_:1}))]}),_:1})}}},Ce={__name:"index",setup(e){return(o,t)=>(x(),S(A,null,[f(i(ae),{"border-b":"1px solid light_border dark:dark_border"}),f(i(ie),{class:"cus-scroll-y mt-4 h-0 flex-1"})],64))}},$e={class:"ml-auto flex flex-shrink-0 items-center px-12 text-18"},ze={__name:"index",setup(e){const o=j(),t=te();function m(){o.toggleDark(),ne(t)()}const{isFullscreen:c,toggle:s}=oe();function u(d){window.open(d)}return(d,n)=>{const r=ue,a=me;return x(),B(a,{class:"flex items-center px-12","border-b":"1px solid light_border dark:dark_border"},{default:z(()=>[f(i(ce)),f(i(ke)),p("div",$e,[p("i",{class:w(["mr-16 cursor-pointer",i(t)?"i-fe:moon":"i-fe:sun"]),onClick:m},null,2),p("i",{class:w(["mr-16 cursor-pointer",i(c)?"i-fe:minimize":"i-fe:maximize"]),onClick:n[0]||(n[0]=(...l)=>i(s)&&i(s)(...l))},null,2),p("i",{class:"i-fe:github mr-16 cursor-pointer",onClick:n[1]||(n[1]=l=>u("https://github.com/zclzone/vue-naive-admin/tree/2.x"))}),p("i",{class:"i-me:gitee mr-16 cursor-pointer",onClick:n[2]||(n[2]=l=>u("https://gitee.com/isme-admin/vue-naive-admin/tree/2.x"))}),f(r,{class:"mr-16"}),f(i(le))])]),_:1})}}},Be={class:"wh-full flex"},we={class:"w-0 flex-col flex-1"},ye={class:"p-12","border-b":"1px solid light_border dark:dark_border"},Ne={__name:"index",setup(e){const o=j();return(t,m)=>(x(),S("div",Be,[p("aside",{class:w(["flex-col flex-shrink-0 transition-width-300",i(o).collapsed?"w-64":"w-220"]),"border-r":"1px solid light_border dark:dark_border"},[f(Ce)],2),p("article",we,[f(ze,{class:"h-60 flex-shrink-0"}),p("div",ye,[f(i(de),{class:"flex-shrink-0"})]),se(t.$slots,"default")])]))}};export{Ne as default};
