import{_ as T}from"./TheFooter-C3AwpGLM.js";import{b1 as y,aV as U,l as w,b2 as x,b3 as V,F as $,J as n,D as b,E as D,C as t,I as r,B as c,b4 as C,aK as K,ao as L,z as q,v as F,w as E}from"./index-FSu8gHql.js";import{t as J}from"./common-Dwkwm51W.js";import{_ as z}from"./Checkbox-B6Uw2ANR.js";import{_ as A}from"./Input-jCXheb0X.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./Eye-Dze2fAu3.js";const M="/test-admin/assets/login_banner-BD2eW0TC.webp",P="/test-admin/assets/logo-Bw3FJMyu.png",W={toggleRole:u=>y.post("/auth/role/toggle",u),login:u=>y.post("/auth/login",u,{noNeedToken:!0}),getUser:()=>y.get("/user/detail")},j={class:"wh-full flex-col bg-[url(@/assets/images/login_bg.webp)] bg-cover"},G={class:"m-auto max-w-700 min-w-345 f-c-c rounded-8 bg-opacity-20 bg-cover p-12 card-shadow auto-bg"},H=n("div",{class:"hidden w-380 px-20 py-35 md:block"},[n("img",{src:M,class:"w-full",alt:"login_banner"})],-1),O={class:"w-320 flex-col px-20 py-32"},X={class:"f-c-c text-24 text-#6a6a6a font-normal"},Y=n("img",{src:P,class:"mr-12 h-50"},null,-1),Z=n("i",{class:"i-fe:user mr-12 opacity-20"},null,-1),Q=n("i",{class:"i-fe:lock mr-12 opacity-20"},null,-1),ee={class:"mt-20 flex items-center"},se=n("i",{class:"i-fe:key mr-12 opacity-20"},null,-1),te=["src"],oe={class:"mt-20 flex items-center"},de={__name:"index",setup(u){const B=U(),k=F(),d=E(),S="Panda",o=w({username:"",password:""}),_=w(""),m=J(()=>{_.value=`/api/auth/captcha?${Date.now()}`},500),f=x.get("loginInfo");f&&(o.value.username=f.username||"",o.value.password=f.password||""),m();function I(){o.value.username="admin",o.value.password="123456",p(!0)}const h=V("isRemember",!0),v=w(!1);async function p(i){const{username:e,password:l,captcha:g}=o.value;if(!e||!l)return $message.warning("请输入用户名和密码");if(!i&&!g)return $message.warning("请输入验证码");try{v.value=!0,$message.loading("正在验证，请稍后...",{key:"login"});const{data:a}=await W.login({username:e,password:l.toString(),captcha:g,isQuick:i});h.value?x.set("loginInfo",{username:e,password:l}):x.remove("loginInfo"),N(a)}catch(a){(a==null?void 0:a.code)===10003&&m(),$message.destroy("login"),console.error(a)}v.value=!1}async function N(i={}){B.setToken(i),$message.loading("登录中...",{key:"login"});try{if($message.success("登录成功",{key:"login"}),d.query.redirect){const e=d.query.redirect;delete d.query.redirect,k.push({path:e,query:d.query})}else k.push("/")}catch(e){console.error(e),$message.destroy("login")}}return(i,e)=>{const l=A,g=z,a=L,R=T;return q(),$("div",j,[n("div",G,[H,n("div",O,[n("h2",X,[Y,b(" "+D(t(S)),1)]),r(l,{value:t(o).username,"onUpdate:value":e[0]||(e[0]=s=>t(o).username=s),autofocus:"",class:"mt-32 h-40 items-center",placeholder:"请输入用户名",maxlength:20},{prefix:c(()=>[Z]),_:1},8,["value"]),r(l,{value:t(o).password,"onUpdate:value":e[1]||(e[1]=s=>t(o).password=s),class:"mt-20 h-40 items-center",type:"password","show-password-on":"mousedown",placeholder:"请输入密码",maxlength:20,onKeydown:e[2]||(e[2]=C(s=>p(),["enter"]))},{prefix:c(()=>[Q]),_:1},8,["value"]),n("div",ee,[r(l,{value:t(o).captcha,"onUpdate:value":e[3]||(e[3]=s=>t(o).captcha=s),class:"h-40 items-center",palceholder:"请输入验证码",maxlength:4,onKeydown:e[4]||(e[4]=C(s=>p(),["enter"]))},{prefix:c(()=>[se]),_:1},8,["value"]),t(_)?(q(),$("img",{key:0,src:t(_),alt:"验证码",height:"40",class:"ml-12 w-80 cursor-pointer",onClick:e[5]||(e[5]=(...s)=>t(m)&&t(m)(...s))},null,8,te)):K("",!0)]),r(g,{class:"mt-20",checked:t(h),label:"记住我","on-update:checked":s=>h.value=s},null,8,["checked","on-update:checked"]),n("div",oe,[r(a,{class:"h-40 flex-1 rounded-5 text-16",type:"primary",ghost:"",onClick:e[6]||(e[6]=s=>I())},{default:c(()=>[b(" 一键体验 ")]),_:1}),r(a,{class:"ml-32 h-40 flex-1 rounded-5 text-16",type:"primary",loading:t(v),onClick:e[7]||(e[7]=s=>p())},{default:c(()=>[b(" 登录 ")]),_:1},8,["loading"])])])]),r(R,{class:"py-12"})])}}};export{de as default};
