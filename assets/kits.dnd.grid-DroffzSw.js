import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{n as a,r as o}from"./sortable-list-CE3-BvnT.js";import"./kit-gallery-Bph7isB2.js";import{t as s}from"./example-BGnSQG2Y.js";import{r as c}from"./devtools-C4NMXJVK.js";var l=e(n(),1),u=i();function d({name:e,initial:t,strategy:n,cellWidth:r}){let[i,o]=(0,l.useState)(t),[s,d]=(0,l.useState)(null);return(0,u.jsxs)(`div`,{"data-demo":e,className:`flex max-w-md flex-col gap-2`,children:[(0,u.jsx)(a,{id:e,label:`${e} grid`,defaultItems:t,getId:e=>e,strategy:n,cellWidth:r,onItemsChange:(e,t)=>{o(e),d(t)},renderItem:e=>(0,u.jsx)(`span`,{className:`text-[12px] font-medium tabular-nums`,children:e})}),(0,u.jsxs)(p,{name:e,children:[`order: `,i.join(`, `),s?` · last: ${c(s)}${s.strategy===`swap`?` [swap]`:``}`:``]})]})}function f(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function p({name:e,children:t}){return(0,u.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function m(){return(0,u.jsx)(d,{name:`grid`,initial:f(12,`Cell`)})}var h=`import { type ReactNode, useState } from "react"
import { type MoveOp, SortableGrid, type SortStrategy } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Wrapping grid: D35. Twelve cells in rows of four or so; drag one across a row break, or focus a cell and use Space and the arrows.

function GridDemo({ name, initial, strategy, cellWidth }: { readonly name: string; readonly initial: readonly string[]; readonly strategy?: SortStrategy; readonly cellWidth?: number }) {
  const [order, setOrder] = useState<readonly string[]>(initial)
  const [last, setLast] = useState<MoveOp | null>(null)
  return (
    <div data-demo={name} className="flex max-w-md flex-col gap-2">
      <SortableGrid
        id={name}
        label={\`\${name} grid\`}
        defaultItems={initial}
        getId={(x) => x}
        strategy={strategy}
        cellWidth={cellWidth}
        onItemsChange={(items, op) => {
          setOrder(items)
          setLast(op)
        }}
        renderItem={(x) => <span className="text-[12px] font-medium tabular-nums">{x}</span>}
      />
      <DemoStatus name={name}>
        order: {order.join(", ")}
        {last ? \` · last: \${formatOp(last)}\${last.strategy === "swap" ? " [swap]" : ""}\` : ""}
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

export function PhotoGrid() {
  return <GridDemo name="grid" initial={makeItems(12, "Cell")} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>r(()=>import(`./grid-grid-C-3j1w_Y.js`),[]));function g({name:e,initial:t,strategy:n,cellWidth:r}){let[i,o]=(0,l.useState)(t),[s,d]=(0,l.useState)(null);return(0,u.jsxs)(`div`,{"data-demo":e,className:`flex max-w-md flex-col gap-2`,children:[(0,u.jsx)(a,{id:e,label:`${e} grid`,defaultItems:t,getId:e=>e,strategy:n,cellWidth:r,onItemsChange:(e,t)=>{o(e),d(t)},renderItem:e=>(0,u.jsx)(`span`,{className:`text-[12px] font-medium tabular-nums`,children:e})}),(0,u.jsxs)(v,{name:e,children:[`order: `,i.join(`, `),s?` · last: ${c(s)}${s.strategy===`swap`?` [swap]`:``}`:``]})]})}function _(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function v({name:e,children:t}){return(0,u.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function y(){return(0,u.jsx)(g,{name:`swap`,initial:_(8,`Seat`),strategy:`swap`,cellWidth:80})}var b=`import { type ReactNode, useState } from "react"
import { type MoveOp, SortableGrid, type SortStrategy } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Swap mode: D36. Drop a cell on another: the two trade places and the others stay put. While dragging, the target slides into the source's slot.

function GridDemo({ name, initial, strategy, cellWidth }: { readonly name: string; readonly initial: readonly string[]; readonly strategy?: SortStrategy; readonly cellWidth?: number }) {
  const [order, setOrder] = useState<readonly string[]>(initial)
  const [last, setLast] = useState<MoveOp | null>(null)
  return (
    <div data-demo={name} className="flex max-w-md flex-col gap-2">
      <SortableGrid
        id={name}
        label={\`\${name} grid\`}
        defaultItems={initial}
        getId={(x) => x}
        strategy={strategy}
        cellWidth={cellWidth}
        onItemsChange={(items, op) => {
          setOrder(items)
          setLast(op)
        }}
        renderItem={(x) => <span className="text-[12px] font-medium tabular-nums">{x}</span>}
      />
      <DemoStatus name={name}>
        order: {order.join(", ")}
        {last ? \` · last: \${formatOp(last)}\${last.strategy === "swap" ? " [swap]" : ""}\` : ""}
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

export function Seats() {
  return <GridDemo name="swap" initial={makeItems(8, "Seat")} strategy="swap" cellWidth={80} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>r(()=>import(`./grid-swap-iA7rW1Jb.js`),[]));function x(){let[e,t]=(0,l.useState)(()=>S(5,`Player`));return(0,u.jsxs)(`div`,{"data-demo":`swap-list`,className:`flex max-w-xs flex-col gap-2`,children:[(0,u.jsx)(o,{id:`swap-list`,label:`Lineup`,strategy:`swap`,defaultItems:S(5,`Player`),getId:e=>e,onItemsChange:e=>t(e),renderItem:e=>e}),(0,u.jsxs)(C,{name:`swap-list`,children:[`order: `,e.join(`, `)]})]})}function S(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function C({name:e,children:t}){return(0,u.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function w(){return(0,u.jsx)(x,{})}var T=`import { type ReactNode, useState } from "react"
import { SortableList } from "@kitora/dnd"

// Swap in a list: D36. The same strategy on a vertical list.

function SwapList() {
  const [order, setOrder] = useState<readonly string[]>(() => makeItems(5, "Player"))
  return (
    <div data-demo="swap-list" className="flex max-w-xs flex-col gap-2">
      <SortableList id="swap-list" label="Lineup" strategy="swap" defaultItems={makeItems(5, "Player")} getId={(x) => x} onItemsChange={(items) => setOrder(items)} renderItem={(x) => x} />
      <DemoStatus name="swap-list">order: {order.join(", ")}</DemoStatus>
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

export function Lineup() {
  return <SwapList />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>r(()=>import(`./grid-swap-list-CsRPde9A.js`),[]));function E(){return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(t,{title:`Grids and swap`,children:`SortableGrid lays cells out with auto-fill; a drag moves the cells between the slots, across row breaks. Swap mode exchanges two cells instead of shifting the rest.`}),(0,u.jsx)(s,{n:1,title:`Wrapping grid`,blurb:`D35. Twelve cells in rows of four or so; drag one across a row break, or focus a cell and use Space and the arrows.`,code:h,children:(0,u.jsx)(m,{})}),(0,u.jsx)(s,{n:2,title:`Swap mode`,blurb:`D36. Drop a cell on another: the two trade places and the others stay put. While dragging, the target slides into the source's slot.`,code:b,children:(0,u.jsx)(y,{})}),(0,u.jsx)(s,{n:3,title:`Swap in a list`,blurb:`D36. The same strategy on a vertical list.`,code:T,children:(0,u.jsx)(w,{})})]})}export{E as component};