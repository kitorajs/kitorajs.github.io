import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i,hi as a,ti as o}from"./index-q72zUtm9.js";import{s}from"./react-CcDMwWiE.js";import{t as c}from"./history-B1jEdkX2.js";import"./kit-gallery-Atvibnty.js";import{t as l}from"./example-B8EaWveR.js";import{n as u,r as d,t as f}from"./history-CaYfULK2.js";var p=e(n(),1),m=i();function h(){let[e,t]=(0,p.useState)({x:40,color:`#2563eb`}),[n]=(0,p.useState)(()=>c()),r=e=>({label:`Nudge`,mergeKey:`nudge`,do:()=>t(t=>({...t,x:t.x+e})),undo:()=>t(t=>({...t,x:t.x-e}))}),i=(e,n)=>({label:`Colour`,do:()=>t(e=>({...e,color:n})),undo:()=>t(t=>({...t,color:e}))});return(0,m.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-[1fr_220px]`,children:[(0,m.jsxs)(`div`,{className:`space-y-3`,children:[(0,m.jsx)(`div`,{className:`relative h-16 rounded-md border bg-muted/30`,children:(0,m.jsx)(`div`,{className:`absolute top-3 size-10 rounded-md shadow-sm transition-[left]`,style:{left:e.x,backgroundColor:e.color}})}),(0,m.jsxs)(`div`,{className:`flex flex-wrap gap-1.5`,children:[(0,m.jsx)(o,{size:`sm`,variant:`outline`,onClick:()=>n.execute(r(-20)),children:`← Nudge`}),(0,m.jsx)(o,{size:`sm`,variant:`outline`,onClick:()=>n.execute(r(20)),children:`Nudge →`}),(0,m.jsx)(o,{size:`sm`,variant:`outline`,onClick:()=>n.execute(i(e.color,e.color===`#e11d48`?`#059669`:`#e11d48`)),children:`Colour`}),(0,m.jsx)(o,{size:`sm`,variant:`outline`,onClick:()=>n.transact(`Reset`,()=>{n.execute(r(40-e.x)),n.execute(i(e.color,`#2563eb`))}),children:`Reset (one step)`}),(0,m.jsx)(f,{source:n,className:`ml-auto`})]})]}),(0,m.jsx)(`div`,{className:`max-h-48 overflow-y-auto rounded-md border p-1`,children:(0,m.jsx)(u,{source:n})})]})}var g=`import { useState } from "react"
import { createHistory, HistoryList, HistoryControls, type Command } from "@kitora/collab"
import { Button } from "@kitora/ui/button"

interface Box { readonly x: number; readonly color: string }

/** Grouping: nudges with one \`mergeKey\` inside 600 ms fold into one step; \`transact\` makes several commands one step. */
export function BasicGrouping() {
  const [box, setBox] = useState<Box>({ x: 40, color: "#2563eb" })
  const [history] = useState(() => createHistory())
  const nudge = (dx: number): Command => ({
    label: "Nudge",
    mergeKey: "nudge",
    do: () => setBox((b) => ({ ...b, x: b.x + dx })),
    undo: () => setBox((b) => ({ ...b, x: b.x - dx })),
  })
  const recolor = (from: string, to: string): Command => ({ label: "Colour", do: () => setBox((b) => ({ ...b, color: to })), undo: () => setBox((b) => ({ ...b, color: from })) })
  const reset = () =>
    history.transact("Reset", () => {
      history.execute(nudge(40 - box.x))
      history.execute(recolor(box.color, "#2563eb"))
    })
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_220px]">
      <div className="space-y-3">
        <div className="relative h-16 rounded-md border bg-muted/30">
          <div className="absolute top-3 size-10 rounded-md shadow-sm transition-[left]" style={{ left: box.x, backgroundColor: box.color }} />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Button size="sm" variant="outline" onClick={() => history.execute(nudge(-20))}>← Nudge</Button>
          <Button size="sm" variant="outline" onClick={() => history.execute(nudge(20))}>Nudge →</Button>
          <Button size="sm" variant="outline" onClick={() => history.execute(recolor(box.color, box.color === "#e11d48" ? "#059669" : "#e11d48"))}>Colour</Button>
          <Button size="sm" variant="outline" onClick={reset}>Reset (one step)</Button>
          <HistoryControls source={history} className="ml-auto" />
        </div>
      </div>
      <div className="max-h-48 overflow-y-auto rounded-md border p-1">
        <HistoryList source={history} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>r(()=>import(`./grouping-xjMg5_lZ.js`),[]));var _=[`#e11d48`,`#2563eb`,`#059669`,`#d97706`,`#7c3aed`];function v(){let[e,t]=(0,p.useState)(()=>Array.from({length:24},()=>``)),[n]=(0,p.useState)(()=>c()),[r,i]=(0,p.useState)(_[0]),s=i=>{let a=e[i]??``;if(a===r)return;let o=e=>t(t=>t.map((t,n)=>n===i?e:t));n.execute({label:`Paint cell ${i+1}`,do:()=>o(r),undo:()=>o(a)})};return(0,m.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-[1fr_240px]`,children:[(0,m.jsxs)(`div`,{className:`space-y-2`,children:[(0,m.jsxs)(`div`,{className:`flex gap-1`,role:`radiogroup`,"aria-label":`Brush`,children:[_.map(e=>(0,m.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":r===e,"aria-label":e,onClick:()=>i(e),className:a(`size-6 rounded-full ring-offset-2 ring-offset-background`,r===e&&`ring-2 ring-foreground`),style:{backgroundColor:e}},e)),(0,m.jsx)(o,{size:`xs`,variant:`ghost`,className:`ml-auto`,onClick:()=>n.clear(),children:`Clear history`})]}),(0,m.jsx)(`div`,{className:`grid grid-cols-12 gap-1`,children:e.map((e,t)=>(0,m.jsx)(`button`,{type:`button`,"aria-label":`Cell ${t+1}`,onClick:()=>s(t),className:`aspect-square rounded border bg-muted/30 transition-colors hover:border-foreground/40`,style:e?{backgroundColor:e}:void 0},t))})]}),(0,m.jsx)(d,{source:n,className:`h-64`})]})}var y=`import { useState } from "react"
import { createHistory, HistoryPanel, type Command } from "@kitora/collab"
import { Button } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"

const COLORS = ["#e11d48", "#2563eb", "#059669", "#d97706", "#7c3aed"] as const

/** The history panel: every step listed, Undo / Redo, and time travel (click a step, or drag the scrubber). */
export function BasicHistoryPanel() {
  const [cells, setCells] = useState<readonly string[]>(() => Array.from({ length: 24 }, () => ""))
  const [history] = useState(() => createHistory())
  const [brush, setBrush] = useState<string>(COLORS[0])
  const paint = (i: number) => {
    const before = cells[i] ?? ""
    if (before === brush) return
    const set = (value: string): void => setCells((cs) => cs.map((c, j) => (j === i ? value : c)))
    history.execute({ label: \`Paint cell \${i + 1}\`, do: () => set(brush), undo: () => set(before) } satisfies Command)
  }
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_240px]">
      <div className="space-y-2">
        <div className="flex gap-1" role="radiogroup" aria-label="Brush">
          {COLORS.map((c) => (
            <button key={c} type="button" role="radio" aria-checked={brush === c} aria-label={c} onClick={() => setBrush(c)} className={cn("size-6 rounded-full ring-offset-2 ring-offset-background", brush === c && "ring-2 ring-foreground")} style={{ backgroundColor: c }} />
          ))}
          <Button size="xs" variant="ghost" className="ml-auto" onClick={() => history.clear()}>Clear history</Button>
        </div>
        <div className="grid grid-cols-12 gap-1">
          {cells.map((c, i) => (
            <button key={i} type="button" aria-label={\`Cell \${i + 1}\`} onClick={() => paint(i)} className="aspect-square rounded border bg-muted/30 transition-colors hover:border-foreground/40" style={c ? { backgroundColor: c } : undefined} />
          ))}
        </div>
      </div>
      <HistoryPanel source={history} className="h-64" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>r(()=>import(`./history-panel-DBrUSDp2.js`),[]));function b(){let[e,t]=(0,p.useState)(0),[n]=(0,p.useState)(()=>c()),r=(0,p.useRef)(null);s(n,r);let i=e=>({label:`${e>0?`+`:``}${e}`,do:()=>t(t=>t+e),undo:()=>t(t=>t-e)});return(0,m.jsxs)(`div`,{ref:r,tabIndex:-1,className:`flex items-center gap-3 outline-none`,children:[(0,m.jsx)(`span`,{className:`w-14 text-2xl font-semibold tabular-nums`,"data-testid":`count`,children:e}),(0,m.jsx)(o,{size:`sm`,variant:`outline`,onClick:()=>n.execute(i(1)),children:`+1`}),(0,m.jsx)(o,{size:`sm`,variant:`outline`,onClick:()=>n.execute(i(10)),children:`+10`}),(0,m.jsx)(o,{size:`sm`,variant:`outline`,onClick:()=>n.execute(i(-5)),children:`−5`}),(0,m.jsx)(f,{source:n,className:`ml-auto`})]})}var x=`import { useRef, useState } from "react"
import { createHistory, HistoryControls, useHistoryKeys, type Command } from "@kitora/collab"
import { Button } from "@kitora/ui/button"

/** The smallest history: commands that know how to undo themselves, and Undo / Redo (buttons, or ⌘Z / ⇧⌘Z with focus inside). */
export function BasicUndoRedo() {
  const [count, setCount] = useState(0)
  const [history] = useState(() => createHistory())
  const ref = useRef<HTMLDivElement>(null)
  useHistoryKeys(history, ref)
  const add = (by: number): Command => ({ label: \`\${by > 0 ? "+" : ""}\${by}\`, do: () => setCount((n) => n + by), undo: () => setCount((n) => n - by) })
  return (
    <div ref={ref} tabIndex={-1} className="flex items-center gap-3 outline-none">
      <span className="w-14 text-2xl font-semibold tabular-nums" data-testid="count">{count}</span>
      <Button size="sm" variant="outline" onClick={() => history.execute(add(1))}>+1</Button>
      <Button size="sm" variant="outline" onClick={() => history.execute(add(10))}>+10</Button>
      <Button size="sm" variant="outline" onClick={() => history.execute(add(-5))}>−5</Button>
      <HistoryControls source={history} className="ml-auto" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./undo-redo-C1qLgq8R.js`),[]));function S(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Basics: undo and redo`,children:`A generic history on the command pattern: each change knows how to do and undo itself. It works for any state, shared or not.`}),(0,m.jsx)(l,{n:1,title:`Undo and redo`,blurb:"`createHistory`, `execute` a command, and `HistoryControls`. ⌘Z / ⇧⌘Z (Ctrl+Z / Ctrl+Y) work while focus is inside.",code:x,children:(0,m.jsx)(b,{})}),(0,m.jsx)(l,{n:2,title:`Grouping and merging`,blurb:"Click Nudge quickly: the clicks fold into one step. Reset is two commands in one `transact`, so one Undo reverts both.",code:g,children:(0,m.jsx)(h,{})}),(0,m.jsx)(l,{n:3,title:`The history panel`,blurb:`Paint a few cells, then click an earlier step or drag the scrubber to travel back. Undone steps stay listed until new work replaces them.`,code:y,children:(0,m.jsx)(v,{})})]})}export{S as component};