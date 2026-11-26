import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-Clz4Lth_.js";import{s as n}from"./kit-docs-DpYhPoxM.js";import{Bc as r,Cc as i,Ic as a}from"./index-q72zUtm9.js";import{W as o}from"./messages-Bsb0m0Hq.js";import{A as s,c,h as l,t as u}from"./field-config-DXiPz8Cg.js";import{t as d}from"./composites-2kvy2zYn.js";import{r as f}from"./advanced-TM7fkV_A.js";import{t as p}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var m=e(r(),1),h=a(),g={name:{},address:d.empty(`US`)},_=[{code:`en`,label:`EN`},{code:`ar`,label:`AR`},{code:`ja`,label:`JA`}];function v(){let e=s({defaultValues:g}),[n,r]=(0,m.useState)(!1);return(0,h.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,h.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,h.jsxs)(`label`,{className:`flex items-center gap-2 text-[13px]`,children:[(0,h.jsx)(t,{size:`sm`,checked:n,onCheckedChange:r}),` Right-to-left`]}),(0,h.jsx)(c,{form:e,children:(0,h.jsxs)(u,{dir:n?`rtl`:`ltr`,className:`flex flex-col gap-3`,children:[(0,h.jsx)(f,{name:`name`,label:`Display name`,locales:_}),(0,h.jsx)(d,{name:`address`,label:`Address`})]})})]}),(0,h.jsx)(y,{form:e})]})}function y({form:e}){let{payload:t,dirty:n,status:r,issues:i}=l(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),o);return(0,h.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,h.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,h.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,h.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,h.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,h.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,h.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var b=`import { useState } from "react"
import { Switch } from "@kitora/ui/switch"
import { AddressField, FieldConfigProvider, LocalizedField } from "@kitora/form/fields"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Entry = { name: Record<string, string>; address: ReturnType<typeof AddressField.empty> }

// name: { en: "Ada", ar: "…", ja: "…" } — one value per locale
const defaultValues: Entry = { name: {}, address: AddressField.empty("US") }
const LOCALES = [{ code: "en", label: "EN" }, { code: "ar", label: "AR" }, { code: "ja", label: "JA" }]

export function AddressBookEntry() {
  const form = useForm<Entry>({ defaultValues })
  const [rtl, setRtl] = useState(false) // page direction is app chrome, not form state
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2 text-[13px]">
          <Switch size="sm" checked={rtl} onCheckedChange={setRtl} /> Right-to-left
        </label>
        <Form form={form}>
          {/* dir flips every field's layout; the address field order follows its own country select */}
          <FieldConfigProvider dir={rtl ? "rtl" : "ltr"} className="flex flex-col gap-3">
            <LocalizedField name="name" label="Display name" locales={LOCALES} />
            <AddressField name="address" label="Address" />
          </FieldConfigProvider>
        </Form>
      </div>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>i(()=>import(`./addressbook-BFIeVwAd.js`),[]));function x(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n,{title:`Address book entry — i18n`,children:`A per-locale display name (localized value map), a locale-aware address (I4 — field order changes per country), and an RTL toggle (I1). Pick another country in the address and the field order follows it; flip the direction and the layout mirrors.`}),(0,h.jsx)(p,{n:1,title:`Localized entry`,blurb:`Pick another country in the address and the field order follows it; flip the direction and the layout mirrors.`,code:b,children:(0,h.jsx)(v,{})})]})}export{x as component};