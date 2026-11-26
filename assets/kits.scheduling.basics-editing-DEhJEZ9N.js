import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{g as n,p as r}from"./shared-CR9xge-6.js";import{c as i,i as a,l as o,n as s,t as c}from"./select-8usvpmkP.js";import{Bc as l,Cc as u,Ic as d,Wo as f}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as p}from"./example-BGnSQG2Y.js";import{A as m,_ as h,a as g,c as _,m as v,t as y}from"./-kits.scheduling.shared-ClwkOdTd.js";import{t as b}from"./edit-D7U_g1Rm.js";import{t as x}from"./time-grid-DdMyBhhK.js";var S=e(l(),1),C=d();function w(e,t){let n=m(e),r=(e,r,i=0)=>_(h(v(n,e),r*60+i),t);return{initial:[{id:`1`,title:`Drag me`,start:r(1,10),end:r(1,11),color:`violet`},{id:`2`,title:`Resize my edges`,start:r(2,13),end:r(2,14,30),color:`green`},{id:`3`,title:`Locked`,start:r(3,10),end:r(3,11),color:`slate`,readOnly:!0}]}}function T(){let e=f(),t=g(e);return(0,C.jsx)(E,{today:t,timeZone:e},`${t.getTime()} ${e}`)}function E({today:e,timeZone:t}){let{initial:n}=(0,S.useMemo)(()=>w(e,t),[e,t]),[r,i]=(0,S.useState)(n);return(0,C.jsx)(x,{events:r,date:e,scrollToHour:9,timeZone:t,onEventChange:e=>i(n=>b(n,e,{timeZone:t}))})}var D=`import { useMemo, useState } from "react"
import { useDefaultTimeZone } from "@kitora/primitives/react"
import { addDays, applyEventChange, atMinute, type CalendarEvent, fromZoned, startOfWeek, TimeGridView, useTodayDate } from "@kitora/scheduling"

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone); timed events are instants in \`timeZone\`. */
function demoData(today: Date, timeZone: string) {
  // Dates relative to this week's Monday, so the demo always has something around today.
  const monday = startOfWeek(today)
  const at = (offset: number, hour: number, minute = 0) => fromZoned(atMinute(addDays(monday, offset), hour * 60 + minute), timeZone)

  const initial: CalendarEvent[] = [
    { id: "1", title: "Drag me", start: at(1, 10), end: at(1, 11), color: "violet" },
    { id: "2", title: "Resize my edges", start: at(2, 13), end: at(2, 14, 30), color: "green" },
    { id: "3", title: "Locked", start: at(3, 10), end: at(3, 11), color: "slate", readOnly: true },
  ]
  return { initial }
}

// Drag an event to move it (across days too), drag its top or bottom edge to resize.
// Focus one and press Alt+↑/↓ (Shift to resize), Alt+←/→ for days. Esc cancels a drag.
// The view never owns the data: every edit arrives as a change that applyEventChange folds in.
export function BasicDragEdit() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const timeZone = useDefaultTimeZone()
  const today = useTodayDate(timeZone)
  return <Demo key={\`\${today.getTime()} \${timeZone}\`} today={today} timeZone={timeZone} />
}

function Demo({ today, timeZone }: { today: Date; timeZone: string }) {
  const { initial } = useMemo(() => demoData(today, timeZone), [today, timeZone])
  const [events, setEvents] = useState(initial)
  return (
    <TimeGridView
      events={events}
      date={today}
      scrollToHour={9}
      timeZone={timeZone}
      onEventChange={(change) => setEvents((prev) => applyEventChange(prev, change, { timeZone }))}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>u(()=>import(`./drag-edit-BinwKby-.js`),[]));function O(){let[e,t]=(0,S.useState)([]),n=f();return(0,C.jsx)(x,{events:e,date:g(n),scrollToHour:9,timeZone:n,onSelectSlot:e=>t(t=>[...t,{id:String(t.length+1),title:`New event ${t.length+1}`,start:e.allDay?e.start:_(e.start,n),end:e.allDay?e.end:_(e.end,n),allDay:e.allDay,color:`blue`}])})}var k=`import { useState } from "react"
import { useDefaultTimeZone } from "@kitora/primitives/react"
import { fromZoned, TimeGridView, useTodayDate, type CalendarEvent } from "@kitora/scheduling"

// Drag on empty space (or in the all-day row) to draw a range; a click picks one slot.
// onSelectSlot hands you wall times in the display zone: turn them into instants with fromZoned.
export function BasicDragCreate() {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  // the reader's zone and today in it: the build's until hydration (so the server HTML matches), then the visitor's
  const timeZone = useDefaultTimeZone()
  const today = useTodayDate(timeZone)
  return (
    <TimeGridView
      events={events}
      date={today}
      scrollToHour={9}
      timeZone={timeZone}
      onSelectSlot={(slot) => setEvents((prev) => [...prev, {
        id: String(prev.length + 1),
        title: \`New event \${prev.length + 1}\`,
        start: slot.allDay ? slot.start : fromZoned(slot.start, timeZone),
        end: slot.allDay ? slot.end : fromZoned(slot.end, timeZone),
        allDay: slot.allDay,
        color: "blue",
      }])}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>u(()=>import(`./drag-create-C8CxiFWe.js`),[]));var A=[{value:`occurrence`,label:`only this event`},{value:`series`,label:`the whole series`}];function j(e,t){let n=m(e),r=(e,r,i=0)=>_(h(v(n,e),r*60+i),t);return{initial:[{id:`standup`,title:`Standup`,start:r(0,9,30),end:r(0,10),color:`slate`,rrule:`FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR`},{id:`gym`,title:`Gym`,start:r(0,18),end:r(0,19),color:`green`,rrule:`FREQ=DAILY;INTERVAL=2;COUNT=10`}]}}function M(){let e=f(),t=g(e);return(0,C.jsx)(N,{today:t,timeZone:e},`${t.getTime()} ${e}`)}function N({today:e,timeZone:t}){let{initial:l}=(0,S.useMemo)(()=>j(e,t),[e,t]),[u,d]=(0,S.useState)(l),[f,p]=(0,S.useState)(`occurrence`);return(0,C.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 border-b px-3 py-1.5 text-[12px]`,children:[(0,C.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,C.jsx)(`span`,{id:`recurring-scope`,children:`Drag moves`}),(0,C.jsxs)(c,{items:A,value:f,onValueChange:e=>e!==null&&p(e),children:[(0,C.jsx)(i,{size:`sm`,"aria-labelledby":`recurring-scope`,className:`text-[12px]`,children:(0,C.jsx)(o,{})}),(0,C.jsx)(s,{alignItemWithTrigger:!1,children:A.map(e=>(0,C.jsx)(a,{value:e.value,children:e.label},e.value))})]})]}),u.filter(e=>e.rrule).map(e=>{let t=e.rrule?n(e.rrule):void 0;return(0,C.jsxs)(`span`,{className:`text-muted-foreground`,children:[(0,C.jsx)(`b`,{className:`font-medium text-foreground`,children:e.title}),`: `,t?r(t):e.rrule]},e.id)})]}),(0,C.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,C.jsx)(x,{events:u,date:e,scrollToHour:9,timeZone:t,onEventChange:e=>d(n=>b(n,e,{timeZone:t,scope:f}))})})]})}var P=`import { useMemo, useState } from "react"
import { useDefaultTimeZone } from "@kitora/primitives/react"
import { addDays, applyEventChange, atMinute, type CalendarEvent, describeRRule, type EditScope, fromZoned, parseRRule, startOfWeek, TimeGridView, useTodayDate } from "@kitora/scheduling"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

const SCOPES: readonly { value: EditScope; label: string }[] = [
  { value: "occurrence", label: "only this event" },
  { value: "series", label: "the whole series" },
]

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone); timed events are instants in \`timeZone\`. */
function demoData(today: Date, timeZone: string) {
  // Dates relative to this week's Monday, so the demo always has something around today.
  const monday = startOfWeek(today)
  const at = (offset: number, hour: number, minute = 0) => fromZoned(atMinute(addDays(monday, offset), hour * 60 + minute), timeZone)

  const initial: CalendarEvent[] = [
    { id: "standup", title: "Standup", start: at(0, 9, 30), end: at(0, 10), color: "slate", rrule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
    { id: "gym", title: "Gym", start: at(0, 18), end: at(0, 19), color: "green", rrule: "FREQ=DAILY;INTERVAL=2;COUNT=10" },
  ]

  return { initial }
}

// An event with an \`rrule\` expands into occurrences inside the kit. Dragging one occurrence
// either moves the whole series or detaches just that one (an EXDATE plus a one-off copy).
export function BasicRecurring() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const timeZone = useDefaultTimeZone()
  const today = useTodayDate(timeZone)
  return <Demo key={\`\${today.getTime()} \${timeZone}\`} today={today} timeZone={timeZone} />
}

function Demo({ today, timeZone }: { today: Date; timeZone: string }) {
  const { initial } = useMemo(() => demoData(today, timeZone), [today, timeZone])
  const [events, setEvents] = useState(initial)
  const [scope, setScope] = useState<EditScope>("occurrence")
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-wrap items-center gap-3 border-b px-3 py-1.5 text-[12px]">
        <span className="flex items-center gap-1.5">
          <span id="recurring-scope">Drag moves</span>
          <Select items={SCOPES} value={scope} onValueChange={(next: EditScope | null) => next !== null && setScope(next)}>
            <SelectTrigger size="sm" aria-labelledby="recurring-scope" className="text-[12px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              {SCOPES.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </span>
        {events.filter((e) => e.rrule).map((e) => {
          const rule = e.rrule ? parseRRule(e.rrule) : undefined
          return <span key={e.id} className="text-muted-foreground"><b className="font-medium text-foreground">{e.title}</b>: {rule ? describeRRule(rule) : e.rrule}</span>
        })}
      </div>
      <div className="min-h-0 flex-1">
        <TimeGridView events={events} date={today} scrollToHour={9} timeZone={timeZone} onEventChange={(change) => setEvents((prev) => applyEventChange(prev, change, { timeZone, scope }))} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>u(()=>import(`./recurring-DxS69ytz.js`),[]));var F=[`America/Los_Angeles`,`America/New_York`,`Europe/London`,`Asia/Kolkata`,`Asia/Tokyo`];function I(e){let t=m(e),n=(e,n,r,i)=>_(h(v(t,e),n*60+r),i);return[{id:`standup`,title:`NY standup`,start:n(0,9,30,`America/New_York`),end:n(0,10,0,`America/New_York`),timeZone:`America/New_York`,rrule:`FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR`,color:`violet`},{id:`london`,title:`London review`,start:n(2,15,0,`Europe/London`),end:n(2,16,0,`Europe/London`),color:`rose`},{id:`tokyo`,title:`Tokyo sync`,start:n(3,9,0,`Asia/Tokyo`),end:n(3,10,0,`Asia/Tokyo`),color:`cyan`}]}function L(){let[e,t]=(0,S.useState)(`America/New_York`),n=g(),r=(0,S.useMemo)(()=>I(n),[n]);return(0,C.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,C.jsxs)(`div`,{className:`flex items-center gap-2 border-b px-3 py-1.5 text-[12px]`,children:[`Show in`,(0,C.jsxs)(c,{items:F.map(e=>({value:e,label:e.replace(`_`,` `)})),value:e,onValueChange:e=>e!==null&&t(e),searchable:!0,children:[(0,C.jsx)(i,{size:`sm`,"aria-label":`Time zone`,className:`text-[12px]`,children:(0,C.jsx)(o,{})}),(0,C.jsx)(s,{searchPlaceholder:`Search time zones`,emptyText:`No time zone matches`,children:F.map(e=>(0,C.jsx)(a,{value:e,children:e.replace(`_`,` `)},e))})]})]}),(0,C.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,C.jsx)(x,{events:r,date:n,timeZone:e,scrollToHour:6,hourHeight:36,showAllDay:!1})})]})}var R=`import { useMemo, useState } from "react"
import { addDays, atMinute, fromZoned, startOfWeek, TimeGridView, useTodayDate, type CalendarEvent } from "@kitora/scheduling"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

const ZONES = ["America/Los_Angeles", "America/New_York", "Europe/London", "Asia/Kolkata", "Asia/Tokyo"] as const

// Events are instants. The same week, drawn in another zone, slides along the hour axis.
// \`standup\` repeats in New York time, so it stays at 9:30 there across a DST change.
function eventsAround(today: Date): CalendarEvent[] {
  // Dates relative to this week's Monday, so the demo always has something around today.
  const monday = startOfWeek(today)
  /** \`hour:minute\` on Monday + \`day\`, as an instant in \`timeZone\`. */
  const at = (offset: number, hour: number, minute: number, timeZone: string) => fromZoned(atMinute(addDays(monday, offset), hour * 60 + minute), timeZone)
  return [
    { id: "standup", title: "NY standup", start: at(0, 9, 30, "America/New_York"), end: at(0, 10, 0, "America/New_York"), timeZone: "America/New_York", rrule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", color: "violet" },
    { id: "london", title: "London review", start: at(2, 15, 0, "Europe/London"), end: at(2, 16, 0, "Europe/London"), color: "rose" },
    { id: "tokyo", title: "Tokyo sync", start: at(3, 9, 0, "Asia/Tokyo"), end: at(3, 10, 0, "Asia/Tokyo"), color: "cyan" },
  ]
}

export function BasicTimeZones() {
  const [timeZone, setTimeZone] = useState<string>("America/New_York")
  // today in the reader's zone: the build's until hydration (so the server HTML matches), then the visitor's
  const today = useTodayDate()
  const events = useMemo(() => eventsAround(today), [today])
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b px-3 py-1.5 text-[12px]">
        Show in
        <Select items={ZONES.map((z) => ({ value: z, label: z.replace("_", " ") }))} value={timeZone} onValueChange={(next: string | null) => next !== null && setTimeZone(next)} searchable>
          <SelectTrigger size="sm" aria-label="Time zone" className="text-[12px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent searchPlaceholder="Search time zones" emptyText="No time zone matches">
            {ZONES.map((z) => (
              <SelectItem key={z} value={z}>
                {z.replace("_", " ")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="min-h-0 flex-1">
        <TimeGridView events={events} date={today} timeZone={timeZone} scrollToHour={6} hourHeight={36} showAllDay={false} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>u(()=>import(`./time-zones-wwvJcEhE.js`),[]));function z(){return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(t,{title:`Basics: editing`,children:"The views never own the data. Every drag, resize or keyboard nudge arrives as a change; `applyEventChange` folds it into your events, time zones and series included."}),(0,C.jsx)(p,{n:1,title:`Drag to move and resize`,blurb:`Drag an event, or its top or bottom edge. Focus one and use Alt+arrows. Esc cancels a drag. The grey one is read-only.`,code:D,children:(0,C.jsx)(y,{testId:`drag-edit`,height:460,children:(0,C.jsx)(T,{})})}),(0,C.jsx)(p,{n:2,title:`Drag to create`,blurb:`Drag on empty space, or across the all-day row. A click picks one slot.`,code:k,children:(0,C.jsx)(y,{testId:`drag-create`,height:460,children:(0,C.jsx)(O,{})})}),(0,C.jsx)(p,{n:3,title:`Recurring events`,blurb:"An `rrule` expands inside the kit. Drag one occurrence: move the whole series, or just that one.",code:P,children:(0,C.jsx)(y,{testId:`recurring`,height:480,children:(0,C.jsx)(M,{})})}),(0,C.jsx)(p,{n:4,title:`Time zones`,blurb:`The same events drawn in another zone. The New York standup repeats in New York time.`,code:R,children:(0,C.jsx)(y,{testId:`time-zones`,height:460,children:(0,C.jsx)(L,{})})})]})}export{z as component};