import{c as k,a as b,b as F,d as $,e as D,u as H,f as E,g as N,p as O,t as M,h as S,i as K,j as C,k as q,l as I,o as G,m as J,n as U,q as Q,s as X,v as Y,w as Z,x as W,y as ee,z as x,A as y,B,C as a,D as T,E as P,F as w,G as A,H as re,I as m,J as v,K as z,L as j,M as te,N as oe,O as ne,r as se}from"./index-DNQY-kEr.js";import{_ as ae,a as ie,b as ce,c as le}from"./SideMenu-BnZpnBRN.js";import{_ as de}from"./AppCard-Bezl2fFY.js";import{_ as me,A as ue}from"./ThemeSetting-J-rwEYT4.js";import{_ as pe}from"./Dropdown-CRpryC9n.js";import"./Avatar-DKJYQ91V.js";import"./utils-CdKQyDjY.js";import"./Tag-CUIrpqOD.js";import"./create-DkGA0g8u.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./Add-M9_S3mPK.js";import"./Input-Czao590z.js";import"./Eye-5JV190Nb.js";const fe=k("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[b("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),b("a",`
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
 `),b("&:not(:last-child)",[F("clickable",[$("link",`
 cursor: pointer;
 `,[b("&:hover",`
 background-color: var(--n-item-color-hover);
 `),b("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),$("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[b("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[k("icon",`
 color: var(--n-item-text-color-hover);
 `)]),b("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[k("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),$("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),b("&:last-child",[$("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[k("icon",`
 color: var(--n-item-text-color-active);
 `)]),$("separator",`
 display: none;
 `)])])]),V=q("n-breadcrumb"),_e=Object.assign(Object.assign({},E.props),{separator:{type:String,default:"/"}}),he=D({name:"Breadcrumb",props:_e,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=H(e),l=E("Breadcrumb","-breadcrumb",fe,N,e,o);O(V,{separatorRef:M(e,"separator"),mergedClsPrefixRef:o});const i=S(()=>{const{common:{cubicBezierEaseInOut:f},self:{separatorColor:d,itemTextColor:c,itemTextColorHover:r,itemTextColorPressed:s,itemTextColorActive:u,fontSize:_,fontWeightActive:p,itemBorderRadius:g,itemColorHover:h,itemColorPressed:R,itemLineHeight:L}}=l.value;return{"--n-font-size":_,"--n-bezier":f,"--n-item-text-color":c,"--n-item-text-color-hover":r,"--n-item-text-color-pressed":s,"--n-item-text-color-active":u,"--n-separator-color":d,"--n-item-color-hover":h,"--n-item-color-pressed":R,"--n-item-border-radius":g,"--n-font-weight-active":p,"--n-item-line-height":L}}),n=t?K("breadcrumb",void 0,i,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:i,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),C("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},C("ul",null,this.$slots))}}),be=(e=U?window:null)=>{const o=()=>{const{hash:i,host:n,hostname:f,href:d,origin:c,pathname:r,port:s,protocol:u,search:_}=(e==null?void 0:e.location)||{};return{hash:i,host:n,hostname:f,href:d,origin:c,pathname:r,port:s,protocol:u,search:_}},t=()=>{l.value=o()},l=I(o());return G(()=>{e&&(e.addEventListener("popstate",t),e.addEventListener("hashchange",t))}),J(()=>{e&&(e.removeEventListener("popstate",t),e.removeEventListener("hashchange",t))}),l},ve={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},ge=D({name:"BreadcrumbItem",props:ve,setup(e,{slots:o}){const t=Q(V,null);if(!t)return()=>null;const{separatorRef:l,mergedClsPrefixRef:i}=t,n=be(),f=S(()=>e.href?"a":"span"),d=S(()=>n.value.href===e.href?"location":null);return()=>{const{value:c}=i;return C("li",{class:[`${c}-breadcrumb-item`,e.clickable&&`${c}-breadcrumb-item--clickable`]},C(f.value,{class:`${c}-breadcrumb-item__link`,"aria-current":d.value,href:e.href,onClick:e.onClick},o),C("span",{class:`${c}-breadcrumb-item__separator`,"aria-hidden":"true"},X(o.separator,()=>{var r;return[(r=e.separator)!==null&&r!==void 0?r:l.value]})))}}}),xe={class:"flex items-center"},ke={__name:"BreadCrumb",setup(e){const o=Y(),t=Z(),l=W(),i=I([]);ee(()=>t.name,r=>{i.value=n(l.permissions,r)},{immediate:!0});function n(r,s,u=[]){var _;for(const p of r){if(p.code===s)return[...u,p];if((_=p.children)!=null&&_.length){const g=n(p.children,s,[...u,p]);if(g)return g}}return null}function f(r){r.path&&r.code!==t.name&&o.push(r.path)}function d(r=[]){return r.filter(s=>s.show).map(s=>({label:s.name,key:s.code,icon:()=>C("i",{class:s.icon})}))}function c(r){r&&r!==t.name&&o.push({name:r})}return(r,s)=>{const u=ge,_=pe,p=he;return x(),y(p,null,{default:B(()=>{var g;return[(g=a(i))!=null&&g.length?(x(!0),w(A,{key:1},re(a(i),(h,R)=>(x(),y(u,{key:h.code,clickable:!!h.path,onClick:L=>f(h)},{default:B(()=>[m(_,{options:R<a(i).length-1?d(h.children):[],onSelect:c},{default:B(()=>[v("div",xe,[v("i",{class:z([h.icon,"mr-8"])},null,2),T(" "+P(h.name),1)])]),_:2},1032,["options"])]),_:2},1032,["clickable","onClick"]))),128)):(x(),y(u,{key:0,clickable:!1},{default:B(()=>[T(P(a(t).meta.title),1)]),_:1}))]}),_:1})}}},Ce={__name:"index",setup(e){return(o,t)=>(x(),w(A,null,[m(a(ae),{"border-b":"1px solid light_border dark:dark_border"}),m(a(ie),{class:"cus-scroll-y mt-4 h-0 flex-1"})],64))}},$e={class:"ml-auto flex flex-shrink-0 items-center px-12 text-18"},Be={__name:"index",setup(e){const o=j(),t=te();function l(){o.toggleDark(),ne(t)()}const{isFullscreen:i,toggle:n}=oe();return(f,d)=>{const c=me,r=de;return x(),y(r,{class:"flex items-center px-12","border-b":"1px solid light_border dark:dark_border"},{default:B(()=>[m(a(ce)),m(a(ke)),v("div",$e,[v("i",{class:z(["mr-16 cursor-pointer",a(t)?"i-fe:moon":"i-fe:sun"]),onClick:l},null,2),v("i",{class:z(["mr-16 cursor-pointer",a(i)?"i-fe:minimize":"i-fe:maximize"]),onClick:d[0]||(d[0]=(...s)=>a(n)&&a(n)(...s))},null,2),m(c,{class:"mr-16"}),m(a(le))])]),_:1})}}},ye={class:"wh-full flex"},ze={class:"w-0 flex-col flex-1"},Re={class:"p-12","border-b":"1px solid light_border dark:dark_border"},Ne={__name:"index",setup(e){const o=j();return(t,l)=>(x(),w("div",ye,[v("aside",{class:z(["flex-col flex-shrink-0 transition-width-300",a(o).collapsed?"w-64":"w-220"]),"border-r":"1px solid light_border dark:dark_border"},[m(Ce)],2),v("article",ze,[m(Be,{class:"h-60 flex-shrink-0"}),v("div",Re,[m(a(ue),{class:"flex-shrink-0"})]),se(t.$slots,"default")])]))}};export{Ne as default};
