import{c as k,n as m,t as R,d as w,r as A,a as C,b as a,M as s,N,I as P,g as b,w as L}from"./0cbe59eb.js";const[S,t]=k("nav-bar"),y={title:String,fixed:Boolean,zIndex:m,border:R,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var E=w({name:S,props:y,emits:["clickLeft","clickRight"],setup(e,{emit:l,slots:r}){const i=A(),o=C(i,t),f=n=>l("clickLeft",n),d=n=>l("clickRight",n),h=()=>r.left?r.left():[e.leftArrow&&a(P,{class:t("arrow"),name:"arrow-left"},null),e.leftText&&a("span",{class:t("text")},[e.leftText])],g=()=>r.right?r.right():a("span",{class:t("text")},[e.rightText]),c=()=>{const{title:n,fixed:x,border:u,zIndex:v}=e,T=b(v),B=e.leftArrow||e.leftText||r.left,I=e.rightText||r.right;return a("div",{ref:i,style:T,class:[t({fixed:x}),{[N]:u,"van-safe-area-top":e.safeAreaInsetTop}]},[a("div",{class:t("content")},[B&&a("div",{class:[t("left"),s],onClick:f},[h()]),a("div",{class:[t("title"),"van-ellipsis"]},[r.title?r.title():n]),I&&a("div",{class:[t("right"),s],onClick:d},[g()])])])};return()=>e.fixed&&e.placeholder?o(c):c()}});const _=L(E);export{_ as N};