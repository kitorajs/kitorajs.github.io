import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{a,n as o,o as s,s as c,t as l}from"./connected-DhNMISPx.js";import{t as u}from"./task-list-CqueOTbd.js";import{t as d}from"./task-list-board-DyRwbXQw.js";import{t as f}from"./task-list-view-CFXKG_yy.js";import"./kit-gallery-Bph7isB2.js";import{t as p}from"./example-BGnSQG2Y.js";var m=e(n(),1),h=i(),g=[{id:`1`,title:`Write the changelog`,status:`todo`,priority:`p2`},{id:`2`,title:`Review the auth PR`,status:`doing`,priority:`p1`},{id:`3`,title:`Ship 1.4`,status:`done`,done:!0}];function _(){let[e,t]=(0,m.useState)(g);return(0,h.jsx)(u,{tasks:e,onToggle:(e,n)=>t(t=>t.map(t=>t.id===e.id?{...t,done:n,status:n?`done`:`todo`}:t))})}var v=`import { useState } from "react"
import { TaskList, type Task } from "@kitora/task-list"

const initial: Task[] = [
  { id: "1", title: "Write the changelog", status: "todo", priority: "p2" },
  { id: "2", title: "Review the auth PR", status: "doing", priority: "p1" },
  { id: "3", title: "Ship 1.4", status: "done", done: true },
]

/** One list, no provider: the plain component takes tasks and reports changes (the status circle's Done calls onToggle). */
export function OneList() {
  const [tasks, setTasks] = useState(initial)
  return (
    <TaskList
      tasks={tasks}
      onToggle={(task, done) => setTasks((all) => all.map((t) => (t.id === task.id ? { ...t, done, status: done ? "done" : "todo" } : t)))}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>r(()=>import(`./one-list-CyxGTErj.js`),[]));var y=[{id:`today`,title:`Today`,tasks:[{id:`1`,title:`Review the auth PR`,status:`doing`,priority:`p1`}]},{id:`week`,title:`This week`,tasks:[{id:`2`,title:`Write the changelog`,status:`todo`},{id:`3`,title:`Plan the offsite`,status:`todo`}]},{id:`later`,title:`Later`,tasks:[{id:`4`,title:`Archive old projects`,status:`todo`,priority:`p3`}]}];function b(){return(0,h.jsx)(a,{adapter:(0,m.useMemo)(()=>c({initial:y}),[]),children:(0,h.jsx)(l,{})})}var x=`import { useMemo } from "react"
import { ConnectedTaskListBoard, TaskListProvider, createInMemoryAdapter, type TaskListGroup } from "@kitora/task-list"

const lists: TaskListGroup[] = [
  { id: "today", title: "Today", tasks: [{ id: "1", title: "Review the auth PR", status: "doing", priority: "p1" }] },
  { id: "week", title: "This week", tasks: [{ id: "2", title: "Write the changelog", status: "todo" }, { id: "3", title: "Plan the offsite", status: "todo" }] },
  { id: "later", title: "Later", tasks: [{ id: "4", title: "Archive old projects", status: "todo", priority: "p3" }] },
]

/** A board of lists: the provider loads them from an adapter and the board wires every feature it supports. */
export function BasicBoard() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: lists }), [])
  return (
    <TaskListProvider adapter={adapter}>
      <ConnectedTaskListBoard />
    </TaskListProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./board-of-lists-COH78ZiT.js`),[]));var S=[{id:`todo`,title:`To do`,tasks:[{id:`1`,title:`Draft the RFC`,status:`todo`}]},{id:`review`,title:`In review`,tasks:[{id:`2`,title:`Billing page`,status:`doing`,priority:`p1`}]}];function C(){let[e,t]=(0,m.useState)(S),n=(e,n)=>t(t=>t.map(t=>t.id===e?n(t):t));return(0,h.jsx)(d,{groups:e,onGroupsChange:t,onTaskToggle:(e,t,r)=>n(e,e=>({...e,tasks:e.tasks.map(e=>e.id===t.id?{...e,done:r,status:r?`done`:`todo`}:e)})),onAddTask:(e,t,r)=>n(e,e=>{let n={id:crypto.randomUUID(),title:t,status:`todo`};return{...e,tasks:r===`top`?[n,...e.tasks]:[...e.tasks,n]}})})}var w=`import { useState } from "react"
import { TaskListBoard, type TaskListGroup } from "@kitora/task-list"

const initial: TaskListGroup[] = [
  { id: "todo", title: "To do", tasks: [{ id: "1", title: "Draft the RFC", status: "todo" }] },
  { id: "review", title: "In review", tasks: [{ id: "2", title: "Billing page", status: "doing", priority: "p1" }] },
]

/** The board without a provider: you own \`groups\`; drags and list edits come back through \`onGroupsChange\`. */
export function ControlledBoard() {
  const [groups, setGroups] = useState(initial)
  const patch = (groupId: string, update: (group: TaskListGroup) => TaskListGroup) => setGroups((all) => all.map((g) => (g.id === groupId ? update(g) : g)))
  return (
    <TaskListBoard
      groups={groups}
      onGroupsChange={setGroups}
      onTaskToggle={(groupId, task, done) => patch(groupId, (g) => ({ ...g, tasks: g.tasks.map((t) => (t.id === task.id ? { ...t, done, status: done ? "done" : "todo" } : t)) }))}
      onAddTask={(groupId, title, position) =>
        patch(groupId, (g) => {
          const task = { id: crypto.randomUUID(), title, status: "todo" as const }
          return { ...g, tasks: position === "top" ? [task, ...g.tasks] : [...g.tasks, task] }
        })
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>r(()=>import(`./controlled-board-CwO-pmh6.js`),[]));var T=[{id:`today`,title:`Today`,tasks:[{id:`1`,title:`Reply to support`,status:`todo`,priority:`p1`}]},{id:`later`,title:`Later`,tasks:[{id:`2`,title:`Clean up old branches`,status:`todo`},{id:`3`,title:`Book the venue`,status:`done`,done:!0}]}];function E(){let{groups:e}=s();return(0,h.jsx)(f,{groups:e})}function D(){return(0,h.jsx)(a,{adapter:(0,m.useMemo)(()=>c({initial:T}),[]),children:(0,h.jsx)(o,{savedViewsStorageKey:null,children:(0,h.jsx)(E,{})})})}var O=`import { useMemo } from "react"
import { TaskListFlatGroups, TaskListProvider, TaskListUIProvider, createInMemoryAdapter, useTaskList, type TaskListGroup } from "@kitora/task-list"

const lists: TaskListGroup[] = [
  { id: "today", title: "Today", tasks: [{ id: "1", title: "Reply to support", status: "todo", priority: "p1" }] },
  { id: "later", title: "Later", tasks: [{ id: "2", title: "Clean up old branches", status: "todo" }, { id: "3", title: "Book the venue", status: "done", done: true }] },
]

/** Reads the provider's groups and hands them to the flat view. */
function Sections() {
  const { groups } = useTaskList()
  return <TaskListFlatGroups groups={groups} />
}

/** The denser alternative to the board: each list as a titled section, no drag. Toggling writes through the adapter. */
export function FlatSections() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: lists }), [])
  return (
    <TaskListProvider adapter={adapter}>
      <TaskListUIProvider savedViewsStorageKey={null}>
        <Sections />
      </TaskListUIProvider>
    </TaskListProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./flat-groups-C9BTBXmo.js`),[]));function k(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t,{title:`Basics: lists and boards`,children:`A single list from an array, then a board of lists loaded through an adapter.`}),(0,h.jsx)(p,{n:1,title:`One list`,blurb:`TaskList on its own: pass tasks, handle onToggle. No provider needed.`,code:v,children:(0,h.jsx)(_,{})}),(0,h.jsx)(p,{n:2,title:`A board`,blurb:`TaskListProvider loads the lists from an adapter; ConnectedTaskListBoard wires drag, rename, menus and the composer.`,code:x,children:(0,h.jsx)(b,{})}),(0,h.jsx)(p,{n:3,title:`A controlled board`,blurb:`TaskListBoard without a provider: you hold the groups; onGroupsChange, onTaskToggle and onAddTask report every change.`,code:w,children:(0,h.jsx)(C,{})}),(0,h.jsx)(p,{n:4,title:`Flat sections`,blurb:`TaskListFlatGroups renders each list as a titled section with no drag, inside TaskListProvider and TaskListUIProvider.`,code:O,children:(0,h.jsx)(D,{})})]})}export{k as component};