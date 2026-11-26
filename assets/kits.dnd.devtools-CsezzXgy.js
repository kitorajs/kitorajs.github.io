import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{C as a,x as o}from"./glue-D_yEomvg.js";import{s}from"./pointer-sensor-lqz55YZO.js";import{d as c,l,t as u,u as d}from"./kit-Uq9GZ0sn.js";import"./kit-gallery-B-Yr9fP4.js";import{t as f}from"./example-CZLJLtIC.js";import{i as p,n as m,t as h}from"./devtools-DIFrqNRg.js";var g=e(n(),1),_=i(),v=`flex h-7 cursor-grab items-center rounded border bg-card px-2 text-[13px] select-none hover:bg-accent`,y={todo:[`Todo 1`,`Todo 2`,`Todo 3`,`Todo 4`],done:[`Done 1`,`Done 2`]};function b({id:e,index:t,container:n}){let{ref:r}=d({id:e,container:n,index:t,data:e});return(0,_.jsx)(`li`,{ref:r,"data-item":e,tabIndex:0,className:v,children:e})}function x({id:e,children:t}){let{ref:n,isOver:r}=l({id:e,kind:`container`});return(0,_.jsxs)(`div`,{ref:n,"data-zone":e,className:`flex min-h-16 flex-col gap-1 rounded-md border border-dashed p-1 text-[12px] text-muted-foreground`,children:[(0,_.jsxs)(`span`,{className:`px-1`,children:[e,r?` · over`:``]}),t]})}function S(){let[e]=(0,g.useState)(()=>p()),[t,n]=(0,g.useState)(!0),[r,i]=(0,g.useState)(y);return(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,_.jsxs)(`label`,{className:`flex items-center gap-1 text-[12px]`,children:[(0,_.jsx)(`input`,{type:`checkbox`,"data-demo-toggle":`overlay`,checked:t,onChange:e=>n(e.target.checked)}),`Show the devtools overlay for this example`]}),(0,_.jsxs)(u,{collision:e.detector,onMove:e=>i(t=>o(t,e,e=>e)),children:[(0,_.jsxs)(`div`,{"data-demo":`overlay`,className:`grid max-w-xl gap-3 sm:grid-cols-2`,children:[(0,_.jsx)(`ul`,{className:`flex flex-col gap-1 rounded-md border bg-muted/30 p-1`,children:(r.todo??[]).map((e,t)=>(0,_.jsx)(b,{id:e,index:t,container:`todo`},e))}),(0,_.jsx)(x,{id:`done`,children:(0,_.jsx)(`ul`,{className:`flex flex-col gap-1`,children:(r.done??[]).map((e,t)=>(0,_.jsx)(b,{id:e,index:t,container:`done`},e))})})]}),t?(0,_.jsx)(m,{trace:e,corner:`bottom-right`}):null]})]})}var C=`import { useState, type ReactNode } from "react"
import { applyMoveAcross, DndProvider, useDroppable, useSortable, type Layout, type MoveOp } from "@kitora/dnd"
import { DndDevtools, traceCollision, type CollisionTrace } from "@kitora/dnd/devtools"

const ROW_CLASS = "flex h-7 cursor-grab items-center rounded border bg-card px-2 text-[13px] select-none hover:bg-accent"
// stub: replace with your data
const LISTS: Layout<string> = { todo: ["Todo 1", "Todo 2", "Todo 3", "Todo 4"], done: ["Done 1", "Done 2"] }

function Row({ id, index, container }: { id: string; index: number; container: string }) {
  const { ref } = useSortable({ id, container, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className={ROW_CLASS}>
      {id}
    </li>
  )
}

// A container target around a nested item list: the overlay outlines both levels.
function Zone({ id, children }: { id: string; children?: ReactNode }) {
  const { ref, isOver } = useDroppable({ id, kind: "container" })
  return (
    <div ref={ref} data-zone={id} className="flex min-h-16 flex-col gap-1 rounded-md border border-dashed p-1 text-[12px] text-muted-foreground">
      <span className="px-1">
        {id}
        {isOver ? " · over" : ""}
      </span>
      {children}
    </div>
  )
}

export function InspectedLists() {
  // wrap the detector you use (default pointerWithin) so the panel can list every hit with its score
  const [trace] = useState<CollisionTrace>(() => traceCollision())
  const [on, setOn] = useState(true)
  const [lists, setLists] = useState<Layout<string>>(LISTS)
  // the "done" zone is a container target with the same id as its list, so a drop on its empty space lands at the end of that list
  const onMove = (op: MoveOp) => setLists((all) => applyMoveAcross(all, op, (x) => x))
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-1 text-[12px]">
        <input type="checkbox" data-demo-toggle="overlay" checked={on} onChange={(e) => setOn(e.target.checked)} />
        Show the devtools overlay for this example
      </label>
      <DndProvider collision={trace.detector} onMove={onMove}>
        <div data-demo="overlay" className="grid max-w-xl gap-3 sm:grid-cols-2">
          <ul className="flex flex-col gap-1 rounded-md border bg-muted/30 p-1">
            {(lists.todo ?? []).map((id, index) => (
              <Row key={id} id={id} index={index} container="todo" />
            ))}
          </ul>
          <Zone id="done">
            <ul className="flex flex-col gap-1">
              {(lists.done ?? []).map((id, index) => (
                <Row key={id} id={id} index={index} container="done" />
              ))}
            </ul>
          </Zone>
        </div>
        {/* renders nothing in production builds */}
        {on ? <DndDevtools trace={trace} corner="bottom-right" /> : null}
      </DndProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>r(()=>import(`./devtools-targets-CL0OJdJ_.js`),[]));var w=24,T=`flex h-7 cursor-grab items-center rounded border bg-card px-2 text-[13px] select-none hover:bg-accent`;function E({id:e,index:t,container:n}){let{ref:r}=d({id:e,container:n,index:t,data:e});return(0,_.jsx)(`li`,{ref:r,"data-item":e,tabIndex:0,className:T,children:e})}function D({name:e,on:t,set:n}){return(0,_.jsxs)(`label`,{className:`flex items-center gap-1 text-[12px]`,children:[(0,_.jsx)(`input`,{type:`checkbox`,"data-demo-toggle":e,checked:t,onChange:e=>n(e.target.checked)}),`Show the devtools overlay for this example`]})}function O(){let[e]=(0,g.useState)(()=>p(a)),[t]=(0,g.useState)(()=>[s(w)]),[n,r]=(0,g.useState)(!1),{items:i,onMove:o}=c({defaultItems:k(5,`Snap`),getId:e=>e});return(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,_.jsx)(D,{name:`modifiers`,on:n,set:r}),(0,_.jsxs)(u,{modifiers:t,collision:e.detector,onMove:o,children:[(0,_.jsx)(`ul`,{"data-demo":`modifiers`,className:`flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1`,children:i.map((e,t)=>(0,_.jsx)(E,{id:e,index:t,container:`modifiers`},e))}),n?(0,_.jsx)(m,{trace:e,corner:`bottom-left`}):null]})]})}function k(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function A(){return(0,_.jsx)(O,{})}var j=`import { useState } from "react"
import { closestCenter, DndProvider, snapToGrid, useSortable, useSortableState } from "@kitora/dnd"
import { type CollisionTrace, DndDevtools, traceCollision } from "@kitora/dnd/devtools"

// Modifier trace: D85, D123. snapToGrid(24) on this list: the panel's modifiers row shows the raw pointer delta against the snapped transform. closestCenter is traced here, so hits carry distances.

/** The grid step of the modifier demo, in px: big enough that the snap is visible in the trace. */
const SNAP_PX = 24

const ROW_CLASS = "flex h-7 cursor-grab items-center rounded border bg-card px-2 text-[13px] select-none hover:bg-accent"

function Row({ id, index, container }: { readonly id: string; readonly index: number; readonly container: string }) {
  const { ref } = useSortable({ id, container, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className={ROW_CLASS}>
      {id}
    </li>
  )
}

function Toggle({ name, on, set }: { readonly name: string; readonly on: boolean; readonly set: (on: boolean) => void }) {
  return (
    <label className="flex items-center gap-1 text-[12px]">
      <input type="checkbox" data-demo-toggle={name} checked={on} onChange={(e) => set(e.target.checked)} />
      Show the devtools overlay for this example
    </label>
  )
}

function Modifiers() {
  const [trace] = useState<CollisionTrace>(() => traceCollision(closestCenter))
  const [modifiers] = useState(() => [snapToGrid(SNAP_PX)])
  const [on, setOn] = useState(false)
  const { items, onMove } = useSortableState({ defaultItems: makeItems(5, "Snap"), getId: (x) => x })
  return (
    <div className="flex flex-col gap-2">
      <Toggle name="modifiers" on={on} set={setOn} />
      <DndProvider modifiers={modifiers} collision={trace.detector} onMove={onMove}>
        <ul data-demo="modifiers" className="flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1">
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} container="modifiers" />
          ))}
        </ul>
        {on ? <DndDevtools trace={trace} corner="bottom-left" /> : null}
      </DndProvider>
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

export function SnappedList() {
  return <Modifiers />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>r(()=>import(`./devtools-modifiers-DVaO1npB.js`),[]));function M(){return(0,_.jsxs)(`p`,{"data-demo-flag":`devtools`,className:`font-mono text-[12px]`,children:[`DND_DEVTOOLS_ENABLED = `,String(h)]})}var N=`import { DND_DEVTOOLS_ENABLED } from "@kitora/dnd/devtools"

// Absent from production: D123. The overlay is a dynamic import behind import.meta.env.DEV; the check script proves no emitted file contains it.

export function DevtoolsBadge() {
  return (
    <p data-demo-flag="devtools" className="font-mono text-[12px]">
      DND_DEVTOOLS_ENABLED = {String(DND_DEVTOOLS_ENABLED)}
    </p>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>r(()=>import(`./devtools-production-eAzEN0_1.js`),[]));function P(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Devtools`,children:`An in-page inspector for any drag scope: what is registered, what the pointer hits, what the modifiers did and what a drop would produce. Development builds only.`}),(0,_.jsx)(f,{n:1,title:`Targets, hits and the timeline`,blurb:`D123, D64. Drag a row: the dashed boxes are every registered target, tinted when hit and solid when chosen; the panel lists each hit's score and logs every event.`,code:C,children:(0,_.jsx)(S,{})}),(0,_.jsx)(f,{n:2,title:`Modifier trace`,blurb:`D85, D123. snapToGrid(24) on this list: the panel's modifiers row shows the raw pointer delta against the snapped transform. closestCenter is traced here, so hits carry distances.`,code:j,children:(0,_.jsx)(A,{})}),(0,_.jsx)(f,{n:3,title:`Absent from production`,blurb:`D123. The overlay is a dynamic import behind import.meta.env.DEV; the check script proves no emitted file contains it.`,code:N,children:(0,_.jsx)(M,{})})]})}export{P as component};