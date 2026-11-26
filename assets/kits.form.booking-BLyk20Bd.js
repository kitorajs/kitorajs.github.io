import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n,ni as r}from"./index-q72zUtm9.js";import{W as i}from"./messages-Bsb0m0Hq.js";import{A as a,Y as o,c as s,h as c}from"./field-config-DXiPz8Cg.js";import{i as l,n as u,r as d}from"./fields-CoJCsIMd.js";import{t as f}from"./async-select-D1BG_XgQ.js";import{t as p}from"./date-BYkGn-ht.js";import{t as m}from"./recurrence-kW-84ggG.js";import{t as h}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var g=n(),_={date:``,party:2,slot:``,seating:`indoor`,repeats:!1},v=[{value:`indoor`,label:`Indoor`},{value:`patio`,label:`Patio`}],{c:y,v:b}=o(),x={async slots(e){return e.endsWith(`0`)?[`17:00`,`19:30`]:[`18:00`,`18:30`,`20:00`]},async book(e){console.log(`booked`,e)}};function S(){let e=a({defaultValues:_});return(0,g.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,g.jsxs)(s,{form:e,onSubmit:x.book,children:[(0,g.jsx)(p,{name:`date`,label:`Date`,placeholder:`Pick a date`,required:!0}),(0,g.jsx)(u,{name:`party`,label:`Party size`,required:!0,rules:[b.min(1),b.max(12),b.integer()]}),(0,g.jsx)(f,{name:`slot`,label:`Time slot (availability)`,dependsOn:[`date`],loadOptions:async({parent:e,signal:t})=>{if(typeof e!=`string`||!e)return[];let n=await x.slots(e);return t.aborted?[]:n.map(e=>({value:e,label:e}))},placeholder:`Pick a date first…`,required:!0}),(0,g.jsx)(d,{name:`seating`,label:`Seating`,options:v}),(0,g.jsx)(l,{name:`repeats`,label:`Repeat this booking`}),(0,g.jsx)(m,{name:`rule`,label:`Repeats`,visibleIf:y.eq(`repeats`,!0)}),(0,g.jsx)(s.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Book`})]}),(0,g.jsx)(C,{form:e})]})}function C({form:e}){let t=c(e,e=>e.serialize(),i);return(0,g.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,g.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,g.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var w=`import { buttonVariants } from "@kitora/ui/button"
import { deepEqual, kit } from "@kitora/form/core"
import { AsyncSelectField, DateField, NumberField, RecurrenceField, SelectField, SwitchField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Booking = { date: string; party: number; slot: string; seating: string; repeats: boolean; rule?: string }

const defaultValues: Booking = { date: "", party: 2, slot: "", seating: "indoor", repeats: false }
const SEATING = [{ value: "indoor", label: "Indoor" }, { value: "patio", label: "Patio" }]
const { c, v } = kit<Booking>()

// stub: replace with your API (GET /availability?date=…)
const api = {
  async slots(date: string): Promise<string[]> {
    return date.endsWith("0") ? ["17:00", "19:30"] : ["18:00", "18:30", "20:00"]
  },
  async book(values: Booking): Promise<void> {
    console.log("booked", values)
  },
}

export function BookingForm() {
  const form = useForm<Booking>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.book}>
        <DateField name="date" label="Date" placeholder="Pick a date" required />
        <NumberField name="party" label="Party size" required rules={[v.min(1), v.max(12), v.integer()]} />
        <AsyncSelectField
          name="slot"
          label="Time slot (availability)"
          // 'date' is the sibling field above: a new date cancels the load and clears the stale slot
          dependsOn={["date"]}
          loadOptions={async ({ parent, signal }) => {
            if (typeof parent !== "string" || !parent) return [] // parent = the current date value
            const times = await api.slots(parent)
            return signal.aborted ? [] : times.map((t) => ({ value: t, label: t }))
          }}
          placeholder="Pick a date first…"
          required
        />
        <SelectField name="seating" label="Seating" options={SEATING} />
        <SwitchField name="repeats" label="Repeat this booking" />
        {/* 'repeats' is the sibling switch above; the value is an RRULE string */}
        <RecurrenceField name="rule" label="Repeats" visibleIf={c.eq("repeats", true)} />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Book</Form.Submit>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>t(()=>import(`./booking-BTX30BvV.js`),[]));function T(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(e,{title:`Booking`,children:`Pick a date → available time slots load (async, dependent on the date, cancellable + cleared when the date changes). Party size, seating and an optional weekly repeat (an RRULE) round it out.`}),(0,g.jsx)(h,{n:1,title:`Table booking`,blurb:`Pick a date to load its slots (dates ending in 0 are busy); change the date and the stale slot clears.`,code:w,children:(0,g.jsx)(S,{})})]})}export{T as component};