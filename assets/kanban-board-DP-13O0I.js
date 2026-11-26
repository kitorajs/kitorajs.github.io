import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{t as a}from"./kanban-board-C9OjQdFF.js";var o=e({KanbanBoardDragToChangeStatus:()=>u}),s=t(n(),1),c=i(),l=[{id:`t-1`,title:`Wire OAuth callback to session cookie`,status:`doing`,priority:`p1`,owner:{name:`Alex Kim`},due:`May 9`,comments:3},{id:`t-2`,title:`Datatable pagination — server-side`,status:`review`,priority:`p1`,owner:{name:`Grace H`},due:`May 11`,tag:`data`},{id:`t-3`,title:`Empty state for new workspaces`,status:`todo`,priority:`p2`,owner:{name:`Linus T`},due:`May 14`},{id:`t-4`,title:"Migration: add `sessions` table",status:`done`,priority:`p1`,owner:{name:`Alex Kim`},done:!0},{id:`t-5`,title:`Block deploys on failing migrations`,status:`blocked`,priority:`p0`,owner:{name:`Grace H`},due:`May 8`,comments:5}];function u(){let[e,t]=(0,s.useState)(l);return(0,c.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 justify-stretch`,children:(0,c.jsx)(a,{className:`w-full`,tasks:e,groupBy:`status`,onTaskMove:(e,n)=>t(t=>t.map(t=>t.id===e.id?{...t,status:n}:t))})})}var d=`import { useState } from "react"
import { KanbanBoard, type Task } from "@kitora/task-list"

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

export function KanbanBoardDragToChangeStatus() {
  const [tasks, setTasks] = useState<Task[]>(sampleTasks)
  return (
    <div className="flex flex-wrap items-center gap-3 justify-stretch">
      <KanbanBoard
        className="w-full"
        tasks={tasks}
        groupBy="status"
        onTaskMove={(t, newKey) => setTasks((prev) => prev.map((x) => (x.id === t.id ? { ...x, status: newKey as Task["status"] } : x)))}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(d,()=>r(()=>import(`./drag-to-change-status-CfqAlr5K.js`),[]));var f={"./demos/kanban-board/drag-to-change-status.tsx":o},p={"./demos/kanban-board/drag-to-change-status.tsx":d};export{f as modules,p as sources};