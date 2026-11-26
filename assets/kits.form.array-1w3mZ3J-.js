import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n,Mi as r,ni as i,ti as a}from"./index-q72zUtm9.js";import{W as o}from"./messages-Bsb0m0Hq.js";import{A as s,J as c,M as l,Y as u,c as d,g as f,h as p,l as m,s as ee,x as h}from"./field-config-DXiPz8Cg.js";import{a as g,n as _,r as te,t as v}from"./fields-CoJCsIMd.js";import{t as y}from"./field-array-Ixek16Jg.js";import{t as b}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var x=r(`grip-horizontal`,[[`circle`,{cx:`12`,cy:`9`,r:`1`,key:`124mty`}],[`circle`,{cx:`19`,cy:`9`,r:`1`,key:`1ruzo2`}],[`circle`,{cx:`5`,cy:`9`,r:`1`,key:`1a8b28`}],[`circle`,{cx:`12`,cy:`15`,r:`1`,key:`1e56xg`}],[`circle`,{cx:`19`,cy:`15`,r:`1`,key:`1a92ep`}],[`circle`,{cx:`5`,cy:`15`,r:`1`,key:`5r1jwy`}]]),S=n(),C={customer:``,taxRate:.1,items:[{sku:`WIDGET`,qty:1,price:100}]},w=e=>typeof e==`number`?new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`}).format(e):`—`,T=c()(({e})=>({fields:[],derived:{total:e.mul(e.sum(`items`,e=>e.mul(e.ref(`qty`),e.ref(`price`))),e.add(1,e.ref(`taxRate`)))}}));function ne(){return(0,S.jsxs)(d,{form:s({defaultValues:C,model:T}),children:[(0,S.jsx)(g,{name:`customer`,label:`Customer`}),(0,S.jsxs)(y,{name:`items`,label:`Line items`,rowLabel:`Line`,newRow:{sku:``,qty:1,price:0},min:1,layout:`table`,children:[(0,S.jsx)(g,{name:`.sku`,label:`SKU`}),`      `,(0,S.jsx)(_,{name:`.qty`,label:`Qty`}),(0,S.jsx)(_,{name:`.price`,label:`Price`}),(0,S.jsx)(y.RowActions,{move:!0,remove:!0}),`       `]}),(0,S.jsx)(y.Add,{to:`items`,children:`Add line`}),(0,S.jsx)(ee.Display,{name:`total`,label:`Total (incl. 10% tax)`,render:w,live:!0})]})}var E=`import { defineForm } from "@kitora/form/core"
import { FieldArray, NumberField, TextField } from "@kitora/form/fields"
import { Field, Form, useForm } from "@kitora/form/react"

type Invoice = { customer: string; taxRate: number; total?: number; items: Array<{ sku: string; qty: number; price: number }> }

const defaultValues: Invoice = { customer: "", taxRate: 0.1, items: [{ sku: "WIDGET", qty: 1, price: 100 }] }
const usd = (v: unknown) => (typeof v === "number" ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(v) : "—")

// total = Σ qty × price, plus tax: a model derived value, recomputed in the core and sent in the payload
const model = defineForm<Invoice>()(({ e }) => ({
  fields: [],
  derived: { total: e.mul(e.sum("items", (r) => r.mul(r.ref("qty"), r.ref("price"))), e.add(1, e.ref("taxRate"))) },
}))

export function InvoiceForm() {
  const form = useForm<Invoice>({ defaultValues, model })
  return (
    <Form form={form}>
      <TextField name="customer" label="Customer" />
      <FieldArray name="items" label="Line items" rowLabel="Line" newRow={{ sku: "", qty: 1, price: 0 }} min={1} layout="table">
        <TextField name=".sku" label="SKU" />      {/* row-relative name; label = the column header, every row labelled */}
        <NumberField name=".qty" label="Qty" />
        <NumberField name=".price" label="Price" />
        <FieldArray.RowActions move remove />       {/* honours min; contextual aria labels */}
      </FieldArray>
      <FieldArray.Add to="items">Add line</FieldArray.Add>
      <Field.Display name="total" label="Total (incl. 10% tax)" render={usd} live />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>t(()=>import(`./invoice-B-xrp5s8.js`),[]));var D={emails:[`ada@example.com`]},{v:O}=u();function k(){return(0,S.jsxs)(d,{form:s({defaultValues:D}),children:[(0,S.jsxs)(y,{name:`emails`,label:`Recipients`,rowLabel:`Recipient`,newRow:``,children:[(0,S.jsx)(g,{name:`.`,label:`Email`,type:`email`,rules:[O.email()]}),(0,S.jsx)(y.RowActions,{remove:!0})]}),(0,S.jsx)(y.Add,{to:`emails`,children:`Add recipient`})]})}var A=`import { kit } from "@kitora/form/core"
import { FieldArray, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Recipients = { emails: string[] }

const defaultValues: Recipients = { emails: ["ada@example.com"] }
const { v } = kit<Recipients>()

export function RecipientsForm() {
  const form = useForm<Recipients>({ defaultValues })
  return (
    <Form form={form}>
      <FieldArray name="emails" label="Recipients" rowLabel="Recipient" newRow="">
        {/* arrays of primitives: "." is the row itself (emails.0, emails.1, …) */}
        <TextField name="." label="Email" type="email" rules={[v.email()]} />
        <FieldArray.RowActions remove />
      </FieldArray>
      <FieldArray.Add to="emails">Add recipient</FieldArray.Add>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>t(()=>import(`./emails-BShPKoXA.js`),[]));var j={phones:[``]},M=1,N=4;function P({form:e}){return(0,S.jsxs)(`span`,{className:`text-[11px] text-muted-foreground`,children:[f(e,`phones`).length,` / `,N,` — keep at least `,M]})}function F(){let e=s({defaultValues:j});return(0,S.jsxs)(d,{form:e,children:[(0,S.jsxs)(y,{name:`phones`,label:`Phone numbers`,rowLabel:`Phone`,newRow:``,min:M,max:N,maxMessage:`Up to {n} phone numbers`,children:[(0,S.jsx)(g,{name:`.`,label:`Phone`,placeholder:`+1 555 0100`}),(0,S.jsx)(y.RowActions,{remove:!0})]}),(0,S.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,S.jsx)(y.Add,{to:`phones`,children:`Add phone`}),(0,S.jsx)(P,{form:e})]})]})}var I=`import { FieldArray, TextField } from "@kitora/form/fields"
import { Form, useForm, useFormValue } from "@kitora/form/react"

type Phones = { phones: string[] }

const defaultValues: Phones = { phones: [""] }
const MIN = 1
const MAX = 4

/** The row count beside the Add button, read live from the form value. */
function PhoneCount({ form }: { form: ReturnType<typeof useForm<Phones>> }) {
  const phones = useFormValue(form, "phones")
  return (
    <span className="text-[11px] text-muted-foreground">
      {phones.length} / {MAX} — keep at least {MIN}
    </span>
  )
}

// at max, Add stays focusable with aria-disabled + a described reason; at min, Remove does the same
export function PhonesForm() {
  const form = useForm<Phones>({ defaultValues })
  return (
    <Form form={form}>
      <FieldArray name="phones" label="Phone numbers" rowLabel="Phone" newRow="" min={MIN} max={MAX} maxMessage="Up to {n} phone numbers">
        <TextField name="." label="Phone" placeholder="+1 555 0100" />
        <FieldArray.RowActions remove />
      </FieldArray>
      <div className="flex items-center gap-3">
        <FieldArray.Add to="phones">Add phone</FieldArray.Add>
        <PhoneCount form={form} />
      </div>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>t(()=>import(`./bounded-CIjE51BV.js`),[]));var L={photos:[{url:`https://picsum.photos/id/10/320/200`,caption:`Lake`,cover:!0},{url:`https://picsum.photos/id/11/320/200`,caption:`Ridge`,cover:!0},{url:`https://picsum.photos/id/12/320/200`,caption:`Lake`,cover:!1}]},{v:R}=u(),z=[R.exactlyOne(`.cover`,{message:`Mark exactly one photo as the cover`}),R.unique(`.caption`,`Captions must be unique`)],B={async save(e){console.log(`saved`,e)}};function V(){let e=s({defaultValues:L,validateOn:`mount`});return(0,S.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,S.jsxs)(d,{form:e,onSubmit:B.save,children:[(0,S.jsxs)(y,{name:`photos`,label:`Photos`,rowLabel:`Photo`,layout:`table`,newRow:{url:``,caption:``,cover:!1},rules:z,children:[(0,S.jsx)(g,{name:`.url`,label:`Image URL`}),(0,S.jsx)(g,{name:`.caption`,label:`Caption`}),(0,S.jsx)(v,{name:`.cover`,label:`Cover`}),(0,S.jsx)(y.RowActions,{remove:!0})]}),(0,S.jsx)(y.Add,{to:`photos`,children:`Add photo`}),(0,S.jsx)(d.Submit,{className:i({size:`sm`,className:`w-fit`}),children:`Publish gallery`})]}),(0,S.jsx)(re,{form:e})]})}function re({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),o);return(0,S.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,S.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,S.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,S.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,S.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,S.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,S.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var H=`import { buttonVariants } from "@kitora/ui/button"
import { deepEqual, type Issue, kit, type SubmitStatus } from "@kitora/form/core"
import { CheckboxField, FieldArray, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Gallery = { photos: Array<{ url: string; caption: string; cover: boolean }> }

const defaultValues: Gallery = {
  photos: [
    // two covers and two "Lake" captions: both rules fire until you fix them
    { url: "https://picsum.photos/id/10/320/200", caption: "Lake", cover: true },
    { url: "https://picsum.photos/id/11/320/200", caption: "Ridge", cover: true },
    { url: "https://picsum.photos/id/12/320/200", caption: "Lake", cover: false },
  ],
}
const { v } = kit<Gallery>()
// cross-row rules live in the model (JSON-serializable, so the server runs the same check):
// the array gets one issue, and each conflicting row's field gets its own
const rules = [v.exactlyOne(".cover", { message: "Mark exactly one photo as the cover" }), v.unique(".caption", "Captions must be unique")]

// stub: replace with your API (PUT /galleries/1)
const api = {
  async save(payload: Gallery): Promise<void> {
    console.log("saved", payload)
  },
}

export function GalleryForm() {
  // validate on mount, so the seeded conflicts show straight away
  const form = useForm<Gallery>({ defaultValues, validateOn: "mount" })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.save}>
        <FieldArray name="photos" label="Photos" rowLabel="Photo" layout="table" newRow={{ url: "", caption: "", cover: false }} rules={rules}>
          <TextField name=".url" label="Image URL" />
          <TextField name=".caption" label="Caption" />
          <CheckboxField name=".cover" label="Cover" />
          <FieldArray.RowActions remove />
        </FieldArray>
        <FieldArray.Add to="photos">Add photo</FieldArray.Add>
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Publish gallery</Form.Submit>
      </Form>
      <Payload form={form} />
    </div>
  )
}

interface LiveSource extends SnapshotSource {
  serialize(): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live, with its state and issues: a readout beside the form, not part of it. */
function Payload({ form }: { form: LiveSource }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize(), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">Live payload</span>
        <span className="tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>{i.path || "(form)"}: {i.message}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>t(()=>import(`./gallery-DbBmFqAV.js`),[]));var U={members:[{name:`Ada`,role:`Lead`},{name:`Grace`,role:`Engineer`},{name:`Linus`,role:`Reviewer`}]},W=`[&_[data-exiting-row]]:animate-out [&_[data-exiting-row]]:fade-out-0 [&_[data-exiting-row]]:duration-700`;function G(){let e=l();return(0,S.jsx)(a,{className:`w-fit`,type:`button`,variant:`outline`,size:`sm`,disabled:!e.canUndo,onClick:e.undo,children:`Undo`})}function K(){let e=s({defaultValues:U});return(0,S.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,S.jsxs)(d,{form:e,className:W,children:[(0,S.jsxs)(y,{name:`members`,label:`Team`,rowLabel:`Member`,newRow:{name:``,role:``},layout:`cards`,exit:!0,children:[(0,S.jsx)(g,{name:`.name`,label:`Name`}),(0,S.jsx)(g,{name:`.role`,label:`Role`}),(0,S.jsx)(y.RowActions,{remove:!0})]}),(0,S.jsxs)(`div`,{className:`flex gap-2`,children:[(0,S.jsx)(y.Add,{to:`members`,children:`Add member`}),(0,S.jsx)(G,{})]})]}),(0,S.jsx)(q,{form:e})]})}function q({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),o);return(0,S.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,S.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,S.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,S.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,S.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,S.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,S.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var J=`import { Button } from "@kitora/ui/button"
import { FieldArray, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormHistory, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Team = { members: Array<{ name: string; role: string }> }

const defaultValues: Team = { members: [{ name: "Ada", role: "Lead" }, { name: "Grace", role: "Engineer" }, { name: "Linus", role: "Reviewer" }] }

// the engine keeps a removed row on screen as data-exiting-row + data-state="exiting" (inert, its last
// values, no names) until its animation ends; this CSS (the enter / exit utilities in @kitora/primitives/styles.css) is the animation
const rowExit = "[&_[data-exiting-row]]:animate-out [&_[data-exiting-row]]:fade-out-0 [&_[data-exiting-row]]:duration-700"

function UndoButton() {
  const h = useFormHistory()
  return <Button className="w-fit" type="button" variant="outline" size="sm" disabled={!h.canUndo} onClick={h.undo}>Undo</Button>
}

// The row leaves the store at once (payload, validation, undo); only its picture lingers.
// Undo mid-animation brings the real row back immediately.
export function TeamForm() {
  const form = useForm<Team>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} className={rowExit}>
        <FieldArray name="members" label="Team" rowLabel="Member" newRow={{ name: "", role: "" }} layout="cards" exit>
          <TextField name=".name" label="Name" />
          <TextField name=".role" label="Role" />
          <FieldArray.RowActions remove />
        </FieldArray>
        <div className="flex gap-2">
          <FieldArray.Add to="members">Add member</FieldArray.Add>
          <UndoButton />
        </div>
      </Form>
      <Payload form={form} />
    </div>
  )
}

interface LiveSource extends SnapshotSource {
  serialize(): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live, with its state and issues: a readout beside the form, not part of it. */
function Payload({ form }: { form: LiveSource }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize(), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">Live payload</span>
        <span className="tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>{i.path || "(form)"}: {i.message}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>t(()=>import(`./exit-rows--7Xi4kEk.js`),[]));var Y={routes:[{channel:`email`,target:`support@example.com`},{channel:``,target:``}]},X=c()(()=>({fields:[],data:{channels:[{value:`email`,label:`Email`},{value:`chat`,label:`Chat`},{value:`sms`,label:`SMS`},{value:`webhook`,label:`Webhook`}]}})),{e:Z}=u(),ie=Z.filter(Z.lookup(`channels`),e=>e.c.or(e.c.eq(`value`,e.ref(`.channel`)),e.c.notIn(`value`,Z.map(`/routes`,e=>e.ref(`channel`)))));function ae(){let e=s({defaultValues:Y,model:X});return(0,S.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,S.jsxs)(d,{form:e,children:[(0,S.jsxs)(y,{name:`routes`,label:`Routes`,rowLabel:`Route`,layout:`table`,newRow:{channel:``,target:``},children:[(0,S.jsx)(te,{name:`.channel`,label:`Channel`,options:ie,placeholder:`Pick a channel`}),(0,S.jsx)(g,{name:`.target`,label:`Target`}),(0,S.jsx)(y.RowActions,{remove:!0})]}),(0,S.jsx)(y.Add,{to:`routes`,children:`Add route`})]}),(0,S.jsx)(oe,{form:e})]})}function oe({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),o);return(0,S.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,S.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,S.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,S.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,S.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,S.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,S.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var Q=`import { deepEqual, defineForm, type Issue, kit, type SubmitStatus } from "@kitora/form/core"
import { FieldArray, SelectField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Routing = { routes: Array<{ channel: string; target: string }> }

const defaultValues: Routing = { routes: [{ channel: "email", target: "support@example.com" }, { channel: "", target: "" }] }

// the option table is model data, so the same filter runs on a server
const model = defineForm<Routing>()(() => ({
  fields: [],
  data: {
    channels: [
      { value: "email", label: "Email" },
      { value: "chat", label: "Chat" },
      { value: "sms", label: "SMS" },
      { value: "webhook", label: "Webhook" },
    ],
  },
}))
const { e } = kit<Routing>()
// e.filter over an expression: the channels no other row picked, plus this row's own
const freeChannels = e.filter(e.lookup("channels"), (o) =>
  o.c.or(o.c.eq("value", o.ref(".channel")), o.c.notIn("value", e.map("/routes", (x) => x.ref("channel")))),
)

export function RoutingForm() {
  const form = useForm<Routing>({ defaultValues, model })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <FieldArray name="routes" label="Routes" rowLabel="Route" layout="table" newRow={{ channel: "", target: "" }}>
          <SelectField name=".channel" label="Channel" options={freeChannels} placeholder="Pick a channel" />
          <TextField name=".target" label="Target" />
          <FieldArray.RowActions remove />
        </FieldArray>
        <FieldArray.Add to="routes">Add route</FieldArray.Add>
      </Form>
      <Payload form={form} />
    </div>
  )
}

interface LiveSource extends SnapshotSource {
  serialize(): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live, with its state and issues: a readout beside the form, not part of it. */
function Payload({ form }: { form: LiveSource }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize(), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">Live payload</span>
        <span className="tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>{i.path || "(form)"}: {i.message}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>t(()=>import(`./exclusive-B3Bw6nrH.js`),[]));var se={steps:[{task:`Pack the laptop`},{task:`Book the train`},{task:`Print the tickets`}]};function ce(){let e=s({defaultValues:se}),t=f(e,`steps`);return(0,S.jsxs)(d,{form:e,children:[(0,S.jsxs)(y,{name:`steps`,label:`Steps`,rowLabel:`Step`,reorder:!0,newRow:{task:``},handle:(0,S.jsx)(h,{className:`inline-flex size-7 cursor-grab items-center justify-center rounded-md text-muted-foreground hover:bg-muted aria-pressed:bg-muted aria-pressed:ring-2 aria-pressed:ring-ring`,children:(0,S.jsx)(x,{className:`size-4`,"aria-hidden":!0})}),children:[(0,S.jsx)(g,{name:`.task`,label:`Task`}),(0,S.jsx)(y.RowActions,{remove:!0})]}),(0,S.jsx)(y.Add,{to:`steps`,children:`Add step`}),(0,S.jsxs)(m,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[t.length,` steps`]})]})}var $=`import { FieldArray, TextField } from "@kitora/form/fields"
import { Form, LiveRegion, ReorderHandle, useForm, useFormValue } from "@kitora/form/react"
import { GripHorizontal } from "lucide-react"

type Checklist = { steps: Array<{ task: string }> }

const defaultValues: Checklist = { steps: [{ task: "Pack the laptop" }, { task: "Book the train" }, { task: "Print the tickets" }] }

export function ChecklistReorder() {
  const form = useForm<Checklist>({ defaultValues })
  const steps = useFormValue(form, "steps")
  return (
    <Form form={form}>
      {/* handle: your own grip; the headless ReorderHandle keeps Space-grab, arrow moves and announcements */}
      <FieldArray
        name="steps"
        label="Steps"
        rowLabel="Step"
        reorder
        newRow={{ task: "" }}
        handle={
          <ReorderHandle className="inline-flex size-7 cursor-grab items-center justify-center rounded-md text-muted-foreground hover:bg-muted aria-pressed:bg-muted aria-pressed:ring-2 aria-pressed:ring-ring">
            <GripHorizontal className="size-4" aria-hidden />
          </ReorderHandle>
        }
      >
        <TextField name=".task" label="Task" />
        <FieldArray.RowActions remove />
      </FieldArray>
      <FieldArray.Add to="steps">Add step</FieldArray.Add>
      {/* a polite live region: screen readers hear the new count once typing settles */}
      <LiveRegion className="text-[12px] text-muted-foreground tabular-nums">{steps.length} steps</LiveRegion>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>t(()=>import(`./reorder-handle-BciuT2hE.js`),[]));function le(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(e,{title:`Field arrays`,children:`Repeatable rows with stable ids (no reorder tearing), object- or primitive-valued, with a model-derived rollup and min/max bounds and cross-row rules. The row template is plain JSX with row-relative names. Four recipes:`}),(0,S.jsx)(b,{n:1,title:`Invoice line items + reorder + total`,blurb:`A table of object rows you can add, remove and reorder, plus a derived total that recomputes from every row, is announced, and lands in the payload.`,code:E,children:(0,S.jsx)(ne,{})}),(0,S.jsx)(b,{n:2,title:`Simple repeatable list`,blurb:`Arrays of primitives — the row is the value (emails.0, emails.1, …).`,code:A,children:(0,S.jsx)(k,{})}),(0,S.jsx)(b,{n:3,title:`Bounded (min / max rows)`,blurb:`min/max on the array: Add and Remove explain why they are unavailable instead of silently disabling.`,code:I,children:(0,S.jsx)(F,{})}),(0,S.jsx)(b,{n:4,title:`Cross-row rules: exactly one cover, unique captions`,blurb:`Two serializable array rules. The list gets one message, and each conflicting row is marked: both covers, both “Lake” captions. Untick a cover and rename a caption to clear them.`,code:H,children:(0,S.jsx)(V,{})}),(0,S.jsx)(b,{n:5,title:`Animated row removal`,blurb:`exit on the array: a removed card slides out still showing its values, while the payload already lost it. Press Undo during the animation — the real row is back at once.`,code:J,children:(0,S.jsx)(K,{})}),(0,S.jsx)(b,{n:6,title:`Options that exclude sibling rows' picks`,blurb:`e.filter over an expression: each row's channel list drops what other rows chose (its own stays), so a channel cannot be picked twice; change a row and its old channel comes back.`,code:Q,children:(0,S.jsx)(ae,{})}),(0,S.jsx)(b,{n:7,title:`Your own reorder grip and a live row count`,blurb:`handle takes a custom ReorderHandle (keyboard grab and announcements kept); LiveRegion reads the new count to screen readers.`,code:$,children:(0,S.jsx)(ce,{})})]})}export{le as component};