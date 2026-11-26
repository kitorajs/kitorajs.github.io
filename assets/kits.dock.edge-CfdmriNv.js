import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t,y as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./list-tree-DkhuawaG.js";import{t as i}from"./search-D4xjEJsY.js";import{Bc as a,Cc as o,Ic as s,zc as c}from"./index-B9ukmIN1.js";import{g as l,h as u,t as d,u as f}from"./dock-B0qddSVd.js";import{t as p}from"./panels-COzw_Krp.js";import{a as m,n as h,r as g}from"./parts-C6pvJFbp.js";import{a as _,c as v,i as y,l as b,s as x,t as ee}from"./dialog-XB0zm5GH.js";import"./kit-gallery-Bph7isB2.js";import{t as S}from"./example-BGnSQG2Y.js";var C=e(a(),1),w=s();function T({title:e}){return(0,w.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,w.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}var E=e=>l({orientation:`horizontal`,children:[{id:`${e}-a`,panels:[{id:`${e}-1`,component:`note`,title:`One`},{id:`${e}-2`,component:`note`,title:`Two`}]},{id:`${e}-b`,panels:[{id:`${e}-3`,component:`note`,title:`Three`}]}]}),D=p({note:{component:T}});function O({id:e}){let[t]=(0,C.useState)(()=>E(`${e}-inner`));return(0,w.jsx)(`div`,{"data-testid":`inner-dock`,className:`h-full p-1`,children:(0,w.jsx)(d,{panels:D,defaultLayout:t,parts:h,label:`Inner dock`})})}var k=p({note:{component:T},inner:{component:O}}),A=()=>l({orientation:`horizontal`,children:[{id:`outer-a`,size:.6,panels:[{id:`nested`,component:`inner`,title:`Nested dock`},{id:`outer-1`,component:`note`,title:`Outer one`}]},{id:`outer-b`,panels:[{id:`outer-2`,component:`note`,title:`Outer two`}]}]});function j(){let[e]=(0,C.useState)(A),[t,n]=(0,C.useState)(e);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g,{}),(0,w.jsx)(`code`,{"data-testid":`outer-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:u(t)}),(0,w.jsx)(`div`,{"data-testid":`outer-dock`,className:`mt-1 h-[340px] overflow-hidden rounded-md border`,children:(0,w.jsx)(d,{panels:k,defaultLayout:e,parts:h,label:`Outer dock`,onLayoutChange:n})})]})}var M=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, type DockLayout, type PanelProps } from "@kitora/dock"

// stub: replace with your panels
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

const small = (prefix: string): DockLayout =>
  createLayout({
    orientation: "horizontal",
    children: [
      { id: \`\${prefix}-a\`, panels: [{ id: \`\${prefix}-1\`, component: "note", title: "One" }, { id: \`\${prefix}-2\`, component: "note", title: "Two" }] },
      { id: \`\${prefix}-b\`, panels: [{ id: \`\${prefix}-3\`, component: "note", title: "Three" }] },
    ],
  })

const notes = defineDockPanels({ note: { component: Note } })

/** A panel that holds a whole dock. Each <Dock> is its own drag scope, so its tabs never escape into the outer dock (or the other way round). */
function InnerDock({ id }: PanelProps) {
  const [layout] = useState(() => small(\`\${id}-inner\`))
  return (
    <div data-testid="inner-dock" className="h-full p-1">
      <Dock panels={notes} defaultLayout={layout} parts={DOCK_UI} label="Inner dock" />
    </div>
  )
}

const panels = defineDockPanels({ note: { component: Note }, inner: { component: InnerDock } })

const outerLayout = (): DockLayout =>
  createLayout({
    orientation: "horizontal",
    children: [
      { id: "outer-a", size: 0.6, panels: [{ id: "nested", component: "inner", title: "Nested dock" }, { id: "outer-1", component: "note", title: "Outer one" }] },
      { id: "outer-b", panels: [{ id: "outer-2", component: "note", title: "Outer two" }] },
    ],
  })

export function NestedDocks() {
  const [initial] = useState(outerLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  return (
    <>
      <DockStyles />
      <code data-testid="outer-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(layout)}
      </code>
      <div data-testid="outer-dock" className="mt-1 h-[340px] overflow-hidden rounded-md border">
        <Dock panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Outer dock" onLayoutChange={setLayout} />
      </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>o(()=>import(`./edge-nested-Bg9SnLK6.js`),[]));function N(){let[e]=(0,C.useState)(K),[t,n]=(0,C.useState)(e);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g,{}),(0,w.jsxs)(ee,{children:[(0,w.jsx)(b,{render:(0,w.jsx)(`button`,{type:`button`,className:`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted`,"data-action":`open-dialog`}),children:`Open the dialog`}),(0,w.jsxs)(y,{className:`max-w-[860px] sm:max-w-[860px]`,children:[(0,w.jsxs)(x,{children:[(0,w.jsx)(v,{children:`Workbench in a dialog`}),(0,w.jsx)(_,{children:`Drag tabs between the groups.`})]}),(0,w.jsx)(`code`,{"data-testid":`dialog-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:u(t)}),(0,w.jsx)(`div`,{"data-testid":`dialog-dock`,className:`h-[420px] overflow-hidden rounded-md border`,children:(0,w.jsx)(d,{panels:W,defaultLayout:e,parts:h,label:`Dialog dock`,onLayoutChange:n})})]})]})]})}function P(...e){return`${e.join(`
`)}\n`}var F={"src/main.ts":P(`import { createApp } from "./app"`,`import { loadConfig } from "./config"`,``,`// Boot the app once the config is in.`,`export async function main(): Promise<void> {`,`  const config = await loadConfig()`,`  createApp(config).listen(config.port)`,`}`,``,`void main()`),"src/app.ts":P(`import type { Config } from "./config"`,``,`export function createApp(config: Config) {`,`  const routes = new Map<string, () => string>()`,`  routes.set("/", () => "ok")`,`  routes.set("/health", () => JSON.stringify({ up: true, env: config.env }))`,`  return { listen: (port: number) => console.log("listening on", port) }`,`}`),"src/config.ts":P(`export interface Config {`,`  readonly port: number`,`  readonly env: "dev" | "prod"`,`}`,``,`export async function loadConfig(): Promise<Config> {`,`  return { port: Number(process.env.PORT ?? 3000), env: "dev" }`,`}`),"src/styles.css":P(`:root {`,`  --accent: #2563eb;`,`}`),"README.md":P(`# demo-app`,``,"A tiny server: `pnpm dev` runs it with reload."),"package.json":P(`{ "name": "demo-app", "private": true, "type": "module" }`)};function I({params:e}){let t=(F[e.path]??`// ${e.path}\n`).replace(/\n$/,``).split(`
`);return(0,w.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full font-mono text-[12px] leading-[19px]`,children:[(0,w.jsx)(`div`,{"aria-hidden":`true`,className:`sticky left-0 shrink-0 select-none bg-background px-3 py-2 text-right text-muted-foreground tabular-nums`,children:t.map((e,t)=>(0,w.jsx)(`div`,{children:t+1},t))}),(0,w.jsx)(`pre`,{className:`m-0 min-w-0 flex-1 py-2 pr-4 whitespace-pre`,"aria-label":`Contents of ${e.path}`,children:t.map((e,t)=>(0,w.jsx)(`div`,{className:`min-h-[19px]`,children:e},t))})]})}function te(e,t){let n=e.getLayout().nodes.editor;e.addPanel({id:t,component:`editor`,title:t.split(`/`).pop()??t,params:{path:t}},n?.kind===`group`?{type:`group`,group:`editor`}:void 0)}function L(){let e=f();return(0,w.jsxs)(`nav`,{"aria-label":`Project files`,className:`py-1 text-[12.5px]`,children:[(0,w.jsx)(`div`,{className:`px-3 pt-1 pb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:`demo-app`}),(0,w.jsx)(`ul`,{children:Object.keys(F).map(t=>(0,w.jsx)(`li`,{children:(0,w.jsx)(`button`,{type:`button`,"data-file":t,onClick:()=>te(e,t),className:`flex h-6 w-full items-center px-3 text-left hover:bg-muted focus-visible:bg-muted focus-visible:outline-none`,children:t})},t))})]})}function R(){let[e,t]=(0,C.useState)([`$ pnpm dev`,`> tsx watch src/main.ts`,`listening on :3000`]),[n,r]=(0,C.useState)(``);return(0,w.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full flex-col bg-zinc-950 p-2 font-mono text-[12px] leading-[18px] text-zinc-200`,children:[e.map((e,t)=>(0,w.jsx)(`div`,{className:e.startsWith(`$`)?`text-sky-300`:void 0,children:e},t)),(0,w.jsxs)(`form`,{className:`flex gap-1`,onSubmit:e=>{e.preventDefault(),n.trim()&&(t(e=>[...e,`$ ${n}`,`${n.split(` `)[0]}: done`]),r(``))},children:[(0,w.jsx)(`span`,{className:`text-sky-300`,children:`$`}),(0,w.jsx)(`input`,{"aria-label":`Terminal input`,"data-terminal-input":``,value:n,onChange:e=>r(e.target.value),className:`min-w-0 flex-1 bg-transparent text-zinc-100 outline-none`})]})]})}var z=[{at:`src/app.ts:6`,text:`'config.env' is read but never validated`,warning:!0},{at:`src/config.ts:7`,text:`Prefer a schema for environment variables`,warning:!1}];function B(){return(0,w.jsx)(`ul`,{className:`py-1 text-[12.5px]`,children:z.map(e=>(0,w.jsxs)(`li`,{className:`flex h-[22px] min-w-0 items-center gap-2 px-3 whitespace-nowrap`,children:[(0,w.jsx)(`span`,{className:e.warning?`text-amber-700 dark:text-amber-400`:`text-sky-700 dark:text-sky-400`,children:e.warning?`▲`:`●`}),(0,w.jsx)(`span`,{className:`min-w-0 truncate`,children:e.text}),(0,w.jsx)(`span`,{className:`shrink-0 text-muted-foreground`,children:e.at})]},e.text))})}function V(){return(0,w.jsx)(`pre`,{className:`m-0 p-2 font-mono text-[12px] leading-[18px] text-muted-foreground`,children:`[info] build started
[info] 3 modules transformed
[info] built in 212ms`})}function H(){return(0,w.jsx)(`ul`,{className:`py-1 text-[12.5px]`,"aria-label":`Symbols`,children:[`main()`,`createApp(config)`,`routes`,`loadConfig()`].map(e=>(0,w.jsxs)(`li`,{className:`flex h-[22px] items-center gap-2 px-3`,children:[(0,w.jsx)(`span`,{className:`font-mono text-[10px] text-violet-600 dark:text-violet-300`,children:`ƒ`}),e]},e))})}function U(){let[e,t]=(0,C.useState)(``),n=e?Object.keys(F).filter(t=>(F[t]??``).toLowerCase().includes(e.toLowerCase())):[];return(0,w.jsxs)(`div`,{className:`p-2 text-[12.5px]`,children:[(0,w.jsx)(`input`,{"aria-label":`Search files`,value:e,onChange:e=>t(e.target.value),placeholder:`Search`,className:`h-7 w-full rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring`}),(0,w.jsx)(`ul`,{className:`mt-2`,children:n.map(e=>(0,w.jsx)(`li`,{className:`h-[22px] truncate`,children:e},e))})]})}var W=p({editor:{component:I,kind:`document`},explorer:{component:L,kind:`tool`,title:`Explorer`,icon:(0,w.jsx)(n,{size:20,strokeWidth:1.5,"aria-hidden":!0})},search:{component:U,kind:`tool`,title:`Search`,icon:(0,w.jsx)(i,{size:20,strokeWidth:1.5,"aria-hidden":!0})},terminal:{component:R,kind:`tool`,title:`Terminal`},problems:{component:B,kind:`tool`,title:`Problems`},output:{component:V,kind:`tool`,title:`Output`},outline:{component:H,kind:`tool`,title:`Outline`,icon:(0,w.jsx)(r,{size:20,strokeWidth:1.5,"aria-hidden":!0})}}),G=e=>({id:e,component:`editor`,title:e.split(`/`).pop()??e,params:{path:e},kind:`document`});function K(){return l({orientation:`horizontal`,children:[{orientation:`vertical`,size:.8,priority:`high`,children:[{id:`editor`,size:.7,minPx:120,keepWhenEmpty:!0,panels:Object.keys(F).map(G)},{id:`bottom`,size:.3,minPx:80,collapsible:!0,collapsedPx:0,panels:[{id:`terminal`,component:`terminal`,title:`Terminal`,kind:`tool`},{id:`problems`,component:`problems`,title:`Problems`,kind:`tool`},{id:`output`,component:`output`,title:`Output`,kind:`tool`}]}]},{id:`right`,size:.2,minPx:140,maxPx:420,priority:`low`,collapsible:!0,panels:[{id:`outline`,component:`outline`,title:`Outline`,kind:`tool`}]}]},{borders:{left:{panels:[{id:`explorer`,component:`explorer`,title:`Explorer`,kind:`tool`},{id:`search`,component:`search`,title:`Search`,kind:`tool`}],open:`explorer`,sizePx:220}}})}var q=`import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@kitora/ui/dialog"
import { FilesIcon, ListTreeIcon, SearchIcon } from "lucide-react"
import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, useDock, type DockApi, type DockLayout, type PanelProps } from "@kitora/dock"

/** A dock inside a modal dialog: its drop overlay, menus and floats stack above the dialog, and Escape cancels a drag before it closes the dialog. */
export function DialogWorkbench() {
  const [initial] = useState(ideLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  return (
    <>
      <DockStyles />
      <Dialog>
        <DialogTrigger render={<button type="button" className="h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted" data-action="open-dialog" />}>Open the dialog</DialogTrigger>
        <DialogContent className="max-w-[860px] sm:max-w-[860px]">
          <DialogHeader>
            <DialogTitle>Workbench in a dialog</DialogTitle>
            <DialogDescription>Drag tabs between the groups.</DialogDescription>
          </DialogHeader>
          <code data-testid="dialog-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
            {layoutOutline(layout)}
          </code>
          <div data-testid="dialog-dock" className="h-[420px] overflow-hidden rounded-md border">
            <Dock panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Dialog dock" onLayoutChange={setLayout} />
          </div>
        </DialogContent>
      </Dialog>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>o(()=>import(`./edge-dialog-C_7RzndH.js`),[]));var J=e(c(),1);function Y({title:e}){return(0,w.jsxs)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:[(0,w.jsx)(`div`,{className:`font-medium text-foreground`,children:e}),`Panel content. Switch tabs: it stays mounted.`]})}var X=p({note:{component:Y}}),Z=l({orientation:`horizontal`,children:[{id:`shadow-a`,panels:[{id:`shadow-1`,component:`note`,title:`One`},{id:`shadow-2`,component:`note`,title:`Two`}]},{id:`shadow-b`,panels:[{id:`shadow-3`,component:`note`,title:`Three`}]}]});function Q(){let[e,t]=(0,C.useState)(null),[n,r]=(0,C.useState)(Z);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`code`,{"data-testid":`shadow-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:u(n)}),(0,w.jsx)(`div`,{"data-testid":`shadow-host`,className:`mt-1 h-[260px] rounded-md border`,ref:e=>{e&&!e.shadowRoot&&t(e.attachShadow({mode:`open`}))}}),e?(0,J.createPortal)((0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`style`,{children:`${m}\n:host { display: block; font: 13px/1.4 system-ui, sans-serif; }`}),(0,w.jsx)(`div`,{style:{height:258},children:(0,w.jsx)(d,{panels:X,defaultLayout:Z,parts:h,label:`Shadow dock`,onLayoutChange:r})})]}),e):null]})}var $=`import { useState } from "react"
import { createPortal } from "react-dom"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DOCK_UI_CSS, layoutOutline, type DockLayout, type PanelProps } from "@kitora/dock"

// stub: replace with your panels
function Note({ title }: PanelProps) {
  return (
    <div className="p-3 text-[12.5px] text-muted-foreground">
      <div className="font-medium text-foreground">{title}</div>
      Panel content. Switch tabs: it stays mounted.
    </div>
  )
}

const panels = defineDockPanels({ note: { component: Note } })

const layout = createLayout({
  orientation: "horizontal",
  children: [
    { id: "shadow-a", panels: [{ id: "shadow-1", component: "note", title: "One" }, { id: "shadow-2", component: "note", title: "Two" }] },
    { id: "shadow-b", panels: [{ id: "shadow-3", component: "note", title: "Three" }] },
  ],
})

/** A dock rendered into an open shadow root: the stylesheet goes inside the root (DOCK_UI_CSS), since page styles do not reach in. */
export function ShadowDock() {
  const [shadow, setShadow] = useState<ShadowRoot | null>(null)
  const [now, setNow] = useState<DockLayout>(layout)
  return (
    <>
      <code data-testid="shadow-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(now)}
      </code>
      <div
        data-testid="shadow-host"
        className="mt-1 h-[260px] rounded-md border"
        ref={(el) => {
          if (el && !el.shadowRoot) setShadow(el.attachShadow({ mode: "open" }))
        }}
      />
      {shadow
        ? createPortal(
            <>
              <style>{\`\${DOCK_UI_CSS}\\n:host { display: block; font: 13px/1.4 system-ui, sans-serif; }\`}</style>
              <div style={{ height: 258 }}>
                <Dock panels={panels} defaultLayout={layout} parts={DOCK_UI} label="Shadow dock" onLayoutChange={setNow} />
              </div>
            </>,
            shadow,
          )
        : null}
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>o(()=>import(`./edge-shadow-PMuhLMOH.js`),[]));function ne(){return(0,w.jsxs)(`div`,{children:[(0,w.jsx)(t,{title:`Edge cases`,children:`A dock inside a panel of another dock, a dock inside a dialog, and a dock inside a shadow root: each keeps its drags, menus and overlays where they belong.`}),(0,w.jsx)(S,{n:1,title:`A dock in a dock`,blurb:`The left group's first tab is a whole dock. Drag its tabs: they dock inside it and never escape into the outer dock; the outer dock's tabs stay outside the inner one.`,code:M,children:(0,w.jsx)(j,{})}),(0,w.jsx)(S,{n:2,title:`A dock in a dialog`,blurb:`Open the dialog and drag a tab: the drop overlay paints above the dialog. Press Escape mid-drag: the drag ends and the dialog stays open; a second Escape closes it.`,code:q,children:(0,w.jsx)(N,{})}),(0,w.jsx)(S,{n:3,title:`A dock in a shadow root`,blurb:`This dock lives in an open shadow root with its stylesheet inside it. Drag a tab onto the other group's edge.`,code:$,children:(0,w.jsx)(Q,{})})]})}export{ne as component};