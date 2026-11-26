import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{t as a}from"./task-list-board-DyRwbXQw.js";var o=e({TaskListBoardDragListHeadersToReorderClickChevronToCollapse:()=>l}),s=t(n(),1),c=i();function l(){let[e,t]=(0,s.useState)([{id:`today`,title:`Today`,description:`Ship before EOD`,tasks:[{id:`b-1`,title:`Review #412 auth refactor`,status:`doing`,priority:`p0`,owner:{name:`Alex Kim`},comments:2},{id:`b-2`,title:`Pair with Grace on rate-limit spec`,status:`todo`,priority:`p1`,owner:{name:`Alex Kim`}}]},{id:`this-week`,title:`This week`,tasks:[{id:`b-3`,title:`Datatable pagination — server-side`,status:`review`,priority:`p1`,owner:{name:`Grace H`},due:`May 11`},{id:`b-4`,title:"Migration: add `sessions` table",status:`done`,priority:`p1`,owner:{name:`Alex Kim`},done:!0},{id:`b-5`,title:`Empty state for new workspaces`,status:`todo`,priority:`p2`,owner:{name:`Linus T`},due:`May 14`}]},{id:`backlog`,title:`Backlog`,collapsed:!0,tasks:[{id:`b-6`,title:`Avatar fallback color generator`,status:`todo`,priority:`p3`,owner:{name:`Linus T`}},{id:`b-7`,title:`Activity feed: per-actor filter`,status:`todo`,priority:`p2`,owner:{name:`Mira O`}}]}]);return(0,c.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 justify-stretch`,children:(0,c.jsx)(a,{className:`w-full max-w-2xl`,groups:e,onGroupsChange:t,onTaskToggle:(e,n,r)=>t(t=>t.map(t=>t.id===e?{...t,tasks:t.tasks.map(e=>e.id===n.id?{...e,done:r,status:r?`done`:`todo`}:e)}:t)),onAddList:()=>t(e=>[...e,{id:`list-${Date.now()}`,title:`New list`,tasks:[]}]),onAddTask:(e,n,r)=>{let i={id:`t-${Date.now()}`,title:n,status:`todo`};t(t=>t.map(t=>t.id===e?{...t,tasks:r===`top`?[i,...t.tasks]:[...t.tasks,i]}:t))}})})}var u=`import { useState } from "react"
import { TaskListBoard, type TaskListBoardGroup } from "@kitora/task-list"

export function TaskListBoardDragListHeadersToReorderClickChevronToCollapse() {
  const [groups, setGroups] = useState<TaskListBoardGroup[]>([
    {
      id: "today",
      title: "Today",
      description: "Ship before EOD",
      tasks: [
        {
          id: "b-1",
          title: "Review #412 auth refactor",
          status: "doing",
          priority: "p0",
          owner: { name: "Alex Kim" },
          comments: 2,
        },
        {
          id: "b-2",
          title: "Pair with Grace on rate-limit spec",
          status: "todo",
          priority: "p1",
          owner: { name: "Alex Kim" },
        },
      ],
    },
    {
      id: "this-week",
      title: "This week",
      tasks: [
        {
          id: "b-3",
          title: "Datatable pagination — server-side",
          status: "review",
          priority: "p1",
          owner: { name: "Grace H" },
          due: "May 11",
        },
        {
          id: "b-4",
          title: "Migration: add \`sessions\` table",
          status: "done",
          priority: "p1",
          owner: { name: "Alex Kim" },
          done: true,
        },
        {
          id: "b-5",
          title: "Empty state for new workspaces",
          status: "todo",
          priority: "p2",
          owner: { name: "Linus T" },
          due: "May 14",
        },
      ],
    },
    {
      id: "backlog",
      title: "Backlog",
      collapsed: true,
      tasks: [
        {
          id: "b-6",
          title: "Avatar fallback color generator",
          status: "todo",
          priority: "p3",
          owner: { name: "Linus T" },
        },
        {
          id: "b-7",
          title: "Activity feed: per-actor filter",
          status: "todo",
          priority: "p2",
          owner: { name: "Mira O" },
        },
      ],
    },
  ])
  return (
    <div className="flex flex-wrap items-center gap-3 justify-stretch">
      <TaskListBoard
        className="w-full max-w-2xl"
        groups={groups}
        onGroupsChange={setGroups}
        onTaskToggle={(gid, t, next) =>
          setGroups((prev) =>
            prev.map((g) =>
              g.id !== gid
                ? g
                : {
                    ...g,
                    tasks: g.tasks.map((x) =>
                      x.id === t.id
                        ? {
                            ...x,
                            done: next,
                            status: next ? ("done" as const) : ("todo" as const),
                          }
                        : x,
                    ),
                  },
            ),
          )
        }
        onAddList={() => setGroups((prev) => [...prev, { id: \`list-\${Date.now()}\`, title: "New list", tasks: [] }])}
        onAddTask={(gid, title, position) => {
          const newTask = {
            id: \`t-\${Date.now()}\`,
            title,
            status: "todo" as const,
          }
          setGroups((prev) =>
            prev.map((g) =>
              g.id !== gid
                ? g
                : {
                    ...g,
                    tasks: position === "top" ? [newTask, ...g.tasks] : [...g.tasks, newTask],
                  },
            ),
          )
        }}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(u,()=>r(()=>import(`./drag-list-headers-to-reorder-click-chevron-to-collapse-B05kG_Cw.js`),[]));var d={"./demos/task-list-board/drag-list-headers-to-reorder-click-chevron-to-collapse.tsx":o},f={"./demos/task-list-board/drag-list-headers-to-reorder-click-chevron-to-collapse.tsx":u};export{d as modules,f as sources};