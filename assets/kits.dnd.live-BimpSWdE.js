import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i,hi as a}from"./index-q72zUtm9.js";import{b as o}from"./glue-CfG0SQT7.js";import{l as s,s as c,t as l,u}from"./kit-CidJliA5.js";import{r as d}from"./sortable-list-CZca2zJC.js";import"./kit-gallery-Atvibnty.js";import{t as f}from"./example-B8EaWveR.js";import{r as p}from"./devtools-Fo2Yiosb.js";var m=e(n(),1);function h(e){return typeof e==`object`&&!!e&&`then`in e&&typeof e.then==`function`}function g(e){let[t,n]=(0,m.useState)(e.committed),[r,i]=(0,m.useState)(e.committed),[a,o]=(0,m.useState)([]);t!==e.committed&&(n(e.committed),i(e.committed));let s=(0,m.useRef)(e);s.current=e;let{apply:c}=e;return{view:(0,m.useMemo)(()=>a.reduce(c,r),[a,r,c]),pending:a,onMove:(0,m.useCallback)(e=>{o(t=>[...t,e]);let t=s.current.committed,n=n=>{o(t=>t.filter(t=>t!==e)),n.status===`committed`&&s.current.committed===t&&i(t=>s.current.apply(t,e)),s.current.onSettle?.(e,n)},r=e=>n({status:`rolled-back`,error:e});try{let t=s.current.commit(e);h(t)?t.then(()=>n({status:`committed`}),r):n({status:`committed`})}catch(e){r(e)}},[])}}var _=i(),v=`flex h-7 cursor-grab items-center rounded-md border bg-card px-2 text-[13px] select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,y=`flex w-56 flex-col gap-1 rounded-lg border bg-muted/30 p-1`;function b({id:e,index:t,container:n,danger:r}){let{ref:i}=u({id:e,container:n,index:t,data:e});return(0,_.jsx)(`li`,{ref:i,"data-item":e,tabIndex:0,className:a(v,r&&`border-destructive/60 text-destructive`),children:e})}var x=3;function S(){let[e,t]=(0,m.useState)(()=>C(4,`Row`)),n=(0,m.useRef)(0),[r,i]=(0,m.useState)(``);return(0,_.jsxs)(`div`,{"data-demo":`added`,className:`flex flex-col gap-2`,children:[(0,_.jsx)(l,{onDragOver:e=>{!e.over||n.current>=x||(n.current+=1,t(e=>[`Added ${e.filter(e=>e.startsWith(`Added`)).length+1}`,...e]))},onMove:e=>t(t=>o(t,e,e=>e)),onDragEnd:e=>{n.current=0,i(e.op?`${e.reason}: ${e.op.ids.join(`,`)} ${e.op.to.position} ${e.op.to.target??`end`}`:e.reason)},children:(0,_.jsx)(`ul`,{"aria-label":`Growing list`,className:y,children:e.map((e,t)=>(0,_.jsx)(b,{id:e,index:t,container:`added`},e))})}),(0,_.jsxs)(w,{name:`added`,children:[`order: `,e.join(`, `),r?` · last: ${r}`:``]})]})}function C(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function w({name:e,children:t}){return(0,_.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function T(){return(0,_.jsx)(S,{})}var E=`import { type ReactNode, useRef, useState } from "react"
import { applyMove, DndProvider, type DragEndEvent, type DragState, type MoveOp, useSortable } from "@kitora/dnd"
import { cn } from "@kitora/ui/utils"

// Rows added during a drag: D49. Each time the drag enters a new row, the app inserts a row at the top (three per drag at most). The source keeps dragging and the drop lands beside the row you chose.

const ROW_CLASS = "flex h-7 cursor-grab items-center rounded-md border bg-card px-2 text-[13px] select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"

const LIST_CLASS = "flex w-56 flex-col gap-1 rounded-lg border bg-muted/30 p-1"

function Row({ id, index, container, danger }: { readonly id: string; readonly index: number; readonly container: string; readonly danger?: boolean }) {
  const { ref } = useSortable({ id, container, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className={cn(ROW_CLASS, danger && "border-destructive/60 text-destructive")}>
      {id}
    </li>
  )
}

/** Rows inserted per drag, at most: enough to prove the point without growing the list forever. */
const MAX_INSERTS = 3

function Added() {
  const [items, setItems] = useState<readonly string[]>(() => makeItems(4, "Row"))
  /** Rows inserted by the drag in flight; a ref, since several target changes can arrive before a render. */
  const perDrag = useRef(0)
  const [last, setLast] = useState("")
  const onDragOver = (s: DragState<unknown>) => {
    if (!s.over || perDrag.current >= MAX_INSERTS) return
    perDrag.current += 1
    setItems((xs) => [\`Added \${xs.filter((x) => x.startsWith("Added")).length + 1}\`, ...xs])
  }
  const onMove = (op: MoveOp) => setItems((xs) => applyMove(xs, op, (x) => x))
  const onDragEnd = (e: DragEndEvent<unknown>) => {
    perDrag.current = 0
    setLast(e.op ? \`\${e.reason}: \${e.op.ids.join(",")} \${e.op.to.position} \${e.op.to.target ?? "end"}\` : e.reason)
  }
  return (
    <div data-demo="added" className="flex flex-col gap-2">
      <DndProvider onDragOver={onDragOver} onMove={onMove} onDragEnd={onDragEnd}>
        <ul aria-label="Growing list" className={LIST_CLASS}>
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} container="added" />
          ))}
        </ul>
      </DndProvider>
      <DemoStatus name="added">
        order: {items.join(", ")}
        {last ? \` · last: \${last}\` : ""}
      </DemoStatus>
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function GrowingList() {
  return <Added />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>r(()=>import(`./live-added-CBAKO4Gi.js`),[]));var D=`flex h-7 cursor-grab items-center rounded-md border bg-card px-2 text-[13px] select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,O=`flex w-56 flex-col gap-1 rounded-lg border bg-muted/30 p-1`;function k({id:e,index:t,container:n,danger:r}){let{ref:i}=u({id:e,container:n,index:t,data:e});return(0,_.jsx)(`li`,{ref:i,"data-item":e,tabIndex:0,className:a(D,r&&`border-destructive/60 text-destructive`),children:e})}function A(){let[e,t]=(0,m.useState)(()=>[`Row 1`,`Row 2`,`Trap`,`Row 4`]),[n,r]=(0,m.useState)(``);return(0,_.jsxs)(`div`,{"data-demo":`removed`,className:`flex flex-col gap-2`,children:[(0,_.jsx)(l,{onDragOver:e=>{let n=e.source?.id;e.over?.id===`Trap`&&n&&t(e=>e.filter(e=>e!==n))},onMove:e=>t(t=>o(t,e,e=>e)),onDragEnd:e=>r(e.reason),children:(0,_.jsx)(`ul`,{"aria-label":`List with a trap row`,className:O,children:e.map((e,t)=>(0,_.jsx)(k,{id:e,index:t,container:`removed`,danger:e===`Trap`},e))})}),(0,_.jsxs)(j,{name:`removed`,children:[`order: `,e.join(`, `),n?` · last end: ${n}`:``]})]})}function j({name:e,children:t}){return(0,_.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function M(){return(0,_.jsx)(A,{})}var N=`import { type ReactNode, useState } from "react"
import { applyMove, DndProvider, type DragState, useSortable } from "@kitora/dnd"
import { cn } from "@kitora/ui/utils"

// Source removed mid-drag: D97. Drag a row over Trap: the app deletes the dragged row, and the drag ends with source-removed instead of dropping a ghost.

const ROW_CLASS = "flex h-7 cursor-grab items-center rounded-md border bg-card px-2 text-[13px] select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"

const LIST_CLASS = "flex w-56 flex-col gap-1 rounded-lg border bg-muted/30 p-1"

function Row({ id, index, container, danger }: { readonly id: string; readonly index: number; readonly container: string; readonly danger?: boolean }) {
  const { ref } = useSortable({ id, container, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className={cn(ROW_CLASS, danger && "border-destructive/60 text-destructive")}>
      {id}
    </li>
  )
}

function Removed() {
  const [items, setItems] = useState<readonly string[]>(() => ["Row 1", "Row 2", "Trap", "Row 4"])
  const [last, setLast] = useState("")
  const onDragOver = (s: DragState<unknown>) => {
    const source = s.source?.id
    if (s.over?.id === "Trap" && source) setItems((xs) => xs.filter((x) => x !== source))
  }
  return (
    <div data-demo="removed" className="flex flex-col gap-2">
      <DndProvider onDragOver={onDragOver} onMove={(op) => setItems((xs) => applyMove(xs, op, (x) => x))} onDragEnd={(e) => setLast(e.reason)}>
        <ul aria-label="List with a trap row" className={LIST_CLASS}>
          {items.map((id, index) => (
            <Row key={id} id={id} index={index} container="removed" danger={id === "Trap"} />
          ))}
        </ul>
      </DndProvider>
      <DemoStatus name="removed">
        order: {items.join(", ")}
        {last ? \` · last end: \${last}\` : ""}
      </DemoStatus>
    </div>
  )
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function ListWithTrap() {
  return <Removed />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>r(()=>import(`./live-removed-_7X5YHzZ.js`),[]));var P=`flex h-7 cursor-grab items-center rounded-md border bg-card px-2 text-[13px] select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,F=`flex w-56 flex-col gap-1 rounded-lg border bg-muted/30 p-1`;function I({id:e,index:t,container:n,danger:r}){let{ref:i}=u({id:e,container:n,index:t,data:e});return(0,_.jsx)(`li`,{ref:i,"data-item":e,tabIndex:0,className:a(P,r&&`border-destructive/60 text-destructive`),children:e})}function L({id:e,label:t,count:n}){let{ref:r,isOver:i}=s({id:e,kind:`container`});return(0,_.jsxs)(`div`,{ref:r,"data-zone":e,className:a(`flex h-16 w-40 flex-col items-center justify-center rounded-lg border border-dashed text-[12px] text-muted-foreground`,i&&`border-primary bg-primary/10 text-foreground`),children:[t,(0,_.jsxs)(`span`,{className:`font-mono text-[11px] tabular-nums`,children:[n,` dropped`]})]})}function R({counts:e}){let{phase:t}=c();return t===`dragging`?(0,_.jsx)(L,{id:`late`,label:`Mounted mid-drag`,count:e.late??0}):(0,_.jsx)(L,{id:`early`,label:`Gone while dragging`,count:e.early??0})}function z(){let[e,t]=(0,m.useState)(()=>B(4,`Item`)),[n,r]=(0,m.useState)({});return(0,_.jsxs)(`div`,{"data-demo":`targets`,className:`flex flex-col gap-2`,children:[(0,_.jsx)(l,{onMove:e=>{let n=e.to.container;if(n===`late`||n===`early`){t(t=>t.filter(t=>!e.ids.includes(t))),r(e=>({...e,[n]:(e[n]??0)+1}));return}t(t=>o(t,e,e=>e))},children:(0,_.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,_.jsx)(`ul`,{"aria-label":`Items`,className:F,children:e.map((e,t)=>(0,_.jsx)(I,{id:e,index:t,container:`targets`},e))}),(0,_.jsx)(R,{counts:n})]})}),(0,_.jsxs)(V,{name:`targets`,children:[`items: `,e.join(`, `),` · late: `,n.late??0,` · early: `,n.early??0]})]})}function B(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function V({name:e,children:t}){return(0,_.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function H(){return(0,_.jsx)(z,{})}var U=`import { type ReactNode, useState } from "react"
import { applyMove, DndProvider, type MoveOp, useDragState, useDroppable, useSortable } from "@kitora/dnd"
import { cn } from "@kitora/ui/utils"

// Targets that appear and disappear: D151. The right-hand zone unmounts when a drag starts and another mounts in its place; drop on the new one at once.

const ROW_CLASS = "flex h-7 cursor-grab items-center rounded-md border bg-card px-2 text-[13px] select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"

const LIST_CLASS = "flex w-56 flex-col gap-1 rounded-lg border bg-muted/30 p-1"

function Row({ id, index, container, danger }: { readonly id: string; readonly index: number; readonly container: string; readonly danger?: boolean }) {
  const { ref } = useSortable({ id, container, index, data: id })
  return (
    <li ref={ref} data-item={id} tabIndex={0} className={cn(ROW_CLASS, danger && "border-destructive/60 text-destructive")}>
      {id}
    </li>
  )
}

function Zone({ id, label, count }: { readonly id: string; readonly label: string; readonly count: number }) {
  const { ref, isOver } = useDroppable({ id, kind: "container" })
  return (
    <div
      ref={ref}
      data-zone={id}
      className={cn("flex h-16 w-40 flex-col items-center justify-center rounded-lg border border-dashed text-[12px] text-muted-foreground", isOver && "border-primary bg-primary/10 text-foreground")}
    >
      {label}
      <span className="font-mono text-[11px] tabular-nums">{count} dropped</span>
    </div>
  )
}

function Zones({ counts }: { readonly counts: Readonly<Record<string, number>> }) {
  const { phase } = useDragState()
  return phase === "dragging" ? <Zone id="late" label="Mounted mid-drag" count={counts.late ?? 0} /> : <Zone id="early" label="Gone while dragging" count={counts.early ?? 0} />
}

function Targets() {
  const [items, setItems] = useState<readonly string[]>(() => makeItems(4, "Item"))
  const [counts, setCounts] = useState<Readonly<Record<string, number>>>({})
  const onMove = (op: MoveOp) => {
    const zone = op.to.container
    if (zone === "late" || zone === "early") {
      setItems((xs) => xs.filter((x) => !op.ids.includes(x)))
      setCounts((c) => ({ ...c, [zone]: (c[zone] ?? 0) + 1 }))
      return
    }
    setItems((xs) => applyMove(xs, op, (x) => x))
  }
  return (
    <div data-demo="targets" className="flex flex-col gap-2">
      <DndProvider onMove={onMove}>
        <div className="flex items-start gap-3">
          <ul aria-label="Items" className={LIST_CLASS}>
            {items.map((id, index) => (
              <Row key={id} id={id} index={index} container="targets" />
            ))}
          </ul>
          <Zones counts={counts} />
        </div>
      </DndProvider>
      <DemoStatus name="targets">
        items: {items.join(", ")} · late: {counts.late ?? 0} · early: {counts.early ?? 0}
      </DemoStatus>
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function ZonesDemo() {
  return <Targets />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>r(()=>import(`./live-targets-BAe8F2fd.js`),[]));function W(){let[e,t]=(0,m.useState)(()=>G(4,`Task`)),[n,r]=(0,m.useState)([]),[i,a]=(0,m.useState)(``),s=(e,t)=>o(e,t,e=>e),{view:c,pending:l,onMove:u}=g({committed:e,apply:s,commit:e=>new Promise((t,n)=>r(r=>[...r,{op:e,resolve:t,reject:n}])),onSettle:(e,t)=>a(`${t.status}: ${p(e)}`)}),f=e=>{let[i,...a]=n;i&&(r(a),e?(t(e=>s(e,i.op)),i.resolve()):i.reject(Error(`save failed`)))};return(0,_.jsxs)(`div`,{"data-demo":`optimistic`,className:`flex flex-col gap-2`,children:[(0,_.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,_.jsx)(`div`,{className:`w-56`,children:(0,_.jsx)(d,{id:`optimistic`,label:`Tasks saved to a slow server`,items:c,getId:e=>e,onItemsChange:(e,t)=>u(t),renderItem:e=>e})}),(0,_.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,_.jsx)(`button`,{type:`button`,"data-answer":`saved`,disabled:n.length===0,onClick:()=>f(!0),className:`h-7 rounded-md border px-2 text-[12px] disabled:opacity-50`,children:`Answer: saved`}),(0,_.jsx)(`button`,{type:`button`,"data-answer":`failed`,disabled:n.length===0,onClick:()=>f(!1),className:`h-7 rounded-md border px-2 text-[12px] disabled:opacity-50`,children:`Answer: failed`})]})]}),(0,_.jsxs)(K,{name:`optimistic`,children:[`view: `,c.join(`, `),` · server: `,e.join(`, `),` · pending: `,l.length,i?` · last: ${i}`:``]})]})}function G(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function K({name:e,children:t}){return(0,_.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function q(){return(0,_.jsx)(W,{})}var J=`import { type ReactNode, useState } from "react"
import { applyMove, type MoveOp, SortableList, useOptimisticMoves } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Async save, shown at once: D93, D94. Drag a task: it lands in its new place and stays there while the save is pending (the server order below does not change yet). Answer the save: saved folds it into the server order, failed rolls the view back.

/** One save in flight on the demo "server": answered by the Saved / Failed buttons, oldest first. */
interface PendingSave {
  readonly op: MoveOp
  readonly resolve: () => void
  readonly reject: (error: Error) => void
}

function OptimisticSave() {
  const [server, setServer] = useState<readonly string[]>(() => makeItems(4, "Task"))
  const [queue, setQueue] = useState<readonly PendingSave[]>([])
  const [last, setLast] = useState("")
  const apply = (items: readonly string[], op: MoveOp) => applyMove(items, op, (x) => x)
  const { view, pending, onMove } = useOptimisticMoves({
    committed: server,
    apply,
    commit: (op) => new Promise<void>((resolve, reject) => setQueue((q) => [...q, { op, resolve, reject }])),
    onSettle: (op, outcome) => setLast(\`\${outcome.status}: \${formatOp(op)}\`),
  })
  const answer = (ok: boolean) => {
    const [head, ...rest] = queue
    if (!head) return
    setQueue(rest)
    if (ok) {
      // The server applies the op, then the page "refetches": the new committed order includes it.
      setServer((xs) => apply(xs, head.op))
      head.resolve()
    } else head.reject(new Error("save failed"))
  }
  return (
    <div data-demo="optimistic" className="flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <div className="w-56">
          <SortableList id="optimistic" label="Tasks saved to a slow server" items={view} getId={(x) => x} onItemsChange={(_, op) => onMove(op)} renderItem={(x) => x} />
        </div>
        <div className="flex flex-col gap-1">
          <button type="button" data-answer="saved" disabled={queue.length === 0} onClick={() => answer(true)} className="h-7 rounded-md border px-2 text-[12px] disabled:opacity-50">
            Answer: saved
          </button>
          <button type="button" data-answer="failed" disabled={queue.length === 0} onClick={() => answer(false)} className="h-7 rounded-md border px-2 text-[12px] disabled:opacity-50">
            Answer: failed
          </button>
        </div>
      </div>
      <DemoStatus name="optimistic">
        view: {view.join(", ")} · server: {server.join(", ")} · pending: {pending.length}
        {last ? \` · last: \${last}\` : ""}
      </DemoStatus>
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function TaskOrder() {
  return <OptimisticSave />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>r(()=>import(`./live-optimistic-UqBycJ1S.js`),[]));function Y(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Live lists`,children:`Lists change under a drag: rows arrive, the source disappears, targets mount and unmount. The drag follows the data; nothing here uses a timer.`}),(0,_.jsx)(f,{n:1,title:`Rows added during a drag`,blurb:`D49. Each time the drag enters a new row, the app inserts a row at the top (three per drag at most). The source keeps dragging and the drop lands beside the row you chose.`,code:E,children:(0,_.jsx)(T,{})}),(0,_.jsx)(f,{n:2,title:`Source removed mid-drag`,blurb:`D97. Drag a row over Trap: the app deletes the dragged row, and the drag ends with source-removed instead of dropping a ghost.`,code:N,children:(0,_.jsx)(M,{})}),(0,_.jsx)(f,{n:3,title:`Targets that appear and disappear`,blurb:`D151. The right-hand zone unmounts when a drag starts and another mounts in its place; drop on the new one at once.`,code:U,children:(0,_.jsx)(H,{})}),(0,_.jsx)(f,{n:4,title:`Async save, shown at once`,blurb:`D93, D94. Drag a task: it lands in its new place and stays there while the save is pending (the server order below does not change yet). Answer the save: saved folds it into the server order, failed rolls the view back.`,code:J,children:(0,_.jsx)(q,{})})]})}export{Y as component};