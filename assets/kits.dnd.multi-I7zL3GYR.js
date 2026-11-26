import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i,ti as a}from"./index-9y5uwRd3.js";import{b as o}from"./glue-D_yEomvg.js";import{t as s}from"./multi-CIzqgiGR.js";import{n as c}from"./stacked-preview-BScWPACb.js";import{t as l,u}from"./kit-Uq9GZ0sn.js";import{t as d}from"./kanban-DBcI2BrB.js";import{t as f}from"./sortable-tree-BRH45jvS.js";import"./kit-gallery-B-Yr9fP4.js";import{t as p}from"./example-CZLJLtIC.js";import{r as m}from"./devtools-DIFrqNRg.js";var h=e(n(),1),g=i(),_=[{id:`backlog`,title:`Backlog`},{id:`sprint`,title:`Sprint`},{id:`done`,title:`Done`}];function v(e){return _.map(t=>`${t.id}: ${(e[t.id]??[]).join(`, `)||`—`}`).join(` | `)}function y(){let[e,t]=(0,h.useState)(()=>({backlog:b(6,`Task`),sprint:b(2,`Bug`),done:[]})),[n,r]=(0,h.useState)([]),[i,o]=(0,h.useState)(null),[s,c]=(0,h.useState)([]);return(0,g.jsxs)(`div`,{"data-demo":`board`,className:`flex flex-col gap-2`,children:[(0,g.jsx)(d,{selectable:!0,label:`Backlog board`,columns:_,items:e,getId:e=>e,onSelectionChange:c,onItemsChange:(n,i)=>{r(t=>[...t,e]),t(n),o(i)},renderCard:e=>(0,g.jsx)(`span`,{className:`truncate`,children:e})}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(a,{size:`sm`,variant:`outline`,className:`h-7`,"data-demo-undo":`board`,disabled:n.length===0,onClick:()=>{let e=n.at(-1);e&&(t(e),r(e=>e.slice(0,-1)))},children:`Undo`}),(0,g.jsxs)(`span`,{className:`text-[12px] text-muted-foreground`,children:[`Selected: `,s.length>0?s.join(`, `):`none`]})]}),(0,g.jsxs)(x,{name:`board`,children:[v(e),` · undo steps: `,n.length,` · last op: `,i?m(i):`—`]})]})}function b(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function x({name:e,children:t}){return(0,g.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function S(){return(0,g.jsx)(y,{})}var C=`import { type ReactNode, useState } from "react"
import { Button } from "@kitora/ui/button"
import { Kanban, type KanbanColumn, type Layout, type MoveOp } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Across lists: D96. Click Task 1, Shift-click Task 3, then drag Task 2 into Sprint. All three move, in their order; Undo puts them back in one step.

const COLUMNS: readonly KanbanColumn[] = [
  { id: "backlog", title: "Backlog" },
  { id: "sprint", title: "Sprint" },
  { id: "done", title: "Done" },
]

function describeBoard(board: Layout<string>): string {
  return COLUMNS.map((c) => \`\${c.id}: \${(board[c.id] ?? []).join(", ") || "—"}\`).join(" | ")
}

function Board() {
  const [board, setBoard] = useState<Layout<string>>(() => ({ backlog: makeItems(6, "Task"), sprint: makeItems(2, "Bug"), done: [] }))
  const [history, setHistory] = useState<readonly Layout<string>[]>([])
  const [last, setLast] = useState<MoveOp | null>(null)
  const [selected, setSelected] = useState<readonly string[]>([])
  return (
    <div data-demo="board" className="flex flex-col gap-2">
      <Kanban
        selectable
        label="Backlog board"
        columns={COLUMNS}
        items={board}
        getId={(x) => x}
        onSelectionChange={setSelected}
        onItemsChange={(next, op) => {
          setHistory((h) => [...h, board])
          setBoard(next)
          setLast(op)
        }}
        renderCard={(x) => <span className="truncate">{x}</span>}
      />
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          className="h-7"
          data-demo-undo="board"
          disabled={history.length === 0}
          onClick={() => {
            const previous = history.at(-1)
            if (!previous) return
            setBoard(previous)
            setHistory((h) => h.slice(0, -1))
          }}
        >
          Undo
        </Button>
        <span className="text-[12px] text-muted-foreground">Selected: {selected.length > 0 ? selected.join(", ") : "none"}</span>
      </div>
      <DemoStatus name="board">
        {describeBoard(board)} · undo steps: {history.length} · last op: {last ? formatOp(last) : "—"}
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

export function Backlog() {
  return <Board />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>r(()=>import(`./multi-board-CDZNIVYg.js`),[]));var w=[E(`Intro`),E(`Part A`,[E(`A.1`),E(`A.2`),E(`A.3`)]),E(`Part B`,[E(`B.1`)]),E(`Outro`)];function T(){let[e,t]=(0,h.useState)(w),[n,r]=(0,h.useState)([]);return(0,g.jsxs)(`div`,{"data-demo":`outline`,className:`flex max-w-sm flex-col gap-2`,children:[(0,g.jsx)(f,{selectable:!0,id:`outline`,label:`Outline`,items:e,onItemsChange:n=>{r(t=>[...t,e]),t(n)},renderItem:e=>(0,g.jsx)(`span`,{className:`truncate`,children:e.data})}),(0,g.jsxs)(O,{name:`outline`,children:[`tree: `,D(e),` · undo steps: `,n.length]})]})}function E(e,t=[]){return{id:e,data:e,children:t}}function D(e){return e.map(e=>e.children.length>0?`${e.id}[${D(e.children)}]`:e.id).join(`, `)}function O({name:e,children:t}){return(0,g.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function k(){return(0,g.jsx)(T,{})}var A=`import { type ReactNode, useState } from "react"
import { SortableTree, type TreeNode } from "@kitora/dnd"

// In a tree: D96, D41. Select rows in the outline and drag them under another part; a selected folder takes its children with it.

const OUTLINE: readonly TreeNode<string>[] = [node("Intro"), node("Part A", [node("A.1"), node("A.2"), node("A.3")]), node("Part B", [node("B.1")]), node("Outro")]

function Outline() {
  const [tree, setTree] = useState<readonly TreeNode<string>[]>(OUTLINE)
  const [history, setHistory] = useState<readonly (readonly TreeNode<string>[])[]>([])
  return (
    <div data-demo="outline" className="flex max-w-sm flex-col gap-2">
      <SortableTree
        selectable
        id="outline"
        label="Outline"
        items={tree}
        onItemsChange={(next) => {
          setHistory((h) => [...h, tree])
          setTree(next)
        }}
        renderItem={(n) => <span className="truncate">{n.data}</span>}
      />
      <DemoStatus name="outline">
        tree: {describeTree(tree)} · undo steps: {history.length}
      </DemoStatus>
    </div>
  )
}

/** A demo tree node whose id is its label (for the tree pages). */
function node(label: string, children: readonly TreeNode<string>[] = []): TreeNode<string> {
  return { id: label, data: label, children }
}

/** A tree as one line, \`Docs[Spec, Notes], Readme\`, for the status lines the headless checks read. */
function describeTree(nodes: readonly TreeNode<string>[]): string {
  return nodes.map((n) => (n.children.length > 0 ? \`\${n.id}[\${describeTree(n.children)}]\` : n.id)).join(", ")
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function OutlineDemo() {
  return <Outline />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>r(()=>import(`./multi-tree-DIZvaqhp.js`),[]));var j=`x`,M={renderPreview:c({maxWidth:280}),indicator:`line`},N=e=>!e.keys.shift;function P({id:e,index:t,order:n,selection:r}){let{ref:i}=u({id:e,container:`wide`,index:t,data:e}),a=t=>r.select(e,{ctrl:t.ctrlKey,meta:t.metaKey,shift:t.shiftKey},n);return(0,g.jsx)(`li`,{ref:i,"data-item":e,tabIndex:0,role:`option`,"aria-selected":r.isSelected(e),onClick:a,onKeyDown:e=>{e.defaultPrevented||e.altKey||e.key.toLowerCase()!==j||(e.preventDefault(),a(e))},className:`flex h-7 cursor-grab items-center rounded-md border bg-card px-2 text-[13px] select-none aria-selected:border-primary aria-selected:bg-primary/10`,children:e})}function F(){let[e,t]=(0,h.useState)(()=>I(5,`Invoice`)),[n,r]=(0,h.useState)(``),i=s();return(0,g.jsxs)(`div`,{"data-demo":`wide`,className:`flex flex-col gap-2`,children:[(0,g.jsx)(l,{selection:i.batchFor,presentation:M,onBeforeDragStart:N,onMove:e=>{t(t=>o(t,e,e=>e)),r(m(e))},children:(0,g.jsx)(`ul`,{role:`listbox`,"aria-multiselectable":!0,"aria-label":`Invoices`,className:`flex w-full max-w-3xl flex-col gap-1 rounded-lg border bg-muted/30 p-1`,children:e.map((t,n)=>(0,g.jsx)(P,{id:t,index:n,order:e,selection:i},t))})}),(0,g.jsxs)(L,{name:`wide`,children:[`order: `,e.join(`, `),` · selected: `,i.ids.join(`, `)||`none`,n?` · last: ${n}`:``]})]})}function I(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function L({name:e,children:t}){return(0,g.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function R(){return(0,g.jsx)(F,{})}var z=`import { type KeyboardEvent, type MouseEvent, type ReactNode, useState } from "react"
import { applyMove, DndProvider, type DragSource, type Selection, stackedPreview, useSelection, useSortable } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Wide rows: Click Invoice 1, Shift-click Invoice 3, then drag Invoice 2: the stack is capped at 280 px, so the line under the pointer stays visible. Shift-pressing a row and moving selects; it never starts a drag. From the keyboard, X on a focused row is the click (Shift+X the Shift-click, Ctrl / Cmd+X the Ctrl-click): Space and Enter pick the row up.

/** The key a focused row answers like a click; Space and Enter belong to the keyboard drag. */
const SELECT_KEY = "x"

/** Widest a card of the wide-row stack draws, px: narrower than the rows, so the line under the pointer stays visible. */
const WIDE_PREVIEW_MAX_PX = 280

const WIDE_PREVIEW = { renderPreview: stackedPreview({ maxWidth: WIDE_PREVIEW_MAX_PX }), indicator: "line" as const }

/** A Shift press is range selection, never a drag (the press's own keys, \`DragSource.keys\`). */
const notForSelection = (source: DragSource<unknown>) => !source.keys.shift

function WideRow({ id, index, order, selection }: { readonly id: string; readonly index: number; readonly order: readonly string[]; readonly selection: Selection }) {
  const { ref } = useSortable({ id, container: "wide", index, data: id })
  const select = (e: MouseEvent | KeyboardEvent) => selection.select(id, { ctrl: e.ctrlKey, meta: e.metaKey, shift: e.shiftKey }, order)
  return (
    <li
      ref={ref}
      data-item={id}
      tabIndex={0}
      role="option"
      aria-selected={selection.isSelected(id)}
      onClick={select}
      onKeyDown={(e) => {
        if (e.defaultPrevented || e.altKey || e.key.toLowerCase() !== SELECT_KEY) return
        e.preventDefault()
        select(e)
      }}
      className="flex h-7 cursor-grab items-center rounded-md border bg-card px-2 text-[13px] select-none aria-selected:border-primary aria-selected:bg-primary/10"
    >
      {id}
    </li>
  )
}

function WideRows() {
  const [rows, setRows] = useState<readonly string[]>(() => makeItems(5, "Invoice"))
  const [last, setLast] = useState("")
  const selection = useSelection()
  return (
    <div data-demo="wide" className="flex flex-col gap-2">
      <DndProvider
        selection={selection.batchFor}
        presentation={WIDE_PREVIEW}
        onBeforeDragStart={notForSelection}
        onMove={(op) => {
          setRows((xs) => applyMove(xs, op, (x) => x))
          setLast(formatOp(op))
        }}
      >
        <ul role="listbox" aria-multiselectable aria-label="Invoices" className="flex w-full max-w-3xl flex-col gap-1 rounded-lg border bg-muted/30 p-1">
          {rows.map((id, index) => (
            <WideRow key={id} id={id} index={index} order={rows} selection={selection} />
          ))}
        </ul>
      </DndProvider>
      <DemoStatus name="wide">
        order: {rows.join(", ")} · selected: {selection.ids.join(", ") || "none"}
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

export function WideRowsDemo() {
  return <WideRows />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>r(()=>import(`./multi-wide-OX3xA5iI.js`),[]));function B(){return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(t,{title:`Multi-select drag`,children:`Select several items and drag one of them: the selection moves together as one MoveOp, so an undo stack takes one step to put it all back. The preview stacks the items and counts them.`}),(0,g.jsx)(p,{n:1,title:`Across lists`,blurb:`D96. Click Task 1, Shift-click Task 3, then drag Task 2 into Sprint. All three move, in their order; Undo puts them back in one step.`,code:C,children:(0,g.jsx)(S,{})}),(0,g.jsx)(p,{n:2,title:`In a tree`,blurb:`D96, D41. Select rows in the outline and drag them under another part; a selected folder takes its children with it.`,code:A,children:(0,g.jsx)(k,{})}),(0,g.jsx)(p,{n:3,title:`Wide rows`,blurb:`Click Invoice 1, Shift-click Invoice 3, then drag Invoice 2: the stack is capped at 280 px, so the line under the pointer stays visible. Shift-pressing a row and moving selects; it never starts a drag. From the keyboard: Tab to a row and press X to select it, Shift+X to extend the range, Ctrl+X (Cmd+X on a Mac) to add or remove one; Space or Enter then picks the selection up, arrows move it, Space drops and Escape cancels.`,code:z,children:(0,g.jsx)(R,{})})]})}export{B as component};