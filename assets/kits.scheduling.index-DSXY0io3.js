import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t,u as n}from"./event-calendar-2Han0efN.js";import{s as r}from"./kit-docs-CvNs0WqT.js";import{t as i}from"./plus-DkT_QJcZ.js";import{_ as a,f as o,g as s,p as c}from"./shared-C2_C6sya.js";import{t as l}from"./trash-2-0f767-k3.js";import{c as u,i as d,l as f,n as p,t as m}from"./select-InBARHya.js";import{Bc as h,Cc as g,Ic as _,Uo as v,Wo as y,bi as b,hi as x}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as S}from"./example-CZLJLtIC.js";import{A as C,C as w,T,_ as E,a as D,c as O,g as k,i as A,m as j,t as M,y as N}from"./-kits.scheduling.shared-DDgpSEi-.js";import{r as P,t as F}from"./edit-h-lg0-4N.js";var I=e(h(),1),L=_(),R={blue:`Engineering`,violet:`Rituals`,green:`Focus & offsites`,amber:`Social`,rose:`Customers`,cyan:`People`,slate:`Company`},z=[`America/Los_Angeles`,`America/New_York`,`Europe/London`,`Europe/Berlin`,`Asia/Kolkata`,`Asia/Tokyo`,`Australia/Sydney`],B=[{value:`occurrence`,label:`Edit this event`},{value:`series`,label:`Edit the series`}];function V(){let e=y(),t=D(e);return(0,L.jsx)(H,{today:t,hostZone:e},`${t.getTime()} ${e}`)}function H({today:e,hostZone:r}){let h=v(),[g,_]=(0,I.useState)(()=>W(e,r)),[y,S]=(0,I.useState)(r),[C,w]=(0,I.useState)(e),[T,E]=(0,I.useState)(`week`),[D,k]=(0,I.useState)(new Set),[M,N]=(0,I.useState)(),[V,H]=(0,I.useState)(`occurrence`),G=(0,I.useMemo)(()=>g.filter(e=>!D.has(e.color??`blue`)),[g,D]),K=z.includes(y)?z:[y,...z],q=(e,t,n)=>{let r={id:`new-${Date.now()}`,title:`New event`,start:n?e:O(e,y),end:n?t:O(t,y),allDay:n,color:`blue`};_(e=>[...e,r]);let[i]=o([r],{start:j(e,-1),end:j(t,1),timeZone:y});N(i)},J=e=>{M&&(_(t=>t.map(t=>t.id===M.event.id?{...t,...e}:t)),N({...M,event:{...M.event,...e}}))};return(0,L.jsxs)(`div`,{className:`flex h-full text-[13px]`,children:[(0,L.jsxs)(`aside`,{className:`hidden w-52 shrink-0 flex-col gap-4 border-r p-3 md:flex`,children:[(0,L.jsxs)(`button`,{type:`button`,onClick:()=>q(new Date(C.getFullYear(),C.getMonth(),C.getDate(),10),new Date(C.getFullYear(),C.getMonth(),C.getDate(),11),!1),className:`inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-primary px-3 font-medium text-primary-foreground hover:bg-primary/90`,children:[(0,L.jsx)(i,{className:`size-4`}),`Create`]}),(0,L.jsx)(U,{date:C,onPick:e=>w(e),timeZone:y}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{className:`mb-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:`Calendars`}),n.map(e=>(0,L.jsxs)(`label`,{className:`flex h-7 cursor-pointer items-center gap-2 rounded px-1 hover:bg-muted`,children:[(0,L.jsx)(`input`,{type:`checkbox`,className:`sr-only`,checked:!D.has(e),onChange:()=>k(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}),(0,L.jsx)(`span`,{className:x(`size-3.5 rounded-[4px] border-2 border-current`,A(e).fg,!D.has(e)&&A(e).dot),"aria-hidden":!0}),(0,L.jsx)(`span`,{className:x(`truncate`,D.has(e)&&`text-muted-foreground`),children:R[e]})]},e))]})]}),(0,L.jsx)(`div`,{className:`min-w-0 flex-1`,children:(0,L.jsx)(t,{events:G,view:T,onViewChange:E,date:C,onDateChange:w,timeZone:y,selectedKey:M?.key,onEventClick:N,onSelectSlot:e=>q(e.start,e.end,e.allDay),onEventChange:e=>{_(t=>F(t,e,{timeZone:y,scope:V})),N(void 0)},onEventDelete:e=>{_(t=>P(t,e,V)),N(void 0)},toolbarExtra:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(m,{items:B,value:V,onValueChange:e=>e!==null&&H(e),children:[(0,L.jsx)(u,{size:`sm`,"aria-label":`Repeating events: edits apply to`,className:`hidden text-[12px] lg:flex`,children:(0,L.jsx)(f,{})}),(0,L.jsx)(p,{alignItemWithTrigger:!1,children:B.map(e=>(0,L.jsx)(d,{value:e.value,children:e.label},e.value))})]}),(0,L.jsxs)(m,{items:K.map(e=>({value:e,label:e.replace(/_/g,` `)})),value:y,onValueChange:e=>e!==null&&S(e),searchable:!0,children:[(0,L.jsx)(u,{size:`sm`,"aria-label":`Time zone`,className:`max-w-36 text-[12px]`,children:(0,L.jsx)(f,{})}),(0,L.jsx)(p,{align:`end`,searchPlaceholder:`Search time zones`,emptyText:`No time zone matches`,className:`min-w-56`,children:K.map(e=>(0,L.jsx)(d,{value:e,children:e.replace(/_/g,` `)},e))})]})]})})}),M?(0,L.jsxs)(`aside`,{className:`flex w-64 shrink-0 flex-col gap-3 border-l p-3`,"aria-label":`Event details`,children:[(0,L.jsxs)(`div`,{className:`flex items-start gap-2`,children:[(0,L.jsx)(`input`,{"aria-label":`Title`,className:`h-7 min-w-0 flex-1 rounded-md border bg-background px-2 text-[14px] font-semibold`,value:M.event.title,onChange:e=>J({title:e.target.value}),autoFocus:M.event.title===`New event`,onFocus:e=>e.target.select()}),(0,L.jsx)(`button`,{type:`button`,onClick:()=>N(void 0),className:`flex size-7 items-center justify-center rounded-md hover:bg-muted`,"aria-label":`Close details`,children:(0,L.jsx)(b,{className:`size-4`})})]}),(0,L.jsxs)(`div`,{className:`text-muted-foreground tabular-nums`,children:[new Intl.DateTimeFormat(h,{weekday:`long`,month:`long`,day:`numeric`}).format(M.start),(0,L.jsx)(`br`,{}),M.allDay?`All day`:`${new Intl.DateTimeFormat(h,{timeStyle:`short`}).format(M.start)} – ${new Intl.DateTimeFormat(h,{timeStyle:`short`}).format(M.end)}`]}),M.event.rrule?(0,L.jsxs)(`div`,{className:`flex items-center gap-1.5 text-muted-foreground`,children:[(0,L.jsx)(a,{className:`size-3.5`}),(()=>{let e=s(M.event.rrule??``);return e?c(e):M.event.rrule})()]}):null,M.event.location?(0,L.jsx)(`div`,{className:`text-muted-foreground`,children:M.event.location}):null,(0,L.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,role:`radiogroup`,"aria-label":`Colour`,children:n.map(e=>(0,L.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":M.event.color===e,"aria-label":R[e],onClick:()=>J({color:e}),className:x(`size-5 rounded-full ring-offset-2 ring-offset-background`,A(e).dot,M.event.color===e&&`ring-2 ring-foreground`)},e))}),M.event.readOnly?(0,L.jsx)(`div`,{className:`rounded-md bg-muted px-2 py-1 text-[12px] text-muted-foreground`,children:`Read-only: drag and keyboard edits are off.`}):null,(0,L.jsxs)(`button`,{type:`button`,disabled:M.event.readOnly,onClick:()=>{_(e=>P(e,M,V)),N(void 0)},className:`mt-auto inline-flex h-7 items-center justify-center gap-1.5 rounded-md border px-2 text-[12px] font-medium text-rose-700 hover:bg-rose-500/10 disabled:opacity-50 dark:text-rose-400`,children:[(0,L.jsx)(l,{className:`size-3.5`}),M.recurring&&V===`occurrence`?`Delete this event`:`Delete`]})]}):null]})}function U({date:e,onPick:t,timeZone:n}){let[r,i]=(0,I.useState)(e),a=T(r,1),o=D(n),s=v();return(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`div`,{className:`mb-1 flex items-center justify-between`,children:[(0,L.jsx)(`span`,{className:`text-[12px] font-semibold`,children:new Intl.DateTimeFormat(s,{month:`long`,year:`numeric`}).format(r)}),(0,L.jsxs)(`span`,{className:`flex`,children:[(0,L.jsx)(`button`,{type:`button`,className:`size-6 rounded hover:bg-muted`,onClick:()=>i(k(r,-1)),"aria-label":`Previous month`,children:`‹`}),(0,L.jsx)(`button`,{type:`button`,className:`size-6 rounded hover:bg-muted`,onClick:()=>i(k(r,1)),"aria-label":`Next month`,children:`›`})]})]}),(0,L.jsxs)(`div`,{className:`grid grid-cols-7 text-center text-[11px] tabular-nums`,children:[a[0].map(e=>(0,L.jsx)(`span`,{className:`h-5 text-muted-foreground`,children:new Intl.DateTimeFormat(s,{weekday:`narrow`}).format(e)},N(e))),a.flat().map(n=>(0,L.jsx)(`button`,{type:`button`,onClick:()=>t(n),className:x(`mx-auto flex size-6 items-center justify-center rounded-full hover:bg-muted`,n.getMonth()!==r.getMonth()&&`text-muted-foreground`,w(n,e)&&`bg-primary/15 font-semibold text-primary`,w(n,o)&&`bg-primary text-primary-foreground hover:bg-primary`),children:n.getDate()},N(n)))]})]})}function W(e,t){let n=C(e),r=(e,r,i=0)=>O(E(j(n,e),r*60+i),t),i=e=>j(n,e),a=()=>new Date(e.getFullYear(),e.getMonth(),0);function o(e,t,n,i,a,o,s={}){return{id:e,title:t,start:r(n,i[0],i[1]),end:r(n,a[0],a[1]),color:o,...s}}function s(){return[{id:`standup`,title:`Standup`,start:r(0,9,30),end:r(0,9,45),color:`slate`,rrule:`FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR`,location:`Zoom`},o(`planning`,`Sprint planning`,0,[10,0],[11,30],`violet`,{location:`Atlas room`}),o(`design`,`Design review`,1,[11,0],[12,0],`rose`,{location:`Figma`}),o(`1on1`,`1:1 with Priya`,1,[11,30],[12,0],`cyan`),o(`lunch`,`Team lunch`,2,[12,30],[13,30],`amber`,{location:`Café Nero`}),o(`focus`,`Focus: billing API`,2,[14,0],[17,0],`green`),o(`interview`,`Interview — Staff eng`,2,[15,0],[16,0],`blue`),o(`sync`,`Infra sync`,2,[15,30],[16,30],`slate`),o(`demo`,`Customer demo`,3,[16,0],[17,0],`rose`,{location:`Acme Corp`}),o(`retro`,`Retro`,4,[15,0],[16,0],`violet`,{rrule:`FREQ=WEEKLY;INTERVAL=2;BYDAY=FR`}),o(`deploy`,`Deploy window`,3,[22,0],[25,30],`amber`),{id:`offsite`,title:`Team offsite`,start:i(3),end:i(5),allDay:!0,color:`green`},{id:`release`,title:`v2.4 release`,start:i(1),end:i(2),allDay:!0,color:`blue`},{id:`pto`,title:`Sam — PTO`,start:i(8),end:i(12),allDay:!0,color:`cyan`},{id:`board`,title:`Board meeting`,start:r(9,10),end:r(9,12),color:`rose`,readOnly:!0},{id:`payroll`,title:`Payroll`,start:a(),end:j(a(),1),allDay:!0,color:`slate`,rrule:`FREQ=MONTHLY;BYMONTHDAY=-1`}]}return s()}var G=`import { useMemo, useState } from "react"
import { Plus, Repeat, Trash2, X } from "lucide-react"
import { useDefaultLocale, useDefaultTimeZone } from "@kitora/primitives/react"
import { addDays, addMonths, applyEventChange, atMinute, type CalendarEvent, type CalendarView, colorOf, dayKey, describeRRule, type EditScope, EVENT_COLORS, EventCalendar, type EventColor, expandEvents, fromZoned, isSameDay, monthGrid, type Occurrence, parseRRule, removeOccurrence, startOfWeek, useTodayDate } from "@kitora/scheduling"
import { cn } from "@kitora/ui/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

const CALENDARS: Record<EventColor, string> = { blue: "Engineering", violet: "Rituals", green: "Focus & offsites", amber: "Social", rose: "Customers", cyan: "People", slate: "Company" }
const ZONES = ["America/Los_Angeles", "America/New_York", "Europe/London", "Europe/Berlin", "Asia/Kolkata", "Asia/Tokyo", "Australia/Sydney"]

// A Google Calendar-style workspace on EventCalendar: a mini month to jump, calendars to filter,
// a zone switch, all five views, and a detail panel to rename, recolour or delete. Drag on the
// grid to create, drag events to move, edges to resize; T, ←/→ and M/W/D/A drive it from the keyboard.
const EDIT_SCOPES: readonly { value: EditScope; label: string }[] = [
  { value: "occurrence", label: "Edit this event" },
  { value: "series", label: "Edit the series" },
]

export function TeamCalendar() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const hostZone = useDefaultTimeZone()
  const today = useTodayDate(hostZone)
  return <Workspace key={\`\${today.getTime()} \${hostZone}\`} today={today} hostZone={hostZone} />
}

function Workspace({ today, hostZone }: { today: Date; hostZone: string }) {
  const locale = useDefaultLocale()
  const [events, setEvents] = useState<CalendarEvent[]>(() => teamWeekAround(today, hostZone))
  const [timeZone, setTimeZone] = useState(hostZone)
  const [date, setDate] = useState(today)
  const [view, setView] = useState<CalendarView>("week")
  const [hidden, setHidden] = useState<ReadonlySet<EventColor>>(new Set())
  const [selected, setSelected] = useState<Occurrence>()
  const [scope, setScope] = useState<EditScope>("occurrence")
  const visible = useMemo(() => events.filter((e) => !hidden.has(e.color ?? "blue")), [events, hidden])
  const zones = ZONES.includes(timeZone) ? ZONES : [timeZone, ...ZONES]

  const create = (start: Date, end: Date, allDay: boolean) => {
    const event: CalendarEvent = { id: \`new-\${Date.now()}\`, title: "New event", start: allDay ? start : fromZoned(start, timeZone), end: allDay ? end : fromZoned(end, timeZone), allDay, color: "blue" }
    setEvents((prev) => [...prev, event])
    const [occ] = expandEvents([event], { start: addDays(start, -1), end: addDays(end, 1), timeZone })
    setSelected(occ)
  }
  const update = (patch: Partial<CalendarEvent>) => {
    if (!selected) return
    setEvents((prev) => prev.map((e) => (e.id === selected.event.id ? { ...e, ...patch } : e)))
    setSelected({ ...selected, event: { ...selected.event, ...patch } })
  }

  return (
    <div className="flex h-full text-[13px]">
      <aside className="hidden w-52 shrink-0 flex-col gap-4 border-r p-3 md:flex">
        <button type="button" onClick={() => create(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 10), new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11), false)} className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-primary px-3 font-medium text-primary-foreground hover:bg-primary/90">
          <Plus className="size-4" />Create
        </button>
        <MiniMonth date={date} onPick={(d) => setDate(d)} timeZone={timeZone} />
        <div>
          <div className="mb-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">Calendars</div>
          {EVENT_COLORS.map((c) => (
            <label key={c} className="flex h-7 cursor-pointer items-center gap-2 rounded px-1 hover:bg-muted">
              <input type="checkbox" className="sr-only" checked={!hidden.has(c)} onChange={() => setHidden((prev) => { const next = new Set(prev); if (next.has(c)) next.delete(c); else next.add(c); return next })} />
              <span className={cn("size-3.5 rounded-[4px] border-2 border-current", colorOf(c).fg, !hidden.has(c) && colorOf(c).dot)} aria-hidden />
              <span className={cn("truncate", hidden.has(c) && "text-muted-foreground")}>{CALENDARS[c]}</span>
            </label>
          ))}
        </div>
      </aside>
      <div className="min-w-0 flex-1">
        <EventCalendar
          events={visible}
          view={view}
          onViewChange={setView}
          date={date}
          onDateChange={setDate}
          timeZone={timeZone}
          selectedKey={selected?.key}
          onEventClick={setSelected}
          onSelectSlot={(slot) => create(slot.start, slot.end, slot.allDay)}
          onEventChange={(change) => {
            setEvents((prev) => applyEventChange(prev, change, { timeZone, scope }))
            setSelected(undefined)
          }}
          onEventDelete={(o) => {
            setEvents((prev) => removeOccurrence(prev, o, scope))
            setSelected(undefined)
          }}
          toolbarExtra={(
            <>
              <Select items={EDIT_SCOPES} value={scope} onValueChange={(next: EditScope | null) => next !== null && setScope(next)}>
                <SelectTrigger size="sm" aria-label="Repeating events: edits apply to" className="hidden text-[12px] lg:flex">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                  {EDIT_SCOPES.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select items={zones.map((z) => ({ value: z, label: z.replace(/_/g, " ") }))} value={timeZone} onValueChange={(next: string | null) => next !== null && setTimeZone(next)} searchable>
                <SelectTrigger size="sm" aria-label="Time zone" className="max-w-36 text-[12px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent align="end" searchPlaceholder="Search time zones" emptyText="No time zone matches" className="min-w-56">
                  {zones.map((z) => (
                    <SelectItem key={z} value={z}>
                      {z.replace(/_/g, " ")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </>
          )}
        />
      </div>
      {selected ? (
        <aside className="flex w-64 shrink-0 flex-col gap-3 border-l p-3" aria-label="Event details">
          <div className="flex items-start gap-2">
            <input aria-label="Title" className="h-7 min-w-0 flex-1 rounded-md border bg-background px-2 text-[14px] font-semibold" value={selected.event.title} onChange={(e) => update({ title: e.target.value })} autoFocus={selected.event.title === "New event"} onFocus={(e) => e.target.select()} />
            <button type="button" onClick={() => setSelected(undefined)} className="flex size-7 items-center justify-center rounded-md hover:bg-muted" aria-label="Close details"><X className="size-4" /></button>
          </div>
          <div className="text-muted-foreground tabular-nums">
            {new Intl.DateTimeFormat(locale, { weekday: "long", month: "long", day: "numeric" }).format(selected.start)}
            <br />
            {selected.allDay ? "All day" : \`\${new Intl.DateTimeFormat(locale, { timeStyle: "short" }).format(selected.start)} – \${new Intl.DateTimeFormat(locale, { timeStyle: "short" }).format(selected.end)}\`}
          </div>
          {selected.event.rrule ? (
            <div className="flex items-center gap-1.5 text-muted-foreground"><Repeat className="size-3.5" />{(() => { const r = parseRRule(selected.event.rrule ?? ""); return r ? describeRRule(r) : selected.event.rrule })()}</div>
          ) : null}
          {selected.event.location ? <div className="text-muted-foreground">{selected.event.location}</div> : null}
          <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Colour">
            {EVENT_COLORS.map((c) => (
              <button key={c} type="button" role="radio" aria-checked={selected.event.color === c} aria-label={CALENDARS[c]} onClick={() => update({ color: c })} className={cn("size-5 rounded-full ring-offset-2 ring-offset-background", colorOf(c).dot, selected.event.color === c && "ring-2 ring-foreground")} />
            ))}
          </div>
          {selected.event.readOnly ? <div className="rounded-md bg-muted px-2 py-1 text-[12px] text-muted-foreground">Read-only: drag and keyboard edits are off.</div> : null}
          <button type="button" disabled={selected.event.readOnly} onClick={() => { setEvents((prev) => removeOccurrence(prev, selected, scope)); setSelected(undefined) }} className="mt-auto inline-flex h-7 items-center justify-center gap-1.5 rounded-md border px-2 text-[12px] font-medium text-rose-700 hover:bg-rose-500/10 disabled:opacity-50 dark:text-rose-400">
            <Trash2 className="size-3.5" />{selected.recurring && scope === "occurrence" ? "Delete this event" : "Delete"}
          </button>
        </aside>
      ) : null}
    </div>
  )
}

function MiniMonth({ date, onPick, timeZone }: { readonly date: Date; readonly onPick: (d: Date) => void; readonly timeZone: string }) {
  const [month, setMonth] = useState(date)
  const weeks = monthGrid(month, 1)
  // today in the shown zone, and the reader's locale (the build's until hydration)
  const today = useTodayDate(timeZone)
  const locale = useDefaultLocale()
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-[12px] font-semibold">{new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(month)}</span>
        <span className="flex">
          <button type="button" className="size-6 rounded hover:bg-muted" onClick={() => setMonth(addMonths(month, -1))} aria-label="Previous month">‹</button>
          <button type="button" className="size-6 rounded hover:bg-muted" onClick={() => setMonth(addMonths(month, 1))} aria-label="Next month">›</button>
        </span>
      </div>
      <div className="grid grid-cols-7 text-center text-[11px] tabular-nums">
        {weeks[0].map((d) => <span key={dayKey(d)} className="h-5 text-muted-foreground">{new Intl.DateTimeFormat(locale, { weekday: "narrow" }).format(d)}</span>)}
        {weeks.flat().map((d) => (
          <button key={dayKey(d)} type="button" onClick={() => onPick(d)} className={cn("mx-auto flex size-6 items-center justify-center rounded-full hover:bg-muted", d.getMonth() !== month.getMonth() && "text-muted-foreground", isSameDay(d, date) && "bg-primary/15 font-semibold text-primary", isSameDay(d, today) && "bg-primary text-primary-foreground hover:bg-primary")}>{d.getDate()}</button>
        ))}
      </div>
    </div>
  )
}

// ── Demo data: a week of meetings placed relative to today ──

/** A week of meetings around \`today\` (a wall-time Date: today in the reader's zone); timed ones are instants in \`timeZone\`. */
function teamWeekAround(today: Date, timeZone: string): CalendarEvent[] {
  const monday = startOfWeek(today)
  /** An instant at \`hour:minute\` on Monday + \`offset\` days (the reader's zone). */
  const at = (offset: number, hour: number, minute = 0) => fromZoned(atMinute(addDays(monday, offset), hour * 60 + minute), timeZone)
  /** A floating all-day date Monday + \`offset\` days. */
  const day = (offset: number) => addDays(monday, offset)
  const lastOfLastMonth = () => new Date(today.getFullYear(), today.getMonth(), 0)

  function timed(id: string, title: string, dayOffset: number, from: [number, number], to: [number, number], color: EventColor, extra: Partial<CalendarEvent> = {}): CalendarEvent {
    return { id, title, start: at(dayOffset, from[0], from[1]), end: at(dayOffset, to[0], to[1]), color, ...extra }
  }

  /** A week of meetings, focus blocks, an offsite and a repeating standup. */
  function teamWeek(): CalendarEvent[] {
    return [
      { id: "standup", title: "Standup", start: at(0, 9, 30), end: at(0, 9, 45), color: "slate", rrule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", location: "Zoom" },
      timed("planning", "Sprint planning", 0, [10, 0], [11, 30], "violet", { location: "Atlas room" }),
      timed("design", "Design review", 1, [11, 0], [12, 0], "rose", { location: "Figma" }),
      timed("1on1", "1:1 with Priya", 1, [11, 30], [12, 0], "cyan"),
      timed("lunch", "Team lunch", 2, [12, 30], [13, 30], "amber", { location: "Café Nero" }),
      timed("focus", "Focus: billing API", 2, [14, 0], [17, 0], "green"),
      timed("interview", "Interview — Staff eng", 2, [15, 0], [16, 0], "blue"),
      timed("sync", "Infra sync", 2, [15, 30], [16, 30], "slate"),
      timed("demo", "Customer demo", 3, [16, 0], [17, 0], "rose", { location: "Acme Corp" }),
      timed("retro", "Retro", 4, [15, 0], [16, 0], "violet", { rrule: "FREQ=WEEKLY;INTERVAL=2;BYDAY=FR" }),
      timed("deploy", "Deploy window", 3, [22, 0], [24 + 1, 30], "amber"),
      { id: "offsite", title: "Team offsite", start: day(3), end: day(5), allDay: true, color: "green" },
      { id: "release", title: "v2.4 release", start: day(1), end: day(2), allDay: true, color: "blue" },
      { id: "pto", title: "Sam — PTO", start: day(8), end: day(12), allDay: true, color: "cyan" },
      { id: "board", title: "Board meeting", start: at(9, 10), end: at(9, 12), color: "rose", readOnly: true },
      { id: "payroll", title: "Payroll", start: lastOfLastMonth(), end: addDays(lastOfLastMonth(), 1), allDay: true, color: "slate", rrule: "FREQ=MONTHLY;BYMONTHDAY=-1" },
    ]
  }
  return teamWeek()
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>g(()=>import(`./team-calendar-DmVjWH8V.js`),[]));var K=[{name:`core`,what:`@kitora/scheduling/core · Wall-time arithmetic, zones (toZoned / fromZoned over @kitora/pickers/core's one conversion: a DST gap moves forward, an overlap takes the earlier instant), RRULE parse, expand, describe and format, occurrence expansion with EXDATE, overlap columns, lane packing, edits as data (applyEventChange, removeOccurrence), view ranges, the Gantt scale, roll-ups, dependency paths and auto-schedule, plus the two seams: CalendarFormatter (intlFormatter) and EventSource (arrayEventSource). No React, no DOM.`},{name:`dom`,what:`@kitora/scheduling/dom · startGesture: one pointer gesture with a click threshold and Escape to cancel, shared by every drag.`},{name:`react`,what:`@kitora/scheduling/react · useCalendar (view, date, Previous / Today / Next, title), useEventStore (events controlled or not, edits folded in), useEventSource (loads the visible range, aborts stale loads), useControllable and useNow. Headless: bring your own markup.`},{name:`ui`,what:`@kitora/scheduling/ui · Compound parts EventCalendar.Root / Toolbar / Today / Prev / Next / Title / ViewSwitcher / View, the EventCalendar preset built only from them, CalendarToolbar, TimeGridView, MonthView, AgendaView, ResourceTimeline and Gantt (row reorder on @kitora/dnd). className plus classNames per part, data-* state attributes.`}];function q(){return(0,L.jsxs)(`div`,{children:[(0,L.jsx)(r,{title:`Scheduling kit`,children:'A team calendar built from the kit. Drag on the grid to create an event, drag one to move it, pull its top or bottom edge to resize, click it for details. Switch views with the toolbar or M / W / D / A, step with ← / →, press T for today, change the time zone and watch every event slide. Under `dir="rtl"` the month and week grids, the Gantt chart and the resource timeline run right to left and ← / → follow the reading direction (Basics: the views, Gantt and Resources have right-to-left demos).'}),(0,L.jsx)(S,{n:1,title:`A team calendar`,blurb:`Mini month to jump, calendars to filter, a zone switch, the five views, a repeating standup, a read-only board meeting and a details panel to rename, recolour or delete.`,code:G,children:(0,L.jsx)(M,{testId:`team-calendar`,height:680,children:(0,L.jsx)(V,{})})}),(0,L.jsx)(S,{n:2,title:`Layers`,blurb:`What the kit is built from.`,children:(0,L.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,L.jsx)(`tbody`,{children:K.map(e=>(0,L.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,L.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px]`,children:e.name}),(0,L.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{q as component};