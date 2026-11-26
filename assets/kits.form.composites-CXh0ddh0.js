import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i}from"./index-q72zUtm9.js";import{W as a}from"./messages-Bsb0m0Hq.js";import{A as o,J as s,Y as c,c as l,h as u}from"./field-config-DXiPz8Cg.js";import{i as d}from"./fields-CoJCsIMd.js";import{n as f,r as p,t as m}from"./composite-paths-C2lIvszV.js";import{i as h,r as g,t as _}from"./composites-2kvy2zYn.js";import{a as v,i as ee,n as y,r as b,t as x}from"./codec-Bj0fHA1B.js";import{t as S}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var C=i(),w={budget:g.empty(`USD`)};function T(){let e=o({defaultValues:w});return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,C.jsx)(l,{form:e,children:(0,C.jsx)(g,{name:`budget`,label:`Budget`})}),(0,C.jsx)(te,{form:e})]})}function te({form:e}){let{payload:t,dirty:n,status:r,issues:i}=u(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),a);return(0,C.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,C.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,C.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,C.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,C.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,C.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var E=`import { MoneyField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

// one field, nested value: { amount: number, currency: string }
type Campaign = { budget: ReturnType<typeof MoneyField.empty> }

// the empty value comes from the field
const defaultValues: Campaign = { budget: MoneyField.empty("USD") }

export function CampaignForm() {
  const form = useForm<Campaign>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <MoneyField name="budget" label="Budget" />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>r(()=>import(`./money-BiypOH6j.js`),[]));var ne={phone:h.empty(),mobile:h.empty()},D={"+1":`(999) 999-9999`,"+44":`99999 999999`,"+91":`99999 99999`,"+49":`9999 9999999?9`};function O(){let e=o({defaultValues:ne});return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,C.jsx)(l,{form:e,children:(0,C.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,C.jsx)(h,{name:`phone`,label:`Phone`}),(0,C.jsx)(h,{name:`mobile`,label:`Mobile (masked)`,mask:D})]})}),(0,C.jsx)(k,{form:e})]})}function k({form:e}){let t=u(e,e=>e.serialize(),a);return(0,C.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,C.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,C.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var A=`import { PhoneField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual } from "@kitora/form/core"

// nested value: { country: string, number: string }
type Contact = { phone: ReturnType<typeof PhoneField.empty>; mobile: ReturnType<typeof PhoneField.empty> }

const defaultValues: Contact = { phone: PhoneField.empty(), mobile: PhoneField.empty() }

/** Opt-in: the number formats as it is typed, per dial code; the stored number is the digits. */
const MOBILE_MASKS = { "+1": "(999) 999-9999", "+44": "99999 999999", "+91": "99999 99999", "+49": "9999 9999999?9" }

export function ContactForm() {
  const form = useForm<Contact>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <div className="flex flex-col gap-4">
          <PhoneField name="phone" label="Phone" />
          <PhoneField name="mobile" label="Mobile (masked)" mask={MOBILE_MASKS} />
        </div>
      </Form>
      <Payload form={form} />
    </div>
  )
}

/** What the form would submit, live: a readout beside the form, not part of it. */
function Payload({ form }: { form: SnapshotSource & { serialize(): unknown } }) {
  const payload = useFormSnapshot(form, (s) => s.serialize(), deepEqual)
  return (
    <aside className="w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card">
      <div className="border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium">Live payload</div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>r(()=>import(`./phone-Cl4rWG4t.js`),[]));var j={address:_.empty(`US`)};function M(){let e=o({defaultValues:j});return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,C.jsx)(l,{form:e,children:(0,C.jsx)(_,{name:`address`,label:`Shipping address`})}),(0,C.jsx)(N,{form:e})]})}function N({form:e}){let t=u(e,e=>e.serialize(),a);return(0,C.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,C.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,C.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var P=`import { AddressField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual } from "@kitora/form/core"

// same canonical value across locales: { line1, line2, city, state, postalCode, country }
type Shipping = { address: ReturnType<typeof AddressField.empty> }

const defaultValues: Shipping = { address: AddressField.empty("US") }

export function ShippingForm() {
  const form = useForm<Shipping>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        {/* the layout (I4) follows the address's own country: JP postal-first, DE postal-before-city, GB no state; or pin one with locale="JP" */}
        <AddressField name="address" label="Shipping address" />
      </Form>
      <Payload form={form} />
    </div>
  )
}

/** What the form would submit, live: a readout beside the form, not part of it. */
function Payload({ form }: { form: SnapshotSource & { serialize(): unknown } }) {
  const payload = useFormSnapshot(form, (s) => s.serialize(), deepEqual)
  return (
    <aside className="w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card">
      <div className="border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium">Live payload</div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>r(()=>import(`./address-KQ90gVg5.js`),[]));var F={phone:``,sku:``};function I(){let e=o({defaultValues:F});return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,C.jsxs)(l,{form:e,children:[(0,C.jsx)(x,{name:`phone`,label:`Phone (mask)`,codec:ee,inputMode:`tel`}),(0,C.jsx)(x,{name:`population`,label:`Population (grouped)`,codec:y,inputMode:`numeric`}),(0,C.jsx)(x,{name:`price`,label:`Price (USD, stored as cents)`,codec:v,inputMode:`decimal`}),(0,C.jsx)(x,{name:`sku`,label:`SKU (uppercased)`,codec:b})]}),(0,C.jsx)(L,{form:e})]})}function L({form:e}){let t=u(e,e=>e.serialize(),a);return(0,C.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,C.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,C.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var R=`import { CodecField, integerCodec, upperCodec, usdCentsCodec, usPhoneCodec } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual } from "@kitora/form/core"

// canonical value in the store ≠ what the user sees (display ⇄ canonical seam)
type Listing = { phone: string; population?: number; price?: number; sku: string }

const defaultValues: Listing = { phone: "", sku: "" }

// roll your own codec: { format: (canonical) => display, parse: (display) => canonical }
export function ListingForm() {
  const form = useForm<Listing>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        {/* "1234567890" → "(123) 456-7890" */}
        <CodecField name="phone" label="Phone (mask)" codec={usPhoneCodec} inputMode="tel" />
        {/* 1000000 → "1,000,000" */}
        <CodecField name="population" label="Population (grouped)" codec={integerCodec} inputMode="numeric" />
        {/* 123456 cents → "$1,234.56" */}
        <CodecField name="price" label="Price (USD, stored as cents)" codec={usdCentsCodec} inputMode="decimal" />
        {/* "abc" → "ABC" */}
        <CodecField name="sku" label="SKU (uppercased)" codec={upperCodec} />
      </Form>
      <Payload form={form} />
    </div>
  )
}

/** What the form would submit, live: a readout beside the form, not part of it. */
function Payload({ form }: { form: SnapshotSource & { serialize(): unknown } }) {
  const payload = useFormSnapshot(form, (s) => s.serialize(), deepEqual)
  return (
    <aside className="w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card">
      <div className="border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium">Live payload</div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>r(()=>import(`./codecs-M8kySSau.js`),[]));var z={viaScript:!1,viaServer:!1,preferServer:!0};function B(){let e=o({defaultValues:z});return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,C.jsxs)(l,{form:e,children:[(0,C.jsx)(d,{name:`preferServer`,label:`Prefer server-side delivery`}),(0,C.jsx)(p,{label:`Track checkout`,description:`One switch; stores viaScript and viaServer`,paths:[`viaScript`,`viaServer`,`preferServer`],read:e=>e.viaScript===!0||e.viaServer===!0,write:(e,t)=>[{path:`viaScript`,value:e&&t.preferServer!==!0},{path:`viaServer`,value:e&&t.preferServer===!0}]})]}),(0,C.jsx)(V,{form:e})]})}function V({form:e}){let{payload:t,dirty:n,status:r,issues:i}=u(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),a);return(0,C.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,C.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,C.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,C.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,C.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,C.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var H=`import { CompositeSwitchField, SwitchField, type CompositeValues, type CompositeWrite } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Tracking = { viaScript: boolean; viaServer: boolean; preferServer: boolean }

const defaultValues: Tracking = { viaScript: false, viaServer: false, preferServer: true }

export function TrackingForm() {
  const form = useForm<Tracking>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <SwitchField name="preferServer" label="Prefer server-side delivery" />
        {/* one control, two stored booleans: the writes land as one undo step and one change event */}
        <CompositeSwitchField
          label="Track checkout"
          description="One switch; stores viaScript and viaServer"
          paths={["viaScript", "viaServer", "preferServer"]}
          read={(v: CompositeValues) => v.viaScript === true || v.viaServer === true}
          write={(on: boolean, v: CompositeValues): CompositeWrite[] => [
            { path: "viaScript", value: on && v.preferServer !== true },
            { path: "viaServer", value: on && v.preferServer === true },
          ]}
        />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>r(()=>import(`./multi-path-DDLRjG5x.js`),[]));var U={viaScript:!1,viaServer:!1,preferServer:!0},{c:W,e:G}=c(),K=W.or(W.eq(`viaScript`,!0),W.eq(`viaServer`,!0)),q=[{set:`viaScript`,to:W.and(G.arg(`value`),W.not(W.eq(`preferServer`,!0)))},{set:`viaServer`,to:W.and(G.arg(`value`),W.eq(`preferServer`,!0))}];function J(){let e=o({defaultValues:U});return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,C.jsxs)(l,{form:e,children:[(0,C.jsx)(d,{name:`preferServer`,label:`Prefer server-side delivery`}),(0,C.jsx)(f,{id:`track`,type:`switch`,label:`Track checkout`,description:`A model node: its read and write are JSON expressions`,read:K,write:q})]}),(0,C.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,C.jsx)(Y,{form:e}),(0,C.jsx)(X,{form:e})]})]})}s()(({f:e})=>({fields:[e.switch(`preferServer`,{label:`Prefer server-side delivery`}),e.composite(`track`,{label:`Track checkout`,read:K,write:q})]}));function Y({form:e}){let{payload:t,dirty:n,status:r,issues:i}=u(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),a);return(0,C.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,C.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,C.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,C.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,C.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,C.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}function X({form:e}){let t=u(e,e=>e.getModel().fields.find(e=>e.kind===`composite`)??null,a);return(0,C.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,C.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`font-medium`,children:`getModel(): the composite node`}),(0,C.jsx)(`span`,{className:`text-muted-foreground`,children:`JSON`})]}),(0,C.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var Z=`import { type CompositeWriteOpt, deepEqual, defineForm, type Issue, kit, type SubmitStatus } from "@kitora/form/core"
import { AutoForm } from "@kitora/form/auto"
import { CompositeField, SwitchField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Tracking = { viaScript: boolean; viaServer: boolean; preferServer: boolean }

const defaultValues: Tracking = { viaScript: false, viaServer: false, preferServer: true }
const { c, e } = kit<Tracking>()
// the control value, read from the stored paths
const read = c.or(c.eq("viaScript", true), c.eq("viaServer", true))
// the writes, in order; e.arg("value") is the new control value
const write: Array<CompositeWriteOpt<Tracking>> = [
  { set: "viaScript", to: c.and(e.arg("value"), c.not(c.eq("preferServer", true))) },
  { set: "viaServer", to: c.and(e.arg("value"), c.eq("preferServer", true)) },
]

// JSX: registers a pathless "composite" node in the form's model (JSON, no functions)
export function TrackingForm() {
  const form = useForm<Tracking>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <SwitchField name="preferServer" label="Prefer server-side delivery" />
        <CompositeField id="track" type="switch" label="Track checkout" description="A model node: its read and write are JSON expressions" read={read} write={write} />
      </Form>
      <div className="flex min-w-0 flex-col gap-3">
        <Payload form={form} />
        <ModelNode form={form} />
      </div>
    </div>
  )
}

// the same node in a definition: JSON round-trips, AutoForm renders it, the server
// validates what it stores and applies a no-JS post of "@track" through \`write\`
const model = defineForm<Tracking>()(({ f }) => ({
  fields: [f.switch("preferServer", { label: "Prefer server-side delivery" }), f.composite("track", { label: "Track checkout", read, write })],
}))

export function TrackingAutoForm() {
  return <AutoForm def={model} defaultValues={defaultValues} />
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

/** The composite node the JSX registered, as the model holds it (plain JSON). */
function ModelNode({ form }: { form: SnapshotSource & { getModel(): { fields: Array<{ kind: string }> } } }) {
  const node = useFormSnapshot(form, (s: typeof form) => s.getModel().fields.find((n) => n.kind === "composite") ?? null, deepEqual)
  return (
    <aside className="w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">getModel(): the composite node</span>
        <span className="text-muted-foreground">JSON</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(node, null, 2)}
      </pre>
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>r(()=>import(`./model-composite-z2rw2STD.js`),[]));var Q=e(n(),1),re=[{value:`free`,label:`Free`},{value:`pro`,label:`Pro`}];function ie(){let e=o({defaultValues:{note:``}}),[t,n]=(0,Q.useState)(!0),[r,i]=(0,Q.useState)(`free`);return(0,C.jsxs)(l,{form:e,children:[(0,C.jsx)(m,{type:`switch`,label:`Email alerts`,value:t,onChange:n,disabled:!1,readOnly:!1,postName:`alerts`}),(0,C.jsx)(m,{type:`select`,label:`Plan`,value:r,onChange:i,disabled:!1,readOnly:!1,postName:`plan`,props:{options:re}}),(0,C.jsxs)(`p`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[`alerts: `,String(t),` · plan: `,String(r)]})]})}var $=`import { CompositeControl } from "@kitora/form/fields"
import type { Json } from "@kitora/form/core"
import { Form, useForm } from "@kitora/form/react"
import { useState } from "react"

const PLANS = [{ value: "free", label: "Free" }, { value: "pro", label: "Pro" }]

export function CompositeControlParts() {
  const form = useForm<{ note: string }>({ defaultValues: { note: "" } })
  const [alerts, setAlerts] = useState<Json>(true)
  const [plan, setPlan] = useState<Json>("free")
  return (
    <Form form={form}>
      {/* the presentational control behind f.composite: value in, onChange out, postName for a native submit */}
      <CompositeControl type="switch" label="Email alerts" value={alerts} onChange={setAlerts} disabled={false} readOnly={false} postName="alerts" />
      <CompositeControl type="select" label="Plan" value={plan} onChange={setPlan} disabled={false} readOnly={false} postName="plan" props={{ options: PLANS }} />
      <p className="text-[12px] text-muted-foreground tabular-nums">
        alerts: {String(alerts)} · plan: {String(plan)}
      </p>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>r(()=>import(`./composite-control-BgC1wjIk.js`),[]));function ae(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(t,{title:`Composite fields`,children:[`Each composite owns a nested object value (D2) and lays its sub-fields on the grid. One `,(0,C.jsx)(`code`,{children:`name`}),`, one nested payload branch. Three recipes:`]}),(0,C.jsx)(S,{n:1,title:`Money (amount + currency)`,blurb:`A single field whose value is { amount, currency }.`,code:E,children:(0,C.jsx)(T,{})}),(0,C.jsx)(S,{n:2,title:`Phone (country + number)`,blurb:"Country-code select paired with the national number; value is { country, number }. The second field opts into `mask` with one pattern per dial code: the number formats as it is typed, the caret stays where you type, and the stored number is the digits.",code:A,children:(0,C.jsx)(O,{})}),(0,C.jsx)(S,{n:3,title:`Address (locale-aware, I4)`,blurb:`One canonical shape; pick another country and the sub-fields reorder/relabel — JP postal-first, DE postal-before-city, GB drops state.`,code:P,children:(0,C.jsx)(M,{})}),(0,C.jsx)(S,{n:4,title:`Codecs (display ⇄ canonical)`,blurb:`CodecField keeps a clean canonical value in the store while showing a formatted display — masks, grouping, cents, uppercase.`,code:R,children:(0,C.jsx)(I,{})}),(0,C.jsx)(S,{n:5,title:`One control over several paths`,blurb:`CompositeSwitchField reads one on/off from two stored booleans and writes the preferred one back, as one undo step.`,code:H,children:(0,C.jsx)(B,{})}),(0,C.jsx)(S,{n:6,title:`A composite in the model (f.composite)`,blurb:`The same switch as a model node: read and write are expressions, so it is JSON, renders through AutoForm and runs on the server. One click is one undo step and one change event.`,code:Z,children:(0,C.jsx)(J,{})}),(0,C.jsx)(S,{n:7,title:`The composite control by hand`,blurb:`CompositeControl is the presentational switch / select behind f.composite: value in, onChange out, postName for a native submit.`,code:$,children:(0,C.jsx)(ie,{})})]})}export{ae as component};