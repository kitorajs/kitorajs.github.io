import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n}from"./index-q72zUtm9.js";import{W as r}from"./messages-Bsb0m0Hq.js";import{A as i,c as a,h as o}from"./field-config-DXiPz8Cg.js";import{i as s}from"./card-DkB008VL.js";import{t as c}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var l=n(),u={};function d(){let e=i({defaultValues:u,validateOn:`blur`});return(0,l.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,l.jsxs)(a,{form:e,children:[(0,l.jsx)(s,{name:`card`,label:`Card details`,required:!0}),(0,l.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Try 4111 1111 1111 1111 (Visa) or 3782 822463 10005 (Amex, 4-6-5 grouping); change one digit to fail the Luhn check.`})]}),(0,l.jsx)(f,{form:e})]})}function f({form:e}){let{payload:t,dirty:n,status:i,issues:a}=o(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),r);return(0,l.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,l.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,l.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,l.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,i]})]}),(0,l.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,l.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,l.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var p=`import { PaymentCardField } from "@kitora/form/fields"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

// value: { number: "4111111111111111", expiry: "07/29", cvc: "123" } — digits only, sensitive: "pci"
type Payment = { card?: { number?: string; expiry?: string; cvc?: string } }

const defaultValues: Payment = {}

// Real card capture belongs in a tokenizing iframe (see the PCI demo); these fields serve tests and non-tokenized cases.
export function PaymentForm() {
  const form = useForm<Payment>({ defaultValues, validateOn: "blur" })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <Form form={form}>
        {/* brand detection + grouping; luhn and notExpired rules come with the field */}
        <PaymentCardField name="card" label="Card details" required />
        {/* or one by one: CardNumberField (luhn, cc-number) · CardExpiryField (notExpired, cc-exp) · CardCvcField */}
        {/* definition: f.cardNumber("cc") / f.cardExpiry("exp") — the rules come with the type */}
        <p className="text-xs text-muted-foreground">
          Try 4111 1111 1111 1111 (Visa) or 3782 822463 10005 (Amex, 4-6-5 grouping); change one digit to fail the Luhn check.
        </p>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(p,()=>t(()=>import(`./cards-DuNQpUiE.js`),[]));function m(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e,{title:`Card fields`,children:[`Brand detection and per-brand grouping, digits as the canonical value, `,(0,l.jsx)(`code`,{children:`luhn`}),` and `,(0,l.jsx)(`code`,{children:`notExpired`}),` as named rules in the default registry (so a server validating the same definition agrees), browser autofill tokens, PCI sensitivity by default.`]}),(0,l.jsx)(c,{n:1,title:`Payment card`,blurb:`Number + expiry + CVC under one group path, each with its own error.`,code:p,children:(0,l.jsx)(d,{})})]})}export{m as component};