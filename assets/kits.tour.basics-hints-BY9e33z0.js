import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{t as n}from"./funnel-C7osImS_.js";import{Ec as r,Uc as i,ri as a,zc as o}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as s}from"./example-B67lLz1F.js";import{t as c}from"./seen-CbDGwcmo.js";import{i as l,n as u,r as d,t as f}from"./beacon-kyv6M--z.js";import{t as p}from"./-kits.tour.shared-DdL2itEf.js";var m=o();function h(){return(0,m.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-5 gap-y-2`,children:[f.map(e=>(0,m.jsxs)(`span`,{className:`flex items-center gap-2 text-[12px] text-muted-foreground`,children:[(0,m.jsx)(u,{tone:e,"aria-label":`${e} beacon`}),e]},e)),(0,m.jsxs)(`span`,{className:`flex items-center gap-2 text-[12px] text-muted-foreground`,children:[(0,m.jsx)(u,{still:!0,"aria-label":`Still beacon`}),`still`]})]})}var g=`import { Beacon, BEACON_TONES } from "@kitora/tour"

// A Beacon is only the pulsing dot (a real button); place it anywhere.
export function BasicBeacons() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {BEACON_TONES.map((tone) => (
        <span key={tone} className="flex items-center gap-2 text-[12px] text-muted-foreground">
          <Beacon tone={tone} aria-label={\`\${tone} beacon\`} />
          {tone}
        </span>
      ))}
      <span className="flex items-center gap-2 text-[12px] text-muted-foreground">
        <Beacon still aria-label="Still beacon" />
        still
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>r(()=>import(`./beacons-DTc4NjlN.js`),[]));var _=e(i(),1);function v(){let e=c(`basics-coach`),t=(0,_.useRef)(null);return(0,m.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,m.jsxs)(`div`,{className:`flex h-36 items-start gap-2 rounded-lg border bg-card p-3`,children:[(0,m.jsxs)(a,{ref:t,size:`sm`,variant:`outline`,children:[(0,m.jsx)(n,{}),` Filter`]}),(0,m.jsx)(d,{id:`filters`,anchor:t,seen:e,title:`Saved filters`,body:`Save any filter and it shows up in the sidebar.`})]}),(0,m.jsx)(`div`,{children:(0,m.jsx)(a,{size:`xs`,variant:`ghost`,onClick:e.reset,children:`Show it again`})})]})}var y=`import { useRef } from "react"
import { Filter } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { CoachMark, useSeenSet } from "@kitora/tour"

// A coach mark opens by itself next to an element, once. Anchor it to a ref,
// an element or a \`data-tour\` key.
export function BasicCoachMark() {
  const seen = useSeenSet("basics-coach")
  const filter = useRef<HTMLButtonElement | null>(null)
  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-36 items-start gap-2 rounded-lg border bg-card p-3">
        <Button ref={filter} size="sm" variant="outline">
          <Filter /> Filter
        </Button>
        <CoachMark id="filters" anchor={filter} seen={seen} title="Saved filters" body="Save any filter and it shows up in the sidebar." />
      </div>
      <div>
        <Button size="xs" variant="ghost" onClick={seen.reset}>
          Show it again
        </Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>r(()=>import(`./coach-mark-bJXIFICU.js`),[]));function b(){let e=c(`basics-hotspots`);return(0,m.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,m.jsxs)(`div`,{className:`relative flex h-24 items-center gap-2 rounded-lg border bg-card px-3`,children:[(0,m.jsx)(a,{size:`sm`,variant:`outline`,children:`Export`}),(0,m.jsx)(`span`,{className:`absolute top-2 left-[4.6rem]`,children:(0,m.jsx)(l,{id:`export`,seen:e,title:`Export is here`,body:`CSV, Excel or a PDF report: pick on the next screen.`})}),(0,m.jsx)(a,{size:`sm`,variant:`outline`,className:`ml-auto`,children:`Automations`}),(0,m.jsx)(`span`,{className:`absolute top-2 right-2`,children:(0,m.jsx)(l,{id:`automations`,seen:e,tone:`success`,side:`left`,title:`New: automations`,body:`Run a rule when a task changes status.`})})]}),(0,m.jsx)(`div`,{children:(0,m.jsx)(a,{size:`xs`,variant:`ghost`,onClick:e.reset,children:`Bring them back`})})]})}var x=`import { Button } from "@kitora/ui/button"
import { Hotspot, useSeenSet } from "@kitora/tour"

// A hotspot is a beacon that opens a tip. "Got it" retires it, and the seen set
// remembers that across reloads.
export function BasicHotspot() {
  const seen = useSeenSet("basics-hotspots")
  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex h-24 items-center gap-2 rounded-lg border bg-card px-3">
        <Button size="sm" variant="outline">
          Export
        </Button>
        <span className="absolute top-2 left-[4.6rem]">
          <Hotspot id="export" seen={seen} title="Export is here" body="CSV, Excel or a PDF report: pick on the next screen." />
        </span>
        <Button size="sm" variant="outline" className="ml-auto">
          Automations
        </Button>
        <span className="absolute top-2 right-2">
          <Hotspot id="automations" seen={seen} tone="success" side="left" title="New: automations" body="Run a rule when a task changes status." />
        </span>
      </div>
      <div>
        <Button size="xs" variant="ghost" onClick={seen.reset}>
          Bring them back
        </Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./hotspot-CABVhvoj.js`),[]));function S(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Basics: hints`,children:"Point at one thing without taking over the page. Dismissals are remembered in a `useSeenSet`."}),(0,m.jsx)(s,{n:1,title:`Beacons`,blurb:`The pulsing dot on its own, in five tones. The pulse stops under reduced motion.`,code:g,children:(0,m.jsx)(p,{testId:`basic-beacons`,children:(0,m.jsx)(h,{})})}),(0,m.jsx)(s,{n:2,title:`Hotspots`,blurb:`Click a beacon for its tip; Got it retires it for good.`,code:x,children:(0,m.jsx)(p,{testId:`basic-hotspot`,children:(0,m.jsx)(b,{})})}),(0,m.jsx)(s,{n:3,title:`A coach mark`,blurb:`Opens by itself next to its element, once.`,code:y,children:(0,m.jsx)(p,{testId:`basic-coach`,children:(0,m.jsx)(v,{})})})]})}export{S as component};