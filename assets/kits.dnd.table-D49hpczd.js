import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,_i as i,zc as a}from"./index-BZuUy872.js";import{t as o}from"./env-C9SKLn5e.js";import{n as s}from"./roving-z5KK9ZhH.js";import{d as c,t as l,u}from"./kit-Dinrg2gH.js";import{n as d}from"./drag-handle-ba6uqifW.js";import{t as f}from"./sortable-list-BLfvtyaT.js";import{t as p}from"./move-menu-O41h4ZTV.js";import"./kit-gallery-BBavj2rC.js";import{t as m}from"./example-B67lLz1F.js";import{r as h}from"./devtools-C6ydKhjy.js";var g=e(r(),1),_=a(),v=`px-2 py-1 align-middle`;function y({row:e,id:t,index:n,container:r,table:a,roving:o}){let s=a.isDisabled?.(e)??!1,{ref:c,isDragging:l}=u({id:t,container:r,index:n,data:t,disabled:s,dropDisabled:!1}),f=a.itemLabel?.(e)??t,m=o.itemProps(t);return(0,_.jsxs)(`tr`,{ref:c,"data-item":t,"data-dnd-label":f,"aria-disabled":s||void 0,className:i(`border-t bg-card data-[dnd-pressing]:bg-accent`,s&&`opacity-60`,a.rowClassName?.(e,{index:n,isDragging:l})),children:[(0,_.jsx)(`td`,{className:`w-7 py-0 pr-0 pl-1 align-middle`,children:(0,_.jsxs)(`span`,{className:`inline-flex items-center`,children:[(0,_.jsx)(d,{disabled:s,label:`Drag ${f}`,...m}),a.keyboard===`menu`&&!s?(0,_.jsx)(p,{id:t,label:f,tabIndex:m.tabIndex}):null]})}),a.columns.map(t=>(0,_.jsx)(`td`,{className:i(v,t.className),children:t.cell(e)},t.id))]})}function b(e){let t=(0,g.useId)(),n=e.id??t,{items:r,onMove:a}=c({items:e.items,defaultItems:e.defaultItems,getId:e.getId,onItemsChange:e.onItemsChange}),u=s(r.map(e.getId),{orientation:`vertical`});return(0,_.jsx)(l,{collision:f,...e.providerProps,onMove:a,children:(0,_.jsxs)(`table`,{className:i(`w-full border-collapse overflow-hidden rounded-lg border text-[13px]`,e.className),children:[(0,_.jsx)(`caption`,{className:`sr-only`,children:e.label}),(0,_.jsx)(`thead`,{className:`bg-muted/50 text-left text-xs text-muted-foreground`,children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{scope:`col`,className:`w-7`,children:(0,_.jsx)(`span`,{className:`sr-only`,children:`Reorder`})}),e.columns.map(e=>(0,_.jsx)(`th`,{scope:`col`,className:i(v,`font-medium`,e.className),children:e.header},e.id))]})}),(0,_.jsx)(`tbody`,{[o]:e.keyboard??`grab-arrow`,onKeyDown:u.onKeyDown,onFocus:u.onFocus,children:r.map((t,r)=>{let i=e.getId(t);return(0,_.jsx)(y,{row:t,id:i,index:r,container:n,table:e,roving:u},i)})})]})})}var x=[{id:`INV-101`,customer:`Northwind`,status:`Paid`,amount:1250},{id:`INV-102`,customer:`Contoso`,status:`Due`,amount:480},{id:`INV-103`,customer:`Fabrikam`,status:`Draft`,amount:3100},{id:`INV-104`,customer:`Tailspin`,status:`Paid`,amount:92},{id:`INV-105`,customer:`Wingtip`,status:`Due`,amount:760}],S=new Intl.NumberFormat(`en`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}),C=[{id:`id`,header:`Invoice`,cell:e=>(0,_.jsx)(`span`,{className:`font-mono text-xs`,children:e.id}),className:`w-24`},{id:`customer`,header:`Customer`,cell:e=>e.customer},{id:`status`,header:`Status`,cell:e=>e.status,className:`w-20`},{id:`amount`,header:`Amount`,cell:e=>S.format(e.amount),className:`w-24 text-right tabular-nums`}];function w({name:e,keyboard:t,locked:n}){let[r,i]=(0,g.useState)(x.map(e=>e.id)),[a,o]=(0,g.useState)(null);return(0,_.jsxs)(`div`,{"data-demo":e,className:`flex max-w-xl flex-col gap-2`,children:[(0,_.jsx)(b,{id:e,label:`${e} invoices`,defaultItems:x,getId:e=>e.id,itemLabel:e=>e.id,columns:C,keyboard:t,isDisabled:n?e=>e.status===`Paid`:void 0,onItemsChange:(e,t)=>{i(e.map(e=>e.id)),o(t)}}),(0,_.jsxs)(T,{name:e,children:[`order: `,r.join(`, `),a?` · last: ${h(a)}`:``]})]})}function T({name:e,children:t}){return(0,_.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function E(){return(0,_.jsx)(w,{name:`table`})}var D=`import { type ReactNode, useState } from "react"
import { type MoveOp, SortableTable, type SortableTableColumn } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Reorder table rows: D45. Drag a row by its grip, or focus a grip and use Space and the arrows; the rows below open the gap.

interface Invoice {
  readonly id: string
  readonly customer: string
  readonly status: "Paid" | "Due" | "Draft"
  readonly amount: number
}

const INVOICES: readonly Invoice[] = [
  { id: "INV-101", customer: "Northwind", status: "Paid", amount: 1250 },
  { id: "INV-102", customer: "Contoso", status: "Due", amount: 480 },
  { id: "INV-103", customer: "Fabrikam", status: "Draft", amount: 3100 },
  { id: "INV-104", customer: "Tailspin", status: "Paid", amount: 92 },
  { id: "INV-105", customer: "Wingtip", status: "Due", amount: 760 },
]

const money = new Intl.NumberFormat("en", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

const COLUMNS: readonly SortableTableColumn<Invoice>[] = [
  { id: "id", header: "Invoice", cell: (r) => <span className="font-mono text-xs">{r.id}</span>, className: "w-24" },
  { id: "customer", header: "Customer", cell: (r) => r.customer },
  { id: "status", header: "Status", cell: (r) => r.status, className: "w-20" },
  { id: "amount", header: "Amount", cell: (r) => money.format(r.amount), className: "w-24 text-right tabular-nums" },
]

function TableDemo({ name, keyboard, locked }: { readonly name: string; readonly keyboard?: "menu"; readonly locked?: boolean }) {
  const [order, setOrder] = useState<readonly string[]>(INVOICES.map((r) => r.id))
  const [last, setLast] = useState<MoveOp | null>(null)
  return (
    <div data-demo={name} className="flex max-w-xl flex-col gap-2">
      <SortableTable
        id={name}
        label={\`\${name} invoices\`}
        defaultItems={INVOICES}
        getId={(r) => r.id}
        itemLabel={(r) => r.id}
        columns={COLUMNS}
        keyboard={keyboard}
        isDisabled={locked ? (r) => r.status === "Paid" : undefined}
        onItemsChange={(rows, op) => {
          setOrder(rows.map((r) => r.id))
          setLast(op)
        }}
      />
      <DemoStatus name={name}>
        order: {order.join(", ")}
        {last ? \` · last: \${formatOp(last)}\` : ""}
      </DemoStatus>
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

export function Invoices() {
  return <TableDemo name="table" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>n(()=>import(`./table-table-Blut8XJO.js`),[]));var O=[{id:`INV-101`,customer:`Northwind`,status:`Paid`,amount:1250},{id:`INV-102`,customer:`Contoso`,status:`Due`,amount:480},{id:`INV-103`,customer:`Fabrikam`,status:`Draft`,amount:3100},{id:`INV-104`,customer:`Tailspin`,status:`Paid`,amount:92},{id:`INV-105`,customer:`Wingtip`,status:`Due`,amount:760}],k=new Intl.NumberFormat(`en`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}),A=[{id:`id`,header:`Invoice`,cell:e=>(0,_.jsx)(`span`,{className:`font-mono text-xs`,children:e.id}),className:`w-24`},{id:`customer`,header:`Customer`,cell:e=>e.customer},{id:`status`,header:`Status`,cell:e=>e.status,className:`w-20`},{id:`amount`,header:`Amount`,cell:e=>k.format(e.amount),className:`w-24 text-right tabular-nums`}];function j({name:e,keyboard:t,locked:n}){let[r,i]=(0,g.useState)(O.map(e=>e.id)),[a,o]=(0,g.useState)(null);return(0,_.jsxs)(`div`,{"data-demo":e,className:`flex max-w-xl flex-col gap-2`,children:[(0,_.jsx)(b,{id:e,label:`${e} invoices`,defaultItems:O,getId:e=>e.id,itemLabel:e=>e.id,columns:A,keyboard:t,isDisabled:n?e=>e.status===`Paid`:void 0,onItemsChange:(e,t)=>{i(e.map(e=>e.id)),o(t)}}),(0,_.jsxs)(M,{name:e,children:[`order: `,r.join(`, `),a?` · last: ${h(a)}`:``]})]})}function M({name:e,children:t}){return(0,_.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function N(){return(0,_.jsx)(j,{name:`table-menu`,keyboard:`menu`,locked:!0})}var P=`import { type ReactNode, useState } from "react"
import { type MoveOp, SortableTable, type SortableTableColumn } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Locked rows and the Move menu: D45, D29, D109. Paid invoices are locked; every other row has a Move menu.

interface Invoice {
  readonly id: string
  readonly customer: string
  readonly status: "Paid" | "Due" | "Draft"
  readonly amount: number
}

const INVOICES: readonly Invoice[] = [
  { id: "INV-101", customer: "Northwind", status: "Paid", amount: 1250 },
  { id: "INV-102", customer: "Contoso", status: "Due", amount: 480 },
  { id: "INV-103", customer: "Fabrikam", status: "Draft", amount: 3100 },
  { id: "INV-104", customer: "Tailspin", status: "Paid", amount: 92 },
  { id: "INV-105", customer: "Wingtip", status: "Due", amount: 760 },
]

const money = new Intl.NumberFormat("en", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

const COLUMNS: readonly SortableTableColumn<Invoice>[] = [
  { id: "id", header: "Invoice", cell: (r) => <span className="font-mono text-xs">{r.id}</span>, className: "w-24" },
  { id: "customer", header: "Customer", cell: (r) => r.customer },
  { id: "status", header: "Status", cell: (r) => r.status, className: "w-20" },
  { id: "amount", header: "Amount", cell: (r) => money.format(r.amount), className: "w-24 text-right tabular-nums" },
]

function TableDemo({ name, keyboard, locked }: { readonly name: string; readonly keyboard?: "menu"; readonly locked?: boolean }) {
  const [order, setOrder] = useState<readonly string[]>(INVOICES.map((r) => r.id))
  const [last, setLast] = useState<MoveOp | null>(null)
  return (
    <div data-demo={name} className="flex max-w-xl flex-col gap-2">
      <SortableTable
        id={name}
        label={\`\${name} invoices\`}
        defaultItems={INVOICES}
        getId={(r) => r.id}
        itemLabel={(r) => r.id}
        columns={COLUMNS}
        keyboard={keyboard}
        isDisabled={locked ? (r) => r.status === "Paid" : undefined}
        onItemsChange={(rows, op) => {
          setOrder(rows.map((r) => r.id))
          setLast(op)
        }}
      />
      <DemoStatus name={name}>
        order: {order.join(", ")}
        {last ? \` · last: \${formatOp(last)}\` : ""}
      </DemoStatus>
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

export function LockedInvoices() {
  return <TableDemo name="table-menu" keyboard="menu" locked />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>n(()=>import(`./table-menu-Dbvg213X.js`),[]));function F(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Sortable tables`,children:`Row reorder on real table markup: rows keep their cells and column semantics, drag by the grip in the first cell, and the preview keeps each column's width.`}),(0,_.jsx)(m,{n:1,title:`Reorder table rows`,blurb:`D45. Drag a row by its grip, or focus a grip and use Space and the arrows; the rows below open the gap.`,code:D,children:(0,_.jsx)(E,{})}),(0,_.jsx)(m,{n:2,title:`Locked rows and the Move menu`,blurb:`D45, D29, D109. Paid invoices are locked; every other row has a Move menu.`,code:P,children:(0,_.jsx)(N,{})})]})}export{F as component};