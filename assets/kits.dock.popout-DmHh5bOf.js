import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t,y as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./list-tree-DkhuawaG.js";import{t as i}from"./search-D4xjEJsY.js";import{Bc as a,Cc as o,Ic as s}from"./index-B9ukmIN1.js";import{g as c,h as l,t as u,u as d}from"./dock-B0qddSVd.js";import{t as f}from"./panels-COzw_Krp.js";import{n as p,r as m}from"./parts-C6pvJFbp.js";import"./kit-gallery-Bph7isB2.js";import{t as h}from"./example-BGnSQG2Y.js";import{t as g}from"./popout-Ciz53ud2.js";var _=e(a(),1),v=s(),y=g(),b=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`;function x(){let[e]=(0,_.useState)(P),[t,n]=(0,_.useState)(e),[r,i]=(0,_.useState)(null),a=Object.entries(t.floats??{}).filter(([,e])=>e.popout);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{}),(0,v.jsxs)(`div`,{className:`mb-1 flex flex-wrap items-center gap-1.5 text-[12px]`,children:[(0,v.jsx)(`button`,{type:`button`,className:b,"data-action":`popout-terminal`,onClick:()=>void r?.popout(`terminal`),children:`Pop out the terminal`}),(0,v.jsx)(`button`,{type:`button`,className:b,"data-action":`pip-outline`,onClick:()=>void r?.popout(`outline`,`picture-in-picture`),children:`Outline in picture-in-picture`}),(0,v.jsx)(`button`,{type:`button`,className:b,"data-action":`pip-terminal`,onClick:()=>void r?.popout(`terminal`,`picture-in-picture`),children:`Terminal in picture-in-picture`}),a.map(([e])=>(0,v.jsxs)(`button`,{type:`button`,className:b,"data-action":`dock-${e}`,onClick:()=>r?.dockFloat(e),children:[`Dock `,e,` back`]},e)),(0,v.jsxs)(`span`,{"data-testid":`popout-count`,className:`ml-1 font-mono text-[11px] text-muted-foreground`,children:[a.length,` popout(s)`]})]}),(0,v.jsx)(`code`,{"data-testid":`popout-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:l(t)}),(0,v.jsx)(`div`,{"data-testid":`popout-dock`,className:`mt-1 h-[440px] overflow-hidden rounded-md border`,children:(0,v.jsx)(u,{ref:i,panels:M,defaultLayout:e,parts:p,label:`Popout demo`,popoutHost:y,onLayoutChange:n})})]})}function S(...e){return`${e.join(`
`)}\n`}var C={"src/main.ts":S(`import { createApp } from "./app"`,`import { loadConfig } from "./config"`,``,`// Boot the app once the config is in.`,`export async function main(): Promise<void> {`,`  const config = await loadConfig()`,`  createApp(config).listen(config.port)`,`}`,``,`void main()`),"src/app.ts":S(`import type { Config } from "./config"`,``,`export function createApp(config: Config) {`,`  const routes = new Map<string, () => string>()`,`  routes.set("/", () => "ok")`,`  routes.set("/health", () => JSON.stringify({ up: true, env: config.env }))`,`  return { listen: (port: number) => console.log("listening on", port) }`,`}`),"src/config.ts":S(`export interface Config {`,`  readonly port: number`,`  readonly env: "dev" | "prod"`,`}`,``,`export async function loadConfig(): Promise<Config> {`,`  return { port: Number(process.env.PORT ?? 3000), env: "dev" }`,`}`),"src/styles.css":S(`:root {`,`  --accent: #2563eb;`,`}`),"README.md":S(`# demo-app`,``,"A tiny server: `pnpm dev` runs it with reload."),"package.json":S(`{ "name": "demo-app", "private": true, "type": "module" }`)};function ee({params:e}){let t=(C[e.path]??`// ${e.path}\n`).replace(/\n$/,``).split(`
`);return(0,v.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full font-mono text-[12px] leading-[19px]`,children:[(0,v.jsx)(`div`,{"aria-hidden":`true`,className:`sticky left-0 shrink-0 select-none bg-background px-3 py-2 text-right text-muted-foreground tabular-nums`,children:t.map((e,t)=>(0,v.jsx)(`div`,{children:t+1},t))}),(0,v.jsx)(`pre`,{className:`m-0 min-w-0 flex-1 py-2 pr-4 whitespace-pre`,"aria-label":`Contents of ${e.path}`,children:t.map((e,t)=>(0,v.jsx)(`div`,{className:`min-h-[19px]`,children:e},t))})]})}function w(e,t){let n=e.getLayout().nodes.editor;e.addPanel({id:t,component:`editor`,title:t.split(`/`).pop()??t,params:{path:t}},n?.kind===`group`?{type:`group`,group:`editor`}:void 0)}function T(){let e=d();return(0,v.jsxs)(`nav`,{"aria-label":`Project files`,className:`py-1 text-[12.5px]`,children:[(0,v.jsx)(`div`,{className:`px-3 pt-1 pb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:`demo-app`}),(0,v.jsx)(`ul`,{children:Object.keys(C).map(t=>(0,v.jsx)(`li`,{children:(0,v.jsx)(`button`,{type:`button`,"data-file":t,onClick:()=>w(e,t),className:`flex h-6 w-full items-center px-3 text-left hover:bg-muted focus-visible:bg-muted focus-visible:outline-none`,children:t})},t))})]})}function E(){let[e,t]=(0,_.useState)([`$ pnpm dev`,`> tsx watch src/main.ts`,`listening on :3000`]),[n,r]=(0,_.useState)(``);return(0,v.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full flex-col bg-zinc-950 p-2 font-mono text-[12px] leading-[18px] text-zinc-200`,children:[e.map((e,t)=>(0,v.jsx)(`div`,{className:e.startsWith(`$`)?`text-sky-300`:void 0,children:e},t)),(0,v.jsxs)(`form`,{className:`flex gap-1`,onSubmit:e=>{e.preventDefault(),n.trim()&&(t(e=>[...e,`$ ${n}`,`${n.split(` `)[0]}: done`]),r(``))},children:[(0,v.jsx)(`span`,{className:`text-sky-300`,children:`$`}),(0,v.jsx)(`input`,{"aria-label":`Terminal input`,"data-terminal-input":``,value:n,onChange:e=>r(e.target.value),className:`min-w-0 flex-1 bg-transparent text-zinc-100 outline-none`})]})]})}var D=[{at:`src/app.ts:6`,text:`'config.env' is read but never validated`,warning:!0},{at:`src/config.ts:7`,text:`Prefer a schema for environment variables`,warning:!1}];function O(){return(0,v.jsx)(`ul`,{className:`py-1 text-[12.5px]`,children:D.map(e=>(0,v.jsxs)(`li`,{className:`flex h-[22px] min-w-0 items-center gap-2 px-3 whitespace-nowrap`,children:[(0,v.jsx)(`span`,{className:e.warning?`text-amber-700 dark:text-amber-400`:`text-sky-700 dark:text-sky-400`,children:e.warning?`▲`:`●`}),(0,v.jsx)(`span`,{className:`min-w-0 truncate`,children:e.text}),(0,v.jsx)(`span`,{className:`shrink-0 text-muted-foreground`,children:e.at})]},e.text))})}function k(){return(0,v.jsx)(`pre`,{className:`m-0 p-2 font-mono text-[12px] leading-[18px] text-muted-foreground`,children:`[info] build started
[info] 3 modules transformed
[info] built in 212ms`})}function A(){return(0,v.jsx)(`ul`,{className:`py-1 text-[12.5px]`,"aria-label":`Symbols`,children:[`main()`,`createApp(config)`,`routes`,`loadConfig()`].map(e=>(0,v.jsxs)(`li`,{className:`flex h-[22px] items-center gap-2 px-3`,children:[(0,v.jsx)(`span`,{className:`font-mono text-[10px] text-violet-600 dark:text-violet-300`,children:`ƒ`}),e]},e))})}function j(){let[e,t]=(0,_.useState)(``),n=e?Object.keys(C).filter(t=>(C[t]??``).toLowerCase().includes(e.toLowerCase())):[];return(0,v.jsxs)(`div`,{className:`p-2 text-[12.5px]`,children:[(0,v.jsx)(`input`,{"aria-label":`Search files`,value:e,onChange:e=>t(e.target.value),placeholder:`Search`,className:`h-7 w-full rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring`}),(0,v.jsx)(`ul`,{className:`mt-2`,children:n.map(e=>(0,v.jsx)(`li`,{className:`h-[22px] truncate`,children:e},e))})]})}var M=f({editor:{component:ee,kind:`document`},explorer:{component:T,kind:`tool`,title:`Explorer`,icon:(0,v.jsx)(n,{size:20,strokeWidth:1.5,"aria-hidden":!0})},search:{component:j,kind:`tool`,title:`Search`,icon:(0,v.jsx)(i,{size:20,strokeWidth:1.5,"aria-hidden":!0})},terminal:{component:E,kind:`tool`,title:`Terminal`},problems:{component:O,kind:`tool`,title:`Problems`},output:{component:k,kind:`tool`,title:`Output`},outline:{component:A,kind:`tool`,title:`Outline`,icon:(0,v.jsx)(r,{size:20,strokeWidth:1.5,"aria-hidden":!0})}}),N=e=>({id:e,component:`editor`,title:e.split(`/`).pop()??e,params:{path:e},kind:`document`});function P(){return c({orientation:`horizontal`,children:[{orientation:`vertical`,size:.8,priority:`high`,children:[{id:`editor`,size:.7,minPx:120,keepWhenEmpty:!0,panels:Object.keys(C).map(N)},{id:`bottom`,size:.3,minPx:80,collapsible:!0,collapsedPx:0,panels:[{id:`terminal`,component:`terminal`,title:`Terminal`,kind:`tool`},{id:`problems`,component:`problems`,title:`Problems`,kind:`tool`},{id:`output`,component:`output`,title:`Output`,kind:`tool`}]}]},{id:`right`,size:.2,minPx:140,maxPx:420,priority:`low`,collapsible:!0,panels:[{id:`outline`,component:`outline`,title:`Outline`,kind:`tool`}]}]},{borders:{left:{panels:[{id:`explorer`,component:`explorer`,title:`Explorer`,kind:`tool`},{id:`search`,component:`search`,title:`Search`,kind:`tool`}],open:`explorer`,sizePx:220}}})}var F=`import { FilesIcon, ListTreeIcon, SearchIcon } from "lucide-react"
import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, useDock, type DockApi, type DockLayout, type PanelProps, type TypedDockApi } from "@kitora/dock"
import { browserPopoutHost } from "@kitora/dock/popout"

/** One host for the app: window.open, or Document Picture-in-Picture where asked for. An Electron or Tauri app passes its own PopoutHost. */
const popouts = browserPopoutHost()

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted"

/** A popped-out panel is the same component rendered into the other window by portal, so it keeps its state; closing the window docks it back. */
export function PopoutWorkbench() {
  const [initial] = useState(ideLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  const open = Object.entries(layout.floats ?? {}).filter(([, f]) => f.popout)
  return (
    <>
      <DockStyles />
      <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[12px]">
        <button type="button" className={BUTTON} data-action="popout-terminal" onClick={() => void api?.popout("terminal")}>
          Pop out the terminal
        </button>
        <button type="button" className={BUTTON} data-action="pip-outline" onClick={() => void api?.popout("outline", "picture-in-picture")}>
          Outline in picture-in-picture
        </button>
        <button type="button" className={BUTTON} data-action="pip-terminal" onClick={() => void api?.popout("terminal", "picture-in-picture")}>
          Terminal in picture-in-picture
        </button>
        {open.map(([id]) => (
          <button key={id} type="button" className={BUTTON} data-action={\`dock-\${id}\`} onClick={() => api?.dockFloat(id)}>
            Dock {id} back
          </button>
        ))}
        <span data-testid="popout-count" className="ml-1 font-mono text-[11px] text-muted-foreground">
          {open.length} popout(s)
        </span>
      </div>
      <code data-testid="popout-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(layout)}
      </code>
      <div data-testid="popout-dock" className="mt-1 h-[440px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Popout demo" popoutHost={popouts} onLayoutChange={setLayout} />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>o(()=>import(`./popout-B6wbQ6Dp.js`),[]));var I={open:()=>null},L=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`;function R(){let[e]=(0,_.useState)(Q),[t,n]=(0,_.useState)(e),[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(``);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{}),(0,v.jsxs)(`div`,{className:`mb-1 flex flex-wrap items-center gap-1.5 text-[12px]`,children:[(0,v.jsx)(`button`,{type:`button`,className:L,"data-action":`popout-blocked`,onClick:()=>void r?.popout(`terminal`),children:`Pop out the terminal`}),(0,v.jsx)(`span`,{role:`status`,"data-testid":`blocked-notice`,className:`text-amber-700 dark:text-amber-300`,children:a})]}),(0,v.jsx)(`code`,{"data-testid":`blocked-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:l(t)}),(0,v.jsx)(`div`,{"data-testid":`blocked-dock`,className:`mt-1 h-[360px] overflow-hidden rounded-md border`,children:(0,v.jsx)(u,{ref:i,panels:X,defaultLayout:e,parts:p,label:`Blocked popout demo`,popoutHost:I,onPopoutBlocked:e=>o(`The browser blocked the window, so ${e.title} floats here instead.`),onLayoutChange:n})})]})}function z(...e){return`${e.join(`
`)}\n`}var B={"src/main.ts":z(`import { createApp } from "./app"`,`import { loadConfig } from "./config"`,``,`// Boot the app once the config is in.`,`export async function main(): Promise<void> {`,`  const config = await loadConfig()`,`  createApp(config).listen(config.port)`,`}`,``,`void main()`),"src/app.ts":z(`import type { Config } from "./config"`,``,`export function createApp(config: Config) {`,`  const routes = new Map<string, () => string>()`,`  routes.set("/", () => "ok")`,`  routes.set("/health", () => JSON.stringify({ up: true, env: config.env }))`,`  return { listen: (port: number) => console.log("listening on", port) }`,`}`),"src/config.ts":z(`export interface Config {`,`  readonly port: number`,`  readonly env: "dev" | "prod"`,`}`,``,`export async function loadConfig(): Promise<Config> {`,`  return { port: Number(process.env.PORT ?? 3000), env: "dev" }`,`}`),"src/styles.css":z(`:root {`,`  --accent: #2563eb;`,`}`),"README.md":z(`# demo-app`,``,"A tiny server: `pnpm dev` runs it with reload."),"package.json":z(`{ "name": "demo-app", "private": true, "type": "module" }`)};function V({params:e}){let t=(B[e.path]??`// ${e.path}\n`).replace(/\n$/,``).split(`
`);return(0,v.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full font-mono text-[12px] leading-[19px]`,children:[(0,v.jsx)(`div`,{"aria-hidden":`true`,className:`sticky left-0 shrink-0 select-none bg-background px-3 py-2 text-right text-muted-foreground tabular-nums`,children:t.map((e,t)=>(0,v.jsx)(`div`,{children:t+1},t))}),(0,v.jsx)(`pre`,{className:`m-0 min-w-0 flex-1 py-2 pr-4 whitespace-pre`,"aria-label":`Contents of ${e.path}`,children:t.map((e,t)=>(0,v.jsx)(`div`,{className:`min-h-[19px]`,children:e},t))})]})}function H(e,t){let n=e.getLayout().nodes.editor;e.addPanel({id:t,component:`editor`,title:t.split(`/`).pop()??t,params:{path:t}},n?.kind===`group`?{type:`group`,group:`editor`}:void 0)}function U(){let e=d();return(0,v.jsxs)(`nav`,{"aria-label":`Project files`,className:`py-1 text-[12.5px]`,children:[(0,v.jsx)(`div`,{className:`px-3 pt-1 pb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:`demo-app`}),(0,v.jsx)(`ul`,{children:Object.keys(B).map(t=>(0,v.jsx)(`li`,{children:(0,v.jsx)(`button`,{type:`button`,"data-file":t,onClick:()=>H(e,t),className:`flex h-6 w-full items-center px-3 text-left hover:bg-muted focus-visible:bg-muted focus-visible:outline-none`,children:t})},t))})]})}function W(){let[e,t]=(0,_.useState)([`$ pnpm dev`,`> tsx watch src/main.ts`,`listening on :3000`]),[n,r]=(0,_.useState)(``);return(0,v.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full flex-col bg-zinc-950 p-2 font-mono text-[12px] leading-[18px] text-zinc-200`,children:[e.map((e,t)=>(0,v.jsx)(`div`,{className:e.startsWith(`$`)?`text-sky-300`:void 0,children:e},t)),(0,v.jsxs)(`form`,{className:`flex gap-1`,onSubmit:e=>{e.preventDefault(),n.trim()&&(t(e=>[...e,`$ ${n}`,`${n.split(` `)[0]}: done`]),r(``))},children:[(0,v.jsx)(`span`,{className:`text-sky-300`,children:`$`}),(0,v.jsx)(`input`,{"aria-label":`Terminal input`,"data-terminal-input":``,value:n,onChange:e=>r(e.target.value),className:`min-w-0 flex-1 bg-transparent text-zinc-100 outline-none`})]})]})}var G=[{at:`src/app.ts:6`,text:`'config.env' is read but never validated`,warning:!0},{at:`src/config.ts:7`,text:`Prefer a schema for environment variables`,warning:!1}];function K(){return(0,v.jsx)(`ul`,{className:`py-1 text-[12.5px]`,children:G.map(e=>(0,v.jsxs)(`li`,{className:`flex h-[22px] min-w-0 items-center gap-2 px-3 whitespace-nowrap`,children:[(0,v.jsx)(`span`,{className:e.warning?`text-amber-700 dark:text-amber-400`:`text-sky-700 dark:text-sky-400`,children:e.warning?`▲`:`●`}),(0,v.jsx)(`span`,{className:`min-w-0 truncate`,children:e.text}),(0,v.jsx)(`span`,{className:`shrink-0 text-muted-foreground`,children:e.at})]},e.text))})}function q(){return(0,v.jsx)(`pre`,{className:`m-0 p-2 font-mono text-[12px] leading-[18px] text-muted-foreground`,children:`[info] build started
[info] 3 modules transformed
[info] built in 212ms`})}function J(){return(0,v.jsx)(`ul`,{className:`py-1 text-[12.5px]`,"aria-label":`Symbols`,children:[`main()`,`createApp(config)`,`routes`,`loadConfig()`].map(e=>(0,v.jsxs)(`li`,{className:`flex h-[22px] items-center gap-2 px-3`,children:[(0,v.jsx)(`span`,{className:`font-mono text-[10px] text-violet-600 dark:text-violet-300`,children:`ƒ`}),e]},e))})}function Y(){let[e,t]=(0,_.useState)(``),n=e?Object.keys(B).filter(t=>(B[t]??``).toLowerCase().includes(e.toLowerCase())):[];return(0,v.jsxs)(`div`,{className:`p-2 text-[12.5px]`,children:[(0,v.jsx)(`input`,{"aria-label":`Search files`,value:e,onChange:e=>t(e.target.value),placeholder:`Search`,className:`h-7 w-full rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring`}),(0,v.jsx)(`ul`,{className:`mt-2`,children:n.map(e=>(0,v.jsx)(`li`,{className:`h-[22px] truncate`,children:e},e))})]})}var X=f({editor:{component:V,kind:`document`},explorer:{component:U,kind:`tool`,title:`Explorer`,icon:(0,v.jsx)(n,{size:20,strokeWidth:1.5,"aria-hidden":!0})},search:{component:Y,kind:`tool`,title:`Search`,icon:(0,v.jsx)(i,{size:20,strokeWidth:1.5,"aria-hidden":!0})},terminal:{component:W,kind:`tool`,title:`Terminal`},problems:{component:K,kind:`tool`,title:`Problems`},output:{component:q,kind:`tool`,title:`Output`},outline:{component:J,kind:`tool`,title:`Outline`,icon:(0,v.jsx)(r,{size:20,strokeWidth:1.5,"aria-hidden":!0})}}),Z=e=>({id:e,component:`editor`,title:e.split(`/`).pop()??e,params:{path:e},kind:`document`});function Q(){return c({orientation:`horizontal`,children:[{orientation:`vertical`,size:.8,priority:`high`,children:[{id:`editor`,size:.7,minPx:120,keepWhenEmpty:!0,panels:Object.keys(B).map(Z)},{id:`bottom`,size:.3,minPx:80,collapsible:!0,collapsedPx:0,panels:[{id:`terminal`,component:`terminal`,title:`Terminal`,kind:`tool`},{id:`problems`,component:`problems`,title:`Problems`,kind:`tool`},{id:`output`,component:`output`,title:`Output`,kind:`tool`}]}]},{id:`right`,size:.2,minPx:140,maxPx:420,priority:`low`,collapsible:!0,panels:[{id:`outline`,component:`outline`,title:`Outline`,kind:`tool`}]}]},{borders:{left:{panels:[{id:`explorer`,component:`explorer`,title:`Explorer`,kind:`tool`},{id:`search`,component:`search`,title:`Search`,kind:`tool`}],open:`explorer`,sizePx:220}}})}var $=`import { FilesIcon, ListTreeIcon, SearchIcon } from "lucide-react"
import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, useDock, type DockApi, type DockLayout, type PanelProps, type PopoutHost, type TypedDockApi } from "@kitora/dock"

/** A host that always reports a blocked window, as a browser does for window.open without a click. */
const blockedHost: PopoutHost = { open: () => null }

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted"

/** A blocked popup floats in the page instead; the dock announces why and calls onPopoutBlocked so the app can show its own notice. */
export function PopoutBlocked() {
  const [initial] = useState(ideLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  const [notice, setNotice] = useState("")
  return (
    <>
      <DockStyles />
      <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[12px]">
        <button type="button" className={BUTTON} data-action="popout-blocked" onClick={() => void api?.popout("terminal")}>
          Pop out the terminal
        </button>
        <span role="status" data-testid="blocked-notice" className="text-amber-700 dark:text-amber-300">
          {notice}
        </span>
      </div>
      <code data-testid="blocked-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(layout)}
      </code>
      <div data-testid="blocked-dock" className="mt-1 h-[360px] overflow-hidden rounded-md border">
        <Dock
          ref={setApi}
          panels={panels}
          defaultLayout={initial}
          parts={DOCK_UI}
          label="Blocked popout demo"
          popoutHost={blockedHost}
          onPopoutBlocked={(panel) => setNotice(\`The browser blocked the window, so \${panel.title} floats here instead.\`)}
          onLayoutChange={setLayout}
        />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>o(()=>import(`./popout-blocked-DXwKIS7_.js`),[]));function te(){return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(t,{title:`Pop out to a browser window`,children:`Any panel can move into its own browser window, for a second monitor. It is the same component rendered into the other window, not a copy, so a terminal keeps its history and a form its input; styles and dark mode follow. Close the window and the panel comes home.`}),(0,v.jsx)(h,{n:1,title:`Pop out, keep state, dock back`,blurb:`Type something in the terminal, then pop it out: the new window shows the same history. Close the window (or use Dock back) and it returns to its group with everything intact.`,code:F,children:(0,v.jsx)(x,{})}),(0,v.jsx)(h,{n:2,title:`Popup blocked`,blurb:`This dock's host always reports a blocked window, as a browser does without a click. The panel floats in the page instead, the dock announces why, and the host gets a callback to show its own notice.`,code:$,children:(0,v.jsx)(R,{})})]})}export{te as component};