var Le=Object.defineProperty;var ve=Object.getOwnPropertySymbols;var Ge=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var ye=(e,n,a)=>n in e?Le(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,ge=(e,n)=>{for(var a in n||(n={}))Ge.call(n,a)&&ye(e,a,n[a]);if(ve)for(var a of ve(n))He.call(n,a)&&ye(e,a,n[a]);return e};var ae=(e,n,a)=>new Promise((s,l)=>{var o=t=>{try{r(a.next(t))}catch(u){l(u)}},d=t=>{try{r(a.throw(t))}catch(u){l(u)}},r=t=>t.done?s(t.value):Promise.resolve(t.value).then(o,d);r((a=a.apply(e,n)).next())});import{c as B,n as O,a4 as ne,d as E,u as ie,ai as L,a5 as De,b as i,w,f as X,aF as je,t as I,r as _,l as C,I as Ue,a6 as G,k as re,b3 as oe,p as Y,a8 as Ve,m as F,af as Ee,B as Ke,bh as qe,a_ as We,aj as Ce,aK as ze,b1 as W,b2 as z,F as J,b4 as Ye,bi as Je,bj as Xe,L as Pe,am as _e,a9 as he,ao as Ze,an as te,e as Qe,bk as ea,bl as aa,V as ue,D as A,y as T,C as b,P as M,J as Z,aC as ta,z as de,G as la,U as h,Z as Ne,H as $,ax as na,at as oa,au as ia,O as ra,b7 as ua}from"./cda7d5d1.js";import{P as da,T as sa,a as ca,_ as fa}from"./1a3088f6.js";/* empty css        */import{c as xe,C as ma}from"./cde1b0ce.js";import{F as Q}from"./06feed43.js";import{C as pa}from"./26aea388.js";import{S as ba}from"./c73cf3c7.js";import{_ as Ae}from"./0ee26181.js";import{F as va}from"./1fee4822.js";import"./d1eab13e.js";import"./8feb944f.js";import"./2337d202.js";const[ke,ya]=B("radio-group"),ga={shape:String,disabled:Boolean,iconSize:O,direction:String,modelValue:ne,checkedColor:String},Ie=Symbol(ke);var Pa=E({name:ke,props:ga,emits:["change","update:modelValue"],setup(e,{emit:n,slots:a}){const{linkChildren:s}=ie(Ie),l=o=>n("update:modelValue",o);return L(()=>e.modelValue,o=>n("change",o)),s({props:e,updateValue:l}),De(()=>e.modelValue),()=>{var o;return i("div",{class:ya([e.direction]),role:"radiogroup"},[(o=a.default)==null?void 0:o.call(a)])}}});const _a=w(Pa),Te={name:ne,disabled:Boolean,iconSize:O,modelValue:ne,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var ha=E({props:X({},Te,{bem:je(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:I,indeterminate:{type:Boolean,default:null}}),emits:["click","toggle"],setup(e,{emit:n,slots:a}){const s=_(),l=f=>{if(e.parent&&e.bindGroup)return e.parent.props[f]},o=C(()=>{if(e.parent&&e.bindGroup){const f=l("disabled")||e.disabled;if(e.role==="checkbox"){const p=l("modelValue").length,g=l("max"),y=g&&p>=+g;return f||y&&!e.checked}return f}return e.disabled}),d=C(()=>l("direction")),r=C(()=>{const f=e.checkedColor||l("checkedColor");if(f&&e.checked&&!o.value)return{borderColor:f,backgroundColor:f}}),t=C(()=>e.shape||l("shape")||"round"),u=f=>{const{target:p}=f,g=s.value,y=g===p||(g==null?void 0:g.contains(p));!o.value&&(y||!e.labelDisabled)&&n("toggle"),n("click",f)},m=()=>{var f,p;const{bem:g,checked:y,indeterminate:V}=e,R=e.iconSize||l("iconSize");return i("div",{ref:s,class:g("icon",[t.value,{disabled:o.value,checked:y,indeterminate:V}]),style:t.value!=="dot"?{fontSize:G(R)}:{width:G(R),height:G(R),borderColor:(f=r.value)==null?void 0:f.borderColor}},[a.icon?a.icon({checked:y,disabled:o.value}):t.value!=="dot"?i(Ue,{name:V?"minus":"success",style:r.value},null):i("div",{class:g("icon--dot__icon"),style:{backgroundColor:(p=r.value)==null?void 0:p.backgroundColor}},null)])},v=()=>{const{checked:f}=e;if(a.default)return i("span",{class:e.bem("label",[e.labelPosition,{disabled:o.value}])},[a.default({checked:f,disabled:o.value})])};return()=>{const f=e.labelPosition==="left"?[v(),m()]:[m(),v()];return i("div",{role:e.role,class:e.bem([{disabled:o.value,"label-disabled":e.labelDisabled},d.value]),tabindex:o.value?void 0:0,"aria-checked":e.checked,onClick:u},[f])}}});const Sa=X({},Te,{shape:String}),[Ra,Da]=B("radio");var Va=E({name:Ra,props:Sa,emits:["update:modelValue"],setup(e,{emit:n,slots:a}){const{parent:s}=re(Ie),l=()=>(s?s.props.modelValue:e.modelValue)===e.name,o=()=>{s?s.updateValue(e.name):n("update:modelValue",e.name)};return()=>i(ha,Y({bem:Da,role:"radio",parent:s,checked:l(),onToggle:o},e),oe(a,["default","icon"]))}});const Ea=w(Va),[Oe,Ca]=B("row"),Be=Symbol(Oe),Na={tag:Ve("div"),wrap:I,align:String,gutter:{type:[String,Number,Array],default:0},justify:String};var xa=E({name:Oe,props:Na,setup(e,{slots:n}){const{children:a,linkChildren:s}=ie(Be),l=C(()=>{const r=[[]];let t=0;return a.forEach((u,m)=>{t+=Number(u.span),t>24?(r.push([m]),t-=24):r[r.length-1].push(m)}),r}),o=C(()=>{let r=0;Array.isArray(e.gutter)?r=Number(e.gutter[0])||0:r=Number(e.gutter);const t=[];return r&&l.value.forEach(u=>{const m=r*(u.length-1)/u.length;u.forEach((v,f)=>{if(f===0)t.push({right:m});else{const p=r-t[v-1].right,g=m-p;t.push({left:p,right:g})}})}),t}),d=C(()=>{const{gutter:r}=e,t=[];if(Array.isArray(r)&&r.length>1){const u=Number(r[1])||0;if(u<=0)return t;l.value.forEach((m,v)=>{v!==l.value.length-1&&m.forEach(()=>{t.push({bottom:u})})})}return t});return s({spaces:o,verticalSpaces:d}),()=>{const{tag:r,wrap:t,align:u,justify:m}=e;return i(r,{class:Ca({[`align-${u}`]:u,[`justify-${m}`]:m,nowrap:!t})},{default:()=>{var v;return[(v=n.default)==null?void 0:v.call(n)]}})}}});const[Aa,ka]=B("col"),Ia={tag:Ve("div"),span:F(0),offset:O};var Ta=E({name:Aa,props:Ia,setup(e,{slots:n}){const{parent:a,index:s}=re(Be),l=C(()=>{if(!a)return;const{spaces:o,verticalSpaces:d}=a;let r={};if(o&&o.value&&o.value[s.value]){const{left:u,right:m}=o.value[s.value];r={paddingLeft:u?`${u}px`:null,paddingRight:m?`${m}px`:null}}const{bottom:t}=d.value[s.value]||{};return X(r,{marginBottom:t?`${t}px`:null})});return()=>{const{tag:o,span:d,offset:r}=e;return i(o,{style:l.value,class:ka({[d]:d,[`offset-${r}`]:r})},{default:()=>{var t;return[(t=n.default)==null?void 0:t.call(n)]}})}}});const se=w(Ta),[we,Oa]=B("collapse"),Fe=Symbol(we),Ba={border:I,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}};var wa=E({name:we,props:Ba,emits:["change","update:modelValue"],setup(e,{emit:n,slots:a}){const{linkChildren:s,children:l}=ie(Fe),o=u=>{n("change",u),n("update:modelValue",u)},d=(u,m)=>{const{accordion:v,modelValue:f}=e;o(v?u===f?"":u:m?f.concat(u):f.filter(p=>p!==u))},r=(u={})=>{if(e.accordion)return;typeof u=="boolean"&&(u={expanded:u});const{expanded:m,skipDisabled:v}=u,p=l.filter(g=>g.disabled&&v?g.expanded.value:m!=null?m:!g.expanded.value).map(g=>g.itemName.value);o(p)},t=u=>{const{accordion:m,modelValue:v}=e;return m?v===u:v.includes(u)};return Ee({toggleAll:r}),s({toggle:d,isExpanded:t}),()=>{var u;return i("div",{class:[Oa(),{[Ke]:e.border}]},[(u=a.default)==null?void 0:u.call(a)])}}});const Fa=w(wa),[$a,U]=B("collapse-item"),Ma=["icon","title","value","label","right-icon"],La=X({},xe,{name:O,isLink:I,disabled:Boolean,readonly:Boolean,lazyRender:I});var Ga=E({name:$a,props:La,setup(e,{slots:n}){const a=_(),s=_(),{parent:l,index:o}=re(Fe);if(!l)return;const d=C(()=>{var y;return(y=e.name)!=null?y:o.value}),r=C(()=>l.isExpanded(d.value)),t=_(r.value),u=qe(()=>t.value||!e.lazyRender),m=()=>{r.value?a.value&&(a.value.style.height=""):t.value=!1};L(r,(y,V)=>{if(V===null)return;y&&(t.value=!0),(y?Ce:ze)(()=>{if(!s.value||!a.value)return;const{offsetHeight:S}=s.value;if(S){const N=`${S}px`;a.value.style.height=y?"0":N,We(()=>{a.value&&(a.value.style.height=y?N:"0")})}else m()})});const v=(y=!r.value)=>{l.toggle(d.value,y)},f=()=>{!e.disabled&&!e.readonly&&v()},p=()=>{const{border:y,disabled:V,readonly:R}=e,S=oe(e,Object.keys(xe));return R&&(S.isLink=!1),(V||R)&&(S.clickable=!1),i(ma,Y({role:"button",class:U("title",{disabled:V,expanded:r.value,borderless:!y}),"aria-expanded":String(r.value),onClick:f},S),oe(n,Ma))},g=u(()=>{var y;return W(i("div",{ref:a,class:U("wrapper"),onTransitionend:m},[i("div",{ref:s,class:U("content")},[(y=n.default)==null?void 0:y.call(n)])]),[[z,t.value]])});return Ee({toggle:v,expanded:r,itemName:d}),()=>i("div",{class:[U({border:o.value&&e.border})]},[p(),g()])}});const Ha=w(Ga),ce=w(xa),[Se,ja]=B("space"),Ua={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function $e(e=[]){const n=[];return e.forEach(a=>{Array.isArray(a)?n.push(...a):a.type===J?n.push(...$e(a.children)):n.push(a)}),n.filter(a=>{var s;return!(a&&(a.type===Ye||a.type===J&&((s=a.children)==null?void 0:s.length)===0||a.type===Je&&a.children.trim()===""))})}var Ka=E({name:Se,props:Ua,setup(e,{slots:n}){const a=C(()=>{var o;return(o=e.align)!=null?o:e.direction==="horizontal"?"center":""}),s=o=>typeof o=="number"?o+"px":o,l=o=>{const d={},r=`${s(Array.isArray(e.size)?e.size[0]:e.size)}`,t=`${s(Array.isArray(e.size)?e.size[1]:e.size)}`;return o?e.wrap?{marginBottom:t}:{}:(e.direction==="horizontal"&&(d.marginRight=r),(e.direction==="vertical"||e.wrap)&&(d.marginBottom=t),d)};return()=>{var o;const d=$e((o=n.default)==null?void 0:o.call(n));return i("div",{class:[ja({[e.direction]:e.direction,[`align-${a.value}`]:a.value,wrap:e.wrap,fill:e.fill})]},[d.map((r,t)=>i("div",{key:`item-${t}`,class:`${Se}-item`,style:l(t===d.length-1)},[r]))])}}});const fe=w(Ka),[qa,K]=B("stepper"),Wa=200,q=(e,n)=>String(e)===String(n),za={min:F(1),max:F(1/0),name:F(""),step:F(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:I,showMinus:I,showInput:I,longPress:I,autoFixed:I,allowEmpty:Boolean,modelValue:O,inputWidth:O,buttonSize:O,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:F(1),decimalLength:O};var Ya=E({name:qa,props:za,emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(e,{emit:n}){const a=(c,D=!0)=>{const{min:x,max:H,allowEmpty:k,decimalLength:j}=e;return k&&c===""||(c=_e(String(c),!e.integer),c=c===""?0:+c,c=Number.isNaN(c)?+x:c,c=D?Math.max(Math.min(+H,c),+x):c,he(j)&&(c=c.toFixed(+j))),c},s=()=>{var c;const D=(c=e.modelValue)!=null?c:e.defaultValue,x=a(D);return q(x,e.modelValue)||n("update:modelValue",x),x};let l;const o=_(),d=_(s()),r=C(()=>e.disabled||e.disableMinus||+d.value<=+e.min),t=C(()=>e.disabled||e.disablePlus||+d.value>=+e.max),u=C(()=>({width:G(e.inputWidth),height:G(e.buttonSize)})),m=C(()=>Xe(e.buttonSize)),v=()=>{const c=a(d.value);q(c,d.value)||(d.value=c)},f=c=>{e.beforeChange?Qe(e.beforeChange,{args:[c],done(){d.value=c}}):d.value=c},p=()=>{if(l==="plus"&&t.value||l==="minus"&&r.value){n("overlimit",l);return}const c=l==="minus"?-e.step:+e.step,D=a(ea(+d.value,c));f(D),n(l)},g=c=>{const D=c.target,{value:x}=D,{decimalLength:H}=e;let k=_e(String(x),!e.integer);if(he(H)&&k.includes(".")){const be=k.split(".");k=`${be[0]}.${be[1].slice(0,+H)}`}e.beforeChange?D.value=String(d.value):q(x,k)||(D.value=k);const j=k===String(+k);f(j?+k:k)},y=c=>{var D;e.disableInput?(D=o.value)==null||D.blur():n("focus",c)},V=c=>{const D=c.target,x=a(D.value,e.autoFixed);D.value=String(x),d.value=x,Ce(()=>{n("blur",c),Ze()})};let R,S;const N=()=>{S=setTimeout(()=>{p(),N()},Wa)},ee=()=>{e.longPress&&(R=!1,clearTimeout(S),S=setTimeout(()=>{R=!0,p(),N()},aa))},me=c=>{e.longPress&&(clearTimeout(S),R&&te(c))},Me=c=>{e.disableInput&&te(c)},pe=c=>({onClick:D=>{te(D),l=c,p()},onTouchstartPassive:()=>{l=c,ee()},onTouchend:me,onTouchcancel:me});return L(()=>[e.max,e.min,e.integer,e.decimalLength],v),L(()=>e.modelValue,c=>{q(c,d.value)||(d.value=a(c))}),L(d,c=>{n("update:modelValue",c),n("change",c,{name:e.name})}),De(()=>e.modelValue),()=>i("div",{role:"group",class:K([e.theme])},[W(i("button",Y({type:"button",style:m.value,class:[K("minus",{disabled:r.value}),{[Pe]:!r.value}],"aria-disabled":r.value||void 0},pe("minus")),null),[[z,e.showMinus]]),W(i("input",{ref:o,type:e.integer?"tel":"text",role:"spinbutton",class:K("input"),value:d.value,style:u.value,disabled:e.disabled,readonly:e.disableInput,inputmode:e.integer?"numeric":"decimal",placeholder:e.placeholder,"aria-valuemax":e.max,"aria-valuemin":e.min,"aria-valuenow":d.value,onBlur:V,onInput:g,onFocus:y,onMousedown:Me},null),[[z,e.showInput]]),W(i("button",Y({type:"button",style:m.value,class:[K("plus",{disabled:t.value}),{[Pe]:!t.value}],"aria-disabled":t.value||void 0},pe("plus")),null),[[z,e.showPlus]])])}});const Ja=w(Ya);const P={Difficulty:{name:"Difficulty",id:"Difficulty",defaultValue:"None",type:"select",options:["None"]},DayTimeSpeedRate:{name:"Day Time Speed Rate",id:"DayTimeSpeedRate",defaultValue:"1.000000",type:"float",range:[.1,5]},NightTimeSpeedRate:{name:"Night Time Speed Rate",id:"NightTimeSpeedRate",defaultValue:"1.000000",type:"float",range:[.1,5]},ExpRate:{name:"Exp Rate",id:"ExpRate",defaultValue:"1.000000",type:"float",range:[0,20],difficultyType:"decreasing"},PalCaptureRate:{name:"Pal Capture Rate",id:"PalCaptureRate",defaultValue:"1.000000",type:"float",range:[.5,5],difficultyType:"decreasing"},PalSpawnNumRate:{name:"Pal Spawn Number Rate",id:"PalSpawnNumRate",defaultValue:"1.000000",type:"float",range:[.5,5]},PalDamageRateAttack:{name:"Pal Damage Rate Attack",id:"PalDamageRateAttack",defaultValue:"1.000000",type:"float",range:[.1,5]},PalDamageRateDefense:{name:"Pal Damage Rate Defense",id:"PalDamageRateDefense",defaultValue:"1.000000",type:"float",range:[.1,5]},PlayerDamageRateAttack:{name:"Player Damage Rate Attack",id:"PlayerDamageRateAttack",defaultValue:"1.000000",type:"float",range:[.1,5],desc:"Player damage rate when attacking",difficultyType:"decreasing"},PlayerDamageRateDefense:{name:"Player Damage Rate Defense",id:"PlayerDamageRateDefense",defaultValue:"1.000000",type:"float",range:[.1,5],desc:"Player damage rate when defending",difficultyType:"increasing"},PlayerStomachDecreaceRate:{name:"Player Stomach Decrease Rate",id:"PlayerStomachDecreaceRate",defaultValue:"1.000000",type:"float",range:[.1,5],difficultyType:"increasing"},PlayerStaminaDecreaceRate:{name:"Player Stamina Decrease Rate",id:"PlayerStaminaDecreaceRate",defaultValue:"1.000000",type:"float",range:[.1,5],difficultyType:"increasing"},PlayerAutoHPRegeneRate:{name:"Player Auto HP Regen Rate",id:"PlayerAutoHPRegeneRate",defaultValue:"1.000000",type:"float",range:[.1,5],difficultyType:"decreasing"},PlayerAutoHpRegeneRateInSleep:{name:"Player Auto HP Regen Rate In Sleep",id:"PlayerAutoHpRegeneRateInSleep",defaultValue:"1.000000",type:"float",range:[.1,5],difficultyType:"decreasing"},PalStomachDecreaceRate:{name:"Pal Stomach Decrease Rate",id:"PalStomachDecreaceRate",defaultValue:"1.000000",type:"float",range:[.1,5],difficultyType:"increasing"},PalStaminaDecreaceRate:{name:"Pal Stamina Decrease Rate",id:"PalStaminaDecreaceRate",defaultValue:"1.000000",type:"float",range:[.1,5],difficultyType:"increasing"},PalAutoHPRegeneRate:{name:"Pal Auto HP Regen Rate",id:"PalAutoHPRegeneRate",defaultValue:"1.000000",type:"float",range:[.1,5],difficultyType:"decreasing"},PalAutoHpRegeneRateInSleep:{name:"Pal Auto HP Regen Rate In Sleep",id:"PalAutoHpRegeneRateInSleep",defaultValue:"1.000000",type:"float",range:[.1,5],difficultyType:"decreasing"},BuildObjectDamageRate:{name:"Build Object Damage Rate",id:"BuildObjectDamageRate",defaultValue:"1.000000",type:"float",range:[.5,3],desc:"Damage rate to build objects"},BuildObjectDeteriorationDamageRate:{name:"Build Object Deterioration Damage Rate",id:"BuildObjectDeteriorationDamageRate",defaultValue:"1.000000",type:"float",range:[0,10],desc:"Deterioration damage rate to build objects"},CollectionDropRate:{name:"Collection Drop Rate",id:"CollectionDropRate",defaultValue:"1.000000",type:"float",range:[.5,5],difficultyType:"decreasing"},CollectionObjectHpRate:{name:"Collection Object HP Rate",id:"CollectionObjectHpRate",defaultValue:"1.000000",type:"float",range:[.5,3],difficultyType:"decreasing"},CollectionObjectRespawnSpeedRate:{name:"Collection Object Respawn Speed Rate",id:"CollectionObjectRespawnSpeedRate",defaultValue:"1.000000",type:"float",range:[.5,5],difficultyType:"increasing"},EnemyDropItemRate:{name:"Enemy Drop Item Rate",id:"EnemyDropItemRate",defaultValue:"1.000000",type:"float",range:[.5,5],difficultyType:"decreasing"},DeathPenalty:{name:"Death Penalty",id:"DeathPenalty",defaultValue:"All",type:"select",options:["All","Lost item and equipment","Lost All item, equipment, pal(in inventory)"],desc:"Death penalty"},bEnablePlayerToPlayerDamage:{name:"Enable Player To Player Damage",id:"bEnablePlayerToPlayerDamage",defaultValue:"False",type:"boolean",desc:"Enable player to player damage"},bEnableFriendlyFire:{name:"Enable Friendly Fire",id:"bEnableFriendlyFire",defaultValue:"False",type:"boolean",desc:"Enable friendly fire"},bEnableInvaderEnemy:{name:"Enable Invader Enemy",id:"bEnableInvaderEnemy",defaultValue:"True",type:"boolean",desc:"Enable invader enemy"},bActiveUNKO:{name:"Active UNKO",id:"bActiveUNKO",defaultValue:"False",type:"boolean",desc:"Active UNKO"},bEnableAimAssistPad:{name:"Enable Aim Assist Pad",id:"bEnableAimAssistPad",defaultValue:"True",type:"boolean",desc:"Enable aim assist pad"},bEnableAimAssistKeyboard:{name:"Enable Aim Assist Keyboard",id:"bEnableAimAssistKeyboard",defaultValue:"False",type:"boolean",desc:"Enable aim assist keyboard"},DropItemMaxNum:{name:"Drop Item Max Num",id:"DropItemMaxNum",defaultValue:"3000",type:"integer",range:[0,1e4],desc:"Drop item max num"},DropItemMaxNum_UNKO:{name:"Drop Item Max Num UNKO",id:"DropItemMaxNum_UNKO",defaultValue:"100",type:"integer",range:[0,5e3],desc:"Drop item max num UNKO"},BaseCampMaxNum:{name:"Base Camp Max Num",id:"BaseCampMaxNum",defaultValue:"128",type:"integer",range:[0,10240],desc:"Base camp max num"},BaseCampWorkerMaxNum:{name:"Base Camp Worker Max Num",id:"BaseCampWorkerMaxNum",defaultValue:"15",type:"integer",range:[1,20],desc:"Base camp worker max num"},DropItemAliveMaxHours:{name:"Drop Item Alive Max Hours",id:"DropItemAliveMaxHours",defaultValue:"1.000000",type:"float",range:[0,240],desc:"Drop item alive max hours"},bAutoResetGuildNoOnlinePlayers:{name:"Auto Reset Guild No Online Players",id:"bAutoResetGuildNoOnlinePlayers",defaultValue:"False",type:"boolean",desc:"Auto reset guild no online players"},AutoResetGuildTimeNoOnlinePlayers:{name:"Auto Reset Guild Time No Online Players",id:"AutoResetGuildTimeNoOnlinePlayers",defaultValue:"72.000000",type:"float",range:[0,240],desc:"Auto reset guild time no online players"},GuildPlayerMaxNum:{name:"Guild Player Max Num",id:"GuildPlayerMaxNum",defaultValue:"20",type:"integer",range:[1,100],desc:"Guild player max num"},PalEggDefaultHatchingTime:{name:"Pal Egg Default Hatching Time",id:"PalEggDefaultHatchingTime",defaultValue:"72.000000",type:"float",range:[0,240],desc:"Pal egg default hatching time",difficultyType:"increasing"},WorkSpeedRate:{name:"Work Speed Rate",id:"WorkSpeedRate",defaultValue:"1.000000",type:"float",range:[.1,5],desc:"Work speed rate",difficultyType:"decreasing"},bIsMultiplay:{name:"Is Multiplay",id:"bIsMultiplay",defaultValue:"False",type:"boolean",desc:"Is multiplay"},bIsPvP:{name:"Is PvP",id:"bIsPvP",defaultValue:"False",type:"boolean",desc:"Is PvP"},bCanPickupOtherGuildDeathPenaltyDrop:{name:"Can Pickup Other Guild Death Penalty Drop",id:"bCanPickupOtherGuildDeathPenaltyDrop",defaultValue:"False",type:"boolean",desc:"Can pickup other guild death penalty drop"},bEnableNonLoginPenalty:{name:"Enable Non Login Penalty",id:"bEnableNonLoginPenalty",defaultValue:"True",type:"boolean",desc:"Enable non login penalty"},bEnableFastTravel:{name:"Enable Fast Travel",id:"bEnableFastTravel",defaultValue:"True",type:"boolean",desc:"Enable fast travel"},bIsStartLocationSelectByMap:{name:"Is Start Location Select By Map",id:"bIsStartLocationSelectByMap",defaultValue:"True",type:"boolean",desc:"Is start location select by map"},bExistPlayerAfterLogout:{name:"Exist Player After Logout",id:"bExistPlayerAfterLogout",defaultValue:"False",type:"boolean",desc:"Exist player after logout"},bEnableDefenseOtherGuildPlayer:{name:"Enable Defense Other Guild Player",id:"bEnableDefenseOtherGuildPlayer",defaultValue:"False",type:"boolean",desc:"Enable defense other guild player"},CoopPlayerMaxNum:{name:"Coop Player Max Num",id:"CoopPlayerMaxNum",defaultValue:"4",type:"integer",range:[1,4],desc:"Coop player max num"},ServerPlayerMaxNum:{name:"Server Player Max Num",id:"ServerPlayerMaxNum",defaultValue:"32",type:"integer",range:[1,512],desc:"Server player max num"},ServerName:{name:"Server Name",id:"ServerName",defaultValue:"Default Palworld Server",type:"string",desc:"Server name"},ServerDescription:{name:"Server Description",id:"ServerDescription",defaultValue:"",type:"string",desc:"Server description"},AdminPassword:{name:"Admin Password",id:"AdminPassword",defaultValue:"",type:"string",desc:"Admin password"},ServerPassword:{name:"Server Password",id:"ServerPassword",defaultValue:"",type:"string",desc:"Server password"},PublicPort:{name:"Public Port",id:"PublicPort",defaultValue:"8211",type:"integer",desc:"Public port"},PublicIP:{name:"Public IP",id:"PublicIP",defaultValue:"",type:"string",desc:"Public IP"},RCONEnabled:{name:"RCON Enabled",id:"RCONEnabled",defaultValue:"False",type:"boolean",desc:"RCON enabled"},RCONPort:{name:"RCON Port",id:"RCONPort",defaultValue:"25575",type:"integer",desc:"RCON port"},Region:{name:"Region",id:"Region",defaultValue:"",type:"string",desc:"Region"},bUseAuth:{name:"Use Auth",id:"bUseAuth",defaultValue:"True",type:"boolean",desc:"Use auth"},BanListURL:{name:"Ban List URL",id:"BanListURL",defaultValue:"https://api.palworldgame.com/api/banlist.txt",type:"string",desc:"Ban list URL"}};const Xa={class:"title"},Za=E({__name:"DeathPenaltyDropDown",props:{name:{required:!0,type:String,default:""},id:String,entryKey:{required:!1,type:String,default:""},value:{required:!0,type:String,default:""},type:{required:!0,type:String,default:""}},setup(e){const n=e,{t:a}=ue(),s=[{text:a("serverConf.entry.description.DeathPenalty.None"),value:"None"},{text:a("serverConf.entry.description.DeathPenalty.Item"),value:"Item"},{text:a("serverConf.entry.description.DeathPenalty.ItemAndEquipment"),value:"ItemAndEquipment"},{text:a("serverConf.entry.description.DeathPenalty.All"),value:"All"}],l=_(""),o=_(!1),d=({selectedOptions:r})=>{o.value=!1,l.value=r[0].text};return(r,t)=>{const u=Q,m=fe,v=da,f=ta;return A(),T(J,null,[i(m,{direction:"vertical",fill:""},{default:b(()=>[M("label",Xa,Z(n.name),1),i(u,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=p=>l.value=p),"is-link":"",readonly:"",placeholder:r.$t("serverConf.entry.name.DeathPenalty"),onClick:t[1]||(t[1]=p=>o.value=!0)},null,8,["modelValue","placeholder"])]),_:1}),i(f,{show:o.value,"onUpdate:show":t[3]||(t[3]=p=>o.value=p),round:"",position:"bottom"},{default:b(()=>[i(v,{columns:s,onCancel:t[2]||(t[2]=p=>o.value=!1),onConfirm:d})]),_:1},8,["show"])],64)}}}),Qa={class:"title"},et=E({__name:"SwitchInput",props:{name:{required:!0,type:String,default:""},id:String,entryKey:{required:!1,type:String,default:""},checked:{required:!0,type:Boolean,default:!0},type:{required:!0,type:String,default:""}},setup(e){const n=e,a=_(n.checked);return(s,l)=>{const o=se,d=ba,r=ce;return A(),de(r,{justify:"space-between"},{default:b(()=>[i(o,{span:"16"},{default:b(()=>[M("label",Qa,Z(n.name),1)]),_:1}),i(o,{span:"4"}),i(o,{span:"4"},{default:b(()=>[i(d,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=t=>a.value=t),size:"24px"},null,8,["modelValue"])]),_:1})]),_:1})}}}),at={magic:1396790855,save_game_version:3,package_version:{New:[522,1008]},engine_version_major:5,engine_version_minor:1,engine_version_patch:1,engine_version_build:0,engine_version:"++UE5+Release-5.1",custom_format_version:3,custom_format:[{id:"40d2fba7-4b48-4ce5-b038-5a75884e499e",value:7},{id:"fcf57afa-5076-4283-b9a9-e658ffa02d32",value:76},{id:"0925477b-763d-4001-9d91-d6730b75b411",value:1},{id:"4288211b-4548-16c6-1a76-67b2507a2a00",value:1},{id:"1ab9cecc-0000-6913-0000-4875203d51fb",value:100},{id:"4cef9221-470e-d43a-7e60-3d8c16995726",value:1},{id:"e2717c7e-52f5-44d3-950c-5340b315035e",value:7},{id:"11310aed-2e55-4d61-af67-9aa3c5a1082c",value:17},{id:"a7820cfb-20a7-4359-8c54-2c149623cf50",value:21},{id:"f6dfbb78-bb50-a0e4-4018-b84d60cbaf23",value:2},{id:"24bb7af3-5646-4f83-1f2f-2dc249ad96ff",value:5},{id:"76a52329-0923-45b5-98ae-d841cf2f6ad8",value:5},{id:"5fbc6907-55c8-40ae-8e67-f1845efff13f",value:1},{id:"82e77c4e-3323-43a5-b46b-13c597310df3",value:0},{id:"0ffcf66c-1190-4899-b160-9cf84a46475e",value:1},{id:"9c54d522-a826-4fbe-9421-074661b482d0",value:44},{id:"b0d832e4-1f89-4f0d-accf-7eb736fd4aa2",value:10},{id:"e1c64328-a22c-4d53-a36c-8e866417bd8c",value:0},{id:"375ec13c-06e4-48fb-b500-84f0262a717e",value:4},{id:"e4b068ed-f494-42e9-a231-da0b2e46bb41",value:40},{id:"cffc743f-43b0-4480-9391-14df171d2073",value:37},{id:"b02b49b5-bb20-44e9-a304-32b752e40360",value:3},{id:"a4e4105c-59a1-49b5-a7c5-40c4547edfee",value:0},{id:"39c831c9-5ae6-47dc-9a44-9c173e1c8e7c",value:0},{id:"78f01b33-ebea-4f98-b9b4-84eaccb95aa2",value:20},{id:"6631380f-2d4d-43e0-8009-cf276956a95a",value:0},{id:"12f88b9f-8875-4afc-a67c-d90c383abd29",value:45},{id:"7b5ae74c-d270-4c10-a958-57980b212a5a",value:13},{id:"d7296918-1dd6-4bdd-9de2-64a83cc13884",value:3},{id:"c2a15278-bfe7-4afe-6c17-90ff531df755",value:1},{id:"6eaca3d4-40ec-4cc1-b786-8bed09428fc5",value:3},{id:"29e575dd-e0a3-4627-9d10-d276232cdcea",value:17},{id:"af43a65d-7fd3-4947-9873-3e8ed9c1bb05",value:15},{id:"6b266cec-1ec7-4b8f-a30b-e4d90942fc07",value:1},{id:"0df73d61-a23f-47ea-b727-89e90c41499a",value:1},{id:"601d1886-ac64-4f84-aa16-d3de0deac7d6",value:80},{id:"5b4c06b7-2463-4af8-805b-bf70cdf5d0dd",value:10},{id:"e7086368-6b23-4c58-8439-1b7016265e91",value:4},{id:"9dffbcd6-494f-0158-e221-12823c92a888",value:10},{id:"f2aed0ac-9afe-416f-8664-aa7ffa26d6fc",value:1},{id:"174f1f0b-b4c6-45a5-b13f-2ee8d0fb917d",value:10},{id:"35f94a83-e258-406c-a318-09f59610247c",value:41},{id:"b68fc16e-8b1b-42e2-b453-215c058844fe",value:1},{id:"b2e18506-4273-cfc2-a54e-f4bb758bba07",value:1},{id:"64f58936-fd1b-42ba-ba96-7289d5d0fa4e",value:1},{id:"697dd581-e64f-41ab-aa4a-51ecbeb7b628",value:88},{id:"d89b5e42-24bd-4d46-8412-aca8df641779",value:41},{id:"59da5d52-1232-4948-b878-597870b8e98b",value:8},{id:"26075a32-730f-4708-88e9-8c32f1599d05",value:0},{id:"6f0ed827-a609-4895-9c91-998d90180ea4",value:2},{id:"30d58be3-95ea-4282-a6e3-b159d8ebb06a",value:1},{id:"717f9ee7-e9b0-493a-88b3-91321b388107",value:16},{id:"430c4d19-7154-4970-8769-9b69df90b0e5",value:15},{id:"aafe32bd-5395-4c14-b66a-5e251032d1dd",value:1},{id:"23afe18e-4ce1-4e58-8d61-c252b953beb7",value:11},{id:"a462b7ea-f499-4e3a-99c1-ec1f8224e1b2",value:4},{id:"2eb5fdbd-01ac-4d10-8136-f38f3393a5da",value:5},{id:"509d354f-f6e6-492f-a749-85b2073c631c",value:0},{id:"b6e31b1c-d29f-11ec-857e-9f856f9970e2",value:1},{id:"4a56eb40-10f5-11dc-92d3-347eb2c96ae7",value:2},{id:"d78a4a00-e858-4697-baa8-19b5487d46b4",value:18},{id:"5579f886-933a-4c1f-83ba-087b6361b92f",value:2},{id:"612fbe52-da53-400b-910d-4f919fb1857c",value:1},{id:"a4237a36-caea-41c9-8fa2-18f858681bf3",value:5},{id:"804e3f75-7088-4b49-a4d6-8c063c7eb6dc",value:5},{id:"1ed048f4-2f2e-4c68-89d0-53a4f18f102d",value:1},{id:"fb680af2-59ef-4ba3-baa8-19b573c8443d",value:2},{id:"9950b70e-b41a-4e17-bbcc-fa0d57817fd6",value:1},{id:"ab965196-45d8-08fc-b7d7-228d78ad569e",value:1}]},tt={magic:828009552,gvas:{header:at,root:{save_game_type:"/Script/Pal.PalWorldOptionSaveGame",properties:{Version:{Int:{value:100}},Timestamp:{Struct:{value:{DateTime:63841770717765e4},struct_type:"DateTime"}},OptionWorldData:{Struct:{value:{Struct:{Settings:{Struct:{value:{Struct:{Difficulty:{Enum:{value:"EPalOptionWorldDifficulty::Custom",enum_type:"EPalOptionWorldDifficulty"}},DayTimeSpeedRate:{Float:{value:4.590592}},NightTimeSpeedRate:{Float:{value:3.768552}},ExpRate:{Float:{value:5.533223}},PalCaptureRate:{Float:{value:1.0782894}},PalSpawnNumRate:{Float:{value:1.3009868}},PalDamageRateAttack:{Float:{value:1.6119077}},PalDamageRateDefense:{Float:{value:1.4378289}},PlayerDamageRateAttack:{Float:{value:1.834342}},PlayerDamageRateDefense:{Float:{value:3.0722365}},PlayerStomachDecreaceRate:{Float:{value:1.8536841}},PlayerStaminaDecreaceRate:{Float:{value:2.1631577}},PlayerAutoHPRegeneRate:{Float:{value:2.1148024}},PlayerAutoHpRegeneRateInSleep:{Float:{value:1.7473025}},PalStomachDecreaceRate:{Float:{value:1.7569736}},PalStaminaDecreaceRate:{Float:{value:2.0761182}},PalAutoHPRegeneRate:{Float:{value:1.7473025}},PalAutoHpRegeneRateInSleep:{Float:{value:1.5732236}},BuildObjectDamageRate:{Float:{value:1.5131578}},BuildObjectDeteriorationDamageRate:{Float:{value:3.18421}},CollectionDropRate:{Float:{value:1.2023026}},CollectionObjectHpRate:{Float:{value:1.4539473}},CollectionObjectRespawnSpeedRate:{Float:{value:1.4391446}},EnemyDropItemRate:{Float:{value:1.1134868}},DeathPenalty:{Enum:{value:"EPalOptionWorldDeathPenalty::None",enum_type:"EPalOptionWorldDeathPenalty"}},bEnableInvaderEnemy:{Bool:{value:!1}},bActiveUNKO:{Bool:{value:!0}},DropItemMaxNum:{Int:{value:1928}},DropItemMaxNum_UNKO:{Int:{value:100}},BaseCampMaxNum:{Int:{value:128}},DropItemAliveMaxHours:{Float:{value:1}},BaseCampWorkerMaxNum:{Int:{value:20}},bAutoResetGuildNoOnlinePlayers:{Bool:{value:!0}},AutoResetGuildTimeNoOnlinePlayers:{Float:{value:116}},WorkSpeedRate:{Float:{value:1}},GuildPlayerMaxNum:{Int:{value:100}},PalEggDefaultHatchingTime:{Float:{value:116}},bIsMultiplay:{Bool:{value:!0}},bEnableNonLoginPenalty:{Bool:{value:!1}},bIsStartLocationSelectByMap:{Bool:{value:!1}},ServerName:{Str:{value:"Default Palworld Server"}},ServerDescription:{Str:{value:""}},AdminPassword:{Str:{value:""}},ServerPassword:{Str:{value:""}},PublicPort:{Int:{value:8211}},PublicIP:{Str:{value:""}},RCONEnabled:{Bool:{value:!1}},RCONPort:{Int:{value:25575}},Region:{Str:{value:""}},bUseAuth:{Bool:{value:!0}},bEnableFastTravel:{Bool:{value:!0}},BanListURL:{Str:{value:"https://api.palworldgame.com/api/banlist.txt"}},ServerPlayerMaxNum:{Int:{value:32}},bIsPvP:{Bool:{value:!1}},bCanPickupOtherGuildDeathPenaltyDrop:{Bool:{value:!1}},bExistPlayerAfterLogout:{Bool:{value:!1}},bEnableDefenseOtherGuildPlayer:{Bool:{value:!1}},bEnablePlayerToPlayerDamage:{Bool:{value:!1}},bEnableFriendlyFire:{Bool:{value:!1}},bEnableAimAssistPad:{Bool:{value:!0}},bEnableAimAssistKeyboard:{Bool:{value:!1}}}},struct_type:{Struct:"PalOptionWorldSettings"}}}}},struct_type:{Struct:"PalOptionWorldSaveData"}}}}},extra:[0,0,0,0]}};Object.keys(tt.gvas.root.properties.OptionWorldData.Struct.value.Struct.Settings.Struct.value.Struct);const lt={class:"title"},nt=E({__name:"TextInput",props:{name:{required:!0,type:String,default:""},id:String,entryKey:{required:!1,type:String,default:""},value:{required:!0,type:String,default:""},type:{required:!0,type:String,default:""}},setup(e){const n=e,a=_(n.value),s=o=>!0,l=_(!1);return l.value=s(n.entryKey),(o,d)=>{const r=Q,t=fe;return A(),de(t,{direction:"vertical",fill:""},{default:b(()=>[M("label",lt,Z(n.name),1),i(r,{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=u=>a.value=u),clearable:"",label:"",placeholder:""},null,8,["modelValue"])]),_:1})}}});const ot={class:"title"},it=E({__name:"SliderInput",props:{name:{required:!0,type:String,default:""},id:String,entryKey:{required:!1,type:String,default:""},value:{required:!0,type:Number,default:0},defaultValue:{required:!0,type:Number,default:0},minValue:{required:!0,type:Number,default:0},maxValue:{required:!0,type:Number,default:100},step:{required:!0,type:Number,default:1},type:{required:!0,type:String,default:""}},setup(e){const n=e,a=_(6),s=_(n.value),l=_(n.step),o=_(n.minValue),d=_(n.maxValue),r=_(n.defaultValue),t=_(n.type),u=_(r),m=_(r);return t.value=="integer"&&(a.value=1),s.value!=0&&(u.value=s.value,m.value=s.value),(v,f)=>{const p=se,g=ce,y=Q,V=Ja,R=fe;return A(),de(R,{direction:"vertical",fill:""},{default:b(()=>[i(g,{justify:"space-between"},{default:b(()=>[i(p,null,{default:b(()=>[M("label",ot,Z(n.name),1)]),_:1})]),_:1}),i(g,{justify:"space-between"},{default:b(()=>[i(p,{span:"8"},{default:b(()=>[i(y,{modelValue:m.value,"onUpdate:modelValue":f[0]||(f[0]=S=>m.value=S),clearable:"",label:"",placeholder:""},null,8,["modelValue"])]),_:1}),i(p,{span:"4"}),i(p,{span:"12"},{default:b(()=>[i(y,{name:"stepper"},{input:b(()=>[i(V,{modelValue:u.value,"onUpdate:modelValue":f[1]||(f[1]=S=>u.value=S),theme:"round","button-size":"18",step:l.value,"decimal-length":a.value,"disable-input":"","input-width":"110px",min:o.value,max:d.value},null,8,["modelValue","step","decimal-length","min","max"])]),_:1})]),_:1})]),_:1})]),_:1})}}}),rt={key:0},ut={key:1},dt={key:2},st={key:3},ct=E({__name:"conf-field",props:{name:{required:!0,type:String,default:""},settings:{required:!0,type:Array,default:()=>[]},data:{required:!1,type:Map,default:()=>{}}},setup(e){const n=e;return(a,s)=>(A(!0),T(J,null,la(n.settings,l=>{var o;return A(),T("div",{class:"conf-field",key:l},[l==="DeathPenalty"?(A(),T("div",rt,[i(Za,{class:"gap",name:a.$t(`serverConf.entry.name.${h(P)[l].id}`),entryKey:h(P)[l].id,value:(o=h(P)[l].id)!=null?o:h(P)[l].defaultValue,type:h(P)[l].type},null,8,["name","entryKey","value","type"])])):h(P)[l].type==="boolean"?(A(),T("div",ut,[i(et,{class:"gap",name:a.$t(`serverConf.entry.name.${h(P)[l].id}`),entryKey:h(P)[l].id,checked:h(P)[l].defaultValue==="True",type:h(P)[l].type},null,8,["name","entryKey","checked","type"])])):(h(P)[l].type==="integer"||h(P)[l].type==="float")&&h(P)[l].range?(A(),T("div",dt,[i(it,{class:"gap",name:a.$t(`serverConf.entry.name.${h(P)[l].id}`),id:h(P)[l].id,entryKey:h(P)[l].id,value:Number(h(P)[l].defaultValue),defaultValue:Number(h(P)[l].defaultValue),minValue:Number(h(P)[l].range[0]),maxValue:Number(h(P)[l].range[1]),step:h(P)[l].type==="integer"?1:1e-6,type:h(P)[l].type,difficultyType:h(P)[l].difficultyType},null,8,["name","id","entryKey","value","defaultValue","minValue","maxValue","step","type","difficultyType"])])):(A(),T("div",st,[i(nt,{class:"gap",name:a.$t(`serverConf.entry.name.${h(P)[l].id}`),entryKey:h(P)[l].id,value:h(P)[l].defaultValue,type:h(P)[l].type},null,8,["name","entryKey","value","type"])]))])}),128))}});const le=Ae(ct,[["__scopeId","data-v-188be91b"]]),ft=(e,n)=>{let a,s={};if(!n)return;const l=n.trim().split(`
`);let o=0,d=0;l.forEach(t=>{if(t.startsWith("OptionSettings=(")&&t.endsWith(")")){const u=t.substring(16,t.length-1),m=[];let v=0,f=0,p=!1;for(const y of u)y==='"'&&(p=!p),f++,y===","&&p===!1&&(m.push(u.substring(v,f-1)),v=f);m.push(u.substring(v,f));const g=ge({},a);m.forEach(y=>{const V=y.split("="),R=V[0];let S=V[1];const N=P[R];if(N){if(N.type==="string"&&S.startsWith('"')&&S.endsWith('"')&&(S=S.substring(1,S.length-1)),N.type==="float"||N.type==="integer"){const ee=Number(S);if(!Number.isFinite(ee)){console.error(`${N.id} has an invalid number: ${S}`);return}}g[N.id]=S,o++}}),s=g}else t.trim().startsWith(";")||t.trim()===""||t.trim()==="[/Script/Pal.PalGameWorldSettings]"||d++});let r="";return o===0||d>0?(r=e("serverConf.toast.invalidDescription}"),{entries:{},error:r}):o<Object.keys(P).length?(r=e("serverConf.toast.missingDescription}"),{entries:{},error:r}):{entries:s,error:r}},mt={class:"pal-conf"},Re=E({__name:"pal-conf",props:{name:{required:!1,type:String,default:""},conf:{required:!1,type:String,default:""}},setup(e){const n=e,{t:a}=ue();if(n.conf){let t=ft(a,n.conf);t!=null&&t.error&&(""+(t==null?void 0:t.error),Ne(t==null?void 0:t.error)),t==null||t.entries}const s=_(["1"]),l=_("1"),o=["ServerName","ServerDescription","AdminPassword","ServerPassword","PublicIP","PublicPort","ServerPlayerMaxNum"],d=["DayTimeSpeedRate","NightTimeSpeedRate","ExpRate","PalCaptureRate","PalSpawnNumRate","PalDamageRateAttack","PalDamageRateDefense","PalStomachDecreaceRate","PalStaminaDecreaceRate","PalAutoHPRegeneRate","PalAutoHpRegeneRateInSleep","PlayerDamageRateAttack","PlayerDamageRateDefense","PlayerStomachDecreaceRate","PlayerStaminaDecreaceRate","PlayerAutoHPRegeneRate","PlayerAutoHpRegeneRateInSleep","BuildObjectDamageRate","BuildObjectDeteriorationDamageRate","DropItemMaxNum","CollectionDropRate","CollectionObjectHpRate","CollectionObjectRespawnSpeedRate","EnemyDropItemRate","PalEggDefaultHatchingTime","bEnableInvaderEnemy","DeathPenalty","GuildPlayerMaxNum","BaseCampWorkerMaxNum"],r=["bEnablePlayerToPlayerDamage","bEnableFriendlyFire","bActiveUNKO","bEnableAimAssistPad","bEnableAimAssistKeyboard","DropItemMaxNum_UNKO","BaseCampMaxNum","DropItemAliveMaxHours","bAutoResetGuildNoOnlinePlayers","AutoResetGuildTimeNoOnlinePlayers","WorkSpeedRate","bIsMultiplay","bIsPvP","bCanPickupOtherGuildDeathPenaltyDrop","bEnableNonLoginPenalty","bEnableFastTravel","bIsStartLocationSelectByMap","bExistPlayerAfterLogout","bEnableDefenseOtherGuildPlayer","RCONEnabled","RCONPort","Region","bUseAuth","BanListURL"];return(t,u)=>{const m=pa,v=Ha,f=va,p=Fa,g=Ea,y=_a,V=Q;return A(),T("div",mt,[i(p,{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=R=>s.value=R)},{default:b(()=>[i(f,null,{default:b(()=>[i(v,{inset:"",title:"\u670D\u52A1\u5668\u8BBE\u7F6E",name:"1"},{default:b(()=>[i(m,{inset:"",style:{margin:"1px"}},{default:b(()=>[i(le,{name:"serverSettings",settings:o})]),_:1})]),_:1}),i(v,{title:"\u6E38\u620F\u5185\u8BBE\u7F6E",name:"2"},{default:b(()=>[i(le,{name:"inGameSliderSettings",settings:d})]),_:1}),i(v,{title:"\u9AD8\u7EA7\u8BBE\u7F6E",name:"3"},{default:b(()=>[i(le,{name:"advancedSettings",settings:r})]),_:1})]),_:1})]),_:1},8,["modelValue"]),i(V,{name:"radio"},{input:b(()=>[i(y,{modelValue:l.value,"onUpdate:modelValue":u[1]||(u[1]=R=>l.value=R),direction:"horizontal"},{default:b(()=>[i(g,{name:"1"},{default:b(()=>[$("PalWorldSettings.ini")]),_:1}),i(g,{name:"2"},{default:b(()=>[$("WorldOption.sav")]),_:1})]),_:1},8,["modelValue"])]),_:1})])}}});function pt(){return na.request({url:"/GameServer/conf/get",method:"GET"},{isTransformResponse:!1})}const bt=oa({id:"serverConf",state:()=>({result:"",error:"",conf:null}),getters:{getResult(){return this.result||""},getError(){return this.error||""},getConf(){return this.conf||{}}},actions:{setConf(e){this.conf=e},GetConf(){return ae(this,null,function*(){return new Promise((e,n)=>{pt().then(a=>{const s=a.message||null;(a.code||404)==200?(this.result=a.result,this.setConf(a.result||{})):this.error=s,e(a)}).catch(a=>{this.error=a,n(a)})})})}}});function vt(){return bt(ia)}const yt={style:{margin:"16px"}},gt={style:{margin:"16px"}},Pt=E({__name:"index",setup(e){const{t:n}=ue();_(""),_(""),_(!1);const a=_(0);_(["1"]);const s=_(""),l=vt(),o=()=>ae(this,null,function*(){yield l.GetConf(),ua(),l.getResult?(s.value=l.getConf.conf||"",""+s.value):l.getError&&(console.error("Failed to Get gameServerConf:",l.getError),Ne(n("toast.fail")+l.getError))});return(d,r)=>{const t=ra,u=se,m=ce,v=sa,f=ca;return A(),T("div",null,[i(fa),i(f,{active:a.value,"onUpdate:active":r[0]||(r[0]=p=>a.value=p)},{default:b(()=>[i(v,{title:d.$t("serverConf.LocalConf")},{default:b(()=>[i(Re,{name:"LocalConf",conf:s.value},null,8,["conf"]),M("div",yt,[i(m,{justify:"space-between"},{default:b(()=>[i(u,{span:"6"},{default:b(()=>[i(t,{type:"primary",block:"",onClick:o},{default:b(()=>[$(" \u8F7D\u5165 ")]),_:1})]),_:1}),i(u,{span:"12"}),i(u,{span:"6"},{default:b(()=>[i(t,{type:"success",block:""},{default:b(()=>[$(" \u4FDD\u5B58 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["title"]),i(v,{title:d.$t("serverConf.GenerateConf")},{default:b(()=>[i(Re),M("div",gt,[i(m,{justify:"space-between"},{default:b(()=>[i(u,{span:"6"},{default:b(()=>[i(t,{type:"primary",block:""},{default:b(()=>[$(" \u7C98\u8D34 ")]),_:1})]),_:1}),i(u,{span:"12"}),i(u,{span:"6"},{default:b(()=>[i(t,{type:"success",block:""},{default:b(()=>[$(" \u590D\u5236 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["title"])]),_:1},8,["active"])])}}});const Tt=Ae(Pt,[["__scopeId","data-v-3cb2a343"]]);export{Tt as default};