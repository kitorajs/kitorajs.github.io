import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./cheatsheet-CS82HrQp.js";import{s as r}from"./kit-docs-DpYhPoxM.js";import{t as i}from"./provider-DEyelEMR.js";import{a,d as o,f as s,o as c,s as l}from"./hooks-M7G8AnMW.js";import{i as u,t as d}from"./kbd-C3VYXfDq.js";import{i as f}from"./hints-DZ77Qitg.js";import{Bc as p,Cc as m,Ic as h,hi as g}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as _}from"./example-B8EaWveR.js";var v=e(p(),1),y=h(),b=`you`,x=[{id:101,title:`Palette loses focus after closing a nested page`,assignee:b,status:`open`},{id:102,title:`Record chords in the shortcuts editor`,assignee:`mira`,status:`open`},{id:103,title:`AZERTY users cannot trigger Mod+/`,assignee:null,status:`open`},{id:104,title:`Cheatsheet should hide keys that do nothing here`,assignee:b,status:`open`},{id:105,title:`Export keybindings as JSON`,assignee:`jonas`,status:`open`},{id:110,title:`IME composition never fires a shortcut`,assignee:b,status:`closed`}],S=(e,t)=>e.filter(e=>t===`inbox`?e.status===`open`:e.status===`closed`),C=[{key:`[Shift]+?`,command:`app.cheatsheet`},{key:`g i`,command:`nav.inbox`},{key:`g d`,command:`nav.done`},{key:`j`,command:`list.next`},{key:`ArrowDown`,command:`list.next`,when:`listFocus`},{key:`k`,command:`list.prev`},{key:`ArrowUp`,command:`list.prev`,when:`listFocus`},{key:`x`,command:`list.toggleSelect`},{key:`Escape`,command:`list.clear`,when:`selection.count > 0`},{key:`i`,command:`issue.assignMe`},{key:`e`,command:`issue.archive`},{key:`Mod+Enter`,command:`issue.close`}];function w(e){let t=e instanceof Element?e.closest(`[data-issue-id]`)?.getAttribute(`data-issue-id`):null;return t?Number(t):null}var T={ArrowDown:`list.next`,ArrowUp:`list.prev`},E=e=>e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey?void 0:T[e.key];function D(){let[e,t]=(0,v.useState)(x),[r,i]=(0,v.useState)(`inbox`),[p,m]=(0,v.useState)(101),h=s(),[_,T]=(0,v.useState)([]),[D,O]=(0,v.useState)(!1),[k,A]=(0,v.useState)(!1),[j,M]=(0,v.useState)(`Ready`),N=(0,v.useMemo)(()=>S(e,r),[e,r]),P=N.find(e=>e.id===p)??null,F=new Set(_.length>0?_:P?[P.id]:[]),I=(e,n)=>{t(t=>t.map(t=>F.has(t.id)?e(t):t)),M(n)},L=e=>{let t=N.findIndex(e=>e.id===p),n=N[Math.max(0,Math.min(N.length-1,t+e))];n&&m(n.id)},R=e=>{i(e),T([]),m(null),M(`Opened ${e===`inbox`?`Inbox`:`Done`}`)},z=(e,t)=>({title:e,category:`Issue`,enabled:`issue.selected || selection.count > 0`,disabledReason:`Select an issue first`,run:t});return a({"app.cheatsheet":{title:`Show keyboard shortcuts`,category:`General`,keywords:[`help`,`keys`],run:()=>A(!0)},"nav.inbox":{title:`Go to Inbox`,category:`Go to`,run:()=>R(`inbox`)},"nav.done":{title:`Go to Done`,category:`Go to`,run:()=>R(`done`)},"list.next":{title:`Next issue`,category:`List`,run:()=>L(1)},"list.prev":{title:`Previous issue`,category:`List`,run:()=>L(-1)},"list.toggleSelect":{title:`Select issue`,category:`List`,enabled:`issue.selected`,disabledReason:`Select an issue first`,run:()=>T(e=>P===null?e:e.includes(P.id)?e.filter(e=>e!==P.id):[...e,P.id])},"list.clear":{title:`Clear selection`,category:`List`,enabled:`selection.count > 0`,run:()=>T([])},"issue.assignMe":z(`Assign to me`,()=>I(e=>({...e,assignee:b}),`Assigned to you`)),"issue.archive":z(`Archive issue`,()=>I(e=>({...e,status:`archived`}),`Archived ${F.size}`)),"issue.close":z(`Close issue`,()=>I(e=>({...e,status:e.status===`closed`?`open`:`closed`}),`Status changed`))}),o(`default`,C),l({"issue.selected":P!==null,"selection.count":_.length}),c(`listFocus`,D),(0,y.jsxs)(`div`,{className:`flex h-80 flex-col overflow-hidden rounded-lg border bg-background text-[13px]`,"data-tracker":``,children:[(0,y.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2`,children:[(0,y.jsx)(`span`,{className:`font-medium`,children:r===`inbox`?`Inbox`:`Done`}),(0,y.jsx)(d,{command:`issue.assignMe`,className:`h-7`}),(0,y.jsx)(d,{command:`issue.archive`,className:`h-7`}),(0,y.jsx)(d,{command:`app.cheatsheet`,className:`ml-auto h-7`})]}),(0,y.jsx)(`div`,{role:`listbox`,"aria-label":`Issues`,"aria-activedescendant":P?`cheatsheet-issue-${P.id}`:void 0,tabIndex:0,onFocus:()=>O(!0),onBlur:()=>O(!1),onClick:e=>{let t=w(e.target);t!==null&&m(t)},onKeyDown:e=>{let t=E(e);t&&(e.preventDefault(),h(t,`keyboard`))},className:`min-h-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset`,children:N.map(e=>(0,y.jsxs)(`div`,{id:`cheatsheet-issue-${e.id}`,role:`option`,"aria-selected":e.id===p,"data-issue-id":e.id,className:g(`flex h-8 items-center gap-2 border-b border-border/50 px-2`,e.id===p&&`bg-primary/10 shadow-[inset_2px_0_0] shadow-primary`),children:[(0,y.jsx)(`span`,{className:g(`size-3 shrink-0 rounded-sm border`,_.includes(e.id)?`border-primary bg-primary`:`border-border`),"aria-hidden":!0}),(0,y.jsxs)(`span`,{className:`w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`#`,e.id]}),(0,y.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.title}),(0,y.jsx)(`span`,{className:`w-10 shrink-0 text-right text-[11px] text-muted-foreground`,children:e.assignee??`—`})]},e.id))}),(0,y.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground`,children:[(0,y.jsx)(f,{className:`h-6`}),(0,y.jsx)(`span`,{className:`truncate`,"data-tracker-flash":``,children:j}),(0,y.jsxs)(`span`,{className:`ml-auto inline-flex items-center gap-1`,children:[(0,y.jsx)(u,{binding:`?`}),` shortcuts`]})]}),(0,y.jsx)(n,{open:k,onOpenChange:A})]})}function O(){return(0,y.jsx)(i,{children:(0,y.jsx)(D,{})})}var k=`import { useMemo, useState, type KeyboardEvent } from "react"
import { Cheatsheet, CommandButton, KeyboardProvider, PendingChord, ProviderKbd, useCommands, useContextKey, useContextKeys, useKeymap, useRunCommand, type CommandSpec, type KeybindingRule } from "@kitora/keyboard"
import { cn } from "@kitora/ui/utils"

// "?" opens the cheatsheet: read from the registry, grouped by category,
// searchable, and filtered to what works where you are. A key whose
// when-clause is false, or whose command is disabled, waits under "Show all".

type View = "inbox" | "done"

interface Issue {
  readonly id: number
  readonly title: string
  readonly assignee: string | null
  readonly status: "open" | "closed" | "archived"
}

const ME = "you"
const ISSUES: readonly Issue[] = [
  { id: 101, title: "Palette loses focus after closing a nested page", assignee: ME, status: "open" },
  { id: 102, title: "Record chords in the shortcuts editor", assignee: "mira", status: "open" },
  { id: 103, title: "AZERTY users cannot trigger Mod+/", assignee: null, status: "open" },
  { id: 104, title: "Cheatsheet should hide keys that do nothing here", assignee: ME, status: "open" },
  { id: 105, title: "Export keybindings as JSON", assignee: "jonas", status: "open" },
  { id: 110, title: "IME composition never fires a shortcut", assignee: ME, status: "closed" },
]

const issuesIn = (issues: readonly Issue[], view: View) => issues.filter((issue) => (view === "inbox" ? issue.status === "open" : issue.status === "closed"))

const DEFAULT_KEYS: readonly KeybindingRule[] = [
  { key: "[Shift]+?", command: "app.cheatsheet" },
  { key: "g i", command: "nav.inbox" },
  { key: "g d", command: "nav.done" },
  { key: "j", command: "list.next" },
  { key: "ArrowDown", command: "list.next", when: "listFocus" },
  { key: "k", command: "list.prev" },
  { key: "ArrowUp", command: "list.prev", when: "listFocus" },
  { key: "x", command: "list.toggleSelect" },
  { key: "Escape", command: "list.clear", when: "selection.count > 0" },
  { key: "i", command: "issue.assignMe" },
  { key: "e", command: "issue.archive" },
  { key: "Mod+Enter", command: "issue.close" },
]

// The issue listbox keeps focus on itself (aria-activedescendant), so its rows
// take no focus and no handlers: one click handler on the listbox finds the
// row through \`data-issue-id\`, and its own key handler runs the list commands.
// The kit's ArrowUp/ArrowDown bindings (when: listFocus) run first and stop the
// key; the listbox handles it only when no binding took it (e.g. one removed).
function issueIdAt(target: EventTarget): number | null {
  const id = target instanceof Element ? target.closest("[data-issue-id]")?.getAttribute("data-issue-id") : null
  return id ? Number(id) : null
}
const LISTBOX_KEYS: Readonly<Record<string, string>> = { ArrowDown: "list.next", ArrowUp: "list.prev" }
const listboxCommand = (event: KeyboardEvent<HTMLElement>): string | undefined =>
  event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ? undefined : LISTBOX_KEYS[event.key]

function Tracker() {
  const [issues, setIssues] = useState(ISSUES)
  const [view, setView] = useState<View>("inbox")
  const [activeId, setActiveId] = useState<number | null>(101)
  const runCommand = useRunCommand()
  const [selected, setSelected] = useState<readonly number[]>([])
  const [listFocus, setListFocus] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [flash, setFlash] = useState("Ready")

  const visible = useMemo(() => issuesIn(issues, view), [issues, view])
  const active = visible.find((issue) => issue.id === activeId) ?? null
  const targets = new Set(selected.length > 0 ? selected : active ? [active.id] : [])
  const update = (change: (issue: Issue) => Issue, message: string) => {
    setIssues((list) => list.map((issue) => (targets.has(issue.id) ? change(issue) : issue)))
    setFlash(message)
  }
  const move = (step: number) => {
    const at = visible.findIndex((issue) => issue.id === activeId)
    const next = visible[Math.max(0, Math.min(visible.length - 1, at + step))]
    if (next) setActiveId(next.id)
  }
  const go = (next: View) => {
    setView(next)
    setSelected([])
    setActiveId(null) // nothing selected: the issue commands move under "Show all"
    setFlash(\`Opened \${next === "inbox" ? "Inbox" : "Done"}\`)
  }
  const issueCommand = (title: string, run: () => void): CommandSpec<undefined> => ({ title, category: "Issue", enabled: "issue.selected || selection.count > 0", disabledReason: "Select an issue first", run })

  useCommands({
    "app.cheatsheet": { title: "Show keyboard shortcuts", category: "General", keywords: ["help", "keys"], run: () => setSheetOpen(true) },
    "nav.inbox": { title: "Go to Inbox", category: "Go to", run: () => go("inbox") },
    "nav.done": { title: "Go to Done", category: "Go to", run: () => go("done") },
    "list.next": { title: "Next issue", category: "List", run: () => move(1) },
    "list.prev": { title: "Previous issue", category: "List", run: () => move(-1) },
    "list.toggleSelect": {
      title: "Select issue",
      category: "List",
      enabled: "issue.selected",
      disabledReason: "Select an issue first",
      run: () => setSelected((ids) => (active === null ? ids : ids.includes(active.id) ? ids.filter((id) => id !== active.id) : [...ids, active.id])),
    },
    "list.clear": { title: "Clear selection", category: "List", enabled: "selection.count > 0", run: () => setSelected([]) },
    "issue.assignMe": issueCommand("Assign to me", () => update((issue) => ({ ...issue, assignee: ME }), "Assigned to you")),
    "issue.archive": issueCommand("Archive issue", () => update((issue) => ({ ...issue, status: "archived" }), \`Archived \${targets.size}\`)),
    "issue.close": issueCommand("Close issue", () => update((issue) => ({ ...issue, status: issue.status === "closed" ? "open" : "closed" }), "Status changed")),
  })
  useKeymap("default", DEFAULT_KEYS)
  // What the cheatsheet filters on: the when-clauses and enablement above read these.
  useContextKeys({ "issue.selected": active !== null, "selection.count": selected.length })
  useContextKey("listFocus", listFocus)

  return (
    <div className="flex h-80 flex-col overflow-hidden rounded-lg border bg-background text-[13px]" data-tracker="">
      <div className="flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2">
        <span className="font-medium">{view === "inbox" ? "Inbox" : "Done"}</span>
        <CommandButton command="issue.assignMe" className="h-7" />
        <CommandButton command="issue.archive" className="h-7" />
        <CommandButton command="app.cheatsheet" className="ml-auto h-7" />
      </div>
      <div
        role="listbox"
        aria-label="Issues"
        aria-activedescendant={active ? \`cheatsheet-issue-\${active.id}\` : undefined}
        tabIndex={0}
        onFocus={() => setListFocus(true)}
        onBlur={() => setListFocus(false)}
        onClick={(event) => {
          const id = issueIdAt(event.target)
          if (id !== null) setActiveId(id)
        }}
        onKeyDown={(event) => {
          const command = listboxCommand(event)
          if (!command) return
          event.preventDefault()
          runCommand(command, "keyboard")
        }}
        className="min-h-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset"
      >
        {visible.map((issue) => (
          <div
            key={issue.id}
            id={\`cheatsheet-issue-\${issue.id}\`}
            role="option"
            aria-selected={issue.id === activeId}
            data-issue-id={issue.id}
            className={cn("flex h-8 items-center gap-2 border-b border-border/50 px-2", issue.id === activeId && "bg-primary/10 shadow-[inset_2px_0_0] shadow-primary")}
          >
            <span className={cn("size-3 shrink-0 rounded-sm border", selected.includes(issue.id) ? "border-primary bg-primary" : "border-border")} aria-hidden />
            <span className="w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums">#{issue.id}</span>
            <span className="min-w-0 flex-1 truncate">{issue.title}</span>
            <span className="w-10 shrink-0 text-right text-[11px] text-muted-foreground">{issue.assignee ?? "—"}</span>
          </div>
        ))}
      </div>
      <div className="flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground">
        <PendingChord className="h-6" />
        <span className="truncate" data-tracker-flash="">
          {flash}
        </span>
        <span className="ml-auto inline-flex items-center gap-1">
          <ProviderKbd binding="?" /> shortcuts
        </span>
      </div>
      <Cheatsheet open={sheetOpen} onOpenChange={setSheetOpen} />
    </div>
  )
}

export function CheatsheetApp() {
  return (
    <KeyboardProvider>
      <Tracker />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>m(()=>import(`./cheatsheet-app-C8BIcnun.js`),[]));function A(){let[e,n]=(0,v.useState)(!1),[r,i]=(0,v.useState)(`—`);return a({"files.next":{title:`Next file`,category:`Files`,run:()=>i(`Next file`)},"files.prev":{title:`Previous file`,category:`Files`,run:()=>i(`Previous file`)},"files.selectAll":{title:`Select all files`,category:`Files`,run:()=>i(`Select all files`)},"files.new":{title:`New file`,category:`Files`,run:()=>i(`New file`)},"files.rename":{title:`Rename file`,category:`Files`,run:()=>i(`Rename file`)}}),o(`default`,[{key:`ArrowDown`,command:`files.next`,when:`listFocus`},{key:`ArrowUp`,command:`files.prev`,when:`listFocus`},{key:`Mod+A`,command:`files.selectAll`,when:`listFocus`},{key:`Alt+N`,command:`files.new`},{key:`F2`,command:`files.rename`}]),c(`listFocus`,e?!0:void 0),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-[12px]`,children:[(0,y.jsxs)(`label`,{className:`inline-flex h-7 items-center gap-1.5`,children:[(0,y.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>n(e.target.checked),className:`size-3.5`,"data-kb-toggle":`listFocus`}),`Pretend the file list has focus (`,(0,y.jsx)(`code`,{className:`font-mono`,children:`listFocus`}),`)`]}),(0,y.jsxs)(`span`,{className:`text-muted-foreground`,children:[`Last run: `,(0,y.jsx)(`span`,{className:`font-mono text-foreground`,children:r})]})]}),(0,y.jsx)(t,{})]})}function j(){return(0,y.jsx)(i,{children:(0,y.jsx)(A,{})})}var M=`import { useState } from "react"
import { CheatsheetPanel, KeyboardProvider, useCommands, useContextKey, useKeymap } from "@kitora/keyboard"

// The cheatsheet's content inline, live: it re-filters as context keys change.
// Toggle \`listFocus\` and the arrow-key and Mod+A rows join the list.

function Files() {
  const [listFocus, setListFocus] = useState(false)
  const [last, setLast] = useState("—")
  useCommands({
    "files.next": { title: "Next file", category: "Files", run: () => setLast("Next file") },
    "files.prev": { title: "Previous file", category: "Files", run: () => setLast("Previous file") },
    "files.selectAll": { title: "Select all files", category: "Files", run: () => setLast("Select all files") },
    "files.new": { title: "New file", category: "Files", run: () => setLast("New file") },
    "files.rename": { title: "Rename file", category: "Files", run: () => setLast("Rename file") },
  })
  useKeymap("default", [
    // these three are active only while the list has focus
    { key: "ArrowDown", command: "files.next", when: "listFocus" },
    { key: "ArrowUp", command: "files.prev", when: "listFocus" },
    { key: "Mod+A", command: "files.selectAll", when: "listFocus" },
    { key: "Alt+N", command: "files.new" },
    { key: "F2", command: "files.rename" },
  ])
  // \`undefined\` removes the key, so the rules read it as unset rather than false
  useContextKey("listFocus", listFocus ? true : undefined)
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-3 text-[12px]">
        <label className="inline-flex h-7 items-center gap-1.5">
          <input type="checkbox" checked={listFocus} onChange={(event) => setListFocus(event.target.checked)} className="size-3.5" data-kb-toggle="listFocus" />
          Pretend the file list has focus (<code className="font-mono">listFocus</code>)
        </label>
        <span className="text-muted-foreground">
          Last run: <span className="font-mono text-foreground">{last}</span>
        </span>
      </div>
      <CheatsheetPanel />
    </div>
  )
}

export function CheatsheetInline() {
  return (
    <KeyboardProvider>
      <Files />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>m(()=>import(`./cheatsheet-panel-D7wbjx0L.js`),[]));function N(){return(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(r,{title:`Cheatsheet`,children:[`Press `,(0,y.jsx)(`kbd`,{className:`font-mono`,children:`?`}),` anywhere on this page. The sheet lists only what works where you are: a key whose when-clause is false, or whose command is disabled, waits under Show all.`]}),(0,y.jsx)(_,{n:1,title:`Press ? in the app`,blurb:`Select an issue, then press ?: the issue commands are listed. Go to Done (g d) and nothing is selected, so they move under Show all.`,code:k,children:(0,y.jsx)(O,{})}),(0,y.jsx)(_,{n:2,title:`Filtered by context`,blurb:`The same content inline, over its own engine. Toggle the context key and watch the arrow-key and Mod+A bindings appear.`,code:M,children:(0,y.jsx)(j,{})})]})}export{N as component};