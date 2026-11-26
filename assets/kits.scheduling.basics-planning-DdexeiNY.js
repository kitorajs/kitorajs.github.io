import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i,Wo as a}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as o}from"./example-CZLJLtIC.js";import{A as s,_ as c,a as l,c as u,m as d,t as f}from"./-kits.scheduling.shared-DDgpSEi-.js";import{t as p}from"./edit-h-lg0-4N.js";import{n as m,t as h}from"./gantt-CRUxMLj5.js";import{t as g}from"./timeline-B0a6sG_-.js";var _=e(n(),1),v=i(),y=[{id:`a`,title:`Atlas`,subtitle:`12 seats`,color:`violet`},{id:`b`,title:`Borealis`,subtitle:`6 seats`,color:`cyan`},{id:`c`,title:`Cove`,subtitle:`Phone booth`,color:`amber`}];function b(e,t){let n=s(e),r=(e,r,i=0)=>u(c(d(n,e),r*60+i),t),i=(e.getDay()+6)%7;return{initial:[{id:`1`,resourceId:`a`,title:`Planning`,start:r(i,9),end:r(i,10,30)},{id:`2`,resourceId:`a`,title:`Workshop`,start:r(i,13),end:r(i,16)},{id:`3`,resourceId:`b`,title:`Design crit`,start:r(i,10),end:r(i,11)},{id:`4`,resourceId:`b`,title:`Interview`,start:r(i,10,30),end:r(i,12)},{id:`5`,resourceId:`c`,title:`Call`,start:r(i,11),end:r(i,11,30)}]}}function x(){let e=a(),t=l(e);return(0,v.jsx)(S,{today:t,timeZone:e},`${t.getTime()} ${e}`)}function S({today:e,timeZone:t}){let{initial:n}=(0,_.useMemo)(()=>b(e,t),[e,t]),[r,i]=(0,_.useState)(n);return(0,v.jsx)(g,{resources:y,events:r,date:e,timeZone:t,hourWidth:60,onEventChange:e=>i(n=>p(n,e,{timeZone:t}))})}var C=`import { useMemo, useState } from "react"
import { useDefaultTimeZone } from "@kitora/primitives/react"
import { addDays, applyEventChange, atMinute, type CalendarEvent, fromZoned, type Resource, ResourceTimeline, startOfWeek, useTodayDate } from "@kitora/scheduling"

const rooms: Resource[] = [
  { id: "a", title: "Atlas", subtitle: "12 seats", color: "violet" },
  { id: "b", title: "Borealis", subtitle: "6 seats", color: "cyan" },
  { id: "c", title: "Cove", subtitle: "Phone booth", color: "amber" },
]

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone); timed events are instants in \`timeZone\`. */
function demoData(today: Date, timeZone: string) {
  // Dates relative to this week's Monday, so the demo always has something around today.
  const monday = startOfWeek(today)
  const at = (offset: number, hour: number, minute = 0) => fromZoned(atMinute(addDays(monday, offset), hour * 60 + minute), timeZone)

  const offset = (today.getDay() + 6) % 7
  const initial: CalendarEvent[] = [
    { id: "1", resourceId: "a", title: "Planning", start: at(offset, 9), end: at(offset, 10, 30) },
    { id: "2", resourceId: "a", title: "Workshop", start: at(offset, 13), end: at(offset, 16) },
    { id: "3", resourceId: "b", title: "Design crit", start: at(offset, 10), end: at(offset, 11) },
    { id: "4", resourceId: "b", title: "Interview", start: at(offset, 10, 30), end: at(offset, 12) },
    { id: "5", resourceId: "c", title: "Call", start: at(offset, 11), end: at(offset, 11, 30) },
  ]
  return { initial }
}

// Rows are resources; an event's \`resourceId\` puts it in a row. Drag a booking along its row
// or into another one, pull its right edge to resize.
export function BasicResourceTimeline() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const timeZone = useDefaultTimeZone()
  const today = useTodayDate(timeZone)
  return <Demo key={\`\${today.getTime()} \${timeZone}\`} today={today} timeZone={timeZone} />
}

function Demo({ today, timeZone }: { today: Date; timeZone: string }) {
  const { initial } = useMemo(() => demoData(today, timeZone), [today, timeZone])
  const [events, setEvents] = useState(initial)
  return <ResourceTimeline resources={rooms} events={events} date={today} timeZone={timeZone} hourWidth={60} onEventChange={(change) => setEvents((prev) => applyEventChange(prev, change, { timeZone }))} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>r(()=>import(`./resource-timeline-j_WqNbUC.js`),[]));function w(e){let t=t=>d(e,t);return{tasks:[{id:`design`,name:`Design`,start:t(-4),end:t(2),progress:.8,color:`violet`},{id:`build`,name:`Build`,start:t(2),end:t(10),progress:.2,dependencies:[`design`]},{id:`test`,name:`Test`,start:t(10),end:t(14),dependencies:[`build`],color:`amber`},{id:`ship`,name:`Ship`,start:t(14),end:t(14),milestone:!0,dependencies:[`test`]}]}}function T(){let e=l(),{tasks:t}=(0,_.useMemo)(()=>w(e),[e]);return(0,v.jsx)(h,{tasks:t})}var E=`import { useMemo } from "react"
import { addDays, Gantt, type GanttTask, useTodayDate } from "@kitora/scheduling"

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone). */
function demoData(today: Date) {
  const d = (n: number) => addDays(today, n)

  const tasks: GanttTask[] = [
    { id: "design", name: "Design", start: d(-4), end: d(2), progress: 0.8, color: "violet" },
    { id: "build", name: "Build", start: d(2), end: d(10), progress: 0.2, dependencies: ["design"] },
    { id: "test", name: "Test", start: d(10), end: d(14), dependencies: ["build"], color: "amber" },
    { id: "ship", name: "Ship", start: d(14), end: d(14), milestone: true, dependencies: ["test"] },
  ]
  return { tasks }
}

// The smallest Gantt: tasks with dates, progress and finish-to-start dependencies.
// The red line is today; Day / Week / Month zoom from the toolbar.
export function BasicGantt() {
  // today in the reader's zone: the build's until hydration (so the server HTML matches), then the visitor's
  const today = useTodayDate()
  const { tasks } = useMemo(() => demoData(today), [today])
  return <Gantt tasks={tasks} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>r(()=>import(`./gantt-DBUBk8rX.js`),[]));function D(e){let t=t=>d(e,t);return{initial:[{id:`a`,name:`Spec`,start:t(-3),end:t(2),progress:.6,color:`violet`},{id:`b`,name:`API`,start:t(2),end:t(8),progress:.1,dependencies:[`a`]},{id:`c`,name:`UI`,start:t(4),end:t(9),dependencies:[`a`],color:`cyan`},{id:`d`,name:`QA`,start:t(9),end:t(12),dependencies:[`b`,`c`],color:`amber`}]}}function O(){let e=l();return(0,v.jsx)(k,{today:e},e.getTime())}function k({today:e}){let{initial:t}=(0,_.useMemo)(()=>D(e),[e]),[n,r]=(0,_.useState)(t),[i,a]=(0,_.useState)(!0);return(0,v.jsx)(h,{tasks:n,listWidth:220,onTaskChange:({task:e,start:t,end:n,progress:a})=>r(r=>{let o=r.map(r=>r.id===e.id?{...r,start:t,end:n,progress:a}:r);return i?m(o):o}),toolbarExtra:(0,v.jsxs)(`label`,{className:`flex items-center gap-1.5 text-[12px]`,children:[(0,v.jsx)(`input`,{type:`checkbox`,checked:i,onChange:e=>a(e.target.checked)}),`Push dependents`]})})}var A=`import { useMemo, useState } from "react"
import { addDays, autoSchedule, Gantt, type GanttTask, useTodayDate } from "@kitora/scheduling"

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone). */
function demoData(today: Date) {
  const d = (n: number) => addDays(today, n)

  const initial: GanttTask[] = [
    { id: "a", name: "Spec", start: d(-3), end: d(2), progress: 0.6, color: "violet" },
    { id: "b", name: "API", start: d(2), end: d(8), progress: 0.1, dependencies: ["a"] },
    { id: "c", name: "UI", start: d(4), end: d(9), dependencies: ["a"], color: "cyan" },
    { id: "d", name: "QA", start: d(9), end: d(12), dependencies: ["b", "c"], color: "amber" },
  ]
  return { initial }
}

// Drag a bar to move it, its ends to resize, the small triangle under it for progress.
// With "Push dependents" on, autoSchedule moves every later task so no arrow runs backwards;
// off, a broken link turns red. Alt+←/→ on a focused bar moves it a day.
export function BasicGanttEdit() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const today = useTodayDate()
  return <Demo key={today.getTime()} today={today} />
}

function Demo({ today }: { today: Date }) {
  const { initial } = useMemo(() => demoData(today), [today])
  const [tasks, setTasks] = useState(initial)
  const [push, setPush] = useState(true)
  return (
    <Gantt
      tasks={tasks}
      listWidth={220}
      onTaskChange={({ task, start, end, progress }) => setTasks((prev) => {
        const next = prev.map((t) => (t.id === task.id ? { ...t, start, end, progress } : t))
        return push ? autoSchedule(next) : next
      })}
      toolbarExtra={<label className="flex items-center gap-1.5 text-[12px]"><input type="checkbox" checked={push} onChange={(e) => setPush(e.target.checked)} />Push dependents</label>}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>r(()=>import(`./gantt-edit-BbHY6C7l.js`),[]));function j(e){let t=t=>d(e,t);return{tasks:[{id:`q1`,name:`Research`,start:t(-40),end:t(-10),progress:1,color:`violet`},{id:`q2`,name:`Build`,start:t(-10),end:t(50),progress:.3,dependencies:[`q1`]},{id:`q3`,name:`Beta`,start:t(50),end:t(80),dependencies:[`q2`],color:`rose`},{id:`q4`,name:`Launch`,start:t(80),end:t(80),milestone:!0,dependencies:[`q3`]}]}}function M(){let e=l(),{tasks:t}=(0,_.useMemo)(()=>j(e),[e]),[n,r]=(0,_.useState)(`week`);return(0,v.jsx)(h,{tasks:t,zoom:n,onZoomChange:r,listWidth:200})}var N=`import { useMemo, useState } from "react"
import { addDays, Gantt, type GanttTask, type GanttZoom, useTodayDate } from "@kitora/scheduling"

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone). */
function demoData(today: Date) {
  const d = (n: number) => addDays(today, n)

  const tasks: GanttTask[] = [
    { id: "q1", name: "Research", start: d(-40), end: d(-10), progress: 1, color: "violet" },
    { id: "q2", name: "Build", start: d(-10), end: d(50), progress: 0.3, dependencies: ["q1"] },
    { id: "q3", name: "Beta", start: d(50), end: d(80), dependencies: ["q2"], color: "rose" },
    { id: "q4", name: "Launch", start: d(80), end: d(80), milestone: true, dependencies: ["q3"] },
  ]
  return { tasks }
}

// Zoom is controlled here: day columns, weeks, or months. The axis snaps to whole units
// and scrolls today into view whenever the zoom changes.
export function BasicGanttZoom() {
  // today in the reader's zone: the build's until hydration (so the server HTML matches), then the visitor's
  const today = useTodayDate()
  const { tasks } = useMemo(() => demoData(today), [today])
  const [zoom, setZoom] = useState<GanttZoom>("week")
  return <Gantt tasks={tasks} zoom={zoom} onZoomChange={setZoom} listWidth={200} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>r(()=>import(`./gantt-zoom-D9dSoEHD.js`),[]));function P(){return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(t,{title:`Basics: planning`,children:`Rows of rooms or people on a time axis, and tasks with dependencies on a date axis.`}),(0,v.jsx)(o,{n:1,title:`A resource timeline`,blurb:"`resourceId` puts an event in a row. Drag along a row or into another; pull the right edge to resize.",code:C,children:(0,v.jsx)(f,{testId:`resource-timeline`,height:240,children:(0,v.jsx)(x,{})})}),(0,v.jsx)(o,{n:2,title:`A Gantt chart`,blurb:`Tasks with dates, progress and finish-to-start links; milestones are diamonds; the red line is today.`,code:E,children:(0,v.jsx)(f,{testId:`gantt`,height:260,children:(0,v.jsx)(T,{})})}),(0,v.jsx)(o,{n:3,title:`Editing bars`,blurb:`Drag bars, ends and the progress triangle. Push dependents keeps every arrow pointing forward.`,code:A,children:(0,v.jsx)(f,{testId:`gantt-edit`,height:260,children:(0,v.jsx)(O,{})})}),(0,v.jsx)(o,{n:4,title:`Zoom levels`,blurb:`Day, week or month columns; today scrolls into view on every zoom change.`,code:N,children:(0,v.jsx)(f,{testId:`gantt-zoom`,height:260,children:(0,v.jsx)(M,{})})})]})}export{P as component};