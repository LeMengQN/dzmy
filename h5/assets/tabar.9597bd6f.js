import{a as t,r as e,o as a,f as n,g as s,w as i,p as o,q as c,k as l,l as r,m as d,v as p,u,F as g,n as h,a7 as m,C as f,y as x,i as _}from"./index.1a866322.js";import{i as P,j as I}from"./methods.10d71805.js";import{u as b}from"./useState.33e874ff.js";/* empty css                                                          */import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";var M=y({__name:"tabar",props:{current:Number,disable:Boolean},emits:["ready"],setup(y,{emit:M}){const j=y,v=b(["MerchantId"]),{MerchantId:B}=v;let k=B.value;t(100);let w=e([{iconPath:"/static/icon/index.png",selectedIconPath:"/static/icon/index_fill.png",text:"首页",midButton:!1,pagePath:"/pages/index/index?MerchantId="+k},{iconPath:"/static/icon/course.png",selectedIconPath:"/static/icon/course_fill.png",text:"选课",midButton:!1,pagePath:"/pages/course/index?MerchantId="+k},{iconPath:"/static/icon/gift.png",selectedIconPath:"/static/icon/gift_fill.png",text:"活动",midButton:!1,pagePath:"/pages/gift/index?MerchantId="+k},{iconPath:"/static/icon/notice.png",selectedIconPath:"/static/icon/notice_fill.png",text:"公告",midButton:!1,pagePath:"/pages/notice/index?MerchantId="+k},{iconPath:"/static/icon/my.png",selectedIconPath:"/static/icon/my_fill.png",text:"我的",midButton:!1,pagePath:"/pages/my/index?MerchantId="+k}]);return a((()=>{console.log("页面准备好时",Math.floor(P("headId"))),M("ready",Math.floor(P("headId")))})),(t,e)=>{const a=f,P=x,b=_;return n(),s(b,{class:"tabar-box top flex justify-between align-center",style:h("android"==u(I)()?"padding-bottom: 14rpx;":"padding - bottom: constant(safe - area - inset - bottom);"),id:"headId"},{default:i((()=>[(n(!0),o(g,null,c(u(w),((t,e)=>(n(),s(b,{class:"tabar-item w-20 flex flex-column justify-center align-center",key:e,onClick:a=>function(t,e){let a=t.pagePath;e==j.current&&j.disable||(console.log("组件传值==>",t.pagePath,j.current,j.disable),m({url:a}))}(t,e)},{default:i((()=>[l(a,{class:"tabar-item-img",src:j.current==e?t.selectedIconPath:t.iconPath},null,8,["src"]),l(P,{class:p(["font-smallest",j.current==e?"color-main":"text-body"])},{default:i((()=>[r(d(t.text),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["style"])}}},[["__scopeId","data-v-0a4b5d12"]]);export{M as t};