import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{_ as a,g as o,h as s,t as c,v as l}from"./dock-B0qddSVd.js";import{t as u}from"./panels-COzw_Krp.js";import{n as d,r as f}from"./parts-C6pvJFbp.js";import"./kit-gallery-Bph7isB2.js";import{t as p}from"./example-BGnSQG2Y.js";function m(e){return{names:async()=>[...await e.list()],saveAs:async(t,n)=>{await e.save(t,l(n))},open:async(t,n={})=>{try{return a(await e.load(t)??null,n)}catch(e){return a(e instanceof Error?e.message:`store failed`,n)}},remove:async t=>{await e.remove(t)}}}function h(){try{return typeof localStorage>`u`?null:localStorage}catch{return null}}function g(e){try{let t=h()?.getItem(e);return t==null?null:JSON.parse(t)}catch{return null}}function _(e,t){try{h()?.setItem(e,JSON.stringify(t))}catch{}}function v(e){try{h()?.removeItem(e)}catch{}}function ee(e){return{load:()=>g(e),save:t=>_(e,t),clear:()=>v(e)}}function te(e){return{list:()=>{let t=h();if(!t)return[];let n=[];for(let r=0;r<t.length;r++){let i=t.key(r);i?.startsWith(e)&&n.push(i.slice(e.length))}return n.toSorted()},load:t=>g(e+t),save:(t,n)=>_(e+t,n),remove:t=>v(e+t)}}var y=e(n(),1);function ne(e){let[t,n]=(0,y.useState)(!1),r=(0,y.useRef)(null);return{editing:t,begin(){!e||t||(r.current={...e.save(),locked:!0},e.setLayoutLocked(!1),n(!0))},save(){!e||!t||(e.setLayoutLocked(!0),r.current=null,n(!1))},discard(){!e||!t||(r.current&&e.load(r.current),r.current=null,n(!1))}}}var b=i(),x=ee(`my-app:dock`),S=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50`;function re(){let[e]=(0,y.useState)(oe),[t,n]=(0,y.useState)(e),[r,i]=(0,y.useState)(null),[a,o]=(0,y.useState)(`…`);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{}),(0,b.jsxs)(`div`,{className:`mb-1 flex flex-wrap items-center gap-1.5 text-[12px]`,children:[(0,b.jsx)(`button`,{type:`button`,className:S,"data-action":`reset`,onClick:()=>r?.reset(),children:`Reset to default`}),(0,b.jsx)(`button`,{type:`button`,className:S,"data-action":`forget`,onClick:()=>{x.clear?.(),o(`forgotten`)},children:`Forget saved`}),(0,b.jsxs)(`span`,{className:`text-muted-foreground`,children:[`restore on load: `,(0,b.jsx)(`span`,{"data-testid":`restore-outcome`,children:a})]})]}),(0,b.jsx)(`code`,{"data-testid":`persist-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:s(t)}),(0,b.jsx)(`div`,{"data-testid":`persist-dock`,className:`mt-1 h-[240px] overflow-hidden rounded-md border`,children:(0,b.jsx)(c,{ref:i,panels:ae,defaultLayout:e,parts:d,label:`Saved`,storage:x,migrators:w,onRestore:e=>o(e.outcome===`rejected`?`nothing saved`:e.outcome),onLayoutChange:n})})]})}var C=e=>typeof e==`object`&&!!e&&!Array.isArray(e),w=[{from:0,to:1,migrate(e){return o({orientation:`horizontal`,children:(C(e)&&Array.isArray(e.groups)?e.groups:[]).filter(C).map(e=>({id:typeof e.id==`string`?e.id:void 0,panels:(Array.isArray(e.tabs)?e.tabs:[]).filter(C).map(e=>({id:String(e.id),component:String(e.component),title:typeof e.title==`string`?e.title:void 0,...typeof e.path==`string`?{params:{path:e.path}}:{}}))}))})}}],T={"src/main.ts":`import { createApp } from "./app"

createApp().listen(3000)
`,"src/app.ts":`export function createApp() {
  return { listen: (port: number) => console.log("listening on", port) }
}
`,"src/config.ts":`export const config = { port: 3000, env: "dev" }
`,"README.md":`# demo-app

A tiny server.
`};function E({params:e}){return(0,b.jsx)(`pre`,{dir:`ltr`,className:`m-0 p-2 font-mono text-[12px] leading-[19px]`,"aria-label":`Contents of ${e.path}`,children:T[e.path]??`// ${e.path}`})}function D(){return(0,b.jsx)(`p`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:`▲ 'config.env' is read but never validated`})}function ie(){return(0,b.jsx)(`ul`,{className:`py-1 text-[12.5px]`,"aria-label":`Symbols`,children:[`createApp()`,`listen(port)`,`config`].map(e=>(0,b.jsx)(`li`,{className:`flex h-[22px] items-center px-3`,children:e},e))})}var ae=u({editor:{component:E,kind:`document`},problems:{component:D,kind:`tool`,title:`Problems`},outline:{component:ie,kind:`tool`,title:`Outline`}}),O=e=>({id:e,component:`editor`,title:e.split(`/`).pop()??e,params:{path:e},kind:`document`});function oe(){return o({orientation:`horizontal`,children:[{id:`files`,size:.3,panels:[{id:`outline`,component:`outline`,title:`Outline`,kind:`tool`},{id:`problems`,component:`problems`,title:`Problems`,kind:`tool`}]},{id:`editor`,panels:[O(`src/main.ts`),O(`src/app.ts`),O(`README.md`)]}]})}var k=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, localStorageAdapter, type DockLayout, type DockMigrator, type PanelProps, type TypedDockApi } from "@kitora/dock"

/** Built in: memoryStorage() and localStorageAdapter(key); anything async fits too (IndexedDB, a server). */
const storage = localStorageAdapter("my-app:dock")

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50"

/** Restores once on mount (migrating older schemas), saves after each change. Reset returns to the default layout and saves that. */
export function SavedLayout() {
  const [initial] = useState(defaultLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  const [restored, setRestored] = useState("…")
  return (
    <>
      <DockStyles />
      <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[12px]">
        <button type="button" className={BUTTON} data-action="reset" onClick={() => api?.reset()}>
          Reset to default
        </button>
        <button
          type="button"
          className={BUTTON}
          data-action="forget"
          onClick={() => {
            void storage.clear?.()
            setRestored("forgotten")
          }}
        >
          Forget saved
        </button>
        <span className="text-muted-foreground">
          restore on load: <span data-testid="restore-outcome">{restored}</span>
        </span>
      </div>
      <code data-testid="persist-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(layout)}
      </code>
      <div data-testid="persist-dock" className="mt-1 h-[240px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Saved" storage={storage} migrators={migrators} onRestore={(r) => setRestored(r.outcome === "rejected" ? "nothing saved" : r.outcome)} onLayoutChange={setLayout} />
      </div>
    </>
  )
}

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v)

/** Lifts schema 0 to 1: each saved group becomes a group of a horizontal split. */
const migrators: readonly DockMigrator[] = [
  {
    from: 0,
    to: 1,
    migrate(json) {
      const groups = isRecord(json) && Array.isArray(json.groups) ? json.groups : []
      return createLayout({
        orientation: "horizontal",
        children: groups.filter(isRecord).map((g) => ({
          id: typeof g.id === "string" ? g.id : undefined,
          panels: (Array.isArray(g.tabs) ? g.tabs : []).filter(isRecord).map((t) => ({
            id: String(t.id),
            component: String(t.component),
            title: typeof t.title === "string" ? t.title : undefined,
            ...(typeof t.path === "string" ? { params: { path: t.path } } : {}),
          })),
        })),
      })
    },
  },
]

// ── The demo panels: an editor over a few files, problems and an outline ──────

/** The demo project's files: path → contents. */
const FILES: Readonly<Record<string, string>> = {
  "src/main.ts": "import { createApp } from \\"./app\\"\\n\\ncreateApp().listen(3000)\\n",
  "src/app.ts": "export function createApp() {\\n  return { listen: (port: number) => console.log(\\"listening on\\", port) }\\n}\\n",
  "src/config.ts": "export const config = { port: 3000, env: \\"dev\\" }\\n",
  "README.md": "# demo-app\\n\\nA tiny server.\\n",
}

type EditorParams = { path: string }

/** The editor (stub: replace with yours). */
function Editor({ params }: PanelProps<EditorParams>) {
  return (
    <pre dir="ltr" className="m-0 p-2 font-mono text-[12px] leading-[19px]" aria-label={\`Contents of \${params.path}\`}>
      {FILES[params.path] ?? \`// \${params.path}\`}
    </pre>
  )
}

function Problems() {
  return <p className="p-3 text-[12.5px] text-muted-foreground">▲ &apos;config.env&apos; is read but never validated</p>
}

function Outline() {
  return (
    <ul className="py-1 text-[12.5px]" aria-label="Symbols">
      {["createApp()", "listen(port)", "config"].map((s) => (
        <li key={s} className="flex h-[22px] items-center px-3">
          {s}
        </li>
      ))}
    </ul>
  )
}

/** The panel registry: saved layouts name these keys, never components. */
const panels = defineDockPanels({
  editor: { component: Editor, kind: "document" },
  problems: { component: Problems, kind: "tool", title: "Problems" },
  outline: { component: Outline, kind: "tool", title: "Outline" },
})

const file = (path: string) => ({ id: path, component: "editor", title: path.split("/").pop() ?? path, params: { path }, kind: "document" as const })

/** The default layout: outline and problems beside three files. */
function defaultLayout(): DockLayout {
  return createLayout({
    orientation: "horizontal",
    children: [
      { id: "files", size: 0.3, panels: [{ id: "outline", component: "outline", title: "Outline", kind: "tool" }, { id: "problems", component: "problems", title: "Problems", kind: "tool" }] },
      { id: "editor", panels: [file("src/main.ts"), file("src/app.ts"), file("README.md")] },
    ],
  })
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>r(()=>import(`./persist-storage-BBI4VU9b.js`),[]));var A=te(`my-app:layouts:`),j=m(A),se=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50`;function M(){let[e]=(0,y.useState)(z),[t,n]=(0,y.useState)(e),[r,i]=(0,y.useState)(null),[a,o]=(0,y.useState)(()=>{let e=typeof window>`u`?[]:A.list();return Array.isArray(e)?e:[]}),[l,u]=(0,y.useState)(`Wide`),[p,m]=(0,y.useState)(``),h=()=>void j.names().then(o);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{}),(0,b.jsxs)(`div`,{className:`mb-1 flex flex-wrap items-center gap-1.5 text-[12px]`,children:[(0,b.jsx)(`input`,{"aria-label":`Layout name`,value:l,onChange:e=>u(e.target.value),className:`h-6 w-28 rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring`}),(0,b.jsx)(`button`,{type:`button`,className:se,"data-action":`save-as`,disabled:!l.trim()||!r,onClick:()=>{r&&j.saveAs(l.trim(),r.getLayout()).then(()=>{m(`Saved “${l.trim()}”.`),h()})},children:`Save as`}),a.map(e=>(0,b.jsxs)(`span`,{className:`inline-flex items-center gap-0.5 rounded border pl-2 text-[12px]`,children:[e,(0,b.jsx)(`button`,{type:`button`,className:`h-6 px-1.5 hover:bg-muted`,"data-open-layout":e,"aria-label":`Open ${e}`,onClick:()=>{j.open(e,{components:Object.keys(L)}).then(t=>{t.outcome!==`rejected`&&r?.load(t.layout),m(`Opened “${e}”: ${t.outcome}.`)})},children:`Open`}),(0,b.jsx)(`button`,{type:`button`,className:`h-6 px-1.5 text-muted-foreground hover:bg-muted`,"aria-label":`Delete ${e}`,onClick:()=>void j.remove(e).then(h),children:`×`})]},e)),(0,b.jsx)(`span`,{className:`text-muted-foreground`,children:p})]}),(0,b.jsx)(`code`,{"data-testid":`named-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:s(t)}),(0,b.jsx)(`div`,{"data-testid":`named-dock`,className:`mt-1 h-[220px] overflow-hidden rounded-md border`,children:(0,b.jsx)(c,{ref:i,panels:L,defaultLayout:e,parts:d,label:`Named layouts`,onLayoutChange:n})})]})}var N={"src/main.ts":`import { createApp } from "./app"

createApp().listen(3000)
`,"src/app.ts":`export function createApp() {
  return { listen: (port: number) => console.log("listening on", port) }
}
`,"src/config.ts":`export const config = { port: 3000, env: "dev" }
`,"README.md":`# demo-app

A tiny server.
`};function P({params:e}){return(0,b.jsx)(`pre`,{dir:`ltr`,className:`m-0 p-2 font-mono text-[12px] leading-[19px]`,"aria-label":`Contents of ${e.path}`,children:N[e.path]??`// ${e.path}`})}function F(){return(0,b.jsx)(`p`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:`▲ 'config.env' is read but never validated`})}function I(){return(0,b.jsx)(`ul`,{className:`py-1 text-[12.5px]`,"aria-label":`Symbols`,children:[`createApp()`,`listen(port)`,`config`].map(e=>(0,b.jsx)(`li`,{className:`flex h-[22px] items-center px-3`,children:e},e))})}var L=u({editor:{component:P,kind:`document`},problems:{component:F,kind:`tool`,title:`Problems`},outline:{component:I,kind:`tool`,title:`Outline`}}),R=e=>({id:e,component:`editor`,title:e.split(`/`).pop()??e,params:{path:e},kind:`document`});function z(){return o({orientation:`horizontal`,children:[{id:`files`,size:.3,panels:[{id:`outline`,component:`outline`,title:`Outline`,kind:`tool`},{id:`problems`,component:`problems`,title:`Problems`,kind:`tool`}]},{id:`editor`,panels:[R(`src/main.ts`),R(`src/app.ts`),R(`README.md`)]}]})}var B=`import { useState } from "react"
import { createLayout, createLayoutLibrary, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, localStorageLayoutStore, type DockLayout, type PanelProps, type TypedDockApi } from "@kitora/dock"

/** Named layouts in localStorage under one prefix, so they survive reloads; any LayoutStore fits (a server, IndexedDB). */
const store = localStorageLayoutStore("my-app:layouts:")
const library = createLayoutLibrary(store)

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50"

/** Save the layout under a name, change it, then open a saved name to switch back. */
export function NamedLayouts() {
  const [initial] = useState(defaultLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  // The localStorage store lists synchronously; an async store would load the names in an event or a loader.
  const [names, setNames] = useState<readonly string[]>(() => {
    const listed = typeof window === "undefined" ? [] : store.list()
    return Array.isArray(listed) ? listed : []
  })
  const [name, setName] = useState("Wide")
  const [note, setNote] = useState("")
  const refresh = () => void library.names().then(setNames)
  return (
    <>
      <DockStyles />
      <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[12px]">
        <input aria-label="Layout name" value={name} onChange={(e) => setName(e.target.value)} className="h-6 w-28 rounded border bg-background px-2 outline-none focus-visible:ring-1 focus-visible:ring-ring" />
        <button
          type="button"
          className={BUTTON}
          data-action="save-as"
          disabled={!name.trim() || !api}
          onClick={() => {
            if (!api) return
            void library.saveAs(name.trim(), api.getLayout()).then(() => {
              setNote(\`Saved “\${name.trim()}”.\`)
              refresh()
            })
          }}
        >
          Save as
        </button>
        {names.map((n) => (
          <span key={n} className="inline-flex items-center gap-0.5 rounded border pl-2 text-[12px]">
            {n}
            <button
              type="button"
              className="h-6 px-1.5 hover:bg-muted"
              data-open-layout={n}
              aria-label={\`Open \${n}\`}
              onClick={() => {
                // ok, migrated, ok-with-placeholders or rejected (the layout stays)
                void library.open(n, { components: Object.keys(panels) }).then((r) => {
                  if (r.outcome !== "rejected") api?.load(r.layout)
                  setNote(\`Opened “\${n}”: \${r.outcome}.\`)
                })
              }}
            >
              Open
            </button>
            <button type="button" className="h-6 px-1.5 text-muted-foreground hover:bg-muted" aria-label={\`Delete \${n}\`} onClick={() => void library.remove(n).then(refresh)}>
              ×
            </button>
          </span>
        ))}
        <span className="text-muted-foreground">{note}</span>
      </div>
      <code data-testid="named-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(layout)}
      </code>
      <div data-testid="named-dock" className="mt-1 h-[220px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Named layouts" onLayoutChange={setLayout} />
      </div>
    </>
  )
}

// ── The demo panels: an editor over a few files, problems and an outline ──────

/** The demo project's files: path → contents. */
const FILES: Readonly<Record<string, string>> = {
  "src/main.ts": "import { createApp } from \\"./app\\"\\n\\ncreateApp().listen(3000)\\n",
  "src/app.ts": "export function createApp() {\\n  return { listen: (port: number) => console.log(\\"listening on\\", port) }\\n}\\n",
  "src/config.ts": "export const config = { port: 3000, env: \\"dev\\" }\\n",
  "README.md": "# demo-app\\n\\nA tiny server.\\n",
}

type EditorParams = { path: string }

/** The editor (stub: replace with yours). */
function Editor({ params }: PanelProps<EditorParams>) {
  return (
    <pre dir="ltr" className="m-0 p-2 font-mono text-[12px] leading-[19px]" aria-label={\`Contents of \${params.path}\`}>
      {FILES[params.path] ?? \`// \${params.path}\`}
    </pre>
  )
}

function Problems() {
  return <p className="p-3 text-[12.5px] text-muted-foreground">▲ &apos;config.env&apos; is read but never validated</p>
}

function Outline() {
  return (
    <ul className="py-1 text-[12.5px]" aria-label="Symbols">
      {["createApp()", "listen(port)", "config"].map((s) => (
        <li key={s} className="flex h-[22px] items-center px-3">
          {s}
        </li>
      ))}
    </ul>
  )
}

/** The panel registry: saved layouts name these keys, never components. */
const panels = defineDockPanels({
  editor: { component: Editor, kind: "document" },
  problems: { component: Problems, kind: "tool", title: "Problems" },
  outline: { component: Outline, kind: "tool", title: "Outline" },
})

const file = (path: string) => ({ id: path, component: "editor", title: path.split("/").pop() ?? path, params: { path }, kind: "document" as const })

/** The default layout: outline and problems beside three files. */
function defaultLayout(): DockLayout {
  return createLayout({
    orientation: "horizontal",
    children: [
      { id: "files", size: 0.3, panels: [{ id: "outline", component: "outline", title: "Outline", kind: "tool" }, { id: "problems", component: "problems", title: "Problems", kind: "tool" }] },
      { id: "editor", panels: [file("src/main.ts"), file("src/app.ts"), file("README.md")] },
    ],
  })
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>r(()=>import(`./persist-named-C4vEoO0f.js`),[]));var V=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50`;function H(){let[e]=(0,y.useState)(()=>({...le(),locked:!0})),[t,n]=(0,y.useState)(e),[r,i]=(0,y.useState)(null),a=ne(r);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{}),(0,b.jsx)(`div`,{className:`mb-1 flex flex-wrap items-center gap-1.5 text-[12px]`,children:a.editing?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`button`,{type:`button`,className:V,"data-action":`edit-save`,onClick:a.save,children:`Save`}),(0,b.jsx)(`button`,{type:`button`,className:V,"data-action":`edit-discard`,onClick:a.discard,children:`Discard`}),(0,b.jsx)(`span`,{className:`text-muted-foreground`,children:`Editing: changes are live until you save or discard.`})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`button`,{type:`button`,className:V,"data-action":`edit-begin`,onClick:a.begin,children:`Edit layout`}),(0,b.jsx)(`span`,{className:`text-muted-foreground`,children:`Locked.`})]})}),(0,b.jsx)(`code`,{"data-testid":`locked-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:s(t)}),(0,b.jsx)(`div`,{"data-testid":`locked-dock`,className:`mt-1 h-[200px] overflow-hidden rounded-md border`,children:(0,b.jsx)(c,{ref:i,panels:ce,defaultLayout:e,parts:d,label:`Edit mode`,onLayoutChange:n})})]})}var U={"src/main.ts":`import { createApp } from "./app"

createApp().listen(3000)
`,"src/app.ts":`export function createApp() {
  return { listen: (port: number) => console.log("listening on", port) }
}
`,"src/config.ts":`export const config = { port: 3000, env: "dev" }
`,"README.md":`# demo-app

A tiny server.
`};function W({params:e}){return(0,b.jsx)(`pre`,{dir:`ltr`,className:`m-0 p-2 font-mono text-[12px] leading-[19px]`,"aria-label":`Contents of ${e.path}`,children:U[e.path]??`// ${e.path}`})}function G(){return(0,b.jsx)(`p`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:`▲ 'config.env' is read but never validated`})}function K(){return(0,b.jsx)(`ul`,{className:`py-1 text-[12.5px]`,"aria-label":`Symbols`,children:[`createApp()`,`listen(port)`,`config`].map(e=>(0,b.jsx)(`li`,{className:`flex h-[22px] items-center px-3`,children:e},e))})}var ce=u({editor:{component:W,kind:`document`},problems:{component:G,kind:`tool`,title:`Problems`},outline:{component:K,kind:`tool`,title:`Outline`}}),q=e=>({id:e,component:`editor`,title:e.split(`/`).pop()??e,params:{path:e},kind:`document`});function le(){return o({orientation:`horizontal`,children:[{id:`files`,size:.3,panels:[{id:`outline`,component:`outline`,title:`Outline`,kind:`tool`},{id:`problems`,component:`problems`,title:`Problems`,kind:`tool`}]},{id:`editor`,panels:[q(`src/main.ts`),q(`src/app.ts`),q(`README.md`)]}]})}var J=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, useDockEditSession, type DockLayout, type PanelProps, type TypedDockApi } from "@kitora/dock"

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50"

/** The layout starts locked (no tab closes, drags or splits); Edit unlocks it, Save keeps the changes and locks again, Discard puts it back. */
export function EditMode() {
  const [initial] = useState<DockLayout>(() => ({ ...defaultLayout(), locked: true }))
  const [layout, setLayout] = useState<DockLayout>(initial)
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  const edit = useDockEditSession(api)
  return (
    <>
      <DockStyles />
      <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[12px]">
        {edit.editing ? (
          <>
            <button type="button" className={BUTTON} data-action="edit-save" onClick={edit.save}>
              Save
            </button>
            <button type="button" className={BUTTON} data-action="edit-discard" onClick={edit.discard}>
              Discard
            </button>
            <span className="text-muted-foreground">Editing: changes are live until you save or discard.</span>
          </>
        ) : (
          <>
            <button type="button" className={BUTTON} data-action="edit-begin" onClick={edit.begin}>
              Edit layout
            </button>
            <span className="text-muted-foreground">Locked.</span>
          </>
        )}
      </div>
      <code data-testid="locked-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(layout)}
      </code>
      <div data-testid="locked-dock" className="mt-1 h-[200px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Edit mode" onLayoutChange={setLayout} />
      </div>
    </>
  )
}

// ── The demo panels: an editor over a few files, problems and an outline ──────

/** The demo project's files: path → contents. */
const FILES: Readonly<Record<string, string>> = {
  "src/main.ts": "import { createApp } from \\"./app\\"\\n\\ncreateApp().listen(3000)\\n",
  "src/app.ts": "export function createApp() {\\n  return { listen: (port: number) => console.log(\\"listening on\\", port) }\\n}\\n",
  "src/config.ts": "export const config = { port: 3000, env: \\"dev\\" }\\n",
  "README.md": "# demo-app\\n\\nA tiny server.\\n",
}

type EditorParams = { path: string }

/** The editor (stub: replace with yours). */
function Editor({ params }: PanelProps<EditorParams>) {
  return (
    <pre dir="ltr" className="m-0 p-2 font-mono text-[12px] leading-[19px]" aria-label={\`Contents of \${params.path}\`}>
      {FILES[params.path] ?? \`// \${params.path}\`}
    </pre>
  )
}

function Problems() {
  return <p className="p-3 text-[12.5px] text-muted-foreground">▲ &apos;config.env&apos; is read but never validated</p>
}

function Outline() {
  return (
    <ul className="py-1 text-[12.5px]" aria-label="Symbols">
      {["createApp()", "listen(port)", "config"].map((s) => (
        <li key={s} className="flex h-[22px] items-center px-3">
          {s}
        </li>
      ))}
    </ul>
  )
}

/** The panel registry: saved layouts name these keys, never components. */
const panels = defineDockPanels({
  editor: { component: Editor, kind: "document" },
  problems: { component: Problems, kind: "tool", title: "Problems" },
  outline: { component: Outline, kind: "tool", title: "Outline" },
})

const file = (path: string) => ({ id: path, component: "editor", title: path.split("/").pop() ?? path, params: { path }, kind: "document" as const })

/** The default layout: outline and problems beside three files. */
function defaultLayout(): DockLayout {
  return createLayout({
    orientation: "horizontal",
    children: [
      { id: "files", size: 0.3, panels: [{ id: "outline", component: "outline", title: "Outline", kind: "tool" }, { id: "problems", component: "problems", title: "Problems", kind: "tool" }] },
      { id: "editor", panels: [file("src/main.ts"), file("src/app.ts"), file("README.md")] },
    ],
  })
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>r(()=>import(`./persist-edit-C_hs7mQW.js`),[]));var ue={version:0,groups:[{id:`left`,tabs:[{id:`outline`,component:`outline`,title:`Outline`}]},{id:`right`,tabs:[{id:`src/config.ts`,component:`editor`,title:`config.ts`,path:`src/config.ts`}]}]},Y=`h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50`;function de(){let[e]=(0,y.useState)(_e),[t,n]=(0,y.useState)(e),[r,i]=(0,y.useState)(null),[a,o]=(0,y.useState)(``);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{}),(0,b.jsxs)(`div`,{className:`mb-1 flex flex-wrap items-center gap-1.5 text-[12px]`,children:[(0,b.jsx)(`button`,{type:`button`,className:Y,"data-action":`load-v0`,onClick:()=>r&&o(r.load(ue).outcome),children:`Load schema 0`}),(0,b.jsx)(`button`,{type:`button`,className:Y,"data-action":`load-future`,onClick:()=>r&&o(r.load({...r.save(),version:99}).outcome),children:`Load schema 99`}),(0,b.jsxs)(`span`,{className:`text-muted-foreground`,children:[`outcome: `,(0,b.jsx)(`span`,{"data-testid":`migrate-outcome`,children:a||`none yet`})]})]}),(0,b.jsx)(`code`,{"data-testid":`migrate-outline`,className:`block max-w-full truncate font-mono text-[11px] text-muted-foreground`,children:s(t)}),(0,b.jsx)(`div`,{"data-testid":`migrate-dock`,className:`mt-1 h-[200px] overflow-hidden rounded-md border`,children:(0,b.jsx)(c,{ref:i,panels:ge,defaultLayout:e,parts:d,label:`Migration`,migrators:fe,onLayoutChange:n})})]})}var X=e=>typeof e==`object`&&!!e&&!Array.isArray(e),fe=[{from:0,to:1,migrate(e){return o({orientation:`horizontal`,children:(X(e)&&Array.isArray(e.groups)?e.groups:[]).filter(X).map(e=>({id:typeof e.id==`string`?e.id:void 0,panels:(Array.isArray(e.tabs)?e.tabs:[]).filter(X).map(e=>({id:String(e.id),component:String(e.component),title:typeof e.title==`string`?e.title:void 0,...typeof e.path==`string`?{params:{path:e.path}}:{}}))}))})}}],pe={"src/main.ts":`import { createApp } from "./app"

createApp().listen(3000)
`,"src/app.ts":`export function createApp() {
  return { listen: (port: number) => console.log("listening on", port) }
}
`,"src/config.ts":`export const config = { port: 3000, env: "dev" }
`,"README.md":`# demo-app

A tiny server.
`};function me({params:e}){return(0,b.jsx)(`pre`,{dir:`ltr`,className:`m-0 p-2 font-mono text-[12px] leading-[19px]`,"aria-label":`Contents of ${e.path}`,children:pe[e.path]??`// ${e.path}`})}function he(){return(0,b.jsx)(`p`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:`▲ 'config.env' is read but never validated`})}function Z(){return(0,b.jsx)(`ul`,{className:`py-1 text-[12.5px]`,"aria-label":`Symbols`,children:[`createApp()`,`listen(port)`,`config`].map(e=>(0,b.jsx)(`li`,{className:`flex h-[22px] items-center px-3`,children:e},e))})}var ge=u({editor:{component:me,kind:`document`},problems:{component:he,kind:`tool`,title:`Problems`},outline:{component:Z,kind:`tool`,title:`Outline`}}),Q=e=>({id:e,component:`editor`,title:e.split(`/`).pop()??e,params:{path:e},kind:`document`});function _e(){return o({orientation:`horizontal`,children:[{id:`files`,size:.3,panels:[{id:`outline`,component:`outline`,title:`Outline`,kind:`tool`},{id:`problems`,component:`problems`,title:`Problems`,kind:`tool`}]},{id:`editor`,panels:[Q(`src/main.ts`),Q(`src/app.ts`),Q(`README.md`)]}]})}var $=`import { useState } from "react"
import { createLayout, defineDockPanels, Dock, DOCK_UI, DockStyles, layoutOutline, type DockLayout, type DockMigrator, type PanelProps, type TypedDockApi } from "@kitora/dock"

/** Schema 0, the shape an older build saved: a row of groups with their tabs. Only the migrator below knows it. */
const SCHEMA_0 = {
  version: 0,
  groups: [
    { id: "left", tabs: [{ id: "outline", component: "outline", title: "Outline" }] },
    { id: "right", tabs: [{ id: "src/config.ts", component: "editor", title: "config.ts", path: "src/config.ts" }] },
  ],
}

const BUTTON = "h-6 rounded border bg-background px-2 text-[12px] hover:bg-muted disabled:opacity-50"

/** A layout from an older build is lifted by the migrators; JSON from a newer build is rejected and the live layout stays. */
export function MigrateSchema() {
  const [initial] = useState(defaultLayout)
  const [layout, setLayout] = useState<DockLayout>(initial)
  const [api, setApi] = useState<TypedDockApi<typeof panels> | null>(null)
  const [note, setNote] = useState("")
  return (
    <>
      <DockStyles />
      <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[12px]">
        <button type="button" className={BUTTON} data-action="load-v0" onClick={() => api && setNote(api.load(SCHEMA_0).outcome)}>
          Load schema 0
        </button>
        <button type="button" className={BUTTON} data-action="load-future" onClick={() => api && setNote(api.load({ ...api.save(), version: 99 }).outcome)}>
          Load schema 99
        </button>
        <span className="text-muted-foreground">
          outcome: <span data-testid="migrate-outcome">{note || "none yet"}</span>
        </span>
      </div>
      <code data-testid="migrate-outline" className="block max-w-full truncate font-mono text-[11px] text-muted-foreground">
        {layoutOutline(layout)}
      </code>
      <div data-testid="migrate-dock" className="mt-1 h-[200px] overflow-hidden rounded-md border">
        <Dock ref={setApi} panels={panels} defaultLayout={initial} parts={DOCK_UI} label="Migration" migrators={migrators} onLayoutChange={setLayout} />
      </div>
    </>
  )
}

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v)

/** Lifts schema 0 to 1: each saved group becomes a group of a horizontal split. */
const migrators: readonly DockMigrator[] = [
  {
    from: 0,
    to: 1,
    migrate(json) {
      const groups = isRecord(json) && Array.isArray(json.groups) ? json.groups : []
      return createLayout({
        orientation: "horizontal",
        children: groups.filter(isRecord).map((g) => ({
          id: typeof g.id === "string" ? g.id : undefined,
          panels: (Array.isArray(g.tabs) ? g.tabs : []).filter(isRecord).map((t) => ({
            id: String(t.id),
            component: String(t.component),
            title: typeof t.title === "string" ? t.title : undefined,
            ...(typeof t.path === "string" ? { params: { path: t.path } } : {}),
          })),
        })),
      })
    },
  },
]

// ── The demo panels: an editor over a few files, problems and an outline ──────

/** The demo project's files: path → contents. */
const FILES: Readonly<Record<string, string>> = {
  "src/main.ts": "import { createApp } from \\"./app\\"\\n\\ncreateApp().listen(3000)\\n",
  "src/app.ts": "export function createApp() {\\n  return { listen: (port: number) => console.log(\\"listening on\\", port) }\\n}\\n",
  "src/config.ts": "export const config = { port: 3000, env: \\"dev\\" }\\n",
  "README.md": "# demo-app\\n\\nA tiny server.\\n",
}

type EditorParams = { path: string }

/** The editor (stub: replace with yours). */
function Editor({ params }: PanelProps<EditorParams>) {
  return (
    <pre dir="ltr" className="m-0 p-2 font-mono text-[12px] leading-[19px]" aria-label={\`Contents of \${params.path}\`}>
      {FILES[params.path] ?? \`// \${params.path}\`}
    </pre>
  )
}

function Problems() {
  return <p className="p-3 text-[12.5px] text-muted-foreground">▲ &apos;config.env&apos; is read but never validated</p>
}

function Outline() {
  return (
    <ul className="py-1 text-[12.5px]" aria-label="Symbols">
      {["createApp()", "listen(port)", "config"].map((s) => (
        <li key={s} className="flex h-[22px] items-center px-3">
          {s}
        </li>
      ))}
    </ul>
  )
}

/** The panel registry: saved layouts name these keys, never components. */
const panels = defineDockPanels({
  editor: { component: Editor, kind: "document" },
  problems: { component: Problems, kind: "tool", title: "Problems" },
  outline: { component: Outline, kind: "tool", title: "Outline" },
})

const file = (path: string) => ({ id: path, component: "editor", title: path.split("/").pop() ?? path, params: { path }, kind: "document" as const })

/** The default layout: outline and problems beside three files. */
function defaultLayout(): DockLayout {
  return createLayout({
    orientation: "horizontal",
    children: [
      { id: "files", size: 0.3, panels: [{ id: "outline", component: "outline", title: "Outline", kind: "tool" }, { id: "problems", component: "problems", title: "Problems", kind: "tool" }] },
      { id: "editor", panels: [file("src/main.ts"), file("src/app.ts"), file("README.md")] },
    ],
  })
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>r(()=>import(`./persist-migrate-EjQqEnDd.js`),[]));function ve(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(t,{title:`Persistence`,children:`The layout is plain JSON. A storage adapter restores it when the page loads and saves it after each change; named layouts let users keep several; edit mode locks the layout until they choose to change it; and migrators lift layouts saved by older builds.`}),(0,b.jsx)(p,{n:1,title:`Saved across reloads`,blurb:`Close a tab, drag one to another group or resize a sash, then reload the page: the layout comes back. Reset returns to the default layout (and saves that); Forget clears the saved copy.`,code:k,children:(0,b.jsx)(re,{})}),(0,b.jsx)(p,{n:2,title:`Named layouts`,blurb:`Save the current layout under a name, change it, then open a saved name to switch back. Names live in localStorage, so they survive reloads.`,code:B,children:(0,b.jsx)(M,{})}),(0,b.jsx)(p,{n:3,title:`Edit mode`,blurb:`The layout starts locked: no tab closes, drags or splits. Edit layout unlocks it; Save keeps your changes and locks again, Discard puts the layout back as it was.`,code:J,children:(0,b.jsx)(H,{})}),(0,b.jsx)(p,{n:4,title:`Migrating an older schema`,blurb:`Load a layout saved by an older build (schema 0, a different shape): the migrator lifts it to schema 1. JSON from a newer build is rejected and the live layout stays.`,code:$,children:(0,b.jsx)(de,{})})]})}export{ve as component};