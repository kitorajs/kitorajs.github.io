import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CiJzHfYx.js";import{F as n,J as r,Q as i,R as a,Y as o,Z as s}from"./data-grid-highlight-CpMXzsVp.js";import{s as c}from"./kit-docs-BUovISd0.js";import{t as l}from"./textarea-C8WF-XOD.js";import{Bc as u,Cc as d,Ic as f,ti as p}from"./index-B9ukmIN1.js";import{t as m}from"./label-DoQXlIRk.js";import{t as h}from"./data-grid-undo-redo-B_F_-JPO.js";import{n as g}from"./data-grid-a0FFXgkb.js";import{t as _}from"./data-grid-view-CdE5uul0.js";import{t as ee}from"./save-view-dialog-CFFgT7tx.js";import{t as v}from"./data-grid-pagination-5oox18Q_.js";import"./kit-gallery-Bph7isB2.js";import{t as y}from"./example-BGnSQG2Y.js";var b=e(u(),1),x=f(),S=[{id:`1`,name:`Desk lamp`,stock:12},{id:`2`,name:`Notebook`,stock:40}],C=n()([{id:`name`,header:`Name`,cell:e=>e.name,meta:{edit:{type:`text`,patch:e=>({name:String(e)})}}},{id:`stock`,header:`Stock`,cell:e=>e.stock,meta:{align:`end`,edit:{type:`number`,min:0,patch:e=>({stock:Number(e)})}}}]);function w(){return(0,x.jsx)(s,{children:(0,x.jsxs)(o,{adapter:(0,b.useMemo)(()=>a({initial:S}),[]),children:[(0,x.jsx)(`div`,{className:`mb-2 flex justify-end`,children:(0,x.jsx)(h,{})}),(0,x.jsx)(g,{columns:C,selectable:!1})]})})}var T=`import { useMemo } from "react"
import { DataGrid, DataGridProvider, DataGridUIProvider, DataGridUndoRedo, createInMemoryAdapter, defineColumns } from "@kitora/datagrid"

interface Product {
  id: string
  name: string
  stock: number
}

const products: Product[] = [
  { id: "1", name: "Desk lamp", stock: 12 },
  { id: "2", name: "Notebook", stock: 40 },
]

// Double-click a cell with \`meta.edit\`, type, Enter. \`patch\` builds the row update the adapter saves.
// Every edit is one undo step: Mod+Z inside the grid, or the toolbar's DataGridUndoRedo.
const columns = defineColumns<Product>()([
  { id: "name", header: "Name", cell: (r) => r.name, meta: { edit: { type: "text", patch: (v) => ({ name: String(v) }) } } },
  { id: "stock", header: "Stock", cell: (r) => r.stock, meta: { align: "end", edit: { type: "number", min: 0, patch: (v) => ({ stock: Number(v) }) } } },
])

export function InlineEditTable() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: products }), [])
  return (
    <DataGridUIProvider>
      <DataGridProvider adapter={adapter}>
        <div className="mb-2 flex justify-end">
          <DataGridUndoRedo />
        </div>
        <DataGrid columns={columns} selectable={false} />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>d(()=>import(`./inline-edit-DMIdKH9g.js`),[]));var E=Array.from({length:12},(e,t)=>({id:String(t+1),title:`Post ${t+1}`}));async function te(e,t){return{items:E.slice(e,e+t),total:E.length}}var D={async load({first:e,after:t,last:n,before:r}){let i=e??n??5,a=r==null?t==null?0:Number(t):Math.max(0,Number(r)-i),{items:o,total:s}=await te(a,i),c=a+o.length;return{rows:o,totalCount:s,pageInfo:{hasPreviousPage:a>0,hasNextPage:c<s,startCursor:String(a),endCursor:String(c)}}}},O=n()([{id:`title`,header:`Title`,cell:e=>e.title}]);function k(){return(0,x.jsx)(s,{defaultPageSize:5,children:(0,x.jsxs)(o,{adapter:D,children:[(0,x.jsx)(g,{columns:O,selectable:!1}),(0,x.jsx)(v,{pageSizeOptions:[5,10]})]})})}var A=`import { DataGrid, DataGridPagination, DataGridProvider, DataGridUIProvider, defineColumns, type DataGridAdapter } from "@kitora/datagrid"

interface Post {
  id: string
  title: string
}

// stub: replace with your API — in your app this is
// \`fetch(\`/api/posts?offset=\${offset}&limit=\${limit}\`).then((r) => r.json())\`.
const ALL: Post[] = Array.from({ length: 12 }, (_, i) => ({ id: String(i + 1), title: \`Post \${i + 1}\` }))
async function fetchPosts(offset: number, limit: number): Promise<{ items: Post[]; total: number }> {
  return { items: ALL.slice(offset, offset + limit), total: ALL.length }
}

/** An adapter is one \`load\` function: the query in, a page of rows and its cursors out. */
const postsAdapter: DataGridAdapter<Post> = {
  async load({ first, after, last, before }) {
    const limit = first ?? last ?? 5
    const offset = before != null ? Math.max(0, Number(before) - limit) : after != null ? Number(after) : 0
    const { items, total } = await fetchPosts(offset, limit)
    const end = offset + items.length
    return {
      rows: items,
      totalCount: total,
      pageInfo: { hasPreviousPage: offset > 0, hasNextPage: end < total, startCursor: String(offset), endCursor: String(end) },
    }
  },
}

const columns = defineColumns<Post>()([{ id: "title", header: "Title", cell: (r) => r.title }])

export function FetchAdapterTable() {
  return (
    <DataGridUIProvider defaultPageSize={5}>
      <DataGridProvider adapter={postsAdapter}>
        <DataGrid columns={columns} selectable={false} />
        <DataGridPagination pageSizeOptions={[5, 10]} />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>d(()=>import(`./fetch-adapter-TeKU6Jip.js`),[]));var j=[{id:`1`,name:`Grace Bennett`,phone:`555-0142`},{id:`2`,name:`Linus Whitfield`,phone:`555-0178`}],M=n()([{id:`name`,header:`Name`,cell:e=>e.name},{id:`phone`,header:`Phone`,cell:e=>e.phone,meta:{edit:{type:`text`,patch:e=>({phone:String(e)})}}}]),N={id:`list`,label:`List`,render:e=>(0,x.jsx)(`ul`,{className:`divide-y divide-border rounded border border-border text-sm`,children:e.rows.map((t,n)=>(0,x.jsxs)(`li`,{className:`flex items-center justify-between px-2 py-1`,children:[(0,x.jsx)(`span`,{children:t.name}),e.columns.filter(e=>e.id===`phone`).map(i=>(0,x.jsx)(r,{row:t,rowIndex:n,rowId:e.getRowId(t),col:i},i.id))]},e.getRowId(t)))})};function P(){return(0,x.jsx)(s,{defaultLayoutId:`list`,children:(0,x.jsx)(o,{adapter:(0,b.useMemo)(()=>a({initial:j}),[]),children:(0,x.jsx)(_,{columns:M,layouts:[N]})})})}var F=`import { useMemo } from "react"
import { DataGridProvider, DataGridUIProvider, DataGridView, EditableCell, createInMemoryAdapter, defineColumns, type DataGridLayout } from "@kitora/datagrid"

interface Contact {
  id: string
  name: string
  phone: string
}

const contacts: Contact[] = [
  { id: "1", name: "Grace Bennett", phone: "555-0142" },
  { id: "2", name: "Linus Whitfield", phone: "555-0178" },
]

const columns = defineColumns<Contact>()([
  { id: "name", header: "Name", cell: (r) => r.name },
  { id: "phone", header: "Phone", cell: (r) => r.phone, meta: { edit: { type: "text", patch: (v) => ({ phone: String(v) }) } } },
])

// A custom layout reuses the table's click-to-edit cell: EditableCell reads col.meta.edit and saves through the adapter.
const listLayout: DataGridLayout<Contact> = {
  id: "list",
  label: "List",
  render: (ctx) => (
    <ul className="divide-y divide-border rounded border border-border text-sm">
      {ctx.rows.map((row, i) => (
        <li key={ctx.getRowId(row)} className="flex items-center justify-between px-2 py-1">
          <span>{row.name}</span>
          {ctx.columns
            .filter((col) => col.id === "phone")
            .map((col) => (
              <EditableCell key={col.id} row={row} rowIndex={i} rowId={ctx.getRowId(row)} col={col} />
            ))}
        </li>
      ))}
    </ul>
  ),
}

export function EditableList() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: contacts }), [])
  return (
    <DataGridUIProvider defaultLayoutId="list">
      <DataGridProvider adapter={adapter}>
        <DataGridView<Contact> columns={columns} layouts={[listLayout]} />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>d(()=>import(`./editable-cell-D-Q7bHvk.js`),[]));function I(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)([`All invoices`]);return(0,x.jsxs)(`div`,{className:`space-y-2 text-sm`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[n.map(e=>(0,x.jsx)(`span`,{className:`rounded border border-border px-2 py-0.5 text-xs`,children:e},e)),(0,x.jsx)(`button`,{type:`button`,className:`h-7 rounded border border-border px-2 text-xs`,onClick:()=>t(!0),children:`Save view…`})]}),(0,x.jsx)(ee,{open:e,onOpenChange:t,initialName:`Overdue this month`,onSave:e=>r(t=>[...t,e])})]})}var L=`import { useState } from "react"
import { SaveViewDialog } from "@kitora/datagrid"

/** SaveViewDialog asks for a name; onSave stores the current filters and sort however your app saves views. */
export function SaveView() {
  const [open, setOpen] = useState(false)
  const [views, setViews] = useState<string[]>(["All invoices"])
  return (
    <div className="space-y-2 text-sm">
      <div className="flex flex-wrap items-center gap-1.5">
        {views.map((v) => (
          <span key={v} className="rounded border border-border px-2 py-0.5 text-xs">
            {v}
          </span>
        ))}
        <button type="button" className="h-7 rounded border border-border px-2 text-xs" onClick={() => setOpen(true)}>
          Save view…
        </button>
      </div>
      <SaveViewDialog open={open} onOpenChange={setOpen} initialName="Overdue this month" onSave={(name) => setViews((vs) => [...vs, name])} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>d(()=>import(`./save-view-pyiG-Rt3.js`),[]));var R=[{id:`1`,sku:`DEMO-001`,item:`Desk lamp`,warehouse:`North`,onHand:12,reorderAt:5},{id:`2`,sku:`DEMO-002`,item:`Notebook`,warehouse:`North`,onHand:40,reorderAt:20},{id:`3`,sku:`DEMO-003`,item:`Monitor arm`,warehouse:`South`,onHand:3,reorderAt:4},{id:`4`,sku:`DEMO-004`,item:`Cable tray`,warehouse:`South`,onHand:18,reorderAt:10},{id:`5`,sku:`DEMO-005`,item:`Footrest`,warehouse:`East`,onHand:7,reorderAt:6},{id:`6`,sku:`DEMO-006`,item:`Whiteboard`,warehouse:`East`,onHand:2,reorderAt:2}],z=n()([{id:`sku`,header:`SKU`,cell:e=>(0,x.jsx)(`span`,{className:`font-mono text-xs`,children:e.sku})},{id:`item`,header:`Item`,cell:e=>e.item,meta:{edit:{type:`text`,patch:e=>({item:String(e)})}}},{id:`warehouse`,header:`Warehouse`,cell:e=>e.warehouse},{id:`onHand`,header:`On hand`,cell:e=>e.onHand,meta:{align:`end`,edit:{type:`number`,min:0,patch:e=>({onHand:Number(e)})}}},{id:`reorderAt`,header:`Reorder at`,cell:e=>e.reorderAt,meta:{align:`end`}}]);function B(){let{cellSelection:e,selectedCellRange:t}=i();return!e||!t?(0,x.jsx)(`p`,{className:`mt-2 text-xs text-muted-foreground`,children:`No cells selected`}):(0,x.jsxs)(`p`,{className:`mt-2 text-xs text-muted-foreground`,children:[t.r1-t.r0+1,` × `,t.c1-t.c0+1,` cells, from row `,e.anchor.rowId,` / `,e.anchor.columnId,` to row `,e.focus.rowId,` / `,e.focus.columnId]})}function V(){return(0,x.jsx)(s,{children:(0,x.jsxs)(o,{adapter:(0,b.useMemo)(()=>a({initial:R}),[]),children:[(0,x.jsx)(g,{columns:z,cellSelection:!0,selectable:!1}),(0,x.jsx)(B,{})]})})}var H=`import { useMemo } from "react"
import { DataGrid, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumns, useDataGridUI } from "@kitora/datagrid"

interface Stock {
  id: string
  sku: string
  item: string
  warehouse: string
  onHand: number
  reorderAt: number
}

const stock: Stock[] = [
  { id: "1", sku: "DEMO-001", item: "Desk lamp", warehouse: "North", onHand: 12, reorderAt: 5 },
  { id: "2", sku: "DEMO-002", item: "Notebook", warehouse: "North", onHand: 40, reorderAt: 20 },
  { id: "3", sku: "DEMO-003", item: "Monitor arm", warehouse: "South", onHand: 3, reorderAt: 4 },
  { id: "4", sku: "DEMO-004", item: "Cable tray", warehouse: "South", onHand: 18, reorderAt: 10 },
  { id: "5", sku: "DEMO-005", item: "Footrest", warehouse: "East", onHand: 7, reorderAt: 6 },
  { id: "6", sku: "DEMO-006", item: "Whiteboard", warehouse: "East", onHand: 2, reorderAt: 2 },
]

// Item and On hand are editable: Enter, F2 or a click on the focused cell edits it.
const columns = defineColumns<Stock>()([
  { id: "sku", header: "SKU", cell: (r) => <span className="font-mono text-xs">{r.sku}</span> },
  { id: "item", header: "Item", cell: (r) => r.item, meta: { edit: { type: "text", patch: (v) => ({ item: String(v) }) } } },
  { id: "warehouse", header: "Warehouse", cell: (r) => r.warehouse },
  { id: "onHand", header: "On hand", cell: (r) => r.onHand, meta: { align: "end", edit: { type: "number", min: 0, patch: (v) => ({ onHand: Number(v) }) } } },
  { id: "reorderAt", header: "Reorder at", cell: (r) => r.reorderAt, meta: { align: "end" } },
])

/** Any component under the providers reads the range: by ids (\`cellSelection\`) or as indexes (\`selectedCellRange\`). */
function RangeReadout() {
  const { cellSelection, selectedCellRange: range } = useDataGridUI()
  if (!cellSelection || !range) return <p className="mt-2 text-xs text-muted-foreground">No cells selected</p>
  const rows = range.r1 - range.r0 + 1
  const cols = range.c1 - range.c0 + 1
  return (
    <p className="mt-2 text-xs text-muted-foreground">
      {rows} × {cols} cells, from row {cellSelection.anchor.rowId} / {cellSelection.anchor.columnId} to row {cellSelection.focus.rowId} / {cellSelection.focus.columnId}
    </p>
  )
}

export function CellRangeTable() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: stock }), [])
  return (
    <DataGridUIProvider>
      <DataGridProvider adapter={adapter}>
        <DataGrid columns={columns} cellSelection selectable={false} />
        <RangeReadout />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>d(()=>import(`./cell-range-BU462OJG.js`),[]));var U=[{id:`1`,number:`INV-1001`,client:`Demo Bakery`,amountCents:125e3,note:`Net 30`},{id:`2`,number:`INV-1002`,client:`Sample Studio`,amountCents:98050,note:`Says "rush"`},{id:`3`,number:`INV-1003`,client:`Example Cafe`,amountCents:43200,note:`Two lines
of notes`},{id:`4`,number:`INV-1004`,client:`Placeholder Ltd`,amountCents:7700,note:`Paid`}],W=e=>(e/100).toFixed(2),G=n()([{id:`number`,header:`Invoice`,cell:e=>(0,x.jsx)(`span`,{className:`font-mono text-xs`,children:e.number})},{id:`client`,header:`Client`,cell:e=>e.client},{id:`amount`,header:`Amount`,cell:e=>`$${W(e.amountCents)}`,meta:{align:`end`,copyValue:e=>W(e.amountCents)}},{id:`note`,header:`Note`,cell:e=>(0,x.jsx)(`span`,{className:`line-clamp-1`,children:e.note})}]);function K(){let e=(0,b.useMemo)(()=>a({initial:U}),[]),[n,r]=(0,b.useState)(!1),i=(0,b.useId)(),c=(0,b.useId)();return(0,x.jsx)(s,{children:(0,x.jsxs)(o,{adapter:e,children:[(0,x.jsxs)(`div`,{className:`mb-2 flex items-center gap-2`,children:[(0,x.jsx)(t,{id:i,checked:n,onCheckedChange:r}),(0,x.jsx)(m,{htmlFor:i,children:`Copy headers`})]}),(0,x.jsx)(g,{columns:G,cellSelection:!0,copyHeaders:n}),(0,x.jsx)(m,{htmlFor:c,className:`mt-3 block`,children:`Paste here to see what was copied`}),(0,x.jsx)(l,{id:c,className:`mt-1 font-mono text-xs`,rows:4,placeholder:`Select cells or rows, press Mod+C, then paste here`})]})})}var q=`import { useId, useMemo, useState } from "react"
import { DataGrid, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumns } from "@kitora/datagrid"
import { Label } from "@kitora/ui/label"
import { Switch } from "@kitora/ui/switch"
import { Textarea } from "@kitora/ui/textarea"

interface Invoice {
  id: string
  number: string
  client: string
  amountCents: number
  note: string
}

const invoices: Invoice[] = [
  { id: "1", number: "INV-1001", client: "Demo Bakery", amountCents: 125000, note: "Net 30" },
  { id: "2", number: "INV-1002", client: "Sample Studio", amountCents: 98050, note: 'Says "rush"' },
  { id: "3", number: "INV-1003", client: "Example Cafe", amountCents: 43200, note: "Two lines\\nof notes" },
  { id: "4", number: "INV-1004", client: "Placeholder Ltd", amountCents: 7700, note: "Paid" },
]

const money = (cents: number) => (cents / 100).toFixed(2)

// Mod+C copies the range, else the selected rows, else the focused cell, as TSV. \`copyValue\` sets a cell's text.
const columns = defineColumns<Invoice>()([
  { id: "number", header: "Invoice", cell: (r) => <span className="font-mono text-xs">{r.number}</span> },
  { id: "client", header: "Client", cell: (r) => r.client },
  { id: "amount", header: "Amount", cell: (r) => \`$\${money(r.amountCents)}\`, meta: { align: "end", copyValue: (r) => money(r.amountCents) } },
  { id: "note", header: "Note", cell: (r) => <span className="line-clamp-1">{r.note}</span> },
])

export function CopyCellsTable() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: invoices }), [])
  const [headers, setHeaders] = useState(false)
  const switchId = useId()
  const boxId = useId()
  return (
    <DataGridUIProvider>
      <DataGridProvider adapter={adapter}>
        <div className="mb-2 flex items-center gap-2">
          <Switch id={switchId} checked={headers} onCheckedChange={setHeaders} />
          <Label htmlFor={switchId}>Copy headers</Label>
        </div>
        <DataGrid columns={columns} cellSelection copyHeaders={headers} />
        <Label htmlFor={boxId} className="mt-3 block">
          Paste here to see what was copied
        </Label>
        <Textarea id={boxId} className="mt-1 font-mono text-xs" rows={4} placeholder="Select cells or rows, press Mod+C, then paste here" />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>d(()=>import(`./copy-cells-Coo4yhSw.js`),[]));var J=[{id:`1`,key:`DEMO-1`,title:`Set up the project`,estimate:2,priority:`high`,locked:!1},{id:`2`,key:`DEMO-2`,title:`Draw the wireframes`,estimate:5,priority:`medium`,locked:!1},{id:`3`,key:`DEMO-3`,title:`Write the copy`,estimate:null,priority:`low`,locked:!0},{id:`4`,key:`DEMO-4`,title:`Review with the team`,estimate:1,priority:`low`,locked:!1}],Y=[{value:`low`,label:`Low`},{value:`medium`,label:`Medium`},{value:`high`,label:`High`}],X=e=>e===`low`||e===`medium`||e===`high`,Z=n()([{id:`key`,header:`Key`,cell:e=>(0,x.jsx)(`span`,{className:`font-mono text-xs`,children:e.key})},{id:`title`,header:`Title`,cell:e=>e.title,meta:{edit:{type:`text`,patch:e=>({title:String(e??``)})},canEdit:e=>!e.locked}},{id:`estimate`,header:`Estimate`,cell:e=>e.estimate??`-`,meta:{align:`end`,edit:{type:`number`,min:0,patch:e=>({estimate:typeof e==`number`?e:null})},canEdit:e=>!e.locked}},{id:`priority`,header:`Priority`,cell:e=>Y.find(t=>t.value===e.priority)?.label,meta:{edit:{type:`select`,options:Y,patch:e=>X(e)?{priority:e}:{}},canEdit:e=>!e.locked}},{id:`locked`,header:`Locked`,cell:e=>e.locked?`Yes`:`No`}]),Q=`Plan the sprint	3	High
Ship the beta	8	medium
Celebrate	lots	Urgent`;function ne(){let e=(0,b.useMemo)(()=>a({initial:J}),[]),[t,n]=(0,b.useState)(null);return(0,x.jsx)(s,{children:(0,x.jsxs)(o,{adapter:e,children:[(0,x.jsxs)(`div`,{className:`mb-3 rounded-md border border-dashed p-2`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,x.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Copy this block from a spreadsheet or with the button, focus the Title cell of DEMO-1 and press Mod+V:`}),(0,x.jsx)(p,{size:`xs`,variant:`outline`,onClick:()=>void navigator.clipboard?.writeText(Q),children:`Copy sample`})]}),(0,x.jsx)(`pre`,{className:`mt-1 overflow-x-auto font-mono text-xs`,children:Q})]}),(0,x.jsx)(`div`,{className:`mb-2 flex justify-end`,children:(0,x.jsx)(h,{})}),(0,x.jsx)(g,{columns:Z,cellSelection:!0,selectable:!1,onPaste:n}),(0,x.jsx)(`p`,{className:`mt-2 text-xs text-muted-foreground`,children:t?`Wrote ${t.applied} cells; skipped ${t.skipped.map(e=>`${e.columnId} of row ${e.rowId} (${e.reason})`).join(`, `)||`none`}`:`Nothing pasted yet`})]})})}var $=`import { useMemo, useState } from "react"
import { DataGrid, DataGridProvider, DataGridUIProvider, DataGridUndoRedo, createInMemoryAdapter, defineColumns, type DataGridPasteResult } from "@kitora/datagrid"
import { Button } from "@kitora/ui/button"

type Priority = "low" | "medium" | "high"

interface Ticket {
  id: string
  key: string
  title: string
  estimate: number | null
  priority: Priority
  locked: boolean
}

const tickets: Ticket[] = [
  { id: "1", key: "DEMO-1", title: "Set up the project", estimate: 2, priority: "high", locked: false },
  { id: "2", key: "DEMO-2", title: "Draw the wireframes", estimate: 5, priority: "medium", locked: false },
  { id: "3", key: "DEMO-3", title: "Write the copy", estimate: null, priority: "low", locked: true },
  { id: "4", key: "DEMO-4", title: "Review with the team", estimate: 1, priority: "low", locked: false },
]

const PRIORITIES = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
]
const isPriority = (v: unknown): v is Priority => v === "low" || v === "medium" || v === "high"

// Paste writes only editable cells whose row passes canEdit; numbers and select labels are coerced like the editors.
const columns = defineColumns<Ticket>()([
  { id: "key", header: "Key", cell: (r) => <span className="font-mono text-xs">{r.key}</span> },
  { id: "title", header: "Title", cell: (r) => r.title, meta: { edit: { type: "text", patch: (v) => ({ title: String(v ?? "") }) }, canEdit: (r) => !r.locked } },
  { id: "estimate", header: "Estimate", cell: (r) => r.estimate ?? "-", meta: { align: "end", edit: { type: "number", min: 0, patch: (v) => ({ estimate: typeof v === "number" ? v : null }) }, canEdit: (r) => !r.locked } },
  { id: "priority", header: "Priority", cell: (r) => PRIORITIES.find((p) => p.value === r.priority)?.label, meta: { edit: { type: "select", options: PRIORITIES, patch: (v) => (isPriority(v) ? { priority: v } : {}) }, canEdit: (r) => !r.locked } },
  { id: "locked", header: "Locked", cell: (r) => (r.locked ? "Yes" : "No") },
])

/** A block as Excel, Sheets or Numbers put it on the clipboard: tab-separated, one line per row. */
const SAMPLE = "Plan the sprint\\t3\\tHigh\\nShip the beta\\t8\\tmedium\\nCelebrate\\tlots\\tUrgent"

export function PasteCellsTable() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: tickets }), [])
  const [last, setLast] = useState<DataGridPasteResult | null>(null)
  return (
    <DataGridUIProvider>
      <DataGridProvider adapter={adapter}>
        <div className="mb-3 rounded-md border border-dashed p-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground">Copy this block from a spreadsheet or with the button, focus the Title cell of DEMO-1 and press Mod+V:</p>
            <Button size="xs" variant="outline" onClick={() => void navigator.clipboard?.writeText(SAMPLE)}>
              Copy sample
            </Button>
          </div>
          <pre className="mt-1 overflow-x-auto font-mono text-xs">{SAMPLE}</pre>
        </div>
        {/* The whole paste is one undo step: Mod+Z inside the grid, or these buttons. */}
        <div className="mb-2 flex justify-end">
          <DataGridUndoRedo />
        </div>
        <DataGrid columns={columns} cellSelection selectable={false} onPaste={setLast} />
        <p className="mt-2 text-xs text-muted-foreground">
          {last ? \`Wrote \${last.applied} cells; skipped \${last.skipped.map((s) => \`\${s.columnId} of row \${s.rowId} (\${s.reason})\`).join(", ") || "none"}\` : "Nothing pasted yet"}
        </p>
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>d(()=>import(`./paste-cells-spmMC0XI.js`),[]));function re(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c,{title:`Basics: editing and data`,children:`Edit a cell in place, and plug in your own backend by writing one load function.`}),(0,x.jsx)(y,{n:1,title:`An inline-editable cell`,blurb:`Double-click a cell with meta.edit, type and press Enter; the patch goes to the adapter's updateRow. Each edit is one undo step: Mod+Z inside the grid (Mod+Shift+Z or Ctrl+Y redo), or DataGridUndoRedo.`,code:T,children:(0,x.jsx)(w,{})}),(0,x.jsx)(y,{n:2,title:`A custom adapter`,blurb:`A DataGridAdapter is a load function: turn the query's cursors into your API's offset and limit.`,code:A,children:(0,x.jsx)(k,{})}),(0,x.jsx)(y,{n:3,title:`An editable cell in a custom layout`,blurb:`EditableCell is the table's click-to-edit cell; a custom DataGridLayout renders it for any column with meta.edit.`,code:F,children:(0,x.jsx)(P,{})}),(0,x.jsx)(y,{n:4,title:`Save a view`,blurb:`SaveViewDialog asks for a name and hands it to onSave.`,code:L,children:(0,x.jsx)(I,{})}),(0,x.jsx)(y,{n:5,title:`Select a range of cells`,blurb:`cellSelection makes the table a grid with one tab stop: press and drag, Shift-click or Shift + arrows select a rectangle, Shift+Space a row, Mod+A every cell, Escape clears. Enter, F2 or a click on the focused cell edits it; useDataGridUI().selectedCellRange reads the range anywhere.`,code:H,children:(0,x.jsx)(V,{})}),(0,x.jsx)(y,{n:6,title:`Copy cells and rows`,blurb:`With cellSelection, Mod+C copies the range, else the selected rows, else the focused cell, as TSV a spreadsheet reads. meta.copyValue sets a cell's text; copyHeaders adds the header line; the right-click menu has Copy cells, Copy rows and Copy with headers.`,code:q,children:(0,x.jsx)(K,{})}),(0,x.jsx)(y,{n:7,title:`Paste from a spreadsheet`,blurb:`Mod+V pastes TSV from Excel, Sheets or Numbers into the editable cells from the focused cell or over the range (tiled when the range is a multiple of the block). Numbers and select labels are coerced like the editors; read-only cells are skipped and onPaste says which. The whole paste is one undo step.`,code:$,children:(0,x.jsx)(ne,{})})]})}export{re as component};