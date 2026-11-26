import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{F as n,J as r,P as i,Q as a,R as o,X as s,Y as c,Z as l,r as ee}from"./data-grid-highlight-DYn2QRdt.js";import{t as u}from"./pencil-DLIqMo2I.js";import{t as d}from"./trash-2-0f767-k3.js";import{Bc as f,Cc as p,Ic as m,ti as h}from"./index-9y5uwRd3.js";import{t as g}from"./badge-CMT8Lr82.js";import{a as _}from"./people-BWa0DOHZ.js";import{t as v}from"./checkbox-C15B7P0U.js";import{a as y,i as b,n as x,o as te,r as ne,t as re}from"./data-grid-B2EbDNhG.js";var ie=e({DataTableBuildYourOwn:()=>D}),S=t(f(),1),C=m(),w=[{id:`1`,name:`Alex Kim`,role:`Owner`},{id:`2`,name:`Grace Hopper`,role:`Maintainer`},{id:`3`,name:`Linus Torvalds`,role:`Member`}],T=n()([{id:`name`,header:`Name`,cell:e=>e.name,meta:{sortFieldId:`name`}},{id:`role`,header:`Role`,cell:e=>e.role,meta:{sortFieldId:`role`,edit:{type:`text`,patch:e=>({role:String(e)})}}}]);function E(){let{rows:e,getRowId:t}=s(),{sort:n,setSort:i,isSelected:o,toggleColumn:c,hiddenColumns:l,openFilterFor:u}=a(),d=T.filter(e=>!l.includes(e.id)),f=te(e.map(e=>t(e))),[p,m]=(0,S.useState)(null);return ee({host:p}),(0,C.jsxs)(`table`,{ref:m,className:`w-full text-sm`,children:[(0,C.jsx)(`thead`,{children:(0,C.jsxs)(`tr`,{className:`border-b border-border text-start`,children:[(0,C.jsx)(`th`,{className:`w-9 px-3 py-2`,children:(0,C.jsx)(v,{checked:f.allSelected,indeterminate:f.someSelected,onCheckedChange:e=>f.toggleAll(e),"aria-label":`Select all rows on this page`})}),d.map(e=>{let t=e.meta?.sortFieldId,r=n.find(e=>e.fieldId===t)?.direction;return(0,C.jsx)(`th`,{"aria-sort":t?b(r):void 0,className:`px-3 py-2 text-start text-xs font-medium text-muted-foreground`,children:(0,C.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[t?(0,C.jsxs)(`button`,{type:`button`,onClick:()=>i(e=>y(e,t)),className:`inline-flex items-center gap-1.5 hover:text-foreground`,children:[typeof e.header==`function`?e.header():e.header,(0,C.jsx)(ne,{dir:r})]}):typeof e.header==`function`?e.header():e.header,(0,C.jsx)(re,{col:e,currentDir:r,onSortAsc:()=>t&&i([{fieldId:t,direction:`asc`}]),onSortDesc:()=>t&&i([{fieldId:t,direction:`desc`}]),onClearSort:()=>t&&i(e=>e.filter(e=>e.fieldId!==t)),onFilter:()=>e.meta?.filterFieldId&&u(e.meta.filterFieldId),onHide:()=>c(e.id)})]})},e.id)})]})}),(0,C.jsx)(`tbody`,{children:e.map((e,n)=>{let i=t(e);return(0,C.jsxs)(`tr`,{className:o(i)?`border-b border-border/60 bg-primary/8`:`border-b border-border/60`,onClick:e=>f.onRowSelectClick(i,n,e),children:[(0,C.jsx)(`td`,{className:`px-3 py-2`,onClick:e=>e.stopPropagation(),children:(0,C.jsx)(v,{checked:o(i),onCheckedChange:e=>f.toggleRow(i,e,n),"aria-label":`Select row`})}),d.map(t=>(0,C.jsx)(`td`,{className:`px-3 py-2`,children:t.meta?.edit?(0,C.jsx)(r,{row:e,rowIndex:n,rowId:i,col:t}):t.cell(e,n)},t.id))]},i)})})]})}function D(){return(0,C.jsx)(`div`,{className:`w-full overflow-x-auto rounded-lg border border-border bg-card`,children:(0,C.jsx)(l,{children:(0,C.jsx)(c,{adapter:(0,S.useMemo)(()=>o({initial:w}),[]),children:(0,C.jsx)(E,{})})})})}var O=e({DataTableCellRange:()=>M}),k=[{id:`1`,person:`Alex Kim`,mon:`Early`,tue:`Early`,wed:`Off`,thu:`Late`,fri:`Late`},{id:`2`,person:`Grace Bennett`,mon:`Late`,tue:`Off`,wed:`Early`,thu:`Early`,fri:`Off`},{id:`3`,person:`Mira Otieno`,mon:`Off`,tue:`Late`,wed:`Late`,thu:`Off`,fri:`Early`},{id:`4`,person:`Linus Whitfield`,mon:`Early`,tue:`Early`,wed:`Early`,thu:`Late`,fri:`Off`}],A=(e,t)=>({id:e,header:t,cell:t=>t[e]}),j=n()([{id:`person`,header:`Person`,cell:e=>(0,C.jsx)(`span`,{className:`font-medium`,children:e.person}),meta:{pin:`start`}},A(`mon`,`Mon`),A(`tue`,`Tue`),A(`wed`,`Wed`),A(`thu`,`Thu`),A(`fri`,`Fri`)]);function M(){return(0,C.jsx)(`div`,{className:`w-full`,children:(0,C.jsx)(l,{children:(0,C.jsx)(c,{adapter:(0,S.useMemo)(()=>o({initial:k}),[]),children:(0,C.jsx)(x,{columns:j,cellSelection:!0,selectable:!1})})})})}var N=e({DataTableComposeInvoicesWithBulkAction:()=>L}),P=[{id:`inv-1`,customer:`Acme`,status:`paid`,amount:1200},{id:`inv-2`,customer:`Globex`,status:`due`,amount:480},{id:`inv-3`,customer:`Initech`,status:`paid`,amount:2950}],F=n()([{id:`customer`,header:`Customer`,cell:e=>e.customer,meta:{sortFieldId:`customer`}},{id:`status`,header:`Status`,cell:e=>(0,C.jsx)(g,{variant:e.status===`paid`?`secondary`:`destructive`,children:e.status===`paid`?`Paid`:`Due`})},{id:`amount`,header:`Amount`,cell:e=>`$${e.amount.toLocaleString(`en-US`)}`,meta:{sortFieldId:`amount`,align:`end`}}]);function I(){let{selectedIds:e,setSelectedIds:t}=a();return(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 text-sm`,children:[(0,C.jsxs)(`span`,{className:`text-muted-foreground`,children:[e.length,` selected`]}),(0,C.jsx)(h,{size:`sm`,variant:`outline`,disabled:e.length===0,onClick:()=>t([]),children:`Send reminder`})]})}function L(){return(0,C.jsx)(`div`,{className:`w-full max-w-md space-y-2`,children:(0,C.jsx)(l,{children:(0,C.jsxs)(c,{adapter:(0,S.useMemo)(()=>o({initial:P}),[]),children:[(0,C.jsx)(I,{}),(0,C.jsx)(x,{columns:F,selectable:!0,useAdapterDefaults:!1})]})})})}var R=e({DataTableHeaderGroups:()=>H}),ae=[{id:`1`,region:`North`,janRevenue:12400,janUnits:310,febRevenue:13900,febUnits:342},{id:`2`,region:`South`,janRevenue:9800,janUnits:251,febRevenue:10350,febUnits:266},{id:`3`,region:`West`,janRevenue:15100,janUnits:388,febRevenue:14700,febUnits:371}],z=e=>`$${e.toLocaleString(`en-US`)}`,B=n()([{id:`region`,header:`Region`,cell:e=>(0,C.jsx)(`span`,{className:`font-medium`,children:e.region}),meta:{pin:`start`}},{id:`janRevenue`,header:`Revenue`,cell:e=>z(e.janRevenue),meta:{align:`end`}},{id:`janUnits`,header:`Units`,cell:e=>e.janUnits,meta:{align:`end`}},{id:`febRevenue`,header:`Revenue`,cell:e=>z(e.febRevenue),meta:{align:`end`}},{id:`febUnits`,header:`Units`,cell:e=>e.febUnits,meta:{align:`end`}}]),V=i()([{id:`jan`,header:`January`,children:[`janRevenue`,`janUnits`]},{id:`feb`,header:`February`,children:[`febRevenue`,`febUnits`]}]);function H(){return(0,C.jsx)(`div`,{className:`w-full`,children:(0,C.jsx)(l,{children:(0,C.jsx)(c,{adapter:(0,S.useMemo)(()=>o({initial:ae}),[]),children:(0,C.jsx)(x,{columns:B,columnGroups:V,selectable:!1})})})})}var U=e({DataTableSortableSelectable:()=>J}),W=[{id:`1`,name:`Alex Kim`,email:`alex@example.com`,role:`Owner`,status:`active`,joined:`2023-08-12`},{id:`2`,name:`Grace Hopper`,email:`grace@example.com`,role:`Maintainer`,status:`active`,joined:`2024-01-04`},{id:`3`,name:`Linus Torvalds`,email:`linus@example.com`,role:`Member`,status:`active`,joined:`2024-03-22`},{id:`4`,name:`Mira Otieno`,email:`mira@example.com`,role:`Member`,status:`invited`,joined:`2024-05-01`},{id:`5`,name:`Ada Lovelace`,email:`ada@example.com`,role:`Viewer`,status:`suspended`,joined:`2024-04-19`}],G={active:(0,C.jsx)(g,{variant:`outline`,className:`border-emerald-500/40 text-emerald-700 dark:text-emerald-400`,children:`Active`}),invited:(0,C.jsx)(g,{variant:`outline`,className:`border-amber-500/40 text-amber-700 dark:text-amber-400`,children:`Invited`}),suspended:(0,C.jsx)(g,{variant:`outline`,className:`border-rose-500/40 text-rose-700 dark:text-rose-400`,children:`Suspended`})},K=n()([{id:`name`,header:`Name`,cell:e=>(0,C.jsx)(_,{person:{name:e.name},secondary:e.email}),meta:{sortFieldId:`name`}},{id:`role`,header:`Role`,cell:e=>(0,C.jsx)(`span`,{className:`text-muted-foreground`,children:e.role}),meta:{sortFieldId:`role`}},{id:`status`,header:`Status`,cell:e=>G[e.status]},{id:`joined`,header:`Joined`,cell:e=>(0,C.jsx)(`span`,{className:`font-mono text-xs text-muted-foreground`,children:e.joined}),meta:{sortFieldId:`joined`}}]),q=e=>[{label:`Edit`,icon:u,onAction:()=>void 0},{label:`Remove`,icon:d,destructive:!0,confirm:{title:`Remove ${e.name}?`,message:`They lose access to this workspace.`,confirmLabel:`Remove`,destructive:!0,onConfirm:()=>void 0}}];function J(){return(0,C.jsx)(`div`,{className:`w-full`,children:(0,C.jsx)(l,{children:(0,C.jsx)(c,{adapter:(0,S.useMemo)(()=>o({initial:W}),[]),children:(0,C.jsx)(x,{columns:K,selectable:!0,rowLabel:e=>e.name,rightMenuActions:q,contextMenuActions:q})})})})}var Y=`import { useMemo, useState } from "react"
import { ariaSortOf, createInMemoryAdapter, cycleHeaderSort, DataGridColumnHeaderMenu, DataGridProvider, DataGridSortIcon, DataGridUIProvider, defineColumns, EditableCell, useDataGrid, useDataGridHistoryShortcuts, useDataGridPageSelection, useDataGridUI, type DataGridColumn } from "@kitora/datagrid"
import { Checkbox } from "@kitora/ui/checkbox"

interface Member {
  id: string
  name: string
  role: string
}

const MEMBERS: Member[] = [
  { id: "1", name: "Alex Kim", role: "Owner" },
  { id: "2", name: "Grace Hopper", role: "Maintainer" },
  { id: "3", name: "Linus Torvalds", role: "Member" },
]

// \`meta.sortFieldId\` makes a header sortable; \`meta.edit\` makes its cells editable (double-click, Enter saves, Escape cancels).
const columns: readonly DataGridColumn<Member>[] = defineColumns<Member>()([
  { id: "name", header: "Name", cell: (r) => r.name, meta: { sortFieldId: "name" } },
  { id: "role", header: "Role", cell: (r) => r.role, meta: { sortFieldId: "role", edit: { type: "text", patch: (v) => ({ role: String(v) }) } } },
])

/** The table: your own markup, with the grid's state and parts (sort cycle, page selection, header menu, editable cell, undo keys). */
function MemberTable() {
  const { rows, getRowId } = useDataGrid<Member>()
  const { sort, setSort, isSelected, toggleColumn, hiddenColumns, openFilterFor } = useDataGridUI()
  const visible = columns.filter((col) => !hiddenColumns.includes(col.id))
  const ids = rows.map((row) => getRowId(row))
  const selection = useDataGridPageSelection(ids)
  // Mod+Z / Mod+Shift+Z undo and redo an edit while focus is in the table.
  const [host, setHost] = useState<HTMLTableElement | null>(null)
  useDataGridHistoryShortcuts({ host })
  return (
    <table ref={setHost} className="w-full text-sm">
      <thead>
        <tr className="border-b border-border text-start">
          <th className="w-9 px-3 py-2">
            <Checkbox checked={selection.allSelected} indeterminate={selection.someSelected} onCheckedChange={(v) => selection.toggleAll(v)} aria-label="Select all rows on this page" />
          </th>
          {visible.map((col) => {
            const fieldId = col.meta?.sortFieldId
            const dir = sort.find((s) => s.fieldId === fieldId)?.direction
            return (
              <th key={col.id} aria-sort={fieldId ? ariaSortOf(dir) : undefined} className="px-3 py-2 text-start text-xs font-medium text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  {fieldId ? (
                    <button type="button" onClick={() => setSort((prev) => cycleHeaderSort(prev, fieldId))} className="inline-flex items-center gap-1.5 hover:text-foreground">
                      {typeof col.header === "function" ? col.header() : col.header}
                      <DataGridSortIcon dir={dir} />
                    </button>
                  ) : typeof col.header === "function" ? (
                    col.header()
                  ) : (
                    col.header
                  )}
                  <DataGridColumnHeaderMenu
                    col={col}
                    currentDir={dir}
                    onSortAsc={() => fieldId && setSort([{ fieldId, direction: "asc" }])}
                    onSortDesc={() => fieldId && setSort([{ fieldId, direction: "desc" }])}
                    onClearSort={() => fieldId && setSort((prev) => prev.filter((s) => s.fieldId !== fieldId))}
                    onFilter={() => col.meta?.filterFieldId && openFilterFor(col.meta.filterFieldId)}
                    onHide={() => toggleColumn(col.id)}
                  />
                </span>
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => {
          const id = getRowId(row)
          return (
            <tr key={id} className={isSelected(id) ? "border-b border-border/60 bg-primary/8" : "border-b border-border/60"} onClick={(e) => selection.onRowSelectClick(id, rowIndex, e)}>
              <td className="px-3 py-2" onClick={(e) => e.stopPropagation()}>
                <Checkbox checked={isSelected(id)} onCheckedChange={(v) => selection.toggleRow(id, v, rowIndex)} aria-label="Select row" />
              </td>
              {visible.map((col) => (
                <td key={col.id} className="px-3 py-2">
                  {col.meta?.edit ? <EditableCell row={row} rowIndex={rowIndex} rowId={id} col={col} /> : col.cell(row, rowIndex)}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

/** A sortable, selectable table with an editable column, built from the datagrid's public state and parts instead of \`<DataGrid>\`. */
export function DataTableBuildYourOwn() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: MEMBERS }), [])
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-border bg-card">
      <DataGridUIProvider>
        <DataGridProvider adapter={adapter}>
          <MemberTable />
        </DataGridProvider>
      </DataGridUIProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>p(()=>import(`./build-your-own-DSNLGMxX.js`),[]));var X=`import { useMemo } from "react"
import { DataGrid, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumns } from "@kitora/datagrid"

interface Shift {
  id: string
  person: string
  mon: string
  tue: string
  wed: string
  thu: string
  fri: string
}

const shifts: Shift[] = [
  { id: "1", person: "Alex Kim", mon: "Early", tue: "Early", wed: "Off", thu: "Late", fri: "Late" },
  { id: "2", person: "Grace Bennett", mon: "Late", tue: "Off", wed: "Early", thu: "Early", fri: "Off" },
  { id: "3", person: "Mira Otieno", mon: "Off", tue: "Late", wed: "Late", thu: "Off", fri: "Early" },
  { id: "4", person: "Linus Whitfield", mon: "Early", tue: "Early", wed: "Early", thu: "Late", fri: "Off" },
]

const day = (id: "mon" | "tue" | "wed" | "thu" | "fri", header: string) => ({ id, header, cell: (r: Shift) => r[id] })

// \`cellSelection\`: drag across cells, Shift-click, or Shift + arrows to select a rectangle; Escape clears it.
const columns = defineColumns<Shift>()([
  { id: "person", header: "Person", cell: (r) => <span className="font-medium">{r.person}</span>, meta: { pin: "start" } },
  day("mon", "Mon"),
  day("tue", "Tue"),
  day("wed", "Wed"),
  day("thu", "Thu"),
  day("fri", "Fri"),
])

export function DataTableCellRange() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: shifts }), [])
  return (
    <div className="w-full">
      <DataGridUIProvider>
        <DataGridProvider adapter={adapter}>
          <DataGrid columns={columns} cellSelection selectable={false} />
        </DataGridProvider>
      </DataGridUIProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>p(()=>import(`./cell-range-CA_DXKzm.js`),[]));var Z=`import { useMemo } from "react"
import { DataGrid, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumns, useDataGridUI } from "@kitora/datagrid"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"

interface Invoice {
  id: string
  customer: string
  status: "paid" | "due"
  amount: number
}

const invoices: Invoice[] = [
  { id: "inv-1", customer: "Acme", status: "paid", amount: 1200 },
  { id: "inv-2", customer: "Globex", status: "due", amount: 480 },
  { id: "inv-3", customer: "Initech", status: "paid", amount: 2950 },
]

const columns = defineColumns<Invoice>()([
  { id: "customer", header: "Customer", cell: (r) => r.customer, meta: { sortFieldId: "customer" } },
  {
    id: "status",
    header: "Status",
    cell: (r) => <Badge variant={r.status === "paid" ? "secondary" : "destructive"}>{r.status === "paid" ? "Paid" : "Due"}</Badge>,
  },
  { id: "amount", header: "Amount", cell: (r) => \`$\${r.amount.toLocaleString("en-US")}\`, meta: { sortFieldId: "amount", align: "end" } },
])

/** Reads the grid's selection from the UI provider and acts on it. */
function BulkBar() {
  const { selectedIds, setSelectedIds } = useDataGridUI()
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
      <span className="text-muted-foreground">{selectedIds.length} selected</span>
      <Button size="sm" variant="outline" disabled={selectedIds.length === 0} onClick={() => setSelectedIds([])}>
        Send reminder
      </Button>
    </div>
  )
}

export function DataTableComposeInvoicesWithBulkAction() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: invoices }), [])
  return (
    <div className="w-full max-w-md space-y-2">
      <DataGridUIProvider>
        <DataGridProvider adapter={adapter}>
          <BulkBar />
          <DataGrid columns={columns} selectable useAdapterDefaults={false} />
        </DataGridProvider>
      </DataGridUIProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>p(()=>import(`./compose-D1cOe1sD.js`),[]));var Q=`import { useMemo } from "react"
import { DataGrid, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumnGroups, defineColumns } from "@kitora/datagrid"

interface Quarter {
  id: string
  region: string
  janRevenue: number
  janUnits: number
  febRevenue: number
  febUnits: number
}

const quarters: Quarter[] = [
  { id: "1", region: "North", janRevenue: 12400, janUnits: 310, febRevenue: 13900, febUnits: 342 },
  { id: "2", region: "South", janRevenue: 9800, janUnits: 251, febRevenue: 10350, febUnits: 266 },
  { id: "3", region: "West", janRevenue: 15100, janUnits: 388, febRevenue: 14700, febUnits: 371 },
]

const money = (n: number) => \`$\${n.toLocaleString("en-US")}\`

const columns = defineColumns<Quarter>()([
  { id: "region", header: "Region", cell: (r) => <span className="font-medium">{r.region}</span>, meta: { pin: "start" } },
  { id: "janRevenue", header: "Revenue", cell: (r) => money(r.janRevenue), meta: { align: "end" } },
  { id: "janUnits", header: "Units", cell: (r) => r.janUnits, meta: { align: "end" } },
  { id: "febRevenue", header: "Revenue", cell: (r) => money(r.febRevenue), meta: { align: "end" } },
  { id: "febUnits", header: "Units", cell: (r) => r.febUnits, meta: { align: "end" } },
])

// \`columnGroups\` adds a header row; each group spans its visible, contiguous columns.
const groups = defineColumnGroups<typeof columns>()([
  { id: "jan", header: "January", children: ["janRevenue", "janUnits"] },
  { id: "feb", header: "February", children: ["febRevenue", "febUnits"] },
])

export function DataTableHeaderGroups() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: quarters }), [])
  return (
    <div className="w-full">
      <DataGridUIProvider>
        <DataGridProvider adapter={adapter}>
          <DataGrid columns={columns} columnGroups={groups} selectable={false} />
        </DataGridProvider>
      </DataGridUIProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>p(()=>import(`./header-groups-CB1yg78j.js`),[]));var $=`import { useMemo, type ReactNode } from "react"
import { Pencil, Trash2 } from "lucide-react"
import { DataGrid, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumns } from "@kitora/datagrid"
import type { ActionItem } from "@kitora/datagrid"
import { PersonLabel } from "@kitora/display"
import { Badge } from "@kitora/ui/badge"

interface DemoUser {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "invited" | "suspended"
  joined: string
}

const users: DemoUser[] = [
  { id: "1", name: "Alex Kim", email: "alex@example.com", role: "Owner", status: "active", joined: "2023-08-12" },
  { id: "2", name: "Grace Hopper", email: "grace@example.com", role: "Maintainer", status: "active", joined: "2024-01-04" },
  { id: "3", name: "Linus Torvalds", email: "linus@example.com", role: "Member", status: "active", joined: "2024-03-22" },
  { id: "4", name: "Mira Otieno", email: "mira@example.com", role: "Member", status: "invited", joined: "2024-05-01" },
  { id: "5", name: "Ada Lovelace", email: "ada@example.com", role: "Viewer", status: "suspended", joined: "2024-04-19" },
]

const statusBadge: Record<DemoUser["status"], ReactNode> = {
  active: (
    <Badge variant="outline" className="border-emerald-500/40 text-emerald-700 dark:text-emerald-400">
      Active
    </Badge>
  ),
  invited: (
    <Badge variant="outline" className="border-amber-500/40 text-amber-700 dark:text-amber-400">
      Invited
    </Badge>
  ),
  suspended: (
    <Badge variant="outline" className="border-rose-500/40 text-rose-700 dark:text-rose-400">
      Suspended
    </Badge>
  ),
}

// \`meta.sortFieldId\` makes a header clickable: asc, desc, off.
const columns = defineColumns<DemoUser>()([
  { id: "name", header: "Name", cell: (r) => <PersonLabel person={{ name: r.name }} secondary={r.email} />, meta: { sortFieldId: "name" } },
  { id: "role", header: "Role", cell: (r) => <span className="text-muted-foreground">{r.role}</span>, meta: { sortFieldId: "role" } },
  { id: "status", header: "Status", cell: (r) => statusBadge[r.status] },
  { id: "joined", header: "Joined", cell: (r) => <span className="font-mono text-xs text-muted-foreground">{r.joined}</span>, meta: { sortFieldId: "joined" } },
])

const rowActions = (row: DemoUser): ActionItem[] => [
  { label: "Edit", icon: Pencil, onAction: () => undefined },
  { label: "Remove", icon: Trash2, destructive: true, confirm: { title: \`Remove \${row.name}?\`, message: "They lose access to this workspace.", confirmLabel: "Remove", destructive: true, onConfirm: () => undefined } },
]

export function DataTableSortableSelectable() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: users }), [])
  return (
    <div className="w-full">
      <DataGridUIProvider>
        <DataGridProvider adapter={adapter}>
          <DataGrid columns={columns} selectable rowLabel={(r) => r.name} rightMenuActions={rowActions} contextMenuActions={rowActions} />
        </DataGridProvider>
      </DataGridUIProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>p(()=>import(`./sortable-selectable-pPEDPPWq.js`),[]));var oe={"./demos/data-table/build-your-own.tsx":ie,"./demos/data-table/cell-range.tsx":O,"./demos/data-table/compose.tsx":N,"./demos/data-table/header-groups.tsx":R,"./demos/data-table/sortable-selectable.tsx":U},se={"./demos/data-table/build-your-own.tsx":Y,"./demos/data-table/cell-range.tsx":X,"./demos/data-table/compose.tsx":Z,"./demos/data-table/header-groups.tsx":Q,"./demos/data-table/sortable-selectable.tsx":$};export{oe as modules,se as sources};