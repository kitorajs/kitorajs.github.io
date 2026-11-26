import{a as e,n as t,t as n}from"./route-overlays-CD6WwwDQ.js";import{s as r}from"./kit-docs-DpYhPoxM.js";import{i,n as a}from"./parts-CPD-RYH5.js";import{Cc as o,Ic as s,wn as c}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as l}from"./example-B8EaWveR.js";var u=s(),d=[{id:101,total:`$1,200`},{id:102,total:`$480`}];function f({params:e}){let t=d.find(t=>t.id===e.id);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Invoice #${e.id}`}),(0,u.jsx)(a,{children:(0,u.jsxs)(`p`,{className:`text-[13px]`,children:[`Total `,t?.total??`not found`]})})]})}var p=e(f,{key:`invoice`,surface:`center`,params:e=>typeof e.invoice==`number`?{id:e.invoice}:null,toSearch:({id:e})=>({invoice:e})});function m(){return(0,u.jsx)(c,{children:(0,u.jsx)(t,{overlays:[p],children:(0,u.jsx)(`ul`,{className:`flex gap-3 text-[13px]`,children:d.map(e=>(0,u.jsx)(`li`,{children:(0,u.jsxs)(n,{overlay:p,params:{id:e.id},className:`text-primary underline-offset-2 hover:underline`,children:[`Invoice #`,e.id]})},e.id))})})})}var h=`import { OverlayBody, OverlayHeader, OverlayUiProvider, RouteOverlayLink, RouteOverlays, routeOverlay, type RouteOverlayBodyProps, type SearchRecord } from "@kitora/overlay"

// stub: replace with your API
const INVOICES: readonly { readonly id: number; readonly total: string }[] = [
  { id: 101, total: "$1,200" },
  { id: 102, total: "$480" },
]

function InvoiceBody({ params }: RouteOverlayBodyProps<{ readonly id: number }>) {
  const invoice = INVOICES.find((i) => i.id === params.id)
  // the header names the dialog and adds a × that closes it (the URL loses ?overlay)
  return (
    <>
      <OverlayHeader title={\`Invoice #\${params.id}\`} />
      <OverlayBody>
        <p className="text-[13px]">Total {invoice?.total ?? "not found"}</p>
      </OverlayBody>
    </>
  )
}

// Open while the URL says ?overlay=invoice&invoice=101: copy the link, reload, or press Back to close.
const invoiceOverlay = routeOverlay(InvoiceBody, {
  key: "invoice",
  surface: "center",
  params: (s: SearchRecord) => (typeof s.invoice === "number" ? { id: s.invoice } : null),
  toSearch: ({ id }) => ({ invoice: id }),
})

export function BasicUrlModal() {
  return (
    <OverlayUiProvider>
      <RouteOverlays overlays={[invoiceOverlay]}>
        <ul className="flex gap-3 text-[13px]">
          {INVOICES.map((i) => (
            <li key={i.id}>
              <RouteOverlayLink overlay={invoiceOverlay} params={{ id: i.id }} className="text-primary underline-offset-2 hover:underline">
                Invoice #{i.id}
              </RouteOverlayLink>
            </li>
          ))}
        </ul>
      </RouteOverlays>
    </OverlayUiProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>o(()=>import(`./url-modal-C0YRfUdH.js`),[]));function g(){return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(r,{title:`Basics: a modal from the URL`,children:`The modal is open because the address bar says so: copy the link and it opens for whoever follows it, reload and it is still there, press Back and it closes.`}),(0,u.jsx)(l,{n:1,title:`Modal opened from the URL`,blurb:`Click an invoice: the URL gains ?overlay=invoice&invoice=…; Back closes it.`,code:h,children:(0,u.jsx)(m,{})})]})}export{g as component};