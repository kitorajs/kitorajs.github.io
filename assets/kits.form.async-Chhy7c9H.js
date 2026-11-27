import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,_i as i,zc as a}from"./index-BZuUy872.js";import{W as o,n as s,x as c}from"./messages-CylclMLI.js";import{A as l,J as u,P as d,c as f,h as p}from"./field-config-53O_jYuu.js";import{a as ee,r as m}from"./fields-DyVcPE0c.js";import{t as h}from"./async-select-B3mQ36PD.js";import{t as g}from"./async-multi-select-DnPI7Xem.js";import{t as _}from"./example-B67lLz1F.js";import{n as v}from"./auto-form-DAJDng-D.js";import"./demos-PewJ5Ayd.js";import{i as y,r as b,t as x}from"./demo-fixtures-DdkQJpDx.js";var S=e(r(),1),C=a(),w=`
`,T=e=>e==null||e===``;function E(e,t,n=250){let r=c(),i=s(),a=d(t=>JSON.stringify(e.map(e=>t.getValue(e)??null))),[o,l]=(0,S.useState)({status:`idle`}),u=(0,S.useRef)(t);(0,S.useEffect)(()=>{u.current=t});let f=e.join(w);return(0,S.useEffect)(()=>{let e=f===``?[]:f.split(w),t=Object.fromEntries(e.map(e=>[e,r.getValue(e)]));if(e.some(e=>T(t[e]))){l({status:`idle`});return}let a=new AbortController;l(e=>({status:`loading`,value:e.value}));let o=setTimeout(()=>{u.current(t,{signal:a.signal}).then(e=>{a.signal.aborted||l({status:`ready`,value:e})},e=>{a.signal.aborted||l({status:`error`,error:e instanceof Error?e.message:i.t(`display.loadFailed`)})})},n);return()=>{clearTimeout(o),a.abort()}},[a,f,r,n,i]),o}function D({label:e,deps:t,load:n,render:r,empty:a,debounceMs:o,className:c}){let l=s(),u=E(t,n,o),d=u.status===`idle`?a:u.status===`loading`?l.t(`picker.loading`):u.status===`error`||u.value===void 0?null:r?r(u.value):String(u.value);return(0,C.jsxs)(`div`,{className:i(`flex flex-col gap-1 text-[13px]`,c),"data-async-display":u.status,children:[e?(0,C.jsx)(`span`,{className:`font-medium`,children:e}):null,(0,C.jsx)(`output`,{"aria-live":`polite`,"aria-busy":u.status===`loading`||void 0,className:i(u.status===`loading`&&`text-muted-foreground`),children:d}),u.status===`error`?(0,C.jsx)(`small`,{role:`alert`,className:`text-xs text-destructive`,children:u.error}):null]})}var O={country:`US`,state:``};function k(){return(0,C.jsxs)(f,{form:l({defaultValues:O}),children:[(0,C.jsx)(m,{name:`country`,label:`Country`,options:x}),(0,C.jsx)(h,{name:`state`,label:`State / region`,dependsOn:[`country`],loadOptions:y})]})}var A=`import { AsyncSelectField, SelectField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { COUNTRIES, loadStates } from "@/kit/form/demo-fixtures"

// the gallery's mock server: country list, and a state loader that waits like a network call,
// filters by the typed query and honours the abort signal

type Address = { country: string; state: string }

const defaultValues: Address = { country: "US", state: "" }

export function AddressForm() {
  const form = useForm<Address>({ defaultValues })
  return (
    <Form form={form}>
      <SelectField name="country" label="Country" options={COUNTRIES} />
      <AsyncSelectField
        name="state"
        label="State / region"
        // 'country' is the sibling field above: changing it reloads this list and clears the stale state
        dependsOn={["country"]}
        // gets { parent: the current country, query, signal }; a newer load aborts this one
        loadOptions={loadStates}
      />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>n(()=>import(`./dependent-CDnvvrSi.js`),[]));var te={country:`US`,state:``,city:``};function ne(){return(0,C.jsxs)(f,{form:l({defaultValues:te}),children:[(0,C.jsx)(m,{name:`country`,label:`Country`,options:x}),(0,C.jsx)(h,{name:`state`,label:`State`,dependsOn:[`country`],loadOptions:y}),(0,C.jsx)(h,{name:`city`,label:`City`,dependsOn:[`state`],loadOptions:b})]})}var j=`import { AsyncSelectField, SelectField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { COUNTRIES, loadCities, loadStates } from "@/kit/form/demo-fixtures"

// the gallery's mock server: country list, and state / city loaders ({ parent, query, signal } → options)

type Place = { country: string; state: string; city: string }

const defaultValues: Place = { country: "US", state: "", city: "" }

export function PlaceForm() {
  const form = useForm<Place>({ defaultValues })
  return (
    <Form form={form}>
      <SelectField name="country" label="Country" options={COUNTRIES} />
      {/* 'country' is the sibling field above */}
      <AsyncSelectField name="state" label="State" dependsOn={["country"]} loadOptions={loadStates} />
      {/* 'state' is the sibling field above */}
      <AsyncSelectField name="city" label="City" dependsOn={["state"]} loadOptions={loadCities} />
      {/* each level clears + reloads everything beneath it (kernel async-resource cap K8) */}
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>n(()=>import(`./chain-NMjdG3IK.js`),[]));var M={person:``},N=[{id:`u1`,name:`Ada Lovelace`},{id:`u2`,name:`Alan Turing`},{id:`u3`,name:`Grace Hopper`}],P={async search(e){return N.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))}};function F(){return(0,C.jsx)(f,{form:l({defaultValues:M}),children:(0,C.jsx)(h,{name:`person`,label:`Find a person`,loadOptions:async({query:e,signal:t})=>{if(!e.trim())return[];let n=await P.search(e);return t.aborted?[]:n.map(e=>({value:e.id,label:e.name}))}})})}var I=`import { AsyncSelectField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Assignee = { person: string }
type Person = { id: string; name: string }

const defaultValues: Assignee = { person: "" }

// stub: replace with your API (GET /people?q=…)
const PEOPLE: Person[] = [{ id: "u1", name: "Ada Lovelace" }, { id: "u2", name: "Alan Turing" }, { id: "u3", name: "Grace Hopper" }]
const api = {
  async search(query: string): Promise<Person[]> {
    return PEOPLE.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
  },
}

export function AssigneeForm() {
  const form = useForm<Assignee>({ defaultValues })
  return (
    <Form form={form}>
      <AsyncSelectField
        name="person"
        label="Find a person"
        loadOptions={async ({ query, signal }) => {
          if (!query.trim()) return []
          const res = await api.search(query) // debounced by the field
          if (signal.aborted) return []       // the last keystroke wins
          return res.map((p) => ({ value: p.id, label: p.name }))
        }}
      />
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>n(()=>import(`./search-CMaV4Iib.js`),[]));var L={actionId:`a-999`,secondaryIds:[`a-101`,`a-998`]},R={async actions(){return[{id:`a-101`,name:`Purchase`},{id:`a-102`,name:`Add to cart`}]}};function z(){let e=l({defaultValues:L});return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,C.jsxs)(f,{form:e,children:[(0,C.jsx)(h,{name:`actionId`,label:`Conversion action`,loadOptions:async()=>(await R.actions()).map(e=>({value:e.id,label:e.name})),onStale:{set:`0`}}),(0,C.jsx)(g,{name:`secondaryIds`,label:`Secondary actions`,loadOptions:async()=>({options:(await R.actions()).map(e=>({value:e.id,label:e.name}))}),onStale:`clear`})]}),(0,C.jsx)(B,{form:e})]})}function B({form:e}){let t=p(e,e=>e.serialize(),o);return(0,C.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,C.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,C.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var V=`import { AsyncMultiSelectField, AsyncSelectField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual } from "@kitora/form/core"

type Goal = { actionId: string; secondaryIds: string[] }
type Action = { id: string; name: string }

// the saved ids may belong to an account that is no longer connected
const defaultValues: Goal = { actionId: "a-999", secondaryIds: ["a-101", "a-998"] }

// stub: replace with your API (GET /accounts/:id/actions)
const api = {
  async actions(): Promise<Action[]> {
    return [{ id: "a-101", name: "Purchase" }, { id: "a-102", name: "Add to cart" }]
  },
}

export function GoalForm() {
  const form = useForm<Goal>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        {/* after a successful, unsearched load without the saved id: write "0" (dirty); a failed load keeps it */}
        <AsyncSelectField
          name="actionId"
          label="Conversion action"
          loadOptions={async () => (await api.actions()).map((a) => ({ value: a.id, label: a.name }))}
          onStale={{ set: "0" }}
        />
        {/* the multi twin: "clear" drops only the ids the complete, unsearched list lacks */}
        <AsyncMultiSelectField
          name="secondaryIds"
          label="Secondary actions"
          loadOptions={async () => ({ options: (await api.actions()).map((a) => ({ value: a.id, label: a.name })) })}
          onStale="clear"
        />
      </Form>
      <Payload form={form} />
    </div>
  )
}

/** What the form would submit, live: a readout beside the form, not part of it. */
function Payload({ form }: { form: SnapshotSource & { serialize(): unknown } }) {
  const payload = useFormSnapshot(form, (s) => s.serialize(), deepEqual)
  return (
    <aside className="w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card">
      <div className="border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium">Live payload</div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>n(()=>import(`./on-stale-miowKmWS.js`),[]));var H={apiKey:``},U=350,W=[{value:`k_8f2a91`,label:`Production`},{value:`k_3c77d0`,label:`Staging`}],G={async keys(e,t){return await new Promise(e=>setTimeout(e,U)),t.aborted?[]:W.filter(t=>t.label.toLowerCase().includes(e.toLowerCase())).map(e=>({...e,hint:e.value}))},async generate(){await new Promise(e=>setTimeout(e,U));let e={value:`k_${Math.random().toString(16).slice(2,8)}`,label:`Generated ${W.length+1}`};return W.push(e),e}};function K(){let e=l({defaultValues:H});return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,C.jsx)(f,{form:e,children:(0,C.jsx)(h,{name:`apiKey`,label:`API key`,loadOptions:({query:e,signal:t})=>G.keys(e,t),freeText:!0,action:{label:`Generate a key`,run:G.generate},placeholder:`Pick a key or paste one…`,required:!0})}),(0,C.jsx)(re,{form:e})]})}function re({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),o);return(0,C.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,C.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,C.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,C.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,C.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,C.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var q=`import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { AsyncSelectField, type ComboOption } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Settings = { apiKey: string }

const defaultValues: Settings = { apiKey: "" }

// stub: replace with your API (GET /keys?q=…, POST /keys). 350 ms latency, like a real round trip.
const LATENCY_MS = 350
const KEYS = [
  { value: "k_8f2a91", label: "Production" },
  { value: "k_3c77d0", label: "Staging" },
]
const api = {
  async keys(query: string, signal: AbortSignal): Promise<ComboOption[]> {
    await new Promise((r) => setTimeout(r, LATENCY_MS))
    if (signal.aborted) return []
    return KEYS.filter((k) => k.label.toLowerCase().includes(query.toLowerCase())).map((k) => ({ ...k, hint: k.value }))
  },
  async generate(): Promise<ComboOption> {
    await new Promise((r) => setTimeout(r, LATENCY_MS))
    const key = { value: \`k_\${Math.random().toString(16).slice(2, 8)}\`, label: \`Generated \${KEYS.length + 1}\` }
    KEYS.push(key)
    return key
  },
}

export function SettingsForm() {
  const form = useForm<Settings>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        {/* pick (stores the id, shows the name), paste any text (stored as typed), or generate one */}
        <AsyncSelectField
          name="apiKey"
          label="API key"
          loadOptions={({ query, signal }) => api.keys(query, signal)}
          freeText
          action={{ label: "Generate a key", run: api.generate }} // selected, then the list is fetched again
          placeholder="Pick a key or paste one…"
          required
        />
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
    <aside className="w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card">
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>n(()=>import(`./free-text-DQFocecg.js`),[]));var J={bannerId:``},Y=350,X=new Set([`cb-1001`,`cb-2002`]),ie={async snippet(e,t){if(await new Promise(e=>setTimeout(e,Y)),t.aborted)return``;if(!X.has(e))throw Error(`No banner with id ${e}`);return`<script src="https://cdn.example.com/banner/${e}.js" async><\/script>`}};function ae(){let e=l({defaultValues:J});return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,C.jsxs)(f,{form:e,children:[(0,C.jsx)(ee,{name:`bannerId`,label:`Banner id`,placeholder:`cb-1001`,description:`Try cb-1001, cb-2002 or anything else`}),(0,C.jsx)(D,{label:`Install snippet`,deps:[`bannerId`],load:(e,{signal:t})=>ie.snippet(String(e.bannerId),t),empty:`Enter a banner id`,render:e=>(0,C.jsx)(`code`,{className:`break-all text-xs`,children:e})})]}),(0,C.jsx)(oe,{form:e})]})}function oe({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),o);return(0,C.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,C.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,C.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,C.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,C.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,C.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var Z=`import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { AsyncDisplayField, TextField, type DependentValues } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Banner = { bannerId: string }

const defaultValues: Banner = { bannerId: "" }

// stub: replace with your API (GET /banners/:id/snippet). Banner ids the mock knows; any other id fails like a 404.
const LATENCY_MS = 350
const BANNERS = new Set(["cb-1001", "cb-2002"])
const api = {
  async snippet(id: string, signal: AbortSignal): Promise<string> {
    await new Promise((r) => setTimeout(r, LATENCY_MS))
    if (signal.aborted) return ""
    if (!BANNERS.has(id)) throw new Error(\`No banner with id \${id}\`)
    return \`<script src="https://cdn.example.com/banner/\${id}.js" async><\/script>\`
  },
}

export function BannerForm() {
  const form = useForm<Banner>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <TextField name="bannerId" label="Banner id" placeholder="cb-1001" description="Try cb-1001, cb-2002 or anything else" />
        {/* loads when bannerId changes (debounced, the stale load aborted); never part of the submitted values */}
        <AsyncDisplayField
          label="Install snippet"
          deps={["bannerId"]} // reads the sibling bannerId field
          load={(v: DependentValues, { signal }) => api.snippet(String(v.bannerId), signal)}
          empty="Enter a banner id"
          render={(code) => <code className="break-all text-xs">{code}</code>}
        />
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
    <aside className="w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card">
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>n(()=>import(`./loaded-BaO8Duyh.js`),[]));var se=u()(({f:e})=>({fields:[e.text(`bannerId`,{label:`Banner id`,placeholder:`cb-1001`,description:`Try cb-1001, cb-2002 or anything else`}),e.display(`snippet`,{label:`Install snippet`,value:{resource:`bannerSnippet`,deps:[`bannerId`]}})]})),Q=350,ce=new Set([`cb-1001`,`cb-2002`]),le={async snippet(e,t){if(await new Promise(e=>setTimeout(e,Q)),t.aborted)return``;if(!ce.has(e))throw Error(`No banner with id ${e}`);return`<script src="https://cdn.example.com/banner/${e}.js" async><\/script>`}},ue=async({deps:e,signal:t})=>({value:await le.snippet(String(e[0]),t)});function de(){let[e,t]=(0,S.useState)(null);return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,C.jsx)(v,{def:se,defaultValues:{bannerId:``},loaders:{bannerSnippet:ue},onStore:t,hideSubmit:!0}),e?(0,C.jsx)(fe,{form:e}):(0,C.jsx)(`div`,{})]})}function fe({form:e}){let{payload:t,dirty:n,status:r,issues:i}=p(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),o);return(0,C.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,C.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,C.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,C.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,C.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,C.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var $=`import { deepEqual, type Issue, type SubmitStatus, defineForm, type FormStore, type ModelLoader } from "@kitora/form/core"
import { useState } from "react"
import { AutoForm } from "@kitora/form/auto"
import { type SnapshotSource, useFormSnapshot } from "@kitora/form/react"

type Banner = { bannerId: string; snippet?: string }

// the display's value is LOADED from the sibling bannerId by a named loader: never in the values, never sent
const def = defineForm<Banner>()(({ f }) => ({
  fields: [
    f.text("bannerId", { label: "Banner id", placeholder: "cb-1001", description: "Try cb-1001, cb-2002 or anything else" }),
    // deps names the sibling field the loader reads
    f.display("snippet", { label: "Install snippet", value: { resource: "bannerSnippet", deps: ["bannerId"] } }),
  ],
}))

// stub: replace with your API (GET /banners/:id/snippet); an empty bannerId never reaches it. Unknown ids fail like a 404.
const LATENCY_MS = 350
const BANNERS = new Set(["cb-1001", "cb-2002"])
const api = {
  async snippet(id: string, signal: AbortSignal): Promise<string> {
    await new Promise((r) => setTimeout(r, LATENCY_MS))
    if (signal.aborted) return ""
    if (!BANNERS.has(id)) throw new Error(\`No banner with id \${id}\`)
    return \`<script src="https://cdn.example.com/banner/\${id}.js" async><\/script>\`
  },
}
/** The named loader the model's \`value: { resource: "bannerSnippet" }\` runs (a JSON model names it; code supplies it). */
const bannerSnippet: ModelLoader = async ({ deps, signal }) => ({ value: await api.snippet(String(deps[0]), signal) })

export function BannerForm() {
  const [store, setStore] = useState<FormStore<Banner> | null>(null)
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <AutoForm<Banner> def={def} defaultValues={{ bannerId: "" }} loaders={{ bannerSnippet }} onStore={setStore} hideSubmit />
      {store ? <Payload form={store} /> : <div />}
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
    <aside className="w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card">
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>n(()=>import(`./model-loaded-BeoV4ZbH.js`),[]));function pe(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(t,{title:`Async / dependent select (K8)`,children:`Server-loaded options with debounce, race-cancellation, cache-by-key, and clear-downstream — all from the kernel's async-resource capability. Three recipes:`}),(0,C.jsx)(_,{n:1,title:`Dependent select`,blurb:`State options load from a (mock) server keyed on country; switching country reloads + clears the stale state.`,code:A,children:(0,C.jsx)(k,{})}),(0,C.jsx)(_,{n:2,title:`Three-level chain`,blurb:`country → state → city — each level cascades, clearing and reloading everything beneath it.`,code:j,children:(0,C.jsx)(ne,{})}),(0,C.jsx)(_,{n:3,title:`Debounced server search`,blurb:`A free-text search select with no parent — type to query; the field debounces and the last keystroke wins.`,code:I,children:(0,C.jsx)(F,{})}),(0,C.jsx)(_,{n:4,title:`Saved value no longer offered`,blurb:`onStale writes a sentinel (or clears) once a settled list lacks the saved id; a failed load or a search never does. The multi select drops only the missing id. The payload shows 0, [a-101] and dirty.`,code:V,children:(0,C.jsx)(z,{})}),(0,C.jsx)(_,{n:5,title:`Pick, paste or generate`,blurb:`freeText stores typed text as the value (an exact name stores that key's id); the action creates a key, selects it and refetches the list.`,code:q,children:(0,C.jsx)(K,{})}),(0,C.jsx)(_,{n:6,title:`Value loaded from a field`,blurb:`AsyncDisplayField loads a read-only value keyed by other fields: loading, error and value states; the payload never carries it.`,code:Z,children:(0,C.jsx)(ae,{})}),(0,C.jsx)(_,{n:7,title:`Value loaded from a field, in the model`,blurb:`f.display with value: { resource, deps } — the same loaded value from a serializable definition: AutoForm shows loading, error and value; the payload never carries it.`,code:$,children:(0,C.jsx)(de,{})})]})}export{pe as component};