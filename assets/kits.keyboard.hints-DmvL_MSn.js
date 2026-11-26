import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{_ as n,r,t as i,w as a}from"./provider-D0Iw1w2F.js";import{a as o,d as s,f as c,i as l,o as u,s as d}from"./hooks-BRcZguZq.js";import{t as f}from"./glyphs-DIn5uSom.js";import{a as p,n as m,r as h,t as g}from"./kbd-WtgBabxu.js";import{i as _,n as v,r as y}from"./hints-Ciuct_fj.js";import{Bc as b,Cc as x,Ic as S,hi as C}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as w}from"./example-CZLJLtIC.js";var T=e(b(),1),E=S(),D=[`issue.new`,`issue.archive`,`issue.assignMe`,`issue.star`,`issue.close`,`issue.delete`,`nav.inbox`];function O({command:e}){let t=r(),i=p(),a=l(e),o=c(),s=t.commands.get(e),u=t.isEnabled(e);return(0,E.jsxs)(`button`,{type:`button`,role:`menuitem`,"aria-disabled":!u||void 0,"aria-keyshortcuts":f(a,i),onClick:()=>u&&o(e,`menu`),className:`flex h-7 w-full items-center justify-between gap-6 rounded px-2 text-left text-[13px] hover:bg-muted aria-disabled:opacity-45`,children:[(0,E.jsx)(`span`,{children:s?n(s.spec.title):e}),(0,E.jsx)(h,{command:e})]})}function k({id:e}){let t=p(),n=l(e);return(0,E.jsxs)(`tr`,{className:`border-b border-border/50 last:border-b-0`,children:[(0,E.jsx)(`td`,{className:`py-0.5 pr-3 font-mono`,children:e}),(0,E.jsx)(`td`,{className:`py-0.5 font-mono text-muted-foreground`,children:f(n,t)??`— (a sequence cannot be expressed)`})]})}function A(){let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(`—`),i={enabled:`issue.selected`,disabledReason:`Select an issue first`};return o({"issue.new":{title:`New issue`,category:`Issue`,run:()=>r(`New issue`)},"issue.archive":{title:`Archive issue`,category:`Issue`,...i,run:()=>r(`Archived`)},"issue.assignMe":{title:`Assign to me`,category:`Issue`,...i,run:()=>r(`Assigned to you`)},"issue.star":{title:`Star issue`,category:`Issue`,...i,run:()=>r(`Starred`)},"issue.close":{title:`Close issue`,category:`Issue`,...i,run:()=>r(`Closed`)},"issue.delete":{title:`Delete issue`,category:`Issue`,...i,run:()=>r(`Deleted`)},"nav.inbox":{title:`Go to Inbox`,category:`Go to`,run:()=>r(`Inbox`)}}),s(`default`,[{key:`c`,command:`issue.new`,when:`scope.actions`},{key:`e`,command:`issue.archive`,when:`scope.actions`},{key:`i`,command:`issue.assignMe`,when:`scope.actions`},{key:`s`,command:`issue.star`,when:`scope.actions`},{key:`Mod+Enter`,command:`issue.close`,when:`scope.actions`},{key:`Mod+Backspace`,command:`issue.delete`,when:`scope.actions`},{key:`g i`,command:`nav.inbox`,when:`scope.actions`}]),d({"issue.selected":e}),(0,E.jsxs)(`div`,{"data-kb-scope":`actions`,className:`flex flex-col gap-3`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,E.jsxs)(`label`,{className:`mr-2 inline-flex h-7 items-center gap-1.5 text-[12px]`,children:[(0,E.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>t(e.target.checked),className:`size-3.5`}),`An issue is selected`]}),(0,E.jsx)(g,{command:`issue.new`}),(0,E.jsx)(g,{command:`issue.archive`}),(0,E.jsx)(g,{command:`issue.close`}),(0,E.jsxs)(`span`,{className:`text-[12px] text-muted-foreground`,children:[`Last run: `,(0,E.jsx)(`span`,{className:`font-mono text-foreground`,children:n})]})]}),(0,E.jsxs)(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[(0,E.jsxs)(`div`,{role:`menu`,"aria-label":`Issue actions`,className:`w-64 rounded-md border bg-popover p-1 shadow-sm`,children:[(0,E.jsx)(O,{command:`issue.assignMe`}),(0,E.jsx)(O,{command:`issue.star`}),(0,E.jsx)(O,{command:`issue.close`}),(0,E.jsx)(O,{command:`issue.delete`})]}),(0,E.jsx)(`table`,{className:`w-full text-[12px]`,"data-aria-list":``,children:(0,E.jsx)(`tbody`,{children:D.map(e=>(0,E.jsx)(k,{id:e},e))})})]})]})}function j(){return(0,E.jsx)(i,{children:(0,E.jsx)(A,{})})}var M=`import { useState } from "react"
import { ariaKeyShortcuts, CommandButton, KeyboardProvider, KeyHint, messageText, useCommandKeys, useCommands, useContextKeys, useDisplayPlatform, useKeyboard, useKeymap, useRunCommand } from "@kitora/keyboard"

// Buttons and menu items wired to commands: the title, the key in the
// tooltip, the disabled reason and aria-keyshortcuts all come from the
// registry, so a rebinding updates every one. A sequence such as "g i" cannot
// be expressed in aria-keyshortcuts, so it is left out. The keys work while
// focus is inside this card (\`data-kb-scope="actions"\`).

const IDS = ["issue.new", "issue.archive", "issue.assignMe", "issue.star", "issue.close", "issue.delete", "nav.inbox"] as const

function MenuItem({ command }: { readonly command: string }) {
  const keyboard = useKeyboard()
  const platform = useDisplayPlatform()
  const keys = useCommandKeys(command)
  const run = useRunCommand()
  const entry = keyboard.commands.get(command)
  const enabled = keyboard.isEnabled(command)
  return (
    <button
      type="button"
      role="menuitem"
      aria-disabled={!enabled || undefined}
      aria-keyshortcuts={ariaKeyShortcuts(keys, platform)}
      onClick={() => enabled && run(command, "menu")}
      className="flex h-7 w-full items-center justify-between gap-6 rounded px-2 text-left text-[13px] hover:bg-muted aria-disabled:opacity-45"
    >
      <span>{entry ? messageText(entry.spec.title) : command}</span>
      <KeyHint command={command} />
    </button>
  )
}

function AriaRow({ id }: { readonly id: string }) {
  const platform = useDisplayPlatform()
  const keys = useCommandKeys(id)
  return (
    <tr className="border-b border-border/50 last:border-b-0">
      <td className="py-0.5 pr-3 font-mono">{id}</td>
      <td className="py-0.5 font-mono text-muted-foreground">{ariaKeyShortcuts(keys, platform) ?? "— (a sequence cannot be expressed)"}</td>
    </tr>
  )
}

function Actions() {
  const [selected, setSelected] = useState(false)
  const [last, setLast] = useState("—")
  const needsIssue = { enabled: "issue.selected", disabledReason: "Select an issue first" }
  useCommands({
    "issue.new": { title: "New issue", category: "Issue", run: () => setLast("New issue") },
    "issue.archive": { title: "Archive issue", category: "Issue", ...needsIssue, run: () => setLast("Archived") },
    "issue.assignMe": { title: "Assign to me", category: "Issue", ...needsIssue, run: () => setLast("Assigned to you") },
    "issue.star": { title: "Star issue", category: "Issue", ...needsIssue, run: () => setLast("Starred") },
    "issue.close": { title: "Close issue", category: "Issue", ...needsIssue, run: () => setLast("Closed") },
    "issue.delete": { title: "Delete issue", category: "Issue", ...needsIssue, run: () => setLast("Deleted") },
    "nav.inbox": { title: "Go to Inbox", category: "Go to", run: () => setLast("Inbox") },
  })
  useKeymap("default", [
    { key: "c", command: "issue.new", when: "scope.actions" },
    { key: "e", command: "issue.archive", when: "scope.actions" },
    { key: "i", command: "issue.assignMe", when: "scope.actions" },
    { key: "s", command: "issue.star", when: "scope.actions" },
    { key: "Mod+Enter", command: "issue.close", when: "scope.actions" },
    { key: "Mod+Backspace", command: "issue.delete", when: "scope.actions" },
    { key: "g i", command: "nav.inbox", when: "scope.actions" },
  ])
  useContextKeys({ "issue.selected": selected })
  return (
    <div data-kb-scope="actions" className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <label className="mr-2 inline-flex h-7 items-center gap-1.5 text-[12px]">
          <input type="checkbox" checked={selected} onChange={(event) => setSelected(event.target.checked)} className="size-3.5" />
          An issue is selected
        </label>
        <CommandButton command="issue.new" />
        <CommandButton command="issue.archive" />
        <CommandButton command="issue.close" />
        <span className="text-[12px] text-muted-foreground">
          Last run: <span className="font-mono text-foreground">{last}</span>
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div role="menu" aria-label="Issue actions" className="w-64 rounded-md border bg-popover p-1 shadow-sm">
          <MenuItem command="issue.assignMe" />
          <MenuItem command="issue.star" />
          <MenuItem command="issue.close" />
          <MenuItem command="issue.delete" />
        </div>
        <table className="w-full text-[12px]" data-aria-list="">
          <tbody>
            {IDS.map((id) => (
              <AriaRow key={id} id={id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function CommandButtons() {
  return (
    <KeyboardProvider>
      <Actions />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>x(()=>import(`./command-buttons-Cq_u17Up.js`),[]));var N=`you`,P=[{id:101,title:`Palette loses focus after closing a nested page`,assignee:N,status:`open`},{id:102,title:`Record chords in the shortcuts editor`,assignee:`mira`,status:`open`},{id:103,title:`AZERTY users cannot trigger Mod+/`,assignee:null,status:`open`},{id:104,title:`Cheatsheet should hide keys that do nothing here`,assignee:N,status:`open`},{id:105,title:`Export keybindings as JSON`,assignee:`jonas`,status:`open`},{id:110,title:`IME composition never fires a shortcut`,assignee:N,status:`closed`}],F=(e,t)=>e.filter(e=>t===`inbox`?e.status===`open`:e.status===`closed`),I=[{key:`g i`,command:`nav.inbox`},{key:`g d`,command:`nav.done`},{key:`j`,command:`list.next`},{key:`ArrowDown`,command:`list.next`,when:`listFocus`},{key:`k`,command:`list.prev`},{key:`ArrowUp`,command:`list.prev`,when:`listFocus`},{key:`x`,command:`list.toggleSelect`},{key:`Escape`,command:`list.clear`,when:`selection.count > 0`},{key:`i`,command:`issue.assignMe`},{key:`e`,command:`issue.archive`},{key:`Mod+Enter`,command:`issue.close`},{key:`Mod+Shift+C`,command:`issue.copyLink`},{key:`Mod+Backspace`,command:`issue.delete`},{key:`Mod+Shift+D`,command:`issue.duplicate`}];function L(e){let t=e instanceof Element?e.closest(`[data-issue-id]`)?.getAttribute(`data-issue-id`):null;return t?Number(t):null}var R={ArrowDown:`list.next`,ArrowUp:`list.prev`},z=e=>e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey?void 0:R[e.key];function B(){let[e,t]=(0,T.useState)(P),[n,r]=(0,T.useState)(`inbox`),[i,a]=(0,T.useState)(101),l=c(),[f,p]=(0,T.useState)([]),[m,h]=(0,T.useState)(!1),[g,y]=(0,T.useState)(`Ready`),b=(0,T.useMemo)(()=>F(e,n),[e,n]),x=b.find(e=>e.id===i)??null,S=new Set(f.length>0?f:x?[x.id]:[]),w=(e,n)=>{t(t=>t.map(t=>S.has(t.id)?e(t):t)),y(n)},D=e=>{let t=b.findIndex(e=>e.id===i),n=b[Math.max(0,Math.min(b.length-1,t+e))];n&&a(n.id)},O=e=>{r(e),p([]),a(null),y(`Opened ${e===`inbox`?`Inbox`:`Done`}`)},k=(e,t)=>({title:e,category:`Issue`,enabled:`issue.selected || selection.count > 0`,disabledReason:`Select an issue first`,run:t});return o({"nav.inbox":{title:`Go to Inbox`,category:`Go to`,run:()=>O(`inbox`)},"nav.done":{title:`Go to Done`,category:`Go to`,run:()=>O(`done`)},"list.next":{title:`Next issue`,category:`List`,run:()=>D(1)},"list.prev":{title:`Previous issue`,category:`List`,run:()=>D(-1)},"list.toggleSelect":{title:`Select issue`,category:`List`,enabled:`issue.selected`,disabledReason:`Select an issue first`,run:()=>p(e=>x===null?e:e.includes(x.id)?e.filter(e=>e!==x.id):[...e,x.id])},"list.clear":{title:`Clear selection`,category:`List`,enabled:`selection.count > 0`,run:()=>p([])},"issue.assignMe":k(`Assign to me`,()=>w(e=>({...e,assignee:N}),`Assigned to you`)),"issue.archive":k(`Archive issue`,()=>w(e=>({...e,status:`archived`}),`Archived ${S.size}`)),"issue.close":k(`Close issue`,()=>w(e=>({...e,status:e.status===`closed`?`open`:`closed`}),`Status changed`)),"issue.copyLink":k(`Copy issue link`,()=>y(`Copied https://tracker.example/issues/${x?.id??``}`)),"issue.delete":k(`Delete issue`,()=>{t(e=>e.filter(e=>!S.has(e.id))),y(`Deleted ${S.size}`)}),"issue.duplicate":k(`Duplicate issue`,()=>y(`Duplicated`))}),s(`default`,I),d({"issue.selected":x!==null,"selection.count":f.length}),u(`listFocus`,m),(0,E.jsxs)(`div`,{className:`flex h-[260px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]`,"data-tracker":``,children:[(0,E.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2`,children:[(0,E.jsx)(`span`,{className:`font-medium`,children:n===`inbox`?`Inbox`:`Done`}),(0,E.jsx)(V,{command:`issue.archive`,children:`Archive`}),(0,E.jsx)(V,{command:`issue.close`,children:`Close`}),(0,E.jsx)(V,{command:`issue.copyLink`,children:`Copy link`}),(0,E.jsx)(V,{command:`issue.duplicate`,children:`Duplicate`}),(0,E.jsx)(V,{command:`issue.delete`,children:`Delete`})]}),(0,E.jsx)(`div`,{role:`listbox`,"aria-label":`Issues`,"aria-activedescendant":x?`hints-issue-${x.id}`:void 0,tabIndex:0,onFocus:()=>h(!0),onBlur:()=>h(!1),onClick:e=>{let t=L(e.target);t!==null&&a(t)},onKeyDown:e=>{let t=z(e);t&&(e.preventDefault(),l(t,`keyboard`))},className:`min-h-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset`,children:b.map(e=>(0,E.jsxs)(`div`,{id:`hints-issue-${e.id}`,role:`option`,"aria-selected":e.id===i,"data-issue-id":e.id,className:C(`flex h-8 items-center gap-2 border-b border-border/50 px-2`,e.id===i&&`bg-primary/10 shadow-[inset_2px_0_0] shadow-primary`),children:[(0,E.jsx)(`span`,{className:C(`size-3 shrink-0 rounded-sm border`,f.includes(e.id)?`border-primary bg-primary`:`border-border`),"aria-hidden":!0}),(0,E.jsxs)(`span`,{className:`w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`#`,e.id]}),(0,E.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.title}),(0,E.jsx)(`span`,{className:`w-10 shrink-0 text-right text-[11px] text-muted-foreground`,children:e.assignee??`—`})]},e.id))}),(0,E.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground`,children:[(0,E.jsx)(_,{className:`h-6`}),(0,E.jsx)(`span`,{className:`truncate`,"data-tracker-flash":``,children:g}),(0,E.jsx)(`span`,{className:`ml-auto inline-flex items-center gap-1`,children:`hold ⌘ or Ctrl for hints`})]}),(0,E.jsx)(v,{})]})}function V({command:e,children:t}){return(0,E.jsxs)(`span`,{className:`relative inline-flex`,children:[(0,E.jsx)(g,{command:e,showKey:!1,className:`h-7`,children:t}),(0,E.jsx)(y,{command:e})]})}function H(){return(0,E.jsx)(i,{children:(0,E.jsx)(B,{})})}var U=`import { useMemo, useState, type ReactNode, type KeyboardEvent } from "react"
import { CommandButton, HeldModifierPanel, KeyboardProvider, ModifierHint, PendingChord, useCommands, useContextKey, useContextKeys, useKeymap, useRunCommand, type CommandSpec, type KeybindingRule } from "@kitora/keyboard"
import { cn } from "@kitora/ui/utils"

// Hold ⌘ (macOS) or Ctrl alone: ModifierHint badges appear on the toolbar
// buttons whose command has a Mod key, and HeldModifierPanel lists every
// active Mod shortcut. Release to hide. Both read the registry, so a
// rebinding moves the hint.

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
  { key: "Mod+Shift+C", command: "issue.copyLink" },
  { key: "Mod+Backspace", command: "issue.delete" },
  { key: "Mod+Shift+D", command: "issue.duplicate" },
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
    setActiveId(null)
    setFlash(\`Opened \${next === "inbox" ? "Inbox" : "Done"}\`)
  }
  const issueCommand = (title: string, run: () => void): CommandSpec<undefined> => ({ title, category: "Issue", enabled: "issue.selected || selection.count > 0", disabledReason: "Select an issue first", run })

  useCommands({
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
    "issue.copyLink": issueCommand("Copy issue link", () => setFlash(\`Copied https://tracker.example/issues/\${active?.id ?? ""}\`)),
    "issue.delete": issueCommand("Delete issue", () => {
      setIssues((list) => list.filter((issue) => !targets.has(issue.id)))
      setFlash(\`Deleted \${targets.size}\`)
    }),
    "issue.duplicate": issueCommand("Duplicate issue", () => setFlash("Duplicated")),
  })
  useKeymap("default", DEFAULT_KEYS)
  useContextKeys({ "issue.selected": active !== null, "selection.count": selected.length })
  useContextKey("listFocus", listFocus)

  return (
    <div className="flex h-[260px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]" data-tracker="">
      <div className="flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2">
        <span className="font-medium">{view === "inbox" ? "Inbox" : "Done"}</span>
        <ToolButton command="issue.archive">Archive</ToolButton>
        <ToolButton command="issue.close">Close</ToolButton>
        <ToolButton command="issue.copyLink">Copy link</ToolButton>
        <ToolButton command="issue.duplicate">Duplicate</ToolButton>
        <ToolButton command="issue.delete">Delete</ToolButton>
      </div>
      <div
        role="listbox"
        aria-label="Issues"
        aria-activedescendant={active ? \`hints-issue-\${active.id}\` : undefined}
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
            id={\`hints-issue-\${issue.id}\`}
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
          hold ⌘ or Ctrl for hints
        </span>
      </div>
      <HeldModifierPanel />
    </div>
  )
}

/** A toolbar button (title, key in the tooltip, disabled reason, aria-keyshortcuts) with a badge while Mod is held. */
function ToolButton({ command, children }: { readonly command: string; readonly children: ReactNode }) {
  return (
    <span className="relative inline-flex">
      <CommandButton command={command} showKey={false} className="h-7">
        {children}
      </CommandButton>
      <ModifierHint command={command} />
    </span>
  )
}

export function HeldModifier() {
  return (
    <KeyboardProvider>
      <Tracker />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>x(()=>import(`./held-modifier-Dc6ApLjg.js`),[]));var W=[`Mod+K`,`Mod+Shift+P`,`Alt+ArrowUp`,`Ctrl+Alt+Delete`,`Mod+Enter`,`Mod+Backspace`,`Escape`,`[Shift]+?`,`g i`,`Mod+J Mod+S`,`[KeyW]`];function G(){return(0,E.jsx)(`div`,{tabIndex:0,role:`region`,"aria-label":`Bindings by platform`,className:`overflow-x-auto rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring`,children:(0,E.jsxs)(`table`,{className:`w-full text-[12px]`,"data-kbd-table":``,children:[(0,E.jsx)(`thead`,{children:(0,E.jsxs)(`tr`,{className:`text-left text-[11px] text-muted-foreground`,children:[(0,E.jsx)(`th`,{className:`py-1 pr-3 font-medium`,children:`Binding`}),a.map(e=>(0,E.jsx)(`th`,{className:`py-1 pr-3 font-medium`,children:e},e))]})}),(0,E.jsx)(`tbody`,{children:W.map(e=>(0,E.jsxs)(`tr`,{className:`border-t border-border/50`,children:[(0,E.jsx)(`td`,{className:`py-1 pr-3 font-mono`,children:e}),a.map(t=>(0,E.jsx)(`td`,{className:`py-1 pr-3`,children:(0,E.jsx)(m,{binding:e,platform:t})},t))]},e))})]})})}var K=`import { Kbd, PLATFORMS } from "@kitora/keyboard"

// Kbd draws a binding string with each platform's glyphs: ⌘⇧P on macOS,
// Ctrl Shift P elsewhere; a chord is drawn as two groups, a layout-independent
// [KeyW] by its key. Without \`platform\`, ProviderKbd uses the detected one.

const SAMPLES = ["Mod+K", "Mod+Shift+P", "Alt+ArrowUp", "Ctrl+Alt+Delete", "Mod+Enter", "Mod+Backspace", "Escape", "[Shift]+?", "g i", "Mod+J Mod+S", "[KeyW]"] as const

export function KbdPlatforms() {
  return (
    <div tabIndex={0} role="region" aria-label="Bindings by platform" className="overflow-x-auto rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <table className="w-full text-[12px]" data-kbd-table="">
        <thead>
          <tr className="text-left text-[11px] text-muted-foreground">
            <th className="py-1 pr-3 font-medium">Binding</th>
            {PLATFORMS.map((platform) => (
              <th key={platform} className="py-1 pr-3 font-medium">
                {platform}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SAMPLES.map((sample) => (
            <tr key={sample} className="border-t border-border/50">
              <td className="py-1 pr-3 font-mono">{sample}</td>
              {PLATFORMS.map((platform) => (
                <td key={platform} className="py-1 pr-3">
                  <Kbd binding={sample} platform={platform} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>x(()=>import(`./kbd-platforms-KEYpdQaQ.js`),[]));function q(){return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(t,{title:`Keys on screen`,children:`One source for every key you see: the registry. Kbd draws a binding with the platform's glyphs; buttons and menu items read their command's key, title and enablement, and emit aria-keyshortcuts without the host writing it.`}),(0,E.jsx)(w,{n:1,title:`Kbd on every platform`,blurb:`The same binding strings on macOS, Windows and Linux.`,code:K,children:(0,E.jsx)(G,{})}),(0,E.jsx)(w,{n:2,title:`Buttons, menus and aria-keyshortcuts`,blurb:`Hover a button for its tooltip with the key. Archive is disabled until an issue is selected, with the reason in its tooltip.`,code:M,children:(0,E.jsx)(j,{})}),(0,E.jsx)(w,{n:3,title:`Hold Mod for hints`,blurb:`Hold ⌘ (macOS) or Ctrl alone: badges appear on the toolbar and a panel lists every active Mod shortcut. Release to hide.`,code:U,children:(0,E.jsx)(H,{})})]})}export{q as component};