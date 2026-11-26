import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i,hi as a}from"./index-q72zUtm9.js";import{b as o,v as s}from"./glue-CfG0SQT7.js";import{a as c}from"./interactive-DUSno8s_.js";import{n as l}from"./pointer-sensor-lqz55YZO.js";import{c as u,d,l as ee,p as te,r as ne,t as f,u as p}from"./kit-CidJliA5.js";import"./kit-gallery-Atvibnty.js";import{t as m}from"./example-B8EaWveR.js";import{r as h}from"./devtools-Fo2Yiosb.js";var g=class extends Error{name=`ScriptedDragError`};function re(){let e=null,t=()=>{if(!e)throw new g(`scriptedSensor: not attached to an engine`);return e};return{attach(t){return e=t,()=>{e===t&&(e=null)}},drag(e,n={}){let r=t(),i=n.from??r.pointFor(e)??c;if(!r.press({id:e,ids:n.ids,pointer:i,kind:`script`,keys:n.keys}))throw new g(`scriptedSensor: the engine refused a drag of "${e}" (busy, unknown or disabled)`);let a=i,o={to(e,t){let n=r.pointFor(e,t);if(!n)throw new g(`scriptedSensor: target "${e}" has no rect`);return a=n,r.move(n),o},moveTo(e){return a=e,r.move(e),o},moveBy(e,t){return a={x:a.x+e,y:a.y+t},r.move(a),o},keys(e){return r.setKeys(e),o},tick(){return r.tick(),o},drop:()=>r.release(),cancel:()=>r.cancel(`escape`)};return o}}}var _=e(n(),1),v=i(),ie=`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,ae=`flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1`;function oe({id:e,index:t,container:n}){let{ref:r}=p({id:e,container:n,index:t,data:e});return(0,v.jsx)(`li`,{ref:r,"data-item":e,tabIndex:0,className:ie,children:e})}function se({name:e,text:t}){return(0,v.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:t})}function ce(){let[e,t]=(0,_.useState)(()=>le(5));return(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsx)(f,{onMove:e=>t(t=>o(t,e,e=>e)),children:(0,v.jsx)(`ul`,{"data-demo":`controlled`,className:ae,children:e.map((e,t)=>(0,v.jsx)(oe,{id:e,index:t,container:`controlled`},e))})}),(0,v.jsx)(se,{name:`controlled`,text:`state: ${e.join(`, `)}`})]})}function le(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function y(){return(0,v.jsx)(ce,{})}var b=`import { useState } from "react"
import { applyMove, DndProvider, useSortable } from "@kitora/dnd"

// Provider and useSortable: D116, D92. Controlled: the app keeps the list and applies each MoveOp with applyMove; the status line is the app's state.

const ROW_CLASS =
  "flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50"

const LIST_CLASS = "flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1"

/** A sortable row through the default kit. */
function Row({ id, index, container }: { readonly id: string; readonly index: number; readonly container: string }) {
  const { ref } = useSortable({ id, container, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className={ROW_CLASS}>
      {id}
    </li>
  )
}

/** The demo's status line: phase and the last end. */
function Status({ name, text }: { readonly name: string; readonly text: string }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      {text}
    </p>
  )
}

function Controlled() {
  const [items, setItems] = useState<readonly string[]>(() => makeItems(5))
  return (
    <div className="flex flex-col gap-2">
      <DndProvider onMove={(op) => setItems((xs) => applyMove(xs, op, (x) => x))}>
        <ul data-demo="controlled" className={LIST_CLASS}>
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} container="controlled" />
          ))}
        </ul>
      </DndProvider>
      <Status name="controlled" text={\`state: \${items.join(", ")}\`} />
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

export function ListDemo() {
  return <Controlled />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>r(()=>import(`./react-controlled-D-PdrheB.js`),[]));var x=`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,S=`flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1`;function C({id:e,index:t,container:n}){let{ref:r}=p({id:e,container:n,index:t,data:e});return(0,v.jsx)(`li`,{ref:r,"data-item":e,tabIndex:0,className:x,children:e})}function w({name:e,text:t}){return(0,v.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:t})}function T({name:e=`uncontrolled`}){let[t,n]=(0,_.useState)(null),{items:r,onMove:i}=d({defaultItems:E(5,`Task`),getId:e=>e,onItemsChange:(e,t)=>n(t)});return(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsx)(f,{onMove:i,children:(0,v.jsx)(`ul`,{"data-demo":e,className:S,children:r.map((t,n)=>(0,v.jsx)(C,{id:t,index:n,container:e},t))})}),(0,v.jsx)(w,{name:e,text:t?`last op: ${h(t)}`:`last op: none yet`})]})}function E(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function D(){return(0,v.jsx)(T,{})}var O=`import { useState } from "react"
import { DndProvider, type MoveOp, useSortable, useSortableState } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Uncontrolled list state: D92. useSortableState owns the order (defaultItems) or follows the app's (items); either way every drop reports the new list and its MoveOp.

const ROW_CLASS =
  "flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50"

const LIST_CLASS = "flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1"

/** A sortable row through the default kit. */
function Row({ id, index, container }: { readonly id: string; readonly index: number; readonly container: string }) {
  const { ref } = useSortable({ id, container, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className={ROW_CLASS}>
      {id}
    </li>
  )
}

/** The demo's status line: phase and the last end. */
function Status({ name, text }: { readonly name: string; readonly text: string }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      {text}
    </p>
  )
}

function Uncontrolled({ name = "uncontrolled" }: { readonly name?: string }) {
  const [last, setLast] = useState<MoveOp | null>(null)
  const { items, onMove } = useSortableState({ defaultItems: makeItems(5, "Task"), getId: (x) => x, onItemsChange: (_, op) => setLast(op) })
  return (
    <div className="flex flex-col gap-2">
      <DndProvider onMove={onMove}>
        <ul data-demo={name} className={LIST_CLASS}>
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} container={name} />
          ))}
        </ul>
      </DndProvider>
      <Status name={name} text={last ? \`last op: \${formatOp(last)}\` : "last op: none yet"} />
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

export function Tasks() {
  return <Uncontrolled />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./react-uncontrolled-BhIDF9D6.js`),[]));var k=8,A=`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,j=`flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1`;function M({id:e,index:t,container:n}){let{ref:r}=p({id:e,container:n,index:t,data:e});return(0,v.jsx)(`li`,{ref:r,"data-item":e,tabIndex:0,className:A,children:e})}function N(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(()=>P(4,`Row`)),i=e=>t(t=>[...t,e].slice(-k));return(0,v.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2`,children:[(0,v.jsx)(f,{onDragStart:e=>i(`start ${e.source?.id??``} (${e.source?.kind??``})`),onDragOver:e=>i(`over ${e.over?`${e.over.id} ${e.over.position}`:`nothing`}`),onMove:e=>{i(`onMove ${JSON.stringify({ids:e.ids,to:e.to,operation:e.operation})}`),r(t=>o(t,e,e=>e))},onDragEnd:e=>i(`end ${e.reason}${e.op?``:` (no op)`}`),children:(0,v.jsx)(`ul`,{"data-demo":`events`,className:j,children:n.map((e,t)=>(0,v.jsx)(M,{id:e,index:t,container:`events`},e))})}),(0,v.jsx)(`ol`,{"data-demo-log":`events`,className:`min-h-28 rounded-md border bg-muted/20 p-2 font-mono text-[11px] break-all text-muted-foreground`,children:e.length===0?(0,v.jsx)(`li`,{children:`drag a row…`}):e.map((e,t)=>(0,v.jsx)(`li`,{children:e},`${t}-${e}`))})]})}function P(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function F(){return(0,v.jsx)(N,{})}var I=`import { useState } from "react"
import { applyMove, DndProvider, type DragEndEvent, type DragState, useSortable } from "@kitora/dnd"

// Event callbacks: D64, D89. The provider's callbacks and useDndMonitor see every start, target change and end; onMove gets the drop as data.

/** Event log lines kept on screen. */
const LOG_LINES = 8

const ROW_CLASS =
  "flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50"

const LIST_CLASS = "flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1"

/** A sortable row through the default kit. */
function Row({ id, index, container }: { readonly id: string; readonly index: number; readonly container: string }) {
  const { ref } = useSortable({ id, container, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className={ROW_CLASS}>
      {id}
    </li>
  )
}

function Events() {
  const [log, setLog] = useState<readonly string[]>([])
  const [items, setItems] = useState<readonly string[]>(() => makeItems(4, "Row"))
  const push = (line: string) => setLog((xs) => [...xs, line].slice(-LOG_LINES))
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <DndProvider
        onDragStart={(s: DragState<unknown>) => push(\`start \${s.source?.id ?? ""} (\${s.source?.kind ?? ""})\`)}
        onDragOver={(s: DragState<unknown>) => push(\`over \${s.over ? \`\${s.over.id} \${s.over.position}\` : "nothing"}\`)}
        onMove={(op) => {
          push(\`onMove \${JSON.stringify({ ids: op.ids, to: op.to, operation: op.operation })}\`)
          setItems((xs) => applyMove(xs, op, (x) => x))
        }}
        onDragEnd={(e: DragEndEvent<unknown>) => push(\`end \${e.reason}\${e.op ? "" : " (no op)"}\`)}
      >
        <ul data-demo="events" className={LIST_CLASS}>
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} container="events" />
          ))}
        </ul>
      </DndProvider>
      <ol data-demo-log="events" className="min-h-28 rounded-md border bg-muted/20 p-2 font-mono text-[11px] break-all text-muted-foreground">
        {log.length === 0 ? <li>drag a row…</li> : log.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>)}
      </ol>
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

export function LoggedList() {
  return <Events />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>r(()=>import(`./react-events-CjSku5aa.js`),[]));var L=`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,R=`flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1`;function z({id:e,index:t}){let{ref:n}=p({id:e,container:`hooks`,index:t,data:e});return(0,v.jsx)(`li`,{ref:n,"data-item":e,tabIndex:0,className:a(L,`border-y-2 border-y-transparent transition-opacity data-[dnd-source=dragging]:opacity-40 data-[dnd-over=after]:border-b-primary data-[dnd-over=before]:border-t-primary`),children:e})}function B(){let{ref:e,isOver:t}=ee({id:`trash`,kind:`container`});return(0,v.jsx)(`div`,{ref:e,"data-zone":`trash`,className:`flex h-16 items-center justify-center rounded-md border border-dashed text-[12px] text-muted-foreground data-[dnd-over]:border-primary data-[dnd-over]:bg-primary/10`,children:t?`release to remove`:`drop here to remove`})}function V(){let[e,t]=(0,_.useState)(()=>H(5,`Hook`));return(0,v.jsx)(f,{presentation:!1,onMove:e=>{e.to.container===`trash`?t(t=>t.filter(t=>!e.ids.includes(t))):t(t=>o(t,e,e=>e))},children:(0,v.jsxs)(`div`,{className:`grid max-w-xl gap-3 sm:grid-cols-2`,children:[(0,v.jsx)(`ul`,{"data-demo":`hooks`,className:R,children:e.map((e,t)=>(0,v.jsx)(z,{id:e,index:t},e))}),(0,v.jsx)(B,{})]})})}function H(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function U(){return(0,v.jsx)(V,{})}var W=`import { useState } from "react"
import { applyMove, DndProvider, type MoveOp, useDroppable, useSortable } from "@kitora/dnd"
import { cn } from "@kitora/ui/utils"

// Styling from data-* hooks: D124. With presentation off, the rows and the drop zone are styled only by Tailwind data-[dnd-*] variants; drop a row on the zone to remove it.

const ROW_CLASS =
  "flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50"

const LIST_CLASS = "flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1"

/** A row styled only through the data-dnd-* attributes. */
function HookRow({ id, index }: { readonly id: string; readonly index: number }) {
  const { ref } = useSortable({ id, container: "hooks", index, data: id })
  return (
    <li
      ref={ref}
      data-item={id}
      tabIndex={0}
      className={cn(
        ROW_CLASS,
        "border-y-2 border-y-transparent transition-opacity data-[dnd-source=dragging]:opacity-40 data-[dnd-over=after]:border-b-primary data-[dnd-over=before]:border-t-primary",
      )}
    >
      {id}
    </li>
  )
}

/** A container target: a drop on it lands at its end, which the demo reads as "remove". */
function Trash() {
  const { ref, isOver } = useDroppable({ id: "trash", kind: "container" })
  return (
    <div
      ref={ref}
      data-zone="trash"
      className="flex h-16 items-center justify-center rounded-md border border-dashed text-[12px] text-muted-foreground data-[dnd-over]:border-primary data-[dnd-over]:bg-primary/10"
    >
      {isOver ? "release to remove" : "drop here to remove"}
    </div>
  )
}

function DataHooks() {
  const [items, setItems] = useState<readonly string[]>(() => makeItems(5, "Hook"))
  const onMove = (op: MoveOp) => {
    if (op.to.container === "trash") setItems((xs) => xs.filter((x) => !op.ids.includes(x)))
    else setItems((xs) => applyMove(xs, op, (x) => x))
  }
  return (
    <DndProvider presentation={false} onMove={onMove}>
      <div className="grid max-w-xl gap-3 sm:grid-cols-2">
        <ul data-demo="hooks" className={LIST_CLASS}>
          {items.map((id, index) => (
            <HookRow key={id} id={id} index={index} />
          ))}
        </ul>
        <Trash />
      </div>
    </DndProvider>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

export function StyledByAttributes() {
  return <DataHooks />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>r(()=>import(`./react-hooks-Dz45XAAR.js`),[]));var G=`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,ue=`flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1`;function K({id:e,index:t,container:n}){let{ref:r}=p({id:e,container:n,index:t,data:e});return(0,v.jsx)(`li`,{ref:r,"data-item":e,tabIndex:0,className:G,children:e})}function de({id:e}){return u({id:e,container:`warnings`,index:99,data:e}),(0,v.jsxs)(`li`,{className:a(G,`cursor-not-allowed opacity-60`),children:[e,` (ref not attached)`]})}function fe(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(!1),i=(0,_.useCallback)(e=>e?te(e=>t(t=>[...t,e])):void 0,[]);return(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsxs)(`label`,{className:`flex items-center gap-1 text-[12px]`,children:[(0,v.jsx)(`input`,{type:`checkbox`,"data-demo-toggle":`warnings`,checked:n,onChange:e=>r(e.target.checked)}),`Mount the mistakes (a duplicate id, a ref that is never attached, a list with no onMove)`]}),n?(0,v.jsx)(f,{children:(0,v.jsxs)(`ul`,{"data-demo":`warnings`,className:ue,children:[(0,v.jsx)(K,{id:`Twin`,index:0,container:`warnings`}),(0,v.jsx)(K,{id:`Twin`,index:1,container:`warnings`}),(0,v.jsx)(de,{id:`Lost`}),(0,v.jsx)(K,{id:`Free`,index:2,container:`warnings`})]})}):null,(0,v.jsx)(`ol`,{ref:i,"data-demo-log":`warnings`,className:`rounded-md border bg-muted/20 p-2 font-mono text-[11px] text-muted-foreground`,children:e.length===0?(0,v.jsx)(`li`,{children:`no warnings`}):e.map(e=>(0,v.jsx)(`li`,{"data-code":e.code,children:`${e.code}: ${e.message}`},e.code+e.message))})]})}function pe(){return(0,v.jsx)(fe,{})}var q=`import { useCallback, useState } from "react"
import { DndProvider, type DndWarning, onDndWarning, useDraggable, useSortable } from "@kitora/dnd"
import { cn } from "@kitora/ui/utils"

// Setup warnings: D126. Tick the box to mount three mistakes; each is named once, here through onDndWarning (in the console otherwise). Drag a row to see the missing-commit one.

const ROW_CLASS =
  "flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50"

const LIST_CLASS = "flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1"

/** A sortable row through the default kit. */
function Row({ id, index, container }: { readonly id: string; readonly index: number; readonly container: string }) {
  const { ref } = useSortable({ id, container, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className={ROW_CLASS}>
      {id}
    </li>
  )
}

/** A row whose ref is never attached: the ref-not-attached mistake. */
function ForgottenRef({ id }: { readonly id: string }) {
  useDraggable({ id, container: "warnings", index: 99, data: id })
  return <li className={cn(ROW_CLASS, "cursor-not-allowed opacity-60")}>{id} (ref not attached)</li>
}

function Warnings() {
  const [warnings, setWarnings] = useState<readonly DndWarning[]>([])
  const [broken, setBroken] = useState(false)
  // Listening through a callback ref: subscribed while the log is mounted, unsubscribed by its cleanup.
  const listen = useCallback((el: HTMLOListElement | null) => (el ? onDndWarning((w) => setWarnings((xs) => [...xs, w])) : undefined), [])
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-1 text-[12px]">
        <input type="checkbox" data-demo-toggle="warnings" checked={broken} onChange={(e) => setBroken(e.target.checked)} />
        Mount the mistakes (a duplicate id, a ref that is never attached, a list with no onMove)
      </label>
      {broken ? (
        <DndProvider>
          <ul data-demo="warnings" className={LIST_CLASS}>
            <Row id="Twin" index={0} container="warnings" />
            <Row id="Twin" index={1} container="warnings" />
            <ForgottenRef id="Lost" />
            <Row id="Free" index={2} container="warnings" />
          </ul>
        </DndProvider>
      ) : null}
      <ol ref={listen} data-demo-log="warnings" className="rounded-md border bg-muted/20 p-2 font-mono text-[11px] text-muted-foreground">
        {warnings.length === 0 ? <li>no warnings</li> : warnings.map((w) => <li key={w.code + w.message} data-code={w.code}>{\`\${w.code}: \${w.message}\`}</li>)}
      </ol>
    </div>
  )
}

export function DndWarnings() {
  return <Warnings />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>r(()=>import(`./react-warnings-TqxXJxX2.js`),[]));var me=`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,he=`flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1`;function ge({id:e,index:t,container:n}){let{ref:r}=p({id:e,container:n,index:t,data:e});return(0,v.jsx)(`li`,{ref:r,"data-item":e,tabIndex:0,className:me,children:e})}function _e({name:e,text:t}){return(0,v.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:t})}function ve({name:e=`uncontrolled`}){let[t,n]=(0,_.useState)(null),{items:r,onMove:i}=d({defaultItems:be(5,`Task`),getId:e=>e,onItemsChange:(e,t)=>n(t)});return(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsx)(f,{onMove:i,children:(0,v.jsx)(`ul`,{"data-demo":e,className:he,children:r.map((t,n)=>(0,v.jsx)(ge,{id:t,index:n,container:e},t))})}),(0,v.jsx)(_e,{name:e,text:t?`last op: ${h(t)}`:`last op: none yet`})]})}function ye(){return(0,v.jsx)(_.StrictMode,{children:(0,v.jsx)(ve,{name:`strict`})})}function be(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function xe(){return(0,v.jsx)(ye,{})}var J=`import { StrictMode, useState } from "react"
import { DndProvider, type MoveOp, useSortable, useSortableState } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// StrictMode and SSR: D116, D119. The uncontrolled list again, inside StrictMode; the jsdom tests also render the adapter with renderToString.

const ROW_CLASS =
  "flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50"

const LIST_CLASS = "flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1"

/** A sortable row through the default kit. */
function Row({ id, index, container }: { readonly id: string; readonly index: number; readonly container: string }) {
  const { ref } = useSortable({ id, container, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className={ROW_CLASS}>
      {id}
    </li>
  )
}

/** The demo's status line: phase and the last end. */
function Status({ name, text }: { readonly name: string; readonly text: string }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      {text}
    </p>
  )
}

function Uncontrolled({ name = "uncontrolled" }: { readonly name?: string }) {
  const [last, setLast] = useState<MoveOp | null>(null)
  const { items, onMove } = useSortableState({ defaultItems: makeItems(5, "Task"), getId: (x) => x, onItemsChange: (_, op) => setLast(op) })
  return (
    <div className="flex flex-col gap-2">
      <DndProvider onMove={onMove}>
        <ul data-demo={name} className={LIST_CLASS}>
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} container={name} />
          ))}
        </ul>
      </DndProvider>
      <Status name={name} text={last ? \`last op: \${formatOp(last)}\` : "last op: none yet"} />
    </div>
  )
}

function Strict() {
  return (
    <StrictMode>
      <Uncontrolled name="strict" />
    </StrictMode>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

export function StrictList() {
  return <Strict />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>r(()=>import(`./react-strict-DIhoSNh6.js`),[]));var Se=`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,Ce=`flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1`;function we({id:e,index:t,container:n}){let{ref:r}=p({id:e,container:n,index:t,data:e});return(0,v.jsx)(`li`,{ref:r,"data-item":e,tabIndex:0,className:Se,children:e})}function Te({name:e,text:t}){return(0,v.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:t})}function Ee(){let[e]=(0,_.useState)(re),[t]=(0,_.useState)(()=>[l(),s(),e]),{items:n,onMove:r}=d({defaultItems:De(4,`Step`),getId:e=>e}),[i,a]=(0,_.useState)(``);return(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsx)(f,{sensors:t,onMove:r,children:(0,v.jsx)(`ul`,{"data-demo":`scripted`,className:Ce,children:n.map((e,t)=>(0,v.jsx)(we,{id:e,index:t,container:`scripted`},e))})}),(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(`button`,{type:`button`,"data-demo-run":`scripted`,onClick:()=>{let t=n[0],r=n[2];t===void 0||r===void 0||e.drag(t).to(r,`after`).drop().then(e=>a(e?`${e.source.kind} ${e.reason}`:`aborted`))},className:`h-7 rounded border px-2 text-[12px] hover:bg-accent`,children:`Move the first step after the third`}),(0,v.jsx)(Te,{name:`scripted`,text:i})]})]})}function De(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function Oe(){return(0,v.jsx)(Ee,{})}var Y=`import { useState } from "react"
import { DndProvider, keyboardSensor, pointerSensor, scriptedSensor, useSortable, useSortableState } from "@kitora/dnd"

// Scripted drags and test helpers: D13, D122. The button drives the real engine through the scripted sensor, the one createTestDnd hands a jsdom test.

const ROW_CLASS =
  "flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50"

const LIST_CLASS = "flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1"

/** A sortable row through the default kit. */
function Row({ id, index, container }: { readonly id: string; readonly index: number; readonly container: string }) {
  const { ref } = useSortable({ id, container, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className={ROW_CLASS}>
      {id}
    </li>
  )
}

/** The demo's status line: phase and the last end. */
function Status({ name, text }: { readonly name: string; readonly text: string }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      {text}
    </p>
  )
}

function Scripted() {
  const [script] = useState(scriptedSensor)
  const [sensors] = useState(() => [pointerSensor(), keyboardSensor(), script])
  const { items, onMove } = useSortableState({ defaultItems: makeItems(4, "Step"), getId: (x) => x })
  const [result, setResult] = useState("")
  const run = () => {
    const first = items[0]
    const third = items[2]
    if (first === undefined || third === undefined) return
    void script
      .drag(first)
      .to(third, "after")
      .drop()
      .then((end) => setResult(end ? \`\${end.source.kind} \${end.reason}\` : "aborted"))
  }
  return (
    <div className="flex flex-col gap-2">
      <DndProvider sensors={sensors} onMove={onMove}>
        <ul data-demo="scripted" className={LIST_CLASS}>
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} container="scripted" />
          ))}
        </ul>
      </DndProvider>
      <div className="flex items-center gap-2">
        <button type="button" data-demo-run="scripted" onClick={run} className="h-7 rounded border px-2 text-[12px] hover:bg-accent">
          Move the first step after the third
        </button>
        <Status name="scripted" text={result} />
      </div>
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

export function ScriptedList() {
  return <Scripted />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>r(()=>import(`./react-scripted-311vLLy6.js`),[]));var ke=200,Ae=`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,je=`flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1`,Me=(0,_.memo)(function({id:e,index:t}){let{ref:n,isDragging:r,position:i}=p({id:e,container:`renders`,index:t,data:e}),o=(0,_.useRef)(0);return o.current+=1,(0,v.jsxs)(`li`,{ref:n,"data-item":e,"data-renders":o.current,tabIndex:0,className:a(Ae,`h-6 justify-between`),children:[(0,v.jsxs)(`span`,{children:[e,r?` · dragging`:``,i?` · ${i}`:``]}),(0,v.jsx)(`span`,{className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:o.current})]})});function Ne(){let{items:e,onMove:t}=d({defaultItems:Pe(ke,`Row`),getId:e=>e});return(0,v.jsx)(f,{onMove:t,children:(0,v.jsx)(`ul`,{"data-demo":`renders`,className:a(je,`h-72 overflow-auto`),children:e.map((e,t)=>(0,v.jsx)(Me,{id:e,index:t},e))})})}function Pe(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function Fe(){return(0,v.jsx)(Ne,{})}var X=`import { memo, useRef } from "react"
import { DndProvider, useSortable, useSortableState } from "@kitora/dnd"
import { cn } from "@kitora/ui/utils"

// Re-renders per row: D100. \${RENDER_ROWS} rows, each showing its render count. Drag one: only the source and the rows it passes over count up.

/** Rows in the render-count list: enough that a re-render storm would be obvious. */
const RENDER_ROWS = 200

const ROW_CLASS =
  "flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50"

const LIST_CLASS = "flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1"

/** A row that shows how many times it rendered (D100); memoised, so a commit re-renders only the rows whose index changed. */
const CountedRow = memo(function CountedRow({ id, index }: { readonly id: string; readonly index: number }) {
  const { ref, isDragging, position } = useSortable({ id, container: "renders", index, data: id })
  const renders = useRef(0)
  renders.current += 1
  return (
    <li ref={ref} data-item={id} data-renders={renders.current} tabIndex={0} className={cn(ROW_CLASS, "h-6 justify-between")}>
      <span>
        {id}
        {isDragging ? " · dragging" : ""}
        {position ? \` · \${position}\` : ""}
      </span>
      <span className="font-mono text-[11px] text-muted-foreground tabular-nums">{renders.current}</span>
    </li>
  )
})

function RenderCounts() {
  const { items, onMove } = useSortableState({ defaultItems: makeItems(RENDER_ROWS, "Row"), getId: (x) => x })
  return (
    <DndProvider onMove={onMove}>
      <ul data-demo="renders" className={cn(LIST_CLASS, "h-72 overflow-auto")}>
        {items.map((id, index) => (
          <CountedRow key={id} id={id} index={index} />
        ))}
      </ul>
    </DndProvider>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

export function LongList() {
  return <RenderCounts />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>r(()=>import(`./react-renders-udYIXcu7.js`),[]));var Ie=`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,Z=`flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1`;function Le({name:e,text:t}){return(0,v.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:t})}var Q=ne();function Re({card:e,index:t}){let{ref:n}=Q.useSortable({id:e.id,container:`typed`,index:t,data:e,accept:e=>!e.data.locked});return(0,v.jsxs)(`li`,{ref:n,"data-item":e.id,tabIndex:0,className:Ie,children:[e.id,e.locked?(0,v.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:`locked: every target refuses it`}):null]})}function ze(){let[e,t]=(0,_.useState)([{id:`Card 1`,locked:!1},{id:`Card 2`,locked:!0},{id:`Card 3`,locked:!1},{id:`Card 4`,locked:!1}]),[n,r]=(0,_.useState)(``);return(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsx)(Q.DndProvider,{onMove:(e,n)=>{r(`moved ${n.data.id} (locked: ${String(n.data.locked)})`),t(t=>o(t,e,e=>e.id))},onDragEnd:e=>{e.op||r(`${e.source.data.id}: ${e.reason}`)},children:(0,v.jsx)(`ul`,{"data-demo":`typed`,className:Z,children:e.map((e,t)=>(0,v.jsx)(Re,{card:e,index:t},e.id))})}),(0,v.jsx)(Le,{name:`typed`,text:n||`drag a card`})]})}function Be(){return(0,v.jsx)(ze,{})}var $=`import { useState } from "react"
import { applyMove, createDndKit } from "@kitora/dnd"

// Typed payloads: D32, D56. createDndKit<Card>() binds the hooks to Card, so accept and onMove read source.data.locked without a cast.

const ROW_CLASS =
  "flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 text-[13px] select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50"

const LIST_CLASS = "flex max-w-xs flex-col gap-1 rounded-md border bg-muted/30 p-1"

/** The demo's status line: phase and the last end. */
function Status({ name, text }: { readonly name: string; readonly text: string }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] text-muted-foreground tabular-nums">
      {text}
    </p>
  )
}

interface Card {
  readonly id: string
  readonly locked: boolean
}

/** Bound to \`Card\`: \`accept\` and \`onMove\` see \`source.data\` as a Card. */
const cards = createDndKit<Card>()

function CardRow({ card, index }: { readonly card: Card; readonly index: number }) {
  const { ref } = cards.useSortable({ id: card.id, container: "typed", index, data: card, accept: (source) => !source.data.locked })
  return (
    <li ref={ref} data-item={card.id} tabIndex={0} className={ROW_CLASS}>
      {card.id}
      {card.locked ? <span className="text-[11px] text-muted-foreground">locked: every target refuses it</span> : null}
    </li>
  )
}

function Typed() {
  const [items, setItems] = useState<readonly Card[]>([
    { id: "Card 1", locked: false },
    { id: "Card 2", locked: true },
    { id: "Card 3", locked: false },
    { id: "Card 4", locked: false },
  ])
  const [last, setLast] = useState("")
  return (
    <div className="flex flex-col gap-2">
      <cards.DndProvider
        onMove={(op, source) => {
          setLast(\`moved \${source.data.id} (locked: \${String(source.data.locked)})\`)
          setItems((xs) => applyMove(xs, op, (c) => c.id))
        }}
        onDragEnd={(e) => {
          if (!e.op) setLast(\`\${e.source.data.id}: \${e.reason}\`)
        }}
      >
        <ul data-demo="typed" className={LIST_CLASS}>
          {items.map((card, index) => (
            <CardRow key={card.id} card={card} index={index} />
          ))}
        </ul>
      </cards.DndProvider>
      <Status name="typed" text={last || "drag a card"} />
    </div>
  )
}

export function Cards() {
  return <Typed />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>r(()=>import(`./react-typed-IMBCzSZh.js`),[]));var Ve=200;function He(){return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(t,{title:`React adapter`,children:`A provider per drag scope and one hook per element. Drops arrive as MoveOps; rows re-render only when their own answer changes.`}),(0,v.jsx)(m,{n:1,title:`Provider and useSortable`,blurb:`D116, D92. Controlled: the app keeps the list and applies each MoveOp with applyMove; the status line is the app's state.`,code:b,children:(0,v.jsx)(y,{})}),(0,v.jsx)(m,{n:2,title:`Uncontrolled list state`,blurb:`D92. useSortableState owns the order (defaultItems) or follows the app's (items); either way every drop reports the new list and its MoveOp.`,code:O,children:(0,v.jsx)(D,{})}),(0,v.jsx)(m,{n:3,title:`Event callbacks`,blurb:`D64, D89. The provider's callbacks and useDndMonitor see every start, target change and end; onMove gets the drop as data.`,code:I,children:(0,v.jsx)(F,{})}),(0,v.jsx)(m,{n:4,title:`Re-renders per row`,blurb:`D100. ${Ve} rows, each showing its render count. Drag one: only the source and the rows it passes over count up.`,code:X,children:(0,v.jsx)(Fe,{})}),(0,v.jsx)(m,{n:5,title:`Styling from data-* hooks`,blurb:`D124. With presentation off, the rows and the drop zone are styled only by Tailwind data-[dnd-*] variants; drop a row on the zone to remove it.`,code:W,children:(0,v.jsx)(U,{})}),(0,v.jsx)(m,{n:6,title:`Typed payloads`,blurb:`D32, D56. createDndKit<Card>() binds the hooks to Card, so accept and onMove read source.data.locked without a cast.`,code:$,children:(0,v.jsx)(Be,{})}),(0,v.jsx)(m,{n:7,title:`Setup warnings`,blurb:`D126. Tick the box to mount three mistakes; each is named once, here through onDndWarning (in the console otherwise). Drag a row to see the missing-commit one.`,code:q,children:(0,v.jsx)(pe,{})}),(0,v.jsx)(m,{n:8,title:`StrictMode and SSR`,blurb:`D116, D119. The uncontrolled list again, inside StrictMode; the jsdom tests also render the adapter with renderToString.`,code:J,children:(0,v.jsx)(xe,{})}),(0,v.jsx)(m,{n:9,title:`Scripted drags and test helpers`,blurb:`D13, D122. The button drives the real engine through the scripted sensor, the one createTestDnd hands a jsdom test.`,code:Y,children:(0,v.jsx)(Oe,{})})]})}export{He as component};