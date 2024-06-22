import{_ as B}from"./CommonPage-rLncXs_U.js";import{a as u}from"./api-dlbmOrbA.js";import{v as D,l as _,o as z,z as E,A as M,B as o,I as t,C as a,ao as c,D as f,aX as P,aY as F,J as L,j as d}from"./index-FSu8gHql.js";import{u as V}from"./useCrud-DRFOek-k.js";import{_ as T}from"./index-EPV7ADd1.js";import{_ as y}from"./QueryItem-Dz0aDWBn.js";import{_ as j,b as J}from"./useForm-B1ayDa3m.js";import{N as g}from"./Switch-Bk22oQWH.js";import{_ as O}from"./Input-jCXheb0X.js";import{a as X}from"./Select-MUj_eR3D.js";import{_ as Y}from"./Tree-LOddCHJz.js";import"./TheFooter-C3AwpGLM.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./AppCard-DnAyKcI0.js";import"./Checkbox-B6Uw2ANR.js";import"./Dropdown-QqBKkOMY.js";import"./create-NuVKXVtx.js";import"./Eye-Dze2fAu3.js";import"./download-sglA049O.js";import"./Tag-Ds8WaFF4.js";const G=L("i",{class:"i-material-symbols:add mr-4 text-18"},null,-1),fe=Object.assign({name:"RoleMgt"},{__name:"index",setup(H){const h=D(),m=_(null),i=_({});z(()=>{var e;(e=m.value)==null||e.handleSearch()});const{modalRef:k,modalFormRef:v,modalAction:x,modalForm:s,handleAdd:U,handleDelete:R,handleEdit:C}=V({name:"角色",doCreate:u.create,doDelete:u.delete,doUpdate:u.update,initForm:{enable:!0},refresh:(e,l)=>{var r;return(r=m.value)==null?void 0:r.handleSearch(l)}}),I=[{title:"角色名",key:"name"},{title:"角色编码",key:"code"},{title:"状态",key:"enable",render:e=>d(g,{size:"small",rubberBand:!1,value:e.enable,loading:!!e.enableLoading,disabled:e.code==="SUPER_ADMIN",onUpdateValue:()=>N(e)},{checked:()=>"启用",unchecked:()=>"停用"})},{title:"操作",key:"actions",width:320,align:"right",fixed:"right",render(e){return[d(c,{size:"small",type:"primary",secondary:!0,onClick:()=>h.push({path:`/pms/role/user/${e.id}`,query:{roleName:e.name}})},{default:()=>"分配用户",icon:()=>d("i",{class:"i-fe:user-plus text-14"})}),d(c,{size:"small",type:"primary",style:"margin-left: 12px;",disabled:e.code==="SUPER_ADMIN",onClick:()=>C(e)},{default:()=>"编辑",icon:()=>d("i",{class:"i-material-symbols:edit-outline text-14"})}),d(c,{size:"small",type:"error",style:"margin-left: 12px;",disabled:e.code==="SUPER_ADMIN",onClick:()=>R(e.id)},{default:()=>"删除",icon:()=>d("i",{class:"i-material-symbols:delete-outline text-14"})})]}}];async function N(e){var l;e.enableLoading=!0;try{await u.update({id:e.id,enable:!e.enable}),e.enableLoading=!1,$message.success("操作成功"),(l=m.value)==null||l.handleSearch()}catch{e.enableLoading=!1}}const b=_([]);return u.getAllPermissionTree().then(({data:e=[]})=>b.value=e),(e,l)=>{const r=O,$=X,p=j,q=Y,A=J,S=B;return E(),M(S,null,{action:o(()=>[t(a(c),{type:"primary",onClick:l[0]||(l[0]=n=>a(U)())},{default:o(()=>[G,f(" 新增角色 ")]),_:1})]),default:o(()=>[t(a(T),{ref_key:"$table",ref:m,"query-items":a(i),"onUpdate:queryItems":l[3]||(l[3]=n=>P(i)?i.value=n:null),"scroll-x":1200,columns:I,"get-data":a(u).read},{default:o(()=>[t(a(y),{label:"角色名","label-width":50},{default:o(()=>[t(r,{value:a(i).name,"onUpdate:value":l[1]||(l[1]=n=>a(i).name=n),type:"text",placeholder:"请输入角色名",clearable:""},null,8,["value"])]),_:1}),t(a(y),{label:"状态","label-width":50},{default:o(()=>[t($,{value:a(i).enable,"onUpdate:value":l[2]||(l[2]=n=>a(i).enable=n),clearable:"",options:[{label:"启用",value:1},{label:"停用",value:0}]},null,8,["value"])]),_:1})]),_:1},8,["query-items","get-data"]),t(a(F),{ref_key:"modalRef",ref:k,width:"520px"},{default:o(()=>[t(A,{ref_key:"modalFormRef",ref:v,"label-placement":"left","label-align":"left","label-width":80,model:a(s)},{default:o(()=>[t(p,{label:"角色名",path:"name",rule:{required:!0,message:"请输入角色名",trigger:["input","blur"]}},{default:o(()=>[t(r,{value:a(s).name,"onUpdate:value":l[4]||(l[4]=n=>a(s).name=n)},null,8,["value"])]),_:1}),t(p,{label:"角色编码",path:"code",rule:{required:!0,message:"请输入角色编码",trigger:["input","blur"]}},{default:o(()=>[t(r,{value:a(s).code,"onUpdate:value":l[5]||(l[5]=n=>a(s).code=n),disabled:a(x)!=="add"},null,8,["value","disabled"])]),_:1}),t(p,{label:"权限",path:"permissionIds"},{default:o(()=>[t(q,{"key-field":"id","label-field":"name",selectable:!1,data:a(b),"checked-keys":a(s).permissionIds,"on-update:checked-keys":n=>a(s).permissionIds=n,checkable:"","check-on-click":"","default-expand-all":"",class:"cus-scroll max-h-200 w-full"},null,8,["data","checked-keys","on-update:checked-keys"])]),_:1}),t(p,{label:"状态",path:"enable"},{default:o(()=>[t(a(g),{value:a(s).enable,"onUpdate:value":l[6]||(l[6]=n=>a(s).enable=n)},{checked:o(()=>[f(" 启用 ")]),unchecked:o(()=>[f(" 停用 ")]),_:1},8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},512)]),_:1})}}});export{fe as default};
