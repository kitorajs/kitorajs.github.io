import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i,ni as a,ti as o}from"./index-q72zUtm9.js";import{W as s}from"./messages-Bsb0m0Hq.js";import{A as c,At as l,Y as u,c as d,h as f}from"./field-config-DXiPz8Cg.js";import{a as p,c as m,i as h,l as g,p as _,r as v,s as y}from"./fields-CoJCsIMd.js";import{t as b}from"./confirm-CtFkqwAG.js";import{t as x}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var S=e(n(),1),C=i(),w={name:``,email:``},T=300,E=()=>new Promise(e=>setTimeout(e,T)),D={async createCustomer(e){if(await E(),e.name.toLowerCase()===`fail`)throw new l({message:`The server rejected this customer.`});return e}};function O(){let[e,t]=(0,S.useState)([]);return(0,C.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,C.jsxs)(`div`,{className:`flex gap-2`,children:[(0,C.jsxs)(m,{title:`New customer`,description:`Saved with a 300 ms fake request. Type “fail” as the name to see a server error.`,trigger:(0,C.jsx)(o,{size:`sm`,children:`New customer (dialog)`}),form:{defaultValues:w},onSubmit:e=>D.createCustomer(e),onSuccess:e=>t(t=>[...t,e]),children:[(0,C.jsx)(p,{name:`name`,label:`Name`,required:!0}),(0,C.jsx)(p,{name:`email`,label:`Email`,type:`email`,required:!0})]}),(0,C.jsxs)(g,{title:`Edit customer`,description:`Change a field, then press Escape or click outside: the discard guard asks first.`,side:`right`,trigger:(0,C.jsx)(o,{size:`sm`,variant:`outline`,children:`Edit Ada (drawer)`}),form:{defaultValues:{name:`Ada Lovelace`,email:`ada@example.com`}},onSubmit:e=>D.createCustomer(e),onSuccess:e=>t(t=>[...t,e]),children:[(0,C.jsx)(p,{name:`name`,label:`Name`,required:!0}),(0,C.jsx)(p,{name:`email`,label:`Email`,type:`email`,required:!0})]})]}),(0,C.jsx)(`ul`,{className:`text-xs text-muted-foreground`,children:e.map((e,t)=>(0,C.jsxs)(`li`,{children:[`Saved: `,e.name,` <`,e.email,`>`]},t))})]})}var k=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { SubmitError } from "@kitora/form/core"
import { FormDialog, FormSheet, TextField } from "@kitora/form/fields"

type Customer = { name: string; email: string }

const defaultValues: Customer = { name: "", email: "" }

const LATENCY_MS = 300
const wait = () => new Promise((r) => setTimeout(r, LATENCY_MS))

// stub: replace with your API (POST /customers); the fake request takes 300 ms
const api = {
  async createCustomer(values: Customer): Promise<Customer> {
    await wait()
    // a server rejection shows inside the dialog and keeps it open
    if (values.name.toLowerCase() === "fail") throw new SubmitError({ message: "The server rejected this customer." })
    return values
  },
}

export function CustomerDialogs() {
  const [saved, setSaved] = useState<Customer[]>([])
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
      {/* a fresh store per open; closing a dirty form (Escape, click outside, Cancel) asks first */}
      <FormDialog<Customer, Customer>
        title="New customer"
        description="Saved with a 300 ms fake request. Type “fail” as the name to see a server error."
        trigger={<Button size="sm">New customer (dialog)</Button>}
        form={{ defaultValues }}
        onSubmit={(v) => api.createCustomer(v)}
        onSuccess={(c) => setSaved((s) => [...s, c])}
      >
        <TextField name="name" label="Name" required />
        <TextField name="email" label="Email" type="email" required />
      </FormDialog>
      {/* the same form in a drawer */}
      <FormSheet<Customer, Customer>
        title="Edit customer"
        description="Change a field, then press Escape or click outside: the discard guard asks first."
        side="right"
        trigger={<Button size="sm" variant="outline">Edit Ada (drawer)</Button>}
        form={{ defaultValues: { name: "Ada Lovelace", email: "ada@example.com" } }}
        onSubmit={(v) => api.createCustomer(v)}
        onSuccess={(c) => setSaved((s) => [...s, c])}
      >
        <TextField name="name" label="Name" required />
        <TextField name="email" label="Email" type="email" required />
      </FormSheet>
      </div>
      <ul className="text-xs text-muted-foreground">
        {saved.map((c, i) => <li key={i}>Saved: {c.name} &lt;{c.email}&gt;</li>)}
      </ul>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>r(()=>import(`./dialog-1v17Uu76.js`),[]));var A={customerId:``,ref:``},j=[{value:`c1`,label:`Acme Corp`},{value:`c2`,label:`Globex`}],M=j.length+1,N={async createCustomer(e){return await new Promise(e=>setTimeout(e,300)),{id:`c${M++}`,name:e.name,email:e.email}}};function P(){let e=c({defaultValues:A});return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,C.jsxs)(d,{form:e,children:[(0,C.jsx)(v,{name:`customerId`,label:`Customer`,options:j,placeholder:`Choose a customer`,createRelated:_({label:`New customer`,form:{defaultValues:{name:``,email:``}},fields:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(p,{name:`name`,label:`Name`,required:!0}),(0,C.jsx)(p,{name:`email`,label:`Email`,type:`email`})]}),onCreate:e=>N.createCustomer(e).then(e=>({value:e.id,label:e.name}))})}),(0,C.jsx)(p,{name:`ref`,label:`Invoice reference`})]}),(0,C.jsx)(F,{form:e})]})}function F({form:e}){let t=f(e,e=>e.serialize(),s);return(0,C.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,C.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,C.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var I=`import { relatedForm, SelectField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual } from "@kitora/form/core"

type Invoice = { customerId: string; ref: string }
type Customer = { id: string; name: string; email: string }

const defaultValues: Invoice = { customerId: "", ref: "" }
const customers = [{ value: "c1", label: "Acme Corp" }, { value: "c2", label: "Globex" }]
let nextId = customers.length + 1

// stub: replace with your API (POST /customers); the fake request takes 300 ms
const api = {
  async createCustomer(values: { name: string; email: string }): Promise<Customer> {
    await new Promise((r) => setTimeout(r, 300))
    return { id: \`c\${nextId++}\`, name: values.name, email: values.email }
  },
}

export function InvoiceForm() {
  const form = useForm<Invoice>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        {/* "New customer" opens a nested form; the created record is added and selected */}
        <SelectField
          name="customerId"
          label="Customer"
          options={customers}
          placeholder="Choose a customer"
          createRelated={relatedForm<{ name: string; email: string }>({
            label: "New customer",
            form: { defaultValues: { name: "", email: "" } },
            fields: (
              <>
                <TextField name="name" label="Name" required />
                <TextField name="email" label="Email" type="email" />
              </>
            ),
            onCreate: (v) => api.createCustomer(v).then((c) => ({ value: c.id, label: c.name })),
          })}
        />
        <TextField name="ref" label="Invoice reference" />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>r(()=>import(`./related-B1PbCCAO.js`),[]));var L={version:`1.4.0`,frozen:!1},{c:R}=u(),z={async publish(e){await new Promise(e=>setTimeout(e,300))}};function B(){let e=c({defaultValues:L}),{confirm:t,dialog:n}=b(),[r,i]=(0,S.useState)([]);return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,C.jsxs)(d,{form:e,onSubmit:async e=>{await z.publish(e),i(t=>[...t,e.version])},children:[(0,C.jsx)(p,{name:`version`,label:`Version`,required:!0}),(0,C.jsx)(h,{name:`frozen`,label:`Release freeze`,description:`While on, Publish is disabled.`,local:!0}),(0,C.jsx)(d.Submit,{className:a({size:`sm`,className:`w-fit`}),pendingLabel:`Publishing…`,disabledIf:R.eq(`frozen`,!0),confirm:()=>t({title:`Publish ${e.getValues().version}?`,body:`Everyone on the list gets the new version.`,confirmLabel:`Publish`}),children:`Publish`}),n,(0,C.jsxs)(`p`,{className:`text-xs text-muted-foreground`,"data-testid":`published`,children:[`Published: `,r.length===0?`nothing yet`:r.join(`, `)]})]}),(0,C.jsx)(V,{form:e})]})}function V({form:e}){let t=f(e,e=>e.serialize(),s);return(0,C.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,C.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,C.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var H=`import { useState } from "react"
import { buttonVariants } from "@kitora/ui/button"
import { deepEqual, kit } from "@kitora/form/core"
import { SwitchField, TextField, useConfirm } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Release = { version: string; frozen: boolean }

const defaultValues: Release = { version: "1.4.0", frozen: false }
const { c } = kit<Release>()

// stub: replace with your API (POST /releases); the fake request takes 300 ms
const api = {
  async publish(values: Release): Promise<void> {
    void values
    await new Promise((r) => setTimeout(r, 300))
  },
}

export function PublishForm() {
  const form = useForm<Release>({ defaultValues })
  const { confirm, dialog } = useConfirm()
  const [published, setPublished] = useState<string[]>([])
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={async (v) => {
          await api.publish(v)
          setPublished((p) => [...p, v.version])
        }}>
        <TextField name="version" label="Version" required />
        {/* local: a UI switch, never sent */}
        <SwitchField name="frozen" label="Release freeze" description="While on, Publish is disabled." local />
        {/* the submit starts only when the dialog answers yes; Enter in the field asks too.
            disabledIf follows the condition as values change; busy still disables */}
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}
          pendingLabel="Publishing…"
          disabledIf={c.eq("frozen", true)}
          confirm={() => confirm({ title: \`Publish \${form.getValues().version}?\`, body: "Everyone on the list gets the new version.", confirmLabel: "Publish" })}
        >
          Publish
        </Form.Submit>
        {dialog}
        <p className="text-xs text-muted-foreground" data-testid="published">
          Published: {published.length === 0 ? "nothing yet" : published.join(", ")}
        </p>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>r(()=>import(`./confirm-submit-B6NknpyE.js`),[]));var U=1,W={async createTag(e){return await new Promise(e=>setTimeout(e,300)),{value:`t${U++}`,label:e.name}}},G=_({label:`New tag`,form:{defaultValues:{name:``}},fields:(0,C.jsx)(p,{name:`name`,label:`Tag name`,required:!0}),onCreate:e=>W.createTag(e)});function K(){let e=c({defaultValues:{note:``}}),[t,n]=(0,S.useState)([]);return(0,C.jsxs)(d,{form:e,children:[(0,C.jsx)(`ul`,{className:`flex min-h-7 flex-wrap gap-1 text-[12px]`,children:t.length?t.map(e=>(0,C.jsx)(`li`,{className:`rounded-md border px-2 py-0.5`,children:e.label},e.value)):(0,C.jsx)(`li`,{className:`text-muted-foreground`,children:`No tags yet`})}),(0,C.jsx)(y,{spec:G,onCreated:e=>n([...t,e])})]})}var q=`import { CreateRelatedButton, relatedForm, type SelectOption, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { useState } from "react"

type Tag = SelectOption
let nextId = 1

// stub: replace with your API (POST /tags); the fake request takes 300 ms
const api = {
  async createTag(values: { name: string }): Promise<Tag> {
    await new Promise((r) => setTimeout(r, 300))
    return { value: \`t\${nextId++}\`, label: values.name }
  },
}

const newTag = relatedForm<{ name: string }>({
  label: "New tag",
  form: { defaultValues: { name: "" } },
  fields: <TextField name="name" label="Tag name" required />,
  onCreate: (v) => api.createTag(v),
})

export function CreateRelatedParts() {
  const form = useForm<{ note: string }>({ defaultValues: { note: "" } })
  const [tags, setTags] = useState<Tag[]>([])
  return (
    <Form form={form}>
      {/* the same "+ New …" button SelectField shows under createRelated, under your own list */}
      <ul className="flex min-h-7 flex-wrap gap-1 text-[12px]">
        {tags.length ? tags.map((t) => <li key={t.value} className="rounded-md border px-2 py-0.5">{t.label}</li>) : <li className="text-muted-foreground">No tags yet</li>}
      </ul>
      <CreateRelatedButton spec={newTag} onCreated={(t) => setTags([...tags, t])} />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>r(()=>import(`./create-related-C9r_A4ZF.js`),[]));function J(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(t,{title:`Modal and drawer forms`,children:`Forms in dialogs and drawers with their own store, submit-and-close, errors kept in place, and a discard guard on Escape, click outside and Cancel. A select can create its related record inline without submitting the page's form.`}),(0,C.jsx)(x,{n:1,title:`Dialog and drawer`,blurb:`Create in a dialog, edit in a drawer.`,code:k,children:(0,C.jsx)(O,{})}),(0,C.jsx)(x,{n:2,title:`Create related inline`,blurb:`“New customer” opens a nested form; the created customer is added and selected.`,code:I,children:(0,C.jsx)(P,{})}),(0,C.jsx)(x,{n:3,title:`Confirm before submit`,blurb:`Form.Submit confirm asks in a styled dialog first; Cancel starts no submit, Publish submits once. disabledIf turns the button off while the release freeze is on.`,code:H,children:(0,C.jsx)(B,{})}),(0,C.jsx)(x,{n:4,title:`A create button under any list`,blurb:`CreateRelatedButton + relatedForm: the “New tag” button and its nested form dialog, adding to your own list.`,code:q,children:(0,C.jsx)(K,{})})]})}export{J as component};