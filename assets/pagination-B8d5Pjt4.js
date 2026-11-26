import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{_ as n,a as r,c as i,d as a,f as o,g as s,i as ee,l as te,o as c,s as l,u}from"./select-C08zEF1f.js";import{a as d,c as f,d as ne,i as p,l as m,n as h,r as g,s as _,t as v,u as y}from"./pagination-BaakLklH.js";import{t as b}from"./input-C016vlS1.js";import{c as x,i as S,n as re,o as C,s as ie,t as ae}from"./table-DNyf6xv8.js";import{t as w}from"./chevron-left-WGEI-OLx.js";import{n as T,t as E}from"./chevrons-right-COHNDQhJ.js";import{t as D}from"./ellipsis-rAU-_rQa.js";import{Ai as O,Bc as k,Cc as A,Ic as j,Oi as M,ki as N}from"./index-B9ukmIN1.js";var P=e({PaginationBuildYourOwn:()=>oe}),F=t(k(),1),I=j(),L=[10,20,50,1/0].map(e=>({value:e,label:Number.isFinite(e)?String(e):`All`})),R=`inline-flex h-8 min-w-8 items-center justify-center gap-1 rounded-md px-2 text-sm outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring aria-[current=page]:border aria-[current=page]:border-border aria-disabled:pointer-events-none aria-disabled:opacity-50`;function z({label:e,enabled:t,current:n,onPress:r,children:i}){return(0,I.jsx)(`li`,{children:(0,I.jsx)(`button`,{type:`button`,"aria-label":e,"aria-current":n?`page`:void 0,"aria-disabled":t?void 0:!0,"data-active":n,"data-disabled":t?void 0:``,onClick:e=>t?r():e.preventDefault(),className:R,children:i})})}function oe({totalPages:e=20,page:t,onPageChange:d,pageSize:f,onPageSizeChange:p}){let m=ne({totalPages:e,page:t,onPageChange:e=>d?.(e)}),h=(0,F.useId)(),g=(0,F.useId)(),[_,v]=(0,F.useState)(``),y=()=>{let e=Number.parseInt(_,10);Number.isNaN(e)||(m.setPage(e,void 0,`jump`),v(``))};return(0,I.jsxs)(`nav`,{"aria-label":`pagination`,className:`flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm`,children:[(0,I.jsxs)(`ul`,{className:`flex items-center gap-0.5`,children:[(0,I.jsx)(z,{label:`Go to first page`,enabled:m.hasPrevious,onPress:()=>m.first(),children:(0,I.jsx)(T,{className:`size-4 rtl:rotate-180`})}),(0,I.jsxs)(z,{label:`Go to previous page`,enabled:m.hasPrevious,onPress:()=>m.previous(),children:[(0,I.jsx)(w,{className:`size-4 rtl:rotate-180`}),(0,I.jsx)(`span`,{className:`hidden sm:block`,children:`Previous`})]}),m.items.map(e=>typeof e==`number`?(0,I.jsx)(z,{label:e===m.page?`Page ${e}, current page`:`Go to page ${e}`,enabled:!0,current:e===m.page,onPress:()=>m.setPage(e),children:e},e):(0,I.jsx)(`li`,{children:(0,I.jsxs)(`span`,{"aria-hidden":!0,className:`flex size-8 items-center justify-center`,children:[(0,I.jsx)(D,{className:`size-4`}),(0,I.jsx)(`span`,{className:`sr-only`,children:`More pages`})]})},e)),(0,I.jsxs)(z,{label:`Go to next page`,enabled:m.hasNext,onPress:()=>m.next(),children:[(0,I.jsx)(`span`,{className:`hidden sm:block`,children:`Next`}),(0,I.jsx)(M,{className:`size-4 rtl:rotate-180`})]}),(0,I.jsx)(z,{label:`Go to last page`,enabled:m.hasNext,onPress:()=>m.last(),children:(0,I.jsx)(E,{className:`size-4 rtl:rotate-180`})})]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,I.jsx)(`label`,{htmlFor:h,className:`text-muted-foreground`,children:`Go to page`}),(0,I.jsx)(b,{id:h,inputMode:`numeric`,autoComplete:`off`,value:_,placeholder:String(m.page),onChange:e=>v(e.target.value.replace(/[^0-9]/g,``)),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),y()):e.key===`Escape`&&_!==``&&(e.stopPropagation(),v(``))},className:`h-7 w-14 rounded-md border border-input bg-transparent px-2 text-center tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-ring`}),(0,I.jsx)(`button`,{type:`button`,disabled:_===``,onClick:y,className:`h-7 rounded-md border border-border px-2.5 disabled:opacity-50`,children:`Go`})]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,I.jsx)(`span`,{id:g,className:`text-muted-foreground`,children:`Per page`}),(0,I.jsxs)(o,{items:L,value:f,defaultValue:f===void 0?L[0]?.value:void 0,onValueChange:e=>{e!==null&&p?.(e)},children:[(0,I.jsxs)(s,{"aria-labelledby":g,className:`flex h-7 items-center gap-1.5 rounded-md border border-input px-2 tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-ring`,children:[(0,I.jsx)(n,{className:`flex-1 text-start`}),(0,I.jsx)(ee,{render:(0,I.jsx)(N,{className:`size-4 text-muted-foreground`})})]}),(0,I.jsx)(u,{children:(0,I.jsx)(a,{sideOffset:4,alignItemWithTrigger:!0,className:`z-50 outline-none`,children:(0,I.jsx)(te,{className:`min-w-(--anchor-width) rounded-md bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10`,children:(0,I.jsx)(i,{children:L.map(e=>(0,I.jsxs)(r,{value:e.value,className:`relative flex items-center rounded-sm py-1 ps-1.5 pe-8 tabular-nums outline-none select-none data-highlighted:bg-accent`,children:[(0,I.jsx)(l,{className:`flex-1`,children:e.label}),(0,I.jsx)(c,{className:`absolute end-2 flex size-4 items-center justify-center`,children:(0,I.jsx)(O,{className:`size-4`})})]},e.label))})})})})]})]})]})}var B=e({PaginationComposeTableFooter:()=>H}),V=Array.from({length:87},(e,t)=>({id:1001+t,total:t*37%400+20}));function H(){let[e,t]=(0,F.useState)(5),[n,r]=(0,F.useState)(1),i=Math.ceil(V.length/e),a=V.slice((n-1)*e,n*e);return(0,I.jsxs)(`div`,{className:`grid w-full max-w-xl gap-3 text-sm`,children:[(0,I.jsxs)(ae,{size:`sm`,children:[(0,I.jsx)(ie,{children:(0,I.jsxs)(x,{children:[(0,I.jsx)(C,{children:`Order`}),(0,I.jsx)(C,{className:`text-end`,children:`Total`})]})}),(0,I.jsx)(re,{children:a.map(e=>(0,I.jsxs)(x,{children:[(0,I.jsxs)(S,{children:[`#`,e.id]}),(0,I.jsxs)(S,{className:`text-end tabular-nums`,children:[`$`,e.total]})]},e.id))})]}),(0,I.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,I.jsx)(m,{label:`Rows`,value:e,options:[5,10,25],onValueChange:e=>{t(e),r(1)}}),(0,I.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[(n-1)*e+1,`–`,Math.min(n*e,V.length),` of `,V.length]})]}),(0,I.jsx)(g,{className:`mx-0 w-auto`,totalPages:i,page:n,onPageChange:r,siblingCount:0})]})]})}var U=e({PaginationControlDemo:()=>W});function W(){let[e,t]=(0,F.useState)(6);return(0,I.jsxs)(`div`,{className:`flex flex-col items-center gap-6 text-sm`,children:[(0,I.jsx)(g,{totalPages:24,defaultPage:1,showFirstLast:!0}),(0,I.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,I.jsx)(g,{totalPages:24,page:e,onPageChange:t,siblingCount:2}),(0,I.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`Page `,e,` of 24`]})]}),(0,I.jsx)(g,{totalPages:10,defaultPage:3,getPageHref:e=>`#page-${e}`})]})}var G=e({PaginationDefault:()=>K});function K(){return(0,I.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,I.jsx)(v,{children:(0,I.jsxs)(h,{children:[(0,I.jsx)(d,{children:(0,I.jsx)(y,{href:`#`})}),(0,I.jsx)(d,{children:(0,I.jsx)(_,{href:`#`,children:`1`})}),(0,I.jsx)(d,{children:(0,I.jsx)(_,{href:`#`,isActive:!0,children:`2`})}),(0,I.jsx)(d,{children:(0,I.jsx)(_,{href:`#`,children:`3`})}),(0,I.jsx)(d,{children:(0,I.jsx)(p,{})}),(0,I.jsx)(d,{children:(0,I.jsx)(f,{href:`#`})})]})})})}var q=e({PaginationJumpAndSize:()=>ce}),se=487;function ce(){let[e,t]=(0,F.useState)(1),[n,r]=(0,F.useState)(20),i=Number.isFinite(n)?Math.ceil(se/n):1;return(0,I.jsxs)(`div`,{className:`grid w-full gap-3 text-sm`,children:[(0,I.jsx)(g,{totalPages:i,page:e,onPageChange:t,showJumpToPage:!0,pageSize:n,pageSizeOptions:[10,20,50,1/0],onPageSizeChange:e=>{r(e),t(1)}}),(0,I.jsxs)(`p`,{className:`text-center text-muted-foreground tabular-nums`,"aria-live":`polite`,children:[`Page `,e,` of `,i,`, `,Number.isFinite(n)?`${n} per page`:`every row`]})]})}var J=`import { useId, useState, type ReactNode } from "react"
import { CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, MoreHorizontalIcon } from "lucide-react"
import { Input, Select, usePagination } from "@kitora/primitives/react"

/** The rows-per-page choices; \`Infinity\` is every row on one page. */
const PAGE_SIZES = [10, 20, 50, Number.POSITIVE_INFINITY].map((size) => ({ value: size, label: Number.isFinite(size) ? String(size) : "All" }))

const CHIP =
  "inline-flex h-8 min-w-8 items-center justify-center gap-1 rounded-md px-2 text-sm outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring aria-[current=page]:border aria-[current=page]:border-border aria-disabled:pointer-events-none aria-disabled:opacity-50"

/** One chip in the list: a \`<button>\` that moves the pager, kept focusable (but inert) at an edge so a keyboard user still hears it. */
function Chip({ label, enabled, current, onPress, children }: { label: string; enabled: boolean; current?: boolean; onPress: () => void; children: ReactNode }) {
  return (
    <li>
      <button
        type="button"
        aria-label={label}
        aria-current={current ? "page" : undefined}
        aria-disabled={enabled ? undefined : true}
        data-active={current}
        data-disabled={enabled ? undefined : ""}
        onClick={(event) => (enabled ? onPress() : event.preventDefault())}
        className={CHIP}
      >
        {children}
      </button>
    </li>
  )
}

/**
 * A pager built from public pieces only: \`usePagination\` (the page state and the chip range from core's \`paginationRange\`) drawn as
 * \`nav › ul › li › button\`, a "Go to page" box on the primitives' \`Input\`, and a rows-per-page \`Select\` from the primitives' parts.
 */
export function PaginationBuildYourOwn({
  totalPages = 20,
  page,
  onPageChange,
  pageSize,
  onPageSizeChange,
}: {
  totalPages?: number
  page?: number
  onPageChange?: (page: number) => void
  pageSize?: number
  onPageSizeChange?: (size: number) => void
}) {
  const pager = usePagination({ totalPages, page, onPageChange: (next) => onPageChange?.(next) })
  const jumpId = useId()
  const sizeLabelId = useId()
  const [draft, setDraft] = useState("")
  const jump = () => {
    const typed = Number.parseInt(draft, 10)
    if (Number.isNaN(typed)) return
    pager.setPage(typed, undefined, "jump")
    setDraft("")
  }
  return (
    <nav aria-label="pagination" className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
      <ul className="flex items-center gap-0.5">
        <Chip label="Go to first page" enabled={pager.hasPrevious} onPress={() => pager.first()}>
          <ChevronsLeftIcon className="size-4 rtl:rotate-180" />
        </Chip>
        <Chip label="Go to previous page" enabled={pager.hasPrevious} onPress={() => pager.previous()}>
          <ChevronLeftIcon className="size-4 rtl:rotate-180" />
          <span className="hidden sm:block">Previous</span>
        </Chip>
        {pager.items.map((item) =>
          typeof item === "number" ? (
            <Chip key={item} label={item === pager.page ? \`Page \${item}, current page\` : \`Go to page \${item}\`} enabled current={item === pager.page} onPress={() => pager.setPage(item)}>
              {item}
            </Chip>
          ) : (
            <li key={item}>
              <span aria-hidden className="flex size-8 items-center justify-center">
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">More pages</span>
              </span>
            </li>
          ),
        )}
        <Chip label="Go to next page" enabled={pager.hasNext} onPress={() => pager.next()}>
          <span className="hidden sm:block">Next</span>
          <ChevronRightIcon className="size-4 rtl:rotate-180" />
        </Chip>
        <Chip label="Go to last page" enabled={pager.hasNext} onPress={() => pager.last()}>
          <ChevronsRightIcon className="size-4 rtl:rotate-180" />
        </Chip>
      </ul>
      <div className="flex items-center gap-1.5">
        <label htmlFor={jumpId} className="text-muted-foreground">
          Go to page
        </label>
        <Input
          id={jumpId}
          inputMode="numeric"
          autoComplete="off"
          value={draft}
          placeholder={String(pager.page)}
          onChange={(event) => setDraft(event.target.value.replace(/[^0-9]/g, ""))}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault()
              jump()
            } else if (event.key === "Escape" && draft !== "") {
              event.stopPropagation()
              setDraft("")
            }
          }}
          className="h-7 w-14 rounded-md border border-input bg-transparent px-2 text-center tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button type="button" disabled={draft === ""} onClick={jump} className="h-7 rounded-md border border-border px-2.5 disabled:opacity-50">
          Go
        </button>
      </div>
      <div className="flex items-center gap-1.5">
        <span id={sizeLabelId} className="text-muted-foreground">
          Per page
        </span>
        <Select.Root<number>
          items={PAGE_SIZES}
          value={pageSize}
          defaultValue={pageSize === undefined ? PAGE_SIZES[0]?.value : undefined}
          onValueChange={(next) => {
            if (next !== null) onPageSizeChange?.(next)
          }}
        >
          <Select.Trigger aria-labelledby={sizeLabelId} className="flex h-7 items-center gap-1.5 rounded-md border border-input px-2 tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Select.Value className="flex-1 text-start" />
            <Select.Icon render={<ChevronDownIcon className="size-4 text-muted-foreground" />} />
          </Select.Trigger>
          <Select.Portal>
            <Select.Positioner sideOffset={4} alignItemWithTrigger className="z-50 outline-none">
              <Select.Popup className="min-w-(--anchor-width) rounded-md bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10">
                <Select.List>
                  {PAGE_SIZES.map((size) => (
                    <Select.Item key={size.label} value={size.value} className="relative flex items-center rounded-sm py-1 ps-1.5 pe-8 tabular-nums outline-none select-none data-highlighted:bg-accent">
                      <Select.ItemText className="flex-1">{size.label}</Select.ItemText>
                      <Select.ItemIndicator className="absolute end-2 flex size-4 items-center justify-center">
                        <CheckIcon className="size-4" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.List>
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>
      </div>
    </nav>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>A(()=>import(`./build-your-own-DOxleq-P.js`),[]));var Y=`import { useState } from "react"
import { PaginationControl, PaginationPageSize } from "@kitora/ui/pagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@kitora/ui/table"

const orders = Array.from({ length: 87 }, (_, i) => ({ id: 1001 + i, total: ((i * 37) % 400) + 20 }))

export function PaginationComposeTableFooter() {
  const [size, setSize] = useState(5)
  const [page, setPage] = useState(1)
  const pages = Math.ceil(orders.length / size)
  const rows = orders.slice((page - 1) * size, page * size)
  return (
    <div className="grid w-full max-w-xl gap-3 text-sm">
      <Table size="sm">
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead className="text-end">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((order) => (
            <TableRow key={order.id}>
              <TableCell>#{order.id}</TableCell>
              <TableCell className="text-end tabular-nums">\${order.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <PaginationPageSize
            label="Rows"
            value={size}
            options={[5, 10, 25]}
            onValueChange={(next) => {
              setSize(next)
              setPage(1)
            }}
          />
          <span className="text-muted-foreground tabular-nums">
            {(page - 1) * size + 1}–{Math.min(page * size, orders.length)} of {orders.length}
          </span>
        </div>
        <PaginationControl className="mx-0 w-auto" totalPages={pages} page={page} onPageChange={setPage} siblingCount={0} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>A(()=>import(`./compose-CSIFgq6W.js`),[]));var X=`import { useState } from "react"
import { PaginationControl } from "@kitora/ui/pagination"

export function PaginationControlDemo() {
  const [page, setPage] = useState(6)
  return (
    <div className="flex flex-col items-center gap-6 text-sm">
      <PaginationControl totalPages={24} defaultPage={1} showFirstLast />
      <div className="flex flex-col items-center gap-2">
        <PaginationControl totalPages={24} page={page} onPageChange={setPage} siblingCount={2} />
        <span className="text-muted-foreground tabular-nums">Page {page} of 24</span>
      </div>
      <PaginationControl totalPages={10} defaultPage={3} getPageHref={(p) => \`#page-\${p}\`} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>A(()=>import(`./control-C_e88voS.js`),[]));var Z=`import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@kitora/ui/pagination"

export function PaginationDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>A(()=>import(`./default-BRQQCk5x.js`),[]));var Q=`import { useState } from "react"
import { PaginationControl } from "@kitora/ui/pagination"

const total = 487

/** \`showJumpToPage\` adds "Go to page"; \`pageSizeOptions\` with \`onPageSizeChange\` adds the rows-per-page select (\`Infinity\` is "All"). */
export function PaginationJumpAndSize() {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  const totalPages = Number.isFinite(pageSize) ? Math.ceil(total / pageSize) : 1
  return (
    <div className="grid w-full gap-3 text-sm">
      <PaginationControl
        totalPages={totalPages}
        page={page}
        onPageChange={setPage}
        showJumpToPage
        pageSize={pageSize}
        pageSizeOptions={[10, 20, 50, Number.POSITIVE_INFINITY]}
        onPageSizeChange={(size) => {
          setPageSize(size)
          setPage(1)
        }}
      />
      <p className="text-center text-muted-foreground tabular-nums" aria-live="polite">
        Page {page} of {totalPages}, {Number.isFinite(pageSize) ? \`\${pageSize} per page\` : "every row"}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>A(()=>import(`./jump-and-size-qRQEp1pC.js`),[]));var le={"./demos/pagination/build-your-own.tsx":P,"./demos/pagination/compose.tsx":B,"./demos/pagination/control.tsx":U,"./demos/pagination/default.tsx":G,"./demos/pagination/jump-and-size.tsx":q},$={"./demos/pagination/build-your-own.tsx":J,"./demos/pagination/compose.tsx":Y,"./demos/pagination/control.tsx":X,"./demos/pagination/default.tsx":Z,"./demos/pagination/jump-and-size.tsx":Q};export{le as modules,$ as sources};