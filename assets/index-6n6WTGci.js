import{b1 as y,aV as N,l as w,b2 as x,b3 as R,F as $,J as n,D as k,E as U,C as t,I as r,B as c,b4 as q,aK as V,ao as D,z as C,v as K,w as T}from"./index-DNQY-kEr.js";import{t as E}from"./common-d87u_9QJ.js";import{_ as z}from"./Checkbox-Bb9_ewGo.js";import{_ as A}from"./Input-Czao590z.js";import"./Eye-5JV190Nb.js";const F="/test-admin/assets/login_banner-DPZ5rL-k.png",J="/test-admin/vite.svg",P={toggleRole:u=>y.post("/auth/role/toggle",u),login:u=>y.post("/auth/login",u,{noNeedToken:!0}),getUser:()=>y.get("/user/detail")},Z={class:"wh-full flex-col bg-[url(@/assets/images/login-bg.svg)] bg-cover"},j={class:"m-auto max-w-700 min-w-345 f-c-c rounded-8 bg-opacity-20 bg-cover p-12 card-shadow auto-bg"},G=n("div",{class:"hidden w-380 px-20 py-35 md:block"},[n("img",{src:F,class:"w-full",alt:"login_banner"})],-1),H={class:"w-320 flex-col px-20 py-32"},M={class:"f-c-c text-24 text-#6a6a6a font-normal"},O=n("img",{src:J,class:"mr-12 h-50"},null,-1),W=n("i",{class:"i-fe:user mr-12 opacity-20"},null,-1),X=n("i",{class:"i-fe:lock mr-12 opacity-20"},null,-1),Y={class:"mt-20 flex items-center"},Q=n("i",{class:"i-fe:key mr-12 opacity-20"},null,-1),ee=["src"],se={class:"mt-20 flex items-center"},re={__name:"index",setup(u){const S=N(),b=K(),d=T(),I="思钱想厚",o=w({username:"",password:""}),_=w(""),m=E(()=>{_.value=`https://mock.apipark.cn/m1/4694765-4346542-default/auth/captcha?${Date.now()}`},500),f=x.get("loginInfo");f&&(o.value.username=f.username||"",o.value.password=f.password||""),m();function B(){o.value.username="admin",o.value.password="123456",p(!0)}const h=R("isRemember",!0),v=w(!1);async function p(i){const{username:e,password:l,captcha:g}=o.value;if(!e||!l)return $message.warning("请输入用户名和密码");if(!i&&!g)return $message.warning("请输入验证码");try{v.value=!0,$message.loading("正在验证，请稍后...",{key:"login"});const{data:a}=await P.login({username:e,password:l.toString(),captcha:g,isQuick:i});h.value?x.set("loginInfo",{username:e,password:l}):x.remove("loginInfo"),L(a)}catch(a){(a==null?void 0:a.code)===10003&&m(),$message.destroy("login"),console.error(a)}v.value=!1}async function L(i={}){S.setToken(i),$message.loading("登录中...",{key:"login"});try{if($message.success("登录成功",{key:"login"}),d.query.redirect){const e=d.query.redirect;delete d.query.redirect,b.push({path:e,query:d.query})}else b.push("/")}catch(e){console.error(e),$message.destroy("login")}}return(i,e)=>{const l=A,g=z,a=D;return C(),$("div",Z,[n("div",j,[G,n("div",H,[n("h2",M,[O,k(" "+U(t(I)),1)]),r(l,{value:t(o).username,"onUpdate:value":e[0]||(e[0]=s=>t(o).username=s),autofocus:"",class:"mt-32 h-40 items-center",placeholder:"请输入用户名",maxlength:20},{prefix:c(()=>[W]),_:1},8,["value"]),r(l,{value:t(o).password,"onUpdate:value":e[1]||(e[1]=s=>t(o).password=s),class:"mt-20 h-40 items-center",type:"password","show-password-on":"mousedown",placeholder:"请输入密码",maxlength:20,onKeydown:e[2]||(e[2]=q(s=>p(),["enter"]))},{prefix:c(()=>[X]),_:1},8,["value"]),n("div",Y,[r(l,{value:t(o).captcha,"onUpdate:value":e[3]||(e[3]=s=>t(o).captcha=s),class:"h-40 items-center",palceholder:"请输入验证码",maxlength:4,onKeydown:e[4]||(e[4]=q(s=>p(),["enter"]))},{prefix:c(()=>[Q]),_:1},8,["value"]),t(_)?(C(),$("img",{key:0,src:t(_),alt:"验证码",height:"40",class:"ml-12 w-80 cursor-pointer",onClick:e[5]||(e[5]=(...s)=>t(m)&&t(m)(...s))},null,8,ee)):V("",!0)]),r(g,{class:"mt-20",checked:t(h),label:"记住我","on-update:checked":s=>h.value=s},null,8,["checked","on-update:checked"]),n("div",se,[r(a,{class:"h-40 flex-1 rounded-5 text-16",type:"primary",ghost:"",onClick:e[6]||(e[6]=s=>B())},{default:c(()=>[k(" 一键体验 ")]),_:1}),r(a,{class:"ml-32 h-40 flex-1 rounded-5 text-16",type:"primary",loading:t(v),onClick:e[7]||(e[7]=s=>p())},{default:c(()=>[k(" 登录 ")]),_:1},8,["loading"])])])])])}}};export{re as default};
