import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{a,s as o,t as s}from"./connected-CpNpevYg.js";import{t as c}from"./kanban-board-C9OjQdFF.js";import"./kit-gallery-B-Yr9fP4.js";import{t as l}from"./example-CZLJLtIC.js";var u=e(n(),1),d=i(),f=[{id:`inbox`,title:`Inbox`,tasks:[{id:`1`,title:`Tick me off`,status:`todo`}]}];function p(){return(0,d.jsx)(a,{adapter:(0,u.useMemo)(()=>o({initial:f}),[]),features:{inlineComposer:{bottom:!0},drag:!1,reorderLists:!1,multiSelect:!1,kanban:!1,savedViews:!1},children:(0,d.jsx)(s,{})})}var m=`import { useMemo } from "react"
import { ConnectedTaskListBoard, TaskListProvider, createInMemoryAdapter, type TaskListGroup } from "@kitora/task-list"

const lists: TaskListGroup[] = [{ id: "inbox", title: "Inbox", tasks: [{ id: "1", title: "Tick me off", status: "todo" }] }]

/**
 * Type in the composer under the list and press Enter to add a task; click a task's status
 * circle and pick Done to complete it. The adapter's createTask and updateTask save both; \`features\` turns off
 * what this example does not need.
 */
export function AddAndComplete() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: lists }), [])
  return (
    <TaskListProvider adapter={adapter} features={{ inlineComposer: { bottom: true }, drag: false, reorderLists: false, multiSelect: false, kanban: false, savedViews: false }}>
      <ConnectedTaskListBoard />
    </TaskListProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>r(()=>import(`./add-complete-nattodfH.js`),[]));var h=[{id:`1`,title:`Write the changelog`,status:`todo`},{id:`2`,title:`Review the auth PR`,status:`doing`,priority:`p1`},{id:`3`,title:`Fix the flaky test`,status:`review`},{id:`4`,title:`Ship 1.4`,status:`done`,done:!0}],g=[`todo`,`doing`,`review`,`blocked`,`done`,`cancelled`],_=e=>g.some(t=>t===e);function v(){let[e,t]=(0,u.useState)(h);return(0,d.jsx)(c,{tasks:e,groupBy:`status`,onTaskMove:(e,n)=>{_(n)&&t(t=>t.map(t=>t.id===e.id?{...t,status:n,done:n===`done`}:t))}})}var y=`import { useState } from "react"
import { KanbanBoard, type Task, type TaskStatus } from "@kitora/task-list"

const initial: Task[] = [
  { id: "1", title: "Write the changelog", status: "todo" },
  { id: "2", title: "Review the auth PR", status: "doing", priority: "p1" },
  { id: "3", title: "Fix the flaky test", status: "review" },
  { id: "4", title: "Ship 1.4", status: "done", done: true },
]

const STATUSES: readonly TaskStatus[] = ["todo", "doing", "review", "blocked", "done", "cancelled"]
const isStatus = (key: string): key is TaskStatus => STATUSES.some((s) => s === key)

/** Columns by status: drag a card (or Space on it, arrows, Space) and onTaskMove gets the new column. */
export function DragBetweenColumns() {
  const [tasks, setTasks] = useState(initial)
  return (
    <KanbanBoard
      tasks={tasks}
      groupBy="status"
      onTaskMove={(task, key) => {
        if (isStatus(key)) setTasks((all) => all.map((t) => (t.id === task.id ? { ...t, status: key, done: key === "done" } : t)))
      }}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>r(()=>import(`./drag-columns-BE3bJR-C.js`),[]));function b(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t,{title:`Basics: editing`,children:`Add and complete tasks through the adapter, and move cards between status columns.`}),(0,d.jsx)(l,{n:1,title:`Adding and completing tasks`,blurb:`The composer calls the adapter's createTask; picking Done in the row's status circle calls updateTask. features turns the rest off.`,code:m,children:(0,d.jsx)(p,{})}),(0,d.jsx)(l,{n:2,title:`Drag between columns`,blurb:`KanbanBoard groups by status; drop a card in another column and onTaskMove gets the column key.`,code:y,children:(0,d.jsx)(v,{})})]})}export{b as component};