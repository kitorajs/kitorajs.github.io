import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,r as n,s as r,t as i}from"./field-DApIfONr.js";import{s as a}from"./kit-docs-DpYhPoxM.js";import{A as o,S as s}from"./time-jlVD_Pfs.js";import{r as c,s as l,v as u}from"./range-BMtDYCFV.js";import{E as d,r as f,x as p}from"./messages-CRnTibud.js";import{a as m,i as h,n as g,r as _,t as v}from"./calendar-BjISDsC3.js";import{a as y,i as b,n as x,r as S,t as C}from"./date-picker-59wesSh_.js";import{Bc as w,Cc as T,Ic as E,Si as ee,hi as te,ti as D}from"./index-q72zUtm9.js";import{t as O}from"./use-today-quI-UQG6.js";import{f as ne}from"./parts-DvO9iJ-J.js";import{n as k,t as A}from"./month-picker-CytcYb6h.js";import{t as j}from"./date-range-picker-HDUvRKPO.js";import"./kit-gallery-Atvibnty.js";import{t as M}from"./example-B8EaWveR.js";import{t as N}from"./-kits.pickers.shared-CkZQBdgi.js";var P=E();function re({value:e,defaultValue:t=null,onChange:n,open:r,defaultOpen:i=!1,onOpenChange:a,min:o,max:s,locale:l,weekStartsOn:u,weekNumbers:d=!0,placeholder:p,disabled:m,name:h,startName:g,endName:_,form:v,required:y,invalid:b,id:S,align:C=`start`,className:w,...T}){let E=f();return(0,P.jsxs)(x.Root,{mode:`week`,value:e===void 0?void 0:e??c,defaultValue:t??c,onChange:(e,t)=>e.start!==null&&e.end!==null&&t.isoWeek!==void 0&&n?.(e,{isoWeek:t.isoWeek}),open:r,defaultOpen:i,onOpenChange:a,min:o,max:s,locale:l,weekStartsOn:u,weekNumbers:d,disabled:m,name:h,startName:g,endName:_,form:v,required:y,invalid:b,id:S,placeholder:p??E.pickWeek,"aria-label":T[`aria-label`],children:[(0,P.jsx)(F,{name:T[`aria-label`]??E.chooseWeek,align:C,className:w}),(0,P.jsx)(x.HiddenInputs,{}),(0,P.jsx)(x.Announcer,{})]})}function ie({value:e,defaultValue:t=null,onChange:n,open:r,defaultOpen:i=!1,onOpenChange:a,min:o,max:s,locale:c,placeholder:l,disabled:u,name:m,form:h,required:g,invalid:_,id:v,align:y=`start`,className:b,...S}){let C=f();return(0,P.jsxs)(x.Root,{mode:`quarter`,value:e,defaultValue:t,onChange:e=>e!==null&&n?.(e),open:r,defaultOpen:i,onOpenChange:a,min:o?d(o,`quarter`):void 0,max:s?p(s,`quarter`):void 0,locale:c,disabled:u,name:m,form:h,required:g,invalid:_,id:v,placeholder:l??C.pickQuarter,"aria-label":S[`aria-label`],children:[(0,P.jsx)(F,{name:S[`aria-label`]??C.chooseQuarter,align:y,className:b}),(0,P.jsx)(x.HiddenInputs,{}),(0,P.jsx)(x.Announcer,{})]})}function F({name:e,align:t,className:n}){let{picker:r,surface:i}=b(),a=i===`sheet`&&r.confirm?(0,P.jsxs)(x.Footer,{className:`w-full flex-wrap justify-end border-t-0 p-0 [&>[data-slot=date-picker-summary]]:basis-full`,children:[(0,P.jsx)(x.Clear,{variant:`button`}),(0,P.jsx)(x.Cancel,{}),(0,P.jsx)(x.Apply,{})]}):void 0;return(0,P.jsx)(x.Surface,{name:e,align:t,footer:a,trigger:(0,P.jsx)(x.Trigger,{variant:`button`,className:n}),children:(0,P.jsx)(x.Calendar,{})})}var I=e(w(),1);function L(){let e=O();return(0,P.jsx)(ae,{today:e},e)}function ae({today:e}){let t=(0,I.useMemo)(()=>new Set([s(e,3),s(e,10)]),[e]),[n,r]=(0,I.useState)(s(e,1));return(0,P.jsx)(v,{value:n,onChange:r,min:e,max:s(e,30),isDateDisabled:e=>t.has(e),renderDay:e=>t.has(e)?(0,P.jsx)(`span`,{className:`size-1 rounded-full bg-destructive`}):null,"aria-label":`Delivery day`})}var R=`import { useMemo, useState } from "react"
import { addDays, Calendar, useToday, type IsoDate } from "@kitora/pickers"

/** \`min\` / \`max\` limit the range (today → 30 days out), \`isDateDisabled\` blocks more days; blocked days stay focusable but cannot be picked. */
export function BasicCalendarBounds() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const today = useToday()
  return <Bounds key={today} today={today} />
}

function Bounds({ today }: { today: IsoDate }) {
  const holidays = useMemo(() => new Set([addDays(today, 3), addDays(today, 10)]), [today])
  const [value, setValue] = useState<IsoDate | null>(addDays(today, 1))
  return (
    <Calendar
      value={value}
      onChange={setValue}
      min={today}
      max={addDays(today, 30)}
      isDateDisabled={(iso) => holidays.has(iso)}
      renderDay={(iso) => (holidays.has(iso) ? <span className="size-1 rounded-full bg-destructive" /> : null)}
      aria-label="Delivery day"
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>T(()=>import(`./calendar-bounds-C2zh1KTF.js`),[]));function oe(){let[e,t]=(0,I.useState)([]);return(0,P.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,P.jsx)(v,{mode:`multiple`,value:e,onChange:t,maxSelected:5,isDateDisabled:e=>[0,6].includes(new Date(`${e}T00:00:00Z`).getUTCDay()),"aria-label":`Pick office days`}),(0,P.jsxs)(`p`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[e.length,` of 5 picked: `,e.join(`, `)||`none`]})]})}var z=`import { useState } from "react"
import { Calendar, type IsoDate } from "@kitora/pickers"

/** Pick several days (up to 5); click a picked day again to drop it. Weekends are blocked. */
export function BasicCalendarMultiple() {
  const [days, setDays] = useState<IsoDate[]>([])
  return (
    <div className="flex flex-col gap-2">
      <Calendar mode="multiple" value={days} onChange={setDays} maxSelected={5} isDateDisabled={(iso) => [0, 6].includes(new Date(\`\${iso}T00:00:00Z\`).getUTCDay())} aria-label="Pick office days" />
      <p className="text-[12px] text-muted-foreground tabular-nums">{days.length} of 5 picked: {days.join(", ") || "none"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>T(()=>import(`./calendar-multiple-iiXe5RlN.js`),[]));function se(){let[e,t]=(0,I.useState)(c);return(0,P.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,P.jsx)(v,{mode:`range`,value:e,onChange:t,numberOfMonths:2,"aria-label":`Pick a range`}),(0,P.jsxs)(`p`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[e.start?l(e):`Click a start day`,` `,e.end?`· ${u(e)} days`:``]})]})}var B=`import { useState } from "react"
import { Calendar, EMPTY_RANGE, formatRange, rangeLength, type DateRange } from "@kitora/pickers"

/** Two months side by side; click a start, hover to preview, click an end (either order). */
export function BasicCalendarRange() {
  const [range, setRange] = useState<DateRange>(EMPTY_RANGE)
  return (
    <div className="flex flex-col gap-2">
      <Calendar mode="range" value={range} onChange={setRange} numberOfMonths={2} aria-label="Pick a range" />
      <p className="text-[12px] text-muted-foreground tabular-nums">
        {range.start ? formatRange(range) : "Click a start day"} {range.end ? \`· \${rangeLength(range)} days\` : ""}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>T(()=>import(`./calendar-range-B0twj19i.js`),[]));function ce(){let[e,t]=(0,I.useState)(null);return(0,P.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,P.jsx)(v,{value:e,onChange:t,"aria-label":`Pick a day`}),(0,P.jsxs)(`p`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[`Selected: `,e?o(e):`nothing`,` · value `,(0,P.jsx)(`code`,{children:JSON.stringify(e)})]})]})}var V=`import { useState } from "react"
import { Calendar, formatIsoDate, type IsoDate } from "@kitora/pickers"

/** One calendar, one selected day. Arrows move, PageUp/PageDown change month, Enter selects. */
export function BasicCalendarSingle() {
  const [value, setValue] = useState<IsoDate | null>(null)
  return (
    <div className="flex flex-col gap-2">
      <Calendar value={value} onChange={setValue} aria-label="Pick a day" />
      <p className="text-[12px] text-muted-foreground tabular-nums">Selected: {value ? formatIsoDate(value) : "nothing"} · value <code>{JSON.stringify(value)}</code></p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>T(()=>import(`./calendar-single-DGCYTD7u.js`),[]));function le(){let[e,t]=(0,I.useState)(`2026-10-15`);return(0,P.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-[13px]`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`span`,{className:`text-muted-foreground`,children:`Due`}),(0,P.jsx)(C,{value:e,onChange:t,"aria-label":`Due date`})]}),(0,P.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`value: `,(0,P.jsx)(`code`,{children:JSON.stringify(e)})]})]})}var H=`import { useState } from "react"
import { DateInput, type IsoDate } from "@kitora/pickers"

/** Typed segments in the locale's order. Type 1 0 1 5 2 0 2 6, or ↑/↓ on a segment; Backspace clears. */
export function BasicDateField() {
  const [value, setValue] = useState<IsoDate | null>("2026-10-15")
  return (
    <div className="flex flex-wrap items-center gap-3 text-[13px]">
      {/* A caption, not a <label>: the field is a group of segments (named by aria-label), which a label cannot target. */}
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">Due</span>
        <DateInput value={value} onChange={setValue} aria-label="Due date" />
      </div>
      <span className="text-muted-foreground tabular-nums">value: <code>{JSON.stringify(value)}</code></span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>T(()=>import(`./date-field-Bv3B4_C3.js`),[]));function U(){let e=O();return(0,P.jsx)(ue,{today:e},e)}function ue({today:e}){let[t,n]=(0,I.useState)({start:s(e,-6),end:e});return(0,P.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-[13px]`,children:[(0,P.jsx)(j,{value:t,onChange:n,max:e,"aria-label":`Report period`}),(0,P.jsx)(`span`,{className:`text-muted-foreground tabular-nums`,children:(0,P.jsx)(`code`,{children:JSON.stringify(t)})})]})}var W=`import { useState } from "react"
import { addDays, DateRangePicker, useToday, type DateRange, type IsoDate } from "@kitora/pickers"

/** Start and end fields, plus presets and two months in a popover; Apply commits the draft. */
export function BasicDateRangePicker() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const today = useToday()
  return <RangePicker key={today} today={today} />
}

function RangePicker({ today }: { today: IsoDate }) {
  const [range, setRange] = useState<DateRange>({ start: addDays(today, -6), end: today })
  return (
    <div className="flex flex-wrap items-center gap-3 text-[13px]">
      <DateRangePicker value={range} onChange={setRange} max={today} aria-label="Report period" />
      <span className="text-muted-foreground tabular-nums"><code>{JSON.stringify(range)}</code></span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>T(()=>import(`./date-range-picker-4DByLWfh.js`),[]));function de(){let[e,t]=(0,I.useState)(null);return(0,P.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-[13px]`,children:[(0,P.jsx)(x,{value:e,onChange:t,"aria-label":`Start date`,footer:e=>(0,P.jsx)(S,{pick:e})}),(0,P.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`value: `,(0,P.jsx)(`code`,{children:JSON.stringify(e)})]})]})}var G=`import { useState } from "react"
import { DatePicker, TodayButton, type IsoDate } from "@kitora/pickers"

/** The field plus a calendar popover: the field stays typeable, the calendar writes into it. */
export function BasicDatePicker() {
  const [value, setValue] = useState<IsoDate | null>(null)
  return (
    <div className="flex flex-wrap items-center gap-3 text-[13px]">
      <DatePicker value={value} onChange={setValue} aria-label="Start date" footer={(pick) => <TodayButton pick={pick} />} />
      <span className="text-muted-foreground tabular-nums">value: <code>{JSON.stringify(value)}</code></span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>T(()=>import(`./date-picker-B3laYetl.js`),[]));function fe(){let[e,t]=(0,I.useState)(`2026-10`),[n,r]=(0,I.useState)(null);return(0,P.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-[13px]`,children:[(0,P.jsx)(A,{value:e,onChange:t,"aria-label":`Billing month`}),(0,P.jsx)(k,{value:n,onChange:r,min:2015,max:2030,"aria-label":`Fiscal year`}),(0,P.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`month `,(0,P.jsx)(`code`,{children:JSON.stringify(e)}),` · year `,(0,P.jsx)(`code`,{children:JSON.stringify(n)})]})]})}var K=`import { useState } from "react"
import { MonthPicker, YearPicker } from "@kitora/pickers"

/** A billing month (\`YYYY-MM\`) and a fiscal year, each in its own popover grid. */
export function BasicMonthYear() {
  const [month, setMonth] = useState<string | null>("2026-10")
  const [year, setYear] = useState<number | null>(null)
  return (
    <div className="flex flex-wrap items-center gap-3 text-[13px]">
      <MonthPicker value={month} onChange={setMonth} aria-label="Billing month" />
      <YearPicker value={year} onChange={setYear} min={2015} max={2030} aria-label="Fiscal year" />
      <span className="text-muted-foreground tabular-nums">month <code>{JSON.stringify(month)}</code> · year <code>{JSON.stringify(year)}</code></span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>T(()=>import(`./month-year-BWu7_Joa.js`),[]));function pe(){let[e,t]=(0,I.useState)(null);return(0,P.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,P.jsxs)(v.Root,{value:e,onChange:t,"aria-label":`Composed calendar`,classNames:{root:`rounded-lg border border-border p-2`,weekdays:`border-b border-border`},children:[(0,P.jsxs)(v.Months,{children:[(0,P.jsxs)(v.Header,{className:`justify-start`,children:[(0,P.jsx)(v.Caption,{className:`me-auto`}),(0,P.jsx)(v.PrevButton,{}),(0,P.jsx)(v.NextButton,{})]}),(0,P.jsx)(v.Grid,{children:e=>(0,P.jsx)(v.Day,{day:e,className:`rounded-full data-[today]:underline`})})]}),(0,P.jsx)(v.MonthView,{}),(0,P.jsx)(v.YearView,{})]}),(0,P.jsxs)(`p`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[`value `,(0,P.jsx)(`code`,{"data-testid":`compose-value`,children:JSON.stringify(e)})]})]})}var q=`import { useState } from "react"
import { Calendar, type IsoDate } from "@kitora/pickers"

/**
 * The Calendar preset rebuilt from its public parts, then rearranged: the
 * caption on the left, both arrows on the right, a ruled weekday row, and a
 * custom day cell through the Grid's render prop. Selection, keyboard and
 * drill-up still come from Calendar.Root.
 */
export function BasicCalendarCompose() {
  const [value, setValue] = useState<IsoDate | null>(null)
  return (
    <div className="flex flex-col gap-2">
      <Calendar.Root value={value} onChange={setValue} aria-label="Composed calendar" classNames={{ root: "rounded-lg border border-border p-2", weekdays: "border-b border-border" }}>
        <Calendar.Months>
          <Calendar.Header className="justify-start">
            <Calendar.Caption className="me-auto" />
            <Calendar.PrevButton />
            <Calendar.NextButton />
          </Calendar.Header>
          <Calendar.Grid>{(day) => <Calendar.Day day={day} className="rounded-full data-[today]:underline" />}</Calendar.Grid>
        </Calendar.Months>
        <Calendar.MonthView />
        <Calendar.YearView />
      </Calendar.Root>
      <p className="text-[12px] text-muted-foreground tabular-nums">
        value <code data-testid="compose-value">{JSON.stringify(value)}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>T(()=>import(`./calendar-compose-B5MONTkn.js`),[]));function me(){let[e,t]=(0,I.useState)(2026),[n,r]=(0,I.useState)(null);return(0,P.jsxs)(`div`,{className:`flex flex-col gap-2 text-[13px]`,children:[(0,P.jsxs)(`div`,{className:`flex flex-wrap items-start gap-4`,children:[(0,P.jsx)(m,{value:e,onChange:t,min:2020,max:2031}),(0,P.jsx)(g,{value:n,onChange:r,min:`${e??2026}-01`,max:`${e??2026}-12`})]}),(0,P.jsxs)(`p`,{className:`text-muted-foreground tabular-nums`,children:[`year `,(0,P.jsx)(`code`,{children:JSON.stringify(e)}),` · month `,(0,P.jsx)(`code`,{children:JSON.stringify(n)})]})]})}function J(){let[e,a]=(0,I.useState)(null);return(0,P.jsxs)(`form`,{className:`flex max-w-md flex-col gap-3 text-[13px]`,onSubmit:e=>{e.preventDefault(),a(JSON.stringify([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])))},children:[(0,P.jsxs)(i,{children:[(0,P.jsx)(r,{children:`Billing month`}),(0,P.jsx)(A,{name:`month`,defaultValue:`2026-10`,required:!0}),(0,P.jsx)(n,{children:`Posts as YYYY-MM.`}),(0,P.jsx)(t,{match:`valueMissing`,children:`Pick a month.`})]}),(0,P.jsxs)(i,{children:[(0,P.jsx)(r,{children:`Fiscal year`}),(0,P.jsx)(k,{name:`year`,min:2015,max:2030})]}),(0,P.jsxs)(i,{children:[(0,P.jsx)(r,{children:`Stay`}),(0,P.jsx)(j,{startName:`check-in`,endName:`check-out`,presets:[],required:!0}),(0,P.jsx)(n,{children:`Posts check-in and check-out as ISO dates.`})]}),(0,P.jsx)(D,{type:`submit`,size:`sm`,className:`self-start`,children:`Submit`}),(0,P.jsxs)(`p`,{role:`status`,className:`text-muted-foreground`,children:[`FormData: `,(0,P.jsx)(`code`,{children:e??`not submitted`})]})]})}var Y=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { DateRangePicker, MonthPicker, YearPicker } from "@kitora/pickers"

/** Each picker posts with a plain \`<form>\`: \`name\` writes hidden inputs, \`required\` refuses an empty submit, a Field's label names it. */
export function BasicFormSubmit() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex max-w-md flex-col gap-3 text-[13px]"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
      }}
    >
      <Field>
        <FieldLabel>Billing month</FieldLabel>
        <MonthPicker name="month" defaultValue="2026-10" required />
        <FieldDescription>Posts as YYYY-MM.</FieldDescription>
        <FieldError match="valueMissing">Pick a month.</FieldError>
      </Field>
      <Field>
        <FieldLabel>Fiscal year</FieldLabel>
        <YearPicker name="year" min={2015} max={2030} />
      </Field>
      <Field>
        <FieldLabel>Stay</FieldLabel>
        <DateRangePicker startName="check-in" endName="check-out" presets={[]} required />
        <FieldDescription>Posts check-in and check-out as ISO dates.</FieldDescription>
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Submit
      </Button>
      <p role="status" className="text-muted-foreground">
        FormData: <code>{posted ?? "not submitted"}</code>
      </p>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>T(()=>import(`./form-submit-C0iAJ4mu.js`),[]));var X=`import { useState } from "react"
import { MonthGrid, YearGrid } from "@kitora/pickers"

/** The grids inside MonthPicker and YearPicker, inline: pick a year, then a month in it. Arrow keys move, Enter picks. */
export function BasicMonthYearGrids() {
  const [year, setYear] = useState<number | null>(2026)
  const [month, setMonth] = useState<string | null>(null)
  return (
    <div className="flex flex-col gap-2 text-[13px]">
      <div className="flex flex-wrap items-start gap-4">
        <YearGrid value={year} onChange={setYear} min={2020} max={2031} />
        <MonthGrid value={month} onChange={setMonth} min={\`\${year ?? 2026}-01\`} max={\`\${year ?? 2026}-12\`} />
      </div>
      <p className="text-muted-foreground tabular-nums">
        year <code>{JSON.stringify(year)}</code> · month <code>{JSON.stringify(month)}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>T(()=>import(`./month-year-grids-piAoAcxX.js`),[]));function he(){let[e,t]=(0,I.useState)(null),[n,r]=(0,I.useState)(null),[i,a]=(0,I.useState)(`2026-Q4`);return(0,P.jsxs)(`div`,{className:`flex flex-col gap-2 text-[13px]`,children:[(0,P.jsxs)(`div`,{className:`flex flex-wrap items-start gap-4`,children:[(0,P.jsx)(h,{value:e,onChange:(e,n)=>{t(e),r(n.isoWeek)},"aria-label":`Week`}),(0,P.jsx)(_,{value:i,onChange:a})]}),(0,P.jsxs)(`p`,{className:`max-w-full break-all text-muted-foreground tabular-nums`,children:[`week `,(0,P.jsx)(`code`,{children:JSON.stringify(e)}),` · ISO week `,(0,P.jsx)(`code`,{children:JSON.stringify(n)}),` · quarter `,(0,P.jsx)(`code`,{children:JSON.stringify(i)})]})]})}var Z=`import { useState } from "react"
import { QuarterGrid, WeekGrid, type DateRange, type IsoQuarter } from "@kitora/pickers"

/** The week and quarter grids, inline: a click on any day picks its week (hover bands the row); a quarter is \`YYYY-Qn\`. */
export function BasicWeekQuarterGrids() {
  const [week, setWeek] = useState<DateRange | null>(null)
  const [isoWeek, setIsoWeek] = useState<string | null>(null)
  const [quarter, setQuarter] = useState<IsoQuarter | null>("2026-Q4")
  return (
    <div className="flex flex-col gap-2 text-[13px]">
      <div className="flex flex-wrap items-start gap-4">
        <WeekGrid
          value={week}
          onChange={(next, details) => {
            setWeek(next)
            setIsoWeek(details.isoWeek)
          }}
          aria-label="Week"
        />
        <QuarterGrid value={quarter} onChange={setQuarter} />
      </div>
      <p className="max-w-full break-all text-muted-foreground tabular-nums">
        week <code>{JSON.stringify(week)}</code> · ISO week <code>{JSON.stringify(isoWeek)}</code> · quarter <code>{JSON.stringify(quarter)}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>T(()=>import(`./week-quarter-grids-DJvHWQQn.js`),[]));function ge(){let[e,a]=(0,I.useState)(null),[o,s]=(0,I.useState)(null);return(0,P.jsxs)(`form`,{className:`flex max-w-md flex-col gap-3 text-[13px]`,onSubmit:e=>{e.preventDefault(),s(JSON.stringify([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])))},children:[(0,P.jsxs)(i,{children:[(0,P.jsx)(r,{children:`Sprint week`}),(0,P.jsx)(re,{startName:`week-start`,endName:`week-end`,weekStartsOn:1,required:!0,onChange:(e,t)=>a(t.isoWeek)}),(0,P.jsx)(n,{children:`Posts its first and last day; weeks start on Monday.`}),(0,P.jsx)(t,{match:`valueMissing`,children:`Pick a week.`})]}),(0,P.jsxs)(i,{children:[(0,P.jsx)(r,{children:`Fiscal quarter`}),(0,P.jsx)(ie,{name:`quarter`,defaultValue:`2026-Q4`}),(0,P.jsx)(n,{children:`Posts as YYYY-Qn.`})]}),(0,P.jsx)(D,{type:`submit`,size:`sm`,className:`self-start`,children:`Submit`}),(0,P.jsxs)(`p`,{role:`status`,className:`max-w-full break-all text-muted-foreground tabular-nums`,children:[`ISO week `,(0,P.jsx)(`code`,{children:JSON.stringify(e)}),` · FormData: `,(0,P.jsx)(`code`,{children:o??`not submitted`})]})]})}var Q=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { QuarterPicker, WeekPicker } from "@kitora/pickers"

/** \`WeekPicker\` and \`QuarterPicker\` in a plain \`<form>\`: a week posts as two ISO dates, a quarter as \`YYYY-Qn\`. */
export function BasicWeekQuarter() {
  const [isoWeek, setIsoWeek] = useState<string | null>(null)
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex max-w-md flex-col gap-3 text-[13px]"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
      }}
    >
      <Field>
        <FieldLabel>Sprint week</FieldLabel>
        <WeekPicker startName="week-start" endName="week-end" weekStartsOn={1} required onChange={(_, details) => setIsoWeek(details.isoWeek)} />
        <FieldDescription>Posts its first and last day; weeks start on Monday.</FieldDescription>
        <FieldError match="valueMissing">Pick a week.</FieldError>
      </Field>
      <Field>
        <FieldLabel>Fiscal quarter</FieldLabel>
        <QuarterPicker name="quarter" defaultValue="2026-Q4" />
        <FieldDescription>Posts as YYYY-Qn.</FieldDescription>
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Submit
      </Button>
      <p role="status" className="max-w-full break-all text-muted-foreground tabular-nums">
        ISO week <code>{JSON.stringify(isoWeek)}</code> · FormData: <code>{posted ?? "not submitted"}</code>
      </p>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>T(()=>import(`./week-quarter-CI5OqBV3.js`),[]));var _e={date:!0,time:!0};function ve(){let[e,t]=(0,I.useState)(`2026-10-15`),[n,r]=(0,I.useState)(`09:30`);return(0,P.jsxs)(`div`,{className:`grid gap-2 text-[13px]`,children:[(0,P.jsx)(y,{shape:_e,date:e,time:n,onValue:e=>{t(e.date),r(e.time)},"aria-label":`Departure`,end:(0,P.jsx)(`button`,{type:`button`,"aria-label":`Reset departure`,className:te(ne),onClick:()=>{t(null),r(null)},children:(0,P.jsx)(ee,{className:`size-3.5`})})}),(0,P.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`value: `,(0,P.jsx)(`code`,{children:JSON.stringify({date:e,time:n})})]})]})}var $=`import { useState } from "react"
import { DateSegments, FIELD_ICON_BUTTON } from "@kitora/pickers/ui"
import type { IsoDate, IsoTime } from "@kitora/pickers/core"
import { cn } from "@kitora/ui/utils"
import { RotateCcw } from "lucide-react"

const SHAPE = { date: true, time: true } as const

/**
 * A date and time field of your own on \`DateSegments\`, the typed-segment input \`DateInput\` and \`DatePicker.Field\` are drawn with: digits, the
 * arrows, T for today and + / − work as in the pickers, the order and separators follow the locale, and \`end\` holds controls of your own,
 * here a reset button styled with the pickers' \`FIELD_ICON_BUTTON\`.
 */
export function ComposeDateField() {
  const [date, setDate] = useState<IsoDate | null>("2026-10-15")
  const [time, setTime] = useState<IsoTime | null>("09:30")
  return (
    <div className="grid gap-2 text-[13px]">
      <DateSegments
        shape={SHAPE}
        date={date}
        time={time}
        onValue={(v) => {
          setDate(v.date)
          setTime(v.time)
        }}
        aria-label="Departure"
        end={
          <button type="button" aria-label="Reset departure" className={cn(FIELD_ICON_BUTTON)} onClick={() => {
            setDate(null)
            setTime(null)
          }}>
            <RotateCcw className="size-3.5" />
          </button>
        }
      />
      <span className="text-muted-foreground tabular-nums">
        value: <code>{JSON.stringify({ date, time })}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>T(()=>import(`./compose-field-CEamfIIc.js`),[]));function ye(){return(0,P.jsxs)(`div`,{children:[(0,P.jsx)(a,{title:`Basics: dates`,children:"Values are ISO strings (`2026-10-15`): no time, no zone, so a day stays that day everywhere. Every calendar is one tab stop; arrows move, PageUp/PageDown change month (Shift for year), Home/End go to the week's ends, the caption drills up to months and years."}),(0,P.jsx)(M,{n:1,title:`A calendar`,blurb:`Single mode: one day. Click, or focus the grid and use the keys.`,code:V,children:(0,P.jsx)(N,{testId:`basic-calendar-single`,children:(0,P.jsx)(ce,{})})}),(0,P.jsx)(M,{n:2,title:`Several days`,blurb:'`mode="multiple"` with a cap and blocked weekends.',code:z,children:(0,P.jsx)(N,{testId:`basic-calendar-multiple`,children:(0,P.jsx)(oe,{})})}),(0,P.jsx)(M,{n:3,title:`A range`,blurb:'`mode="range"` over two months, with a hover preview between the clicks.',code:B,children:(0,P.jsx)(N,{testId:`basic-calendar-range`,children:(0,P.jsx)(se,{})})}),(0,P.jsx)(M,{n:4,title:`Min, max and blocked days`,blurb:"Only the next 30 days, two holidays blocked and marked with a dot by `renderDay`.",code:R,children:(0,P.jsx)(N,{testId:`basic-calendar-bounds`,children:(0,P.jsx)(L,{})})}),(0,P.jsx)(M,{n:5,title:`A date field`,blurb:`Typed segments in the locale's order; no popover needed.`,code:H,children:(0,P.jsx)(N,{testId:`basic-date-field`,children:(0,P.jsx)(le,{})})}),(0,P.jsx)(M,{n:6,title:`A date picker`,blurb:`The field plus a calendar popover with a Today shortcut.`,code:G,children:(0,P.jsx)(N,{testId:`basic-date-picker`,children:(0,P.jsx)(de,{})})}),(0,P.jsx)(M,{n:7,title:`A date range picker`,blurb:`Start and end fields, presets, two months and Apply. Double-click a preset to apply it at once.`,code:W,children:(0,P.jsx)(N,{testId:`basic-date-range-picker`,children:(0,P.jsx)(U,{})})}),(0,P.jsx)(M,{n:8,title:`Month and year`,blurb:"`MonthPicker` (`YYYY-MM`) and `YearPicker` for billing periods and fiscal years.",code:K,children:(0,P.jsx)(N,{testId:`basic-month-year`,children:(0,P.jsx)(fe,{})})}),(0,P.jsx)(M,{n:9,title:`Compose your own`,blurb:"The `Calendar` preset is built only from public parts: `Calendar.Root`, `Months`, `Header`, `Caption`, `PrevButton`, `NextButton`, `Weekdays`, `Grid`, `Day`, `MonthView`, `YearView`. This one rebuilds it with the arrows on the right and round day cells; every part also takes `className`, and the root takes `classNames` per part.",code:q,children:(0,P.jsx)(N,{testId:`basic-calendar-compose`,children:(0,P.jsx)(pe,{})})}),(0,P.jsx)(M,{n:10,title:`Month and year grids`,blurb:"`MonthGrid` and `YearGrid`, the grids inside the month and year pickers, inline with no popover.",code:X,children:(0,P.jsx)(N,{testId:`basic-month-year-grids`,children:(0,P.jsx)(me,{})})}),(0,P.jsx)(M,{n:11,title:`Submits with a form`,blurb:"`name` (or `startName` / `endName` on a range), `form` and `required` on every picker: hidden inputs post the value with a plain `<form>`, an empty required picker refuses the submit and takes focus, and inside a `Field` the label names the trigger with the value it shows.",code:Y,children:(0,P.jsx)(N,{testId:`basic-form-submit`,children:(0,P.jsx)(J,{})})}),(0,P.jsx)(M,{n:12,title:`A field of your own`,blurb:"`DateSegments`, the typed-segment input `DateInput` and `DatePicker.Field` are drawn with, as a date and time field with a control of your own in `end`, styled with the pickers' `FIELD_ICON_BUTTON`.",code:$,children:(0,P.jsx)(N,{testId:`basic-compose-field`,children:(0,P.jsx)(ve,{})})}),(0,P.jsx)(M,{n:13,title:`Week and quarter grids`,blurb:"`WeekGrid` (the calendar in week mode, week numbers on: a click on any day picks its week, hovering bands the row) and `QuarterGrid` (four quarters in a row, `YYYY-Qn`), inline with no popover.",code:Z,children:(0,P.jsx)(N,{testId:`basic-week-quarter-grids`,children:(0,P.jsx)(he,{})})}),(0,P.jsx)(M,{n:14,title:`Week and quarter pickers`,blurb:"`WeekPicker` (a popover week calendar with week numbers; `name` posts `start/end`, or `startName` / `endName` two fields; `onChange` also gives the ISO week id) and `QuarterPicker` (`YYYY-Qn`), in a plain `<form>`.",code:Q,children:(0,P.jsx)(N,{testId:`basic-week-quarter`,children:(0,P.jsx)(ge,{})})})]})}export{ye as component};