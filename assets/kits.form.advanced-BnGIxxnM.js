import{s as e}from"./kit-docs-Cf27Kpa-.js";import{Ec as t,zc as n}from"./index-BZuUy872.js";import{W as r}from"./messages-CylclMLI.js";import{A as i,c as a,h as o}from"./field-config-53O_jYuu.js";import{a as s}from"./fields-DyVcPE0c.js";import{i as c,n as l,r as u,t as d}from"./advanced-DEbxPKPR.js";import{t as f}from"./example-B67lLz1F.js";import"./demos-PewJ5Ayd.js";var p=n(),m={title:{}},h=[{code:`en`,label:`EN`},{code:`fr`,label:`FR`},{code:`de`,label:`DE`}];function g(){let e=i({defaultValues:m});return(0,p.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,p.jsx)(a,{form:e,children:(0,p.jsx)(u,{name:`title`,label:`Product title`,locales:h,placeholder:`Title for this locale`})}),(0,p.jsx)(_,{form:e})]})}function _({form:e}){let{payload:t,dirty:n,status:i,issues:a}=o(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),r);return(0,p.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,p.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,p.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,p.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,i]})]}),(0,p.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,p.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,p.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var v=`import { LocalizedField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

// one field, a per-locale value map: { en: "Hello", fr: "Bonjour" }
type Product = { title: Record<string, string> }

const defaultValues: Product = { title: {} }
const locales = [{ code: "en", label: "EN" }, { code: "fr", label: "FR" }, { code: "de", label: "DE" }]

export function ProductTitleForm() {
  const form = useForm<Product>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        {/* tabs switch the edited locale; filled locales are marked */}
        <LocalizedField name="title" label="Product title" locales={locales} placeholder="Title for this locale" />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>t(()=>import(`./localized-C3tkY3OZ.js`),[]));var y={headers:[{key:`Authorization`,value:``}]};function b(){let e=i({defaultValues:y});return(0,p.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,p.jsx)(a,{form:e,children:(0,p.jsx)(l,{name:`headers`,label:`Request headers`})}),(0,p.jsx)(x,{form:e})]})}function x({form:e}){let{payload:t,dirty:n,status:i,issues:a}=o(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),r);return(0,p.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,p.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,p.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,p.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,i]})]}),(0,p.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,p.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,p.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var S=`import { KeyValueField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

// editable list of typed pairs: [{ key: "Authorization", value: "Bearer …" }]
type Request = { headers: Array<{ key: string; value: string }> }

const defaultValues: Request = { headers: [{ key: "Authorization", value: "" }] }

export function RequestHeadersForm() {
  const form = useForm<Request>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <KeyValueField name="headers" label="Request headers" />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>t(()=>import(`./kv-BbrOBztV.js`),[]));var C={google:``},w={async oauth(){return`ya29.mock-token`},async verify(e){return e.startsWith(`ya29`)}};function T(){let e=i({defaultValues:C});return(0,p.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,p.jsx)(a,{form:e,children:(0,p.jsx)(d,{name:`google`,label:`Google account`,connect:()=>w.oauth(),test:e=>w.verify(e),children:`Connect with Google`})}),(0,p.jsx)(E,{form:e})]})}function E({form:e}){let{payload:t,dirty:n,status:i,issues:a}=o(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),r);return(0,p.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,p.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,p.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,p.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,i]})]}),(0,p.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,p.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,p.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var D=`import { ConnectionField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

// B16 connection/action field — the value is the token ("" = not connected)
type Integrations = { google: string }

const defaultValues: Integrations = { google: "" }

// stub: replace with your API (your OAuth popup + a backend token check)
const api = {
  async oauth(): Promise<string> {
    return "ya29.mock-token"
  },
  async verify(token: string): Promise<boolean> {
    return token.startsWith("ya29")
  },
}

export function IntegrationsForm() {
  const form = useForm<Integrations>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <ConnectionField
          name="google"
          label="Google account"
          connect={() => api.oauth()}             // resolves a token
          test={(token) => api.verify(token)}     // optional "Test connection"
        >
          Connect with Google
        </ConnectionField>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>t(()=>import(`./conn-Dqu1dK6k.js`),[]));var O={body:`Hi {{firstName}},

`},k=[{token:`firstName`,label:`First name`},{token:`company`,label:`Company`},{token:`unsubscribeUrl`,label:`Unsubscribe URL`}];function A(){let e=i({defaultValues:O});return(0,p.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,p.jsx)(a,{form:e,children:(0,p.jsx)(c,{name:`body`,label:`Email template`,variables:k,rows:5})}),(0,p.jsx)(j,{form:e})]})}function j({form:e}){let{payload:t,dirty:n,status:i,issues:a}=o(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),r);return(0,p.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,p.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,p.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,p.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,i]})]}),(0,p.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,p.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,p.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var M=`import { MergeField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

// value → "Hi {{firstName}}, welcome to {{company}}"
type Template = { body: string }

const defaultValues: Template = { body: "Hi {{firstName}},\\n\\n" }
const variables = [
  { token: "firstName", label: "First name" },
  { token: "company", label: "Company" },
  { token: "unsubscribeUrl", label: "Unsubscribe URL" },
]

export function EmailTemplateForm() {
  const form = useForm<Template>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        {/* palette chips insert {{token}} at the caret */}
        <MergeField name="body" label="Email template" variables={variables} rows={5} />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>t(()=>import(`./merge-D4y9X1BS.js`),[]));var N={phone:``,zip:``,site:``};function P(){let e=i({defaultValues:N});return(0,p.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,p.jsxs)(a,{form:e,children:[(0,p.jsx)(s,{name:`phone`,label:`Phone`,inputMode:`tel`,placeholder:`555 0100`}),(0,p.jsx)(s,{name:`zip`,label:`ZIP`,inputMode:`numeric`,placeholder:`94016`}),(0,p.jsx)(s,{name:`site`,label:`Website`,inputMode:`url`,placeholder:`https://example.com`})]}),(0,p.jsx)(F,{form:e})]})}function F({form:e}){let{payload:t,dirty:n,status:i,issues:a}=o(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),r);return(0,p.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,p.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,p.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,p.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,i]})]}),(0,p.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,p.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,p.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var I=`import { TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Contact = { phone: string; zip: string; site: string }

const defaultValues: Contact = { phone: "", zip: "", site: "" }

// M-series: inputMode picks the right on-screen keyboard on mobile
export function ContactForm() {
  const form = useForm<Contact>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <TextField name="phone" label="Phone" inputMode="tel" placeholder="555 0100" />
        <TextField name="zip" label="ZIP" inputMode="numeric" placeholder="94016" />
        <TextField name="site" label="Website" inputMode="url" placeholder="https://example.com" />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>t(()=>import(`./mobile-DivBsYlp.js`),[]));function L(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e,{title:`Advanced fields`,children:`The Wave-4 catalog additions: a per-locale value map, an editable key/value list, an OAuth-style connection action, and mobile keyboard hints. Four recipes:`}),(0,p.jsx)(f,{n:1,title:`Localized value (per-locale map)`,blurb:`One field whose value is { en, fr, de } — tabs switch the edited locale; filled locales are marked.`,code:v,children:(0,p.jsx)(g,{})}),(0,p.jsx)(f,{n:2,title:`Typed key / value pairs`,blurb:`An editable list of { key, value } — HTTP headers, metadata, env vars.`,code:S,children:(0,p.jsx)(b,{})}),(0,p.jsx)(f,{n:3,title:`Connection / action field (B16)`,blurb:`OAuth-style connect + test-connection with status; the value is the resolved token.`,code:D,children:(0,p.jsx)(T,{})}),(0,p.jsx)(f,{n:4,title:`Merge-variable / mention tokens`,blurb:`Palette chips insert {{token}} placeholders at the caret — email/SMS templates, merge fields.`,code:M,children:(0,p.jsx)(A,{})}),(0,p.jsx)(f,{n:5,title:`Mobile keyboard hints (M-series)`,blurb:`inputMode surfaces the right on-screen keyboard (tel / numeric / url) on mobile.`,code:I,children:(0,p.jsx)(P,{})})]})}export{L as component};