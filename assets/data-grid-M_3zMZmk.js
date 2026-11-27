import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{F as t,R as n,Y as r,Z as i}from"./data-grid-highlight-uXUikv3_.js";import{Ec as a,Uc as o,zc as s}from"./index-BZuUy872.js";import{n as c}from"./data-grid-D-d5NLPR.js";import{t as l}from"./data-grid-selection-indicator-BdogjHPK.js";import{n as u}from"./lib-C0E9zsFn.js";var d=e(o(),1),f=s(),p=[{id:`p1`,name:`Desk lamp`,category:`Lighting`,price:49,stock:120},{id:`p2`,name:`Oak shelf`,category:`Furniture`,price:189,stock:14},{id:`p3`,name:`Wool rug`,category:`Textiles`,price:240,stock:6},{id:`p4`,name:`Floor lamp`,category:`Lighting`,price:129,stock:32},{id:`p5`,name:`Linen throw`,category:`Textiles`,price:65,stock:48}],m=new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}),h=t()([{id:`name`,header:`Product`,cell:e=>(0,f.jsx)(`span`,{className:`font-medium`,children:e.name}),meta:{sortFieldId:`name`}},{id:`category`,header:`Category`,cell:e=>(0,f.jsx)(`span`,{className:`text-muted-foreground`,children:e.category})},{id:`price`,header:`Price`,cell:e=>m.format(e.price),meta:{sortFieldId:`price`,align:`right`}},{id:`stock`,header:`Stock`,cell:e=>e.stock,meta:{sortFieldId:`stock`,align:`right`}}]);function g(){return(0,f.jsx)(`div`,{className:`grid w-full gap-2`,children:(0,f.jsx)(i,{children:(0,f.jsxs)(r,{adapter:(0,d.useMemo)(()=>n({initial:p}),[]),children:[(0,f.jsx)(l,{className:`w-fit`}),(0,f.jsx)(c,{columns:h,selectable:!0,enableRowReorder:!1,useAdapterDefaults:!1})]})})})}var _=`import { useMemo } from "react"
import { createInMemoryAdapter, DataGrid, DataGridProvider, DataGridSelectionIndicator, DataGridUIProvider, defineColumns } from "@kitora/datagrid"

interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
}

const products: Product[] = [
  { id: "p1", name: "Desk lamp", category: "Lighting", price: 49, stock: 120 },
  { id: "p2", name: "Oak shelf", category: "Furniture", price: 189, stock: 14 },
  { id: "p3", name: "Wool rug", category: "Textiles", price: 240, stock: 6 },
  { id: "p4", name: "Floor lamp", category: "Lighting", price: 129, stock: 32 },
  { id: "p5", name: "Linen throw", category: "Textiles", price: 65, stock: 48 },
]

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

// \`cell\` draws a cell from its row; \`meta.sortFieldId\` makes the header sort by that field; \`meta.align\` lines numbers up.
const columns = defineColumns<Product>()([
  { id: "name", header: "Product", cell: (row) => <span className="font-medium">{row.name}</span>, meta: { sortFieldId: "name" } },
  { id: "category", header: "Category", cell: (row) => <span className="text-muted-foreground">{row.category}</span> },
  { id: "price", header: "Price", cell: (row) => usd.format(row.price), meta: { sortFieldId: "price", align: "right" } },
  { id: "stock", header: "Stock", cell: (row) => row.stock, meta: { sortFieldId: "stock", align: "right" } },
])

export function ProductsGrid() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: products }), [])
  return (
    <div className="grid w-full gap-2">
      <DataGridUIProvider>
        <DataGridProvider adapter={adapter}>
          {/* "N selected" with a Clear button; hidden while nothing is selected. */}
          <DataGridSelectionIndicator className="w-fit" />
          <DataGrid columns={columns} selectable enableRowReorder={false} useAdapterDefaults={false} />
        </DataGridProvider>
      </DataGridUIProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>a(()=>import(`./grid-columns-BYHw8Xyl.js`),[]));var v=[{id:`i1`,name:`Desk lamp`,stock:120,status:`active`},{id:`i2`,name:`Oak shelf`,stock:14,status:`active`},{id:`i3`,name:`Wool rug`,stock:6,status:`paused`}],y=t()([{id:`name`,header:`Item`,cell:e=>e.name,meta:{edit:{type:`text`,patch:e=>({name:String(e??``)})}}},{id:`stock`,header:`Stock`,cell:e=>e.stock,meta:{align:`right`,edit:{type:`number`,min:0,patch:e=>({stock:typeof e==`number`?e:0})}}},{id:`status`,header:`Status`,cell:e=>e.status===`active`?`Active`:`Paused`,meta:{edit:{type:`select`,options:[{value:`active`,label:`Active`},{value:`paused`,label:`Paused`}],patch:e=>e===`active`||e===`paused`?{status:e}:{}}}}]);function b(){return(0,f.jsx)(`div`,{className:`w-full`,children:(0,f.jsx)(i,{children:(0,f.jsx)(r,{adapter:(0,d.useMemo)(()=>n({initial:v}),[]),children:(0,f.jsx)(c,{columns:y,selectable:!1,enableRowReorder:!1,useAdapterDefaults:!1})})})})}var x=`import { useMemo } from "react"
import { createInMemoryAdapter, DataGrid, DataGridProvider, DataGridUIProvider, defineColumns } from "@kitora/datagrid"

interface Item {
  id: string
  name: string
  stock: number
  status: "active" | "paused"
}

const items: Item[] = [
  { id: "i1", name: "Desk lamp", stock: 120, status: "active" },
  { id: "i2", name: "Oak shelf", stock: 14, status: "active" },
  { id: "i3", name: "Wool rug", stock: 6, status: "paused" },
]

const statuses = [
  { value: "active", label: "Active" },
  { value: "paused", label: "Paused" },
]

// \`meta.edit\` makes a cell editable: the editor's type, and \`patch\`, the row change the adapter's updateRow saves.
const columns = defineColumns<Item>()([
  { id: "name", header: "Item", cell: (row) => row.name, meta: { edit: { type: "text", patch: (value) => ({ name: String(value ?? "") }) } } },
  {
    id: "stock",
    header: "Stock",
    cell: (row) => row.stock,
    meta: { align: "right", edit: { type: "number", min: 0, patch: (value) => ({ stock: typeof value === "number" ? value : 0 }) } },
  },
  {
    id: "status",
    header: "Status",
    cell: (row) => (row.status === "active" ? "Active" : "Paused"),
    meta: { edit: { type: "select", options: statuses, patch: (value) => (value === "active" || value === "paused" ? { status: value } : {}) } },
  },
])

export function InventoryGrid() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: items }), [])
  return (
    <div className="w-full">
      <DataGridUIProvider>
        <DataGridProvider adapter={adapter}>
          <DataGrid columns={columns} selectable={false} enableRowReorder={false} useAdapterDefaults={false} />
        </DataGridProvider>
      </DataGridUIProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>a(()=>import(`./grid-editing-DBto7iwb.js`),[]));var S=[{id:`s1`,person:`Alex`,mon:`Early`,tue:`Early`,wed:`Off`},{id:`s2`,person:`Grace`,mon:`Late`,tue:`Off`,wed:`Early`},{id:`s3`,person:`Mira`,mon:`Off`,tue:`Late`,wed:`Late`}],C=[{value:`Early`,label:`Early`},{value:`Late`,label:`Late`},{value:`Off`,label:`Off`}],w=e=>e===`Early`||e===`Late`||e===`Off`,T=(e,t)=>({id:e,header:t,cell:t=>t[e],meta:{edit:{type:`select`,options:C,patch:t=>w(t)?{[e]:t}:{}}}}),E=t()([{id:`person`,header:`Person`,cell:e=>e.person},T(`mon`,`Mon`),T(`tue`,`Tue`),T(`wed`,`Wed`)]);function D(){return(0,f.jsx)(`div`,{className:`w-full`,children:(0,f.jsx)(i,{children:(0,f.jsx)(r,{adapter:(0,d.useMemo)(()=>n({initial:S}),[]),children:(0,f.jsx)(c,{columns:E,cellSelection:!0,selectable:!1,enableRowReorder:!1,useAdapterDefaults:!1})})})})}var O=`import { useMemo } from "react"
import { createInMemoryAdapter, DataGrid, DataGridProvider, DataGridUIProvider, defineColumns } from "@kitora/datagrid"

type Plan = "Early" | "Late" | "Off"

interface Shift {
  id: string
  person: string
  mon: Plan
  tue: Plan
  wed: Plan
}

const shifts: Shift[] = [
  { id: "s1", person: "Alex", mon: "Early", tue: "Early", wed: "Off" },
  { id: "s2", person: "Grace", mon: "Late", tue: "Off", wed: "Early" },
  { id: "s3", person: "Mira", mon: "Off", tue: "Late", wed: "Late" },
]

const plans = [
  { value: "Early", label: "Early" },
  { value: "Late", label: "Late" },
  { value: "Off", label: "Off" },
]

const isPlan = (value: unknown): value is Plan => value === "Early" || value === "Late" || value === "Off"

// Each day is editable, so a paste can write it; the person column is not, so a paste skips it.
const day = (id: "mon" | "tue" | "wed", header: string) => ({
  id,
  header,
  cell: (row: Shift) => row[id],
  meta: { edit: { type: "select" as const, options: plans, patch: (value: unknown) => (isPlan(value) ? { [id]: value } : {}) } },
})

const columns = defineColumns<Shift>()([{ id: "person", header: "Person", cell: (row) => row.person }, day("mon", "Mon"), day("tue", "Tue"), day("wed", "Wed")])

export function ShiftsGrid() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: shifts }), [])
  return (
    <div className="w-full">
      <DataGridUIProvider>
        <DataGridProvider adapter={adapter}>
          {/* cellSelection: Shift + arrows selects a range; Mod+C copies it as TSV, Mod+V pastes TSV into it. */}
          <DataGrid columns={columns} cellSelection selectable={false} enableRowReorder={false} useAdapterDefaults={false} />
        </DataGridProvider>
      </DataGridUIProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>a(()=>import(`./grid-ranges-j8tncoaM.js`),[]));function k(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,...u(),...e.components},{Api:n,Relies:r,Snippet:i}=t;return n||j(`Api`,!0),r||j(`Relies`,!0),i||j(`Snippet`,!0),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(t.p,{children:[`This guide builds on `,(0,f.jsx)(t.a,{href:`/docs/getting-started/first-table`,children:`a first data table`}),`: a `,(0,f.jsx)(n,{name:`DataGrid`}),` inside `,(0,f.jsx)(t.code,{children:`DataGridUIProvider`}),` and `,(0,f.jsx)(t.code,{children:`DataGridProvider`}),`, fed by an adapter. Each example here uses the in-memory adapter from `,(0,f.jsx)(n,{package:`@kitora/datagrid`}),`; an adapter for your API has the same shape, and editing needs its `,(0,f.jsx)(t.code,{children:`updateRow`}),`.`]}),`
`,(0,f.jsx)(t.h2,{children:`Columns`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`defineColumns<Row>()`}),` types the column list against your row. Each column has an `,(0,f.jsx)(t.code,{children:`id`}),`, a `,(0,f.jsx)(t.code,{children:`header`}),` and a `,(0,f.jsx)(t.code,{children:`cell`}),` that draws the cell from its row, so a cell can be any element: a bold name, a formatted price. `,(0,f.jsx)(t.code,{children:`meta`}),` adds the rest: `,(0,f.jsx)(t.code,{children:`sortFieldId`}),` turns the header into a sort button for that field, and `,(0,f.jsx)(t.code,{children:`align: "right"`}),` lines numbers up on the right. A column without `,(0,f.jsx)(t.code,{children:`sortFieldId`}),` has a plain header.`]}),`
`,(0,f.jsx)(t.h2,{children:`Selection`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`selectable`}),` adds a checkbox to every row and a select-all box in the header. Shift-click a second row's checkbox to select every row between it and the last one you clicked. `,(0,f.jsx)(t.code,{children:`DataGridSelectionIndicator`}),` shows how many rows are selected, with a Clear button, and hides while nothing is.`]}),`
`,(0,f.jsx)(i,{title:`Products`,source:_,children:(0,f.jsx)(g,{})}),`
`,(0,f.jsx)(t.p,{children:`Try it: sort by price, check the first row, then Shift-click the third.`}),`
`,(0,f.jsx)(t.h2,{children:`Editing`}),`
`,(0,f.jsxs)(t.p,{children:[`A column with `,(0,f.jsx)(t.code,{children:`meta.edit`}),` edits in place. Its `,(0,f.jsx)(t.code,{children:`type`}),` picks the editor (`,(0,f.jsx)(t.code,{children:`text`}),`, `,(0,f.jsx)(t.code,{children:`number`}),` or `,(0,f.jsx)(t.code,{children:`select`}),`), and `,(0,f.jsx)(t.code,{children:`patch`}),` turns the editor's value into the change your adapter's `,(0,f.jsx)(t.code,{children:`updateRow`}),` saves. Double-click a cell to open its editor; Enter saves, Escape cancels. A select column opens straight into its list, and picking an option saves it.`]}),`
`,(0,f.jsx)(i,{title:`Inventory`,source:x,children:(0,f.jsx)(b,{})}),`
`,(0,f.jsx)(t.h2,{children:`Cell ranges and the clipboard`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`cellSelection`}),` makes the table a spreadsheet-style grid whose cells share one tab stop, the focused cell. Shift with the arrow keys selects a rectangle of cells, and Mod+C copies it as tab-separated text, the format spreadsheets copy and paste.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Mod+V goes the other way: it writes the pasted cells from the focused cell into the editable columns, through the same `,(0,f.jsx)(t.code,{children:`patch`}),` and `,(0,f.jsx)(t.code,{children:`updateRow`}),`, and skips cells it may not edit. One value pasted over a selected range fills every cell of it.`]}),`
`,(0,f.jsx)(i,{title:`Shifts`,source:O,children:(0,f.jsx)(D,{})}),`
`,(0,f.jsxs)(t.p,{children:[`Try it: click Alex's Monday, press Shift+Down and Shift+Right, copy, and paste into a spreadsheet; or copy a cell from a spreadsheet and paste it over a range here. The `,(0,f.jsx)(n,{name:`DataGrid`}),` reference lists every prop, among them `,(0,f.jsx)(t.code,{children:`copyHeaders`}),` and `,(0,f.jsx)(t.code,{children:`clipboardCodec`}),` for the clipboard.`]}),`
`,(0,f.jsx)(r,{on:[`packages/datagrid/src/ui/data-grid.tsx`,`packages/datagrid/src/ui/editable-cell.tsx`,`packages/datagrid/src/ui/use-cell-range.ts`,`packages/datagrid/src/ui/use-cell-clipboard.ts`,`packages/datagrid/src/ui/data-grid-selection-indicator.tsx`,`src/docs/examples/__tests__/data-grid.test.tsx`]})]})}function A(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(k,{...e})}):k(e)}function j(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{A as default};