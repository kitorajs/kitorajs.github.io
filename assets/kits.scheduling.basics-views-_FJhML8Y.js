import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,c as n,i as r,l as i,n as a,o,r as s,s as c,t as l}from"./event-calendar-DvwdqDwF.js";import{s as u}from"./kit-docs-Cf27Kpa-.js";import{Ec as d,Go as f,Ko as p,Uc as m,zc as h}from"./index-BZuUy872.js";import{n as g}from"./toolbar-CGPRJGUb.js";import"./kit-gallery-BBavj2rC.js";import{t as _}from"./example-B67lLz1F.js";import{A as v,_ as y,a as b,b as x,c as S,m as C,n as w,s as ee,t as T,x as te}from"./-kits.scheduling.shared-Dl6k0DBz.js";import{t as ne}from"./edit-D8aL9vAv.js";import{t as re}from"./segmented-WFOcC-Xg.js";import{t as E}from"./month-DaB1iQ29.js";import{t as D}from"./time-grid-22fkxPw_.js";var O=e(m(),1),k=h();function A(e,t){let n=v(e),r=(e,r,i=0)=>S(y(C(n,e),r*60+i),t);return{events:[{id:`1`,title:`Planning`,start:r(0,10),end:r(0,11,30),color:`violet`},{id:`2`,title:`Design review`,start:r(1,11),end:r(1,12),color:`rose`},{id:`3`,title:`1:1`,start:r(1,11,30),end:r(1,12),color:`cyan`},{id:`4`,title:`Focus time`,start:r(2,14),end:r(2,17),color:`green`},{id:`5`,title:`Offsite`,start:r(3,0),end:r(5,0),allDay:!0,color:`amber`}]}}function j(){let e=p(),t=b(e),{events:n}=(0,O.useMemo)(()=>A(t,e),[t,e]);return(0,k.jsx)(D,{events:n,date:t,scrollToHour:9})}var M=`import { useMemo } from "react"
import { useDefaultTimeZone } from "@kitora/primitives/react"
import { addDays, atMinute, type CalendarEvent, fromZoned, startOfWeek, TimeGridView, useTodayDate } from "@kitora/scheduling"

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone); timed events are instants in \`timeZone\`. */
function demoData(today: Date, timeZone: string) {
  // Dates relative to this week's Monday, so the demo always has something around today.
  const monday = startOfWeek(today)
  const at = (offset: number, hour: number, minute = 0) => fromZoned(atMinute(addDays(monday, offset), hour * 60 + minute), timeZone)

  const events: CalendarEvent[] = [
    { id: "1", title: "Planning", start: at(0, 10), end: at(0, 11, 30), color: "violet" },
    { id: "2", title: "Design review", start: at(1, 11), end: at(1, 12), color: "rose" },
    { id: "3", title: "1:1", start: at(1, 11, 30), end: at(1, 12), color: "cyan" },
    { id: "4", title: "Focus time", start: at(2, 14), end: at(2, 17), color: "green" },
    { id: "5", title: "Offsite", start: at(3, 0), end: at(5, 0), allDay: true, color: "amber" },
  ]
  return { events }
}

// The smallest week: a list of events and an anchor date. Overlaps sit side by side,
// all-day events go in the row on top, and the red line is now.
export function BasicWeekView() {
  // today in the reader's zone: the build's until hydration (so the server HTML matches), then the visitor's
  const timeZone = useDefaultTimeZone()
  const today = useTodayDate(timeZone)
  const { events } = useMemo(() => demoData(today, timeZone), [today, timeZone])
  return <TimeGridView events={events} date={today} scrollToHour={9} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>d(()=>import(`./week-view-Dk0cIyPm.js`),[]));function N(e,t){let n=v(e),r=(e,r,i=0)=>S(y(C(n,e),r*60+i),t),i=e=>C(n,e);return{events:[{id:`1`,title:`Sprint planning`,start:r(0,10),end:r(0,11),color:`violet`},{id:`2`,title:`Release`,start:i(1),end:i(2),allDay:!0,color:`blue`},{id:`3`,title:`Offsite`,start:i(3),end:i(6),allDay:!0,color:`green`},{id:`4`,title:`Standup`,start:r(0,9,30),end:r(0,9,45),color:`slate`,rrule:`FREQ=WEEKLY;BYDAY=MO,WE,FR`},{id:`5`,title:`Vacation`,start:i(10),end:i(15),allDay:!0,color:`cyan`}]}}function P(){let e=p(),t=b(e),{events:n}=(0,O.useMemo)(()=>N(t,e),[t,e]);return(0,k.jsx)(E,{events:n,date:t})}var F=`import { useMemo } from "react"
import { useDefaultTimeZone } from "@kitora/primitives/react"
import { addDays, atMinute, type CalendarEvent, fromZoned, MonthView, startOfWeek, useTodayDate } from "@kitora/scheduling"

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone); timed events are instants in \`timeZone\`. */
function demoData(today: Date, timeZone: string) {
  // Dates relative to this week's Monday, so the demo always has something around today.
  const monday = startOfWeek(today)
  const at = (offset: number, hour: number, minute = 0) => fromZoned(atMinute(addDays(monday, offset), hour * 60 + minute), timeZone)
  const day = (n: number) => addDays(monday, n)

  const events: CalendarEvent[] = [
    { id: "1", title: "Sprint planning", start: at(0, 10), end: at(0, 11), color: "violet" },
    { id: "2", title: "Release", start: day(1), end: day(2), allDay: true, color: "blue" },
    { id: "3", title: "Offsite", start: day(3), end: day(6), allDay: true, color: "green" },
    { id: "4", title: "Standup", start: at(0, 9, 30), end: at(0, 9, 45), color: "slate", rrule: "FREQ=WEEKLY;BYDAY=MO,WE,FR" },
    { id: "5", title: "Vacation", start: day(10), end: day(15), allDay: true, color: "cyan" },
  ]
  return { events }
}

// Month view: multi-day events become bars across the cells, timed ones a dot and a time,
// and a repeating event shows on every day its rule matches.
export function BasicMonthView() {
  // today in the reader's zone: the build's until hydration (so the server HTML matches), then the visitor's
  const timeZone = useDefaultTimeZone()
  const today = useTodayDate(timeZone)
  const { events } = useMemo(() => demoData(today, timeZone), [today, timeZone])
  return <MonthView events={events} date={today} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>d(()=>import(`./month-view-Dm94RxBJ.js`),[]));function I(e,t){let n=v(e),r=(e,r,i=0)=>S(y(C(n,e),r*60+i),t),i=(e.getDay()+6)%7;return{events:[{id:`1`,title:`Standup`,start:r(i,9,30),end:r(i,9,45),color:`slate`,location:`Zoom`},{id:`2`,title:`Customer interview`,start:r(i,10),end:r(i,11),color:`rose`,location:`Room 4`},{id:`3`,title:`Pairing`,start:r(i,10,30),end:r(i,12),color:`blue`},{id:`4`,title:`Lunch`,start:r(i,12,30),end:r(i,13,15),color:`amber`}]}}function L(){let e=p(),t=b(e),{events:n}=(0,O.useMemo)(()=>I(t,e),[t,e]);return(0,k.jsx)(D,{events:n,date:t,days:1,hourHeight:56,slotMinutes:15,scrollToHour:9})}var R=`import { useMemo } from "react"
import { useDefaultTimeZone } from "@kitora/primitives/react"
import { addDays, atMinute, type CalendarEvent, fromZoned, startOfWeek, TimeGridView, useTodayDate } from "@kitora/scheduling"

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone); timed events are instants in \`timeZone\`. */
function demoData(today: Date, timeZone: string) {
  // Dates relative to this week's Monday, so the demo always has something around today.
  const monday = startOfWeek(today)
  const at = (offset: number, hour: number, minute = 0) => fromZoned(atMinute(addDays(monday, offset), hour * 60 + minute), timeZone)

  const offset = (today.getDay() + 6) % 7

  const events: CalendarEvent[] = [
    { id: "1", title: "Standup", start: at(offset, 9, 30), end: at(offset, 9, 45), color: "slate", location: "Zoom" },
    { id: "2", title: "Customer interview", start: at(offset, 10), end: at(offset, 11), color: "rose", location: "Room 4" },
    { id: "3", title: "Pairing", start: at(offset, 10, 30), end: at(offset, 12), color: "blue" },
    { id: "4", title: "Lunch", start: at(offset, 12, 30), end: at(offset, 13, 15), color: "amber" },
  ]
  return { events }
}

// One column is a day view: \`days={1}\`. \`hourHeight\` and \`slotMinutes\` set the scale.
export function BasicDayView() {
  // today in the reader's zone: the build's until hydration (so the server HTML matches), then the visitor's
  const timeZone = useDefaultTimeZone()
  const today = useTodayDate(timeZone)
  const { events } = useMemo(() => demoData(today, timeZone), [today, timeZone])
  return <TimeGridView events={events} date={today} days={1} hourHeight={56} slotMinutes={15} scrollToHour={9} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>d(()=>import(`./day-view-DCN1Kmji.js`),[]));function z(e,t){let n=v(e),r=(e,r,i=0)=>S(y(C(n,e),r*60+i),t),i=e=>C(n,e);return{events:[{id:`1`,title:`Standup`,start:r(0,9,30),end:r(0,9,45),color:`slate`,rrule:`FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR`,location:`Zoom`},{id:`2`,title:`Design review`,start:r(1,11),end:r(1,12),color:`rose`,location:`Figma`},{id:`3`,title:`Offsite`,start:i(3),end:i(5),allDay:!0,color:`green`},{id:`4`,title:`Customer demo`,start:r(3,16),end:r(3,17),color:`blue`,location:`Acme Corp`}]}}function B(){let e=p(),t=b(e),{events:n}=(0,O.useMemo)(()=>z(t,e),[t,e]);return(0,k.jsx)(i,{events:n,date:t,days:10})}var V=`import { useMemo } from "react"
import { useDefaultTimeZone } from "@kitora/primitives/react"
import { addDays, AgendaView, atMinute, type CalendarEvent, fromZoned, startOfWeek, useTodayDate } from "@kitora/scheduling"

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone); timed events are instants in \`timeZone\`. */
function demoData(today: Date, timeZone: string) {
  // Dates relative to this week's Monday, so the demo always has something around today.
  const monday = startOfWeek(today)
  const at = (offset: number, hour: number, minute = 0) => fromZoned(atMinute(addDays(monday, offset), hour * 60 + minute), timeZone)
  const day = (n: number) => addDays(monday, n)

  const events: CalendarEvent[] = [
    { id: "1", title: "Standup", start: at(0, 9, 30), end: at(0, 9, 45), color: "slate", rrule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", location: "Zoom" },
    { id: "2", title: "Design review", start: at(1, 11), end: at(1, 12), color: "rose", location: "Figma" },
    { id: "3", title: "Offsite", start: day(3), end: day(5), allDay: true, color: "green" },
    { id: "4", title: "Customer demo", start: at(3, 16), end: at(3, 17), color: "blue", location: "Acme Corp" },
  ]
  return { events }
}

// The agenda lists the next \`days\` days, skipping empty ones. ↑/↓ walk the rows.
export function BasicAgendaView() {
  // today in the reader's zone: the build's until hydration (so the server HTML matches), then the visitor's
  const timeZone = useDefaultTimeZone()
  const today = useTodayDate(timeZone)
  const { events } = useMemo(() => demoData(today, timeZone), [today, timeZone])
  return <AgendaView events={events} date={today} days={10} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>d(()=>import(`./agenda-view-Ct7j50v0.js`),[]));function H(e,t){let n=v(e),r=(e,r,i=0)=>S(y(C(n,e),r*60+i),t);return{events:[{id:`1`,title:`Planning`,start:r(0,10),end:r(0,11,30),color:`violet`},{id:`2`,title:`Design review`,start:r(1,11),end:r(1,12),color:`rose`},{id:`3`,title:`Focus time`,start:r(2,14),end:r(2,17),color:`green`},{id:`4`,title:`Offsite`,start:C(n,3),end:C(n,5),allDay:!0,color:`amber`}]}}function U(){let e=p(),t=b(e);return(0,k.jsx)(W,{today:t,timeZone:e},`${t.getTime()} ${e}`)}function W({today:e,timeZone:t}){let{events:n}=(0,O.useMemo)(()=>H(e,t),[e,t]);return(0,k.jsxs)(l.Root,{defaultEvents:n,defaultView:`week`,views:[`week`,`day`,`agenda`],createEvent:()=>({id:crypto.randomUUID(),title:`New event`,color:`cyan`}),classNames:{selected:`ring-2 ring-primary`},children:[(0,k.jsxs)(l.Toolbar,{className:`justify-between bg-muted/30`,children:[(0,k.jsx)(l.Title,{className:`w-56`}),(0,k.jsx)(l.ViewSwitcher,{labels:{week:`7 days`,day:`1 day`,agenda:`List`}}),(0,k.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,k.jsx)(l.Prev,{}),(0,k.jsx)(l.Today,{children:`This week`}),(0,k.jsx)(l.Next,{})]})]}),(0,k.jsx)(l.View,{})]})}var G=`import { useMemo } from "react"
import { useDefaultTimeZone } from "@kitora/primitives/react"
import { addDays, atMinute, type CalendarEvent, EventCalendar, fromZoned, startOfWeek, useTodayDate } from "@kitora/scheduling"

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone); timed events are instants in \`timeZone\`. */
function demoData(today: Date, timeZone: string) {
  // Dates relative to this week's Monday, so the demo always has something around today.
  const monday = startOfWeek(today)
  const at = (offset: number, hour: number, minute = 0) => fromZoned(atMinute(addDays(monday, offset), hour * 60 + minute), timeZone)

  const events: CalendarEvent[] = [
    { id: "1", title: "Planning", start: at(0, 10), end: at(0, 11, 30), color: "violet" },
    { id: "2", title: "Design review", start: at(1, 11), end: at(1, 12), color: "rose" },
    { id: "3", title: "Focus time", start: at(2, 14), end: at(2, 17), color: "green" },
    { id: "4", title: "Offsite", start: addDays(monday, 3), end: addDays(monday, 5), allDay: true, color: "amber" },
  ]
  return { events }
}

// EventCalendar rebuilt from its public parts, rearranged: the title on the left, the view
// switcher in the middle, the step buttons and Today on the right. \`defaultEvents\` makes the
// Root own the list, so drags, resizes and Delete just work; \`createEvent\` turns a range drawn
// on the grid into a new event. \`classNames\` styles the views' parts.
export function ComposeYourOwn() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const timeZone = useDefaultTimeZone()
  const today = useTodayDate(timeZone)
  return <Demo key={\`\${today.getTime()} \${timeZone}\`} today={today} timeZone={timeZone} />
}

function Demo({ today, timeZone }: { today: Date; timeZone: string }) {
  const { events } = useMemo(() => demoData(today, timeZone), [today, timeZone])
  return (
    <EventCalendar.Root
      defaultEvents={events}
      defaultView="week"
      views={["week", "day", "agenda"]}
      createEvent={() => ({ id: crypto.randomUUID(), title: "New event", color: "cyan" })}
      classNames={{ selected: "ring-2 ring-primary" }}
    >
      <EventCalendar.Toolbar className="justify-between bg-muted/30">
        <EventCalendar.Title className="w-56" />
        <EventCalendar.ViewSwitcher labels={{ week: "7 days", day: "1 day", agenda: "List" }} />
        <div className="flex items-center gap-1">
          <EventCalendar.Prev />
          <EventCalendar.Today>This week</EventCalendar.Today>
          <EventCalendar.Next />
        </div>
      </EventCalendar.Toolbar>
      <EventCalendar.View />
    </EventCalendar.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>d(()=>import(`./compose-your-own-Clf5sPO0.js`),[]));var K=[`Priya`,`Sam`,`Ana`],q={load:async(e,t)=>(await new Promise(e=>setTimeout(e,400)),t.aborted?[]:x(e.start,te(e.start,e.end)).map(e=>{let t=K[Math.abs(Math.floor(e.getTime()/864e5))%K.length];return{id:`oncall-${e.toDateString()}`,title:`On call: ${t}`,start:y(e,480),end:y(e,1080),color:`amber`,readOnly:!0}}))};function J(){let e=f();return(0,O.useMemo)(()=>{let t=ee({hour12:!1,locale:e}),n=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`;return{...t,title:(e,t,r)=>`${n(r.start)} → ${n(C(r.end,-1))}`}},[e])}function Y(){let{status:e}=s();return(0,k.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,"data-testid":`source-status`,children:e===`loading`?`Loading…`:e===`error`?`Could not load`:`Up to date`})}function X(){let e=J();return(0,k.jsxs)(l.Root,{source:q,formatter:e,defaultView:`week`,views:[`week`,`month`],children:[(0,k.jsx)(l.Toolbar,{extra:(0,k.jsx)(Y,{})}),(0,k.jsx)(l.View,{})]})}var Z=`import { useMemo } from "react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { addDays, atMinute, EventCalendar, dayRange, diffDays, intlFormatter, useEventCalendarContext, type CalendarEvent, type CalendarFormatter, type EventSource } from "@kitora/scheduling"

const PEOPLE = ["Priya", "Sam", "Ana"] as const

// A custom EventSource: an on-call rota computed per visible range, with a fake network delay.
// Swap the body of \`load\` for a fetch to your API; the Root aborts it when the range changes.
const rotaSource: EventSource = {
  load: async (range, signal) => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    if (signal.aborted) return []
    return dayRange(range.start, diffDays(range.start, range.end)).map((day): CalendarEvent => {
      const person = PEOPLE[Math.abs(Math.floor(day.getTime() / 86_400_000)) % PEOPLE.length]
      return { id: \`oncall-\${day.toDateString()}\`, title: \`On call: \${person}\`, start: atMinute(day, 8 * 60), end: atMinute(day, 18 * 60), color: "amber", readOnly: true }
    })
  },
}

// A custom formatter: the default Intl one, with a 24-hour clock and an ISO-style title.
function useHouseFormatter(): CalendarFormatter {
  // the reader's locale (the build's until hydration, so the server HTML matches)
  const locale = useDefaultLocale()
  return useMemo(() => {
    const base = intlFormatter({ hour12: false, locale })
    const iso = (d: Date) => \`\${d.getFullYear()}-\${String(d.getMonth() + 1).padStart(2, "0")}-\${String(d.getDate()).padStart(2, "0")}\`
    return { ...base, title: (_view, _date, range) => \`\${iso(range.start)} → \${iso(addDays(range.end, -1))}\` }
  }, [locale])
}

// A part of your own, reading the Root's context: the source's loading state.
function SourceStatus() {
  const { status } = useEventCalendarContext()
  return <span className="text-[12px] text-muted-foreground" data-testid="source-status">{status === "loading" ? "Loading…" : status === "error" ? "Could not load" : "Up to date"}</span>
}

// Events from an adapter instead of a list: \`source\` loads each visible range on demand, and
// \`formatter\` replaces every label the calendar draws.
export function CustomSource() {
  const formatter = useHouseFormatter()
  return (
    <EventCalendar.Root source={rotaSource} formatter={formatter} defaultView="week" views={["week", "month"]}>
      <EventCalendar.Toolbar extra={<SourceStatus />} />
      <EventCalendar.View />
    </EventCalendar.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>d(()=>import(`./custom-source-B8RT5vQ1.js`),[]));function ie(e,t){let n=v(e),r=(e,r)=>S(y(C(n,e),r*60),t);return[{id:`1`,title:`Standup`,start:r(0,9),end:r(0,10),color:`violet`},{id:`2`,title:`Retro`,start:r(3,15),end:r(3,16),color:`green`}]}function ae(){let{calendar:e,views:t}=s();return(0,k.jsx)(r,{title:e.title,view:e.view,views:t,onViewChange:e.setView,onPrev:e.prev,onNext:e.next,onToday:e.today})}function oe(){let{calendar:e,views:r}=s();return(0,k.jsxs)(o,{className:`justify-between`,children:[(0,k.jsx)(c,{children:e.title}),(0,k.jsx)(n,{view:e.view,views:r,onViewChange:e.setView}),(0,k.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,k.jsx)(t,{onPrev:()=>e.setDate(C(e.date,-1)),onNext:()=>e.setDate(C(e.date,1))}),(0,k.jsx)(g,{className:w,onClick:e.today,children:`Now`}),(0,k.jsx)(a,{})]})]})}var se=[`ready`,`parts`],ce={ready:`Ready-made`,parts:`From parts`};function le(){let e=p(),t=b(e);return(0,k.jsx)(ue,{today:t,timeZone:e},`${t.getTime()} ${e}`)}function ue({today:e,timeZone:t}){let[n,r]=(0,O.useState)(`parts`),i=(0,O.useMemo)(()=>ie(e,t),[e,t]);return(0,k.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,k.jsx)(`div`,{className:`flex justify-end p-2`,children:(0,k.jsx)(re,{value:n,options:se,onChange:r,labels:ce,label:`Toolbar`})}),(0,k.jsxs)(l.Root,{defaultEvents:i,defaultView:`week`,views:[`week`,`day`,`agenda`],className:`min-h-0 flex-1`,children:[n===`ready`?(0,k.jsx)(ae,{}):(0,k.jsx)(oe,{}),(0,k.jsx)(l.View,{})]})]})}var Q=`import { useMemo, useState } from "react"
import { useDefaultTimeZone } from "@kitora/primitives/react"
import { ToolbarButton } from "@kitora/collections/ui"
import { addDays, atMinute, CALENDAR_TOOLBAR_BUTTON_CLASS, fromZoned, EventCalendar, EventCalendarStep, CalendarToolbar, Segmented, startOfWeek, StepButtons, ToolbarFrame, ToolbarTitle, useEventCalendarContext, useTodayDate, ViewSwitcher, type CalendarEvent } from "@kitora/scheduling"

/** Two events in the week of \`today\`, as instants in \`timeZone\` (the calendar's display zone). */
function eventsAround(today: Date, timeZone: string): CalendarEvent[] {
  const monday = startOfWeek(today)
  const at = (offset: number, hour: number) => fromZoned(atMinute(addDays(monday, offset), hour * 60), timeZone)
  return [
    { id: "1", title: "Standup", start: at(0, 9), end: at(0, 10), color: "violet" },
    { id: "2", title: "Retro", start: at(3, 15), end: at(3, 16), color: "green" },
  ]
}

/** The ready-made row: CalendarToolbar fed from the Root's state through useEventCalendarContext. */
function ReadyMadeToolbar() {
  const { calendar, views } = useEventCalendarContext()
  return <CalendarToolbar title={calendar.title} view={calendar.view} views={views} onViewChange={calendar.setView} onPrev={calendar.prev} onNext={calendar.next} onToday={calendar.today} />
}

/** The same row from its pieces: ToolbarFrame, StepButtons, ToolbarTitle, ViewSwitcher, collections' ToolbarButton in the calendar look (CALENDAR_TOOLBAR_BUTTON_CLASS), plus EventCalendarStep (the Root-wired step pair). */
function PartsToolbar() {
  const { calendar, views } = useEventCalendarContext()
  return (
    <ToolbarFrame className="justify-between">
      <ToolbarTitle>{calendar.title}</ToolbarTitle>
      <ViewSwitcher view={calendar.view} views={views} onViewChange={calendar.setView} />
      <div className="flex items-center gap-1">
        <StepButtons onPrev={() => calendar.setDate(addDays(calendar.date, -1))} onNext={() => calendar.setDate(addDays(calendar.date, 1))} />
        <ToolbarButton className={CALENDAR_TOOLBAR_BUTTON_CLASS} onClick={calendar.today}>Now</ToolbarButton>
        <EventCalendarStep />
      </div>
    </ToolbarFrame>
  )
}

type Variant = "ready" | "parts"
const VARIANTS: readonly Variant[] = ["ready", "parts"]
const VARIANT_LABELS: Readonly<Record<Variant, string>> = { ready: "Ready-made", parts: "From parts" }

/** Segmented (the kit's one-of-many toggle) picks which toolbar sits over the week. The day arrows step one day; EventCalendarStep steps one view. */
export function ToolbarParts() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const timeZone = useDefaultTimeZone()
  const today = useTodayDate(timeZone)
  return <Demo key={\`\${today.getTime()} \${timeZone}\`} today={today} timeZone={timeZone} />
}

function Demo({ today, timeZone }: { today: Date; timeZone: string }) {
  const [variant, setVariant] = useState<Variant>("parts")
  const events = useMemo(() => eventsAround(today, timeZone), [today, timeZone])
  return (
    <div className="flex h-full flex-col">
      <div className="flex justify-end p-2">
        <Segmented value={variant} options={VARIANTS} onChange={setVariant} labels={VARIANT_LABELS} label="Toolbar" />
      </div>
      <EventCalendar.Root defaultEvents={events} defaultView="week" views={["week", "day", "agenda"]} className="min-h-0 flex-1">
        {variant === "ready" ? <ReadyMadeToolbar /> : <PartsToolbar />}
        <EventCalendar.View />
      </EventCalendar.Root>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>d(()=>import(`./toolbar-parts-6UoW9-Yr.js`),[]));function de(e,t){let n=v(e),r=(e,r,i=0)=>S(y(C(n,e),r*60+i),t),i=e=>C(n,e);return[{id:`1`,title:`اجتماع الفريق`,start:r(0,10),end:r(0,11),color:`violet`},{id:`2`,title:`إطلاق النسخة`,start:i(1),end:i(2),allDay:!0,color:`blue`},{id:`3`,title:`رحلة العمل`,start:i(3),end:i(6),allDay:!0,color:`green`},{id:`4`,title:`مراجعة التصميم`,start:r(2,13),end:r(2,14,30),color:`amber`}]}function fe(){let e=p(),t=b(e);return(0,k.jsx)(pe,{today:t,timeZone:e},`${t.getTime()} ${e}`)}function pe({today:e,timeZone:t}){let[n,r]=(0,O.useState)((0,O.useMemo)(()=>de(e,t),[e,t]));return(0,k.jsx)(`div`,{dir:`rtl`,lang:`ar`,className:`h-full`,children:(0,k.jsx)(l,{events:n,defaultView:`month`,views:[`month`,`week`],defaultDate:e,timeZone:t,onEventChange:e=>r(n=>ne(n,e,{timeZone:t}))})})}var $=`import { useMemo, useState } from "react"
import { useDefaultTimeZone } from "@kitora/primitives/react"
import { addDays, applyEventChange, atMinute, type CalendarEvent, EventCalendar, fromZoned, startOfWeek, useTodayDate } from "@kitora/scheduling"

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone); timed events are instants in \`timeZone\`. */
function demoData(today: Date, timeZone: string): CalendarEvent[] {
  const monday = startOfWeek(today)
  const at = (offset: number, hour: number, minute = 0) => fromZoned(atMinute(addDays(monday, offset), hour * 60 + minute), timeZone)
  const day = (n: number) => addDays(monday, n)
  return [
    { id: "1", title: "اجتماع الفريق", start: at(0, 10), end: at(0, 11), color: "violet" },
    { id: "2", title: "إطلاق النسخة", start: day(1), end: day(2), allDay: true, color: "blue" },
    { id: "3", title: "رحلة العمل", start: day(3), end: day(6), allDay: true, color: "green" },
    { id: "4", title: "مراجعة التصميم", start: at(2, 13), end: at(2, 14, 30), color: "amber" },
  ]
}

/**
 * The calendar inside \`dir="rtl"\`: the day columns of the month and the week run right to left, a drag toward the left
 * moves an event later, Alt+← moves a focused event a day later, ← / → go to the next / previous range, and the
 * toolbar's chevrons point the reading way.
 */
export function RightToLeftCalendar() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const timeZone = useDefaultTimeZone()
  const today = useTodayDate(timeZone)
  return <Demo key={\`\${today.getTime()} \${timeZone}\`} today={today} timeZone={timeZone} />
}

function Demo({ today, timeZone }: { today: Date; timeZone: string }) {
  const initial = useMemo(() => demoData(today, timeZone), [today, timeZone])
  const [events, setEvents] = useState(initial)
  return (
    <div dir="rtl" lang="ar" className="h-full">
      <EventCalendar
        events={events}
        defaultView="month"
        views={["month", "week"]}
        defaultDate={today}
        timeZone={timeZone}
        onEventChange={(change) => setEvents((prev) => applyEventChange(prev, change, { timeZone }))}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>d(()=>import(`./right-to-left-ufunalul.js`),[]));function me(){return(0,k.jsxs)(`div`,{children:[(0,k.jsx)(u,{title:`Basics: the views`,children:`Every view takes the same props: a list of events and an anchor date. Events are instants; the view draws them in its time zone.`}),(0,k.jsx)(_,{n:1,title:`A week`,blurb:`Overlapping events sit side by side, all-day events go in the row on top, the red line is now.`,code:M,children:(0,k.jsx)(T,{testId:`week-view`,height:460,children:(0,k.jsx)(j,{})})}),(0,k.jsx)(_,{n:2,title:`A month`,blurb:`Multi-day events are bars across the cells; timed events a dot and a time; a repeating event shows on every matching day.`,code:F,children:(0,k.jsx)(T,{testId:`month-view`,height:540,children:(0,k.jsx)(P,{})})}),(0,k.jsx)(_,{n:3,title:`A day`,blurb:"`days={1}` is a day view; `hourHeight` and `slotMinutes` set the scale.",code:R,children:(0,k.jsx)(T,{testId:`day-view`,height:420,children:(0,k.jsx)(L,{})})}),(0,k.jsx)(_,{n:4,title:`An agenda`,blurb:`The next days as a list, empty days skipped. ↑/↓ walk the rows.`,code:V,children:(0,k.jsx)(T,{testId:`agenda-view`,height:340,children:(0,k.jsx)(B,{})})}),(0,k.jsx)(_,{n:5,title:`Compose your own`,blurb:"EventCalendar rebuilt from its public parts (EventCalendar.Root, Toolbar, Title, ViewSwitcher, Prev, Today, Next, View), rearranged. `defaultEvents` lets the Root own the list; `createEvent` turns a drawn range into an event.",code:G,children:(0,k.jsx)(T,{testId:`compose-your-own`,height:460,children:(0,k.jsx)(U,{})})}),(0,k.jsx)(_,{n:6,title:`A custom adapter`,blurb:"Events from an `EventSource` instead of a list: an on-call rota loaded per visible range with a delay, a 24-hour `formatter`, and a part of your own reading the Root's loading state.",code:Z,children:(0,k.jsx)(T,{testId:`custom-source`,height:460,children:(0,k.jsx)(X,{})})}),(0,k.jsx)(_,{n:7,title:`Toolbar parts`,blurb:`The toolbar pieces by name: CalendarToolbar ready-made, or ToolbarFrame, ToolbarTitle, ViewSwitcher, StepButtons, collections' ToolbarButton (with CALENDAR_TOOLBAR_BUTTON_CLASS) and EventCalendarStep laid out yourself; Segmented switches between the two.`,code:Q,children:(0,k.jsx)(T,{testId:`toolbar-parts`,height:500,children:(0,k.jsx)(le,{})})}),(0,k.jsx)(_,{n:8,title:`Right to left`,blurb:`Inside \`dir="rtl"\` the month's and the week's days run right to left: drag an event to the left to move it later, Alt+← moves a focused event a day later, ← and → step to the next and previous range, and the toolbar's chevrons point the reading way.`,code:$,children:(0,k.jsx)(T,{testId:`right-to-left`,height:540,children:(0,k.jsx)(fe,{})})})]})}export{me as component};