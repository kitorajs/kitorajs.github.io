import{s as e}from"./kit-docs-DpYhPoxM.js";import{t}from"./git-commit-horizontal-On2VFlmH.js";import{t as n}from"./rocket-CEgGnAdT.js";import{t as r}from"./shield-check-Do7Razr0.js";import{Cc as i,Ic as a}from"./index-q72zUtm9.js";import{t as o}from"./json-viewer-BRe82VJI.js";import{t as s}from"./timeline-DcgQzW6Q.js";import{t as c}from"./description-list-DqovcqOi.js";import{r as l}from"./badges-DPTyXhb4.js";import"./kit-gallery-Atvibnty.js";import{t as u}from"./example-B8EaWveR.js";var d=a(),f=[{term:`Region`,value:`eu-west-1`},{term:`Runtime`,value:`Node 22`},{term:`Memory`,value:`1 GB`},{term:`Commit`,value:`a1c9e07`,mono:!0,copy:`a1c9e07`},{term:`Created`,value:`15 Oct 2026, 14:02`},{term:`Owner`,value:`Platform team`,hint:`Pages the on-call engineer`},{term:`Domains`,value:`acme.dev, www.acme.dev, api.acme.dev`,wide:!0}];function p(){return(0,d.jsx)(c,{layout:`grid`,columns:3,items:f})}var m=`import { DescriptionList } from "@kitora/display"

const ITEMS = [
  { term: "Region", value: "eu-west-1" },
  { term: "Runtime", value: "Node 22" },
  { term: "Memory", value: "1 GB" },
  { term: "Commit", value: "a1c9e07", mono: true, copy: "a1c9e07" },
  { term: "Created", value: "15 Oct 2026, 14:02" },
  { term: "Owner", value: "Platform team", hint: "Pages the on-call engineer" },
  { term: "Domains", value: "acme.dev, www.acme.dev, api.acme.dev", wide: true },
]

/** The grid layout: stacked pairs in columns, for a detail header; \`wide\` spans the row. */
export function BasicDescriptionGrid() {
  return <DescriptionList layout="grid" columns={3} items={ITEMS} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>i(()=>import(`./description-grid-CSu1YywI.js`),[]));var h=[{term:`Status`,value:(0,d.jsx)(l,{tone:`success`,dot:!0,children:`Active`})},{term:`Customer ID`,value:`cus_8812`,mono:!0,copy:`cus_8812`},{term:`Email`,value:`ada@acme.dev`,copy:`ada@acme.dev`},{term:`Plan`,value:`Team · annual`,hint:`Renews on 1 March`},{term:`Notes`,value:null}];function g(){return(0,d.jsx)(c,{items:h,className:`max-w-md`})}var _=`import { DescriptionList, StatusBadge } from "@kitora/display"

const ITEMS = [
  { term: "Status", value: <StatusBadge tone="success" dot>Active</StatusBadge> },
  { term: "Customer ID", value: "cus_8812", mono: true, copy: "cus_8812" },
  { term: "Email", value: "ada@acme.dev", copy: "ada@acme.dev" },
  { term: "Plan", value: "Team · annual", hint: "Renews on 1 March" },
  { term: "Notes", value: null },
]

/** Term left, value right; hover a row for its copy button. A missing value shows a dash. */
export function BasicDescriptionList() {
  return <DescriptionList items={ITEMS} className="max-w-md" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>i(()=>import(`./description-list-B9_AK0jO.js`),[]));var v={id:42,name:`Ada`,roles:[`admin`,`billing`],settings:{theme:`dark`,beta:!0,quota:null}};function y(){return(0,d.jsx)(o,{value:v,rootName:`user`})}var b=`import { JsonViewer } from "@kitora/display"

const VALUE = {
  id: 42,
  name: "Ada",
  roles: ["admin", "billing"],
  settings: { theme: "dark", beta: true, quota: null },
}

/** A collapsible tree: search opens matches, hover a row for Copy path and Copy value, ↑/↓/←/→ move. */
export function BasicJsonViewer() {
  return <JsonViewer value={VALUE} rootName="user" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>i(()=>import(`./json-viewer-Cm3Ht676.js`),[]));var x=new Date(`2026-10-15T14:30:00Z`),S=e=>new Date(x.getTime()-e*6e4),C=[{id:`1`,title:`Deployed to production`,tone:`success`,icon:(0,d.jsx)(n,{}),time:S(4)},{id:`2`,title:`Checks passed`,tone:`info`,icon:(0,d.jsx)(r,{}),time:S(11),body:`12 of 12 checks, 3 min 20 s`},{id:`3`,title:`Pushed a1c9e07`,icon:(0,d.jsx)(t,{}),time:S(15)}];function w(){return(0,d.jsx)(s,{events:C,now:x,className:`max-w-md`})}var T=`import { Timeline } from "@kitora/display"
import { GitCommit, Rocket, ShieldCheck } from "lucide-react"

/** The gallery's fixed clock: every relative time is measured from here. */
const DEMO_NOW = new Date("2026-10-15T14:30:00Z")

/** \`minutes\` before {@link DEMO_NOW}. */
const minutesAgo = (minutes: number) => new Date(DEMO_NOW.getTime() - minutes * 60_000)

const EVENTS = [
  { id: "1", title: "Deployed to production", tone: "success" as const, icon: <Rocket />, time: minutesAgo(4) },
  { id: "2", title: "Checks passed", tone: "info" as const, icon: <ShieldCheck />, time: minutesAgo(11), body: "12 of 12 checks, 3 min 20 s" },
  { id: "3", title: "Pushed a1c9e07", icon: <GitCommit />, time: minutesAgo(15) },
]

/** Events on a rail with icons, tones and times relative to \`now\` (hover a time for the absolute one). */
export function BasicTimeline() {
  return <Timeline events={EVENTS} now={DEMO_NOW} className="max-w-md" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>i(()=>import(`./timeline-DZKFASbk.js`),[]));function E(){return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(e,{title:`Basics: data`,children:`Key–value facts, a JSON tree and a timeline: the three ways a detail page shows a record.`}),(0,d.jsx)(u,{n:1,title:`A description list`,blurb:`Term left, value right. Rows can copy, be monospace, or carry a hint.`,code:_,children:(0,d.jsx)(g,{})}),(0,d.jsx)(u,{n:2,title:`A description grid`,blurb:"The `grid` layout puts stacked pairs in columns, for a detail header.",code:m,children:(0,d.jsx)(p,{})}),(0,d.jsx)(u,{n:3,title:`A JSON tree`,blurb:`Fold containers, search keys and values, copy a path or a value.`,code:b,children:(0,d.jsx)(y,{})}),(0,d.jsx)(u,{n:4,title:`A timeline`,blurb:`Events with icons, tones and relative times on a vertical rail.`,code:T,children:(0,d.jsx)(w,{})})]})}export{E as component};