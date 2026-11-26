import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{r as n,t as r}from"./provider-CJrNxsO0.js";import{a as i,d as a,f as o,o as s,s as c,u as l}from"./hooks-D7kCtow4.js";import{i as u,t as d}from"./kbd-BBrTDCPy.js";import{i as f}from"./hints-BkB-gW-S.js";import{Bc as p,Cc as m,Ic as h,hi as g}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as _}from"./example-BGnSQG2Y.js";var v=e(p(),1),y=h(),b=`you`,x=[{id:101,title:`Palette loses focus after closing a nested page`,assignee:b,status:`open`},{id:102,title:`Record chords in the shortcuts editor`,assignee:`mira`,status:`open`},{id:103,title:`AZERTY users cannot trigger Mod+/`,assignee:null,status:`open`},{id:104,title:`Cheatsheet should hide keys that do nothing here`,assignee:b,status:`open`},{id:105,title:`Export keybindings as JSON`,assignee:`jonas`,status:`open`},{id:110,title:`IME composition never fires a shortcut`,assignee:b,status:`closed`}],S=(e,t)=>e.filter(e=>t===`inbox`?e.status===`open`:e.status===`closed`),C=[{key:`g i`,command:`nav.inbox`},{key:`g d`,command:`nav.done`},{key:`j`,command:`list.next`},{key:`ArrowDown`,command:`list.next`,when:`listFocus`},{key:`k`,command:`list.prev`},{key:`ArrowUp`,command:`list.prev`,when:`listFocus`},{key:`x`,command:`list.toggleSelect`},{key:`Escape`,command:`list.clear`,when:`selection.count > 0`},{key:`i`,command:`issue.assignMe`},{key:`e`,command:`issue.archive`},{key:`Mod+Enter`,command:`issue.close`},{key:`Mod+Shift+C`,command:`issue.copyLink`}],w=e=>({name:`github`,weight:10,commands:{"github.openPr":{title:`Open pull request`,category:`GitHub`,run:()=>e(`Opened the linked pull request`)},"github.copyPermalink":{title:`Copy permalink`,category:`GitHub`,run:()=>e(`Copied a GitHub permalink`)}},keybindings:[{key:`Alt+P`,command:`github.openPr`},{key:`Mod+Shift+C`,command:`github.copyPermalink`}]}),T=[{key:`Mod+Shift+K`,command:`issue.copyLink`},{key:`e`,command:`-issue.archive`}];function E(e){let t=e instanceof Element?e.closest(`[data-issue-id]`)?.getAttribute(`data-issue-id`):null;return t?Number(t):null}var D={ArrowDown:`list.next`,ArrowUp:`list.prev`},O=e=>e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey?void 0:D[e.key];function k({plugin:e}){let t=n(),[r,l]=(0,v.useState)(x),[u,p]=(0,v.useState)(`inbox`),[m,h]=(0,v.useState)(101),_=o(),[T,D]=(0,v.useState)([]),[k,A]=(0,v.useState)(!1),[j,M]=(0,v.useState)(`Ready`),N=(0,v.useMemo)(()=>S(r,u),[r,u]),P=N.find(e=>e.id===m)??null,F=new Set(T.length>0?T:P?[P.id]:[]),I=(e,t)=>{l(t=>t.map(t=>F.has(t.id)?e(t):t)),M(t)},L=e=>{let t=N.findIndex(e=>e.id===m),n=N[Math.max(0,Math.min(N.length-1,t+e))];n&&h(n.id)},R=e=>{p(e),D([]),h(null),M(`Opened ${e===`inbox`?`Inbox`:`Done`}`)},z=(e,t)=>({title:e,category:`Issue`,enabled:`issue.selected || selection.count > 0`,disabledReason:`Select an issue first`,run:t});return i({"nav.inbox":{title:`Go to Inbox`,category:`Go to`,run:()=>R(`inbox`)},"nav.done":{title:`Go to Done`,category:`Go to`,run:()=>R(`done`)},"list.next":{title:`Next issue`,category:`List`,run:()=>L(1)},"list.prev":{title:`Previous issue`,category:`List`,run:()=>L(-1)},"list.toggleSelect":{title:`Select issue`,category:`List`,enabled:`issue.selected`,disabledReason:`Select an issue first`,run:()=>D(e=>P===null?e:e.includes(P.id)?e.filter(e=>e!==P.id):[...e,P.id])},"list.clear":{title:`Clear selection`,category:`List`,enabled:`selection.count > 0`,run:()=>D([])},"issue.assignMe":z(`Assign to me`,()=>I(e=>({...e,assignee:b}),`Assigned to you`)),"issue.archive":z(`Archive issue`,()=>I(e=>({...e,status:`archived`}),`Archived ${F.size}`)),"issue.close":z(`Close issue`,()=>I(e=>({...e,status:e.status===`closed`?`open`:`closed`}),`Status changed`)),"issue.copyLink":z(`Copy issue link`,()=>M(`Copied https://tracker.example/issues/${P?.id??``}`))}),a(`default`,C),(0,v.useEffect)(()=>e?t.plugin(w(M)):void 0,[t,e]),c({"issue.selected":P!==null,"selection.count":T.length}),s(`listFocus`,k),(0,y.jsxs)(`div`,{className:`flex h-60 flex-col overflow-hidden rounded-lg border bg-background text-[13px]`,"data-tracker":``,children:[(0,y.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2`,children:[(0,y.jsx)(`span`,{className:`font-medium`,children:u===`inbox`?`Inbox`:`Done`}),(0,y.jsx)(d,{command:`issue.assignMe`,className:`h-7`}),(0,y.jsx)(d,{command:`issue.archive`,className:`h-7`}),(0,y.jsx)(d,{command:`issue.copyLink`,className:`h-7`})]}),(0,y.jsx)(`div`,{role:`listbox`,"aria-label":`Issues`,"aria-activedescendant":P?`layers-issue-${P.id}`:void 0,tabIndex:0,onFocus:()=>A(!0),onBlur:()=>A(!1),onClick:e=>{let t=E(e.target);t!==null&&h(t)},onKeyDown:e=>{let t=O(e);t&&(e.preventDefault(),_(t,`keyboard`))},className:`min-h-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset`,children:N.map(e=>(0,y.jsxs)(`div`,{id:`layers-issue-${e.id}`,role:`option`,"aria-selected":e.id===m,"data-issue-id":e.id,className:g(`flex h-8 items-center gap-2 border-b border-border/50 px-2`,e.id===m&&`bg-primary/10 shadow-[inset_2px_0_0] shadow-primary`),children:[(0,y.jsx)(`span`,{className:g(`size-3 shrink-0 rounded-sm border`,T.includes(e.id)?`border-primary bg-primary`:`border-border`),"aria-hidden":!0}),(0,y.jsxs)(`span`,{className:`w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`#`,e.id]}),(0,y.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.title}),(0,y.jsx)(`span`,{className:`w-10 shrink-0 text-right text-[11px] text-muted-foreground`,children:e.assignee??`—`})]},e.id))}),(0,y.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground`,children:[(0,y.jsx)(f,{className:`h-6`}),(0,y.jsx)(`span`,{className:`truncate`,"data-tracker-flash":``,children:j})]})]})}function A(e){let t=e.keymap.effective(),n=new Set(e.keymap.removed().map(e=>e.rule.uid)),r=new Map;for(let e of t)r.has(e.canonical)||r.set(e.canonical,e.uid);return e.keymap.all().toReversed().map(e=>({rule:e,status:e.enabled?e.removal?`removal`:n.has(e.uid)?`removed`:r.get(e.canonical)===e.uid||e.rule.when!==void 0?`active`:`shadowed`:`off`}))}var j={active:`text-emerald-700 dark:text-emerald-400`,removed:`text-muted-foreground line-through`,removal:`text-red-700 dark:text-red-400`,off:`text-muted-foreground`,shadowed:`text-amber-700 dark:text-amber-400`};function M(){let e=l(A),t=l(e=>e.analyze());return(0,y.jsxs)(`div`,{className:`grid gap-3 xl:grid-cols-[1fr_22rem]`,children:[(0,y.jsx)(`div`,{className:`max-h-96 overflow-auto rounded-md border`,tabIndex:0,role:`region`,"aria-label":`Keybinding rules by layer`,children:(0,y.jsxs)(`table`,{className:`w-full text-[12px]`,"data-layer-rules":``,children:[(0,y.jsx)(`thead`,{className:`sticky top-0 bg-muted/80 backdrop-blur`,children:(0,y.jsxs)(`tr`,{className:`text-left text-[11px] text-muted-foreground`,children:[(0,y.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`Layer`}),(0,y.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`Priority`}),(0,y.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`Key`}),(0,y.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`Command`}),(0,y.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`When`}),(0,y.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`Status`})]})}),(0,y.jsx)(`tbody`,{children:e.map(({rule:e,status:t})=>(0,y.jsxs)(`tr`,{className:`border-t border-border/50`,"data-rule-layer":e.layer,"data-rule-status":t,"data-rule-command":e.rule.command,children:[(0,y.jsxs)(`td`,{className:`px-2 py-0.5`,children:[e.layer,e.source?(0,y.jsxs)(`span`,{className:`text-muted-foreground`,children:[` · `,e.source]}):null]}),(0,y.jsx)(`td`,{className:`px-2 py-0.5 font-mono text-[11px] text-muted-foreground tabular-nums`,children:e.priority.slice(0,2).join(` · `)}),(0,y.jsx)(`td`,{className:`px-2 py-0.5`,children:e.keyText?(0,y.jsx)(u,{binding:e.keyText}):`—`}),(0,y.jsx)(`td`,{className:`px-2 py-0.5 font-mono`,children:e.rule.command}),(0,y.jsx)(`td`,{className:`px-2 py-0.5 font-mono text-[11px] text-muted-foreground`,children:typeof e.rule.when==`string`?e.rule.when:``}),(0,y.jsx)(`td`,{className:g(`px-2 py-0.5`,j[t]),children:t})]},e.uid))})]})}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`h3`,{className:`mb-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:[`Analysis (`,t.length,`)`]}),(0,y.jsx)(`ul`,{className:`flex flex-col gap-1 text-[12px]`,"data-findings":``,children:t.map((e,t)=>(0,y.jsxs)(`li`,{className:`rounded border px-2 py-1`,"data-finding":e.kind,children:[(0,y.jsx)(`span`,{className:`mr-1.5 rounded bg-muted px-1 font-mono text-[10px] uppercase`,children:e.kind}),e.message]},t))})]})]})}function N({plugin:e,onPlugin:t}){let r=n(),i=l(e=>e.keymap.exportUser().length),a=`h-7 rounded-md border bg-background px-2 text-[12px] font-medium hover:bg-muted`;return(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,y.jsxs)(`label`,{className:`inline-flex h-7 items-center gap-1.5 text-[12px]`,children:[(0,y.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>t(e.target.checked),className:`size-3.5`,"data-kb-toggle":`plugin`}),`github plugin installed`]}),(0,y.jsx)(`button`,{type:`button`,className:a,"data-kb-add-override":``,onClick:()=>r.keymap.importUser([...r.keymap.exportUser(),...T]),children:`Add user override + removal`}),(0,y.jsxs)(`button`,{type:`button`,className:a,onClick:()=>r.keymap.importUser([]),children:[`Clear user layer (`,i,`)`]})]})}function P(){let[e,t]=(0,v.useState)(!0);return(0,y.jsx)(r,{children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(N,{plugin:e,onPlugin:t}),(0,y.jsx)(M,{}),(0,y.jsx)(k,{plugin:e})]})})}var F=`import { useEffect, useMemo, useState, type KeyboardEvent } from "react"
import { CommandButton, KeyboardProvider, PendingChord, ProviderKbd, useCommands, useContextKey, useContextKeys, useKeyboard, useKeyboardValue, useKeymap, useRunCommand, type CommandSpec, type CompiledRule, type KeybindingRule, type Keyboard, type KeyboardPlugin } from "@kitora/keyboard"
import { cn } from "@kitora/ui/utils"

// Rules come from three layers: the app's defaults, plugins (ordered by
// weight) and the user. A higher layer wins; a removal rule ("-command")
// unbinds a lower one without touching its source. Toggle the plugin and
// Mod+Shift+C switches between Copy permalink and Copy issue link; add the
// user override and Mod+Shift+K copies the link while e no longer archives.
// The analyzer reports what shadows what.

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
]

// A plugin: its own namespace, layer and weight; it shadows issue.copyLink on Mod+Shift+C.
const githubPlugin = (say: (text: string) => void): KeyboardPlugin => ({
  name: "github",
  weight: 10,
  commands: {
    "github.openPr": { title: "Open pull request", category: "GitHub", run: () => say("Opened the linked pull request") },
    "github.copyPermalink": { title: "Copy permalink", category: "GitHub", run: () => say("Copied a GitHub permalink") },
  },
  keybindings: [
    { key: "Alt+P", command: "github.openPr" },
    { key: "Mod+Shift+C", command: "github.copyPermalink" },
  ],
})

// What the editor would write to the user layer: a new key, and a removal of a default.
const OVERRIDE: readonly KeybindingRule[] = [
  { key: "Mod+Shift+K", command: "issue.copyLink" },
  { key: "e", command: "-issue.archive" },
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

function Tracker({ plugin }: { readonly plugin: boolean }) {
  const keyboard = useKeyboard()
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
  })
  useKeymap("default", DEFAULT_KEYS)
  // keyboard.plugin installs the plugin's commands and rules and returns its remover.
  useEffect(() => (plugin ? keyboard.plugin(githubPlugin(setFlash)) : undefined), [keyboard, plugin])
  useContextKeys({ "issue.selected": active !== null, "selection.count": selected.length })
  useContextKey("listFocus", listFocus)

  return (
    <div className="flex h-60 flex-col overflow-hidden rounded-lg border bg-background text-[13px]" data-tracker="">
      <div className="flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2">
        <span className="font-medium">{view === "inbox" ? "Inbox" : "Done"}</span>
        <CommandButton command="issue.assignMe" className="h-7" />
        <CommandButton command="issue.archive" className="h-7" />
        <CommandButton command="issue.copyLink" className="h-7" />
      </div>
      <div
        role="listbox"
        aria-label="Issues"
        aria-activedescendant={active ? \`layers-issue-\${active.id}\` : undefined}
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
            id={\`layers-issue-\${issue.id}\`}
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
      </div>
    </div>
  )
}

type RuleStatus = "active" | "removed" | "removal" | "off" | "shadowed"

interface LayerRow {
  readonly rule: CompiledRule
  readonly status: RuleStatus
}

// Every rule in every layer, top layer first, with what it does now.
function layerRows(keyboard: Keyboard): LayerRow[] {
  const effective = keyboard.keymap.effective()
  const removed = new Set(keyboard.keymap.removed().map((entry) => entry.rule.uid))
  const winners = new Map<string, number>()
  for (const rule of effective) if (!winners.has(rule.canonical)) winners.set(rule.canonical, rule.uid)
  return keyboard.keymap
    .all()
    .toReversed()
    .map((rule) => {
      const status: RuleStatus = !rule.enabled ? "off" : rule.removal ? "removal" : removed.has(rule.uid) ? "removed" : winners.get(rule.canonical) === rule.uid || rule.rule.when !== undefined ? "active" : "shadowed"
      return { rule, status }
    })
}

const STATUS_CLASS: Readonly<Record<RuleStatus, string>> = {
  active: "text-emerald-700 dark:text-emerald-400",
  removed: "text-muted-foreground line-through",
  removal: "text-red-700 dark:text-red-400",
  off: "text-muted-foreground",
  shadowed: "text-amber-700 dark:text-amber-400",
}

function RulesTable() {
  const rows = useKeyboardValue(layerRows)
  const findings = useKeyboardValue((kb) => kb.analyze())
  return (
    <div className="grid gap-3 xl:grid-cols-[1fr_22rem]">
      <div className="max-h-96 overflow-auto rounded-md border" tabIndex={0} role="region" aria-label="Keybinding rules by layer">
        <table className="w-full text-[12px]" data-layer-rules="">
          <thead className="sticky top-0 bg-muted/80 backdrop-blur">
            <tr className="text-left text-[11px] text-muted-foreground">
              <th className="px-2 py-1 font-medium">Layer</th>
              <th className="px-2 py-1 font-medium">Priority</th>
              <th className="px-2 py-1 font-medium">Key</th>
              <th className="px-2 py-1 font-medium">Command</th>
              <th className="px-2 py-1 font-medium">When</th>
              <th className="px-2 py-1 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ rule, status }) => (
              <tr key={rule.uid} className="border-t border-border/50" data-rule-layer={rule.layer} data-rule-status={status} data-rule-command={rule.rule.command}>
                <td className="px-2 py-0.5">
                  {rule.layer}
                  {rule.source ? <span className="text-muted-foreground"> · {rule.source}</span> : null}
                </td>
                <td className="px-2 py-0.5 font-mono text-[11px] text-muted-foreground tabular-nums">{rule.priority.slice(0, 2).join(" · ")}</td>
                <td className="px-2 py-0.5">{rule.keyText ? <ProviderKbd binding={rule.keyText} /> : "—"}</td>
                <td className="px-2 py-0.5 font-mono">{rule.rule.command}</td>
                <td className="px-2 py-0.5 font-mono text-[11px] text-muted-foreground">{typeof rule.rule.when === "string" ? rule.rule.when : ""}</td>
                <td className={cn("px-2 py-0.5", STATUS_CLASS[status])}>{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="mb-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">Analysis ({findings.length})</h3>
        <ul className="flex flex-col gap-1 text-[12px]" data-findings="">
          {findings.map((finding, index) => (
            <li key={index} className="rounded border px-2 py-1" data-finding={finding.kind}>
              <span className="mr-1.5 rounded bg-muted px-1 font-mono text-[10px] uppercase">{finding.kind}</span>
              {finding.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Controls({ plugin, onPlugin }: { readonly plugin: boolean; readonly onPlugin: (installed: boolean) => void }) {
  const keyboard = useKeyboard()
  const userCount = useKeyboardValue((kb) => kb.keymap.exportUser().length)
  const button = "h-7 rounded-md border bg-background px-2 text-[12px] font-medium hover:bg-muted"
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <label className="inline-flex h-7 items-center gap-1.5 text-[12px]">
        <input type="checkbox" checked={plugin} onChange={(event) => onPlugin(event.target.checked)} className="size-3.5" data-kb-toggle="plugin" />
        github plugin installed
      </label>
      <button type="button" className={button} data-kb-add-override="" onClick={() => keyboard.keymap.importUser([...keyboard.keymap.exportUser(), ...OVERRIDE])}>
        Add user override + removal
      </button>
      <button type="button" className={button} onClick={() => keyboard.keymap.importUser([])}>
        Clear user layer ({userCount})
      </button>
    </div>
  )
}

export function KeymapLayers() {
  const [plugin, setPlugin] = useState(true)
  return (
    <KeyboardProvider>
      <div className="flex flex-col gap-2">
        <Controls plugin={plugin} onPlugin={setPlugin} />
        <RulesTable />
        <Tracker plugin={plugin} />
      </div>
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>m(()=>import(`./keymap-layers-zImqSSKL.js`),[]));function I(){return(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(t,{title:`Layers`,children:[`Rules come from three layers: the app's defaults, plugins (ordered by weight) and the user. A higher layer wins; a removal rule (`,(0,y.jsx)(`code`,{className:`font-mono`,children:`-command`}),`) unbinds a lower one without touching its source. The analyzer reports what shadows what.`]}),(0,y.jsx)(_,{n:1,title:`Default, plugin and user`,blurb:`Toggle the plugin: Mod+Shift+C switches between Copy permalink and Copy issue link. Add the override: Mod+Shift+K copies the link and e no longer archives.`,code:F,children:(0,y.jsx)(P,{})})]})}export{I as component};