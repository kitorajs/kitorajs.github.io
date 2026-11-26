import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i,Oc as a}from"./index-9y5uwRd3.js";import{n as o,t as s}from"./drag-handle-PKchoHIP.js";import{i as c,n as l,r as u}from"./sortable-list-BWb-mKpb.js";import{t as d}from"./kanban-DBcI2BrB.js";import{t as f}from"./free-canvas-B1o5vse2.js";import"./kit-gallery-B-Yr9fP4.js";import{t as p}from"./example-CZLJLtIC.js";var m=i();function h(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function g(){return(0,m.jsx)(`div`,{"data-demo":`preset-list`,className:`max-w-xs`,children:(0,m.jsx)(u,{id:`preset-list`,label:`Preset list`,defaultItems:h(4),getId:e=>e,renderItem:e=>e,handle:!0})})}var _=`import { SortableList } from "@kitora/dnd"

// SortableList: Vertical or horizontal, gap or line indicator, handles, disabled items, swap.

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

export function TaskList() {
  return (
    <div data-demo="preset-list" className="max-w-xs">
      <SortableList id="preset-list" label="Preset list" defaultItems={makeItems(4)} getId={(x) => x} renderItem={(x) => x} handle />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>r(()=>import(`./presets-list-D9rDSPrV.js`),[]));function v(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function y(){return(0,m.jsx)(`div`,{"data-demo":`preset-grid`,className:`max-w-sm`,children:(0,m.jsx)(l,{id:`preset-grid`,label:`Preset grid`,cellWidth:72,defaultItems:v(8,`Icon`),getId:e=>e,renderItem:e=>(0,m.jsx)(`span`,{className:`text-[12px]`,children:e})})})}var b=`import { SortableGrid } from "@kitora/dnd"

// SortableGrid: Auto-fill cells; shift or swap.

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

export function IconGrid() {
  return (
    <div data-demo="preset-grid" className="max-w-sm">
      <SortableGrid id="preset-grid" label="Preset grid" cellWidth={72} defaultItems={makeItems(8, "Icon")} getId={(x) => x} renderItem={(x) => <span className="text-[12px]">{x}</span>} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>r(()=>import(`./presets-grid-B_alum5U.js`),[]));var x={a:S(3,`Card`),b:[]};function S(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function C(){return(0,m.jsx)(`div`,{"data-demo":`preset-kanban`,children:(0,m.jsx)(d,{label:`Preset board`,columns:[{id:`a`,title:`Backlog`},{id:`b`,title:`Next`}],defaultItems:x,getId:e=>e,renderCard:e=>e})})}var w=`import { Kanban, type Layout } from "@kitora/dnd"

// Kanban: Columns, palette, spill, combine, typed cards.

const MINI_BOARD: Layout<string> = { a: makeItems(3, "Card"), b: [] }

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

export function Board() {
  return (
    <div data-demo="preset-kanban">
      <Kanban
        label="Preset board"
        columns={[
          { id: "a", title: "Backlog" },
          { id: "b", title: "Next" },
        ]}
        defaultItems={MINI_BOARD}
        getId={(x) => x}
        renderCard={(x) => x}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>r(()=>import(`./presets-kanban-dNy1oRlC.js`),[]));var T=e(n(),1);function E(){let[e,t]=(0,T.useState)(()=>[{id:`A`,x:20,y:20},{id:`B`,x:160,y:60}]);return(0,m.jsx)(f,{label:`Mini canvas`,width:320,height:140,items:e,getId:e=>e.id,getPosition:e=>e,setPosition:(e,t)=>({...e,x:t.x,y:t.y}),grid:20,onItemsChange:e=>t([...e]),renderItem:e=>`Node ${e.id}`})}function D(){return(0,m.jsx)(`div`,{"data-demo":`preset-canvas`,children:(0,m.jsx)(E,{})})}var O=`import { useState } from "react"
import { FreeCanvas } from "@kitora/dnd"

// FreeCanvas: Free positioning with snap, bounds, axis lock, magnets and zoom.

function MiniCanvas() {
  const [nodes, setNodes] = useState(() => [
    { id: "A", x: 20, y: 20 },
    { id: "B", x: 160, y: 60 },
  ])
  return (
    <FreeCanvas
      label="Mini canvas"
      width={320}
      height={140}
      items={nodes}
      getId={(n) => n.id}
      getPosition={(n) => n}
      setPosition={(n, p) => ({ ...n, x: p.x, y: p.y })}
      grid={20}
      onItemsChange={(next) => setNodes([...next])}
      renderItem={(n) => \`Node \${n.id}\`}
    />
  )
}

export function MiniCanvasDemo() {
  return (
    <div data-demo="preset-canvas">
      <MiniCanvas />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./presets-canvas-Cj5cs4Ej.js`),[]));var k=[`before`,`after`,`inside`];function A(){return(0,m.jsxs)(`div`,{className:`flex flex-wrap items-start gap-6 text-[13px]`,children:[(0,m.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,m.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:`DragHandle`}),(0,m.jsxs)(`div`,{className:`flex h-7 items-center gap-1 rounded-md border bg-card pr-2`,children:[(0,m.jsx)(o,{label:`${s}: sample`}),`Row with a handle`]})]}),k.map(e=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,m.jsxs)(`span`,{className:`text-[11px] text-muted-foreground`,children:[`DropIndicator · `,e]}),(0,m.jsxs)(`div`,{className:`relative flex h-7 w-36 items-center rounded-md border bg-card px-2`,children:[`Hovered row`,(0,m.jsx)(c,{position:e,axis:`y`,gap:4})]})]},e)),(0,m.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,m.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:`DropIndicator · x axis, RTL`}),(0,m.jsxs)(`div`,{dir:`rtl`,className:`relative flex h-7 w-24 items-center justify-center rounded-md border bg-card px-2`,children:[`تبويب`,(0,m.jsx)(c,{position:`before`,axis:`x`,direction:`rtl`,gap:4})]})]})]})}function j(){return(0,m.jsx)(A,{})}var M=`import { DRAG_HANDLE_LABEL, DragHandle, DropIndicator, type DropPosition } from "@kitora/dnd"

// DragHandle and DropIndicator: The two parts the presets are made of, for your own rows: a grip button (inside or external) and an in-flow drop line or combine ring.

const POSITIONS: readonly DropPosition[] = ["before", "after", "inside"]

function Parts() {
  return (
    <div className="flex flex-wrap items-start gap-6 text-[13px]">
      <div className="flex flex-col gap-1">
        <span className="text-[11px] text-muted-foreground">DragHandle</span>
        <div className="flex h-7 items-center gap-1 rounded-md border bg-card pr-2">
          <DragHandle label={\`\${DRAG_HANDLE_LABEL}: sample\`} />
          Row with a handle
        </div>
      </div>
      {POSITIONS.map((position) => (
        <div key={position} className="flex flex-col gap-1">
          <span className="text-[11px] text-muted-foreground">DropIndicator · {position}</span>
          <div className="relative flex h-7 w-36 items-center rounded-md border bg-card px-2">
            Hovered row
            <DropIndicator position={position} axis="y" gap={4} />
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-1">
        <span className="text-[11px] text-muted-foreground">DropIndicator · x axis, RTL</span>
        <div dir="rtl" className="relative flex h-7 w-24 items-center justify-center rounded-md border bg-card px-2">
          تبويب
          <DropIndicator position="before" axis="x" direction="rtl" gap={4} />
        </div>
      </div>
    </div>
  )
}

export function Rows() {
  return <Parts />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>r(()=>import(`./presets-parts-Bbq5uY7E.js`),[]));function N(){return(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(t,{title:`Presets`,children:[`The ui layer: styled, compact presets built only from the public hooks, each with a typed API and one escape hatch (providerProps). Behaviours are proven on the`,` `,(0,m.jsx)(a,{to:`/kits/dnd/sortable`,className:`underline underline-offset-2`,children:`sortable`}),`,`,` `,(0,m.jsx)(a,{to:`/kits/dnd/grid`,className:`underline underline-offset-2`,children:`grid`}),`,`,` `,(0,m.jsx)(a,{to:`/kits/dnd/kanban`,className:`underline underline-offset-2`,children:`kanban`}),` `,`and`,` `,(0,m.jsx)(a,{to:`/kits/dnd/canvas`,className:`underline underline-offset-2`,children:`canvas`}),` `,`pages.`]}),(0,m.jsx)(p,{n:1,title:`SortableList`,blurb:`Vertical or horizontal, gap or line indicator, handles, disabled items, swap.`,code:_,children:(0,m.jsx)(g,{})}),(0,m.jsx)(p,{n:2,title:`SortableGrid`,blurb:`Auto-fill cells; shift or swap.`,code:b,children:(0,m.jsx)(y,{})}),(0,m.jsx)(p,{n:3,title:`Kanban`,blurb:`Columns, palette, spill, combine, typed cards.`,code:w,children:(0,m.jsx)(C,{})}),(0,m.jsx)(p,{n:4,title:`FreeCanvas`,blurb:`Free positioning with snap, bounds, axis lock, magnets and zoom.`,code:O,children:(0,m.jsx)(D,{})}),(0,m.jsx)(p,{n:5,title:`DragHandle and DropIndicator`,blurb:`The two parts the presets are made of, for your own rows: a grip button (inside or external) and an in-flow drop line or combine ring.`,code:M,children:(0,m.jsx)(j,{})})]})}export{N as component};