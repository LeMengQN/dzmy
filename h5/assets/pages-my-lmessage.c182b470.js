import{r as e,t as a,a as t,o as s,br as l,f as n,g as i,w as c,i as o,j as r,k as u,u as d,bs as m,l as g,m as f,p as h,q as p,F as x,bt as _,bu as k,v as b,ad as v,aY as C,ax as I,y,x as S,aq as w,aZ as A,af as T,a7 as j,C as z,a4 as L}from"./index.1a866322.js";import{_ as M}from"./u-icon.1541541b.js";import{o as U,r as B}from"./uni-app.es.5638d019.js";import{h as F,d as V}from"./methods.10d71805.js";import{u as q}from"./useState.33e874ff.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.0e6263ad.js";var D=$({__name:"lmessage",setup($){const D=$,P=L.host.api,R=q(["MerchantId","islogin","userinfo"]),{MerchantId:W,islogin:Y,userinfo:Z}=R,E=e({texareLen:0,shareState:!1,listText:[],styText:"",tdefultStatus:!0,imgArr:[],msgId:0,StudentId:0,UserId:0}),{texareLen:G,shareState:H,listText:J,styText:K,tdefultStatus:N,imgArr:O,msgId:Q,StudentId:X,UserId:ee}=a(E);function ae(e){E.texareLen=e.detail.value.length,e.detail.value.length<=0&&(E.tdefultStatus=!0)}function te(){v({title:"正在发表..."});let e=E.imgArr;console.log("发表按钮==>",e),function(e){let a=E.styText,t=e.map(((e,a)=>({name:"image"+a,uri:e})));console.log("图片列表==发表==>",e),A({url:`${P}Member/AddWishes`,files:e.length>0?t:[{name:"image",uri:"value"}],name:"file",formData:{StudentId:D.studentid,Contents:a,UserId:Z.value.id},header:{"content-type":"application/x-www-form-urlencoded"},success:e=>{T({success:e=>{setTimeout((()=>{j({url:`./index?MerchantId=${D.MerchantId}`})}),500)}})},fail:e=>{console.log("失败"),T()}})}(e)}function se(){let e=E.imgArr;console.log("图片列表A",e),C({count:6-e.length,success:a=>{let t=a.tempFilePaths;for(let s in t)e.push(t[s]);E.imgArr=e,console.log("图片列表B",e)}})}return F(),t(""),s((()=>{})),U((e=>{e.MerchantId?l().then((e=>{E.listText=e.Result})).catch((e=>{})):location.replace("https://appwx.xuezhilian.com/xzb/index.html#/pages/error/404")})),(e,a)=>{const t=I,s=y,l=o,v=B(S("u-icon"),M),C=z,A=w;return n(),i(l,{class:"page"},{default:c((()=>[r(' <view class="nvbar">\n            <image src="/static/shm/ledt.png" @click="clickbk"></image>\n            <text>设置寄语</text>\n            <button :disabled="texareLen <= 0 && imgArr.length <= 0"\n                :class="texareLen <= 0 && imgArr.length <= 0 ? \'\' : \'subred\'" @click="clSubmit">发表</button>\n        </view> '),u(l,{class:"textfiled"},{default:c((()=>[u(t,{"auto-height":"",placeholder:"请输入你要写给孩子的寄语",class:"textarea",maxlength:"80",onInput:ae,modelValue:d(K),"onUpdate:modelValue":a[0]||(a[0]=e=>m(K)?K.value=e:null)},null,8,["modelValue"]),u(l,{class:"wbtext"},{default:c((()=>[r(' <image src="/static/shm/xiaolian.png"></image> '),u(s,null,{default:c((()=>[g(f(d(G))+"/80",1)])),_:1})])),_:1}),d(N)?(n(),i(l,{key:0,class:"tdefult",onClick:a[1]||(a[1]=e=>H.value=!0)},{default:c((()=>[r(' <image src="/static/img5/mylist_b.png"></image> '),u(v,{name:"edit-pen",color:"#303133",size:"28"}),u(s,null,{default:c((()=>[g("默认寄语")])),_:1})])),_:1})):r("v-if",!0),u(l,{class:"flxadd"},{default:c((()=>[d(O).length<=0?(n(),i(l,{key:0,class:"tpicture",onClick:se},{default:c((()=>[r(' <image src="/static/shm/camera.png" mode="widthFix"></image> '),u(v,{name:"camera",color:"#303133",size:"60"}),u(s,null,{default:c((()=>[g("上传图片")])),_:1})])),_:1})):(n(),i(l,{key:1,class:"hpice"},{default:c((()=>[(n(!0),h(x,null,p(d(O),((e,a)=>(n(),i(l,{class:"scBtt",key:a},{default:c((()=>[u(C,{src:e,mode:"center",class:"imgcc",onClick:a=>{V([e],0)}},null,8,["src","onClick"]),u(v,{name:"close-circle-fill",color:"#303133",size:"28",class:"imgvv",onClick:e=>function(e){E.imgArr.splice(e,1)}(a)},null,8,["onClick"]),r(' <image src="../../../static/shm/des.png"></image> ')])),_:2},1024)))),128)),_(u(l,{class:"addBtt",onClick:se},{default:c((()=>[u(v,{name:"plus",color:"#303133",size:"50"}),r(' <image src="../../../static/shm/add.png" mode=""></image> ')])),_:1},512),[[k,d(O).length<=5&&0!=d(O).length]])])),_:1}))])),_:1})])),_:1}),_(u(l,{class:"shade",onClick:a[2]||(a[2]=e=>H.value=!1)},null,512),[[k,d(H)]]),u(l,{class:b(["share-item",d(H)?"share-show":"share-item"])},{default:c((()=>[u(l,{class:"navbar-b"},{default:c((()=>[g("选择默认寄语")])),_:1}),(n(!0),h(x,null,p(d(J),((e,a)=>(n(),i(l,{class:"remarks",onClick:e=>function(e){console.log("index",e),E.styText=E.listText[e].Contents,E.tdefultStatus=!1,E.texareLen=E.styText.length,E.shareState=!1}(a),key:a},{default:c((()=>[g(f(e.Contents),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["class"]),u(A,{disabled:d(G)<=0&&d(O).length<=0,class:b(d(G)<=0&&d(O).length<=0?"":"subred"),onClick:te},{default:c((()=>[g("发表")])),_:1},8,["disabled","class"])])),_:1})}}},[["__scopeId","data-v-027c6186"]]);export{D as default};