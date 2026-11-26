import{s as e}from"./kit-docs-BUovISd0.js";import{Cc as t,Ic as n}from"./index-B9ukmIN1.js";import{W as r}from"./messages-C_IMdr_-.js";import{A as i,c as a,h as o}from"./field-config-17kME8Vl.js";import{n as s,t as c}from"./matrix-DR5y2wjQ.js";import{t as l}from"./example-BGnSQG2Y.js";import"./demos-Ds1NfSaA.js";var u=n(),d={ratings:{}},f=[{value:`speed`,label:`Speed`},{value:`docs`,label:`Documentation`},{value:`support`,label:`Support`}],p=[{value:`1`,label:`Poor`},{value:`2`,label:`Fair`},{value:`3`,label:`Good`},{value:`4`,label:`Great`},{value:`5`,label:`Excellent`}];function m(){let e=i({defaultValues:d});return(0,u.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,u.jsx)(a,{form:e,children:(0,u.jsx)(c,{name:`ratings`,label:`How would you rate…`,rows:f,columns:p,requiredRows:`all`,description:`Every row needs an answer (a matrixRows model rule)`})}),(0,u.jsx)(h,{form:e})]})}function h({form:e}){let{payload:t,dirty:n,status:i,issues:a}=o(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),r);return(0,u.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,u.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,u.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,u.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,i]})]}),(0,u.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,u.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,u.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var g=`import { MatrixField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

// value: { speed: "4", docs: "3", support: "5" } — or with "multiple": { speed: ["3", "4"] }
type Feedback = { ratings: Record<string, string> }

const defaultValues: Feedback = { ratings: {} }
const AREAS = [{ value: "speed", label: "Speed" }, { value: "docs", label: "Documentation" }, { value: "support", label: "Support" }]
const LIKERT = [{ value: "1", label: "Poor" }, { value: "2", label: "Fair" }, { value: "3", label: "Good" }, { value: "4", label: "Great" }, { value: "5", label: "Excellent" }]

export function FeedbackForm() {
  const form = useForm<Feedback>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        {/* requiredRows="all": every row needs an answer (a matrixRows model rule) */}
        {/* as a definition: f.matrix("ratings", { rows: AREAS, columns: LIKERT, requiredRows: "all" }) */}
        <MatrixField name="ratings" label="How would you rate…" rows={AREAS} columns={LIKERT} requiredRows="all" description="Every row needs an answer (a matrixRows model rule)" />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>t(()=>import(`./likert-survey-u6-TNWa6.js`),[]));var _={perms:{admin:{posts:[`read`,`write`,`delete`]}}},v=[{value:`admin`,label:`Admin`},{value:`editor`,label:`Editor`},{value:`viewer`,label:`Viewer`}],y=[{value:`posts`,label:`Posts`},{value:`comments`,label:`Comments`},{value:`billing`,label:`Billing`}],b=[{value:`read`,label:`Read`},{value:`write`,label:`Write`},{value:`delete`,label:`Delete`}],x={viewer:{posts:[`read`],comments:[`read`]}};function S(){let e=i({defaultValues:_});return(0,u.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,u.jsx)(a,{form:e,children:(0,u.jsx)(s,{name:`perms`,label:`Role permissions`,roles:v,resources:y,actions:b,inherited:x})}),(0,u.jsx)(C,{form:e})]})}function C({form:e}){let{payload:t,dirty:n,status:i,issues:a}=o(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),r);return(0,u.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,u.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,u.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,u.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,i]})]}),(0,u.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,u.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,u.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var w=`import type { PermissionValue } from "@kitora/form/core"
import { PermissionMatrixField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

// value: { admin: { posts: ["read", "write", "delete"] } } — role → resource → granted actions
type RoleSettings = { perms: PermissionValue }

const defaultValues: RoleSettings = { perms: { admin: { posts: ["read", "write", "delete"] } } }
const ROLES = [{ value: "admin", label: "Admin" }, { value: "editor", label: "Editor" }, { value: "viewer", label: "Viewer" }]
const RESOURCES = [{ value: "posts", label: "Posts" }, { value: "comments", label: "Comments" }, { value: "billing", label: "Billing" }]
const ACTIONS = [{ value: "read", label: "Read" }, { value: "write", label: "Write" }, { value: "delete", label: "Delete" }]
// grants from the workspace plan: shown checked and read-only, never stored in the value
const INHERITED: PermissionValue = { viewer: { posts: ["read"], comments: ["read"] } }

export function RolePermissionsForm() {
  const form = useForm<RoleSettings>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <PermissionMatrixField name="perms" label="Role permissions" roles={ROLES} resources={RESOURCES} actions={ACTIONS} inherited={INHERITED} />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>t(()=>import(`./rbac-BVsP3Yp2.js`),[]));function T(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(e,{title:`Matrix and permissions`,children:`Real tables: every cell is a native radio or checkbox named by its row and column header. The matrix stacks one question per row on phones.`}),(0,u.jsx)(l,{n:1,title:`Likert matrix (survey)`,blurb:`Single choice per row, every row required.`,code:g,children:(0,u.jsx)(m,{})}),(0,u.jsx)(l,{n:2,title:`RBAC screen`,blurb:`Roles × resources × actions with tri-state headers and inherited cells.`,code:w,children:(0,u.jsx)(S,{})})]})}export{T as component};