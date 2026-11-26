import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i,Oc as a,hi as o}from"./index-9y5uwRd3.js";import{a as s,b as c,i as l,o as u}from"./glue-D_yEomvg.js";import{r as d}from"./autoscroll-tw1IXUPe.js";import{s as f}from"./kit-Uq9GZ0sn.js";import"./kit-gallery-B-Yr9fP4.js";import{t as p}from"./example-CZLJLtIC.js";var m=e(n(),1),h=i();function g(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function _({name:e,initial:t,axis:n=`y`,direction:r,activation:i,autoScroll:a,listClassName:s,renderItem:u,wrap:d}){let[p,g]=(0,m.useState)(t),[_,y]=(0,m.useState)(null),[b]=(0,m.useState)(()=>({name:`demo-status`,setup:e=>e.monitor({onDragEnd:e=>y({kind:e.source.kind,reason:e.reason,moved:e.op!==null})})})),x=l({activation:i,autoScroll:a,plugins:[b],onMove:e=>g(t=>c(t,e,e=>e))}),S=f(x),C=(0,h.jsx)(`ul`,{"data-demo":e,dir:r,className:o(`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,n===`y`?`flex-col`:`flex-row flex-wrap`,s),children:p.map((t,i)=>(0,h.jsx)(v,{dnd:x,state:S,container:e,label:t,index:i,axis:n,direction:r,children:u?u(t):t},t))});return(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[d?d(C):C,(0,h.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,S.phase,S.source?` · ${S.source.kind}`:``,S.over?` · over ${S.over.id} (${S.over.position})`:``,_?` · last: ${_.kind} ${_.reason}${_.moved?` (moved)`:``}`:``]})]})}function v({dnd:e,state:t,container:n,label:r,index:i,axis:a,direction:c,children:l}){let f=s(e,{id:r,container:n,index:i,data:r}),p=u(e,{id:r,kind:`item`,container:n,axis:a,direction:c}),g=(0,m.useCallback)(e=>{let t=f(e),n=p(e);return()=>{t?.(),n?.()}},[f,p]),_=t.phase===`dragging`&&t.source?.id===r,v=_&&e?d(t.transform,e.sourceScale()):null;return(0,h.jsx)(`li`,{ref:g,"data-item":r,tabIndex:0,style:v?{transform:`translate(${v.x}px, ${v.y}px)`}:void 0,className:o(`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent`,`data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,`data-[dnd-over=before]:shadow-[inset_0_2px_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_0_-2px_0_var(--color-primary)]`,a===`x`&&`data-[dnd-over=before]:shadow-[inset_2px_0_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_-2px_0_0_var(--color-primary)]`,_&&`relative z-10 cursor-grabbing opacity-90 shadow-md`),children:l})}function y(){return(0,h.jsx)(_,{name:`overview`,initial:g(5),listClassName:`max-w-xs`})}var b=`import { type ReactNode, useCallback, useState } from "react"
import { type ActivationMap, applyMove, type AutoScrollOptions, type Axis, type Direction, type DndPlugin, type DomDnd, type DragEndEvent, type DragState, localOffset, useDomDnd, useDraggableRef, useDragState, useDroppableRef } from "@kitora/dnd"
import { cn } from "@kitora/ui/utils"

// A list on the dom layer: Drag a row with the mouse, a finger (long-press) or a pen; or focus one and use Space and the arrow keys.

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

export function DomLayerList() {
  return <SortableDemo name="overview" initial={makeItems(5)} listClassName="max-w-xs" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>r(()=>import(`./index-list-BLgWPtVk.js`),[]));var x=[{name:`core`,what:`State machine, collision, modifiers, MoveOp, fractional index, scripted sensor. No DOM.`},{name:`dom`,what:`Pointer and keyboard sensors, measurement, auto-scroll, edge cases.`},{name:`dom presentation`,what:`Top-layer preview, placeholder, shift and drop animation, moveBefore, indicators.`},{name:`react`,what:`DndProvider, useSortable, per-item stores, devtools.`},{name:`html5`,what:`OS files, text and URLs through the HTML5 bridge (opt-in entry).`},{name:`ui presets`,what:`SortableList, SortableGrid, Kanban, FreeCanvas, DragHandle, DropIndicator.`},{name:`tree + multi-select`,what:`Flatten and build, depth from the horizontal offset, reparent, spring-loaded expand, SortableTree, selection batches.`},{name:`accessibility`,what:`Grab-arrow, Move menu and Tab-to-target keyboard models, live-region announcements from a replaceable catalog, instructions, one tab stop per list, focus restore, forced colours.`},{name:`table, virtual`,what:`Table rows, virtual lists.`}],S=[{to:`/kits/dnd/input`,label:`Pointer input`},{to:`/kits/dnd/scroll`,label:`Auto-scroll`},{to:`/kits/dnd/edge`,label:`Edge cases`},{to:`/kits/dnd/sortable`,label:`Sortable lists`},{to:`/kits/dnd/kanban`,label:`Kanban`},{to:`/kits/dnd/tree`,label:`Trees`},{to:`/kits/dnd/multi`,label:`Multi-select`},{to:`/kits/dnd/a11y`,label:`Keyboard and screen readers`},{to:`/kits/dnd/presets`,label:`Presets`}];function C(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(t,{title:`Drag & drop kit`,children:`One engine for pointer, keyboard and touch drags, built in layers: a framework-free core, a dom layer, then React bindings and presets. Each page proves rows of the feature catalog.`}),(0,h.jsxs)(`section`,{"aria-label":`Layers`,className:`mb-6 rounded-lg border p-3`,children:[(0,h.jsx)(`h2`,{className:`mb-1 text-sm font-medium`,children:`Layers`}),(0,h.jsx)(`p`,{className:`mb-2 text-[13px] text-muted-foreground`,children:`Every layer ships today; listed in build order.`}),(0,h.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,h.jsx)(`tbody`,{children:x.map(e=>(0,h.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,h.jsx)(`td`,{className:`py-1 pr-3 font-mono text-[12px]`,children:e.name}),(0,h.jsx)(`td`,{className:`py-1`,children:e.what})]},e.name))})}),(0,h.jsx)(`p`,{className:`mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[13px]`,children:S.map(e=>(0,h.jsx)(a,{to:e.to,className:`underline underline-offset-2`,children:e.label},e.to))})]}),(0,h.jsx)(p,{n:1,title:`A list on the dom layer`,blurb:`Drag a row with the mouse, a finger (long-press) or a pen; or focus one and use Space and the arrow keys.`,code:b,children:(0,h.jsx)(y,{})})]})}export{C as component};