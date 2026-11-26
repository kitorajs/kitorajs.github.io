import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{C as t,D as n,S as r,T as i,h as a,k as o,n as s,t as c,v as l,w as u,y as d}from"./-kits.form-builder.shared-CoimlPgG.js";import{s as f}from"./kit-docs-DpYhPoxM.js";import{Bc as p,Cc as m,Ic as h}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as g}from"./example-B8EaWveR.js";var _=e(p(),1),v=h();function y(){let e=null,t=0,n=()=>new Promise(e=>setTimeout(e,400));return{async load(){return await n(),e},async save(r){await n(),e=r,t+=1},versions:()=>t}}var b={...n({indent:0,fileName:`survey.min.json`}),label:`Compact JSON`};function x(){let[e]=(0,_.useState)(y),t=i({codec:b}),{save:n,load:a,status:o}=r(e,t),c=o.state===`busy`?`${o.op===`save`?`Saving`:`Loading`}…`:o.state===`done`?`${o.op===`save`?`Saved version ${e.versions()}`:`Loaded`}`:o.state===`empty`?`Nothing saved yet`:o.state===`error`?o.message:`Add a field, then Save`,l=`inline-flex h-7 items-center rounded-md border bg-background px-2 text-[12px] hover:bg-accent disabled:opacity-50`;return(0,v.jsx)(s,{builder:t,title:`Survey`,actions:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`span`,{"data-testid":`fb-adapter-status`,className:`truncate px-1 text-[12px] text-muted-foreground`,children:c}),(0,v.jsx)(`button`,{type:`button`,className:l,disabled:o.state===`busy`,onClick:()=>void a(),children:`Load`}),(0,v.jsx)(`button`,{type:`button`,className:l,disabled:o.state===`busy`,onClick:()=>void n(),children:`Save`})]})})}var S=`import { useState } from "react"
import { type BuilderCodec, type BuilderStorage, FormBuilder, jsonCodec, useBuilderStorage, useFormBuilder } from "@kitora/form-builder"

// Both seams swapped for your own: a storage adapter (here a fake server that takes 400 ms
// and keeps a version count; yours would call fetch) and a codec (here compact one-line
// JSON with a different file name). The builder never knows where the text goes.
function versionedServer(): BuilderStorage & { readonly versions: () => number } {
  let saved: string | null = null
  let versions = 0
  const wait = () => new Promise((resolve) => setTimeout(resolve, 400))
  return {
    async load() {
      await wait()
      return saved
    },
    async save(text) {
      await wait()
      saved = text
      versions += 1
    },
    versions: () => versions,
  }
}

const compact: BuilderCodec = { ...jsonCodec({ indent: 0, fileName: "survey.min.json" }), label: "Compact JSON" }

export function BasicAdapter() {
  const [server] = useState(versionedServer)
  const builder = useFormBuilder({ codec: compact })
  const { save, load, status } = useBuilderStorage(server, builder)
  const message =
    status.state === "busy" ? \`\${status.op === "save" ? "Saving" : "Loading"}…\` : status.state === "done" ? \`\${status.op === "save" ? \`Saved version \${server.versions()}\` : "Loaded"}\` : status.state === "empty" ? "Nothing saved yet" : status.state === "error" ? status.message : "Add a field, then Save"
  const btn = "inline-flex h-7 items-center rounded-md border bg-background px-2 text-[12px] hover:bg-accent disabled:opacity-50"
  return (
    <FormBuilder
      builder={builder}
      title="Survey"
      actions={
        <>
          <span data-testid="fb-adapter-status" className="truncate px-1 text-[12px] text-muted-foreground">
            {message}
          </span>
          <button type="button" className={btn} disabled={status.state === "busy"} onClick={() => void load()}>
            Load
          </button>
          <button type="button" className={btn} disabled={status.state === "busy"} onClick={() => void save()}>
            Save
          </button>
        </>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>m(()=>import(`./adapter-ru_-ZMDh.js`),[]));var C={version:1,fields:[{kind:`field`,name:`name`,type:`text`,label:`Name`,required:!0},{kind:`field`,name:`message`,type:`textarea`,label:`Message`,rules:[{rule:`maxLength`,value:500}]}]};function w(){return(0,v.jsx)(u,{defaultDef:C,children:(0,v.jsx)(t,{children:(0,v.jsxs)(`div`,{className:`grid h-full grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]`,children:[(0,v.jsx)(d,{}),(0,v.jsx)(l,{className:`overflow-y-auto border-l p-3`})]})})})}var T=`import { BuilderCanvas, BuilderDndProvider, BuilderJsonPanel, FormBuilderProvider } from "@kitora/form-builder"
import type { FormDef } from "@kitora/form/core"

// Export is toJSON of the definition; import runs the engine's fromJSON check, so an unknown
// widget, operator or field reference is refused with the engine's message. Try the Import tab:
// change "text" to "nope" and press Replace.
const contact: FormDef = {
  version: 1,
  fields: [
    { kind: "field", name: "name", type: "text", label: "Name", required: true },
    { kind: "field", name: "message", type: "textarea", label: "Message", rules: [{ rule: "maxLength", value: 500 }] },
  ],
}

export function BasicJson() {
  return (
    <FormBuilderProvider defaultDef={contact}>
      <BuilderDndProvider>
        <div className="grid h-full grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <BuilderCanvas />
          <BuilderJsonPanel className="overflow-y-auto border-l p-3" />
        </div>
      </BuilderDndProvider>
    </FormBuilderProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>m(()=>import(`./json-CmU0YiA-.js`),[]));var E={version:1,fields:[{kind:`field`,name:`email`,type:`email`,label:`Email`,required:!0,rules:[{rule:`email`}]},{kind:`field`,name:`topics`,type:`checkboxGroup`,label:`Topics`,options:[{value:`product`,label:`Product news`},{value:`eng`,label:`Engineering blog`}]},{kind:`field`,name:`other`,type:`text`,label:`Anything else?`,visibleIf:{filled:{var:`topics`}}}]};function D(){return(0,v.jsx)(a,{def:E,submitLabel:`Subscribe`})}var O=`import { FormPreview } from "@kitora/form-builder"
import type { FormDef } from "@kitora/form/core"

// What the builder exports is the form engine's own definition, so it renders with AutoForm
// (here through FormPreview, which adds the payload panel). Leave Email empty and submit.
const newsletter: FormDef = {
  version: 1,
  fields: [
    { kind: "field", name: "email", type: "email", label: "Email", required: true, rules: [{ rule: "email" }] },
    {
      kind: "field",
      name: "topics",
      type: "checkboxGroup",
      label: "Topics",
      options: [
        { value: "product", label: "Product news" },
        { value: "eng", label: "Engineering blog" },
      ],
    },
    { kind: "field", name: "other", type: "text", label: "Anything else?", visibleIf: { filled: { var: "topics" } } },
  ],
}

export function BasicPreview() {
  return <FormPreview def={newsletter} submitLabel="Subscribe" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>m(()=>import(`./preview-DPRokH42.js`),[]));function k(){let e=i(),{dispatch:t,doc:n,canUndo:r,canRedo:a,problems:s}=e,c=o(n),l=`h-7 rounded-md border px-2.5 text-[12px] hover:bg-accent disabled:opacity-40`;return(0,v.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-[13px]`,children:[(0,v.jsxs)(`div`,{className:`flex flex-wrap gap-1.5`,children:[(0,v.jsx)(`button`,{type:`button`,className:l,onClick:()=>t({type:`add`,entryType:`text`,containerId:`root`,index:n.items.length}),children:`Add a text field`}),(0,v.jsx)(`button`,{type:`button`,className:l,onClick:()=>t({type:`add`,entryType:`select`,containerId:`root`,index:n.items.length}),children:`Add a dropdown`}),(0,v.jsx)(`button`,{type:`button`,className:l,disabled:!r,onClick:()=>t({type:`undo`}),children:`Undo`}),(0,v.jsx)(`button`,{type:`button`,className:l,disabled:!a,onClick:()=>t({type:`redo`}),children:`Redo`})]}),(0,v.jsxs)(`p`,{"data-testid":`fb-undo-names`,className:`font-mono text-[12px] text-muted-foreground`,children:[`fields: `,c.map(e=>e.node.name).join(`, `)||`—`,` · undo steps: `,(0,v.jsx)(`span`,{className:`tabular-nums`,children:e.state.history.past.length}),` · problems: `,(0,v.jsx)(`span`,{className:`tabular-nums`,children:s.length})]})]})}var A=`import { allFields, useFormBuilder } from "@kitora/form-builder"

// The builder without its ui: useFormBuilder runs the same reducer, so your own buttons get
// the same undo / redo, unique names and problem checks the full builder has.
export function BasicUndo() {
  const builder = useFormBuilder()
  const { dispatch, doc, canUndo, canRedo, problems } = builder
  const fields = allFields(doc)
  const btn = "h-7 rounded-md border px-2.5 text-[12px] hover:bg-accent disabled:opacity-40"
  return (
    <div className="flex flex-col gap-2 p-3 text-[13px]">
      <div className="flex flex-wrap gap-1.5">
        <button type="button" className={btn} onClick={() => dispatch({ type: "add", entryType: "text", containerId: "root", index: doc.items.length })}>
          Add a text field
        </button>
        <button type="button" className={btn} onClick={() => dispatch({ type: "add", entryType: "select", containerId: "root", index: doc.items.length })}>
          Add a dropdown
        </button>
        <button type="button" className={btn} disabled={!canUndo} onClick={() => dispatch({ type: "undo" })}>
          Undo
        </button>
        <button type="button" className={btn} disabled={!canRedo} onClick={() => dispatch({ type: "redo" })}>
          Redo
        </button>
      </div>
      <p data-testid="fb-undo-names" className="font-mono text-[12px] text-muted-foreground">
        fields: {fields.map((f) => f.node.name).join(", ") || "—"} · undo steps: <span className="tabular-nums">{builder.state.history.past.length}</span> · problems: <span className="tabular-nums">{problems.length}</span>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>m(()=>import(`./undo-3NkFdkxM.js`),[]));function j(){return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(f,{title:`Basics: the model`,children:`The builder edits the form engine's own definition: no format of its own, nothing to convert. What you export is what AutoForm renders and a server validates.`}),(0,v.jsx)(g,{n:1,title:`Render a definition`,blurb:`FormPreview is AutoForm plus a payload panel. Pick a topic and a third field appears.`,code:O,children:(0,v.jsx)(c,{testId:`fb-basic-preview`,bare:!0,children:(0,v.jsx)(D,{})})}),(0,v.jsx)(g,{n:2,title:`Export and import JSON`,blurb:`The export is toJSON of the definition. An import is checked by the engine's fromJSON and is one undo step.`,code:T,children:(0,v.jsx)(c,{testId:`fb-basic-json`,height:460,children:(0,v.jsx)(w,{})})}),(0,v.jsx)(g,{n:3,title:`Undo without the ui`,blurb:`useFormBuilder runs the same reducer: add, undo and redo from your own buttons.`,code:A,children:(0,v.jsx)(c,{testId:`fb-basic-undo`,children:(0,v.jsx)(k,{})})}),(0,v.jsx)(g,{n:4,title:`Your own storage and codec`,blurb:`Two typed seams: a BuilderStorage adapter (a fake server with latency and versions) and a BuilderCodec (compact JSON). Add a field, Save, change it, Load.`,code:S,children:(0,v.jsx)(c,{testId:`fb-basic-adapter`,height:440,bare:!0,children:(0,v.jsx)(x,{})})})]})}export{j as component};