import{E as e,O as t,S as n,T as r,n as i,t as a}from"./-kits.form-builder.shared-CoimlPgG.js";import{s as o}from"./kit-docs-DpYhPoxM.js";import{Cc as s,Ic as c}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as l}from"./example-B8EaWveR.js";var u=c(),d=`kitora:form-builder:host-demo`,f={version:1,fields:[{kind:`field`,name:`customer`,type:`text`,label:`Customer`,required:!0},{kind:`field`,name:`due`,type:`date`,label:`Due date`,required:!0},{kind:`array`,name:`lines`,label:`Line items`,min:1,newRow:{item:``,qty:1},children:[{kind:`field`,name:`.item`,type:`text`,label:`Item`,required:!0},{kind:`field`,name:`.qty`,type:`number`,label:`Qty`,rules:[{rule:`min`,value:1}]}]},{kind:`field`,name:`notes`,type:`textarea`,label:`Notes`}]},p=e(d);function m(){let e=r({defaultDef:f}),{save:a,load:o,status:s}=n(p,e),c=s.state===`done`?s.op===`save`?`Saved at ${s.at.toLocaleTimeString()}`:`Restored (undo brings the previous form back)`:s.state===`empty`?`Nothing saved yet`:s.state===`error`?s.message:s.state===`busy`?`Working…`:`Not saved yet`;return(0,u.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col gap-3`,children:[(0,u.jsx)(i,{builder:e,height:520,title:`Invoice`,actions:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`button`,{type:`button`,className:`inline-flex h-7 items-center rounded-md border bg-background px-2 text-[12px] hover:bg-accent`,onClick:()=>void o(),children:`Load`}),(0,u.jsx)(`button`,{type:`button`,className:`inline-flex h-7 items-center rounded-md bg-primary px-2.5 text-[12px] text-primary-foreground hover:bg-primary/90`,onClick:()=>void a(),children:`Save`})]})}),(0,u.jsxs)(`aside`,{className:`flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border bg-card`,children:[(0,u.jsxs)(`div`,{className:`flex h-10 shrink-0 items-center justify-between border-b px-3 text-[12px]`,children:[(0,u.jsx)(`span`,{className:`font-medium`,children:`Live definition`}),(0,u.jsx)(`span`,{"data-testid":`fb-host-status`,className:`truncate pl-2 text-muted-foreground`,children:c})]}),(0,u.jsx)(`pre`,{tabIndex:0,className:`min-h-0 flex-1 overflow-auto p-3 text-[11px] leading-relaxed`,children:t(e.doc).text})]})]})}var h=`import { exportJSON, FormBuilder, localStorageAdapter, useBuilderStorage, useFormBuilder } from "@kitora/form-builder"
import type { FormDef } from "@kitora/form/core"

// Wiring the builder into an app: the host owns the builder (useFormBuilder), so its own
// Save button and live JSON read the same state. The starting definition carries an array
// (line items) the builder does not edit: it stays on the canvas, locked, and exports unchanged.
const STORAGE_KEY = "kitora:form-builder:host-demo"

const invoice: FormDef = {
  version: 1,
  fields: [
    { kind: "field", name: "customer", type: "text", label: "Customer", required: true },
    { kind: "field", name: "due", type: "date", label: "Due date", required: true },
    {
      kind: "array",
      name: "lines",
      label: "Line items",
      min: 1,
      newRow: { item: "", qty: 1 },
      children: [
        { kind: "field", name: ".item", type: "text", label: "Item", required: true },
        { kind: "field", name: ".qty", type: "number", label: "Qty", rules: [{ rule: "min", value: 1 }] },
      ],
    },
    { kind: "field", name: "notes", type: "textarea", label: "Notes" },
  ],
}

// The browser's localStorage behind the builder's storage seam; swap in your server's adapter.
const storage = localStorageAdapter(STORAGE_KEY)

export function HostBuilder() {
  const builder = useFormBuilder({ defaultDef: invoice })
  const { save, load, status } = useBuilderStorage(storage, builder)
  const message =
    status.state === "done"
      ? status.op === "save"
        ? \`Saved at \${status.at.toLocaleTimeString()}\`
        : "Restored (undo brings the previous form back)"
      : status.state === "empty"
        ? "Nothing saved yet"
        : status.state === "error"
          ? status.message
          : status.state === "busy"
            ? "Working…"
            : "Not saved yet"
  const btn = "inline-flex h-7 items-center rounded-md border bg-background px-2 text-[12px] hover:bg-accent"
  return (
    <div className="flex h-full min-h-0 flex-col gap-3">
      <FormBuilder
        builder={builder}
        height={520}
        title="Invoice"
        actions={
          <>
            <button type="button" className={btn} onClick={() => void load()}>
              Load
            </button>
            <button type="button" className="inline-flex h-7 items-center rounded-md bg-primary px-2.5 text-[12px] text-primary-foreground hover:bg-primary/90" onClick={() => void save()}>
              Save
            </button>
          </>
        }
      />
      <aside className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border bg-card">
        <div className="flex h-10 shrink-0 items-center justify-between border-b px-3 text-[12px]">
          <span className="font-medium">Live definition</span>
          <span data-testid="fb-host-status" className="truncate pl-2 text-muted-foreground">
            {message}
          </span>
        </div>
        <pre tabIndex={0} className="min-h-0 flex-1 overflow-auto p-3 text-[11px] leading-relaxed">
          {exportJSON(builder.doc).text}
        </pre>
      </aside>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>s(()=>import(`./host-BaMhcKY-.js`),[]));function g(){return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(o,{title:`In your app`,children:"Call `useFormBuilder` yourself and pass it to `FormBuilder` as `builder`: your Save button, autosave or live JSON read the same state the builder edits."}),(0,u.jsx)(l,{n:1,title:`An invoice form, saved in this browser`,blurb:`Edit, press Save, change something, press Load. The line-items array is a node kind the builder does not edit: it stays locked on the canvas and round-trips unchanged.`,code:h,children:(0,u.jsx)(a,{testId:`fb-host`,height:780,bare:!0,children:(0,u.jsx)(m,{})})})]})}export{g as component};