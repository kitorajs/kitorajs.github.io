import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,i as n,n as r,t as i}from"./tabs-oUW2hCtt.js";import{s as a}from"./kit-docs-DpYhPoxM.js";import{Bc as o,Cc as s,Ic as c,ni as l}from"./index-q72zUtm9.js";import{p as u}from"./field-options-Ck0r8oxm.js";import{W as d}from"./messages-Bsb0m0Hq.js";import{A as f,c as p,h as m,t as h}from"./field-config-DXiPz8Cg.js";import{a as g,i as _,r as v}from"./fields-CoJCsIMd.js";import{t as y}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var b=e(o(),1),x=c(),S=[{value:`system`,label:`System`},{value:`light`,label:`Light`},{value:`dark`,label:`Dark`}],C={displayName:`Ada Lovelace`,theme:`system`,emailNotifs:!0,pushNotifs:!1,twoFactor:!0},w=400,T={async patchSettings(e){if(await new Promise(e=>setTimeout(e,w)),JSON.stringify(e).includes(`fail`))throw Error(`server rejected the value`)}};function E(){let e=f({defaultValues:C,autosave:{on:`change`,debounceMs:w,save:T.patchSettings}}),[a,o]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,x.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,x.jsx)(`button`,{type:`button`,className:l({variant:`outline`,size:`sm`,className:`w-fit`}),onClick:()=>o(e=>!e),children:a?`Edit`:`View mode`}),(0,x.jsx)(p,{form:e,children:(0,x.jsx)(h,{readOnly:a,children:(0,x.jsxs)(i,{defaultValue:`profile`,children:[(0,x.jsxs)(n,{children:[(0,x.jsx)(t,{value:`profile`,children:`Profile`}),(0,x.jsx)(t,{value:`notifications`,children:`Notifications`}),(0,x.jsx)(t,{value:`security`,children:`Security`})]}),(0,x.jsx)(r,{value:`profile`,keepMounted:!0,className:`pt-4`,children:(0,x.jsxs)(u,{title:`Profile`,cols:{base:1,md:2},children:[(0,x.jsx)(g,{name:`displayName`,label:`Display name`}),(0,x.jsx)(v,{name:`theme`,label:`Theme`,options:S})]})}),(0,x.jsx)(r,{value:`notifications`,keepMounted:!0,className:`pt-4`,children:(0,x.jsx)(u,{title:`Notifications`,children:(0,x.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,x.jsx)(_,{name:`emailNotifs`,label:`Email notifications`}),(0,x.jsx)(_,{name:`pushNotifs`,label:`Push notifications`})]})})}),(0,x.jsx)(r,{value:`security`,keepMounted:!0,className:`pt-4`,children:(0,x.jsx)(u,{title:`Security`,children:(0,x.jsx)(_,{name:`twoFactor`,label:`Two-factor authentication`})})})]})})})]}),(0,x.jsx)(D,{form:e})]})}function D({form:e}){let{payload:t,dirty:n,status:r,issues:i}=m(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),d);return(0,x.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,x.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,x.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,x.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,x.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,x.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,x.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var O=`import { useState } from "react"
import { buttonVariants } from "@kitora/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@kitora/ui/tabs"
import { FieldConfigProvider, Section, SelectField, SwitchField, TextField } from "@kitora/form/fields"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Settings = { displayName: string; theme: string; emailNotifs: boolean; pushNotifs: boolean; twoFactor: boolean }

const themes = [{ value: "system", label: "System" }, { value: "light", label: "Light" }, { value: "dark", label: "Dark" }]
const defaultValues: Settings = { displayName: "Ada Lovelace", theme: "system", emailNotifs: true, pushNotifs: false, twoFactor: true }
/** Autosave debounce and the fake server latency (ms), so the Saving… state is visible. */
const SAVE_MS = 400

// stub: replace with your API (PATCH /me/settings); reject to show the field's "Couldn't save · Retry"
const api = {
  async patchSettings(patch: Record<string, unknown>): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, SAVE_MS))
    if (JSON.stringify(patch).includes("fail")) throw new Error("server rejected the value")
  },
}

export function SettingsForm() {
  // no submit button: each field saves on its own and shows Saving… / Saved / Retry
  const form = useForm<Settings>({ defaultValues, autosave: { on: "change", debounceMs: SAVE_MS, save: api.patchSettings } })
  const [readOnly, setReadOnly] = useState(false) // view/edit toggle: app chrome, not form state
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="flex flex-col gap-3">
        <button type="button" className={buttonVariants({ variant: "outline", size: "sm", className: "w-fit" })} onClick={() => setReadOnly((r) => !r)}>
          {readOnly ? "Edit" : "View mode"}
        </button>
        <Form form={form}>
          <FieldConfigProvider readOnly={readOnly}>
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              {/* keepMounted: every field stays registered, so its autosave status survives a tab switch */}
              <TabsContent value="profile" keepMounted className="pt-4">
                <Section title="Profile" cols={{ base: 1, md: 2 }}>
                  <TextField name="displayName" label="Display name" />
                  <SelectField name="theme" label="Theme" options={themes} />
                </Section>
              </TabsContent>
              <TabsContent value="notifications" keepMounted className="pt-4">
                <Section title="Notifications">
                  <div className="flex flex-col gap-3">
                    <SwitchField name="emailNotifs" label="Email notifications" />
                    <SwitchField name="pushNotifs" label="Push notifications" />
                  </div>
                </Section>
              </TabsContent>
              <TabsContent value="security" keepMounted className="pt-4">
                <Section title="Security">
                  <SwitchField name="twoFactor" label="Two-factor authentication" />
                </Section>
              </TabsContent>
            </Tabs>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>s(()=>import(`./settings-Dq0JwOet.js`),[]));var k={version:7,name:`Ada Lovelace`,nickname:`Countess`,bio:`Analyst of engines.`,phone:`+44 20 7946 0000`,company:`Babbage & Co`},A={async patch(e){return{version:(e.version??0)+1}}};function j(){let e=f({defaultValues:k,lockPaths:[`version`]});return(0,x.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_240px_240px]`,children:[(0,x.jsxs)(p,{form:e,onSubmit:()=>A.patch(e.serialize({mode:`dirty`})),children:[(0,x.jsx)(g,{name:`name`,label:`Name`,description:`emptyPolicy keep (default): an emptied name is sent as ""`}),(0,x.jsx)(g,{name:`nickname`,label:`Nickname`,emptyPolicy:`null`,description:`null: clearing it sends null (the server clears it)`}),(0,x.jsx)(g,{name:`bio`,label:`Bio`,emptyPolicy:`omit`,description:`omit: an empty bio is left out (the server keeps its value)`}),(0,x.jsx)(g,{name:`phone`,label:`Phone`,type:`tel`,emptyPolicy:`undefined`,description:`undefined: dropped by JSON, kept as a key in-process`}),(0,x.jsx)(g,{name:`company`,label:`Company`,emptyPolicy:`empty-string`,description:`empty-string: always "", never null`}),(0,x.jsx)(p.Submit,{className:l({size:`sm`,className:`w-fit`}),children:`Save`})]}),(0,x.jsx)(M,{form:e,title:`Full payload`}),(0,x.jsx)(M,{form:e,title:`PATCH body (dirty)`,mode:`dirty`})]})}function M({form:e,title:t,mode:n=`full`}){let{payload:r,dirty:i,status:a,issues:o}=m(e,e=>({payload:e.serialize({mode:n}),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),d);return(0,x.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,x.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,x.jsx)(`span`,{className:`truncate font-medium`,children:t}),(0,x.jsxs)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:[i?`● dirty`:`clean`,` · `,a]})]}),(0,x.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(r,null,2)}),o.length>0?(0,x.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:o.map(e=>(0,x.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var N=`import { buttonVariants } from "@kitora/ui/button"
import { TextField } from "@kitora/form/fields"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Profile = { version: number; name: string; nickname: string; bio: string; phone: string; company: string }

// stub: replace with your API (GET /me)
const defaultValues: Profile = { version: 7, name: "Ada Lovelace", nickname: "Countess", bio: "Analyst of engines.", phone: "+44 20 7946 0000", company: "Babbage & Co" }

// stub: replace with your API (PATCH /me with If-Match: version)
const api = {
  async patch(body: Partial<Profile>): Promise<{ version: number }> {
    return { version: (body.version ?? 0) + 1 }
  },
}

// lockPaths: the version rides on every PATCH although nobody edits it, so a stale write gets a 409.
// emptyPolicy decides what an EMPTIED field means to the server: keep "" · null (clear) · omit (leave) · undefined · empty-string.
export function ProfileForm() {
  const form = useForm<Profile>({ defaultValues, lockPaths: ["version"] })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_240px_240px]">
      <Form form={form} onSubmit={() => api.patch(form.serialize({ mode: "dirty" }))}>
        <TextField name="name" label="Name" description='emptyPolicy keep (default): an emptied name is sent as ""' />
        <TextField name="nickname" label="Nickname" emptyPolicy="null" description="null: clearing it sends null (the server clears it)" />
        <TextField name="bio" label="Bio" emptyPolicy="omit" description="omit: an empty bio is left out (the server keeps its value)" />
        <TextField name="phone" label="Phone" type="tel" emptyPolicy="undefined" description="undefined: dropped by JSON, kept as a key in-process" />
        <TextField name="company" label="Company" emptyPolicy="empty-string" description='empty-string: always "", never null' />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Save</Form.Submit>
      </Form>
      <Payload form={form} title="Full payload" />
      <Payload form={form} title="PATCH body (dirty)" mode="dirty" />
    </div>
  )
}

interface LiveSource extends SnapshotSource {
  serialize(opts?: { mode?: "full" | "dirty" }): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live (\`mode="dirty"\`: the PATCH body), with its state and issues: a readout beside the form, not part of it. */
function Payload({ form, title, mode = "full" }: { form: LiveSource; title: string; mode?: "full" | "dirty" }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize({ mode }), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]">
        <span className="truncate font-medium">{title}</span>
        <span className="shrink-0 tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>s(()=>import(`./patch-CssuVnHU.js`),[]));function P(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a,{title:`Settings page`,children:`Tabbed, sectioned settings with no submit button: every field autosaves on its own and shows its status (type "fail" in the display name to see Retry). A view/edit toggle renders the same form read-only (B13).`}),(0,x.jsx)(y,{n:1,title:`Autosaving settings`,blurb:`Tabs of sections with no submit button: each field saves on its own (type fail to see Retry); the toggle renders the same form read-only.`,code:O,children:(0,x.jsx)(E,{})}),(0,x.jsx)(y,{n:2,title:`PATCH only what changed (empty policy + lock token)`,blurb:`Clear the nickname and the bio: the full payload and the PATCH body differ per field's emptyPolicy (null clears, omit leaves the server's value). The PATCH body carries only the changed fields — plus version, the optimistic-lock token, which lockPaths force-includes so a stale write gets a 409.`,code:N,children:(0,x.jsx)(j,{})})]})}export{P as component};