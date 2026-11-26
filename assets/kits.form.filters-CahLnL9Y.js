import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{A as a,c as o}from"./field-config-17kME8Vl.js";import{a as s}from"./fields-CwxxBZgA.js";import{n as c,r as l,t as u}from"./url-state-BMbedooj.js";import{a as d,n as f}from"./choice-D87pJpHO.js";import{t as p}from"./stepper-BXoPBIij.js";import{t as m}from"./example-BGnSQG2Y.js";import"./demos-Ds1NfSaA.js";var h=e(n(),1),g=i(),_={q:``,category:[],maxPrice:500,sort:`relevance`},v=[{value:`lamps`,label:`Lamps`},{value:`chairs`,label:`Chairs`},{value:`tables`,label:`Tables`}],y=[{value:`relevance`,label:`Relevance`},{value:`price`,label:`Price`}],b=50,x=[{name:`Arc floor lamp`,category:`lamps`,price:189},{name:`Desk lamp`,category:`lamps`,price:49},{name:`Lounge chair`,category:`chairs`,price:420},{name:`Dining chair`,category:`chairs`,price:95},{name:`Oak table`,category:`tables`,price:640},{name:`Side table`,category:`tables`,price:120}];function S(e){if(typeof e!=`object`||!e)return _;let t=t=>t in e?Reflect.get(e,t):void 0,n=t(`q`),r=t(`category`),i=t(`maxPrice`),a=t(`sort`);return{q:typeof n==`string`?n:_.q,category:Array.isArray(r)?r.filter(e=>typeof e==`string`):_.category,maxPrice:typeof i==`number`?i:_.maxPrice,sort:typeof a==`string`?a:_.sort}}var C=u();function w(){let[e,t]=(0,h.useState)(_),n=a({defaultValues:_,plugins:[l({adapter:C}),c({onChange:e=>t(S(e))})]}),r=x.filter(t=>t.name.toLowerCase().includes(e.q.toLowerCase())&&(e.category.length===0||e.category.includes(t.category))&&t.price<=e.maxPrice).toSorted((t,n)=>e.sort===`price`?t.price-n.price:0);return(0,g.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]`,children:[(0,g.jsxs)(o,{form:n,children:[(0,g.jsx)(s,{name:`q`,label:`Search`,placeholder:`lamp, chair…`}),(0,g.jsx)(f,{name:`category`,label:`Category`,options:v}),(0,g.jsx)(p,{name:`maxPrice`,label:`Max price`,min:0,max:1e3,step:b}),(0,g.jsx)(d,{name:`sort`,label:`Sort`,options:y})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`p`,{className:`mb-2 text-xs text-muted-foreground`,children:[r.length,` results · the URL holds every non-default filter; try Back after a few changes.`]}),(0,g.jsx)(`ul`,{className:`divide-y divide-border rounded-md border border-border text-sm`,children:r.map(e=>(0,g.jsxs)(`li`,{className:`flex justify-between px-3 py-1.5`,children:[(0,g.jsx)(`span`,{children:e.name}),(0,g.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[`$`,e.price]})]},e.name))})]})]})}var T=`import { useState } from "react"
import { createHistorySearchAdapter, live, urlState } from "@kitora/form/core"
import { CheckboxGroupField, SegmentedField, NumberStepperField, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Filters = { q: string; category: string[]; maxPrice: number; sort: string }

const defaultValues: Filters = { q: "", category: [], maxPrice: 500, sort: "relevance" }
const CATEGORIES = [
  { value: "lamps", label: "Lamps" },
  { value: "chairs", label: "Chairs" },
  { value: "tables", label: "Tables" },
]
const SORTS = [{ value: "relevance", label: "Relevance" }, { value: "price", label: "Price" }]
const PRICE_STEP = 50
// stub: replace with your API (GET /products?q=…&category=…) — the server applies the filters; here they apply in memory
const PRODUCTS = [
  { name: "Arc floor lamp", category: "lamps", price: 189 },
  { name: "Desk lamp", category: "lamps", price: 49 },
  { name: "Lounge chair", category: "chairs", price: 420 },
  { name: "Dining chair", category: "chairs", price: 95 },
  { name: "Oak table", category: "tables", price: 640 },
  { name: "Side table", category: "tables", price: 120 },
]

/** The live payload is \`unknown\` to the plugin; read it back field by field (defaults for anything missing). */
function toFilters(p: unknown): Filters {
  if (typeof p !== "object" || p === null) return defaultValues
  const get = (k: string): unknown => (k in p ? Reflect.get(p, k) : undefined)
  const q = get("q")
  const category = get("category")
  const maxPrice = get("maxPrice")
  const sort = get("sort")
  return {
    q: typeof q === "string" ? q : defaultValues.q,
    category: Array.isArray(category) ? category.filter((c): c is string => typeof c === "string") : defaultValues.category,
    maxPrice: typeof maxPrice === "number" ? maxPrice : defaultValues.maxPrice,
    sort: typeof sort === "string" ? sort : defaultValues.sort,
  }
}

// History API adapter; for a router, pass your own { read, write, subscribe }
const adapter = createHistorySearchAdapter()

export function CatalogFilters() {
  const [applied, setApplied] = useState<Filters>(defaultValues)
  const form = useForm<Filters>({
    defaultValues,
    plugins: [
      urlState({ adapter }), // ?q=lamp&category=lamps&category=chairs — defaults omitted, Back/Forward restore
      live({ onChange: (p) => setApplied(toFilters(p)) }), // no submit button; debounced
    ],
  })
  const hits = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(applied.q.toLowerCase()) &&
      (applied.category.length === 0 || applied.category.includes(p.category)) &&
      p.price <= applied.maxPrice,
  ).toSorted((a, b) => (applied.sort === "price" ? a.price - b.price : 0))
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
      <Form form={form}>
        <TextField name="q" label="Search" placeholder="lamp, chair…" />
        <CheckboxGroupField name="category" label="Category" options={CATEGORIES} />
        <NumberStepperField name="maxPrice" label="Max price" min={0} max={1000} step={PRICE_STEP} />
        <SegmentedField name="sort" label="Sort" options={SORTS} />
      </Form>
      <div>
        <p className="mb-2 text-xs text-muted-foreground">{hits.length} results · the URL holds every non-default filter; try Back after a few changes.</p>
        <ul className="divide-y divide-border rounded-md border border-border text-sm">
          {hits.map((p) => (
            <li key={p.name} className="flex justify-between px-3 py-1.5">
              <span>{p.name}</span>
              <span className="tabular-nums text-muted-foreground">\${p.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>r(()=>import(`./filters-v84V1iFh.js`),[]));function E(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t,{title:`URL-synced filters`,children:`A filter bar with no submit: results update as you type, the query string mirrors the non-default filters (arrays as repeated keys), and Back / Forward restore them without echoing a write.`}),(0,g.jsx)(m,{n:1,title:`Catalog filters`,blurb:`Search, categories, max price and sort — all in the URL.`,code:T,children:(0,g.jsx)(w,{})})]})}export{E as component};