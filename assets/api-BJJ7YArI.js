import{b1 as r}from"./index-DNQY-kEr.js";const t={create:e=>r.post("/role",e),read:(e={})=>r.get("/role/page",{params:e}),update:e=>r.patch(`/role/${e.id}`,e),delete:e=>r.delete(`/role/${e}`),getAllPermissionTree:()=>r.get("/permission/tree"),getAllUsers:(e={})=>r.get("/user",{params:e}),addRoleUsers:(e,s)=>r.patch(`/role/users/add/${e}`,s),removeRoleUsers:(e,s)=>r.patch(`/role/users/remove/${e}`,s)};export{t as a};
