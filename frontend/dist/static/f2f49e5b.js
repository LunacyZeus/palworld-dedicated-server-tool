import{d as f,ay as m,r as i,l as B,ai as v,y as c,F as y,G as x,U as k,D as r,J as w,aj as b,Y as I,b as L}from"./e1cebf43.js";import{_ as S}from"./0ee26181.js";const G=["id"],M=["id"],R={key:0,class:"line-content"},T={key:1},j=f({__name:"gliding-log",props:{id:String,logCache:{type:Array,require:!0,default:()=>[]},status:String,capacity:Number},setup(h){const e=h;e.logCache;const{id:d,logCache:o,status:C,capacity:F}=m(e),t=i(1),a=i(-1),p=i(!0),n=i([]),E=B(()=>{p.value;let u=e.capacity*t.value,s=a.value-u+1;return s<0&&(s=0),n.value.slice(s,a.value+1)}),_=()=>{let u=document.getElementById(e.id);u&&(u.scrollTop=u.scrollHeight)},g=(u,s)=>{if(n.value.length,u){let l=u.splice(0,s).map((D,A)=>({line:D,index:n.value.length+A}));n.value=n.value.concat(l)}};return v(n,()=>{p.value&&b(()=>{_()}),a.value=n.value.length-1}),v(()=>e.logCache,u=>{g(u,u==null?void 0:u.length)},{deep:!0}),(u,s)=>(r(),c("div",{id:k(d),class:"gliding-log"},[(r(!0),c(y,null,x(E.value,l=>(r(),c("div",{id:"log-line-"+l.index,key:l.index},[l.line?(r(),c("div",R,w(l.line),1)):(r(),c("br",T))],8,M))),128))],8,G))}});const N=S(j,[["__scopeId","data-v-331d9f24"]]),$={id:"app"},H=f({__name:"index",setup(h){const e=i(""),d=i("");B(()=>d.value==="running");const o=t=>t[C(t.length)],C=t=>Math.floor(Math.random()*t),F=()=>{let t=["\u4E0A\u534810\u70B9","\u51CC\u6668\u4E24\u70B9","\u592A\u9633\u521A\u51FA\u6765\u7684\u65F6\u5019","\u9999\u6E2F\u56DE\u5F5220\u5468\u5E74\u4E4B\u65E5","\u4E16\u754C\u672B\u65E5\u5F53\u5929"],a=["jade","alex","cooltag","rino","david","\u8303\u603B"],p=["\u6C60\u5858\u8FB9","\u5973\u88C5\u5E97","\u9A6C\u6876\u76D6\u4E0A","\u5189\u5189\u5347\u8D77\u7684\u56FD\u65D7\u4E0B","\u7535\u8111\u8FB9"],n=["\u5403\u996D","\u7761\u89C9","\u505A\u7740\u4E0D\u53EF\u63CF\u8FF0\u7684\u4E8B\u60C5","\u51B2Q\u5E01","\u5047\u88C5\u8DCC\u5012","\u541F\u8BD7\u4F5C\u753B","\u5E26\u4E0A\u4E86\u5149\u8363\u7684\u7EA2\u9886\u5DFE","\u8DF3\u82AD\u857E\u821E"],E=["\u88AB\u4E3E\u62A5\u4E86","\u6709\u559C\u4E86","\u7761\u7740\u4E86","\u88AB\u770B\u4E0A\u4E86","\u7A7F\u8D8A\u5230\u4E86\u6E05\u671D\u505A\u4E86\u683C\u683C"];(function(){return"\u5728"+o(t)+"\uFF0C"+o(a)+"\u5728"+o(p)+o(n)+"\uFF0C\u7ED3\u679C"+o(E)}).bind(this);let _=function(){let g=[];g.push("\u65E5\u5FD7\u529F\u80FD\u672A\u5B9E\u88C5"),e.value=e.value=g}.bind(this);d.value="running",_()};return I(()=>{F()}),(t,a)=>(r(),c("div",$,[L(N,{id:"log",logCache:e.value,status:d.value,capacity:500},null,8,["logCache","status"])]))}});export{H as default};