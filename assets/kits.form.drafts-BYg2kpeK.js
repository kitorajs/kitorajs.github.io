import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Bc as n,Cc as r,Ic as i,ni as a}from"./index-q72zUtm9.js";import{A as o,c as s}from"./field-config-DXiPz8Cg.js";import{t as c}from"./plugins-DTs_adI5.js";import{n as l,r as u}from"./tab-sync-DHFvdPAz.js";import{a as d,o as f,r as p}from"./fields-CoJCsIMd.js";import{t as m}from"./example-B8EaWveR.js";import{a as h,i as g,n as _,o as v,s as y,t as b}from"./demos-DN9t7sug.js";import{a as x,o as S}from"./demo-fixtures-DpfwlbH0.js";var C=e(n(),1);function w(e,t){let[n,r]=(0,C.useState)({connected:!1,leader:!1}),i=(0,C.useRef)(t);i.current=t;let{name:a,enabled:o=!0}=t;return(0,C.useEffect)(()=>{if(!o)return;let t=i.current,n=l(e,{...t,onLeaderChange:e=>r(t=>t.leader===e?t:{...t,leader:e})});return r({connected:n.connected,leader:n.isLeader()}),()=>{n.disconnect(),r({connected:!1,leader:!1})}},[e,a,o]),n}var T=i(),E={title:``,status:`draft`,body:``},D=[{value:`draft`,label:`Draft`},{value:`review`,label:`In review`}],O=`demo-article-42`,k=`kitora:form-demo:drafts:article-42`;function A({who:e}){let[t]=(0,C.useState)(u),n=o({defaultValues:E,plugins:[c({storage:x(k),saveIf:t.isLeader})]}),r=w(n,{name:O,gate:t});return(0,T.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col gap-2 rounded-md border p-3`,children:[(0,T.jsxs)(`p`,{className:`flex items-center justify-between text-xs text-muted-foreground`,children:[(0,T.jsx)(`span`,{children:e}),(0,T.jsx)(`span`,{"data-tab-role":r.leader?`leader`:`follower`,children:r.connected?r.leader?`leader · saves the draft`:`follower`:`not synced`})]}),(0,T.jsxs)(s,{form:n,onSubmit:S,children:[(0,T.jsx)(d,{name:`title`,label:`Title`}),(0,T.jsx)(p,{name:`status`,label:`Status`,options:D}),(0,T.jsx)(f,{name:`body`,label:`Body`,rows:3}),(0,T.jsx)(s.Submit,{className:a({size:`sm`,className:`w-fit`}),children:`Publish`})]})]})}function j(){return(0,T.jsxs)(`div`,{className:`flex flex-col gap-3 md:flex-row`,children:[(0,T.jsx)(A,{who:`This tab — pane A`}),(0,T.jsx)(A,{who:`This tab — pane B (or open this page in a second tab)`})]})}var M=`import { useState } from "react"
import { buttonVariants } from "@kitora/ui/button"
import { createLeaderGate, persist } from "@kitora/form/core"
import { SelectField, TextareaField, TextField } from "@kitora/form/fields"
import { Form, useForm, useTabSync } from "@kitora/form/react"
import { localDraftStorage, mockSave } from "@/kit/form/demo-fixtures"

type Article = { title: string; status: string; body: string }

const defaultValues: Article = { title: "", status: "draft", body: "" }
const STATUSES = [
  { value: "draft", label: "Draft" },
  { value: "review", label: "In review" },
]
const ARTICLE_DOC = "demo-article-42"
// localDraftStorage is the gallery's guarded localStorage: replace with your draft storage (the same key in every tab)
const DRAFT_KEY = "kitora:form-demo:drafts:article-42"

function SyncedEditor({ who }: { who: string }) {
  // only the leader tab writes the shared draft; the gate exists before the tabs connect
  const [gate] = useState(createLeaderGate)
  const form = useForm<Article>({ defaultValues, plugins: [persist({ storage: localDraftStorage(DRAFT_KEY), saveIf: gate.isLeader })] })
  // every open tab of this document is one: edits arrive as origin "external" (never echoed),
  // field-level last-writer-wins, a new tab catches up from the leader, sensitive fields stay local;
  // a no-op where BroadcastChannel is missing
  const sync = useTabSync(form, { name: ARTICLE_DOC, gate })
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2 rounded-md border p-3">
      <p className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{who}</span>
        <span data-tab-role={sync.leader ? "leader" : "follower"}>{!sync.connected ? "not synced" : sync.leader ? "leader · saves the draft" : "follower"}</span>
      </p>
      {/* mockSave: replace with your API (PUT /articles/42) */}
      <Form form={form} onSubmit={mockSave}>
        <TextField name="title" label="Title" />
        <SelectField name="status" label="Status" options={STATUSES} />
        <TextareaField name="body" label="Body" rows={3} />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Publish</Form.Submit>
      </Form>
    </div>
  )
}

export function ArticleEditor() {
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <SyncedEditor who="This tab — pane A" />
      <SyncedEditor who="This tab — pane B (or open this page in a second tab)" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>r(()=>import(`./sync-CnL98nDz.js`),[]));var N={name:{first:``,last:``},plan:`free`},P=[{value:`free`,label:`Free`},{value:`pro`,label:`Pro`},{value:`team`,label:`Team`}],F=`kitora:form-demo:drafts:profile`,I=3,L=e=>typeof e==`object`&&!!e&&!Array.isArray(e),R={1:e=>{if(!L(e)||typeof e.fullName!=`string`)return null;let[t=``,...n]=e.fullName.split(` `);return{name:{first:t,last:n.join(` `)},tier:e.tier}},2:e=>L(e)?{name:e.name,plan:typeof e.tier==`string`?e.tier:`free`}:null},z={v1:{version:1,values:{fullName:`Ada Lovelace`,tier:`pro`}},v2:{version:2,values:{name:{first:`Grace`,last:`Hopper`},tier:`team`}},future:{version:9,values:{profile:{displayName:`From the future`}}}};function B({onDiscard:e}){let t=o({defaultValues:N,plugins:[c({storage:x(F),version:I,migrations:R,onDiscard:e})]});return(0,T.jsxs)(y,{children:[(0,T.jsxs)(s,{form:t,onSubmit:S,children:[(0,T.jsx)(d,{name:`name.first`,label:`First name`}),(0,T.jsx)(d,{name:`name.last`,label:`Last name`}),(0,T.jsx)(p,{name:`plan`,label:`Plan`,options:P}),(0,T.jsx)(v,{label:`Save profile`})]}),(0,T.jsx)(_,{store:t})]})}function V(){let[e,t]=(0,C.useState)(0),[n,r]=(0,C.useState)([]),i=e=>{x(F).save(z[e]),r(t=>[...t,`planted a v${z[e].version} draft — reopening the form`]),t(e=>e+1)};return(0,T.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,T.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,T.jsx)(`button`,{type:`button`,className:b,onClick:()=>i(`v1`),children:`Plant a v1 draft`}),(0,T.jsx)(`button`,{type:`button`,className:b,onClick:()=>i(`v2`),children:`Plant a v2 draft`}),(0,T.jsx)(`button`,{type:`button`,className:b,onClick:()=>i(`future`),children:`Plant a v9 (future) draft`})]}),(0,T.jsx)(B,{onDiscard:e=>queueMicrotask(()=>r(t=>[...t,`discarded a v${e.fromVersion} draft: ${e.reason} (form is v${e.toVersion})`]))},e),(0,T.jsx)(h,{title:`Restore log`,children:(0,T.jsx)(g,{empty:`Plant a draft to see it restored, upgraded or discarded.`,children:n.map((e,t)=>(0,T.jsx)(`p`,{children:e},`${t}:${e}`))})})]})}var H={migration:`import { useState } from "react"
import { persist, type DraftDiscard, type StorageCapability } from "@kitora/form/core"
import { SelectField, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Profile = { name: { first: string; last: string }; plan: string }

const defaultValues: Profile = { name: { first: "", last: "" }, plan: "free" }
const PLANS = [{ value: "free", label: "Free" }, { value: "pro", label: "Pro" }, { value: "team", label: "Team" }]
const isRecord = (x: unknown): x is Record<string, unknown> => typeof x === "object" && x !== null && !Array.isArray(x)

// One step per version bump, keyed by the version it upgrades FROM. Return null when
// the draft does not have the shape the step expects (it is then discarded).
const migrations = {
  1: (v: unknown) => {
    if (!isRecord(v) || typeof v.fullName !== "string") return null
    const [first = "", ...rest] = v.fullName.split(" ")
    return { name: { first, last: rest.join(" ") }, tier: v.tier }
  },
  2: (v: unknown) => (isRecord(v) ? { name: v.name, plan: typeof v.tier === "string" ? v.tier : "free" } : null),
}

// stub: replace with your storage (localStorage, IndexedDB, a server draft endpoint)
let saved: unknown = null
const storage: StorageCapability = {
  load: () => saved,
  save: (draft) => {
    saved = draft
  },
  clear: () => {
    saved = null
  },
}

// drafts as older (v1, v2) and newer (v9) releases of the app would have saved them
const SEEDS = {
  v1: { version: 1, values: { fullName: "Ada Lovelace", tier: "pro" } },
  v2: { version: 2, values: { name: { first: "Grace", last: "Hopper" }, tier: "team" } },
  future: { version: 9, values: { profile: { displayName: "From the future" } } },
} as const

// stub: replace with your API (PUT /profile)
const api = {
  async save(payload: Profile): Promise<void> {
    console.log("saved", payload)
  },
}

function ProfileForm({ onDiscard }: { onDiscard: (d: DraftDiscard) => void }) {
  const form = useForm<Profile>({
    defaultValues,
    plugins: [
      persist({
        storage,
        version: 3, // bump when the value shape changes, and add the step above
        migrations, // a v1 draft runs 1 → 2 → 3
        // a future (v4+) draft, a gap in the chain or a failing step: cleared, reported, never applied
        onDiscard,
      }),
    ],
  })
  return (
    <Form form={form} onSubmit={api.save}>
      <TextField name="name.first" label="First name" />
      <TextField name="name.last" label="Last name" />
      <SelectField name="plan" label="Plan" options={PLANS} />
      <Form.Submit>Save profile</Form.Submit>
    </Form>
  )
}

// plant an old or a future draft, then reopen the form (a remount) to see it upgraded or discarded
export function VersionedDrafts() {
  const [visit, setVisit] = useState(0)
  const [log, setLog] = useState<string[]>([])
  const plant = (key: keyof typeof SEEDS): void => {
    storage.save(SEEDS[key])
    setLog((l) => [...l, "planted a v" + SEEDS[key].version + " draft — reopening the form"])
    setVisit((v) => v + 1)
  }
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => plant("v1")}>Plant a v1 draft</button>
        <button type="button" onClick={() => plant("v2")}>Plant a v2 draft</button>
        <button type="button" onClick={() => plant("future")}>Plant a v9 (future) draft</button>
      </div>
      <ProfileForm
        key={visit}
        // reported while the store is created (during render): log it on the next tick
        onDiscard={(d) => queueMicrotask(() => setLog((l) => [...l, "discarded a v" + d.fromVersion + " draft: " + d.reason + " (form is v" + d.toVersion + ")"]))}
      />
      <ol className="text-[12px]">
        {log.map((line, i) => (
          <li key={i + ":" + line}>{line}</li>
        ))}
      </ol>
    </div>
  )
}`};function U(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(t,{title:`Drafts: migration and multi-tab`,children:`A saved draft carries its version and is upgraded step by step when the form changed shape; a draft it cannot read is discarded and reported, never applied. Every open tab of one document stays in sync, and only one of them saves the draft.`}),(0,T.jsx)(m,{n:1,title:`Versioned drafts`,blurb:`The form is v3. Plant a v1 or v2 draft (as an older release saved it) and it is upgraded through the migration chain; a v9 draft from a newer release is discarded loudly.`,code:H.migration,children:(0,T.jsx)(V,{})}),(0,T.jsx)(m,{n:2,title:`Two tabs, one draft`,blurb:`Two panes with their own stores on one BroadcastChannel. Type in either; open the page in another tab to sync across tabs. One tab is the leader and alone writes the draft.`,code:M,children:(0,T.jsx)(j,{})})]})}export{U as component};