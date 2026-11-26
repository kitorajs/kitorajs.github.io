import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{t as n}from"./keyboard-layers-BUyfb4hn.js";import{t as r}from"./command-palette-CfPgYICX.js";import{d as i,r as a,t as o}from"./provider-CJrNxsO0.js";import{a as s,d as c,f as l,o as u,s as d,u as f}from"./hooks-D7kCtow4.js";import{t as p}from"./palette-SnL9ISeU.js";import{r as m,t as h}from"./kbd-BBrTDCPy.js";import{t as g}from"./shortcuts-editor-CYZpR6xA.js";import{i as _}from"./hints-BkB-gW-S.js";import{Bc as v,Cc as y,Ic as b,hi as x}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as S}from"./example-BGnSQG2Y.js";var C=e(v(),1),w=b(),T=`you`,E=[{id:101,title:`Palette loses focus after closing a nested page`,assignee:T,status:`open`},{id:102,title:`Record chords in the shortcuts editor`,assignee:`mira`,status:`open`},{id:103,title:`AZERTY users cannot trigger Mod+/`,assignee:null,status:`open`},{id:104,title:`Cheatsheet should hide keys that do nothing here`,assignee:T,status:`open`},{id:105,title:`Export keybindings as JSON`,assignee:`jonas`,status:`open`},{id:110,title:`IME composition never fires a shortcut`,assignee:T,status:`closed`}],D=(e,t)=>e.filter(e=>t===`inbox`?e.status===`open`:e.status===`closed`),O=[{key:`Mod+K`,command:`app.palette`},{key:`Mod+J Mod+S`,command:`app.shortcuts`},{key:`g i`,command:`nav.inbox`},{key:`g d`,command:`nav.done`},{key:`j`,command:`list.next`},{key:`ArrowDown`,command:`list.next`,when:`listFocus`},{key:`k`,command:`list.prev`},{key:`ArrowUp`,command:`list.prev`,when:`listFocus`},{key:`x`,command:`list.toggleSelect`},{key:`Escape`,command:`list.clear`,when:`selection.count > 0`},{key:`i`,command:`issue.assignMe`},{key:`e`,command:`issue.archive`},{key:`Mod+Enter`,command:`issue.close`}];function k(e){let t=e instanceof Element?e.closest(`[data-issue-id]`)?.getAttribute(`data-issue-id`):null;return t?Number(t):null}var A={ArrowDown:`list.next`,ArrowUp:`list.prev`},j=e=>e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey?void 0:A[e.key];function M(){let[e,t]=(0,C.useState)(E),[n,i]=(0,C.useState)(`inbox`),[a,o]=(0,C.useState)(101),f=l(),[m,v]=(0,C.useState)([]),[y,b]=(0,C.useState)(!1),[S,A]=(0,C.useState)(!1),M=(0,C.useRef)(null),[N,P]=(0,C.useState)(`Ready`),F=(0,C.useMemo)(()=>D(e,n),[e,n]),I=F.find(e=>e.id===a)??null,L=new Set(m.length>0?m:I?[I.id]:[]),R=(e,n)=>{t(t=>t.map(t=>L.has(t.id)?e(t):t)),P(n)},z=e=>{let t=F.findIndex(e=>e.id===a),n=F[Math.max(0,Math.min(F.length-1,t+e))];n&&o(n.id)},B=e=>{i(e),v([]),o(null),P(`Opened ${e===`inbox`?`Inbox`:`Done`}`)},V=(e,t)=>({title:e,category:`Issue`,enabled:`issue.selected || selection.count > 0`,disabledReason:`Select an issue first`,run:t});s({"app.palette":{title:`Show command palette`,category:`General`,keywords:[`commands`],run:()=>A(!0)},"app.shortcuts":{title:`Open keyboard shortcuts editor`,category:`General`,keywords:[`keybindings`],run:()=>M.current?.scrollIntoView({block:`nearest`})},"nav.inbox":{title:`Go to Inbox`,category:`Go to`,run:()=>B(`inbox`)},"nav.done":{title:`Go to Done`,category:`Go to`,run:()=>B(`done`)},"list.next":{title:`Next issue`,category:`List`,run:()=>z(1)},"list.prev":{title:`Previous issue`,category:`List`,run:()=>z(-1)},"list.toggleSelect":{title:`Select issue`,category:`List`,enabled:`issue.selected`,disabledReason:`Select an issue first`,run:()=>v(e=>I===null?e:e.includes(I.id)?e.filter(e=>e!==I.id):[...e,I.id])},"list.clear":{title:`Clear selection`,category:`List`,enabled:`selection.count > 0`,run:()=>v([])},"issue.assignMe":V(`Assign to me`,()=>R(e=>({...e,assignee:T}),`Assigned to you`)),"issue.archive":V(`Archive issue`,()=>R(e=>({...e,status:`archived`}),`Archived ${L.size}`)),"issue.close":V(`Close issue`,()=>R(e=>({...e,status:e.status===`closed`?`open`:`closed`}),`Status changed`))}),c(`default`,O),d({"issue.selected":I!==null,"selection.count":m.length}),u(`listFocus`,y);let H=p();return(0,w.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,w.jsxs)(`div`,{ref:M,children:[(0,w.jsx)(g,{}),` `]}),(0,w.jsxs)(`div`,{className:`flex h-[300px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]`,"data-tracker":``,children:[(0,w.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2`,children:[(0,w.jsx)(`span`,{className:`font-medium`,children:n===`inbox`?`Inbox`:`Done`}),(0,w.jsx)(h,{command:`issue.assignMe`,className:`h-7`}),(0,w.jsx)(h,{command:`issue.archive`,className:`h-7`}),(0,w.jsx)(h,{command:`app.palette`,className:`ml-auto h-7`})]}),(0,w.jsx)(`div`,{role:`listbox`,"aria-label":`Issues`,"aria-activedescendant":I?`editor-issue-${I.id}`:void 0,tabIndex:0,onFocus:()=>b(!0),onBlur:()=>b(!1),onClick:e=>{let t=k(e.target);t!==null&&o(t)},onKeyDown:e=>{let t=j(e);t&&(e.preventDefault(),f(t,`keyboard`))},className:`min-h-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset`,children:F.map(e=>(0,w.jsxs)(`div`,{id:`editor-issue-${e.id}`,role:`option`,"aria-selected":e.id===a,"data-issue-id":e.id,className:x(`flex h-8 items-center gap-2 border-b border-border/50 px-2`,e.id===a&&`bg-primary/10 shadow-[inset_2px_0_0] shadow-primary`),children:[(0,w.jsx)(`span`,{className:x(`size-3 shrink-0 rounded-sm border`,m.includes(e.id)?`border-primary bg-primary`:`border-border`),"aria-hidden":!0}),(0,w.jsxs)(`span`,{className:`w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`#`,e.id]}),(0,w.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.title}),(0,w.jsx)(`span`,{className:`w-10 shrink-0 text-right text-[11px] text-muted-foreground`,children:e.assignee??`—`})]},e.id))}),(0,w.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground`,children:[(0,w.jsx)(_,{className:`h-6`}),(0,w.jsx)(`span`,{className:`truncate`,"data-tracker-flash":``,children:N})]})]}),(0,w.jsx)(r,{...H.props,shortcut:!1,open:S,onOpenChange:e=>{A(e),e||H.reset()}})]})}var N=i(`tracker.keymap`);function P(){return(0,w.jsx)(o,{store:N,layers:n()??void 0,children:(0,w.jsx)(M,{})})}var F=`import { useMemo, useRef, useState, type KeyboardEvent } from "react"
import { CommandButton, KeyboardProvider, localStorageKeymapStore, PendingChord, ShortcutsEditor, useCommandPalette, useCommands, useContextKey, useContextKeys, useKeymap, useRunCommand, type CommandSpec, type KeybindingRule } from "@kitora/keyboard"
import { CommandPalette, useKeyboardLayerSource } from "@kitora/overlay"
import { cn } from "@kitora/ui/utils"

// VS Code's Keyboard Shortcuts page as a component, over a small issue
// tracker on the same engine: search by text or by pressed keys, record a key
// or a chord (a conflict is named before you save), a second binding, remove,
// reset, the when editor, export and import. Edits go to the user layer only,
// as VS Code's keybindings.json rules, and persist in localStorage; a key you
// record works in the app below at once, and its buttons' tooltips follow.

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
  { key: "Mod+K", command: "app.palette" },
  { key: "Mod+J Mod+S", command: "app.shortcuts" },
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
  const [paletteOpen, setPaletteOpen] = useState(false)
  const editorRef = useRef<HTMLDivElement | null>(null)
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
    "app.shortcuts": { title: "Open keyboard shortcuts editor", category: "General", keywords: ["keybindings"], run: () => editorRef.current?.scrollIntoView({ block: "nearest" }) },
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

  const palette = useCommandPalette()

  return (
    <div className="flex flex-col gap-3">
      <div ref={editorRef}>
        <ShortcutsEditor /> {/* edits only the user layer; defaults stay untouched */}
      </div>
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
          aria-activedescendant={active ? \`editor-issue-\${active.id}\` : undefined}
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
              id={\`editor-issue-\${issue.id}\`}
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

// Opt-in persistence of the user layer.
const keymapStore = localStorageKeymapStore("tracker.keymap")

export function ShortcutsEditorApp() {
  const layers = useKeyboardLayerSource() // the palette's overlay shadows the page's keys while open
  return (
    <KeyboardProvider store={keymapStore} layers={layers ?? undefined}>
      <Tracker />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>y(()=>import(`./shortcuts-editor-Dw0-SIJd.js`),[]));var I=[{key:`Alt+Shift+A`,command:`issue.assignMe`,when:`scope.keymap`},{key:`i`,command:`-issue.assignMe`}];function L(){let e=a(),[t,n]=(0,C.useState)(`—`),r=f(e=>e.keymap.exportUser().length);s({"issue.assignMe":{title:`Assign to me`,category:`Issue`,run:()=>n(`Assigned to you`)},"issue.archive":{title:`Archive issue`,category:`Issue`,run:()=>n(`Archived`)}}),c(`default`,[{key:`i`,command:`issue.assignMe`,when:`scope.keymap`},{key:`e`,command:`issue.archive`,when:`scope.keymap`}]);let i=`h-7 rounded-md border bg-background px-2 text-[12px] font-medium hover:bg-muted`;return(0,w.jsxs)(`div`,{tabIndex:0,"data-kb-scope":`keymap`,className:`flex flex-col gap-2 rounded-md border p-3 text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-ring/40`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,w.jsx)(`button`,{type:`button`,className:i,onClick:()=>e.keymap.importUser(I),children:`Apply the user keymap`}),(0,w.jsx)(`button`,{type:`button`,className:i,onClick:()=>e.keymap.importUser([]),children:`Reset to defaults`}),(0,w.jsxs)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[r,` user rules`]})]}),(0,w.jsxs)(`p`,{className:`flex flex-wrap items-center gap-1.5 text-[12px]`,children:[`Assign to me `,(0,w.jsx)(m,{command:`issue.assignMe`}),` · Archive issue `,(0,w.jsx)(m,{command:`issue.archive`}),(0,w.jsxs)(`span`,{className:`text-muted-foreground`,children:[`· Click here and press a key. Last run: `,(0,w.jsx)(`span`,{className:`font-mono text-foreground`,children:t})]})]})]})}function R(){return(0,w.jsx)(o,{children:(0,w.jsx)(L,{})})}var z=`import { useState } from "react"
import { KeyboardProvider, KeyHint, useCommands, useKeyboard, useKeyboardValue, useKeymap, type KeybindingRule } from "@kitora/keyboard"

// The user layer as data. Every edit the shortcuts editor makes is a rule in
// VS Code's keybindings.json shape: rebinding adds a rule for the new key and
// a removal ("-command") for the default. Apply such a keymap from code (a
// settings sync, a team preset) with keymap.importUser; [] resets to defaults.
// The rules are scoped to this card (\`data-kb-scope="keymap"\`).

const USER_KEYMAP: readonly KeybindingRule[] = [
  { key: "Alt+Shift+A", command: "issue.assignMe", when: "scope.keymap" }, // rebinding adds a rule…
  { key: "i", command: "-issue.assignMe" }, // …and removes the default
]

function Issues() {
  const keyboard = useKeyboard()
  const [last, setLast] = useState("—")
  const userRules = useKeyboardValue((kb) => kb.keymap.exportUser().length)
  useCommands({
    "issue.assignMe": { title: "Assign to me", category: "Issue", run: () => setLast("Assigned to you") },
    "issue.archive": { title: "Archive issue", category: "Issue", run: () => setLast("Archived") },
  })
  useKeymap("default", [
    { key: "i", command: "issue.assignMe", when: "scope.keymap" },
    { key: "e", command: "issue.archive", when: "scope.keymap" },
  ])
  const button = "h-7 rounded-md border bg-background px-2 text-[12px] font-medium hover:bg-muted"
  return (
    <div tabIndex={0} data-kb-scope="keymap" className="flex flex-col gap-2 rounded-md border p-3 text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-ring/40">
      <div className="flex flex-wrap items-center gap-1.5">
        <button type="button" className={button} onClick={() => keyboard.keymap.importUser(USER_KEYMAP)}>
          Apply the user keymap
        </button>
        <button type="button" className={button} onClick={() => keyboard.keymap.importUser([])}>
          Reset to defaults
        </button>
        <span className="text-[12px] text-muted-foreground tabular-nums">{userRules} user rules</span>
      </div>
      <p className="flex flex-wrap items-center gap-1.5 text-[12px]">
        Assign to me <KeyHint command="issue.assignMe" /> · Archive issue <KeyHint command="issue.archive" />
        <span className="text-muted-foreground">
          · Click here and press a key. Last run: <span className="font-mono text-foreground">{last}</span>
        </span>
      </p>
    </div>
  )
}

export function UserKeymap() {
  return (
    <KeyboardProvider>
      <Issues />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>y(()=>import(`./user-keymap-BZutGZOd.js`),[]));function B(){return(0,w.jsxs)(`div`,{children:[(0,w.jsx)(t,{title:`Shortcuts editor`,children:`VS Code's Keyboard Shortcuts page as a component: every command with its keys, when-clause and source. Double-click a row (or select it and press Enter) to record a new key or a chord; a conflict is named before you save. Your changes live in the user layer only.`}),(0,w.jsx)(S,{n:1,title:`Edit every binding, then try it`,blurb:`Search by text or press Record keys and type a shortcut. ↑ ↓ move between rows, Enter records, Delete removes. A key you record works in the app below at once, and the toolbar's tooltips follow it.`,code:F,children:(0,w.jsx)(P,{})}),(0,w.jsx)(S,{n:2,title:`A user keymap as data`,blurb:`What the editor writes: a rule for the new key plus a removal of the default. Apply one from code, or reset to the defaults with an empty list.`,code:z,children:(0,w.jsx)(R,{})})]})}export{B as component};