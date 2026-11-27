import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Hc as r,Uc as i,zc as a}from"./index-BZuUy872.js";import{_ as o,g as s,h as c,t as l,v as u}from"./dock-CVAc3kEG.js";import{t as d}from"./panels-yb_hfL-N.js";import{n as f,r as p}from"./parts-CGX_mU_k.js";import"./kit-gallery-BBavj2rC.js";import{t as m}from"./example-B67lLz1F.js";var h=e(i(),1),g=e(r(),1),_=a();function v({title:e}){return(0,_.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,_.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}var y=d({note:{component:v}}),b=6,x=5,S=200;function C(){let e=b*x,t=0,n=n=>({orientation:`vertical`,children:Array.from({length:x},(r,i)=>{let a=n*x+i,o=Math.floor(S/e)+ +(a<S%e);return{id:`g${a+1}`,panels:Array.from({length:o},()=>({id:`p${++t}`,component:`note`,title:`Panel ${t}`}))}})});return s({orientation:`horizontal`,children:Array.from({length:b},(e,t)=>n(t))})}var w=e=>{let t=performance.now();return e(),performance.now()-t},T=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`;function E(){let[e]=(0,h.useState)(C),[t,n]=(0,h.useState)(null),[r,i]=(0,h.useState)(!0),[a,s]=(0,h.useState)(null),[d,m]=(0,h.useState)(null);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(p,{}),(0,_.jsxs)(`div`,{className:`mb-1 flex flex-wrap items-center gap-1.5 text-[12px]`,children:[(0,_.jsx)(`button`,{type:`button`,className:T,"data-action":`measure`,onClick:()=>{if(!t)return;let n=JSON.parse(JSON.stringify(u(e))),r=w(()=>void o(n,{components:Object.keys(y)})),i=[];for(let e=0;e<20;e++){let n=t.getLayout().nodes[`g${e%30+1}`];if(n?.kind!==`group`)continue;let r=n.panels[(n.panels.indexOf(n.active??``)+1)%n.panels.length];r&&i.push(w(()=>(0,g.flushSync)(()=>void t.activate(r))))}i.sort((e,t)=>e-t);let a=i[Math.floor(i.length/2)]??0,c=t.getLayout().nodes.g1,l=c?.kind===`group`?c.active:null;s({restoreModel:r,tabSwitch:a,dropCommit:l?w(()=>(0,g.flushSync)(()=>void t.movePanel(l,{type:`split`,node:`g30`,side:`right`}))):0})},children:`Measure`}),(0,_.jsx)(`button`,{type:`button`,className:T,"data-action":`remount`,onClick:()=>{(0,g.flushSync)(()=>i(!1)),m(w(()=>(0,g.flushSync)(()=>i(!0))))},children:`Remount`}),(0,_.jsxs)(`span`,{"data-testid":`stress-timings`,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,"data-restore":a?.restoreModel,"data-mount":d??void 0,"data-switch":a?.tabSwitch,"data-drop":a?.dropCommit,children:[a?`restore ${a.restoreModel.toFixed(1)} ms · tab switch ${a.tabSwitch.toFixed(1)} ms · drop ${a.dropCommit.toFixed(1)} ms`:`not measured`,d===null?``:` · mount ${d.toFixed(1)} ms`]})]}),(0,_.jsx)(`div`,{"data-testid":`stress-dock`,className:`mt-1 h-[620px] overflow-hidden rounded-md border`,children:r?(0,_.jsx)(l,{ref:n,panels:y,defaultLayout:e,parts:f,label:`Stress demo`,animate:!1}):null}),(0,_.jsxs)(`p`,{className:`mt-1 truncate font-mono text-[11px] text-muted-foreground`,children:[c(e).slice(0,160),`…`]})]})}var D=`import { useState } from "react"
import { flushSync } from "react-dom"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, restore, serialize, type DockLayout, type GroupSpec, type PanelProps, type TypedDockApi } from "@kitora/dock"

/** A tool panel (stub: replace with your panels). */
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

const panels = defineDockPanels({ note: { component: Note } })

/** Columns × rows of groups: 6 × 5 = 30 groups holding 200 panels. */
const COLUMNS = 6
const ROWS = 5
const PANELS_TOTAL = 200

/** 200 note panels spread over a 6 × 5 grid of groups. */
function stressLayout(): DockLayout {
  const groups = COLUMNS * ROWS
  let next = 0
  const column = (c: number) => ({
    orientation: "vertical" as const,
    children: Array.from({ length: ROWS }, (_, r): GroupSpec => {
      const g = c * ROWS + r
      const count = Math.floor(PANELS_TOTAL / groups) + (g < PANELS_TOTAL % groups ? 1 : 0)
      return { id: \`g\${g + 1}\`, panels: Array.from({ length: count }, () => ({ id: \`p\${++next}\`, component: "note", title: \`Panel \${next}\` })) }
    }),
  })
  return createLayout({ orientation: "horizontal", children: Array.from({ length: COLUMNS }, (_, c) => column(c)) })
}

/** One measurement, ms. */
interface Timings {
  readonly restoreModel: number
  readonly tabSwitch: number
  readonly dropCommit: number
}

const time = (fn: () => void): number => {
  const t = performance.now()
  fn()
  return performance.now() - t
}

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted"

/**
 * 200 kept-alive panels in 30 groups. Nothing to configure: hidden panels skip layout and paint, a sash drag
 * renders no panel content, and a change re-renders only the groups it touches. Measure times the budgeted paths.
 */
export function StressDock() {
  const [initial] = useState(stressLayout)
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  const [mounted, setMounted] = useState(true)
  const [timings, setTimings] = useState<Timings | null>(null)
  const [mountMs, setMountMs] = useState<number | null>(null)

  const measure = () => {
    if (!api) return
    const json = JSON.parse(JSON.stringify(serialize(initial)))
    const restoreModel = time(() => void restore(json, { components: Object.keys(panels) }))
    // A tab switch in a group: the median of 20, each flushed to the DOM.
    const switches: number[] = []
    for (let i = 0; i < 20; i++) {
      const group = api.getLayout().nodes[\`g\${(i % 30) + 1}\`]
      if (group?.kind !== "group") continue
      const target = group.panels[(group.panels.indexOf(group.active ?? "") + 1) % group.panels.length]
      if (target) switches.push(time(() => flushSync(() => void api.activate(target))))
    }
    switches.sort((a, b) => a - b)
    const tabSwitch = switches[Math.floor(switches.length / 2)] ?? 0
    const from = api.getLayout().nodes.g1
    const moving = from?.kind === "group" ? from.active : null
    const dropCommit = moving ? time(() => flushSync(() => void api.movePanel(moving, { type: "split", node: "g30", side: "right" }))) : 0
    setTimings({ restoreModel, tabSwitch, dropCommit })
  }

  return (
    <>
      <DockStyles />
      <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[12px]">
        <button type="button" className={BUTTON} data-action="measure" onClick={measure}>
          Measure
        </button>
        <button
          type="button"
          className={BUTTON}
          data-action="remount"
          onClick={() => {
            flushSync(() => setMounted(false))
            setMountMs(time(() => flushSync(() => setMounted(true))))
          }}
        >
          Remount
        </button>
        <span data-testid="stress-timings" className="font-mono text-[11px] text-muted-foreground tabular-nums" data-restore={timings?.restoreModel} data-mount={mountMs ?? undefined} data-switch={timings?.tabSwitch} data-drop={timings?.dropCommit}>
          {timings ? \`restore \${timings.restoreModel.toFixed(1)} ms · tab switch \${timings.tabSwitch.toFixed(1)} ms · drop \${timings.dropCommit.toFixed(1)} ms\` : "not measured"}
          {mountMs !== null ? \` · mount \${mountMs.toFixed(1)} ms\` : ""}
        </span>
      </div>
      <div data-testid="stress-dock" className="mt-1 h-[620px] overflow-hidden rounded-md border">
        {mounted ? <Dock ref={setApi} panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Stress demo" animate={false} /> : null}
      </div>
      <p className="mt-1 truncate font-mono text-[11px] text-muted-foreground">{layoutOutline(initial).slice(0, 160)}…</p>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>n(()=>import(`./stress-Bjq7XemR.js`),[]));function O(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Stress: 200 panels`,children:`Two hundred panels in thirty groups, every one kept alive. Dragging, resizing and switching stay smooth because hidden panels skip layout and paint, a sash drag re-renders no panel content, and a change re-renders only the groups it touches.`}),(0,_.jsx)(m,{n:1,title:`200 panels in 30 groups`,blurb:`Measure runs the budgeted paths once: restoring the 200-panel model from JSON, a tab switch (median of 20, flushed to the DOM), and a drop commit. Remount measures mounting the whole dock.`,code:D,children:(0,_.jsx)(E,{})})]})}export{O as component};