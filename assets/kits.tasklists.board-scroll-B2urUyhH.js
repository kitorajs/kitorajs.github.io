import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./arrow-up-right-DYspX3Ag.js";import{s as n}from"./kit-docs-BUovISd0.js";import{Bc as r,Cc as i,Ic as a,Oc as o,ti as s}from"./index-B9ukmIN1.js";import{a as c,i as l,n as u,s as d,t as f}from"./connected-DhNMISPx.js";import{a as p,i as m,n as h,o as g,r as _,s as v,t as y}from"./task-list-preview-sheet-COrzKUtL.js";import"./kit-gallery-Bph7isB2.js";import{t as b}from"./example-BGnSQG2Y.js";var x=e(r(),1),S=a(),C=[`todo`,`doing`,`review`,`done`,`blocked`,`cancelled`],w=[`p0`,`p1`,`p2`,`p3`],T=[`Auth`,`Infra`,`Data`,`Onboarding`,`Workspaces`,`Dashboard`,`Design`,`Search`,`Billing`,`API`,`Mobile`,`Notifications`],E=[`Alex Kim`,`Grace H`,`Linus T`,`Mira O`,`Sasha B`,`Yara V`,`Noor A`,`Ravi S`],D=`Wire OAuth callback.Rate-limit anon API.Activity feed filter.Empty state for new workspaces.Add migrate dry-run script.Bulk-archive selected projects.Refactor session middleware.Avatar fallback color generator.Server-paginated users table.Audit log retention policy.Inline editing — kanban column.CSV export on filtered view.Datatable virtualization spike.Slack ingest worker.Webhook signing rotation.Daily digest email.Onboarding checklist card.Schema drift detector.Error boundary on dashboard.Light mode contrast pass.Localization smoke test.Saved view import/export.Bug: filter chip race.Bug: drag-drop offset.Spike: replace dropdown lib.Reorder pinned views.Restore deleted task flow.Sticky bulk action bar.Diff viewer in PR card.Audit trail per record`.split(`.`),O=(e,t)=>e[t%e.length];function k(e,t){return Array.from({length:t},(t,n)=>{let r=Math.floor(n/D.length),i=O(D,n+n*7%D.length);return{id:`${e}-${n+1}`,title:r===0?i:`${i} #${r+1}`,status:O(C,n*13),priority:O(w,n*5),owner:{name:O(E,n*3)},project:O(T,n*11),comments:n%7==0?n%11:void 0}})}var A=[{id:`today`,title:`Today`,description:`Ship before EOD`,tasks:k(`today`,250)},{id:`this-week`,title:`This week`,description:`5 open · 1 review`,tasks:k(`week`,250)},{id:`next-week`,title:`Next week`,tasks:k(`next`,250)},{id:`backlog`,title:`Backlog`,description:`prioritize Friday`,tasks:k(`back`,250)}];function j(){let e=l();return(0,S.jsxs)(`div`,{children:[(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 rounded-lg border border-border bg-surface-1 p-2`,children:[(0,S.jsx)(v,{}),(0,S.jsx)(g,{}),(0,S.jsx)(p,{}),(0,S.jsx)(m,{}),(0,S.jsx)(_,{})]}),(0,S.jsx)(`div`,{className:`mt-6`,children:(0,S.jsx)(f,{groups:e.filteredGroups,taskListVirt:{containerHeight:360,estimateRowHeight:36}})}),(0,S.jsx)(`p`,{className:`mt-4 text-center text-[11px] text-muted-foreground`,children:`4 lists × 250 tasks · each list its own virtual scroller`}),(0,S.jsx)(h,{}),(0,S.jsx)(y,{footer:e=>(0,S.jsx)(s,{variant:`outline`,size:`sm`,asChild:!0,children:(0,S.jsxs)(o,{to:`/kits/tasklists/$taskId`,params:{taskId:e.id},children:[(0,S.jsx)(t,{}),`Open full page`]})})})]})}function M(){return(0,S.jsx)(c,{adapter:(0,x.useMemo)(()=>d({initial:A,latencyMs:0}),[]),children:(0,S.jsx)(u,{savedViewsStorageKey:`kitora:tasklists:board-scroll`,children:(0,S.jsx)(j,{})})})}var N=`import { useMemo } from "react"
import { Link } from "@tanstack/react-router"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { ConnectedTaskListBoard, TaskListBulkActions, TaskListClearFilters, TaskListFilterChips, TaskListPreviewSheet, TaskListPriorityFilter, TaskListProvider, TaskListSearch, TaskListStatusFilter, TaskListUIProvider, createInMemoryAdapter, useTaskListUI, type Task, type TaskListAdapter, type TaskListGroup, type TaskPriority, type TaskStatus } from "@kitora/task-list"

// stub: replace with your API — four lists of 250 generated tasks
const STATUSES: TaskStatus[] = ["todo", "doing", "review", "done", "blocked", "cancelled"]
const PRIORITIES: TaskPriority[] = ["p0", "p1", "p2", "p3"]
const PROJECTS = ["Auth", "Infra", "Data", "Onboarding", "Workspaces", "Dashboard", "Design", "Search", "Billing", "API", "Mobile", "Notifications"]
const OWNERS = ["Alex Kim", "Grace H", "Linus T", "Mira O", "Sasha B", "Yara V", "Noor A", "Ravi S"]
const TITLES = ["Wire OAuth callback", "Rate-limit anon API", "Activity feed filter", "Empty state for new workspaces", "Add migrate dry-run script", "Bulk-archive selected projects", "Refactor session middleware", "Avatar fallback color generator", "Server-paginated users table", "Audit log retention policy", "Inline editing — kanban column", "CSV export on filtered view", "Datatable virtualization spike", "Slack ingest worker", "Webhook signing rotation", "Daily digest email", "Onboarding checklist card", "Schema drift detector", "Error boundary on dashboard", "Light mode contrast pass", "Localization smoke test", "Saved view import/export", "Bug: filter chip race", "Bug: drag-drop offset", "Spike: replace dropdown lib", "Reorder pinned views", "Restore deleted task flow", "Sticky bulk action bar", "Diff viewer in PR card", "Audit trail per record"]

const pick = <T,>(arr: readonly T[], i: number): T => arr[i % arr.length]

function makeTasks(prefix: string, n: number): Task[] {
  return Array.from({ length: n }, (_, i) => {
    const dup = Math.floor(i / TITLES.length)
    const title = pick(TITLES, i + ((i * 7) % TITLES.length))
    return {
      id: \`\${prefix}-\${i + 1}\`,
      title: dup === 0 ? title : \`\${title} #\${dup + 1}\`,
      status: pick(STATUSES, i * 13),
      priority: pick(PRIORITIES, i * 5),
      owner: { name: pick(OWNERS, i * 3) },
      project: pick(PROJECTS, i * 11),
      comments: i % 7 === 0 ? i % 11 : undefined,
    }
  })
}

const SEED: TaskListGroup[] = [
  { id: "today", title: "Today", description: "Ship before EOD", tasks: makeTasks("today", 250) },
  { id: "this-week", title: "This week", description: "5 open · 1 review", tasks: makeTasks("week", 250) },
  { id: "next-week", title: "Next week", tasks: makeTasks("next", 250) },
  { id: "backlog", title: "Backlog", description: "prioritize Friday", tasks: makeTasks("back", 250) },
]

function Board() {
  const ui = useTaskListUI()
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-surface-1 p-2">
        <TaskListSearch />
        <TaskListStatusFilter />
        <TaskListPriorityFilter />
        <TaskListFilterChips />
        <TaskListClearFilters />
      </div>

      <div className="mt-6">
        {/* taskListVirt gives each list its own fixed-height virtual scroller; rows are measured, so expanding subtasks reflows it */}
        <ConnectedTaskListBoard groups={ui.filteredGroups} taskListVirt={{ containerHeight: 360, estimateRowHeight: 36 }} />
      </div>

      <p className="mt-4 text-center text-[11px] text-muted-foreground">4 lists × 250 tasks · each list its own virtual scroller</p>

      <TaskListBulkActions />
      <TaskListPreviewSheet
        footer={(task) => (
          <Button variant="outline" size="sm" asChild>
            <Link to="/kits/tasklists/$taskId" params={{ taskId: task.id }}>
              <ArrowUpRight />
              Open full page
            </Link>
          </Button>
        )}
      />
    </div>
  )
}

export function VirtualTaskBoard() {
  // no pageSize: every task stays in memory, virtualization keeps the DOM small
  const adapter = useMemo<TaskListAdapter>(() => createInMemoryAdapter({ initial: SEED, latencyMs: 0 }), [])
  return (
    <TaskListProvider adapter={adapter}>
      <TaskListUIProvider savedViewsStorageKey="kitora:tasklists:board-scroll">
        <Board />
      </TaskListUIProvider>
    </TaskListProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>i(()=>import(`./board-scroll-Key-Opsc.js`),[]));var P=`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`;function F(){return(0,S.jsxs)(`div`,{children:[(0,S.jsxs)(n,{title:`Board + virt scroll`,children:[`Same `,(0,S.jsx)(`code`,{className:P,children:`<ConnectedTaskListBoard>`}),` as the regular Board. The only addition is `,(0,S.jsx)(`code`,{className:P,children:`taskListVirt`}),` — each list wraps its row stack in `,(0,S.jsx)(`code`,{className:P,children:`useVirtualizer`}),`. Every feature stays live; subtask expansion auto-remeasures the virtual row.`]}),(0,S.jsx)(b,{n:1,title:`Every list virtualized`,blurb:`taskListVirt hands each list a fixed-height scroller; rows are measured, so expanding subtasks reflows the window.`,code:N,children:(0,S.jsx)(M,{})})]})}export{F as component};