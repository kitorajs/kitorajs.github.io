import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i,hi as a}from"./index-q72zUtm9.js";import{a as o,b as s,i as c,o as l}from"./glue-CfG0SQT7.js";import{r as u}from"./autoscroll-tw1IXUPe.js";import{s as d}from"./kit-CidJliA5.js";import"./kit-gallery-Atvibnty.js";import{t as f}from"./example-B8EaWveR.js";var p=e(n(),1),m=i();function h(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function g({name:e,initial:t,axis:n=`y`,direction:r,activation:i,autoScroll:o,listClassName:l,renderItem:u,wrap:f}){let[h,g]=(0,p.useState)(t),[v,y]=(0,p.useState)(null),[b]=(0,p.useState)(()=>({name:`demo-status`,setup:e=>e.monitor({onDragEnd:e=>y({kind:e.source.kind,reason:e.reason,moved:e.op!==null})})})),x=c({activation:i,autoScroll:o,plugins:[b],onMove:e=>g(t=>s(t,e,e=>e))}),S=d(x),C=(0,m.jsx)(`ul`,{"data-demo":e,dir:r,className:a(`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,n===`y`?`flex-col`:`flex-row flex-wrap`,l),children:h.map((t,i)=>(0,m.jsx)(_,{dnd:x,state:S,container:e,label:t,index:i,axis:n,direction:r,children:u?u(t):t},t))});return(0,m.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[f?f(C):C,(0,m.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,S.phase,S.source?` · ${S.source.kind}`:``,S.over?` · over ${S.over.id} (${S.over.position})`:``,v?` · last: ${v.kind} ${v.reason}${v.moved?` (moved)`:``}`:``]})]})}function _({dnd:e,state:t,container:n,label:r,index:i,axis:s,direction:c,children:d}){let f=o(e,{id:r,container:n,index:i,data:r}),h=l(e,{id:r,kind:`item`,container:n,axis:s,direction:c}),g=(0,p.useCallback)(e=>{let t=f(e),n=h(e);return()=>{t?.(),n?.()}},[f,h]),_=t.phase===`dragging`&&t.source?.id===r,v=_&&e?u(t.transform,e.sourceScale()):null;return(0,m.jsx)(`li`,{ref:g,"data-item":r,tabIndex:0,style:v?{transform:`translate(${v.x}px, ${v.y}px)`}:void 0,className:a(`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent`,`data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,`data-[dnd-over=before]:shadow-[inset_0_2px_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_0_-2px_0_var(--color-primary)]`,s===`x`&&`data-[dnd-over=before]:shadow-[inset_2px_0_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_-2px_0_0_var(--color-primary)]`,_&&`relative z-10 cursor-grabbing opacity-90 shadow-md`),children:d})}function v(){return(0,m.jsx)(g,{name:`window`,initial:h(40,`Page`),listClassName:`max-w-xs`})}var y=`import { type ReactNode, useCallback, useState } from "react"
import { type ActivationMap, applyMove, type AutoScrollOptions, type Axis, type Direction, type DndPlugin, type DomDnd, type DragEndEvent, type DragState, localOffset, useDomDnd, useDraggableRef, useDragState, useDroppableRef } from "@kitora/dnd"
import { cn } from "@kitora/ui/utils"

// Window: D65. A long list in the page itself: drag a row to the bottom of the window.

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

export function PageList() {
  return <SortableDemo name="window" initial={makeItems(40, "Page")} listClassName="max-w-xs" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>r(()=>import(`./scroll-window-DuamA0jb.js`),[]));function b(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function x({name:e,initial:t,axis:n=`y`,direction:r,activation:i,autoScroll:o,listClassName:l,renderItem:u,wrap:f}){let[h,g]=(0,p.useState)(t),[_,v]=(0,p.useState)(null),[y]=(0,p.useState)(()=>({name:`demo-status`,setup:e=>e.monitor({onDragEnd:e=>v({kind:e.source.kind,reason:e.reason,moved:e.op!==null})})})),b=c({activation:i,autoScroll:o,plugins:[y],onMove:e=>g(t=>s(t,e,e=>e))}),x=d(b),C=(0,m.jsx)(`ul`,{"data-demo":e,dir:r,className:a(`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,n===`y`?`flex-col`:`flex-row flex-wrap`,l),children:h.map((t,i)=>(0,m.jsx)(S,{dnd:b,state:x,container:e,label:t,index:i,axis:n,direction:r,children:u?u(t):t},t))});return(0,m.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[f?f(C):C,(0,m.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,x.phase,x.source?` · ${x.source.kind}`:``,x.over?` · over ${x.over.id} (${x.over.position})`:``,_?` · last: ${_.kind} ${_.reason}${_.moved?` (moved)`:``}`:``]})]})}function S({dnd:e,state:t,container:n,label:r,index:i,axis:s,direction:c,children:d}){let f=o(e,{id:r,container:n,index:i,data:r}),h=l(e,{id:r,kind:`item`,container:n,axis:s,direction:c}),g=(0,p.useCallback)(e=>{let t=f(e),n=h(e);return()=>{t?.(),n?.()}},[f,h]),_=t.phase===`dragging`&&t.source?.id===r,v=_&&e?u(t.transform,e.sourceScale()):null;return(0,m.jsx)(`li`,{ref:g,"data-item":r,tabIndex:0,style:v?{transform:`translate(${v.x}px, ${v.y}px)`}:void 0,className:a(`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent`,`data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,`data-[dnd-over=before]:shadow-[inset_0_2px_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_0_-2px_0_var(--color-primary)]`,s===`x`&&`data-[dnd-over=before]:shadow-[inset_2px_0_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_-2px_0_0_var(--color-primary)]`,_&&`relative z-10 cursor-grabbing opacity-90 shadow-md`),children:d})}function C(){return(0,m.jsx)(x,{name:`container`,initial:b(40,`Box`),listClassName:`h-56 max-w-xs flex-nowrap overflow-auto`})}var w=`import { type ReactNode, useCallback, useState } from "react"
import { type ActivationMap, applyMove, type AutoScrollOptions, type Axis, type Direction, type DndPlugin, type DomDnd, type DragEndEvent, type DragState, localOffset, useDomDnd, useDraggableRef, useDragState, useDroppableRef } from "@kitora/dnd"
import { cn } from "@kitora/ui/utils"

// Container and overflow: D66, D68, D101. Drag Box 2 to the bottom edge, or just below the box: it scrolls, and the drop lands where you release.

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

export function ScrollBox() {
  return <SortableDemo name="container" initial={makeItems(40, "Box")} listClassName="h-56 max-w-xs flex-nowrap overflow-auto" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>r(()=>import(`./scroll-container-Cz33c2mv.js`),[]));function T(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function E({name:e,initial:t,axis:n=`y`,direction:r,activation:i,autoScroll:o,listClassName:l,renderItem:u,wrap:f}){let[h,g]=(0,p.useState)(t),[_,v]=(0,p.useState)(null),[y]=(0,p.useState)(()=>({name:`demo-status`,setup:e=>e.monitor({onDragEnd:e=>v({kind:e.source.kind,reason:e.reason,moved:e.op!==null})})})),b=c({activation:i,autoScroll:o,plugins:[y],onMove:e=>g(t=>s(t,e,e=>e))}),x=d(b),S=(0,m.jsx)(`ul`,{"data-demo":e,dir:r,className:a(`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,n===`y`?`flex-col`:`flex-row flex-wrap`,l),children:h.map((t,i)=>(0,m.jsx)(D,{dnd:b,state:x,container:e,label:t,index:i,axis:n,direction:r,children:u?u(t):t},t))});return(0,m.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[f?f(S):S,(0,m.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,x.phase,x.source?` · ${x.source.kind}`:``,x.over?` · over ${x.over.id} (${x.over.position})`:``,_?` · last: ${_.kind} ${_.reason}${_.moved?` (moved)`:``}`:``]})]})}function D({dnd:e,state:t,container:n,label:r,index:i,axis:s,direction:c,children:d}){let f=o(e,{id:r,container:n,index:i,data:r}),h=l(e,{id:r,kind:`item`,container:n,axis:s,direction:c}),g=(0,p.useCallback)(e=>{let t=f(e),n=h(e);return()=>{t?.(),n?.()}},[f,h]),_=t.phase===`dragging`&&t.source?.id===r,v=_&&e?u(t.transform,e.sourceScale()):null;return(0,m.jsx)(`li`,{ref:g,"data-item":r,tabIndex:0,style:v?{transform:`translate(${v.x}px, ${v.y}px)`}:void 0,className:a(`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent`,`data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,`data-[dnd-over=before]:shadow-[inset_0_2px_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_0_-2px_0_var(--color-primary)]`,s===`x`&&`data-[dnd-over=before]:shadow-[inset_2px_0_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_-2px_0_0_var(--color-primary)]`,_&&`relative z-10 cursor-grabbing opacity-90 shadow-md`),children:d})}function O(){return(0,m.jsxs)(`div`,{"data-demo-outer":!0,className:`h-72 max-w-sm overflow-auto rounded-md border p-2`,children:[(0,m.jsx)(`p`,{className:`mb-2 text-[12px] text-muted-foreground`,children:`Outer scroller`}),(0,m.jsx)(E,{name:`nested`,initial:T(25,`Inner`),listClassName:`h-40 overflow-auto`}),(0,m.jsx)(`div`,{className:`h-96`,"aria-hidden":!0})]})}var k=`import { type ReactNode, useCallback, useState } from "react"
import { type ActivationMap, applyMove, type AutoScrollOptions, type Axis, type Direction, type DndPlugin, type DomDnd, type DragEndEvent, type DragState, localOffset, useDomDnd, useDraggableRef, useDragState, useDroppableRef } from "@kitora/dnd"
import { cn } from "@kitora/ui/utils"

// Nested scrollers: D67. The inner list scrolls first; at its end the outer box takes over.

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

export function NestedScrollers() {
  return (
    <div data-demo-outer className="h-72 max-w-sm overflow-auto rounded-md border p-2">
      <p className="mb-2 text-[12px] text-muted-foreground">Outer scroller</p>
      <SortableDemo name="nested" initial={makeItems(25, "Inner")} listClassName="h-40 overflow-auto" />
      <div className="h-96" aria-hidden />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>r(()=>import(`./scroll-nested-Cspw3IrP.js`),[]));function A(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function j({name:e,initial:t,axis:n=`y`,direction:r,activation:i,autoScroll:o,listClassName:l,renderItem:u,wrap:f}){let[h,g]=(0,p.useState)(t),[_,v]=(0,p.useState)(null),[y]=(0,p.useState)(()=>({name:`demo-status`,setup:e=>e.monitor({onDragEnd:e=>v({kind:e.source.kind,reason:e.reason,moved:e.op!==null})})})),b=c({activation:i,autoScroll:o,plugins:[y],onMove:e=>g(t=>s(t,e,e=>e))}),x=d(b),S=(0,m.jsx)(`ul`,{"data-demo":e,dir:r,className:a(`flex gap-1 rounded-md border bg-muted/30 p-1 text-[13px]`,n===`y`?`flex-col`:`flex-row flex-wrap`,l),children:h.map((t,i)=>(0,m.jsx)(M,{dnd:b,state:x,container:e,label:t,index:i,axis:n,direction:r,children:u?u(t):t},t))});return(0,m.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[f?f(S):S,(0,m.jsxs)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`phase `,x.phase,x.source?` · ${x.source.kind}`:``,x.over?` · over ${x.over.id} (${x.over.position})`:``,_?` · last: ${_.kind} ${_.reason}${_.moved?` (moved)`:``}`:``]})]})}function M({dnd:e,state:t,container:n,label:r,index:i,axis:s,direction:c,children:d}){let f=o(e,{id:r,container:n,index:i,data:r}),h=l(e,{id:r,kind:`item`,container:n,axis:s,direction:c}),g=(0,p.useCallback)(e=>{let t=f(e),n=h(e);return()=>{t?.(),n?.()}},[f,h]),_=t.phase===`dragging`&&t.source?.id===r,v=_&&e?u(t.transform,e.sourceScale()):null;return(0,m.jsx)(`li`,{ref:g,"data-item":r,tabIndex:0,style:v?{transform:`translate(${v.x}px, ${v.y}px)`}:void 0,className:a(`flex h-7 cursor-grab items-center gap-2 rounded border bg-card px-2 select-none hover:bg-accent`,`data-[dnd-pressing]:ring-2 data-[dnd-pressing]:ring-primary/50`,`data-[dnd-over=before]:shadow-[inset_0_2px_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_0_-2px_0_var(--color-primary)]`,s===`x`&&`data-[dnd-over=before]:shadow-[inset_2px_0_0_var(--color-primary)] data-[dnd-over=after]:shadow-[inset_-2px_0_0_var(--color-primary)]`,_&&`relative z-10 cursor-grabbing opacity-90 shadow-md`),children:d})}function N(){return(0,m.jsx)(j,{name:`ramp`,initial:A(40,`Ramp`),listClassName:`h-48 max-w-xs flex-nowrap overflow-auto`,autoScroll:{maxSpeed:600,rampMs:1e3}})}var P=`import { type ReactNode, useCallback, useState } from "react"
import { type ActivationMap, applyMove, type AutoScrollOptions, type Axis, type Direction, type DndPlugin, type DomDnd, type DragEndEvent, type DragState, localOffset, useDomDnd, useDraggableRef, useDragState, useDroppableRef } from "@kitora/dnd"
import { cn } from "@kitora/ui/utils"

// Speed ramp, no shaking: D69. Slower tuning: 600 px/s over a one second ramp. Hold the pointer still at the edge: the speed rises and never reverses.

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

export function SlowScroll() {
  return <SortableDemo name="ramp" initial={makeItems(40, "Ramp")} listClassName="h-48 max-w-xs flex-nowrap overflow-auto" autoScroll={{ maxSpeed: 600, rampMs: 1000 }} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>r(()=>import(`./scroll-ramp-CTAdxQ5W.js`),[]));function F(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Auto-scroll`,children:`While a drag is live, the scrollers under the pointer, around the source and around the target scroll when the pointer nears their edges, innermost first, frame-rate independent.`}),(0,m.jsx)(f,{n:1,title:`Container and overflow`,blurb:`D66, D68, D101. Drag Box 2 to the bottom edge, or just below the box: it scrolls, and the drop lands where you release.`,code:w,children:(0,m.jsx)(C,{})}),(0,m.jsx)(f,{n:2,title:`Nested scrollers`,blurb:`D67. The inner list scrolls first; at its end the outer box takes over.`,code:k,children:(0,m.jsx)(O,{})}),(0,m.jsx)(f,{n:3,title:`Speed ramp, no shaking`,blurb:`D69. Slower tuning: 600 px/s over a one second ramp. Hold the pointer still at the edge: the speed rises and never reverses.`,code:P,children:(0,m.jsx)(N,{})}),(0,m.jsx)(f,{n:4,title:`Window`,blurb:`D65. A long list in the page itself: drag a row to the bottom of the window.`,code:y,children:(0,m.jsx)(v,{})})]})}export{F as component};