import{s as e}from"./kit-docs-DpYhPoxM.js";import{n as t,r as n,t as r}from"./time-CvqpiBca.js";import{Cc as i,Ic as a}from"./index-q72zUtm9.js";import{W as o}from"./messages-Bsb0m0Hq.js";import{A as s,c,h as l}from"./field-config-DXiPz8Cg.js";import{t as u}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var d=a(),f={zone:`Europe/Berlin`,opens:`09:00`,closes:`17:30`};function p(){let e=s({defaultValues:f});return(0,d.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,d.jsxs)(c,{form:e,layout:`none`,className:`flex flex-col gap-4`,children:[(0,d.jsx)(n,{name:`zone`,label:`Time zone`,description:`Search by city or offset, or detect yours`}),`                          `,(0,d.jsx)(r,{name:`starts`,label:`Starts`,timeZone:`Europe/Berlin`,description:`Stored as the DatePicker's zoned value (RFC 9557)`}),`   `,(0,d.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,d.jsx)(t,{name:`opens`,label:`Opens`,min:`06:00`,max:`12:00`,step:30}),(0,d.jsx)(t,{name:`closes`,label:`Closes`,min:`12:00`,max:`22:00`,step:30})]})]}),(0,d.jsx)(m,{form:e})]})}function m({form:e}){let{payload:t,dirty:n,status:r,issues:i}=l(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),o);return(0,d.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,d.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,d.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,d.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,d.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,d.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,d.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var h=`import { DateTimeField, TimeField, TimezoneField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Meeting = { zone: string; starts?: string; opens: string; closes: string }

const defaultValues: Meeting = { zone: "Europe/Berlin", opens: "09:00", closes: "17:30" }

export function MeetingForm() {
  const form = useForm<Meeting>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} layout="none" className="flex flex-col gap-4">
        <TimezoneField name="zone" label="Time zone" description="Search by city or offset, or detect yours" />                          {/* "Europe/Berlin" */}
        <DateTimeField name="starts" label="Starts" timeZone="Europe/Berlin" description="Stored as the DatePicker's zoned value (RFC 9557)" />   {/* "2026-07-01T09:30:00+02:00[Europe/Berlin]" */}
        {/* "09:00" — min/max are a timeRange model rule */}
        <div className="grid grid-cols-2 gap-3">
          <TimeField name="opens" label="Opens" min="06:00" max="12:00" step={30} />
          <TimeField name="closes" label="Closes" min="12:00" max="22:00" step={30} />
        </div>
        {/* pure helpers from "@kitora/form/core", usable on a server: joinZoned · splitZoned · listTimeZones */}
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>i(()=>import(`./times-C3PVNwsp.js`),[]));function g(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e,{title:`Time, date-time and time zone`,children:[`Canonical values only: `,(0,d.jsx)(`code`,{children:`HH:mm`}),` for a time of day, an ISO instant with offset for a date-time, an IANA id for a zone. Offsets are computed with `,(0,d.jsx)(`code`,{children:`Intl`}),` (DST-aware), so the server reads the same instant the person picked.`]}),(0,d.jsx)(u,{n:1,title:`Meeting setup`,blurb:`Zone picker, a zoned start, and opening hours bounded by min/max.`,code:h,children:(0,d.jsx)(p,{})})]})}export{g as component};