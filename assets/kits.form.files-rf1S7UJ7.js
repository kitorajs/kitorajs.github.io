import{s as e}from"./kit-docs-BUovISd0.js";import{Cc as t,Ic as n,ni as r}from"./index-B9ukmIN1.js";import{W as i}from"./messages-C_IMdr_-.js";import{A as a,V as o,c as s,h as c}from"./field-config-17kME8Vl.js";import{a as l}from"./fields-CwxxBZgA.js";import{t as u}from"./file-CdGtjjW_.js";import{t as d}from"./example-BGnSQG2Y.js";import"./demos-Ds1NfSaA.js";var f=n(),p={avatar:[]},m=400,h={async put(e){return await new Promise(e=>setTimeout(e,m)),{url:`https://cdn.example.com/`+encodeURIComponent(e.name)}}};function g(){let e=a({defaultValues:p});return(0,f.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,f.jsx)(s,{form:e,children:(0,f.jsx)(u,{name:`avatar`,label:`Avatar (uploads to URL)`,accept:`image/*`,upload:e=>h.put(e)})}),(0,f.jsx)(_,{form:e})]})}function _({form:e}){let{payload:t,dirty:n,status:r,issues:a}=c(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),i);return(0,f.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,f.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,f.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,f.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,f.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,f.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,f.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var v=`import { FileField, type UploadedFile } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

// canonical value is { name, size, url } per file — never the blob, so serialize emits URLs
type Profile = { avatar: UploadedFile[] }

const defaultValues: Profile = { avatar: [] }

const UPLOAD_MS = 400

// stub: replace with your API (PUT the file to your storage, get its public URL back); the fake upload takes 400 ms
const api = {
  async put(file: File): Promise<{ url: string }> {
    await new Promise((r) => setTimeout(r, UPLOAD_MS))
    return { url: "https://cdn.example.com/" + encodeURIComponent(file.name) }
  },
}

export function ProfileForm() {
  const form = useForm<Profile>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        {/* in-flight uploads show a per-file status; the value only includes resolved files */}
        <FileField name="avatar" label="Avatar (uploads to URL)" accept="image/*" upload={(file) => api.put(file)} />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>t(()=>import(`./upload-DYgFpU-O.js`),[]));var y={attachments:[]},b=5*1024*1024;function x(){let e=a({defaultValues:y});return(0,f.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,f.jsx)(s,{form:e,children:(0,f.jsx)(u,{name:`attachments`,label:`Attachments (metadata only, multiple)`,multiple:!0,maxSizeBytes:b})}),(0,f.jsx)(S,{form:e})]})}function S({form:e}){let{payload:t,dirty:n,status:r,issues:a}=c(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),i);return(0,f.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,f.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,f.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,f.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,f.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,f.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,f.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var C=`import { FileField, type UploadedFile } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

// no "upload" → metadata-only: the value is { name, size } per file
type Ticket = { attachments: UploadedFile[] }

const defaultValues: Ticket = { attachments: [] }
const MAX_BYTES = 5 * 1024 * 1024 // 5 MB

export function TicketForm() {
  const form = useForm<Ticket>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        {/* oversize files are rejected with an explicit error */}
        <FileField name="attachments" label="Attachments (metadata only, multiple)" multiple maxSizeBytes={MAX_BYTES} />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>t(()=>import(`./metadata-ovNEpJBb.js`),[]));var w={title:`Taxi to client`,receipts:[]},T=2500,E=new Set,D={put(e,t){return new Promise((n,r)=>{let i=setTimeout(()=>{e.name.includes(`fail`)&&!E.has(e.name)?(E.add(e.name),r(Error(`storage unavailable`))):n({url:`https://cdn.example.com/`+encodeURIComponent(e.name)})},T);t.addEventListener(`abort`,()=>{clearTimeout(i),r(new DOMException(`cancelled`,`AbortError`))})})}},O={async send(e){return{id:`claim_`+e.receipts.length}}};function k(){let e=a({defaultValues:w});return(0,f.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,f.jsxs)(s,{form:e,onSubmit:O.send,children:[(0,f.jsx)(l,{name:`title`,label:`Claim`}),(0,f.jsx)(u,{name:`receipts`,label:`Receipts`,multiple:!0,required:!0,upload:D.put,uploadStrategy:`upload-first`,description:`Each file uploads when picked (2.5 s here). A name with “fail” fails once: Retry it.`}),(0,f.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,f.jsx)(s.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Send claim`}),(0,f.jsx)(s.Status,{className:`text-[13px]`,pending:(0,f.jsx)(`span`,{className:`text-muted-foreground`,children:`Waiting for uploads…`}),success:e=>(0,f.jsxs)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:[`Sent · `,e.id]})})]})]}),(0,f.jsx)(A,{form:e})]})}function A({form:e}){let{payload:t,dirty:n,status:r,issues:a}=c(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),i);return(0,f.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,f.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,f.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,f.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,f.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,f.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,f.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var j=`import { buttonVariants } from "@kitora/ui/button"
import { FileField, TextField, type UploadedFile } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Claim = { title: string; receipts: UploadedFile[] }

const defaultValues: Claim = { title: "Taxi to client", receipts: [] }

/** A slow upload so the submit gate is visible. */
const SLOW_UPLOAD_MS = 2500
const failedOnce = new Set<string>()

// stub: replace with your API (PUT the file to storage; the signal aborts on Cancel).
// Here a name containing "fail" is rejected once, then succeeds on Retry.
const storage = {
  put(file: File, signal: AbortSignal): Promise<{ url: string }> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        if (file.name.includes("fail") && !failedOnce.has(file.name)) {
          failedOnce.add(file.name)
          reject(new Error("storage unavailable"))
        } else resolve({ url: "https://cdn.example.com/" + encodeURIComponent(file.name) })
      }, SLOW_UPLOAD_MS)
      signal.addEventListener("abort", () => {
        clearTimeout(timer)
        reject(new DOMException("cancelled", "AbortError"))
      })
    })
  },
}
// stub: replace with your API (POST /claims — JSON: the receipts are URLs)
const api = {
  async send(values: Claim): Promise<{ id: string }> {
    return { id: "claim_" + values.receipts.length }
  },
}

// upload-first: files upload on select, the value holds { name, size, type, url }.
// Submit waits until every upload settles (Form.Status "pending"), then validates.
export function ClaimForm() {
  const form = useForm<Claim, Claim, { id: string }>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.send}>
        <TextField name="title" label="Claim" />
        <FileField name="receipts" label="Receipts" multiple required upload={storage.put} uploadStrategy="upload-first" description="Each file uploads when picked (2.5 s here). A name with “fail” fails once: Retry it." />
        <div className="flex items-center gap-2">
          <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Send claim</Form.Submit>
          <Form.Status<{ id: string }>
            className="text-[13px]"
            pending={<span className="text-muted-foreground">Waiting for uploads…</span>}
            success={(r) => <span className="text-emerald-700 dark:text-emerald-400">Sent · {r.id}</span>}
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>t(()=>import(`./upload-first-DxaBIyxj.js`),[]));var M={name:``,cv:[]},N={async apply(e){return{ok:e.has(`cv.0`)}}};function P(){return(0,f.jsxs)(s,{form:a({defaultValues:M}),onSubmit:e=>N.apply(o(e)),children:[(0,f.jsx)(l,{name:`name`,label:`Name`}),(0,f.jsx)(u,{name:`cv`,label:`CV`,uploadStrategy:`multipart`,required:!0}),(0,f.jsx)(s.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Apply`})]})}var F=`import { buttonVariants } from "@kitora/ui/button"
import { toFormData } from "@kitora/form/core"
import { FileField, type FileValue, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Application = { name: string; cv: FileValue[] }

const defaultValues: Application = { name: "", cv: [] }

// stub: replace with your API (POST /applications as multipart/form-data)
const api = {
  async apply(body: FormData): Promise<{ ok: boolean }> {
    return { ok: body.has("cv.0") }
  },
}

// multipart: the value keeps the File objects; toFormData posts them as parts
// ("cv.0" = the file) beside the other fields ("name").
export function ApplicationForm() {
  const form = useForm<Application>({ defaultValues })
  return (
    <Form form={form} onSubmit={(values) => api.apply(toFormData(values))}>
      <TextField name="name" label="Name" />
      <FileField name="cv" label="CV" uploadStrategy="multipart" required />
      <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Apply</Form.Submit>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>t(()=>import(`./multipart-D_b_t86H.js`),[]));function I(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(e,{title:`File upload`,children:[`The dropzone yields blobs; the field's canonical value is `,(0,f.jsx)(`code`,{children:`{ name, size, url }`}),` — never the blob, so the payload is serializable — or, with `,(0,f.jsx)(`code`,{children:`uploadStrategy="multipart"`}),`, the File itself for a multipart POST.`]}),(0,f.jsx)(d,{n:1,title:`Upload to URL`,blurb:`Each dropped file uploads via your handler; the resolved CDN url becomes the value.`,code:v,children:(0,f.jsx)(g,{})}),(0,f.jsx)(d,{n:2,title:`Metadata only (multiple + size limit)`,blurb:`No upload handler → keeps { name, size }; multiple files, with an explicit oversize rejection.`,code:C,children:(0,f.jsx)(x,{})}),(0,f.jsx)(d,{n:3,title:`Upload-first: submit waits, cancel, retry`,blurb:`Pick a file and press Send at once: the status says Waiting for uploads… and the submit runs when the upload settles (the store tracks it). Cancel a pending file with ×; a file named with “fail” fails once — Retry it.`,code:j,children:(0,f.jsx)(k,{})}),(0,f.jsx)(d,{n:4,title:`Multipart: the file rides in FormData`,blurb:`uploadStrategy="multipart" keeps the File in the value; toFormData(values) turns the payload into multipart parts — the file is the part cv.0 next to name. The list shows what the POST would carry.`,code:F,children:(0,f.jsx)(P,{})})]})}export{I as component};