var c=(r,s,e)=>new Promise((t,n)=>{var a=o=>{try{h(e.next(o))}catch(f){n(f)}},l=o=>{try{h(e.throw(o))}catch(f){n(f)}},h=o=>o.done?t(o.value):Promise.resolve(o.value).then(a,l);h((e=e.apply(r,s)).next())});import{d,l as p,D as I,y as g,A as i,H as y,J as _,x as u,b as m,aq as v,S as P,L as S,av as C,aw as R}from"./9f9d0c30.js";import{N as w}from"./bad1ecfb.js";import{I as B}from"./eee23db8.js";import{C as k}from"./1031c202.js";import{s as N,a as b,i as x,r as L}from"./c0355541.js";const H=d({__name:"NavBar",setup(r){const s=P(),e=S(),t=p(()=>e.meta.title);return(n,a)=>{const l=w;return I(),g(l,{onClickLeft:u(s).back},{title:i(()=>[y(_(u(t)),1)]),left:i(()=>[m(u(B),null,{default:i(()=>[m(u(k))]),_:1})]),right:i(()=>[v(n.$slots,"right")]),_:3},8,["onClickLeft"])}}}),O=C({id:"app-rcon",state:()=>({error:"",result:"",rconInfo:null,serverInfo:null,onlinePlayers:null}),getters:{getError(){return this.error||""},getResult(){return this.result||""},getRconInfo(){return this.rconInfo||{}},getServerInfo(){return this.serverInfo},getOnlinePlayers(){return this.onlinePlayers||[]}},actions:{setRconInfo(r){this.rconInfo=r},setServerInfo(r){this.serverInfo=r},setOnlinePlayers(r){this.onlinePlayers=r},SendBroadCast(r){return c(this,null,function*(){return new Promise((s,e)=>{N(r).then(t=>{let n={broadCast:"",error:""};const a=t.message||null;(t.code||404)==200?n=t.result:n.error=a,this.setRconInfo(n),s(t)}).catch(t=>{this.error=t,e(t)})})})},ShowPlayers(){return c(this,null,function*(){return new Promise((r,s)=>{b().then(e=>{this.setOnlinePlayers(e.result||null),r(e)}).catch(e=>{this.error=e,s(e)})})})},Info(){return c(this,null,function*(){return new Promise((r,s)=>{x().then(e=>{this.setServerInfo(e.result||null),r(e)}).catch(e=>{this.error=e,s(e)})})})},Restart(r){return c(this,null,function*(){return new Promise((s,e)=>{L(r).then(t=>{const n=t.message||null;(t.code||404)==200?this.result=t.result:this.error=n,s(t)}).catch(t=>{this.error=t,e(t)})})})}}});function J(){return O(R)}export{H as _,J as u};