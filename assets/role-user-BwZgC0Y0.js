import{_ as B}from"./CommonPage-Cl5SReYO.js";import{a as p}from"./api-QqKy3Oxf.js";import{w as U,l as f,o as q,z as _,A as R,B as r,I as n,C as a,D as y,E as z,J as S,ao as c,F as x,aK as $,aX as D,j as i}from"./index-k9ku2iOX.js";import{_ as T}from"./index-Ch6Vyg94.js";import{_ as g}from"./QueryItem-Zje2pGtq.js";import{f as V}from"./common-DvpEgVXC.js";import{N as w}from"./Tag-DZU47IEJ.js";import{_ as A}from"./Avatar-CnVXcLMY.js";import{N as E}from"./Switch-mUeSA7WU.js";import{_ as j}from"./Input-Cz6N3a4s.js";import{a as O}from"./Select-D5TZaMUe.js";import"./TheFooter-Cmbc0TE7.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./AppCard-CSYaoVCd.js";import"./Checkbox-D_JRlln6.js";import"./Dropdown-Dlm6aciY.js";import"./create-6Nsgmbg3.js";import"./Eye-G5B5x8tr.js";import"./download-sglA049O.js";import"./utils-DFVxQgF6.js";const F={class:"flex items-center"},J={key:0,class:"i-material-symbols:delete-outline mr-4 text-18"},K={key:0,class:"i-line-md:confirm-circle mr-4 text-18"},de=Object.assign({name:"RoleUser"},{__name:"role-user",setup(M){const u=U(),d=f(null),o=f({});q(()=>{var e;(e=d.value)==null||e.handleSearch()});const b=[{label:"男",value:1},{label:"女",value:2}],I=[{type:"selection",fixed:"left"},{title:"头像",key:"avatar",width:80,render:({avatar:e})=>i(A,{size:"medium",src:e})},{title:"用户名",key:"username",width:150,ellipsis:{tooltip:!0}},{title:"角色",key:"roles",width:200,ellipsis:{tooltip:!0},render:({roles:e})=>e!=null&&e.length?e.map((t,l)=>i(w,{type:"success",style:l>0?"margin-left: 8px;":""},{default:()=>t.name})):"暂无角色"},{title:"性别",key:"gender",width:80,render:({gender:e})=>{var t;return((t=b.find(l=>e===l.value))==null?void 0:t.label)??""}},{title:"创建时间",key:"createDate",width:180,render(e){return i("span",V(e.createTime))}},{title:"状态",key:"enable",width:100,render:e=>i(E,{size:"small",rubberBand:!1,value:e.enable},{checked:()=>"启用",unchecked:()=>"停用"})},{title:"操作",key:"actions",width:100,align:"right",fixed:"right",hideInExcel:!0,render(e){var t;return(t=e.roles)!=null&&t.some(l=>l.id===+u.params.roleId)?i(c,{size:"small",type:"error",secondary:!0,onClick:()=>v([e.id])},{default:()=>"取消授权",icon:()=>i("i",{class:"i-material-symbols:delete-outline text-14"})}):i(c,{size:"small",type:"primary",secondary:!0,onClick:()=>h([e.id])},{default:()=>"授权",icon:()=>i("i",{class:"i-line-md:confirm-circle text-14"})})}}],m=f([]);function N(e){m.value=e||[]}function h(e=m.value){const t=u.params.roleId;if(!t)return $message.error("角色异常，请重新选择角色");if(!e.length)return $message.error("请先选择用户");$dialog.confirm({content:`确认分配【${u.query.roleName}】？`,async confirm(){var l;await p.addRoleUsers(t,{userIds:e}),(l=d.value)==null||l.handleSearch()}})}function v(e=m.value){const t=u.params.roleId;if(!t)return $message.error("角色异常，请重新选择角色");if(!e.length)return $message.error("请先选择用户");$dialog.confirm({content:`确认取消分配【${u.query.roleName}】？`,async confirm(){var l;await p.removeRoleUsers(t,{userIds:e}),(l=d.value)==null||l.handleSearch()}})}return(e,t)=>{const l=j,k=O,C=B;return _(),R(C,{back:""},{"title-suffix":r(()=>[n(a(w),{class:"ml-12",type:"warning"},{default:r(()=>[y(z(a(u).query.roleName),1)]),_:1})]),action:r(()=>[S("div",F,[n(a(c),{disabled:!a(m).length,type:"error",onClick:t[0]||(t[0]=s=>v())},{default:r(()=>[a(m).length?(_(),x("i",J)):$("",!0),y(" 批量取消授权 ")]),_:1},8,["disabled"]),n(a(c),{class:"ml-12",disabled:!a(m).length,type:"primary",onClick:t[1]||(t[1]=s=>h())},{default:r(()=>[a(m).length?(_(),x("i",K)):$("",!0),y(" 批量授权 ")]),_:1},8,["disabled"])])]),default:r(()=>[n(a(T),{ref_key:"$table",ref:d,"query-items":a(o),"onUpdate:queryItems":t[5]||(t[5]=s=>D(o)?o.value=s:null),"scroll-x":1200,columns:I,"get-data":a(p).getAllUsers,onOnChecked:N},{default:r(()=>[n(a(g),{label:"用户名","label-width":50},{default:r(()=>[n(l,{value:a(o).username,"onUpdate:value":t[2]||(t[2]=s=>a(o).username=s),type:"text",placeholder:"请输入用户名",clearable:""},null,8,["value"])]),_:1}),n(a(g),{label:"性别","label-width":50},{default:r(()=>[n(k,{value:a(o).gender,"onUpdate:value":t[3]||(t[3]=s=>a(o).gender=s),clearable:"",options:b},null,8,["value"])]),_:1}),n(a(g),{label:"状态","label-width":50},{default:r(()=>[n(k,{value:a(o).enable,"onUpdate:value":t[4]||(t[4]=s=>a(o).enable=s),clearable:"",options:[{label:"启用",value:1},{label:"停用",value:0}]},null,8,["value"])]),_:1})]),_:1},8,["query-items","get-data"])]),_:1})}}});export{de as default};