import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t,y as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./list-tree-DsWvOKaw.js";import{t as i}from"./search-B6QTpngp.js";import{Ec as a,Uc as o,zc as s}from"./index-BZuUy872.js";import{g as c,h as l,t as u,u as d}from"./dock-CVAc3kEG.js";import{t as f}from"./panels-yb_hfL-N.js";import{i as p,n as m,r as h}from"./parts-CGX_mU_k.js";import"./kit-gallery-BBavj2rC.js";import{t as g}from"./example-B67lLz1F.js";var _=e(o(),1),v=s(),y=`
.dock-ember[data-dock] { --dock-accent: #c2410c; --dock-sash-active: #ea580c; --dock-ring: #ea580c; --dock-strip-bg: #fff7ed; --dock-border: #fed7aa; }
.dark .dock-ember[data-dock] { --dock-strip-bg: #1c1410; --dock-border: #431407; }
.dock-slate[data-dock] { --dock-accent: #0f766e; --dock-sash-active: #14b8a6; --dock-ring: #14b8a6; --dock-strip-bg: #f1f5f9; --dock-tab-active-bg: #ffffff; --dock-border: #cbd5e1; }
.dark .dock-slate[data-dock] { --dock-strip-bg: #0f172a; --dock-tab-active-bg: #020617; --dock-border: #1e293b; }
`,b={app:{label:`App tokens`,className:``},ember:{label:`Ember`,className:`dock-ember`},slate:{label:`Slate`,className:`dock-slate`}},x=[`app`,`ember`,`slate`],S=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted aria-pressed:bg-muted`;function C(){let[e]=(0,_.useState)(L),[t,n]=(0,_.useState)(e),[r,i]=(0,_.useState)(`app`),[a,o]=(0,_.useState)(`comfortable`);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{}),(0,v.jsx)(`style`,{href:`my-dock-themes`,precedence:`default`,children:y}),(0,v.jsxs)(`div`,{className:`mb-1 flex flex-wrap items-center gap-1.5 text-[12px]`,children:[x.map(e=>(0,v.jsx)(`button`,{type:`button`,className:S,"aria-pressed":r===e,"data-preset":e,onClick:()=>i(e),children:b[e].label},e)),(0,v.jsx)(`span`,{className:`mx-1 text-muted-foreground`,children:`·`}),p.map(e=>(0,v.jsx)(`button`,{type:`button`,className:S,"aria-pressed":a===e,"data-density-option":e,onClick:()=>o(e),children:e},e))]}),(0,v.jsx)(`code`,{"data-testid":`theme-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:l(t)}),(0,v.jsx)(`div`,{"data-testid":`theme-dock`,"data-density":a,className:`mt-1 h-[420px] overflow-hidden rounded-md border`,children:(0,v.jsx)(u,{className:b[r].className,panels:F,defaultLayout:e,parts:m,label:`Theming demo`,onLayoutChange:n})})]})}function w(...e){return`${e.join(`
`)}\n`}var T={"src/main.ts":w(`import { createApp } from "./app"`,`import { loadConfig } from "./config"`,``,`// Boot the app once the config is in.`,`export async function main(): Promise<void> {`,`  const config = await loadConfig()`,`  createApp(config).listen(config.port)`,`}`,``,`void main()`),"src/app.ts":w(`import type { Config } from "./config"`,``,`export function createApp(config: Config) {`,`  const routes = new Map<string, () => string>()`,`  routes.set("/", () => "ok")`,`  routes.set("/health", () => JSON.stringify({ up: true, env: config.env }))`,`  return { listen: (port: number) => console.log("listening on", port) }`,`}`),"src/config.ts":w(`export interface Config {`,`  readonly port: number`,`  readonly env: "dev" | "prod"`,`}`,``,`export async function loadConfig(): Promise<Config> {`,`  return { port: Number(process.env.PORT ?? 3000), env: "dev" }`,`}`),"src/styles.css":w(`:root {`,`  --accent: #2563eb;`,`}`),"README.md":w(`# demo-app`,``,"A tiny server: `pnpm dev` runs it with reload."),"package.json":w(`{ "name": "demo-app", "private": true, "type": "module" }`)};function E({params:e}){let t=(T[e.path]??`// ${e.path}\n`).replace(/\n$/,``).split(`
`);return(0,v.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full font-mono text-[12px] leading-[19px]`,children:[(0,v.jsx)(`div`,{"aria-hidden":`true`,className:`sticky left-0 shrink-0 select-none bg-background px-3 py-2 text-right text-muted-foreground tabular-nums`,children:t.map((e,t)=>(0,v.jsx)(`div`,{children:t+1},t))}),(0,v.jsx)(`pre`,{className:`m-0 min-w-0 flex-1 py-2 pr-4 whitespace-pre`,"aria-label":`Contents of ${e.path}`,children:t.map((e,t)=>(0,v.jsx)(`div`,{className:`min-h-[19px]`,children:e},t))})]})}function D(e,t){let n=e.getLayout().nodes.editor;e.addPanel({id:t,component:`editor`,title:t.split(`/`).pop()??t,params:{path:t}},n?.kind===`group`?{type:`group`,group:`editor`}:void 0)}function O(){let e=d();return(0,v.jsxs)(`nav`,{"aria-label":`Project files`,className:`py-1 text-[12.5px]`,children:[(0,v.jsx)(`div`,{className:`px-3 pt-1 pb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:`demo-app`}),(0,v.jsx)(`ul`,{children:Object.keys(T).map(t=>(0,v.jsx)(`li`,{children:(0,v.jsx)(`button`,{type:`button`,"data-file":t,onClick:()=>D(e,t),className:`flex h-6 w-full items-center px-3 text-left hover:bg-muted focus-visible:bg-muted focus-visible:outline-none`,children:t})},t))})]})}function k(){let[e,t]=(0,_.useState)([`$ pnpm dev`,`> tsx watch src/main.ts`,`listening on :3000`]),[n,r]=(0,_.useState)(``);return(0,v.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full flex-col bg-zinc-950 p-2 font-mono text-[12px] leading-[18px] text-zinc-200`,children:[e.map((e,t)=>(0,v.jsx)(`div`,{className:e.startsWith(`$`)?`text-sky-300`:void 0,children:e},t)),(0,v.jsxs)(`form`,{className:`flex gap-1`,onSubmit:e=>{e.preventDefault(),n.trim()&&(t(e=>[...e,`$ ${n}`,`${n.split(` `)[0]}: done`]),r(``))},children:[(0,v.jsx)(`span`,{className:`text-sky-300`,children:`$`}),(0,v.jsx)(`input`,{"aria-label":`Terminal input`,"data-terminal-input":``,value:n,onChange:e=>r(e.target.value),className:`min-w-0 flex-1 bg-transparent text-zinc-100 outline-none`})]})]})}var A=[{at:`src/app.ts:6`,text:`'config.env' is read but never validated`,warning:!0},{at:`src/config.ts:7`,text:`Prefer a schema for environment variables`,warning:!1}];function j(){return(0,v.jsx)(`ul`,{className:`py-1 text-[12.5px]`,children:A.map(e=>(0,v.jsxs)(`li`,{className:`flex h-[22px] min-w-0 items-center gap-2 px-3 whitespace-nowrap`,children:[(0,v.jsx)(`span`,{className:e.warning?`text-amber-700 dark:text-amber-400`:`text-sky-700 dark:text-sky-400`,children:e.warning?`▲`:`●`}),(0,v.jsx)(`span`,{className:`min-w-0 truncate`,children:e.text}),(0,v.jsx)(`span`,{className:`shrink-0 text-muted-foreground`,children:e.at})]},e.text))})}function M(){return(0,v.jsx)(`pre`,{className:`m-0 p-2 font-mono text-[12px] leading-[18px] text-muted-foreground`,children:`[info] build started
[info] 3 modules transformed
[info] built in 212ms`})}function N(){return(0,v.jsx)(`ul`,{className:`py-1 text-[12.5px]`,"aria-label":`Symbols`,children:[`main()`,`createApp(config)`,`routes`,`loadConfig()`].map(e=>(0,v.jsxs)(`li`,{className:`flex h-[22px] items-center gap-2 px-3`,children:[(0,v.jsx)(`span`,{className:`font-mono text-[10px] text-violet-600 dark:text-violet-300`,children:`ƒ`}),e]},e))})}function P(){let[e,t]=(0,_.useState)(``),n=e?Object.keys(T).filter(t=>(T[t]??``).toLowerCase().includes(e.toLowerCase())):[];return(0,v.jsxs)(`div`,{className:`p-2 text-[12.5px]`,children:[(0,v.jsx)(`input`,{"aria-label":`Search files`,value:e,onChange:e=>t(e.target.value),placeholder:`Search`,className:`h-7 w-full rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring`}),(0,v.jsx)(`ul`,{className:`mt-2`,children:n.map(e=>(0,v.jsx)(`li`,{className:`h-[22px] truncate`,children:e},e))})]})}var F=f({editor:{component:E,kind:`document`},explorer:{component:O,kind:`tool`,title:`Explorer`,icon:(0,v.jsx)(n,{size:20,strokeWidth:1.5,"aria-hidden":!0})},search:{component:P,kind:`tool`,title:`Search`,icon:(0,v.jsx)(i,{size:20,strokeWidth:1.5,"aria-hidden":!0})},terminal:{component:k,kind:`tool`,title:`Terminal`},problems:{component:j,kind:`tool`,title:`Problems`},output:{component:M,kind:`tool`,title:`Output`},outline:{component:N,kind:`tool`,title:`Outline`,icon:(0,v.jsx)(r,{size:20,strokeWidth:1.5,"aria-hidden":!0})}}),I=e=>({id:e,component:`editor`,title:e.split(`/`).pop()??e,params:{path:e},kind:`document`});function L(){return c({orientation:`horizontal`,children:[{orientation:`vertical`,size:.8,priority:`high`,children:[{id:`editor`,size:.7,minPx:120,keepWhenEmpty:!0,panels:Object.keys(T).map(I)},{id:`bottom`,size:.3,minPx:80,collapsible:!0,collapsedPx:0,panels:[{id:`terminal`,component:`terminal`,title:`Terminal`,kind:`tool`},{id:`problems`,component:`problems`,title:`Problems`,kind:`tool`},{id:`output`,component:`output`,title:`Output`,kind:`tool`}]}]},{id:`right`,size:.2,minPx:140,maxPx:420,priority:`low`,collapsible:!0,panels:[{id:`outline`,component:`outline`,title:`Outline`,kind:`tool`}]}]},{borders:{left:{panels:[{id:`explorer`,component:`explorer`,title:`Explorer`,kind:`tool`},{id:`search`,component:`search`,title:`Search`,kind:`tool`}],open:`explorer`,sizePx:220}}})}var R=`import { FilesIcon, ListTreeIcon, SearchIcon } from "lucide-react"
import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_DENSITIES, DOCK_UI, DockStyles, layoutOutline, useDock, type DockApi, type DockDensity, type DockLayout, type PanelProps } from "@kitora/dock"

/** Token presets as plain CSS on the dock element (<Dock className>): unlayered rules beat the stylesheet's zero-specificity defaults. */
const THEMES_CSS = \`
.dock-ember[data-dock] { --dock-accent: #c2410c; --dock-sash-active: #ea580c; --dock-ring: #ea580c; --dock-strip-bg: #fff7ed; --dock-border: #fed7aa; }
.dark .dock-ember[data-dock] { --dock-strip-bg: #1c1410; --dock-border: #431407; }
.dock-slate[data-dock] { --dock-accent: #0f766e; --dock-sash-active: #14b8a6; --dock-ring: #14b8a6; --dock-strip-bg: #f1f5f9; --dock-tab-active-bg: #ffffff; --dock-border: #cbd5e1; }
.dark .dock-slate[data-dock] { --dock-strip-bg: #0f172a; --dock-tab-active-bg: #020617; --dock-border: #1e293b; }
\`

const PRESETS = {
  app: { label: "App tokens", className: "" },
  ember: { label: "Ember", className: "dock-ember" },
  slate: { label: "Slate", className: "dock-slate" },
} as const
type Preset = keyof typeof PRESETS
const PRESET_KEYS = ["app", "ember", "slate"] as const satisfies readonly Preset[]

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted aria-pressed:bg-muted"

/** The dock draws with --dock-* variables that start from the app's tokens; data-density="compact" on the dock or any ancestor shortens strips and tabs. */
export function ThemedWorkbench() {
  const [initial] = useState(ideLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  const [preset, setPreset] = useState<Preset>("app")
  const [density, setDensity] = useState<DockDensity>("comfortable")
  return (
    <>
      <DockStyles />
      <style href="my-dock-themes" precedence="default">
        {THEMES_CSS}
      </style>
      <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[12px]">
        {PRESET_KEYS.map((key) => (
          <button key={key} type="button" className={BUTTON} aria-pressed={preset === key} data-preset={key} onClick={() => setPreset(key)}>
            {PRESETS[key].label}
          </button>
        ))}
        <span className="mx-1 text-muted-foreground">·</span>
        {DOCK_DENSITIES.map((d) => (
          <button key={d} type="button" className={BUTTON} aria-pressed={density === d} data-density-option={d} onClick={() => setDensity(d)}>
            {d}
          </button>
        ))}
      </div>
      <code data-testid="theme-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(layout)}
      </code>
      <div data-testid="theme-dock" data-density={density} className="mt-1 h-[420px] overflow-hidden rounded-md border">
        <Dock className={PRESETS[preset].className} panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Theming demo" onLayoutChange={setLayout} />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>a(()=>import(`./theming-CTljulEl.js`),[]));function z(){return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(t,{title:`Theming and density`,children:`The dock draws with a handful of CSS variables that start from the app's own tokens, so it already matches light and dark. Override any of them on a wrapper to re-theme, and switch to the compact density for dense tool windows.`}),(0,v.jsx)(g,{n:1,title:`Tokens and density`,blurb:`Pick a preset and a density; toggle the site's dark mode to see each preset's dark values.`,code:R,children:(0,v.jsx)(C,{})})]})}export{z as component};