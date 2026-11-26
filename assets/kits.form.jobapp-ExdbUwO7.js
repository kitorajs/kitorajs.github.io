import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n,ni as r}from"./index-9y5uwRd3.js";import{d as i}from"./field-options-BxYA8-No.js";import{W as a}from"./messages-BpgLhfTN.js";import{A as o,c as s,h as c}from"./field-config-62hz5rv-.js";import{a as l,o as u}from"./fields-3rMiSNLY.js";import{t as d}from"./date-DkHaI8Bm.js";import{t as f}from"./file-CAKLcIkG.js";import{t as p}from"./field-array-B0BhXTG7.js";import{t as m}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";var h=n(),g={company:``,role:``,from:``,to:``},_={name:``,resume:[],history:[g],cover:``},v={async save(e){console.log(e)}};function y({saved:e}){let t=o({defaultValues:_,values:e});return(0,h.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,h.jsxs)(s,{form:t,onSubmit:e=>v.save(e),children:[(0,h.jsx)(l,{name:`name`,label:`Full name`,required:!0}),(0,h.jsx)(f,{name:`resume`,label:`Résumé (PDF)`,accept:`application/pdf`,required:!0}),(0,h.jsxs)(p,{name:`history`,label:`Work history`,rowLabel:`Position`,newRow:g,min:1,layout:`cards`,children:[(0,h.jsxs)(i,{cols:{base:1,sm:2},gap:3,children:[(0,h.jsx)(l,{name:`.company`,label:`Company`,required:!0}),(0,h.jsx)(l,{name:`.role`,label:`Role`,required:!0}),(0,h.jsx)(d,{name:`.from`,label:`From`}),(0,h.jsx)(d,{name:`.to`,label:`To`})]}),(0,h.jsx)(p.RowActions,{move:!0,remove:!0})]}),(0,h.jsx)(p.Add,{to:`history`,children:`Add position`}),(0,h.jsx)(u,{name:`cover`,label:`Cover letter`,rows:4}),(0,h.jsx)(s.Submit,{className:r({size:`sm`,className:`w-fit`}),children:e?`Save changes`:`Apply`})]}),(0,h.jsx)(b,{form:t})]})}function b({form:e}){let t=c(e,e=>e.serialize(),a);return(0,h.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,h.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,h.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var x=`import { buttonVariants } from "@kitora/ui/button"
import { DateField, FieldArray, FileField, FormGrid, TextareaField, TextField, type UploadedFile } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual } from "@kitora/form/core"

type Position = { company: string; role: string; from: string; to: string }
type JobApp = { name: string; resume: UploadedFile[]; history: Position[]; cover: string }

const NEW_POSITION: Position = { company: "", role: "", from: "", to: "" }
const defaultValues: JobApp = { name: "", resume: [], history: [NEW_POSITION], cover: "" }

// stub: replace with your API (PUT /applications/:id)
const api = {
  async save(app: JobApp): Promise<void> {
    console.log(app)
  },
}

// edit mode: pass a saved record as "saved" — it becomes the clean baseline; dirty tracks changes against it
export function JobApplicationForm({ saved }: { saved?: JobApp }) {
  const form = useForm<JobApp>({ defaultValues, values: saved })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={(app) => api.save(app)}>
        <TextField name="name" label="Full name" required />
        <FileField name="resume" label="Résumé (PDF)" accept="application/pdf" required />
        <FieldArray name="history" label="Work history" rowLabel="Position" newRow={NEW_POSITION} min={1} layout="cards">
          <FormGrid cols={{ base: 1, sm: 2 }} gap={3}>
            {/* required is enforced on submit */}
            <TextField name=".company" label="Company" required />
            <TextField name=".role" label="Role" required />
            <DateField name=".from" label="From" />
            <DateField name=".to" label="To" />
          </FormGrid>
          <FieldArray.RowActions move remove />
        </FieldArray>
        <FieldArray.Add to="history">Add position</FieldArray.Add>
        <TextareaField name="cover" label="Cover letter" rows={4} />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>{saved ? "Save changes" : "Apply"}</Form.Submit>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>t(()=>import(`./apply-Bzd65yNQ.js`),[]));var S={company:``,role:``,from:``,to:``},C={name:``,resume:[],history:[S],cover:``},w={name:`Grace Hopper`,resume:[{name:`hopper-cv.pdf`,size:184320}],history:[{company:`Harvard Computation Lab`,role:`Programmer`,from:`1944-07-02`,to:`1949-06-30`},{company:`Eckert–Mauchly`,role:`Senior Mathematician`,from:`1949-07-01`,to:`1971-12-31`}],cover:`I wrote the first compiler and would like to write yours.`},T={async save(e){console.log(e)}};function E({saved:e}){let t=o({defaultValues:C,values:e});return(0,h.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,h.jsxs)(s,{form:t,onSubmit:e=>T.save(e),children:[(0,h.jsx)(l,{name:`name`,label:`Full name`,required:!0}),(0,h.jsx)(f,{name:`resume`,label:`Résumé (PDF)`,accept:`application/pdf`,required:!0}),(0,h.jsxs)(p,{name:`history`,label:`Work history`,rowLabel:`Position`,newRow:S,min:1,layout:`cards`,children:[(0,h.jsxs)(i,{cols:{base:1,sm:2},gap:3,children:[(0,h.jsx)(l,{name:`.company`,label:`Company`,required:!0}),(0,h.jsx)(l,{name:`.role`,label:`Role`,required:!0}),(0,h.jsx)(d,{name:`.from`,label:`From`}),(0,h.jsx)(d,{name:`.to`,label:`To`})]}),(0,h.jsx)(p.RowActions,{move:!0,remove:!0})]}),(0,h.jsx)(p.Add,{to:`history`,children:`Add position`}),(0,h.jsx)(u,{name:`cover`,label:`Cover letter`,rows:4}),(0,h.jsx)(s.Submit,{className:r({size:`sm`,className:`w-fit`}),children:e?`Save changes`:`Apply`}),(0,h.jsx)(s.Status,{success:()=>(0,h.jsx)(`span`,{className:`text-[13px] text-emerald-700 dark:text-emerald-400`,children:`Saved`})})]}),(0,h.jsx)(O,{form:t})]})}function D(){return(0,h.jsx)(E,{saved:w})}function O({form:e}){let{payload:t,dirty:n,status:r,issues:i}=c(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),a);return(0,h.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,h.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,h.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,h.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,h.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,h.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,h.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var k=`import { buttonVariants } from "@kitora/ui/button"
import { DateField, FieldArray, FileField, FormGrid, TextareaField, TextField, type UploadedFile } from "@kitora/form/fields"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Position = { company: string; role: string; from: string; to: string }
type JobApp = { name: string; resume: UploadedFile[]; history: Position[]; cover: string }

const NEW_POSITION: Position = { company: "", role: "", from: "", to: "" }
const defaultValues: JobApp = { name: "", resume: [], history: [NEW_POSITION], cover: "" }

// a previously saved application, as your query cache hands it over
const SAVED_APP: JobApp = {
  name: "Grace Hopper",
  resume: [{ name: "hopper-cv.pdf", size: 184_320 }],
  history: [
    { company: "Harvard Computation Lab", role: "Programmer", from: "1944-07-02", to: "1949-06-30" },
    { company: "Eckert–Mauchly", role: "Senior Mathematician", from: "1949-07-01", to: "1971-12-31" },
  ],
  cover: "I wrote the first compiler and would like to write yours.",
}

// stub: replace with your API (PUT /applications/:id)
const api = {
  async save(app: JobApp): Promise<void> {
    console.log(app)
  },
}

// edit mode: pass a saved record as "saved" — it becomes the clean baseline; dirty tracks changes against it
function JobApplicationForm({ saved }: { saved?: JobApp }) {
  const form = useForm<JobApp>({ defaultValues, values: saved })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <Form form={form} onSubmit={(app) => api.save(app)}>
        <TextField name="name" label="Full name" required />
        <FileField name="resume" label="Résumé (PDF)" accept="application/pdf" required />
        <FieldArray name="history" label="Work history" rowLabel="Position" newRow={NEW_POSITION} min={1} layout="cards">
          <FormGrid cols={{ base: 1, sm: 2 }} gap={3}>
            {/* required is enforced on submit */}
            <TextField name=".company" label="Company" required />
            <TextField name=".role" label="Role" required />
            <DateField name=".from" label="From" />
            <DateField name=".to" label="To" />
          </FormGrid>
          <FieldArray.RowActions move remove />
        </FieldArray>
        <FieldArray.Add to="history">Add position</FieldArray.Add>
        <TextareaField name="cover" label="Cover letter" rows={4} />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>{saved ? "Save changes" : "Apply"}</Form.Submit>
        <Form.Status success={() => <span className="text-[13px] text-emerald-700 dark:text-emerald-400">Saved</span>} />
      </Form>
      {/* clean until something changes: the saved record is the baseline */}
      <Payload form={form} />
    </div>
  )
}

// the saved record is the clean baseline: the form is clean until something changes
export function EditSavedApplication() {
  return <JobApplicationForm saved={SAVED_APP} />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>t(()=>import(`./edit-Cokdcb9f.js`),[]));function A(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(e,{title:`Job application`,children:[`Applicant info + résumé upload + a repeatable work-history repeater + cover letter, with `,(0,h.jsx)(`code`,{children:`required`}),` enforced on submit. The same form edits a saved application by passing it as `,(0,h.jsx)(`code`,{children:`values`}),`.`]}),(0,h.jsx)(m,{n:1,title:`New application`,blurb:`Submit empty to see the required fields block; add, move and remove positions.`,code:x,children:(0,h.jsx)(y,{})}),(0,h.jsx)(m,{n:2,title:`Edit a saved application`,blurb:`The saved record is the clean baseline: the panel shows clean until you change something.`,code:k,children:(0,h.jsx)(D,{})})]})}export{A as component};