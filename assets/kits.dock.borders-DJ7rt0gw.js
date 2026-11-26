import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t,y as n}from"./kit-docs-CvNs0WqT.js";import{t as r}from"./list-tree-Cy7swhou.js";import{t as i}from"./search-BZ0gLa1o.js";import{Bc as a,Cc as o,Ic as s}from"./index-9y5uwRd3.js";import{g as c,h as l,t as u,u as d}from"./dock-B6jyBTRi.js";import{t as f}from"./panels-COzw_Krp.js";import{n as p,r as m}from"./parts-x1DgzehZ.js";import"./kit-gallery-B-Yr9fP4.js";import{t as h}from"./example-CZLJLtIC.js";var g=e(a(),1),_=s(),v=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted aria-pressed:bg-muted`;function y(){return c({orientation:`horizontal`,children:[{id:`editor`,keepWhenEmpty:!0,panels:[N(`src/main.ts`),N(`src/app.ts`),N(`README.md`)]},{id:`aside`,size:.3,panels:[{id:`problems`,component:`problems`,title:`Problems`,kind:`tool`}]}]},{borders:{left:{panels:[{id:`explorer`,component:`explorer`,title:`Explorer`,kind:`tool`},{id:`search`,component:`search`,title:`Search`,kind:`tool`,viewMode:`unpinned`}],open:`explorer`,sizePx:220},right:{panels:[{id:`outline`,component:`outline`,title:`Outline`,kind:`tool`}],open:null,sizePx:200},bottom:{panels:[{id:`terminal`,component:`terminal`,title:`Terminal`,kind:`tool`},{id:`output`,component:`output`,title:`Output`,kind:`tool`}],open:`terminal`,sizePx:160}}})}function b(){let[e]=(0,g.useState)(y),[t,n]=(0,g.useState)(e),[r,i]=(0,g.useState)(null),a=t.borders?.left?.open!==null&&t.borders?.left?.open!==void 0,o=t.borders?.bottom?.open!==null&&t.borders?.bottom?.open!==void 0;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{}),(0,_.jsxs)(`div`,{className:`mb-1 flex flex-wrap items-center gap-1.5 text-[12px]`,children:[(0,_.jsx)(`button`,{type:`button`,className:v,"aria-pressed":a,"data-action":`toggle-sidebar`,onClick:()=>r?.toggleBorder(`left`),children:`Side bar`}),(0,_.jsx)(`button`,{type:`button`,className:v,"aria-pressed":o,"data-action":`toggle-panel`,onClick:()=>r?.toggleBorder(`bottom`),children:`Panel`}),(0,_.jsx)(`button`,{type:`button`,className:v,"data-action":`reset`,onClick:()=>r?.reset(),children:`Reset`}),(0,_.jsx)(`span`,{className:`ml-1 text-muted-foreground`,children:`Tool panels go anywhere; documents stay out of borders.`})]}),(0,_.jsx)(`code`,{"data-testid":`borders-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:l(t)}),(0,_.jsx)(`div`,{"data-testid":`borders-dock`,className:`mt-1 h-[480px] overflow-hidden rounded-md border`,children:(0,_.jsx)(u,{ref:i,panels:M,defaultLayout:e,parts:p,label:`Workbench`,onLayoutChange:n})})]})}function x(...e){return`${e.join(`
`)}\n`}var S={"src/main.ts":x(`import { createApp } from "./app"`,`import { loadConfig } from "./config"`,``,`// Boot the app once the config is in.`,`export async function main(): Promise<void> {`,`  const config = await loadConfig()`,`  createApp(config).listen(config.port)`,`}`,``,`void main()`),"src/app.ts":x(`import type { Config } from "./config"`,``,`export function createApp(config: Config) {`,`  const routes = new Map<string, () => string>()`,`  routes.set("/", () => "ok")`,`  routes.set("/health", () => JSON.stringify({ up: true, env: config.env }))`,`  return { listen: (port: number) => console.log("listening on", port) }`,`}`),"src/config.ts":x(`export interface Config {`,`  readonly port: number`,`  readonly env: "dev" | "prod"`,`}`,``,`export async function loadConfig(): Promise<Config> {`,`  return { port: Number(process.env.PORT ?? 3000), env: "dev" }`,`}`),"src/styles.css":x(`:root {`,`  --accent: #2563eb;`,`}`),"README.md":x(`# demo-app`,``,"A tiny server: `pnpm dev` runs it with reload."),"package.json":x(`{ "name": "demo-app", "private": true, "type": "module" }`)};function C({params:e}){let t=(S[e.path]??`// ${e.path}\n`).replace(/\n$/,``).split(`
`);return(0,_.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full font-mono text-[12px] leading-[19px]`,children:[(0,_.jsx)(`div`,{"aria-hidden":`true`,className:`sticky left-0 shrink-0 select-none bg-background px-3 py-2 text-right text-muted-foreground tabular-nums`,children:t.map((e,t)=>(0,_.jsx)(`div`,{children:t+1},t))}),(0,_.jsx)(`pre`,{className:`m-0 min-w-0 flex-1 py-2 pr-4 whitespace-pre`,"aria-label":`Contents of ${e.path}`,children:t.map((e,t)=>(0,_.jsx)(`div`,{className:`min-h-[19px]`,children:e},t))})]})}function w(e,t){let n=e.getLayout().nodes.editor;e.addPanel({id:t,component:`editor`,title:t.split(`/`).pop()??t,params:{path:t}},n?.kind===`group`?{type:`group`,group:`editor`}:void 0)}function T(){let e=d();return(0,_.jsxs)(`nav`,{"aria-label":`Project files`,className:`py-1 text-[12.5px]`,children:[(0,_.jsx)(`div`,{className:`px-3 pt-1 pb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:`demo-app`}),(0,_.jsx)(`ul`,{children:Object.keys(S).map(t=>(0,_.jsx)(`li`,{children:(0,_.jsx)(`button`,{type:`button`,"data-file":t,onClick:()=>w(e,t),className:`flex h-6 w-full items-center px-3 text-left hover:bg-muted focus-visible:bg-muted focus-visible:outline-none`,children:t})},t))})]})}function E(){let[e,t]=(0,g.useState)([`$ pnpm dev`,`> tsx watch src/main.ts`,`listening on :3000`]),[n,r]=(0,g.useState)(``);return(0,_.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full flex-col bg-zinc-950 p-2 font-mono text-[12px] leading-[18px] text-zinc-200`,children:[e.map((e,t)=>(0,_.jsx)(`div`,{className:e.startsWith(`$`)?`text-sky-300`:void 0,children:e},t)),(0,_.jsxs)(`form`,{className:`flex gap-1`,onSubmit:e=>{e.preventDefault(),n.trim()&&(t(e=>[...e,`$ ${n}`,`${n.split(` `)[0]}: done`]),r(``))},children:[(0,_.jsx)(`span`,{className:`text-sky-300`,children:`$`}),(0,_.jsx)(`input`,{"aria-label":`Terminal input`,"data-terminal-input":``,value:n,onChange:e=>r(e.target.value),className:`min-w-0 flex-1 bg-transparent text-zinc-100 outline-none`})]})]})}var D=[{at:`src/app.ts:6`,text:`'config.env' is read but never validated`,warning:!0},{at:`src/config.ts:7`,text:`Prefer a schema for environment variables`,warning:!1}];function O(){return(0,_.jsx)(`ul`,{className:`py-1 text-[12.5px]`,children:D.map(e=>(0,_.jsxs)(`li`,{className:`flex h-[22px] min-w-0 items-center gap-2 px-3 whitespace-nowrap`,children:[(0,_.jsx)(`span`,{className:e.warning?`text-amber-700 dark:text-amber-400`:`text-sky-700 dark:text-sky-400`,children:e.warning?`▲`:`●`}),(0,_.jsx)(`span`,{className:`min-w-0 truncate`,children:e.text}),(0,_.jsx)(`span`,{className:`shrink-0 text-muted-foreground`,children:e.at})]},e.text))})}function k(){return(0,_.jsx)(`pre`,{className:`m-0 p-2 font-mono text-[12px] leading-[18px] text-muted-foreground`,children:`[info] build started
[info] 3 modules transformed
[info] built in 212ms`})}function A(){return(0,_.jsx)(`ul`,{className:`py-1 text-[12.5px]`,"aria-label":`Symbols`,children:[`main()`,`createApp(config)`,`routes`,`loadConfig()`].map(e=>(0,_.jsxs)(`li`,{className:`flex h-[22px] items-center gap-2 px-3`,children:[(0,_.jsx)(`span`,{className:`font-mono text-[10px] text-violet-600 dark:text-violet-300`,children:`ƒ`}),e]},e))})}function j(){let[e,t]=(0,g.useState)(``),n=e?Object.keys(S).filter(t=>(S[t]??``).toLowerCase().includes(e.toLowerCase())):[];return(0,_.jsxs)(`div`,{className:`p-2 text-[12.5px]`,children:[(0,_.jsx)(`input`,{"aria-label":`Search files`,value:e,onChange:e=>t(e.target.value),placeholder:`Search`,className:`h-7 w-full rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring`}),(0,_.jsx)(`ul`,{className:`mt-2`,children:n.map(e=>(0,_.jsx)(`li`,{className:`h-[22px] truncate`,children:e},e))})]})}var M=f({editor:{component:C,kind:`document`},explorer:{component:T,kind:`tool`,title:`Explorer`,icon:(0,_.jsx)(n,{size:20,strokeWidth:1.5,"aria-hidden":!0})},search:{component:j,kind:`tool`,title:`Search`,icon:(0,_.jsx)(i,{size:20,strokeWidth:1.5,"aria-hidden":!0})},terminal:{component:E,kind:`tool`,title:`Terminal`},problems:{component:O,kind:`tool`,title:`Problems`},output:{component:k,kind:`tool`,title:`Output`},outline:{component:A,kind:`tool`,title:`Outline`,icon:(0,_.jsx)(r,{size:20,strokeWidth:1.5,"aria-hidden":!0})}}),N=e=>({id:e,component:`editor`,title:e.split(`/`).pop()??e,params:{path:e},kind:`document`}),P=`import { FilesIcon, ListTreeIcon, SearchIcon } from "lucide-react"
import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, useDock, type DockApi, type DockLayout, type PanelProps, type TypedDockApi } from "@kitora/dock"

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted aria-pressed:bg-muted"

/** A VS Code-shaped workbench: an activity bar with a side bar (left), a secondary side bar (right) and a bottom panel, each a border. */
function workbench(): DockLayout {
  return createLayout(
    {
      orientation: "horizontal",
      children: [
        { id: "editor", keepWhenEmpty: true, panels: [file("src/main.ts"), file("src/app.ts"), file("README.md")] },
        { id: "aside", size: 0.3, panels: [{ id: "problems", component: "problems", title: "Problems", kind: "tool" }] },
      ],
    },
    {
      borders: {
        // Search is unpinned: it overlays the editor and hides when focus leaves it.
        left: { panels: [{ id: "explorer", component: "explorer", title: "Explorer", kind: "tool" }, { id: "search", component: "search", title: "Search", kind: "tool", viewMode: "unpinned" }], open: "explorer", sizePx: 220 },
        right: { panels: [{ id: "outline", component: "outline", title: "Outline", kind: "tool" }], open: null, sizePx: 200 },
        bottom: { panels: [{ id: "terminal", component: "terminal", title: "Terminal", kind: "tool" }, { id: "output", component: "output", title: "Output", kind: "tool" }], open: "terminal", sizePx: 160 },
      },
    },
  )
}

/** Tool panels go anywhere (borders or groups); documents never enter a border. */
export function BordersWorkbench() {
  const [initial] = useState(workbench)
  const [layout, setLayout] = useState<DockLayout>(initial)
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  const leftOpen = layout.borders?.left?.open !== null && layout.borders?.left?.open !== undefined
  const bottomOpen = layout.borders?.bottom?.open !== null && layout.borders?.bottom?.open !== undefined
  return (
    <>
      <DockStyles />
      <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[12px]">
        <button type="button" className={BUTTON} aria-pressed={leftOpen} data-action="toggle-sidebar" onClick={() => api?.toggleBorder("left")}>
          Side bar
        </button>
        <button type="button" className={BUTTON} aria-pressed={bottomOpen} data-action="toggle-panel" onClick={() => api?.toggleBorder("bottom")}>
          Panel
        </button>
        <button type="button" className={BUTTON} data-action="reset" onClick={() => api?.reset()}>
          Reset
        </button>
        <span className="ml-1 text-muted-foreground">Tool panels go anywhere; documents stay out of borders.</span>
      </div>
      <code data-testid="borders-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(layout)}
      </code>
      <div data-testid="borders-dock" className="mt-1 h-[480px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Workbench" onLayoutChange={setLayout} />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>o(()=>import(`./borders-oY_aiOyq.js`),[]));function F(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Borders and side panels`,children:`A workbench in the VS Code shape: an activity bar with a side bar, a secondary side bar on the right, and a bottom panel, each a border that collapses to its bar. Views drag between borders and groups; documents stay in the editor area.`}),(0,_.jsx)(h,{n:1,title:`Activity bar, side bars and bottom panel`,blurb:`Click an activity-bar icon to switch the side bar's view; click the open one to collapse the side bar to its bar. Search is unpinned: it overlays the editor and hides when you click or tab away (or press Escape); the pin button in its header docks it. Drag a view from a bar into the editor group or another border, drag the Problems tab onto the right bar, or use a group's menu to minimise it into the bottom panel. Drag a border's inner edge to resize it.`,code:P,children:(0,_.jsx)(b,{})})]})}export{F as component};