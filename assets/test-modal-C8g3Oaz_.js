import{_ as $}from"./CommonPage-rLncXs_U.js";import{l as x,aW as c,z as y,A as w,B as t,I as s,D as B,C as n,aY as i,aX as C,J as T,E as h,ao as M}from"./index-FSu8gHql.js";import{s as p}from"./common-Dwkwm51W.js";import{_ as N}from"./Input-jCXheb0X.js";import"./TheFooter-C3AwpGLM.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./AppCard-DnAyKcI0.js";import"./Eye-Dze2fAu3.js";const J={__name:"test-modal",setup(V){const o=x(""),[l,r]=c();function _(){var a;(a=l.value)==null||a.open({title:"第一个弹窗",width:"600px",okText:"再弹个窗",cancelText:"关闭",async onOk(){return o.value?(r.value=!0,$message.loading("正在提交...",{key:"modal1"}),await p(1e3),r.value=!1,$message.success("提交成功",{key:"modal1"}),f(),!1):($message.warning("请输入内容"),!1)},onCancel(e){$message.info(e??"已取消")}})}const[m,u]=c();function f(){var a;(a=m.value)==null||a.open({cancelText:"关闭当前",okText:"关闭所有弹窗",width:"400px",async onOk(){var e;u.value=!0,$message.loading("正在关闭...",{key:"modal2"}),await p(1e3),u.value=!1,(e=l.value)==null||e.close(),$message.success("已关闭",{key:"modal2"})}})}return(a,e)=>{const d=M,k=N,g=$;return y(),w(g,{"show-footer":""},{default:t(()=>[s(d,{type:"primary",onClick:_},{default:t(()=>[B(" 打开第一个弹个窗 ")]),_:1}),s(n(i),{ref_key:"$modal1",ref:l},{default:t(()=>[s(k,{value:n(o),"onUpdate:value":e[0]||(e[0]=v=>C(o)?o.value=v:null)},null,8,["value"])]),_:1},512),s(n(i),{ref_key:"$modal2",ref:m,title:"上一个弹窗提交的内容"},{default:t(()=>[T("h2",null,h(n(o)),1)]),_:1},512)]),_:1})}}};export{J as default};
