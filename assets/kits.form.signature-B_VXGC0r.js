import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n,ni as r}from"./index-9y5uwRd3.js";import{W as i}from"./messages-BpgLhfTN.js";import{A as a,c as o,h as s}from"./field-config-62hz5rv-.js";import{a as c}from"./fields-3rMiSNLY.js";import{t as l}from"./signature-OAtvqy6_.js";import{t as u}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";var d=n(),f={receiver:``,signature:``,initials:[]},p={async confirm(e){return{id:`pod_`+e.receiver.length}}};function m(){let e=a({defaultValues:f});return(0,d.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,d.jsxs)(o,{form:e,onSubmit:p.confirm,children:[(0,d.jsx)(c,{name:`receiver`,label:`Received by`,required:!0,autoComplete:`name`,description:`The typed name is the record; the drawn mark supports it.`}),(0,d.jsx)(l,{name:`signature`,label:`Signature`,required:!0,description:`Mouse, pen or finger. Stored as a PNG data URL.`}),(0,d.jsx)(l,{name:`initials`,label:`Initials`,format:`strokes`,description:`Stored as vector strokes (pad coordinates).`}),(0,d.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 pt-2`,children:[(0,d.jsx)(o.Submit,{className:r({size:`sm`,className:`w-fit`}),pendingLabel:`Saving…`,children:`Confirm delivery`}),(0,d.jsx)(o.Status,{className:`text-[13px]`,pending:(0,d.jsx)(`span`,{className:`text-muted-foreground`,children:`Submitting…`}),invalid:(0,d.jsx)(`span`,{className:`text-destructive`,children:`Fix the highlighted fields.`}),success:e=>(0,d.jsxs)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:[`Signed · `,e.id]})})]})]}),(0,d.jsx)(h,{form:e})]})}function h({form:e}){let{payload:t,dirty:n,status:r,issues:a}=s(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),i);return(0,d.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,d.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,d.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,d.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,d.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,d.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,d.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var g=`import { buttonVariants } from "@kitora/ui/button"
import { SignatureField, TextField, type SignatureStroke } from "@kitora/form/fields"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Delivery = { receiver: string; signature: string; initials: SignatureStroke[] }
type Saved = { id: string }

const defaultValues: Delivery = { receiver: "", signature: "", initials: [] }

// stub: replace with your API (POST /deliveries/:id/proof)
const api = {
  async confirm(v: Delivery): Promise<Saved> {
    return { id: "pod_" + v.receiver.length }
  },
}

export function DeliveryForm() {
  const form = useForm<Delivery, Delivery, Saved>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <Form form={form} onSubmit={api.confirm}>
        {/* a drawing surface is not keyboard-operable: pair it with a typed name as the signature of record */}
        <TextField name="receiver" label="Received by" required autoComplete="name" description="The typed name is the record; the drawn mark supports it." />
        {/* "data:image/png;base64,…", "" when empty */}
        <SignatureField name="signature" label="Signature" required description="Mouse, pen or finger. Stored as a PNG data URL." />
        {/* [{ points: [{ x, y }] }], [] when empty */}
        <SignatureField name="initials" label="Initials" format="strokes" description="Stored as vector strokes (pad coordinates)." />
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} pendingLabel="Saving…">Confirm delivery</Form.Submit>
          <Form.Status<Saved>
            className="text-[13px]"
            pending={<span className="text-muted-foreground">Submitting…</span>}
            invalid={<span className="text-destructive">Fix the highlighted fields.</span>}
            success={(r) => <span className="text-emerald-700 dark:text-emerald-400">Signed · {r.id}</span>}
          />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>t(()=>import(`./signature-BIrPolHe.js`),[]));function _(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e,{title:`Signature`,children:[`A canvas pad on Pointer Events (mouse, pen, touch; no dependency). The value is a PNG data URL, or vector strokes in pad coordinates that re-render at any size; both empty shapes are empty to `,(0,d.jsx)(`code`,{children:`required`}),`. The pad scales to narrow screens without distorting the ink.`]}),(0,d.jsx)(u,{n:1,title:`Proof of delivery`,blurb:`A typed name of record, a required PNG signature, and initials as strokes.`,code:g,children:(0,d.jsx)(m,{})})]})}export{_ as component};