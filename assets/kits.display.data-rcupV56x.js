import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{a,i as o,n as s,r as c,t as l}from"./json-viewer-hRIfxd4t.js";import{t as u}from"./description-list-BGtOo23y.js";import{r as d}from"./badges-DAbO4yBh.js";import{n as f}from"./disclosure-ytpNtqof.js";import"./kit-gallery-Bph7isB2.js";import{t as p}from"./example-BGnSQG2Y.js";var m=i(),h=[[`content-type`,`application/json; charset=utf-8`],[`cache-control`,`no-store`],[`x-request-id`,`req_7f3a91c2e8d4`],[`x-ratelimit-limit`,`1000`],[`x-ratelimit-remaining`,`987`],[`x-ratelimit-reset`,`1760535060`],[`strict-transport-security`,`max-age=63072000; includeSubDomains; preload`]];function g(){return(0,m.jsx)(`div`,{className:`rounded-lg border bg-card px-3 py-1`,children:(0,m.jsx)(u,{termWidth:`12rem`,items:h.map(([e,t])=>({term:(0,m.jsx)(`span`,{className:`font-mono text-[12px]`,children:e}),id:e,value:t,mono:!0,copy:t}))})})}var _=`import { DescriptionList } from "@kitora/display"

// Response headers as an inline list: term column on the left, values right, monospace, with
// copy on hover. \`termWidth\` widens the term column to fit long header names.
const HEADERS = [
  ["content-type", "application/json; charset=utf-8"],
  ["cache-control", "no-store"],
  ["x-request-id", "req_7f3a91c2e8d4"],
  ["x-ratelimit-limit", "1000"],
  ["x-ratelimit-remaining", "987"],
  ["x-ratelimit-reset", "1760535060"],
  ["strict-transport-security", "max-age=63072000; includeSubDomains; preload"],
] as const

export function ResponseHeaders() {
  return (
    <div className="rounded-lg border bg-card px-3 py-1">
      <DescriptionList termWidth="12rem" items={HEADERS.map(([name, value]) => ({ term: <span className="font-mono text-[12px]">{name}</span>, id: name, value, mono: true, copy: value }))} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>r(()=>import(`./data-headers-DGdIGyoQ.js`),[]));var v=e(n(),1),y={id:`ord_01JABX7Q3N9M`,object:`order`,status:`fulfilled`,livemode:!1,created:1760535e3,currency:`usd`,amount_total:12850,customer:{id:`cus_8812`,name:`Ada Lovelace`,email:`ada@acme.dev`,address:{line1:`12 Analytical Row`,city:`London`,postal_code:`EC1A 1BB`,country:`GB`},tags:[`vip`,`beta`]},items:[{sku:`KB-75-BLK`,name:`Mechanical keyboard 75%`,quantity:1,unit_amount:9900,discounts:[]},{sku:`CBL-USB-C`,name:`Braided USB-C cable`,quantity:2,unit_amount:1200,discounts:[{code:`BUNDLE10`,amount:240}]},{sku:`KCP-PBT`,name:`PBT keycap set`,quantity:1,unit_amount:790,discounts:[]}],payments:[{id:`pi_3Q0`,method:`card`,brand:`visa`,last4:`4242`,captured:!0,risk:{score:12,level:`normal`}}],shipping:{carrier:`DHL`,service:`express`,tracking:`JD014600006281`,eta:`2026-10-17`},metadata:{"order-source":`web`,campaign:null,"a/b":`checkout-v2`},webhooks:[{event:`order.created`,delivered:!0,attempts:1},{event:`order.paid`,delivered:!0,attempts:1},{event:`order.fulfilled`,delivered:!1,attempts:3,last_error:`504 Gateway Timeout from https://hooks.example.com/orders — the endpoint took longer than 10 seconds to answer and the delivery will be retried with exponential backoff`}]},b={js:`JS`,pointer:`Pointer`,jq:`jq`};function x(e){return s.includes(e)}function S(){let[e,t]=(0,v.useState)(`js`),[n,r]=(0,v.useState)({path:[],value:y}),i=o(n.value),d=i===`object`||i===`array`;return(0,m.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-2 text-[12px] text-muted-foreground`,children:[(0,m.jsx)(`span`,{children:`Path style`}),(0,m.jsx)(f,{variant:`segmented`,label:`Path style`,value:e,onValueChange:e=>{x(e)&&t(e)},tabs:s.map(e=>({value:e,label:b[e]}))})]}),(0,m.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_17rem]`,children:[(0,m.jsx)(l,{value:y,rootName:`response`,pathFormat:e,maxHeight:420,onSelect:(e,t)=>r({path:e,value:t})}),(0,m.jsxs)(`aside`,{className:`rounded-lg border bg-card p-3`,"aria-label":`Selected node`,children:[(0,m.jsx)(`div`,{className:`mb-1 text-[11.5px] font-medium tracking-wide text-muted-foreground uppercase`,children:`Selected`}),(0,m.jsx)(u,{layout:`stacked`,items:[{term:`Path`,value:c(n.path,e),mono:!0,copy:c(n.path,e)},{term:`Type`,value:i},{term:d?`Size`:`Value`,value:d?a(n.value):(0,m.jsx)(`span`,{className:`break-all`,children:JSON.stringify(n.value)}),mono:!0},{term:`Depth`,value:n.path.length}]}),(0,m.jsx)(`p`,{className:`mt-2 text-[11.5px] text-muted-foreground`,children:`Click a row, or focus the tree and press Enter. Try searching "4242" or "timeout".`})]})]})]})}var C=`import { useState } from "react"
import { DescriptionList, DisplayTabs, JSON_PATH_FORMATS, JsonViewer, formatJsonPath, jsonKind, jsonPreview, type JsonPath, type JsonPathFormat, type JsonValue } from "@kitora/display"

/** A realistic API response: an order with a customer, line items, payments and webhooks. */
const ORDER_RESPONSE: JsonValue = {
  id: "ord_01JABX7Q3N9M",
  object: "order",
  status: "fulfilled",
  livemode: false,
  created: 1760535000,
  currency: "usd",
  amount_total: 12850,
  customer: {
    id: "cus_8812",
    name: "Ada Lovelace",
    email: "ada@acme.dev",
    address: { line1: "12 Analytical Row", city: "London", postal_code: "EC1A 1BB", country: "GB" },
    tags: ["vip", "beta"],
  },
  items: [
    { sku: "KB-75-BLK", name: "Mechanical keyboard 75%", quantity: 1, unit_amount: 9900, discounts: [] },
    { sku: "CBL-USB-C", name: "Braided USB-C cable", quantity: 2, unit_amount: 1200, discounts: [{ code: "BUNDLE10", amount: 240 }] },
    { sku: "KCP-PBT", name: "PBT keycap set", quantity: 1, unit_amount: 790, discounts: [] },
  ],
  payments: [{ id: "pi_3Q0", method: "card", brand: "visa", last4: "4242", captured: true, risk: { score: 12, level: "normal" } }],
  shipping: { carrier: "DHL", service: "express", tracking: "JD014600006281", eta: "2026-10-17" },
  metadata: { "order-source": "web", campaign: null, "a/b": "checkout-v2" },
  webhooks: [
    { event: "order.created", delivered: true, attempts: 1 },
    { event: "order.paid", delivered: true, attempts: 1 },
    { event: "order.fulfilled", delivered: false, attempts: 3, last_error: "504 Gateway Timeout from https://hooks.example.com/orders — the endpoint took longer than 10 seconds to answer and the delivery will be retried with exponential backoff" },
  ],
}

// An API response inspector: the tree on the left (search, expand / collapse all, copy path and
// value on every row), the selected node's facts on the right. The segmented tabs pick the path
// style that "Copy path" uses and the side panel shows.
const FORMAT_LABEL: Readonly<Record<JsonPathFormat, string>> = { js: "JS", pointer: "Pointer", jq: "jq" }

function isPathFormat(value: string): value is JsonPathFormat {
  return (JSON_PATH_FORMATS as readonly string[]).includes(value)
}

export function ApiInspector() {
  const [format, setFormat] = useState<JsonPathFormat>("js")
  const [selected, setSelected] = useState<{ readonly path: JsonPath; readonly value: JsonValue }>({ path: [], value: ORDER_RESPONSE })
  const kind = jsonKind(selected.value)
  const container = kind === "object" || kind === "array"
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
        <span>Path style</span>
        <DisplayTabs
          variant="segmented"
          label="Path style"
          value={format}
          onValueChange={(v) => {
            if (isPathFormat(v)) setFormat(v)
          }}
          tabs={JSON_PATH_FORMATS.map((f) => ({ value: f, label: FORMAT_LABEL[f] }))}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <JsonViewer value={ORDER_RESPONSE} rootName="response" pathFormat={format} maxHeight={420} onSelect={(path, value) => setSelected({ path, value })} />
        <aside className="rounded-lg border bg-card p-3" aria-label="Selected node">
          <div className="mb-1 text-[11.5px] font-medium tracking-wide text-muted-foreground uppercase">Selected</div>
          <DescriptionList
            layout="stacked"
            items={[
              { term: "Path", value: formatJsonPath(selected.path, format), mono: true, copy: formatJsonPath(selected.path, format) },
              { term: "Type", value: kind },
              {
                term: container ? "Size" : "Value",
                value: container ? jsonPreview(selected.value) : <span className="break-all">{JSON.stringify(selected.value)}</span>,
                mono: true,
              },
              { term: "Depth", value: selected.path.length },
            ]}
          />
          <p className="mt-2 text-[11.5px] text-muted-foreground">Click a row, or focus the tree and press Enter. Try searching "4242" or "timeout".</p>
        </aside>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>r(()=>import(`./data-inspector-Cml_nePZ.js`),[]));function w(){return(0,m.jsx)(`div`,{className:`rounded-lg border bg-card p-3`,children:(0,m.jsx)(u,{layout:`grid`,columns:3,items:[{term:`Status`,value:(0,m.jsx)(d,{tone:`success`,dot:!0,children:`200 OK`})},{term:`Method`,value:(0,m.jsx)(d,{tone:`info`,variant:`outline`,children:`GET`})},{term:`Duration`,value:(0,m.jsx)(`span`,{className:`tabular-nums`,children:`184 ms`}),hint:`Time to last byte, measured at the edge`},{term:`URL`,value:`https://api.acme.dev/v1/orders/ord_01JABX7Q3N9M?expand[]=customer`,mono:!0,copy:`https://api.acme.dev/v1/orders/ord_01JABX7Q3N9M?expand[]=customer`,wide:!0},{term:`Request id`,value:`req_7f3a91c2e8d4`,mono:!0,copy:`req_7f3a91c2e8d4`},{term:`Idempotency key`,value:`b3c1-49de-a0f2`,mono:!0,copy:`b3c1-49de-a0f2`},{term:`API version`,value:`2026-09-30`,mono:!0},{term:`Client`,value:`acme-node/4.2.0`},{term:`Source IP`,value:`203.0.113.42`,mono:!0,copy:`203.0.113.42`},{term:`Webhook`,value:(0,m.jsx)(d,{tone:`warning`,dot:!0,pulse:!0,children:`Retrying`})}]})})}var T=`import { DescriptionList, StatusBadge } from "@kitora/display"

// The facts of one API request in a three-column grid: ids are monospace with a copy button on
// hover, status is a badge, the URL spans the full width.
export function RequestFacts() {
  return (
    <div className="rounded-lg border bg-card p-3">
      <DescriptionList
        layout="grid"
        columns={3}
        items={[
          { term: "Status", value: <StatusBadge tone="success" dot>200 OK</StatusBadge> },
          { term: "Method", value: <StatusBadge tone="info" variant="outline">GET</StatusBadge> },
          { term: "Duration", value: <span className="tabular-nums">184 ms</span>, hint: "Time to last byte, measured at the edge" },
          { term: "URL", value: "https://api.acme.dev/v1/orders/ord_01JABX7Q3N9M?expand[]=customer", mono: true, copy: "https://api.acme.dev/v1/orders/ord_01JABX7Q3N9M?expand[]=customer", wide: true },
          { term: "Request id", value: "req_7f3a91c2e8d4", mono: true, copy: "req_7f3a91c2e8d4" },
          { term: "Idempotency key", value: "b3c1-49de-a0f2", mono: true, copy: "b3c1-49de-a0f2" },
          { term: "API version", value: "2026-09-30", mono: true },
          { term: "Client", value: "acme-node/4.2.0" },
          { term: "Source IP", value: "203.0.113.42", mono: true, copy: "203.0.113.42" },
          { term: "Webhook", value: <StatusBadge tone="warning" dot pulse>Retrying</StatusBadge> },
        ]}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>r(()=>import(`./data-request-CCAgu6zc.js`),[]));function E(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`API inspector`,children:`What a developer console shows for one request: the response as a searchable tree, the request's facts, and the headers. The tree is a real ARIA tree: ↑/↓ between rows, ←/→ fold, Enter selects, * opens siblings.`}),(0,m.jsx)(p,{n:1,title:`Response tree`,blurb:`Search keys and values (Enter / Shift+Enter step through matches), copy any row's path or value, pick the path style.`,code:C,children:(0,m.jsx)(S,{})}),(0,m.jsx)(p,{n:2,title:`Request facts`,blurb:`A grid description list: badges for status, monospace ids with copy on hover, a full-width URL.`,code:T,children:(0,m.jsx)(w,{})}),(0,m.jsx)(p,{n:3,title:`Response headers`,blurb:`The inline layout with a wider term column.`,code:_,children:(0,m.jsx)(g,{})})]})}export{E as component};