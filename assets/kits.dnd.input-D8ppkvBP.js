import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i}from"./index-q72zUtm9.js";import{b as a}from"./glue-CfG0SQT7.js";import{n as o}from"./interactive-DUSno8s_.js";import{n as s,s as c,t as l,u}from"./kit-CidJliA5.js";import"./kit-gallery-Atvibnty.js";import{t as d}from"./example-B8EaWveR.js";var f=e(n(),1),p=i(),m=`click`,ee=[`Click 1`,`Click 2`,`Click 3`,`Click 4`];function h({name:e,last:t}){let n=c();return(0,p.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function g(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function _({id:e,index:t,onClick:n}){let{ref:r}=u({id:e,container:m,index:t,data:e});return(0,p.jsx)(`li`,{ref:r,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:(0,p.jsx)(`span`,{role:`presentation`,className:`w-full`,onClick:n,children:e})})}function v(){let[e,t]=(0,f.useState)(ee),[n,r]=(0,f.useState)(``),[i,o]=(0,f.useState)(0);return(0,p.jsx)(l,{onMove:e=>t(t=>a(t,e,e=>e)),onDragEnd:e=>r(g(e)),children:(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsxs)(`p`,{"data-demo-clicks":!0,className:`text-[12px] text-muted-foreground tabular-nums`,children:[`Row clicks: `,i]}),(0,p.jsx)(`ul`,{"data-demo":m,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-xs`,children:e.map((e,t)=>(0,p.jsx)(_,{id:e,index:t,onClick:()=>o(e=>e+1)},e))}),(0,p.jsx)(h,{name:m,last:n})]})})}var y=`import { useState } from "react"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "click"
const ITEMS = ["Click 1", "Click 2", "Click 3", "Click 4"]

// A drag is never a click: the click after a drop is swallowed, and a mouse drop
// leaves a 2 px honey pot under the pointer until it moves, so the row that held
// pointer capture does not keep a stuck :hover.

// The status line: the live phase, the pointer kind and the target under it, then how the last drag ended.
function Status({ name, last }: { name: string; last: string }) {
  const state = useDragState()
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last}
    </p>
  )
}

// " · last: mouse drop (moved)": the pointer kind, why the drag ended, and whether it produced a move.
function describeEnd(e: DragEndEvent<unknown>): string {
  return \` · last: \${e.source.kind} \${e.reason}\${e.op !== null ? " (moved)" : ""}\`
}

function Row({ id, index, onClick }: { id: string; index: number; onClick: () => void }) {
  const { ref } = useSortable({ id, container: LIST, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      <span role="presentation" className="w-full" onClick={onClick}>
        {id}
      </span>
    </li>
  )
}

export function ClickCounter() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const [clicks, setClicks] = useState(0)
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))}>
      <div className="flex flex-col gap-2">
        <p data-demo-clicks className="text-[12px] text-muted-foreground tabular-nums">
          Row clicks: {clicks}
        </p>
        <ul data-demo={LIST} className="flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-xs">
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} onClick={() => setClicks((n) => n + 1)} />
          ))}
        </ul>
        <Status name={LIST} last={last} />
      </div>
    </DndProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>r(()=>import(`./input-click-CobKUcoq.js`),[]));var b=`immediate`,x=[`Now 1`,`Now 2`,`Now 3`,`Now 4`];function S({name:e,last:t}){let n=c();return(0,p.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function C(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function w({id:e,index:t}){let{ref:n}=u({id:e,container:b,index:t,data:e});return(0,p.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function T(){let[e,t]=(0,f.useState)(x),[n,r]=(0,f.useState)(``);return(0,p.jsx)(l,{onMove:e=>t(t=>a(t,e,e=>e)),onDragEnd:e=>r(C(e)),activation:{touch:o},children:(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(`ul`,{"data-demo":b,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-xs`,children:e.map((e,t)=>(0,p.jsx)(w,{id:e,index:t},e))}),(0,p.jsx)(S,{name:b,last:n})]})})}var E=`import { useState } from "react"
import { DndProvider, IMMEDIATE, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "immediate"
const ITEMS = ["Now 1", "Now 2", "Now 3", "Now 4"]

// Immediate touch drags: no hold, and the dom layer sets touch-action: none on each draggable,
// so the page never pans from one (use it on handles, not whole rows).

// The status line: the live phase, the pointer kind and the target under it, then how the last drag ended.
function Status({ name, last }: { name: string; last: string }) {
  const state = useDragState()
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last}
    </p>
  )
}

// " · last: mouse drop (moved)": the pointer kind, why the drag ended, and whether it produced a move.
function describeEnd(e: DragEndEvent<unknown>): string {
  return \` · last: \${e.source.kind} \${e.reason}\${e.op !== null ? " (moved)" : ""}\`
}

function Row({ id, index }: { id: string; index: number }) {
  const { ref } = useSortable({ id, container: LIST, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      {id}
    </li>
  )
}

export function ImmediateList() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))} activation={{ touch: IMMEDIATE }}>
      <div className="flex flex-col gap-2">
        <ul data-demo={LIST} className="flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-xs">
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} />
          ))}
        </ul>
        <Status name={LIST} last={last} />
      </div>
    </DndProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>r(()=>import(`./input-immediate-DOYX3_ko.js`),[]));var D=`interactive`,O=[`Row 1`,`Row 2`,`Row 3`],k=`handle`,A=[`Handle 1`,`Handle 2`,`Handle 3`];function j({name:e,last:t}){let n=c();return(0,p.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function M(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function N({id:e,index:t}){let{ref:n}=u({id:e,container:D,index:t,data:e});return(0,p.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:(0,p.jsxs)(`span`,{className:`flex w-full items-center gap-2`,children:[(0,p.jsx)(`span`,{className:`w-14 shrink-0`,children:e}),(0,p.jsx)(`input`,{"aria-label":`Rename ${e}`,defaultValue:e,className:`h-6 w-28 rounded border bg-background px-1.5 text-[12px]`}),(0,p.jsx)(`button`,{type:`button`,className:`h-6 rounded border px-2 text-[12px] hover:bg-muted`,children:`Edit`}),(0,p.jsx)(`a`,{href:`#interactive-children-and-handles`,className:`text-[12px] underline underline-offset-2`,children:`link`})]})})}function P({id:e,index:t}){let{ref:n}=u({id:e,container:k,index:t,data:e});return(0,p.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:(0,p.jsxs)(`span`,{className:`flex w-full items-center gap-2`,children:[(0,p.jsx)(`span`,{...s,"aria-hidden":!0,className:`cursor-grab px-1 text-muted-foreground`,children:`⋮⋮`}),(0,p.jsxs)(`span`,{className:`cursor-text select-text`,children:[e,`: drag by the dots, select this text`]})]})})}function F(){let[e,t]=(0,f.useState)(O),[n,r]=(0,f.useState)(``);return(0,p.jsx)(l,{onMove:e=>t(t=>a(t,e,e=>e)),onDragEnd:e=>r(M(e)),children:(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(`ul`,{"data-demo":D,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-md`,children:e.map((e,t)=>(0,p.jsx)(N,{id:e,index:t},e))}),(0,p.jsx)(j,{name:D,last:n})]})})}function I(){let[e,t]=(0,f.useState)(A),[n,r]=(0,f.useState)(``);return(0,p.jsx)(l,{onMove:e=>t(t=>a(t,e,e=>e)),onDragEnd:e=>r(M(e)),children:(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(`ul`,{"data-demo":k,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-md`,children:e.map((e,t)=>(0,p.jsx)(P,{id:e,index:t},e))}),(0,p.jsx)(j,{name:k,last:n})]})})}function L(){return(0,p.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,p.jsx)(F,{}),(0,p.jsx)(I,{})]})}var R=`import { useState } from "react"
import { DndProvider, HANDLE_PROPS, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "interactive"
const ITEMS = ["Row 1", "Row 2", "Row 3"]
const HANDLE_LIST = "handle"
const HANDLE_ITEMS = ["Handle 1", "Handle 2", "Handle 3"]

// Inputs, buttons, links, selects and editable text inside a draggable keep their pointer.

// The status line: the live phase, the pointer kind and the target under it, then how the last drag ended.
function Status({ name, last }: { name: string; last: string }) {
  const state = useDragState()
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last}
    </p>
  )
}

// " · last: mouse drop (moved)": the pointer kind, why the drag ended, and whether it produced a move.
function describeEnd(e: DragEndEvent<unknown>): string {
  return \` · last: \${e.source.kind} \${e.reason}\${e.op !== null ? " (moved)" : ""}\`
}

function Row({ id, index }: { id: string; index: number }) {
  const { ref } = useSortable({ id, container: LIST, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      <span className="flex w-full items-center gap-2">
        <span className="w-14 shrink-0">{id}</span>
        {/* typing and IME composition never start a drag; neither do buttons or links */}
        <input aria-label={\`Rename \${id}\`} defaultValue={id} className="h-6 w-28 rounded border bg-background px-1.5 text-[12px]" />
        <button type="button" className="h-6 rounded border px-2 text-[12px] hover:bg-muted">
          Edit
        </button>
        <a href="#interactive-children-and-handles" className="text-[12px] underline underline-offset-2">
          link
        </a>
      </span>
    </li>
  )
}

function HandleRow({ id, index }: { id: string; index: number }) {
  const { ref } = useSortable({ id, container: HANDLE_LIST, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      <span className="flex w-full items-center gap-2">
        {/* once a draggable contains a handle, only the handle starts a drag */}
        <span {...HANDLE_PROPS} aria-hidden className="cursor-grab px-1 text-muted-foreground">
          ⋮⋮
        </span>
        <span className="cursor-text select-text">{id}: drag by the dots, select this text</span>
      </span>
    </li>
  )
}

function InteractiveList() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))}>
      <div className="flex flex-col gap-2">
        <ul data-demo={LIST} className="flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-md">
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} />
          ))}
        </ul>
        <Status name={LIST} last={last} />
      </div>
    </DndProvider>
  )
}

function HandleList() {
  const [items, setItems] = useState<readonly string[]>(HANDLE_ITEMS)
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))}>
      <div className="flex flex-col gap-2">
        <ul data-demo={HANDLE_LIST} className="flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-md">
          {items.map((id, index) => (
            <HandleRow key={id} id={id} index={index} />
          ))}
        </ul>
        <Status name={HANDLE_LIST} last={last} />
      </div>
    </DndProvider>
  )
}

export function InteractiveRows() {
  return (
    <div className="flex flex-col gap-3">
      <InteractiveList />
      <HandleList />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>r(()=>import(`./input-interactive-DxVN6dK2.js`),[]));var z=`long-press`,B=[`Hold 1`,`Hold 2`,`Hold 3`,`Hold 4`,`Hold 5`],V={touch:{kind:`delay`,delay:400,tolerance:8}};function H({name:e,last:t}){let n=c();return(0,p.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function U(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function W({id:e,index:t}){let{ref:n}=u({id:e,container:z,index:t,data:e});return(0,p.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function G(){let[e,t]=(0,f.useState)(B),[n,r]=(0,f.useState)(``);return(0,p.jsx)(l,{onMove:e=>t(t=>a(t,e,e=>e)),onDragEnd:e=>r(U(e)),activation:V,children:(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(`ul`,{"data-demo":z,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-xs`,children:e.map((e,t)=>(0,p.jsx)(W,{id:e,index:t},e))}),(0,p.jsx)(H,{name:z,last:n})]})})}var K=`import { useState } from "react"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "long-press"
const ITEMS = ["Hold 1", "Hold 2", "Hold 3", "Hold 4", "Hold 5"]
// a 400 ms hold on touch, cancelled by more than 8 px of movement
const LONG_PRESS = { touch: { kind: "delay", delay: 400, tolerance: 8 } } as const

// The row carries data-dnd-pressing while the hold registers (the ring below).
// Draggables get touch-action: manipulation, so a swipe still scrolls the page until the drag starts.

// The status line: the live phase, the pointer kind and the target under it, then how the last drag ended.
function Status({ name, last }: { name: string; last: string }) {
  const state = useDragState()
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last}
    </p>
  )
}

// " · last: mouse drop (moved)": the pointer kind, why the drag ended, and whether it produced a move.
function describeEnd(e: DragEndEvent<unknown>): string {
  return \` · last: \${e.source.kind} \${e.reason}\${e.op !== null ? " (moved)" : ""}\`
}

function Row({ id, index }: { id: string; index: number }) {
  const { ref } = useSortable({ id, container: LIST, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      {id}
    </li>
  )
}

export function LongPressList() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))} activation={LONG_PRESS}>
      <div className="flex flex-col gap-2">
        <ul data-demo={LIST} className="flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-xs">
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} />
          ))}
        </ul>
        <Status name={LIST} last={last} />
      </div>
    </DndProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>r(()=>import(`./input-long-press-B990IR9m.js`),[]));var q=`unified`,J=[`Item 1`,`Item 2`,`Item 3`,`Item 4`,`Item 5`];function Y({name:e,last:t}){let n=c();return(0,p.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function X(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function Z({id:e,index:t}){let{ref:n}=u({id:e,container:q,index:t,data:e});return(0,p.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function Q(){let[e,t]=(0,f.useState)(J),[n,r]=(0,f.useState)(``);return(0,p.jsx)(l,{onMove:e=>t(t=>a(t,e,e=>e)),onDragEnd:e=>r(X(e)),children:(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(`ul`,{"data-demo":q,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-xs`,children:e.map((e,t)=>(0,p.jsx)(Z,{id:e,index:t},e))}),(0,p.jsx)(Y,{name:q,last:n})]})})}var $=`import { useState } from "react"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "unified"
const ITEMS = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]

// One sensor for every pointer: pointerType picks the activation.
// mouse and pen: 3 px of movement; touch: a 250 ms long-press (5 px tolerance).
// The source takes pointer capture once the drag starts, so a pointerup
// outside the window or over an iframe still drops. Space and the arrows drag from the keyboard.

// The status line: the live phase, the pointer kind and the target under it, then how the last drag ended.
function Status({ name, last }: { name: string; last: string }) {
  const state = useDragState()
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last}
    </p>
  )
}

// " · last: mouse drop (moved)": the pointer kind, why the drag ended, and whether it produced a move.
function describeEnd(e: DragEndEvent<unknown>): string {
  return \` · last: \${e.source.kind} \${e.reason}\${e.op !== null ? " (moved)" : ""}\`
}

function Row({ id, index }: { id: string; index: number }) {
  const { ref } = useSortable({ id, container: LIST, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      {id}
    </li>
  )
}

export function AnyPointerList() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))}>
      <div className="flex flex-col gap-2">
        <ul data-demo={LIST} className="flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-xs">
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} />
          ))}
        </ul>
        <Status name={LIST} last={last} />
      </div>
    </DndProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>r(()=>import(`./input-pointers-l-fn90K_.js`),[]));function te(){return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(t,{title:`Pointer input`,children:`One Pointer Events sensor drives mouse, touch and pen. The core decides when a press becomes a drag; the sensor locks the drag to the pointer that started it: while a finger drags, a second finger or a mouse is ignored, with no new press, move or drop (D148, D149, proven in jsdom with mixed pointer ids and types).`}),(0,p.jsx)(d,{n:1,title:`Mouse, touch and pen`,blurb:`D1–D4, D10, D15, D129. The status line names the pointer kind of each drag. Mouse and pen start after 3 px; touch needs a 250 ms hold.`,code:$,children:(0,p.jsx)(Q,{})}),(0,p.jsx)(d,{n:2,title:`Long-press on touch`,blurb:`D10, D11, D139. A 400 ms hold with a ring while it registers; a swipe before that scrolls the page.`,code:K,children:(0,p.jsx)(G,{})}),(0,p.jsx)(d,{n:3,title:`Immediate touch drag`,blurb:`Decision 10's opt-in: no hold, touch-action none on every draggable.`,code:E,children:(0,p.jsx)(T,{})}),(0,p.jsx)(d,{n:4,title:`Interactive children and handles`,blurb:`D18, D147. Typing, clicking and composing text inside a row never start a drag; with a handle, the rest of the row is plain content.`,code:R,children:(0,p.jsx)(L,{})}),(0,p.jsx)(d,{n:5,title:`A drag is not a click`,blurb:`D142. Click a row to count; drag one and the count stays. After the drop no row keeps its hover.`,code:y,children:(0,p.jsx)(v,{})})]})}export{te as component};