import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{t as a}from"./bars-list-DtaNPqbT.js";import{t as o}from"./funnel-iqN3ydGQ.js";import"./kit-gallery-Bph7isB2.js";import{t as s}from"./example-BGnSQG2Y.js";var c=i(),l=[{path:`/docs/getting-started`,views:8210},{path:`/`,views:12480},{path:`/pricing`,views:5130},{path:`/blog/release-notes-for-the-autumn-update`,views:2410},{path:`/docs/api`,views:3970},{path:`/changelog`,views:960},{path:`/careers`,views:410},{path:`/legal/privacy`,views:120}];function u(){return(0,c.jsx)(a,{title:`Top pages`,description:`Views, last 7 days`,data:l,label:e=>e.path,value:e=>e.views,barsLabel:`Page`,valueLabel:`Views`,limit:5,href:e=>`#page=${encodeURIComponent(e.path)}`})}var d=`import { BarsList } from "@kitora/charts"

interface Page {
  readonly path: string
  readonly views: number
}

// Made-up page views for one week.
const PAGES: readonly Page[] = [
  { path: "/docs/getting-started", views: 8210 },
  { path: "/", views: 12480 },
  { path: "/pricing", views: 5130 },
  { path: "/blog/release-notes-for-the-autumn-update", views: 2410 },
  { path: "/docs/api", views: 3970 },
  { path: "/changelog", views: 960 },
  { path: "/careers", views: 410 },
  { path: "/legal/privacy", views: 120 },
]

/** Sorted largest first, column headers, the first five rows shown and each row a link (a 44 px target in tab order). */
export function BasicBarsList() {
  return <BarsList title="Top pages" description="Views, last 7 days" data={PAGES} label={(d) => d.path} value={(d) => d.views} barsLabel="Page" valueLabel="Views" limit={5} href={(d) => \`#page=\${encodeURIComponent(d.path)}\`} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(d,()=>r(()=>import(`./bars-list-XQggXgzS.js`),[]));var f=e(n(),1),p=[{name:`Search`,visits:5400,tint:`var(--dkc-1)`},{name:`Direct`,visits:3100,tint:`var(--dkc-3)`},{name:`Newsletter`,visits:1850,tint:`var(--dkc-5)`},{name:`Social`,visits:1320,tint:`var(--dkc-2)`},{name:`Partners`,visits:260,tint:`var(--dkc-7)`}];function m(){let[e,t]=(0,f.useState)(null);return(0,c.jsxs)(`div`,{className:`grid gap-2`,children:[(0,c.jsx)(a,{title:`Visits by source`,data:p,label:e=>e.name,value:e=>e.visits,color:e=>e.tint,max:6e3,minBarSize:8,renderLabel:e=>(0,c.jsx)(`span`,{"aria-hidden":`true`,className:`size-2 rounded-full`,style:{background:e.tint}}),onSelect:e=>t(e.name),formatValue:e=>e.toLocaleString(`en-US`)}),(0,c.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,"aria-live":`polite`,children:e?`Filtered to ${e}`:`Pick a source to filter the report.`})]})}var h=`import { useState } from "react"
import { BarsList } from "@kitora/charts"

interface Source {
  readonly name: string
  readonly visits: number
  readonly tint: string
}

const SOURCES: readonly Source[] = [
  { name: "Search", visits: 5400, tint: "var(--dkc-1)" },
  { name: "Direct", visits: 3100, tint: "var(--dkc-3)" },
  { name: "Newsletter", visits: 1850, tint: "var(--dkc-5)" },
  { name: "Social", visits: 1320, tint: "var(--dkc-2)" },
  { name: "Partners", visits: 260, tint: "var(--dkc-7)" },
]

/** Rows as buttons (\`onSelect\`), a colour per row, a dot before each name (\`renderLabel\`), a fixed \`max\` and \`minBarSize\` so the smallest bar still shows. */
export function BarsListOptions() {
  const [picked, setPicked] = useState<string | null>(null)
  return (
    <div className="grid gap-2">
      <BarsList
        title="Visits by source"
        data={SOURCES}
        label={(d) => d.name}
        value={(d) => d.visits}
        color={(d) => d.tint}
        max={6000}
        minBarSize={8}
        renderLabel={(d) => <span aria-hidden="true" className="size-2 rounded-full" style={{ background: d.tint }} />}
        onSelect={(d) => setPicked(d.name)}
        formatValue={(v) => v.toLocaleString("en-US")}
      />
      <p className="text-[13px] text-muted-foreground" aria-live="polite">
        {picked ? \`Filtered to \${picked}\` : "Pick a source to filter the report."}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>r(()=>import(`./bars-list-options-DD25DW1l.js`),[]));var g=[{stage:`Visited pricing`,people:18400},{stage:`Started trial`,people:6120},{stage:`Invited a teammate`,people:2890},{stage:`Connected data`,people:1910},{stage:`Paid`,people:640}];function _(){return(0,c.jsx)(o,{title:`Trial signup funnel`,description:`Unique people, last 30 days`,data:g,label:e=>e.stage,value:e=>e.people})}var v=`import { FunnelChart } from "@kitora/charts"

interface Stage {
  readonly stage: string
  readonly people: number
}

// A made-up signup funnel for one month.
const SIGNUP: readonly Stage[] = [
  { stage: "Visited pricing", people: 18400 },
  { stage: "Started trial", people: 6120 },
  { stage: "Invited a teammate", people: 2890 },
  { stage: "Connected data", people: 1910 },
  { stage: "Paid", people: 640 },
]

/** Stages in order, each joined to the next. Hover a stage, or focus the plot and use the arrow keys, to read its share of the first and of the previous step. */
export function BasicFunnel() {
  return <FunnelChart title="Trial signup funnel" description="Unique people, last 30 days" data={SIGNUP} label={(d) => d.stage} value={(d) => d.people} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>r(()=>import(`./funnel-L-NCVY__.js`),[]));var y=[{step:`Cart`,orders:920},{step:`Shipping`,orders:610},{step:`Coupon applied`,orders:640},{step:`Payment`,orders:455},{step:`Confirmed`,orders:402}];function b(){return(0,c.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 lg:grid-cols-2`,children:[(0,c.jsx)(o,{title:`Checkout, step to step`,data:y,label:e=>e.step,value:e=>e.orders,orientation:`horizontal`,percentOf:`previous`,height:200}),(0,c.jsx)(o,{title:`Checkout as bars`,data:y,label:e=>e.step,value:e=>e.orders,shape:`bars`,colorBy:`stage`,labels:`percent`,gap:6,height:220})]})}var x=`import { FunnelChart } from "@kitora/charts"

interface Step {
  readonly step: string
  readonly orders: number
}

// A made-up checkout; "Coupon applied" is larger than the step before it and is drawn as it is.
const CHECKOUT: readonly Step[] = [
  { step: "Cart", orders: 920 },
  { step: "Shipping", orders: 610 },
  { step: "Coupon applied", orders: 640 },
  { step: "Payment", orders: 455 },
  { step: "Confirmed", orders: 402 },
]

/** \`orientation="horizontal"\` with \`percentOf="previous"\`, then \`shape="bars"\` with \`colorBy="stage"\` and percent-only labels. */
export function FunnelOptions() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <FunnelChart title="Checkout, step to step" data={CHECKOUT} label={(d) => d.step} value={(d) => d.orders} orientation="horizontal" percentOf="previous" height={200} />
      <FunnelChart title="Checkout as bars" data={CHECKOUT} label={(d) => d.step} value={(d) => d.orders} shape="bars" colorBy="stage" labels="percent" gap={6} height={220} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./funnel-options--CyA3IwA.js`),[]));function S(){return(0,c.jsxs)(`div`,{children:[(0,c.jsx)(t,{title:`Basics: funnels and ranked lists`,children:`Data where order is the point: a funnel keeps its stages in the order given and shows how many make it from one to the next; a bars list ranks rows largest first.`}),(0,c.jsx)(s,{n:1,title:`Funnel`,blurb:"`label` and `value` per stage, never sorted. Labels show the value and the share of the first stage; the tooltip and the live region add the share of the previous step.",code:v,children:(0,c.jsx)(_,{})}),(0,c.jsx)(s,{n:2,title:`Funnel options`,blurb:"`orientation`, `shape` (`funnel` or `bars`), `gap`, `labels`, `percentOf` and `colorBy`. A stage larger than the one before it is drawn as it is.",code:x,children:(0,c.jsx)(b,{})}),(0,c.jsx)(s,{n:3,title:`Bars list`,blurb:"A ranked list in HTML: the name and the value are real text over a bar sized by share of the largest. `barsLabel` and `valueLabel` add headers, `limit` cuts the list and says how many were left out, `href` makes each row a link.",code:d,children:(0,c.jsx)(u,{})}),(0,c.jsx)(s,{n:4,title:`Bars list options`,blurb:"`onSelect` makes rows buttons, `color` tints each bar, `renderLabel` adds an icon before the name, `max` and `minBarSize` size the bars.",code:h,children:(0,c.jsx)(m,{})})]})}export{S as component};