import{g as e,s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,ii as r,zc as i}from"./index-BZuUy872.js";import{W as a}from"./messages-CylclMLI.js";import{A as o,c as s,h as c}from"./field-config-53O_jYuu.js";import{a as l,o as u}from"./fields-DyVcPE0c.js";import"./demos-PewJ5Ayd.js";var d=i(),f={name:``,email:``,message:``};function p(){let e=o({defaultValues:f,validateOn:`blur`});return(0,d.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,d.jsxs)(s,{form:e,onSubmit:e=>console.log(e),children:[(0,d.jsx)(l,{name:`name`,label:`Name`,required:!0,placeholder:`Ada Lovelace`}),(0,d.jsx)(l,{name:`email`,label:`Email`,type:`email`}),(0,d.jsx)(u,{name:`message`,label:`Message`,rows:4}),(0,d.jsx)(s.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Send`})]}),(0,d.jsx)(m,{form:e})]})}function m({form:e}){let t=c(e,e=>e.serialize(),a);return(0,d.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,d.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,d.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var h=`import { buttonVariants } from "@kitora/ui/button"
import { TextareaField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual } from "@kitora/form/core"

type Contact = { name: string; email: string; message: string }

const defaultValues: Contact = { name: "", email: "", message: "" }

export function ContactForm() {
  const form = useForm<Contact>({ defaultValues, validateOn: "blur" })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={(payload) => console.log(payload)}>
        <TextField name="name" label="Name" required placeholder="Ada Lovelace" />
        <TextField name="email" label="Email" type="email" />
        <TextareaField name="message" label="Message" rows={4} />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Send</Form.Submit>
      </Form>
      <Payload form={form} />
    </div>
  )
}

/** What the form would submit, live: a readout beside the form, not part of it. */
function Payload({ form }: { form: SnapshotSource & { serialize(): unknown } }) {
  const payload = useFormSnapshot(form, (s) => s.serialize(), deepEqual)
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium">Live payload</div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>n(()=>import(`./index-BdFna6Be.js`),[]));function g(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t,{title:`Simple form`,children:`The 80% case — declare fields, get a styled, isolated, controlled form. No ceremony.`}),(0,d.jsx)(e,{code:h,children:(0,d.jsx)(p,{})})]})}export{g as component};