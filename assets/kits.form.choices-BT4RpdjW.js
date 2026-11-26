import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n}from"./index-9y5uwRd3.js";import{W as r}from"./messages-BpgLhfTN.js";import{A as i,c as a,h as o}from"./field-config-62hz5rv-.js";import{t as s}from"./fields-extra-DjnCI2Jb.js";import{a as c,i as l,n as u,r as d,t as f}from"./choice-ZQTH2Ken.js";import{t as p}from"./stepper-lIjlvXQB.js";import{t as m}from"./async-multi-select-COIPgg-J.js";import{t as h}from"./example-CZLJLtIC.js";import{n as g,s as _}from"./demos-DilKtWQ6.js";var v=n(),y={languages:[`typescript`],channels:[`email`],plan:`pro`,addons:[`backups`],billing:`monthly`,seats:3,reviewers:[]},b=[`TypeScript`,`Go`,`Rust`,`Python`,`Kotlin`,`Swift`,`Elixir`,`Zig`,`OCaml`,`Haskell`].map(e=>({value:e.toLowerCase(),label:e})),x=[{value:`email`,label:`Email`,description:`A digest once a day`},{value:`sms`,label:`SMS`,description:`Only urgent alerts`},{value:`push`,label:`Push`,description:`On every device you are signed in on`}],S=[{value:`backups`,label:`Daily backups`,description:`Thirty days of restore points`,meta:`+$4`},{value:`domains`,label:`Custom domains`,description:`Serve from your own hostname`,meta:`+$2`},{value:`priority`,label:`Priority support`,description:`A reply within four business hours`,meta:`+$15`}],C=[{value:`hobby`,label:`Hobby`,description:`1 project, community support`,meta:`$0`},{value:`pro`,label:`Pro`,description:`Unlimited projects, email support`,meta:`$12/mo`},{value:`team`,label:`Team`,description:`SSO, audit log, priority support`,meta:`$49/mo`}],w=[{value:`monthly`,label:`Monthly`},{value:`yearly`,label:`Yearly`}],T=[`Ada Lovelace`,`Grace Hopper`,`Linus Torvalds`,`Barbara Liskov`,`Ken Thompson`,`Margaret Hamilton`,`Donald Knuth`,`Frances Allen`,`Edsger Dijkstra`].map((e,t)=>({value:`u${t+1}`,label:e})),E=4,D=150,O={async people({query:e,page:t,signal:n}){if(await new Promise(e=>setTimeout(e,D)),n.aborted)return{options:[],hasMore:!1};let r=T.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()));return{options:r.slice(t*E,(t+1)*E),hasMore:r.length>(t+1)*E}},async createPeople(e){return await new Promise(e=>setTimeout(e,D)),e.split(`,`).map(e=>e.trim()).filter(e=>e!==``).map(e=>{let t=T.find(t=>t.label.toLowerCase()===e.toLowerCase());if(t)return t;let n={value:`u${T.length+1}`,label:e};return T.push(n),n})}};function k(){let e=i({defaultValues:y});return(0,v.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,v.jsxs)(a,{form:e,layout:`none`,className:`flex flex-col gap-4`,children:[(0,v.jsx)(d,{name:`languages`,label:`Languages`,options:b,max:4,description:`Up to four; long lists get a filter and select-all`}),` `,(0,v.jsx)(u,{name:`channels`,label:`Notify me by`,options:x,min:1,other:{name:`channelsOther`,label:`Something else`}}),(0,v.jsx)(l,{name:`plan`,label:`Plan`,options:C}),` `,(0,v.jsx)(f,{name:`addons`,label:`Add-ons`,options:S}),` `,(0,v.jsx)(c,{name:`billing`,label:`Billing`,options:w}),` `,(0,v.jsx)(p,{name:`seats`,label:`Seats`,min:1,max:50}),` `,(0,v.jsx)(m,{name:`reviewers`,label:`Reviewers`,loadOptions:O.people,onCreate:O.createPeople,description:`Server search with paging; type a new name to create it, or several separated by commas`})]}),(0,v.jsx)(A,{form:e})]})}function A({form:e}){let{payload:t,dirty:n,status:i,issues:a}=o(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),r);return(0,v.jsxs)(`aside`,{className:`w-full min-w-0 self-start overflow-hidden rounded-lg border bg-card`,children:[(0,v.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,v.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,v.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,i]})]}),(0,v.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,v.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,v.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var j=`import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { AsyncMultiSelectField, CheckboxCardsField, CheckboxGroupField, MultiSelectField, RadioCardsField, SegmentedField, NumberStepperField, type RemoteOption } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Profile = { languages: string[]; channels: string[]; channelsOther?: string; plan: string; addons: string[]; billing: string; seats?: number; reviewers: string[] }

const defaultValues: Profile = { languages: ["typescript"], channels: ["email"], plan: "pro", addons: ["backups"], billing: "monthly", seats: 3, reviewers: [] }
const LANGUAGES = ["TypeScript", "Go", "Rust", "Python", "Kotlin", "Swift", "Elixir", "Zig", "OCaml", "Haskell"].map((l) => ({ value: l.toLowerCase(), label: l }))
const CHANNELS = [
  { value: "email", label: "Email", description: "A digest once a day" },
  { value: "sms", label: "SMS", description: "Only urgent alerts" },
  { value: "push", label: "Push", description: "On every device you are signed in on" },
]
const ADD_ONS = [
  { value: "backups", label: "Daily backups", description: "Thirty days of restore points", meta: "+$4" },
  { value: "domains", label: "Custom domains", description: "Serve from your own hostname", meta: "+$2" },
  { value: "priority", label: "Priority support", description: "A reply within four business hours", meta: "+$15" },
]
const PLANS = [
  { value: "hobby", label: "Hobby", description: "1 project, community support", meta: "$0" },
  { value: "pro", label: "Pro", description: "Unlimited projects, email support", meta: "$12/mo" },
  { value: "team", label: "Team", description: "SSO, audit log, priority support", meta: "$49/mo" },
]
const BILLING = [{ value: "monthly", label: "Monthly" }, { value: "yearly", label: "Yearly" }]

// stub: replace with your API (GET /people?q=…&page=…, POST /people). Pages of 4, 150 ms latency.
const DIRECTORY: RemoteOption[] = ["Ada Lovelace", "Grace Hopper", "Linus Torvalds", "Barbara Liskov", "Ken Thompson", "Margaret Hamilton", "Donald Knuth", "Frances Allen", "Edsger Dijkstra"].map((name, i) => ({ value: \`u\${i + 1}\`, label: name }))
const PAGE_SIZE = 4
const LATENCY_MS = 150
const api = {
  async people({ query, page, signal }: { query: string; page: number; signal: AbortSignal }): Promise<{ options: RemoteOption[]; hasMore: boolean }> {
    await new Promise((r) => setTimeout(r, LATENCY_MS))
    if (signal.aborted) return { options: [], hasMore: false }
    const hits = DIRECTORY.filter((p) => p.label.toLowerCase().includes(query.toLowerCase()))
    return { options: hits.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE), hasMore: hits.length > (page + 1) * PAGE_SIZE }
  },
  // "Hedy, Alan" creates both; an existing name is reused, not duplicated
  async createPeople(text: string): Promise<RemoteOption[]> {
    await new Promise((r) => setTimeout(r, LATENCY_MS))
    const names = text.split(",").map((p) => p.trim()).filter((p) => p !== "")
    return names.map((label) => {
      const found = DIRECTORY.find((p) => p.label.toLowerCase() === label.toLowerCase())
      if (found) return found
      const created = { value: \`u\${DIRECTORY.length + 1}\`, label }
      DIRECTORY.push(created)
      return created
    })
  },
}

export function ProfileForm() {
  const form = useForm<Profile>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} layout="none" className="flex flex-col gap-4">
        <MultiSelectField name="languages" label="Languages" options={LANGUAGES} max={4} description="Up to four; long lists get a filter and select-all" /> {/* string[] */}
        {/* string[]; "Something else" writes the text to channelsOther */}
        <CheckboxGroupField name="channels" label="Notify me by" options={CHANNELS} min={1} other={{ name: "channelsOther", label: "Something else" }} />
        <RadioCardsField name="plan" label="Plan" options={PLANS} /> {/* "pro" */}
        <CheckboxCardsField name="addons" label="Add-ons" options={ADD_ONS} /> {/* string[] */}
        <SegmentedField name="billing" label="Billing" options={BILLING} /> {/* "monthly" */}
        <NumberStepperField name="seats" label="Seats" min={1} max={50} /> {/* 3 */}
        <AsyncMultiSelectField
          name="reviewers"
          label="Reviewers"
          loadOptions={api.people} // { options, hasMore }: paged server search
          onCreate={api.createPeople} // type new names (comma-separated) to create them; stores string[] of ids
          description="Server search with paging; type a new name to create it, or several separated by commas"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>t(()=>import(`./choices-BX2WZczU.js`),[]));var M=[{value:`cpc`,label:`Paid search`,hint:`cpc`},{value:`email`,label:`Email`,hint:`email`},{value:`referral`,label:`Referral`,hint:`referral`}],N=200;async function P(){return await new Promise(e=>setTimeout(e,N)),{value:`partner-${M.length+1}`,label:`Partner`}}function F(){let e=i({defaultValues:{medium:`email`,fallback:``}});return(0,v.jsxs)(_,{children:[(0,v.jsxs)(a,{form:e,children:[(0,v.jsx)(s,{name:`medium`,label:`Medium`,options:M,freeText:!0,description:`Pick one, or type your own; typing an exact name stores its key`}),(0,v.jsx)(s,{name:`fallback`,label:`Fallback medium`,options:M,action:{label:`Add medium`,run:P},description:`The action creates an option and selects it`})]}),(0,v.jsx)(g,{store:e})]})}var I=`import { ComboboxField, type ComboOption } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Source = { medium: string; fallback: string }

const defaultValues: Source = { medium: "email", fallback: "" }
const MEDIUMS: ComboOption[] = [{ value: "cpc", label: "Paid search" }, { value: "email", label: "Email" }]

// stub: replace with your API (POST /mediums)
const api = {
  async addMedium(): Promise<ComboOption> {
    return { value: crypto.randomUUID(), label: "Partner" }
  },
}

export function SourceForm() {
  const form = useForm<Source>({ defaultValues })
  return (
    <Form form={form}>
      {/* typed text is the value ("social"); an exact label ("Email") stores that option's value ("email") */}
      <ComboboxField name="medium" label="Medium" options={MEDIUMS} freeText />
      {/* the action's resolved option is selected; an action implies the free-text mode */}
      <ComboboxField name="fallback" label="Fallback medium" options={MEDIUMS} action={{ label: "Add medium", run: api.addMedium }} />
    </Form>
  )
}`;function L(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(e,{title:`Choice fields`,children:[`Multi-value and rich single-value pickers. Lists store `,(0,v.jsx)(`code`,{children:`string[]`}),` in option order and post as indexed keys; every control is keyboard operable (listbox and radio-group patterns) and labelled by its legend or label.`]}),(0,v.jsx)(h,{n:1,title:`Profile preferences`,blurb:`Multi-select with a limit, checkbox group with Other, radio cards and checkbox cards (ui ChoiceCard), segmented, stepper, async multi-select that creates one or several (comma-separated).`,code:j,children:(0,v.jsx)(k,{})}),(0,v.jsx)(h,{n:2,title:`Pick or type`,blurb:`ComboboxField freeText over a static list: typed text is the value unless it matches an option's name exactly; an action adds an option and selects it.`,code:I,children:(0,v.jsx)(F,{})})]})}export{L as component};