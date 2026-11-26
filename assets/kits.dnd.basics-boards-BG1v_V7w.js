import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{i as a,l as o,t as s,u as c}from"./kit-Uq9GZ0sn.js";import{t as l}from"./sortable-list-BWb-mKpb.js";import{t as u}from"./kanban-DBcI2BrB.js";import{t as d}from"./sortable-tree-BRH45jvS.js";import"./kit-gallery-B-Yr9fP4.js";import{t as f}from"./example-CZLJLtIC.js";var p=e(n(),1),m=i(),h=[{id:`todo`,title:`To do`},{id:`done`,title:`Done`}];function g(){let[e,t]=(0,p.useState)({todo:[`Plan the sprint`,`Fix login`,`Update docs`],done:[`Set up CI`]});return(0,m.jsx)(`div`,{className:`max-w-lg`,children:(0,m.jsx)(u,{label:`Board`,columns:h,items:e,onItemsChange:e=>t(e),getId:e=>e,renderCard:e=>e})})}var _=`import { useState } from "react"
import { Kanban, type Layout } from "@kitora/dnd"

const columns = [
  { id: "todo", title: "To do" },
  { id: "done", title: "Done" },
]

// Two columns: reorder cards inside a column or drag them across. onItemsChange gets the new board.
export function BasicKanban() {
  const [board, setBoard] = useState<Layout<string>>({ todo: ["Plan the sprint", "Fix login", "Update docs"], done: ["Set up CI"] })
  return (
    <div className="max-w-lg">
      <Kanban label="Board" columns={columns} items={board} onItemsChange={(next) => setBoard(next)} getId={(c) => c} renderCard={(c) => c} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>r(()=>import(`./kanban-Dv8t1Z2I.js`),[]));var v=[{id:`src`,data:`src`,children:[{id:`app`,data:`app.tsx`,children:[]},{id:`main`,data:`main.tsx`,children:[]}]},{id:`docs`,data:`docs`,children:[{id:`readme`,data:`README.md`,children:[]}]},{id:`package`,data:`package.json`,children:[]}];function y(){return(0,m.jsx)(`div`,{className:`max-w-xs`,children:(0,m.jsx)(d,{label:`Files`,defaultItems:v,renderItem:e=>e.data})})}var b=`import { SortableTree, type TreeNode } from "@kitora/dnd"

const files: readonly TreeNode<string>[] = [
  { id: "src", data: "src", children: [
    { id: "app", data: "app.tsx", children: [] },
    { id: "main", data: "main.tsx", children: [] },
  ] },
  { id: "docs", data: "docs", children: [{ id: "readme", data: "README.md", children: [] }] },
  { id: "package", data: "package.json", children: [] },
]

// A tree: rows sort at any depth. Drag right by one indent to nest under the row above,
// left to move out a level; a folder cannot be dropped into itself.
export function BasicTree() {
  return (
    <div className="max-w-xs">
      <SortableTree label="Files" defaultItems={files} renderItem={(node) => node.data} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>r(()=>import(`./tree-BlMtNv9A.js`),[]));function x(){let e=a({defaultColumns:{fruit:[`Apple`,`Pear`,`Plum`],basket:[`Fig`]},getId:e=>e});return(0,m.jsx)(s,{collision:l,onMove:e.onMove,children:(0,m.jsxs)(`div`,{className:`grid max-w-md grid-cols-2 gap-3`,children:[(0,m.jsx)(S,{id:`fruit`,title:`Fruit`,items:e.columns.fruit??[]}),(0,m.jsx)(S,{id:`basket`,title:`Basket`,items:e.columns.basket??[]})]})})}function S({id:e,title:t,items:n}){let{ref:r}=o({id:e,kind:`container`});return(0,m.jsxs)(`section`,{className:`rounded-md border bg-muted/30 p-2`,children:[(0,m.jsx)(`h4`,{className:`mb-1 text-[12px] font-medium text-muted-foreground`,children:t}),(0,m.jsx)(`ul`,{ref:r,"aria-label":t,className:`flex min-h-24 flex-col gap-1`,children:n.map((t,n)=>(0,m.jsx)(C,{id:t,list:e,index:n},t))})]})}function C({id:e,list:t,index:n}){let{ref:r,isDragging:i}=c({id:e,container:t,index:n,data:e});return(0,m.jsx)(`li`,{ref:r,"data-item":e,className:`h-7 cursor-grab rounded border bg-card px-2 leading-7 text-[13px] select-none ${i?`opacity-50`:``}`,children:e})}var w=`import { DndProvider, GAP_COLLISION, useBoardState, useDroppable, useSortable } from "@kitora/dnd"

// Two lists on one provider: a row can move within its list or into the other one.
// useBoardState applies every drop; useDroppable makes an empty list a target too.
export function BasicTwoLists() {
  const board = useBoardState<string>({ defaultColumns: { fruit: ["Apple", "Pear", "Plum"], basket: ["Fig"] }, getId: (x) => x })
  return (
    <DndProvider collision={GAP_COLLISION} onMove={board.onMove}>
      <div className="grid max-w-md grid-cols-2 gap-3">
        <List id="fruit" title="Fruit" items={board.columns.fruit ?? []} />
        <List id="basket" title="Basket" items={board.columns.basket ?? []} />
      </div>
    </DndProvider>
  )
}

function List({ id, title, items }: { id: string; title: string; items: readonly string[] }) {
  const { ref } = useDroppable({ id, kind: "container" })
  return (
    <section className="rounded-md border bg-muted/30 p-2">
      <h4 className="mb-1 text-[12px] font-medium text-muted-foreground">{title}</h4>
      <ul ref={ref} aria-label={title} className="flex min-h-24 flex-col gap-1">
        {items.map((x, index) => <Row key={x} id={x} list={id} index={index} />)}
      </ul>
    </section>
  )
}

function Row({ id, list, index }: { id: string; list: string; index: number }) {
  const { ref, isDragging } = useSortable({ id, container: list, index, data: id })
  return <li ref={ref} data-item={id} className={\`h-7 cursor-grab rounded border bg-card px-2 leading-7 text-[13px] select-none \${isDragging ? "opacity-50" : ""}\`}>{id}</li>
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>r(()=>import(`./two-lists-mKf9LiCA.js`),[]));function T(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Basics: boards, lists and trees`,children:`Moving items between containers: kanban columns, two lists side by side, and the levels of a tree.`}),(0,m.jsx)(f,{n:1,title:`Kanban with two columns`,blurb:`Reorder cards in a column or drag them to the other one.`,code:_,children:(0,m.jsx)(g,{})}),(0,m.jsx)(f,{n:2,title:`Drag between two lists`,blurb:`Built from the hooks: one provider, two droppable lists, sortable rows.`,code:w,children:(0,m.jsx)(x,{})}),(0,m.jsx)(f,{n:3,title:`Tree`,blurb:`Sort at any depth; drag right to nest under the row above, left to move out a level.`,code:b,children:(0,m.jsx)(y,{})})]})}export{T as component};