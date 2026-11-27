import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t,y as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./list-tree-DsWvOKaw.js";import{t as i}from"./search-B6QTpngp.js";import{_ as a,r as o,t as s}from"./provider-Chu9Vnk7.js";import{i as c}from"./kbd-CZ2z7L7Q.js";import{Ec as l,Uc as u,zc as d}from"./index-BZuUy872.js";import{g as f,h as p,t as m,u as h}from"./dock-CVAc3kEG.js";import{t as g}from"./panels-yb_hfL-N.js";import{n as _,r as v}from"./parts-CGX_mU_k.js";import"./kit-gallery-BBavj2rC.js";import{t as y}from"./example-B67lLz1F.js";import{n as b,t as x}from"./hook-B9-FAv9C.js";var S=e(u(),1),C=d();function w({api:e}){return x(e,{regions:!0}),null}function T(){let[e]=(0,S.useState)(z),[t,n]=(0,S.useState)(e),[r,i]=(0,S.useState)(null);return(0,C.jsxs)(s,{children:[(0,C.jsx)(v,{}),(0,C.jsx)(w,{api:r}),(0,C.jsx)(`code`,{"data-testid":`kbd-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:p(t)}),(0,C.jsx)(`div`,{"data-testid":`kbd-dock`,className:`mt-1 h-[440px] overflow-hidden rounded-md border`,children:(0,C.jsx)(m,{ref:i,panels:L,defaultLayout:e,parts:_,label:`Keyboard demo`,onLayoutChange:n})})]})}function E(...e){return`${e.join(`
`)}\n`}var D={"src/main.ts":E(`import { createApp } from "./app"`,`import { loadConfig } from "./config"`,``,`// Boot the app once the config is in.`,`export async function main(): Promise<void> {`,`  const config = await loadConfig()`,`  createApp(config).listen(config.port)`,`}`,``,`void main()`),"src/app.ts":E(`import type { Config } from "./config"`,``,`export function createApp(config: Config) {`,`  const routes = new Map<string, () => string>()`,`  routes.set("/", () => "ok")`,`  routes.set("/health", () => JSON.stringify({ up: true, env: config.env }))`,`  return { listen: (port: number) => console.log("listening on", port) }`,`}`),"src/config.ts":E(`export interface Config {`,`  readonly port: number`,`  readonly env: "dev" | "prod"`,`}`,``,`export async function loadConfig(): Promise<Config> {`,`  return { port: Number(process.env.PORT ?? 3000), env: "dev" }`,`}`),"src/styles.css":E(`:root {`,`  --accent: #2563eb;`,`}`),"README.md":E(`# demo-app`,``,"A tiny server: `pnpm dev` runs it with reload."),"package.json":E(`{ "name": "demo-app", "private": true, "type": "module" }`)};function O({params:e}){let t=(D[e.path]??`// ${e.path}\n`).replace(/\n$/,``).split(`
`);return(0,C.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full font-mono text-[12px] leading-[19px]`,children:[(0,C.jsx)(`div`,{"aria-hidden":`true`,className:`sticky left-0 shrink-0 select-none bg-background px-3 py-2 text-right text-muted-foreground tabular-nums`,children:t.map((e,t)=>(0,C.jsx)(`div`,{children:t+1},t))}),(0,C.jsx)(`pre`,{className:`m-0 min-w-0 flex-1 py-2 pr-4 whitespace-pre`,"aria-label":`Contents of ${e.path}`,children:t.map((e,t)=>(0,C.jsx)(`div`,{className:`min-h-[19px]`,children:e},t))})]})}function k(e,t){let n=e.getLayout().nodes.editor;e.addPanel({id:t,component:`editor`,title:t.split(`/`).pop()??t,params:{path:t}},n?.kind===`group`?{type:`group`,group:`editor`}:void 0)}function A(){let e=h();return(0,C.jsxs)(`nav`,{"aria-label":`Project files`,className:`py-1 text-[12.5px]`,children:[(0,C.jsx)(`div`,{className:`px-3 pt-1 pb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:`demo-app`}),(0,C.jsx)(`ul`,{children:Object.keys(D).map(t=>(0,C.jsx)(`li`,{children:(0,C.jsx)(`button`,{type:`button`,"data-file":t,onClick:()=>k(e,t),className:`flex h-6 w-full items-center px-3 text-left hover:bg-muted focus-visible:bg-muted focus-visible:outline-none`,children:t})},t))})]})}function j(){let[e,t]=(0,S.useState)([`$ pnpm dev`,`> tsx watch src/main.ts`,`listening on :3000`]),[n,r]=(0,S.useState)(``);return(0,C.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full flex-col bg-zinc-950 p-2 font-mono text-[12px] leading-[18px] text-zinc-200`,children:[e.map((e,t)=>(0,C.jsx)(`div`,{className:e.startsWith(`$`)?`text-sky-300`:void 0,children:e},t)),(0,C.jsxs)(`form`,{className:`flex gap-1`,onSubmit:e=>{e.preventDefault(),n.trim()&&(t(e=>[...e,`$ ${n}`,`${n.split(` `)[0]}: done`]),r(``))},children:[(0,C.jsx)(`span`,{className:`text-sky-300`,children:`$`}),(0,C.jsx)(`input`,{"aria-label":`Terminal input`,"data-terminal-input":``,value:n,onChange:e=>r(e.target.value),className:`min-w-0 flex-1 bg-transparent text-zinc-100 outline-none`})]})]})}var M=[{at:`src/app.ts:6`,text:`'config.env' is read but never validated`,warning:!0},{at:`src/config.ts:7`,text:`Prefer a schema for environment variables`,warning:!1}];function N(){return(0,C.jsx)(`ul`,{className:`py-1 text-[12.5px]`,children:M.map(e=>(0,C.jsxs)(`li`,{className:`flex h-[22px] min-w-0 items-center gap-2 px-3 whitespace-nowrap`,children:[(0,C.jsx)(`span`,{className:e.warning?`text-amber-700 dark:text-amber-400`:`text-sky-700 dark:text-sky-400`,children:e.warning?`▲`:`●`}),(0,C.jsx)(`span`,{className:`min-w-0 truncate`,children:e.text}),(0,C.jsx)(`span`,{className:`shrink-0 text-muted-foreground`,children:e.at})]},e.text))})}function P(){return(0,C.jsx)(`pre`,{className:`m-0 p-2 font-mono text-[12px] leading-[18px] text-muted-foreground`,children:`[info] build started
[info] 3 modules transformed
[info] built in 212ms`})}function F(){return(0,C.jsx)(`ul`,{className:`py-1 text-[12.5px]`,"aria-label":`Symbols`,children:[`main()`,`createApp(config)`,`routes`,`loadConfig()`].map(e=>(0,C.jsxs)(`li`,{className:`flex h-[22px] items-center gap-2 px-3`,children:[(0,C.jsx)(`span`,{className:`font-mono text-[10px] text-violet-600 dark:text-violet-300`,children:`ƒ`}),e]},e))})}function I(){let[e,t]=(0,S.useState)(``),n=e?Object.keys(D).filter(t=>(D[t]??``).toLowerCase().includes(e.toLowerCase())):[];return(0,C.jsxs)(`div`,{className:`p-2 text-[12.5px]`,children:[(0,C.jsx)(`input`,{"aria-label":`Search files`,value:e,onChange:e=>t(e.target.value),placeholder:`Search`,className:`h-7 w-full rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring`}),(0,C.jsx)(`ul`,{className:`mt-2`,children:n.map(e=>(0,C.jsx)(`li`,{className:`h-[22px] truncate`,children:e},e))})]})}var L=g({editor:{component:O,kind:`document`},explorer:{component:A,kind:`tool`,title:`Explorer`,icon:(0,C.jsx)(n,{size:20,strokeWidth:1.5,"aria-hidden":!0})},search:{component:I,kind:`tool`,title:`Search`,icon:(0,C.jsx)(i,{size:20,strokeWidth:1.5,"aria-hidden":!0})},terminal:{component:j,kind:`tool`,title:`Terminal`},problems:{component:N,kind:`tool`,title:`Problems`},output:{component:P,kind:`tool`,title:`Output`},outline:{component:F,kind:`tool`,title:`Outline`,icon:(0,C.jsx)(r,{size:20,strokeWidth:1.5,"aria-hidden":!0})}}),R=e=>({id:e,component:`editor`,title:e.split(`/`).pop()??e,params:{path:e},kind:`document`});function z(){return f({orientation:`horizontal`,children:[{orientation:`vertical`,size:.8,priority:`high`,children:[{id:`editor`,size:.7,minPx:120,keepWhenEmpty:!0,panels:Object.keys(D).map(R)},{id:`bottom`,size:.3,minPx:80,collapsible:!0,collapsedPx:0,panels:[{id:`terminal`,component:`terminal`,title:`Terminal`,kind:`tool`},{id:`problems`,component:`problems`,title:`Problems`,kind:`tool`},{id:`output`,component:`output`,title:`Output`,kind:`tool`}]}]},{id:`right`,size:.2,minPx:140,maxPx:420,priority:`low`,collapsible:!0,panels:[{id:`outline`,component:`outline`,title:`Outline`,kind:`tool`}]}]},{borders:{left:{panels:[{id:`explorer`,component:`explorer`,title:`Explorer`,kind:`tool`},{id:`search`,component:`search`,title:`Search`,kind:`tool`}],open:`explorer`,sizePx:220}}})}var B=`import { KeyboardProvider } from "@kitora/keyboard"
import { FilesIcon, ListTreeIcon, SearchIcon } from "lucide-react"
import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, useDock, type DockApi, type DockLayout, type PanelProps, type TypedDockApi } from "@kitora/dock"
import { useDockKeyboard } from "@kitora/dock/keyboard"

/** Registers every layout action as a keyboard command, plus F6 regions, on the nearest KeyboardProvider while mounted. */
function DockKeys({ api }: { readonly api: DockApi | null }) {
  useDockKeyboard(api, { regions: true })
  return null
}

/** Space on a focused tab picks it up, the arrows choose a drop zone, Enter drops, Escape cancels; every change is announced. */
export function KeyboardWorkbench() {
  const [initial] = useState(ideLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  return (
    <KeyboardProvider>
      <DockStyles />
      <DockKeys api={api} />
      <code data-testid="kbd-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(layout)}
      </code>
      <div data-testid="kbd-dock" className="mt-1 h-[440px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Keyboard demo" onLayoutChange={setLayout} />
      </div>
    </KeyboardProvider>
  )
}

// ── The demo IDE: a small project, its panels and the default layout ──────────

/** One file's text from its lines. */
function lines(...text: string[]): string {
  return \`\${text.join("\\n")}\\n\`
}

/** The demo project's files: path → lines. */
const FILES: Readonly<Record<string, string>> = {
  "src/main.ts": lines('import { createApp } from "./app"', 'import { loadConfig } from "./config"', "", "// Boot the app once the config is in.", "export async function main(): Promise<void> {", "  const config = await loadConfig()", "  createApp(config).listen(config.port)", "}", "", "void main()"),
  "src/app.ts": lines('import type { Config } from "./config"', "", "export function createApp(config: Config) {", "  const routes = new Map<string, () => string>()", '  routes.set("/", () => "ok")', '  routes.set("/health", () => JSON.stringify({ up: true, env: config.env }))', '  return { listen: (port: number) => console.log("listening on", port) }', "}"),
  "src/config.ts": lines("export interface Config {", "  readonly port: number", '  readonly env: "dev" | "prod"', "}", "", "export async function loadConfig(): Promise<Config> {", '  return { port: Number(process.env.PORT ?? 3000), env: "dev" }', "}"),
  "src/styles.css": lines(":root {", "  --accent: #2563eb;", "}"),
  "README.md": lines("# demo-app", "", "A tiny server: \`pnpm dev\` runs it with reload."),
  "package.json": lines('{ "name": "demo-app", "private": true, "type": "module" }'),
}

type EditorParams = { path: string }

/** The editor: line numbers and the file's text (stub: replace with your editor). */
function Editor({ params }: PanelProps<EditorParams>) {
  const lines = (FILES[params.path] ?? \`// \${params.path}\\n\`).replace(/\\n$/, "").split("\\n")
  return (
    // Code reads left to right in a right-to-left page too.
    <div dir="ltr" className="flex min-h-full font-mono text-[12px] leading-[19px]">
      <div aria-hidden="true" className="sticky left-0 shrink-0 select-none bg-background px-3 py-2 text-right text-muted-foreground tabular-nums">
        {lines.map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <pre className="m-0 min-w-0 flex-1 py-2 pr-4 whitespace-pre" aria-label={\`Contents of \${params.path}\`}>
        {lines.map((line, i) => (
          <div key={i} className="min-h-[19px]">
            {line}
          </div>
        ))}
      </pre>
    </div>
  )
}

/** Opens \`path\` as a tab in the editor group (or the active group once the editor group is gone). */
function openFile(api: DockApi, path: string): void {
  const editor = api.getLayout().nodes.editor
  api.addPanel({ id: path, component: "editor", title: path.split("/").pop() ?? path, params: { path } }, editor?.kind === "group" ? { type: "group", group: "editor" } : undefined)
}

/** The explorer: every file; clicking one opens it. */
function Explorer() {
  const api = useDock()
  return (
    <nav aria-label="Project files" className="py-1 text-[12.5px]">
      <div className="px-3 pt-1 pb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">demo-app</div>
      <ul>
        {Object.keys(FILES).map((path) => (
          <li key={path}>
            <button type="button" data-file={path} onClick={() => openFile(api, path)} className="flex h-6 w-full items-center px-3 text-left hover:bg-muted focus-visible:bg-muted focus-visible:outline-none">
              {path}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/** A terminal whose history lives in component state: it survives tab switches, moves, floats and popouts because panels stay mounted. */
function Terminal() {
  const [lines, setLines] = useState<readonly string[]>(["$ pnpm dev", "> tsx watch src/main.ts", "listening on :3000"])
  const [input, setInput] = useState("")
  return (
    <div dir="ltr" className="flex min-h-full flex-col bg-zinc-950 p-2 font-mono text-[12px] leading-[18px] text-zinc-200">
      {lines.map((l, i) => (
        <div key={i} className={l.startsWith("$") ? "text-sky-300" : undefined}>
          {l}
        </div>
      ))}
      <form
        className="flex gap-1"
        onSubmit={(e) => {
          e.preventDefault()
          if (!input.trim()) return
          setLines((ls) => [...ls, \`$ \${input}\`, \`\${input.split(" ")[0]}: done\`])
          setInput("")
        }}
      >
        <span className="text-sky-300">$</span>
        <input aria-label="Terminal input" data-terminal-input="" value={input} onChange={(e) => setInput(e.target.value)} className="min-w-0 flex-1 bg-transparent text-zinc-100 outline-none" />
      </form>
    </div>
  )
}

const PROBLEMS = [
  { at: "src/app.ts:6", text: "'config.env' is read but never validated", warning: true },
  { at: "src/config.ts:7", text: "Prefer a schema for environment variables", warning: false },
] as const

function Problems() {
  return (
    <ul className="py-1 text-[12.5px]">
      {PROBLEMS.map((p) => (
        <li key={p.text} className="flex h-[22px] min-w-0 items-center gap-2 px-3 whitespace-nowrap">
          <span className={p.warning ? "text-amber-700 dark:text-amber-400" : "text-sky-700 dark:text-sky-400"}>{p.warning ? "▲" : "●"}</span>
          <span className="min-w-0 truncate">{p.text}</span>
          <span className="shrink-0 text-muted-foreground">{p.at}</span>
        </li>
      ))}
    </ul>
  )
}

function Output() {
  return <pre className="m-0 p-2 font-mono text-[12px] leading-[18px] text-muted-foreground">{"[info] build started\\n[info] 3 modules transformed\\n[info] built in 212ms"}</pre>
}

function Outline() {
  return (
    <ul className="py-1 text-[12.5px]" aria-label="Symbols">
      {["main()", "createApp(config)", "routes", "loadConfig()"].map((s) => (
        <li key={s} className="flex h-[22px] items-center gap-2 px-3">
          <span className="font-mono text-[10px] text-violet-600 dark:text-violet-300">ƒ</span>
          {s}
        </li>
      ))}
    </ul>
  )
}

function Search() {
  const [q, setQ] = useState("")
  const hits = q ? Object.keys(FILES).filter((path) => (FILES[path] ?? "").toLowerCase().includes(q.toLowerCase())) : []
  return (
    <div className="p-2 text-[12.5px]">
      <input aria-label="Search files" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="h-7 w-full rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring" />
      <ul className="mt-2">
        {hits.map((h) => (
          <li key={h} className="h-[22px] truncate">
            {h}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** The panel registry: saved layouts name these keys, never components. Tool panels with an icon show in an activity bar. */
const panels = defineDockPanels({
  editor: { component: Editor, kind: "document" },
  explorer: { component: Explorer, kind: "tool", title: "Explorer", icon: <FilesIcon size={20} strokeWidth={1.5} aria-hidden /> },
  search: { component: Search, kind: "tool", title: "Search", icon: <SearchIcon size={20} strokeWidth={1.5} aria-hidden /> },
  terminal: { component: Terminal, kind: "tool", title: "Terminal" },
  problems: { component: Problems, kind: "tool", title: "Problems" },
  output: { component: Output, kind: "tool", title: "Output" },
  outline: { component: Outline, kind: "tool", title: "Outline", icon: <ListTreeIcon size={20} strokeWidth={1.5} aria-hidden /> },
})

const file = (path: string) => ({ id: path, component: "editor", title: path.split("/").pop() ?? path, params: { path }, kind: "document" as const })

/** The IDE: an activity bar with explorer and search (a left border), six files over the terminal group, and the outline. */
function ideLayout(): DockLayout {
  return createLayout(
    {
      orientation: "horizontal",
      children: [
        {
          orientation: "vertical",
          size: 0.8,
          priority: "high",
          children: [
            { id: "editor", size: 0.7, minPx: 120, keepWhenEmpty: true, panels: Object.keys(FILES).map(file) },
            { id: "bottom", size: 0.3, minPx: 80, collapsible: true, collapsedPx: 0, panels: [{ id: "terminal", component: "terminal", title: "Terminal", kind: "tool" }, { id: "problems", component: "problems", title: "Problems", kind: "tool" }, { id: "output", component: "output", title: "Output", kind: "tool" }] },
          ],
        },
        { id: "right", size: 0.2, minPx: 140, maxPx: 420, priority: "low", collapsible: true, panels: [{ id: "outline", component: "outline", title: "Outline", kind: "tool" }] },
      ],
    },
    { borders: { left: { panels: [{ id: "explorer", component: "explorer", title: "Explorer", kind: "tool" }, { id: "search", component: "search", title: "Search", kind: "tool" }], open: "explorer", sizePx: 220 } } },
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>l(()=>import(`./keyboard-CekBeBJx.js`),[]));function V({title:e}){return(0,C.jsxs)(`p`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[e,`: focus a tab and try the keys below.`]})}var H=g({note:{component:V}}),U=f({orientation:`horizontal`,children:[{panels:[{id:`a.ts`,component:`note`},{id:`b.ts`,component:`note`}]},{panels:[{id:`c.ts`,component:`note`}]}]});function W({api:e}){return x(e,{regions:!0}),null}function G(){let e=o();return(0,C.jsxs)(`table`,{className:`w-full text-[12px]`,"data-testid":`dock-bindings`,children:[(0,C.jsx)(`thead`,{children:(0,C.jsxs)(`tr`,{className:`text-left text-muted-foreground`,children:[(0,C.jsx)(`th`,{className:`py-1 pe-3 font-medium`,children:`Command`}),(0,C.jsx)(`th`,{className:`py-1 font-medium`,children:`Default key`})]})}),(0,C.jsx)(`tbody`,{children:b.map(t=>{let n=e.commands.get(t.command)?.spec;return(0,C.jsxs)(`tr`,{className:`border-t`,children:[(0,C.jsx)(`td`,{className:`py-1 pe-3`,children:n?a(n.title):t.command}),(0,C.jsx)(`td`,{className:`py-1`,children:(0,C.jsx)(c,{binding:t.key})})]},t.command)})})]})}function K(){let[e,t]=(0,S.useState)(null);return(0,C.jsxs)(s,{children:[(0,C.jsx)(v,{}),(0,C.jsx)(W,{api:e}),(0,C.jsx)(`div`,{className:`mb-2 h-[120px] overflow-hidden rounded-md border`,children:(0,C.jsx)(m,{ref:t,panels:H,defaultLayout:U,parts:_,label:`Key bindings demo`})}),(0,C.jsx)(G,{})]})}var q=`import { KeyboardProvider, messageText, ProviderKbd, useKeyboard } from "@kitora/keyboard"
import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, type DockApi, type PanelProps } from "@kitora/dock"
import { DEFAULT_DOCK_KEYBINDINGS, useDockKeyboard } from "@kitora/dock/keyboard"

// stub: replace with your panels
function Note({ title }: PanelProps) {
  return <p className="p-3 text-[12.5px] text-muted-foreground">{title}: focus a tab and try the keys below.</p>
}

const panels = defineDockPanels({ note: { component: Note } })

const layout = createLayout({
  orientation: "horizontal",
  children: [{ panels: [{ id: "a.ts", component: "note" }, { id: "b.ts", component: "note" }] }, { panels: [{ id: "c.ts", component: "note" }] }],
})

/** Registers the dock's commands (and F6 regions) on the KeyboardProvider while mounted. */
function DockKeys({ api }: { readonly api: DockApi | null }) {
  useDockKeyboard(api, { regions: true })
  return null
}

/** The default bindings with their command titles, read from the live command registry. */
function BindingTable() {
  const kb = useKeyboard()
  return (
    <table className="w-full text-[12px]" data-testid="dock-bindings">
      <thead>
        <tr className="text-left text-muted-foreground">
          <th className="py-1 pe-3 font-medium">Command</th>
          <th className="py-1 font-medium">Default key</th>
        </tr>
      </thead>
      <tbody>
        {DEFAULT_DOCK_KEYBINDINGS.map((rule) => {
          const spec = kb.commands.get(rule.command)?.spec
          return (
            <tr key={rule.command} className="border-t">
              <td className="py-1 pe-3">{spec ? messageText(spec.title) : rule.command}</td>
              <td className="py-1">
                <ProviderKbd binding={rule.key} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

/** Every dock command and its default key, read from the commands the dock registered; rebind any of them through the keyboard kit's user layer. */
export function DefaultKeys() {
  const [api, setApi] = useState<DockApi | null>(null)
  return (
    <KeyboardProvider>
      <DockStyles />
      <DockKeys api={api} />
      <div className="mb-2 h-[120px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Key bindings demo" />
      </div>
      <BindingTable />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>l(()=>import(`./keyboard-keys-BKWixsfF.js`),[]));function J(){return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(t,{title:`Keyboard and accessibility`,children:`Everything the mouse does, the keyboard does too. Every layout action is a command you can rebind, find in a palette and see in a cheatsheet. Pick a tab up with Space and place it with the arrow keys; a screen reader hears where it is going, and focus lands on the tab where it ended up.`}),(0,C.jsx)(y,{n:1,title:`Keyboard docking and commands`,blurb:`Click a tab, press Space: the tab is held. Arrow keys move the drop zone through the group's edges and on to its neighbours, Tab jumps between groups, Enter drops, Escape puts it back. Ctrl+Shift+PageUp / PageDown move a tab along its strip; Ctrl+K then 1, 2, 3 focus a group; Ctrl+\\ splits right; Ctrl+B toggles the side bar; F6 cycles through the groups and borders.`,code:B,children:(0,C.jsx)(T,{})}),(0,C.jsx)(y,{n:2,title:`Default keys`,blurb:`Mod is Ctrl on Windows and Linux, Cmd on macOS. Browsers keep Mod+1…9 and Mod+W for their own tabs, so group focus is the chord Mod+K then a digit and closing a tab is Alt+W. Rebind any of them through the keyboard kit's user layer. The small dock registers the commands the table reads; try the keys on it.`,code:q,children:(0,C.jsx)(K,{})})]})}export{J as component};