import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n,ni as r}from"./index-q72zUtm9.js";import{W as i}from"./messages-Bsb0m0Hq.js";import{A as a,c as o,h as s}from"./field-config-DXiPz8Cg.js";import{t as c}from"./availability-DYHCwqhW.js";import{t as l}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var u=n(),d={hours:{mon:[{from:`09:00`,to:`12:30`},{from:`13:30`,to:`18:00`}],tue:[{from:`09:00`,to:`18:00`}],wed:[{from:`09:00`,to:`18:00`}],thu:[{from:`09:00`,to:`12:00`},{from:`11:00`,to:`17:00`}],fri:[{from:`09:00`,to:`16:00`}]}},f={async saveHours(e){return{id:`hrs_`+Object.keys(e.hours??{}).length}}};function p(){let e=a({defaultValues:d,validateOn:`change`});return(0,u.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,u.jsxs)(o,{form:e,onSubmit:f.saveHours,children:[(0,u.jsx)(c,{name:`hours`,label:`Opening hours`,required:!0,stepMinutes:30}),(0,u.jsx)(o.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Save hours`}),(0,u.jsx)(o.Status,{success:e=>(0,u.jsxs)(`p`,{children:[`Saved `,e.id]})})]}),(0,u.jsx)(m,{form:e})]})}function m({form:e}){let{payload:t,dirty:n,status:r,issues:a}=s(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),i);return(0,u.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,u.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,u.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,u.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,u.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,u.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,u.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var h=`import { buttonVariants } from "@kitora/ui/button"
import type { WeeklyAvailability } from "@kitora/form/core"
import { WeeklyAvailabilityField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Hours = { hours: WeeklyAvailability | null }
type Saved = { id: string }

// null = no ranges, so required works; days are mon…sun, times "HH:mm"
const defaultValues: Hours = {
  hours: {
    mon: [{ from: "09:00", to: "12:30" }, { from: "13:30", to: "18:00" }],
    tue: [{ from: "09:00", to: "18:00" }],
    wed: [{ from: "09:00", to: "18:00" }],
    // an overlap to show the rule: 11:00 starts before 12:00 ends
    thu: [{ from: "09:00", to: "12:00" }, { from: "11:00", to: "17:00" }],
    fri: [{ from: "09:00", to: "16:00" }],
  },
}

// stub: replace with your API (PUT /locations/:id/hours)
const api = {
  async saveHours(v: Hours): Promise<Saved> {
    return { id: "hrs_" + Object.keys(v.hours ?? {}).length }
  },
}

export function HoursForm() {
  const form = useForm<Hours, Hours, Saved>({ defaultValues, validateOn: "change" })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.saveHours}>
        {/* the availability rule (well-formed, ordered, no overlaps per day) also runs on a server */}
        <WeeklyAvailabilityField name="hours" label="Opening hours" required stepMinutes={30} />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Save hours</Form.Submit>
        <Form.Status<Saved> success={(r) => <p>Saved {r.id}</p>} />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>t(()=>import(`./availability-Zdzh_3SU.js`),[]));function g(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(e,{title:`Weekly availability`,children:[`Opening hours, booking slots or on-call rotas as `,(0,u.jsx)(`code`,{children:`{ mon: [{ from, to }], … }`}),`. Several ranges per day, an overlap rule that names the day and marks the offending range, and copy-a-day-to-the-week. Every control is native (checkbox, time input, buttons), so Tab walks the week.`]}),(0,u.jsx)(l,{n:1,title:`Opening hours`,blurb:`Split shifts, an overlap to fix, copy to all days; posts as hours.mon.0.from.`,code:h,children:(0,u.jsx)(p,{})})]})}export{g as component};