import{s as e}from"./kit-docs-Cf27Kpa-.js";import{n as t}from"./board-DFHwlP4p.js";import{Ec as n,zc as r}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as i}from"./example-B67lLz1F.js";var a=`import { useMemo } from "react"
import { Link } from "@tanstack/react-router"
import { ArrowUpRight, ListFilter, Plus, Sparkles } from "lucide-react"
import { toast } from "@kitora/feedback"
import { Button } from "@kitora/ui/button"
import { TaskListBulkActions, TaskListClearFilters, TaskListFilterChips, TaskListPreviewSheet, TaskListPriorityFilter, TaskListProvider, TaskListSavedViews, TaskListSearch, TaskListStats, TaskListStatusFilter, TaskListUIProvider, TaskListView, TaskListViewSwitcher, createInMemoryAdapter, useTaskList, type TaskListAdapter, type TaskListGroup } from "@kitora/task-list"

// stub: replace with your API (the adapter's \`load\` returns these lists)
export const SEED: TaskListGroup[] = [
  {
    id: "today",
    title: "Today",
    description: "Ship before EOD",
    tasks: [
      { id: "t-101", title: "Review #412 auth refactor", status: "doing", priority: "p0", owner: { name: "Alex Kim" }, comments: 2, project: "Auth" },
      { id: "t-102", title: "Pair with Grace on rate-limit spec", status: "todo", priority: "p1", owner: { name: "Alex Kim" }, project: "Infra" },
      {
        id: "t-103",
        title: "Wire OAuth callback to session cookie",
        status: "doing",
        priority: "p1",
        owner: { name: "Alex Kim" },
        due: "today",
        project: "Auth",
        comments: 3,
        subtasks: [
          { id: "t-103a", title: "Mint signed cookie on success", status: "done", done: true, priority: "p1" },
          { id: "t-103b", title: "Persist \`state\` param check", status: "doing", priority: "p1" },
          { id: "t-103c", title: "Redirect to original requested path", status: "todo", priority: "p2" },
          { id: "t-103d", title: "Add e2e test for new flow", status: "todo", priority: "p2" },
        ],
      },
    ],
  },
  {
    id: "this-week",
    title: "This week",
    description: "5 open · 1 review",
    tasks: [
      { id: "t-201", title: "Datatable pagination — server-side", status: "review", priority: "p1", owner: { name: "Grace H" }, due: "May 11", project: "Data", comments: 1 },
      { id: "t-202", title: "Empty state for new workspaces", status: "todo", priority: "p2", owner: { name: "Linus T" }, due: "May 14", project: "Onboarding" },
      { id: "t-203", title: "Migration: add \`sessions\` table", status: "done", priority: "p1", owner: { name: "Alex Kim" }, done: true, project: "Auth" },
      {
        id: "t-204",
        title: "Block deploys on failing migrations",
        status: "blocked",
        priority: "p0",
        owner: { name: "Grace H" },
        due: "May 8",
        project: "Infra",
        comments: 5,
        subtasks: [
          { id: "t-204a", title: "Add \`migrate dry-run\` script", status: "done", done: true, priority: "p1" },
          { id: "t-204b", title: "Wire it into pre-deploy hook", status: "doing", priority: "p0" },
          { id: "t-204c", title: "Surface failure reason in CI output", status: "todo", priority: "p2" },
        ],
      },
    ],
  },
  {
    id: "next-week",
    title: "Next week",
    tasks: [
      { id: "t-301", title: "Avatar fallback color generator", status: "todo", priority: "p3", owner: { name: "Linus T" }, project: "Design", due: "May 21" },
      { id: "t-302", title: "Bulk-archive selected projects", status: "todo", priority: "p2", owner: { name: "Grace H" }, due: "May 19", project: "Workspaces" },
    ],
  },
  {
    id: "backlog",
    title: "Backlog",
    description: "12 items · prioritize Friday",
    collapsed: true,
    tasks: [
      { id: "t-401", title: "Activity feed: per-actor filter", status: "todo", priority: "p2", owner: { name: "Mira O" }, project: "Dashboard" },
      { id: "t-402", title: "Onboarding checklist card", status: "todo", priority: "p2", owner: { name: "Mira O" }, project: "Onboarding" },
      { id: "t-403", title: "Rate-limit anon API", status: "todo", priority: "p1", owner: { name: "Alex Kim" }, project: "Infra" },
    ],
  },
]

// Every block below is a plug-in feature component reading the same provider pair.
function Board() {
  const { mutators } = useTaskList()
  // the adapter decides what the board can do: no createGroup, no "New list" button
  const createGroup = mutators.createGroup
  const addList = createGroup
    ? async () => {
        await createGroup("New list")
        toast.success("List added")
      }
    : undefined

  return (
    <div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          <Sparkles />
          Suggest tasks
        </Button>
        {addList ? (
          <Button size="sm" onClick={addList}>
            <Plus />
            New list
          </Button>
        ) : null}
      </div>

      <div className="mt-5">
        <TaskListStats />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2 rounded-lg border border-border bg-surface-1 p-2">
        <TaskListSearch />
        <TaskListStatusFilter />
        <TaskListPriorityFilter />
        <TaskListFilterChips />
        <TaskListClearFilters />
        <div className="ml-auto flex items-center gap-1">
          <TaskListSavedViews />
          <TaskListViewSwitcher />
        </div>
      </div>

      <div className="mt-6">
        <TaskListView />
      </div>

      <p className="mt-8 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
        <ListFilter className="size-3" />
        Tip — drag a list by its header grip to reorder, click a task to preview, ↗ to open the full page.
      </p>

      {/* floats in when tasks are selected */}
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

export function TaskBoard() {
  // Swap createInMemoryAdapter for a REST / GraphQL adapter and nothing else changes.
  // pageSize turns on per-list cursor pagination ("10 / N" + Load more).
  const adapter = useMemo<TaskListAdapter>(() => createInMemoryAdapter({ initial: SEED, latencyMs: 250, pageSize: 10 }), [])
  return (
    <TaskListProvider adapter={adapter}>
      <TaskListUIProvider savedViewsStorageKey="kitora:tasklists:views">
        <Board />
      </TaskListUIProvider>
    </TaskListProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(a,()=>n(()=>import(`./board-CFjJlzmC.js`),[]));var o=r();function s(){return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(e,{title:`Board`,children:`Multi-list board — drag to reorder lists, drag tasks across lists, per-list cursor pagination, status/priority filters, saved views, bulk actions, preview drawer.`}),(0,o.jsx)(i,{n:1,title:`Multi-list board`,blurb:`Every block is a plug-in feature component reading the same provider pair; swap createInMemoryAdapter for a REST / GraphQL adapter and nothing else changes.`,code:a,children:(0,o.jsx)(t,{})})]})}export{s as component};