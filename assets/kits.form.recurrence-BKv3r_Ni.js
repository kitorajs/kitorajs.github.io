import{s as e}from"./kit-docs-DpYhPoxM.js";import{t}from"./time-CvqpiBca.js";import{Cc as n,Ic as r}from"./index-q72zUtm9.js";import{W as i}from"./messages-Bsb0m0Hq.js";import{A as a,c as o,h as s}from"./field-config-DXiPz8Cg.js";import{a as c}from"./fields-CoJCsIMd.js";import{t as l}from"./recurrence-kW-84ggG.js";import{t as u}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var d=r(),f={title:`Team sync`,starts:`2026-10-12T09:30:00+02:00`,repeat:`FREQ=WEEKLY;BYDAY=MO,TH;COUNT=12`};function p(){let e=a({defaultValues:f});return(0,d.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,d.jsxs)(o,{form:e,children:[(0,d.jsx)(c,{name:`title`,label:`Title`}),(0,d.jsx)(t,{name:`starts`,label:`First meeting`,timeZone:`Europe/Berlin`}),(0,d.jsx)(l,{name:`repeat`,label:`Repeats`,start:`2026-10-12T09:30`,timeZone:`Europe/Berlin`})]}),(0,d.jsx)(m,{form:e})]})}function m({form:e}){let t=s(e,e=>e.serialize(),i);return(0,d.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,d.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,d.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var h=`import { DateTimeField, RecurrenceField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual } from "@kitora/form/core"

// repeat: "FREQ=WEEKLY;BYDAY=MO,TH;COUNT=12" (RFC 5545, no DTSTART — the start is its own field)
type Booking = { title: string; starts?: string; repeat: string }

const defaultValues: Booking = { title: "Team sync", starts: "2026-10-12T09:30:00+02:00", repeat: "FREQ=WEEKLY;BYDAY=MO,TH;COUNT=12" }

export function BookingForm() {
  const form = useForm<Booking>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <TextField name="title" label="Title" />
        <DateTimeField name="starts" label="First meeting" timeZone="Europe/Berlin" />
        {/* previews the next occurrences; helpers: buildRRule · parseRRule · nextOccurrences · describeRRule */}
        <RecurrenceField name="repeat" label="Repeats" start="2026-10-12T09:30" timeZone="Europe/Berlin" />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>n(()=>import(`./recurrence-BRtgtLBe.js`),[]));function g(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e,{title:`Recurrence`,children:`The pickers kit's repeat-rule editor bound to a form field (daily / weekly days / monthly on the start date's day or weekday / yearly, ends never, after N or on a date). It stores one RRULE string and previews the next five occurrence dates.`}),(0,d.jsx)(u,{n:1,title:`Booking with repeats`,blurb:`Start date-time plus a weekly rule with a count.`,code:h,children:(0,d.jsx)(p,{})})]})}export{g as component};