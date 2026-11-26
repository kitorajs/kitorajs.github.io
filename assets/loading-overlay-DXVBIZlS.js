import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./input-2rqm_FXH.js";import{Bc as r,Cc as i,Ic as a,ti as o}from"./index-9y5uwRd3.js";import{t as s}from"./label-BCdE7eBP.js";import{t as c}from"./loading-overlay-DQTIb828.js";var l=e({LoadingOverlayBlurAndLabel:()=>d}),u=a();function d(){return(0,u.jsx)(c,{backdrop:`blur`,label:`Saving profile`,showLabel:!0,size:`lg`,className:`w-full max-w-xs rounded-lg`,children:(0,u.jsxs)(`form`,{className:`flex flex-col gap-3 rounded-lg border p-4`,"aria-label":`Profile`,children:[(0,u.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,u.jsx)(s,{htmlFor:`loading-overlay-name`,children:`Name`}),(0,u.jsx)(n,{id:`loading-overlay-name`,defaultValue:`Ada Lovelace`})]}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,u.jsx)(s,{htmlFor:`loading-overlay-email`,children:`Email`}),(0,u.jsx)(n,{id:`loading-overlay-email`,defaultValue:`ada@example.com`})]}),(0,u.jsx)(o,{size:`sm`,type:`button`,children:`Save`})]})})}var f=e({LoadingOverlayDefault:()=>h}),p=t(r(),1),m=[{id:`INV-1042`,customer:`Northwind`,total:`$1,280.00`},{id:`INV-1043`,customer:`Globex`,total:`$640.50`},{id:`INV-1044`,customer:`Initech`,total:`$2,015.75`}];function h(){let[e,t]=(0,p.useState)(!0);return(0,u.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-3`,children:[(0,u.jsx)(o,{size:`sm`,variant:`outline`,className:`self-start`,onClick:()=>t(e=>!e),children:e?`Finish loading`:`Reload`}),(0,u.jsx)(c,{visible:e,label:`Loading invoices`,className:`rounded-lg`,children:(0,u.jsx)(`ul`,{className:`divide-y rounded-lg border text-[13px]`,"aria-label":`Invoices`,children:m.map(e=>(0,u.jsxs)(`li`,{className:`flex items-center justify-between gap-3 px-3 py-2`,children:[(0,u.jsx)(`span`,{className:`font-medium`,children:e.id}),(0,u.jsx)(`span`,{className:`flex-1 text-muted-foreground`,children:e.customer}),(0,u.jsx)(`span`,{className:`tabular-nums`,children:e.total})]},e.id))})})]})}var g=`import { LoadingOverlay } from "@kitora/feedback"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

// \`backdrop="blur"\` softens the content under the spinner, and \`showLabel\` prints the label under it as well as announcing it.
export function LoadingOverlayBlurAndLabel() {
  return (
    <LoadingOverlay backdrop="blur" label="Saving profile" showLabel size="lg" className="w-full max-w-xs rounded-lg">
      <form className="flex flex-col gap-3 rounded-lg border p-4" aria-label="Profile">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="loading-overlay-name">Name</Label>
          <Input id="loading-overlay-name" defaultValue="Ada Lovelace" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="loading-overlay-email">Email</Label>
          <Input id="loading-overlay-email" defaultValue="ada@example.com" />
        </div>
        <Button size="sm" type="button">
          Save
        </Button>
      </form>
    </LoadingOverlay>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>i(()=>import(`./blur-and-label-DkSpcINb.js`),[]));var _=`import { useState } from "react"
import { LoadingOverlay } from "@kitora/feedback"
import { Button } from "@kitora/ui/button"

const INVOICES = [
  { id: "INV-1042", customer: "Northwind", total: "$1,280.00" },
  { id: "INV-1043", customer: "Globex", total: "$640.50" },
  { id: "INV-1044", customer: "Initech", total: "$2,015.75" },
] as const

// The card stays mounted while it reloads: the overlay dims it, makes it inert (no clicks, no focus) and marks it aria-busy,
// with a named spinner in the middle.
export function LoadingOverlayDefault() {
  const [loading, setLoading] = useState(true)
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Button size="sm" variant="outline" className="self-start" onClick={() => setLoading((v) => !v)}>
        {loading ? "Finish loading" : "Reload"}
      </Button>
      <LoadingOverlay visible={loading} label="Loading invoices" className="rounded-lg">
        <ul className="divide-y rounded-lg border text-[13px]" aria-label="Invoices">
          {INVOICES.map((invoice) => (
            <li key={invoice.id} className="flex items-center justify-between gap-3 px-3 py-2">
              <span className="font-medium">{invoice.id}</span>
              <span className="flex-1 text-muted-foreground">{invoice.customer}</span>
              <span className="tabular-nums">{invoice.total}</span>
            </li>
          ))}
        </ul>
      </LoadingOverlay>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>i(()=>import(`./default-CRKEaO9X.js`),[]));var v={"./demos/loading-overlay/blur-and-label.tsx":l,"./demos/loading-overlay/default.tsx":f},y={"./demos/loading-overlay/blur-and-label.tsx":g,"./demos/loading-overlay/default.tsx":_};export{v as modules,y as sources};