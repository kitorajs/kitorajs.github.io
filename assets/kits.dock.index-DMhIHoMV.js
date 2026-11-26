import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t,y as n}from"./kit-docs-CvNs0WqT.js";import{t as r}from"./list-tree-Cy7swhou.js";import{t as i}from"./search-BZ0gLa1o.js";import{t as a}from"./provider-D0Iw1w2F.js";import{Bc as o,Cc as s,Ic as c,Oc as l}from"./index-9y5uwRd3.js";import{g as u,h as d,t as f,u as p}from"./dock-B6jyBTRi.js";import{t as m}from"./panels-COzw_Krp.js";import{n as h,r as g}from"./parts-x1DgzehZ.js";import"./kit-gallery-B-Yr9fP4.js";import{t as _}from"./example-CZLJLtIC.js";import{t as v}from"./hook-nu5mjY5U.js";import{t as y}from"./popout-Ciz53ud2.js";var b=e(o(),1),x=c(),S=y(),C=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50`;function w({api:e}){return v(e,{regions:!0}),null}function T(){let[e]=(0,b.useState)(z),[t,n]=(0,b.useState)(e),[r,i]=(0,b.useState)(null),[o,s]=(0,b.useState)(null),[c,l]=(0,b.useState)(``);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{}),(0,x.jsxs)(`div`,{className:`mb-2 flex flex-wrap items-center gap-1.5 text-[12px]`,children:[(0,x.jsx)(`button`,{type:`button`,className:C,"data-action":`save`,onClick:()=>{r&&(s(JSON.stringify(r.save())),l(`Saved.`))},children:`Save layout`}),(0,x.jsx)(`button`,{type:`button`,className:C,"data-action":`restore`,disabled:o===null,onClick:()=>r&&o!==null&&l(`Restore: ${r.load(o).outcome}.`),children:`Restore saved`}),(0,x.jsx)(`button`,{type:`button`,className:C,"data-action":`reset`,onClick:()=>r?.reset(),children:`Reset`}),(0,x.jsx)(`span`,{className:`ml-1 text-muted-foreground`,children:c}),(0,x.jsx)(`code`,{"data-testid":`dock-outline`,className:`ml-auto max-w-full truncate font-mono text-[11px] text-muted-foreground`,title:d(t),children:d(t)})]}),(0,x.jsxs)(`div`,{className:`mb-2 flex flex-wrap items-center gap-1.5 text-[12px]`,children:[(0,x.jsx)(`button`,{type:`button`,className:C,"data-action":`float-terminal`,onClick:()=>r?.float(`terminal`),children:`Float the terminal`}),(0,x.jsx)(`button`,{type:`button`,className:C,"data-action":`popout-outline`,onClick:()=>void r?.popout(`outline`),children:`Pop out the outline`}),(0,x.jsx)(`button`,{type:`button`,className:C,"data-action":`keyboard-dock`,onClick:()=>r?.startKeyboardDock(`src/app.ts`),children:`Move app.ts with the keyboard`}),(0,x.jsx)(`span`,{className:`text-muted-foreground`,children:`Space on a focused tab picks it up; arrows choose, Enter drops, Esc cancels. Shift-drag a floating window's title bar onto the dock to dock it back.`})]}),(0,x.jsx)(`div`,{"data-testid":`ide-dock`,className:`h-[560px] overflow-hidden rounded-md border`,children:(0,x.jsxs)(a,{children:[(0,x.jsx)(w,{api:r}),(0,x.jsx)(f,{ref:i,panels:L,defaultLayout:e,parts:h,label:`IDE`,popoutHost:S,onLayoutChange:n})]})})]})}function E(...e){return`${e.join(`
`)}\n`}var D={"src/main.ts":E(`import { createApp } from "./app"`,`import { loadConfig } from "./config"`,``,`// Boot the app once the config is in.`,`export async function main(): Promise<void> {`,`  const config = await loadConfig()`,`  createApp(config).listen(config.port)`,`}`,``,`void main()`),"src/app.ts":E(`import type { Config } from "./config"`,``,`export function createApp(config: Config) {`,`  const routes = new Map<string, () => string>()`,`  routes.set("/", () => "ok")`,`  routes.set("/health", () => JSON.stringify({ up: true, env: config.env }))`,`  return { listen: (port: number) => console.log("listening on", port) }`,`}`),"src/config.ts":E(`export interface Config {`,`  readonly port: number`,`  readonly env: "dev" | "prod"`,`}`,``,`export async function loadConfig(): Promise<Config> {`,`  return { port: Number(process.env.PORT ?? 3000), env: "dev" }`,`}`),"src/styles.css":E(`:root {`,`  --accent: #2563eb;`,`}`),"README.md":E(`# demo-app`,``,"A tiny server: `pnpm dev` runs it with reload."),"package.json":E(`{ "name": "demo-app", "private": true, "type": "module" }`)};function O({params:e}){let t=(D[e.path]??`// ${e.path}\n`).replace(/\n$/,``).split(`
`);return(0,x.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full font-mono text-[12px] leading-[19px]`,children:[(0,x.jsx)(`div`,{"aria-hidden":`true`,className:`sticky left-0 shrink-0 select-none bg-background px-3 py-2 text-right text-muted-foreground tabular-nums`,children:t.map((e,t)=>(0,x.jsx)(`div`,{children:t+1},t))}),(0,x.jsx)(`pre`,{className:`m-0 min-w-0 flex-1 py-2 pr-4 whitespace-pre`,"aria-label":`Contents of ${e.path}`,children:t.map((e,t)=>(0,x.jsx)(`div`,{className:`min-h-[19px]`,children:e},t))})]})}function k(e,t){let n=e.getLayout().nodes.editor;e.addPanel({id:t,component:`editor`,title:t.split(`/`).pop()??t,params:{path:t}},n?.kind===`group`?{type:`group`,group:`editor`}:void 0)}function A(){let e=p();return(0,x.jsxs)(`nav`,{"aria-label":`Project files`,className:`py-1 text-[12.5px]`,children:[(0,x.jsx)(`div`,{className:`px-3 pt-1 pb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:`demo-app`}),(0,x.jsx)(`ul`,{children:Object.keys(D).map(t=>(0,x.jsx)(`li`,{children:(0,x.jsx)(`button`,{type:`button`,"data-file":t,onClick:()=>k(e,t),className:`flex h-6 w-full items-center px-3 text-left hover:bg-muted focus-visible:bg-muted focus-visible:outline-none`,children:t})},t))})]})}function j(){let[e,t]=(0,b.useState)([`$ pnpm dev`,`> tsx watch src/main.ts`,`listening on :3000`]),[n,r]=(0,b.useState)(``);return(0,x.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full flex-col bg-zinc-950 p-2 font-mono text-[12px] leading-[18px] text-zinc-200`,children:[e.map((e,t)=>(0,x.jsx)(`div`,{className:e.startsWith(`$`)?`text-sky-300`:void 0,children:e},t)),(0,x.jsxs)(`form`,{className:`flex gap-1`,onSubmit:e=>{e.preventDefault(),n.trim()&&(t(e=>[...e,`$ ${n}`,`${n.split(` `)[0]}: done`]),r(``))},children:[(0,x.jsx)(`span`,{className:`text-sky-300`,children:`$`}),(0,x.jsx)(`input`,{"aria-label":`Terminal input`,"data-terminal-input":``,value:n,onChange:e=>r(e.target.value),className:`min-w-0 flex-1 bg-transparent text-zinc-100 outline-none`})]})]})}var M=[{at:`src/app.ts:6`,text:`'config.env' is read but never validated`,warning:!0},{at:`src/config.ts:7`,text:`Prefer a schema for environment variables`,warning:!1}];function N(){return(0,x.jsx)(`ul`,{className:`py-1 text-[12.5px]`,children:M.map(e=>(0,x.jsxs)(`li`,{className:`flex h-[22px] min-w-0 items-center gap-2 px-3 whitespace-nowrap`,children:[(0,x.jsx)(`span`,{className:e.warning?`text-amber-700 dark:text-amber-400`:`text-sky-700 dark:text-sky-400`,children:e.warning?`▲`:`●`}),(0,x.jsx)(`span`,{className:`min-w-0 truncate`,children:e.text}),(0,x.jsx)(`span`,{className:`shrink-0 text-muted-foreground`,children:e.at})]},e.text))})}function P(){return(0,x.jsx)(`pre`,{className:`m-0 p-2 font-mono text-[12px] leading-[18px] text-muted-foreground`,children:`[info] build started
[info] 3 modules transformed
[info] built in 212ms`})}function F(){return(0,x.jsx)(`ul`,{className:`py-1 text-[12.5px]`,"aria-label":`Symbols`,children:[`main()`,`createApp(config)`,`routes`,`loadConfig()`].map(e=>(0,x.jsxs)(`li`,{className:`flex h-[22px] items-center gap-2 px-3`,children:[(0,x.jsx)(`span`,{className:`font-mono text-[10px] text-violet-600 dark:text-violet-300`,children:`ƒ`}),e]},e))})}function I(){let[e,t]=(0,b.useState)(``),n=e?Object.keys(D).filter(t=>(D[t]??``).toLowerCase().includes(e.toLowerCase())):[];return(0,x.jsxs)(`div`,{className:`p-2 text-[12.5px]`,children:[(0,x.jsx)(`input`,{"aria-label":`Search files`,value:e,onChange:e=>t(e.target.value),placeholder:`Search`,className:`h-7 w-full rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring`}),(0,x.jsx)(`ul`,{className:`mt-2`,children:n.map(e=>(0,x.jsx)(`li`,{className:`h-[22px] truncate`,children:e},e))})]})}var L=m({editor:{component:O,kind:`document`},explorer:{component:A,kind:`tool`,title:`Explorer`,icon:(0,x.jsx)(n,{size:20,strokeWidth:1.5,"aria-hidden":!0})},search:{component:I,kind:`tool`,title:`Search`,icon:(0,x.jsx)(i,{size:20,strokeWidth:1.5,"aria-hidden":!0})},terminal:{component:j,kind:`tool`,title:`Terminal`},problems:{component:N,kind:`tool`,title:`Problems`},output:{component:P,kind:`tool`,title:`Output`},outline:{component:F,kind:`tool`,title:`Outline`,icon:(0,x.jsx)(r,{size:20,strokeWidth:1.5,"aria-hidden":!0})}}),R=e=>({id:e,component:`editor`,title:e.split(`/`).pop()??e,params:{path:e},kind:`document`});function z(){return u({orientation:`horizontal`,children:[{orientation:`vertical`,size:.8,priority:`high`,children:[{id:`editor`,size:.7,minPx:120,keepWhenEmpty:!0,panels:Object.keys(D).map(R)},{id:`bottom`,size:.3,minPx:80,collapsible:!0,collapsedPx:0,panels:[{id:`terminal`,component:`terminal`,title:`Terminal`,kind:`tool`},{id:`problems`,component:`problems`,title:`Problems`,kind:`tool`},{id:`output`,component:`output`,title:`Output`,kind:`tool`}]}]},{id:`right`,size:.2,minPx:140,maxPx:420,priority:`low`,collapsible:!0,panels:[{id:`outline`,component:`outline`,title:`Outline`,kind:`tool`}]}]},{borders:{left:{panels:[{id:`explorer`,component:`explorer`,title:`Explorer`,kind:`tool`},{id:`search`,component:`search`,title:`Search`,kind:`tool`}],open:`explorer`,sizePx:220}}})}var B=`import { KeyboardProvider } from "@kitora/keyboard"
import { FilesIcon, ListTreeIcon, SearchIcon } from "lucide-react"
import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, useDock, type DockApi, type DockLayout, type PanelProps, type TypedDockApi } from "@kitora/dock"
import { useDockKeyboard } from "@kitora/dock/keyboard"
import { browserPopoutHost } from "@kitora/dock/popout"

/** One popout host for the app: real browser windows (an Electron or Tauri app passes its own). */
const popouts = browserPopoutHost()

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50"

/** Installs the dock's keyboard commands and F6 regions on the nearest KeyboardProvider while mounted. */
function DockKeys({ api }: { readonly api: DockApi | null }) {
  useDockKeyboard(api, { regions: true })
  return null
}

/** A whole IDE: drag tabs anywhere, maximise, collapse the side bar, open files, save and restore, float, pop out and dock by keyboard. */
export function IdeWorkbench() {
  const [initial] = useState(ideLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  const [saved, setSaved] = useState<string | null>(null)
  const [note, setNote] = useState("")
  return (
    <>
      <DockStyles />
      <div className="mb-2 flex flex-wrap items-center gap-1.5 text-[12px]">
        <button
          type="button"
          className={BUTTON}
          data-action="save"
          onClick={() => {
            if (!api) return
            setSaved(JSON.stringify(api.save()))
            setNote("Saved.")
          }}
        >
          Save layout
        </button>
        <button type="button" className={BUTTON} data-action="restore" disabled={saved === null} onClick={() => api && saved !== null && setNote(\`Restore: \${api.load(saved).outcome}.\`)}>
          Restore saved
        </button>
        <button type="button" className={BUTTON} data-action="reset" onClick={() => api?.reset()}>
          Reset
        </button>
        <span className="ml-1 text-muted-foreground">{note}</span>
        <code data-testid="dock-outline" className="ml-auto max-w-full truncate font-mono text-[11px] text-muted-foreground" title={layoutOutline(layout)}>
          {layoutOutline(layout)}
        </code>
      </div>
      <div className="mb-2 flex flex-wrap items-center gap-1.5 text-[12px]">
        <button type="button" className={BUTTON} data-action="float-terminal" onClick={() => api?.float("terminal")}>
          Float the terminal
        </button>
        <button type="button" className={BUTTON} data-action="popout-outline" onClick={() => void api?.popout("outline")}>
          Pop out the outline
        </button>
        <button type="button" className={BUTTON} data-action="keyboard-dock" onClick={() => api?.startKeyboardDock("src/app.ts")}>
          Move app.ts with the keyboard
        </button>
        <span className="text-muted-foreground">Space on a focused tab picks it up; arrows choose, Enter drops, Esc cancels. Shift-drag a floating window's title bar onto the dock to dock it back.</span>
      </div>
      <div data-testid="ide-dock" className="h-[560px] overflow-hidden rounded-md border">
        <KeyboardProvider>
          <DockKeys api={api} />
          <Dock ref={setApi} panels={panels} defaultLayout={initial} parts={DOCK_UI} label="IDE" popoutHost={popouts} onLayoutChange={setLayout} />
        </KeyboardProvider>
      </div>
    </>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>s(()=>import(`./ide-wUzXt4ac.js`),[]));var V=[{name:`core`,what:`N-ary layout tree as a map of nodes, the reducer and normaliser, the size solver (fractions, px min / max, priorities, collapse), save / restore / migrate, invariants. No DOM.`},{name:`dom`,what:`Keep-alive panel host (moveBefore, with parking where it is missing), ResizeObserver measurement, animated commits, localStorage adapters.`},{name:`react`,what:`SplitView, <Dock> controlled / uncontrolled / declarative, tab groups, the docking drag and drop overlay, borders and side panels, maximise and zen, storage, panel events, error boundaries, async panels.`},{name:`ui`,what:`The stylesheet, tab context menu, overflow menu, group actions, watermark, unknown-panel placeholder, drop overlay, activity bar and border header.`},{name:`floats and popouts`,what:`Floating sub-layouts in @kitora/windows windows (dock back by dragging a tab, or the title bar with Shift), real browser windows rendered by portal, closing a popout docks it back.`},{name:`keyboard`,what:`@kitora/dock/keyboard: every layout action as a command, F6 regions, keyboard docking with the arrows, announcements.`},{name:`touch, RTL, theming, devtools`,what:`Long-press tab drag, bigger touch targets, right-to-left mirroring, tokens and density, a 200-panel stress page, SSR, @kitora/dock/devtools.`}];function H(){return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(t,{title:`Dock kit`,children:`A docking layout for IDE-like apps: panels in tab groups, groups in nested splits, an activity bar with side panels, tabs that dock anywhere by drag, groups that maximise, and the whole layout as plain JSON that saves and restores. Built in layers on a framework-free core.`}),(0,x.jsx)(_,{n:1,title:`An IDE layout`,blurb:`Drag a tab onto another group's edge to split it, onto its centre to join it, or onto the dock's outer edge for a full-height column; the overlay shows where it lands, Escape cancels. Maximise the editor from its header (or double-click its empty strip). Click the explorer's activity-bar icon to collapse the side bar. Drag a sash to resize (the outline keeps its width when the window changes; the editor absorbs it), or focus it and use the arrow keys. Right-click a tab for close, split, move and zen. Type in the terminal, move it anywhere: it keeps its state.`,code:B,children:(0,x.jsx)(T,{})}),(0,x.jsxs)(_,{n:2,title:`Layers`,blurb:`Every layer ships today; listed in build order.`,children:[(0,x.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,x.jsx)(`tbody`,{children:V.map(e=>(0,x.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,x.jsx)(`td`,{className:`py-1.5 pr-3 font-mono text-[12px]`,children:e.name}),(0,x.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})}),(0,x.jsxs)(`p`,{className:`mt-3 text-[12px] text-muted-foreground`,children:[`In detail:`,` `,(0,x.jsx)(l,{to:`/kits/dock/splits`,className:`underline underline-offset-2 hover:text-foreground`,children:`Splits`}),` · `,(0,x.jsx)(l,{to:`/kits/dock/tabs`,className:`underline underline-offset-2 hover:text-foreground`,children:`Tab groups`}),` · `,(0,x.jsx)(l,{to:`/kits/dock/drag`,className:`underline underline-offset-2 hover:text-foreground`,children:`Docking drag`}),` · `,(0,x.jsx)(l,{to:`/kits/dock/borders`,className:`underline underline-offset-2 hover:text-foreground`,children:`Borders`}),` · `,(0,x.jsx)(l,{to:`/kits/dock/maximise`,className:`underline underline-offset-2 hover:text-foreground`,children:`Maximise`}),` · `,(0,x.jsx)(l,{to:`/kits/dock/lifecycle`,className:`underline underline-offset-2 hover:text-foreground`,children:`Lifecycle`}),` · `,(0,x.jsx)(l,{to:`/kits/dock/persist`,className:`underline underline-offset-2 hover:text-foreground`,children:`Persistence`}),` · `,(0,x.jsx)(l,{to:`/kits/dock/api`,className:`underline underline-offset-2 hover:text-foreground`,children:`React API`}),`.`]})]})]})}export{H as component};