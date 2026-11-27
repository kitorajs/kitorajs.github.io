import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./cheatsheet-SysYmzKC.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./keyboard-layers-C6YOI-El.js";import{t as i}from"./command-palette-C8vgjOP2.js";import{d as a,f as o,p as s,r as ee,s as c,t as l}from"./provider-Chu9Vnk7.js";import{S as u,b as d,u as f,y as p}from"./stroke-Ds8jL2d2.js";import{n as m}from"./a11y-BTeMNu_j.js";import{a as te,d as ne,f as re,o as ie,s as ae}from"./hooks-B0tbzz3E.js";import{n as h,t as g}from"./palette-UxrbKfhU.js";import{i as _,r as oe,t as v}from"./kbd-CZ2z7L7Q.js";import{i as se,n as y,r as b}from"./hints-CWOTt5cv.js";import{Ec as x,Uc as S,_i as C,jc as w,zc as T}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as E}from"./example-B67lLz1F.js";var D=e(S(),1),O=T(),k=`Mod+Shift+L`;function A(){let[e]=(0,D.useState)(()=>s({platform:typeof navigator>`u`?`win`:f()})),[t,n]=(0,D.useState)(!1),[r,i]=(0,D.useState)(k);return(0,D.useEffect)(()=>{i(p(d(k).map(t=>u(t,e.platform))));let t=e.register({"demo.toggle":{title:`Toggle the lamp`,run:()=>n(e=>!e)}}),r=e.bind(`default`,[{key:k,command:`demo.toggle`}]),a=c(e);return()=>{a.detach(),r.dispose(),t()}},[e]),(0,O.jsxs)(`p`,{className:`text-[13px]`,children:[`Press `,(0,O.jsx)(`kbd`,{className:`rounded border px-1 font-mono text-[12px]`,children:r}),`: the lamp is`,` `,(0,O.jsx)(`span`,{"data-testid":`kb-lamp`,className:t?`font-semibold text-amber-700 dark:text-amber-400`:`text-muted-foreground`,children:t?`on`:`off`}),`.`]})}var j=`import { useEffect, useState } from "react"
import { attachKeyboard, createKeyboard, detectPlatform, formatBinding, parseBinding, resolveChord, type Keyboard } from "@kitora/keyboard"

// The smallest use: one engine, one listener for the whole document, no React
// provider. "Mod" resolves per platform (⌘ on macOS, Ctrl elsewhere).

const KEY = "Mod+Shift+L"

export function Lamp() {
  // The platform is read on the client; a server render assumes Windows.
  const [kb] = useState<Keyboard>(() => createKeyboard({ platform: typeof navigator === "undefined" ? "win" : detectPlatform() }))
  const [on, setOn] = useState(false)
  const [label, setLabel] = useState(KEY)
  useEffect(() => {
    setLabel(formatBinding(parseBinding(KEY).map((chord) => resolveChord(chord, kb.platform))))
    const unregister = kb.register({ "demo.toggle": { title: "Toggle the lamp", run: () => setOn((value) => !value) } })
    const rules = kb.bind("default", [{ key: KEY, command: "demo.toggle" }])
    const attachment = attachKeyboard(kb) // one keydown + keyup listener per document
    return () => {
      attachment.detach()
      rules.dispose()
      unregister()
    }
  }, [kb])
  return (
    <p className="text-[13px]">
      Press <kbd className="rounded border px-1 font-mono text-[12px]">{label}</kbd>: the lamp is{" "}
      <span data-testid="kb-lamp" className={on ? "font-semibold text-amber-700 dark:text-amber-400" : "text-muted-foreground"}>
        {on ? "on" : "off"}
      </span>
      .
    </p>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>x(()=>import(`./lamp-CX0x1ox9.js`),[]));var M=`you`,N=[{id:`inbox`,label:`Inbox`},{id:`mine`,label:`My issues`},{id:`backlog`,label:`Backlog`},{id:`done`,label:`Done`}],P=[{id:101,title:`Palette loses focus after closing a nested page`,assignee:M,starred:!0,status:`open`,backlog:!1},{id:102,title:`Record chords in the shortcuts editor`,assignee:`mira`,starred:!1,status:`open`,backlog:!1},{id:103,title:`AZERTY users cannot trigger Mod+/`,assignee:null,starred:!1,status:`open`,backlog:!1},{id:104,title:`Cheatsheet should hide keys that do nothing here`,assignee:M,starred:!1,status:`open`,backlog:!1},{id:105,title:`Export keybindings as JSON`,assignee:`jonas`,starred:!1,status:`open`,backlog:!1},{id:106,title:`Hold ⌘ to reveal toolbar shortcuts`,assignee:null,starred:!0,status:`open`,backlog:!1},{id:107,title:`Screen readers announce aria-keyshortcuts`,assignee:`mira`,starred:!1,status:`open`,backlog:!1},{id:108,title:`Vim-style g g jumps to the top`,assignee:null,starred:!1,status:`open`,backlog:!0},{id:109,title:`Plugin keymaps with weights`,assignee:M,starred:!1,status:`open`,backlog:!0},{id:110,title:`IME composition never fires a shortcut`,assignee:M,starred:!1,status:`closed`,backlog:!1}];function F(e,t,n){let r=n.toLowerCase().split(/\s+/).filter(Boolean);return e.filter(e=>{if(e.status===`archived`)return!1;let n=e.status===`open`;return(t===`inbox`?n&&!e.backlog:t===`mine`?n&&e.assignee===M:t===`backlog`?n&&e.backlog:e.status===`closed`)&&r.every(t=>`#${e.id} ${e.title}`.toLowerCase().includes(t))})}var I=`Select an issue first`,ce=[{key:`Mod+K`,command:`app.palette`},{key:`Mod+Shift+P`,command:`app.palette`},{key:`[Shift]+?`,command:`app.cheatsheet`},{key:`/`,command:`app.search`},{key:`g i`,command:`nav.inbox`},{key:`g m`,command:`nav.mine`},{key:`g b`,command:`nav.backlog`},{key:`g d`,command:`nav.done`},{key:`g g`,command:`list.first`},{key:`j`,command:`list.next`},{key:`ArrowDown`,command:`list.next`,when:`listFocus`},{key:`k`,command:`list.prev`},{key:`ArrowUp`,command:`list.prev`,when:`listFocus`},{key:`x`,command:`list.toggleSelect`},{key:`Escape`,command:`list.clear`,when:`selection.count > 0`},{key:`c`,command:`issue.new`},{key:`i`,command:`issue.assignMe`},{key:`s`,command:`issue.star`},{key:`e`,command:`issue.archive`},{key:`Mod+Enter`,command:`issue.close`},{key:`Mod+Shift+C`,command:`issue.copyLink`},{key:`Mod+B`,command:`view.sidebar`},{key:`Mod+J Mod+D`,command:`view.density`}],le=e=>({name:`github`,weight:10,commands:{"github.openPr":{title:`Open pull request`,category:`GitHub`,run:()=>e(`Opened the linked pull request`)},"github.copyPermalink":{title:`Copy permalink`,category:`GitHub`,run:()=>e(`Copied a GitHub permalink`)}},keybindings:[{key:`Alt+P`,command:`github.openPr`},{key:`Mod+Shift+C`,command:`github.copyPermalink`}]}),L=a(`tracker.keymap`),R=h(`tracker.recent`);function z(e){let t=e instanceof Element?e.closest(`[data-issue-id]`)?.getAttribute(`data-issue-id`):null;return t?Number(t):null}var B={ArrowDown:`list.next`,ArrowUp:`list.prev`},V=e=>e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey?void 0:B[e.key];function H(){let e=ee(),[n,r]=(0,D.useState)(P),[a,s]=(0,D.useState)(`inbox`),[c,l]=(0,D.useState)(``),[u,d]=(0,D.useState)(101),f=re(),[p,h]=(0,D.useState)([]),[v,b]=(0,D.useState)(!0),[x,S]=(0,D.useState)(!1),[w,T]=(0,D.useState)(!1),[E,k]=(0,D.useState)(!1),[A,j]=(0,D.useState)(!1),[L,B]=(0,D.useState)(`Ready`),H=(0,D.useRef)(null),W=(0,D.useMemo)(()=>F(n,a,c),[n,a,c]),G=W.find(e=>e.id===u)??null,K=new Set(p.length>0?p:G?[G.id]:[]),q=e=>(B(e),e),J=(e,t)=>(r(t=>t.map(t=>K.has(t.id)?e(t):t)),q(t)),Y=e=>{let t=W.findIndex(e=>e.id===u),n=W[Math.max(0,Math.min(W.length-1,e(t,W.length)))];if(n)return d(n.id),`#${n.id} ${n.title}`},X=e=>(s(e),h([]),d(F(n,e,c)[0]?.id??null),q(`Opened ${N.find(t=>t.id===e)?.label??e}`)),Z=(e,t)=>({title:e,category:`Issue`,enabled:`issue.selected || selection.count > 0`,disabledReason:I,run:t});te({"app.palette":{title:`Show command palette`,category:`General`,keywords:[`commands`],run:()=>k(!0)},"app.cheatsheet":{title:`Show keyboard shortcuts`,category:`General`,keywords:[`help`,`keys`],run:()=>j(!0)},"app.search":{title:`Search issues`,category:`General`,run:()=>H.current?.focus()},"nav.inbox":{title:`Go to Inbox`,category:`Go to`,run:()=>X(`inbox`)},"nav.mine":{title:`Go to My issues`,category:`Go to`,run:()=>X(`mine`)},"nav.backlog":{title:`Go to Backlog`,category:`Go to`,run:()=>X(`backlog`)},"nav.done":{title:`Go to Done`,category:`Go to`,run:()=>X(`done`)},"list.first":{title:`First issue`,category:`List`,run:()=>Y(()=>0)},"list.next":{title:`Next issue`,category:`List`,run:()=>Y(e=>e+1)},"list.prev":{title:`Previous issue`,category:`List`,run:()=>Y(e=>e<0?0:e-1)},"list.toggleSelect":{title:`Select issue`,category:`List`,enabled:`issue.selected`,disabledReason:I,run:()=>h(e=>G===null?e:e.includes(G.id)?e.filter(e=>e!==G.id):[...e,G.id])},"list.clear":{title:`Clear selection`,category:`List`,enabled:`selection.count > 0`,disabledReason:`Nothing is selected`,run:()=>h([])},"issue.new":{title:`New issue`,category:`Issue`,run:()=>{let e=Math.max(...n.map(e=>e.id))+1;return r(t=>[{id:e,title:`Untitled issue`,assignee:null,starred:!1,status:`open`,backlog:!1},...t]),s(`inbox`),d(e),q(`Created #${e}`)}},"issue.assignMe":Z(`Assign to me`,()=>J(e=>({...e,assignee:M}),`Assigned to you`)),"issue.star":Z(`Star issue`,()=>J(e=>({...e,starred:!e.starred}),`Star toggled`)),"issue.archive":Z(`Archive issue`,()=>J(e=>({...e,status:`archived`}),`Archived ${K.size}`)),"issue.close":Z(`Close issue`,()=>J(e=>({...e,status:e.status===`closed`?`open`:`closed`}),`Status changed`)),"issue.copyLink":Z(`Copy issue link`,()=>q(`Copied https://tracker.example/issues/${G?.id??``}`)),"view.sidebar":{title:`Toggle sidebar`,category:`View`,run:()=>b(e=>!e)},"view.density":{title:`Toggle compact rows`,category:`View`,run:()=>S(e=>!e)}}),ne(`default`,ce),ae({"issue.selected":G!==null,"selection.count":p.length,view:a}),ie(`listFocus`,w);let Q=(0,D.useRef)(q);Q.current=q,(0,D.useEffect)(()=>e.plugin(le(e=>Q.current(e))),[e]),(0,D.useEffect)(()=>o(e,`tracker.characterKeys`),[e]),m();let $=g({providers:[{id:`issues`,title:`Go to issue…`,prefix:`#`,placeholder:`Issue number or title…`,items:e=>n.filter(t=>t.status!==`archived`&&`${t.id} ${t.title}`.toLowerCase().includes(e.trim().toLowerCase())).map(e=>({id:String(e.id),label:`#${e.id} ${e.title}`,run:()=>{s(e.status===`closed`?`done`:e.backlog?`backlog`:`inbox`),l(``),d(e.id),q(`Jumped to #${e.id}`)}}))}],recents:R});return(0,O.jsxs)(`div`,{className:C(`flex h-[340px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]`),"data-tracker":``,children:[(0,O.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2`,children:[(0,O.jsx)(`input`,{ref:H,type:`search`,value:c,onChange:e=>l(e.target.value),placeholder:`Search issues  /`,"aria-label":`Search issues`,className:`h-7 w-44 rounded-md border bg-background px-2 text-[12px]`}),(0,O.jsx)(U,{command:`issue.new`,children:`New`}),(0,O.jsx)(U,{command:`issue.assignMe`,children:`Assign me`}),(0,O.jsx)(U,{command:`issue.archive`,children:`Archive`}),(0,O.jsx)(`span`,{className:`ml-auto`}),(0,O.jsx)(U,{command:`view.sidebar`,children:`Sidebar`}),(0,O.jsx)(U,{command:`app.palette`,children:`Commands`})]}),(0,O.jsxs)(`div`,{className:`flex min-h-0 flex-1`,children:[v?(0,O.jsx)(`nav`,{"aria-label":`Views`,className:`w-40 shrink-0 border-r p-1.5`,"data-kb-region":`sidebar`,children:N.map(e=>(0,O.jsxs)(`div`,{className:C(`flex h-7 items-center justify-between rounded px-2`,a===e.id?`bg-muted font-medium`:`text-muted-foreground`),children:[(0,O.jsx)(`span`,{children:e.label}),(0,O.jsx)(oe,{command:`nav.${e.id}`,className:`opacity-70`})]},e.id))}):null,(0,O.jsxs)(`div`,{role:`listbox`,"aria-label":`Issues`,"aria-activedescendant":G?`issue-${G.id}`:void 0,tabIndex:0,onFocus:()=>T(!0),onBlur:()=>T(!1),onClick:e=>{let t=z(e.target);t!==null&&d(t)},onKeyDown:e=>{let t=V(e);t&&(e.preventDefault(),f(t,`keyboard`))},className:`min-w-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset`,children:[W.length===0?(0,O.jsx)(`p`,{className:`p-4 text-center text-muted-foreground`,children:`No issues here.`}):null,W.map(e=>(0,O.jsxs)(`div`,{id:`issue-${e.id}`,role:`option`,"aria-selected":e.id===u,"data-issue-id":e.id,className:C(`flex items-center gap-2 border-b border-border/50 px-2`,x?`h-6`:`h-8`,e.id===u&&`bg-primary/10 shadow-[inset_2px_0_0] shadow-primary`),children:[(0,O.jsx)(`span`,{className:C(`size-3 shrink-0 rounded-sm border`,p.includes(e.id)?`border-primary bg-primary`:`border-border`),"aria-hidden":!0}),(0,O.jsxs)(`span`,{className:`w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`#`,e.id]}),(0,O.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.title}),e.starred?(0,O.jsx)(`span`,{className:`text-amber-500`,children:`★`}):null,(0,O.jsx)(`span`,{className:`w-10 shrink-0 text-right text-[11px] text-muted-foreground`,children:e.assignee??`—`})]},e.id))]})]}),(0,O.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground`,children:[(0,O.jsx)(se,{className:`h-6`}),(0,O.jsx)(`span`,{className:`truncate`,"data-tracker-flash":``,children:L}),(0,O.jsxs)(`span`,{className:`ml-auto inline-flex items-center gap-1`,children:[(0,O.jsx)(_,{binding:`?`}),` shortcuts`]})]}),(0,O.jsx)(i,{...$.props,shortcut:!1,open:E,onOpenChange:e=>{k(e),e||$.reset()}}),(0,O.jsx)(t,{open:A,onOpenChange:j}),(0,O.jsx)(y,{})]})}function U({command:e,children:t}){return(0,O.jsxs)(`span`,{className:`relative inline-flex`,children:[(0,O.jsx)(v,{command:e,showKey:!1,className:`h-7`,children:t}),(0,O.jsx)(b,{command:e})]})}function W(){return(0,O.jsx)(l,{store:L,layers:r()??void 0,children:(0,O.jsx)(H,{})})}var G=`import { useEffect, useMemo, useRef, useState, type ReactNode, type KeyboardEvent } from "react"
import { Cheatsheet, CommandButton, HeldModifierPanel, KeyboardProvider, KeyHint, localStorageKeymapStore, localStorageRecentStore, ModifierHint, PendingChord, persistCharacterKeys, ProviderKbd, useAnnounceResults, useCommandPalette, useCommands, useContextKey, useContextKeys, useKeyboard, useKeymap, useRunCommand, type CommandSpec, type KeybindingRule, type KeyboardPlugin, type PaletteProvider } from "@kitora/keyboard"
import { CommandPalette, useKeyboardLayerSource } from "@kitora/overlay"
import { cn } from "@kitora/ui/utils"

// An issue tracker run entirely from the keyboard: commands in categories, a
// default keymap with chords, context keys from UI state, a plugin with its own
// layer, the registry-fed palette (with a "#" page for issues and recent
// commands first), the "?" cheatsheet, hold-Mod hints and spoken results.

type View = "inbox" | "mine" | "backlog" | "done"

interface Issue {
  readonly id: number
  readonly title: string
  readonly assignee: string | null
  readonly starred: boolean
  readonly status: "open" | "closed" | "archived"
  readonly backlog: boolean
}

const ME = "you"
const VIEWS: readonly { readonly id: View; readonly label: string }[] = [
  { id: "inbox", label: "Inbox" },
  { id: "mine", label: "My issues" },
  { id: "backlog", label: "Backlog" },
  { id: "done", label: "Done" },
]
const ISSUES: readonly Issue[] = [
  { id: 101, title: "Palette loses focus after closing a nested page", assignee: ME, starred: true, status: "open", backlog: false },
  { id: 102, title: "Record chords in the shortcuts editor", assignee: "mira", starred: false, status: "open", backlog: false },
  { id: 103, title: "AZERTY users cannot trigger Mod+/", assignee: null, starred: false, status: "open", backlog: false },
  { id: 104, title: "Cheatsheet should hide keys that do nothing here", assignee: ME, starred: false, status: "open", backlog: false },
  { id: 105, title: "Export keybindings as JSON", assignee: "jonas", starred: false, status: "open", backlog: false },
  { id: 106, title: "Hold ⌘ to reveal toolbar shortcuts", assignee: null, starred: true, status: "open", backlog: false },
  { id: 107, title: "Screen readers announce aria-keyshortcuts", assignee: "mira", starred: false, status: "open", backlog: false },
  { id: 108, title: "Vim-style g g jumps to the top", assignee: null, starred: false, status: "open", backlog: true },
  { id: 109, title: "Plugin keymaps with weights", assignee: ME, starred: false, status: "open", backlog: true },
  { id: 110, title: "IME composition never fires a shortcut", assignee: ME, starred: false, status: "closed", backlog: false },
]

function issuesIn(issues: readonly Issue[], view: View, query: string): Issue[] {
  const words = query.toLowerCase().split(/\\s+/).filter(Boolean)
  return issues.filter((issue) => {
    if (issue.status === "archived") return false
    const open = issue.status === "open"
    const inView = view === "inbox" ? open && !issue.backlog : view === "mine" ? open && issue.assignee === ME : view === "backlog" ? open && issue.backlog : issue.status === "closed"
    return inView && words.every((word) => \`#\${issue.id} \${issue.title}\`.toLowerCase().includes(word))
  })
}

const NEEDS_ISSUE = "Select an issue first"

// The default keymap as data, VS Code's keybindings.json shape.
const DEFAULT_KEYS: readonly KeybindingRule[] = [
  { key: "Mod+K", command: "app.palette" },
  { key: "Mod+Shift+P", command: "app.palette" },
  { key: "[Shift]+?", command: "app.cheatsheet" },
  { key: "/", command: "app.search" },
  { key: "g i", command: "nav.inbox" },
  { key: "g m", command: "nav.mine" },
  { key: "g b", command: "nav.backlog" },
  { key: "g d", command: "nav.done" },
  { key: "g g", command: "list.first" },
  { key: "j", command: "list.next" },
  { key: "ArrowDown", command: "list.next", when: "listFocus" },
  { key: "k", command: "list.prev" },
  { key: "ArrowUp", command: "list.prev", when: "listFocus" },
  { key: "x", command: "list.toggleSelect" },
  { key: "Escape", command: "list.clear", when: "selection.count > 0" },
  { key: "c", command: "issue.new" },
  { key: "i", command: "issue.assignMe" },
  { key: "s", command: "issue.star" },
  { key: "e", command: "issue.archive" },
  { key: "Mod+Enter", command: "issue.close" },
  { key: "Mod+Shift+C", command: "issue.copyLink" },
  { key: "Mod+B", command: "view.sidebar" },
  { key: "Mod+J Mod+D", command: "view.density" },
]

// A plugin: its own namespace, layer and weight; it shadows issue.copyLink on Mod+Shift+C.
const githubPlugin = (say: (text: string) => string): KeyboardPlugin => ({
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

// Opt-in persistence: the user keymap (edited in a ShortcutsEditor), the single-key switch and recent commands.
const keymapStore = localStorageKeymapStore("tracker.keymap")
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
  const [query, setQuery] = useState("")
  const [activeId, setActiveId] = useState<number | null>(101)
  const runCommand = useRunCommand()
  const [selected, setSelected] = useState<readonly number[]>([])
  const [sidebar, setSidebar] = useState(true)
  const [compact, setCompact] = useState(false)
  const [listFocus, setListFocus] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [flash, setFlash] = useState("Ready")
  const searchRef = useRef<HTMLInputElement | null>(null)

  const visible = useMemo(() => issuesIn(issues, view, query), [issues, view, query])
  const active = visible.find((issue) => issue.id === activeId) ?? null
  const targets = new Set(selected.length > 0 ? selected : active ? [active.id] : [])

  // A command that returns a string has it spoken by useAnnounceResults below.
  const say = (text: string): string => {
    setFlash(text)
    return text
  }
  const update = (change: (issue: Issue) => Issue, message: string): string => {
    setIssues((list) => list.map((issue) => (targets.has(issue.id) ? change(issue) : issue)))
    return say(message)
  }
  const move = (to: (index: number, count: number) => number) => {
    const at = visible.findIndex((issue) => issue.id === activeId)
    const next = visible[Math.max(0, Math.min(visible.length - 1, to(at, visible.length)))]
    if (!next) return undefined
    setActiveId(next.id)
    return \`#\${next.id} \${next.title}\`
  }
  const go = (next: View) => {
    setView(next)
    setSelected([])
    setActiveId(issuesIn(issues, next, query)[0]?.id ?? null)
    return say(\`Opened \${VIEWS.find((entry) => entry.id === next)?.label ?? next}\`)
  }
  const issueCommand = (title: string, run: () => string): CommandSpec<undefined> => ({ title, category: "Issue", enabled: "issue.selected || selection.count > 0", disabledReason: NEEDS_ISSUE, run })

  // Plain closures over state: the kit always calls the latest one.
  useCommands({
    "app.palette": { title: "Show command palette", category: "General", keywords: ["commands"], run: () => setPaletteOpen(true) },
    "app.cheatsheet": { title: "Show keyboard shortcuts", category: "General", keywords: ["help", "keys"], run: () => setSheetOpen(true) },
    "app.search": { title: "Search issues", category: "General", run: () => searchRef.current?.focus() },
    "nav.inbox": { title: "Go to Inbox", category: "Go to", run: () => go("inbox") },
    "nav.mine": { title: "Go to My issues", category: "Go to", run: () => go("mine") },
    "nav.backlog": { title: "Go to Backlog", category: "Go to", run: () => go("backlog") },
    "nav.done": { title: "Go to Done", category: "Go to", run: () => go("done") },
    "list.first": { title: "First issue", category: "List", run: () => move(() => 0) },
    "list.next": { title: "Next issue", category: "List", run: () => move((at) => at + 1) },
    "list.prev": { title: "Previous issue", category: "List", run: () => move((at) => (at < 0 ? 0 : at - 1)) },
    "list.toggleSelect": {
      title: "Select issue",
      category: "List",
      enabled: "issue.selected",
      disabledReason: NEEDS_ISSUE,
      run: () => setSelected((ids) => (active === null ? ids : ids.includes(active.id) ? ids.filter((id) => id !== active.id) : [...ids, active.id])),
    },
    "list.clear": { title: "Clear selection", category: "List", enabled: "selection.count > 0", disabledReason: "Nothing is selected", run: () => setSelected([]) },
    "issue.new": {
      title: "New issue",
      category: "Issue",
      run: () => {
        const id = Math.max(...issues.map((issue) => issue.id)) + 1
        setIssues((list) => [{ id, title: "Untitled issue", assignee: null, starred: false, status: "open", backlog: false }, ...list])
        setView("inbox")
        setActiveId(id)
        return say(\`Created #\${id}\`)
      },
    },
    "issue.assignMe": issueCommand("Assign to me", () => update((issue) => ({ ...issue, assignee: ME }), "Assigned to you")),
    "issue.star": issueCommand("Star issue", () => update((issue) => ({ ...issue, starred: !issue.starred }), "Star toggled")),
    "issue.archive": issueCommand("Archive issue", () => update((issue) => ({ ...issue, status: "archived" }), \`Archived \${targets.size}\`)),
    "issue.close": issueCommand("Close issue", () => update((issue) => ({ ...issue, status: issue.status === "closed" ? "open" : "closed" }), "Status changed")),
    "issue.copyLink": issueCommand("Copy issue link", () => say(\`Copied https://tracker.example/issues/\${active?.id ?? ""}\`)),
    "view.sidebar": { title: "Toggle sidebar", category: "View", run: () => setSidebar((on) => !on) },
    "view.density": { title: "Toggle compact rows", category: "View", run: () => setCompact((on) => !on) },
  })
  useKeymap("default", DEFAULT_KEYS)

  // Context keys from UI state: the when-clauses above read them.
  useContextKeys({ "issue.selected": active !== null, "selection.count": selected.length, view })
  useContextKey("listFocus", listFocus)

  // The plugin layer, installed for the app's lifetime (keyboard.plugin returns its remover).
  const sayRef = useRef(say)
  sayRef.current = say
  useEffect(() => keyboard.plugin(githubPlugin((text) => sayRef.current(text))), [keyboard])
  useEffect(() => persistCharacterKeys(keyboard, "tracker.characterKeys"), [keyboard])
  useAnnounceResults() // command results through one polite live region

  // "#" in the palette opens this page of results.
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
          run: () => {
            setView(issue.status === "closed" ? "done" : issue.backlog ? "backlog" : "inbox")
            setQuery("")
            setActiveId(issue.id)
            say(\`Jumped to #\${issue.id}\`)
          },
        })),
  }
  const palette = useCommandPalette({ providers: [issueProvider], recents })

  return (
    <div className={cn("flex h-[340px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]")} data-tracker="">
      <div className="flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2">
        <input
          ref={searchRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search issues  /"
          aria-label="Search issues"
          className="h-7 w-44 rounded-md border bg-background px-2 text-[12px]"
        />
        <ToolButton command="issue.new">New</ToolButton>
        <ToolButton command="issue.assignMe">Assign me</ToolButton>
        <ToolButton command="issue.archive">Archive</ToolButton>
        <span className="ml-auto" />
        <ToolButton command="view.sidebar">Sidebar</ToolButton>
        <ToolButton command="app.palette">Commands</ToolButton>
      </div>
      <div className="flex min-h-0 flex-1">
        {sidebar ? (
          <nav aria-label="Views" className="w-40 shrink-0 border-r p-1.5" data-kb-region="sidebar">
            {VIEWS.map((entry) => (
              <div key={entry.id} className={cn("flex h-7 items-center justify-between rounded px-2", view === entry.id ? "bg-muted font-medium" : "text-muted-foreground")}>
                <span>{entry.label}</span>
                <KeyHint command={\`nav.\${entry.id}\`} className="opacity-70" />
              </div>
            ))}
          </nav>
        ) : null}
        <div
          role="listbox"
          aria-label="Issues"
          aria-activedescendant={active ? \`issue-\${active.id}\` : undefined}
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
          className="min-w-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset"
        >
          {visible.length === 0 ? <p className="p-4 text-center text-muted-foreground">No issues here.</p> : null}
          {visible.map((issue) => (
            <div
              key={issue.id}
              id={\`issue-\${issue.id}\`}
              role="option"
              aria-selected={issue.id === activeId}
              data-issue-id={issue.id}
              className={cn("flex items-center gap-2 border-b border-border/50 px-2", compact ? "h-6" : "h-8", issue.id === activeId && "bg-primary/10 shadow-[inset_2px_0_0] shadow-primary")}
            >
              <span className={cn("size-3 shrink-0 rounded-sm border", selected.includes(issue.id) ? "border-primary bg-primary" : "border-border")} aria-hidden />
              <span className="w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums">#{issue.id}</span>
              <span className="min-w-0 flex-1 truncate">{issue.title}</span>
              {issue.starred ? <span className="text-amber-500">★</span> : null}
              <span className="w-10 shrink-0 text-right text-[11px] text-muted-foreground">{issue.assignee ?? "—"}</span>
            </div>
          ))}
        </div>
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
      <CommandPalette
        {...palette.props}
        shortcut={false}
        open={paletteOpen}
        onOpenChange={(open) => {
          setPaletteOpen(open)
          if (!open) palette.reset()
        }}
      />
      <Cheatsheet open={sheetOpen} onOpenChange={setSheetOpen} />
      <HeldModifierPanel />
    </div>
  )
}

/** A toolbar button: title, key in the tooltip, disabled reason, aria-keyshortcuts, and a badge while Mod is held. */
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

export function TrackerApp() {
  // The overlay kit's stack: while its palette is open, the page's keys are shadowed.
  const layers = useKeyboardLayerSource()
  return (
    <KeyboardProvider store={keymapStore} layers={layers ?? undefined}>
      <Tracker />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>x(()=>import(`./tracker-app-ty5_Q2wn.js`),[]));var K=[{name:`core`,what:`Key model, matcher, chords and sequences, when-clauses, commands, keymap layers, conflict analysis. No DOM.`},{name:`dom`,what:`One listener per document, inputs and IME, owned keys, scopes, overlay stack, chord timer, held keys, modality, persistence.`},{name:`roving`,what:`Its own entry: roving focus, grids, typeahead, virtual lists, focus groups; app navigation (F6 regions, skip links, deleted-focus recovery) joins the dom layer.`},{name:`react`,what:`KeyboardProvider (SSR- and StrictMode-safe), useCommand(s), useKeybinding, useKeymap, useContextKey(s), <Command>, <Shortcut>, press() test helper.`},{name:`ui`,what:`Shortcuts editor, cheatsheet, palette rows for the overlay palette, Kbd, KeyHint, CommandButton, modifier hints, pending chord, which-key, context inspector.`},{name:`a11y, devtools`,what:`WCAG 2.1.4 switch, live announcements, devtools panel.`}],q=[{to:`/kits/keyboard/editor`,title:`Shortcuts editor`,what:`VS Code's Keyboard Shortcuts page: search by text or keys, record chords, conflicts, when, import / export.`},{to:`/kits/keyboard/cheatsheet`,title:`Cheatsheet`,what:`Press ? — what works on this screen, grouped and searchable.`},{to:`/kits/keyboard/palette`,title:`Command palette`,what:`Mod+K: every command with its key and enablement, recent first, fuzzy, # for issues.`},{to:`/kits/keyboard/commands`,title:`Commands`,what:`The registry live: enablement with reasons, context keys, when tester, mount / unmount.`},{to:`/kits/keyboard/chords`,title:`Chords`,what:`g i, Mod+J Mod+S, the pending indicator, which-key and timeouts.`},{to:`/kits/keyboard/layers`,title:`Layers`,what:`Default, plugin and user rules; overrides, removals and the analyzer.`},{to:`/kits/keyboard/hints`,title:`Keys on screen`,what:`Kbd per platform, command buttons with aria-keyshortcuts, hold Mod for hints.`},{to:`/kits/keyboard/dom`,title:`DOM layer`,what:`One listener, inputs and IME, owned keys, scopes, overlays, iframes.`},{to:`/kits/keyboard/navigation`,title:`Navigation`,what:`Roving focus, grids, focus groups, F6 regions, skip links.`}];function J(){return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(n,{title:`Keyboard kit`,children:`A VS Code-grade keyboard system for web apps: a command registry, keybindings in default, plugin and user layers with when-clauses, chords and sequences, conflict analysis, one global listener, and the UI on top — a shortcuts editor, a cheatsheet, a registry-fed command palette and key hints.`}),(0,O.jsx)(E,{n:1,title:`Operate an app from the keyboard`,blurb:`j / k move, x selects, e archives, g i switches view, Mod+K opens the palette, ? the cheatsheet; hold Mod for hints. Everything below runs on one engine.`,code:G,children:(0,O.jsx)(W,{})}),(0,O.jsx)(E,{n:2,title:`What each page shows`,children:(0,O.jsx)(`div`,{className:`grid gap-2 sm:grid-cols-2 lg:grid-cols-3`,children:q.map(e=>(0,O.jsxs)(w,{to:e.to,className:`rounded-md border p-2.5 hover:border-primary/50 hover:bg-muted/40`,children:[(0,O.jsx)(`div`,{className:`text-[13px] font-medium`,children:e.title}),(0,O.jsx)(`div`,{className:`mt-0.5 text-[12px] text-muted-foreground`,children:e.what})]},e.to))})}),(0,O.jsx)(E,{n:3,title:`Layers`,blurb:`How the package is built; hosts import one barrel (roving and devtools are their own entries).`,children:(0,O.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,O.jsx)(`tbody`,{children:K.map(e=>(0,O.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,O.jsx)(`td`,{className:`py-1 pr-3 font-mono text-[12px]`,children:e.name}),(0,O.jsx)(`td`,{className:`py-1`,children:e.what})]},e.name))})})}),(0,O.jsx)(E,{n:4,title:`A command on a key`,blurb:`The smallest use: one engine, one listener, no React provider; Mod resolves per platform.`,code:j,children:(0,O.jsx)(A,{})})]})}export{J as component};