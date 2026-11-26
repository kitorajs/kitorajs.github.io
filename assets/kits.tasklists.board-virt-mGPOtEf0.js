import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./arrow-up-right-Dw-ZZuOo.js";import{t as n}from"./chevron-left-CWw7zb21.js";import{s as r}from"./kit-docs-CvNs0WqT.js";import{Bc as i,Cc as a,Ic as o,Oc as s,Oi as c,Ti as l,ti as u}from"./index-9y5uwRd3.js";import{a as d,i as f,n as p,o as m,s as h,t as g}from"./connected-CpNpevYg.js";import{a as _,i as v,n as y,o as b,r as x,s as S,t as C}from"./task-list-preview-sheet-R7c3htHk.js";import"./kit-gallery-B-Yr9fP4.js";import{t as w}from"./example-CZLJLtIC.js";var T=e(i(),1),E=o(),D=25,O=[`todo`,`doing`,`review`,`done`,`blocked`,`cancelled`],k=[`p0`,`p1`,`p2`,`p3`],A=[`Auth`,`Infra`,`Data`,`Onboarding`,`Workspaces`,`Dashboard`,`Design`,`Search`,`Billing`,`API`,`Mobile`,`Notifications`],j=[`Alex Kim`,`Grace H`,`Linus T`,`Mira O`,`Sasha B`,`Yara V`,`Noor A`,`Ravi S`],M=`Wire OAuth callback.Rate-limit anon API.Activity feed filter.Empty state for new workspaces.Add migrate dry-run script.Bulk-archive selected projects.Refactor session middleware.Avatar fallback color generator.Server-paginated users table.Audit log retention policy.Inline editing — kanban column.CSV export on filtered view.Datatable virtualization spike.Slack ingest worker.Webhook signing rotation.Daily digest email.Onboarding checklist card.Schema drift detector.Error boundary on dashboard.Light mode contrast pass.Localization smoke test.Saved view import/export.Bug: filter chip race.Bug: drag-drop offset.Spike: replace dropdown lib.Reorder pinned views.Restore deleted task flow.Sticky bulk action bar.Diff viewer in PR card.Audit trail per record`.split(`.`),N=(e,t)=>e[t%e.length];function P(e,t){return Array.from({length:t},(t,n)=>{let r=Math.floor(n/M.length),i=N(M,n+n*7%M.length);return{id:`${e}-${n+1}`,title:r===0?i:`${i} #${r+1}`,status:N(O,n*13),priority:N(k,n*5),owner:{name:N(j,n*3)},project:N(A,n*11),comments:n%7==0?n%11:void 0}})}var F=[{id:`today`,title:`Today`,description:`Ship before EOD`,tasks:P(`today`,250)},{id:`this-week`,title:`This week`,description:`5 open · 1 review`,tasks:P(`week`,250)},{id:`next-week`,title:`Next week`,tasks:P(`next`,250)},{id:`backlog`,title:`Backlog`,description:`prioritize Friday`,tasks:P(`back`,250)}];function I(){let{mutators:e}=m(),r=f(),[i,a]=(0,T.useState)({}),[o,d]=(0,T.useState)({}),p=(0,T.useCallback)(async(t,n)=>{if(!e.setGroupPage||n==null)return;let r=o[t]??0;a(e=>({...e,[t]:[...(e[t]??[null]).slice(0,r+1),n]})),d(e=>({...e,[t]:r+1})),await e.setGroupPage(t,{first:D,after:n})},[e,o]),h=(0,T.useCallback)(async t=>{let n=o[t]??0;!e.setGroupPage||n<=0||(d(e=>({...e,[t]:n-1})),await e.setGroupPage(t,{first:D,after:(i[t]??[null])[n-1]??null}))},[e,i,o]);return(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 rounded-lg border border-border bg-surface-1 p-2`,children:[(0,E.jsx)(S,{}),(0,E.jsx)(b,{}),(0,E.jsx)(_,{}),(0,E.jsx)(v,{}),(0,E.jsx)(x,{})]}),(0,E.jsx)(`div`,{className:`mt-6`,children:(0,E.jsx)(g,{groups:r.filteredGroups,pagerSlot:t=>{let r=o[t.id]??0,i=t.tasks.length,a=i?r*D+1:0,s=r*D+i;return(0,E.jsxs)(`div`,{className:`flex items-center justify-between rounded-md border border-dashed border-border bg-card px-3 py-1.5 text-[11px] text-muted-foreground`,children:[(0,E.jsx)(`span`,{children:i>0?`${a}–${s} of ${t.totalCount??i}`:`—`}),(0,E.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,E.jsx)(u,{type:`button`,variant:`ghost`,size:`icon-xs`,disabled:r===0||!!t.loadingMore,onClick:()=>void h(t.id),"aria-label":`Previous page`,children:(0,E.jsx)(n,{})}),(0,E.jsxs)(`span`,{className:`font-mono text-[10px] tabular-nums`,children:[`Page `,r+1]}),(0,E.jsx)(u,{type:`button`,variant:`ghost`,size:`icon-xs`,disabled:!t.pageInfo?.hasNextPage||!!t.loadingMore||!e.setGroupPage,onClick:()=>void p(t.id,t.pageInfo?.endCursor??null),"aria-label":`Next page`,children:t.loadingMore?(0,E.jsx)(l,{className:`animate-spin`}):(0,E.jsx)(c,{})})]})]})}})}),(0,E.jsxs)(`p`,{className:`mt-4 text-center text-[11px] text-muted-foreground`,children:[`4 lists × 250 tasks · `,D,`/page · 200ms simulated latency`]}),(0,E.jsx)(y,{}),(0,E.jsx)(C,{footer:e=>(0,E.jsx)(u,{variant:`outline`,size:`sm`,asChild:!0,children:(0,E.jsxs)(s,{to:`/kits/tasklists/$taskId`,params:{taskId:e.id},children:[(0,E.jsx)(t,{}),`Open full page`]})})})]})}function L(){return(0,E.jsx)(d,{adapter:(0,T.useMemo)(()=>h({initial:F,latencyMs:200,pageSize:D}),[]),children:(0,E.jsx)(p,{savedViewsStorageKey:`kitora:tasklists:board-virt`,children:(0,E.jsx)(I,{})})})}var R=`import { useCallback, useMemo, useState } from "react"
import { Link } from "@tanstack/react-router"
import { ArrowUpRight, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { ConnectedTaskListBoard, TaskListBulkActions, TaskListClearFilters, TaskListFilterChips, TaskListPreviewSheet, TaskListPriorityFilter, TaskListProvider, TaskListSearch, TaskListStatusFilter, TaskListUIProvider, createInMemoryAdapter, useTaskList, useTaskListUI, type Task, type TaskListAdapter, type TaskListBoardGroup, type TaskListGroup, type TaskPriority, type TaskStatus } from "@kitora/task-list"

const PAGE_SIZE = 25

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
  const { mutators } = useTaskList()
  const ui = useTaskListUI()
  // Per list: the \`after\` cursor of every page visited (null for page 1), and the page shown.
  // setGroupPage REPLACES a list's page; loadMoreTasks (the default footer) appends.
  const [cursors, setCursors] = useState<Record<string, (string | null)[]>>({})
  const [pageIdx, setPageIdx] = useState<Record<string, number>>({})

  const goNext = useCallback(
    async (groupId: string, endCursor: string | null) => {
      if (!mutators.setGroupPage || endCursor == null) return
      const idx = pageIdx[groupId] ?? 0
      setCursors((p) => ({ ...p, [groupId]: [...(p[groupId] ?? [null]).slice(0, idx + 1), endCursor] }))
      setPageIdx((p) => ({ ...p, [groupId]: idx + 1 }))
      await mutators.setGroupPage(groupId, { first: PAGE_SIZE, after: endCursor })
    },
    [mutators, pageIdx],
  )

  const goPrev = useCallback(
    async (groupId: string) => {
      const idx = pageIdx[groupId] ?? 0
      if (!mutators.setGroupPage || idx <= 0) return
      setPageIdx((p) => ({ ...p, [groupId]: idx - 1 }))
      await mutators.setGroupPage(groupId, { first: PAGE_SIZE, after: (cursors[groupId] ?? [null])[idx - 1] ?? null })
    },
    [mutators, cursors, pageIdx],
  )

  // pagerSlot replaces each list's default "Load more" footer
  const pager = (g: TaskListBoardGroup) => {
    const idx = pageIdx[g.id] ?? 0
    const loaded = g.tasks.length
    const first = loaded ? idx * PAGE_SIZE + 1 : 0
    const last = idx * PAGE_SIZE + loaded
    return (
      <div className="flex items-center justify-between rounded-md border border-dashed border-border bg-card px-3 py-1.5 text-[11px] text-muted-foreground">
        <span>{loaded > 0 ? \`\${first}–\${last} of \${g.totalCount ?? loaded}\` : "—"}</span>
        <div className="flex items-center gap-1">
          <Button type="button" variant="ghost" size="icon-xs" disabled={idx === 0 || !!g.loadingMore} onClick={() => void goPrev(g.id)} aria-label="Previous page">
            <ChevronLeft />
          </Button>
          <span className="font-mono text-[10px] tabular-nums">Page {idx + 1}</span>
          <Button type="button" variant="ghost" size="icon-xs" disabled={!g.pageInfo?.hasNextPage || !!g.loadingMore || !mutators.setGroupPage} onClick={() => void goNext(g.id, g.pageInfo?.endCursor ?? null)} aria-label="Next page">
            {g.loadingMore ? <Loader2 className="animate-spin" /> : <ChevronRight />}
          </Button>
        </div>
      </div>
    )
  }

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
        <ConnectedTaskListBoard groups={ui.filteredGroups} pagerSlot={pager} />
      </div>

      <p className="mt-4 text-center text-[11px] text-muted-foreground">4 lists × 250 tasks · {PAGE_SIZE}/page · 200ms simulated latency</p>

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

export function PagedTaskBoard() {
  const adapter = useMemo<TaskListAdapter>(() => createInMemoryAdapter({ initial: SEED, latencyMs: 200, pageSize: PAGE_SIZE }), [])
  return (
    <TaskListProvider adapter={adapter}>
      <TaskListUIProvider savedViewsStorageKey="kitora:tasklists:board-virt">
        <Board />
      </TaskListUIProvider>
    </TaskListProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>a(()=>import(`./board-virt-k_7FnTbc.js`),[]));var z=`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`;function B(){return(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(r,{title:`Board + prev/next`,children:[`Same `,(0,E.jsx)(`code`,{className:z,children:`<ConnectedTaskListBoard>`}),` as the regular Board — subtasks, multi-select, drag-drop, status pickers, inline-add all reused. Only the per-list footer is swapped via `,(0,E.jsx)(`code`,{className:z,children:`pagerSlot`}),` for `,(0,E.jsx)(`strong`,{children:`Prev / Page N / Next`}),`; `,(0,E.jsx)(`code`,{className:z,children:`mutators.setGroupPage`}),` replaces the page (vs `,(0,E.jsx)(`code`,{className:z,children:`loadMoreTasks`}),`, which appends).`]}),(0,E.jsx)(w,{n:1,title:`Per-list Prev / Page N / Next`,blurb:`pagerSlot replaces the default Load more footer; mutators.setGroupPage replaces the page instead of appending.`,code:R,children:(0,E.jsx)(L,{})})]})}export{B as component};