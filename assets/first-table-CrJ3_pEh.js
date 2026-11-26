import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{F as t,R as n,Y as r,Z as i}from"./data-grid-highlight-DYn2QRdt.js";import{Bc as a,Cc as o,Ic as s}from"./index-9y5uwRd3.js";import{n as c}from"./data-grid-B2EbDNhG.js";import{n as l}from"./lib-NYJzi901.js";var u=e(a(),1),d=s(),f=[{id:`inv-1`,customer:`Initech`,amount:2950},{id:`inv-2`,customer:`Acme`,amount:1200},{id:`inv-3`,customer:`Globex`,amount:480}],p=t()([{id:`customer`,header:`Customer`,cell:e=>e.customer,meta:{sortFieldId:`customer`}},{id:`amount`,header:`Amount`,cell:e=>`$${e.amount.toLocaleString(`en-US`)}`,meta:{sortFieldId:`amount`,align:`right`}}]);function m(){return(0,d.jsx)(`div`,{className:`w-full max-w-md`,children:(0,d.jsx)(i,{children:(0,d.jsx)(r,{adapter:(0,u.useMemo)(()=>n({initial:f}),[]),children:(0,d.jsx)(c,{columns:p,useAdapterDefaults:!1})})})})}var h=`import { useMemo } from "react"
import { createInMemoryAdapter, DataGrid, DataGridProvider, DataGridUIProvider, defineColumns } from "@kitora/datagrid"

interface Invoice {
  id: string
  customer: string
  amount: number
}

const invoices: Invoice[] = [
  { id: "inv-1", customer: "Initech", amount: 2950 },
  { id: "inv-2", customer: "Acme", amount: 1200 },
  { id: "inv-3", customer: "Globex", amount: 480 },
]

const columns = defineColumns<Invoice>()([
  { id: "customer", header: "Customer", cell: (row) => row.customer, meta: { sortFieldId: "customer" } },
  { id: "amount", header: "Amount", cell: (row) => \`$\${row.amount.toLocaleString("en-US")}\`, meta: { sortFieldId: "amount", align: "right" } },
])

export function FirstTable() {
  // The in-memory adapter sorts, filters and pages in the browser; a server adapter has the same shape.
  const adapter = useMemo(() => createInMemoryAdapter({ initial: invoices }), [])
  return (
    <div className="w-full max-w-md">
      <DataGridUIProvider>
        <DataGridProvider adapter={adapter}>
          <DataGrid columns={columns} useAdapterDefaults={false} />
        </DataGridProvider>
      </DataGridUIProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>o(()=>import(`./first-table-DPIsOaNr.js`),[]));function g(e){let t={p:`p`,...l(),...e.components},{Api:n,Relies:r,Snippet:i}=t;return n||v(`Api`,!0),r||v(`Relies`,!0),i||v(`Snippet`,!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[`A data table from `,(0,d.jsx)(n,{package:`@kitora/datagrid`}),`: the columns say how each cell draws and which field a header sorts by, and an adapter answers the grid's requests. The in-memory adapter here sorts, filters and pages in the browser; one for your API has the same shape.`]}),`
`,(0,d.jsx)(i,{title:`Invoices`,source:h,children:(0,d.jsx)(m,{})}),`
`,(0,d.jsxs)(t.p,{children:[`Click a header to sort by it. The `,(0,d.jsx)(n,{name:`DataGrid`}),` reference lists every prop: selection, editing, cell ranges, pagination and more.`]}),`
`,(0,d.jsx)(r,{on:[`packages/datagrid/src/index.ts`,`src/docs/examples/__tests__/getting-started.test.tsx`]})]})}function _(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(g,{...e})}):g(e)}function v(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{_ as default};