import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Hc as r,Uc as i,zc as a}from"./index-BZuUy872.js";import{b as o}from"./glue-CneFLEST.js";import{t as s}from"./pointer-sensor-DF9dft9U.js";import{n as c}from"./roving-z5KK9ZhH.js";import{f as l,t as u,u as d}from"./kit-Dinrg2gH.js";import{t as f}from"./move-menu-O41h4ZTV.js";import{n as p,t as m}from"./esm-BjjRuGky.js";import"./kit-gallery-BBavj2rC.js";import{t as h}from"./example-B67lLz1F.js";import{r as g}from"./devtools-C6ydKhjy.js";function ee(e,t,n){if(t.length===0)return[...e];let r=new Set(e);for(let e of t)Number.isInteger(e)&&e>=0&&e<n&&r.add(e);return[...r].toSorted((e,t)=>e-t)}var _=e(i(),1),v=a(),y=28,b=6,x=1e4,S=`flex h-7 items-center gap-2 rounded border bg-card px-2 text-[13px] select-none cursor-grab data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`;function C({id:e,index:t,start:n,container:r,roving:i,menu:a,onRender:o}){let{ref:s,isDragging:c}=d({id:e,container:r,index:t,data:e});o?.(e);let l=i.itemProps(e);return(0,v.jsx)(`li`,{ref:s,"data-item":e,"data-dnd-label":e,...l,style:{transform:`translateY(${n}px)`,height:y},className:`absolute inset-x-0 top-0 px-1 py-0.5`,children:(0,v.jsxs)(`div`,{className:S,"data-dragging":c||void 0,children:[(0,v.jsx)(`span`,{className:`w-12 text-right text-muted-foreground tabular-nums`,children:t+1}),(0,v.jsx)(`span`,{className:`truncate`,children:e}),a?(0,v.jsx)(f,{id:e,label:e,tabIndex:l.tabIndex}):null]})})}function w({name:e,rows:t,menu:n,onRowRender:r}){let i=(0,_.useRef)(null),a=(0,_.useRef)(null),o=l({container:e,count:()=>t.length,idAt:e=>t[e],indexOf:e=>t.indexOf(e),rectAt:e=>{let t=a.current?.getBoundingClientRect(),n=u.measurementsCache[e];return t&&n?{left:t.left,top:t.top+n.start,width:t.width,height:n.size}:null},reveal:e=>u.scrollToIndex(e,{align:`auto`})}),s=(0,_.useCallback)(e=>ee(p(e),o,e.count),[o]),u=m({count:t.length,estimateSize:()=>y,overscan:b,getScrollElement:()=>i.current,rangeExtractor:s}),d=c(t);return(0,v.jsx)(`div`,{ref:i,"data-virtual-scroller":e,className:`h-80 overflow-auto rounded-lg border bg-muted/30`,children:(0,v.jsx)(`ul`,{ref:a,"aria-label":`${e} rows`,"data-pinned":o.join(`,`),onKeyDown:d.onKeyDown,onFocus:d.onFocus,style:{height:u.getTotalSize()},className:`relative`,children:u.getVirtualItems().map(i=>{let a=t[i.index];return a===void 0?null:(0,v.jsx)(C,{id:a,index:i.index,start:i.start,container:e,roving:d,menu:n,onRender:r},a)})})})}function T({name:e=`virtual`,menu:t=!1,probe:n}){let[r,i]=(0,_.useState)(()=>Array.from({length:x},(e,t)=>`Row ${t+1}`)),[a,s]=(0,_.useState)(null);return(0,v.jsxs)(`div`,{"data-demo":e,className:`flex max-w-md flex-col gap-2`,children:[(0,v.jsx)(u,{presentation:{indicator:`line`},schedule:n?.schedule,...n?.monitor,onMove:e=>{n?.onCommit?.(),i(t=>o(t,e,e=>e)),s(e)},children:(0,v.jsx)(w,{name:e,rows:r,menu:t,onRowRender:n?.onRowRender})}),(0,v.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:[`first: `,r.slice(0,4).join(`, `),` · last: `,r.slice(-3).join(`, `),a?` · op: ${g(a)}`:``]})]})}var E=`import { useCallback, useRef, useState } from "react"
import { defaultRangeExtractor, useVirtualizer, type Range } from "@tanstack/react-virtual"
import { applyMove, DndProvider, MoveMenu, useRovingFocus, useSortable, useVirtualPin, withPinned, type DndMonitor, type FrameScheduler, type MoveOp, type RovingFocus } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// A 10 000-row list windowed by TanStack Virtual, bound to the engine through one contract,
// VirtualPin: the order (count, idAt, indexOf), index geometry from the virtualizer's own offsets
// (rectAt) and reveal. The engine pins the dragged row in the window (D46) and stands in unmounted
// rows by index, so pointer drags, auto-scroll, keyboard moves (Space, the arrows, Home / End) and
// the Move menu all cross rows that are not in the DOM.

/** Row height in px: the virtualizer's size estimator, and the \`h-7\` the rows render at. */
const ROW_PX = 28
/** Rows the virtualizer renders past each edge of the window. */
const OVERSCAN = 6
/** Rows in the list. */
const ROW_COUNT = 10_000
const ROW_CLASS =
  "flex h-7 items-center gap-2 rounded border bg-card px-2 text-[13px] select-none cursor-grab data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"

/**
 * Optional measuring hooks: leave them out in an app. A benchmark fills them to time the engine's
 * frames (\`schedule\`), mark drag start and end (\`monitor\`), the drop's commit (\`onCommit\`) and the
 * rows that re-render mid-drag (\`onRowRender\`).
 */
export interface VirtualListProbe {
  readonly schedule?: FrameScheduler
  readonly monitor?: DndMonitor<unknown>
  readonly onCommit?: () => void
  readonly onRowRender?: (id: string) => void
}

interface RowProps {
  readonly id: string
  readonly index: number
  readonly start: number
  readonly container: string
  readonly roving: RovingFocus
  readonly menu: boolean
  readonly onRender?: (id: string) => void
}

function VirtualRow({ id, index, start, container, roving, menu, onRender }: RowProps) {
  const { ref, isDragging } = useSortable({ id, container, index, data: id })
  onRender?.(id)
  const focus = roving.itemProps(id)
  return (
    <li ref={ref} data-item={id} data-dnd-label={id} {...focus} style={{ transform: \`translateY(\${start}px)\`, height: ROW_PX }} className="absolute inset-x-0 top-0 px-1 py-0.5">
      <div className={ROW_CLASS} data-dragging={isDragging || undefined}>
        <span className="w-12 text-right text-muted-foreground tabular-nums">{index + 1}</span>
        <span className="truncate">{id}</span>
        {menu ? <MoveMenu id={id} label={id} tabIndex={focus.tabIndex} /> : null}
      </div>
    </li>
  )
}

function VirtualRows({ name, rows, menu, onRowRender }: { readonly name: string; readonly rows: readonly string[]; readonly menu: boolean; readonly onRowRender?: (id: string) => void }) {
  const scroller = useRef<HTMLDivElement | null>(null)
  const list = useRef<HTMLUListElement | null>(null)
  // The contract's functions run during drags, after \`virtualizer\` below exists.
  const pinned = useVirtualPin({
    container: name,
    count: () => rows.length,
    idAt: (index) => rows[index],
    indexOf: (id) => rows.indexOf(id),
    rectAt: (index) => {
      const box = list.current?.getBoundingClientRect()
      const item = virtualizer.measurementsCache[index]
      return box && item ? { left: box.left, top: box.top + item.start, width: box.width, height: item.size } : null
    },
    reveal: (index) => virtualizer.scrollToIndex(index, { align: "auto" }),
  })
  // D46: the dragged row stays mounted wherever the window scrolls. A new extractor per pin set,
  // because the virtualizer memoizes its indexes on the extractor's identity.
  const rangeExtractor = useCallback((range: Range) => withPinned(defaultRangeExtractor(range), pinned, range.count), [pinned])
  const virtualizer = useVirtualizer({ count: rows.length, estimateSize: () => ROW_PX, overscan: OVERSCAN, getScrollElement: () => scroller.current, rangeExtractor })
  // One tab stop for the list; the arrows move focus, including onto rows the window scrolls in.
  const roving = useRovingFocus(rows)
  return (
    <div ref={scroller} data-virtual-scroller={name} className="h-80 overflow-auto rounded-lg border bg-muted/30">
      <ul ref={list} aria-label={\`\${name} rows\`} data-pinned={pinned.join(",")} onKeyDown={roving.onKeyDown} onFocus={roving.onFocus} style={{ height: virtualizer.getTotalSize() }} className="relative">
        {virtualizer.getVirtualItems().map((item) => {
          const id = rows[item.index]
          return id === undefined ? null : <VirtualRow key={id} id={id} index={item.index} start={item.start} container={name} roving={roving} menu={menu} onRender={onRowRender} />
        })}
      </ul>
    </div>
  )
}

/** \`name\` is the container id (and the status line's \`data-demo-status\`); \`menu\` adds a Move menu to every row. */
export function VirtualList({ name = "virtual", menu = false, probe }: { readonly name?: string; readonly menu?: boolean; readonly probe?: VirtualListProbe }) {
  const [rows, setRows] = useState<readonly string[]>(() => Array.from({ length: ROW_COUNT }, (_, i) => \`Row \${i + 1}\`))
  const [last, setLast] = useState<MoveOp | null>(null)
  return (
    <div data-demo={name} className="flex max-w-md flex-col gap-2">
      <DndProvider
        presentation={{ indicator: "line" }}
        schedule={probe?.schedule}
        {...probe?.monitor}
        onMove={(op) => {
          probe?.onCommit?.()
          setRows((xs) => applyMove(xs, op, (x) => x))
          setLast(op)
        }}
      >
        <VirtualRows name={name} rows={rows} menu={menu} onRowRender={probe?.onRowRender} />
      </DndProvider>
      <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
        first: {rows.slice(0, 4).join(", ")} · last: {rows.slice(-3).join(", ")}
        {last ? \` · op: \${formatOp(last)}\` : ""}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>n(()=>import(`./virtual-list-BRwSXrTX.js`),[])),r();function D({name:e,children:t}){return(0,v.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}var O=[1e3,1e4],k=.95,A=e=>Math.round(e*100)/100;function j(e,t){if(e.length===0)return 0;let n=e.toSorted((e,t)=>e-t);return n[Math.min(n.length-1,Math.floor(n.length*t))]??0}function M(e){return t=>s(()=>{let n=performance.now();t();let r=performance.now();if(e.starting){e.starting=!1,e.startScript=r-n;let t=new MessageChannel;t.port1.addEventListener(`message`,()=>{e.startTotal=performance.now()-n,t.port1.close()},{once:!0}),t.port1.start(),t.port2.postMessage(0)}else e.dragging&&(e.frames.push(r-n),e.moved&&e.moves.push(r-n));e.moved=!1})}function N(e,t){!e.dragging||e.committing||(e.renders++,e.rendered.add(t))}function P(){return{starting:!1,dragging:!1,moved:!1,committing:!1,startScript:0,startTotal:0,frames:[],moves:[],commitAt:0,renders:0,rendered:new Set}}function F(e,t){return{onDragStart(){e.starting=!0,e.dragging=!0,e.frames=[],e.moves=[],e.renders=0,e.rendered=new Set},onDragMove(){e.moved=!0},onDragEnd(){let n=e.committing?performance.now()-e.commitAt:0;e.dragging=!1,e.committing=!1,t({startScriptMs:A(e.startScript),startTotalMs:A(e.startTotal),moveP95Ms:A(j(e.moves,k)),moves:e.moves.length,frameP95Ms:A(j(e.frames,k)),frames:e.frames.length,commitMs:A(n),renders:e.renders,rows:e.rendered.size})}}}function I({name:e,result:t}){return t?(0,v.jsxs)(`output`,{"data-bench":e,"data-start-script":t.startScriptMs,"data-start-total":t.startTotalMs,"data-move-p95":t.moveP95Ms,"data-moves":t.moves,"data-frame-p95":t.frameP95Ms,"data-frames":t.frames,"data-commit":t.commitMs,"data-renders":t.renders,"data-rows":t.rows,className:`block font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`drag start `,t.startScriptMs,` ms (to next task `,t.startTotalMs,` ms) · move p95 `,t.moveP95Ms,` ms over `,t.moves,` · frame p95 `,t.frameP95Ms,` ms over `,t.frames,` `,`callbacks · commit `,t.commitMs,` ms · `,t.renders,` row renders over `,t.rows,` rows`]}):(0,v.jsx)(H,{name:`${e}-bench`,children:`no drag measured yet`})}var L=`flex h-7 items-center gap-2 rounded border bg-card px-2 text-[13px] select-none cursor-grab data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,R=(0,_.memo)(function({id:e,index:t,container:n,rec:r}){let{ref:i}=d({id:e,container:n,index:t,data:e});return N(r,e),(0,v.jsx)(`li`,{ref:i,"data-item":e,className:L,children:e})});function z({size:e}){let t=`bench-${e}`,[n,r]=(0,_.useState)(()=>V(e,`Row`)),[i,a]=(0,_.useState)(null),s=(0,_.useRef)(P()).current;return(0,v.jsxs)(`div`,{"data-demo":t,className:`flex flex-col gap-2`,children:[(0,v.jsx)(u,{schedule:M(s),...F(s,a),onMove:e=>{s.committing=!0,s.commitAt=performance.now(),r(t=>o(t,e,e=>e))},children:(0,v.jsx)(`ul`,{"aria-label":`${e} plain rows`,className:`flex h-80 flex-col gap-1 overflow-auto rounded-lg border bg-muted/30 p-1`,children:n.map((e,n)=>(0,v.jsx)(R,{id:e,index:n,container:t,rec:s},e))})}),(0,v.jsxs)(H,{name:t,children:[`first: `,n.slice(0,4).join(`, `)]}),(0,v.jsx)(I,{name:t,result:i})]})}function B(){let[e,t]=(0,_.useState)(null);return(0,v.jsxs)(`div`,{className:`flex max-w-md flex-col gap-2`,children:[(0,v.jsxs)(`div`,{className:`flex h-7 items-center gap-1 text-[13px]`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`Mount a plain list:`}),O.map(n=>(0,v.jsxs)(`button`,{type:`button`,"data-bench-mount":n,"aria-pressed":e===n,onClick:()=>t(n),className:`h-6 rounded border px-2 text-xs hover:bg-accent aria-pressed:bg-primary aria-pressed:text-primary-foreground`,children:[n.toLocaleString(`en`),` rows`]},n)),e===null?null:(0,v.jsx)(`button`,{type:`button`,onClick:()=>t(null),className:`h-6 rounded border px-2 text-xs hover:bg-accent`,children:`Unmount`})]}),e===null?(0,v.jsx)(H,{name:`bench`,children:`no list mounted`}):(0,v.jsx)(z,{size:e},e)]})}function V(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function H({name:e,children:t}){return(0,v.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function U(){return(0,v.jsx)(B,{})}var W=`import { memo, type ReactNode, useRef, useState } from "react"
import { animationFrame, applyMove, type DndMonitor, DndProvider, type FrameScheduler, useSortable } from "@kitora/dnd"

// Benchmark: plain lists of 1 000 and 10 000 rows: D99, D101, D104. Every row mounted, no virtualizer: drag start measures only what is near the viewport, and the numbers below each drag are what task dnd:bench checks against the kit's performance budgets.

/** The plain-list benchmark sizes (1000-item reorder, 10 000-item drag start). */
const BENCH_SIZES = [1_000, 10_000] as const

/** What the benchmark records per drag; \`null\` until measured. */
interface BenchResult {
  /** The activating frame callback: engine activation, measurement, preview and presenter setup. */
  readonly startScriptMs: number
  /** From that callback's start to the next task: adds React's re-render, style and layout. */
  readonly startTotalMs: number
  /** 95th percentile of the frame callbacks that moved the drag: the pointer-move handler with everything it publishes to. */
  readonly moveP95Ms: number
  readonly moves: number
  /** 95th percentile of every frame callback while dragging (pointer moves and the auto-scroll loop). */
  readonly frameP95Ms: number
  readonly frames: number
  /** \`onMove\` start to \`onDragEnd\`: applyMove plus React's synchronous commit render. */
  readonly commitMs: number
  /** Row renders between drag start and the drop (the commit's own render excluded). */
  readonly renders: number
  /** Distinct rows among those renders: a storm would be the whole list (D100). */
  readonly rows: number
}

/** Mutable per-drag bookkeeping of one benchmarked list; never React state, so recording costs no render. */
interface BenchRecorder {
  starting: boolean
  dragging: boolean
  /** Set by \`onDragMove\`, so the scheduler can tell a move callback from the frame loop's. */
  moved: boolean
  committing: boolean
  startScript: number
  startTotal: number
  frames: number[]
  moves: number[]
  commitAt: number
  renders: number
  rendered: Set<string>
}

const P95 = 0.95

const round = (ms: number) => Math.round(ms * 100) / 100

function percentile(values: readonly number[], p: number): number {
  if (values.length === 0) return 0
  const sorted = values.toSorted((a, b) => a - b)
  return sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))] ?? 0
}

/** A frame scheduler that times every callback; see \`BenchResult\` for what each number covers. */
function timedScheduler(rec: BenchRecorder): FrameScheduler {
  return (callback) =>
    animationFrame(() => {
      const t0 = performance.now()
      callback()
      const t1 = performance.now()
      if (rec.starting) {
        rec.starting = false
        rec.startScript = t1 - t0
        const channel = new MessageChannel()
        channel.port1.addEventListener(
          "message",
          () => {
            rec.startTotal = performance.now() - t0
            channel.port1.close()
          },
          { once: true },
        )
        // A port with an event listener (unlike \`onmessage\`) delivers nothing until started.
        channel.port1.start()
        channel.port2.postMessage(0)
      } else if (rec.dragging) {
        rec.frames.push(t1 - t0)
        if (rec.moved) rec.moves.push(t1 - t0)
      }
      rec.moved = false
    })
}

/** Called in a row's render: counts it when it happens mid-drag (not in the commit's render). */
function countRender(rec: BenchRecorder, id: string): void {
  if (!rec.dragging || rec.committing) return
  rec.renders++
  rec.rendered.add(id)
}

function newRecorder(): BenchRecorder {
  return { starting: false, dragging: false, moved: false, committing: false, startScript: 0, startTotal: 0, frames: [], moves: [], commitAt: 0, renders: 0, rendered: new Set() }
}

/** The monitor half of the benchmark: marks the start, the drop and publishes the result once per drag. */
function benchMonitor(rec: BenchRecorder, publish: (result: BenchResult) => void): DndMonitor<unknown> {
  return {
    onDragStart() {
      rec.starting = true
      rec.dragging = true
      rec.frames = []
      rec.moves = []
      rec.renders = 0
      rec.rendered = new Set()
    },
    onDragMove() {
      rec.moved = true
    },
    onDragEnd() {
      const commitMs = rec.committing ? performance.now() - rec.commitAt : 0
      rec.dragging = false
      rec.committing = false
      publish({
        startScriptMs: round(rec.startScript),
        startTotalMs: round(rec.startTotal),
        moveP95Ms: round(percentile(rec.moves, P95)),
        moves: rec.moves.length,
        frameP95Ms: round(percentile(rec.frames, P95)),
        frames: rec.frames.length,
        commitMs: round(commitMs),
        renders: rec.renders,
        rows: rec.rendered.size,
      })
    },
  }
}

function BenchOutput({ name, result }: { readonly name: string; readonly result: BenchResult | null }) {
  if (!result) return <DemoStatus name={\`\${name}-bench\`}>no drag measured yet</DemoStatus>
  return (
    <output
      data-bench={name}
      data-start-script={result.startScriptMs}
      data-start-total={result.startTotalMs}
      data-move-p95={result.moveP95Ms}
      data-moves={result.moves}
      data-frame-p95={result.frameP95Ms}
      data-frames={result.frames}
      data-commit={result.commitMs}
      data-renders={result.renders}
      data-rows={result.rows}
      className="block font-mono text-[11px] text-muted-foreground tabular-nums"
    >
      drag start {result.startScriptMs} ms (to next task {result.startTotalMs} ms) · move p95 {result.moveP95Ms} ms over {result.moves} · frame p95 {result.frameP95Ms} ms over {result.frames}{" "}
      callbacks · commit {result.commitMs} ms · {result.renders} row renders over {result.rows} rows
    </output>
  )
}

const ROW_CLASS =
  "flex h-7 items-center gap-2 rounded border bg-card px-2 text-[13px] select-none cursor-grab data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"

// ---- the plain-list benchmark (D99, D101, D104)

/** Memoized, as any long list's rows should be: a commit re-renders only the rows whose index changed. */
const BenchRow = memo(function BenchRow({ id, index, container, rec }: { readonly id: string; readonly index: number; readonly container: string; readonly rec: BenchRecorder }) {
  const { ref } = useSortable({ id, container, index, data: id })
  countRender(rec, id)
  return (
    <li ref={ref} data-item={id} className={ROW_CLASS}>
      {id}
    </li>
  )
})

function BenchList({ size }: { readonly size: number }) {
  const name = \`bench-\${size}\`
  const [rows, setRows] = useState<readonly string[]>(() => makeItems(size, "Row"))
  const [result, setResult] = useState<BenchResult | null>(null)
  const rec = useRef(newRecorder()).current
  return (
    <div data-demo={name} className="flex flex-col gap-2">
      <DndProvider
        schedule={timedScheduler(rec)}
        {...benchMonitor(rec, setResult)}
        onMove={(op) => {
          rec.committing = true
          rec.commitAt = performance.now()
          setRows((xs) => applyMove(xs, op, (x) => x))
        }}
      >
        <ul aria-label={\`\${size} plain rows\`} className="flex h-80 flex-col gap-1 overflow-auto rounded-lg border bg-muted/30 p-1">
          {rows.map((id, index) => (
            <BenchRow key={id} id={id} index={index} container={name} rec={rec} />
          ))}
        </ul>
      </DndProvider>
      <DemoStatus name={name}>first: {rows.slice(0, 4).join(", ")}</DemoStatus>
      <BenchOutput name={name} result={result} />
    </div>
  )
}

function Bench(): ReactNode {
  const [size, setSize] = useState<number | null>(null)
  return (
    <div className="flex max-w-md flex-col gap-2">
      <div className="flex h-7 items-center gap-1 text-[13px]">
        <span className="text-muted-foreground">Mount a plain list:</span>
        {BENCH_SIZES.map((n) => (
          <button
            key={n}
            type="button"
            data-bench-mount={n}
            aria-pressed={size === n}
            onClick={() => setSize(n)}
            className="h-6 rounded border px-2 text-xs hover:bg-accent aria-pressed:bg-primary aria-pressed:text-primary-foreground"
          >
            {n.toLocaleString("en")} rows
          </button>
        ))}
        {size !== null ? (
          <button type="button" onClick={() => setSize(null)} className="h-6 rounded border px-2 text-xs hover:bg-accent">
            Unmount
          </button>
        ) : null}
      </div>
      {size !== null ? <BenchList key={size} size={size} /> : <DemoStatus name="bench">no list mounted</DemoStatus>}
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

export function BenchListDemo() {
  return <Bench />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>n(()=>import(`./virtual-bench-DoafsLwq.js`),[]));var G=.95,K=e=>Math.round(e*100)/100;function q(e,t){if(e.length===0)return 0;let n=e.toSorted((e,t)=>e-t);return n[Math.min(n.length-1,Math.floor(n.length*t))]??0}function J(e){return t=>s(()=>{let n=performance.now();t();let r=performance.now();if(e.starting){e.starting=!1,e.startScript=r-n;let t=new MessageChannel;t.port1.addEventListener(`message`,()=>{e.startTotal=performance.now()-n,t.port1.close()},{once:!0}),t.port1.start(),t.port2.postMessage(0)}else e.dragging&&(e.frames.push(r-n),e.moved&&e.moves.push(r-n));e.moved=!1})}function Y(e,t){!e.dragging||e.committing||(e.renders++,e.rendered.add(t))}function X(){return{starting:!1,dragging:!1,moved:!1,committing:!1,startScript:0,startTotal:0,frames:[],moves:[],commitAt:0,renders:0,rendered:new Set}}function Z(e,t){return{onDragStart(){e.starting=!0,e.dragging=!0,e.frames=[],e.moves=[],e.renders=0,e.rendered=new Set},onDragMove(){e.moved=!0},onDragEnd(){let n=e.committing?performance.now()-e.commitAt:0;e.dragging=!1,e.committing=!1,t({startScriptMs:K(e.startScript),startTotalMs:K(e.startTotal),moveP95Ms:K(q(e.moves,G)),moves:e.moves.length,frameP95Ms:K(q(e.frames,G)),frames:e.frames.length,commitMs:K(n),renders:e.renders,rows:e.rendered.size})}}}function Q({name:e,result:t}){return t?(0,v.jsxs)(`output`,{"data-bench":e,"data-start-script":t.startScriptMs,"data-start-total":t.startTotalMs,"data-move-p95":t.moveP95Ms,"data-moves":t.moves,"data-frame-p95":t.frameP95Ms,"data-frames":t.frames,"data-commit":t.commitMs,"data-renders":t.renders,"data-rows":t.rows,className:`block font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`drag start `,t.startScriptMs,` ms (to next task `,t.startTotalMs,` ms) · move p95 `,t.moveP95Ms,` ms over `,t.moves,` · frame p95 `,t.frameP95Ms,` ms over `,t.frames,` callbacks · commit `,t.commitMs,` ms · `,t.renders,` row renders over `,t.rows,` rows`]}):(0,v.jsx)(D,{name:`${e}-bench`,children:`no drag measured yet`})}function $({name:e,children:t}){let[n,r]=(0,_.useState)(null),i=(0,_.useRef)(X()).current,[a]=(0,_.useState)(()=>({schedule:J(i),monitor:Z(i,r),onCommit:()=>{i.committing=!0,i.commitAt=performance.now()},onRowRender:e=>Y(i,e)}));return(0,v.jsxs)(`div`,{className:`flex max-w-md flex-col gap-2`,children:[t(a),(0,v.jsx)(Q,{name:e,result:n})]})}function te(){return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(t,{title:`Virtualized lists`,children:`A virtualized list tells the engine about the rows it has not mounted through one contract, VirtualPin: the order (count, idAt, indexOf), index geometry from the virtualizer's own offsets (rectAt) and reveal. The engine pins the dragged row in the window and stands in unmounted rows by index, so pointer drags, auto-scroll, keyboard moves and the Move menu all cross rows that are not in the DOM.`}),(0,v.jsx)(h,{n:1,title:`10 000 rows with TanStack Virtual`,blurb:`D46, D99. Drag a row to the bottom edge and hold: auto-scroll carries it hundreds of rows down while the dragged row stays mounted (its index is in the pinned list). Keyboard: focus a row, Space, then the arrows step past unmounted rows, Home and End jump to the ends of the list.`,code:E,children:(0,v.jsx)($,{name:`virtual`,children:e=>(0,v.jsx)(T,{name:`virtual`,probe:e})})}),(0,v.jsx)(h,{n:2,title:`Move menu over unmounted rows`,blurb:`D46, D109. Move to bottom reaches row 10 000, which the virtualizer has never rendered; the menu reveals it and drops after it.`,code:E,children:(0,v.jsx)($,{name:`virtual-menu`,children:e=>(0,v.jsx)(T,{name:`virtual-menu`,menu:!0,probe:e})})}),(0,v.jsx)(h,{n:3,title:`Benchmark: plain lists of 1 000 and 10 000 rows`,blurb:`D99, D101, D104. Every row mounted, no virtualizer: drag start measures only what is near the viewport, and the numbers below each drag are what task dnd:bench checks against the kit's performance budgets.`,code:W,children:(0,v.jsx)(U,{})})]})}export{te as component};