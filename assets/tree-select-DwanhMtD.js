import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{i as n,r,s as i,t as a}from"./field-DApIfONr.js";import{Bc as o,Cc as s,Ic as c,ti as l}from"./index-q72zUtm9.js";import{t as u}from"./tree-select-D9Nw8rZ_.js";var d=e({TreeSelectFormSubmit:()=>h}),f=t(o(),1),p=c(),m=[{id:`eng`,label:`Engineering`,children:[{id:`web`,label:`Web`},{id:`ios`,label:`iOS`},{id:`android`,label:`Android`}]},{id:`ops`,label:`Operations`,children:[{id:`sre`,label:`SRE`},{id:`it`,label:`IT`}]}];function h(){let[e,t]=(0,f.useState)(null);return(0,p.jsxs)(`form`,{className:`flex w-full max-w-md flex-col gap-3 text-[13px]`,onSubmit:e=>{e.preventDefault(),t(JSON.stringify([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])))},children:[(0,p.jsxs)(a,{name:`teams`,children:[(0,p.jsx)(i,{children:`Teams`}),(0,p.jsx)(u,{items:m,selectionMode:`multiple`,defaultValue:[`web`],required:!0}),(0,p.jsx)(r,{children:`Every team that reviews the change.`}),(0,p.jsx)(n,{match:`valueMissing`,children:`Pick at least one team.`})]}),(0,p.jsx)(l,{type:`submit`,size:`sm`,className:`self-start`,children:`Submit`}),(0,p.jsxs)(`p`,{role:`status`,className:`text-muted-foreground`,children:[`FormData: `,(0,p.jsx)(`code`,{children:e??`not submitted`})]})]})}var g=e({TreeSelectMultiple:()=>v}),_=[{id:`area`,label:`Area`,children:[{id:`frontend`,label:`Frontend`},{id:`backend`,label:`Backend`},{id:`docs`,label:`Docs`}]},{id:`type`,label:`Type`,children:[{id:`bug`,label:`Bug`},{id:`feature`,label:`Feature`},{id:`chore`,label:`Chore`}]}];function v(){let[e,t]=(0,f.useState)([`frontend`,`bug`]);return(0,p.jsx)(`div`,{className:`w-72`,children:(0,p.jsx)(u,{"aria-label":`Labels`,items:_,selectionMode:`multiple`,maxChips:2,placeholder:`Pick labels…`,value:e,onChange:t})})}var y=e({TreeSelectSingle:()=>x}),b=[{id:`eng`,label:`Engineering`,children:[{id:`web`,label:`Web`},{id:`mobile`,label:`Mobile`},{id:`infra`,label:`Infrastructure`}]},{id:`design`,label:`Design`,children:[{id:`product-design`,label:`Product design`},{id:`brand`,label:`Brand`}]},{id:`ops`,label:`Operations`}];function x(){let[e,t]=(0,f.useState)([`web`]);return(0,p.jsx)(`div`,{className:`w-64`,children:(0,p.jsx)(u,{"aria-label":`Team`,items:b,value:e,onChange:t})})}var S=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { TreeSelect } from "@kitora/collections/ui"
const TEAMS = [
  { id: "eng", label: "Engineering", children: [{ id: "web", label: "Web" }, { id: "ios", label: "iOS" }, { id: "android", label: "Android" }] },
  { id: "ops", label: "Operations", children: [{ id: "sre", label: "SRE" }, { id: "it", label: "IT" }] },
]

/** Posts with a plain \`<form>\`: \`name\` writes one hidden input per id, \`required\` refuses an empty submit, a Field's label names it. */
export function TreeSelectFormSubmit() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex w-full max-w-md flex-col gap-3 text-[13px]"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
      }}
    >
      <Field name="teams">
        <FieldLabel>Teams</FieldLabel>
        <TreeSelect items={TEAMS} selectionMode="multiple" defaultValue={["web"]} required />
        <FieldDescription>Every team that reviews the change.</FieldDescription>
        <FieldError match="valueMissing">Pick at least one team.</FieldError>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>s(()=>import(`./form-submit-D70jb15-.js`),[]));var C=`import { useState } from "react"
import { TreeSelect } from "@kitora/collections/ui"

const LABELS = [
  { id: "area", label: "Area", children: [{ id: "frontend", label: "Frontend" }, { id: "backend", label: "Backend" }, { id: "docs", label: "Docs" }] },
  { id: "type", label: "Type", children: [{ id: "bug", label: "Bug" }, { id: "feature", label: "Feature" }, { id: "chore", label: "Chore" }] },
]

// \`selectionMode="multiple"\` keeps the popup open with tri-state checkboxes (a branch's box picks or clears
// all its leaves) and shows the picks as chips; \`maxChips\` folds the rest into "+N".
export function TreeSelectMultiple() {
  const [labels, setLabels] = useState<string[]>(["frontend", "bug"])
  return (
    <div className="w-72">
      <TreeSelect aria-label="Labels" items={LABELS} selectionMode="multiple" maxChips={2} placeholder="Pick labels…" value={labels} onChange={setLabels} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>s(()=>import(`./multiple-wYpGy4SR.js`),[]));var w=`import { useState } from "react"
import { TreeSelect } from "@kitora/collections/ui"

const TEAMS = [
  { id: "eng", label: "Engineering", children: [{ id: "web", label: "Web" }, { id: "mobile", label: "Mobile" }, { id: "infra", label: "Infrastructure" }] },
  { id: "design", label: "Design", children: [{ id: "product-design", label: "Product design" }, { id: "brand", label: "Brand" }] },
  { id: "ops", label: "Operations" },
]

// A select whose options are a tree: the popup has a filter box over it, the arrow keys walk the tree
// (→ opens a branch, ← closes it) and Enter picks a leaf (\`selectBranches\` allows a branch too). The value is always an array of ids.
export function TreeSelectSingle() {
  const [team, setTeam] = useState<string[]>(["web"])
  return (
    <div className="w-64">
      <TreeSelect aria-label="Team" items={TEAMS} value={team} onChange={setTeam} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>s(()=>import(`./single-PIDcG5pK.js`),[]));var T={"./demos/tree-select/form-submit.tsx":d,"./demos/tree-select/multiple.tsx":g,"./demos/tree-select/single.tsx":y},E={"./demos/tree-select/form-submit.tsx":S,"./demos/tree-select/multiple.tsx":C,"./demos/tree-select/single.tsx":w};export{T as modules,E as sources};