import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{i as n,r,s as i,t as a}from"./field-CyrZpl8n.js";import{Bc as o,Cc as s,Ic as c,ti as l}from"./index-9y5uwRd3.js";import{t as u}from"./cascader-Bm_NCyvF.js";var d=e({CascaderChangeOnSelect:()=>h}),f=t(o(),1),p=c(),m=[{id:`electronics`,label:`Electronics`,children:[{id:`phones`,label:`Phones`,children:[{id:`android`,label:`Android`},{id:`ios`,label:`iOS`}]},{id:`laptops`,label:`Laptops`}]},{id:`home`,label:`Home`,children:[{id:`kitchen`,label:`Kitchen`},{id:`garden`,label:`Garden`}]}];function h(){let[e,t]=(0,f.useState)([`electronics`]);return(0,p.jsxs)(`div`,{className:`flex w-72 flex-col gap-2`,children:[(0,p.jsx)(u,{"aria-label":`Category`,items:m,value:e,onChange:t,changeOnSelect:!0,expandOnHover:!0,separator:` › `}),(0,p.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Filter: `,e.length>0?e.join(` / `):`none`]})]})}var g=e({CascaderDefault:()=>v}),_=[{id:`asia`,label:`Asia`,children:[{id:`japan`,label:`Japan`,children:[{id:`tokyo`,label:`Tokyo`},{id:`osaka`,label:`Osaka`}]},{id:`india`,label:`India`,children:[{id:`delhi`,label:`Delhi`},{id:`mumbai`,label:`Mumbai`}]}]},{id:`europe`,label:`Europe`,children:[{id:`france`,label:`France`,children:[{id:`paris`,label:`Paris`},{id:`lyon`,label:`Lyon`}]},{id:`spain`,label:`Spain`,children:[{id:`madrid`,label:`Madrid`}]}]}];function v(){let[e,t]=(0,f.useState)([]);return(0,p.jsx)(`div`,{className:`w-72`,children:(0,p.jsx)(u,{"aria-label":`City`,placeholder:`Pick a city…`,items:_,value:e,onChange:t})})}var y=e({CascaderFormSubmit:()=>x}),b=[{id:`asia`,label:`Asia`,children:[{id:`japan`,label:`Japan`,children:[{id:`tokyo`,label:`Tokyo`},{id:`osaka`,label:`Osaka`}]}]},{id:`europe`,label:`Europe`,children:[{id:`france`,label:`France`,children:[{id:`paris`,label:`Paris`},{id:`lyon`,label:`Lyon`}]}]}];function x(){let[e,t]=(0,f.useState)(null);return(0,p.jsxs)(`form`,{className:`flex w-full max-w-md flex-col gap-3 text-[13px]`,onSubmit:e=>{e.preventDefault(),t(JSON.stringify([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])))},children:[(0,p.jsxs)(a,{name:`city`,children:[(0,p.jsx)(i,{children:`Office`}),(0,p.jsx)(u,{items:b,placeholder:`Pick a city…`,required:!0}),(0,p.jsx)(r,{children:`Posts the path: continent, country, city.`}),(0,p.jsx)(n,{match:`valueMissing`,children:`Pick an office.`})]}),(0,p.jsx)(l,{type:`submit`,size:`sm`,className:`self-start`,children:`Submit`}),(0,p.jsxs)(`p`,{role:`status`,className:`text-muted-foreground`,children:[`FormData: `,(0,p.jsx)(`code`,{children:e??`not submitted`})]})]})}var S=`import { useState } from "react"
import { Cascader } from "@kitora/collections/ui"

const CATEGORIES = [
  { id: "electronics", label: "Electronics", children: [{ id: "phones", label: "Phones", children: [{ id: "android", label: "Android" }, { id: "ios", label: "iOS" }] }, { id: "laptops", label: "Laptops" }] },
  { id: "home", label: "Home", children: [{ id: "kitchen", label: "Kitchen" }, { id: "garden", label: "Garden" }] },
]

// \`changeOnSelect\` accepts any level, not only a leaf (a category filter), and \`expandOnHover\` opens a
// column when the pointer rests on its parent.
export function CascaderChangeOnSelect() {
  const [path, setPath] = useState<string[]>(["electronics"])
  return (
    <div className="flex w-72 flex-col gap-2">
      <Cascader aria-label="Category" items={CATEGORIES} value={path} onChange={setPath} changeOnSelect expandOnHover separator=" › " />
      <p className="text-xs text-muted-foreground">Filter: {path.length > 0 ? path.join(" / ") : "none"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>s(()=>import(`./change-on-select-CZloIpIh.js`),[]));var C=`import { useState } from "react"
import { Cascader } from "@kitora/collections/ui"

const PLACES = [
  { id: "asia", label: "Asia", children: [{ id: "japan", label: "Japan", children: [{ id: "tokyo", label: "Tokyo" }, { id: "osaka", label: "Osaka" }] }, { id: "india", label: "India", children: [{ id: "delhi", label: "Delhi" }, { id: "mumbai", label: "Mumbai" }] }] },
  { id: "europe", label: "Europe", children: [{ id: "france", label: "France", children: [{ id: "paris", label: "Paris" }, { id: "lyon", label: "Lyon" }] }, { id: "spain", label: "Spain", children: [{ id: "madrid", label: "Madrid" }] }] },
]

// One column per level: → or Enter opens the next column, ← goes back, and Enter on a leaf picks the
// whole path, shown joined by \`separator\`.
export function CascaderDefault() {
  const [path, setPath] = useState<string[]>([])
  return (
    <div className="w-72">
      <Cascader aria-label="City" placeholder="Pick a city…" items={PLACES} value={path} onChange={setPath} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>s(()=>import(`./default-nVXDNXAX.js`),[]));var w=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { Cascader } from "@kitora/collections/ui"
const PLACES = [
  { id: "asia", label: "Asia", children: [{ id: "japan", label: "Japan", children: [{ id: "tokyo", label: "Tokyo" }, { id: "osaka", label: "Osaka" }] }] },
  { id: "europe", label: "Europe", children: [{ id: "france", label: "France", children: [{ id: "paris", label: "Paris" }, { id: "lyon", label: "Lyon" }] }] },
]

/** Posts with a plain \`<form>\`: \`name\` writes one hidden input per id, \`required\` refuses an empty submit, a Field's label names it. */
export function CascaderFormSubmit() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex w-full max-w-md flex-col gap-3 text-[13px]"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
      }}
    >
      <Field name="city">
        <FieldLabel>Office</FieldLabel>
        <Cascader items={PLACES} placeholder="Pick a city…" required />
        <FieldDescription>Posts the path: continent, country, city.</FieldDescription>
        <FieldError match="valueMissing">Pick an office.</FieldError>
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Submit
      </Button>
      <p role="status" className="text-muted-foreground">
        FormData: <code>{posted ?? "not submitted"}</code>
      </p>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>s(()=>import(`./form-submit-dGt2RjtT.js`),[]));var T={"./demos/cascader/change-on-select.tsx":d,"./demos/cascader/default.tsx":g,"./demos/cascader/form-submit.tsx":y},E={"./demos/cascader/change-on-select.tsx":S,"./demos/cascader/default.tsx":C,"./demos/cascader/form-submit.tsx":w};export{T as modules,E as sources};