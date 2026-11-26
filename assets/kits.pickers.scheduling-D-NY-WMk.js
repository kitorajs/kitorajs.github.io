import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{t as n}from"./input-DQo0XDsx.js";import{A as r,S as i}from"./time-jlVD_Pfs.js";import{n as a}from"./date-picker-D5TPBCy-.js";import{_ as o,l as s}from"./zone-DAEYM9Bj.js";import{h as c}from"./slots-BdYF94XK.js";import{a as l,d as u,p as d,u as f}from"./recurrence-Ddw7AvGK.js";import{a as p,d as m,f as h}from"./timezone-B3euW_vR.js";import{Bc as g,Cc as _,Ic as v,Uo as y,ti as b}from"./index-B9ukmIN1.js";import{t as x}from"./use-today-QYcwC5T-.js";import{t as S}from"./slot-picker-B_4xK7fe.js";import{n as C}from"./timezone-picker-BphDx_Y3.js";import{t as w}from"./recurrence-editor-Hmah_m1F.js";import{t as T}from"./select-IOvfzDtl.js";import"./kit-gallery-Bph7isB2.js";import{t as E}from"./example-BGnSQG2Y.js";import{t as D}from"./-kits.pickers.shared-2GQmov_7.js";var O=e(g(),1),k=v(),A={timeZone:`America/New_York`,weekly:c({1:[[`09:00`,`17:00`]],2:[[`09:00`,`17:00`]],3:[[`09:00`,`12:00`],[`13:00`,`17:00`]],4:[[`09:00`,`17:00`]],5:[[`09:00`,`13:00`]]})},j={load:e=>new Promise(t=>{let n=[];for(let t=i(s(e.start,A.timeZone),-1);o(t,0,A.timeZone)<e.end;t=i(t,1)){let e=Number(t.slice(8))%4;n.push({start:o(t,(10+e)*60,A.timeZone),end:o(t,(11+e)*60,A.timeZone)})}setTimeout(()=>t({availability:A,busy:n}),300)})};function M(){let[e,t]=(0,O.useState)(null);return(0,k.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,k.jsx)(S,{availability:j,durations:[15,30,60],defaultDuration:30,rules:{bufferMinutes:10,minNoticeMinutes:240,horizonDays:60,maxPerDay:6},hourCycle:`toggle`,groupByDayPart:!0,value:e,onChange:t,"aria-label":`Book an intro call`,className:`max-w-2xl`}),(0,k.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Value: `,(0,k.jsx)(`code`,{className:`break-all`,children:e?`${e.start} → ${e.end}`:`none`})]})]})}var N=`import { useState } from "react"
import { SlotPicker, weeklyHours, zonedDateTimeToEpoch, addDays, isoDateAt, type Availability, type Interval, type SlotAvailabilityAdapter, type SlotValue } from "@kitora/pickers"

/** The host works weekdays in New York; the invitee sees the slots in their own zone. */
const HOURS: Availability = {
  timeZone: "America/New_York",
  weekly: weeklyHours({ 1: [["09:00", "17:00"]], 2: [["09:00", "17:00"]], 3: [["09:00", "12:00"], ["13:00", "17:00"]], 4: [["09:00", "17:00"]], 5: [["09:00", "13:00"]] }),
}

/** A fake calendar service: two meetings a day already in the host's diary, answered after a short delay. */
const availability: SlotAvailabilityAdapter = {
  load: (range) =>
    new Promise((resolve) => {
      const busy: Interval[] = []
      for (let d = addDays(isoDateAt(range.start, HOURS.timeZone), -1); zonedDateTimeToEpoch(d, 0, HOURS.timeZone) < range.end; d = addDays(d, 1)) {
        const seed = Number(d.slice(8)) % 4
        busy.push({ start: zonedDateTimeToEpoch(d, (10 + seed) * 60, HOURS.timeZone), end: zonedDateTimeToEpoch(d, (11 + seed) * 60, HOURS.timeZone) })
      }
      setTimeout(() => resolve({ availability: HOURS, busy }), 300)
    }),
}

/** A Calendly-style page: three lengths, 10 minutes kept free around meetings, four hours' notice, 60 days ahead, the slots grouped by part of day in your zone, a 12 / 24 h switch. */
export function SchedulingSlots() {
  const [slot, setSlot] = useState<SlotValue | null>(null)
  return (
    <div className="flex flex-col gap-3">
      <SlotPicker
        availability={availability}
        durations={[15, 30, 60]}
        defaultDuration={30}
        rules={{ bufferMinutes: 10, minNoticeMinutes: 240, horizonDays: 60, maxPerDay: 6 }}
        hourCycle="toggle"
        groupByDayPart
        value={slot}
        onChange={setSlot}
        aria-label="Book an intro call"
        className="max-w-2xl"
      />
      <p className="text-[12px] text-muted-foreground">
        Value: <code className="break-all">{slot ? \`\${slot.start} → \${slot.end}\` : "none"}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>_(()=>import(`./scheduling-slots-zE7IDje5.js`),[]));var P={timeZone:`Europe/London`,seats:4,weekly:c({1:[[`09:00`,`12:00`]],2:[[`16:00`,`19:00`]],3:[[`09:00`,`12:00`]],4:[[`16:00`,`19:00`]],5:[[`09:00`,`11:00`]]})},F={load:e=>{let t=[];for(let n=e.start;n<e.end;n+=36e5){let e=Math.floor(n/36e5)%5;for(let r=0;r<e;r++)t.push({start:n,end:n+36e5})}return Promise.resolve({availability:P,busy:[],bookings:t})}};function I(){return(0,k.jsx)(S,{layout:`week`,availability:F,duration:60,rules:{step:60},capacity:!0,timeZone:`Europe/London`,zonePicker:`locked`,hourCycle:24,"aria-label":`Book a workshop seat`})}var L=`import { SlotPicker, weeklyHours, type Availability, type Interval, type SlotAvailabilityAdapter } from "@kitora/pickers"

/** A London workshop: four seats per session, mornings and late afternoons on weekdays. */
const SESSIONS: Availability = {
  timeZone: "Europe/London",
  seats: 4,
  weekly: weeklyHours({ 1: [["09:00", "12:00"]], 2: [["16:00", "19:00"]], 3: [["09:00", "12:00"]], 4: [["16:00", "19:00"]], 5: [["09:00", "11:00"]] }),
}

/** The seats already taken (a made-up but stable pattern): a booking at a session's start takes one of its four seats, and a session with all four gone is not offered. */
const availability: SlotAvailabilityAdapter = {
  load: (range) => {
    const bookings: Interval[] = []
    for (let t = range.start; t < range.end; t += 3_600_000) {
      const seats = Math.floor(t / 3_600_000) % 5
      for (let i = 0; i < seats; i++) bookings.push({ start: t, end: t + 3_600_000 })
    }
    return Promise.resolve({ availability: SESSIONS, busy: [], bookings })
  },
}

/** Seven day columns with the seats left on each session; the zone is the workshop's, locked; ← → move between days, ↑ ↓ within one. */
export function SchedulingWeek() {
  return <SlotPicker layout="week" availability={availability} duration={60} rules={{ step: 60 }} capacity timeZone="Europe/London" zonePicker="locked" hourCycle={24} aria-label="Book a workshop seat" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>_(()=>import(`./scheduling-week-DTL3LS5v.js`),[]));var R=10;function z(){let e=y(),[t,i]=(0,O.useState)(`Design review`),[o,s]=(0,O.useState)(`2026-10-30`),[c,p]=(0,O.useState)(`FREQ=MONTHLY;BYDAY=-1FR;COUNT=6`),[m,h]=(0,O.useState)(null),g=c?u(c,l(o)):null,_=g?f(g,o,R):[o];return(0,k.jsxs)(`div`,{className:`grid max-w-3xl grid-cols-1 gap-3 text-[13px] md:grid-cols-[1fr_14rem]`,children:[(0,k.jsxs)(`form`,{className:`flex flex-col gap-2.5 rounded-lg border border-border bg-card p-3 shadow-sm`,onSubmit:e=>{e.preventDefault(),h(`${t} · DTSTART;VALUE=DATE:${o.replaceAll(`-`,``)}${c?` · RRULE:${c}`:``}`)},children:[(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,k.jsx)(`label`,{htmlFor:`event-title`,className:`w-20 shrink-0 text-muted-foreground`,children:`Title`}),(0,k.jsx)(n,{id:`event-title`,value:t,onChange:e=>i(e.currentTarget.value),className:`h-7 w-64 text-[13px] md:text-[13px]`})]}),(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,k.jsx)(`span`,{className:`w-20 shrink-0 text-muted-foreground`,children:`Starts`}),(0,k.jsx)(a,{value:o,onChange:e=>e&&s(e),"aria-label":`Start date`})]}),(0,k.jsx)(w,{value:c,onChange:p,start:o,previewCount:0,renderFrequencySelect:e=>(0,k.jsx)(T,{id:e.id,"aria-labelledby":e.labelId,items:e.options.map(e=>({id:e.value,label:e.label})),value:e.value,onChange:t=>{t!==null&&e.onChange(t)},disabled:e.disabled,className:`h-7 w-40 text-[13px]`})}),(0,k.jsxs)(`div`,{className:`flex items-center justify-between gap-2 border-t border-border pt-2`,children:[(0,k.jsx)(`code`,{className:`truncate font-mono text-xs text-muted-foreground`,title:c||`(no RRULE)`,children:c?`RRULE:${c}`:`(no RRULE)`}),(0,k.jsx)(b,{type:`submit`,size:`sm`,children:`Save event`})]}),m?(0,k.jsxs)(`p`,{role:`status`,className:`text-xs text-muted-foreground`,children:[`saved: `,(0,k.jsx)(`code`,{className:`font-mono`,children:m})]}):null]}),(0,k.jsxs)(`aside`,{className:`rounded-lg border border-border bg-card p-3`,"aria-label":`Upcoming`,children:[(0,k.jsx)(`h3`,{className:`mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase`,children:`Upcoming`}),(0,k.jsx)(`p`,{className:`mb-2 text-xs`,children:g?d(g,o,e):`Once`}),(0,k.jsx)(`ol`,{className:`flex flex-col gap-0.5 tabular-nums`,children:_.map((t,n)=>(0,k.jsxs)(`li`,{className:`flex justify-between gap-2`,children:[(0,k.jsxs)(`span`,{className:`text-muted-foreground`,children:[`#`,n+1]}),(0,k.jsx)(`time`,{dateTime:t,children:r(t,e,{weekday:`short`,day:`numeric`,month:`short`,year:`numeric`})})]},t))})]})]})}var B=`import { useState } from "react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { DatePicker, defaultRule, formatIsoDate, occurrences, parseRRule, RecurrenceEditor, summarizeRule, type IsoDate } from "@kitora/pickers"
import { Select } from "@kitora/collections"

// Event repeat: an event card with a title, a start date and a repeat rule. The rule follows the start date, the summary and the next ten dates update live, and the stored RRULE is shown as it would be saved.

/** Upcoming dates listed under the card. */
const UPCOMING = 10

export function RecurrenceEventRepeat() {
  // the reader's locale (the build's until hydration, so the server HTML matches)
  const locale = useDefaultLocale()
  const [title, setTitle] = useState("Design review")
  const [start, setStart] = useState<IsoDate>("2026-10-30")
  const [rule, setRule] = useState("FREQ=MONTHLY;BYDAY=-1FR;COUNT=6")
  const [saved, setSaved] = useState<string | null>(null)
  const parsed = rule ? parseRRule(rule, defaultRule(start)) : null
  const dates = parsed ? occurrences(parsed, start, UPCOMING) : [start]

  return (
    <div className="grid max-w-3xl grid-cols-1 gap-3 text-[13px] md:grid-cols-[1fr_14rem]">
      <form
        className="flex flex-col gap-2.5 rounded-lg border border-border bg-card p-3 shadow-sm"
        onSubmit={(e) => {
          e.preventDefault()
          setSaved(\`\${title} · DTSTART;VALUE=DATE:\${start.replaceAll("-", "")}\${rule ? \` · RRULE:\${rule}\` : ""}\`)
        }}
      >
        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="event-title" className="w-20 shrink-0 text-muted-foreground">
            Title
          </label>
          <Input id="event-title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} className="h-7 w-64 text-[13px] md:text-[13px]" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-20 shrink-0 text-muted-foreground">Starts</span>
          <DatePicker value={start} onChange={(v) => v && setStart(v)} aria-label="Start date" />
        </div>
        <RecurrenceEditor value={rule} onChange={setRule} start={start} previewCount={0} renderFrequencySelect={(p) => (
          <Select id={p.id} aria-labelledby={p.labelId} items={p.options.map((o) => ({ id: o.value, label: o.label }))} value={p.value} onChange={(v) => { if (v !== null) p.onChange(v) }} disabled={p.disabled} className="h-7 w-40 text-[13px]" />
        )} />
        <div className="flex items-center justify-between gap-2 border-t border-border pt-2">
          <code className="truncate font-mono text-xs text-muted-foreground" title={rule || "(no RRULE)"}>
            {rule ? \`RRULE:\${rule}\` : "(no RRULE)"}
          </code>
          <Button type="submit" size="sm">
            Save event
          </Button>
        </div>
        {saved ? (
          <p role="status" className="text-xs text-muted-foreground">
            saved: <code className="font-mono">{saved}</code>
          </p>
        ) : null}
      </form>
      <aside className="rounded-lg border border-border bg-card p-3" aria-label="Upcoming">
        <h3 className="mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">Upcoming</h3>
        <p className="mb-2 text-xs">{parsed ? summarizeRule(parsed, start, locale) : "Once"}</p>
        <ol className="flex flex-col gap-0.5 tabular-nums">
          {dates.map((d, i) => (
            <li key={d} className="flex justify-between gap-2">
              <span className="text-muted-foreground">#{i + 1}</span>
              <time dateTime={d}>{formatIsoDate(d, locale, { weekday: "short", day: "numeric", month: "short", year: "numeric" })}</time>
            </li>
          ))}
        </ol>
      </aside>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>_(()=>import(`./recurrence-event-DzJIOAMH.js`),[]));var V=9,H=18,U=[{id:1,zone:`America/New_York`},{id:2,zone:`Asia/Kolkata`},{id:3,zone:`Australia/Sydney`}];function W(e,t){let n=new Intl.DateTimeFormat(`en-CA`,{timeZone:t,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,hourCycle:`h23`}).formatToParts(e),r=e=>n.find(t=>t.type===e)?.value??``;return{date:`${r(`year`)}-${r(`month`)}-${r(`day`)}`,hour:Number(r(`hour`))}}function G(){let e=x();return(0,k.jsx)(K,{today:e},e)}function K({today:e}){let t=y(),[r,i]=(0,O.useState)(`Europe/London`),[o,s]=(0,O.useState)(e),[c,l]=(0,O.useState)(`15:00`),[u,d]=(0,O.useState)(U),[f,g]=(0,O.useState)(U.length+1),[_=0,v=0]=c.split(`:`).map(e=>Number.isFinite(Number(e))?Number(e):0),x=h(o,_,v,r),S=[{id:0,zone:r},...u];return(0,k.jsxs)(`div`,{className:`flex max-w-3xl flex-col gap-3 text-[13px]`,children:[(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:`Meeting at`}),(0,k.jsx)(a,{value:o,onChange:e=>e&&s(e),"aria-label":`Meeting date`}),(0,k.jsx)(n,{type:`time`,"aria-label":`Meeting time`,value:c,onChange:e=>l(e.currentTarget.value||`00:00`),className:`h-7 w-28 text-[13px] tabular-nums md:text-[13px]`}),(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:`in`}),(0,k.jsx)(C,{value:r,onChange:i,"aria-label":`Host time zone`})]}),(0,k.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-border`,children:(0,k.jsxs)(`table`,{className:`w-full text-start`,children:[(0,k.jsx)(`thead`,{className:`bg-muted/40 text-xs text-muted-foreground`,children:(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`th`,{className:`px-2 py-1.5 text-start font-medium`,children:`Zone`}),(0,k.jsx)(`th`,{className:`px-2 py-1.5 text-start font-medium`,children:`Offset`}),(0,k.jsx)(`th`,{className:`px-2 py-1.5 text-start font-medium`,children:`Local time`}),(0,k.jsx)(`th`,{className:`px-2 py-1.5 text-start font-medium`,children:`Hours`}),(0,k.jsx)(`th`,{className:`w-8 px-2 py-1.5`,"aria-label":`Actions`})]})}),(0,k.jsx)(`tbody`,{className:`tabular-nums`,children:S.map(e=>{let n=m(e.zone,t,x),r=W(x,e.zone),i=r.date===o?``:r.date>o?`+1 day`:`−1 day`,a=r.hour>=V&&r.hour<H;return(0,k.jsxs)(`tr`,{className:`border-t border-border`,children:[(0,k.jsx)(`td`,{className:`px-2 py-1`,children:e.id===0?(0,k.jsxs)(`span`,{className:`inline-flex items-center gap-1.5`,children:[(0,k.jsx)(`span`,{className:`font-medium`,children:n.city}),(0,k.jsx)(`span`,{className:`rounded bg-primary/10 px-1 text-[11px] text-primary`,children:`host`})]}):(0,k.jsx)(C,{value:e.zone,onChange:t=>d(n=>n.map(n=>n.id===e.id?{...n,zone:t}:n)),"aria-label":`Attendee time zone`})}),(0,k.jsx)(`td`,{className:`px-2 py-1 text-muted-foreground`,children:n.offsetLabel}),(0,k.jsxs)(`td`,{className:`px-2 py-1`,children:[p(e.zone,x,t,{weekday:`short`,hour:`numeric`,minute:`2-digit`}),i?(0,k.jsx)(`span`,{className:`ms-1.5 text-[11px] text-muted-foreground`,children:i}):null]}),(0,k.jsx)(`td`,{className:`px-2 py-1`,children:(0,k.jsx)(`span`,{className:a?`text-emerald-700 dark:text-emerald-400`:`text-amber-700 dark:text-amber-400`,children:a?`working`:`off hours`})}),(0,k.jsx)(`td`,{className:`px-2 py-1 text-end`,children:e.id===0?null:(0,k.jsx)(b,{type:`button`,size:`icon-xs`,variant:`ghost`,"aria-label":`Remove ${n.city}`,onClick:()=>d(t=>t.filter(t=>t.id!==e.id)),children:(0,k.jsx)(`svg`,{width:12,height:12,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,"aria-hidden":`true`,children:(0,k.jsx)(`path`,{d:`M18 6 6 18M6 6l12 12`})})})})]},e.id)})})]})}),(0,k.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,k.jsx)(b,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>{d(e=>[...e,{id:f,zone:`UTC`}]),g(e=>e+1)},children:`Add zone`}),(0,k.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[x.toISOString().slice(0,16).replace(`T`,` `),` UTC · working hours `,V,`:00–`,H,`:00`]})]})]})}var q=`import { useState } from "react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { DatePicker, formatZoneTime, TimeZonePicker, useToday, zoneLabel, zonedWallTimeToInstant, type IsoDate } from "@kitora/pickers"

// Meeting planner: set a meeting time in a host zone, add the attendees' zones, and read the same instant in each one, with a day shift marker and a working-hours flag.

const WORK_START = 9
const WORK_END = 18

interface Attendee {
  readonly id: number
  readonly zone: string
}

const INITIAL: readonly Attendee[] = [
  { id: 1, zone: "America/New_York" },
  { id: 2, zone: "Asia/Kolkata" },
  { id: 3, zone: "Australia/Sydney" },
]

/** Hour (0–23) and ISO date of \`at\` in \`zone\`. */
function wallParts(at: Date, zone: string): { date: IsoDate; hour: number } {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: zone, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hourCycle: "h23" }).formatToParts(at)
  const get = (t: Intl.DateTimeFormatPartTypes) => parts.find((p) => p.type === t)?.value ?? ""
  return { date: \`\${get("year")}-\${get("month")}-\${get("day")}\`, hour: Number(get("hour")) }
}

export function TimeZoneMeetingPlanner() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const today = useToday()
  return <Planner key={today} today={today} />
}

function Planner({ today }: { today: IsoDate }) {
  const locale = useDefaultLocale()
  const [host, setHost] = useState("Europe/London")
  const [date, setDate] = useState<IsoDate>(today)
  const [time, setTime] = useState("15:00")
  const [attendees, setAttendees] = useState<readonly Attendee[]>(INITIAL)
  const [nextId, setNextId] = useState(INITIAL.length + 1)

  const [hh = 0, mm = 0] = time.split(":").map((n) => (Number.isFinite(Number(n)) ? Number(n) : 0))
  const instant = zonedWallTimeToInstant(date, hh, mm, host)
  const rows = [{ id: 0, zone: host }, ...attendees]

  return (
    <div className="flex max-w-3xl flex-col gap-3 text-[13px]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-muted-foreground">Meeting at</span>
        <DatePicker value={date} onChange={(v) => v && setDate(v)} aria-label="Meeting date" />
        <Input type="time" aria-label="Meeting time" value={time} onChange={(e) => setTime(e.currentTarget.value || "00:00")} className="h-7 w-28 text-[13px] tabular-nums md:text-[13px]" />
        <span className="text-muted-foreground">in</span>
        <TimeZonePicker value={host} onChange={setHost} aria-label="Host time zone" />
      </div>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-start">
          <thead className="bg-muted/40 text-xs text-muted-foreground">
            <tr>
              <th className="px-2 py-1.5 text-start font-medium">Zone</th>
              <th className="px-2 py-1.5 text-start font-medium">Offset</th>
              <th className="px-2 py-1.5 text-start font-medium">Local time</th>
              <th className="px-2 py-1.5 text-start font-medium">Hours</th>
              <th className="w-8 px-2 py-1.5" aria-label="Actions" />
            </tr>
          </thead>
          <tbody className="tabular-nums">
            {rows.map((row) => {
              const info = zoneLabel(row.zone, locale, instant)
              const wall = wallParts(instant, row.zone)
              const dayShift = wall.date === date ? "" : wall.date > date ? "+1 day" : "−1 day"
              const working = wall.hour >= WORK_START && wall.hour < WORK_END
              return (
                <tr key={row.id} className="border-t border-border">
                  <td className="px-2 py-1">
                    {row.id === 0 ? (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="font-medium">{info.city}</span>
                        <span className="rounded bg-primary/10 px-1 text-[11px] text-primary">host</span>
                      </span>
                    ) : (
                      <TimeZonePicker value={row.zone} onChange={(zone) => setAttendees((all) => all.map((a) => (a.id === row.id ? { ...a, zone } : a)))} aria-label="Attendee time zone" />
                    )}
                  </td>
                  <td className="px-2 py-1 text-muted-foreground">{info.offsetLabel}</td>
                  <td className="px-2 py-1">
                    {formatZoneTime(row.zone, instant, locale, { weekday: "short", hour: "numeric", minute: "2-digit" })}
                    {dayShift ? <span className="ms-1.5 text-[11px] text-muted-foreground">{dayShift}</span> : null}
                  </td>
                  <td className="px-2 py-1">
                    <span className={working ? "text-emerald-700 dark:text-emerald-400" : "text-amber-700 dark:text-amber-400"}>{working ? "working" : "off hours"}</span>
                  </td>
                  <td className="px-2 py-1 text-end">
                    {row.id === 0 ? null : (
                      <Button type="button" size="icon-xs" variant="ghost" aria-label={\`Remove \${info.city}\`} onClick={() => setAttendees((all) => all.filter((a) => a.id !== row.id))}>
                        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                          <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                      </Button>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => {
            setAttendees((all) => [...all, { id: nextId, zone: "UTC" }])
            setNextId((n) => n + 1)
          }}
        >
          Add zone
        </Button>
        <span className="text-xs text-muted-foreground">
          {instant.toISOString().slice(0, 16).replace("T", " ")} UTC · working hours {WORK_START}:00–{WORK_END}:00
        </span>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>_(()=>import(`./timezone-planner-C1kW6rpY.js`),[]));function J(){return(0,k.jsxs)(`div`,{children:[(0,k.jsx)(t,{title:`Scheduling`,children:`Dates, slots, zones and repeat rules together: the parts a booking page or an event editor is made of.`}),(0,k.jsx)(E,{n:1,title:`Book a meeting`,blurb:"`SlotPicker`: the host's weekly hours in New York, busy blocks from a fake calendar service, three lengths, a 10-minute buffer, four hours' notice, 60 days ahead and at most six meetings a day. Days with times are marked on the calendar, the rest say why; the times are grouped by part of day in your zone (switch it), with a 12 / 24 h toggle and Next available. The value is two UTC instants.",code:N,children:(0,k.jsx)(D,{testId:`scheduling-slots`,children:(0,k.jsx)(M,{})})}),(0,k.jsx)(E,{n:2,title:`A week of sessions with seats`,blurb:'`layout="week"`: seven day columns of slots, paged by week. Each session has four seats and `capacity` shows the seats left; the zone is the workshop\'s, locked. ← and → move between days with times, ↑ and ↓ within one.',code:L,children:(0,k.jsx)(D,{testId:`scheduling-week`,children:(0,k.jsx)(I,{})})}),(0,k.jsx)(E,{n:3,title:`An event that repeats`,blurb:`Title, start date and repeat rule, with the summary, the next ten dates and the RRULE as saved.`,code:B,children:(0,k.jsx)(D,{testId:`scheduling-recurrence`,children:(0,k.jsx)(z,{})})}),(0,k.jsx)(E,{n:4,title:`Zones side by side`,blurb:`One meeting time shown in each attendee's zone with offset, a ±1 day marker and a working-hours flag.`,code:q,children:(0,k.jsx)(D,{testId:`scheduling-zones`,children:(0,k.jsx)(G,{})})})]})}export{J as component};