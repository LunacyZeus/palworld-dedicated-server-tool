var m=(i,t,o)=>new Promise((e,n)=>{var l=a=>{try{s(o.next(a))}catch(u){n(u)}},c=a=>{try{s(o.throw(a))}catch(u){n(u)}},s=a=>a.done?e(a.value):Promise.resolve(a.value).then(l,c);s((o=o.apply(i,t)).next())});import{d as v,r as _,O as b,y as C,b as r,C as d,Z as p,_ as A,b7 as g,a0 as E,D as B,P as y,H as x}from"./e1cebf43.js";import{C as w}from"./ff51593b.js";import"./926c5ea7.js";import{F as h}from"./0286c5d0.js";/* empty css        */import{_ as I}from"./cff6a0f4.js";import{u as R}from"./9bc92a61.js";import{F as T}from"./394369bc.js";import{_ as V}from"./0ee26181.js";import"./e28c11a8.js";import"./1484675b.js";import"./cdbaf723.js";import"./bbfea913.js";const S={style:{margin:"16px"}},k=v({__name:"BroadCast",setup(i){const t=_(""),o=_(!1),e=R(),n=()=>m(this,null,function*(){yield e.SendBroadCast({broadCast:t.value}),g(),o.value=!1,e.getRconInfo.broadCast?(""+e.getRconInfo.broadCast,E("\u53D1\u9001\u5E7F\u64AD\u6210\u529F: "+e.getRconInfo.broadCast)):e.getRconInfo.error&&(console.error("Failed to send broadcast:",e.getRconInfo.error),p("\u53D1\u9001\u5E7F\u64AD\u5931\u8D25: "+e.getRconInfo.error))}),l=c=>{if(o.value=!0,t.value==""){p("\u5E7F\u64AD\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"),o.value=!1;return}A({duration:0,message:"\u53D1\u9001\u5E7F\u64AD\u4E2D...",loadingType:"spinner"}),n()};return(c,s)=>{const a=h,u=w,f=b,D=T;return B(),C("div",null,[r(I),r(D,{onSubmit:l},{default:d(()=>[r(u,{inset:"",style:{margin:"6px"},title:"\u670D\u52A1\u5668\u5E7F\u64AD"},{default:d(()=>[r(a,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=F=>t.value=F),rows:"3",autosize:"",label:"\u5E7F\u64AD",type:"textarea",maxlength:"50",name:"broadCast",placeholder:"\u8BF7\u8F93\u5165\u670D\u52A1\u7AEF\u53D1\u9001\u7684\u5E7F\u64AD(\u4E0D\u80FD\u6709\u7A7A\u683C\u548C\u4E2D\u6587)","show-word-limit":""},null,8,["modelValue"])]),_:1}),y("div",S,[r(f,{round:"",block:"",type:"primary",disabled:o.value,"native-type":"submit"},{default:d(()=>[x(" \u53D1\u9001\u5E7F\u64AD")]),_:1},8,["disabled"])])]),_:1})])}}});const M=V(k,[["__scopeId","data-v-5c3dc772"]]);export{M as default};