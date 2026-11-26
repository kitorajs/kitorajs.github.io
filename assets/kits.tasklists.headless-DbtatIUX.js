import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CiJzHfYx.js";import{t as n}from"./book-text-F6obG4Ld.js";import{s as r}from"./kit-docs-BUovISd0.js";import{t as i}from"./plug-6nklaiBZ.js";import{Bc as a,Cc as o,Ic as s,Oc as c,ti as l}from"./index-B9ukmIN1.js";import{t as u}from"./label-DoQXlIRk.js";import{a as d,o as f,s as p,t as m}from"./connected-DhNMISPx.js";import"./kit-gallery-Bph7isB2.js";import{t as h}from"./example-BGnSQG2Y.js";var g=s(),_=[{id:`inbox`,title:`Inbox`,tasks:[{id:`t1`,title:`Write the changelog`,status:`todo`,priority:`p2`},{id:`t2`,title:`Triage bug reports`,status:`doing`,priority:`p1`}]},{id:`shipped`,title:`Shipped`,tasks:[{id:`t3`,title:`Release 1.4`,status:`done`,done:!0}]}],v=4,y={lists:async()=>structuredClone(_),create:async(e,t,n=`bottom`)=>{let r={id:`t${v++}`,title:t,status:`todo`},i=_.find(t=>t.id===e)?.tasks;return n===`top`?i?.unshift(r):i?.push(r),r},update:async(e,t)=>{for(let n of _)n.tasks=n.tasks.map(n=>n.id===e?{...n,...t}:n)},remove:async e=>{for(let t of _)t.tasks=t.tasks.filter(t=>t.id!==e)}},b={load:()=>y.lists(),createTask:(e,t,n)=>y.create(e,t,n),updateTask:(e,t)=>y.update(e,t),deleteTask:e=>y.remove(e)};function x(){return(0,g.jsx)(d,{adapter:b,features:{kanban:!1},children:(0,g.jsx)(m,{})})}var S=`import { ConnectedTaskListBoard, TaskListProvider, type Task, type TaskListAdapter, type TaskListGroup } from "@kitora/task-list"

// stub: replace with your API — an in-memory server so this file runs as is.
// In your app each function is one fetch call (named on its line).
const DB: TaskListGroup[] = [
  {
    id: "inbox",
    title: "Inbox",
    tasks: [
      { id: "t1", title: "Write the changelog", status: "todo", priority: "p2" },
      { id: "t2", title: "Triage bug reports", status: "doing", priority: "p1" },
    ],
  },
  { id: "shipped", title: "Shipped", tasks: [{ id: "t3", title: "Release 1.4", status: "done", done: true }] },
]
let nextId = 4

const server = {
  // GET /api/lists
  lists: async (): Promise<TaskListGroup[]> => structuredClone(DB),
  // POST /api/lists/:groupId/tasks { title, position }
  create: async (groupId: string, title: string, position: "top" | "bottom" = "bottom"): Promise<Task> => {
    const task: Task = { id: \`t\${nextId++}\`, title, status: "todo" }
    const tasks = DB.find((g) => g.id === groupId)?.tasks
    if (position === "top") tasks?.unshift(task)
    else tasks?.push(task)
    return task
  },
  // PATCH /api/tasks/:id
  update: async (id: string, patch: Partial<Task>): Promise<void> => {
    for (const g of DB) g.tasks = g.tasks.map((t) => (t.id === id ? { ...t, ...patch } : t))
  },
  // DELETE /api/tasks/:id
  remove: async (id: string): Promise<void> => {
    for (const g of DB) g.tasks = g.tasks.filter((t) => t.id !== id)
  },
}

// \`load\` is the only required method; the headless layer derives the features from what you
// implement. Skip deleteTask and the row's Delete item and the bulk bar's Delete action disappear.
const restAdapter: TaskListAdapter = {
  load: () => server.lists(),
  createTask: (groupId, title, position) => server.create(groupId, title, position),
  updateTask: (id, patch) => server.update(id, patch),
  deleteTask: (id) => server.remove(id),
}

export function RestTaskBoard() {
  return (
    <TaskListProvider adapter={restAdapter} features={{ kanban: false }}>
      <ConnectedTaskListBoard />
    </TaskListProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>o(()=>import(`./rest-adapter-C2ndA0HB.js`),[]));var C=e(a(),1),w=[{id:`today`,title:`Today`,description:`Ship before EOD`,tasks:[{id:`t-101`,title:`Review #412 auth refactor`,status:`doing`,priority:`p0`,owner:{name:`Alex Kim`},comments:2,project:`Auth`},{id:`t-103`,title:`Wire OAuth callback to session cookie`,status:`doing`,priority:`p1`,owner:{name:`Alex Kim`},due:`today`,project:`Auth`,subtasks:[{id:`t-103a`,title:`Mint signed cookie on success`,status:`done`,done:!0,priority:`p1`},{id:`t-103b`,title:"Persist `state` param check",status:`doing`,priority:`p1`},{id:`t-103c`,title:`Redirect to original requested path`,status:`todo`,priority:`p2`}]}]},{id:`this-week`,title:`This week`,tasks:[{id:`t-201`,title:`Datatable pagination — server-side`,status:`review`,priority:`p1`,owner:{name:`Grace H`},due:`May 11`,project:`Data`,comments:1},{id:`t-202`,title:`Empty state for new workspaces`,status:`todo`,priority:`p2`,owner:{name:`Linus T`},due:`May 14`,project:`Onboarding`},{id:`t-204`,title:`Block deploys on failing migrations`,status:`blocked`,priority:`p0`,owner:{name:`Grace H`},due:`May 8`,project:`Infra`,comments:5}]},{id:`backlog`,title:`Backlog`,tasks:[{id:`t-401`,title:`Activity feed: per-actor filter`,status:`todo`,priority:`p2`,owner:{name:`Mira O`},project:`Dashboard`},{id:`t-403`,title:`Rate-limit anon API`,status:`todo`,priority:`p1`,owner:{name:`Alex Kim`},project:`Infra`}]}],T=[[`drag`,`Drag tasks`],[`multiSelect`,`Multi-select`],[`subtasks`,`Subtasks`],[`inlineRename`,`Inline rename`],[`contextMenu`,`Context menu`],[`inlineComposer`,`Inline composer`],[`statusPicker`,`Status picker`],[`reorderLists`,`Reorder lists`],[`collapsibleLists`,`Collapse lists`],[`drawerPreview`,`Drawer preview`]];function E({children:e}){let{loading:t}=f();return t?(0,g.jsx)(`div`,{className:`rounded-lg border border-dashed border-border bg-card px-6 py-12 text-center text-sm text-muted-foreground`,children:`Loading…`}):(0,g.jsx)(g.Fragment,{children:e})}function D(){let e=(0,C.useMemo)(()=>p({initial:w,latencyMs:0}),[]),[n,r]=(0,C.useState)({drag:!0,multiSelect:!0,subtasks:!0,inlineRename:!0,contextMenu:!0,inlineComposer:!0,statusPicker:!0,reorderLists:!0,collapsibleLists:!0,drawerPreview:!0}),a=e=>r(t=>({...t,[e]:!t[e]}));return(0,g.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr]`,children:[(0,g.jsxs)(`aside`,{className:`space-y-3 rounded-lg border border-border bg-card p-4`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-2 border-b border-border pb-2`,children:[(0,g.jsx)(i,{className:`size-3.5 text-muted-foreground`}),(0,g.jsx)(`h2`,{className:`font-mono text-[12px] font-semibold uppercase tracking-wider`,children:`Features`})]}),(0,g.jsx)(`ul`,{className:`space-y-2.5`,children:T.map(([e,r])=>(0,g.jsxs)(`li`,{className:`flex items-center justify-between gap-2`,children:[(0,g.jsx)(u,{htmlFor:`f-${e}`,className:`text-[12.5px] font-normal text-muted-foreground`,children:r}),(0,g.jsx)(t,{id:`f-${e}`,checked:!!n[e],onCheckedChange:()=>a(e)})]},e))}),(0,g.jsx)(`p`,{className:`border-t border-border pt-2 text-[11px] leading-relaxed text-muted-foreground`,children:`Disabling a feature unwires its handler in the connected component — the UI affordances disappear immediately.`})]}),(0,g.jsx)(d,{adapter:e,features:n,children:(0,g.jsx)(E,{children:(0,g.jsx)(m,{})})})]})}var O=`import { useMemo, useState, type ReactNode } from "react"
import { Plug } from "lucide-react"
import { Label } from "@kitora/ui/label"
import { Switch } from "@kitora/ui/switch"
import { ConnectedTaskListBoard, TaskListProvider, createInMemoryAdapter, useTaskList, type TaskListAdapter, type TaskListFeatures, type TaskListGroup } from "@kitora/task-list"

// stub: replace with your API
const SEED: TaskListGroup[] = [
  {
    id: "today",
    title: "Today",
    description: "Ship before EOD",
    tasks: [
      { id: "t-101", title: "Review #412 auth refactor", status: "doing", priority: "p0", owner: { name: "Alex Kim" }, comments: 2, project: "Auth" },
      {
        id: "t-103",
        title: "Wire OAuth callback to session cookie",
        status: "doing",
        priority: "p1",
        owner: { name: "Alex Kim" },
        due: "today",
        project: "Auth",
        subtasks: [
          { id: "t-103a", title: "Mint signed cookie on success", status: "done", done: true, priority: "p1" },
          { id: "t-103b", title: "Persist \`state\` param check", status: "doing", priority: "p1" },
          { id: "t-103c", title: "Redirect to original requested path", status: "todo", priority: "p2" },
        ],
      },
    ],
  },
  {
    id: "this-week",
    title: "This week",
    tasks: [
      { id: "t-201", title: "Datatable pagination — server-side", status: "review", priority: "p1", owner: { name: "Grace H" }, due: "May 11", project: "Data", comments: 1 },
      { id: "t-202", title: "Empty state for new workspaces", status: "todo", priority: "p2", owner: { name: "Linus T" }, due: "May 14", project: "Onboarding" },
      { id: "t-204", title: "Block deploys on failing migrations", status: "blocked", priority: "p0", owner: { name: "Grace H" }, due: "May 8", project: "Infra", comments: 5 },
    ],
  },
  {
    id: "backlog",
    title: "Backlog",
    tasks: [
      { id: "t-401", title: "Activity feed: per-actor filter", status: "todo", priority: "p2", owner: { name: "Mira O" }, project: "Dashboard" },
      { id: "t-403", title: "Rate-limit anon API", status: "todo", priority: "p1", owner: { name: "Alex Kim" }, project: "Infra" },
    ],
  },
]

// The switchable features, in display order.
const TOGGLES: readonly [keyof TaskListFeatures, string][] = [
  ["drag", "Drag tasks"],
  ["multiSelect", "Multi-select"],
  ["subtasks", "Subtasks"],
  ["inlineRename", "Inline rename"],
  ["contextMenu", "Context menu"],
  ["inlineComposer", "Inline composer"],
  ["statusPicker", "Status picker"],
  ["reorderLists", "Reorder lists"],
  ["collapsibleLists", "Collapse lists"],
  ["drawerPreview", "Drawer preview"],
]

function LoadingGate({ children }: { children: ReactNode }) {
  const { loading } = useTaskList()
  if (loading) return <div className="rounded-lg border border-dashed border-border bg-card px-6 py-12 text-center text-sm text-muted-foreground">Loading…</div>
  return <>{children}</>
}

export function ToggleableBoard() {
  const adapter = useMemo<TaskListAdapter>(() => createInMemoryAdapter({ initial: SEED, latencyMs: 0 }), [])
  // true = on when the adapter supports it, false = hard off, undefined = the default
  const [features, setFeatures] = useState<TaskListFeatures>({ drag: true, multiSelect: true, subtasks: true, inlineRename: true, contextMenu: true, inlineComposer: true, statusPicker: true, reorderLists: true, collapsibleLists: true, drawerPreview: true })
  const flip = (key: keyof TaskListFeatures) => setFeatures((f) => ({ ...f, [key]: !f[key] }))

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr]">
      <aside className="space-y-3 rounded-lg border border-border bg-card p-4">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <Plug className="size-3.5 text-muted-foreground" />
          <h2 className="font-mono text-[12px] font-semibold uppercase tracking-wider">Features</h2>
        </div>
        <ul className="space-y-2.5">
          {TOGGLES.map(([key, label]) => (
            <li key={key} className="flex items-center justify-between gap-2">
              <Label htmlFor={\`f-\${key}\`} className="text-[12.5px] font-normal text-muted-foreground">
                {label}
              </Label>
              <Switch id={\`f-\${key}\`} checked={!!features[key]} onCheckedChange={() => flip(key)} />
            </li>
          ))}
        </ul>
        <p className="border-t border-border pt-2 text-[11px] leading-relaxed text-muted-foreground">Disabling a feature unwires its handler in the connected component — the UI affordances disappear immediately.</p>
      </aside>

      <TaskListProvider adapter={adapter} features={features}>
        <LoadingGate>
          <ConnectedTaskListBoard />
        </LoadingGate>
      </TaskListProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>o(()=>import(`./toggles-BfcBYhx7.js`),[]));function k(){return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(r,{title:`Headless toggles`,children:`Same components, wired to a swappable adapter. Plug in any data source — REST, GraphQL, Linear, in-memory mocks. Toggle individual features below; the UI rewires instantly.`}),(0,g.jsxs)(`div`,{className:`mb-6 flex flex-wrap items-center gap-2`,children:[(0,g.jsx)(l,{variant:`outline`,size:`sm`,asChild:!0,children:(0,g.jsxs)(c,{to:`/docs/$section/$page`,params:{section:`kits`,page:`task-list`},children:[(0,g.jsx)(n,{className:`size-3.5`}),`Read the docs`]})}),(0,g.jsx)(l,{variant:`outline`,size:`sm`,asChild:!0,children:(0,g.jsx)(c,{to:`/kits/tasklists/features`,children:`Capability sheet`})})]}),(0,g.jsx)(h,{n:1,title:`Live feature toggles`,blurb:`Pass features to TaskListProvider; disabling one unwires its handler in the connected board.`,code:O,children:(0,g.jsx)(D,{})}),(0,g.jsx)(h,{n:2,title:`Wiring up a real backend`,blurb:`Every adapter method is optional — the headless layer derives the available features from what you implement. This one talks to an in-file stub server shaped like a REST API.`,code:S,children:(0,g.jsx)(x,{})})]})}export{k as component};