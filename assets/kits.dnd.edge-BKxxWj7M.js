import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i,hi as a,zc as o}from"./index-9y5uwRd3.js";import{a as s,b as c,i as l,o as u}from"./glue-D_yEomvg.js";import{r as d}from"./autoscroll-tw1IXUPe.js";import{s as f,t as p,u as m}from"./kit-Uq9GZ0sn.js";import"./kit-gallery-B-Yr9fP4.js";import{t as h}from"./example-CZLJLtIC.js";var g=e(n(),1),_=i(),v=`iframe`,y=[`Frame 1`,`Frame 2`,`Frame 3`,`Frame 4`],b=`<body style='margin:0;font:12px system-ui;display:grid;place-items:center;height:100%;background:#8881'>an iframe</body>`;function x({name:e,last:t}){let n=f();return(0,_.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function S(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function ee({id:e,index:t}){let{ref:n}=m({id:e,container:v,index:t,data:e});return(0,_.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function C(){let[e,t]=(0,g.useState)(y),[n,r]=(0,g.useState)(``);return(0,_.jsx)(p,{onMove:e=>t(t=>c(t,e,e=>e)),onDragEnd:e=>r(S(e)),children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,_.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,_.jsx)(`ul`,{"data-demo":v,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col w-40`,children:e.map((e,t)=>(0,_.jsx)(ee,{id:e,index:t},e))}),(0,_.jsx)(`iframe`,{title:`Embedded frame`,srcDoc:b,sandbox:``,className:`h-32 w-48 rounded-md border`})]}),(0,_.jsx)(x,{name:v,last:n})]})})}var w=`import { useState } from "react"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "iframe"
const ITEMS = ["Frame 1", "Frame 2", "Frame 3", "Frame 4"]
// a tiny page with its own document: without pointer capture it would swallow the moves
const FRAME_DOC = "<body style='margin:0;font:12px system-ui;display:grid;place-items:center;height:100%;background:#8881'>an iframe</body>"

// While dragging, the source holds pointer capture and the base style sets
// pointer-events: none on iframes, so crossing an embedded frame never loses a move.

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

export function ListBesideFrame() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))}>
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          <ul data-demo={LIST} className="flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col w-40">
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} />
          ))}
        </ul>
          <iframe title="Embedded frame" srcDoc={FRAME_DOC} sandbox="" className="h-32 w-48 rounded-md border" />
        </div>
        <Status name={LIST} last={last} />
      </div>
    </DndProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>r(()=>import(`./edge-iframe-D7MD1x7X.js`),[]));var T=`rtl`,E=[`RTL 1`,`RTL 2`,`RTL 3`,`RTL 4`,`RTL 5`];function D({name:e,last:t}){let n=f();return(0,_.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function O(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function k({id:e,index:t}){let{ref:n}=m({id:e,container:T,index:t,data:e,axis:`x`,direction:`rtl`});return(0,_.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function te(){let[e,t]=(0,g.useState)(E),[n,r]=(0,g.useState)(``);return(0,_.jsx)(p,{onMove:e=>t(t=>c(t,e,e=>e)),onDragEnd:e=>r(O(e)),children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,_.jsx)(`ul`,{"data-demo":T,dir:`rtl`,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-row flex-wrap max-w-md`,children:e.map((e,t)=>(0,_.jsx)(k,{id:e,index:t},e))}),(0,_.jsx)(D,{name:T,last:n})]})})}var A=`import { useState } from "react"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "rtl"
const ITEMS = ["RTL 1", "RTL 2", "RTL 3", "RTL 4", "RTL 5"]

// A horizontal list under dir="rtl": before and after mirror, and so do the arrow keys.

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
  const { ref } = useSortable({ id, container: LIST, index, data: id, axis: "x", direction: "rtl" })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      {id}
    </li>
  )
}

export function RtlRow() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))}>
      <div className="flex flex-col gap-2">
        <ul data-demo={LIST} dir="rtl" className="flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-row flex-wrap max-w-md">
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} />
          ))}
        </ul>
        <Status name={LIST} last={last} />
      </div>
    </DndProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>r(()=>import(`./edge-rtl-CaYRN2QF.js`),[]));var ne=e(o(),1),j=`shadow`,M=[`Shadow 1`,`Shadow 2`,`Shadow 3`,`Shadow 4`];function N({children:e}){let[t,n]=(0,g.useState)(null);return(0,_.jsx)(`div`,{ref:(0,g.useCallback)(e=>{if(!e)return;let t=e.shadowRoot??e.attachShadow({mode:`open`});if(t.childElementCount===0)for(let e of document.head.querySelectorAll(`style, link[rel='stylesheet']`))t.append(e.cloneNode(!0));n(t)},[]),"data-demo-shadow-host":!0,className:`max-w-xs`,children:t?(0,ne.createPortal)(e,t):null})}function P({last:e}){let t=f();return(0,_.jsxs)(`p`,{"data-demo-status":j,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,t.phase,t.source?` · ${t.source.kind}`:``,t.over?` · over ${t.over.id} (${t.over.position})`:``,e]})}function F(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function I({id:e,index:t}){let{ref:n}=m({id:e,container:j,index:t,data:e});return(0,_.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function L(){let[e,t]=(0,g.useState)(M),[n,r]=(0,g.useState)(``);return(0,_.jsx)(N,{children:(0,_.jsx)(p,{onMove:e=>t(t=>c(t,e,e=>e)),onDragEnd:e=>r(F(e)),children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,_.jsx)(`ul`,{"data-demo":j,className:`flex flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,children:e.map((e,t)=>(0,_.jsx)(I,{id:e,index:t},e))}),(0,_.jsx)(P,{last:n})]})})})}var R=`import { useCallback, useState, type ReactNode } from "react"
import { createPortal } from "react-dom"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "shadow"
const ITEMS = ["Shadow 1", "Shadow 2", "Shadow 3", "Shadow 4"]

// The pointer sensor reads event.composedPath(), so a draggable inside an open shadow
// root is found through the retargeting; scroll chains cross the shadow boundary through the host.

// Renders \`children\` into an open shadow root on a host div, with the page's styles copied in
// (a shadow root inherits no stylesheets).
function ShadowHost({ children }: { children: ReactNode }) {
  const [root, setRoot] = useState<ShadowRoot | null>(null)
  const attach = useCallback((host: HTMLDivElement | null) => {
    if (!host) return
    const shadow = host.shadowRoot ?? host.attachShadow({ mode: "open" })
    if (shadow.childElementCount === 0) {
      for (const node of document.head.querySelectorAll("style, link[rel='stylesheet']")) shadow.append(node.cloneNode(true))
    }
    setRoot(shadow)
  }, [])
  return (
    <div ref={attach} data-demo-shadow-host className="max-w-xs">
      {root ? createPortal(children, root) : null}
    </div>
  )
}

// The status line: the live phase, the pointer kind and the target under it, then how the last drag ended.
function Status({ last }: { last: string }) {
  const state = useDragState()
  return (
    <p data-demo-status={LIST} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last}
    </p>
  )
}

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

export function ShadowList() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <ShadowHost>
      <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))}>
        <div className="flex flex-col gap-2">
          <ul data-demo={LIST} className="flex flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]">
            {items.map((id, index) => (
              <Row key={id} id={id} index={index} />
            ))}
          </ul>
          <Status last={last} />
        </div>
      </DndProvider>
    </ShadowHost>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>r(()=>import(`./edge-shadow-D4a6YqwR.js`),[]));var z=`sticky`,B=Array.from({length:30},(e,t)=>`Sticky ${t+1}`);function V({name:e,last:t}){let n=f();return(0,_.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function H(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function U({id:e,index:t}){let{ref:n}=m({id:e,container:z,index:t,data:e});return(0,_.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function W(){let[e,t]=(0,g.useState)(B),[n,r]=(0,g.useState)(``);return(0,_.jsx)(p,{onMove:e=>t(t=>c(t,e,e=>e)),onDragEnd:e=>r(H(e)),children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,_.jsxs)(`div`,{"data-demo-sticky-box":!0,className:`h-64 max-w-xs overflow-auto rounded-md border`,children:[(0,_.jsx)(`div`,{className:`sticky top-0 z-10 border-b bg-background px-2 py-1 text-[12px] font-medium`,children:`Sticky header`}),(0,_.jsx)(`div`,{className:`p-2`,children:(0,_.jsx)(`ul`,{"data-demo":z,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col`,children:e.map((e,t)=>(0,_.jsx)(U,{id:e,index:t},e))})})]}),(0,_.jsx)(V,{name:z,last:n})]})})}var G=`import { useState } from "react"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "sticky"
const ITEMS = Array.from({ length: 30 }, (_, i) => \`Sticky \${i + 1}\`)

// Rects are measured once at pickup with each element's scroll chain; a scroll then
// shifts them arithmetically. Sticky elements are re-measured (their offset is not
// linear in the scroll), and fixed ones ignore page scroll.

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

export function StickyBox() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))}>
      <div className="flex flex-col gap-2">
        <div data-demo-sticky-box className="h-64 max-w-xs overflow-auto rounded-md border">
          <div className="sticky top-0 z-10 border-b bg-background px-2 py-1 text-[12px] font-medium">Sticky header</div>
          <div className="p-2">
            <ul data-demo={LIST} className="flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col">
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} />
          ))}
        </ul>
          </div>
        </div>
        <Status name={LIST} last={last} />
      </div>
    </DndProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>r(()=>import(`./edge-sticky-CewJGip8.js`),[]));var K=`zoom`,re=[`Zoom 1`,`Zoom 2`,`Zoom 3`,`Zoom 4`,`Zoom 5`,`Zoom 6`];function q({name:e,last:t}){let n=f();return(0,_.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function J(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function Y({id:e,index:t}){let{ref:n}=m({id:e,container:K,index:t,data:e});return(0,_.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function X(){let[e,t]=(0,g.useState)(re),[n,r]=(0,g.useState)(``);return(0,_.jsx)(p,{onMove:e=>t(t=>c(t,e,e=>e)),onDragEnd:e=>r(J(e)),children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,_.jsx)(`ul`,{"data-demo":K,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-xs`,children:e.map((e,t)=>(0,_.jsx)(Y,{id:e,index:t},e))}),(0,_.jsx)(q,{name:K,last:n})]})})}var Z=`import { useState } from "react"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "zoom"
const ITEMS = ["Zoom 1", "Zoom 2", "Zoom 3", "Zoom 4", "Zoom 5", "Zoom 6"]

// Pointer coordinates stay unrounded CSS pixels end to end, so browser zoom and
// fractional device pixel ratios (1.25, 1.75) land the drop on the slot under the pointer.

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

export function ZoomList() {
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>r(()=>import(`./edge-zoom-B2P73Q3f.js`),[]));var ie=50,ae=150,oe=10,se=60,Q=100;function ce(){let[e,t]=(0,g.useState)(se);return(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,_.jsxs)(`label`,{className:`flex items-center gap-2 text-[12px]`,children:[`Scale`,(0,_.jsx)(`input`,{type:`range`,min:ie,max:ae,step:oe,value:e,onChange:e=>t(Number(e.target.value)),"aria-label":`Scale`}),(0,_.jsxs)(`span`,{className:`tabular-nums`,children:[e,`%`]})]}),(0,_.jsx)(ue,{name:`scaled`,initial:le(5,`Scaled`),listClassName:`w-56`,wrap:t=>(0,_.jsx)(`div`,{className:`h-56 overflow-hidden rounded-md border p-2`,children:(0,_.jsx)(`div`,{"data-demo-scale":e,className:`origin-top-left`,style:{transform:`scale(${e/Q})`},children:t})})})]})}function le(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function ue({name:e,initial:t,axis:n=`y`,direction:r,activation:i,autoScroll:o,listClassName:s,renderItem:u,wrap:d}){let[p,m]=(0,g.useState)(t),[h,v]=(0,g.useState)(null),[y]=(0,g.useState)(()=>({name:`demo-status`,setup:e=>e.monitor({onDragEnd:e=>v({kind:e.source.kind,reason:e.reason,moved:e.op!==null})})})),b=l({activation:i,autoScroll:o,plugins:[y],onMove:e=>m(t=>c(t,e,e=>e))}),x=f(b),S=(0,_.jsx)(`ul`,{"data-demo":e,dir:r,className:a(`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,n===`y`?`flex-col`:`flex-row flex-wrap`,s),children:p.map((t,i)=>(0,_.jsx)(de,{dnd:b,state:x,container:e,label:t,index:i,axis:n,direction:r,children:u?u(t):t},t))});return(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[d?d(S):S,(0,_.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,x.phase,x.source?` · ${x.source.kind}`:``,x.over?` · over ${x.over.id} (${x.over.position})`:``,h?` · last: ${h.kind} ${h.reason}${h.moved?` (moved)`:``}`:``]})]})}function de({dnd:e,state:t,container:n,label:r,index:i,axis:o,direction:c,children:l}){let f=s(e,{id:r,container:n,index:i,data:r}),p=u(e,{id:r,kind:`item`,container:n,axis:o,direction:c}),m=(0,g.useCallback)(e=>{let t=f(e),n=p(e);return()=>{t?.(),n?.()}},[f,p]),h=t.phase===`dragging`&&t.source?.id===r,v=h&&e?d(t.transform,e.sourceScale()):null;return(0,_.jsx)(`li`,{ref:m,"data-item":r,tabIndex:0,style:v?{transform:`translate(${v.x}px, ${v.y}px)`}:void 0,className:a(`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent`,`data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,`data-[dnd-over=before]:shadow-[inset_0_2px_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_0_-2px_0_var(--color-primary)]`,o===`x`&&`data-[dnd-over=before]:shadow-[inset_2px_0_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_-2px_0_0_var(--color-primary)]`,h&&`relative z-10 cursor-grabbing opacity-90 shadow-md`),children:l})}function fe(){return(0,_.jsx)(ce,{})}var $=`import { type ReactNode, useCallback, useState } from "react"
import { type ActivationMap, applyMove, type AutoScrollOptions, type Axis, type Direction, type DndPlugin, type DomDnd, type DragEndEvent, type DragState, localOffset, useDomDnd, useDraggableRef, useDragState, useDroppableRef } from "@kitora/dnd"
import { cn } from "@kitora/ui/utils"

// Scaled ancestor: D87. The list sits under transform: scale; the row follows the pointer exactly at every slider value.

/** The zoom slider's range and default, as percentages. */
const SCALE_MIN = 50

const SCALE_MAX = 150

const SCALE_STEP = 10

const SCALE_DEFAULT = 60

const PERCENT = 100

function ScaledList() {
  const [scale, setScale] = useState(SCALE_DEFAULT)
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2 text-[12px]">
        Scale
        <input type="range" min={SCALE_MIN} max={SCALE_MAX} step={SCALE_STEP} value={scale} onChange={(e) => setScale(Number(e.target.value))} aria-label="Scale" />
        <span className="tabular-nums">{scale}%</span>
      </label>
      <SortableDemo
        name="scaled"
        initial={makeItems(5, "Scaled")}
        listClassName="w-56"
        wrap={(list) => (
          <div className="h-56 overflow-hidden rounded-md border p-2">
            <div data-demo-scale={scale} className="origin-top-left" style={{ transform: \`scale(\${scale / PERCENT})\` }}>
              {list}
            </div>
          </div>
        )}
      />
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

/** The last finished drag, as the status line shows it. */
interface LastDrag {
  readonly kind: string
  readonly reason: string
  readonly moved: boolean
}

/** Props of {@link SortableDemo}. */
interface SortableDemoProps {
  /** \`data-demo\` value; also the container id. */
  readonly name: string
  readonly initial: readonly string[]
  readonly axis?: Axis
  readonly direction?: Direction
  readonly activation?: Partial<ActivationMap>
  readonly autoScroll?: Partial<AutoScrollOptions> | false
  /** Classes of the list element (a height and \`overflow-auto\` make it a scroll container). */
  readonly listClassName?: string
  /** Row content; default the label. */
  readonly renderItem?: (label: string) => ReactNode
  /** Wraps the list (a scaled or sticky ancestor, a shadow root). */
  readonly wrap?: (list: ReactNode) => ReactNode
}

/** A sortable list over the dom layer; see the file header. */
function SortableDemo({ name, initial, axis = "y", direction, activation, autoScroll, listClassName, renderItem, wrap }: SortableDemoProps) {
  const [items, setItems] = useState<readonly string[]>(initial)
  const [last, setLast] = useState<LastDrag | null>(null)
  const [log] = useState<DndPlugin<string>>(() => ({
    name: "demo-status",
    setup: (api) => api.monitor({ onDragEnd: (e: DragEndEvent<string>) => setLast({ kind: e.source.kind, reason: e.reason, moved: e.op !== null }) }),
  }))
  const dnd = useDomDnd<string>({
    activation,
    autoScroll,
    plugins: [log],
    onMove: (op) => setItems((xs) => applyMove(xs, op, (x) => x)),
  })
  const state = useDragState(dnd)
  const list = (
    <ul data-demo={name} dir={direction} className={cn("flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px]", axis === "y" ? "flex-col" : "flex-row flex-wrap", listClassName)}>
      {items.map((label, index) => (
        <SortableRow key={label} dnd={dnd} state={state} container={name} label={label} index={index} axis={axis} direction={direction}>
          {renderItem ? renderItem(label) : label}
        </SortableRow>
      ))}
    </ul>
  )
  return (
    <div className="flex flex-col gap-2">
      {wrap ? wrap(list) : list}
      <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
        phase {state.phase}
        {state.source ? \` · \${state.source.kind}\` : ""}
        {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
        {last ? \` · last: \${last.kind} \${last.reason}\${last.moved ? " (moved)" : ""}\` : ""}
      </p>
    </div>
  )
}

interface SortableRowProps {
  readonly dnd: DomDnd<string> | null
  readonly state: DragState<string>
  readonly container: string
  readonly label: string
  readonly index: number
  readonly axis: Axis
  readonly direction: Direction | undefined
  readonly children: ReactNode
}

/** One row: a draggable and an item target with the same id, drawn at the pointer while it is the source. */
function SortableRow({ dnd, state, container, label, index, axis, direction, children }: SortableRowProps) {
  const dragRef = useDraggableRef(dnd, { id: label, container, index, data: label })
  const dropRef = useDroppableRef(dnd, { id: label, kind: "item", container, axis, direction })
  // One stable ref: a new callback per render would unregister the row mid-drag (source-removed).
  const ref = useCallback(
    (el: HTMLLIElement | null) => {
      const a = dragRef(el)
      const b = dropRef(el)
      return () => {
        a?.()
        b?.()
      }
    },
    [dragRef, dropRef],
  )
  const dragging = state.phase === "dragging" && state.source?.id === label
  const offset = dragging && dnd ? localOffset(state.transform, dnd.sourceScale()) : null
  return (
    <li
      ref={ref}
      data-item={label}
      tabIndex={0}
      style={offset ? { transform: \`translate(\${offset.x}px, \${offset.y}px)\` } : undefined}
      className={cn(
        "flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent",
        "data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50",
        "data-[dnd-over=before]:shadow-[inset_0_2px_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_0_-2px_0_var(--color-primary)]",
        axis === "x" && "data-[dnd-over=before]:shadow-[inset_2px_0_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_-2px_0_0_var(--color-primary)]",
        dragging && "relative z-10 cursor-grabbing opacity-90 shadow-md",
      )}
    >
      {children}
    </li>
  )
}

export function ScaledListDemo() {
  return <ScaledList />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>r(()=>import(`./edge-scale-BinB9UOv.js`),[]));function pe(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Edge cases`,children:`Geometry that survives transforms, sticky and scrolled ancestors, shadow roots, right-to-left layout and embedded frames.`}),(0,_.jsx)(h,{n:1,title:`Scaled ancestor`,blurb:`D87. The list sits under transform: scale; the row follows the pointer exactly at every slider value.`,code:$,children:(0,_.jsx)(fe,{})}),(0,_.jsx)(h,{n:2,title:`Sticky header in a scrolled box`,blurb:`D146. Scroll the box, then drag: the drop lands under the pointer, not where the row was at page load.`,code:G,children:(0,_.jsx)(W,{})}),(0,_.jsx)(h,{n:3,title:`Inside a shadow root`,blurb:`D145. The list lives in an open shadow root.`,code:R,children:(0,_.jsx)(L,{})}),(0,_.jsx)(h,{n:4,title:`Right-to-left`,blurb:`A horizontal list under dir=rtl: before and after mirror.`,code:A,children:(0,_.jsx)(te,{})}),(0,_.jsx)(h,{n:5,title:`Across an iframe`,blurb:`Drag a row over the frame and back; the drag never loses the pointer.`,code:w,children:(0,_.jsx)(C,{})}),(0,_.jsx)(h,{n:6,title:`Zoom and HiDPI`,blurb:`D144. Coordinates stay unrounded CSS pixels end to end; the headless check drags at device scales 0.8, 1.25 and 1.75 and asserts the drop slot.`,code:Z,children:(0,_.jsx)(X,{})})]})}export{pe as component};