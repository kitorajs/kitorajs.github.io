import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{o as n}from"./range-BMtDYCFV.js";import{Bc as r,Cc as i,Ic as a,Uo as o}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as s}from"./example-CZLJLtIC.js";import{a as c,m as l,t as u,x as d}from"./-kits.scheduling.shared-DDgpSEi-.js";import{i as f,n as p,r as m,t as h}from"./gantt-CRUxMLj5.js";var g=e(r(),1),_=a();function v(){let e=c();return(0,_.jsx)(y,{today:e},e.getTime())}function y({today:e}){let t=o(),[r,i]=(0,g.useState)(()=>p(x(e))),[a,s]=(0,g.useState)(),[c,u]=(0,g.useState)(!0),v=r.find(e=>e.id===a),y=(0,g.useMemo)(()=>a?f(r,a).size:0,[r,a]),b=e=>c?p(e):e;return(0,_.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,_.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,_.jsx)(h,{tasks:r,selectedId:a,onTaskClick:e=>s(t=>t===e.id?void 0:e.id),onTaskChange:({task:e,start:t,end:n,progress:r})=>i(i=>b(i.map(i=>i.id===e.id?{...i,start:t,end:n,progress:r}:i))),onLinkCreate:(e,t)=>i(n=>b(n.map(r=>r.id===t&&!r.dependencies?.includes(e)&&!f(n,t).has(e)?{...r,dependencies:[...r.dependencies??[],e]}:r))),onTasksReorder:i,toolbarExtra:(0,_.jsxs)(`label`,{className:`flex items-center gap-1.5 text-[12px]`,children:[(0,_.jsx)(`input`,{type:`checkbox`,checked:c,onChange:e=>{u(e.target.checked),e.target.checked&&i(p)}}),`Push dependents`]})})}),(0,_.jsx)(`div`,{className:`flex h-7 shrink-0 items-center gap-3 border-t px-3 text-[12px] text-muted-foreground tabular-nums`,role:`status`,children:v?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`b`,{className:`font-medium text-foreground`,children:v.name}),(0,_.jsx)(`span`,{children:n(new Intl.DateTimeFormat(t,{month:`short`,day:`numeric`}),v.start,v.milestone?v.start:l(v.end,-1))}),(0,_.jsx)(`span`,{children:v.milestone?`milestone`:`${d(v.start,v.end)} days`}),(0,_.jsxs)(`span`,{children:[y,` downstream`]}),v.dependencies?.length?(0,_.jsxs)(`button`,{type:`button`,className:`ml-auto rounded px-1.5 hover:bg-muted hover:text-foreground`,onClick:()=>i(e=>e.map(e=>e.id===v.id?{...e,dependencies:[]}:e)),children:[`Remove `,v.dependencies.length,` incoming link`,v.dependencies.length>1?`s`:``]}):null]}):(0,_.jsxs)(`span`,{children:[m(r).length,` links · click a task to see its chain`]})})]})}function b(e,t,n,r,i,a={}){let o=l(e,r);return{id:t,name:n,start:o,end:l(o,i),...a}}function x(e){return[b(e,`discovery`,`Discovery`,-20,1),b(e,`research`,`User research`,-20,8,{parentId:`discovery`,progress:1,color:`violet`,assignee:`Priya`}),b(e,`spec`,`Write the spec`,-12,5,{parentId:`discovery`,progress:1,dependencies:[`research`],color:`violet`,assignee:`Ana`}),b(e,`spec-ok`,`Spec approved`,-7,0,{parentId:`discovery`,milestone:!0,dependencies:[`spec`]}),b(e,`build`,`Build`,-7,1),b(e,`api`,`Billing API`,-7,12,{parentId:`build`,progress:.7,dependencies:[`spec-ok`],color:`blue`,assignee:`Sam`}),b(e,`ui`,`Checkout UI`,-4,10,{parentId:`build`,progress:.45,dependencies:[`spec-ok`],color:`cyan`,assignee:`Priya`}),b(e,`migrate`,`Data migration`,3,6,{parentId:`build`,progress:.1,dependencies:[`api`],color:`blue`,assignee:`Sam`}),b(e,`qa`,`QA pass`,8,6,{parentId:`build`,dependencies:[`ui`,`migrate`],color:`amber`,assignee:`Ana`}),b(e,`launch`,`Launch`,14,1),b(e,`docs`,`Docs and changelog`,10,5,{parentId:`launch`,dependencies:[`ui`],color:`green`,assignee:`Ana`}),b(e,`beta`,`Private beta`,14,7,{parentId:`launch`,dependencies:[`qa`],color:`rose`}),b(e,`ga`,`General availability`,21,0,{parentId:`launch`,milestone:!0,dependencies:[`beta`,`docs`]})]}var S=`import { useMemo, useState } from "react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { formatDateRange } from "@kitora/pickers/core"
import { addDays, autoSchedule, dependencyLinks, diffDays, Gantt, successorsOf, useTodayDate, type GanttTask } from "@kitora/scheduling"

// A product launch plan: phases roll up from their tasks, milestones are diamonds, arrows are
// finish-to-start links. Drag bars, ends and progress; drag a row's grip to reorder it among its
// siblings (on @kitora/dnd); hover a bar and drag its end dot onto another bar to link them.
// Selecting a task highlights everything downstream of it.
export function ProjectGantt() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const today = useTodayDate()
  return <Plan key={today.getTime()} today={today} />
}

function Plan({ today }: { today: Date }) {
  const locale = useDefaultLocale()
  const [tasks, setTasks] = useState<GanttTask[]>(() => autoSchedule(launchPlan(today)))
  const [selectedId, setSelectedId] = useState<string>()
  const [push, setPush] = useState(true)
  const selected = tasks.find((t) => t.id === selectedId)
  const downstream = useMemo(() => (selectedId ? successorsOf(tasks, selectedId).size : 0), [tasks, selectedId])
  const settle = (next: GanttTask[]) => (push ? autoSchedule(next) : next)
  return (
    <div className="flex h-full flex-col">
      <div className="min-h-0 flex-1">
        <Gantt
          tasks={tasks}
          selectedId={selectedId}
          onTaskClick={(t) => setSelectedId((id) => (id === t.id ? undefined : t.id))}
          onTaskChange={({ task, start, end, progress }) => setTasks((prev) => settle(prev.map((t) => (t.id === task.id ? { ...t, start, end, progress } : t))))}
          onLinkCreate={(from, to) => setTasks((prev) => settle(prev.map((t) => (t.id === to && !t.dependencies?.includes(from) && !successorsOf(prev, to).has(from) ? { ...t, dependencies: [...(t.dependencies ?? []), from] } : t))))}
          onTasksReorder={setTasks}
          toolbarExtra={<label className="flex items-center gap-1.5 text-[12px]"><input type="checkbox" checked={push} onChange={(e) => { setPush(e.target.checked); if (e.target.checked) setTasks(autoSchedule) }} />Push dependents</label>}
        />
      </div>
      <div className="flex h-7 shrink-0 items-center gap-3 border-t px-3 text-[12px] text-muted-foreground tabular-nums" role="status">
        {selected ? (
          <>
            <b className="font-medium text-foreground">{selected.name}</b>
            <span>{formatDateRange(new Intl.DateTimeFormat(locale, { month: "short", day: "numeric" }), selected.start, selected.milestone ? selected.start : addDays(selected.end, -1))}</span>
            <span>{selected.milestone ? "milestone" : \`\${diffDays(selected.start, selected.end)} days\`}</span>
            <span>{downstream} downstream</span>
            {selected.dependencies?.length ? (
              <button type="button" className="ml-auto rounded px-1.5 hover:bg-muted hover:text-foreground" onClick={() => setTasks((prev) => prev.map((t) => (t.id === selected.id ? { ...t, dependencies: [] } : t)))}>Remove {selected.dependencies.length} incoming link{selected.dependencies.length > 1 ? "s" : ""}</button>
            ) : null}
          </>
        ) : <span>{dependencyLinks(tasks).length} links · click a task to see its chain</span>}
      </div>
    </div>
  )
}

// ── Demo data: a launch plan placed around today ──

function task(today: Date, id: string, name: string, startOffset: number, days: number, extra: Partial<GanttTask> = {}): GanttTask {
  const start = addDays(today, startOffset)
  return { id, name, start, end: addDays(start, days), ...extra }
}

/** A product launch plan around \`today\`: phases with children, dependencies, milestones and progress. */
function launchPlan(today: Date): GanttTask[] {
  return [
    task(today, "discovery", "Discovery", -20, 1),
    task(today, "research", "User research", -20, 8, { parentId: "discovery", progress: 1, color: "violet", assignee: "Priya" }),
    task(today, "spec", "Write the spec", -12, 5, { parentId: "discovery", progress: 1, dependencies: ["research"], color: "violet", assignee: "Ana" }),
    task(today, "spec-ok", "Spec approved", -7, 0, { parentId: "discovery", milestone: true, dependencies: ["spec"] }),
    task(today, "build", "Build", -7, 1),
    task(today, "api", "Billing API", -7, 12, { parentId: "build", progress: 0.7, dependencies: ["spec-ok"], color: "blue", assignee: "Sam" }),
    task(today, "ui", "Checkout UI", -4, 10, { parentId: "build", progress: 0.45, dependencies: ["spec-ok"], color: "cyan", assignee: "Priya" }),
    task(today, "migrate", "Data migration", 3, 6, { parentId: "build", progress: 0.1, dependencies: ["api"], color: "blue", assignee: "Sam" }),
    task(today, "qa", "QA pass", 8, 6, { parentId: "build", dependencies: ["ui", "migrate"], color: "amber", assignee: "Ana" }),
    task(today, "launch", "Launch", 14, 1),
    task(today, "docs", "Docs and changelog", 10, 5, { parentId: "launch", dependencies: ["ui"], color: "green", assignee: "Ana" }),
    task(today, "beta", "Private beta", 14, 7, { parentId: "launch", dependencies: ["qa"], color: "rose" }),
    task(today, "ga", "General availability", 21, 0, { parentId: "launch", milestone: true, dependencies: ["beta", "docs"] }),
  ]
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>i(()=>import(`./project-gantt-sRmxMHKR.js`),[]));function C(e){let t=t=>l(e,t);return[{id:`design`,name:`التصميم`,start:t(-4),end:t(2),progress:.8,color:`violet`},{id:`build`,name:`البناء`,start:t(2),end:t(10),progress:.2,dependencies:[`design`]},{id:`test`,name:`الاختبار`,start:t(10),end:t(14),dependencies:[`build`],color:`amber`},{id:`ship`,name:`الإطلاق`,start:t(14),end:t(14),milestone:!0,dependencies:[`test`]}]}function w(){let e=c();return(0,_.jsx)(T,{today:e},e.getTime())}function T({today:e}){let[t,n]=(0,g.useState)((0,g.useMemo)(()=>C(e),[e]));return(0,_.jsx)(`div`,{dir:`rtl`,lang:`ar`,className:`h-full`,children:(0,_.jsx)(h,{tasks:t,today:e,onTaskChange:e=>n(t=>t.map(t=>t.id===e.task.id?{...t,start:e.start,end:e.end,progress:e.progress}:t))})})}var E=`import { useMemo, useState } from "react"
import { addDays, Gantt, type GanttTask, useTodayDate } from "@kitora/scheduling"

/** The demo's data around \`today\` (a wall-time Date: today in the reader's zone). */
function demoData(today: Date): GanttTask[] {
  const d = (n: number) => addDays(today, n)
  return [
    { id: "design", name: "التصميم", start: d(-4), end: d(2), progress: 0.8, color: "violet" },
    { id: "build", name: "البناء", start: d(2), end: d(10), progress: 0.2, dependencies: ["design"] },
    { id: "test", name: "الاختبار", start: d(10), end: d(14), dependencies: ["build"], color: "amber" },
    { id: "ship", name: "الإطلاق", start: d(14), end: d(14), milestone: true, dependencies: ["test"] },
  ]
}

/**
 * The Gantt chart inside \`dir="rtl"\`: the task list sits on the right and time runs to the left, the dependency arrows
 * point the same way, a drag toward the left moves a task later, Alt+← moves a focused bar a day later, and Today scrolls
 * the right-to-left way.
 */
export function RightToLeftGantt() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const today = useTodayDate()
  return <Demo key={today.getTime()} today={today} />
}

function Demo({ today }: { today: Date }) {
  const initial = useMemo(() => demoData(today), [today])
  const [tasks, setTasks] = useState(initial)
  return (
    <div dir="rtl" lang="ar" className="h-full">
      <Gantt
        tasks={tasks}
        today={today}
        onTaskChange={(change) => setTasks((prev) => prev.map((t) => (t.id === change.task.id ? { ...t, start: change.start, end: change.end, progress: change.progress } : t)))}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>i(()=>import(`./gantt-rtl-uy0IF-Cu.js`),[]));function D(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Project plan`,children:`A product launch in a Gantt chart. Phases roll up from their tasks, milestones are diamonds, arrows are finish-to-start links and turn red when broken. Drag bars, their ends and the progress triangle; drag a row grip to reorder; hover a bar and drag its end dot onto another bar to link them; click a task to light up its chain.`}),(0,_.jsx)(s,{n:1,title:`A launch plan`,blurb:`Three phases, eleven tasks, two milestones, auto-schedule on or off, link by drag and sibling reorder on the dnd kit.`,code:S,children:(0,_.jsx)(u,{testId:`project-gantt`,height:560,children:(0,_.jsx)(v,{})})}),(0,_.jsx)(s,{n:2,title:`Right to left`,blurb:'Inside `dir="rtl"` the task list sits on the right and time runs to the left; the arrows follow, a drag toward the left moves a task later, Alt+← moves a focused bar a day later and Today scrolls the right-to-left way.',code:E,children:(0,_.jsx)(u,{testId:`gantt-rtl`,height:360,children:(0,_.jsx)(w,{})})})]})}export{D as component};