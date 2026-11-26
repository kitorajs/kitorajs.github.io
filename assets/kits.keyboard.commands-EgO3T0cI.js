import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{_ as n,r,t as i}from"./provider-D0Iw1w2F.js";import{a,d as o,f as s,i as c,l,s as u,u as d}from"./hooks-BRcZguZq.js";import{t as f}from"./components-CFkdVAA0.js";import{i as p,t as m}from"./kbd-WtgBabxu.js";import{i as h,t as g}from"./hints-Ciuct_fj.js";import{Bc as _,Cc as v,Ic as y,hi as b}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as x}from"./example-CZLJLtIC.js";var S=e(_(),1),C=y(),w=`you`,T=[{id:101,title:`Palette loses focus after closing a nested page`,assignee:w,starred:!0},{id:102,title:`Record chords in the shortcuts editor`,assignee:`mira`,starred:!1},{id:103,title:`AZERTY users cannot trigger Mod+/`,assignee:null,starred:!1},{id:104,title:`Cheatsheet should hide keys that do nothing here`,assignee:w,starred:!1},{id:105,title:`Export keybindings as JSON`,assignee:`jonas`,starred:!1}],E=[{key:`j`,command:`list.next`},{key:`k`,command:`list.prev`},{key:`Escape`,command:`list.clear`,when:`issue.selected`},{key:`i`,command:`issue.assignMe`},{key:`s`,command:`issue.star`},{key:`e`,command:`issue.archive`}];function D(e){let t=e instanceof Element?e.closest(`[data-issue-id]`)?.getAttribute(`data-issue-id`):null;return t?Number(t):null}var O={ArrowDown:`list.next`,ArrowUp:`list.prev`},k=e=>e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey?void 0:O[e.key];function A(){let[e,t]=(0,S.useState)(T),[n,r]=(0,S.useState)(101),i=s(),[c,l]=(0,S.useState)(`Ready`),d=e.find(e=>e.id===n)??null,f=t=>{let i=e.findIndex(e=>e.id===n),a=e[Math.max(0,Math.min(e.length-1,i+t))];a&&r(a.id)},p=(e,r)=>{t(t=>t.flatMap(t=>t.id===n?e(t)??[]:[t])),l(r)},g=(e,t)=>({title:e,category:`Issue`,enabled:`issue.selected`,disabledReason:`Select an issue first`,run:t});return a({"list.next":{title:`Next issue`,category:`List`,run:()=>f(1)},"list.prev":{title:`Previous issue`,category:`List`,run:()=>f(-1)},"list.clear":{title:`Clear selection`,category:`List`,enabled:`issue.selected`,disabledReason:`Nothing is selected`,run:()=>r(null)},"issue.assignMe":{...g(`Assign to me`,()=>p(e=>({...e,assignee:w}),`Assigned to you`)),enabled:`issue.selected && !issue.mine`,disabledReason:()=>d?.assignee===w?`Already assigned to you`:`Select an issue first`},"issue.star":g(`Star issue`,()=>p(e=>({...e,starred:!e.starred}),`Star toggled`)),"issue.archive":g(`Archive issue`,()=>p(()=>null,`Archived 1`))}),o(`default`,E),u({"issue.selected":d!==null,"issue.mine":d?.assignee===w}),(0,C.jsxs)(`div`,{className:`flex h-[260px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]`,"data-tracker":``,children:[(0,C.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2`,children:[(0,C.jsx)(m,{command:`issue.assignMe`,className:`h-7`}),(0,C.jsx)(m,{command:`issue.star`,className:`h-7`}),(0,C.jsx)(m,{command:`issue.archive`,className:`h-7`}),(0,C.jsx)(m,{command:`list.clear`,className:`ml-auto h-7`})]}),(0,C.jsx)(`ul`,{role:`listbox`,"aria-label":`Issues`,"aria-activedescendant":d?`registry-issue-${d.id}`:void 0,tabIndex:0,onClick:e=>{let t=D(e.target);t!==null&&r(t)},onKeyDown:e=>{let t=k(e);t&&(e.preventDefault(),i(t,`keyboard`))},className:`min-h-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset`,children:e.map(e=>(0,C.jsxs)(`li`,{id:`registry-issue-${e.id}`,role:`option`,"aria-selected":e.id===n,"data-issue-id":e.id,className:b(`flex h-8 items-center gap-2 border-b border-border/50 px-2`,e.id===n&&`bg-primary/10 shadow-[inset_2px_0_0] shadow-primary`),children:[(0,C.jsxs)(`span`,{className:`w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`#`,e.id]}),(0,C.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.title}),e.starred?(0,C.jsx)(`span`,{className:`text-amber-500`,children:`★`}):null,(0,C.jsx)(`span`,{className:`w-10 shrink-0 text-right text-[11px] text-muted-foreground`,children:e.assignee??`—`})]},e.id))}),(0,C.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground`,children:[(0,C.jsx)(h,{className:`h-6`}),(0,C.jsx)(`span`,{className:`truncate`,"data-tracker-flash":``,children:c})]})]})}function j(e){return e.commands.list().map(t=>{let r=e.isEnabled(t.id);return{id:t.id,title:n(t.spec.title),category:t.spec.category===void 0?``:n(t.spec.category),enabled:r,reason:r||t.spec.disabledReason===void 0?``:n(t.spec.disabledReason)}})}function M({id:e}){return(0,C.jsx)(`span`,{className:`inline-flex gap-1`,children:c(e).slice(0,2).map(e=>(0,C.jsx)(p,{binding:e},e))})}function N(){let e=d(j),t=s();return(0,C.jsx)(`div`,{className:`max-h-80 overflow-auto rounded-md border`,tabIndex:0,role:`region`,"aria-label":`Command registry`,children:(0,C.jsxs)(`table`,{className:`w-full text-[12px]`,"data-registry":``,children:[(0,C.jsx)(`thead`,{className:`sticky top-0 bg-muted/80 backdrop-blur`,children:(0,C.jsxs)(`tr`,{className:`text-left text-[11px] text-muted-foreground`,children:[(0,C.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`Command`}),(0,C.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`Category`}),(0,C.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`Keys`}),(0,C.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`State`}),(0,C.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:(0,C.jsx)(`span`,{className:`sr-only`,children:`Run`})})]})}),(0,C.jsx)(`tbody`,{children:e.map(e=>(0,C.jsxs)(`tr`,{className:`border-t border-border/50`,"data-command":e.id,"data-enabled":e.enabled,children:[(0,C.jsxs)(`td`,{className:`px-2 py-0.5`,children:[(0,C.jsx)(`span`,{className:`font-medium`,children:e.title}),` `,(0,C.jsx)(`span`,{className:`font-mono text-[11px] text-muted-foreground`,children:e.id})]}),(0,C.jsx)(`td`,{className:`px-2 py-0.5 text-muted-foreground`,children:e.category}),(0,C.jsx)(`td`,{className:`px-2 py-0.5`,children:(0,C.jsx)(M,{id:e.id})}),(0,C.jsx)(`td`,{className:b(`px-2 py-0.5`,e.enabled?`text-emerald-700 dark:text-emerald-400`:`text-muted-foreground`),children:e.enabled?`enabled`:e.reason||`disabled`}),(0,C.jsx)(`td`,{className:`px-2 py-0.5 text-right`,children:(0,C.jsx)(`button`,{type:`button`,disabled:!e.enabled,onClick:()=>t(e.id,`api`),className:`h-6 rounded border px-1.5 text-[11px] hover:bg-muted disabled:opacity-40`,children:`Run`})})]},e.id))})]})})}function P(){return(0,C.jsx)(i,{children:(0,C.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,C.jsx)(A,{}),(0,C.jsx)(N,{})]})})}var F=`import { useState, type KeyboardEvent } from "react"
import { CommandButton, KeyboardProvider, messageText, PendingChord, ProviderKbd, useCommandKeys, useCommands, useContextKeys, useKeyboardValue, useKeymap, useRunCommand, type CommandSpec, type Keyboard, type KeybindingRule } from "@kitora/keyboard"
import { cn } from "@kitora/ui/utils"

// The command registry, live. Commands are ids with metadata; keys, buttons
// and code all point at the id. Enablement is separate from visibility and
// comes with a reason: select an issue or press Escape and watch the issue
// commands flip. "Run" calls a command by id from code (invokedBy: "api").

interface Issue {
  readonly id: number
  readonly title: string
  readonly assignee: string | null
  readonly starred: boolean
}

const ME = "you"
const ISSUES: readonly Issue[] = [
  { id: 101, title: "Palette loses focus after closing a nested page", assignee: ME, starred: true },
  { id: 102, title: "Record chords in the shortcuts editor", assignee: "mira", starred: false },
  { id: 103, title: "AZERTY users cannot trigger Mod+/", assignee: null, starred: false },
  { id: 104, title: "Cheatsheet should hide keys that do nothing here", assignee: ME, starred: false },
  { id: 105, title: "Export keybindings as JSON", assignee: "jonas", starred: false },
]

const KEYS: readonly KeybindingRule[] = [
  { key: "j", command: "list.next" },
  { key: "k", command: "list.prev" },
  { key: "Escape", command: "list.clear", when: "issue.selected" },
  { key: "i", command: "issue.assignMe" },
  { key: "s", command: "issue.star" },
  { key: "e", command: "issue.archive" },
]

// The issue listbox keeps focus on itself (aria-activedescendant), so its rows
// take no focus and no handlers: one click handler on the listbox finds the
// row through \`data-issue-id\`, and its own key handler runs the list commands
// (j / k work from anywhere; the arrows work while the list has focus).
function issueIdAt(target: EventTarget): number | null {
  const id = target instanceof Element ? target.closest("[data-issue-id]")?.getAttribute("data-issue-id") : null
  return id ? Number(id) : null
}
const LISTBOX_KEYS: Readonly<Record<string, string>> = { ArrowDown: "list.next", ArrowUp: "list.prev" }
const listboxCommand = (event: KeyboardEvent<HTMLElement>): string | undefined =>
  event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ? undefined : LISTBOX_KEYS[event.key]

function Tracker() {
  const [issues, setIssues] = useState(ISSUES)
  const [activeId, setActiveId] = useState<number | null>(101)
  const runCommand = useRunCommand()
  const [flash, setFlash] = useState("Ready")
  const active = issues.find((issue) => issue.id === activeId) ?? null

  const move = (step: number) => {
    const at = issues.findIndex((issue) => issue.id === activeId)
    const next = issues[Math.max(0, Math.min(issues.length - 1, at + step))]
    if (next) setActiveId(next.id)
  }
  const update = (change: (issue: Issue) => Issue | null, message: string) => {
    setIssues((list) => list.flatMap((issue) => (issue.id === activeId ? (change(issue) ?? []) : [issue])))
    setFlash(message)
  }
  const issueCommand = (title: string, run: () => void): CommandSpec<undefined> => ({ title, category: "Issue", enabled: "issue.selected", disabledReason: "Select an issue first", run })

  useCommands({
    "list.next": { title: "Next issue", category: "List", run: () => move(1) },
    "list.prev": { title: "Previous issue", category: "List", run: () => move(-1) },
    "list.clear": { title: "Clear selection", category: "List", enabled: "issue.selected", disabledReason: "Nothing is selected", run: () => setActiveId(null) },
    "issue.assignMe": {
      ...issueCommand("Assign to me", () => update((issue) => ({ ...issue, assignee: ME }), "Assigned to you")),
      enabled: "issue.selected && !issue.mine",
      disabledReason: () => (active?.assignee === ME ? "Already assigned to you" : "Select an issue first"),
    },
    "issue.star": issueCommand("Star issue", () => update((issue) => ({ ...issue, starred: !issue.starred }), "Star toggled")),
    "issue.archive": issueCommand("Archive issue", () => update(() => null, "Archived 1")),
  })
  useKeymap("default", KEYS)
  // Context keys from UI state: enablement re-evaluates when they change.
  useContextKeys({ "issue.selected": active !== null, "issue.mine": active?.assignee === ME })

  return (
    <div className="flex h-[260px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]" data-tracker="">
      <div className="flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2">
        <CommandButton command="issue.assignMe" className="h-7" />
        <CommandButton command="issue.star" className="h-7" />
        <CommandButton command="issue.archive" className="h-7" />
        <CommandButton command="list.clear" className="ml-auto h-7" />
      </div>
      <ul
        role="listbox"
        aria-label="Issues"
        aria-activedescendant={active ? \`registry-issue-\${active.id}\` : undefined}
        tabIndex={0}
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
        {issues.map((issue) => (
          <li
            key={issue.id}
            id={\`registry-issue-\${issue.id}\`}
            role="option"
            aria-selected={issue.id === activeId}
            data-issue-id={issue.id}
            className={cn("flex h-8 items-center gap-2 border-b border-border/50 px-2", issue.id === activeId && "bg-primary/10 shadow-[inset_2px_0_0] shadow-primary")}
          >
            <span className="w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums">#{issue.id}</span>
            <span className="min-w-0 flex-1 truncate">{issue.title}</span>
            {issue.starred ? <span className="text-amber-500">★</span> : null}
            <span className="w-10 shrink-0 text-right text-[11px] text-muted-foreground">{issue.assignee ?? "—"}</span>
          </li>
        ))}
      </ul>
      <div className="flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground">
        <PendingChord className="h-6" />
        <span className="truncate" data-tracker-flash="">
          {flash}
        </span>
      </div>
    </div>
  )
}

interface RegistryRow {
  readonly id: string
  readonly title: string
  readonly category: string
  readonly enabled: boolean
  readonly reason: string
}

// Module-level reader, so useKeyboardValue caches it between renders and re-reads on registry or context changes.
function registryRows(keyboard: Keyboard): RegistryRow[] {
  return keyboard.commands.list().map((entry) => {
    const enabled = keyboard.isEnabled(entry.id)
    return {
      id: entry.id,
      title: messageText(entry.spec.title),
      category: entry.spec.category === undefined ? "" : messageText(entry.spec.category),
      enabled,
      reason: enabled || entry.spec.disabledReason === undefined ? "" : messageText(entry.spec.disabledReason),
    }
  })
}

function KeysCell({ id }: { readonly id: string }) {
  const keys = useCommandKeys(id) // the command's effective keys, primary first
  return (
    <span className="inline-flex gap-1">
      {keys.slice(0, 2).map((key) => (
        <ProviderKbd key={key} binding={key} />
      ))}
    </span>
  )
}

function RegistryTable() {
  const rows = useKeyboardValue(registryRows)
  const run = useRunCommand()
  return (
    <div className="max-h-80 overflow-auto rounded-md border" tabIndex={0} role="region" aria-label="Command registry">
      <table className="w-full text-[12px]" data-registry="">
        <thead className="sticky top-0 bg-muted/80 backdrop-blur">
          <tr className="text-left text-[11px] text-muted-foreground">
            <th className="px-2 py-1 font-medium">Command</th>
            <th className="px-2 py-1 font-medium">Category</th>
            <th className="px-2 py-1 font-medium">Keys</th>
            <th className="px-2 py-1 font-medium">State</th>
            <th className="px-2 py-1 font-medium">
              <span className="sr-only">Run</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-border/50" data-command={row.id} data-enabled={row.enabled}>
              <td className="px-2 py-0.5">
                <span className="font-medium">{row.title}</span> <span className="font-mono text-[11px] text-muted-foreground">{row.id}</span>
              </td>
              <td className="px-2 py-0.5 text-muted-foreground">{row.category}</td>
              <td className="px-2 py-0.5">
                <KeysCell id={row.id} />
              </td>
              <td className={cn("px-2 py-0.5", row.enabled ? "text-emerald-700 dark:text-emerald-400" : "text-muted-foreground")}>{row.enabled ? "enabled" : row.reason || "disabled"}</td>
              <td className="px-2 py-0.5 text-right">
                <button type="button" disabled={!row.enabled} onClick={() => run(row.id, "api")} className="h-6 rounded border px-1.5 text-[11px] hover:bg-muted disabled:opacity-40">
                  Run
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function CommandRegistry() {
  return (
    <KeyboardProvider>
      <div className="flex flex-col gap-3">
        <Tracker />
        <RegistryTable />
      </div>
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>v(()=>import(`./command-registry-BPpW5aiR.js`),[]));function I(){let e=r(),[t,n]=(0,S.useState)(`edit`),[i,s]=(0,S.useState)(!1),[c,l]=(0,S.useState)([]);return a({"doc.save":{title:`Save`,category:`Document`,enabled:`doc.dirty`,disabledReason:`No changes to save`,run:()=>s(!1)},"doc.preview":{title:`Toggle preview`,category:`Document`,run:()=>n(e=>e===`edit`?`preview`:`edit`)}}),o(`default`,[{key:`Mod+S`,command:`doc.save`,when:`scope.editor`},{key:`Alt+V`,command:`doc.preview`,when:`scope.editor && doc.mode == 'edit'`}]),u({"doc.dirty":i,"doc.mode":t}),(0,S.useEffect)(()=>{let t=0;return e.use({name:`run-log`,async run(e,n){let r=await n();return t+=1,l(n=>[{n:t,id:e.id,invokedBy:e.invokedBy,status:r.status},...n].slice(0,8)),r}})},[e]),(0,C.jsxs)(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[(0,C.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,C.jsxs)(`div`,{tabIndex:0,"data-kb-scope":`editor`,className:`flex flex-col gap-2 rounded-md border p-2 text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-ring/40`,children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,C.jsx)(m,{command:`doc.save`,className:`h-7`}),(0,C.jsx)(m,{command:`doc.preview`,className:`h-7`}),(0,C.jsx)(`button`,{type:`button`,onClick:()=>s(!0),className:`h-7 rounded-md border px-2 text-[12px] hover:bg-muted`,children:`Make a change`})]}),(0,C.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Mode `,(0,C.jsx)(`span`,{className:`font-mono text-foreground`,children:t}),`, `,i?`unsaved changes`:`saved`,`. Click here, then `,(0,C.jsx)(p,{binding:`Mod+S`}),` or `,(0,C.jsx)(p,{binding:`Alt+V`}),`.`]})]}),(0,C.jsx)(`h3`,{className:`text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:`Run log (middleware)`}),c.length===0?(0,C.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`Run something: a key or a button.`}):null,(0,C.jsx)(`table`,{className:`w-full text-[12px]`,"data-run-log":``,children:(0,C.jsx)(`tbody`,{children:c.map(e=>(0,C.jsxs)(`tr`,{className:`border-b border-border/50 last:border-b-0`,children:[(0,C.jsx)(`td`,{className:`w-8 py-0.5 text-muted-foreground tabular-nums`,children:e.n}),(0,C.jsx)(`td`,{className:`py-0.5 font-mono`,children:e.id}),(0,C.jsx)(`td`,{className:`py-0.5 text-muted-foreground`,children:e.invokedBy}),(0,C.jsx)(`td`,{className:`py-0.5 text-right text-muted-foreground`,children:e.status})]},e.n))})})]}),(0,C.jsx)(g,{initialWhen:`doc.dirty && scope.editor`})]})}function L(){return(0,C.jsx)(i,{children:(0,C.jsx)(I,{})})}var R=`import { useEffect, useState } from "react"
import { CommandButton, ContextInspector, KeyboardProvider, ProviderKbd, useCommands, useContextKeys, useKeyboard, useKeymap, type InvokedBy } from "@kitora/keyboard"

// Context keys and when-clauses. Components set context keys from their state;
// the dom layer sets its own (inputFocus, focusedRegion, scope.*). The
// inspector lists every key now and tests a when-clause against the live
// context. A middleware sees every run, from any surface, for the run log.
// The keys are scoped to this card (\`data-kb-scope="editor"\`).

interface RunLogEntry {
  readonly n: number
  readonly id: string
  readonly invokedBy: InvokedBy
  readonly status: string
}

function Editor() {
  const keyboard = useKeyboard()
  const [mode, setMode] = useState<"edit" | "preview">("edit")
  const [dirty, setDirty] = useState(false)
  const [log, setLog] = useState<readonly RunLogEntry[]>([])

  useCommands({
    "doc.save": { title: "Save", category: "Document", enabled: "doc.dirty", disabledReason: "No changes to save", run: () => setDirty(false) },
    "doc.preview": { title: "Toggle preview", category: "Document", run: () => setMode((m) => (m === "edit" ? "preview" : "edit")) },
  })
  useKeymap("default", [
    { key: "Mod+S", command: "doc.save", when: "scope.editor" },
    { key: "Alt+V", command: "doc.preview", when: "scope.editor && doc.mode == 'edit'" },
  ])
  useContextKeys({ "doc.dirty": dirty, "doc.mode": mode })

  // A logging middleware: every run, from a key, a button or code, passes through it.
  useEffect(() => {
    let n = 0
    return keyboard.use({
      name: "run-log",
      async run(invocation, next) {
        const result = await next()
        n += 1
        setLog((list) => [{ n, id: invocation.id, invokedBy: invocation.invokedBy, status: result.status }, ...list].slice(0, 8))
        return result
      },
    })
  }, [keyboard])

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-2">
        <div tabIndex={0} data-kb-scope="editor" className="flex flex-col gap-2 rounded-md border p-2 text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-ring/40">
          <div className="flex flex-wrap items-center gap-1.5">
            <CommandButton command="doc.save" className="h-7" />
            <CommandButton command="doc.preview" className="h-7" />
            <button type="button" onClick={() => setDirty(true)} className="h-7 rounded-md border px-2 text-[12px] hover:bg-muted">
              Make a change
            </button>
          </div>
          <p className="text-[12px] text-muted-foreground">
            Mode <span className="font-mono text-foreground">{mode}</span>, {dirty ? "unsaved changes" : "saved"}. Click here, then <ProviderKbd binding="Mod+S" /> or <ProviderKbd binding="Alt+V" />.
          </p>
        </div>
        <h3 className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">Run log (middleware)</h3>
        {log.length === 0 ? <p className="text-[12px] text-muted-foreground">Run something: a key or a button.</p> : null}
        <table className="w-full text-[12px]" data-run-log="">
          <tbody>
            {log.map((entry) => (
              <tr key={entry.n} className="border-b border-border/50 last:border-b-0">
                <td className="w-8 py-0.5 text-muted-foreground tabular-nums">{entry.n}</td>
                <td className="py-0.5 font-mono">{entry.id}</td>
                <td className="py-0.5 text-muted-foreground">{entry.invokedBy}</td>
                <td className="py-0.5 text-right text-muted-foreground">{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ContextInspector initialWhen="doc.dirty && scope.editor" />
    </div>
  )
}

export function ContextKeys() {
  return (
    <KeyboardProvider>
      <Editor />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>v(()=>import(`./context-keys-B-ZIv7gR.js`),[]));function z(){let[e,t]=(0,S.useState)(0);return l(`Alt+ArrowUp`,()=>t(e+1),{id:`counter.up`,title:`Count up`,category:`Demo`}),l(`Alt+ArrowDown`,()=>t(e-1),{id:`counter.down`,title:`Count down`,category:`Demo`}),(0,C.jsxs)(`p`,{className:`text-[13px]`,children:[(0,C.jsx)(p,{binding:`Alt+ArrowUp`}),` / `,(0,C.jsx)(p,{binding:`Alt+ArrowDown`}),` count:`,` `,(0,C.jsx)(`span`,{className:`font-mono tabular-nums`,"data-counter":``,children:e}),` `,(0,C.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:`— the handler reads plain state, never stale, registered once.`})]})}function B(){return(0,C.jsx)(i,{children:(0,C.jsx)(z,{})})}var V=`import { useState } from "react"
import { KeyboardProvider, ProviderKbd, useKeybinding } from "@kitora/keyboard"

// No stale closures: the handler is an inline arrow over plain state. The
// binding is registered once and the kit always calls the latest handler, so
// it never sees an old count.

function Counter() {
  const [count, setCount] = useState(0)
  useKeybinding("Alt+ArrowUp", () => setCount(count + 1), { id: "counter.up", title: "Count up", category: "Demo" })
  useKeybinding("Alt+ArrowDown", () => setCount(count - 1), { id: "counter.down", title: "Count down", category: "Demo" })
  return (
    <p className="text-[13px]">
      <ProviderKbd binding="Alt+ArrowUp" /> / <ProviderKbd binding="Alt+ArrowDown" /> count:{" "}
      <span className="font-mono tabular-nums" data-counter="">
        {count}
      </span>{" "}
      <span className="text-[12px] text-muted-foreground">— the handler reads plain state, never stale, registered once.</span>
    </p>
  )
}

export function FreshClosure() {
  return (
    <KeyboardProvider>
      <Counter />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>v(()=>import(`./fresh-closure-CzsK8F3C.js`),[]));function H(){let[e,t]=(0,S.useState)(!1),n=d(e=>e.commands.get(`focus.exit`)!==void 0);return(0,C.jsxs)(`div`,{className:`flex flex-col gap-2 text-[13px]`,children:[(0,C.jsxs)(`label`,{className:`inline-flex h-7 items-center gap-1.5 text-[12px]`,children:[(0,C.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>t(e.target.checked),className:`size-3.5`,"data-kb-toggle":`focus-mode`}),`Mount the focus-mode panel`]}),e?(0,C.jsx)(f,{id:`focus.exit`,spec:{title:`Leave focus mode`,category:`View`,run:()=>t(!1)},keys:[`Mod+Shift+F`],children:(0,C.jsxs)(`div`,{className:`rounded-md border border-dashed p-3`,"data-focus-panel":``,children:[`Focus mode is on. Press `,(0,C.jsx)(p,{binding:`Mod+Shift+F`}),` or`,(0,C.jsx)(m,{command:`focus.exit`,className:`ml-2`})]})}):null,(0,C.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[(0,C.jsx)(`span`,{className:`font-mono`,children:`focus.exit`}),` is `,n?`in the registry`:`not in the registry`,`.`]})]})}function U(){return(0,C.jsx)(i,{children:(0,C.jsx)(H,{})})}var W=`import { useState } from "react"
import { Command, CommandButton, KeyboardProvider, ProviderKbd, useKeyboardValue } from "@kitora/keyboard"

// A command that exists only while its component is mounted: <Command>
// registers it (and its keys) on mount and removes both on unmount.

function FocusMode() {
  const [focusMode, setFocusMode] = useState(false)
  const registered = useKeyboardValue((kb) => kb.commands.get("focus.exit") !== undefined)
  return (
    <div className="flex flex-col gap-2 text-[13px]">
      <label className="inline-flex h-7 items-center gap-1.5 text-[12px]">
        <input type="checkbox" checked={focusMode} onChange={(event) => setFocusMode(event.target.checked)} className="size-3.5" data-kb-toggle="focus-mode" />
        Mount the focus-mode panel
      </label>
      {focusMode ? (
        <Command id="focus.exit" spec={{ title: "Leave focus mode", category: "View", run: () => setFocusMode(false) }} keys={["Mod+Shift+F"]}>
          <div className="rounded-md border border-dashed p-3" data-focus-panel="">
            Focus mode is on. Press <ProviderKbd binding="Mod+Shift+F" /> or
            <CommandButton command="focus.exit" className="ml-2" />
          </div>
        </Command>
      ) : null}
      <p className="text-[12px] text-muted-foreground">
        <span className="font-mono">focus.exit</span> is {registered ? "in the registry" : "not in the registry"}.
      </p>
    </div>
  )
}

export function RegisterOnMount() {
  return (
    <KeyboardProvider>
      <FocusMode />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>v(()=>import(`./register-on-mount-DjRTr7Jq.js`),[]));function G(){return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(t,{title:`Commands`,children:`Commands are ids with metadata; keys, the palette, buttons and the cheatsheet all point at the id. Enablement is separate from visibility and comes with a reason. Use the app below and watch the registry follow.`}),(0,C.jsx)(x,{n:1,title:`The registry, live`,blurb:`Select an issue or press Escape: the issue commands flip between enabled and their disabled reason. Run calls the command by id from code (invokedBy: api).`,code:F,children:(0,C.jsx)(P,{})}),(0,C.jsx)(x,{n:2,title:`Context keys and when`,blurb:`Every context key now, set by components and the dom layer. Type a when-clause to test it against the live context; the run log is a middleware.`,code:R,children:(0,C.jsx)(L,{})}),(0,C.jsx)(x,{n:3,title:`Register on mount`,blurb:`A command that exists only while its component is mounted.`,code:W,children:(0,C.jsx)(U,{})}),(0,C.jsx)(x,{n:4,title:`No stale closures`,blurb:`The handler is an inline arrow over state; it is never re-registered and never sees an old count.`,code:V,children:(0,C.jsx)(B,{})})]})}export{G as component};