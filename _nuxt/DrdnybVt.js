import{_ as C}from"./CHJvTz-a.js";import{d as B,b8 as S,ap as w,aq as D,r as I,D as f,c as l,e as p,f as y,F as $,ah as A,n as m,E as a,h as E,t as F,ai as G,bc as N,ak as P}from"./DVF44h7v.js";const V=["onClick"],L=B({inheritAttrs:!1,__name:"CodeGroup",props:{class:{type:[String,Object,Array],default:void 0}},setup(g,{expose:v}){const h={wrapper:"relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",header:"flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",tab:{base:"px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",active:"bg-gray-100 dark:bg-gray-800",inactive:"hover:bg-gray-50 dark:hover:bg-gray-800/50",icon:{base:""}}},_=g,d=S(),{ui:r,attrs:k}=w("content.codeGroup",void 0,h,D(_,"class"),!0),s=I(0);v({selectedIndex:s});function u(e,t){var i,c,o,n;return typeof e.type=="symbol"?(i=e.children)==null?void 0:i.map(u):{label:((c=e.props)==null?void 0:c.filename)||((o=e.props)==null?void 0:o.label)||`${t}`,icon:(n=e.props)==null?void 0:n.icon,component:e}}const b=f(()=>{var e,t;return((t=(e=d.default)==null?void 0:e.call(d))==null?void 0:t.flatMap(u).filter(Boolean))||[]}),x=f(()=>b.value.find((e,t)=>t===s.value));return(e,t)=>{var c;const i=C;return l(),p("div",P({class:a(r).wrapper},a(k)),[y("div",{class:m(a(r).header)},[(l(!0),p($,null,A(a(b),(o,n)=>(l(),p("button",{key:n,tabindex:"-1",class:m([a(r).tab.base,a(s)===n?a(r).tab.active:a(r).tab.inactive]),onClick:j=>s.value=n},[E(i,{icon:o.icon,filename:o.label,class:m(a(r).tab.icon.base)},null,8,["icon","filename","class"]),y("span",null,F(o.label),1)],10,V))),128))],2),(l(),G(N((c=a(x))==null?void 0:c.component),{key:a(s),"hide-header":""}))],16)}}});export{L as default};
