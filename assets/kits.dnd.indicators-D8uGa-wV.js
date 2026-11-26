import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{b as a,u as o}from"./glue-1V5Hu_3C.js";import{s,t as c,u as l}from"./kit-BW1oFcGw.js";import{t as u}from"./support-ByRWbxoj.js";import"./kit-gallery-Bph7isB2.js";import{t as d}from"./example-BGnSQG2Y.js";var f=e(n(),1),p=i(),m=`inside`,h=[`Folder 1`,`Folder 2`,`Folder 3`,`Folder 4`],g=.5;function _({last:e,combined:t}){let n=s();return(0,p.jsxs)(`p`,{"data-demo-status":m,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,e,t?` · combined ${t}`:``]})}function v(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function y({id:e,index:t}){let{ref:n}=l({id:e,container:m,index:t,data:e,insideBand:g});return(0,p.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function b(){let[e,t]=(0,f.useState)(h),[n,r]=(0,f.useState)(``),[i,o]=(0,f.useState)(``);return(0,p.jsx)(c,{onMove:e=>{e.to.position===`inside`?o(`${e.ids.join()} into ${e.to.target??e.to.container}`):t(t=>a(t,e,e=>e))},onDragEnd:e=>r(v(e)),presentation:{indicator:`line`},children:(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(`ul`,{"data-demo":m,className:`flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,children:e.map((e,t)=>(0,p.jsx)(y,{id:e,index:t},e))}),(0,p.jsx)(_,{last:n,combined:i})]})})}var x=`import { useState } from "react"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "inside"
const ITEMS = ["Folder 1", "Folder 2", "Folder 3", "Folder 4"]
// the share of a row's height that means "drop inside": the middle half
const INSIDE_BAND = 0.5

// insideBand turns the middle of an item into an "inside" zone (combine); the
// indicator then outlines the whole target instead of drawing a line.

// The status line: the live phase, the pointer kind and the target under it, then how the last drag ended.
function Status({ last, combined }: { last: string; combined: string }) {
  const state = useDragState()
  return (
    <p data-demo-status={LIST} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      phase {state.phase}
      {state.source ? \` · \${state.source.kind}\` : ""}
      {state.over ? \` · over \${state.over.id} (\${state.over.position})\` : ""}
      {last}
      {combined ? \` · combined \${combined}\` : ""}
    </p>
  )
}

function describeEnd(e: DragEndEvent<unknown>): string {
  return \` · last: \${e.source.kind} \${e.reason}\${e.op !== null ? " (moved)" : ""}\`
}

function Folder({ id, index }: { id: string; index: number }) {
  const { ref } = useSortable({ id, container: LIST, index, data: id, insideBand: INSIDE_BAND })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      {id}
    </li>
  )
}

export function Folders() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const [combined, setCombined] = useState("")
  const onMove = (op: MoveOp) => {
    // a drop inside a folder combines instead of reordering
    if (op.to.position === "inside") setCombined(\`\${op.ids.join()} into \${op.to.target ?? op.to.container}\`)
    else setItems((xs) => applyMove(xs, op, (x) => x))
  }
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))} presentation={{ indicator: "line" }}>
      <div className="flex flex-col gap-2">
        <ul data-demo={LIST} className="flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]">
          {items.map((id, index) => (
            <Folder key={id} id={id} index={index} />
          ))}
        </ul>
        <Status last={last} combined={combined} />
      </div>
    </DndProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./indicators-inside-DfobqRia.js`),[]));var S=`line`,C=Array.from({length:12},(e,t)=>`Line ${t+1}`);function w({last:e}){let t=s();return(0,p.jsxs)(`p`,{"data-demo-status":S,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,t.phase,t.source?` · ${t.source.kind}`:``,t.over?` · over ${t.over.id} (${t.over.position})`:``,e]})}function T(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function E({id:e,index:t}){let{ref:n}=l({id:e,container:S,index:t,data:e});return(0,p.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function D({anchor:e}){let[t,n]=(0,f.useState)(C),[r,i]=(0,f.useState)(``);return(0,p.jsx)(c,{onMove:e=>n(t=>a(t,e,e=>e)),onDragEnd:e=>i(T(e)),presentation:{indicator:`line`,anchor:e},children:(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(`div`,{className:`h-40 max-w-xs overflow-auto rounded-md border p-1`,"data-demo-scroll":S,children:(0,p.jsx)(`ul`,{"data-demo":S,className:`flex flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,children:t.map((e,t)=>(0,p.jsx)(E,{id:e,index:t},e))})}),(0,p.jsx)(w,{last:r})]})})}function O(){let[e,t]=(0,f.useState)(!0),n=u(o);return(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsxs)(`label`,{className:`flex items-center gap-1 text-[12px]`,children:[(0,p.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>t(e.target.checked)}),`Anchor Positioning `,n?`(supported)`:`(not supported: measured fallback)`]}),(0,p.jsx)(D,{anchor:e},String(e))]})}var k=`import { useState } from "react"
import { DndProvider, applyMove, supportsAnchorPositioning, useDragState, useSortable, useSupport, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "line"
const ITEMS = Array.from({ length: 12 }, (_, i) => \`Line \${i + 1}\`)

// A line on the target's edge. With CSS Anchor Positioning it is tethered with anchor(),
// so it stays on its row while the box scrolls; without it, it is placed from the engine's
// scroll-corrected rect. Colour: --dnd-indicator-color (default Highlight, kept under forced colours).

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

function LineList({ anchor }: { anchor: boolean }) {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    // anchor: false forces the measured path
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))} presentation={{ indicator: "line", anchor }}>
      <div className="flex flex-col gap-2">
        <div className="h-40 max-w-xs overflow-auto rounded-md border p-1" data-demo-scroll={LIST}>
          <ul data-demo={LIST} className="flex flex-col gap-1 rounded-md border bg-muted/30 p-1 text-[13px]">
            {items.map((id, index) => (
              <Row key={id} id={id} index={index} />
            ))}
          </ul>
        </div>
        <Status last={last} />
      </div>
    </DndProvider>
  )
}

export function AnchoredOrMeasured() {
  const [anchor, setAnchor] = useState(true)
  const supported = useSupport(supportsAnchorPositioning)
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-1 text-[12px]">
        <input type="checkbox" checked={anchor} onChange={(e) => setAnchor(e.target.checked)} />
        Anchor Positioning {supported ? "(supported)" : "(not supported: measured fallback)"}
      </label>
      {/* a new key remounts the list, so the comparison starts from the same order */}
      <LineList key={String(anchor)} anchor={anchor} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>r(()=>import(`./indicators-line-ClKfXuC1.js`),[]));var A=`line-only`,j=[`Pane 1`,`Pane 2`,`Pane 3`,`Pane 4`];function M({name:e,last:t}){let n=s();return(0,p.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function N(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function P({id:e,index:t}){let{ref:n}=l({id:e,container:A,index:t,data:e});return(0,p.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function F(){let[e,t]=(0,f.useState)(j),[n,r]=(0,f.useState)(``);return(0,p.jsx)(c,{onMove:e=>t(t=>a(t,e,e=>e)),onDragEnd:e=>r(N(e)),presentation:{feedback:`none`,indicator:`line`},children:(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(`ul`,{"data-demo":A,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-col max-w-xs`,children:e.map((e,t)=>(0,p.jsx)(P,{id:e,index:t},e))}),(0,p.jsx)(M,{name:A,last:n})]})})}var I=`import { useState } from "react"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "line-only"
const ITEMS = ["Pane 1", "Pane 2", "Pane 3", "Pane 4"]

// Docking's mode: feedback "none" moves nothing until the drop and draws no preview; the line is the only feedback.

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

export function Panes() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))} presentation={{ feedback: "none", indicator: "line" }}>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>r(()=>import(`./indicators-none-CnilNgEd.js`),[]));var L=`line-x`,R=[`Tab 1`,`Tab 2`,`Tab 3`,`Tab 4`,`Tab 5`],z=`line-rtl`,B=[`RTL 1`,`RTL 2`,`RTL 3`,`RTL 4`,`RTL 5`];function V({name:e,last:t}){let n=s();return(0,p.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,n.phase,n.source?` · ${n.source.kind}`:``,n.over?` · over ${n.over.id} (${n.over.position})`:``,t]})}function H(e){return` · last: ${e.source.kind} ${e.reason}${e.op===null?``:` (moved)`}`}function U({id:e,index:t}){let{ref:n}=l({id:e,container:L,index:t,data:e,axis:`x`});return(0,p.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function W({id:e,index:t}){let{ref:n}=l({id:e,container:z,index:t,data:e,axis:`x`,direction:`rtl`});return(0,p.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,children:e})}function G(){let[e,t]=(0,f.useState)(R),[n,r]=(0,f.useState)(``);return(0,p.jsx)(c,{onMove:e=>t(t=>a(t,e,e=>e)),onDragEnd:e=>r(H(e)),presentation:{indicator:`line`},children:(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(`ul`,{"data-demo":L,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-row flex-wrap`,children:e.map((e,t)=>(0,p.jsx)(U,{id:e,index:t},e))}),(0,p.jsx)(V,{name:L,last:n})]})})}function K(){let[e,t]=(0,f.useState)(B),[n,r]=(0,f.useState)(``);return(0,p.jsx)(c,{onMove:e=>t(t=>a(t,e,e=>e)),onDragEnd:e=>r(H(e)),presentation:{indicator:`line`},children:(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(`ul`,{"data-demo":z,dir:`rtl`,className:`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-row flex-wrap`,children:e.map((e,t)=>(0,p.jsx)(W,{id:e,index:t},e))}),(0,p.jsx)(V,{name:z,last:n})]})})}function q(){return(0,p.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,p.jsx)(G,{}),(0,p.jsx)(K,{})]})}var J=`import { useState } from "react"
import { DndProvider, applyMove, useDragState, useSortable, type DragEndEvent, type MoveOp } from "@kitora/dnd"

const LIST = "line-x"
const ITEMS = ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"]
const RTL_LIST = "line-rtl"
const RTL_ITEMS = ["RTL 1", "RTL 2", "RTL 3", "RTL 4", "RTL 5"]

// On a horizontal list the line is vertical; under dir="rtl" before and after swap sides.

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
  const { ref } = useSortable({ id, container: LIST, index, data: id, axis: "x" })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      {id}
    </li>
  )
}

function RtlTab({ id, index }: { id: string; index: number }) {
  const { ref } = useSortable({ id, container: RTL_LIST, index, data: id, axis: "x", direction: "rtl" })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className="flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50">
      {id}
    </li>
  )
}

function Tabs() {
  const [items, setItems] = useState<readonly string[]>(ITEMS)
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))} presentation={{ indicator: "line" }}>
      <div className="flex flex-col gap-2">
        <ul data-demo={LIST} className="flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-row flex-wrap">
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} />
          ))}
        </ul>
        <Status name={LIST} last={last} />
      </div>
    </DndProvider>
  )
}

function RtlTabs() {
  const [items, setItems] = useState<readonly string[]>(RTL_ITEMS)
  const [last, setLast] = useState("")
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  return (
    <DndProvider onMove={onMove} onDragEnd={(e) => setLast(describeEnd(e))} presentation={{ indicator: "line" }}>
      <div className="flex flex-col gap-2">
        <ul data-demo={RTL_LIST} dir="rtl" className="flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px] flex-row flex-wrap">
          {items.map((id, index) => (
            <RtlTab key={id} id={id} index={index} />
          ))}
        </ul>
        <Status name={RTL_LIST} last={last} />
      </div>
    </DndProvider>
  )
}

export function HorizontalLines() {
  return (
    <div className="flex flex-col gap-3">
      <Tabs />
      <RtlTabs />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>r(()=>import(`./indicators-rtl-DoXw5DyA.js`),[]));function Y(){return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(t,{title:`Drop indicators`,children:`Where a drop will land, drawn without touching the list: a line on the target edge or a box around the target, in the top layer, glued to the target by CSS Anchor Positioning where it exists.`}),(0,p.jsx)(d,{n:1,title:`Line, anchored or measured`,blurb:`D132. Scroll the box while dragging: the anchored line stays on its row with no script. Untick to compare the measured fallback.`,code:k,children:(0,p.jsx)(O,{})}),(0,p.jsx)(d,{n:2,title:`Horizontal and right-to-left`,blurb:`D132, D48. On a horizontal list the line is vertical; under dir=rtl before and after swap sides.`,code:J,children:(0,p.jsx)(q,{})}),(0,p.jsx)(d,{n:3,title:`Drop inside an item`,blurb:`D132. The middle half of a row is an inside zone; the indicator outlines the row and the status line reports the combine.`,code:x,children:(0,p.jsx)(b,{})}),(0,p.jsx)(d,{n:4,title:`Indicator only`,blurb:`D23, D132. feedback none: nothing moves until the drop; the line is the only feedback, as a docking layout wants.`,code:I,children:(0,p.jsx)(F,{})})]})}export{Y as component};