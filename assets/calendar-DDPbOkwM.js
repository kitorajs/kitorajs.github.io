import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{i as n,r,t as i}from"./calendar-Ct6NyCO2.js";import{Bc as a,Cc as o,Ic as s}from"./index-B9ukmIN1.js";var c=e({CalendarQuarterGrid:()=>d}),l=t(a(),1),u=s();function d(){let[e,t]=(0,l.useState)(null);return(0,u.jsxs)(`div`,{className:`flex flex-col items-center gap-3 text-[13px]`,children:[(0,u.jsx)(r,{value:e,onChange:t,className:`rounded-md border border-border p-2`}),(0,u.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`quarter `,(0,u.jsx)(`code`,{"data-demo-value":`quarter`,children:JSON.stringify(e)})]})]})}var f=e({CalendarSingleDate:()=>p});function p(){let[e,t]=(0,l.useState)(null);return(0,u.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,u.jsx)(i,{value:e,onChange:t,"aria-label":`Date`,className:`rounded-md border border-border p-2`})})}var m=e({CalendarWeekSelection:()=>h});function h(){let[e,t]=(0,l.useState)(null),[r,i]=(0,l.useState)(null),[a,o]=(0,l.useState)();return(0,u.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,u.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-3`,children:[(0,u.jsx)(n,{locale:`en-US`,value:e,onChange:(e,n)=>{t(e),o(n.isoWeek)},"aria-label":`Week (en-US)`,className:`rounded-md border border-border p-2`}),(0,u.jsx)(n,{locale:`de-DE`,value:r,onChange:(e,t)=>{i(e),o(t.isoWeek)},"aria-label":`Woche (de-DE)`,className:`rounded-md border border-border p-2`})]}),(0,u.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`en-US `,(0,u.jsx)(`code`,{"data-demo-value":`us`,children:JSON.stringify(e)}),` · de-DE `,(0,u.jsx)(`code`,{"data-demo-value":`de`,children:JSON.stringify(r)}),` · ISO week `,(0,u.jsx)(`code`,{"data-demo-value":`iso`,children:a??`–`})]})]})}var g=`import { useState } from "react"
import { QuarterGrid } from "@kitora/pickers/ui"
import type { IsoQuarter } from "@kitora/pickers/core"

export function CalendarQuarterGrid() {
  const [quarter, setQuarter] = useState<IsoQuarter | null>(null)
  return (
    <div className="flex flex-col items-center gap-3 text-[13px]">
      {/* four quarters of one year in a row; the arrows beside the caption, or PageUp and PageDown, page the year */}
      <QuarterGrid value={quarter} onChange={setQuarter} className="rounded-md border border-border p-2" />
      <span className="text-muted-foreground tabular-nums">
        quarter <code data-demo-value="quarter">{JSON.stringify(quarter)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>o(()=>import(`./quarter-grid-6tX-ZJFV.js`),[]));var _=`import { useState } from "react"
import { Calendar, type IsoDate } from "@kitora/pickers"

export function CalendarSingleDate() {
  const [date, setDate] = useState<IsoDate | null>(null)
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Calendar value={date} onChange={setDate} aria-label="Date" className="rounded-md border border-border p-2" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>o(()=>import(`./single-date-pW44OTlT.js`),[]));var v=`import { useState } from "react"
import { WeekGrid } from "@kitora/pickers/ui"
import type { DateRange } from "@kitora/pickers/core"

export function CalendarWeekSelection() {
  const [us, setUs] = useState<DateRange | null>(null)
  const [de, setDe] = useState<DateRange | null>(null)
  const [isoWeek, setIsoWeek] = useState<string | undefined>()
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-start justify-center gap-3">
        {/* a click on any day picks its week; hovering a day bands the row a click would pick */}
        <WeekGrid
          locale="en-US"
          value={us}
          onChange={(week, details) => {
            setUs(week)
            setIsoWeek(details.isoWeek)
          }}
          aria-label="Week (en-US)"
          className="rounded-md border border-border p-2"
        />
        {/* the locale's week: Monday to Sunday in Germany */}
        <WeekGrid
          locale="de-DE"
          value={de}
          onChange={(week, details) => {
            setDe(week)
            setIsoWeek(details.isoWeek)
          }}
          aria-label="Woche (de-DE)"
          className="rounded-md border border-border p-2"
        />
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        en-US <code data-demo-value="us">{JSON.stringify(us)}</code> · de-DE <code data-demo-value="de">{JSON.stringify(de)}</code> · ISO week <code data-demo-value="iso">{isoWeek ?? "–"}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>o(()=>import(`./week-selection-CVSta5sw.js`),[]));var y={"./demos/calendar/quarter-grid.tsx":c,"./demos/calendar/single-date.tsx":f,"./demos/calendar/week-selection.tsx":m},b={"./demos/calendar/quarter-grid.tsx":g,"./demos/calendar/single-date.tsx":_,"./demos/calendar/week-selection.tsx":v};export{y as modules,b as sources};