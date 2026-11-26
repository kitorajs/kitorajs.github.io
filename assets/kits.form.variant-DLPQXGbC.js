import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i,ni as a}from"./index-B9ukmIN1.js";import{d as o}from"./field-options-CrzCnxI5.js";import{W as s}from"./messages-C_IMdr_-.js";import{A as c,c as l,d as u,f as d,h as f}from"./field-config-17kME8Vl.js";import{a as p,n as m,o as h,r as g,t as _}from"./fields-CwxxBZgA.js";import{n as v,r as y}from"./card-Dj7OrcIG.js";import{t as b}from"./example-BGnSQG2Y.js";import"./demos-Ds1NfSaA.js";var x=i(),S={name:``,type:`sql`},C=[{label:`SQL`,value:`sql`},{label:`Vector`,value:`vector`},{label:`Custom API`,value:`custom`}];function w(){let e=c({defaultValues:S});return(0,x.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,x.jsxs)(l,{form:e,children:[(0,x.jsx)(p,{name:`name`,label:`Name`}),(0,x.jsx)(g,{name:`type`,label:`Type`,options:C}),(0,x.jsxs)(u,{of:`type`,children:[(0,x.jsx)(u.Case,{is:`sql`,children:(0,x.jsx)(p,{name:`credentialId`,label:`Credential ID`})}),(0,x.jsx)(u.Case,{is:`vector`,children:(0,x.jsxs)(o,{cols:{base:1,md:2},children:[(0,x.jsx)(p,{name:`itemGroup`,label:`Item group`}),(0,x.jsx)(m,{name:`limit`,label:`Limit`})]})}),(0,x.jsx)(u.Case,{is:`custom`,children:(0,x.jsx)(h,{name:`customData`,label:`Custom JSON`,rows:4})})]})]}),(0,x.jsx)(T,{form:e})]})}function T({form:e}){let{payload:t,dirty:n,status:r,issues:i}=f(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,x.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,x.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,x.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,x.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,x.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,x.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,x.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var E=`import { FormGrid, NumberField, SelectField, TextareaField, TextField } from "@kitora/form/fields"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, type SnapshotSource, useForm, useFormSnapshot, Variant } from "@kitora/form/react"

type Tool = { name: string; type: "sql" | "vector" | "custom"; credentialId?: string; itemGroup?: string; limit?: number; customData?: string }

const defaultValues: Tool = { name: "", type: "sql" }
const types = [{ label: "SQL", value: "sql" }, { label: "Vector", value: "vector" }, { label: "Custom API", value: "custom" }]

// Switching prunes the hidden branch from the payload (unregister-on-hide).
export function ToolForm() {
  const form = useForm<Tool>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <Form form={form}>
        <TextField name="name" label="Name" />
        <SelectField name="type" label="Type" options={types} />
        {/* 'type' is the sibling field above: its value picks the branch */}
        <Variant of="type">
          <Variant.Case is="sql">
            <TextField name="credentialId" label="Credential ID" />
          </Variant.Case>
          <Variant.Case is="vector">
            <FormGrid cols={{ base: 1, md: 2 }}>
              <TextField name="itemGroup" label="Item group" />
              <NumberField name="limit" label="Limit" />
            </FormGrid>
          </Variant.Case>
          <Variant.Case is="custom">
            <TextareaField name="customData" label="Custom JSON" rows={4} />
          </Variant.Case>
        </Variant>
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
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>r(()=>import(`./tool-pxRIPCRo.js`),[]));var D={amount:49,method:`card`},O=[{value:`card`,label:`Card`},{value:`bank`,label:`Bank transfer`},{value:`paypal`,label:`PayPal`}];function k(){let e=c({defaultValues:D});return(0,x.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,x.jsxs)(l,{form:e,children:[(0,x.jsx)(m,{name:`amount`,label:`Amount (shared — survives switching method)`}),(0,x.jsx)(g,{name:`method`,label:`Payment method`,options:O}),(0,x.jsxs)(u,{of:`method`,children:[(0,x.jsx)(u.Case,{is:`card`,children:(0,x.jsxs)(o,{cols:{base:1,md:2},children:[(0,x.jsx)(y,{name:`cardNumber`,label:`Card number`}),(0,x.jsx)(v,{name:`cardExp`,label:`Expiry`})]})}),(0,x.jsx)(u.Case,{is:`bank`,children:(0,x.jsx)(p,{name:`iban`,label:`IBAN`,placeholder:`DE89 3704 0044 0532 0130 00`})}),(0,x.jsx)(u.Case,{is:`paypal`,children:(0,x.jsx)(p,{name:`paypalEmail`,label:`PayPal email`,type:`email`})})]})]}),(0,x.jsx)(A,{form:e})]})}function A({form:e}){let{payload:t,dirty:n,status:r,issues:i}=f(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,x.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,x.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,x.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,x.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,x.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,x.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,x.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var j=`import { CardExpiryField, CardNumberField, FormGrid, NumberField, SelectField, TextField } from "@kitora/form/fields"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, type SnapshotSource, useForm, useFormSnapshot, Variant } from "@kitora/form/react"

type Payment = { amount: number; method: "card" | "bank" | "paypal"; cardNumber?: string; cardExp?: string; iban?: string; paypalEmail?: string }

const defaultValues: Payment = { amount: 49, method: "card" }
const methods = [{ value: "card", label: "Card" }, { value: "bank", label: "Bank transfer" }, { value: "paypal", label: "PayPal" }]

// 'amount' lives outside the branches, so it survives every method switch.
export function PaymentForm() {
  const form = useForm<Payment>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <Form form={form}>
        <NumberField name="amount" label="Amount (shared — survives switching method)" />
        <SelectField name="method" label="Payment method" options={methods} />
        {/* 'method' is the sibling field above: its value picks the branch */}
        <Variant of="method">
          <Variant.Case is="card">
            <FormGrid cols={{ base: 1, md: 2 }}>
              <CardNumberField name="cardNumber" label="Card number" />
              <CardExpiryField name="cardExp" label="Expiry" />
            </FormGrid>
          </Variant.Case>
          <Variant.Case is="bank">
            <TextField name="iban" label="IBAN" placeholder="DE89 3704 0044 0532 0130 00" />
          </Variant.Case>
          <Variant.Case is="paypal">
            <TextField name="paypalEmail" label="PayPal email" type="email" />
          </Variant.Case>
        </Variant>
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
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>r(()=>import(`./payment-DkycE5-0.js`),[]));var M=e(n(),1),N={name:`Ada`,separate:!0,street:`1 Loop St`,city:`London`,plan:`express`,window:`Morning`},P=[{label:`Standard`,value:`standard`},{label:`Express`,value:`express`}],F=6,I=`[&_[data-state=exiting]>*]:animate-out [&_[data-state=exiting]>*]:fade-out-0 [&_[data-state=exiting]>*]:slide-out-to-top-2 [&_[data-state=exiting]>*]:duration-700 [&_[data-state=entered]>*]:animate-in [&_[data-state=entered]>*]:fade-in-0 [&_[data-state=entered]>*]:duration-300`;function L(){let e=c({defaultValues:N}),[t,n]=(0,M.useState)([]),r=e=>n(t=>[...t.slice(-(F-1)),`${new Date().toLocaleTimeString()} ${e} exit complete — value cleared`]);return(0,x.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,x.jsxs)(l,{form:e,className:I,children:[(0,x.jsx)(p,{name:`name`,label:`Name`}),(0,x.jsx)(_,{name:`separate`,label:`Ship to a different address`}),(0,x.jsx)(d,{path:`separate`,is:!0,exit:{onExitComplete:()=>r(`address`)},children:(0,x.jsxs)(o,{cols:{base:1,md:2},children:[(0,x.jsx)(p,{name:`street`,label:`Street`}),(0,x.jsx)(p,{name:`city`,label:`City`})]})}),(0,x.jsx)(g,{name:`plan`,label:`Delivery`,options:P}),(0,x.jsx)(u,{of:`plan`,exit:{onExitComplete:()=>r(`delivery window`)},children:(0,x.jsx)(u.Case,{is:`express`,children:(0,x.jsx)(p,{name:`window`,label:`Delivery window`})})})]}),(0,x.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,x.jsx)(R,{form:e}),(0,x.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,x.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Exits`}),(0,x.jsx)(`div`,{className:`space-y-0.5 p-3 font-mono text-[11px]`,children:t.length===0?(0,x.jsx)(`p`,{className:`font-sans text-muted-foreground`,children:`Untick the checkbox or pick Standard: the fields fade out still showing their values, then leave.`}):t.map(e=>(0,x.jsx)(`p`,{children:e},e))})]})]})]})}function R({form:e}){let{payload:t,dirty:n,status:r,issues:i}=f(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,x.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,x.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,x.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,x.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,x.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,x.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,x.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var z=`import { useState } from "react"
import { CheckboxField, FormGrid, SelectField, TextField } from "@kitora/form/fields"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, type SnapshotSource, useForm, useFormSnapshot, Variant, When } from "@kitora/form/react"

type Shipping = { name: string; separate: boolean; street?: string; city?: string; plan: "standard" | "express"; window?: string }

const defaultValues: Shipping = { name: "Ada", separate: true, street: "1 Loop St", city: "London", plan: "express", window: "Morning" }
const plans = [{ label: "Standard", value: "standard" }, { label: "Express", value: "express" }]
/** How many exit lines the log keeps. */
const LOG_LINES = 6

// the engine sets data-state="exiting" on the hidden branch and waits for its animations;
// this CSS (the enter / exit utilities in @kitora/primitives/styles.css) is the animation: exiting children slide and fade out, entering ones fade in
const exitAnimation =
  "[&_[data-state=exiting]>*]:animate-out [&_[data-state=exiting]>*]:fade-out-0 [&_[data-state=exiting]>*]:slide-out-to-top-2 [&_[data-state=exiting]>*]:duration-700 [&_[data-state=entered]>*]:animate-in [&_[data-state=entered]>*]:fade-in-0 [&_[data-state=entered]>*]:duration-300"

export function ShippingForm() {
  const form = useForm<Shipping>({ defaultValues })
  // when each exit finished (readout only)
  const [log, setLog] = useState<string[]>([])
  const note = (what: string): void => setLog((l) => [...l.slice(-(LOG_LINES - 1)), \`\${new Date().toLocaleTimeString()} \${what} exit complete — value cleared\`])
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <Form form={form} className={exitAnimation}>
        <TextField name="name" label="Name" />
        <CheckboxField name="separate" label="Ship to a different address" />
        {/* "separate" is a sibling field; while the branch animates out its values are held,
            and they clear (whenHidden) only when the animation finished */}
        <When path="separate" is={true} exit={{ onExitComplete: () => note("address") }}>
          <FormGrid cols={{ base: 1, md: 2 }}>
            <TextField name="street" label="Street" />
            <TextField name="city" label="City" />
          </FormGrid>
        </When>
        <SelectField name="plan" label="Delivery" options={plans} />
        <Variant of="plan" exit={{ onExitComplete: () => note("delivery window") }}>
          <Variant.Case is="express">
            <TextField name="window" label="Delivery window" />
          </Variant.Case>
        </Variant>
      </Form>
      <div className="flex flex-col gap-3">
        <Payload form={form} />
        <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
          <div className="border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium">Exits</div>
          <div className="space-y-0.5 p-3 font-mono text-[11px]">
            {log.length === 0 ? (
              <p className="font-sans text-muted-foreground">Untick the checkbox or pick Standard: the fields fade out still showing their values, then leave.</p>
            ) : (
              log.map((l) => <p key={l}>{l}</p>)
            )}
          </div>
        </aside>
      </div>
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
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>r(()=>import(`./exit-DOXnCdgQ.js`),[]));var B={method:`card`,card:{mode:`saved`,savedId:`card_4242`}},V=[{label:`Card`,value:`card`},{label:`Bank transfer`,value:`bank`}],H=[{label:`Saved card`,value:`saved`},{label:`New card`,value:`new`}],U=[{label:`Visa ···· 4242`,value:`card_4242`},{label:`Mastercard ···· 4444`,value:`card_4444`}];function W(){let e=c({defaultValues:B});return(0,x.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,x.jsxs)(l,{form:e,onSubmit:e=>console.log(e),children:[(0,x.jsx)(g,{name:`method`,label:`Payment method`,options:V}),(0,x.jsxs)(u,{of:`method`,children:[(0,x.jsxs)(u.Case,{is:`card`,defaults:{"card.mode":`saved`,"card.savedId":`card_4242`},children:[(0,x.jsx)(g,{name:`card.mode`,label:`Pay with`,options:H}),(0,x.jsxs)(u,{of:`card.mode`,whenHidden:`keep`,children:[(0,x.jsx)(u.Case,{is:`saved`,children:(0,x.jsx)(g,{name:`card.savedId`,label:`Saved card`,options:U,required:!0})}),(0,x.jsxs)(u.Case,{is:`new`,children:[(0,x.jsx)(y,{name:`card.number`,label:`Card number`,required:!0}),(0,x.jsx)(v,{name:`card.exp`,label:`Expiry`,required:!0}),(0,x.jsx)(p,{name:`card.holder`,label:`Name on card`,required:!0})]})]})]}),(0,x.jsx)(u.Case,{is:`bank`,children:(0,x.jsx)(p,{name:`bank.iban`,label:`IBAN`,required:!0})})]}),(0,x.jsx)(l.Submit,{className:a({size:`sm`,className:`w-fit`}),children:`Pay`})]}),(0,x.jsx)(G,{form:e})]})}function G({form:e}){let t=f(e,e=>e.serialize(),s);return(0,x.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,x.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,x.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var K=`import { buttonVariants } from "@kitora/ui/button"
import { CardExpiryField, CardNumberField, SelectField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot, Variant } from "@kitora/form/react"
import { deepEqual } from "@kitora/form/core"

type Checkout = {
  method: "card" | "bank"
  card?: { mode?: "saved" | "new"; savedId?: string; number?: string; exp?: string; holder?: string }
  bank?: { iban?: string }
}

const defaultValues: Checkout = { method: "card", card: { mode: "saved", savedId: "card_4242" } }
const methods = [{ label: "Card", value: "card" }, { label: "Bank transfer", value: "bank" }]
const modes = [{ label: "Saved card", value: "saved" }, { label: "New card", value: "new" }]
// stub: replace with your API
const savedCards = [{ label: "Visa ···· 4242", value: "card_4242" }, { label: "Mastercard ···· 4444", value: "card_4444" }]

export function CheckoutForm() {
  const form = useForm<Checkout>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={(values) => console.log(values)}>
        <SelectField name="method" label="Payment method" options={methods} />
        {/* 'method' is the sibling field above. Leaving "card" clears the whole card subtree, the
            inner variant included; coming back seeds the branch defaults, so no phantom "required" */}
        <Variant of="method">
          <Variant.Case is="card" defaults={{ "card.mode": "saved", "card.savedId": "card_4242" }}>
            <SelectField name="card.mode" label="Pay with" options={modes} />
            {/* whenHidden="keep": a half-typed new card survives a hop to "saved" and back (not submitted) */}
            <Variant of="card.mode" whenHidden="keep">
              <Variant.Case is="saved">
                <SelectField name="card.savedId" label="Saved card" options={savedCards} required />
              </Variant.Case>
              <Variant.Case is="new">
                <CardNumberField name="card.number" label="Card number" required />
                <CardExpiryField name="card.exp" label="Expiry" required />
                <TextField name="card.holder" label="Name on card" required />
              </Variant.Case>
            </Variant>
          </Variant.Case>
          <Variant.Case is="bank">
            <TextField name="bank.iban" label="IBAN" required />
          </Variant.Case>
        </Variant>
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Pay</Form.Submit>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>r(()=>import(`./nested-vXkCImDT.js`),[]));function q(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(t,{title:`Discriminated-union variants`,children:[`One `,(0,x.jsx)(`code`,{children:`<Variant of="…">`}),` swaps the field set per branch. Hidden branches unregister (pruned from the payload); fields outside the variant survive; variants nest. Kills the "scattered conditional logic" anti-pattern.`]}),(0,x.jsx)(b,{n:1,title:`Tool configuration`,blurb:`Three branches (SQL / Vector / Custom); watch the live payload prune the old branch on switch.`,code:E,children:(0,x.jsx)(w,{})}),(0,x.jsx)(b,{n:2,title:`Payment method (shared field)`,blurb:`The amount lives outside the variant — switching card → bank → PayPal keeps it while swapping the method-specific fields.`,code:j,children:(0,x.jsx)(k,{})}),(0,x.jsx)(b,{n:3,title:`Animated hide (exit-aware teardown)`,blurb:`With exit, a hidden branch stays in the DOM as data-state="exiting" until its CSS animation ends: the fields fade out still showing their values, and the values clear only afterwards. Re-tick mid-animation and nothing is lost.`,code:z,children:(0,x.jsx)(L,{})}),(0,x.jsx)(b,{n:4,title:`Nested variants (payment → card → saved / new)`,blurb:`A variant inside a variant case. Leaving Card clears the whole card subtree in one flush; coming back seeds the branch defaults (saved card preselected), so the required select never shows a phantom error. The inner variant keeps a half-typed new card across saved ↔ new (whenHidden="keep", kept but not submitted). A switch is one flush: the old subtree clears and the new branch seeds before validation runs (switch and fill together with form.batch).`,code:K,children:(0,x.jsx)(W,{})})]})}export{q as component};