import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n}from"./index-q72zUtm9.js";import{d as r,t as i,u as a}from"./kit-CidJliA5.js";import{n as o,r as s}from"./drag-handle-3eNAtoSr.js";import{n as c,r as l}from"./sortable-list-CZca2zJC.js";import"./kit-gallery-Atvibnty.js";import{t as u}from"./example-B8EaWveR.js";var d=n();function f(){let{items:e,onMove:t}=r({defaultItems:[`Header`,`Hero image`,`Pricing`,`Footer`],getId:e=>e});return(0,d.jsx)(i,{onMove:t,children:(0,d.jsx)(`ul`,{className:`flex max-w-xs flex-col gap-1`,children:e.map((e,t)=>(0,d.jsx)(p,{id:e,index:t},e))})})}function p({id:e,index:t}){let{ref:n,isDragging:r}=a({id:e,container:`sections`,index:t,data:e});return(0,d.jsxs)(`li`,{ref:n,"data-item":e,className:`flex h-8 items-center gap-1 rounded-md border bg-card pr-2 text-[13px] ${r?`opacity-50`:``}`,children:[(0,d.jsx)(o,{label:`Drag ${e}`}),(0,d.jsx)(`span`,{className:`select-text`,children:e})]})}var m=`import { DndProvider, DragHandle, useSortable, useSortableState } from "@kitora/dnd"

// With a DragHandle inside a row, only the grip starts a drag: the rest of the row stays
// free for clicks and text selection. The grip is a real button, so it is also the keyboard stop.
export function BasicDragHandle() {
  const { items, onMove } = useSortableState({ defaultItems: ["Header", "Hero image", "Pricing", "Footer"], getId: (x) => x })
  return (
    <DndProvider onMove={onMove}>
      <ul className="flex max-w-xs flex-col gap-1">
        {items.map((id, index) => <Row key={id} id={id} index={index} />)}
      </ul>
    </DndProvider>
  )
}

function Row({ id, index }: { id: string; index: number }) {
  const { ref, isDragging } = useSortable({ id, container: "sections", index, data: id })
  return (
    <li ref={ref} data-item={id} className={\`flex h-8 items-center gap-1 rounded-md border bg-card pr-2 text-[13px] \${isDragging ? "opacity-50" : ""}\`}>
      <DragHandle label={\`Drag \${id}\`} />
      <span className="select-text">{id}</span>
    </li>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>t(()=>import(`./drag-handle-BUAbOtLe.js`),[]));function h(){let{items:e,onMove:t}=r({defaultItems:[`Mon`,`Tue`,`Wed`,`Thu`],getId:e=>e});return(0,d.jsx)(i,{onMove:t,children:(0,d.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,children:e.map((e,t)=>(0,d.jsx)(g,{id:e,index:t},e))})})}function g({id:e,index:t}){let{ref:n,isDragging:r}=a({id:e,container:`days`,index:t,data:e});return(0,d.jsxs)(`li`,{ref:n,"data-item":e,className:`flex h-8 items-center gap-1 rounded-md border bg-card pr-2.5 text-[13px] ${r?`opacity-50`:``}`,children:[(0,d.jsx)(o,{label:`Drag ${e}`,className:`w-6`,children:(0,d.jsx)(s,{className:`rotate-90`})}),e]})}var _=`import { DndProvider, DragHandle, GripIcon, useSortable, useSortableState } from "@kitora/dnd"

// GripIcon is the six-dot glyph DragHandle draws by default. Pass it back in as children to
// restyle it (here turned sideways for a horizontal row), or use it alone as a visual hint.
export function BasicGripIcon() {
  const { items, onMove } = useSortableState({ defaultItems: ["Mon", "Tue", "Wed", "Thu"], getId: (x) => x })
  return (
    <DndProvider onMove={onMove}>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((id, index) => <Chip key={id} id={id} index={index} />)}
      </ul>
    </DndProvider>
  )
}

function Chip({ id, index }: { id: string; index: number }) {
  const { ref, isDragging } = useSortable({ id, container: "days", index, data: id })
  return (
    <li ref={ref} data-item={id} className={\`flex h-8 items-center gap-1 rounded-md border bg-card pr-2.5 text-[13px] \${isDragging ? "opacity-50" : ""}\`}>
      <DragHandle label={\`Drag \${id}\`} className="w-6">
        <GripIcon className="rotate-90" />
      </DragHandle>
      {id}
    </li>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>t(()=>import(`./grip-icon-FS_mbYKt.js`),[]));var v=[`Mail`,`Maps`,`Notes`,`Music`,`Photos`,`Clock`,`Files`,`Store`,`Camera`,`Weather`];function y(){return(0,d.jsx)(`div`,{className:`max-w-md`,children:(0,d.jsx)(c,{label:`Apps`,cellWidth:80,defaultItems:v,getId:e=>e,renderItem:e=>e})})}var b=`import { SortableGrid } from "@kitora/dnd"

const apps = ["Mail", "Maps", "Notes", "Music", "Photos", "Clock", "Files", "Store", "Camera", "Weather"]

// A wrapping grid: cells fill each row (cellWidth is the minimum width) and a drag moves across row breaks.
export function BasicGrid() {
  return (
    <div className="max-w-md">
      <SortableGrid label="Apps" cellWidth={80} defaultItems={apps} getId={(a) => a} renderItem={(a) => a} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>t(()=>import(`./grid-IzVlInjz.js`),[]));var x=[`Overview`,`Issues`,`Pull requests`,`Settings`];function S(){return(0,d.jsx)(l,{label:`Tabs`,orientation:`horizontal`,defaultItems:x,getId:e=>e,renderItem:e=>e})}var C=`import { SortableList } from "@kitora/dnd"

const tabs = ["Overview", "Issues", "Pull requests", "Settings"]

// The same list laid out in a row: drag a tab left or right.
export function BasicHorizontalList() {
  return <SortableList label="Tabs" orientation="horizontal" defaultItems={tabs} getId={(t) => t} renderItem={(t) => t} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>t(()=>import(`./horizontal-list-ay-Iibbo.js`),[]));var w=[{id:`spec`,title:`Write the spec`},{id:`build`,title:`Build it`},{id:`test`,title:`Test it`},{id:`ship`,title:`Ship it`}];function T(){return(0,d.jsx)(`div`,{className:`max-w-xs`,children:(0,d.jsx)(l,{label:`Tasks`,defaultItems:w,getId:e=>e.id,renderItem:e=>e.title})})}var E=`import { SortableList } from "@kitora/dnd"

const tasks = [
  { id: "spec", title: "Write the spec" },
  { id: "build", title: "Build it" },
  { id: "test", title: "Test it" },
  { id: "ship", title: "Ship it" },
]

// The smallest sortable list: drag a row up or down. defaultItems keeps the order itself;
// pass items + onItemsChange instead to own it.
export function BasicSortableList() {
  return (
    <div className="max-w-xs">
      <SortableList label="Tasks" defaultItems={tasks} getId={(t) => t.id} renderItem={(t) => t.title} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>t(()=>import(`./sortable-list-BV0raAHg.js`),[]));function D(){return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(e,{title:`Basics: lists and grids`,children:`Reorder things by dragging them. Each example is one short file you can paste; mouse, touch, pen and keyboard all work without extra setup.`}),(0,d.jsx)(u,{n:1,title:`Sortable list`,blurb:`Drag a row up or down.`,code:E,children:(0,d.jsx)(T,{})}),(0,d.jsx)(u,{n:2,title:`Horizontal list`,blurb:`The same list in a row: drag a tab left or right.`,code:C,children:(0,d.jsx)(S,{})}),(0,d.jsx)(u,{n:3,title:`Grid`,blurb:`Cells wrap onto new rows; a drag moves across the row breaks.`,code:b,children:(0,d.jsx)(y,{})}),(0,d.jsx)(u,{n:4,title:`Drag handle`,blurb:`Only the grip starts a drag; the rest of the row stays clickable and selectable.`,code:m,children:(0,d.jsx)(f,{})}),(0,d.jsx)(u,{n:5,title:`Restyled grip`,blurb:`GripIcon is the glyph DragHandle draws; pass it as children to restyle it, here turned sideways for a row of chips.`,code:_,children:(0,d.jsx)(h,{})})]})}export{D as component};