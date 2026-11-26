import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{t as n}from"./keyboard-layers-BEsHpeL3.js";import{t as r}from"./command-palette-CqbH595N.js";import{d as i,r as a,t as o}from"./provider-DEyelEMR.js";import{a as s,c,d as l,f as u,o as d,s as f}from"./hooks-M7G8AnMW.js";import{n as p,t as m}from"./palette-DLmgdMFv.js";import{i as h,t as g}from"./kbd-C3VYXfDq.js";import{i as _}from"./hints-DZ77Qitg.js";import{Bc as v,Cc as y,Ic as b,hi as x}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as S}from"./example-B8EaWveR.js";var C=e(v(),1),w=b(),T=`you`,E=[{id:101,title:`Palette loses focus after closing a nested page`,assignee:T,status:`open`},{id:102,title:`Record chords in the shortcuts editor`,assignee:`mira`,status:`open`},{id:103,title:`AZERTY users cannot trigger Mod+/`,assignee:null,status:`open`},{id:104,title:`Cheatsheet should hide keys that do nothing here`,assignee:T,status:`open`},{id:105,title:`Export keybindings as JSON`,assignee:`jonas`,status:`open`},{id:107,title:`Screen readers announce aria-keyshortcuts`,assignee:`mira`,status:`open`},{id:110,title:`IME composition never fires a shortcut`,assignee:T,status:`closed`}],D=(e,t)=>e.filter(e=>t===`inbox`?e.status===`open`:e.status===`closed`),O=[{key:`Mod+K`,command:`app.palette`},{key:`Mod+Shift+P`,command:`app.palette`},{key:`g i`,command:`nav.inbox`},{key:`g d`,command:`nav.done`},{key:`j`,command:`list.next`},{key:`ArrowDown`,command:`list.next`,when:`listFocus`},{key:`k`,command:`list.prev`},{key:`ArrowUp`,command:`list.prev`,when:`listFocus`},{key:`x`,command:`list.toggleSelect`},{key:`Escape`,command:`list.clear`,when:`selection.count > 0`},{key:`i`,command:`issue.assignMe`},{key:`e`,command:`issue.archive`},{key:`Mod+Enter`,command:`issue.close`}],k=p(`tracker.recent`);function A(e){let t=e instanceof Element?e.closest(`[data-issue-id]`)?.getAttribute(`data-issue-id`):null;return t?Number(t):null}var j={ArrowDown:`list.next`,ArrowUp:`list.prev`},M=e=>e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey?void 0:j[e.key];function N(){let e=a(),[t,n]=(0,C.useState)(E),[i,o]=(0,C.useState)(`inbox`),[c,p]=(0,C.useState)(101),v=u(),[y,b]=(0,C.useState)([]),[S,j]=(0,C.useState)(!1),[N,P]=(0,C.useState)(!1),[F,I]=(0,C.useState)([]),[L,R]=(0,C.useState)(`Ready`),z=(0,C.useMemo)(()=>D(t,i),[t,i]),B=z.find(e=>e.id===c)??null,V=new Set(y.length>0?y:B?[B.id]:[]),H=(e,t)=>{n(t=>t.map(t=>V.has(t.id)?e(t):t)),R(t)},U=e=>{let t=z.findIndex(e=>e.id===c),n=z[Math.max(0,Math.min(z.length-1,t+e))];n&&p(n.id)},W=e=>{o(e),b([]),p(null),R(`Opened ${e===`inbox`?`Inbox`:`Done`}`)},G=(e,t)=>({title:e,category:`Issue`,enabled:`issue.selected || selection.count > 0`,disabledReason:`Select an issue first`,run:t});s({"app.palette":{title:`Show command palette`,category:`General`,keywords:[`commands`],run:()=>P(!0)},"nav.inbox":{title:`Go to Inbox`,category:`Go to`,run:()=>W(`inbox`)},"nav.done":{title:`Go to Done`,category:`Go to`,run:()=>W(`done`)},"list.next":{title:`Next issue`,category:`List`,run:()=>U(1)},"list.prev":{title:`Previous issue`,category:`List`,run:()=>U(-1)},"list.toggleSelect":{title:`Select issue`,category:`List`,enabled:`issue.selected`,disabledReason:`Select an issue first`,run:()=>b(e=>B===null?e:e.includes(B.id)?e.filter(e=>e!==B.id):[...e,B.id])},"list.clear":{title:`Clear selection`,category:`List`,enabled:`selection.count > 0`,run:()=>b([])},"issue.assignMe":G(`Assign to me`,()=>H(e=>({...e,assignee:T}),`Assigned to you`)),"issue.archive":G(`Archive issue`,()=>H(e=>({...e,status:`archived`}),`Archived ${V.size}`)),"issue.close":G(`Close issue`,()=>H(e=>({...e,status:e.status===`closed`?`open`:`closed`}),`Status changed`))}),l(`default`,O),f({"issue.selected":B!==null,"selection.count":y.length}),d(`listFocus`,S),(0,C.useEffect)(()=>{let t=0;return e.use({name:`run-log`,async run(e,n){let r=await n();t+=1;let i={n:t,id:e.id,invokedBy:e.invokedBy,status:r.status,...e.binding===void 0?{}:{binding:e.binding}};return I(e=>[i,...e].slice(0,8)),r}})},[e]);let K=m({providers:[{id:`issues`,title:`Go to issue…`,prefix:`#`,placeholder:`Issue number or title…`,items:e=>t.filter(t=>t.status!==`archived`&&`${t.id} ${t.title}`.toLowerCase().includes(e.trim().toLowerCase())).map(e=>({id:String(e.id),label:`#${e.id} ${e.title}`,detail:e.status===`closed`?`Closed`:`Open`,run:()=>{o(e.status===`closed`?`done`:`inbox`),p(e.id),R(`Jumped to #${e.id}`)}}))}],recents:k}),q=F[0];return(0,w.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex h-[300px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]`,"data-tracker":``,children:[(0,w.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2`,children:[(0,w.jsx)(`span`,{className:`font-medium`,children:i===`inbox`?`Inbox`:`Done`}),(0,w.jsx)(g,{command:`issue.assignMe`,className:`h-7`}),(0,w.jsx)(g,{command:`issue.archive`,className:`h-7`}),(0,w.jsx)(g,{command:`app.palette`,className:`ml-auto h-7`})]}),(0,w.jsx)(`div`,{role:`listbox`,"aria-label":`Issues`,"aria-activedescendant":B?`palette-issue-${B.id}`:void 0,tabIndex:0,onFocus:()=>j(!0),onBlur:()=>j(!1),onClick:e=>{let t=A(e.target);t!==null&&p(t)},onKeyDown:e=>{let t=M(e);t&&(e.preventDefault(),v(t,`keyboard`))},className:`min-h-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset`,children:z.map(e=>(0,w.jsxs)(`div`,{id:`palette-issue-${e.id}`,role:`option`,"aria-selected":e.id===c,"data-issue-id":e.id,className:x(`flex h-8 items-center gap-2 border-b border-border/50 px-2`,e.id===c&&`bg-primary/10 shadow-[inset_2px_0_0] shadow-primary`),children:[(0,w.jsx)(`span`,{className:x(`size-3 shrink-0 rounded-sm border`,y.includes(e.id)?`border-primary bg-primary`:`border-border`),"aria-hidden":!0}),(0,w.jsxs)(`span`,{className:`w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`#`,e.id]}),(0,w.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.title}),(0,w.jsx)(`span`,{className:`w-10 shrink-0 text-right text-[11px] text-muted-foreground`,children:e.assignee??`—`})]},e.id))}),(0,w.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground`,children:[(0,w.jsx)(_,{className:`h-6`}),(0,w.jsx)(`span`,{className:`truncate`,"data-tracker-flash":``,children:L}),q?(0,w.jsxs)(`span`,{className:`ml-auto inline-flex items-center gap-1`,"data-tracker-last":q.id,children:[q.id,` · `,q.invokedBy,q.binding?(0,w.jsx)(h,{binding:q.binding}):null]}):null]})]}),(0,w.jsx)(`table`,{className:`w-full text-[12px]`,"data-run-log":``,children:(0,w.jsx)(`tbody`,{children:F.map(e=>(0,w.jsxs)(`tr`,{className:`border-b border-border/50 last:border-b-0`,children:[(0,w.jsx)(`td`,{className:`w-8 py-0.5 text-muted-foreground tabular-nums`,children:e.n}),(0,w.jsx)(`td`,{className:`py-0.5 font-mono`,children:e.id}),(0,w.jsx)(`td`,{className:`py-0.5 text-muted-foreground`,children:e.invokedBy}),(0,w.jsx)(`td`,{className:`py-0.5`,children:e.binding?(0,w.jsx)(h,{binding:e.binding}):null}),(0,w.jsx)(`td`,{className:`py-0.5 text-right text-muted-foreground`,children:e.status})]},e.n))})}),(0,w.jsx)(r,{...K.props,shortcut:!1,open:N,onOpenChange:e=>{P(e),e||K.reset()}})]})}var P=i(`tracker.keymap`);function F(){return(0,w.jsx)(o,{store:P,layers:n()??void 0,children:(0,w.jsx)(N,{})})}var I=`import { useEffect, useMemo, useState, type KeyboardEvent } from "react"
import { CommandButton, KeyboardProvider, localStorageKeymapStore, localStorageRecentStore, PendingChord, ProviderKbd, useCommandPalette, useCommands, useContextKey, useContextKeys, useKeyboard, useKeymap, useRunCommand, type CommandSpec, type InvokedBy, type KeybindingRule, type PaletteProvider } from "@kitora/keyboard"
import { CommandPalette, useKeyboardLayerSource } from "@kitora/overlay"
import { cn } from "@kitora/ui/utils"

// The overlay kit's CommandPalette fed from the registry: every visible
// command with its current key, greyed with a reason when it cannot run,
// recently used first, ranked by a fuzzy match with the letters highlighted.
// Type "#" to jump into the issues page of results; Backspace in an empty
// field goes back. A middleware logs every run with how it was invoked.

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
  { id: 107, title: "Screen readers announce aria-keyshortcuts", assignee: "mira", status: "open" },
  { id: 110, title: "IME composition never fires a shortcut", assignee: ME, status: "closed" },
]

const issuesIn = (issues: readonly Issue[], view: View) => issues.filter((issue) => (view === "inbox" ? issue.status === "open" : issue.status === "closed"))

const DEFAULT_KEYS: readonly KeybindingRule[] = [
  { key: "Mod+K", command: "app.palette" },
  { key: "Mod+Shift+P", command: "app.palette" },
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

interface RunLogEntry {
  readonly n: number
  readonly id: string
  readonly invokedBy: InvokedBy
  readonly binding?: string
  readonly status: string
}

// Recent commands persist, so "Recently used" survives a reload.
const recents = localStorageRecentStore("tracker.recent")

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
  const keyboard = useKeyboard()
  const [issues, setIssues] = useState(ISSUES)
  const [view, setView] = useState<View>("inbox")
  const [activeId, setActiveId] = useState<number | null>(101)
  const runCommand = useRunCommand()
  const [selected, setSelected] = useState<readonly number[]>([])
  const [listFocus, setListFocus] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [log, setLog] = useState<readonly RunLogEntry[]>([])
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
    "app.palette": { title: "Show command palette", category: "General", keywords: ["commands"], run: () => setPaletteOpen(true) },
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
  useContextKeys({ "issue.selected": active !== null, "selection.count": selected.length })
  useContextKey("listFocus", listFocus)

  // A logging middleware: every run, from a key, the palette or a button, lands in the log.
  useEffect(() => {
    let n = 0
    return keyboard.use({
      name: "run-log",
      async run(invocation, next) {
        const result = await next()
        n += 1
        const entry: RunLogEntry = { n, id: invocation.id, invokedBy: invocation.invokedBy, status: result.status, ...(invocation.binding === undefined ? {} : { binding: invocation.binding }) }
        setLog((list) => [entry, ...list].slice(0, 8))
        return result
      },
    })
  }, [keyboard])

  // A result provider with its own page: "#" jumps into it.
  const issueProvider: PaletteProvider = {
    id: "issues",
    title: "Go to issue…",
    prefix: "#",
    placeholder: "Issue number or title…",
    items: (text) =>
      issues
        .filter((issue) => issue.status !== "archived" && \`\${issue.id} \${issue.title}\`.toLowerCase().includes(text.trim().toLowerCase()))
        .map((issue) => ({
          id: String(issue.id),
          label: \`#\${issue.id} \${issue.title}\`,
          detail: issue.status === "closed" ? "Closed" : "Open",
          run: () => {
            setView(issue.status === "closed" ? "done" : "inbox")
            setActiveId(issue.id)
            setFlash(\`Jumped to #\${issue.id}\`)
          },
        })),
  }
  const palette = useCommandPalette({ providers: [issueProvider], recents })
  const last = log[0]

  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-[300px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]" data-tracker="">
        <div className="flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2">
          <span className="font-medium">{view === "inbox" ? "Inbox" : "Done"}</span>
          <CommandButton command="issue.assignMe" className="h-7" />
          <CommandButton command="issue.archive" className="h-7" />
          <CommandButton command="app.palette" className="ml-auto h-7" />
        </div>
        <div
          role="listbox"
          aria-label="Issues"
          aria-activedescendant={active ? \`palette-issue-\${active.id}\` : undefined}
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
              id={\`palette-issue-\${issue.id}\`}
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
          {last ? (
            <span className="ml-auto inline-flex items-center gap-1" data-tracker-last={last.id}>
              {last.id} · {last.invokedBy}
              {last.binding ? <ProviderKbd binding={last.binding} /> : null}
            </span>
          ) : null}
        </div>
      </div>
      <table className="w-full text-[12px]" data-run-log="">
        <tbody>
          {log.map((entry) => (
            <tr key={entry.n} className="border-b border-border/50 last:border-b-0">
              <td className="w-8 py-0.5 text-muted-foreground tabular-nums">{entry.n}</td>
              <td className="py-0.5 font-mono">{entry.id}</td>
              <td className="py-0.5 text-muted-foreground">{entry.invokedBy}</td>
              <td className="py-0.5">{entry.binding ? <ProviderKbd binding={entry.binding} /> : null}</td>
              <td className="py-0.5 text-right text-muted-foreground">{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CommandPalette
        {...palette.props}
        shortcut={false}
        open={paletteOpen}
        onOpenChange={(open) => {
          setPaletteOpen(open)
          if (!open) palette.reset()
        }}
      />
    </div>
  )
}

// Opt-in persistence of the user layer: a key recorded in a ShortcutsEditor shows on its palette row.
const keymapStore = localStorageKeymapStore("tracker.keymap")

export function PaletteApp() {
  const layers = useKeyboardLayerSource() // the palette's overlay shadows the page's keys while open
  return (
    <KeyboardProvider store={keymapStore} layers={layers ?? undefined}>
      <Tracker />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>y(()=>import(`./palette-app-Jl9NGKSd.js`),[]));var L=[{id:`readme`,label:`README.md`},{id:`guide`,label:`GUIDE.md`},{id:`notes`,label:`NOTES.md`}];function R(){let e=c({id:`files.quickOpen`,category:`Files`}),[t,n]=(0,C.useState)(`—`);return(0,w.jsxs)(`div`,{className:`flex items-center gap-3 text-[12px]`,children:[(0,w.jsx)(g,{command:`files.quickOpen`}),(0,w.jsxs)(`span`,{className:`text-muted-foreground`,children:[`Opened:`,` `,(0,w.jsx)(`span`,{"data-testid":`kb-quick-open-last`,className:`font-mono text-foreground`,children:t})]}),(0,w.jsx)(r,{commands:L,binder:e,shortcut:`mod+shift+o`,title:`Quick open`,onRun:e=>n(e.label)})]})}function z(){return(0,w.jsx)(o,{children:(0,w.jsx)(R,{})})}var B=`import { useState } from "react"
import { CommandButton, KeyboardProvider, useKeyBinder } from "@kitora/keyboard"
import { CommandPalette, type PaletteCommand } from "@kitora/overlay"

// Another kit's key, through the keymap. The overlay kit imports no keyboard
// kit: CommandPalette takes a structural \`binder\` prop, and useKeyBinder fills
// it so the palette's open key is a command ("files.quickOpen") in this
// keymap: it shows in the editor and the cheatsheet, can be remapped, and the
// same key closes it.

const FILES: readonly PaletteCommand[] = [
  { id: "readme", label: "README.md" },
  { id: "guide", label: "GUIDE.md" },
  { id: "notes", label: "NOTES.md" },
]

function Files() {
  const binder = useKeyBinder({ id: "files.quickOpen", category: "Files" })
  const [opened, setOpened] = useState("—")
  return (
    <div className="flex items-center gap-3 text-[12px]">
      <CommandButton command="files.quickOpen" />
      <span className="text-muted-foreground">
        Opened:{" "}
        <span data-testid="kb-quick-open-last" className="font-mono text-foreground">
          {opened}
        </span>
      </span>
      <CommandPalette commands={FILES} binder={binder} shortcut="mod+shift+o" title="Quick open" onRun={(file) => setOpened(file.label)} />
    </div>
  )
}

export function QuickOpen() {
  return (
    <KeyboardProvider>
      <Files />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>y(()=>import(`./quick-open-CY-x4Anl.js`),[]));function V(){return(0,w.jsxs)(`div`,{children:[(0,w.jsx)(t,{title:`Command palette`,children:`The overlay kit's palette, fed from the registry: every visible command with its current key, greyed with a reason when it cannot run, recently used first, ranked by a fuzzy match with the letters highlighted. Type # to jump to an issue; Backspace in an empty field goes back.`}),(0,w.jsx)(S,{n:1,title:`Open with Mod+K`,blurb:`Press Mod+K (or Mod+Shift+P), type “gi” or “arc”, Enter runs it. Runs from the palette are logged as invokedBy: palette.`,code:I,children:(0,w.jsx)(F,{})}),(0,w.jsx)(S,{n:2,title:`Another kit's key, through the keymap`,blurb:`A second CommandPalette on its own engine whose open key goes through useKeyBinder: Mod+Shift+O is the command files.quickOpen, so it can be remapped, and the same key closes it.`,code:B,children:(0,w.jsx)(z,{})})]})}export{V as component};