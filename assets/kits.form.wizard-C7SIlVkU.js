import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i,ti as a}from"./index-9y5uwRd3.js";import{d as o}from"./field-options-BxYA8-No.js";import{W as s}from"./messages-BpgLhfTN.js";import{A as c,Y as l,c as u,h as d}from"./field-config-62hz5rv-.js";import{t as f}from"./plugins-DTs_adI5.js";import{a as p,n as ee,o as m,r as h,t as g}from"./fields-3rMiSNLY.js";import{n as _,r as v}from"./wizard-BPjDeHLA.js";import{i as te}from"./fields-extra-DjnCI2Jb.js";import{n as y,r as b,t as x}from"./wizard-chrome-CIUmy4js.js";import{t as S}from"./example-CZLJLtIC.js";import{n as C,s as w}from"./demos-DilKtWQ6.js";import{a as T,o as ne}from"./demo-fixtures-DpfwlbH0.js";var E=e(n()),D=i(),O={account:{email:``,password:``},profile:{name:``,role:``,bio:``},review:{agree:!1}},k=[{label:`Engineer`,value:`eng`},{label:`Designer`,value:`design`}],{v:A}=l(),j={async save(e){return{id:`acct_`+e.profile.name.toLowerCase()}}};function M(){let e=c({defaultValues:O,validateOn:`blur`});return(0,D.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,D.jsxs)(u,{form:e,onSubmit:j.save,children:[(0,D.jsxs)(_,{submitLabel:`Finish`,progress:(0,D.jsx)(y,{}),nav:(0,D.jsx)(x,{}),children:[(0,D.jsxs)(_.Step,{id:`account`,label:`Account`,scope:`account`,children:[(0,D.jsx)(p,{name:`.email`,label:`Email`,type:`email`,required:!0,rules:[A.email()]}),(0,D.jsx)(p,{name:`.password`,label:`Password`,type:`password`,sensitive:!0,required:!0,rules:[A.minLength(8)]})]}),(0,D.jsxs)(_.Step,{id:`profile`,label:`Profile`,scope:`profile`,children:[(0,D.jsx)(p,{name:`.name`,label:`Name`,required:!0}),(0,D.jsx)(h,{name:`.role`,label:`Role`,options:k}),(0,D.jsx)(m,{name:`.bio`,label:`Bio`})]}),(0,D.jsxs)(_.Step,{id:`review`,label:`Review`,scope:`review`,children:[(0,D.jsx)(b,{}),(0,D.jsx)(g,{name:`.agree`,label:`I accept the terms`,required:!0,rules:[A.oneOf([!0],`You must accept the terms`)]})]})]}),(0,D.jsx)(u.Status,{success:e=>(0,D.jsxs)(`p`,{children:[`Onboarding complete · `,e.id]})})]}),(0,D.jsx)(N,{form:e})]})}function N({form:e}){let{payload:t,dirty:n,status:r,issues:i}=d(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,D.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,D.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,D.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,D.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,D.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,D.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var P=`import { deepEqual, kit, type Issue, type SubmitStatus } from "@kitora/form/core"
import { CheckboxField, SelectField, TextareaField, TextField, WizardNav, WizardProgress, WizardSummary } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot, Wizard } from "@kitora/form/react"

type Onboarding = {
  account: { email: string; password: string }
  profile: { name: string; role: string; bio: string }
  review: { agree: boolean }
}

const defaultValues: Onboarding = { account: { email: "", password: "" }, profile: { name: "", role: "", bio: "" }, review: { agree: false } }
const roles = [{ label: "Engineer", value: "eng" }, { label: "Designer", value: "design" }]
const { v } = kit<Onboarding>()

// stub: replace with your API (POST /onboarding)
const api = {
  async save(values: Onboarding): Promise<{ id: string }> {
    return { id: "acct_" + values.profile.name.toLowerCase() }
  },
}

// One declaration per step; the last step's button is Form.Submit. Values persist across Back/Next.
// sensitive keeps the password out of logs: form.serialize({ redact: true }) masks it.
export function OnboardingForm() {
  const form = useForm<Onboarding, Onboarding, { id: string }>({ defaultValues, validateOn: "blur" })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.save}>
        <Wizard submitLabel="Finish" progress={<WizardProgress />} nav={<WizardNav />}>
          {/* scope = the branch Next validates before advancing */}
          <Wizard.Step id="account" label="Account" scope="account">
            <TextField name=".email" label="Email" type="email" required rules={[v.email()]} />
            <TextField name=".password" label="Password" type="password" sensitive required rules={[v.minLength(8)]} />
          </Wizard.Step>
          <Wizard.Step id="profile" label="Profile" scope="profile">
            <TextField name=".name" label="Name" required />
            <SelectField name=".role" label="Role" options={roles} />
            <TextareaField name=".bio" label="Bio" />
          </Wizard.Step>
          <Wizard.Step id="review" label="Review" scope="review">
            <WizardSummary />
            <CheckboxField name=".agree" label="I accept the terms" required rules={[v.oneOf([true], "You must accept the terms")]} />
          </Wizard.Step>
        </Wizard>
        <Form.Status<{ id: string }> success={(r) => <p>Onboarding complete · {r.id}</p>} />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>r(()=>import(`./onboarding-REZ3hZb2.js`),[]));var F={rating:{score:5},feedback:{comment:``}},{v:I}=l(),L={async send(e){return{ok:e.rating.score>=0}}};function R(){return(0,D.jsxs)(u,{form:c({defaultValues:F}),onSubmit:L.send,children:[(0,D.jsxs)(_,{submitLabel:`Send`,progress:(0,D.jsx)(y,{}),nav:(0,D.jsx)(x,{}),children:[(0,D.jsx)(_.Step,{id:`rating`,label:`Rating`,scope:`rating`,children:(0,D.jsx)(ee,{name:`.score`,label:`How likely are you to recommend us? (0–10)`,rules:[I.min(0),I.max(10)]})}),(0,D.jsx)(_.Step,{id:`feedback`,label:`Feedback`,scope:`feedback`,children:(0,D.jsx)(m,{name:`.comment`,label:`Anything else?`,rows:3})})]}),(0,D.jsx)(u.Status,{success:()=>(0,D.jsx)(`p`,{children:`Thanks for the feedback!`})})]})}var z=`import { kit } from "@kitora/form/core"
import { NumberField, TextareaField, WizardNav, WizardProgress } from "@kitora/form/fields"
import { Form, useForm, Wizard } from "@kitora/form/react"

type Survey = { rating: { score: number }; feedback: { comment: string } }

const defaultValues: Survey = { rating: { score: 5 }, feedback: { comment: "" } }
const { v } = kit<Survey>()

// stub: replace with your API (POST /survey)
const api = {
  async send(values: Survey): Promise<{ ok: boolean }> {
    return { ok: values.rating.score >= 0 }
  },
}

export function SurveyForm() {
  const form = useForm<Survey>({ defaultValues })
  return (
    <Form form={form} onSubmit={api.send}>
      <Wizard submitLabel="Send" progress={<WizardProgress />} nav={<WizardNav />}>
        <Wizard.Step id="rating" label="Rating" scope="rating">
          <NumberField name=".score" label="How likely are you to recommend us? (0–10)" rules={[v.min(0), v.max(10)]} />
        </Wizard.Step>
        <Wizard.Step id="feedback" label="Feedback" scope="feedback">
          <TextareaField name=".comment" label="Anything else?" rows={3} />
        </Wizard.Step>
      </Wizard>
      <Form.Status success={() => <p>Thanks for the feedback!</p>} />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>r(()=>import(`./survey-Bp0S6uTz.js`),[]));var B={store:{name:``},domain:{host:``},contact:{email:``}},V={async launch(e){return{ok:e.store.name!==``}}},H=(e,t,n,r)=>(0,D.jsxs)(`section`,{className:`border-b py-2 last:border-b-0`,"data-state":n,children:[(0,D.jsxs)(`button`,{type:`button`,className:`flex w-full items-center gap-2 text-start text-[13px] font-medium disabled:cursor-default`,disabled:n!==`done`,onClick:()=>r.goTo(e.id),children:[(0,D.jsx)(`span`,{"aria-hidden":!0,className:n===`done`?`size-3 rounded-full bg-primary`:n===`current`?`size-3 rounded-full border-2 border-primary`:`size-3 rounded-full border border-muted-foreground/40`}),e.label]}),(0,D.jsx)(`div`,{className:`pt-2 ps-5`,children:t})]});function U(){let e=c({defaultValues:B});return(0,D.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,D.jsx)(u,{form:e,onSubmit:V.launch,children:(0,D.jsxs)(_,{progress:null,renderStep:H,nav:(0,D.jsx)(x,{}),children:[(0,D.jsx)(_.Step,{id:`store`,label:`Name the store`,scope:`store`,children:(0,D.jsx)(p,{name:`.name`,label:`Store name`,required:!0})}),(0,D.jsx)(_.Step,{id:`domain`,label:`Connect a domain`,scope:`domain`,children:(0,D.jsx)(p,{name:`.host`,label:`Host`,placeholder:`shop.example.com`,required:!0})}),(0,D.jsx)(_.Step,{id:`contact`,label:`Add a contact`,scope:`contact`,children:(0,D.jsx)(p,{name:`.email`,label:`Email`,type:`email`,required:!0})})]})}),(0,D.jsx)(W,{form:e})]})}function W({form:e}){let{payload:t,dirty:n,status:r,issues:i}=d(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,D.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,D.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,D.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,D.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,D.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,D.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var G=`import { WizardNav, TextField } from "@kitora/form/fields"
import { Form, type RenderWizardStep, type SnapshotSource, useForm, useFormSnapshot, Wizard } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Launch = { store: { name: string }; domain: { host: string }; contact: { email: string } }

const defaultValues: Launch = { store: { name: "" }, domain: { host: "" }, contact: { email: "" } }

// stub: replace with your API (POST /launch)
const api = {
  async launch(values: Launch): Promise<{ ok: boolean }> {
    return { ok: values.store.name !== "" }
  },
}

// every active step as an accordion row, in order: a status dot, the label (a button back to a done step),
// and the body (shown only while current; always placed)
const accordionStep: RenderWizardStep = (step, body, state, w) => (
  <section className="border-b py-2 last:border-b-0" data-state={state}>
    <button type="button" className="flex w-full items-center gap-2 text-start text-[13px] font-medium disabled:cursor-default" disabled={state !== "done"} onClick={() => w.goTo(step.id)}>
      <span aria-hidden className={state === "done" ? "size-3 rounded-full bg-primary" : state === "current" ? "size-3 rounded-full border-2 border-primary" : "size-3 rounded-full border border-muted-foreground/40"} />
      {step.label}
    </button>
    <div className="pt-2 ps-5">{body}</div>
  </section>
)

export function LaunchForm() {
  const form = useForm<Launch>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.launch}>
        <Wizard progress={null} renderStep={accordionStep} nav={<WizardNav />}>
          <Wizard.Step id="store" label="Name the store" scope="store">
            <TextField name=".name" label="Store name" required />
          </Wizard.Step>
          <Wizard.Step id="domain" label="Connect a domain" scope="domain">
            <TextField name=".host" label="Host" placeholder="shop.example.com" required />
          </Wizard.Step>
          <Wizard.Step id="contact" label="Add a contact" scope="contact">
            <TextField name=".email" label="Email" type="email" required />
          </Wizard.Step>
        </Wizard>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>r(()=>import(`./accordion-B4JkSsu_.js`),[]));var K={source:`csv`,file:{name:``},mapping:{key:``}},q=[{value:`csv`,label:`A CSV file`},{value:`sheet`,label:`A spreadsheet link`}],J={async start(e){return{ok:e.file.name!==``}}};function Y(){let e=c({defaultValues:K});return(0,D.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,D.jsx)(u,{form:e,onSubmit:J.start,children:(0,D.jsxs)(_,{progress:(0,D.jsx)(y,{}),nav:(0,D.jsx)(x,{}),children:[(0,D.jsx)(_.Step,{id:`source`,label:`Choose a source`,progress:!1,children:(0,D.jsx)(te,{name:`source`,label:`Import from`,options:q})}),(0,D.jsx)(_.Step,{id:`file`,label:`Upload`,scope:`file`,children:(0,D.jsx)(p,{name:`.name`,label:`File or link`,required:!0})}),(0,D.jsx)(_.Step,{id:`mapping`,label:`Map columns`,scope:`mapping`,children:(0,D.jsx)(p,{name:`.key`,label:`Key column`,required:!0})})]})}),(0,D.jsx)(X,{form:e})]})}function X({form:e}){let{payload:t,dirty:n,status:r,issues:i}=d(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,D.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,D.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,D.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,D.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,D.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,D.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var Z=`import { RadioGroupField, TextField, WizardNav, WizardProgress } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot, Wizard } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Import = { source: string; file: { name: string }; mapping: { key: string } }

const defaultValues: Import = { source: "csv", file: { name: "" }, mapping: { key: "" } }
const SOURCES = [{ value: "csv", label: "A CSV file" }, { value: "sheet", label: "A spreadsheet link" }]

// stub: replace with your API (POST /imports)
const api = {
  async start(values: Import): Promise<{ ok: boolean }> {
    return { ok: values.file.name !== "" }
  },
}

export function ImportForm() {
  const form = useForm<Import>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.start}>
        <Wizard progress={<WizardProgress />} nav={<WizardNav />}>
          {/* its own page: not numbered in the progress, never passed to renderStep; Next / Back still pass through it */}
          <Wizard.Step id="source" label="Choose a source" progress={false}>
            <RadioGroupField name="source" label="Import from" options={SOURCES} />
          </Wizard.Step>
          <Wizard.Step id="file" label="Upload" scope="file">
            <TextField name=".name" label="File or link" required />
          </Wizard.Step>
          <Wizard.Step id="mapping" label="Map columns" scope="mapping">
            <TextField name=".key" label="Key column" required />
          </Wizard.Step>
        </Wizard>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>r(()=>import(`./outside-YQ2I3LkR.js`),[]));var Q=`kitora.form.wizard.resume`,$=`/book`,re=[{label:`Window`,value:`window`},{label:`Aisle`,value:`aisle`}];function ie(e){let[t,n]=(0,E.useState)(e);return(0,E.useMemo)(()=>{let e=t;return{path:t,pathname:()=>e,replace:t=>{e=t,n(t)}}},[t])}function ae({history:e}){let t=(0,E.useMemo)(()=>v($,e),[e]),n=c({defaultValues:{trip:{from:``,to:``},traveller:{name:``,email:``},extras:{seat:`window`,notes:``}},plugins:[f({storage:T(Q),debounceMs:0})]});return(0,D.jsxs)(w,{children:[(0,D.jsxs)(u,{form:n,onSubmit:ne,children:[(0,D.jsxs)(_,{adapter:t,submitLabel:`Book`,progress:(0,D.jsx)(y,{}),nav:(0,D.jsx)(x,{}),children:[(0,D.jsx)(_.Step,{id:`trip`,label:`Trip`,scope:`trip`,children:(0,D.jsxs)(o,{cols:{base:1,md:2},children:[(0,D.jsx)(p,{name:`.from`,label:`From`,required:!0}),(0,D.jsx)(p,{name:`.to`,label:`To`,required:!0})]})}),(0,D.jsx)(_.Step,{id:`traveller`,label:`Traveller`,scope:`traveller`,children:(0,D.jsxs)(o,{cols:{base:1,md:2},children:[(0,D.jsx)(p,{name:`.name`,label:`Name`,required:!0}),(0,D.jsx)(p,{name:`.email`,label:`Email`,type:`email`,required:!0})]})}),(0,D.jsxs)(_.Step,{id:`extras`,label:`Extras`,scope:`extras`,children:[(0,D.jsx)(h,{name:`.seat`,label:`Seat`,options:re}),(0,D.jsx)(m,{name:`.notes`,label:`Notes`,rows:2})]})]}),(0,D.jsx)(u.Status,{className:`text-sm`,success:e=>(0,D.jsxs)(`p`,{className:`font-medium text-emerald-700 dark:text-emerald-400`,children:[`✓ Booked · `,e.id]})})]}),(0,D.jsx)(C,{store:n})]})}function oe(){let e=ie($),[t,n]=(0,E.useState)(0);return(0,D.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,D.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,D.jsxs)(`code`,{className:`flex-1 truncate rounded-md border bg-muted/40 px-2 py-1 text-xs tabular-nums`,"aria-label":`Address bar`,children:[`https://example.com`,e.path]}),(0,D.jsx)(a,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>n(e=>e+1),children:`Reload`}),(0,D.jsx)(a,{type:`button`,size:`sm`,variant:`ghost`,onClick:()=>{T(Q).clear(),e.replace($),n(e=>e+1)},children:`Clear draft`})]}),(0,D.jsx)(ae,{history:e},t)]})}var se={resume:`import { useState } from "react"
import { persist, type StorageCapability } from "@kitora/form/core"
import { FormGrid, SelectField, TextareaField, TextField, WizardNav, WizardProgress } from "@kitora/form/fields"
import { Form, useForm, Wizard } from "@kitora/form/react"

type Booking = {
  trip: { from: string; to: string }
  traveller: { name: string; email: string }
  extras: { seat: string; notes: string }
}

const defaultValues: Booking = { trip: { from: "", to: "" }, traveller: { name: "", email: "" }, extras: { seat: "window", notes: "" } }
const seats = [{ label: "Window", value: "window" }, { label: "Aisle", value: "aisle" }]

// the draft lives in localStorage; persist saves the values AND the current step
const draft: StorageCapability = {
  load: () => JSON.parse(localStorage.getItem("booking-draft") ?? "null"),
  save: (state) => localStorage.setItem("booking-draft", JSON.stringify(state)),
  clear: () => localStorage.removeItem("booking-draft"),
}

// stub: replace with your API (POST /bookings)
const api = {
  async book(values: Booking): Promise<{ id: string }> {
    return { id: "bk_" + values.trip.to.toLowerCase() }
  },
}

// url="path": the step is the segment after basePath (/book/traveller); the router must serve /book/*.
// On reload the wizard resumes at the URL's (else the draft's) step after validating every step before it.
// Back never loses values: every step stays registered while another one shows.
function BookingForm() {
  const form = useForm<Booking, Booking, { id: string }>({ defaultValues, plugins: [persist({ storage: draft })] })
  return (
    <Form form={form} onSubmit={api.book}>
      <Wizard url="path" basePath="/book" submitLabel="Book" progress={<WizardProgress />} nav={<WizardNav />}>
        <Wizard.Step id="trip" label="Trip" scope="trip">
          <FormGrid cols={{ base: 1, md: 2 }}>
            <TextField name=".from" label="From" required />
            <TextField name=".to" label="To" required />
          </FormGrid>
        </Wizard.Step>
        <Wizard.Step id="traveller" label="Traveller" scope="traveller">
          <FormGrid cols={{ base: 1, md: 2 }}>
            <TextField name=".name" label="Name" required />
            <TextField name=".email" label="Email" type="email" required />
          </FormGrid>
        </Wizard.Step>
        <Wizard.Step id="extras" label="Extras" scope="extras">
          <SelectField name=".seat" label="Seat" options={seats} />
          <TextareaField name=".notes" label="Notes" rows={2} />
        </Wizard.Step>
      </Wizard>
      <Form.Status<{ id: string }> success={(r) => <p>Booked · {r.id}</p>} />
    </Form>
  )
}

// Reload remounts the form as a page reload would; Clear draft forgets the draft and goes back to the first step
export function BookingPage() {
  const [mount, setMount] = useState(0)
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => setMount((n) => n + 1)}>Reload</button>
        <button
          type="button"
          onClick={() => {
            void draft.clear()
            window.history.replaceState(null, "", "/book")
            setMount((n) => n + 1)
          }}
        >
          Clear draft
        </button>
      </div>
      <BookingForm key={mount} />
    </div>
  )
}`};function ce(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(t,{title:`Wizard (multi-step)`,children:[(0,D.jsx)(`code`,{children:`<Wizard.Step>`}),` children: each step validates its own scope before advancing, values persist across Back/Next, the step lives in the store (a `,(0,D.jsx)(`code`,{children:`step`}),` event), the last step submits through the Form and`,` `,(0,D.jsx)(`code`,{children:`Form.Status`}),` shows the outcome; `,(0,D.jsx)(`code`,{children:`persist`}),` resumes at the saved step.`]}),(0,D.jsx)(S,{n:1,title:`3-step onboarding`,blurb:`Account → Profile → Review; each step gate-validates its scope, with a final terms-acceptance step.`,code:P,children:(0,D.jsx)(M,{})}),(0,D.jsx)(S,{n:2,title:`Compact 2-step survey`,blurb:`The same Wizard with a tiny 2-step flow — scoped steps with range rules on the score.`,code:z,children:(0,D.jsx)(R,{})}),(0,D.jsx)(S,{n:3,title:`Resume where you left off (persist + url="path")`,blurb:`Fill a step, press Next, then Reload: the draft brings back the values AND the step, and the step is also the path segment (/book/traveller). Back never loses typed values — every step stays registered while another shows. The address bar is in-memory here; in an app it is the real one.`,code:se.resume,children:(0,D.jsx)(oe,{})}),(0,D.jsx)(S,{n:4,title:`Accordion layout (renderStep)`,blurb:`renderStep wraps every step in its own chrome: all headers in order, only the current body open between them, a done header jumps back.`,code:G,children:(0,D.jsx)(U,{})}),(0,D.jsx)(S,{n:5,title:`A step outside the progress`,blurb:`Wizard.Step progress={false}: the source choice is its own page; the progress numbers only Upload and Map columns (1 of 2), and Next / Back still move through every step.`,code:Z,children:(0,D.jsx)(Y,{})})]})}export{ce as component};