var _=(u,e,t)=>new Promise((r,n)=>{var i=o=>{try{a(t.next(o))}catch(s){n(s)}},c=o=>{try{a(t.throw(o))}catch(s){n(s)}},a=o=>o.done?r(o.value):Promise.resolve(o.value).then(i,c);a((t=t.apply(u,e)).next())});import{d,ax as f,a4 as g,v as m,b as p,A as y,a6 as v,aK as F,a8 as h,a5 as P,D as l,F as w,G as B,y as E,x}from"./bd6eb560.js";import{C as D}from"./8c65bef6.js";import{C as O}from"./9577d5ce.js";import{u as S,_ as A}from"./f30bbecb.js";import{_ as C}from"./0ee26181.js";import"./ef4972e4.js";import"./99612e35.js";import"./ee68e9ae.js";import"./557631f1.js";const T={class:"page_content"},k=d({__name:"Online",setup(u){const e=S(),{getOnlinePlayers:t}=f(e);var r=t;const n=()=>_(this,null,function*(){e.onlinePlayers||(v({duration:0,message:"\u52A0\u8F7D\u6570\u636E\u4E2D...",loadingType:"spinner"}),yield e.ShowPlayers(),F(),e.getOnlinePlayers?(""+e.getOnlinePlayers.toString(),h("\u52A0\u8F7D\u73A9\u5BB6\u6570\u636E\u6210\u529F")):e.getRconInfo.error&&(console.error("Failed to ShowPlayers:",e.getError),P("\u52A0\u8F7D\u73A9\u5BB6\u6570\u636E\u5931\u8D25: "+e.getError)))});return g(()=>{n()}),(i,c)=>{const a=O,o=D;return l(),m("div",T,[p(A),p(o,{inset:"",title:"\u5F53\u524D\u5728\u7EBF"},{default:y(()=>[(l(!0),m(w,null,B(x(r),s=>(l(),E(a,{key:s.playeruid,title:s.name,value:s.playeruid,label:s.steamid},null,8,["title","value","label"]))),128))]),_:1})])}}});const j=C(k,[["__scopeId","data-v-e856c017"]]);export{j as default};
