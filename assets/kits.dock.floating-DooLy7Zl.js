import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t,y as n}from"./kit-docs-DpYhPoxM.js";import{t as r}from"./list-tree-BWKXyyZj.js";import{t as i}from"./search-C2WkThP4.js";import{Bc as a,Cc as o,Ic as s}from"./index-q72zUtm9.js";import{g as c,h as l,t as u,u as d}from"./dock-HBvjciWi.js";import{t as f}from"./panels-COzw_Krp.js";import{n as p,r as m}from"./parts-Qzyy3T3e.js";import"./kit-gallery-Atvibnty.js";import{t as h}from"./example-B8EaWveR.js";var g=e(a(),1),_=s(),v=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`;function y(){let[e]=(0,g.useState)(N),[t,n]=(0,g.useState)(e),[r,i]=(0,g.useState)(null),a=Object.entries(t.floats??{});return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{}),(0,_.jsxs)(`div`,{className:`mb-1 flex flex-wrap items-center gap-1.5 text-[12px]`,children:[(0,_.jsx)(`button`,{type:`button`,className:v,"data-action":`float-terminal`,onClick:()=>r?.float(`terminal`),children:`Float the terminal`}),(0,_.jsx)(`button`,{type:`button`,className:v,"data-action":`float-group`,onClick:()=>r?.dispatch({type:`move-group`,group:`bottom`,to:{type:`float`}}),children:`Float the bottom group`}),a.map(([e])=>(0,_.jsxs)(`button`,{type:`button`,className:v,"data-action":`dock-${e}`,onClick:()=>r?.dockFloat(e),children:[`Dock `,e,` back`]},e)),(0,_.jsxs)(`span`,{"data-testid":`float-count`,className:`ml-1 font-mono text-[11px] text-muted-foreground`,children:[a.length,` float(s)`,a.map(([e,t])=>` · ${e} ${t.bounds.width}×${t.bounds.height} at ${t.bounds.left},${t.bounds.top}`).join(``)]})]}),(0,_.jsx)(`code`,{"data-testid":`float-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:l(t)}),(0,_.jsx)(`div`,{"data-testid":`float-dock`,className:`mx-6 mt-1 mb-6 h-[480px] overflow-hidden rounded-md border`,children:(0,_.jsx)(u,{ref:i,panels:j,defaultLayout:e,parts:p,label:`Floating demo`,onLayoutChange:n})})]})}function b(...e){return`${e.join(`
`)}\n`}var x={"src/main.ts":b(`import { createApp } from "./app"`,`import { loadConfig } from "./config"`,``,`// Boot the app once the config is in.`,`export async function main(): Promise<void> {`,`  const config = await loadConfig()`,`  createApp(config).listen(config.port)`,`}`,``,`void main()`),"src/app.ts":b(`import type { Config } from "./config"`,``,`export function createApp(config: Config) {`,`  const routes = new Map<string, () => string>()`,`  routes.set("/", () => "ok")`,`  routes.set("/health", () => JSON.stringify({ up: true, env: config.env }))`,`  return { listen: (port: number) => console.log("listening on", port) }`,`}`),"src/config.ts":b(`export interface Config {`,`  readonly port: number`,`  readonly env: "dev" | "prod"`,`}`,``,`export async function loadConfig(): Promise<Config> {`,`  return { port: Number(process.env.PORT ?? 3000), env: "dev" }`,`}`),"src/styles.css":b(`:root {`,`  --accent: #2563eb;`,`}`),"README.md":b(`# demo-app`,``,"A tiny server: `pnpm dev` runs it with reload."),"package.json":b(`{ "name": "demo-app", "private": true, "type": "module" }`)};function S({params:e}){let t=(x[e.path]??`// ${e.path}\n`).replace(/\n$/,``).split(`
`);return(0,_.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full font-mono text-[12px] leading-[19px]`,children:[(0,_.jsx)(`div`,{"aria-hidden":`true`,className:`sticky left-0 shrink-0 select-none bg-background px-3 py-2 text-right text-muted-foreground tabular-nums`,children:t.map((e,t)=>(0,_.jsx)(`div`,{children:t+1},t))}),(0,_.jsx)(`pre`,{className:`m-0 min-w-0 flex-1 py-2 pr-4 whitespace-pre`,"aria-label":`Contents of ${e.path}`,children:t.map((e,t)=>(0,_.jsx)(`div`,{className:`min-h-[19px]`,children:e},t))})]})}function C(e,t){let n=e.getLayout().nodes.editor;e.addPanel({id:t,component:`editor`,title:t.split(`/`).pop()??t,params:{path:t}},n?.kind===`group`?{type:`group`,group:`editor`}:void 0)}function w(){let e=d();return(0,_.jsxs)(`nav`,{"aria-label":`Project files`,className:`py-1 text-[12.5px]`,children:[(0,_.jsx)(`div`,{className:`px-3 pt-1 pb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:`demo-app`}),(0,_.jsx)(`ul`,{children:Object.keys(x).map(t=>(0,_.jsx)(`li`,{children:(0,_.jsx)(`button`,{type:`button`,"data-file":t,onClick:()=>C(e,t),className:`flex h-6 w-full items-center px-3 text-left hover:bg-muted focus-visible:bg-muted focus-visible:outline-none`,children:t})},t))})]})}function T(){let[e,t]=(0,g.useState)([`$ pnpm dev`,`> tsx watch src/main.ts`,`listening on :3000`]),[n,r]=(0,g.useState)(``);return(0,_.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full flex-col bg-zinc-950 p-2 font-mono text-[12px] leading-[18px] text-zinc-200`,children:[e.map((e,t)=>(0,_.jsx)(`div`,{className:e.startsWith(`$`)?`text-sky-300`:void 0,children:e},t)),(0,_.jsxs)(`form`,{className:`flex gap-1`,onSubmit:e=>{e.preventDefault(),n.trim()&&(t(e=>[...e,`$ ${n}`,`${n.split(` `)[0]}: done`]),r(``))},children:[(0,_.jsx)(`span`,{className:`text-sky-300`,children:`$`}),(0,_.jsx)(`input`,{"aria-label":`Terminal input`,"data-terminal-input":``,value:n,onChange:e=>r(e.target.value),className:`min-w-0 flex-1 bg-transparent text-zinc-100 outline-none`})]})]})}var E=[{at:`src/app.ts:6`,text:`'config.env' is read but never validated`,warning:!0},{at:`src/config.ts:7`,text:`Prefer a schema for environment variables`,warning:!1}];function D(){return(0,_.jsx)(`ul`,{className:`py-1 text-[12.5px]`,children:E.map(e=>(0,_.jsxs)(`li`,{className:`flex h-[22px] min-w-0 items-center gap-2 px-3 whitespace-nowrap`,children:[(0,_.jsx)(`span`,{className:e.warning?`text-amber-700 dark:text-amber-400`:`text-sky-700 dark:text-sky-400`,children:e.warning?`▲`:`●`}),(0,_.jsx)(`span`,{className:`min-w-0 truncate`,children:e.text}),(0,_.jsx)(`span`,{className:`shrink-0 text-muted-foreground`,children:e.at})]},e.text))})}function O(){return(0,_.jsx)(`pre`,{className:`m-0 p-2 font-mono text-[12px] leading-[18px] text-muted-foreground`,children:`[info] build started
[info] 3 modules transformed
[info] built in 212ms`})}function k(){return(0,_.jsx)(`ul`,{className:`py-1 text-[12.5px]`,"aria-label":`Symbols`,children:[`main()`,`createApp(config)`,`routes`,`loadConfig()`].map(e=>(0,_.jsxs)(`li`,{className:`flex h-[22px] items-center gap-2 px-3`,children:[(0,_.jsx)(`span`,{className:`font-mono text-[10px] text-violet-600 dark:text-violet-300`,children:`ƒ`}),e]},e))})}function A(){let[e,t]=(0,g.useState)(``),n=e?Object.keys(x).filter(t=>(x[t]??``).toLowerCase().includes(e.toLowerCase())):[];return(0,_.jsxs)(`div`,{className:`p-2 text-[12.5px]`,children:[(0,_.jsx)(`input`,{"aria-label":`Search files`,value:e,onChange:e=>t(e.target.value),placeholder:`Search`,className:`h-7 w-full rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring`}),(0,_.jsx)(`ul`,{className:`mt-2`,children:n.map(e=>(0,_.jsx)(`li`,{className:`h-[22px] truncate`,children:e},e))})]})}var j=f({editor:{component:S,kind:`document`},explorer:{component:w,kind:`tool`,title:`Explorer`,icon:(0,_.jsx)(n,{size:20,strokeWidth:1.5,"aria-hidden":!0})},search:{component:A,kind:`tool`,title:`Search`,icon:(0,_.jsx)(i,{size:20,strokeWidth:1.5,"aria-hidden":!0})},terminal:{component:T,kind:`tool`,title:`Terminal`},problems:{component:D,kind:`tool`,title:`Problems`},output:{component:O,kind:`tool`,title:`Output`},outline:{component:k,kind:`tool`,title:`Outline`,icon:(0,_.jsx)(r,{size:20,strokeWidth:1.5,"aria-hidden":!0})}}),M=e=>({id:e,component:`editor`,title:e.split(`/`).pop()??e,params:{path:e},kind:`document`});function N(){return c({orientation:`horizontal`,children:[{orientation:`vertical`,size:.8,priority:`high`,children:[{id:`editor`,size:.7,minPx:120,keepWhenEmpty:!0,panels:Object.keys(x).map(M)},{id:`bottom`,size:.3,minPx:80,collapsible:!0,collapsedPx:0,panels:[{id:`terminal`,component:`terminal`,title:`Terminal`,kind:`tool`},{id:`problems`,component:`problems`,title:`Problems`,kind:`tool`},{id:`output`,component:`output`,title:`Output`,kind:`tool`}]}]},{id:`right`,size:.2,minPx:140,maxPx:420,priority:`low`,collapsible:!0,panels:[{id:`outline`,component:`outline`,title:`Outline`,kind:`tool`}]}]},{borders:{left:{panels:[{id:`explorer`,component:`explorer`,title:`Explorer`,kind:`tool`},{id:`search`,component:`search`,title:`Search`,kind:`tool`}],open:`explorer`,sizePx:220}}})}var P=`import { FilesIcon, ListTreeIcon, SearchIcon } from "lucide-react"
import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, useDock, type DockApi, type DockLayout, type PanelProps, type TypedDockApi } from "@kitora/dock"

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted"

/** Floats are @kitora/windows windows over the dock, each holding its own sub-layout; DOCK_UI gives them the neutral chrome. */
export function FloatingWorkbench() {
  const [initial] = useState(ideLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  const floats = Object.entries(layout.floats ?? {})
  return (
    <>
      <DockStyles />
      <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[12px]">
        <button type="button" className={BUTTON} data-action="float-terminal" onClick={() => api?.float("terminal")}>
          Float the terminal
        </button>
        <button type="button" className={BUTTON} data-action="float-group" onClick={() => api?.dispatch({ type: "move-group", group: "bottom", to: { type: "float" } })}>
          Float the bottom group
        </button>
        {floats.map(([id]) => (
          <button key={id} type="button" className={BUTTON} data-action={\`dock-\${id}\`} onClick={() => api?.dockFloat(id)}>
            Dock {id} back
          </button>
        ))}
        <span data-testid="float-count" className="ml-1 font-mono text-[11px] text-muted-foreground">
          {floats.length} float(s){floats.map(([id, f]) => \` · \${id} \${f.bounds.width}×\${f.bounds.height} at \${f.bounds.left},\${f.bounds.top}\`).join("")}
        </span>
      </div>
      <code data-testid="float-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(layout)}
      </code>
      <div data-testid="float-dock" className="mx-6 mt-1 mb-6 h-[480px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Floating demo" onLayoutChange={setLayout} />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>o(()=>import(`./floating-BfXbEnM9.js`),[]));function F(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Floating windows`,children:`A panel or a whole group floats in a window over the dock. Windows come from the windows kit, so they move, resize, snap to the dock's edges and stack with focus; what is inside is a real dock sub-layout, so a float can hold several groups side by side. Nothing remounts on the way out or back.`}),(0,_.jsx)(h,{n:1,title:`Float and dock back`,blurb:`Float a panel from the buttons or a tab's menu, or drag a tab outside the dock and let go. Inside a float, drag a tab onto another tab of the float's edge to split it, or onto any group in the dock to dock it there. Hold Shift while dragging a float's title bar over the dock: the drop zones appear and letting go docks the whole window there. Closing a float docks it back to where it came from.`,code:P,children:(0,_.jsx)(y,{})})]})}export{F as component};