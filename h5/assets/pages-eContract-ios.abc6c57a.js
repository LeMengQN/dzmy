import{r as e,t,a as l,o as a,aG as o,bE as i,bF as n,f as s,g as c,w as u,i as d,j as r,bt as p,bu as h,k as m,u as b,l as f,m as g,n as y,bs as v,aD as x,bG as C,a0 as w,x as _,C as U,y as M,aE as S}from"./index.1a866322.js";import{_ as T}from"./u-button.9dd62910.js";import{o as k,r as F}from"./uni-app.es.5638d019.js";import{_ as P}from"./u-field.6c7fbccd.js";import{_ as V}from"./u-popup.ac74065a.js";import{_ as j}from"./u-modal.f80ad17e.js";import"./index.0e6263ad.js";import{P as D,b as I}from"./pdfh5.0d53b043.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.1541541b.js";var z=q({__name:"ios",setup(q){const z=e({resultUrl:"",dom:null,line:[],width:100,height:100,radius:0,qianSuccess:!1,title:"签署成功",content:"对方电子合同已同步,并已通过短信方式告知对方。",pdfh5:null,UserContract:!1,ContractStatus:!1,fileUrl:!1,isMobile:!0,phoneCode:"",btnDisabled:!1,dialogVisible:!1,btnTimer:60,Contract:"",Id:0,SecondMobile:"",FileUrl:"",value:null}),{resultUrl:R,dom:$,line:Q,width:W,height:X,radius:B,qianSuccess:E,title:G,content:H,pdfh5:L,UserContract:O,ContractStatus:A,fileUrl:N,isMobile:J,phoneCode:K,btnDisabled:Y,dialogVisible:Z,btnTimer:ee,Contract:te,Id:le,SecondMobile:ae,FileUrl:oe,value:ie}=t(z),ne=l(!0),se=l(!1),ce=l(!0),ue=l(!1),de=l("");let re;function pe(){ye(),se.value=!1,ue.value=!1}function he(e){}function me(e,t){let l=t.x-e.x,a=t.y-e.y;return Math.sqrt(l*l+a*a)}function be(e){console.log(e),z.line.push({points:[{time:(new Date).getTime(),x:e.touches[0].x,y:e.touches[0].y,dis:0}]});let t={x:e.touches[0].x,y:e.touches[0].y};z.currentPoint=t,ge(z.line[z.line.length-1]),ne.value=!1}function fe(e){let t={x:e.touches[0].x,y:e.touches[0].y};z.lastPoint=z.currentPoint,z.currentPoint=t,z.line[z.line.length-1].points.push({time:(new Date).getTime(),x:e.touches[0].x,y:e.touches[0].y,dis:me(z.currentPoint,z.lastPoint)}),ge(z.line[z.line.length-1])}function ge(e){let t,l,a,o,i,n,s,c,u=.5;var d=0;if(e.points.length>2){let h=e.points[e.points.length-3],m=e.points[e.points.length-2],b=e.points[e.points.length-1];s=m.x,c=m.y,t=h.x,a=h.y,l=b.x,o=b.y;var r;d=m.time-h.time+(b.time-m.time),r=m.dis+h.dis+b.dis;var p=z.dom;Math.min(d/r*z.linePressure+z.lineMin,z.lineMax),i=(s-Math.pow(.5,2)*t-Math.pow(u,2)*l)/.5,n=(c-Math.pow(.5,2)*a-Math.pow(u,2)*o)/.5,p.setLineCap("round"),p.beginPath(),p.setStrokeStyle("black"),p.setLineWidth(5),p.moveTo(t,a),p.quadraticCurveTo(i,n,l,o),p.stroke(),p.draw(!0)}}function ye(){ne.value=!0,z.dom.clearRect(0,0,1e3,1e3),z.dom.draw()}function ve(){console.log(555),x({canvasId:"designature",fileType:"png",width:Math.ceil(.4*z.width),height:Math.ceil(.3*z.height),destWidth:Math.ceil(.5*z.width),destHeight:Math.ceil(.4*z.height),quality:.5,success:function(e){z.dialogVisible=!0,re=e.tempFilePath,I(e.tempFilePath).then((e=>{console.log(e),de.value=e})).catch((e=>{console.error(e)}))},fail(e){console.log(e)}})}function xe(){C({url:`https://eduwx.xuezhilian.com/xzb/Contract/FXQsend?mobile=${z.SecondMobile}&type=3`,data:{mobile:z.SecondMobile,content:"",type:3},method:"POST",success:e=>{1e4===e.data.code?(w({icon:"none",title:"发送成功"}),z.btnDisabled=!0,Ce(),ce.value=!1):w({icon:"none",title:"发送失败"})},fail(){w({icon:"none",title:"请求失败"})}})}function Ce(){0==z.btnTimer?(z.btnDisabled=!1,z.btnTimer=60):(z.btnDisabled=!0,z.btnTimer--,setTimeout((function(){Ce()}),1e3))}function we(){if(z.phoneCode.length<=0)return void uni.$u.toast("请输入验证码！",1500);let e=window.btoa(unescape(encodeURIComponent(z.Id+"|xuezhilian")));console.log("用户签署===>",e),C({url:"https://eduwx.xuezhilian.com/xzb/Contract/UserContract",method:"POST",data:{UserSgin:re,iCode:e,SecondMobile:z.SecondMobile,Code:z.phoneCode},success:e=>{console.log("签署===>",e),"success"==e.data.Result&&200==e.statusCode?w({icon:"none",title:"签署成功",success(){ue.value=!1,z.UserContract=!0,z.ContractStatus=!0,setTimeout((()=>{z.dialogVisible=!1,z.qianSuccess=!0,se.value=!1}),400)}}):w({icon:"none",title:e.data.Message})},fail(){w({icon:"none",title:"请求失败"})}})}return a((()=>{})),k((e=>{o({success:e=>{z.width=e.windowWidth,z.height=e.windowHeight}}),z.dom=i("designature");let t=decodeURIComponent(atob(decodeURIComponent(e.Contract))),l=t.split("|")[0];z.Contract=t,z.Id=l,z.SecondMobile=t.split("|")[1],console.log("电子合同==>",l),function(e){n(e).then((e=>{const t=e.Result;if(t&&"object"==typeof t){let e=String.raw`${t.FileUrl}`.replace("D:\\wwwroot\\xzl\\wx\\ims\\wwwroot\\Content\\Upload\\ContractFile\\","https://imswx.xuezhilian.com/Content/Upload/ContractFile/");console.log("文件地址",e),z.FileUrl=t.FXQFileUrl,z.pdfh5=new D("#contractPdf",{renderType:"canvas",scale:1,pdfurl:t.FXQFileUrl}),z.pdfh5.on("complete",(function(e,t,l){console.log("状态："+e+"，信息："+t+"，耗时："+l+"毫秒，总页数："+this.totalNum)})),7==t.Status&&(z.ContractStatus=!0)}})).catch((e=>{}))}(l)})),(e,t)=>{const l=d,a=F(_("u-button"),T),o=U,i=M,n=S,x=F(_("u-field"),P),C=F(_("u-popup"),V),w=F(_("u-modal"),j);return s(),c(l,{class:"position-relative eContract"},{default:u((()=>[r(" PDF文件 "),p(m(l,{class:"contract"},{default:u((()=>[m(l,{class:"w-100"},{default:u((()=>[m(l,{id:"contractPdf"})])),_:1}),r(' <u-button v-if="FileUrl" class="w-90 contrac-btn" type="primary" :ripple="true"\r\n\t\t\t\t@click="signaBoxShow=PDFshow = true ">{{ContractStatus?\'已签署\':\'立即签署\'}}\r\n\t\t\t</u-button> '),b(oe)?(s(),c(a,{key:0,disabled:!b(A),class:"w-90 contrac-btn",type:"primary",ripple:!0,onClick:t[0]||(t[0]=e=>se.value=ue.value=!0)},{default:u((()=>[f(g(b(A)?"已签署":"立即签署"),1)])),_:1},8,["disabled"])):r("v-if",!0)])),_:1},512),[[h,!ue.value]]),r(" 签名横屏 "),b(oe)?p((s(),c(l,{key:1,class:"signa",style:y(`width: ${b(W)}px;height: ${b(X)}px;`)},{default:u((()=>[m(l,{class:"box"},{default:u((()=>[p(m(o,{src:de.value},null,8,["src"]),[[h,!1]]),m(l,{class:"position-relative"},{default:u((()=>[m(l,{class:"backToast"},{default:u((()=>[m(i,{class:"tip"},{default:u((()=>[f("请你在此手动签写自己的签章，签写操作完毕点击签署按钮")])),_:1}),m(l,null,{default:u((()=>[f("请本人签名")])),_:1})])),_:1}),m(n,{class:"canvas","disable-scroll":!0,hidpi:!1,style:y({height:Math.ceil(.8*b(X))+"px"}),"canvas-id":"designature",onTouchstart:be,onTouchmove:fe,onTouchend:he},null,8,["style"])])),_:1}),m(l,{class:"bottomBox flex align-center justify-around",style:y({height:Math.ceil(.2*b(X))+"px"})},{default:u((()=>[m(a,{class:"btn",onClick:pe,ripple:!0,shape:"circle"},{default:u((()=>[f("取消")])),_:1}),m(a,{disabled:b(O),class:"btn",onClick:ye,ripple:!0,shape:"circle"},{default:u((()=>[f("重写 ")])),_:1},8,["disabled"]),r(' <u-button :disabled="movesStu" class="btn" @click="save" :ripple="true" shape="circle"\r\n\t\t\t\t\t\t\ttype="primary">下一步</u-button> '),m(a,{disabled:b(O)||ne.value,class:"btn",ripple:!0,shape:"circle",type:"primary",onClick:ve},{default:u((()=>[f("下一步")])),_:1},8,["disabled"])])),_:1},8,["style"])])),_:1})])),_:1},8,["style"])),[[h,se.value]]):(s(),c(l,{key:0,class:"dashd-box"},{default:u((()=>[m(l,{class:"dashd-con"},{default:u((()=>[f(" 文件无效 ")])),_:1})])),_:1})),m(C,{modelValue:b(Z),"onUpdate:modelValue":t[5]||(t[5]=e=>v(Z)?Z.value=e:null),mode:"center"},{default:u((()=>[m(l,{class:"pop-up"},{default:u((()=>[m(l,{class:"popup-tit"},{default:u((()=>[f(" 提示 ")])),_:1}),m(x,{disabled:"",required:"",clearable:"",modelValue:b(ae),"onUpdate:modelValue":t[1]||(t[1]=e=>v(ae)?ae.value=e:null),label:"手机号",placeholder:"请填写手机号"},null,8,["modelValue"]),m(x,{required:"",clearable:"",modelValue:b(K),"onUpdate:modelValue":t[2]||(t[2]=e=>v(K)?K.value=e:null),maxlength:"6",label:"验证码",placeholder:"请填写验证码"},{right:u((()=>[m(a,{disabled:b(Y),size:"mini",type:"success",onClick:xe},{default:u((()=>[f(" 发送验证码"+g(b(Y)?b(ee):""),1)])),_:1},8,["disabled"])])),_:1},8,["modelValue"]),m(l,{class:"pop-menu"},{default:u((()=>[m(a,{onClick:t[3]||(t[3]=e=>Z.value=!1)},{default:u((()=>[f("取 消")])),_:1}),m(a,{disabled:ce.value,type:"primary",onClick:t[4]||(t[4]=t=>e.$u.throttle(we,500))},{default:u((()=>[f("确 定 ")])),_:1},8,["disabled"]),r(' <u-button type="primary" @click="saveAsImg">确 定</u-button> ')])),_:1})])),_:1})])),_:1},8,["modelValue"]),m(w,{modelValue:b(E),"onUpdate:modelValue":t[6]||(t[6]=e=>v(E)?E.value=e:null),content:b(H)},null,8,["modelValue","content"])])),_:1})}}},[["__scopeId","data-v-4806b1e3"]]);export{z as default};