import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{t as n}from"./provider-Chu9Vnk7.js";import{a as r,d as i,f as a}from"./hooks-B0tbzz3E.js";import{i as o}from"./kbd-CZ2z7L7Q.js";import{a as s,i as c}from"./hints-CWOTt5cv.js";import{Ec as l,Uc as u,_i as d,zc as f}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as p}from"./example-B67lLz1F.js";var m=e(u(),1),h=f();function g({timeout:e}){let[t,n]=(0,m.useState)(`—`);return r({"demo.tag":{title:`Tag (t)`,run:()=>n(`t → Tag at ${new Date().toLocaleTimeString()}`)},"demo.today":{title:`Jump to today (t t)`,run:()=>n(`t t → Today at ${new Date().toLocaleTimeString()}`)}}),i(`default`,[{key:`t`,command:`demo.tag`,when:`scope.timeout`},{key:`t t`,command:`demo.today`,when:`scope.timeout`}]),(0,h.jsxs)(`div`,{tabIndex:0,"data-kb-scope":`timeout`,"data-timeout-demo":``,className:`flex flex-col gap-2 rounded-md border p-3 text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-ring/40`,children:[(0,h.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Click here, then press t once (fires after `,e,` ms) or t t quickly.`]}),(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsx)(c,{}),(0,h.jsx)(`span`,{className:`font-mono text-[12px]`,"data-timeout-fired":``,children:t})]})]})}function _(){let[e,t]=(0,m.useState)(800);return(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsxs)(`label`,{className:`flex items-center gap-2 text-[12px]`,children:[`Sequence timeout`,(0,h.jsx)(`input`,{type:`range`,min:300,max:2e3,step:100,value:e,onChange:e=>t(Number(e.target.value)),"aria-label":`Sequence timeout in milliseconds`}),(0,h.jsxs)(`span`,{className:`font-mono tabular-nums`,children:[e,` ms`]})]}),(0,h.jsx)(n,{options:{sequenceTimeout:e},children:(0,h.jsx)(g,{timeout:e})},e)]})}var v=`import { useState } from "react"
import { KeyboardProvider, PendingChord, useCommands, useKeymap } from "@kitora/keyboard"

// A prefix that is also a binding of its own: \`t\` waits for the sequence
// timeout, then fires; \`t t\` within the timeout fires at once. Its own engine
// with its own timeout (re-created when the slider moves), and both rules are
// scoped to the card (\`data-kb-scope="timeout"\`), so they never fight a key
// bound elsewhere on the page.

function Timeouts({ timeout }: { readonly timeout: number }) {
  const [fired, setFired] = useState("—")
  useCommands({
    "demo.tag": { title: "Tag (t)", run: () => setFired(\`t → Tag at \${new Date().toLocaleTimeString()}\`) },
    "demo.today": { title: "Jump to today (t t)", run: () => setFired(\`t t → Today at \${new Date().toLocaleTimeString()}\`) },
  })
  useKeymap("default", [
    { key: "t", command: "demo.tag", when: "scope.timeout" }, // a prefix that is a binding too…
    { key: "t t", command: "demo.today", when: "scope.timeout" }, // …waits, then fires on timeout or on another key
  ])
  return (
    <div tabIndex={0} data-kb-scope="timeout" data-timeout-demo="" className="flex flex-col gap-2 rounded-md border p-3 text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-ring/40">
      <p className="text-[12px] text-muted-foreground">Click here, then press t once (fires after {timeout} ms) or t t quickly.</p>
      <div className="flex items-center gap-3">
        <PendingChord />
        <span className="font-mono text-[12px]" data-timeout-fired="">
          {fired}
        </span>
      </div>
    </div>
  )
}

export function ChordTimeout() {
  const [timeout, setTimeoutMs] = useState(800)
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2 text-[12px]">
        Sequence timeout
        <input type="range" min={300} max={2000} step={100} value={timeout} onChange={(event) => setTimeoutMs(Number(event.target.value))} aria-label="Sequence timeout in milliseconds" />
        <span className="font-mono tabular-nums">{timeout} ms</span>
      </label>
      {/* the timeout is an engine option: a new value builds a new engine */}
      <KeyboardProvider key={timeout} options={{ sequenceTimeout: timeout }}>
        <Timeouts timeout={timeout} />
      </KeyboardProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>l(()=>import(`./chord-timeout-Drz60D4Y.js`),[]));var y=`you`,b=[`inbox`,`mine`,`backlog`,`done`],x={inbox:`Inbox`,mine:`My issues`,backlog:`Backlog`,done:`Done`},S=[{id:101,title:`Palette loses focus after closing a nested page`,assignee:y,status:`open`,backlog:!1},{id:102,title:`Record chords in the shortcuts editor`,assignee:`mira`,status:`open`,backlog:!1},{id:103,title:`AZERTY users cannot trigger Mod+/`,assignee:null,status:`open`,backlog:!1},{id:104,title:`Cheatsheet should hide keys that do nothing here`,assignee:y,status:`open`,backlog:!1},{id:108,title:`Vim-style g g jumps to the top`,assignee:null,status:`open`,backlog:!0},{id:109,title:`Plugin keymaps with weights`,assignee:y,status:`open`,backlog:!0},{id:110,title:`IME composition never fires a shortcut`,assignee:y,status:`closed`,backlog:!1}];function C(e,t){return e.filter(e=>t===`done`?e.status===`closed`:e.status===`open`&&(t===`inbox`?!e.backlog:t===`mine`?e.assignee===y:e.backlog))}var w=[{key:`g i`,command:`nav.inbox`},{key:`g m`,command:`nav.mine`},{key:`g b`,command:`nav.backlog`},{key:`g d`,command:`nav.done`},{key:`g g`,command:`list.first`},{key:`j`,command:`list.next`},{key:`k`,command:`list.prev`},{key:`Mod+J Mod+D`,command:`view.density`},{key:`Mod+J Mod+S`,command:`app.shortcuts`}];function T(e){let t=e instanceof Element?e.closest(`[data-issue-id]`)?.getAttribute(`data-issue-id`):null;return t?Number(t):null}var E={ArrowDown:`list.next`,ArrowUp:`list.prev`,Home:`list.first`},D=e=>e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey?void 0:E[e.key];function O(){let[e,t]=(0,m.useState)(`inbox`),[n,o]=(0,m.useState)(101),s=a(),[l,u]=(0,m.useState)(!1),[f,p]=(0,m.useState)(`Ready`),g=(0,m.useMemo)(()=>C(S,e),[e]),_=e=>{t(e),o(C(S,e)[0]?.id??null),p(`Opened ${x[e]}`)},v=e=>{let t=g[Math.max(0,Math.min(g.length-1,e(g.findIndex(e=>e.id===n))))];t&&o(t.id)};return r({"nav.inbox":{title:`Go to Inbox`,category:`Go to`,run:()=>_(`inbox`)},"nav.mine":{title:`Go to My issues`,category:`Go to`,run:()=>_(`mine`)},"nav.backlog":{title:`Go to Backlog`,category:`Go to`,run:()=>_(`backlog`)},"nav.done":{title:`Go to Done`,category:`Go to`,run:()=>_(`done`)},"list.first":{title:`First issue`,category:`List`,run:()=>v(()=>0)},"list.next":{title:`Next issue`,category:`List`,run:()=>v(e=>e+1)},"list.prev":{title:`Previous issue`,category:`List`,run:()=>v(e=>e-1)},"view.density":{title:`Toggle compact rows`,category:`View`,run:()=>u(e=>!e)},"app.shortcuts":{title:`Open keyboard shortcuts`,category:`General`,run:()=>p(`Opened keyboard shortcuts`)}}),i(`default`,w),(0,h.jsxs)(`div`,{className:`flex h-[300px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]`,"data-tracker":``,children:[(0,h.jsx)(`div`,{className:`flex h-9 shrink-0 items-center gap-1 border-b bg-muted/30 px-2`,children:b.map(t=>(0,h.jsx)(`button`,{type:`button`,onClick:()=>_(t),className:d(`h-7 rounded px-2 text-[12px]`,e===t?`bg-muted font-medium`:`text-muted-foreground hover:bg-muted/60`),children:x[t]},t))}),(0,h.jsx)(`ul`,{role:`listbox`,"aria-label":`Issues`,"aria-activedescendant":g.some(e=>e.id===n)?`chords-issue-${n}`:void 0,tabIndex:0,onClick:e=>{let t=T(e.target);t!==null&&o(t)},onKeyDown:e=>{let t=D(e);t&&(e.preventDefault(),s(t,`keyboard`))},className:`min-h-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset`,children:g.map(e=>(0,h.jsxs)(`li`,{id:`chords-issue-${e.id}`,role:`option`,"aria-selected":e.id===n,"data-issue-id":e.id,className:d(`flex items-center gap-2 border-b border-border/50 px-2`,l?`h-6`:`h-8`,e.id===n&&`bg-primary/10 shadow-[inset_2px_0_0] shadow-primary`),children:[(0,h.jsxs)(`span`,{className:`w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`#`,e.id]}),(0,h.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.title}),(0,h.jsx)(`span`,{className:`w-10 shrink-0 text-right text-[11px] text-muted-foreground`,children:e.assignee??`—`})]},e.id))}),(0,h.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground`,children:[(0,h.jsx)(c,{className:`h-6`}),(0,h.jsx)(`span`,{className:`truncate`,"data-tracker-flash":``,children:f})]})]})}function k(){return(0,h.jsxs)(`div`,{className:`flex min-h-36 flex-col items-start gap-2 rounded-md border border-dashed p-2`,children:[(0,h.jsx)(c,{}),` `,(0,h.jsx)(s,{}),` `,(0,h.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Press `,(0,h.jsx)(o,{binding:`g`}),` or `,(0,h.jsx)(o,{binding:`Mod+J`}),` and wait: the popup lists what comes next.`]})]})}function A(){return(0,h.jsx)(n,{children:(0,h.jsxs)(`div`,{className:`grid gap-3 lg:grid-cols-[1fr_18rem]`,children:[(0,h.jsx)(O,{}),(0,h.jsx)(k,{})]})})}var j=`import { useMemo, useState, type KeyboardEvent } from "react"
import { KeyboardProvider, PendingChord, ProviderKbd, useCommands, useKeymap, useRunCommand, WhichKey, type KeybindingRule } from "@kitora/keyboard"
import { cn } from "@kitora/ui/utils"

// Sequences and chords: vim-style letters in a row (g i, g g) and VS Code-style
// modifier chords (Mod+J Mod+D). While one is under way the key is consumed,
// PendingChord shows what was pressed with a bar that runs out, and WhichKey
// lists the keys that can finish it; a wrong key resets and runs on its own.

type View = "inbox" | "mine" | "backlog" | "done"

interface Issue {
  readonly id: number
  readonly title: string
  readonly assignee: string | null
  readonly status: "open" | "closed"
  readonly backlog: boolean
}

const ME = "you"
const VIEW_IDS: readonly View[] = ["inbox", "mine", "backlog", "done"]
const VIEWS: Readonly<Record<View, string>> = { inbox: "Inbox", mine: "My issues", backlog: "Backlog", done: "Done" }
const ISSUES: readonly Issue[] = [
  { id: 101, title: "Palette loses focus after closing a nested page", assignee: ME, status: "open", backlog: false },
  { id: 102, title: "Record chords in the shortcuts editor", assignee: "mira", status: "open", backlog: false },
  { id: 103, title: "AZERTY users cannot trigger Mod+/", assignee: null, status: "open", backlog: false },
  { id: 104, title: "Cheatsheet should hide keys that do nothing here", assignee: ME, status: "open", backlog: false },
  { id: 108, title: "Vim-style g g jumps to the top", assignee: null, status: "open", backlog: true },
  { id: 109, title: "Plugin keymaps with weights", assignee: ME, status: "open", backlog: true },
  { id: 110, title: "IME composition never fires a shortcut", assignee: ME, status: "closed", backlog: false },
]

function issuesIn(issues: readonly Issue[], view: View): Issue[] {
  return issues.filter((issue) =>
    view === "done" ? issue.status === "closed" : issue.status === "open" && (view === "inbox" ? !issue.backlog : view === "mine" ? issue.assignee === ME : issue.backlog),
  )
}

const KEYS: readonly KeybindingRule[] = [
  { key: "g i", command: "nav.inbox" }, // letters in a row
  { key: "g m", command: "nav.mine" },
  { key: "g b", command: "nav.backlog" },
  { key: "g d", command: "nav.done" },
  { key: "g g", command: "list.first" },
  { key: "j", command: "list.next" },
  { key: "k", command: "list.prev" },
  { key: "Mod+J Mod+D", command: "view.density" }, // a modifier chord
  { key: "Mod+J Mod+S", command: "app.shortcuts" },
]

// The issue listbox keeps focus on itself (aria-activedescendant), so its rows
// take no focus and no handlers: one click handler on the listbox finds the
// row through \`data-issue-id\`, and its own key handler runs the list commands
// (j / k and g g work from anywhere; the arrows and Home work while the list has focus).
function issueIdAt(target: EventTarget): number | null {
  const id = target instanceof Element ? target.closest("[data-issue-id]")?.getAttribute("data-issue-id") : null
  return id ? Number(id) : null
}
const LISTBOX_KEYS: Readonly<Record<string, string>> = { ArrowDown: "list.next", ArrowUp: "list.prev", Home: "list.first" }
const listboxCommand = (event: KeyboardEvent<HTMLElement>): string | undefined =>
  event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ? undefined : LISTBOX_KEYS[event.key]

function Tracker() {
  const [view, setView] = useState<View>("inbox")
  const [activeId, setActiveId] = useState<number | null>(101)
  const runCommand = useRunCommand()
  const [compact, setCompact] = useState(false)
  const [flash, setFlash] = useState("Ready")
  const visible = useMemo(() => issuesIn(ISSUES, view), [view])

  const go = (next: View) => {
    setView(next)
    setActiveId(issuesIn(ISSUES, next)[0]?.id ?? null)
    setFlash(\`Opened \${VIEWS[next]}\`)
  }
  const move = (to: (index: number) => number) => {
    const next = visible[Math.max(0, Math.min(visible.length - 1, to(visible.findIndex((issue) => issue.id === activeId))))]
    if (next) setActiveId(next.id)
  }

  useCommands({
    "nav.inbox": { title: "Go to Inbox", category: "Go to", run: () => go("inbox") },
    "nav.mine": { title: "Go to My issues", category: "Go to", run: () => go("mine") },
    "nav.backlog": { title: "Go to Backlog", category: "Go to", run: () => go("backlog") },
    "nav.done": { title: "Go to Done", category: "Go to", run: () => go("done") },
    "list.first": { title: "First issue", category: "List", run: () => move(() => 0) },
    "list.next": { title: "Next issue", category: "List", run: () => move((at) => at + 1) },
    "list.prev": { title: "Previous issue", category: "List", run: () => move((at) => at - 1) },
    "view.density": { title: "Toggle compact rows", category: "View", run: () => setCompact((on) => !on) },
    "app.shortcuts": { title: "Open keyboard shortcuts", category: "General", run: () => setFlash("Opened keyboard shortcuts") },
  })
  useKeymap("default", KEYS)

  return (
    <div className="flex h-[300px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]" data-tracker="">
      <div className="flex h-9 shrink-0 items-center gap-1 border-b bg-muted/30 px-2">
        {VIEW_IDS.map((id) => (
          <button key={id} type="button" onClick={() => go(id)} className={cn("h-7 rounded px-2 text-[12px]", view === id ? "bg-muted font-medium" : "text-muted-foreground hover:bg-muted/60")}>
            {VIEWS[id]}
          </button>
        ))}
      </div>
      <ul
        role="listbox"
        aria-label="Issues"
        aria-activedescendant={visible.some((issue) => issue.id === activeId) ? \`chords-issue-\${activeId}\` : undefined}
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
        {visible.map((issue) => (
          <li
            key={issue.id}
            id={\`chords-issue-\${issue.id}\`}
            role="option"
            aria-selected={issue.id === activeId}
            data-issue-id={issue.id}
            className={cn("flex items-center gap-2 border-b border-border/50 px-2", compact ? "h-6" : "h-8", issue.id === activeId && "bg-primary/10 shadow-[inset_2px_0_0] shadow-primary")}
          >
            <span className="w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums">#{issue.id}</span>
            <span className="min-w-0 flex-1 truncate">{issue.title}</span>
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

/** The which-key slot: a fixed-height box so the page does not jump while a sequence is pending. */
function WhichKeySlot() {
  return (
    <div className="flex min-h-36 flex-col items-start gap-2 rounded-md border border-dashed p-2">
      <PendingChord /> {/* "g … waiting for the next key" */}
      <WhichKey /> {/* the keys that complete the sequence and what each runs */}
      <p className="text-[12px] text-muted-foreground">
        Press <ProviderKbd binding="g" /> or <ProviderKbd binding="Mod+J" /> and wait: the popup lists what comes next.
      </p>
    </div>
  )
}

export function ChordsApp() {
  return (
    <KeyboardProvider>
      <div className="grid gap-3 lg:grid-cols-[1fr_18rem]">
        <Tracker />
        <WhichKeySlot />
      </div>
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>l(()=>import(`./chords-app-BOnA5dep.js`),[]));function M(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(t,{title:`Chords and sequences`,children:`A binding can be several presses in a row. While one is under way the key is consumed, the indicator shows what was pressed and which-key lists the ways to finish; a wrong key resets and is dispatched on its own.`}),(0,h.jsx)(p,{n:1,title:`Sequences in the app`,blurb:`g i, g m, g b, g d switch views; g g jumps to the first issue; Mod+J Mod+D toggles compact rows; Mod+J Mod+S runs Open keyboard shortcuts.`,code:j,children:(0,h.jsx)(A,{})}),(0,h.jsx)(p,{n:2,title:`Timeout and a prefix that fires`,blurb:`A second engine with its own timeout. t alone waits for the timeout, then fires; t t fires at once.`,code:v,children:(0,h.jsx)(_,{})})]})}export{M as component};