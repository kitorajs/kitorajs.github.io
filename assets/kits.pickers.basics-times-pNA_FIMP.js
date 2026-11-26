import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{a as n,t as r}from"./time-jlVD_Pfs.js";import{o as i,s as a}from"./date-picker-B5u5tMYl.js";import{a as o,g as s,n as c,o as l,p as u,r as d,s as f}from"./zone-DAEYM9Bj.js";import{Bc as p,Cc as m,Ic as h,Uo as g,ti as _}from"./index-9y5uwRd3.js";import{t as v}from"./use-today-BSzaep6Z.js";import{n as y,t as b}from"./timezone-picker-BIxHcmF_.js";import{n as x,t as S}from"./toggle-group-DGN5AhCC.js";import{n as C,r as w,t as T}from"./time-picker-B9Azon23.js";import"./kit-gallery-B-Yr9fP4.js";import{t as E}from"./example-CZLJLtIC.js";import{t as D}from"./-kits.pickers.shared-2m0jwxYJ.js";var O=e(p(),1),k=h();function A(){let e=v();return(0,k.jsx)(j,{today:e},e)}function j({today:e}){let[t,r]=(0,O.useState)(`${e}T10:00`),i=g();return(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-[13px]`,children:[(0,k.jsx)(T,{value:t,onChange:r,step:30,"aria-label":`Publish at`}),(0,k.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[t?n(t,i):`not set`,` · `,(0,k.jsx)(`code`,{children:JSON.stringify(t)})]})]})}var M=`import { useState } from "react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { DateTimePicker, formatIsoDateTime, useToday, type IsoDate, type IsoDateTime } from "@kitora/pickers"

/** One field with date and time segments; the popover holds a calendar and the slot list side by side. */
export function BasicDateTimePicker() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const today = useToday()
  return <Picker key={today} today={today} />
}

function Picker({ today }: { today: IsoDate }) {
  const [value, setValue] = useState<IsoDateTime | null>(\`\${today}T10:00\`)
  // the reader's locale (the build's until hydration, so the server HTML matches)
  const locale = useDefaultLocale()
  return (
    <div className="flex flex-wrap items-center gap-3 text-[13px]">
      <DateTimePicker value={value} onChange={setValue} step={30} aria-label="Publish at" />
      <span className="text-muted-foreground tabular-nums">
        {value ? formatIsoDateTime(value, locale) : "not set"} · <code>{JSON.stringify(value)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>m(()=>import(`./datetime-picker-K_Qt_5rq.js`),[]));function N(){let[e,t]=(0,O.useState)(`09:30:00`);return(0,k.jsxs)(`div`,{className:`flex flex-wrap items-start gap-3 text-[13px]`,children:[(0,k.jsx)(i,{value:e,onChange:t,precision:`second`,secondStep:15,min:`08:00`,max:`18:00`,presets:r,"aria-label":`Start time`}),(0,k.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`value: `,(0,k.jsx)(`code`,{children:JSON.stringify(e)})]})]})}var P=`import { useState } from "react"
import { DEFAULT_TIME_PRESETS, TimeColumns, type IsoTime } from "@kitora/pickers"

/** Hours, minutes and seconds in columns: 15-second steps, office hours only, Now / Noon / End of day above. */
export function BasicTimeColumns() {
  const [value, setValue] = useState<IsoTime | null>("09:30:00")
  return (
    <div className="flex flex-wrap items-start gap-3 text-[13px]">
      <TimeColumns value={value} onChange={setValue} precision="second" secondStep={15} min="08:00" max="18:00" presets={DEFAULT_TIME_PRESETS} aria-label="Start time" />
      <span className="text-muted-foreground tabular-nums">
        value: <code>{JSON.stringify(value)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>m(()=>import(`./time-columns-DEj60I1O.js`),[]));var F=e=>e>=`12:00`&&e<`13:00`;function I(){let[e,t]=(0,O.useState)(null);return(0,k.jsxs)(`div`,{className:`flex flex-wrap items-start gap-3 text-[13px]`,children:[(0,k.jsx)(a,{value:e,onChange:t,step:30,min:`09:00`,max:`17:00`,isTimeDisabled:F,"aria-label":`Appointment time`,className:`h-56`}),(0,k.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`value: `,(0,k.jsx)(`code`,{children:JSON.stringify(e)})]})]})}var L=`import { useState } from "react"
import { TimeList, type IsoTime } from "@kitora/pickers"

/** A day's half-hour slots as one list: office hours only, the lunch hour blocked. */
const lunch = (time: IsoTime) => time >= "12:00" && time < "13:00"

/** The slot list on its own: ↑/↓ move, typeahead jumps ("2" → 2 PM), Enter picks; blocked times are skipped. */
export function BasicTimeList() {
  const [value, setValue] = useState<IsoTime | null>(null)
  return (
    <div className="flex flex-wrap items-start gap-3 text-[13px]">
      <TimeList value={value} onChange={setValue} step={30} min="09:00" max="17:00" isTimeDisabled={lunch} aria-label="Appointment time" className="h-56" />
      <span className="text-muted-foreground tabular-nums">
        value: <code>{JSON.stringify(value)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>m(()=>import(`./time-list-DXgeuKKQ.js`),[]));function R(){let[e,t]=(0,O.useState)(`09:30`),[n,r]=(0,O.useState)(`14:05:30`);return(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-[13px]`,children:[(0,k.jsx)(C,{value:e,onChange:t,"aria-label":`Start time`}),(0,k.jsx)(C,{value:n,onChange:r,seconds:!0,hour12:!1,"aria-label":`Timestamp`}),(0,k.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[(0,k.jsx)(`code`,{children:JSON.stringify(e)}),` · `,(0,k.jsx)(`code`,{children:JSON.stringify(n)})]})]})}var z=`import { useState } from "react"
import { TimeInput, type IsoTime } from "@kitora/pickers"

/** Hour and minute segments, 12- or 24-hour by locale; the value is always 24-hour ISO. Type \`a\` or \`p\` on the period. */
export function BasicTimeField() {
  const [value, setValue] = useState<IsoTime | null>("09:30")
  const [precise, setPrecise] = useState<IsoTime | null>("14:05:30")
  return (
    <div className="flex flex-wrap items-center gap-3 text-[13px]">
      <TimeInput value={value} onChange={setValue} aria-label="Start time" />
      <TimeInput value={precise} onChange={setPrecise} seconds hour12={false} aria-label="Timestamp" />
      <span className="text-muted-foreground tabular-nums">
        <code>{JSON.stringify(value)}</code> · <code>{JSON.stringify(precise)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>m(()=>import(`./time-field-Dcp_TdjI.js`),[]));function B(){let[e,t]=(0,O.useState)(null);return(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-[13px]`,children:[(0,k.jsx)(w,{value:e,onChange:t,step:15,min:`08:00`,max:`18:00`,isTimeDisabled:e=>e>=`12:00`&&e<`13:00`,"aria-label":`Call time`}),(0,k.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`value: `,(0,k.jsx)(`code`,{children:JSON.stringify(e)})]})]})}var V=`import { useState } from "react"
import { TimePicker, type IsoTime } from "@kitora/pickers"

/** The field plus a list of 15-minute slots between 08:00 and 18:00; lunch is blocked. */
export function BasicTimePicker() {
  const [value, setValue] = useState<IsoTime | null>(null)
  return (
    <div className="flex flex-wrap items-center gap-3 text-[13px]">
      <TimePicker value={value} onChange={setValue} step={15} min="08:00" max="18:00" isTimeDisabled={(t) => t >= "12:00" && t < "13:00"} aria-label="Call time" />
      <span className="text-muted-foreground tabular-nums">value: <code>{JSON.stringify(value)}</code></span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>m(()=>import(`./time-picker-CYWsbFXJ.js`),[]));function H(){let[e,t]=(0,O.useState)(`Europe/Berlin`);return(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-[13px]`,children:[(0,k.jsx)(y,{value:e,onChange:t}),(0,k.jsxs)(`span`,{className:`text-muted-foreground`,children:[`value: `,(0,k.jsx)(`code`,{className:`font-mono`,children:JSON.stringify(e)})]})]})}var U=`import { useState } from "react"
import { TimeZonePicker } from "@kitora/pickers"

/** Pick an IANA zone: search by city, region, abbreviation or offset; the value is the zone id. */
export function BasicTimeZone() {
  const [zone, setZone] = useState("Europe/Berlin")
  return (
    <div className="flex flex-wrap items-center gap-3 text-[13px]">
      <TimeZonePicker value={zone} onChange={setZone} />
      <span className="text-muted-foreground">
        value: <code className="font-mono">{JSON.stringify(zone)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>m(()=>import(`./timezone-DiLXH6x4.js`),[]));var W=[`Europe/London`,`Europe/Berlin`,`America/New_York`,`America/Los_Angeles`,`Asia/Kolkata`,`Asia/Tokyo`,`Australia/Sydney`];function G(){let[e,t]=(0,O.useState)(`Asia/Kolkata`);return(0,k.jsxs)(`div`,{className:`flex w-72 flex-col gap-2 text-[13px]`,children:[(0,k.jsx)(`div`,{className:`rounded-md border`,children:(0,k.jsx)(b,{value:e,onSelect:t,zones:W,labels:{search:`Filter team zones`},listClassName:`max-h-48`})}),(0,k.jsxs)(`span`,{className:`text-muted-foreground`,children:[`value: `,(0,k.jsx)(`code`,{className:`font-mono`,children:JSON.stringify(e)})]})]})}var K=`import { useState } from "react"
import { TimeZoneList } from "@kitora/pickers"

/** The searchable list inside TimeZonePicker, inline and limited to a few zones. Type to filter, arrows move, Enter picks. */
const ZONES = ["Europe/London", "Europe/Berlin", "America/New_York", "America/Los_Angeles", "Asia/Kolkata", "Asia/Tokyo", "Australia/Sydney"] as const

export function BasicTimeZoneList() {
  const [zone, setZone] = useState("Asia/Kolkata")
  return (
    <div className="flex w-72 flex-col gap-2 text-[13px]">
      <div className="rounded-md border">
        <TimeZoneList value={zone} onSelect={setZone} zones={ZONES} labels={{ search: "Filter team zones" }} listClassName="max-h-48" />
      </div>
      <span className="text-muted-foreground">
        value: <code className="font-mono">{JSON.stringify(zone)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>m(()=>import(`./timezone-list-CmeGHGyL.js`),[]));var q=`America/New_York`,J=`2026-03-08T02:30`,Y=`2026-11-01T01:30`,X={exact:`happens once`,gap:`is skipped by the spring-forward gap`,overlap:`happens twice (fall back)`};function Z(){let[e,t]=(0,O.useState)(Y),[n,r]=(0,O.useState)(q),[i,a]=(0,O.useState)(`compatible`),p=e?u(e)?.wall:void 0,m=null;if(p)try{let e=s(p,n,i);m={instant:o(e),zoned:l(e,n)}}catch(e){if(!(e instanceof d))throw e;m={error:e.code}}let h=e=>{r(q),t(e)};return(0,k.jsxs)(`div`,{className:`flex flex-col gap-3 text-[13px]`,children:[(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,k.jsx)(T,{value:e,onChange:t,"aria-label":`Wall time`}),(0,k.jsx)(y,{value:n,onChange:r})]}),(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,k.jsx)(_,{size:`sm`,variant:`outline`,onClick:()=>h(J),children:`New York gap`}),(0,k.jsx)(_,{size:`sm`,variant:`outline`,onClick:()=>h(Y),children:`New York overlap`}),(0,k.jsx)(S,{value:[i],onValueChange:e=>{let t=c.find(t=>t===e[0]);t&&a(t)},variant:`outline`,size:`sm`,"aria-label":`Disambiguation`,children:c.map(e=>(0,k.jsx)(x,{value:e,children:e},e))})]}),p&&m?(0,k.jsxs)(`dl`,{className:`grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1`,children:[(0,k.jsx)(`dt`,{className:`text-muted-foreground`,children:`wall time`}),(0,k.jsx)(`dd`,{"data-testid":`zone-dst-kind`,children:X[f(p,n).kind]}),`error`in m?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`dt`,{className:`text-muted-foreground`,children:`reject`}),(0,k.jsx)(`dd`,{children:(0,k.jsx)(`code`,{"data-testid":`zone-dst-error`,children:m.error})})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`dt`,{className:`text-muted-foreground`,children:`instant`}),(0,k.jsx)(`dd`,{className:`break-all`,children:(0,k.jsx)(`code`,{"data-testid":`zone-dst-instant`,children:m.instant})}),(0,k.jsx)(`dt`,{className:`text-muted-foreground`,children:`RFC 9557`}),(0,k.jsx)(`dd`,{className:`break-all`,children:(0,k.jsx)(`code`,{"data-testid":`zone-dst-zoned`,children:m.zoned})})]})]}):(0,k.jsx)(`p`,{className:`text-muted-foreground`,children:`Pick a date and a time.`})]})}var Q=`import { useState } from "react"
import { DateTimePicker, DISAMBIGUATIONS, formatInstant, formatZoned, inspectWallTime, parseDateTime, TimeZonePicker, wallClockToEpoch, ZoneDisambiguationError, type Disambiguation, type IsoDateTime } from "@kitora/pickers"
import { Button } from "@kitora/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"

/** New York's two 2026 changes: 02:30 on 8 March never happens, 01:30 on 1 November happens twice. */
const NEW_YORK = "America/New_York"
const SPRING_GAP: IsoDateTime = "2026-03-08T02:30"
const FALL_OVERLAP: IsoDateTime = "2026-11-01T01:30"

const KIND_TEXT = { exact: "happens once", gap: "is skipped by the spring-forward gap", overlap: "happens twice (fall back)" } as const

/** A wall time plus a zone becomes one instant; \`disambiguation\` decides inside a DST gap or overlap. */
export function BasicZoneDst() {
  const [value, setValue] = useState<IsoDateTime | null>(FALL_OVERLAP)
  const [zone, setZone] = useState(NEW_YORK)
  const [rule, setRule] = useState<Disambiguation>("compatible")
  const wall = value ? parseDateTime(value)?.wall : undefined
  let result: { instant: string; zoned: string } | { error: string } | null = null
  if (wall) {
    try {
      const epoch = wallClockToEpoch(wall, zone, rule)
      result = { instant: formatInstant(epoch), zoned: formatZoned(epoch, zone) }
    } catch (error) {
      if (!(error instanceof ZoneDisambiguationError)) throw error
      result = { error: error.code }
    }
  }
  const pick = (next: IsoDateTime) => {
    setZone(NEW_YORK)
    setValue(next)
  }
  return (
    <div className="flex flex-col gap-3 text-[13px]">
      <div className="flex flex-wrap items-center gap-3">
        <DateTimePicker value={value} onChange={setValue} aria-label="Wall time" />
        <TimeZonePicker value={zone} onChange={setZone} />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => pick(SPRING_GAP)}>
          New York gap
        </Button>
        <Button size="sm" variant="outline" onClick={() => pick(FALL_OVERLAP)}>
          New York overlap
        </Button>
        <ToggleGroup
          value={[rule]}
          onValueChange={(next) => {
            const picked = DISAMBIGUATIONS.find((d) => d === next[0])
            if (picked) setRule(picked)
          }}
          variant="outline"
          size="sm"
          aria-label="Disambiguation"
        >
          {DISAMBIGUATIONS.map((d) => (
            <ToggleGroupItem key={d} value={d}>
              {d}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      {wall && result ? (
        <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1">
          <dt className="text-muted-foreground">wall time</dt>
          <dd data-testid="zone-dst-kind">{KIND_TEXT[inspectWallTime(wall, zone).kind]}</dd>
          {"error" in result ? (
            <>
              <dt className="text-muted-foreground">reject</dt>
              <dd>
                <code data-testid="zone-dst-error">{result.error}</code>
              </dd>
            </>
          ) : (
            <>
              <dt className="text-muted-foreground">instant</dt>
              <dd className="break-all">
                <code data-testid="zone-dst-instant">{result.instant}</code>
              </dd>
              <dt className="text-muted-foreground">RFC 9557</dt>
              <dd className="break-all">
                <code data-testid="zone-dst-zoned">{result.zoned}</code>
              </dd>
            </>
          )}
        </dl>
      ) : (
        <p className="text-muted-foreground">Pick a date and a time.</p>
      )}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>m(()=>import(`./zone-dst-Dq7UnGS-.js`),[]));function $(){return(0,k.jsxs)(`div`,{children:[(0,k.jsx)(t,{title:`Basics: times`,children:"Times are 24-hour ISO strings (`14:30`) and date-times join the two (`2026-10-15T14:30`), zone-free; the zone is its own value. The locale decides whether the field shows 2:30 PM or 14:30."}),(0,k.jsx)(E,{n:1,title:`A time field`,blurb:`Typed hour, minute and optional seconds; ↑/↓ steps, PageUp/PageDown jumps 15 minutes.`,code:z,children:(0,k.jsx)(D,{testId:`basic-time-field`,children:(0,k.jsx)(R,{})})}),(0,k.jsx)(E,{n:2,title:`A time picker`,blurb:`The field plus a slot list with min, max, a step and blocked slots.`,code:V,children:(0,k.jsx)(D,{testId:`basic-time-picker`,children:(0,k.jsx)(B,{})})}),(0,k.jsx)(E,{n:3,title:`Date and time`,blurb:`One field, one popover: the calendar and the slots side by side.`,code:M,children:(0,k.jsx)(D,{testId:`basic-datetime-picker`,children:(0,k.jsx)(A,{})})}),(0,k.jsx)(E,{n:4,title:`Time columns`,blurb:"`TimeColumns`: a listbox per unit over the same `useTimePanel` as the slot list. ↑/↓ and typeahead in a column, ← / → between columns; out-of-hours times are disabled.",code:P,children:(0,k.jsx)(D,{testId:`basic-time-columns`,children:(0,k.jsx)(N,{})})}),(0,k.jsx)(E,{n:5,title:`A time list`,blurb:"`TimeList`, the slot list the time picker opens, on its own: half-hour steps, office hours, the lunch hour blocked.",code:L,children:(0,k.jsx)(D,{testId:`basic-time-list`,children:(0,k.jsx)(I,{})})}),(0,k.jsx)(E,{n:6,title:`A time zone`,blurb:`Search by city, region, abbreviation or offset; the detected zone comes first.`,code:U,children:(0,k.jsx)(D,{testId:`basic-timezone`,children:(0,k.jsx)(H,{})})}),(0,k.jsx)(E,{n:7,title:`A time zone list`,blurb:"`TimeZoneList`, the searchable list inside the picker, inline over a short list of zones.",code:K,children:(0,k.jsx)(D,{testId:`basic-timezone-list`,children:(0,k.jsx)(G,{})})}),(0,k.jsx)(E,{n:8,title:`A wall time in a zone, across DST`,blurb:"`wallClockToEpoch` turns a date, a time and a zone into one instant. A time the spring-forward gap skips moves forward; a repeated fall-back time takes the earlier instant, unless `disambiguation` says `earlier`, `later` or `reject`.",code:Q,children:(0,k.jsx)(D,{testId:`basic-zone-dst`,children:(0,k.jsx)(Z,{})})})]})}export{$ as component};