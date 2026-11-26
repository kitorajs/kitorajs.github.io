import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{r as n,s as r,t as i}from"./field-DApIfONr.js";import{Bc as a,Cc as o,Ic as s,ti as c}from"./index-q72zUtm9.js";import{t as l}from"./transfer-list-DFPeucpT.js";var u=e({TransferListDefault:()=>m}),d=t(a(),1),f=s(),p=[{id:`projects.read`,label:`Read projects`},{id:`projects.write`,label:`Edit projects`},{id:`projects.delete`,label:`Delete projects`},{id:`billing.read`,label:`View billing`},{id:`billing.write`,label:`Manage billing`,disabled:!0},{id:`members.invite`,label:`Invite members`},{id:`members.remove`,label:`Remove members`},{id:`audit.read`,label:`View audit log`}];function m(){let[e,t]=(0,d.useState)([`projects.read`]);return(0,f.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col gap-2 text-[13px]`,children:[(0,f.jsx)(l,{items:p,value:e,onChange:t,height:224,messages:{source:`Available`,target:`Granted`}}),(0,f.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Granted: `,(0,f.jsx)(`b`,{className:`text-foreground`,children:e.length})]})]})}var h=e({TransferListFormSubmit:()=>_}),g=[`Ada`,`Grace`,`Linus`,`Barbara`,`Ken`].map(e=>({id:e.toLowerCase(),label:e}));function _(){let[e,t]=(0,d.useState)(null);return(0,f.jsxs)(`form`,{className:`flex w-full max-w-md flex-col gap-3 text-[13px]`,onSubmit:e=>{e.preventDefault(),t(JSON.stringify([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])))},children:[(0,f.jsxs)(i,{name:`reviewers`,children:[(0,f.jsx)(r,{children:`Reviewers`}),(0,f.jsx)(l,{items:g,defaultValue:[`grace`],required:!0}),(0,f.jsx)(n,{children:`Posts the chosen people in their order.`})]}),(0,f.jsx)(c,{type:`submit`,size:`sm`,className:`self-start`,children:`Submit`}),(0,f.jsxs)(`p`,{role:`status`,className:`text-muted-foreground`,children:[`FormData: `,(0,f.jsx)(`code`,{children:e??`not submitted`})]})]})}var v=e({TransferListSearchAndVirtual:()=>b}),y=Array.from({length:2e3},(e,t)=>({id:`col-${t+1}`,label:`Column ${t+1}`,keywords:[t%2==0?`even`:`odd`]}));function b(){return(0,f.jsx)(`div`,{className:`w-full max-w-xl`,children:(0,f.jsx)(l,{items:y,defaultValue:[`col-1`,`col-2`],searchable:!0,messages:{source:`Columns`,target:`Shown`}})})}var x=`import { useState } from "react"
import { TransferList } from "@kitora/collections/ui"

const PERMISSIONS = [
  { id: "projects.read", label: "Read projects" },
  { id: "projects.write", label: "Edit projects" },
  { id: "projects.delete", label: "Delete projects" },
  { id: "billing.read", label: "View billing" },
  { id: "billing.write", label: "Manage billing", disabled: true },
  { id: "members.invite", label: "Invite members" },
  { id: "members.remove", label: "Remove members" },
  { id: "audit.read", label: "View audit log" },
]

// Select rows on either side (click, Space, Shift+arrows, Ctrl/Cmd+A) and move them across; the double arrows move every row shown.
// The disabled permission stays where it is.
export function TransferListDefault() {
  const [granted, setGranted] = useState<string[]>(["projects.read"])
  return (
    <div className="flex w-full max-w-xl flex-col gap-2 text-[13px]">
      <TransferList items={PERMISSIONS} value={granted} onChange={setGranted} height={224} messages={{ source: "Available", target: "Granted" }} />
      <p className="text-muted-foreground">
        Granted: <b className="text-foreground">{granted.length}</b>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>o(()=>import(`./default-txHGpUmy.js`),[]));var S=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldLabel } from "@kitora/ui/field"
import { TransferList } from "@kitora/collections/ui"
const PEOPLE = ["Ada", "Grace", "Linus", "Barbara", "Ken"].map((name) => ({ id: name.toLowerCase(), label: name }))

/** Posts with a plain \`<form>\`: \`name\` writes one hidden input per id, \`required\` refuses an empty submit, a Field's label names it. */
export function TransferListFormSubmit() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex w-full max-w-md flex-col gap-3 text-[13px]"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
      }}
    >
      <Field name="reviewers">
        <FieldLabel>Reviewers</FieldLabel>
        <TransferList items={PEOPLE} defaultValue={["grace"]} required />
        <FieldDescription>Posts the chosen people in their order.</FieldDescription>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>o(()=>import(`./form-submit-B0xf7O0k.js`),[]));var C=`import { TransferList } from "@kitora/collections/ui"

const COLUMNS = Array.from({ length: 2000 }, (_, i) => ({ id: \`col-\${i + 1}\`, label: \`Column \${i + 1}\`, keywords: [i % 2 === 0 ? "even" : "odd"] }))

// Two thousand items: each side mounts only the rows in view (the Listbox's virtual window), and the search boxes filter each side.
// Select-all and "move all" act on what the search leaves.
export function TransferListSearchAndVirtual() {
  return (
    <div className="w-full max-w-xl">
      <TransferList items={COLUMNS} defaultValue={["col-1", "col-2"]} searchable messages={{ source: "Columns", target: "Shown" }} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>o(()=>import(`./search-and-virtual-BNJyr7is.js`),[]));var w={"./demos/transfer-list/default.tsx":u,"./demos/transfer-list/form-submit.tsx":h,"./demos/transfer-list/search-and-virtual.tsx":v},T={"./demos/transfer-list/default.tsx":x,"./demos/transfer-list/form-submit.tsx":S,"./demos/transfer-list/search-and-virtual.tsx":C};export{w as modules,T as sources};