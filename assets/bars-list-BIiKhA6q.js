import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./file-text-jZN1FxYo.js";import{Bc as r,Cc as i,Ic as a}from"./index-9y5uwRd3.js";import{t as o}from"./badge-CMT8Lr82.js";import{a as s,n as c,o as l,t as u}from"./card-AZ_23TG_.js";import{t as d}from"./bars-list-SqWP9R1a.js";import{t as f}from"./funnel-DcL-zQea.js";var p=e({BarsListCompose:()=>_}),m=a(),h=[{step:`Cart`,people:1200},{step:`Details`,people:780},{step:`Payment`,people:520},{step:`Done`,people:466}],g=[{reason:`Shipping cost shown late`,count:214},{reason:`Had to create an account`,count:162},{reason:`Card declined`,count:41},{reason:`Coupon did not work`,count:97},{reason:`Just browsing`,count:220}];function _(){let e=h[0].people-h[h.length-1].people;return(0,m.jsxs)(u,{className:`w-full`,children:[(0,m.jsxs)(s,{className:`flex flex-row flex-wrap items-center justify-between gap-2`,children:[(0,m.jsx)(l,{children:`Where people drop off`}),(0,m.jsxs)(o,{variant:`secondary`,children:[e,` lost this week`]})]}),(0,m.jsxs)(c,{className:`grid grid-cols-1 gap-6 md:grid-cols-2`,children:[(0,m.jsx)(f,{title:`Checkout funnel`,data:h,label:e=>e.step,value:e=>e.people,height:200}),(0,m.jsx)(d,{title:`Reasons given`,data:g,label:e=>e.reason,value:e=>e.count,color:()=>`var(--dkc-8)`,limit:4})]})]})}var v=e({BarsListDefault:()=>b}),y=[{country:`Germany`,visitors:3120},{country:`United States`,visitors:4870},{country:`India`,visitors:2260},{country:`Brazil`,visitors:1410},{country:`Japan`,visitors:980}];function b(){return(0,m.jsx)(d,{title:`Visitors by country`,data:y,label:e=>e.country,value:e=>e.visitors})}var x=e({BarsListHeaders:()=>C}),S=[{site:`search.example`,visits:6420},{site:`news.example`,visits:1980},{site:`forum.example`,visits:1310},{site:`video.example`,visits:720}];function C(){return(0,m.jsx)(d,{title:`Top referrers`,data:S,label:e=>e.site,value:e=>e.visits,barsLabel:`Source`,valueLabel:`Visits`})}var w=e({BarsListLimit:()=>D}),T=[{term:`invoice template`,count:412},{term:`dark mode`,count:388},{term:`export csv`,count:301},{term:`keyboard shortcuts`,count:260},{term:`api key`,count:198},{term:`delete account`,count:87},{term:`pricing`,count:75}],E=[{step:`Open settings`,seconds:4},{step:`Find billing`,seconds:19},{step:`Change plan`,seconds:11}];function D(){return(0,m.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 md:grid-cols-2`,children:[(0,m.jsx)(d,{title:`Top searches (first 4)`,data:T,label:e=>e.term,value:e=>e.count,limit:4}),(0,m.jsx)(d,{title:`Time per step, in order`,data:E,label:e=>e.step,value:e=>e.seconds,sort:!1,formatValue:e=>`${e} s`})]})}var O=e({BarsListLinks:()=>A}),k=[{slug:`install`,title:`Install`,reads:2210},{slug:`theming`,title:`Theming`,reads:1640},{slug:`forms`,title:`Forms`,reads:1290},{slug:`data-grid`,title:`Data grid`,reads:870}];function A(){return(0,m.jsx)(d,{title:`Most read docs`,data:k,label:e=>e.title,value:e=>e.reads,href:e=>`#docs-${e.slug}`,renderLabel:()=>(0,m.jsx)(n,{"aria-hidden":`true`,className:`size-3.5 text-muted-foreground`})})}var j=e({BarsListSelect:()=>P}),M=t(r(),1),N=[{team:`Platform`,open:34,tint:`var(--dkc-1)`},{team:`Mobile`,open:21,tint:`var(--dkc-3)`},{team:`Web`,open:17,tint:`var(--dkc-5)`},{team:`Data`,open:3,tint:`var(--dkc-7)`}];function P(){let[e,t]=(0,M.useState)(`none`);return(0,m.jsxs)(`div`,{className:`grid gap-2`,children:[(0,m.jsx)(d,{title:`Open bugs by team`,data:N,label:e=>e.team,value:e=>e.open,color:e=>e.tint,max:40,minBarSize:8,onSelect:e=>t(e.team)}),(0,m.jsxs)(`p`,{className:`text-[13px] text-muted-foreground`,children:[`Selected: `,e]})]})}var F=`import { BarsList, FunnelChart } from "@kitora/charts"
import { Badge } from "@kitora/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"

const CHECKOUT = [
  { step: "Cart", people: 1200 },
  { step: "Details", people: 780 },
  { step: "Payment", people: 520 },
  { step: "Done", people: 466 },
]

const REASONS = [
  { reason: "Shipping cost shown late", count: 214 },
  { reason: "Had to create an account", count: 162 },
  { reason: "Card declined", count: 41 },
  { reason: "Coupon did not work", count: 97 },
  { reason: "Just browsing", count: 220 },
]

export function BarsListCompose() {
  const lost = CHECKOUT[0].people - CHECKOUT[CHECKOUT.length - 1].people
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-2">
        <CardTitle>Where people drop off</CardTitle>
        <Badge variant="secondary">{lost} lost this week</Badge>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FunnelChart title="Checkout funnel" data={CHECKOUT} label={(d) => d.step} value={(d) => d.people} height={200} />
        <BarsList title="Reasons given" data={REASONS} label={(d) => d.reason} value={(d) => d.count} color={() => "var(--dkc-8)"} limit={4} />
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>i(()=>import(`./compose-D-1GZCsg.js`),[]));var I=`import { BarsList } from "@kitora/charts"

const COUNTRIES = [
  { country: "Germany", visitors: 3120 },
  { country: "United States", visitors: 4870 },
  { country: "India", visitors: 2260 },
  { country: "Brazil", visitors: 1410 },
  { country: "Japan", visitors: 980 },
]

export function BarsListDefault() {
  return <BarsList title="Visitors by country" data={COUNTRIES} label={(d) => d.country} value={(d) => d.visitors} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>i(()=>import(`./default-m3ntmv2B.js`),[]));var L=`import { BarsList } from "@kitora/charts"

const REFERRERS = [
  { site: "search.example", visits: 6420 },
  { site: "news.example", visits: 1980 },
  { site: "forum.example", visits: 1310 },
  { site: "video.example", visits: 720 },
]

export function BarsListHeaders() {
  return <BarsList title="Top referrers" data={REFERRERS} label={(d) => d.site} value={(d) => d.visits} barsLabel="Source" valueLabel="Visits" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>i(()=>import(`./headers--NsUCylm.js`),[]));var R=`import { BarsList } from "@kitora/charts"

const SEARCHES = [
  { term: "invoice template", count: 412 },
  { term: "dark mode", count: 388 },
  { term: "export csv", count: 301 },
  { term: "keyboard shortcuts", count: 260 },
  { term: "api key", count: 198 },
  { term: "delete account", count: 87 },
  { term: "pricing", count: 75 },
]

const STEPS = [
  { step: "Open settings", seconds: 4 },
  { step: "Find billing", seconds: 19 },
  { step: "Change plan", seconds: 11 },
]

export function BarsListLimit() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <BarsList title="Top searches (first 4)" data={SEARCHES} label={(d) => d.term} value={(d) => d.count} limit={4} />
      <BarsList title="Time per step, in order" data={STEPS} label={(d) => d.step} value={(d) => d.seconds} sort={false} formatValue={(v) => \`\${v} s\`} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>i(()=>import(`./limit-BrKopiM_.js`),[]));var z=`import { FileText } from "lucide-react"
import { BarsList } from "@kitora/charts"

const DOCS = [
  { slug: "install", title: "Install", reads: 2210 },
  { slug: "theming", title: "Theming", reads: 1640 },
  { slug: "forms", title: "Forms", reads: 1290 },
  { slug: "data-grid", title: "Data grid", reads: 870 },
]

export function BarsListLinks() {
  return (
    <BarsList
      title="Most read docs"
      data={DOCS}
      label={(d) => d.title}
      value={(d) => d.reads}
      href={(d) => \`#docs-\${d.slug}\`}
      renderLabel={() => <FileText aria-hidden="true" className="size-3.5 text-muted-foreground" />}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>i(()=>import(`./links-CX57V_gw.js`),[]));var B=`import { useState } from "react"
import { BarsList } from "@kitora/charts"

const TEAMS = [
  { team: "Platform", open: 34, tint: "var(--dkc-1)" },
  { team: "Mobile", open: 21, tint: "var(--dkc-3)" },
  { team: "Web", open: 17, tint: "var(--dkc-5)" },
  { team: "Data", open: 3, tint: "var(--dkc-7)" },
]

export function BarsListSelect() {
  const [team, setTeam] = useState("none")
  return (
    <div className="grid gap-2">
      <BarsList title="Open bugs by team" data={TEAMS} label={(d) => d.team} value={(d) => d.open} color={(d) => d.tint} max={40} minBarSize={8} onSelect={(d) => setTeam(d.team)} />
      <p className="text-[13px] text-muted-foreground">Selected: {team}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>i(()=>import(`./select-kUX9X1o-.js`),[]));var V={"./demos/bars-list/compose.tsx":p,"./demos/bars-list/default.tsx":v,"./demos/bars-list/headers.tsx":x,"./demos/bars-list/limit.tsx":w,"./demos/bars-list/links.tsx":O,"./demos/bars-list/select.tsx":j},H={"./demos/bars-list/compose.tsx":F,"./demos/bars-list/default.tsx":I,"./demos/bars-list/headers.tsx":L,"./demos/bars-list/limit.tsx":R,"./demos/bars-list/links.tsx":z,"./demos/bars-list/select.tsx":B};export{V as modules,H as sources};