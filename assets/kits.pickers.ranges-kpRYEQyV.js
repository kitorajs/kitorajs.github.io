import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{A as n,S as r}from"./time-jlVD_Pfs.js";import{h as i,r as a,s as o,u as s,v as c}from"./range-BMtDYCFV.js";import{t as l}from"./calendar-BjISDsC3.js";import{Bc as u,Cc as d,Ic as f,Uo as p}from"./index-q72zUtm9.js";import{t as m}from"./use-today-quI-UQG6.js";import{t as h}from"./date-range-picker-HDUvRKPO.js";import"./kit-gallery-Atvibnty.js";import{t as g}from"./example-B8EaWveR.js";import{t as _}from"./-kits.pickers.shared-CkZQBdgi.js";var v=e(u(),1),y=f();function b(e){let t=0;for(let n of e)t=(t*31+n.charCodeAt(0))%9973;let n=[0,6].includes(new Date(`${e}T00:00:00Z`).getUTCDay());return 40+t%60-(n?25:0)}function x(e){if(!e.start||!e.end)return[];let t=[];for(let n=e.start;n<=e.end;n=r(n,1))t.push({iso:n,n:b(n)});return t}function S(){let e=m();return(0,y.jsx)(C,{today:e},e)}function C({today:e}){let t=p(),[n,a]=(0,v.useState)({start:r(e,-13),end:e}),[s,c]=(0,v.useState)(!0),l=(0,v.useMemo)(()=>x(n),[n]),u=(0,v.useMemo)(()=>x(i(n)),[n]),d=l.reduce((e,t)=>e+t.n,0),f=u.reduce((e,t)=>e+t.n,0),m=f?(d-f)/f*100:0,g=Math.max(1,...l.map(e=>e.n),...s?u.map(e=>e.n):[]);return(0,y.jsxs)(`div`,{className:`flex flex-col gap-3 text-[13px]`,children:[(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,y.jsx)(h,{value:n,onChange:a,max:e,maxDays:92,"aria-label":`Period`}),(0,y.jsxs)(`label`,{className:`flex items-center gap-1.5 text-muted-foreground`,children:[(0,y.jsx)(`input`,{type:`checkbox`,checked:s,onChange:e=>c(e.currentTarget.checked),className:`accent-primary`}),`Compare to previous period`]})]}),(0,y.jsxs)(`div`,{className:`flex items-end gap-6`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`div`,{className:`text-[11px] tracking-wide text-muted-foreground uppercase`,children:`Sign-ups`}),(0,y.jsx)(`div`,{className:`text-2xl font-semibold tabular-nums`,children:d.toLocaleString(t)})]}),s&&f?(0,y.jsxs)(`div`,{className:`pb-1 tabular-nums`,children:[(0,y.jsxs)(`span`,{className:m>=0?`text-emerald-700 dark:text-emerald-400`:`text-destructive`,children:[m>=0?`▲`:`▼`,` `,Math.abs(m).toFixed(1),`%`]}),` `,(0,y.jsxs)(`span`,{className:`text-muted-foreground`,children:[`vs `,o(i(n),t)]})]}):null]}),(0,y.jsx)(`div`,{className:`flex h-28 items-end gap-px rounded-md border bg-card p-2`,role:`img`,"aria-label":`Daily sign-ups, ${o(n,t)}`,children:l.map((e,t)=>(0,y.jsxs)(`div`,{className:`relative flex h-full min-w-0 flex-1 items-end`,title:`${e.iso}: ${e.n}`,children:[s&&u[t]?(0,y.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 rounded-sm bg-muted-foreground/20`,style:{height:`${u[t].n/g*100}%`}}):null,(0,y.jsx)(`div`,{className:`relative w-full rounded-sm bg-primary/80`,style:{height:`${e.n/g*100}%`}})]},e.iso))})]})}var w=`import { useMemo, useState } from "react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { addDays, DateRangePicker, formatRange, previousPeriod, useToday, type DateRange, type IsoDate } from "@kitora/pickers"

/** Deterministic fake daily sign-ups so the chart is stable between renders. */
function signups(iso: IsoDate): number {
  let h = 0
  for (const ch of iso) h = (h * 31 + ch.charCodeAt(0)) % 9973
  const weekend = [0, 6].includes(new Date(\`\${iso}T00:00:00Z\`).getUTCDay())
  return 40 + (h % 60) - (weekend ? 25 : 0)
}

function series(range: DateRange): { iso: IsoDate; n: number }[] {
  if (!range.start || !range.end) return []
  const out: { iso: IsoDate; n: number }[] = []
  for (let d = range.start; d <= range.end; d = addDays(d, 1)) out.push({ iso: d, n: signups(d) })
  return out
}

/** An analytics header: a range with presets (capped at 92 days), "compare to previous period", and the totals it drives. */
export function RangesAnalytics() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const today = useToday()
  return <Analytics key={today} today={today} />
}

function Analytics({ today }: { today: IsoDate }) {
  // the reader's locale (the build's until hydration, so the server HTML matches)
  const locale = useDefaultLocale()
  const [range, setRange] = useState<DateRange>({ start: addDays(today, -13), end: today })
  const [compare, setCompare] = useState(true)
  const current = useMemo(() => series(range), [range])
  const previous = useMemo(() => series(previousPeriod(range)), [range])
  const total = current.reduce((s, d) => s + d.n, 0)
  const before = previous.reduce((s, d) => s + d.n, 0)
  const delta = before ? ((total - before) / before) * 100 : 0
  const peak = Math.max(1, ...current.map((d) => d.n), ...(compare ? previous.map((d) => d.n) : []))
  return (
    <div className="flex flex-col gap-3 text-[13px]">
      <div className="flex flex-wrap items-center gap-2">
        <DateRangePicker value={range} onChange={setRange} max={today} maxDays={92} aria-label="Period" />
        <label className="flex items-center gap-1.5 text-muted-foreground">
          <input type="checkbox" checked={compare} onChange={(e) => setCompare(e.currentTarget.checked)} className="accent-primary" />
          Compare to previous period
        </label>
      </div>
      <div className="flex items-end gap-6">
        <div>
          <div className="text-[11px] tracking-wide text-muted-foreground uppercase">Sign-ups</div>
          <div className="text-2xl font-semibold tabular-nums">{total.toLocaleString(locale)}</div>
        </div>
        {compare && before ? (
          <div className="pb-1 tabular-nums">
            <span className={delta >= 0 ? "text-emerald-700 dark:text-emerald-400" : "text-destructive"}>
              {delta >= 0 ? "▲" : "▼"} {Math.abs(delta).toFixed(1)}%
            </span>{" "}
            <span className="text-muted-foreground">vs {formatRange(previousPeriod(range), locale)}</span>
          </div>
        ) : null}
      </div>
      <div className="flex h-28 items-end gap-px rounded-md border bg-card p-2" role="img" aria-label={\`Daily sign-ups, \${formatRange(range, locale)}\`}>
        {current.map((d, i) => (
          <div key={d.iso} className="relative flex h-full min-w-0 flex-1 items-end" title={\`\${d.iso}: \${d.n}\`}>
            {compare && previous[i] ? <div className="absolute inset-x-0 bottom-0 rounded-sm bg-muted-foreground/20" style={{ height: \`\${(previous[i].n / peak) * 100}%\` }} /> : null}
            <div className="relative w-full rounded-sm bg-primary/80" style={{ height: \`\${(d.n / peak) * 100}%\` }} />
          </div>
        ))}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>d(()=>import(`./ranges-analytics-C5YdSlDY.js`),[]));var T=2,E=14,D=e=>[5,6].includes(new Date(`${e}T00:00:00Z`).getUTCDay())?189:139;function O(){let e=m();return(0,y.jsx)(k,{today:e},e)}function k({today:e}){let t=p(),i=(0,v.useMemo)(()=>new Set([3,4,5,12,13,21,22,23,24].map(t=>r(e,t))),[e]),[o,u]=(0,v.useState)(a),d=o.end?c(o)-1:0,f=0;for(let e=o.start,t=0;e&&t<d;e=r(e,1),t++)f+=D(e);return(0,y.jsxs)(`div`,{className:`flex flex-wrap items-start gap-4 text-[13px]`,children:[(0,y.jsx)(l,{mode:`range`,value:o,onChange:u,numberOfMonths:2,min:e,max:r(e,180),isDateDisabled:e=>i.has(e)||s(o,e,T+1,E+1),renderDay:t=>t>=e&&!i.has(t)?(0,y.jsx)(`span`,{className:`text-[8px] leading-none text-muted-foreground tabular-nums`,children:D(t)}):null,"aria-label":`Stay dates`,className:`[&_[data-iso]]:pb-2`}),(0,y.jsxs)(`div`,{className:`flex w-56 flex-col gap-2 rounded-lg border bg-card p-3`,children:[(0,y.jsx)(`div`,{className:`font-medium`,children:`Your stay`}),(0,y.jsxs)(`dl`,{className:`grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 tabular-nums`,children:[(0,y.jsx)(`dt`,{className:`text-muted-foreground`,children:`Check-in`}),(0,y.jsx)(`dd`,{children:o.start?n(o.start,t,{weekday:`short`,day:`numeric`,month:`short`}):`—`}),(0,y.jsx)(`dt`,{className:`text-muted-foreground`,children:`Check-out`}),(0,y.jsx)(`dd`,{children:o.end?n(o.end,t,{weekday:`short`,day:`numeric`,month:`short`}):`—`}),(0,y.jsx)(`dt`,{className:`text-muted-foreground`,children:`Nights`}),(0,y.jsx)(`dd`,{children:d||`—`})]}),(0,y.jsxs)(`div`,{className:`flex items-baseline justify-between border-t pt-2`,children:[(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`Total`}),(0,y.jsx)(`span`,{className:`text-base font-semibold tabular-nums`,children:f?`$${f.toLocaleString(t)}`:`—`})]}),(0,y.jsxs)(`p`,{className:`text-[11px] text-muted-foreground`,children:[T,`–`,E,` nights. Struck-out days are booked; a stay cannot cross them.`]})]})]})}var A=`import { useMemo, useState } from "react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { addDays, Calendar, EMPTY_RANGE, formatIsoDate, lengthBlocked, rangeLength, useToday, type DateRange, type IsoDate } from "@kitora/pickers"

const MIN_NIGHTS = 2
const MAX_NIGHTS = 14

/** Weekend nights cost more; the calendar shows each night's price under the day. */
const price = (iso: IsoDate) => ([5, 6].includes(new Date(\`\${iso}T00:00:00Z\`).getUTCDay()) ? 189 : 139)

/** A stay booking: two months, booked nights blocked, 2–14 nights, a price under every day and a running total. */
export function RangesBooking() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const today = useToday()
  return <Booking key={today} today={today} />
}

function Booking({ today }: { today: IsoDate }) {
  const locale = useDefaultLocale()
  const booked = useMemo(() => new Set([3, 4, 5, 12, 13, 21, 22, 23, 24].map((n) => addDays(today, n))), [today])
  const [stay, setStay] = useState<DateRange>(EMPTY_RANGE)
  // A stay of N nights runs from check-in to check-out, so the range's day count is nights + 1.
  const nights = stay.end ? rangeLength(stay) - 1 : 0
  let total = 0
  for (let d = stay.start, i = 0; d && i < nights; d = addDays(d, 1), i++) total += price(d)
  return (
    <div className="flex flex-wrap items-start gap-4 text-[13px]">
      <Calendar
        mode="range"
        value={stay}
        onChange={setStay}
        numberOfMonths={2}
        min={today}
        max={addDays(today, 180)}
        isDateDisabled={(iso) => booked.has(iso) || lengthBlocked(stay, iso, MIN_NIGHTS + 1, MAX_NIGHTS + 1)}
        renderDay={(iso) => (iso >= today && !booked.has(iso) ? <span className="text-[8px] leading-none text-muted-foreground tabular-nums">{price(iso)}</span> : null)}
        aria-label="Stay dates"
        className="[&_[data-iso]]:pb-2"
      />
      <div className="flex w-56 flex-col gap-2 rounded-lg border bg-card p-3">
        <div className="font-medium">Your stay</div>
        <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 tabular-nums">
          <dt className="text-muted-foreground">Check-in</dt>
          <dd>{stay.start ? formatIsoDate(stay.start, locale, { weekday: "short", day: "numeric", month: "short" }) : "—"}</dd>
          <dt className="text-muted-foreground">Check-out</dt>
          <dd>{stay.end ? formatIsoDate(stay.end, locale, { weekday: "short", day: "numeric", month: "short" }) : "—"}</dd>
          <dt className="text-muted-foreground">Nights</dt>
          <dd>{nights || "—"}</dd>
        </dl>
        <div className="flex items-baseline justify-between border-t pt-2">
          <span className="text-muted-foreground">Total</span>
          <span className="text-base font-semibold tabular-nums">{total ? \`$\${total.toLocaleString(locale)}\` : "—"}</span>
        </div>
        <p className="text-[11px] text-muted-foreground">
          {MIN_NIGHTS}–{MAX_NIGHTS} nights. Struck-out days are booked; a stay cannot cross them.
        </p>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>d(()=>import(`./ranges-booking-CJt894dU.js`),[]));function j(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(t,{title:`Date ranges`,children:"Ranges are inclusive ISO pairs. Presets compute from today and the locale's week start; `minDays` and `maxDays` block the days that would break a length rule."}),(0,y.jsx)(g,{n:1,title:`Analytics period with comparison`,blurb:`Presets, a 92-day cap, Apply, and the previous period of the same length drawn behind the bars.`,code:w,children:(0,y.jsx)(_,{testId:`ranges-analytics`,children:(0,y.jsx)(S,{})})}),(0,y.jsx)(g,{n:2,title:`A stay booking`,blurb:`Two months, booked nights blocked and never crossed, 2–14 nights, a nightly price under each day.`,code:A,children:(0,y.jsx)(_,{testId:`ranges-booking`,children:(0,y.jsx)(O,{})})})]})}export{j as component};