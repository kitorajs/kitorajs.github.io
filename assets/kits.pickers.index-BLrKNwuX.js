import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{n}from"./color-picker-NOT88f6n.js";import{S as r}from"./time-jlVD_Pfs.js";import{s as i}from"./range-BMtDYCFV.js";import{d as a,p as o}from"./recurrence-Ddw7AvGK.js";import{Bc as s,Cc as c,Ic as l,Uo as u,Wo as d}from"./index-B9ukmIN1.js";import{t as f}from"./use-today-QYcwC5T-.js";import{n as p}from"./timezone-picker-BphDx_Y3.js";import{r as m}from"./time-picker-DDlilTXB.js";import{t as h}from"./date-range-picker-Be54Jtjl.js";import{t as g}from"./recurrence-editor-Hmah_m1F.js";import{t as _}from"./select-IOvfzDtl.js";import"./kit-gallery-Bph7isB2.js";import{t as v}from"./example-BGnSQG2Y.js";import{t as y}from"./-kits.pickers.shared-2GQmov_7.js";var b=e(s(),1),x=l();function S(){let e=f(),t=d();return(0,x.jsx)(C,{today:e,hostZone:t},`${e} ${t}`)}function C({today:e,hostZone:t}){let s=u(),[c,l]=(0,b.useState)({start:r(e,-29),end:e}),[d,f]=(0,b.useState)(t),[v,y]=(0,b.useState)(`#6366f1`),[S,C]=(0,b.useState)(`FREQ=WEEKLY;BYDAY=MO`),[T,E]=(0,b.useState)(`08:00`),D=a(S);return(0,x.jsxs)(`div`,{className:`flex flex-col gap-3 text-[13px]`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 rounded-lg border bg-card p-2`,children:[(0,x.jsx)(`span`,{className:`ps-1 font-medium`,children:`Revenue report`}),(0,x.jsx)(`span`,{className:`mx-1 h-4 w-px bg-border`}),(0,x.jsx)(h,{value:c,onChange:l,max:e,"aria-label":`Period`}),(0,x.jsx)(p,{value:d,onChange:f,"aria-label":`Report time zone`}),(0,x.jsx)(n,{value:v,onChange:y,label:`Series colour`})]}),(0,x.jsxs)(`div`,{className:`grid gap-3 md:grid-cols-[1fr_16rem]`,children:[(0,x.jsxs)(`section`,{className:`flex flex-col gap-2 rounded-lg border bg-card p-3`,"aria-label":`Email schedule`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,x.jsx)(`span`,{className:`font-medium`,children:`Email this report`}),(0,x.jsxs)(`span`,{className:`flex items-center gap-1.5 text-muted-foreground`,children:[`at `,(0,x.jsx)(m,{value:T,onChange:E,step:15,"aria-label":`Send time`})]})]}),(0,x.jsx)(g,{value:S,onChange:C,start:e,renderFrequencySelect:e=>(0,x.jsx)(_,{id:e.id,"aria-labelledby":e.labelId,items:e.options.map(e=>({id:e.value,label:e.label})),value:e.value,onChange:t=>{t!==null&&e.onChange(t)},disabled:e.disabled,className:`h-7 w-40 text-[13px]`})})]}),(0,x.jsxs)(`aside`,{className:`flex flex-col gap-1.5 rounded-lg border bg-card p-3 text-[12px]`,children:[(0,x.jsx)(`span`,{className:`text-[13px] font-medium`,children:`Saved as`}),(0,x.jsx)(w,{k:`period`,v:i(c,s)}),(0,x.jsx)(w,{k:`zone`,v:d}),(0,x.jsx)(w,{k:`colour`,v:(0,x.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,x.jsx)(`span`,{className:`size-3 rounded-sm ring-1 ring-foreground/15`,style:{background:v}}),v]})}),(0,x.jsx)(w,{k:`rrule`,v:S||`—`}),(0,x.jsx)(w,{k:`sends`,v:D?`${o(D,e,s)}${T?`, ${T}`:``}`:`never`})]})]})]})}function w({k:e,v:t}){return(0,x.jsxs)(`div`,{className:`grid grid-cols-[3.5rem_1fr] gap-2`,children:[(0,x.jsx)(`span`,{className:`font-mono text-muted-foreground`,children:e}),(0,x.jsx)(`span`,{className:`min-w-0 break-words tabular-nums`,children:t})]})}var T=`import { useState, type ReactNode } from "react"
import { useDefaultLocale, useDefaultTimeZone } from "@kitora/primitives/react"
import { addDays, ColorPickerPopover, DateRangePicker, formatRange, parseRRule, RecurrenceEditor, summarizeRule, TimePicker, TimeZonePicker, useToday, type DateRange, type IsoDate, type IsoTime } from "@kitora/pickers"
import { Select } from "@kitora/collections"

/** A scheduled report: the period it covers, the zone its days are cut in, a chart colour, and when it is emailed. Every value is plain data, shown live underneath. */
export function OverviewReport() {
  // keyed on today and the reader's zone: a prerendered page starts from the build's, then from the visitor's right after hydration
  const today = useToday()
  const hostZone = useDefaultTimeZone()
  return <Report key={\`\${today} \${hostZone}\`} today={today} hostZone={hostZone} />
}

function Report({ today, hostZone }: { today: IsoDate; hostZone: string }) {
  const locale = useDefaultLocale()
  const [range, setRange] = useState<DateRange>({ start: addDays(today, -29), end: today })
  const [zone, setZone] = useState(hostZone)
  const [colour, setColour] = useState("#6366f1")
  const [rule, setRule] = useState("FREQ=WEEKLY;BYDAY=MO")
  const [sendAt, setSendAt] = useState<IsoTime | null>("08:00")
  const parsed = parseRRule(rule)
  return (
    <div className="flex flex-col gap-3 text-[13px]">
      <div className="flex flex-wrap items-center gap-2 rounded-lg border bg-card p-2">
        <span className="ps-1 font-medium">Revenue report</span>
        <span className="mx-1 h-4 w-px bg-border" />
        <DateRangePicker value={range} onChange={setRange} max={today} aria-label="Period" />
        <TimeZonePicker value={zone} onChange={setZone} aria-label="Report time zone" />
        <ColorPickerPopover value={colour} onChange={setColour} label="Series colour" />
      </div>
      <div className="grid gap-3 md:grid-cols-[1fr_16rem]">
        <section className="flex flex-col gap-2 rounded-lg border bg-card p-3" aria-label="Email schedule">
          <div className="flex items-center justify-between gap-2">
            <span className="font-medium">Email this report</span>
            {/* A caption, not a <label>: the picker is a segment group named by aria-label. */}
            <span className="flex items-center gap-1.5 text-muted-foreground">
              at <TimePicker value={sendAt} onChange={setSendAt} step={15} aria-label="Send time" />
            </span>
          </div>
          <RecurrenceEditor value={rule} onChange={setRule} start={today} renderFrequencySelect={(p) => (
            <Select id={p.id} aria-labelledby={p.labelId} items={p.options.map((o) => ({ id: o.value, label: o.label }))} value={p.value} onChange={(v) => { if (v !== null) p.onChange(v) }} disabled={p.disabled} className="h-7 w-40 text-[13px]" />
          )} />
        </section>
        <aside className="flex flex-col gap-1.5 rounded-lg border bg-card p-3 text-[12px]">
          <span className="text-[13px] font-medium">Saved as</span>
          <Row k="period" v={formatRange(range, locale)} />
          <Row k="zone" v={zone} />
          <Row k="colour" v={<span className="inline-flex items-center gap-1"><span className="size-3 rounded-sm ring-1 ring-foreground/15" style={{ background: colour }} />{colour}</span>} />
          <Row k="rrule" v={rule || "—"} />
          <Row k="sends" v={parsed ? \`\${summarizeRule(parsed, today, locale)}\${sendAt ? \`, \${sendAt}\` : ""}\` : "never"} />
        </aside>
      </div>
    </div>
  )
}

function Row({ k, v }: { k: string; v: ReactNode }) {
  return (
    <div className="grid grid-cols-[3.5rem_1fr] gap-2">
      <span className="font-mono text-muted-foreground">{k}</span>
      <span className="min-w-0 break-words tabular-nums">{v}</span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>c(()=>import(`./overview-report-BzdqiS-F.js`),[]));var E=[{name:`Calendar`,value:`IsoDate · IsoDate[] · DateRange`,what:`Single, multiple or range of days, whole weeks, month, quarter and year grids (one or a range); min, max, blocked days, several months, page behaviour, outside days, month and year drill-up, renderDay.`},{name:`DateInput · DatePicker`,value:`IsoDate · IsoDateTime · IsoInstant · IsoZoned · IsoTime · IsoMonth · IsoQuarter · IsoYear · ranges`,what:`One picker, eleven date modes (single, multiple, range, week, month, quarter, year and their ranges) plus time and time-range; granularity hour, minute or second for date-times and date-time ranges; a display zone (timeZone, a zone switch or a locked zone in the surface, the zone in the field, a second-zone hint, fixed offsets) with floating, instant or RFC 9557 zoned values; typed segments in every mode or free text with natural language (input="text"), a calendar popover, presets in every mode (rolling, pick and close or stay), compare periods, nights or days, open-ended ranges, one field or two, range ends dragged or moved with Shift+arrows, Apply / Cancel with confirm in every mode, rules as data with reasons (shown on the day, announced, checked on the server by the form kit), async dayData (prices) per month, onChange(value, details); compound parts and a headless useDatePicker.`},{name:`DateRangePicker`,value:`DateRange`,what:`A DatePicker preset: start and end fields, presets, two months, min and max length, Apply.`},{name:`MonthPicker · YearPicker`,value:`YYYY-MM · number`,what:`DatePicker presets in month and year mode: month and year grids in a popover.`},{name:`TimeInput · TimePicker · TimeList · TimeColumns`,value:`IsoTime`,what:`12- or 24-hour by locale or forced, seconds, a list or columns over one headless useTimePanel, steps per unit, blocked times, Now / Noon / End of day presets, a zone's real times on a DST day; TimePicker and DateTimePicker are DatePicker presets.`},{name:`DateTimePicker`,value:`IsoDateTime`,what:`One field with date and time segments; calendar and slots in one popover.`},{name:`TimeZonePicker`,value:`IANA zone · fixed offset`,what:`Search by city, region, abbreviation or offset; detected zone first; current offset and local time per row; fixed offsets (UTC+05:30) listed like cities; the DatePicker's zone switch.`},{name:`RecurrenceEditor`,value:`RRULE`,what:`Daily, weekly on days, monthly by date or weekday, yearly; ends never, after N, on a date; summary and next dates. Kitora's Select for the frequency by default, or your own control through renderFrequencySelect.`},{name:`ColorPicker · ColorPickerPopover`,value:`hex`,what:`Saturation/value area, hue and alpha, hex/RGB/HSL inputs, swatches, eyedropper where supported.`},{name:`NumberInput`,value:`number | null`,what:`Locale-aware typing (group and decimal separators, minus variants, currency, percent, unit), commit-on-blur formatting, step without float drift, large step, min and max, wheel when focused; a NumberFormatter adapter.`},{name:`InlineEdit · createInlineEdit`,value:`any (string preset)`,what:`Click, Enter or F2 to edit in place; Enter saves, Escape restores, blur saves or cancels; validate, async save with pending, a render slot for any editor.`},{name:`core`,value:`—`,what:`Framework-free date, range, segment, time, RRULE, time-zone, colour and number functions, and the inline-edit reducer; no React, no DOM.`}];function D(){return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(t,{title:`Pickers kit`,children:`Date, time and colour pickers for power users. Every value is plain data (ISO strings, an RRULE, a zone id, a hex), every field is typeable without opening its popover, and every label comes from Intl.`}),(0,x.jsx)(v,{n:1,title:`A scheduled report`,blurb:`The period with presets, the zone its days are cut in, the series colour, and when it is emailed. The right column shows what would be saved.`,code:T,children:(0,x.jsx)(y,{testId:`overview`,children:(0,x.jsx)(S,{})})}),(0,x.jsx)(v,{n:2,title:`Parts`,blurb:`What the kit exports from @kitora/pickers.`,children:(0,x.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,x.jsx)(`tbody`,{children:E.map(e=>(0,x.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,x.jsx)(`td`,{className:`py-1.5 pe-3 font-mono text-[12px] [overflow-wrap:anywhere] sm:whitespace-nowrap`,children:e.name}),(0,x.jsx)(`td`,{className:`py-1.5 pe-3 font-mono text-[12px] [overflow-wrap:anywhere] text-muted-foreground`,children:e.value}),(0,x.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{D as component};