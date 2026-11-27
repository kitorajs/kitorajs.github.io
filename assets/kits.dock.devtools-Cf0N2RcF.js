import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t,y as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./list-tree-DsWvOKaw.js";import{t as i}from"./search-B6QTpngp.js";import{Ec as a,Uc as o,zc as s}from"./index-BZuUy872.js";import{u as c}from"./split-view-Dgjtu3AL.js";import{b as l,g as u,h as d,p as f,t as p,u as m,x as h,y as g}from"./dock-CVAc3kEG.js";import{t as _}from"./panels-yb_hfL-N.js";import{n as v,r as y}from"./parts-CGX_mU_k.js";import"./kit-gallery-BBavj2rC.js";import{t as b}from"./example-B67lLz1F.js";var x=e(o(),1),S=s(),C=2147483e3,w=[`tree`,`actions`,`zones`];function T(e){let t=[],n=(r,i)=>{let a=e.nodes[r],o=`  `.repeat(i);if(!a)return void t.push(`${o}? ${r}`);if(a.kind===`group`)return void t.push(`${o}${r} [${a.panels.map(e=>e===a.active?`${e}*`:e).join(`, `)}]${a.locked?` locked`:``}`);t.push(`${o}${r} ${a.orientation} ${a.sizes.map(e=>e.toFixed(2)).join(` / `)}`),a.children.forEach(e=>n(e,i+1))};e.root?n(e.root,0):t.push(`(empty main area)`);for(let n of c){let r=e.borders?.[n];r&&t.push(`border ${n} [${r.panels.map(e=>e===r.open?`${e}*`:e).join(`, `)}] ${r.sizePx}px`)}for(let[r,i]of Object.entries(e.floats??{}))t.push(`${r}${i.popout?` popout (${i.popout})`:` float`} ${i.bounds.width}×${i.bounds.height} at ${i.bounds.left},${i.bounds.top}`),n(i.root,1);return t}function E(e,t){let n=e.element();if(!n)return[];let r=[],i=e=>({position:`fixed`,zIndex:C,background:`hsl(${e} 80% 50% / 0.18)`,outline:`1px dashed hsl(${e} 80% 40% / 0.7)`,pointerEvents:`none`,font:`10px/1.2 ui-monospace, monospace`,color:`hsl(${e} 80% 30%)`,padding:2,boxSizing:`border-box`});for(let a of f(e.getLayout())){let e=Array.from(n.querySelectorAll(`[data-dock-group-body]`)).find(e=>e.getAttribute(`data-dock-group-body`)===a.id);if(!e)continue;let o=e.getBoundingClientRect(),s=h(o.width,t),c=h(o.height,t);r.push({key:`${a.id}-left`,label:`left`,style:{...i(210),left:o.left,top:o.top,width:s,height:o.height}}),r.push({key:`${a.id}-right`,label:`right`,style:{...i(210),left:o.right-s,top:o.top,width:s,height:o.height}}),r.push({key:`${a.id}-top`,label:`top`,style:{...i(150),left:o.left+s,top:o.top,width:o.width-2*s,height:c}}),r.push({key:`${a.id}-bottom`,label:`bottom`,style:{...i(150),left:o.left+s,top:o.bottom-c,width:o.width-2*s,height:c}}),r.push({key:`${a.id}-center`,label:`${a.id} centre`,style:{...i(40),left:o.left+s,top:o.top+c,width:o.width-2*s,height:o.height-2*c}})}let a=n.querySelector(`[data-dock-main]`)?.getBoundingClientRect();if(a&&t.rootEdgePx>0){let e=t.rootEdgePx;r.push({key:`root-left`,label:``,style:{...i(0),left:a.left,top:a.top,width:e,height:a.height}}),r.push({key:`root-right`,label:``,style:{...i(0),left:a.right-e,top:a.top,width:e,height:a.height}}),r.push({key:`root-top`,label:``,style:{...i(0),left:a.left,top:a.top,width:a.width,height:e}}),r.push({key:`root-bottom`,label:``,style:{...i(0),left:a.left,top:a.bottom-e,width:a.width,height:e}})}return r}function D({api:e,geometry:t,className:n}){let[r,i]=(0,x.useState)(`tree`),[a,o]=(0,x.useState)(()=>e?.getLayout()??null),[s,c]=(0,x.useState)([]),[,u]=(0,x.useState)(0);if((0,x.useEffect)(()=>{if(!e)return;o(e.getLayout());let t=0;return e.subscribe((e,n)=>{o(e),t+=1;let r={n:t,action:n,outline:d(e)};c(e=>[r,...e].slice(0,50))})},[e]),(0,x.useEffect)(()=>{if(r!==`zones`)return;let e=()=>u(e=>e+1);return window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[r]),!e||!a)return null;let f=g(a),p={...l,...t},m=e=>({font:`inherit`,padding:`1px 8px`,border:`1px solid currentColor`,borderRadius:4,background:e?`rgb(127 127 127 / 0.2)`:`transparent`,color:`inherit`,cursor:`pointer`});return(0,S.jsxs)(`section`,{"data-dock-devtools":``,"aria-label":`Dock devtools`,className:n,style:{font:`12px/1.45 ui-monospace, SFMono-Regular, Menlo, monospace`},children:[(0,S.jsxs)(`div`,{role:`toolbar`,"aria-label":`Devtools views`,style:{display:`flex`,gap:4,marginBottom:6},children:[w.map(e=>(0,S.jsx)(`button`,{type:`button`,"aria-pressed":r===e,"data-devtools-view":e,onClick:()=>i(e),style:m(r===e),children:e===`tree`?`Tree`:e===`actions`?`Actions (${s.length})`:`Zones`},e)),(0,S.jsx)(`span`,{"data-devtools-invariants":f.length===0?`ok`:`broken`,style:{marginLeft:`auto`,alignSelf:`center`},children:f.length===0?`invariants ok`:`${f.length} invariant problem(s)`})]}),r===`tree`?(0,S.jsx)(`pre`,{"data-devtools-tree":``,tabIndex:0,"aria-label":`Layout tree`,style:{margin:0,whiteSpace:`pre`,overflow:`auto`,maxHeight:260},children:[...T(a),...f.map(e=>`! ${e}`)].join(`
`)}):r===`actions`?(0,S.jsxs)(`ol`,{"data-devtools-log":``,tabIndex:0,"aria-label":`Actions log`,style:{margin:0,paddingLeft:0,listStyle:`none`,maxHeight:260,overflow:`auto`},children:[s.length===0?(0,S.jsx)(`li`,{children:`No actions yet: drag a tab, resize a sash.`}):null,s.map(e=>(0,S.jsxs)(`li`,{style:{padding:`2px 0`,borderBottom:`1px solid rgb(127 127 127 / 0.2)`},children:[(0,S.jsxs)(`div`,{children:[`#`,e.n,` `,e.action.type]}),(0,S.jsx)(`div`,{style:{opacity:.7,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},title:e.outline,children:e.outline})]},e.n))]}):(0,S.jsxs)(`div`,{"data-devtools-zones":``,children:[(0,S.jsx)(`p`,{style:{margin:0},children:`Drop zones as the hit test sees them: blue left / right, green top / bottom, amber centre, red the dock's outer bands.`}),E(e,p).map(e=>(0,S.jsx)(`div`,{"data-devtools-zone":e.key,"aria-hidden":`true`,style:e.style,children:e.label},e.key))]})]})}function O(){let[e]=(0,x.useState)(H),[t,n]=(0,x.useState)(null);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(y,{}),(0,S.jsx)(`div`,{"data-testid":`devtools-dock`,className:`h-[380px] overflow-hidden rounded-md border`,children:(0,S.jsx)(p,{ref:n,panels:B,defaultLayout:e,parts:v,label:`Devtools demo`})}),(0,S.jsx)(`div`,{className:`mt-2 rounded-md border p-2`,children:(0,S.jsx)(D,{api:t})})]})}function k(...e){return`${e.join(`
`)}\n`}var A={"src/main.ts":k(`import { createApp } from "./app"`,`import { loadConfig } from "./config"`,``,`// Boot the app once the config is in.`,`export async function main(): Promise<void> {`,`  const config = await loadConfig()`,`  createApp(config).listen(config.port)`,`}`,``,`void main()`),"src/app.ts":k(`import type { Config } from "./config"`,``,`export function createApp(config: Config) {`,`  const routes = new Map<string, () => string>()`,`  routes.set("/", () => "ok")`,`  routes.set("/health", () => JSON.stringify({ up: true, env: config.env }))`,`  return { listen: (port: number) => console.log("listening on", port) }`,`}`),"src/config.ts":k(`export interface Config {`,`  readonly port: number`,`  readonly env: "dev" | "prod"`,`}`,``,`export async function loadConfig(): Promise<Config> {`,`  return { port: Number(process.env.PORT ?? 3000), env: "dev" }`,`}`),"src/styles.css":k(`:root {`,`  --accent: #2563eb;`,`}`),"README.md":k(`# demo-app`,``,"A tiny server: `pnpm dev` runs it with reload."),"package.json":k(`{ "name": "demo-app", "private": true, "type": "module" }`)};function j({params:e}){let t=(A[e.path]??`// ${e.path}\n`).replace(/\n$/,``).split(`
`);return(0,S.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full font-mono text-[12px] leading-[19px]`,children:[(0,S.jsx)(`div`,{"aria-hidden":`true`,className:`sticky left-0 shrink-0 select-none bg-background px-3 py-2 text-right text-muted-foreground tabular-nums`,children:t.map((e,t)=>(0,S.jsx)(`div`,{children:t+1},t))}),(0,S.jsx)(`pre`,{className:`m-0 min-w-0 flex-1 py-2 pr-4 whitespace-pre`,"aria-label":`Contents of ${e.path}`,children:t.map((e,t)=>(0,S.jsx)(`div`,{className:`min-h-[19px]`,children:e},t))})]})}function M(e,t){let n=e.getLayout().nodes.editor;e.addPanel({id:t,component:`editor`,title:t.split(`/`).pop()??t,params:{path:t}},n?.kind===`group`?{type:`group`,group:`editor`}:void 0)}function N(){let e=m();return(0,S.jsxs)(`nav`,{"aria-label":`Project files`,className:`py-1 text-[12.5px]`,children:[(0,S.jsx)(`div`,{className:`px-3 pt-1 pb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:`demo-app`}),(0,S.jsx)(`ul`,{children:Object.keys(A).map(t=>(0,S.jsx)(`li`,{children:(0,S.jsx)(`button`,{type:`button`,"data-file":t,onClick:()=>M(e,t),className:`flex h-6 w-full items-center px-3 text-left hover:bg-muted focus-visible:bg-muted focus-visible:outline-none`,children:t})},t))})]})}function P(){let[e,t]=(0,x.useState)([`$ pnpm dev`,`> tsx watch src/main.ts`,`listening on :3000`]),[n,r]=(0,x.useState)(``);return(0,S.jsxs)(`div`,{dir:`ltr`,className:`flex min-h-full flex-col bg-zinc-950 p-2 font-mono text-[12px] leading-[18px] text-zinc-200`,children:[e.map((e,t)=>(0,S.jsx)(`div`,{className:e.startsWith(`$`)?`text-sky-300`:void 0,children:e},t)),(0,S.jsxs)(`form`,{className:`flex gap-1`,onSubmit:e=>{e.preventDefault(),n.trim()&&(t(e=>[...e,`$ ${n}`,`${n.split(` `)[0]}: done`]),r(``))},children:[(0,S.jsx)(`span`,{className:`text-sky-300`,children:`$`}),(0,S.jsx)(`input`,{"aria-label":`Terminal input`,"data-terminal-input":``,value:n,onChange:e=>r(e.target.value),className:`min-w-0 flex-1 bg-transparent text-zinc-100 outline-none`})]})]})}var F=[{at:`src/app.ts:6`,text:`'config.env' is read but never validated`,warning:!0},{at:`src/config.ts:7`,text:`Prefer a schema for environment variables`,warning:!1}];function I(){return(0,S.jsx)(`ul`,{className:`py-1 text-[12.5px]`,children:F.map(e=>(0,S.jsxs)(`li`,{className:`flex h-[22px] min-w-0 items-center gap-2 px-3 whitespace-nowrap`,children:[(0,S.jsx)(`span`,{className:e.warning?`text-amber-700 dark:text-amber-400`:`text-sky-700 dark:text-sky-400`,children:e.warning?`▲`:`●`}),(0,S.jsx)(`span`,{className:`min-w-0 truncate`,children:e.text}),(0,S.jsx)(`span`,{className:`shrink-0 text-muted-foreground`,children:e.at})]},e.text))})}function L(){return(0,S.jsx)(`pre`,{className:`m-0 p-2 font-mono text-[12px] leading-[18px] text-muted-foreground`,children:`[info] build started
[info] 3 modules transformed
[info] built in 212ms`})}function R(){return(0,S.jsx)(`ul`,{className:`py-1 text-[12.5px]`,"aria-label":`Symbols`,children:[`main()`,`createApp(config)`,`routes`,`loadConfig()`].map(e=>(0,S.jsxs)(`li`,{className:`flex h-[22px] items-center gap-2 px-3`,children:[(0,S.jsx)(`span`,{className:`font-mono text-[10px] text-violet-600 dark:text-violet-300`,children:`ƒ`}),e]},e))})}function z(){let[e,t]=(0,x.useState)(``),n=e?Object.keys(A).filter(t=>(A[t]??``).toLowerCase().includes(e.toLowerCase())):[];return(0,S.jsxs)(`div`,{className:`p-2 text-[12.5px]`,children:[(0,S.jsx)(`input`,{"aria-label":`Search files`,value:e,onChange:e=>t(e.target.value),placeholder:`Search`,className:`h-7 w-full rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring`}),(0,S.jsx)(`ul`,{className:`mt-2`,children:n.map(e=>(0,S.jsx)(`li`,{className:`h-[22px] truncate`,children:e},e))})]})}var B=_({editor:{component:j,kind:`document`},explorer:{component:N,kind:`tool`,title:`Explorer`,icon:(0,S.jsx)(n,{size:20,strokeWidth:1.5,"aria-hidden":!0})},search:{component:z,kind:`tool`,title:`Search`,icon:(0,S.jsx)(i,{size:20,strokeWidth:1.5,"aria-hidden":!0})},terminal:{component:P,kind:`tool`,title:`Terminal`},problems:{component:I,kind:`tool`,title:`Problems`},output:{component:L,kind:`tool`,title:`Output`},outline:{component:R,kind:`tool`,title:`Outline`,icon:(0,S.jsx)(r,{size:20,strokeWidth:1.5,"aria-hidden":!0})}}),V=e=>({id:e,component:`editor`,title:e.split(`/`).pop()??e,params:{path:e},kind:`document`});function H(){return u({orientation:`horizontal`,children:[{orientation:`vertical`,size:.8,priority:`high`,children:[{id:`editor`,size:.7,minPx:120,keepWhenEmpty:!0,panels:Object.keys(A).map(V)},{id:`bottom`,size:.3,minPx:80,collapsible:!0,collapsedPx:0,panels:[{id:`terminal`,component:`terminal`,title:`Terminal`,kind:`tool`},{id:`problems`,component:`problems`,title:`Problems`,kind:`tool`},{id:`output`,component:`output`,title:`Output`,kind:`tool`}]}]},{id:`right`,size:.2,minPx:140,maxPx:420,priority:`low`,collapsible:!0,panels:[{id:`outline`,component:`outline`,title:`Outline`,kind:`tool`}]}]},{borders:{left:{panels:[{id:`explorer`,component:`explorer`,title:`Explorer`,kind:`tool`},{id:`search`,component:`search`,title:`Search`,kind:`tool`}],open:`explorer`,sizePx:220}}})}var U=`import { FilesIcon, ListTreeIcon, SearchIcon } from "lucide-react"
import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, useDock, type DockApi, type DockLayout, type PanelProps, type TypedDockApi } from "@kitora/dock"
import { DockDevtools } from "@kitora/dock/devtools"

/** The inspector: the live tree with invariants checked, the action log, and every group's drop zones. A dev-only entry, so ship it behind import.meta.env.DEV. */
export function DevtoolsWorkbench() {
  const [initial] = useState(ideLayout)
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  return (
    <>
      <DockStyles />
      <div data-testid="devtools-dock" className="h-[380px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Devtools demo" />
      </div>
      <div className="mt-2 rounded-md border p-2">
        <DockDevtools api={api} />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>a(()=>import(`./devtools-0DYB9iKo.js`),[]));function W(){return(0,S.jsxs)(`div`,{children:[(0,S.jsx)(t,{title:`Devtools`,children:`An inspector for one dock: the layout as a tree with the invariants checked live, every action as it happens with the layout after it, and the drop zones drawn over the dock exactly where a drop would land.`}),(0,S.jsx)(b,{n:1,title:`Inspect a dock`,blurb:`Drag tabs, resize sashes and float a panel from its menu, then read the Actions tab. Zones draws each group's five drop zones and the dock's outer bands.`,code:U,children:(0,S.jsx)(O,{})})]})}export{W as component};