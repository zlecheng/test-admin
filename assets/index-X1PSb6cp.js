import{_ as k}from"./CommonPage-D-IPf08m.js";import{l as w,z as $,A as v,B as e,I as t,D as a,C as f,al as C,J as i,aE as x,ao as h,a_ as B,ba as b}from"./index-DNQY-kEr.js";import{s as d}from"./common-d87u_9QJ.js";import"./AppCard-Bezl2fFY.js";const D=i("i",{class:"i-material-symbols:add mr-4 text-18"},null,-1),N=i("i",{class:"i-material-symbols:delete-outline mr-4 text-18"},null,-1),z=i("i",{class:"i-material-symbols:edit-outline mr-4 text-18"},null,-1),I=i("i",{class:"i-majesticons:eye-line mr-4 text-18"},null,-1),M=i("i",{class:"i-mi:delete mr-4"},null,-1),V={class:"i-mdi:login mr-4"},j={__name:"index",setup(A){const m=function(){$dialog.confirm({content:"确认删除？",confirm(){$message.success("删除成功")},cancel(){$message.warning("已取消")}})},r=w(!1);async function p(){r.value=!0,$message.loading("登录中...",{key:"login"}),await d(2e3),$message.error("登录失败",{key:"login"}),await d(500),$message.loading("正在尝试重新登录...",{key:"login"}),await d(2e3),$message.success("登录成功",{key:"login"}),r.value=!1}function g(){$message.error(["用户名不能为空！","密码不能为空！","密码必须大于6位！"])}function u(c){$notification[c]({content:"说点啥呢",meta:"想不出来",duration:2500,keepAliveOnHover:!0})}return(c,l)=>{const n=h,o=B,s=b,y=k;return $(),v(y,{"show-footer":""},{default:e(()=>[t(o,{size:"large"},{default:e(()=>[t(s,{title:"按钮 Button"},{default:e(()=>[t(o,null,{default:e(()=>[t(n,null,{default:e(()=>[a("Default")]),_:1}),t(n,{type:"tertiary"},{default:e(()=>[a(" Tertiary ")]),_:1}),t(n,{type:"primary"},{default:e(()=>[a(" Primary ")]),_:1}),t(n,{type:"info"},{default:e(()=>[a(" Info ")]),_:1}),t(n,{type:"success"},{default:e(()=>[a(" Success ")]),_:1}),t(n,{type:"warning"},{default:e(()=>[a(" Warning ")]),_:1}),t(n,{type:"error"},{default:e(()=>[a(" Error ")]),_:1})]),_:1})]),_:1}),t(s,{title:"带 Icon 的按钮"},{default:e(()=>[t(o,null,{default:e(()=>[t(n,{type:"info"},{default:e(()=>[D,a(" 新增 ")]),_:1}),t(n,{type:"error"},{default:e(()=>[N,a(" 删除 ")]),_:1}),t(n,{type:"warning"},{default:e(()=>[z,a(" 编辑 ")]),_:1}),t(n,{type:"primary"},{default:e(()=>[I,a(" 查看 ")]),_:1})]),_:1})]),_:1})]),_:1}),t(o,{size:"large","mt-30":""},{default:e(()=>[t(s,{"min-w-340":"",title:"通知 Notification"},{default:e(()=>[t(o,null,{default:e(()=>[t(n,{onClick:l[0]||(l[0]=_=>u("info"))},{default:e(()=>[a(" 信息 ")]),_:1}),t(n,{onClick:l[1]||(l[1]=_=>u("success"))},{default:e(()=>[a(" 成功 ")]),_:1}),t(n,{onClick:l[2]||(l[2]=_=>u("warning"))},{default:e(()=>[a(" 警告 ")]),_:1}),t(n,{onClick:l[3]||(l[3]=_=>u("error"))},{default:e(()=>[a(" 错误 ")]),_:1})]),_:1})]),_:1}),t(s,{"min-w-340":"",title:"确认弹窗 Dialog"},{default:e(()=>[t(n,{type:"error",onClick:m},{default:e(()=>[M,a(" 删除 ")]),_:1})]),_:1}),t(s,{"min-w-340":"",title:"消息提醒 Message"},{default:e(()=>[t(o,null,{default:e(()=>[t(n,{loading:f(r),type:"primary",onClick:p},{default:e(()=>[C(i("i",V,null,512),[[x,!f(r)]]),a(" 登录 ")]),_:1},8,["loading"]),t(n,{type:"error",onClick:g},{default:e(()=>[a(" 多个错误提醒 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{j as default};
