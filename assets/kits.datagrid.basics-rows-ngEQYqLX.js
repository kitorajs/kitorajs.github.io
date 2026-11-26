import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./archive-Cm1ILO06.js";import{F as n,P as r,Q as i,R as a,Y as o,Z as s,d as c,f as l,p as u}from"./data-grid-highlight-CpMXzsVp.js";import{s as d}from"./kit-docs-BUovISd0.js";import{t as f}from"./grip-vertical-Ds3XP1S2.js";import{t as p}from"./pencil-B4UI5Wo7.js";import{t as m}from"./trash-2-BYfY5R1J.js";import{Bc as h,Cc as g,Ic as _}from"./index-B9ukmIN1.js";import{i as v}from"./open-key-DU1klqOB.js";import{n as y}from"./data-grid-a0FFXgkb.js";import{t as b}from"./data-grid-view-CdE5uul0.js";import{t as x}from"./cards-layout-XaU025Cs.js";import{t as S}from"./data-grid-pagination-5oox18Q_.js";import{t as C}from"./data-grid-column-visibility-CKTTNFiA.js";import"./kit-gallery-Bph7isB2.js";import{t as w}from"./example-BGnSQG2Y.js";var T=e(h(),1),E=_(),D=Array.from({length:23},(e,t)=>({id:String(t+1),name:`Item ${t+1}`})),O=n()([{id:`id`,header:`#`,cell:e=>e.id,size:60},{id:`name`,header:`Name`,cell:e=>e.name}]);function k(){return(0,E.jsx)(s,{defaultPageSize:5,children:(0,E.jsxs)(o,{adapter:(0,T.useMemo)(()=>a({initial:D}),[]),children:[(0,E.jsx)(y,{columns:O,selectable:!1}),(0,E.jsx)(S,{pageSizeOptions:[5,10,20]})]})})}var A=`import { useMemo } from "react"
import { DataGrid, DataGridPagination, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumns } from "@kitora/datagrid"

interface Item {
  id: string
  name: string
}

const items: Item[] = Array.from({ length: 23 }, (_, i) => ({ id: String(i + 1), name: \`Item \${i + 1}\` }))

const columns = defineColumns<Item>()([
  { id: "id", header: "#", cell: (r) => r.id, size: 60 },
  { id: "name", header: "Name", cell: (r) => r.name },
])

/** Five rows a page; the pager reads the adapter's cursor and total count. */
export function PaginatedTable() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: items }), [])
  return (
    <DataGridUIProvider defaultPageSize={5}>
      <DataGridProvider adapter={adapter}>
        <DataGrid columns={columns} selectable={false} />
        <DataGridPagination pageSizeOptions={[5, 10, 20]} />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>g(()=>import(`./pagination-CKK9Jbxu.js`),[]));var j=[{id:`1`,name:`Grace Bennett`},{id:`2`,name:`Linus Whitfield`},{id:`3`,name:`Maya Chamberlain`}],M=n()([{id:`name`,header:`Name`,cell:e=>e.name}]);function N(){let{selectedIds:e}=i();return(0,E.jsxs)(`p`,{className:`mt-2 text-xs text-muted-foreground`,children:[`Selected: `,e.length?e.join(`, `):`none`]})}function P(){return(0,E.jsx)(s,{children:(0,E.jsxs)(o,{adapter:(0,T.useMemo)(()=>a({initial:j}),[]),children:[(0,E.jsx)(y,{columns:M,selectable:!0}),(0,E.jsx)(N,{})]})})}var F=`import { useMemo } from "react"
import { DataGrid, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumns, useDataGridUI } from "@kitora/datagrid"

interface Person {
  id: string
  name: string
}

const people: Person[] = [
  { id: "1", name: "Grace Bennett" },
  { id: "2", name: "Linus Whitfield" },
  { id: "3", name: "Maya Chamberlain" },
]

const columns = defineColumns<Person>()([{ id: "name", header: "Name", cell: (r) => r.name }])

/** Any component under the providers can read the selection. */
function Selected() {
  const { selectedIds } = useDataGridUI()
  return <p className="mt-2 text-xs text-muted-foreground">Selected: {selectedIds.length ? selectedIds.join(", ") : "none"}</p>
}

export function SelectionTable() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: people }), [])
  return (
    <DataGridUIProvider>
      <DataGridProvider adapter={adapter}>
        <DataGrid columns={columns} selectable />
        <Selected />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>g(()=>import(`./selection-BzYz-2vu.js`),[]));var I=[{id:`1`,name:`Grace Bennett`,email:`grace@example.com`,team:`Platform`},{id:`2`,name:`Linus Whitfield`,email:`linus@example.com`,team:`Design`}],L=n()([{id:`name`,header:`Name`,cell:e=>e.name,meta:{hideable:!1}},{id:`email`,header:`Email`,cell:e=>e.email},{id:`team`,header:`Team`,cell:e=>e.team}]);function R(){return(0,E.jsx)(s,{defaultHiddenColumns:[`email`],children:(0,E.jsxs)(o,{adapter:(0,T.useMemo)(()=>a({initial:I}),[]),children:[(0,E.jsx)(C,{columns:L}),(0,E.jsx)(y,{columns:L,selectable:!1,className:`mt-2`})]})})}var z=`import { useMemo } from "react"
import { DataGrid, DataGridColumnVisibility, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumns } from "@kitora/datagrid"

interface Person {
  id: string
  name: string
  email: string
  team: string
}

const people: Person[] = [
  { id: "1", name: "Grace Bennett", email: "grace@example.com", team: "Platform" },
  { id: "2", name: "Linus Whitfield", email: "linus@example.com", team: "Design" },
]

// \`hideable: false\` keeps a column out of the menu.
const columns = defineColumns<Person>()([
  { id: "name", header: "Name", cell: (r) => r.name, meta: { hideable: false } },
  { id: "email", header: "Email", cell: (r) => r.email },
  { id: "team", header: "Team", cell: (r) => r.team },
])

export function ColumnsTable() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: people }), [])
  return (
    <DataGridUIProvider defaultHiddenColumns={["email"]}>
      <DataGridProvider adapter={adapter}>
        <DataGridColumnVisibility columns={columns} />
        <DataGrid columns={columns} selectable={false} className="mt-2" />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>g(()=>import(`./columns-ClBR9jIR.js`),[]));var B=[{id:`1`,title:`Write the release notes`},{id:`2`,title:`Review the pricing page`},{id:`3`,title:`Book the team offsite`}],V=n()([{id:`title`,header:`Task`,cell:e=>e.title}]),H=[x({enableRowReorder:!0,dragHandle:`none`,minCardWidth:`10rem`,footer:e=>(0,E.jsxs)(v,{rowId:e.id,className:`inline-flex items-center gap-1 text-xs text-muted-foreground`,children:[(0,E.jsx)(f,{className:`size-3.5`}),` Move`]})})];function U(){return(0,E.jsx)(s,{defaultLayoutId:`cards`,children:(0,E.jsx)(o,{adapter:(0,T.useMemo)(()=>a({initial:B}),[]),children:(0,E.jsx)(b,{columns:V,layouts:H})})})}var W=`import { useMemo } from "react"
import { GripVertical } from "lucide-react"
import { DataGridProvider, DataGridRowDragHandle, DataGridUIProvider, DataGridView, cardsLayout, createInMemoryAdapter, defineColumns } from "@kitora/datagrid"

interface Task {
  id: string
  title: string
}

const tasks: Task[] = [
  { id: "1", title: "Write the release notes" },
  { id: "2", title: "Review the pricing page" },
  { id: "3", title: "Book the team offsite" },
]

const columns = defineColumns<Task>()([{ id: "title", header: "Task", cell: (r) => r.title }])

// dragHandle: "none" leaves the grip to you; only a DataGridRowDragHandle starts a drag (Space + arrows on the keyboard).
const layouts = [
  cardsLayout<Task>({
    enableRowReorder: true,
    dragHandle: "none",
    minCardWidth: "10rem",
    footer: (r) => (
      <DataGridRowDragHandle rowId={r.id} className="inline-flex items-center gap-1 text-xs text-muted-foreground">
        <GripVertical className="size-3.5" /> Move
      </DataGridRowDragHandle>
    ),
  }),
]

export function DragHandleCards() {
  // createInMemoryAdapter implements moveRow, so the cards reorder in place.
  const adapter = useMemo(() => createInMemoryAdapter({ initial: tasks }), [])
  return (
    <DataGridUIProvider defaultLayoutId="cards">
      <DataGridProvider adapter={adapter}>
        <DataGridView<Task> columns={columns} layouts={layouts} />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>g(()=>import(`./drag-handle-F3xYQMMf.js`),[]));function G(){let[e,n]=(0,T.useState)(`No action yet`),[r,i]=(0,T.useState)(!1),a=[{label:`Edit`,icon:p,tooltip:`Edit invoice`,onAction:()=>n(`Edit INV-1042`)},{label:`Archive`,icon:t,tooltip:`Archive invoice`,onAction:()=>n(`Archived INV-1042`)},{label:`Delete`,icon:m,destructive:!0,confirm:{title:`Delete INV-1042?`,message:`This cannot be undone.`,confirmLabel:`Delete`,destructive:!0,onConfirm:()=>n(`Deleted INV-1042`)}}];return(0,E.jsxs)(`div`,{className:`space-y-2 text-sm`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between rounded border border-border px-2 py-1`,children:[(0,E.jsx)(`span`,{children:`INV-1042 · Acme Corp`}),(0,E.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,E.jsx)(l,{actions:a}),(0,E.jsx)(c,{actions:a,ariaLabel:`More actions for INV-1042`})]})]}),(0,E.jsx)(`button`,{type:`button`,className:`h-7 rounded border border-border px-2 text-xs`,onClick:()=>i(!0),children:`Void all drafts…`}),(0,E.jsx)(u,{open:r,onOpenChange:i,title:`Void all drafts?`,message:`Every draft invoice is voided.`,confirmLabel:`Void`,destructive:!0,onConfirm:()=>n(`Voided all drafts`)}),(0,E.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:e})]})}var K=`import { useState } from "react"
import { Archive, Pencil, Trash2 } from "lucide-react"
import { ConfirmDialog, RowActionButtons, RowActionsMenu, type ActionItem } from "@kitora/datagrid"

/** The same ActionItem list drives the inline icon strip, the ellipsis menu, and a \`confirm\` step before a destructive one. */
export function RowActions() {
  const [log, setLog] = useState("No action yet")
  const [confirmOpen, setConfirmOpen] = useState(false)

  const actions: ActionItem[] = [
    { label: "Edit", icon: Pencil, tooltip: "Edit invoice", onAction: () => setLog("Edit INV-1042") },
    { label: "Archive", icon: Archive, tooltip: "Archive invoice", onAction: () => setLog("Archived INV-1042") },
    { label: "Delete", icon: Trash2, destructive: true, confirm: { title: "Delete INV-1042?", message: "This cannot be undone.", confirmLabel: "Delete", destructive: true, onConfirm: () => setLog("Deleted INV-1042") } },
  ]

  return (
    <div className="space-y-2 text-sm">
      <div className="flex items-center justify-between rounded border border-border px-2 py-1">
        <span>INV-1042 · Acme Corp</span>
        <div className="flex items-center gap-1">
          <RowActionButtons actions={actions} />
          <RowActionsMenu actions={actions} ariaLabel="More actions for INV-1042" />
        </div>
      </div>
      <button type="button" className="h-7 rounded border border-border px-2 text-xs" onClick={() => setConfirmOpen(true)}>
        Void all drafts…
      </button>
      {/* ConfirmDialog on its own, for a toolbar button that is not a row action. */}
      <ConfirmDialog open={confirmOpen} onOpenChange={setConfirmOpen} title="Void all drafts?" message="Every draft invoice is voided." confirmLabel="Void" destructive onConfirm={() => setLog("Voided all drafts")} />
      <p className="text-xs text-muted-foreground">{log}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>g(()=>import(`./row-actions-DOWIT36e.js`),[]));var q=[{id:`C-01`,first:`Grace`,last:`Bennett`,street:`1 Demo Street`,city:`Sampleton`,email:`grace@example.com`,plan:`Pro`},{id:`C-02`,first:`Linus`,last:`Whitfield`,street:`22 Example Road`,city:`Placeville`,email:`linus@example.com`,plan:`Free`},{id:`C-03`,first:`Maya`,last:`Chamberlain`,street:`3 Test Lane`,city:`Mockford`,email:`maya@example.com`,plan:`Team`}],J=n()([{id:`id`,header:`ID`,cell:e=>(0,E.jsx)(`span`,{className:`font-mono text-xs`,children:e.id}),meta:{hideable:!1}},{id:`first`,header:`First`,cell:e=>e.first},{id:`last`,header:`Last`,cell:e=>e.last},{id:`street`,header:`Street`,cell:e=>e.street},{id:`city`,header:`City`,cell:e=>e.city},{id:`email`,header:`Email`,cell:e=>e.email},{id:`plan`,header:`Plan`,cell:e=>e.plan}]),Y=r()([{id:`name`,header:`Name`,children:[`first`,`last`]},{id:`contact`,header:`Contact`,description:`Where to reach the person`,children:[{id:`address`,header:`Address`,children:[`street`,`city`]},`email`]}]);function X(){return(0,E.jsx)(s,{children:(0,E.jsxs)(o,{adapter:(0,T.useMemo)(()=>a({initial:q}),[]),children:[(0,E.jsx)(C,{columns:J}),(0,E.jsx)(y,{columns:J,columnGroups:Y,selectable:!1,className:`mt-2`})]})})}var Z=`import { useMemo } from "react"
import { DataGrid, DataGridColumnVisibility, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumnGroups, defineColumns } from "@kitora/datagrid"

interface Contact {
  id: string
  first: string
  last: string
  street: string
  city: string
  email: string
  plan: string
}

const contacts: Contact[] = [
  { id: "C-01", first: "Grace", last: "Bennett", street: "1 Demo Street", city: "Sampleton", email: "grace@example.com", plan: "Pro" },
  { id: "C-02", first: "Linus", last: "Whitfield", street: "22 Example Road", city: "Placeville", email: "linus@example.com", plan: "Free" },
  { id: "C-03", first: "Maya", last: "Chamberlain", street: "3 Test Lane", city: "Mockford", email: "maya@example.com", plan: "Team" },
]

const columns = defineColumns<Contact>()([
  { id: "id", header: "ID", cell: (r) => <span className="font-mono text-xs">{r.id}</span>, meta: { hideable: false } },
  { id: "first", header: "First", cell: (r) => r.first },
  { id: "last", header: "Last", cell: (r) => r.last },
  { id: "street", header: "Street", cell: (r) => r.street },
  { id: "city", header: "City", cell: (r) => r.city },
  { id: "email", header: "Email", cell: (r) => r.email },
  { id: "plan", header: "Plan", cell: (r) => r.plan },
])

// Groups nest; leaves are column ids, typed from \`columns\`. A column can be dragged only within its group.
const groups = defineColumnGroups<typeof columns>()([
  { id: "name", header: "Name", children: ["first", "last"] },
  {
    id: "contact",
    header: "Contact",
    description: "Where to reach the person",
    children: [{ id: "address", header: "Address", children: ["street", "city"] }, "email"],
  },
])

export function HeaderGroupsTable() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: contacts }), [])
  return (
    <DataGridUIProvider>
      <DataGridProvider adapter={adapter}>
        <DataGridColumnVisibility columns={columns} />
        <DataGrid columns={columns} columnGroups={groups} selectable={false} className="mt-2" />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>g(()=>import(`./header-groups-Dvdzv2hS.js`),[]));function Q(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{title:`Basics: rows and columns`,children:`Pagination, row selection and the column menu, each a component that reads the same providers.`}),(0,E.jsx)(w,{n:1,title:`Pagination`,blurb:`DataGridPagination pages through the adapter's cursors; defaultPageSize sets the page size.`,code:A,children:(0,E.jsx)(k,{})}),(0,E.jsx)(w,{n:2,title:`Row selection`,blurb:`selectable adds the checkbox column; useDataGridUI().selectedIds reads the selection anywhere.`,code:F,children:(0,E.jsx)(P,{})}),(0,E.jsx)(w,{n:3,title:`Show and hide columns`,blurb:`DataGridColumnVisibility lists every hideable column; defaultHiddenColumns starts some hidden.`,code:z,children:(0,E.jsx)(R,{})}),(0,E.jsx)(w,{n:4,title:`Drag handles you place`,blurb:`cardsLayout with dragHandle none; a DataGridRowDragHandle in each card footer is the only place a drag starts.`,code:W,children:(0,E.jsx)(U,{})}),(0,E.jsx)(w,{n:5,title:`Row actions`,blurb:`One ActionItem list drives RowActionButtons and RowActionsMenu; a confirm item and a standalone ConfirmDialog ask first.`,code:K,children:(0,E.jsx)(G,{})}),(0,E.jsx)(w,{n:6,title:`Header groups`,blurb:`columnGroups adds a header row per nesting level; each group spans its visible, contiguous columns. Hide a column and its group narrows; a column can be dragged only within its group. Leaf ids are typed by defineColumnGroups<typeof columns>().`,code:Z,children:(0,E.jsx)(X,{})})]})}export{Q as component};