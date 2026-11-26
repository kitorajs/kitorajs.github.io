import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./event-calendar-BQALw7UF.js";import{s as n}from"./kit-docs-DpYhPoxM.js";import{Bc as r,Cc as i,Ic as a,Wo as o,hi as s}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as c}from"./example-B8EaWveR.js";import{A as l,E as u,_ as d,a as f,c as p,m,t as h}from"./-kits.scheduling.shared-Q0CIcXVZ.js";import{t as g}from"./edit-COJzbCxy.js";import{t as _}from"./timeline-C3_roht3.js";var v=e(r(),1),y=a(),b=[1,3,7];function x(){let e=o(),t=f(e);return(0,y.jsx)(S,{today:t,timeZone:e},`${t.getTime()} ${e}`)}function S({today:e,timeZone:n}){let[r,i]=(0,v.useState)(()=>w(e,n)),[a,o]=(0,v.useState)(1),[c,l]=(0,v.useState)(),[d,f]=(0,v.useState)(`Drag along an empty row to book it.`),m=(e,t,n,i)=>r.some(r=>r.id!==i&&r.resourceId===e&&!r.rrule&&u(r.start,r.end,t,n));return(0,y.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,y.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,y.jsx)(t,{events:r,resources:C,views:[`timeline`],defaultView:`timeline`,timelineDays:a,timeZone:n,selectedKey:c?.key,onEventClick:l,onEventChange:e=>{let t=e.resourceId??e.occurrence.event.resourceId;if(m(t,p(e.start,n),p(e.end,n),e.occurrence.event.id)){f(`Refused: ${C.find(e=>e.id===t)?.title??`that row`} is already booked then.`);return}f(`Moved "${e.occurrence.event.title}".`),i(t=>g(t,e,{timeZone:n,scope:`occurrence`}))},onSelectSlot:e=>{let t=p(e.start,n),r=p(e.end,n);if(m(e.resourceId,t,r)){f(`Refused: that slot overlaps a booking.`);return}i(n=>[...n,{id:`bk-${n.length+1}`,title:`Hold`,start:t,end:r,resourceId:e.resourceId,color:`slate`}]),f(`Booked a hold.`)},toolbarExtra:(0,y.jsx)(`div`,{className:`flex rounded-md border bg-muted/50 p-0.5`,role:`radiogroup`,"aria-label":`Days shown`,children:b.map(e=>(0,y.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":a===e,onClick:()=>o(e),className:s(`h-6 rounded px-2 text-[12px] font-medium tabular-nums text-muted-foreground`,a===e?`bg-background text-foreground shadow-sm`:`hover:text-foreground`),children:e===1?`Day`:`${e} days`},e))})},a)}),(0,y.jsxs)(`div`,{className:`flex h-7 shrink-0 items-center gap-3 border-t px-3 text-[12px] text-muted-foreground`,role:`status`,children:[(0,y.jsx)(`span`,{className:`truncate`,children:d}),c?(0,y.jsxs)(`span`,{className:`ml-auto truncate`,children:[(0,y.jsx)(`b`,{className:`font-medium text-foreground`,children:c.event.title}),` · `,C.find(e=>e.id===c.event.resourceId)?.title]}):null]})]})}var C=[{id:`atlas`,title:`Atlas`,subtitle:`12 seats · screen`,group:`Rooms`,color:`violet`},{id:`borealis`,title:`Borealis`,subtitle:`6 seats`,group:`Rooms`,color:`cyan`},{id:`cove`,title:`Cove`,subtitle:`Phone booth`,group:`Rooms`,color:`amber`},{id:`priya`,title:`Priya Shah`,subtitle:`Design`,group:`People`,color:`rose`},{id:`sam`,title:`Sam Lee`,subtitle:`Engineering`,group:`People`,color:`blue`},{id:`ana`,title:`Ana García`,subtitle:`Product`,group:`People`,color:`green`}];function w(e,t){let n=(n,r=0)=>p(d(e,n*60+r),t),r=(e,t,r,i,a,o,s={})=>({id:e,resourceId:t,title:r,start:n(i[0],i[1]),end:n(a[0],a[1]),color:o,...s});return[r(`b1`,`atlas`,`Sprint planning`,[9,0],[10,30]),r(`b2`,`atlas`,`All hands`,[13,0],[14,0],`rose`),r(`b3`,`atlas`,`Workshop`,[15,0],[17,30]),r(`b4`,`borealis`,`Design crit`,[10,0],[11,0]),r(`b5`,`borealis`,`Hiring loop`,[11,30],[13,0],`blue`),r(`b6`,`borealis`,`Customer call`,[12,30],[13,30],`rose`),r(`b7`,`cove`,`Call — legal`,[9,30],[10,0]),r(`b8`,`cove`,`Call — vendor`,[16,0],[16,30]),r(`b9`,`priya`,`Research interviews`,[10,0],[12,0]),r(`b10`,`priya`,`Figma jam`,[14,0],[15,30]),r(`b11`,`sam`,`On call`,[8,0],[12,0],`amber`,{rrule:`FREQ=DAILY;COUNT=5`}),r(`b12`,`sam`,`Pairing`,[13,0],[15,0]),r(`b13`,`ana`,`Roadmap review`,[11,0],[12,30]),r(`b14`,`ana`,`Board prep`,[15,30],[18,0],`slate`,{readOnly:!0})]}var T=`import { useState } from "react"
import { useDefaultTimeZone } from "@kitora/primitives/react"
import { applyEventChange, atMinute, EventCalendar, fromZoned, overlaps, useTodayDate, type CalendarEvent, type Occurrence, type EventColor, type Resource } from "@kitora/scheduling"
import { cn } from "@kitora/ui/utils"

const SPANS = [1, 3, 7] as const

// Rooms and people as rows. Drag a booking along its row or onto another room, pull its right
// edge to resize, drag along an empty row to book it. A booking that lands on another one in the
// same row is refused, so the timeline never double-books; read-only rows stay put.
export function RoomBooking() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const timeZone = useDefaultTimeZone()
  const today = useTodayDate(timeZone)
  return <Booking key={\`\${today.getTime()} \${timeZone}\`} today={today} timeZone={timeZone} />
}

function Booking({ today, timeZone }: { today: Date; timeZone: string }) {
  const [events, setEvents] = useState<CalendarEvent[]>(() => bookings(today, timeZone))
  const [days, setDays] = useState<(typeof SPANS)[number]>(1)
  const [selected, setSelected] = useState<Occurrence>()
  const [notice, setNotice] = useState("Drag along an empty row to book it.")
  const clashes = (resourceId: string | undefined, start: Date, end: Date, ignore?: string) => events.some((e) => e.id !== ignore && e.resourceId === resourceId && !e.rrule && overlaps(e.start, e.end, start, end))
  return (
    <div className="flex h-full flex-col">
      <div className="min-h-0 flex-1">
        <EventCalendar
          key={days}
          events={events}
          resources={ROOMS}
          views={["timeline"]}
          defaultView="timeline"
          timelineDays={days}
          timeZone={timeZone}
          selectedKey={selected?.key}
          onEventClick={setSelected}
          onEventChange={(change) => {
            const resourceId = change.resourceId ?? change.occurrence.event.resourceId
            if (clashes(resourceId, fromZoned(change.start, timeZone), fromZoned(change.end, timeZone), change.occurrence.event.id)) {
              setNotice(\`Refused: \${ROOMS.find((r) => r.id === resourceId)?.title ?? "that row"} is already booked then.\`)
              return
            }
            setNotice(\`Moved "\${change.occurrence.event.title}".\`)
            setEvents((prev) => applyEventChange(prev, change, { timeZone, scope: "occurrence" }))
          }}
          onSelectSlot={(slot) => {
            const start = fromZoned(slot.start, timeZone)
            const end = fromZoned(slot.end, timeZone)
            if (clashes(slot.resourceId, start, end)) {
              setNotice("Refused: that slot overlaps a booking.")
              return
            }
            setEvents((prev) => [...prev, { id: \`bk-\${prev.length + 1}\`, title: "Hold", start, end, resourceId: slot.resourceId, color: "slate" }])
            setNotice("Booked a hold.")
          }}
          toolbarExtra={(
            <div className="flex rounded-md border bg-muted/50 p-0.5" role="radiogroup" aria-label="Days shown">
              {SPANS.map((n) => (
                <button key={n} type="button" role="radio" aria-checked={days === n} onClick={() => setDays(n)} className={cn("h-6 rounded px-2 text-[12px] font-medium tabular-nums text-muted-foreground", days === n ? "bg-background text-foreground shadow-sm" : "hover:text-foreground")}>{n === 1 ? "Day" : \`\${n} days\`}</button>
              ))}
            </div>
          )}
        />
      </div>
      <div className="flex h-7 shrink-0 items-center gap-3 border-t px-3 text-[12px] text-muted-foreground" role="status">
        <span className="truncate">{notice}</span>
        {selected ? <span className="ml-auto truncate"><b className="font-medium text-foreground">{selected.event.title}</b> · {ROOMS.find((r) => r.id === selected.event.resourceId)?.title}</span> : null}
      </div>
    </div>
  )
}

// ── Demo data: rooms, people and today's bookings ──


const ROOMS: readonly Resource[] = [
  { id: "atlas", title: "Atlas", subtitle: "12 seats · screen", group: "Rooms", color: "violet" },
  { id: "borealis", title: "Borealis", subtitle: "6 seats", group: "Rooms", color: "cyan" },
  { id: "cove", title: "Cove", subtitle: "Phone booth", group: "Rooms", color: "amber" },
  { id: "priya", title: "Priya Shah", subtitle: "Design", group: "People", color: "rose" },
  { id: "sam", title: "Sam Lee", subtitle: "Engineering", group: "People", color: "blue" },
  { id: "ana", title: "Ana García", subtitle: "Product", group: "People", color: "green" },
]

/** Bookings for the resource timeline, all on \`today\` (a wall-time Date: today in the reader's zone), as instants in \`timeZone\`. */
function bookings(today: Date, timeZone: string): CalendarEvent[] {
  /** \`hour:minute\` today, in the display zone. */
  const at = (hour: number, minute = 0) => fromZoned(atMinute(today, hour * 60 + minute), timeZone)
  const b = (id: string, resourceId: string, title: string, from: [number, number], to: [number, number], color?: EventColor, extra: Partial<CalendarEvent> = {}): CalendarEvent => ({ id, resourceId, title, start: at(from[0], from[1]), end: at(to[0], to[1]), color, ...extra })
  return [
    b("b1", "atlas", "Sprint planning", [9, 0], [10, 30]),
    b("b2", "atlas", "All hands", [13, 0], [14, 0], "rose"),
    b("b3", "atlas", "Workshop", [15, 0], [17, 30]),
    b("b4", "borealis", "Design crit", [10, 0], [11, 0]),
    b("b5", "borealis", "Hiring loop", [11, 30], [13, 0], "blue"),
    b("b6", "borealis", "Customer call", [12, 30], [13, 30], "rose"),
    b("b7", "cove", "Call — legal", [9, 30], [10, 0]),
    b("b8", "cove", "Call — vendor", [16, 0], [16, 30]),
    b("b9", "priya", "Research interviews", [10, 0], [12, 0]),
    b("b10", "priya", "Figma jam", [14, 0], [15, 30]),
    b("b11", "sam", "On call", [8, 0], [12, 0], "amber", { rrule: "FREQ=DAILY;COUNT=5" }),
    b("b12", "sam", "Pairing", [13, 0], [15, 0]),
    b("b13", "ana", "Roadmap review", [11, 0], [12, 30]),
    b("b14", "ana", "Board prep", [15, 30], [18, 0], "slate", { readOnly: true }),
  ]
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>i(()=>import(`./room-booking-CEvmNMEL.js`),[]));var E=[{id:`a`,title:`قاعة الأطلس`,subtitle:`١٢ مقعدًا`,color:`violet`},{id:`b`,title:`قاعة الشمال`,subtitle:`٦ مقاعد`,color:`cyan`}];function D(e,t){let n=l(e),r=(e.getDay()+6)%7,i=(e,i=0)=>p(d(m(n,r),e*60+i),t);return[{id:`1`,resourceId:`a`,title:`تخطيط`,start:i(9),end:i(10,30)},{id:`2`,resourceId:`a`,title:`ورشة عمل`,start:i(13),end:i(16)},{id:`3`,resourceId:`b`,title:`مراجعة`,start:i(10),end:i(11)}]}function O(){let e=o(),t=f(e);return(0,y.jsx)(k,{today:t,timeZone:e},`${t.getTime()} ${e}`)}function k({today:e,timeZone:t}){let[n,r]=(0,v.useState)((0,v.useMemo)(()=>D(e,t),[e,t]));return(0,y.jsx)(`div`,{dir:`rtl`,lang:`ar`,className:`h-full`,children:(0,y.jsx)(_,{resources:E,events:n,date:e,timeZone:t,hourWidth:60,onEventChange:e=>r(n=>g(n,e,{timeZone:t}))})})}var A=`import { useMemo, useState } from "react"
import { useDefaultTimeZone } from "@kitora/primitives/react"
import { addDays, applyEventChange, atMinute, type CalendarEvent, fromZoned, type Resource, ResourceTimeline, startOfWeek, useTodayDate } from "@kitora/scheduling"

const rooms: Resource[] = [
  { id: "a", title: "قاعة الأطلس", subtitle: "١٢ مقعدًا", color: "violet" },
  { id: "b", title: "قاعة الشمال", subtitle: "٦ مقاعد", color: "cyan" },
]

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone); timed events are instants in \`timeZone\`. */
function demoData(today: Date, timeZone: string): CalendarEvent[] {
  const monday = startOfWeek(today)
  const offset = (today.getDay() + 6) % 7
  const at = (hour: number, minute = 0) => fromZoned(atMinute(addDays(monday, offset), hour * 60 + minute), timeZone)
  return [
    { id: "1", resourceId: "a", title: "تخطيط", start: at(9), end: at(10, 30) },
    { id: "2", resourceId: "a", title: "ورشة عمل", start: at(13), end: at(16) },
    { id: "3", resourceId: "b", title: "مراجعة", start: at(10), end: at(11) },
  ]
}

/**
 * The resource timeline inside \`dir="rtl"\`: the rooms sit on the right and the hours run to the left; drag a booking to
 * the left to move it later, pull its inline-end (left) edge to make it longer.
 */
export function RightToLeftResources() {
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
      <ResourceTimeline resources={rooms} events={events} date={today} timeZone={timeZone} hourWidth={60} onEventChange={(change) => setEvents((prev) => applyEventChange(prev, change, { timeZone }))} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>i(()=>import(`./resources-rtl-B9dvlZbY.js`),[]));function j(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(n,{title:`Room booking`,children:`Rooms and people as rows of a resource timeline. Drag a booking along its row or onto another room, pull its right edge to resize, drag along an empty row to book it. The host refuses any change that would double-book a row; switch between one, three and seven days.`}),(0,y.jsx)(c,{n:1,title:`Rooms and people`,blurb:`Grouped rows, a repeating on-call shift, a read-only board prep, conflict refusal and a status line.`,code:T,children:(0,y.jsx)(h,{testId:`room-booking`,height:440,children:(0,y.jsx)(x,{})})}),(0,y.jsx)(c,{n:2,title:`Right to left`,blurb:'Inside `dir="rtl"` the rooms sit on the right and the hours run to the left: drag a booking to the left to move it later, or pull its left edge to make it longer.',code:A,children:(0,y.jsx)(h,{testId:`resources-rtl`,height:300,children:(0,y.jsx)(O,{})})})]})}export{j as component};