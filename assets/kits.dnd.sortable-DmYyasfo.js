import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{d as a,t as o,u as s}from"./kit-Uq9GZ0sn.js";import{n as c}from"./drag-handle-PKchoHIP.js";import{r as l}from"./sortable-list-BWb-mKpb.js";import"./kit-gallery-B-Yr9fP4.js";import{t as u}from"./example-CZLJLtIC.js";import{r as d}from"./devtools-DIFrqNRg.js";var f=e(n(),1),p=i();function m({name:e,initial:t,wrapText:n,...r}){let[i,a]=(0,f.useState)(t),[o,s]=(0,f.useState)(null);return(0,p.jsxs)(`div`,{"data-demo":e,className:`flex flex-col gap-2`,children:[(0,p.jsx)(l,{id:e,label:`${e} list`,defaultItems:t,getId:e=>e,onItemsChange:(e,t)=>{a(e),s(t)},renderItem:e=>(0,p.jsx)(`span`,{className:n?`py-1`:`truncate`,children:e}),className:r.orientation===`horizontal`?`max-w-xl`:`max-w-xs`,...r}),(0,p.jsxs)(g,{name:e,children:[`order: `,i.join(`, `),o?` · last: ${d(o)}`:``]})]})}function h(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function g({name:e,children:t}){return(0,p.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function _(){return(0,p.jsx)(m,{name:`vertical`,initial:h(5)})}var v=`import { type ReactNode, useState } from "react"
import { type MoveOp, SortableList } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Vertical list: D33, D22, D92. Drag a row or use Space and the arrow keys; the placeholder holds the slot and its siblings make room.

/** A list demo plus the status line the check reads. */
function ListDemo({
  name,
  initial,
  wrapText,
  ...rest
}: {
  readonly name: string
  readonly initial: readonly string[]
  readonly orientation?: "vertical" | "horizontal"
  readonly dir?: "ltr" | "rtl"
  readonly handle?: boolean
  readonly indicator?: "gap" | "line"
  readonly isDisabled?: (item: string) => boolean
  readonly wrapText?: boolean
}) {
  const [order, setOrder] = useState<readonly string[]>(initial)
  const [last, setLast] = useState<MoveOp | null>(null)
  return (
    <div data-demo={name} className="flex flex-col gap-2">
      <SortableList
        id={name}
        label={\`\${name} list\`}
        defaultItems={initial}
        getId={(x) => x}
        onItemsChange={(items, op) => {
          setOrder(items)
          setLast(op)
        }}
        renderItem={(x) => <span className={wrapText ? "py-1" : "truncate"}>{x}</span>}
        className={rest.orientation === "horizontal" ? "max-w-xl" : "max-w-xs"}
        {...rest}
      />
      <DemoStatus name={name}>
        order: {order.join(", ")}
        {last ? \` · last: \${formatOp(last)}\` : ""}
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

export function Tasks() {
  return <ListDemo name="vertical" initial={makeItems(5)} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>r(()=>import(`./sortable-vertical-BdGCd_7p.js`),[]));function y({name:e,initial:t,wrapText:n,...r}){let[i,a]=(0,f.useState)(t),[o,s]=(0,f.useState)(null);return(0,p.jsxs)(`div`,{"data-demo":e,className:`flex flex-col gap-2`,children:[(0,p.jsx)(l,{id:e,label:`${e} list`,defaultItems:t,getId:e=>e,onItemsChange:(e,t)=>{a(e),s(t)},renderItem:e=>(0,p.jsx)(`span`,{className:n?`py-1`:`truncate`,children:e}),className:r.orientation===`horizontal`?`max-w-xl`:`max-w-xs`,...r}),(0,p.jsxs)(x,{name:e,children:[`order: `,i.join(`, `),o?` · last: ${d(o)}`:``]})]})}function b(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function x({name:e,children:t}){return(0,p.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function S(){return(0,p.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,p.jsx)(y,{name:`horizontal`,initial:b(5,`Tab`),orientation:`horizontal`}),(0,p.jsx)(y,{name:`rtl`,initial:b(5,`Tab`),orientation:`horizontal`,dir:`rtl`})]})}var C=`import { type ReactNode, useState } from "react"
import { type MoveOp, SortableList } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Horizontal and RTL: D34, D48. The same preset in a row; the second list is dir=rtl, where before and after mirror and ArrowLeft moves forward.

/** A list demo plus the status line the check reads. */
function ListDemo({
  name,
  initial,
  wrapText,
  ...rest
}: {
  readonly name: string
  readonly initial: readonly string[]
  readonly orientation?: "vertical" | "horizontal"
  readonly dir?: "ltr" | "rtl"
  readonly handle?: boolean
  readonly indicator?: "gap" | "line"
  readonly isDisabled?: (item: string) => boolean
  readonly wrapText?: boolean
}) {
  const [order, setOrder] = useState<readonly string[]>(initial)
  const [last, setLast] = useState<MoveOp | null>(null)
  return (
    <div data-demo={name} className="flex flex-col gap-2">
      <SortableList
        id={name}
        label={\`\${name} list\`}
        defaultItems={initial}
        getId={(x) => x}
        onItemsChange={(items, op) => {
          setOrder(items)
          setLast(op)
        }}
        renderItem={(x) => <span className={wrapText ? "py-1" : "truncate"}>{x}</span>}
        className={rest.orientation === "horizontal" ? "max-w-xl" : "max-w-xs"}
        {...rest}
      />
      <DemoStatus name={name}>
        order: {order.join(", ")}
        {last ? \` · last: \${formatOp(last)}\` : ""}
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

export function Tabs() {
  return (
    <div className="flex flex-col gap-3">
      <ListDemo name="horizontal" initial={makeItems(5, "Tab")} orientation="horizontal" />
      <ListDemo name="rtl" initial={makeItems(5, "Tab")} orientation="horizontal" dir="rtl" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>r(()=>import(`./sortable-horizontal-DfO6DSBv.js`),[]));function w({name:e,initial:t,wrapText:n,...r}){let[i,a]=(0,f.useState)(t),[o,s]=(0,f.useState)(null);return(0,p.jsxs)(`div`,{"data-demo":e,className:`flex flex-col gap-2`,children:[(0,p.jsx)(l,{id:e,label:`${e} list`,defaultItems:t,getId:e=>e,onItemsChange:(e,t)=>{a(e),s(t)},renderItem:e=>(0,p.jsx)(`span`,{className:n?`py-1`:`truncate`,children:e}),className:r.orientation===`horizontal`?`max-w-xl`:`max-w-xs`,...r}),(0,p.jsxs)(E,{name:e,children:[`order: `,i.join(`, `),o?` · last: ${d(o)}`:``]})]})}function T(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function E({name:e,children:t}){return(0,p.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function D(){return(0,p.jsx)(w,{name:`handle`,initial:T(4,`Field`),handle:!0})}var O=`import { type ReactNode, useState } from "react"
import { type MoveOp, SortableList } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Drag handles: D16. Only the grip starts a drag; the grip is a button, so Space on it picks the row up.

/** A list demo plus the status line the check reads. */
function ListDemo({
  name,
  initial,
  wrapText,
  ...rest
}: {
  readonly name: string
  readonly initial: readonly string[]
  readonly orientation?: "vertical" | "horizontal"
  readonly dir?: "ltr" | "rtl"
  readonly handle?: boolean
  readonly indicator?: "gap" | "line"
  readonly isDisabled?: (item: string) => boolean
  readonly wrapText?: boolean
}) {
  const [order, setOrder] = useState<readonly string[]>(initial)
  const [last, setLast] = useState<MoveOp | null>(null)
  return (
    <div data-demo={name} className="flex flex-col gap-2">
      <SortableList
        id={name}
        label={\`\${name} list\`}
        defaultItems={initial}
        getId={(x) => x}
        onItemsChange={(items, op) => {
          setOrder(items)
          setLast(op)
        }}
        renderItem={(x) => <span className={wrapText ? "py-1" : "truncate"}>{x}</span>}
        className={rest.orientation === "horizontal" ? "max-w-xl" : "max-w-xs"}
        {...rest}
      />
      <DemoStatus name={name}>
        order: {order.join(", ")}
        {last ? \` · last: \${formatOp(last)}\` : ""}
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

export function Fields() {
  return <ListDemo name="handle" initial={makeItems(4, "Field")} handle />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./sortable-handle-DykdrvJQ.js`),[]));function k({id:e,index:t}){let{ref:n}=s({id:e,container:`external`,index:t,data:e});return(0,p.jsx)(`li`,{ref:n,"data-item":e,className:`flex h-7 items-center rounded-md border bg-card px-2 text-[13px] select-none`,children:e})}function A(){let{items:e,onMove:t}=a({defaultItems:j(4,`Step`),getId:e=>e});return(0,p.jsxs)(`div`,{"data-demo":`external`,className:`flex flex-col gap-2`,children:[(0,p.jsx)(o,{onMove:t,children:(0,p.jsxs)(`div`,{className:`flex gap-2`,children:[(0,p.jsx)(`ol`,{"aria-label":`Step handles`,className:`flex flex-col gap-1 rounded-lg border border-dashed p-1`,children:j(4,`Step`).map(e=>(0,p.jsxs)(`li`,{className:`flex h-7 items-center gap-1 text-[11px] text-muted-foreground`,children:[(0,p.jsx)(c,{for:e,label:`Drag ${e}`,"data-external-handle":e}),e.replace(`Step `,`#`)]},e))}),(0,p.jsx)(`ul`,{"aria-label":`Steps`,className:`flex w-48 flex-col gap-1 rounded-lg border bg-muted/30 p-1`,children:e.map((e,t)=>(0,p.jsx)(k,{id:e,index:t},e))})]})}),(0,p.jsxs)(M,{name:`external`,children:[`order: `,e.join(`, `)]})]})}function j(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function M({name:e,children:t}){return(0,p.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function N(){return(0,p.jsx)(A,{})}var P=`import { type ReactNode } from "react"
import { DndProvider, DragHandle, useSortable, useSortableState } from "@kitora/dnd"

// External handles: D17. The grips live in their own column, outside the rows they move.

function ExternalRow({ id, index }: { readonly id: string; readonly index: number }) {
  const { ref } = useSortable({ id, container: "external", index, data: id })
  return (
    <li ref={ref} data-item={id} className="flex h-7 items-center rounded-md border bg-card px-2 text-[13px] select-none">
      {id}
    </li>
  )
}

function ExternalHandles() {
  const { items, onMove } = useSortableState({ defaultItems: makeItems(4, "Step"), getId: (x) => x })
  return (
    <div data-demo="external" className="flex flex-col gap-2">
      <DndProvider onMove={onMove}>
        <div className="flex gap-2">
          <ol aria-label="Step handles" className="flex flex-col gap-1 rounded-lg border border-dashed p-1">
            {makeItems(4, "Step").map((id) => (
              <li key={id} className="flex h-7 items-center gap-1 text-[11px] text-muted-foreground">
                <DragHandle for={id} label={\`Drag \${id}\`} data-external-handle={id} />
                {id.replace("Step ", "#")}
              </li>
            ))}
          </ol>
          <ul aria-label="Steps" className="flex w-48 flex-col gap-1 rounded-lg border bg-muted/30 p-1">
            {items.map((id, index) => (
              <ExternalRow key={id} id={id} index={index} />
            ))}
          </ul>
        </div>
      </DndProvider>
      <DemoStatus name="external">order: {items.join(", ")}</DemoStatus>
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

export function Steps() {
  return <ExternalHandles />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>r(()=>import(`./sortable-external-Di3GabBd.js`),[]));function F({name:e,initial:t,wrapText:n,...r}){let[i,a]=(0,f.useState)(t),[o,s]=(0,f.useState)(null);return(0,p.jsxs)(`div`,{"data-demo":e,className:`flex flex-col gap-2`,children:[(0,p.jsx)(l,{id:e,label:`${e} list`,defaultItems:t,getId:e=>e,onItemsChange:(e,t)=>{a(e),s(t)},renderItem:e=>(0,p.jsx)(`span`,{className:n?`py-1`:`truncate`,children:e}),className:r.orientation===`horizontal`?`max-w-xl`:`max-w-xs`,...r}),(0,p.jsxs)(L,{name:e,children:[`order: `,i.join(`, `),o?` · last: ${d(o)}`:``]})]})}function I(){let[e,t]=(0,f.useState)(!1);return(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsxs)(`label`,{className:`flex h-7 items-center gap-2 text-[13px]`,children:[(0,p.jsx)(`input`,{type:`checkbox`,"data-demo-toggle":`locked`,checked:e,onChange:e=>t(e.target.checked)}),`Lock the whole list`]}),(0,p.jsx)(F,{name:`disabled`,initial:[`Pinned 1`,`Row 2`,`Row 3`,`Pinned 4`,`Row 5`],isDisabled:t=>e||t.startsWith(`Pinned`)})]})}function L({name:e,children:t}){return(0,p.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function R(){return(0,p.jsx)(I,{})}var z=`import { type ReactNode, useState } from "react"
import { type MoveOp, SortableList } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Disabled items and a locked list: D29. Pinned rows refuse drags but still take drops around them; the toggle locks every row.

/** A list demo plus the status line the check reads. */
function ListDemo({
  name,
  initial,
  wrapText,
  ...rest
}: {
  readonly name: string
  readonly initial: readonly string[]
  readonly orientation?: "vertical" | "horizontal"
  readonly dir?: "ltr" | "rtl"
  readonly handle?: boolean
  readonly indicator?: "gap" | "line"
  readonly isDisabled?: (item: string) => boolean
  readonly wrapText?: boolean
}) {
  const [order, setOrder] = useState<readonly string[]>(initial)
  const [last, setLast] = useState<MoveOp | null>(null)
  return (
    <div data-demo={name} className="flex flex-col gap-2">
      <SortableList
        id={name}
        label={\`\${name} list\`}
        defaultItems={initial}
        getId={(x) => x}
        onItemsChange={(items, op) => {
          setOrder(items)
          setLast(op)
        }}
        renderItem={(x) => <span className={wrapText ? "py-1" : "truncate"}>{x}</span>}
        className={rest.orientation === "horizontal" ? "max-w-xl" : "max-w-xs"}
        {...rest}
      />
      <DemoStatus name={name}>
        order: {order.join(", ")}
        {last ? \` · last: \${formatOp(last)}\` : ""}
      </DemoStatus>
    </div>
  )
}

function Disabled() {
  const [locked, setLocked] = useState(false)
  return (
    <div className="flex flex-col gap-2">
      <label className="flex h-7 items-center gap-2 text-[13px]">
        <input type="checkbox" data-demo-toggle="locked" checked={locked} onChange={(e) => setLocked(e.target.checked)} />
        Lock the whole list
      </label>
      <ListDemo name="disabled" initial={["Pinned 1", "Row 2", "Row 3", "Pinned 4", "Row 5"]} isDisabled={(x) => locked || x.startsWith("Pinned")} />
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

export function Queue() {
  return <Disabled />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>r(()=>import(`./sortable-disabled-CR8daEqe.js`),[]));function B({name:e,initial:t,wrapText:n,...r}){let[i,a]=(0,f.useState)(t),[o,s]=(0,f.useState)(null);return(0,p.jsxs)(`div`,{"data-demo":e,className:`flex flex-col gap-2`,children:[(0,p.jsx)(l,{id:e,label:`${e} list`,defaultItems:t,getId:e=>e,onItemsChange:(e,t)=>{a(e),s(t)},renderItem:e=>(0,p.jsx)(`span`,{className:n?`py-1`:`truncate`,children:e}),className:r.orientation===`horizontal`?`max-w-xl`:`max-w-xs`,...r}),(0,p.jsxs)(H,{name:e,children:[`order: `,i.join(`, `),o?` · last: ${d(o)}`:``]})]})}var V=[`Short`,`A longer note that wraps onto a second line in the narrow column`,`Mid-sized note, one line`,`Tall note: three lines of text here so its box is clearly taller than the others in the list`,`Tiny`];function H({name:e,children:t}){return(0,p.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function U(){return(0,p.jsx)(B,{name:`sizes`,initial:V,wrapText:!0})}var W=`import { type ReactNode, useState } from "react"
import { type MoveOp, SortableList } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Variable sizes: D37. Rows of different heights shift by their real sizes.

/** A list demo plus the status line the check reads. */
function ListDemo({
  name,
  initial,
  wrapText,
  ...rest
}: {
  readonly name: string
  readonly initial: readonly string[]
  readonly orientation?: "vertical" | "horizontal"
  readonly dir?: "ltr" | "rtl"
  readonly handle?: boolean
  readonly indicator?: "gap" | "line"
  readonly isDisabled?: (item: string) => boolean
  readonly wrapText?: boolean
}) {
  const [order, setOrder] = useState<readonly string[]>(initial)
  const [last, setLast] = useState<MoveOp | null>(null)
  return (
    <div data-demo={name} className="flex flex-col gap-2">
      <SortableList
        id={name}
        label={\`\${name} list\`}
        defaultItems={initial}
        getId={(x) => x}
        onItemsChange={(items, op) => {
          setOrder(items)
          setLast(op)
        }}
        renderItem={(x) => <span className={wrapText ? "py-1" : "truncate"}>{x}</span>}
        className={rest.orientation === "horizontal" ? "max-w-xl" : "max-w-xs"}
        {...rest}
      />
      <DemoStatus name={name}>
        order: {order.join(", ")}
        {last ? \` · last: \${formatOp(last)}\` : ""}
      </DemoStatus>
    </div>
  )
}

/** Notes of three heights for D37. */
const NOTES = [
  "Short",
  "A longer note that wraps onto a second line in the narrow column",
  "Mid-sized note, one line",
  "Tall note: three lines of text here so its box is clearly taller than the others in the list",
  "Tiny",
]

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function Notes() {
  return <ListDemo name="sizes" initial={NOTES} wrapText />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>r(()=>import(`./sortable-sizes-DPo6ok86.js`),[]));function G({name:e,initial:t,wrapText:n,...r}){let[i,a]=(0,f.useState)(t),[o,s]=(0,f.useState)(null);return(0,p.jsxs)(`div`,{"data-demo":e,className:`flex flex-col gap-2`,children:[(0,p.jsx)(l,{id:e,label:`${e} list`,defaultItems:t,getId:e=>e,onItemsChange:(e,t)=>{a(e),s(t)},renderItem:e=>(0,p.jsx)(`span`,{className:n?`py-1`:`truncate`,children:e}),className:r.orientation===`horizontal`?`max-w-xl`:`max-w-xs`,...r}),(0,p.jsxs)(q,{name:e,children:[`order: `,i.join(`, `),o?` · last: ${d(o)}`:``]})]})}function K(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function q({name:e,children:t}){return(0,p.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function J(){return(0,p.jsx)(G,{name:`line`,initial:K(5,`Layer`),indicator:`line`})}var Y=`import { type ReactNode, useState } from "react"
import { type MoveOp, SortableList } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Line indicator: The in-flow DropIndicator on the hovered row instead of the gap.

/** A list demo plus the status line the check reads. */
function ListDemo({
  name,
  initial,
  wrapText,
  ...rest
}: {
  readonly name: string
  readonly initial: readonly string[]
  readonly orientation?: "vertical" | "horizontal"
  readonly dir?: "ltr" | "rtl"
  readonly handle?: boolean
  readonly indicator?: "gap" | "line"
  readonly isDisabled?: (item: string) => boolean
  readonly wrapText?: boolean
}) {
  const [order, setOrder] = useState<readonly string[]>(initial)
  const [last, setLast] = useState<MoveOp | null>(null)
  return (
    <div data-demo={name} className="flex flex-col gap-2">
      <SortableList
        id={name}
        label={\`\${name} list\`}
        defaultItems={initial}
        getId={(x) => x}
        onItemsChange={(items, op) => {
          setOrder(items)
          setLast(op)
        }}
        renderItem={(x) => <span className={wrapText ? "py-1" : "truncate"}>{x}</span>}
        className={rest.orientation === "horizontal" ? "max-w-xl" : "max-w-xs"}
        {...rest}
      />
      <DemoStatus name={name}>
        order: {order.join(", ")}
        {last ? \` · last: \${formatOp(last)}\` : ""}
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

export function Layers() {
  return <ListDemo name="line" initial={makeItems(5, "Layer")} indicator="line" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>r(()=>import(`./sortable-line-I7uiSibP.js`),[]));function X(){return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(t,{title:`Sortable lists`,children:`The SortableList preset over the React adapter. Every drop arrives as the new order and its MoveOp; the source stays in the list as its placeholder while a preview follows the pointer.`}),(0,p.jsx)(u,{n:1,title:`Vertical list`,blurb:`D33, D22, D92. Drag a row or use Space and the arrow keys; the placeholder holds the slot and its siblings make room.`,code:v,children:(0,p.jsx)(_,{})}),(0,p.jsx)(u,{n:2,title:`Horizontal and RTL`,blurb:`D34, D48. The same preset in a row; the second list is dir=rtl, where before and after mirror and ArrowLeft moves forward.`,code:C,children:(0,p.jsx)(S,{})}),(0,p.jsx)(u,{n:3,title:`Drag handles`,blurb:`D16. Only the grip starts a drag; the grip is a button, so Space on it picks the row up.`,code:O,children:(0,p.jsx)(D,{})}),(0,p.jsx)(u,{n:4,title:`External handles`,blurb:`D17. The grips live in their own column, outside the rows they move.`,code:P,children:(0,p.jsx)(N,{})}),(0,p.jsx)(u,{n:5,title:`Disabled items and a locked list`,blurb:`D29. Pinned rows refuse drags but still take drops around them; the toggle locks every row.`,code:z,children:(0,p.jsx)(R,{})}),(0,p.jsx)(u,{n:6,title:`Variable sizes`,blurb:`D37. Rows of different heights shift by their real sizes.`,code:W,children:(0,p.jsx)(U,{})}),(0,p.jsx)(u,{n:7,title:`Line indicator`,blurb:`The in-flow DropIndicator on the hovered row instead of the gap.`,code:Y,children:(0,p.jsx)(J,{})})]})}export{X as component};