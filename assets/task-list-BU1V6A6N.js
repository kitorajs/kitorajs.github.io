import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import{t as a}from"./task-list-Dy0j8zcZ.js";var o=e({TaskListFlat:()=>u}),s=t(r(),1),c=i(),l=[{id:`t-1`,title:`Wire OAuth callback to session cookie`,status:`doing`,priority:`p1`,owner:{name:`Alex Kim`},due:`May 9`,comments:3},{id:`t-2`,title:`Datatable pagination — server-side`,status:`review`,priority:`p1`,owner:{name:`Grace H`},due:`May 11`,tag:`data`},{id:`t-3`,title:`Empty state for new workspaces`,status:`todo`,priority:`p2`,owner:{name:`Linus T`},due:`May 14`},{id:`t-4`,title:"Migration: add `sessions` table",status:`done`,priority:`p1`,owner:{name:`Alex Kim`},done:!0},{id:`t-5`,title:`Block deploys on failing migrations`,status:`blocked`,priority:`p0`,owner:{name:`Grace H`},due:`May 8`,comments:5}];function u(){let[e,t]=(0,s.useState)(l);return(0,c.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 justify-stretch`,children:(0,c.jsx)(a,{tasks:e,onToggle:(e,n)=>t(t=>t.map(t=>t.id===e.id?{...t,done:n,status:n?`done`:`todo`}:t)),className:`w-full max-w-xl`})})}var d=e({TaskListBoardGroupedByStatus:()=>p}),f=[{id:`t-1`,title:`Wire OAuth callback to session cookie`,status:`doing`,priority:`p1`,owner:{name:`Alex Kim`},due:`May 9`,comments:3},{id:`t-2`,title:`Datatable pagination — server-side`,status:`review`,priority:`p1`,owner:{name:`Grace H`},due:`May 11`,tag:`data`},{id:`t-3`,title:`Empty state for new workspaces`,status:`todo`,priority:`p2`,owner:{name:`Linus T`},due:`May 14`},{id:`t-4`,title:"Migration: add `sessions` table",status:`done`,priority:`p1`,owner:{name:`Alex Kim`},done:!0},{id:`t-5`,title:`Block deploys on failing migrations`,status:`blocked`,priority:`p0`,owner:{name:`Grace H`},due:`May 8`,comments:5}];function p(){let[e,t]=(0,s.useState)(f);return(0,c.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 justify-stretch`,children:(0,c.jsx)(a,{tasks:e,groupBy:`status`,onToggle:(e,n)=>t(t=>t.map(t=>t.id===e.id?{...t,done:n,status:n?`done`:`todo`}:t)),className:`w-full max-w-xl`})})}var m=`import { useState } from "react"
import { type Task, TaskList } from "@kitora/task-list"

const sampleTasks: Task[] = [
  {
    id: "t-1",
    title: "Wire OAuth callback to session cookie",
    status: "doing",
    priority: "p1",
    owner: { name: "Alex Kim" },
    due: "May 9",
    comments: 3,
  },
  {
    id: "t-2",
    title: "Datatable pagination — server-side",
    status: "review",
    priority: "p1",
    owner: { name: "Grace H" },
    due: "May 11",
    tag: "data",
  },
  {
    id: "t-3",
    title: "Empty state for new workspaces",
    status: "todo",
    priority: "p2",
    owner: { name: "Linus T" },
    due: "May 14",
  },
  {
    id: "t-4",
    title: "Migration: add \`sessions\` table",
    status: "done",
    priority: "p1",
    owner: { name: "Alex Kim" },
    done: true,
  },
  {
    id: "t-5",
    title: "Block deploys on failing migrations",
    status: "blocked",
    priority: "p0",
    owner: { name: "Grace H" },
    due: "May 8",
    comments: 5,
  },
]

export function TaskListFlat() {
  const [tasks, setTasks] = useState(sampleTasks)
  const onToggle = (t: Task, next: boolean) =>
    setTasks((prev) =>
      prev.map((x) =>
        x.id === t.id
          ? {
              ...x,
              done: next,
              status: next ? ("done" as const) : ("todo" as const),
            }
          : x,
      ),
    )
  return (
    <div className="flex flex-wrap items-center gap-3 justify-stretch">
      <TaskList tasks={tasks} onToggle={onToggle} className="w-full max-w-xl" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>n(()=>import(`./flat-TV4-wOvQ.js`),[]));var h=`import { useState } from "react"
import { type Task, TaskList } from "@kitora/task-list"

const sampleTasks: Task[] = [
  {
    id: "t-1",
    title: "Wire OAuth callback to session cookie",
    status: "doing",
    priority: "p1",
    owner: { name: "Alex Kim" },
    due: "May 9",
    comments: 3,
  },
  {
    id: "t-2",
    title: "Datatable pagination — server-side",
    status: "review",
    priority: "p1",
    owner: { name: "Grace H" },
    due: "May 11",
    tag: "data",
  },
  {
    id: "t-3",
    title: "Empty state for new workspaces",
    status: "todo",
    priority: "p2",
    owner: { name: "Linus T" },
    due: "May 14",
  },
  {
    id: "t-4",
    title: "Migration: add \`sessions\` table",
    status: "done",
    priority: "p1",
    owner: { name: "Alex Kim" },
    done: true,
  },
  {
    id: "t-5",
    title: "Block deploys on failing migrations",
    status: "blocked",
    priority: "p0",
    owner: { name: "Grace H" },
    due: "May 8",
    comments: 5,
  },
]

export function TaskListBoardGroupedByStatus() {
  const [tasks, setTasks] = useState(sampleTasks)
  const onToggle = (t: Task, next: boolean) =>
    setTasks((prev) =>
      prev.map((x) =>
        x.id === t.id
          ? {
              ...x,
              done: next,
              status: next ? ("done" as const) : ("todo" as const),
            }
          : x,
      ),
    )
  return (
    <div className="flex flex-wrap items-center gap-3 justify-stretch">
      <TaskList tasks={tasks} groupBy="status" onToggle={onToggle} className="w-full max-w-xl" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>n(()=>import(`./grouped-by-status-D9ZSpW7g.js`),[]));var g={"./demos/task-list/flat.tsx":o,"./demos/task-list/grouped-by-status.tsx":d},_={"./demos/task-list/flat.tsx":m,"./demos/task-list/grouped-by-status.tsx":h};export{g as modules,_ as sources};