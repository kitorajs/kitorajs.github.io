import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{t as n}from"./file-code-zMCWoiH6.js";import{t as r}from"./file-text-B8CPDozU.js";import{t as i}from"./file-Cu4A8CGV.js";import{t as a}from"./folder-CByvWSrf.js";import{t as o}from"./git-branch-D9zd0CZc.js";import{t as s}from"./pencil-B4UI5Wo7.js";import{t as c}from"./save-TP2LkkCE.js";import{t as l}from"./search-D4xjEJsY.js";import{t as u}from"./settings-DVlOJsLs.js";import{t as d}from"./undo-2-AaSwxjDx.js";import{t as f}from"./input-DQo0XDsx.js";import{Bc as p,Cc as m,Ic as h,Oi as g,ti as _}from"./index-B9ukmIN1.js";import{t as v}from"./badge-uhFB8J9R.js";import"./kit-gallery-Bph7isB2.js";import{t as y}from"./example-BGnSQG2Y.js";import{t as b}from"./tabster-BO4tJY_i.js";import{t as x}from"./local-storage-adapter-BaeLF1LT.js";var S=e(p(),1),C=h();function w(e){let t=e.params?.body??`// ${e.title}\nimport { Tabster } from "@kitora/tabster"\n\nexport function Demo() {\n  return <Tabster panels={{ editor: EditorPanel }} initialPanels={[{ id: "a", component: "editor", title: "demo.tsx" }]} />\n}\n`;return(0,C.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,C.jsxs)(`div`,{className:`flex items-center justify-between border-b border-border bg-surface-1 px-3 py-1.5 text-[11px] text-muted-foreground`,children:[(0,C.jsxs)(`span`,{className:`inline-flex items-center gap-1.5`,children:[(0,C.jsx)(n,{className:`size-3`}),e.params?.language??`tsx`]}),(0,C.jsx)(`span`,{className:`font-mono`,children:`UTF-8 · LF`})]}),(0,C.jsx)(`pre`,{tabIndex:0,className:`flex-1 overflow-auto bg-background px-4 py-3 font-mono text-[12px] leading-relaxed text-foreground`,children:t})]})}var T=[{name:`src`,folder:!0,depth:0,open:!0},{name:`kit`,folder:!0,depth:1,open:!0},{name:`tabster`,folder:!0,depth:2,open:!0},{name:`tabster.tsx`,folder:!1,depth:3,open:!1},{name:`types.ts`,folder:!1,depth:3,open:!1},{name:`use-keyboard.ts`,folder:!1,depth:3,open:!1},{name:`index.ts`,folder:!1,depth:3,open:!1},{name:`datagrid`,folder:!0,depth:2,open:!1},{name:`task-list`,folder:!0,depth:2,open:!1},{name:`README.md`,folder:!1,depth:0,open:!1}];function E(){return(0,C.jsxs)(`div`,{className:`flex h-full flex-col bg-surface-1`,children:[(0,C.jsx)(`div`,{className:`border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground`,children:`Explorer`}),(0,C.jsx)(`ul`,{className:`flex-1 overflow-auto py-1 text-[12px]`,children:T.map(e=>(0,C.jsxs)(`li`,{className:`flex cursor-pointer items-center gap-1 px-2 py-0.5 hover:bg-muted`,style:{paddingLeft:8+e.depth*12},children:[e.folder?(0,C.jsx)(g,{className:`size-3 transition-transform ${e.open?`rotate-90`:``}`}):(0,C.jsx)(`span`,{className:`inline-block size-3`}),e.folder?(0,C.jsx)(a,{className:`size-3 text-muted-foreground`}):(0,C.jsx)(i,{className:`size-3 text-muted-foreground`}),(0,C.jsx)(`span`,{children:e.name})]},`${e.depth}:${e.name}`))})]})}function D(){let[e,t]=(0,S.useState)(``);return(0,C.jsxs)(`div`,{className:`flex h-full flex-col bg-surface-1`,children:[(0,C.jsx)(`div`,{className:`border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground`,children:`Search`}),(0,C.jsxs)(`div`,{className:`relative px-3 py-2`,children:[(0,C.jsx)(l,{className:`pointer-events-none absolute left-5 top-1/2 size-3 -translate-y-1/2 text-muted-foreground`}),(0,C.jsx)(f,{value:e,onChange:e=>t(e.target.value),placeholder:`Find in files`,"aria-label":`Find in files`,className:`h-7 pl-7 text-[12px]`})]}),(0,C.jsx)(`div`,{className:`flex-1 overflow-auto px-3 pb-3 text-[12px] text-muted-foreground`,children:e?`Searching for "${e}"…`:`Type to search across files.`})]})}function O(){return(0,C.jsxs)(`div`,{className:`flex h-full flex-col bg-background`,children:[(0,C.jsx)(`div`,{className:`border-b border-border px-3 py-1.5 text-[11px] text-muted-foreground`,children:(0,C.jsx)(v,{variant:`outline`,className:`text-[10px]`,children:`zsh`})}),(0,C.jsx)(`pre`,{tabIndex:0,className:`flex-1 overflow-auto px-3 py-2 font-mono text-[12px] leading-relaxed text-muted-foreground`,children:`$ pnpm dev
  ➜  Local:   http://localhost:7001/
  ➜  Network: use --host to expose

[tabster] dock ready · 3 groups · 5 panels`})]})}var k=[{file:`tabster.tsx`,mark:`M`,tone:`bg-amber-500/15 text-amber-700`},{file:`types.ts`,mark:`A`,tone:`bg-emerald-500/15 text-emerald-700`}];function A(){return(0,C.jsxs)(`div`,{className:`flex h-full flex-col bg-surface-1`,children:[(0,C.jsx)(`div`,{className:`border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground`,children:`Source control`}),(0,C.jsxs)(`div`,{className:`flex-1 space-y-1.5 overflow-auto px-3 py-2 text-[12px]`,children:[(0,C.jsxs)(`div`,{className:`inline-flex items-center gap-1 text-muted-foreground`,children:[(0,C.jsx)(o,{className:`size-3`}),(0,C.jsx)(`span`,{children:`main`})]}),(0,C.jsxs)(`div`,{className:`text-[11px] text-muted-foreground`,children:[`Changes (`,k.length,`)`]}),k.map(e=>(0,C.jsxs)(`div`,{className:`flex items-center justify-between rounded px-1.5 py-0.5 hover:bg-muted`,children:[(0,C.jsxs)(`span`,{className:`inline-flex items-center gap-1.5`,children:[(0,C.jsx)(r,{className:`size-3 text-muted-foreground`}),e.file]}),(0,C.jsx)(v,{className:`${e.tone} text-[10px]`,children:e.mark})]},e.file))]})]})}var j=[[`Theme`,`Auto`],[`Keyboard map`,`VSCode`],[`Restore layout`,`Reset`]];function M(){return(0,C.jsxs)(`div`,{className:`flex h-full flex-col bg-background`,children:[(0,C.jsx)(`div`,{className:`border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground`,children:`Settings`}),(0,C.jsxs)(`div`,{className:`flex-1 space-y-3 overflow-auto px-4 py-3 text-[12px]`,children:[j.map(([e,t])=>(0,C.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,C.jsx)(`span`,{children:e}),(0,C.jsx)(_,{variant:`outline`,size:`sm`,children:t})]},e)),(0,C.jsxs)(`div`,{className:`text-[11px] text-muted-foreground`,children:[(0,C.jsx)(u,{className:`mb-1 size-3`})," Tabster reads Kitora tokens via CSS vars — restyle by overriding `--dock-*` on the root."]})]})]})}function N(){return(0,C.jsxs)(`div`,{className:`flex h-full flex-col bg-background`,children:[(0,C.jsx)(`div`,{className:`border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground`,children:`Notes`}),(0,C.jsxs)(`div`,{className:`flex-1 overflow-auto px-4 py-3 text-[12px] leading-relaxed`,children:[(0,C.jsxs)(`p`,{children:[`Drag a tab title to another group, an edge of the dock, or out of the window. Every move emits an updated layout JSON via `,(0,C.jsx)(`code`,{children:`onLayoutChange`}),`.`]}),(0,C.jsxs)(`p`,{className:`mt-2`,children:[`Override individual keys via the `,(0,C.jsx)(`code`,{children:`keyboard`}),` prop.`]})]})]})}var P=1,F={},I={editor:w,explorer:E,search:D,terminal:O,git:A,settings:M,notes:(0,S.lazy)(()=>Promise.resolve({default:N}))},L=[{id:`editor.1`,component:`editor`,title:`tabster.tsx`},{id:`editor.2`,component:`editor`,title:`types.ts`,params:{language:`ts`,body:`// types.ts
export type Foo = string
`}},{id:`explorer`,component:`explorer`,title:`Explorer`,position:{referencePanel:`editor.1`,direction:`left`}},{id:`terminal`,component:`terminal`,title:`Terminal`,position:{referencePanel:`editor.1`,direction:`below`}},{id:`settings`,component:`settings`,title:`Settings`,position:{referencePanel:`terminal`,direction:`within`}}];function R(){let e=(0,S.useRef)(null),[t,n]=(0,S.useState)(null),[r,i]=(0,S.useState)(!1),[a,o]=(0,S.useState)(null),l=(0,S.useMemo)(()=>x({key:`kitora:tabster:ide-shell`}),[]),u=()=>{e.current?.enterEditMode(),i(!0)},f=async()=>{await e.current?.saveEditMode(),i(!1),o(new Date)},p=()=>{e.current?.discardEditMode(),i(!1)},m=t=>{let n=e.current,r=n?.activePanel();n&&r&&t(n,r)},h=async()=>{await l.clear?.(),e.current?.resetLayout();for(let t of L)e.current?.addPanel(t);o(null)};return(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[r?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(_,{size:`sm`,onClick:()=>void f(),children:[(0,C.jsx)(c,{}),`Save layout`]}),(0,C.jsxs)(_,{size:`sm`,variant:`outline`,onClick:p,children:[(0,C.jsx)(d,{}),`Discard`]}),(0,C.jsx)(`span`,{className:`rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary`,children:`Editing`})]}):(0,C.jsxs)(_,{size:`sm`,variant:`outline`,onClick:u,children:[(0,C.jsx)(s,{}),`Edit layout`]}),(0,C.jsx)(`span`,{"aria-hidden":!0,className:`h-4 w-px bg-border`}),(0,C.jsx)(_,{variant:`outline`,size:`sm`,onClick:()=>e.current?.addPanel({id:`editor.${Date.now()}`,component:`editor`,title:`untitled.tsx`}),children:`New tab`}),(0,C.jsx)(_,{variant:`outline`,size:`sm`,onClick:()=>e.current?.addPanel({id:`notes.${Date.now()}`,component:`notes`,title:`Notes (lazy)`}),children:`New notes (lazy)`}),(0,C.jsx)(_,{variant:`outline`,size:`sm`,onClick:()=>m((e,t)=>e.popoutPanel(t)),children:`Popout active`}),(0,C.jsx)(_,{variant:`outline`,size:`sm`,onClick:()=>m((e,t)=>e.floatPanel(t)),children:`Float active`}),(0,C.jsx)(_,{variant:`outline`,size:`sm`,onClick:()=>void h(),children:`Reset layout`}),(0,C.jsxs)(`span`,{className:`ml-auto flex items-center gap-3 font-mono text-[11px] text-muted-foreground`,children:[t?(0,C.jsxs)(`span`,{children:[`active: `,t]}):null,a?(0,C.jsxs)(`span`,{children:[`saved `,a.toLocaleTimeString()]}):null]})]}),(0,C.jsx)(`div`,{className:`mt-3 h-[640px] overflow-hidden rounded-lg border border-border bg-background`,children:(0,C.jsx)(b,{panels:I,initialPanels:L,adapter:l,version:P,migrators:F,panelFallback:(0,C.jsx)(`div`,{className:`grid h-full place-items-center text-[12px] text-muted-foreground`,children:`Loading…`}),onReady:({api:t})=>{e.current=t},onLayoutChange:()=>{r||o(new Date)},onActiveChange:n,onRestore:()=>o(new Date)})}),(0,C.jsxs)(`p`,{className:`mt-3 text-[11px] text-muted-foreground`,children:[`Shortcuts: `,(0,C.jsx)(`kbd`,{children:`⌘W`}),` close · `,(0,C.jsx)(`kbd`,{children:`Ctrl+Tab`}),` cycle · `,(0,C.jsx)(`kbd`,{children:`Ctrl+PageDown / PageUp`}),` next/prev · `,(0,C.jsx)(`kbd`,{children:`Ctrl+Shift+O`}),` popout active · `,(0,C.jsx)(`kbd`,{children:`⌘K W / Ctrl+K W`}),` close all.`]})]})}var z=`import { lazy, useMemo, useRef, useState } from "react"
import { ChevronRight, File, FileCode, FileText, Folder, GitBranch, Pencil, Save, Search, Settings, Undo2 } from "lucide-react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Tabster, createLocalStorageAdapter, type TabsterApi, type TabsterMigratorMap, type TabsterPanelRenderProps, type TabsterPanelSpec } from "@kitora/tabster"

function EditorPanel(props: TabsterPanelRenderProps<{ language?: string; body?: string }>) {
  const body = props.params?.body ?? \`// \${props.title}\\nimport { Tabster } from "@kitora/tabster"\\n\\nexport function Demo() {\\n  return <Tabster panels={{ editor: EditorPanel }} initialPanels={[{ id: "a", component: "editor", title: "demo.tsx" }]} />\\n}\\n\`
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border bg-surface-1 px-3 py-1.5 text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <FileCode className="size-3" />
          {props.params?.language ?? "tsx"}
        </span>
        <span className="font-mono">UTF-8 · LF</span>
      </div>
      <pre tabIndex={0} className="flex-1 overflow-auto bg-background px-4 py-3 font-mono text-[12px] leading-relaxed text-foreground">
        {body}
      </pre>
    </div>
  )
}

const FILES = [
  { name: "src", folder: true, depth: 0, open: true },
  { name: "kit", folder: true, depth: 1, open: true },
  { name: "tabster", folder: true, depth: 2, open: true },
  { name: "tabster.tsx", folder: false, depth: 3, open: false },
  { name: "types.ts", folder: false, depth: 3, open: false },
  { name: "use-keyboard.ts", folder: false, depth: 3, open: false },
  { name: "index.ts", folder: false, depth: 3, open: false },
  { name: "datagrid", folder: true, depth: 2, open: false },
  { name: "task-list", folder: true, depth: 2, open: false },
  { name: "README.md", folder: false, depth: 0, open: false },
]

function ExplorerPanel() {
  return (
    <div className="flex h-full flex-col bg-surface-1">
      <div className="border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Explorer</div>
      <ul className="flex-1 overflow-auto py-1 text-[12px]">
        {FILES.map((f) => (
          <li key={\`\${f.depth}:\${f.name}\`} className="flex cursor-pointer items-center gap-1 px-2 py-0.5 hover:bg-muted" style={{ paddingLeft: 8 + f.depth * 12 }}>
            {f.folder ? <ChevronRight className={\`size-3 transition-transform \${f.open ? "rotate-90" : ""}\`} /> : <span className="inline-block size-3" />}
            {f.folder ? <Folder className="size-3 text-muted-foreground" /> : <File className="size-3 text-muted-foreground" />}
            <span>{f.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SearchPanel() {
  const [q, setQ] = useState("")
  return (
    <div className="flex h-full flex-col bg-surface-1">
      <div className="border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Search</div>
      <div className="relative px-3 py-2">
        <Search className="pointer-events-none absolute left-5 top-1/2 size-3 -translate-y-1/2 text-muted-foreground" />
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Find in files" aria-label="Find in files" className="h-7 pl-7 text-[12px]" />
      </div>
      <div className="flex-1 overflow-auto px-3 pb-3 text-[12px] text-muted-foreground">{q ? \`Searching for "\${q}"…\` : "Type to search across files."}</div>
    </div>
  )
}

function TerminalPanel() {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="border-b border-border px-3 py-1.5 text-[11px] text-muted-foreground">
        <Badge variant="outline" className="text-[10px]">
          zsh
        </Badge>
      </div>
      <pre tabIndex={0} className="flex-1 overflow-auto px-3 py-2 font-mono text-[12px] leading-relaxed text-muted-foreground">
        {"$ pnpm dev\\n  ➜  Local:   http://localhost:7001/\\n  ➜  Network: use --host to expose\\n\\n[tabster] dock ready · 3 groups · 5 panels"}
      </pre>
    </div>
  )
}

const CHANGES = [
  { file: "tabster.tsx", mark: "M", tone: "bg-amber-500/15 text-amber-700" },
  { file: "types.ts", mark: "A", tone: "bg-emerald-500/15 text-emerald-700" },
]

function GitPanel() {
  return (
    <div className="flex h-full flex-col bg-surface-1">
      <div className="border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Source control</div>
      <div className="flex-1 space-y-1.5 overflow-auto px-3 py-2 text-[12px]">
        <div className="inline-flex items-center gap-1 text-muted-foreground">
          <GitBranch className="size-3" />
          <span>main</span>
        </div>
        <div className="text-[11px] text-muted-foreground">Changes ({CHANGES.length})</div>
        {CHANGES.map((c) => (
          <div key={c.file} className="flex items-center justify-between rounded px-1.5 py-0.5 hover:bg-muted">
            <span className="inline-flex items-center gap-1.5">
              <FileText className="size-3 text-muted-foreground" />
              {c.file}
            </span>
            <Badge className={\`\${c.tone} text-[10px]\`}>{c.mark}</Badge>
          </div>
        ))}
      </div>
    </div>
  )
}

const SETTINGS = [
  ["Theme", "Auto"],
  ["Keyboard map", "VSCode"],
  ["Restore layout", "Reset"],
] as const

function SettingsPanel() {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Settings</div>
      <div className="flex-1 space-y-3 overflow-auto px-4 py-3 text-[12px]">
        {SETTINGS.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between">
            <span>{label}</span>
            <Button variant="outline" size="sm">
              {value}
            </Button>
          </div>
        ))}
        <div className="text-[11px] text-muted-foreground">
          <Settings className="mb-1 size-3" /> Tabster reads Kitora tokens via CSS vars — restyle by overriding \`--dock-*\` on the root.
        </div>
      </div>
    </div>
  )
}

function NotesPanel() {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Notes</div>
      <div className="flex-1 overflow-auto px-4 py-3 text-[12px] leading-relaxed">
        <p>
          Drag a tab title to another group, an edge of the dock, or out of the window. Every move emits an updated layout JSON via <code>onLayoutChange</code>.
        </p>
        <p className="mt-2">
          Override individual keys via the <code>keyboard</code> prop.
        </p>
      </div>
    </div>
  )
}

// Bump when the saved layout's shape changes in a breaking way, and register a migrator for the old version.
// (Layouts saved by the dockview-era Tabster are converted on load by the kit itself.)
const SCHEMA_VERSION = 1
const MIGRATORS: TabsterMigratorMap = {
  // 0: (snap) => ({ ...snap, version: 1, layout: rename(snap.layout) }),
}

const PANELS = {
  editor: EditorPanel,
  explorer: ExplorerPanel,
  search: SearchPanel,
  terminal: TerminalPanel,
  git: GitPanel,
  settings: SettingsPanel,
  // a lazy panel loads on first mount, inside Tabster's <Suspense>
  notes: lazy(() => Promise.resolve({ default: NotesPanel })),
}

// The first panel anchors the grid; the rest position relative to it.
const INITIAL: TabsterPanelSpec[] = [
  { id: "editor.1", component: "editor", title: "tabster.tsx" },
  { id: "editor.2", component: "editor", title: "types.ts", params: { language: "ts", body: "// types.ts\\nexport type Foo = string\\n" } },
  { id: "explorer", component: "explorer", title: "Explorer", position: { referencePanel: "editor.1", direction: "left" } },
  { id: "terminal", component: "terminal", title: "Terminal", position: { referencePanel: "editor.1", direction: "below" } },
  { id: "settings", component: "settings", title: "Settings", position: { referencePanel: "terminal", direction: "within" } },
]

export function IdeShell() {
  const apiRef = useRef<TabsterApi | null>(null)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [editing, setEditing] = useState(false)
  const [savedAt, setSavedAt] = useState<Date | null>(null)
  // one stable adapter for the page's lifetime; the layout survives a reload
  const adapter = useMemo(() => createLocalStorageAdapter({ key: "kitora:tabster:ide-shell" }), [])

  // Edit mode pauses auto-save: changes stay in memory until Save commits or Discard rolls back.
  const enterEdit = () => {
    apiRef.current?.enterEditMode()
    setEditing(true)
  }
  const saveEdit = async () => {
    await apiRef.current?.saveEditMode()
    setEditing(false)
    setSavedAt(new Date())
  }
  const discardEdit = () => {
    apiRef.current?.discardEditMode()
    setEditing(false)
  }
  const withActive = (run: (api: TabsterApi, id: string) => void) => {
    const api = apiRef.current
    const id = api?.activePanel()
    if (api && id) run(api, id)
  }
  const reset = async () => {
    await adapter.clear?.()
    apiRef.current?.resetLayout()
    for (const p of INITIAL) apiRef.current?.addPanel(p)
    setSavedAt(null)
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {editing ? (
          <>
            <Button size="sm" onClick={() => void saveEdit()}>
              <Save />
              Save layout
            </Button>
            <Button size="sm" variant="outline" onClick={discardEdit}>
              <Undo2 />
              Discard
            </Button>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">Editing</span>
          </>
        ) : (
          <Button size="sm" variant="outline" onClick={enterEdit}>
            <Pencil />
            Edit layout
          </Button>
        )}
        <span aria-hidden className="h-4 w-px bg-border" />
        <Button variant="outline" size="sm" onClick={() => apiRef.current?.addPanel({ id: \`editor.\${Date.now()}\`, component: "editor", title: "untitled.tsx" })}>
          New tab
        </Button>
        <Button variant="outline" size="sm" onClick={() => apiRef.current?.addPanel({ id: \`notes.\${Date.now()}\`, component: "notes", title: "Notes (lazy)" })}>
          New notes (lazy)
        </Button>
        {/* window.open needs a user gesture: pop out from the click handler */}
        <Button variant="outline" size="sm" onClick={() => withActive((api, id) => api.popoutPanel(id))}>
          Popout active
        </Button>
        <Button variant="outline" size="sm" onClick={() => withActive((api, id) => api.floatPanel(id))}>
          Float active
        </Button>
        <Button variant="outline" size="sm" onClick={() => void reset()}>
          Reset layout
        </Button>
        <span className="ml-auto flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
          {activeId ? <span>active: {activeId}</span> : null}
          {savedAt ? <span>saved {savedAt.toLocaleTimeString()}</span> : null}
        </span>
      </div>

      <div className="mt-3 h-[640px] overflow-hidden rounded-lg border border-border bg-background">
        <Tabster
          panels={PANELS}
          initialPanels={INITIAL}
          adapter={adapter}
          version={SCHEMA_VERSION}
          migrators={MIGRATORS}
          panelFallback={<div className="grid h-full place-items-center text-[12px] text-muted-foreground">Loading…</div>}
          onReady={({ api }) => {
            apiRef.current = api
          }}
          onLayoutChange={() => {
            if (!editing) setSavedAt(new Date())
          }}
          onActiveChange={setActiveId}
          onRestore={() => setSavedAt(new Date())}
        />
      </div>

      <p className="mt-3 text-[11px] text-muted-foreground">
        Shortcuts: <kbd>⌘W</kbd> close · <kbd>Ctrl+Tab</kbd> cycle · <kbd>Ctrl+PageDown / PageUp</kbd> next/prev · <kbd>Ctrl+Shift+O</kbd> popout active · <kbd>⌘K W / Ctrl+K W</kbd> close all.
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>m(()=>import(`./ide-shell-tTSqrave.js`),[]));function B(){return(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(t,{title:`IDE shell`,children:[`VSCode-style three-column dock backed by a swappable persistence adapter (`,(0,C.jsx)(`code`,{className:`font-mono`,children:`createLocalStorageAdapter`}),`). Toggle Edit mode to disable auto-save until you commit or discard. The snapshot schema is versioned, with a migrator per old version.`]}),(0,C.jsx)(y,{n:1,title:`Persisted IDE dock`,blurb:`Drag tabs anywhere, dock into splits, float or pop out the active tab; the layout survives a reload.`,code:z,children:(0,C.jsx)(R,{})})]})}export{B as component};