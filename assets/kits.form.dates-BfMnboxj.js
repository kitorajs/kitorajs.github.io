import{s as e}from"./kit-docs-BUovISd0.js";import{n as t,r as n,t as r}from"./time-D3Vl-hzh.js";import{Cc as i,Ic as a,Wo as o}from"./index-B9ukmIN1.js";import{W as s}from"./messages-C_IMdr_-.js";import{A as c,c as l,g as u,h as d}from"./field-config-17kME8Vl.js";import{n as f,t as p}from"./date-DEJ6F96s.js";import{t as m}from"./example-BGnSQG2Y.js";import"./demos-Ds1NfSaA.js";var h=a(),g={arrival:``};function _(){let e=c({defaultValues:g});return(0,h.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,h.jsx)(l,{form:e,children:(0,h.jsx)(p,{name:`arrival`,label:`Arrival`,placeholder:`Pick a date`})}),(0,h.jsx)(v,{form:e})]})}function v({form:e}){let{payload:t,dirty:n,status:r,issues:i}=d(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,h.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,h.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,h.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,h.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,h.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,h.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,h.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var y=`import { DateField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

// stores a canonical ISO string: "2026-06-17"
type Booking = { arrival: string }

const defaultValues: Booking = { arrival: "" }

export function BookingForm() {
  const form = useForm<Booking>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <DateField name="arrival" label="Arrival" placeholder="Pick a date" />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>i(()=>import(`./single-DvQWRo6A.js`),[]));var b={stay:{}};function x(){let e=c({defaultValues:b});return(0,h.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,h.jsx)(l,{form:e,children:(0,h.jsx)(f,{name:`stay`,label:`Stay`,placeholder:`Pick a range`})}),(0,h.jsx)(S,{form:e})]})}function S({form:e}){let{payload:t,dirty:n,status:r,issues:i}=d(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,h.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,h.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,h.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,h.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,h.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,h.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,h.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var C=`import { DateRangeField, type DateRangeValue } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

// stores { from, to } as ISO strings: { from: "2026-06-17", to: "2026-06-20" }
type Stay = { stay: DateRangeValue }

const defaultValues: Stay = { stay: {} }

export function StayForm() {
  const form = useForm<Stay>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form}>
        <DateRangeField name="stay" label="Stay" placeholder="Pick a range" />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>i(()=>import(`./range-ToJ2xN0A.js`),[]));function w(){let e=o();return(0,h.jsx)(T,{zone:e},e)}function T({zone:e}){let i=c({defaultValues:{zone:e,starts:``,from:`09:00`,to:`17:00`}}),a=u(i,`zone`);return(0,h.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,h.jsxs)(l,{form:i,layout:`none`,className:`flex flex-col gap-4`,children:[(0,h.jsx)(n,{name:`zone`,label:`Time zone`}),(0,h.jsx)(r,{name:`starts`,label:`Starts`,timeZone:a||`UTC`,description:`The instant with its zone (RFC 9557)`}),(0,h.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,h.jsx)(t,{name:`from`,label:`Available from`,step:30,max:`12:00`}),(0,h.jsx)(t,{name:`to`,label:`Available until`,step:30,min:`12:00`})]})]}),(0,h.jsx)(E,{form:i})]})}function E({form:e}){let{payload:t,dirty:n,status:r,issues:i}=d(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),s);return(0,h.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,h.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,h.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,h.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,h.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,h.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,h.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var D=`import { useDefaultTimeZone } from "@kitora/primitives/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { DateTimeField, TimeField, TimezoneField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot, useFormValue } from "@kitora/form/react"

type Meeting = { zone: string; starts: string; from: string; to: string }

export function MeetingForm() {
  // the reader's zone as the default, keyed on it: the build's until hydration, then the visitor's
  const zone = useDefaultTimeZone()
  return <MeetingFormBody key={zone} zone={zone} />
}

function MeetingFormBody({ zone: defaultZone }: { zone: string }) {
  const form = useForm<Meeting>({ defaultValues: { zone: defaultZone, starts: "", from: "09:00", to: "17:00" } })
  // the zone field's live value; re-renders only when that path changes
  const zone = useFormValue(form, "zone")
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} layout="none" className="flex flex-col gap-4">
        {/* "Europe/Berlin" */}
        <TimezoneField name="zone" label="Time zone" />
        {/* the DatePicker's zoned value (RFC 9557): "2026-07-01T09:30:00+02:00[Europe/Berlin]"; valueKind="instant" stores UTC */}
        <DateTimeField name="starts" label="Starts" timeZone={zone || "UTC"} description="The instant with its zone (RFC 9557)" />
        {/* "09:00" — min/max are a timeRange rule */}
        <div className="grid grid-cols-2 gap-3">
          <TimeField name="from" label="Available from" step={30} max="12:00" />
          <TimeField name="to" label="Available until" step={30} min="12:00" />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>i(()=>import(`./meeting-BBc8bcmG.js`),[]));function O(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(e,{title:`Date & date-range`,children:[`Popover + calendar fields that store a canonical ISO string (single) or `,(0,h.jsx)(`code`,{children:`{ from, to }`}),` ISO strings (range), plus time, zoned date-time and time-zone fields — the display ⇄ canonical seam lives at the field edge, so the payload is always serializable. Three recipes:`]}),(0,h.jsx)(m,{n:1,title:`Single date`,blurb:`A calendar popover that serializes to one ISO date string.`,code:y,children:(0,h.jsx)(_,{})}),(0,h.jsx)(m,{n:2,title:`Date range`,blurb:`A two-month range picker that serializes to { from, to } ISO strings.`,code:C,children:(0,h.jsx)(x,{})}),(0,h.jsx)(m,{n:3,title:`Time, date-time and zone`,blurb:`A meeting: the start is a zoned instant whose zone comes from the time-zone field; availability is a pair of time slots.`,code:D,children:(0,h.jsx)(w,{})})]})}export{O as component};