import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{F as t,R as n,Y as r,Z as i}from"./data-grid-highlight-CsF6qD_A.js";import{s as a}from"./kit-docs-DpYhPoxM.js";import{Bc as o,Cc as s,Ic as c}from"./index-q72zUtm9.js";import{n as l}from"./data-grid-Bg_HGXIE.js";import{t as u}from"./data-grid-pagination-DdVNFBDG.js";import"./kit-gallery-Atvibnty.js";import{t as d}from"./example-B8EaWveR.js";var f=e(o(),1),p=c(),m=[`ليلى حداد`,`عمر خليل`,`سارة يوسف`,`كريم ناصر`,`هدى سالم`,`يوسف عادل`],h=[`القاهرة`,`عمّان`,`بيروت`,`الرباط`,`دبي`,`تونس`],g=[`مدفوعة`,`مستحقة`,`متأخرة`],_=Array.from({length:24},(e,t)=>({id:`INV-${1040+t}`,customer:m[t%m.length]??``,city:h[t*5%h.length]??``,items:1+t*7%12,total:120+t*7919%4800,status:g[t%g.length]??``})),v=t()([{id:`id`,header:`رقم`,size:110,cell:e=>e.id,meta:{pin:`start`,sortFieldId:`id`}},{id:`customer`,header:`العميل`,size:180,cell:e=>e.customer},{id:`city`,header:`المدينة`,size:160,cell:e=>e.city},{id:`status`,header:`الحالة`,size:140,cell:e=>e.status},{id:`items`,header:`البنود`,size:110,cell:e=>e.items,meta:{align:`end`,sortFieldId:`items`}},{id:`total`,header:`المجموع`,size:140,cell:e=>e.total.toLocaleString(`en-US`),meta:{align:`end`,pin:`end`,sortFieldId:`total`}}]);function y(){return(0,p.jsx)(`div`,{dir:`rtl`,lang:`ar`,className:`flex flex-col gap-2`,children:(0,p.jsx)(i,{defaultPageSize:8,children:(0,p.jsxs)(r,{adapter:(0,f.useMemo)(()=>n({initial:_,sortOptions:[{fieldId:`id`,label:`رقم`},{fieldId:`items`,label:`البنود`},{fieldId:`total`,label:`المجموع`}]}),[]),children:[(0,p.jsx)(`div`,{className:`max-w-full overflow-x-auto`,children:(0,p.jsx)(l,{columns:v,selectable:!0})}),(0,p.jsx)(u,{pageSizeOptions:[8,16]})]})})})}var b=`import { useMemo } from "react"
import { DataGrid, DataGridPagination, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumns } from "@kitora/datagrid"

interface Invoice {
  id: string
  customer: string
  city: string
  items: number
  total: number
  status: string
}

const CUSTOMERS = ["ليلى حداد", "عمر خليل", "سارة يوسف", "كريم ناصر", "هدى سالم", "يوسف عادل"]
const CITIES = ["القاهرة", "عمّان", "بيروت", "الرباط", "دبي", "تونس"]
const STATUSES = ["مدفوعة", "مستحقة", "متأخرة"]

const invoices: Invoice[] = Array.from({ length: 24 }, (_, i) => ({
  id: \`INV-\${1040 + i}\`,
  customer: CUSTOMERS[i % CUSTOMERS.length] ?? "",
  city: CITIES[(i * 5) % CITIES.length] ?? "",
  items: 1 + ((i * 7) % 12),
  total: 120 + ((i * 7919) % 4800),
  status: STATUSES[i % STATUSES.length] ?? "",
}))

const columns = defineColumns<Invoice>()([
  { id: "id", header: "رقم", size: 110, cell: (r) => r.id, meta: { pin: "start", sortFieldId: "id" } },
  { id: "customer", header: "العميل", size: 180, cell: (r) => r.customer },
  { id: "city", header: "المدينة", size: 160, cell: (r) => r.city },
  { id: "status", header: "الحالة", size: 140, cell: (r) => r.status },
  { id: "items", header: "البنود", size: 110, cell: (r) => r.items, meta: { align: "end", sortFieldId: "items" } },
  { id: "total", header: "المجموع", size: 140, cell: (r) => r.total.toLocaleString("en-US"), meta: { align: "end", pin: "end", sortFieldId: "total" } },
])

/**
 * The grid inside \`dir="rtl"\`: columns run right to left, the \`start\`-pinned id column sticks to the right edge and the
 * \`end\`-pinned total to the left one (each with its edge shadow on the side facing the scrolling columns), \`align: "end"\`
 * puts numbers on the left, a resize drag toward the left widens a column, and the pager's chevrons point the reading way.
 */
export function RightToLeftGrid() {
  const adapter = useMemo(
    () => createInMemoryAdapter({ initial: invoices, sortOptions: [{ fieldId: "id", label: "رقم" }, { fieldId: "items", label: "البنود" }, { fieldId: "total", label: "المجموع" }] }),
    [],
  )
  return (
    <div dir="rtl" lang="ar" className="flex flex-col gap-2">
      <DataGridUIProvider defaultPageSize={8}>
        <DataGridProvider adapter={adapter}>
          <div className="max-w-full overflow-x-auto">
            <DataGrid columns={columns} selectable />
          </div>
          <DataGridPagination pageSizeOptions={[8, 16]} />
        </DataGridProvider>
      </DataGridUIProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>s(()=>import(`./rtl-CJT1C8Ng.js`),[]));function x(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{title:`Right to left`,children:'Put the grid inside `dir="rtl"` and it mirrors. `pin` and `align` take `start` and `end`, which follow the reading direction; the physical `left` and `right` keep their meaning.'}),(0,p.jsx)(d,{n:1,title:`Invoices in Arabic`,blurb:"The id column is pinned to the `start` (the right edge here) and the total to the `end`; numbers use `align: \"end\"`. Drag a header's grip toward the left to widen it; the pager's chevrons point the reading way.",code:b,children:(0,p.jsx)(y,{})})]})}export{x as component};